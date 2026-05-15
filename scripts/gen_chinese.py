#!/usr/bin/env python3
"""Batch Gemini image gen for Chinese (语文) — reuses same infrastructure as math."""
import sys, os, time, json, base64, pyotp
from pathlib import Path
from camoufox.sync_api import Camoufox

# Same accounts as math
ACCOUNTS = [
    {"email": "BellkisMares@gmail.com", "pass": "2fr5svqe3", "totp": "mbggtjvtr7rvhda3bv6xib26c7eghmkr"},
    {"email": "ripmysleeves@yahoo.com", "pass": "wangdana123@", "totp": "muoto4uznefcobgb5rcdno6j4dn7hgho"},
    {"email": "SusiGuillins794@gmail.com", "pass": "kld123gmail", "totp": "xwrk3suvr6ngh2rp4igrfisnp2hyysby"},
]
MAX_PER_ACCOUNT = 999
BATCH_SIZE = 5
MAX_RETRIES = 3
FAIL_STREAK_LIMIT = 3
AI_STUDIO = "https://aistudio.google.com/prompts/new_chat?model=gemini-2.5-flash-image"
BASE_DIR = Path("/home/deploy/bilingual-picturebooks/chinese-language/chapters/img")
STATE = Path("/home/deploy/bilingual-picturebooks/scripts/gen_state_chinese.json")
SLEEP = 30

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

def get_pending(state):
    """Find all missing images across Chinese chapters."""
    import re
    pending = []
    chapters_dir = BASE_DIR.parent
    
    for fpath in sorted(chapters_dir.glob("*.md")):
        name = fpath.stem
        content = fpath.read_text()
        refs = re.findall(r'<img src="([^"]+)"', content)
        for ref in refs:
            full_path = (chapters_dir / ref.lstrip('./')).resolve()
            full_path = full_path.absolute()
            # key for state
            img_key = f"{name}/{full_path.name}"
            if img_key in state.get("done", {}):
                continue
            if img_key in state.get("failed", {}):
                continue
            pending.append((name, full_path, ref))
    return pending

def prompt_for(chapter_name, filename):
    """Generate appropriate prompt based on chapter content."""
    ch_num = filename.split('-')[1] if '-' in filename else "1"
    is_ext = "ext" in filename
    
    style = "Minecraft pixel art style, bright and warm colors, clean composition, 640x480"
    
    if is_ext:
        return f"Chinese language learning activity illustration for lesson {chapter_name}, {style}"
    else:
        return f"Chinese language learning scene for lesson {chapter_name}, {style}"

# Reuse login, navigate_to_chat, send_prompt, extract_image from gen_batch.py
# (identical functions, omitted for brevity — copy from gen_batch.py)

def main():
    state = load()
    pending = get_pending(state)
    print(f"Chinese: {len(pending)} images pending")
    if not pending:
        print("All done!")
        return
    # process in batches using same browser flow as gen_batch.py
    # ... (will use login/navigate/send_prompt/extract_image)

if __name__ == "__main__":
    main()
