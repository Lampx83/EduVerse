// ============================================================
// Billing context — gói cước + subscription + entitlement (#5 mô hình lợi nhuận)
// ============================================================
// Mô hình kinh doanh: mỗi TRƯỜNG (tenant) đăng ký 1 gói. Gói quyết định
// entitlement (quyền dùng tính năng). Thanh toán đi qua payment context (VNPay);
// khi invoice settled, kích hoạt subscription. Ở đây tách bạch:
//   plans (định nghĩa) · subscriptions (school ↔ plan) · entitlement (suy ra từ plan).
//
// requireFeature(feature) gate tính năng premium theo tenant → đây là nơi "khoá
// giá trị" để bán. activateSubscription() được payment gọi khi thu tiền thành công
// (xem hook trong payment/index.js — optional, không bắt buộc).
// ============================================================

import { db } from '../../db.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS subscriptions (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    school_id         INTEGER NOT NULL,
    plan              TEXT    NOT NULL DEFAULT 'free',  -- free | pro | school
    status            TEXT    NOT NULL DEFAULT 'active', -- active | pending | past_due | canceled
    seats             INTEGER NOT NULL DEFAULT 0,        -- 0 = không giới hạn (theo gói)
    current_period_end INTEGER,                          -- epoch ms; NULL = vĩnh viễn (free)
    order_ref         TEXT,                              -- liên kết invoice payment (nếu trả phí)
    created_at        INTEGER NOT NULL,
    updated_at        INTEGER NOT NULL,
    UNIQUE(school_id)
  );
  CREATE INDEX IF NOT EXISTS idx_subs_school ON subscriptions(school_id);
`);

// ── Catalog gói (code-defined; Phase sau có thể đưa vào DB cho admin sửa) ──
// price_vnd theo tháng. features = tập entitlement. limits = hạn mức.
export const PLANS = {
  free: {
    id: 'free', name: 'Miễn phí', price_vnd: 0,
    features: ['core_learning', 'leaderboard', 'ai_tutor_basic'],
    limits: { ai_calls_day: 50, classes: 3, custom_branding: false },
  },
  pro: {
    id: 'pro', name: 'Pro (giáo viên)', price_vnd: 99000,
    features: ['core_learning', 'leaderboard', 'ai_tutor_basic', 'ai_tutor_unlimited', 'analytics_dashboard', 'lesson_builder_pro', 'export_data'],
    limits: { ai_calls_day: 1000, classes: 50, custom_branding: false },
  },
  school: {
    id: 'school', name: 'Trường học', price_vnd: 1990000,
    features: ['core_learning', 'leaderboard', 'ai_tutor_basic', 'ai_tutor_unlimited', 'analytics_dashboard', 'lesson_builder_pro', 'export_data', 'sso', 'custom_branding', 'priority_support', 'ai_agent_admin'],
    limits: { ai_calls_day: 20000, classes: 0, custom_branding: true },
  },
};
const VALID_PLANS = new Set(Object.keys(PLANS));

const getSubStmt = db.prepare(`SELECT * FROM subscriptions WHERE school_id = ?`);
const upsertSubStmt = db.prepare(`
  INSERT INTO subscriptions (school_id, plan, status, seats, current_period_end, order_ref, created_at, updated_at)
  VALUES (@school_id, @plan, @status, @seats, @current_period_end, @order_ref, @t, @t)
  ON CONFLICT(school_id) DO UPDATE SET
    plan = @plan, status = @status, seats = @seats,
    current_period_end = @current_period_end, order_ref = @order_ref, updated_at = @t
`);

/** Subscription hiện tại của trường (mặc định free nếu chưa có row). */
export function getSubscription(school_id) {
  const row = getSubStmt.get(Number(school_id) || 1);
  if (row) {
    // Hết hạn → coi như free (downgrade mềm, không xoá lịch sử).
    if (row.current_period_end && row.current_period_end < Date.now() && row.plan !== 'free') {
      return { ...row, plan: 'free', status: 'past_due', _expired_plan: row.plan };
    }
    return row;
  }
  return { school_id: Number(school_id) || 1, plan: 'free', status: 'active', current_period_end: null };
}

/** Entitlement suy ra từ plan hiện tại. */
export function getEntitlements(school_id) {
  const sub = getSubscription(school_id);
  const plan = PLANS[sub.plan] || PLANS.free;
  return { plan: plan.id, plan_name: plan.name, status: sub.status, features: plan.features, limits: plan.limits, current_period_end: sub.current_period_end ?? null };
}

export function hasFeature(school_id, feature) {
  return getEntitlements(school_id).features.includes(feature);
}

/** Kích hoạt/đổi gói cho trường. periodDays=null → vĩnh viễn (free). */
export function activateSubscription({ school_id, plan, status = 'active', periodDays = 30, order_ref = null }) {
  if (!VALID_PLANS.has(plan)) throw new Error(`plan không hợp lệ: ${plan}`);
  const now = Date.now();
  const current_period_end = (plan === 'free' || periodDays == null) ? null : now + periodDays * 24 * 3600 * 1000;
  upsertSubStmt.run({ school_id: Number(school_id) || 1, plan, status, seats: 0, current_period_end, order_ref, t: now });
  return getSubscription(school_id);
}

// ── Middleware gate tính năng premium theo tenant ──
export function requireFeature(feature) {
  return (req, res, next) => {
    if (hasFeature(req.schoolId, feature)) return next();
    const ent = getEntitlements(req.schoolId);
    return res.status(402).json({  // 402 Payment Required
      error: 'feature_locked', feature, current_plan: ent.plan,
      message: `Tính năng "${feature}" cần nâng cấp gói. Gói hiện tại: ${ent.plan_name}.`,
      upgrade: Object.values(PLANS).filter((p) => p.features.includes(feature)).map((p) => p.id),
    });
  };
}

// ── Routes ──
export function attachBilling(r) {
  r.get('/api/billing/plans', (_req, res) => res.json({ plans: Object.values(PLANS) }));

  r.get('/api/billing/me', (req, res) => {
    res.json({ school_id: req.schoolId, ...getEntitlements(req.schoolId) });
  });

  // Đăng ký/đổi gói. Gói trả phí → tạo subscription 'pending' + trả amount để
  // client gọi payment create-order; khi IPN settled, payment gọi activateSubscription.
  // (Bản demo: cho phép kích hoạt trial ngay nếu PLAN free hoặc BILLING_DEMO_ACTIVATE=1.)
  r.post('/api/billing/subscribe', (req, res) => {
    const plan = String(req.body?.plan || '').trim();
    if (!VALID_PLANS.has(plan)) return res.status(400).json({ error: 'invalid_plan' });
    // Chỉ teacher/admin của trường được đổi gói.
    if (req.user?.role !== 'teacher') {
      return res.status(403).json({ error: 'forbidden', message: 'Chỉ giáo viên/quản trị trường được đổi gói.' });
    }
    const planDef = PLANS[plan];
    if (planDef.price_vnd === 0) {
      const sub = activateSubscription({ school_id: req.schoolId, plan, periodDays: null });
      return res.json({ ok: true, activated: true, subscription: sub });
    }
    if (process.env.BILLING_DEMO_ACTIVATE === '1') {
      const sub = activateSubscription({ school_id: req.schoolId, plan, periodDays: 30 });
      return res.json({ ok: true, activated: true, demo: true, subscription: sub });
    }
    // Trả phí: tạo bản ghi pending, hướng client sang thanh toán.
    activateSubscription({ school_id: req.schoolId, plan, status: 'pending', periodDays: 30 });
    res.json({
      ok: true, activated: false, plan, amount_vnd: planDef.price_vnd,
      next: 'POST /api/payment/create-order với amount tương ứng; kích hoạt khi IPN thành công.',
    });
  });

  console.log('[billing] routes mounted: /api/billing/{plans,me,subscribe}');
}
