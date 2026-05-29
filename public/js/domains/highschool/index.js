// ============================================================
// Trường THPT — Barrel
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
  id: 'highschool',
  name: 'Trường Trung học phổ thông',
  shortName: 'THPT',
  icon: '🏫',
  yearsTotal: 3,
  yearLabels: ['Lớp 10', 'Lớp 11', 'Lớp 12'],
  tagline: 'Lớp 10–12 · phân ban KHTN/KHXH · luyện thi tốt nghiệp THPT & đại học',
};
