// ============================================================
// Lớp 4 · TIẾNG VIỆT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018 (3 bộ Cánh Diều / Kết nối / Chân trời).
// ID prefix: "P4TV-wNN-quiz" → trùng prefix module "P4TV".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P4TV', 'tieng-viet', n, title, qs, opts);

export const P4TV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập — Đọc hiểu cơ bản · Cấu tạo tiếng', [
    Q('Tiếng "trường" có cấu tạo gồm những bộ phận nào?', ['Chỉ vần và thanh', 'Chỉ vần', 'Chỉ âm đầu', 'Âm đầu, vần, thanh'], 3, 'Mỗi tiếng đầy đủ gồm: âm đầu + vần + thanh.'),
    Q('Tiếng "anh" có bộ phận nào KHÔNG có?', ['Thanh điệu', 'Cả ba đều có', 'Âm đầu', 'Vần "anh"'], 2, 'Tiếng "anh" không có âm đầu, chỉ có vần "anh" và thanh ngang.'),
    Q('Vần của tiếng "học" là?', ['hoc', 'oc', 'học', 'oc nặng'], 1, 'Âm đầu "h", vần "oc", thanh nặng.'),
    Q('Bài tập đọc đầu tiên thường giúp em rèn kĩ năng nào?', ['Tính toán', 'Vẽ tranh', 'Múa hát theo nhạc', 'Đọc to, đọc đúng, hiểu nội dung'], 3, 'Tập đọc rèn kĩ năng đọc và hiểu văn bản.'),
    Q('Khi đọc một câu chuyện, em cần chú ý điều gì?', ['Chỉ cần thuộc lòng', 'Chỉ đọc to', 'Đọc thật nhanh', 'Nhân vật, tình tiết, ý nghĩa'], 3, 'Cần nắm nhân vật, sự việc, thông điệp.'),
    Q('Tiếng nào sau đây có 6 chữ cái?', ['bông hoa', 'quyển sách', 'cánh chim', 'trường'], 3, '"trường" gồm 6 chữ cái: t-r-ư-ơ-n-g.'),
  ]),

  M(2, 'Từ đơn — Từ phức', [
    Q('Từ đơn là từ?', ['Chỉ tên người', 'Có nghĩa rộng', 'Có 2 tiếng trở lên', 'Có 1 tiếng'], 3, 'Từ đơn = một tiếng có nghĩa.'),
    Q('Từ phức là từ?', ['Chỉ gọi sự vật', 'Chỉ chỉ hành động', 'Có từ 2 tiếng trở lên', 'Có 1 tiếng'], 2, 'Từ phức = từ có 2 tiếng trở lên.'),
    Q('Từ nào sau đây là từ đơn?', ['trường học', 'nhà', 'học sinh', 'cha mẹ'], 1, '"nhà" có 1 tiếng → từ đơn.'),
    Q('Từ nào sau đây là từ phức?', ['cây cối', 'bông hoa', 'lá cây', 'cây xanh'], 0, '"cây cối" có 2 tiếng → từ phức.'),
    Q('Câu "Học sinh chăm ngoan" có mấy từ?', ['5', '2', '3', '4'], 2, '"Học sinh / chăm / ngoan" → 3 từ.'),
    Q('Trong các từ: bàn, ghế, bàn ghế, sách vở — có mấy từ phức?', ['3', '2', '1', '4'], 1, '"bàn ghế" và "sách vở" là từ phức → 2 từ.'),
  ]),

  M(3, 'Từ ghép — Từ láy', [
    Q('Từ ghép là từ phức được tạo bởi?', ['Các tiếng giống nhau về âm', 'Các tiếng có nghĩa ghép lại', 'Các âm tiết vô nghĩa', 'Một tiếng duy nhất'], 1, 'Từ ghép: các tiếng đều có nghĩa, ghép theo quan hệ nghĩa.'),
    Q('Từ láy là từ phức được tạo bởi?', ['Các từ trái nghĩa', 'Một tiếng duy nhất', 'Các tiếng có nghĩa', 'Sự lặp lại âm hoặc vần'], 3, 'Từ láy: các tiếng có quan hệ về âm (lặp âm đầu, vần, hoặc cả tiếng).'),
    Q('Từ nào sau đây là từ láy?', ['long lanh', 'học sinh', 'sách vở', 'nhà cửa'], 0, '"long lanh" lặp âm đầu "l" → từ láy.'),
    Q('Từ nào sau đây là từ ghép?', ['bàn ghế', 'xinh xắn', 'sạch sẽ', 'líu lo'], 0, '"bàn ghế" — cả "bàn" và "ghế" đều có nghĩa → từ ghép.'),
    Q('"Lung linh" thuộc loại từ láy nào?', ['Láy cả tiếng', 'Láy vần', 'Không phải láy', 'Láy âm đầu'], 3, 'Lặp âm đầu "l".'),
    Q('"Ào ào" là loại từ láy nào?', ['Láy âm đầu', 'Láy vần', 'Từ ghép', 'Láy cả tiếng'], 3, 'Lặp lại nguyên tiếng "ào".'),
  ]),

  M(4, 'Danh từ — Khái niệm và phân loại', [
    Q('Danh từ là từ chỉ?', ['Tính chất', 'Số lượng', 'Sự vật, hiện tượng, khái niệm', 'Hành động'], 2, 'Danh từ chỉ người, vật, hiện tượng, khái niệm.'),
    Q('Từ nào sau đây là danh từ?', ['rất (phó từ)', 'đẹp (tính từ)', 'chạy (động từ)', 'học sinh'], 3, '"học sinh" chỉ người → danh từ.'),
    Q('Trong các từ: bàn, viết, xanh, mưa — có mấy danh từ?', ['3', '4', '1', '2'], 3, '"bàn" (vật) và "mưa" (hiện tượng) là danh từ → 2 từ.'),
    Q('Danh từ chỉ hiện tượng thiên nhiên là?', ['quyển sách', 'cây bàng', 'cô giáo', 'mưa'], 3, '"mưa" là hiện tượng thiên nhiên.'),
    Q('Danh từ chỉ khái niệm là?', ['quyển sách', 'cây bút', 'cái bàn', 'tình bạn'], 3, '"tình bạn" — không nhìn thấy được, là khái niệm.'),
    Q('Câu "Em yêu trường lớp" có mấy danh từ?', ['1', '2', '4', '3'], 3, '"em", "trường", "lớp" — 3 danh từ.'),
  ]),

  M(5, 'Danh từ chung — Danh từ riêng', [
    Q('Danh từ riêng dùng để gọi tên?', ['Loại sự vật chung', 'Hành động', 'Một người, một vật, một địa danh cụ thể', 'Tính chất'], 2, 'Danh từ riêng chỉ tên cụ thể (tên người, địa danh...).'),
    Q('Quy tắc viết danh từ riêng?', ['In nghiêng', 'Đặt trong ngoặc', 'Viết hoa chữ cái đầu', 'Viết thường'], 2, 'Danh từ riêng luôn viết hoa chữ cái đầu mỗi tiếng.'),
    Q('Từ nào là danh từ riêng?', ['dòng sông', 'Hà Nội', 'thành phố', 'học sinh'], 1, '"Hà Nội" là tên địa danh cụ thể.'),
    Q('Trong câu "Em đi học ở trường Tiểu học Kim Đồng", danh từ riêng là?', ['đi học', 'trường', 'tiểu học', 'Kim Đồng'], 3, '"Kim Đồng" là tên trường/người.'),
    Q('Khi viết tên người Việt Nam, ta?', ['Viết hoa tất cả chữ cái', 'Viết in đậm', 'Viết hoa chữ cái đầu mỗi tiếng', 'Viết thường'], 2, 'VD: Nguyễn Văn An — viết hoa N, V, A.'),
    Q('Trong các từ: Trần Hưng Đạo, sông, Sài Gòn, học sinh — có mấy danh từ riêng?', ['2', '1', '3', '4'], 0, '"Trần Hưng Đạo" và "Sài Gòn" → 2 danh từ riêng.'),
  ]),

  M(6, 'MRVT: Trung thực — Tự trọng', [
    Q('Từ nào sau đây cùng nghĩa với "trung thực"?', ['kiêu căng', 'thật thà', 'lười biếng', 'gian dối'], 1, '"thật thà" = trung thực.'),
    Q('Từ nào trái nghĩa với "trung thực"?', ['ngay thẳng', 'thẳng thắn', 'chân thật', 'dối trá'], 3, '"dối trá" trái nghĩa "trung thực".'),
    Q('"Tự trọng" có nghĩa là?', ['Tôn trọng và giữ phẩm giá của bản thân', 'Khoe khoang', 'Không quan tâm gì', 'Coi thường mình'], 0, 'Tự trọng = biết giữ giá trị, danh dự của mình.'),
    Q('Câu thành ngữ nào nói về tính trung thực?', ['Cây ngay không sợ chết đứng', 'Há miệng chờ sung', 'Mua may bán đắt', 'Đứng núi này trông núi nọ'], 0, 'Ý: người ngay thẳng không sợ bị vu oan.'),
    Q('Bạn nào sau đây thể hiện lòng tự trọng?', ['Nhận lỗi khi mình sai', 'Nói dối để được khen', 'Lấy đồ của bạn', 'Chép bài bạn'], 0, 'Dám nhận lỗi → có lòng tự trọng.'),
    Q('Từ nào KHÔNG cùng nhóm với "thẳng thắn, trung thực, thật thà"?', ['chân thành', 'ngay thẳng', 'dối trá', 'chính trực'], 2, '"dối trá" trái nghĩa nhóm trung thực.'),
  ]),

  M(7, 'Động từ', [
    Q('Động từ là từ chỉ?', ['Đặc điểm', 'Hoạt động, trạng thái', 'Sự vật', 'Số lượng'], 1, 'Động từ chỉ hành động hoặc trạng thái.'),
    Q('Từ nào là động từ?', ['chạy', 'cái bàn', 'đẹp đẽ', 'rất nhanh'], 0, '"chạy" là hành động.'),
    Q('Trong câu "Em đọc sách", động từ là?', ['sách (danh từ)', 'em đọc', 'đọc', 'em (chủ ngữ)'], 2, '"đọc" chỉ hành động.'),
    Q('Động từ chỉ trạng thái là?', ['nhảy dây', 'yêu', 'viết bài', 'múa hát'], 1, '"yêu" chỉ trạng thái cảm xúc.'),
    Q('Trong các từ: học, sách, vui, ngủ — có mấy động từ?', ['3', '4', '2', '1'], 2, '"học" và "ngủ" là động từ → 2.'),
    Q('Câu nào có 2 động từ?', ['Em đi học và làm bài', 'Trời mưa', 'Lá xanh', 'Em ăn cơm'], 0, '"đi" và "làm" là 2 động từ.'),
  ]),

  M(8, 'MRVT: Ước mơ', [
    Q('Từ nào cùng nghĩa với "ước mơ"?', ['lo lắng', 'mong muốn', 'sợ hãi', 'tức giận'], 1, '"mong muốn" gần nghĩa "ước mơ".'),
    Q('"Ước mơ" thường liên quan đến?', ['Hiện tại', 'Không có thời gian', 'Quá khứ', 'Tương lai'], 3, 'Ước mơ là điều ta mong muốn đạt được trong tương lai.'),
    Q('Câu thành ngữ "Cầu được ước thấy" có nghĩa?', ['Ước gì được nấy', 'Phải chờ rất lâu', 'Chỉ là mơ ước', 'Không bao giờ đạt được'], 0, 'Ý: điều mong muốn trở thành hiện thực.'),
    Q('Từ nào sau đây KHÔNG cùng nghĩa "ước mơ"?', ['ước nguyện', 'mong ước', 'mơ ước', 'than thở'], 3, '"than thở" không cùng nghĩa.'),
    Q('Để biến ước mơ thành hiện thực, em cần?', ['Chỉ ngủ và mơ', 'Đợi may mắn đến', 'Không cần làm gì', 'Cố gắng học tập, rèn luyện'], 3, 'Phải nỗ lực, có kế hoạch và hành động cụ thể.'),
    Q('Ước mơ chính đáng là ước mơ?', ['Có ích, đẹp đẽ', 'Làm hại người khác', 'Khó thực hiện được', 'Chỉ dành cho riêng mình'], 0, 'Ước mơ chính đáng đem lại điều tốt cho mình và xã hội.'),
  ]),

  M(9, 'Tính từ', [
    Q('Tính từ là từ chỉ?', ['Sự vật', 'Đặc điểm, tính chất', 'Số lượng', 'Hành động'], 1, 'Tính từ chỉ đặc điểm, tính chất, trạng thái của sự vật.'),
    Q('Từ nào là tính từ?', ['xanh', 'rất xanh', 'đang chạy', 'cây xanh'], 0, '"xanh" chỉ màu sắc → tính từ.'),
    Q('Trong câu "Bầu trời cao và rộng", có mấy tính từ?', ['3', '0', '2', '1'], 2, '"cao" và "rộng" là 2 tính từ.'),
    Q('Từ nào chỉ tính chất của con người?', ['đọc sách', 'hiền', 'trồng cây', 'đang chạy'], 1, '"hiền" chỉ tính cách → tính từ.'),
    Q('Trong các từ: đỏ, ngủ, to, mèo — có mấy tính từ?', ['2', '4', '3', '1'], 0, '"đỏ" (màu) và "to" (kích thước) là tính từ → 2.'),
    Q('Tính từ chỉ kích thước là?', ['chậm chạp', 'nhanh nhẹn', 'vàng tươi', 'lớn'], 3, '"lớn" chỉ kích thước.'),
  ]),

  M(10, 'Ôn tập giữa Học kỳ 1', [
    Q('Từ "lung linh" là loại từ gì?', ['Từ láy', 'Tính từ', 'Từ đơn', 'Từ ghép'], 0, 'Lặp âm đầu "l" → từ láy.'),
    Q('Trong câu "Bạn An rất chăm chỉ", danh từ riêng là?', ['chăm chỉ', 'An', 'bạn (danh từ chung)', 'rất chăm'], 1, '"An" là tên người.'),
    Q('Câu "Em hái hoa" có động từ là?', ['hoa (danh từ)', 'hái', 'em hái', 'em (chủ ngữ)'], 1, '"hái" là động từ.'),
    Q('Từ nào KHÔNG phải tính từ?', ['cao lớn', 'chạy', 'thấp bé', 'gầy gò'], 1, '"chạy" là động từ.'),
    Q('Tiếng "yêu" có cấu tạo?', ['Vần và thanh, không có âm đầu', 'Đủ 3 bộ phận', 'Chỉ âm đầu', 'Chỉ thanh'], 0, '"yêu" có vần "yêu" và thanh ngang, không có âm đầu.'),
    Q('Câu nào có từ trái nghĩa với "trung thực"?', ['Anh ấy rất dối trá', 'Cô ấy chính trực', 'Bạn ấy rất thật thà', 'Em rất ngay thẳng'], 0, '"dối trá" trái nghĩa "trung thực".'),
  ], { difficulty: 2 }),

  M(11, 'Câu hỏi và dấu chấm hỏi', [
    Q('Câu hỏi dùng để?', ['Hỏi điều chưa biết', 'Yêu cầu, sai bảo', 'Bộc lộ cảm xúc', 'Kể về sự việc'], 0, 'Câu hỏi để hỏi điều mình chưa biết hoặc còn nghi vấn.'),
    Q('Câu hỏi thường kết thúc bằng dấu?', ['Chấm hỏi', 'Dấu phẩy', 'Chấm than', 'Dấu chấm'], 0, 'Câu hỏi → dấu chấm hỏi (?).'),
    Q('Từ nào thường xuất hiện trong câu hỏi?', ['rất, lắm', 'và, nhưng', 'ai, gì, nào, bao nhiêu', 'vì, nên'], 2, 'Đó là các từ để hỏi.'),
    Q('Câu nào là câu hỏi?', ['Hãy ngồi xuống.', 'Em đang đọc sách.', 'Em đang làm gì?', 'Đẹp quá!'], 2, 'Câu có từ "gì" và kết thúc bằng "?" → câu hỏi.'),
    Q('Câu "Bạn có thích đọc truyện không?" dùng để?', ['Hỏi', 'Bộc lộ cảm xúc', 'Khẳng định', 'Yêu cầu'], 0, 'Có từ "không" cuối câu → hỏi.'),
    Q('Câu nào KHÔNG phải câu hỏi?', ['Bao giờ cậu đi?', 'Trời hôm nay đẹp.', 'Ai làm việc này?', 'Tại sao em khóc?'], 1, 'Câu C là câu kể, không có từ để hỏi.'),
  ]),

  M(12, 'Dùng câu hỏi với mục đích khác', [
    Q('Câu hỏi "Sao cậu không cẩn thận chút?" có thể dùng để?', ['Chê trách nhẹ nhàng', 'Kể chuyện', 'Yêu cầu khẩn cấp', 'Khen ngợi'], 0, 'Câu hỏi dùng để trách móc, chê trách.'),
    Q('"Cậu giỏi quá nhỉ?" là câu hỏi dùng để?', ['Chê bai', 'Hỏi thật', 'Sai khiến', 'Khen ngợi'], 3, 'Câu hỏi dùng để bày tỏ lời khen.'),
    Q('"Chẳng lẽ mình lại bỏ cuộc?" là câu hỏi dùng để?', ['Hỏi ai khác', 'Tự khẳng định, động viên bản thân', 'Chê bai', 'Yêu cầu trợ giúp'], 1, 'Hỏi nhưng thực ra để khẳng định quyết tâm.'),
    Q('Khi đặt câu hỏi, ta cần thể hiện thái độ?', ['Chế giễu', 'Quát mắng', 'Lịch sự, tôn trọng', 'Khinh khỉnh'], 2, 'Phải lịch sự khi giao tiếp.'),
    Q('Câu hỏi nào sau đây thể hiện thái độ lịch sự?', ['Bạn có thể giúp mình được không?', 'Sao mà ngu thế?', 'Đi mau lên!', 'Mày đi đâu đấy?'], 0, 'Lựa chọn B nhẹ nhàng, lịch sự.'),
    Q('Câu hỏi dùng để khẳng định thường chứa từ?', ['sẽ, đã', 'và, nhưng', 'chẳng lẽ, lẽ nào', 'rất, lắm'], 2, 'Hai cụm "chẳng lẽ", "lẽ nào" mang ý khẳng định ngược.'),
  ]),

  M(13, 'MRVT: Ý chí — Nghị lực', [
    Q('"Nghị lực" có nghĩa gần với?', ['Sự mệt mỏi', 'Sức mạnh tinh thần để vượt khó', 'Sự sợ hãi', 'Sự lười biếng'], 1, 'Nghị lực = ý chí, sức mạnh tinh thần.'),
    Q('Câu tục ngữ "Có chí thì nên" nói lên điều gì?', ['Cần may mắn', 'Có ý chí sẽ thành công', 'Phải có nhiều tiền', 'Phải nhờ người khác'], 1, 'Có ý chí, quyết tâm → đạt được mục tiêu.'),
    Q('Từ nào cùng nghĩa với "kiên trì"?', ['bền bỉ', 'nhụt chí', 'lười nhác', 'chán nản'], 0, '"bền bỉ" gần nghĩa "kiên trì".'),
    Q('"Vượt khó" có nghĩa là?', ['Chờ người giúp', 'Đối mặt và vượt qua khó khăn', 'Bỏ cuộc giữa chừng', 'Trốn tránh khó khăn'], 1, 'Dám đối mặt và tìm cách vượt qua.'),
    Q('Câu thành ngữ nào nói về nghị lực?', ['Đứng núi này trông núi nọ', 'Ăn vóc học hay', 'Há miệng chờ sung', 'Có công mài sắt có ngày nên kim'], 3, 'Ý: kiên trì sẽ đạt kết quả.'),
    Q('Bạn nào thể hiện ý chí vươn lên?', ['Đổ lỗi cho hoàn cảnh', 'Bỏ học vì khó', 'Cố gắng học dù gia đình khó khăn', 'Sao chép bài bạn'], 2, 'Vượt khó học tập → ý chí vươn lên.'),
  ]),

  M(14, 'Câu kể "Ai làm gì?"', [
    Q('Câu kể "Ai làm gì?" gồm mấy bộ phận chính?', ['3', '2', '4', '1'], 1, 'Hai bộ phận chính: chủ ngữ (Ai) + vị ngữ (làm gì).'),
    Q('Trong câu "Em đang học bài", bộ phận "Em" là?', ['Bổ ngữ', 'Vị ngữ', 'Trạng ngữ', 'Chủ ngữ'], 3, '"Em" trả lời câu hỏi "Ai?" → chủ ngữ.'),
    Q('Trong câu "Mẹ nấu cơm", vị ngữ là?', ['mẹ nấu', 'Mẹ (chủ ngữ)', 'nấu cơm', 'cơm (bổ ngữ)'], 2, '"nấu cơm" trả lời "làm gì" → vị ngữ.'),
    Q('Câu nào là câu kể "Ai làm gì?"?', ['Em chạy ra sân.', 'Bạn ấy là học sinh.', 'Bầu trời rất xanh.', 'Trời mưa to quá!'], 0, 'Câu có chủ ngữ "Em" + động từ "chạy" → "Ai làm gì?".'),
    Q('Chủ ngữ trong câu kể "Ai làm gì?" thường là?', ['Liên từ', 'Trạng từ', 'Tính từ', 'Danh từ hoặc cụm danh từ'], 3, 'Chủ ngữ thường là danh từ chỉ người, vật.'),
    Q('Vị ngữ trong câu kể "Ai làm gì?" thường bắt đầu bằng?', ['Đại từ xưng hô', 'Danh từ', 'Tính từ', 'Động từ'], 3, 'Vì là "làm gì" → động từ.'),
  ]),

  M(15, 'Câu kể "Ai thế nào?"', [
    Q('Câu kể "Ai thế nào?" miêu tả?', ['Hành động', 'Đặc điểm, tính chất, trạng thái', 'Số lượng', 'Sự vật là gì'], 1, 'Câu kể "Ai thế nào?" miêu tả đặc điểm, tính chất.'),
    Q('Trong câu "Bầu trời rất xanh", vị ngữ là?', ['xanh', 'rất xanh', 'Bầu trời', 'rất (phó từ)'], 1, '"rất xanh" miêu tả đặc điểm → vị ngữ.'),
    Q('Vị ngữ trong câu "Ai thế nào?" thường là?', ['Tính từ hoặc cụm tính từ', 'Danh từ', 'Động từ', 'Trạng từ chỉ thời gian'], 0, 'Vì miêu tả đặc điểm → tính từ.'),
    Q('Câu nào là câu kể "Ai thế nào?"?', ['Bạn ấy thông minh.', 'Em chạy nhanh.', 'Em là học sinh.', 'Trời đẹp quá!'], 0, '"thông minh" là tính từ → câu "Ai thế nào?".'),
    Q('Câu "Hoa hồng rất thơm" thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Câu hỏi', 'Ai là gì?'], 1, '"rất thơm" miêu tả đặc điểm.'),
    Q('Chủ ngữ trong câu kể "Ai thế nào?" là?', ['Trạng từ', 'Danh từ hoặc cụm danh từ', 'Động từ', 'Tính từ'], 1, 'Chủ ngữ luôn là danh từ.'),
  ]),

  M(16, 'Câu kể "Ai là gì?"', [
    Q('Câu kể "Ai là gì?" dùng để?', ['Sai khiến', 'Nêu câu hỏi', 'Giới thiệu, định nghĩa', 'Miêu tả hành động'], 2, 'Để giới thiệu, định nghĩa, đánh giá sự vật.'),
    Q('Vị ngữ trong câu "Ai là gì?" thường bắt đầu bằng?', ['rất (phó từ)', 'và (liên từ)', 'đã (phó từ thời gian)', 'là'], 3, 'Có từ "là" hoặc "trở thành" nối chủ ngữ và vị ngữ.'),
    Q('Câu nào là câu kể "Ai là gì?"?', ['Em là học sinh lớp 4.', 'Em đang viết bài.', 'Em rất chăm chỉ.', 'Em hãy ngồi xuống!'], 0, 'Có cấu trúc "Em là học sinh..." → "Ai là gì?".'),
    Q('Trong câu "Hà Nội là thủ đô của nước ta", chủ ngữ là?', ['là thủ đô', 'của nước ta', 'Hà Nội', 'thủ đô'], 2, '"Hà Nội" trả lời "Ai/cái gì" → chủ ngữ.'),
    Q('Trong câu "Mẹ là người tôi yêu quý nhất", vị ngữ là?', ['người tôi yêu quý nhất', 'Mẹ (chủ ngữ)', 'là người tôi yêu quý nhất', 'yêu quý'], 2, 'Phần sau "Mẹ" là vị ngữ — bắt đầu bằng "là".'),
    Q('Câu "Toán là môn học em yêu thích" thuộc kiểu?', ['Ai làm gì?', 'Ai là gì?', 'Ai thế nào?', 'Câu hỏi'], 1, 'Có cấu trúc "X là Y" → "Ai là gì?".'),
  ]),

  M(17, 'Dấu hai chấm', [
    Q('Dấu hai chấm dùng để báo hiệu?', ['Kết thúc câu', 'Bộc lộ cảm xúc', 'Phần liệt kê hoặc lời nói tiếp theo', 'Nêu câu hỏi'], 2, 'Báo trước phần giải thích, liệt kê, hoặc lời nói.'),
    Q('Dấu hai chấm thường kết hợp với?', ['Dấu chấm hỏi', 'Dấu chấm than', 'Dấu phẩy', 'Dấu ngoặc kép hoặc dấu gạch ngang'], 3, 'Khi dẫn lời nói: : "..." hoặc : —'),
    Q('Câu nào dùng dấu hai chấm đúng?', ['Em: rất thích các môn.', 'Em rất thích các môn Toán Tiếng Việt: Khoa học.', 'Em rất thích các môn: Toán, Tiếng Việt, Khoa học.', 'Em rất thích, các môn Toán: Tiếng Việt.'], 2, 'Sau dấu hai chấm là phần liệt kê.'),
    Q('Trong câu "Cô giáo nói: \\"Các em hãy làm bài cẩn thận.\\"", dấu hai chấm báo hiệu?', ['Phần liệt kê', 'Lời nói trực tiếp', 'Câu hỏi', 'Phần giải thích'], 1, 'Dấu hai chấm + ngoặc kép → dẫn lời nói trực tiếp.'),
    Q('Dấu hai chấm có thể được dùng để?', ['Thay dấu phẩy', 'Nối hai câu', 'Thay dấu chấm', 'Liệt kê các sự vật'], 3, 'Báo trước phần liệt kê.'),
    Q('Câu "Vườn nhà em có nhiều cây ăn quả: cam, bưởi, ổi" có dấu hai chấm dùng để?', ['Liệt kê', 'Dẫn lời', 'Cảm thán', 'Dẫn lời nói trực tiếp'], 0, 'Sau ":" là danh sách các loại cây.'),
  ]),

  M(18, 'Kiểm tra Học kỳ 1', [
    Q('Từ "long lanh" là?', ['Từ đơn', 'Từ ghép', 'Từ láy', 'Tính từ riêng'], 2, 'Lặp âm đầu "l" → từ láy.'),
    Q('Câu "Em yêu trường lớp" thuộc kiểu?', ['Ai thế nào?', 'Câu hỏi', 'Ai làm gì?', 'Ai là gì?'], 2, '"yêu" là động từ → "Ai làm gì?".'),
    Q('"Hà Nội" là?', ['Động từ', 'Danh từ chung', 'Tính từ', 'Danh từ riêng'], 3, 'Tên địa danh cụ thể → danh từ riêng.'),
    Q('Câu "Em là học sinh chăm ngoan" thuộc kiểu?', ['Câu hỏi', 'Ai là gì?', 'Ai thế nào?', 'Ai làm gì?'], 1, 'Có "là" → "Ai là gì?".'),
    Q('Từ trái nghĩa với "trung thực" là?', ['dối trá', 'ngay thẳng', 'thật thà', 'chân thật'], 0, '"dối trá" trái nghĩa "trung thực".'),
    Q('Câu hỏi kết thúc bằng dấu?', ['Dấu chấm', 'Chấm than', 'Hai chấm', 'Chấm hỏi'], 3, 'Câu hỏi → dấu "?".'),
    Q('Trong câu "Bầu trời xanh trong", vị ngữ là?', ['trong (tính từ)', 'xanh trong', 'Bầu (danh từ)', 'Bầu trời'], 1, '"xanh trong" tả đặc điểm → vị ngữ.'),
    Q('Câu nào KHÔNG có tính từ?', ['Trời cao xanh.', 'Bạn ấy đang ngủ.', 'Em chạy nhanh.', 'Hoa rất đẹp.'], 1, 'Câu C chỉ có động từ "đang ngủ".'),
    Q('"Cố gắng học tập, vượt khó khăn" thể hiện điều gì?', ['Ý chí, nghị lực', 'Lười biếng', 'Buồn chán', 'Sự e dè, nhút nhát'], 0, 'Thể hiện nghị lực, ý chí vươn lên.'),
    Q('Dấu hai chấm dùng để?', ['Nêu câu hỏi', 'Kết thúc câu', 'Cảm thán', 'Báo trước phần liệt kê hoặc lời nói'], 3, 'Báo phần giải thích, liệt kê, hoặc dẫn lời.'),
  ], { difficulty: 2, description: 'Bài kiểm tra cuối Học kỳ 1 — từ loại, các kiểu câu kể, dấu câu, MRVT.' }),

  // ──────────────── HK2 ────────────────
  M(19, 'Chủ ngữ — Vị ngữ trong câu kể "Ai làm gì?"', [
    Q('Chủ ngữ trong câu kể "Ai làm gì?" trả lời câu hỏi?', ['Là gì?', 'Làm gì?', 'Như thế nào?', 'Ai/Cái gì/Con gì?'], 3, 'Chủ ngữ trả lời "Ai?", "Cái gì?", "Con gì?".'),
    Q('Trong câu "Đàn chim hót líu lo", chủ ngữ là?', ['hót líu lo', 'chim (riêng từ)', 'líu lo', 'Đàn chim'], 3, '"Đàn chim" trả lời "Con gì?".'),
    Q('Trong câu "Lan và Mai cùng đi học", chủ ngữ là?', ['đi học', 'Lan và Mai', 'Mai (chỉ một bạn)', 'Lan (chỉ một bạn)'], 1, 'Chủ ngữ là cả cụm "Lan và Mai".'),
    Q('Vị ngữ trong "Mẹ nấu cơm và quét nhà" là?', ['Mẹ (chủ ngữ)', 'nấu cơm', 'nhà (danh từ)', 'nấu cơm và quét nhà'], 3, 'Vị ngữ gồm cả hai cụm động từ.'),
    Q('Câu nào có chủ ngữ là cụm danh từ?', ['Trời mưa.', 'Cô giáo lớp em rất hiền.', 'Em chơi bóng.', 'Hoa nở.'], 1, '"Cô giáo lớp em" là cụm danh từ.'),
    Q('Chủ ngữ trong câu "Những con thuyền nhỏ đang lướt trên sông" là?', ['thuyền', 'đang lướt', 'Những con thuyền nhỏ', 'trên sông'], 2, 'Cả cụm danh từ "Những con thuyền nhỏ" là chủ ngữ.'),
  ]),

  M(20, 'MRVT: Tài năng', [
    Q('"Tài năng" có nghĩa là?', ['Tính tham lam', 'Khả năng đặc biệt, vượt trội', 'Sự may mắn', 'Sự lười biếng'], 1, 'Tài năng = khả năng nổi bật, làm tốt một việc gì đó.'),
    Q('Từ nào cùng nghĩa với "tài năng"?', ['tài giỏi', 'kém cỏi', 'chăm chỉ', 'ngu dốt'], 0, '"tài giỏi" gần nghĩa "tài năng".'),
    Q('Câu thành ngữ nào nói về tài năng?', ['Đứng núi này trông núi nọ', 'Học một biết mười', 'Mua may bán đắt', 'Há miệng chờ sung'], 1, 'Ý chỉ người thông minh, có tài.'),
    Q('Từ nào KHÔNG cùng nhóm với "tài năng"?', ['thiên tài', 'tài giỏi', 'lười nhác', 'có tài'], 2, '"lười nhác" không liên quan đến tài năng.'),
    Q('Để phát triển tài năng, ta cần?', ['Không học gì', 'Chăm chỉ luyện tập', 'Chỉ ngủ', 'Ỷ lại vào người khác'], 1, 'Tài năng phát triển nhờ luyện tập kiên trì.'),
    Q('"Thiên tài" có nghĩa là?', ['Người không có khả năng', 'Người lười biếng', 'Người có tài năng đặc biệt bẩm sinh', 'Người chăm chỉ'], 2, 'Thiên tài = tài năng trời phú, vượt trội hẳn người khác.'),
  ]),

  M(21, 'Câu khiến (Câu cầu khiến)', [
    Q('Câu khiến dùng để?', ['Yêu cầu, đề nghị, ra lệnh', 'Bộc lộ cảm xúc', 'Kể chuyện', 'Bộc lộ cảm xúc ngạc nhiên'], 0, 'Câu khiến để yêu cầu, đề nghị, mong muốn ai làm gì.'),
    Q('Câu khiến thường kết thúc bằng dấu?', ['Hai chấm', 'Dấu hai chấm', 'Chấm hỏi', 'Chấm than hoặc chấm'], 3, 'Câu khiến thường có dấu "!" hoặc "." cuối câu.'),
    Q('Từ nào thường có trong câu khiến?', ['ai, gì', 'rất, lắm', 'đã, sẽ', 'hãy, đừng, chớ, nên'], 3, 'Các từ tình thái "hãy, đừng, chớ, nên" tạo câu khiến.'),
    Q('Câu nào là câu khiến?', ['Bạn có khoẻ không?', 'Em đang đọc sách.', 'Đẹp quá!', 'Hãy giữ trật tự!'], 3, 'Có từ "hãy" + dấu "!" → câu khiến.'),
    Q('Khi đặt câu khiến với người lớn, cần?', ['Lịch sự, dùng "xin", "vui lòng"', 'Quát lớn', 'Im lặng', 'Ra lệnh thẳng thừng'], 0, 'Phải lịch sự, tôn trọng người trên.'),
    Q('Câu "Mời bạn ngồi xuống." là câu?', ['Khiến (đề nghị lịch sự)', 'Khẳng định', 'Cảm thán', 'Hỏi (đề nghị kèm hỏi)'], 0, '"Mời" thể hiện đề nghị lịch sự → câu khiến.'),
  ]),

  M(22, 'Câu cảm (Câu cảm thán)', [
    Q('Câu cảm dùng để?', ['Bộc lộ cảm xúc', 'Đưa ra câu hỏi', 'Yêu cầu', 'Thuật lại sự việc'], 0, 'Câu cảm bộc lộ vui, buồn, ngạc nhiên, thán phục...'),
    Q('Câu cảm thường kết thúc bằng dấu?', ['Dấu chấm', 'Chấm hỏi', 'Hai chấm', 'Chấm than'], 3, 'Dấu "!" thường được dùng kết câu cảm.'),
    Q('Từ nào thường mở đầu câu cảm?', ['đã, sẽ', 'ai, gì', 'ôi, chao, ồ, trời ơi', 'và, nhưng'], 2, 'Các thán từ "ôi, chao, ồ, trời ơi" mở đầu câu cảm.'),
    Q('Câu nào là câu cảm?', ['Cảnh đẹp quá!', 'Em là học sinh.', 'Hãy ngồi xuống!', 'Em đang học.'], 0, 'Có "quá" + dấu "!" → câu cảm bộc lộ thán phục.'),
    Q('Câu "Ôi, bông hoa đẹp làm sao!" bộc lộ?', ['Sự buồn bã', 'Câu hỏi', 'Lời yêu cầu', 'Sự ngạc nhiên, thán phục'], 3, 'Bộc lộ sự thán phục, ngợi khen.'),
    Q('Từ ngữ nào KHÔNG dùng trong câu cảm?', ['làm sao, biết mấy', 'ôi, chao', 'hãy, đừng', 'biết bao, biết chừng nào'], 2, '"hãy, đừng" thuộc câu khiến.'),
  ]),

  M(23, 'MRVT: Sức khoẻ', [
    Q('"Sức khoẻ" có nghĩa là?', ['Sự giàu có', 'Sự thông minh', 'Sự đẹp đẽ', 'Tình trạng cơ thể khoẻ mạnh'], 3, 'Sức khoẻ = tình trạng cơ thể không bệnh tật.'),
    Q('Để giữ sức khoẻ tốt, ta nên?', ['Không vận động', 'Tập thể dục, ăn đủ chất', 'Ngủ ít', 'Ăn nhiều bánh kẹo'], 1, 'Vận động + dinh dưỡng hợp lý.'),
    Q('Câu thành ngữ "Có sức khoẻ là có tất cả" có ý nghĩa?', ['Phải có nhiều tiền', 'Không cần học', 'Sức khoẻ quý hơn vàng', 'Chỉ cần ngủ là đủ'], 2, 'Đề cao giá trị của sức khoẻ.'),
    Q('Từ nào cùng nghĩa với "khoẻ mạnh"?', ['cường tráng', 'bệnh tật', 'ốm yếu', 'mệt mỏi'], 0, '"cường tráng" = khoẻ mạnh, vạm vỡ.'),
    Q('Từ nào trái nghĩa với "khoẻ"?', ['thấp bé', 'yếu', 'mạnh mẽ', 'cao lớn'], 1, '"yếu" trái nghĩa "khoẻ".'),
    Q('Hoạt động nào tốt cho sức khoẻ?', ['Bơi lội, chạy bộ', 'Ăn vặt cả ngày', 'Ngồi yên không vận động', 'Thức khuya chơi game'], 0, 'Bơi lội, chạy bộ là môn thể thao tốt cho sức khoẻ.'),
  ]),

  M(24, 'Trạng ngữ — Khái niệm', [
    Q('Trạng ngữ là bộ phận?', ['Phụ, bổ sung ý nghĩa cho câu', 'Thay cho chủ ngữ', 'Chính của câu', 'Thay cho vị ngữ'], 0, 'Trạng ngữ là thành phần phụ.'),
    Q('Trạng ngữ trả lời câu hỏi?', ['Khi nào? Ở đâu? Vì sao? Để làm gì?', 'Cái gì?', 'Là gì?', 'Ai? Cái gì? Con gì?'], 0, 'Trạng ngữ bổ sung thông tin về thời gian, nơi chốn, nguyên nhân, mục đích...'),
    Q('Trong câu "Sáng nay, em đi học", trạng ngữ là?', ['học', 'đi học', 'Sáng nay', 'Em (chủ ngữ)'], 2, '"Sáng nay" chỉ thời gian.'),
    Q('Trong câu "Trên sân trường, các bạn vui chơi", trạng ngữ chỉ?', ['Nguyên nhân', 'Mục đích', 'Nơi chốn', 'Thời gian'], 2, '"Trên sân trường" chỉ nơi chốn.'),
    Q('Trạng ngữ thường được ngăn cách với phần còn lại bằng dấu?', ['Hai chấm', 'Chấm than', 'Dấu chấm', 'Phẩy'], 3, 'Trạng ngữ đầu câu thường có dấu phẩy theo sau.'),
    Q('Câu nào có trạng ngữ?', ['Bạn ấy chăm chỉ.', 'Em yêu mẹ.', 'Vào chủ nhật, em được nghỉ.', 'Em là học sinh.'], 2, '"Vào chủ nhật" là trạng ngữ chỉ thời gian.'),
  ]),

  M(25, 'Trạng ngữ chỉ thời gian, nơi chốn', [
    Q('"Buổi sáng" trong câu "Buổi sáng, em đi tập thể dục" là trạng ngữ chỉ?', ['Nơi chốn', 'Cách thức', 'Nguyên nhân', 'Thời gian'], 3, '"Buổi sáng" chỉ thời gian.'),
    Q('"Trong vườn" trong câu "Trong vườn, hoa nở rộ" là trạng ngữ chỉ?', ['Mục đích', 'Nơi chốn', 'Thời gian', 'Nguyên nhân'], 1, '"Trong vườn" chỉ nơi chốn.'),
    Q('Trạng ngữ chỉ thời gian thường bắt đầu bằng?', ['trên, dưới', 'lúc, khi, vào, sáng nay', 'vì, bởi vì', 'để, nhằm'], 1, 'Đó là các từ chỉ thời gian.'),
    Q('Trạng ngữ chỉ nơi chốn thường bắt đầu bằng?', ['vì, bởi', 'lúc, khi', 'để, nhằm', 'trên, dưới, trong, ngoài'], 3, 'Các giới từ chỉ vị trí.'),
    Q('Câu "Hôm qua, lớp em đi tham quan công viên" có trạng ngữ chỉ?', ['Nơi chốn', 'Thời gian', 'Mục đích', 'Nguyên nhân'], 1, '"Hôm qua" chỉ thời gian.'),
    Q('Câu "Ở trường, em được học nhiều điều bổ ích" có trạng ngữ chỉ?', ['Nơi chốn', 'Mục đích', 'Cách thức', 'Thời gian'], 0, '"Ở trường" chỉ nơi chốn.'),
  ]),

  M(26, 'Trạng ngữ chỉ nguyên nhân, mục đích', [
    Q('Trạng ngữ chỉ nguyên nhân thường bắt đầu bằng?', ['sáng nay, hôm qua', 'trên, dưới', 'vì, do, bởi vì, tại', 'để, nhằm'], 2, 'Các từ chỉ nguyên nhân.'),
    Q('Trạng ngữ chỉ mục đích thường bắt đầu bằng?', ['trên, dưới', 'vì, do', 'lúc, khi', 'để, nhằm, vì (mục đích)'], 3, '"để, nhằm" chỉ mục đích.'),
    Q('Trong câu "Vì trời mưa, em không đi chơi", trạng ngữ là?', ['không đi chơi', 'trời (chủ ngữ)', 'Vì trời mưa', 'em (chủ ngữ)'], 2, '"Vì trời mưa" chỉ nguyên nhân.'),
    Q('Trong câu "Để có sức khoẻ tốt, em tập thể dục đều đặn", trạng ngữ là?', ['tập thể dục', 'em (chủ ngữ)', 'Để có sức khoẻ tốt', 'đều đặn'], 2, '"Để có sức khoẻ tốt" chỉ mục đích.'),
    Q('Câu "Do chăm chỉ học tập, Lan đạt học sinh giỏi" có trạng ngữ chỉ?', ['Nguyên nhân', 'Thời gian', 'Mục đích', 'Nơi chốn'], 0, '"Do chăm chỉ học tập" chỉ nguyên nhân.'),
    Q('Câu "Em học chăm để cha mẹ vui lòng" có trạng ngữ chỉ?', ['Nơi chốn', 'Mục đích', 'Nguyên nhân', 'Thời gian'], 1, '"để cha mẹ vui lòng" chỉ mục đích.'),
  ]),

  M(27, 'MRVT: Du lịch — Thám hiểm', [
    Q('"Du lịch" có nghĩa là?', ['Đi học', 'Nghỉ ngơi tại nhà', 'Đi chơi, tham quan các nơi', 'Đi làm'], 2, 'Du lịch = đi tham quan nghỉ ngơi ở nơi khác.'),
    Q('"Thám hiểm" có nghĩa là?', ['Đi chơi gần nhà', 'Khám phá nơi xa lạ, ít người biết', 'Ngủ trưa', 'Đi mua sắm'], 1, 'Thám hiểm = khám phá vùng đất, biển, núi chưa ai đặt chân tới.'),
    Q('Từ nào liên quan đến du lịch?', ['nồi, niêu', 'cuốc, xẻng', 'máy ảnh, va li, hướng dẫn viên', 'sách, vở, bút'], 2, 'Đó là các vật dụng và người liên quan du lịch.'),
    Q('Người đi thám hiểm cần phẩm chất gì?', ['Dũng cảm, ham hiểu biết', 'Nhút nhát', 'Sợ hãi', 'Lười biếng'], 0, 'Phải dũng cảm và ham khám phá.'),
    Q('Địa điểm nào là điểm du lịch nổi tiếng của Việt Nam?', ['Cái Ghế', 'Vịnh Hạ Long', 'Cái Hộp', 'Cái Bàn'], 1, 'Vịnh Hạ Long là di sản thiên nhiên thế giới.'),
    Q('Câu nào nói về thám hiểm?', ['Em ăn cơm trưa', 'Em đi tham quan công viên', 'Em đi siêu thị', 'Đoàn thám hiểm đã đặt chân lên đỉnh Everest'], 3, 'Đoàn thám hiểm khám phá nơi hiểm trở.'),
  ]),

  M(28, 'Dấu ngoặc kép', [
    Q('Dấu ngoặc kép dùng để?', ['Nêu câu hỏi', 'Liệt kê', 'Đánh dấu lời nói trực tiếp hoặc từ ngữ đặc biệt', 'Kết thúc câu'], 2, 'Dùng để đánh dấu lời dẫn trực tiếp hoặc từ ngữ có ý nghĩa đặc biệt.'),
    Q('Dấu ngoặc kép thường đi cùng dấu nào?', ['Hai chấm', 'Dấu phẩy', 'Chấm than', 'Chấm phẩy'], 0, 'Khi dẫn lời nói: : "..."'),
    Q('Câu nào dùng dấu ngoặc kép đúng?', ['Cô bảo các em: hãy chú ý.', 'Cô bảo. "Các em hãy chú ý"', 'Cô bảo: "Các em hãy chú ý."', 'Cô bảo "các em hãy chú ý"'], 2, 'Sau dấu hai chấm, lời dẫn trong ngoặc kép, có hoa chữ cái đầu.'),
    Q('Trong câu "Bạn Lan được gọi là \\"cây toán\\" của lớp", dấu ngoặc kép dùng để?', ['Đánh dấu từ ngữ có ý nghĩa đặc biệt', 'Kết thúc câu', 'Dẫn lời nói', 'Liệt kê'], 0, 'Đánh dấu biệt danh, từ ngữ đặc biệt.'),
    Q('Dấu ngoặc kép có thể dùng để?', ['Đánh dấu từ ngữ đặc biệt', 'Cả ba phương án trên', 'Trích dẫn câu nói nguyên văn', 'Đánh dấu tên tác phẩm'], 1, 'Dấu ngoặc kép có nhiều công dụng.'),
    Q('Trong câu "Em rất thích bài thơ \\"Tre Việt Nam\\" của Nguyễn Duy", dấu ngoặc kép đánh dấu?', ['Tên tác phẩm', 'Câu hỏi', 'Tên người', 'Lời nói'], 0, '"Tre Việt Nam" là tên bài thơ.'),
  ]),

  M(29, 'Dấu gạch ngang', [
    Q('Dấu gạch ngang đặt đầu dòng dùng để?', ['Kết thúc câu', 'Nêu câu hỏi tu từ', 'Đánh dấu lời nói trực tiếp của nhân vật', 'Liệt kê ngang dòng'], 2, 'Đầu dòng: đánh dấu lời nói trực tiếp.'),
    Q('Dấu gạch ngang giữa câu dùng để?', ['Đánh dấu phần chú thích, giải thích', 'Cảm thán', 'Kết thúc câu', 'Đánh dấu câu hỏi'], 0, 'Giữa câu: dùng cho phần chú giải.'),
    Q('Câu nào dùng dấu gạch ngang đúng?', ['Mẹ gọi: Con — ơi, ăn cơm.', 'Mẹ — gọi con ơi ăn cơm.', 'Mẹ gọi: — Con ơi, ăn cơm thôi!', 'Mẹ gọi con ơi ăn — cơm.'], 2, 'Sau dấu hai chấm, gạch ngang mở lời nói nhân vật.'),
    Q('Dấu gạch ngang khác dấu gạch nối ở chỗ?', ['Không khác nhau', 'Cả hai giống nhau', 'Dấu gạch ngang dài hơn và đặt cách chữ', 'Dấu gạch nối dài hơn'], 2, 'Gạch ngang (—) dài hơn gạch nối (-) và có khoảng trắng.'),
    Q('Dấu gạch ngang trong câu "Hà Nội — thủ đô của Việt Nam — rất đẹp" dùng để?', ['Đặt câu hỏi tu từ', 'Liệt kê', 'Đánh dấu phần chú thích', 'Đánh dấu lời nói'], 2, 'Phần "thủ đô của Việt Nam" là chú thích cho "Hà Nội".'),
    Q('Khi viết hội thoại trong truyện, mỗi lời thoại nhân vật bắt đầu bằng?', ['Dấu phẩy', 'Dấu chấm', 'Dấu hỏi', 'Dấu gạch ngang đầu dòng'], 3, 'Quy ước viết hội thoại: gạch ngang đầu dòng.'),
  ]),

  M(30, 'Văn miêu tả đồ vật', [
    Q('Văn miêu tả đồ vật giúp người đọc?', ['Biết người sản xuất', 'Hiểu cách dùng', 'Biết giá tiền', 'Hình dung được đồ vật đó'], 3, 'Giúp người đọc hình dung được hình dáng, đặc điểm đồ vật.'),
    Q('Bố cục bài văn miêu tả đồ vật gồm mấy phần?', ['2', '4', '3', '5'], 2, 'Ba phần: Mở bài – Thân bài – Kết bài.'),
    Q('Phần mở bài bài văn miêu tả đồ vật thường?', ['Giới thiệu đồ vật được tả', 'Kết thúc bài', 'Nêu cảm nghĩ', 'Tả chi tiết'], 0, 'Mở bài giới thiệu đồ vật.'),
    Q('Khi tả đồ vật, ta nên?', ['Chỉ liệt kê', 'Tả qua loa', 'Quan sát kĩ và dùng từ ngữ gợi tả', 'Sao chép sách'], 2, 'Cần quan sát + dùng từ gợi tả sinh động.'),
    Q('Tả "cái cặp sách" thuộc văn?', ['Miêu tả đồ vật', 'Kể chuyện', 'Miêu tả con vật', 'Miêu tả cây cối'], 0, 'Cặp sách là đồ vật.'),
    Q('Khi tả đồ vật cần chú ý?', ['Chỉ giá tiền', 'Chỉ cảm xúc', 'Hình dáng, màu sắc, công dụng', 'Chỉ người làm ra'], 2, 'Đó là các đặc điểm cần tả của đồ vật.'),
  ]),

  M(31, 'Văn miêu tả cây cối', [
    Q('Khi tả cây cối, ta thường tả theo trình tự?', ['Chỉ tả thân', 'Tả lung tung', 'Từ ngọn xuống gốc hoặc từ gốc lên ngọn', 'Chỉ tả lá'], 2, 'Tả theo thứ tự không gian (từ gốc đến ngọn) hoặc theo từng bộ phận.'),
    Q('Bộ phận nào của cây thường được tả?', ['Chỉ hoa', 'Rễ, thân, cành, lá, hoa, quả', 'Chỉ thân', 'Chỉ lá'], 1, 'Tả nhiều bộ phận để bài văn sinh động.'),
    Q('Ngoài hình dáng, khi tả cây cối còn nên tả?', ['Người trồng', 'Giá tiền', 'Mùi hương, âm thanh khi gió thổi', 'Cách chăm sóc tỉ mỉ'], 2, 'Mở rộng ra các giác quan khác sẽ sinh động hơn.'),
    Q('Tả "cây phượng vĩ" thuộc văn?', ['Kể chuyện', 'Miêu tả cây cối', 'Miêu tả đồ vật', 'Miêu tả con vật'], 1, 'Cây phượng vĩ là cây cối.'),
    Q('Khi tả cây phượng vào mùa hè, em tập trung tả?', ['Hoa đỏ rực', 'Lá vàng', 'Cành khô', 'Rễ ăn sâu trong đất'], 0, 'Phượng vĩ mùa hè nở hoa đỏ rực.'),
    Q('Câu nào dùng biện pháp nhân hoá để tả cây?', ['Cây bàng đứng trầm tư, hứng nắng cho đàn em chơi đùa.', 'Cây bàng có nhiều cành.', 'Cây bàng cao 5 m.', 'Cây bàng có lá to.'], 0, 'Cây "đứng trầm tư", "hứng nắng" → nhân hoá.'),
  ]),

  M(32, 'Văn miêu tả con vật', [
    Q('Khi tả con vật, ta thường tả?', ['Chỉ giá', 'Chỉ nơi mua', 'Hình dáng và hoạt động', 'Chỉ tên'], 2, 'Tả ngoại hình + hoạt động/thói quen của con vật.'),
    Q('Bố cục bài văn miêu tả con vật gồm?', ['Mở bài – Thân bài – Kết bài', 'Chỉ mở bài', 'Hai phần', 'Chỉ kết bài'], 0, 'Vẫn theo cấu trúc 3 phần.'),
    Q('Thân bài tả con vật cần tập trung tả?', ['Hình dáng các bộ phận và hoạt động', 'Chỉ một bộ phận', 'Chỉ tuổi', 'Chỉ tên'], 0, 'Tả lông, đầu, mắt, đuôi... + thói quen ăn, ngủ, chơi.'),
    Q('Để bài tả con vật sinh động, nên dùng?', ['Chỉ ghi tên', 'Viết ngắn nhất có thể', 'Chỉ liệt kê đặc điểm', 'Biện pháp so sánh, nhân hoá'], 3, 'So sánh và nhân hoá làm bài văn sinh động.'),
    Q('Câu nào dùng biện pháp so sánh để tả con vật?', ['Bộ lông mèo trắng như tuyết.', 'Con mèo có bộ lông trắng.', 'Mèo nặng 3 kg.', 'Mèo có 4 chân.'], 0, '"trắng như tuyết" — so sánh.'),
    Q('Khi tả "chú gà trống nhà em", em mở bài bằng cách?', ['Kết bài', 'Nêu cảm xúc', 'Tả chi tiết ngay', 'Giới thiệu chú gà'], 3, 'Mở bài giới thiệu đối tượng được tả.'),
  ]),

  M(33, 'Viết thư', [
    Q('Bố cục một bức thư thông thường gồm mấy phần?', ['5', '3', '2', '4'], 1, 'Ba phần: Đầu thư – Nội dung – Cuối thư.'),
    Q('Phần đầu thư cần ghi?', ['Chỉ chữ kí', 'Chỉ địa chỉ', 'Chỉ nội dung', 'Địa điểm, ngày tháng, lời chào'], 3, 'Bao gồm địa điểm + ngày + lời chào người nhận.'),
    Q('Phần cuối thư thường có?', ['Lời chúc, lời chào tạm biệt, chữ kí', 'Chỉ lời chào đầu', 'Chỉ địa chỉ', 'Chỉ nội dung'], 0, 'Lời chúc + lời chào + kí tên.'),
    Q('Khi viết thư cho bạn, lời xưng hô phù hợp là?', ['"Đức ngài"', '"Bạn ... thân mến"', '"Ngài"', '"Kính gửi"'], 1, 'Xưng hô thân mật khi viết cho bạn.'),
    Q('Khi viết thư cho thầy cô, lời xưng hô phù hợp là?', ['"Ê này"', '"Mày ơi"', '"Bạn ơi"', '"Thầy/Cô kính mến"'], 3, 'Cần lịch sự, tôn kính.'),
    Q('Phần nội dung bức thư nên?', ['Chỉ viết 1 câu', 'Viết dài dòng, lung tung', 'Chỉ viết tên', 'Viết rõ ý, chân thành'], 3, 'Cần rõ ý, chân thành, đầy đủ thông tin.'),
  ]),

  M(34, 'MRVT: Lạc quan — Yêu đời', [
    Q('"Lạc quan" có nghĩa là?', ['Có cái nhìn tin tưởng, vui vẻ về cuộc sống', 'Sợ hãi', 'Lo lắng', 'Buồn rầu, chán nản'], 0, 'Lạc quan = tinh thần tích cực, tin tưởng vào điều tốt đẹp.'),
    Q('Từ nào trái nghĩa với "lạc quan"?', ['bi quan', 'tươi cười', 'phấn khởi', 'vui vẻ'], 0, '"bi quan" trái nghĩa "lạc quan".'),
    Q('"Yêu đời" có nghĩa là?', ['Chán cuộc sống', 'Buồn bã', 'Có tình cảm tích cực với cuộc sống', 'Tức giận'], 2, 'Yêu đời = trân trọng và vui sống.'),
    Q('Câu thành ngữ nào thể hiện tinh thần lạc quan?', ['Có công mài sắt có ngày nên kim', 'Sông có khúc, người có lúc', 'Ăn không ngồi rồi', 'Đứng núi này trông núi nọ'], 1, 'Ý: cuộc sống có lúc thăng lúc trầm, hãy tin vào tương lai.'),
    Q('Bạn nào lạc quan?', ['Nản chí mãi mãi', 'Cố gắng học tốt hơn vào lần sau', 'Khóc lóc khi bị điểm kém', 'Bỏ học'], 1, 'Tin tưởng vào tương lai, cố gắng cải thiện.'),
    Q('Từ cùng nghĩa với "yêu đời"?', ['thất vọng', 'buồn bã', 'phấn khởi', 'chán nản'], 2, '"phấn khởi" gần nghĩa "yêu đời".'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Từ "rì rào" thuộc loại?', ['Danh từ riêng', 'Từ ghép', 'Từ đơn', 'Từ láy'], 3, 'Lặp âm đầu "r" → từ láy.'),
    Q('"Hồ Chí Minh" là?', ['Danh từ chung', 'Động từ', 'Danh từ riêng', 'Tính từ'], 2, 'Tên người cụ thể.'),
    Q('Câu "Em là học sinh lớp 4" thuộc kiểu?', ['Ai là gì?', 'Câu hỏi', 'Ai làm gì?', 'Ai thế nào?'], 0, 'Có "là" → "Ai là gì?".'),
    Q('Câu "Hãy giữ gìn vệ sinh chung!" là?', ['Câu cảm', 'Câu khiến', 'Câu hỏi', 'Câu kể'], 1, 'Có "hãy" + dấu "!" → câu khiến.'),
    Q('Trong câu "Hôm qua, em đi chơi với mẹ", trạng ngữ là?', ['em (chủ ngữ)', 'đi chơi', 'Hôm qua', 'với mẹ'], 2, '"Hôm qua" chỉ thời gian.'),
    Q('Dấu ngoặc kép thường dùng để?', ['Kết thúc câu', 'Liệt kê', 'Nêu câu hỏi tu từ', 'Đánh dấu lời nói hoặc từ ngữ đặc biệt'], 3, 'Dấu ngoặc kép có nhiều công dụng.'),
    Q('Văn miêu tả "cây xoài nhà em" tả về?', ['Cây cối', 'Người thân trong gia đình', 'Đồ vật', 'Con vật'], 0, 'Cây xoài → văn tả cây cối.'),
    Q('Từ nào trái nghĩa với "lạc quan"?', ['yêu đời', 'vui vẻ', 'bi quan', 'phấn khởi'], 2, '"bi quan" trái nghĩa "lạc quan".'),
    Q('Khi viết thư cho ông bà, lời xưng hô phù hợp là?', ['"Ông/Bà kính yêu"', '"Ngươi"', '"Ê, ông bà ơi"', '"Bạn ơi"'], 0, 'Lịch sự, tôn kính với ông bà.'),
    Q('Câu "Ôi, cảnh đẹp tuyệt vời!" là?', ['Câu hỏi', 'Câu cảm', 'Câu khiến', 'Câu kể'], 1, 'Có "Ôi" + dấu "!" → câu cảm.'),
  ], { difficulty: 3, description: 'Bài kiểm tra cuối năm — tổng hợp từ loại, kiểu câu, dấu câu, MRVT, tập làm văn.' }),
];

export const P4TV_SCENARIOS = indexBy(P4TV_WEEKS);
