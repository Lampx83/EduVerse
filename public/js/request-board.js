// ============================================================
// Request board — "Ban điều hành AI" của mỗi trường
// ============================================================
// SV gửi yêu cầu (thêm trò chơi / lý thuyết / cải thiện lab / kỹ năng)
// → lưu DB qua /api/requests. Ban điều hành (AI = Claude) xem xét &
// cải tiến hàng ngày, cập nhật status.
//
// Usage:
//   import { renderRequestBoard } from './js/request-board.js';
//   renderRequestBoard({ host, domain: 'pharmacy', domainName: 'Trường Dược', getStudent });
// ============================================================

import { getPlayerName } from './api.js';

const TYPE_META = {
  game:   { icon: '🎮', label: 'Thêm trò chơi' },
  theory: { icon: '📖', label: 'Thêm lý thuyết' },
  lab:    { icon: '🧪', label: 'Cải thiện phòng thí nghiệm / thực hành' },
  skill:  { icon: '🎯', label: 'Luyện kỹ năng' },
  other:  { icon: '💡', label: 'Ý kiến khác' },
};
const STATUS_META = {
  pending:   { label: 'Chờ duyệt',   cls: 'pending' },
  reviewing: { label: 'Đang làm',    cls: 'reviewing' },
  done:      { label: '✓ Hoàn thành', cls: 'done' },
  rejected:  { label: 'Từ chối',     cls: 'rejected' },
};

export async function renderRequestBoard({ host, domain, domainName }) {
  injectStylesOnce();

  host.innerHTML = `
    <div class="rb-card">
      <div class="rb-head">
        <div class="rb-icon">🏛️</div>
        <div>
          <h3 class="rb-title">Ban điều hành AI · ${domainName}</h3>
          <p class="rb-sub">Trường do <b>AI điều hành</b> — cung cấp học liệu, môi trường học tập và
             <b>liên tục tự cải tiến</b> theo yêu cầu của bạn. Đề xuất thêm trò chơi, học liệu lý thuyết,
             cải thiện phòng thí nghiệm… Hiệu trưởng AI sẽ phản hồi & đưa vào hàng đợi nâng cấp.</p>
        </div>
      </div>

      <form class="rb-form" id="rb-form">
        <div class="rb-row">
          <select id="rb-type" class="rb-input rb-type">
            ${Object.entries(TYPE_META).map(([k, v]) => `<option value="${k}">${v.icon} ${v.label}</option>`).join('')}
          </select>
          <input id="rb-title" class="rb-input rb-titlein" maxlength="200"
                 placeholder="Tiêu đề yêu cầu (vd: Thêm game ghép cặp tương tác thuốc)" />
        </div>
        <textarea id="rb-detail" class="rb-input rb-detail" maxlength="2000" rows="2"
                  placeholder="Mô tả chi tiết (tuỳ chọn) — càng rõ, Ban điều hành AI càng dễ làm"></textarea>
        <div class="rb-actions">
          <span class="rb-msg" id="rb-msg"></span>
          <button type="submit" class="rb-submit" id="rb-submit">📨 Gửi cho Ban điều hành</button>
        </div>
      </form>

      <div class="rb-stats" id="rb-stats"></div>
      <div class="rb-list" id="rb-list">Đang tải yêu cầu…</div>
    </div>
  `;

  const form = host.querySelector('#rb-form');
  const msg = host.querySelector('#rb-msg');

  async function load() {
    try {
      const r = await fetch(`api/requests?domain=${encodeURIComponent(domain)}`);
      const data = await r.json();
      renderStats(host.querySelector('#rb-stats'), data.stats || {});
      renderList(host.querySelector('#rb-list'), data.items || [], load);
    } catch {
      host.querySelector('#rb-list').innerHTML = '<div class="rb-empty">Không tải được danh sách (cần backend chạy).</div>';
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const type = host.querySelector('#rb-type').value;
    const title = host.querySelector('#rb-title').value.trim();
    const detail = host.querySelector('#rb-detail').value.trim();
    if (title.length < 4) { msg.textContent = '⚠️ Tiêu đề quá ngắn'; return; }
    msg.textContent = 'Đang gửi…';
    try {
      const r = await fetch('api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain, type, title, detail, student: getPlayerName() || 'Ẩn danh' }),
      });
      if (!r.ok) { const e2 = await r.json().catch(() => ({})); msg.textContent = '⚠️ ' + (e2.error || 'Lỗi gửi'); return; }
      msg.textContent = '✓ Đã gửi! Hiệu trưởng AI đang xem xét…';
      host.querySelector('#rb-title').value = '';
      host.querySelector('#rb-detail').value = '';
      load();
      // AI phản hồi ở nền — reload lại để hiện lời phê duyệt khi sẵn sàng
      setTimeout(load, 2500);
      setTimeout(() => { load(); msg.textContent = ''; }, 8000);
    } catch {
      msg.textContent = '⚠️ Lỗi mạng';
    }
  });

  await load();
}

function renderStats(host, stats) {
  const total = (stats.pending || 0) + (stats.reviewing || 0) + (stats.done || 0) + (stats.rejected || 0);
  host.innerHTML = `
    <span class="rb-stat">📥 ${stats.pending || 0} chờ duyệt</span>
    <span class="rb-stat">🔧 ${stats.reviewing || 0} đang làm</span>
    <span class="rb-stat done">✓ ${stats.done || 0} hoàn thành</span>
    <span class="rb-stat total">${total} tổng yêu cầu</span>
  `;
}

function renderList(host, items, reload) {
  if (!items.length) {
    host.innerHTML = '<div class="rb-empty">Chưa có yêu cầu nào. Hãy là người đầu tiên đề xuất cải tiến trường! 🚀</div>';
    return;
  }
  host.innerHTML = items.map(it => {
    const tm = TYPE_META[it.type] || TYPE_META.other;
    const sm = STATUS_META[it.status] || STATUS_META.pending;
    return `
      <div class="rb-item">
        <div class="rb-vote" data-vote="${it.id}" title="Ủng hộ yêu cầu này">
          <span class="rb-vote-up">▲</span>
          <span class="rb-vote-n">${it.votes}</span>
        </div>
        <div class="rb-item-body">
          <div class="rb-item-title">${tm.icon} ${escapeHtml(it.title)}</div>
          ${it.detail ? `<div class="rb-item-detail">${escapeHtml(it.detail)}</div>` : ''}
          ${it.admin_note ? `<div class="rb-item-note">🏛️ Ban điều hành: ${escapeHtml(it.admin_note)}</div>` : ''}
          <div class="rb-item-meta">
            <span class="rb-status ${sm.cls}">${sm.label}</span>
            <span class="rb-by">👤 ${escapeHtml(it.student)}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  host.querySelectorAll('[data-vote]').forEach(el => {
    el.addEventListener('click', async () => {
      el.style.pointerEvents = 'none';
      try { await fetch(`api/requests/${el.dataset.vote}/vote`, { method: 'POST' }); reload(); }
      catch { el.style.pointerEvents = ''; }
    });
  });
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    .rb-card {
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
      border-radius: 16px; padding: 20px 22px; backdrop-filter: blur(8px);
    }
    .rb-head { display: flex; gap: 14px; align-items: flex-start; margin-bottom: 16px; }
    .rb-icon { font-size: 36px; line-height: 1; }
    .rb-title { margin: 0 0 4px; font-size: 19px; font-weight: 800; color: white; }
    .rb-sub { margin: 0; font-size: 13px; opacity: 0.82; line-height: 1.5; }
    .rb-form { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
    .rb-row { display: flex; gap: 8px; flex-wrap: wrap; }
    .rb-input {
      padding: 10px 12px; border-radius: 9px; border: 1px solid rgba(255,255,255,0.18);
      background: rgba(255,255,255,0.95); color: #1f2937; font-size: 14px; font-family: inherit;
    }
    .rb-type { flex: 0 0 auto; }
    .rb-titlein { flex: 1; min-width: 200px; }
    .rb-detail { width: 100%; resize: vertical; }
    .rb-actions { display: flex; align-items: center; gap: 12px; justify-content: flex-end; }
    .rb-msg { font-size: 12.5px; opacity: 0.85; margin-right: auto; }
    .rb-submit {
      padding: 10px 18px; border: none; border-radius: 10px; cursor: pointer;
      background: linear-gradient(135deg, #fbbf24, #f97316); color: #1f1147;
      font-weight: 800; font-size: 14px; font-family: inherit;
    }
    .rb-submit:hover { filter: brightness(1.06); }
    .rb-stats { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px; font-size: 12px; }
    .rb-stat { padding: 3px 10px; border-radius: 9px; background: rgba(255,255,255,0.08); }
    .rb-stat.done { background: rgba(16,185,129,0.2); }
    .rb-stat.total { margin-left: auto; opacity: 0.7; }
    .rb-list { display: flex; flex-direction: column; gap: 8px; }
    .rb-empty { opacity: 0.6; font-size: 13px; padding: 14px; text-align: center; font-style: italic; }
    .rb-item {
      display: flex; gap: 12px; align-items: flex-start;
      background: rgba(0,0,0,0.2); border-radius: 10px; padding: 12px 14px;
    }
    .rb-vote {
      display: flex; flex-direction: column; align-items: center; cursor: pointer;
      min-width: 38px; padding: 4px 6px; border-radius: 8px; background: rgba(255,255,255,0.06);
      transition: background 0.12s;
    }
    .rb-vote:hover { background: rgba(251,191,36,0.25); }
    .rb-vote-up { font-size: 11px; opacity: 0.7; }
    .rb-vote-n { font-weight: 800; font-size: 15px; color: #fbbf24; }
    .rb-item-body { flex: 1; min-width: 0; }
    .rb-item-title { font-size: 14.5px; font-weight: 700; color: white; }
    .rb-item-detail { font-size: 12.5px; opacity: 0.8; margin-top: 3px; line-height: 1.45; }
    .rb-item-note { font-size: 12.5px; margin-top: 5px; padding: 6px 10px; border-radius: 8px;
      background: rgba(251,191,36,0.12); border-left: 3px solid #fbbf24; }
    .rb-item-meta { display: flex; gap: 10px; align-items: center; margin-top: 6px; font-size: 11.5px; }
    .rb-status { padding: 2px 8px; border-radius: 7px; font-weight: 700; }
    .rb-status.pending   { background: rgba(148,163,184,0.25); }
    .rb-status.reviewing { background: rgba(251,191,36,0.25); }
    .rb-status.done      { background: rgba(16,185,129,0.25); }
    .rb-status.rejected  { background: rgba(239,68,68,0.22); opacity: 0.8; }
    .rb-by { opacity: 0.6; }
  `;
  const style = document.createElement('style');
  style.setAttribute('data-injected', 'request-board');
  style.textContent = css;
  document.head.appendChild(style);
}
