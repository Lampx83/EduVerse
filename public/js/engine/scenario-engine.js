// ============================================================
// ScenarioEngine — Trái tim của 38 module
// ============================================================
// Mỗi module mới chỉ cần khai báo Scenario JSON (xem types.js).
// Engine sẽ:
//   1. Mount UI tương ứng vào host element
//   2. Theo dõi tương tác SV → tính điểm theo rubric
//   3. Gọi AITutor nếu scenario yêu cầu chấm tự luận
//   4. Submit kết quả qua API (api/attempts)
//   5. Trả AssessmentResult về callback onComplete
//
// Cách dùng từ một module bất kỳ:
//
//   import { ScenarioEngine } from './engine/scenario-engine.js';
//   import scenario from './scenarios/L3.3-tuong-tac-01.json' assert {type:'json'};
//
//   const engine = new ScenarioEngine({
//     host: document.getElementById('app'),
//     scenario,
//     onComplete: (result) => console.log(result),
//   });
//   engine.start();
//
// ============================================================

import { getDrug, findInteractions } from './drug-db.js';
import { Assessment } from './assessment.js';

const RENDERERS = {
  'quiz':              renderQuiz,
  'drag-match':        renderDragMatch,
  'compound-lab':      renderCompoundLab,
  'soap-write':        renderSoapWrite,
  'patient-roleplay':  renderPatientRoleplay,
  'identification':    renderIdentification,
  'calculator':        renderCalculator,
  // 'arrange', 'titration', 'osce-station', 'structure-draw' — bổ sung sau
};

export class ScenarioEngine {
  /**
   * @param {Object} cfg
   * @param {HTMLElement} cfg.host
   * @param {import('./types.js').Scenario} cfg.scenario
   * @param {(r: import('./types.js').AssessmentResult)=>void} [cfg.onComplete]
   * @param {string} [cfg.playerName]
   * @param {string} [cfg.classCode]
   */
  constructor(cfg) {
    this.host = cfg.host;
    this.scenario = cfg.scenario;
    this.onComplete = cfg.onComplete || (() => {});
    this.playerName = cfg.playerName || 'Ẩn danh';
    this.classCode = cfg.classCode;
    this.assessment = new Assessment(this.scenario);
    this.startedAt = 0;
    this.state = {};
  }

  start() {
    const renderer = RENDERERS[this.scenario.kind];
    if (!renderer) {
      throw new Error(`Scenario kind "${this.scenario.kind}" chưa có renderer`);
    }
    this.startedAt = Date.now();
    this._renderHeader();
    renderer(this, this.host);
  }

  _renderHeader() {
    const h = document.createElement('div');
    h.className = 'scenario-header';
    h.innerHTML = `
      <div class="scenario-title">${this.scenario.title}</div>
      ${this.scenario.description ? `<div class="scenario-desc">${this.scenario.description}</div>` : ''}
      <div class="scenario-meta">
        ${this.scenario.yearLevel ? `<span>📚 Năm ${this.scenario.yearLevel}</span>` : ''}
        ${this.scenario.subject ? `<span>🎓 ${this.scenario.subject}</span>` : ''}
        ${this.scenario.difficulty ? `<span>⭐ ${this.scenario.difficulty}/5</span>` : ''}
      </div>`;
    this.host.appendChild(h);
  }

  /** Module renderer gọi khi SV hoàn thành để tính điểm + submit. */
  async complete(rawDetails) {
    const result = await this.assessment.evaluate(rawDetails);
    result.playerName = this.playerName;
    if (this.classCode) result.classCode = this.classCode;
    result.durationMs = Date.now() - this.startedAt;
    result.timestamp = Date.now();
    await this._submitAttempt(result);
    this.onComplete(result);
    return result;
  }

  async _submitAttempt(result) {
    try {
      await fetch('api/attempts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          version: this.scenario.id,           // dùng scenario.id làm version
          playerName: result.playerName,
          classCode: result.classCode,
          score: result.score,
          correct: result.rubricBreakdown.filter(r => r.score >= 0.5).length,
          total: result.rubricBreakdown.length || 1,
          duration_ms: result.durationMs,
          level_n: this.scenario.difficulty || null,
          details: JSON.stringify({
            kind: this.scenario.kind,
            stars: result.stars,
            rubric: result.rubricBreakdown,
            ...result.details,
          }),
        }),
      });
    } catch (e) {
      console.warn('[engine] submit attempt failed', e);
    }
  }
}

// ============================================================
// RENDERERS — mỗi kind một hàm
// Code thực sự render từng kind có thể tách file riêng khi
// scenario phức tạp hơn. Dưới đây là MVP để demo API engine.
// ============================================================

/** @param {ScenarioEngine} engine */
function renderQuiz(engine, host) {
  const sc = /** @type {import('./types.js').QuizScenario} */ (engine.scenario);
  const wrap = document.createElement('div');
  wrap.className = 'quiz-wrap';
  const answers = new Array(sc.questions.length).fill(-1);

  sc.questions.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.innerHTML = `
      <div class="quiz-stem"><b>Câu ${i + 1}.</b> ${q.stem}</div>
      ${q.image ? `<img src="${q.image}" class="quiz-img"/>` : ''}
      <div class="quiz-choices">
        ${q.choices.map((c, ci) => `
          <label class="quiz-choice"><input type="radio" name="q${i}" value="${ci}"/> ${c}</label>
        `).join('')}
      </div>`;
    card.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('change', () => { answers[i] = parseInt(inp.value); });
    });
    wrap.appendChild(card);
  });

  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.textContent = 'Nộp bài';
  submitBtn.onclick = () => engine.complete({ answers, questions: sc.questions });
  wrap.appendChild(submitBtn);
  host.appendChild(wrap);
}

/** @param {ScenarioEngine} engine */
function renderDragMatch(engine, host) {
  const sc = /** @type {import('./types.js').DragMatchScenario} */ (engine.scenario);
  // MVP: render placeholder — implementation đầy đủ trong file riêng
  host.insertAdjacentHTML('beforeend',
    `<div class="drag-match-placeholder">
      <div>🔗 Drag-Match scenario: ${sc.leftItems.length} ↔ ${sc.rightItems.length} items</div>
      <button class="submit-btn">[stub] Hoàn thành</button>
    </div>`);
  host.querySelector('.drag-match-placeholder .submit-btn')
      .onclick = () => engine.complete({ stub: true, pairs: sc.correctPairs });
}

/** @param {ScenarioEngine} engine */
function renderCompoundLab(engine, host) {
  // Bridge sang compounding-lab.html hiện có — dùng recipe đính kèm
  const sc = /** @type {import('./types.js').CompoundLabScenario} */ (engine.scenario);
  host.insertAdjacentHTML('beforeend',
    `<div class="compound-lab-bridge">
      <a class="open-lab" href="compounding-lab.html?recipe=${sc.recipe.id}">🧪 Mở Bào chế Lab</a>
    </div>`);
}

/** @param {ScenarioEngine} engine */
async function renderSoapWrite(engine, host) {
  const sc = /** @type {import('./types.js').SoapWriteScenario} */ (engine.scenario);
  host.insertAdjacentHTML('beforeend', `
    <div class="soap-wrap">
      <div class="soap-case">📋 Ca: ${sc.caseId}</div>
      <textarea class="soap-input" rows="14" placeholder="Viết SOAP note tại đây..."></textarea>
      <button class="submit-btn">Nộp & xin AI feedback</button>
      <div class="soap-feedback"></div>
    </div>`);
  host.querySelector('.submit-btn').onclick = async () => {
    const text = host.querySelector('.soap-input').value;
    const fb = host.querySelector('.soap-feedback');
    fb.textContent = '⏳ AI đang chấm bài...';
    // gọi AITutor (xem ai-tutor.js)
    const { gradeSoap } = await import('./ai-tutor.js');
    const review = await gradeSoap({ caseId: sc.caseId, soapText: text, rubric: sc.rubric });
    fb.innerHTML = `<div class="ai-feedback">${review.html}</div>`;
    engine.complete({ soapText: text, rubricScore: review.scores });
  };
}

/** @param {ScenarioEngine} engine */
function renderPatientRoleplay(engine, host) {
  host.insertAdjacentHTML('beforeend',
    `<div class="roleplay-placeholder">🗣️ AI Patient Role-play — sẽ implement chi tiết ở module L5.2.</div>`);
}

/** @param {ScenarioEngine} engine */
function renderIdentification(engine, host) {
  host.insertAdjacentHTML('beforeend',
    `<div class="identification-placeholder">🌿 Nhận diện (ảnh / AR / kính hiển vi) — sẽ implement ở L2.2 và L2.3.</div>`);
}

/** @param {ScenarioEngine} engine */
function renderCalculator(engine, host) {
  const sc = /** @type {import('./types.js').CalculatorScenario} */ (engine.scenario);
  const inputsHtml = sc.inputs.map(i => `
    <label class="calc-input">
      ${i.label} (${i.unit})
      <input type="number" step="any" data-name="${i.name}"/>
    </label>`).join('');
  host.insertAdjacentHTML('beforeend', `
    <div class="calc-wrap">
      ${inputsHtml}
      <button class="submit-btn">Tính</button>
      <div class="calc-result"></div>
    </div>`);
  host.querySelector('.submit-btn').onclick = () => {
    const values = {};
    host.querySelectorAll('input').forEach(inp => values[inp.dataset.name] = parseFloat(inp.value));
    const computed = computeFormula(sc.formula, values);
    const ok = Math.abs(computed - sc.target) <= sc.tolerance;
    host.querySelector('.calc-result').textContent =
      `Kết quả: ${computed.toFixed(2)} — ${ok ? '✅ Đúng' : `❌ Lệch (đáp án ${sc.target})`}`;
    engine.complete({ input: values, computed, target: sc.target, ok });
  };
}

// Bộ công thức cho calculator
function computeFormula(name, v) {
  switch (name) {
    case 'cockcroft-gault':
      // CrCl = (140-age) × kg / (72 × Scr_mg/dL); × 0.85 nếu nữ
      return ((140 - v.age) * v.weight) / (72 * v.scr) * (v.sex === 'F' ? 0.85 : 1);
    case 'mg-per-kg':
      return v.dose_mg_per_kg * v.weight;
    case 'bsa-mosteller':
      // BSA = √(height × weight / 3600)
      return Math.sqrt((v.height * v.weight) / 3600);
    case 'auc-trapezoidal':
      // simplified: AUC = (C0 + C1)/2 × (t1 - t0)
      return ((v.c0 + v.c1) / 2) * (v.t1 - v.t0);
    default: return NaN;
  }
}
