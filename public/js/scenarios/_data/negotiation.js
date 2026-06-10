/* GAP 15 — Game theory negotiation simulator
 *
 * 4 kịch bản Việt hoá, áp dụng cho:
 * - Sinh viên CNTT (phỏng vấn xin việc junior/senior)
 * - Sinh viên Dược (tư vấn dùng thuốc, đàm phán với BN khó tính)
 * - Học sinh THPT lớp 12 — kỹ năng mềm (Giáo dục công dân, GDPT 2018)
 *
 * Schema giống patient-cases:
 *   - persona, role, stages[], rubric, bonusIf, fatalIf
 */

export const NEGOTIATION_SCENARIOS = [
  // ──────────────────────────────────────────────────────────
  // 1. PHỎNG VẤN IT JUNIOR — Fullstack web
  // ──────────────────────────────────────────────────────────
  {
    id: 'it-interview-junior',
    title: 'Phỏng vấn Fullstack Junior tại startup VN',
    audience: 'SV CNTT năm 3-4',
    domain: 'it',
    icon: '💼',
    color: '#0ea5e9',
    youAre: 'Bạn là ứng viên fullstack junior, vừa tốt nghiệp ĐH, mong muốn lương 18-22 triệu/tháng. Bạn từng làm 1 project NEU-OJ ở khoa, biết React + Node.',
    npcRole: 'Anh Tuấn, CTO của một startup ed-tech 30 người ở Hà Nội',
    persona: `Bạn là anh Tuấn, 35 tuổi, CTO startup ed-tech ở Hà Nội (30 nhân viên).
Bạn cần tuyển fullstack junior để build app mobile + admin dashboard.
Tính cách: thẳng thắn, đánh giá nhanh, hay hỏi "vì sao" liên tục, đôi khi đặt câu hỏi bẫy.
Ngân sách lương cho junior: 14-18 triệu (đôi khi push được 20 triệu nếu xuất sắc).
Bạn KHÔNG nói trước con số 18 triệu — chỉ tăng nếu ứng viên thuyết phục được bạn.

Game theory:
- Nếu ứng viên hét 25 triệu mà không lý do → bạn từ chối thẳng.
- Nếu ứng viên hét 25 triệu kèm portfolio mạnh → bạn negotiate xuống 20-22 triệu.
- Nếu ứng viên nói "em sẵn sàng học hỏi" mà không show kỹ năng cụ thể → bạn hỏi vặn.
- Nếu ứng viên kể project + impact cụ thể → bạn ấn tượng + push lương lên 16-18 triệu.
- Bạn cũng có thể test bằng câu kiểu "vì sao em chọn cty anh?" — câu trả lời "vì lương cao" sẽ bị trừ điểm.`,
    stages: [
      { id: 'opening',     name: 'Mở đầu — giới thiệu bản thân' },
      { id: 'technical',   name: 'Hỏi kỹ thuật (project, stack, debug)' },
      { id: 'motivation',  name: 'Hỏi motivation (vì sao chọn cty)' },
      { id: 'salary',      name: 'Đàm phán lương + benefit' },
      { id: 'closing',     name: 'Kết — quyết định + câu hỏi của bạn' },
    ],
    openingLine: 'Chào em! Anh là Tuấn, CTO bên đây. Em giới thiệu nhanh về mình và project nào em làm gần đây nhất xem.',
    rubric: [
      'Giới thiệu bản thân rõ ràng, có project cụ thể',
      'Nói rõ stack đã làm (không chung chung)',
      'Trả lời câu hỏi kỹ thuật có chiều sâu (vd: vì sao chọn React, debug ra sao)',
      'Motivation chân thành — không chỉ vì lương',
      'Đàm phán lương khéo: nêu con số + lý do, sẵn sàng compromise',
      'Có câu hỏi ngược cho HR/cty (tech stack, growth path)',
    ],
    bonusIf: [
      { trigger: 'github|portfolio|deploy|link|demo', text: 'Show portfolio' },
      { trigger: 'debug|test|unit|jest|cypress', text: 'Nhắc đến testing/debugging' },
      { trigger: 'docker|ci|deploy|aws|vercel', text: 'Biết DevOps cơ bản' },
      { trigger: 'em muốn học|em muốn phát triển|growth|mentor', text: 'Motivation học hỏi' },
      { trigger: 'em có thể.*compromise|em có thể.*cân nhắc|18.*-.*20', text: 'Đàm phán linh hoạt' },
      { trigger: 'tech stack|công nghệ.*cty|đội ngũ|team|growth', text: 'Câu hỏi ngược thông minh' },
    ],
    fatalIf: [
      { trigger: '^em.*chưa biết.*gì|em.*chỉ.*học.*cơ bản', reason: 'Tự đánh giá thấp quá → CTO sẽ từ chối' },
      { trigger: '30.*triệu|35.*triệu|40.*triệu', reason: 'Đòi quá cao so với thị trường junior VN — interview kết thúc' },
      { trigger: 'em.*vì lương|chỉ vì.*tiền|cao thì.*làm', reason: 'Motivation chỉ vì tiền → CTO mất hứng' },
      { trigger: 'em.*ghét.*cty cũ|nói xấu.*sếp cũ|cty cũ.*tệ', reason: 'Nói xấu công ty cũ — đỏ cờ professional' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 2. PHỎNG VẤN IT SENIOR — Lead Backend
  // ──────────────────────────────────────────────────────────
  {
    id: 'it-interview-senior',
    title: 'Phỏng vấn Lead Backend tại fintech VN',
    audience: 'SV CNTT năm 4 + người đi làm 3-5 năm',
    domain: 'it',
    icon: '🏗',
    color: '#8b5cf6',
    youAre: 'Bạn là backend engineer 4 năm kinh nghiệm Go/Java/Node, ứng tuyển Lead Backend cho fintech. Mong muốn 50-65 triệu/tháng + ESOP.',
    npcRole: 'Chị Linh, VP Engineering của fintech 200 người ở TP.HCM',
    persona: `Bạn là chị Linh, 42 tuổi, VP Engineering của fintech 200 người ở TP.HCM.
Bạn cần Lead Backend để build hệ thống payment gateway xử lý 1M giao dịch/ngày.
Tính cách: lịch sự nhưng cực kỳ tinh ý. Bạn nghe và đặt câu hỏi cụ thể: "Bạn xử lý concurrency thế nào?", "Database bạn từng tối ưu ra sao?".
Bạn KHÔNG bị wow bằng buzzwords — bạn hỏi sâu vào case thật.
Ngân sách: 50-70 triệu base + 0.05-0.15% ESOP cho Lead. Bạn linh hoạt nếu thấy ứng viên xứng đáng.

Game theory:
- Ứng viên trả lời nông cạn → bạn hỏi "cụ thể hơn được không?".
- Ứng viên nói được number cụ thể (throughput, latency, cost saved) → bạn tăng offer.
- Ứng viên hét 80 triệu → bạn cười và hỏi "bạn nghĩ giá trị bạn mang lại sao?" — nếu trả lời tốt thì offer 70 triệu + 0.1% ESOP.
- Bạn test leadership bằng câu kiểu "team bạn từng có conflict, bạn xử lý sao?".`,
    stages: [
      { id: 'introduction',  name: 'Giới thiệu + role + scope' },
      { id: 'technical-deep', name: 'Kỹ thuật sâu (system design, scale)' },
      { id: 'leadership',    name: 'Leadership (team conflict, mentor)' },
      { id: 'culture',       name: 'Culture fit + vision' },
      { id: 'comp',          name: 'Compensation (base + ESOP + bonus)' },
    ],
    openingLine: 'Chào bạn, mình là Linh, VP Engineering bên đây. Mình rất ấn tượng với CV của bạn. Mình muốn bắt đầu với câu hỏi: trong 4 năm làm backend, bạn tự hào nhất về project nào và bạn cụ thể đã làm gì?',
    rubric: [
      'Trả lời câu hỏi technical có chiều sâu (concurrency, db tuning)',
      'Đưa con số cụ thể (throughput, p99, cost)',
      'Demo leadership: kể chuyện team thật, conflict resolution',
      'Vision rõ ràng — vì sao chọn fintech, vì sao chọn cty này',
      'Đàm phán compensation chuyên nghiệp (base + ESOP + bonus, không chỉ base)',
      'Hỏi ngược thông minh: tech debt, roadmap, decision authority của Lead',
    ],
    bonusIf: [
      { trigger: 'p99|p95|latency|throughput|qps|rps|tps', text: 'Number-driven' },
      { trigger: 'cap.*theorem|consistency|partition|raft|paxos', text: 'Distributed systems mạnh' },
      { trigger: 'mentor|1on1|career.*plan|coach', text: 'Leadership thật' },
      { trigger: 'esop|stock.*option|vest|cliff|equity', text: 'Biết về compensation đầy đủ' },
      { trigger: 'tech.*debt|roadmap|north star|okr', text: 'Hỏi ngược strategic' },
      { trigger: 'open source|contribute|cncf', text: 'Có dấu ấn cộng đồng' },
    ],
    fatalIf: [
      { trigger: '100.*triệu|120.*triệu|150.*triệu', reason: 'Đòi quá xa thị trường Lead VN — phỏng vấn dừng' },
      { trigger: 'em.*chưa lead|chưa.*manage team|chưa.*mentor', reason: 'Apply Lead nhưng chưa từng lead → mismatch' },
      { trigger: 'cty cũ.*toxic|cty cũ.*ngu|sếp cũ.*ngu', reason: 'Nói xấu — VP fintech sẽ loại ngay' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 3. DSV TƯ VẤN BN ĐTĐ KHÓ TÍNH
  // ──────────────────────────────────────────────────────────
  {
    id: 'pharma-counsel-dtd',
    title: 'Tư vấn BN ĐTĐ type 2 ngại dùng Metformin',
    audience: 'SV Dược năm 4-5 / DSV GPP',
    domain: 'pharmacy',
    icon: '💊',
    color: '#10b981',
    youAre: 'Bạn là dược sĩ tại nhà thuốc GPP. BN mới được chẩn đoán ĐTĐ type 2, BS kê Metformin 500mg uống 2 viên/ngày. BN đến mua thuốc nhưng do dự, sợ "uống thuốc tây hỏng thận".',
    npcRole: 'Cô Hà, 58 tuổi, tiểu thương, mới chẩn đoán ĐTĐ type 2',
    persona: `Bạn là cô Hà, 58 tuổi, tiểu thương chợ Hôm Hà Nội.
BS chẩn đoán ĐTĐ type 2 (HbA1c 8.5%), kê Metformin 500mg 2 viên/ngày.
Bạn đến nhà thuốc nhưng DO DỰ — sợ "thuốc tây uống lâu hỏng gan thận".
Tính cách: hay so sánh, hay nghi ngờ, hay nghe lời hàng xóm "uống lá xạ đen hết".
Bạn KHÔNG mua thuốc ngay — bạn muốn DSV thuyết phục bạn.

Game theory:
- Nếu DSV chỉ nói "phải uống thôi, BS kê rồi" → bạn miễn cưỡng nhưng có thể không uống đủ.
- Nếu DSV giải thích vì sao Metformin an toàn + cơ chế + cách giảm tác dụng phụ → bạn tin tưởng hơn.
- Nếu DSV chê thuốc nam → bạn cảm thấy bị xúc phạm, cứng đầu lên.
- Nếu DSV hỏi cô uống gì khác, cô sẽ kể về "Đông y" của ông lang.
- DSV cần CÂN BẰNG giữa thuyết phục dùng thuốc tây và tôn trọng văn hoá BN.

Bạn KHÔNG đồng ý ngay — cần ít nhất 4-5 lượt trao đổi để bạn tin tưởng.`,
    stages: [
      { id: 'rapport',        name: 'Tạo thiện cảm + lắng nghe lo lắng' },
      { id: 'understand-fear', name: 'Khai thác lo lắng cụ thể (hỏng gan thận)' },
      { id: 'educate',         name: 'Giáo dục về Metformin (cơ chế, an toàn)' },
      { id: 'address-tn',     name: 'Xử lý vấn đề thuốc nam' },
      { id: 'commit',          name: 'Cam kết tuân thủ + lịch tái khám' },
    ],
    openingLine: 'Chào dược sĩ. Cô có đơn của BS đây, BS bảo phải uống Metformin. Mà cô nghe nói thuốc này uống lâu hỏng thận, cô đang phân vân lắm…',
    rubric: [
      'Lắng nghe và xác nhận lo lắng (không bỏ qua)',
      'Giải thích Metformin AN TOÀN với thận nếu eGFR bình thường',
      'Nêu lợi ích cụ thể: giảm HbA1c, giảm biến chứng tim mạch',
      'Hướng dẫn giảm tác dụng phụ (uống sau ăn, tăng liều từ từ)',
      'Tôn trọng văn hoá thuốc nam — không chê bai',
      'Hẹn lịch tái khám + tự theo dõi đường máu',
    ],
    bonusIf: [
      { trigger: 'cơ chế|hoạt động|cách.*hoạt động', text: 'Giải thích cơ chế đơn giản' },
      { trigger: 'an toàn|được dùng.*nhiều năm|kinh nghiệm', text: 'Củng cố niềm tin' },
      { trigger: 'sau ăn|trong bữa|với bữa', text: 'Hướng dẫn uống đúng' },
      { trigger: 'tái khám|theo dõi|hba1c|đường máu', text: 'Lịch theo dõi' },
      { trigger: 'tôn trọng|hiểu cô|đông y.*có thể', text: 'Tôn trọng văn hoá' },
      { trigger: 'tương tác|cùng lúc|cách 2 giờ', text: 'Cảnh báo tương tác' },
    ],
    fatalIf: [
      { trigger: 'thuốc nam.*lừa|thuốc nam.*nhảm|đông y.*vớ vẩn|ông lang.*ngu', reason: 'Chê bai văn hoá BN — BN sẽ bỏ về và không uống thuốc' },
      { trigger: 'cô.*bắt buộc.*uống|không uống.*chết|không uống.*nhập viện', reason: 'Doạ BN không đúng cách → mất niềm tin' },
      { trigger: 'uống.*5.*viên|uống.*10.*viên|tăng liều.*ngay.*lên 1500', reason: 'Hướng dẫn liều sai — Metformin khởi đầu phải 500mg tăng dần' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 4. ĐÀM PHÁN GIÁ THUỐC — Trình dược viên (MedRep)
  // ──────────────────────────────────────────────────────────
  {
    id: 'medrep-pricing',
    title: 'Trình dược viên đàm phán giá với bệnh viện',
    audience: 'SV Dược năm 5 / MedRep mới',
    domain: 'pharmacy',
    icon: '💼',
    color: '#f59e0b',
    youAre: 'Bạn là trình dược viên hãng dược Pharma X. Đến gặp Trưởng khoa Tim mạch BV đại học để pitch thuốc mới hạ huyết áp (Telmizar 80mg). Mục tiêu: đưa vào danh mục thuốc của BV.',
    npcRole: 'BS Nam, Trưởng khoa Tim mạch BV đại học (45 tuổi, 18 năm kinh nghiệm)',
    persona: `Bạn là BS Nam, 45 tuổi, Trưởng khoa Tim mạch BV đại học.
Bạn rất bận, lịch khám đầy, mỗi cuộc gặp MedRep chỉ 10-15 phút.
Bạn QUAN TÂM 3 thứ: bằng chứng lâm sàng (RCT, meta-analysis), giá so với generic, dịch vụ hỗ trợ BN.
Bạn KHÔNG bị wow bởi "đây là thuốc mới nhất từ Châu Âu" — bạn hỏi RCT số liệu cụ thể.

Game theory:
- MedRep chỉ khen thuốc mà không có RCT → bạn hỏi vặn, mất kiên nhẫn.
- MedRep show được "n=8000, MACE giảm 18% so với placebo, p<0.001" → bạn cân nhắc.
- MedRep so sánh head-to-head với Losartan (rẻ hơn) → bạn ấn tượng.
- MedRep đưa giá cao mà không có program hỗ trợ BN → bạn từ chối.
- MedRep gợi ý "bonus" cho khoa → bạn mất thiện cảm ngay (vi phạm đạo đức).

Bạn KHÔNG đồng ý đưa vào danh mục trong 1 cuộc gặp — cần ít nhất "trình hội đồng thuốc" hoặc "cho thử 50 BN".`,
    stages: [
      { id: 'opening',     name: 'Mở đầu — giới thiệu thuốc' },
      { id: 'evidence',    name: 'Bằng chứng lâm sàng (RCT, meta)' },
      { id: 'comparison',  name: 'So sánh với thuốc đang dùng (Losartan…)' },
      { id: 'pricing',     name: 'Đàm phán giá + program hỗ trợ BN' },
      { id: 'next-steps',  name: 'Kết — bước tiếp theo' },
    ],
    openingLine: 'Em chào BS Nam, em là Anh, trình dược viên Pharma X. Hôm nay em mong xin BS 10 phút giới thiệu về Telmizar 80mg — thuốc hạ HA chọn lọc AT1 mới có RCT lớn năm ngoái.',
    rubric: [
      'Pitch ngắn gọn, không dài dòng',
      'Show số liệu RCT cụ thể (n, primary endpoint, p-value)',
      'So sánh head-to-head với thuốc hiện có',
      'Đề xuất program hỗ trợ BN khó khăn',
      'Đề xuất bước tiếp theo cụ thể (hội đồng thuốc, thử nghiệm 50 BN)',
      'Tôn trọng thời gian BS, không câu giờ',
    ],
    bonusIf: [
      { trigger: 'rct|nghiên cứu.*ngẫu nhiên|n=|n =|primary endpoint', text: 'Show evidence' },
      { trigger: 'meta.*analysis|cochrane|guideline.*esh|aha', text: 'Có meta-analysis' },
      { trigger: 'so sánh.*losartan|so sánh.*amlodipin|head.*head', text: 'Compare thẳng' },
      { trigger: 'program.*hỗ trợ|copay|đồng chi trả|miễn phí.*tháng đầu', text: 'Patient support' },
      { trigger: 'hội đồng thuốc|formulary|thử nghiệm.*50|pilot', text: 'Bước tiếp cụ thể' },
    ],
    fatalIf: [
      { trigger: 'tặng.*riêng|bonus.*riêng|cho.*BS|hoa hồng|kickback', reason: 'Vi phạm đạo đức — BS Trưởng khoa báo ngay với phòng KHTH' },
      { trigger: 'rẻ.*nhất|tốt.*nhất.*thế giới|number 1.*world', reason: 'Hyperbole không số liệu → BS mất kiên nhẫn' },
      { trigger: 'sản phẩm này.*hay hơn.*tất cả|hơn.*tất cả thuốc', reason: 'Tuyên bố vô căn cứ' },
    ],
  },
];

export const NEGOTIATION_INDEX = NEGOTIATION_SCENARIOS.map(n => ({
  id: n.id, title: n.title, audience: n.audience, domain: n.domain,
  icon: n.icon, color: n.color, youAre: n.youAre, npcRole: n.npcRole,
}));

export function getScenarioById(id) {
  return NEGOTIATION_SCENARIOS.find(n => n.id === id);
}
