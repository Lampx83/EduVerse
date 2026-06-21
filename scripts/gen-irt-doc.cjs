/* Sinh tài liệu Word CHI TIẾT: Hệ thống Tizia ứng dụng IRT cho trắc nghiệm thích ứng. */
const fs = require('fs');
const path = require('path');
const G = '/Users/mac/.nvm/versions/node/v20.14.0/lib/node_modules/docx';
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, TableOfContents, HeadingLevel, BorderStyle,
  WidthType, ShadingType, PageNumber, Footer,
} = require(G);

// ── Palette ──
const ACCENT = '2E5BBA';
const ACCENT_LIGHT = 'D6E0F5';
const CODE_BG = 'F3F4F6';
const HEAD_BG = '2E5BBA';
const ROW_ALT = 'EEF2FB';
const CONTENT_W = 9360;

// ── Helpers ──
const P = (text, opts = {}) => new Paragraph({
  spacing: { after: 120, line: 278, ...(opts.spacing || {}) },
  alignment: opts.align,
  children: Array.isArray(text) ? text : [new TextRun({ text, size: 22, ...(opts.run || {}) })],
  ...(opts.pageBreakBefore ? { pageBreakBefore: true } : {}),
});
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const H3 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(t)] });
const bullet = (text, lvl = 0) => new Paragraph({
  numbering: { reference: 'bullets', level: lvl }, spacing: { after: 70, line: 276 },
  children: Array.isArray(text) ? text : [new TextRun({ text, size: 22 })],
});
const num = (text) => new Paragraph({
  numbering: { reference: 'numbers', level: 0 }, spacing: { after: 70, line: 276 },
  children: Array.isArray(text) ? text : [new TextRun({ text, size: 22 })],
});
const run = (text, o = {}) => new TextRun({ text, size: 22, ...o });
const bold = (text) => new TextRun({ text, size: 22, bold: true });
const ital = (text) => new TextRun({ text, size: 22, italics: true });
const code = (text) => new TextRun({ text, font: 'Consolas', size: 20, color: 'B5179E' });

function codeBlock(lines, caption) {
  const out = lines.map((ln) => new Paragraph({
    shading: { fill: CODE_BG, type: ShadingType.CLEAR },
    spacing: { after: 0, before: 0, line: 256 },
    border: { left: { style: BorderStyle.SINGLE, size: 18, color: ACCENT, space: 4 } },
    indent: { left: 120 },
    children: [new TextRun({ text: ln || ' ', font: 'Consolas', size: 18, color: '1F2937' })],
  }));
  if (caption) out.push(new Paragraph({ spacing: { before: 40, after: 120 },
    children: [new TextRun({ text: caption, italics: true, size: 18, color: '6B7280' })] }));
  return out;
}

function table(headers, rows, widths) {
  const cellMargin = { top: 60, bottom: 60, left: 110, right: 110 };
  const border = { style: BorderStyle.SINGLE, size: 1, color: 'C7CFDD' };
  const borders = { top: border, left: border, bottom: border, right: border };
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => new TableCell({
      borders, width: { size: widths[i], type: WidthType.DXA }, margins: cellMargin,
      shading: { fill: HEAD_BG, type: ShadingType.CLEAR },
      children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: h, bold: true, color: 'FFFFFF', size: 20 })] })],
    })),
  });
  const bodyRows = rows.map((r, ri) => new TableRow({
    children: r.map((c, i) => new TableCell({
      borders, width: { size: widths[i], type: WidthType.DXA }, margins: cellMargin,
      shading: { fill: ri % 2 ? ROW_ALT : 'FFFFFF', type: ShadingType.CLEAR },
      children: (Array.isArray(c) ? c : [c]).map(line =>
        new Paragraph({ spacing: { after: 0, line: 252 },
          children: [typeof line === 'string' ? new TextRun({ text: line, size: 19 }) : line] })),
    })),
  }));
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: widths, rows: [headerRow, ...bodyRows] });
}

function callout(label, lines, fill = ACCENT_LIGHT, barColor = ACCENT) {
  const arr = Array.isArray(lines) ? lines : [lines];
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [CONTENT_W],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: CONTENT_W, type: WidthType.DXA },
      margins: { top: 100, bottom: 100, left: 160, right: 160 },
      shading: { fill, type: ShadingType.CLEAR },
      borders: { top: { style: BorderStyle.NONE }, left: { style: BorderStyle.SINGLE, size: 24, color: barColor },
        bottom: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
      children: [
        new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: label, bold: true, size: 21, color: barColor })] }),
        ...arr.map(t => new Paragraph({ spacing: { after: 40, line: 264 },
          children: Array.isArray(t) ? t : [new TextRun({ text: t, size: 21 })] })),
      ],
    })] })],
  });
}
const spacer = () => new Paragraph({ spacing: { after: 60 }, children: [new TextRun('')] });
const pageBreak = () => new Paragraph({ pageBreakBefore: true, children: [new TextRun('')] });

// ════════════════════════════════════════════════════════
const children = [];

// ===== TRANG BÌA =====
children.push(
  new Paragraph({ spacing: { before: 2200, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: '🧠', size: 96 })] }),
  new Paragraph({ spacing: { before: 200, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'HỆ THỐNG TIZIA', bold: true, size: 30, color: ACCENT })] }),
  new Paragraph({ spacing: { before: 80, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Ứng dụng Lý thuyết Ứng đáp Câu hỏi (IRT)', bold: true, size: 44, color: '1F2937' })] }),
  new Paragraph({ spacing: { before: 60, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'cho Trắc nghiệm Thích ứng (Adaptive Quiz)', bold: true, size: 32, color: '1F2937' })] }),
  new Paragraph({ spacing: { before: 360, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Tài liệu kỹ thuật chuyên sâu — Phiên bản mở rộng', italics: true, size: 24, color: '6B7280' })] }),
  new Paragraph({ spacing: { before: 1200, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Mô hình logistic 1 tham số (1PL / Rasch) · cập nhật trực tuyến', size: 22, color: '374151' })] }),
  new Paragraph({ spacing: { before: 40, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Node.js · Express · SQLite · tích hợp ScoreUp API', size: 20, color: '6B7280' })] }),
  new Paragraph({ spacing: { before: 700, after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Phiên bản tài liệu 2.0 — 12/06/2026', size: 20, color: '9CA3AF' })] }),
  pageBreak(),
);

// ===== MỤC LỤC =====
children.push(H1('Mục lục'));
children.push(new TableOfContents('Mục lục', { hyperlink: true, headingStyleRange: '1-3' }));
children.push(pageBreak());

// ===== 1. GIỚI THIỆU =====
children.push(H1('1. Giới thiệu'));
children.push(H2('1.1. Bối cảnh và động lực'));
children.push(P('Tizia là nền tảng học tập tương tác phục vụ học sinh từ mầm non đến trung học phổ thông và người học bậc đại học/nghề. Kho câu hỏi trắc nghiệm (MCQ) được phục vụ qua dịch vụ ScoreUp với hàng nghìn câu trải rộng nhiều môn và nhiều cấp độ. Trong bối cảnh đó, một bài luyện tập "một cỡ vừa cho tất cả" là không tối ưu: câu quá dễ gây nhàm chán, câu quá khó gây nản. Mục tiêu của Tizia là cá nhân hoá luồng luyện tập theo thời gian thực — liên tục ước lượng trình độ người học và đưa ra câu kế tiếp "vừa sức".'));
children.push(P('Để đạt mục tiêu này, Tizia áp dụng Lý thuyết Ứng đáp Câu hỏi (Item Response Theory — IRT), cụ thể là một biến thể gọn nhẹ của mô hình logistic 1 tham số, kết hợp với một thuật toán chọn câu thích ứng. Tài liệu này mô tả chi tiết cơ sở lý thuyết, công thức, cách hiện thực trong mã nguồn, ví dụ minh hoạ, cũng như hạn chế và lộ trình nâng cấp.'));

children.push(H2('1.2. IRT là gì?'));
children.push(P('IRT là một họ mô hình tâm trắc học (psychometrics) mô tả xác suất một người học trả lời đúng một câu hỏi như một hàm của hai nhóm đại lượng tiềm ẩn: năng lực của người học và đặc trưng của câu hỏi (độ khó, độ phân biệt, khả năng đoán mò). Điểm mạnh cốt lõi của IRT so với cách chấm điểm cổ điển là đặt người học và câu hỏi lên cùng một thang đo tiềm ẩn (latent scale), nhờ đó:'));
children.push(bullet('Năng lực ước lượng được KHÔNG phụ thuộc vào bộ câu hỏi cụ thể (item-free) — hai người làm hai đề khác nhau vẫn so sánh được.'));
children.push(bullet('Độ khó câu hỏi ước lượng được KHÔNG phụ thuộc vào nhóm thí sinh cụ thể (sample-free).'));
children.push(bullet('Cho phép chọn câu tối ưu thông tin theo từng người — nền tảng của trắc nghiệm thích ứng (CAT).'));
children.push(P([run('Hai ký hiệu trung tâm: '), bold('năng lực người học θ'), run(' (theta) và '), bold('độ khó câu hỏi b'), run('. Cả hai cùng nằm trên một thang logit. Khi θ = b, người học có đúng 50% xác suất trả lời đúng câu đó.')]));
children.push(callout('💡 Trực giác cốt lõi', [
  'HS giỏi (θ cao) gặp câu dễ (b thấp) → gần như chắc chắn đúng.',
  'HS yếu (θ thấp) gặp câu khó (b cao) → xác suất đúng rất thấp.',
  'Câu "vừa sức" (b ≈ θ) cho nhiều thông tin nhất về năng lực — đây là chìa khoá của trắc nghiệm thích ứng.',
]));

children.push(H2('1.3. Họ mô hình IRT: 1PL, 2PL, 3PL'));
children.push(P('Các mô hình IRT phổ biến cho câu nhị phân (đúng/sai) khác nhau ở số tham số đặc trưng câu hỏi:'));
children.push(table(
  ['Mô hình', 'Công thức P(đúng | θ)', 'Tham số câu', 'Đặc điểm'],
  [
    ['1PL (Rasch)', 'σ(θ − b)', 'b', 'Chỉ độ khó; mọi câu cùng độ phân biệt.'],
    ['2PL', 'σ(a(θ − b))', 'a, b', 'Thêm độ phân biệt a (độ dốc đường cong).'],
    ['3PL', 'c + (1−c)·σ(a(θ − b))', 'a, b, c', 'Thêm tham số đoán mò c (cận dưới).'],
  ],
  [1700, 3160, 1300, 3200],
));
children.push(P([run('Trong đó '), code('σ(x) = 1/(1+e^(−x))'), run(' là hàm logistic (sigmoid). '), bold('Tizia hiện thực mô hình 1PL'), run(' — đơn giản nhất nhưng đủ mạnh cho mục tiêu cá nhân hoá luyện tập.')]));

children.push(H2('1.4. Đường đặc trưng câu hỏi (ICC)'));
children.push(P('Với mỗi câu hỏi, đồ thị của P(đúng | θ) theo θ gọi là Đường đặc trưng câu hỏi (Item Characteristic Curve — ICC). Trong mô hình 1PL, ICC là một đường chữ S (sigmoid) có cùng độ dốc cho mọi câu, chỉ dịch trái/phải theo b: câu càng khó (b lớn) thì đường cong dịch sang phải, đòi hỏi θ cao hơn để đạt cùng xác suất đúng. Điểm uốn của ICC nằm tại θ = b, nơi xác suất đúng đúng bằng 0,5.'));

children.push(H2('1.5. Vì sao Tizia chọn 1PL "bản gọn"?'));
children.push(P('Tizia áp dụng 1PL với hai điều chỉnh thực dụng để phù hợp môi trường vận hành trực tuyến, dữ liệu tới theo dòng:'));
children.push(bullet([bold('Cập nhật trực tuyến (online): '), run('θ và b được hiệu chỉnh ngay sau mỗi câu bằng một bước gradient, thay vì chạy hiệu chỉnh (calibration) theo lô như IRT cổ điển.')]));
children.push(bullet([bold('Khởi tạo trung tính: '), run('người học mới có θ = 0, câu hỏi mới có b = 0; tham số sẽ "trôi" dần về giá trị thực khi tích luỹ dữ liệu — không cần bộ dữ liệu mồi lớn.')]));
children.push(callout('📁 Các tệp mã nguồn chính', [
  [code('server/contexts/learning/index.js'), run('  — toàn bộ logic IRT: schema, updateIrt(), nextAdaptiveQuestion(), API.')],
  [code('server/index.js'), run('  (~dòng 650) — điểm tích hợp: gọi updateIrt() sau khi chấm mỗi câu.')],
  [code('server/adaptive.js'), run('  — hệ thích ứng thứ hai theo kỹ năng (BKT), hoạt động song song.')],
  [code('public/hoc-thong-minh.html'), run('  — giao diện "Học thông minh" hiển thị θ và phục vụ câu thích ứng.')],
], 'FEF3C7', 'B45309'));

// ===== 2. GIẢ ĐỊNH =====
children.push(H1('2. Các giả định của mô hình và cách Tizia đáp ứng'));
children.push(P('Mọi mô hình IRT đều dựa trên ba giả định nền tảng. Hiểu các giả định này giúp đánh giá đúng phạm vi tin cậy của ước lượng θ/b trong Tizia.'));
children.push(table(
  ['Giả định', 'Nội dung', 'Cách Tizia tiếp cận'],
  [
    ['Đơn chiều (unidimensionality)', 'Một năng lực tiềm ẩn duy nhất chi phối kết quả.', [run('θ được lưu '), bold('theo từng môn'), run(' ('), code('subject_id'), run('), tránh trộn nhiều năng lực vào một thang.')]],
    ['Độc lập cục bộ (local independence)', 'Khi biết θ, các câu trả lời độc lập với nhau.', 'Câu lấy ngẫu nhiên từ ScoreUp, không phụ thuộc thứ tự nội dung.'],
    ['Đơn điệu (monotonicity)', 'θ tăng thì xác suất đúng tăng.', 'Hàm logistic σ(θ−b) đơn điệu tăng theo θ — thoả mãn theo thiết kế.'],
  ],
  [2500, 3460, 3400],
));
children.push(callout('⚠️ Lưu ý về phạm vi', [
  'Tizia là hệ luyện tập cá nhân hoá, KHÔNG phải hệ khảo thí chuẩn hoá. Các giả định trên được đáp ứng "đủ tốt" cho mục tiêu gợi ý câu, nhưng ước lượng θ không nên dùng làm điểm thi chính thức khi số câu còn ít.',
], 'FDE8E8', 'B91C1C'));

// ===== 3. KIẾN TRÚC =====
children.push(pageBreak());
children.push(H1('3. Tổng quan kiến trúc và vòng đời một lượt trả lời'));
children.push(P('Vòng lặp IRT của Tizia gồm bốn bước lặp liên tục mỗi khi người học trả lời một câu:'));
children.push(num([bold('Phục vụ (Serve): '), run('chọn câu có độ khó b gần năng lực θ hiện tại nhất.')]));
children.push(num([bold('Chấm (Score): '), run('xác định đúng/sai (và điểm phần cho câu nhiều đáp án).')]));
children.push(num([bold('Cập nhật (Update): '), run('hiệu chỉnh θ của người học và b của câu theo độ chênh giữa kết quả thực tế và dự đoán.')]));
children.push(num([bold('Lưu (Persist): '), run('ghi θ vào '), code('user_theta'), run(', ghi b cùng thống kê vào '), code('question_irt'), run('.')]));
children.push(spacer());
children.push(...codeBlock([
  'Người học                FE (hoc-thong-minh)        Server                 SQLite',
  '   │                          │                        │                      │',
  '   │   mở trang luyện tập     │                        │                      │',
  '   │─────────────────────────▶│  POST /adaptive-next   │                      │',
  '   │                          │───────────────────────▶│  đọc θ (user_theta)  │',
  '   │                          │                        │─────────────────────▶│',
  '   │                          │                        │  lấy 10 câu (ScoreUp)│',
  '   │                          │                        │  chọn min |b − θ|    │',
  '   │   hiển thị câu vừa sức    │◀───────────────────────│                      │',
  '   │◀─────────────────────────│                        │                      │',
  '   │   chọn đáp án            │                        │                      │',
  '   │─────────────────────────▶│  POST /quiz/attempt    │                      │',
  '   │                          │───────────────────────▶│  chấm correct/score  │',
  '   │                          │                        │  updateIrt(): θ↑ b↕  │',
  '   │                          │                        │─────────────────────▶│ ghi θ, b',
  '   │   phản hồi + câu kế tiếp  │◀───────────────────────│                      │',
  '   ▼                          ▼                        ▼                      ▼',
], 'Sơ đồ tuần tự một lượt làm bài thích ứng.'));

// ===== 4. MÔ HÌNH TOÁN HỌC =====
children.push(H1('4. Mô hình toán học'));
children.push(H2('4.1. Hàm xác suất 1PL'));
children.push(P([run('Xác suất người học năng lực '), code('θ'), run(' trả lời đúng câu độ khó '), code('b'), run(':')]));
children.push(...codeBlock(['p = P(đúng | θ, b) = σ(θ − b) = 1 / (1 + exp( −(θ − b) ))']));
children.push(P([bold('Hiện thực trong mã nguồn:')]));
children.push(...codeBlock(['const p = 1 / (1 + Math.exp(-(theta - b)));']));

children.push(H2('4.2. Bảng giá trị tham chiếu'));
children.push(P([run('Hàm chỉ phụ thuộc hiệu '), code('θ − b'), run(':')]));
children.push(table(
  ['θ − b', 'p (xác suất đúng)', 'Diễn giải'],
  [
    ['−2.0', '0.119', 'Câu khó hơn nhiều so với năng lực'],
    ['−1.0', '0.269', 'Câu hơi quá sức'],
    ['−0.5', '0.378', 'Hơi khó'],
    ['0.0', '0.500', 'Vừa sức — thông tin tối đa'],
    ['+0.5', '0.622', 'Hơi dễ'],
    ['+1.0', '0.731', 'Câu hơi dễ'],
    ['+2.0', '0.881', 'Câu dễ hơn nhiều so với năng lực'],
  ],
  [2200, 3200, 3960],
));

children.push(H2('4.3. Hàm thông tin câu hỏi (Item Information)'));
children.push(P([run('Trong mô hình 1PL, "lượng thông tin" một câu mang lại về năng lực θ là:')]));
children.push(...codeBlock(['I(θ) = p(θ) · (1 − p(θ))     với p(θ) = σ(θ − b)']));
children.push(P([run('Hàm này đạt cực đại khi '), code('p = 0.5'), run(', tức khi '), code('θ = b'), run(', với giá trị '), code('I_max = 0.25'), run('. Đây chính là cơ sở lý thuyết cho chiến lược chọn câu "b gần θ nhất" (Mục 8): câu vừa sức cho thông tin tối đa, giúp ước lượng θ hội tụ nhanh nhất. Sai số chuẩn của ước lượng năng lực giảm theo tổng thông tin tích luỹ: '), code('SE(θ) ≈ 1 / √(Σ I)'), run('.')]));

// ===== 5. LƯU TRỮ =====
children.push(H1('5. Lưu trữ dữ liệu (SQLite)'));
children.push(P('IRT của Tizia dùng hai bảng chuyên dụng, được tạo tự động khi nạp module learning context.'));
children.push(H2('5.1. Bảng user_theta — năng lực người học'));
children.push(...codeBlock([
  'CREATE TABLE IF NOT EXISTS user_theta (',
  '  user_id      INTEGER NOT NULL,',
  "  subject_id   TEXT    NOT NULL DEFAULT '',  -- '' = global",
  '  theta        REAL    NOT NULL DEFAULT 0,   -- IRT ability, -3..+3',
  '  n_attempts   INTEGER NOT NULL DEFAULT 0,',
  '  updated_at   INTEGER NOT NULL,',
  '  PRIMARY KEY (user_id, subject_id)',
  ');',
]));
children.push(table(
  ['Cột', 'Kiểu', 'Ý nghĩa'],
  [
    [code('user_id'), 'INTEGER', 'Khoá ngoại tới users.id'],
    [code('subject_id'), 'TEXT', "Mã môn; '' = năng lực tổng quát (đảm bảo tính đơn chiều)"],
    [code('theta'), 'REAL', 'Năng lực θ hiện tại, miền [−3, +3]'],
    [code('n_attempts'), 'INTEGER', 'Số câu đã làm — đại diện độ tin cậy của ước lượng'],
    [code('updated_at'), 'INTEGER', 'Mốc thời gian cập nhật (epoch ms)'],
  ],
  [2200, 1500, 5660],
));
children.push(H2('5.2. Bảng question_irt — tham số câu hỏi'));
children.push(...codeBlock([
  'CREATE TABLE IF NOT EXISTS question_irt (',
  '  question_id  TEXT    PRIMARY KEY,         -- ScoreUp question id',
  '  subject_id   TEXT,',
  '  b            REAL    NOT NULL DEFAULT 0,  -- difficulty, -3..+3',
  '  a            REAL    NOT NULL DEFAULT 1,  -- discrimination (chưa dùng)',
  '  n_attempts   INTEGER NOT NULL DEFAULT 0,',
  '  n_correct    INTEGER NOT NULL DEFAULT 0,',
  '  updated_at   INTEGER NOT NULL',
  ');',
]));
children.push(table(
  ['Cột', 'Kiểu', 'Ý nghĩa'],
  [
    [code('question_id'), 'TEXT', 'Khoá chính — id câu hỏi từ ScoreUp'],
    [code('b'), 'REAL', 'Độ khó câu, miền [−3, +3]'],
    [code('a'), 'REAL', [bold('Độ phân biệt — đã có cột nhưng CHƯA dùng'), run(' (luôn = 1; để dành nâng cấp 2PL).')]],
    [code('n_attempts'), 'INTEGER', 'Tổng lượt trả lời câu này'],
    [code('n_correct'), 'INTEGER', [run('Số lượt đúng — cho phép tính tỉ lệ đúng '), code('n_correct/n_attempts')]],
  ],
  [2200, 1400, 5760],
));
children.push(H2('5.3. Hiệu năng truy vấn'));
children.push(P([run('Mọi thao tác đọc/ghi θ và b dùng '), bold('câu lệnh đã biên dịch sẵn (prepared statements)'), run(' của better-sqlite3 và mệnh đề '), code('INSERT … ON CONFLICT … DO UPDATE'), run(' (upsert) để cập nhật nguyên tử trong một lượt, tránh đọc-rồi-ghi nhiều vòng.')]));

// ===== 6. CẬP NHẬT THAM SỐ =====
children.push(pageBreak());
children.push(H1('6. Cập nhật tham số sau mỗi câu — updateIrt()'));
children.push(P([code('updateIrt()'), run(' được gọi sau khi chấm xong mỗi câu (cho cả đúng lẫn sai). Nó áp dụng quy tắc cập nhật kiểu gradient: dịch chuyển θ và b theo độ chênh giữa kết quả thực tế '), code('y ∈ {0,1}'), run(' và dự đoán '), code('p'), run('.')]));
children.push(H2('6.1. Công thức'));
children.push(...codeBlock([
  'p      = σ(θ − b) = 1 / (1 + exp(−(θ − b)))        // dự đoán xác suất đúng',
  'θ_new  = clamp( θ + α · (y − p),  −3, +3 )         // α = 0.20  (cập nhật năng lực)',
  'b_new  = clamp( b + β · (p − y),  −3, +3 )         // β = 0.05  (cập nhật độ khó)',
]));
children.push(H2('6.2. Mã nguồn thực tế'));
children.push(...codeBlock([
  "export function updateIrt({ user_id, question_id, subject_id = '', correct }) {",
  '  if (!user_id || !question_id) return;',
  "  const cur  = _getThetaStmt.get(user_id, subject_id || '');",
  '  const theta = cur?.theta ?? 0;',
  '  const qIrt = _getQuestionIrtStmt.get(question_id);',
  '  const b = qIrt?.b ?? 0;',
  '  const p = 1 / (1 + Math.exp(-(theta - b)));',
  '  const newTheta = Math.max(-3, Math.min(3, theta + 0.2  * ((correct ? 1 : 0) - p)));',
  '  const newB     = Math.max(-3, Math.min(3, b     + 0.05 * (p - (correct ? 1 : 0))));',
  '  // upsert user_theta(newTheta, n_attempts+1) + question_irt(newB, n_attempts+1, n_correct+correct)',
  '}',
]));

children.push(H2('6.3. Nền tảng lý thuyết: đây là hạ-gradient trên log-likelihood Rasch'));
children.push(P('Quy tắc cập nhật tưởng chừng "heuristic" ở trên thực ra chính là một bước gradient ngẫu nhiên (Stochastic Gradient Ascent) làm cực đại hoá hàm hợp lý (log-likelihood) của mô hình Rasch. Chứng minh ngắn gọn:'));
children.push(P([run('Với một câu trả lời '), code('y ∈ {0,1}'), run(' và '), code('p = σ(θ − b)'), run(', log-likelihood Bernoulli của quan sát là:')]));
children.push(...codeBlock(['ℓ(θ, b) = y · ln(p) + (1 − y) · ln(1 − p)']));
children.push(P('Lấy đạo hàm riêng (dùng tính chất σ′ = σ(1−σ)):'));
children.push(...codeBlock([
  '∂ℓ/∂θ = (y − p)',
  '∂ℓ/∂b = −(y − p) = (p − y)',
]));
children.push(P([run('Áp dụng hạ-gradient với bước học '), code('α'), run(' cho θ và '), code('β'), run(' cho b:')]));
children.push(...codeBlock([
  'θ_new = θ + α · ∂ℓ/∂θ = θ + α · (y − p)     ← khớp chính xác mã nguồn',
  'b_new = b + β · ∂ℓ/∂b = b + β · (p − y)     ← khớp chính xác mã nguồn',
]));
children.push(callout('🎓 Ý nghĩa', [
  'Tizia KHÔNG dùng một heuristic tuỳ tiện: quy tắc cập nhật là một bước SGD chuẩn trên hàm hợp lý của mô hình Rasch. Đây là phương pháp ước lượng trực tuyến hợp lý, đánh đổi độ chính xác (so với MLE toàn cục) lấy khả năng cập nhật tức thời theo dòng dữ liệu.',
]));

children.push(H2('6.4. Vai trò các hệ số α, β'));
children.push(table(
  ['Hệ số', 'Giá trị', 'Vai trò & lý do chọn'],
  [
    [[code('α'), run(' (theta)')], '0.20', 'Bước học của năng lực. Lớn hơn → θ phản ứng nhanh nhưng nhiễu hơn.'],
    [[code('β'), run(' (b)')], '0.05', [bold('Cố ý nhỏ hơn α (gấp 4 lần). '), run('Độ khó câu là "neo" tham chiếu, cần ổn định — chỉ trôi chậm khi tích luỹ nhiều lượt.')]],
    ['clamp', '[−3, 3]', 'Chặn biên, tránh θ/b chạy ra vô cực sau chuỗi đúng/sai dài.'],
  ],
  [1700, 1300, 6360],
));
children.push(H2('6.5. Tính ổn định và vấn đề định danh (identifiability)'));
children.push(P([run('Vì cùng phần dư '), code('(y − p)'), run(' đồng thời đẩy θ lên và kéo b xuống, mô hình có một bất định cố hữu: cộng cùng một hằng số vào tất cả θ và b sẽ cho cùng xác suất. Tizia kiềm chế hiện tượng này bằng hai cơ chế: (1) '), code('β ≪ α'), run(' khiến b gần như là điểm neo cố định cho θ "trượt" theo; (2) kẹp biên '), code('[−3, 3]'), run(' chặn trôi vô hạn. Về dài hạn, để có thang đo neo tuyệt đối nên hiệu chỉnh b theo lô định kỳ (xem Mục 15).')]));
children.push(callout('🎯 Hành vi trực giác', [
  'Đúng một câu mà mô hình cho là KHÓ (p thấp) → θ tăng MẠNH, b của câu giảm nhẹ.',
  'Sai một câu mà mô hình cho là DỄ (p cao) → θ giảm mạnh, b của câu tăng.',
  'Đúng câu đã được dự đoán dễ (p ≈ 1) → (y − p) ≈ 0 → θ gần như không đổi: không có thông tin mới.',
]));

// ===== 7. VÍ DỤ =====
children.push(H1('7. Ví dụ minh hoạ bằng số'));
children.push(P([run('Một học sinh θ = 0.0 gặp câu khó b = 1.0. Dự đoán: '), code('p = σ(0 − 1) = 1/(1+e¹) ≈ 0.269'), run('. Bảng dưới mô phỏng diễn tiến qua nhiều lượt (α = 0.20, β = 0.05; làm tròn 3 chữ số):')]));
children.push(table(
  ['Lượt', 'Tình huống', 'θ trước', 'b trước', 'p', 'KQ', 'θ sau', 'b sau'],
  [
    ['1', 'Đúng câu khó', '0.000', '1.000', '0.269', '✓ (1)', '0.146', '0.963'],
    ['2', 'Đúng tiếp', '0.146', '0.963', '0.307', '✓ (1)', '0.285', '0.928'],
    ['3', 'Làm sai', '0.285', '0.928', '0.345', '✗ (0)', '0.216', '0.945'],
    ['4', 'Sai tiếp', '0.216', '0.945', '0.327', '✗ (0)', '0.151', '0.961'],
    ['5', 'HS yếu đúng câu rất khó', '−1.000', '2.000', '0.047', '✓ (1)', '−0.809', '1.952'],
  ],
  [620, 2680, 1010, 1010, 880, 760, 1190, 1200],
));
children.push(spacer());
children.push(P([bold('Diễn giải lượt 1 (chi tiết): '), run('p = 1/(1+exp(−(0−1))) = 1/(1+2.718) = 0.269. Vì trả lời đúng (y=1): θ_new = 0 + 0.2·(1 − 0.269) = +0.146; b_new = 1 + 0.05·(0.269 − 1) = 0.963.')]));
children.push(callout('🔎 Nhận xét', [
  'Một cú "đúng câu rất khó" của HS yếu (lượt 5) đẩy θ lên +0.19 — rất nhanh — vì mô hình "bất ngờ": phần dư (y − p) lớn (≈ 0.95).',
  'Độ khó b thay đổi chậm hơn nhiều so với θ vì β (0.05) chỉ bằng 1/4 của α (0.20). Sau 4 lượt, b chỉ dao động trong khoảng 0.93–0.96.',
  'Khi làm sai (lượt 3–4), θ giảm và b TĂNG (câu được coi khó hơn) — đúng kỳ vọng.',
]));

// ===== 8. CHỌN CÂU =====
children.push(pageBreak());
children.push(H1('8. Chọn câu thích ứng — nextAdaptiveQuestion()'));
children.push(H2('8.1. Thuật toán'));
children.push(num([run('Đọc '), code('θ'), run(' của người học trong môn đang học.')]));
children.push(num([run('Lấy lô ngẫu nhiên '), bold('10 câu'), run(' từ ScoreUp theo môn ('), code('scoreup.getRandomQuestions'), run('), loại các câu vừa làm ('), code('exclude_ids'), run(').')]));
children.push(num([run('Tra '), code('b'), run(' từng câu trong '), code('question_irt'), run(' (câu chưa có dữ liệu → b = 0).')]));
children.push(num([run('Chấm mỗi ứng viên: '), code('score = −|b − θ| + bonus_khám_phá'), run('; chọn câu điểm cao nhất.')]));
children.push(H2('8.2. Vì sao tiêu chí −|b − θ|?'));
children.push(P([run('Như đã chứng minh ở Mục 4.3, thông tin câu mang lại '), code('I(θ) = p(1−p)'), run(' đạt cực đại tại '), code('θ = b'), run('. Do đó chọn câu có '), code('|b − θ|'), run(' nhỏ nhất chính là xấp xỉ chọn câu '), bold('tối đa hoá thông tin Fisher'), run(' — giúp θ hội tụ nhanh và giảm sai số chuẩn nhanh nhất. Đây là phiên bản đơn giản hoá của quy tắc chọn câu trong CAT chuẩn.')]));
children.push(H2('8.3. Khởi động nguội (cold-start) và phần thưởng khám phá'));
children.push(P([run('Câu chưa từng có lượt trả lời (chưa có dòng trong '), code('question_irt'), run(') được cộng '), code('+0.1'), run(' vào điểm chọn. Cơ chế này tạo cân bằng khai thác/khám phá (exploitation/exploration): hệ vừa ưu tiên câu vừa sức, vừa thỉnh thoảng thử câu mới để dần hiệu chỉnh độ khó cho toàn kho.')]));
children.push(H2('8.4. Mã nguồn (trích)'));
children.push(...codeBlock([
  'const theta = thetaRow?.theta ?? 0;',
  'let best = candidates[0], bestScore = -Infinity;',
  'for (const q of candidates) {',
  '  const irt = irtMap.get(String(q.id));',
  '  const b = irt?.b ?? 0;',
  '  const score = -Math.abs(b - theta) + (irt ? 0 : 0.1);   // +0.1: câu mới',
  '  if (score > bestScore) { bestScore = score; best = q; }',
  '}',
  'return { question: best, theta, expected_difficulty: irtMap.get(String(best.id))?.b ?? 0 };',
]));

// ===== 9. TÍCH HỢP =====
children.push(H1('9. Tích hợp vào luồng chấm bài'));
children.push(P([run('IRT được móc vào endpoint '), code('POST /api/quiz/attempt'), run(' trong '), code('server/index.js'), run('. Sau khi tính '), code('correct'), run(', '), code('score'), run(' và ghi nhận lượt làm, hệ thống gọi '), code('updateIrt()'), run(' cho cả câu đúng lẫn sai:')]));
children.push(...codeBlock([
  '// server/index.js (~dòng 650)',
  'try {',
  '  updateIrt({',
  '    user_id: req.user.id,',
  '    question_id: q.id,',
  "    subject_id: q.subject_id || '',",
  '    correct,',
  '  });',
  '} catch {}',
]));
children.push(H2('9.1. Cách suy ra "correct" cho IRT'));
children.push(bullet([bold('MCQ một đáp án: '), run('correct = 1 nếu chọn đúng đáp án, ngược lại 0.')]));
children.push(bullet([bold('MCQ nhiều đáp án: '), run('điểm phần = max(0, (số chọn đúng − số chọn sai) / tổng đáp án đúng). Cờ '), code('correct'), run(' = 1 chỉ khi chọn TRỌN VẸN đúng và không chọn sai. IRT dùng cờ nhị phân này.')]));
children.push(...codeBlock([
  'const intersect = [...correctSet].filter(k => userSet.has(k)).length;',
  'const wrong     = [...userSet].filter(k => !correctSet.has(k)).length;',
  'score   = Math.max(0, (intersect - wrong) / correctSet.size);',
  'correct = (intersect === correctSet.size && wrong === 0);   // mcq_multi',
]));

// ===== 10. API =====
children.push(H1('10. Các API liên quan'));
children.push(table(
  ['Phương thức & Đường dẫn', 'Mục đích', 'Trả về chính'],
  [
    [[code('GET'), run(' /api/learning/theta')], 'Lấy năng lực θ theo môn', [code('theta'), run(', '), code('n_attempts'), run(', '), code('level')]],
    [[code('POST'), run(' /api/quiz/adaptive-next')], 'Lấy 1 câu kế tiếp vừa sức', [code('question'), run(', '), code('theta'), run(', '), code('expected_difficulty')]],
    [[code('POST'), run(' /api/quiz/attempt')], 'Chấm câu — kích hoạt cập nhật IRT', [code('correct'), run(', '), code('score'), run(', '), code('explanation')]],
    [[code('GET'), run(' /api/skills/next-recommended')], 'Gợi ý kỹ năng kế tiếp (knowledge graph)', 'Danh sách skill + % prereq'],
    [[code('GET'), run(' /api/skills/prereq/:code')], 'Cây tiên quyết của 1 kỹ năng', [code('prereqs'), run(', '), code('unlocks')]],
  ],
  [3260, 3300, 2800],
));

// ===== 11. UX =====
children.push(H1('11. Trải nghiệm người dùng'));
children.push(H2('11.1. Trang "Học thông minh"'));
children.push(P([code('public/hoc-thong-minh.html'), run(' là giao diện trực tiếp dùng IRT. Khi mở, trang gọi song song '), code('loadTheta()'), run(', '), code('loadRecommendations()'), run(' và '), code('loadNextQuestion()'), run('.')]));
children.push(bullet([bold('Thẻ trình độ: '), run('hiển thị nhãn năng lực (vd "Khá"), θ với 2 chữ số thập phân, số câu đã làm.')]));
children.push(bullet([bold('Thanh đo θ: '), run('quy đổi θ ∈ [−3, 3] về thang 0–100% bằng '), code('(θ + 3) / 6 × 100'), run('.')]));
children.push(bullet([bold('Câu thích ứng: '), run('trả lời xong sẽ nạp câu kế tiếp qua '), code('/api/quiz/adaptive-next'), run(', loại 20 câu gần nhất.')]));
children.push(H2('11.2. Chế độ "đấu trí" (Combat by quiz)'));
children.push(P([code('public/js/combat-by-quiz.js'), run(' tái sử dụng '), code('/api/quiz/adaptive-next'), run(' để cấp câu cho các màn chơi gamified, đảm bảo độ khó trong trận bám theo năng lực người chơi.')]));

// ===== 12. QUAN HỆ BKT =====
children.push(pageBreak());
children.push(H1('12. Quan hệ với BKT — hệ thích ứng thứ hai'));
children.push(P([run('Song song với IRT, Tizia còn vận hành '), bold('Bayesian Knowledge Tracing (BKT)'), run(' trong '), code('server/adaptive.js'), run('. Hai hệ trả lời hai câu hỏi khác nhau và bổ trợ nhau:')]));
children.push(table(
  ['Tiêu chí', 'IRT (learning context)', 'BKT (adaptive.js)'],
  [
    ['Đại lượng theo dõi', 'Năng lực θ liên tục', 'Xác suất thông thạo p_known ∈ [0,1]'],
    ['Theo đơn vị nào', 'Theo MÔN (subject_id)', 'Theo KỸ NĂNG (skill)'],
    ['Câu hỏi trả lời', '"Câu nào vừa sức?"', '"Đã thạo kỹ năng này chưa? Học gì tiếp?"'],
    ['Tham số', 'b (độ khó), α, β', 'pInit 0.20, pLearn 0.20, pSlip 0.10, pGuess 0.20'],
    ['Cập nhật', 'SGD trên log-likelihood', 'Suy diễn Bayes (posterior + cơ hội học)'],
    ['Ngưỡng/đầu ra', 'Nhãn trình độ', 'threshold 0.85 = thạo; cứu trợ khi sai 2 lần liên tiếp'],
  ],
  [2200, 3380, 3780],
));
children.push(P([run('Công thức cập nhật BKT (khi quan sát kết quả đúng): hậu nghiệm '), code('P(L|đúng) = P(L)(1−slip) / [P(L)(1−slip) + (1−P(L))·guess]'), run(', sau đó cộng cơ hội học '), code('P_next = P(L|obs) + (1−P(L|obs))·pLearn'), run('. BKT có thể forward sự kiện sang dịch vụ Limio (nếu cấu hình '), code('LIMIO_URL'), run(') nhưng vẫn chạy độc lập khi không có Limio.')]));
children.push(callout('🧩 Phối hợp', [
  'IRT chọn ĐỘ KHÓ câu hỏi vừa sức trong một môn; BKT quyết định NÊN HỌC KỸ NĂNG NÀO tiếp theo và khi nào cần ôn lại. Knowledge graph (skill_prereq) cung cấp thứ tự tiên quyết giữa các kỹ năng.',
]));

// ===== 13. NHÃN =====
children.push(H1('13. Quy đổi θ sang nhãn trình độ — thetaLabel()'));
children.push(table(
  ['Khoảng θ', 'Nhãn hiển thị'],
  [
    ['θ ≥ 1.5', 'Xuất sắc'],
    ['0.5 ≤ θ < 1.5', 'Khá'],
    ['−0.5 ≤ θ < 0.5', 'Trung bình'],
    ['−1.5 ≤ θ < −0.5', 'Đang học'],
    ['θ < −1.5', 'Cần ôn lại'],
  ],
  [4680, 4680],
));

// ===== 14. SO SÁNH =====
children.push(H1('14. So sánh với IRT chuẩn và CTT'));
children.push(table(
  ['Tiêu chí', 'Tizia (1PL-lite)', 'IRT chuẩn (2PL/3PL)', 'CTT cổ điển'],
  [
    ['Tham số câu', 'b', 'a, b, c', 'p-value, point-biserial'],
    ['Ước lượng θ', 'SGD trực tuyến', 'MLE / EAP', 'Tổng điểm thô'],
    ['Độ phân biệt a', 'Có cột, chưa dùng', 'Ước lượng đầy đủ', 'point-biserial'],
    ['Đoán mò c', 'Không', 'Có (3PL)', 'Không'],
    ['Hiệu chỉnh', 'Trôi dần thời gian thực', 'Theo lô (MLE)', 'Sau kỳ thi'],
    ['Độ tin cậy', 'Không tính', 'KR-20 / TIF', 'Cronbach α'],
    ['Mục tiêu', 'Cá nhân hoá luyện tập', 'Khảo thí chuẩn hoá', 'Phân tích đề'],
  ],
  [2160, 2520, 2440, 2240],
));
children.push(spacer());
children.push(callout('📌 Kết luận', [
  [bold('Tizia dùng IRT (biến thể 1PL gọn nhẹ, cập nhật bằng SGD), không dùng CTT. '), run('Cách tiếp cận này tối ưu cho cá nhân hoá luồng học theo thời gian thực, đánh đổi độ chặt chẽ tâm trắc của một hệ khảo thí chuẩn hoá.')],
]));

// ===== 15. HẠN CHẾ & LỘ TRÌNH =====
children.push(H1('15. Hạn chế và lộ trình nâng cấp'));
children.push(H2('15.1. Hạn chế hiện tại'));
children.push(bullet('Quy tắc SGD trực tuyến kém ổn định khi số lượt còn ít (ước lượng θ nhiễu lúc đầu).'));
children.push(bullet([run('Bỏ qua độ phân biệt (cột '), code('a'), run(' = 1) và không mô hình hoá xác suất đoán mò c.')]));
children.push(bullet('Bất định định danh giữa θ và b (Mục 6.5) — cần neo bằng hiệu chỉnh theo lô.'));
children.push(bullet([run('Lô ứng viên chỉ 10 câu/lần; nếu lô không chứa câu sát θ, lựa chọn chưa tối ưu.')]));
children.push(bullet('Không có chỉ số độ tin cậy toàn bài (Cronbach α) hay phân tích phương án nhiễu trực tuyến.'));
children.push(H2('15.2. Hướng nâng cấp đề xuất'));
children.push(num([bold('Bật mô hình 2PL: '), run('kích hoạt cột '), code('a'), run('; xác suất thành '), code('σ(a(θ−b))'), run(', thông tin thành '), code('I(θ)=a²·p(1−p)'), run('. Chọn câu theo tối đa thông tin Fisher thay vì chỉ |b−θ|.')]));
children.push(num([bold('Hiệu chỉnh theo lô định kỳ: '), run('chạy MLE/EAP ngoại tuyến trên '), code('question_attempts'), run(' để "neo" lại a, b chính xác, khử bất định định danh.')]));
children.push(num([bold('CAT chuẩn: '), run('thêm tiêu chí dừng theo sai số chuẩn '), code('SE(θ) = 1/√(Σ I) < ngưỡng'), run(', và kiểm soát phơi nhiễm câu (item exposure).')]));
children.push(num([bold('Lớp CTT bổ trợ: '), run('tính p-value, point-biserial, Cronbach α từ '), code('question_attempts'), run(' để báo cáo chất lượng đề cho giáo viên.')]));
children.push(num([bold('Tinh chỉnh α, β theo n_attempts: '), run('giảm bước học khi tích luỹ nhiều dữ liệu (lịch suy giảm) để ổn định ước lượng dần.')]));

// ===== 16. PHỤ LỤC =====
children.push(pageBreak());
children.push(H1('16. Phụ lục'));
children.push(H2('16.1. Tham số mô hình'));
children.push(table(
  ['Tham số', 'Giá trị', 'Ghi chú'],
  [
    ['α (bước học θ)', '0.20', 'Hệ số SGD cho năng lực'],
    ['β (bước học b)', '0.05', 'Hệ số SGD cho độ khó (β ≪ α)'],
    ['Miền θ, b', '[−3, +3]', 'Đơn vị logit, kẹp biên'],
    ['θ, b khởi tạo', '0.0', 'Trung tính cho người/câu mới'],
    ['Bonus khám phá', '+0.1', 'Cộng cho câu chưa có dữ liệu IRT'],
    ['Kích thước lô câu', '10', 'Số câu lấy mỗi lần từ ScoreUp'],
    ['I_max (1PL)', '0.25', 'Thông tin cực đại tại θ = b'],
  ],
  [3200, 1700, 4460],
));
children.push(H2('16.2. Bản đồ mã nguồn'));
children.push(table(
  ['Thành phần', 'Tệp : dòng'],
  [
    ['Schema user_theta / question_irt', [code('server/contexts/learning/index.js : 33–51')]],
    ['Hàm cập nhật updateIrt()', [code('server/contexts/learning/index.js : 124–139')]],
    ['Chọn câu nextAdaptiveQuestion()', [code('server/contexts/learning/index.js : 187–227')]],
    ['API theta / adaptive-next', [code('server/contexts/learning/index.js : 244–263')]],
    ['Nhãn trình độ thetaLabel()', [code('server/contexts/learning/index.js : 288–294')]],
    ['Điểm tích hợp chấm bài', [code('server/index.js : 650–658')]],
    ['BKT (hệ thích ứng thứ 2)', [code('server/adaptive.js : 30–141')]],
    ['Giao diện Học thông minh', [code('public/hoc-thong-minh.html')]],
    ['Câu hỏi cho màn đấu trí', [code('public/js/combat-by-quiz.js')]],
  ],
  [3800, 5560],
));
children.push(H2('16.3. Thuật ngữ'));
children.push(table(
  ['Thuật ngữ', 'Giải thích'],
  [
    ['θ (theta)', 'Năng lực tiềm ẩn của người học trên thang logit.'],
    ['b', 'Độ khó câu hỏi trên cùng thang với θ.'],
    ['a', 'Độ phân biệt — độ dốc ICC (chưa dùng trong Tizia).'],
    ['c', 'Tham số đoán mò — cận dưới xác suất đúng (3PL).'],
    ['σ (sigmoid)', 'Hàm logistic σ(x) = 1/(1+e⁻ˣ).'],
    ['ICC', 'Item Characteristic Curve — đường P(đúng) theo θ.'],
    ['Item Information', 'Lượng thông tin câu cung cấp về θ; I(θ)=p(1−p) cho 1PL.'],
    ['SGD', 'Stochastic Gradient Descent/Ascent — cập nhật theo từng quan sát.'],
    ['MLE / EAP', 'Các phương pháp ước lượng tham số theo lô (hợp lý cực đại / kỳ vọng hậu nghiệm).'],
    ['CAT', 'Computerized Adaptive Testing — trắc nghiệm thích ứng máy tính.'],
    ['BKT', 'Bayesian Knowledge Tracing — theo dõi thông thạo kỹ năng theo Bayes.'],
  ],
  [2600, 6760],
));
children.push(H2('16.4. Tài liệu tham khảo'));
children.push(bullet('Rasch, G. (1960). Probabilistic Models for Some Intelligence and Attainment Tests.'));
children.push(bullet('Lord, F. M. (1980). Applications of Item Response Theory to Practical Testing Problems.'));
children.push(bullet('Baker, F. B. (2001). The Basics of Item Response Theory (2nd ed.).'));
children.push(bullet('Embretson, S. E., & Reise, S. P. (2000). Item Response Theory for Psychologists.'));
children.push(bullet('van der Linden, W. J., & Glas, C. A. W. (2010). Elements of Adaptive Testing.'));
children.push(bullet('Corbett, A. T., & Anderson, J. R. (1995). Knowledge Tracing: Modeling the Acquisition of Procedural Knowledge.'));
children.push(spacer());
children.push(new Paragraph({ spacing: { before: 240 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: '— Hết —', italics: true, color: '9CA3AF', size: 20 })] }));

// ── Tài liệu ──
const doc = new Document({
  creator: 'Tizia', title: 'Tizia ứng dụng IRT cho trắc nghiệm thích ứng (bản chi tiết)',
  styles: {
    default: { document: { run: { font: 'Arial', size: 22, color: '1F2937' } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 30, bold: true, color: ACCENT, font: 'Arial' },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: ACCENT_LIGHT, space: 4 } } } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 25, bold: true, color: '1F3A6E', font: 'Arial' },
        paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 23, bold: true, color: '374151', font: 'Arial' },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullets', levels: [
        { level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 280 } } } },
        { level: 1, format: LevelFormat.BULLET, text: '◦', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 280 } } } },
      ] },
      { reference: 'numbers', levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 600, hanging: 300 } } } },
      ] },
    ],
  },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({
      alignment: AlignmentType.CENTER, border: { top: { style: BorderStyle.SINGLE, size: 4, color: ACCENT_LIGHT, space: 6 } },
      children: [new TextRun({ text: 'Tizia — Hướng dẫn IRT (bản chi tiết)  ·  Trang ', size: 16, color: '9CA3AF' }),
        new TextRun({ children: [PageNumber.CURRENT], size: 16, color: '9CA3AF' })] })] }) },
    children,
  }],
});

const out = path.join('/Users/mac/Documents/Code/EduVerse', 'Tizia-IRT-Huong-dan.docx');
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(out, buf); console.log('WROTE ' + out + ' (' + buf.length + ' bytes)'); });
