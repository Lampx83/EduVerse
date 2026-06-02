// ============================================================
// Helper soạn quiz tuần cho Lớp 7 (THCS) — yearLevel = 2.
// ============================================================
export const Q = (stem, choices, answer, explanation) =>
  ({ stem, choices, answer, explanation });

export const W = (modulePrefix, subjectKey, n, title, questions, opts = {}) => {
  const week = String(n).padStart(2, '0');
  return {
    id:           `${modulePrefix}-w${week}-quiz`,
    title:        `Tuần ${n} — ${title}`,
    kind:         opts.kind ?? 'quiz',
    yearLevel:    2, // Lớp 7 = năm thứ 2 trong cấp THCS
    subject:      subjectKey,
    difficulty:   opts.difficulty ?? (n <= 12 ? 2 : (n <= 24 ? 3 : 3)),
    description:  opts.description ?? title,
    questions,
    semester:     n <= 18 ? 1 : 2,
    week:         n,
  };
};

export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
