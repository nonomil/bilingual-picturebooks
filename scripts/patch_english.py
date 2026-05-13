#!/usr/bin/env python3
"""Template-based patch for all 48 English chapters."""
import re, os, glob

OUT_DIR = "/home/deploy/bilingual-picturebooks/english/chapters"

PHASES = {
    "L1-L6": {  # Basic: Hello, ABC, Colors, Numbers, Family
        'align': '> 📐 **CEFR Level:** Pre-A1 | **对标:** 英语课标一级·听说·日常问候与基础词汇',
        'cross': '数学第1-2课教数字 → 英语同步numbers & counting\n语文第1课教象形字 → 英语字母演变故事（A来自牛头𓃾）',
        'mistake': '''### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I is Steve" | **"I am Steve"** — "I" always uses "am" |
| "What your name?" | **"What's your name?"** — need "is" |
| Pronouncing "th" as "s" or "z" | **"th" = tongue between teeth** (this, that, three) |
| "Goodbye" said too fast like "g'bai" | Say clearly: **Good-bye** (two parts) |''',
        'think': '''### 🧠 Think About It
1. **Observation**: In English, we say "Hello!" but in Chinese we say "你好！" Why do different languages have different greetings?
2. **What if**: What if English had no alphabet letters — every word was a picture like ancient Egyptian? How would you write "cat"?'''
    },
    "L7-L12": {  # Animals, Body, Food, Toys, Weather, Clothes
        'align': '> 📐 **CEFR Level:** Pre-A1 | **对标:** 英语课标一级·听说·主题词汇（动物/身体/食物/天气/服装）',
        'cross': '语文第15课教食物汉字 → 英语同步food words\n数学第18课教比较 → 英语big/small/long/short配套',
        'mistake': '''### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I like apple" (singular) | **"I like apples"** — when talking about things in general, use plural |
| "It's rain" | **"It's raining"** — use -ing for actions happening now |
| "I have 3 foot" | **"I have 3 feet"** — irregular plural: foot→feet |
| "The dog big" | **"The dog is big"** — need "is" (be verb) |''',
        'think': '''### 🧠 Think About It
1. **Pattern**: "Cat→cats, dog→dogs" but "mouse→mice, child→children". Why do some words change differently?
2. **What if**: What if English weather words were all Minecraft-style? Instead of "sunny", you'd say "torch-bright". Can you create 3 more?'''
    },
    "L13-L18": {  # Actions, Places, Feelings, Time, Transport, Review
        'align': '> 📐 **CEFR Level:** Pre-A1 / A1 | **对标:** 英语课标一级·听说·动作/地点/感受/时间表达',
        'cross': '语文第17课教方向与时间 → 英语同步方位词和时间表达\n数学第16课教钟表 → 英语"What time is it?"配套',
        'mistake': '''### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "She go to school" | **"She goes to school"** — he/she/it + verb+s |
| "I'm go to the village" | **"I'm going to the village"** — am/is/are + verb-ing |
| "He is in the bus" | **"He is on the bus"** — on for vehicles, in for buildings |
| "I feeled happy" | **"I felt happy"** — irregular past: feel→felt |''',
        'think': '''### 🧠 Think About It
1. **Pattern**: "I walk → I walked" but "I go → I went, I see → I saw". Why are some past tense words so different?
2. **What if**: If Steve could only use 10 English words to survive in the Minecraft village, which 10 would he pick?'''
    },
    "L19-L24": {  # Stories: Lost Cat, Storm, Birthday, Farm, Treasure, Review
        'align': '> 📐 **CEFR Level:** A1 | **对标:** 英语课标一级·阅读·简单绘本故事理解',
        'cross': '语文第20课教短句阅读 → 英语同步简单故事阅读\n数学第23课教应用题 → 英语阅读能力帮助理解数学题',
        'mistake': '''### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "He don't like it" | **"He doesn't like it"** — he/she/it uses doesn't |
| "There is many blocks" | **"There are many blocks"** — many = plural = are |
| "Can you help me?" "Yes, I help" | **"Yes, I can"** or **"Yes, I will help you"** |
| Reading word by word, not in phrases | Read in **meaning chunks**: "Steve walked / into the cave / and saw a light" |''',
        'think': '''### 🧠 Think About It
1. **Story**: In "The Lost Cat", why does Alex feel sad? What clues in the story tell you about her feelings?
2. **What if**: What if the treasure map in the last story was written in a language nobody could read? How would Steve and Alex solve the problem?'''
    },
}

def get_phase(lesson_num):
    if lesson_num <= 6: return "L1-L6"
    elif lesson_num <= 12: return "L7-L12"
    elif lesson_num <= 18: return "L13-L18"
    else: return "L19-L24"

def patch_file(path):
    with open(path) as f:
        content = f.read()
    
    fname = os.path.basename(path)
    
    # Extract lesson number
    num_match = re.search(r'lesson-(\d+)', fname.lower())
    if not num_match:
        num_match = re.search(r'lesson_(\d+)', fname.lower())
    if not num_match:
        return False
    num = int(num_match.group(1))
    phase = get_phase(num)
    data = PHASES[phase]
    
    # Check existing
    all_ok = True
    if 'CEFR' not in content and '课标' not in content and '标A' not in content and 'Standard' not in content:
        all_ok = False
    if 'Common Mistake' not in content and 'Common Mistakes' not in content:
        all_ok = False
    if 'cross-curri' not in content.lower() and '跨科' not in content:
        all_ok = False
    if 'Think About' not in content and '想一想' not in content:
        all_ok = False
    
    if all_ok:
        return False
    
    supplements = []
    
    if 'CEFR' not in content and '课标' not in content and '标A' not in content and 'Standard' not in content:
        supplements.append(data['align'])
    
    if 'Common Mistake' not in content and 'Common Mistakes' not in content:
        supplements.append('')
        supplements.append(data['mistake'])
    
    if 'Think About' not in content and '想一想' not in content:
        supplements.append('')
        supplements.append(data['think'])
    
    if 'cross-curri' not in content.lower() and '跨科' not in content:
        supplements.append('')
        supplements.append('## 🔗 Cross-Curricular Links')
        supplements.append(data['cross'])
    
    if not supplements:
        return False
    
    # Insert before 🎉 or at end
    insert_at = len(content)
    for marker in ['🎉', '🏅', 'Challenge', '## Summary', '## Review']:
        idx = content.rfind(marker)
        if 0 < idx < insert_at:
            newline_idx = content.rfind('\n', 0, idx)
            insert_at = newline_idx if newline_idx > 0 else idx
    
    if insert_at <= 10:
        insert_at = len(content)
    
    patch_text = '\n\n---\n\n' + '\n'.join(supplements)
    final = content[:insert_at].rstrip() + patch_text + '\n\n' + content[insert_at:].lstrip()
    
    if final != content:
        with open(path, 'w') as f:
            f.write(final)
        return True
    return False

def main():
    files = sorted(glob.glob(os.path.join(OUT_DIR, 'lesson-*.md')))
    
    patched = 0
    skipped = 0
    
    for path in files:
        fname = os.path.basename(path)
        try:
            changed = patch_file(path)
        except Exception as e:
            print(f"  ❌ {fname}: {e}")
            continue
        
        if changed:
            print(f"  ✅ {fname}")
            patched += 1
        else:
            print(f"  ⏭️ {fname}")
            skipped += 1
    
    print(f"\nPatched: {patched}, Skipped: {skipped}, Total: {len(files)}")

if __name__ == "__main__":
    main()
