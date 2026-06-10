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
import { PRIMARY_LOP2_SCENARIOS } from './lop2/_index.js';
import { SECONDARY_LOP6_SCENARIOS } from './lop6/_index.js';
import { SECONDARY_MATH_SCENARIOS } from './secondary-math.js';
import { SECONDARY_LIT_SCENARIOS } from './secondary-literature.js';
import { MATH6_LESSON_SCENARIOS } from './secondary-math6-lessons.js';
import { PRESCHOOL_SCENARIOS } from './preschool-basics.js';
// Lớp 1/3/4/5 + 7/8/9 thêm dần — barrel mỗi lớp tự handle missing files
// (dynamic import + try/catch), không crash khi 1 môn chưa sinh xong.
import { PRIMARY_LOP1_SCENARIOS } from './lop1/_index.js';
let PRIMARY_LOP3_SCENARIOS = {}, PRIMARY_LOP4_SCENARIOS = {}, PRIMARY_LOP5_SCENARIOS = {};
let SECONDARY_LOP7_SCENARIOS = {}, SECONDARY_LOP8_SCENARIOS = {}, SECONDARY_LOP9_SCENARIOS = {};
let HIGHSCHOOL_LOP10_SCENARIOS = {}, HIGHSCHOOL_LOP11_SCENARIOS = {}, HIGHSCHOOL_LOP12_SCENARIOS = {};
let PRESCHOOL_WEEKS_SCENARIOS = {};
try { ({ PRIMARY_LOP3_SCENARIOS  } = await import('./lop3/_index.js')); } catch {}
try { ({ PRIMARY_LOP4_SCENARIOS  } = await import('./lop4/_index.js')); } catch {}
try { ({ PRIMARY_LOP5_SCENARIOS  } = await import('./lop5/_index.js')); } catch {}
try { ({ SECONDARY_LOP7_SCENARIOS } = await import('./lop7/_index.js')); } catch {}
try { ({ SECONDARY_LOP8_SCENARIOS } = await import('./lop8/_index.js')); } catch {}
try { ({ SECONDARY_LOP9_SCENARIOS } = await import('./lop9/_index.js')); } catch {}
try { ({ HIGHSCHOOL_LOP10_SCENARIOS } = await import('./lop10/_index.js')); } catch {}
try { ({ HIGHSCHOOL_LOP11_SCENARIOS } = await import('./lop11/_index.js')); } catch {}
try { ({ HIGHSCHOOL_LOP12_SCENARIOS } = await import('./lop12/_index.js')); } catch {}
try { ({ PRESCHOOL_WEEKS_SCENARIOS } = await import('./preschool-weeks.js')); } catch {}

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
  ...PRIMARY_LOP1_SCENARIOS,
  ...PRIMARY_LOP2_SCENARIOS,
  ...PRIMARY_LOP3_SCENARIOS,
  ...PRIMARY_LOP4_SCENARIOS,
  ...PRIMARY_LOP5_SCENARIOS,
  ...SECONDARY_LOP6_SCENARIOS,
  ...SECONDARY_LOP7_SCENARIOS,
  ...SECONDARY_LOP8_SCENARIOS,
  ...SECONDARY_LOP9_SCENARIOS,
  ...HIGHSCHOOL_LOP10_SCENARIOS,
  ...HIGHSCHOOL_LOP11_SCENARIOS,
  ...HIGHSCHOOL_LOP12_SCENARIOS,
  ...SECONDARY_MATH_SCENARIOS,
  ...SECONDARY_LIT_SCENARIOS,
  ...MATH6_LESSON_SCENARIOS,
  ...PRESCHOOL_SCENARIOS,
  ...PRESCHOOL_WEEKS_SCENARIOS,
};

/**
 * Lấy danh sách scenarios của 1 module qua prefix ID.
 * Nếu module không có scenario thật → fallback 1 quiz stub.
/**
 * Prime content của 1 module TỪ DB (/api/curriculum) vào ALL_SCENARIOS.
 *
 * Mục đích: cho phép GV/admin sửa nóng content trong DB mà không cần deploy lại
 * JS. Sau khi prime, getScenariosForModule/getScenarioById (vẫn sync) tự trả
 * bản DB vì ALL_SCENARIOS[id] đã bị ghi đè.
 *
 * AN TOÀN: best-effort. API lỗi / chưa seed / rỗng → giữ nguyên bản JS bundled,
 * app chạy y như cũ. Mỗi module chỉ prime 1 lần / phiên (cache _primed).
 *
 * @param {string} moduleId
 * @returns {Promise<boolean>} true nếu đã prime ít nhất 1 scenario từ DB
 */
const _primed = new Set();
export async function primeModuleFromDB(moduleId) {
  if (!moduleId || _primed.has(moduleId)) return false;
  _primed.add(moduleId);
  try {
    const r = await fetch(`/api/curriculum/module/${encodeURIComponent(moduleId)}`, { credentials: 'same-origin' });
    if (!r.ok) return false;
    const data = await r.json();
    const items = Array.isArray(data?.items) ? data.items : [];
    if (!items.length) return false;
    for (const sc of items) {
      if (sc?.id) ALL_SCENARIOS[sc.id] = sc;
    }
    return true;
  } catch {
    return false;   // offline / API down → fallback JS bundled
  }
}

/**
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
