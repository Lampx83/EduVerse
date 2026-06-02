// ============================================================
// Helper soạn quiz tuần cho Lớp 9 (THCS) — yearLevel = 4, năm thi vào 10.
// ============================================================
export const Q = (stem, choices, answer, explanation) =>
  ({ stem, choices, answer, explanation });

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
