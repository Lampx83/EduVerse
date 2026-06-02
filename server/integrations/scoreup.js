// ============================================================
// ScoreUp Public API adapter (Tizia → ScoreUp v1.4.0+)
// ============================================================
// Tizia gọi ScoreUp qua REST. Adapter wrap fetch với:
//   - X-API-Key (env SCOREUP_API_KEY), base URL (env SCOREUP_BASE_URL)
//   - Cache TTL theo URL+query cho mọi GET (Map + TTL, không cần Redis cho giai
//     đoạn đầu — sẽ thay khi scale). Webhook ScoreUp gọi `invalidateCache*` để
//     xoá entry khi câu hỏi đổi → HS luôn thấy bản mới nhất.
//   - Idempotency-Key UUID v4 tự sinh cho POST/PUT → retry an toàn.
//   - Retry exponential khi 429 (đọc header Retry-After).
//
// Spec: https://fit.neu.edu.vn/scoreup/v1/api/public/docs (v1.4.0)
// Memory: reference_scoreup_api.md, project_quiz_code_apis.md
// ============================================================

import { randomUUID } from 'node:crypto';

const BASE_URL = (process.env.SCOREUP_BASE_URL || 'https://fit.neu.edu.vn/scoreup/v1/api/public').replace(/\/$/, '');
const API_KEY  = process.env.SCOREUP_API_KEY || '';
const CACHE_TTL_MS    = Number(process.env.SCOREUP_CACHE_TTL_MS) || 60 * 60 * 1000; // 1h
const CACHE_MAX_SIZE  = Number(process.env.SCOREUP_CACHE_MAX)    || 5000;
const FETCH_TIMEOUT_MS = Number(process.env.SCOREUP_TIMEOUT_MS)  || 15_000;
const MAX_RETRY_429    = 3;

if (!API_KEY) {
  console.warn('[scoreup] SCOREUP_API_KEY not set — adapter sẽ trả 401 cho mọi call có scope.');
}

// ── Cache: Map LRU đơn giản (insertion order = recency) ──
const _cache = new Map(); // key → { value, expires }
function _cacheGet(key) {
  const hit = _cache.get(key);
  if (!hit) return undefined;
  if (hit.expires < Date.now()) { _cache.delete(key); return undefined; }
  // bump recency
  _cache.delete(key); _cache.set(key, hit);
  return hit.value;
}
function _cacheSet(key, value, ttlMs = CACHE_TTL_MS) {
  _cache.set(key, { value, expires: Date.now() + ttlMs });
  while (_cache.size > CACHE_MAX_SIZE) {
    const oldest = _cache.keys().next().value;
    _cache.delete(oldest);
  }
}
/** Xoá entry theo prefix key. Dùng từ webhook receiver khi ScoreUp báo update. */
export function invalidateCacheByPrefix(prefix) {
  let n = 0;
  for (const k of _cache.keys()) {
    if (k.startsWith(prefix)) { _cache.delete(k); n++; }
  }
  return n;
}
export function invalidateAll() { const n = _cache.size; _cache.clear(); return n; }
export function cacheStats() { return { size: _cache.size, max: CACHE_MAX_SIZE, ttlMs: CACHE_TTL_MS }; }

// ── Low-level fetch wrapper ──
async function _request(method, pathQS, { body, headers = {}, retry429 = MAX_RETRY_429 } = {}) {
  const url = `${BASE_URL}${pathQS}`;
  const init = {
    method,
    headers: {
      'X-API-Key': API_KEY,
      Accept: 'application/json',
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
  };
  if (body !== undefined) init.body = typeof body === 'string' ? body : JSON.stringify(body);

  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), FETCH_TIMEOUT_MS);
  init.signal = ctrl.signal;

  let res;
  try {
    res = await fetch(url, init);
  } catch (e) {
    clearTimeout(tid);
    const err = new Error(`scoreup_network_error: ${e.message}`);
    err.cause = e;
    throw err;
  }
  clearTimeout(tid);

  // 429 → respect Retry-After, retry exponential
  if (res.status === 429 && retry429 > 0) {
    const ra = Number(res.headers.get('retry-after')) || 1;
    const waitMs = Math.min(ra * 1000, 30_000);
    await new Promise((r) => setTimeout(r, waitMs));
    return _request(method, pathQS, { body, headers, retry429: retry429 - 1 });
  }

  let json = null;
  try { json = await res.json(); } catch { /* non-JSON body */ }

  if (!res.ok) {
    const err = new Error(`scoreup_${res.status}: ${json?.message || json?.error || res.statusText}`);
    err.status = res.status;
    err.body = json;
    throw err;
  }
  return json;
}

function _qs(obj) {
  const usp = new URLSearchParams();
  for (const [k, v] of Object.entries(obj || {})) {
    if (v === undefined || v === null || v === '') continue;
    if (Array.isArray(v)) v.forEach((x) => usp.append(k, String(x)));
    else usp.append(k, String(v));
  }
  const s = usp.toString();
  return s ? `?${s}` : '';
}

async function _cachedGet(pathQS, ttlMs) {
  const cached = _cacheGet(pathQS);
  if (cached !== undefined) return cached;
  const data = await _request('GET', pathQS);
  _cacheSet(pathQS, data, ttlMs);
  return data;
}

// ============================================================
// PUBLIC API — Read
// ============================================================

export async function health() {
  // Không cache /health, không cần key
  return _request('GET', '/health');
}

export async function listSubjects({ page = 1, limit = 50, faculty } = {}) {
  return _cachedGet(`/subjects${_qs({ page, limit, faculty })}`);
}

export async function listChapters(subjectId) {
  if (!subjectId) throw new Error('subjectId required');
  return _cachedGet(`/subjects/${encodeURIComponent(subjectId)}/chapters`);
}

export async function listQuestions(filter = {}) {
  // filter: subject_id, chapter_id, level, bloom_level, question_type,
  //   grade_level, curriculum, lang, tags, search, page, limit
  return _cachedGet(`/questions${_qs(filter)}`);
}

export async function getRandomQuestions(filter = {}) {
  if (!filter.subject_id && !filter.chapter_id) {
    throw new Error('getRandomQuestions: cần subject_id hoặc chapter_id');
  }
  return _cachedGet(`/questions/random${_qs(filter)}`);
}

export async function getQuestion(id) {
  if (!id) throw new Error('id required');
  return _cachedGet(`/questions/${encodeURIComponent(id)}`);
}

// ============================================================
// PUBLIC API — Write (scope questions:write / subjects:write)
// ============================================================

function _idemKey() { return randomUUID(); }

export async function createSubject(input) {
  // input: { subject_name, subject_code, faculty, external_id? }
  const res = await _request('POST', '/subjects', {
    body: input,
    headers: { 'Idempotency-Key': _idemKey() },
  });
  invalidateCacheByPrefix('/subjects');
  return res;
}

export async function addChapter(subjectId, input) {
  // input: { chapter_id, configured_count? }
  const res = await _request('POST', `/subjects/${encodeURIComponent(subjectId)}/chapters`, {
    body: input,
    headers: { 'Idempotency-Key': _idemKey() },
  });
  invalidateCacheByPrefix(`/subjects/${subjectId}`);
  invalidateCacheByPrefix('/subjects');
  return res;
}

export async function createQuestion(input) {
  const res = await _request('POST', '/questions', {
    body: input,
    headers: { 'Idempotency-Key': _idemKey() },
  });
  invalidateCacheByPrefix('/questions');
  return res;
}

export async function updateQuestion(id, input) {
  if (!id) throw new Error('id required');
  const res = await _request('PUT', `/questions/${encodeURIComponent(id)}`, {
    body: input,
    headers: { 'Idempotency-Key': _idemKey() },
  });
  invalidateCacheByPrefix('/questions');
  return res;
}

export async function deleteQuestion(id) {
  if (!id) throw new Error('id required');
  const res = await _request('DELETE', `/questions/${encodeURIComponent(id)}`);
  invalidateCacheByPrefix('/questions');
  return res;
}

/**
 * Bulk upsert 1..500 câu hỏi.
 * @param {{subject_id?: string, questions: object[], idempotencyKey?: string}} input
 * Trả {count, summary:{created,updated,error}, results:[{index,external_id,scoreup_id,status,message}]}
 */
export async function bulkUpsertQuestions(input) {
  const idemKey = input.idempotencyKey || _idemKey();
  const { idempotencyKey, ...body } = input;
  const res = await _request('POST', '/questions/batch', {
    body,
    headers: { 'Idempotency-Key': idemKey },
  });
  invalidateCacheByPrefix('/questions');
  return res;
}

// ============================================================
// PUBLIC API — Webhooks (scope webhooks:manage)
// ============================================================

export async function listWebhooks() {
  return _request('GET', '/webhooks');
}

export async function registerWebhook({ url, events, secret }) {
  if (!url || !events?.length || !secret || secret.length < 16) {
    throw new Error('registerWebhook: cần url + events[] + secret ≥16 ký tự');
  }
  return _request('POST', '/webhooks', {
    body: { url, events, secret },
    headers: { 'Idempotency-Key': _idemKey() },
  });
}

export async function toggleWebhook(id, enabled) {
  return _request('PATCH', `/webhooks/${encodeURIComponent(id)}`, {
    body: { status: enabled ? 'active' : 'disabled' },
  });
}

export async function deleteWebhook(id) {
  return _request('DELETE', `/webhooks/${encodeURIComponent(id)}`);
}

// ============================================================
// Helpers cho Tizia
// ============================================================

/**
 * Lấy N câu ngẫu nhiên cho 1 tuần học (convention Tizia: chapter_id = "Tuần X").
 * Throw nếu chưa có subject_id mapping → caller xử lý fallback.
 */
export async function getWeeklyQuiz({ subjectId, week, limit = 10, level, bloomLevel }) {
  return getRandomQuestions({
    subject_id: subjectId,
    chapter_id: `Tuần ${week}`,
    limit,
    level,
    bloom_level: bloomLevel,
  });
}

/** Có key chưa? Caller check trước khi gọi để fallback graceful. */
export function isConfigured() { return Boolean(API_KEY); }

export const SCOREUP_BASE_URL = BASE_URL;
