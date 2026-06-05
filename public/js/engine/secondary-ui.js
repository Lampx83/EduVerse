// ============================================================
// Secondary/Highschool UI — render khối lab-vibe cho THCS/THPT.
// Triết lý: SIMULATOR-STYLE, không "bé giỏi quá" như mầm non.
// Render được:
//   - renderHazardScene(host, items, onDone): scene 2D, click vùng nguy hiểm.
//   - renderMemoryMatch(host, pairs, onDone): lật cặp, timer + best.
//   - renderDayPlanner(host, tasks, onDone): kéo task vào time-slot.
// ============================================================

let _secStyled = false;
function injectSecondaryStyles() {
  if (_secStyled || typeof document === 'undefined') return;
  _secStyled = true;
  const css = `
  /* ── Hazard Scene ── */
  .hzx-wrap { display:flex; flex-direction:column; gap:12px; }
  .hzx-head { display:flex; align-items:center; gap:10px; flex-wrap:wrap; font-size:14px; }
  .hzx-badge { background:rgba(245,158,11,.15); border:1px solid rgba(245,158,11,.5);
    color:#fcd34d; padding:3px 10px; border-radius:999px; font-weight:700; font-size:12px; }
  .hzx-prog { margin-left:auto; font-size:13px; opacity:.85; }
  .hzx-prog b { color:#22c55e; }
  .hzx-task { background:rgba(14,165,233,.12); border-left:3px solid #0ea5e9;
    padding:9px 14px; border-radius:8px; font-size:14px; line-height:1.5; }
  .hzx-stage { position:relative; width:100%; aspect-ratio: 16/10; border-radius:14px;
    background:
      radial-gradient(circle at 20% 30%, rgba(99,102,241,.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 60%, rgba(245,158,11,.1) 0%, transparent 50%),
      linear-gradient(180deg, #1e293b, #0f172a);
    border:1px solid rgba(255,255,255,.1); overflow:hidden;
    box-shadow: inset 0 0 30px rgba(0,0,0,.4); }
  .hzx-stage.shake { animation: hzxShake .35s ease; }
  @keyframes hzxShake { 0%,100%{transform:translateX(0)} 25%{transform:translateX(-8px)} 75%{transform:translateX(8px)} }
  /* Items rải đều trong scene — pos = vị trí phần trăm */
  .hzx-spot { position:absolute; transform:translate(-50%,-50%);
    width:62px; height:62px; border-radius:50%; cursor:pointer; border:none;
    background:rgba(15,23,42,.7); border:2px dashed rgba(255,255,255,.35);
    color:#fff; font-size:32px; display:flex; align-items:center; justify-content:center;
    transition: transform .15s, background .15s, border-color .15s; }
  .hzx-spot:hover { transform:translate(-50%,-50%) scale(1.12);
    border-color:#fcd34d; background:rgba(245,158,11,.25); }
  .hzx-spot.found { background:rgba(34,197,94,.35); border-color:#22c55e; border-style:solid;
    animation: hzxPop .5s cubic-bezier(.2,.9,.3,1.6); cursor:default; }
  @keyframes hzxPop { 40%{transform:translate(-50%,-50%) scale(1.3)} 100%{transform:translate(-50%,-50%) scale(1)} }
  .hzx-spot.zap { background:rgba(239,68,68,.5); border-color:#ef4444;
    animation: hzxZap .4s ease; }
  @keyframes hzxZap { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-50%) scale(1.25); box-shadow:0 0 0 12px rgba(239,68,68,.3)} }
  .hzx-label { position:absolute; bottom:-24px; left:50%; transform:translateX(-50%);
    white-space:nowrap; font-size:11px; background:rgba(0,0,0,.7); padding:2px 8px; border-radius:6px;
    opacity:0; transition: opacity .2s; pointer-events:none; }
  .hzx-spot.found .hzx-label { opacity:1; color:#bbf7d0; }
  .hzx-feedback { font-size:14px; min-height:1.4em; }
  .hzx-feedback.ok { color:#22c55e; }
  .hzx-feedback.bad { color:#ef4444; }

  /* ── Memory Match ── */
  .mmx-wrap { display:flex; flex-direction:column; gap:12px; }
  .mmx-head { display:flex; gap:14px; flex-wrap:wrap; align-items:center; font-size:13px; }
  .mmx-stat { background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12);
    padding:5px 12px; border-radius:999px; font-weight:700; }
  .mmx-grid { display:grid; gap:10px; grid-template-columns: repeat(4, 1fr); }
  @media (min-width: 720px) { .mmx-grid { grid-template-columns: repeat(6, 1fr); } }
  .mmx-card { perspective: 800px; aspect-ratio: 3/4; cursor: pointer; }
  .mmx-card-inner { position:relative; width:100%; height:100%; transition: transform .45s;
    transform-style: preserve-3d; }
  .mmx-card.flipped .mmx-card-inner { transform: rotateY(180deg); }
  .mmx-card.matched .mmx-card-inner { transform: rotateY(180deg); }
  .mmx-face { position:absolute; inset:0; border-radius:12px; display:flex; align-items:center; justify-content:center;
    backface-visibility:hidden; padding:6px; text-align:center; font-weight:700; box-shadow:0 4px 10px rgba(0,0,0,.3); }
  .mmx-front { background: linear-gradient(135deg,#6366f1,#3b82f6); color:#fff; font-size:30px; }
  .mmx-back { background: linear-gradient(135deg,#fef3c7,#fde68a); color:#1f1147;
    font-size:13px; line-height:1.3; transform: rotateY(180deg); padding:8px; }
  .mmx-card.matched .mmx-back { background: linear-gradient(135deg,#bbf7d0,#34d399); color:#06281a; }
  .mmx-card.matched { pointer-events: none; }
  .mmx-done { padding:18px; background:rgba(34,197,94,.12); border:1px solid #22c55e;
    border-radius:12px; text-align:center; font-size:15px; }

  /* ── Day Planner ── */
  .dpx-wrap { display:flex; flex-direction:column; gap:14px; }
  .dpx-hint { font-size:13.5px; opacity:.85; line-height:1.5; }
  .dpx-pool { background:rgba(255,255,255,.04); border:1px dashed rgba(255,255,255,.18);
    padding:10px; border-radius:12px; min-height:60px; display:flex; flex-wrap:wrap; gap:8px;
    align-items:flex-start; }
  .dpx-pool.empty::after { content:'(Kéo hết task xuống các khung giờ bên dưới)';
    opacity:.5; font-size:12px; align-self:center; margin:auto; }
  .dpx-slots { display:grid; gap:10px; grid-template-columns: 1fr 1fr; }
  @media (min-width: 720px) { .dpx-slots { grid-template-columns: repeat(4,1fr); } }
  .dpx-slot { background:rgba(99,102,241,.08); border:2px solid rgba(99,102,241,.3);
    border-radius:14px; padding:10px; min-height:120px; }
  .dpx-slot.dragover { background:rgba(99,102,241,.2); border-color:#6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,.25); }
  .dpx-slot h5 { margin:0 0 8px; font-size:13px; font-weight:800; display:flex; gap:6px; align-items:center; }
  .dpx-slot .items { display:flex; flex-direction:column; gap:6px; }
  .dpx-task { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15);
    padding:7px 11px; border-radius:8px; font-size:13px; cursor:grab; user-select:none;
    transition: transform .12s, background .12s; }
  .dpx-task:hover { background:rgba(255,255,255,.14); }
  .dpx-task:active { cursor:grabbing; }
  .dpx-task.dragging { opacity:.4; }
  .dpx-task.placed-right { background: rgba(34,197,94,.2); border-color:#22c55e; }
  .dpx-task.placed-wrong { background: rgba(239,68,68,.2); border-color:#ef4444; }
  .dpx-actions { display:flex; gap:10px; align-items:center; }
  .dpx-actions .dpx-btn { padding:9px 18px; border:none; border-radius:8px; cursor:pointer;
    font-family:inherit; font-size:13.5px; font-weight:700; color:#fff;
    background:#6366f1; }
  .dpx-actions .dpx-btn.ghost { background:rgba(255,255,255,.08); }
  .dpx-actions .dpx-score { margin-left:auto; font-weight:800; font-size:14px; }

  /* ── Experiment Stages — quy trình thí nghiệm theo bước ── */
  .esx-wrap { display:flex; flex-direction:column; gap:14px; padding:6px 0; }
  .esx-head { display:flex; align-items:center; gap:10px; flex-wrap:wrap; font-size:14px; }
  .esx-badge { background:rgba(14,165,233,.18); border:1px solid rgba(14,165,233,.5);
    color:#bae6fd; padding:3px 10px; border-radius:999px; font-weight:700; font-size:12px; }
  .esx-stepbar { display:grid; gap:4px; grid-auto-flow:column;
    grid-auto-columns: 1fr; padding:6px 0; }
  .esx-pill { padding:6px 4px; border-radius:8px; font-size:11.5px; font-weight:700;
    background: rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12);
    text-align:center; opacity:.55; transition: all .2s; }
  .esx-pill.active { background: linear-gradient(135deg,#0ea5e9,#6366f1); color:#fff;
    border-color: transparent; opacity:1; transform: scale(1.04); }
  .esx-pill.done { background: rgba(34,197,94,.2); border-color:#22c55e; color:#bbf7d0; opacity:1; }
  .esx-panel { background: linear-gradient(135deg, rgba(14,165,233,.08), rgba(99,102,241,.06));
    border: 1px solid rgba(255,255,255,.14); border-radius:14px; padding: 18px 20px;
    min-height: 140px; animation: esxFade .25s ease; }
  @keyframes esxFade { from { opacity:0; transform: translateY(4px) } to { opacity:1; transform:none } }
  .esx-step-num { display:inline-block; background:#0ea5e9; color:#fff; font-weight:800;
    padding:3px 10px; border-radius:999px; font-size:12px; margin-bottom:8px; }
  .esx-step-title { font-size:18px; font-weight:800; margin-bottom:6px; }
  .esx-step-body { font-size:14.5px; line-height:1.55; opacity:.92; }
  .esx-actions { display:flex; gap:10px; align-items:center; }
  .esx-actions .esx-btn { padding:9px 18px; border:none; border-radius:8px; cursor:pointer;
    font-family:inherit; font-size:13.5px; font-weight:700; color:#fff;
    background:#6366f1; }
  .esx-actions .esx-btn:disabled { opacity:.45; cursor:not-allowed; }
  .esx-actions .esx-btn.ghost { background:rgba(255,255,255,.08); }
  .esx-actions .esx-btn.primary { background: linear-gradient(90deg,#fbbf24,#f59e0b); color:#1f1147; }
  .esx-progress { margin-left:auto; font-weight:800; font-size:13.5px; opacity:.85; }
  .esx-done-banner { padding: 14px 18px;
    background: linear-gradient(135deg, rgba(34,197,94,.22), rgba(14,165,233,.16));
    border:1px solid #22c55e; border-radius:14px; text-align:center;
    font-size:15px; font-weight:800; color:#bbf7d0; display:none; }
  .esx-done-banner.show { display:block; animation: esxFade .35s ease; }

  /* ── Procedure Sort — kéo bước vào đúng thứ tự ── */
  .psx-wrap { display:flex; flex-direction:column; gap:12px; padding:6px 0; }
  .psx-hint { font-size:13.5px; opacity:.85; line-height:1.5; }
  .psx-pool { background:rgba(255,255,255,.04); border:1px dashed rgba(255,255,255,.18);
    padding:10px; border-radius:12px; min-height:60px; display:flex; flex-direction:column; gap:8px; }
  .psx-slots { display:flex; flex-direction:column; gap:8px; counter-reset: ps; }
  .psx-slot { background:rgba(99,102,241,.08); border:2px solid rgba(99,102,241,.3);
    border-radius:12px; padding:10px 14px; min-height:54px;
    display:flex; align-items:center; gap:12px; }
  .psx-slot::before { counter-increment: ps; content: counter(ps);
    flex:none; width:34px; height:34px; border-radius:50%; background:#1e293b;
    display:flex; align-items:center; justify-content:center;
    font-weight:800; font-size:14px; color:#bae6fd; }
  .psx-slot.filled { background:rgba(99,102,241,.16); }
  .psx-slot.dragover { border-color:#6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,.25); }
  .psx-step { background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18);
    padding:8px 12px; border-radius:8px; font-size:13.5px; cursor:grab; user-select:none; flex:1; }
  .psx-step:active { cursor:grabbing; }
  .psx-step.dragging { opacity:.4; }
  .psx-step.right { background: rgba(34,197,94,.2); border-color:#22c55e; }
  .psx-step.wrong { background: rgba(239,68,68,.2); border-color:#ef4444; }

  /* ── Formula Calculator — slider tương tác ── */
  .fcx-wrap { display:flex; flex-direction:column; gap:14px; padding:6px 0; }
  .fcx-formula { text-align:center; font-family: 'JetBrains Mono','SF Mono',monospace;
    font-size: 20px; font-weight:700;
    background: linear-gradient(135deg, rgba(251,191,36,.14), rgba(99,102,241,.08));
    border:1px solid rgba(251,191,36,.35); border-radius:14px; padding: 14px 18px; }
  .fcx-vars { display:grid; gap:14px; grid-template-columns: 1fr; }
  @media (min-width: 600px) { .fcx-vars { grid-template-columns: 1fr 1fr; } }
  .fcx-var { background: rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.12);
    padding: 12px 14px; border-radius: 12px; }
  .fcx-var label { font-size:13.5px; font-weight:700; opacity:.92; display:flex; gap:8px; align-items:center; }
  .fcx-var .v { margin-left:auto; font-family:'JetBrains Mono',monospace; font-weight:800;
    color:#fde047; background: rgba(0,0,0,.25); padding:2px 9px; border-radius:6px; }
  .fcx-var input[type=range] { width:100%; margin-top:8px; accent-color:#fbbf24; }
  .fcx-result { background: linear-gradient(135deg,#16a34a,#0ea5e9);
    color:#fff; padding:14px 18px; border-radius:14px; text-align:center;
    font-family:'JetBrains Mono',monospace; font-size:18px; font-weight:800;
    box-shadow: 0 6px 18px rgba(16,163,74,.25); }
  `;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
}

// ============================================================
// renderHazardScene — click vào nguy cơ trong scene.
// items: [{ label, ok: true|false, x?, y?, emoji? }]
// Nếu không có x/y → tự rải đều trong scene.
// ============================================================
export function renderHazardScene(host, items, onDone) {
  injectSecondaryStyles();

  // Item ok=true là nguy cơ thực sự, ok=false là vật an toàn (distractor).
  // Hợp đồng để dùng từ {check} đơn giản: tất cả items đều ok=true (đều là nguy cơ).
  // Nếu muốn có distractor, content khai báo {hazard:{items:[...]}} sẽ rõ ràng hơn.
  const HAZARD_KEYWORDS = /không|tránh|nguy|cẩn|kiểm tra|ngắt|báo|chọn đúng/i;
  // Auto-detect emoji theo keyword.
  const guessEmoji = (s) => {
    if (/phích|cắm|dây/i.test(s)) return '🔌';
    if (/ướt|nước|tay ướt/i.test(s)) return '💧';
    if (/đo|đồng hồ|thang đo/i.test(s)) return '🔬';
    if (/nguồn|ngắt|đóng/i.test(s)) return '⚡';
    if (/báo|gv|giáo viên/i.test(s)) return '📢';
    if (/mạch|lắp/i.test(s)) return '🧰';
    return '⚠️';
  };

  const norm = items.map((it, i) => {
    if (typeof it === 'string') {
      return { label: it, ok: HAZARD_KEYWORDS.test(it), emoji: guessEmoji(it),
               x: 14 + (i % 4) * 24, y: 22 + Math.floor(i / 4) * 32 };
    }
    return {
      label: it.label, ok: it.ok !== false,
      emoji: it.emoji || guessEmoji(it.label || ''),
      x: it.x ?? (14 + (i % 4) * 24),
      y: it.y ?? (22 + Math.floor(i / 4) * 32),
    };
  });
  const targets = norm.filter(it => it.ok).length || norm.length;
  let found = 0;

  const wrap = document.createElement('div');
  wrap.className = 'hzx-wrap';
  wrap.innerHTML = `
    <div class="hzx-head">
      <span class="hzx-badge">⚡ Lab Simulator</span>
      <span>Tìm và bấm vào những điểm cần lưu ý trong phòng thí nghiệm.</span>
      <span class="hzx-prog">Phát hiện: <b data-found>0</b>/${targets}</span>
    </div>
    <div class="hzx-task">🎯 <b>Nhiệm vụ:</b> Bấm vào các vật phẩm thể hiện <b>quy tắc an toàn</b> để xác nhận em đã ghi nhớ.</div>
    <div class="hzx-stage" data-stage>
      ${norm.map((it, i) => `
        <button class="hzx-spot" type="button" data-i="${i}" style="left:${it.x}%; top:${it.y}%;" title="${(it.label||'').replace(/"/g,'&quot;')}">
          <span>${it.emoji}</span>
          <span class="hzx-label">${(it.label||'').replace(/</g,'&lt;')}</span>
        </button>`).join('')}
    </div>
    <div class="hzx-feedback" data-fb></div>
  `;
  host.appendChild(wrap);

  const stage = wrap.querySelector('[data-stage]');
  const fb = wrap.querySelector('[data-fb]');
  const foundEl = wrap.querySelector('[data-found]');

  wrap.querySelectorAll('.hzx-spot').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = Number(btn.dataset.i);
      const it = norm[i];
      if (btn.classList.contains('found') || btn.classList.contains('zap')) return;
      if (it.ok) {
        btn.classList.add('found');
        found++;
        foundEl.textContent = found;
        fb.className = 'hzx-feedback ok';
        fb.textContent = '✓ ' + it.label;
        if (found === targets) {
          fb.textContent = `🏆 Đã rà soát đủ ${targets} nguy cơ — phòng thí nghiệm an toàn!`;
          if (typeof onDone === 'function') setTimeout(() => onDone({ found, targets }), 600);
        }
      } else {
        btn.classList.add('zap');
        stage.classList.add('shake');
        fb.className = 'hzx-feedback bad';
        fb.textContent = '⚠️ Đây không phải quy tắc bắt buộc — đọc lại sách giáo khoa nhé.';
        setTimeout(() => { btn.classList.remove('zap'); stage.classList.remove('shake'); }, 600);
      }
    });
  });
}

// ============================================================
// renderMemoryMatch — lật cặp.
// pairs: [{ key: 'newton2', front: { emoji: '🏃', label: 'Định luật II Newton' }, back: 'F = m·a' }]
// Hoặc dạng đơn giản từ {flash}: [{ e, f, b }] → tự convert.
// ============================================================
export function renderMemoryMatch(host, pairs, onDone) {
  injectSecondaryStyles();

  // Convert {flash}-style nếu cần.
  const norm = pairs.map((p, i) => {
    if (p.e !== undefined || p.f !== undefined) {
      return { key: 'p' + i, frontEmoji: p.e || '📘', frontText: p.f || '', back: p.b || '' };
    }
    return {
      key: p.key || 'p' + i,
      frontEmoji: p.front?.emoji || '📘',
      frontText: p.front?.label || p.front || '',
      back: typeof p.back === 'string' ? p.back : (p.back?.label || ''),
    };
  });

  // Tạo 2N thẻ: thẻ "Q" (front emoji + name) và thẻ "A" (back formula).
  const deck = [];
  norm.forEach(p => {
    deck.push({ key: p.key, side: 'q', emoji: p.frontEmoji, text: p.frontText });
    deck.push({ key: p.key, side: 'a', emoji: '', text: p.back });
  });
  // Shuffle (no Math.random in workflow scripts, OK ở runtime browser).
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  const totalPairs = norm.length;
  let flipped = []; // {card, idx}
  let matched = 0;
  let moves = 0;
  let startTs = 0;
  let timerHandle = null;

  const wrap = document.createElement('div');
  wrap.className = 'mmx-wrap';
  wrap.innerHTML = `
    <div class="mmx-head">
      <span class="mmx-stat">🃏 ${totalPairs} cặp</span>
      <span class="mmx-stat">⏱️ <span data-time>0</span>s</span>
      <span class="mmx-stat">👆 <span data-moves>0</span> lượt</span>
      <span class="mmx-stat" style="margin-left:auto;background:rgba(34,197,94,.15);border-color:#22c55e;">✓ <span data-matched>0</span>/${totalPairs}</span>
    </div>
    <div class="mmx-grid" data-grid>
      ${deck.map((c, i) => `
        <div class="mmx-card" data-i="${i}" data-key="${c.key}" data-side="${c.side}">
          <div class="mmx-card-inner">
            <div class="mmx-face mmx-front">?</div>
            <div class="mmx-face mmx-back">${c.side === 'q'
              ? `<div><div style="font-size:28px;line-height:1">${c.emoji}</div><div style="margin-top:4px;font-size:12px">${(c.text||'').replace(/</g,'&lt;')}</div></div>`
              : `<div style="font-family:'JetBrains Mono','SF Mono',monospace;font-size:14px;">${(c.text||'').replace(/</g,'&lt;')}</div>`
            }</div>
          </div>
        </div>`).join('')}
    </div>
    <div class="mmx-done" style="display:none;" data-doneblock></div>
  `;
  host.appendChild(wrap);

  const timeEl = wrap.querySelector('[data-time]');
  const movesEl = wrap.querySelector('[data-moves]');
  const matchedEl = wrap.querySelector('[data-matched]');
  const doneBlock = wrap.querySelector('[data-doneblock]');

  function ensureTimer() {
    if (timerHandle) return;
    startTs = Date.now();
    timerHandle = setInterval(() => {
      timeEl.textContent = Math.floor((Date.now() - startTs) / 1000);
    }, 250);
  }

  wrap.querySelectorAll('.mmx-card').forEach(card => {
    card.addEventListener('click', () => {
      if (card.classList.contains('matched') || card.classList.contains('flipped')) return;
      if (flipped.length === 2) return;
      ensureTimer();
      card.classList.add('flipped');
      flipped.push(card);
      if (flipped.length === 2) {
        moves++;
        movesEl.textContent = moves;
        const [a, b] = flipped;
        if (a.dataset.key === b.dataset.key && a.dataset.side !== b.dataset.side) {
          // Match
          setTimeout(() => {
            a.classList.add('matched'); b.classList.add('matched');
            a.classList.remove('flipped'); b.classList.remove('flipped');
            matched++;
            matchedEl.textContent = matched;
            flipped = [];
            if (matched === totalPairs) {
              clearInterval(timerHandle); timerHandle = null;
              const s = Math.floor((Date.now() - startTs) / 1000);
              doneBlock.style.display = '';
              doneBlock.innerHTML = `🏆 <b>Hoàn tất ${totalPairs} cặp!</b> Thời gian <b>${s}s</b> · <b>${moves}</b> lượt lật.`;
              if (typeof onDone === 'function') onDone({ pairs: totalPairs, seconds: s, moves });
            }
          }, 320);
        } else {
          setTimeout(() => {
            a.classList.remove('flipped'); b.classList.remove('flipped');
            flipped = [];
          }, 700);
        }
      }
    });
  });
}

// ============================================================
// renderDayPlanner — kéo task vào time-slot.
// tasks: [{ label, slot?: 'morning'|'noon'|'afternoon'|'night' }]
// Nếu không có slot → mọi slot đều OK (chỉ cần xếp hết).
// ============================================================
export function renderDayPlanner(host, tasks, onDone) {
  injectSecondaryStyles();

  const SLOTS = [
    { id: 'morning',   icon: '🌅', label: 'Sáng',  hint: '6:00 – 11:00' },
    { id: 'noon',      icon: '☀️',  label: 'Trưa',  hint: '11:00 – 14:00' },
    { id: 'afternoon', icon: '🌤️', label: 'Chiều', hint: '14:00 – 18:00' },
    { id: 'night',     icon: '🌙', label: 'Tối',   hint: '18:00 – 22:00' },
  ];

  // Auto-suggest slot cho label phổ biến.
  const guessSlot = (s) => {
    if (/sáng|thời gian biểu|kế hoạch/i.test(s)) return 'morning';
    if (/sau buổi|tan trường|chiều/i.test(s)) return 'afternoon';
    if (/ôn|ngủ|tối|cuối ngày/i.test(s)) return 'night';
    if (/ăn|cơm|trưa/i.test(s)) return 'noon';
    return null;
  };

  const norm = tasks.map((t, i) => {
    if (typeof t === 'string') return { id: 'T' + i, label: t, target: guessSlot(t) };
    return { id: t.id || 'T' + i, label: t.label, target: t.slot || guessSlot(t.label) };
  });

  const wrap = document.createElement('div');
  wrap.className = 'dpx-wrap';
  wrap.innerHTML = `
    <div class="dpx-hint">📅 <b>Lập kế hoạch trong ngày</b>: kéo từng việc bên dưới vào khung giờ phù hợp. Mỗi việc đúng khung giờ được <b>+5 điểm</b>.</div>
    <div class="dpx-pool empty" data-pool>
      ${norm.map(t => `<div class="dpx-task" draggable="true" data-id="${t.id}">${(t.label||'').replace(/</g,'&lt;')}</div>`).join('')}
    </div>
    <div class="dpx-slots">
      ${SLOTS.map(s => `
        <div class="dpx-slot" data-slot="${s.id}">
          <h5>${s.icon} ${s.label} <span style="opacity:.55;font-weight:600;font-size:11px">${s.hint}</span></h5>
          <div class="items"></div>
        </div>`).join('')}
    </div>
    <div class="dpx-actions">
      <button class="dpx-btn" type="button" data-check>✓ Kiểm tra</button>
      <button class="dpx-btn ghost" type="button" data-reset>🔄 Xếp lại</button>
      <span class="dpx-score" data-score></span>
    </div>
  `;
  host.appendChild(wrap);

  const pool = wrap.querySelector('[data-pool]');
  function refreshPool() {
    pool.classList.toggle('empty', pool.children.length === 0);
  }
  refreshPool();

  let dragging = null;
  wrap.querySelectorAll('.dpx-task').forEach(t => {
    t.addEventListener('dragstart', e => { dragging = t; t.classList.add('dragging'); e.dataTransfer.effectAllowed = 'move'; });
    t.addEventListener('dragend', () => { dragging?.classList.remove('dragging'); dragging = null; });
  });
  const containers = [pool, ...wrap.querySelectorAll('.dpx-slot .items'), ...wrap.querySelectorAll('.dpx-slot')];
  containers.forEach(c => {
    c.addEventListener('dragover', e => { e.preventDefault(); const slot = c.closest('.dpx-slot') || c; slot.classList?.add('dragover'); });
    c.addEventListener('dragleave', e => { const slot = c.closest('.dpx-slot') || c; slot.classList?.remove('dragover'); });
    c.addEventListener('drop', e => {
      e.preventDefault();
      const slot = c.closest('.dpx-slot');
      slot?.classList.remove('dragover');
      if (!dragging) return;
      // Bỏ class màu (sẽ re-eval khi kiểm tra).
      dragging.classList.remove('placed-right', 'placed-wrong');
      if (slot) {
        slot.querySelector('.items').appendChild(dragging);
      } else {
        pool.appendChild(dragging);
      }
      refreshPool();
    });
  });

  // Touch fallback: tap task để toggle giữa pool ↔ slot kế tiếp.
  // (Drag&drop trên mobile rất khó — fallback tap-cycle.)
  wrap.querySelectorAll('.dpx-task').forEach(t => {
    t.addEventListener('click', () => {
      const slotIdx = SLOTS.findIndex(s => t.closest('.dpx-slot')?.dataset.slot === s.id);
      const next = slotIdx + 1;
      if (next >= SLOTS.length) {
        pool.appendChild(t);
      } else {
        wrap.querySelectorAll('.dpx-slot')[next].querySelector('.items').appendChild(t);
      }
      t.classList.remove('placed-right', 'placed-wrong');
      refreshPool();
    });
  });

  wrap.querySelector('[data-check]').addEventListener('click', () => {
    let score = 0;
    norm.forEach(t => {
      const el = wrap.querySelector(`.dpx-task[data-id="${t.id}"]`);
      if (!el) return;
      const slot = el.closest('.dpx-slot')?.dataset.slot;
      if (!slot) { el.classList.add('placed-wrong'); return; }
      if (!t.target || slot === t.target) { el.classList.add('placed-right'); score += 5; }
      else { el.classList.add('placed-wrong'); }
    });
    wrap.querySelector('[data-score]').textContent = `Điểm: ${score}/${norm.length * 5}`;
    if (typeof onDone === 'function') onDone({ score, total: norm.length * 5 });
  });
  wrap.querySelector('[data-reset]').addEventListener('click', () => {
    wrap.querySelectorAll('.dpx-task').forEach(t => {
      t.classList.remove('placed-right', 'placed-wrong');
      pool.appendChild(t);
    });
    wrap.querySelector('[data-score]').textContent = '';
    refreshPool();
  });
}

// ============================================================
// renderExperimentStages — quy trình thí nghiệm theo bước.
// steps: ['Bước 1: lấy mẫu', ...] hoặc [{title, body}]
// ============================================================
export function renderExperimentStages(host, steps, opts = {}) {
  injectSecondaryStyles();
  const norm = steps.map((s, i) => {
    if (typeof s === 'string') {
      // Tách "Bước N: title — body" hoặc chỉ title.
      const m = s.match(/^(?:[Bb]ước\s*\d+[:.\-]\s*)?(.+?)(?:\s*[—–-]\s*(.+))?$/);
      return { title: m?.[1] || s, body: m?.[2] || '' };
    }
    return { title: s.title || `Bước ${i + 1}`, body: s.body || '' };
  });
  const total = norm.length;
  let cur = 0;

  const wrap = document.createElement('div');
  wrap.className = 'esx-wrap';
  wrap.innerHTML = `
    <div class="esx-head">
      <span class="esx-badge">🧪 Quy trình thực hành</span>
      <span>${opts.intro || 'Theo dõi từng bước thực hành — bấm "Tiếp" để qua bước kế.'}</span>
    </div>
    <div class="esx-stepbar">
      ${norm.map((s, i) => `<div class="esx-pill" data-pill="${i}">${i + 1}. ${(s.title || '').slice(0, 24)}</div>`).join('')}
    </div>
    <div class="esx-panel" data-panel></div>
    <div class="esx-actions">
      <button type="button" class="esx-btn ghost" data-prev>← Bước trước</button>
      <button type="button" class="esx-btn primary" data-next>Bước tiếp →</button>
      <span class="esx-progress"><span data-cur>1</span>/${total}</span>
    </div>
    <div class="esx-done-banner" data-banner>🏆 Hoàn tất quy trình thực hành!</div>
  `;
  host.appendChild(wrap);

  const panel = wrap.querySelector('[data-panel]');
  const pills = [...wrap.querySelectorAll('[data-pill]')];
  const prevBtn = wrap.querySelector('[data-prev]');
  const nextBtn = wrap.querySelector('[data-next]');
  const curEl = wrap.querySelector('[data-cur]');
  const banner = wrap.querySelector('[data-banner]');

  function render() {
    const s = norm[cur];
    panel.innerHTML = `
      <span class="esx-step-num">Bước ${cur + 1}/${total}</span>
      <div class="esx-step-title">${(s.title || '').replace(/</g,'&lt;')}</div>
      ${s.body ? `<div class="esx-step-body">${String(s.body).replace(/</g,'&lt;')}</div>` : ''}
    `;
    pills.forEach((p, i) => {
      p.classList.toggle('active', i === cur);
      p.classList.toggle('done', i < cur);
    });
    curEl.textContent = cur + 1;
    prevBtn.disabled = (cur === 0);
    nextBtn.textContent = (cur === total - 1) ? 'Hoàn tất ✓' : 'Bước tiếp →';
  }
  render();

  prevBtn.addEventListener('click', () => { if (cur > 0) { cur--; render(); } });
  nextBtn.addEventListener('click', () => {
    if (cur < total - 1) { cur++; render(); }
    else {
      // Hoàn tất
      pills.forEach(p => p.classList.add('done'));
      banner.classList.add('show');
      nextBtn.disabled = true;
      if (typeof opts.onDone === 'function') opts.onDone({ done: total, total });
    }
  });
  pills.forEach(p => p.addEventListener('click', () => { cur = Number(p.dataset.pill); render(); }));
}

// ============================================================
// renderProcedureSort — kéo bước vào đúng thứ tự (giống Day Planner
// nhưng slot có thứ tự 1→N và chấm điểm theo thứ tự đúng).
// steps: ['Lấy mẫu đại diện', 'Kiểm cảm quan', ...] — thứ tự đúng = thứ tự truyền vào.
// ============================================================
export function renderProcedureSort(host, steps, opts = {}) {
  injectSecondaryStyles();
  const norm = steps.map((s, i) => ({ id: 'S' + i, label: String(s), order: i }));
  // Shuffle để pool xáo trộn
  const shuffled = norm.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  const total = norm.length;

  const wrap = document.createElement('div');
  wrap.className = 'psx-wrap';
  wrap.innerHTML = `
    <div class="psx-hint">🧩 ${opts.intro || 'Kéo các bước từ pool vào ô có sẵn theo đúng thứ tự thực hiện.'}</div>
    <div class="psx-pool" data-pool>
      ${shuffled.map(s => `<div class="psx-step" draggable="true" data-id="${s.id}" data-order="${s.order}">${s.label.replace(/</g,'&lt;')}</div>`).join('')}
    </div>
    <div class="psx-slots">
      ${norm.map(() => `<div class="psx-slot" data-slot></div>`).join('')}
    </div>
    <div class="esx-actions">
      <button type="button" class="esx-btn" data-check>✓ Kiểm tra</button>
      <button type="button" class="esx-btn ghost" data-reset>🔄 Xếp lại</button>
      <span class="esx-progress" data-score></span>
    </div>
  `;
  host.appendChild(wrap);

  const pool = wrap.querySelector('[data-pool]');
  const slots = [...wrap.querySelectorAll('[data-slot]')];
  let dragging = null;

  wrap.querySelectorAll('.psx-step').forEach(st => {
    st.addEventListener('dragstart', e => { dragging = st; st.classList.add('dragging'); e.dataTransfer.effectAllowed='move'; });
    st.addEventListener('dragend', () => { dragging?.classList.remove('dragging'); dragging = null; });
    // Tap fallback: click cycle giữa pool ↔ slot trống đầu tiên
    st.addEventListener('click', () => {
      st.classList.remove('right', 'wrong');
      if (st.parentElement === pool) {
        const emptySlot = slots.find(s => !s.querySelector('.psx-step'));
        if (emptySlot) emptySlot.appendChild(st);
      } else {
        pool.appendChild(st);
      }
      refreshSlots();
    });
  });

  function refreshSlots() {
    slots.forEach(s => s.classList.toggle('filled', !!s.querySelector('.psx-step')));
  }

  [pool, ...slots].forEach(c => {
    c.addEventListener('dragover', e => { e.preventDefault(); c.classList.add('dragover'); });
    c.addEventListener('dragleave', () => c.classList.remove('dragover'));
    c.addEventListener('drop', e => {
      e.preventDefault();
      c.classList.remove('dragover');
      if (!dragging) return;
      dragging.classList.remove('right', 'wrong');
      if (c === pool) pool.appendChild(dragging);
      else {
        const existing = c.querySelector('.psx-step');
        if (existing && existing !== dragging) pool.appendChild(existing);
        c.appendChild(dragging);
      }
      refreshSlots();
    });
  });

  wrap.querySelector('[data-check]').addEventListener('click', () => {
    let score = 0;
    slots.forEach((s, i) => {
      const st = s.querySelector('.psx-step');
      if (!st) return;
      const ok = Number(st.dataset.order) === i;
      st.classList.toggle('right', ok);
      st.classList.toggle('wrong', !ok);
      if (ok) score++;
    });
    wrap.querySelector('[data-score]').textContent = `Đúng ${score}/${total} bước`;
    if (typeof opts.onDone === 'function') opts.onDone({ score, total });
  });
  wrap.querySelector('[data-reset]').addEventListener('click', () => {
    wrap.querySelectorAll('.psx-step').forEach(st => {
      st.classList.remove('right', 'wrong');
      pool.appendChild(st);
    });
    wrap.querySelector('[data-score]').textContent = '';
    refreshSlots();
  });
}

// ============================================================
// renderFormulaCalc — máy tính công thức tương tác.
// cfg: {
//   formula: 'F = m·a',
//   vars: [{key:'m', label:'Khối lượng m (kg)', min:1, max:100, step:1, value:10},
//          {key:'a', label:'Gia tốc a (m/s²)',  min:0, max:50, step:0.5, value:9.8}],
//   compute: (v) => v.m * v.a,
//   unit: 'N'
// }
// ============================================================
export function renderFormulaCalc(host, cfg) {
  injectSecondaryStyles();
  const vals = {};
  cfg.vars.forEach(v => vals[v.key] = v.value);

  const wrap = document.createElement('div');
  wrap.className = 'fcx-wrap';
  wrap.innerHTML = `
    <div class="fcx-formula">${(cfg.formula || '').replace(/</g,'&lt;')}</div>
    <div class="fcx-vars">
      ${cfg.vars.map(v => `
        <div class="fcx-var" data-key="${v.key}">
          <label>${v.label || v.key}<span class="v" data-v>${v.value}</span></label>
          <input type="range" min="${v.min}" max="${v.max}" step="${v.step || 1}" value="${v.value}" />
        </div>`).join('')}
    </div>
    <div class="fcx-result" data-result>= …</div>
  `;
  host.appendChild(wrap);

  function recompute() {
    let out;
    try { out = cfg.compute(vals); } catch (e) { out = '?'; }
    const txt = (typeof out === 'number') ? (Number.isFinite(out) ? out.toFixed(2).replace(/\.00$/, '') : '?') : out;
    wrap.querySelector('[data-result]').textContent = `= ${txt}${cfg.unit ? ' ' + cfg.unit : ''}`;
  }
  recompute();

  wrap.querySelectorAll('.fcx-var').forEach(box => {
    const key = box.dataset.key;
    const input = box.querySelector('input');
    const vEl = box.querySelector('[data-v]');
    input.addEventListener('input', () => {
      const n = Number(input.value);
      vals[key] = n;
      vEl.textContent = n;
      recompute();
    });
  });
}
