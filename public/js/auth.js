// Client-side helper cho hệ thống đăng nhập EduVerse.
// Mọi page đã được server-side gate (chưa login → redirect /login.html), nên ở đây
// chỉ cần helpers gọi API + cache user (đồng bộ) cho UI.

import { KEYS, lsGet, lsSet } from './engine/storage.js';

let _me = null;      // { id, username, display_name, role } hoặc null
let _mePromise = null;

// API base — trang được serve cùng origin nên đường tương đối là OK.
const A = 'api/auth';

export async function login(username, password) {
  const r = await fetch(`${A}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ username, password }),
  });
  const data = await r.json().catch(() => ({}));
  if (r.ok && data?.user) {
    _me = data.user;
    syncToLocal(_me);
    return { ok: true, user: data.user };
  }
  return { ok: false, error: data?.error || `Lỗi ${r.status}` };
}

export async function register({ username, displayName, password, role, age }) {
  const r = await fetch(`${A}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ username, displayName, password, role, age }),
  });
  const data = await r.json().catch(() => ({}));
  if (r.ok && data?.user) {
    _me = data.user;
    syncToLocal(_me);
    return { ok: true, user: data.user };
  }
  return { ok: false, error: data?.error || `Lỗi ${r.status}` };
}

export async function logout() {
  try {
    await fetch(`${A}/logout`, { method: 'POST', credentials: 'same-origin' });
  } catch {}
  _me = null;
  _mePromise = null;
  // KHÔNG xoá class code — học sinh đăng nhập lại vẫn ở lớp cũ.
  location.replace('login.html');
}

// Người dùng tự sửa hồ sơ (tên hiển thị + tuổi + email). Cập nhật cache _me khi thành công.
export async function updateProfile({ displayName, age, email }) {
  const r = await fetch(`${A}/me`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify({ displayName, age, email }),
  });
  const data = await r.json().catch(() => ({}));
  if (r.ok && data?.user) {
    _me = data.user;
    syncToLocal(_me);
    return { ok: true, user: data.user };
  }
  return { ok: false, error: data?.error || `Lỗi ${r.status}` };
}

export async function fetchMe() {
  if (_mePromise) return _mePromise;
  _mePromise = (async () => {
    try {
      const r = await fetch(`${A}/me`, { credentials: 'same-origin' });
      if (!r.ok) return null;
      const data = await r.json();
      _me = data?.user || null;
      if (_me) syncToLocal(_me);
      return _me;
    } catch { return null; }
  })();
  return _mePromise;
}

// Đồng bộ sang storage để code cũ (api.js: getPlayerName) đọc được mà không cần await.
function syncToLocal(user) {
  if (!user) return;
  lsSet(KEYS.PLAYER_NAME, user.display_name);
  lsSet(KEYS.ROLE, user.role);
}

// Truy cập đồng bộ — chỉ khả dụng sau khi fetchMe() đã chạy hoặc sau login().
export function currentUser() { return _me; }

// Tiện cho hiển thị: trả về display_name từ cache (localStorage) ngay cả khi
// chưa await fetchMe — tránh nháy UI rỗng. Server vẫn là nguồn chân lý cho /api/attempts.
export function cachedDisplayName() {
  return _me?.display_name || lsGet(KEYS.PLAYER_NAME) || '';
}

// Tự fetch /me khi script được import. Page đã pass auth-gate → 200; nếu fail (race
// điều kiện hiếm), fallback: redirect login.
export async function bootstrapMe({ redirectOnFail = true } = {}) {
  const user = await fetchMe();
  if (!user && redirectOnFail) {
    const ret = encodeURIComponent(location.pathname + location.search);
    location.replace('login.html?return=' + ret);
  }
  return user;
}
