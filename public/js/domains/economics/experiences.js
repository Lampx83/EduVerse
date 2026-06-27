// ============================================================
// Economics domain — Experience registry
// ============================================================

/** @typedef {import('../../engine/types.js').ExperienceMode} ExperienceMode */

const PAGES = {
  scoreup: {
    mode: 'quiz', icon: '📝', label: 'ScoreUp', tech: 'Trắc nghiệm · Ngân hàng câu hỏi', url: 'apps.html?app=scoreup',
    desc: 'Mở ScoreUp — luyện & thi trắc nghiệm với câu hỏi thật, chấm điểm tức thì.',
    specs: ['ok:Câu hỏi thật', 'Đề thi', 'Gợi ý AI', 'bad:Cần ScoreUp chạy'],
  },
  smartdoc: {
    mode: 'meta', icon: '📚', label: 'Smartdoc', tech: 'Giáo trình tương tác', url: 'apps.html?app=smartdoc',
    desc: 'Mở Smartdoc — giáo trình & bài giảng web tương tác.',
    specs: ['ok:Word → web', 'Sách điện tử', 'Phòng học', 'bad:Cần Smartdoc chạy'],
  },
};

/** @type {Record<string, ExperienceMode[]>} */
const MODULE_PAGES = {
  'E1.1': [PAGES.scoreup],   // Kinh tế Vi mô 1 — luyện trắc nghiệm
  'E1.2': [PAGES.scoreup],   // Toán cho kinh tế — luyện trắc nghiệm
  'E1.3': [PAGES.scoreup],   // Nguyên lý kế toán — luyện trắc nghiệm
  'E1.4': [PAGES.scoreup],   // Pháp luật kinh tế — luyện trắc nghiệm
  'E1.5': [PAGES.scoreup],   // Tin học cho kinh tế — luyện trắc nghiệm
  'E4.6': [PAGES.smartdoc],  // Khoá luận kinh tế — giáo trình
};

export function getExperiencesFor(moduleId) {
  return MODULE_PAGES[moduleId] || [];
}

export function listModulesWithExperiences() {
  return Object.keys(MODULE_PAGES);
}
