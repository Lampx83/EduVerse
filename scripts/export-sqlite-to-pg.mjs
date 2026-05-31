#!/usr/bin/env node
// ============================================================
// SQLite → Postgres data export (DRY-RUN, read-only)
// ============================================================
// Đọc DB SQLite hiện tại và sinh ra 1 file .sql gồm INSERT statements tương thích
// schema Postgres (migrations/postgres/001_schema.sql). KHÔNG kết nối Postgres,
// KHÔNG sửa SQLite — chỉ xuất file để review trước khi cutover Phase 1.
//
// Dùng:
//   node scripts/export-sqlite-to-pg.mjs [--db data/tizia.db] [--out migrations/postgres/data-export.sql]
//
// Sau khi review, nạp vào Postgres:
//   psql -d eduverse -f migrations/postgres/001_schema.sql
//   psql -d eduverse -f migrations/postgres/data-export.sql
//
// Ghi chú thiết kế:
//   * Bảng con (sessions, oauth_identities, achievements) trong SQLite CHƯA có
//     school_id (Phase 0 chỉ thêm vào users/classes/attempts/requests). Script
//     DERIVE school_id: sessions/oauth từ users qua user_id; achievements mặc
//     định 1 (chưa có FK tin cậy theo player_name). Hiện mọi data là tenant 1.
//   * Bảng PK identity (GENERATED ALWAYS) cần OVERRIDING SYSTEM VALUE để giữ
//     nguyên id gốc → FK không gãy. Cuối file setval() đẩy sequence qua max(id).
//   * attempts.details: SQLite lưu TEXT JSON → Postgres JSONB (cast ::jsonb).
// ============================================================

import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';

// ── Parse args ──
const args = process.argv.slice(2);
function argVal(flag, dflt) {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt;
}
const DB_PATH  = path.resolve(argVal('--db', 'data/tizia.db'));
const OUT_PATH = path.resolve(argVal('--out', 'migrations/postgres/data-export.sql'));

if (!fs.existsSync(DB_PATH)) {
  console.error(`[export] SQLite không tồn tại: ${DB_PATH}`);
  process.exit(1);
}

const db = new Database(DB_PATH, { readonly: true, fileMustExist: true });

// ── SQL literal formatting ──
function lit(v) {
  if (v === null || v === undefined) return 'NULL';
  if (typeof v === 'number') return Number.isFinite(v) ? String(v) : 'NULL';
  if (typeof v === 'bigint') return String(v);
  if (Buffer.isBuffer(v)) return `'\\x${v.toString('hex')}'`;   // bytea
  return `'${String(v).replace(/'/g, "''")}'`;
}
function jsonLit(v) {
  if (v === null || v === undefined || v === '') return 'NULL';
  // validate JSON; nếu hỏng giữ NULL để không vỡ JSONB
  try { JSON.parse(v); } catch { return 'NULL'; }
  return `'${String(v).replace(/'/g, "''")}'::jsonb`;
}

// ── Per-table export config ──
// Mỗi entry: SELECT trả ĐÚNG bộ cột Postgres theo thứ tự, kèm school_id đã derive.
// `identity:true` → bảng PK GENERATED ALWAYS, cần OVERRIDING SYSTEM VALUE.
// `jsonCols` → cột cast ::jsonb. `seqCol` → cột để setval sau khi nạp.
const TABLES = [
  {
    name: 'schools', identity: true, seqCol: 'id',
    cols: ['id', 'code', 'name', 'domain', 'created_at'],
    select: `SELECT id, code, name, domain, created_at FROM schools ORDER BY id`,
  },
  {
    name: 'users', identity: true, seqCol: 'id',
    cols: ['id', 'school_id', 'username', 'display_name', 'password_hash', 'role', 'email', 'avatar_url', 'age', 'created_at', 'last_login'],
    select: `SELECT id, COALESCE(school_id,1) AS school_id, username, display_name,
                    password_hash, role, email, avatar_url, age, created_at, last_login
             FROM users ORDER BY id`,
  },
  {
    name: 'sessions', identity: false,
    cols: ['token', 'school_id', 'user_id', 'created_at', 'expires_at'],
    select: `SELECT s.token, COALESCE(u.school_id,1) AS school_id, s.user_id, s.created_at, s.expires_at
             FROM sessions s LEFT JOIN users u ON u.id = s.user_id`,
  },
  {
    name: 'oauth_identities', identity: true, seqCol: 'id',
    cols: ['id', 'school_id', 'user_id', 'provider', 'subject', 'email', 'created_at'],
    select: `SELECT o.id, COALESCE(u.school_id,1) AS school_id, o.user_id, o.provider, o.subject, o.email, o.created_at
             FROM oauth_identities o LEFT JOIN users u ON u.id = o.user_id ORDER BY o.id`,
  },
  {
    name: 'classes', identity: true, seqCol: 'id',
    cols: ['id', 'school_id', 'code', 'name', 'teacher_name', 'created_at'],
    select: `SELECT id, COALESCE(school_id,1) AS school_id, code, name, teacher_name, created_at FROM classes ORDER BY id`,
  },
  {
    name: 'attempts', identity: true, seqCol: 'id', jsonCols: ['details'],
    cols: ['id', 'school_id', 'version', 'player_name', 'score', 'correct', 'total', 'duration_ms', 'details', 'class_code', 'level_n', 'created_at'],
    select: `SELECT id, COALESCE(school_id,1) AS school_id, version, player_name, score, correct, total,
                    duration_ms, details, class_code, level_n, created_at
             FROM attempts ORDER BY id`,
  },
  {
    name: 'achievements', identity: true, seqCol: 'id',
    cols: ['id', 'school_id', 'player_name', 'badge_id', 'unlocked_at'],
    select: `SELECT id, 1 AS school_id, player_name, badge_id, unlocked_at FROM achievements ORDER BY id`,
  },
  {
    name: 'requests', identity: true, seqCol: 'id',
    cols: ['id', 'school_id', 'domain', 'type', 'title', 'detail', 'student', 'status', 'votes', 'admin_note', 'created_at', 'updated_at'],
    select: `SELECT id, COALESCE(school_id,1) AS school_id, domain, type, title, detail, student, status, votes, admin_note, created_at, updated_at
             FROM requests ORDER BY id`,
  },
  {
    name: 'ai_token_usage', identity: true, seqCol: 'id',
    cols: ['id', 'school_id', 'user_id', 'provider', 'model', 'endpoint', 'prompt_tokens', 'completion_tokens', 'cost_usd_micros', 'duration_ms', 'status', 'created_at'],
    select: `SELECT id, COALESCE(school_id,1) AS school_id, user_id, provider, model, endpoint,
                    prompt_tokens, completion_tokens, cost_usd_micros, duration_ms, status, created_at
             FROM ai_token_usage ORDER BY id`,
  },
];

function tableExists(name) {
  return !!db.prepare(`SELECT 1 FROM sqlite_master WHERE type='table' AND name=?`).get(name);
}

// ── Build output ──
const out = [];
out.push('-- ============================================================');
out.push('-- EduVerse data export: SQLite → Postgres');
out.push(`-- Source: ${DB_PATH}`);
out.push('-- Generated by scripts/export-sqlite-to-pg.mjs (dry-run, read-only)');
out.push('-- Nạp SAU khi đã chạy 001_schema.sql. Bọc trong 1 transaction.');
out.push('-- ============================================================');
out.push('BEGIN;');
out.push('SET session_replication_role = replica;  -- tạm tắt FK + RLS-as-owner để bulk load');
out.push('');

const summary = [];
for (const t of TABLES) {
  if (!tableExists(t.name)) {
    out.push(`-- (bỏ qua ${t.name}: không tồn tại trong SQLite)`);
    summary.push(`${t.name}: 0 (absent)`);
    continue;
  }
  let rows;
  try {
    rows = db.prepare(t.select).all();
  } catch (e) {
    out.push(`-- LỖI đọc ${t.name}: ${e.message}`);
    summary.push(`${t.name}: ERROR`);
    continue;
  }
  summary.push(`${t.name}: ${rows.length}`);
  if (rows.length === 0) {
    out.push(`-- ${t.name}: 0 rows`);
    out.push('');
    continue;
  }
  const colList = t.cols.join(', ');
  const overriding = t.identity ? ' OVERRIDING SYSTEM VALUE' : '';
  out.push(`-- ${t.name}: ${rows.length} rows`);
  for (const row of rows) {
    const vals = t.cols.map((c) =>
      (t.jsonCols && t.jsonCols.includes(c)) ? jsonLit(row[c]) : lit(row[c])
    );
    // ON CONFLICT DO NOTHING → idempotent + re-runnable, và bỏ qua school id=1 đã
    // được 001_schema.sql seed sẵn (tránh duplicate pkey làm rollback cả transaction).
    out.push(`INSERT INTO ${t.name} (${colList})${overriding} VALUES (${vals.join(', ')}) ON CONFLICT DO NOTHING;`);
  }
  out.push('');
}

// ── Advance identity sequences ──
out.push('-- Đẩy identity sequence qua max(id) đã chèn thủ công');
for (const t of TABLES) {
  if (t.identity && t.seqCol && tableExists(t.name)) {
    out.push(`SELECT setval(pg_get_serial_sequence('${t.name}', '${t.seqCol}'), GREATEST((SELECT COALESCE(MAX(${t.seqCol}),1) FROM ${t.name}), 1));`);
  }
}
out.push('');
out.push('SET session_replication_role = DEFAULT;');
out.push('COMMIT;');
out.push('');

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, out.join('\n'), 'utf8');
db.close();

console.log('[export] DONE (read-only, không sửa gì SQLite)');
console.log(`[export] Output: ${OUT_PATH}`);
console.log('[export] Row counts:');
for (const s of summary) console.log(`  - ${s}`);
console.log('\n[export] Nạp vào Postgres:');
console.log(`  psql -d eduverse -f migrations/postgres/001_schema.sql`);
console.log(`  psql -d eduverse -f ${path.relative(process.cwd(), OUT_PATH)}`);
