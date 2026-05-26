// Shared medicine catalog used by both 2D and 3D games.

export const MEDICINES = [
  { id: 'amox', name: 'AMOXICILLIN', short: 'AMOX', category: 'Kháng sinh',     color: '#43a047' },
  { id: 'asp',  name: 'ASPIRIN',     short: 'ASP',  category: 'Tim mạch',       color: '#e53935' },
  { id: 'sme',  name: 'SMECTA',      short: 'SME',  category: 'Tiêu hóa',       color: '#fb8c00' },
  { id: 'par',  name: 'PARACETAMOL', short: 'PARA', category: 'Giảm đau',       color: '#1e88e5' },
  { id: 'vitc', name: 'VITAMIN C',   short: 'VITC', category: 'Vitamin',        color: '#ffb300' },
  { id: 'lora', name: 'LORATADIN',   short: 'LORA', category: 'Chống dị ứng',   color: '#8e24aa' },
  { id: 'vent', name: 'VENTOLIN',    short: 'VENT', category: 'Hô hấp',         color: '#00897b' },
  { id: 'omep', name: 'OMEPRAZOL',   short: 'OMEP', category: 'Dạ dày',         color: '#5e35b1' },
];

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
  if (DIFFICULTIES.some(d => d.id === id)) {
    localStorage.setItem(DIFFICULTY_KEY, id);
  }
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Pick N random medicines for this round (deterministic shuffle of the catalog)
export function pickRoundMedicines(count) {
  const n = Math.min(Math.max(count | 0, 2), MEDICINES.length);
  return shuffle(MEDICINES).slice(0, n);
}
