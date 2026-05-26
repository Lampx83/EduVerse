// Catalog 12 loại thuốc thông dụng trong nhà thuốc Việt Nam.
// Mỗi loại có category (nhóm điều trị) + dose + dạng bào chế cho thật hơn.

export const MEDICINES = [
  { id: 'amox', name: 'AMOXICILLIN',   dose: '500mg',  form: 'Viên nang',  short: 'AMOX', category: 'Kháng sinh',    color: '#43a047', atc: 'J01CA04', indication: 'Nhiễm khuẩn đường hô hấp, tiết niệu' },
  { id: 'asp',  name: 'ASPIRIN',       dose: '81mg',   form: 'Viên nén',   short: 'ASP',  category: 'Tim mạch',      color: '#e53935', atc: 'B01AC06', indication: 'Phòng nhồi máu cơ tim, chống kết tập tiểu cầu' },
  { id: 'sme',  name: 'SMECTA',        dose: '3g',     form: 'Bột pha',    short: 'SME',  category: 'Tiêu hóa',      color: '#fb8c00', atc: 'A07BC05', indication: 'Tiêu chảy cấp, đau dạ dày' },
  { id: 'par',  name: 'PARACETAMOL',   dose: '500mg',  form: 'Viên nén',   short: 'PARA', category: 'Giảm đau',      color: '#1e88e5', atc: 'N02BE01', indication: 'Đau đầu, hạ sốt, đau nhức' },
  { id: 'vitc', name: 'VITAMIN C',     dose: '1000mg', form: 'Viên sủi',   short: 'VITC', category: 'Vitamin',       color: '#ffb300', atc: 'A11GA01', indication: 'Bổ sung vitamin C, tăng đề kháng' },
  { id: 'lora', name: 'LORATADIN',     dose: '10mg',   form: 'Viên nén',   short: 'LORA', category: 'Chống dị ứng',  color: '#8e24aa', atc: 'R06AX13', indication: 'Viêm mũi dị ứng, mày đay' },
  { id: 'vent', name: 'VENTOLIN',      dose: '100mcg', form: 'Bình xịt',   short: 'VENT', category: 'Hô hấp',        color: '#00897b', atc: 'R03AC02', indication: 'Hen suyễn, COPD — giãn phế quản' },
  { id: 'omep', name: 'OMEPRAZOL',     dose: '20mg',   form: 'Viên nang',  short: 'OMEP', category: 'Dạ dày',        color: '#5e35b1', atc: 'A02BC01', indication: 'Loét dạ dày, trào ngược dạ dày-thực quản' },
  { id: 'glib', name: 'GLIBENCLAMID',  dose: '5mg',    form: 'Viên nén',   short: 'GLIB', category: 'Tiểu đường',    color: '#d97706', atc: 'A10BB01', indication: 'Tiểu đường type 2 (sulfonylurea)' },
  { id: 'ator', name: 'ATORVASTATIN',  dose: '20mg',   form: 'Viên nén',   short: 'ATOR', category: 'Mỡ máu',        color: '#0891b2', atc: 'C10AA05', indication: 'Hạ cholesterol, phòng tim mạch' },
  { id: 'amlo', name: 'AMLODIPIN',     dose: '5mg',    form: 'Viên nén',   short: 'AMLO', category: 'Huyết áp',      color: '#be185d', atc: 'C08CA01', indication: 'Cao huyết áp, đau thắt ngực' },
  { id: 'diaz', name: 'DIAZEPAM',      dose: '5mg',    form: 'Viên nén',   short: 'DIAZ', category: 'Tâm thần',      color: '#4338ca', atc: 'N05BA01', indication: 'Lo âu, mất ngủ (kê đơn đặc biệt)' },
  // 4 thuốc mới (v5) — tăng độ đa dạng
  { id: 'levo', name: 'LEVOTHYROXIN',  dose: '50mcg',  form: 'Viên nén',   short: 'LEVO', category: 'Tuyến giáp',    color: '#9333ea', atc: 'H03AA01', indication: 'Suy giáp, bổ sung hormone tuyến giáp' },
  { id: 'metf', name: 'METFORMIN',     dose: '500mg',  form: 'Viên nén',   short: 'METF', category: 'Tiểu đường',    color: '#ea580c', atc: 'A10BA02', indication: 'Tiểu đường type 2 (biguanide) — lựa chọn đầu tay' },
  { id: 'ibup', name: 'IBUPROFEN',     dose: '400mg',  form: 'Viên nén',   short: 'IBUP', category: 'Chống viêm',    color: '#65a30d', atc: 'M01AE01', indication: 'Đau, viêm, hạ sốt (NSAID)' },
  { id: 'salb', name: 'SALBUTAMOL',    dose: '2mg',    form: 'Siro',       short: 'SALB', category: 'Hô hấp',        color: '#0284c7', atc: 'R03CC02', indication: 'Cơn hen cấp, giãn phế quản đường uống' },
];

export const ALL_CATEGORIES = [...new Set(MEDICINES.map(m => m.category))];

// 10 LEVELS — escalating difficulty.
// count = số thuốc/slot · time = thời gian (s) · shuffleSlots = đảo thứ tự ô kệ (khó hơn)
export const LEVELS = [
  { n: 1,  count: 3,  time: 90,  shuffleSlots: false, label: 'Khởi đầu',       desc: '3 loại · 90s · nhẹ nhàng' },
  { n: 2,  count: 4,  time: 80,  shuffleSlots: false, label: 'Làm quen',       desc: '4 loại · 80s' },
  { n: 3,  count: 5,  time: 70,  shuffleSlots: false, label: 'Tăng tốc',       desc: '5 loại · 70s' },
  { n: 4,  count: 6,  time: 60,  shuffleSlots: false, label: 'Bình thường',    desc: '6 loại · 60s' },
  { n: 5,  count: 6,  time: 55,  shuffleSlots: true,  label: 'Đảo kệ',         desc: '6 loại · 55s · ô shuffle' },
  { n: 6,  count: 7,  time: 50,  shuffleSlots: true,  label: 'Khá khó',        desc: '7 loại · 50s · ô shuffle' },
  { n: 7,  count: 8,  time: 45,  shuffleSlots: true,  label: 'Thử thách',      desc: '8 loại · 45s · ô shuffle' },
  { n: 8,  count: 9,  time: 40,  shuffleSlots: true,  label: 'Khó',            desc: '9 loại · 40s' },
  { n: 9,  count: 10, time: 35,  shuffleSlots: true,  label: 'Rất khó',        desc: '10 loại · 35s' },
  { n: 10, count: 16, time: 30,  shuffleSlots: true,  label: 'Boss — đỉnh cao',desc: '16 loại · 30s · FULL CATALOG' },
];

// --- Level progression in localStorage ---
const LEVEL_KEY = 'pharmacysim:level';
const PROGRESS_KEY = 'pharmacysim:progress';   // {[levelN]: { stars: 0-3, bestScore }}

export function getCurrentLevel() {
  const n = parseInt(localStorage.getItem(LEVEL_KEY) || '1', 10);
  return LEVELS.find(l => l.n === n) || LEVELS[0];
}

export function setCurrentLevel(n) {
  const lvl = LEVELS.find(l => l.n === n);
  if (lvl) localStorage.setItem(LEVEL_KEY, String(n));
}

export function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}'); }
  catch { return {}; }
}

export function saveLevelResult(n, { stars, score }) {
  const p = getProgress();
  const cur = p[n] || { stars: 0, bestScore: 0 };
  p[n] = {
    stars: Math.max(cur.stars, stars),
    bestScore: Math.max(cur.bestScore, score),
  };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  return p[n];
}

export function isLevelUnlocked(n) {
  if (n === 1) return true;
  const p = getProgress();
  // Unlock if previous level was beaten with at least 1 star
  return (p[n - 1]?.stars ?? 0) >= 1;
}

// Map a final score percentage (0-100) to star count (0-3)
export function scoreToStars(percent) {
  if (percent >= 95) return 3;
  if (percent >= 75) return 2;
  if (percent >= 50) return 1;
  return 0;
}

// --- Difficulty for older code paths (kept for backward compat) ---
export const DIFFICULTIES = [
  { id: 'easy', label: 'Dễ',  count: 4, desc: '4 loại thuốc' },
  { id: 'med',  label: 'Vừa', count: 6, desc: '6 loại thuốc' },
  { id: 'hard', label: 'Khó', count: 8, desc: '8 loại thuốc' },
];
const DIFFICULTY_KEY = 'pharmacysim:difficulty';
export function getDifficulty() {
  const id = localStorage.getItem(DIFFICULTY_KEY) || 'easy';
  return DIFFICULTIES.find(d => d.id === id) || DIFFICULTIES[0];
}
export function setDifficulty(id) {
  if (DIFFICULTIES.some(d => d.id === id)) localStorage.setItem(DIFFICULTY_KEY, id);
}

// --- Helpers ---
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pickRoundMedicines(count) {
  const n = Math.min(Math.max(count | 0, 2), MEDICINES.length);
  return shuffle(MEDICINES).slice(0, n);
}

// Helper used by games to read URL ?level=N or fallback to localStorage
export function getActiveLevel() {
  const params = new URLSearchParams(location.search);
  const fromUrl = parseInt(params.get('level') || '', 10);
  if (fromUrl && LEVELS.find(l => l.n === fromUrl)) {
    setCurrentLevel(fromUrl);
    return LEVELS.find(l => l.n === fromUrl);
  }
  return getCurrentLevel();
}
