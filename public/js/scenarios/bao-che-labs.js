// ============================================================
// Bào chế Labs — 20 scenarios kind:'compound-lab'
// ============================================================
// Tái sử dụng compounding-lab.html — mỗi scenario là 1 recipe có sẵn.
// Engine renderer 'compound-lab' bridge sang `compounding-lab.html?recipe=ID`.
//
// Module curriculum sử dụng:
//   - L3.6 Bào chế 1 (8 dạng cơ bản): recipes 1-13 (cấp 1-5)
//   - L4.5 Bào chế CN cao: recipes 14-20 (cấp 5-8)
//   - L2.1 Hoá phân tích: dd-acid-acetic-5
// ============================================================

import { RECIPES } from '../lab-recipes.js';

const YEAR_FROM_LEVEL = (lvl) => lvl <= 3 ? 2 : (lvl <= 6 ? 3 : 4);

/** Quy mỗi recipe → 1 scenario kind:'compound-lab' */
function recipeToScenario(recipe, moduleHint) {
  return {
    id: `${moduleHint}-lab-${recipe.id}`,
    title: `🧪 ${recipe.name}`,
    description: recipe.desc,
    kind: 'compound-lab',
    yearLevel: YEAR_FROM_LEVEL(recipe.level),
    subject: moduleHint === 'L2.1' ? 'hoa-phan-tich' : 'bao-che',
    difficulty: Math.max(1, Math.min(5, Math.ceil(recipe.level / 2))),
    timeLimitS: 900,
    skillsTrained: ['compounding', 'measuring', 'mixing'],
    recipe, // engine có thể link
  };
}

// ── L3.6 Bào chế 1 (cấp 1-5) — 22 bài ──
const L36_LAB_RECIPE_IDS = [
  'siro-paracetamol', 'dung-dich-vitc', 'hon-dich-smecta', 'con-iod-povidone',
  'siro-ho-thao-duoc', 'kem-calamine', 'vien-ngam-vitc',
  'con-long-nao', 'pomat-kem-oxid', 'oresol-pha', 'bot-rac-talc',
  'siro-bromhexin', 'vien-dat-glycerin', 'dd-iod-25', 'con-menthol-xong',
  // Đợt 2 — bổ sung thêm 8 bài
  'dd-nacl-sinh-ly', 'con-70-sat-khuan', 'gel-con-rua-tay-who', 'dd-boric-nho-tai',
  'hd-calamine-lotion', 'dd-suc-mieng-bicarbonate', 'con-iod-loang-1',
  'cao-gung-ngam',
];

// ── L4.5 Bào chế CN cao (cấp 4-7) — 6 bài ──
const L45_LAB_RECIPE_IDS = [
  'nho-mat-nacl', 'gel-acid-salicylic', 'hd-amoxicillin-tre', 'cream-hydrocortisone',
  // Đợt 2 — bổ sung
  'dd-kmno4-rua-vet-thuong', 'com-paracetamol-80',
];

// ── L2.1 Hoá phân tích — 1 bài dung dịch chuẩn ──
const L21_LAB_RECIPE_IDS = ['dd-acid-acetic-5'];

const recipeById = Object.fromEntries(RECIPES.map(r => [r.id, r]));

export const BAO_CHE_LAB_SCENARIOS = {};

for (const id of L36_LAB_RECIPE_IDS) {
  const r = recipeById[id];
  if (!r) continue;
  const s = recipeToScenario(r, 'L3.6');
  BAO_CHE_LAB_SCENARIOS[s.id] = s;
}
for (const id of L45_LAB_RECIPE_IDS) {
  const r = recipeById[id];
  if (!r) continue;
  const s = recipeToScenario(r, 'L4.5');
  BAO_CHE_LAB_SCENARIOS[s.id] = s;
}
for (const id of L21_LAB_RECIPE_IDS) {
  const r = recipeById[id];
  if (!r) continue;
  const s = recipeToScenario(r, 'L2.1');
  BAO_CHE_LAB_SCENARIOS[s.id] = s;
}

// Re-export raw recipe IDs cho engine
export const L36_LAB_IDS = L36_LAB_RECIPE_IDS.map(id => `L3.6-lab-${id}`);
export const L45_LAB_IDS = L45_LAB_RECIPE_IDS.map(id => `L4.5-lab-${id}`);
export const L21_LAB_IDS = L21_LAB_RECIPE_IDS.map(id => `L2.1-lab-${id}`);
