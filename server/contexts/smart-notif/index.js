// ============================================================
// Smart Notifications — best-time-to-nudge analytics
// ============================================================
// Log mỗi hoạt động user (thông qua /api/engagement/ping hoặc bất kỳ POST
// auth nào — caller phải bắn). Tính giờ tối ưu nhắc dựa lịch sử:
// - Đếm số session theo (day_of_week, hour) trong 30 ngày gần nhất.
// - Top 3 (dow, hour) → best time slots.
// API trả lịch nhắc + endpoint subscribe push (placeholder).
// ============================================================

import { db } from '../../db.js';
import { requireAuth } from '../identity/auth.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS user_activity (
    user_id      INTEGER NOT NULL,
    at           INTEGER NOT NULL,
    kind         TEXT NOT NULL DEFAULT 'visit',
    PRIMARY KEY (user_id, at)
  );
  CREATE INDEX IF NOT EXISTS idx_user_activity_user ON user_activity(user_id, at DESC);

  CREATE TABLE IF NOT EXISTS notif_subscriptions (
    user_id      INTEGER PRIMARY KEY,
    endpoint     TEXT,                         -- web push endpoint
    p256dh       TEXT,
    auth         TEXT,
    enabled      INTEGER NOT NULL DEFAULT 1,
    updated_at   INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

export function logActivity(userId, kind = 'visit') {
  if (!userId) return;
  try {
    db.prepare(`INSERT OR IGNORE INTO user_activity (user_id, at, kind) VALUES (?, ?, ?)`)
      .run(userId, Date.now(), kind);
  } catch {}
}

const TZ = 7 * 3600_000;

function bestSlots(userId) {
  const since = Date.now() - 30 * 86400_000;
  const rows = db.prepare(`SELECT at FROM user_activity WHERE user_id = ? AND at >= ?`)
    .all(userId, since);
  const counts = new Map();   // key 'dow:hour' → count
  for (const r of rows) {
    const d = new Date(r.at + TZ);
    const key = `${d.getUTCDay()}:${d.getUTCHours()}`;
    counts.set(key, (counts.get(key) || 0) + 1);
  }
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, 5).map(([k, c]) => {
    const [dow, h] = k.split(':').map(Number);
    return { day_of_week: dow, hour: h, count: c };
  });
}

export function attachSmartNotif(router) {
  router.get('/api/notif/best-slots', requireAuth, (req, res) => {
    const slots = bestSlots(req.user.id);
    const next_reminder = slots[0]
      ? `${['CN','T2','T3','T4','T5','T6','T7'][slots[0].day_of_week]} ${slots[0].hour}:00`
      : null;
    res.json({ ok: true, slots, next_reminder });
  });

  // Heartbeat — caller (FE) gửi mỗi phiên session start
  router.post('/api/notif/heartbeat', requireAuth, (req, res) => {
    logActivity(req.user.id, String(req.body?.kind || 'visit').slice(0, 20));
    res.json({ ok: true });
  });

  // Subscribe Web Push (placeholder — cần VAPID setup)
  router.post('/api/notif/subscribe', requireAuth, (req, res) => {
    const b = req.body || {};
    db.prepare(`
      INSERT INTO notif_subscriptions (user_id, endpoint, p256dh, auth, enabled, updated_at)
      VALUES (?, ?, ?, ?, 1, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        endpoint = excluded.endpoint, p256dh = excluded.p256dh,
        auth = excluded.auth, enabled = 1, updated_at = excluded.updated_at
    `).run(req.user.id, String(b.endpoint || '').slice(0, 500),
           String(b.p256dh || '').slice(0, 200),
           String(b.auth || '').slice(0, 200), Date.now());
    res.json({ ok: true });
  });
}
