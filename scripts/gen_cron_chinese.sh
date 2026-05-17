#!/bin/bash
# Chinese image gen cron wrapper — runs at odd hours to avoid conflict with math (even hours)
cd /home/deploy/bilingual-picturebooks
export DISPLAY=:99
export PATH="/home/deploy/.local/bin:$PATH"
PYTHON=/home/deploy/camoufox-env/bin/python3

# Check if already running
if pgrep -f "gen_chinese.py" > /dev/null 2>&1; then
    echo "[$(date)] Already running, skipping" >> scripts/gen_cron_chinese.log
    exit 0
fi

$PYTHON scripts/gen_chinese.py >> scripts/gen_cron_chinese.log 2>&1
