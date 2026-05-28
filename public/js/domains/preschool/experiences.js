// ============================================================
// Trường Mầm non — Experience registry (chưa có HTML page riêng)
// ============================================================
/** @type {Record<string, Array<import('../../engine/types.js').ExperienceMode>>} */
const MODULE_PAGES = {
  // Tương lai: game kéo-thả đếm số, tô màu, ghép hình 2D cho bé.
};
export function getExperiencesFor(moduleId) { return MODULE_PAGES[moduleId] || []; }
export function listModulesWithExperiences() { return Object.keys(MODULE_PAGES); }
