// ============================================================
// Trường Lái xe — Barrel stub (Phase 1 preview)
// ============================================================
// 3 module preview cho bằng lái B1/B2. Phase 2 sẽ thêm C/D/E + sa hình 3D.

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  {
    id: 'driving-theory', code: 'D01',
    title: '600 câu lý thuyết B1/B2', subjectId: 'theory',
    summary: 'Bộ 600 câu lý thuyết theo Bộ GTVT — luyện tập + thi thử 25 câu/22 phút. Đánh dấu CÂU LIỆT phải đúng.',
    estimatedMinutes: 60, level: 'beginner',
    experiences: [{ kind: 'page', url: '/luat-giao-thong-600.html', label: '📖 Luyện 600 câu' }],
  },
  {
    id: 'driving-signs', code: 'D02',
    title: 'Biển báo Giao thông', subjectId: 'signs',
    summary: 'Học 4 nhóm biển QCVN 41:2019 (cấm/nguy hiểm/hiệu lệnh/chỉ dẫn). SVG vẽ tay + chế độ đố vui.',
    estimatedMinutes: 30, level: 'beginner',
    experiences: [{ kind: 'page', url: '/bien-bao-giao-thong.html', label: '🚸 Học biển báo' }],
  },
  {
    id: 'driving-quiz', code: 'D03',
    title: 'AI Quiz tình huống', subjectId: 'situation',
    summary: 'AI sinh quiz tình huống lái xe theo cấp B1/B2/C/D. Có giải thích lý do, đa dạng tình huống.',
    estimatedMinutes: 25, level: 'intermediate',
    experiences: [{ kind: 'page', url: '/ai-quiz-gen.html?topic=driving', label: '🧠 Quiz tình huống' }],
  },
];

export const SUBJECTS = [
  { id: 'theory',    name: 'Lý thuyết',  icon: '📖' },
  { id: 'signs',     name: 'Biển báo',   icon: '🚸' },
  { id: 'situation', name: 'Tình huống', icon: '🎮' },
  { id: 'sahinh',    name: 'Sa hình',    icon: '🚗' },
];
export const getSubject = (id) => SUBJECTS.find(s => s.id === id) || null;
export const ACHIEVEMENTS = [];
export const getExperiencesFor = (mid) => MODULES.find(m => m.id === mid)?.experiences || [];
export const listModulesWithExperiences = () => MODULES.filter(m => m.experiences?.length);

/** @type {import('../../engine/types.js').DomainConfig} */
export const DOMAIN = {
  id: 'driving',
  name: 'Trường Lái xe',
  shortName: 'Lái xe',
  icon: '🚗',
  yearsTotal: 1,
  yearLabels: ['Cấp tốc 3 tháng → thi sát hạch'],
  tagline: 'B1/B2/C/D — 600 câu lý thuyết, biển báo, sa hình 4 bài, mô phỏng cabin lái',
};
