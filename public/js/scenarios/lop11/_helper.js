// Helper Lớp 11 (THPT năm 2). yearLevel=2.
export const Q = (stem, choices, answer, explanation, choiceFeedback) => ({ stem, choices, answer, explanation, choiceFeedback });
export const W = (prefix, subj, n, title, qs, opts = {}) => {
  const w = String(n).padStart(2, '0');
  return {
    id: `${prefix}-w${w}-quiz`, title: `Tuần ${n} — ${title}`,
    kind: opts.kind ?? 'quiz', yearLevel: 2, subject: subj,
    difficulty: opts.difficulty ?? 4, description: opts.description ?? title,
    questions: qs, semester: n <= 18 ? 1 : 2, week: n,
  };
};
export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
