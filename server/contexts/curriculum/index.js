// ============================================================
// Curriculum context — content học (quiz + lý thuyết) lưu trong DB.
// ============================================================
// Trước đây toàn bộ scenario (đề quiz + bài lý thuyết tuần) hardcode trong
// public/js/scenarios/lop*/*.js và FE import trực tiếp. Context này đưa content
// vào bảng curriculum_content để:
//   - Sửa nóng 1 câu sai mà KHÔNG cần deploy lại code.
//   - GV/admin CRUD content qua API/UI.
//   - Query xuyên hệ thống (vd "mọi câu về hàm số bậc 2").
//
// Nguồn gốc (source):
//   - 'seed'  : sinh từ file JS gốc (seed-curriculum.mjs). Re-seed ghi đè được.
//   - 'admin' : GV/admin sửa qua UI. Re-seed KHÔNG ghi đè (giữ bản sửa tay).
//   - 'ai'    : sinh thêm bởi AI lúc chạy (tương lai).
//
// FE đọc qua /api/curriculum/* (Phase 3) nhưng vẫn fallback import JS nếu API
// lỗi/chưa seed → app không bao giờ vỡ.
// ============================================================

import { db } from '../../db.js';
import { requireAuth } from '../identity/auth.js';
import { requireAdmin } from '../admin/index.js';

db.exec(`
  CREATE TABLE IF NOT EXISTS curriculum_content (
    id          TEXT PRIMARY KEY,            -- scenario id, vd 'H10TOAN-w01-quiz'
    subject     TEXT,                        -- subject key, vd 'toan'
    year_level  INTEGER,                     -- 0=Mầm non … 12; null nếu không rõ
    semester    INTEGER,
    week        INTEGER,
    kind        TEXT,                        -- 'quiz' | 'drag' | …
    title       TEXT,
    body        TEXT NOT NULL,               -- JSON: toàn bộ scenario (questions + lesson + meta)
    source      TEXT NOT NULL DEFAULT 'seed',-- seed | admin | ai
    active      INTEGER NOT NULL DEFAULT 1,  -- soft-delete: 0 = ẩn
    updated_at  INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_curriculum_subject
    ON curriculum_content(subject, year_level, semester, week);
  CREATE INDEX IF NOT EXISTS idx_curriculum_active ON curriculum_content(active);
`);

// ── Upsert 1 scenario ──
// Re-seed (source='seed') KHÔNG đè bản đã sửa tay (source='admin'): ON CONFLICT
// chỉ update khi bản hiện tại không phải 'admin'. Bản 'admin'/'ai' upsert thẳng.
const upsertSeedStmt = db.prepare(`
  INSERT INTO curriculum_content (id, subject, year_level, semester, week, kind, title, body, source, active, updated_at)
  VALUES (@id, @subject, @year_level, @semester, @week, @kind, @title, @body, 'seed', 1, @updated_at)
  ON CONFLICT(id) DO UPDATE SET
    subject=@subject, year_level=@year_level, semester=@semester, week=@week,
    kind=@kind, title=@title, body=@body, updated_at=@updated_at
  WHERE curriculum_content.source <> 'admin'
`);
const upsertEditStmt = db.prepare(`
  INSERT INTO curriculum_content (id, subject, year_level, semester, week, kind, title, body, source, active, updated_at)
  VALUES (@id, @subject, @year_level, @semester, @week, @kind, @title, @body, @source, @active, @updated_at)
  ON CONFLICT(id) DO UPDATE SET
    subject=@subject, year_level=@year_level, semester=@semester, week=@week,
    kind=@kind, title=@title, body=@body, source=@source, active=@active, updated_at=@updated_at
`);

function rowFromScenario(sc, source = 'seed', active = 1) {
  return {
    id:         sc.id,
    subject:    sc.subject ?? null,
    year_level: Number.isFinite(sc.yearLevel) ? sc.yearLevel : null,
    semester:   Number.isFinite(sc.semester) ? sc.semester : null,
    week:       Number.isFinite(sc.week) ? sc.week : null,
    kind:       sc.kind ?? 'quiz',
    title:      sc.title ?? null,
    body:       JSON.stringify(sc),
    source,
    active,
    updated_at: Date.now(),
  };
}

/** Upsert 1 scenario. source='seed' giữ nguyên bản admin đã sửa. */
export function upsertContent(scenario, source = 'seed') {
  if (!scenario?.id) return { ok: false, reason: 'no_id' };
  const row = rowFromScenario(scenario, source);
  if (source === 'seed') upsertSeedStmt.run(row);
  else upsertEditStmt.run(row);
  return { ok: true, id: scenario.id };
}

/** Seed nhiều scenario trong 1 transaction. Trả số bản ghi xử lý. */
export const seedMany = db.transaction((scenarios, source = 'seed') => {
  let n = 0;
  for (const sc of scenarios) {
    if (upsertContent(sc, source).ok) n++;
  }
  return n;
});

// ── Đọc ──
const getByIdStmt = db.prepare(`SELECT body FROM curriculum_content WHERE id = ? AND active = 1`);
const getByModuleStmt = db.prepare(`
  SELECT body FROM curriculum_content
   WHERE active = 1 AND id LIKE ? ESCAPE '\\'
   ORDER BY id ASC
`);
const countStmt = db.prepare(`SELECT COUNT(*) AS c FROM curriculum_content WHERE active = 1`);

function likePrefix(moduleId) {
  // moduleId-… ; escape % _ \ trong moduleId để LIKE an toàn
  const esc = String(moduleId).replace(/[\\%_]/g, c => '\\' + c);
  return esc + '-%';
}

export function getContentById(id) {
  const row = getByIdStmt.get(id);
  return row ? JSON.parse(row.body) : null;
}

export function getContentForModule(moduleId) {
  return getByModuleStmt.all(likePrefix(moduleId)).map(r => JSON.parse(r.body));
}

export function curriculumCount() {
  return countStmt.get().c;
}

// ── API ──
export function attachCurriculum(router) {
  // FE đọc danh sách scenario của 1 module (thay getScenariosForModule).
  router.get('/api/curriculum/module/:moduleId', (req, res) => {
    const items = getContentForModule(req.params.moduleId);
    res.json({ ok: true, items, source: 'db' });
  });

  // FE đọc 1 scenario theo id.
  router.get('/api/curriculum/:id', (req, res) => {
    const sc = getContentById(req.params.id);
    if (!sc) return res.status(404).json({ error: 'not_found' });
    res.json({ ok: true, item: sc });
  });

  // ── Admin CRUD ──
  // Sửa nóng 1 scenario (đề + lesson). Body = scenario JSON đầy đủ.
  router.put('/api/curriculum/:id', requireAdmin, (req, res) => {
    const sc = req.body?.scenario || req.body;
    if (!sc || sc.id !== req.params.id) {
      return res.status(400).json({ error: 'id_mismatch', message: 'scenario.id phải khớp :id' });
    }
    upsertContent(sc, 'admin');
    res.json({ ok: true, id: sc.id, source: 'admin' });
  });

  // Tạo mới (admin).
  router.post('/api/curriculum', requireAdmin, (req, res) => {
    const sc = req.body?.scenario || req.body;
    if (!sc?.id) return res.status(400).json({ error: 'no_id' });
    upsertContent(sc, 'admin');
    res.json({ ok: true, id: sc.id, source: 'admin' });
  });

  // Soft-delete (admin) — ẩn khỏi FE, không xoá hẳn để khôi phục được.
  router.delete('/api/curriculum/:id', requireAdmin, (req, res) => {
    const info = db.prepare(`UPDATE curriculum_content SET active = 0, updated_at = ? WHERE id = ?`)
      .run(Date.now(), req.params.id);
    if (info.changes === 0) return res.status(404).json({ error: 'not_found' });
    res.json({ ok: true, id: req.params.id });
  });

  console.log(`[curriculum] routes mounted: /api/curriculum/* (đang có ${curriculumCount()} content trong DB)`);
}
