// ============================================================
// Helper soạn quiz tuần cho Lớp 9 (THCS) — yearLevel = 4, năm thi vào 10.
// ============================================================
/**
 * Tạo 1 câu hỏi trắc nghiệm 4 lựa chọn (chuẩn ngang Lớp 6/7/8).
 * - theory:         tuỳ chọn — mảng đoạn HTML — khối "📚 Lý thuyết" (bám SGK GDPT 2018).
 * - choiceFeedback: tuỳ chọn — mảng N string (1 / lựa chọn) — hiện dưới TỪNG đáp án.
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
    yearLevel:    4, // Lớp 9 = năm thứ 4 (cuối cấp THCS)
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? (n <= 18 ? 3 : 4), // HK2 tăng độ khó chuẩn bị thi
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
