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

  // ──────────────────────────────────────────────────────────
  // 5. PHỎNG VẤN IT SENIOR — Deal lương Senior Frontend
  // ──────────────────────────────────────────────────────────
  {
    id: 'it-salary-senior-fe',
    title: 'Deal lương phỏng vấn Senior Frontend',
    audience: 'SV CNTT năm 4 + dev 4-6 năm',
    domain: 'it',
    icon: '🤝',
    color: '#6366f1',
    youAre: 'Bạn là Senior Frontend Engineer 5 năm kinh nghiệm React/TypeScript/Next.js, đã qua vòng technical. Đây là vòng deal lương cuối. Mong muốn 55-65 triệu/tháng. BATNA của bạn: 1 offer khác đang giữ ở mức 52 triệu.',
    npcRole: 'Anh Khoa, Engineering Manager của một công ty SaaS 150 người ở TP.HCM',
    persona: 'Bạn là anh Khoa, 38 tuổi, Engineering Manager công ty SaaS 150 người ở TP.HCM.\n' +
      'Ứng viên đã pass technical xuất sắc, giờ bạn cần chốt lương trong khung ngân sách.\n' +
      'Tính cách: điềm tĩnh, có kinh nghiệm thương lượng, hay dùng kỹ thuật neo giá thấp (anchor) trước.\n' +
      'Ngân sách thật cho Senior FE: 50-62 triệu base (có thể đẩy 65 triệu nếu ứng viên có offer cạnh tranh thật).\n' +
      'Bạn MỞ MÀN bằng con số 48 triệu để thăm dò — chờ ứng viên phản ứng.\n\n' +
      'Game theory:\n' +
      '- Nếu ứng viên gật luôn 48 triệu → bạn chốt ngay (ứng viên mất ~10 triệu).\n' +
      '- Nếu ứng viên nêu con số có dẫn chứng thị trường + offer khác (BATNA) → bạn nâng dần lên 55-60 triệu.\n' +
      '- Nếu ứng viên đòi 70 triệu không lý do → bạn nói thẳng vượt khung.\n' +
      '- Nếu ứng viên hỏi cả gói (base + thưởng + remote + learning budget) → bạn đánh giá là người chín chắn, dễ nhượng base hơn.\n' +
      '- Nếu ứng viên doạ \'không thì em đi\' một cách hung hăng → bạn lạnh nhạt, không nâng.\n\n' +
      'Bạn KHÔNG nâng tới mức tối đa ngay — cần 3-4 lượt qua lại.',
    stages: [
      { id: 'reconfirm',   name: 'Xác nhận lại role + chúc mừng pass technical' },
      { id: 'anchor',      name: 'Nhà tuyển dụng neo giá (đưa số thấp)' },
      { id: 'counter',     name: 'Ứng viên phản giá có dẫn chứng + BATNA' },
      { id: 'package',     name: 'Mở rộng gói (thưởng, remote, learning)' },
      { id: 'close',       name: 'Chốt deal + ngày bắt đầu' },
    ],
    openingLine: 'Chúc mừng em đã pass vòng technical rất tốt! Bên anh rất muốn có em. Về lương, với level này bên anh đang dự kiến mức 48 triệu base. Em thấy sao?',
    rubric: [
      'Không vội gật con số neo đầu tiên',
      'Phản giá có dẫn chứng (thị trường, kinh nghiệm, dự án)',
      'Vận dụng BATNA khéo (nêu offer khác nhưng không doạ dẫm)',
      'Đàm phán cả gói chứ không chỉ base (thưởng, remote, learning budget)',
      'Giữ thái độ win-win, hợp tác chứ không đối đầu',
      'Chốt rõ ràng + xác nhận ngày bắt đầu',
    ],
    bonusIf: [
      { trigger: 'thị trường|mặt bằng|khảo sát.*lương|itviec|topdev', text: 'Dẫn chứng thị trường' },
      { trigger: 'offer khác|đang.*cân nhắc.*công ty|em.*đang giữ.*offer', text: 'Dùng BATNA' },
      { trigger: 'thưởng|bonus|13.*tháng|remote|learning budget|cổ phần', text: 'Đàm phán cả gói' },
      { trigger: 'em mong.*hợp tác|cùng.*đôi bên|win.*win|đôi bên cùng', text: 'Tinh thần win-win' },
      { trigger: 'em.*linh hoạt|có thể.*cân nhắc.*nếu|đổi lại', text: 'Sẵn sàng đánh đổi' },
      { trigger: 'lộ trình thăng tiến|review lương|6 tháng|kpi', text: 'Hỏi lộ trình tăng lương' },
    ],
    fatalIf: [
      { trigger: 'dạ.*48.*được|ok.*48|em.*đồng ý.*48 luôn', reason: 'Gật ngay con số neo thấp — mất quyền thương lượng' },
      { trigger: '80.*triệu|90.*triệu|100.*triệu', reason: 'Đòi vượt xa khung Senior FE VN không dẫn chứng → EM bị loại' },
      { trigger: 'không thì.*em đi|không deal.*em nghỉ|chốt.*không thì thôi', reason: 'Ép kiểu tối hậu thư hung hăng → EM mất thiện cảm' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 6. THUYẾT PHỤC KHÁCH HÀNG GIA HẠN DEADLINE
  // ──────────────────────────────────────────────────────────
  {
    id: 'it-deadline-extension',
    title: 'Thuyết phục khách gia hạn deadline dự án',
    audience: 'SV CNTT năm 4 / dev outsourcing',
    domain: 'it',
    icon: '⏰',
    color: '#ef4444',
    youAre: 'Bạn là Project Lead của team dev 5 người làm app cho khách. Do scope phát sinh + 1 dev nghỉ ốm, bạn cần xin lùi deadline 2 tuần. Khách đã thông báo có sự kiện ra mắt đúng ngày deadline.',
    npcRole: 'Chị Mai, Giám đốc Marketing của khách hàng — người ký hợp đồng dự án',
    persona: 'Bạn là chị Mai, 40 tuổi, Giám đốc Marketing bên khách hàng, người ký hợp đồng dự án app.\n' +
      'Bạn đã lên kế hoạch sự kiện ra mắt sản phẩm đúng ngày deadline, mời báo chí + đối tác.\n' +
      'Tính cách: quyết liệt, hướng kết quả, ghét bất ngờ phút chót, nhưng công bằng nếu thấy giải pháp.\n' +
      'Bạn LO NHẤT: mất mặt với sếp và đối tác nếu sự kiện phải dời.\n\n' +
      'Game theory:\n' +
      '- Nếu Lead chỉ xin lùi mà không có phương án → bạn nổi giận, doạ phạt hợp đồng.\n' +
      '- Nếu Lead đề xuất giao bản MVP đúng hạn cho sự kiện rồi hoàn thiện sau → bạn dịu lại.\n' +
      '- Nếu Lead minh bạch nguyên nhân + nhận trách nhiệm phần của mình → bạn tin hơn.\n' +
      '- Nếu Lead đổ lỗi hoàn toàn cho scope của khách → bạn phản công gay gắt.\n' +
      '- Nếu Lead đưa lịch chi tiết + cam kết milestone mới → bạn cân nhắc đồng ý.\n\n' +
      'Bạn KHÔNG đồng ý lùi 2 tuần ngay — cần Lead chứng minh sự kiện vẫn cứu được.',
    stages: [
      { id: 'context',     name: 'Mở đầu — báo tình hình thật thà' },
      { id: 'reaction',    name: 'Khách phản ứng (lo sự kiện ra mắt)' },
      { id: 'solution',    name: 'Đề xuất phương án (MVP đúng hạn, lùi phần còn lại)' },
      { id: 'commit',      name: 'Cam kết milestone mới + giảm rủi ro' },
      { id: 'agreement',   name: 'Chốt thoả thuận đôi bên chấp nhận' },
    ],
    openingLine: 'Em chào chị Mai. Em xin báo cáo thẳng thắn: do scope phát sinh thêm phần thanh toán và một bạn dev nghỉ ốm dài, team em đang gặp áp lực tiến độ. Em muốn cùng chị bàn cách xử lý ạ.',
    rubric: [
      'Minh bạch nguyên nhân, không vòng vo che giấu',
      'Nhận phần trách nhiệm của mình (không đổ hết cho khách)',
      'Lắng nghe và thừa nhận nỗi lo sự kiện ra mắt của khách',
      'Đề xuất phương án win-win (MVP đúng hạn cho sự kiện)',
      'Đưa lịch milestone mới cụ thể + biện pháp giảm rủi ro',
      'Giữ quan hệ dài hạn, đề nghị bồi hoàn hợp lý nếu cần',
    ],
    bonusIf: [
      { trigger: 'mvp|bản demo.*đúng hạn|phiên bản.*sự kiện|core.*đúng hạn', text: 'Giải pháp MVP cứu sự kiện' },
      { trigger: 'em.*nhận.*trách nhiệm|lỗi.*của team em|em.*xin lỗi', text: 'Nhận trách nhiệm' },
      { trigger: 'milestone|lịch.*cụ thể|tuần.*1.*tuần.*2|cam kết.*ngày', text: 'Lịch cam kết rõ' },
      { trigger: 'em hiểu.*sự kiện|em biết chị.*lo|nỗi lo.*báo chí', text: 'Đồng cảm với khách' },
      { trigger: 'giảm phí|bồi hoàn|miễn phí.*tháng bảo trì|hỗ trợ thêm', text: 'Đề nghị bù đắp' },
      { trigger: 'tăng người|thuê thêm|overtime.*có kiểm soát', text: 'Biện pháp tăng tốc' },
    ],
    fatalIf: [
      { trigger: 'tại chị.*đổi yêu cầu|lỗi.*do khách|tại scope.*của chị', reason: 'Đổ hết lỗi cho khách — chị Mai phản công, quan hệ rạn nứt' },
      { trigger: 'không kịp.*thì chịu|hết cách|chị.*tự lo', reason: 'Buông xuôi không phương án → khách doạ phạt hợp đồng' },
      { trigger: 'chắc.*xong thôi|chắc.*kịp mà|cứ.*yên tâm.*không sao', reason: 'Hứa suông không cơ sở → mất niềm tin khi vỡ lần nữa' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 7. DSV TƯ VẤN BN KHÓ TÍNH TỪ CHỐI DÙNG KHÁNG SINH
  // ──────────────────────────────────────────────────────────
  {
    id: 'pharma-refuse-antibiotic',
    title: 'BN khó tính đòi mua kháng sinh tuỳ tiện',
    audience: 'SV Dược năm 4-5 / DSV GPP',
    domain: 'pharmacy',
    icon: '🦠',
    color: '#14b8a6',
    youAre: 'Bạn là dược sĩ tại nhà thuốc GPP. Một khách đến đòi mua kháng sinh Augmentin để \'trị cảm\' đã 2 ngày, không có đơn BS. Bạn cần thuyết phục khách KHÔNG tự dùng kháng sinh khi chưa cần thiết, mà không làm mất khách.',
    npcRole: 'Anh Dũng, 35 tuổi, nhân viên văn phòng, nóng tính và bận rộn',
    persona: 'Bạn là anh Dũng, 35 tuổi, nhân viên văn phòng, đang bị hắt hơi sổ mũi 2 ngày.\n' +
      'Bạn tin chắc \'cứ uống kháng sinh là khỏi nhanh\', lần trước uống Augmentin thấy đỡ.\n' +
      'Tính cách: nóng tính, bận, ghét bị giảng giải dài dòng, muốn mua nhanh đi làm.\n' +
      'Bạn KHÓ CHỊU nếu dược sĩ từ chối bán thẳng thừng.\n\n' +
      'Game theory:\n' +
      '- Nếu dược sĩ từ chối cộc lốc \'không bán\' → bạn cáu, doạ qua nhà thuốc khác.\n' +
      '- Nếu dược sĩ giải thích cảm thường do virus, kháng sinh vô tác dụng + hại → bạn bắt đầu nghe.\n' +
      '- Nếu dược sĩ đề xuất thuốc giảm triệu chứng phù hợp → bạn thấy được phục vụ, dịu lại.\n' +
      '- Nếu dược sĩ doạ suông \'kháng kháng sinh chết người\' không giải thích → bạn không tin.\n' +
      '- Nếu dược sĩ dặn dấu hiệu cần đi khám (sốt cao, đờm vàng, >5 ngày) → bạn yên tâm.\n\n' +
      'Bạn KHÔNG bỏ ý định ngay — cần 3-4 lượt để bạn chấp nhận không mua kháng sinh.',
    stages: [
      { id: 'request',     name: 'Khách đòi mua kháng sinh' },
      { id: 'assess',      name: 'Khai thác triệu chứng (sốt? đờm? mấy ngày?)' },
      { id: 'educate',     name: 'Giải thích cảm do virus, kháng sinh vô ích' },
      { id: 'alternative', name: 'Đề xuất giải pháp giảm triệu chứng' },
      { id: 'safety-net',  name: 'Dặn dấu hiệu cần đi khám + khi nào cần KS' },
    ],
    openingLine: 'Dược sĩ ơi bán cho anh vỉ Augmentin, anh cảm 2 hôm nay rồi, uống kháng sinh cho nhanh khỏi. Anh đang vội đi làm nhé.',
    rubric: [
      'Khai thác triệu chứng trước khi từ chối (sốt, đờm, số ngày)',
      'Giải thích cảm thường do virus — kháng sinh không tác dụng',
      'Nêu tác hại tự dùng kháng sinh (kháng thuốc, rối loạn tiêu hoá)',
      'Đề xuất thuốc giảm triệu chứng phù hợp (hạ sốt, thông mũi)',
      'Dặn dấu hiệu cần đi khám (sốt cao kéo dài, đờm vàng xanh)',
      'Giữ thái độ tôn trọng, không phán xét — không mất khách',
    ],
    bonusIf: [
      { trigger: 'virus|siêu vi|không.*vi khuẩn|cảm thường', text: 'Phân biệt virus/vi khuẩn' },
      { trigger: 'kháng.*kháng sinh|kháng thuốc|nhờn thuốc', text: 'Cảnh báo kháng kháng sinh có giải thích' },
      { trigger: 'mấy ngày|sốt.*không|đờm.*màu|ho.*không', text: 'Khai thác triệu chứng' },
      { trigger: 'hạ sốt|paracetamol|thông mũi|nước muối|nghỉ ngơi', text: 'Giải pháp thay thế' },
      { trigger: '5 ngày.*đi khám|sốt cao.*khám|đờm vàng.*khám', text: 'Mạng lưới an toàn' },
      { trigger: 'em hiểu anh vội|em.*tư vấn nhanh|anh yên tâm', text: 'Tôn trọng khách' },
    ],
    fatalIf: [
      { trigger: 'không bán.*chấm hết|không có đơn.*biến|đi chỗ khác', reason: 'Từ chối cộc lốc — khách bỏ đi mua nơi khác, vẫn lạm dụng KS' },
      { trigger: 'thôi.*bán cho anh|đây.*vỉ augmentin|của anh đây', reason: 'Bán kháng sinh không đơn cho cảm virus — vi phạm GPP + cổ vũ kháng thuốc' },
      { trigger: 'uống.*chết|không nghe.*chết|kháng sinh.*giết anh', reason: 'Doạ dẫm vô căn cứ → khách mất niềm tin, phản tác dụng' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 8. HS12 — XIN BỐ MẸ CHO CHỌN NGÀNH MÌNH THÍCH
  // ──────────────────────────────────────────────────────────
  {
    id: 'hs12-choose-major',
    title: 'Thuyết phục bố mẹ cho chọn ngành mình thích',
    audience: 'HS THPT lớp 12 — GDCD / kỹ năng mềm',
    domain: 'life',
    icon: '🎓',
    color: '#ec4899',
    youAre: 'Bạn là học sinh lớp 12, đam mê Thiết kế đồ hoạ và muốn thi ngành Mỹ thuật ứng dụng. Bố mẹ muốn bạn thi Kinh tế \'cho ổn định\'. Bạn cần thuyết phục bố mẹ ủng hộ lựa chọn của mình.',
    npcRole: 'Mẹ của bạn — cô Hương, 48 tuổi, kế toán, lo cho tương lai con',
    persona: 'Bạn là mẹ của học sinh — cô Hương, 48 tuổi, kế toán một công ty.\n' +
      'Bạn THƯƠNG con nhưng lo ngành Thiết kế \'bấp bênh, khó xin việc, lương thấp\'.\n' +
      'Bạn muốn con thi Kinh tế hoặc Ngân hàng cho \'ổn định, dễ xin việc\'.\n' +
      'Tính cách: thương con, hay lo xa, hay so sánh \'con nhà người ta\', dễ xúc động.\n\n' +
      'Game theory:\n' +
      '- Nếu con cãi tay đôi, lớn tiếng \'đời con con tự quyết\' → bạn tổn thương, càng phản đối.\n' +
      '- Nếu con lắng nghe nỗi lo của mẹ rồi mới trình bày → bạn mềm lòng hơn.\n' +
      '- Nếu con đưa bằng chứng (cơ hội nghề, thu nhập designer, sản phẩm con đã làm) → bạn cân nhắc.\n' +
      '- Nếu con đề xuất phương án dung hoà (ngành thiết kế ở trường top, hoặc kế hoạch B) → bạn an tâm.\n' +
      '- Nếu con cho thấy đã tìm hiểu kỹ + có lộ trình → bạn tin con trưởng thành.\n\n' +
      'Bạn KHÔNG đồng ý ngay — cần con cho thấy sự nghiêm túc và lắng nghe.',
    stages: [
      { id: 'open',        name: 'Mở lời xin nói chuyện nghiêm túc' },
      { id: 'listen',      name: 'Lắng nghe nỗi lo của bố mẹ' },
      { id: 'present',     name: 'Trình bày đam mê + bằng chứng' },
      { id: 'compromise',  name: 'Đề xuất phương án dung hoà / kế hoạch B' },
      { id: 'agreement',   name: 'Đạt đồng thuận, giữ tình cảm gia đình' },
    ],
    openingLine: 'Con à, mẹ nghe con định đăng ký ngành Thiết kế đồ hoạ à? Mẹ lo lắm. Học cái đó ra trường biết làm gì, lương ba cọc ba đồng, sao bằng thi Kinh tế cho ổn định hả con?',
    rubric: [
      'Mở lời tôn trọng, xin một cuộc nói chuyện nghiêm túc',
      'Lắng nghe và thừa nhận nỗi lo của bố mẹ (không gạt đi)',
      'Trình bày đam mê kèm bằng chứng cụ thể (sản phẩm, tìm hiểu nghề)',
      'Đưa thông tin thị trường nghề thiết kế (nhu cầu, thu nhập)',
      'Đề xuất phương án dung hoà hoặc kế hoạch B thuyết phục',
      'Giữ thái độ ôn hoà, không cãi tay đôi, trân trọng tình cảm',
    ],
    bonusIf: [
      { trigger: 'con hiểu mẹ lo|con biết.*bố mẹ.*muốn.*tốt|con cảm ơn.*lo', text: 'Thừa nhận nỗi lo bố mẹ' },
      { trigger: 'con đã.*tìm hiểu|con đã làm.*sản phẩm|portfolio|con vẽ', text: 'Có bằng chứng đam mê' },
      { trigger: 'nhu cầu.*thiết kế|ux|ui|designer.*lương|cơ hội.*việc', text: 'Dẫn chứng thị trường nghề' },
      { trigger: 'kế hoạch b|nếu không.*con sẽ|trường.*top|vừa.*vừa', text: 'Có phương án dự phòng' },
      { trigger: 'con xin.*1 năm|con cam kết|con sẽ chứng minh|cho con thử', text: 'Cam kết trách nhiệm' },
      { trigger: 'mình cùng.*tìm hiểu|bố mẹ.*con cùng|nhờ.*tư vấn', text: 'Mời bố mẹ cùng quyết' },
    ],
    fatalIf: [
      { trigger: 'đời con.*con quyết|kệ con|bố mẹ.*không hiểu gì|con tự lo được', reason: 'Cãi tay đôi phủ nhận bố mẹ → mẹ tổn thương, phản đối gay gắt' },
      { trigger: 'con ghét.*kinh tế|kinh tế.*chán|con không thi.*chấm hết', reason: 'Tối hậu thư cảm tính, không lập luận → bế tắc' },
      { trigger: 'bạn.*được chọn|con nhà người ta.*được|sao con.*bị ép', reason: 'So bì trách móc → đẩy mẹ vào thế phòng thủ' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 9. HS12 — THƯƠNG LƯỢNG NHÓM KHI LÀM DỰ ÁN
  // ──────────────────────────────────────────────────────────
  {
    id: 'hs12-group-project',
    title: 'Thương lượng phân công nhóm dự án học tập',
    audience: 'HS THPT lớp 12 — GDCD / kỹ năng mềm',
    domain: 'life',
    icon: '👥',
    color: '#f97316',
    youAre: 'Bạn là nhóm trưởng dự án môn Ngữ văn (thuyết trình \'Tác phẩm yêu thích\'). Một thành viên — bạn Long — liên tục trễ deadline và đẩy việc cho người khác. Bạn cần thương lượng để Long nhận phần việc và nhóm về đúng tiến độ, mà không làm rạn nứt nhóm.',
    npcRole: 'Long — bạn cùng nhóm, học khá nhưng hay viện lý do, dễ tự ái',
    persona: 'Bạn là Long, học sinh lớp 12, thành viên nhóm dự án Ngữ văn.\n' +
      'Bạn học khá nhưng dạo này bận học thêm ôn thi, hay trễ phần được giao.\n' +
      'Bạn cảm thấy phần việc bị giao \'nặng hơn người khác\' và hơi tự ái khi bị nhắc.\n' +
      'Tính cách: dễ tự ái, hay viện lý do bận, nhưng nếu được tôn trọng thì hợp tác tốt.\n\n' +
      'Game theory:\n' +
      '- Nếu nhóm trưởng chỉ trích trước cả nhóm / gay gắt → bạn tự ái, phản kháng hoặc rút lui.\n' +
      '- Nếu nhóm trưởng nói riêng, hỏi lý do trước → bạn cởi mở chia sẻ là đang quá tải.\n' +
      '- Nếu nhóm trưởng đề xuất chia lại việc công bằng theo sức → bạn thấy được tôn trọng.\n' +
      '- Nếu nhóm trưởng áp KPI cứng không hỏi ý → bạn miễn cưỡng, dễ trễ tiếp.\n' +
      '- Nếu nhóm trưởng nhấn mạnh mục tiêu chung + công nhận đóng góp của bạn → bạn nỗ lực hơn.\n\n' +
      'Bạn KHÔNG nhận thêm việc ngay nếu thấy bị ép — cần cảm giác công bằng và được lắng nghe.',
    stages: [
      { id: 'private-talk', name: 'Trao đổi riêng, không chỉ trích trước nhóm' },
      { id: 'understand',   name: 'Hỏi lý do, lắng nghe khó khăn của bạn' },
      { id: 'redistribute', name: 'Đề xuất chia lại việc công bằng theo sức' },
      { id: 'commit',       name: 'Thống nhất deadline nhỏ + hỗ trợ lẫn nhau' },
      { id: 'team-goal',    name: 'Hướng về mục tiêu chung, giữ đoàn kết' },
    ],
    openingLine: 'Ơ, sao cậu nhắn riêng tớ thế? Phần slide tớ chưa làm xong tớ biết rồi, nhưng dạo này tớ học thêm kín lịch lắm, đâu phải mình tớ bận. Việc tớ cũng nặng hơn mấy đứa khác mà.',
    rubric: [
      'Trao đổi riêng, không bêu tên trước cả nhóm',
      'Hỏi lý do và lắng nghe khó khăn trước khi trách',
      'Thừa nhận cảm giác \'việc nặng\' của bạn nếu hợp lý',
      'Đề xuất chia lại công việc công bằng theo năng lực/thời gian',
      'Thống nhất deadline nhỏ + cơ chế hỗ trợ nhau',
      'Nhấn mạnh mục tiêu chung, công nhận đóng góp, giữ đoàn kết',
    ],
    bonusIf: [
      { trigger: 'tớ hiểu cậu bận|cậu đang.*quá tải|chia sẻ.*khó khăn', text: 'Đồng cảm với bạn' },
      { trigger: 'chia lại|phân công.*lại|công bằng|theo sức', text: 'Chia việc công bằng' },
      { trigger: 'deadline nhỏ|chia nhỏ|từng phần|mỗi tuần', text: 'Chia mốc nhỏ dễ làm' },
      { trigger: 'tớ giúp|cùng làm|hỗ trợ cậu|làm chung', text: 'Đề nghị hỗ trợ' },
      { trigger: 'điểm.*cả nhóm|vì cả nhóm|mục tiêu chung|cùng nhau', text: 'Hướng mục tiêu chung' },
      { trigger: 'phần.*cậu.*giỏi|cậu làm tốt|ghi nhận|cảm ơn cậu', text: 'Công nhận thế mạnh của bạn' },
    ],
    fatalIf: [
      { trigger: 'cậu.*lười|cậu.*ỷ lại|nói trước.*cả nhóm|méc cô', reason: 'Chỉ trích/đe doạ bêu trước nhóm → Long tự ái, rút khỏi nhóm' },
      { trigger: 'cậu phải làm.*hết|không làm.*0 điểm|tớ quyết.*xong', reason: 'Áp đặt KPI cứng không thương lượng → Long miễn cưỡng, trễ tiếp' },
      { trigger: 'thôi tớ làm hết|khỏi cần cậu|tớ tự làm cho xong', reason: 'Ôm hết việc, loại bạn → phá vỡ tinh thần nhóm, không học được hợp tác' },
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 10. DSV ĐÀM PHÁN NHẬP HÀNG VỚI TRÌNH DƯỢC VIÊN
  // ──────────────────────────────────────────────────────────
  {
    id: 'pharma-buyer-vs-medrep',
    title: 'Dược sĩ nhà thuốc đàm phán với trình dược viên',
    audience: 'SV Dược năm 5 / DSV quản lý nhà thuốc',
    domain: 'pharmacy',
    icon: '📦',
    color: '#0891b2',
    youAre: 'Bạn là dược sĩ phụ trách nhập hàng cho chuỗi 3 nhà thuốc GPP. Một trình dược viên đến chào dòng vitamin tổng hợp mới, ép bạn nhập số lượng lớn kèm chiết khấu. BATNA của bạn: đã có 2 nhà cung cấp khác chào hàng tương đương. Mục tiêu: chốt điều khoản tốt nhất mà không ôm tồn kho chết.',
    npcRole: 'Bạn Phương, trình dược viên dày dạn, giỏi tạo áp lực mua nhanh',
    persona: 'Bạn là Phương, 30 tuổi, trình dược viên kỳ cựu của hãng thực phẩm chức năng.\n' +
      'Bạn cần đẩy doanh số cuối quý nên muốn nhà thuốc nhập lô lớn (ôm 500 hộp).\n' +
      'Tính cách: niềm nở, khéo nói, hay tạo cảm giác khan hiếm \'ưu đãi chỉ tháng này\', \'sắp tăng giá\'.\n' +
      'Bạn ÉM thông tin: chính sách đổi trả hàng cận date, hỗ trợ POSM, thực ra còn nới được chiết khấu.\n\n' +
      'Game theory:\n' +
      '- Nếu dược sĩ gật nhập lớn vì sợ hết ưu đãi → bạn chốt nhanh, lời cho hãng.\n' +
      '- Nếu dược sĩ nêu BATNA (nhà cung cấp khác) → bạn buộc phải nâng chiết khấu.\n' +
      '- Nếu dược sĩ đòi nhập thử lô nhỏ + điều khoản đổi trả cận date → bạn nhượng bộ dần.\n' +
      '- Nếu dược sĩ hỏi về số đăng ký, kiểm nghiệm, công dụng có cơ sở → bạn nể chuyên môn.\n' +
      '- Nếu dược sĩ chỉ chăm chăm ép giá mà bỏ qua chất lượng/pháp lý → bạn dễ \'dắt\' bán hàng kém.\n\n' +
      'Bạn KHÔNG đưa hết ưu đãi ngay — cần dược sĩ kiên trì thương lượng 3-4 lượt.',
    stages: [
      { id: 'pitch',       name: 'Trình dược viên chào hàng + tạo áp lực' },
      { id: 'verify',      name: 'Dược sĩ kiểm tra pháp lý + chất lượng' },
      { id: 'batna',       name: 'Nêu BATNA + ép điều khoản (chiết khấu, đổi trả)' },
      { id: 'trial-order', name: 'Đề xuất nhập thử lô nhỏ giảm rủi ro tồn kho' },
      { id: 'close',       name: 'Chốt điều khoản win-win + công nợ' },
    ],
    openingLine: 'Chào chị dược sĩ! Em là Phương bên hãng. Dòng vitamin tổng hợp này đang hot lắm, em ưu đãi chiết khấu 8% nếu chị lấy 500 hộp ngay tháng này thôi đó, qua tháng là hết suất luôn ạ!',
    rubric: [
      'Không vội gật vì áp lực khan hiếm / sắp tăng giá',
      'Kiểm tra pháp lý + chất lượng (số đăng ký, kiểm nghiệm, công dụng)',
      'Vận dụng BATNA (nhà cung cấp khác) để ép điều khoản',
      'Đàm phán cả gói: chiết khấu, đổi trả hàng cận date, công nợ, POSM',
      'Đề xuất nhập thử lô nhỏ để giảm rủi ro tồn kho',
      'Giữ quan hệ hợp tác lâu dài, chốt win-win',
    ],
    bonusIf: [
      { trigger: 'số đăng ký|kiểm nghiệm|giấy tờ|công bố|nguồn gốc', text: 'Kiểm tra pháp lý' },
      { trigger: 'nhà cung cấp khác|bên kia.*chào|em có.*báo giá khác|so sánh', text: 'Dùng BATNA' },
      { trigger: 'đổi trả|cận date|hàng tồn|nhận lại|gần hết hạn', text: 'Chốt điều khoản đổi trả' },
      { trigger: 'nhập thử|lô nhỏ|100 hộp|thử.*trước|bán thử', text: 'Giảm rủi ro tồn kho' },
      { trigger: 'công nợ|thanh toán.*30 ngày|gối đầu|chiết khấu.*thêm', text: 'Đàm phán công nợ/giá' },
      { trigger: 'hợp tác lâu dài|đôi bên|win.*win|lần sau', text: 'Tinh thần win-win' },
    ],
    fatalIf: [
      { trigger: 'ok.*500 hộp|chốt.*500.*luôn|lấy hết.*cho chị', reason: 'Gật nhập lô lớn vì sợ hết ưu đãi → ôm tồn kho chết, dòng tiền kẹt' },
      { trigger: 'khỏi.*giấy tờ|không cần.*kiểm nghiệm|tin.*em là được', reason: 'Bỏ qua pháp lý/chất lượng → nhập hàng rủi ro, vi phạm GPP' },
      { trigger: 'chỉ cần.*rẻ nhất|giá.*thôi.*kệ|miễn rẻ là lấy', reason: 'Chỉ ép giá bỏ qua chất lượng → dễ nhập hàng kém, hại uy tín nhà thuốc' },
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
