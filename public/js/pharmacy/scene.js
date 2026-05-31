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
  const variants = ['banner','panel','stripe','twotone','classic','flag'];
  const variant = variants[h % variants.length];
  const copies = (h & 3) === 0 ? 3 : 2;
  return { ...dim, variant, copies };
}

function buildDrugBoxMesh(drug) {
  const colors = getDrugColors(drug);
  const style = getBoxStyle(drug);
  const group = new THREE.Group();
  group.userData = { drugId: drug.id, drug, style, colors };

  const accent = new THREE.Color(colors.accent);
  const accentLight = new THREE.Color(lightenHex(colors.accent, 0.35));
  const body = new THREE.Color(colors.body);

  for (let i = 0; i < style.copies; i++) {
    const sub = new THREE.Group();
    sub.position.x = (i - (style.copies - 1) / 2) * (style.w * 1.02);
    const mat = new THREE.MeshStandardMaterial({ color: body, roughness: 0.75, metalness: 0.05 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(style.w, style.h, style.d), mat);
    box.castShadow = true; box.receiveShadow = true;
    sub.add(box);
    // Variant stripes: thay vì SCALE box (gây Z-fight ở mặt sau/cạnh), em dùng decal MỎNG
    // (depth 0.002m) đặt sát mặt TRƯỚC body với khoảng cách physical 4mm — không bao
    // giờ Z-fight bất kể camera/depth-buffer precision.
    const stripeMat = new THREE.MeshStandardMaterial({
      color: accent, roughness: 0.6,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    });
    const FRONT = style.d / 2 + 0.002; // mặt trước body + 2mm
    const BACK  = -style.d / 2 - 0.002; // mặt sau body − 2mm
    if (style.variant === 'banner') {
      // Dải ngang phía trên — chỉ mặt trước
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.98, style.h * 0.22, 0.003), stripeMat);
      s.position.set(0, style.h * 0.28, FRONT); sub.add(s);
    } else if (style.variant === 'panel') {
      // Panel kín mặt trước
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.98, style.h * 0.98, 0.003), stripeMat);
      s.position.set(0, 0, FRONT); sub.add(s);
    } else if (style.variant === 'stripe') {
      // 2 sọc ngang
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.98, style.h * 0.10, 0.003), stripeMat);
      s.position.set(0, -style.h * 0.15, FRONT); sub.add(s);
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.98, style.h * 0.10, 0.003), stripeMat);
      s2.position.set(0, style.h * 0.15, FRONT); sub.add(s2);
    } else if (style.variant === 'twotone') {
      // Nửa trên = accent
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.98, style.h * 0.5, 0.003), stripeMat);
      s.position.set(0, style.h * 0.25, FRONT); sub.add(s);
    } else if (style.variant === 'classic') {
      const lightMat = new THREE.MeshStandardMaterial({
        color: accentLight, roughness: 0.7,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
      });
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.7, style.h * 0.4, 0.003), lightMat);
      s.position.set(0, 0, FRONT); sub.add(s);
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.7, style.h * 0.05, 0.004), stripeMat);
      s2.position.set(0, style.h * 0.22, FRONT); sub.add(s2);
    } else { // flag — dải dọc bên trái mặt trước
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.4, style.h * 0.98, 0.003), stripeMat);
      s.position.set(-style.w * 0.28, 0, FRONT); sub.add(s);
    }
    group.add(sub);
  }
  return group;
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
  cab_rx_1:       { label: 'Kháng sinh',               pos: [-2.82, 1.7, -0.20], target: [-2.82, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_rx_2:       { label: 'Tim mạch–Tiểu đường',      pos: [-0.94, 1.7, -0.20], target: [-0.94, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_otc_1:      { label: 'Giảm đau–Ho cảm',          pos: [ 0.94, 1.7, -0.20], target: [ 0.94, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_otc_2:      { label: 'Hô hấp–Tiêu hoá',          pos: [ 2.82, 1.7, -0.20], target: [ 2.82, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_special:    { label: 'Dược liệu',                pos: [ 2.45, 1.6, -1.18], target: [ 4.225, 1.30, -1.18],  minDist: 0.8, maxDist: 4 },
  cab_supp_1:     { label: 'TPCN–Vitamin',             pos: [ 2.45, 1.6,  0.60], target: [ 4.225, 1.30,  0.60],  minDist: 0.8, maxDist: 4 },
  cab_supp_2:     { label: 'Mỹ phẩm',                  pos: [ 2.45, 1.6,  2.38], target: [ 4.225, 1.30,  2.38],  minDist: 0.8, maxDist: 4 },
  front_drawers:  { label: 'Tủ quầy trước',            pos: [ 0.0, 1.5,  4.3],   target: [ 0.0, 0.5,  2.0],      minDist: 1.0, maxDist: 6  }
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
  renderer.toneMappingExposure = 1.05;

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

  // Lighting — port nguyên recipe từ compounding-lab.html (phòng bào chế).
  // PBR environment + ambient nhẹ + sun directional có soft shadow + fill xanh + 3 đèn trần ấm vàng.
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  pmrem.dispose();

  scene.add(new THREE.AmbientLight(0xffffff, 0.35));

  const sun = new THREE.DirectionalLight(0xffffff, 0.85);
  sun.position.set(2.2, 4.2, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -3.5; sun.shadow.camera.right = 3.5;
  sun.shadow.camera.top = 3.5;  sun.shadow.camera.bottom = -2;
  sun.shadow.camera.near = 0.1; sun.shadow.camera.far = 12;
  sun.shadow.bias = -0.0005;
  scene.add(sun);

  // Fill ánh sáng xanh nhạt từ phía sau
  const fill = new THREE.DirectionalLight(0xc8e1ff, 0.28);
  fill.position.set(-2, 3, -1);
  scene.add(fill);

  // 6 đèn trần spotlight ấm vàng (0xfff5e0) phủ khu vực quầy + tủ
  const ROOM_H_SPOT = 2.85; // độ cao mép đèn trần (= ROOM_H - 0.75)
  function ceilingSpot(x, z) {
    const sp = new THREE.SpotLight(0xfff5e0, 0.7, 8, Math.PI / 5.5, 0.4, 1.3);
    sp.position.set(x, ROOM_H_SPOT, z);
    sp.target.position.set(x, 0.95, z);
    sp.castShadow = false;
    scene.add(sp); scene.add(sp.target);
    const housing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.09, 0.08, 0.05, 24),
      new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.55, roughness: 0.35 })
    );
    housing.position.set(x, ROOM_H_SPOT + 0.12, z);
    scene.add(housing);
    const bulb = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.01, 24),
      new THREE.MeshBasicMaterial({ color: 0xfff8e0 })
    );
    bulb.position.set(x, ROOM_H_SPOT + 0.09, z);
    scene.add(bulb);
  }
  // 3 đèn trên quầy + 3 đèn trên dãy tủ sau lưng (đối xứng x = -1.5, 0, 1.5)
  ceilingSpot(-1.5, 1.3);  ceilingSpot(0, 1.3);  ceilingSpot(1.5, 1.3);
  ceilingSpot(-1.5, -1.5); ceilingSpot(0, -1.5); ceilingSpot(1.5, -1.5);

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
      polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3
    });
    const banner = new THREE.Mesh(new THREE.BoxGeometry(bannerW, bannerH, 0.04), bannerMat);
    banner.position.set(0, H + bannerH / 2 - 0.02, D / 2 - 0.1);
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

    // Cửa kính (cho tủ kiểm soát đặc biệt)
    if (opts.glassDoor) {
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xbfdbfe, transparent: true, opacity: 0.22, roughness: 0.05,
        metalness: 0, transmission: 0.6, ior: 1.5
      });
      const glass = new THREE.Mesh(new THREE.BoxGeometry(W - 0.08, H - 0.3, 0.025), glassMat);
      glass.position.set(0, H / 2, D / 2 + 0.02);
      cabGroup.add(glass);
    }

    // Distribute drugs onto shelves
    const drugs = ALL_DRUGS.filter(d => d.cabinetId === cab.id);
    drugs.forEach((drug, idx) => {
      const mesh = buildDrugBoxMesh(drug);
      const style = mesh.userData.style;
      const shelfIdx = idx % shelfCount;
      const perShelf = Math.ceil(drugs.length / shelfCount);
      const slotIdx = Math.floor(idx / shelfCount);
      const usableW = W - 0.20;
      const slotW = usableW / Math.max(perShelf, 1);
      const x = -usableW / 2 + slotW / 2 + slotIdx * slotW;
      const y = shelfYs[shelfIdx] + 0.015 + style.h / 2 + 0.04; // above shelf top + label space
      mesh.position.set(x, y, 0);
      mesh.userData.homePosition = mesh.position.clone();
      mesh.userData.cabinet = cab;
      cabGroup.add(mesh);
      drugMeshes.push(mesh);
    });
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

  // Front counter — mặt bàn kem, body TEAL giống screenshot upstream
  const counter = new THREE.Group();
  const counterTop = new THREE.Mesh(
    new THREE.BoxGeometry(COUNTER_W + 0.1, 0.08, COUNTER_D + 0.1),
    new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.45, metalness: 0.05 })
  );
  counterTop.position.set(0, COUNTER_H, COUNTER_Z);
  counterTop.castShadow = counterTop.receiveShadow = true;
  counter.add(counterTop);
  const counterBody = new THREE.Mesh(
    new THREE.BoxGeometry(COUNTER_W, COUNTER_H - 0.08, COUNTER_D),
    new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.5, metalness: 0.1 })
  );
  counterBody.position.set(0, (COUNTER_H - 0.08) / 2, COUNTER_Z);
  counterBody.castShadow = counterBody.receiveShadow = true;
  counter.add(counterBody);
  scene.add(counter);

  // Front display cabinets on counter (3 ngăn nhỏ mắt/mũi/ngoài)
  const frontCabs = CABINETS.filter(c => c.zone === 'front');
  frontCabs.forEach((cab, i) => {
    const g = buildCabinet(cab, 1.35, 1.0, 0.55, 1);
    g.position.set((i - 1) * 1.45, COUNTER_H + 0.04, COUNTER_Z - 0.25);
    g.scale.setScalar(0.65);
    scene.add(g);
  });

  // ── Tủ quầy ngang phía trước (theo docx chỉnh sửa 1): 4 ngăn × 2 tầng ───
  // 2 ngăn tủ kính (Thuốc dùng ngoài Rx / OTC) + 2 ngăn tránh sáng (Thuốc chờ xử lý / Hồ sơ tài liệu)
  // Đặt phía TRƯỚC dược sĩ, dưới mép counter — sinh viên cúi xuống lấy.
  const FRONT_DRAWER_LABELS = [
    { id: 'drawer_rx',    label: 'Thuốc dùng ngoài Rx',   accent: '#0d9488', glass: true },
    { id: 'drawer_otc',   label: 'Thuốc dùng ngoài OTC',  accent: '#0d9488', glass: true },
    { id: 'drawer_wait',  label: 'Thuốc chờ xử lý',       accent: '#0d9488', glass: false },
    { id: 'drawer_files', label: 'Hồ sơ tài liệu',         accent: '#0d9488', glass: false }
  ];
  const drawerGroup = new THREE.Group();
  drawerGroup.position.set(0, 0, COUNTER_Z + COUNTER_D / 2 + 0.04);
  const drawerW = COUNTER_W / 4;
  FRONT_DRAWER_LABELS.forEach((dr, i) => {
    const dx = -COUNTER_W / 2 + drawerW / 2 + i * drawerW;
    const wrap = new THREE.Group();
    wrap.position.set(dx, 0, 0);
    // Body — teal giống counter
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(drawerW - 0.04, COUNTER_H - 0.04, 0.36),
      new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.55, metalness: 0.1 })
    );
    body.position.set(0, COUNTER_H / 2, 0);
    body.castShadow = body.receiveShadow = true;
    wrap.add(body);
    // 2 tầng (front face has 2 horizontal dividers).
    // Body BoxGeometry depth 0.36 → front face nằm ở z = +0.18.
    // Đẩy face/handle/label ra ngoài để KHÔNG Z-fight với body và lẫn nhau.
    for (let t = 0; t < 2; t++) {
      const y = 0.18 + t * 0.42;
      const faceMat = dr.glass
        ? new THREE.MeshPhysicalMaterial({ color: 0xbfdbfe, transparent: true, opacity: 0.28, roughness: 0.05, transmission: 0.65, ior: 1.5 })
        : new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 });
      const face = new THREE.Mesh(new THREE.BoxGeometry(drawerW - 0.08, 0.36, 0.022), faceMat);
      face.position.set(0, y + 0.18, 0.205); // 0.18 (body front) + 0.025 ngoài
      wrap.add(face);
      // Handle — đẩy ra trước face thêm 0.02
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(drawerW * 0.4, 0.02, 0.018),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6, roughness: 0.3 })
      );
      handle.position.set(0, y + 0.06, 0.225);
      wrap.add(handle);
    }
    // Label — đặt ở dưới drawer, đẩy ra ngoài hẳn 0.025
    const labelTex = makeTextTexture(dr.label, {
      w: 512, h: 96, bg: '#ffffff', border: dr.accent, color: dr.accent, fontSize: 36
    });
    const labelMat = new THREE.MeshStandardMaterial({
      map: labelTex, roughness: 0.7,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2
    });
    const label = new THREE.Mesh(new THREE.BoxGeometry(drawerW - 0.08, 0.08, 0.018), labelMat);
    label.position.set(0, 0.07, 0.21);
    wrap.add(label);
    drawerGroup.add(wrap);
  });
  scene.add(drawerGroup);

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

  // ── Khay BÁN HÀNG (pick tray) — port 1-1 từ upstream: mặt khay + 4 viền gờ + nhãn ──
  const PICK_TRAY_W = 0.62, PICK_TRAY_D = 0.34, PICK_TRAY_T = 0.022, PICK_TRAY_RIM = 0.01;
  const PICK_TRAY_CX = -0.30;
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
  // 4 viền gờ
  const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.5 });
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
  // Group co lại 0.75× để vừa quầy, mặt khay 0.95×0.42m thật, nằm bên phải pick tray.
  const TOOLTRAY_X = 0.55;
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
  fridgeGroup.position.set(-ROOM_W / 2 + 0.36, 0, COUNTER_Z + 0.1);
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
    hinge.position.set(width / 2, centerY, 0.36);
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
  // Fridge stock items
  const fridgeItems = [];
  FRIDGE_STOCKS.forEach((stock) => {
    const item = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.11, 0.08),
      new THREE.MeshStandardMaterial({ color: stock.color, roughness: 0.5 })
    );
    const y = FRIDGE_SHELF_Y[stock.shelf] + 0.055;
    item.position.set(stock.x, y, 0.05);
    item.userData = {
      drugId: stock.id, isFridgeStock: true,
      drug: { id: stock.id, brand: stock.label, generic: stock.label, strength: '', isRx: true, isAntibiotic: false, unitPrice: 50000 },
      homePosition: item.position.clone()
    };
    item.castShadow = true;
    fridgeGroup.add(item);
    fridgeItems.push(item);
    drugMeshes.push(item);
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
    // Plants × 2 with sway animation
    for (const p of [
      { x: -ROOM_W / 2 + 0.4, z: 4.20, phase: 0 },
      { x:  ROOM_W / 2 - 0.4, z: 4.20, phase: 1.2 }
    ]) {
      try {
        const gltf = await loadGLB(MODELS_BASE + 'plant.glb');
        const obj = gltf.scene;
        autoScaleGLB(obj, 1.26);
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
    // Fridge LED brightens when any door open
    const anyOpen = topDoor.userData.isOpen || botDoor.userData.isOpen;
    fridgeLED.material.emissiveIntensity = anyOpen ? 1.4 : 0.2;
    // Character animations
    charMixers.forEach(m => m.update(dt));

    // Drug pick lerp
    drugMeshes.forEach(m => {
      const target = m.userData.targetPosition;
      if (target) {
        m.position.lerp(target, 1 - Math.pow(0.001, dt));
        if (m.position.distanceTo(target) < 0.002) m.userData.targetPosition = null;
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
  const picked = new Set();
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
  function clickAt(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    pointer.x = ((clientX - r.left) / r.width) * 2 - 1;
    pointer.y = -((clientY - r.top) / r.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(scene.children, true);
    for (const h of hits) {
      if (h.object.userData?.posClick) return { kind: 'pos' };
      if (h.object.userData?.labelClick) return { kind: 'label' };
      const door = findFridgeDoor(h.object);
      if (door) return { kind: 'door', door };
      const drugGroup = findDrugAncestor(h.object);
      if (drugGroup) return { kind: 'drug', group: drugGroup };
    }
    return null;
  }

  function pickDrug(drugId) {
    const m = drugMeshes.find(g => g.userData.drugId === drugId);
    if (!m) return false;
    if (picked.has(drugId)) {
      picked.delete(drugId);
      m.userData.targetPosition = m.userData.homePosition.clone();
      opts.onAction?.('unpick_box', { drugId });
      return true;
    }
    if (picked.size >= 8) return false;
    picked.add(drugId);
    const slotIdx = picked.size - 1;
    m.userData.targetPosition = pickSlotPos(slotIdx).clone();
    opts.onAction?.('pick_box', { drugId });
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
    else if (hit.kind === 'door') hit.door.userData.isOpen = !hit.door.userData.isOpen;
    else if (hit.kind === 'drug') {
      const drugId = hit.group.userData.drugId;
      if (pendingLabel) {
        attachLabelToPickedDrug(drugId, pendingLabel);
        pendingLabel = null;
        opts.onPendingLabelClear?.();
      } else {
        pickDrug(drugId);
      }
    }
  });

  return {
    scene, camera, renderer, controls,
    cameraPresets: CAMERA_PRESETS,
    setCameraPreset,
    getCurrentPreset: () => currentPreset,
    getPickedIds: () => Array.from(picked),
    getLabels: () => Object.fromEntries(labelsByDrug.entries()),
    setPendingLabel: (l) => { pendingLabel = l; },
    pickDrug,
    attachLabelToPickedDrug,
    dispose: () => {
      renderer.setAnimationLoop(null);
      renderer.dispose();
      window.removeEventListener('resize', resize);
    }
  };
}
