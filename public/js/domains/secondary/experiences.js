// ============================================================
// Trường THCS — Experience registry (chưa có HTML page riêng)
// ============================================================
/** @type {Record<string, Array<import('../../engine/types.js').ExperienceMode>>} */
const MODULE_PAGES = {
  // Tương lai: mô phỏng hình học động, đồ thị hàm số tương tác…
};
export function getExperiencesFor(moduleId) { return MODULE_PAGES[moduleId] || []; }
export function listModulesWithExperiences() { return Object.keys(MODULE_PAGES); }
