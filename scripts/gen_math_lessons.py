#!/usr/bin/env python3
"""Generate math L13-L24 via CLIProxyAPI - fixed prompt."""
import json, os, sys, time, requests

API_URL = "http://localhost:8318/v1/chat/completions"
API_KEY = "sk-cli-proxy-deploy-2026"
MODEL = "gpt-5.4"
OUT_DIR = "/home/deploy/bilingual-picturebooks/math-kindergarten/chapters"

# Compact format description
FORMAT_SPEC = """
格式要求（严格遵循）：
```
# 第N课 标题
## 📋 学习目标
## 🎬 第一页：Minecraft故事场景
## 🤔 第二页：核心概念（用Steve/Alex对话提问引导）
## 👋 第三页：动手练习
## 💡 第四页：深入 + ❌常见误解（错误vs正确对比）
## ✏️ 第五页：练习
## 🤯 第六页：更多练习
## 🎯 第七页：Minecraft闯关挑战
## 🎉 第八页：庆祝 + 徽章 + ✅本课小结
## 🔗 跨科连接
## 📖 小词典
```

- 每页一个图片：<img src="./img/chapter-NN/page-NN.png" width="480" alt="描述"/>
- 句子简短（5-7岁），Steve和Alex对话自然
- 用提问引导发现，不只告知
- 拓展课开头引用基础课内容做回忆

拓展课格式（5页）：回忆复习→再来一次→小拓展→再练练→终极挑战+再庆祝
"""

LESSONS = [
    (13, "认识100以内的数",
     "认识数字1-100，理解十位和个位，掌握\"几个十几个一\"的组成，按10个一组数数",
     "Steve发现大仓库，箱子里物品按10个一组排列。Alex教他用整十计数。"),

    (14, "两位数加减",
     "掌握无进退位两位数加减法，认识竖式，学会个位对个位十位对十位",
     "为村庄建围墙！Alex计算需要多少石头——每层用整十，再加上零头。"),

    (15, "认识钱币",
     "认识元角分，1元=10角，简单的购物计算和找零",
     "村民市场！用绿宝石(元)买工具和食物。Steve学付钱和找零。"),

    (16, "认识钟表",
     "认识整点和半点，时针和分针，早晚时间顺序",
     "村庄建钟塔！Alex教Steve认整点(分针指12)和半点(分针指6)。"),

    (17, "图形拼搭",
     "认识正方体、长方体、圆柱、球，立体图形组合创造新形状",
     "建瞭望塔！用不同形状建材——方块(正方体)、木板(长方体)、柱子(圆柱)。"),

    (18, "比较与排序",
     "学习长短、高矮、轻重比较，多个物体排序，间接比较方法",
     "整理仓库！按长短排木棍，按高矮排栅栏，按轻重排石头。"),

    (19, "简单统计",
     "分类计数，用○和柱状图记录数据，理解最多和最少",
     "村庄普查！数村民、动物、庄稼，画统计图。比较哪种最多。"),

    (20, "位置与方向",
     "掌握上下左右前后方位，网格坐标启蒙",
     "寻宝地图！格子上有坐标——(3,2)表示从左边数3格、从下往上数2格。"),

    (21, "乘法启蒙",
     "等量加法→乘法，\"几个几\"(3个2=6)，阵列(row×col)可视化",
     "农田播种！每行4棵，3行=12棵。阵列就是\"几个几\"=乘法。"),

    (22, "分数的故事",
     "等分概念，一半=1/2，四分之一=1/4，每份一样多",
     "村庄节日蛋糕！切成一半(1/2)，再一半成四分之一(1/4)。等分=公平。"),

    (23, "应用题大挑战",
     "综合加减法和比较解决实际问题，两步应用题启蒙，画图辅助",
     "地下迷宫！每个房间一道应用题——解对开门。加法减法比较混合。"),

    (24, "数学嘉年华",
     "L13-L24全册总复习，数学游园会形式，全面检测",
     "村庄数学嘉年华！6个游戏站涵盖所有主题，集满印章赢大奖。"),
]

def gen_basic(num, title, goals, story):
    prompt = f"你编写中文幼儿数学教材Markdown章节。{FORMAT_SPEC}\n\n编写第{num}课“{title}”基础篇。\n学习目标：{goals}\nMinecraft故事：{story}\n\n必须包含：❌常见误解板块、至少2个苏格拉底式提问、📖小词典(中英术语)、🔗跨科连接。\n\n直接输出从\"# 第{num}课 {title}\"开始的完整Markdown章节。"
    
    print(f"  BASIC L{num}...", end=" ", flush=True)
    resp = requests.post(API_URL,
        headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
        json={"model": MODEL, "messages": [{"role": "user", "content": prompt}], "max_tokens": 8000, "temperature": 0.7},
        timeout=300)
    
    if resp.status_code != 200:
        print(f"ERR {resp.status_code}: {resp.text[:100]}")
        return False
    
    content = resp.json()["choices"][0]["message"]["content"]
    path = os.path.join(OUT_DIR, f"第{num}课-{title}.md")
    with open(path, 'w') as f: f.write(content)
    print(f"{len(content)} chars ✓")
    return True

def gen_ext(num, title, goals, story):
    prompt = f"你编写中文幼儿数学教材Markdown拓展章节。{FORMAT_SPEC}\n\n编写第{num}课“{title}”拓展篇。\n学习目标(巩固)：{goals}\nMinecraft故事：{story}\n\n拓展课格式（5页）：\n第一页：回忆基础课内容\n第二-四页：更多练习场景\n第五页：终极挑战+再庆祝\n\n开头必须有：\"> 📖 这是第{num}课的拓展单元。先完成《{title}》基础篇，再做这里！\"\n\n直接输出从\"# 第{num}课 拓展篇\"开始的完整Markdown章节。"

    print(f"  EXT L{num}...", end=" ", flush=True)
    resp = requests.post(API_URL,
        headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
        json={"model": MODEL, "messages": [{"role": "user", "content": prompt}], "max_tokens": 6000, "temperature": 0.7},
        timeout=300)

    if resp.status_code != 200:
        print(f"ERR {resp.status_code}: {resp.text[:100]}")
        return False

    content = resp.json()["choices"][0]["message"]["content"]
    path = os.path.join(OUT_DIR, f"第{num}课-拓展.md")
    with open(path, 'w') as f: f.write(content)
    print(f"{len(content)} chars ✓")
    return True

def main():
    start_idx = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    end_idx = int(sys.argv[2]) if len(sys.argv) > 2 else len(LESSONS)

    for i in range(start_idx, end_idx):
        num, title, goals, story = LESSONS[i]
        print(f"\n[{i+1}/{len(LESSONS)}] L{num} {title}")
        if not gen_basic(num, title, goals, story):
            print("BASIC FAILED, stopping")
            break
        time.sleep(1)
        if not gen_ext(num, title, goals, story):
            print("EXT FAILED, stopping")
            break
        time.sleep(2)
    
    print("\nAll done!")

if __name__ == "__main__":
    main()
