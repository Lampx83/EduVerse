// ============================================================
// Trường THPT — Experience registry
// ============================================================
// Nội dung học/thực hành chính của THPT nằm trong các toà nhà của campus
// (xem space.html — phòng học, phòng bộ môn Lí/Hoá/Sinh, Tin, thư viện…).
// Khi có page trải nghiệm riêng cho từng module thì khai báo tại đây.
/** @type {Record<string, Array<import('../../engine/types.js').ExperienceMode>>} */
const MODULE_PAGES = {
  // Tương lai: lab mô phỏng Vật lí/Hoá, IDE Python cho Tin học, luyện đề THPT…
};
export function getExperiencesFor(moduleId) { return MODULE_PAGES[moduleId] || []; }
export function listModulesWithExperiences() { return Object.keys(MODULE_PAGES); }
