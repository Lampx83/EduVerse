// ============================================================
// Year 5 — Adapter: chuyển dữ liệu thô từ year5.js sang Scenario chuẩn engine
// ============================================================
// L51_CASES → mỗi ca thành 1 soap-write scenario
// L52_PERSONAS → mỗi persona thành 1 patient-roleplay scenario
// L54_QUIZ → 1 quiz scenario L5.4
// L55_OTC_SCENARIOS → mỗi tình huống thành 1 quiz (4 câu Q/A)
// L56_QUIZ_STATS → 1 quiz scenario L5.6
// L53/L57/L54_WORKFLOWS → giữ raw data, sẽ cần renderer riêng (TBD)
// ============================================================

// year5.js đã thành logic-only (loadOsceExam fetch DB); data raw L5x giờ ở
// _data/year5.js (nguồn seed). year5-adapted dựng scenario từ data raw nên đọc
// thẳng từ _data.
import {
  L51_CASES, L52_PERSONAS, L53_GPP_WORKFLOWS, L54_QUIZ,
  L54_WORKFLOWS, L55_OTC_SCENARIOS, L56_QUIZ_STATS, L57_OSCE_EXAM,
} from './_data/year5.js';

// ── L5.1: mỗi ca lâm sàng → 1 soap-write scenario ──
const L51_AS_SOAP = L51_CASES.map((c, i) => ({
  id: `L5.1-soap-${String(i + 1).padStart(2, '0')}-${c.id}`,
  title: `L5.1 · ${c.title} — Viết SOAP`,
  description: c.chiefComplaint,
  kind: 'soap-write',
  yearLevel: 5,
  subject: 'duoc-lam-sang',
  difficulty: c.difficulty || 4,
  timeLimitS: c.maxTimeS || 900,
  caseId: c.id,
  rubric: 'all',
  aiTutor: true,
  // Lưu trữ ca lâm sàng đầy đủ kèm theo để engine load (vì case không nằm trong case-db chính)
  _embeddedCase: c,
}));

// ── L5.2: persona → patient-roleplay scenario ──
const L52_AS_ROLEPLAY = L52_PERSONAS.map(p => ({
  id: p.id,
  title: `L5.2 · ${p.scenario}`,
  description: p.persona.slice(0, 200) + '…',
  kind: 'patient-roleplay',
  yearLevel: 5,
  subject: 'tu-van-bn',
  difficulty: 4,
  timeLimitS: p.maxTimeS || 600,
  caseId: p.caseId,
  patientPersona: p.persona,
  maxTurns: 20,
  evaluationRubric: p.rubricCriteria,
}));

// ── L5.4: quiz Dược BV (10 câu) ──
const L54_QUIZ_SCENARIO = {
  id: 'L5.4-bv-quiz',
  title: 'L5.4 · Dược bệnh viện — Pha thuốc UT, TPN, IV admixture',
  description: 'Kiểm tra kiến thức pha hoá trị, dinh dưỡng tĩnh mạch, tương kỵ IV theo ASHP/USP <797>/<800>.',
  kind: 'quiz',
  yearLevel: 5,
  subject: 'duoc-bv',
  difficulty: 5,
  timeLimitS: 900,
  questions: L54_QUIZ.map(q => ({
    stem: q.stem,
    choices: q.options,
    answer: q.answer,
    explanation: q.explain || '',
  })),
};

// ── L5.5: mỗi OTC scenario → 1 quiz mini ──
const L55_AS_QUIZZES = L55_OTC_SCENARIOS.map(s => ({
  id: s.id,
  title: `L5.5 · ${s.title}`,
  description: s.scenario,
  kind: 'quiz',
  yearLevel: 5,
  subject: 'duoc-cd',
  difficulty: 3,
  timeLimitS: s.maxTimeS || 480,
  // Mỗi tình huống có 4 câu, format mở (Q/A). Đưa thành 1 câu trắc nghiệm trống
  // (đáp án "Tất cả các ý trên") với explanation chi tiết để SV học theo.
  questions: s.questions.map((qa, i) => ({
    stem: `<b>${qa.q}</b><br><i>(Tình huống: ${s.scenario})</i>`,
    choices: [
      qa.a.slice(0, Math.min(120, qa.a.length)) + (qa.a.length > 120 ? '…' : ''),
      'Cần nghiên cứu thêm trước khi tư vấn',
      'Đề nghị BN đến khám bác sĩ ngay',
      'Không có thông tin chính thức',
    ],
    answer: 0,
    explanation: qa.a,
  })),
}));

// ── L5.6: quiz thống kê y học cho khoá luận ──
const L56_QUIZ_SCENARIO = {
  id: 'L5.6-thesis-stats',
  title: 'L5.6 · Khoá luận — Thống kê y học',
  description: 'Kiến thức biostatistics cốt yếu để đọc và viết khoá luận: p-value, RR/OR/HR, NNT, ANOVA, meta-analysis.',
  kind: 'quiz',
  yearLevel: 5,
  subject: 'data-research',
  difficulty: 4,
  timeLimitS: 900,
  questions: L56_QUIZ_STATS.map(q => ({
    stem: q.stem,
    choices: q.options,
    answer: q.answer,
    explanation: q.explain || '',
  })),
};

// ── L5.7: OSCE composite — wrap thành thông báo "cần renderer riêng" ──
const L57_OSCE_INFO = {
  id: 'L5.7-osce-info',
  title: 'L5.7 · OSCE Tốt nghiệp — 10 trạm',
  description: '🎓 Mô phỏng kỳ thi OSCE 10 trạm cho SV năm cuối — composite scenario gồm: đọc đơn, tư vấn OTC, TDM vancomycin, inhaler hen, SOAP DKA, AI patient phỏng vấn, chuẩn độ, pháp luật thuốc, calculator liều nhi, tương tác đa thuốc + Beers.',
  kind: 'quiz', // tạm dùng quiz hiển thị info; renderer composite sẽ thay sau
  yearLevel: 5,
  subject: 'osce',
  difficulty: 5,
  timeLimitS: L57_OSCE_EXAM.totalTimeS || 3600,
  questions: [{
    stem: `<b>OSCE Tốt nghiệp — ${L57_OSCE_EXAM.stations.length} trạm</b><br><br>` +
          L57_OSCE_EXAM.stations.map(s =>
            `<b>Trạm ${s.n}.</b> ${s.title} (${s.maxTimeS / 60}\' · ${s.weight}đ)`
          ).join('<br>'),
    choices: [
      'Tôi đã đọc hiểu cấu trúc 10 trạm và sẵn sàng thi',
      'Cần ôn lại trước',
      'Chưa rõ — đọc lại syllabus',
      'Bỏ qua',
    ],
    answer: 0,
    explanation: 'OSCE chính thức sẽ chạy từng trạm; renderer composite sẽ được implement riêng (kế thừa từ scenario này). Hiện tại các module L5.1-L5.6 đã có scenario riêng — luyện qua chúng trước.',
  }],
};

// Gom tất cả scenarios L5
export const YEAR5_ADAPTED_SCENARIOS = {};
for (const s of [...L51_AS_SOAP, ...L52_AS_ROLEPLAY, L54_QUIZ_SCENARIO,
                 ...L55_AS_QUIZZES, L56_QUIZ_SCENARIO, L57_OSCE_INFO]) {
  YEAR5_ADAPTED_SCENARIOS[s.id] = s;
}

// Cũng xuất GPP workflows + L5.4 workflows + OSCE thô để renderer riêng dùng sau
export { L53_GPP_WORKFLOWS, L54_WORKFLOWS, L57_OSCE_EXAM };
