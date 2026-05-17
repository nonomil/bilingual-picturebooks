#!/bin/bash
# English image gen cron wrapper
cd /home/deploy/bilingual-picturebooks
export DISPLAY=:99
export PATH="/home/deploy/.local/bin:$PATH"
PYTHON=/home/deploy/camoufox-env/bin/python3

# Check if already running
if pgrep -f "gen_english.py" > /dev/null 2>&1; then
    echo "[$(date)] Already running, skipping" >> scripts/gen_cron_english.log
    exit 0
fi

$PYTHON scripts/gen_english.py >> scripts/gen_cron_english.log 2>&1
