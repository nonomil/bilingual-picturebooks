# 📚 双语绘本朗读 Bilingual Picture Book Reader

> A delightful bilingual story reading app for children — featuring three classic stories with word-by-word highlighting, TTS narration, and auto-page turning.

🌐 **Live Demo**: https://nonomil.github.io/bilingual-picturebooks/

---

## 📖 Stories

| # | Title | Feishu |
|---|-------|--------|
| 1 | 🐍 好饿的小蛇 The Very Hungry Little Snake | [Wiki](https://zcnr5y1k0s0o.feishu.cn/wiki/AyRmwubXfiym7vkAAiTcELqLncf) |
| 2 | 🌱 勇敢的豌豆射手 The Brave Pea Shooter | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/DzW7dOrm3ozY2Hx03FIcXCH0n8b) |
| 3 | ⛏️ 史蒂夫大战凋零 Steve vs The Wither | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/LQSAd5z0Vo12KlxIISScKOP1nDb) |
| 4 | 🧱 方块大战 Block Battle | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/CkF8d5KsJooEZyxFj4kc4274nZc) |
| 5 | 🚀 星球大战 Star Wars | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/ANn7dk0z3oPO71xFwt5cHmDQnrd) |
| 6 | 🤖 豆豆和豆包的家务机器人大战 | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/FunpdhNVPoGRMMxvQ2kc7OaonNc) |
| 7 | 🔥 勇敢的小坦克 The Brave Little Tank | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/DjfZdIhi7oZGk1x90YfcTv5MnW6) |
| 8 | 🔫 坦克大战·第一册 Tank Battles Book 1 | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/IQEsdGiSkokIqdxBReIcCBZBnvc) |
| 9 | 🔫 坦克大战·第二册 Tank Battles Book 2 | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/JY2wd5PQDoZ6Rxx3FmkcVHW3nJf) |
| 10 | 🔫 坦克大战·第三册 Tank Battles Book 3 | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/VZFXdWHYfoty0SxaxrNcW0BGnxd) |
| 11 | 🌾 甘蔗坦克大作战 Sugarcane Tank Battle | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/DPlOdYAzLoYgtYxTVZ7cBhgOnTb) |
| 12 | 🫥 隐身战车奇袭 Invisible Tank Mission | [Doc](https://zcnr5y1k0s0o.feishu.cn/docx/LzOVdCSQkoEuovxO7sAcLWg8nSf) |

---

## ✨ Features

- **🔤 Word-by-Word Highlighting** — Current word highlighted in warm orange while TTS reads
- **🔊 TTS Narration** — English + Chinese narration via Web Speech API (Google → Microsoft → Chrome voices)
- **📄 Auto Page Turning** — Automatically advances to next page after reading
- **🎯 Key Words** — Each page shows English word + phonetic symbol + Chinese meaning
- **🐢 Speed Control** — Adjustable reading speed from 0.5× to 2×
- **👶 Child-Friendly UI** — Large buttons, rounded corners, warm cream background (#FFF8F0)
- **📱 Responsive** — Works on mobile, tablet, and desktop

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | Vanilla HTML5 |
| Styling | Vanilla CSS3 |
| Logic | Vanilla JavaScript (ES6+) |
| Data | Plain JSON/JS objects |
| TTS | Web Speech API |
| Hosting | GitHub Pages |

No build step, no dependencies, no frameworks.

---

## 📂 Project Structure

```
bilingual-picturebooks/
├── index.html           # Entry point
├── data/
│   ├── app.js           # Main app logic
│   ├── stories.js       # Story data (JSON)
│   └── tts.js           # Text-to-Speech wrapper
└── styles/
    └── main.css         # All styles
```

---

## 🚀 Quick Start (Local)

```bash
# Clone the repo
git clone https://github.com/nonomil/bilingual-picturebooks.git
cd bilingual-picturebooks

# Serve locally (any static server works)
npx serve .

# Or use Python
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## 🎨 How to Use

1. **Home Screen** — Tap a story card to enter reading mode
2. **Reading Mode** — Story auto-plays with word highlighting + TTS
3. **Navigation** — Tap ◀ ▶ buttons or page dots to navigate
4. **Speed** — Tap −/+ buttons to adjust reading speed (0.5×–2×)
5. **Stop/Play** — Tap the play button to pause/resume narration

---

## ➕ Adding a New Story

Edit `data/stories.js`, add a new object to the `STORIES` array:

```javascript
{
  id: 'my-story',
  title: 'My Story Title',
  titleZh: '我的故事标题',
  category: 'Category Name',
  cover: 'https://example.com/cover.jpg',
  pages: [
    {
      en: 'English sentence here.',
      zh: '中文句子在这里。',
      keys: [
        { w: 'word', p: '/phonetic/', zh: '中文释义' }
      ]
    },
    // ... more pages
  ]
}
```

Then add the story to the top of `STORIES` array in `data/stories.js`.

---

## 🔑 Key Design Decisions

- **No build step** — Zero dependencies, zero npm, pure browser-native code
- **No external image hosting** — Story images served from feishu CDN in data file
- **No localStorage** — Keeps it simple and stateless
- **Single HTML file** — Easy to deploy anywhere with just static hosting

---

## 📄 License

MIT License — Free to use, modify, and distribute.
