// ============================================================
// Trường Tiểu học — Barrel
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
  id: 'primary',
  name: 'Trường Tiểu học',
  shortName: 'Tiểu học',
  icon: '🎒',
  yearsTotal: 5,
  yearLabels: ['Lớp 1', 'Lớp 2', 'Lớp 3', 'Lớp 4', 'Lớp 5'],
  tagline: 'Lớp 1–5 · Toán · Tiếng Việt · TN&XH · Tiếng Anh · học mà chơi, chơi mà học',
};
