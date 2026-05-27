// ============================================================
// Assessment — Rubric-based scoring chung cho 38 module
// ============================================================
// Mỗi scenario kind có một "evaluator" — Assessment chọn đúng
// evaluator dựa vào scenario.kind, chấm điểm 0–100, quy ra
// stars (0–3) và breakdown theo rubric.
// ============================================================

const EVALUATORS = {
  'quiz':              evalQuiz,
  'drag-match':        evalDragMatch,
  'compound-lab':      evalCompoundLab,
  'soap-write':        evalSoapWrite,
  'patient-roleplay':  evalPatientRoleplay,
  'identification':    evalIdentification,
  'calculator':        evalCalculator,
};

export class Assessment {
  /** @param {import('./types.js').Scenario} scenario */
  constructor(scenario) { this.scenario = scenario; }

  /**
   * @param {any} rawDetails  — Renderer truyền vào (đã đính kèm đáp án để chấm)
   * @returns {Promise<import('./types.js').AssessmentResult>}
   */
  async evaluate(rawDetails) {
    const evaluator = EVALUATORS[this.scenario.kind];
    if (!evaluator) throw new Error(`No evaluator for kind ${this.scenario.kind}`);
    const { score, breakdown, details } = await evaluator(this.scenario, rawDetails);
    return {
      scenarioId: this.scenario.id,
      playerName: '',
      score: Math.round(score),
      stars: scoreToStars(score),
      durationMs: 0,
      rubricBreakdown: breakdown,
      details,
      timestamp: 0,
    };
  }
}

/** @returns {0|1|2|3} */
export function scoreToStars(percent) {
  if (percent >= 95) return 3;
  if (percent >= 75) return 2;
  if (percent >= 50) return 1;
  return 0;
}

// ─────────────────────────────────────────────────────────────
// EVALUATORS
// ─────────────────────────────────────────────────────────────

function evalQuiz(scenario, { answers, questions }) {
  let correct = 0;
  const breakdown = questions.map((q, i) => {
    const ok = answers[i] === q.answer;
    if (ok) correct++;
    return {
      criterion: `Câu ${i + 1}`,
      score: ok ? 1 : 0,
      feedback: ok ? '✓' : `❌ Đáp án đúng: ${q.choices[q.answer]}${q.explanation ? '. ' + q.explanation : ''}`,
    };
  });
  return { score: (correct / questions.length) * 100, breakdown, details: { correct, total: questions.length } };
}

function evalDragMatch(scenario, { pairs }) {
  // pairs là mảng SV nộp — so với scenario.correctPairs
  const correct = scenario.correctPairs.length;
  const hit = pairs.filter(p =>
    scenario.correctPairs.some(cp => cp[0] === p[0] && cp[1] === p[1])).length;
  return {
    score: (hit / correct) * 100,
    breakdown: [{ criterion: 'Ghép đúng', score: hit / correct, feedback: `${hit}/${correct}` }],
    details: { hit, total: correct },
  };
}

function evalCompoundLab(scenario, { steps, errors }) {
  // Reuse logic từ compounding-lab.html — tạm trả về placeholder
  return {
    score: 100 - (errors?.length || 0) * 10,
    breakdown: (steps || []).map((s, i) => ({
      criterion: s.label || `Bước ${i + 1}`,
      score: s.ok ? 1 : 0,
      feedback: s.ok ? '✓' : (s.reason || 'Sai'),
    })),
    details: { steps, errors },
  };
}

function evalSoapWrite(scenario, { soapText, rubricScore }) {
  // rubricScore do AITutor chấm trả về { subjective, objective, assessment, plan } each 0–1
  const items = Object.entries(rubricScore || {});
  const avg = items.reduce((s, [, v]) => s + v, 0) / (items.length || 1);
  return {
    score: avg * 100,
    breakdown: items.map(([k, v]) => ({
      criterion: k.toUpperCase(),
      score: v,
      feedback: `${Math.round(v * 100)}/100`,
    })),
    details: { soapText },
  };
}

function evalPatientRoleplay(scenario, { evaluation }) {
  // evaluation từ AITutor: { criteria: [{name, score 0-1, comment}] }
  const items = evaluation?.criteria || [];
  const avg = items.reduce((s, c) => s + c.score, 0) / (items.length || 1);
  return {
    score: avg * 100,
    breakdown: items.map(c => ({ criterion: c.name, score: c.score, feedback: c.comment })),
    details: { transcript: evaluation?.transcript },
  };
}

function evalIdentification(scenario, { answers, targets }) {
  let correct = 0;
  const breakdown = targets.map((t, i) => {
    const ok = answers[i] === t.id;
    if (ok) correct++;
    return { criterion: t.id, score: ok ? 1 : 0, feedback: ok ? '✓' : `❌ Đúng là ${t.id}` };
  });
  return { score: (correct / targets.length) * 100, breakdown, details: { correct, total: targets.length } };
}

function evalCalculator(scenario, { computed, target, ok, input }) {
  const err = Math.abs(computed - target);
  const ratio = err / Math.abs(target || 1);
  const score = ok ? 100 : Math.max(0, 100 - ratio * 200);
  return {
    score,
    breakdown: [{
      criterion: 'Độ chính xác',
      score: ok ? 1 : Math.max(0, 1 - ratio * 2),
      feedback: ok ? '✓ Trong dung sai' : `Lệch ${err.toFixed(2)} (chấp nhận ±${scenario.tolerance})`,
    }],
    details: { input, computed, target },
  };
}
