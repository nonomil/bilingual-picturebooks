// Main app logic for Bilingual Picture Book Reader
const App = {
  currentView: 'home',
  currentStory: null,
  currentPage: 0,
  rate: 1,
  autoPage: true,
  speaking: false,
  wordMap: [],
  keyWordMap: [],
  highlightTimer: null,

  init() {
    TTS.init().then(() => {
      this.renderHome();
    });
  },

  setRate(r) {
    this.rate = r;
    document.getElementById('rate-display').textContent = r + 'x';
  },

  renderHome() {
    this.currentView = 'home';
    document.getElementById('app').innerHTML = `
      <div class="home">
        <h1 class="home-title">📚 双语绘本朗读</h1>
        <div class="category-grid">
          ${STORIES.map(s => `
            <div class="category-card" onclick="App.selectStory('${s.id}')">
              <img class="card-cover" src="${s.cover}" alt="${s.title}" onerror="this.style.display='none'">
              <div class="card-info">
                <div class="card-category">${s.category}</div>
                <div class="card-title">${s.title}</div>
                <div class="card-title-zh">${s.titleZh}</div>
                <div class="card-pages">${s.pages.length} 页</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  selectStory(id) {
    this.currentStory = STORIES.find(s => s.id === id);
    this.currentPage = 0;
    this.currentView = 'reader';
    this.renderReader();
  },

  // Build character-offset map for word highlighting
  buildWordMap(text, containerEl) {
    const words = text.split(' ');
    this.wordMap = [];
    let charPos = 0;
    const els = containerEl ? containerEl.querySelectorAll('.word') : [];
    words.forEach((w, i) => {
      this.wordMap.push({
        start: charPos,
        end: charPos + w.length,
        el: els[i] || null
      });
      charPos += w.length + 1; // +1 for space
    });
  },

  buildKeyWordMap(containerEl) {
    const spans = containerEl ? containerEl.querySelectorAll('.key-word') : [];
    this.keyWordMap = [];
    spans.forEach((el, i) => { this.keyWordMap.push({ el }); });
  },

  highlightKeyWord(idx) {
    this.keyWordMap.forEach((item, i) => {
      if (item.el) item.el.classList.toggle('active', i === idx);
    });
  },

  clearAllHighlights() {
    if (this.highlightTimer) { clearTimeout(this.highlightTimer); this.highlightTimer = null; }
    this.wordMap.forEach(item => { if (item.el) item.el.classList.remove('active'); });
    this.keyWordMap.forEach(item => { if (item.el) item.el.classList.remove('active'); });
    document.querySelectorAll('.zh-char.active, .zh-word.active').forEach(el => el.classList.remove('active'));
  },

  renderReader() {
    const s = this.currentStory;
    const p = s.pages[this.currentPage];
    const total = s.pages.length;

    // Build key words HTML for inline display
    const keysHtml = p.keys.map((k, i) =>
      `<span class="key-word" id="key-${i}" onclick="App.speakKey(${i})"><b>${k.w}</b> <span class="phonetic">${k.p}</span> ${k.zh}</span>`
    ).join('');

    // Wrap each Chinese char in a span for highlighting
    const zhHtml = p.zh.split('').map((c, i) => `<span class="zh-char" id="zhc-${i}">${c}</span>`).join('');

    document.getElementById('app').innerHTML = `
      <div class="reader">
        <div class="reader-header">
          <button class="btn-back" onclick="App.goHome()">← 首页</button>
          <div class="reader-title">
            <span class="story-name">${s.title}</span>
            <span class="page-indicator">${this.currentPage + 1} / ${total}</span>
          </div>
          <div class="speed-control">
            <button class="btn-speed" onclick="App.adjustSpeed(-0.25)">-</button>
            <span id="rate-display">${this.rate}x</span>
            <button class="btn-speed" onclick="App.adjustSpeed(0.25)">+</button>
          </div>
        </div>

        <div class="story-image-container" id="story-image-container">
          ${p.img ? `<img id="story-image" src="${p.img}" alt="story scene">` :
            (s.cover ? `<img id="story-image" src="${s.cover}" alt="story" onerror="this.parentElement.style.background='#FFF0E0'">` : '')}
        </div>

        <div class="text-area" id="text-area">
          <div class="en-text" id="en-text-container">${this.wrapWords(p.en)}</div>
          <div class="zh-text" id="zh-text-container">${p.zh}</div>
          <div class="keys-row" id="keys-row">${keysHtml}</div>
        </div>

        <div class="controls">
          <button class="btn-nav" onclick="App.prevPage()">◀ 上一页</button>
          <button class="btn-play" id="play-btn" onclick="App.togglePlay()">▶ 朗读</button>
          <button class="btn-nav" onclick="App.nextPage()">下一页 ▶</button>
        </div>

        <div class="page-dots">
          ${s.pages.map((_, i) => `<div class="dot ${i === this.currentPage ? 'active' : ''}" onclick="App.goPage(${i})"></div>`).join('')}
        </div>
      </div>
    `;

    if (this.autoPage) {
      setTimeout(() => this.startReading(), 500);
    }
  },

  wrapWords(text) {
    return text.split(' ').map(w => `<span class="word">${w}</span>`).join(' ');
  },

  goHome() {
    TTS.stop();
    this.speaking = false;
    this.renderHome();
  },

  adjustSpeed(delta) {
    this.rate = Math.max(0.5, Math.min(2, this.rate + delta));
    document.getElementById('rate-display').textContent = this.rate + 'x';
  },

  async togglePlay() {
    if (this.speaking) {
      TTS.stop();
      this.speaking = false;
      this.clearAllHighlights();
      document.getElementById('play-btn').textContent = '▶ 朗读';
    } else {
      await this.startReading();
    }
  },

  startReading() {
    const s = this.currentStory;
    const p = s.pages[this.currentPage];
    this.speaking = true;
    document.getElementById('play-btn').textContent = '⏸ 停止';

    const enContainer = document.getElementById('en-text-container');
    this.buildWordMap(p.en, enContainer);
    this.buildKeyWordMap(document.getElementById('keys-row'));
    // Segment Chinese text into 2-3 char word groups for phrase highlighting
    const segmentZh = (text) => {
      const result = [];
      const skip = new Set(['，', '。', '！', '？', '、', '；', '：', '"', '"', '（', '）', '【', '】', '…', '—', '～', '·', ' ', '\n']);
      let i = 0;
      while (i < text.length) {
        const ch = text[i];
        if (skip.has(ch)) { i++; continue; } // skip punctuation, handled separately
        // Try 3-char word
        if (i + 3 <= text.length && !skip.has(text[i + 3 - 1])) {
          result.push(text.slice(i, i + 3)); i += 3;
        } else {
          result.push(text.slice(i, i + 2)); i += 2;
        }
      }
      return result;
    };

    const zhWords = segmentZh(p.zh);
    const zhWordEls = [];
    // Build span for each Chinese word chunk
    const zhContainer = document.getElementById('zh-text-container');
    zhContainer.innerHTML = zhWords.map((w, i) => {
      const id = 'zhc-' + i;
      zhWordEls.push({ id, text: w, el: null });
      return `<span class="zh-word" id="${id}">${w}</span>`;
    }).join('');
    // Capture element refs after innerHTML set
    zhWordEls.forEach(item => { item.el = document.getElementById(item.id); });

    const scrollActiveIntoView = (el) => {
      if (!el) return;
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    };

    let enIdx = 0;
    const nextEnWord = () => {
      if (!this.speaking || enIdx >= this.wordMap.length) return;
      this.clearAllHighlights();
      const el = this.wordMap[enIdx] && this.wordMap[enIdx].el;
      if (el) { el.classList.add('active'); scrollActiveIntoView(el); }
      enIdx++;
      if (enIdx < this.wordMap.length) {
        this.highlightTimer = setTimeout(nextEnWord, Math.max(180, 350 / this.rate));
      }
    };

    let zhIdx = 0;
    const nextZhWord = () => {
      if (!this.speaking || zhIdx >= zhWords.length) return;
      this.clearAllHighlights();
      const item = zhWordEls[zhIdx];
      if (item && item.el) { item.el.classList.add('active'); scrollActiveIntoView(item.el); }
      zhIdx++;
      if (zhIdx < zhWords.length) {
        this.highlightTimer = setTimeout(nextZhWord, Math.max(150, 380 / this.rate));
      }
    };

    // 1. English — speak + immediate time-driven highlighting
    nextEnWord();
    TTS.speak(p.en, 'en-US', this.rate, null, null).then(() => {
      // 2. Chinese — speak + time-driven char highlighting
      if (!this.speaking) return;
      zhIdx = 0;
      nextZhChar();
      return TTS.speak(p.zh, 'zh-CN', this.rate, null, null);
    }).then(() => {
      // 3 & 4. Key words
      if (!this.speaking) return;
      return this.speakKeysOneByOne(p.keys);
    });
  },

  // Speak keys: each key = English word then its Chinese translation
  speakKeysOneByOne(keys) {
    return new Promise((resolve) => {
      if (!keys || keys.length === 0) { resolve(); return; }
      let i = 0;
      const next = () => {
        if (i >= keys.length) {
          this.clearAllHighlights();
          resolve();
          this.speaking = false;
          document.getElementById('play-btn').textContent = '▶ 朗读';
          const s = this.currentStory;
          if (this.autoPage && this.currentPage < s.pages.length - 1) {
            setTimeout(() => this.nextPage(), 800);
          }
          return;
        }
        const k = keys[i];
        this.highlightKeyWord(i);
        const keyEl = document.getElementById('key-' + i);
        if (keyEl) keyEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        // Speak English word
        TTS.speak(k.w, 'en-US', this.rate * 0.85, null, null).then(() => {
          // Then Chinese
          return TTS.speak(k.zh, 'zh-CN', this.rate * 0.85, null, null);
        }).then(() => {
          i++;
          next();
        });
      };
      next();
    });
  },

  speakKey(idx) {
    const p = this.currentStory.pages[this.currentPage];
    const k = p.keys[idx];
    if (k) TTS.speak(`${k.w}，${k.zh}`, 'zh-CN', this.rate, null, null);
  },

  prevPage() {
    this.clearAllHighlights();
    TTS.stop();
    this.speaking = false;
    if (this.currentPage > 0) {
      this.currentPage--;
      this.renderReader();
    }
  },

  nextPage() {
    this.clearAllHighlights();
    TTS.stop();
    this.speaking = false;
    const s = this.currentStory;
    if (this.currentPage < s.pages.length - 1) {
      this.currentPage++;
      this.renderReader();
    }
  },

  goPage(idx) {
    this.clearAllHighlights();
    TTS.stop();
    this.speaking = false;
    this.currentPage = idx;
    this.renderReader();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
