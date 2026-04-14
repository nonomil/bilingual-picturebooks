// TTS - Text-to-Speech with Web Speech API
const TTS = {
  voices: [],
  currentUtterance: null,
  isSpeaking: false,

  init() {
    return new Promise((resolve) => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
          this.voices = window.speechSynthesis.getVoices();
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

  speak(text, lang = 'en-US', rate = 1, onWord, onEnd, onStart) {
    this.stop();
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = this.pickVoice(lang);
      utterance.lang = lang;
      utterance.rate = rate;
      if (onWord) utterance.onboundary = (e) => { if (e.name === 'word') onWord(e.charIndex, text.length); };
      utterance.onstart = () => { if (onStart) onStart(); };
      utterance.onend = () => { this.isSpeaking = false; if (onEnd) onEnd(); resolve(); };
      utterance.onerror = () => { this.isSpeaking = false; if (onEnd) onEnd(); resolve(); };
      this.currentUtterance = utterance;
      this.isSpeaking = true;
      window.speechSynthesis.speak(utterance);
    });
  },

  stop() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
  },

  // Speak English then Chinese sequentially
  async speakPage(enText, zhText, rate = 1, onWord, onPageEnd) {
    await this.speak(enText, 'en-US', rate, onWord, null);
    await this.speak(zhText, 'zh-CN', rate, null, onPageEnd);
  }
};
