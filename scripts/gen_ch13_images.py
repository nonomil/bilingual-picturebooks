#!/usr/bin/env python3
"""Generate Math Ch13 images via Camoufox + Nano Banana.

Key fixes from Feishu playbook:
- headless=False (required for image detection)
- SOCKS5 proxy (VPS IP region-blocked, need 搬瓦工 exit)
- Same conversation for all images
- <100 char prompts with "small image, 640x480"
"""
import sys, os, time, json, base64, pyotp
from camoufox.sync_api import Camoufox

EMAIL = "BellkisMares@gmail.com"
PASSWORD = "2fr5svqe3"
TOTP_KEY = "mbggtjvtr7rvhda3bv6xib26c7eghmkr"
AI_STUDIO_URL = "https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image"
OUT_DIR = "/home/deploy/bilingual-picturebooks/math-kindergarten/images/chapter-13"

PROMPTS = [
    ("page-01.png", "Minecraft pixel art, Steve Alex in warehouse, boxes in groups of 10, small image, 640x480"),
    ("page-02.png", "Minecraft pixel art, Alex teaching tens and ones with blocks, 3 tens 4 ones=34, small image, 640x480"),
    ("page-03.png", "Minecraft pixel art, child hands arrange cubes into groups of 10, learning, small image, 640x480"),
    ("page-04.png", "Minecraft pixel art, split screen red X 304 vs green check 34, common mistake, small image, 640x480"),
    ("page-05.png", "Minecraft pixel art, worksheet tens ones boxes, write the number, practice, small image, 640x480"),
    ("page-06.png", "Minecraft pixel art, multiple choice circle correct number 46 or 64, practice, small image, 640x480"),
    ("page-07.png", "Minecraft pixel art, Steve counting boxes in warehouse adventure challenge, small image, 640x480"),
    ("page-08.png", "Minecraft pixel art, Steve Alex celebrate with gold sparkles and star badge, small image, 640x480"),
    ("page-01-ext.png", "Minecraft pixel art, Steve Alex at warehouse door remembering numbers to 100, small image, 640x480"),
    ("page-02-ext.png", "Minecraft pixel art, Alex leads Steve counting boxes by tens in warehouse, small image, 640x480"),
    ("page-03-ext.png", "Minecraft pixel art, Steve examines number cards 34 52 78, aha moment, small image, 640x480"),
    ("page-04-ext.png", "Minecraft pixel art, Alex Steve sorting item cards with numbers practice, small image, 640x480"),
    ("page-05-ext.png", "Minecraft pixel art, Steve jumping Alex clapping, counting challenge completed, small image, 640x480"),
]

def dismiss(page):
    page.evaluate('''() => {
        document.querySelectorAll('.cdk-overlay-backdrop').forEach(function(e){e.remove()});
        document.querySelectorAll('.cdk-overlay-container').forEach(function(c){c.innerHTML=''});
        for (const b of document.querySelectorAll('button')) {
            const t = b.textContent.trim();
            if (['Dismiss','Got it','Accept','Close','Continue'].includes(t)) b.click();
        }
    }''')

def login(page):
    page.goto("https://accounts.google.com/", wait_until="domcontentloaded")
    time.sleep(5)
    dismiss(page)
    time.sleep(1)

    if not page.evaluate('() => !!document.querySelector(\'input[type="email"]\')'):
        print("  Already logged in")
        return

    # Email
    page.evaluate(f'''() => {{
        const i = document.querySelector('input[type="email"]');
        if(i){{i.value="{EMAIL}";i.dispatchEvent(new Event("input",{{bubbles:true}}))}}
    }}''')
    time.sleep(1)
    page.evaluate('''() => {
        for(const b of document.querySelectorAll("button")){
            if((b.textContent.includes("Next")||b.textContent.includes("下一步"))&&b.offsetParent!==null){b.click();break}
        }
    }''')
    time.sleep(5)

    # Password
    page.evaluate(f'''() => {{
        const i = document.querySelector('input[type="password"]');
        if(i){{i.value="{PASSWORD}";i.dispatchEvent(new Event("input",{{bubbles:true}}))}}
    }}''')
    time.sleep(1)
    page.evaluate('''() => {
        for(const b of document.querySelectorAll("button")){
            if((b.textContent.includes("Next")||b.textContent.includes("下一步"))&&b.offsetParent!==null){b.click();break}
        }
    }''')
    time.sleep(5)

    # 2FA
    code = pyotp.TOTP(TOTP_KEY).now()
    page.evaluate(f'''() => {{
        const i = document.querySelector('input[type="tel"], input[autocomplete="one-time-code"]');
        if(i){{i.value="{code}";i.dispatchEvent(new Event("input",{{bubbles:true}}))}}
    }}''')
    time.sleep(1)
    page.evaluate('''() => {
        for(const b of document.querySelectorAll("button")){
            if((b.textContent.includes("Next")||b.textContent.includes("下一步"))&&b.offsetParent!==null){b.click();break}
        }
    }''')
    time.sleep(6)
    print("  Login OK")

def enter_chat(page):
    page.goto(AI_STUDIO_URL, wait_until="domcontentloaded")
    time.sleep(5)
    dismiss(page)
    time.sleep(2)

    cards = page.evaluate('()=>document.querySelectorAll(".category-card").length')
    if cards > 0:
        print(f"  {cards} cards, clicking Image Generation...")
        page.evaluate('''() => {
            for(const el of document.querySelectorAll('.category-card, button, a, [role="button"]')){
                if(el.textContent.includes('Image')&&el.offsetParent!==null){el.click();break}
            }
        }''')
        time.sleep(6)

    cards = page.evaluate('()=>document.querySelectorAll(".category-card").length')
    tas = page.evaluate('()=>document.querySelectorAll("textarea").length')
    print(f"  Ready: {cards} cards, {tas} textareas")

def count_imgs(page):
    return page.evaluate('''()=>document.querySelectorAll('img.loaded-image, img[class*="loaded"], img[src*="blob:"]').length''')

def extract_last(page):
    r = page.evaluate('''async()=>{
        const imgs=document.querySelectorAll('img.loaded-image, img[class*="loaded"], img[src*="blob:"]');
        if(imgs.length===0)return null;
        const img=imgs[imgs.length-1];
        if(!img.src||!img.src.startsWith('blob:'))return null;
        const resp=await fetch(img.src);
        const blob=await resp.blob();
        return new Promise(function(resolve){
            const rd=new FileReader();
            rd.onloadend=function(){resolve(rd.result)};
            rd.readAsDataURL(blob);
        });
    }''')
    if not r:
        return None
    return base64.b64decode(r.split('base64,')[1])

def generate(page, prompt, output_path):
    # Set textarea
    page.evaluate(f'''() => {{
        const ta=document.querySelector('textarea');
        if(!ta)return;
        ta.focus();
        ta.value="{prompt}";
        ta.dispatchEvent(new Event("input",{{bubbles:true}}));
        ta.dispatchEvent(new Event("change",{{bubbles:true}}));
    }}''')
    time.sleep(1)

    before = count_imgs(page)
    page.evaluate('''() => {
        for(const b of Array.from(document.querySelectorAll('button'))){
            if(b.textContent.includes('Run')&&b.offsetParent!==null){b.click();return}
        }
    }''')

    start = time.time()
    while time.time() - start < 90:
        time.sleep(3)
        if count_imgs(page) > before:
            time.sleep(2)
            data = extract_last(page)
            if data:
                with open(output_path, 'wb') as f:
                    f.write(data)
                return len(data)
    return None

def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    existing = set(os.listdir(OUT_DIR))
    todo = [(n, p) for n, p in PROMPTS if n not in existing]

    if not todo:
        print("All images already exist!")
        return

    print(f"Ch13: {len(todo)}/13 to generate (via proxy)")
    print(f"Account: {EMAIL}\n")

    with Camoufox(
        headless=False,
        proxy={'server': 'socks5://127.0.0.1:10809'},
        geoip=True,
        firefox_user_prefs={"dom.ipc.processCount": 2}
    ) as browser:
        page = browser.new_page()

        print("=== Login ===")
        login(page)
        time.sleep(3)

        print("=== AI Studio ===")
        enter_chat(page)

        for i, (name, prompt) in enumerate(todo):
            print(f"[{i+1}/{len(todo)}] {name} ({len(prompt)} chars)")
            size = generate(page, prompt, os.path.join(OUT_DIR, name))
            if size:
                print(f"  -> {size//1024}KB ✓")
            else:
                print(f"  -> TIMEOUT ✗")

            if i < len(todo) - 1:
                w = 40
                print(f"  Wait {w}s...")
                time.sleep(w)

    pngs = [f for f in os.listdir(OUT_DIR) if f.endswith('.png')]
    total_mb = sum(os.path.getsize(os.path.join(OUT_DIR, f)) for f in pngs) / (1024 * 1024)
    print(f"\nDone! {len(pngs)} PNGs, {total_mb:.1f}MB")

if __name__ == "__main__":
    main()
