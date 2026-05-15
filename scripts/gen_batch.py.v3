#!/usr/bin/env python3
"""Batch Gemini image generation with retry + account rotation + resume.

Design:
- State file tracks progress per image (JSON, survives crashes)
- 4 Google accounts, rotate every 15 images
- Failed images retried after account switch
- Same conversation per account session (efficiency)
- Cron-friendly: safe to kill/restart, picks up where left off
"""
import sys, os, time, json, base64, pyotp, random
from pathlib import Path
from camoufox.sync_api import Camoufox

# ============ CONFIG ============

ACCOUNTS = [
    {"email": "BellkisMares@gmail.com",    "pass": "2fr5svqe3",     "totp": "mbggtjvtr7rvhda3bv6xib26c7eghmkr"},
    {"email": "ripmysleeves@yahoo.com",   "pass": "wangdana123@",  "totp": "muoto4uznefcobgb5rcdno6j4dn7hgho"},
]

MAX_PER_ACCOUNT = 15       # Switch account after N images
CONV_REFRESH = 3            # Refresh conversation every N images (Nano Banana limit)
SLEEP_BETWEEN = 20         # Seconds between images
RETRY_DELAY = 60           # Wait before retrying a failed image
MAX_RETRIES = 3            # Max retries per image before giving up
AI_STUDIO_URL = "https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image"
BASE_DIR = Path("/home/deploy/bilingual-picturebooks/math-kindergarten/images")
STATE_FILE = Path("/home/deploy/bilingual-picturebooks/scripts/gen_state.json")

# ============ PROMPTS ============

def get_prompts(chapter_num):
    """Return list of (filename, prompt) for a chapter."""
    ch = f"chapter-{chapter_num}"
    # Base: 8 main lesson images + 5 extension images = 13
    common = "Minecraft pixel art, small image, 640x480"
    
    prompts = {
        13: [  # 认识100以内的数
            ("page-01.png", f"Steve Alex in warehouse looking at boxes in groups of 10, {common}"),
            ("page-02.png", f"Alex teaching tens and ones with blocks, 3 tens 4 ones=34, {common}"),
            ("page-03.png", f"Child hands arranging cubes into groups of 10, learning, {common}"),
            ("page-04.png", f"Split screen red X 304 vs green check 34, common mistake, {common}"),
            ("page-05.png", f"Worksheet tens ones boxes write the number, practice, {common}"),
            ("page-06.png", f"Multiple choice circle correct number 46 or 64, practice, {common}"),
            ("page-07.png", f"Steve counting boxes in warehouse challenge adventure, {common}"),
            ("page-08.png", f"Steve Alex celebrate with gold sparkles star badge, {common}"),
            ("page-01-ext.png", f"Steve Alex warehouse door remembering numbers to 100, {common}"),
            ("page-02-ext.png", f"Alex leads Steve counting boxes by tens in warehouse, {common}"),
            ("page-03-ext.png", f"Steve examines number cards 34 52 78 aha moment, {common}"),
            ("page-04-ext.png", f"Alex Steve sorting item cards numbers practice, {common}"),
            ("page-05-ext.png", f"Steve jumping Alex clapping counting challenge completed, {common}"),
        ],
        14: [  # 两位数加减
            ("page-01.png", f"Steve Alex with 23 apples and 12 apples, adding them together, {common}"),
            ("page-02.png", f"Adding tens first then ones, 23 plus 15 visual breakdown, {common}"),
            ("page-03.png", f"Subtracting tens then ones, 45 minus 23 step by step, {common}"),
            ("page-04.png", f"Common mistake spot the error 23+14=37 blue circle, {common}"),
            ("page-05.png", f"Practice worksheet addition and subtraction problems, {common}"),
            ("page-06.png", f"Word problems with Minecraft items, 34 blocks plus 23 more, {common}"),
            ("page-07.png", f"Steve Alex building challenge adding subtracting blocks, {common}"),
            ("page-08.png", f"Celebration both holding up correct answer signs, {common}"),
            ("page-01-ext.png", f"Review practicing mental math tens and ones, {common}"),
            ("page-02-ext.png", f"Advanced two digit regrouping visual aid, {common}"),
            ("page-03-ext.png", f"Subtraction challenge regrouping tens to ones, {common}"),
            ("page-04-ext.png", f"Money addition practice with Minecraft coins, {common}"),
            ("page-05-ext.png", f"Steve Alex math triumph celebration, {common}"),
        ],
        15: [  # 认识钱币
            ("page-01.png", f"Steve Alex at market looking at coins and bills, {common}"),
            ("page-02.png", f"Different coins 1yuan 5jiao 1jiao learn values, {common}"),
            ("page-03.png", f"Counting coins adding up to buy an apple, {common}"),
            ("page-04.png", f"Common mistake confusing jiao and yuan, {common}"),
            ("page-05.png", f"Practice counting money exercises, {common}"),
            ("page-06.png", f"Making change word problems, buy items get change, {common}"),
            ("page-07.png", f"Steve Alex shopping spree with budget, {common}"),
            ("page-08.png", f"Celebration coin collection complete, {common}"),
            ("page-01-ext.png", f"Coin sorting and grouping activity, {common}"),
            ("page-02-ext.png", f"Paper money yuan denominations explained, {common}"),
            ("page-03-ext.png", f"Buying multiple items counting total, {common}"),
            ("page-04-ext.png", f"Money math race game between Steve Alex, {common}"),
            ("page-05-ext.png", f"Steve Alex proud of money skills, {common}"),
        ],
        16: [  # 认识钟表
            ("page-01.png", f"Steve looking at big wall clock confused, Alex explaining, {common}"),
            ("page-02.png", f"Clock diagram with hour hand and minute hand labeled, {common}"),
            ("page-03.png", f"Reading oclock times 3 oclock 7 oclock examples, {common}"),
            ("page-04.png", f"Common mistake hour hand vs minute hand mix up, {common}"),
            ("page-05.png", f"Practice draw hands on clock faces, {common}"),
            ("page-06.png", f"Daily schedule activity pictures match to times, {common}"),
            ("page-07.png", f"Steve racing against clock timed challenge, {common}"),
            ("page-08.png", f"Celebration Steve reads clock correctly pride, {common}"),
            ("page-01-ext.png", f"Half past times explained quarter past, {common}"),
            ("page-02-ext.png", f"Digital clock vs analog clock comparison, {common}"),
            ("page-03-ext.png", f"Elapsed time simple concept one hour later, {common}"),
            ("page-04-ext.png", f"Time word problems story context, {common}"),
            ("page-05-ext.png", f"Steve Alex time management heroes, {common}"),
        ],
        17: [  # 图形拼搭
            ("page-01.png", f"Steve Alex in block world shapes everywhere, {common}"),
            ("page-02.png", f"Circle square triangle rectangle basic shapes, {common}"),
            ("page-03.png", f"Tangram puzzle making pictures from shapes, {common}"),
            ("page-04.png", f"Common mistake confusing square and rectangle, {common}"),
            ("page-05.png", f"Shape hunt find shapes in scene, {common}"),
            ("page-06.png", f"Making new shapes from combining shapes, {common}"),
            ("page-07.png", f"Steve Alex building castle from shapes, {common}"),
            ("page-08.png", f"Celebration shape castle complete gold sparkles, {common}"),
            ("page-01-ext.png", f"3D shapes cube sphere cylinder pyramid, {common}"),
            ("page-02-ext.png", f"Drawing shapes with grid paper, {common}"),
            ("page-03-ext.png", f"Symmetry mirror fold activity, {common}"),
            ("page-04-ext.png", f"Building complex Minecraft structures from shapes, {common}"),
            ("page-05-ext.png", f"Steve Alex shape masters celebration, {common}"),
        ],
        18: [  # 比较与排序
            ("page-01.png", f"Steve Alex comparing heights tallest shortest, {common}"),
            ("page-02.png", f"Comparing lengths longer shorter same, {common}"),
            ("page-03.png", f"Ordering objects by size smallest to largest, {common}"),
            ("page-04.png", f"Common mistake comparing when items are same, {common}"),
            ("page-05.png", f"Practice compare numbers greater less equal, {common}"),
            ("page-06.png", f"Sorting items by multiple attributes, {common}"),
            ("page-07.png", f"Steve Alex comparison challenge game, {common}"),
            ("page-08.png", f"Celebration both comparison champions, {common}"),
            ("page-01-ext.png", f"Weighing objects heavier lighter balance, {common}"),
            ("page-02-ext.png", f"Comparing volumes containers more less, {common}"),
            ("page-03-ext.png", f"Number ordering on number line, {common}"),
            ("page-04-ext.png", f"Comparing prices at Minecraft shop, {common}"),
            ("page-05-ext.png", f"Steve Alex celebrate comparison skills, {common}"),
        ],
        19: [  # 拓展篇（数字规律）
            ("page-01.png", f"Steve discovers number patterns on wall, {common}"),
            ("page-02.png", f"Skip counting by 2s 5s 10s visual chart, {common}"),
            ("page-03.png", f"Number sequences find the next number, {common}"),
            ("page-04.png", f"Common mistake wrong skip counting pattern, {common}"),
            ("page-05.png", f"Practice fill in missing numbers patterns, {common}"),
            ("page-06.png", f"Odd and even numbers visual explanation, {common}"),
            ("page-07.png", f"Steve Alex pattern hunt adventure, {common}"),
            ("page-08.png", f"Celebration pattern masters badge, {common}"),
            ("page-01-ext.png", f"Growing patterns visual increasing, {common}"),
            ("page-02-ext.png", f"Number grid hundred chart exploration, {common}"),
            ("page-03-ext.png", f"Patterns in real life nature and blocks, {common}"),
            ("page-04-ext.png", f"Creating own number patterns, {common}"),
            ("page-05-ext.png", f"Steve Alex pattern celebration, {common}"),
        ],
        20: [  # 位置与方向
            ("page-01.png", f"Steve lost Alex gives directions left right, {common}"),
            ("page-02.png", f"Left right up down front behind visual guide, {common}"),
            ("page-03.png", f"Following directions grid path activity, {common}"),
            ("page-04.png", f"Common mistake mixing up left and right, {common}"),
            ("page-05.png", f"Practice map reading simple grid, {common}"),
            ("page-06.png", f"Treasure hunt follow directions, {common}"),
            ("page-07.png", f"Steve Alex maze challenge using directions, {common}"),
            ("page-08.png", f"Celebration treasure chest found, {common}"),
            ("page-01-ext.png", f"Cardinal directions North South East West, {common}"),
            ("page-02-ext.png", f"Position words above below between beside, {common}"),
            ("page-03-ext.png", f"Coordinate grid simple intro, {common}"),
            ("page-04-ext.png", f"Following multi step directions, {common}"),
            ("page-05-ext.png", f"Steve Alex navigation champions, {common}"),
        ],
        21: [  # 乘法启蒙
            ("page-01.png", f"Steve Alex see repeated groups of flowers 3 groups of 4, {common}"),
            ("page-02.png", f"Multiplication as repeated addition visual 3x4=4+4+4, {common}"),
            ("page-03.png", f"Arrays 2x5 grid of blocks, {common}"),
            ("page-04.png", f"Common mistake confusing multiplication and addition, {common}"),
            ("page-05.png", f"Practice skip counting to multiply, {common}"),
            ("page-06.png", f"Word problems with groups of items, {common}"),
            ("page-07.png", f"Steve Alex multiplication quest collecting groups, {common}"),
            ("page-08.png", f"Celebration times table champion badge, {common}"),
            ("page-01-ext.png", f"Multiplication table 2x to 5x visual chart, {common}"),
            ("page-02-ext.png", f"Commutative property 3x4 vs 4x3 same result, {common}"),
            ("page-03-ext.png", f"Larger arrays 4x6 block building, {common}"),
            ("page-04-ext.png", f"Real life multiplication cooking recipes, {common}"),
            ("page-05-ext.png", f"Steve Alex multiplication masters, {common}"),
        ],
        22: [  # 分数的故事
            ("page-01.png", f"Steve Alex share a cake cutting in half, {common}"),
            ("page-02.png", f"One half visual pizza apple split parts equal, {common}"),
            ("page-03.png", f"One quarter four equal parts, {common}"),
            ("page-04.png", f"Common mistake unequal parts are not fractions, {common}"),
            ("page-05.png", f"Practice shade half or quarter of shapes, {common}"),
            ("page-06.png", f"Fair sharing among friends story problem, {common}"),
            ("page-07.png", f"Steve Alex fraction feast sharing foods, {common}"),
            ("page-08.png", f"Celebration fair sharing success, {common}"),
            ("page-01-ext.png", f"One third three equal parts visual, {common}"),
            ("page-02-ext.png", f"Fraction notation one half written as 1/2, {common}"),
            ("page-03-ext.png", f"Comparing fractions half bigger than quarter, {common}"),
            ("page-04-ext.png", f"Fractions of a set half of 8 apples, {common}"),
            ("page-05-ext.png", f"Steve Alex fraction celebration, {common}"),
        ],
        23: [  # 应用题大挑战
            ("page-01.png", f"Steve Alex reading story problem confused and thinking, {common}"),
            ("page-02.png", f"Read draw solve strategy visual example, {common}"),
            ("page-03.png", f"Addition word problem with Minecraft context, {common}"),
            ("page-04.png", f"Common mistake wrong operation add vs subtract, {common}"),
            ("page-05.png", f"Practice solving 3 story problems, {common}"),
            ("page-06.png", f"Two step problem buy items then calculate, {common}"),
            ("page-07.png", f"Steve Alex problem solving adventure quest, {common}"),
            ("page-08.png", f"Celebration all problems solved trophy, {common}"),
            ("page-01-ext.png", f"Compare problems how many more less, {common}"),
            ("page-02-ext.png", f"Multiplication word problem groups of, {common}"),
            ("page-03-ext.png", f"Money word problem buying and change, {common}"),
            ("page-04-ext.png", f"Making own word problems creative, {common}"),
            ("page-05-ext.png", f"Steve Alex math olympics gold medal, {common}"),
        ],
        24: [  # 数学嘉年华
            ("page-01.png", f"Steve Alex at math carnival entrance excited, {common}"),
            ("page-02.png", f"Review all topics numbers geometry money, {common}"),
            ("page-03.png", f"Carnival games counting tickets and prizes, {common}"),
            ("page-04.png", f"Shape game booth matching shapes, {common}"),
            ("page-05.png", f"Money game buying carnival snacks, {common}"),
            ("page-06.png", f"Time game racing clock challenges, {common}"),
            ("page-07.png", f"Grand finale Steve Alex win carnival prize, {common}"),
            ("page-08.png", f"Celebration math journey complete farewell, {common}"),
            ("page-01-ext.png", f"Fraction pizza booth carnival game, {common}"),
            ("page-02-ext.png", f"Multiplication ring toss carnival game, {common}"),
            ("page-03-ext.png", f"Measurement strength tester carnival, {common}"),
            ("page-04-ext.png", f"Problem solving clue hunt carnival, {common}"),
            ("page-05-ext.png", f"Steve Alex math carnival grand celebration, {common}"),
        ],
    }
    return prompts.get(chapter_num, [])


# ============ STATE MANAGEMENT ============

def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {"done": {}, "failed": {}, "account_usage": {a["email"]: 0 for a in ACCOUNTS}}

def save_state(state):
    STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    STATE_FILE.write_text(json.dumps(state, indent=2))


# ============ BROWSER OPS ============

def dismiss(page):
    page.evaluate("""() => {
        document.querySelectorAll('.cdk-overlay-backdrop').forEach(function(e){e.remove()});
        for(const b of document.querySelectorAll('button')){
            const t=b.textContent.trim();
            if(['Dismiss','Got it','Accept','Close','Continue'].includes(t))b.click();
        }
    }""")

def login(page, acct):
    email, pwd, totp_key = acct["email"], acct["pass"], acct["totp"]
    print(f"  Login: {email}...")
    page.goto("https://accounts.google.com/", wait_until="domcontentloaded")
    time.sleep(5)
    dismiss(page)
    time.sleep(1)

    if not page.evaluate('() => !!document.querySelector(\'input[type="email"]\')'):
        print("  Already logged in")
        return

    page.evaluate(f'''()=>{{const i=document.querySelector('input[type="email"]');if(i){{i.value="{email}";i.dispatchEvent(new Event("input",{{bubbles:true}}))}}}}''')
    time.sleep(1)
    page.evaluate('()=>{for(const b of document.querySelectorAll("button")){if((b.textContent.includes("Next")||b.textContent.includes("下一步"))&&b.offsetParent!==null){b.click();break}}}')
    time.sleep(5)
    page.evaluate(f'''()=>{{const i=document.querySelector('input[type="password"]');if(i){{i.value="{pwd}";i.dispatchEvent(new Event("input",{{bubbles:true}}))}}}}''')
    time.sleep(1)
    page.evaluate('()=>{for(const b of document.querySelectorAll("button")){if((b.textContent.includes("Next")||b.textContent.includes("下一步"))&&b.offsetParent!==null){b.click();break}}}')
    time.sleep(5)
    code = pyotp.TOTP(totp_key).now()
    page.evaluate(f'''()=>{{const i=document.querySelector('input[type="tel"], input[autocomplete="one-time-code"]');if(i){{i.value="{code}";i.dispatchEvent(new Event("input",{{bubbles:true}}))}}}}''')
    time.sleep(1)
    page.evaluate('()=>{for(const b of document.querySelectorAll("button")){if((b.textContent.includes("Next")||b.textContent.includes("下一步"))&&b.offsetParent!==null){b.click();break}}}')
    time.sleep(6)
    print("  Login OK")

def enter_chat(page):
    page.goto(AI_STUDIO_URL, wait_until="domcontentloaded")
    time.sleep(8)
    dismiss(page)
    time.sleep(3)
    
    # First check for textareas directly (sometimes cards aren't present)
    tas = page.evaluate('()=>document.querySelectorAll("textarea").length')
    if tas > 0:
        print(f"  Ready: {tas} textareas (direct)")
        return True
    
    cards = page.evaluate('()=>document.querySelectorAll(".category-card").length')
    if cards > 0:
        print(f"  {cards} cards, clicking Image Generation...")
        page.evaluate('()=>{for(const el of document.querySelectorAll(".category-card, button, a, [role=button]")){if(el.textContent.includes("Image")&&el.offsetParent!==null){el.click();break}}}')
        time.sleep(8)
        tas = page.evaluate('()=>document.querySelectorAll("textarea").length')
        print(f"  Ready: {cards} cards, {tas} textareas")
        return tas > 0
    
    # Debug: try direct textarea
    tas = page.evaluate('()=>document.querySelectorAll("textarea").length')
    if tas > 0:
        return True
    
    # Check for error or other states
    url = page.evaluate('()=>window.location.href')
    body = page.evaluate('()=>document.body?document.body.innerText.slice(0,200):"no body"')
    print(f"  URL: {url[:80]}")
    print(f"  Body: {body[:150]}")
    return False

def count_imgs(page):
    return page.evaluate('()=>document.querySelectorAll(\'img.loaded-image, img[class*="loaded"], img[src*="blob:"]\').length')

def extract_last(page):
    r = page.evaluate('''async()=>{
        const imgs=document.querySelectorAll('img.loaded-image, img[class*="loaded"], img[src*="blob:"]');
        if(imgs.length===0)return null;
        const img=imgs[imgs.length-1];
        if(!img.src||!img.src.startsWith('blob:'))return null;
        const resp=await fetch(img.src);const blob=await resp.blob();
        return new Promise(function(resolve){const rd=new FileReader();rd.onloadend=function(){resolve(rd.result)};rd.readAsDataURL(blob)});
    }''')
    if not r: return None
    return base64.b64decode(r.split('base64,')[1])

def send_and_generate(page, prompt):
    # Escape for JS string safety
    safe = prompt.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    # Simple approach: set value and click without focus
    page.evaluate("""(p) => {
        const ta = document.querySelector('textarea');
        if (!ta) return;
        ta.value = p;
        ta.dispatchEvent(new Event('input', {bubbles: true}));
        ta.dispatchEvent(new Event('change', {bubbles: true}));
    }""", safe)
    time.sleep(2)
    before = count_imgs(page)
    page.evaluate("""() => {
        for (const b of document.querySelectorAll('button')) {
            if (b.textContent.includes('Run') && b.offsetParent !== null) {
                b.click();
                return;
            }
        }
    }""")
    start = time.time()
    while time.time() - start < 90:
        time.sleep(3)
        if count_imgs(page) > before:
            time.sleep(2)
            return extract_last(page)
    return None


# ============ MAIN ============

def main():
    state = load_state()
    
    # Collect all pending work: chapter → images
    work = []
    for ch in range(13, 25):
        out_dir = BASE_DIR / f"chapter-{ch}"
        out_dir.mkdir(parents=True, exist_ok=True)
        prompts = get_prompts(ch)
        for fname, prompt in prompts:
            key = f"ch{ch}/{fname}"
            if key in state["done"]:
                continue
            # Check if file exists on disk (maybe done in previous run)
            if (out_dir / fname).exists() and (out_dir / fname).stat().st_size > 100000:
                state["done"][key] = True
                continue
            work.append((ch, fname, prompt, key))
    
    if not work:
        print("All images complete! Nothing to do.")
        save_state(state)
        return
    
    # Sort by chapter
    work.sort()
    
    # Separate new vs retry (failed before)
    retry_work = [w for w in work if w[3] in state.get("failed", {})]
    new_work = [w for w in work if w[3] not in state.get("failed", {})]
    # New first, then retry
    work = new_work + retry_work
    
    print(f"Pending: {len(new_work)} new + {len(retry_work)} retries = {len(work)} total\n")
    
    # Pick account with lowest usage
    def pick_account():
        usages = state["account_usage"]
        return min(ACCOUNTS, key=lambda a: usages.get(a["email"], 0))
    
    acct = pick_account()
    acct_count = state["account_usage"].get(acct["email"], 0)
    print(f"Starting account: {acct['email']} ({acct_count}/{MAX_PER_ACCOUNT})")
    
    with Camoufox(
        headless=True,
        proxy={'server': 'socks5://127.0.0.1:10809'},
        geoip=True,
        firefox_user_prefs={"dom.ipc.processCount": 1}
    ) as browser:
        page = browser.new_page()
        
        # Login with current account
        login(page, acct)
        time.sleep(3)
        
        if not enter_chat(page):
            print("WARN: enter_chat failed, trying other account...")
            page.close()
            # Try next account
            acct = [a for a in ACCOUNTS if a["email"] != acct["email"]][0]
            page = browser.new_page()
            login(page, acct)
            time.sleep(3)
            if not enter_chat(page):
                print("ERROR: Could not enter chat interface on any account")
                return
            conv_counter = 0
        
        conv_counter = 0
    
    for i, (ch, fname, prompt, key) in enumerate(work):
            # Check if need to switch account
            acct_count = state["account_usage"].get(acct["email"], 0)
            if acct_count >= MAX_PER_ACCOUNT:
                print(f"\n=== Account {acct['email']} reached {MAX_PER_ACCOUNT}, switching... ===")
                page.close()
                
                # Pick next account
                remaining = [a for a in ACCOUNTS if state["account_usage"].get(a["email"], 0) < MAX_PER_ACCOUNT]
                if not remaining:
                    print("All accounts exhausted! Try again after 15:00 CST quota reset.")
                    save_state(state)
                    return
                
                acct = min(remaining, key=lambda a: state["account_usage"].get(a["email"], 0))
                acct_count = state["account_usage"].get(acct["email"], 0)
                
                page = browser.new_page()
                login(page, acct)
                time.sleep(3)
                enter_chat(page)
                conv_counter = 0
            
            # REFRESH conversation every CONV_REFRESH images (CRITICAL: Nano Banana limit)
            if conv_counter % CONV_REFRESH == 0 and conv_counter > 0:
                print(f"  -> Refreshing conversation (#{conv_counter}/{CONV_REFRESH})")
                if not enter_chat(page):
                    print("  WARN: conversation refresh failed, continuing anyway...")
            
            out_dir = BASE_DIR / f"chapter-{ch}"
            out_path = out_dir / fname
            
            # Count retries
            fail_record = state.get("failed", {}).get(key, 0)
            
            print(f"[{i+1}/{len(work)}] ch{ch}/{fname} (acct: {acct['email'][:8]}..., conv#{conv_counter%CONV_REFRESH+1}, retries: {fail_record})")
            
            try:
                data = send_and_generate(page, prompt)
            except Exception as e:
                print(f"  -> BROWSER ERROR: {e}")
                data = None
                # Try to recover: create new page and re-login
                try:
                    page.close()
                except:
                    pass
                try:
                    page = browser.new_page()
                    login(page, acct)
                    time.sleep(3)
                    enter_chat(page)
                    conv_counter = 0
                except Exception as e2:
                    print(f"  -> Recovery failed: {e2}")
                    save_state(state)
                    return
            conv_counter += 1
            
            if data and len(data) > 100000:
                out_path.write_bytes(data)
                size_kb = len(data) // 1024
                state["done"][key] = True
                state["failed"].pop(key, None)
                state["account_usage"][acct["email"]] = acct_count + 1
                print(f"  -> {size_kb}KB ✓ (acct: {state['account_usage'][acct['email']]}/{MAX_PER_ACCOUNT})")
            else:
                new_fails = fail_record + 1
                state["failed"][key] = new_fails
                if new_fails >= MAX_RETRIES:
                    print(f"  -> GIVING UP after {MAX_RETRIES} attempts ✗")
                else:
                    print(f"  -> FAILED (attempt {new_fails}/{MAX_RETRIES}) — will retry later")
            
            save_state(state)
            
            if i < len(work) - 1:
                time.sleep(SLEEP_BETWEEN)
    
    # Final summary
    done = len(state["done"])
    failed = sum(1 for k, v in state.get("failed", {}).items() if v >= MAX_RETRIES)
    pending = sum(1 for k, v in state.get("failed", {}).items() if v < MAX_RETRIES)
    print(f"\n=== Final State ===")
    print(f"Done: {done}, Pending retry: {pending}, Given up: {failed}")
    for a in ACCOUNTS:
        print(f"  {a['email'][:20]}...: {state['account_usage'].get(a['email'], 0)}")


if __name__ == "__main__":
    main()
