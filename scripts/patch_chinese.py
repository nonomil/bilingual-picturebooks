#!/usr/bin/env python3
"""Template-based patch for all 48 Chinese chapters."""
import re, os, glob

OUT_DIR = "/home/deploy/bilingual-picturebooks/chinese-language/chapters"

# Phase-level templates (shared by lesson clusters)
PHASES = {
    "L1-L6": {  # 汉字启蒙
        'align': '【标A: 语文课标一上·识字与写字·认识常用汉字（象形字→楷体）】',
        'cross': '数学第1课教数字1-10 → 语文同步教一二三\n英语Lesson 2教ABC字母 → 中英文字对比认知',
        'mistake': '''### ❌常见误解

| ❌ 错误写法/理解 | ✅ 正确写法/理解 |
|-------|-------|
| "日"写成"目"（中间多一横） | 日=太阳，中间一横，不是两横 |
| "山"写成三竖一样高 | 中间一竖最高，两边的低 |
| "水"的笔画随便写 | 笔顺：竖钩 → 横撇 → 撇 → 捺 |
| 把象形字当画看，不记字形 | 象形字是"从画变来的字"，要记住现在的样子 |''',
        'think': '''🧠 想一想
1. **观察推理**：为什么"日"里面只有一横而不是两横？（提示：太阳只有一个）
2. **反事实**：如果古人把"山"画成三座一样高的山峰，现在的"山"字会是什么样子？'''
    },
    "L7-L12": {  # 拼音
        'align': '【标A: 语文课标一上·汉语拼音·声母韵母整体认读】',
        'cross': '英语Lesson 2-3教26个字母 → 拼音声母韵母与英语字母对比\n数学第10课教图形 → b/d/p/q 形状分辨',
        'mistake': '''### ❌常见误解

| ❌ 错误发音/写法 | ✅ 正确发音/写法 |
|-------|-------|
| b和d分不清（"b像6，d反6"） | b=右耳b，圆圈在右；d=左耳d，圆圈在左 |
| p和q分不清（"p像9，q反9"） | p=泼水p，圆圈在右向下；q=气球q，圆圈在左向下 |
| zh/ch/sh 读成 j/q/x | 舌尖翘起（翘舌音），不是舌面贴硬腭 |
| 前鼻音和后鼻音不分 | an≠ang，舌头位置不同（前鼻音舌尖顶上齿，后鼻音舌根抬起） |''',
        'think': '''🧠 想一想
1. **观察推理**：b、p、m、f 都用嘴唇发音，d、t、n、l 用舌尖。你还能找到其他发音位置的规律吗？
2. **反事实**：如果拼音里没有声调（一、二、三、四声），"妈妈骂马"这4个字还能分得清吗？'''
    },
    "L13-L18": {  # 主题识字
        'align': '【标A: 语文课标一上·识字与写字·生活情境识字】',
        'cross': '数学第15课教认识钱币 → 语文教"买、卖、元、角"\n英语Lesson 7-9教动物/身体/食物 → 中文对应词同步',
        'mistake': '''### ❌常见误解

| ❌ 错误写法/理解 | ✅ 正确写法/理解 |
|-------|-------|
| "吃"字右边写成"乞" | 吃=口+乞（qǐ），乞=气去掉最后一笔 |
| "身"字少写一横 | 身=7画，第6笔是长横，不能漏 |
| 学了新字忘了旧字 | 每课复习前课字，学过的字要在新情境中用 |
| 只认字不组词 | 每个字至少要会2个词（如：水→河水、水果） |''',
        'think': '''🧠 想一想
1. **观察推理**："吃、喝、叫、唱"都有"口"字旁。为什么这些字都跟嘴巴有关？你能再找出3个有"口"字旁的字吗？
2. **反事实**：如果所有的字都没有偏旁部首，全都是随机的笔画组合，学汉字会变成什么样？'''
    },
    "L19-L24": {  # 阅读表达
        'align': '【标A: 语文课标一上·阅读·朗读儿歌和浅近古诗】',
        'cross': '英语Lesson 19-23教简单故事 → 中英文阅读能力同时发展\n数学第23课教应用题 → 语文阅读理解帮助解数学题',
        'mistake': '''### ❌常见误解

| ❌ 错误理解 | ✅ 正确理解 |
|-------|-------|
| 古诗就是每个字都认识就行了 | 古诗要感受画面和情感，不只是认字 |
| 反义词就是"反着说" | 反义词是意义相反的词（高↔矮），不是句子反过来 |
| "的、地、得"随便用 | 的+名词（蓝蓝的天）、地+动词（快快地跑）、得+补语（跑得快） |
| 问号(?)和感叹号(!)分不清 | ？=在提问；！=很激动 |''',
        'think': '''🧠 想一想
1. **观察推理**："床前明月光，疑是地上霜"——诗人为什么觉得月光像霜？他在想什么？
2. **反事实**：如果你要给Steve写一封信介绍中文字，你最先想让他认识哪3个字？为什么？'''
    },
}

def get_phase(lesson_num):
    if lesson_num <= 6: return "L1-L6"
    elif lesson_num <= 12: return "L7-L12"
    elif lesson_num <= 18: return "L13-L18"
    else: return "L19-L24"

def patch_file(path):
    """Patch a Chinese lesson file with missing sections."""
    with open(path) as f:
        content = f.read()
    
    fname = os.path.basename(path)
    
    # Extract lesson number
    num_match = re.search(r'第(\d+)课', fname)
    if not num_match:
        return False
    num = int(num_match.group(1))
    phase = get_phase(num)
    data = PHASES[phase]
    
    # Check existing
    all_ok = True
    if '【标A:' not in content: all_ok = False
    if '常见误解' not in content: all_ok = False
    if '跨科连接' not in content: all_ok = False
    if '想一想' not in content: all_ok = False
    
    if all_ok:
        return False  # Already patched
    
    # Build missing sections
    supplements = []
    
    if '【标A:' not in content:
        supplements.append(f'> {data["align"]}')
    
    if '常见误解' not in content:
        supplements.append('')
        supplements.append(data['mistake'])
    
    if '想一想' not in content:
        supplements.append('')
        supplements.append(data['think'])
    
    if '跨科连接' not in content:
        supplements.append('')
        supplements.append('## 🔗 跨科连接')
        supplements.append(data['cross'])
    
    if not supplements:
        return False
    
    # Insert after learning goals, or append at end
    # Find insertion point: before 🎉 or 📖 or at end
    insert_at = len(content)
    for marker in ['🎉', '📖', '🏠', '学有余力', '# 第']:
        idx = content.rfind(marker)
        if 0 < idx < insert_at:
            insert_at = content.rfind('\n', 0, idx) if content.rfind('\n', 0, idx) > 0 else idx
    
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
    files = sorted(glob.glob(os.path.join(OUT_DIR, '第*课-*.md')))
    
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
