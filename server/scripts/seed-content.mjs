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
const REGISTRY = [
  { collection: 'history-characters', file: 'history-characters.js', export: 'HISTORY_CHARACTERS' },
];

const { seedCollection, collectionCount } = DRY ? {} : await import('../contexts/content/index.js');

let grand = 0;
for (const r of REGISTRY) {
  let arr = [];
  try {
    const mod = await import(dataUrl(r.file));
    arr = mod[r.export] || [];
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
