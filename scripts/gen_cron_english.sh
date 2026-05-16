#!/bin/bash
# English image gen cron wrapper
cd /home/deploy/bilingual-picturebooks
export DISPLAY=:99
export PATH="/home/deploy/.local/bin:$PATH"
PYTHON=/home/deploy/camoufox-env/bin/python3
$PYTHON scripts/gen_english.py >> scripts/gen_cron_english.log 2>&1
