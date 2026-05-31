// Tizia DB layer — Postgres (port từ better-sqlite3 cũ).
//
// API: mọi hàm export đều ASYNC, tên giữ y như bản SQLite để Phase 2 caller chỉ
// việc thêm `await`. SQL viết kiểu named-param (@foo); pg.js convert sang $1.$2.
//
// Schema: server/db/schema.sql (idempotent CREATE IF NOT EXISTS). File này
// auto-apply schema khi import lần đầu — local dev không phải chạy migrate tay.
//
// Tenant: school_id đóng vai tenant id. school 1 = 'tizia-default' (legacy).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pool, query, one, many, exec, tx, bindNamed } from './db/pg.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Schema bootstrap ──
// Đọc schema.sql và apply ngay khi module load. Idempotent → re-run an toàn.
// Block toàn bộ server start cho tới khi xong, đảm bảo bảng có trước request đầu.
const SCHEMA_PATH = path.resolve(__dirname, 'db', 'schema.sql');
let _schemaReady = null;
export function ensureSchema() {
  if (_schemaReady) return _schemaReady;
  const sql = fs.readFileSync(SCHEMA_PATH, 'utf8');
  _schemaReady = pool.query(sql).then(() => {
    console.log('[db] Postgres schema ensured');
  }).catch(err => {
    _schemaReady = null;
    console.error('[db] schema apply failed', err);
    throw err;
  });
  return _schemaReady;
}
// Fire-and-forget khi import — server/index.js có thể `await ensureSchema()` nếu cần.
ensureSchema().catch(() => {});

// Re-export pool + helpers cho admin/index.js (raw query khi cần).
export { pool, query, one, many, exec, tx };
// Backward-compat shim: `db` cũ là instance better-sqlite3. Code mới nên dùng
// query/one/many trực tiếp. Các caller cũ gọi `db.prepare(sql).get(args)` sẽ phải
// migrate sang `await one(sql, params)` ở Phase 2.
export const db = { query, one, many, exec, tx, pool };

// ── attempts ──
export async function insertAttempt(row) {
  const r = await one(`
    INSERT INTO attempts (school_id, version, player_name, score, correct, total, duration_ms, details, created_at, class_code, level_n)
    VALUES (@school_id, @version, @player_name, @score, @correct, @total, @duration_ms, @details, @created_at, @class_code, @level_n)
    RETURNING id, created_at
  `, {
    school_id:   row.school_id ?? 1,
    version:     row.version,
    player_name: row.player_name,
    score:       row.score,
    correct:     row.correct,
    total:       row.total,
    duration_ms: row.duration_ms ?? null,
    // details: stringify để pg gửi đúng JSONB (array JS sẽ bị nhầm thành PG array nếu để nguyên).
    details:     row.details == null ? null : (typeof row.details === 'string' ? row.details : JSON.stringify(row.details)),
    created_at:  row.created_at,
    class_code:  row.class_code ?? null,
    level_n:     row.level_n ?? null,
  });
  return { id: r.id, createdAt: r.created_at };
}

export function getLeaderboard(version, limit = 10, schoolId = 1) {
  return many(`
    SELECT id, player_name, score, correct, total, duration_ms, created_at
    FROM attempts WHERE version = @version AND school_id = @school_id
    ORDER BY score DESC, created_at DESC LIMIT @limit
  `, { version, limit, school_id: schoolId });
}

export async function getStats(version, schoolId = 1) {
  const row = await one(`
    SELECT
      COUNT(*)::int                                                 AS total_attempts,
      ROUND(AVG(score)::numeric, 1)                                 AS avg_score,
      COALESCE(MAX(score), 0)                                       AS best_score,
      SUM(CASE WHEN correct = total AND total > 0 THEN 1 ELSE 0 END)::int AS perfect_count
    FROM attempts WHERE version = @version AND school_id = @school_id
  `, { version, school_id: schoolId });
  return row || { total_attempts: 0, avg_score: 0, best_score: 0, perfect_count: 0 };
}

export function getRecent(limit = 20, schoolId = 1) {
  return many(`
    SELECT id, version, player_name, score, correct, total, created_at
    FROM attempts WHERE school_id = @school_id
    ORDER BY created_at DESC LIMIT @limit
  `, { limit, school_id: schoolId });
}

export function getAllAttempts() {
  return many(`
    SELECT id, version, player_name, score, correct, total, duration_ms, details, created_at
    FROM attempts ORDER BY created_at DESC
  `);
}

export function getHistogram(version, schoolId = 1) {
  return many(`
    SELECT (score / 10) * 10 AS bucket, COUNT(*)::int AS n
    FROM attempts WHERE version = @version AND school_id = @school_id
    GROUP BY bucket ORDER BY bucket
  `, { version, school_id: schoolId });
}

// --- Classes ---
export async function createClass({ code, name, teacher_name, school_id = 1 }) {
  const r = await one(`
    INSERT INTO classes (school_id, code, name, teacher_name, created_at)
    VALUES (@school_id, @code, @name, @teacher_name, @created_at)
    RETURNING id, code
  `, { school_id, code, name, teacher_name, created_at: Date.now() });
  return { id: r.id, code: r.code };
}

export function getClassByCode(code) {
  return one(`SELECT id, code, name, teacher_name, created_at FROM classes WHERE code = @code`, { code });
}

export function listClasses(schoolId = 1) {
  return many(`
    SELECT c.id, c.code, c.name, c.teacher_name, c.created_at,
      (SELECT COUNT(*)::int                FROM attempts a WHERE a.class_code = c.code) AS attempt_count,
      (SELECT COUNT(DISTINCT player_name)::int FROM attempts a WHERE a.class_code = c.code) AS student_count
    FROM classes c WHERE c.school_id = @school_id ORDER BY c.created_at DESC
  `, { school_id: schoolId });
}

export function getClassMembers(code) {
  return many(`
    SELECT player_name,
      COUNT(*)::int AS attempts,
      MAX(score) AS best_score,
      ROUND(AVG(score)::numeric, 1) AS avg_score,
      SUM(CASE WHEN correct = total AND total > 0 THEN 1 ELSE 0 END)::int AS perfect_count,
      MAX(created_at) AS last_seen
    FROM attempts WHERE class_code = @code GROUP BY player_name
    ORDER BY best_score DESC, attempts DESC
  `, { code });
}

export function getClassAttempts(code, limit = 100) {
  return many(`
    SELECT id, version, player_name, score, correct, total, duration_ms, level_n, created_at
    FROM attempts WHERE class_code = @code ORDER BY created_at DESC LIMIT @limit
  `, { code, limit });
}

export function getPlayerAttempts(player, limit = 50) {
  return many(`
    SELECT id, version, player_name, score, correct, total, duration_ms, level_n, details, created_at
    FROM attempts WHERE player_name = @player ORDER BY created_at DESC LIMIT @limit
  `, { player, limit });
}

// --- Achievements ---
export function getAchievements(player) {
  return many(`
    SELECT badge_id, unlocked_at FROM achievements
    WHERE player_name = @player ORDER BY unlocked_at DESC
  `, { player });
}
export function getAllRecentAchievements() {
  return many(`
    SELECT player_name, badge_id, unlocked_at FROM achievements
    ORDER BY unlocked_at DESC LIMIT 50
  `);
}
export async function unlockAchievement(player, badge) {
  const r = await exec(`
    INSERT INTO achievements (player_name, badge_id, unlocked_at)
    VALUES (@player, @badge, @t)
    ON CONFLICT (player_name, badge_id) DO NOTHING
  `, { player, badge, t: Date.now() });
  return r.rowCount > 0;
}

// --- Requests (Ban điều hành AI inbox) ---
const VALID_REQ_TYPES = new Set(['game', 'theory', 'lab', 'skill', 'other']);
const VALID_REQ_STATUS = new Set(['pending', 'reviewing', 'done', 'rejected']);

export async function createRequest({ domain, type, title, detail, student, school_id = 1 }) {
  const t = Date.now();
  const safeType = VALID_REQ_TYPES.has(type) ? type : 'other';
  const r = await one(`
    INSERT INTO requests (school_id, domain, type, title, detail, student, status, votes, created_at, updated_at)
    VALUES (@school_id, @domain, @type, @title, @detail, @student, 'pending', 1, @t, @t)
    RETURNING id, created_at
  `, {
    school_id,
    domain:  String(domain || '').slice(0, 40),
    type:    safeType,
    title:   String(title || '').slice(0, 200),
    detail:  detail ? String(detail).slice(0, 10000) : null,
    student: String(student || 'Ẩn danh').slice(0, 60),
    t,
  });
  return { id: r.id, createdAt: r.created_at };
}

export function listRequests(domain, limit = 50, schoolId = 1) {
  return many(`
    SELECT id, domain, type, title, detail, student, status, votes, admin_note, created_at, updated_at
    FROM requests WHERE domain = @domain AND school_id = @school_id
    ORDER BY (status = 'done') ASC, votes DESC, created_at DESC
    LIMIT @limit
  `, { domain: String(domain || ''), limit, school_id: schoolId });
}

export async function voteRequest(id) {
  const r = await exec(`UPDATE requests SET votes = votes + 1, updated_at = @t WHERE id = @id`,
    { id: Number(id), t: Date.now() });
  return r.rowCount > 0;
}

export async function setRequestStatus(id, status, note) {
  if (!VALID_REQ_STATUS.has(status)) return false;
  const r = await exec(`UPDATE requests SET status = @status, admin_note = @note, updated_at = @t WHERE id = @id`, {
    id: Number(id), status,
    note: note ? String(note).slice(0, 500) : null,
    t: Date.now(),
  });
  return r.rowCount > 0;
}

export async function getRequestStats(domain, schoolId = 1) {
  const rows = await many(`
    SELECT status, COUNT(*)::int AS n FROM requests
    WHERE domain = @domain AND school_id = @school_id GROUP BY status
  `, { domain: String(domain || ''), school_id: schoolId });
  const out = { pending: 0, reviewing: 0, done: 0, rejected: 0 };
  for (const r of rows) out[r.status] = r.n;
  return out;
}

// --- Notifications ---
const VALID_NOTIF_KINDS = new Set(['reply', 'system']);

export async function createNotification({ user_display_name, request_id = null, kind = 'reply', title, body = null, url = null, school_id = 1 }) {
  const u = String(user_display_name || '').trim();
  if (!u || u === 'Ẩn danh') return null;
  if (!VALID_NOTIF_KINDS.has(kind)) kind = 'reply';
  const r = await one(`
    INSERT INTO notifications (school_id, user_display_name, request_id, kind, title, body, url, created_at)
    VALUES (@school_id, @user_display_name, @request_id, @kind, @title, @body, @url, @created_at)
    RETURNING id
  `, {
    school_id, user_display_name: u.slice(0, 60),
    request_id: request_id ? Number(request_id) : null,
    kind,
    title: String(title || '').slice(0, 200),
    body:  body ? String(body).slice(0, 1000) : null,
    url:   url ? String(url).slice(0, 500) : null,
    created_at: Date.now(),
  });
  return { id: r.id };
}

export function listNotifications(user_display_name, schoolId = 1, limit = 30) {
  const u = String(user_display_name || '').trim();
  if (!u) return Promise.resolve([]);
  return many(`
    SELECT id, request_id, kind, title, body, url, read_at, created_at
    FROM notifications
    WHERE user_display_name = @user AND school_id = @school_id
    ORDER BY (read_at IS NOT NULL) ASC, created_at DESC
    LIMIT @limit
  `, { user: u, school_id: schoolId, limit });
}

export async function countUnreadNotifications(user_display_name, schoolId = 1) {
  const u = String(user_display_name || '').trim();
  if (!u) return 0;
  const r = await one(`
    SELECT COUNT(*)::int AS n FROM notifications
    WHERE user_display_name = @user AND school_id = @school_id AND read_at IS NULL
  `, { user: u, school_id: schoolId });
  return r?.n || 0;
}

export async function markNotificationRead(id, user_display_name) {
  const u = String(user_display_name || '').trim();
  if (!u) return false;
  const r = await exec(`
    UPDATE notifications SET read_at = @t
    WHERE id = @id AND user_display_name = @user AND read_at IS NULL
  `, { id: Number(id), user: u, t: Date.now() });
  return r.rowCount > 0;
}

export async function markAllNotificationsRead(user_display_name, schoolId = 1) {
  const u = String(user_display_name || '').trim();
  if (!u) return 0;
  const r = await exec(`
    UPDATE notifications SET read_at = @t
    WHERE user_display_name = @user AND school_id = @school_id AND read_at IS NULL
  `, { user: u, school_id: schoolId, t: Date.now() });
  return r.rowCount;
}

// --- AI lesson content ---
export async function saveAiQuestions({ week_id, subject, topic, student, questions = [], school_id = 1 }) {
  if (!week_id || !Array.isArray(questions) || !questions.length) return { saved: 0 };
  const t = Date.now();
  let saved = 0;
  await tx(async (c) => {
    for (const q of questions) {
      const stem = String(q.stem || '').trim();
      if (!stem) continue;
      const exists = await c.one(
        `SELECT 1 AS x FROM ai_lesson_content WHERE week_id = @week_id AND kind = 'question' AND stem = @stem LIMIT 1`,
        { week_id, stem }
      );
      if (exists) continue;
      await c.exec(`
        INSERT INTO ai_lesson_content (school_id, week_id, subject, topic, kind, stem, payload, student, created_at)
        VALUES (@school_id, @week_id, @subject, @topic, 'question', @stem, @payload, @student, @created_at)
      `, {
        school_id, week_id,
        subject: subject ? String(subject).slice(0, 60) : null,
        topic:   topic ? String(topic).slice(0, 160) : null,
        stem:    stem.slice(0, 500),
        payload: JSON.stringify({ choices: q.choices, answer: q.answer, explanation: q.explanation || '' }),
        student: student ? String(student).slice(0, 60) : null,
        created_at: t,
      });
      saved++;
    }
  });
  return { saved };
}

export async function saveAiQa({ week_id, subject, topic, student, question, answer, school_id = 1 }) {
  if (!week_id || !question || !answer) return { saved: 0 };
  const stem = String(question).trim().slice(0, 500);
  const exists = await one(
    `SELECT 1 AS x FROM ai_lesson_content WHERE week_id = @week_id AND kind = 'qa' AND stem = @stem LIMIT 1`,
    { week_id, stem }
  );
  if (exists) return { saved: 0 };
  await exec(`
    INSERT INTO ai_lesson_content (school_id, week_id, subject, topic, kind, stem, payload, student, created_at)
    VALUES (@school_id, @week_id, @subject, @topic, 'qa', @stem, @payload, @student, @created_at)
  `, {
    school_id, week_id,
    subject: subject ? String(subject).slice(0, 60) : null,
    topic:   topic ? String(topic).slice(0, 160) : null,
    stem,
    payload: JSON.stringify({ answer: String(answer).slice(0, 2000) }),
    student: student ? String(student).slice(0, 60) : null,
    created_at: Date.now(),
  });
  return { saved: 1 };
}

export async function getAiQuestions(week_id, limit = 50) {
  const rows = await many(`
    SELECT stem, payload, created_at FROM ai_lesson_content
    WHERE week_id = @week_id AND kind = 'question' AND flagged = 0
    ORDER BY created_at DESC LIMIT @limit
  `, { week_id: String(week_id), limit });
  // payload đã là object (JSONB) → spread thẳng.
  return rows.map(r => ({ stem: r.stem, ...(r.payload || {}) }));
}

export async function getAiQa(week_id, limit = 50) {
  const rows = await many(`
    SELECT stem, payload, created_at FROM ai_lesson_content
    WHERE week_id = @week_id AND kind = 'qa' AND flagged = 0
    ORDER BY created_at DESC LIMIT @limit
  `, { week_id: String(week_id), limit });
  return rows.map(r => ({ question: r.stem, answer: r.payload?.answer, created_at: r.created_at }));
}

export async function getAiContentCounts(week_id) {
  const rows = await many(`
    SELECT kind, COUNT(*)::int AS n FROM ai_lesson_content
    WHERE week_id = @week_id AND flagged = 0 GROUP BY kind
  `, { week_id: String(week_id) });
  const out = { question: 0, qa: 0 };
  for (const r of rows) out[r.kind] = r.n;
  return out;
}

// Confusion matrix — parse details JSONB của attempts.
export async function getConfusion(version) {
  const rows = await many(
    `SELECT details FROM attempts WHERE version = @version AND details IS NOT NULL`,
    { version }
  );
  const matrix = {};
  const categories = new Set();
  for (const r of rows) {
    // details là JSONB → đã là object. Một số legacy có thể là string → parse.
    let d = r.details;
    if (typeof d === 'string') { try { d = JSON.parse(d); } catch { continue; } }
    if (!d) continue;
    const items = d.medicines || d.breakdown || [];
    for (const it of items) {
      const actual = it.category;
      const placed = it.placedIn;
      if (!actual) continue;
      categories.add(actual);
      if (placed) categories.add(placed);
      matrix[actual] ??= {};
      const key = placed || '__unplaced__';
      matrix[actual][key] = (matrix[actual][key] || 0) + 1;
    }
  }
  return { categories: [...categories].sort(), matrix };
}

// --- Users & sessions ---
const ALLOWED_ROLES = new Set(['pupil', 'student', 'teacher']);

export async function createUser({ username, display_name, password_hash, role, age, school_id = 1,
                                    grade = null, major = null, cohort = null, school_name = null }) {
  const r = await one(`
    INSERT INTO users (username, display_name, password_hash, role, age, school_id, created_at,
                       grade, major, cohort, school_name)
    VALUES (@username, @display_name, @password_hash, @role, @age, @school_id, @created_at,
            @grade, @major, @cohort, @school_name)
    RETURNING id
  `, {
    username, display_name, password_hash,
    role: ALLOWED_ROLES.has(role) ? role : 'student',
    age:  Number.isFinite(age) ? Math.floor(age) : null,
    school_id:   Number(school_id) || 1,
    created_at:  Date.now(),
    grade:       Number.isFinite(grade) ? Math.floor(grade) : null,
    major:       major ? String(major).slice(0, 40) : null,
    cohort:      cohort ? String(cohort).slice(0, 20) : null,
    school_name: school_name ? String(school_name).slice(0, 120) : null,
  });
  return { id: r.id };
}

export function getUserByUsername(username) {
  return one(`
    SELECT id, username, display_name, password_hash, role, age, email, avatar_url, created_at, last_login,
           grade, major, cohort, school_name
    FROM users WHERE username = @username
  `, { username: String(username || '').trim() });
}

export function getUserById(id) {
  return one(`
    SELECT id, username, display_name, role, age, email, avatar_url, school_id, created_at, last_login,
           plan, plan_expires_at, billing_cycle,
           grade, major, cohort, school_name
    FROM users WHERE id = @id
  `, { id: Number(id) });
}

export function touchLogin(id) {
  return exec(`UPDATE users SET last_login = @t WHERE id = @id`, { id: Number(id), t: Date.now() });
}

export function updateDisplayName(id, name) {
  return exec(`UPDATE users SET display_name = @name WHERE id = @id`,
    { id: Number(id), name: String(name).slice(0, 60) });
}

export function setUserPlan(id, { plan, expires_at = null, cycle = null }) {
  return exec(`
    UPDATE users SET plan = @plan, plan_expires_at = @expires, billing_cycle = @cycle WHERE id = @id
  `, {
    id: Number(id),
    plan: String(plan || 'free'),
    expires: expires_at ? Number(expires_at) : null,
    cycle:   cycle ? String(cycle) : null,
  });
}

export async function createSession({ token, user_id, ttlMs }) {
  const now = Date.now();
  const expires_at = now + ttlMs;
  await exec(`
    INSERT INTO sessions (token, user_id, created_at, expires_at)
    VALUES (@token, @user_id, @created_at, @expires_at)
  `, { token, user_id, created_at: now, expires_at });
  return { token, expires_at };
}

export function getSession(token) {
  if (!token) return null;
  return one(`
    SELECT s.token, s.user_id, s.expires_at,
           u.username, u.display_name, u.role, u.school_id,
           u.plan, u.plan_expires_at
    FROM sessions s JOIN users u ON u.id = s.user_id
    WHERE s.token = @token AND s.expires_at > @now
  `, { token: String(token), now: Date.now() });
}

export function deleteSession(token) {
  return exec(`DELETE FROM sessions WHERE token = @token`, { token: String(token || '') });
}

export function purgeExpiredSessions() {
  return exec(`DELETE FROM sessions WHERE expires_at <= @now`, { now: Date.now() });
}

// Quét rác phiên hết hạn mỗi giờ.
setInterval(() => { purgeExpiredSessions().catch(() => {}); }, 60 * 60 * 1000).unref?.();

// --- OAuth identities ---
export function findUserByOAuth(provider, subject) {
  return one(`
    SELECT u.id, u.username, u.display_name, u.role, u.email, u.avatar_url,
           oi.id AS oauth_id, oi.provider, oi.subject
    FROM oauth_identities oi JOIN users u ON u.id = oi.user_id
    WHERE oi.provider = @provider AND oi.subject = @subject
  `, { provider: String(provider), subject: String(subject) });
}

export function linkOAuth({ user_id, provider, subject, email }) {
  return exec(`
    INSERT INTO oauth_identities (user_id, provider, subject, email, created_at)
    VALUES (@user_id, @provider, @subject, @email, @created_at)
  `, {
    user_id, provider, subject,
    email: email ? String(email).slice(0, 120) : null,
    created_at: Date.now(),
  });
}

export function updateUserProfile(id, { display_name, email, avatar_url } = {}) {
  return exec(`
    UPDATE users SET
      display_name = COALESCE(@display_name, display_name),
      email        = COALESCE(@email, email),
      avatar_url   = COALESCE(@avatar_url, avatar_url)
    WHERE id = @id
  `, { id, display_name: display_name || null, email: email || null, avatar_url: avatar_url || null });
}

export function updateUserEditable(id, { display_name, age, email,
                                          grade = null, major = null, cohort = null, school_name = null }) {
  return exec(`
    UPDATE users SET
      display_name = @display_name, age = @age, email = @email,
      grade = @grade, major = @major, cohort = @cohort, school_name = @school_name
    WHERE id = @id
  `, {
    id: Number(id),
    display_name: String(display_name).slice(0, 60),
    age:    Number.isFinite(age) ? Math.floor(age) : null,
    email:  email ? String(email).slice(0, 120) : null,
    grade:  Number.isFinite(grade) && grade > 0 ? Math.floor(grade) : null,
    major:  major ? String(major).slice(0, 40) : null,
    cohort: cohort ? String(cohort).slice(0, 20) : null,
    school_name: school_name ? String(school_name).slice(0, 120) : null,
  });
}

export async function isUsernameTaken(username) {
  const r = await one(`SELECT COUNT(*)::int AS n FROM users WHERE username = @u`, { u: String(username) });
  return (r?.n || 0) > 0;
}

// --- Schools (tenant) ---
export function getSchoolById(id) {
  return one(`SELECT id, code, name, domain, created_at FROM schools WHERE id = @id`, { id: Number(id) });
}
export function getSchoolByCode(code) {
  return one(`SELECT id, code, name, domain, created_at FROM schools WHERE code = @code`,
    { code: String(code || '').trim() });
}
export function getSchoolByDomain(domain) {
  if (!domain) return null;
  return one(`SELECT id, code, name, domain, created_at FROM schools WHERE domain = @domain`,
    { domain: String(domain).trim().toLowerCase() });
}
export function listSchools() {
  return many(`SELECT id, code, name, domain, created_at FROM schools ORDER BY id ASC`);
}
export async function createSchool({ code, name, domain }) {
  const r = await one(`
    INSERT INTO schools (code, name, domain, created_at)
    VALUES (@code, @name, @domain, @created_at)
    RETURNING id
  `, {
    code:   String(code || '').trim().slice(0, 40),
    name:   String(name || '').trim().slice(0, 120),
    domain: domain ? String(domain).trim().toLowerCase().slice(0, 80) : null,
    created_at: Date.now(),
  });
  return { id: r.id };
}
export async function resolveSchoolByEmail(email) {
  const m = String(email || '').match(/@([^@]+)$/);
  if (!m) return null;
  return getSchoolByDomain(m[1].toLowerCase());
}

// --- Family links (Trục 4) ---
export async function linkChildToParent({ parent_user_id, child_user_id }) {
  const r = await exec(`
    INSERT INTO family_links (parent_user_id, child_user_id, created_at)
    VALUES (@parent_user_id, @child_user_id, @created_at)
    ON CONFLICT (parent_user_id, child_user_id) DO NOTHING
  `, {
    parent_user_id: Number(parent_user_id),
    child_user_id:  Number(child_user_id),
    created_at:     Date.now(),
  });
  return { linked: r.rowCount > 0 };
}

export async function unlinkChildFromParent({ parent_user_id, child_user_id }) {
  const r = await exec(
    `DELETE FROM family_links WHERE parent_user_id = @parent AND child_user_id = @child`,
    { parent: Number(parent_user_id), child: Number(child_user_id) }
  );
  return { unlinked: r.rowCount > 0 };
}

export function listChildrenOfParent(parent_user_id) {
  return many(`
    SELECT u.id, u.username, u.display_name, u.role, u.grade, u.school_name, u.plan, u.plan_expires_at
    FROM family_links f JOIN users u ON u.id = f.child_user_id
    WHERE f.parent_user_id = @parent ORDER BY f.created_at ASC
  `, { parent: Number(parent_user_id) });
}

export function getBestParentPlanForChild(child_user_id) {
  return one(`
    SELECT u.id AS parent_id, u.plan AS parent_plan, u.plan_expires_at AS parent_plan_expires_at
    FROM family_links f JOIN users u ON u.id = f.parent_user_id
    WHERE f.child_user_id = @child
    ORDER BY (CASE u.plan WHEN 'pro' THEN 3 WHEN 'plus' THEN 2 WHEN 'free' THEN 1 ELSE 0 END) DESC
    LIMIT 1
  `, { child: Number(child_user_id) });
}

// --- School codes (Trục 4) ---
export function createSchoolCode({ code, school_id = 1, kind = 'grant_plan',
                                   grant_plan = null, grant_days = 365,
                                   discount_percent = 0, max_uses = 0,
                                   expires_at = null, note = null, created_by = null }) {
  return exec(`
    INSERT INTO school_codes (code, school_id, kind, grant_plan, grant_days, discount_percent,
                              max_uses, expires_at, note, created_by, created_at)
    VALUES (@code, @school_id, @kind, @grant_plan, @grant_days, @discount_percent,
            @max_uses, @expires_at, @note, @created_by, @created_at)
  `, {
    code: String(code).trim().slice(0, 40),
    school_id: Number(school_id) || 1,
    kind: kind === 'discount' ? 'discount' : 'grant_plan',
    grant_plan: grant_plan ? String(grant_plan) : null,
    grant_days: Math.max(1, Math.floor(Number(grant_days) || 365)),
    discount_percent: Math.max(0, Math.min(90, Math.floor(Number(discount_percent) || 0))),
    max_uses:   Math.max(0, Math.floor(Number(max_uses) || 0)),
    expires_at: expires_at ? Number(expires_at) : null,
    note:       note ? String(note).slice(0, 200) : null,
    created_by: created_by ? Number(created_by) : null,
    created_at: Date.now(),
  });
}

export function getSchoolCode(code) {
  return one(`SELECT * FROM school_codes WHERE code = @code`, { code: String(code || '').trim() });
}

export async function redeemSchoolCode({ code_id, user_id, outcome }) {
  return tx(async (c) => {
    const ins = await c.exec(`
      INSERT INTO school_code_redemptions (code_id, user_id, redeemed_at, outcome)
      VALUES (@code_id, @user_id, @redeemed_at, @outcome)
      ON CONFLICT (code_id, user_id) DO NOTHING
    `, {
      code_id: Number(code_id), user_id: Number(user_id),
      redeemed_at: Date.now(), outcome: String(outcome || ''),
    });
    if (ins.rowCount === 0) return false;
    await c.exec(`UPDATE school_codes SET used_count = used_count + 1 WHERE id = @id`,
      { id: Number(code_id) });
    return true;
  });
}

export function listRedemptionsForUser(user_id) {
  return many(`
    SELECT r.code_id, r.outcome, r.redeemed_at, c.code, c.kind, c.discount_percent, c.grant_plan
    FROM school_code_redemptions r JOIN school_codes c ON c.id = r.code_id
    WHERE r.user_id = @uid ORDER BY r.redeemed_at DESC
  `, { uid: Number(user_id) });
}

// --- User wallets ---
export async function getUserWallet(user_id) {
  const row = await one(`SELECT * FROM user_wallets WHERE user_id = @uid`, { uid: Number(user_id) });
  if (!row) return null;
  // JSONB fields đã được pg parse → giữ nguyên. Fallback an toàn nếu NULL.
  return {
    coins:          Number(row.coins) | 0,
    xp:             Number(row.xp) | 0,
    streak:         row.streak | 0,
    longestStreak:  row.longest_streak | 0,
    streakShields:  row.streak_shields | 0,
    lastVisitDay:   row.last_visit_day || '',
    achievements:   row.achievements || [],
    vrSessions:     row.vr_sessions | 0,
    metaSessions:   row.meta_sessions | 0,
    quizzesPassed:  row.quizzes_passed | 0,
    modulesByDay:   row.modules_by_day || {},
    daily:          row.daily || {},
    questsClaimed:  row.quests_claimed || {},
    updatedAt:      Number(row.updated_at) || 0,
  };
}

const _toInt = (v, max = 1e9) => Math.max(0, Math.min(max, Math.floor(Number(v) || 0)));
const _toStr = (v, max = 32) => String(v || '').slice(0, max);
// JSONB: trả về JSON string (pg driver coi array JS là Postgres array nếu
// không stringify — gửi cho cột JSONB sẽ thành '{"first_login"}' syntax sai).
// Cap 64KB sau khi serialize để khoá tăng size không kiểm soát.
const _toJsonB = (v, fallback) => {
  try {
    const obj = (typeof v === 'string') ? JSON.parse(v) : (v ?? fallback);
    const s = JSON.stringify(obj);
    return s.length > 64_000 ? JSON.stringify(fallback) : s;
  } catch { return JSON.stringify(fallback); }
};

function _mergeModulesByDay(cur = {}, inc = {}) {
  const out = {};
  for (const day of new Set([...Object.keys(cur), ...Object.keys(inc)])) {
    out[day] = [...new Set([...(cur[day] || []), ...(inc[day] || [])])];
  }
  return out;
}

export async function upsertUserWallet(user_id, w = {}, { monotonic = true } = {}) {
  const cur = (await getUserWallet(user_id)) || {};
  const pick = (k, def = 0) => (w[k] !== undefined ? w[k] : (cur[k] ?? def));
  const up = (k, max = 1e9) => {
    const incoming = _toInt(pick(k), max);
    return monotonic ? Math.max(incoming, _toInt(cur[k] ?? 0, max)) : incoming;
  };
  const incAch = Array.isArray(pick('achievements', [])) ? pick('achievements', []) : [];
  const achievements = monotonic
    ? [...new Set([...(cur.achievements || []), ...incAch])]
    : incAch;
  const incMods = (typeof pick('modulesByDay', {}) === 'object') ? pick('modulesByDay', {}) : {};
  const modulesByDay = monotonic ? _mergeModulesByDay(cur.modulesByDay, incMods) : incMods;

  await exec(`
    INSERT INTO user_wallets (user_id, coins, xp, streak, longest_streak, streak_shields,
                              last_visit_day, achievements, vr_sessions, meta_sessions,
                              quizzes_passed, modules_by_day, daily, quests_claimed, updated_at)
    VALUES (@user_id, @coins, @xp, @streak, @longest_streak, @streak_shields,
            @last_visit_day, @achievements, @vr_sessions, @meta_sessions,
            @quizzes_passed, @modules_by_day, @daily, @quests_claimed, @updated_at)
    ON CONFLICT (user_id) DO UPDATE SET
      coins          = EXCLUDED.coins,
      xp             = EXCLUDED.xp,
      streak         = EXCLUDED.streak,
      longest_streak = EXCLUDED.longest_streak,
      streak_shields = EXCLUDED.streak_shields,
      last_visit_day = EXCLUDED.last_visit_day,
      achievements   = EXCLUDED.achievements,
      vr_sessions    = EXCLUDED.vr_sessions,
      meta_sessions  = EXCLUDED.meta_sessions,
      quizzes_passed = EXCLUDED.quizzes_passed,
      modules_by_day = EXCLUDED.modules_by_day,
      daily          = EXCLUDED.daily,
      quests_claimed = EXCLUDED.quests_claimed,
      updated_at     = EXCLUDED.updated_at
  `, {
    user_id:        Number(user_id),
    coins:          up('coins', 1e12),
    xp:             up('xp', 1e12),
    longest_streak: up('longestStreak', 10000),
    vr_sessions:    up('vrSessions', 1e9),
    meta_sessions:  up('metaSessions', 1e9),
    quizzes_passed: up('quizzesPassed', 1e9),
    streak:         _toInt(pick('streak'), 10000),
    streak_shields: _toInt(pick('streakShields'), 1000),
    last_visit_day: _toStr(pick('lastVisitDay', ''), 16),
    achievements:   _toJsonB(achievements, []),
    modules_by_day: _toJsonB(modulesByDay, {}),
    daily:          _toJsonB(pick('daily', {}), {}),
    quests_claimed: _toJsonB(pick('questsClaimed', {}), {}),
    updated_at:     Date.now(),
  });
  return getUserWallet(user_id);
}

// --- Scenario runs (đếm số lần hoàn thành theo familyId per-user) ---
// Cross-device qua DB. UPSERT monotonic: runs++, best_stars/best_score = MAX.

export async function getScenarioRunsForUser(user_id) {
  const rows = await many(
    `SELECT family_id, runs, best_stars, best_score, last_ts
     FROM scenario_runs WHERE user_id = @uid`,
    { uid: Number(user_id) }
  );
  const out = {};
  for (const r of rows) {
    out[r.family_id] = {
      runs: r.runs | 0,
      bestStars: r.best_stars | 0,
      bestScore: r.best_score | 0,
      lastTs: Number(r.last_ts) || 0,
    };
  }
  return out;
}

export async function recordScenarioRunDb(user_id, family_id, stars = 0, score = 0) {
  const fid = String(family_id || '').slice(0, 64);
  if (!fid) return null;
  const s = Math.max(0, Math.min(3, Math.floor(Number(stars) || 0)));
  const sc = Math.max(0, Math.min(1000, Math.floor(Number(score) || 0)));
  await exec(`
    INSERT INTO scenario_runs (user_id, family_id, runs, best_stars, best_score, last_ts)
    VALUES (@uid, @fid, 1, @stars, @score, @ts)
    ON CONFLICT (user_id, family_id) DO UPDATE SET
      runs       = scenario_runs.runs + 1,
      best_stars = GREATEST(scenario_runs.best_stars, EXCLUDED.best_stars),
      best_score = GREATEST(scenario_runs.best_score, EXCLUDED.best_score),
      last_ts    = EXCLUDED.last_ts
  `, { uid: Number(user_id), fid, stars: s, score: sc, ts: Date.now() });
  const row = await one(
    `SELECT runs, best_stars, best_score, last_ts FROM scenario_runs
     WHERE user_id = @uid AND family_id = @fid`,
    { uid: Number(user_id), fid }
  );
  return row ? {
    runs: row.runs | 0,
    bestStars: row.best_stars | 0,
    bestScore: row.best_score | 0,
    lastTs: Number(row.last_ts) || 0,
  } : null;
}

// Legacy exports để code cũ chưa migrate không nổ ở runtime:
export const DB_PATH = null;          // không còn ý nghĩa với Postgres
export const DB_DATA_DIR = null;
