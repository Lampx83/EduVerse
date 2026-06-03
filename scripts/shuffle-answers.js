#!/usr/bin/env node
// ============================================================
// Shuffle thứ tự đáp án cho mọi Q(stem, choices, answer, expl)
// trong các file public/js/scenarios/lop*/[!_]*.js.
//
// Vấn đề: audit phát hiện 75.4% câu correct = A → HS chọn A liên tục đạt
// 75% mà không cần biết kiến thức (xem audit-answer-distribution.js).
// Giải pháp: random hoán vị 4 option trong mỗi Q() + update `answer` index
// để vẫn trỏ đúng option gốc. Nội dung KHÔNG đổi, chỉ vị trí.
//
// Bonus: phát hiện distractor "yếu" — option text:
//   - quá ngắn (≤5 ký tự, vd "Sai", "Vô ích"), hoặc
//   - match danh sách generic kiểu "Vô ích", "Không biết", "Phá hoại"…
// Xuất danh sách câu flagged ra data/audit-distractor-weak.json để tác giả
// regen distractor sau (phase B trong recommendation cho user).
//
// Idempotent qua seed cố định (--seed). Re-run cùng seed → cùng kết quả.
//
// Cờ:
//   --seed=42                  (default 42)
//   --grade=lop2 --subject=toan (giới hạn phạm vi để test)
//   --dry-run                   (chỉ in báo cáo, không ghi file)
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCEN_DIR = path.resolve(__dirname, '..', 'public', 'js', 'scenarios');
const FLAG_OUT = path.resolve(__dirname, '..', 'data', 'audit-distractor-weak.json');

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = /^--([^=]+)(?:=(.*))?$/.exec(a);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));
const SEED = Number(args.seed) || 42;
const ONLY_GRADE   = args.grade   ? String(args.grade)   : null;
const ONLY_SUBJECT = args.subject ? String(args.subject) : null;
const DRY          = args['dry-run'] === true || args['dry-run'] === 'true';

console.log(`[shuffle] mode=${DRY ? 'DRY-RUN' : 'WRITE'}  seed=${SEED}  grade=${ONLY_GRADE || 'ALL'}  subject=${ONLY_SUBJECT || 'ALL'}`);

// ── Seeded RNG (mulberry32) — deterministic ──
function mulberry32(seed) {
  let s = seed >>> 0;
  return function () {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Fisher-Yates shuffle in-place; trả về mapping oldIdx → newIdx. */
function shuffleWithMap(arr, rng) {
  const order = arr.map((_, i) => i);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // arr[oldIdx] sẽ chuyển đến vị trí mới: newIdx sao cho order[newIdx] = oldIdx
  const newArr = order.map((o) => arr[o]);
  const oldToNew = new Array(arr.length);
  order.forEach((oldIdx, newIdx) => { oldToNew[oldIdx] = newIdx; });
  return { newArr, oldToNew };
}

// ── Distractor yếu — danh sách generic + heuristic ──
const GENERIC_WEAK = [
  /^v[ôo]\s*ích$/i, /^không\s*biết$/i, /^không\s*có$/i, /^không\s*quan\s*trọng$/i,
  /^sai$/i, /^đúng$/i, /^phá\s*hoại$/i, /^vô\s*nghĩa$/i, /^bất\s*kỳ$/i,
  /^chẳng\s*làm\s*gì$/i, /^không\s*làm\s*gì$/i, /^không\s*biết\s*nữa$/i,
  /^không\s*rõ$/i, /^chưa\s*biết$/i, /^chưa\s*rõ$/i, /^không$/i, /^có$/i,
  /^abc$/i, /^xyz$/i, /^vớ\s*vẩn$/i, /^linh\s*tinh$/i,
];
function isWeakDistractor(text) {
  if (typeof text !== 'string') return false;
  const t = text.trim();
  if (t.length === 0) return true;
  if (t.length <= 5 && !/^[0-9.,\-\/x×÷+%]/.test(t)) return true; // bỏ qua "1+1", "12cm"
  return GENERIC_WEAK.some((re) => re.test(t));
}

// ── Parser: tìm các call Q(...) trong text + giải mã args ──
// Strategy:
//   1. Quét tuyến tính, tìm "Q(" ở context standalone (sau ws/punct).
//   2. Khi gặp, balance ( ) đến khi đóng → có span Q(...).
//   3. Bên trong, parse args bằng cách tách top-level comma (depth=0).
//   4. Eval từng arg bằng `new Function('return ' + s)` — args đều là JS literal.
//
// Output: array [{ start, end, stem, choices, answer, explanation, raw }]
// Mỗi entry là 1 Q() call, raw = nguyên text.
function findQCalls(src) {
  const out = [];
  let i = 0;
  while (i < src.length) {
    // Tìm "Q(" preceded by non-identifier char (để khỏi match "QQ(", "FooQ(", etc).
    const qPos = src.indexOf('Q(', i);
    if (qPos < 0) break;
    const prev = qPos === 0 ? '\n' : src[qPos - 1];
    if (/[A-Za-z0-9_$]/.test(prev)) { i = qPos + 1; continue; } // không phải đầu identifier
    // Bắt đầu balance từ vị trí '(' sau Q
    const argsStart = qPos + 2; // sau "Q("
    const end = balanceParens(src, argsStart - 1); // bắt đầu từ '('
    if (end < 0) { i = qPos + 1; continue; }
    const inside = src.slice(argsStart, end);
    let args;
    try { args = splitTopLevelComma(inside); }
    catch { i = end + 1; continue; }
    if (args.length < 3) { i = end + 1; continue; }
    let stem, choices, answer, explanation;
    try {
      stem        = evalLiteral(args[0]);
      choices     = evalLiteral(args[1]);
      answer      = evalLiteral(args[2]);
      explanation = args[3] !== undefined ? evalLiteral(args[3]) : '';
    } catch (e) {
      i = end + 1; continue;
    }
    if (typeof stem !== 'string' || !Array.isArray(choices) || !Number.isInteger(answer)) {
      i = end + 1; continue;
    }
    out.push({
      start: qPos, end: end + 1, // [start, end) là span gốc "Q(...)"
      stem, choices, answer, explanation,
      argText: { stem: args[0], choices: args[1], answer: args[2], explanation: args[3] || "''" },
    });
    i = end + 1;
  }
  return out;
}

/** Cân bằng ngoặc bắt đầu từ '(' tại pos. Trả vị trí ')' khớp, -1 nếu lỗi. */
function balanceParens(src, openPos) {
  if (src[openPos] !== '(') return -1;
  let depth = 0;
  let inStr = null, escape = false;
  for (let i = openPos; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (escape) { escape = false; continue; }
      if (c === '\\') { escape = true; continue; }
      if (c === inStr) { inStr = null; }
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === '/' && src[i + 1] === '/') { // line comment
      const nl = src.indexOf('\n', i);
      if (nl < 0) return -1; i = nl; continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      const close = src.indexOf('*/', i + 2);
      if (close < 0) return -1; i = close + 1; continue;
    }
    if (c === '(') depth++;
    else if (c === ')') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

/** Tách string theo dấu phẩy ở DEPTH 0 (ngoài mọi paren/bracket/brace/string). */
function splitTopLevelComma(s) {
  const out = [];
  let buf = '';
  let depth = 0, inStr = null, escape = false;
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
    if ((c === '(' || c === '[' || c === '{')) { depth++; buf += c; continue; }
    if ((c === ')' || c === ']' || c === '}')) { depth--; buf += c; continue; }
    if (c === ',' && depth === 0) { out.push(buf.trim()); buf = ''; continue; }
    buf += c;
  }
  if (buf.trim()) out.push(buf.trim());
  return out;
}

/** Evaluate JS literal an toàn — chỉ literal JSON-like + array/object. */
function evalLiteral(s) {
  // Dùng Function thay vì eval để cô lập scope. Vẫn nguy hiểm nếu source có
  // expression non-literal; nhưng source ta kiểm soát hoàn toàn (helper Q).
  // eslint-disable-next-line no-new-func
  return new Function('return (' + s + ')')();
}

/** Serialize back về JS literal — single-quoted string, escape khi cần. */
function jsString(s) {
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}
function jsArrayOfStrings(arr) {
  return '[' + arr.map(jsString).join(', ') + ']';
}

// ── Phát hiện file đích ──
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

// ── Main ──
async function main() {
  const files = await discover();
  console.log(`[shuffle] discovered ${files.length} files`);
  const rng = mulberry32(SEED);

  const stats = { files: 0, files_changed: 0, q_total: 0, q_shuffled: 0, weak: 0 };
  const before = { A: 0, B: 0, C: 0, D: 0, other: 0 };
  const after  = { A: 0, B: 0, C: 0, D: 0, other: 0 };
  const weakFlags = []; // {file, scenarioRef, optionText, qStem}

  for (const { grade, subject, file } of files) {
    stats.files++;
    const rel = path.relative(path.resolve(__dirname, '..'), file);
    const text = await fs.readFile(file, 'utf8');
    const calls = findQCalls(text);
    if (calls.length === 0) { continue; }

    // Build new text bằng cách replace từng span Q(...) → Q(...) shuffled
    let result = '';
    let cursor = 0;
    for (const c of calls) {
      stats.q_total++;
      // Stats before
      const keyOld = String.fromCharCode(65 + c.answer);
      before[(keyOld === 'A' || keyOld === 'B' || keyOld === 'C' || keyOld === 'D') ? keyOld : 'other']++;

      // Flag distractor yếu (mỗi câu)
      for (const opt of c.choices) {
        if (isWeakDistractor(opt)) {
          stats.weak++;
          weakFlags.push({ file: rel, qStem: String(c.stem).slice(0, 80), weakOption: String(opt).slice(0, 40) });
          break; // 1 lần / câu
        }
      }

      // Shuffle
      const { newArr, oldToNew } = shuffleWithMap(c.choices, rng);
      const newAnswer = oldToNew[c.answer];
      stats.q_shuffled++;
      const keyNew = String.fromCharCode(65 + newAnswer);
      after[(keyNew === 'A' || keyNew === 'B' || keyNew === 'C' || keyNew === 'D') ? keyNew : 'other']++;

      // Re-emit: giữ nguyên stem + explanation text (đã eval rồi serialize lại
      // có thể khác formatting; nên dùng lại argText gốc cho stem + expl).
      const replacement =
        'Q(' + c.argText.stem + ', ' +
        jsArrayOfStrings(newArr) + ', ' +
        String(newAnswer) + ', ' +
        c.argText.explanation + ')';

      result += text.slice(cursor, c.start) + replacement;
      cursor = c.end;
    }
    result += text.slice(cursor);

    if (result !== text) {
      stats.files_changed++;
      if (!DRY) {
        await fs.writeFile(file, result, 'utf8');
      }
    }
  }

  // Báo cáo
  const pct = (n, t) => t ? `${(n / t * 100).toFixed(1)}%` : '0%';
  console.log('\n=== TRƯỚC shuffle ===');
  console.log(`  A=${pct(before.A, stats.q_total)}  B=${pct(before.B, stats.q_total)}  C=${pct(before.C, stats.q_total)}  D=${pct(before.D, stats.q_total)}  other=${before.other}`);
  console.log('=== SAU shuffle ===');
  console.log(`  A=${pct(after.A, stats.q_total)}  B=${pct(after.B, stats.q_total)}  C=${pct(after.C, stats.q_total)}  D=${pct(after.D, stats.q_total)}  other=${after.other}`);

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify({ ...stats, mode: DRY ? 'dry' : 'write' }, null, 2));

  // Lưu flag distractor yếu
  await fs.mkdir(path.dirname(FLAG_OUT), { recursive: true });
  await fs.writeFile(FLAG_OUT, JSON.stringify({
    seed: SEED,
    totalFlagged: weakFlags.length,
    byFile: weakFlags.reduce((acc, f) => { acc[f.file] = (acc[f.file] || 0) + 1; return acc; }, {}),
    sample: weakFlags.slice(0, 200),
  }, null, 2));
  console.log(`Flagged ${weakFlags.length} câu có distractor yếu → ${path.relative(process.cwd(), FLAG_OUT)}`);
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
