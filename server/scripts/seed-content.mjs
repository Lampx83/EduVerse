// ============================================================
// Seed content_datasets từ các file data gốc → DB.
// ============================================================
// Data heterogeneous (nhân vật LS, ca lâm sàng, thuốc, 63 tỉnh…) hardcode trong
// các file _data/*.js (hoặc trích từ HTML). Script này nạp vào content_datasets.
//
// Idempotent — không đè bản source='admin'.
//
// Dùng:  node server/scripts/seed-content.mjs [--dry]
// Prod:  docker exec tizia node server/scripts/seed-content.mjs
// ============================================================

import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes('--dry');
const dataUrl = (p) => pathToFileURL(resolve(__dirname, '../../public/js/scenarios/_data', p)).href;

// collection → { file, export } : tên file trong _data/ + tên export mảng data.
// file: đường dẫn từ _data/ (dùng '../x.js' để đọc file gốc còn vai seed khác).
// wrap: data là 1 object (không phải mảng) → bọc thành 1 item.
const REGISTRY = [
  { collection: 'history-characters', file: 'history-characters.js', export: 'HISTORY_CHARACTERS' },
  { collection: 'patient-cases',      file: 'patient-cases.js',      export: 'PATIENT_CASES' },
  { collection: 'math2-topics',       file: 'math2-fun.js',          export: 'MATH2_TOPICS' },
  { collection: 'math6-topics',       file: 'math6-quest.js',        export: 'MATH6_TOPICS' },
  { collection: 'negotiation',        file: 'negotiation.js',        export: 'NEGOTIATION_SCENARIOS' },
  { collection: 'osce-exam',          file: 'year5.js',              export: 'L57_OSCE_EXAM', wrap: true },
  // math6-chapters: đọc file gốc (vẫn là seed cho _all-content qua side-effect).
  { collection: 'math6-chapters',     file: '../secondary-math6-lessons.js', export: 'MATH6_CHAPTERS' },
];

const { seedCollection, collectionCount } = DRY ? {} : await import('../contexts/content/index.js');

let grand = 0;
for (const r of REGISTRY) {
  let arr = [];
  try {
    const mod = await import(dataUrl(r.file));
    const data = mod[r.export];
    arr = r.wrap ? (data ? [data] : []) : (data || []);
  } catch (e) {
    console.log(`[seed-content] ✗ ${r.collection}: không đọc được ${r.file} (${e.message.slice(0,60)})`);
    continue;
  }
  if (!Array.isArray(arr) || !arr.length) {
    console.log(`[seed-content] ✗ ${r.collection}: export ${r.export} rỗng/không phải mảng`);
    continue;
  }
  if (DRY) {
    console.log(`[seed-content] (dry) ${r.collection}: ${arr.length} item`);
    grand += arr.length;
    continue;
  }
  const n = seedCollection(r.collection, arr);
  console.log(`[seed-content] ✓ ${r.collection}: ${n} item (DB có ${collectionCount(r.collection)})`);
  grand += n;
}
console.log(`[seed-content] tổng ${grand} item.`);
process.exit(0);
