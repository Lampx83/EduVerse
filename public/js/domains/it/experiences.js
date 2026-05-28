// ============================================================
// IT domain — Experience registry (skeleton)
// ============================================================

/** @type {Record<string, Array<import('../../engine/types.js').ExperienceMode>>} */
const MODULE_PAGES = {
  // Future: 'IP03': [{ mode:'2d', url:'ctf-lab.html', ... }]
};

export function getExperiencesFor(moduleId) {
  return MODULE_PAGES[moduleId] || [];
}

export function listModulesWithExperiences() {
  return Object.keys(MODULE_PAGES);
}
