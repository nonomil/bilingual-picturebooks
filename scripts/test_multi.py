#!/usr/bin/env python3
"""Test: multiple images in one conversation."""
import time, json, base64, pyotp, sys
from pathlib import Path
from camoufox.sync_api import Camoufox

ACCT = {"email": "BellkisMares@gmail.com", "pass": "2fr5svqe3", "totp": "mbggtjvtr7rvhda3bv6xib26c7eghmkr"}
AI_STUDIO = "https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image"
PROMPTS = [
    "Math kindergarten, simple addition with apples, Minecraft pixel art, 640x480",
    "Math kindergarten, counting stars 1-10, Minecraft pixel art, white bg, 640x480",
]

def dismiss(page):
    try:
        page.evaluate("() => { document.querySelectorAll('.cdk-overlay-backdrop').forEach(e => e.remove()); for(const b of document.querySelectorAll('button')){ const t = b.textContent.trim(); if(['Dismiss','Got it','Accept','Close','Continue'].includes(t)) b.click(); } }")
    except: pass

def login(page, acct):
    e, p, k = acct["email"], acct["pass"], acct["totp"]
    print(f"Login: {e}...")
    page.goto("https://accounts.google.com/", wait_until="domcontentloaded")
    time.sleep(5); dismiss(page); time.sleep(1)
    if not page.evaluate('() => !!document.querySelector(\'input[type="email"]\')'):
        print("Already in"); return
    page.evaluate(f'()=>{{const i=document.querySelector(\'input[type="email"]\'); if(i)i.value="{e}";i.dispatchEvent(new Event("input",{{bubbles:!0}}))}}')
    time.sleep(1)
    page.evaluate('()=>{for(const b of document.querySelectorAll("button")){if(b.textContent.includes("Next")&&b.offsetParent){b.click();return}}}')
    time.sleep(5)
    page.evaluate(f'()=>{{const i=document.querySelector(\'input[type="password"]\'); if(i)i.value="{p}";i.dispatchEvent(new Event("input",{{bubbles:!0}}))}}')
    time.sleep(1)
    page.evaluate('()=>{for(const b of document.querySelectorAll("button")){if(b.textContent.includes("Next")&&b.offsetParent){b.click();return}}}')
    time.sleep(5)
    code = pyotp.TOTP(k).now()
    page.evaluate(f'()=>{{const i=document.querySelector(\'input[type="tel"], input[autocomplete="one-time-code"]\'); if(i)i.value="{code}";i.dispatchEvent(new Event("input",{{bubbles:!0}}))}}')
    time.sleep(1)
    page.evaluate('()=>{for(const b of document.querySelectorAll("button")){if(b.textContent.includes("Next")&&b.offsetParent){b.click();return}}}')
    time.sleep(6)
    print("OK")

def generate_first(page, prompt):
    """First image: navigate to new chat."""
    print(f"\n--- [1] First image: {prompt[:50]}... ---")
    page.goto(AI_STUDIO, wait_until="domcontentloaded")
    time.sleep(8); dismiss(page); time.sleep(2)
    tas = page.evaluate('() => document.querySelectorAll("textarea").length')
    if tas == 0:
        page.evaluate("() => { for(const el of document.querySelectorAll('.category-card,button,a,[role=button]')){ if(el.textContent.includes('Image')&&el.offsetParent){el.click();break} } }")
        time.sleep(6)
    # Set prompt
    page.evaluate("(p) => { const ta = document.querySelector('textarea'); if(ta){ta.value=p; ta.dispatchEvent(new Event('input',{bubbles:!0})); ta.dispatchEvent(new Event('change',{bubbles:!0}));} }", prompt)
    time.sleep(2)
    # Click Run
    page.evaluate("()=>{ for(const b of document.querySelectorAll('button')){ if(b.textContent.includes('Run')&&b.offsetParent){b.click();return} } }")
    return extract_image(page)

def generate_next(page, prompt, idx):
    """Subsequent images: reuse same chat, type new prompt."""
    print(f"\n--- [{idx}] Next image: {prompt[:50]}... ---")
    time.sleep(5); dismiss(page); time.sleep(2)
    
    # Try to find and fill textarea
    ta_set = page.evaluate("(p) => {"
        "const tas = document.querySelectorAll('textarea');"
        "console.log('textareas found:', tas.length);"
        "for (let i = tas.length-1; i >= 0; i--) {"
        "  const ta = tas[i];"
        "  if (ta.offsetParent) {"
        "    ta.value = p;"
        "    ta.dispatchEvent(new Event('input',{bubbles:true}));"
        "    ta.dispatchEvent(new Event('change',{bubbles:true}));"
        "    return 'set idx:' + i;"
        "  }"
        "}"
        "return 'no visible ta';"
    "}", prompt)
    print(f"  Textarea: {ta_set}")
    time.sleep(2)
    
    # Click Run
    clicked = page.evaluate("()=>{ for(const b of document.querySelectorAll('button')){ if((b.textContent.includes('Run')||b.textContent.includes('Send'))&&b.offsetParent){b.click();return b.textContent} } return 'not found' }")
    print(f"  Clicked: {clicked}")
    
    return extract_image(page)

def extract_image(page):
    start = time.time()
    while time.time() - start < 90:
        time.sleep(3)
        src = page.evaluate("()=>{ const imgs=document.querySelectorAll('img.loaded-image,img[class*=\"loaded\"],img[src*=\"blob:\"]'); for(let i=imgs.length-1;i>=0;i--){ if(imgs[i].naturalWidth>100&&imgs[i].src&&imgs[i].src.startsWith('blob:')) return imgs[i].src } return null }")
        if src:
            time.sleep(2)
            b64 = page.evaluate("async(u)=>{ const r=await fetch(u); const b=await r.blob(); return new Promise(res=>{ const rd=new FileReader(); rd.onloadend=()=>res(rd.result); rd.readAsDataURL(b) }) }", src)
            if b64 and 'base64,' in b64:
                d = base64.b64decode(b64.split('base64,')[1])
                if len(d) > 100000:
                    print(f"  -> {len(d)//1024}KB ✓")
                    return d
            print("  -> image too small or decode failed")
            return None
    print("  -> timeout")
    return None

def main():
    with Camoufox(headless=True, humanize=False, proxy={'server': 'socks5://127.0.0.1:10809'}, geoip=True,
                  firefox_user_prefs={"dom.ipc.processCount": 1}) as browser:
        page = browser.new_page()
        login(page, ACCT)
        time.sleep(2)
        
        for i, prompt in enumerate(PROMPTS):
            if i == 0:
                data = generate_first(page, prompt)
            else:
                data = generate_next(page, prompt, i+1)
            
            if data and len(data) > 100000:
                Path(f"/tmp/test_multi_{i+1}.png").write_bytes(data)
                print(f"  Saved: test_multi_{i+1}.png")
            else:
                print(f"  FAILED")
                break
            
            if i < len(PROMPTS) - 1:
                time.sleep(10)
    
    print("\n=== Done ===")

if __name__ == "__main__":
    main()
