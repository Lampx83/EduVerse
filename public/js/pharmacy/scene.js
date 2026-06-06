// GPP 3D Pharmacy scene — full port từ Pharmacy-AI/src/components/scenes/GppScene.tsx.
// Bao gồm: 4 tủ sau + 3 tủ bên + quầy + POS + label tray + pick tray (Phase 1-3) ·
// Fridge 5-ngăn + 13 stocks + door hinge animation · Consult desk · Pharmacist/Patient GLB
// với idle animation · Ceiling fan + AC + 2 plants sway · Tool tray (scissors/tape/pen/notepad)
// · barcode_scanner + receipt_printer · WaitingChair · 11 camera presets với 700ms lerp.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { CABINETS, ALL_DRUGS } from './catalog.js';
import { DRUG_PLACEMENT } from './drug-placement.js';

const MODELS_BASE = './models/pharmacy/';

// ── Deterministic box rendering helpers (port 1-1 từ upstream) ──────────────
const DRUG_ACCENT_PALETTE = [
  '#dc2626','#ea580c','#d97706','#ca8a04','#65a30d','#16a34a','#059669','#0d9488',
  '#0891b2','#0284c7','#2563eb','#4f46e5','#7c3aed','#9333ea','#c026d3','#db2777',
  '#e11d48','#b45309','#92400e','#155e75','#1e40af','#3730a3','#581c87','#831843','#7f1d1d'
];
const TABLET_DIMS = [
  {w:0.090,h:0.135,d:0.050},{w:0.100,h:0.150,d:0.055},{w:0.110,h:0.140,d:0.055},
  {w:0.105,h:0.165,d:0.060},{w:0.095,h:0.155,d:0.050},{w:0.115,h:0.130,d:0.060},
  {w:0.085,h:0.145,d:0.050}
];
const SYRUP_DIMS  = [{w:0.085,h:0.205,d:0.072},{w:0.080,h:0.220,d:0.068},{w:0.090,h:0.185,d:0.075}];
const SPRAY_DIMS  = [{w:0.072,h:0.225,d:0.058},{w:0.065,h:0.205,d:0.055},{w:0.078,h:0.215,d:0.062}];
const DROP_DIMS   = [{w:0.055,h:0.110,d:0.040},{w:0.060,h:0.120,d:0.045},{w:0.050,h:0.100,d:0.038}];
const BOTTLE_DIMS = [{w:0.078,h:0.160,d:0.058},{w:0.083,h:0.150,d:0.062},{w:0.072,h:0.175,d:0.055}];
const TUBE_DIMS   = [{w:0.088,h:0.115,d:0.048},{w:0.078,h:0.130,d:0.045},{w:0.082,h:0.105,d:0.050}];
const AMPOULE_DIMS= [{w:0.065,h:0.125,d:0.045},{w:0.070,h:0.130,d:0.045}];
const SACHET_DIMS = [{w:0.108,h:0.092,d:0.042},{w:0.115,h:0.105,d:0.048}];
const DEVICE_DIMS = [{w:0.085,h:0.160,d:0.055},{w:0.090,h:0.150,d:0.060}];

function hashSku(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = (h * 16777619) >>> 0; }
  return h;
}

// Sinh meta deterministic per-SKU (stock + expiry) — không cần thêm field vào
// catalog.js. Cùng SKU luôn ra cùng giá trị, ổn định giữa các lần render.
export function getDrugMeta(drug) {
  const h = hashSku(drug.sku || drug.id);
  const stock = 5 + (h % 196);              // 5..200 hộp
  const monthsAhead = h % 37;                // 0..36 tháng kể từ 2026-01
  const baseM = 1 + monthsAhead;             // 1..37
  const expiryYear = 2026 + Math.floor((baseM - 1) / 12);
  const expiryMonth = ((baseM - 1) % 12) + 1;
  const mm = String(expiryMonth).padStart(2, '0');
  const lot = ('LOT' + h.toString(36).toUpperCase()).slice(0, 9);
  return { stock, expiry: `${mm}/${expiryYear}`, expiryMonth, expiryYear, lot };
}
function lightenHex(hex, amount = 0.18) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return hex;
  const n = parseInt(m[1], 16);
  const r = (n >> 16) & 0xff, g = (n >> 8) & 0xff, b = n & 0xff;
  const mix = (c) => Math.round(c + (255 - c) * amount);
  return `#${[mix(r), mix(g), mix(b)].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}
function getDrugColors(drug) {
  const h = hashSku(drug.sku);
  const accent = DRUG_ACCENT_PALETTE[h % DRUG_ACCENT_PALETTE.length];
  return { accent, body: lightenHex(accent, 0.85) };
}
function getBoxStyle(drug) {
  const h = hashSku(drug.sku);
  const f = drug.form || '';
  let dim;
  if (/siro|hỗn dịch|nước uống/i.test(f))                dim = SYRUP_DIMS[h % SYRUP_DIMS.length];
  else if (/bình xịt|xịt mũi|dung dịch xịt/i.test(f))   dim = SPRAY_DIMS[h % SPRAY_DIMS.length];
  else if (/nhỏ mắt|nhỏ giọt|ống nhỏ/i.test(f) || /^dung dịch nhỏ$/i.test(f)) dim = DROP_DIMS[h % DROP_DIMS.length];
  else if (/^lọ$|^dung dịch$/i.test(f))                  dim = BOTTLE_DIMS[h % BOTTLE_DIMS.length];
  else if (/kem bôi|gel bôi|cao xoa|mỡ/i.test(f))       dim = TUBE_DIMS[h % TUBE_DIMS.length];
  else if (/ống khí dung|ống uống|ống/i.test(f))         dim = AMPOULE_DIMS[h % AMPOULE_DIMS.length];
  else if (/gói|bột/i.test(f))                           dim = SACHET_DIMS[h % SACHET_DIMS.length];
  else if (/miếng dán/i.test(f))                         dim = { w: 0.115, h: 0.085, d: 0.035 };
  else if (/bút|que thử|thiết bị/i.test(f))             dim = DEVICE_DIMS[h % DEVICE_DIMS.length];
  else                                                    dim = TABLET_DIMS[h % TABLET_DIMS.length];
  // Đa dạng size mỗi SKU ±18% per axis từ base dim — đảm bảo không 2 SKU
  // nào hoàn toàn bằng nhau. Lấy 3 byte khác nhau của hash để 3 axis độc lập.
  const scaleW = 0.82 + (((h      ) >>> 0) % 37) / 100; // 0.82..1.18
  const scaleH = 0.82 + (((h >>  8) >>> 0) % 37) / 100;
  const scaleD = 0.88 + (((h >> 16) >>> 0) % 25) / 100; // 0.88..1.12 (đỡ vênh hộp mỏng)
  const variants = ['banner','panel','stripe','twotone','classic','flag'];
  const variant = variants[h % variants.length];
  const copies = 3;
  return {
    w: dim.w * scaleW,
    h: dim.h * scaleH,
    d: dim.d * scaleD,
    variant,
    copies
  };
}

// Tem nhãn dán mặt ngoài hộp thuốc (canvas → CanvasTexture). Hiển thị
// nhóm (NHỎ MẮT/NHỎ MŨI/…) + brand + strength để dược sĩ nhận diện từ xa.
function makeDrugLabelTex(drug) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 320;
  const ctx = c.getContext('2d');
  // Background body color
  ctx.fillStyle = drug.bodyColor || '#f8fafc';
  ctx.fillRect(0, 0, 256, 320);
  // Accent band top
  const accent = drug.groupAccent || '#0d9488';
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 256, 56);
  // Group label
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 26px Inter, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText((drug.groupLabel || drug.category || '').slice(0, 18), 128, 28);
  // Brand name
  const textDark = drug.textDark !== false;
  ctx.fillStyle = textDark ? '#0f172a' : '#ffffff';
  ctx.font = 'bold 36px Inter, sans-serif';
  const brand = (drug.brand || drug.name || '').slice(0, 14);
  ctx.fillText(brand, 128, 130);
  // Generic
  ctx.fillStyle = textDark ? '#334155' : '#cbd5e1';
  ctx.font = '22px Inter, sans-serif';
  ctx.fillText((drug.generic || '').slice(0, 22), 128, 180);
  // Strength
  ctx.fillStyle = accent;
  ctx.font = 'bold 28px Inter, sans-serif';
  ctx.fillText((drug.strength || '').slice(0, 20), 128, 230);
  // Form
  ctx.fillStyle = textDark ? '#64748b' : '#e2e8f0';
  ctx.font = '18px Inter, sans-serif';
  ctx.fillText((drug.form || '').slice(0, 26), 128, 268);
  // HD (hạn dùng) + LOT — đáy hộp, font nhỏ
  const meta = getDrugMeta(drug);
  ctx.fillStyle = textDark ? '#7c2d12' : '#fed7aa';
  ctx.font = 'bold 16px "Courier New", monospace';
  ctx.fillText(`HD ${meta.expiry} · ${meta.lot}`, 128, 300);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

// Mỗi LOẠI thuốc đứng thành stack 3 hộp xếp dọc trục Z (ngoài → trong). Hàm này
// trả về MỘT hộp duy nhất (body + nhãn dán mặt +z). Stack được build ở caller —
// mỗi hộp là 1 entry độc lập trong `drugMeshes` để có thể pick lẻ.
function buildSingleDrugBox(drug, style) {
  const colors = getDrugColors(drug);
  // Override body color theo BRAND THẬT (DRUG_PLACEMENT → drug.bodyColor).
  const bodyHex = drug.bodyColor || colors.body;
  const accentHex = drug.groupAccent || colors.accent;
  const sub = new THREE.Group();
  const body = new THREE.Color(bodyHex);
  const bodyMat = new THREE.MeshStandardMaterial({ color: body, roughness: 0.75, metalness: 0.05 });
  const box = new THREE.Mesh(new THREE.BoxGeometry(style.w, style.h, style.d), bodyMat);
  box.castShadow = true; box.receiveShadow = true;
  sub.add(box);

  // Decoration: dải accent ngang theo brand. Mọi decal MỎNG đẩy ra trước
  // mặt body ≥3mm (PHYSICAL offset, không chỉ polygonOffset) để loại bỏ
  // 100% z-fight kể cả khi logarithmicDepthBuffer + camera.near=0.3.
  const variant = style.variant || 'banner';
  const accentColor = new THREE.Color(accentHex);
  const stripeMat = new THREE.MeshStandardMaterial({
    color: accentColor, roughness: 0.55,
    polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4
  });
  const FRONT_STRIPE = style.d / 2 + 0.003; // 3mm trước body
  if (variant === 'banner') {
    const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.96, style.h * 0.18, 0.0025), stripeMat);
    s.position.set(0, -style.h * 0.32, FRONT_STRIPE); sub.add(s);
  } else if (variant === 'stripe') {
    const s1 = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.96, style.h * 0.06, 0.0025), stripeMat);
    s1.position.set(0, -style.h * 0.40, FRONT_STRIPE); sub.add(s1);
    const s2 = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.96, style.h * 0.06, 0.0025), stripeMat);
    s2.position.set(0, -style.h * 0.45, FRONT_STRIPE); sub.add(s2);
  } else if (variant === 'flag') {
    const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.18, style.h * 0.96, 0.0025), stripeMat);
    s.position.set(-style.w * 0.39, 0, FRONT_STRIPE); sub.add(s);
  }

  // Nhãn dán mặt NGOÀI (+z) — group + brand + strength để dược sĩ nhận diện từ xa.
  // Merge accent/body color của drug để tem đồng bộ với màu thân hộp.
  const labelTex = makeDrugLabelTex({
    ...drug,
    bodyColor: drug.bodyColor || colors.body,
    groupAccent: drug.groupAccent || colors.accent,
    textDark: drug.textDark !== false
  });
  const labelMat = new THREE.MeshStandardMaterial({
    map: labelTex, roughness: 0.7,
    polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
  });
  const label = new THREE.Mesh(
    new THREE.PlaneGeometry(style.w * 0.92, style.h * 0.88),
    labelMat
  );
  // Đẩy label ra 5mm so với mặt body (trước chỉ 0.8mm → fight rõ).
  label.position.set(0, 0, style.d / 2 + 0.005);
  sub.add(label);
  return sub;
}

// ── Procedural textures (port từ compounding-lab.html) — sàn gạch + tường tile + bàn marble
function makePharmacyFloorTex() {
  const c = document.createElement('canvas');
  c.width = c.height = 1024;
  const x = c.getContext('2d');
  // Sàn nhà thuốc: tile trắng kem sạch (khác lab dùng brick nâu)
  x.fillStyle = '#d6d8d0'; x.fillRect(0, 0, 1024, 1024); // grout
  const tileSize = 256, gap = 5;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const hue = 35 + Math.random() * 6;
      const sat = 8 + Math.random() * 6;
      const lig = 86 + Math.random() * 4;
      const px = i * tileSize + gap, py = j * tileSize + gap;
      const w = tileSize - gap * 2, h = tileSize - gap * 2;
      const g = x.createLinearGradient(px, py, px + w, py + h);
      g.addColorStop(0, `hsl(${hue}, ${sat}%, ${lig + 3}%)`);
      g.addColorStop(0.5, `hsl(${hue}, ${sat}%, ${lig}%)`);
      g.addColorStop(1, `hsl(${hue}, ${sat}%, ${lig - 3}%)`);
      x.fillStyle = g;
      const r = 3;
      x.beginPath();
      x.moveTo(px + r, py);
      x.lineTo(px + w - r, py); x.quadraticCurveTo(px + w, py, px + w, py + r);
      x.lineTo(px + w, py + h - r); x.quadraticCurveTo(px + w, py + h, px + w - r, py + h);
      x.lineTo(px + r, py + h); x.quadraticCurveTo(px, py + h, px, py + h - r);
      x.lineTo(px, py + r); x.quadraticCurveTo(px, py, px + r, py);
      x.closePath(); x.fill();
      for (let k = 0; k < 50; k++) {
        x.fillStyle = `rgba(120,120,120,${0.02 + Math.random() * 0.04})`;
        x.fillRect(px + Math.random() * w, py + Math.random() * h, 1 + Math.random(), 1 + Math.random());
      }
      x.strokeStyle = 'rgba(255,255,255,0.12)';
      x.lineWidth = 1;
      x.beginPath();
      x.moveTo(px + 3, py + 3); x.lineTo(px + w - 3, py + 3);
      x.stroke();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}
function makePharmacyWallTex() {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const x = c.getContext('2d');
  x.fillStyle = '#eaf0ea'; x.fillRect(0, 0, 512, 512);
  x.strokeStyle = '#b8c5bd'; x.lineWidth = 2.5;
  for (let i = 0; i <= 4; i++) {
    x.beginPath(); x.moveTo(i * 128, 0); x.lineTo(i * 128, 512); x.stroke();
    x.beginPath(); x.moveTo(0, i * 128); x.lineTo(512, i * 128); x.stroke();
  }
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    const g = x.createLinearGradient(i * 128, j * 128, (i + 1) * 128, (j + 1) * 128);
    g.addColorStop(0, 'rgba(255,255,255,0.10)');
    g.addColorStop(1, 'rgba(0,0,0,0.04)');
    x.fillStyle = g; x.fillRect(i * 128, j * 128, 128, 128);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 1.5);
  return t;
}
function makeCounterMarbleTex(w = 1024, h = 512) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#f7ecd8'); g.addColorStop(0.5, '#ecdcc0'); g.addColorStop(1, '#dcc8a4');
  x.fillStyle = g; x.fillRect(0, 0, w, h);
  x.strokeStyle = 'rgba(120,90,60,0.15)';
  for (let i = 0; i < 10; i++) {
    x.beginPath(); x.lineWidth = 0.4 + Math.random() * 1.2;
    let px = Math.random() * w, py = 0;
    x.moveTo(px, py);
    while (py < h) {
      px += (Math.random() - 0.5) * 60; py += 10 + Math.random() * 20;
      x.lineTo(px, py);
    }
    x.stroke();
  }
  for (let i = 0; i < 800; i++) {
    x.fillStyle = `rgba(100,75,45,${Math.random() * 0.04})`;
    x.fillRect(Math.random() * w, Math.random() * h, 1, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = 8;
  return t;
}

// ── GLB loader helper (auto-scale + ground at y=0) ──────────────────────────
const gltfLoader = new GLTFLoader();
function loadGLB(url) {
  return new Promise((resolve, reject) => {
    gltfLoader.load(url, (gltf) => resolve(gltf), undefined, reject);
  });
}
function autoScaleGLB(obj, targetSize) {
  const box = new THREE.Box3().setFromObject(obj);
  const size = new THREE.Vector3();
  box.getSize(size);
  const max = Math.max(size.x, size.y, size.z) || 1;
  const s = targetSize / max;
  obj.scale.setScalar(s);
  const newBox = new THREE.Box3().setFromObject(obj);
  obj.position.y -= newBox.min.y;
  obj.traverse((o) => {
    if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; }
  });
  return obj;
}

// ── Camera presets — label match upstream Pharmacy-AI ───────────────────────
const CAMERA_PRESETS = {
  default:        { label: 'Toàn cảnh',                pos: [3.4, 4.0, 5.5],     target: [0, 0.9, -0.4],         minDist: 2.5, maxDist: 14 },
  fridge:         { label: 'Tủ lạnh 2-8°C',            pos: [-1.6, 1.6, 1.5],    target: [-3.6, 1.0, 1.45],      minDist: 0.8, maxDist: 5  },
  counter:        { label: 'Quầy giao dịch',           pos: [0.0, 1.9, 3.4],     target: [0.0, 1.05, 1.0],       minDist: 1.5, maxDist: 8  },
  consult:        { label: 'Khu tư vấn',               pos: [-1.6, 2.0, 1.2],    target: [-3.4, 0.8, -0.4],      minDist: 1.0, maxDist: 7  },
  // Camera presets lùi XA hơn + nâng CAO + nghiêng để nhìn toàn bộ tủ
  // (banner đỉnh + 7 ngăn + base). Trước đây pos sát quá nên user chỉ thấy
  // 2-3 ngăn giữa. Hiện distance ≈ 2.5m, polar angle hơi cúi xuống.
  cab_rx_1:       { label: 'Kê đơn 1',                 pos: [-2.82, 2.3,  0.80], target: [-2.82, 1.20, -2.125],  minDist: 1.2, maxDist: 6 },
  cab_rx_2:       { label: 'Kê đơn 2',                 pos: [-0.94, 2.3,  0.80], target: [-0.94, 1.20, -2.125],  minDist: 1.2, maxDist: 6 },
  cab_otc_1:      { label: 'OTC 1',                    pos: [ 0.94, 2.3,  0.80], target: [ 0.94, 1.20, -2.125],  minDist: 1.2, maxDist: 6 },
  cab_otc_2:      { label: 'OTC 2',                    pos: [ 2.82, 2.3,  0.80], target: [ 2.82, 1.20, -2.125],  minDist: 1.2, maxDist: 6 },
  cab_special:    { label: 'Kiểm soát đặc biệt',       pos: [ 1.20, 1.6, -1.18], target: [ 4.10, 0.90, -1.18],   minDist: 1.0, maxDist: 6 },
  cab_supp_1:     { label: 'Không phải thuốc 1',       pos: [ 1.20, 2.0,  0.60], target: [ 4.10, 1.20,  0.60],   minDist: 1.2, maxDist: 6 },
  cab_supp_2:     { label: 'Không phải thuốc 2',       pos: [ 1.20, 2.0,  2.38], target: [ 4.10, 1.20,  2.38],   minDist: 1.2, maxDist: 6 },
  front_drawers:  { label: 'Tủ quầy trước',            pos: [ 0.0,  2.2,  4.8],  target: [ 0.0, 0.6,  1.2],      minDist: 1.5, maxDist: 8 }
};

// ── Fridge stock (13 items, port 1-1) ───────────────────────────────────────
const FRIDGE_STOCKS = [
  { id: 'frg_vaccine_bcg', label: 'Vaccine BCG',     color: '#bae6fd', shelf: 'topShelf',    x: -0.20 },
  { id: 'frg_vaccine_flu', label: 'Cúm mùa',         color: '#a7f3d0', shelf: 'topShelf',    x:  0.00 },
  { id: 'frg_vaccine_hpv', label: 'HPV Gardasil',    color: '#fbcfe8', shelf: 'topShelf',    x:  0.20 },
  { id: 'frg_vaccine_td',  label: 'Td uốn ván',      color: '#c7d2fe', shelf: 'midDivider',  x: -0.20 },
  { id: 'frg_vaccine_var', label: 'Thuỷ đậu',        color: '#fef08a', shelf: 'midDivider',  x:  0.20 },
  { id: 'frg_insulin',     label: 'Insulin glargine',color: '#fde68a', shelf: 'bottomMid2',  x: -0.22 },
  { id: 'frg_eyedrop',     label: 'Tobradex 5ml',    color: '#ddd6fe', shelf: 'bottomMid2',  x:  0.02 },
  { id: 'frg_insulin_apr', label: 'Insulin aspart',  color: '#fed7aa', shelf: 'bottomMid2',  x:  0.22 },
  { id: 'frg_probiotic',   label: 'Enterogermina',   color: '#fecaca', shelf: 'bottomMid1',  x: -0.20 },
  { id: 'frg_eyedrop_2',   label: 'Cravit 5ml',      color: '#ccfbf1', shelf: 'bottomMid1',  x:  0.20 },
  { id: 'frg_humanal',     label: 'Albumin HSA',     color: '#e9d5ff', shelf: 'bottomFloor', x: -0.20 },
  { id: 'frg_gonal',       label: 'Gonal-F',         color: '#bbf7d0', shelf: 'bottomFloor', x:  0.20 }
];
const FRIDGE_SHELF_Y = {
  bottomFloor: 0.07, bottomMid1: 0.42, bottomMid2: 0.74, midDivider: 1.06, topShelf: 1.34
};

// ── Build the entire scene graph ────────────────────────────────────────────
export function buildScene(canvas, opts = {}) {
  // Renderer config — copy từ compounding-lab.html (PBR + soft shadow + ACES tone mapping).
  const renderer = new THREE.WebGLRenderer({
    canvas, antialias: true, alpha: false,
    logarithmicDepthBuffer: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // Master brightness — slider chỉnh đồng bộ exposure + cường độ TẤT CẢ đèn + environment.
  // Single-knob để tránh trường hợp giảm exposure nhưng vẫn cháy do lights cộng dồn.
  const BASE_EXPOSURE = 0.7;
  renderer.toneMappingExposure = BASE_EXPOSURE;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xeef2ee);
  scene.fog = new THREE.Fog(0xeef2ee, 14, 38);

  // Camera near/far thu hẹp + logarithmicDepthBuffer → Z-buffer precision đủ cho mọi
  // khoảng cách trong phòng 9m, giảm Z-fighting toàn bộ scene.
  const camera = new THREE.PerspectiveCamera(48, canvas.clientWidth / canvas.clientHeight, 0.3, 30);
  camera.position.set(...CAMERA_PRESETS.default.pos);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(...CAMERA_PRESETS.default.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = CAMERA_PRESETS.default.minDist;
  controls.maxDistance = CAMERA_PRESETS.default.maxDist;
  controls.maxPolarAngle = Math.PI / 2.1;
  // 2-finger pinch trên trackpad → tăng tốc zoom ×3 (trước default = 1).
  controls.zoomSpeed = 3.0;

  // Lighting — port nguyên recipe từ compounding-lab.html (phòng bào chế).
  // PBR environment + ambient nhẹ + sun directional có soft shadow + fill xanh + 3 đèn trần ấm vàng.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  pmrem.dispose();
  const BASE_ENV_INTENSITY = 0.45;
  scene.environmentIntensity = BASE_ENV_INTENSITY;

  const ambient = new THREE.AmbientLight(0xffffff, 0.18);
  scene.add(ambient);

  const sun = new THREE.DirectionalLight(0xffffff, 0.5);
  sun.position.set(2.2, 4.2, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -3.5; sun.shadow.camera.right = 3.5;
  sun.shadow.camera.top = 3.5;  sun.shadow.camera.bottom = -2;
  sun.shadow.camera.near = 0.1; sun.shadow.camera.far = 12;
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  // Fill ánh sáng xanh nhạt từ phía sau
  const fill = new THREE.DirectionalLight(0xc8e1ff, 0.16);
  fill.position.set(-2, 3, -1);
  scene.add(fill);

  // Đèn trần: đã gỡ bỏ theo yêu cầu — chỉ giữ sun + fill + ambient + environment.
  // ceilSpots vẫn khai báo (rỗng) để applyBrightness().forEach không vỡ.
  const ceilSpots = [];

  // ── Master brightness knob ────────────────────────────────────────────────
  // 1 = ánh sáng gốc; <1 tối, >1 sáng hơn. Scale đồng bộ tất cả light source +
  // environment + tone mapping exposure để không có nguồn sáng nào "lọt lưới".
  const BASE_INTENSITIES = {
    ambient: ambient.intensity,
    sun: sun.intensity,
    fill: fill.intensity,
    spots: ceilSpots.map(s => s.intensity),
  };
  let currentBrightness = 1.0;
  function applyBrightness(v, persist) {
    const f = Math.max(0.2, Math.min(1.6, Number(v) || 1.0));
    currentBrightness = f;
    ambient.intensity = BASE_INTENSITIES.ambient * f;
    sun.intensity     = BASE_INTENSITIES.sun * f;
    fill.intensity    = BASE_INTENSITIES.fill * f;
    ceilSpots.forEach((s, i) => { s.intensity = BASE_INTENSITIES.spots[i] * f; });
    scene.environmentIntensity = BASE_ENV_INTENSITY * f;
    renderer.toneMappingExposure = BASE_EXPOSURE * f;
    if (persist) { try { localStorage.setItem('pharmacy3d.brightness', String(f)); } catch {} }
  }
  const _saved = parseFloat(localStorage.getItem('pharmacy3d.brightness') || '');
  applyBrightness(Number.isFinite(_saved) ? _saved : 1.0, false);

  // Room dims — BACK_Z = -2.4 (KHÔNG phải -ROOM_D/2) để tủ sát quầy hơn, view không trống.
  const ROOM_W = 9, ROOM_D = 9, ROOM_H = 3.6;
  const BACK_Z = -2.4;
  const RIGHT_X = ROOM_W / 2;

  // Floor — sàn gạch tile trắng kem, repeat 3×2 cho mịn
  const floorTex = makePharmacyFloorTex();
  floorTex.repeat.set(3, 2);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(ROOM_W, ROOM_D),
    new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.85, metalness: 0.04 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Walls — tile xanh nhạt giống lab, chỉ 3 mặt (KHÔNG tường trước).
  const wallMat = new THREE.MeshStandardMaterial({ map: makePharmacyWallTex(), roughness: 0.82 });
  const backWall = new THREE.Mesh(new THREE.BoxGeometry(ROOM_W, ROOM_H, 0.1), wallMat);
  backWall.position.set(0, ROOM_H / 2, BACK_Z - 0.05);
  scene.add(backWall);
  const sideDepth = ROOM_D / 2 - BACK_Z;
  const sideCenterZ = (BACK_Z + ROOM_D / 2) / 2;
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, ROOM_H, sideDepth), wallMat);
  leftWall.position.set(-ROOM_W / 2 - 0.05, ROOM_H / 2, sideCenterZ);
  scene.add(leftWall);
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, ROOM_H, sideDepth), wallMat);
  rightWall.position.set(ROOM_W / 2 + 0.05, ROOM_H / 2, sideCenterZ);
  scene.add(rightWall);
  // Trần — chỉ trải dài tới ROOM_D/2 (= +4.5), không tới hết phía trước phòng để có cảm giác mở.
  const ceil = new THREE.Mesh(
    new THREE.PlaneGeometry(ROOM_W, ROOM_D),
    new THREE.MeshStandardMaterial({ color: 0xfafbfd, roughness: 0.9 })
  );
  ceil.position.y = ROOM_H; ceil.rotation.x = Math.PI / 2;
  scene.add(ceil);

  // ── CABINETS — port theo "Bản mô tả nhà thuốc chỉnh sửa 1.docx" ─────────
  // 4 tủ sau lưng: 2 Rx + 2 OTC, mỗi tủ 7 ngăn, banner "THUỐC KÊ ĐƠN Rx"/"THUỐC KHÔNG KÊ ĐƠN OTC".
  // 3 tủ bên: special_control (4 ngăn, thấp hơn, cửa kính) + 2 "Sản phẩm KP thuốc".
  const drugMeshes = []; // { mesh, drug, homePosition }
  // Tất cả cánh có thể click mở/đóng (counter bays + tủ kiểm soát đặc biệt + fridge).
  // Khai báo Ở ĐÂY (trước buildCabinet) để các closure đẩy hinge vào.
  const openableDoors = [];
  const BACK_CAB_W = 1.7, BACK_CAB_H = 2.30, BACK_CAB_D = 0.55, BACK_CAB_GAP = 0.18;
  const backCabs = CABINETS.filter(c => c.zone === 'back');
  const BACK_TOTAL_W = backCabs.length * BACK_CAB_W + (backCabs.length - 1) * BACK_CAB_GAP;
  const SIDE_CAB_W = 1.6, SIDE_CAB_H_TALL = 2.30, SIDE_CAB_H_LOW = 1.40, SIDE_CAB_D = 0.55, SIDE_CAB_GAP = 0.18;
  const sideCabs = CABINETS.filter(c => c.zone === 'side');
  const SIDE_TOTAL_W = sideCabs.length * SIDE_CAB_W + (sideCabs.length - 1) * SIDE_CAB_GAP;
  const COUNTER_W = 4.2, COUNTER_H = 1.0, COUNTER_D = 0.7, COUNTER_Z = 1.3;

  // Helper: tạo CanvasTexture cho banner / shelf-label.
  function makeTextTexture(text, opts = {}) {
    const w = opts.w || 512, h = opts.h || 96;
    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = opts.bg || '#ffffff';
    ctx.fillRect(0, 0, w, h);
    if (opts.border) {
      ctx.strokeStyle = opts.border;
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, w - 4, h - 4);
    }
    ctx.fillStyle = opts.color || '#0f172a';
    ctx.font = `bold ${opts.fontSize || 36}px Inter, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Multi-line wrapping
    const words = text.split(/\s+/);
    const lines = [];
    let line = '';
    const maxWidth = w - 24;
    for (const word of words) {
      const test = line ? line + ' ' + word : word;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    const lineH = (opts.fontSize || 36) * 1.15;
    const startY = h / 2 - (lines.length - 1) * lineH / 2;
    lines.forEach((l, i) => ctx.fillText(l, w / 2, startY + i * lineH));
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function buildCabinet(cab, W, H, D, shelfCount, opts = {}) {
    const cabGroup = new THREE.Group();
    // Body teal-green giống screenshot upstream
    const frameMat = new THREE.MeshStandardMaterial({ color: cab.accent, roughness: 0.55, metalness: 0.05 });
    const back = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.05), frameMat);
    back.position.set(0, H / 2, -D / 2 + 0.025);
    cabGroup.add(back);

    // Banner — TRẮNG bo tròn, chữ teal đậm, đặt PHÍA TRÊN tủ như screenshot
    const bannerH = 0.35;
    const bannerW = W * 0.95;
    const bannerTex = makeTextTexture(cab.label, {
      w: 1024, h: 256,
      bg: '#ffffff',
      color: '#0f766e',  // teal đậm
      fontSize: 80
    });
    const bannerMat = new THREE.MeshStandardMaterial({
      map: bannerTex, roughness: 0.55,
      polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
    });
    // Banner đẩy ra trước nóc tủ 8cm (trước 10cm) — đứng riêng, ko z-fight.
    const banner = new THREE.Mesh(new THREE.BoxGeometry(bannerW, bannerH, 0.04), bannerMat);
    banner.position.set(0, H + bannerH / 2 - 0.02, D / 2 + 0.08);
    cabGroup.add(banner);

    // Side rails — cùng màu teal cho liền mạch
    const railL = new THREE.Mesh(new THREE.BoxGeometry(0.04, H, D), frameMat);
    railL.position.set(-W / 2 + 0.02, H / 2, 0); cabGroup.add(railL);
    const railR = new THREE.Mesh(new THREE.BoxGeometry(0.04, H, D), frameMat);
    railR.position.set(W / 2 - 0.02, H / 2, 0); cabGroup.add(railR);
    // Đáy tủ (kick board)
    const baseRail = new THREE.Mesh(new THREE.BoxGeometry(W, 0.12, D), frameMat);
    baseRail.position.set(0, 0.06, 0); cabGroup.add(baseRail);

    // Shelves — màu cream giống screenshot
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.65 });
    const shelfYs = [];
    const usableH = H - 0.25;
    for (let s = 0; s < shelfCount; s++) {
      const y = 0.18 + s * usableH / shelfCount;
      shelfYs.push(y);
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(W - 0.06, 0.04, D - 0.04), shelfMat);
      shelf.position.set(0, y, 0); shelf.receiveShadow = true;
      cabGroup.add(shelf);
    }

    // (Nhãn nhóm dược lý render Ở DƯỚI — sau khi đã biết shelfLabelOverride
    // do auto-split kệ đông.)

    // Cửa kính tủ kiểm soát đặc biệt — wrap trong HINGE GROUP mở/đóng được.
    // Hinge ở mép TRÁI cánh; click panel → toggle isOpen → animation lerp xoay.
    if (opts.glassDoor) {
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xbfdbfe, transparent: true, opacity: 0.22, roughness: 0.05,
        metalness: 0, transmission: 0.6, ior: 1.5
      });
      const glassW = W - 0.08;
      const glassH = H - 0.3;
      const hinge = new THREE.Group();
      // Hinge ở mép trái (-glassW/2 trong local cabGroup), phía trước mặt tủ.
      hinge.position.set(-glassW / 2, H / 2, D / 2 + 0.03);
      cabGroup.add(hinge);
      hinge.userData = { isOpen: false, openAngle: -Math.PI / 2.6 };
      openableDoors.push(hinge);

      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(glassW, glassH, 0.018),
        glassMat
      );
      panel.position.set(glassW / 2, 0, 0); // anchor mép trái
      panel.userData = { fridgeDoor: hinge };
      hinge.add(panel);
      // Khung kính 4 thanh viền teal
      const frameT = 0.018;
      const frameMatLocal = new THREE.MeshStandardMaterial({ color: cab.accent || 0x0d9488, roughness: 0.5 });
      [[glassW / 2,                glassH / 2 - frameT / 2, glassW, frameT],
       [glassW / 2,               -glassH / 2 + frameT / 2, glassW, frameT],
       [frameT / 2,                              0, frameT, glassH],
       [glassW - frameT / 2,                     0, frameT, glassH]].forEach(p => {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(p[2], p[3], 0.020), frameMatLocal);
        bar.position.set(p[0], p[1], 0.005);
        bar.userData = { fridgeDoor: hinge };
        hinge.add(bar);
      });
      // Tay nắm
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.10, 12),
        new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.7, roughness: 0.3 })
      );
      handle.rotation.z = Math.PI / 2;
      handle.position.set(glassW - 0.08, 0, 0.026);
      handle.userData = { fridgeDoor: hinge };
      hinge.add(handle);
    }

    // Distribute drugs onto shelves theo DRUG_PLACEMENT: mỗi drug có
    // shelfIdx CỐ ĐỊNH (theo nhóm dược lý). Trong cùng 1 ngăn, các drugs dàn
    // ngang trục X. Mỗi drug = stack 3 hộp xếp dọc Z (ngoài→trong). Mỗi hộp
    // là 1 entry độc lập trong drugMeshes để pick từng hộp một.
    const drugsForCab = ALL_DRUGS.filter(d => {
      const p = DRUG_PLACEMENT[d.id];
      return p && p.cabinetId === cab.id;
    });
    // Group by shelfIdx
    const byShelf = new Map();
    for (const drug of drugsForCab) {
      const p = DRUG_PLACEMENT[drug.id];
      if (p.shelfIdx < 0 || p.shelfIdx >= shelfCount) continue;
      if (!byShelf.has(p.shelfIdx)) byShelf.set(p.shelfIdx, []);
      byShelf.get(p.shelfIdx).push({ drug, placement: p });
    }
    // Auto-split kệ đông (>MAX_PER_SHELF): tìm shelf rỗng KỀ BÊN và đẩy 50%
    // thuốc sang. Label kệ phụ thêm "(tiếp)" để biết là cùng nhóm.
    const MAX_PER_SHELF = 10;
    const usableWForCalc = W - 0.20;
    const shelfLabelOverride = new Map();
    const sortedShelves = Array.from(byShelf.keys()).sort((a, b) => byShelf.get(b).length - byShelf.get(a).length);
    for (const si of sortedShelves) {
      const items = byShelf.get(si);
      if (items.length <= MAX_PER_SHELF) continue;
      // Tìm ngăn rỗng kề bên (ưu tiên trên, sau dưới)
      const candidates = [si + 1, si - 1, si + 2, si - 2].filter(n =>
        n >= 0 && n < shelfCount && !byShelf.has(n)
      );
      if (candidates.length === 0) continue;
      const target = candidates[0];
      const mid = Math.ceil(items.length / 2);
      byShelf.set(si, items.slice(0, mid));
      byShelf.set(target, items.slice(mid));
      const baseLabel = (cab.shelfLabels && cab.shelfLabels[si]) || '';
      if (baseLabel) shelfLabelOverride.set(target, baseLabel + ' (tiếp)');
    }
    const COPIES = 3;
    for (const [shelfIdx, items] of byShelf) {
      const perShelf = items.length;
      const usableW = W - 0.20;
      const slotW = usableW / Math.max(perShelf, 1);
      items.forEach(({ drug, placement }, slotIdx) => {
        // Inject brand color + groupLabel để buildSingleDrugBox dùng (Phase H).
        const drugWithBrand = {
          ...drug,
          groupAccent: placement.brandColor || drug.groupAccent,
          groupLabel: placement.groupLabel || drug.groupLabel,
          bodyColor: lightenHex(placement.brandColor || drug.groupAccent || '#e2e8f0', 0.85)
        };
        const style = getBoxStyle(drugWithBrand);
        style.copies = COPIES;
        const x = -usableW / 2 + slotW / 2 + slotIdx * slotW;
        // Đáy hộp chạm mặt shelf: shelf dày 0.04m → mặt trên ở +0.02.
        const y = shelfYs[shelfIdx] + 0.02 + style.h / 2;
        const pitchZ = style.d * 1.05;
        const frontEdgeZ = D / 2 - 0.025 - style.d / 2;
        for (let i = 0; i < COPIES; i++) {
          const box = buildSingleDrugBox(drugWithBrand, style);
          const z = frontEdgeZ - i * pitchZ;
          box.position.set(x, y, z);
          box.userData = {
            drugId: drug.id,
            drug: drugWithBrand,
            style,
            boxIndex: i,
            homePosition: box.position.clone(),
            cabinet: cab
          };
          cabGroup.add(box);
          drugMeshes.push(box);
        }
      });
    }

    // Nhãn nhóm dược lý dán mép TRƯỚC mỗi ngăn (sau auto-split để dùng được
    // shelfLabelOverride). Nếu nhãn có dấu " · " → 2 nhóm chia chung 1 ngăn:
    //   • render 2 nhãn nhỏ half-width
    //   • thêm 1 VÁCH NGĂN ĐỨNG dày 4cm giữa ngăn (chia làm 2 ô)
    const usableH = H - 0.25;
    const shelfH = usableH / shelfCount;
    if (Array.isArray(cab.shelfLabels) || shelfLabelOverride.size > 0) {
      const labelTagH = 0.07;
      const labelTagW = W - 0.20;
      for (let s = 0; s < shelfCount; s++) {
        const text = (shelfLabelOverride.get(s) || (cab.shelfLabels && cab.shelfLabels[s]) || '').trim();
        if (!text) continue;
        const labelMat = (str, halfW) => {
          const tex = makeTextTexture(str, {
            w: Math.max(640, halfW * 2200), h: 96,
            bg: '#fffbeb', color: '#7c2d12', fontSize: 40
          });
          return new THREE.MeshStandardMaterial({
            map: tex, roughness: 0.55,
            polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
          });
        };
        if (text.includes(' · ')) {
          const [left, right] = text.split(' · ').map(s => s.trim());
          const halfW = (labelTagW - 0.04) / 2;
          // Nhãn trái
          const tagL = new THREE.Mesh(
            new THREE.BoxGeometry(halfW, labelTagH, 0.012),
            labelMat(left, halfW)
          );
          tagL.position.set(-halfW / 2 - 0.02, shelfYs[s] + 0.025, D / 2 + 0.015);
          cabGroup.add(tagL);
          // Nhãn phải
          const tagR = new THREE.Mesh(
            new THREE.BoxGeometry(halfW, labelTagH, 0.012),
            labelMat(right, halfW)
          );
          tagR.position.set(halfW / 2 + 0.02, shelfYs[s] + 0.025, D / 2 + 0.015);
          cabGroup.add(tagR);
          // VÁCH NGĂN ĐỨNG dày 4cm (gọi "vách đôi": gồm 2 thanh song song
          // cách nhau 1cm cho giống tủ trưng bày thật).
          const dividerH = shelfH * 0.92;
          const dividerY = shelfYs[s] + dividerH / 2 + 0.025;
          const dividerMat = new THREE.MeshStandardMaterial({
            color: cab.accent || 0x0d9488, roughness: 0.55
          });
          const dThk = 0.012, dGap = 0.012;
          const dL = new THREE.Mesh(
            new THREE.BoxGeometry(dThk, dividerH, D - 0.06),
            dividerMat
          );
          dL.position.set(-dGap / 2 - dThk / 2, dividerY, 0);
          cabGroup.add(dL);
          const dR = new THREE.Mesh(
            new THREE.BoxGeometry(dThk, dividerH, D - 0.06),
            dividerMat
          );
          dR.position.set(dGap / 2 + dThk / 2, dividerY, 0);
          cabGroup.add(dR);
        } else {
          // Nhãn đơn full width
          const tag = new THREE.Mesh(
            new THREE.BoxGeometry(labelTagW, labelTagH, 0.012),
            labelMat(text, labelTagW)
          );
          tag.position.set(0, shelfYs[s] + 0.025, D / 2 + 0.015);
          cabGroup.add(tag);
        }
      }
    }
    return cabGroup;
  }

  // 4 tủ sau lưng — mỗi tủ 7 ngăn (theo docx)
  backCabs.forEach((cab, i) => {
    const x = -BACK_TOTAL_W / 2 + BACK_CAB_W / 2 + i * (BACK_CAB_W + BACK_CAB_GAP);
    const g = buildCabinet(cab, BACK_CAB_W, BACK_CAB_H, BACK_CAB_D, cab.shelves || 7);
    g.position.set(x, 0, BACK_Z + BACK_CAB_D / 2);
    scene.add(g);
  });
  // 3 tủ bên — special_control thấp + cửa kính, supp_1/supp_2 cao bình thường
  sideCabs.forEach((cab, i) => {
    const isLow = cab.lowProfile;
    const H = isLow ? SIDE_CAB_H_LOW : SIDE_CAB_H_TALL;
    const z = -SIDE_TOTAL_W / 2 + SIDE_CAB_W / 2 + i * (SIDE_CAB_W + SIDE_CAB_GAP) + 0.6;
    const g = buildCabinet(cab, SIDE_CAB_W, H, SIDE_CAB_D, cab.shelves || 5, { glassDoor: !!cab.glassDoor });
    g.position.set(RIGHT_X - SIDE_CAB_D / 2, 0, z);
    g.rotation.y = -Math.PI / 2;
    scene.add(g);
  });

  // Front counter — mặt bàn kem + body chia 4 NGĂN × 2 TẦNG. 2 ngăn ngoài cùng
  // (1, 4) là tủ KÍNH trưng bày "Thuốc dùng ngoài Rx" / "Thuốc dùng ngoài OTC";
  // 2 ngăn giữa (2, 3) là tủ KÍN tránh sáng đựng "Thuốc chờ xử lý" / "Hồ sơ tài
  // liệu". Mỗi ngăn dán nhãn mặt trước (+z, hướng về khách).
  const counter = new THREE.Group();
  const counterTop = new THREE.Mesh(
    new THREE.BoxGeometry(COUNTER_W + 0.1, 0.08, COUNTER_D + 0.1),
    new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.45, metalness: 0.05 })
  );
  counterTop.position.set(0, COUNTER_H, COUNTER_Z);
  counterTop.castShadow = counterTop.receiveShadow = true;
  counter.add(counterTop);

  const COUNTER_BODY_H = COUNTER_H - 0.08;
  const CABINET_BAYS = [
    { idx: 0, label: 'Thuốc dùng ngoài Rx',  type: 'glass', accent: '#0ea5e9' },
    { idx: 1, label: 'Thuốc dùng ngoài OTC', type: 'glass', accent: '#0ea5e9' },
    { idx: 2, label: 'Thuốc chờ xử lý',      type: 'solid', accent: '#0d9488' },
    { idx: 3, label: 'Hồ sơ tài liệu',       type: 'solid', accent: '#0d9488' }
  ];
  const BAY_W = COUNTER_W / CABINET_BAYS.length; // 1.05m mỗi ngăn
  const BAY_GAP = 0.02;
  const tealMat = new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.5, metalness: 0.1 });
  const innerDarkMat = new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.7 });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xbfdbfe, transparent: true, opacity: 0.20, roughness: 0.05,
    metalness: 0, transmission: 0.65, ior: 1.5
  });

  CABINET_BAYS.forEach((bay) => {
    const bayGroup = new THREE.Group();
    const cx = -COUNTER_W / 2 + BAY_W / 2 + bay.idx * BAY_W;
    bayGroup.position.set(cx, COUNTER_BODY_H / 2, COUNTER_Z);
    counter.add(bayGroup);
    // Vỏ ngăn (5 mặt — bỏ mặt trước để lộ nội thất)
    const wallT = 0.02;
    const w = BAY_W - BAY_GAP;
    const d = COUNTER_D;
    // Mặt sau
    const back = new THREE.Mesh(new THREE.BoxGeometry(w, COUNTER_BODY_H, wallT), tealMat);
    back.position.set(0, 0, -d / 2 + wallT / 2);
    bayGroup.add(back);
    // 2 vách trái/phải
    const sideL = new THREE.Mesh(new THREE.BoxGeometry(wallT, COUNTER_BODY_H, d), tealMat);
    sideL.position.set(-w / 2 + wallT / 2, 0, 0); bayGroup.add(sideL);
    const sideR = new THREE.Mesh(new THREE.BoxGeometry(wallT, COUNTER_BODY_H, d), tealMat);
    sideR.position.set( w / 2 - wallT / 2, 0, 0); bayGroup.add(sideR);
    // Đáy + nóc + vạch GIỮA (chia 2 tầng)
    const floor = new THREE.Mesh(new THREE.BoxGeometry(w, wallT, d), tealMat);
    floor.position.set(0, -COUNTER_BODY_H / 2 + wallT / 2, 0); bayGroup.add(floor);
    const ceil = new THREE.Mesh(new THREE.BoxGeometry(w, wallT, d), tealMat);
    ceil.position.set(0, COUNTER_BODY_H / 2 - wallT / 2, 0); bayGroup.add(ceil);
    const midShelf = new THREE.Mesh(
      new THREE.BoxGeometry(w - 0.01, wallT, d - 0.01),
      new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.55 })
    );
    midShelf.position.set(0, 0, 0); bayGroup.add(midShelf);

    // Mặt trước: cánh có INSET 3cm khỏi đỉnh/đáy. Cánh wrap trong HINGE GROUP
    // (xoay quanh mép trái) để click mở/đóng được. Đẩy ra TRƯỚC 3cm so với
    // mặt body (trước 1.2cm vẫn còn z-fight nhẹ với khung).
    const doorInsetY = 0.06;
    const doorH = COUNTER_BODY_H - doorInsetY;
    const doorFrontZ = d / 2 + 0.030; // 3cm trước mặt body — sạch z-fight
    const panelW = w - 0.04;
    // Hinge ở mép TRÁI cánh (-w/2 + 0.02). Mở ra ngoài → hinge.rotation.y < 0.
    const hinge = new THREE.Group();
    hinge.position.set(-w / 2 + 0.02, 0, doorFrontZ);
    bayGroup.add(hinge);
    hinge.userData = { isOpen: false, openAngle: -Math.PI / 2.6 }; // mở ~70°
    openableDoors.push(hinge);
    if (bay.type === 'glass') {
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(panelW, doorH, 0.015),
        glassMat
      );
      panel.position.set(panelW / 2, 0, 0); // anchor ở mép trái panel
      hinge.add(panel);
      panel.userData = { fridgeDoor: hinge }; // reuse cơ chế click
      // Khung 4 thanh viền teal — child của hinge để xoay cùng cánh
      const frameT = 0.012;
      [[panelW / 2,                doorH / 2 - frameT / 2, panelW, frameT],
       [panelW / 2,               -doorH / 2 + frameT / 2, panelW, frameT],
       [frameT / 2,                              0, frameT, doorH],
       [panelW - frameT / 2,                     0, frameT, doorH]].forEach(p => {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(p[2], p[3], 0.014), tealMat);
        bar.position.set(p[0], p[1], 0.008);
        bar.userData = { fridgeDoor: hinge };
        hinge.add(bar);
      });
      // Tay nắm
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.010, 0.010, 0.07, 12),
        new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.7, roughness: 0.3 })
      );
      handle.rotation.z = Math.PI / 2;
      handle.position.set(panelW - 0.06, 0, 0.018);
      handle.userData = { fridgeDoor: hinge };
      hinge.add(handle);
    } else {
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(panelW, doorH, 0.02),
        innerDarkMat
      );
      panel.position.set(panelW / 2, 0, 0);
      panel.userData = { fridgeDoor: hinge };
      hinge.add(panel);
      const handle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.08, 12),
        new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.7, roughness: 0.3 })
      );
      handle.rotation.z = Math.PI / 2;
      handle.position.set(panelW - 0.08, 0, 0.018);
      handle.userData = { fridgeDoor: hinge };
      hinge.add(handle);
    }

    // Nhãn mặt trước — đặt CHÍCH PHÍA TRÊN cánh, lệch ra trước thêm 4cm so
    // với mặt body để không bao giờ z-fight với cánh/khung.
    const tex = makeTextTexture(bay.label.toUpperCase(), {
      w: 768, h: 96, bg: '#ffffff', color: bay.accent, fontSize: 44
    });
    const labelMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w * 0.86, 0.07),
      new THREE.MeshStandardMaterial({
        map: tex, transparent: true,
        polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4
      })
    );
    // y = mép trên cánh; z = trước cánh 3cm (cánh đã ở d/2+0.012 → label ở d/2+0.05)
    labelMesh.position.set(0, doorH / 2 + 0.02, d / 2 + 0.05);
    bayGroup.add(labelMesh);
  });
  scene.add(counter);

  // ── Dãy thuốc trưng bày TRÊN MẶT QUẦY (bên trái) ────────────────────────────
  // Tách 3 CỤM theo cabinetId (front_eye / front_nose / front_topical), mỗi
  // cụm có pad riêng + nhãn cụm + size hộp đa dạng (dùng getBoxStyle theo SKU).
  // Hộp xếp grid bên trong cụm; mỗi loại = stack 3 hộp Z (ngoài→trong) để pick lẻ.
  const frontDrugs = ALL_DRUGS.filter(d => (d.cabinetId || '').startsWith('front_'));
  // Bucket by cabinetId, preserve catalog order
  const frontGroupMap = new Map();
  for (const d of frontDrugs) {
    if (!frontGroupMap.has(d.cabinetId)) frontGroupMap.set(d.cabinetId, []);
    frontGroupMap.get(d.cabinetId).push(d);
  }
  // Meta cho từng cụm
  const FRONT_GROUP_META = {
    front_eye:     { label: 'NHỎ MẮT',   pad: '#dbeafe', accent: '#0284c7', cols: 3 },
    front_nose:    { label: 'NHỎ MŨI',   pad: '#cffafe', accent: '#0891b2', cols: 3 },
    front_topical: { label: 'DÙNG NGOÀI', pad: '#ede9fe', accent: '#7c3aed', cols: 5 }
  };
  // Layout: 3 cụm cạnh nhau theo X, cách nhau 6cm.
  const GROUP_GAP_X = 0.06;
  const DISP_LEFT_X = -1.95; // mép trái cụm đầu tiên (rìa trái counter)
  const baseY = COUNTER_H + 0.04 + 0.018; // mặt pad trên counter
  let cursorX = DISP_LEFT_X;
  for (const [cabId, drugs] of frontGroupMap) {
    const meta = FRONT_GROUP_META[cabId] || { label: cabId, pad: '#fef3c7', accent: '#7c2d12', cols: 4 };
    // Tính grid size dựa max box dim trong cụm (đa dạng size)
    const styles = drugs.map(d => getBoxStyle(d));
    const maxW = Math.max(...styles.map(s => s.w));
    const maxH = Math.max(...styles.map(s => s.h));
    const maxD = Math.max(...styles.map(s => s.d));
    const cellGapX = 0.025, cellGapZ = 0.04;
    const cols = Math.min(meta.cols, drugs.length);
    const rows = Math.ceil(drugs.length / cols);
    const STACK_DEPTH = 3;
    const STACK_GAP = 0.003;
    const stackTotalD = STACK_DEPTH * maxD + (STACK_DEPTH - 1) * STACK_GAP;
    const cellPitchX = maxW + cellGapX;
    const cellPitchZ = stackTotalD + cellGapZ;
    const padW = cols * cellPitchX - cellGapX + 0.10;
    const padD = rows * cellPitchZ - cellGapZ + 0.12;
    const padCX = cursorX + padW / 2;
    const padCZ = COUNTER_Z - 0.03;
    // Pad nền cụm
    const pad = new THREE.Mesh(
      new THREE.BoxGeometry(padW, 0.012, padD),
      new THREE.MeshStandardMaterial({ color: meta.pad, roughness: 0.65 })
    );
    pad.position.set(padCX, COUNTER_H + 0.04 + 0.006, padCZ);
    pad.receiveShadow = true;
    scene.add(pad);
    // Nhãn cụm — banner stand đứng phía SAU pad (camera-facing), nổi 6cm
    const labelTex = makeTextTexture(meta.label, {
      w: 768, h: 96, bg: '#ffffff', color: meta.accent, fontSize: 48
    });
    const labelStand = new THREE.Mesh(
      new THREE.BoxGeometry(padW * 0.85, 0.08, 0.012),
      new THREE.MeshStandardMaterial({
        map: labelTex, roughness: 0.55,
        polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
      })
    );
    labelStand.position.set(padCX, COUNTER_H + 0.04 + 0.10, padCZ - padD / 2 + 0.012);
    scene.add(labelStand);
    // Hộp thuốc grid
    drugs.forEach((drug, idx) => {
      const style = styles[idx]; // size đa dạng theo SKU
      style.copies = STACK_DEPTH;
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const cellX = padCX - (cols * cellPitchX - cellGapX) / 2 + maxW / 2 + col * cellPitchX;
      const cellZ = padCZ - (rows * cellPitchZ - cellGapZ) / 2 + stackTotalD / 2 + row * cellPitchZ;
      const y = baseY + style.h / 2;
      for (let i = 0; i < STACK_DEPTH; i++) {
        const box = buildSingleDrugBox(drug, style);
        const zRel = stackTotalD / 2 - style.d / 2 - i * (style.d + STACK_GAP);
        box.position.set(cellX, y, cellZ + zRel);
        box.userData = {
          drugId: drug.id, drug, style, boxIndex: i,
          homePosition: box.position.clone(),
          cabinet: CABINETS.find(c => c.id === drug.cabinetId)
        };
        scene.add(box);
        drugMeshes.push(box);
      }
    });
    cursorX += padW + GROUP_GAP_X;
  }

  // POS computer — port theo upstream: T-base + trụ + khớp xoay + 2 màn back-to-back
  // (15.6" cho dược sĩ, CFD 10" cho khách) + bàn phím nghiêng + chuột.
  const POS_X = 1.45;
  const pos = new THREE.Group();
  pos.scale.setScalar(0.72);

  // Đế chữ T
  const posBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.04, 0.42),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.35, roughness: 0.45 })
  );
  posBase.position.set(0, 0.025, 0); pos.add(posBase);
  const posBaseRim = new THREE.Mesh(
    new THREE.BoxGeometry(0.52, 0.012, 0.44),
    new THREE.MeshStandardMaterial({ color: 0x1f2937 })
  );
  posBaseRim.position.set(0, 0.005, 0); pos.add(posBaseRim);
  // Trụ
  const posStem = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.32, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.35, roughness: 0.45 })
  );
  posStem.position.set(0, 0.22, 0); pos.add(posStem);
  // Khớp xoay (cylinder)
  const posJoint = new THREE.Mesh(
    new THREE.CylinderGeometry(0.055, 0.055, 0.07, 24),
    new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.6, roughness: 0.3 })
  );
  posJoint.position.set(0, 0.38, 0); pos.add(posJoint);

  // ──── Màn chính 15.6" cho DƯỢC SĨ (hướng -z, vào phía sau quầy) ────
  const monitorMain = new THREE.Group();
  monitorMain.position.set(0, 0.6, -0.08);
  monitorMain.rotation.set(0.05, Math.PI, 0);
  const mainBezel = new THREE.Mesh(
    new THREE.BoxGeometry(0.92, 0.62, 0.06),
    new THREE.MeshStandardMaterial({ color: 0x0a0f1c, metalness: 0.55, roughness: 0.4 })
  );
  monitorMain.add(mainBezel);
  // Thanh đáy bezel
  const mainBottomBar = new THREE.Mesh(
    new THREE.BoxGeometry(0.92, 0.06, 0.061),
    new THREE.MeshStandardMaterial({ color: 0x0f172a })
  );
  mainBottomBar.position.set(0, -0.27, 0.001);
  monitorMain.add(mainBottomBar);
  // Screen texture (canvas) — UI giống upstream
  const mainScreenTex = (() => {
    const c = document.createElement('canvas');
    c.width = 860; c.height = 500;
    const ctx = c.getContext('2d');
    // Background
    const grad = ctx.createLinearGradient(0, 0, 0, 500);
    grad.addColorStop(0, '#0b1220'); grad.addColorStop(1, '#0f1f3a');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 860, 500);
    // Top status bar
    ctx.fillStyle = '#0d9488';
    ctx.fillRect(0, 0, 860, 50);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 26px Inter, sans-serif';
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    ctx.fillText('★ Pharma-POS v1.0', 16, 25);
    ctx.fillStyle = '#a7f3d0'; ctx.font = 'bold 22px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('● online · DS001', 844, 25);
    // Body
    ctx.fillStyle = '#bae6fd'; ctx.font = 'bold 40px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('F2: DANH MỤC  ·  F9: THANH TOÁN', 430, 180);
    ctx.fillStyle = '#e2e8f0'; ctx.font = '28px Inter, sans-serif';
    ctx.fillText('Danh mục: 180 SKU', 430, 240);
    // Green CTA
    ctx.fillStyle = '#22c55e'; ctx.font = 'bold 50px Inter, sans-serif';
    ctx.fillText('🛒 NHẤN ĐỂ MỞ POS', 430, 340);
    // Footer ticks
    ctx.fillStyle = '#0ea5e9'; ctx.fillRect(0, 480, 860, 6);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const mainScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.86, 0.5),
    new THREE.MeshStandardMaterial({
      map: mainScreenTex, emissive: 0x082f49, emissiveIntensity: 0.45,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    })
  );
  mainScreen.position.set(0, 0.025, 0.035);
  mainScreen.userData = { posClick: true };
  monitorMain.add(mainScreen);
  pos.add(monitorMain);

  // ──── Màn phụ CFD 10" cho KHÁCH (hướng +z) ────
  const monitorCFD = new THREE.Group();
  monitorCFD.position.set(0, 0.6, 0.08);
  monitorCFD.rotation.set(0.05, 0, 0);
  const cfdBezel = new THREE.Mesh(
    new THREE.BoxGeometry(0.56, 0.4, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x0a0f1c, metalness: 0.55, roughness: 0.4 })
  );
  monitorCFD.add(cfdBezel);
  const cfdScreenTex = (() => {
    const c = document.createElement('canvas');
    c.width = 520; c.height = 320;
    const ctx = c.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 320);
    grad.addColorStop(0, '#0c4a6e'); grad.addColorStop(1, '#0e7490');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 520, 320);
    ctx.fillStyle = '#ecfeff'; ctx.font = 'bold 22px Inter, sans-serif';
    ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    ctx.fillText('NHÀ THUỐC GPP · KHÁCH HÀNG', 260, 50);
    ctx.fillStyle = '#bae6fd'; ctx.font = 'bold 26px Inter, sans-serif';
    ctx.fillText('TỔNG TIỀN PHẢI THANH TOÁN', 260, 110);
    ctx.fillStyle = '#fef3c7'; ctx.font = 'bold 75px Inter, sans-serif';
    ctx.fillText('— ₫', 260, 200);
    ctx.fillStyle = '#cbd5e1'; ctx.font = '18px Inter, sans-serif';
    ctx.fillText('(đã gồm 8% VAT) — Cảm ơn quý khách!', 260, 280);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const cfdScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.52, 0.32),
    new THREE.MeshStandardMaterial({
      map: cfdScreenTex, emissive: 0x0ea5e9, emissiveIntensity: 0.4,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    })
  );
  cfdScreen.position.set(0, 0.02, 0.03);
  monitorCFD.add(cfdScreen);
  pos.add(monitorCFD);

  // ──── Bàn phím nghiêng ────
  const kbBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.025, 0.2),
    new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.55 })
  );
  kbBase.rotation.x = 0.08;
  kbBase.position.set(0, 0.015, -0.32);
  pos.add(kbBase);
  const kbKeys = new THREE.Mesh(
    new THREE.BoxGeometry(0.51, 0.005, 0.17),
    new THREE.MeshStandardMaterial({ color: 0x475569 })
  );
  kbKeys.rotation.x = 0.08;
  kbKeys.position.set(0, 0.029, -0.32);
  pos.add(kbKeys);
  // Chuột (bên trái bàn phím khi nhìn từ phía dược sĩ)
  const mouse = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.028, 0.13),
    new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.55 })
  );
  mouse.position.set(-0.35, 0.018, -0.32); pos.add(mouse);

  pos.position.set(POS_X, COUNTER_H + 0.05, COUNTER_Z - 0.05);
  scene.add(pos);

  // ── P2: Máy quét barcode (handheld) — đặt phẳng trên quầy cạnh POS ─────
  // Body teal-xám có handle, lens trong suốt, LED đỏ. Click → fire scan event.
  const scannerGroup = new THREE.Group();
  scannerGroup.position.set(POS_X - 0.42, COUNTER_H + 0.08, COUNTER_Z + 0.15);
  scannerGroup.rotation.y = -0.4;
  scene.add(scannerGroup);
  const scBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.06, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.3 })
  );
  scBody.castShadow = true; scannerGroup.add(scBody);
  // Tay nắm cong xuống
  const scHandle = new THREE.Mesh(
    new THREE.BoxGeometry(0.05, 0.10, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 })
  );
  scHandle.position.set(0, -0.06, -0.03);
  scHandle.rotation.x = 0.25;
  scannerGroup.add(scHandle);
  // Lens trong suốt phía trước (mặt +z)
  const scLens = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.04, 0.005),
    new THREE.MeshPhysicalMaterial({
      color: 0x7c2d12, transparent: true, opacity: 0.7,
      roughness: 0.15, metalness: 0.1
    })
  );
  scLens.position.set(0, 0, 0.072); scannerGroup.add(scLens);
  // LED đỏ scanning (emissive — sẽ pulse khi quét)
  const scLED = new THREE.Mesh(
    new THREE.CircleGeometry(0.007, 16),
    new THREE.MeshStandardMaterial({
      color: 0xef4444, emissive: 0xef4444, emissiveIntensity: 0.5
    })
  );
  scLED.position.set(0, 0.025, 0.073);
  scannerGroup.add(scLED);
  scannerGroup.userData = { scanner: true, led: scLED };

  // Tia laser đỏ (Plane) — bắn ra mặt +z khi quét, mặc định ẩn.
  const scanBeam = new THREE.Mesh(
    new THREE.PlaneGeometry(0.04, 0.6),
    new THREE.MeshBasicMaterial({
      color: 0xef4444, transparent: true, opacity: 0.0, side: THREE.DoubleSide
    })
  );
  scanBeam.rotation.x = -Math.PI / 2;
  scanBeam.position.set(0, 0, 0.30);
  scannerGroup.add(scanBeam);

  // ── P2: Máy in hóa đơn — POS receipt printer ────────────────────────────
  const printerGroup = new THREE.Group();
  printerGroup.position.set(POS_X + 0.42, COUNTER_H + 0.05, COUNTER_Z - 0.20);
  printerGroup.rotation.y = 0.3;
  scene.add(printerGroup);
  const prBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.10, 0.18),
    new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.45 })
  );
  prBody.position.y = 0.05; prBody.castShadow = true;
  printerGroup.add(prBody);
  const prSlot = new THREE.Mesh(
    new THREE.BoxGeometry(0.10, 0.012, 0.02),
    new THREE.MeshStandardMaterial({ color: 0x0f172a })
  );
  prSlot.position.set(0, 0.106, 0.092);
  printerGroup.add(prSlot);
  // Cuộn giấy nhỏ nhô ra slot (sẽ animate kéo dài khi in)
  const prPaper = new THREE.Mesh(
    new THREE.PlaneGeometry(0.085, 0.10),
    new THREE.MeshStandardMaterial({
      color: 0xfffef0, side: THREE.DoubleSide, roughness: 0.85
    })
  );
  prPaper.position.set(0, 0.155, 0.092);
  prPaper.rotation.x = 0.2;
  prPaper.visible = false; // ẩn ban đầu, hiện khi in
  printerGroup.add(prPaper);
  // Indicator xanh
  const prLED = new THREE.Mesh(
    new THREE.CircleGeometry(0.006, 16),
    new THREE.MeshStandardMaterial({
      color: 0x22c55e, emissive: 0x22c55e, emissiveIntensity: 0.7
    })
  );
  prLED.position.set(-0.06, 0.087, 0.091);
  printerGroup.add(prLED);
  printerGroup.userData = { printer: true, paper: prPaper };

  // ── P2: Dược thư 2018 + MIMS Pharmacy — 2 cuốn sách tra cứu ─────────────
  function buildBook(opts) {
    const g = new THREE.Group();
    const coverMat = new THREE.MeshStandardMaterial({ color: opts.color, roughness: 0.55 });
    const pagesMat = new THREE.MeshStandardMaterial({ color: 0xfef9c3, roughness: 0.7 });
    const W = opts.w, D = opts.d, H = opts.thickness;
    // Pages (lõi giấy)
    const pages = new THREE.Mesh(new THREE.BoxGeometry(W - 0.005, H - 0.004, D - 0.005), pagesMat);
    g.add(pages);
    // Cover (bọc ngoài, dày hơn 0.5mm)
    const cover = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), coverMat);
    g.add(cover);
    // Title plate trên cover front (mặt +y)
    const titleTex = makeTextTexture(opts.title, {
      w: 768, h: 256, bg: opts.color, color: '#fef9c3', fontSize: 64
    });
    const titlePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(W * 0.78, D * 0.42),
      new THREE.MeshStandardMaterial({
        map: titleTex, roughness: 0.55,
        polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
      })
    );
    titlePlane.rotation.x = -Math.PI / 2;
    titlePlane.position.set(0, H / 2 + 0.001, 0);
    g.add(titlePlane);
    // Spine label (mặt bên +x): chữ viết dọc
    const spineTex = makeTextTexture(opts.spine || opts.title, {
      w: 768, h: 96, bg: opts.color, color: '#fef9c3', fontSize: 44
    });
    const spinePlane = new THREE.Mesh(
      new THREE.PlaneGeometry(D * 0.85, H * 0.7),
      new THREE.MeshStandardMaterial({
        map: spineTex, roughness: 0.55,
        polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
      })
    );
    spinePlane.rotation.y = Math.PI / 2;
    spinePlane.position.set(W / 2 + 0.001, 0, 0);
    g.add(spinePlane);
    g.userData = { bookId: opts.id, bookTitle: opts.title };
    return g;
  }
  const duocThu = buildBook({
    id: 'duocthu2018',
    title: 'DƯỢC THƯ 2018',
    spine: 'DƯỢC THƯ QUỐC GIA 2018',
    color: 0x7f1d1d, // đỏ Bordeaux
    w: 0.16, d: 0.22, thickness: 0.06
  });
  duocThu.position.set(POS_X - 0.85, COUNTER_H + 0.04 + 0.03, COUNTER_Z + 0.20);
  duocThu.rotation.y = -0.15;
  scene.add(duocThu);

  const mims = buildBook({
    id: 'mims2024',
    title: 'MIMS PHARMACY',
    spine: 'MIMS PHARMACY VIETNAM',
    color: 0xb45309, // vàng cam
    w: 0.14, d: 0.20, thickness: 0.04
  });
  // Đặt CHỒNG LÊN Dược thư cho đẹp
  mims.position.set(POS_X - 0.85, COUNTER_H + 0.04 + 0.085, COUNTER_Z + 0.22);
  mims.rotation.y = 0.12;
  scene.add(mims);

  // ── Khay BÁN HÀNG (pick tray) — port 1-1 từ upstream: mặt khay + 4 viền gờ + nhãn ──
  // Đặt GIỮA dãy thuốc trưng bày (x=-1.30) và khay dụng cụ (x=+0.90) — center quầy.
  const PICK_TRAY_W = 0.62, PICK_TRAY_D = 0.34, PICK_TRAY_T = 0.022, PICK_TRAY_RIM = 0.01;
  const PICK_TRAY_CX = -0.20;
  const PICK_TRAY_CZ = COUNTER_Z + 0.20;
  const PICK_TRAY_CY = COUNTER_H + PICK_TRAY_T / 2;
  const pickTray = new THREE.Group();
  pickTray.position.set(PICK_TRAY_CX, PICK_TRAY_CY, PICK_TRAY_CZ);
  scene.add(pickTray);
  const pickBase = new THREE.Mesh(
    new THREE.BoxGeometry(PICK_TRAY_W, PICK_TRAY_T, PICK_TRAY_D),
    new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.55, metalness: 0.05 })
  );
  pickTray.add(pickBase);
  // 4 viền gờ — đổi sang accent xanh dương + emissive nhẹ để khay nổi bật
  // trên mặt teal counter, dược sĩ dễ nhận diện chỗ "RA THUỐC".
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7, roughness: 0.45,
    emissive: 0x0284c7, emissiveIntensity: 0.25
  });
  [
    [0,                                  PICK_TRAY_T / 2 + 0.005, -PICK_TRAY_D / 2 + 0.005, PICK_TRAY_W,    0.012, PICK_TRAY_RIM],
    [0,                                  PICK_TRAY_T / 2 + 0.005,  PICK_TRAY_D / 2 - 0.005, PICK_TRAY_W,    0.012, PICK_TRAY_RIM],
    [-PICK_TRAY_W / 2 + 0.005,           PICK_TRAY_T / 2 + 0.005, 0,                        PICK_TRAY_RIM, 0.012, PICK_TRAY_D],
    [ PICK_TRAY_W / 2 - 0.005,           PICK_TRAY_T / 2 + 0.005, 0,                        PICK_TRAY_RIM, 0.012, PICK_TRAY_D]
  ].forEach(p => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(p[3], p[4], p[5]), rimMat);
    m.position.set(p[0], p[1], p[2]);
    pickTray.add(m);
  });
  // Nhãn "KHAY BÁN HÀNG"
  const pickTrayLabelTex = (() => {
    const c = document.createElement('canvas');
    c.width = 512; c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#e2e8f0'; ctx.fillRect(0, 0, 512, 64);
    ctx.fillStyle = '#475569'; ctx.font = 'bold 30px Inter, sans-serif';
    ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    ctx.fillText('KHAY BÁN HÀNG · 4×2 slot', 256, 32);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const pickTrayLabel = new THREE.Mesh(
    new THREE.PlaneGeometry(PICK_TRAY_W * 0.7, 0.05),
    new THREE.MeshStandardMaterial({
      map: pickTrayLabelTex, transparent: true,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    })
  );
  pickTrayLabel.rotation.x = -Math.PI / 2;
  pickTrayLabel.position.set(0, PICK_TRAY_T / 2 + 0.001, -PICK_TRAY_D / 2 + 0.05);
  pickTray.add(pickTrayLabel);

  const TRAY_SLOTS = [];
  for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) {
    TRAY_SLOTS.push(new THREE.Vector3(
      PICK_TRAY_CX + (c - 1.5) * 0.135,
      COUNTER_H + 0.06,
      PICK_TRAY_CZ + (r - 0.5) * 0.14
    ));
  }
  function pickSlotPos(idx) { return TRAY_SLOTS[Math.min(idx, TRAY_SLOTS.length - 1)]; }

  // ── KHAY DỤNG CỤ + RA LẺ + NHÃN HDSD (tool tray) — port 1-1 upstream ──
  // Group co lại 0.75× để vừa quầy, mặt khay 0.95×0.42m thật. Dịch sát máy tính
  // POS (x=1.45) để pick tray nằm RIÊNG giữa quầy không bị dụng cụ chen vào.
  const TOOLTRAY_X = 0.90;
  const TT_SCALE = 0.75;
  const TW = 0.95, TD = 0.42;
  const toolTrayGroup = new THREE.Group();
  toolTrayGroup.position.set(TOOLTRAY_X, COUNTER_H + 0.01 * TT_SCALE, COUNTER_Z - 0.05);
  toolTrayGroup.scale.setScalar(TT_SCALE);
  scene.add(toolTrayGroup);

  // Khay nền (click để soạn nhãn HDSD)
  const toolTrayBase = new THREE.Mesh(
    new THREE.BoxGeometry(TW, 0.02, TD),
    new THREE.MeshStandardMaterial({ color: 0xe7e5e4, roughness: 0.6 })
  );
  toolTrayBase.userData = { labelClick: true };
  toolTrayGroup.add(toolTrayBase);
  // Nhãn "KHAY DỤNG CỤ + RA LẺ + NHÃN HDSD"
  const toolTrayLabelTex = (() => {
    const c = document.createElement('canvas');
    c.width = 1024; c.height = 96;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#fde68a'; ctx.fillRect(0, 0, 1024, 96);
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, 1020, 92);
    ctx.fillStyle = '#1f2937'; ctx.font = 'bold 38px Inter, sans-serif';
    ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
    ctx.fillText('KHAY DỤNG CỤ + RA LẺ + NHÃN HDSD · click để soạn nhãn', 512, 48);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const toolTrayLabel = new THREE.Mesh(
    new THREE.PlaneGeometry(TW * 0.92, 0.06),
    new THREE.MeshStandardMaterial({
      map: toolTrayLabelTex, transparent: true,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    })
  );
  toolTrayLabel.rotation.x = -Math.PI / 2;
  toolTrayLabel.position.set(0, 0.012, -TD / 2 + 0.05);
  toolTrayGroup.add(toolTrayLabel);

  // Hộp RA LẺ (pill counter) — vàng kem, viền cam, gạt chia + 4 viên thuốc giả
  const pillCounter = new THREE.Group();
  pillCounter.position.set(-0.36, 0.012, 0.05);
  toolTrayGroup.add(pillCounter);
  const pillPad = new THREE.Mesh(
    new THREE.BoxGeometry(0.2, 0.025, 0.16),
    new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.5 })
  );
  pillCounter.add(pillPad);
  // Viền 4 cạnh
  [
    [0, 0.02, -0.08, 0.2, 0.04, 0.01],
    [0, 0.02,  0.08, 0.2, 0.04, 0.01],
    [-0.1, 0.02, 0, 0.01, 0.04, 0.16],
    [ 0.1, 0.02, 0, 0.01, 0.04, 0.16]
  ].forEach(p => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(p[3], p[4], p[5]),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
    m.position.set(p[0], p[1], p[2]);
    pillCounter.add(m);
  });
  // Gạt chia
  const divider = new THREE.Mesh(
    new THREE.BoxGeometry(0.005, 0.04, 0.14),
    new THREE.MeshStandardMaterial({ color: 0x0f172a })
  );
  divider.position.set(0, 0.025, 0);
  pillCounter.add(divider);
  // 4 viên thuốc giả
  [[-0.05,-0.04],[-0.03,0.02],[0.04,-0.03],[0.06,0.05]].forEach(([dx, dz], i) => {
    const pill = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.006, 14),
      new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0xffffff : 0xfbbf24, roughness: 0.5 })
    );
    pill.position.set(dx, 0.022, dz);
    pillCounter.add(pill);
  });

  // 3 bao bì ra lẻ (Sáng/Trưa/Tối) — trắng/vàng/hồng
  [
    { color: 0xffffff, outline: 0xcbd5e1, dx: -0.13 },
    { color: 0xfde68a, outline: 0xd97706, dx: -0.02 },
    { color: 0xfbcfe8, outline: 0xbe185d, dx:  0.09 }
  ].forEach((bag, i) => {
    const g = new THREE.Group();
    g.position.set(bag.dx, 0.012, -0.05);
    g.rotation.y = i * 0.08 - 0.1;
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.022, 0.11),
      new THREE.MeshStandardMaterial({ color: bag.color, roughness: 0.7 })
    );
    g.add(body);
    const seal = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.004, 0.012),
      new THREE.MeshStandardMaterial({ color: bag.outline })
    );
    seal.position.set(0, 0.013, -0.05);
    g.add(seal);
    toolTrayGroup.add(g);
  });

  // Túi zip-lock kín khí (xanh trong)
  const zipBag = new THREE.Group();
  zipBag.position.set(0.18, 0.012, -0.05);
  zipBag.rotation.y = 0.15;
  const zipBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.09, 0.014, 0.11),
    new THREE.MeshStandardMaterial({
      color: 0xcffafe, roughness: 0.25, metalness: 0.1,
      transparent: true, opacity: 0.78
    })
  );
  zipBag.add(zipBody);
  const zipStrip = new THREE.Mesh(
    new THREE.BoxGeometry(0.085, 0.004, 0.008),
    new THREE.MeshStandardMaterial({ color: 0x0891b2 })
  );
  zipStrip.position.set(0, 0.009, -0.05);
  zipBag.add(zipStrip);
  toolTrayGroup.add(zipBag);

  // Xấp giấy dính HDSD (4 lớp) — màu trắng + 1 lớp vàng kem trên cùng
  const stickerPile = new THREE.Group();
  stickerPile.position.set(0.38, 0.012, -0.08);
  stickerPile.rotation.y = 0.1;
  for (let i = 0; i < 4; i++) {
    const sheet = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.003, 0.06),
      new THREE.MeshStandardMaterial({ color: i === 3 ? 0xfef9c3 : 0xffffff, roughness: 0.65 })
    );
    sheet.position.y = 0.003 + i * 0.0035;
    stickerPile.add(sheet);
  }
  toolTrayGroup.add(stickerPile);

  // Tool GLB targets: scissors/tape/pen/notepad — vị trí trong khay 0.95×0.42
  const TOOL_TARGETS = [
    { url: 'scissors.glb', position: [0.05, 0.012, 0.12], rotY:  Math.PI / 4,   size: 0.16 },
    { url: 'tape.glb',     position: [0.22, 0.012, 0.12], rotY: -Math.PI / 6,   size: 0.11 },
    { url: 'pen.glb',      position: [-0.1, 0.012, 0.13], rotY:  Math.PI / 2.5, size: 0.14 },
    { url: 'notepad.glb',  position: [0.38, 0.012, 0.05], rotY:  Math.PI / 12,  size: 0.16 }
  ];

  // ── FRIDGE — custom mesh, 5 shelves, 2 doors, 13 stocks (port 1-1) ───────
  const fridgeGroup = new THREE.Group();
  // Đẩy xa tường trái 24cm (trước 36cm → 60cm) để hết z-fight với wall mesh.
  fridgeGroup.position.set(-ROOM_W / 2 + 0.60, 0, COUNTER_Z + 0.1);
  fridgeGroup.rotation.y = Math.PI / 2;
  scene.add(fridgeGroup);

  const fridgeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4, metalness: 0.05 });
  const innerMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.85 });
  const shelfMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.55, transparent: true, opacity: 0.92 });

  // Side panels + back + ceiling + bottom + middle divider
  const sideL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.7, 0.7), fridgeMat);
  sideL.position.set(-0.37, 0.85, 0); fridgeGroup.add(sideL);
  const sideR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.7, 0.7), fridgeMat);
  sideR.position.set(0.37, 0.85, 0); fridgeGroup.add(sideR);
  const fridgeBack = new THREE.Mesh(new THREE.BoxGeometry(0.78, 1.7, 0.04), innerMat);
  fridgeBack.position.set(0, 0.85, -0.33); fridgeGroup.add(fridgeBack);
  const fridgeTop = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.04, 0.7), fridgeMat);
  fridgeTop.position.set(0, 1.68, 0); fridgeGroup.add(fridgeTop);
  const fridgeBottom = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.02, 0.66), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.6 }));
  fridgeBottom.position.set(0, 0.06, 0); fridgeGroup.add(fridgeBottom);
  const fridgeMid = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.02, 0.66), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.6 }));
  fridgeMid.position.set(0, 1.05, 0); fridgeGroup.add(fridgeMid);
  // 3 interior shelves
  ['topShelf','bottomMid2','bottomMid1'].forEach(k => {
    const sh = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.015, 0.62), shelfMat);
    sh.position.set(0, FRIDGE_SHELF_Y[k], 0); fridgeGroup.add(sh);
  });
  // LED inside
  const fridgeLED = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.02, 0.05),
    new THREE.MeshStandardMaterial({ color: 0xfef9c3, emissive: 0xfde68a, emissiveIntensity: 0.2 })
  );
  fridgeLED.position.set(0, 1.66, 0); fridgeGroup.add(fridgeLED);
  // Outside indicator
  const fridgeInd = new THREE.Mesh(
    new THREE.CircleGeometry(0.014, 16),
    new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x22c55e, emissiveIntensity: 0.7 })
  );
  fridgeInd.position.set(0.3, 1.66, 0.36); fridgeGroup.add(fridgeInd);
  // Base
  const fridgeBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 0.05, 0.72),
    new THREE.MeshStandardMaterial({ color: 0x475569 })
  );
  fridgeBase.position.set(0, 0.025, 0); fridgeGroup.add(fridgeBase);

  // 2 doors (hinge at right edge, rotate +π/2.2 when open)
  const doorMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.45, metalness: 0.1 });
  function buildFridgeDoor(centerY, width, height) {
    const hinge = new THREE.Group();
    // Door hinge ra trước sideL/sideR thêm 1.5cm để khe mặt sau cánh (z≈0.36)
    // không z-fight với mép trước vách (z=0.35).
    hinge.position.set(width / 2, centerY, 0.375);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.025), doorMat);
    panel.position.set(-width / 2, 0, 0);
    panel.castShadow = true;
    hinge.add(panel);
    // handle
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.28, 0.025), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6 }));
    handle.position.set(-width + 0.05, 0, 0.022);
    hinge.add(handle);
    panel.userData = { fridgeDoor: hinge };
    handle.userData = { fridgeDoor: hinge };
    hinge.userData = { isOpen: false, targetY: 0 };
    return hinge;
  }
  const topDoor = buildFridgeDoor(1.35, 0.74, 0.6);
  fridgeGroup.add(topDoor);
  const botDoor = buildFridgeDoor(0.55, 0.74, 1.0);
  fridgeGroup.add(botDoor);
  // Fridge stock items — hộp 3D có:
  //  · Thân nền màu nhạt theo stock.color
  //  · Banner accent đậm ở đỉnh (chéo gradient)
  //  · Nhãn canvas dán mặt +z với tên thuốc + chữ "BẢO QUẢN 2-8°C"
  //  · Một vạch chấm bi nhỏ (lot mock-up) để trông như hộp thật.
  // Helper: tạo texture nhãn fridge stock (canvas 256×192).
  function makeFridgeStockTex(stock) {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 192;
    const ctx = c.getContext('2d');
    // Body
    ctx.fillStyle = stock.color || '#dbeafe';
    ctx.fillRect(0, 0, 256, 192);
    // Banner accent đậm hơn 30% — derive từ stock.color
    const m = /^#?([0-9a-f]{6})$/i.exec(stock.color || '');
    let accent = '#0369a1';
    if (m) {
      const n = parseInt(m[1], 16);
      const r = Math.max(0, ((n>>16)&0xff) - 50);
      const g = Math.max(0, ((n>>8) &0xff) - 50);
      const b = Math.max(0, ( n     &0xff) - 50);
      accent = `rgb(${r},${g},${b})`;
    }
    ctx.fillStyle = accent;
    ctx.fillRect(0, 0, 256, 38);
    // Snowflake icon "❄" + nhãn cold-chain
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('❄ BẢO QUẢN 2-8°C', 12, 20);
    // Tên thuốc
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 28px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText((stock.label || '').slice(0, 16), 128, 92);
    // Vạch nhãn mã lô — line stippled
    ctx.strokeStyle = accent; ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.beginPath(); ctx.moveTo(28, 130); ctx.lineTo(228, 130); ctx.stroke();
    ctx.setLineDash([]);
    // Lot + EXP mock
    ctx.fillStyle = '#475569';
    ctx.font = '16px Inter, sans-serif';
    ctx.fillText('LOT  ' + stock.id.slice(-6).toUpperCase() + '   EXP 12/26', 128, 155);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }
  const fridgeItems = [];
  FRIDGE_STOCKS.forEach((stock) => {
    const group = new THREE.Group();
    // Thân hộp
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.10, 0.11, 0.08),
      new THREE.MeshStandardMaterial({ color: stock.color, roughness: 0.55 })
    );
    body.castShadow = true;
    group.add(body);
    // Nhãn canvas dán mặt +z (mặt cửa khi mở tủ lạnh)
    const tex = makeFridgeStockTex(stock);
    const labelMat = new THREE.MeshStandardMaterial({
      map: tex, roughness: 0.55,
      polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3
    });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(0.092, 0.103), labelMat);
    label.position.set(0, 0, 0.041);
    group.add(label);
    // Dải accent mỏng ở cạnh dưới mặt trước (giả "tem niêm phong")
    const seal = new THREE.Mesh(
      new THREE.BoxGeometry(0.092, 0.012, 0.003),
      new THREE.MeshStandardMaterial({ color: '#dc2626', roughness: 0.5,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })
    );
    seal.position.set(0, -0.044, 0.042);
    group.add(seal);

    const y = FRIDGE_SHELF_Y[stock.shelf] + 0.055;
    group.position.set(stock.x, y, 0.05);
    group.userData = {
      drugId: stock.id, isFridgeStock: true,
      drug: { id: stock.id, brand: stock.label, generic: stock.label, strength: '', isRx: true, isAntibiotic: false, unitPrice: 50000 },
      homePosition: group.position.clone()
    };
    fridgeGroup.add(group);
    fridgeItems.push(group);
    drugMeshes.push(group);
  });

  // ── CONSULT DESK (round table + 2 chairs) ─────────────────────────────────
  const consult = new THREE.Group();
  consult.position.set(-3.4, 0, -0.4);
  scene.add(consult);
  const table = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.04, 32), new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.45 }));
  table.position.y = 0.74; table.castShadow = table.receiveShadow = true; consult.add(table);
  const tableLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.72, 16), new THREE.MeshStandardMaterial({ color: 0x92400e }));
  tableLeg.position.y = 0.36; consult.add(tableLeg);
  const tableBase = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.04, 24), new THREE.MeshStandardMaterial({ color: 0x92400e }));
  tableBase.position.y = 0.02; consult.add(tableBase);
  function buildChair() {
    const ch = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.6 }));
    seat.position.y = 0.45; seat.castShadow = true; ch.add(seat);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.55, 0.05), new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.6 }));
    back.position.set(0, 0.78, -0.22); back.castShadow = true; ch.add(back);
    [[-0.2,-0.2],[0.2,-0.2],[-0.2,0.2],[0.2,0.2]].forEach(([x, z]) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.45, 0.04), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.4 }));
      leg.position.set(x, 0.22, z); leg.castShadow = true; ch.add(leg);
    });
    return ch;
  }
  const chA = buildChair(); chA.position.set(0, 0, -0.8); consult.add(chA);
  const chB = buildChair(); chB.position.set(0, 0, 0.8); chB.rotation.y = Math.PI; consult.add(chB);

  // ── P6c: Nhân vật DS Đại học (capsule + áo blouse) — hiển thị khi senior-mode bật ─
  const seniorPharmacist = new THREE.Group();
  seniorPharmacist.position.set(0, 0, -1.2); // đứng phía sau chair A
  seniorPharmacist.visible = false; // ẩn ban đầu, JS toggle khi senior-mode ON
  consult.add(seniorPharmacist);
  // Quần xám/đen
  const spPants = new THREE.Mesh(
    new THREE.CylinderGeometry(0.14, 0.16, 0.7, 16),
    new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 })
  );
  spPants.position.y = 0.35; spPants.castShadow = true;
  seniorPharmacist.add(spPants);
  // Áo blouse trắng
  const spCoat = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.20, 0.55, 16),
    new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.5 })
  );
  spCoat.position.y = 0.95; spCoat.castShadow = true;
  seniorPharmacist.add(spCoat);
  // Đầu (sphere) + tóc
  const spHead = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 24, 24),
    new THREE.MeshStandardMaterial({ color: 0xfde68a, roughness: 0.55 })
  );
  spHead.position.y = 1.35; spHead.castShadow = true;
  seniorPharmacist.add(spHead);
  const spHair = new THREE.Mesh(
    new THREE.SphereGeometry(0.135, 24, 24, 0, Math.PI * 2, 0, Math.PI / 1.8),
    new THREE.MeshStandardMaterial({ color: 0x4c2a1e, roughness: 0.7 })
  );
  spHair.position.y = 1.38;
  seniorPharmacist.add(spHair);
  // Kính (2 ring nhỏ)
  const spGlassMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.4 });
  const spGlassL = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.005, 8, 16), spGlassMat);
  spGlassL.position.set(-0.04, 1.36, 0.115); seniorPharmacist.add(spGlassL);
  const spGlassR = new THREE.Mesh(new THREE.TorusGeometry(0.025, 0.005, 8, 16), spGlassMat);
  spGlassR.position.set( 0.04, 1.36, 0.115); seniorPharmacist.add(spGlassR);
  // Ống nghe (stethoscope) quanh cổ
  const spSteth = new THREE.Mesh(
    new THREE.TorusGeometry(0.10, 0.008, 8, 24, Math.PI * 1.2),
    new THREE.MeshStandardMaterial({ color: 0x1e40af, roughness: 0.5 })
  );
  spSteth.position.set(0, 1.22, 0.08);
  spSteth.rotation.x = Math.PI / 2;
  seniorPharmacist.add(spSteth);
  // Nameplate bay phía trên đầu
  const spNameTex = makeTextTexture('DS. ĐH PHẠM THỊ HÀ', {
    w: 768, h: 96, bg: '#ecfdf5', color: '#065f46', fontSize: 44
  });
  const spName = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.08),
    new THREE.MeshStandardMaterial({
      map: spNameTex, transparent: true,
      polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6
    })
  );
  spName.position.y = 1.65;
  seniorPharmacist.add(spName);
  // Watch global body class để toggle visible
  const seniorObserver = new MutationObserver(() => {
    seniorPharmacist.visible = document.body.classList.contains('senior-mode');
  });
  seniorObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // ── WAITING CHAIR (3-seat) ────────────────────────────────────────────────
  function buildWaitingChair() {
    const wch = new THREE.Group();
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.05, 0.45), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.4 }));
    base.position.y = 0.45; base.castShadow = true; wch.add(base);
    [-0.6, 0, 0.6].forEach(x => {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.03, 0.4), new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.7 }));
      seat.position.set(x, 0.48, 0); seat.castShadow = true; wch.add(seat);
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.4, 0.04), new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.7 }));
      back.position.set(x, 0.78, -0.2); back.castShadow = true; wch.add(back);
    });
    [-0.85, 0.85].forEach(x => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.45, 0.45), new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5 }));
      leg.position.set(x, 0.22, 0); leg.castShadow = true; wch.add(leg);
    });
    return wch;
  }
  const waiting = buildWaitingChair();
  waiting.position.set(-ROOM_W / 2 + 0.4, 0, 2.8);
  waiting.rotation.y = Math.PI / 2;
  scene.add(waiting);

  // ── CEILING FAN ───────────────────────────────────────────────────────────
  const fan = new THREE.Group();
  fan.position.set(0, ROOM_H - 0.45, 0.4);
  scene.add(fan);
  const fanRod = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.36, 12), new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.25 }));
  fanRod.position.y = 0.18; fan.add(fanRod);
  const fanHub = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 0.1, 24), new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7, roughness: 0.4 }));
  fan.add(fanHub);
  const fanDisk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.13, 0.04, 24), new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.85, roughness: 0.25 }));
  fanDisk.position.y = 0.07; fan.add(fanDisk);
  const fanBlades = new THREE.Group();
  for (let i = 0; i < 4; i++) {
    const bladeGroup = new THREE.Group();
    bladeGroup.rotation.y = (i * Math.PI) / 2;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.018, 0.2), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.6 }));
    blade.position.set(0.55, -0.02, 0);
    blade.rotation.x = 0.18;
    blade.castShadow = true;
    bladeGroup.add(blade);
    fanBlades.add(bladeGroup);
  }
  fan.add(fanBlades);

  // ── AC UNITS on back wall ─────────────────────────────────────────────────
  function buildAC() {
    const ac = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.4, 0.32), new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.4 }));
    body.castShadow = true; ac.add(body);
    const vent = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.06, 0.02), new THREE.MeshStandardMaterial({ color: 0xe2e8f0 }));
    vent.position.set(0, -0.18, 0.16); ac.add(vent);
    const led = new THREE.Mesh(new THREE.CircleGeometry(0.018, 16), new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x22c55e, emissiveIntensity: 0.6 }));
    led.position.set(-0.6, 0.12, 0.165); ac.add(led);
    // Brand text "Inveter" — dán mặt trước, mép phải, chữ xám nhạt mảnh.
    const brandTex = makeTextTexture('Inveter', {
      w: 384, h: 96, bg: '#fafafa', color: '#94a3b8', fontSize: 56
    });
    const brand = new THREE.Mesh(
      new THREE.PlaneGeometry(0.24, 0.06),
      new THREE.MeshStandardMaterial({
        map: brandTex, transparent: true, roughness: 0.6,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
      })
    );
    brand.position.set(0.55, 0.08, 0.161);
    ac.add(brand);
    return ac;
  }
  const ac1 = buildAC(); ac1.position.set(-1.5, ROOM_H - 0.5, BACK_Z + 0.04); scene.add(ac1);
  const ac2 = buildAC(); ac2.position.set( 1.5, ROOM_H - 0.5, BACK_Z + 0.04); scene.add(ac2);

  // ── GLB models (async load) ──────────────────────────────────────────────
  const plantGroups = []; // { group, phase }
  const charMixers = [];

  async function loadAllModels() {
    // Tool tray items
    for (const t of TOOL_TARGETS) {
      try {
        const gltf = await loadGLB(MODELS_BASE + t.url);
        const obj = gltf.scene;
        obj.rotation.y = t.rotY;
        autoScaleGLB(obj, t.size);
        obj.position.x = t.position[0];
        obj.position.z = t.position[2];
        toolTrayGroup.add(obj);
      } catch (e) { console.warn('Tool model load failed:', t.url, e); }
    }
    // Barcode scanner + receipt printer next to POS
    for (const m of [
      { url: 'barcode_scanner.glb', position: [0.85, COUNTER_H, COUNTER_Z - 0.15], rotY: -Math.PI / 5, size: 0.22 },
      { url: 'receipt_printer.glb', position: [1.0,  COUNTER_H, COUNTER_Z + 0.18], rotY:  Math.PI,     size: 0.24 }
    ]) {
      try {
        const gltf = await loadGLB(MODELS_BASE + m.url);
        const obj = gltf.scene;
        obj.rotation.y = m.rotY;
        autoScaleGLB(obj, m.size);
        obj.position.set(m.position[0], m.position[1] + obj.position.y, m.position[2]);
        scene.add(obj);
      } catch (e) { console.warn('Counter model load failed:', m.url, e); }
    }
    // Plants × 2 with sway animation — nhỏ + dịch ra xa tường để không z-fight.
    for (const p of [
      { x: -ROOM_W / 2 + 0.90, z: 3.60, phase: 0 },
      { x:  ROOM_W / 2 - 0.90, z: 3.60, phase: 1.2 }
    ]) {
      try {
        const gltf = await loadGLB(MODELS_BASE + 'plant.glb');
        const obj = gltf.scene;
        autoScaleGLB(obj, 0.85);
        const wrap = new THREE.Group();
        wrap.add(obj);
        wrap.position.set(p.x, 0, p.z);
        scene.add(wrap);
        plantGroups.push({ group: wrap, phase: p.phase });
      } catch (e) { console.warn('Plant load failed:', e); }
    }
    // Sofa: bỏ theo yêu cầu.
    // Pharmacist + Patient: bỏ theo yêu cầu — không phù hợp với view nhà thuốc.
  }
  loadAllModels();

  // ── Camera preset switching with 700ms lerp ───────────────────────────────
  let currentPreset = 'default';
  let presetStartedAt = null;
  function setCameraPreset(key) {
    if (!CAMERA_PRESETS[key]) return;
    currentPreset = key;
    presetStartedAt = performance.now();
    opts.onPresetChange?.(key);
  }

  // ── Render loop ──────────────────────────────────────────────────────────
  const clock = new THREE.Clock();
  function render() {
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    // Fan rotation
    fanBlades.rotation.y += dt * 4.5;
    // Plants sway
    plantGroups.forEach(({ group, phase }) => {
      group.rotation.z = Math.sin((t + phase) * 0.9) * 0.04;
      group.rotation.x = Math.cos((t + phase) * 0.7) * 0.025;
    });
    // Fridge doors lerp toward target
    [topDoor, botDoor].forEach(d => {
      const tgt = d.userData.isOpen ? Math.PI / 2.2 : 0;
      d.rotation.y += (tgt - d.rotation.y) * 0.18;
    });
    // Generic openable doors (counter bays + tủ kiểm soát đặc biệt) — mỗi
    // hinge có openAngle riêng (counter mở -70°, side cab mở +85°).
    openableDoors.forEach(d => {
      const tgt = d.userData.isOpen ? (d.userData.openAngle ?? -Math.PI / 2.6) : 0;
      d.rotation.y += (tgt - d.rotation.y) * 0.18;
    });
    // Fridge LED brightens when any door open
    const anyOpen = topDoor.userData.isOpen || botDoor.userData.isOpen;
    fridgeLED.material.emissiveIntensity = anyOpen ? 1.4 : 0.2;
    // Character animations
    charMixers.forEach(m => m.update(dt));

    // P2: Scanner LED pulse + beam tia laser
    const now = performance.now();
    const scanning = now < scanUntil;
    scLED.material.emissiveIntensity = scanning ? 1.6 + Math.sin(now * 0.05) * 0.4 : 0.5;
    scanBeam.material.opacity = scanning ? 0.55 : 0;

    // P2: Printer paper grow effect — kéo dài giấy ra slot trong 2.5s
    if (now < printUntil) {
      const remaining = (printUntil - now) / 2500;
      prPaper.scale.y = 0.05 + (1 - remaining) * 1.4; // 0.05 → 1.45
      prPaper.position.y = 0.155 - (1 - remaining) * 0.05;
    } else if (prPaper.visible && now > printUntil + 4000) {
      // Auto ẩn giấy sau 4s tiếp theo (giả như khách lấy hóa đơn)
      prPaper.visible = false;
    }

    // Drug pick lerp — hộp BAY VÒNG CUNG (peak Y +15cm) thay vì straight line
    // để vừa đẹp vừa không xuyên qua counter top.
    drugMeshes.forEach(m => {
      const target = m.userData.targetPosition;
      if (!target) return;
      const speed = 1 - Math.pow(0.001, dt);
      m.position.lerp(target, speed);
      // Arc lift: bow Y theo khoảng cách phẳng (xz) từ midpoint
      const startY = (m.userData.homePosition || target).y;
      const endY = target.y;
      const flatDistTotal = Math.hypot(
        (m.userData.homePosition?.x ?? target.x) - target.x,
        (m.userData.homePosition?.z ?? target.z) - target.z
      );
      const flatDistRemain = Math.hypot(m.position.x - target.x, m.position.z - target.z);
      const t = flatDistTotal > 0.01 ? 1 - flatDistRemain / flatDistTotal : 1;
      const arcLift = 0.18 * 4 * t * (1 - t); // parabola peak ~18cm at t=0.5
      m.position.y = (startY + (endY - startY) * t) + arcLift;
      if (m.position.distanceTo(target) < 0.003 && flatDistRemain < 0.01) {
        m.position.copy(target);
        m.userData.targetPosition = null;
      }
    });

    // Camera preset lerp (within 700ms after change) — disable damping during
    // transition to prevent OrbitControls from fighting the lerp.
    if (presetStartedAt != null) {
      const elapsed = performance.now() - presetStartedAt;
      const p = CAMERA_PRESETS[currentPreset];
      if (elapsed > 700) {
        // Snap to final target on last frame to avoid leftover error
        controls.target.copy(new THREE.Vector3(...p.target));
        camera.position.copy(new THREE.Vector3(...p.pos));
        controls.minDistance = p.minDist;
        controls.maxDistance = p.maxDist;
        controls.enableDamping = true;
        presetStartedAt = null;
      } else {
        controls.enableDamping = false;
        controls.target.lerp(new THREE.Vector3(...p.target), 0.12);
        camera.position.lerp(new THREE.Vector3(...p.pos), 0.12);
        controls.minDistance = p.minDist;
        controls.maxDistance = p.maxDist;
      }
    }

    controls.update();
    renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(render);

  // Resize
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  setTimeout(resize, 0);

  // ── Raycaster ────────────────────────────────────────────────────────────
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  // `picked` lưu THỨ TỰ các sub-mesh đã pick (mỗi hộp 1 entry), tối đa 8 hộp.
  // Cho phép 1 drug bị pick nhiều hộp (3) và unpick LIFO.
  const picked = [];
  const labelsByDrug = new Map();
  let pendingLabel = null;

  function findDrugAncestor(o) {
    let cur = o;
    while (cur) {
      if (cur.userData && cur.userData.drugId) return cur;
      cur = cur.parent;
    }
    return null;
  }
  function findFridgeDoor(o) {
    let cur = o;
    while (cur) {
      if (cur.userData && cur.userData.fridgeDoor) return cur.userData.fridgeDoor;
      cur = cur.parent;
    }
    return null;
  }
  function findBookAncestor(o) {
    let cur = o;
    while (cur) {
      if (cur.userData && cur.userData.bookId) return cur;
      cur = cur.parent;
    }
    return null;
  }
  function clickAt(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((clientY - r.top) / r.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const h of hits) {
      if (h.object.userData?.posClick) return { kind: 'pos' };
      if (h.object.userData?.labelClick) return { kind: 'label' };
      const book = findBookAncestor(h.object);
      if (book) return { kind: 'book', book };
      const door = findFridgeDoor(h.object);
      if (door) return { kind: 'door', door };
      const drugGroup = findDrugAncestor(h.object);
      if (drugGroup) return { kind: 'drug', group: drugGroup };
    }
    return null;
  }

  // Pick logic: click TRÊN KỆ → opts.onInspectDrug callback (P3 modal). Nếu
  // không có callback → direct pick (backward compat).
  // Click TRONG TRAY (sub đã `picked`) → unpick chính hộp đó.
  function pickDrug(drugIdOrSub) {
    if (typeof drugIdOrSub === 'string') {
      const drugId = drugIdOrSub;
      const boxes = drugMeshes.filter(g => g.userData.drugId === drugId);
      const remaining = boxes
        .filter(b => !b.userData.picked)
        .sort((a, b) => a.userData.boxIndex - b.userData.boxIndex);
      if (remaining.length === 0) return false;
      return pickSub(remaining[0]);
    }
    const sub = drugIdOrSub;
    if (sub.userData.picked) return unpickSub(sub);
    // Hộp ngoài cùng chưa picked
    const drugId = sub.userData.drugId;
    const boxes = drugMeshes.filter(g => g.userData.drugId === drugId);
    const remaining = boxes
      .filter(b => !b.userData.picked)
      .sort((a, b) => a.userData.boxIndex - b.userData.boxIndex);
    if (remaining.length === 0) return false;
    const candidate = remaining[0];
    // P3: nếu có onInspectDrug, mở modal trước thay vì pick trực tiếp
    if (typeof opts.onInspectDrug === 'function') {
      opts.onInspectDrug({
        drug: candidate.userData.drug,
        meta: getDrugMeta(candidate.userData.drug),
        confirmToTray: () => {
          // Sinh viên xác nhận đưa vào khay → quét barcode + lerp
          triggerBarcodeScan();
          setTimeout(() => pickSub(candidate), 700);
        },
        returnToShelf: () => {
          // Trả về kệ — chỉ đóng modal, không cần làm gì
        }
      });
      return true;
    }
    return pickSub(candidate);
  }
  function pickSub(sub) {
    if (picked.length >= 8) return false;
    sub.userData.picked = true;
    picked.push(sub);
    const slotIdx = picked.length - 1;
    sub.userData.targetPosition = pickSlotPos(slotIdx).clone();
    opts.onAction?.('pick_box', { drugId: sub.userData.drugId, boxIndex: sub.userData.boxIndex });
    return true;
  }
  function unpickSub(sub) {
    sub.userData.picked = false;
    const idx = picked.indexOf(sub);
    if (idx >= 0) picked.splice(idx, 1);
    sub.userData.targetPosition = sub.userData.homePosition.clone();
    // Reflow các hộp còn lại để bít chỗ trống
    picked.forEach((s, i) => { s.userData.targetPosition = pickSlotPos(i).clone(); });
    opts.onAction?.('unpick_box', { drugId: sub.userData.drugId, boxIndex: sub.userData.boxIndex });
    return true;
  }
  function attachLabelToPickedDrug(drugId, label) {
    labelsByDrug.set(drugId, label);
    opts.onAction?.('label_dose', { drugId, label });
  }

  canvas.addEventListener('pointerdown', (e) => {
    const hit = clickAt(e.clientX, e.clientY);
    if (!hit) return;
    if (hit.kind === 'pos') opts.onPosOpen?.();
    else if (hit.kind === 'label') opts.onLabelOpen?.();
    else if (hit.kind === 'book') opts.onBookOpen?.(hit.book.userData.bookId);
    else if (hit.kind === 'door') hit.door.userData.isOpen = !hit.door.userData.isOpen;
    else if (hit.kind === 'drug') {
      const sub = hit.group;
      if (pendingLabel) {
        attachLabelToPickedDrug(sub.userData.drugId, pendingLabel);
        pendingLabel = null;
        opts.onPendingLabelClear?.();
      } else {
        // Truyền sub mesh trực tiếp — pickDrug sẽ decide pick thêm vs unpick.
        pickDrug(sub);
      }
    }
  });

  // ── Hover detect cho tooltip + search focus ─────────────────────────────
  function getDrugAtPointer(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((clientY - r.top) / r.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const h of hits) {
      const sub = findDrugAncestor(h.object);
      if (sub && sub.userData.drug) {
        return {
          drug: sub.userData.drug,
          meta: getDrugMeta(sub.userData.drug),
          sub
        };
      }
    }
    return null;
  }
  function getCatalog() {
    // Trả về ALL_DRUGS + meta cho search/list. Dedupe theo drugId vì mỗi drug
    // có 3 box trong drugMeshes.
    const seen = new Set();
    const out = [];
    for (const m of drugMeshes) {
      const d = m.userData.drug;
      if (!d || seen.has(d.id)) continue;
      seen.add(d.id);
      out.push({ drug: d, meta: getDrugMeta(d) });
    }
    return out;
  }
  // ── P2/P4: Trigger scanner beam + printer paper (animation effect) ─────
  let scanUntil = 0, printUntil = 0;
  function triggerBarcodeScan() {
    scanUntil = performance.now() + 700;
    opts.onAction?.('barcode_scan', { ts: Date.now() });
  }
  function triggerPrintReceipt() {
    printUntil = performance.now() + 2500;
    prPaper.visible = true;
    prPaper.scale.y = 0.05;
    opts.onAction?.('print_receipt', { ts: Date.now() });
  }
  function getScannerWorldPos() {
    const v = new THREE.Vector3();
    scannerGroup.getWorldPosition(v);
    return v;
  }

  function focusDrug(drugId) {
    // Tìm box ngoài cùng (boxIndex=0) của drug, pan camera tới nó.
    const candidates = drugMeshes
      .filter(m => m.userData.drugId === drugId)
      .sort((a, b) => (a.userData.boxIndex || 0) - (b.userData.boxIndex || 0));
    if (candidates.length === 0) return false;
    const target = new THREE.Vector3();
    candidates[0].getWorldPosition(target);
    // Camera pos lùi ra 1.6m theo trục camera→target hiện tại, nâng nhẹ.
    const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
    const newPos = target.clone().add(dir.multiplyScalar(1.6));
    newPos.y = Math.max(newPos.y, target.y + 0.4);
    // Đăng ký preset tạm "_focused" + activate
    CAMERA_PRESETS._focused = {
      label: '🎯 ' + (candidates[0].userData.drug?.brand || drugId),
      pos: [newPos.x, newPos.y, newPos.z],
      target: [target.x, target.y, target.z],
      minDist: 0.4, maxDist: 4
    };
    setCameraPreset('_focused');
    // Highlight emissive pulse 2s
    candidates.forEach(m => {
      m.traverse(o => {
        if (o.material && o.material.emissive !== undefined) {
          o.material.emissive = new THREE.Color(0xfacc15);
          o.material.emissiveIntensity = 0.7;
          setTimeout(() => { if (o.material) { o.material.emissiveIntensity = 0; } }, 2200);
        }
      });
    });
    return true;
  }

  return {
    scene, camera, renderer, controls,
    cameraPresets: CAMERA_PRESETS,
    setCameraPreset,
    setExposure: (v) => applyBrightness(v, true),
    getExposure: () => currentBrightness,
    getCurrentPreset: () => currentPreset,
    getPickedIds: () => picked.map(s => s.userData.drugId),
    getLabels: () => Object.fromEntries(labelsByDrug.entries()),
    setPendingLabel: (l) => { pendingLabel = l; },
    pickDrug,
    attachLabelToPickedDrug,
    getDrugAtPointer,
    getCatalog,
    focusDrug,
    triggerBarcodeScan,
    triggerPrintReceipt,
    getScannerWorldPos,
    dispose: () => {
      renderer.setAnimationLoop(null);
      renderer.dispose();
      window.removeEventListener('resize', resize);
    }
  };
}
