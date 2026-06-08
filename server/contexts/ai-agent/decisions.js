// ============================================================
// AI Agent — Decision engine + audit trail cho "Ban điều hành AI"
// ============================================================
// Hiện thực hoá yêu cầu: "sau khi SV góp ý thì AI Agent TỰ QUYẾT ĐỊNH".
// Khác với bản cũ (chỉ viết 1 câu note), engine này:
//   1. Ra QUYẾT ĐỊNH có cấu trúc: approve | reject | defer | priority + lý do.
//   2. Có GUARDRAIL: reject mà confidence thấp → hạ xuống defer (chờ người duyệt)
//      — AI không tự ý từ chối khi chưa chắc.
//   3. Ghi AUDIT TRAIL đầy đủ vào ai_decisions (input, model, raw output, quyết
//      định, ai/rule/human) để truy vết + cho phép người ghi đè sau.
//   4. Áp quyết định vào status của request.
//
// Mọi quyết định tự động ĐỀU log — đây là điều kiện tiên quyết để vận hành an
// toàn một hệ "AI điều hành trường" (audit, compliance, debug, cải tiến prompt).
// ============================================================

import { db, setRequestStatus } from '../../db.js';

// Ollama client riêng cho ai-agent context (không phụ thuộc ai.js của tutor —
// đúng tách bounded-context, và tránh đụng file ai.js đang sửa song song).
// Đọc cùng bộ env như ai.js để nhất quán endpoint/model.
const OLLAMA_URL = (process.env.OLLAMA_URL || 'http://101.96.66.232:8037/ollama/api').replace(/\/+$/, '');
const OLLAMA_SECKEY = process.env.OLLAMA_SECKEY || 'pharmasim';
const OLLAMA_TIMEOUT_MS = Number(process.env.OLLAMA_TIMEOUT_MS) || 60_000;

async function ollamaGenerate({ prompt, system, temperature = 0.3, json = false, maxTokens = 320 }) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), OLLAMA_TIMEOUT_MS);
  try {
    const body = { model: MODEL, prompt, stream: false, options: { temperature, num_predict: maxTokens } };
    if (system) body.system = system;
    if (json) body.format = 'json';
    const res = await fetch(`${OLLAMA_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-ollama-seckey': OLLAMA_SECKEY },
      body: JSON.stringify(body), signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`);
    const data = await res.json();
    return String(data.response || '').trim();
  } finally {
    clearTimeout(tid);
  }
}

// ── Schema (audit trail) ──
db.exec(`
  CREATE TABLE IF NOT EXISTS ai_decisions (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    request_id     INTEGER NOT NULL,
    decided_by     TEXT    NOT NULL,          -- 'ai' | 'rule' | 'human'
    model          TEXT,
    action         TEXT    NOT NULL,          -- approve | reject | defer | priority
    status_applied TEXT,                       -- status request đã set
    reason         TEXT,                        -- lý do nội bộ (cho admin)
    public_note    TEXT,                        -- phản hồi hiển thị cho SV
    priority_score INTEGER,                     -- 0..100
    confidence     REAL,                        -- 0..1
    input_snapshot TEXT,                        -- JSON ảnh chụp đầu vào
    raw_output     TEXT,                        -- raw LLM (audit/debug)
    created_at     INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_ai_decisions_request ON ai_decisions(request_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_ai_decisions_time    ON ai_decisions(created_at DESC);
`);

const insertDecisionStmt = db.prepare(`
  INSERT INTO ai_decisions (
    request_id, decided_by, model, action, status_applied,
    reason, public_note, priority_score, confidence, input_snapshot, raw_output, created_at
  ) VALUES (
    @request_id, @decided_by, @model, @action, @status_applied,
    @reason, @public_note, @priority_score, @confidence, @input_snapshot, @raw_output, @created_at
  )
`);
const decisionsForRequestStmt = db.prepare(`
  SELECT id, decided_by, model, action, status_applied, reason, public_note,
         priority_score, confidence, created_at
  FROM ai_decisions WHERE request_id = ? ORDER BY created_at DESC
`);
const recentDecisionsStmt = db.prepare(`
  SELECT id, request_id, decided_by, model, action, status_applied, reason,
         public_note, priority_score, confidence, created_at
  FROM ai_decisions ORDER BY created_at DESC LIMIT @limit
`);

// ── Config / guardrail ──
const MODEL = process.env.OLLAMA_MODEL || 'qwen2.5:14b-instruct-ctx16k';
// reject cần độ tự tin tối thiểu, nếu không → defer (an toàn, chờ người duyệt).
const REJECT_MIN_CONFIDENCE = Number(process.env.AI_REJECT_MIN_CONFIDENCE) || 0.75;
// Nếu '0' thì AI chỉ ĐỀ XUẤT (status pending), không tự áp — người duyệt thủ công.
const AUTO_APPLY = process.env.AI_DECISION_AUTO_APPLY !== '0';

const VALID_ACTIONS = new Set(['approve', 'reject', 'defer', 'priority']);
// action → status hợp lệ của bảng requests (pending|reviewing|done|rejected).
const ACTION_TO_STATUS = {
  approve:  'reviewing',  // đã duyệt, đưa vào hàng đợi triển khai
  priority: 'reviewing',  // duyệt + đánh dấu ưu tiên cao
  defer:    'pending',    // để sau / cần thêm thông tin / chờ người
  reject:   'rejected',   // từ chối
};

const REQ_TYPE_VN = { game: 'trò chơi', theory: 'lý thuyết', lab: 'thực hành', skill: 'kỹ năng', other: 'đề xuất' };

function extractJson(s) {
  const m = String(s || '').match(/\{[\s\S]*\}/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}
function clamp(n, lo, hi, dflt) {
  const x = Number(n);
  return Number.isFinite(x) ? Math.max(lo, Math.min(hi, x)) : dflt;
}

// Quyết định dự phòng theo luật khi AI lỗi/timeout — KHÔNG bao giờ tự reject.
function ruleDecision({ votes }) {
  const action = votes >= 5 ? 'priority' : 'defer';
  return {
    action,
    reason: `Fallback theo luật (AI không phản hồi): ${votes} lượt vote → ${action}.`,
    public_note: 'Cảm ơn góp ý của bạn! Ban điều hành đã ghi nhận và sẽ xem xét sớm.',
    priority_score: votes >= 5 ? 70 : 40,
    confidence: 0.3,
    decided_by: 'rule',
  };
}

async function aiDecision({ domain, type, title, detail, votes }) {
  const system = `Bạn là HIỆU TRƯỞNG AI điều hành một trường trong vũ trụ giáo dục Tizia. `
    + `Nhiệm vụ: ra QUYẾT ĐỊNH cho góp ý của sinh viên một cách có trách nhiệm. `
    + `Cân nhắc: tính khả thi, lợi ích giáo dục, mức độ phù hợp, số lượt ủng hộ. `
    + `Tiếng Việt. CHỈ trả JSON.`;
  const prompt = `Góp ý gửi tới trường "${domain}":
- Loại: ${REQ_TYPE_VN[type] || type}
- Tiêu đề: ${title}
- Chi tiết: ${detail || '(không có)'}
- Lượt ủng hộ: ${votes}

Ra quyết định. Trả JSON đúng schema:
{
  "action": "approve" | "reject" | "defer" | "priority",
  "reason": "lý do nội bộ ngắn gọn cho ban quản trị (1-2 câu)",
  "public_note": "phản hồi thân thiện cho sinh viên (1-2 câu, ~50 từ, không hứa thời hạn cụ thể)",
  "priority_score": <0-100, mức độ ưu tiên>,
  "confidence": <0.0-1.0, độ tự tin của quyết định>
}
Hướng dẫn: approve=khả thi & hữu ích; priority=rất giá trị/nhiều ủng hộ; defer=cần thêm thông tin hoặc chưa rõ; reject=trùng lặp/không phù hợp/bất khả thi. Chỉ reject khi THỰC SỰ chắc chắn.`;

  const raw = await Promise.race([
    ollamaGenerate({ prompt, system, temperature: 0.3, json: true, maxTokens: 320 }),
    new Promise((_, rej) => setTimeout(() => rej(new Error('decision timeout')), 15000)),
  ]);
  const parsed = extractJson(raw);
  if (!parsed || !VALID_ACTIONS.has(parsed.action)) {
    const e = new Error('AI trả quyết định không hợp lệ');
    e.raw = raw;
    throw e;
  }
  return {
    action: parsed.action,
    reason: String(parsed.reason || '').slice(0, 500),
    public_note: String(parsed.public_note || '').slice(0, 500)
      || 'Cảm ơn góp ý của bạn! Ban điều hành đã ghi nhận.',
    priority_score: Math.round(clamp(parsed.priority_score, 0, 100, 50)),
    confidence: clamp(parsed.confidence, 0, 1, 0.5),
    decided_by: 'ai',
    raw_output: String(raw || '').slice(0, 2000),
  };
}

/**
 * Ban điều hành AI xem xét + TỰ QUYẾT ĐỊNH 1 góp ý, ghi audit, áp vào status.
 * @returns {Promise<{action,status,reason,public_note,priority_score,confidence,decided_by}>}
 */
export async function reviewAndDecideRequest({ requestId, domain, type, title, detail, votes = 1 }) {
  let d;
  try {
    d = await aiDecision({ domain, type, title, detail, votes });
  } catch (e) {
    console.warn('[ai-agent] decision fallback:', e?.message || e);
    d = { ...ruleDecision({ votes }), raw_output: e?.raw ? String(e.raw).slice(0, 2000) : null };
  }

  // GUARDRAIL: reject mà chưa đủ tự tin → hạ xuống defer (cần người duyệt).
  if (d.action === 'reject' && d.confidence < REJECT_MIN_CONFIDENCE) {
    d.reason = `[guardrail] reject confidence ${d.confidence.toFixed(2)} < ${REJECT_MIN_CONFIDENCE} → defer chờ người. ` + d.reason;
    d.action = 'defer';
  }

  const status = ACTION_TO_STATUS[d.action] || 'pending';
  const statusApplied = AUTO_APPLY ? status : 'pending';
  if (AUTO_APPLY) {
    setRequestStatus(requestId, status, d.public_note);
  }

  insertDecisionStmt.run({
    request_id: requestId,
    decided_by: d.decided_by, model: d.decided_by === 'ai' ? MODEL : null,
    action: d.action, status_applied: statusApplied,
    reason: d.reason, public_note: d.public_note,
    priority_score: d.priority_score, confidence: d.confidence,
    input_snapshot: JSON.stringify({ domain, type, title, detail, votes }),
    raw_output: d.raw_output || null,
    created_at: Date.now(),
  });

  return { ...d, status: statusApplied, autoApplied: AUTO_APPLY };
}

export function getDecisionsForRequest(requestId) {
  return decisionsForRequestStmt.all(Number(requestId));
}
export function getRecentDecisions(limit = 50) {
  return recentDecisionsStmt.all({ limit });
}
