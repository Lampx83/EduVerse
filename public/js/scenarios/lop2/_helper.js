// ============================================================
// Helper soạn quiz tuần cho Lớp 2 — tránh lặp boilerplate.
// ============================================================

/** Tạo 1 câu hỏi trắc nghiệm 4 lựa chọn */
export const Q = (stem, choices, answer, explanation) =>
  ({ stem, choices, answer, explanation });

/**
 * Tạo 1 scenario tuần.
 * - modulePrefix: "P2", "P2TV", "P2TA", …
 * - subjectKey:   khoá môn trong SUBJECTS ("toan", "tieng-viet"…)
 * - n:            số tuần (1–36); HK1=1–18, HK2=19–36 (tuần 22 nghỉ Tết)
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
    yearLevel:    2,
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? (n <= 18 ? 1 : 2),
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

/** Tạo map { id → scenario } từ mảng tuần */
export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
