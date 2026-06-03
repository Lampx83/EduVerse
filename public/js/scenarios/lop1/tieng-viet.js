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
    Q('Bảng chữ cái tiếng Việt bắt đầu bằng chữ?', ['chữ o', 'chữ ă', 'chữ b', 'a'], 3, 'Chữ "a" đứng đầu bảng chữ cái.'),
    Q('Khi ngồi viết, lưng em phải?', ['Nghiêng nhiều', 'Cúi sát mặt xuống vở', 'Tựa hẳn xuống', 'Thẳng'], 3, 'Ngồi thẳng lưng để bảo vệ cột sống.'),
    Q('Khoảng cách mắt đến vở khoảng?', ['Áp sát', '25–30 cm', '10 cm', '50 cm'], 1, 'Khoảng 25–30 cm là an toàn cho mắt.'),
    Q('Tay nào thường dùng cầm bút (đa số)?', ['Tay phải', 'Tay nào cũng được', 'Tay trái', 'Hai tay'], 0, 'Đa số cầm bút tay phải.'),
    Q('Chữ cái nào sau ĐÂY không có trong bảng chữ cái tiếng Việt?', ['f', 'chữ ă', 'chữ đ', 'chữ â'], 0, 'Tiếng Việt không có chữ "f" (chỉ có ph).'),
  ]),

  M(2, 'Âm /a/ · /b/ · /c/', [
    Q('Tiếng "ba" gồm những âm nào?', ['b + a', 'a + a', 'b + a + b', 'a + b (đảo thứ tự)'], 0, 'Âm đầu "b" + vần "a".'),
    Q('Đọc tiếng "ca". Âm đầu là?', ['c', 'âm b', 'âm a', 'âm k'], 0, 'Âm đầu là "c".'),
    Q('Trong các tiếng: ba – bà – bá – bả – bã, chúng khác nhau ở?', ['Dấu thanh', 'Âm chính (vần)', 'Số chữ cái', 'Âm đầu'], 0, 'Cùng "ba", khác dấu thanh.'),
    Q('Tiếng "cá" có dấu gì?', ['Dấu Huyền', 'Sắc', 'Dấu Hỏi', 'Dấu Ngã'], 1, 'Dấu sắc trên a.'),
    Q('Chữ nào VIẾT HOA của "a"?', ['A', 'chữ Ă', 'chữ Â', 'chữ O'], 0, 'A in hoa.'),
  ]),

  M(3, 'Âm /o/ · /ô/ · /ơ/', [
    Q('Tiếng "cô" gồm âm đầu là?', ['âm k', 'âm ô', 'âm o', 'c'], 3, 'Âm đầu "c".'),
    Q('Phân biệt: "co" và "cô" khác nhau ở?', ['Âm chính (o – ô)', 'Không khác', 'Dấu thanh', 'Âm đầu'], 0, '"o" và "ô" khác nhau.'),
    Q('Tiếng nào CÓ âm "ơ"?', ['cờ', 'tiếng co', 'tiếng cá', 'tiếng cô'], 0, '"cờ" có âm "ơ".'),
    Q('"Bò" có dấu gì?', ['Huyền', 'Dấu Nặng', 'Dấu Sắc', 'Dấu Hỏi'], 0, 'Dấu huyền.'),
    Q('Chữ "ô" khác "o" ở điểm nào?', ['Không khác', 'Có dấu mũ', 'Có nét cong', 'Có dấu sắc'], 1, '"ô" = o + dấu mũ.'),
  ]),

  M(4, 'Âm /e/ · /ê/ · /i/', [
    Q('Tiếng "bê" có âm chính là?', ['ê', 'âm i', 'âm b', 'âm e'], 0, 'Âm chính "ê".'),
    Q('"Bé" và "bè" khác nhau ở?', ['Âm chính', 'Âm đầu', 'Dấu thanh', 'Số chữ'], 2, 'Khác dấu thanh.'),
    Q('Tiếng "đi" có mấy chữ cái?', ['1', '3', '2', '4'], 2, 'đ + i = 2 chữ.'),
    Q('Trong các âm: e, ê, i — chữ nào CÓ DẤU MŨ?', ['ê', 'chữ i', 'chữ e', 'Cả ba đều có dấu mũ'], 0, '"ê" có mũ.'),
    Q('"Bí" có dấu gì?', ['Dấu Huyền', 'Dấu Ngã', 'Sắc', 'Dấu Hỏi'], 2, 'Dấu sắc.'),
  ]),

  M(5, 'Âm /u/ · /ư/ · /n/ · /m/', [
    Q('Tiếng "mẹ" có âm đầu là?', ['ẹ (âm cuối)', 'âm e', 'm', 'âm n'], 2, 'Âm đầu "m".'),
    Q('Tiếng "nụ" có dấu gì?', ['Dấu Hỏi', 'Dấu Sắc', 'Nặng', 'Dấu Huyền'], 2, 'Dấu nặng dưới u.'),
    Q('"Tu" và "tư" khác nhau ở?', ['Dấu thanh', 'Âm đầu', 'Âm chính', 'Vần (cả "u" và "ư")'], 2, '"u" và "ư" khác nhau.'),
    Q('Chữ "ư" có gì khác chữ "u"?', ['Dấu sắc', 'Dấu mũ', 'Râu nhỏ bên phải', 'Dấu hỏi'], 2, '"ư" có thêm nét râu.'),
    Q('Tiếng "nam" có mấy âm (đầu + chính + cuối)?', ['1', '4', '2', '3'], 3, 'n + a + m = 3 phần.'),
  ]),

  M(6, 'Âm ghép: /ch/ · /kh/ · /nh/ · /ph/ · /th/', [
    Q('Tiếng "chợ" có âm đầu là?', ['ợ (vần)', 'âm h', 'âm c', 'ch'], 3, 'Âm đầu "ch" (âm ghép).'),
    Q('"Khế" có âm đầu là?', ['âm k', 'kh', 'âm h', 'ê (vần)'], 1, 'Âm đầu "kh".'),
    Q('Âm đầu của "nhà" là?', ['à (vần)', 'nh', 'âm n', 'âm h'], 1, 'Âm đầu "nh".'),
    Q('"Phở" có âm đầu là?', ['âm h', 'âm p', 'ở (vần)', 'ph'], 3, 'Âm đầu "ph".'),
    Q('"Thi" có âm đầu là?', ['th', 'âm h', 'i (vần)', 'âm t'], 0, 'Âm đầu "th".'),
  ]),

  M(7, 'Vần /an/ · /at/ · /ac/', [
    Q('Vần "an" gồm những âm nào?', ['a + n', 'Một âm', 'a + c', 'a + t'], 0, 'Âm chính "a" + âm cuối "n".'),
    Q('Tiếng "bàn" có vần là?', ['àn', 'ba (cả tiếng)', 'b (âm đầu)', 'an (chưa có dấu)'], 0, 'Vần "àn" (có dấu huyền).'),
    Q('Tiếng nào CÓ VẦN "ac"?', ['các', 'tiếng cá', 'tiếng cán', 'tiếng cát'], 0, '"các" có vần "ac".'),
    Q('"Hát" có vần?', ['h (âm đầu)', 'át', 'at (chưa có dấu)', 'ha (cả tiếng)'], 1, 'Vần "át".'),
    Q('Tiếng "lan" và "lát" khác nhau ở?', ['Âm chính', 'Âm cuối', 'Âm đầu', 'Dấu thanh'], 1, '"n" và "t" khác.'),
  ]),

  M(8, 'Vần /on/ · /ot/ · /oc/ · /en/ · /et/', [
    Q('"Con" có vần?', ['co (cả tiếng)', 'òn (có dấu huyền)', 'on', 'c (âm đầu)'], 2, 'Vần "on".'),
    Q('"Mèo" có vần?', ['me (cả tiếng)', 'mèo (cả tiếng)', 'eo (chưa có dấu)', 'èo'], 3, 'Vần "èo".'),
    Q('"Hết" có vần?', ['he (cả tiếng)', 'et (chưa có dấu)', 'hết (cả tiếng)', 'ết'], 3, 'Vần "ết".'),
    Q('Tiếng nào CÓ VẦN "oc"?', ['cóc', 'tiếng cọ', 'tiếng có', 'tiếng cò'], 0, '"cóc" có vần "oc".'),
    Q('"Sen" có vần?', ['en', 'se (cả tiếng)', 's (âm đầu)', 'sn (ghép sai)'], 0, 'Vần "en".'),
  ]),

  M(9, 'Vần /un/ · /ut/ · /uc/ · /in/ · /it/', [
    Q('"Bún" có vần?', ['ún', 'b (âm đầu)', 'bu (cả tiếng)', 'un (chưa có dấu)'], 0, 'Vần "ún".'),
    Q('"Phút" có vần?', ['út', 'ph (âm đầu)', 'phu (cả tiếng)', 'ut (chưa có dấu)'], 0, 'Vần "út".'),
    Q('"Tin" có vần?', ['tin (cả tiếng)', 't (âm đầu)', 'ti (chưa có âm cuối)', 'in'], 3, 'Vần "in".'),
    Q('Tiếng nào CÓ vần "uc"?', ['tiếng bù', 'búc', 'tiếng bụ', 'tiếng búi'], 1, '"búc" → vần "uc".'),
    Q('"Mít" có vần?', ['mi (chưa có âm cuối)', 'mít (cả tiếng)', 'ít', 'it (chưa có dấu)'], 2, 'Vần "ít".'),
  ]),

  M(10, 'Vần /anh/ · /inh/ · /ach/ · /ich/', [
    Q('"Anh" có vần?', ['a (âm chính)', 'an (thiếu h)', 'nh (âm cuối)', 'anh'], 3, 'Vần "anh".'),
    Q('"Sách" có vần?', ['ach (chưa có dấu)', 's (âm đầu)', 'sa (thiếu âm cuối)', 'ách'], 3, 'Vần "ách".'),
    Q('"Xinh" có vần?', ['in (thiếu h)', 'xi', 'x', 'inh'], 3, 'Vần "inh".'),
    Q('"Lịch" có vần?', ['ich (chưa có dấu)', 'l (âm đầu)', 'ịch', 'li (thiếu âm cuối)'], 2, 'Vần "ịch".'),
    Q('Vần "anh" gồm?', ['a + nh', 'a + nh + h', 'Một âm', 'a + n (thiếu h)'], 0, 'Âm chính "a" + âm cuối "nh".'),
  ]),

  M(11, 'Vần /ong/ · /ông/ · /ung/ · /ưng/', [
    Q('"Ong" có vần?', ['g (âm cuối)', 'on (thiếu g)', 'o (âm chính)', 'ong'], 3, 'Vần "ong".'),
    Q('"Sông" có vần?', ['so (cả tiếng không dấu)', 'ong (thiếu mũ)', 'ông', 's (âm đầu)'], 2, 'Vần "ông".'),
    Q('"Bụng" có vần?', ['ung (chưa có dấu)', 'ụng', 'b (âm đầu)', 'bu (thiếu âm cuối)'], 1, 'Vần "ụng".'),
    Q('"Mừng" có vần?', ['mu (thiếu âm cuối)', 'ưng (chưa có dấu)', 'm (âm đầu)', 'ừng'], 3, 'Vần "ừng".'),
    Q('Tiếng nào KHÔNG có "ng" ở cuối?', ['mít', 'tiếng mừng', 'tiếng bụng', 'tiếng sông'], 0, '"mít" không có ng.'),
  ]),

  M(12, 'Vần /oi/ · /ai/ · /ay/ · /ây/', [
    Q('"Voi" có vần?', ['oi', 'voi (cả tiếng)', 'v (âm đầu)', 'vo (thiếu i)'], 0, 'Vần "oi".'),
    Q('"Tai" có vần?', ['t (âm đầu)', 'ta (thiếu i)', 'ai', 'tai (cả tiếng)'], 2, 'Vần "ai".'),
    Q('"Bay" có vần?', ['ba (thiếu y)', 'bay (cả tiếng)', 'ay', 'b (âm đầu)'], 2, 'Vần "ay".'),
    Q('"Cây" có vần?', ['ây', 'cây (cả tiếng)', 'c (âm đầu)', 'ca (thiếu mũ và y)'], 0, 'Vần "ây".'),
    Q('Tiếng "tay" và "tai" khác nhau ở?', ['Âm cuối (y – i)', 'Âm chính', 'Dấu thanh', 'Âm đầu'], 0, 'y và i ở cuối khác nhau.'),
  ]),

  M(13, 'Vần /eo/ · /êu/ · /iu/ · /au/ · /âu/', [
    Q('"Mèo" có vần?', ['eo (chưa có dấu huyền)', 'èo', 'm (âm đầu)', 'me (thiếu âm cuối)'], 1, 'Vần "èo".'),
    Q('"Sếu" có vần?', ['se (thiếu âm cuối)', 'êu (chưa có dấu sắc)', 's (âm đầu)', 'ếu'], 3, 'Vần "ếu".'),
    Q('"Rìu" có vần?', ['ri (thiếu u)', 'ìu', 'iu (chưa có dấu huyền)', 'r (âm đầu)'], 1, 'Vần "ìu".'),
    Q('"Cau" có vần?', ['ca (thiếu u)', 'c (âm đầu)', 'cau (cả tiếng)', 'au'], 3, 'Vần "au".'),
    Q('"Trâu" có vần?', ['tra (thiếu u và mũ)', 'au (thiếu mũ)', 'âu', 'tr (âm đầu)'], 2, 'Vần "âu".'),
  ]),

  M(14, 'Đọc đoạn ngắn (1) · Trường em', [
    Q('Trường tiểu học dạy từ lớp mấy đến lớp mấy?', ['6 – 9', '1 – 9', '1 – 5', '10 – 12'], 2, 'Tiểu học: lớp 1–5.'),
    Q('Người dạy em ở trường gọi là?', ['Bác sĩ', 'Cô/Thầy giáo', 'Bộ đội', 'Công nhân'], 1, 'Thầy/cô giáo.'),
    Q('Đầu giờ học, em làm gì?', ['Chạy ra cổng', 'Chào cờ và đứng nghiêm', 'Ăn quà', 'Đi quanh sân trường'], 1, 'Chào cờ đầu tuần.'),
    Q('Khi cô gọi, em đứng lên và?', ['Im lặng', 'Bỏ ra ngoài', 'Khoanh tay chào', 'Cãi cô'], 2, 'Khoanh tay, dạ thưa cô.'),
    Q('Ngày đầu tiên đi học là ngày?', ['Khai giảng', 'Tết Nguyên đán', 'Sinh nhật', 'Trung Thu'], 0, 'Khai giảng năm học.'),
  ]),

  M(15, 'Đọc đoạn ngắn (2) · Gia đình em', [
    Q('Người sinh ra em là?', ['Cô giáo', 'Ông bà', 'Cô chú', 'Bố mẹ'], 3, 'Bố mẹ sinh em.'),
    Q('Anh trai của bố em gọi là?', ['Bác', 'gọi là Chú', 'gọi là Cô', 'gọi là Cậu'], 0, 'Bác (anh ruột của bố).'),
    Q('Em gái của mẹ em gọi là?', ['Dì', 'gọi là Cô', 'gọi là Mợ', 'gọi là Bác'], 0, 'Dì (em ruột của mẹ).'),
    Q('Bố của mẹ em là?', ['Ông ngoại', 'Ông nội', 'gọi là Cậu', 'gọi là Bác'], 0, 'Ông ngoại.'),
    Q('Anh, chị, em ruột cùng?', ['Bố mẹ', 'Ông bà', 'Trường', 'Họ hàng'], 0, 'Cùng bố mẹ.'),
  ]),

  M(16, 'Viết câu ngắn · Dấu chấm · Dấu phẩy', [
    Q('Cuối câu kể thường dùng dấu gì?', ['Dấu phẩy', 'Dấu hỏi', 'Dấu than', 'Dấu chấm'], 3, 'Dấu chấm "." kết câu kể.'),
    Q('Cuối câu hỏi dùng dấu gì?', ['Dấu than', 'Hai chấm', 'Dấu chấm', 'Dấu hỏi (?)'], 3, 'Dấu hỏi cho câu hỏi.'),
    Q('Đầu câu chữ cái phải viết?', ['Thường', 'In nghiêng', 'Cùng cỡ với chữ giữa câu', 'Hoa'], 3, 'Chữ đầu câu viết hoa.'),
    Q('Trong câu "Em đi học.", có bao nhiêu chữ?', ['3', '2', '4', '5'], 0, 'Em / đi / học → 3 chữ (tiếng).'),
    Q('Câu "Mẹ ơi" cần thêm dấu gì ở cuối để gọi?', ['Hỏi (?)', 'Chấm (.)', 'Phẩy (,)', 'Than (!)'], 3, 'Câu cảm/gọi thường dùng dấu than.'),
  ]),

  M(17, 'Ôn tập cuối HK1 (1) – Âm vần', [
    Q('Tiếng "chanh" có âm đầu là?', ['âm "c"', 'ch', 'âm "nh"', 'âm "h"'], 1, 'Âm đầu "ch".'),
    Q('Vần "anh" có âm cuối là?', ['nh', 'a (âm chính)', 'n (thiếu h)', 'h (chỉ một chữ)'], 0, 'Âm cuối "nh".'),
    Q('Tiếng nào có dấu HỎI?', ['tiếng mã', 'tiếng mà', 'tiếng má', 'mả'], 3, 'mả – dấu hỏi.'),
    Q('Đâu là TIẾNG có nghĩa?', ['qql', 'btr', 'xyz', 'mèo'], 3, '"mèo" là tiếng có nghĩa.'),
    Q('Tiếng "khôn" có vần?', ['kh (âm đầu)', 'kho (thiếu mũ)', 'khôn (cả tiếng)', 'ôn'], 3, 'Vần "ôn".'),
  ]),

  M(18, 'Ôn tập cuối HK1 (2) – Đọc – Viết', [
    Q('Viết HOA chữ đầu của câu sau: "em yêu trường em." — chữ đúng?', ['EM (viết hoa cả)', 'Em', 'e M (hoa M)', 'em (không hoa)'], 1, 'Chữ đầu câu viết hoa: "Em".'),
    Q('Đọc đúng dấu thanh "bà" là?', ['ba huyền', 'ba (không dấu)', 'ba hỏi', 'ba sắc'], 0, 'Dấu huyền.'),
    Q('Sắp xếp thành câu: "đi / em / học"', ['Học em đi.', 'Đi học em.', 'Em đi học.', 'Đi em học.'], 2, '"Em đi học." là câu đúng.'),
    Q('Tên riêng người luôn viết?', ['Hoa chữ cái đầu', 'Thường', 'In nghiêng', 'Gạch chân'], 0, 'Tên người viết hoa chữ cái đầu mỗi tiếng.'),
    Q('"Quê hương" có mấy tiếng?', ['3', '4', '1', '2'], 3, 'quê + hương = 2 tiếng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Vần khó: /uôi/ · /ươi/ · /uây/', [
    Q('"Chuối" có vần?', ['ch (âm đầu)', 'chu (thiếu âm cuối)', 'ối (thiếu u)', 'uôi'], 3, 'Vần "uôi".'),
    Q('"Tươi" có vần?', ['ơi (thiếu ư)', 'ươi', 't (âm đầu)', 'tu (thiếu mũ)'], 1, 'Vần "ươi".'),
    Q('"Khuấy" có vần?', ['ây (thiếu u)', 'khu (thiếu mũ và y)', 'kh (âm đầu)', 'uây'], 3, 'Vần "uây".'),
    Q('Tiếng nào có vần "uôi"?', ['tiếng sai', 'suối', 'tiếng sỏi', 'tiếng sạ'], 1, '"suối" → vần "uôi".'),
    Q('"Người" có vần?', ['ng (âm đầu)', 'ời (thiếu ư)', 'ngu (thiếu mũ và i)', 'ươi'], 3, 'Vần "ười".'),
  ]),

  M(20, 'Vần khó: /iên/ · /uôn/ · /ươn/', [
    Q('"Tiền" có vần?', ['iề (thiếu n)', 'iên', 'ti (chưa có âm cuối)', 't (âm đầu)'], 1, 'Vần "iên".'),
    Q('"Buôn" có vần?', ['uô (thiếu n)', 'b (âm đầu)', 'uôn', 'bu (thiếu mũ và n)'], 2, 'Vần "uôn".'),
    Q('"Vườn" có vần?', ['ườ (thiếu n)', 'v (âm đầu)', 'vu (thiếu ơ và n)', 'ươn'], 3, 'Vần "ươn".'),
    Q('"Hiền" có vần?', ['iề (thiếu n)', 'h (âm đầu)', 'hi (thiếu âm cuối)', 'iên'], 3, 'Vần "iên".'),
    Q('"Muốn" có vần?', ['mu (thiếu mũ và n)', 'uôn', 'm (âm đầu)', 'uố (thiếu n)'], 1, 'Vần "uôn".'),
  ]),

  M(21, 'Vần khó: /oan/ · /oat/ · /uân/ · /uât/', [
    Q('"Toàn" có vần?', ['oan', 'oà (thiếu n)', 't (âm đầu)', 'to (thiếu a và n)'], 0, 'Vần "oan".'),
    Q('"Hoạt" có vần?', ['ho (thiếu a và t)', 'oat', 'h (âm đầu)', 'oạ (thiếu t)'], 1, 'Vần "oat".'),
    Q('"Tuần" có vần?', ['t (âm đầu)', 'uầ (thiếu n)', 'uân', 'tu (thiếu â và n)'], 2, 'Vần "uân".'),
    Q('"Thuật" có vần?', ['uât', 'thu (thiếu â và t)', 'th (âm đầu)', 'uậ (thiếu t)'], 0, 'Vần "uât".'),
    Q('Tiếng nào có vần "oan"?', ['tiếng hoá', 'tiếng hoà', 'tiếng hối', 'hoan'], 3, '"hoan" → "oan".'),
  ]),

  // Tuần 22 — nghỉ Tết
  M(22, 'Nghỉ Tết (đọc nhẹ về Tết)', [
    Q('Tết Nguyên đán là Tết của?', ['Người Việt và một số nước Á Đông', 'Người Mỹ', 'Người Đức', 'Người Pháp'], 0, 'Tết cổ truyền VN và một số nước châu Á.'),
    Q('Cây hoa đặc trưng miền Bắc dịp Tết là?', ['Hoa cúc', 'Hoa đào', 'Hoa hồng', 'Hoa mai'], 1, 'Hoa đào miền Bắc.'),
    Q('Cây hoa đặc trưng miền Nam dịp Tết là?', ['Hoa lay-ơn', 'Hoa mai', 'Hoa lan', 'Hoa đào'], 1, 'Hoa mai vàng miền Nam.'),
    Q('Bánh chưng vuông tượng trưng cho?', ['Mặt trăng', 'Đất', 'Núi rừng', 'Mặt trời'], 1, 'Vuông tượng cho ĐẤT.'),
    Q('"Chúc mừng năm mới" là lời?', ['Chào hỏi bình thường', 'Lời xin lỗi', 'Lời chia tay', 'Chúc Tết'], 3, 'Lời chúc đầu năm.'),
  ]),

  M(23, 'Đọc đoạn: Cây bàng sân trường', [
    Q('Cây bàng thường được trồng ở đâu?', ['Sân trường, lề đường', 'Trong nhà', 'Trên giường', 'Trong tủ'], 0, 'Bàng cho bóng mát.'),
    Q('Mùa hè, lá bàng có màu?', ['Vàng tươi', 'Đỏ rực', 'Nâu sẫm', 'Xanh'], 3, 'Mùa hè lá xanh.'),
    Q('Mùa thu, lá bàng chuyển màu?', ['Vẫn xanh đậm', 'Tím nhạt', 'Vàng – đỏ', 'Nâu sẫm rồi rụng'], 2, 'Đỏ vàng rụng.'),
    Q('Dưới gốc bàng, em thường làm gì giờ ra chơi?', ['Học bài', 'Cãi nhau', 'Ngồi nghịch lá rụng', 'Vui chơi cùng bạn'], 3, 'Vui chơi cùng bạn.'),
    Q('Bài đọc khuyên em điều gì?', ['Chặt cây', 'Yêu quý cây xanh', 'Không tưới nước', 'Bẻ cành'], 1, 'Yêu và bảo vệ cây.'),
  ]),

  M(24, 'Đọc đoạn: Bạn của em', [
    Q('Bạn thân là người?', ['Người lạ', 'Gần gũi, chia sẻ với em', 'Ghét em', 'Chỉ chơi 1 lần'], 1, 'Bạn thân: gần gũi, sẻ chia.'),
    Q('Khi bạn buồn, em nên?', ['An ủi và lắng nghe', 'Tránh xa, kệ bạn', 'Cười nhạo', 'Mách cô'], 0, 'An ủi, sẻ chia.'),
    Q('Bạn quên bút, em nên?', ['Không cho mượn', 'Mách cô', 'Cho bạn mượn bút', 'Cười bạn'], 2, 'Cho mượn để giúp bạn.'),
    Q('"Tình bạn" được xây dựng từ?', ['Sự ghét bỏ', 'Sự yêu thương và tin cậy', 'Sự đua tranh', 'Sự xa lánh'], 1, 'Yêu thương + tin cậy.'),
    Q('Khi chơi cùng bạn, em không nên?', ['Cười với bạn', 'Chia sẻ kẹo', 'Cùng học bài', 'Tranh giành đồ chơi'], 3, 'Không tranh giành.'),
  ]),

  M(25, 'Chính tả nghe – viết (1)', [
    Q('"Em yêu trường em." — có mấy tiếng?', ['4', '6', '5', '3'], 0, 'em / yêu / trường / em → 4 tiếng.'),
    Q('Tiếng "trường" gồm âm đầu + vần?', ['tru + ờng', 'tr + ường', 't + rường', 'tr + ường (đúng)'], 1, 'Âm đầu "tr" + vần "ường".'),
    Q('"Chiều thứ Bảy" — chữ "B" trong "Bảy" viết hoa vì?', ['Đúng quy tắc viết Hoa thứ', 'Đầu câu', 'Sau dấu phẩy', 'Tên riêng (thứ trong tuần đầu câu)'], 0, 'Tên các thứ trong tuần thường viết hoa.'),
    Q('Chính tả: "con … nhỏ" — điền', ['Mèo (viết hoa M)', 'meo (không dấu)', 'mèo', 'mẻo (sai dấu hỏi)'], 2, '"con mèo nhỏ".'),
    Q('Chính tả: "cây … xanh" — điền', ['báng (sai dấu sắc)', 'bang (không dấu)', 'bàng', 'bạng (sai dấu nặng)'], 2, '"cây bàng xanh".'),
  ]),

  M(26, 'Chính tả nghe – viết (2)', [
    Q('Tiếng nào VIẾT đúng?', ['ngành', 'ngàng (sai dấu huyền)', 'nghành', 'nghànhh'], 0, '"ngành" đúng.'),
    Q('Tiếng nào VIẾT đúng?', ['kệm (sai dấu nặng)', 'kẻm (sai dấu hỏi)', 'kẹm (sai dấu nặng)', 'kẽm'], 3, '"kẽm" (kim loại).'),
    Q('Tiếng nào VIẾT đúng?', ['cá sáu', 'cá xáu', 'cá sấu', 'cá xấu'], 2, '"cá sấu" đúng chính tả.'),
    Q('"Quả …" — điền chữ phù hợp', ['chuối', 'chuộti', 'chuổi (sai dấu hỏi)', 'chuồi (sai dấu huyền)'], 0, '"quả chuối".'),
    Q('"Đi …" (mặc vào chân) — điền', ['rày (sai âm đầu r)', 'giày', 'giáy (sai dấu sắc)', 'dày (sai âm đầu d)'], 1, '"đi giày".'),
  ]),

  M(27, 'Từ chỉ sự vật · Đồ vật quen thuộc', [
    Q('Đâu là TỪ chỉ đồ dùng học tập?', ['Cái thìa', 'Cái bút', 'Cái nồi', 'Cái chảo'], 1, 'Bút là đồ dùng học tập.'),
    Q('Đâu là TỪ chỉ con vật?', ['Cái áo', 'Cái bàn', 'Con gà', 'Cây cam'], 2, '"Con gà" chỉ con vật.'),
    Q('"Cô giáo" là từ chỉ?', ['Người', 'Con vật', 'Đồ vật', 'Cây cối'], 0, 'Chỉ người.'),
    Q('"Quả táo" là từ chỉ?', ['Chỉ người', 'Đồ vật', 'Cây cối/quả', 'Con vật'], 2, 'Chỉ quả (cây cối).'),
    Q('Đâu KHÔNG phải đồ dùng học tập?', ['Bút chì', 'Cặp sách', 'Quyển vở', 'Cái chảo'], 3, 'Cái chảo là đồ bếp.'),
  ]),

  M(28, 'Từ chỉ hoạt động', [
    Q('Từ nào chỉ HOẠT ĐỘNG?', ['tiếng đẹp', 'tiếng đỏ', 'chạy', 'tiếng cao'], 2, '"chạy" là hoạt động.'),
    Q('Em đến trường để?', ['chơi với bạn', 'ngủ trưa', 'ăn quà vặt', 'học'], 3, 'Đi học.'),
    Q('"Đọc sách" là hoạt động của?', ['Mắt và tay', 'Chân và miệng', 'Đầu và tai', 'Tai và mũi'], 0, 'Mắt nhìn, tay cầm.'),
    Q('Hoạt động nào tốt cho sức khỏe?', ['Ngồi xem TV cả ngày', 'Tập thể dục', 'Ăn nhiều bánh kẹo', 'Thức khuya'], 1, 'Thể dục tốt cho sức khoẻ.'),
    Q('Hoạt động nào giúp em sạch sẽ?', ['Rửa tay', 'Chơi đất', 'Cãi nhau', 'Ngủ nhiều cả ngày'], 0, 'Rửa tay sạch.'),
  ]),

  M(29, 'Từ chỉ đặc điểm (màu sắc, hình dáng)', [
    Q('Từ nào chỉ MÀU SẮC?', ['đỏ', 'tiếng ăn', 'tiếng cao', 'tiếng chạy'], 0, '"đỏ" là màu.'),
    Q('Từ nào chỉ HÌNH DÁNG?', ['vàng (màu sắc)', 'ngủ (hoạt động)', 'cười (hoạt động)', 'tròn'], 3, '"tròn" – hình dáng.'),
    Q('Lá cây thường có màu?', ['Màu Đen', 'Màu Trắng', 'Xanh', 'Màu Tím'], 2, 'Màu xanh lá.'),
    Q('Mặt trời có màu gì (khi nhìn)?', ['Màu Xanh', 'Màu Đen', 'Đỏ/Vàng', 'Màu Tím'], 2, 'Đỏ hoặc vàng.'),
    Q('Quả cam khi chín có màu?', ['Xanh (lúc còn non)', 'Cam (vàng cam)', 'Màu Tím', 'Đỏ thẫm'], 1, 'Màu cam.'),
  ]),

  M(30, 'Câu kể · Câu hỏi · Câu cảm', [
    Q('"Em đi học." là câu?', ['Cầu khiến', 'Kể', 'Câu Cảm', 'Câu Hỏi'], 1, 'Kết bằng dấu chấm → câu kể.'),
    Q('"Bạn tên là gì?" là câu?', ['Câu Kể', 'Hỏi', 'Câu Khiến', 'Câu Cảm'], 1, 'Dấu hỏi → câu hỏi.'),
    Q('"Ôi đẹp quá!" là câu?', ['Cảm', 'Câu Khiến', 'Câu Hỏi', 'Câu Kể'], 0, 'Bộc lộ cảm xúc → câu cảm.'),
    Q('Để hỏi tuổi bạn, em nói?', ['Bạn đi đâu đấy?', 'Bạn bao nhiêu tuổi?', 'Bạn ở đâu?', 'Bạn ăn gì?'], 1, 'Câu hỏi tuổi.'),
    Q('Câu "Ngày mai trời mưa." kết thúc bằng?', ['dấu ?', 'dấu !', ',', '.'], 3, 'Dấu chấm.'),
  ]),

  M(31, 'Kể chuyện ngắn: Rùa và Thỏ', [
    Q('Trong truyện, ai chạy nhanh hơn?', ['Bằng nhau', 'Không ai', 'Con Rùa', 'Thỏ'], 3, 'Thỏ vốn nhanh.'),
    Q('Vì sao Thỏ thua Rùa?', ['Thỏ ốm', 'Rùa khỏe hơn', 'Thỏ chủ quan, ngủ quên', 'Rùa nhanh hơn'], 2, 'Thỏ kiêu căng + ngủ quên.'),
    Q('Bài học của truyện là?', ['Đừng chạy', 'Đừng ngủ', 'Đừng kiên trì', 'Kiêu căng sẽ thua; kiên trì sẽ thắng'], 3, 'Bài học về tính kiêu căng.'),
    Q('Rùa chiến thắng nhờ?', ['Kiên trì, cố gắng', 'Bạn giúp', 'Bí mật', 'May mắn'], 0, 'Kiên trì + bền bỉ.'),
    Q('Sau cuộc thi, Thỏ thấy?', ['Vui mừng', 'Bình thường', 'Xấu hổ vì chủ quan', 'Tự hào'], 2, 'Xấu hổ.'),
  ]),

  M(32, 'Đọc – hiểu đoạn ngắn (1)', [
    Q('Đoạn: "Mẹ đi chợ về. Mẹ mua cho em một quả táo đỏ." — Mẹ mua gì cho em?', ['Quả cam', 'Quả táo', 'Quả lê', 'Quả chuối'], 1, 'Quả táo.'),
    Q('Quả táo trong đoạn có màu gì?', ['Đỏ', 'Xanh lá', 'Vàng đậm', 'Tím đen'], 0, 'Đỏ.'),
    Q('Ai đi chợ về?', ['Em bé', 'Bà ngoại', 'Mẹ', 'Bố của em'], 2, 'Mẹ.'),
    Q('Em cảm thấy thế nào khi nhận quà?', ['Tức giận', 'Bình thường', 'Buồn vì phải cảm ơn', 'Vui'], 3, 'Vui.'),
    Q('Em nên nói gì với mẹ?', ['Chạy đi chơi', 'Khóc to', 'Không nói', 'Cảm ơn mẹ'], 3, 'Cảm ơn mẹ.'),
  ]),

  M(33, 'Đọc – hiểu đoạn ngắn (2)', [
    Q('Đoạn: "Sáng nay trời nắng đẹp. Em đi học cùng bạn Lan." — Em đi học với ai?', ['Bà ngoại', 'Em một mình', 'Bạn Lan', 'Mẹ của em'], 2, 'Bạn Lan.'),
    Q('Thời tiết trong đoạn?', ['Bão lớn', 'Nắng đẹp', 'Mưa nhẹ', 'Lạnh giá có tuyết'], 1, 'Nắng đẹp.'),
    Q('Em đi đâu?', ['Đi học', 'Đi ngủ', 'Đi chơi', 'Đi chợ'], 0, 'Đi học.'),
    Q('"Sáng nay" là buổi nào?', ['Buổi tối', 'Buổi sáng', 'Buổi chiều', 'Buổi trưa'], 1, 'Buổi sáng.'),
    Q('Tên bạn trong đoạn viết hoa vì?', ['Đúng quy tắc đẹp', 'Sau dấu chấm', 'Đầu câu', 'Là tên riêng'], 3, 'Tên riêng → viết hoa.'),
  ]),

  M(34, 'Ôn tập cuối HK2 (1)', [
    Q('Tiếng "trường" có âm đầu là?', ['tr', 'ờng (vần)', 't (chỉ một chữ)', 'r (chỉ một chữ)'], 0, 'Âm đầu "tr".'),
    Q('Cuối câu hỏi dùng dấu?', ['?', '.', 'dấu !', ','], 0, 'Dấu hỏi.'),
    Q('"Con mèo" – từ "con mèo" chỉ?', ['Con vật', 'Chỉ người', 'Chỉ cây cối', 'Đồ vật'], 0, 'Con vật.'),
    Q('"Đỏ" là từ chỉ?', ['Tên riêng', 'Hoạt động', 'Màu sắc', 'Số đếm'], 2, 'Màu sắc.'),
    Q('Tên riêng người viết?', ['Hoa chữ cái đầu', 'In đậm', 'Thường', 'Gạch chân'], 0, 'Hoa chữ cái đầu mỗi tiếng.'),
    Q('"Bàn" có vần?', ['b (âm đầu)', 'àn', 'an (chưa có dấu)', 'ba (thiếu âm cuối)'], 1, 'Vần "àn".'),
  ]),

  M(35, 'Ôn tập cuối HK2 (2)', [
    Q('Câu "Em yêu mẹ." là câu?', ['Câu Khiến', 'Kể', 'Câu Cảm', 'Câu Hỏi'], 1, 'Câu kể.'),
    Q('Tiếng "chuối" có vần?', ['ch (âm đầu)', 'chu (thiếu âm cuối)', 'ối (thiếu u)', 'uôi'], 3, 'Vần "uôi".'),
    Q('Đâu là viết ĐÚNG chính tả?', ['quả gứa', 'quả zứa', 'quả giứa', 'quả dứa'], 3, '"quả dứa" đúng.'),
    Q('Đầu câu KỂ viết?', ['Thường', 'In nghiêng', 'In đậm', 'Hoa'], 3, 'Chữ đầu viết hoa.'),
    Q('Sắp xếp thành câu: "yêu / em / cô"', ['Em yêu cô.', 'Cô yêu em.', 'Yêu em cô.', 'Cả hai đều đúng tuỳ ngữ cảnh'], 3, 'Cả "Em yêu cô." và "Cô yêu em." đều là câu đúng.'),
    Q('Bài học cuối năm: em nên?', ['Quên hết kiến thức', 'Bỏ học', 'Chỉ chơi', 'Ôn lại bài thường xuyên'], 3, 'Ôn bài thường xuyên.'),
  ]),
];

export const P1TV_SCENARIOS = indexBy(P1TV_WEEKS);
