// GPP 3D Pharmacy scene — full port từ Pharmacy-AI/src/components/scenes/GppScene.tsx.
// Bao gồm: 4 tủ sau + 3 tủ bên + quầy + POS + label tray + pick tray (Phase 1-3) ·
// Fridge 5-ngăn + 13 stocks + door hinge animation · Consult desk · Pharmacist/Patient GLB
// với idle animation · Ceiling fan + AC + 2 plants sway · Tool tray (scissors/tape/pen/notepad)
// · barcode_scanner + receipt_printer · WaitingChair · 11 camera presets với 700ms lerp.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
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
    const stripeMat = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.6 });
    if (style.variant === 'banner') {
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 1.01, style.h * 0.22, style.d * 1.01), stripeMat);
      s.position.y = style.h * 0.28; sub.add(s);
    } else if (style.variant === 'panel') {
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 1.01, style.h * 1.01, style.d * 0.18), stripeMat);
      s.position.z = style.d * 0.42; sub.add(s);
    } else if (style.variant === 'stripe') {
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 1.01, style.h * 0.10, style.d * 1.01), stripeMat);
      s.position.y = -style.h * 0.15; sub.add(s);
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(style.w * 1.01, style.h * 0.10, style.d * 1.01), stripeMat);
      s2.position.y = style.h * 0.15; sub.add(s2);
    } else if (style.variant === 'twotone') {
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 1.01, style.h * 0.5, style.d * 1.01), stripeMat);
      s.position.y = style.h * 0.25; sub.add(s);
    } else if (style.variant === 'classic') {
      const lightMat = new THREE.MeshStandardMaterial({ color: accentLight, roughness: 0.7 });
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.7, style.h * 0.4, style.d * 1.01), lightMat);
      sub.add(s);
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.7, style.h * 0.05, style.d * 1.01), stripeMat);
      s2.position.y = style.h * 0.22; sub.add(s2);
    } else { // flag
      const s = new THREE.Mesh(new THREE.BoxGeometry(style.w * 0.4, style.h * 1.01, style.d * 1.01), stripeMat);
      s.position.x = -style.w * 0.28; sub.add(s);
    }
    group.add(sub);
  }
  return group;
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

// ── Camera presets — match cấu trúc tủ mới theo docx chỉnh sửa 1 ────────────
const CAMERA_PRESETS = {
  default:        { label: 'Toàn cảnh',                  pos: [3.4, 4.0, 5.5],     target: [0, 0.9, -0.4],         minDist: 2.5, maxDist: 14 },
  fridge:         { label: 'Tủ lạnh 2-8°C',              pos: [-1.6, 1.6, 1.5],    target: [-3.6, 1.0, 1.45],      minDist: 0.8, maxDist: 5  },
  counter:        { label: 'Quầy giao dịch',             pos: [0.0, 1.9, 3.4],     target: [0.0, 1.05, 1.0],       minDist: 1.5, maxDist: 8  },
  consult:        { label: 'Khu tư vấn',                 pos: [-1.6, 2.0, 1.2],    target: [-3.4, 0.8, -0.4],      minDist: 1.0, maxDist: 7  },
  cab_rx_1:       { label: 'Tủ kê đơn 1 (Rx)',           pos: [-2.82, 1.7, -0.20], target: [-2.82, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_rx_2:       { label: 'Tủ kê đơn 2 (Rx)',           pos: [-0.94, 1.7, -0.20], target: [-0.94, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_otc_1:      { label: 'Tủ không kê đơn 1 (OTC)',    pos: [ 0.94, 1.7, -0.20], target: [ 0.94, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_otc_2:      { label: 'Tủ không kê đơn 2 (OTC)',    pos: [ 2.82, 1.7, -0.20], target: [ 2.82, 1.40, -2.125],  minDist: 0.8, maxDist: 4 },
  cab_special:    { label: 'Kiểm soát đặc biệt',         pos: [ 2.45, 1.0, -1.18], target: [ 4.225, 0.80, -1.18],  minDist: 0.8, maxDist: 4 },
  cab_supp_1:     { label: 'Sản phẩm KP thuốc 1 (TPCN)', pos: [ 2.45, 1.6,  0.60], target: [ 4.225, 1.30,  0.60],  minDist: 0.8, maxDist: 4 },
  cab_supp_2:     { label: 'Sản phẩm KP thuốc 2 (MP)',   pos: [ 2.45, 1.6,  2.38], target: [ 4.225, 1.30,  2.38],  minDist: 0.8, maxDist: 4 },
  front_drawers:  { label: 'Tủ quầy trước (4 ngăn)',     pos: [ 0.0, 1.5,  4.3],   target: [ 0.0, 0.5,  2.0],      minDist: 1.0, maxDist: 6  }
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
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe6efe9);
  scene.fog = new THREE.Fog(0xe6efe9, 14, 26);

  const camera = new THREE.PerspectiveCamera(48, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(...CAMERA_PRESETS.default.pos);

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(...CAMERA_PRESETS.default.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = CAMERA_PRESETS.default.minDist;
  controls.maxDistance = CAMERA_PRESETS.default.maxDist;
  controls.maxPolarAngle = Math.PI / 2.1;

  // Lighting (port 1-1)
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcbd5e1, 0.4));
  const sun = new THREE.DirectionalLight(0xffffff, 1.0);
  sun.position.set(4, 6, 5);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -8; sun.shadow.camera.right = 8;
  sun.shadow.camera.top = 8; sun.shadow.camera.bottom = -8;
  scene.add(sun);
  const spot = new THREE.SpotLight(0xfef9c3, 0.9, 8, 0.55, 0.7);
  spot.position.set(0, 3.4, 1.9);
  spot.castShadow = true;
  scene.add(spot);
  scene.add(spot.target);

  // Room dims (port 1-1)
  const ROOM_W = 9, ROOM_D = 9, ROOM_H = 3.6;
  const BACK_Z = -ROOM_D / 2;
  const RIGHT_X = ROOM_W / 2;

  // Floor
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(ROOM_W, ROOM_D),
    new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.85 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  // Walls
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xecfeff, roughness: 0.85 });
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
  // Ceiling
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(ROOM_W, ROOM_D), new THREE.MeshStandardMaterial({ color: 0xfafbfd, roughness: 0.9 }));
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

  // ── Per-shelf labels per docx requirement ───────────────────────────────
  // 2 tủ Rx × 7 ngăn + 2 tủ OTC × 7 ngăn + tủ kiểm soát đặc biệt 4 ngăn
  const SHELF_LABELS = {
    rx_1: [
      'Kháng sinh Rx',
      'Thuốc tim mạch Rx',
      'Thuốc hô hấp Rx',
      'Thuốc giảm đau chống viêm Rx',
      'Thuốc điều trị loét dạ dày Rx',
      'Thuốc tiêu hóa Rx',
      'Thuốc giãn cơ Rx'
    ],
    rx_2: [
      'Thuốc điều trị tiểu đường Rx',
      'Hormon và nội tiết Rx',
      'Thuốc phụ khoa Rx',
      'Thuốc điều trị đau nửa đầu Rx',
      'Thuốc kháng virus Rx',
      'Thuốc nhỏ mắt, mũi, tai Rx',
      'Thuốc tiêm, dịch truyền Rx'
    ],
    otc_1: [
      'Thuốc hạ sốt giảm đau OTC',
      'Thuốc kháng histamin OTC',
      'Thuốc hô hấp OTC',
      'Thuốc nhỏ mắt, mũi, tai OTC',
      'Thuốc tiêu hóa OTC',
      'Vitamin và khoáng chất OTC',
      'Thuốc có nguồn gốc dược liệu OTC'
    ],
    otc_2: [
      'Thuốc điều trị loét dạ dày OTC',
      'Thuốc tiêu hóa OTC',
      'Thuốc phụ khoa OTC',
      'Tránh thai OTC',
      'Thuốc dùng ngoài OTC',
      'Thuốc nhỏ giọt OTC',
      'Sirô OTC'
    ],
    special_control: [
      'Thuốc gây nghiện, hướng thần, tiền chất',
      'Thuốc danh mục cấm/hạn chế',
      'Thuốc kiểm soát đặc biệt khác',
      'Thuốc lưu trữ an toàn'
    ],
    supp_1: ['Thực phẩm chức năng', 'Vitamin TPCN', 'Khoáng chất TPCN', 'Bổ sung dinh dưỡng', 'Hỗ trợ tiêu hóa'],
    supp_2: ['Mỹ phẩm', 'Dụng cụ y tế', 'Băng – gạc – sát khuẩn', 'Khẩu trang – găng tay', 'Vật tư khác']
  };

  function buildCabinet(cab, W, H, D, shelfCount, opts = {}) {
    const cabGroup = new THREE.Group();
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.6 });
    const accentMat = new THREE.MeshStandardMaterial({ color: cab.accent, roughness: 0.55 });
    const back = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.05), frameMat);
    back.position.set(0, H / 2, -D / 2 + 0.025);
    cabGroup.add(back);

    // Banner header (textured) — "THUỐC KÊ ĐƠN Rx" v.v.
    const bannerH = 0.18;
    const bannerTex = makeTextTexture(cab.label, {
      w: 1024, h: 128,
      bg: cab.accent,
      color: '#ffffff',
      fontSize: 56
    });
    const bannerMat = new THREE.MeshStandardMaterial({ map: bannerTex, roughness: 0.6 });
    const banner = new THREE.Mesh(new THREE.BoxGeometry(W, bannerH, 0.02), bannerMat);
    banner.position.set(0, H - bannerH / 2 - 0.02, D / 2 - 0.005);
    cabGroup.add(banner);
    // Vẫn giữ top accent strip cho khối kệ phía sau banner
    const header = new THREE.Mesh(new THREE.BoxGeometry(W, 0.12, D), accentMat);
    header.position.set(0, H - 0.06, 0);
    cabGroup.add(header);

    // Side rails
    const railL = new THREE.Mesh(new THREE.BoxGeometry(0.03, H, D), frameMat);
    railL.position.set(-W / 2 + 0.015, H / 2, 0); cabGroup.add(railL);
    const railR = new THREE.Mesh(new THREE.BoxGeometry(0.03, H, D), frameMat);
    railR.position.set(W / 2 - 0.015, H / 2, 0); cabGroup.add(railR);

    // Shelves
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0xeceff3, roughness: 0.7 });
    const shelfYs = [];
    const usableH = H - 0.35;
    for (let s = 0; s < shelfCount; s++) {
      const y = 0.20 + s * usableH / shelfCount;
      shelfYs.push(y);
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(W - 0.04, 0.03, D - 0.03), shelfMat);
      shelf.position.set(0, y, 0); shelf.receiveShadow = true;
      cabGroup.add(shelf);
    }

    // Shelf labels (per docx) — gắn ở mép trước của mỗi ngăn
    const labels = SHELF_LABELS[cab.id] || [];
    for (let s = 0; s < shelfCount; s++) {
      const label = labels[s] || '';
      if (!label) continue;
      const tex = makeTextTexture(label, {
        w: 512, h: 64,
        bg: '#ffffff',
        border: cab.accent,
        color: cab.accent,
        fontSize: 26
      });
      const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7 });
      const labelMesh = new THREE.Mesh(new THREE.BoxGeometry(W * 0.7, 0.06, 0.012), mat);
      labelMesh.position.set(0, shelfYs[s] + 0.04, D / 2 - 0.012);
      cabGroup.add(labelMesh);
    }

    // Cửa kính (cho tủ kiểm soát đặc biệt)
    if (opts.glassDoor) {
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xbfdbfe, transparent: true, opacity: 0.22, roughness: 0.05,
        metalness: 0, transmission: 0.6, ior: 1.5
      });
      const glass = new THREE.Mesh(new THREE.BoxGeometry(W - 0.08, H - 0.3, 0.02), glassMat);
      glass.position.set(0, H / 2, D / 2 - 0.01);
      cabGroup.add(glass);
      const lockTag = new THREE.Mesh(new THREE.CircleGeometry(0.02, 16), new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.5 }));
      lockTag.position.set(0, H * 0.35, D / 2 - 0.005);
      cabGroup.add(lockTag);
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

  // Front counter
  const counter = new THREE.Group();
  const counterTop = new THREE.Mesh(
    new THREE.BoxGeometry(COUNTER_W, 0.08, COUNTER_D),
    new THREE.MeshStandardMaterial({ color: 0xe9d5b0, roughness: 0.6 })
  );
  counterTop.position.set(0, COUNTER_H, COUNTER_Z);
  counterTop.castShadow = counterTop.receiveShadow = true;
  counter.add(counterTop);
  const counterBody = new THREE.Mesh(
    new THREE.BoxGeometry(COUNTER_W, COUNTER_H, COUNTER_D),
    new THREE.MeshStandardMaterial({ color: 0xd1b990, roughness: 0.75 })
  );
  counterBody.position.set(0, 0.5, COUNTER_Z);
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
    { id: 'drawer_rx',    label: 'Thuốc dùng ngoài Rx',   accent: '#dc2626', glass: true },
    { id: 'drawer_otc',   label: 'Thuốc dùng ngoài OTC',  accent: '#2563eb', glass: true },
    { id: 'drawer_wait',  label: 'Thuốc chờ xử lý',       accent: '#94a3b8', glass: false },
    { id: 'drawer_files', label: 'Hồ sơ tài liệu',         accent: '#64748b', glass: false }
  ];
  const drawerGroup = new THREE.Group();
  drawerGroup.position.set(0, 0, COUNTER_Z + COUNTER_D / 2 + 0.04);
  const drawerW = COUNTER_W / 4;
  FRONT_DRAWER_LABELS.forEach((dr, i) => {
    const dx = -COUNTER_W / 2 + drawerW / 2 + i * drawerW;
    const wrap = new THREE.Group();
    wrap.position.set(dx, 0, 0);
    // Body
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(drawerW - 0.04, COUNTER_H - 0.04, 0.36),
      new THREE.MeshStandardMaterial({ color: 0xd6b88a, roughness: 0.7 })
    );
    body.position.set(0, COUNTER_H / 2, 0);
    body.castShadow = body.receiveShadow = true;
    wrap.add(body);
    // 2 tầng (front face has 2 horizontal dividers)
    for (let t = 0; t < 2; t++) {
      const y = 0.18 + t * 0.42;
      const faceMat = dr.glass
        ? new THREE.MeshPhysicalMaterial({ color: 0xbfdbfe, transparent: true, opacity: 0.28, roughness: 0.05, transmission: 0.65, ior: 1.5 })
        : new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 });
      const face = new THREE.Mesh(new THREE.BoxGeometry(drawerW - 0.08, 0.36, 0.02), faceMat);
      face.position.set(0, y + 0.18, 0.18);
      wrap.add(face);
      // Handle
      const handle = new THREE.Mesh(
        new THREE.BoxGeometry(drawerW * 0.4, 0.02, 0.018),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.6, roughness: 0.3 })
      );
      handle.position.set(0, y + 0.06, 0.19);
      wrap.add(handle);
    }
    // Label
    const labelTex = makeTextTexture(dr.label, {
      w: 512, h: 96, bg: '#ffffff', border: dr.accent, color: dr.accent, fontSize: 36
    });
    const labelMat = new THREE.MeshStandardMaterial({ map: labelTex, roughness: 0.7 });
    const label = new THREE.Mesh(new THREE.BoxGeometry(drawerW - 0.08, 0.08, 0.012), labelMat);
    label.position.set(0, 0.07, 0.19);
    wrap.add(label);
    drawerGroup.add(wrap);
  });
  scene.add(drawerGroup);

  // POS computer (dual-screen feel: pharmacist side + CFD facing customer)
  const POS_X = 1.45;
  const pos = new THREE.Group();
  const posBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.04, 0.34),
    new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4 })
  );
  posBase.position.set(0, 0.02, 0); pos.add(posBase);
  const posScreenA = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.32, 0.03),
    new THREE.MeshStandardMaterial({ color: 0x0a3070, emissive: 0x0a3070, emissiveIntensity: 0.6 })
  );
  posScreenA.position.set(0, 0.22, -0.06);
  posScreenA.rotation.x = 0.18;
  posScreenA.userData = { posClick: true };
  pos.add(posScreenA);
  // Customer-facing display (mini, smaller, facing the other way)
  const posCFD = new THREE.Mesh(
    new THREE.BoxGeometry(0.32, 0.18, 0.025),
    new THREE.MeshStandardMaterial({ color: 0x064e3b, emissive: 0x065f46, emissiveIntensity: 0.5 })
  );
  posCFD.position.set(0, 0.16, 0.16);
  posCFD.rotation.x = -0.18;
  pos.add(posCFD);
  pos.position.set(POS_X, COUNTER_H, COUNTER_Z);
  scene.add(pos);

  // Label-editor trigger ("RA LẺ" yellow tray on counter)
  const TOOLTRAY_X = 0.55;
  const labelTrigger = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.04, 0.25),
    new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xfbbf24, emissiveIntensity: 0.25 })
  );
  labelTrigger.position.set(TOOLTRAY_X, COUNTER_H + 0.025, COUNTER_Z + 0.18);
  labelTrigger.userData = { labelClick: true };
  scene.add(labelTrigger);

  // Tool tray (scissors/tape/pen/notepad GLB)
  const toolTrayGroup = new THREE.Group();
  toolTrayGroup.position.set(TOOLTRAY_X, COUNTER_H + 0.005, COUNTER_Z - 0.05);
  scene.add(toolTrayGroup);
  const TOOL_TARGETS = [
    { url: 'scissors.glb', position: [0.05, 0, 0.12],  rotY:  Math.PI / 4,  size: 0.16 },
    { url: 'tape.glb',     position: [0.22, 0, 0.12],  rotY: -Math.PI / 6,  size: 0.11 },
    { url: 'pen.glb',      position: [-0.1, 0, 0.13],  rotY:  Math.PI / 2.5,size: 0.14 },
    { url: 'notepad.glb',  position: [0.38, 0, 0.05],  rotY:  Math.PI / 12, size: 0.16 }
  ];

  // Pick tray (port 1-1: 4×2 slots)
  const PICK_TRAY_CX = -0.55;
  const tray = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 0.02, 0.34),
    new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 })
  );
  tray.position.set(PICK_TRAY_CX, COUNTER_H + 0.045, COUNTER_Z);
  scene.add(tray);
  const TRAY_SLOTS = [];
  for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) {
    TRAY_SLOTS.push(new THREE.Vector3(
      PICK_TRAY_CX + (c - 1.5) * 0.135,
      COUNTER_H + 0.06,
      COUNTER_Z + (r - 0.5) * 0.14
    ));
  }
  function pickSlotPos(idx) { return TRAY_SLOTS[Math.min(idx, TRAY_SLOTS.length - 1)]; }

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
    // Sofa (consult area)
    try {
      const gltf = await loadGLB(MODELS_BASE + 'sofa.glb');
      autoScaleGLB(gltf.scene, 1.4);
      gltf.scene.position.set(-3.4, 0, 0.9);
      gltf.scene.rotation.y = Math.PI;
      scene.add(gltf.scene);
    } catch (e) { console.warn('Sofa load failed:', e); }
    // Pharmacist (behind counter)
    try {
      const gltf = await loadGLB(MODELS_BASE + 'pharmacist.glb');
      const obj = gltf.scene;
      autoScaleGLB(obj, 1.7);
      const wrap = new THREE.Group();
      wrap.add(obj);
      wrap.position.set(-0.6, 0, COUNTER_Z - 1.0);
      wrap.rotation.y = 0; // facing +z (toward counter+customer)
      scene.add(wrap);
      if (gltf.animations?.length) {
        const mixer = new THREE.AnimationMixer(obj);
        const idle = gltf.animations.find(a => /idle|stand/i.test(a.name)) ||
                     gltf.animations.find(a => !/walk|run|dance|jump/i.test(a.name)) ||
                     gltf.animations[0];
        if (idle) {
          const action = mixer.clipAction(idle);
          action.timeScale = 0.7;
          action.play();
          charMixers.push(mixer);
        }
      }
    } catch (e) { console.warn('Pharmacist load failed:', e); }
    // Patient (in front of counter)
    try {
      const gltf = await loadGLB(MODELS_BASE + 'patient.glb');
      const obj = gltf.scene;
      autoScaleGLB(obj, 1.65);
      const wrap = new THREE.Group();
      wrap.add(obj);
      wrap.position.set(0.5, 0, COUNTER_Z + 1.2);
      wrap.rotation.y = Math.PI; // facing -z (toward counter/pharmacist)
      scene.add(wrap);
      if (gltf.animations?.length) {
        const mixer = new THREE.AnimationMixer(obj);
        const idle = gltf.animations.find(a => /idle|stand/i.test(a.name)) ||
                     gltf.animations.find(a => !/walk|run|dance|jump/i.test(a.name)) ||
                     gltf.animations[0];
        if (idle) {
          const action = mixer.clipAction(idle);
          action.timeScale = 0.7;
          action.play();
          charMixers.push(mixer);
        }
      }
    } catch (e) { console.warn('Patient load failed:', e); }
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
