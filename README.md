# 📚 双语绘本 Bilingual Picture Books

> 儿童双语绘本阅读与学习应用 — 包含经典绘本、Story Fun 数字化教材

🌐 **Live Demo**: https://nonomil.github.io/bilingual-picturebooks/

---

## 📂 项目结构

本项目包含**三种页面类型**：

### 1. 📖 经典绘本（Reader）
经典双语绘本故事，每个故事独立 HTML 页面。

| 路径 | 说明 |
|------|------|
| `index.html` | 首页，展示所有故事列表 |
| `reader/{story_id}.html` | 绘本朗读版 |

**功能**：逐词高亮朗读、点击查词、词汇卡片、自动翻页

### 2. 📚 Story Fun 数字化绘本
基于 Story Fun Starters 教材的数字化双语绘本，**每个单元生成两个版本**：

| 版本 | 路径 | 功能 |
|------|------|------|
| 📖 朗读版 | `reader/{story_id}.html` | 逐词高亮朗读、点击查词、词汇卡片 |
| 🎮 游戏版 | `game/{story_id}.html` | 听音选图、拖拽配对、看图造句 |

### 3. 📄 MD 文档归档
每本书的原始文本内容存档。

| 路径 | 说明 |
|------|------|
| `stories/{story_id}.md` | 故事原文（英文+中文） |

---

## 🚀 已发布内容

### Story Fun 单元

| Unit | Title | 朗读版 | 游戏版 |
|------|-------|--------|--------|
| 1 | Pip's Adventures (皮普的冒险) | [🔗](reader/storyfun-1-adventures.html) | [🔗](game/storyfun-1-adventures.html) |

### 经典绘本

| # | Title | Pages |
|---|-------|-------|
| 1 | 好饿的小蛇 The Very Hungry Little Snake | 10 |
| 2 | 勇敢的豌豆射手 The Brave Pea Shooter | 19 |
| 3 | 史蒂夫大战凋零 Steve vs The Wither | 20 |
| 4 | 方块大战 Block Battle | 52 |
| 5 | 星球大战 Star Wars | 21 |
| 6 | 豆豆和豆包的家务机器人大战 | 20 |
| 7 | 勇敢的小坦克 The Brave Little Tank | 19 |
| 8 | 坦克大战·第一册 Tank Battles Book 1 | 11 |
| 9 | 坦克大战·第二册 Tank Battles Book 2 | 13 |
| 10 | 坦克大战·第三册 Tank Battles Book 3 | 13 |
| 11 | 甘蔗坦克大作战 Sugarcane Tank Battle | 21 |
| 12 | 隐身战车奇袭 Invisible Tank Mission | 21 |

---

## 🛠 技术架构

```
bilingual-picturebooks/
├── data/
│   └── stories.js              ← 唯一数据源（所有绘本内容）
├── images/
│   ├── pips-toybox/           ← StoryFun Unit 1 图片
│   ├── snake/                 ← 好饿的小蛇 图片
│   └── ...
├── reader/
│   └── {story_id}.html        ← 朗读版页面
├── game/
│   └── {story_id}.html        ← 游戏版页面
├── stories/
│   └── *.md                   ← 故事原文归档
└── scripts/
    ├── build_web.py           ← 网页生成脚本
    └── templates/
        ├── reader.html        ← 朗读版模板
        └── game.html          ← 游戏版模板
```

### 数据源格式 (stories.js)

```javascript
{
  id: "storyfun-1-adventures",
  title: "Pip's Adventures",
  titleZh: "皮普的冒险",
  category: "storyfun",        // 或 "classic"
  series: "Story Fun Starters",
  unit: 1,
  cover: "images/pips-toybox/page-1.jpg",
  unitVocab: [                 // StoryFun 专用：单元词汇
    { w: "car", p: "/kɑː/", zh: "汽车", color: "red", num: 1 },
    ...
  ],
  pages: [
    {
      img: "images/pips-toybox/page-1.jpg",
      en: "Hello! I am Pip.",
      zh: "你好！我是皮普。",
      keys: [{ w: "hello", p: "/həˈloʊ/", zh: "你好" }]
    },
    ...
  ]
}
```

---

## ⚡ 快速开始

### 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/nonomil/bilingual-picturebooks.git
cd bilingual-picturebooks

# 2. 启动本地服务器（端口 8080）
python3 -m http.server 8080

# 3. 访问 http://localhost:8080
```

### 生成新故事网页

```bash
# 编辑 data/stories.js 添加新故事
# 运行生成脚本
python3 scripts/build_web.py [story_id]

# 推送到 GitHub
gh auth login
git add -A
git commit -m "feat: add new story"
git push
```

---

## 📱 访问方式

| 环境 | URL |
|------|-----|
| GitHub Pages | https://nonomil.github.io/bilingual-picturebooks/ |
| 本地 VPS | http://45.134.26.56:8080/ |

---

## 📄 License

MIT