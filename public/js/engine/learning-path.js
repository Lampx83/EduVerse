// ============================================================
// LearningPath — Bridge giữa engine & active domain
// ============================================================
// Module data sống ở `domains/pharmacy/modules.js` (đã augment
// với experiences[]). File này:
//   1. Re-export MODULES augmented (mọi caller cũ vẫn import OK)
//   2. Re-export CATEGORIES (label/icon/color cho 6 cụm)
//   3. Cung cấp helper domain-agnostic (computeUnlock, …)
//
// Để thêm domain mới: tạo `domains/medicine/modules.js`, cập nhật
// `engine/domain.js` để chọn import path. Helpers không đổi.
// ============================================================

import { MODULES as PHARMACY_MODULES } from '../domains/pharmacy/modules.js';

/** @typedef {'curriculum'|'practice'|'skill'|'library'|'career'|'game'} ModuleCategory */

/** @type {import('./types.js').CourseModule[]} */
export const MODULES = PHARMACY_MODULES;

// Category metadata cho UI (label/icon/color cho 6 cụm).
// Đây là cấu trúc tổng quát, không đặc thù Dược; mọi domain dùng chung.
export const CATEGORIES = {
  curriculum: { label: 'Khoa chuyên môn',     icon: '🎓', desc: 'Lộ trình 5 năm chính quy theo khung CTĐT ĐH Dược + CĐ Dược', color: '#fbbf24' },
  practice:   { label: 'Cơ sở thực hành',     icon: '🏥', desc: 'Bệnh viện mô phỏng, nhà thuốc GPP, nhà máy GMP',           color: '#10b981' },
  skill:      { label: 'Trung tâm kỹ năng',   icon: '🎯', desc: 'OSCE, AI patient, cấp cứu, tư vấn chuyên đề',               color: '#ec4899' },
  library:    { label: 'Thư viện & Nghiên cứu', icon: '📚', desc: 'Tra cứu, viết khoá luận, thống kê, EBM, AI/ML',          color: '#6366f1' },
  career:     { label: 'Lộ trình sự nghiệp',  icon: '💼', desc: '10 hướng đi: BV, nhà thuốc, công nghiệp, học thuật, RA…',  color: '#8b5cf6' },
  game:       { label: 'Game & Giải đấu',     icon: '🎮', desc: 'Race, time attack, OSCE championship, metaverse',          color: '#f97316' },
};

// ─────────────────────────────────────────────────────────────
// Helpers (domain-agnostic)
// ─────────────────────────────────────────────────────────────

/** Lấy module theo category */
export function getModulesByCategory(category) {
  return MODULES.filter(m => m.category === category);
}

/** Lấy module theo năm (chỉ curriculum) */
export function getModulesForYear(year) {
  return MODULES.filter(m => m.category === 'curriculum' && m.yearLevel === year);
}

/**
 * Trả về module một SV được phép vào dựa trên tiến độ đã pass.
 * @param {Object<string, {stars:number}>} progress
 * @param {import('./types.js').CourseModule[]} [modules] - mặc định dùng MODULES (pharmacy);
 *        truyền MODULES của trường khác để compute cho domain đó.
 */
export function computeUnlock(progress, modules) {
  const mods = modules || MODULES;
  const unlocked = [];
  const locked = [];
  for (const m of mods) {
    const prereqOk = (m.prerequisites || []).every(pid => (progress[pid]?.stars ?? 0) >= 1);
    const totalStars = Object.values(progress).reduce((s, p) => s + (p.stars || 0), 0);
    const starsOk = totalStars >= m.minStarsToUnlock;
    if (prereqOk && starsOk) unlocked.push(m);
    else {
      const reason = !prereqOk
        ? `Cần pass: ${(m.prerequisites || []).filter(p => !(progress[p]?.stars >= 1)).join(', ')}`
        : `Cần ${m.minStarsToUnlock} sao tổng (đang có ${totalStars})`;
      locked.push({ module: m, reason });
    }
  }
  return { unlocked, locked };
}

/** Tổng kết tiến độ */
export function computeProgressSummary(progress) {
  const byYear = {};
  for (const m of MODULES.filter(x => x.category === 'curriculum')) {
    byYear[m.yearLevel] ??= { total: 0, passed: 0, stars: 0 };
    byYear[m.yearLevel].total++;
    const s = progress[m.id]?.stars || 0;
    if (s >= 1) byYear[m.yearLevel].passed++;
    byYear[m.yearLevel].stars += s;
  }
  const certifiedModules = MODULES
    .filter(m => m.hasCertificate && (progress[m.id]?.stars || 0) >= 2)
    .map(m => m.id);
  return { byYear, certifiedModules };
}
