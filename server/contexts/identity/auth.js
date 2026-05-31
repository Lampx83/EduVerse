// Đăng nhập cho Tizia: scrypt password + opaque session token (cookie httpOnly).
// Không thêm thư viện ngoài — dùng node:crypto + better-sqlite3 sẵn có.

import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
import {
  createUser, getUserByUsername, getUserById, touchLogin, updateDisplayName, updateUserEditable,
  createSession, getSession, deleteSession,
  resolveSchoolByEmail, getSchoolByCode,
} from '../../db.js';
import { effectivePlan, meetsPlan, USER_PLANS } from '../billing/user-plans.js';

const COOKIE_NAME = 'tizia_sid';
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 ngày
const SCRYPT_KEYLEN = 64;

// ── Password hashing (scrypt) ──
function hashPassword(password) {
  const salt = randomBytes(16);
  const hash = scryptSync(String(password), salt, SCRYPT_KEYLEN);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

function verifyPassword(password, stored) {
  try {
    const [algo, saltHex, hashHex] = String(stored || '').split('$');
    if (algo !== 'scrypt' || !saltHex || !hashHex) return false;
    const expected = Buffer.from(hashHex, 'hex');
    const actual = scryptSync(String(password), Buffer.from(saltHex, 'hex'), expected.length);
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  } catch { return false; }
}

// ── Cookie helpers (tránh phụ thuộc cookie-parser) ──
function parseCookies(req) {
  const raw = req.headers.cookie;
  if (!raw) return {};
  const out = {};
  for (const part of raw.split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  }
  return out;
}

function buildSetCookie(name, value, { maxAge, expires, path = '/', sameSite = 'Lax' } = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`, `Path=${path}`, 'HttpOnly', `SameSite=${sameSite}`];
  if (maxAge != null) parts.push(`Max-Age=${Math.floor(maxAge / 1000)}`);
  if (expires) parts.push(`Expires=${new Date(expires).toUTCString()}`);
  return parts.join('; ');
}

function setSessionCookie(res, token, expiresAt) {
  res.setHeader('Set-Cookie', buildSetCookie(COOKIE_NAME, token, {
    maxAge: expiresAt - Date.now(), expires: expiresAt,
  }));
}

function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

// ── Lấy user hiện tại từ cookie ──
export function getCurrentUser(req) {
  const cookies = parseCookies(req);
  const token = cookies[COOKIE_NAME];
  if (!token) return null;
  const sess = getSession(token);
  if (!sess) return null;
  return {
    id: sess.user_id,
    username: sess.username,
    display_name: sess.display_name,
    role: sess.role,
    school_id: sess.school_id,   // cần cho attachTenant (multi-tenant enforcement)
    plan: sess.plan || 'free',
    plan_expires_at: sess.plan_expires_at || null,
    token: sess.token,
  };
}

// ── Middleware: gắn req.user (nullable) ──
export function attachUser(req, _res, next) {
  req.user = getCurrentUser(req);
  next();
}

// ── Middleware: bắt buộc đăng nhập cho API ──
export function requireAuth(req, res, next) {
  if (!req.user) req.user = getCurrentUser(req);
  if (!req.user) return res.status(401).json({ error: 'unauthorized', needLogin: true });
  next();
}

// ── Middleware: bắt buộc gói cước ≥ level (B2C user plan) ──
// Dùng cho route premium (vd /api/ai/grade-essay yêu cầu 'pro'). Trả 402 Payment
// Required + meta để FE bật paywall modal. requireAuth phải chạy trước để có req.user.
export function requirePlan(minPlan) {
  return (req, res, next) => {
    if (!req.user) req.user = getCurrentUser(req);
    if (!req.user) return res.status(401).json({ error: 'unauthorized', needLogin: true });
    const eff = effectivePlan(req.user);
    if (!meetsPlan(eff.id, minPlan)) {
      return res.status(402).json({
        error: 'plan_required', current_plan: eff.id, required_plan: minPlan,
        message: `Tính năng này cần gói "${USER_PLANS[minPlan]?.name || minPlan}". Gói hiện tại: ${eff.name}.`,
        upgrade_url: '/pricing.html',
      });
    }
    next();
  };
}

// ── Gate trang HTML: chưa đăng nhập → redirect /login.html ──
// Whitelist các path không cần login (login/register, asset chung, health, /api/auth, PWA).
const PUBLIC_PATH_PREFIXES = [
  '/api/auth/', '/api/health',
  // Cổng thanh toán callback (VNPay return + IPN). Xác thực bằng chữ ký HMAC,
  // KHÔNG bằng cookie — VNPay gọi server-to-server không kèm session. create-order
  // KHÔNG nằm ở đây nên vẫn yêu cầu đăng nhập.
  '/api/payment/vnpay/',
  // Bundle JS/scenarios không phải bí mật — guest cần để render trang chủ + trường Mầm non.
  '/js/',
  // Bản đồ khuôn viên (iframe nhúng vào school.html) — không có bí mật, là HTML/JS thuần.
  '/campus-proto/',
  '/manifest.webmanifest', '/sw.js', '/favicon',
  '/vendor/', '/models/',
];
const PUBLIC_PATH_EXACT = new Set([
  '/login.html', '/register.html', '/login', '/register',
  // SEO: trang công khai crawlable cho Googlebot (xem contexts/seo).
  '/welcome', '/robots.txt', '/sitemap.xml',
  // CHẾ ĐỘ KHÁCH (không đăng nhập): được xem trang chủ + chợ app + trang trường
  // và các trang nội dung lớp học. Frontend tự khoá trường ≠ Mầm non cho khách
  // (xem isGuestDomain trong public/js/engine/domain.js). Mọi /api/* ghi dữ liệu
  // (attempts, classes, lessons…) vẫn yêu cầu đăng nhập, nên không có lỗ hổng.
  '/', '/index.html',
  '/apps.html',
  '/school.html',
  '/subject.html', '/module.html', '/lesson.html', '/weekly-lesson.html',
  '/quiz.html',
  // Trang bảng giá — khách phải xem được trước khi đăng ký/mua.
  '/pricing.html', '/pricing',
]);

function isPublicPath(p) {
  if (PUBLIC_PATH_EXACT.has(p)) return true;
  for (const pref of PUBLIC_PATH_PREFIXES) if (p.startsWith(pref)) return true;
  // Cho phép các file css/png/svg/woff lẻ — chúng vô hại và sẽ được duyệt qua.
  return /\.(css|png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|map)$/i.test(p);
}

export function makeAuthGate({ basePath = '' } = {}) {
  return function authGate(req, res, next) {
    if (isPublicPath(req.path)) return next();
    if (!req.user) req.user = getCurrentUser(req);
    if (req.user) return next();

    // API → 401 JSON; trang HTML → redirect login.
    if (req.path.startsWith('/api/')) {
      return res.status(401).json({ error: 'unauthorized', needLogin: true });
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      return res.status(401).send('Cần đăng nhập');
    }
    const ret = encodeURIComponent((basePath || '') + req.originalUrl);
    return res.redirect(`${basePath || ''}/login.html?return=${ret}`);
  };
}

// ── Routes ──
const USERNAME_RE = /^[a-z0-9_.-]{3,32}$/i;

export function attachAuth(r) {
  // POST /api/auth/register
  r.post('/api/auth/register', (req, res) => {
    const b = req.body ?? {};
    const username = String(b.username || '').trim();
    const password = String(b.password || '');
    const display_name = String(b.displayName || b.display_name || username).trim().slice(0, 60);
    const roleRaw = String(b.role || 'student').toLowerCase();
    const role = ['pupil', 'student', 'teacher'].includes(roleRaw) ? roleRaw : 'student';
    const ageRaw = Number(b.age);
    const age = Number.isFinite(ageRaw) ? Math.floor(ageRaw) : null;

    if (!USERNAME_RE.test(username)) {
      return res.status(400).json({ error: 'username không hợp lệ (3-32 ký tự a-z, 0-9, _ . -)' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'mật khẩu tối thiểu 6 ký tự' });
    }
    if (!display_name) {
      return res.status(400).json({ error: 'cần tên hiển thị' });
    }
    if (age == null || age < 3 || age > 100) {
      return res.status(400).json({ error: 'tuổi phải từ 3 đến 100' });
    }
    if (getUserByUsername(username)) {
      return res.status(409).json({ error: 'username đã tồn tại' });
    }

    // Phân giải trường (tenant): ưu tiên schoolCode SV nhập → email domain → mặc định 1.
    const email = String(b.email || '').trim().toLowerCase();
    const schoolCode = String(b.schoolCode || '').trim();
    let school_id = 1;
    if (schoolCode) { school_id = getSchoolByCode(schoolCode)?.id || 1; }
    else if (email) { school_id = resolveSchoolByEmail(email)?.id || 1; }

    const { id } = createUser({
      username, display_name,
      password_hash: hashPassword(password),
      role, age, school_id,
    });
    const token = randomBytes(32).toString('hex');
    const { expires_at } = createSession({ token, user_id: id, ttlMs: SESSION_TTL_MS });
    touchLogin(id);
    setSessionCookie(res, token, expires_at);
    res.json({ ok: true, user: { id, username, display_name, role, age, school_id } });
  });

  // POST /api/auth/login
  r.post('/api/auth/login', (req, res) => {
    const b = req.body ?? {};
    const username = String(b.username || '').trim();
    const password = String(b.password || '');
    const user = getUserByUsername(username);
    if (!user || !verifyPassword(password, user.password_hash)) {
      return res.status(401).json({ error: 'tài khoản hoặc mật khẩu không đúng' });
    }
    const token = randomBytes(32).toString('hex');
    const { expires_at } = createSession({ token, user_id: user.id, ttlMs: SESSION_TTL_MS });
    touchLogin(user.id);
    setSessionCookie(res, token, expires_at);
    res.json({
      ok: true,
      user: {
        id: user.id, username: user.username, display_name: user.display_name,
        role: user.role, age: user.age,
      },
    });
  });

  // POST /api/auth/logout
  r.post('/api/auth/logout', (req, res) => {
    const cookies = parseCookies(req);
    const token = cookies[COOKIE_NAME];
    if (token) deleteSession(token);
    clearSessionCookie(res);
    res.json({ ok: true });
  });

  // GET /api/auth/me
  r.get('/api/auth/me', (req, res) => {
    const u = req.user || getCurrentUser(req);
    if (!u) return res.status(401).json({ error: 'unauthorized' });
    const full = getUserById(u.id);
    const eff = full ? effectivePlan(full) : null;
    res.json({
      user: full ? {
        id: full.id, username: full.username, display_name: full.display_name,
        role: full.role, age: full.age,
        email: full.email, avatar_url: full.avatar_url,
        created_at: full.created_at, last_login: full.last_login,
        // Plan: stored = cột raw trong DB; effective = đã xét hết hạn (degrade về free)
        plan: full.plan || 'free',
        plan_expires_at: full.plan_expires_at || null,
        billing_cycle: full.billing_cycle || null,
        effective_plan: eff?.id || 'free',
      } : null,
    });
  });

  // POST /api/auth/me — người dùng tự sửa hồ sơ (tên hiển thị + tuổi + email)
  r.post('/api/auth/me', (req, res) => {
    if (!req.user) req.user = getCurrentUser(req);
    if (!req.user) return res.status(401).json({ error: 'unauthorized' });
    const b = req.body ?? {};
    const name = String(b.displayName || '').trim().slice(0, 60);
    if (!name) return res.status(400).json({ error: 'tên hiển thị không được trống' });

    // age: bắt buộc hợp lệ nếu có gửi (giữ ràng buộc giống đăng ký 3–100)
    const ageRaw = Number(b.age);
    const age = Number.isFinite(ageRaw) ? Math.floor(ageRaw) : null;
    if (age == null || age < 3 || age > 100) {
      return res.status(400).json({ error: 'tuổi phải từ 3 đến 100' });
    }

    // email: tuỳ chọn; nếu có phải đúng định dạng cơ bản
    let email = b.email == null ? '' : String(b.email).trim().slice(0, 120);
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return res.status(400).json({ error: 'email không hợp lệ' });
    }

    updateUserEditable(req.user.id, { display_name: name, age, email });
    const full = getUserById(req.user.id);
    res.json({
      ok: true,
      user: full ? {
        id: full.id, username: full.username, display_name: full.display_name,
        role: full.role, age: full.age, email: full.email, avatar_url: full.avatar_url,
      } : null,
    });
  });
}
