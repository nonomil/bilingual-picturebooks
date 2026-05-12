# 语文 & 英语 绘本设计（Kindergarten 系列）

> 沿袭数学绘本风格：Steve & Alex 在方块世界冒险，故事化教学，12课基础篇 + 12课拓展篇
> 2026-05-13

---

## 一、整体设计规范

### 基础风格（沿袭数学绘本）

| 维度 | 规格 |
|------|------|
| 叙事线 | Steve & Alex 在方块世界冒险，解决一个个问题 |
| 每课结构 | 学习目标 → 故事展开 → 教学核心 → 练习 → 挑战 → 小结 |
| 拓展篇 | 每课后跟拓展篇，巩固练习 + 深入内容 |
| 图片风格 | Minecraft pixel art / 方块风格（数学绘本风格复制） |
| 图片路径 | `./img/chapter-N/page-NN.png` |
| 每课图数 | 基础篇 8-12 张，拓展篇 6-10 张 |
| 读者年龄 | 语文：5-7 岁（幼小衔接），英语：4-6 岁（零基础） |
| 交互元素 | emoji 表情、对话气泡、游戏化挑战环节 |

### 角色延续

- **Steve** — 主角，从零开始学习
- **Alex** — 引导者，负责解释概念
- 新增：**村民（Villager）** / **NPC** 辅助角色，出现在特定场景

---

## 二、语文绘本 — 课程体系

### 总览：12 课基础篇 + 12 课拓展篇

```
第1课  神奇汉字 → 从图画到文字（象形字入门）
第2课  基本笔画 → 横竖撇捺点提折
第3课  笔画组合 → 由笔画变汉字（人大小上下）
第4课  象形乐园 → 日月山水火木花鸟
第5课  拼音入门Ⅰ → 单韵母 + 声调
第6课  拼音入门Ⅱ → 声母 bpmf dtnl
第7课  汉字乐园Ⅰ → 方向/位置词（上中下左中右）
第8课  汉字乐园Ⅱ → 颜色 + 自然（红黄蓝绿 天地风云雨）
第9课  词语对对碰 → 双字词（太阳月亮星星 吃饭喝水）
第10课 我要造句 → 简单句子（我看见… 妈妈在…）
第11课 古诗启蒙 → 静夜思 / 咏鹅 / 春晓
第12课 总复习   → 回顾冒险旅程，获得"中文小能手"徽章
```

### 第1课 详细设计

```
## 第1课 神奇汉字

📋 学习目标
- 了解汉字是从图画变来的
- 认识 5 个象形字：日 ☀️、月 🌙、山 🏔️、水 💧、火 🔥
- 能用手指跟着描画字形

🎬 第一页：方块世界的符文
Steve 在山洞里发现了一面古老的墙壁，上面画着奇怪的符号。
"Alex，这些是什么？是画还是字？"
"都是！"Alex 笑着说，"很久以前的人把看到的东西画下来，慢慢地就变成了汉字。"

🤔 第二页：日 — 太阳公公
墙上的第一个符号：
☀️ 画一个大大的圆 → 太阳
"圆圆天上挂，发出光和热。这就是 '日'。"
展示：象形演变图（圆太阳 → 甲骨文 → 现代字 日）
🖼 ./img/chapter-01/page-02.png

🤔 第三页：月 — 月亮婆婆
第二个符号：
🌙 画一弯月亮 → 月
"弯弯像小船，挂在夜空中。这就是 '月'。"
🖼 ./img/chapter-01/page-03.png

...（山/水/火，每个字一张图）

✏️ 练习页：连连看
把图画和汉字连起来：☀️→日 🌙→月 🏔️→山 💧→水 🔥→火
🖼 ./img/chapter-01/page-07.png

🎯 挑战页：符文密室
Steve 被困在符文室，需要按顺序点击正确的象形字才能开门。
"先点'日'，再点'山'，最后点'水'……"
🖼 ./img/chapter-01/page-09.png

🎉 庆祝：获得"探险者徽章" + 小结
```

### 各课教学重点

| 课 | 核心内容 | 新学汉字 | 配图数 |
|----|---------|---------|--------|
| 1 | 象形字概念 | 日月山水火 | 10-12 |
| 2 | 基本笔画（横竖撇捺点提折） | 一十人八大 | 10-12 |
| 3 | 笔画组合 | 大小上下左右中 | 10-12 |
| 4 | 进阶象形字 | 木林田石花鸟鱼虫 | 10-12 |
| 5 | 单韵母 a o e i u ü + 四声 | 无（拼音入门） | 8-10 |
| 6 | 声母 bpmfdtnlgkhjqx | 无（拼音练习） | 8-10 |
| 7 | 方向位置 | 前后来去出入 | 10-12 |
| 8 | 颜色+自然 | 红黄蓝绿白天黑地风云雨 | 12-14 |
| 9 | 双字词 | 太阳月亮星星吃饭喝水看书 | 10-12 |
| 10 | 造句 | 我你他是的在有 | 10-12 |
| 11 | 古诗 | 诵读 + 关键词解释 | 10-12 |
| 12 | 总复习 | 全部汉字回顾 | 12-14 |

### 拓展篇设计原则

每课对应一篇拓展，功能：
- 复习基础篇刚学的汉字
- 换场景再用（比如基础篇在洞穴学象形字，拓展篇在村庄看到更多）
- 增加小测试/迷宫/找不同
- 第12课拓展 = 全册总挑战

---

## 三、英语绘本 — 课程体系

### 总览：12 课基础篇 + 12 课拓展篇

```
Lesson 1   Hello!           → Greetings &自我介绍
Lesson 2   ABC Adventure     → Alphabet A-M
Lesson 3   ABC Adventure II  → Alphabet N-Z
Lesson 4   Colorful World    → Colors（red blue yellow green）
Lesson 5   Number Fun        → Numbers 1-10
Lesson 6   Animal Friends    → Animals（cat dog bird fish rabbit）
Lesson 7   My Body           → Body parts
Lesson 8   My Family         → Family members
Lesson 9   Yummy Food        → Food & drinks
Lesson 10  My Toys           → Toys & school items
Lesson 11  Weather & Nature  → Weather + nature
Lesson 12  Party Time!       → Review + grand party
```

### Lesson 1 详细设计

```
## Lesson 1 Hello!

📋 Learning Goals
- Say "Hello" and "Goodbye"
- Ask and answer "What's your name?"
- Learn 4 new words: hello, goodbye, name, friend

🎬 Page 1: A New World
Steve wakes up in a new land — a green village with colorful houses.
"Where am I?" he says.
A friendly Villager walks up: "Hello! Welcome to our village!"
"Hello!" Steve waves back.
🖼 ./img/chapter-01/page-01.png

🤔 Page 2: What's Your Name?
The Villager smiles: "My name is Bob. What's your name?"
Steve thinks for a moment... "My name is Steve."
"Nice to meet you, Steve!"
"Nice to meet you, too!"
🖼 ./img/chapter-01/page-02.png

🤔 Page 3: Hello and Goodbye
Bob shows Steve a sign:
📝 Hello = 你好
📝 Goodbye = 再见

"Use 'Hello' when you meet someone.
Use 'Goodbye' when you leave."
🖼 ./img/chapter-01/page-03.png

...（继续问候练习、角色扮演）

✏️ Practice: Match the words
Hello → 你好  |  Goodbye → 再见  |  Friend → 朋友
🖼 ./img/chapter-01/page-06.png

🎯 Challenge: Village Greeting
Steve walks through the village. Each villager greets him — choose the right reply!
🖼 ./img/chapter-01/page-08.png

🎉 Celebration: "Hello Badge" + Review
```

### 各课教学重点

| Lesson | Core Content | New Words | Images |
|--------|-------------|-----------|--------|
| 1 | Hello/Goodbye, What's your name? | hello, goodbye, name, friend | 10-12 |
| 2 | Alphabet A-M + words | apple, ball, cat, dog, egg, fish, etc. | 10-12 |
| 3 | Alphabet N-Z + words | nest, orange, pig, queen, rabbit, sun, etc. | 10-12 |
| 4 | Colors | red, blue, yellow, green, black, white | 10-12 |
| 5 | Numbers 1-10 | one to ten, count | 10-12 |
| 6 | Animals | cat, dog, bird, fish, rabbit, cow, pig | 10-12 |
| 7 | Body parts | head, eyes, nose, mouth, ears, hands | 10-12 |
| 8 | Family | mom, dad, sister, brother, baby | 10-12 |
| 9 | Food | apple, banana, milk, bread, egg, cake | 10-12 |
| 10 | Toys & School | ball, doll, book, pencil, bag, crayon | 10-12 |
| 11 | Weather | sunny, rainy, cloudy, windy, snowy, hot, cold | 10-12 |
| 12 | Review | All words + story review | 12-14 |

---

## 四、图片 Prompt 设计

### 通用 Style Prompt（沿袭数学绘本风格）

```
Minecraft pixel art style, white background,
Steve (blue shirt, dark pants, brown hair) and Alex (orange shirt, jeans)
in a blocky world, children educational illustration,
clear simple shapes, bright colors, friendly expressions
[场景特有描述]
```

### 语文专用 Prompts

| 场景 | Prompt 补充 |
|------|------------|
| 象形字演变 | show ancient pictograph evolving into modern Chinese character, text labels in red |
| 笔画书写 | writing brush stroke animation style, stroke order arrows in red |
| 拼音 | letters with tone marks above, colorful example word illustration |
| 古诗 | poem scene visualization, Chinese ink painting style mixed with pixel art, gentle colors |

### 英语专用 Prompts

| 场景 | Prompt 补充 |
|------|------------|
| 字母学习 | big letter A with small apple beside, cute alphabet card style |
| 单词配图 | single object clear on white bg, word label in bold font underneath |
| 对话场景 | two characters talking, speech bubble with text, simple background |

### 图片命名规则

```
语文：chapters/img/chapter-{N}/page-{NN}.png    (N=01-12)
英语：chapters/img/chapter-{N}/page-{NN}.png    (N=01-12)
```

和数学绘本共用同一个 img 目录结构，但放不同文件夹下。

---

## 五、文件目录规划

```
bilingual-picturebooks/
├── README.md
├── math-kindergarten/              ← 已有
│   ├── chapters/
│   │   ├── 第1课-认识数字1-10.md
│   │   ├── 第1课-拓展.md
│   │   └── ...
│   └── img/
│       ├── chapter-01/
│       └── ...
│
├── chinese-language/               ← 新建：语文
│   ├── DESIGN.md                   ← 本文档（入口）
│   ├── chapters/
│   │   ├── 第1课-神奇汉字.md
│   │   ├── 第1课-拓展.md
│   │   ├── 第2课-基本笔画.md
│   │   ├── 第2课-拓展.md
│   │   └── ... (24 files total)
│   └── img/
│       ├── chapter-01/
│       ├── chapter-02/
│       └── ...
│
├── english/                        ← 新建：英语
│   ├── DESIGN.md
│   ├── chapters/
│   │   ├── lesson-01-hello.md
│   │   ├── lesson-01-extension.md
│   │   ├── lesson-02-abc.md
│   │   └── ... (24 files total)
│   └── img/
│       ├── chapter-01/
│       ├── chapter-02/
│       └── ...
│
├── img/ (public/reader images)
└── public/
```

---

## 六、实施步骤

### Phase 1：确定设计（当前）
- [x] 本设计文档
- [x] 课程体系规划
- [x] Prompt 设计
- [ ] 确认 Lesson 1 详细内容

### Phase 2：语文 第1-4课 （象形字/笔画阶段）
- [ ] 编写 第1课 文档 + 拓展篇文档
- [ ] 编写 第2课 文档 + 拓展篇文档
- [ ] 编写 第3课 文档 + 拓展篇文档
- [ ] 编写 第4课 文档 + 拓展篇文档
- [ ] 生成配图 + 压缩

### Phase 3：语文 第5-8课 （拼音/词汇阶段）
- [ ] ...

### Phase 4：语文 第9-12课 + 英语同步
- [ ] ...

### Phase 5：英语 全套
- [ ] ...

---

## 七、与数学绘本的差异点

| 维度 | 数学 | 语文 | 英语 |
|------|------|------|------|
| 概念 | 数字/计算/形状 | 汉字/拼音/笔画 | 字母/单词/句子 |
| 图片重点 | 数量/图形展示 | 字形演变/笔画顺序 | 字母/物品图示 |
| 教学法 | 故事情境→公式→练习 | 象形→识字→造句 | 情境对话→单词→句子 |
| 练习形式 | 数数/涂色/连线 | 描红/填字/配对 | 字母描红/单词配对 |
| 挑战题 | 数学运算题 | 识字解谜/组词 | 单词拼写/造句 |
| 拓展篇侧重 | 更多练习+相邻概念 | 更多汉字+短句阅读 | 更多词汇+简单阅读 |
