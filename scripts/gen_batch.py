#!/usr/bin/env python3
"""Batch Gemini image gen — fresh browser per batch, multi images per chat."""

import sys, os, time, json, base64, pyotp
from pathlib import Path
from camoufox.sync_api import Camoufox

ACCOUNTS = [
    {"email": "BellkisMares@gmail.com", "pass": "2fr5svqe3", "totp": "mbggtjvtr7rvhda3bv6xib26c7eghmkr"},
    {"email": "ripmysleeves@yahoo.com", "pass": "wangdana123@", "totp": "muoto4uznefcobgb5rcdno6j4dn7hgho"},
    {"email": "SusiGuillins794@gmail.com", "pass": "kld123gmail", "totp": "xwrk3suvr6ngh2rp4igrfisnp2hyysby"},
]
MAX_PER_ACCOUNT = 999
BATCH_SIZE = 20
MAX_RETRIES = 3
FAIL_STREAK_LIMIT = 3  # switch account after N consecutive fails
AI_STUDIO = "https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image"
BASE_DIR = Path("/home/deploy/bilingual-picturebooks/math-kindergarten/images")
STATE = Path("/home/deploy/bilingual-picturebooks/scripts/gen_state.json")
SLEEP = 60

# ==== state ====

def load():
    today = time.strftime("%Y-%m-%d")
    if STATE.exists():
        s = json.loads(STATE.read_text())
        # Auto-reset account_usage on new day
        if s.get("date") != today:
            print(f"New day! Resetting account_usage (was {s.get('date', 'N/A')})")
            s["account_usage"] = {}
            s["browser_fails"] = {}
            s["date"] = today
        if "browser_fails" not in s:
            s["browser_fails"] = {}
        return s
    return {"done": {},"failed": {},"account_usage": {},"browser_fails": {},"date": today}

def save(s):
    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps(s, indent=2))

# ==== prompts ====

def prompts(ch):
    out = []
    for n in range(1, 9):
        out.append((f"page-{n:02d}.png", f"Math kindergarten chapter {ch} page {n}, Minecraft pixel art, small image, 640x480"))
    for n in range(1, 6):
        out.append((f"page-{n:02d}-ext.png", f"Math kindergarten chapter {ch} exercise {n}, Minecraft pixel art activity, white bg, 640x480"))
    return out

# ==== browser ====

def dismiss(page):
    try:
        page.evaluate("() => { document.querySelectorAll('.cdk-overlay-backdrop').forEach(e => e.remove()); for(const b of document.querySelectorAll('button')){ const t = b.textContent.trim(); if(['Dismiss','Got it','Accept','Close','Continue'].includes(t)) b.click(); } }")
    except: pass

def login(page, acct):
    e, p, k = acct["email"], acct["pass"], acct["totp"]
    print(f"  Login: {e}...")
    page.goto("https://accounts.google.com/", wait_until="domcontentloaded")
    time.sleep(5); dismiss(page); time.sleep(1)
    if not page.evaluate('() => !!document.querySelector(\'input[type="email"]\')'):
        print("  Already in")
        return
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
    print("  OK")

def navigate_to_chat(page):
    page.goto(AI_STUDIO, wait_until="domcontentloaded")
    time.sleep(8); dismiss(page); time.sleep(2)
    tas = page.evaluate('() => document.querySelectorAll("textarea").length')
    if tas == 0:
        page.evaluate("() => { for(const el of document.querySelectorAll('.category-card,button,a,[role=button]')){ if(el.textContent.includes('Image')&&el.offsetParent){el.click();break} } }")
        time.sleep(6)

def send_prompt(page, prompt):
    page.evaluate("(p) => {"
        "const tas = document.querySelectorAll('textarea');"
        "for (let i = tas.length-1; i >= 0; i--) {"
        "  const ta = tas[i];"
        "  if (ta.offsetParent) {"
        "    ta.value = p;"
        "    ta.dispatchEvent(new Event('input',{bubbles:true}));"
        "    ta.dispatchEvent(new Event('change',{bubbles:true}));"
        "    return;"
        "  }"
        "}"
    "}", prompt)
    time.sleep(2)
    page.evaluate("()=>{ for(const b of document.querySelectorAll('button')){ if((b.textContent.includes('Run')||b.textContent.includes('Send'))&&b.offsetParent){b.click();return} } }")

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
                if len(d) > 100000: return d
            return None
    return None

def generate(page, prompt, is_first=False):
    if is_first:
        navigate_to_chat(page)
    send_prompt(page, prompt)
    return extract_image(page)

# ==== main ====

def main():
    s = load()
    
    # Build work list (filter done + max-retries)
    work = []
    for ch in range(1, 25):
        out_dir = BASE_DIR / f"chapter-{ch}"
        out_dir.mkdir(parents=True, exist_ok=True)
        for fname, prompt in prompts(ch):
            key = f"ch{ch}/{fname}"
            if key in s["done"]: continue
            if (out_dir / fname).exists() and (out_dir / fname).stat().st_size > 100000:
                s["done"][key] = True; continue
            if s.get("failed",{}).get(key,0) >= MAX_RETRIES: continue
            work.append((ch, fname, prompt, key))
    work.sort()
    if not work:
        print("All done!"); save(s); return
    print(f"Pending: {len(work)}")
    
    usages = s["account_usage"]
    acct = min(ACCOUNTS, key=lambda a: usages.get(a["email"], 0))
    fail_streak = 0
    idx = 0
    
    while idx < len(work):
        # Check account quota
        if usages.get(acct["email"], 0) >= MAX_PER_ACCOUNT:
            remaining = [a for a in ACCOUNTS if usages.get(a["email"], 0) < MAX_PER_ACCOUNT]
            if not remaining: print("All accounts exhausted!"); save(s); return
            acct = min(remaining, key=lambda a: usages.get(a["email"], 0))
            print(f"Switched to {acct['email']}")
        
        try:
            with Camoufox(headless=True, humanize=False, proxy={'server': 'socks5://127.0.0.1:10809'}, geoip=True,
                          firefox_user_prefs={"dom.ipc.processCount": 1}) as browser:
                page = browser.new_page()
                login(page, acct)
                time.sleep(2)
                
                is_first = True
                for batch_i in range(BATCH_SIZE):
                    if idx >= len(work): break
                    ch, fname, prompt, key = work[idx]
                    user_cnt = usages.get(acct["email"], 0)
                    if user_cnt >= MAX_PER_ACCOUNT: break
                    idx += 1
                    
                    fails = s.get("failed", {}).get(key, 0)
                    pfx = acct["email"][:8]
                    bat_tag = "FIRST" if is_first else f"BAT+{batch_i}"
                    print(f"[{idx}/{len(work)}] ch{ch}/{fname} ({pfx}..., {bat_tag}, att:{fails+1})")
                    
                    try:
                        data = generate(page, prompt, is_first=is_first)
                        is_first = False
                    except Exception as e:
                        print(f"  -> BROW ERR: {e}"); data = None; break  # restart browser
                    
                    if data and len(data) > 100000:
                        (BASE_DIR / f"chapter-{ch}" / fname).write_bytes(data)
                        s["done"][key] = True; s["failed"].pop(key, None)
                        usages[acct["email"]] = user_cnt + 1
                        fail_streak = 0
                        print(f"  -> {len(data)//1024}KB ✓ ({usages[acct['email']]}/{MAX_PER_ACCOUNT})")
                    else:
                        s["failed"][key] = fails + 1
                        fail_streak += 1
                        tag = "GIVEUP" if fails+1 >= MAX_RETRIES else f"TRY:{fails+1}/{MAX_RETRIES}"
                        print(f"  -> FAIL ({tag})")
                        if fail_streak >= FAIL_STREAK_LIMIT:
                            print(f"  -> Fail streak {fail_streak}, switching account...")
                            usages[acct["email"]] = 999  # force switch
                            fail_streak = 0
                            break  # exit batch loop, will restart browser with new account
                    
                    save(s)
                    if idx < len(work): time.sleep(SLEEP)
        except Exception as e:
            print(f"Browser start fail: {e}, retry 10s..."); time.sleep(10)
            bf = s.get("browser_fails", {})
            bf[acct["email"]] = bf.get(acct["email"], 0) + 1
            # Blacklist account after 2 browser-level failures
            if bf[acct["email"]] >= 2:
                usages[acct["email"]] = 999  # mark exhausted
                print(f"  [!] Blacklisted {acct['email']} after {bf[acct['email']]} browser fails")
            # Re-pick least-used account on browser failure
            acct = min(ACCOUNTS, key=lambda a: usages.get(a["email"], 0))
            print(f"Retrying with {acct['email'][:25]}...")
        time.sleep(5)
    
    done = len(s["done"]); gv = sum(1 for v in s.get("failed",{}).values() if v >= MAX_RETRIES)
    pend = sum(1 for v in s.get("failed",{}).values() if v < MAX_RETRIES)
    print(f"\nDone:{done} Pending:{pend} Giveup:{gv}")
    for a in ACCOUNTS: print(f"  {a['email'][:25]}...: {usages.get(a['email'],0)}/{MAX_PER_ACCOUNT}")

if __name__ == "__main__":
    main()
