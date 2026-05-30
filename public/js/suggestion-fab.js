// ============================================================
// Suggestion FAB — nút "🏛️ Đề nghị" nổi ở mọi trang
// ============================================================
// Cho phép SV gửi đề nghị / góp ý / yêu cầu tính năng cho Ban điều
// hành AI ngay tại trang đang xem. Tự gắn URL + tiêu đề trang vào
// để AI có ngữ cảnh phản hồi. Sau khi gửi, modal cũng liệt kê các
// yêu cầu gần đây kèm phản hồi của AI ("✓ Đã làm" / "Tiếc là…").
//
// Tự mount vào mọi trang HTML qua middleware ở server/index.js — KHÔNG
// cần page sửa gì. Page muốn ẩn nút: thêm <body data-no-suggestion-fab>.
// Page muốn ép domain: window.SUGGESTION_DOMAIN = 'pharmacy'|'school'|'it'.
// ============================================================

import { getPlayerName } from './api.js';

const TYPES = [
  { v: 'game',   icon: '🎮', label: 'Thêm trò chơi / mini-game' },
  { v: 'theory', icon: '📖', label: 'Thêm lý thuyết / học liệu' },
  { v: 'lab',   icon: '🧪', label: 'Cải thiện phòng thí nghiệm / thực hành' },
  { v: 'skill', icon: '🎯', label: 'Luyện kỹ năng' },
  { v: 'other', icon: '💬', label: 'Góp ý / báo lỗi / khác' },
];
const STATUS = {
  pending:   { label: 'Chờ duyệt',    cls: 'pending' },
  reviewing: { label: 'Đang làm',     cls: 'reviewing' },
  done:      { label: '✓ Hoàn thành', cls: 'done' },
  rejected:  { label: 'Chưa thực hiện', cls: 'rejected' },
};

function inferDomain() {
  if (typeof window !== 'undefined' && window.SUGGESTION_DOMAIN) {
    return String(window.SUGGESTION_DOMAIN);
  }
  const p = (location.pathname || '').toLowerCase();
  if (/(^|\/)(it-|playground|cipher|sql|algo|code-lab|web-playground)/.test(p)) return 'it';
  if (/(pharmacy|pharma|nha-thuoc|compounding|sac-ky|dispense|antibiogram|ps\d|bao-che|herb-garden|titration|pediatric|iv-infusion|gmp|patient-sim|gc\d|calibration-curve|pk-curve|bp-measure|dilution|3d-shelf|2d-arcade|grapher|l[12]-)/.test(p)) return 'pharmacy';
  return 'school';
}

function pageContext() {
  const url = location.pathname + location.search;
  let title = document.title || '';
  title = title.replace(/\s*[·|—-]\s*EduVerse.*$/i, '').trim();
  return { url, title };
}

function autoMount() {
  if (document.getElementById('sgf-root')) return;
  if (document.body?.dataset?.noSuggestionFab !== undefined) return;
  // Một số trang nhúng iframe — chỉ mount ở top frame để khỏi trùng nút
  try { if (window.top !== window.self) return; } catch { /* cross-origin, skip */ return; }
  injectStyles();
  const root = document.createElement('div');
  root.id = 'sgf-root';
  root.innerHTML = `
    <button id="sgf-fab" type="button" aria-label="Gửi đề nghị tới Ban điều hành AI"
            title="Gửi đề nghị cho Ban điều hành AI">
      <span class="sgf-fab-ico">🏛️</span>
      <span class="sgf-fab-lbl">Đề nghị</span>
    </button>
    <div id="sgf-modal" class="sgf-modal" hidden>
      <div class="sgf-backdrop" data-close></div>
      <div class="sgf-dialog" role="dialog" aria-modal="true" aria-labelledby="sgf-title">
        <div class="sgf-head">
          <div class="sgf-head-ico">🏛️</div>
          <div class="sgf-head-text">
            <h3 id="sgf-title">Ban điều hành AI</h3>
            <p>Trường do <b>AI điều hành</b> — gửi đề nghị, AI sẽ xem xét &amp;
               phản hồi. Yêu cầu được làm xong sẽ tick ✓ kèm lời nhắn.</p>
          </div>
          <button type="button" class="sgf-x" data-close aria-label="Đóng">✕</button>
        </div>

        <form id="sgf-form" class="sgf-form">
          <label class="sgf-lab">Loại đề nghị
            <select id="sgf-type" class="sgf-in">
              ${TYPES.map(t => `<option value="${t.v}">${t.icon} ${t.label}</option>`).join('')}
            </select>
          </label>
          <label class="sgf-lab">Tiêu đề <span class="sgf-req">*</span>
            <input id="sgf-title-in" class="sgf-in" maxlength="200"
                   placeholder="VD: Thêm dạng bài Toán có nhiều cách giải" />
          </label>
          <label class="sgf-lab">Mô tả chi tiết (tuỳ chọn)
            <textarea id="sgf-detail" class="sgf-in" rows="3" maxlength="2000"
                      placeholder="Càng cụ thể, AI càng dễ hiểu &amp; phản hồi đúng nhu cầu của bạn."></textarea>
          </label>
          <div class="sgf-ctx" id="sgf-ctx"></div>
          <div class="sgf-bar">
            <span class="sgf-msg" id="sgf-msg"></span>
            <button type="submit" class="sgf-send" id="sgf-send">📨 Gửi tới Ban điều hành</button>
          </div>
        </form>

        <div class="sgf-inbox">
          <div class="sgf-inbox-head">
            <span>Yêu cầu gần đây của bạn</span>
            <button type="button" class="sgf-reload" id="sgf-reload" title="Tải lại">↻</button>
          </div>
          <div class="sgf-inbox-list" id="sgf-inbox">Đang tải…</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  bind(root);
}

function bind(root) {
  const fab = root.querySelector('#sgf-fab');
  const modal = root.querySelector('#sgf-modal');
  const form = root.querySelector('#sgf-form');
  const msg = root.querySelector('#sgf-msg');
  const sendBtn = root.querySelector('#sgf-send');
  const ctxBox = root.querySelector('#sgf-ctx');
  const inbox = root.querySelector('#sgf-inbox');

  const ctx = pageContext();
  ctxBox.innerHTML = `📍 <b>Trang đang xem:</b> ${escapeHtml(ctx.title || ctx.url)}
                      <span class="sgf-ctx-url">${escapeHtml(ctx.url)}</span>`;

  const open = () => {
    modal.hidden = false;
    setTimeout(() => root.querySelector('#sgf-title-in')?.focus(), 50);
    loadInbox();
  };
  const close = () => { modal.hidden = true; msg.textContent = ''; };

  fab.addEventListener('click', open);
  modal.addEventListener('click', e => {
    if (e.target?.dataset?.close !== undefined) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
  root.querySelector('#sgf-reload').addEventListener('click', loadInbox);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const type = root.querySelector('#sgf-type').value;
    const title = root.querySelector('#sgf-title-in').value.trim();
    const userDetail = root.querySelector('#sgf-detail').value.trim();
    if (title.length < 4) { msg.textContent = '⚠️ Tiêu đề quá ngắn (≥ 4 ký tự)'; return; }

    const detail = [
      `[Trang: ${ctx.title || '—'}] ${ctx.url}`,
      userDetail,
    ].filter(Boolean).join('\n');

    sendBtn.disabled = true;
    msg.textContent = 'Đang gửi…';
    try {
      const r = await fetch('api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: inferDomain(), type, title, detail,
          student: (typeof getPlayerName === 'function' && getPlayerName()) || 'Ẩn danh',
        }),
      });
      if (!r.ok) {
        const e2 = await r.json().catch(() => ({}));
        msg.textContent = '⚠️ ' + (e2.error || 'Không gửi được');
        return;
      }
      msg.textContent = '✓ Đã gửi! Hiệu trưởng AI đang xem xét…';
      root.querySelector('#sgf-title-in').value = '';
      root.querySelector('#sgf-detail').value = '';
      loadInbox();
      // AI quyết định nền sau ~1-3s → reload để hiện phản hồi
      setTimeout(loadInbox, 2500);
      setTimeout(loadInbox, 6000);
    } catch {
      msg.textContent = '⚠️ Lỗi mạng — thử lại sau.';
    } finally {
      sendBtn.disabled = false;
    }
  });

  async function loadInbox() {
    inbox.textContent = 'Đang tải…';
    try {
      const dom = inferDomain();
      const r = await fetch(`api/requests?domain=${encodeURIComponent(dom)}&limit=50`);
      const data = await r.json();
      const me = (typeof getPlayerName === 'function' && getPlayerName()) || '';
      let items = (data.items || []);
      // Ưu tiên hiển thị của user; nếu chưa có gì thì hiện cái có phản hồi AI gần đây
      const mine = me ? items.filter(it => it.student === me) : [];
      const withReply = items.filter(it => it.admin_note && it.student !== me).slice(0, 3);
      const shown = (mine.length ? mine : withReply).slice(0, 8);
      if (!shown.length) {
        inbox.innerHTML = '<div class="sgf-empty">Chưa có yêu cầu nào. Hãy là người đầu tiên đề xuất cải tiến trang này! 🚀</div>';
        return;
      }
      inbox.innerHTML = shown.map(renderItem).join('');
    } catch {
      inbox.innerHTML = '<div class="sgf-empty">Không tải được — cần backend chạy.</div>';
    }
  }
}

function renderItem(it) {
  const sm = STATUS[it.status] || STATUS.pending;
  const t = (TYPES.find(t => t.v === it.type) || TYPES[4]);
  return `
    <div class="sgf-it">
      <div class="sgf-it-line">
        <span class="sgf-it-ico">${t.icon}</span>
        <span class="sgf-it-title">${escapeHtml(it.title)}</span>
        <span class="sgf-it-st ${sm.cls}">${sm.label}</span>
      </div>
      ${it.admin_note ? `<div class="sgf-it-note">🏛️ ${escapeHtml(it.admin_note)}</div>` : ''}
    </div>
  `;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    #sgf-fab {
      position: fixed; right: 18px; bottom: 18px; z-index: 2147483000;
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 16px 11px 13px; border: 0; border-radius: 999px; cursor: pointer;
      background: linear-gradient(135deg,#7c3aed,#4f46e5); color: #fff;
      font: 600 14px/1 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
      box-shadow: 0 10px 24px rgba(79,70,229,.45), 0 2px 6px rgba(0,0,0,.18);
      transition: transform .12s ease, box-shadow .12s ease, filter .12s ease;
    }
    #sgf-fab:hover { transform: translateY(-1px); filter: brightness(1.05); box-shadow: 0 14px 30px rgba(79,70,229,.55); }
    #sgf-fab:active { transform: translateY(0); }
    .sgf-fab-ico { font-size: 18px; line-height: 1; }
    .sgf-fab-lbl { letter-spacing: .2px; }
    @media (max-width: 540px) {
      #sgf-fab { right: 12px; bottom: 12px; padding: 11px 13px; }
      .sgf-fab-lbl { display: none; }
    }

    .sgf-modal { position: fixed; inset: 0; z-index: 2147483001; display: grid; place-items: center; }
    .sgf-modal[hidden] { display: none !important; }
    .sgf-backdrop { position: absolute; inset: 0; background: rgba(15,23,42,.55); backdrop-filter: blur(3px); }
    .sgf-dialog {
      position: relative; width: min(560px, calc(100vw - 24px)); max-height: calc(100vh - 36px);
      overflow: auto; background: #fff; color: #1f2937; border-radius: 16px;
      box-shadow: 0 30px 80px rgba(15,23,42,.45);
      font: 14px/1.5 system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
    }
    .sgf-head { display: flex; gap: 12px; align-items: flex-start; padding: 18px 20px 8px; }
    .sgf-head-ico { font-size: 30px; line-height: 1; }
    .sgf-head-text { flex: 1; }
    .sgf-head-text h3 { margin: 0 0 4px; font-size: 17px; color: #1f1147; }
    .sgf-head-text p { margin: 0; font-size: 12.5px; color: #4b5563; }
    .sgf-x {
      border: 0; background: rgba(0,0,0,.05); color: #475569; width: 30px; height: 30px;
      border-radius: 8px; cursor: pointer; font-size: 14px;
    }
    .sgf-x:hover { background: rgba(0,0,0,.1); }

    .sgf-form { display: flex; flex-direction: column; gap: 10px; padding: 8px 20px 14px; }
    .sgf-lab { display: flex; flex-direction: column; gap: 4px; font-size: 12.5px; color: #475569; font-weight: 600; }
    .sgf-req { color: #ef4444; }
    .sgf-in {
      width: 100%; box-sizing: border-box; padding: 9px 11px; border-radius: 9px;
      border: 1px solid #d1d5db; background: #fff; color: #1f2937; font: inherit;
    }
    .sgf-in:focus { outline: 2px solid #c7d2fe; border-color: #6366f1; }
    textarea.sgf-in { resize: vertical; min-height: 60px; }

    .sgf-ctx {
      font-size: 11.5px; color: #475569; background: #f1f5f9; border-radius: 8px;
      padding: 7px 10px; line-height: 1.45;
    }
    .sgf-ctx-url { display: block; opacity: .65; font-family: ui-monospace,SFMono-Regular,Menlo,monospace; font-size: 11px; margin-top: 2px; word-break: break-all; }

    .sgf-bar { display: flex; align-items: center; gap: 10px; }
    .sgf-msg { font-size: 12.5px; color: #475569; margin-right: auto; }
    .sgf-send {
      padding: 9px 16px; border: 0; border-radius: 10px; cursor: pointer; font: 700 13.5px/1 inherit;
      background: linear-gradient(135deg,#fbbf24,#f97316); color: #1f1147;
    }
    .sgf-send:hover { filter: brightness(1.06); }
    .sgf-send:disabled { opacity: .55; cursor: wait; }

    .sgf-inbox { border-top: 1px solid #e5e7eb; padding: 12px 20px 18px; background: #f8fafc; border-radius: 0 0 16px 16px; }
    .sgf-inbox-head { display: flex; align-items: center; justify-content: space-between; font-size: 12.5px; color: #475569; font-weight: 700; margin-bottom: 8px; }
    .sgf-reload { border: 0; background: transparent; cursor: pointer; color: #6366f1; font-size: 15px; }
    .sgf-inbox-list { display: flex; flex-direction: column; gap: 7px; }
    .sgf-empty { font-size: 12.5px; color: #6b7280; text-align: center; padding: 10px 0; font-style: italic; }
    .sgf-it { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 9px 11px; }
    .sgf-it-line { display: flex; align-items: center; gap: 8px; }
    .sgf-it-ico { font-size: 14px; }
    .sgf-it-title { flex: 1; font-size: 13px; font-weight: 600; color: #1f2937; }
    .sgf-it-st { font-size: 11px; padding: 2px 8px; border-radius: 7px; font-weight: 700; white-space: nowrap; }
    .sgf-it-st.pending   { background: #e2e8f0; color: #475569; }
    .sgf-it-st.reviewing { background: #fde68a; color: #92400e; }
    .sgf-it-st.done      { background: #bbf7d0; color: #065f46; }
    .sgf-it-st.rejected  { background: #fecaca; color: #991b1b; }
    .sgf-it-note {
      font-size: 12px; color: #1f2937; margin-top: 6px; padding: 6px 9px; border-radius: 8px;
      background: #fef3c7; border-left: 3px solid #f59e0b;
    }

    @media (prefers-color-scheme: dark) {
      .sgf-dialog { background: #1e1b4b; color: #e5e7eb; }
      .sgf-head-text h3 { color: #fff; }
      .sgf-head-text p { color: #cbd5e1; }
      .sgf-x { background: rgba(255,255,255,.08); color: #cbd5e1; }
      .sgf-x:hover { background: rgba(255,255,255,.15); }
      .sgf-lab { color: #cbd5e1; }
      .sgf-in { background: #312e81; color: #f1f5f9; border-color: #4338ca; }
      .sgf-in:focus { outline-color: #818cf8; border-color: #a5b4fc; }
      .sgf-ctx { background: #312e81; color: #c7d2fe; }
      .sgf-inbox { background: #1a1740; border-top-color: #312e81; }
      .sgf-inbox-head { color: #cbd5e1; }
      .sgf-it { background: #312e81; border-color: #4338ca; }
      .sgf-it-title { color: #f1f5f9; }
      .sgf-it-note { background: #422006; color: #fde68a; border-left-color: #f59e0b; }
      .sgf-msg { color: #cbd5e1; }
    }
  `;
  const st = document.createElement('style');
  st.setAttribute('data-injected', 'suggestion-fab');
  st.textContent = css;
  document.head.appendChild(st);
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoMount);
  } else {
    autoMount();
  }
}
