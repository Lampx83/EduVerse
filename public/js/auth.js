// Client-side helper cho hệ thống đăng nhập Tizia.
// Mọi page đã được server-side gate (chưa login → redirect /login.html), nên ở đây
// chỉ cần helpers gọi API + cache user (đồng bộ) cho UI.

import { KEYS, lsGet, lsSet } from './engine/storage.js';
import { loadWalletFromServer, clearLocalWallet } from './engine/wallet.js';

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
    try { window.tiziaTrack?.('login', { method: 'password', role: data.user.role || '' }); } catch {}
    return { ok: true, user: data.user, redirectTo: data.redirectTo || null };
  }
  return { ok: false, error: data?.error || `Lỗi ${r.status}` };
}

// Trục 1: nhận thêm grade/major/cohort/schoolName. Chỉ những field có giá trị mới
// được forward lên server (tránh ghi đè bằng null lúc đăng ký nhanh).
export async function register({ username, displayName, password, role, age,
                                 grade, major, cohort, schoolName }) {
  const body = { username, displayName, password, role, age };
  if (grade != null) body.grade = grade;
  if (major) body.major = major;
  if (cohort) body.cohort = cohort;
  if (schoolName) body.schoolName = schoolName;
  const r = await fetch(`${A}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(body),
  });
  const data = await r.json().catch(() => ({}));
  if (r.ok && data?.user) {
    _me = data.user;
    syncToLocal(_me);
    try {
      window.tiziaTrack?.('sign_up', { method: 'password', role: data.user.role || '' });
      // GA4 recommended event "login" — bắn cả 2 để cohort login bao gồm register.
      window.tiziaTrack?.('login', { method: 'register', role: data.user.role || '' });
    } catch {}
    return { ok: true, user: data.user, redirectTo: data.redirectTo || null };
  }
  return { ok: false, error: data?.error || `Lỗi ${r.status}` };
}

// Khai bổ sung profile cho user cũ (Trục 1 backfill). POST /api/auth/complete-profile.
export async function completeProfile({ grade, major, cohort, schoolName }) {
  const body = {};
  if (grade != null) body.grade = grade;
  if (major) body.major = major;
  if (cohort) body.cohort = cohort;
  if (schoolName) body.schoolName = schoolName;
  const r = await fetch(`${A}/complete-profile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(body),
  });
  const data = await r.json().catch(() => ({}));
  if (r.ok && data?.ok) {
    _me = data.user;
    syncToLocal(_me);
    return { ok: true, user: data.user, redirectTo: data.redirectTo || null };
  }
  return { ok: false, error: data?.error || `Lỗi ${r.status}` };
}

export async function logout() {
  try { window.tiziaTrack?.('logout', {}); } catch {}
  try {
    await fetch(`${A}/logout`, { method: 'POST', credentials: 'same-origin' });
  } catch {}
  _me = null;
  _mePromise = null;
  // Clear ví + uid cache trong localStorage để user kế tiếp login trên cùng
  // browser không bị "kế thừa" số liệu (fix cross-user wallet pollution).
  // KHÔNG xoá class code — học sinh đăng nhập lại vẫn ở lớp cũ.
  try { localStorage.removeItem('tizia:me'); } catch {}
  clearLocalWallet();
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
// Đồng thời kéo ví (XP/coin/streak) từ server về — trước đây ví chỉ ở localStorage
// nên đổi máy / clear cache = mất level. Kéo bất đồng bộ, không block UI.
function syncToLocal(user) {
  if (!user) return;
  // Phát hiện đổi tài khoản trên cùng browser: nếu `tizia:me.id` trước đó
  // khác id mới → wipe ví local của user cũ trước khi pull ví user mới về.
  // Tránh loadWalletFromServer() merge max(local_user_cũ, remote_user_mới).
  try {
    const prev = JSON.parse(localStorage.getItem('tizia:me') || 'null');
    if (prev && prev.id !== user.id) clearLocalWallet();
  } catch {}
  // Set `tizia:me` để wallet.js (_currentUid) biết user hiện tại — trước đây
  // chưa từng được set, khiến `_applySessionGuard` thấy curUid=null hoài.
  try {
    localStorage.setItem('tizia:me', JSON.stringify({
      id: user.id, username: user.username, role: user.role,
    }));
  } catch {}
  lsSet(KEYS.PLAYER_NAME, user.display_name);
  lsSet(KEYS.ROLE, user.role);
  loadWalletFromServer().catch(() => {});
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
