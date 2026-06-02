#!/usr/bin/env node
// ============================================================
// Migrate Tizia quiz scenarios → ScoreUp Public API
// ============================================================
//
// Nguồn: public/js/scenarios/lop{1..12}/<subject>.js
//   - File ESM, export const ARRAY (vd P2_TOAN_WEEKS) chứa scenarios.
//   - Mỗi scenario: { id:"P2-wNN-quiz", title:"Tuần N — …", kind:"quiz",
//                     yearLevel, subject, semester, week, questions:[...] }
//   - Mỗi question: { stem, choices:[string], answer:int, explanation }
//
// Đích: ScoreUp
//   - Subject: 1 subject ScoreUp / (grade, subject) — tạo lười, idempotent qua
//     external_id="tizia:<grade>:<subject>:subject" (luôn bắt đầu "tizia:").
//   - Question external_id: "tizia:<grade>:<subject>:w<NN>:q<NN>"
//   - chapter_id: "Tuần N" (giữ nguyên format tiếng Việt cho UI ScoreUp).
//   - bloom_level: "remember" (workaround bug v1.4.0: model không cho null).
//
// Usage:
//   node scripts/migrate-quizzes-to-scoreup.js [--dry-run] [--grade=lop2]
//        [--subject=toan] [--limit=N] [--from-week=1] [--to-week=36]
//
// Env: SCOREUP_API_KEY, SCOREUP_BASE_URL (xem .env).
// Log: data/scoreup-migration-log.jsonl (append-only).
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as scoreup from '../server/integrations/scoreup.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SCEN_DIR = path.join(ROOT, 'public', 'js', 'scenarios');
const LOG_PATH = path.join(ROOT, 'data', 'scoreup-migration-log.jsonl');

// ── CLI args ──
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = /^--([^=]+)(?:=(.*))?$/.exec(a);
    return m ? [m[1], m[2] ?? true] : [a, true];
  })
);
const DRY = args['dry-run'] === true || args['dry-run'] === 'true';
const ONLY_GRADE   = args.grade   ? String(args.grade)   : null; // "lop2"
const ONLY_SUBJECT = args.subject ? String(args.subject) : null; // "toan"
const LIMIT        = args.limit   ? Number(args.limit)   : Infinity;
const FROM_WEEK    = args['from-week'] ? Number(args['from-week']) : 1;
const TO_WEEK      = args['to-week']   ? Number(args['to-week'])   : 36;

if (!DRY && !scoreup.isConfigured()) {
  console.error('❌ SCOREUP_API_KEY not set. Chạy với --dry-run hoặc set env trước.');
  process.exit(1);
}
console.log(`[migrate] mode=${DRY ? 'DRY-RUN' : 'LIVE'}  grade=${ONLY_GRADE || 'ALL'}  subject=${ONLY_SUBJECT || 'ALL'}  limit=${LIMIT}  week=${FROM_WEEK}..${TO_WEEK}`);

// ── Subject mapping: Tizia subject key → display name + ScoreUp subject code ──
const SUBJECT_NAMES = {
  toan:        { name: 'Toán',        code: 'TOAN' },
  'tieng-viet':{ name: 'Tiếng Việt',  code: 'TV'   },
  'tieng-anh': { name: 'Tiếng Anh',   code: 'TA'   },
  hdtn:        { name: 'Hoạt động trải nghiệm', code: 'HDTN' },
  tnxh:        { name: 'Tự nhiên & Xã hội',     code: 'TNXH' },
  gdtc:        { name: 'Giáo dục thể chất',     code: 'GDTC' },
  'dao-duc':   { name: 'Đạo Đức',     code: 'DD'   },
  'am-nhac':   { name: 'Âm nhạc',     code: 'AN'   },
  'my-thuat':  { name: 'Mỹ thuật',    code: 'MT'   },
  'ngu-van':   { name: 'Ngữ văn',     code: 'NV'   },
  'lich-su':   { name: 'Lịch sử',     code: 'LS'   },
  'dia-ly':    { name: 'Địa lý',      code: 'DL'   },
  'sinh-hoc':  { name: 'Sinh học',    code: 'SH'   },
  'hoa-hoc':   { name: 'Hoá học',     code: 'HH'   },
  'vat-ly':    { name: 'Vật lý',      code: 'VL'   },
  'tin-hoc':   { name: 'Tin học',     code: 'TH'   },
  'cong-nghe': { name: 'Công nghệ',   code: 'CN'   },
  'gdkt-pl':   { name: 'Giáo dục KT & PL', code: 'GDKTPL' },
  'gdqp':      { name: 'Giáo dục QP-AN',   code: 'GDQP' },
};
const GRADE_LABEL = (g) => `Lớp ${g.replace(/^lop/, '')}`;

// ── Discover quiz files ──
async function discoverFiles() {
  const found = [];
  const grades = await fs.readdir(SCEN_DIR);
  for (const g of grades) {
    if (!/^lop\d+$/.test(g)) continue;
    if (ONLY_GRADE && g !== ONLY_GRADE) continue;
    const dir = path.join(SCEN_DIR, g);
    let files;
    try { files = await fs.readdir(dir); } catch { continue; }
    for (const f of files) {
      if (!f.endsWith('.js')) continue;
      if (f.startsWith('_')) continue;          // helper/index
      const subjectKey = f.replace(/\.js$/, '');
      if (ONLY_SUBJECT && subjectKey !== ONLY_SUBJECT) continue;
      found.push({ grade: g, subjectKey, file: path.join(dir, f) });
    }
  }
  return found;
}

// ── Load scenarios từ 1 module ──
async function loadScenarios(filePath) {
  try {
    const mod = await import(pathToFileURL(filePath).href);
    // Tìm export array chứa scenarios kind=quiz
    for (const [name, val] of Object.entries(mod)) {
      if (Array.isArray(val) && val.length > 0 && val[0]?.questions) {
        return { exportName: name, scenarios: val };
      }
    }
    return { exportName: null, scenarios: [] };
  } catch (e) {
    return { error: e.message, scenarios: [] };
  }
}

// ── Map 1 Tizia question → ScoreUp QuestionCreateInput ──
function toScoreUpInput({ grade, subjectKey, scenario, q, idx, scoreupSubjectId }) {
  const week = scenario.week ?? 1;
  const wStr = String(week).padStart(2, '0');
  const qStr = String(idx + 1).padStart(2, '0');
  const externalId = `tizia:${grade}:${subjectKey}:w${wStr}:q${qStr}`;

  // ScoreUp options: A/B/C/D theo thứ tự choices
  const options = (q.choices || []).map((text, i) => ({
    key: String.fromCharCode(65 + i), // A,B,C,D
    text: String(text),
  }));
  const correctKey = options[q.answer]?.key;
  if (!correctKey) {
    throw new Error(`bad_answer_index: choices=${options.length} answer=${q.answer}`);
  }

  return {
    external_id: externalId,
    subject_id: scoreupSubjectId,
    chapter_id: `Tuần ${week}`,
    question_type: 'mcq_single',
    question: String(q.stem || ''),
    options,
    correct_answer: correctKey,
    explanation: q.explanation || '',
    bloom_level: 'remember',           // workaround bug v1.4.0
    level: scenario.difficulty <= 1 ? 'easy' : (scenario.difficulty >= 3 ? 'hard' : 'medium'),
    grade_level: grade.replace(/^lop/, 'lop-'),       // "lop2" → "lop-2"
    curriculum: 'gdpt-2018',
    lang: 'vi',
    tags: [`semester-${scenario.semester ?? 1}`, `week-${week}`],
    metadata: {
      tizia_scenario_id: scenario.id,
      tizia_title: scenario.title,
      tizia_year_level: scenario.yearLevel,
    },
  };
}

// ── Subject ScoreUp resolver (tạo lười, idempotent) ──
const subjectCache = new Map(); // "lop2:toan" → scoreup subject_id

async function ensureSubject(grade, subjectKey) {
  const cacheKey = `${grade}:${subjectKey}`;
  if (subjectCache.has(cacheKey)) return subjectCache.get(cacheKey);
  const meta = SUBJECT_NAMES[subjectKey] || { name: subjectKey, code: subjectKey.toUpperCase() };
  const name = `${GRADE_LABEL(grade)} — ${meta.name}`;
  const code = `TIZIA-${grade.toUpperCase()}-${meta.code}`;
  const externalId = `tizia:${grade}:${subjectKey}:subject`;
  if (DRY) {
    const fakeId = `DRY:${cacheKey}`;
    subjectCache.set(cacheKey, fakeId);
    return fakeId;
  }
  try {
    const res = await scoreup.createSubject({
      subject_name: name, subject_code: code, faculty: 'Tizia',
      external_id: externalId,
    });
    const id = res.data?.id || res.id;
    subjectCache.set(cacheKey, id);
    console.log(`  [subject] ${cacheKey} → ${id} (${res.created === false ? 'reused' : 'created'})`);
    return id;
  } catch (e) {
    console.error(`  [subject] FAIL ${cacheKey}:`, e.message);
    throw e;
  }
}

// ── Log helper ──
async function appendLog(entry) {
  try {
    await fs.mkdir(path.dirname(LOG_PATH), { recursive: true });
    await fs.appendFile(LOG_PATH, JSON.stringify({ ts: Date.now(), ...entry }) + '\n');
  } catch (e) { console.warn('[log]', e.message); }
}

// ── Batch upsert ──
const BATCH_SIZE = 200; // an toàn dưới giới hạn 500 + nhẹ rate-limit
async function flushBatch(items) {
  if (items.length === 0) return { created: 0, updated: 0, error: 0 };
  if (DRY) {
    return { created: items.length, updated: 0, error: 0, dry: true };
  }
  try {
    const res = await scoreup.bulkUpsertQuestions({ questions: items });
    const sum = res.summary || {};
    if (sum.error > 0) {
      console.log(`  [batch] error=${sum.error} sample:`, res.results?.find(r => r.status === 'error'));
    }
    for (const r of (res.results || [])) {
      await appendLog({ type: 'question', ...r });
    }
    return { created: sum.created || 0, updated: sum.updated || 0, error: sum.error || 0 };
  } catch (e) {
    console.error(`  [batch] FAIL:`, e.message);
    return { created: 0, updated: 0, error: items.length };
  }
}

// ── Main ──
async function main() {
  const files = await discoverFiles();
  console.log(`[migrate] discovered ${files.length} files`);
  const stats = {
    files: 0, files_ok: 0, files_err: 0,
    scenarios: 0, scenarios_quiz: 0,
    questions: 0, sent: 0,
    created: 0, updated: 0, error: 0,
  };
  let queue = [];
  let queueMeta = []; // metadata cùng index để debug
  let countDown = LIMIT;

  for (const { grade, subjectKey, file } of files) {
    stats.files++;
    const rel = path.relative(ROOT, file);
    const { error, scenarios, exportName } = await loadScenarios(file);
    if (error) {
      console.warn(`✗ ${rel}: ${error}`);
      stats.files_err++;
      await appendLog({ type: 'file_error', file: rel, error });
      continue;
    }
    if (scenarios.length === 0) {
      console.log(`· ${rel}: no quiz scenarios`);
      continue;
    }
    stats.files_ok++;
    stats.scenarios += scenarios.length;

    let subjId = null;
    for (const sc of scenarios) {
      if (sc.kind && sc.kind !== 'quiz') continue;
      if (!Array.isArray(sc.questions) || sc.questions.length === 0) continue;
      if (sc.week != null && (sc.week < FROM_WEEK || sc.week > TO_WEEK)) continue;
      stats.scenarios_quiz++;

      if (!subjId) {
        try { subjId = await ensureSubject(grade, subjectKey); }
        catch { stats.files_err++; break; }
      }

      for (let i = 0; i < sc.questions.length; i++) {
        if (countDown <= 0) break;
        stats.questions++;
        let input;
        try {
          input = toScoreUpInput({ grade, subjectKey, scenario: sc, q: sc.questions[i], idx: i, scoreupSubjectId: subjId });
        } catch (e) {
          stats.error++;
          await appendLog({ type: 'map_error', file: rel, scenario: sc.id, idx: i, error: e.message });
          continue;
        }
        queue.push(input);
        queueMeta.push({ file: rel, scenario: sc.id, idx: i });
        countDown--;

        if (queue.length >= BATCH_SIZE) {
          const r = await flushBatch(queue);
          stats.sent += queue.length;
          stats.created += r.created; stats.updated += r.updated; stats.error += r.error;
          console.log(`  flush ${queue.length} → ${r.created}c/${r.updated}u/${r.error}e   (running ${stats.sent}/${stats.questions})`);
          queue = []; queueMeta = [];
        }
      }
      if (countDown <= 0) break;
    }
    if (countDown <= 0) break;
  }

  // Flush cuối
  if (queue.length > 0) {
    const r = await flushBatch(queue);
    stats.sent += queue.length;
    stats.created += r.created; stats.updated += r.updated; stats.error += r.error;
    console.log(`  flush ${queue.length} → ${r.created}c/${r.updated}u/${r.error}e`);
  }

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify(stats, null, 2));
  console.log(`Subjects touched: ${subjectCache.size}`);
  for (const [k, v] of subjectCache) console.log(`  ${k} → ${v}`);
  await appendLog({ type: 'summary', ...stats, mode: DRY ? 'dry' : 'live' });
}

main().catch((e) => {
  console.error('FATAL', e);
  process.exit(1);
});
