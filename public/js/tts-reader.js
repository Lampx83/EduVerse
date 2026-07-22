// TTS Reader — Web Speech API. Bật/tắt toàn cục, đọc bất kỳ element nào có
// attr data-tts hoặc lớp .lesson-text. Tự gắn nút 🔊 nhỏ cạnh element.
//
// Mặc định OFF (HS lớp lớn không cần). HS tiểu học bật bằng toggle góc phải
// dưới HUD pet.

const KEY_ON = 'tizia:tts:on';

const CSS = `
  .tz-tts-toggle {
    position: fixed; bottom: 18px; right: 100px; z-index: 92;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(15,23,42,0.85);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; cursor: pointer;
    box-shadow: 0 6px 18px rgba(0,0,0,0.4);
    transition: background 0.15s, transform 0.15s;
    color: #fff;
  }
  .tz-tts-toggle:hover { transform: scale(1.08); background: rgba(15,23,42,0.95); }
  .tz-tts-toggle.on {
    background: linear-gradient(135deg, #fbbf24, #f97316);
    color: #1e293b; border-color: #fbbf24;
  }
  .tz-tts-toggle.speaking {
    animation: tz-tts-pulse 0.8s ease-in-out infinite;
  }
  @keyframes tz-tts-pulse {
    0%, 100% { box-shadow: 0 6px 18px rgba(251,191,36,0.5); }
    50% { box-shadow: 0 6px 28px rgba(251,191,36,1); }
  }

  /* Mini speaker button gắn vào lesson text */
  .tz-tts-btn {
    display: inline-flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; border-radius: 50%;
    background: rgba(167,139,250,0.18); color: #c4b5fd;
    border: 1px solid rgba(167,139,250,0.4);
    font-size: 11px; cursor: pointer; margin-left: 6px;
    vertical-align: middle; transition: background 0.12s;
  }
  .tz-tts-btn:hover { background: rgba(167,139,250,0.35); }
  .tz-tts-btn.speaking { background: var(--accent, #fbbf24); color: #1e293b; }
`;

class TTSReader {
  constructor() {
    this.enabled = localStorage.getItem(KEY_ON) === '1';
    this.injectCss();
    this.mount();
    this.attachAll();
    // Re-scan periodically for newly added content
    setInterval(() => this.attachAll(), 3000);
    // Voice list nạp async (Chrome) — xoá cache khi danh sách đổi.
    try { speechSynthesis.addEventListener('voiceschanged', () => { this._voices = {}; }); } catch {}
  }
  injectCss() {
    if (document.getElementById('tz-tts-css')) return;
    const s = document.createElement('style');
    s.id = 'tz-tts-css'; s.textContent = CSS;
    document.head.appendChild(s);
  }
  mount() {
    const btn = document.createElement('button');
    btn.className = 'tz-tts-toggle' + (this.enabled ? ' on' : '');
    btn.title = 'Bật/tắt đọc to (TTS)';
    btn.textContent = '🔊';
    btn.addEventListener('click', () => this.toggleAll());
    document.body.appendChild(btn);
    this.toggleBtn = btn;
  }
  toggleAll() {
    this.enabled = !this.enabled;
    localStorage.setItem(KEY_ON, this.enabled ? '1' : '0');
    this.toggleBtn.classList.toggle('on', this.enabled);
    if (!this.enabled) speechSynthesis.cancel();
    this.attachAll();
  }
  attachAll() {
    if (!this.enabled) {
      document.querySelectorAll('.tz-tts-btn').forEach(b => b.remove());
      return;
    }
    document.querySelectorAll('[data-tts], .lesson-text, .question, .q-text').forEach(el => {
      if (el.querySelector(':scope > .tz-tts-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'tz-tts-btn';
      btn.type = 'button';
      btn.title = 'Đọc to';
      btn.textContent = '🔊';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.speak(el.textContent || el.innerText, btn);
      });
      el.appendChild(btn);
    });
  }
  // Chọn giọng theo CHẤT LƯỢNG (trước đây không chọn → trình duyệt dùng giọng
  // mặc định OS, thường robot). Ưu tiên: Natural (Edge neural) > Google (Chrome)
  // > Enhanced/Premium > thường; trừ điểm compact. Cùng thuật toán với
  // engine/preschool-ui.js + web-next/lib/tts.ts — đổi thì đổi cả ba.
  pickVoice(prefix) {
    this._voices = this._voices || {};
    if (this._voices[prefix] !== undefined) return this._voices[prefix];
    const all = speechSynthesis.getVoices();
    if (!all.length) return null;
    const rank = (v) => {
      const n = (v.name || '').toLowerCase();
      const lang = (v.lang || '').toLowerCase().replace('_', '-');
      if (!lang.startsWith(prefix)) return -1e9;
      let s = 0;
      if (/natural/.test(n)) s += 120; else if (/online/.test(n)) s += 30;
      if (/google/.test(n)) s += 80;
      if (/enhanced|premium/.test(n)) s += 40;
      if (/compact|espeak|eloquence/.test(n)) s -= 60;
      if (!v.localService) s += 10;
      if (lang === prefix + '-vn' || lang === 'en-us') s += 15;
      return s;
    };
    const best = all.map(v => [rank(v), v]).sort((a, b) => b[0] - a[0])[0];
    this._voices[prefix] = best && best[0] > -1e9 ? best[1] : null;
    return this._voices[prefix];
  }
  speak(text, btn) {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt không hỗ trợ đọc to.');
      return;
    }
    speechSynthesis.cancel();
    document.querySelectorAll('.tz-tts-btn.speaking, .tz-tts-toggle.speaking').forEach(b => b.classList.remove('speaking'));
    const isEn = document.documentElement.lang === 'en';
    const voice = this.pickVoice(isEn ? 'en' : 'vi');
    // Chia câu: né bug Chrome cắt utterance dài (~15s) + ngắt nghỉ tự nhiên hơn.
    const clean = this.cleanText(text);
    const chunks = clean.length <= 200
      ? [clean]
      : (clean.match(/[^.!?…;:\n]+[.!?…;:\n]*/g) || [clean]).reduce((acc, p) => {
          const last = acc[acc.length - 1];
          if (last !== undefined && (last + p).length <= 200) acc[acc.length - 1] = last + p;
          else acc.push(p);
          return acc;
        }, []);
    if (btn) btn.classList.add('speaking');
    this.toggleBtn.classList.add('speaking');
    const done = () => {
      if (btn) btn.classList.remove('speaking');
      this.toggleBtn.classList.remove('speaking');
    };
    chunks.forEach((c, i) => {
      const u = new SpeechSynthesisUtterance(c.trim());
      u.lang = isEn ? 'en-US' : 'vi-VN';
      u.rate = 0.97;
      u.pitch = 1.0; // ép pitch làm giọng neural méo như robot
      if (voice) u.voice = voice;
      if (i === chunks.length - 1) u.onend = u.onerror = done;
      speechSynthesis.speak(u);
    });
  }
  cleanText(text) {
    return String(text || '').replace(/[🔊🦉🐲🏆🎁🪙✨🎯📚📐🇬🇧]/g, '').replace(/\s+/g, ' ').trim();
  }
}

function autoMount() {
  if (window.__tziaTTS) return;
  window.__tziaTTS = new TTSReader();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoMount);
} else {
  autoMount();
}

window.__tziaSpeak = (text) => window.__tziaTTS?.speak(text);
export { TTSReader };
