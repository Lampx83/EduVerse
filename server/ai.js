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
  r.post('/api/ai/tutor-chat',        wrap(handleTutorChat));
  r.post('/api/ai/sim-patient',       wrap(handleSimPatient));
  r.post('/api/ai/sim-grade',         wrap(handleSimGrade));
  r.post('/api/ai/history-chat',      wrap(handleHistoryChat));
  r.post('/api/ai/negotiate',         wrap(handleNegotiate));
  r.post('/api/ai/negotiate-grade',   wrap(handleNegotiateGrade));
  r.post('/api/ai/pdf-explain',       wrap(handlePdfExplain));
  r.post('/api/ai/pdf-quiz',          wrap(handlePdfQuiz));
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
// TUTOR CHAT (GAP 1) — AI tutor đa lĩnh vực, tiếng Việt, multi-turn
// ─────────────────────────────────────────────────────────────

const DOMAIN_SYSTEM = {
  it: `Bạn là gia sư CNTT giàu kinh nghiệm cho sinh viên Việt Nam.
Bạn thông thạo: SQL, lập trình, thuật toán, cấu trúc dữ liệu, web, mật mã CTF.
Khi giải thích: ví dụ trực quan, pseudo-code tiếng Việt trước rồi mới đến cú pháp.
Đề xuất học sinh thử ngay trên SQL Playground / Code Lab / Web Playground / Cipher CTF có sẵn trong EduVerse.`,
  pharmacy: `Bạn là gia sư Dược lâm sàng Việt Nam.
Khi tư vấn dùng thuốc, luôn nêu: liều thường dùng, đường dùng, chống chỉ định, tương tác, tác dụng phụ chính.
Tham chiếu được tới các lab có sẵn trong EduVerse: chuẩn độ, sắc ký TLC, antibiogram, IV infusion, dilution, dispense, calibration curve, PK curve, pediatric dose, GMP factory.
Tránh lời khuyên y khoa cá nhân — nhắc người dùng tham vấn bác sĩ/dược sĩ.`,
  medical: `Bạn là gia sư Y khoa cho sinh viên Việt Nam.
Khi giải thích ca bệnh, dùng cấu trúc SOAP (Subjective/Objective/Assessment/Plan).
Khi nói triệu chứng, luôn cảnh báo dấu hiệu nguy hiểm cần đi khám ngay.
Tham chiếu được tới các module có sẵn: OSCE championship, ER triage, BP measurement, pediatric dose, IV infusion.`,
  school: `Bạn là gia sư phổ thông Việt Nam, dạy theo Chương trình GDPT 2018.
Bám sát kiến thức trong sách Cánh Diều, Kết Nối Tri Thức, Chân Trời Sáng Tạo.
Dùng ví dụ học sinh Việt quen thuộc (ăn phở, đi học bằng xe đạp, đá cầu sân trường).
Khi học sinh sai, hỏi gợi mở để các em tự nhận ra, đừng cho đáp án ngay.`,
  general: `Bạn là gia sư AI thân thiện trong EduVerse — vũ trụ giáo dục Việt Nam.
Giải thích đơn giản, có ví dụ, không dùng thuật ngữ tiếng Anh khi tiếng Việt có sẵn.
Khích lệ tích cực, giọng văn ấm áp như anh/chị lớn.`,
};

async function handleTutorChat({ domain = 'general', grade, context, history = [], message, styleNote }) {
  if (!message || typeof message !== 'string') {
    throw new Error('message is required');
  }
  const sys = DOMAIN_SYSTEM[domain] || DOMAIN_SYSTEM.general;
  const contextLine = context ? `Học sinh đang ở trang/lab: ${context}.` : '';
  const gradeLine = grade ? `Trình độ: lớp ${grade}.` : '';
  const styleLine = styleNote ? `Lưu ý phong cách: ${styleNote}` : '';

  const fullSystem = [sys, contextLine, gradeLine, styleLine].filter(Boolean).join('\n\n')
    + '\n\nLUẬT QUAN TRỌNG: trả lời TIẾNG VIỆT, ngắn gọn (3–6 câu cho câu hỏi thông thường, dài hơn nếu cần giải thuật/code). KHÔNG mở đầu bằng "Tất nhiên rồi!" hay "Tôi sẽ giúp bạn". Vào thẳng nội dung.';

  // Multi-turn — đưa history vào, sau đó message hiện tại
  const messages = [
    { role: 'system', content: fullSystem },
    ...((Array.isArray(history) ? history : []).slice(-12).map(h => ({
      role: h.role === 'assistant' ? 'assistant' : 'user',
      content: String(h.content || '').slice(0, 2000),
    }))),
    { role: 'user', content: message.slice(0, 2000) },
  ];

  let reply = '';
  try {
    reply = await ollamaChat({ messages, temperature: 0.55, maxTokens: 600 });
  } catch (e) {
    console.warn('[ai-tutor] ollama failed, fallback template:', e?.message || e);
    reply = templateTutorReply(domain, message);
  }
  return { reply: reply.trim(), domain, model: OLLAMA_MODEL };
}

function templateTutorReply(domain, message) {
  const label = ({ it: 'CNTT', pharmacy: 'Dược', medical: 'Y khoa', school: 'phổ thông' }[domain]) || 'giáo dục';
  return `Mình tạm thời chưa kết nối được tới mô hình AI. Câu hỏi "${String(message).slice(0, 120)}" thuộc lĩnh vực ${label} — bạn thử lại sau ít phút, hoặc xem trực tiếp các lab tương ứng trong EduVerse để thực hành nhé.`;
}

// ─────────────────────────────────────────────────────────────
// SIM PATIENT (GAP 10) — đối thoại 1 lượt với BN VN, chấm SOAP
// ─────────────────────────────────────────────────────────────

async function handleSimPatient({ caseId, persona, chiefComplaint, history = [], hiddenInfo = {}, message }) {
  if (!message) throw new Error('message required');
  const hiddenStr = Object.entries(hiddenInfo || {})
    .map(([trigger, info]) => `- Khi SV hỏi về "${trigger}": "${info}"`)
    .join('\n');
  const sys = `Bạn đang đóng vai BỆNH NHÂN/NGƯỜI NHÀ trong tình huống lâm sàng Việt Nam.
Sinh viên Y/Dược đang khai thác thông tin và tư vấn.

QUY TẮC TUYỆT ĐỐI:
1. Trả lời ĐÚNG vai bệnh nhân — KHÔNG xưng là AI, KHÔNG nói "với tư cách AI".
2. Nói tự nhiên như người Việt, dùng "em/cô/chú/bác" phù hợp tuổi và bối cảnh.
3. KHÔNG dùng thuật ngữ y khoa nâng cao (đừng nói "creatinin", "HbA1c" trừ khi đã được BS thông báo).
4. Tiết lộ thông tin DẦN, chỉ khi SV hỏi đúng. Hỏi mơ hồ → trả lời mơ hồ.
5. Có cảm xúc: lo lắng, mệt, sốt ruột tuỳ ca.
6. Mỗi lượt: 1-3 câu, tối đa ~50 từ. Không liệt kê hết bệnh sử trong 1 câu.

NHÂN VẬT VÀ TÍNH CÁCH:
${persona || '(chưa rõ — nói giọng VN bình dân)'}

LÝ DO ĐẾN KHÁM: ${chiefComplaint}

THÔNG TIN ẨN (chỉ tiết lộ khi SV hỏi đúng chủ đề):
${hiddenStr || '(không có thông tin ẩn riêng)'}`;

  const messages = [
    { role: 'system', content: sys },
    ...((Array.isArray(history) ? history : []).slice(-12).map(h => ({
      role: h.role === 'assistant' ? 'assistant' : 'user',
      content: String(h.content || '').slice(0, 1500),
    }))),
    { role: 'user', content: message.slice(0, 1500) },
  ];
  let reply = '';
  try {
    reply = await ollamaChat({ messages, temperature: 0.7, maxTokens: 200 });
  } catch (e) {
    reply = `(BN không thể trả lời — lỗi AI: ${e?.message || e})`;
  }
  return { reply: reply.trim() };
}

// ─────────────────────────────────────────────────────────────
// SIM GRADE — chấm transcript theo rubric + DRP + fatalIf
// ─────────────────────────────────────────────────────────────

async function handleSimGrade({ caseId, title, rubric = [], drps = [], bonusIf = [], fatalIf = [], transcript = [] }) {
  // Bước 1: scan transcript để bắt fatal + bonus (deterministic, không cần AI)
  const svText = transcript
    .filter(t => t.role === 'user')
    .map(t => String(t.content || ''))
    .join(' \n ');

  const fatalsTriggered = [];
  for (const f of (fatalIf || [])) {
    try {
      if (new RegExp(f.trigger, 'i').test(svText)) {
        fatalsTriggered.push(f.reason);
      }
    } catch {}
  }
  const bonusHits = [];
  for (const b of (bonusIf || [])) {
    try {
      if (new RegExp(b.trigger, 'i').test(svText)) {
        bonusHits.push(b.text);
      }
    } catch {}
  }

  // Bước 2: gọi AI để chấm rubric + miss DRP
  const rubricText = rubric.map((r, i) => `${i+1}. ${r}`).join('\n');
  const drpText = drps.map(d => `- [${d.type}] ${d.text}`).join('\n');
  const transcriptText = transcript
    .map(t => (t.role === 'user' ? 'SV: ' : 'BN: ') + String(t.content || ''))
    .join('\n');

  const sys = `Bạn là giảng viên Y/Dược lâm sàng VN giàu kinh nghiệm.
Chấm cuộc phỏng vấn của sinh viên với bệnh nhân (do AI đóng).
CHỈ TRẢ JSON, không viết gì khác:
{
  "rubricScores": [ {"criterion": "...", "score": 0.0, "comment": "..."} ],
  "missedDRPs": ["..."],
  "overall": "1-2 câu nhận xét tổng kết",
  "overallScore": 0.0
}
Score 0.0-1.0 cho mỗi criterion. overallScore = trung bình rubricScores nhân hệ số penalty nếu có fatal.`;

  const prompt = `<CA>${title}</CA>

<RUBRIC>
${rubricText}
</RUBRIC>

<DRP CẦN BẮT>
${drpText}
</DRP CẦN BẮT>

<TRANSCRIPT>
${transcriptText}
</TRANSCRIPT>

Chấm. CHỈ JSON.`;

  let parsed = {};
  try {
    const raw = await ollamaGenerate({
      prompt, system: sys, temperature: 0.2, json: true, maxTokens: 1200,
    });
    parsed = safeParseJson(raw);
  } catch (e) {
    console.warn('[sim-grade] AI failed:', e?.message);
  }

  let overallScore = parsed.overallScore;
  if (overallScore == null && Array.isArray(parsed.rubricScores)) {
    const sum = parsed.rubricScores.reduce((s, r) => s + (Number(r.score) || 0), 0);
    overallScore = parsed.rubricScores.length ? sum / parsed.rubricScores.length : 0;
  }
  if (overallScore == null) overallScore = bonusHits.length / Math.max(1, (bonusIf?.length || 1)) * 0.7;
  // Penalty: mỗi fatal trừ 30% (chìm xuống dưới 0.5 = fail)
  if (fatalsTriggered.length) overallScore = Math.max(0, overallScore - fatalsTriggered.length * 0.3);

  return {
    rubricScores: parsed.rubricScores || rubric.map(r => ({ criterion: r, score: 0.5, comment: '—' })),
    missedDRPs: parsed.missedDRPs || [],
    bonusHits,
    fatalsTriggered,
    overall: parsed.overall || (fatalsTriggered.length ? 'Có lỗi nghiêm trọng. Cần luyện thêm.' : 'Phỏng vấn ổn. Tiếp tục thực hành.'),
    overallScore: Number(overallScore.toFixed(2)),
  };
}

// ─────────────────────────────────────────────────────────────
// HISTORY CHAT (GAP 9) — chat với nhân vật lịch sử/khoa học VN
// ─────────────────────────────────────────────────────────────

async function handleHistoryChat({ character, history = [], message }) {
  if (!message || !character) throw new Error('character and message required');

  const sys = `Bạn đang đóng vai ${character.name} (${character.era || ''}) — nhân vật lịch sử/khoa học của Việt Nam.
Học sinh Việt Nam đang trò chuyện với bạn.

VAI TRÒ: ${character.role || ''}
THỜI KỲ: ${character.era || ''}
TÍNH CÁCH & GIỌNG NÓI: ${character.personality || ''}
LĨNH VỰC CHUYÊN MÔN: ${(character.expertise || []).join(', ')}
NHỮNG ĐIỀU BẠN BIẾT (nói khi học sinh hỏi):
${(character.knownFacts || []).map(f => '- ' + f).join('\n')}

QUY TẮC TUYỆT ĐỐI:
1. CHỈ TRẢ LỜI BẰNG TIẾNG VIỆT THUẦN. KHÔNG xen tiếng Trung, tiếng Anh, ký tự Hán, pinyin, hay bất kỳ ngôn ngữ nào khác. Toàn bộ câu trả lời 100% tiếng Việt.
2. Đóng vai ${character.name} — KHÔNG nói "với tư cách AI" hay "tôi là chatbot". Bạn LÀ nhân vật đó.
3. Khi HS hỏi điều bạn chưa biết (vd: việc xảy ra sau thời bạn), nói "Việc này hậu thế kể lại cho ta nghe…" — KHÔNG bịa.
4. Đôi khi kể chuyện riêng tư, nhân văn — đừng chỉ đọc Wikipedia.
5. Mỗi lượt 2-5 câu, tối đa ~80 từ. Nếu HS hỏi nhanh, đáp ngắn.
6. Khi liên quan đến môn học (Lịch sử, Toán, Vật lý, Y học), giải thích như đang dạy HS lớp 9-12 Việt Nam theo GDPT 2018.
7. KHÔNG xin lỗi vì lỗi trước. KHÔNG nói "đây là câu trả lời tiếng Việt". Chỉ trả lời nội dung.

GỢI Ý CÂU MỞ ĐẦU NẾU HỌC SINH LÚNG TÚNG: ${character.suggestedOpener || 'Cứ hỏi đi cháu.'}`;

  const messages = [
    { role: 'system', content: sys },
    ...((Array.isArray(history) ? history : []).slice(-10).map(h => ({
      role: h.role === 'assistant' ? 'assistant' : 'user',
      content: String(h.content || '').slice(0, 1500),
    }))),
    { role: 'user', content: message.slice(0, 1500) },
  ];
  let reply = '';
  try {
    reply = await ollamaChat({ messages, temperature: 0.65, maxTokens: 300 });
  } catch (e) {
    reply = `(${character.name} không thể trả lời lúc này — lỗi AI: ${e?.message || e})`;
  }
  return { reply: cleanVietnameseReply(reply, character.name) };
}

/** Strip non-Vietnamese characters that some LLMs leak (Chinese chars, pinyin, English filler). */
function cleanVietnameseReply(s, charName) {
  let out = String(s || '').trim();
  // Cắt bỏ block chữ Hán (CJK) liên tiếp
  out = out.replace(/[一-鿿㐀-䶿]+/g, ' ');
  // Cắt câu xin lỗi vì lỗi trước (LLM hay xin lỗi rồi sửa)
  out = out.replace(/(?:對不起|不好意思|抱歉|sorry|excuse me|i'?m sorry|let me try again|let me retry|please)[^.!?\n]*[.!?\n]?/gi, ' ');
  // Cắt câu "Đây là câu trả lời bằng tiếng Việt" / "Dưới đây là phản hồi"
  out = out.replace(/(?:đây là câu trả lời[^\n.!?]*|dưới đây là phản hồi[^\n.!?]*|sau đây là [^\n.!?]*)[.!?\n]?/gi, ' ');
  // Chuẩn hoá khoảng trắng
  out = out.replace(/[ \t]+/g, ' ').replace(/\n[ \n]+/g, '\n').trim();
  // Nếu sau khi clean quá rỗng → fallback
  if (out.length < 8) {
    return `Cháu ơi, ta tạm chưa rõ ý cháu. Cháu hỏi lại đi nhé?`;
  }
  return out;
}

// ─────────────────────────────────────────────────────────────
// NEGOTIATION (GAP 15) — game theory simulator
// ─────────────────────────────────────────────────────────────

async function handleNegotiate({ scenario, persona, role, stage, history = [], message }) {
  if (!message || !persona) throw new Error('persona and message required');

  const sys = `Bạn đang đóng vai NPC trong tình huống đàm phán giáo dục.

KỊCH BẢN: ${scenario || ''}
VAI TRÒ NPC CỦA BẠN: ${role || ''}
TÍNH CÁCH NPC: ${persona}
GIAI ĐOẠN ĐÀM PHÁN HIỆN TẠI: ${stage || 'opening'}

NGUYÊN TẮC ĐÀM PHÁN (game theory):
- Phản ứng theo lựa chọn của learner: hợp tác → mở lòng, đối đầu → phòng thủ.
- Cân nhắc trade-off riêng (ngân sách, thời gian, mục tiêu cá nhân).
- KHÔNG đồng ý quá dễ. KHÔNG từ chối thô bạo.
- Khi learner đưa ra điểm thuyết phục, có thể nhượng bộ một phần.
- Mỗi lượt 2-4 câu, có thể đặt câu hỏi ngược.
- Tiếng Việt tự nhiên, đúng văn hoá công sở/lâm sàng VN.

KHI LEARNER ĐI SAI HƯỚNG (vd: hứa hẹn quá đà, kê đơn không phù hợp), KHÔNG nhắc nhở rằng họ sai — cứ phản ứng theo nhân vật. Việc chấm điểm là của giảng viên ở vòng sau.`;

  const messages = [
    { role: 'system', content: sys },
    ...((Array.isArray(history) ? history : []).slice(-10).map(h => ({
      role: h.role === 'assistant' ? 'assistant' : 'user',
      content: String(h.content || '').slice(0, 1500),
    }))),
    { role: 'user', content: message.slice(0, 1500) },
  ];
  let reply = '';
  try {
    reply = await ollamaChat({ messages, temperature: 0.7, maxTokens: 250 });
  } catch (e) {
    reply = `(NPC không thể trả lời — ${e?.message || e})`;
  }
  return { reply: reply.trim() };
}

async function handleNegotiateGrade({ scenario, title, rubric = [], bonusIf = [], fatalIf = [], transcript = [] }) {
  // Reuse pattern handleSimGrade
  const svText = transcript
    .filter(t => t.role === 'user')
    .map(t => String(t.content || ''))
    .join(' \n ');

  const fatalsTriggered = [];
  for (const f of (fatalIf || [])) {
    try {
      if (new RegExp(f.trigger, 'i').test(svText)) fatalsTriggered.push(f.reason);
    } catch {}
  }
  const bonusHits = [];
  for (const b of (bonusIf || [])) {
    try {
      if (new RegExp(b.trigger, 'i').test(svText)) bonusHits.push(b.text);
    } catch {}
  }

  const rubricText = rubric.map((r, i) => `${i+1}. ${r}`).join('\n');
  const transcriptText = transcript
    .map(t => (t.role === 'user' ? 'NGƯỜI HỌC: ' : 'NPC: ') + String(t.content || ''))
    .join('\n');

  const sys = `Bạn là giảng viên kỹ năng mềm VN, chấm cuộc đàm phán của người học với NPC.
CHỈ TRẢ JSON:
{
  "rubricScores": [{"criterion":"...","score":0.0,"comment":"..."}],
  "overall": "1-2 câu nhận xét",
  "overallScore": 0.0,
  "soft_skills": {"empathy":0.0,"clarity":0.0,"persuasion":0.0,"professionalism":0.0}
}`;
  const prompt = `<KỊCH BẢN>${title}</KỊCH BẢN>

<RUBRIC>
${rubricText}
</RUBRIC>

<TRANSCRIPT>
${transcriptText}
</TRANSCRIPT>

Chấm. CHỈ JSON.`;

  let parsed = {};
  try {
    const raw = await ollamaGenerate({ prompt, system: sys, temperature: 0.2, json: true, maxTokens: 1000 });
    parsed = safeParseJson(raw);
  } catch (e) {
    console.warn('[neg-grade] AI failed:', e?.message);
  }
  let overallScore = parsed.overallScore;
  if (overallScore == null && Array.isArray(parsed.rubricScores)) {
    const sum = parsed.rubricScores.reduce((s, r) => s + (Number(r.score) || 0), 0);
    overallScore = parsed.rubricScores.length ? sum / parsed.rubricScores.length : 0.5;
  }
  if (overallScore == null) overallScore = 0.5;
  if (fatalsTriggered.length) overallScore = Math.max(0, overallScore - fatalsTriggered.length * 0.25);

  return {
    rubricScores: parsed.rubricScores || rubric.map(r => ({ criterion: r, score: 0.5, comment: '—' })),
    softSkills: parsed.soft_skills || parsed.softSkills || {},
    bonusHits,
    fatalsTriggered,
    overall: parsed.overall || (fatalsTriggered.length ? 'Có lỗi nghiêm trọng.' : 'Đàm phán ổn.'),
    overallScore: Number(overallScore.toFixed(2)),
  };
}

// ─────────────────────────────────────────────────────────────
// PDF EXPLAIN (GAP 2) — AI tutor giải thích nội dung 1 trang SGK
// ─────────────────────────────────────────────────────────────

const PDF_SUBJECT_HINTS = {
  toan: 'Toán — chú trọng giải thích từng bước, có ví dụ số cụ thể.',
  vat_ly: 'Vật lý — gắn với hiện tượng thực tế, công thức có ý nghĩa từng đại lượng.',
  hoa: 'Hoá học — gắn phương trình với điều kiện thực nghiệm, an toàn lab.',
  sinh: 'Sinh học — chú trọng cơ chế + ví dụ động thực vật Việt Nam.',
  ngu_van: 'Ngữ văn — phân tích biện pháp tu từ, bối cảnh tác giả, liên hệ giá trị nhân văn.',
  lich_su: 'Lịch sử — ngữ cảnh sự kiện, nguyên nhân-diễn biến-ý nghĩa, không học vẹt.',
  dia: 'Địa lí — số liệu cụ thể vùng VN, không bịa.',
  tin_hoc: 'Tin học — kèm ví dụ code chạy được, gắn với SQL Playground / Code Lab của EduVerse.',
  tieng_anh: 'Tiếng Anh — giải thích NGỮ PHÁP bằng tiếng Việt, ví dụ bằng tiếng Anh.',
  gdcd: 'GDCD — bám điều luật cụ thể, ví dụ tình huống học sinh.',
  cong_nghe: 'Công nghệ — gắn với sản phẩm/ứng dụng thực tế.',
};

const PDF_BOOK_SERIES = {
  canh_dieu:        'Bộ sách Cánh Diều — bám sát tinh thần học qua trải nghiệm, hoạt động.',
  ket_noi:          'Bộ sách Kết Nối Tri Thức với cuộc sống — chú trọng liên hệ thực tiễn VN.',
  chan_troi:        'Bộ sách Chân Trời Sáng Tạo — nhấn mạnh sáng tạo, mở rộng.',
};

async function handlePdfExplain({ grade, subject, bookSeries, pageNumber, pageText, mode = 'explain', focusText }) {
  if (!pageText || typeof pageText !== 'string') {
    throw new Error('pageText required');
  }
  const txt = pageText.slice(0, 6000);

  const subjectHint = PDF_SUBJECT_HINTS[subject] || PDF_SUBJECT_HINTS['toan'];
  const bookHint = PDF_BOOK_SERIES[bookSeries] || '';
  const gradeStr = grade ? `lớp ${grade}` : 'phổ thông';

  // 4 mode: explain (giải thích chung) | summary (tóm tắt 5 ý) | example (cho ví dụ) | quiz (4 câu hỏi nhanh)
  const modePrompt = {
    explain: 'GIẢI THÍCH nội dung trang này như đang giảng cho học sinh ngồi trước mặt. 4-7 câu, có ví dụ.',
    summary: 'TÓM TẮT trang này thành 5 ý chính, mỗi ý 1 câu. Dùng dạng gạch đầu dòng.',
    example: 'Cho 2 VÍ DỤ áp dụng kiến thức trang này vào tình huống thực tế Việt Nam.',
    deeper: 'GIẢI THÍCH SÂU phần nội dung học sinh đang focus, có thể đi vào chứng minh/cơ chế.',
    vocab: 'Liệt kê 3-5 THUẬT NGỮ mới trong trang + định nghĩa ngắn gọn.',
  }[mode] || 'Giải thích nội dung trang này.';

  const focusLine = focusText ? `\nHỌC SINH ĐANG TẬP TRUNG VÀO ĐOẠN: "${focusText.slice(0, 400)}"` : '';

  const sys = `Bạn là gia sư AI cho học sinh Việt Nam, dạy theo Chương trình GDPT 2018.
TRÌNH ĐỘ: ${gradeStr}
MÔN: ${subjectHint}
${bookHint ? 'BỘ SÁCH: ' + bookHint : ''}

QUY TẮC:
1. CHỈ trả lời TIẾNG VIỆT thuần, không xen tiếng Anh/Trung trừ khi là thuật ngữ chuyên môn không có từ Việt.
2. Đừng nói "Tất nhiên rồi", "Tôi sẽ giải thích cho bạn" — vào thẳng nội dung.
3. Bám SÁT nội dung trang được cung cấp, KHÔNG bịa thêm sự kiện/công thức không có.
4. Nếu nội dung trang quá ngắn/thiếu ngữ cảnh, nói "Trang này hơi ngắn, em cho thầy xem thêm trang trước/sau nhé".
5. Tùy môn:
   - Toán/Lý/Hoá: dùng ký hiệu rõ ràng, tránh LaTeX phức tạp (HS đọc trên web).
   - Văn/Sử/Địa: kể chuyện, có liên hệ.
   - Tin học: kèm 1 đoạn code ngắn nếu phù hợp.`;

  const prompt = `<TRANG ${pageNumber || '?'}>
${txt}
</TRANG>
${focusLine}

NHIỆM VỤ: ${modePrompt}`;

  let reply = '';
  try {
    reply = await ollamaGenerate({
      prompt, system: sys, temperature: 0.4, maxTokens: 800,
    });
  } catch (e) {
    reply = `Xin lỗi em, AI tutor tạm thời không phản hồi (${e?.message || e}). Em thử lại sau ít phút nhé.`;
  }
  return { reply: reply.trim(), mode, pageNumber };
}

async function handlePdfQuiz({ grade, subject, pageNumber, pageText, numQuestions = 4 }) {
  if (!pageText || typeof pageText !== 'string') throw new Error('pageText required');
  const txt = pageText.slice(0, 6000);
  const n = Math.max(2, Math.min(8, Number(numQuestions) || 4));

  const sys = `Bạn là gia sư AI dạy theo GDPT 2018.
Soạn ${n} câu hỏi trắc nghiệm BÁM SÁT nội dung trang SGK được cung cấp.
CHỈ TRẢ JSON, KHÔNG viết gì khác:
{
  "questions": [
    {
      "stem": "câu hỏi",
      "options": ["A...", "B...", "C...", "D..."],
      "correct": 0,
      "explain": "giải thích đáp án"
    }
  ]
}`;
  const prompt = `<TRANG ${pageNumber || '?'} — Môn ${subject || 'chung'}, lớp ${grade || '?'}>
${txt}
</TRANG>

Soạn ${n} câu hỏi. CHỈ JSON.`;

  let parsed = {};
  try {
    const raw = await ollamaGenerate({
      prompt, system: sys, temperature: 0.3, json: true, maxTokens: 1200,
    });
    parsed = safeParseJson(raw);
  } catch (e) {
    console.warn('[pdf-quiz] failed:', e?.message);
  }
  return {
    questions: Array.isArray(parsed.questions) ? parsed.questions.slice(0, n) : [],
    pageNumber,
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
