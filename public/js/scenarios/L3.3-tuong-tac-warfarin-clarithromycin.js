// ============================================================
// Module L3.3 — Tương tác thuốc (scenario đầu tiên)
// ============================================================
// Dạng JSON-driven scenario cho ScenarioEngine.
// Lưu dưới dạng .js để IDE intellisense + xài const trực tiếp.
// ============================================================

import { getDrug } from '../engine/drug-db.js';

/** @type {import('../engine/types.js').QuizScenario} */
export const SCENARIO_L33_QUIZ = {
  id: 'L3.3-quiz-01',
  title: 'L3.3 · Tương tác thuốc — Kiểm tra kiến thức cơ bản',
  description: 'Xác định cặp thuốc có tương tác nguy hiểm và cơ chế.',
  kind: 'quiz',
  yearLevel: 3,
  subject: 'duoc-ly',
  difficulty: 2,
  timeLimitS: 0,
  skillsTrained: ['drug-interaction', 'cyp450', 'risk-assessment'],
  questions: [
    {
      stem: 'BN dùng warfarin để phòng huyết khối được kê thêm <b>clarithromycin</b> để điều trị viêm phế quản. Tác dụng phụ NGUY HIỂM nhất cần theo dõi là gì?',
      choices: [
        'Tăng nguy cơ chảy máu do tăng nồng độ warfarin',
        'Tăng nguy cơ huyết khối do giảm tác dụng warfarin',
        'Tiêu chảy do clarithromycin',
        'Hạ huyết áp tư thế',
      ],
      answer: 0,
      explanation: 'Clarithromycin ức chế CYP3A4 mạnh → giảm chuyển hoá warfarin → INR tăng vọt → chảy máu. Thay thế tốt hơn: azithromycin (ít tương tác CYP3A4).',
      drugRef: 'warfarin',
    },
    {
      stem: 'BN dùng <b>simvastatin 40mg</b> được kê thêm <b>amlodipin 10mg</b> điều trị THA. Khuyến cáo là gì?',
      choices: [
        'Tiếp tục cả hai liều như cũ',
        'Giảm simvastatin xuống ≤ 20mg do nguy cơ tiêu cơ vân',
        'Đổi amlodipin sang nifedipin',
        'Đổi simvastatin sang atorvastatin liều cao hơn',
      ],
      answer: 1,
      explanation: 'Amlodipin ức chế nhẹ CYP3A4 → tăng nồng độ simvastatin → nguy cơ tiêu cơ vân. FDA khuyến cáo giới hạn simvastatin ≤ 20mg khi phối hợp amlodipin.',
      drugRef: 'simvastatin',
    },
    {
      stem: 'BN sau đặt stent đang dùng <b>clopidogrel</b>, bị khó tiêu nên BS kê thêm <b>omeprazol</b>. Vấn đề là gì?',
      choices: [
        'Omeprazol làm tăng tác dụng clopidogrel → chảy máu',
        'Omeprazol ức chế CYP2C19 → giảm hoạt hoá clopidogrel → giảm chống kết tập tiểu cầu',
        'Hai thuốc không có tương tác đáng kể',
        'Omeprazol gây loãng xương ở BN tim mạch',
      ],
      answer: 1,
      explanation: 'Clopidogrel là PRODRUG cần CYP2C19 hoạt hoá. Omeprazol ức chế CYP2C19 → giảm hoạt tính clopidogrel → nguy cơ huyết khối stent. Khuyến cáo: dùng pantoprazol (ít ức chế CYP2C19 nhất).',
      drugRef: 'clopidogrel',
    },
    {
      stem: 'BN nữ 65t dùng <b>glibenclamid</b> điều trị ĐTĐ. Bị nấm âm đạo, BS kê <b>fluconazol 150mg × 1 liều</b>. Cần dặn dò gì?',
      choices: [
        'Không cần lưu ý gì đặc biệt',
        'Theo dõi đường huyết kỹ — nguy cơ HẠ đường huyết',
        'Uống cách nhau 2 giờ',
        'Ngưng glibenclamid trong 7 ngày',
      ],
      answer: 1,
      explanation: 'Fluconazol ức chế CYP2C9 → giảm chuyển hoá glibenclamid → tăng nồng độ → HẠ đường huyết. Đặc biệt nguy hiểm ở người già. Dặn BN đo đường huyết thường xuyên trong vài ngày.',
      drugRef: 'fluconazol',
    },
    {
      stem: 'BN viêm khớp dạng thấp đang dùng <b>methotrexate 15mg/tuần</b> bị đau do viêm khớp, có thể dùng thuốc nào AN TOÀN nhất?',
      choices: [
        'Aspirin 500mg × 4 lần/ngày',
        'Ibuprofen 400mg × 3 lần/ngày',
        'Paracetamol 500–1000mg khi đau',
        'Diclofenac 50mg × 2 lần/ngày',
      ],
      answer: 2,
      explanation: 'NSAID (aspirin, ibuprofen, diclofenac) cạnh tranh thải trừ qua thận với methotrexate → tăng nồng độ MTX → ngộ độc (ức chế tuỷ, suy thận). Paracetamol không qua thận → an toàn nhất cho BN dùng MTX.',
      drugRef: 'methotrexate',
    },
  ],
};

/** @type {import('../engine/types.js').DragMatchScenario} */
export const SCENARIO_L33_DRAG = {
  id: 'L3.3-drag-01',
  title: 'L3.3 · Ghép cặp Thuốc ↔ Cơ chế tương tác',
  description: 'Kéo thuốc bên trái vào enzyme/cơ chế tương tác phù hợp bên phải.',
  kind: 'drag-match',
  yearLevel: 3,
  subject: 'duoc-ly',
  difficulty: 3,
  leftItems: [
    { id: 'clari', label: 'Clarithromycin',  drugRef: 'clarithromycin' },
    { id: 'omep',  label: 'Omeprazol',       drugRef: 'omeprazol' },
    { id: 'fluc',  label: 'Fluconazol',      drugRef: 'fluconazol' },
    { id: 'amio',  label: 'Amiodaron',       drugRef: 'amiodaron' },
    { id: 'rif',   label: 'Rifampin (induc.)', drugRef: 'rifampin' },
  ],
  rightItems: [
    { id: 'cyp3a4-i', label: 'Ức chế CYP3A4 mạnh' },
    { id: 'cyp2c19-i', label: 'Ức chế CYP2C19' },
    { id: 'cyp2c9-i',  label: 'Ức chế CYP2C9' },
    { id: 'cyp-multi', label: 'Ức chế CYP3A4 + CYP2C9 + P-gp' },
    { id: 'cyp-ind',   label: 'Cảm ứng CYP3A4 (giảm thuốc khác)' },
  ],
  correctPairs: [
    ['clari', 'cyp3a4-i'],
    ['omep',  'cyp2c19-i'],
    ['fluc',  'cyp2c9-i'],
    ['amio',  'cyp-multi'],
    ['rif',   'cyp-ind'],
  ],
};

// Export gộp cho hub L3.3
export const L33_SCENARIOS = [SCENARIO_L33_QUIZ, SCENARIO_L33_DRAG];
