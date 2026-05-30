// Header dùng chung — logo EduVerse bên trái, tài khoản đăng nhập bên phải.
// Trang chỉ cần `<script type="module" src="./js/auth-header.js"></script>` là tự gắn.

import { bootstrapMe, currentUser, logout } from './auth.js';

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
  .ev-header .ev-user {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 6px 10px 6px 6px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px;
  }
  .ev-header .ev-avatar {
    width: 30px; height: 30px; border-radius: 50%;
    display: inline-flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, #fbbf24, #f97316); color: #3e2723;
    font-weight: 800; font-size: 13px;
  }
  .ev-header .ev-avatar img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
  .ev-header .ev-user-text { display: flex; flex-direction: column; line-height: 1.15; }
  .ev-header .ev-user-name { font-size: 13px; font-weight: 700; }
  .ev-header .ev-user-meta { font-size: 10.5px; opacity: 0.7; }
  .ev-header .ev-logout {
    border: none; cursor: pointer; padding: 7px 12px;
    background: #dc2626; color: white; border-radius: 999px;
    font-weight: 600; font-size: 12.5px; font-family: inherit;
    transition: background 0.15s, transform 0.12s;
  }
  .ev-header .ev-logout:hover { background: #ef4444; transform: translateY(-1px); }
  .ev-header .ev-anon { font-size: 13px; opacity: 0.8; }
  .ev-header .ev-anon a { color: #fbbf24; text-decoration: none; font-weight: 700; }
  @media (max-width: 540px) {
    .ev-header { padding: 8px 12px; gap: 8px; }
    .ev-header .ev-brand .name { display: none; }
    .ev-header .ev-user-text { max-width: 110px; overflow: hidden; }
    .ev-header .ev-user-name { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
    .ev-header .ev-logout { padding: 7px 10px; }
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

function render(host, user) {
  if (!user) {
    host.innerHTML = `
      <a class="ev-brand" href="./"><span class="logo">🌌</span><span class="name">EduVerse</span></a>
      <span class="ev-spacer"></span>
      <span class="ev-anon">Chưa đăng nhập · <a href="login.html">Đăng nhập</a></span>
    `;
    return;
  }
  const r = ROLE_LABEL[user.role] || ROLE_LABEL.student;
  const ageStr = user.age != null ? ` · ${user.age}t` : '';
  const avatarInner = user.avatar_url
    ? `<img src="${user.avatar_url}" alt="" />`
    : initials(user.display_name);
  host.innerHTML = `
    <a class="ev-brand" href="./"><span class="logo">🌌</span><span class="name">EduVerse</span></a>
    <span class="ev-spacer"></span>
    <span class="ev-user" title="@${user.username}">
      <span class="ev-avatar">${avatarInner}</span>
      <span class="ev-user-text">
        <span class="ev-user-name">${user.display_name}</span>
        <span class="ev-user-meta">${r.ico} ${r.label}${ageStr}</span>
      </span>
    </span>
    <button class="ev-logout" id="ev-logout-btn">Đăng xuất</button>
  `;
  host.querySelector('#ev-logout-btn')?.addEventListener('click', () => logout());
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
