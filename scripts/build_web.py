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
    
    # 处理所有分类（storyfun 和 classic）
    targets = stories  # 全部处理
    if story_id:
        targets = [s for s in targets if s['id'] == story_id]
    
    print(f"找到 {len(targets)} 个故事")
    
    for s in targets:
        sid = s['id']
        cat = s.get('category', 'classic')  # 使用实际的分类
        
        # 如果没有分类，默认为 classic
        if cat == 'storyfun':
            pass  # 已经是 storyfun
        else:
            cat = 'classic'  # 其他都是经典绘本
        
        # 根据分类创建子目录
        out_r = f"{OUT_R}/{cat}"
        out_g = f"{OUT_G}/{cat}"
        os.makedirs(out_r, exist_ok=True)
        os.makedirs(out_g, exist_ok=True)
        
        # 加载模板
        with open(f"{REPO}/scripts/templates/reader.html") as f:
            tmpl_r = f.read()
        with open(f"{REPO}/scripts/templates/game.html") as f:
            tmpl_g = f.read()
        
        # 替换占位符
        title = s.get('title', sid)
        title_zh = s.get('titleZh', '')
        unit = s.get('unit', 1)
        
# 序列化 pages 为 JSON（确保中文和引号正确）
        pages_json = json.dumps(s['pages'], ensure_ascii=False)

        # 修正图片路径为绝对路径
        pages_fixed = []
        for pg in s['pages']:
            pg = pg.copy()
            if 'images/' in pg.get('img', ''):
                pass  # 已经是绝对路径
            else:
                pg['img'] = f'images/{sid}/{pg["img"]}'
            pages_fixed.append(pg)
        pages_json = json.dumps(pages_fixed, ensure_ascii=False)
        
        # 计算游戏页面相对路径（从 reader/{cat}/ 到 game/{cat}/）
        game_rel = f'../game/{cat}/{sid}.html'
        
        # 朗读版 - 用 ## 包裹占位符避免和 JS 模板冲突
        r = tmpl_r.replace('{{STORY_TITLE}}', title)
        r = r.replace('{{STORY_TITLE_ZH}}', title_zh)
        r = r.replace('{{UNIT_TAG}}', f"Unit {unit}")
        r = r.replace('##PAGES_JSON##', pages_json)
        r = r.replace('##GAME_URL##', game_rel)
        
        with open(f"{out_r}/{sid}.html", 'w') as f:
            f.write(r)
        
        # 游戏版
        g = tmpl_g
        g = g.replace('{{STORY_TITLE}}', title)
        g = g.replace('{{STORY_JSON}}', json.dumps(s, ensure_ascii=False))
        g = g.replace('{{STORY_INTRO}}', f"和{s.get('titleZh', title)}一起学英语吧！")
        
        with open(f"{out_g}/{sid}.html", 'w') as f:
            f.write(g)
        
        print(f"✅ {sid}: reader/{sid}.html + game/{sid}.html")

if __name__ == "__main__":
    sid = sys.argv[1] if len(sys.argv) > 1 else None
    build(sid)