// ============================================================
// Pharmacy domain — Module list (with experiences attached)
// ============================================================
// Để tránh duplicate 102 dòng module, file này re-export từ
// engine/learning-path.js (nơi MODULES array sống lịch sử),
// rồi augment thêm `experiences[]` từ experiences.js.
//
// Khi sẵn sàng "đập" engine/learning-path.js → di chuyển hẳn
// MODULES sang đây và biến learning-path.js thành bridge.
//
// Hiện tại: bridge ngược lại — file này = single source of
// truth cho phần "Pharmacy + experiences".
// ============================================================

import { MODULES as RAW_MODULES } from '../../engine/_modules-data.js';
import { getExperiencesFor } from './experiences.js';

/** Augment 1 module với experiences[] tra từ registry. */
function augment(m) {
  const exp = getExperiencesFor(m.id);
  if (exp.length === 0) return m;  // không cần shallow-clone
  return { ...m, experiences: exp };
}

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = RAW_MODULES.map(augment);
