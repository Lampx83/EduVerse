// ============================================================
// Codelab (NEU OJ) API adapter (Tizia → Codelab)
// ============================================================
// Tizia gọi Codelab qua REST với X-API-Key (system principal). Adapter wrap
// fetch với:
//   - X-API-Key (env CODELAB_API_KEY), base URL (env CODELAB_BASE_URL)
//   - externalUserRef = "tizia:user:<id>" để Codelab gắn submission về đúng HS
//     mà KHÔNG cần tạo user thật trên DB Codelab (xem doc anti-goals).
//   - Cache GET ngắn (5 phút) cho list/detail/embed/languages — Codelab có
//     webhook ngược thì sẽ invalidate, hiện chưa nên TTL ngắn.
//   - Retry exponential khi 429 (đọc X-RateLimit-Reset / Retry-After).
//   - KHÔNG retry tự động cho POST /submissions (idempotent yêu cầu key, đã có
//     header Idempotency-Key chuẩn UUID v4 ở caller).
//
// Spec: https://fit.neu.edu.vn/codelab/api-backend/docs
// Memory: reference_codelab_api.md (sẽ tạo sau), project_quiz_code_apis.md
// ============================================================

import { randomUUID } from 'node:crypto';

const BASE_URL = (process.env.CODELAB_BASE_URL || 'https://fit.neu.edu.vn/codelab/api-backend').replace(/\/$/, '');
const API_KEY  = process.env.CODELAB_API_KEY || '';
const CACHE_TTL_MS    = Number(process.env.CODELAB_CACHE_TTL_MS) || 5 * 60 * 1000; // 5 phút
const CACHE_MAX_SIZE  = Number(process.env.CODELAB_CACHE_MAX)    || 2000;
const FETCH_TIMEOUT_MS = Number(process.env.CODELAB_TIMEOUT_MS)  || 20_000;
const MAX_RETRY_429    = 3;

if (!API_KEY) {
  console.warn('[codelab] CODELAB_API_KEY not set — adapter sẽ trả 503 cho mọi call.');
}

// ── Cache: LRU đơn giản (Map insertion order) ──────────────────────
const _cache = new Map();
function _cacheGet(key) {
  const hit = _cache.get(key);
  if (!hit) return undefined;
  if (hit.expires < Date.now()) { _cache.delete(key); return undefined; }
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
/** Webhook receiver gọi cái này khi Codelab báo problem/contest đổi. */
export function invalidateCacheByPrefix(prefix) {
  let n = 0;
  for (const k of _cache.keys()) {
    if (k.startsWith(prefix)) { _cache.delete(k); n++; }
  }
  return n;
}
export function invalidateAll() { const n = _cache.size; _cache.clear(); return n; }
export function cacheStats() { return { size: _cache.size, max: CACHE_MAX_SIZE, ttlMs: CACHE_TTL_MS }; }

// ── Low-level fetch wrapper ────────────────────────────────────────
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
    const err = new Error(`codelab_network_error: ${e.message}`);
    err.cause = e;
    throw err;
  }
  clearTimeout(tid);

  // 429 → respect Retry-After / X-RateLimit-Reset
  if (res.status === 429 && retry429 > 0) {
    const ra = Number(res.headers.get('retry-after'))
      || Number(res.headers.get('x-ratelimit-reset'))
      || 1;
    const waitMs = Math.min(ra * 1000, 30_000);
    await new Promise((r) => setTimeout(r, waitMs));
    return _request(method, pathQS, { body, headers, retry429: retry429 - 1 });
  }

  let json = null;
  try { json = await res.json(); } catch { /* non-JSON body */ }

  if (!res.ok) {
    const err = new Error(`codelab_${res.status}: ${json?.message || json?.error || res.statusText}`);
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
// PROBLEMS — read
// ============================================================

/**
 * Liệt kê bài tập. Filter: contest (slug), tag, difficulty, search, page, limit, sortBy.
 * Cache TTL 5 phút.
 */
export async function listProblems(filter = {}) {
  return _cachedGet(`/problems${_qs(filter)}`);
}

/** Chi tiết 1 bài theo slug. */
export async function getProblem(slug) {
  if (!slug) throw new Error('slug required');
  return _cachedGet(`/problems/${encodeURIComponent(slug)}`);
}

/**
 * Phiên bản nhúng iframe (hideSolution, theme, externalUserRef, signature).
 * Codelab T7 implement: caller có thể truyền externalUserRef để Codelab hiển
 * thị "đang giải dưới danh nghĩa <ref>". Tizia thường để các param này.
 */
export async function getEmbed(slug, opts = {}) {
  if (!slug) throw new Error('slug required');
  return _cachedGet(`/problems/${encodeURIComponent(slug)}/embed${_qs(opts)}`);
}

/**
 * Lấy đáp án mẫu. Với system principal: cần forExternalUser=<ref> VÀ user đã
 * pass bài đó, hoặc bài có isAnswerPublic=true. Codelab trả 403 với code
 * 'USER_HAS_NOT_SOLVED' nếu chưa pass.
 */
export async function getAnswer(slug, { externalUserRef } = {}) {
  if (!slug) throw new Error('slug required');
  return _request('GET', `/problems/${encodeURIComponent(slug)}/answer${_qs({ forExternalUser: externalUserRef })}`);
}

// ============================================================
// LANGUAGES
// ============================================================

/** Danh sách ngôn ngữ Judge0 đang bật. Cache TTL dài (15 phút) — ít đổi. */
export async function listLanguages() {
  return _cachedGet('/submissions/languages', 15 * 60 * 1000);
}

// ============================================================
// CODE-RUNNER — chạy thử, không gắn bài
// ============================================================

/**
 * Chạy code trong sandbox Judge0, KHÔNG gắn problem (sandbox thuần).
 * @param {object} input
 * @param {string} input.source_code           — code thô (utf8)
 * @param {number} input.language_id           — xem listLanguages()
 * @param {string} [input.stdin]
 * @param {string} [input.expected_output]
 * @param {boolean} [input.wait=true]          — true: trả kết quả ngay; false: trả {token} để poll
 * @param {string} input.externalUserRef       — "tizia:user:<id>" (BẮT BUỘC với system principal)
 * @param {string} [input.callback_url]        — override defaultCallbackUrl của API key
 */
export async function runCode(input) {
  const { externalUserRef, ...rest } = input || {};
  if (!externalUserRef) throw new Error('externalUserRef required (format "tizia:user:<id>")');
  const body = {
    base64_encoded: false,
    wait: true,
    ...rest,
    externalUserRef,
  };
  return _request('POST', '/submissions/run-code', {
    body,
    headers: { 'Idempotency-Key': randomUUID() },
  });
}

/** Lấy kết quả run-code async khi gọi với wait=false. */
export async function getRunCodeResult(token) {
  if (!token) throw new Error('token required');
  return _request('GET', `/submissions/run-code/${encodeURIComponent(token)}`);
}

// ============================================================
// SUBMISSIONS — nộp bài chính thức
// ============================================================

/**
 * Nộp bài chính thức cho 1 problem. Codelab DTO POST /submissions yêu cầu:
 *   - problemId (MongoId)        ← Tizia có problemSlug → resolve qua getProblem
 *   - language: { id, name }     ← build từ languages cache
 *   - isMultipleFiles: boolean
 *   - answer: { structure: FileNode, filesDetail: [{id, content}], currentFile }
 *   - inContest, contestId       ← optional, dùng nếu submit trong contest
 * Adapter wrap toàn bộ chỗ này để caller chỉ cần gửi slug + language_id + code.
 *
 * @param {object} input
 * @param {string} input.problemSlug
 * @param {string} [input.contestSlug]   — slug contest (số, vd "325049")
 * @param {number} input.language_id
 * @param {string} input.source_code
 * @param {string} input.externalUserRef — "tizia:user:<id>" (bắt buộc)
 * @param {string} [input.callbackUrl]   — override defaultCallbackUrl
 * @param {string} [input.idempotencyKey]
 */
export async function submit(input) {
  const {
    problemSlug, contestSlug, language_id,
    source_code, externalUserRef, callbackUrl, idempotencyKey,
  } = input || {};
  if (!externalUserRef) throw new Error('externalUserRef required');
  if (!problemSlug) throw new Error('problemSlug required');
  if (!language_id) throw new Error('language_id required');
  if (typeof source_code !== 'string') throw new Error('source_code required');

  // 1) Resolve problemSlug → problemId (Mongo _id). Cache trong adapter.
  const problem = await getProblem(problemSlug);
  const problemId = (problem?.data || problem)?._id;
  if (!problemId) throw new Error(`Cannot resolve problemId for slug "${problemSlug}"`);

  // 2) Resolve language_id → { id, name } (Codelab DTO yêu cầu cả name).
  const langs = await listLanguages();
  const arr = Array.isArray(langs) ? langs : (langs?.items || langs?.data || []);
  const lang = arr.find((l) => Number(l.id) === Number(language_id));
  if (!lang) throw new Error(`language_id ${language_id} không có trong Codelab`);

  // 3) Build answer tree đúng schema Codelab. Cần CẢ 3 field:
  //    - structure: cây file (id/name/type) — phải có children
  //    - files: object map {fileId: codeString} — runtime đọc cái này
  //    - filesDetail: [{id, fileName, content}] — UI client editor cần
  //    - currentFile: id file đang focus
  //  Validation runtime của Codelab có error message rõ ràng nên field nào sai
  //  sẽ thấy ngay trong response 422.
  const answer = {
    structure: {
      id: 'root', name: 'root', type: 'folder',
      children: [{ id: 'solution', name: 'solution', type: 'file' }],
    },
    files: { solution: source_code },
    filesDetail: [{
      id: 'solution',
      fileName: 'solution',
      content: source_code,
      languageId: Number(lang.id),
      languageName: String(lang.name),
    }],
    currentFile: 'solution',
  };

  const body = {
    problemId: String(problemId),
    language: { id: Number(lang.id), name: String(lang.name) },
    isMultipleFiles: false,
    answer,
    isTest: false,
    isCustomInput: false,
    externalUserRef,
  };
  if (contestSlug) {
    // Codelab DTO yêu cầu contestId là Mongo ObjectId (24 hex). Slug số (vd
    // "325049") không hợp lệ → resolve qua mapping Tizia-side.
    const { getContestMongoId } = await import('./codelab-contests.js');
    const mongoId = getContestMongoId(String(contestSlug));
    if (!mongoId) throw new Error(`contestSlug "${contestSlug}" chưa có mapping mongoId (xem codelab-contests.js)`);
    body.inContest = true;
    body.contestId = mongoId;
  }
  if (callbackUrl) body.callbackUrl = callbackUrl;

  return _request('POST', '/submissions', {
    body,
    headers: { 'Idempotency-Key': idempotencyKey || randomUUID() },
  });
}

/** Submission test — chạy thử có gắn problem nhưng KHÔNG tính điểm. */
export async function submitTest(input) {
  const { externalUserRef, ...rest } = input || {};
  if (!externalUserRef) throw new Error('externalUserRef required');
  return _request('POST', '/submissions/test', {
    body: { ...rest, externalUserRef },
    headers: { 'Idempotency-Key': randomUUID() },
  });
}

/** Chi tiết 1 submission theo ID. Codelab cô lập theo apiKeyId → chỉ thấy của Tizia. */
export async function getSubmission(id) {
  if (!id) throw new Error('id required');
  return _request('GET', `/submissions/${encodeURIComponent(id)}`);
}

/** Lịch sử submission cho 1 user (externalUserRef) trong 1 bài. */
export async function listSubmissionsForUser({ externalUserRef, problemSlug, contestSlug, page, limit } = {}) {
  if (!externalUserRef) throw new Error('externalUserRef required');
  return _request('GET', `/submissions${_qs({ externalUserRef, problemSlug, contestSlug, page, limit })}`);
}

/** Submission mới nhất của user cho 1 bài (không gắn contest). */
export async function getLatestSubmission({ externalUserRef, problemSlug }) {
  if (!externalUserRef || !problemSlug) throw new Error('externalUserRef & problemSlug required');
  return _request('GET', `/submissions/latest/problem/${encodeURIComponent(problemSlug)}${_qs({ externalUserRef })}`);
}

// ============================================================
// CONTESTS — read
// ============================================================

export async function listContests({ page, limit, search } = {}) {
  return _cachedGet(`/contests${_qs({ page, limit, search })}`);
}

export async function getContest(slug) {
  if (!slug) throw new Error('slug required');
  return _cachedGet(`/contests/${encodeURIComponent(slug)}`);
}

// ============================================================
// TAGS — read (để Tizia render bộ lọc theo chủ đề)
// ============================================================

export async function listTags() {
  return _cachedGet('/tags', 30 * 60 * 1000); // 30 phút, đổi rất ít
}

// ============================================================
// Helpers cho Tizia
// ============================================================

/**
 * Convention: mọi externalUserRef Tizia gửi sang Codelab đều theo format
 * "tizia:user:<userId>" để Codelab phân biệt với partner khác sau này và để
 * Tizia parse ngược dễ khi nhận webhook.
 */
export function makeExternalUserRef(userId) {
  if (userId == null) throw new Error('userId required');
  return `tizia:user:${userId}`;
}
export function parseExternalUserRef(ref) {
  if (typeof ref !== 'string') return null;
  const m = /^tizia:user:(.+)$/.exec(ref);
  return m ? m[1] : null;
}

/** Có key chưa? Caller check trước khi gọi để fallback graceful. */
export function isConfigured() { return Boolean(API_KEY); }

export const CODELAB_BASE_URL = BASE_URL;
