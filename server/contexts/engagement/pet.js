// ============================================================
// Pet đồng hành — Trục A engagement (Prodigy-style companion)
// ============================================================
// Mỗi user có 1 pet (chọn lúc onboarding), tích XP qua hoạt động học.
// 3 stage: baby → teen → adult; evolve khi đủ XP. Pet feed bằng coin để +XP.
//
// XP nguồn: claim quest, IRT theta tăng, đạt skill, codelab accepted… (hook
// caller). Pet xuất hiện trên home + campus (trang sau gọi /api/pet/me render).
// ============================================================

import { db, getUserWallet, upsertUserWallet, getUserState, putUserState } from '../../db.js';
import { requireAuth } from '../identity/auth.js';

// Catalog 6 pet — khớp với onboarding-60s.js
const PET_CATALOG = {
  'rong-toan':  { name: 'Rồng Toán',  subject: 'math',     stages: ['🐲','🐉','🐲🔥'], color: '#3b82f6' },
  'phuong-van': { name: 'Phượng Văn', subject: 'literature', stages: ['🦚','🦅','🦅✨'], color: '#ec4899' },
  'cu-anh':     { name: 'Cú Anh',     subject: 'english',  stages: ['🦉','🦅','🦉👑'], color: '#a78bfa' },
  'hoa-ly':     { name: 'Hồ Lý',      subject: 'science',  stages: ['🦊','🦁','🦊🔮'], color: '#f97316' },
  'meo-su':     { name: 'Mèo Sử',     subject: 'history',  stages: ['🐱','🐯','🐱📜'], color: '#fbbf24' },
  'rua-ngam':   { name: 'Rùa Ngẫm',   subject: 'philosophy', stages: ['🐢','🐢💪','🐢🧠'], color: '#10b981' },
};

const XP_PER_STAGE = [0, 200, 800];       // baby 0-199, teen 200-799, adult ≥800
const FEED_COST = 10;                      // coin / lần feed
const FEED_XP   = 25;                      // XP / lần feed
const FEED_COOLDOWN_MS = 4 * 60 * 60 * 1000;  // 4h giữa các lần feed (tránh spam coin)

db.exec(`
  CREATE TABLE IF NOT EXISTS user_pet (
    user_id          INTEGER PRIMARY KEY,
    pet_id           TEXT    NOT NULL,           -- 'rong-toan', 'cu-anh', ...
    nickname         TEXT,
    stage            INTEGER NOT NULL DEFAULT 0, -- 0=baby, 1=teen, 2=adult
    xp               INTEGER NOT NULL DEFAULT 0,
    last_fed_at      INTEGER NOT NULL DEFAULT 0,
    created_at       INTEGER NOT NULL,
    updated_at       INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

const _getPetStmt = db.prepare(`SELECT * FROM user_pet WHERE user_id = ?`);
const _upsertPetStmt = db.prepare(`
  INSERT INTO user_pet (user_id, pet_id, nickname, stage, xp, last_fed_at, created_at, updated_at)
  VALUES (@user_id, @pet_id, @nickname, @stage, @xp, @last_fed_at, @created_at, @updated_at)
  ON CONFLICT(user_id) DO UPDATE SET
    pet_id      = excluded.pet_id,
    nickname    = excluded.nickname,
    stage       = excluded.stage,
    xp          = excluded.xp,
    last_fed_at = excluded.last_fed_at,
    updated_at  = excluded.updated_at
`);

function computeStage(xp) {
  if (xp >= XP_PER_STAGE[2]) return 2;
  if (xp >= XP_PER_STAGE[1]) return 1;
  return 0;
}

function ensurePet(userId) {
  let row = _getPetStmt.get(userId);
  if (row) return row;
  // Auto-create từ pet đã chọn trong onboarding (lưu ở user_state)
  let petId = 'cu-anh';
  try {
    const state = getUserState(userId);
    const fromOnb = state?.['engagement.pet']?.value?.id || state?.['engagement.pet']?.id;
    if (fromOnb && PET_CATALOG[fromOnb]) petId = fromOnb;
  } catch {}
  const now = Date.now();
  _upsertPetStmt.run({
    user_id: userId, pet_id: petId, nickname: null,
    stage: 0, xp: 0, last_fed_at: 0, created_at: now, updated_at: now,
  });
  return _getPetStmt.get(userId);
}

/**
 * Cộng XP cho pet (gọi từ claim quest, codelab accepted, …). Idempotent.
 * Trả new state nếu evolve.
 */
export function addPetXp(userId, xp) {
  if (!userId || !Number.isFinite(xp) || xp <= 0) return null;
  const row = ensurePet(userId);
  const newXp = row.xp + Math.floor(xp);
  const newStage = computeStage(newXp);
  const evolved = newStage > row.stage;
  _upsertPetStmt.run({
    ...row, xp: newXp, stage: newStage, updated_at: Date.now(),
  });
  return { xp: newXp, stage: newStage, evolved };
}

function petPayload(row) {
  const cat = PET_CATALOG[row.pet_id] || PET_CATALOG['cu-anh'];
  const stage = row.stage;
  const stageXpStart = XP_PER_STAGE[stage];
  const stageXpEnd   = XP_PER_STAGE[stage + 1] || (stageXpStart + 800);
  const progress = stage >= 2
    ? 100
    : Math.round(((row.xp - stageXpStart) / (stageXpEnd - stageXpStart)) * 100);
  const now = Date.now();
  const feedReadyAt = row.last_fed_at + FEED_COOLDOWN_MS;
  return {
    pet_id: row.pet_id,
    name: row.nickname || cat.name,
    base_name: cat.name,
    subject: cat.subject,
    color: cat.color,
    stage,
    stage_label: ['Em bé', 'Tuổi teen', 'Trưởng thành'][stage] || 'Trưởng thành',
    sprite: cat.stages[stage] || cat.stages[0],
    xp: row.xp,
    stage_xp_start: stageXpStart,
    stage_xp_end: stageXpEnd,
    progress_pct: progress,
    can_feed: now >= feedReadyAt,
    feed_ready_at: feedReadyAt,
    feed_cost: FEED_COST,
    feed_xp: FEED_XP,
  };
}

export function attachPet(router) {
  router.get('/api/pet/me', requireAuth, (req, res) => {
    try {
      const row = ensurePet(req.user.id);
      res.json({ ok: true, pet: petPayload(row), catalog: Object.entries(PET_CATALOG).map(([id, c]) => ({ id, ...c })) });
    } catch (e) {
      console.error('[pet] me error', e);
      res.status(500).json({ ok: false, error: 'internal' });
    }
  });

  // Đổi pet (HS có thể đổi pet 1 lần / tuần — simple: cứ cho đổi free)
  router.post('/api/pet/switch', requireAuth, (req, res) => {
    const petId = String(req.body?.pet_id || '');
    if (!PET_CATALOG[petId]) return res.status(400).json({ ok: false, error: 'unknown_pet' });
    const row = ensurePet(req.user.id);
    _upsertPetStmt.run({ ...row, pet_id: petId, updated_at: Date.now() });
    res.json({ ok: true, pet: petPayload(_getPetStmt.get(req.user.id)) });
  });

  // Đặt nickname
  router.post('/api/pet/nickname', requireAuth, (req, res) => {
    const name = String(req.body?.nickname || '').trim().slice(0, 24);
    const row = ensurePet(req.user.id);
    _upsertPetStmt.run({ ...row, nickname: name || null, updated_at: Date.now() });
    res.json({ ok: true, pet: petPayload(_getPetStmt.get(req.user.id)) });
  });

  // Feed pet — tốn coin, được XP, cooldown 4h
  router.post('/api/pet/feed', requireAuth, (req, res) => {
    const row = ensurePet(req.user.id);
    const now = Date.now();
    if (now < row.last_fed_at + FEED_COOLDOWN_MS) {
      return res.status(400).json({
        ok: false, error: 'cooldown',
        ready_at: row.last_fed_at + FEED_COOLDOWN_MS,
        message: 'Pet chưa đói — hãy quay lại sau.',
      });
    }
    const wallet = getUserWallet(req.user.id) || { coins: 0 };
    if ((wallet.coins || 0) < FEED_COST) {
      return res.status(400).json({ ok: false, error: 'no_coins', need: FEED_COST, have: wallet.coins || 0 });
    }
    upsertUserWallet(req.user.id, {
      coins: (wallet.coins || 0) - FEED_COST,
    }, { monotonic: false });
    const newXp = row.xp + FEED_XP;
    const newStage = computeStage(newXp);
    _upsertPetStmt.run({
      ...row, xp: newXp, stage: newStage, last_fed_at: now, updated_at: now,
    });
    res.json({
      ok: true,
      gained: { xp: FEED_XP, coins: -FEED_COST },
      evolved: newStage > row.stage,
      pet: petPayload(_getPetStmt.get(req.user.id)),
    });
  });
}

export { PET_CATALOG };
