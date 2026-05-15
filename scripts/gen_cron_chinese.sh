#!/bin/bash
# Chinese image gen cron wrapper — runs at odd hours to avoid conflict with math (even hours)
cd /home/deploy/bilingual-picturebooks
export DISPLAY=:99
export PATH="/home/deploy/.local/bin:$PATH"
PYTHON=/home/deploy/camoufox-env/bin/python3
$PYTHON scripts/gen_chinese.py >> scripts/gen_cron_chinese.log 2>&1
