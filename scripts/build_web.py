#!/usr/bin/env python3
"""
build_web.py — 读取 stories.js，生成 StoryFun 双版本网页
用法: python3 build_web.py [story_id]
"""
import json, os, re, sys

REPO = "/home/deploy/bilingual-picturebooks"
DATA = f"{REPO}/data/stories.js"
OUT_R = f"{REPO}/public/reader"
OUT_G = f"{REPO}/public/game"

def load_stories():
    raw = open(DATA).read()
    raw = re.sub(r'^const STORIES = ', '', raw).strip()
    # 简单处理：找到最后一个 ] 作为数组结束
    depth = 0
    for i, c in enumerate(raw):
        if c == '[': depth += 1
        elif c == ']': depth -= 1
        if depth == 0:
            raw = raw[:i+1]
            break
    return json.loads(raw)

def build(story_id=None):
    stories = load_stories()
    
    # 只处理 StoryFun 分类的故事
    targets = [s for s in stories if s.get('category') == 'storyfun']
    if story_id:
        targets = [s for s in targets if s['id'] == story_id]
    
    print(f"找到 {len(targets)} 个 StoryFun 故事")
    
    for s in targets:
        sid = s['id']
        os.makedirs(OUT_R, exist_ok=True)
        os.makedirs(OUT_G, exist_ok=True)
        
        # 加载模板
        with open(f"{REPO}/scripts/templates/reader.html") as f:
            tmpl_r = f.read()
        with open(f"{REPO}/scripts/templates/game.html") as f:
            tmpl_g = f.read()
        
        # 替换占位符
        title = s.get('title', sid)
        title_zh = s.get('titleZh', '')
        unit = s.get('unit', 1)
        pages_json = json.dumps(s['pages'], ensure_ascii=False)
        
        # 朗读版
        r = tmpl_r
        r = r.replace('{{STORY_TITLE}}', title)
        r = r.replace('{{STORY_TITLE_ZH}}', title_zh)
        r = r.replace('{{UNIT_TAG}}', f"Unit {unit}")
        r = r.replace('{{PAGES_JSON}}', pages_json)
        
        with open(f"{OUT_R}/{sid}.html", 'w') as f:
            f.write(r)
        
        # 游戏版
        g = tmpl_g
        g = g.replace('{{STORY_TITLE}}', title)
        g = g.replace('{{STORY_JSON}}', json.dumps(s, ensure_ascii=False))
        g = g.replace('{{STORY_INTRO}}', f"和{s.get('titleZh', title)}一起学英语吧！")
        
        with open(f"{OUT_G}/{sid}.html", 'w') as f:
            f.write(g)
        
        print(f"✅ {sid}: reader/{sid}.html + game/{sid}.html")

if __name__ == "__main__":
    sid = sys.argv[1] if len(sys.argv) > 1 else None
    build(sid)