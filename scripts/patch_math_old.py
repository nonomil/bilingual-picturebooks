#!/usr/bin/env python3
"""Patch math L1-L12 chapters: add missing 【标A】, ❌常见误解, 🔗跨科连接, 🧠提问."""
import re, os, sys, time, requests

API_URL = "http://localhost:8318/v1/chat/completions"
API_KEY = "sk-cli-proxy-deploy-2026"
MODEL = "gpt-5.4"
OUT_DIR = "/home/deploy/bilingual-picturebooks/math-kindergarten/chapters"

ALIGNMENTS = {
    1: "【标A: 数学课标一上·数与运算·认识数字1-10】",
    2: "【标A: 数学课标一上·数与运算·认识数字11-20】",
    3: "【标A: 数学课标一上·数与运算·比多少、比大小】",
    4: "【标A: 数学课标一上·数与运算·5以内加法】",
    5: "【标A: 数学课标一上·数与运算·10以内加法】",
    6: "【标A: 数学课标一上·数与运算·5以内减法】",
    7: "【标A: 数学课标一上·数与运算·10以内减法】",
    8: "【标A: 数学课标一上·数与运算·20以内进位加法】",
    9: "【标A: 数学课标一上·数与运算·20以内退位减法】",
    10: "【标A: 数学课标一下·图形与几何·认识平面图形】",
    11: "【标A: 数学课标一上·量与测量·测量与长度启蒙】",
    12: "【标A: 数学课标一上·综合复习·全册知识检测】",
}

def get_topic_info(path):
    """Read file and extract key info for generating supplements."""
    with open(path) as f:
        content = f.read()
    
    # Extract title
    title_match = re.search(r'# 第?(\d+)课\s*(.*)', content)
    if not title_match:
        return None, None, content
    
    num = int(title_match.group(1))
    title = title_match.group(2).strip()
    
    # Extract learning goals
    goals = ""
    in_goals = False
    for line in content.split('\n'):
        if '学习目标' in line:
            in_goals = True
            continue
        if in_goals and line.startswith('##'):
            break
        if in_goals and line.strip().startswith('-'):
            goals += line.strip() + '\n'
    
    # Check what's already present
    has_biaoa = '【标A:' in content
    has_mistake = '常见误解' in content or ('错误' in content and '正确' in content)
    has_cross = '跨科连接' in content
    has_think = '想一想' in content
    has_vocab = '小词典' in content
    
    # Build supplement prompt
    needed = []
    if not has_mistake:
        needed.append(f"一个 ❌常见误解 板块：针对'{title}'的核心概念，列出1-2个典型错误(with ❌)和正确做法(with ✅)")
    if not has_think:
        needed.append(f"2个 🧠想一想 苏格拉底式提问（1个观察推理型 + 1个反事实型'如果...会怎样'）")
    if not has_cross:
        needed.append(f"一个 🔗跨科连接 板块：连接到语文和英语的相关课程内容")
    
    if not needed:
        return num, title, None  # Nothing to add
    
    return num, title, {
        'content': content,
        'needed': needed,
        'has_biaoa': has_biaoa,
        'has_vocab': has_vocab,
        'goals': goals
    }

def generate_supplement(num, title, info):
    """Use AI to generate missing sections."""
    if info is None:
        return None
    
    # Extract a summary of the existing content
    content = info['content']
    # Get ~1000 chars from the middle (core content)
    mid = len(content)//3
    excerpt = content[mid:mid+1500]
    
    prompt = f"""你是幼儿数学教材编辑。以下是一课Minecraft数学教材的摘要。

课程：第{num}课 {title}
学习目标：{info['goals'][:300]}

内容摘要：
{excerpt}

需要补充以下板块（用Markdown格式，简洁，适合5-7岁）：

{chr(10).join(f'- {n}' for n in info['needed'])}

直接输出这些板块的Markdown，每个板块以```开始。总计不超过500字。"""

    resp = requests.post(API_URL,
        headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
        json={"model": MODEL, "messages": [{"role": "user", "content": prompt}], "max_tokens": 2000, "temperature": 0.7},
        timeout=120)
    
    if resp.status_code != 200:
        return None
    
    text = resp.json()["choices"][0]["message"]["content"]
    return text

def patch_file(path, num, title, info):
    """Apply patches to the file."""
    if info is None:
        return False
    
    content = info['content']
    alignment = ALIGNMENTS.get(num, "")
    
    # Build supplement from AI output
    supplement = generate_supplement(num, title, info)
    if supplement is None:
        print(f"    AI generation failed, skipping patches")
        return False
    
    # Parse the AI output for sections
    # Add 【标A】 if missing
    lines = content.split('\n')
    new_lines = []
    biaoa_inserted = False
    goals_seen = False
    
    for line in lines:
        new_lines.append(line)
        if not goals_seen and '学习目标' in line:
            goals_seen = True
            continue
        if goals_seen and not biaoa_inserted and line.startswith('##'):
            # Insert 【标A】 between goals and next section
            if not info['has_biaoa'] and alignment:
                new_lines.insert(len(new_lines)-1, '')
                new_lines.insert(len(new_lines)-1, f'> {alignment}')
            biaoa_inserted = True
        
        # Insert supplements before the last section (before 庆祝/徽章 or before 🔗 if exists)
        # We'll append at the end
    
    # Now find insertion point for supplements - before "🎉" or before 📖小词典
    insert_point = len(new_lines)
    
    for i, line in enumerate(new_lines):
        if '🎉' in line and '小词典' not in new_lines[max(0,i-1)]:
            insert_point = i
            break
        if '📖 小词典' in line:
            insert_point = i
            break
    
    # Insert the supplement text
    supplement_text = supplement.replace('```', '').strip()
    supp_lines = supplement_text.split('\n')
    
    # Clean up AI artifacts
    clean_supp = []
    for s in supp_lines:
        s = s.strip()
        if s in ['', 'markdown', '---', '===']:
            clean_supp.append('')
        elif s.lower().startswith('##') or s.startswith('##') or s.startswith('###') or s.startswith('>'):
            clean_supp.append(s)
        elif s and not s.lower().startswith('note') and not s.lower().startswith('here'):
            clean_supp.append(s)
    
    new_lines[insert_point:insert_point] = [''] + clean_supp + ['']
    
    new_content = '\n'.join(new_lines)
    
    # Only write if changed
    if new_content != content:
        with open(path, 'w') as f:
            f.write(new_content)
        return True
    return False

NUM_MAP = {
    '认识数字1-10': 1, '认识数字11-20': 2, '比多少比大小': 3,
    '认识加法5以内': 4, '10以内的加法': 5, '认识减法5以内': 6,
    '10以内的减法': 7, '20以内的进位加法': 8, '20以内的退位减法': 9,
    '认识图形': 10, '测量与长度': 11, '总复习': 12
}

def main():
    import glob
    
    # Process math L1-L12 (basic + extension)
    files = sorted(glob.glob(os.path.join(OUT_DIR, '第[1-9]课-*.md')) + 
                   glob.glob(os.path.join(OUT_DIR, '第1[0-2]课-*.md')))
    
    # Filter to only L1-L12
    files = [f for f in files if any(
        f'第{i}课' in os.path.basename(f) for i in range(1, 13)
    )]
    
    count = 0
    for path in files:
        fname = os.path.basename(path)
        num, title, info = get_topic_info(path)
        
        if info is None:
            print(f"  SKIP {fname} (no patches needed)")
            count += 1
            continue
        
        missing = []
        if not info['has_biaoa']: missing.append('标A')
        if '常见误解' not in str(info): missing.append('误解')
        if not info.get('has_cross', True): missing.append('跨科')
        if not info.get('has_think', True): missing.append('提问')
        
        print(f"  PATCH {fname} +{','.join(missing)}")
        if patch_file(path, num, title, info):
            count += 1
        else:
            print(f"    FAILED")
        
        time.sleep(1)
    
    print(f"\nPatched {count}/{len(files)} files")

if __name__ == "__main__":
    main()
