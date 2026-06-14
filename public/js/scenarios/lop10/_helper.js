// ============================================================
// Helper soạn quiz tuần cho Lớp 10 (THPT) — yearLevel = 1.
// ============================================================
export const Q = (stem, choices, answer, explanation, choiceFeedback) =>
  ({ stem, choices, answer, explanation, choiceFeedback });

export const W = (modulePrefix, subjectKey, n, title, questions, opts = {}) => {
  const week = String(n).padStart(2, '0');
  return {
    id:           `${modulePrefix}-w${week}-quiz`,
    title:        `Tuần ${n} — ${title}`,
    kind:         opts.kind ?? 'quiz',
    yearLevel:    1, // Lớp 10 = năm đầu THPT
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? (n <= 12 ? 3 : (n <= 24 ? 4 : 4)),
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
