// ============================================================
// Helper soạn quiz tuần cho Lớp 3 — tránh lặp boilerplate.
// ============================================================

export const Q = (stem, choices, answer, explanation) =>
  ({ stem, choices, answer, explanation });

export const W = (modulePrefix, subjectKey, n, title, questions, opts = {}) => {
  const week = String(n).padStart(2, '0');
  return {
    id:           `${modulePrefix}-w${week}-quiz`,
    title:        `Tuần ${n} — ${title}`,
    kind:         opts.kind ?? 'quiz',
    yearLevel:    3,
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? (n <= 18 ? 2 : 2),
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
