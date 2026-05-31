// ============================================================
// Analytics context — event pipeline + funnel (nền cho #5 lợi nhuận, #6 big data)
// ============================================================
// Không đo được thì không tối ưu được. Đây là pipeline sự kiện nội bộ:
//   app/client → track() → bảng analytics_events → funnel/overview query.
//
// Ở scale lớn (Phase 2+), bảng này được CDC/stream sang ClickHouse/PostHog (WARM
// tier) + archive Parquet (COLD); pipeline hiện tại là điểm THU + truy vấn nhanh.
// Mọi event gắn school_id (multi-tenant) → đo funnel/доход theo từng trường.
//
// Funnel mặc định (đo chuyển đổi lợi nhuận):
//   welcome_view → register → school_enter → module_start → subscribe → payment_success
// ============================================================

import { db } from '../../db.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS analytics_events (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    school_id   INTEGER NOT NULL DEFAULT 1,
    user_id     INTEGER,                       -- NULL nếu ẩn danh (top-of-funnel)
    anon_id     TEXT,                          -- id client cấp trước khi đăng nhập
    name        TEXT    NOT NULL,              -- 'register' | 'module_start' | 'subscribe' | ...
    props       TEXT,                          -- JSON tuỳ biến (gọn)
    session_id  TEXT,
    path        TEXT,
    ts          INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_ae_school_name_ts ON analytics_events(school_id, name, ts);
  CREATE INDEX IF NOT EXISTS idx_ae_user_ts        ON analytics_events(user_id, ts);
  CREATE INDEX IF NOT EXISTS idx_ae_ts             ON analytics_events(ts);
`);

const insertEventStmt = db.prepare(`
  INSERT INTO analytics_events (school_id, user_id, anon_id, name, props, session_id, path, ts)
  VALUES (@school_id, @user_id, @anon_id, @name, @props, @session_id, @path, @ts)
`);

const EVENT_NAME_RE = /^[a-z0-9_.:-]{2,48}$/i;

/** Ghi 1 sự kiện. Trả false nếu name không hợp lệ (không throw — tracking không được làm vỡ request). */
export function track({ school_id = 1, user_id = null, anon_id = null, name, props = null, session_id = null, path = null } = {}) {
  if (!name || !EVENT_NAME_RE.test(String(name))) return false;
  try {
    insertEventStmt.run({
      school_id: Number(school_id) || 1,
      user_id: user_id ? Number(user_id) : null,
      anon_id: anon_id ? String(anon_id).slice(0, 64) : null,
      name: String(name),
      props: props != null ? JSON.stringify(props).slice(0, 2000) : null,
      session_id: session_id ? String(session_id).slice(0, 64) : null,
      path: path ? String(path).slice(0, 200) : null,
      ts: Date.now(),
    });
    return true;
  } catch { return false; }
}

// ── Funnel: đếm số "đối tượng" (user_id, fallback anon_id) đạt từng bước theo thứ tự ──
const DEFAULT_FUNNEL = ['welcome_view', 'register', 'school_enter', 'module_start', 'subscribe', 'payment_success'];

const stepReachStmt = db.prepare(`
  SELECT COUNT(*) AS n FROM (
    SELECT COALESCE(CAST(user_id AS TEXT), anon_id) AS subj
    FROM analytics_events
    WHERE school_id = @school_id AND name = @name AND ts >= @since
      AND COALESCE(CAST(user_id AS TEXT), anon_id) IS NOT NULL
    GROUP BY subj
  )
`);

export function getFunnel(school_id = 1, steps = DEFAULT_FUNNEL, sinceMs = 30 * 24 * 3600 * 1000) {
  const since = Date.now() - sinceMs;
  const out = [];
  let prev = null;
  for (const name of steps) {
    const n = stepReachStmt.get({ school_id: Number(school_id) || 1, name, since })?.n || 0;
    out.push({
      step: name, count: n,
      conversion_from_prev: prev == null ? 1 : (prev > 0 ? +(n / prev).toFixed(3) : 0),
    });
    prev = n;
  }
  const top = out[0]?.count || 0;
  const bottom = out[out.length - 1]?.count || 0;
  return { steps: out, overall_conversion: top > 0 ? +(bottom / top).toFixed(3) : 0, since };
}

const overviewStmt = db.prepare(`
  SELECT name, COUNT(*) AS events,
    COUNT(DISTINCT COALESCE(CAST(user_id AS TEXT), anon_id)) AS subjects
  FROM analytics_events
  WHERE school_id = @school_id AND ts >= @since
  GROUP BY name ORDER BY events DESC LIMIT 50
`);
const totalsStmt = db.prepare(`
  SELECT COUNT(*) AS total_events,
    COUNT(DISTINCT user_id) AS users,
    COUNT(DISTINCT COALESCE(CAST(user_id AS TEXT), anon_id)) AS subjects
  FROM analytics_events WHERE school_id = @school_id AND ts >= @since
`);

export function getOverview(school_id = 1, sinceMs = 7 * 24 * 3600 * 1000) {
  const since = Date.now() - sinceMs;
  return {
    totals: totalsStmt.get({ school_id: Number(school_id) || 1, since }),
    by_event: overviewStmt.all({ school_id: Number(school_id) || 1, since }),
    since,
  };
}

// ── Bootstrap: trả cấu hình GA4 + user info cho client init gtag.js ──
// Public (kể cả guest) — measurementId không phải bí mật, đã lộ trong source HTML.
// User info chỉ trả về nếu đã đăng nhập (req.user). Guest → isGuest: true.
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';
export function getAnalyticsBootstrap(req) {
  const u = req.user || null;
  return {
    measurementId: GA_MEASUREMENT_ID || null,
    userId: u?.id || null,
    schoolId: u?.school_id || req.schoolId || null,
    schoolCode: req.schoolCode || null,
    role: u?.role || null,
    plan: u?.plan || (u ? 'free' : null),
    isGuest: !u,
  };
}

// ── Routes ──
export function attachAnalytics(r) {
  // GET /api/analytics/bootstrap — public, dùng req.user nếu có.
  r.get('/api/analytics/bootstrap', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.json(getAnalyticsBootstrap(req));
  });

  // Thu sự kiện từ client (đã đăng nhập — gate /api/* yêu cầu login). school_id +
  // user_id lấy từ server, client KHÔNG tự khai (chống giả mạo tenant).
  r.post('/api/events', (req, res) => {
    const b = req.body ?? {};
    const ok = track({
      school_id: req.schoolId, user_id: req.user?.id || null,
      anon_id: b.anonId || null, name: b.name,
      props: b.props ?? null, session_id: b.sessionId || null, path: b.path || null,
    });
    res.json({ ok });
  });

  // Funnel + overview cho dashboard (chỉ teacher/admin của trường). Phase sau gate role.
  r.get('/api/analytics/funnel', (req, res) => {
    const steps = typeof req.query.steps === 'string' && req.query.steps.trim()
      ? req.query.steps.split(',').map((s) => s.trim()).filter(Boolean) : undefined;
    const days = Math.min(Math.max(Number(req.query.days) || 30, 1), 365);
    res.json(getFunnel(req.schoolId, steps, days * 24 * 3600 * 1000));
  });
  r.get('/api/analytics/overview', (req, res) => {
    const days = Math.min(Math.max(Number(req.query.days) || 7, 1), 365);
    res.json(getOverview(req.schoolId, days * 24 * 3600 * 1000));
  });

  console.log('[analytics] routes mounted: /api/events, /api/analytics/{funnel,overview}');
}
