// ============================================================
// Helper soạn quiz tuần cho Lớp 8 (THCS) — yearLevel = 3.
// ============================================================
/**
 * Tạo 1 câu hỏi trắc nghiệm 4 lựa chọn (chuẩn ngang Lớp 6/7).
 * - theory:         tuỳ chọn — mảng đoạn HTML — khối "📚 Lý thuyết" (bám SGK GDPT 2018).
 * - choiceFeedback: tuỳ chọn — mảng N string (1 / lựa chọn) — hiện dưới TỪNG đáp án sau khi chọn.
 * Tương thích ngược: Q(stem,choices,answer,explanation) vẫn chạy.
 */
export const Q = (stem, choices, answer, explanation, theory, choiceFeedback) =>
  ({ stem, choices, answer, explanation, theory, choiceFeedback });

export const W = (modulePrefix, subjectKey, n, title, questions, opts = {}) => {
  const week = String(n).padStart(2, '0');
  return {
    id:           `${modulePrefix}-w${week}-quiz`,
    title:        `Tuần ${n} — ${title}`,
    kind:         opts.kind ?? 'quiz',
    yearLevel:    3, // Lớp 8 = năm thứ 3 trong cấp THCS
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? 3,
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
