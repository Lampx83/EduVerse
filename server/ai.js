// ============================================================
// AITutor backend — Ollama (qwen2.5:14b-instruct-ctx16k)
// ============================================================
// 3 endpoints:
//   POST /api/ai/grade-soap        — chấm SOAP note theo rubric
//   POST /api/ai/patient-turn      — 1 lượt đối thoại với AI patient
//   POST /api/ai/evaluate-roleplay — chấm toàn bộ phiên role-play
//
// Cấu hình env:
//   OLLAMA_URL     — endpoint Ollama (mặc định = dev tunnel)
//                    Dev:  http://101.96.66.232:8037/ollama/api
//                    Prod: http://10.2.13.58/ollama/api  (LAN — khi app chạy
//                          trên cùng host 232, đi qua nginx nội bộ)
//   OLLAMA_SECKEY  — Header x-ollama-seckey (mặc định "pharmasim" — shared
//                    secret với Ollama server nội bộ; KHÔNG đổi tuỳ ý).
//   OLLAMA_MODEL   — Tên model (mặc định qwen2.5:14b-instruct-ctx16k)
//   OLLAMA_TIMEOUT_MS — Timeout 1 yêu cầu (mặc định 60s)
//
// Ưu điểm khi dùng Ollama nội bộ:
//   - Miễn phí token (chạy on-prem, không gọi cloud)
//   - Dữ liệu BN/SOAP KHÔNG ra ngoài → tốt cho privacy giáo dục y dược
//   - Tiếng Việt chuẩn (qwen2.5 multilingual mạnh)
// ============================================================

const OLLAMA_URL = (process.env.OLLAMA_URL || 'http://101.96.66.232:8037/ollama/api').replace(/\/+$/, '');
const OLLAMA_SECKEY = process.env.OLLAMA_SECKEY || 'pharmasim';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'qwen2.5:14b-instruct-ctx16k';
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS) || 60_000;

console.log(`[ai] Ollama backend = ${OLLAMA_URL} (model=${OLLAMA_MODEL})`);

/**
 * Attach AI routes to an Express Router.
 * @param {import('express').Router} r
 */
export function attachAi(r) {
  r.post('/api/ai/grade-soap',        wrap(handleGradeSoap));
  r.post('/api/ai/patient-turn',      wrap(handlePatientTurn));
  r.post('/api/ai/evaluate-roleplay', wrap(handleEvaluateRoleplay));
  r.get( '/api/ai/health',            wrap(handleHealth));
}

function wrap(handler) {
  return async (req, res) => {
    try {
      const result = await handler(req.body || {}, req);
      res.json(result);
    } catch (e) {
      console.error('[ai] handler error:', e?.message || e);
      res.status(500).json({ error: 'AI request failed', detail: String(e?.message || e) });
    }
  };
}

// ─────────────────────────────────────────────────────────────
// Low-level: gọi Ollama
// ─────────────────────────────────────────────────────────────

/**
 * Gọi /generate (single-turn, prompt thuần).
 * @param {Object} opt
 * @param {string} opt.prompt   - Prompt đầy đủ (đã ghép system + user)
 * @param {string} [opt.system] - System prompt (nếu model support)
 * @param {number} [opt.temperature] - Default 0.3 (để output ổn định)
 * @param {boolean} [opt.json]  - Yêu cầu output JSON (Ollama format=json)
 * @param {number}  [opt.maxTokens] - num_predict
 * @returns {Promise<string>}
 */
async function ollamaGenerate({ prompt, system, temperature = 0.3, json = false, maxTokens = 1500 }) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), OLLAMA_TIMEOUT_MS);
  try {
    const body = {
      model: OLLAMA_MODEL,
      prompt,
      stream: false,
      options: { temperature, num_predict: maxTokens },
    };
    if (system) body.system = system;
    if (json) body.format = 'json';

    const res = await fetch(`${OLLAMA_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-ollama-seckey': OLLAMA_SECKEY },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`Ollama HTTP ${res.status}: ${await res.text().catch(() => '')}`);
    const data = await res.json();
    return String(data.response || '').trim();
  } finally {
    clearTimeout(tid);
  }
}

/**
 * Gọi /chat (multi-turn, có history). Ollama hỗ trợ messages giống OpenAI.
 * @param {Object} opt
 * @param {Array<{role:'system'|'user'|'assistant', content:string}>} opt.messages
 * @param {number} [opt.temperature]
 * @param {boolean} [opt.json]
 * @param {number}  [opt.maxTokens]
 */
async function ollamaChat({ messages, temperature = 0.7, json = false, maxTokens = 800 }) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), OLLAMA_TIMEOUT_MS);
  try {
    const body = {
      model: OLLAMA_MODEL,
      messages,
      stream: false,
      options: { temperature, num_predict: maxTokens },
    };
    if (json) body.format = 'json';

    const res = await fetch(`${OLLAMA_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-ollama-seckey': OLLAMA_SECKEY },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`Ollama HTTP ${res.status}: ${await res.text().catch(() => '')}`);
    const data = await res.json();
    return String(data.message?.content || '').trim();
  } finally {
    clearTimeout(tid);
  }
}

// ─────────────────────────────────────────────────────────────
// HEALTH
// ─────────────────────────────────────────────────────────────

async function handleHealth() {
  try {
    const reply = await ollamaGenerate({ prompt: 'Trả lời gọn: OK', maxTokens: 20 });
    return { ok: true, url: OLLAMA_URL, model: OLLAMA_MODEL, sampleReply: reply };
  } catch (e) {
    return { ok: false, url: OLLAMA_URL, error: String(e?.message || e) };
  }
}

// ─────────────────────────────────────────────────────────────
// GRADE SOAP
// ─────────────────────────────────────────────────────────────

const SOAP_SYSTEM = `Bạn là giảng viên Dược lâm sàng Việt Nam giàu kinh nghiệm.
Nhiệm vụ: chấm SOAP note của sinh viên Dược năm 4–5 theo rubric chuẩn của ca lâm sàng được cung cấp.

QUY TẮC:
1. Chấm 4 phần S/O/A/P, mỗi phần điểm 0.0–1.0 (số thực 1 chữ số thập phân).
2. Đánh giá BÁM CHẶT rubric — không cho điểm rộng rãi.
3. Feedback ngắn, cụ thể, có tính xây dựng.
4. Phải nhận diện các DRP (Drug-Related Problems) đã liệt kê trong ca.
5. CHỈ trả JSON, không viết gì thêm bên ngoài JSON.

Format JSON BẮT BUỘC:
{
  "scores": { "subjective": 0.0, "objective": 0.0, "assessment": 0.0, "plan": 0.0 },
  "feedback": {
    "subjective": "...",
    "objective": "...",
    "assessment": "...",
    "plan": "..."
  },
  "missedDRPs": ["..."],
  "strengths": ["..."],
  "overallComment": "1–2 câu tổng kết"
}`;

async function handleGradeSoap({ caseId, soapText, rubric = 'all' }) {
  if (!caseId || !soapText) throw new Error('caseId and soapText are required');

  const { getCase } = await import('../public/js/engine/case-db.js');
  const clinicalCase = getCase(caseId);
  if (!clinicalCase) throw new Error(`Case not found: ${caseId}`);

  const caseBlock = JSON.stringify({
    title: clinicalCase.title,
    chiefComplaint: clinicalCase.chiefComplaint,
    history: clinicalCase.history,
    patient: clinicalCase.patient,
    prescriptions: clinicalCase.prescriptions,
    drps: clinicalCase.drps,
    rubric: clinicalCase.soapRubric,
  }, null, 2);

  const prompt = `<CA LÂM SÀNG>
${caseBlock}
</CA LÂM SÀNG>

<BÀI LÀM SOAP CỦA SINH VIÊN>
${soapText}
</BÀI LÀM SOAP CỦA SINH VIÊN>

Chấm theo rubric. CHỈ trả JSON.`;

  const raw = await ollamaGenerate({
    prompt,
    system: SOAP_SYSTEM,
    temperature: 0.2,
    json: true,
    maxTokens: 1500,
  });
  const parsed = safeParseJson(raw);

  return {
    scores: parsed.scores || { subjective: 0, objective: 0, assessment: 0, plan: 0 },
    feedback: parsed.feedback || {},
    missedDRPs: parsed.missedDRPs || [],
    strengths: parsed.strengths || [],
    overallComment: parsed.overallComment || '',
    html: renderSoapFeedbackHtml(parsed),
    raw: parsed,
  };
}

function renderSoapFeedbackHtml(p) {
  if (!p?.scores) return '<i>Phân tích lỗi.</i>';
  const s = p.scores;
  const fb = p.feedback || {};
  const pct = v => Math.round((v ?? 0) * 100);
  const row = (label, key) => `
    <div class="soap-row">
      <div class="soap-label"><b>${label}</b> — ${pct(s[key])}/100</div>
      <div class="soap-bar"><div style="width:${pct(s[key])}%"></div></div>
      <div class="soap-fb">${escapeHtml(fb[key] || '')}</div>
    </div>`;
  const missed = (p.missedDRPs || []).map(d => `<li>${escapeHtml(d)}</li>`).join('');
  const strengths = (p.strengths || []).map(d => `<li>${escapeHtml(d)}</li>`).join('');
  return `
    <div class="ai-feedback-grid">
      ${row('S — Subjective', 'subjective')}
      ${row('O — Objective', 'objective')}
      ${row('A — Assessment', 'assessment')}
      ${row('P — Plan', 'plan')}
      ${missed ? `<div class="soap-missed"><b>⚠️ DRPs còn bỏ sót:</b><ul>${missed}</ul></div>` : ''}
      ${strengths ? `<div class="soap-strengths"><b>✅ Điểm tốt:</b><ul>${strengths}</ul></div>` : ''}
      ${p.overallComment ? `<div class="soap-overall"><i>${escapeHtml(p.overallComment)}</i></div>` : ''}
    </div>`;
}

// ─────────────────────────────────────────────────────────────
// PATIENT TURN  (multi-turn dialog)
// ─────────────────────────────────────────────────────────────

async function handlePatientTurn({ caseId, persona, history = [], studentMessage }) {
  if (!caseId || !studentMessage) throw new Error('caseId and studentMessage are required');

  const { getCase } = await import('../public/js/engine/case-db.js');
  const clinicalCase = getCase(caseId);
  if (!clinicalCase) throw new Error(`Case not found: ${caseId}`);

  const SYSTEM = `Bạn đang đóng vai BỆNH NHÂN trong tình huống lâm sàng dưới đây.
Sinh viên Dược năm 5 đang phỏng vấn bạn để khai thác thông tin và tư vấn dùng thuốc.

QUY TẮC:
1. Trả lời ĐÚNG vai bệnh nhân — KHÔNG xưng là AI.
2. Nói tự nhiên như người Việt bình dân (không dùng thuật ngữ y khoa nâng cao).
3. Tiết lộ thông tin DẦN, chỉ khi SV hỏi đúng (đừng khai hết một lúc).
4. Hỏi mơ hồ → trả lời mơ hồ. Hỏi cụ thể → trả lời cụ thể.
5. Có thể bộc lộ cảm xúc: lo, mệt, sốt ruột.
6. KHÔNG tự chẩn đoán y khoa hay đọc tên thuốc tiếng Anh đầy đủ.
7. Mỗi lượt: 1–3 câu, không quá dài.

NHÂN VẬT: ${persona || `${clinicalCase.patient.initials}, ${clinicalCase.patient.ageYears} tuổi, ${clinicalCase.patient.sex === 'M' ? 'nam' : 'nữ'}`}

THÔNG TIN BẠN BIẾT (chỉ tiết lộ khi SV hỏi đúng):
- Lý do đến khám: ${clinicalCase.chiefComplaint}
- Tiền sử: ${(clinicalCase.patient.comorbidities || []).join(', ') || '—'}
- Thuốc đang dùng: ${(clinicalCase.patient.currentMeds || []).join(', ') || '—'}
- Bệnh sử chi tiết: ${clinicalCase.history}`;

  const messages = [
    { role: 'system', content: SYSTEM },
    ...history.map(h => ({ role: h.role, content: h.content })),
    { role: 'user', content: studentMessage },
  ];

  const reply = await ollamaChat({ messages, temperature: 0.7, maxTokens: 250 });
  return { reply, hidden: {} };
}

// ─────────────────────────────────────────────────────────────
// EVALUATE ROLEPLAY
// ─────────────────────────────────────────────────────────────

const ROLEPLAY_SYSTEM = `Bạn là giảng viên Dược lâm sàng. Đánh giá cuộc phỏng vấn + tư vấn của sinh viên với bệnh nhân (do AI đóng).
Mỗi tiêu chí cho điểm 0.0–1.0, kèm 1 câu comment ngắn.
CHỈ TRẢ JSON, không viết gì khác:
{
  "criteria": [ { "name": "...", "score": 0.0, "comment": "..." } ],
  "overall": "1–2 câu tổng kết"
}`;

async function handleEvaluateRoleplay({ caseId, transcript = [], rubricCriteria = [] }) {
  if (!caseId) throw new Error('caseId is required');
  const { getCase } = await import('../public/js/engine/case-db.js');
  const clinicalCase = getCase(caseId);
  if (!clinicalCase) throw new Error(`Case not found: ${caseId}`);

  const transcriptText = transcript.map(t => `${t.role === 'user' ? 'SV' : 'BN'}: ${t.content}`).join('\n');
  const rubricText = rubricCriteria.map(c => `- ${c}`).join('\n');

  const prompt = `<CA>
${clinicalCase.title}
</CA>

<TIÊU CHÍ ĐÁNH GIÁ>
${rubricText}
</TIÊU CHÍ ĐÁNH GIÁ>

<TRANSCRIPT>
${transcriptText}
</TRANSCRIPT>

Đánh giá theo các tiêu chí. CHỈ trả JSON.`;

  const raw = await ollamaGenerate({
    prompt, system: ROLEPLAY_SYSTEM, temperature: 0.2, json: true, maxTokens: 1000,
  });
  const parsed = safeParseJson(raw);
  return {
    criteria: parsed.criteria || rubricCriteria.map(c => ({ name: c, score: 0.5, comment: '—' })),
    overall: parsed.overall || '',
    transcript: transcriptText,
  };
}

// ─────────────────────────────────────────────────────────────
// BAN ĐIỀU HÀNH AI — tiếp nhận & phản hồi yêu cầu của SV
// ─────────────────────────────────────────────────────────────

const REQ_TYPE_VN = {
  game:   'thêm trò chơi',
  theory: 'thêm học liệu lý thuyết',
  lab:    'cải thiện phòng thí nghiệm / thực hành',
  skill:  'thêm bài luyện kỹ năng',
  other:  'ý kiến đóng góp',
};

/** Câu trả lời mẫu khi Ollama không kết nối được — vẫn giữ trải nghiệm "AI điều hành". */
function templateNote({ type, title }) {
  const kind = REQ_TYPE_VN[type] || 'đề xuất';
  return `Ban điều hành AI đã tiếp nhận đề xuất "${title}" (${kind}). `
    + `Yêu cầu được đưa vào hàng đợi cải tiến — các đề xuất nhiều lượt ủng hộ sẽ được ưu tiên triển khai trong đợt cập nhật tới.`;
}

/**
 * AI "Hiệu trưởng" xem xét 1 yêu cầu, sinh phản hồi ngắn + trạng thái.
 * Best-effort: nếu Ollama lỗi/timeout → dùng câu trả lời mẫu.
 * @returns {Promise<{ note:string, status:string, source:'ai'|'template' }>}
 */
export async function aiReviewRequest({ domain, type, title, detail }) {
  const fallback = { note: templateNote({ type, title }), status: 'reviewing', source: 'template' };
  const system = `Bạn là HIỆU TRƯỞNG AI của một trường trong vũ trụ giáo dục EduVerse — `
    + `nơi cơ sở giáo dục do AI điều hành, cung cấp học liệu và môi trường học tập, liên tục tự cải tiến theo góp ý của sinh viên. `
    + `Giọng văn: thân thiện, chuyên nghiệp, khích lệ. Tiếng Việt.`;
  const prompt = `Sinh viên gửi yêu cầu cải tiến tới trường "${domain}":
- Loại: ${REQ_TYPE_VN[type] || type}
- Tiêu đề: ${title}
- Chi tiết: ${detail || '(không có)'}

Hãy viết phản hồi NGẮN (1–2 câu, tối đa ~60 từ): xác nhận đã tiếp nhận, nêu hướng xử lý/dự kiến hợp lý. KHÔNG hứa hẹn quá mức, KHÔNG bịa thời hạn cụ thể. Chỉ trả về nội dung phản hồi, không mở đầu thừa.`;
  try {
    const note = await Promise.race([
      ollamaGenerate({ prompt, system, temperature: 0.5, maxTokens: 160 }),
      new Promise((_, rej) => setTimeout(() => rej(new Error('triage timeout')), 12000)),
    ]);
    const clean = String(note || '').trim();
    if (!clean) return fallback;
    return { note: clean.slice(0, 500), status: 'reviewing', source: 'ai' };
  } catch (e) {
    console.warn('[board-ai] triage fallback:', e?.message || e);
    return fallback;
  }
}

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────

function safeParseJson(text) {
  // Khi format=json, Ollama trả về JSON pure. Nhưng phòng trường hợp model
  // thêm ```json``` hay text trước/sau, vẫn parse được.
  const m = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = m ? m[1] : text;
  try { return JSON.parse(raw); }
  catch {
    const i = raw.indexOf('{');
    const j = raw.lastIndexOf('}');
    if (i >= 0 && j > i) {
      try { return JSON.parse(raw.slice(i, j + 1)); } catch {}
    }
    return {};
  }
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, ch => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[ch]));
}
