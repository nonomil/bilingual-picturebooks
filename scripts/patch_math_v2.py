#!/usr/bin/env python3
"""Direct template-based patch for math L1-L12. No API calls needed."""
import re, os, glob

OUT_DIR = "/home/deploy/bilingual-picturebooks/math-kindergarten/chapters"

# Template data per lesson
LESSON_DATA = {
    1: {
        'align': '【标A: 数学课标一上·数与运算·认识数字1-10】',
        'cross': '语文第1课教"一二三"汉字 → 数学帮数笔画\n英语Lesson 5教numbers 1-10 → 中英数三科同步',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 数到几就是几个 | 手指指一个数一个，最后一个数代表总数 |
| "4" 和 "四" 不一样 | 4 是数字，四是汉字，都表示数量4 |
| 数乱了可以重新来 | 要按顺序，从左到右或从上到下，不然会漏 |''',
        'think': '''🧠 想一想
1. **观察推理**：5只小羊少了一只，还剩几只？你怎么知道的？
2. **反事实**：如果把数字的顺序打乱（1, 3, 2, 5, 4），你还能找到"4后面是几"吗？为什么？'''
    },
    2: {
        'align': '【标A: 数学课标一上·数与运算·认识数字11-20】',
        'cross': '语文第4课教数字汉字"十一、十二" → 数学帮理解组成\n英语Lesson 5教teen numbers → 中英数同步',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| "十五"写成105 | 十五=1个十+5个一，写成15，不分开 |
| 13和30分不清 | 13是thirteen(1个十+3)，30是thirty(3个十) |
| 20是"二零" | 20是"二十"，2个十+0个一 |''',
        'think': '''🧠 想一想
1. **观察推理**：15和51是同一个数吗？为什么不一样？
2. **反事实**：如果世界上没有"十几"这种数法，每个数都要新起一个名字，会怎样？'''
    },
    3: {
        'align': '【标A: 数学课标一上·数与运算·比多少、比大小】',
        'cross': '语文第3课教"大、小、多、少"汉字 → 数学练习比较\n英语Lesson 4教big/small → 三科统一',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| "哪个大"只看长短 | 比大小要看整体，不是只看一个方向 |
| 数量多的一定大 | 10颗豆子比1个西瓜数量多，但西瓜更大 |
| ">" 和 "<" 随便写 | 开口朝大的数：5>3 读作"5大于3" |''',
        'think': '''🧠 想一想
1. **观察推理**：3个西瓜和5个草莓，哪个数量多？哪个总重量大？为什么答案不一样？
2. **反事实**：如果"大于号"和"小于号"的开口方向反过来，数学题会变成什么样？'''
    },
    4: {
        'align': '【标A: 数学课标一上·数与运算·5以内加法】',
        'cross': '语文第1课象形字"合"=人一口=合在一起 → 加法=合起来\n英语Lesson 5教plus/add → 双语录术',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 2+3和3+2不一样 | 加法交换律：2+3=3+2=5 |
| 加完的结果忘了数0 | 0+3=3，加0不改变数量 |
| 手指不够用就不加了 | 5以内加法一只手就够了，先数大的数 |''',
        'think': '''🧠 想一想
1. **观察推理**：你有2个苹果，Alex给了你3个苹果。为什么答案不是"2"也不是"3"？
2. **反事实**：如果你先有3个再加2个，和先有2个再加3个，结果会不一样吗？动手试试！'''
    },
    5: {
        'align': '【标A: 数学课标一上·数与运算·10以内加法】',
        'cross': '语文第4课教数字汉字组合 → 数学练十以内加法心算\n英语Lesson 5强化1-10英语数词',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 数轴只能从0开始 | 可以从任意数开始跳：4+3=从4往右跳3步 |
| 凑十法就是死记硬背 | 凑十法是理解进位的基础：8+5=8+2+3=13 |
| 加法顺序不能变 | 可以！先加哪个都一样：2+7+1=(2+7)+1=2+(7+1) |''',
        'think': '''🧠 想一想
1. **观察推理**：8+5=13。如果不凑十，你能用别的方法算出来吗？
2. **反事实**：如果世界上没有"10"这个数字，只能数到9，那9+1会变成什么？'''
    },
    6: {
        'align': '【标A: 数学课标一上·数与运算·5以内减法】',
        'cross': '语文第3课"少"字的演变 → 减法就是变少\n英语Lesson 5教minus/take away',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 5-3和3-5一样 | 不一样！5-3=2，但3-5在本课范围算不了（要借位） |
| 减法就是"拿走" | 也可以是"比较差多少"：你5个我3个，你比我多2个 |
| 0-1=0 | 错误！0不能减1（在本阶段），就像不能从空袋子里拿走东西 |''',
        'think': '''🧠 想一想
1. **观察推理**：你有5个方块，被苦力怕炸掉了3个，还剩几个？"炸掉"和"拿走"在数学上一样吗？
2. **反事实**：如果先拿走再放回来（减了又加），数量会变回原来的吗？试试5-2+2。'''
    },
    7: {
        'align': '【标A: 数学课标一上·数与运算·10以内减法】',
        'cross': '语文第5课"家"的组成 → 减法=把一部分分出去\n英语Lesson 5巩固英语减法表达',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 10-7和7-10一样 | 完全不一样！10-7=3但7-10=负数（下个阶段学） |
| 减法就是越减越小 | 10-0=10，减0不变！最小的结果是0 |
| 数轴往左跳就是一直减 | 每次减都要看清减几，跳对了才行 |''',
        'think': '''🧠 想一想
1. **观察推理**：10-3-2和10-5答案一样吗？为什么？试试看！
2. **反事实**：如果Steve每次减的时候都多数了1步，答案会变大还是变小？'''
    },
    8: {
        'align': '【标A: 数学课标一上·数与运算·20以内进位加法】',
        'cross': '语文第6课"进"字的含义 → 数学进位=前进一位\n英语Lesson 5 teen numbers → 英语十几表达法',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 9+5=9+1+4才对，不能9+5直接=14 | 凑十法是一种方法，不是唯一方法 |
| 进位就是把"1"写在前面 | 进位的1是"1个十"，写在十位上 |
| 十几的数读作"一十三" | 正确读法：13读"十三" |''',
        'think': '''🧠 想一想
1. **观察推理**：9+5=14。为什么答案是14而不是"94"或"95"？
2. **反事实**：如果"凑十"的时候找不到能凑成10的数怎么办？比如9+2？还有其他方法吗？'''
    },
    9: {
        'align': '【标A: 数学课标一上·数与运算·20以内退位减法】',
        'cross': '语文第7课"退"字的理解 → 数学退位=从高位借1\n英语Lesson 6练习用英语解释减法过程',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 13-5=12 | 错误：个位3不够减5，要向十位借1，13-5=8 |
| 借位就是减掉"1" | 借来的1是"1个十"=10个一，是10不是1 |
| 退位后十位变0就不用写了 | 如果还剩0个十，个位有数也要写 |''',
        'think': '''🧠 想一想
1. **观察推理**：15-7=8。为什么不能直接用5-7？个位发生了什么？
2. **反事实**：如果Steve每次退位都忘了向十位借"1个十"，而是借了"1个一"，答案会怎样？'''
    },
    10: {
        'align': '【标A: 数学课标一下·图形与几何·认识平面图形】',
        'cross': '语文第1课象形字→图形也是从实物来的！\n英语Lesson 1教square/circle/triangle → 中英图形词汇同步',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 正方形和长方形一样 | 正方形4边一样长，长方形对边一样长 |
| 三角形都是尖头朝上的 | 三角形可以朝任何方向，只要3边3角 |
| 圆形和球形分不清 | 圆形是平的（🪙硬币面），球形是立体的（⚽皮球） |''',
        'think': '''🧠 想一想
1. **观察推理**：一个正方形，用剪刀从一角剪到对面一角，会变成什么形状？
2. **反事实**：如果Minecraft世界里只有正方形，没有圆形、三角形，你会怎样描述太阳？'''
    },
    11: {
        'align': '【标A: 数学课标一上·量与测量·测量与长度启蒙】',
        'cross': '语文第11课教"长、短、高、矮" → 数学测量实操\n英语Lesson 7教big/small/long/short → 双语测量词',
        'mistake': '''### ❌常见误解

| ❌ 错误想法 | ✅ 正确理解 |
|-----------|-----------|
| 谁的个子高谁就长 | 高矮和长短不一样！蛇很长但不"高" |
| 用尺子量随便放 | 要从刻度0开始对齐，歪了就不准 |
| 非标准测量不准确 | 用手掌量也是测量！关键是每次用同一个工具 |''',
        'think': '''🧠 想一想
1. **观察推理**：用铅笔量桌子是5支铅笔长，用橡皮量是20块橡皮长。为什么数字不一样？
2. **反事实**：如果世界上没有尺子，你能想到用什么方法来比较两棵树的粗细吗？'''
    },
    12: {
        'align': '【标A: 数学课标一上·综合复习·全册知识检测】',
        'cross': '语文第12课总复习 + 英语Lesson 12总复习 → 三科同步嘉年华\n亲子活动建议：用Minecraft数方块、摆图形',
        'mistake': '''### ❌常见误解（易错题提醒）

| ❌ 常见错误 | ✅ 正确做法 |
|-----------|-----------|
| 数数跳着数(1,2,4,5,6...) | 一个一个按顺序数，不跳不漏 |
| 加法减法搞混 | 看清是"+"还是"-" |
| 图形名称记混 | 正方形=4边一样长，长方形=对边一样长 |
| 凑十找错搭档 | 1+9, 2+8, 3+7, 4+6, 5+5 = 10 |''',
        'think': '''🧠 想一想
1. **元认知**：这学期你最有信心的数学本领是什么？最难的是什么？
2. **应用**：如果让你用数学帮Steve建一个漂亮的花园，你会用到哪些学过的知识？'''
    },
}

def patch_basic_file(path, num):
    """Patch a basic lesson file (8-page format)."""
    data = LESSON_DATA[num]
    with open(path) as f:
        content = f.read()
    
    if '【标A:' in content and '常见误解' in content and '跨科连接' in content and '想一想' in content:
        return False  # Already patched
    
    lines = content.split('\n')
    new_lines = []
    patched_sections = set()
    
    for line in lines:
        new_lines.append(line)
        
        # Insert 【标A】 after 学习目标 list ends (before next ##)
        if '学习目标' in line and '标A' not in patched_sections and '【标A:' not in content:
            # We'll insert after the last -  item in goals
            patched_sections.add('标A')
            continue
        
        # After goals end (next ## section), insert align
        if '标A' in patched_sections and line.startswith('##') and '学习目标' not in line:
            new_lines.insert(len(new_lines)-1, '')
            new_lines.insert(len(new_lines)-1, f'> {data["align"]}')
            new_lines.append('')
            patched_sections.remove('标A')
            patched_sections.add('DONE_align')
    
    # If align wasn't inserted by the loop, try alternate insertion
    if '标A' in patched_sections or 'DONE_align' not in patched_sections:
        # Find end of goals and insert
        done = False
        for i, line in enumerate(new_lines):
            if done: break
            if '学习目标' in line:
                for j in range(i+1, min(i+15, len(new_lines))):
                    if new_lines[j].startswith('#'):
                        new_lines.insert(j-1, '')
                        new_lines.insert(j-1, f'> {data["align"]}')
                        new_lines.insert(j-1, '')
                        done = True
                        break
    
    # Now append supplements at the end (before 🎉 or at the very end)
    new_content = '\n'.join(new_lines)
    
    # Add supplements before the last celebratory section
    supplements = []
    
    if '常见误解' not in new_content:
        supplements.append('')
        supplements.append('---')
        supplements.append('')
        supplements.append(data['mistake'])
    
    if '想一想' not in new_content or content.count('想一想') < 2:
        if '想一想' not in new_content:
            supplements.append('')
            supplements.append(data['think'])
    
    if '跨科连接' not in new_content:
        supplements.append('')
        supplements.append('---')
        supplements.append('')
        supplements.append('## 🔗 跨科连接')
        supplements.append(data['cross'])
    
    if supplements:
        # Find insertion point - before 🎉 or 📖 or at end
        insert_at = len(new_content)
        for marker in ['🎉', '📖 小词典', '# 第']:
            idx = new_content.rfind(marker)
            if 0 < idx < insert_at:
                insert_at = new_content.rfind('\n', 0, idx)
        
        if insert_at <= 0:
            insert_at = len(new_content)
        
        final = new_content[:insert_at] + '\n'.join(supplements) + '\n\n' + new_content[insert_at:]
    else:
        final = new_content
    
    if final != content:
        with open(path, 'w') as f:
            f.write(final)
        return True
    return False

def patch_ext_file(path, num):
    """Patch an extension lesson file. Lighter treatment."""
    data = LESSON_DATA[num]
    with open(path) as f:
        content = f.read()
    
    needs_patch = False
    patches = []
    
    if '【标A:' not in content:
        needs_patch = True
        patches.append(f'> {data["align"]}')
    
    if '跨科连接' not in content:
        needs_patch = True
        patches.append('')
        patches.append('## 🔗 跨科连接')
        patches.append(data['cross'])
    
    if '想一想' not in content:
        needs_patch = True
        patches.append('')
        patches.append(data['think'])
    
    if not needs_patch:
        return False
    
    # Insert patches after learning goals, or append at end
    if patches:
        patch_text = '\n\n---\n\n' + '\n'.join(patches)
        final = content.rstrip() + patch_text + '\n'
        with open(path, 'w') as f:
            f.write(final)
        return True
    return False

def main():
    import glob
    
    # Process all math L1-L12 files
    files = sorted(glob.glob(os.path.join(OUT_DIR, '第[1-9]课-*.md')) +
                   glob.glob(os.path.join(OUT_DIR, '第1[0-2]课-*.md')))
    
    # Filter to L1-L12 only
    files_l12 = []
    for f in files:
        for i in range(1, 13):
            if f'第{i}课' in os.path.basename(f) and f'第1{i}' not in os.path.basename(f):
                files_l12.append(f)
                break
    
    files_l12 = sorted(set(files_l12))
    
    patched = 0
    skipped = 0
    
    for path in files_l12:
        fname = os.path.basename(path)
        
        # Determine lesson number
        for i in range(1, 13):
            if f'第{i}课' in fname:
                num = i
                break
        else:
            continue
        
        is_ext = '拓展' in fname
        
        if is_ext:
            changed = patch_ext_file(path, num)
        else:
            changed = patch_basic_file(path, num)
        
        if changed:
            print(f"  ✅ {fname}")
            patched += 1
        else:
            print(f"  ⏭️ {fname} (already patched)")
            skipped += 1
    
    print(f"\nPatched: {patched}, Skipped: {skipped}, Total: {len(files_l12)}")

if __name__ == "__main__":
    main()
