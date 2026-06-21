// Generator Phase ① — 165 thuốc kê đơn thật → pharmacy-drugs.js + drug-placement.js
// Giữ nguyên OTC/side/dùng-ngoài cũ, chỉ thay toàn bộ thuốc trong rx_1 & rx_2.
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = `${REPO}/public/js/scenarios/_data`;
const PH = `${REPO}/public/js/pharmacy`;

const { ALL_DRUGS: OLD } = await import(pathToFileURL(`${DATA}/pharmacy-drugs.js`).href);
const PLACE_OLD = (await import(pathToFileURL(`${PH}/drug-placement.js`).href)).default;
const rx = JSON.parse(fs.readFileSync(resolve(REPO, 'scripts/_src/rx165.json'), 'utf8'));

// ── Sơ đồ tủ theo ảnh thầy gửi (shelfIdx 0 = ngăn DƯỚI cùng) ──────────────
// frac = lát cắt danh sách thuốc của nhóm (nhóm lớn trải 2 ngăn).
// cell/cells = ô con khi nhiều nhóm chung 1 ngăn (vách " · ").
const PLAN = {
  // rx_1 (ảnh image2)
  'Thuốc thần kinh Rx':            [{ cab:'rx_1', shelf:6 }],
  'Hormon & nội tiết Rx':          [{ cab:'rx_1', shelf:5, frac:[0,0.5] }, { cab:'rx_1', shelf:4, frac:[0.5,1] }],
  'Kháng sinh Rx':                 [{ cab:'rx_1', shelf:3, frac:[0,0.52] }, { cab:'rx_1', shelf:2, frac:[0.52,1] }],
  'Thuốc kháng virus Rx':          [{ cab:'rx_1', shelf:1, cell:0, cells:3 }],
  'Thuốc hô hấp Rx':               [{ cab:'rx_1', shelf:1, cell:1, cells:3 }],
  'Vitamin và KC Rx':              [{ cab:'rx_1', shelf:1, cell:2, cells:3 }],
  'Thuốc nhỏ mắt, mũi, tai Rx':    [{ cab:'rx_1', shelf:0 }],
  // rx_2 (ảnh image1)
  'Phụ khoa Rx':                   [{ cab:'rx_2', shelf:6, cell:0, cells:2 }],
  'Thuốc tiêu hóa Rx':             [{ cab:'rx_2', shelf:6, cell:1, cells:2 }],
  'Thuốc tim mạch Rx':             [{ cab:'rx_2', shelf:5, frac:[0,0.5] }, { cab:'rx_2', shelf:4, frac:[0.5,1] }],
  'Thuốc tiểu đường Rx':           [{ cab:'rx_2', shelf:3 }],
  'Thuốc điều trị loét dạ dày Rx': [{ cab:'rx_2', shelf:2 }],
  'Thuốc giảm đau chống viêm Rx':  [{ cab:'rx_2', shelf:1, cell:0, cells:2 }],
  'Thuốc cơ xương khớp Rx':        [{ cab:'rx_2', shelf:1, cell:1, cells:2 }],
  'Thuốc tiêm truyền Rx':          [{ cab:'rx_2', shelf:0 }],
};
// Nhãn hiển thị (đúng chính tả sơ đồ; scene sẽ IN HOA).
const GROUP_LABEL = {
  'Thuốc thần kinh Rx':'Thuốc thần kinh Rx', 'Hormon & nội tiết Rx':'Hormon và nội tiết Rx',
  'Phụ khoa Rx':'Thuốc phụ khoa Rx', 'Kháng sinh Rx':'Kháng sinh Rx',
  'Thuốc điều trị loét dạ dày Rx':'Thuốc điều trị loét dạ dày Rx', 'Thuốc tiêu hóa Rx':'Thuốc tiêu hóa Rx',
  'Vitamin và KC Rx':'Vitamin & khoáng chất Rx', 'Thuốc nhỏ mắt, mũi, tai Rx':'Thuốc nhỏ mắt, mũi, tai Rx',
  'Thuốc cơ xương khớp Rx':'Thuốc cơ, xương khớp Rx', 'Thuốc kháng virus Rx':'Thuốc kháng virus Rx',
  'Thuốc tim mạch Rx':'Thuốc tim mạch Rx', 'Thuốc tiểu đường Rx':'Thuốc tiểu đường Rx',
  'Thuốc giảm đau chống viêm Rx':'Thuốc chống viêm Rx', 'Thuốc hô hấp Rx':'Thuốc hô hấp Rx',
  'Thuốc tiêm truyền Rx':'Thuốc tiêm & dịch truyền Rx',
};
const PALETTE = ['#dc2626','#ea580c','#d97706','#ca8a04','#65a30d','#16a34a','#059669','#0d9488',
  '#0891b2','#0284c7','#2563eb','#4f46e5','#7c3aed','#9333ea','#c026d3','#db2777',
  '#e11d48','#b45309','#155e75','#1e40af','#3730a3','#581c87','#831843','#7f1d1d'];

const parseHoatChat = (s) => {
  s = String(s || '').trim();
  if (!s) return ['', ''];
  if (s.includes(';')) return [s, '']; // đa thành phần → để nguyên, không tách hàm lượng
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
for (const r of rx) {
  if (!byGroup.has(r.nhom)) byGroup.set(r.nhom, []);
  byGroup.get(r.nhom).push(r);
}
const newDrugs = [];
const newPlace = {};
let gi = 0;
for (const [grp, list] of byGroup) {
  list.sort((a, b) => a.stt - b.stt);
  const plan = PLAN[grp];
  if (!plan) { console.error('NO PLAN for group:', grp); process.exit(1); }
  // map từng drug → 1 entry của plan theo frac
  for (const seg of plan) {
    const f = seg.frac || [0, 1];
    const from = Math.round(f[0] * list.length);
    const to = Math.round(f[1] * list.length);
    const slice = list.slice(from, to);
    slice.forEach((r) => {
      const id = `rxk-${slugDigits(r.stt)}`;
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
        barcode: '893' + slugDigits(r.stt) + String(1000000 + (r.stt * 6151) % 9000000),
        manufacturer: r.nsx, country: r.nuocXX, sdk: String(r.soDK || ''),
        isRx: true, isAntibiotic: grp === 'Kháng sinh Rx', isHazardPregnancy: false,
        groupId: seg.cab, groupLabel: label,
        groupAccent: color, bodyColor: '#fef9e7', textDark: true, boxesPerRow: 3,
        unitPrice: Math.round((r.giaBan || 0) * unitsPerBox),   // giá/HỘP cho POS hiện tại
        // ── trường dữ liệu thật phục vụ nhãn (Phase ③) + tồn kho/POS lẻ ──
        activeIngredient: r.hoatChat, packaging: r.quyCach,
        stock: r.tonKho, stockUnit: r.dvKho,
        regNo: String(r.soDK || ''), lot: String(r.soLo || ''),
        mfgDate: r.ngaySX, expDate: r.hanDung,
        costPrice: r.giaNhap, salePrice: r.giaBan, retailUnitPrice: r.giaBan,
        unit: r.dvTinh, storage: r.baoQuan, pharmaGroup: grp,
      });
      newPlace[id] = {
        cabinetId: seg.cab, shelfIdx: seg.shelf, groupLabel: label, brandColor: color,
        ...(seg.cells ? { cell: seg.cell || 0, cells: seg.cells } : {}),
      };
    });
  }
}

// ── Merge: giữ thuốc cũ KHÔNG thuộc rx_1/rx_2 ─────────────────────────────
const isOldRx = (d) => { const p = PLACE_OLD[d.id]; return p && (p.cabinetId === 'rx_1' || p.cabinetId === 'rx_2'); };
const keptDrugs = OLD.filter(d => !isOldRx(d));
const keptPlace = Object.fromEntries(Object.entries(PLACE_OLD).filter(([, p]) => p.cabinetId !== 'rx_1' && p.cabinetId !== 'rx_2'));

const finalDrugs = [...newDrugs, ...keptDrugs];
const finalPlace = { ...newPlace, ...keptPlace };

console.log('OLD drugs total:', OLD.length, '| old rx_1/rx_2 removed:', OLD.length - keptDrugs.length, '| kept (OTC/side/ngoài):', keptDrugs.length);
console.log('NEW rx drugs:', newDrugs.length, '| FINAL drugs:', finalDrugs.length, '| FINAL placement:', Object.keys(finalPlace).length);

// ── Ghi file ──────────────────────────────────────────────────────────────
const drugHeader = `// DATA seed source — danh mục thuốc nhà thuốc thực hành (mô phỏng đào tạo GPP).\n`
  + `// ⚠ ${newDrugs.length} thuốc KÊ ĐƠN (rx_1, rx_2) sinh từ Danh_muc_ke_don_21_06.xlsx — dữ liệu thật\n`
  + `// (số ĐK/lô/HSD/giá/tồn kho). Các thuốc OTC/side/dùng-ngoài giữ nguyên bản cũ.\n`
  + `// KHÔNG sửa tay — chỉnh nguồn Excel rồi chạy lại scripts/gen-rx.mjs.\n`
  + `export const ALL_DRUGS = ${JSON.stringify(finalDrugs, null, 2)};\n`;
fs.writeFileSync(`${DATA}/pharmacy-drugs.js`, drugHeader);

let placeBody = `// Auto-generated mapping thuốc → ngăn dược lý + màu brand.\n`
  + `// shelfIdx 0 = ngăn DƯỚI cùng. cell/cells = ô con khi nhiều nhóm chung 1 ngăn.\n`
  + `// rx_1/rx_2 sinh từ scripts/gen-rx.mjs theo sơ đồ tủ; phần còn lại giữ bản cũ.\n`
  + `export const DRUG_PLACEMENT = {\n`;
for (const [id, p] of Object.entries(finalPlace)) {
  placeBody += `  ${JSON.stringify(id)}: ${JSON.stringify(p)},\n`;
}
placeBody += `};\n\nexport default DRUG_PLACEMENT;\n`;
fs.writeFileSync(`${PH}/drug-placement.js`, placeBody);

// ── Self-check: đếm distinct drug / ngăn để biết ngăn nào đông ─────────────
const perShelf = {};
for (const [id, p] of Object.entries(newPlace)) {
  const k = `${p.cabinetId}#${p.shelfIdx}` + (p.cells ? `(cell ${p.cell}/${p.cells})` : '');
  perShelf[k] = (perShelf[k] || 0) + 1;
}
console.log('\nDistinct thuốc / ngăn (rx mới):');
for (const k of Object.keys(perShelf).sort()) console.log('  ', k, '→', perShelf[k]);
console.log('\nĐã ghi: pharmacy-drugs.js, drug-placement.js');
