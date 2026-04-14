// Main app logic for Bilingual Picture Book Reader
const App = {
  currentView: 'home',   // home | story | reader
  currentStory: null,
  currentPage: 0,
  rate: 1,
  autoPage: true,
  speaking: false,

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

  renderReader() {
    const s = this.currentStory;
    const p = s.pages[this.currentPage];
    const total = s.pages.length;

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
          ${s.cover ? `<img id="story-image" src="${s.cover}" alt="story" onerror="this.parentElement.style.background='#FFF0E0'">` : ''}
        </div>

        <div class="text-area" id="text-area">
          <div class="en-text" id="en-text">${this.highlightText(p.en)}</div>
          <div class="zh-text" id="zh-text">${p.zh}</div>
        </div>

        <div class="keys-area" id="keys-area">
          ${p.keys.map(k => `<span class="key-word"><b>${k.w}</b> <span class="phonetic">${k.p}</span> ${k.zh}</span>`).join('')}
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

  highlightText(text) {
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
      document.getElementById('play-btn').textContent = '▶ 朗读';
    } else {
      await this.startReading();
    }
  },

  async startReading() {
    const s = this.currentStory;
    const p = s.pages[this.currentPage];
    this.speaking = true;
    document.getElementById('play-btn').textContent = '⏸ 停止';

    const enWords = document.querySelectorAll('#en-text .word');

    await TTS.speak(p.en, 'en-US', this.rate, (idx, len) => {
      const progress = idx / len;
      const wordIndex = Math.floor(progress * enWords.length);
      enWords.forEach((w, i) => w.classList.toggle('active', i === wordIndex));
    }, null);

    enWords.forEach(w => w.classList.remove('active'));

    await TTS.speak(p.zh, 'zh-CN', this.rate, null, () => {
      this.speaking = false;
      document.getElementById('play-btn').textContent = '▶ 朗读';
      if (this.autoPage && this.currentPage < s.pages.length - 1) {
        setTimeout(() => this.nextPage(), 800);
      }
    });
  },

  async prevPage() {
    TTS.stop();
    this.speaking = false;
    if (this.currentPage > 0) {
      this.currentPage--;
      this.renderReader();
    }
  },

  async nextPage() {
    TTS.stop();
    this.speaking = false;
    const s = this.currentStory;
    if (this.currentPage < s.pages.length - 1) {
      this.currentPage++;
      this.renderReader();
    }
  },

  async goPage(idx) {
    TTS.stop();
    this.speaking = false;
    this.currentPage = idx;
    this.renderReader();
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
