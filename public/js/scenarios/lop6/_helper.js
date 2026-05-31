// ============================================================
// Helper soạn quiz tuần cho Lớp 6 (THCS) — tránh lặp boilerplate.
// yearLevel = 1 vì Lớp 6 là năm thứ nhất của cấp THCS
// (xem DOMAIN.yearLabels trong domains/secondary/index.js).
// HK1: tuần 1–18 · HK2: tuần 19–36.
// ============================================================

/** Tạo 1 câu hỏi trắc nghiệm 4 lựa chọn */
export const Q = (stem, choices, answer, explanation) =>
  ({ stem, choices, answer, explanation });

/**
 * Tạo 1 scenario tuần cho Lớp 6.
 * - modulePrefix: "S6TOAN", "S6NV", "S6TA", …
 * - subjectKey:   khoá môn trong SUBJECTS ("toan", "ngu-van"…)
 * - n:            số tuần (1–36)
 * - title:        tên chủ đề tuần
 * - questions:    mảng câu hỏi do Q() tạo
 * - opts:         { difficulty, description, kind='quiz' }
 */
export const W = (modulePrefix, subjectKey, n, title, questions, opts = {}) => {
  const week = String(n).padStart(2, '0');
  return {
    id:           `${modulePrefix}-w${week}-quiz`,
    title:        `Tuần ${n} — ${title}`,
    kind:         opts.kind ?? 'quiz',
    yearLevel:    1, // Lớp 6 = năm thứ 1 trong cấp THCS
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? (n <= 12 ? 2 : (n <= 24 ? 2 : 3)),
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

/** Tạo map { id → scenario } từ mảng tuần */
export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
