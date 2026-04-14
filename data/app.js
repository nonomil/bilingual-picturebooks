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
  },

  renderReader() {
    const s = this.currentStory;
    const p = s.pages[this.currentPage];
    const total = s.pages.length;

    // Build key words HTML for inline display
    const keysHtml = p.keys.map((k, i) =>
      `<span class="key-word" id="key-${i}" onclick="App.speakKey(${i})"><b>${k.w}</b> <span class="phonetic">${k.p}</span> ${k.zh}</span>`
    ).join('');

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
          <div class="zh-text" id="zh-text">${p.zh}</div>
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

    // Auto-scroll helpers
    const scrollActiveWordIntoView = () => {
      const active = document.querySelector('.word.active');
      if (active) {
        const textArea = document.getElementById('text-area');
        const wordBottom = active.getBoundingClientRect().bottom;
        const areaBottom = textArea.getBoundingClientRect().bottom;
        if (wordBottom > areaBottom - 60) {
          textArea.scrollTop += wordBottom - areaBottom + 80;
        }
      }
    };

    // Highlight word by index using time-based estimation
    // Average English word spoken at ~400ms at rate=1
    const highlightWordByIndex = (idx) => {
      this.clearAllHighlights();
      if (idx >= 0 && idx < this.wordMap.length) {
        const el = this.wordMap[idx].el;
        if (el) el.classList.add('active');
        // Schedule next word
        if (idx < this.wordMap.length - 1) {
          const delay = 350 / this.rate;
          this.highlightTimer = setTimeout(() => {
            highlightWordByIndex(idx + 1);
            scrollActiveWordIntoView();
          }, delay);
        }
      }
    };

    // TTS 朗读顺序：英文句子 → 中文句子 → 英文单词 → 中文单词
    // 英文单词 + 中文翻译交替进行，一组一组读

    // 1. English sentence
    TTS.speak(p.en, 'en-US', this.rate, null, null).then(() => {
      // 2. Chinese sentence
      return TTS.speak(p.zh, 'zh-CN', this.rate, null, null);
    }).then(() => {
      // 3 & 4. Key words one pair at a time
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
