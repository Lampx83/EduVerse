// ============================================================
// Trường THCS — Barrel
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
  id: 'secondary',
  name: 'Trường Trung học cơ sở',
  shortName: 'THCS',
  icon: '📐',
  yearsTotal: 4,
  yearLabels: ['Lớp 6', 'Lớp 7', 'Lớp 8', 'Lớp 9'],
  tagline: 'Lớp 6–9 · Toán (đã có) · Ngữ văn (đã có) · Anh · KHTN · Sử-Địa · luyện thi vào lớp 10',
};
