# 📚 双语绘本 Bilingual Picture Books

> 儿童双语绘本阅读与学习应用 — 包含经典绘本、Story Fun 数字化教材

🌐 **Live Demo**: https://nonomil.github.io/bilingual-picturebooks/

---

## 📂 项目结构

本项目包含**系列教材**（Markdown 源文件 + 配图）和**页面应用**（HTML 部署版）：

### 📚 系列教材（Markdown 源）

| 系列 | 路径 | 说明 | 状态 |
|------|------|------|------|
| 🧮 数学 | `math-kindergarten/chapters/` | 幼儿园数学（12课+12拓展） | ✅ 已完成 |
| 📝 语文 | `chinese-language/DESIGN.md` | 幼小衔接汉字/拼音/古诗 | 🆕 设计阶段 |
| 🔤 英语 | `english/DESIGN.md` | Kindergarten 英语启蒙 | 🆕 设计阶段 |

### 页面应用（HTML 部署）

本项目包含**三种页面类型**：

### 1. 📖 经典绘本（Reader）
经典双语绘本故事，每个故事独立 HTML 页面。

| 路径 | 说明 |
|------|------|
| `public/index.html` | 首页，展示所有故事列表 |
| `public/reader/classic/{story_id}.html` | 经典绘本朗读版 |
| `public/game/classic/{story_id}.html` | 经典绘本游戏版（可选）|

### 2. 📚 Story Fun 数字化绘本
基于 Story Fun Starters 教材的数字化双语绘本，**每个单元生成两个版本**：

| 版本 | 路径 | 功能 |
|------|------|------|
| 📖 朗读版 | `public/reader/storyfun/{story_id}.html` | 逐词高亮朗读、点击查词、词汇卡片 |
| 🎮 游戏版 | `public/game/storyfun/{story_id}.html` | 听音选图、拖拽配对、看图造句 |

### 3. 📄 MD 文档归档

| 系列 | 路径 | 说明 |
|------|------|------|
| 🧮 数学绘本 | `math-kindergarten/chapters/` | 12课+12拓展篇，Steve学数学 |
| 📝 语文绘本 | `chinese-language/`（即将） | 象形字→笔画→拼音→造句→古诗 |
| 🔤 英语绘本 | `english/`（即将） | 字母→颜色→动物→家庭→天气
每本书的原始文本内容存档。

| 路径 | 说明 |
|------|------|
| `stories/classic/` | 经典绘本原文 |
| `stories/storyfun/` | StoryFun 原文 |

---

## 🚀 目标文件夹结构（部署用）

```
/                              ← 综合首页 index.html
├── reader/
│   ├── classic/              ← 经典绘本朗读版
│   │   ├── the-hungry-snake.html
│   │   └── ...
│   └── storyfun/             ← StoryFun 朗读版
│       └── storyfun-1-adventures.html
├── game/
│   └── storyfun/              ← StoryFun 游戏版
│       └── storyfun-1-adventures.html
├── stories/
│   ├── classic/
│   └── storyfun/
└── images/
    ├── classic/
    │   ├── snake/
    │   ├── tank/
    │   └── ...
    └── storyfun/
        └── pips-toybox/
```

---

## 📱 访问方式

| 环境 | URL |
|------|-----|
| GitHub Pages | https://nonomil.github.io/bilingual-picturebooks/ |

---

## 🛠 开发指南

### 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/nonomil/bilingual-picturebooks.git
cd bilingual-picturebooks

# 2. 启动本地服务器
python3 -m http.server 8080

# 3. 访问 http://localhost:8080
```

### 生成网页

```bash
# 编辑 data/stories.js 添加新故事
# 运行生成脚本
python3 scripts/build_web.py [story_id]
```

脚本会：
1. 从 `data/stories.js` 读取数据
2. 根据 `category` 字段区分经典绘本和 StoryFun
3. 输出到对应文件夹：
   - 经典绘本 → `public/reader/classic/` 和 `public/game/classic/`
   - StoryFun → `public/reader/storyfun/` 和 `public/game/storyfun/`

---

## 📝 数据源格式

```javascript
{
  id: "storyfun-1-adventures",
  title: "Pip's Adventures",
  titleZh: "皮普的冒险",
  category: "storyfun",        // 或 "classic"
  series: "Story Fun Starters",
  unit: 1,
  cover: "images/storyfun/pips-toybox/page-1.jpg",
  unitVocab: [                 // StoryFun 专用：单元词汇
    { w: "car", p: "/kɑː/", zh: "汽车", color: "red", num: 1 },
    ...
  ],
  pages: [
    {
      img: "images/storyfun/pips-toybox/page-1.jpg",
      en: "Hello! I am Pip.",
      zh: "你好！我是皮普。",
      keys: [{ w: "hello", p: "/həˈloʊ/", zh: "你好" }]
    },
    ...
  ]
}
```

---

## 🚢 部署说明

### 方式：综合首页 + 多栏目

部署根目录 `/`，一个网站包含所有栏目，用���在首页选择。

**帽子云部署步骤：**
1. 创建站点，绑定域名
2. 选择部署目录：`/`
3. 站点域：`your-domain.com`
4. 自动生成首页：`https://your-domain.com/index.html`

---

## 📄 License

MIT