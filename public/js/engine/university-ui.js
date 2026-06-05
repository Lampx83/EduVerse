// ============================================================
// University UI — Tier T4 cho Đại học (pharmacy/it/economics...).
// Triết lý: PROFESSIONAL EXAM — vibe đề thi cuối kì,
// question palette sidebar, navigation, flag review, time elapsed.
// ============================================================

let _uniStyled = false;
function injectUniversityStyles() {
  if (_uniStyled || typeof document === 'undefined') return;
  _uniStyled = true;
  const css = `
  .uqz-wrap { display:grid; gap:18px; grid-template-columns: 1fr; padding: 8px 0 24px;
    color: #e2e8f0; font-family: 'Inter','SF Pro Display',system-ui,sans-serif; }
  @media (min-width: 900px) {
    .uqz-wrap.with-palette { grid-template-columns: 1fr 240px; }
  }

  .uqz-main { display:flex; flex-direction:column; gap:14px; }
  .uqz-meta { display:flex; align-items:center; gap:14px; padding: 14px 18px;
    background: rgba(15,23,42,.6); border:1px solid rgba(148,163,184,.16);
    border-radius: 8px; flex-wrap:wrap; }
  .uqz-meta .subject { font-weight:700; font-size:14px; color:#cbd5e1; }
  .uqz-meta .difficulty { background: rgba(251,191,36,.12); color:#fcd34d;
    border:1px solid rgba(251,191,36,.3); padding:2px 10px; border-radius:4px;
    font-size:11.5px; font-weight:700; text-transform:uppercase; letter-spacing:1px; }
  .uqz-meta .timer { margin-left:auto; font-family:'JetBrains Mono','SF Mono',monospace;
    background: rgba(0,0,0,.3); padding: 6px 14px; border-radius: 6px;
    font-weight: 700; font-size: 14px; }

  .uqz-card { background: rgba(15,23,42,.65); border:1px solid rgba(148,163,184,.18);
    border-radius: 8px; padding: 26px 28px; box-shadow: 0 10px 24px rgba(0,0,0,.18); }
  .uqz-num { display:flex; align-items:center; justify-content: space-between;
    color:#64748b; font-size:12px; font-weight:700;
    letter-spacing:1.2px; text-transform:uppercase; margin-bottom: 12px;
    border-bottom: 1px solid rgba(148,163,184,.14); padding-bottom: 10px; }
  .uqz-num b { color: #fbbf24; font-size: 13px; }
  .uqz-flag { background:transparent; border:1px solid rgba(148,163,184,.2);
    cursor:pointer; color:#64748b; padding: 4px 10px; border-radius:4px;
    font-family:inherit; font-size:12px; font-weight:700; transition: all .12s; display:inline-flex; gap:5px; align-items:center; }
  .uqz-flag:hover { background:rgba(251,191,36,.12); color:#fbbf24; border-color:#fbbf24; }
  .uqz-flag.on { color:#fbbf24; border-color:#fbbf24; background: rgba(251,191,36,.1); }

  .uqz-stem { font-size: 16.5px; line-height: 1.7; margin-bottom: 18px; color: #f1f5f9; }
  .uqz-stem code, .uqz-stem .formula {
    font-family:'JetBrains Mono','SF Mono',monospace; background: rgba(251,191,36,.08);
    padding:1.5px 7px; border-radius:4px; color:#fcd34d; font-size: 14.5px;
  }
  .uqz-img { max-width:100%; border-radius:6px; margin: 8px 0 14px; }

  .uqz-choices { display:flex; flex-direction:column; gap:9px; }
  .uqz-opt { display:flex; gap:14px; align-items:flex-start;
    background: rgba(15,23,42,.4); border:1px solid rgba(148,163,184,.18);
    padding: 14px 16px; border-radius: 6px; cursor:pointer; text-align:left;
    font-family: inherit; font-size: 15px; line-height:1.55; color:#e2e8f0;
    transition: background .15s, border-color .15s; }
  .uqz-opt:hover:not(.is-disabled) { background: rgba(99,102,241,.12); border-color:#6366f1; }
  .uqz-opt.is-disabled { cursor:default; }
  .uqz-opt.selected { background: rgba(99,102,241,.18); border-color:#6366f1; }
  .uqz-opt .key { flex:none; width:30px; height:30px; border-radius:4px;
    background: #334155; color: #cbd5e1; display:flex; align-items:center; justify-content:center;
    font-weight:700; font-size:13px; border:1px solid rgba(148,163,184,.25); }
  .uqz-opt.is-correct { background: rgba(34,197,94,.16); border-color:#22c55e; }
  .uqz-opt.is-correct .key { background:#22c55e; color:#06281a; border-color:#16a34a; }
  .uqz-opt.is-wrong { background: rgba(239,68,68,.16); border-color:#ef4444; }
  .uqz-opt.is-wrong .key { background:#ef4444; color:#fff; border-color:#dc2626; }

  .uqz-fb { margin-top: 14px; padding: 12px 16px; border-radius: 6px;
    font-size: 14.5px; line-height: 1.6; }
  .uqz-fb.ok  { background: rgba(34,197,94,.1); border-left:3px solid #22c55e; color:#bbf7d0; }
  .uqz-fb.bad { background: rgba(239,68,68,.1); border-left:3px solid #ef4444; color:#fecaca; }
  .uqz-fb code { font-family:'JetBrains Mono',monospace; background:rgba(0,0,0,.3); padding:0 5px; border-radius:3px; }
  .uqz-fb b { color: #fde047; }

  /* Sidebar palette */
  .uqz-palette { background: rgba(15,23,42,.65); border:1px solid rgba(148,163,184,.18);
    border-radius: 8px; padding: 14px; position: sticky; top: 16px; height: fit-content;
    align-self: start; max-height: calc(100vh - 32px); overflow-y: auto; }
  .uqz-palette h4 { margin: 0 0 10px; font-size: 12px; font-weight:800; color:#94a3b8;
    text-transform: uppercase; letter-spacing: 1px; }
  .uqz-grid { display:grid; gap:6px; grid-template-columns: repeat(5, 1fr); }
  .uqz-cell { aspect-ratio: 1; border-radius:4px; border:1px solid rgba(148,163,184,.25);
    background: rgba(15,23,42,.55); color:#cbd5e1; cursor:pointer;
    font-weight:700; font-size:13px; font-family: inherit; transition: all .12s;
    display:flex; align-items:center; justify-content:center; position:relative; }
  .uqz-cell:hover { background: #1e293b; border-color:#475569; }
  .uqz-cell.cur { background:#6366f1; color:#fff; border-color:#4f46e5; }
  .uqz-cell.answered { background: rgba(99,102,241,.25); border-color:#6366f1; color:#c7d2fe; }
  .uqz-cell.flagged::after { content:'⚑'; position:absolute; top:2px; right:3px; font-size:9px; color:#fbbf24; line-height:1; }

  .uqz-legend { display:flex; flex-direction:column; gap:6px; margin-top: 14px;
    font-size: 11.5px; color: #94a3b8; padding-top: 12px; border-top: 1px solid rgba(148,163,184,.14); }
  .uqz-legend div { display:flex; align-items:center; gap:8px; }
  .uqz-legend .sw { width:14px; height:14px; border-radius:3px; border:1px solid rgba(148,163,184,.25); }
  .uqz-legend .sw.answered { background: rgba(99,102,241,.25); border-color:#6366f1; }
  .uqz-legend .sw.cur { background: #6366f1; }
  .uqz-legend .sw.flag::after { content:'⚑'; color:#fbbf24; font-size:11px; line-height:1; display:block; }

  .uqz-summary { padding: 12px 14px; background: rgba(0,0,0,.25); border-radius: 6px;
    margin-top: 14px; font-size: 13px; }
  .uqz-summary .row { display:flex; justify-content:space-between; padding: 3px 0; }
  .uqz-summary .row b { font-family:'JetBrains Mono',monospace; }

  .uqz-footer { display:flex; gap:10px; align-items:center; padding: 12px 14px;
    background: rgba(15,23,42,.85); border:1px solid rgba(148,163,184,.2);
    border-radius:6px; position: sticky; bottom: 0; backdrop-filter: blur(8px); }
  .uqz-footer .stats { font-size:13px; }
  .uqz-footer .actions { margin-left:auto; display:flex; gap:8px; }
  .uqz-btn { padding: 9px 18px; border:1px solid rgba(148,163,184,.25);
    background: rgba(15,23,42,.55); color:#e2e8f0; font-family:inherit; font-size:13.5px;
    font-weight:700; cursor:pointer; border-radius:5px; transition: all .12s; }
  .uqz-btn:hover { background:#1e293b; border-color:#64748b; }
  .uqz-btn.primary { background:#6366f1; border-color:#6366f1; color:#fff; }
  .uqz-btn.primary:hover { background:#4f46e5; }
  .uqz-btn.danger { background:#dc2626; border-color:#dc2626; color:#fff; }
  .uqz-btn.danger:hover { background:#b91c1c; }
  .uqz-btn:disabled { opacity:.4; cursor:not-allowed; }

  .uqz-done { background: rgba(15,23,42,.65); border:1px solid rgba(148,163,184,.2);
    border-radius:8px; padding: 36px 28px; text-align:center; }
  .uqz-done .verdict { font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
    color:#94a3b8; margin-bottom: 12px; }
  .uqz-done .score-big { font-size: 72px; font-weight:900; color:#fbbf24; line-height:1;
    font-family:'JetBrains Mono',monospace; }
  .uqz-done .pct { font-size: 16px; opacity:.85; margin-top:8px; }
  .uqz-done .breakdown { display:grid; gap:8px; grid-template-columns: repeat(3, 1fr);
    margin: 22px 0 8px; max-width: 480px; margin-left:auto; margin-right:auto; }
  .uqz-done .bd { background: rgba(15,23,42,.5); border:1px solid rgba(148,163,184,.18);
    padding: 12px; border-radius:6px; }
  .uqz-done .bd .label { font-size: 11.5px; color:#94a3b8; text-transform: uppercase; letter-spacing:.5px; }
  .uqz-done .bd .val { font-size: 20px; font-weight:800; margin-top: 4px; }

  .uqz-confirm { background: rgba(0,0,0,.85); position: fixed; inset:0; z-index: 9999;
    display:flex; align-items:center; justify-content:center; padding: 20px; }
  .uqz-confirm .box { background: #0f172a; border:1px solid rgba(148,163,184,.3);
    border-radius:8px; padding: 22px 24px; max-width: 420px; }
  .uqz-confirm h3 { margin: 0 0 8px; }
  .uqz-confirm .actions { display:flex; gap:10px; justify-content:flex-end; margin-top:14px; }
  `;
  const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
}

// ============================================================
// renderQuizUniversity — Quiz cho ĐH. Exam-style với palette.
// 1 câu/màn, sidebar palette nav, flag review, time elapsed,
// confirm trước khi nộp, kết quả detail.
// ============================================================
/** @param {import('./scenario-engine.js').ScenarioEngine} engine */
export function renderQuizUniversity(engine, host) {
  injectUniversityStyles();
  const sc = engine.scenario;
  const qs = sc.questions || [];
  const total = qs.length;
  const answers = new Array(total).fill(-1);
  const flagged = new Array(total).fill(false);
  const correctness = new Array(total).fill(null); // chỉ tính khi nộp
  let cur = 0;
  let submitted = false;
  const startTs = Date.now();

  const wrap = document.createElement('div');
  wrap.className = 'uqz-wrap with-palette';
  host.appendChild(wrap);

  let timerHandle = setInterval(() => {
    const el = wrap.querySelector('[data-timer]');
    if (el) el.textContent = fmtTime(Date.now() - startTs);
  }, 1000);

  function fmtTime(ms) {
    const s = Math.floor(ms / 1000);
    return `${String(Math.floor(s / 60)).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`;
  }

  function render() {
    const q = qs[cur];
    const answered = answers.filter(a => a >= 0).length;
    wrap.innerHTML = `
      <div class="uqz-main">
        <div class="uqz-meta">
          <span class="subject">${sc.subject ? sc.subject : 'Bài kiểm tra'}</span>
          ${sc.difficulty ? `<span class="difficulty">Khó ${sc.difficulty}/5</span>` : ''}
          <span class="timer" data-timer>00:00</span>
        </div>
        <div class="uqz-card">
          <div class="uqz-num">
            <span>Câu <b>${cur + 1}</b> / ${total}</span>
            <button type="button" class="uqz-flag ${flagged[cur] ? 'on' : ''}" data-flag>
              <span>⚑</span> ${flagged[cur] ? 'Đã đánh dấu' : 'Đánh dấu'}
            </button>
          </div>
          <div class="uqz-stem">${String(q.stem || '').replace(/</g,'&lt;')}</div>
          ${q.image ? `<img src="${q.image}" class="uqz-img" alt=""/>` : ''}
          <div class="uqz-choices">
            ${q.choices.map((c, ci) => `
              <button type="button" class="uqz-opt${answers[cur] === ci ? ' selected' : ''}${submitted ? ' is-disabled' : ''}" data-ci="${ci}">
                <span class="key">${String.fromCharCode(65 + ci)}</span>
                <span>${String(c).replace(/</g,'&lt;')}</span>
              </button>`).join('')}
          </div>
          ${submitted ? `<div class="uqz-fb" data-fb></div>` : ''}
        </div>
        <div class="uqz-footer">
          <div class="stats">Đã trả lời <b>${answered}</b>/${total}</div>
          <div class="actions">
            <button type="button" class="uqz-btn" data-prev ${cur === 0 ? 'disabled' : ''}>← Trước</button>
            <button type="button" class="uqz-btn" data-next ${cur === total - 1 ? 'disabled' : ''}>Sau →</button>
            ${submitted ? '' : `<button type="button" class="uqz-btn danger" data-submit>Nộp bài</button>`}
          </div>
        </div>
      </div>
      <div class="uqz-palette">
        <h4>Bảng câu hỏi</h4>
        <div class="uqz-grid">
          ${qs.map((_, i) => {
            let cls = '';
            if (i === cur) cls += ' cur';
            else if (submitted) {
              if (correctness[i] === true) cls += ' answered';
            } else if (answers[i] >= 0) cls += ' answered';
            if (flagged[i]) cls += ' flagged';
            return `<button type="button" class="uqz-cell${cls}" data-jump="${i}">${i + 1}</button>`;
          }).join('')}
        </div>
        <div class="uqz-legend">
          <div><span class="sw cur"></span> Đang xem</div>
          <div><span class="sw answered"></span> Đã trả lời</div>
          <div><span class="sw flag"></span> Đánh dấu</div>
        </div>
        <div class="uqz-summary">
          <div class="row">Đã trả lời <b>${answered}/${total}</b></div>
          <div class="row">Đánh dấu <b>${flagged.filter(Boolean).length}</b></div>
        </div>
      </div>
    `;

    if (submitted) {
      const opts = wrap.querySelectorAll('.uqz-opt');
      opts.forEach(o => {
        const ci = Number(o.dataset.ci);
        if (ci === q.answer) o.classList.add('is-correct');
        else if (ci === answers[cur]) o.classList.add('is-wrong');
      });
      const fb = wrap.querySelector('[data-fb]');
      const ok = correctness[cur];
      fb.className = 'uqz-fb ' + (ok ? 'ok' : 'bad');
      fb.innerHTML = ok
        ? `<b>Chính xác.</b>${q.explanation ? ' ' + String(q.explanation).replace(/</g,'&lt;') : ''}`
        : `<b>Sai.</b> Đáp án đúng: <b>${String.fromCharCode(65 + q.answer)}</b>. ${String(q.choices[q.answer] || '').replace(/</g,'&lt;')}${q.explanation ? '. ' + String(q.explanation).replace(/</g,'&lt;') : ''}`;
    } else {
      wrap.querySelectorAll('.uqz-opt').forEach(o => {
        o.addEventListener('click', () => {
          answers[cur] = Number(o.dataset.ci);
          render();
        });
      });
    }

    wrap.querySelector('[data-flag]').addEventListener('click', () => {
      flagged[cur] = !flagged[cur];
      render();
    });
    wrap.querySelector('[data-prev]').addEventListener('click', () => { if (cur > 0) { cur--; render(); } });
    wrap.querySelector('[data-next]').addEventListener('click', () => { if (cur < total - 1) { cur++; render(); } });
    if (!submitted) {
      wrap.querySelector('[data-submit]')?.addEventListener('click', confirmSubmit);
    }
    wrap.querySelectorAll('[data-jump]').forEach(b => {
      b.addEventListener('click', () => { cur = Number(b.dataset.jump); render(); });
    });
  }

  function confirmSubmit() {
    const answered = answers.filter(a => a >= 0).length;
    const flaggedCount = flagged.filter(Boolean).length;
    const dlg = document.createElement('div');
    dlg.className = 'uqz-confirm';
    dlg.innerHTML = `
      <div class="box">
        <h3>Xác nhận nộp bài?</h3>
        <p style="font-size: 13.5px; line-height:1.55; color:#cbd5e1;">
          Đã trả lời <b>${answered}/${total}</b> câu${flaggedCount > 0 ? `, <b>${flaggedCount}</b> đánh dấu xem lại` : ''}.<br>
          ${answered < total ? `<span style="color:#fbbf24;">Còn ${total - answered} câu chưa làm sẽ bị tính 0 điểm.</span>` : 'Toàn bộ câu đã làm.'}
        </p>
        <div class="actions">
          <button type="button" class="uqz-btn" data-cancel>Tiếp tục làm bài</button>
          <button type="button" class="uqz-btn danger" data-confirm>Nộp bài</button>
        </div>
      </div>
    `;
    document.body.appendChild(dlg);
    dlg.querySelector('[data-cancel]').addEventListener('click', () => dlg.remove());
    dlg.querySelector('[data-confirm]').addEventListener('click', () => {
      dlg.remove();
      doSubmit();
    });
  }

  function doSubmit() {
    submitted = true;
    if (timerHandle) clearInterval(timerHandle);
    qs.forEach((q, i) => { correctness[i] = answers[i] === q.answer; });
    renderDone();
  }

  function renderDone() {
    const correct = correctness.filter(c => c === true).length;
    const wrong = correctness.filter(c => c === false).length;
    const skipped = answers.filter(a => a < 0).length;
    const pct = total ? Math.round(correct / total * 100) : 0;
    const elapsed = fmtTime(Date.now() - startTs);
    wrap.className = 'uqz-wrap';
    wrap.innerHTML = `
      <div class="uqz-done">
        <div class="verdict">${pct >= 80 ? 'XUẤT SẮC' : pct >= 70 ? 'KHÁ' : pct >= 50 ? 'ĐẠT' : 'CHƯA ĐẠT'}</div>
        <div class="score-big">${correct}/${total}</div>
        <div class="pct">${pct}% · Thời gian: <code style="font-family:'JetBrains Mono',monospace;background:rgba(0,0,0,.3);padding:1px 7px;border-radius:3px;">${elapsed}</code></div>
        <div class="breakdown">
          <div class="bd"><div class="label">Đúng</div><div class="val" style="color:#22c55e">${correct}</div></div>
          <div class="bd"><div class="label">Sai</div><div class="val" style="color:#ef4444">${wrong}</div></div>
          <div class="bd"><div class="label">Bỏ qua</div><div class="val" style="color:#94a3b8">${skipped}</div></div>
        </div>
        <button type="button" class="uqz-btn primary" data-review style="margin-right:8px;">Xem lại từng câu</button>
        <button type="button" class="uqz-btn" data-final>Hoàn thành</button>
      </div>
    `;
    wrap.querySelector('[data-review]').addEventListener('click', () => {
      // Quay lại view nhưng đã submitted → hiện feedback đúng/sai từng câu
      cur = 0;
      wrap.className = 'uqz-wrap with-palette';
      render();
    });
    wrap.querySelector('[data-final]').addEventListener('click', () => {
      engine.complete({ answers, questions: qs });
    });
  }

  render();
}
