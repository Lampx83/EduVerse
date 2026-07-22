// ─────────────────────────────────────────────────────────────────────────
// TTS dùng chung cho web-next — Web Speech API nhưng CHỌN GIỌNG THEO CHẤT
// LƯỢNG thay vì "giọng đầu tiên tìm thấy" (thường là giọng compact robot).
//
// Xếp hạng (cao → thấp):
//   1. Giọng neural "Natural/Online" (Edge: HoaiMy/NamMinh — rất tự nhiên)
//   2. Giọng Google server (Chrome: "Google Tiếng Việt")
//   3. Giọng nâng cao cài máy (macOS "Linh (Enhanced)"/Premium)
//   4. Giọng thường; trừ điểm giọng "compact"/eSpeak (robot nặng)
// Kèm: pitch mặc định 1.0 (ép pitch cao làm giọng neural méo như robot),
// chia câu khi text dài (né bug Chrome cắt utterance ~15s, nghe đỡ đều đều).
// Bản vanilla tương ứng: public/js/engine/preschool-ui.js + tts-reader.js —
// đổi thuật toán xếp hạng thì đổi CẢ HAI nơi.
// ─────────────────────────────────────────────────────────────────────────

const cache: Record<string, SpeechSynthesisVoice | null> = {};

function rank(v: SpeechSynthesisVoice, langPrefix: string): number {
  const n = (v.name || '').toLowerCase();
  const lang = (v.lang || '').toLowerCase().replace('_', '-');
  let s = 0;
  if (!lang.startsWith(langPrefix)) return -1e9; // sai ngôn ngữ → loại
  if (/natural/.test(n)) s += 120;               // Edge neural
  else if (/online/.test(n)) s += 30;
  if (/google/.test(n)) s += 80;                 // Chrome Google TTS
  if (/enhanced|premium|siri/.test(n)) s += 40;  // giọng nâng cao cài máy
  if (/compact|espeak|eloquence/.test(n)) s -= 60;
  if (!v.localService) s += 10;                  // giọng cloud thường tốt hơn
  if (langPrefix === 'vi' && lang === 'vi-vn') s += 15;
  if (langPrefix === 'en' && (lang === 'en-us' || lang === 'en-gb')) s += 15;
  if (v.default) s += 3;
  return s;
}

/** Giọng tốt nhất cho ngôn ngữ ('vi' | 'en'). Cache; tự làm mới khi voiceschanged. */
export function pickVoice(langPrefix: 'vi' | 'en' = 'vi'): SpeechSynthesisVoice | null {
  if (typeof speechSynthesis === 'undefined') return null;
  if (cache[langPrefix] !== undefined) return cache[langPrefix];
  const all = speechSynthesis.getVoices();
  if (!all.length) return null; // chưa nạp xong — đừng cache
  const best = all
    .map((v) => [rank(v, langPrefix), v] as const)
    .sort((a, b) => b[0] - a[0])[0];
  cache[langPrefix] = best && best[0] > -1e9 ? best[1] : null;
  return cache[langPrefix];
}

if (typeof speechSynthesis !== 'undefined') {
  try {
    speechSynthesis.addEventListener('voiceschanged', () => {
      delete cache.vi;
      delete cache.en;
      pickVoice('vi');
    });
    pickVoice('vi');
  } catch {}
}

// Chia câu để né bug Chrome cắt utterance dài (~15s) và ngắt nghỉ tự nhiên hơn.
function chunkText(text: string): string[] {
  if (text.length <= 200) return [text];
  const parts = text.match(/[^.!?…;:\n]+[.!?…;:\n]*/g) || [text];
  const out: string[] = [];
  let buf = '';
  for (const p of parts) {
    if ((buf + p).length > 200 && buf) {
      out.push(buf.trim());
      buf = p;
    } else buf += p;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

export type SpeakOpts = {
  lang?: 'vi' | 'en';
  rate?: number;
  pitch?: number;
  cancel?: boolean;       // mặc định true — dừng câu đang đọc
  onend?: () => void;
};

/** Đọc to text. Bỏ emoji; chọn giọng tốt nhất; chia câu nếu dài. */
export function speak(text: string, opts: SpeakOpts = {}) {
  if (typeof speechSynthesis === 'undefined') return;
  try {
    const clean = String(text || '')
      .replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}]/gu, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!clean) return;
    if (opts.cancel !== false) speechSynthesis.cancel();
    const lang = opts.lang ?? 'vi';
    const v = pickVoice(lang);
    const chunks = chunkText(clean);
    chunks.forEach((c, i) => {
      const u = new SpeechSynthesisUtterance(c);
      u.lang = lang === 'en' ? 'en-US' : 'vi-VN';
      u.rate = opts.rate ?? 0.95;
      u.pitch = opts.pitch ?? 1.0; // 1.0 — ép pitch cao làm giọng máy méo
      if (v) u.voice = v;
      if (i === chunks.length - 1 && opts.onend) u.onend = opts.onend;
      speechSynthesis.speak(u);
    });
  } catch {}
}

/** Dừng mọi phát âm. */
export function stopSpeaking() {
  try {
    speechSynthesis.cancel();
  } catch {}
}
