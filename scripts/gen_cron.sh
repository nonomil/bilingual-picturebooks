#!/bin/bash
# Cron wrapper for batch image generation
# Called by cron: 0 */2 * * * /home/deploy/bilingual-picturebooks/scripts/gen_cron.sh
# Or manually: bash gen_cron.sh

set -e
LOG="/tmp/gen_cron.log"
PYTHON=/home/deploy/camoufox-env/bin/python3
SCRIPT=/home/deploy/bilingual-picturebooks/scripts/gen_batch.py
export DISPLAY=:99

echo "=== $(date '+%Y-%m-%d %H:%M:%S') ===" >> "$LOG"

# Check if already running
if pgrep -f "gen_batch.py" > /dev/null 2>&1; then
    echo "Already running, skipping" >> "$LOG"
    exit 0
fi

# Check Xvfb
if ! pgrep -x Xvfb > /dev/null 2>&1; then
    echo "Xvfb not running, starting..." >> "$LOG"
    Xvfb :99 -screen 0 1920x1080x24 &
    sleep 2
fi

# Check SOCKS5 proxy
if ! curl -s --max-time 3 --socks5 127.0.0.1:10809 http://httpbin.org/ip > /dev/null 2>&1; then
    echo "SOCKS5 proxy down, attempting restart..." >> "$LOG"
    systemctl restart xray-client 2>/dev/null || true
    sleep 5
    if ! curl -s --max-time 3 --socks5 127.0.0.1:10809 http://httpbin.org/ip > /dev/null 2>&1; then
        echo "SOCKS5 proxy still down, aborting" >> "$LOG"
        exit 1
    fi
fi

# Run generator
echo "Starting gen_batch.py..." >> "$LOG"
PYTHONUNBUFFERED=1 timeout 3300 "$PYTHON" "$SCRIPT" >> "$LOG" 2>&1

EXIT=$?
echo "Exit code: $EXIT" >> "$LOG"

# Git commit + push results
REPO_DIR=/home/deploy/bilingual-picturebooks
cd "$REPO_DIR"
if [ -n "$(git status --porcelain images/ 2>/dev/null)" ]; then
    git add images/
    COUNT=$(git diff --cached --name-only | wc -l)
    git commit -m "auto: batch images $(date '+%m-%d %H:%M') - ${COUNT} files"
    git push origin main 2>> "$LOG" || echo "Git push failed" >> "$LOG"
    echo "Committed ${COUNT} image files" >> "$LOG"
fi

echo "=== done ===" >> "$LOG"