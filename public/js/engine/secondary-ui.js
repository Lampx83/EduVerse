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
