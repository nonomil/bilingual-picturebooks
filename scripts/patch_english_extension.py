#!/usr/bin/env python3
"""Rewrite Common Mistakes + Cross-Curricular Links for EN extension files (L03-L24).
   Fixes 22 files where these sections were base-copied.
   v1.0 — 2026-05-16 — based on QA_FRAMEWORK.md ESL error grading + cross-curricular matrix."""

import re
from pathlib import Path

CH = Path("/home/deploy/bilingual-picturebooks/english/chapters")

# ────────────────────────────────────────────────────────────
#  Data: unique Common Mistakes + Cross-Curricular per lesson
# ────────────────────────────────────────────────────────────

DATA = {
    # ═══ L3-L6: Pre-A1 (plural -s, be verb, articles, question order) ═══

    "lesson-03-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I have a apple" | **"I have an apple"** — use "an" before a/e/i/o/u sounds |
| "This is N. It say /n/" | **"This is N. It says /n/"** — letter name ≠ letter sound |
| "I have two apple" | **"I have two apples"** — add -s for more than one |
| "Z is /zee/" (UK) or "Z is /zed/" (US confused) | **"Z is /zee/" (US) or /zed/ (UK)** — both are correct! |
""",
        "cc": """## 🔗 Cross-Curricular Links
语文第1课教象形字：英语字母 A 来自牛头𓃾（aleph），B 来自房子（beth）→ 一起画字母演变图
数学第1-2课数字 1-10：用英文数字标签给 Minecraft 方块编号，中英双语数方块
Sound Block: N-Z 字母发音与拼音声母对比（n/n/, l/l/, s/s/ — 中英同音！）"""
    },

    "lesson-04-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "The car red" | **"The red car"** — color comes BEFORE the thing in English |
| "a orange" | **"an orange"** — vowel sound = "an" |
| "I like the blue" (when talking about the color) | **"I like blue"** — no "the" for general color names |
| "The sky is blew" | **"The sky is blue"** — blue (color) ≠ blew (past of blow) |
""",
        "cc": """## 🔗 Cross-Curricular Links
美术：用红黄蓝三原色调出橙绿紫（red + yellow = orange），英文标注每种颜色
数学第3课比大小：用彩色方块比较多少（"More red blocks!" / "Fewer blue blocks!"）
语文第2课基本笔画：汉字"红黄蓝绿"的笔画与英文 color words 对照书写"""    },

    "lesson-05-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I have 3 banana" | **"I have 3 bananas"** — numbers >1 need plural -s |
| "How much apples do you have?" | **"How many apples?"** — many for countable things |
| "Give me a water" | **"Give me some water"** — uncountable things use "some", not "a" |
| "I have six apple and two orange" | **"I have six apples and two oranges"** — every noun needs plural |
""",
        "cc": """## 🔗 Cross-Curricular Links
数学第1-5课认识数字 1-10 + 5 以内加法：用英文数水果做加法（"Three apples + two apples = five apples!"）
语文第3课数字汉字："一二三四五六七" vs "one two three..." 双语数字配对游戏
生活技能：去商店用英文数零钱（"I have six coins!"），中英双语购物清单"""    },

    "lesson-06-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "Him is my dad" | **"He is my dad"** — "he" is the subject, "him" is the object |
| "I love she" | **"I love her"** — after the verb, use object form |
| "She my mom" | **"She is my mom"** — never skip the be verb (am/is/are) |
| "This is my family. They is nice." | **"They are nice"** — they/we/you → are; he/she/it → is |
""",
        "cc": """## 🔗 Cross-Curricular Links
社会：画一张 family tree，用英文标注每个家人（"This is my grandma."），中文标注对应称呼
数学第3课分类：把家人按年龄、性别分类（big/small, old/young），用英文描述
语文第6课家庭汉字："爸爸、妈妈、哥哥、姐姐" vs "dad, mom, brother, sister" 双语配对"""    },

    # ═══ L7-L12: Pre-A1→A1 (3rd person -s, irregular plurals, prepositions) ═══

    "lesson-07-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I see 3 pig" | **"I see 3 pigs"** — add -s for plurals |
| "The cow say moo" | **"The cow says moo"** — he/she/it needs verb + s |
| "I have two foots" | **"I have two feet"** — foot → feet (irregular!) |
| "It's sound like baa" | **"It sounds like baa"** — no 's after it in present tense: "It sounds" not "It's sounds" |
""",
        "cc": """## 🔗 Cross-Curricular Links
科学：农场动物吃什么？（Cows eat grass → 草食动物，pigs eat everything → 杂食动物）英文讨论 + 中文认知
数学第3课分类：数每种动物有几只，画柱状图（3 cows, 5 hens → 哪种最多？）
语文第7课动物汉字：牛、羊、马、鸡、猪 vs cow, sheep, horse, hen, pig 双语动物卡片"""    },

    "lesson-08-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "Touch you nose" | **"Touch your nose"** — your = 你的，you = 你 |
| "I can run with my foots" | **"I can run with my feet"** — foot → feet (irregular!) |
| "I have tow eye" | **"I have two eyes"** — two (2) ≠ to ≠ too! |
| "I touch my heads" | **"I touch my head"** — you have ONE head, no -s |
""",
        "cc": """## 🔗 Cross-Curricular Links
体育：Simon Says 英文版 — "Touch your nose! Clap your hands!" 身体部位动作反应游戏
科学：五感探索（eyes see, ears hear, nose smells, hands touch）— 英文标注感官动词
语文第8课身体汉字："头、眼、耳、鼻、手、脚" vs "head, eyes, ears, nose, hands, feet" 双语对照"""    },

    "lesson-09-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I want some breads" | **"I want some bread"** — bread 不可数，永远不加 -s |
| "Give me a milk" | **"Give me some milk"** — milk 不可数，用 "some" |
| "I like eat apple" | **"I like to eat apples"** — like + to + verb, 且吃苹果泛指吃这一类 |
| "Let's make a sandwich" vs "Let's make soup" | **"Let's make a sandwich" / "Let's make some soup"** — 可数用 a/an，不可数用 some |
""",
        "cc": """## 🔗 Cross-Curricular Links
健康：MyPlate 食物分类（fruits, vegetables, grains, protein, dairy）— 英文分类 + 中文讨论
数学第4课 5 以内加法：用食物做加法（"3 cookies + 2 cookies = 5 cookies!"）双语计算
语文第15课食物汉字："苹果、香蕉、牛奶、面包" vs "apple, banana, milk, bread" 去超市双语认字"""    },

    "lesson-10-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I can to make a kite" | **"I can make a kite"** — can 后面直接跟动词，不加 to |
| "Me can build it" | **"I can build it"** — "I" 当主语，"me" 当宾语 |
| "Let's building a puzzle" | **"Let's build a puzzle"** — Let's + 动词原形 |
| "This is a toy. I like it. It fun." | **"It is fun"** — 别忘 be 动词！ |
""",
        "cc": """## 🔗 Cross-Curricular Links
手工：用回收材料做一个玩具，英文写制作步骤（"Step 1: Cut the paper."），中文描述创意
数学第17课图形拼搭：用正方形、三角形拼玩具（"Let's build with squares!"）英文形状词汇
语文第9课："玩具、书、笔" vs "toy, book, pencil" 整理书包双语物品卡"""    },

    "lesson-11-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "In winter, it snow" | **"In winter, it snows"** — it = 第三人称单数，动词加 -s |
| "I like summer. In summer hot." | **"In summer, it is hot"** — 必须有 be 动词 |
| "The snow it is cold" | **"The snow is cold"** — 一个主语就够了 |
| "In the spring, flowers bloom" vs "In spring..." | **Both OK!** — "in spring" 更常用，"in the spring" 也对 |
""",
        "cc": """## 🔗 Cross-Curricular Links
科学：四季为什么变化？（地球绕太阳转 → tilt → seasons）英文简单解释 + 中文深入讨论
数学第18课比较：比较四季温度（"Summer is hotter than winter"）英文比较句
语文第11课天气汉字："春夏秋冬" vs "spring, summer, fall, winter" 四季双语诗"""    },

    "lesson-12-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I put on my shoes" (already wearing them) | **"I wear my shoes"** — put on = 穿上的动作，wear = 穿着的状态 |
| "I need a socks" | **"I need socks"** — socks 是复数（一双袜子 = a pair of socks） |
| "This is me coat" | **"This is my coat"** — my = 我的，me = 我（宾语） |
| "I put on a scarf" (发音 /skɑːrf/ 读成 /skɑːf/) | **scarf /skɑːrf/** — 注意结尾的 /f/ 音，不是 /rf/ |
""",
        "cc": """## 🔗 Cross-Curricular Links
生活技能：根据天气选衣服（"It's cold. I need a coat and scarf."）英文衣物搭配 + 中文讨论
美术：设计一套四季服装，英文标注每一件（spring outfit, winter outfit）
数学第16课：认钟表 + 穿衣时间（"I put on my coat at 8 o'clock"）中英双语时间表达"""    },

    # ═══ L13-L18: A1 (past tense, can/can't, possessive, comparatives) ═══

    "lesson-13-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I runned very fast" | **"I ran very fast"** — run → ran (不规则过去式) |
| "He run faster than me" | **"He runs faster than me"** — he/she/it 现在时 + s |
| "I can to win!" | **"I can win!"** — 情态动词后不加 to |
| "I am more fast than you" | **"I am faster than you"** — 短形容词直接加 -er，不用 more |
""",
        "cc": """## 🔗 Cross-Curricular Links
体育：学校运动会英文播报（"On your marks... Get set... GO!"）练习动作动词
数学第18课比较：fast/faster/fastest, big/bigger/biggest 用数字排名（"Alex ran 5 seconds faster!"）
语文第13课动作汉字："跑、跳、游、走、坐" vs "run, jump, swim, walk, sit" 动作卡片猜词游戏"""    },

    "lesson-14-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I go to the school every day" | **"I go to school every day"** — go to school/hospital/church（无 the）是"去上学/看病/做礼拜" |
| "There is many shops in my town" | **"There are many shops"** — many + 复数 = are |
| "I live in the China" | **"I live in China"** — 国家名前一般不加 the |
| "The shop is in the street" (UK) vs "on the street" (US) | **Both OK!** — UK 用 in the street，US 用 on the street |
""",
        "cc": """## 🔗 Cross-Curricular Links
社会：画一张社区地图，英文标注所有地点（library, hospital, park, shop, school）
数学第20课位置与方向：用英文方位词描述路径（"Go straight, turn left at the park"）
语文第14课地点汉字："学校、公园、商店、家" vs "school, park, shop, home" 双语社区探索"""    },

    "lesson-15-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I feeled happy" | **"I felt happy"** — feel → felt (不规则过去式) |
| "I am feel sad" | **"I feel sad"** — feel 本身就是动词，不需要 am |
| "She angry" | **"She is angry"** — 形容词前面必须有 be 动词 |
| "I am boring" (when you feel bored) | **"I am bored"** — boring = 令人无聊的，bored = 感到无聊的 |
""",
        "cc": """## 🔗 Cross-Curricular Links
社会情感学习(SEL)：情绪颜色轮盘（red=angry, blue=sad, yellow=happy）英文标注 + 中文讨论"你什么时候感到brave？"
美术：画"Feelings Rainbow"——每种颜色代表一种情绪，英文写下"I feel [brave] when I [try new things]"
语文第15课情感汉字：喜怒哀乐 vs happy, angry, sad, joyful 中英情绪日记"""    },

    "lesson-16-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I go to school on Monday" | **正确！** "on Monday" 用 on，但很多小朋友写成 "in Monday" |
| "Today is monday" | **"Today is Monday"** — 星期几的首字母永远大写 |
| "Yesterday I go to the park" | **"Yesterday I went to the park"** — go → went (过去式) |
| "I will go tomorrow" vs "I am going tomorrow" | **Both OK!** — 近期的计划可以用现在进行时表将来 |
""",
        "cc": """## 🔗 Cross-Curricular Links
数学：日历 + 月份（"How many Mondays in May?"）用英文做一周计划表
生活技能：做一张英文 weekly schedule（"Monday: swimming, Wednesday: art class"）
语文第16课时间汉字："今天、明天、昨天、星期" vs "today, tomorrow, yesterday, week" 双语日历"""    },

    "lesson-17-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I go to school by the bus" | **"I go to school by bus"** — by + 交通工具（无 the/a） |
| "I am in the bus" | **"I am on the bus"** — 在交通工具上用 on（on the bus/train/plane） |
| "The car go on the road" | **"The car goes on the road"** — 第三人称单数 + s |
| "He fly the plane" | **"He flies the plane"** — 辅音 + y 结尾 → 变 i + es: fly → flies |
""",
        "cc": """## 🔗 Cross-Curricular Links
地理：世界各大洲 + 你坐什么交通工具去？（"I take a plane to America"）英文讨论 + 中文认知
科学：为什么船浮在水上？飞机为什么能飞？英文关键词（float, fly, wing）+ 中文深入
数学第19课简单统计：统计全班同学怎么来上学（walk/bus/car/bike），画英文柱状图"""    },

    "lesson-18-extension.md": {
        "cm": """### ⚠️ Common Mistakes — Top 5 Carnival Review

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I have 3 book" | **"I have 3 books"** — 复数加 -s（L3-L6 最高频错误） |
| "He go to the park" | **"He goes to the park"** — 第三人称单数 + s（L7-L12 最高频错误） |
| "I goed to school yesterday" | **"I went to school yesterday"** — go → went 不规则（L13-L17 新学） |
| "There is many animals" | **"There are many animals"** — many = 复数 = are |
| "I can to swim" | **"I can swim"** — 情态动词后不加 to |
""",
        "cc": """## 🔗 Cross-Curricular Links
全科项目：设计一个"英文单词嘉年华"——每个游戏站代表一科（数单词站=Math，动物站=Science，颜色站=Art）
数学：统计你学会了多少个英文单词（160个！画成长条图）
语文：汉字量 vs 英文词量对比（你学了几个汉字？几个英文词？）双语学习成果展"""    },

    # ═══ L19-L24: A1 (WH questions, do/does, past irregular, story comprehension) ═══

    "lesson-19-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "Where you live?" | **"Where do you live?"** — WH 问句需要助动词 do/does |
| "What you doing?" | **"What are you doing?"** — 现在进行时 = am/is/are + -ing |
| "Who is she? She is my friend." vs "Who is he?" | **不要混淆 he/she！** 中文"他/她"同音，英语不一样 |
| "How many years do you have?" | **"How old are you?"** — 年龄用 How old，不是 How many years |
""",
        "cc": """## 🔗 Cross-Curricular Links
科学探究：用 WH 问题做科学观察（"What do you see? Why did it change? How can we test it?"）
语文第20课短句阅读：中英双语读故事 + WH 问题阅读理解（"Who is the main character? Where does the story happen?"）
批判性思维：学会问好问题是学习的第一步——中英文提问练习"""    },

    "lesson-20-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "The storm is come!" | **"The storm is coming!"** — 正在发生 = am/is/are + -ing |
| "We must to go home" | **"We must go home"** — must 后不加 to |
| "I was scared. The storm was scared." (about the storm) | **"The storm was scary"** — scared = 感到害怕的，scary = 令人害怕的 |
| "It rained yesterday" (correct!) vs "It rained strong" | **"It rained hard"** — 形容雨大用 hard/heavily，不用 strong |
""",
        "cc": """## 🔗 Cross-Curricular Links
科学：雷雨是怎么形成的？闪电和打雷（lightning and thunder）英文名词 + 中文原理讲解
安全教育：恶劣天气安全守则（"Stay inside! Stay away from windows!"）中英双语安全手册
语文第20课：描写天气的成语（倾盆大雨、电闪雷鸣）vs 英文 weather vocabulary 对比"""    },

    "lesson-21-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "I wish you happy birthday" | **"I wish you a happy birthday"** — wish someone a + 名词 |
| "Let's celebrate" vs "Let's to celebrate" | **"Let's celebrate"** — Let's + 动词原形 |
| "The balloon red" | **"The red balloon"** — 形容词在名词前面！ |
| "I give you a gift" vs "I gift you" | **"I give you a gift"** — gift 是名词，不是动词（give = 动词） |
""",
        "cc": """## 🔗 Cross-Curricular Links
数学：派对策划（"8 friends, 8 cupcakes = 1 each"）用英文做派对数学
美术：设计派对邀请卡，英文写时间、地点、活动（"Please come to my party! It's on Saturday at 3pm!"）
社会：不同国家的生日习俗（piñata, cake, long noodles）英文介绍 + 中文讨论"""    },

    "lesson-22-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "The cow give milk" | **"The cow gives milk"** — 第三人称单数 + s |
| "We get milk from cow" | **"We get milk from cows"** — 泛指时用复数 |
| "Sheep gives wool" (one sheep) vs "Sheep give wool" (many sheep) | **Sheep 单复数同形！** 一只羊=one sheep，很多羊=many sheep |
| "The hen lay eggs everyday" | **"The hen lays eggs every day"** — he/she/it + s, everyday(adj)≠every day(adv) |
""",
        "cc": """## 🔗 Cross-Curricular Links
科学：从农场到餐桌（Farm to Table）——牛奶怎么来的？鸡蛋怎么来的？英文流程图 + 中文讨论
数学第15课认识钱币：卖农产品算账（"One egg costs 2 yuan. How much for 5 eggs?"）英文应用题
语文第22课："农场、牛奶、鸡蛋、羊毛" vs "farm, milk, egg, wool" 农场主题双语词卡"""    },

    "lesson-23-extension.md": {
        "cm": """### ⚠️ Common Mistakes

| ❌ Wrong | ✅ Right |
|----------|---------|
| "Once upon a time, there is a brave knight" | **"Once upon a time, there was a brave knight"** — 故事开头用过去式 |
| "He go into the dark cave" | **"He went into the dark cave"** — go → went (故事里一直在过去) |
| "In the end, they find the treasure" | **"In the end, they found the treasure"** — find → found |
| "The story has 3 part: beginning, middle, end" | **"The story has 3 parts"** — 复数加 -s |
""",
        "cc": """## 🔗 Cross-Curricular Links
语文写作：用中文讲一个故事，再用英文改写——对比两种语言讲故事的方式有何不同
美术：给自己的故事画封面（book cover），英文写标题和作者名
戏剧：把故事演出来！英文剧本改编（"Narrator: Once upon a time..."）角色扮演"""    },

    "lesson-24-extension.md": {
        "cm": """### ⚠️ Common Mistakes — Final Top 5 Check

| ❌ Wrong | ✅ Right |
|----------|---------|
| 复数 -s 遗忘 | **Every time you say "two ___" or "three ___" → add -s!** |
| 第三人称 -s 遗忘 | **He/She/It → verb + s! Always!** |
| be 动词缺失 | **"I happy" → "I am happy" / "It big" → "It is big"** |
| WH 问句缺助动词 | **"Where you go?" → "Where do you go?" / "What you doing?" → "What are you doing?"** |
| 不规则过去式乱造 | **go→went, see→saw, run→ran, feel→felt, say→said** — 这些要背！ |
""",
        "cc": """## 🔗 Cross-Curricular Links
全科项目：创作一本自己的双语绘本——英文写故事 + 中文翻译 + 自己画插图
数学：统计你在 24 课中学了多少个英文单词、多少个句型——做成"学习成长图"
语文：中英双语阅读能力对比——你现在能读多长的英文故事？多长的中文故事？
庆祝：举办"Minecraft English Festival"——展示自己的绘本，用英文介绍故事！"""    },
}


def apply_patch(filepath: Path, cm_text: str, cc_text: str):
    """Replace Common Mistakes and Cross-Curricular sections in a file."""
    content = filepath.read_text()

    # Replace Common Mistakes section: from "### ⚠️ Common Mistakes" to next "## " or "---"
    # Match the section including the header
    pattern_cm = r'### ⚠️ Common Mistakes.*?(?=\n## [^#]|\n---|\n### 🧠|\Z)'
    content = re.sub(pattern_cm, cm_text.strip(), content, count=1, flags=re.DOTALL)

    # Replace Cross-Curricular Links section
    pattern_cc = r'## 🔗 Cross-Curricular Links.*?(?=\n## [^🔗]|\n---|\Z)'
    content = re.sub(pattern_cc, cc_text.strip(), content, count=1, flags=re.DOTALL)

    filepath.write_text(content)
    print(f"  ✅ {filepath.name}")


def main():
    print("Patching EN extension Common Mistakes + Cross-Curricular Links...\n")
    for fname, data in sorted(DATA.items()):
        fpath = CH / fname
        if not fpath.exists():
            print(f"  ⚠️  {fname} not found, skipping")
            continue
        apply_patch(fpath, data["cm"], data["cc"])
    print(f"\n✅ Done! Patched {len(DATA)} files.\n")


if __name__ == "__main__":
    main()
