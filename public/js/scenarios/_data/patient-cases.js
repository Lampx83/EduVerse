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

  // ─────────────────────────────────────────────────────────────
  // CA 7 — TĂNG HUYẾT ÁP MỚI PHÁT HIỆN
  // ─────────────────────────────────────────────────────────────
  {
    id: 'tha-001',
    title: 'Tăng huyết áp độ 2 mới phát hiện',
    domain: 'pharmacy',
    difficulty: 'medium',
    icon: '💓',
    color: '#ef4444',
    audience: 'Dược lâm sàng năm 4-5',
    chiefComplaint: 'Đau đầu, chóng mặt, đo HA ở hiệu thuốc 165/100 — xin mua thuốc hạ áp',
    patient: {
      initials: 'Đ.V.H',
      ageYears: 48, sex: 'M',
      job: 'Lái xe tải đường dài',
      comorbidities: ['Thừa cân BMI 28', 'Hút thuốc 15 điếu/ngày'],
      currentMeds: ['Không dùng thuốc thường xuyên', 'Hay uống thuốc đau đầu mua lẻ'],
      allergies: [],
    },
    history: `Anh H, 48 tuổi, lái xe tải, 2 tuần nay hay đau đầu vùng gáy buổi sáng, chóng mặt thoáng qua. Đo HA tại nhà thuốc 165/100 mmHg, đo lại sau 10 phút 160/98. Chưa từng khám HA bao giờ. Uống rượu bia thường xuyên khi gặp bạn, ăn mặn (hay ăn cơm bụi dọc đường). Bố từng tai biến mạch máu não. Anh muốn mua \'thuốc hạ áp\' uống cho khỏe để tiếp tục chạy xe.`,
    vitals: { temp: 36.7, hr: 84, bp: '165/100', spo2: 98, rr: 16 },
    labs: { 'Chưa có xét nghiệm': '—', 'HA đo lại': '160/98 mmHg' },
    persona: `Bạn là anh H, 48 tuổi, lái xe tải. Bạn thực dụng, muốn nhanh gọn: \'cho anh viên thuốc hạ áp uống là xong\'. Bạn ngại đi khám vì \'mất thời gian, anh còn chạy xe\'. Bạn xem nhẹ việc hút thuốc + uống rượu. Nếu DSV hỏi bạn mới khai gia đình có người tai biến. Bạn nói giọng xuề xòa.`,
    hiddenInfo: {
      'gia đình|bố|di truyền|tai biến': 'Bố anh bị tai biến mạch máu não năm 60 tuổi, liệt nửa người rồi mất. Anh không nghĩ liên quan tới mình.',
      'rượu|bia|thuốc lá|hút': 'Anh hút khoảng 15 điếu một ngày, tối nào gặp bạn cũng làm vài chai bia. Ăn thì toàn cơm bụi dọc đường nên hơi mặn.',
      'triệu chứng|đau ngực|nhìn mờ': 'Anh không đau ngực, không khó thở, mắt không mờ. Chỉ đau đầu gáy buổi sáng với hơi chóng mặt thôi.',
      'thuốc đang dùng': 'Anh thỉnh thoảng đau đầu thì mua viên Panadol Extra uống, ngoài ra không thuốc gì.',
    },
    drps: [
      { type: 'major', text: 'Bán thuốc hạ áp OTC không qua chẩn đoán + xét nghiệm nền (điện giải, creatinin, đường máu, lipid, ECG) là không phù hợp — cần chuyển khám bác sĩ' },
      { type: 'major', text: 'HA 160-165/100 (THA độ 2) + yếu tố nguy cơ tim mạch cao (hút thuốc, gia đình tai biến) → cần đánh giá nguy cơ tổng thể, không chỉ \'cho viên thuốc\'' },
      { type: 'minor', text: 'Panadol Extra chứa caffeine — dùng thường xuyên có thể góp phần tăng HA nhẹ và đau đầu hồi ứng' },
    ],
    fatalIf: [
      { trigger: 'nifedipin.*ngậm|adalat.*ngậm|hạ áp.*nhanh|ngậm.*dưới lưỡi', reason: 'Nifedipin tác dụng nhanh ngậm dưới lưỡi gây tụt áp đột ngột, nguy cơ thiếu máu cơ tim/não — đã bị cấm trong xử trí THA' },
      { trigger: 'bán.*hai.*thuốc.*cùng lúc|phối.*hai.*hạ áp.*ngay|tự.*phối hợp', reason: 'Tự phối hợp nhiều thuốc hạ áp tại nhà thuốc không theo dõi gây tụt áp nguy hiểm' },
    ],
    bonusIf: [
      { trigger: 'khám.*bác sĩ|chuyển.*khám|xét nghiệm|đánh giá.*nguy cơ', text: 'Chuyển khám + đánh giá nguy cơ tim mạch' },
      { trigger: 'đo.*nhiều lần|theo dõi.*tại nhà|holter|đo.*24h', text: 'Khẳng định chẩn đoán bằng đo HA nhiều lần' },
      { trigger: 'bỏ thuốc lá|giảm rượu|giảm muối|ăn nhạt|cai thuốc', text: 'Tư vấn thay đổi lối sống' },
      { trigger: 'tai biến|đột quỵ|nhồi máu|biến chứng', text: 'Cảnh báo nguy cơ biến chứng' },
    ],
    rubric: [
      'Không bán thuốc hạ áp OTC khi chưa có chẩn đoán bác sĩ',
      'Khẳng định THA bằng đo nhiều lần, nhiều thời điểm',
      'Đánh giá yếu tố nguy cơ tim mạch tổng thể',
      'Chuyển khám bác sĩ làm xét nghiệm nền + ECG',
      'Tư vấn thay đổi lối sống (muối, rượu, thuốc lá, cân nặng)',
      'Cảnh báo dấu hiệu cấp cứu cần đến viện ngay',
    ],
    openingLine: 'Chào dược sĩ, anh đo huyết áp thấy 165, cho anh viên thuốc hạ áp uống cho nó hạ, anh còn phải chạy xe.',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 8 — HEN PHẾ QUẢN KIỂM SOÁT KÉM
  // ─────────────────────────────────────────────────────────────
  {
    id: 'hen-001',
    title: 'Hen phế quản lạm dụng Salbutamol',
    domain: 'pharmacy',
    difficulty: 'medium',
    icon: '🌬️',
    color: '#14b8a6',
    audience: 'Dược lâm sàng năm 4-5',
    chiefComplaint: 'Tuần nào cũng mua Ventolin, đêm hay tỉnh giấc vì ho và tức ngực',
    patient: {
      initials: 'B.T.L',
      ageYears: 22, sex: 'F',
      job: 'Sinh viên ngành thiết kế',
      comorbidities: ['Hen từ nhỏ', 'Viêm mũi dị ứng'],
      currentMeds: ['Salbutamol (Ventolin) xịt — mua liên tục', 'Không rõ thuốc dự phòng'],
      allergies: [],
    },
    history: `Bạn L, 22 tuổi, hen từ nhỏ. Gần đây mua bình xịt Ventolin gần như mỗi tuần một bình. Ho + khò khè + tức ngực về đêm 3-4 lần/tuần, hay tỉnh giấc. Khó thở khi leo cầu thang, phải dừng nghỉ. Đã từng được kê thuốc xịt dự phòng (màu nâu) nhưng \'thấy đỡ rồi nên tự bỏ\'. Hôm nay đến nhà thuốc mua thêm Ventolin.`,
    vitals: { temp: 36.6, hr: 92, bp: '115/72', spo2: 96, rr: 20 },
    labs: { 'Không có (nhà thuốc OTC)': '—', 'PEF (nếu đo được)': 'giảm so với dự đoán' },
    persona: `Bạn là L, 22 tuổi, sinh viên. Bạn xem việc dùng Ventolin liên tục là bình thường: \'em quen rồi, xịt cái là dễ thở ngay\'. Bạn không nhận ra mình đang kiểm soát hen kém. Nếu DSV hỏi bạn mới kể về việc bỏ thuốc dự phòng màu nâu và triệu chứng ban đêm. Bạn nói giọng trẻ, hơi chủ quan.`,
    hiddenInfo: {
      'dự phòng|thuốc nâu|corticoid|controller|màu nâu': 'À, hồi trước BS có kê cho em một bình xịt màu nâu bảo xịt hằng ngày, nhưng em thấy đỡ rồi nên bỏ mấy tháng nay. Em chỉ dùng Ventolin khi khó thở thôi.',
      'ban đêm|đêm|tỉnh giấc': 'Đêm nào em cũng ho, tuần phải 3-4 đêm tỉnh giấc vì tức ngực với khò khè.',
      'tần suất|bao nhiêu bình|mức độ': 'Em mua Ventolin gần như mỗi tuần một bình, ngày xịt cũng phải 5-6 lần.',
      'yếu tố khởi phát': 'Em hay bị nặng hơn khi trời lạnh, khi quét nhà bụi, với lúc stress mùa thi.',
    },
    drps: [
      { type: 'critical', text: 'Dùng SABA (Salbutamol) > 1 bình/tháng = dấu hiệu hen kiểm soát kém và tăng nguy cơ tử vong do hen — cần thuốc dự phòng' },
      { type: 'major', text: 'Tự ý bỏ ICS (corticoid hít dự phòng) → mất kiểm soát hen; GINA khuyến cáo không dùng SABA đơn độc' },
      { type: 'minor', text: 'Viêm mũi dị ứng kèm theo chưa kiểm soát góp phần làm hen nặng' },
    ],
    fatalIf: [
      { trigger: 'chỉ.*bán.*ventolin|chỉ.*salbutamol|bán thêm.*không.*tư vấn', reason: 'Tiếp tục bán SABA đơn độc cho bệnh nhân lạm dụng mà không can thiệp dự phòng là bỏ lỡ nguy cơ tử vong do hen' },
      { trigger: 'kháng sinh.*hen|amoxic.*hen', reason: 'Hen không bội nhiễm không dùng kháng sinh' },
    ],
    bonusIf: [
      { trigger: 'ics|corticoid.*hít|thuốc.*dự phòng|controller|budesonid|seretide|symbicort', text: 'Nhấn mạnh quay lại dùng thuốc dự phòng' },
      { trigger: 'kiểm soát kém|gina|act|đánh giá kiểm soát', text: 'Đánh giá mức kiểm soát hen' },
      { trigger: 'kỹ thuật.*xịt|inhaler.*kỹ thuật|spacer|buồng đệm', text: 'Kiểm tra kỹ thuật xịt' },
      { trigger: 'khám.*bác sĩ|chuyên khoa hô hấp|tái khám', text: 'Chuyển khám đánh giá lại' },
      { trigger: 'yếu tố.*khởi phát|tránh.*dị nguyên|bụi|lông|lạnh', text: 'Tư vấn tránh yếu tố khởi phát' },
    ],
    rubric: [
      'Nhận diện lạm dụng SABA là dấu hiệu hen kiểm soát kém',
      'Tư vấn quay lại dùng ICS dự phòng (không SABA đơn độc)',
      'Đánh giá mức kiểm soát (triệu chứng đêm, hạn chế hoạt động)',
      'Kiểm tra + hướng dẫn lại kỹ thuật dùng bình xịt',
      'Tư vấn tránh yếu tố khởi phát + kiểm soát viêm mũi dị ứng',
      'Chuyển khám bác sĩ để chỉnh phác đồ duy trì',
    ],
    openingLine: 'Chào dược sĩ, cho em mua thêm bình Ventolin, em xài hết nhanh lắm, tuần nào cũng phải mua một bình.',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 9 — TIÊU CHẢY CẤP TRẺ EM (NGUY CƠ MẤT NƯỚC)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'tcc-001',
    title: 'Tiêu chảy cấp — bé 18 tháng',
    domain: 'pharmacy',
    difficulty: 'medium',
    icon: '🍼',
    color: '#22c55e',
    audience: 'Dược GPP / Dược nhi / SV năm 3-4',
    chiefComplaint: 'Bé 18 tháng đi ngoài phân lỏng 6-8 lần/ngày, nôn — mẹ xin mua thuốc cầm tiêu chảy',
    patient: {
      initials: 'L.G.B (bé)',
      ageYears: 1, sex: 'M',
      job: '—',
      comorbidities: [],
      currentMeds: ['Mẹ chưa cho thuốc gì'],
      allergies: [],
      weightKg: 11,
    },
    history: `Bé B, 18 tháng (11kg), 2 ngày nay đi ngoài phân lỏng tóe nước 6-8 lần/ngày, không nhầy máu, kèm nôn 2-3 lần/ngày. Bé hơi quấy, vẫn còn uống nước nhưng kém ăn. Tã ướt ít hơn mọi ngày. Trong xóm có nhiều bé cùng bị. Mẹ chưa cho uống gì, đến nhà thuốc xin \'thuốc cầm tiêu chảy cho bé nhanh hết\'.`,
    vitals: { temp: 37.5, hr: 130, bp: '—', spo2: 98, rr: 28 },
    labs: { 'Không có (nhà thuốc OTC)': '—' },
    persona: `Bạn là MẸ của bé B (18 tháng). Bạn sốt ruột muốn \'cầm\' tiêu chảy ngay cho bé đỡ đi ngoài. Bạn định mua loperamid (Imodium) vì \'người lớn uống là cầm liền\'. Nếu DSV hỏi bạn mới kể chi tiết về số lần đi ngoài, tã ướt, bé khát hay không. Bạn nói giọng bình dân, lo lắng.`,
    hiddenInfo: {
      'mất nước|tã|tiểu|khát|mắt trũng': 'Tã bé ướt ít hơn mọi ngày, mấy tiếng nay mới thay một lần. Bé đòi uống nước nhiều, mắt thì em thấy hơi trũng. Bé vẫn còn nước mắt khi khóc.',
      'phân|máu|nhầy|tính chất': 'Phân lỏng tóe nước, màu vàng, không có máu cũng không nhầy ạ.',
      'ăn uống|bú': 'Bé vẫn bú và uống nước được, chỉ ăn cháo thì kém hơn.',
      'thuốc đã cho|imodium|loperamid|kháng sinh': 'Em chưa cho gì, em định mua Imodium cho bé cầm lại, không biết có được không ạ.',
    },
    drps: [
      { type: 'critical', text: 'Loperamid (Imodium) CHỐNG CHỈ ĐỊNH ở trẻ < 2 tuổi — nguy cơ liệt ruột, chướng bụng, ức chế thần kinh trung ương' },
      { type: 'major', text: 'Tiêu chảy cấp do virus ở trẻ → ưu tiên ORESOL (bù dịch) + kẽm 10-14 ngày, KHÔNG cần kháng sinh khi không có máu/nhầy' },
      { type: 'minor', text: 'Cần đánh giá mức độ mất nước trước khi tư vấn (tã ướt ít, mắt trũng = mất nước nhẹ-vừa)' },
    ],
    fatalIf: [
      { trigger: 'loperamid|imodium|cầm.*tiêu chảy|thuốc cầm', reason: 'Loperamid chống chỉ định ở trẻ < 2 tuổi — nguy cơ liệt ruột và ngộ độc thần kinh' },
      { trigger: 'kháng sinh|amoxic|ciproflox|metronidazol', reason: 'Tiêu chảy cấp do virus không nhầy máu không dùng kháng sinh ở trẻ nhỏ' },
      { trigger: 'nhịn.*ăn|ngừng.*bú|không.*cho.*uống', reason: 'Cho trẻ nhịn ăn/bú khi tiêu chảy làm nặng thêm mất nước và suy dinh dưỡng' },
    ],
    bonusIf: [
      { trigger: 'oresol|ors|bù dịch|bù nước|pha.*đúng', text: 'Tư vấn ORESOL bù dịch đúng cách' },
      { trigger: 'kẽm|zinc', text: 'Bổ sung kẽm theo khuyến cáo WHO' },
      { trigger: 'mất nước|tã|mắt trũng|dấu hiệu.*nặng', text: 'Đánh giá mức độ mất nước' },
      { trigger: 'tiếp tục.*ăn|tiếp tục.*bú|cho ăn|dinh dưỡng', text: 'Khuyến khích tiếp tục ăn/bú' },
      { trigger: 'men vi sinh|probiotic|lactobacillus|saccharomyces', text: 'Cân nhắc probiotic hỗ trợ' },
      { trigger: 'đến viện|khám.*ngay|cấp cứu|li bì|không.*uống', text: 'Hướng dẫn dấu hiệu cần đến viện' },
    ],
    rubric: [
      'Từ chối bán loperamid (chống chỉ định < 2 tuổi)',
      'Đánh giá mức độ mất nước qua hỏi bệnh',
      'Tư vấn ORESOL bù dịch + cách pha đúng',
      'Bổ sung kẽm 10-14 ngày theo WHO',
      'Khuyến khích tiếp tục ăn/bú, không nhịn',
      'Hướng dẫn dấu hiệu mất nước nặng cần đến viện',
    ],
    openingLine: 'Dược sĩ ơi, bé nhà em đi ngoài cả ngày, em muốn mua Imodium cho bé cầm lại cho nhanh, có được không ạ?',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 10 — TƯƠNG TÁC WARFARIN
  // ─────────────────────────────────────────────────────────────
  {
    id: 'war-001',
    title: 'Tương tác Warfarin — bầm tím, chảy máu chân răng',
    domain: 'pharmacy',
    difficulty: 'hard',
    icon: '🩹',
    color: '#b91c1c',
    audience: 'Dược lâm sàng năm 5',
    chiefComplaint: 'Đang dùng Warfarin, gần đây bầm tím nhiều, chảy máu chân răng — vừa uống thêm thuốc cảm',
    patient: {
      initials: 'H.T.N',
      ageYears: 70, sex: 'F',
      job: 'Hưu trí',
      comorbidities: ['Rung nhĩ', 'Thay van tim cơ học 3 năm trước', 'THA'],
      currentMeds: ['Warfarin 4mg/ngày', 'Bisoprolol 2.5mg', 'Amlodipin 5mg'],
      allergies: [],
    },
    history: `Bà N, 70 tuổi, thay van tim cơ học, rung nhĩ, dùng Warfarin nhiều năm, INR thường ổn định 2.5-3.0. 5 ngày nay bị cảm, tự mua một \'liệu trình\' gồm kháng sinh + thuốc giảm đau + vitamin tại nhà thuốc khác. 2 ngày nay xuất hiện nhiều mảng bầm tím tự nhiên ở cẳng tay + đùi, chảy máu chân răng khi đánh răng, nước tiểu sẫm hơn. Bà lo lắng đến nhà thuốc hỏi.`,
    vitals: { temp: 36.9, hr: 76, bp: '135/80', spo2: 98, rr: 16 },
    labs: { 'INR (lần trước, 3 tuần)': '2.7', 'INR hôm nay': 'chưa đo — nghi tăng cao' },
    persona: `Bạn là bà N, 70 tuổi, đang dùng thuốc chống đông sau thay van tim. Bạn lo lắng vì bỗng dưng bầm tím khắp người. Bạn KHÔNG nghĩ rằng thuốc cảm vừa mua có liên quan. Nếu DSV hỏi cụ thể \'bà có uống thêm thuốc gì mới không\' thì bạn mới kể tên các thuốc cảm. Bạn nói chậm rãi, giọng người già.`,
    hiddenInfo: {
      'thuốc mới|thuốc cảm|thuốc gì khác|kháng sinh|giảm đau': 'À, tuần trước bà bị cảm nên ra hiệu thuốc gần nhà, người ta bán cho bà một liệu trình: có viên kháng sinh Cotrimoxazol (Bactrim), viên giảm đau Aspirin, với mấy viên vitamin. Bà uống được 5 ngày rồi.',
      'chảy máu|bầm tím|nước tiểu|phân đen': 'Bà thấy bầm tím tự nhiên ở tay với đùi, đánh răng chảy máu, nước tiểu thì sẫm màu hơn. Phân thì bà chưa để ý kỹ.',
      'inr|xét nghiệm|tái khám đông máu': 'Bà đo INR cách đây 3 tuần thì bác sĩ bảo ổn, 2.7. Từ đó chưa đi đo lại.',
      'liều warfarin': 'Bà vẫn uống Warfarin 4mg mỗi ngày như cũ, không thay đổi gì.',
    },
    drps: [
      { type: 'critical', text: 'Cotrimoxazol (sulfamethoxazole) ức chế CYP2C9 + đẩy warfarin khỏi protein → tăng mạnh tác dụng chống đông, INR tăng vọt, nguy cơ chảy máu nặng' },
      { type: 'critical', text: 'Aspirin + Warfarin → tăng nguy cơ chảy máu do cộng hợp (ức chế tiểu cầu + chống đông) — không tự ý phối hợp' },
      { type: 'major', text: 'Bệnh nhân có dấu hiệu chảy máu (bầm tím, chảy máu chân răng, nước tiểu sẫm) → cần đo INR khẩn + đánh giá chảy máu' },
      { type: 'minor', text: 'Tự mua kháng sinh không kê đơn ở bệnh nhân nguy cơ cao là vấn đề cần giáo dục' },
    ],
    fatalIf: [
      { trigger: 'tiếp tục.*cotrim|tiếp tục.*bactrim|uống.*tiếp.*kháng sinh|không.*ngừng.*aspirin', reason: 'Tiếp tục Cotrimoxazol/Aspirin cùng Warfarin có thể gây xuất huyết nặng đe dọa tính mạng' },
      { trigger: 'về.*nhà.*theo dõi|không.*đo.*inr|không.*đến viện|chỉ.*giảm liều.*tại nhà', reason: 'Bệnh nhân đã có dấu hiệu chảy máu — cần đo INR khẩn và đánh giá tại cơ sở y tế, không tự theo dõi tại nhà' },
      { trigger: 'ngừng.*hẳn.*warfarin|bỏ.*warfarin', reason: 'Ngừng đột ngột Warfarin ở bệnh nhân van cơ học gây nguy cơ huyết khối van/đột quỵ — phải do bác sĩ điều chỉnh' },
    ],
    bonusIf: [
      { trigger: 'cotrim|bactrim|sulfamethoxazol|tương tác', text: 'Phát hiện tương tác Cotrimoxazol-Warfarin' },
      { trigger: 'aspirin|chống.*tiểu cầu|cộng.*chảy máu', text: 'Phát hiện nguy cơ Aspirin + Warfarin' },
      { trigger: 'đo inr|xét nghiệm.*đông máu|inr.*khẩn', text: 'Chỉ định đo INR khẩn' },
      { trigger: 'vitamin k|đến viện|cấp cứu|cầm máu', text: 'Chuyển viện đánh giá/xử trí chảy máu' },
      { trigger: 'tránh.*nsaid|không.*tự mua|tư vấn.*tương tác.*sau này', text: 'Giáo dục tránh tương tác về sau' },
    ],
    rubric: [
      'Khai thác đầy đủ thuốc mới dùng (kể cả thuốc tự mua)',
      'Nhận diện tương tác Cotrimoxazol + Warfarin (CYP2C9)',
      'Nhận diện nguy cơ chảy máu do Aspirin + Warfarin',
      'Chỉ định đo INR khẩn + đánh giá chảy máu',
      'Chuyển viện, không tự ý ngừng/giữ Warfarin tại nhà thuốc',
      'Giáo dục bệnh nhân về tương tác thuốc với chống đông',
    ],
    openingLine: 'Cháu ơi, bà uống thuốc chống đông sau mổ tim, mấy hôm nay tự dưng bầm tím khắp người, đánh răng chảy máu, bà lo quá…',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 11 — PHỤ NỮ CÓ THAI XIN THUỐC
  // ─────────────────────────────────────────────────────────────
  {
    id: 'pnct-001',
    title: 'Phụ nữ mang thai 8 tuần xin thuốc cảm + giảm đau',
    domain: 'pharmacy',
    difficulty: 'medium',
    icon: '🤰',
    color: '#ec4899',
    audience: 'Dược GPP / Dược lâm sàng năm 4-5',
    chiefComplaint: 'Mang thai 8 tuần, bị cảm + đau đầu, xin mua thuốc cảm và kháng sinh',
    patient: {
      initials: 'V.T.M',
      ageYears: 29, sex: 'F',
      job: 'Nhân viên ngân hàng',
      comorbidities: ['Mang thai 8 tuần (con đầu)'],
      currentMeds: ['Acid folic', 'Vitamin bầu'],
      allergies: [],
    },
    history: `Chị M, 29 tuổi, mang thai 8 tuần (3 tháng đầu), 2 ngày nay hắt hơi, sổ mũi, đau đầu, đau họng nhẹ, sốt nhẹ 37.6°C. Chị đến nhà thuốc xin mua \'thuốc cảm tổng hợp\' + kháng sinh + thuốc giảm đau cho nhanh khỏi vì sợ ảnh hưởng công việc. Chị lo lắng nhưng cũng nóng vội. Chưa khám sản khoa về đợt cảm này.`,
    vitals: { temp: 37.6, hr: 88, bp: '110/70', spo2: 99, rr: 16 },
    labs: { 'Không có (nhà thuốc OTC)': '—', 'Thai': '8 tuần' },
    persona: `Bạn là chị M, 29 tuổi, mang thai con đầu 8 tuần. Bạn vừa lo cho con vừa nóng vội muốn hết cảm nhanh. Bạn định mua \'thuốc cảm tổng hợp\' kiểu Decolgen/Tiffy và kháng sinh. Nếu DSV hỏi bạn mới khai rõ đang mang thai (ban đầu chỉ nói \'bị cảm\'). Bạn nói giọng nhẹ nhàng, hơi lo.`,
    hiddenInfo: {
      'mang thai|có thai|bầu|thai': 'Dạ em đang mang thai 8 tuần, con so. Em sợ uống thuốc ảnh hưởng đến bé nhưng cảm khó chịu quá.',
      'triệu chứng|sốt|ho|đờm': 'Em hắt hơi, sổ mũi nước trong, đau họng nhẹ, sốt 37.6 thôi. Không ho đờm vàng, không khó thở.',
      'thuốc định mua|decolgen|tiffy|tổng hợp': 'Em định mua Decolgen hoặc Tiffy với một vỉ kháng sinh cho nhanh khỏi ạ.',
      'tiền sử|dị ứng|bệnh nền': 'Em không dị ứng thuốc gì, không bệnh nền, chỉ đang uống acid folic với vitamin bầu thôi.',
    },
    drps: [
      { type: 'critical', text: 'Thuốc cảm tổng hợp (Decolgen/Tiffy) thường chứa phenylephrine/pseudoephedrine (co mạch) + caffeine → tránh trong 3 tháng đầu thai kỳ' },
      { type: 'major', text: 'Cảm do virus ở phụ nữ có thai → không cần kháng sinh; nếu cần kháng sinh phải chọn nhóm an toàn thai kỳ (beta-lactam) và do bác sĩ kê' },
      { type: 'major', text: 'Tránh NSAID (ibuprofen, aspirin) trong thai kỳ — paracetamol là lựa chọn hạ sốt/giảm đau ưu tiên, liều thấp nhất hiệu quả, thời gian ngắn' },
      { type: 'minor', text: 'Cần khuyến khích khám sản khoa nếu sốt cao kéo dài hoặc triệu chứng nặng lên' },
    ],
    fatalIf: [
      { trigger: 'bán.*decolgen|bán.*tiffy|cảm tổng hợp|pseudoephedrin|phenylephrin', reason: 'Thuốc cảm tổng hợp chứa chất co mạch không an toàn trong 3 tháng đầu thai kỳ' },
      { trigger: 'ibuprofen|aspirin|nsaid|diclofenac', reason: 'NSAID chống chỉ định/tránh trong thai kỳ (nguy cơ với thai, đặc biệt 3 tháng đầu và cuối)' },
      { trigger: 'doxycyclin|tetracyclin|ciproflox|quinolon|metronidazol.*3 tháng đầu', reason: 'Tetracyclin/quinolon chống chỉ định trong thai kỳ; cần kháng sinh an toàn và do bác sĩ kê' },
      { trigger: 'tự.*bán.*kháng sinh|bán kháng sinh.*cảm', reason: 'Cảm virus không cần kháng sinh; tự bán kháng sinh cho thai phụ là không phù hợp' },
    ],
    bonusIf: [
      { trigger: 'paracetamol|acetaminophen', text: 'Chọn paracetamol đúng cho thai phụ' },
      { trigger: 'rửa mũi|nước muối|nghỉ ngơi|uống nước|virus', text: 'Tư vấn biện pháp không dùng thuốc' },
      { trigger: 'khám.*sản|bác sĩ.*sản|chuyển khám', text: 'Khuyến cáo khám sản khoa khi cần' },
      { trigger: 'liều thấp|thời gian ngắn|cân nhắc lợi.*hại', text: 'Nguyên tắc dùng thuốc tối thiểu trong thai kỳ' },
      { trigger: 'dấu hiệu.*nặng|sốt cao|đến viện', text: 'Hướng dẫn dấu hiệu cần đi khám' },
    ],
    rubric: [
      'Khai thác tình trạng mang thai + tuổi thai trước khi tư vấn',
      'Từ chối bán thuốc cảm tổng hợp + kháng sinh OTC',
      'Tư vấn paracetamol liều tối thiểu khi cần hạ sốt/giảm đau',
      'Ưu tiên biện pháp không dùng thuốc (rửa mũi, nghỉ ngơi)',
      'Giải thích cảm virus tự khỏi, không cần kháng sinh',
      'Hướng dẫn khi nào cần khám sản khoa/bác sĩ',
    ],
    openingLine: 'Chào dược sĩ, em bị cảm 2 hôm nay, đau đầu khó chịu, cho em mua thuốc cảm với kháng sinh cho nhanh khỏi với ạ.',
  },

  // ─────────────────────────────────────────────────────────────
  // CA 12 — ĐAU DẠ DÀY DO LẠM DỤNG NSAID
  // ─────────────────────────────────────────────────────────────
  {
    id: 'nsaid-001',
    title: 'Đau thượng vị do lạm dụng NSAID',
    domain: 'pharmacy',
    difficulty: 'hard',
    icon: '🔥',
    color: '#ea580c',
    audience: 'Dược lâm sàng năm 4-5',
    chiefComplaint: 'Đau thượng vị nhiều tuần, phân hơi đen — đang uống thuốc khớp dài ngày',
    patient: {
      initials: 'K.T.D',
      ageYears: 58, sex: 'F',
      job: 'Giáo viên về hưu',
      comorbidities: ['Thoái hóa khớp gối', 'THA'],
      currentMeds: ['Diclofenac 50mg x 2-3 viên/ngày (tự mua nhiều tháng)', 'Amlodipin 5mg', 'Thỉnh thoảng thêm Meloxicam'],
      allergies: [],
    },
    history: `Cô D, 58 tuổi, đau khớp gối nên tự mua Diclofenac uống đều 2-3 viên/ngày nhiều tháng, thỉnh thoảng thêm Meloxicam khi đau nhiều. 3 tuần nay đau rát vùng thượng vị, đau tăng khi đói + về đêm, ợ chua, buồn nôn. 3 ngày nay thấy phân hơi đen, người hơi mệt, hoa mắt khi đứng dậy. Cô đến nhà thuốc xin mua \'thuốc đau dạ dày\'.`,
    vitals: { temp: 36.7, hr: 96, bp: '110/70 (tư thế đứng tụt nhẹ)', spo2: 98, rr: 18 },
    labs: { 'Không có (nhà thuốc OTC)': '—', 'Nghi ngờ': 'thiếu máu do xuất huyết tiêu hóa' },
    persona: `Bạn là cô D, 58 tuổi, giáo viên về hưu, đau khớp gối kinh niên. Bạn xem nhẹ việc tự uống thuốc khớp dài ngày: \'thuốc khớp ai chả uống\'. Bạn định mua thuốc dạ dày uống cho đỡ rồi vẫn tiếp tục thuốc khớp. Nếu DSV hỏi bạn mới kể chuyện phân đen + hoa mắt. Bạn nói giọng nhẹ nhàng, hơi chủ quan.`,
    hiddenInfo: {
      'phân đen|đại tiện|máu|tiêu hóa': 'Ừ, 3 hôm nay cô thấy phân hơi đen, đen sệt như bã cà phê, cô tưởng do ăn tiết canh. Cô không để ý lắm.',
      'thuốc khớp|diclofenac|meloxicam|nsaid|bao nhiêu': 'Cô uống Diclofenac 50mg ngày 2-3 viên mấy tháng nay cho đỡ đau gối, hôm nào đau nhiều cô uống thêm viên Meloxicam. Cô tự mua ở hiệu thuốc thôi.',
      'mệt|hoa mắt|chóng mặt|da xanh': 'Cô hơi mệt, đứng dậy nhanh thì hoa mắt chóng mặt, mấy hôm nay da cũng hơi xanh.',
      'bảo vệ dạ dày|ppi|omeprazol': 'Không, cô không uống thuốc bảo vệ dạ dày gì cùng cả, chỉ uống thuốc khớp thôi.',
    },
    drps: [
      { type: 'critical', text: 'Phân đen + mệt + hoa mắt khi đứng + mạch nhanh → nghi XUẤT HUYẾT TIÊU HÓA do loét dạ dày liên quan NSAID — cần đến viện ngay, không tự điều trị OTC' },
      { type: 'critical', text: 'Phối hợp 2 NSAID (Diclofenac + Meloxicam) → tăng mạnh nguy cơ loét/xuất huyết tiêu hóa, không có lợi ích cộng thêm' },
      { type: 'major', text: 'Dùng NSAID dài ngày không kèm thuốc bảo vệ dạ dày (PPI) ở bệnh nhân nguy cơ (>55 tuổi, dùng kéo dài)' },
      { type: 'minor', text: 'Diclofenac dùng dài ngày + THA → tăng nguy cơ tim mạch và giữ muối nước làm khó kiểm soát HA' },
    ],
    fatalIf: [
      { trigger: 'tiếp tục.*diclofenac|tiếp tục.*nsaid|uống.*tiếp.*thuốc khớp|tiếp tục.*meloxicam', reason: 'Tiếp tục NSAID khi đã nghi xuất huyết tiêu hóa có thể gây chảy máu nặng/thủng' },
      { trigger: 'chỉ.*bán.*dạ dày|chỉ.*omeprazol.*về nhà|về nhà.*theo dõi|không.*đến viện', reason: 'Phân đen + dấu hiệu thiếu máu là cấp cứu tiêu hóa — không được chỉ bán thuốc dạ dày cho về nhà' },
      { trigger: 'thêm.*nsaid|đổi.*nsaid khác|ibuprofen.*thay', reason: 'Đổi sang NSAID khác không giải quyết nguy cơ xuất huyết đang tiến triển' },
    ],
    bonusIf: [
      { trigger: 'phân đen|xuất huyết|melena|chảy máu.*tiêu hóa', text: 'Nhận diện dấu hiệu xuất huyết tiêu hóa' },
      { trigger: 'đến viện|cấp cứu|nội soi|khám.*ngay', text: 'Chuyển viện cấp cứu/nội soi' },
      { trigger: 'ngừng.*nsaid|ngừng.*diclofenac|dừng.*thuốc khớp', text: 'Ngừng NSAID ngay' },
      { trigger: 'ppi|omeprazol|esomeprazol|bảo vệ dạ dày', text: 'Vai trò PPI dự phòng/điều trị' },
      { trigger: 'paracetamol|thay thế.*giảm đau|giảm đau.*khác', text: 'Đề xuất giảm đau thay thế an toàn hơn cho khớp' },
      { trigger: 'hp|helicobacter|test hp', text: 'Cân nhắc tầm soát H. pylori' },
    ],
    rubric: [
      'Khai thác triệu chứng báo động (phân đen, mệt, hoa mắt)',
      'Nhận diện nguy cơ xuất huyết tiêu hóa do NSAID',
      'Phát hiện phối hợp 2 NSAID nguy hiểm',
      'Chuyển viện cấp cứu thay vì bán thuốc OTC',
      'Tư vấn ngừng NSAID + vai trò PPI',
      'Đề xuất giảm đau thay thế an toàn hơn cho khớp gối',
    ],
    openingLine: 'Chào dược sĩ, cô đau rát dạ dày mấy tuần nay, cho cô mua thuốc đau dạ dày, chứ thuốc khớp thì cô vẫn phải uống cho đỡ đau gối.',
  },
];

export const CASE_INDEX = PATIENT_CASES.map(c => ({
  id: c.id, title: c.title, domain: c.domain, difficulty: c.difficulty,
  icon: c.icon, color: c.color, audience: c.audience, chiefComplaint: c.chiefComplaint,
}));

export function getCaseById(id) {
  return PATIENT_CASES.find(c => c.id === id);
}
