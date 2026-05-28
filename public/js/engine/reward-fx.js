// ============================================================
// Reward FX — celebratory overlay after each lesson
// ============================================================
// showRewardOverlay({ result, award, wallet }) → Promise<void>
//   result: AssessmentResult  { stars, score }
//   award:  awardForResult()  { coinsGained, xpGained, levelBefore,
//                               levelAfter, levelUp, questsCompleted, unlocked }
//   wallet: post-award wallet  (for level bar + totals)
//
// Self-contained: injects its own CSS, draws confetti on a canvas,
// plays lightweight WebAudio blips (respects KEYS.SFX = 'off').
// ============================================================

import { KEYS, lsGet } from './storage.js';
import { levelInfo, rankFor, avatarFor } from './gamification.js';

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
  .rfx-backdrop {
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(8,11,25,0.78); backdrop-filter: blur(6px);
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transition: opacity .25s ease;
  }
  .rfx-backdrop.show { opacity: 1; }
  .rfx-canvas { position: fixed; inset: 0; pointer-events: none; z-index: 10000; }
  .rfx-card {
    position: relative; z-index: 10001; width: min(420px, 92vw);
    background: linear-gradient(160deg,#1b2140,#2a1d4d);
    border: 1px solid rgba(255,255,255,.14); border-radius: 22px;
    padding: 26px 24px 20px; color: #fff; text-align: center;
    box-shadow: 0 24px 70px rgba(0,0,0,.55);
    transform: translateY(18px) scale(.96); opacity: 0;
    transition: transform .3s cubic-bezier(.2,.9,.3,1.3), opacity .3s;
  }
  .rfx-backdrop.show .rfx-card { transform: translateY(0) scale(1); opacity: 1; }
  .rfx-title { font-size: 13px; letter-spacing: .12em; text-transform: uppercase; opacity: .7; }
  .rfx-stars { font-size: 46px; letter-spacing: 6px; margin: 6px 0 2px; line-height: 1; }
  .rfx-stars .s { display: inline-block; transform: scale(0) rotate(-40deg); transition: transform .4s cubic-bezier(.2,.9,.3,1.6); }
  .rfx-stars .s.on { transform: scale(1) rotate(0); }
  .rfx-score { font-size: 15px; opacity: .85; }
  .rfx-rows { margin: 16px 0 10px; display: flex; flex-direction: column; gap: 9px; }
  .rfx-row {
    display: flex; align-items: center; justify-content: space-between;
    background: rgba(255,255,255,.06); border-radius: 12px; padding: 9px 14px;
    font-size: 15px; font-weight: 700;
  }
  .rfx-row .rfx-ic { font-size: 18px; }
  .rfx-gain { color: #4ade80; font-variant-numeric: tabular-nums; }
  .rfx-levelwrap { margin-top: 12px; text-align: left; }
  .rfx-levelhead { display: flex; justify-content: space-between; font-size: 12.5px; opacity: .85; margin-bottom: 5px; }
  .rfx-bar { height: 12px; border-radius: 8px; background: rgba(255,255,255,.12); overflow: hidden; }
  .rfx-bar > i { display: block; height: 100%; width: 0%;
    background: linear-gradient(90deg,#8b5cf6,#22d3ee); border-radius: 8px;
    transition: width 1.1s cubic-bezier(.2,.8,.2,1); }
  .rfx-levelup {
    margin: 14px auto 2px; font-weight: 900; font-size: 19px;
    color: #fde047; text-shadow: 0 0 18px rgba(253,224,71,.6);
    animation: rfx-pop .5s cubic-bezier(.2,.9,.3,1.6);
  }
  @keyframes rfx-pop { 0%{transform:scale(0);opacity:0} 60%{transform:scale(1.25)} 100%{transform:scale(1);opacity:1} }
  .rfx-badges { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 12px; }
  .rfx-badge {
    display: flex; align-items: center; gap: 6px; font-size: 12.5px; font-weight: 700;
    background: rgba(251,191,36,.16); border: 1px solid rgba(251,191,36,.4);
    color: #fde68a; padding: 6px 10px; border-radius: 999px;
    animation: rfx-pop .45s cubic-bezier(.2,.9,.3,1.6) backwards;
  }
  .rfx-quests { margin-top: 10px; display: flex; flex-direction: column; gap: 6px; }
  .rfx-quest {
    font-size: 12.5px; font-weight: 700; color: #86efac;
    background: rgba(34,197,94,.12); border-radius: 10px; padding: 6px 10px;
    animation: rfx-pop .45s cubic-bezier(.2,.9,.3,1.6) backwards;
  }
  .rfx-btn {
    margin-top: 18px; width: 100%; padding: 12px; border: 0; cursor: pointer;
    border-radius: 12px; font-size: 15px; font-weight: 800; color: #1f1147;
    background: linear-gradient(90deg,#fbbf24,#f59e0b);
  }
  .rfx-btn:hover { filter: brightness(1.06); }
  @media (prefers-reduced-motion: reduce) {
    .rfx-card,.rfx-bar>i,.rfx-stars .s { transition: none; }
    .rfx-levelup,.rfx-badge,.rfx-quest { animation: none; }
  }`;
  const tag = document.createElement('style');
  tag.textContent = css;
  document.head.appendChild(tag);
}

// ── Lightweight sound (WebAudio) ──
let _audio = null;
function sfxEnabled() { return (lsGet(KEYS.SFX) || 'on') !== 'off'; }
function blip(freq, t0, dur = 0.12, type = 'triangle', gain = 0.08) {
  if (!sfxEnabled()) return;
  try {
    _audio = _audio || new (window.AudioContext || window.webkitAudioContext)();
    const ctx = _audio;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    o.connect(g); g.connect(ctx.destination);
    const start = ctx.currentTime + t0;
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(gain, start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.start(start); o.stop(start + dur + 0.02);
  } catch {}
}
function playWinChime(stars, levelUp) {
  const notes = [523, 659, 784, 1047]; // C E G C
  for (let i = 0; i < Math.max(2, stars + 1); i++) blip(notes[i % notes.length], i * 0.09);
  if (levelUp) { blip(880, 0.5, 0.18, 'sawtooth', 0.06); blip(1318, 0.62, 0.22, 'sawtooth', 0.06); }
}

// ── Confetti ──
function confettiBurst(canvas, opts = {}) {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return () => {};
  const ctx = canvas.getContext('2d');
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  const resize = () => { canvas.width = innerWidth * DPR; canvas.height = innerHeight * DPR; };
  resize();
  const colors = ['#fbbf24', '#f472b6', '#22d3ee', '#4ade80', '#a78bfa', '#fb7185'];
  const N = opts.count || 120;
  const cx = innerWidth * DPR / 2, cy = innerHeight * DPR * 0.4;
  const parts = Array.from({ length: N }, () => {
    const a = Math.random() * Math.PI * 2;
    const sp = (4 + Math.random() * 9) * DPR;
    return {
      x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 6 * DPR,
      g: 0.28 * DPR, w: (5 + Math.random() * 6) * DPR, h: (8 + Math.random() * 8) * DPR,
      rot: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
      c: colors[(Math.random() * colors.length) | 0], life: 1,
    };
  });
  let raf, frames = 0;
  const tick = () => {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of parts) {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      p.life -= 0.006;
      ctx.save(); ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    if (frames < 260) raf = requestAnimationFrame(tick);
  };
  tick();
  return () => cancelAnimationFrame(raf);
}

function countUp(el, to, dur = 900) {
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = '+' + Math.round(to * eased);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/**
 * @param {{result:object, award:object, wallet:object}} payload
 * @returns {Promise<void>} resolves when the user closes the overlay
 */
export function showRewardOverlay({ result, award, wallet }) {
  injectStyles();
  const stars = Math.max(0, Math.min(3, result?.stars ?? 0));
  const score = Math.round(result?.score ?? 0);
  const coins = award?.coinsGained ?? 0;
  const xp = award?.xpGained ?? 0;
  const levelUp = !!award?.levelUp;
  const li = levelInfo(wallet?.xp ?? 0);
  const { rank } = rankFor(li.level);
  const avatar = avatarFor(li.level);
  const badges = award?.unlocked || [];
  const quests = award?.questsCompleted || [];

  const headline = stars >= 3 ? 'Hoàn hảo!' : stars >= 1 ? 'Làm tốt lắm!' : 'Cố lên nhé!';

  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.className = 'rfx-canvas';
    const backdrop = document.createElement('div');
    backdrop.className = 'rfx-backdrop';
    backdrop.innerHTML = `
      <div class="rfx-card" role="dialog" aria-modal="true" aria-label="Kết quả bài học">
        <div class="rfx-title">${headline}</div>
        <div class="rfx-stars">${'<span class="s">★</span>'.repeat(3)}</div>
        <div class="rfx-score">${score}/100 điểm</div>
        <div class="rfx-rows">
          <div class="rfx-row"><span><span class="rfx-ic">🪙</span> Coin</span><span class="rfx-gain" data-coin>+0</span></div>
          <div class="rfx-row"><span><span class="rfx-ic">⚡</span> XP</span><span class="rfx-gain" data-xp>+0</span></div>
        </div>
        ${levelUp ? `<div class="rfx-levelup">${avatar} LÊN CẤP ${li.level}! · ${rank.icon} ${rank.name}</div>` : ''}
        <div class="rfx-levelwrap">
          <div class="rfx-levelhead"><span>${rank.icon} Cấp ${li.level}</span><span>${li.intoLevel}/${li.span} XP</span></div>
          <div class="rfx-bar"><i data-bar></i></div>
        </div>
        ${quests.length ? `<div class="rfx-quests">${quests.map((q, i) =>
          `<div class="rfx-quest" style="animation-delay:${i * .08}s">🎯 Hoàn thành: ${q.label} (+${q.reward.xp} XP)</div>`).join('')}</div>` : ''}
        ${badges.length ? `<div class="rfx-badges">${badges.map((b, i) =>
          `<span class="rfx-badge" style="animation-delay:${i * .1}s">${b.icon} ${b.title}</span>`).join('')}</div>` : ''}
        <button class="rfx-btn" data-close>Tiếp tục →</button>
      </div>`;

    document.body.appendChild(canvas);
    document.body.appendChild(backdrop);
    requestAnimationFrame(() => backdrop.classList.add('show'));

    // Reveal stars one-by-one
    const starEls = backdrop.querySelectorAll('.rfx-stars .s');
    starEls.forEach((s, i) => {
      if (i < stars) setTimeout(() => { s.classList.add('on'); blip([523, 659, 784][i] || 880, 0); }, 260 + i * 220);
    });

    // Count-ups + bar fill + sound
    setTimeout(() => {
      countUp(backdrop.querySelector('[data-coin]'), coins);
      countUp(backdrop.querySelector('[data-xp]'), xp);
      const bar = backdrop.querySelector('[data-bar]');
      requestAnimationFrame(() => { bar.style.width = li.pct + '%'; });
    }, 320 + stars * 160);

    let stopConfetti = () => {};
    if (stars >= 1) { stopConfetti = confettiBurst(canvas, { count: levelUp ? 180 : 110 }); }
    playWinChime(stars, levelUp);

    const close = () => {
      stopConfetti();
      backdrop.classList.remove('show');
      setTimeout(() => { backdrop.remove(); canvas.remove(); resolve(); }, 260);
    };
    backdrop.querySelector('[data-close]').addEventListener('click', close);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) close(); });
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Enter' || e.key === 'Escape') { document.removeEventListener('keydown', onKey); close(); }
    });
  });
}
