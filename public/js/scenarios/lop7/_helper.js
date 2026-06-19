// ============================================================
// Helper soạn quiz tuần cho Lớp 7 (THCS) — yearLevel = 2.
// ============================================================
/**
 * Tạo 1 câu hỏi trắc nghiệm (chuẩn ngang Lớp 6).
 * - theory:         tuỳ chọn — mảng đoạn HTML — khối "📚 Lý thuyết" đào sâu (bám SGK GDPT 2018).
 * - choiceFeedback: tuỳ chọn — mảng N string (1 / lựa chọn) — hiện dưới TỪNG đáp án sau khi chọn.
 * THỨ TỰ THAM SỐ KHỚP LỚP 6: theory ở slot 5, choiceFeedback ở slot 6. Đừng đảo lại slot 5=choiceFeedback.
 */
export const Q = (stem, choices, answer, explanation, theory, choiceFeedback) =>
  ({ stem, choices, answer, explanation, theory, choiceFeedback });

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
