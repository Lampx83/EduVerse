// ============================================================
// ScoreUp client — FE helper gọi /api/quiz/* + transform về format engine cũ
// ============================================================
// Engine Tizia (ScenarioEngine) hiện kỳ vọng câu hỏi dạng:
//   { stem, choices: string[], answer: number, explanation }
// ScoreUp trả:
//   { id, question, options: [{key,text}], correct_answer, explanation, … }
// File này lo:
//   1. Lookup ScoreUp subject_id từ (grade, subjectKey) qua bảng auto-gen.
//   2. fetch /api/quiz/random với include_answers=1 (FE engine cần answer
//      để hiện instant feedback ở weekly-lesson).
//   3. Transform schema. Giữ scoreupId + externalId trên mỗi câu để
//      submit attempt qua /api/quiz/attempt sau khi HS chọn.
// ============================================================

import { getScoreUpSubjectId } from './scoreup-subject-map.js';

/** Transform ScoreUp Question → Tizia engine format. */
export function toTiziaQuestion(q) {
  const options = Array.isArray(q.options) ? q.options : [];
  const choices = options.map((o) => o?.text ?? '');
  // correct_answer là "A"|"B"|… → index trong options. Có sẵn correct_index thì xài luôn.
  let answer = Number.isInteger(q.correct_index) ? q.correct_index : 0;
  if (!Number.isInteger(q.correct_index) && q.correct_answer) {
    const i = options.findIndex((o) => o.key === q.correct_answer);
    if (i >= 0) answer = i;
  }
  return {
    stem: q.question || '',
    choices,
    answer,
    explanation: q.explanation || '',
    // Metadata gốc — để code khác submit attempt + debug.
    _scoreup: {
      id: q.id,
      externalId: q.external_id || null,
      subjectId: q.subject_id || null,
      chapterId: q.chapter_id || null,
      questionType: q.question_type || 'mcq_single',
    },
  };
}

/**
 * Lấy N câu cho 1 tuần học từ ScoreUp.
 * @param {{ grade: number|string, subjectKey: string, week: number, limit?: number }} o
 * @returns {Promise<Array>} mảng câu format engine Tizia (stem/choices/answer/explanation/_scoreup).
 * @throws nếu chưa map subject hoặc fetch fail.
 */
export async function fetchQuizForWeek({ grade, subjectKey, week, limit = 10 }) {
  const subjectId = getScoreUpSubjectId(grade, subjectKey);
  if (!subjectId) {
    throw new Error(`scoreup_no_subject: lop${grade}:${subjectKey}`);
  }
  const usp = new URLSearchParams({
    subject_id: subjectId,
    chapter_id: `Tuần ${week}`,
    limit: String(Math.min(Math.max(limit, 1), 100)),
    include_answers: '1',
  });
  const res = await fetch(`api/quiz/random?${usp}`, { credentials: 'include' });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`scoreup_${res.status}: ${txt.slice(0, 120)}`);
  }
  const data = await res.json();
  return (data.items || []).map(toTiziaQuestion);
}

/**
 * Hydrate scenario.questions từ ScoreUp dựa trên metadata
 *   (scenario.yearLevel + scenario.subject + scenario.week).
 * Trả về scenario MỚI với questions từ ScoreUp; nếu lookup/fetch lỗi → giữ
 * nguyên questions hardcode cũ (offline-fallback friendly).
 *
 * @param {object} scenario - scenario lấy từ public/js/scenarios/*.js
 * @returns {Promise<object>} scenario đã hydrate
 */
export async function hydrateScenarioFromScoreUp(scenario) {
  const grade = scenario.yearLevel;
  const subjectKey = scenario.subject;
  const week = scenario.week;
  if (!grade || !subjectKey || !Number.isFinite(week)) {
    // Không đủ metadata → giữ nguyên hardcode (vd skill-quizzes, library-career…)
    return scenario;
  }
  // Nếu hardcode đã có theory (lý thuyết kèm — tác giả soạn riêng cho từng câu)
  // → SKIP ScoreUp. ScoreUp hiện chưa lưu trường theory + choiceFeedback (xem
  // docs/upgrade-prompts/SCOREUP-UPGRADE.md Phase 1 mục 5). Sau khi ScoreUp upgrade
  // schema + Tizia bulk-sync câu lên, có thể bỏ guard này để hydration trở lại.
  const hardQs = Array.isArray(scenario.questions) ? scenario.questions : [];
  const hasRichLocal = hardQs.some(q => q && (q.theory || q.choiceFeedback));
  if (hasRichLocal) return { ...scenario, _hydrated: 'hardcode-rich' };

  const desiredLimit = Math.max(hardQs.length, 1);
  try {
    const fresh = await fetchQuizForWeek({ grade, subjectKey, week, limit: desiredLimit });
    if (!fresh.length) return scenario; // ScoreUp rỗng → giữ hardcode
    return { ...scenario, questions: fresh, _hydrated: 'scoreup' };
  } catch (e) {
    console.warn('[scoreup] hydrate failed, fallback hardcode:', e.message);
    return scenario;
  }
}
