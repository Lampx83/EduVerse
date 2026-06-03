#!/usr/bin/env node
// ============================================================
// Build worklist các câu cần regen distractor.
// Output: data/distractor-worklist.json
//   {
//     "<file rel path>": {
//        "scenarios": [{scenarioId, title, topic, sampleQuestions: [...]}],  // context cho agent
//        "tasks": [{
//          "qId": "<file>#<globalIdx>",
//          "scenarioId", "stem", "choices", "answerIdx", "explanation",
//          "weakIndices": [...]  // chỉ index của distractor yếu, KHÔNG bao gồm answerIdx
//        }, ...]
//     }
//   }
// Logic:
//   - Reuse parser từ scripts/shuffle-answers.js (copy inline)
//   - Detect weak: option ≤5 ký tự không phải số/đơn vị, hoặc match generic regex.
//   - SKIP nếu answerIdx có trong "weak" list (false-positive câu đáp án ngắn).
//   - File mà KHÔNG có tasks nào → bỏ qua.
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SCEN_DIR = path.join(ROOT, 'public', 'js', 'scenarios');
const OUT_PATH = path.join(ROOT, 'data', 'distractor-worklist.json');

const GENERIC_WEAK = [
  /^v[ôo]\s*ích$/i, /^không\s*biết$/i, /^không\s*có$/i, /^không\s*quan\s*trọng$/i,
  /^sai$/i, /^đúng$/i, /^phá\s*hoại$/i, /^vô\s*nghĩa$/i, /^bất\s*kỳ$/i,
  /^chẳng\s*làm\s*gì$/i, /^không\s*làm\s*gì$/i, /^không\s*biết\s*nữa$/i,
  /^không\s*rõ$/i, /^chưa\s*biết$/i, /^chưa\s*rõ$/i, /^không$/i, /^có$/i,
  /^abc$/i, /^xyz$/i, /^vớ\s*vẩn$/i, /^linh\s*tinh$/i,
];
function isWeak(text) {
  if (typeof text !== 'string') return false;
  const t = text.trim();
  if (t.length === 0) return true;
  if (t.length <= 5 && !/^[0-9.,\-\/x×÷+%]/.test(t)) return true;
  return GENERIC_WEAK.some((re) => re.test(t));
}

// Parser (rút gọn từ shuffle-answers.js) ──
function findQCalls(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    const qPos = src.indexOf('Q(', i);
    if (qPos < 0) break;
    const prev = qPos === 0 ? '\n' : src[qPos - 1];
    if (/[A-Za-z0-9_$]/.test(prev)) { i = qPos + 1; continue; }
    const argsStart = qPos + 2;
    const end = balanceParens(src, argsStart - 1);
    if (end < 0) { i = qPos + 1; continue; }
    const inside = src.slice(argsStart, end);
    let args;
    try { args = splitTopLevelComma(inside); } catch { i = end + 1; continue; }
    if (args.length < 3) { i = end + 1; continue; }
    let stem, choices, answer, explanation;
    try {
      stem        = evalLiteral(args[0]);
      choices     = evalLiteral(args[1]);
      answer      = evalLiteral(args[2]);
      explanation = args[3] !== undefined ? evalLiteral(args[3]) : '';
    } catch { i = end + 1; continue; }
    if (typeof stem !== 'string' || !Array.isArray(choices) || !Number.isInteger(answer)) {
      i = end + 1; continue;
    }
    out.push({ start: qPos, end: end + 1, stem, choices, answer, explanation });
    i = end + 1;
  }
  return out;
}
function balanceParens(src, openPos) {
  if (src[openPos] !== '(') return -1;
  let depth = 0, inStr = null, escape = false;
  for (let i = openPos; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (escape) { escape = false; continue; }
      if (c === '\\') { escape = true; continue; }
      if (c === inStr) { inStr = null; }
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === '(') depth++;
    else if (c === ')') { depth--; if (depth === 0) return i; }
  }
  return -1;
}
function splitTopLevelComma(s) {
  const out = []; let buf = '', depth = 0, inStr = null, escape = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      buf += c;
      if (escape) { escape = false; continue; }
      if (c === '\\') { escape = true; continue; }
      if (c === inStr) { inStr = null; }
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; buf += c; continue; }
    if (c === '(' || c === '[' || c === '{') { depth++; buf += c; continue; }
    if (c === ')' || c === ']' || c === '}') { depth--; buf += c; continue; }
    if (c === ',' && depth === 0) { out.push(buf.trim()); buf = ''; continue; }
    buf += c;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}
function evalLiteral(s) { return new Function('return (' + s + ')')(); }

async function loadScenariosMeta(filePath) {
  // Import động để lấy meta scenarios (id, title, topic) — dùng làm context cho agent.
  try {
    const mod = await import(pathToFileURL(filePath).href);
    for (const v of Object.values(mod)) {
      if (Array.isArray(v) && v[0]?.questions) return v;
    }
  } catch {}
  return [];
}

async function main() {
  const out = {};
  let totalFiles = 0, totalTasks = 0, totalSkippedFp = 0;
  for (const g of await fs.readdir(SCEN_DIR)) {
    if (!/^lop\d+$/.test(g)) continue;
    const dir = path.join(SCEN_DIR, g);
    for (const f of await fs.readdir(dir)) {
      if (!f.endsWith('.js') || f.startsWith('_')) continue;
      totalFiles++;
      const file = path.join(dir, f);
      const rel = path.relative(ROOT, file);
      const text = await fs.readFile(file, 'utf8');
      const calls = findQCalls(text);
      const scenariosMeta = await loadScenariosMeta(file);

      // Map Q calls → scenario (best effort: scan scenarios trong file theo position của Q)
      // Đơn giản: với mỗi Q, gán scenarioId theo stem match
      function scenarioForQ(q) {
        for (const sc of scenariosMeta) {
          if (Array.isArray(sc.questions)) {
            for (const sq of sc.questions) {
              if (sq.stem === q.stem) {
                return { id: sc.id, title: sc.title, topic: sc.lesson?.topic || sc.title };
              }
            }
          }
        }
        return { id: '?', title: '?', topic: '?' };
      }

      const tasks = [];
      for (let qi = 0; qi < calls.length; qi++) {
        const c = calls[qi];
        const weakIdx = c.choices.map((opt, i) => isWeak(opt) ? i : -1).filter(i => i >= 0);
        if (weakIdx.length === 0) continue;
        // Loại bỏ false-positive: nếu đáp án đúng nằm trong weak (vd "Lớp 1", "Có")
        const weakNonAnswer = weakIdx.filter(i => i !== c.answer);
        if (weakNonAnswer.length === 0) { totalSkippedFp++; continue; }
        const scMeta = scenarioForQ(c);
        tasks.push({
          qId: `${rel}#${qi}`,
          scenarioId: scMeta.id,
          scenarioTitle: scMeta.title,
          topic: scMeta.topic,
          stem: c.stem,
          choices: c.choices,
          answerIdx: c.answer,
          answerText: c.choices[c.answer],
          explanation: c.explanation,
          weakIndicesToReplace: weakNonAnswer,
        });
        totalTasks++;
      }

      if (tasks.length > 0) {
        out[rel] = {
          subject: f.replace(/\.js$/, ''),
          grade: g,
          tasks,
        };
      }
    }
  }

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true });
  await fs.writeFile(OUT_PATH, JSON.stringify(out, null, 2), 'utf8');
  const files = Object.keys(out);
  console.log(`Files processed: ${totalFiles}`);
  console.log(`Files needing fix: ${files.length}`);
  console.log(`Total tasks (câu cần regen): ${totalTasks}`);
  console.log(`Skipped false-positives (đáp án đúng ngắn): ${totalSkippedFp}`);
  console.log(`Top 10 file lớn nhất:`);
  files.map(f => ({ f, n: out[f].tasks.length }))
    .sort((a,b) => b.n - a.n).slice(0, 10)
    .forEach(({f, n}) => console.log(`  ${n.toString().padStart(4)}  ${f}`));
  console.log(`Written: ${path.relative(ROOT, OUT_PATH)}`);
}
main().catch(e => { console.error(e); process.exit(1); });
