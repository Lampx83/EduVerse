// Generator Phase ① (OTC) — 167 thuốc KHÔNG kê đơn → pharmacy-drugs.js + drug-placement.js
// Giữ nguyên Rx (rx_1/rx_2/side_herbal) + nhóm "không phải thuốc" (side_supp/side_cosmetic),
// chỉ thay toàn bộ thuốc trong các tủ OTC: otc_1, otc_2, front_eye, front_nose, front_topical.
// Chạy SAU gen-rx.mjs (hoặc bất kỳ thứ tự — hai generator phân vùng tủ bù trừ nhau).
import fs from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = `${REPO}/public/js/scenarios/_data`;
const PH = `${REPO}/public/js/pharmacy`;

const { ALL_DRUGS: OLD } = await import(pathToFileURL(`${DATA}/pharmacy-drugs.js`).href);
const PLACE_OLD = (await import(pathToFileURL(`${PH}/drug-placement.js`).href)).default;
const otc = JSON.parse(fs.readFileSync(resolve(REPO, 'scripts/_src/otc167.json'), 'utf8'));

// Tủ thuốc OTC bị thay toàn bộ (mọi tủ khác — Rx + không-phải-thuốc — giữ nguyên).
const OTC_CABS = new Set(['otc_1', 'otc_2', 'front_eye', 'front_nose', 'front_topical']);

// ── Sơ đồ tủ OTC (shelfIdx 0 = ngăn DƯỚI cùng; nhãn ngăn đã khớp catalog.js) ──
// frac = lát cắt theo thứ tự stt khi 1 nhóm trải nhiều ngăn / nhiều tủ.
// cell/cells = ô con khi nhiều nhóm chung 1 ngăn (vách " · ").
const PLAN = {
  // otc_1
  'Thuốc nhỏ mắt, mũi, tai OTC': [
    { cab: 'front_nose', shelf: 0, frac: [0, 3 / 13] },   // stt 63-65 (nhỏ/xịt mũi)
    { cab: 'front_eye', shelf: 0, frac: [3 / 13, 1] },    // stt 66-75 (nhỏ mắt)
  ],
  'Kháng histamin OTC':            [{ cab: 'otc_1', shelf: 1 }],
  'Ho cảm OTC':                    [{ cab: 'otc_1', shelf: 3, frac: [0, 0.5] }, { cab: 'otc_1', shelf: 2, frac: [0.5, 1] }],
  'Hạ nhiệt giảm đau OTC':         [{ cab: 'otc_1', shelf: 4 }],
  'Vitamin và khoáng chất OTC':    [{ cab: 'otc_1', shelf: 6, frac: [0, 0.5] }, { cab: 'otc_1', shelf: 5, frac: [0.5, 1] }],
  // otc_2
  'Thuốc dược liệu OTC':           [{ cab: 'otc_2', shelf: 2, frac: [0, 1 / 3] }, { cab: 'otc_2', shelf: 1, frac: [1 / 3, 2 / 3] }, { cab: 'otc_2', shelf: 0, frac: [2 / 3, 1] }],
  'Thuốc điều trị loét dạ dày OTC':[{ cab: 'otc_2', shelf: 3 }],
  'Thuốc tiêu hóa OTC':            [{ cab: 'otc_2', shelf: 5, frac: [0, 0.5] }, { cab: 'otc_2', shelf: 4, frac: [0.5, 1] }],
  'Thuốc phụ khoa OTC':            [{ cab: 'otc_2', shelf: 6, cell: 0, cells: 3 }],
  'Thuốc tránh thai OTC':          [{ cab: 'otc_2', shelf: 6, cell: 1, cells: 3 }],
  'Thuốc giun sán OTC':            [{ cab: 'otc_2', shelf: 6, cell: 2, cells: 3 }],
  // tủ trưng bày trước quầy
  'Thuốc dùng ngoài OTC':          [{ cab: 'front_topical', shelf: 0 }],
};
// Nhãn hiển thị (giữ nguyên tên nhóm Excel — đã đúng chính tả/khớp ngăn).
const GROUP_LABEL = Object.fromEntries(Object.keys(PLAN).map(g => [g, g]));

const PALETTE = ['#16a34a', '#059669', '#0d9488', '#0891b2', '#0284c7', '#65a30d', '#ca8a04',
  '#d97706', '#ea580c', '#dc2626', '#e11d48', '#db2777', '#c026d3', '#9333ea', '#7c3aed',
  '#4f46e5', '#2563eb', '#0e7490', '#15803d', '#b45309', '#a16207', '#be123c', '#a21caf', '#6d28d9'];
const STORAGE_DEFAULT = 'Bảo quản nơi khô ráo, thoáng mát, nhiệt độ dưới 30°C, tránh ánh sáng';

const parseHoatChat = (s) => {
  s = String(s || '').trim();
  if (!s) return ['', ''];
  if (s.includes(';') || s.includes(',')) return [s, '']; // đa thành phần → để nguyên
  const m = s.match(/^(.+?)\s+([\d.,]+\s*[a-zA-Zµμ%/]+.*)$/);
  return m ? [m[1].trim(), m[2].trim()] : [s, ''];
};
const parseUnits = (s) => {
  const nums = String(s || '').match(/\d+/g);
  if (!nums) return 1;
  return nums.map(Number).reduce((a, b) => a * b, 1) || 1;
};
const slugDigits = (n) => String(n).padStart(3, '0');

// ── Sinh drug objects + placement ─────────────────────────────────────────
const byGroup = new Map();
for (const r of otc) {
  if (!byGroup.has(r.nhom)) byGroup.set(r.nhom, []);
  byGroup.get(r.nhom).push(r);
}
const newDrugs = [];
const newPlace = {};
let gi = 0;
for (const [grp, list] of byGroup) {
  list.sort((a, b) => a.stt - b.stt);
  const plan = PLAN[grp];
  if (!plan) { console.error('NO PLAN for OTC group:', grp); process.exit(1); }
  for (const seg of plan) {
    const f = seg.frac || [0, 1];
    const from = Math.round(f[0] * list.length);
    const to = Math.round(f[1] * list.length);
    const slice = list.slice(from, to);
    slice.forEach((r) => {
      const id = `otck-${slugDigits(r.stt)}`;
      const [generic, strength] = parseHoatChat(r.hoatChat);
      const unitsPerBox = parseUnits(r.quyCach);
      const label = GROUP_LABEL[grp];
      const color = PALETTE[gi % PALETTE.length]; gi++;
      newDrugs.push({
        id, sku: id.toUpperCase(), name: r.ten, brand: r.ten,
        generic, strength, form: r.dangBaoChe, category: grp,
        cabinetId: seg.cab,
        pack: r.quyCach, retailUnit: `1 ${r.dvTinh || 'đơn vị'}`,
        unitsPerBox,
        barcode: '893' + slugDigits(r.stt) + String(1000000 + (r.stt * 7919) % 9000000),
        manufacturer: r.nsx, country: r.nuocXX, sdk: String(r.soDK || ''),
        isRx: false, isAntibiotic: false, isHazardPregnancy: false,
        groupId: seg.cab, groupLabel: label,
        groupAccent: color, bodyColor: '#fef9e7', textDark: true, boxesPerRow: 3,
        unitPrice: Math.round((r.giaBan || 0) * unitsPerBox),   // giá/HỘP cho POS
        activeIngredient: r.hoatChat, packaging: r.quyCach,
        stock: r.tonKho, stockUnit: r.dvKho,
        regNo: String(r.soDK || ''), lot: String(r.soLo || ''),
        mfgDate: r.ngaySX, expDate: r.hanDung,
        costPrice: r.giaNhap, salePrice: r.giaBan, retailUnitPrice: r.giaBan,
        unit: r.dvTinh, storage: r.baoQuan || STORAGE_DEFAULT, pharmaGroup: grp,
      });
      newPlace[id] = {
        cabinetId: seg.cab, shelfIdx: seg.shelf, groupLabel: label, brandColor: color,
        ...(seg.cells ? { cell: seg.cell || 0, cells: seg.cells } : {}),
      };
    });
  }
}

// ── Merge: giữ thuốc cũ KHÔNG nằm trong tủ OTC (Rx + không-phải-thuốc) ─────
// scene.js đặt thuốc tủ TRƯỚC theo drug.cabinetId, tủ LƯNG theo placement.cabinetId.
// → "tủ hiển thị thực" = front_* lấy cabinetId, còn lại lấy placement. Dọn đúng theo đó
// (vd vit-074..083 cabinetId=side_supp nhưng hiển thị ở otc_1 → phải bỏ; ho-032 hiển thị
// ở side_herbal → giữ).
const inFront = (c) => typeof c === 'string' && c.startsWith('front_');
const effectiveCab = (d) => inFront(d.cabinetId) ? d.cabinetId : (PLACE_OLD[d.id]?.cabinetId ?? null);
const keptDrugs = OLD.filter(d => !OTC_CABS.has(effectiveCab(d)));
const keptIds = new Set(keptDrugs.map(d => d.id));
const keptPlace = Object.fromEntries(Object.entries(PLACE_OLD).filter(([id]) => keptIds.has(id)));

const finalDrugs = [...keptDrugs, ...newDrugs];
const finalPlace = { ...keptPlace, ...newPlace };

console.log('OLD drugs total:', OLD.length, '| old OTC-cab removed:', OLD.length - keptDrugs.length, '| kept (Rx/không-phải-thuốc):', keptDrugs.length);
console.log('NEW otc drugs:', newDrugs.length, '| FINAL drugs:', finalDrugs.length, '| FINAL placement:', Object.keys(finalPlace).length);

// ── Ghi file ──────────────────────────────────────────────────────────────
const rxCount = keptDrugs.filter(d => d.isRx).length;
const drugHeader = `// DATA seed source — danh mục thuốc nhà thuốc thực hành (mô phỏng đào tạo GPP).\n`
  + `// ⚠ ${rxCount} thuốc KÊ ĐƠN (gen-rx.mjs ← Danh_muc_ke_don_21_06.xlsx) +\n`
  + `//   ${newDrugs.length} thuốc KHÔNG KÊ ĐƠN (gen-otc.mjs ← Danh_muc_OTC_21_06.xlsx) — dữ liệu thật.\n`
  + `// Nhóm "không phải thuốc" (mỹ phẩm/TPCN/dụng cụ ở side_supp/side_cosmetic) giữ nguyên bản cũ.\n`
  + `// KHÔNG sửa tay — chỉnh nguồn Excel rồi chạy lại scripts/gen-rx.mjs + scripts/gen-otc.mjs.\n`
  + `export const ALL_DRUGS = ${JSON.stringify(finalDrugs, null, 2)};\n`;
fs.writeFileSync(`${DATA}/pharmacy-drugs.js`, drugHeader);

let placeBody = `// Auto-generated mapping thuốc → ngăn dược lý + màu brand.\n`
  + `// shelfIdx 0 = ngăn DƯỚI cùng. cell/cells = ô con khi nhiều nhóm chung 1 ngăn.\n`
  + `// rx_1/rx_2 ← gen-rx.mjs; otc_1/otc_2/front_* ← gen-otc.mjs; phần còn lại giữ bản cũ.\n`
  + `export const DRUG_PLACEMENT = {\n`;
for (const [id, p] of Object.entries(finalPlace)) {
  placeBody += `  ${JSON.stringify(id)}: ${JSON.stringify(p)},\n`;
}
placeBody += `};\n\nexport default DRUG_PLACEMENT;\n`;
fs.writeFileSync(`${PH}/drug-placement.js`, placeBody);

// ── Self-check: đếm distinct drug / ngăn ───────────────────────────────────
const perShelf = {};
for (const [, p] of Object.entries(newPlace)) {
  const k = `${p.cabinetId}#${p.shelfIdx}` + (p.cells ? `(cell ${p.cell}/${p.cells})` : '');
  perShelf[k] = (perShelf[k] || 0) + 1;
}
console.log('\nDistinct thuốc / ngăn (otc mới):');
for (const k of Object.keys(perShelf).sort()) console.log('  ', k, '→', perShelf[k]);
console.log('\nĐã ghi: pharmacy-drugs.js, drug-placement.js');
