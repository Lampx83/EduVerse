#!/usr/bin/env node
// ============================================================
// Apply distractor edits từ workflow output về source files Tizia.
//
// Input: /tmp/regen-edits.json { ok: [{sourceFile, edits: [{qId, newDistractors: [{index, text}]}]}], … }
// Logic:
//   - Mỗi file: parse Q() calls bằng cùng parser shuffle-answers.js
//   - Match qId "<file>#<idx>" → Q call thứ <idx> trong file
//   - Replace choices[index] = text. GIỮ NGUYÊN answer index, stem, explanation.
//   - Sanity check: text khác answerText, text khác option khác hiện có.
//   - Ghi đè file.
//
// Cờ: --dry-run, --input=<path>
// ============================================================

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const argv = Object.fromEntries(process.argv.slice(2).map((a) => {
  const m = /^--([^=]+)(?:=(.*))?$/.exec(a);
  return m ? [m[1], m[2] ?? true] : [a, true];
}));
const INPUT = argv.input || '/tmp/regen-edits.json';
const DRY = argv['dry-run'] === true || argv['dry-run'] === 'true';

// Parser (reuse từ shuffle-answers.js)
function findQCalls(src) {
  const out = []; let i = 0;
  while (i < src.length) {
    const qPos = src.indexOf('Q(', i);
    if (qPos < 0) break;
    const prev = qPos === 0 ? '\n' : src[qPos - 1];
    if (/[A-Za-z0-9_$]/.test(prev)) { i = qPos + 1; continue; }
    const argsStart = qPos + 2;
    const end = balanceParens(src, argsStart - 1);
    if (end < 0) { i = qPos + 1; continue; }
    const inside = src.slice(argsStart, end);
    let args; try { args = splitTopLevelComma(inside); } catch { i = end + 1; continue; }
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
    out.push({
      start: qPos, end: end + 1, stem, choices, answer, explanation,
      argText: { stem: args[0], choices: args[1], answer: args[2], explanation: args[3] || "''" },
    });
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
function jsString(s) {
  return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
}
function jsArrayOfStrings(arr) {
  return '[' + arr.map(jsString).join(', ') + ']';
}

async function main() {
  const input = JSON.parse(await fs.readFile(INPUT, 'utf8'));
  const ok = input.ok || [];
  console.log(`[apply] mode=${DRY ? 'DRY-RUN' : 'WRITE'}  files=${ok.length}`);

  const stats = {
    files: 0, files_changed: 0, files_skipped: 0,
    edits_total: 0, edits_applied: 0, edits_skipped: 0,
    skipped_reasons: {},
  };

  for (const fileResult of ok) {
    stats.files++;
    const rel = fileResult.sourceFile;
    const filePath = path.resolve(ROOT, rel);
    let text;
    try { text = await fs.readFile(filePath, 'utf8'); }
    catch (e) { console.warn(`[skip] ${rel}: read fail ${e.message}`); stats.files_skipped++; continue; }

    const calls = findQCalls(text);
    const editsByIdx = new Map(); // qIdx → [{index, text}]
    for (const ed of fileResult.edits || []) {
      stats.edits_total++;
      const m = /#(\d+)$/.exec(ed.qId);
      if (!m) { stats.edits_skipped++; stats.skipped_reasons.bad_qid = (stats.skipped_reasons.bad_qid || 0) + 1; continue; }
      const idx = Number(m[1]);
      if (!editsByIdx.has(idx)) editsByIdx.set(idx, []);
      editsByIdx.get(idx).push(...(ed.newDistractors || []));
    }

    // Build new text: replace từng Q call có edit
    let result = '', cursor = 0;
    for (let qi = 0; qi < calls.length; qi++) {
      const c = calls[qi];
      const eds = editsByIdx.get(qi);
      if (!eds || eds.length === 0) continue; // không sửa câu này

      const newChoices = c.choices.slice();
      for (const { index, text: newText } of eds) {
        if (!Number.isInteger(index) || index < 0 || index >= newChoices.length) {
          stats.edits_skipped++; stats.skipped_reasons.bad_index = (stats.skipped_reasons.bad_index || 0) + 1;
          continue;
        }
        if (index === c.answer) {
          stats.edits_skipped++; stats.skipped_reasons.would_replace_answer = (stats.skipped_reasons.would_replace_answer || 0) + 1;
          continue;
        }
        if (!newText || typeof newText !== 'string' || newText.length < 3) {
          stats.edits_skipped++; stats.skipped_reasons.too_short = (stats.skipped_reasons.too_short || 0) + 1;
          continue;
        }
        const trimmed = newText.trim();
        // Tránh trùng answer
        if (trimmed === String(c.choices[c.answer]).trim()) {
          stats.edits_skipped++; stats.skipped_reasons.dup_answer = (stats.skipped_reasons.dup_answer || 0) + 1;
          continue;
        }
        // Tránh trùng option khác (ở chỗ KHÔNG sửa)
        const dup = newChoices.some((opt, k) => k !== index && String(opt).trim() === trimmed);
        if (dup) {
          stats.edits_skipped++; stats.skipped_reasons.dup_option = (stats.skipped_reasons.dup_option || 0) + 1;
          continue;
        }
        newChoices[index] = trimmed;
        stats.edits_applied++;
      }

      // Re-emit Q call: GIỮ stem + explanation argText gốc, answer giữ nguyên index
      const replacement =
        'Q(' + c.argText.stem + ', ' +
        jsArrayOfStrings(newChoices) + ', ' +
        String(c.answer) + ', ' +
        c.argText.explanation + ')';
      result += text.slice(cursor, c.start) + replacement;
      cursor = c.end;
    }
    result += text.slice(cursor);

    if (result !== text) {
      stats.files_changed++;
      if (!DRY) await fs.writeFile(filePath, result, 'utf8');
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify(stats, null, 2));
}
main().catch(e => { console.error('FATAL', e); process.exit(1); });
