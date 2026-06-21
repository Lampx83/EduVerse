// ============================================================
// Helper soạn quiz tuần cho Lớp 8 (THCS) — yearLevel = 3.
// ============================================================
export const Q = (stem, choices, answer, explanation, choiceFeedback) =>
  ({ stem, choices, answer, explanation, choiceFeedback });

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
