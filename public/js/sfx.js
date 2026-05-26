// Synthesized sound effects via WebAudio API.
// No audio files needed — every sound is generated procedurally.

let ctx = null;
let enabled = true;

const SFX_KEY = 'pharmacysim:sfx';
try { enabled = localStorage.getItem(SFX_KEY) !== 'off'; } catch {}

export function isSfxEnabled() { return enabled; }
export function toggleSfx() {
  enabled = !enabled;
  try { localStorage.setItem(SFX_KEY, enabled ? 'on' : 'off'); } catch {}
  return enabled;
}

function ensureCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

function tone({ freq = 440, dur = 0.1, type = 'sine', gain = 0.15, attack = 0.005, decay = null }) {
  if (!enabled) return;
  const c = ensureCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = 0;
  osc.connect(g).connect(c.destination);
  const t0 = c.currentTime;
  g.gain.linearRampToValueAtTime(gain, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + (decay || dur));
  osc.start(t0);
  osc.stop(t0 + (decay || dur) + 0.05);
}

function sweep({ from = 200, to = 800, dur = 0.18, gain = 0.16, type = 'sine' }) {
  if (!enabled) return;
  const c = ensureCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, c.currentTime);
  osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), c.currentTime + dur);
  g.gain.value = 0;
  osc.connect(g).connect(c.destination);
  g.gain.linearRampToValueAtTime(gain, c.currentTime + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
  osc.start();
  osc.stop(c.currentTime + dur + 0.05);
}

export const sfx = {
  grab()    { tone({ freq: 660, dur: 0.06, type: 'triangle', gain: 0.12 }); },
  release() { tone({ freq: 440, dur: 0.05, type: 'triangle', gain: 0.10 }); },
  correct() { sweep({ from: 520, to: 1040, dur: 0.18, type: 'sine', gain: 0.18 }); setTimeout(() => sweep({ from: 780, to: 1560, dur: 0.16, type: 'sine', gain: 0.15 }), 100); },
  wrong()   { sweep({ from: 320, to: 120, dur: 0.30, type: 'sawtooth', gain: 0.18 }); },
  open()    { sweep({ from: 200, to: 700, dur: 0.45, type: 'square', gain: 0.10 }); },
  perfect() {
    // Triumphant arpeggio C-E-G-C
    const notes = [523, 659, 784, 1047];
    notes.forEach((f, i) => setTimeout(() => tone({ freq: f, dur: 0.20, type: 'sine', gain: 0.20 }), i * 110));
  },
  tick()    { tone({ freq: 880, dur: 0.04, type: 'sine', gain: 0.08 }); },
  join()    { tone({ freq: 720, dur: 0.08, type: 'triangle', gain: 0.12 }); setTimeout(() => tone({ freq: 1080, dur: 0.08, type: 'triangle', gain: 0.10 }), 70); },
  leave()   { tone({ freq: 540, dur: 0.08, type: 'triangle', gain: 0.10 }); setTimeout(() => tone({ freq: 360, dur: 0.10, type: 'triangle', gain: 0.10 }), 70); },
  badge()   {
    const notes = [659, 880, 1175];
    notes.forEach((f, i) => setTimeout(() => tone({ freq: f, dur: 0.18, type: 'triangle', gain: 0.16 }), i * 80));
  },
};
