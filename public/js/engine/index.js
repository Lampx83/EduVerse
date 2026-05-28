// ============================================================
// EduVerse Engine — Public API
// ============================================================
// Module mới chỉ cần import từ đây:
//
//   import {
//     DRUGS, getDrug, findInteractions,
//     HERBS, CASES,
//     ScenarioEngine, Assessment,
//     MODULES, computeUnlock,
//   } from './engine/index.js';
// ============================================================

// DATA
export { DRUGS, MEDICINES, ALL_CATEGORIES, getDrug, getDrugsForYear, getDrugsByClass, findInteractions, pickRandomDrugs } from './drug-db.js';
export { HERBS, getHerb, getHerbsByIndication, getHerbsByFamily } from './herb-db.js';
export { CASES, getCase, getCasesBySpecialty, getCasesByDifficulty } from './case-db.js';

// RUNTIME
export { ScenarioEngine } from './scenario-engine.js';
export { Assessment, scoreToStars } from './assessment.js';
export { gradeSoap, patientTurn, evaluateRoleplay } from './ai-tutor.js';

// LEARNING
export { MODULES, computeUnlock, computeProgressSummary, getModulesForYear } from './learning-path.js';
