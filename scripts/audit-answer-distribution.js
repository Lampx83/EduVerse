#!/usr/bin/env node
// ============================================================
// Audit phân bố correct_answer (A/B/C/D) trên toàn bộ ngân hàng quiz Tizia
// → đã đẩy lên ScoreUp (xem migrate-quizzes-to-scoreup.js).
// Đọc file nguồn để dữ liệu là groundtruth (không phụ thuộc API).
// Cờ: --grade=lop2 / --subject=toan / --json để output JSON.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCEN_DIR = path.resolve(__dirname, '..', 'public', 'js', 'scenarios');

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = /^--([^=]+)(?:=(.*))?$/.exec(a);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));
const ONLY_GRADE   = args.grade   ? String(args.grade)   : null;
const ONLY_SUBJECT = args.subject ? String(args.subject) : null;
const JSON_OUT     = !!args.json;

const KEY = (i) => String.fromCharCode(65 + i); // 0→A,1→B,…

async function discover() {
  const out = [];
  for (const g of await fs.readdir(SCEN_DIR)) {
    if (!/^lop\d+$/.test(g)) continue;
    if (ONLY_GRADE && g !== ONLY_GRADE) continue;
    const dir = path.join(SCEN_DIR, g);
    let files; try { files = await fs.readdir(dir); } catch { continue; }
    for (const f of files) {
      if (!f.endsWith('.js') || f.startsWith('_')) continue;
      const sub = f.replace(/\.js$/, '');
      if (ONLY_SUBJECT && sub !== ONLY_SUBJECT) continue;
      out.push({ grade: g, subject: sub, file: path.join(dir, f) });
    }
  }
  return out;
}

async function loadScenarios(file) {
  try {
    const mod = await import(pathToFileURL(file).href);
    for (const v of Object.values(mod)) {
      if (Array.isArray(v) && v[0]?.questions) return v;
    }
  } catch (e) { /* ignore */ }
  return [];
}

const newBucket = () => ({ total: 0, A: 0, B: 0, C: 0, D: 0, E_plus: 0, anomalies: [] });

function addQuestion(bucket, q, ctx) {
  bucket.total++;
  const choiceCount = Array.isArray(q.choices) ? q.choices.length : 0;
  const ans = q.answer;
  if (!Number.isInteger(ans) || ans < 0 || ans >= choiceCount) {
    bucket.anomalies.push({ ...ctx, reason: 'bad_answer_index', answer: ans, choiceCount });
    return;
  }
  if (choiceCount !== 4) {
    bucket.anomalies.push({ ...ctx, reason: 'non_4_options', choiceCount });
  }
  const k = KEY(ans);
  if (k === 'A' || k === 'B' || k === 'C' || k === 'D') bucket[k]++;
  else bucket.E_plus++;
}

function pct(n, total) {
  if (!total) return '  0.0%';
  return `${(n / total * 100).toFixed(1).padStart(5, ' ')}%`;
}

// Chi-square test với null hypothesis: phân bố đều 25% mỗi key (A/B/C/D)
function chiSquareUniform(bucket) {
  const obs = [bucket.A, bucket.B, bucket.C, bucket.D];
  const n = obs.reduce((a, b) => a + b, 0);
  if (n === 0) return { stat: 0, pSig: false };
  const exp = n / 4;
  const stat = obs.reduce((s, o) => s + (o - exp) ** 2 / exp, 0);
  // df=3, critical value p<0.01 ≈ 11.345; p<0.05 ≈ 7.815
  return { stat: Number(stat.toFixed(2)), pSig01: stat > 11.345, pSig05: stat > 7.815, n };
}

(async () => {
  const files = await discover();
  const total = newBucket();
  const byGrade = new Map();   // grade → bucket
  const bySubject = new Map(); // "grade:subject" → bucket
  let scenarioCount = 0;

  for (const { grade, subject, file } of files) {
    const scs = await loadScenarios(file);
    if (!byGrade.has(grade)) byGrade.set(grade, newBucket());
    const sKey = `${grade}:${subject}`;
    if (!bySubject.has(sKey)) bySubject.set(sKey, newBucket());
    for (const sc of scs) {
      if (sc.kind && sc.kind !== 'quiz') continue;
      if (!Array.isArray(sc.questions)) continue;
      scenarioCount++;
      for (let i = 0; i < sc.questions.length; i++) {
        const ctx = { file: path.relative(path.resolve(__dirname, '..'), file), scenarioId: sc.id, idx: i };
        addQuestion(total, sc.questions[i], ctx);
        addQuestion(byGrade.get(grade), sc.questions[i], ctx);
        addQuestion(bySubject.get(sKey), sc.questions[i], ctx);
      }
    }
  }

  if (JSON_OUT) {
    console.log(JSON.stringify({
      total, byGrade: Object.fromEntries(byGrade), bySubject: Object.fromEntries(bySubject), scenarioCount
    }, null, 2));
    return;
  }

  // Báo cáo text
  const renderRow = (label, b) => {
    const cs = chiSquareUniform(b);
    const flag = cs.pSig01 ? ' ⚠️ lệch>1%' : cs.pSig05 ? ' ⚠️ lệch>5%' : '';
    return `${label.padEnd(28)} n=${String(b.total).padStart(5)}  A=${pct(b.A, b.total)} B=${pct(b.B, b.total)} C=${pct(b.C, b.total)} D=${pct(b.D, b.total)}  χ²=${String(cs.stat).padStart(6)}${flag}`;
  };

  console.log('='.repeat(120));
  console.log(`TOTAL — files=${files.length}, scenarios=${scenarioCount}, questions=${total.total}`);
  console.log('='.repeat(120));
  console.log(renderRow('TOÀN BỘ', total));
  console.log('');
  console.log('— Phân bố theo lớp —');
  [...byGrade.entries()].sort((a, b) => a[0].localeCompare(b[0], 'en', { numeric: true })).forEach(([g, b]) => {
    console.log(renderRow(g, b));
  });
  console.log('');
  console.log('— Top 10 môn lệch nhất (χ² lớn nhất, n≥30) —');
  const subs = [...bySubject.entries()]
    .map(([k, b]) => ({ k, b, cs: chiSquareUniform(b) }))
    .filter((x) => x.b.total >= 30)
    .sort((a, b) => b.cs.stat - a.cs.stat)
    .slice(0, 10);
  subs.forEach(({ k, b }) => console.log(renderRow(k, b)));
  console.log('');

  // Anomalies
  const allAnomalies = total.anomalies;
  console.log(`— Bất thường: ${allAnomalies.length} câu —`);
  const byReason = {};
  for (const a of allAnomalies) byReason[a.reason] = (byReason[a.reason] || 0) + 1;
  for (const [r, n] of Object.entries(byReason)) console.log(`  ${r}: ${n}`);
  if (allAnomalies.length > 0 && allAnomalies.length <= 30) {
    console.log('\nChi tiết:');
    for (const a of allAnomalies.slice(0, 30)) {
      console.log(`  ${a.file} · ${a.scenarioId} · q[${a.idx}] · ${a.reason} (${JSON.stringify(a).slice(0, 120)})`);
    }
  } else if (allAnomalies.length > 30) {
    console.log(`\n(>30 bất thường — chạy --json để xem hết)`);
    console.log('Sample 5:');
    for (const a of allAnomalies.slice(0, 5)) {
      console.log(`  ${a.file} · ${a.scenarioId} · q[${a.idx}] · ${a.reason}`);
    }
  }
})().catch((e) => { console.error('FATAL', e); process.exit(1); });
