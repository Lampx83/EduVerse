// Header dùng chung — logo EduVerse bên trái, tài khoản đăng nhập bên phải.
// Bấm vào chip tài khoản → mở dialog hồ sơ (thông tin + nút Đăng xuất).
// Trang chỉ cần `<script type="module" src="./js/auth-header.js"></script>` là tự gắn.

import { bootstrapMe, currentUser, logout, updateProfile } from './auth.js';
import { PLAN_BADGES, USER_PLANS, effectivePlanId } from './plans.js';

const ROLE_LABEL = {
  pupil:   { ico: '🎒', label: 'Học sinh' },
  student: { ico: '🎓', label: 'Sinh viên' },
  teacher: { ico: '👨‍🏫', label: 'Giảng viên' },
};

const CSS = `
  .ev-header {
    position: sticky; top: 0; z-index: 100;
    display: flex; align-items: center; gap: 12px;
    padding: 10px 18px;
    background: rgba(15, 23, 42, 0.85);
    border-bottom: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(14px);
    color: white; font-family: 'Inter', system-ui, sans-serif;
  }
  .ev-header .ev-brand {
    display: inline-flex; align-items: center; gap: 8px;
    font-weight: 800; font-size: 16px; letter-spacing: -0.2px;
    color: white; text-decoration: none;
  }
  .ev-header .ev-brand .logo { font-size: 22px; line-height: 1; }
  .ev-header .ev-brand .name {
    background: linear-gradient(135deg, #ffffff 0%, #fbbf24 60%, #f97316 100%);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .ev-header .ev-spacer { flex: 1; }

  .ev-user-wrap { position: relative; }
  .ev-header .ev-user {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 6px 12px 6px 6px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px; cursor: pointer; font-family: inherit; color: inherit;
    transition: background 0.15s, border-color 0.15s, transform 0.12s;
  }
  .ev-header .ev-user:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.22); }
  .ev-header .ev-avatar {
    width: 30px; height: 30px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #fbbf24, #f97316); color: #3e2723;
    font-weight: 800; font-size: 13px;
  }
  .ev-header .ev-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
  .ev-header .ev-user-text { display: flex; flex-direction: column; line-height: 1.15; text-align: left; }
  .ev-header .ev-user-name { font-size: 13px; font-weight: 700; }
  .ev-header .ev-user-meta { font-size: 10.5px; opacity: 0.7; }
  .ev-header .ev-caret { font-size: 10px; opacity: 0.6; margin-left: 1px; transition: transform 0.2s; }
  .ev-user-wrap.open .ev-caret { transform: rotate(180deg); }

  /* Dialog hồ sơ */
  .ev-profile {
    position: absolute; top: calc(100% + 10px); right: 0; z-index: 300;
    width: 280px; max-width: calc(100vw - 24px); padding: 18px;
    background: rgba(17,24,39,0.97); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px; box-shadow: 0 24px 60px rgba(0,0,0,0.55);
    backdrop-filter: blur(16px);
    opacity: 0; transform: translateY(-8px) scale(0.98); pointer-events: none;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .ev-user-wrap.open .ev-profile { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
  .ev-profile .pf-head { display: flex; align-items: center; gap: 13px; }
  .ev-profile .pf-avatar {
    width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
    display: inline-flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #fbbf24, #f97316); color: #3e2723;
    font-weight: 800; font-size: 19px;
  }
  .ev-profile .pf-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
  .ev-profile .pf-name { font-size: 16px; font-weight: 800; line-height: 1.2; }
  .ev-profile .pf-role { font-size: 12px; opacity: 0.75; margin-top: 3px; }
  .ev-profile .pf-rows { margin: 15px 0 14px; display: flex; flex-direction: column; gap: 9px; font-size: 12.5px; }
  .ev-profile .pf-row { display: flex; justify-content: space-between; gap: 12px; }
  .ev-profile .pf-row .k { opacity: 0.55; white-space: nowrap; }
  .ev-profile .pf-row .v { font-weight: 600; text-align: right; word-break: break-word; }
  .ev-profile .pf-divider { height: 1px; background: rgba(255,255,255,0.1); margin: 0 0 13px; }
  .ev-profile .pf-actions { display: flex; gap: 8px; }
  .ev-profile .pf-btn {
    flex: 1; border: none; cursor: pointer; padding: 11px;
    border-radius: 11px; font-weight: 700; font-size: 13px; font-family: inherit;
    display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    transition: background 0.15s, transform 0.12s, border-color 0.15s;
  }
  .ev-profile .pf-edit-btn { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.16); color: #fff; }
  .ev-profile .pf-edit-btn:hover { background: rgba(255,255,255,0.14); transform: translateY(-1px); }
  .ev-profile .pf-logout { background: #dc2626; color: #fff; }
  .ev-profile .pf-logout:hover { background: #ef4444; transform: translateY(-1px); }

  /* Chế độ sửa */
  .ev-profile .pf-edit { display: none; }
  .ev-profile.editing .pf-view { display: none; }
  .ev-profile.editing .pf-edit { display: block; }
  .ev-profile .pf-field { margin-bottom: 11px; }
  .ev-profile .pf-field label { display: block; font-size: 11.5px; opacity: 0.65; margin-bottom: 5px; }
  .ev-profile .pf-field input {
    width: 100%; padding: 9px 11px; border-radius: 9px;
    border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.96);
    color: #1f2937; font-size: 13.5px; font-family: inherit;
  }
  .ev-profile .pf-field input:focus { outline: 2px solid #fbbf24; }
  .ev-profile .pf-err {
    display: none; font-size: 12px; color: #fecaca;
    background: rgba(244,63,94,0.16); border: 1px solid rgba(244,63,94,0.4);
    border-radius: 8px; padding: 7px 9px; margin-bottom: 10px;
  }
  .ev-profile .pf-err.show { display: block; }

  .ev-header .ev-anon { font-size: 13px; opacity: 0.8; }
  .ev-header .ev-anon a { color: #fbbf24; text-decoration: none; font-weight: 700; }

  /* Plan badge (Free/Plus/Pro) — hiển thị cạnh tên trong chip user và trong dialog */
  .ev-plan-pill {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 1px 7px; border-radius: 7px;
    font-size: 10.5px; font-weight: 800; letter-spacing: .2px;
    margin-left: 6px; vertical-align: middle;
  }
  .ev-plan-cta {
    display: inline-block; margin-top: 12px; width: 100%;
    text-align: center; padding: 9px 12px; border-radius: 10px;
    background: linear-gradient(135deg, #a855f7, #ec4899); color: #fff;
    font-weight: 800; font-size: 12.5px; text-decoration: none;
    box-shadow: 0 4px 14px rgba(168,85,247,.35);
    transition: transform .12s, box-shadow .15s;
  }
  .ev-plan-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(168,85,247,.5); }
  .ev-plan-cta.muted { background: rgba(255,255,255,.08); color: #fff; box-shadow: none; }
  @media (max-width: 540px) {
    .ev-header { padding: 8px 12px; gap: 8px; }
    .ev-header .ev-brand .name { display: none; }
    .ev-header .ev-user-text { max-width: 120px; overflow: hidden; }
    .ev-header .ev-user-name { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  }
`;

function injectStyle() {
  if (document.getElementById('ev-header-css')) return;
  const s = document.createElement('style');
  s.id = 'ev-header-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}

function initials(name) {
  return String(name || '?').trim().split(/\s+/).slice(-2).map(w => w[0]?.toUpperCase() || '').join('') || '?';
}

function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function planPill(planId) {
  const b = PLAN_BADGES[planId] || PLAN_BADGES.free;
  return `<span class="ev-plan-pill" style="background:${b.bg};color:${b.color}" title="Gói cước hiện tại">${b.label}</span>`;
}

function fmtExpire(ms) {
  if (!ms) return '';
  try {
    const d = new Date(ms);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  } catch { return ''; }
}

function render(host, user) {
  if (!user) {
    host.innerHTML = `
      <a class="ev-brand" href="./"><span class="logo">🌌</span><span class="name">EduVerse</span></a>
      <span class="ev-spacer"></span>
      <a href="pricing.html" class="ev-plan-pill" style="background:rgba(168,85,247,.22);color:#a855f7;text-decoration:none">✨ Xem gói</a>
      <span class="ev-anon" style="margin-left:10px">Chưa đăng nhập · <a href="login.html">Đăng nhập</a></span>
    `;
    return;
  }
  const r = ROLE_LABEL[user.role] || ROLE_LABEL.student;
  const ageStr = user.age != null ? ` · ${user.age}t` : '';
  const avatarInner = user.avatar_url
    ? `<img src="${esc(user.avatar_url)}" alt="" />`
    : initials(user.display_name);
  const emailRow = user.email
    ? `<div class="pf-row"><span class="k">Email</span><span class="v">${esc(user.email)}</span></div>` : '';
  const ageRow = user.age != null
    ? `<div class="pf-row"><span class="k">Tuổi</span><span class="v">${user.age}</span></div>` : '';
  const planId = effectivePlanId(user);
  const planDef = USER_PLANS[planId];
  const planRow = `<div class="pf-row"><span class="k">Gói cước</span><span class="v">${planPill(planId)}</span></div>`;
  const expireRow = (planId !== 'free' && planId !== 'guest' && user.plan_expires_at)
    ? `<div class="pf-row"><span class="k">Hết hạn</span><span class="v">${fmtExpire(user.plan_expires_at)}</span></div>` : '';
  // CTA: free/guest → Nâng cấp Pro; plus → lên Pro; pro → chỉ "Quản lý gói"
  const planCta = planId === 'pro'
    ? `<a class="ev-plan-cta muted" href="pricing.html">Quản lý gói cước</a>`
    : `<a class="ev-plan-cta" href="pricing.html">✨ Nâng cấp ${planId === 'plus' ? 'Pro' : 'Plus/Pro'}</a>`;

  host.innerHTML = `
    <a class="ev-brand" href="./"><span class="logo">🌌</span><span class="name">EduVerse</span></a>
    <span class="ev-spacer"></span>
    <div class="ev-user-wrap" id="ev-user-wrap">
      <button class="ev-user" id="ev-user-btn" type="button" aria-haspopup="dialog" aria-expanded="false" title="Xem hồ sơ">
        <span class="ev-avatar">${avatarInner}</span>
        <span class="ev-user-text">
          <span class="ev-user-name">${esc(user.display_name)}${planPill(planId)}</span>
          <span class="ev-user-meta">${r.ico} ${r.label}${ageStr}</span>
        </span>
        <span class="ev-caret">▾</span>
      </button>
      <div class="ev-profile" role="dialog" aria-label="Hồ sơ tài khoản">
        <div class="pf-head">
          <span class="pf-avatar">${avatarInner}</span>
          <div>
            <div class="pf-name">${esc(user.display_name)}</div>
            <div class="pf-role">${r.ico} ${r.label}</div>
          </div>
        </div>

        <!-- Xem -->
        <div class="pf-view">
          <div class="pf-rows">
            <div class="pf-row"><span class="k">Tài khoản</span><span class="v">@${esc(user.username)}</span></div>
            <div class="pf-row"><span class="k">Vai trò</span><span class="v">${r.label}</span></div>
            ${ageRow}
            ${emailRow}
            ${planRow}
            ${expireRow}
          </div>
          ${planCta}
          <div class="pf-divider" style="margin-top:14px"></div>
          <div class="pf-actions">
            <button class="pf-btn pf-edit-btn" id="ev-edit-btn" type="button">✏️ Chỉnh sửa</button>
            <button class="pf-btn pf-logout" id="ev-logout-btn" type="button">🚪 Đăng xuất</button>
          </div>
        </div>

        <!-- Sửa -->
        <form class="pf-edit" id="ev-edit-form">
          <div class="pf-err" id="ev-edit-err"></div>
          <div class="pf-field">
            <label>Tên hiển thị</label>
            <input id="ev-f-name" maxlength="60" required value="${esc(user.display_name)}" />
          </div>
          <div class="pf-field">
            <label>Tuổi</label>
            <input id="ev-f-age" type="number" min="3" max="100" inputmode="numeric" value="${user.age ?? ''}" />
          </div>
          <div class="pf-field">
            <label>Email (tuỳ chọn)</label>
            <input id="ev-f-email" type="email" maxlength="120" placeholder="ten@email.com" value="${esc(user.email || '')}" />
          </div>
          <div class="pf-actions">
            <button class="pf-btn pf-edit-btn" id="ev-cancel-btn" type="button">Huỷ</button>
            <button class="pf-btn pf-logout" id="ev-save-btn" type="submit" style="background:#16a34a">💾 Lưu</button>
          </div>
        </form>
      </div>
    </div>
  `;

  const wrap = host.querySelector('#ev-user-wrap');
  const btn = host.querySelector('#ev-user-btn');
  const profile = wrap.querySelector('.ev-profile');
  const close = () => { wrap.classList.remove('open'); profile.classList.remove('editing'); btn.setAttribute('aria-expanded', 'false'); };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = wrap.classList.toggle('open');
    if (!open) profile.classList.remove('editing');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Click trong dialog không đóng; click ra ngoài / Esc → đóng.
  profile.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  host.querySelector('#ev-logout-btn')?.addEventListener('click', () => logout());

  // --- Chỉnh sửa hồ sơ ---
  host.querySelector('#ev-edit-btn')?.addEventListener('click', () => profile.classList.add('editing'));
  host.querySelector('#ev-cancel-btn')?.addEventListener('click', () => profile.classList.remove('editing'));
  const form = host.querySelector('#ev-edit-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const errEl = host.querySelector('#ev-edit-err');
    const saveBtn = host.querySelector('#ev-save-btn');
    errEl.classList.remove('show');
    saveBtn.disabled = true; saveBtn.textContent = 'Đang lưu…';
    const res = await updateProfile({
      displayName: host.querySelector('#ev-f-name').value.trim(),
      age: Number(host.querySelector('#ev-f-age').value),
      email: host.querySelector('#ev-f-email').value.trim(),
    });
    if (res?.ok) {
      // Vẽ lại header với thông tin mới, mở lại dialog ở chế độ xem.
      render(host, res.user);
      host.querySelector('#ev-user-wrap')?.classList.add('open');
      host.querySelector('#ev-user-btn')?.setAttribute('aria-expanded', 'true');
    } else {
      errEl.textContent = res?.error || 'Lưu thất bại';
      errEl.classList.add('show');
      saveBtn.disabled = false; saveBtn.textContent = '💾 Lưu';
    }
  });
}

export async function mountAuthHeader() {
  injectStyle();
  // Cho phép trang định sẵn vị trí: <header id="auth-header"></header>; nếu không có
  // thì tự chèn vào đầu body.
  let host = document.getElementById('auth-header');
  if (!host) {
    host = document.createElement('header');
    host.id = 'auth-header';
    document.body.prepend(host);
  }
  host.className = 'ev-header';
  // Vẽ tạm với cache (nếu có) để giảm nháy.
  const cached = currentUser();
  if (cached) render(host, cached);
  const user = await bootstrapMe({ redirectOnFail: false });
  render(host, user);
  return user;
}

// Auto-mount khi script được load.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountAuthHeader);
} else {
  mountAuthHeader();
}
