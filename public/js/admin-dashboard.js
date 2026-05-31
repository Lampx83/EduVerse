// Admin dashboard — single-page Vercel/Linear-like layout.
// Module bundles KPI cards, SVG charts, top breakdowns, system health, activity feed
// + legacy tabs (Góp ý / Người dùng / Trường / AI / Học liệu / Gói cước).
// Auto-refresh 60s, vanilla — không phụ thuộc thư viện ngoài.

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fmt = (t) => t ? new Date(t).toLocaleString('vi-VN', { hour12:false }) : '—';
const fmtNum = (n) => (n == null) ? '—' : Number(n).toLocaleString('vi-VN');

// ─────────── API helper ───────────
async function api(path, opts) {
  const r = await fetch(path, { credentials:'same-origin', headers:{'Content-Type':'application/json'}, ...opts });
  if (r.status === 401) { location.href = '/login.html?return=' + encodeURIComponent('/admin.html'); throw new Error('login'); }
  const data = await r.json().catch(()=>({}));
  return { status: r.status, ok: r.ok, data };
}

function toast(msg, kind='ok') {
  const t = $('#toast'); t.textContent = msg;
  t.classList.toggle('err', kind === 'err');
  t.classList.add('show');
  clearTimeout(toast._tm);
  toast._tm = setTimeout(() => t.classList.remove('show'), 2400);
}

function fmtBytes(b) {
  if (b == null) return '—';
  const u = ['B','KB','MB','GB','TB'];
  let i = 0; let n = b;
  while (n >= 1024 && i < u.length - 1) { n /= 1024; i++; }
  return n.toFixed(n < 10 ? 1 : 0) + ' ' + u[i];
}
function fmtUptime(s) {
  if (s == null) return '—';
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}
function humanTime(t) {
  if (!t) return '—';
  const diff = (Date.now() - t) / 1000;
  if (diff < 60) return Math.floor(diff) + 's trước';
  if (diff < 3600) return Math.floor(diff / 60) + ' phút trước';
  if (diff < 86400) return Math.floor(diff / 3600) + ' giờ trước';
  if (diff < 86400 * 7) return Math.floor(diff / 86400) + ' ngày trước';
  return new Date(t).toLocaleDateString('vi-VN');
}

// ─────────── Chart tooltip ───────────
const tooltip = $('#ctt');
function showTooltip(x, y, html) {
  tooltip.innerHTML = html;
  tooltip.style.left = (x + 10) + 'px';
  tooltip.style.top = (y - 30) + 'px';
  tooltip.style.opacity = '1';
}
function hideTooltip() { tooltip.style.opacity = '0'; }

// ─────────── SVG Line chart (area + line + dots) ───────────
// data: [{date, value}]; opts: {color, label, height, prefix}
function lineChart(host, data, opts = {}) {
  const w = host.clientWidth || 600;
  const h = opts.height || 200;
  const pad = { l: 36, r: 12, t: 12, b: 24 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;

  const values = data.map(d => d.value);
  const maxV = Math.max(1, ...values);
  const niceMax = Math.ceil(maxV * 1.15);
  const stepX = data.length > 1 ? innerW / (data.length - 1) : innerW;

  const pts = data.map((d, i) => ({
    x: pad.l + i * stepX,
    y: pad.t + innerH - (d.value / niceMax) * innerH,
    date: d.date, value: d.value,
  }));

  const linePath = 'M' + pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L');
  const areaPath = linePath + ` L${pts.at(-1).x.toFixed(1)},${(pad.t + innerH).toFixed(1)} L${pts[0].x.toFixed(1)},${(pad.t + innerH).toFixed(1)} Z`;

  // Y axis ticks (4)
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(r => ({
    y: pad.t + innerH * (1 - r),
    v: Math.round(niceMax * r),
  }));
  // X labels (every ~5 ticks)
  const xStep = Math.max(1, Math.floor(data.length / 6));
  const xLabels = data.map((d, i) => i % xStep === 0 || i === data.length - 1
    ? { x: pad.l + i * stepX, label: d.date.slice(5) } : null).filter(Boolean);

  const color = opts.color || 'var(--accent)';
  host.innerHTML = `
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      ${yTicks.map(t => `
        <line class="grid-line" x1="${pad.l}" x2="${w - pad.r}" y1="${t.y}" y2="${t.y}"></line>
        <text class="axis-y" x="${pad.l - 5}" y="${t.y + 3}" text-anchor="end">${fmtNum(t.v)}</text>
      `).join('')}
      <path class="area" d="${areaPath}" fill="${color}"></path>
      <path class="line" d="${linePath}" stroke="${color}"></path>
      ${pts.map((p, i) => `<circle class="dot" cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.5" fill="${color}" data-i="${i}"></circle>`).join('')}
      ${xLabels.map(l => `<text class="axis-x" x="${l.x}" y="${h - 6}" text-anchor="middle">${l.label}</text>`).join('')}
    </svg>`;

  // Interactivity
  host.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('mouseenter', (e) => {
      const i = Number(dot.dataset.i);
      const p = pts[i];
      const rect = host.getBoundingClientRect();
      showTooltip(rect.left + p.x, rect.top + p.y,
        `<b>${p.date}</b><br>${opts.label || 'Giá trị'}: <b>${fmtNum(p.value)}</b>${opts.suffix || ''}`);
      dot.setAttribute('r', '4');
    });
    dot.addEventListener('mouseleave', () => { hideTooltip(); dot.setAttribute('r', '2.5'); });
  });
}

// ─────────── SVG Bar chart (horizontal grouped: tokens by model) ───────────
// data: [{model, value, color?}]
function barChartH(host, data, opts = {}) {
  if (!data.length) { host.innerHTML = `<div class="empty">Chưa có dữ liệu</div>`; return; }
  const w = host.clientWidth || 600;
  const rowH = 28;
  const labelW = 130;
  const valueW = 60;
  const barW = w - labelW - valueW - 12;
  const maxV = Math.max(1, ...data.map(d => d.value));
  const palette = ['#fbbf24', '#60a5fa', '#a78bfa', '#22d3ee', '#f472b6', '#86efac', '#fcd34d', '#fb923c'];

  host.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:5px;">
      ${data.map((d, i) => {
        const pct = (d.value / maxV) * 100;
        const color = d.color || palette[i % palette.length];
        return `
          <div style="display:flex;align-items:center;gap:8px;height:${rowH}px;">
            <div style="width:${labelW}px;font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${esc(d.model)}">${esc(d.model)}</div>
            <div style="flex:1;background:rgba(255,255,255,0.04);border-radius:4px;height:18px;position:relative;overflow:hidden;">
              <div style="width:${pct}%;height:100%;background:${color};border-radius:4px;transition:width .4s;"></div>
            </div>
            <div style="width:${valueW}px;font-size:12px;font-weight:700;text-align:right;font-variant-numeric:tabular-nums;color:${color};">${fmtNum(d.value)}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ─────────── KPI cards ───────────
function deltaCmp(now, prev) {
  if (prev === 0 && now === 0) return { cls:'flat', icon:'→', text:'0' };
  if (prev === 0) return { cls:'up', icon:'↑', text:`+${now}` };
  const diff = now - prev;
  const pct = Math.round((diff / Math.max(1, prev)) * 100);
  if (diff === 0) return { cls:'flat', icon:'→', text:'0%' };
  if (diff > 0) return { cls:'up', icon:'↑', text:`+${diff} (${pct}%)` };
  return { cls:'dn', icon:'↓', text:`${diff} (${pct}%)` };
}

function renderKpi(overview) {
  const d = overview.delta || {};
  const heroCards = [
    { k:'schools', label:'Trường', icon:'🏫' },
    { k:'users', label:'Người dùng', icon:'👥', delta: deltaCmp(d.users_24h, d.users_prev_24h), deltaLabel:'24h' },
    { k:'attempts', label:'Lượt học', icon:'🎮', delta: deltaCmp(d.attempts_24h, d.attempts_prev_24h), deltaLabel:'24h' },
    { k:'requests_pending', label:'Góp ý chờ', icon:'💡', cls:'pending' },
  ];
  const subCards = [
    { k:'ai_decisions', label:'Quyết định AI', icon:'🤖', cls:'info' },
    { k:'ai_tokens_24h', label:'AI tokens 24h', icon:'⚡', cls:'info', fallback:'—' },
    { k:'ai_content', label:'Học liệu AI', icon:'📚' },
    { k:'paid_schools', label:'Trường trả phí', icon:'💳', cls:'ok' },
    { k:'active_sessions', label:'Đang online', icon:'🟢', cls:'ok' },
    { k:'events', label:'Sự kiện', icon:'📊' },
    { k:'requests', label:'Tổng góp ý', icon:'✉️' },
  ];
  const card = (c) => {
    const v = overview[c.k];
    if (v == null && !c.fallback) return '';
    const dlt = c.delta ? `<div class="delta ${c.delta.cls}">${c.delta.icon} ${c.delta.text} <small>· ${c.deltaLabel}</small></div>` : '';
    return `
      <div class="kpi ${c.cls || ''} ${c.k === 'requests_pending' && v > 0 ? 'pending' : ''}">
        <div class="label">${c.label}</div>
        <div class="value">${v != null ? fmtNum(v) : c.fallback}</div>
        ${dlt}
        <div class="icon">${c.icon}</div>
      </div>
    `;
  };
  return `
    <section class="section">
      <h2 class="section-title">📊 Tổng quan <span class="line"></span></h2>
      <div class="kpi-grid">${heroCards.map(card).join('')}</div>
      <div style="height:10px"></div>
      <div class="kpi-grid">${subCards.map(card).join('')}</div>
    </section>
  `;
}

// ─────────── Top breakdowns ───────────
function renderTopList(rows, opts) {
  if (!rows.length) return `<div class="empty">Chưa có dữ liệu</div>`;
  return `<div class="list-rank">${rows.map((r, i) => `
    <div class="row top${i + 1 <= 3 ? i + 1 : ''}">
      <div class="rank">#${i + 1}</div>
      <div class="name">${esc(r[opts.nameKey])}<span class="sub">${opts.sub ? opts.sub(r) : ''}</span></div>
      <div class="value">${fmtNum(r[opts.valueKey])}</div>
    </div>
  `).join('')}</div>`;
}

// ─────────── Activity feed ───────────
function renderFeed(items) {
  if (!items.length) return `<div class="empty">Chưa có hoạt động</div>`;
  const icons = { user_register:'👤', attempt:'🎮', request:'💡', event:'📊' };
  return `<div class="feed">${items.map(it => `
    <div class="item">
      <div class="kind">${icons[it.kind] || '·'}</div>
      <div class="body">
        <div class="label" title="${esc(it.label)}">${esc(it.label)}</div>
        <div class="time">${humanTime(it.t)}</div>
      </div>
    </div>
  `).join('')}</div>`;
}

// ─────────── System health ───────────
function renderSystem(sys) {
  if (!sys) return '';
  const memPct = sys.memory && sys.memory.heap_total
    ? Math.round((sys.memory.heap_used / sys.memory.heap_total) * 100) : null;
  const items = [
    { l:'Uptime', v: fmtUptime(sys.uptime_seconds), cls:'ok' },
    { l:'Memory (RSS)', v: fmtBytes(sys.memory?.rss), sub: memPct ? `heap ${memPct}%` : '' },
    { l:'Heap', v: `${fmtBytes(sys.memory?.heap_used)}`, sub: `/ ${fmtBytes(sys.memory?.heap_total)}` },
    { l:'DB size', v: fmtBytes(sys.db_size_bytes) },
    { l:'Node', v: sys.node_version },
    { l:'Platform', v: sys.platform },
  ];
  return `
    <section class="section">
      <h2 class="section-title">⚙️ Hệ thống <span class="line"></span></h2>
      <div class="syshealth">
        ${items.map(i => `
          <div class="item ${i.cls || ''}">
            <div class="l">${i.l}</div>
            <div class="v">${i.v} ${i.sub ? `<small>${i.sub}</small>` : ''}</div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

// ─────────── Tabs (legacy: Góp ý / Users / Schools / AI / Content / Billing) ───────────
let reqCache = [];
let reqFilter = 'all';
let userCache = [];
let currentTab = 'requests';

async function loadRequests() {
  const r = await api('/api/admin/requests?limit=300');
  reqCache = r.data.requests || [];
  renderRequests();
}
function renderRequests() {
  const filtered = reqFilter === 'all' ? reqCache : reqCache.filter(r => r.status === reqFilter);
  const counts = reqCache.reduce((m,r) => (m[r.status] = (m[r.status]||0)+1, m), {});
  const host = $('#tabbody');
  host.innerHTML = `
    <div class="toolbar">
      <span style="font-size:12px;opacity:.6">Lọc:</span>
      <select id="reqFilter">
        <option value="all">Tất cả (${reqCache.length})</option>
        <option value="pending">Chờ xử lý (${counts.pending||0})</option>
        <option value="reviewing">Đang xử lý (${counts.reviewing||0})</option>
        <option value="done">Hoàn thành (${counts.done||0})</option>
        <option value="rejected">Từ chối (${counts.rejected||0})</option>
      </select>
      <div class="spacer"></div>
      <button class="btn" id="reqRefresh">↻ Tải lại</button>
    </div>
    <table>
      <thead><tr>
        <th>#</th><th>Trường</th><th>Tiêu đề</th><th>Loại</th>
        <th>HS</th><th>Trạng thái</th><th>Vote</th><th>Tạo lúc</th><th></th>
      </tr></thead>
      <tbody>
      ${filtered.map(r => `
        <tr data-rid="${r.id}">
          <td>${r.id}</td>
          <td><span class="pill">${esc(r.domain)}</span></td>
          <td style="max-width:340px">${esc(r.title)}</td>
          <td><span class="pill">${esc(r.type)}</span></td>
          <td>${esc(r.student)}</td>
          <td><span class="pill ${r.status}">${r.status}</span></td>
          <td>${r.votes}</td>
          <td style="font-size:12px;opacity:.7">${fmt(r.created_at)}</td>
          <td class="actions" style="white-space:nowrap">
            <button class="btn" data-act="detail" data-rid="${r.id}" title="Xem chi tiết">👁</button>
            <button class="btn primary" data-act="reply" data-rid="${r.id}" title="Trả lời + đổi trạng thái">💬</button>
            <button class="btn danger" data-act="delreq" data-rid="${r.id}" title="Xoá yêu cầu">🗑</button>
          </td>
        </tr>
      `).join('')}
      </tbody>
    </table>
    ${filtered.length === 0 ? '<div class="empty">Không có yêu cầu nào trong bộ lọc.</div>' : ''}
  `;
  $('#reqFilter').value = reqFilter;
  $('#reqFilter').addEventListener('change', e => { reqFilter = e.target.value; renderRequests(); });
  $('#reqRefresh').addEventListener('click', loadRequests);
  host.querySelectorAll('[data-act]').forEach(b => {
    b.addEventListener('click', () => {
      const id = Number(b.dataset.rid);
      if (b.dataset.act === 'reply') openReplyModal(id);
      else if (b.dataset.act === 'delreq') {
        const r = reqCache.find(x => x.id === id);
        openConfirm({
          title: '🗑 Xoá yêu cầu?',
          msg: 'Hành động không thể undo. Cascade xoá: ai_decisions liên quan.',
          ctx: `#${r.id} · ${r.student} · ${r.title}`.slice(0, 100),
          onConfirm: async () => {
            const dr = await api(`/api/admin/requests/${id}`, { method:'DELETE' });
            if (!dr.ok) return toast('Lỗi: ' + (dr.data?.message || dr.data?.error || dr.status), 'err');
            toast('✓ Đã xoá');
            closeModal();
            await loadRequests();
          },
        });
      }
      else toggleDetail(id);
    });
  });
}
async function toggleDetail(id) {
  const tr = $(`#tabbody tr[data-rid="${id}"]`);
  if (!tr) return;
  const next = tr.nextElementSibling;
  if (next && next.classList.contains('detail-row')) {
    next.remove(); tr.classList.remove('expanded'); return;
  }
  tr.classList.add('expanded');
  const colspan = tr.children.length;
  const detail = document.createElement('tr');
  detail.className = 'detail-row';
  detail.innerHTML = `<td colspan="${colspan}"><div class="detail-box">Đang tải…</div></td>`;
  tr.after(detail);
  const r = reqCache.find(x => x.id === id);
  const dr = await api(`/api/requests/${id}/decisions`);
  const decisions = dr.data?.decisions || [];
  detail.querySelector('.detail-box').innerHTML = `
    <h4>Nội dung yêu cầu</h4>
    <div class="blk">${esc(r.title)}${r.detail ? `<div style="opacity:.7;margin-top:5px">${esc(r.detail)}</div>` : ''}</div>
    ${r.admin_note ? `<h4>Phản hồi đã gửi cho HS</h4><div class="blk note">${esc(r.admin_note)}</div>` : ''}
    <h4>Lịch sử quyết định AI (${decisions.length})</h4>
    ${decisions.length === 0 ? '<div class="blk" style="opacity:.6">Chưa có quyết định nào.</div>' :
      decisions.map(d => `
        <div class="blk">
          <div style="font-size:11px;opacity:.6;margin-bottom:4px">${fmt(d.created_at)} · <b>${d.decided_by}</b>${d.model ? ' · ' + d.model : ''} · confidence: ${(d.confidence||0).toFixed(2)}</div>
          <div><b>${d.action}</b> → ${d.status_applied}${d.priority_score != null ? ` · priority ${d.priority_score}` : ''}</div>
          ${d.reason ? `<div style="opacity:.75;margin-top:4px;font-size:11.5px">↳ ${esc(d.reason)}</div>` : ''}
          ${d.public_note ? `<div style="opacity:.85;margin-top:4px">💬 ${esc(d.public_note)}</div>` : ''}
        </div>
      `).join('')
    }
  `;
}
function openReplyModal(id) {
  const r = reqCache.find(x => x.id === id);
  if (!r) return;
  $('#modal-replyReq').style.display = '';
  $('#modal-setRole').style.display = 'none';
  $('#modal-ctx').innerHTML = `<b>#${r.id}</b> · ${esc(r.domain)}/${esc(r.type)} · gửi bởi <b>${esc(r.student)}</b><br>${esc(r.title)}`;
  $('#modal-status').value = r.status === 'rejected' ? 'rejected' : 'done';
  $('#modal-msg').value = '';
  $('#modal-bg').classList.add('show');
  $('#modal-bg').dataset.rid = id;
  $('#modal-msg').focus();
}
async function submitReply() {
  const id = Number($('#modal-bg').dataset.rid);
  const status = $('#modal-status').value;
  const message = $('#modal-msg').value.trim();
  if (message.length < 4) return toast('Lời nhắn quá ngắn (≥4 ký tự)', 'err');
  const r = await api(`/api/admin/requests/${id}/reply`, { method:'POST', body: JSON.stringify({ status, message }) });
  if (!r.ok) return toast('Lỗi: ' + (r.data?.error || r.status), 'err');
  toast(r.data.notified ? '✓ Đã gửi phản hồi + 🔔 cho HS' : '✓ Đã đóng yêu cầu');
  closeModal();
  await loadRequests();
}
function closeModal() { $('#modal-bg').classList.remove('show'); }

async function loadUsers() {
  const r = await api('/api/admin/users?limit=300');
  userCache = r.data.users || [];
  renderUsers();
}
function renderUsers() {
  const host = $('#tabbody');
  host.innerHTML = `
    <div class="toolbar">
      <span style="font-size:12px;opacity:.6">Tổng: <b>${userCache.length}</b> user</span>
      <div class="spacer"></div>
      <button class="btn primary" id="userCreate">➕ Tạo user mới</button>
      <button class="btn" id="userRefresh">↻ Tải lại</button>
    </div>
    <table>
      <thead><tr>
        <th>#</th><th>Username</th><th>Tên hiển thị</th><th>Vai trò</th>
        <th>Gói</th><th>Trường</th><th>Email</th><th>Tuổi</th><th>Đăng nhập gần nhất</th><th></th>
      </tr></thead>
      <tbody>
      ${userCache.map(u => `
        <tr>
          <td>${u.id}</td>
          <td>@${esc(u.username)}</td>
          <td>${esc(u.display_name)}</td>
          <td><span class="pill ${u.role}">${u.role}</span></td>
          <td><span class="pill">${esc(u.plan || 'free')}</span></td>
          <td>${u.school_id}</td>
          <td style="font-size:12px;opacity:.7">${u.email ? esc(u.email) : '—'}</td>
          <td style="font-size:12px;opacity:.7">${u.age || '—'}</td>
          <td style="font-size:12px;opacity:.7">${fmt(u.last_login)}</td>
          <td class="actions" style="white-space:nowrap">
            <button class="btn" data-act="role" data-uid="${u.id}" data-role="${u.role}" title="Đổi vai trò">👥</button>
            <button class="btn" data-act="edit" data-uid="${u.id}" title="Sửa thông tin">✏️</button>
            <button class="btn" data-act="pwd" data-uid="${u.id}" title="Đặt lại mật khẩu">🔑</button>
            <button class="btn danger" data-act="del" data-uid="${u.id}" title="Xoá user">🗑</button>
          </td>
        </tr>
      `).join('')}
      </tbody>
    </table>
  `;
  $('#userCreate').addEventListener('click', openCreateUserModal);
  $('#userRefresh').addEventListener('click', loadUsers);
  host.querySelectorAll('[data-act][data-uid]').forEach(b => {
    b.addEventListener('click', () => {
      const id = Number(b.dataset.uid);
      const u = userCache.find(x => x.id === id);
      if (!u) return;
      if (b.dataset.act === 'role') openRoleModal(id, b.dataset.role);
      else if (b.dataset.act === 'edit') openEditUserModal(u);
      else if (b.dataset.act === 'pwd') openResetPwdModal(u);
      else if (b.dataset.act === 'del') confirmDeleteUser(u);
    });
  });
}

// ─── CRUD Users ───
let schoolsCache = [];
async function refreshSchoolsCache() {
  const r = await api('/api/admin/schools');
  schoolsCache = r.data.schools || [];
}
function fillSchoolSelect(sel, currentId = null) {
  sel.innerHTML = schoolsCache.map(s =>
    `<option value="${s.id}" ${s.id === currentId ? 'selected' : ''}>${esc(s.name)} (${esc(s.code)})</option>`
  ).join('');
}
async function openCreateUserModal() {
  await refreshSchoolsCache();
  fillSchoolSelect($('#cu-school'), 1);
  ['cu-username','cu-password','cu-display','cu-email','cu-age'].forEach(id => $('#' + id).value = '');
  $('#cu-role').value = 'student';
  hideAllModals(); $('#modal-createUser').style.display = '';
  $('#modal-bg').classList.add('show');
  $('#cu-username').focus();
}
async function submitCreateUser() {
  const body = {
    username: $('#cu-username').value.trim(),
    password: $('#cu-password').value,
    display_name: $('#cu-display').value.trim(),
    role: $('#cu-role').value,
    email: $('#cu-email').value.trim() || null,
    age: Number($('#cu-age').value) || null,
    school_id: Number($('#cu-school').value) || 1,
  };
  const r = await api('/api/admin/users', { method:'POST', body: JSON.stringify(body) });
  if (!r.ok) return toast('Lỗi: ' + (r.data?.message || r.data?.error || r.status), 'err');
  toast('✓ Đã tạo @' + body.username);
  closeModal();
  await loadUsers();
}
async function openEditUserModal(u) {
  await refreshSchoolsCache();
  fillSchoolSelect($('#eu-school'), u.school_id);
  $('#eu-sub').textContent = `@${u.username} · id=${u.id} · role=${u.role}`;
  $('#eu-display').value = u.display_name || '';
  $('#eu-email').value = u.email || '';
  $('#eu-age').value = u.age || '';
  $('#modal-bg').dataset.uid = u.id;
  hideAllModals(); $('#modal-editUser').style.display = '';
  $('#modal-bg').classList.add('show');
  $('#eu-display').focus();
}
async function submitEditUser() {
  const uid = Number($('#modal-bg').dataset.uid);
  const body = {
    display_name: $('#eu-display').value.trim(),
    email: $('#eu-email').value.trim() || null,
    age: $('#eu-age').value || null,
    school_id: Number($('#eu-school').value) || 1,
  };
  const r = await api(`/api/admin/users/${uid}`, { method:'PATCH', body: JSON.stringify(body) });
  if (!r.ok) return toast('Lỗi: ' + (r.data?.message || r.data?.error || r.status), 'err');
  toast('✓ Đã cập nhật');
  closeModal();
  await loadUsers();
}
function openResetPwdModal(u) {
  $('#rp-sub').textContent = `@${u.username} · ${u.display_name} (id=${u.id})`;
  $('#rp-password').value = '';
  $('#modal-bg').dataset.uid = u.id;
  hideAllModals(); $('#modal-resetPwd').style.display = '';
  $('#modal-bg').classList.add('show');
  $('#rp-password').focus();
}
function genPassword(n = 16) {
  const charset = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  const arr = new Uint8Array(n);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => charset[b % charset.length]).join('');
}
async function submitResetPwd() {
  const uid = Number($('#modal-bg').dataset.uid);
  const password = $('#rp-password').value;
  if (password.length < 6) return toast('Mật khẩu ≥6 ký tự', 'err');
  const r = await api(`/api/admin/users/${uid}/password`, { method:'POST', body: JSON.stringify({ password }) });
  if (!r.ok) return toast('Lỗi: ' + (r.data?.message || r.data?.error || r.status), 'err');
  toast('✓ Đã đổi mật khẩu + huỷ mọi session');
  closeModal();
  await loadUsers();
}
function confirmDeleteUser(u) {
  openConfirm({
    title: '🗑 Xoá người dùng?',
    msg: 'Hành động không thể undo. Cascade xoá: sessions, oauth_identities, subscriptions, notifications. Attempts/achievements giữ nguyên (link bằng tên hiển thị, không phải user_id).',
    ctx: `@${u.username} · ${u.display_name} · role=${u.role}`,
    onConfirm: async () => {
      const r = await api(`/api/admin/users/${u.id}`, { method:'DELETE' });
      if (!r.ok) return toast('Lỗi: ' + (r.data?.message || r.data?.error || r.status), 'err');
      toast('✓ Đã xoá @' + r.data.deleted);
      closeModal();
      await loadUsers();
    },
  });
}

// ─── CRUD Schools ───
async function loadSchools() {
  const r = await api('/api/admin/schools');
  const schools = r.data.schools || [];
  schoolsCache = schools;
  const host = $('#tabbody');
  host.innerHTML = `
    <div class="toolbar">
      <span style="font-size:12px;opacity:.6">Tổng: <b>${schools.length}</b> trường</span>
      <div class="spacer"></div>
      <button class="btn primary" id="schoolCreate">➕ Tạo trường</button>
      <button class="btn" id="schoolRefresh">↻ Tải lại</button>
    </div>
    <table>
      <thead><tr>
        <th>#</th><th>Code</th><th>Tên</th><th>Domain</th>
        <th>Users</th><th>Lượt học</th><th>Góp ý</th><th>Tạo lúc</th><th></th>
      </tr></thead>
      <tbody>
      ${schools.map(s => `
        <tr>
          <td>${s.id}</td>
          <td><span class="pill">${esc(s.code)}</span></td>
          <td>${esc(s.name)}</td>
          <td style="font-size:12px;opacity:.7">${s.domain ? esc(s.domain) : '—'}</td>
          <td>${s.users}</td>
          <td>${s.attempts}</td>
          <td>${s.requests}</td>
          <td style="font-size:12px;opacity:.7">${fmt(s.created_at)}</td>
          <td class="actions" style="white-space:nowrap">
            <button class="btn" data-act="edit" data-sid="${s.id}" title="Sửa">✏️</button>
            <button class="btn danger" data-act="del" data-sid="${s.id}" ${s.id === 1 ? 'disabled style="opacity:.3;cursor:not-allowed"' : ''} title="${s.id === 1 ? 'Không thể xoá trường mặc định' : 'Xoá'}">🗑</button>
          </td>
        </tr>
      `).join('')}
      </tbody>
    </table>
  `;
  $('#schoolCreate').addEventListener('click', () => openSchoolModal(null));
  $('#schoolRefresh').addEventListener('click', loadSchools);
  host.querySelectorAll('[data-act][data-sid]').forEach(b => {
    if (b.hasAttribute('disabled')) return;
    b.addEventListener('click', () => {
      const id = Number(b.dataset.sid);
      const s = schools.find(x => x.id === id);
      if (!s) return;
      if (b.dataset.act === 'edit') openSchoolModal(s);
      else if (b.dataset.act === 'del') confirmDeleteSchool(s);
    });
  });
}
function openSchoolModal(school) {
  $('#sch-title').textContent = school ? '✏️ Sửa trường' : '🏫 Tạo trường';
  $('#sch-code').value = school?.code || '';
  $('#sch-code').disabled = !!school; // không cho đổi code khi edit
  $('#sch-name').value = school?.name || '';
  $('#sch-domain').value = school?.domain || '';
  $('#modal-bg').dataset.sid = school?.id || '';
  hideAllModals(); $('#modal-school').style.display = '';
  $('#modal-bg').classList.add('show');
  ($('#sch-name')).focus();
}
async function submitSchool() {
  const sid = $('#modal-bg').dataset.sid;
  const body = {
    code: $('#sch-code').value.trim(),
    name: $('#sch-name').value.trim(),
    domain: $('#sch-domain').value.trim() || null,
  };
  if (!body.name) return toast('Tên trường bắt buộc', 'err');
  const isEdit = !!sid;
  if (!isEdit && !body.code) return toast('Code bắt buộc khi tạo mới', 'err');
  const path = isEdit ? `/api/admin/schools/${sid}` : '/api/admin/schools';
  const method = isEdit ? 'PATCH' : 'POST';
  const r = await api(path, { method, body: JSON.stringify(body) });
  if (!r.ok) return toast('Lỗi: ' + (r.data?.message || r.data?.error || r.status), 'err');
  toast(isEdit ? '✓ Đã cập nhật trường' : '✓ Đã tạo trường');
  closeModal();
  if (currentTab === 'schools') await loadSchools();
}
function confirmDeleteSchool(s) {
  openConfirm({
    title: '🗑 Xoá trường?',
    msg: 'Chỉ xoá được trường KHÔNG còn user nào (chuyển user qua trường khác trước). Trường mặc định Tizia (id=1) không thể xoá.',
    ctx: `${s.name} (${s.code}) · ${s.users} user · ${s.attempts} lượt học`,
    onConfirm: async () => {
      const r = await api(`/api/admin/schools/${s.id}`, { method:'DELETE' });
      if (!r.ok) return toast('Lỗi: ' + (r.data?.message || r.data?.error || r.status), 'err');
      toast('✓ Đã xoá trường ' + r.data.deleted);
      closeModal();
      await loadSchools();
    },
  });
}

// ─── Generic confirm modal ───
function openConfirm({ title, msg, ctx, onConfirm }) {
  $('#cf-title').textContent = title || 'Xác nhận';
  $('#cf-msg').textContent = msg || '';
  $('#cf-ctx').textContent = ctx || '';
  $('#cf-ctx').style.display = ctx ? '' : 'none';
  hideAllModals(); $('#modal-confirm').style.display = '';
  $('#modal-bg').classList.add('show');
  $('#cf-submit').onclick = async () => { try { await onConfirm(); } catch(e) { toast('Lỗi: ' + e.message, 'err'); } };
}

function hideAllModals() {
  ['modal-replyReq','modal-setRole','modal-createUser','modal-editUser','modal-resetPwd','modal-confirm','modal-school'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}
function openRoleModal(uid, currentRole) {
  const u = userCache.find(x => x.id === uid);
  if (!u) return;
  $('#modal-replyReq').style.display = 'none';
  $('#modal-setRole').style.display = '';
  $('#modal-role-sub').textContent = `@${u.username} · ${u.display_name} · hiện tại: ${currentRole}`;
  $('#modal-role').value = currentRole;
  $('#modal-bg').dataset.uid = uid;
  $('#modal-bg').classList.add('show');
}
async function submitRole() {
  const uid = Number($('#modal-bg').dataset.uid);
  const role = $('#modal-role').value;
  const r = await api(`/api/admin/users/${uid}/role`, { method:'POST', body: JSON.stringify({ role }) });
  if (!r.ok) return toast('Lỗi đổi vai trò', 'err');
  toast('✓ Đã đổi vai trò → ' + role);
  closeModal();
  await loadUsers();
}

async function loadSimple(path, key, cols, fmtMap = {}) {
  const r = await api(path);
  const rows = r.data[key] || [];
  if (!rows.length) { $('#tabbody').innerHTML = '<div class="empty">Chưa có dữ liệu.</div>'; return; }
  const head = cols.map(c=>`<th>${c}</th>`).join('');
  const body = rows.map(row => '<tr>' + cols.map(c => {
    let v = row[c]; if (fmtMap[c]) v = fmtMap[c](v);
    if (['status','plan','role','action','decided_by'].includes(c)) v = `<span class="pill ${row[c]||''}">${v??''}</span>`;
    return `<td>${v ?? '—'}</td>`;
  }).join('') + '</tr>').join('');
  $('#tabbody').innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

const TABS = {
  requests:  { label:'💡 Góp ý', load: loadRequests, badge: () => reqCache.filter(r => r.status === 'pending').length },
  users:     { label:'👥 Người dùng', load: loadUsers },
  schools:   { label:'🏫 Trường', load: loadSchools },
  decisions: { label:'🤖 Quyết định AI', load: () => loadSimple('/api/admin/ai-decisions?limit=200', 'decisions',
    ['id','request_id','action','status_applied','decided_by','confidence','created_at'], { created_at: fmt }) },
  content:   { label:'📚 Học liệu AI', load: () => loadSimpleWithDelete('/api/admin/content?limit=200', 'content',
    ['id','school_id','subject','kind','flagged','created_at'], { created_at: fmt }, '/api/admin/content', 'content') },
  billing:   { label:'💳 Gói cước', load: () => loadSimple('/api/admin/billing', 'subscriptions',
    ['school_id','school','plan','status','current_period_end'], { current_period_end: fmt }) },
};

// loadSimple variant có cột "Xoá" cuối row (dùng cho content)
async function loadSimpleWithDelete(path, key, cols, fmtMap = {}, deleteBase, entityLabel) {
  const r = await api(path);
  const rows = r.data[key] || [];
  if (!rows.length) { $('#tabbody').innerHTML = '<div class="empty">Chưa có dữ liệu.</div>'; return; }
  const head = cols.map(c=>`<th>${c}</th>`).join('') + '<th></th>';
  const body = rows.map(row => '<tr>' + cols.map(c => {
    let v = row[c]; if (fmtMap[c]) v = fmtMap[c](v);
    if (['status','plan','role','action','decided_by'].includes(c)) v = `<span class="pill ${row[c]||''}">${v??''}</span>`;
    return `<td>${v ?? '—'}</td>`;
  }).join('') + `<td class="actions"><button class="btn danger" data-rid="${row.id}" title="Xoá">🗑</button></td>` + '</tr>').join('');
  $('#tabbody').innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
  $$('[data-rid]').forEach(b => {
    b.addEventListener('click', () => {
      const id = Number(b.dataset.rid);
      const row = rows.find(x => x.id === id);
      openConfirm({
        title: `🗑 Xoá ${entityLabel}?`,
        msg: 'Hành động không thể undo.',
        ctx: `id=${row.id}` + (row.title ? ' · ' + row.title.slice(0, 80) : ''),
        onConfirm: async () => {
          const dr = await api(`${deleteBase}/${id}`, { method:'DELETE' });
          if (!dr.ok) return toast('Lỗi: ' + (dr.data?.message || dr.data?.error || dr.status), 'err');
          toast('✓ Đã xoá');
          closeModal();
          await TABS[currentTab].load();
        },
      });
    });
  });
}

async function showTab(key) {
  currentTab = key;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.k === key));
  $('#tabbody').innerHTML = '<div class="loading">⏳ Đang tải…</div>';
  try { await TABS[key].load(); } catch(e) { $('#tabbody').innerHTML = `<div class="err">Lỗi: ${e.message}</div>`; }
}

// ─────────── Main render orchestrator ───────────
async function refresh() {
  const btn = $('#refreshBtn');
  btn?.classList.add('spin');
  try {
    const [ov, ts, tokenModelsRes, topSchools, topStudents, sys, activity] = await Promise.all([
      api('/api/admin/overview2'),
      api('/api/admin/timeseries?days=30'),
      api('/api/admin/ai-tokens-by-model?days=30'),
      api('/api/admin/top?metric=schools&limit=8'),
      api('/api/admin/top?metric=students&limit=8'),
      api('/api/admin/system'),
      api('/api/admin/activity?limit=40'),
    ]);

    if (ov.status === 403) {
      $('#app').innerHTML = `<div class="err">⛔ Cần quyền <b>admin</b>. Tài khoản hiện tại không đủ quyền.<br>
        Liên hệ quản trị để được cấp quyền.</div>`;
      return;
    }

    // Build sections
    const kpiHtml = renderKpi(ov.data || {});
    const chartsHtml = `
      <section class="section">
        <h2 class="section-title">📈 Xu hướng 30 ngày <span class="line"></span></h2>
        <div class="two-col">
          <div class="panel">
            <div class="panel-title">🎮 Lượt học theo ngày <span class="legend"><span><i style="background:var(--accent)"></i>Lượt học</span></span></div>
            <div class="chart" id="chart-attempts"></div>
          </div>
          <div class="panel">
            <div class="panel-title">👤 User mới theo ngày <span class="legend"><span><i style="background:var(--accent2)"></i>Đăng ký</span></span></div>
            <div class="chart" id="chart-users"></div>
          </div>
        </div>
        <div style="height:14px"></div>
        <div class="two-col">
          <div class="panel">
            <div class="panel-title">🤖 AI tokens theo ngày <span class="legend"><span><i style="background:var(--purple)"></i>Tokens</span></span></div>
            <div class="chart" id="chart-tokens"></div>
          </div>
          <div class="panel">
            <div class="panel-title">⚡ Tokens theo model</div>
            <div id="chart-tokens-model" style="padding:6px 0"></div>
          </div>
        </div>
      </section>
    `;
    const topsHtml = `
      <section class="section">
        <h2 class="section-title">🏆 Bảng xếp hạng <span class="line"></span></h2>
        <div class="two-col">
          <div class="panel">
            <div class="panel-title">🏫 Top trường theo lượt học</div>
            <div id="top-schools"></div>
          </div>
          <div class="panel">
            <div class="panel-title">🏆 Top học sinh năng động</div>
            <div id="top-students"></div>
          </div>
        </div>
      </section>
    `;
    const feedHtml = `
      <section class="section">
        <div class="two-col">
          <div class="panel">
            <div class="panel-title">📋 Hoạt động gần đây</div>
            <div id="activity-feed"></div>
          </div>
          <div class="panel">
            <div class="panel-title">⚙️ Hệ thống (snapshot)</div>
            <div id="sysblock"></div>
          </div>
        </div>
      </section>
    `;
    const tabsHtml = `
      <section class="section">
        <h2 class="section-title">📂 Quản lý chi tiết <span class="line"></span></h2>
        <div class="tabs" id="tabs">
          ${Object.entries(TABS).map(([k,v]) => {
            const badge = v.badge ? `<span class="count">${v.badge()}</span>` : '';
            return `<button class="tab" data-k="${k}">${v.label}${badge}</button>`;
          }).join('')}
        </div>
        <div id="tabbody"><div class="loading">⏳ Đang tải…</div></div>
      </section>
    `;
    $('#app').innerHTML = kpiHtml + chartsHtml + topsHtml + feedHtml + tabsHtml;

    // Render charts
    const series = (ts.data?.series || []);
    lineChart($('#chart-attempts'),
      series.map(s => ({ date: s.date, value: s.attempts })),
      { color:'var(--accent)', label:'Lượt' });
    lineChart($('#chart-users'),
      series.map(s => ({ date: s.date, value: s.users })),
      { color:'var(--accent2)', label:'User mới' });
    lineChart($('#chart-tokens'),
      series.map(s => ({ date: s.date, value: s.ai_tokens })),
      { color:'var(--purple)', label:'Tokens' });

    const tokenModels = (tokenModelsRes.data?.models || []).map(m => ({
      model: `${m.model} ${m.provider ? '(' + m.provider + ')' : ''}`,
      value: (m.pin || 0) + (m.pout || 0),
    }));
    barChartH($('#chart-tokens-model'), tokenModels);

    $('#top-schools').innerHTML = renderTopList(topSchools.data?.rows || [], {
      nameKey:'name', valueKey:'attempts',
      sub: r => ` · ${r.users || 0} user · ${r.requests || 0} góp ý`,
    });
    $('#top-students').innerHTML = renderTopList(topStudents.data?.rows || [], {
      nameKey:'display_name', valueKey:'attempts',
      sub: r => ` · @${r.username} · điểm ${fmtNum(r.total_score)}`,
    });
    $('#activity-feed').innerHTML = renderFeed(activity.data?.items || []);
    $('#sysblock').innerHTML = renderSystem(sys.data || {});

    // Wire up tabs
    document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => showTab(t.dataset.k)));
    await showTab(currentTab);
  } catch (e) {
    if (e.message !== 'login') console.error(e);
  } finally {
    setTimeout(() => $('#refreshBtn')?.classList.remove('spin'), 400);
  }
}

// ─────────── Init ───────────
async function init() {
  const meR = await api('/api/auth/me');
  $('#who').textContent = meR.data?.user ? '@' + meR.data.user.username : '';

  await refresh();

  // Auto-refresh 60s
  setInterval(refresh, 60_000);

  // Manual refresh
  $('#refreshBtn').addEventListener('click', refresh);
  document.addEventListener('keydown', e => {
    if (e.key === 'r' && !e.metaKey && !e.ctrlKey && !['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) {
      refresh();
    }
    if (e.key === 'Escape') closeModal();
  });

  // Modal wiring
  $('#modal-bg').addEventListener('click', e => { if (e.target === $('#modal-bg')) closeModal(); });
  $('#modal-cancel').addEventListener('click', closeModal);
  $('#modal-submit').addEventListener('click', submitReply);
  $('#modal-role-cancel').addEventListener('click', closeModal);
  $('#modal-role-submit').addEventListener('click', submitRole);

  // CRUD modals
  $('#cu-cancel').addEventListener('click', closeModal);
  $('#cu-submit').addEventListener('click', submitCreateUser);
  $('#eu-cancel').addEventListener('click', closeModal);
  $('#eu-submit').addEventListener('click', submitEditUser);
  $('#rp-cancel').addEventListener('click', closeModal);
  $('#rp-submit').addEventListener('click', submitResetPwd);
  $('#rp-gen').addEventListener('click', () => { $('#rp-password').value = genPassword(16); });
  $('#cf-cancel').addEventListener('click', closeModal);
  $('#sch-cancel').addEventListener('click', closeModal);
  $('#sch-submit').addEventListener('click', submitSchool);

  // Logout
  $('#logoutBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    await fetch('/api/auth/logout', { method:'POST', credentials:'same-origin' });
    location.href = '/login.html';
  });
}

init();
