// ============================================================
// Notifications bell — chuông phản hồi từ Ban điều hành AI
// ============================================================
// HS thấy badge 🔔 ở góc trên phải mọi trang; số đỏ = số phản hồi chưa
// đọc. Bấm vào để xem danh sách + đánh dấu đã đọc; có thể bấm vào item
// để mở lại request board của trường tương ứng.
//
// Tự mount qua middleware ở server/index.js — KHÔNG cần page sửa gì.
// Page muốn ẩn: <body data-no-notifications-bell>. Guest (401) → tự ẩn.
// ============================================================

const POLL_MS = 60_000;
const fmtTime = (t) => {
  const d = Date.now() - t; const mm = Math.floor(d / 60_000);
  if (mm < 1) return 'vừa xong';
  if (mm < 60) return `${mm} phút trước`;
  const hh = Math.floor(mm / 60);
  if (hh < 24) return `${hh} giờ trước`;
  const dd = Math.floor(hh / 24);
  if (dd < 30) return `${dd} ngày trước`;
  return new Date(t).toLocaleDateString('vi-VN');
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function api(path, opts = {}) {
  const r = await fetch(path, { credentials: 'same-origin', ...opts });
  return { ok: r.ok, status: r.status, data: r.ok ? await r.json().catch(() => ({})) : null };
}

async function autoMount() {
  if (document.getElementById('nbell-root')) return;
  if (document.body?.dataset?.noNotificationsBell !== undefined) return;
  try { if (window.top !== window.self) return; } catch { /* cross-origin */ }

  // Probe API once: guest hoặc backend tắt → ẩn luôn, không phình DOM.
  const probe = await api('/api/notifications?limit=1');
  if (!probe.ok) return;

  injectStylesOnce();
  const root = document.createElement('div');
  root.id = 'nbell-root';
  root.innerHTML = `
    <button class="nbell-btn" id="nbell-btn" aria-label="Phản hồi từ Ban điều hành AI" title="Phản hồi từ Ban điều hành AI">
      <span class="nbell-ico">🔔</span>
      <span class="nbell-badge" id="nbell-badge" hidden>0</span>
    </button>
    <div class="nbell-panel" id="nbell-panel" hidden>
      <div class="nbell-head">
        <span class="nbell-title">🏛️ Ban điều hành AI phản hồi</span>
        <button class="nbell-readall" id="nbell-readall" type="button">Đánh dấu đã đọc</button>
      </div>
      <div class="nbell-list" id="nbell-list">Đang tải…</div>
    </div>
  `;
  document.body.appendChild(root);

  const btn = root.querySelector('#nbell-btn');
  const panel = root.querySelector('#nbell-panel');
  const badge = root.querySelector('#nbell-badge');
  const listEl = root.querySelector('#nbell-list');
  const readAllBtn = root.querySelector('#nbell-readall');

  let items = probe.data?.items || [];
  let unread = probe.data?.unread || 0;

  function paintBadge() {
    if (unread > 0) { badge.hidden = false; badge.textContent = String(unread > 99 ? '99+' : unread); }
    else { badge.hidden = true; }
  }
  function paintList() {
    if (!items.length) {
      listEl.innerHTML = `<div class="nbell-empty">Chưa có phản hồi nào. Gửi đề nghị qua nút 🏛️ ở góc phải bên dưới.</div>`;
      return;
    }
    listEl.innerHTML = items.map(it => `
      <div class="nbell-item ${it.read_at ? 'read' : 'unread'}" data-id="${it.id}" data-url="${escapeHtml(it.url || '')}">
        <div class="nbell-item-title">${escapeHtml(it.title || '')}</div>
        ${it.body ? `<div class="nbell-item-body">${escapeHtml(it.body)}</div>` : ''}
        <div class="nbell-item-time">${fmtTime(it.created_at)}</div>
      </div>
    `).join('');
    listEl.querySelectorAll('.nbell-item').forEach(el => {
      el.addEventListener('click', () => onItemClick(el));
    });
  }
  paintBadge(); paintList();

  async function refresh() {
    const r = await api('/api/notifications?limit=20');
    if (!r.ok) return;
    items = r.data?.items || [];
    unread = r.data?.unread || 0;
    paintBadge();
    if (!panel.hidden) paintList();
  }
  async function onItemClick(el) {
    const id = el.dataset.id;
    const url = el.dataset.url;
    if (el.classList.contains('unread')) {
      el.classList.remove('unread'); el.classList.add('read');
      unread = Math.max(0, unread - 1); paintBadge();
      api(`/api/notifications/${id}/read`, { method: 'POST' }).catch(() => {});
    }
    if (url) { setTimeout(() => { location.href = url; }, 80); }
  }
  async function onReadAll() {
    if (unread === 0) return;
    unread = 0; paintBadge();
    items = items.map(it => ({ ...it, read_at: it.read_at || Date.now() }));
    paintList();
    api('/api/notifications/read-all', { method: 'POST' }).catch(() => {});
  }

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.hidden = !panel.hidden;
    if (!panel.hidden) refresh();
  });
  readAllBtn.addEventListener('click', onReadAll);
  document.addEventListener('click', (e) => {
    if (!panel.hidden && !root.contains(e.target)) panel.hidden = true;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) panel.hidden = true;
  });

  // Polling nhẹ — refresh count mỗi 60s khi tab hiển thị.
  setInterval(() => { if (!document.hidden) refresh(); }, POLL_MS);
}

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return; stylesInjected = true;
  const css = `
    #nbell-root {
      position: fixed; top: 14px; right: 14px; z-index: 9998;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .nbell-btn {
      position: relative; width: 42px; height: 42px; border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.25); cursor: pointer;
      background: rgba(31, 17, 71, 0.75); color: white;
      backdrop-filter: blur(8px); box-shadow: 0 4px 14px rgba(0,0,0,0.25);
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .nbell-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(0,0,0,0.32); }
    .nbell-ico { font-size: 20px; line-height: 1; }
    .nbell-badge {
      position: absolute; top: -4px; right: -4px;
      min-width: 20px; height: 20px; padding: 0 5px;
      background: #ef4444; color: white; font-size: 11.5px; font-weight: 800;
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      border: 2px solid rgba(31, 17, 71, 0.9);
    }
    .nbell-panel {
      position: absolute; top: 50px; right: 0; width: 340px; max-width: calc(100vw - 28px);
      max-height: 70vh; overflow: hidden; display: flex; flex-direction: column;
      background: rgba(20, 12, 50, 0.96); color: white;
      border: 1px solid rgba(255,255,255,0.15); border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.4); backdrop-filter: blur(10px);
    }
    .nbell-head {
      display: flex; align-items: center; gap: 8px; padding: 10px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .nbell-title { font-size: 13px; font-weight: 800; flex: 1; }
    .nbell-readall {
      background: rgba(255,255,255,0.08); color: white; border: 1px solid rgba(255,255,255,0.15);
      padding: 4px 8px; border-radius: 7px; cursor: pointer; font-size: 11.5px;
    }
    .nbell-readall:hover { background: rgba(251,191,36,0.2); }
    .nbell-list { overflow-y: auto; padding: 6px; flex: 1; }
    .nbell-empty {
      padding: 22px 12px; opacity: 0.6; font-style: italic;
      font-size: 12.5px; text-align: center; line-height: 1.5;
    }
    .nbell-item {
      padding: 9px 10px; margin: 2px 0; border-radius: 8px; cursor: pointer;
      border-left: 3px solid transparent; transition: background 0.12s;
    }
    .nbell-item:hover { background: rgba(255,255,255,0.06); }
    .nbell-item.unread { background: rgba(251,191,36,0.10); border-left-color: #fbbf24; }
    .nbell-item.read { opacity: 0.7; }
    .nbell-item-title { font-size: 13px; font-weight: 700; }
    .nbell-item-body { font-size: 12px; opacity: 0.82; margin-top: 3px; line-height: 1.45; }
    .nbell-item-time { font-size: 10.5px; opacity: 0.55; margin-top: 4px; }
    @media (max-width: 480px) {
      #nbell-root { top: 10px; right: 10px; }
      .nbell-btn { width: 38px; height: 38px; }
      .nbell-ico { font-size: 18px; }
    }
  `;
  const s = document.createElement('style');
  s.setAttribute('data-injected', 'notifications-bell');
  s.textContent = css;
  document.head.appendChild(s);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoMount, { once: true });
} else {
  autoMount();
}
