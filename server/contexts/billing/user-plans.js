// ============================================================
// User plans (B2C) — Guest / Free / Plus / Pro
// ============================================================
// Khác với SCHOOL_PLANS (B2B, per-tenant) ở [index.js], đây là gói CÁ NHÂN của
// từng user. Lưu ở cột users.plan (xem [server/db.js]). Mirror config ở
// [public/js/plans.js] cho FE — đổi giá/quota thì sửa CẢ HAI file.
//
// Nguyên tắc:
//   - guest: chưa đăng nhập, chỉ thử Mầm non
//   - free:  đã đăng ký, mở Mầm non + Tiểu học (Lớp 1–2)
//   - plus:  mở toàn bộ trường nội dung, KHÔNG có AI cá nhân hoá
//   - pro:   + AI gợi ý / chấm tự luận / lộ trình cá nhân hoá
//
// Hết hạn (plan_expires_at < now) → app tự degrade về 'free' qua effectivePlan().
// Cột plan KHÔNG bị xoá → user gia hạn lại khôi phục lịch sử mượt.
// ============================================================

export const USER_PLANS = {
  guest: {
    id: 'guest', name: 'Khách', rank: 0,
    price_month_vnd: 0, price_year_vnd: 0,
    ai_calls_day: 0,
    domains_allow: ['preschool'],
    features: ['browse_demo'],
  },
  free: {
    id: 'free', name: 'Miễn phí', rank: 1,
    price_month_vnd: 0, price_year_vnd: 0,
    ai_calls_day: 20,
    domains_allow: ['preschool', 'primary'],   // Mầm non + Tiểu học
    features: ['save_progress', 'ai_tutor_basic', 'leaderboard'],
  },
  plus: {
    id: 'plus', name: 'Plus', rank: 2,
    price_month_vnd: 79_000, price_year_vnd: 790_000,
    ai_calls_day: 50,
    domains_allow: '*',                         // tất cả trường đang mở
    features: ['save_progress', 'ai_tutor_basic', 'leaderboard',
               'multi_device_sync', 'progress_history', 'no_ads'],
  },
  pro: {
    id: 'pro', name: 'Pro', rank: 3,
    price_month_vnd: 149_000, price_year_vnd: 1_490_000,
    ai_calls_day: 300,
    domains_allow: '*',
    features: ['save_progress', 'ai_tutor_basic', 'leaderboard',
               'multi_device_sync', 'progress_history', 'no_ads',
               'ai_tutor_premium', 'ai_grade_essay', 'ai_learning_path',
               'parent_report_ai', 'early_access'],
  },
};

export const VALID_USER_PLANS = new Set(Object.keys(USER_PLANS));

/** Plan có hiệu lực TẠI THỜI ĐIỂM gọi (xét hết hạn). null → guest. */
export function effectivePlan(user) {
  if (!user) return USER_PLANS.guest;
  const p = USER_PLANS[user.plan] || USER_PLANS.free;
  if (p.rank === 0 || p.rank === 1) return p;  // guest/free không có hạn
  if (user.plan_expires_at && user.plan_expires_at < Date.now()) {
    return USER_PLANS.free;  // hết hạn → degrade mềm
  }
  return p;
}

/** True nếu userPlan >= required (theo rank). meetsPlan('pro', 'plus') = true. */
export function meetsPlan(userPlanId, requiredPlanId) {
  const u = USER_PLANS[userPlanId] || USER_PLANS.guest;
  const r = USER_PLANS[requiredPlanId] || USER_PLANS.guest;
  return u.rank >= r.rank;
}

/** Trường nào yêu cầu gói gì. Trả 'guest' nếu mở cho khách. */
export function getRequiredPlanForDomain(domainId) {
  if (USER_PLANS.guest.domains_allow.includes(domainId)) return 'guest';
  if (USER_PLANS.free.domains_allow.includes(domainId))  return 'free';
  return 'plus';  // còn lại đều cần plus trở lên (cùng allow '*')
}

/** Quota AI mỗi ngày theo plan (cho ai-quota module map vào perUserPerHour). */
export function dailyAiQuota(userPlanId) {
  return (USER_PLANS[userPlanId] || USER_PLANS.guest).ai_calls_day;
}

/** Tính amount VNĐ cho 1 đơn upgrade. cycle='month'|'year'. */
export function priceFor(planId, cycle = 'month') {
  const p = USER_PLANS[planId];
  if (!p || p.rank < 2) return 0;
  return cycle === 'year' ? p.price_year_vnd : p.price_month_vnd;
}

/** Tính expires_at (ms) cho 1 chu kỳ. */
export function expiresAtFor(cycle = 'month', fromMs = Date.now()) {
  const days = cycle === 'year' ? 365 : 30;
  return fromMs + days * 24 * 3600 * 1000;
}
