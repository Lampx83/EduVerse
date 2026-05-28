// ============================================================
// Trường Mầm non — Barrel
// ============================================================
import { MODULES as RAW_MODULES } from './modules.js';
import { getExperiencesFor } from './experiences.js';

function augment(m) {
  const exp = getExperiencesFor(m.id);
  return exp.length ? { ...m, experiences: exp } : m;
}

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = RAW_MODULES.map(augment);

export { SUBJECTS, getSubject } from './subjects.js';
export { ACHIEVEMENTS } from './achievements.js';
export { getExperiencesFor, listModulesWithExperiences } from './experiences.js';

/** @type {import('../../engine/types.js').DomainConfig} */
export const DOMAIN = {
  id: 'preschool',
  name: 'Trường Mầm non',
  shortName: 'Mầm non',
  icon: '🧸',
  yearsTotal: 3,
  yearLabels: ['Mầm (3 tuổi)', 'Chồi (4 tuổi)', 'Lá (5 tuổi)'],
  tagline: '3–5 tuổi · đếm số · màu sắc · hình khối · học mà chơi bằng hình ảnh vui nhộn',
};
