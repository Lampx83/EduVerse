// ============================================================
// AI usage quota & token log — multi-tenant rate limit (Phase 0 foundation)
// ============================================================
// Hiện tại Tizia dùng Ollama on-prem (qwen2.5:14b) → miễn phí token, nhưng
// vẫn cần infrastructure này để:
//   1. Tracking: school nào dùng nhiều capacity (Ollama GPU/CPU)
//   2. Rate limit: 1 school không nghẽn Ollama cho schools khác
//   3. Audit trail: mọi AI call gắn user_id + school_id
//   4. Sẵn schema cho cloud LLM tương lai (Anthropic/OpenAI cost = $/token)
//
// Phase 1 sẽ:
//   - Thêm bảng school_quotas để admin cấu hình per-trường (thay vì env)
//   - Dashboard hiển thị usage real-time
//   - Alert khi >80% quota
// ============================================================

import { db, getBestParentPlanForChild } from './db.js';
import { effectivePlan, effectivePlanWithFamily, dailyAiQuota } from './contexts/billing/user-plans.js';
import { checkContentSafety, extractPromptText } from './contexts/safety/profanity-vi.js';

// ─────────────── Schema ───────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS ai_token_usage (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    school_id         INTEGER NOT NULL DEFAULT 1,
    user_id           INTEGER,                -- NULL nếu chưa login (caller phải gate)
    provider          TEXT    NOT NULL,       -- 'ollama' | 'anthropic' | 'openai' | 'quota-gate'
    model             TEXT    NOT NULL,       -- 'qwen2.5:14b-instruct-ctx16k' | '-' nếu blocked
    endpoint          TEXT    NOT NULL,       -- 'grade-soap' | 'patient-turn' | ...
    prompt_tokens     INTEGER NOT NULL DEFAULT 0,
    completion_tokens INTEGER NOT NULL DEFAULT 0,
    cost_usd_micros   INTEGER NOT NULL DEFAULT 0,
    duration_ms       INTEGER,
    status            TEXT    NOT NULL,       -- 'ok' | 'error' | 'blocked'
    created_at        INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_ai_usage_school_time ON ai_token_usage(school_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_ai_usage_user_time   ON ai_token_usage(user_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_ai_usage_status      ON ai_token_usage(status, created_at DESC);

  -- Trục 2: log chi tiết prompt text của HS để GV/PH xem được. SV/GV cũng log
  -- nhưng chỉ khi blocked (tiết kiệm storage). prompt_text giới hạn 500 ký tự
  -- để tránh dump bài luận dài. block_reason/block_category lấy từ checkContentSafety.
  CREATE TABLE IF NOT EXISTS ai_prompt_log (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    school_id       INTEGER NOT NULL DEFAULT 1,
    user_id         INTEGER,
    role            TEXT,                       -- 'pupil' | 'student' | 'teacher' | 'guest'
    endpoint        TEXT    NOT NULL,
    prompt_text     TEXT,                       -- max 500 char, đã trim
    blocked         INTEGER NOT NULL DEFAULT 0, -- 0 | 1
    block_reason    TEXT,
    block_category  TEXT,                       -- profanity | self_harm | violence_threat | pii
    created_at      INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_ai_log_school_time ON ai_prompt_log(school_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_ai_log_user_time   ON ai_prompt_log(user_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_ai_log_blocked     ON ai_prompt_log(blocked, created_at DESC);
`);

// ─────────────── Default quotas (env override) ───────────────
// Generous defaults — chỉ chặn abuse rõ ràng. Phase 1 có bảng `school_quotas` per-trường.
// User typical: 10-30 call/giờ. School 1000 user active = 10k-30k call/giờ → cap 100k an toàn.
const QUOTA = {
  perUserPerHour:      Number(process.env.AI_QUOTA_USER_PER_HOUR)      || 200,        // requests
  perUserTokensHour:   Number(process.env.AI_QUOTA_USER_TOKENS_HOUR)   || 100_000,
  perSchoolPerHour:    Number(process.env.AI_QUOTA_SCHOOL_PER_HOUR)    || 100_000,
  perSchoolTokensHour: Number(process.env.AI_QUOTA_SCHOOL_TOKENS_HOUR) || 50_000_000,
};

// Cost table (USD micros per token = $/M tokens × 1) — chỉ cho cloud provider.
// Ollama on-prem = 0. Số dưới đây cập nhật theo bảng giá Anthropic/OpenAI 2026-01.
const COST_TABLE = {
  'ollama:default':                  { prompt: 0,    completion: 0    },
  'anthropic:claude-haiku-4-5':      { prompt: 0.8,  completion: 4    },
  'anthropic:claude-sonnet-4-6':     { prompt: 3,    completion: 15   },
  'anthropic:claude-opus-4-7':       { prompt: 15,   completion: 75   },
  'openai:gpt-4o-mini':              { prompt: 0.15, completion: 0.6  },
  'openai:gpt-4o':                   { prompt: 2.5,  completion: 10   },
};

function calcCostMicros(provider, model, pt, ct) {
  const key = `${provider}:${model}`;
  const tbl = COST_TABLE[key] || COST_TABLE[`${provider}:default`] || { prompt: 0, completion: 0 };
  return Math.round(pt * tbl.prompt + ct * tbl.completion);
}

// ─────────────── Logging ───────────────
const insertUsageStmt = db.prepare(`
  INSERT INTO ai_token_usage (
    school_id, user_id, provider, model, endpoint,
    prompt_tokens, completion_tokens, cost_usd_micros, duration_ms, status, created_at
  ) VALUES (
    @school_id, @user_id, @provider, @model, @endpoint,
    @prompt_tokens, @completion_tokens, @cost_usd_micros, @duration_ms, @status, @created_at
  )
`);

export function logAiUsage({
  school_id, user_id, provider, model, endpoint,
  prompt_tokens = 0, completion_tokens = 0,
  duration_ms = null, status = 'ok',
}) {
  insertUsageStmt.run({
    school_id: Number(school_id) || 1,
    user_id:   user_id ? Number(user_id) : null,
    provider:  String(provider || ''),
    model:     String(model || ''),
    endpoint:  String(endpoint || ''),
    prompt_tokens:     Math.max(0, Math.floor(prompt_tokens)),
    completion_tokens: Math.max(0, Math.floor(completion_tokens)),
    cost_usd_micros:   calcCostMicros(provider, model, prompt_tokens, completion_tokens),
    duration_ms:       duration_ms == null ? null : Math.max(0, Math.floor(duration_ms)),
    status,
    created_at: Date.now(),
  });
}

// ─────────────── Quota check ───────────────
const HOUR_MS = 3600 * 1000;
const DAY_MS = 24 * HOUR_MS;
const userUsageStmt = db.prepare(`
  SELECT COUNT(*) AS req, COALESCE(SUM(prompt_tokens + completion_tokens), 0) AS tokens
  FROM ai_token_usage
  WHERE user_id = ? AND created_at > ? AND status != 'blocked'
`);
const schoolUsageStmt = db.prepare(`
  SELECT COUNT(*) AS req, COALESCE(SUM(prompt_tokens + completion_tokens), 0) AS tokens
  FROM ai_token_usage
  WHERE school_id = ? AND created_at > ? AND status != 'blocked'
`);

// Trục 2: cap quota theo role để bảo vệ HS (không thể spam Ollama vô tận, dù plan cao).
// pupil: cap cứng 15 req/ngày bất kể plan (kỷ luật học → không lạm dụng AI làm hộ).
// student: theo plan nguyên.
// teacher: ×2 plan (GV cần đọc/chấm/duyệt nhiều).
const PUPIL_DAY_CAP = 15;
const TEACHER_MULTIPLIER = 2;
export function dailyAiQuotaForUser(user) {
  const base = dailyAiQuota(user?.plan || 'free');
  const role = user?.role || 'guest';
  if (role === 'pupil') return Math.min(base, PUPIL_DAY_CAP);
  if (role === 'teacher') return base * TEACHER_MULTIPLIER;
  return base;
}

// Per-user quota theo PLAN (window 24h, đếm ai_calls_day). School-level vẫn dùng
// hour window để chống burst nghẽn Ollama cho 1 tenant. Guest (rank 0) → chặn cứng.
// Trục 2: cap theo role thêm bên trên plan — xem dailyAiQuotaForUser.
export function checkAiQuota({ school_id, user_id, user_plan, user_role }) {
  const now = Date.now();
  const userU   = user_id ? userUsageStmt.get(Number(user_id), now - DAY_MS)        : { req: 0, tokens: 0 };
  const schoolU =           schoolUsageStmt.get(Number(school_id) || 1, now - HOUR_MS);

  if (user_id) {
    const dayCap = dailyAiQuotaForUser({ plan: user_plan, role: user_role });
    if (dayCap <= 0) {
      return { allowed: false, reason: 'plan_no_ai', retry_after: 60, upgrade_url: '/pricing.html' };
    }
    if (userU.req >= dayCap) {
      return { allowed: false, reason: `user_day_cap (${dayCap}/ngày, gói ${user_plan})`, retry_after: 3600, upgrade_url: '/pricing.html' };
    }
    if (userU.tokens >= QUOTA.perUserTokensHour * 4) {  // 4× hour cap ≈ day token cap (sanity)
      return { allowed: false, reason: 'user_token_day_cap', retry_after: 3600 };
    }
  }
  if (schoolU.req >= QUOTA.perSchoolPerHour) {
    return { allowed: false, reason: `school_req_cap (${QUOTA.perSchoolPerHour}/giờ)`, retry_after: 3600 };
  }
  if (schoolU.tokens >= QUOTA.perSchoolTokensHour) {
    return { allowed: false, reason: `school_token_cap (${QUOTA.perSchoolTokensHour}/giờ)`, retry_after: 3600 };
  }
  return { allowed: true };
}

// ─────────────── Express middleware ───────────────
// Dùng trước handler AI: chặn 429 nếu vượt quota, log lý do.
// Yêu cầu attachUser middleware đã chạy trước → req.user có id + school_id + plan.
export function aiQuotaGate(endpoint) {
  return (req, res, next) => {
    const user_id   = req.user?.id || null;
    const school_id = req.user?.school_id || 1;
    const user_role = req.user?.role || 'guest';
    // Trục 4: nếu HS → check PH có gói cao hơn không, dùng plan tốt hơn.
    let userPlanEff = req.user ? effectivePlan(req.user) : null;
    if (req.user && user_role === 'pupil') {
      const parent = getBestParentPlanForChild(req.user.id);
      if (parent) {
        userPlanEff = effectivePlanWithFamily(req.user,
          { plan: parent.parent_plan, plan_expires_at: parent.parent_plan_expires_at });
      }
    }
    const user_plan = userPlanEff?.id || 'guest';

    // Trục 2: pupil safety — check content TRƯỚC quota để (a) chặn nội dung độc dù
    // chưa hết quota, (b) ghi log riêng vào ai_prompt_log để GV/PH xem được.
    // SV/GV: chỉ log khi blocked → đỡ bloat DB.
    const promptText = extractPromptText(req.body);
    if (user_role === 'pupil' && promptText) {
      const verdict = checkContentSafety(promptText);
      logPromptForUser({
        school_id, user_id, role: user_role, endpoint,
        prompt_text: promptText,
        blocked: !verdict.safe, block_reason: verdict.reason, block_category: verdict.category,
      });
      if (!verdict.safe) {
        // Cũng ghi vào ai_token_usage để rate-limit dashboard thấy
        logAiUsage({ school_id, user_id, provider: 'safety-gate', model: '-', endpoint, status: 'blocked' });
        return res.status(400).json({
          error: 'content_unsafe',
          reason: verdict.reason,
          category: verdict.category,
          message: verdict.category === 'self_harm'
            ? 'Mình thấy bạn không ổn. Hãy gọi 1800 599920 (miễn phí, 24/7) hoặc nói với người lớn ngay nhé. ❤️'
            : 'Câu hỏi này có nội dung không phù hợp với lớp học. Thầy/cô đã nhận được thông báo.',
        });
      }
    }

    const verdict = checkAiQuota({ school_id, user_id, user_plan, user_role });
    if (!verdict.allowed) {
      logAiUsage({
        school_id, user_id,
        provider: 'quota-gate', model: '-', endpoint,
        status: 'blocked',
      });
      res.set('Retry-After', String(verdict.retry_after || 60));
      return res.status(429).json({
        error: 'AI quota exceeded',
        reason: verdict.reason,
        retry_after_seconds: verdict.retry_after,
        upgrade_url: verdict.upgrade_url || null,
        current_plan: user_plan,
      });
    }
    // Stash context cho recordAiCall sau khi handler xong.
    req._aiContext = { school_id, user_id, endpoint, started_at: Date.now(), role: user_role };
    next();
  };
}

// Gọi sau khi handler hoàn tất để log token thật. Nếu Ollama không trả token count,
// có thể truyền 0 — vẫn ghi request count để rate limit hoạt động.
export function recordAiCall(req, { provider = 'ollama', model = '-', prompt_tokens = 0, completion_tokens = 0, status = 'ok' } = {}) {
  const ctx = req._aiContext;
  if (!ctx) return;  // không qua aiQuotaGate → silent skip
  logAiUsage({
    school_id: ctx.school_id, user_id: ctx.user_id,
    provider, model, endpoint: ctx.endpoint,
    prompt_tokens, completion_tokens,
    duration_ms: Date.now() - ctx.started_at,
    status,
  });
}

// ─────────────── Stats cho dashboard (Phase 1 expose route) ───────────────
const schoolUsageRangeStmt = db.prepare(`
  SELECT
    COUNT(*)                                          AS requests,
    COALESCE(SUM(prompt_tokens + completion_tokens), 0) AS tokens,
    COALESCE(SUM(cost_usd_micros), 0)                 AS cost_micros,
    SUM(CASE WHEN status = 'blocked' THEN 1 ELSE 0 END) AS blocked,
    SUM(CASE WHEN status = 'error'   THEN 1 ELSE 0 END) AS errors
  FROM ai_token_usage
  WHERE school_id = ? AND created_at > ?
`);

export function getSchoolUsage(school_id, sinceMs = 24 * HOUR_MS) {
  return schoolUsageRangeStmt.get(Number(school_id) || 1, Date.now() - sinceMs);
}
export function getQuotaConfig() {
  return { ...QUOTA, pupilDayCap: PUPIL_DAY_CAP, teacherMultiplier: TEACHER_MULTIPLIER };
}

// ─────────────── Prompt log (Trục 2) ───────────────
const insertPromptLogStmt = db.prepare(`
  INSERT INTO ai_prompt_log (school_id, user_id, role, endpoint, prompt_text,
                             blocked, block_reason, block_category, created_at)
  VALUES (@school_id, @user_id, @role, @endpoint, @prompt_text,
          @blocked, @block_reason, @block_category, @created_at)
`);

export function logPromptForUser({ school_id, user_id, role, endpoint, prompt_text,
                                   blocked = false, block_reason = null, block_category = null }) {
  insertPromptLogStmt.run({
    school_id: Number(school_id) || 1,
    user_id: user_id ? Number(user_id) : null,
    role: role ? String(role).slice(0, 20) : null,
    endpoint: String(endpoint || ''),
    prompt_text: String(prompt_text || '').slice(0, 500),
    blocked: blocked ? 1 : 0,
    block_reason: block_reason ? String(block_reason).slice(0, 200) : null,
    block_category: block_category ? String(block_category).slice(0, 30) : null,
    created_at: Date.now(),
  });
}

// Liệt kê prompt log trong 1 trường — dùng cho dashboard GV xem HS hỏi gì.
// Mặc định 50 dòng mới nhất; có thể filter blocked=1 để xem riêng case bị chặn.
const listPromptsBySchoolStmt = db.prepare(`
  SELECT l.id, l.user_id, l.role, l.endpoint, l.prompt_text,
         l.blocked, l.block_reason, l.block_category, l.created_at,
         u.username, u.display_name, u.grade
  FROM ai_prompt_log l LEFT JOIN users u ON u.id = l.user_id
  WHERE l.school_id = @school_id
    AND (@blocked_only = 0 OR l.blocked = 1)
  ORDER BY l.created_at DESC LIMIT @limit
`);
export function listAiPromptsForSchool(school_id, { blockedOnly = false, limit = 50 } = {}) {
  return listPromptsBySchoolStmt.all({
    school_id: Number(school_id) || 1,
    blocked_only: blockedOnly ? 1 : 0,
    limit: Math.min(Math.max(Number(limit) || 50, 1), 500),
  });
}

const listPromptsByUserStmt = db.prepare(`
  SELECT id, endpoint, prompt_text, blocked, block_reason, block_category, created_at
  FROM ai_prompt_log WHERE user_id = ? ORDER BY created_at DESC LIMIT ?
`);
export function listAiPromptsForUser(user_id, limit = 50) {
  return listPromptsByUserStmt.all(Number(user_id), Math.min(Math.max(Number(limit) || 50, 1), 500));
}
