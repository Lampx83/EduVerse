// ============================================================
// Economics domain — Experience registry (skeleton)
// ============================================================
// Hiện chưa có HTML page riêng cho trường Kinh tế.
// Khi build "Stock sim", "Tycoon" hoặc "Doanh nghiệp 3D"
// sẽ map ở đây.
// ============================================================

/** @type {Record<string, Array<import('../../engine/types.js').ExperienceMode>>} */
const MODULE_PAGES = {
  // Future: 'EP02': [{ mode:'2d', url:'stock-sim.html', ... }]
};

export function getExperiencesFor(moduleId) {
  return MODULE_PAGES[moduleId] || [];
}

export function listModulesWithExperiences() {
  return Object.keys(MODULE_PAGES);
}
