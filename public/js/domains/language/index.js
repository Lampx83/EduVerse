// ============================================================
// Trường Ngoại ngữ — Barrel stub (Phase 1 preview)
// ============================================================
// 4 module preview, chưa có curriculum đầy đủ. Mỗi module trỏ 1 portal-app
// chuyên ngành đã build sẵn (xem builtin-catalog.js).
// Phase 2: thêm SUBJECTS + ACHIEVEMENTS + EXPERIENCES per language (EN/JP/KR/CN).

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  {
    id: 'lang-vocab', code: 'L01',
    title: 'Từ vựng đa cấp độ', subjectId: 'vocabulary',
    summary: 'Luyện 2000 từ tiếng Anh thông dụng theo chủ đề. Spaced repetition + phát âm AI.',
    estimatedMinutes: 30, level: 'beginner',
    experiences: [{ kind: 'page', url: '/tu-vung-tieng-anh.html', label: '📚 Mở app từ vựng' }],
  },
  {
    id: 'lang-pronunciation', code: 'L02',
    title: 'Luyện phát âm với AI', subjectId: 'speaking',
    summary: 'AI chấm phát âm bằng Web Speech Recognition. So sánh giọng chuẩn theo từng từ.',
    estimatedMinutes: 20, level: 'beginner',
    experiences: [{ kind: 'page', url: '/luyen-phat-am.html', label: '🎤 Luyện phát âm' }],
  },
  {
    id: 'lang-flashcards', code: 'L03',
    title: 'Flashcards tự tạo', subjectId: 'vocabulary',
    summary: 'Bộ thẻ học từ vựng — tự nhập danh sách EN/JP/KR/CN, lưu cá nhân.',
    estimatedMinutes: 15, level: 'all',
    experiences: [{ kind: 'page', url: '/portal-apps/u/4/flashcards/', label: '🃏 Mở flashcards' }],
  },
  {
    id: 'lang-tutor', code: 'L04',
    title: 'AI Tutor Ngoại ngữ', subjectId: 'all',
    summary: 'Gia sư AI giải bài, dịch câu, gợi ý câu thay thế cho EN/JP/KR/CN/FR.',
    estimatedMinutes: 30, level: 'all',
    experiences: [{ kind: 'page', url: '/hoc-thong-minh.html?subject=language', label: '🎓 Học với AI' }],
  },
];

export const SUBJECTS = [
  { id: 'vocabulary', name: 'Từ vựng', icon: '📚' },
  { id: 'speaking',   name: 'Nói',     icon: '🎤' },
  { id: 'listening',  name: 'Nghe',    icon: '🎧' },
  { id: 'all',        name: 'Tổng quát', icon: '🌐' },
];
export const getSubject = (id) => SUBJECTS.find(s => s.id === id) || null;
export const ACHIEVEMENTS = [];
export const getExperiencesFor = (mid) => MODULES.find(m => m.id === mid)?.experiences || [];
export const listModulesWithExperiences = () => MODULES.filter(m => m.experiences?.length);

/** @type {import('../../engine/types.js').DomainConfig} */
export const DOMAIN = {
  id: 'language',
  name: 'Trường Ngoại ngữ',
  shortName: 'Ngoại ngữ',
  icon: '🗣️',
  yearsTotal: 1,
  yearLabels: ['Cơ bản → Nâng cao (linh hoạt)'],
  tagline: 'Anh · Trung · Nhật · Hàn · Pháp — học theo nhịp riêng, AI chấm phát âm + sinh quiz từ vựng',
};
