import Database from 'better-sqlite3';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.resolve(__dirname, '..', 'data');

fs.mkdirSync(DATA_DIR, { recursive: true });

const dbPath = path.join(DATA_DIR, 'pharmacy.db');
export const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Step 1: create tables (without indexes that reference v5 columns)
db.exec(`
  CREATE TABLE IF NOT EXISTS attempts (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    version      TEXT    NOT NULL,
    player_name  TEXT    NOT NULL DEFAULT 'Ẩn danh',
    score        INTEGER NOT NULL,
    correct      INTEGER NOT NULL,
    total        INTEGER NOT NULL,
    duration_ms  INTEGER,
    details      TEXT,
    created_at   INTEGER NOT NULL,
    class_code   TEXT,
    level_n      INTEGER
  );
  CREATE INDEX IF NOT EXISTS idx_attempts_version_score
    ON attempts(version, score DESC, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_attempts_recent
    ON attempts(created_at DESC);

  CREATE TABLE IF NOT EXISTS achievements (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    player_name  TEXT    NOT NULL,
    badge_id     TEXT    NOT NULL,
    unlocked_at  INTEGER NOT NULL,
    UNIQUE(player_name, badge_id)
  );
  CREATE INDEX IF NOT EXISTS idx_ach_player ON achievements(player_name);

  CREATE TABLE IF NOT EXISTS classes (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    code          TEXT    NOT NULL UNIQUE,
    name          TEXT    NOT NULL,
    teacher_name  TEXT    NOT NULL DEFAULT 'GV',
    created_at    INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_classes_code ON classes(code);

  -- Yêu cầu của SV gửi tới "Ban điều hành AI" của từng trường
  CREATE TABLE IF NOT EXISTS requests (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    domain      TEXT    NOT NULL,                     -- pharmacy | it | ...
    type        TEXT    NOT NULL DEFAULT 'other',     -- game | theory | lab | skill | other
    title       TEXT    NOT NULL,
    detail      TEXT,
    student     TEXT    NOT NULL DEFAULT 'Ẩn danh',
    status      TEXT    NOT NULL DEFAULT 'pending',   -- pending | reviewing | done | rejected
    votes       INTEGER NOT NULL DEFAULT 1,
    admin_note  TEXT,
    created_at  INTEGER NOT NULL,
    updated_at  INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_requests_domain ON requests(domain, votes DESC, created_at DESC);

  -- Tài khoản người dùng (SV + GV). password_hash dạng scrypt$salt$hash.
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT    NOT NULL UNIQUE COLLATE NOCASE,
    display_name  TEXT    NOT NULL,
    password_hash TEXT    NOT NULL,
    role          TEXT    NOT NULL DEFAULT 'student',
    created_at    INTEGER NOT NULL,
    last_login    INTEGER
  );
  CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);

  -- Phiên đăng nhập. Token là chuỗi ngẫu nhiên 32 byte hex (server cấp).
  CREATE TABLE IF NOT EXISTS sessions (
    token       TEXT    PRIMARY KEY,
    user_id     INTEGER NOT NULL,
    created_at  INTEGER NOT NULL,
    expires_at  INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
  CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
  CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);

  -- OAuth/SSO identities. Một user có thể có nhiều liên kết (Google + MS chẳng hạn).
  CREATE TABLE IF NOT EXISTS oauth_identities (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id     INTEGER NOT NULL,
    provider    TEXT    NOT NULL,            -- google | microsoft | github | ...
    subject     TEXT    NOT NULL,            -- 'sub' ổn định do provider cấp
    email       TEXT,
    created_at  INTEGER NOT NULL,
    UNIQUE(provider, subject),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
  CREATE INDEX IF NOT EXISTS idx_oauth_user ON oauth_identities(user_id);

  -- Multi-tenancy (Phase 0 foundation): mỗi trường là 1 tenant.
  -- Mặc định school_id=1 ('eduverse-default') chứa legacy data trước khi mở multi-tenant.
  -- SSO email domain → school auto-map (vd '*@neu.edu.vn' → NEU). Phase 1 sẽ enforce
  -- Postgres RLS theo school_id; hiện tại SQLite, isolation enforce ở app layer.
  CREATE TABLE IF NOT EXISTS schools (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    code        TEXT    NOT NULL UNIQUE,
    name        TEXT    NOT NULL,
    domain      TEXT,                          -- email domain để map SSO auto, có thể NULL
    created_at  INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_schools_code   ON schools(code);
  CREATE INDEX IF NOT EXISTS idx_schools_domain ON schools(domain);
`);

// Step 4: upgrade `users` cho OAuth — email/avatar có thể đến sau khi đã có DB cũ.
try { db.exec(`ALTER TABLE users ADD COLUMN email TEXT`); } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN avatar_url TEXT`); } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN age INTEGER`); } catch {}
// Cho phép password_hash NULL cho user thuần SSO. SQLite không drop được NOT NULL,
// nhưng ta vẫn cài giá trị '' (empty) khi tạo user SSO — verifyPassword luôn trả false.

// Step 2: add v5 columns to attempts if upgrading from older DB
try { db.exec(`ALTER TABLE attempts ADD COLUMN class_code TEXT`); } catch {}
try { db.exec(`ALTER TABLE attempts ADD COLUMN level_n INTEGER`); } catch {}

// Step 3: create indexes that depend on the v5 columns (now guaranteed to exist)
try { db.exec(`CREATE INDEX IF NOT EXISTS idx_attempts_class ON attempts(class_code, created_at DESC)`); } catch {}

// Step 5: multi-tenancy migration (Phase 0). Thêm school_id vào 4 entity table top-level.
// Additive với DEFAULT 1 → legacy row tự backfill về school 'eduverse-default'.
// SQLite KHÔNG cho phép ALTER ADD COLUMN với non-constant DEFAULT, nên dùng hằng 1.
try { db.prepare(`INSERT OR IGNORE INTO schools (id, code, name, created_at) VALUES (1, 'eduverse-default', 'EduVerse', ?)`).run(Date.now()); } catch {}
try { db.exec(`ALTER TABLE users    ADD COLUMN school_id INTEGER NOT NULL DEFAULT 1`); } catch {}
try { db.exec(`ALTER TABLE classes  ADD COLUMN school_id INTEGER NOT NULL DEFAULT 1`); } catch {}
try { db.exec(`ALTER TABLE attempts ADD COLUMN school_id INTEGER NOT NULL DEFAULT 1`); } catch {}
try { db.exec(`ALTER TABLE requests ADD COLUMN school_id INTEGER NOT NULL DEFAULT 1`); } catch {}
try { db.exec(`CREATE INDEX IF NOT EXISTS idx_users_school    ON users(school_id)`); } catch {}
try { db.exec(`CREATE INDEX IF NOT EXISTS idx_classes_school  ON classes(school_id)`); } catch {}
try { db.exec(`CREATE INDEX IF NOT EXISTS idx_attempts_school ON attempts(school_id, created_at DESC)`); } catch {}
try { db.exec(`CREATE INDEX IF NOT EXISTS idx_requests_school ON requests(school_id, votes DESC, created_at DESC)`); } catch {}

// Step 6: gói cước (free/plus/pro). plan_expires_at NULL = vĩnh viễn (cho free) hoặc
// đến khi mua. billing_cycle = month|year (lưu để render đúng "hết hạn dd/mm/yyyy"
// và để gia hạn). Hết hạn → app degrade về free nhưng KHÔNG xoá cột → khôi phục
// lịch sử nếu user gia hạn lại. Default 'free' cho user cũ.
try { db.exec(`ALTER TABLE users ADD COLUMN plan TEXT NOT NULL DEFAULT 'free'`); } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN plan_expires_at INTEGER`); } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN billing_cycle TEXT`); } catch {}
try { db.exec(`CREATE INDEX IF NOT EXISTS idx_users_plan ON users(plan, plan_expires_at)`); } catch {}

// Kho học liệu do AI sinh thêm (nút "Học thêm" + "Hỏi cô giáo AI" ở Tiểu học).
// Mỗi lần Ollama sinh nội dung mới → lưu lại để bài học giàu dần, tái sử dụng
// (không phải gọi AI lại) và để GV duyệt. kind='question' (quiz) | 'qa' (hỏi-đáp).
db.exec(`
  CREATE TABLE IF NOT EXISTS ai_lesson_content (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    school_id   INTEGER NOT NULL DEFAULT 1,
    week_id     TEXT    NOT NULL,            -- scenario id, vd 'P2-w07-quiz'
    subject     TEXT,                        -- nhãn môn, vd 'Toán'
    topic       TEXT,                        -- chủ đề tuần
    kind        TEXT    NOT NULL,            -- 'question' | 'qa'
    stem        TEXT,                        -- câu hỏi (question) / câu hỏi của HS (qa)
    payload     TEXT    NOT NULL,            -- JSON: question={choices,answer,explanation}; qa={answer}
    student     TEXT,                        -- ai kích hoạt (display name)
    upvotes     INTEGER NOT NULL DEFAULT 0,
    flagged     INTEGER NOT NULL DEFAULT 0,  -- GV gắn cờ nội dung sai → ẩn khỏi kho
    created_at  INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_ai_content_week
    ON ai_lesson_content(week_id, kind, flagged, created_at DESC);
`);

// Thông báo cá nhân cho HS — kênh phản hồi từ Ban điều hành AI khi xử lý xong
// 1 yêu cầu (request). Key theo display_name vì requests.student lưu tên hiển
// thị (không có user_id ở thời điểm tạo, có cả guest). Read receipt: read_at.
db.exec(`
  CREATE TABLE IF NOT EXISTS notifications (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    school_id         INTEGER NOT NULL DEFAULT 1,
    user_display_name TEXT    NOT NULL,         -- người nhận, khớp users.display_name
    request_id        INTEGER,                   -- request gốc (NULL nếu không gắn)
    kind              TEXT    NOT NULL,          -- 'reply' | 'system' | ...
    title             TEXT    NOT NULL,
    body              TEXT,
    url               TEXT,                      -- link điều hướng khi click
    read_at           INTEGER,                   -- NULL = chưa đọc
    created_at        INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_notifications_user
    ON notifications(user_display_name, read_at, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_notifications_request
    ON notifications(request_id);
`);

// Multi-tenancy: mọi write ghi school_id, mọi read cross-user lọc theo school_id.
// Tham số @school_id bắt buộc ở các statement có ảnh hưởng tenant. Caller lấy từ
// req.schoolId (attachTenant middleware) — xem server/contexts/identity/tenant.js.
const insertAttemptStmt = db.prepare(`
  INSERT INTO attempts (school_id, version, player_name, score, correct, total, duration_ms, details, created_at, class_code, level_n)
  VALUES (@school_id, @version, @player_name, @score, @correct, @total, @duration_ms, @details, @created_at, @class_code, @level_n)
`);

const leaderboardStmt = db.prepare(`
  SELECT id, player_name, score, correct, total, duration_ms, created_at
  FROM attempts
  WHERE version = @version AND school_id = @school_id
  ORDER BY score DESC, created_at DESC
  LIMIT @limit
`);

const statsStmt = db.prepare(`
  SELECT
    COUNT(*)              AS total_attempts,
    ROUND(AVG(score), 1)  AS avg_score,
    MAX(score)            AS best_score,
    SUM(CASE WHEN correct = total AND total > 0 THEN 1 ELSE 0 END) AS perfect_count
  FROM attempts
  WHERE version = @version AND school_id = @school_id
`);

const recentStmt = db.prepare(`
  SELECT id, version, player_name, score, correct, total, created_at
  FROM attempts
  WHERE school_id = @school_id
  ORDER BY created_at DESC
  LIMIT @limit
`);

const allAttemptsStmt = db.prepare(`
  SELECT id, version, player_name, score, correct, total, duration_ms, details, created_at
  FROM attempts
  ORDER BY created_at DESC
`);

const histogramStmt = db.prepare(`
  SELECT
    CAST((score / 10) AS INTEGER) * 10 AS bucket,
    COUNT(*) AS n
  FROM attempts
  WHERE version = @version AND school_id = @school_id
  GROUP BY bucket
  ORDER BY bucket
`);

export function insertAttempt(row) {
  // school_id đặt SAU spread để luôn có giá trị (fallback 1) kể cả khi row.school_id
  // = undefined — an toàn cho legacy / single-tenant caller.
  const info = insertAttemptStmt.run({ ...row, school_id: row.school_id ?? 1 });
  return { id: info.lastInsertRowid, createdAt: row.created_at };
}

export function getLeaderboard(version, limit = 10, schoolId = 1) {
  return leaderboardStmt.all({ version, limit, school_id: schoolId });
}

export function getStats(version, schoolId = 1) {
  return statsStmt.get({ version, school_id: schoolId }) || { total_attempts: 0, avg_score: 0, best_score: 0, perfect_count: 0 };
}

export function getRecent(limit = 20, schoolId = 1) {
  return recentStmt.all({ limit, school_id: schoolId });
}

// --- Class management ---
const createClassStmt = db.prepare(`
  INSERT INTO classes (school_id, code, name, teacher_name, created_at)
  VALUES (@school_id, @code, @name, @teacher_name, @created_at)
`);
const getClassByCodeStmt = db.prepare(`
  SELECT id, code, name, teacher_name, created_at FROM classes WHERE code = ?
`);
const listClassesStmt = db.prepare(`
  SELECT id, code, name, teacher_name, created_at,
    (SELECT COUNT(*) FROM attempts WHERE class_code = classes.code) AS attempt_count,
    (SELECT COUNT(DISTINCT player_name) FROM attempts WHERE class_code = classes.code) AS student_count
  FROM classes WHERE school_id = @school_id ORDER BY created_at DESC
`);
const classMembersStmt = db.prepare(`
  SELECT player_name,
    COUNT(*) AS attempts,
    MAX(score) AS best_score,
    ROUND(AVG(score), 1) AS avg_score,
    SUM(CASE WHEN correct = total AND total > 0 THEN 1 ELSE 0 END) AS perfect_count,
    MAX(created_at) AS last_seen
  FROM attempts WHERE class_code = ? GROUP BY player_name
  ORDER BY best_score DESC, attempts DESC
`);
const classAttemptsStmt = db.prepare(`
  SELECT id, version, player_name, score, correct, total, duration_ms, level_n, created_at
  FROM attempts WHERE class_code = ? ORDER BY created_at DESC LIMIT @limit
`);
const playerAttemptsStmt = db.prepare(`
  SELECT id, version, player_name, score, correct, total, duration_ms, level_n, details, created_at
  FROM attempts WHERE player_name = @player ORDER BY created_at DESC LIMIT @limit
`);

export function createClass({ code, name, teacher_name, school_id = 1 }) {
  const info = createClassStmt.run({ school_id, code, name, teacher_name, created_at: Date.now() });
  return { id: info.lastInsertRowid, code };
}
export function getClassByCode(code) { return getClassByCodeStmt.get(code) || null; }
export function listClasses(schoolId = 1) { return listClassesStmt.all({ school_id: schoolId }); }
export function getClassMembers(code) { return classMembersStmt.all(code); }
export function getClassAttempts(code, limit = 100) { return classAttemptsStmt.all(code, { limit }); }
export function getPlayerAttempts(player, limit = 50) { return playerAttemptsStmt.all({ player, limit }); }

export function getAllAttempts() {
  return allAttemptsStmt.all();
}

export function getHistogram(version, schoolId = 1) {
  return histogramStmt.all({ version, school_id: schoolId });
}

const achievementsForStmt = db.prepare(`
  SELECT badge_id, unlocked_at FROM achievements
  WHERE player_name = @player ORDER BY unlocked_at DESC
`);
const allAchievementsStmt = db.prepare(`
  SELECT player_name, badge_id, unlocked_at FROM achievements
  ORDER BY unlocked_at DESC LIMIT 50
`);
const unlockAchievementStmt = db.prepare(`
  INSERT OR IGNORE INTO achievements (player_name, badge_id, unlocked_at)
  VALUES (@player, @badge, @t)
`);
export function getAchievements(player) {
  return achievementsForStmt.all({ player });
}
export function getAllRecentAchievements() {
  return allAchievementsStmt.all();
}
export function unlockAchievement(player, badge) {
  const info = unlockAchievementStmt.run({ player, badge, t: Date.now() });
  return info.changes > 0;
}

// Confusion matrix: parses attempt.details.breakdown / details.medicines
// → returns { categories: [...], matrix: { actualCat: { placedCat: count } } }
// --- Requests ("Ban điều hành AI" inbox) ---
const VALID_REQ_TYPES = new Set(['game', 'theory', 'lab', 'skill', 'other']);
const VALID_REQ_STATUS = new Set(['pending', 'reviewing', 'done', 'rejected']);

const insertRequestStmt = db.prepare(`
  INSERT INTO requests (school_id, domain, type, title, detail, student, status, votes, created_at, updated_at)
  VALUES (@school_id, @domain, @type, @title, @detail, @student, 'pending', 1, @t, @t)
`);
const listRequestsStmt = db.prepare(`
  SELECT id, domain, type, title, detail, student, status, votes, admin_note, created_at, updated_at
  FROM requests WHERE domain = @domain AND school_id = @school_id
  ORDER BY (status='done') ASC, votes DESC, created_at DESC
  LIMIT @limit
`);
const voteRequestStmt = db.prepare(`UPDATE requests SET votes = votes + 1, updated_at = @t WHERE id = @id`);
const setRequestStatusStmt = db.prepare(`UPDATE requests SET status = @status, admin_note = @note, updated_at = @t WHERE id = @id`);
const requestStatsStmt = db.prepare(`
  SELECT status, COUNT(*) AS n FROM requests WHERE domain = @domain AND school_id = @school_id GROUP BY status
`);

export function createRequest({ domain, type, title, detail, student, school_id = 1 }) {
  const t = Date.now();
  const safeType = VALID_REQ_TYPES.has(type) ? type : 'other';
  const info = insertRequestStmt.run({
    school_id,
    domain: String(domain || '').slice(0, 40),
    type: safeType,
    title: String(title || '').slice(0, 200),
    detail: detail ? String(detail).slice(0, 2000) : null,
    student: String(student || 'Ẩn danh').slice(0, 60),
    t,
  });
  return { id: info.lastInsertRowid, createdAt: t };
}
export function listRequests(domain, limit = 50, schoolId = 1) {
  return listRequestsStmt.all({ domain: String(domain || ''), limit, school_id: schoolId });
}
export function voteRequest(id) {
  const info = voteRequestStmt.run({ id: Number(id), t: Date.now() });
  return info.changes > 0;
}
export function setRequestStatus(id, status, note) {
  if (!VALID_REQ_STATUS.has(status)) return false;
  const info = setRequestStatusStmt.run({ id: Number(id), status, note: note ? String(note).slice(0, 500) : null, t: Date.now() });
  return info.changes > 0;
}
export function getRequestStats(domain, schoolId = 1) {
  const rows = requestStatsStmt.all({ domain: String(domain || ''), school_id: schoolId });
  const out = { pending: 0, reviewing: 0, done: 0, rejected: 0 };
  for (const r of rows) out[r.status] = r.n;
  return out;
}

// --- Notifications (kênh phản hồi cá nhân cho HS) ---
const VALID_NOTIF_KINDS = new Set(['reply', 'system']);

const insertNotificationStmt = db.prepare(`
  INSERT INTO notifications (school_id, user_display_name, request_id, kind, title, body, url, created_at)
  VALUES (@school_id, @user_display_name, @request_id, @kind, @title, @body, @url, @created_at)
`);
const listNotificationsStmt = db.prepare(`
  SELECT id, request_id, kind, title, body, url, read_at, created_at
  FROM notifications
  WHERE user_display_name = @user AND school_id = @school_id
  ORDER BY (read_at IS NOT NULL) ASC, created_at DESC
  LIMIT @limit
`);
const countUnreadStmt = db.prepare(`
  SELECT COUNT(*) AS n FROM notifications
  WHERE user_display_name = @user AND school_id = @school_id AND read_at IS NULL
`);
const markReadStmt = db.prepare(`
  UPDATE notifications SET read_at = @t
  WHERE id = @id AND user_display_name = @user AND read_at IS NULL
`);
const markAllReadStmt = db.prepare(`
  UPDATE notifications SET read_at = @t
  WHERE user_display_name = @user AND school_id = @school_id AND read_at IS NULL
`);

/** Bỏ qua nếu thiếu display_name hợp lệ (vd 'Ẩn danh' / rỗng) — tránh broadcast. */
export function createNotification({ user_display_name, request_id = null, kind = 'reply', title, body = null, url = null, school_id = 1 }) {
  const u = String(user_display_name || '').trim();
  if (!u || u === 'Ẩn danh') return null;
  if (!VALID_NOTIF_KINDS.has(kind)) kind = 'reply';
  const info = insertNotificationStmt.run({
    school_id, user_display_name: u.slice(0, 60),
    request_id: request_id ? Number(request_id) : null,
    kind,
    title: String(title || '').slice(0, 200),
    body: body ? String(body).slice(0, 1000) : null,
    url: url ? String(url).slice(0, 500) : null,
    created_at: Date.now(),
  });
  return { id: info.lastInsertRowid };
}
export function listNotifications(user_display_name, schoolId = 1, limit = 30) {
  const u = String(user_display_name || '').trim();
  if (!u) return [];
  return listNotificationsStmt.all({ user: u, school_id: schoolId, limit });
}
export function countUnreadNotifications(user_display_name, schoolId = 1) {
  const u = String(user_display_name || '').trim();
  if (!u) return 0;
  return countUnreadStmt.get({ user: u, school_id: schoolId })?.n || 0;
}
export function markNotificationRead(id, user_display_name) {
  const u = String(user_display_name || '').trim();
  if (!u) return false;
  return markReadStmt.run({ id: Number(id), user: u, t: Date.now() }).changes > 0;
}
export function markAllNotificationsRead(user_display_name, schoolId = 1) {
  const u = String(user_display_name || '').trim();
  if (!u) return 0;
  return markAllReadStmt.run({ user: u, school_id: schoolId, t: Date.now() }).changes;
}

// --- Kho học liệu AI sinh thêm ---
const insertAiContentStmt = db.prepare(`
  INSERT INTO ai_lesson_content (school_id, week_id, subject, topic, kind, stem, payload, student, created_at)
  VALUES (@school_id, @week_id, @subject, @topic, @kind, @stem, @payload, @student, @created_at)
`);
const existsAiStemStmt = db.prepare(`
  SELECT 1 FROM ai_lesson_content WHERE week_id = @week_id AND kind = @kind AND stem = @stem LIMIT 1
`);
const getAiQuestionsStmt = db.prepare(`
  SELECT stem, payload, created_at FROM ai_lesson_content
  WHERE week_id = @week_id AND kind = 'question' AND flagged = 0
  ORDER BY created_at DESC LIMIT @limit
`);
const getAiQaStmt = db.prepare(`
  SELECT stem, payload, created_at FROM ai_lesson_content
  WHERE week_id = @week_id AND kind = 'qa' AND flagged = 0
  ORDER BY created_at DESC LIMIT @limit
`);
const countAiContentStmt = db.prepare(`
  SELECT kind, COUNT(*) AS n FROM ai_lesson_content
  WHERE week_id = @week_id AND flagged = 0 GROUP BY kind
`);

/** Lưu 1 mảng câu hỏi AI vừa sinh. Bỏ qua câu trùng stem trong cùng tuần. */
export function saveAiQuestions({ week_id, subject, topic, student, questions = [], school_id = 1 }) {
  if (!week_id || !Array.isArray(questions) || !questions.length) return { saved: 0 };
  const t = Date.now();
  let saved = 0;
  const tx = db.transaction(() => {
    for (const q of questions) {
      const stem = String(q.stem || '').trim();
      if (!stem) continue;
      if (existsAiStemStmt.get({ week_id, kind: 'question', stem })) continue;  // dedupe
      insertAiContentStmt.run({
        school_id, week_id,
        subject: subject ? String(subject).slice(0, 60) : null,
        topic: topic ? String(topic).slice(0, 160) : null,
        kind: 'question', stem: stem.slice(0, 500),
        payload: JSON.stringify({ choices: q.choices, answer: q.answer, explanation: q.explanation || '' }),
        student: student ? String(student).slice(0, 60) : null,
        created_at: t,
      });
      saved++;
    }
  });
  tx();
  return { saved };
}

/** Lưu 1 cặp hỏi-đáp với "cô giáo AI". */
export function saveAiQa({ week_id, subject, topic, student, question, answer, school_id = 1 }) {
  if (!week_id || !question || !answer) return { saved: 0 };
  const stem = String(question).trim().slice(0, 500);
  if (existsAiStemStmt.get({ week_id, kind: 'qa', stem })) return { saved: 0 };  // dedupe câu hỏi y hệt
  insertAiContentStmt.run({
    school_id, week_id,
    subject: subject ? String(subject).slice(0, 60) : null,
    topic: topic ? String(topic).slice(0, 160) : null,
    kind: 'qa', stem,
    payload: JSON.stringify({ answer: String(answer).slice(0, 2000) }),
    student: student ? String(student).slice(0, 60) : null,
    created_at: Date.now(),
  });
  return { saved: 1 };
}

/** Lấy câu hỏi AI đã tích luỹ của 1 tuần (để luyện lại không cần gọi Ollama). */
export function getAiQuestions(week_id, limit = 50) {
  return getAiQuestionsStmt.all({ week_id: String(week_id), limit })
    .map(r => { try { const p = JSON.parse(r.payload); return { stem: r.stem, ...p }; } catch { return null; } })
    .filter(Boolean);
}
/** Lấy hỏi-đáp đã tích luỹ của 1 tuần. */
export function getAiQa(week_id, limit = 50) {
  return getAiQaStmt.all({ week_id: String(week_id), limit })
    .map(r => { try { const p = JSON.parse(r.payload); return { question: r.stem, answer: p.answer, created_at: r.created_at }; } catch { return null; } })
    .filter(Boolean);
}
/** Đếm số học liệu AI đã tích luỹ theo tuần → { question, qa }. */
export function getAiContentCounts(week_id) {
  const rows = countAiContentStmt.all({ week_id: String(week_id) });
  const out = { question: 0, qa: 0 };
  for (const r of rows) out[r.kind] = r.n;
  return out;
}

export function getConfusion(version) {
  const rows = db.prepare(`SELECT details FROM attempts WHERE version = ? AND details IS NOT NULL`).all(version);
  const matrix = {};
  const categories = new Set();
  for (const r of rows) {
    let d;
    try { d = JSON.parse(r.details); } catch { continue; }
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
const insertUserStmt = db.prepare(`
  INSERT INTO users (username, display_name, password_hash, role, age, school_id, created_at)
  VALUES (@username, @display_name, @password_hash, @role, @age, @school_id, @created_at)
`);
const getUserByUsernameStmt = db.prepare(`
  SELECT id, username, display_name, password_hash, role, age, email, avatar_url, created_at, last_login
  FROM users WHERE username = ? COLLATE NOCASE
`);
const getUserByIdStmt = db.prepare(`
  SELECT id, username, display_name, role, age, email, avatar_url, school_id, created_at, last_login,
         plan, plan_expires_at, billing_cycle
  FROM users WHERE id = ?
`);
const setUserPlanStmt = db.prepare(`
  UPDATE users SET plan = @plan, plan_expires_at = @expires, billing_cycle = @cycle WHERE id = @id
`);
const touchLoginStmt = db.prepare(`UPDATE users SET last_login = @t WHERE id = @id`);
const updateDisplayNameStmt = db.prepare(`UPDATE users SET display_name = @name WHERE id = @id`);

const insertSessionStmt = db.prepare(`
  INSERT INTO sessions (token, user_id, created_at, expires_at)
  VALUES (@token, @user_id, @created_at, @expires_at)
`);
const getSessionStmt = db.prepare(`
  SELECT s.token, s.user_id, s.expires_at,
         u.username, u.display_name, u.role, u.school_id,
         u.plan, u.plan_expires_at
  FROM sessions s JOIN users u ON u.id = s.user_id
  WHERE s.token = ? AND s.expires_at > @now
`);
const deleteSessionStmt = db.prepare(`DELETE FROM sessions WHERE token = ?`);
const purgeExpiredSessionsStmt = db.prepare(`DELETE FROM sessions WHERE expires_at <= ?`);

const ALLOWED_ROLES = new Set(['pupil', 'student', 'teacher']);
export function createUser({ username, display_name, password_hash, role, age, school_id = 1 }) {
  const info = insertUserStmt.run({
    username, display_name, password_hash,
    role: ALLOWED_ROLES.has(role) ? role : 'student',
    age: Number.isFinite(age) ? Math.floor(age) : null,
    school_id: Number(school_id) || 1,
    created_at: Date.now(),
  });
  return { id: info.lastInsertRowid };
}
export function getUserByUsername(username) {
  return getUserByUsernameStmt.get(String(username || '').trim()) || null;
}
export function getUserById(id) {
  return getUserByIdStmt.get(Number(id)) || null;
}
export function touchLogin(id) {
  touchLoginStmt.run({ id: Number(id), t: Date.now() });
}
export function updateDisplayName(id, name) {
  updateDisplayNameStmt.run({ id: Number(id), name: String(name).slice(0, 60) });
}
// Set gói cước. expires_at=null = vĩnh viễn (chỉ áp dụng cho 'free'); với plus/pro
// caller phải truyền timestamp ms. cycle='month'|'year'|null.
export function setUserPlan(id, { plan, expires_at = null, cycle = null }) {
  setUserPlanStmt.run({
    id: Number(id),
    plan: String(plan || 'free'),
    expires: expires_at ? Number(expires_at) : null,
    cycle: cycle ? String(cycle) : null,
  });
}
export function createSession({ token, user_id, ttlMs }) {
  const now = Date.now();
  insertSessionStmt.run({ token, user_id, created_at: now, expires_at: now + ttlMs });
  return { token, expires_at: now + ttlMs };
}
export function getSession(token) {
  if (!token) return null;
  return getSessionStmt.get(String(token), { now: Date.now() }) || null;
}
export function deleteSession(token) {
  deleteSessionStmt.run(String(token || ''));
}
export function purgeExpiredSessions() {
  purgeExpiredSessionsStmt.run(Date.now());
}
// Quét rác phiên hết hạn mỗi giờ (nhẹ nhàng — bảng nhỏ).
setInterval(purgeExpiredSessions, 60 * 60 * 1000).unref?.();

// --- OAuth identities ---
const findOAuthStmt = db.prepare(`
  SELECT u.id, u.username, u.display_name, u.role, u.email, u.avatar_url,
         oi.id AS oauth_id, oi.provider, oi.subject
  FROM oauth_identities oi JOIN users u ON u.id = oi.user_id
  WHERE oi.provider = ? AND oi.subject = ?
`);
const insertOAuthStmt = db.prepare(`
  INSERT INTO oauth_identities (user_id, provider, subject, email, created_at)
  VALUES (@user_id, @provider, @subject, @email, @created_at)
`);
const updateUserProfileStmt = db.prepare(`
  UPDATE users SET
    display_name = COALESCE(@display_name, display_name),
    email        = COALESCE(@email, email),
    avatar_url   = COALESCE(@avatar_url, avatar_url)
  WHERE id = @id
`);
const countUsernameStmt = db.prepare(`SELECT COUNT(*) AS n FROM users WHERE username = ? COLLATE NOCASE`);

export function findUserByOAuth(provider, subject) {
  return findOAuthStmt.get(String(provider), String(subject)) || null;
}
export function linkOAuth({ user_id, provider, subject, email }) {
  insertOAuthStmt.run({
    user_id, provider, subject,
    email: email ? String(email).slice(0, 120) : null,
    created_at: Date.now(),
  });
}
export function updateUserProfile(id, { display_name, email, avatar_url } = {}) {
  updateUserProfileStmt.run({
    id, display_name: display_name || null,
    email: email || null, avatar_url: avatar_url || null,
  });
}
// Người dùng tự sửa hồ sơ (display_name + age + email). Set trực tiếp (không COALESCE)
// vì form cung cấp đủ; email rỗng → null.
const updateEditableStmt = db.prepare(`
  UPDATE users SET display_name = @display_name, age = @age, email = @email WHERE id = @id
`);
export function updateUserEditable(id, { display_name, age, email }) {
  updateEditableStmt.run({
    id: Number(id),
    display_name: String(display_name).slice(0, 60),
    age: Number.isFinite(age) ? Math.floor(age) : null,
    email: email ? String(email).slice(0, 120) : null,
  });
}
export function isUsernameTaken(username) {
  return (countUsernameStmt.get(String(username))?.n || 0) > 0;
}

// --- Schools (multi-tenancy Phase 0) ---
// Mỗi trường là 1 tenant. Default school id=1 'eduverse-default' giữ legacy data.
// Phase 1 sẽ wire createUser/SSO auto-map theo resolveSchoolByEmail và enforce
// Postgres RLS theo school_id. Hiện tại helpers ready, callers chưa migrate.
const getSchoolByIdStmt     = db.prepare(`SELECT id, code, name, domain, created_at FROM schools WHERE id = ?`);
const getSchoolByCodeStmt   = db.prepare(`SELECT id, code, name, domain, created_at FROM schools WHERE code = ?`);
const getSchoolByDomainStmt = db.prepare(`SELECT id, code, name, domain, created_at FROM schools WHERE domain = ?`);
const listSchoolsStmt       = db.prepare(`SELECT id, code, name, domain, created_at FROM schools ORDER BY id ASC`);
const createSchoolStmt      = db.prepare(`INSERT INTO schools (code, name, domain, created_at) VALUES (@code, @name, @domain, @created_at)`);

export function getSchoolById(id) {
  return getSchoolByIdStmt.get(Number(id)) || null;
}
export function getSchoolByCode(code) {
  return getSchoolByCodeStmt.get(String(code || '').trim()) || null;
}
export function getSchoolByDomain(domain) {
  if (!domain) return null;
  return getSchoolByDomainStmt.get(String(domain).trim().toLowerCase()) || null;
}
export function listSchools() {
  return listSchoolsStmt.all();
}
export function createSchool({ code, name, domain }) {
  const info = createSchoolStmt.run({
    code:   String(code || '').trim().slice(0, 40),
    name:   String(name || '').trim().slice(0, 120),
    domain: domain ? String(domain).trim().toLowerCase().slice(0, 80) : null,
    created_at: Date.now(),
  });
  return { id: info.lastInsertRowid };
}
// Phân giải tenant từ email SSO: 'lan@neu.edu.vn' → school có domain='neu.edu.vn'.
// Trả null nếu admin chưa cấu hình domain cho trường — caller fallback school_id=1.
export function resolveSchoolByEmail(email) {
  const m = String(email || '').match(/@([^@]+)$/);
  if (!m) return null;
  return getSchoolByDomain(m[1].toLowerCase());
}

console.log(`[db] SQLite open at ${dbPath}`);
