#!/usr/bin/env python3
"""Add 【标A】 curriculum annotations to math L13-L24 chapters."""
import re, os, sys

OUT_DIR = "/home/deploy/bilingual-picturebooks/math-kindergarten/chapters"

# Curriculum alignment for each lesson
ALIGNMENTS = {
    13: "【标A: 数学课标一下·数与运算·100以内数的认识】",
    14: "【标A: 数学课标一下·数与运算·两位数加减法（无进退位）】",
    15: "【标A: 数学课标一下·数与运算·认识人民币（元角分）】",
    16: "【标A: 数学课标一下·量与测量·认识钟表（整点与半点）】",
    17: "【标A: 数学课标一下·图形与几何·认识立体图形】",
    18: "【标A: 数学课标一上·量与测量·比较与排序】",
    19: "【标A: 数学课标一下·统计与概率·分类与整理】",
    20: "【标A: 数学课标一上·图形与几何·位置与方向】",
    21: "【标A: 数学课标二上·数与运算·乘法初步（启蒙衔接）】",
    22: "【标A: 数学课标三上·数与运算·分数的初步认识（启蒙衔接）】",
    23: "【标A: 数学课标一上/一下·综合与实践·解决问题】",
    24: "【标A: 数学课标一下·综合复习·全册知识检测】",
}

for num in range(13, 25):
    align = ALIGNMENTS[num]
    for suffix in [f"课-*.md"]:
        # Find files for this lesson
        import glob
        pattern = os.path.join(OUT_DIR, f"第{num}课-*.md")
        for path in glob.glob(pattern):
            with open(path, 'r') as f:
                content = f.read()
            
            if "【标A:" in content:
                print(f"  SKIP {os.path.basename(path)} (already has 标A)")
                continue
            
            # Insert after 学习目标 list (before first ## section after 学习目标)
            # Find the end of 学习目标 section
            lines = content.split('\n')
            new_lines = []
            in_goals = False
            inserted = False
            
            for i, line in enumerate(lines):
                new_lines.append(line)
                if line.startswith('## 📋 学习目标'):
                    in_goals = True
                    continue
                if in_goals and line.startswith('## ') and '学习目标' not in line:
                    # This is the next section after 学习目标
                    new_lines.insert(len(new_lines) - 1, '')
                    new_lines.insert(len(new_lines) - 1, f'> {align}')
                    in_goals = False
                    inserted = True
                    continue
                if in_goals and line.startswith('> 【标A'):
                    in_goals = False  # already has it
            
            if not inserted:
                # Fallback: insert after 学习目标 line
                print(f"  WARN: Could not find insertion point in {os.path.basename(path)}")
                continue
            
            new_content = '\n'.join(new_lines)
            with open(path, 'w') as f:
                f.write(new_content)
            print(f"  FIXED {os.path.basename(path)} +{align[:30]}...")

print("\nDone!")
