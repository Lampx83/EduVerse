// ============================================================
// Scenarios index — gom tất cả scenario của 5 năm
// ============================================================
// Khi thêm năm mới: import + spread vào ALL_SCENARIOS.
// Module loader sẽ filter theo prefix module ID ("L3.3-", "L2.1-", ...).
// ============================================================

import { YEAR12_SCENARIOS } from './year1-2.js';
import { L33_SCENARIOS, SCENARIO_L33_QUIZ, SCENARIO_L33_DRAG }
  from './L3.3-tuong-tac-warfarin-clarithromycin.js';
import { YEAR34_SCENARIOS } from './year3-4.js';
import { YEAR5_ADAPTED_SCENARIOS } from './year5-adapted.js';
import { PRACTICE_QUIZZES } from './practice-quizzes.js';
import { SKILL_QUIZZES } from './skill-quizzes.js';
import { LIBRARY_CAREER_GAMES_SCENARIOS } from './library-career-games.js';
import { BAO_CHE_LAB_SCENARIOS } from './bao-che-labs.js';
import { PRIMARY_MATH_SCENARIOS } from './primary-math.js';
import { SECONDARY_MATH_SCENARIOS } from './secondary-math.js';

// Phẳng hoá tất cả scenarios thành 1 object {id → scenario}
export const ALL_SCENARIOS = {
  ...YEAR12_SCENARIOS,
  [SCENARIO_L33_QUIZ.id]: SCENARIO_L33_QUIZ,
  [SCENARIO_L33_DRAG.id]: SCENARIO_L33_DRAG,
  ...YEAR34_SCENARIOS,
  ...YEAR5_ADAPTED_SCENARIOS,
  ...PRACTICE_QUIZZES,
  ...SKILL_QUIZZES,
  ...LIBRARY_CAREER_GAMES_SCENARIOS,
  ...BAO_CHE_LAB_SCENARIOS,
  ...PRIMARY_MATH_SCENARIOS,
  ...SECONDARY_MATH_SCENARIOS,
};

/**
 * Lấy danh sách scenarios của 1 module qua prefix ID.
 * Nếu module không có scenario thật → fallback 1 quiz stub.
 * @param {string} moduleId — e.g. "L1.1", "L3.3", "L2.1"
 * @returns {Array} scenarios trong module
 */
export function getScenariosForModule(moduleId) {
  const out = [];
  for (const [_, s] of Object.entries(ALL_SCENARIOS)) {
    if (s?.id?.startsWith(moduleId + '-')) out.push(s);
  }
  out.sort((a, b) => a.id.localeCompare(b.id));

  // Fallback: nếu rỗng, sinh quiz stub để module luôn có 1 lối vào
  if (out.length === 0) {
    // Lazy import để tránh circular dep
    // (chỉ chạy khi thật sự cần)
    try {
      // eslint-disable-next-line no-unused-expressions
      // Sử dụng dynamic require qua side channel — fallback dùng module info từ MODULES
      const mod = _findModule(moduleId);
      if (mod) {
        return [_makeStubForModule(mod)];
      }
    } catch {}
  }
  return out;
}

/** Cache MODULES tra cứu */
let _modulesCache = null;
function _findModule(id) {
  if (!_modulesCache) {
    // Dynamic-ish: import sync would loop; we read from window cache if set
    return null;
  }
  return _modulesCache.find(m => m.id === id) || null;
}

function _makeStubForModule(mod) {
  return {
    id: `quiz-stub-${mod.id}`,
    title: `${mod.id} · ${mod.title} — Quiz (đang phát triển)`,
    kind: 'quiz',
    yearLevel: mod.yearLevel,
    subject: mod.subject,
    difficulty: mod.difficulty ?? 1,
    description: 'Quiz cho module này đang được hoàn thiện. Tạm thời 1 câu giới thiệu.',
    questions: [{
      stem: `Module này là về: ${mod.title}. Bạn đã sẵn sàng học?`,
      choices: [
        'Sẵn sàng — chờ nội dung quiz đầy đủ',
        'Muốn xem 2D/3D/VR trước',
        'Đọc tài liệu trước',
        'Quay lại lộ trình',
      ],
      answer: 0,
      explanation: `Quiz đầy đủ cho ${mod.id} đang được biên soạn.`,
    }],
    isStub: true,
  };
}

/** Cho phép caller bơm MODULES vào cache để stub có thể tra. */
export function primeModulesCache(modules) {
  _modulesCache = modules;
}

/** Lấy 1 scenario cụ thể */
export function getScenarioById(id) {
  return Object.values(ALL_SCENARIOS).find(s => s?.id === id);
}

/** Liệt kê tất cả module ID có scenarios — kết hợp prefix matching + explicit scenarioIds trong MODULES */
export function listModulesWithContent() {
  const set = new Set();
  // 1. Prefix matching cho curriculum modules (L1.1-, L3.3-, ...)
  for (const s of Object.values(ALL_SCENARIOS)) {
    const m = s?.id?.match(/^(L\d\.\d+)/);
    if (m) set.add(m[1]);
  }
  // 2. Explicit scenarioIds trong MODULES (cho PS, SC, LR, CP, GC)
  try {
    // Lazy import để tránh circular dep
    const allIds = new Set(Object.keys(ALL_SCENARIOS));
    import('../engine/learning-path.js').then(({ MODULES }) => {
      for (const m of MODULES) {
        if ((m.scenarioIds || []).some(sid => allIds.has(sid) || /^(sac-ky|race|time-attack|metaverse|compounding-lab|2d-arcade|3d-shelf|quiz)/.test(sid))) {
          set.add(m.id);
        }
      }
    });
  } catch {}
  return [...set].sort();
}

/** Phiên bản sync — gọi sau khi MODULES đã load */
export async function listModulesWithContentSync() {
  const set = new Set();
  // 1. Prefix matching cho mọi loại module ID:
  //    - Curriculum: L1.1, L3.3...
  //    - Practice sites: PS01, PS10...
  //    - Skill centers: SC03, SC15...
  //    - Library: LR01, LR12...
  //    - Career: CP01, CP10...
  //    - Game: GC03, GC07...
  for (const s of Object.values(ALL_SCENARIOS)) {
    const id = s?.id;
    if (!id) continue;
    const m1 = id.match(/^(L\d\.\d+)/);       // L1.1, L3.3
    const m2 = id.match(/^([A-Z]{2}\d{2})/);  // PS01, SC03, LR01, CP01, GC03
    if (m1) set.add(m1[1]);
    if (m2) set.add(m2[1]);
  }
  // 2. Bất kỳ module nào có scenarioIds non-empty trong MODULES → đánh dấu có content
  const { MODULES } = await import('../engine/learning-path.js');
  for (const m of MODULES) {
    if ((m.scenarioIds || []).length > 0) set.add(m.id);
  }
  return [...set].sort();
}
