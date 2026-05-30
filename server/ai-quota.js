// ============================================================
// AI usage quota & token log — multi-tenant rate limit (Phase 0 foundation)
// ============================================================
// Hiện tại EduVerse dùng Ollama on-prem (qwen2.5:14b) → miễn phí token, nhưng
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

import { db } from './db.js';

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

export function checkAiQuota({ school_id, user_id }) {
  const since = Date.now() - HOUR_MS;
  const userU   = user_id ? userUsageStmt.get(Number(user_id), since)       : { req: 0, tokens: 0 };
  const schoolU =           schoolUsageStmt.get(Number(school_id) || 1, since);

  if (user_id && userU.req >= QUOTA.perUserPerHour) {
    return { allowed: false, reason: `user_req_cap (${QUOTA.perUserPerHour}/giờ)`, retry_after: 3600 };
  }
  if (user_id && userU.tokens >= QUOTA.perUserTokensHour) {
    return { allowed: false, reason: `user_token_cap (${QUOTA.perUserTokensHour}/giờ)`, retry_after: 3600 };
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
// Yêu cầu attachUser middleware đã chạy trước → req.user có id + school_id.
export function aiQuotaGate(endpoint) {
  return (req, res, next) => {
    const user_id   = req.user?.id || null;
    const school_id = req.user?.school_id || 1;
    const verdict = checkAiQuota({ school_id, user_id });
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
      });
    }
    // Stash context cho recordAiCall sau khi handler xong.
    req._aiContext = { school_id, user_id, endpoint, started_at: Date.now() };
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
  return { ...QUOTA };
}
