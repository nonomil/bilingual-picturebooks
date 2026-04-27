// Main app logic for Bilingual Picture Book Reader
const App = {
  currentView: 'home',
  currentStory: null,
  currentPage: 0,
  rate: 1,
  autoPage: false,
  speaking: false,
  wordMap: [],
  keyWordMap: [],
  highlightTimer: null,
  audioMode: localStorage.getItem('audioMode') || 'auto',  // auto, tts, audio
  hideChineseTranslation: localStorage.getItem('hideChineseTranslation') === '1'
    || localStorage.getItem('hideChinese') === 'true',

  init() {
    TTS.init().then(() => {
      this.renderHome();
    });
  },

  getBucket(story) {
    const category = String((story && story.category) || '').toLowerCase();
    return category === 'storyfun' ? 'storyfun' : 'classic';
  },

  getStoryPageCount(story) {
    const introCount = Array.isArray(story.intro_cn_pages) ? story.intro_cn_pages.length : 0;
    const readerCount = Array.isArray(story.reader_pages_simple_en) && story.reader_pages_simple_en.length
      ? story.reader_pages_simple_en.length
      : (Array.isArray(story.pages) ? story.pages.length : 0);
    return introCount + readerCount;
  },

  getStoryMeta(story) {
    const bucket = this.getBucket(story);
    const pageCount = this.getStoryPageCount(story);
    const unitText = story.unit ? `Unit ${story.unit}` : '';
    const levelText = story.cefrLevel ? `${story.cefrLevel}` : '';
    return {
      bucket,
      pageCount,
      unitText,
      levelText,
      readerUrl: `reader/${bucket}/${story.id}.html`,
      gameUrl: `game/${bucket}/${story.id}.html`
    };
  },

  renderStoryCard(story) {
    const meta = this.getStoryMeta(story);
    const badgeText = [story.category, meta.unitText, meta.levelText].filter(Boolean).join(' · ');
    return `
      <article class="story-card" data-reader-url="${meta.readerUrl}">
        <a class="story-card-link" href="${meta.readerUrl}">
          <img class="story-card-cover" src="${story.cover}" alt="${story.title}" loading="lazy" onerror="this.style.display='none'">
          <div class="story-card-body">
            <div class="story-card-badge">${badgeText || '双语绘本'}</div>
            <h3 class="story-card-title">${story.title}</h3>
            <p class="story-card-title-zh">${story.titleZh || ''}</p>
            <div class="story-card-meta">
              <span>${meta.pageCount} 页</span>
            </div>
          </div>
        </a>
        <div class="story-card-actions">
          <a class="story-action reader" href="${meta.readerUrl}">阅读</a>
          <a class="story-action game" href="${meta.gameUrl}">游戏</a>
        </div>
      </article>
    `;
  },

  setRate(r) {
    this.rate = r;
    document.getElementById('rate-display').textContent = r + 'x';
  },

  renderHome() {
    const classicStories = STORIES.filter(story => this.getBucket(story) === 'classic');
    const storyfunStories = STORIES.filter(story => this.getBucket(story) === 'storyfun');
    this.currentView = 'home';
    document.getElementById('app').innerHTML = `
      <div class="home">
        <div class="home-hero">
          <h1 class="home-title">📚 双语绘本朗读 <button class="settings-btn" onclick="App.showSettings()" title="设置">⚙️</button></h1>
          <p class="home-subtitle">多列瀑布卡片，直接进入阅读页或游戏页，选书更快。</p>
        </div>
        <section class="home-section">
          <div class="home-section-head">
            <h2 class="home-section-title">经典绘本</h2>
            <span class="home-section-count">${classicStories.length} 本</span>
          </div>
          <div class="masonry-grid" id="classic-grid">
            ${classicStories.map(story => this.renderStoryCard(story)).join('')}
          </div>
        </section>
        <section class="home-section">
          <div class="home-section-head">
            <h2 class="home-section-title">Story Fun</h2>
            <span class="home-section-count">${storyfunStories.length} 本</span>
          </div>
          <div class="masonry-grid" id="storyfun-grid">
            ${storyfunStories.map(story => this.renderStoryCard(story)).join('')}
          </div>
        </section>
        <div class="home-footer-note">
          首页卡片默认进入三阶段阅读页，游戏入口保留在卡片底部。
        </div>
      </div>
    `;
    document.querySelector('.home').addEventListener('click', e => {
      if (e.target.closest('.story-action')) return;
      const card = e.target.closest('.story-card');
      if (card && card.dataset.readerUrl) {
        window.location.href = card.dataset.readerUrl;
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
    const phrases = (p.phrases || []).filter(ph => ph.en && ph.zh);
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

  showSettings() {
    const overlay = document.createElement('div');
    overlay.className = 'settings-overlay';
    overlay.innerHTML = `
      <div class="settings-panel">
        <h2>⚙️ 设置</h2>
        <div class="setting-group">
          <label>🔊 朗读模式</label>
          <div class="radio-group">
            <label class="radio-label"><input type="radio" name="audioMode" value="auto" ${this.audioMode==='auto'?'checked':''}> 自动（推荐）</label>
            <label class="radio-label"><input type="radio" name="audioMode" value="tts" ${this.audioMode==='tts'?'checked':''}> 浏览器 TTS</label>
            <label class="radio-label"><input type="radio" name="audioMode" value="audio" ${this.audioMode==='audio'?'checked':''}> 内置音频</label>
          </div>
          <p class="setting-hint">自动：有音频用音频，无音频用 TTS</p>
        </div>
        <div class="setting-group">
          <label>🗣️ 中文语音</label>
          <select id="zhVoiceSelect" class="voice-select"></select>
          <p class="setting-hint">选择更自然的中文语音</p>
        </div>
        <div class="setting-group">
          <label class="checkbox-label">
            <input type="checkbox" id="hideChineseToggle" ${this.hideChineseTranslation ? 'checked' : ''}>
            阅读页默认隐藏中文
          </label>
          <p class="setting-hint">默认关闭，方便孩子直接对照中英文；开启后可在阅读页里再显示中文。</p>
        </div>
        <button class="settings-save" onclick="App.saveSettings()">保存</button>
        <button class="settings-close" onclick="this.closest('.settings-overlay').remove()">关闭</button>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    // Populate voice list
    const select = document.getElementById('zhVoiceSelect');
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    const zhVoices = voices.filter(v => v.lang.startsWith('zh'));
    if (zhVoices.length === 0) {
      select.innerHTML = '<option>未检测到中文语音</option>';
    } else {
      const saved = localStorage.getItem('zhVoiceName');
      zhVoices.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.name;
        opt.textContent = `${v.name} (${v.lang})`;
        if (v.name === saved) opt.selected = true;
        select.appendChild(opt);
      });
    }
  },

  saveSettings() {
    const mode = document.querySelector('input[name="audioMode"]:checked');
    if (mode) {
      this.audioMode = mode.value;
      localStorage.setItem('audioMode', this.audioMode);
    }
    const voiceSelect = document.getElementById('zhVoiceSelect');
    if (voiceSelect && voiceSelect.value !== '未检测到中文语音') {
      localStorage.setItem('zhVoiceName', voiceSelect.value);
      TTS.zhVoiceName = voiceSelect.value;
    }
    const hideChineseToggle = document.getElementById('hideChineseToggle');
    this.hideChineseTranslation = !!(hideChineseToggle && hideChineseToggle.checked);
    localStorage.setItem('hideChineseTranslation', this.hideChineseTranslation ? '1' : '0');
    localStorage.setItem('hideChinese', this.hideChineseTranslation ? 'true' : 'false');
    document.querySelector('.settings-overlay').remove();
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
      const mode = App.audioMode;
      // audio: 强制用音频 | tts: 强制用 TTS | auto: 有音频用音频
      if (mode === 'tts') return false;
      if (mode === 'audio' || window.Capacitor) {
        // 强制音频或APK环境
      } else {
        // auto: 有音频且TTS不可用时才用音频
        const ttsOk = window.speechSynthesis;
        if (ttsOk) return false;
      }

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
    // 2. Chinese — speak each punctuation-delimited chunk
    const speakNextChunk = async () => {
      if (zhChunkIdx >= zhChunks.length || !this.speaking) return;
      highlightZhChunk(zhChunkIdx);
      // Use _speakWeb directly to avoid stop() canceling the chain
      await TTS._speakWeb(zhChunks[zhChunkIdx], 'zh-CN', this.rate * 0.85);
      zhChunkIdx++;
      if (zhChunkIdx < zhChunks.length && this.speaking) {
        await speakNextChunk();
      }
    };

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
          // Then Chinese (use _speakWeb to avoid stop() canceling)
          return TTS._speakWeb(k.zh, 'zh-CN', this.rate * 0.85);
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
