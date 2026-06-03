// ============================================================
// Skills context (Phase 2) — grant skills cho user khi đạt mốc, đọc cây năng lực.
//
// Catalog (competencies + skills) seed bởi server/db.js + scripts/migrate-skills-catalog.js.
// Mapping `space_id → [skill_codes]` đọc từ server/skills-mapping.json (sinh bởi script).
//
// Grant policy: score >= GRANT_THRESHOLD (mặc định 70). UNIQUE(user_id, skill_id) →
// 1 skill chỉ được tính lần đầu tiên đạt. Endpoint trả về `newly_granted` để FE
// hiện toast "Mở khoá kỹ năng: ...".
// ============================================================

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { db } from './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MAPPING_PATH = path.resolve(__dirname, 'skills-mapping.json');

export const GRANT_THRESHOLD = Number(process.env.SKILLS_GRANT_THRESHOLD) || 70;
const VALID_SOURCE_TYPES = new Set(['attempt', 'scenario_run', 'lesson', 'mini_game', 'manual']);
const VALID_DOMAINS = new Set(['pharmacy', 'secondary', 'it', 'primary', 'preschool', 'highschool']);

// Load mapping at module init. Nếu file chưa tồn tại (chưa chạy migration) → log
// warning + dùng object rỗng → mọi grant call sẽ no-op cho tới khi mapping có.
let SPACE_SKILLS = {};
try {
  if (fs.existsSync(MAPPING_PATH)) {
    SPACE_SKILLS = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf8'));
    const nKeys = Object.keys(SPACE_SKILLS).length;
    console.log(`[skills] loaded mapping: ${nKeys} space → skill_codes`);
  } else {
    console.warn(`[skills] mapping file missing — chạy: node scripts/migrate-skills-catalog.js`);
  }
} catch (e) {
  console.warn(`[skills] failed to load mapping: ${e.message}`);
}

// Reload mapping at runtime (admin hook nếu cần). Hiện chưa expose route, để
// dành Phase 4 khi có admin UI quản lý catalog.
export function reloadSkillsMapping() {
  try {
    SPACE_SKILLS = JSON.parse(fs.readFileSync(MAPPING_PATH, 'utf8'));
    return Object.keys(SPACE_SKILLS).length;
  } catch (e) {
    console.warn(`[skills] reload failed: ${e.message}`);
    return 0;
  }
}

// ---- Prepared statements ----
const lookupSkillIdsByCodes = db.prepare(`
  SELECT id, code FROM skills WHERE code IN (SELECT value FROM json_each(?))
`);

const insertUserSkill = db.prepare(`
  INSERT OR IGNORE INTO user_skills
    (school_id, user_id, skill_id, earned_at, source_type, source_id, score)
  VALUES (@school_id, @user_id, @skill_id, @earned_at, @source_type, @source_id, @score)
`);

const getUserSkillsStmt = db.prepare(`
  SELECT
    s.id           AS skill_id,
    s.code         AS skill_code,
    s.name         AS skill_name,
    s.domain       AS skill_domain,
    s.grade_min,
    s.grade_max,
    c.id           AS competency_id,
    c.code         AS competency_code,
    c.name         AS competency_name,
    c.kind         AS competency_kind,
    c.sort_order   AS competency_sort,
    us.earned_at,
    us.source_type,
    us.source_id,
    us.score
  FROM user_skills us
  JOIN skills s       ON s.id = us.skill_id
  JOIN competencies c ON c.id = s.competency_id
  WHERE us.user_id = ?
  ORDER BY c.sort_order, s.name
`);

const listCompetenciesStmt = db.prepare(`
  SELECT id, code, kind, name, description, sort_order FROM competencies ORDER BY sort_order
`);

const countSkillsPerCompetencyStmt = db.prepare(`
  SELECT competency_id, COUNT(*) AS n FROM skills GROUP BY competency_id
`);

// ---- Public API ----

/**
 * Grant tất cả skill thuộc 1 space cho user. No-op nếu score < threshold.
 * Trả về { newly_granted: [{code,name,competency}], already_had: [...] }.
 */
export function grantSkillsForSpace({ user_id, school_id, domain, space_id, score, source_type, source_id }) {
  if (!user_id) return { error: 'user_id required' };
  if (!VALID_DOMAINS.has(domain)) return { error: 'invalid domain' };
  if (!space_id) return { error: 'space_id required' };
  if (!Number.isFinite(score)) return { error: 'score must be number' };
  if (!VALID_SOURCE_TYPES.has(source_type)) return { error: 'invalid source_type' };

  if (score < GRANT_THRESHOLD) {
    return { granted_count: 0, skipped_reason: `score ${score} < threshold ${GRANT_THRESHOLD}` };
  }

  const key = `${domain}/${space_id}`;
  const codes = SPACE_SKILLS[key] || [];
  if (codes.length === 0) {
    return { granted_count: 0, skipped_reason: `no skills mapped for ${key}` };
  }

  const rows = lookupSkillIdsByCodes.all(JSON.stringify(codes));
  if (rows.length === 0) {
    return { granted_count: 0, skipped_reason: `skill codes not found in DB (catalog out of sync?)` };
  }

  const now = Date.now();
  const newly = [];
  const already = [];
  const tx = db.transaction(() => {
    for (const r of rows) {
      const info = insertUserSkill.run({
        school_id: school_id ?? 1,
        user_id,
        skill_id: r.id,
        earned_at: now,
        source_type,
        source_id: source_id != null ? String(source_id).slice(0, 80) : null,
        score: Math.round(score),
      });
      if (info.changes > 0) newly.push(r.code);
      else already.push(r.code);
    }
  });
  tx();

  // Enrich newly với name + competency cho FE hiện toast đẹp.
  const enriched = newly.length
    ? db.prepare(`
        SELECT s.code, s.name, c.code AS comp_code, c.name AS comp_name
        FROM skills s JOIN competencies c ON c.id = s.competency_id
        WHERE s.code IN (SELECT value FROM json_each(?))
      `).all(JSON.stringify(newly))
    : [];

  return {
    granted_count: newly.length,
    newly_granted: enriched,
    already_had_count: already.length,
  };
}

/**
 * Trả cây năng lực + tiến độ của 1 user.
 * Shape: [{ competency: {...}, total_skills, earned_skills: [...] }, ...]
 */
export function getUserSkillTree(user_id) {
  if (!user_id) return [];
  const allComps = listCompetenciesStmt.all();
  const totals = Object.fromEntries(
    countSkillsPerCompetencyStmt.all().map(r => [r.competency_id, r.n])
  );
  const earnedRows = getUserSkillsStmt.all(user_id);

  // Group earned by competency_id
  const byComp = new Map();
  for (const r of earnedRows) {
    if (!byComp.has(r.competency_id)) byComp.set(r.competency_id, []);
    byComp.get(r.competency_id).push({
      code: r.skill_code,
      name: r.skill_name,
      domain: r.skill_domain,
      grade_min: r.grade_min,
      grade_max: r.grade_max,
      earned_at: r.earned_at,
      source_type: r.source_type,
      source_id: r.source_id,
      score: r.score,
    });
  }

  return allComps.map(c => ({
    competency: {
      code: c.code,
      kind: c.kind,
      name: c.name,
      description: c.description,
      sort_order: c.sort_order,
    },
    total_skills: totals[c.id] || 0,
    earned_skills: byComp.get(c.id) || [],
  }));
}

/**
 * Tổng đếm nhanh cho banner "Bạn đã đạt X/Y kỹ năng".
 */
export function getUserSkillSummary(user_id) {
  if (!user_id) return { earned: 0, total: 0 };
  const earned = db.prepare(`SELECT COUNT(*) AS n FROM user_skills WHERE user_id = ?`).get(user_id).n;
  const total = db.prepare(`SELECT COUNT(*) AS n FROM skills`).get().n;
  return { earned, total };
}

/**
 * Trả về skill_codes của 1 space (cho FE highlight chip đã earned).
 */
export function getSpaceSkillCodes(domain, space_id) {
  return SPACE_SKILLS[`${domain}/${space_id}`] || [];
}

// ---- Express routes ----
export function attachSkills(router, { requireAuth }) {
  // GET /api/skills/me — cây năng lực của user đang login.
  router.get('/api/skills/me', requireAuth, (req, res) => {
    const tree = getUserSkillTree(req.user.id);
    const summary = getUserSkillSummary(req.user.id);
    res.json({ summary, tree });
  });

  // GET /api/skills/space?domain=...&space_id=... — list skill_codes của 1 space
  // + flag earned cho FE render chip ✔.
  router.get('/api/skills/space', requireAuth, (req, res) => {
    const domain = String(req.query.domain || '');
    const space_id = String(req.query.space_id || '');
    if (!VALID_DOMAINS.has(domain) || !space_id) {
      return res.status(400).json({ error: 'domain + space_id required' });
    }
    const codes = getSpaceSkillCodes(domain, space_id);
    if (codes.length === 0) return res.json({ skills: [] });
    const rows = db.prepare(`
      SELECT s.code, s.name, c.code AS comp_code, c.name AS comp_name,
        EXISTS(SELECT 1 FROM user_skills us WHERE us.user_id = ? AND us.skill_id = s.id) AS earned
      FROM skills s JOIN competencies c ON c.id = s.competency_id
      WHERE s.code IN (SELECT value FROM json_each(?))
      ORDER BY c.sort_order, s.name
    `).all(req.user.id, JSON.stringify(codes));
    res.json({ skills: rows.map(r => ({ ...r, earned: !!r.earned })) });
  });

  // POST /api/skills/grant — grant skills cho user khi đạt mốc 1 space.
  // Body: { domain, space_id, score, source_type, source_id? }.
  // score là 0..100. Server tự kiểm threshold + idempotent qua UNIQUE.
  router.post('/api/skills/grant', requireAuth, (req, res) => {
    const b = req.body || {};
    const result = grantSkillsForSpace({
      user_id: req.user.id,
      school_id: req.schoolId ?? 1,
      domain: String(b.domain || ''),
      space_id: String(b.space_id || ''),
      score: Number(b.score),
      source_type: String(b.source_type || 'manual'),
      source_id: b.source_id,
    });
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  // GET /api/skills/catalog — toàn bộ catalog (public, không cần auth) để FE
  // render trang giới thiệu khung GDPT 2018.
  router.get('/api/skills/catalog', (req, res) => {
    const comps = listCompetenciesStmt.all();
    const skills = db.prepare(`SELECT code, name, competency_id, domain, grade_min, grade_max FROM skills ORDER BY competency_id, name`).all();
    res.json({ competencies: comps, skills });
  });
}
