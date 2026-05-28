// ============================================================
// Trường Tiểu học — Experience registry (chưa có HTML page riêng)
// ============================================================
/** @type {Record<string, Array<import('../../engine/types.js').ExperienceMode>>} */
const MODULE_PAGES = {
  // Tương lai: game đếm số, kéo thả phép tính 2D… map ở đây.
};
export function getExperiencesFor(moduleId) { return MODULE_PAGES[moduleId] || []; }
export function listModulesWithExperiences() { return Object.keys(MODULE_PAGES); }
