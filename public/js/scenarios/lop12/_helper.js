// Helper Lớp 12 (THPT năm 3, thi tốt nghiệp). yearLevel=3, difficulty 4-5.
export const Q = (stem, choices, answer, explanation, choiceFeedback) => ({ stem, choices, answer, explanation, choiceFeedback });
export const W = (prefix, subj, n, title, qs, opts = {}) => {
  const w = String(n).padStart(2, '0');
  return {
    id: `${prefix}-w${w}-quiz`, title: `Tuần ${n} — ${title}`,
    kind: opts.kind ?? 'quiz', yearLevel: 3, subject: subj,
    difficulty: opts.difficulty ?? (n <= 18 ? 4 : 5), description: opts.description ?? title,
    questions: qs, semester: n <= 18 ? 1 : 2, week: n,
  };
};
export const indexBy = (arr) => Object.fromEntries(arr.map(s => [s.id, s]));
