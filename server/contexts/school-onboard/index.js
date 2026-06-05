// ============================================================
// School Onboarding Wizard — admin tạo trường mới trong 10 phút
// ============================================================
// Steps server-side:
// 1. createSchool (code, name, domain, tagline, icon)
// 2. seedClasses (lop1, lop2, ...)
// 3. import students (CSV-like: username,display_name,grade,class_code)
// ============================================================

import { db, createSchool, getSchoolByCode, createClass, getClassByCode } from '../../db.js';
import { requireAuth } from '../identity/auth.js';

// schools.tagline + icon là metadata, dùng table riêng nếu chưa có.
db.exec(`
  CREATE TABLE IF NOT EXISTS school_meta (
    school_id   INTEGER PRIMARY KEY,
    tagline     TEXT,
    icon        TEXT,
    cover_url   TEXT,
    settings    TEXT NOT NULL DEFAULT '{}',
    onboarded_at INTEGER,
    FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
  );
`);

function isAdmin(user) { return user && user.role === 'admin'; }

export function attachSchoolOnboard(router) {
  // Tạo trường mới — chỉ admin
  router.post('/api/admin/school/create', requireAuth, (req, res) => {
    if (!isAdmin(req.user)) return res.status(403).json({ error: 'admin_only' });
    const b = req.body || {};
    const code = String(b.code || '').trim().toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 30);
    const name = String(b.name || '').trim().slice(0, 100);
    const domain = String(b.domain || '').trim().toLowerCase().slice(0, 40) || null;
    const tagline = String(b.tagline || '').slice(0, 200);
    const icon = String(b.icon || '🏫').slice(0, 8);
    if (!code || !name) return res.status(400).json({ error: 'code_and_name_required' });
    if (getSchoolByCode(code)) return res.status(409).json({ error: 'code_taken' });
    const row = createSchool({ code, name, domain });
    db.prepare(`INSERT OR REPLACE INTO school_meta (school_id, tagline, icon, onboarded_at) VALUES (?, ?, ?, ?)`)
      .run(row.id, tagline, icon, Date.now());
    res.json({ ok: true, school: { ...row, tagline, icon } });
  });

  // Seed danh sách lớp mặc định (Lớp 1–12 hoặc tùy chỉnh)
  router.post('/api/admin/school/:school_id/seed-classes', requireAuth, (req, res) => {
    if (!isAdmin(req.user)) return res.status(403).json({ error: 'admin_only' });
    const schoolId = Number(req.params.school_id);
    const list = Array.isArray(req.body?.classes) ? req.body.classes : [];
    if (list.length === 0) return res.status(400).json({ error: 'classes_required' });
    let created = 0;
    for (const c of list) {
      const code = String(c.code || '').trim().toUpperCase().slice(0, 12);
      const name = String(c.name || '').trim().slice(0, 60);
      const teacher = String(c.teacher_name || '').trim().slice(0, 40);
      if (!code || !name) continue;
      try {
        if (!getClassByCode(code)) {
          createClass({ code, name, teacher_name: teacher, school_id: schoolId });
          created++;
        }
      } catch (e) {
        // skip dup
      }
    }
    res.json({ ok: true, created, total: list.length });
  });

  // Import HS — body { school_id, students: [{username, display_name, grade, class_code}] }
  // Tạo user role=pupil, tự gen password = mã ngẫu nhiên 6 chữ số (admin tự thông báo).
  router.post('/api/admin/school/:school_id/import-students', requireAuth, async (req, res) => {
    if (!isAdmin(req.user)) return res.status(403).json({ error: 'admin_only' });
    const { createUser, isUsernameTaken } = await import('../../db.js');
    const crypto = await import('node:crypto');
    const schoolId = Number(req.params.school_id);
    const students = Array.isArray(req.body?.students) ? req.body.students : [];
    if (students.length === 0) return res.status(400).json({ error: 'students_required' });
    const created = [];
    const skipped = [];
    for (const s of students) {
      const username = String(s.username || '').trim().toLowerCase().slice(0, 24);
      const display_name = String(s.display_name || '').trim().slice(0, 60);
      const grade = Number(s.grade) || null;
      if (!username || !display_name) { skipped.push({ ...s, reason: 'missing fields' }); continue; }
      if (isUsernameTaken(username)) { skipped.push({ ...s, reason: 'username_taken' }); continue; }
      // Generate 6-digit password
      const pwd = String(Math.floor(100000 + Math.random() * 900000));
      const salt = crypto.randomBytes(16).toString('hex');
      const hash = crypto.scryptSync(pwd, salt, 32).toString('hex');
      const password_hash = `scrypt$${salt}$${hash}`;
      try {
        const user = createUser({
          username, display_name, password_hash,
          role: 'pupil', school_id: schoolId, grade,
        });
        created.push({ username, display_name, password: pwd, id: user?.id });
      } catch (e) {
        skipped.push({ ...s, reason: e.message });
      }
    }
    res.json({ ok: true, created, skipped, total: students.length });
  });

  // Get school onboard status — admin xem progress
  router.get('/api/admin/school/:school_id/status', requireAuth, (req, res) => {
    if (!isAdmin(req.user)) return res.status(403).json({ error: 'admin_only' });
    const schoolId = Number(req.params.school_id);
    const sch = db.prepare(`SELECT s.*, m.tagline, m.icon, m.onboarded_at
      FROM schools s LEFT JOIN school_meta m ON m.school_id = s.id WHERE s.id = ?`).get(schoolId);
    if (!sch) return res.status(404).json({ error: 'not_found' });
    const classCount = db.prepare(`SELECT COUNT(*) AS n FROM classes WHERE school_id = ?`).get(schoolId).n;
    const userCount  = db.prepare(`SELECT COUNT(*) AS n FROM users WHERE school_id = ?`).get(schoolId).n;
    res.json({ ok: true, school: sch, classes: classCount, users: userCount });
  });
}
