-- ============================================================
-- Tizia — Postgres schema (Phase 1 target)
-- ============================================================
-- Tương đương schema SQLite hiện tại (server/db.js) nhưng cho Postgres 16,
-- KÈM Row-Level Security (RLS) theo school_id để enforce multi-tenant ở DB layer.
--
-- Quyết định thiết kế:
--   * Timestamp giữ BIGINT epoch-millis (KHÔNG đổi sang timestamptz) để code app
--     (Date.now()) migrate 1:1 — tránh phải sửa mọi prepared statement. Có thể
--     đổi sang timestamptz ở migration sau nếu cần query theo thời gian.
--   * username dùng CITEXT thay cho 'COLLATE NOCASE' của SQLite.
--   * RLS bật trên MỌI bảng có school_id. App phải SET app.current_school_id
--     mỗi request (qua middleware) — xem docs/MIGRATION-PLAN.md Phase 1.
--   * Bảng con (sessions, oauth_identities, achievements) được DENORMALIZE thêm
--     school_id để RLS đơn giản (không phải join users mỗi policy check).
--
-- Cách chạy:  psql -d tizia -f migrations/postgres/001_schema.sql
-- ============================================================

CREATE EXTENSION IF NOT EXISTS citext;
CREATE EXTENSION IF NOT EXISTS vector;   -- pgvector (semantic search Phase 2+); bỏ nếu chưa cài

-- ── Tenant root ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS schools (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  code        TEXT   NOT NULL UNIQUE,
  name        TEXT   NOT NULL,
  domain      TEXT,                       -- email domain → SSO auto-map
  created_at  BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_schools_code   ON schools(code);
CREATE INDEX IF NOT EXISTS idx_schools_domain ON schools(domain);

-- Helper: lấy school_id hiện tại từ session GUC. Trả 0 nếu chưa set
-- (0 = không match row nào → fail-closed, không leak cross-tenant).
CREATE OR REPLACE FUNCTION current_school_id() RETURNS BIGINT AS $$
  SELECT COALESCE(NULLIF(current_setting('app.current_school_id', true), '')::BIGINT, 0);
$$ LANGUAGE sql STABLE;

-- ── Users ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id     BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  username      CITEXT NOT NULL UNIQUE,
  display_name  TEXT   NOT NULL,
  password_hash TEXT,                      -- NULL cho user thuần SSO
  role          TEXT   NOT NULL DEFAULT 'student',  -- pupil | student | teacher
  email         TEXT,
  avatar_url    TEXT,
  age           INTEGER,
  created_at    BIGINT NOT NULL,
  last_login    BIGINT
);
CREATE INDEX IF NOT EXISTS idx_users_school ON users(school_id);

-- ── Sessions ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS sessions (
  token       TEXT   PRIMARY KEY,
  school_id   BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  BIGINT NOT NULL,
  expires_at  BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_sessions_user    ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_expires ON sessions(expires_at);

-- ── OAuth identities ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS oauth_identities (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id   BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  user_id     BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider    TEXT   NOT NULL,            -- google | microsoft | github
  subject     TEXT   NOT NULL,            -- stable 'sub' từ provider
  email       TEXT,
  created_at  BIGINT NOT NULL,
  UNIQUE(provider, subject)
);
CREATE INDEX IF NOT EXISTS idx_oauth_user ON oauth_identities(user_id);

-- ── Classes ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS classes (
  id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id     BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  code          TEXT   NOT NULL UNIQUE,
  name          TEXT   NOT NULL,
  teacher_name  TEXT   NOT NULL DEFAULT 'GV',
  created_at    BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_classes_code   ON classes(code);
CREATE INDEX IF NOT EXISTS idx_classes_school ON classes(school_id);

-- ── Attempts ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS attempts (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id    BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  version      TEXT   NOT NULL,
  player_name  TEXT   NOT NULL DEFAULT 'Ẩn danh',
  score        INTEGER NOT NULL,
  correct      INTEGER NOT NULL,
  total        INTEGER NOT NULL,
  duration_ms  INTEGER,
  details      JSONB,                      -- SQLite lưu TEXT JSON → Postgres JSONB
  class_code   TEXT,
  level_n      INTEGER,
  created_at   BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_attempts_version_score ON attempts(version, score DESC, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempts_recent        ON attempts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempts_class         ON attempts(class_code, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempts_school        ON attempts(school_id, created_at DESC);

-- ── Achievements ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS achievements (
  id           BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id    BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  player_name  TEXT   NOT NULL,
  badge_id     TEXT   NOT NULL,
  unlocked_at  BIGINT NOT NULL,
  UNIQUE(player_name, badge_id)
);
CREATE INDEX IF NOT EXISTS idx_ach_player ON achievements(player_name);

-- ── Requests (inbox "Ban điều hành AI") ──────────────────────
CREATE TABLE IF NOT EXISTS requests (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id   BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  domain      TEXT   NOT NULL,
  type        TEXT   NOT NULL DEFAULT 'other',
  title       TEXT   NOT NULL,
  detail      TEXT,
  student     TEXT   NOT NULL DEFAULT 'Ẩn danh',
  status      TEXT   NOT NULL DEFAULT 'pending',
  votes       INTEGER NOT NULL DEFAULT 1,
  admin_note  TEXT,
  created_at  BIGINT NOT NULL,
  updated_at  BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_requests_domain ON requests(domain, votes DESC, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_requests_school ON requests(school_id, votes DESC, created_at DESC);

-- ── AI token usage ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_token_usage (
  id                BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  school_id         BIGINT NOT NULL DEFAULT 1 REFERENCES schools(id),
  user_id           BIGINT,
  provider          TEXT   NOT NULL,
  model             TEXT   NOT NULL,
  endpoint          TEXT   NOT NULL,
  prompt_tokens     INTEGER NOT NULL DEFAULT 0,
  completion_tokens INTEGER NOT NULL DEFAULT 0,
  cost_usd_micros   BIGINT  NOT NULL DEFAULT 0,
  duration_ms       INTEGER,
  status            TEXT   NOT NULL,
  created_at        BIGINT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_ai_usage_school_time ON ai_token_usage(school_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_usage_user_time   ON ai_token_usage(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_usage_status      ON ai_token_usage(status, created_at DESC);

-- ============================================================
-- Seed default tenant (id=1). GENERATED ALWAYS cần OVERRIDING để chèn id cố định.
-- ============================================================
INSERT INTO schools (id, code, name, created_at)
OVERRIDING SYSTEM VALUE
VALUES (1, 'tizia-default', 'Tizia', (EXTRACT(EPOCH FROM now()) * 1000)::BIGINT)
ON CONFLICT (id) DO NOTHING;

-- Advance identity sequence qua id đã seed thủ công, nếu không INSERT school tiếp
-- theo sẽ sinh id=1 trùng khoá (GENERATED ALWAYS sequence vẫn ở 1). Bắt buộc.
SELECT setval(pg_get_serial_sequence('schools', 'id'), (SELECT MAX(id) FROM schools));

-- ============================================================
-- Row-Level Security — fail-closed theo current_school_id()
-- ============================================================
-- App middleware mỗi request:  SET app.current_school_id = '<id từ session>';
-- Superuser/owner BYPASSRLS để chạy migration + job nền cross-tenant.

DO $$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY[
    'users','sessions','oauth_identities','classes',
    'attempts','achievements','requests','ai_token_usage'
  ] LOOP
    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY;', t);
    EXECUTE format('ALTER TABLE %I FORCE ROW LEVEL SECURITY;', t);
    EXECUTE format($f$
      CREATE POLICY tenant_isolation ON %I
        USING (school_id = current_school_id())
        WITH CHECK (school_id = current_school_id());
    $f$, t);
  END LOOP;
END $$;

-- ============================================================
-- App role (least privilege — KHÔNG superuser, RLS áp dụng đầy đủ)
-- ============================================================
-- CREATE ROLE tizia_app LOGIN PASSWORD '<từ secrets manager>';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO tizia_app;
-- GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO tizia_app;
-- (tizia_app KHÔNG có BYPASSRLS → RLS enforce. Migration chạy bằng owner role riêng.)
