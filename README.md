# 📚 双语绘本朗读 Bilingual Picture Book Reader

> A delightful bilingual story reading app for children — featuring three classic stories with word-by-word highlighting, TTS narration, and auto-page turning.

🌐 **Live Demo**: https://nonomil.github.io/bilingual-picturebooks/

---

## 📖 Stories

| # | Category | Title | Pages |
|---|----------|-------|-------|
| 1 | 🌱 植物大战僵尸 | The Brave Pea Shooter / 勇敢的豌豆射手 | 20 |
| 2 | ⛏️ 我的世界 | Steve vs The Wither / 史蒂夫大战凋零 | 20 |
| 3 | 🐍 宫西达也 | The Very Hungry Little Snake / 好饿的小蛇 | 9 |

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
