// ============================================================
// Practice generator — Toán Tiểu học P1..P5
// ============================================================
// Mỗi lần renderPicker gọi → sinh fresh random set. Mỗi item
// có familyId ổn định (vd 'P2-prac-mul') để wallet đếm số lần
// hoàn thành theo gia đình bài, không phụ thuộc id random.
//
// Output: Array<Scenario>. Mỗi scenario thoả mãn engine kind
// hợp lệ ('calculator' | 'drag-match' | 'quiz').
// ============================================================

const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const uid = (prefix) =>
  `${prefix}-${Date.now().toString(36).slice(-4)}${Math.floor(Math.random() * 1e4).toString(36)}`;

// ── Builders ────────────────────────────────────────────────
function calcScn({ familyId, title, yearLevel, stem, target, tolerance = 0, difficulty = 1, unit = '' }) {
  return {
    id: uid(familyId),
    familyId,
    title,
    kind: 'calculator',
    yearLevel,
    subject: 'toan',
    difficulty,
    description: stem,
    formula: 'custom',
    showFormula: false,
    inputs: [{ name: 'answer', label: stem, unit }],
    target,
    tolerance,
  };
}
function matchScn({ familyId, title, yearLevel, pairs, desc, difficulty = 1 }) {
  // pairs: [[leftLabel, rightLabel], ...] — sẽ shuffle bên phải để bốc 5 cặp
  const picked = shuffle(pairs).slice(0, 5);
  const leftItems = picked.map((p, i) => ({ id: `L${i}`, label: p[0] }));
  // shuffle right side để câu trả lời không trùng vị trí
  const shuffledRights = shuffle(picked.map((p, i) => ({ ans: p[1], srcIdx: i })));
  const rightItems = shuffledRights.map((r, j) => ({ id: `R${j}`, label: r.ans }));
  const correctPairs = shuffledRights.map((r, j) => [`L${r.srcIdx}`, `R${j}`]);
  return {
    id: uid(familyId),
    familyId,
    title,
    kind: 'drag-match',
    yearLevel,
    subject: 'toan',
    difficulty,
    description: desc,
    leftItems,
    rightItems,
    correctPairs,
  };
}
function quizScn({ familyId, title, yearLevel, questions, difficulty = 1 }) {
  return {
    id: uid(familyId),
    familyId,
    title,
    kind: 'quiz',
    yearLevel,
    subject: 'toan',
    difficulty,
    questions: shuffle(questions).slice(0, 5),
  };
}

// ── Banks dữ liệu cho random sampling ───────────────────────
const ADD_SUB_10 = []; // P1: cộng/trừ trong 10
for (let a = 0; a <= 10; a++) for (let b = 0; b <= 10 - a; b++)
  ADD_SUB_10.push([`${a} + ${b}`, String(a + b)]);
for (let a = 1; a <= 10; a++) for (let b = 0; b <= a; b++)
  ADD_SUB_10.push([`${a} − ${b}`, String(a - b)]);

const MUL_TABLE_2_5 = []; // P2: bảng nhân 2-5
for (let a = 2; a <= 5; a++) for (let b = 1; b <= 9; b++)
  MUL_TABLE_2_5.push([`${a} × ${b}`, String(a * b)]);

const MUL_DIV_6_9 = []; // P3: bảng nhân/chia 6-9
for (let a = 6; a <= 9; a++) for (let b = 1; b <= 9; b++) {
  MUL_DIV_6_9.push([`${a} × ${b}`, String(a * b)]);
  MUL_DIV_6_9.push([`${a * b} : ${a}`, String(b)]);
}

const FRAC_VALUES = [ // P4: phân số ↔ giá trị
  ['1/2', '0,5'], ['1/4', '0,25'], ['3/4', '0,75'], ['1/5', '0,2'], ['2/5', '0,4'],
  ['3/5', '0,6'], ['1/10', '0,1'], ['7/10', '0,7'], ['1/8', '0,125'], ['1/3', '≈0,33'],
];

const DEC_PERCENT = [ // P5: thập phân ↔ phần trăm
  ['0,1', '10%'], ['0,2', '20%'], ['0,25', '25%'], ['0,3', '30%'], ['0,4', '40%'],
  ['0,5', '50%'], ['0,6', '60%'], ['0,75', '75%'], ['0,8', '80%'], ['1,0', '100%'],
];

// ── Generators theo grade ───────────────────────────────────
function genP1(yearLevel = 1) {
  const a = rnd(20, 60), b = rnd(10, 30);
  const c = rnd(30, 90), d = rnd(5, Math.min(c - 1, 20));
  return [
    calcScn({
      familyId: 'P1-prac-add',
      title: `Tự tính: ${a} + ${b}`,
      yearLevel,
      stem: `${a} + ${b} = ?`,
      target: a + b,
    }),
    calcScn({
      familyId: 'P1-prac-sub',
      title: `Tự tính: ${c} − ${d}`,
      yearLevel,
      stem: `${c} − ${d} = ?`,
      target: c - d,
    }),
    matchScn({
      familyId: 'P1-prac-match-addsub',
      title: 'Ghép phép tính ↔ kết quả (trong 10)',
      yearLevel,
      pairs: ADD_SUB_10,
      desc: 'Kéo–ghép phép cộng/trừ trong 10 với kết quả đúng.',
    }),
    quizScn({
      familyId: 'P1-prac-quick',
      title: 'Hỏi nhanh — Số & phép tính trong 100',
      yearLevel,
      questions: [
        { stem: 'Số liền sau của 49 là?', choices: ['48', '50', '51', '40'], answer: 1, explanation: 'Liền sau là +1: 49 + 1 = 50.' },
        { stem: 'Số liền trước của 70 là?', choices: ['69', '71', '60', '80'], answer: 0, explanation: 'Liền trước là −1: 70 − 1 = 69.' },
        { stem: '30 + 20 = ?', choices: ['40', '50', '60', '23'], answer: 1, explanation: '3 chục + 2 chục = 5 chục = 50.' },
        { stem: 'Hình tròn có mấy cạnh?', choices: ['0 cạnh', '1 cạnh', '3 cạnh', '4 cạnh'], answer: 0, explanation: 'Hình tròn không có cạnh thẳng.' },
        { stem: 'Một tuần có mấy ngày?', choices: ['5', '6', '7', '10'], answer: 2, explanation: 'Một tuần có 7 ngày.' },
        { stem: 'Số bé nhất có 2 chữ số là?', choices: ['10', '11', '19', '99'], answer: 0, explanation: 'Bắt đầu từ 10.' },
        { stem: 'Số lớn nhất có 2 chữ số là?', choices: ['89', '99', '100', '90'], answer: 1, explanation: '99 là lớn nhất 2 chữ số.' },
        { stem: 'Điền dấu: 36 … 63', choices: ['>', '<', '='], answer: 1, explanation: 'Hàng chục 3 < 6 nên 36 < 63.' },
      ],
    }),
  ];
}

function genP2(yearLevel = 2) {
  const aM = rnd(2, 9), bM = rnd(2, 9);                     // a × b
  const aA = rnd(15, 79), bA = rnd(10, 89);                  // cộng có nhớ
  const aS = rnd(40, 99), bS = rnd(10, aS - 5);              // trừ có nhớ
  const div = pick([12, 14, 15, 16, 18, 20, 21, 24, 25, 27, 28, 30, 32, 35, 36, 40, 45]);
  const divisor = pick([2, 3, 4, 5]);
  const target = Math.round(div / divisor);
  return [
    calcScn({
      familyId: 'P2-prac-mul',
      title: `Tự tính: ${aM} × ${bM}`,
      yearLevel,
      stem: `${aM} × ${bM} = ?`,
      target: aM * bM,
    }),
    calcScn({
      familyId: 'P2-prac-add-carry',
      title: `Cộng có nhớ: ${aA} + ${bA}`,
      yearLevel,
      stem: `${aA} + ${bA} = ?`,
      target: aA + bA,
    }),
    calcScn({
      familyId: 'P2-prac-sub-borrow',
      title: `Trừ có nhớ: ${aS} − ${bS}`,
      yearLevel,
      stem: `${aS} − ${bS} = ?`,
      target: aS - bS,
    }),
    calcScn({
      familyId: 'P2-prac-div',
      title: `Chia: ${divisor * target} : ${divisor}`,
      yearLevel,
      stem: `${divisor * target} : ${divisor} = ?`,
      target,
    }),
    matchScn({
      familyId: 'P2-prac-match-mul',
      title: 'Ghép phép nhân ↔ kết quả',
      yearLevel,
      pairs: MUL_TABLE_2_5,
      desc: 'Kéo–ghép phép nhân (bảng 2–5) với kết quả.',
    }),
    quizScn({
      familyId: 'P2-prac-quick',
      title: 'Hỏi nhanh — Đo lường & thời gian',
      yearLevel,
      questions: [
        { stem: '1 giờ = ? phút', choices: ['30', '60', '100', '24'], answer: 1, explanation: '1 giờ = 60 phút.' },
        { stem: '1 kg = ? g', choices: ['100', '500', '1000', '10'], answer: 2, explanation: '1 kg = 1000 g.' },
        { stem: '1 lít = ? ml', choices: ['100', '500', '1000', '10000'], answer: 2, explanation: '1 l = 1000 ml.' },
        { stem: '1 ngày có mấy giờ?', choices: ['12', '24', '48', '60'], answer: 1, explanation: '24 giờ.' },
        { stem: '1 m = ? cm', choices: ['10', '100', '1000', '50'], answer: 1, explanation: '1 m = 100 cm.' },
        { stem: '1/2 giờ = ? phút', choices: ['15', '20', '30', '60'], answer: 2, explanation: 'Nửa giờ = 30 phút.' },
        { stem: 'Số liền sau của 999 là?', choices: ['998', '1000', '1001', '99'], answer: 1, explanation: '999 + 1 = 1000.' },
      ],
    }),
  ];
}

function genP3(yearLevel = 3) {
  const aM = rnd(6, 9), bM = rnd(2, 9);
  const a3 = rnd(112, 332), m3 = rnd(2, 4);
  const cz = rnd(4, 12); // chu vi vuông
  const cdW = rnd(5, 12), cdH = rnd(3, cdW - 1); // chu vi HCN
  return [
    calcScn({
      familyId: 'P3-prac-mul',
      title: `Tự tính: ${aM} × ${bM}`,
      yearLevel,
      stem: `${aM} × ${bM} = ?`,
      target: aM * bM,
    }),
    calcScn({
      familyId: 'P3-prac-mul3digit',
      title: `Nhân số có 3 chữ số: ${a3} × ${m3}`,
      yearLevel,
      stem: `${a3} × ${m3} = ?`,
      target: a3 * m3,
    }),
    calcScn({
      familyId: 'P3-prac-perimeter-square',
      title: `Chu vi hình vuông cạnh ${cz} cm`,
      yearLevel,
      stem: `Chu vi hình vuông cạnh ${cz} cm = ? (cm)`,
      target: cz * 4,
      unit: 'cm',
    }),
    calcScn({
      familyId: 'P3-prac-perimeter-rect',
      title: `Chu vi HCN ${cdW} × ${cdH}`,
      yearLevel,
      stem: `Chu vi hình chữ nhật dài ${cdW} cm, rộng ${cdH} cm = ? (cm)`,
      target: (cdW + cdH) * 2,
      unit: 'cm',
    }),
    matchScn({
      familyId: 'P3-prac-match-muldiv',
      title: 'Ghép nhân/chia ↔ kết quả',
      yearLevel,
      pairs: MUL_DIV_6_9,
      desc: 'Kéo–ghép phép nhân/chia (bảng 6–9).',
    }),
  ];
}

function genP4(yearLevel = 4) {
  const aA = rnd(1234, 5678), bA = rnd(1234, 4321);
  const aM = rnd(123, 432), m = rnd(2, 6);
  const dDai = rnd(5, 12), dRong = rnd(3, dDai - 1);
  const sBig = rnd(10000, 99999);
  return [
    calcScn({
      familyId: 'P4-prac-add-big',
      title: `Tự tính: ${aA} + ${bA}`,
      yearLevel,
      stem: `${aA} + ${bA} = ?`,
      target: aA + bA,
    }),
    calcScn({
      familyId: 'P4-prac-mul-bignum',
      title: `Nhân: ${aM} × ${m}`,
      yearLevel,
      stem: `${aM} × ${m} = ?`,
      target: aM * m,
    }),
    calcScn({
      familyId: 'P4-prac-area-rect',
      title: `Diện tích HCN ${dDai} × ${dRong}`,
      yearLevel,
      stem: `Diện tích hình chữ nhật dài ${dDai} cm, rộng ${dRong} cm = ? (cm²)`,
      target: dDai * dRong,
      unit: 'cm²',
    }),
    matchScn({
      familyId: 'P4-prac-match-frac',
      title: 'Ghép phân số ↔ giá trị thập phân',
      yearLevel,
      pairs: FRAC_VALUES,
      desc: 'Kéo–ghép phân số với giá trị thập phân tương ứng.',
    }),
    quizScn({
      familyId: 'P4-prac-quick',
      title: 'Hỏi nhanh — Dấu hiệu chia hết & góc',
      yearLevel,
      questions: [
        { stem: `Số ${sBig} chia hết cho 2 khi…`, choices: ['Tận cùng là 0,2,4,6,8', 'Tận cùng là 5', 'Tổng chữ số chia hết cho 3', 'Luôn chia hết'], answer: 0, explanation: 'Chia hết cho 2 ⟺ tận cùng chẵn.' },
        { stem: 'Số chia hết cho 5 tận cùng là?', choices: ['0 hoặc 2', '5 hoặc 6', '0 hoặc 5', '1 hoặc 5'], answer: 2, explanation: 'Tận cùng 0 hoặc 5.' },
        { stem: 'Góc vuông có số đo?', choices: ['45°', '60°', '90°', '180°'], answer: 2, explanation: '90°.' },
        { stem: 'Hai đường thẳng cắt nhau tạo thành?', choices: ['1 góc', '2 góc', '4 góc', '6 góc'], answer: 2, explanation: '4 góc đôi một đối đỉnh.' },
        { stem: '1/2 + 1/4 = ?', choices: ['2/6', '3/4', '1/4', '2/4'], answer: 1, explanation: 'Quy đồng: 2/4 + 1/4 = 3/4.' },
        { stem: 'Rút gọn 6/9 = ?', choices: ['2/3', '3/4', '1/2', '6/8'], answer: 0, explanation: 'Chia tử & mẫu cho 3.' },
      ],
    }),
  ];
}

function genP5(yearLevel = 5) {
  const d1 = (rnd(10, 90) / 10).toFixed(1); // 1.0 - 9.0
  const d2 = (rnd(10, 90) / 10).toFixed(1);
  const pct = pick([10, 15, 20, 25, 30, 40, 50, 75, 80]);
  const num = pick([80, 100, 120, 150, 200, 240, 300, 400]);
  const cube = rnd(3, 7);
  return [
    calcScn({
      familyId: 'P5-prac-decimal-add',
      title: `Tự tính: ${d1} + ${d2}`,
      yearLevel,
      stem: `${d1} + ${d2} = ?`,
      target: Number((parseFloat(d1) + parseFloat(d2)).toFixed(2)),
      tolerance: 0.01,
    }),
    calcScn({
      familyId: 'P5-prac-decimal-mul10',
      title: `Nhân nhanh với 10: ${d1} × 10`,
      yearLevel,
      stem: `${d1} × 10 = ?`,
      target: Number((parseFloat(d1) * 10).toFixed(2)),
      tolerance: 0.01,
    }),
    calcScn({
      familyId: 'P5-prac-percent',
      title: `${pct}% của ${num}`,
      yearLevel,
      stem: `${pct}% của ${num} = ?`,
      target: (num * pct) / 100,
      tolerance: 0.01,
    }),
    calcScn({
      familyId: 'P5-prac-cube-volume',
      title: `Thể tích lập phương cạnh ${cube}`,
      yearLevel,
      stem: `Thể tích hình lập phương cạnh ${cube} cm = ? (cm³)`,
      target: cube ** 3,
      unit: 'cm³',
    }),
    matchScn({
      familyId: 'P5-prac-match-percent',
      title: 'Ghép thập phân ↔ phần trăm',
      yearLevel,
      pairs: DEC_PERCENT,
      desc: 'Kéo–ghép số thập phân với tỉ số phần trăm tương ứng.',
    }),
  ];
}

// ── Public API ──────────────────────────────────────────────
/**
 * Sinh fresh practice set cho 1 module Toán Tiểu học.
 * Trả về mảng scenario hoặc null nếu không hỗ trợ.
 * @param {string} moduleId  vd 'P1', 'P2', 'P3', 'P4', 'P5'
 */
export function generatePracticeFor(moduleId) {
  switch (moduleId) {
    case 'P1': return genP1();
    case 'P2': return genP2();
    case 'P3': return genP3();
    case 'P4': return genP4();
    case 'P5': return genP5();
    default: return null;
  }
}

/** True nếu module này có practice generator. */
export function hasPracticeGenerator(moduleId) {
  return ['P1', 'P2', 'P3', 'P4', 'P5'].includes(moduleId);
}
