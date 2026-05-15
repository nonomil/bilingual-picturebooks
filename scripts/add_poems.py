#!/usr/bin/env python3
"""Add 古诗角 (Ancient Poem Corner) with line-by-line Minecraft illustrations to each Chinese chapter."""
import re, os
from pathlib import Path

CHAPTERS = Path("/home/deploy/bilingual-picturebooks/chinese-language/chapters")
IMG_DIR = Path("/home/deploy/bilingual-picturebooks/chinese-language/chapters/img")

POEMS = {
    "第1课-神奇汉字": {
        "title": "古朗月行（节选）", "dynasty": "唐", "author": "李白",
        "intro": "李白小时候不认识月亮，把它叫作白玉盘。这首诗写的就是小孩子的想象。",
        "lines": [
            ("小时不识月", "小时候不认识月亮", "小时不识月亮，把它叫作白玉盘"),
            ("呼作白玉盘", "叫它白玉盘", "呼作白玉盘"),
            ("又疑瑶台镜", "又怀疑是瑶台仙镜", "又疑瑶台镜"),
            ("飞在青云端", "飞在青云之上", "飞在青云端"),
        ]
    },
    "第2课-基本笔画": {
        "title": "一去二三里", "dynasty": "宋", "author": "邵雍",
        "intro": "数数诗——数字藏在诗句里，读起来像游戏。",
        "lines": [
            ("一去二三里", "走了一两里路", "一去二三里"),
            ("烟村四五家", "远处有四五户人家", "烟村四五家"),
            ("亭台六七座", "路边有六七座亭子", "亭台六七座"),
            ("八九十枝花", "路边开着许多花", "八九十枝花"),
        ]
    },
    "第3课-天地人": {
        "title": "画", "dynasty": "唐", "author": "王维（传）",
        "intro": "一首谜语诗——说的是一幅画。远看有山有色，近听却无声。",
        "lines": [
            ("远看山有色", "远远看去山有颜色", "远看山有色"),
            ("近听水无声", "走近却听不到水声", "近听水无声"),
            ("春去花还在", "春天过去了花还在开", "春去花还在"),
            ("人来鸟不惊", "人来了鸟也不惊飞", "人来鸟不惊"),
        ]
    },
    "第4课-大自然": {
        "title": "风", "dynasty": "唐", "author": "李峤",
        "intro": "风看不见摸不着，但诗人用三件事让你看见风。",
        "lines": [
            ("解落三秋叶", "风吹落秋天的叶子", "解落三秋叶"),
            ("能开二月花", "风吹开春天的花", "能开二月花"),
            ("过江千尺浪", "风过江面掀起波浪", "过江千尺浪"),
            ("入竹万竿斜", "风吹进竹林竹竿弯腰", "入竹万竿斜"),
        ]
    },
    "第5课-我爱我家": {
        "title": "游子吟（节选）", "dynasty": "唐", "author": "孟郊",
        "intro": "妈妈给远行的孩子缝衣服——一针一线都是爱。",
        "lines": [
            ("慈母手中线", "妈妈手里拿着针线", "慈母手中线"),
            ("游子身上衣", "为远行的孩子缝衣服", "游子身上衣"),
            ("临行密密缝", "临走前密密地缝", "临行密密缝"),
            ("意恐迟迟归", "怕孩子迟迟不回来", "意恐迟迟归"),
        ]
    },
    "第6课-开心学校": {
        "title": "劝学（节选）", "dynasty": "唐", "author": "颜真卿",
        "intro": "劝大家珍惜时间好好学习——黑发不知勤学早，白首方悔读书迟。",
        "lines": [
            ("三更灯火五更鸡", "深夜灯火和清晨鸡鸣", "三更灯火五更鸡"),
            ("正是男儿读书时", "正是读书的好时候", "正是男儿读书时"),
            ("黑发不知勤学早", "年轻时不知道要勤学", "黑发不知勤学早"),
            ("白首方悔读书迟", "老了后悔读书太晚", "白首方悔读书迟"),
        ]
    },
    "第7课-拼音是什么": {
        "title": "池上", "dynasty": "唐", "author": "白居易",
        "intro": "一个小孩子偷偷划船去采白莲，却不知道浮萍留下了小船经过的痕迹。",
        "lines": [
            ("小娃撑小艇", "小孩撑着小船", "小娃撑小艇"),
            ("偷采白莲回", "偷偷采了白莲回来", "偷采白莲回"),
            ("不解藏踪迹", "不知道隐藏踪迹", "不解藏踪迹"),
            ("浮萍一道开", "浮萍被船划开一道水痕", "浮萍一道开"),
        ]
    },
    "第8课-拼音魔法进阶": {
        "title": "相思", "dynasty": "唐", "author": "王维",
        "intro": "红豆生在南国——看到红豆就想起了远方的朋友。",
        "lines": [
            ("红豆生南国", "红豆生长在南方", "红豆生南国"),
            ("春来发几枝", "春天来了发出新枝", "春来发几枝"),
            ("愿君多采撷", "愿你多采摘一些", "愿君多采撷"),
            ("此物最相思", "这东西最能寄托相思", "此物最相思"),
        ]
    },
    "第9课-声母王国上": {
        "title": "登鹳雀楼", "dynasty": "唐", "author": "王之涣",
        "intro": "想要看到更远的地方，就要登上更高的楼。",
        "lines": [
            ("白日依山尽", "太阳沿着山落下", "白日依山尽"),
            ("黄河入海流", "黄河流入大海", "黄河入海流"),
            ("欲穷千里目", "想要看到千里之外", "欲穷千里目"),
            ("更上一层楼", "就要再登上一层楼", "更上一层楼"),
        ]
    },
    "第10课-声母王国中": {
        "title": "江雪", "dynasty": "唐", "author": "柳宗元",
        "intro": "千山万鸟都飞走了，只有一位老翁在寒冷的江面上独自钓鱼。",
        "lines": [
            ("千山鸟飞绝", "所有山上的鸟都飞走了", "千山鸟飞绝"),
            ("万径人踪灭", "所有路上都不见人影", "万径人踪灭"),
            ("孤舟蓑笠翁", "一叶孤舟上有个披蓑衣的老翁", "孤舟蓑笠翁"),
            ("独钓寒江雪", "独自在寒江雪中垂钓", "独钓寒江雪"),
        ]
    },
    "第11课-声母王国下": {
        "title": "江南", "dynasty": "汉", "author": "汉乐府",
        "intro": "江南采莲的季节，鱼儿在莲叶间快乐地游来游去。",
        "lines": [
            ("江南可采莲", "江南可以采莲了", "江南可采莲"),
            ("莲叶何田田", "莲叶多么茂盛", "莲叶何田田"),
            ("鱼戏莲叶间", "鱼儿在莲叶间嬉戏", "鱼戏莲叶间"),
            ("鱼戏莲叶东/西/南/北", "鱼儿游到莲叶的东西南北", "鱼戏莲叶间四处游"),
        ]
    },
    "第12课-韵母大冒险": {
        "title": "赠汪伦", "dynasty": "唐", "author": "李白",
        "intro": "李白坐船要走，突然听到岸上有人唱歌送别——他的朋友汪伦来了。",
        "lines": [
            ("李白乘舟将欲行", "李白坐上船正要出发", "李白乘舟将欲行"),
            ("忽闻岸上踏歌声", "忽然听到岸上有人唱歌", "忽闻岸上踏歌声"),
            ("桃花潭水深千尺", "桃花潭水有千尺深", "桃花潭水深千尺"),
            ("不及汪伦送我情", "不及汪伦送我的情谊深", "不及汪伦送我情"),
        ]
    },
    "第13课-我的身体": {
        "title": "咏柳", "dynasty": "唐", "author": "贺知章",
        "intro": "春天来了，柳树长出了嫩绿的新叶——像用剪刀裁出来的。",
        "lines": [
            ("碧玉妆成一树高", "高高的柳树像碧玉装饰的", "碧玉妆成一树高"),
            ("万条垂下绿丝绦", "万条柳枝像绿色的丝带", "万条垂下绿丝绦"),
            ("不知细叶谁裁出", "不知道细嫩的叶子是谁裁出来的", "不知细叶谁裁出"),
            ("二月春风似剪刀", "二月的春风像剪刀一样", "二月春风似剪刀"),
        ]
    },
    "第14课-数字与颜色": {
        "title": "望庐山瀑布", "dynasty": "唐", "author": "李白",
        "intro": "李白看庐山瀑布——觉得它像银河从天上落下来。",
        "lines": [
            ("日照香炉生紫烟", "阳光照在香炉峰上生起紫烟", "日照香炉生紫烟"),
            ("遥看瀑布挂前川", "远远看瀑布挂在山前", "遥看瀑布挂前川"),
            ("飞流直下三千尺", "飞流直下三千尺", "飞流直下三千尺"),
            ("疑是银河落九天", "怀疑是银河从天上落下来", "疑是银河落九天"),
        ]
    },
    # L15 skipped (悯农 in extension)
    "第16课-动作乐园": {
        "title": "小儿垂钓", "dynasty": "唐", "author": "胡令能",
        "intro": "一个小孩在学钓鱼，有人问路他远远招手——怕把鱼吓跑了。",
        "lines": [
            ("蓬头稚子学垂纶", "一个小孩在学钓鱼", "蓬头稚子学垂纶"),
            ("侧坐莓苔草映身", "侧身坐在草丛中", "侧坐莓苔草映身"),
            ("路人借问遥招手", "有人问路他远远招手", "路人借问遥招手"),
            ("怕得鱼惊不应人", "怕鱼被吓到不敢回答", "怕得鱼惊不应人"),
        ]
    },
    "第17课-方向与时间": {
        "title": "回乡偶书", "dynasty": "唐", "author": "贺知章",
        "intro": "小时候离开家乡，老了才回来——乡音没变，但头发已经白了。",
        "lines": [
            ("少小离家老大回", "小时候离开老了才回来", "少小离家老大回"),
            ("乡音无改鬓毛衰", "乡音没改鬓毛已白", "乡音无改鬓毛衰"),
            ("儿童相见不相识", "小孩们见了不认识我", "儿童相见不相识"),
            ("笑问客从何处来", "笑着问客人从哪里来", "笑问客从何处来"),
        ]
    },
    "第18课-动物世界": {
        "title": "画鸡", "dynasty": "明", "author": "唐寅",
        "intro": "大公鸡红冠白羽，一声啼叫千家万户的门都打开了。",
        "lines": [
            ("头上红冠不用戴", "头上的红冠不用刻意装饰", "头上红冠不用戴"),
            ("满身雪白走将来", "满身雪白走过来", "满身雪白走将来"),
            ("平生不敢轻言语", "平时从不轻易叫", "平生不敢轻言语"),
            ("一叫千门万户开", "一叫千家万户都开门", "一叫千门万户开"),
        ]
    },
    "第19课-复合词": {
        "title": "绝句", "dynasty": "唐", "author": "杜甫",
        "intro": "杜甫在春天看到的美丽景色——黄鹂翠柳、白鹭青天、雪山和远船。",
        "lines": [
            ("两个黄鹂鸣翠柳", "两只黄鹂在翠柳上鸣叫", "两个黄鹂鸣翠柳"),
            ("一行白鹭上青天", "一行白鹭飞上蓝天", "一行白鹭上青天"),
            ("窗含西岭千秋雪", "窗外是西岭的千年积雪", "窗含西岭千秋雪"),
            ("门泊东吴万里船", "门前停着远来的船只", "门泊东吴万里船"),
        ]
    },
    "第20课-短句阅读": {
        "title": "寻隐者不遇", "dynasty": "唐", "author": "贾岛",
        "intro": "诗人去山中拜访隐居的人，没有遇到，但在松树下和童子有一段对话。",
        "lines": [
            ("松下问童子", "在松树下问童子", "松下问童子"),
            ("言师采药去", "说师父采药去了", "言师采药去"),
            ("只在此山中", "就在这座山里", "只在此山中"),
            ("云深不知处", "云雾深深不知在何处", "云深不知处"),
        ]
    },
    "第21课-反义词": {
        "title": "敕勒歌", "dynasty": "北朝", "author": "北朝民歌",
        "intro": "大草原上天空像帐篷，天苍苍野茫茫，风吹草低见牛羊——远和近、高和低、大和小都在画面里。",
        "lines": [
            ("敕勒川阴山下", "敕勒川在阴山脚下", "敕勒川阴山下"),
            ("天似穹庐笼盖四野", "天空像帐篷盖着大地", "天似穹庐笼盖四野"),
            ("天苍苍野茫茫", "天空苍苍草原茫茫", "天苍苍野茫茫"),
            ("风吹草低见牛羊", "风吹弯草露出牛羊", "风吹草低见牛羊"),
        ]
    },
    "第22课-我会问答": {
        "title": "所见", "dynasty": "清", "author": "袁枚",
        "intro": "一个牧童骑在牛背上唱歌，忽然闭口不唱了——因为他想捉那只鸣叫的蝉。",
        "lines": [
            ("牧童骑黄牛", "牧童骑在黄牛背上", "牧童骑黄牛"),
            ("歌声振林樾", "歌声在树林里回荡", "歌声振林樾"),
            ("意欲捕鸣蝉", "想要捕捉鸣叫的蝉", "意欲捕鸣蝉"),
            ("忽然闭口立", "忽然闭上嘴站住", "忽然闭口立"),
        ]
    },
    # L23 skip (already has 3 poems)
    "第24课-大冒险": {
        "title": "长歌行（节选）", "dynasty": "汉", "author": "汉乐府",
        "intro": "时间像流水一样一去不回——要珍惜青春时光。最适合做毕业寄语。",
        "lines": [
            ("青青园中葵", "园中的向日葵青青的", "青青园中葵"),
            ("朝露待日晞", "早晨的露水等着太阳晒干", "朝露待日晞"),
            ("少壮不努力", "年少时不努力", "少壮不努力"),
            ("老大徒伤悲", "老了只能白悲伤", "老大徒伤悲"),
        ]
    },
}

def make_poem_section(poem):
    """Generate the 古诗角 markdown for a poem with per-line illustrations."""
    ch_name = None
    for k, v in POEMS.items():
        if v["title"] == poem["title"] and v["author"] == poem["author"]:
            ch_name = k
            break
    
    # Extract chapter number for img path
    m = re.search(r'第(\d+)课', ch_name)
    ch_num = int(m.group(1)) if m else 0
    
    lines_md = []
    for i, (line_text, brief, desc) in enumerate(poem["lines"]):
        img_path = f"./img/chapter-{ch_num:02d}/poem-line-{i+1}.png"
        alt = f"Minecraft {poem['title']}·{line_text}——{brief}"
        lines_md.append(f"{line_text} — {desc}")
        lines_md.append("")
        lines_md.append(f'<img src="{img_path}" width="480" alt="{alt}"/>')
        lines_md.append("")
    
    full_text = "\n".join(l.strip() for l, _, _ in poem["lines"])
    
    section = f"""
---

## 📜 古诗角 — 《{poem["title"]}》

> **{poem["dynasty"]}·{poem["author"]}** · {poem["intro"]}

```
{full_text}
```

逐句赏诗：
{chr(10).join(lines_md).strip()}
"""
    return section

def inject_into_chapter(chapter_path, poem_data):
    """Insert 古诗角 into chapter, right before the --- footer separator."""
    content = chapter_path.read_text()
    section = make_poem_section(poem_data)
    
    # Check if already has a 古诗角
    if "古诗角" in content:
        print(f"  ⏭ Already has 古诗角: {chapter_path.name}")
        return False
    
    # Find insertion point: before the last "---" that precedes footer section
    # Strategy: insert before the `> 【标A:` or before the `---` right before the challenge section
    lines = content.split("\n")
    
    # Better approach: find "本课小结" or the last image reference, insert after
    # Look for the last image in the base lesson (before footer things)
    last_img_idx = -1
    for i, line in enumerate(lines):
        if '<img src="./img/chapter' in line and 'poem' not in line:
            last_img_idx = i
    
    if last_img_idx >= 0:
        # Insert after the last base lesson image
        insert_at = last_img_idx + 1
        # But skip any empty lines after the img
        while insert_at < len(lines) and lines[insert_at].strip() == "":
            insert_at += 1
        lines = lines[:insert_at] + [section] + lines[insert_at:]
    else:
        # Fallback: insert before footer
        for i, line in enumerate(lines):
            if '【标A:' in line:
                lines = lines[:i] + [section] + lines[i:]
                break
        else:
            lines.append(section)
    
    chapter_path.write_text("\n".join(lines))
    print(f"  ✅ Injected: {chapter_path.name}")
    return True

def main():
    count = 0
    for ch_filename, poem_data in POEMS.items():
        ch_path = CHAPTERS / f"{ch_filename}.md"
        if not ch_path.exists():
            print(f"  ❌ Not found: {ch_filename}")
            continue
        if inject_into_chapter(ch_path, poem_data):
            count += 1
    print(f"\nTotal: {count} chapters updated with 古诗角")

if __name__ == "__main__":
    main()
