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
    created_at   INTEGER NOT NULL
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
`);

const insertAttemptStmt = db.prepare(`
  INSERT INTO attempts (version, player_name, score, correct, total, duration_ms, details, created_at)
  VALUES (@version, @player_name, @score, @correct, @total, @duration_ms, @details, @created_at)
`);

const leaderboardStmt = db.prepare(`
  SELECT id, player_name, score, correct, total, duration_ms, created_at
  FROM attempts
  WHERE version = @version
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
  WHERE version = @version
`);

const recentStmt = db.prepare(`
  SELECT id, version, player_name, score, correct, total, created_at
  FROM attempts
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
  WHERE version = @version
  GROUP BY bucket
  ORDER BY bucket
`);

export function insertAttempt(row) {
  const info = insertAttemptStmt.run(row);
  return { id: info.lastInsertRowid, createdAt: row.created_at };
}

export function getLeaderboard(version, limit = 10) {
  return leaderboardStmt.all({ version, limit });
}

export function getStats(version) {
  return statsStmt.get({ version }) || { total_attempts: 0, avg_score: 0, best_score: 0, perfect_count: 0 };
}

export function getRecent(limit = 20) {
  return recentStmt.all({ limit });
}

export function getAllAttempts() {
  return allAttemptsStmt.all();
}

export function getHistogram(version) {
  return histogramStmt.all({ version });
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

console.log(`[db] SQLite open at ${dbPath}`);
