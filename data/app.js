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
        <div class="category-grid" id="home-grid">
          ${STORIES.map(s => `
            <div class="category-card" data-story-id="${s.id}">
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
    document.getElementById('home-grid').addEventListener('click', e => {
      const card = e.target.closest('.category-card');
      if (card && card.dataset.storyId) {
        this.selectStory(card.dataset.storyId);
      }
    });
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
    document.querySelectorAll('.zh-char.active, .zh-word.active, .zh-chunk.active').forEach(el => el.classList.remove('active'));
  },

  renderReader() {
    const s = this.currentStory;
    const p = s.pages[this.currentPage];
    const total = s.pages.length;

    // Build key words HTML for inline display
    const keysHtml = p.keys.map((k, i) =>
      `<span class="key-word" id="key-${i}" onclick="App.speakKey(${i})"><b>${k.w}</b> <span class="phonetic">${k.p}</span> ${k.zh}</span>`
    ).join('');
    const phrases = p.phrases || [];
    const phrasesHtml = phrases.length > 0 ? phrases.map((ph, i) =>
      `<span class="key-phrase" id="phrase-${i}" onclick="App.speakPhrase(${i})"><b>${ph.en}</b> ${ph.zh}</span>`
    ).join('') : '';

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
          <div class="zh-text" id="zh-text-container">${zhHtml}</div>
          <div class="keys-row" id="keys-row">${keysHtml}</div>
          ${phrasesHtml ? `<div class="phrases-row" id="phrases-row">${phrasesHtml}</div>` : ''}
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
      // 延迟检测 TTS 是否真正可用（避免 WebView 加载远程页面时 TTS 未就绪导致飞速翻页）
      setTimeout(() => {
        if (TTS.isAvailable && TTS.isAvailable()) {
          this.startReading();
        }
      }, 500);
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

    // 尝试播放预生成音频（优先）
    const pageIdx = this.currentPage + 1;
    const storyId = s.id;
    const enAudioUrl = `audio/${storyId}/page-${pageIdx}-en.mp3`;
    const zhAudioUrl = `audio/${storyId}/page-${pageIdx}-zh.mp3`;
    const enContainer = document.getElementById('en-text-container');
    this.buildWordMap(p.en, enContainer);
    this.buildKeyWordMap(document.getElementById('keys-row'));

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

    const splitByPunct = (text) => {
      const parts = text.split(/(?<=[。！？；：])/);
      return parts.filter(p => p.trim().length > 0);
    };

    const zhChunks = splitByPunct(p.zh);
    const zhContainer = document.getElementById('zh-text-container');
    const zhChunkEls = zhChunks.map((chunk, i) => {
      return `<span class="zh-chunk" id="zhc-${i}">${chunk}</span>`;
    }).join('');
    zhContainer.innerHTML = zhChunkEls;

    let zhChunkIdx = 0;
    const highlightZhChunk = (idx) => {
      this.clearAllHighlights();
      const el = document.getElementById('zhc-' + idx);
      if (el) { el.classList.add('active'); scrollActiveIntoView(el); }
    };

    // Test if audio exists — play with highlights
    const tryAudioPlayback = async () => {
      // 检测是否需要音频回退：TTS 不可用 或 APK 环境
      const ttsOk = window.speechSynthesis || (window.Capacitor && window.Capacitor.Plugins?.TTS);
      const useAudio = !ttsOk || window.Capacitor;
      if (!useAudio) return false;

      try {
        const resp = await fetch(enAudioUrl, { method: 'HEAD' });
        if (!resp.ok) return false;

        // 在用户交互上下文中创建 AudioContext，绕过自动播放限制
        const actx = new (window.AudioContext || window.webkitAudioContext)();
        const playBlob = async (blob) => {
          const buf = await blob.arrayBuffer();
          const audioBuf = await actx.decodeAudioData(buf);
          const src = actx.createBufferSource();
          src.buffer = audioBuf;
          src.connect(actx.destination);
          return new Promise((resolve) => { src.onended = resolve; src.start(0); });
        };

        const enBlob = await (await fetch(enAudioUrl)).blob();
        nextEnWord();
        await playBlob(enBlob);
        if (!this.speaking) return;

        const zhResp = await fetch(zhAudioUrl, { method: 'HEAD' });
        if (zhResp.ok) {
          const zhBlob = await zhResp.blob();
          highlightZhChunk(0);
          await playBlob(zhBlob);
          if (!this.speaking) return;
        }

        await this.speakKeysOneByOne(p.keys);
        return true;
      } catch (e) {
        return false;
      }
    };

    // 先尝试音频，失败则用 TTS
    const doTTS = () => {
    // 1. English — time-driven word highlight, waits for TTS onstart event
    let enHighlightStarted = false;
    const startEnHighlight = () => {
      if (enHighlightStarted || !this.speaking) return;
      enHighlightStarted = true;
      nextEnWord();
    };
    // Fallback in case onstart doesn't fire reliably
    const enFallbackTimer = setTimeout(startEnHighlight, 600);
    TTS.speak(p.en, 'en-US', this.rate, null, null, () => {
      clearTimeout(enFallbackTimer);
      startEnHighlight();
    }).then(async () => {
      // 2. Chinese — speak each punctuation-delimited chunk, then key words
      if (!this.speaking) return;
      await speakNextChunk();
      if (!this.speaking) return;
      // 3. Key words
      await this.speakKeysOneByOne(p.keys);
    });
    };
    tryAudioPlayback().then(usedAudio => {
      if (usedAudio || !this.speaking) return;
      doTTS();
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

  speakPhrase(idx) {
    const p = this.currentStory.pages[this.currentPage];
    const ph = (p.phrases || [])[idx];
    if (ph) TTS.speak(`${ph.en}，${ph.zh}`, 'zh-CN', this.rate, null, null);
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
