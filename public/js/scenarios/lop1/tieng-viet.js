// ============================================================
// Lớp 1 · TIẾNG VIỆT — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK GDPT 2018 (Cánh Diều / Kết nối / Chân trời).
// Lớp 1 dạy đọc – viết âm, vần, tiếng, câu ngắn.
// ID prefix: "P1TV-wNN-quiz"
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1TV', 'tieng-viet', n, title, qs, opts);

export const P1TV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Làm quen · Tư thế ngồi viết · Bảng chữ cái', [
    Q('Bảng chữ cái tiếng Việt bắt đầu bằng chữ?', ['a', 'b', 'c', 'o'], 0, 'Chữ "a" đứng đầu bảng chữ cái.'),
    Q('Khi ngồi viết, lưng em phải?', ['Cong', 'Thẳng', 'Nghiêng nhiều', 'Tựa hẳn xuống'], 1, 'Ngồi thẳng lưng để bảo vệ cột sống.'),
    Q('Khoảng cách mắt đến vở khoảng?', ['10 cm', '25–30 cm', '50 cm', 'Áp sát'], 1, 'Khoảng 25–30 cm là an toàn cho mắt.'),
    Q('Tay nào thường dùng cầm bút (đa số)?', ['Tay trái', 'Tay phải', 'Hai tay', 'Tay nào cũng được'], 1, 'Đa số cầm bút tay phải.'),
    Q('Chữ cái nào sau ĐÂY không có trong bảng chữ cái tiếng Việt?', ['ă', 'â', 'f', 'đ'], 2, 'Tiếng Việt không có chữ "f" (chỉ có ph).'),
  ]),

  M(2, 'Âm /a/ · /b/ · /c/', [
    Q('Tiếng "ba" gồm những âm nào?', ['b + a', 'a + b', 'b + a + b', 'Chỉ a'], 0, 'Âm đầu "b" + vần "a".'),
    Q('Đọc tiếng "ca". Âm đầu là?', ['a', 'c', 'k', 'b'], 1, 'Âm đầu là "c".'),
    Q('Trong các tiếng: ba – bà – bá – bả – bã, chúng khác nhau ở?', ['Âm đầu', 'Dấu thanh', 'Số chữ cái', 'Vần'], 1, 'Cùng "ba", khác dấu thanh.'),
    Q('Tiếng "cá" có dấu gì?', ['Sắc', 'Huyền', 'Hỏi', 'Ngã'], 0, 'Dấu sắc trên a.'),
    Q('Chữ nào VIẾT HOA của "a"?', ['A', 'Ă', 'Â', 'O'], 0, 'A in hoa.'),
  ]),

  M(3, 'Âm /o/ · /ô/ · /ơ/', [
    Q('Tiếng "cô" gồm âm đầu là?', ['c', 'o', 'ô', 'k'], 0, 'Âm đầu "c".'),
    Q('Phân biệt: "co" và "cô" khác nhau ở?', ['Âm đầu', 'Âm chính (o – ô)', 'Dấu thanh', 'Không khác'], 1, '"o" và "ô" khác nhau.'),
    Q('Tiếng nào CÓ âm "ơ"?', ['cá', 'cờ', 'cô', 'co'], 1, '"cờ" có âm "ơ".'),
    Q('"Bò" có dấu gì?', ['Sắc', 'Huyền', 'Hỏi', 'Nặng'], 1, 'Dấu huyền.'),
    Q('Chữ "ô" khác "o" ở điểm nào?', ['Có dấu mũ', 'Có dấu sắc', 'Có nét cong', 'Không khác'], 0, '"ô" = o + dấu mũ.'),
  ]),

  M(4, 'Âm /e/ · /ê/ · /i/', [
    Q('Tiếng "bê" có âm chính là?', ['b', 'e', 'ê', 'i'], 2, 'Âm chính "ê".'),
    Q('"Bé" và "bè" khác nhau ở?', ['Âm đầu', 'Âm chính', 'Dấu thanh', 'Số chữ'], 2, 'Khác dấu thanh.'),
    Q('Tiếng "đi" có mấy chữ cái?', ['1', '2', '3', '4'], 1, 'đ + i = 2 chữ.'),
    Q('Trong các âm: e, ê, i — chữ nào CÓ DẤU MŨ?', ['e', 'ê', 'i', 'Cả ba'], 1, '"ê" có mũ.'),
    Q('"Bí" có dấu gì?', ['Sắc', 'Huyền', 'Hỏi', 'Ngã'], 0, 'Dấu sắc.'),
  ]),

  M(5, 'Âm /u/ · /ư/ · /n/ · /m/', [
    Q('Tiếng "mẹ" có âm đầu là?', ['m', 'e', 'ẹ', 'n'], 0, 'Âm đầu "m".'),
    Q('Tiếng "nụ" có dấu gì?', ['Sắc', 'Hỏi', 'Nặng', 'Huyền'], 2, 'Dấu nặng dưới u.'),
    Q('"Tu" và "tư" khác nhau ở?', ['Âm đầu', 'Âm chính', 'Dấu thanh', 'Vần'], 1, '"u" và "ư" khác nhau.'),
    Q('Chữ "ư" có gì khác chữ "u"?', ['Dấu mũ', 'Râu nhỏ bên phải', 'Dấu hỏi', 'Dấu sắc'], 1, '"ư" có thêm nét râu.'),
    Q('Tiếng "nam" có mấy âm (đầu + chính + cuối)?', ['1', '2', '3', '4'], 2, 'n + a + m = 3 phần.'),
  ]),

  M(6, 'Âm ghép: /ch/ · /kh/ · /nh/ · /ph/ · /th/', [
    Q('Tiếng "chợ" có âm đầu là?', ['c', 'h', 'ch', 'ợ'], 2, 'Âm đầu "ch" (âm ghép).'),
    Q('"Khế" có âm đầu là?', ['k', 'h', 'kh', 'ê'], 2, 'Âm đầu "kh".'),
    Q('Âm đầu của "nhà" là?', ['n', 'h', 'nh', 'à'], 2, 'Âm đầu "nh".'),
    Q('"Phở" có âm đầu là?', ['p', 'h', 'ph', 'ở'], 2, 'Âm đầu "ph".'),
    Q('"Thi" có âm đầu là?', ['t', 'h', 'th', 'i'], 2, 'Âm đầu "th".'),
  ]),

  M(7, 'Vần /an/ · /at/ · /ac/', [
    Q('Vần "an" gồm những âm nào?', ['a + n', 'a + t', 'a + c', 'Một âm'], 0, 'Âm chính "a" + âm cuối "n".'),
    Q('Tiếng "bàn" có vần là?', ['ba', 'an', 'àn', 'b'], 2, 'Vần "àn" (có dấu huyền).'),
    Q('Tiếng nào CÓ VẦN "ac"?', ['cá', 'cát', 'các', 'cán'], 2, '"các" có vần "ac".'),
    Q('"Hát" có vần?', ['ha', 'at', 'át', 'h'], 2, 'Vần "át".'),
    Q('Tiếng "lan" và "lát" khác nhau ở?', ['Âm đầu', 'Âm chính', 'Âm cuối', 'Dấu thanh'], 2, '"n" và "t" khác.'),
  ]),

  M(8, 'Vần /on/ · /ot/ · /oc/ · /en/ · /et/', [
    Q('"Con" có vần?', ['co', 'on', 'òn', 'c'], 1, 'Vần "on".'),
    Q('"Mèo" có vần?', ['me', 'eo', 'èo', 'mèo'], 2, 'Vần "èo".'),
    Q('"Hết" có vần?', ['he', 'et', 'ết', 'hết'], 2, 'Vần "ết".'),
    Q('Tiếng nào CÓ VẦN "oc"?', ['cọ', 'cóc', 'cò', 'có'], 1, '"cóc" có vần "oc".'),
    Q('"Sen" có vần?', ['se', 'en', 'sn', 's'], 1, 'Vần "en".'),
  ]),

  M(9, 'Vần /un/ · /ut/ · /uc/ · /in/ · /it/', [
    Q('"Bún" có vần?', ['bu', 'un', 'ún', 'b'], 2, 'Vần "ún".'),
    Q('"Phút" có vần?', ['phu', 'ut', 'út', 'ph'], 2, 'Vần "út".'),
    Q('"Tin" có vần?', ['ti', 'in', 'tin', 't'], 1, 'Vần "in".'),
    Q('Tiếng nào CÓ vần "uc"?', ['bụ', 'búc', 'búi', 'bù'], 1, '"búc" → vần "uc".'),
    Q('"Mít" có vần?', ['mi', 'it', 'ít', 'mít'], 2, 'Vần "ít".'),
  ]),

  M(10, 'Vần /anh/ · /inh/ · /ach/ · /ich/', [
    Q('"Anh" có vần?', ['a', 'an', 'anh', 'nh'], 2, 'Vần "anh".'),
    Q('"Sách" có vần?', ['sa', 'ach', 'ách', 's'], 2, 'Vần "ách".'),
    Q('"Xinh" có vần?', ['xi', 'in', 'inh', 'x'], 2, 'Vần "inh".'),
    Q('"Lịch" có vần?', ['li', 'ich', 'ịch', 'l'], 2, 'Vần "ịch".'),
    Q('Vần "anh" gồm?', ['a + n', 'a + nh', 'a + nh + h', 'Một âm'], 1, 'Âm chính "a" + âm cuối "nh".'),
  ]),

  M(11, 'Vần /ong/ · /ông/ · /ung/ · /ưng/', [
    Q('"Ong" có vần?', ['o', 'on', 'ong', 'g'], 2, 'Vần "ong".'),
    Q('"Sông" có vần?', ['so', 'ông', 'ong', 's'], 1, 'Vần "ông".'),
    Q('"Bụng" có vần?', ['bu', 'ung', 'ụng', 'b'], 2, 'Vần "ụng".'),
    Q('"Mừng" có vần?', ['mu', 'ưng', 'ừng', 'm'], 2, 'Vần "ừng".'),
    Q('Tiếng nào KHÔNG có "ng" ở cuối?', ['sông', 'mừng', 'bụng', 'mít'], 3, '"mít" không có ng.'),
  ]),

  M(12, 'Vần /oi/ · /ai/ · /ay/ · /ây/', [
    Q('"Voi" có vần?', ['vo', 'oi', 'voi', 'v'], 1, 'Vần "oi".'),
    Q('"Tai" có vần?', ['ta', 'ai', 'tai', 't'], 1, 'Vần "ai".'),
    Q('"Bay" có vần?', ['ba', 'ay', 'bay', 'b'], 1, 'Vần "ay".'),
    Q('"Cây" có vần?', ['ca', 'ây', 'cây', 'c'], 1, 'Vần "ây".'),
    Q('Tiếng "tay" và "tai" khác nhau ở?', ['Âm đầu', 'Âm chính', 'Âm cuối (y – i)', 'Dấu'], 2, 'y và i ở cuối khác nhau.'),
  ]),

  M(13, 'Vần /eo/ · /êu/ · /iu/ · /au/ · /âu/', [
    Q('"Mèo" có vần?', ['me', 'eo', 'èo', 'm'], 2, 'Vần "èo".'),
    Q('"Sếu" có vần?', ['se', 'êu', 'ếu', 's'], 2, 'Vần "ếu".'),
    Q('"Rìu" có vần?', ['ri', 'iu', 'ìu', 'r'], 2, 'Vần "ìu".'),
    Q('"Cau" có vần?', ['ca', 'au', 'cau', 'c'], 1, 'Vần "au".'),
    Q('"Trâu" có vần?', ['tra', 'âu', 'tr', 'âu'], 1, 'Vần "âu".'),
  ]),

  M(14, 'Đọc đoạn ngắn (1) · Trường em', [
    Q('Trường tiểu học dạy từ lớp mấy đến lớp mấy?', ['1 – 5', '1 – 9', '6 – 9', '10 – 12'], 0, 'Tiểu học: lớp 1–5.'),
    Q('Người dạy em ở trường gọi là?', ['Bác sĩ', 'Cô/Thầy giáo', 'Công nhân', 'Bộ đội'], 1, 'Thầy/cô giáo.'),
    Q('Đầu giờ học, em làm gì?', ['Ngủ', 'Chào cờ và đứng nghiêm', 'Chạy ra cổng', 'Ăn quà'], 1, 'Chào cờ đầu tuần.'),
    Q('Khi cô gọi, em đứng lên và?', ['Im lặng', 'Khoanh tay chào', 'Cãi cô', 'Bỏ ra ngoài'], 1, 'Khoanh tay, dạ thưa cô.'),
    Q('Ngày đầu tiên đi học là ngày?', ['Sinh nhật', 'Khai giảng', 'Tết Nguyên đán', 'Trung Thu'], 1, 'Khai giảng năm học.'),
  ]),

  M(15, 'Đọc đoạn ngắn (2) · Gia đình em', [
    Q('Người sinh ra em là?', ['Ông', 'Bà', 'Bố mẹ', 'Cô giáo'], 2, 'Bố mẹ sinh em.'),
    Q('Anh trai của bố em gọi là?', ['Cậu', 'Bác', 'Chú', 'Cô'], 1, 'Bác (anh ruột của bố).'),
    Q('Em gái của mẹ em gọi là?', ['Cô', 'Dì', 'Bác', 'Mợ'], 1, 'Dì (em ruột của mẹ).'),
    Q('Bố của mẹ em là?', ['Ông ngoại', 'Ông nội', 'Bác', 'Cậu'], 0, 'Ông ngoại.'),
    Q('Anh, chị, em ruột cùng?', ['Trường', 'Bố mẹ', 'Lớp', 'Bạn'], 1, 'Cùng bố mẹ.'),
  ]),

  M(16, 'Viết câu ngắn · Dấu chấm · Dấu phẩy', [
    Q('Cuối câu kể thường dùng dấu gì?', ['Dấu chấm', 'Dấu phẩy', 'Dấu hỏi', 'Dấu than'], 0, 'Dấu chấm "." kết câu kể.'),
    Q('Cuối câu hỏi dùng dấu gì?', ['Dấu chấm', 'Dấu hỏi (?)', 'Dấu than', 'Hai chấm'], 1, 'Dấu hỏi cho câu hỏi.'),
    Q('Đầu câu chữ cái phải viết?', ['Thường', 'Hoa', 'Nhỏ', 'In nghiêng'], 1, 'Chữ đầu câu viết hoa.'),
    Q('Trong câu "Em đi học.", có bao nhiêu chữ?', ['2', '3', '4', '5'], 1, 'Em / đi / học → 3 chữ (tiếng).'),
    Q('Câu "Mẹ ơi" cần thêm dấu gì ở cuối để gọi?', ['Chấm', 'Hỏi', 'Than (!)', 'Phẩy'], 2, 'Câu cảm/gọi thường dùng dấu than.'),
  ]),

  M(17, 'Ôn tập cuối HK1 (1) – Âm vần', [
    Q('Tiếng "chanh" có âm đầu là?', ['c', 'h', 'ch', 'nh'], 2, 'Âm đầu "ch".'),
    Q('Vần "anh" có âm cuối là?', ['a', 'n', 'h', 'nh'], 3, 'Âm cuối "nh".'),
    Q('Tiếng nào có dấu HỎI?', ['má', 'mà', 'mả', 'mã'], 2, 'mả – dấu hỏi.'),
    Q('Đâu là TIẾNG có nghĩa?', ['xyz', 'mèo', 'btr', 'qql'], 1, '"mèo" là tiếng có nghĩa.'),
    Q('Tiếng "khôn" có vần?', ['kho', 'ôn', 'khôn', 'kh'], 1, 'Vần "ôn".'),
  ]),

  M(18, 'Ôn tập cuối HK1 (2) – Đọc – Viết', [
    Q('Viết HOA chữ đầu của câu sau: "em yêu trường em." — chữ đúng?', ['Em', 'em', 'EM', 'e M'], 0, 'Chữ đầu câu viết hoa: "Em".'),
    Q('Đọc đúng dấu thanh "bà" là?', ['ba (không dấu)', 'ba huyền', 'ba sắc', 'ba hỏi'], 1, 'Dấu huyền.'),
    Q('Sắp xếp thành câu: "đi / em / học"', ['Đi học em.', 'Em đi học.', 'Học em đi.', 'Đi em học.'], 1, '"Em đi học." là câu đúng.'),
    Q('Tên riêng người luôn viết?', ['Thường', 'Hoa chữ cái đầu', 'In nghiêng', 'Gạch chân'], 1, 'Tên người viết hoa chữ cái đầu mỗi tiếng.'),
    Q('"Quê hương" có mấy tiếng?', ['1', '2', '3', '4'], 1, 'quê + hương = 2 tiếng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Vần khó: /uôi/ · /ươi/ · /uây/', [
    Q('"Chuối" có vần?', ['chu', 'uôi', 'ối', 'ch'], 1, 'Vần "uôi".'),
    Q('"Tươi" có vần?', ['tu', 'ươi', 'ơi', 't'], 1, 'Vần "ươi".'),
    Q('"Khuấy" có vần?', ['khu', 'uây', 'ây', 'kh'], 1, 'Vần "uây".'),
    Q('Tiếng nào có vần "uôi"?', ['suối', 'sai', 'sạ', 'sỏi'], 0, '"suối" → vần "uôi".'),
    Q('"Người" có vần?', ['ngu', 'ươi', 'ời', 'ng'], 1, 'Vần "ười".'),
  ]),

  M(20, 'Vần khó: /iên/ · /uôn/ · /ươn/', [
    Q('"Tiền" có vần?', ['ti', 'iên', 'iề', 't'], 1, 'Vần "iên".'),
    Q('"Buôn" có vần?', ['bu', 'uôn', 'uô', 'b'], 1, 'Vần "uôn".'),
    Q('"Vườn" có vần?', ['vu', 'ươn', 'ườ', 'v'], 1, 'Vần "ươn".'),
    Q('"Hiền" có vần?', ['hi', 'iên', 'iề', 'h'], 1, 'Vần "iên".'),
    Q('"Muốn" có vần?', ['mu', 'uôn', 'uố', 'm'], 1, 'Vần "uôn".'),
  ]),

  M(21, 'Vần khó: /oan/ · /oat/ · /uân/ · /uât/', [
    Q('"Toàn" có vần?', ['to', 'oan', 'oà', 't'], 1, 'Vần "oan".'),
    Q('"Hoạt" có vần?', ['ho', 'oat', 'oạ', 'h'], 1, 'Vần "oat".'),
    Q('"Tuần" có vần?', ['tu', 'uân', 'uầ', 't'], 1, 'Vần "uân".'),
    Q('"Thuật" có vần?', ['thu', 'uât', 'uậ', 'th'], 1, 'Vần "uât".'),
    Q('Tiếng nào có vần "oan"?', ['hoà', 'hoan', 'hoá', 'hối'], 1, '"hoan" → "oan".'),
  ]),

  // Tuần 22 — nghỉ Tết
  M(22, 'Nghỉ Tết (đọc nhẹ về Tết)', [
    Q('Tết Nguyên đán là Tết của?', ['Người Mỹ', 'Người Việt và một số nước Á Đông', 'Người Pháp', 'Người Đức'], 1, 'Tết cổ truyền VN và một số nước châu Á.'),
    Q('Cây hoa đặc trưng miền Bắc dịp Tết là?', ['Hoa mai', 'Hoa đào', 'Hoa cúc', 'Hoa hồng'], 1, 'Hoa đào miền Bắc.'),
    Q('Cây hoa đặc trưng miền Nam dịp Tết là?', ['Hoa mai', 'Hoa đào', 'Hoa lay-ơn', 'Hoa lan'], 0, 'Hoa mai vàng miền Nam.'),
    Q('Bánh chưng vuông tượng trưng cho?', ['Mặt trời', 'Đất', 'Mặt trăng', 'Sao'], 1, 'Vuông tượng cho ĐẤT.'),
    Q('"Chúc mừng năm mới" là lời?', ['Chào hỏi bình thường', 'Chúc Tết', 'Lời chia tay', 'Lời xin lỗi'], 1, 'Lời chúc đầu năm.'),
  ]),

  M(23, 'Đọc đoạn: Cây bàng sân trường', [
    Q('Cây bàng thường được trồng ở đâu?', ['Trong nhà', 'Sân trường, lề đường', 'Trên giường', 'Trong tủ'], 1, 'Bàng cho bóng mát.'),
    Q('Mùa hè, lá bàng có màu?', ['Đỏ', 'Xanh', 'Vàng', 'Trắng'], 1, 'Mùa hè lá xanh.'),
    Q('Mùa thu, lá bàng chuyển màu?', ['Xanh', 'Vàng – đỏ', 'Trắng', 'Đen'], 1, 'Đỏ vàng rụng.'),
    Q('Dưới gốc bàng, em thường làm gì giờ ra chơi?', ['Học bài', 'Vui chơi cùng bạn', 'Ngủ', 'Cãi nhau'], 1, 'Vui chơi cùng bạn.'),
    Q('Bài đọc khuyên em điều gì?', ['Chặt cây', 'Yêu quý cây xanh', 'Bẻ cành', 'Không tưới nước'], 1, 'Yêu và bảo vệ cây.'),
  ]),

  M(24, 'Đọc đoạn: Bạn của em', [
    Q('Bạn thân là người?', ['Ghét em', 'Gần gũi, chia sẻ với em', 'Chỉ chơi 1 lần', 'Người lạ'], 1, 'Bạn thân: gần gũi, sẻ chia.'),
    Q('Khi bạn buồn, em nên?', ['Cười nhạo', 'An ủi và lắng nghe', 'Bỏ đi', 'Mách cô'], 1, 'An ủi, sẻ chia.'),
    Q('Bạn quên bút, em nên?', ['Không cho mượn', 'Cho bạn mượn bút', 'Cười bạn', 'Mách cô'], 1, 'Cho mượn để giúp bạn.'),
    Q('"Tình bạn" được xây dựng từ?', ['Sự ghét bỏ', 'Sự yêu thương và tin cậy', 'Sự đua tranh', 'Sự xa lánh'], 1, 'Yêu thương + tin cậy.'),
    Q('Khi chơi cùng bạn, em không nên?', ['Cười với bạn', 'Tranh giành đồ chơi', 'Chia sẻ kẹo', 'Cùng học bài'], 1, 'Không tranh giành.'),
  ]),

  M(25, 'Chính tả nghe – viết (1)', [
    Q('"Em yêu trường em." — có mấy tiếng?', ['3', '4', '5', '6'], 1, 'em / yêu / trường / em → 4 tiếng.'),
    Q('Tiếng "trường" gồm âm đầu + vần?', ['tr + ường', 't + rường', 'tru + ờng', 'tr + ường (đúng)'], 0, 'Âm đầu "tr" + vần "ường".'),
    Q('"Chiều thứ Bảy" — chữ "B" trong "Bảy" viết hoa vì?', ['Đầu câu', 'Tên riêng (thứ trong tuần đầu câu)', 'Sau dấu phẩy', 'Đúng quy tắc viết Hoa thứ'], 3, 'Tên các thứ trong tuần thường viết hoa.'),
    Q('Chính tả: "con … nhỏ" — điền', ['Mèo', 'mèo', 'meo', 'mẻo'], 1, '"con mèo nhỏ".'),
    Q('Chính tả: "cây … xanh" — điền', ['bàng', 'bang', 'bạng', 'báng'], 0, '"cây bàng xanh".'),
  ]),

  M(26, 'Chính tả nghe – viết (2)', [
    Q('Tiếng nào VIẾT đúng?', ['nghành', 'ngành', 'ngàng', 'nghànhh'], 1, '"ngành" đúng.'),
    Q('Tiếng nào VIẾT đúng?', ['kẽm', 'kẻm', 'kẹm', 'kệm'], 0, '"kẽm" (kim loại).'),
    Q('Tiếng nào VIẾT đúng?', ['cá xấu', 'cá sấu', 'cá xáu', 'cá sáu'], 1, '"cá sấu" đúng chính tả.'),
    Q('"Quả …" — điền chữ phù hợp', ['chuối', 'chuồi', 'chuổi', 'chuộti'], 0, '"quả chuối".'),
    Q('"Đi …" (mặc vào chân) — điền', ['giày', 'dày', 'rày', 'giáy'], 0, '"đi giày".'),
  ]),

  M(27, 'Từ chỉ sự vật · Đồ vật quen thuộc', [
    Q('Đâu là TỪ chỉ đồ dùng học tập?', ['Cái bút', 'Cái chảo', 'Cái thìa', 'Cái nồi'], 0, 'Bút là đồ dùng học tập.'),
    Q('Đâu là TỪ chỉ con vật?', ['Cái bàn', 'Con gà', 'Cây cam', 'Cái áo'], 1, '"Con gà" chỉ con vật.'),
    Q('"Cô giáo" là từ chỉ?', ['Đồ vật', 'Người', 'Con vật', 'Cây cối'], 1, 'Chỉ người.'),
    Q('"Quả táo" là từ chỉ?', ['Người', 'Cây cối/quả', 'Con vật', 'Đồ vật'], 1, 'Chỉ quả (cây cối).'),
    Q('Đâu KHÔNG phải đồ dùng học tập?', ['Bút', 'Vở', 'Cặp sách', 'Cái chảo'], 3, 'Cái chảo là đồ bếp.'),
  ]),

  M(28, 'Từ chỉ hoạt động', [
    Q('Từ nào chỉ HOẠT ĐỘNG?', ['đẹp', 'chạy', 'cao', 'đỏ'], 1, '"chạy" là hoạt động.'),
    Q('Em đến trường để?', ['ngủ', 'học', 'chơi', 'ăn'], 1, 'Đi học.'),
    Q('"Đọc sách" là hoạt động của?', ['Đầu', 'Mắt và tay', 'Chân', 'Tai'], 1, 'Mắt nhìn, tay cầm.'),
    Q('Hoạt động nào tốt cho sức khỏe?', ['Ngồi xem TV cả ngày', 'Tập thể dục', 'Ăn nhiều bánh kẹo', 'Thức khuya'], 1, 'Thể dục tốt cho sức khoẻ.'),
    Q('Hoạt động nào giúp em sạch sẽ?', ['Chơi đất', 'Rửa tay', 'Cãi nhau', 'Ngủ'], 1, 'Rửa tay sạch.'),
  ]),

  M(29, 'Từ chỉ đặc điểm (màu sắc, hình dáng)', [
    Q('Từ nào chỉ MÀU SẮC?', ['chạy', 'đỏ', 'ăn', 'cao'], 1, '"đỏ" là màu.'),
    Q('Từ nào chỉ HÌNH DÁNG?', ['vàng', 'tròn', 'ngủ', 'cười'], 1, '"tròn" – hình dáng.'),
    Q('Lá cây thường có màu?', ['Đen', 'Xanh', 'Tím', 'Trắng'], 1, 'Màu xanh lá.'),
    Q('Mặt trời có màu gì (khi nhìn)?', ['Xanh', 'Đỏ/Vàng', 'Đen', 'Tím'], 1, 'Đỏ hoặc vàng.'),
    Q('Quả cam khi chín có màu?', ['Xanh', 'Cam (vàng cam)', 'Tím', 'Trắng'], 1, 'Màu cam.'),
  ]),

  M(30, 'Câu kể · Câu hỏi · Câu cảm', [
    Q('"Em đi học." là câu?', ['Hỏi', 'Kể', 'Cảm', 'Cầu khiến'], 1, 'Kết bằng dấu chấm → câu kể.'),
    Q('"Bạn tên là gì?" là câu?', ['Kể', 'Hỏi', 'Cảm', 'Khiến'], 1, 'Dấu hỏi → câu hỏi.'),
    Q('"Ôi đẹp quá!" là câu?', ['Kể', 'Hỏi', 'Cảm', 'Khiến'], 2, 'Bộc lộ cảm xúc → câu cảm.'),
    Q('Để hỏi tuổi bạn, em nói?', ['Bạn đi đâu đấy?', 'Bạn bao nhiêu tuổi?', 'Bạn ăn gì?', 'Bạn ở đâu?'], 1, 'Câu hỏi tuổi.'),
    Q('Câu "Ngày mai trời mưa." kết thúc bằng?', ['?', '.', '!', ','], 1, 'Dấu chấm.'),
  ]),

  M(31, 'Kể chuyện ngắn: Rùa và Thỏ', [
    Q('Trong truyện, ai chạy nhanh hơn?', ['Rùa', 'Thỏ', 'Bằng nhau', 'Không ai'], 1, 'Thỏ vốn nhanh.'),
    Q('Vì sao Thỏ thua Rùa?', ['Rùa khỏe hơn', 'Thỏ chủ quan, ngủ quên', 'Rùa nhanh hơn', 'Thỏ ốm'], 1, 'Thỏ kiêu căng + ngủ quên.'),
    Q('Bài học của truyện là?', ['Đừng kiên trì', 'Kiêu căng sẽ thua; kiên trì sẽ thắng', 'Đừng ngủ', 'Đừng chạy'], 1, 'Bài học về tính kiêu căng.'),
    Q('Rùa chiến thắng nhờ?', ['Kiên trì, cố gắng', 'May mắn', 'Bí mật', 'Bạn giúp'], 0, 'Kiên trì + bền bỉ.'),
    Q('Sau cuộc thi, Thỏ thấy?', ['Tự hào', 'Xấu hổ vì chủ quan', 'Vui mừng', 'Bình thường'], 1, 'Xấu hổ.'),
  ]),

  M(32, 'Đọc – hiểu đoạn ngắn (1)', [
    Q('Đoạn: "Mẹ đi chợ về. Mẹ mua cho em một quả táo đỏ." — Mẹ mua gì cho em?', ['Quả cam', 'Quả táo', 'Quả chuối', 'Quả lê'], 1, 'Quả táo.'),
    Q('Quả táo trong đoạn có màu gì?', ['Xanh', 'Đỏ', 'Vàng', 'Tím'], 1, 'Đỏ.'),
    Q('Ai đi chợ về?', ['Bố', 'Mẹ', 'Bà', 'Em'], 1, 'Mẹ.'),
    Q('Em cảm thấy thế nào khi nhận quà?', ['Buồn', 'Vui', 'Tức giận', 'Bình thường'], 1, 'Vui.'),
    Q('Em nên nói gì với mẹ?', ['Không nói', 'Cảm ơn mẹ', 'Chạy đi chơi', 'Khóc to'], 1, 'Cảm ơn mẹ.'),
  ]),

  M(33, 'Đọc – hiểu đoạn ngắn (2)', [
    Q('Đoạn: "Sáng nay trời nắng đẹp. Em đi học cùng bạn Lan." — Em đi học với ai?', ['Mẹ', 'Bạn Lan', 'Bà', 'Em một mình'], 1, 'Bạn Lan.'),
    Q('Thời tiết trong đoạn?', ['Mưa', 'Nắng đẹp', 'Bão', 'Tuyết'], 1, 'Nắng đẹp.'),
    Q('Em đi đâu?', ['Đi chợ', 'Đi học', 'Đi chơi', 'Đi ngủ'], 1, 'Đi học.'),
    Q('"Sáng nay" là buổi nào?', ['Buổi sáng', 'Buổi trưa', 'Buổi chiều', 'Buổi tối'], 0, 'Buổi sáng.'),
    Q('Tên bạn trong đoạn viết hoa vì?', ['Đầu câu', 'Là tên riêng', 'Đúng quy tắc đẹp', 'Sau dấu chấm'], 1, 'Tên riêng → viết hoa.'),
  ]),

  M(34, 'Ôn tập cuối HK2 (1)', [
    Q('Tiếng "trường" có âm đầu là?', ['t', 'r', 'tr', 'ờng'], 2, 'Âm đầu "tr".'),
    Q('Cuối câu hỏi dùng dấu?', ['.', '?', '!', ','], 1, 'Dấu hỏi.'),
    Q('"Con mèo" – từ "con mèo" chỉ?', ['Người', 'Con vật', 'Đồ vật', 'Cây'], 1, 'Con vật.'),
    Q('"Đỏ" là từ chỉ?', ['Hoạt động', 'Màu sắc', 'Tên', 'Số'], 1, 'Màu sắc.'),
    Q('Tên riêng người viết?', ['Thường', 'Hoa chữ cái đầu', 'In đậm', 'Gạch chân'], 1, 'Hoa chữ cái đầu mỗi tiếng.'),
    Q('"Bàn" có vần?', ['ba', 'an', 'àn', 'b'], 2, 'Vần "àn".'),
  ]),

  M(35, 'Ôn tập cuối HK2 (2)', [
    Q('Câu "Em yêu mẹ." là câu?', ['Hỏi', 'Kể', 'Cảm', 'Khiến'], 1, 'Câu kể.'),
    Q('Tiếng "chuối" có vần?', ['chu', 'uôi', 'ối', 'ch'], 1, 'Vần "uôi".'),
    Q('Đâu là viết ĐÚNG chính tả?', ['quả giứa', 'quả dứa', 'quả zứa', 'quả gứa'], 1, '"quả dứa" đúng.'),
    Q('Đầu câu KỂ viết?', ['Thường', 'Hoa', 'In đậm', 'Cong'], 1, 'Chữ đầu viết hoa.'),
    Q('Sắp xếp thành câu: "yêu / em / cô"', ['Em yêu cô.', 'Cô yêu em.', 'Cả hai đều đúng tuỳ ngữ cảnh', 'Yêu em cô.'], 2, 'Cả "Em yêu cô." và "Cô yêu em." đều là câu đúng.'),
    Q('Bài học cuối năm: em nên?', ['Quên hết kiến thức', 'Ôn lại bài thường xuyên', 'Bỏ học', 'Chỉ chơi'], 1, 'Ôn bài thường xuyên.'),
  ]),
];

export const P1TV_SCENARIOS = indexBy(P1TV_WEEKS);
