// ============================================================
// User plans (FE mirror) — Guest / Free / Plus / Pro
// ============================================================
// Mirror dữ liệu từ [server/contexts/billing/user-plans.js]. Đổi giá/quota
// thì sửa CẢ HAI file. Để tránh fetch /api trước khi render trang chủ, ta nhúng
// thẳng vào bundle FE — plan data là public, không bí mật.
// ============================================================

export const USER_PLANS = {
  guest: { id: 'guest', name: 'Khách',    rank: 0, price_month_vnd: 0,       price_year_vnd: 0,         ai_calls_day: 0,   domains_allow: ['preschool', 'primary', 'secondary', 'highschool', 'pharmacy', 'it'] },
  free:  { id: 'free',  name: 'Miễn phí', rank: 1, price_month_vnd: 0,       price_year_vnd: 0,         ai_calls_day: 20,  domains_allow: ['preschool', 'primary', 'secondary', 'highschool', 'pharmacy', 'it'] },
  plus:  { id: 'plus',  name: 'Plus',     rank: 2, price_month_vnd: 79_000,  price_year_vnd: 790_000,   ai_calls_day: 50,  domains_allow: '*' },
  pro:   { id: 'pro',   name: 'Pro',      rank: 3, price_month_vnd: 149_000, price_year_vnd: 1_490_000, ai_calls_day: 300, domains_allow: '*' },
};

export const PLAN_BADGES = {
  guest: { label: 'Khách',    color: '#94a3b8', bg: 'rgba(148,163,184,.18)' },
  free:  { label: 'Miễn phí', color: '#22c55e', bg: 'rgba(34,197,94,.18)'  },
  plus:  { label: 'Plus',     color: '#3b82f6', bg: 'rgba(59,130,246,.22)' },
  pro:   { label: 'Pro',      color: '#a855f7', bg: 'rgba(168,85,247,.22)' },
};

/** True nếu user >= required (theo rank). */
export function meetsPlan(userPlanId, requiredPlanId) {
  const u = USER_PLANS[userPlanId] || USER_PLANS.guest;
  const r = USER_PLANS[requiredPlanId] || USER_PLANS.guest;
  return u.rank >= r.rank;
}

/** Plan tối thiểu để vào 1 trường. */
export function getRequiredPlanForDomain(domainId) {
  if (USER_PLANS.guest.domains_allow.includes(domainId)) return 'guest';
  if (USER_PLANS.free.domains_allow.includes(domainId))  return 'free';
  return 'plus';
}

/** Plan có hiệu lực tại thời điểm gọi (xét hết hạn). null user → guest. */
export function effectivePlanId(me) {
  if (!me) return 'guest';
  const p = me.plan || 'free';
  if (p === 'guest' || p === 'free') return p;
  if (me.plan_expires_at && me.plan_expires_at < Date.now()) return 'free';
  return p;
}

/** Format giá: 79000 → "79.000đ". */
export function fmtVnd(n) {
  return (Number(n) || 0).toLocaleString('vi-VN') + 'đ';
}
