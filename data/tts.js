// TTS - Text-to-Speech with Capacitor Android TTS Plugin + Web Speech API fallback
const TTS = {
  voices: [],
  currentUtterance: null,
  isSpeaking: false,
  useNative: true, // 优先使用 Android 原生 TTS

  init() {
    return new Promise((resolve) => {
      // 检查 Capacitor 插件是否可用
      if (this.isCapacitorTTS()) {
        console.log('Using Capacitor TTS Plugin');
        const plugin = this.getTTSPlugin();
        // 监听 TTS 完成事件
        plugin.addListener('ttsFinish', () => {
          this.isSpeaking = false;
          if (this._pendingEnd) this._pendingEnd();
          if (this._pendingResolve) { this._pendingResolve(); this._pendingResolve = null; }
        });
        plugin.addListener('ttsError', () => {
          this.isSpeaking = false;
          if (this._pendingEnd) this._pendingEnd();
          if (this._pendingResolve) { this._pendingResolve(); this._pendingResolve = null; }
        });
        // 检测微软语音引擎
        this.checkMicrosoftTTS(plugin);
        resolve();
        return;
      }
      
      // 检查旧版 Android 桥接
      if (window.AndroidTTS && typeof window.AndroidTTS.speak === 'function') {
        console.log('Using Android Native TTS (legacy)');
        resolve();
        return;
      }
      
      // 回退到 Web Speech API
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.voices = window.speechSynthesis.getVoices();
          console.log('TTS voices loaded:', this.voices.length);
          resolve();
        };
        setTimeout(() => {
          this.voices = window.speechSynthesis.getVoices();
          resolve();
        }, 100);
      } else {
        resolve();
      }
    });
  },

  // 检查是否使用 Capacitor TTS 插件
  isCapacitorTTS() {
    return window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.TTS;
  },

  // 获取 TTS 插件引用
  getTTSPlugin() {
    if (this.isCapacitorTTS()) {
      return window.Capacitor.Plugins.TTS;
    }
    return null;
  },

  // 检查是否使用旧版 Android TTS
  isAndroidTTS() {
    return window.AndroidTTS && typeof window.AndroidTTS.speak === 'function';
  },

  speak(text, lang = 'en-US', rate = 1, onWord, onEnd, onStart) {
    this.stop();
    
    // 优先使用 Capacitor TTS 插件
    if (this.isCapacitorTTS()) {
      const plugin = this.getTTSPlugin();
      return new Promise((resolve) => {
        if (onStart) onStart();
        this.isSpeaking = true;
        this._pendingEnd = onEnd;
        this._pendingResolve = resolve;

        plugin.speak({
          text: text,
          lang: lang,
          rate: rate
        }).catch((err) => {
          console.error('TTS speak error:', err);
          this.isSpeaking = false;
          if (onEnd) onEnd();
          resolve();
        });
      });
    }
    
    // 旧版 Android 桥接
    if (this.isAndroidTTS()) {
      return new Promise((resolve) => {
        if (onStart) onStart();
        this.isSpeaking = true;
        window.AndroidTTS.speak(text, lang, rate);
        const estimatedTime = Math.max(1000, (text.length / 5) * 1000 / rate);
        setTimeout(() => {
          this.isSpeaking = false;
          if (onEnd) onEnd();
          resolve();
        }, estimatedTime);
      });
    }
    
    // Web Speech API 回退
    return this._speakWeb(text, lang, rate, onWord, onEnd, onStart);
  },

  // Web Speech API 实现
  _speakWeb(text, lang = 'en-US', rate = 1, onWord, onEnd, onStart) {
    return new Promise((resolve) => {
      if (!window.speechSynthesis) {
        if (onEnd) onEnd();
        resolve();
        return;
      }
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = this.pickVoice(lang);
      utterance.lang = lang;
      utterance.rate = rate;
      if (onWord) utterance.onboundary = (e) => { if (e.name === 'word') onWord(e.charIndex, text.length); };
      utterance.onstart = () => { this.isSpeaking = true; if (onStart) onStart(); };
      utterance.onend = () => { this.isSpeaking = false; if (onEnd) onEnd(); resolve(); };
      utterance.onerror = () => { this.isSpeaking = false; if (onEnd) onEnd(); resolve(); };
      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    });
  },

  pickVoice(lang) {
    if (!this.voices.length) return null;
    const priorities = [
      { match: /Google.*zh/i, factor: 1 },
      { match: /Microsoft.*Mandarin/i, factor: 2 },
      { match: /zh-CN/i, factor: 3 },
      { match: /zh.*CN/i, factor: 4 },
      { match: /Google.*en/i, factor: 5 },
      { match: /Microsoft.*English/i, factor: 6 },
      { match: /en-US/i, factor: 7 },
      { match: /en.*US/i, factor: 8 },
    ];
    let best = null, bestScore = -1;
    for (const v of this.voices) {
      for (const p of priorities) {
        if (p.match.test(v.name) && v.lang.includes(lang.split('-')[0])) {
          const score = p.factor + (v.localService ? 10 : 0);
          if (score > bestScore) { bestScore = score; best = v; }
        }
      }
    }
    return best || this.voices.find(v => v.lang.startsWith(lang.split('-')[0])) || this.voices[0];
  },

  stop() {
    // 停止 Capacitor TTS
    const plugin = this.getTTSPlugin();
    if (plugin && plugin.stop) {
      plugin.stop();
    }
    // 停止旧版 Android TTS
    if (this.isAndroidTTS() && window.AndroidTTS.stop) {
      window.AndroidTTS.stop();
    }
    // 停止 Web Speech API
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
  },

  // Speak English then Chinese sequentially
  async speakPage(enText, zhText, rate = 1, onWord, onPageEnd) {
    await this.speak(enText, 'en-US', rate, onWord, null);
    await this.speak(zhText, 'zh-CN', rate, null, onPageEnd);
  },

  // 检测并提示安装微软语音引擎
  async checkMicrosoftTTS(plugin) {
    if (!plugin || !plugin.getTTSInfo) return;
    try {
      const info = await plugin.getTTSInfo();
      if (!info.hasMicrosoftTTS) {
        this._showTTSDialog();
      }
    } catch (e) {
      console.warn('TTS info check failed:', e);
    }
  },

  // 检测 TTS 是否真正可用
  isAvailable() {
    return !!(
      window.speechSynthesis ||
      (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.TTS) ||
      (window.AndroidTTS && typeof window.AndroidTTS.speak === 'function')
    );
  },

  _showTTSDialog() {
    // 检查是否已经提示过（每天最多一次）
    const lastPrompt = localStorage.getItem('tts_prompt_date');
    const today = new Date().toDateString();
    if (lastPrompt === today) return;

    const overlay = document.createElement('div');
    overlay.id = 'tts-prompt-overlay';
    overlay.innerHTML = `
      <div class="tts-prompt-dialog">
        <div class="tts-prompt-icon">🔊</div>
        <h3>安装高品质语音引擎</h3>
        <p>推荐安装<strong>微软语音引擎</strong>，获得更自然的朗读效果：</p>
        <ul>
          <li>晓晓、云希、晓伊、云扬等音色</li>
          <li>完全免费，无限量使用</li>
          <li>离线可用，不消耗流量</li>
        </ul>
        <div class="tts-prompt-buttons">
          <a href="https://play.google.com/store/apps/details?id=com.microsoft.tts" target="_blank" class="tts-btn-install">
            📥 前往安装
          </a>
          <button class="tts-btn-later" id="tts-later">稍后再说</button>
        </div>
        <p class="tts-prompt-hint">安装后重启 App 即可自动生效</p>
      </div>
    `;
    overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;';
    document.body.appendChild(overlay);

    document.getElementById('tts-later').onclick = () => {
      localStorage.setItem('tts_prompt_date', today);
      overlay.remove();
    };
  }
};