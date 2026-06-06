#!/usr/bin/env node
// ============================================================
// Seed ScoreUp từ curriculum seed JSON
// ============================================================
//
// Nguồn: docs/curriculum-seeds/<subject>-<grade>.json
//   Schema (xem AUDIT-2026-06-05.md mục 5d):
//   {
//     "version": "gdpt-2018-2022",
//     "grade_level": "highschool|secondary|primary|preschool|he",
//     "grade": "11" | "12" | "1".."9" | "freshman"...,
//     "subject_code": "lich-su" | "toan" | ...,
//     "subject_name": "Lịch sử 11",
//     "total_weeks": 35,
//     "weeks": [
//       { "week_no": 1, "chapter": "...", "topic": "...",
//         "questions": [
//           { "stem": "...", "options": ["A","B","C","D"], "correct_index": 0,
//             "difficulty": 1..5, "bloom_level": 1..6, "explanation": "..." }
//         ]
//       }
//     ]
//   }
//
// Đích: ScoreUp Public API qua `server/integrations/scoreup.js` adapter.
//   - 1 file JSON → 1 subject ScoreUp (idempotent qua external_id="tizia:seed:<grade>:<subject>").
//   - Question external_id: "tizia:seed:<grade>:<subject>:w<NN>:q<NN>"
//   - chapter_id: "Tuần <N>" (Phase 1-3 ScoreUp); khi Phase 4 ready chuyển sang
//     POST /curriculum endpoint riêng (xem TODO ở dưới).
//
// Yêu cầu ScoreUp v1.4.0+ với scope `subjects:write, questions:write`.
//
// Usage:
//   node scripts/seed-scoreup.js docs/curriculum-seeds/lich-su-11.json
//   node scripts/seed-scoreup.js docs/curriculum-seeds/lich-su-11.json --dry-run
//   node scripts/seed-scoreup.js docs/curriculum-seeds/lich-su-11.json --week 5
//   node scripts/seed-scoreup.js docs/curriculum-seeds/ --all          # mọi file *.json
//
// Env: SCOREUP_API_KEY, SCOREUP_BASE_URL (xem .env).
// Log: data/scoreup-seed-log.jsonl (append-only).
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as scoreup from '../server/integrations/scoreup.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const LOG_PATH = path.join(ROOT, 'data', 'scoreup-seed-log.jsonl');

// ── CLI args ──
const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith('--') && !a.includes('=')));
const args = Object.fromEntries(
  argv.filter((a) => a.includes('=')).map((a) => {
    const i = a.indexOf('=');
    return [a.slice(2, i), a.slice(i + 1)];
  })
);
const positional = argv.filter((a) => !a.startsWith('--'));
const TARGET = positional[0];
const DRY = flags.has('--dry-run');
const ALL = flags.has('--all');
const ONLY_WEEK = args.week ? Number(args.week) : null;
const VERBOSE = flags.has('--verbose') || flags.has('-v');

if (!TARGET) {
  console.error('Usage: node scripts/seed-scoreup.js <file.json | dir> [--dry-run] [--all] [--week=N]');
  process.exit(1);
}

// ── Logger ──
async function log(entry) {
  await fs.mkdir(path.dirname(LOG_PATH), { recursive: true });
  await fs.appendFile(LOG_PATH, JSON.stringify({ ts: new Date().toISOString(), ...entry }) + '\n');
}

// ── Schema validation ──
function validateSeed(s, file) {
  const errs = [];
  if (!s || typeof s !== 'object') errs.push('not_object');
  if (!s?.version) errs.push('missing_version');
  if (!s?.grade_level) errs.push('missing_grade_level');
  if (s?.grade == null) errs.push('missing_grade');
  if (!s?.subject_code) errs.push('missing_subject_code');
  if (!s?.subject_name) errs.push('missing_subject_name');
  if (!Array.isArray(s?.weeks)) errs.push('missing_weeks');
  if (s?.weeks?.length === 0) errs.push('empty_weeks');
  for (let i = 0; i < (s?.weeks?.length || 0); i++) {
    const w = s.weeks[i];
    if (!w?.week_no || w.week_no < 1) errs.push(`w[${i}]: bad week_no`);
    if (!Array.isArray(w?.questions) || w.questions.length === 0) errs.push(`w[${i}]: empty questions`);
    for (let j = 0; j < (w?.questions?.length || 0); j++) {
      const q = w.questions[j];
      if (!q?.stem) errs.push(`w[${i}].q[${j}]: missing stem`);
      if (!Array.isArray(q?.options) || q.options.length < 2) errs.push(`w[${i}].q[${j}]: need ≥2 options`);
      if (q?.correct_index == null || q.correct_index < 0 || q.correct_index >= (q?.options?.length || 0)) {
        errs.push(`w[${i}].q[${j}]: bad correct_index`);
      }
    }
  }
  if (errs.length) {
    console.error(`✗ ${file}:`); for (const e of errs.slice(0, 10)) console.error(`   - ${e}`);
    return false;
  }
  return true;
}

// ── Transform 1 question seed → ScoreUp question payload ──
function toScoreUpQuestion(seed, opts) {
  const { gradeCode, subjectCode, weekNo, qIdx } = opts;
  const external_id = `tizia:seed:${gradeCode}:${subjectCode}:w${String(weekNo).padStart(2, '0')}:q${String(qIdx + 1).padStart(2, '0')}`;
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  const options = seed.options.map((text, i) => ({ key: letters[i] || String(i), text }));
  return {
    external_id,
    chapter_id: `Tuần ${weekNo}`,
    question: seed.stem,
    options,
    correct_answer: letters[seed.correct_index],
    correct_index: seed.correct_index,
    explanation: seed.explanation || null,
    level: seed.difficulty >= 4 ? 'hard' : seed.difficulty >= 2 ? 'medium' : 'easy',
    // ScoreUp v1.4.0 bug: bloom_level cần là enum string, không nhận số
    bloom_level: ['remember', 'understand', 'apply', 'analyze', 'evaluate', 'create'][(seed.bloom_level || 1) - 1] || 'remember',
    difficulty: Number(seed.difficulty) || 1,
    source: 'tizia-seed',
    tags: [`grade:${gradeCode}`, `week:${weekNo}`, `subject:${subjectCode}`],
  };
}

// ── Ingest 1 seed file ──
async function ingestFile(filepath) {
  const raw = await fs.readFile(filepath, 'utf8');
  const seed = JSON.parse(raw);
  if (!validateSeed(seed, filepath)) return { ok: false, file: filepath };

  const gradeCode = `${seed.grade_level}-${seed.grade}`;
  const subjectExternal = `tizia:seed:${gradeCode}:${seed.subject_code}:subject`;
  const subjectName = seed.subject_name;

  console.log(`\n📚 ${filepath}`);
  console.log(`   grade=${gradeCode} subject=${seed.subject_code} name=\"${subjectName}\"`);
  console.log(`   ${seed.weeks.length} tuần · ${seed.weeks.reduce((s, w) => s + w.questions.length, 0)} câu hỏi`);
  if (DRY) console.log(`   [DRY-RUN] Không gọi ScoreUp API.`);

  // Step 1 — ensure subject exists (best-effort, idempotent qua external_id)
  let subjectId = null;
  if (!DRY) {
    try {
      const r = await scoreup.createSubject({
        subject_name: subjectName,
        subject_code: `${gradeCode}:${seed.subject_code}`,
        faculty: 'GDPT 2018',
        external_id: subjectExternal,
      });
      subjectId = r?.data?.id || r?.id || null;
      console.log(`   ✔ subject created/updated → id=${subjectId}`);
      await log({ kind: 'subject', file: filepath, subjectExternal, subjectId });
    } catch (e) {
      // Đã tồn tại → tìm bằng listSubjects (ScoreUp adapter chưa expose getByExternal, nhưng
      // createSubject thường idempotent → coi như OK). Caller có thể tự bind sau.
      console.warn(`   ⚠ subject create: ${e.message}. Tiếp tục với external_id only.`);
      await log({ kind: 'subject_warn', file: filepath, err: e.message });
    }
  }

  // Step 2 — chia weeks thành chunks ≤ 200 câu / lần để fit ScoreUp bulk limit
  let weeks = seed.weeks;
  if (ONLY_WEEK) {
    weeks = weeks.filter(w => w.week_no === ONLY_WEEK);
    console.log(`   🎯 Lọc week=${ONLY_WEEK}: ${weeks.length} tuần`);
  }

  let totalCreated = 0, totalErrors = 0;
  for (const w of weeks) {
    const questions = w.questions.map((q, qIdx) =>
      toScoreUpQuestion(q, { gradeCode, subjectCode: seed.subject_code, weekNo: w.week_no, qIdx })
    );

    if (DRY) {
      console.log(`   📝 [DRY] Tuần ${w.week_no} (${w.chapter}): ${questions.length} câu — ${questions[0]?.external_id}…`);
      if (VERBOSE) console.log(JSON.stringify(questions[0], null, 2));
      continue;
    }

    try {
      const res = await scoreup.bulkUpsertQuestions({
        subject_id: subjectId,
        questions,
        idempotencyKey: `seed-${gradeCode}-${seed.subject_code}-w${w.week_no}`,
      });
      const created = res?.summary?.created || 0;
      const updated = res?.summary?.updated || 0;
      const errors  = res?.summary?.error   || 0;
      totalCreated += (created + updated);
      totalErrors  += errors;
      console.log(`   ✔ Tuần ${w.week_no}: +${created} created, ${updated} updated, ${errors} errors`);
      await log({ kind: 'week', file: filepath, week: w.week_no, summary: res?.summary });
      if (errors && VERBOSE) {
        const errResults = (res?.results || []).filter(r => r.status === 'error');
        for (const e of errResults.slice(0, 3)) console.warn(`      ✗ ${e.external_id || e.index}: ${e.message}`);
      }
    } catch (e) {
      totalErrors += questions.length;
      console.error(`   ✗ Tuần ${w.week_no}: ${e.message}`);
      await log({ kind: 'week_error', file: filepath, week: w.week_no, err: e.message });
    }
  }

  console.log(`   📊 Tổng: ${totalCreated} câu OK, ${totalErrors} lỗi.`);
  return { ok: true, file: filepath, created: totalCreated, errors: totalErrors };
}

// ── Main ──
async function main() {
  if (!scoreup.isConfigured() && !DRY) {
    console.error('❌ SCOREUP_API_KEY chưa set. Set trong .env hoặc dùng --dry-run.');
    process.exit(1);
  }
  console.log(`Tizia → ScoreUp seed ingest. Mode: ${DRY ? 'DRY-RUN' : 'LIVE'}.`);

  let files = [];
  const stat = await fs.stat(TARGET).catch(() => null);
  if (!stat) { console.error(`❌ Không tồn tại: ${TARGET}`); process.exit(1); }

  if (stat.isDirectory()) {
    const dir = await fs.readdir(TARGET);
    files = dir.filter(f => f.endsWith('.json')).map(f => path.join(TARGET, f));
    if (!ALL) {
      console.error(`⚠ ${TARGET} là directory. Dùng --all để ingest mọi file *.json (tìm thấy ${files.length}).`);
      process.exit(1);
    }
  } else {
    files = [TARGET];
  }

  const results = [];
  for (const f of files) {
    const r = await ingestFile(f);
    results.push(r);
  }

  const ok = results.filter(r => r.ok).length;
  const totalCreated = results.reduce((s, r) => s + (r.created || 0), 0);
  const totalErrors  = results.reduce((s, r) => s + (r.errors  || 0), 0);
  console.log(`\n═══ DONE ═══`);
  console.log(`Files: ${ok}/${files.length} OK`);
  console.log(`Questions: ${totalCreated} created/updated, ${totalErrors} lỗi`);
  console.log(`Log: ${LOG_PATH}`);
}

main().catch((e) => { console.error('FATAL:', e); process.exit(1); });
