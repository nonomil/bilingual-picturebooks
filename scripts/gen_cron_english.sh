#!/bin/bash
# English image gen cron wrapper
cd /home/deploy/bilingual-picturebooks
export DISPLAY=:99
export PATH="/home/deploy/.pyenv/versions/camoufox-env/bin:$PATH"
PYTHON=/home/deploy/.pyenv/versions/camoufox-env/bin/python
$PYTHON scripts/gen_english.py >> scripts/gen_cron_english.log 2>&1
