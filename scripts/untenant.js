#!/usr/bin/env node
// ============================================================
// untenant.js — Migration: gỡ multi-tenant SaaS khỏi DB
// ============================================================
// Pivot 2026-06-08: Tizia bỏ multi-tenant, về B2C single-product.
// Script này drop:
//   - 3 bảng tenant: schools, school_codes, school_code_redemptions
//   - Cột school_id ở 14 bảng (users, classes, attempts, requests,
//     notifications, user_skills, ai_lesson_content, ai_token_usage,
//     ai_prompt_log, question_attempts, srs_cards, ai_decisions,
//     analytics_events, outbox_events, team_quests, ugc_quests)
//   - Indexes idx_*_school
//
// GIỮ:
//   - Bảng school_admins (key domain_id STRING — campus admin, KHÔNG tenant)
//   - Cột enrolled_domain, school_name trên users
//
// Idempotent: kiểm cột/bảng tồn tại trước khi drop. Chạy nhiều lần OK.
// Cách chạy trên prod:
//   docker exec -it node-sqlite node /app/scripts/untenant.js
// ============================================================

import Database from 'better-sqlite3';
import path from 'node:path';

const DB_PATH = process.env.DB_PATH
  || (process.env.DATA_DIR ? path.join(process.env.DATA_DIR, 'tizia.db') : './data/tizia.db');

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = OFF'); // tạm tắt FK để drop column không vướng

console.log(`[untenant] opening ${DB_PATH}`);

function tableExists(name) {
  return !!db.prepare(`SELECT 1 FROM sqlite_master WHERE type='table' AND name=?`).get(name);
}
function hasColumn(table, col) {
  if (!tableExists(table)) return false;
  return db.prepare(`PRAGMA table_info('${table}')`).all().some(c => c.name === col);
}
function dropColumn(table, col) {
  if (!hasColumn(table, col)) { console.log(`[untenant] skip ${table}.${col} (already gone)`); return; }
  try {
    db.exec(`ALTER TABLE ${table} DROP COLUMN ${col}`);
    console.log(`[untenant] ✓ dropped ${table}.${col}`);
  } catch (e) {
    console.warn(`[untenant] ✗ ${table}.${col} — ${e.message}`);
  }
}
function dropIndex(name) {
  try { db.exec(`DROP INDEX IF EXISTS ${name}`); console.log(`[untenant] ✓ dropped index ${name}`); }
  catch (e) { console.warn(`[untenant] ✗ index ${name} — ${e.message}`); }
}
function dropTable(name) {
  if (!tableExists(name)) { console.log(`[untenant] skip table ${name} (already gone)`); return; }
  try { db.exec(`DROP TABLE ${name}`); console.log(`[untenant] ✓ dropped table ${name}`); }
  catch (e) { console.warn(`[untenant] ✗ table ${name} — ${e.message}`); }
}

const SCHOOL_ID_TABLES = [
  'users', 'classes', 'attempts', 'requests',
  'notifications', 'user_skills',
  'ai_lesson_content', 'ai_token_usage', 'ai_prompt_log',
  'question_attempts', 'srs_cards',
  'ai_decisions', 'analytics_events',
  'outbox_events', 'team_quests', 'ugc_quests',
  'subscriptions', 'invoices', 'payments', 'refunds', 'ledger_entries',
  'webhook_endpoints',
];
const SCHOOL_INDEXES = [
  'idx_users_school', 'idx_classes_school', 'idx_attempts_school', 'idx_requests_school',
  'idx_school_codes_school', 'idx_redemption_user',
  'idx_user_skills_school', 'idx_schools_code', 'idx_schools_domain',
  'idx_qa_school', 'idx_srs_school',
  'idx_ai_usage_school_time', 'idx_ai_log_school_time', 'idx_ai_decisions_school',
  'idx_ae_school_name_ts', 'idx_outbox_school', 'idx_wh_school',
];
const TENANT_TABLES = ['schools', 'school_codes', 'school_code_redemptions', 'school_meta'];

// subscriptions có schema cũ key theo school_id; data cũ là tenant-level vô nghĩa
// cho B2C. Đơn giản nhất: drop hẳn, billing/index.js CREATE TABLE IF NOT EXISTS sẽ
// tạo lại schema mới (per-user) lúc boot.
function dropOldSubscriptions() {
  if (!tableExists('subscriptions')) { console.log('[untenant] skip subscriptions (gone)'); return; }
  if (!hasColumn('subscriptions', 'school_id')) { console.log('[untenant] skip subscriptions (already per-user)'); return; }
  try {
    db.exec('DROP TABLE subscriptions');
    console.log('[untenant] ✓ dropped legacy subscriptions (will be recreated per-user on next boot)');
  } catch (e) { console.warn(`[untenant] ✗ drop subscriptions — ${e.message}`); }
}

const tx = db.transaction(() => {
  console.log('\n[untenant] === Step 1: drop tenant-only tables ===');
  for (const t of TENANT_TABLES) dropTable(t);

  console.log('\n[untenant] === Step 2: drop school_* indexes ===');
  for (const i of SCHOOL_INDEXES) dropIndex(i);

  console.log('\n[untenant] === Step 3: drop legacy subscriptions ===');
  dropOldSubscriptions();

  console.log('\n[untenant] === Step 4: drop school_id columns ===');
  for (const t of SCHOOL_ID_TABLES) {
    if (t === 'subscriptions') continue; // đã xử lí ở step 3
    dropColumn(t, 'school_id');
  }
});

try {
  tx();
  console.log('\n[untenant] ✓ DONE — DB is now single-tenant (B2C)');
  console.log('[untenant] verify with: SELECT name FROM sqlite_master WHERE type=\'table\' AND name LIKE \'school%\';');
  console.log('[untenant]              (should only return \'school_admins\' — campus admin)');
} catch (e) {
  console.error('[untenant] FATAL — rolled back:', e.message);
  process.exit(1);
} finally {
  db.pragma('foreign_keys = ON');
  db.close();
}
