/* GAP 10 — 6 ca lâm sàng Việt Nam cho Patient Simulation
 *
 * Schema tương thích với engine NPC AI của Pharmacy AI:
 *   - persona     : tính cách BN khi đối thoại (system prompt)
 *   - hiddenInfo  : BN chỉ tiết lộ khi SV hỏi đúng
 *   - rubric      : tiêu chí chấm SOAP
 *   - drps        : Drug-Related Problems / điểm bẫy
 *   - fatalIf     : auto-fail nếu SV làm điều này (vd: tư vấn kháng sinh cho viêm họng virus)
 *   - bonusIf     : điểm thưởng nếu SV bắt được DRP
 *
 * Mỗi ca có target audience: SV Dược/Y năm 3-5, phù hợp môi trường VN.
 */

export const PATIENT_CASES = [
  // ─────────────────────────────────────────────────────────────
  // CA 1 — SỐT XUẤT HUYẾT DENGUE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'sxh-001',
    title: 'Sốt xuất huyết Dengue ngày 4',
    domain: 'medical',
    difficulty: 'medium',
    icon: '🦟',
    color: '#dc2626',
    audience: 'Y khoa năm 4-5 / Dược lâm sàng',
    chiefComplaint: 'Sốt cao 4 ngày, hôm nay người mệt lả, đau bụng dữ dội vùng gan',
    patient: {
      initials: 'L.V.T',
      ageYears: 28, sex: 'M',
      job: 'Nhân viên văn phòng Q.7, TP.HCM',
      comorbidities: [],
      currentMeds: ['Paracetamol 500mg uống mỗi 6h (tự mua)'],
      allergies: [],
    },
    history: `Sốt cao 39-40°C 4 ngày, dùng Paracetamol thấy giảm rồi sốt lại. Hôm nay (ngày 4) sốt đã giảm nhưng người mệt lả hơn, đau bụng vùng thượng vị và hạ sườn phải, buồn nôn, có nốt xuất huyết dưới da ở 2 cẳng tay. Tiểu ít đi từ tối hôm qua. Đã đến cơ sở y tế khám.`,
    vitals: { temp: 37.8, hr: 110, bp: '95/60', spo2: 97, rr: 22 },
    labs: {
      'Hct': '52% (tăng từ 42% baseline)',
      'Tiểu cầu': '45 G/L (giảm mạnh)',
      'NS1': 'Đã âm tính (ngày 4)',
      'IgM Dengue': 'Dương tính',
      'AST/ALT': '180/220 U/L',
    },
    persona: `Bạn là Lê Văn T., 28 tuổi, nhân viên văn phòng. Bạn rất mệt, nói chậm, hay nhăn nhó vì đau bụng. Bạn lo lắng vì đã sốt 4 ngày, nghe nói SXH ngày 4-6 nguy hiểm. Bạn cố giấu việc tự ý mua thêm Aspirin vì sợ bị mắng — chỉ nói nếu SV hỏi cụ thể "có dùng thuốc gì khác không?".`,
    hiddenInfo: {
      'aspirin': 'Em có mua thêm Aspirin 500mg ở nhà thuốc gần nhà 2 viên/ngày từ ngày 2 vì thấy bạn em bảo Aspirin hạ sốt nhanh hơn.',
      'tiểu ít': 'Từ chiều qua em đi tiểu rất ít, nước tiểu sẫm màu.',
      'đau bụng': 'Đau âm ỉ vùng dưới sườn phải, đau hơn khi ấn vào.',
      'chảy máu': 'Có ạ, sáng nay đánh răng thấy chảy máu chân răng nhiều.',
    },
    drps: [
      { type: 'major', text: 'Tự ý dùng Aspirin trong SXH → tăng nguy cơ chảy máu nặng (chống chỉ định)' },
      { type: 'major', text: 'Liều Paracetamol > 60mg/kg/ngày (BN 60kg, dùng 4x500mg = 2g/ngày, an toàn nhưng cần theo dõi AST/ALT đang tăng)' },
      { type: 'minor', text: 'Không bù dịch điện giải đường uống dù mệt + tiểu ít' },
    ],
    fatalIf: [
      { trigger: 'kê.*aspirin|cho.*aspirin|dùng.*aspirin|tiếp.*aspirin', reason: 'Aspirin tuyệt đối chống chỉ định trong SXH — tăng nguy cơ xuất huyết' },
      { trigger: 'kê.*ibuprofen|cho.*ibuprofen|nsaid', reason: 'NSAIDs khác cũng chống chỉ định trong SXH' },
      { trigger: 'truyền.*nước.*nhiều|2.*lít.*nhanh|nhanh.*truyền', reason: 'Truyền dịch quá nhanh trong SXH có thể gây quá tải dịch khi vào sốc' },
    ],
    bonusIf: [
      { trigger: 'aspirin|nsaid|ibuprofen', text: 'Phát hiện DRP Aspirin' },
      { trigger: 'hematocrit|hct|cô đặc máu', text: 'Đánh giá Hct/tiểu cầu' },
      { trigger: 'nhập viện|theo dõi.*nội trú|chuyển.*viện', text: 'Quyết định nhập viện theo dõi ngày 4-6' },
      { trigger: 'oresol|bù.*điện giải|dịch.*uống', text: 'Bù dịch điện giải đường uống' },
    ],
    rubric: [
      'Phát hiện cảnh báo ngày 4-6 (giai đoạn nguy hiểm)',
      'Phát hiện và xử trí DRP Aspirin (nguy cơ chảy máu)',
      'Đánh giá dấu hiệu sốc: tiểu ít, Hct tăng, tiểu cầu giảm',
      'Quyết định nhập viện theo dõi',
      'Tư vấn bù dịch ORESOL đường uống đúng cách',
      'Hướng dẫn dấu hiệu cảnh báo cần đến viện gấp',
    ],
    openingLine: 'Em chào bác sĩ. Em sốt 4 ngày rồi, hôm nay người mệt lắm, đau bụng nữa…',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 2 — TAY CHÂN MIỆNG (TRẺ EM)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'tcm-001',
    title: 'Tay chân miệng độ 2a — bé 3 tuổi',
    domain: 'medical',
    difficulty: 'medium',
    icon: '👶',
    color: '#f97316',
    audience: 'Y khoa năm 4-5 / Dược nhi',
    chiefComplaint: 'Bé 3 tuổi sốt 2 ngày, có mụn nước tay chân, đêm qua giật mình hốt hoảng',
    patient: {
      initials: 'N.M.K (bé)',
      ageYears: 3, sex: 'F',
      job: '—',
      comorbidities: [],
      currentMeds: ['Paracetamol siro 250mg/5ml: 4ml x 4 lần/ngày (mẹ tự cho)'],
      allergies: [],
      weightKg: 14,
    },
    history: `Bé sốt 2 ngày, 38.5-39°C, có nổi mụn nước ở lòng bàn tay, bàn chân và vài nốt loét trong miệng. Bé chán ăn, quấy khóc khi ăn. Đêm qua bé giật mình hốt hoảng 3 lần khi đang ngủ, mỗi lần khoảng 30 giây. Sáng nay tay chân run nhẹ khi cầm đồ chơi. Mẹ đưa bé đi khám.`,
    vitals: { temp: 38.7, hr: 140, bp: '90/55', spo2: 98, rr: 30 },
    labs: { 'BC': '11.5 G/L', 'Tiểu cầu': '320 G/L', 'CRP': '12 mg/L' },
    persona: `Bạn là MẸ của bé K (3 tuổi). Bạn lo lắng vì đêm qua bé giật mình hốt hoảng nhiều, đọc trên mạng nói TCM nặng. Bạn nói tiếng Việt bình dân, hay kể lể chi tiết khi BS hỏi. Bé K nằm trên đùi mẹ, không tự trả lời, mẹ thay bé nói.`,
    hiddenInfo: {
      'giật mình': 'Đêm qua bé giật mình hốt hoảng 3 lần, mỗi lần khoảng 30 giây, mắt trợn ngược, sau đó bé khóc.',
      'run tay': 'Sáng nay khi bé cầm đồ chơi, em thấy tay bé run nhẹ.',
      'đi đứng': 'Bé đi không vững như mọi ngày, hay té khi đứng.',
      'tiêm chủng': 'Bé tiêm đủ vaccine theo lịch nhưng chưa tiêm vaccine TCM ạ.',
    },
    drps: [
      { type: 'major', text: 'Bé đã có dấu hiệu giật mình + run chi → độ 2a, cần nhập viện theo dõi, KHÔNG được điều trị ngoại trú' },
      { type: 'minor', text: 'Liều Paracetamol mẹ đang dùng: 250mg/5ml * 4ml = 200mg, 4 lần/ngày = 800mg ÷ 14kg ≈ 57mg/kg/ngày (hơi cao, nên giảm tần suất)' },
    ],
    fatalIf: [
      { trigger: 'cho.*về.*nhà|điều trị.*ngoại trú|về.*theo dõi.*nhà', reason: 'TCM độ 2a phải nhập viện — về nhà có thể chuyển độ nặng' },
      { trigger: 'kháng sinh|amoxic|cefax', reason: 'TCM do virus, không dùng kháng sinh trừ khi có bội nhiễm' },
      { trigger: 'aspirin', reason: 'Aspirin chống chỉ định ở trẻ em vì nguy cơ hội chứng Reye' },
    ],
    bonusIf: [
      { trigger: 'giật mình|run.*chi|độ 2a|độ 2', text: 'Phân độ TCM chính xác' },
      { trigger: 'nhập viện|nội trú', text: 'Chỉ định nhập viện đúng' },
      { trigger: 'phenobarbital|gardenal|an thần', text: 'Điều trị an thần Phenobarbital' },
      { trigger: 'mạch.*nhanh|spo2|sinh hiệu|monitor', text: 'Theo dõi sinh hiệu' },
    ],
    rubric: [
      'Phân độ TCM theo phác đồ Bộ Y tế',
      'Nhận diện dấu hiệu nặng: giật mình, run chi',
      'Chỉ định nhập viện độ 2a',
      'Liều Paracetamol theo cân nặng 10-15 mg/kg/lần',
      'Tránh dùng Aspirin/NSAIDs ở trẻ',
      'Tư vấn mẹ cách ly bé + vệ sinh',
    ],
    openingLine: 'Bác sĩ ơi, bé nhà em sốt 2 ngày rồi, đêm qua giật mình hốt hoảng em sợ lắm…',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 3 — ĐÁI THÁO ĐƯỜNG TYPE 2 LẦN ĐẦU CHẨN ĐOÁN
  // ─────────────────────────────────────────────────────────────
  {
    id: 'dtd-001',
    title: 'Đái tháo đường type 2 mới chẩn đoán',
    domain: 'pharmacy',
    difficulty: 'medium',
    icon: '🩸',
    color: '#0ea5e9',
    audience: 'Dược lâm sàng năm 4-5',
    chiefComplaint: 'Khát nước, tiểu nhiều 2 tháng, sụt 4kg. Đường máu đói 14.2 mmol/L',
    patient: {
      initials: 'T.T.H',
      ageYears: 52, sex: 'F',
      job: 'Tiểu thương chợ Đồng Xuân, Hà Nội',
      comorbidities: ['Tăng huyết áp 5 năm', 'BMI 27.5 (thừa cân)'],
      currentMeds: ['Amlodipin 5mg 1 viên sáng', 'Thực phẩm chức năng "đường máu" mua trên livestream'],
      allergies: [],
    },
    history: `2 tháng nay cô H khát nước nhiều, mỗi ngày uống 4-5 lít, tiểu đêm 3-4 lần. Sụt 4kg trong 2 tháng dù ăn nhiều hơn. Hay mệt buổi chiều. Khám: HbA1c 9.2%, đường máu đói 14.2 mmol/L, creatinin 75 µmol/L (eGFR 78), LDL 3.8 mmol/L, HA 140/85. Được chẩn đoán ĐTĐ type 2 lần đầu. BS kê Metformin 500mg 2 viên/ngày, hẹn 2 tuần tái khám.`,
    vitals: { temp: 36.8, hr: 78, bp: '140/85', spo2: 99, rr: 16 },
    labs: { 'HbA1c': '9.2%', 'Đường đói': '14.2 mmol/L', 'eGFR': '78', 'LDL': '3.8 mmol/L', 'AST/ALT': 'bình thường' },
    persona: `Bạn là cô H., 52 tuổi, tiểu thương Hà Nội. Bạn lo lắng vì "bị đái đường thì khổ lắm, bạn bè nói phải kiêng đủ thứ, mai mốt cắt chân". Bạn hay nghe quảng cáo trên livestream và mua TPCN giảm đường máu. Bạn không tin lắm vào BS, hay so sánh với hàng xóm. Bạn nói giọng Bắc, dùng từ "cô" thay vì "tôi".`,
    hiddenInfo: {
      'thực phẩm chức năng|tpcn|thuốc nam': 'Cô có mua "Diabe-X" trên livestream, uống 3 tháng rồi, người ta bảo hạ đường tự nhiên không hại gan.',
      'rượu|bia': 'Cô không uống rượu, nhưng tối nào cũng làm bát phở/bún có nhiều bánh.',
      'tập thể dục': 'Cô bận bán hàng, ít vận động lắm, đứng cả ngày là vận động rồi cô nghĩ thế.',
      'tiền sử gia đình': 'Mẹ cô cũng bị tiểu đường, mất 5 năm trước vì biến chứng tim.',
    },
    drps: [
      { type: 'major', text: 'TPCN "Diabe-X" không rõ thành phần, có thể chứa glibenclamide/phenformin trộn → nguy cơ hạ đường huyết khi phối với Metformin' },
      { type: 'major', text: 'Tương tác: Amlodipine + Metformin: an toàn, không cần điều chỉnh' },
      { type: 'minor', text: 'LDL 3.8 cao + ĐTĐ type 2 → cần thêm statin (rosuvastatin/atorvastatin) theo guideline' },
      { type: 'minor', text: 'HA 140/85 + ĐTĐ → target <130/80, cân nhắc thêm ARB (losartan/telmisartan)' },
    ],
    fatalIf: [
      { trigger: 'metformin.*1000mg.*ngay|metformin.*2000mg.*từ.*đầu', reason: 'Metformin khởi đầu liều cao gây tiêu chảy nặng' },
      { trigger: 'tiếp.*tpcn|tiếp.*diabe|tiếp.*thuốc.*nam', reason: 'Tiếp tục TPCN không rõ nguồn gốc có thể chứa thuốc tây trộn' },
    ],
    bonusIf: [
      { trigger: 'tpcn|thực phẩm.*chức năng|diabe', text: 'Khai thác DRP TPCN trộn' },
      { trigger: 'dinh dưỡng|tinh bột|carb|bún|phở', text: 'Tư vấn dinh dưỡng cụ thể' },
      { trigger: 'statin|ldl|mỡ máu|atorvastatin|rosuvastatin', text: 'Đề xuất statin' },
      { trigger: 'sglt2|empagliflozin|jardiance', text: 'Cân nhắc SGLT2i cho ĐTĐ type 2 có BMI cao' },
      { trigger: 'tự theo dõi|máy.*đường|que.*thử', text: 'Hướng dẫn tự theo dõi đường máu' },
    ],
    rubric: [
      'Khai thác đầy đủ tiền sử dùng thuốc (kể cả TPCN/thuốc nam)',
      'Tư vấn ngừng TPCN không rõ nguồn gốc',
      'Hướng dẫn cách uống Metformin (theo bữa ăn, tăng liều từ từ)',
      'Cảnh báo tác dụng phụ Metformin (tiêu chảy, B12 lâu dài)',
      'Tư vấn dinh dưỡng + vận động cụ thể (không chỉ "ăn ít cơm")',
      'Đánh giá toàn diện: cân nhắc statin + ARB',
    ],
    openingLine: 'Bác sĩ ơi, BS bảo cô bị đái đường, kê thuốc Metformin. Cô hỏi thật, cô uống TPCN của cô bạn rồi, có sao không?',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 4 — VIÊM HỌNG CẤP (KHÔNG BIẾN CHỨNG, DO VIRUS)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'vh-001',
    title: 'Viêm họng cấp do virus',
    domain: 'pharmacy',
    difficulty: 'easy',
    icon: '🤒',
    color: '#a855f7',
    audience: 'Dược GPP / SV năm 3',
    chiefComplaint: 'Đau họng, ho khan, hơi sốt 2 ngày — muốn mua kháng sinh',
    patient: {
      initials: 'V.A',
      ageYears: 24, sex: 'F',
      job: 'Sinh viên',
      comorbidities: [],
      currentMeds: [],
      allergies: ['Penicillin (phát ban)'],
    },
    history: `Khách V.A, SV 24 tuổi, đến nhà thuốc xin mua Amoxicillin. Lý do: đau họng 2 ngày, ho khan, sổ mũi loãng, sốt nhẹ 37.8°C. Không khàn tiếng, không đau tai, không khó nuốt nặng. Trước đó cả lớp có nhiều bạn cũng "cảm cúm". Đã uống nước cam + ngậm Strepsils 1 ngày chưa đỡ. Khách nói "bạn em uống Amoxicillin 3 ngày là hết, em cũng muốn uống cho nhanh hết".`,
    vitals: { temp: 37.8, hr: 80, bp: '110/70', spo2: 99, rr: 16 },
    labs: { 'Không có (nhà thuốc OTC)': '—' },
    persona: `Bạn là V.A, SV 24 tuổi. Bạn nóng vội muốn mua Amoxicillin để hết nhanh đi học/đi làm. Bạn nói tiếng Việt trẻ tuổi: "ơ kìa, sao em không bán em", "em làm sao thì làm cho em hết nhanh chứ". Bạn dị ứng penicillin nhưng QUÊN nhắc nếu DSV không hỏi.`,
    hiddenInfo: {
      'dị ứng|allergy|kháng sinh': 'Ơ đúng rồi, hồi nhỏ em có dị ứng Penicillin, bị phát ban đỏ khắp người, mẹ em bảo từ đó không được uống thuốc đó nữa. Em quên không nhớ là Amoxicillin có liên quan không?',
      'triệu chứng khác': 'Em không có ho ra đờm vàng, không khó thở, không đau tai. Đau họng vừa thôi, vẫn nuốt được.',
      'thuốc đã dùng': 'Em chỉ ngậm Strepsils với uống Paracetamol khi sốt thôi.',
    },
    drps: [
      { type: 'critical', text: 'Khách dị ứng Penicillin → KHÔNG được bán Amoxicillin (cùng nhóm beta-lactam, nguy cơ phản ứng chéo)' },
      { type: 'major', text: 'Triệu chứng (đau họng, ho khan, sổ mũi loãng, cả lớp lây) → khả năng cao viêm họng VIRUS → KHÔNG cần kháng sinh' },
      { type: 'minor', text: 'Khách không có dấu hiệu nhiễm khuẩn (sốt cao >38.5, hạch cổ to, mủ amidan)' },
    ],
    fatalIf: [
      { trigger: 'bán.*amoxic|cho.*amoxic|kê.*amoxic', reason: 'Bán Amoxicillin cho khách dị ứng Penicillin có thể gây sốc phản vệ' },
      { trigger: 'bán.*kháng sinh|cho.*kháng sinh|kê.*ampi|kê.*cefa.*1', reason: 'Bán kháng sinh OTC cho viêm họng virus → kháng kháng sinh + lãng phí' },
    ],
    bonusIf: [
      { trigger: 'dị ứng|allergy', text: 'Khai thác dị ứng kỹ' },
      { trigger: 'virus|tự khỏi|nghỉ ngơi|uống nhiều nước', text: 'Tư vấn nguyên nhân virus' },
      { trigger: 'paracetamol|hạ sốt|giảm đau|strepsils|lozenge', text: 'Đề xuất điều trị triệu chứng' },
      { trigger: 'tái khám|gặp bác sĩ|nếu.*nặng|cảnh báo', text: 'Tư vấn dấu hiệu cảnh báo' },
    ],
    rubric: [
      'Khai thác tiền sử dị ứng (đặc biệt kháng sinh)',
      'Phân biệt viêm họng virus vs vi khuẩn',
      'Tư vấn không cần kháng sinh',
      'Đề xuất điều trị triệu chứng phù hợp',
      'Giáo dục về kháng kháng sinh',
      'Hướng dẫn khi nào cần đi khám',
    ],
    openingLine: 'Chào dược sĩ, em đau họng 2 hôm rồi, bạn em uống Amoxicillin 3 ngày là hết, em cũng muốn mua một vỉ ạ.',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 5 — DỊ ỨNG THUỐC (PHẢN VỆ MUỘN)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'da-001',
    title: 'Phát ban sau uống Allopurinol 3 tuần',
    domain: 'pharmacy',
    difficulty: 'hard',
    icon: '⚠️',
    color: '#f59e0b',
    audience: 'Dược lâm sàng năm 5 / Y khoa',
    chiefComplaint: 'Phát ban đỏ toàn thân, sốt nhẹ, mệt — đã uống Allopurinol 3 tuần',
    patient: {
      initials: 'N.X.M',
      ageYears: 65, sex: 'M',
      job: 'Hưu trí',
      comorbidities: ['Gout 10 năm', 'Suy thận mạn (eGFR 45)'],
      currentMeds: ['Allopurinol 300mg 1 viên/ngày (mới uống 3 tuần)', 'Colchicin 0.5mg khi đau', 'Diclofenac khi đau'],
      allergies: ['Chưa biết'],
    },
    history: `Chú M., 65 tuổi, được kê Allopurinol 300mg/ngày từ 3 tuần trước vì acid uric cao + gout tái phát. 5 ngày nay xuất hiện phát ban đỏ rải rác mặt + thân, ngày càng nhiều, hơi ngứa. 2 ngày nay sốt nhẹ 37.5-38°C, người mệt, miệng có vài vết loét nhỏ. Da quanh mắt hơi đỏ. Chú đến nhà thuốc hỏi "có phải dị ứng không, có nên ngừng không".`,
    vitals: { temp: 37.8, hr: 88, bp: '130/80', spo2: 97, rr: 18 },
    labs: { 'Acid uric': '380 µmol/L (đã giảm từ 580)', 'eGFR': '45', 'AST/ALT': '85/90 U/L (tăng nhẹ)' },
    persona: `Bạn là chú M., 65 tuổi, hưu trí. Bạn lo lắng vì đọc trên báo về "hội chứng Stevens-Johnson chết người". Bạn nói chậm, hỏi nhiều câu kiểu "có phải vì thuốc không cháu", "có nguy hiểm không". Bạn KHÔNG biết HLA-B*5801 là gì, nhưng nếu DSV hỏi "chú có người Á Đông nào trong nhà cũng dị ứng Allopurinol không" thì bạn nhớ ra là em họ chú cũng từng bị phát ban khi uống thuốc này.`,
    hiddenInfo: {
      'gia đình|em họ|người nhà': 'À, có ạ. Em họ chú hồi năm ngoái uống thuốc trị gout cũng bị phát ban đỏ phải vào viện, BS bảo do thuốc Allopurinol gì đó.',
      'loét miệng|niêm mạc': 'Có ạ, sáng nay chú thấy bên trong môi có 2 vết loét nhỏ, hơi đau khi ăn.',
      'mắt': 'Mắt chú hơi đỏ, hơi rát từ hôm qua.',
      'tiền sử dị ứng': 'Trước giờ chú không dị ứng gì cả, lần đầu bị thế này.',
    },
    drps: [
      { type: 'critical', text: 'Triệu chứng phát ban + sốt + loét niêm mạc + mắt đỏ sau Allopurinol 3 tuần → nghi NGỘ ĐỘC DA NGHIÊM TRỌNG (DRESS/SJS) — cần ngừng thuốc NGAY + nhập viện' },
      { type: 'critical', text: 'Người Á Đông + có người nhà cũng dị ứng Allopurinol → nguy cơ HLA-B*5801 dương tính (test trước kê)' },
      { type: 'major', text: 'Khởi đầu Allopurinol 300mg/ngày là CAO với eGFR 45 — khuyến cáo bắt đầu 50-100mg/ngày + tăng dần' },
      { type: 'minor', text: 'Diclofenac PRN ở BN suy thận eGFR 45 cũng cần thận trọng' },
    ],
    fatalIf: [
      { trigger: 'tiếp tục.*allopurinol|uống.*tiếp|không.*ngừng', reason: 'Tiếp tục Allopurinol khi đã có dấu hiệu DRESS/SJS có thể gây tử vong' },
      { trigger: 'về.*nhà.*theo dõi|không.*đi.*viện|chỉ.*kem.*bôi', reason: 'Loét miệng + mắt đỏ + sốt là dấu hiệu nặng, cần nhập viện đánh giá' },
    ],
    bonusIf: [
      { trigger: 'ngừng.*allopurinol|stop.*allopurinol', text: 'Ngừng thuốc nghi ngờ ngay' },
      { trigger: 'dress|sjs|stevens|ten|hội chứng.*da', text: 'Nghi ngờ hội chứng da nặng' },
      { trigger: 'nhập viện|cấp cứu|chuyên khoa.*da', text: 'Chuyển viện da liễu/cấp cứu' },
      { trigger: 'hla|b.*5801|gen', text: 'Đề cập gen HLA-B*5801' },
      { trigger: 'báo cáo.*adr|adr|theo dõi.*phản ứng', text: 'Báo cáo ADR' },
    ],
    rubric: [
      'Nhận diện dấu hiệu phản ứng da nghiêm trọng (DRESS/SJS)',
      'Ngừng thuốc nghi ngờ ngay lập tức',
      'Chuyển viện cấp cứu/da liễu',
      'Khai thác tiền sử gia đình + gốc Á Đông (HLA-B*5801)',
      'Đánh giá liều khởi đầu Allopurinol ở suy thận',
      'Báo cáo ADR lên cơ quan quản lý',
    ],
    openingLine: 'Chào dược sĩ, chú uống thuốc gout 3 tuần nay, gần đây người nổi mẩn đỏ với sốt nhẹ, có phải dị ứng không cháu?',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 6 — COPD ĐỢT CẤP
  // ─────────────────────────────────────────────────────────────
  {
    id: 'copd-001',
    title: 'COPD đợt cấp do bội nhiễm',
    domain: 'pharmacy',
    difficulty: 'hard',
    icon: '🫁',
    color: '#475569',
    audience: 'Dược lâm sàng năm 5',
    chiefComplaint: 'Khó thở tăng, ho đờm vàng đặc 4 ngày — đã dùng thuốc xịt nhưng không đỡ',
    patient: {
      initials: 'P.V.B',
      ageYears: 68, sex: 'M',
      job: 'Hưu trí (cựu công nhân nhà máy gạch)',
      comorbidities: ['COPD GOLD II 8 năm', 'THA', 'Hút thuốc 40 năm (mới bỏ 2 năm)'],
      currentMeds: ['Tiotropium 18mcg 1 nhát/ngày', 'Salbutamol PRN', 'Amlodipin 5mg', 'Aspirin 81mg'],
      allergies: [],
    },
    history: `Bác B, 68 tuổi, COPD GOLD II 8 năm. 4 ngày nay khó thở tăng, ho đờm vàng đặc, đêm khó ngủ phải nằm tựa. Đã dùng Salbutamol xịt 6-8 lần/ngày (nhiều hơn bình thường) nhưng không đỡ rõ. Sốt nhẹ 37.8°C. Đến phòng khám ngoại trú. Khám: ran ẩm 2 đáy phổi, SpO2 92% (thường 95-96%), FEV1 hôm nay 55% (baseline 65%).`,
    vitals: { temp: 37.8, hr: 100, bp: '145/85', spo2: 92, rr: 24 },
    labs: { 'CRP': '45 mg/L', 'BC': '13 G/L (neutrophil 78%)', 'Đờm cấy': 'đang chờ' },
    persona: `Bạn là bác B., 68 tuổi. Bạn nói chậm vì khó thở, hay phải dừng giữa câu để thở. Bạn lo nhưng cố tỏ ra "vẫn ổn", thường nói "vẫn chịu được". Bạn QUÊN không mang đầy đủ thuốc đang dùng, chỉ nhớ "có cái xịt màu xanh + xịt vàng". Nếu DSV hỏi cụ thể bạn mới nhớ ra Aspirin + Amlodipin.`,
    hiddenInfo: {
      'thuốc khác|thuốc tim|huyết áp': 'À đúng, bác còn uống thuốc tim với huyết áp nữa. Aspirin 81mg với Amlodipin 5mg, bác uống lâu rồi.',
      'hút thuốc': 'Bác bỏ thuốc được 2 năm rồi cháu, hồi trẻ hút 1 bao/ngày 40 năm.',
      'lần đợt cấp gần nhất': 'Năm ngoái bác cũng đợt cấp 1 lần, phải nằm viện 5 ngày, BS truyền kháng sinh tĩnh mạch.',
      'tiêm vaccine': 'Bác chưa tiêm vaccine phổi cầu khuẩn hay cúm gì cả.',
    },
    drps: [
      { type: 'major', text: 'Đợt cấp COPD có dấu hiệu nhiễm khuẩn (đờm vàng đặc, sốt, CRP↑, BC↑) → chỉ định kháng sinh — Amoxicillin/Clavulanate hoặc Doxycyclin, không phải kháng sinh phổ rộng' },
      { type: 'major', text: 'Cần thêm corticoid uống (Prednisolone 30-40mg/ngày 5-7 ngày) cho đợt cấp' },
      { type: 'major', text: 'Salbutamol PRN 6-8 lần/ngày là dấu hiệu kiểm soát kém → nâng bậc điều trị duy trì (ICS/LABA) sau đợt cấp' },
      { type: 'minor', text: 'BN không tiêm vaccine cúm + phế cầu — khuyến cáo tiêm sau đợt cấp ổn định' },
      { type: 'minor', text: 'Aspirin + Amoxicillin/Clavulanate: không tương tác lâm sàng đáng kể' },
    ],
    fatalIf: [
      { trigger: 'beta.*blocker|propranolol|metoprolol.*không.*chọn lọc', reason: 'Beta-blocker không chọn lọc có thể gây co thắt phế quản nặng' },
      { trigger: 'morphin|opioid.*ho|codein.*ho|terpin.*codein', reason: 'Opioid ức chế hô hấp ở BN COPD đợt cấp + SpO2 thấp' },
      { trigger: 'không.*kháng sinh|chỉ.*xịt|chỉ.*salbutamol', reason: 'Bỏ qua kháng sinh khi có dấu hiệu nhiễm khuẩn rõ + SpO2 92%' },
    ],
    bonusIf: [
      { trigger: 'amoxic.*clavulanat|augmentin|doxycyclin', text: 'Chọn kháng sinh đúng phổ' },
      { trigger: 'prednisolon|corticoid|methylpredni', text: 'Thêm corticoid uống' },
      { trigger: 'ics.*laba|symbicort|seretide|nâng bậc', text: 'Nâng bậc điều trị duy trì' },
      { trigger: 'vaccine|cúm|phế cầu|pneumonia', text: 'Khuyến cáo tiêm vaccine' },
      { trigger: 'kỹ thuật.*xịt|inhaler.*kỹ thuật|spacer', text: 'Kiểm tra kỹ thuật xịt' },
    ],
    rubric: [
      'Chẩn đoán đợt cấp COPD do bội nhiễm',
      'Lựa chọn kháng sinh phù hợp (không phổ rộng quá)',
      'Bổ sung corticoid uống 5-7 ngày',
      'Đánh giá kiểm soát COPD nền — đề xuất nâng bậc',
      'Khuyến cáo tiêm vaccine cúm + phế cầu',
      'Kiểm tra kỹ thuật dùng bình xịt',
    ],
    openingLine: 'Chào cháu, bác… khó thở mấy ngày nay… ho đờm nhiều… cái xịt của bác không ăn thua nữa…',
  },
];

export const CASE_INDEX = PATIENT_CASES.map(c => ({
  id: c.id, title: c.title, domain: c.domain, difficulty: c.difficulty,
  icon: c.icon, color: c.color, audience: c.audience, chiefComplaint: c.chiefComplaint,
}));

export function getCaseById(id) {
  return PATIENT_CASES.find(c => c.id === id);
}
