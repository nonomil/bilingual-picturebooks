#!/usr/bin/env python3
"""Batch Gemini image gen for English (英语)."""
import sys, os, time, json, base64, pyotp, re
from pathlib import Path
from camoufox.sync_api import Camoufox

ACCOUNTS = [
    {"email": "BellkisMares@gmail.com", "pass": "2fr5svqe3", "totp": "mbggtjvtr7rvhda3bv6xib26c7eghmkr"},
    {"email": "ripmysleeves@yahoo.com", "pass": "wangdana123@", "totp": "muoto4uznefcobgb5rcdno6j4dn7hgho"},
    {"email": "SusiGuillins794@gmail.com", "pass": "kld123gmail", "totp": "xwrk3suvr6ngh2rp4igrfisnp2hyysby"},
]
MAX_PER_ACCOUNT = 999
BATCH_SIZE = 5
MAX_RETRIES = 5
FAIL_STREAK_LIMIT = 6
AI_STUDIO = "https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image"
IMG_DIR = Path("/home/deploy/bilingual-picturebooks/english/chapters/img")
CHAPTERS_DIR = Path("/home/deploy/bilingual-picturebooks/english/chapters")
STATE = Path("/home/deploy/bilingual-picturebooks/scripts/gen_state_english.json")
SLEEP = 30

# ============================================================
# Illustration style constants (per IMAGE_PROMPT_GUIDE.md)
# ============================================================

# Base Minecraft pixel art style for all English lesson images
STYLE_MAIN = "Minecraft pixel art style, bright and warm colors, clean composition, English language learning, 640x480"

# Character description map — use these in prompts for consistent depiction
CHAR_STEVE = {
    "default": "Steve (blue shirt, dark pants, brown hair), curious expression",
    "happy": "Steve (blue shirt, dark pants, brown hair), happy excited expression",
    "thinking": "Steve (blue shirt, dark pants, brown hair), thoughtful curious expression",
    "adventurous": "Steve (blue shirt, dark pants, brown hair), adventurous brave expression",
}

CHAR_ALEX = {
    "default": "Alex (orange shirt, jeans, red hair), warm friendly expression",
    "happy": "Alex (orange shirt, jeans, red hair), warm smiling expression",
    "helpful": "Alex (orange shirt, jeans, red hair), helpful encouraging expression",
    "teaching": "Alex (orange shirt, jeans, red hair), patient teaching expression",
}

# Scene composition rules
COMPOSITION_CENTERED = "centered composition, subject occupies 40-60 percent of frame"
COMPOSITION_RULE_OF_THIRDS = "rule of thirds composition, character offset to left or right"
COMPOSITION_EYE_LEVEL = "eye-level perspective, warm approachable angle"
COMPOSITION_HIGH_ANGLE = "slightly high angle view, showing full scene layout"

# Page-specific guidance
PAGE_COVER = "full-bleed cover illustration, title space reserved, cinematic composition, welcoming adventurous atmosphere"
PAGE_STORY = "cinematic scene composition, Steve and Alex in action, narrative moment, warm lighting, dynamic but clear"
PAGE_ACTIVITY = "clean centered composition, simple layout focused on learning task, high clarity, minimal background distraction"
PAGE_VOCABULARY = "white background, vocabulary item clearly visible, isolated subject, clean educational layout"

def detect_page_type(alt: str, fname: str) -> str:
    """Classify image by page type based on alt text and filename."""
    alt_lower = alt.lower() if alt else ""
    fname_lower = fname.lower()

    # Cover detection
    if "cover" in fname_lower or "cover" in alt_lower:
        return "cover"

    # Activity/practice detection
    if any(kw in alt_lower for kw in ["activity", "practice", "exercise", "draw",
                                       "color", "trace", "match", "connect",
                                       "write", "circle", "fill"]):
        return "activity"

    # Vocabulary / isolated item detection
    if any(kw in alt_lower for kw in ["vocabulary", "word", "sight word", "flashcard",
                                       "isolated", "item"]):
        return "vocabulary"

    # Default: story/scene
    return "story"


def build_prompt(alt: str, tgt_dir: str, fname: str) -> str:
    """Build an illustration prompt using alt text + page-specific style rules."""
    page_type = detect_page_type(alt, fname)

    if alt:
        if page_type == "cover":
            return f"{alt}, Minecraft pixel art, {PAGE_COVER}, {STYLE_MAIN}"
        elif page_type == "activity":
            return f"{alt}, Minecraft pixel art, {PAGE_ACTIVITY}, bright colors, kid-friendly illustration, 640x480"
        elif page_type == "vocabulary":
            return f"{alt}, Minecraft pixel art, {PAGE_VOCABULARY}, {STYLE_MAIN}"
        else:
            return f"{alt}, Minecraft pixel art, {PAGE_STORY}, Steve and Alex, bright warm colors, 640x480, kid-friendly illustration"
    else:
        return f"English learning illustration for {tgt_dir}: {fname}, {STYLE_MAIN}"


def load():
    today = time.strftime("%Y-%m-%d")
    if STATE.exists():
        s = json.loads(STATE.read_text())
        if s.get("date") != today:
            s["account_usage"] = {}
            s["browser_fails"] = {}
            s["date"] = today
        if "browser_fails" not in s: s["browser_fails"] = {}
        return s
    return {"done": {}, "failed": {}, "account_usage": {}, "browser_fails": {}, "date": today}

def save(s):
    STATE.parent.mkdir(parents=True, exist_ok=True)
    STATE.write_text(json.dumps(s, indent=2))

def get_pending():
    s = load()
    pending = []
    for fpath in sorted(CHAPTERS_DIR.glob("*.md")):
        name = fpath.stem
        content = fpath.read_text()
        refs = re.findall(r'<img src="([^"]+)"[^>]*alt="([^"]*)"', content)
        for ref, alt in refs:
            ref_path = ref.lstrip('./')
            full = (CHAPTERS_DIR / ref_path).resolve()
            if not full.exists() or full.stat().st_size < 1000:
                key = f"{name}/{full.name}"
                if key in s.get("done", {}): continue
                if s.get("failed", {}).get(key, 0) >= MAX_RETRIES: continue
                m = re.search(r'(chapter-\d+[^/]*)', ref_path)
                tgt_dir = m.group(1) if m else "unknown"
                prompt = build_prompt(alt, tgt_dir, full.name)
                out_dir = IMG_DIR / tgt_dir
                out_dir.mkdir(parents=True, exist_ok=True)
                pending.append((tgt_dir, full.name, prompt, key, out_dir))
    return pending

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
        print("  Already in"); return
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
    time.sleep(6); print("  OK")

def navigate_to_chat(page):
    page.goto(AI_STUDIO, wait_until="domcontentloaded")
    time.sleep(8); dismiss(page); time.sleep(2)
    tas = page.evaluate('() => document.querySelectorAll("textarea").length')
    if tas == 0:
        page.evaluate("() => { for(const el of document.querySelectorAll('.category-card,button,a,[role=button]')){ if(el.textContent.includes('Image')&&el.offsetParent){el.click();break} } }")
        time.sleep(6)

def send_prompt(page, prompt):
    page.evaluate("(p) => { const tas = document.querySelectorAll('textarea'); for (let i = tas.length-1; i >= 0; i--) { const ta = tas[i]; if (ta.offsetParent) { ta.value = p; ta.dispatchEvent(new Event('input',{bubbles:true})); ta.dispatchEvent(new Event('change',{bubbles:true})); return; } } }", prompt)
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

def generate(page, prompt):
    navigate_to_chat(page)
    send_prompt(page, prompt)
    return extract_image(page)

def main():
    s = load()
    work = [t for t in get_pending()]

    if not work:
        print("All English images done!"); save(s); return

    print(f"English pending: {len(work)} images")

    usages = s["account_usage"]
    acct = min(ACCOUNTS, key=lambda a: usages.get(a["email"], 0))
    fail_streak = 0
    idx = 0

    while idx < len(work):
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

                for batch_i in range(BATCH_SIZE):
                    if idx >= len(work): break
                    tgt_dir, fname, prompt, key, out_dir = work[idx]
                    user_cnt = usages.get(acct["email"], 0)
                    if user_cnt >= MAX_PER_ACCOUNT: break
                    idx += 1

                    fails = s.get("failed", {}).get(key, 0)
                    print(f"[{idx}/{len(work)}] {tgt_dir}/{fname} ({acct['email'][:8]}..., att:{fails+1})")

                    try:
                        data = generate(page, prompt)
                    except Exception as e:
                        print(f"  -> BROW ERR: {e}"); data = None; break

                    if data and len(data) > 100000:
                        (out_dir / fname).write_bytes(data)
                        s["done"][key] = True; s["failed"].pop(key, None)
                        usages[acct["email"]] = user_cnt + 1
                        fail_streak = 0
                        s["browser_fails"][acct["email"]] = 0
                        print(f"  -> {len(data)//1024}KB ✓ ({usages[acct['email']]}/{MAX_PER_ACCOUNT})")
                    else:
                        s["failed"][key] = fails + 1
                        fail_streak += 1
                        tag = "GIVEUP" if fails+1 >= MAX_RETRIES else f"TRY:{fails+1}/{MAX_RETRIES}"
                        print(f"  -> FAIL ({tag})")
                        if fail_streak >= FAIL_STREAK_LIMIT:
                            print(f"  -> Fail streak {fail_streak}, switching account...")
                            usages[acct["email"]] = 999
                            fail_streak = 0
                            break

                    save(s)
                    if idx < len(work): time.sleep(SLEEP)
        except Exception as e:
            print(f"Browser start fail: {e}, retry 10s..."); time.sleep(10)
            bf = s.get("browser_fails", {})
            bf[acct["email"]] = bf.get(acct["email"], 0) + 1
            if bf[acct["email"]] >= 5:
                usages[acct["email"]] = 999
                print(f"  [!] Blacklisted {acct['email']}")
            acct = min(ACCOUNTS, key=lambda a: usages.get(a["email"], 0))
        time.sleep(5)

    done = len(s["done"]); gv = sum(1 for v in s.get("failed",{}).values() if v >= MAX_RETRIES)
    pend = sum(1 for v in s.get("failed",{}).values() if v < MAX_RETRIES)
    print(f"\nEN Done:{done} Pending:{pend} Giveup:{gv}")

if __name__ == "__main__":
    main()
