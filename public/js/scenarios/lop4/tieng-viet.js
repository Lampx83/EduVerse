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
    Q('Tiếng "trường" có cấu tạo gồm những bộ phận nào?', ['Chỉ âm đầu', 'Âm đầu, vần, thanh', 'Chỉ vần và thanh', 'Chỉ vần'], 1, 'Mỗi tiếng đầy đủ gồm: âm đầu + vần + thanh.'),
    Q('Tiếng "anh" có bộ phận nào KHÔNG có?', ['Vần', 'Thanh', 'Âm đầu', 'Cả ba đều có'], 2, 'Tiếng "anh" không có âm đầu, chỉ có vần "anh" và thanh ngang.'),
    Q('Vần của tiếng "học" là?', ['h', 'oc', 'ọ', 'họ'], 1, 'Âm đầu "h", vần "oc", thanh nặng.'),
    Q('Bài tập đọc đầu tiên thường giúp em rèn kĩ năng nào?', ['Tính toán', 'Đọc to, đọc đúng, hiểu nội dung', 'Vẽ tranh', 'Hát'], 1, 'Tập đọc rèn kĩ năng đọc và hiểu văn bản.'),
    Q('Khi đọc một câu chuyện, em cần chú ý điều gì?', ['Chỉ đọc to', 'Nhân vật, tình tiết, ý nghĩa', 'Đọc thật nhanh', 'Chỉ cần thuộc lòng'], 1, 'Cần nắm nhân vật, sự việc, thông điệp.'),
    Q('Tiếng nào sau đây có 6 chữ cái?', ['hoa', 'trường', 'cánh', 'sách'], 1, '"trường" gồm 6 chữ cái: t-r-ư-ơ-n-g.'),
  ]),

  M(2, 'Từ đơn — Từ phức', [
    Q('Từ đơn là từ?', ['Có 1 tiếng', 'Có 2 tiếng trở lên', 'Có nghĩa rộng', 'Chỉ tên người'], 0, 'Từ đơn = một tiếng có nghĩa.'),
    Q('Từ phức là từ?', ['Có 1 tiếng', 'Có từ 2 tiếng trở lên', 'Chỉ gọi sự vật', 'Chỉ chỉ hành động'], 1, 'Từ phức = từ có 2 tiếng trở lên.'),
    Q('Từ nào sau đây là từ đơn?', ['học sinh', 'nhà', 'trường học', 'cha mẹ'], 1, '"nhà" có 1 tiếng → từ đơn.'),
    Q('Từ nào sau đây là từ phức?', ['lá', 'cây', 'cây cối', 'hoa'], 2, '"cây cối" có 2 tiếng → từ phức.'),
    Q('Câu "Học sinh chăm ngoan" có mấy từ?', ['2', '3', '4', '5'], 1, '"Học sinh / chăm / ngoan" → 3 từ.'),
    Q('Trong các từ: bàn, ghế, bàn ghế, sách vở — có mấy từ phức?', ['1', '2', '3', '4'], 1, '"bàn ghế" và "sách vở" là từ phức → 2 từ.'),
  ]),

  M(3, 'Từ ghép — Từ láy', [
    Q('Từ ghép là từ phức được tạo bởi?', ['Các tiếng có nghĩa ghép lại', 'Các tiếng giống nhau về âm', 'Một tiếng duy nhất', 'Các âm tiết vô nghĩa'], 0, 'Từ ghép: các tiếng đều có nghĩa, ghép theo quan hệ nghĩa.'),
    Q('Từ láy là từ phức được tạo bởi?', ['Các tiếng có nghĩa', 'Sự lặp lại âm hoặc vần', 'Một tiếng duy nhất', 'Các từ trái nghĩa'], 1, 'Từ láy: các tiếng có quan hệ về âm (lặp âm đầu, vần, hoặc cả tiếng).'),
    Q('Từ nào sau đây là từ láy?', ['nhà cửa', 'long lanh', 'sách vở', 'học sinh'], 1, '"long lanh" lặp âm đầu "l" → từ láy.'),
    Q('Từ nào sau đây là từ ghép?', ['xinh xắn', 'sạch sẽ', 'bàn ghế', 'líu lo'], 2, '"bàn ghế" — cả "bàn" và "ghế" đều có nghĩa → từ ghép.'),
    Q('"Lung linh" thuộc loại từ láy nào?', ['Láy âm đầu', 'Láy vần', 'Láy cả tiếng', 'Không phải láy'], 0, 'Lặp âm đầu "l".'),
    Q('"Ào ào" là loại từ láy nào?', ['Láy âm đầu', 'Láy vần', 'Láy cả tiếng', 'Từ ghép'], 2, 'Lặp lại nguyên tiếng "ào".'),
  ]),

  M(4, 'Danh từ — Khái niệm và phân loại', [
    Q('Danh từ là từ chỉ?', ['Sự vật, hiện tượng, khái niệm', 'Hành động', 'Tính chất', 'Số lượng'], 0, 'Danh từ chỉ người, vật, hiện tượng, khái niệm.'),
    Q('Từ nào sau đây là danh từ?', ['chạy', 'đẹp', 'học sinh', 'rất'], 2, '"học sinh" chỉ người → danh từ.'),
    Q('Trong các từ: bàn, viết, xanh, mưa — có mấy danh từ?', ['1', '2', '3', '4'], 1, '"bàn" (vật) và "mưa" (hiện tượng) là danh từ → 2 từ.'),
    Q('Danh từ chỉ hiện tượng thiên nhiên là?', ['cây', 'mưa', 'cô giáo', 'sách'], 1, '"mưa" là hiện tượng thiên nhiên.'),
    Q('Danh từ chỉ khái niệm là?', ['cây bút', 'tình bạn', 'quyển sách', 'cái bàn'], 1, '"tình bạn" — không nhìn thấy được, là khái niệm.'),
    Q('Câu "Em yêu trường lớp" có mấy danh từ?', ['1', '2', '3', '4'], 2, '"em", "trường", "lớp" — 3 danh từ.'),
  ]),

  M(5, 'Danh từ chung — Danh từ riêng', [
    Q('Danh từ riêng dùng để gọi tên?', ['Loại sự vật chung', 'Một người, một vật, một địa danh cụ thể', 'Hành động', 'Tính chất'], 1, 'Danh từ riêng chỉ tên cụ thể (tên người, địa danh...).'),
    Q('Quy tắc viết danh từ riêng?', ['Viết thường', 'Viết hoa chữ cái đầu', 'In nghiêng', 'Đặt trong ngoặc'], 1, 'Danh từ riêng luôn viết hoa chữ cái đầu mỗi tiếng.'),
    Q('Từ nào là danh từ riêng?', ['học sinh', 'thành phố', 'Hà Nội', 'sông'], 2, '"Hà Nội" là tên địa danh cụ thể.'),
    Q('Trong câu "Em đi học ở trường Tiểu học Kim Đồng", danh từ riêng là?', ['trường', 'em', 'Kim Đồng', 'tiểu học'], 2, '"Kim Đồng" là tên trường/người.'),
    Q('Khi viết tên người Việt Nam, ta?', ['Viết hoa tất cả chữ cái', 'Viết hoa chữ cái đầu mỗi tiếng', 'Viết thường', 'Viết in đậm'], 1, 'VD: Nguyễn Văn An — viết hoa N, V, A.'),
    Q('Trong các từ: Trần Hưng Đạo, sông, Sài Gòn, học sinh — có mấy danh từ riêng?', ['1', '2', '3', '4'], 1, '"Trần Hưng Đạo" và "Sài Gòn" → 2 danh từ riêng.'),
  ]),

  M(6, 'MRVT: Trung thực — Tự trọng', [
    Q('Từ nào sau đây cùng nghĩa với "trung thực"?', ['gian dối', 'thật thà', 'kiêu căng', 'lười biếng'], 1, '"thật thà" = trung thực.'),
    Q('Từ nào trái nghĩa với "trung thực"?', ['ngay thẳng', 'dối trá', 'thẳng thắn', 'chân thật'], 1, '"dối trá" trái nghĩa "trung thực".'),
    Q('"Tự trọng" có nghĩa là?', ['Coi thường mình', 'Tôn trọng và giữ phẩm giá của bản thân', 'Khoe khoang', 'Không quan tâm gì'], 1, 'Tự trọng = biết giữ giá trị, danh dự của mình.'),
    Q('Câu thành ngữ nào nói về tính trung thực?', ['Cây ngay không sợ chết đứng', 'Há miệng chờ sung', 'Đứng núi này trông núi nọ', 'Mua may bán đắt'], 0, 'Ý: người ngay thẳng không sợ bị vu oan.'),
    Q('Bạn nào sau đây thể hiện lòng tự trọng?', ['Nói dối để được khen', 'Nhận lỗi khi mình sai', 'Lấy đồ của bạn', 'Chép bài bạn'], 1, 'Dám nhận lỗi → có lòng tự trọng.'),
    Q('Từ nào KHÔNG cùng nhóm với "thẳng thắn, trung thực, thật thà"?', ['ngay thẳng', 'chính trực', 'dối trá', 'chân thành'], 2, '"dối trá" trái nghĩa nhóm trung thực.'),
  ]),

  M(7, 'Động từ', [
    Q('Động từ là từ chỉ?', ['Sự vật', 'Hoạt động, trạng thái', 'Đặc điểm', 'Số lượng'], 1, 'Động từ chỉ hành động hoặc trạng thái.'),
    Q('Từ nào là động từ?', ['đẹp', 'chạy', 'cái bàn', 'rất'], 1, '"chạy" là hành động.'),
    Q('Trong câu "Em đọc sách", động từ là?', ['em', 'đọc', 'sách', 'không có'], 1, '"đọc" chỉ hành động.'),
    Q('Động từ chỉ trạng thái là?', ['nhảy', 'yêu', 'viết', 'múa'], 1, '"yêu" chỉ trạng thái cảm xúc.'),
    Q('Trong các từ: học, sách, vui, ngủ — có mấy động từ?', ['1', '2', '3', '4'], 1, '"học" và "ngủ" là động từ → 2.'),
    Q('Câu nào có 2 động từ?', ['Em ăn cơm', 'Em đi học và làm bài', 'Trời mưa', 'Lá xanh'], 1, '"đi" và "làm" là 2 động từ.'),
  ]),

  M(8, 'MRVT: Ước mơ', [
    Q('Từ nào cùng nghĩa với "ước mơ"?', ['lo lắng', 'mong muốn', 'sợ hãi', 'tức giận'], 1, '"mong muốn" gần nghĩa "ước mơ".'),
    Q('"Ước mơ" thường liên quan đến?', ['Quá khứ', 'Hiện tại', 'Tương lai', 'Không có thời gian'], 2, 'Ước mơ là điều ta mong muốn đạt được trong tương lai.'),
    Q('Câu thành ngữ "Cầu được ước thấy" có nghĩa?', ['Ước gì được nấy', 'Không bao giờ đạt được', 'Phải chờ rất lâu', 'Chỉ là mơ ước'], 0, 'Ý: điều mong muốn trở thành hiện thực.'),
    Q('Từ nào sau đây KHÔNG cùng nghĩa "ước mơ"?', ['ước nguyện', 'mơ ước', 'mong ước', 'than thở'], 3, '"than thở" không cùng nghĩa.'),
    Q('Để biến ước mơ thành hiện thực, em cần?', ['Chỉ ngủ và mơ', 'Cố gắng học tập, rèn luyện', 'Đợi may mắn đến', 'Không cần làm gì'], 1, 'Phải nỗ lực, có kế hoạch và hành động cụ thể.'),
    Q('Ước mơ chính đáng là ước mơ?', ['Có ích, đẹp đẽ', 'Phá hoại', 'Làm hại người khác', 'Vô nghĩa'], 0, 'Ước mơ chính đáng đem lại điều tốt cho mình và xã hội.'),
  ]),

  M(9, 'Tính từ', [
    Q('Tính từ là từ chỉ?', ['Hành động', 'Sự vật', 'Đặc điểm, tính chất', 'Số lượng'], 2, 'Tính từ chỉ đặc điểm, tính chất, trạng thái của sự vật.'),
    Q('Từ nào là tính từ?', ['xanh', 'chạy', 'cây', 'rất'], 0, '"xanh" chỉ màu sắc → tính từ.'),
    Q('Trong câu "Bầu trời cao và rộng", có mấy tính từ?', ['1', '2', '3', '0'], 1, '"cao" và "rộng" là 2 tính từ.'),
    Q('Từ nào chỉ tính chất của con người?', ['hiền', 'chạy', 'sách', 'cây'], 0, '"hiền" chỉ tính cách → tính từ.'),
    Q('Trong các từ: đỏ, ngủ, to, mèo — có mấy tính từ?', ['1', '2', '3', '4'], 1, '"đỏ" (màu) và "to" (kích thước) là tính từ → 2.'),
    Q('Tính từ chỉ kích thước là?', ['vàng', 'lớn', 'nhanh', 'chậm'], 1, '"lớn" chỉ kích thước.'),
  ]),

  M(10, 'Ôn tập giữa Học kỳ 1', [
    Q('Từ "lung linh" là loại từ gì?', ['Từ đơn', 'Từ ghép', 'Từ láy', 'Tính từ'], 2, 'Lặp âm đầu "l" → từ láy.'),
    Q('Trong câu "Bạn An rất chăm chỉ", danh từ riêng là?', ['bạn', 'An', 'chăm chỉ', 'rất'], 1, '"An" là tên người.'),
    Q('Câu "Em hái hoa" có động từ là?', ['em', 'hái', 'hoa', 'không có'], 1, '"hái" là động từ.'),
    Q('Từ nào KHÔNG phải tính từ?', ['cao', 'thấp', 'chạy', 'gầy'], 2, '"chạy" là động từ.'),
    Q('Tiếng "yêu" có cấu tạo?', ['Chỉ âm đầu', 'Vần và thanh, không có âm đầu', 'Đủ 3 bộ phận', 'Chỉ thanh'], 1, '"yêu" có vần "yêu" và thanh ngang, không có âm đầu.'),
    Q('Câu nào có từ trái nghĩa với "trung thực"?', ['Bạn ấy rất thật thà', 'Anh ấy rất dối trá', 'Cô ấy chính trực', 'Em rất ngay thẳng'], 1, '"dối trá" trái nghĩa "trung thực".'),
  ], { difficulty: 2 }),

  M(11, 'Câu hỏi và dấu chấm hỏi', [
    Q('Câu hỏi dùng để?', ['Yêu cầu, sai bảo', 'Hỏi điều chưa biết', 'Bộc lộ cảm xúc', 'Kể về sự việc'], 1, 'Câu hỏi để hỏi điều mình chưa biết hoặc còn nghi vấn.'),
    Q('Câu hỏi thường kết thúc bằng dấu?', ['Chấm', 'Chấm hỏi', 'Chấm than', 'Phẩy'], 1, 'Câu hỏi → dấu chấm hỏi (?).'),
    Q('Từ nào thường xuất hiện trong câu hỏi?', ['ai, gì, nào, bao nhiêu', 'và, nhưng', 'rất, lắm', 'vì, nên'], 0, 'Đó là các từ để hỏi.'),
    Q('Câu nào là câu hỏi?', ['Em đang đọc sách.', 'Em đang làm gì?', 'Đẹp quá!', 'Hãy ngồi xuống.'], 1, 'Câu có từ "gì" và kết thúc bằng "?" → câu hỏi.'),
    Q('Câu "Bạn có thích đọc truyện không?" dùng để?', ['Hỏi', 'Khẳng định', 'Yêu cầu', 'Bộc lộ cảm xúc'], 0, 'Có từ "không" cuối câu → hỏi.'),
    Q('Câu nào KHÔNG phải câu hỏi?', ['Bao giờ cậu đi?', 'Ai làm việc này?', 'Trời hôm nay đẹp.', 'Tại sao em khóc?'], 2, 'Câu C là câu kể, không có từ để hỏi.'),
  ]),

  M(12, 'Dùng câu hỏi với mục đích khác', [
    Q('Câu hỏi "Sao cậu không cẩn thận chút?" có thể dùng để?', ['Khen ngợi', 'Chê trách nhẹ nhàng', 'Yêu cầu khẩn cấp', 'Kể chuyện'], 1, 'Câu hỏi dùng để trách móc, chê trách.'),
    Q('"Cậu giỏi quá nhỉ?" là câu hỏi dùng để?', ['Hỏi thật', 'Khen ngợi', 'Chê bai', 'Sai khiến'], 1, 'Câu hỏi dùng để bày tỏ lời khen.'),
    Q('"Chẳng lẽ mình lại bỏ cuộc?" là câu hỏi dùng để?', ['Hỏi ai khác', 'Tự khẳng định, động viên bản thân', 'Yêu cầu trợ giúp', 'Chê bai'], 1, 'Hỏi nhưng thực ra để khẳng định quyết tâm.'),
    Q('Khi đặt câu hỏi, ta cần thể hiện thái độ?', ['Khinh khỉnh', 'Lịch sự, tôn trọng', 'Quát mắng', 'Chế giễu'], 1, 'Phải lịch sự khi giao tiếp.'),
    Q('Câu hỏi nào sau đây thể hiện thái độ lịch sự?', ['Mày đi đâu đấy?', 'Bạn có thể giúp mình được không?', 'Sao mà ngu thế?', 'Đi mau lên!'], 1, 'Lựa chọn B nhẹ nhàng, lịch sự.'),
    Q('Câu hỏi dùng để khẳng định thường chứa từ?', ['chẳng lẽ, lẽ nào', 'rất, lắm', 'và, nhưng', 'sẽ, đã'], 0, 'Hai cụm "chẳng lẽ", "lẽ nào" mang ý khẳng định ngược.'),
  ]),

  M(13, 'MRVT: Ý chí — Nghị lực', [
    Q('"Nghị lực" có nghĩa gần với?', ['Sự lười biếng', 'Sức mạnh tinh thần để vượt khó', 'Sự sợ hãi', 'Sự mệt mỏi'], 1, 'Nghị lực = ý chí, sức mạnh tinh thần.'),
    Q('Câu tục ngữ "Có chí thì nên" nói lên điều gì?', ['Có ý chí sẽ thành công', 'Phải có nhiều tiền', 'Phải nhờ người khác', 'Cần may mắn'], 0, 'Có ý chí, quyết tâm → đạt được mục tiêu.'),
    Q('Từ nào cùng nghĩa với "kiên trì"?', ['nhụt chí', 'bền bỉ', 'lười nhác', 'chán nản'], 1, '"bền bỉ" gần nghĩa "kiên trì".'),
    Q('"Vượt khó" có nghĩa là?', ['Trốn tránh khó khăn', 'Đối mặt và vượt qua khó khăn', 'Bỏ cuộc giữa chừng', 'Chờ người giúp'], 1, 'Dám đối mặt và tìm cách vượt qua.'),
    Q('Câu thành ngữ nào nói về nghị lực?', ['Có công mài sắt có ngày nên kim', 'Há miệng chờ sung', 'Ăn vóc học hay', 'Đứng núi này trông núi nọ'], 0, 'Ý: kiên trì sẽ đạt kết quả.'),
    Q('Bạn nào thể hiện ý chí vươn lên?', ['Bỏ học vì khó', 'Cố gắng học dù gia đình khó khăn', 'Sao chép bài bạn', 'Đổ lỗi cho hoàn cảnh'], 1, 'Vượt khó học tập → ý chí vươn lên.'),
  ]),

  M(14, 'Câu kể "Ai làm gì?"', [
    Q('Câu kể "Ai làm gì?" gồm mấy bộ phận chính?', ['1', '2', '3', '4'], 1, 'Hai bộ phận chính: chủ ngữ (Ai) + vị ngữ (làm gì).'),
    Q('Trong câu "Em đang học bài", bộ phận "Em" là?', ['Vị ngữ', 'Chủ ngữ', 'Trạng ngữ', 'Bổ ngữ'], 1, '"Em" trả lời câu hỏi "Ai?" → chủ ngữ.'),
    Q('Trong câu "Mẹ nấu cơm", vị ngữ là?', ['Mẹ', 'nấu cơm', 'cơm', 'mẹ nấu'], 1, '"nấu cơm" trả lời "làm gì" → vị ngữ.'),
    Q('Câu nào là câu kể "Ai làm gì?"?', ['Bầu trời rất xanh.', 'Em chạy ra sân.', 'Bạn ấy là học sinh.', 'Trời mưa to quá!'], 1, 'Câu có chủ ngữ "Em" + động từ "chạy" → "Ai làm gì?".'),
    Q('Chủ ngữ trong câu kể "Ai làm gì?" thường là?', ['Tính từ', 'Danh từ hoặc cụm danh từ', 'Trạng từ', 'Liên từ'], 1, 'Chủ ngữ thường là danh từ chỉ người, vật.'),
    Q('Vị ngữ trong câu kể "Ai làm gì?" thường bắt đầu bằng?', ['Tính từ', 'Danh từ', 'Động từ', 'Số từ'], 2, 'Vì là "làm gì" → động từ.'),
  ]),

  M(15, 'Câu kể "Ai thế nào?"', [
    Q('Câu kể "Ai thế nào?" miêu tả?', ['Hành động', 'Đặc điểm, tính chất, trạng thái', 'Sự vật là gì', 'Số lượng'], 1, 'Câu kể "Ai thế nào?" miêu tả đặc điểm, tính chất.'),
    Q('Trong câu "Bầu trời rất xanh", vị ngữ là?', ['Bầu trời', 'rất xanh', 'xanh', 'rất'], 1, '"rất xanh" miêu tả đặc điểm → vị ngữ.'),
    Q('Vị ngữ trong câu "Ai thế nào?" thường là?', ['Động từ', 'Tính từ hoặc cụm tính từ', 'Danh từ', 'Số từ'], 1, 'Vì miêu tả đặc điểm → tính từ.'),
    Q('Câu nào là câu kể "Ai thế nào?"?', ['Em chạy nhanh.', 'Bạn ấy thông minh.', 'Em là học sinh.', 'Trời đẹp quá!'], 1, '"thông minh" là tính từ → câu "Ai thế nào?".'),
    Q('Câu "Hoa hồng rất thơm" thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'], 1, '"rất thơm" miêu tả đặc điểm.'),
    Q('Chủ ngữ trong câu kể "Ai thế nào?" là?', ['Tính từ', 'Danh từ hoặc cụm danh từ', 'Động từ', 'Trạng từ'], 1, 'Chủ ngữ luôn là danh từ.'),
  ]),

  M(16, 'Câu kể "Ai là gì?"', [
    Q('Câu kể "Ai là gì?" dùng để?', ['Miêu tả hành động', 'Giới thiệu, định nghĩa', 'Hỏi', 'Sai khiến'], 1, 'Để giới thiệu, định nghĩa, đánh giá sự vật.'),
    Q('Vị ngữ trong câu "Ai là gì?" thường bắt đầu bằng?', ['rất', 'là', 'đã', 'và'], 1, 'Có từ "là" hoặc "trở thành" nối chủ ngữ và vị ngữ.'),
    Q('Câu nào là câu kể "Ai là gì?"?', ['Em đang viết bài.', 'Em rất chăm chỉ.', 'Em là học sinh lớp 4.', 'Em hãy ngồi xuống!'], 2, 'Có cấu trúc "Em là học sinh..." → "Ai là gì?".'),
    Q('Trong câu "Hà Nội là thủ đô của nước ta", chủ ngữ là?', ['Hà Nội', 'là thủ đô', 'của nước ta', 'thủ đô'], 0, '"Hà Nội" trả lời "Ai/cái gì" → chủ ngữ.'),
    Q('Trong câu "Mẹ là người tôi yêu quý nhất", vị ngữ là?', ['Mẹ', 'là người tôi yêu quý nhất', 'người', 'yêu quý'], 1, 'Phần sau "Mẹ" là vị ngữ — bắt đầu bằng "là".'),
    Q('Câu "Toán là môn học em yêu thích" thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'], 2, 'Có cấu trúc "X là Y" → "Ai là gì?".'),
  ]),

  M(17, 'Dấu hai chấm', [
    Q('Dấu hai chấm dùng để báo hiệu?', ['Kết thúc câu', 'Phần liệt kê hoặc lời nói tiếp theo', 'Hỏi', 'Bộc lộ cảm xúc'], 1, 'Báo trước phần giải thích, liệt kê, hoặc lời nói.'),
    Q('Dấu hai chấm thường kết hợp với?', ['Dấu ngoặc kép hoặc dấu gạch ngang', 'Dấu chấm than', 'Dấu phẩy', 'Dấu chấm hỏi'], 0, 'Khi dẫn lời nói: : "..." hoặc : —'),
    Q('Câu nào dùng dấu hai chấm đúng?', ['Em rất thích các môn: Toán, Tiếng Việt, Khoa học.', 'Em rất thích, các môn Toán: Tiếng Việt.', 'Em: rất thích các môn.', 'Em rất thích các môn Toán Tiếng Việt: Khoa học.'], 0, 'Sau dấu hai chấm là phần liệt kê.'),
    Q('Trong câu "Cô giáo nói: \\"Các em hãy làm bài cẩn thận.\\"", dấu hai chấm báo hiệu?', ['Phần giải thích', 'Phần liệt kê', 'Lời nói trực tiếp', 'Câu hỏi'], 2, 'Dấu hai chấm + ngoặc kép → dẫn lời nói trực tiếp.'),
    Q('Dấu hai chấm có thể được dùng để?', ['Nối hai câu', 'Liệt kê các sự vật', 'Thay dấu phẩy', 'Thay dấu chấm'], 1, 'Báo trước phần liệt kê.'),
    Q('Câu "Vườn nhà em có nhiều cây ăn quả: cam, bưởi, ổi" có dấu hai chấm dùng để?', ['Liệt kê', 'Dẫn lời', 'Hỏi', 'Cảm thán'], 0, 'Sau ":" là danh sách các loại cây.'),
  ]),

  M(18, 'Kiểm tra Học kỳ 1', [
    Q('Từ "long lanh" là?', ['Từ đơn', 'Từ ghép', 'Từ láy', 'Tính từ riêng'], 2, 'Lặp âm đầu "l" → từ láy.'),
    Q('Câu "Em yêu trường lớp" thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'], 0, '"yêu" là động từ → "Ai làm gì?".'),
    Q('"Hà Nội" là?', ['Danh từ chung', 'Danh từ riêng', 'Tính từ', 'Động từ'], 1, 'Tên địa danh cụ thể → danh từ riêng.'),
    Q('Câu "Em là học sinh chăm ngoan" thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'], 2, 'Có "là" → "Ai là gì?".'),
    Q('Từ trái nghĩa với "trung thực" là?', ['ngay thẳng', 'dối trá', 'chân thật', 'thật thà'], 1, '"dối trá" trái nghĩa "trung thực".'),
    Q('Câu hỏi kết thúc bằng dấu?', ['Chấm', 'Chấm hỏi', 'Chấm than', 'Hai chấm'], 1, 'Câu hỏi → dấu "?".'),
    Q('Trong câu "Bầu trời xanh trong", vị ngữ là?', ['Bầu trời', 'xanh trong', 'trong', 'không có'], 1, '"xanh trong" tả đặc điểm → vị ngữ.'),
    Q('Câu nào KHÔNG có tính từ?', ['Hoa rất đẹp.', 'Em chạy nhanh.', 'Bạn ấy đang ngủ.', 'Trời cao xanh.'], 2, 'Câu C chỉ có động từ "đang ngủ".'),
    Q('"Cố gắng học tập, vượt khó khăn" thể hiện điều gì?', ['Lười biếng', 'Ý chí, nghị lực', 'Buồn chán', 'Tự ti'], 1, 'Thể hiện nghị lực, ý chí vươn lên.'),
    Q('Dấu hai chấm dùng để?', ['Kết thúc câu', 'Báo trước phần liệt kê hoặc lời nói', 'Hỏi', 'Cảm thán'], 1, 'Báo phần giải thích, liệt kê, hoặc dẫn lời.'),
  ], { difficulty: 2, description: 'Bài kiểm tra cuối Học kỳ 1 — từ loại, các kiểu câu kể, dấu câu, MRVT.' }),

  // ──────────────── HK2 ────────────────
  M(19, 'Chủ ngữ — Vị ngữ trong câu kể "Ai làm gì?"', [
    Q('Chủ ngữ trong câu kể "Ai làm gì?" trả lời câu hỏi?', ['Làm gì?', 'Ai/Cái gì/Con gì?', 'Như thế nào?', 'Là gì?'], 1, 'Chủ ngữ trả lời "Ai?", "Cái gì?", "Con gì?".'),
    Q('Trong câu "Đàn chim hót líu lo", chủ ngữ là?', ['Đàn chim', 'hót', 'líu lo', 'không có'], 0, '"Đàn chim" trả lời "Con gì?".'),
    Q('Trong câu "Lan và Mai cùng đi học", chủ ngữ là?', ['Lan', 'Mai', 'Lan và Mai', 'đi học'], 2, 'Chủ ngữ là cả cụm "Lan và Mai".'),
    Q('Vị ngữ trong "Mẹ nấu cơm và quét nhà" là?', ['Mẹ', 'nấu cơm', 'nấu cơm và quét nhà', 'nhà'], 2, 'Vị ngữ gồm cả hai cụm động từ.'),
    Q('Câu nào có chủ ngữ là cụm danh từ?', ['Em chơi bóng.', 'Cô giáo lớp em rất hiền.', 'Trời mưa.', 'Hoa nở.'], 1, '"Cô giáo lớp em" là cụm danh từ.'),
    Q('Chủ ngữ trong câu "Những con thuyền nhỏ đang lướt trên sông" là?', ['Những con thuyền nhỏ', 'thuyền', 'lướt', 'sông'], 0, 'Cả cụm danh từ "Những con thuyền nhỏ" là chủ ngữ.'),
  ]),

  M(20, 'MRVT: Tài năng', [
    Q('"Tài năng" có nghĩa là?', ['Sự lười biếng', 'Khả năng đặc biệt, vượt trội', 'Sự may mắn', 'Tính tham lam'], 1, 'Tài năng = khả năng nổi bật, làm tốt một việc gì đó.'),
    Q('Từ nào cùng nghĩa với "tài năng"?', ['kém cỏi', 'tài giỏi', 'lười', 'ngu dốt'], 1, '"tài giỏi" gần nghĩa "tài năng".'),
    Q('Câu thành ngữ nào nói về tài năng?', ['Học một biết mười', 'Há miệng chờ sung', 'Đứng núi này trông núi nọ', 'Mua may bán đắt'], 0, 'Ý chỉ người thông minh, có tài.'),
    Q('Từ nào KHÔNG cùng nhóm với "tài năng"?', ['tài giỏi', 'thiên tài', 'lười nhác', 'có tài'], 2, '"lười nhác" không liên quan đến tài năng.'),
    Q('Để phát triển tài năng, ta cần?', ['Chỉ ngủ', 'Chăm chỉ luyện tập', 'Không học gì', 'Ỷ lại vào người khác'], 1, 'Tài năng phát triển nhờ luyện tập kiên trì.'),
    Q('"Thiên tài" có nghĩa là?', ['Người không có khả năng', 'Người có tài năng đặc biệt bẩm sinh', 'Người lười biếng', 'Người chăm chỉ'], 1, 'Thiên tài = tài năng trời phú, vượt trội hẳn người khác.'),
  ]),

  M(21, 'Câu khiến (Câu cầu khiến)', [
    Q('Câu khiến dùng để?', ['Hỏi', 'Yêu cầu, đề nghị, ra lệnh', 'Kể chuyện', 'Bộc lộ cảm xúc'], 1, 'Câu khiến để yêu cầu, đề nghị, mong muốn ai làm gì.'),
    Q('Câu khiến thường kết thúc bằng dấu?', ['Chấm', 'Chấm than hoặc chấm', 'Chấm hỏi', 'Hai chấm'], 1, 'Câu khiến thường có dấu "!" hoặc "." cuối câu.'),
    Q('Từ nào thường có trong câu khiến?', ['ai, gì', 'hãy, đừng, chớ, nên', 'rất, lắm', 'đã, sẽ'], 1, 'Các từ tình thái "hãy, đừng, chớ, nên" tạo câu khiến.'),
    Q('Câu nào là câu khiến?', ['Em đang đọc sách.', 'Hãy giữ trật tự!', 'Bạn có khoẻ không?', 'Đẹp quá!'], 1, 'Có từ "hãy" + dấu "!" → câu khiến.'),
    Q('Khi đặt câu khiến với người lớn, cần?', ['Quát lớn', 'Lịch sự, dùng "xin", "vui lòng"', 'Im lặng', 'Ra lệnh thẳng thừng'], 1, 'Phải lịch sự, tôn trọng người trên.'),
    Q('Câu "Mời bạn ngồi xuống." là câu?', ['Khẳng định', 'Khiến (đề nghị lịch sự)', 'Hỏi', 'Cảm thán'], 1, '"Mời" thể hiện đề nghị lịch sự → câu khiến.'),
  ]),

  M(22, 'Câu cảm (Câu cảm thán)', [
    Q('Câu cảm dùng để?', ['Hỏi', 'Bộc lộ cảm xúc', 'Yêu cầu', 'Kể'], 1, 'Câu cảm bộc lộ vui, buồn, ngạc nhiên, thán phục...'),
    Q('Câu cảm thường kết thúc bằng dấu?', ['Chấm hỏi', 'Chấm than', 'Chấm', 'Hai chấm'], 1, 'Dấu "!" thường được dùng kết câu cảm.'),
    Q('Từ nào thường mở đầu câu cảm?', ['ai, gì', 'ôi, chao, ồ, trời ơi', 'và, nhưng', 'đã, sẽ'], 1, 'Các thán từ "ôi, chao, ồ, trời ơi" mở đầu câu cảm.'),
    Q('Câu nào là câu cảm?', ['Em đang học.', 'Hãy ngồi xuống!', 'Cảnh đẹp quá!', 'Em là học sinh.'], 2, 'Có "quá" + dấu "!" → câu cảm bộc lộ thán phục.'),
    Q('Câu "Ôi, bông hoa đẹp làm sao!" bộc lộ?', ['Lời yêu cầu', 'Sự ngạc nhiên, thán phục', 'Sự buồn bã', 'Câu hỏi'], 1, 'Bộc lộ sự thán phục, ngợi khen.'),
    Q('Từ ngữ nào KHÔNG dùng trong câu cảm?', ['ôi, chao', 'biết bao, biết chừng nào', 'làm sao, biết mấy', 'hãy, đừng'], 3, '"hãy, đừng" thuộc câu khiến.'),
  ]),

  M(23, 'MRVT: Sức khoẻ', [
    Q('"Sức khoẻ" có nghĩa là?', ['Sự thông minh', 'Tình trạng cơ thể khoẻ mạnh', 'Sự giàu có', 'Sự đẹp đẽ'], 1, 'Sức khoẻ = tình trạng cơ thể không bệnh tật.'),
    Q('Để giữ sức khoẻ tốt, ta nên?', ['Ăn nhiều bánh kẹo', 'Tập thể dục, ăn đủ chất', 'Ngủ ít', 'Không vận động'], 1, 'Vận động + dinh dưỡng hợp lý.'),
    Q('Câu thành ngữ "Có sức khoẻ là có tất cả" có ý nghĩa?', ['Sức khoẻ quý hơn vàng', 'Phải có nhiều tiền', 'Chỉ cần ngủ là đủ', 'Không cần học'], 0, 'Đề cao giá trị của sức khoẻ.'),
    Q('Từ nào cùng nghĩa với "khoẻ mạnh"?', ['ốm yếu', 'cường tráng', 'mệt mỏi', 'bệnh tật'], 1, '"cường tráng" = khoẻ mạnh, vạm vỡ.'),
    Q('Từ nào trái nghĩa với "khoẻ"?', ['mạnh', 'yếu', 'cao', 'thấp'], 1, '"yếu" trái nghĩa "khoẻ".'),
    Q('Hoạt động nào tốt cho sức khoẻ?', ['Thức khuya chơi game', 'Bơi lội, chạy bộ', 'Ăn vặt cả ngày', 'Ngồi yên không vận động'], 1, 'Bơi lội, chạy bộ là môn thể thao tốt cho sức khoẻ.'),
  ]),

  M(24, 'Trạng ngữ — Khái niệm', [
    Q('Trạng ngữ là bộ phận?', ['Chính của câu', 'Phụ, bổ sung ý nghĩa cho câu', 'Thay cho chủ ngữ', 'Thay cho vị ngữ'], 1, 'Trạng ngữ là thành phần phụ.'),
    Q('Trạng ngữ trả lời câu hỏi?', ['Ai?', 'Khi nào? Ở đâu? Vì sao? Để làm gì?', 'Là gì?', 'Cái gì?'], 1, 'Trạng ngữ bổ sung thông tin về thời gian, nơi chốn, nguyên nhân, mục đích...'),
    Q('Trong câu "Sáng nay, em đi học", trạng ngữ là?', ['Em', 'đi học', 'Sáng nay', 'học'], 2, '"Sáng nay" chỉ thời gian.'),
    Q('Trong câu "Trên sân trường, các bạn vui chơi", trạng ngữ chỉ?', ['Thời gian', 'Nơi chốn', 'Nguyên nhân', 'Mục đích'], 1, '"Trên sân trường" chỉ nơi chốn.'),
    Q('Trạng ngữ thường được ngăn cách với phần còn lại bằng dấu?', ['Chấm', 'Phẩy', 'Hai chấm', 'Chấm than'], 1, 'Trạng ngữ đầu câu thường có dấu phẩy theo sau.'),
    Q('Câu nào có trạng ngữ?', ['Em yêu mẹ.', 'Vào chủ nhật, em được nghỉ.', 'Bạn ấy chăm chỉ.', 'Em là học sinh.'], 1, '"Vào chủ nhật" là trạng ngữ chỉ thời gian.'),
  ]),

  M(25, 'Trạng ngữ chỉ thời gian, nơi chốn', [
    Q('"Buổi sáng" trong câu "Buổi sáng, em đi tập thể dục" là trạng ngữ chỉ?', ['Nơi chốn', 'Thời gian', 'Nguyên nhân', 'Cách thức'], 1, '"Buổi sáng" chỉ thời gian.'),
    Q('"Trong vườn" trong câu "Trong vườn, hoa nở rộ" là trạng ngữ chỉ?', ['Thời gian', 'Nơi chốn', 'Mục đích', 'Nguyên nhân'], 1, '"Trong vườn" chỉ nơi chốn.'),
    Q('Trạng ngữ chỉ thời gian thường bắt đầu bằng?', ['vì, bởi vì', 'lúc, khi, vào, sáng nay', 'trên, dưới', 'để, nhằm'], 1, 'Đó là các từ chỉ thời gian.'),
    Q('Trạng ngữ chỉ nơi chốn thường bắt đầu bằng?', ['trên, dưới, trong, ngoài', 'lúc, khi', 'vì, bởi', 'để, nhằm'], 0, 'Các giới từ chỉ vị trí.'),
    Q('Câu "Hôm qua, lớp em đi tham quan công viên" có trạng ngữ chỉ?', ['Nơi chốn', 'Thời gian', 'Mục đích', 'Nguyên nhân'], 1, '"Hôm qua" chỉ thời gian.'),
    Q('Câu "Ở trường, em được học nhiều điều bổ ích" có trạng ngữ chỉ?', ['Thời gian', 'Nơi chốn', 'Cách thức', 'Mục đích'], 1, '"Ở trường" chỉ nơi chốn.'),
  ]),

  M(26, 'Trạng ngữ chỉ nguyên nhân, mục đích', [
    Q('Trạng ngữ chỉ nguyên nhân thường bắt đầu bằng?', ['vì, do, bởi vì, tại', 'trên, dưới', 'để, nhằm', 'sáng nay, hôm qua'], 0, 'Các từ chỉ nguyên nhân.'),
    Q('Trạng ngữ chỉ mục đích thường bắt đầu bằng?', ['vì, do', 'để, nhằm, vì (mục đích)', 'trên, dưới', 'lúc, khi'], 1, '"để, nhằm" chỉ mục đích.'),
    Q('Trong câu "Vì trời mưa, em không đi chơi", trạng ngữ là?', ['Vì trời mưa', 'em', 'không đi chơi', 'trời'], 0, '"Vì trời mưa" chỉ nguyên nhân.'),
    Q('Trong câu "Để có sức khoẻ tốt, em tập thể dục đều đặn", trạng ngữ là?', ['Để có sức khoẻ tốt', 'em', 'tập thể dục', 'đều đặn'], 0, '"Để có sức khoẻ tốt" chỉ mục đích.'),
    Q('Câu "Do chăm chỉ học tập, Lan đạt học sinh giỏi" có trạng ngữ chỉ?', ['Nơi chốn', 'Nguyên nhân', 'Mục đích', 'Thời gian'], 1, '"Do chăm chỉ học tập" chỉ nguyên nhân.'),
    Q('Câu "Em học chăm để cha mẹ vui lòng" có trạng ngữ chỉ?', ['Nguyên nhân', 'Mục đích', 'Thời gian', 'Nơi chốn'], 1, '"để cha mẹ vui lòng" chỉ mục đích.'),
  ]),

  M(27, 'MRVT: Du lịch — Thám hiểm', [
    Q('"Du lịch" có nghĩa là?', ['Ở nhà', 'Đi chơi, tham quan các nơi', 'Đi học', 'Đi làm'], 1, 'Du lịch = đi tham quan nghỉ ngơi ở nơi khác.'),
    Q('"Thám hiểm" có nghĩa là?', ['Đi chơi gần nhà', 'Khám phá nơi xa lạ, ít người biết', 'Ngủ trưa', 'Đi mua sắm'], 1, 'Thám hiểm = khám phá vùng đất, biển, núi chưa ai đặt chân tới.'),
    Q('Từ nào liên quan đến du lịch?', ['máy ảnh, va li, hướng dẫn viên', 'sách, vở, bút', 'cuốc, xẻng', 'nồi, niêu'], 0, 'Đó là các vật dụng và người liên quan du lịch.'),
    Q('Người đi thám hiểm cần phẩm chất gì?', ['Nhút nhát', 'Dũng cảm, ham hiểu biết', 'Lười biếng', 'Sợ hãi'], 1, 'Phải dũng cảm và ham khám phá.'),
    Q('Địa điểm nào là điểm du lịch nổi tiếng của Việt Nam?', ['Vịnh Hạ Long', 'Cái Bàn', 'Cái Ghế', 'Cái Hộp'], 0, 'Vịnh Hạ Long là di sản thiên nhiên thế giới.'),
    Q('Câu nào nói về thám hiểm?', ['Em đi tham quan công viên', 'Đoàn thám hiểm đã đặt chân lên đỉnh Everest', 'Em ăn cơm trưa', 'Em đi siêu thị'], 1, 'Đoàn thám hiểm khám phá nơi hiểm trở.'),
  ]),

  M(28, 'Dấu ngoặc kép', [
    Q('Dấu ngoặc kép dùng để?', ['Đánh dấu lời nói trực tiếp hoặc từ ngữ đặc biệt', 'Kết thúc câu', 'Hỏi', 'Liệt kê'], 0, 'Dùng để đánh dấu lời dẫn trực tiếp hoặc từ ngữ có ý nghĩa đặc biệt.'),
    Q('Dấu ngoặc kép thường đi cùng dấu nào?', ['Hai chấm', 'Chấm phẩy', 'Chấm than', 'Phẩy'], 0, 'Khi dẫn lời nói: : "..."'),
    Q('Câu nào dùng dấu ngoặc kép đúng?', ['Cô bảo: "Các em hãy chú ý."', 'Cô bảo "các em hãy chú ý"', 'Cô bảo. "Các em hãy chú ý"', 'Cô bảo các em: hãy chú ý.'], 0, 'Sau dấu hai chấm, lời dẫn trong ngoặc kép, có hoa chữ cái đầu.'),
    Q('Trong câu "Bạn Lan được gọi là \\"cây toán\\" của lớp", dấu ngoặc kép dùng để?', ['Dẫn lời nói', 'Đánh dấu từ ngữ có ý nghĩa đặc biệt', 'Kết thúc câu', 'Liệt kê'], 1, 'Đánh dấu biệt danh, từ ngữ đặc biệt.'),
    Q('Dấu ngoặc kép có thể dùng để?', ['Trích dẫn câu nói nguyên văn', 'Đánh dấu tên tác phẩm', 'Đánh dấu từ ngữ đặc biệt', 'Cả ba phương án trên'], 3, 'Dấu ngoặc kép có nhiều công dụng.'),
    Q('Trong câu "Em rất thích bài thơ \\"Tre Việt Nam\\" của Nguyễn Duy", dấu ngoặc kép đánh dấu?', ['Lời nói', 'Tên tác phẩm', 'Tên người', 'Câu hỏi'], 1, '"Tre Việt Nam" là tên bài thơ.'),
  ]),

  M(29, 'Dấu gạch ngang', [
    Q('Dấu gạch ngang đặt đầu dòng dùng để?', ['Đánh dấu lời nói trực tiếp của nhân vật', 'Kết thúc câu', 'Hỏi', 'Liệt kê ngang dòng'], 0, 'Đầu dòng: đánh dấu lời nói trực tiếp.'),
    Q('Dấu gạch ngang giữa câu dùng để?', ['Kết thúc câu', 'Đánh dấu phần chú thích, giải thích', 'Hỏi', 'Cảm thán'], 1, 'Giữa câu: dùng cho phần chú giải.'),
    Q('Câu nào dùng dấu gạch ngang đúng?', ['Mẹ gọi: — Con ơi, ăn cơm thôi!', 'Mẹ gọi: Con — ơi, ăn cơm.', 'Mẹ — gọi con ơi ăn cơm.', 'Mẹ gọi con ơi ăn — cơm.'], 0, 'Sau dấu hai chấm, gạch ngang mở lời nói nhân vật.'),
    Q('Dấu gạch ngang khác dấu gạch nối ở chỗ?', ['Dấu gạch ngang dài hơn và đặt cách chữ', 'Cả hai giống nhau', 'Dấu gạch nối dài hơn', 'Không khác nhau'], 0, 'Gạch ngang (—) dài hơn gạch nối (-) và có khoảng trắng.'),
    Q('Dấu gạch ngang trong câu "Hà Nội — thủ đô của Việt Nam — rất đẹp" dùng để?', ['Đánh dấu lời nói', 'Đánh dấu phần chú thích', 'Hỏi', 'Liệt kê'], 1, 'Phần "thủ đô của Việt Nam" là chú thích cho "Hà Nội".'),
    Q('Khi viết hội thoại trong truyện, mỗi lời thoại nhân vật bắt đầu bằng?', ['Dấu gạch ngang đầu dòng', 'Dấu chấm', 'Dấu hỏi', 'Dấu phẩy'], 0, 'Quy ước viết hội thoại: gạch ngang đầu dòng.'),
  ]),

  M(30, 'Văn miêu tả đồ vật', [
    Q('Văn miêu tả đồ vật giúp người đọc?', ['Hiểu cách dùng', 'Hình dung được đồ vật đó', 'Biết giá tiền', 'Biết người sản xuất'], 1, 'Giúp người đọc hình dung được hình dáng, đặc điểm đồ vật.'),
    Q('Bố cục bài văn miêu tả đồ vật gồm mấy phần?', ['2', '3', '4', '5'], 1, 'Ba phần: Mở bài – Thân bài – Kết bài.'),
    Q('Phần mở bài bài văn miêu tả đồ vật thường?', ['Giới thiệu đồ vật được tả', 'Tả chi tiết', 'Nêu cảm nghĩ', 'Kết thúc bài'], 0, 'Mở bài giới thiệu đồ vật.'),
    Q('Khi tả đồ vật, ta nên?', ['Chỉ liệt kê', 'Quan sát kĩ và dùng từ ngữ gợi tả', 'Sao chép sách', 'Tả qua loa'], 1, 'Cần quan sát + dùng từ gợi tả sinh động.'),
    Q('Tả "cái cặp sách" thuộc văn?', ['Miêu tả con vật', 'Miêu tả đồ vật', 'Miêu tả cây cối', 'Kể chuyện'], 1, 'Cặp sách là đồ vật.'),
    Q('Khi tả đồ vật cần chú ý?', ['Hình dáng, màu sắc, công dụng', 'Chỉ giá tiền', 'Chỉ người làm ra', 'Chỉ cảm xúc'], 0, 'Đó là các đặc điểm cần tả của đồ vật.'),
  ]),

  M(31, 'Văn miêu tả cây cối', [
    Q('Khi tả cây cối, ta thường tả theo trình tự?', ['Từ ngọn xuống gốc hoặc từ gốc lên ngọn', 'Tả lung tung', 'Chỉ tả lá', 'Chỉ tả thân'], 0, 'Tả theo thứ tự không gian (từ gốc đến ngọn) hoặc theo từng bộ phận.'),
    Q('Bộ phận nào của cây thường được tả?', ['Rễ, thân, cành, lá, hoa, quả', 'Chỉ hoa', 'Chỉ lá', 'Chỉ thân'], 0, 'Tả nhiều bộ phận để bài văn sinh động.'),
    Q('Ngoài hình dáng, khi tả cây cối còn nên tả?', ['Mùi hương, âm thanh khi gió thổi', 'Giá tiền', 'Người trồng', 'Cách chăm sóc tỉ mỉ'], 0, 'Mở rộng ra các giác quan khác sẽ sinh động hơn.'),
    Q('Tả "cây phượng vĩ" thuộc văn?', ['Miêu tả đồ vật', 'Miêu tả cây cối', 'Miêu tả con vật', 'Kể chuyện'], 1, 'Cây phượng vĩ là cây cối.'),
    Q('Khi tả cây phượng vào mùa hè, em tập trung tả?', ['Hoa đỏ rực', 'Cành khô', 'Rễ', 'Lá vàng'], 0, 'Phượng vĩ mùa hè nở hoa đỏ rực.'),
    Q('Câu nào dùng biện pháp nhân hoá để tả cây?', ['Cây bàng cao 5 m.', 'Cây bàng đứng trầm tư, hứng nắng cho đàn em chơi đùa.', 'Cây bàng có lá to.', 'Cây bàng có nhiều cành.'], 1, 'Cây "đứng trầm tư", "hứng nắng" → nhân hoá.'),
  ]),

  M(32, 'Văn miêu tả con vật', [
    Q('Khi tả con vật, ta thường tả?', ['Hình dáng và hoạt động', 'Chỉ tên', 'Chỉ giá', 'Chỉ nơi mua'], 0, 'Tả ngoại hình + hoạt động/thói quen của con vật.'),
    Q('Bố cục bài văn miêu tả con vật gồm?', ['Mở bài – Thân bài – Kết bài', 'Chỉ mở bài', 'Chỉ kết bài', 'Hai phần'], 0, 'Vẫn theo cấu trúc 3 phần.'),
    Q('Thân bài tả con vật cần tập trung tả?', ['Hình dáng các bộ phận và hoạt động', 'Chỉ một bộ phận', 'Chỉ tên', 'Chỉ tuổi'], 0, 'Tả lông, đầu, mắt, đuôi... + thói quen ăn, ngủ, chơi.'),
    Q('Để bài tả con vật sinh động, nên dùng?', ['Biện pháp so sánh, nhân hoá', 'Chỉ liệt kê đặc điểm', 'Viết ngắn nhất có thể', 'Chỉ ghi tên'], 0, 'So sánh và nhân hoá làm bài văn sinh động.'),
    Q('Câu nào dùng biện pháp so sánh để tả con vật?', ['Con mèo có bộ lông trắng.', 'Bộ lông mèo trắng như tuyết.', 'Mèo nặng 3 kg.', 'Mèo có 4 chân.'], 1, '"trắng như tuyết" — so sánh.'),
    Q('Khi tả "chú gà trống nhà em", em mở bài bằng cách?', ['Giới thiệu chú gà', 'Tả chi tiết ngay', 'Nêu cảm xúc', 'Kết bài'], 0, 'Mở bài giới thiệu đối tượng được tả.'),
  ]),

  M(33, 'Viết thư', [
    Q('Bố cục một bức thư thông thường gồm mấy phần?', ['2', '3', '4', '5'], 1, 'Ba phần: Đầu thư – Nội dung – Cuối thư.'),
    Q('Phần đầu thư cần ghi?', ['Địa điểm, ngày tháng, lời chào', 'Chỉ nội dung', 'Chỉ chữ kí', 'Chỉ địa chỉ'], 0, 'Bao gồm địa điểm + ngày + lời chào người nhận.'),
    Q('Phần cuối thư thường có?', ['Lời chúc, lời chào tạm biệt, chữ kí', 'Chỉ nội dung', 'Chỉ địa chỉ', 'Chỉ lời chào đầu'], 0, 'Lời chúc + lời chào + kí tên.'),
    Q('Khi viết thư cho bạn, lời xưng hô phù hợp là?', ['"Kính gửi"', '"Bạn ... thân mến"', '"Ngài"', '"Đức ngài"'], 1, 'Xưng hô thân mật khi viết cho bạn.'),
    Q('Khi viết thư cho thầy cô, lời xưng hô phù hợp là?', ['"Thầy/Cô kính mến"', '"Mày ơi"', '"Ê này"', '"Bạn ơi"'], 0, 'Cần lịch sự, tôn kính.'),
    Q('Phần nội dung bức thư nên?', ['Viết rõ ý, chân thành', 'Viết dài dòng, lung tung', 'Chỉ viết 1 câu', 'Chỉ viết tên'], 0, 'Cần rõ ý, chân thành, đầy đủ thông tin.'),
  ]),

  M(34, 'MRVT: Lạc quan — Yêu đời', [
    Q('"Lạc quan" có nghĩa là?', ['Buồn rầu, chán nản', 'Có cái nhìn tin tưởng, vui vẻ về cuộc sống', 'Lo lắng', 'Sợ hãi'], 1, 'Lạc quan = tinh thần tích cực, tin tưởng vào điều tốt đẹp.'),
    Q('Từ nào trái nghĩa với "lạc quan"?', ['vui vẻ', 'bi quan', 'tươi cười', 'phấn khởi'], 1, '"bi quan" trái nghĩa "lạc quan".'),
    Q('"Yêu đời" có nghĩa là?', ['Chán cuộc sống', 'Có tình cảm tích cực với cuộc sống', 'Buồn bã', 'Tức giận'], 1, 'Yêu đời = trân trọng và vui sống.'),
    Q('Câu thành ngữ nào thể hiện tinh thần lạc quan?', ['Sông có khúc, người có lúc', 'Có công mài sắt có ngày nên kim', 'Ăn không ngồi rồi', 'Đứng núi này trông núi nọ'], 0, 'Ý: cuộc sống có lúc thăng lúc trầm, hãy tin vào tương lai.'),
    Q('Bạn nào lạc quan?', ['Khóc lóc khi bị điểm kém', 'Cố gắng học tốt hơn vào lần sau', 'Bỏ học', 'Nản chí mãi mãi'], 1, 'Tin tưởng vào tương lai, cố gắng cải thiện.'),
    Q('Từ cùng nghĩa với "yêu đời"?', ['chán nản', 'phấn khởi', 'buồn bã', 'thất vọng'], 1, '"phấn khởi" gần nghĩa "yêu đời".'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Từ "rì rào" thuộc loại?', ['Từ đơn', 'Từ ghép', 'Từ láy', 'Danh từ riêng'], 2, 'Lặp âm đầu "r" → từ láy.'),
    Q('"Hồ Chí Minh" là?', ['Danh từ chung', 'Danh từ riêng', 'Động từ', 'Tính từ'], 1, 'Tên người cụ thể.'),
    Q('Câu "Em là học sinh lớp 4" thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Câu hỏi'], 2, 'Có "là" → "Ai là gì?".'),
    Q('Câu "Hãy giữ gìn vệ sinh chung!" là?', ['Câu kể', 'Câu khiến', 'Câu hỏi', 'Câu cảm'], 1, 'Có "hãy" + dấu "!" → câu khiến.'),
    Q('Trong câu "Hôm qua, em đi chơi với mẹ", trạng ngữ là?', ['em', 'Hôm qua', 'đi chơi', 'với mẹ'], 1, '"Hôm qua" chỉ thời gian.'),
    Q('Dấu ngoặc kép thường dùng để?', ['Kết thúc câu', 'Đánh dấu lời nói hoặc từ ngữ đặc biệt', 'Hỏi', 'Liệt kê'], 1, 'Dấu ngoặc kép có nhiều công dụng.'),
    Q('Văn miêu tả "cây xoài nhà em" tả về?', ['Đồ vật', 'Cây cối', 'Con vật', 'Người'], 1, 'Cây xoài → văn tả cây cối.'),
    Q('Từ nào trái nghĩa với "lạc quan"?', ['phấn khởi', 'bi quan', 'vui vẻ', 'yêu đời'], 1, '"bi quan" trái nghĩa "lạc quan".'),
    Q('Khi viết thư cho ông bà, lời xưng hô phù hợp là?', ['"Ông/Bà kính yêu"', '"Bạn ơi"', '"Mày"', '"Ngươi"'], 0, 'Lịch sự, tôn kính với ông bà.'),
    Q('Câu "Ôi, cảnh đẹp tuyệt vời!" là?', ['Câu kể', 'Câu khiến', 'Câu hỏi', 'Câu cảm'], 3, 'Có "Ôi" + dấu "!" → câu cảm.'),
  ], { difficulty: 3, description: 'Bài kiểm tra cuối năm — tổng hợp từ loại, kiểu câu, dấu câu, MRVT, tập làm văn.' }),
];

export const P4TV_SCENARIOS = indexBy(P4TV_WEEKS);
