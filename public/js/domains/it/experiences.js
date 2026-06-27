// ============================================================
// IT domain — Experience registry
// ============================================================
// Gắn các ứng dụng tích hợp (proxy cùng origin, xem server/app-proxy.js +
// public/apps.html) làm "phiên bản trải nghiệm" trên subway-map. URL trỏ vào
// launcher apps.html?app=<id> (relative → an toàn với BASE_PATH); launcher
// nhúng app qua iframe và có thanh quay lại Tizia.
// ============================================================

/** @typedef {import('../../engine/types.js').ExperienceMode} ExperienceMode */

/** Catalog dùng chung — một định nghĩa, gắn nhiều module. */
const PAGES = {
  codelab: {
    mode: '2d', icon: '💻', label: 'Codelab', tech: 'Online Judge · Judge0', url: 'apps.html?app=codelab',
    desc: 'Mở Codelab — chạy & chấm code thật trong sandbox, test case tự động.',
    specs: ['ok:Chấm code thật', 'Nhiều ngôn ngữ', 'Cuộc thi', 'bad:Cần Codelab chạy'],
  },
  scoreup: {
    mode: 'quiz', icon: '📝', label: 'ScoreUp', tech: 'Trắc nghiệm · Ngân hàng câu hỏi', url: 'apps.html?app=scoreup',
    desc: 'Mở ScoreUp — luyện & thi trắc nghiệm với câu hỏi thật, chấm điểm tức thì.',
    specs: ['ok:Câu hỏi thật', 'Đề thi', 'Gợi ý AI', 'bad:Cần ScoreUp chạy'],
  },
  smartdoc: {
    mode: 'meta', icon: '📚', label: 'Smartdoc', tech: 'Giáo trình tương tác', url: 'apps.html?app=smartdoc',
    desc: 'Mở Smartdoc — giáo trình & bài giảng web tương tác, phòng học trực tiếp.',
    specs: ['ok:Word → web', 'Sách điện tử', 'Phòng học', 'bad:Cần Smartdoc chạy'],
  },
  feedback: {
    mode: 'native', icon: '🎯', label: 'FeedBackMe', tech: 'LMS · Exam · AI feedback', url: 'apps.html?app=feedback',
    desc: 'Mở FeedBackMe — exam có giám thị + phản hồi AI theo lỗi sai và kỹ năng.',
    specs: ['ok:Exam giám thị', 'AI feedback', 'Gamification', 'bad:Cần FeedBackMe chạy'],
  },
};

/** @type {Record<string, ExperienceMode[]>} */
const MODULE_PAGES = {
  'I1.1': [PAGES.codelab, PAGES.scoreup], // Nhập môn Python — thực hành code + luyện quiz
  'I1.2': [PAGES.scoreup],                // Toán rời rạc — luyện trắc nghiệm
  'I1.3': [PAGES.scoreup],                // Kiến trúc máy tính — luyện trắc nghiệm
  'I1.4': [PAGES.scoreup],                // Hệ điều hành Linux — luyện trắc nghiệm
  'I1.5': [PAGES.scoreup],                // Tiếng Anh CNTT — luyện trắc nghiệm
  'I2.1': [PAGES.codelab],                // Cấu trúc dữ liệu & Giải thuật
  'IG01': [PAGES.codelab],                // Code Race — Giải thuật 5 phút
  'I3.1': [PAGES.smartdoc],               // Kỹ thuật phần mềm — giáo trình
  'I4.5': [PAGES.feedback],               // Khoá luận CNTT — exam + phản hồi
};

export function getExperiencesFor(moduleId) {
  return MODULE_PAGES[moduleId] || [];
}

export function listModulesWithExperiences() {
  return Object.keys(MODULE_PAGES);
}
