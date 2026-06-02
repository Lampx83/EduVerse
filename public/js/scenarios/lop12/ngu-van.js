// ============================================================
// Lớp 12 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 + định hướng ôn thi tốt nghiệp THPT.
// ID prefix: "H12NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12NV', 'ngu-van', n, title, qs, opts);

export const H12NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Tây Tiến — Quang Dũng (khái quát)', [
    Q('Bài thơ "Tây Tiến" được Quang Dũng sáng tác năm nào, tại đâu?', ['1948 — Phù Lưu Chanh','1947 — Hà Nội','1954 — Việt Bắc','1945 — Hà Đông'], 0, 'Tây Tiến viết cuối 1948 tại Phù Lưu Chanh khi tác giả đã rời đoàn quân Tây Tiến.'),
    Q('Cảm hứng chủ đạo của Tây Tiến là gì?', ['Tả thực chiến tranh','Bi tráng + lãng mạn','Hài hước trào phúng','Triết lí cuộc đời'], 1, 'Cảm hứng lãng mạn hoà bi tráng — đặc trưng phong cách Quang Dũng.'),
    Q('"Sông Mã xa rồi Tây Tiến ơi" mở đầu bằng biện pháp nghệ thuật?', ['Ẩn dụ','Nhân hoá','Gọi đáp + cảm thán','So sánh'], 2, 'Tiếng gọi "ơi" cảm thán + hô gọi địa danh — bộc lộ nỗi nhớ da diết.'),
    Q('Hình ảnh "Sông Mã gầm lên khúc độc hành" gợi tả điều gì?', ['Thiên nhiên thơ mộng','Sự tiễn đưa bi tráng các đồng chí hi sinh','Cảnh chiến đấu ác liệt','Đời sống bộ đội'], 1, 'Dòng sông gầm thét tiễn đưa các đồng chí hi sinh — bi tráng, lãng mạn cách mạng.'),
    Q('"Mắt trừng gửi mộng qua biên giới / Đêm mơ Hà Nội dáng kiều thơm" thể hiện?', ['Chỉ là kỉ niệm cá nhân','Vẻ đẹp hào hoa + lí tưởng người lính trí thức Hà thành','Sự bi lụy','Lòng nhớ quê'], 1, 'Hai câu khắc hoạ vẻ đẹp hào hoa, lãng mạn, lí tưởng của người lính Tây Tiến gốc Hà thành.'),
    Q('Câu thơ "Áo bào thay chiếu anh về đất" sử dụng biện pháp?', ['Hoán dụ','Nói giảm + ẩn dụ trang trọng','So sánh','Điệp ngữ'], 1, '"Áo bào" trang trọng hoá hi sinh, "về đất" nói giảm cái chết — chất bi tráng.'),
  ]),

  M(2, 'Tây Tiến — phân tích đoạn thơ', [
    Q('Đoạn 1 Tây Tiến tập trung khắc hoạ?', ['Tình yêu đôi lứa','Thiên nhiên Tây Bắc hiểm trở + chặng hành quân','Cảnh sinh hoạt','Cảnh đêm liên hoan'], 1, 'Đoạn 1: thiên nhiên Tây Bắc hùng vĩ - hiểm trở qua bước chân hành quân Tây Tiến.'),
    Q('"Dốc lên khúc khuỷu dốc thăm thẳm" sử dụng?', ['Điệp âm + từ láy gợi hình','Hoán dụ','Nhân hoá','Phép đối'], 0, 'Điệp "dốc" + láy "khúc khuỷu, thăm thẳm" tạo cảm giác trùng điệp hiểm trở.'),
    Q('Cách dùng nhiều thanh trắc trong đoạn đầu nhằm?', ['Gợi sự êm đềm','Diễn tả độ cao - hiểm trở dữ dội','Tạo nhạc tính nhẹ','Tăng tính trữ tình'], 1, 'Mật độ thanh trắc cao diễn tả độ cao, dốc đứng, gian khổ.'),
    Q('Hình ảnh "súng ngửi trời" là biện pháp?', ['Ẩn dụ','Nhân hoá tinh nghịch','So sánh','Hoán dụ'], 1, 'Nhân hoá súng "ngửi trời" — chất tinh nghịch, lãng mạn của lính.'),
    Q('Câu thơ "Nhà ai Pha Luông mưa xa khơi" toàn thanh bằng nhằm?', ['Tạo nhịp dồn dập','Mở ra không gian xa mờ, êm dịu','Diễn tả vội vã','Nhấn mạnh hiểm nguy'], 1, 'Toàn thanh bằng tạo cảm giác lặng, xa, mờ — tương phản đoạn trắc trước đó.'),
    Q('Đoạn thơ tả đêm liên hoan "Doanh trại bừng lên hội đuốc hoa" cho thấy?', ['Sự khắc nghiệt','Vẻ đẹp lãng mạn - tình quân dân','Cảnh chiến đấu','Nỗi buồn xa quê'], 1, 'Đêm liên hoan rực rỡ, lãng mạn — tình quân dân thắm thiết.'),
  ]),

  M(3, 'Việt Bắc — Tố Hữu (khái quát)', [
    Q('Việt Bắc được Tố Hữu sáng tác nhân sự kiện nào?', ['Cách mạng tháng Tám 1945','Trung ương Đảng + Chính phủ rời chiến khu Việt Bắc về Hà Nội 10/1954','Chiến thắng Điện Biên Phủ','Thống nhất đất nước 1975'], 1, 'Tháng 10/1954, TƯ Đảng và Chính phủ rời Việt Bắc về Hà Nội — Tố Hữu viết bài thơ này.'),
    Q('Thể thơ của Việt Bắc là?', ['Tự do','Lục bát','Thất ngôn','Song thất lục bát'], 1, 'Lục bát truyền thống dân tộc, mang âm hưởng ca dao.'),
    Q('Cặp đại từ chủ đạo "mình - ta" trong Việt Bắc gợi liên tưởng?', ['Lời đối thoại lạnh lùng','Tình nghĩa thuỷ chung - kết cấu ca dao đối đáp','Lời tự thoại','Lời hô hào'], 1, 'Cặp "mình - ta" mượn từ ca dao tình yêu để diễn tả tình nghĩa cách mạng.'),
    Q('Câu "Mình về mình có nhớ ta" lặp lại nhằm?', ['Đa nghĩa - hỏi và tự hỏi - tạo điệp khúc da diết','Chỉ là câu hỏi','Trang trí','Đối'], 0, 'Câu hỏi kép - vừa của Việt Bắc hỏi cán bộ về xuôi, vừa tác giả tự vấn — điệp khúc da diết.'),
    Q('Chủ đề chính của Việt Bắc là?', ['Tình yêu đôi lứa','Khúc tình ca + sử thi về cách mạng và Việt Bắc','Phê phán xã hội','Triết lí nhân sinh'], 1, 'Tác phẩm vừa là khúc tình ca thuỷ chung vừa là sử thi cách mạng.'),
    Q('Phong cách thơ Tố Hữu được khái quát là?', ['Hiện thực phê phán','Trữ tình - chính trị, đậm tính dân tộc','Tượng trưng siêu thực','Hiện đại chủ nghĩa'], 1, 'Phong cách trữ tình - chính trị, giàu tính dân tộc - đại chúng.'),
  ]),

  M(4, 'Việt Bắc — phân tích đoạn trích', [
    Q('"Ta về mình có nhớ ta / Ta về ta nhớ những hoa cùng người" — biện pháp?', ['So sánh','Điệp + hoán dụ "hoa cùng người"','Ẩn dụ','Phép đối'], 1, '"Hoa" - thiên nhiên, "người" - con người Việt Bắc; điệp "ta - ta" tha thiết.'),
    Q('Bức tranh tứ bình Việt Bắc gồm 4 mùa nào?', ['Xuân - hạ - thu - đông','Đông - xuân - hạ - thu','Hạ - thu - đông - xuân','Thu - đông - xuân - hạ'], 1, 'Tố Hữu mở đầu bằng "Rừng xanh hoa chuối đỏ tươi" (đông) — trình tự đông-xuân-hạ-thu.'),
    Q('"Rừng xanh hoa chuối đỏ tươi / Đèo cao nắng ánh dao gài thắt lưng" gợi?', ['Mùa xuân nở rộ','Mùa đông Việt Bắc + người lao động','Mùa hè rực rỡ','Mùa thu bình lặng'], 1, 'Hoa chuối đỏ giữa rừng xanh là đặc trưng mùa đông; con người chủ động lao động.'),
    Q('"Ngày xuân mơ nở trắng rừng" sử dụng?', ['Đảo ngữ + ẩn dụ chuyển đổi cảm giác','So sánh','Hoán dụ','Phép đối'], 0, 'Đảo "trắng rừng" lên cuối tạo ấn tượng thị giác mạnh — sắc trắng tinh khôi.'),
    Q('Hình ảnh "Nhớ người đan nón chuốt từng sợi giang" thể hiện?', ['Sự vội vã','Vẻ đẹp cần mẫn, tài hoa của người Việt Bắc','Cảnh chiến đấu','Lễ hội'], 1, '"Chuốt từng sợi" — cần cù, khéo léo, đôn hậu.'),
    Q('Đoạn tả Việt Bắc ra trận "Những đường Việt Bắc của ta…" mang âm hưởng?', ['Trữ tình êm dịu','Sử thi hùng tráng','Bi luỵ','Hài hước'], 1, 'Âm hưởng sử thi - hùng tráng với "rầm rập như là đất rung", "ánh sao đầu súng".'),
  ]),

  M(5, 'Đất Nước — Nguyễn Khoa Điềm', [
    Q('"Đất Nước" của Nguyễn Khoa Điềm trích từ trường ca nào?', ['Mặt đường khát vọng','Theo chân Bác','Ánh sáng và phù sa','Bài ca chim chơ-rao'], 0, 'Trích chương V trường ca "Mặt đường khát vọng" (1971).'),
    Q('Tư tưởng cốt lõi của đoạn trích là?', ['Đất Nước của giai cấp thống trị','Đất Nước của Nhân dân','Đất Nước của thiên nhiên','Đất Nước của người lính'], 1, 'Tư tưởng "Đất Nước của Nhân dân" — quan niệm mới mẻ, sâu sắc.'),
    Q('"Khi ta lớn lên Đất Nước đã có rồi" mở đầu bằng cách?', ['Triết lí khô khan','Giọng tâm tình - bình dị - gần gũi','Sử thi','Hùng biện'], 1, 'Giọng kể chuyện tâm tình, gần gũi như lời tự sự.'),
    Q('Hình ảnh "Đất là nơi anh đến trường / Nước là nơi em tắm" nhằm?', ['Định nghĩa khoa học','Tách - hợp Đất + Nước qua trải nghiệm gần gũi','Ẩn dụ kép','Phép đối'], 1, 'Tách "Đất" và "Nước" rồi hợp lại — Đất Nước hiện ra qua điều bình dị.'),
    Q('"Em ơi em Đất Nước là máu xương của mình" thể hiện?', ['Đất Nước xa lạ','Trách nhiệm và sự gắn bó máu thịt','Ca ngợi anh hùng','Triết lí trừu tượng'], 1, 'Đất Nước thuộc về mỗi cá nhân — phải gắn bó, bảo vệ như máu xương.'),
    Q('Chất liệu nghệ thuật đặc sắc của đoạn trích?', ['Văn học bác học phương Tây','Văn hoá - văn học dân gian Việt Nam','Triết học cổ điển','Tôn giáo'], 1, 'Vận dụng đậm đặc ca dao, tục ngữ, cổ tích, truyền thuyết.'),
  ]),

  M(6, 'Sóng — Xuân Quỳnh', [
    Q('Bài thơ "Sóng" sáng tác năm nào, in trong tập nào?', ['1967 — Hoa dọc chiến hào','1968 — Gió Lào cát trắng','1970 — Tự hát','1975 — Lời ru trên mặt đất'], 0, 'Sáng tác 1967 tại biển Diêm Điền, in trong "Hoa dọc chiến hào" (1968).'),
    Q('Hai hình tượng chính trong bài thơ?', ['Em - anh','Sóng - em (song hành, tách hợp)','Biển - bờ','Thuyền - bến'], 1, 'Sóng và em song hành, tách - hợp — bộc lộ tâm hồn người phụ nữ yêu.'),
    Q('"Dữ dội và dịu êm / Ồn ào và lặng lẽ" diễn tả?', ['Sự đơn điệu','Trạng thái đối lập trong tâm hồn người con gái yêu','Sự bất an','Nỗi buồn'], 1, 'Hai cặp đối lập gợi tâm hồn người con gái yêu — phức tạp, nhiều cung bậc.'),
    Q('"Sông không hiểu nổi mình / Sóng tìm ra tận bể" thể hiện?', ['Sự bỏ cuộc','Khát vọng lớn lao, vươn xa của người con gái yêu','Sự cô đơn','Nỗi chia ly'], 1, 'Khát vọng tự khám phá, vươn ra cái lớn lao - đặc trưng tình yêu hiện đại.'),
    Q('Câu "Làm sao được tan ra / Thành trăm con sóng nhỏ" thể hiện?', ['Sự tan vỡ','Khát vọng dâng hiến, hoá thân vĩnh viễn trong tình yêu','Tuyệt vọng','Quên lãng'], 1, 'Khát vọng dâng hiến, bất tử hoá tình yêu qua hoá thân.'),
    Q('Âm điệu chủ đạo bài thơ?', ['Hùng tráng','Da diết, dào dạt như sóng','Bi luỵ','Vui tươi'], 1, 'Thể 5 chữ, ngắt nhịp linh hoạt - âm hưởng dào dạt của sóng biển.'),
  ]),

  M(7, 'Đàn ghi ta của Lor-ca — Thanh Thảo', [
    Q('Bài thơ viết về nhân vật lịch sử nào?', ['Pablo Neruda','Federico García Lorca - thi sĩ Tây Ban Nha','Picasso','Hemingway'], 1, 'Lor-ca (1898-1936) - nhà thơ Tây Ban Nha, bị phát xít Franco sát hại.'),
    Q('"Tiếng đàn bọt nước" là biện pháp?', ['So sánh','Ẩn dụ chuyển đổi cảm giác (thính → thị giác)','Hoán dụ','Nhân hoá'], 1, 'Chuyển âm thanh tiếng đàn thành hình ảnh thị giác "bọt nước" - mong manh, vỡ tan.'),
    Q('"Áo choàng đỏ gắt" gợi điều gì?', ['Cảnh đẹp Tây Ban Nha','Văn hoá đấu bò + không khí chính trị căng thẳng','Trang phục lễ hội','Cảnh chiến đấu'], 1, '"Áo choàng đỏ" của đấu sĩ - vừa văn hoá Tây Ban Nha, vừa biểu tượng bạo lực.'),
    Q('Câu "tiếng ghi ta nâu / bầu trời cô gái ấy" sử dụng?', ['Phép đối','Lối thơ tượng trưng - siêu thực, không gian đứt mảnh','So sánh','Điệp ngữ'], 1, 'Đặc trưng thơ tượng trưng - siêu thực: hình ảnh đứt mảnh, không liền mạch.'),
    Q('Hình tượng Lor-ca trong bài thơ là?', ['Người lính cách mạng','Người nghệ sĩ tự do bị bức tử bởi cường quyền','Nhà chính trị','Anh hùng dân tộc'], 1, 'Lor-ca - biểu tượng nghệ sĩ tự do, sáng tạo bị cường quyền tiêu diệt.'),
    Q('Câu thơ "li la li la li la" mô phỏng?', ['Tiếng chim','Tiếng đàn ghi ta + tên hoa li-la','Tiếng khóc','Tiếng gió'], 1, 'Vừa mô phỏng tiếng đàn ghi ta vừa gợi hoa li-la (tử đinh hương) - đa nghĩa.'),
  ]),

  M(8, 'Vợ chồng A Phủ — Tô Hoài (tóm tắt + nhân vật Mị)', [
    Q('Truyện "Vợ chồng A Phủ" rút từ tập?', ['Truyện Tây Bắc (1953)','O chuột','Dế Mèn phiêu lưu kí','Cát bụi chân ai'], 0, 'In trong tập "Truyện Tây Bắc" (1953) - được giải Nhất Hội Văn nghệ VN.'),
    Q('Nhân vật Mị bị bắt làm gì trong nhà thống lí Pá Tra?', ['Đầy tớ tự do','Con dâu trừ nợ','Người làm thuê','Con nuôi'], 1, 'Mị bị bắt về làm "con dâu gạt nợ" - thân phận nô lệ.'),
    Q('Chi tiết "Mị ngồi trong cái buồng kín mít, chỉ có một ô vuông bằng bàn tay" gợi?', ['Sự giàu có','Số phận giam cầm, mất tự do','Tổ ấm','Nơi nghỉ ngơi'], 1, 'Căn buồng - biểu tượng nhà tù tinh thần, Mị bị giam cầm cả thể xác lẫn tâm hồn.'),
    Q('Yếu tố nào thức tỉnh khát vọng sống ở Mị trong đêm tình mùa xuân?', ['Lời nói của A Sử','Tiếng sáo + men rượu + không khí Tết','Sự đe doạ','Lao động'], 1, 'Tiếng sáo gọi bạn yêu + rượu + Tết - đánh thức khát vọng sống và yêu.'),
    Q('Hành động cắt dây trói cứu A Phủ thể hiện?', ['Sự bốc đồng','Sức sống tiềm tàng + lòng đồng cảm + bước ngoặt giải phóng','Sự sợ hãi','Trả thù'], 1, 'Bước ngoặt từ cam chịu → vùng dậy tự giải phóng - giá trị nhân đạo sâu sắc.'),
    Q('Giá trị nhân đạo nổi bật của tác phẩm?', ['Phê phán chiến tranh','Đồng cảm người dân lao động Tây Bắc + phát hiện sức sống tiềm tàng','Ca ngợi lãnh tụ','Triết lí nhân sinh'], 1, 'Tô Hoài phát hiện sức sống tiềm tàng - khát vọng tự do - khả năng cách mạng.'),
  ]),

  M(9, 'Vợ chồng A Phủ — nhân vật A Phủ', [
    Q('A Phủ xuất thân là?', ['Con nhà thống lí','Trai mồ côi nghèo, sống tự do','Con quan','Người Kinh'], 1, 'A Phủ mồ côi, bị bán xuống vùng thấp, lớn lên khoẻ mạnh, gan dạ.'),
    Q('Vì sao A Phủ bị trói đứng?', ['Trộm cắp','Đánh A Sử + để hổ ăn mất bò','Bỏ trốn','Cãi lệnh'], 1, 'A Phủ đánh A Sử (con thống lí) trong cuộc chơi và làm mất bò - bị phạt vạ + trói.'),
    Q('Chi tiết "dòng nước mắt lấp lánh bò xuống hai hõm má" của A Phủ tác động đến Mị?', ['Không tác động','Đánh thức lòng thương người, khơi dậy ý thức','Khiến Mị sợ','Khiến Mị tức giận'], 1, 'Giọt nước mắt khơi dậy lòng đồng cảm + sự đồng cảnh ngộ → Mị cắt dây cứu.'),
    Q('A Phủ tiêu biểu cho?', ['Tầng lớp địa chủ','Người nông dân nghèo miền núi giàu sức sống, phản kháng','Trí thức','Lính'], 1, 'Hình tượng người nông dân miền núi - khoẻ khoắn, gan dạ, khát vọng tự do.'),
    Q('Khi được cắt trói, A Phủ làm gì?', ['Đứng yên','Quỳ xuống lạy','Quật sức vùng lên, chạy trốn cùng Mị','Trở về thống lí'], 2, '"Quật sức vùng lên" - sức sống mạnh mẽ → cùng Mị chạy đến Phiềng Sa, theo cách mạng.'),
    Q('Phong cách của Tô Hoài qua tác phẩm?', ['Trữ tình lãng mạn','Hiện thực sinh động + phong vị miền núi đậm đà','Tượng trưng','Sử thi'], 1, 'Hiện thực sắc nét, am hiểu phong tục + ngôn ngữ giàu chất tạo hình miền núi.'),
  ]),

  M(10, 'Vợ nhặt — Kim Lân', [
    Q('Truyện "Vợ nhặt" lấy bối cảnh?', ['Cách mạng tháng Tám','Nạn đói Ất Dậu 1945','Kháng chiến chống Pháp','Hợp tác xã'], 1, 'Bối cảnh nạn đói 1945 - hơn 2 triệu người chết.'),
    Q('Tên "Vợ nhặt" gợi điều gì?', ['Hôn nhân trang trọng','Thân phận con người rẻ rúng như món đồ nhặt được','Tình yêu lãng mạn','Hài hước'], 1, '"Nhặt" - như nhặt đồ rơi - thân phận con người bị hạ thấp đến tột cùng.'),
    Q('Nhân vật Tràng "nhặt" được vợ qua?', ['Một buổi hò hẹn','Vài bát bánh đúc + câu nói đùa','Mai mối','Cuộc thi'], 1, 'Tràng "tầm phơ tầm phào" + 4 bát bánh đúc → người đàn bà theo về làm vợ.'),
    Q('Bữa cơm ngày đói có món "chè khoán" thực chất là?', ['Chè đậu xanh','Cháo cám','Bánh chè ngọt','Chè đặc sản'], 1, 'Bà cụ Tứ múc "chè khoán" - thực ra là cháo cám - chi tiết đau đớn về nạn đói.'),
    Q('Hình ảnh "lá cờ đỏ phấp phới" ở cuối truyện mang ý nghĩa?', ['Trang trí','Tia sáng cách mạng, mở lối thoát cho người nghèo','Cảnh chiến tranh','Lễ hội'], 1, 'Hình ảnh lá cờ + đoàn người phá kho thóc - dự cảm cách mạng giải phóng.'),
    Q('Giá trị nhân đạo của Vợ nhặt?', ['Tố cáo nạn đói','Tố cáo + phát hiện khát vọng sống và yêu thương ngay bờ vực chết','Ca ngợi anh hùng','Triết lí'], 1, 'Vừa tố cáo tội ác phát xít Nhật-Pháp vừa khẳng định sức sống, khát vọng hạnh phúc.'),
  ]),

  M(11, 'Rừng xà nu — Nguyễn Trung Thành', [
    Q('Truyện "Rừng xà nu" sáng tác trong hoàn cảnh nào?', ['Sau 1975','Mùa hè 1965 - thời điểm Mỹ đổ quân vào miền Nam','Trước 1945','Thời chống Pháp'], 1, 'Viết mùa hè 1965 - khi Mỹ ồ ạt đổ quân vào miền Nam.'),
    Q('Hình tượng xà nu mang ý nghĩa biểu tượng cho?', ['Cây cối Tây Nguyên','Sức sống bất diệt + tinh thần đấu tranh của dân làng Xô Man','Lòng yêu thiên nhiên','Sự cô đơn'], 1, 'Xà nu - biểu tượng sức sống mãnh liệt, tinh thần đấu tranh của Tây Nguyên.'),
    Q('Câu mở "Làng ở trong tầm đại bác của đồn giặc" cho biết?', ['Làng yên bình','Hoàn cảnh chiến tranh ác liệt + tinh thần kiên cường','Vị trí địa lí','Thời tiết'], 1, 'Khẳng định ngay không khí chiến tranh + đặt nhân vật vào thử thách sinh tử.'),
    Q('Tnú khác Anh hùng Núp ở điểm?', ['Tnú không có vợ con','Tnú đại diện thế hệ trẻ tiếp nối, được giác ngộ cách mạng có tổ chức','Tnú không gan dạ','Tnú không yêu nước'], 1, 'Tnú - thế hệ tiếp nối, được giác ngộ qua tổ chức cách mạng - khác Núp tự phát.'),
    Q('Chi tiết "10 đầu ngón tay Tnú bốc cháy" có ý nghĩa?', ['Tai nạn','Chứng nhân tội ác giặc + biến đau thương thành căm thù → đi theo cách mạng','Cảnh báo','Bi kịch cá nhân'], 1, 'Mất vợ con, bị đốt 10 đầu ngón tay - nỗi đau cá nhân → căm thù → đi tìm cách mạng.'),
    Q('Khuynh hướng sử thi của tác phẩm thể hiện qua?', ['Đề tài lịch sử dân tộc + nhân vật phi thường + giọng hùng tráng','Tâm lí cá nhân','Triết lí trừu tượng','Hài hước'], 0, 'Khuynh hướng sử thi: đề tài chung dân tộc, nhân vật anh hùng, giọng trang trọng.'),
  ]),

  M(12, 'Những đứa con trong gia đình — Nguyễn Thi', [
    Q('Truyện "Những đứa con trong gia đình" viết về?', ['Miền Bắc XHCN','Một gia đình nông dân Nam Bộ kháng Mỹ','Hà Nội','Miền núi'], 1, 'Gia đình Việt - Chiến - Nam Bộ - tham gia kháng chiến chống Mỹ.'),
    Q('Tác phẩm sử dụng kết cấu?', ['Tuyến tính','Hồi tưởng đan xen - dòng ý thức của Việt khi bị thương','Mở','Vòng tròn'], 1, 'Kể qua dòng hồi tưởng đứt nối của Việt khi bị thương nặng - kết cấu hiện đại.'),
    Q('Hai chị em Chiến - Việt vừa giống nhau vừa khác nhau ở?', ['Hoàn cảnh','Đều yêu nước nhưng Chiến đảm đang chững chạc, Việt hồn nhiên trẻ con','Tuổi tác','Quê quán'], 1, 'Cùng truyền thống nhưng tính cách khác biệt - Chiến giống má, Việt vẫn trẻ con.'),
    Q('Hình ảnh "Cuốn sổ ghi truyền thống gia đình" tượng trưng?', ['Quyển sách thường','Sợi dây truyền thống nối các thế hệ','Tài sản','Học bạ'], 1, 'Cuốn sổ chú Năm ghi - biểu tượng truyền thống yêu nước, anh hùng nối các thế hệ.'),
    Q('Chi tiết hai chị em khiêng bàn thờ má sang gửi nhà chú Năm trước khi đi bộ đội?', ['Vô nghĩa','Thể hiện ý thức trách nhiệm với gia đình + quyết tâm đánh giặc','Sợ ma','Phép tắc'], 1, 'Chi tiết xúc động - ý thức trách nhiệm + quyết tâm chiến đấu trả thù nhà nợ nước.'),
    Q('Chất Nam Bộ đậm đặc của tác phẩm thể hiện qua?', ['Đề tài + cảnh sông nước + ngôn ngữ + tính cách bộc trực','Chỉ ở nhân vật','Chỉ ở cốt truyện','Chỉ ở ngôn ngữ'], 0, 'Đậm đặc chất Nam Bộ ở mọi mặt: bối cảnh, ngôn từ, tính cách, lối kể.'),
  ]),

  M(13, 'Chiếc thuyền ngoài xa — Nguyễn Minh Châu', [
    Q('"Chiếc thuyền ngoài xa" tiêu biểu cho chặng sáng tác nào của Nguyễn Minh Châu?', ['Trước 1975 - sử thi','Sau 1975 - khám phá đời sống cá nhân, đa diện','Thiếu nhi','Phê bình'], 1, 'Tiêu biểu sáng tác sau 1975 - chuyển từ sử thi sang khám phá đa chiều đời sống.'),
    Q('Phát hiện thứ nhất của Phùng là?', ['Cảnh bạo hành','Cảnh "đắt trời cho" - chiếc thuyền ngoài xa trong sương mù tuyệt mỹ','Người đàn bà','Ngôi làng'], 1, 'Phát hiện 1: vẻ đẹp toàn bích "cảnh đắt trời cho" - chiếc thuyền lưới vó trong sương.'),
    Q('Phát hiện thứ hai gây sốc là?', ['Bão tố','Cảnh người chồng đánh đập vợ tàn nhẫn ngay sau bức tranh đẹp','Cá lớn','Đám cưới'], 1, 'Ngay sau cảnh đẹp - phát hiện cảnh người chồng đánh vợ - đối lập gay gắt.'),
    Q('Người đàn bà hàng chài van xin toà án không bắt chồng vì?', ['Vì yêu chồng mù quáng','Vì những đứa con + thực tế cuộc sống mưu sinh cần đàn ông','Vì sợ','Vì truyền thống'], 1, 'Lí lẽ thực tế đau đớn: cần đàn ông chèo thuyền, cần cha cho con - không thể bỏ.'),
    Q('Thông điệp của tác phẩm về cách nhìn cuộc sống?', ['Đẹp luôn đúng','Đừng nhìn cuộc sống một chiều - phải đa diện, đi sâu bản chất','Phải nghệ thuật','Phải lí tưởng'], 1, 'Cần nhìn cuộc sống và con người trong tính đa diện, phức tạp - không đơn giản hoá.'),
    Q('Tấm ảnh nghệ thuật cuối truyện gợi suy ngẫm về?', ['Mối quan hệ giữa nghệ thuật và cuộc sống','Vẻ đẹp nghệ thuật','Triết lí cá nhân','Tình yêu'], 0, 'Tấm ảnh đẹp - nhưng Phùng thấy sau nó là người đàn bà nhọc nhằn - nghệ thuật phải gắn đời sống.'),
  ]),

  M(14, 'Hồn Trương Ba, da hàng thịt — Lưu Quang Vũ', [
    Q('"Hồn Trương Ba, da hàng thịt" thuộc thể loại?', ['Tiểu thuyết','Kịch nói hiện đại','Thơ','Truyện ngắn'], 1, 'Kịch nói - Lưu Quang Vũ là nhà soạn kịch tài hoa thập niên 80.'),
    Q('Bi kịch chính của Trương Ba là?', ['Nghèo đói','Sống "bên trong một đằng, bên ngoài một nẻo" - hồn xác không tương thích','Bị bệnh','Mất gia đình'], 1, 'Bi kịch tha hoá - sống nhờ thân xác hàng thịt → bị tha hoá dần.'),
    Q('Câu nói "Không thể bên trong một đằng, bên ngoài một nẻo được" thể hiện?', ['Khẩu hiệu','Triết lí: con người phải sống đúng mình, hài hoà thể xác - tâm hồn','Lời than','Lời chào'], 1, 'Triết lí cốt lõi: con người chỉ thực sự là mình khi tâm hồn và thể xác hài hoà.'),
    Q('Lựa chọn cuối cùng của Trương Ba?', ['Tiếp tục sống trong xác hàng thịt','Trả xác - chết hẳn, để hồn được trong sạch','Nhập xác cu Tị','Trốn đi'], 1, 'Trả xác, chấp nhận cái chết - để giữ nhân cách và yêu thương người thân.'),
    Q('Tác phẩm phê phán hiện tượng?', ['Chiến tranh','Sống giả tạo, chắp vá, đánh mất bản thân','Đói nghèo','Lười biếng'], 1, 'Phê phán lối sống giả, chắp vá, không là chính mình - rất thời sự thập niên 80.'),
    Q('Đặc sắc nghệ thuật của vở kịch?', ['Mượn cốt truyện dân gian + xung đột giàu chất triết lí + đối thoại sắc bén','Tả thực','Lãng mạn','Sử thi'], 0, 'Mượn cốt dân gian, xung đột sâu sắc giàu triết lí, đối thoại sắc sảo.'),
  ]),

  M(15, 'Người lái đò Sông Đà — Nguyễn Tuân', [
    Q('"Người lái đò Sông Đà" trích từ tập tuỳ bút nào?', ['Vang bóng một thời','Sông Đà (1960)','Hà Nội ta đánh Mỹ giỏi','Cảnh sắc và hương vị đất nước'], 1, 'Trích tập tuỳ bút "Sông Đà" (1960) - thành quả chuyến đi thực tế Tây Bắc.'),
    Q('Sông Đà được khắc hoạ với hai vẻ?', ['Đẹp và xấu','Hung bạo và trữ tình','Nhanh và chậm','Cũ và mới'], 1, 'Hai vẻ đối lập: hung bạo (ghềnh thác) - trữ tình (như áng tóc trữ tình).'),
    Q('Phong cách Nguyễn Tuân trong tuỳ bút này là?', ['Bình dị','Tài hoa, uyên bác, ngông - khám phá đối tượng từ góc thẩm mỹ và văn hoá','Hiện thực thuần','Khô khan'], 1, 'Phong cách tài hoa - uyên bác đặc trưng: kiến thức nhiều ngành, ngôn từ độc đáo.'),
    Q('Hình tượng ông lái đò tiêu biểu cho?', ['Trí thức','Người lao động nghệ sĩ - vẻ đẹp tài hoa trong "chất vàng mười" của con người','Nông dân','Lính'], 1, 'Người lái đò - hiện thân "chất vàng mười" của người lao động Tây Bắc - nghệ sĩ trên sông.'),
    Q('Cách tả thác đá "đá tướng oai phong lẫm liệt" sử dụng?', ['Tả thực','Nhân hoá + so sánh - đậm chất điện ảnh','Liệt kê','Đối lập'], 1, 'Nhân hoá đá thành "tướng" + so sánh giàu hình ảnh - chất điện ảnh đặc trưng.'),
    Q('Vẻ đẹp trữ tình của Sông Đà được tả?', ['Khô khan','"Tuôn dài tuôn dài như một áng tóc trữ tình" - so sánh độc đáo','Sơ sài','Chỉ ngắn gọn'], 1, 'So sánh "áng tóc trữ tình", màu nước xuân ngọc bích, thu lừ lừ chín đỏ - độc đáo.'),
  ]),

  M(16, 'Ai đã đặt tên cho dòng sông — Hoàng Phủ Ngọc Tường', [
    Q('Tác phẩm thuộc thể loại?', ['Truyện ngắn','Bút kí','Thơ','Kịch'], 1, 'Bút kí - kết hợp thực tế + cảm xúc trữ tình + tri thức đa ngành.'),
    Q('Dòng sông được nhân hoá thành?', ['Người đàn ông','Người con gái duyên dáng + người mẹ phù sa','Đứa trẻ','Cụ già'], 1, 'Nhân hoá sông Hương thành cô gái dịu dàng và bà mẹ phù sa văn hoá.'),
    Q('Vẻ đẹp sông Hương ở thượng nguồn được tả?', ['Êm dịu','Phóng khoáng + man dại như "bản trường ca rừng già"','Buồn bã','Bình thường'], 1, '"Bản trường ca của rừng già" - phóng khoáng, mãnh liệt nơi thượng nguồn.'),
    Q('Khi vào thành phố Huế, sông Hương được ví?', ['Cô gái thị thành','"Điệu slow tình cảm dành riêng cho Huế"','Người đàn ông trầm tư','Người mẹ'], 1, 'So sánh độc đáo: "điệu slow tình cảm" - chậm, êm, sâu lắng dành riêng Huế.'),
    Q('Tác phẩm khám phá sông Hương dưới góc nhìn?', ['Chỉ địa lí','Đa chiều: địa lí, lịch sử, văn hoá, thi ca','Chỉ lịch sử','Chỉ văn hoá'], 1, 'Đa chiều - địa lí, lịch sử (sông biên thuỳ), văn hoá (nhã nhạc), thi ca - kiến thức uyên bác.'),
    Q('Phong cách Hoàng Phủ Ngọc Tường?', ['Hiện thực','Trữ tình + suy tưởng + uyên bác - bút kí mang chất thơ','Khô khan','Sử thi'], 1, 'Phong cách trữ tình - suy tưởng, kiến thức uyên bác, bút kí thấm chất thơ.'),
  ]),

  M(17, 'Nghị luận xã hội — tư tưởng đạo lí', [
    Q('Bài nghị luận về tư tưởng đạo lí thường yêu cầu?', ['Kể chuyện','Giải thích - phân tích - chứng minh - bình luận - rút bài học','Tả cảnh','Thuyết minh'], 1, 'Quy trình: giải thích → phân tích/chứng minh → bình luận mở rộng → bài học.'),
    Q('Mở bài nghị luận tư tưởng đạo lí nên?', ['Dài dòng','Ngắn gọn - dẫn dắt - nêu vấn đề rõ ràng','Kể chuyện','Mô tả'], 1, 'Mở bài ngắn, dẫn dắt khéo, nêu rõ tư tưởng/câu nói cần bàn.'),
    Q('Khi giải thích "Có chí thì nên", bước đầu cần?', ['Bỏ qua','Giải nghĩa "chí", "nên" + nội dung câu','Phê phán','Chứng minh ngay'], 1, 'Phải giải thích từ khoá ("chí" - ý chí, "nên" - thành công) rồi nêu nội dung khái quát.'),
    Q('Phần bình luận mở rộng cần?', ['Chỉ khẳng định','Khẳng định cái đúng + phê phán mặt trái + bổ sung','Chỉ phê phán','Bỏ qua'], 1, 'Bình luận đa chiều: đúng ở đâu, sai ở đâu, cần bổ sung gì.'),
    Q('Dẫn chứng tốt cho bài nghị luận xã hội nên?', ['Chỉ trong sách','Đa dạng: lịch sử + đương đại + đời sống thực','Chỉ nước ngoài','Chỉ Việt Nam'], 1, 'Dẫn chứng đa dạng, có tính thời sự, tránh sáo mòn.'),
    Q('Bài học cuối cần?', ['Chung chung','Cụ thể - liên hệ bản thân - thiết thực','Dài dòng','Trừu tượng'], 1, 'Bài học cụ thể, gắn bản thân và thực tiễn - tránh khẩu hiệu sáo rỗng.'),
  ]),

  M(18, 'Ôn tập HK1 — kiểm tra giữa kì', [
    Q('Trong các tác phẩm sau, tác phẩm nào không phải thơ?', ['Tây Tiến','Việt Bắc','Vợ chồng A Phủ','Sóng'], 2, 'Vợ chồng A Phủ là truyện ngắn của Tô Hoài.'),
    Q('"Đất Nước" của Nguyễn Khoa Điềm có tư tưởng cốt lõi?', ['Đất Nước anh hùng','Đất Nước của Nhân dân','Đất Nước thiên nhiên','Đất Nước hiện đại'], 1, 'Tư tưởng "Đất Nước của Nhân dân" - quan niệm mới mẻ.'),
    Q('Phong cách nghệ thuật Nguyễn Tuân?', ['Bình dị','Tài hoa, uyên bác','Hiện thực thuần','Lãng mạn thuần'], 1, 'Phong cách tài hoa - uyên bác đặc trưng.'),
    Q('Bố cục bài Tây Tiến thường chia mấy phần?', ['2','3','4','5'], 2, 'Bài Tây Tiến chia 4 phần: kỉ niệm hành quân - đêm liên hoan và chiều Châu Mộc - chân dung Tây Tiến - lời thề.'),
    Q('Tác phẩm nào có nhân vật Mị?', ['Vợ nhặt','Vợ chồng A Phủ','Rừng xà nu','Chiếc thuyền ngoài xa'], 1, 'Mị là nhân vật chính trong Vợ chồng A Phủ - Tô Hoài.'),
    Q('Nghị luận xã hội về tư tưởng đạo lí cần các bước?', ['Kể - tả','Giải thích - phân tích - chứng minh - bình luận - bài học','Tả - thuyết minh','Tự sự'], 1, 'Quy trình chuẩn 5 bước cho bài NLXH tư tưởng đạo lí.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Nghị luận xã hội — hiện tượng đời sống', [
    Q('Nghị luận hiện tượng đời sống bàn về?', ['Câu nói danh nhân','Sự việc - hiện tượng diễn ra trong xã hội','Lí tưởng','Tác phẩm'], 1, 'Bàn về sự việc, hiện tượng có thực trong xã hội (tích cực hoặc tiêu cực).'),
    Q('Quy trình làm bài NLXH hiện tượng?', ['Tự do','Nêu hiện tượng - nguyên nhân - hậu quả - giải pháp - bài học','Kể chuyện','Tả'], 1, 'Quy trình: hiện tượng → nguyên nhân → hậu quả → giải pháp → bài học.'),
    Q('Khi bàn về "ô nhiễm môi trường", phần hậu quả cần?', ['Bỏ qua','Phân tích cụ thể - dẫn chứng - đa chiều (sức khoẻ, kinh tế, sinh thái)','Chung chung','Một mặt'], 1, 'Hậu quả phải cụ thể, đa chiều: sức khoẻ, kinh tế, môi sinh, văn hoá…'),
    Q('Giải pháp cần?', ['Lí tưởng','Khả thi + đồng bộ (cá nhân + tập thể + nhà nước)','Cá nhân thôi','Bỏ qua'], 1, 'Giải pháp đa cấp độ: cá nhân, cộng đồng, nhà nước, quốc tế.'),
    Q('Khi bàn hiện tượng tích cực (vd: từ thiện), nên?', ['Phê phán','Khẳng định ý nghĩa + nêu cách phát huy','Chỉ tả','Bỏ qua'], 1, 'Hiện tượng tích cực: khẳng định ý nghĩa, biểu dương, đề xuất nhân rộng.'),
    Q('Dẫn chứng nên?', ['Tự bịa','Cập nhật, có nguồn, đa dạng','Chỉ cũ','Chỉ nước ngoài'], 1, 'Dẫn chứng phải cập nhật, đa dạng, có sức thuyết phục.'),
  ]),

  M(20, 'Nghị luận văn học — phân tích đoạn thơ', [
    Q('Mở bài phân tích đoạn thơ cần?', ['Dài','Giới thiệu tác giả - tác phẩm - vị trí - nội dung khái quát đoạn','Ngắn','Tả'], 1, 'Mở bài: tác giả - tác phẩm - vị trí đoạn - nêu vấn đề.'),
    Q('Phân tích đoạn thơ cần chú trọng?', ['Tóm tắt','Khai thác hình ảnh - ngôn từ - biện pháp - âm điệu - mạch cảm xúc','Kể lại','Tả'], 1, 'Cần khai thác giá trị nghệ thuật + nội dung cảm xúc đan xen.'),
    Q('Khi phân tích "Sông Mã gầm lên khúc độc hành", cần?', ['Chỉ giải nghĩa','Nêu biện pháp (nhân hoá) + ý nghĩa biểu cảm + chất bi tráng','Bỏ qua','Chỉ kể'], 1, 'Phân tích biện pháp nghệ thuật + ý nghĩa - đặt trong mạch cảm xúc bài thơ.'),
    Q('Liên hệ - so sánh trong NLVH có vai trò?', ['Không cần','Mở rộng, làm nổi bật ý kiến, tăng chiều sâu','Lan man','Trang trí'], 1, 'Liên hệ tác phẩm cùng đề tài/phong cách - làm nổi bật giá trị.'),
    Q('Kết bài NLVH cần?', ['Lặp lại mở bài','Khẳng định giá trị nội dung + nghệ thuật + ý nghĩa','Tóm tắt','Kể chuyện'], 1, 'Kết bài khẳng định lại giá trị + nâng cao ý nghĩa.'),
    Q('Lỗi thường gặp khi phân tích đoạn thơ?', ['Diễn xuôi - kể nội dung mà không phân tích nghệ thuật','Quá ngắn','Quá sâu','Quá kĩ'], 0, 'Lỗi phổ biến: diễn xuôi câu chữ thay vì phân tích giá trị nghệ thuật.'),
  ]),

  M(21, 'Nghị luận văn học — phân tích nhân vật', [
    Q('Phân tích nhân vật cần làm rõ?', ['Chỉ hành động','Hoàn cảnh - ngoại hình - tính cách - hành động - tâm lí - ý nghĩa','Chỉ tâm lí','Chỉ ngoại hình'], 1, 'Phân tích đa diện: hoàn cảnh, ngoại hình, tính cách, hành động, tâm lí, ý nghĩa.'),
    Q('Khi phân tích Mị (Vợ chồng A Phủ), trọng tâm là?', ['Ngoại hình','Diễn biến tâm lí + sức sống tiềm tàng','Hành động ban đầu','Lời nói'], 1, 'Trọng tâm: diễn biến tâm lí Mị từ cam chịu → thức tỉnh → vùng dậy.'),
    Q('Phân tích Tnú (Rừng xà nu) cần làm rõ?', ['Chỉ kể','Hình tượng anh hùng thế hệ mới + bi kịch cá nhân chuyển hoá thành sức mạnh','Chỉ tả','Bỏ qua'], 1, 'Tnú - anh hùng thế hệ mới: bi kịch riêng → đau thương chung → vũ trang cách mạng.'),
    Q('Khi phân tích người đàn bà hàng chài, cần?', ['Phê phán','Đồng cảm + thấy được vẻ đẹp khuất lấp + thông điệp về cách nhìn','Chỉ tả ngoại hình','Bỏ qua'], 1, 'Cảm thông, phát hiện vẻ đẹp khuất lấp - thông điệp cuộc sống đa diện.'),
    Q('So sánh nhân vật trong NLVH cần?', ['Cùng tác giả','Có tiêu chí rõ + nét chung và nét riêng','Tuỳ ý','Chỉ khác biệt'], 1, 'So sánh có tiêu chí, làm rõ nét chung + nét riêng - tránh so sánh tuỳ tiện.'),
    Q('Trích dẫn dẫn chứng từ tác phẩm?', ['Tự ý sửa','Chính xác - đặt trong ngoặc kép - phân tích sau khi trích','Bịa','Dài'], 1, 'Trích chính xác, đặt ngoặc kép, có phân tích đi kèm - tránh trích suông.'),
  ]),

  M(22, 'Một người Hà Nội — Nguyễn Khải', [
    Q('Truyện "Một người Hà Nội" viết về?', ['Lãnh tụ','Cô Hiền - người Hà Nội mang vẻ đẹp văn hoá truyền thống + bản lĩnh','Người lính','Nông dân'], 1, 'Cô Hiền - biểu tượng "hạt bụi vàng" của văn hoá Hà Nội.'),
    Q('Cô Hiền được ví như?', ['Hoa','"Hạt bụi vàng của Hà Nội"','Sông','Mây'], 1, '"Hạt bụi vàng" - tinh tế, sang trọng, bền bỉ - tinh hoa văn hoá Thăng Long.'),
    Q('Tác phẩm thuộc giai đoạn sáng tác?', ['Trước 1945','Sau 1975 - chiêm nghiệm - đa thanh','Kháng chiến','Đổi mới sơ kì'], 1, 'Sau 1975, đặc biệt thời Đổi mới - chất chiêm nghiệm, đối thoại.'),
    Q('Phong cách Nguyễn Khải?', ['Trữ tình','Triết luận + đối thoại sắc bén + chất chính luận','Hiện thực thuần','Lãng mạn'], 1, 'Phong cách triết luận, đối thoại sắc bén - văn xuôi chính luận đặc trưng.'),
    Q('Cô Hiền lưu giữ truyền thống qua?', ['Buôn bán','Cách ăn mặc, dạy con, sinh hoạt - chuẩn mực và bản lĩnh','Du lịch','Kinh doanh'], 1, 'Giữ nề nếp: ăn mặc, dạy con, sinh hoạt - thể hiện văn hoá Hà thành.'),
    Q('Thông điệp tác phẩm?', ['Phê phán','Tin tưởng vào vẻ đẹp văn hoá truyền thống được giữ gìn qua thời gian','Bi quan','Trung tính'], 1, 'Niềm tin vào sự bền vững của giá trị văn hoá truyền thống dù đời sống đổi thay.'),
  ]),

  M(23, 'Số phận con người — Sô-lô-khốp', [
    Q('"Số phận con người" thuộc văn học?', ['Pháp','Nga - Xô-viết','Mỹ','Anh'], 1, 'Tác phẩm của M. Sô-lô-khốp - nhà văn Nga, Nobel 1965.'),
    Q('Nhân vật chính An-đrây Xô-cô-lốp là?', ['Sĩ quan cao cấp','Người lính bình thường - mất gia đình trong Thế chiến II','Trí thức','Nông dân'], 1, 'Người lính Hồng quân - mất toàn bộ gia đình, sống sót sau chiến tranh.'),
    Q('Xô-cô-lốp nhận Va-ni-a vì?', ['Có lợi','Đồng cảm với đứa trẻ mồ côi - khôi phục ý nghĩa sống','Bị ép','Tình cờ'], 1, 'Đồng cảm với cảnh mồ côi của Va-ni-a + cần lí do để sống tiếp.'),
    Q('Tác phẩm khái quát?', ['Chiến công','Số phận - đau thương + nghị lực phi thường của con người sau chiến tranh','Tình yêu','Hài hước'], 1, 'Số phận con người Nga sau chiến tranh - đau thương nhưng giàu nghị lực, nhân ái.'),
    Q('Bút pháp nổi bật?', ['Sử thi','Hiện thực + tâm lí + chất bi tráng','Lãng mạn','Tượng trưng'], 1, 'Hiện thực sâu sắc + khắc hoạ tâm lí + chất bi tráng - phong cách Sô-lô-khốp.'),
    Q('Thông điệp?', ['Chiến tranh là tốt','Tố cáo chiến tranh + ca ngợi sức mạnh tinh thần và lòng nhân ái con người','Trung tính','Bi quan'], 1, 'Tố cáo chiến tranh + tin vào nghị lực và tình thương người.'),
  ]),

  M(24, 'Thuốc — Lỗ Tấn', [
    Q('"Thuốc" của Lỗ Tấn thuộc văn học?', ['Trung Quốc','Nhật','Việt Nam','Hàn Quốc'], 0, 'Lỗ Tấn (1881-1936) - nhà văn lớn Trung Quốc đầu thế kỉ XX.'),
    Q('"Thuốc" trong truyện là?', ['Thuốc bổ','Bánh bao tẩm máu người tử tù - thuốc chữa lao','Thảo dược','Thuốc tây'], 1, '"Thuốc" - bánh bao tẩm máu Hạ Du (tử tù cách mạng) làm thuốc chữa bệnh lao.'),
    Q('Ý nghĩa biểu tượng của "thuốc"?', ['Y học','Sự u mê, lạc hậu của quần chúng + bi kịch xa cách giữa cách mạng và nhân dân','Đặc sản','Văn hoá'], 1, 'Phê phán sự u mê + bi kịch người làm cách mạng (Hạ Du) bị quần chúng dửng dưng.'),
    Q('Hai cha con họ Hoa và Hạ Du có quan hệ?', ['Hàng xóm','Bi kịch song song - một bên mua thuốc cứu con, một bên là người chết bị lấy máu','Bạn thân','Họ hàng'], 1, 'Hai gia đình - hai bi kịch song song, gặp nhau ở nghĩa địa - hình ảnh xót xa.'),
    Q('Hình ảnh "vòng hoa trên mộ Hạ Du" mang ý nghĩa?', ['Trang trí','Hi vọng vẫn còn người hiểu, niềm tin lớp người tiếp nối','Phong tục','Lễ hội'], 1, 'Vòng hoa - tín hiệu hi vọng: vẫn có người tiếp nối, hiểu cách mạng.'),
    Q('Lỗ Tấn viết "Thuốc" nhằm?', ['Ca ngợi xã hội','Cảnh tỉnh quốc dân, phê phán sự ngu muội tinh thần','Giải trí','Lịch sử'], 1, 'Văn chương Lỗ Tấn là "thuốc" chữa căn bệnh tinh thần dân tộc - cảnh tỉnh.'),
  ]),

  M(25, 'Ông già và biển cả — Hemingway', [
    Q('"Ông già và biển cả" của tác giả nào?', ['Steinbeck','E. Hemingway - Nobel 1954','Faulkner','Twain'], 1, 'Ernest Hemingway - nhà văn Mỹ, Nobel Văn học 1954.'),
    Q('Nguyên lí "tảng băng trôi" trong nghệ thuật Hemingway nghĩa là?', ['Viết về băng','Phần nổi 1/8 ngôn từ, phần chìm 7/8 ý nghĩa - lối viết hàm súc, đa nghĩa','Tả thiên nhiên','Tả tâm lí'], 1, 'Nguyên lí "tảng băng trôi": phần chìm ý nghĩa nhiều hơn phần nổi câu chữ.'),
    Q('Cuộc chiến với cá kiếm tượng trưng?', ['Đánh cá thường','Cuộc đấu giữa con người và thiên nhiên + khát vọng chinh phục + ý chí','Mạo hiểm','Du lịch'], 1, 'Cuộc đối đầu - ẩn dụ về con người chinh phục thiên nhiên, vượt giới hạn.'),
    Q('Câu nói nổi tiếng của ông lão?', ['"Tôi mệt rồi"','"Con người có thể bị huỷ diệt nhưng không thể bị đánh bại"','"Cá to quá"','"Biển đẹp quá"'], 1, 'Câu nói thể hiện triết lí Hemingway: tinh thần bất khuất của con người.'),
    Q('Dù mất con cá khi vào bờ, ông lão vẫn?', ['Thất bại','Chiến thắng tinh thần - khẳng định phẩm giá','Bỏ cuộc','Trở về tay không'], 1, 'Thắng lợi tinh thần - khẳng định ý chí và phẩm giá con người.'),
    Q('Phong cách Hemingway?', ['Dài dòng','Ngôn ngữ hàm súc + đối thoại ngắn + chiều sâu ẩn dụ','Trữ tình lãng mạn','Triết lí khô khan'], 1, 'Phong cách hàm súc - đối thoại tinh giản - đa nghĩa qua biểu tượng.'),
  ]),

  M(26, 'Văn bản nhật dụng - thông tin', [
    Q('Văn bản nhật dụng có đặc điểm?', ['Văn học cổ','Cập nhật vấn đề thời sự, có ý nghĩa với cuộc sống đương đại','Hư cấu','Cổ điển'], 1, 'Cập nhật vấn đề thời sự, gần đời sống - giáo dục công dân.'),
    Q('Khi đọc văn bản thông tin, cần chú ý?', ['Cảm xúc','Thông tin chính - số liệu - nguồn - tính khách quan','Ngôn ngữ thơ','Cốt truyện'], 1, 'Tập trung thông tin chính, số liệu, nguồn tin, tính khách quan.'),
    Q('Để xác định độ tin cậy thông tin, cần xem?', ['Tiêu đề','Nguồn + tác giả + ngày + đối chiếu nhiều nguồn','Hình ảnh','Độ dài'], 1, 'Đánh giá độ tin cậy: nguồn, tác giả, thời gian, đối chiếu chéo.'),
    Q('Mục đích chính của văn bản thông tin?', ['Giải trí','Cung cấp thông tin khách quan, chính xác','Biểu cảm','Tranh luận'], 1, 'Mục đích cốt lõi: cung cấp thông tin khách quan - khác văn nghệ thuật.'),
    Q('Văn bản nhật dụng có thể là?', ['Chỉ báo chí','Đa dạng: báo, kí, tuỳ bút, bình luận, kiến nghị… về vấn đề thời sự','Chỉ thơ','Chỉ truyện'], 1, 'Nhiều thể loại: báo chí, bình luận, tuỳ bút, kí - miễn bàn vấn đề đời sống.'),
    Q('Tiếp nhận văn bản nhật dụng cần?', ['Cảm tính','Tỉnh táo - phê phán - liên hệ thực tế','Mơ mộng','Bỏ qua'], 1, 'Cần đọc tỉnh táo, phê phán, liên hệ thực tiễn để áp dụng.'),
  ]),

  M(27, 'Ôn luyện đề đọc - hiểu', [
    Q('Phần đọc hiểu đề thi tốt nghiệp thường gồm?', ['1 câu','4 câu - nhận biết → thông hiểu → vận dụng','5 câu','3 câu'], 1, 'Đề chuẩn 4 câu theo mức độ: nhận biết, thông hiểu, vận dụng (thấp + cao).'),
    Q('Câu nhận biết thường hỏi về?', ['Phân tích sâu','Phương thức biểu đạt, thể thơ, biện pháp tu từ - nhận diện','Sáng tạo','Đánh giá'], 1, 'Câu 1 (nhận biết): xác định phương thức, thể loại, biện pháp - mức nhận diện.'),
    Q('Câu thông hiểu yêu cầu?', ['Chép','Giải thích ý nghĩa từ ngữ, hình ảnh, câu trong văn bản','Bỏ qua','Vẽ'], 1, 'Câu 2 (thông hiểu): cắt nghĩa từ ngữ, hình ảnh - hiểu nội dung trực tiếp.'),
    Q('Câu vận dụng cao thường?', ['Chép thuộc','Nêu suy nghĩ/quan điểm bản thân về vấn đề từ văn bản','Tóm tắt','Dịch'], 1, 'Câu 4 (vận dụng cao): trình bày quan điểm cá nhân - viết đoạn ngắn 5-7 dòng.'),
    Q('Khi xác định phương thức biểu đạt, có mấy phương thức chính?', ['3','6 (tự sự, miêu tả, biểu cảm, thuyết minh, nghị luận, hành chính-công vụ)','4','5'], 1, '6 phương thức biểu đạt theo SGK Ngữ văn.'),
    Q('Trả lời đọc hiểu cần?', ['Dài dòng','Ngắn gọn, trực tiếp, đúng trọng tâm câu hỏi','Văn vẻ','Bay bổng'], 1, 'Trả lời ngắn gọn, trực tiếp, đúng yêu cầu - không lan man.'),
  ]),

  M(28, 'Ôn luyện viết đoạn NLXH 200 chữ', [
    Q('Đoạn văn NLXH 200 chữ trong đề thi yêu cầu?', ['Bài văn dài','Đoạn ngắn ~200 chữ - bàn 1 khía cạnh vấn đề','Truyện','Thơ'], 1, 'Đoạn ngắn 200 chữ - tập trung 1 vấn đề/khía cạnh - tránh viết bài dài.'),
    Q('Cấu trúc đoạn 200 chữ?', ['Tự do','Mở - giải thích ngắn - bàn luận - bài học - kết','Chỉ kể','Chỉ tả'], 1, 'Cấu trúc nhỏ gọn: mở đoạn → giải thích → bàn → liên hệ → kết.'),
    Q('Mở đoạn nên?', ['Dài','1-2 câu giới thiệu trực tiếp vấn đề','Kể chuyện','Dẫn dắt xa'], 1, 'Mở trực tiếp - không dẫn dắt vòng vo trong đoạn ngắn 200 chữ.'),
    Q('Phần bàn luận trong 200 chữ tập trung?', ['Mọi khía cạnh','1-2 luận điểm cốt lõi + 1-2 dẫn chứng tiêu biểu','Liệt kê','Mơ hồ'], 1, 'Chỉ chọn 1-2 luận điểm, 1-2 dẫn chứng - tránh dàn trải.'),
    Q('Khi viết "bàn về lòng dũng cảm" trong 200 chữ, nên?', ['Định nghĩa dài','Giải thích ngắn + vai trò + dẫn chứng tiêu biểu + bài học','Kể chuyện dài','Tả người'], 1, 'Đi nhanh: giải thích → vai trò → 1-2 dẫn chứng → bài học liên hệ.'),
    Q('Lỗi thường gặp ở đoạn 200 chữ?', ['Quá ngắn','Vượt độ dài, lan man, không đủ phần bài học','Quá đúng','Quá hay'], 1, 'Vượt độ dài, lan man, thiếu liên hệ - giảm điểm.'),
  ]),

  M(29, 'Ôn luyện viết bài NLVH', [
    Q('Bài NLVH thường yêu cầu?', ['Tả cảnh','Phân tích/cảm nhận đoạn thơ - đoạn văn - nhân vật - tác phẩm','Kể chuyện','Thuyết minh'], 1, 'NLVH: phân tích, cảm nhận - làm rõ giá trị nội dung và nghệ thuật.'),
    Q('Mở bài NLVH cần?', ['Tả cảnh','Giới thiệu tác giả - tác phẩm - vấn đề nghị luận','Kể','Hỏi'], 1, 'Mở bài: tác giả - tác phẩm - vị trí - vấn đề cần bàn.'),
    Q('Thân bài tốt cần?', ['Kể lại','Có luận điểm rõ + phân tích nghệ thuật + dẫn chứng + liên hệ','Tả thực','Bỏ qua'], 1, 'Luận điểm mạch lạc - phân tích nghệ thuật cụ thể - liên hệ - mở rộng.'),
    Q('Khi phân tích thơ, cần làm rõ?', ['Cốt truyện','Mạch cảm xúc + ngôn từ + hình ảnh + biện pháp + âm điệu','Nhân vật','Bối cảnh'], 1, 'Thơ trữ tình: mạch cảm xúc + giá trị nghệ thuật ngôn từ.'),
    Q('Khi phân tích đoạn văn xuôi, chú trọng?', ['Câu chữ','Tình huống + nhân vật + giọng điệu + chi tiết nghệ thuật + thông điệp','Tả cảnh','Đối thoại'], 1, 'Văn xuôi: tình huống, nhân vật, giọng điệu, chi tiết - chứ không "tả".'),
    Q('Kết bài NLVH?', ['Lặp','Khẳng định giá trị + nâng tầm ý nghĩa + mở rộng','Hỏi','Tả'], 1, 'Khẳng định lại + nâng tầm giá trị tác phẩm/đoạn trích.'),
  ]),

  M(30, 'So sánh - đối chiếu trong NLVH', [
    Q('Dạng so sánh trong NLVH thường gặp?', ['Tự do','So sánh 2 đoạn thơ/văn cùng đề tài hoặc cùng tác giả','Tả','Kể'], 1, 'Dạng so sánh: hai đoạn cùng đề tài, cùng phong cách, cùng tác giả khác giai đoạn.'),
    Q('Tiêu chí so sánh cần?', ['Tuỳ ý','Rõ ràng: nội dung - nghệ thuật - phong cách - hoàn cảnh','Mơ hồ','Không có'], 1, 'Tiêu chí rõ giúp so sánh có hệ thống, tránh tuỳ tiện.'),
    Q('Cấu trúc bài so sánh hợp lí?', ['Chỉ tả 2 đối tượng','Phân tích lần lượt từng đối tượng → so sánh điểm chung-riêng → đánh giá','Kể','Lẫn lộn'], 1, 'Cấu trúc: phân tích lần lượt → đối sánh tổng hợp → đánh giá ý nghĩa.'),
    Q('Khi so sánh hai đoạn thơ, trọng tâm?', ['Câu chữ riêng lẻ','Nội dung cảm xúc + giá trị nghệ thuật + nét chung-riêng','Số dòng','Số chữ'], 1, 'So sánh nội dung cảm xúc + nghệ thuật - phát hiện nét chung và độc đáo.'),
    Q('Lưu ý khi so sánh?', ['Chỉ tìm khác','Cả giống + khác - đặt trong bối cảnh tác giả/thời đại','Chỉ tìm giống','Bỏ qua bối cảnh'], 1, 'Tìm cả giống lẫn khác, đặt trong bối cảnh cụ thể - giải thích vì sao có nét đó.'),
    Q('Kết bài so sánh?', ['Lặp','Khẳng định nét chung của thời đại/đề tài + nét riêng độc đáo','Hỏi','Tả'], 1, 'Khẳng định cái chung (thời đại/đề tài) + cái riêng (cá tính sáng tạo).'),
  ]),

  M(31, 'Phong cách ngôn ngữ + biện pháp tu từ', [
    Q('Có mấy phong cách ngôn ngữ chính?', ['4','6 (sinh hoạt, nghệ thuật, khoa học, hành chính, báo chí, chính luận)','5','7'], 1, '6 phong cách ngôn ngữ trong SGK Ngữ văn.'),
    Q('Phong cách ngôn ngữ nghệ thuật có đặc trưng?', ['Khô khan','Tính hình tượng + tính truyền cảm + tính cá thể hoá','Chính xác','Khách quan'], 1, '3 đặc trưng: hình tượng, truyền cảm, cá thể hoá.'),
    Q('Phong cách báo chí có đặc trưng?', ['Hư cấu','Tính thông tin thời sự + ngắn gọn + sinh động hấp dẫn','Trừu tượng','Riêng tư'], 1, '3 đặc trưng: thông tin thời sự, ngắn gọn, sinh động hấp dẫn.'),
    Q('Biện pháp tu từ "Người Cha mái tóc bạc" (chỉ Bác Hồ) là?', ['Ẩn dụ','Ẩn dụ','Hoán dụ','So sánh'], 0, 'Ẩn dụ - lấy hình ảnh Người Cha để chỉ Bác Hồ qua nét tương đồng phẩm chất.'),
    Q('"Một cây làm chẳng nên non / Ba cây chụm lại nên hòn núi cao" là?', ['So sánh','Hoán dụ + ẩn dụ','Nhân hoá','Điệp ngữ'], 1, '"Cây" hoán dụ chỉ người; cả câu ẩn dụ về sức mạnh đoàn kết.'),
    Q('"Mặt trời của bắp thì nằm trên đồi / Mặt trời của mẹ em nằm trên lưng" - phép?', ['So sánh','Ẩn dụ (mặt trời = em bé)','Hoán dụ','Nhân hoá'], 1, '"Mặt trời của mẹ" ẩn dụ chỉ em bé - là nguồn sống của mẹ.'),
  ]),

  M(32, 'Các thao tác lập luận', [
    Q('Có mấy thao tác lập luận cơ bản?', ['3','6 (giải thích, phân tích, chứng minh, so sánh, bình luận, bác bỏ)','5','7'], 1, '6 thao tác lập luận - học sinh phải nắm vững khi viết NL.'),
    Q('Thao tác "giải thích" nhằm?', ['Khẳng định','Cắt nghĩa, làm rõ nội dung khái niệm/vấn đề','Phản bác','Liệt kê'], 1, 'Giải thích: làm rõ khái niệm, từ ngữ, nội dung vấn đề.'),
    Q('Thao tác "bác bỏ" nhằm?', ['Đồng ý','Dùng lí lẽ/dẫn chứng để chỉ ra cái sai của ý kiến/quan điểm','Tả','Kể'], 1, 'Bác bỏ: phản biện ý kiến sai bằng lí lẽ và dẫn chứng.'),
    Q('Thao tác "bình luận" yêu cầu?', ['Tóm tắt','Đánh giá đúng-sai, hay-dở + mở rộng vấn đề','Chỉ giải thích','Kể'], 1, 'Bình luận: đánh giá + mở rộng - thể hiện chính kiến.'),
    Q('Một bài văn NL hay cần?', ['Một thao tác','Kết hợp nhiều thao tác linh hoạt','Tránh thao tác','Bắt buộc cả 6'], 1, 'Kết hợp linh hoạt nhiều thao tác - làm bài lập luận sắc, đa diện.'),
    Q('Thao tác "phân tích" khác "chứng minh" ở?', ['Không khác','Phân tích chia tách - chứng minh khẳng định bằng dẫn chứng','Giống','Trái nhau'], 1, 'Phân tích: chia tách đối tượng để khảo sát; chứng minh: dùng dẫn chứng khẳng định.'),
  ]),

  M(33, 'Đề tổng hợp - luyện đề', [
    Q('Khi gặp đề "Cảm nhận về đoạn thơ X", học sinh cần?', ['Tóm tắt','Phân tích kĩ giá trị nghệ thuật + bày tỏ cảm xúc cá nhân','Kể','Tả'], 1, '"Cảm nhận" = phân tích + bộc lộ rung cảm cá nhân - cá tính người viết.'),
    Q('Đề "So sánh hai đoạn trích Tây Tiến và Việt Bắc" thuộc dạng?', ['NLXH','NLVH dạng so sánh','Đọc hiểu','Tả'], 1, 'NLVH so sánh - cần tiêu chí rõ + đối sánh cụ thể.'),
    Q('Đề "Phân tích hình tượng người lính trong Tây Tiến và Đồng chí" trọng tâm?', ['Tả','Làm rõ chân dung người lính ở 2 thời điểm/hoàn cảnh + đối sánh','Kể','Bình'], 1, 'Phân tích chân dung + so sánh - vẻ đẹp người lính qua hai bài thơ.'),
    Q('Thời gian làm bài thi tốt nghiệp môn Văn?', ['90 phút','120 phút','150 phút','180 phút'], 1, 'Đề thi tốt nghiệp THPT môn Ngữ văn: 120 phút (tự luận hoàn toàn).'),
    Q('Phân bố thời gian hợp lí cho đề 120 phút (đọc hiểu 3đ + NLXH 2đ + NLVH 5đ)?', ['Đều','~20p + 25p + 70p + 5p kiểm tra','Tuỳ ý','30+30+60'], 1, 'Phân bổ theo điểm: đọc hiểu 20p, NLXH 25p, NLVH 70p, dư 5p kiểm tra.'),
    Q('Lỗi cần tránh khi làm bài thi?', ['Viết tắt','Sai chính tả, lạc đề, viết tắt, gạch xoá nhiều','Quá kĩ','Quá đúng'], 1, 'Tránh sai chính tả, lạc đề, viết tắt, trình bày bẩn - mất điểm trình bày.'),
  ]),

  M(34, 'Ôn tập tổng hợp - đề minh hoạ', [
    Q('Tác phẩm nào KHÔNG thuộc chương trình thi tốt nghiệp THPT?', ['Tây Tiến','Vợ nhặt','Chí Phèo (lớp 11)','Sóng'], 2, 'Chí Phèo - chương trình lớp 11, không nằm trong đề thi tốt nghiệp.'),
    Q('Tác phẩm văn học nước ngoài lớp 12 gồm?', ['Tây Tiến','Thuốc - Số phận con người - Ông già và biển cả','Việt Bắc','Sóng'], 1, '3 tác phẩm văn học nước ngoài lớp 12.'),
    Q('Câu "Đất Nước có trong những cái ngày xửa ngày xưa mẹ thường hay kể" gợi?', ['Triết lí','Đất Nước hiện diện trong văn hoá dân gian, gần gũi','Lịch sử','Chiến tranh'], 1, 'Đất Nước có trong văn hoá dân gian, lời ru, cổ tích - gần gũi với mỗi người.'),
    Q('Tác giả "Tây Tiến" có tên thật?', ['Bùi Đình Diệm','Bùi Đình Diệm (bút danh Quang Dũng)','Tô Hoài','Nguyễn Khoa Điềm'], 1, 'Tên thật Bùi Đình Diệm - bút danh Quang Dũng.'),
    Q('"Vợ nhặt" thể hiện thông điệp nổi bật?', ['Bi quan','Khát vọng sống và tin yêu giữa hoàn cảnh khốn cùng nhất','Chiến tranh','Triết lí'], 1, 'Khát vọng sống và tình người ngay trong nạn đói khủng khiếp.'),
    Q('Khi viết NLVH, cần có cảm xúc và?', ['Kiến thức + kĩ năng + cá tính','Chỉ kiến thức','Chỉ cảm xúc','Chỉ trích dẫn'], 0, 'Bài NLVH tốt: kiến thức vững + kĩ năng lập luận + cá tính riêng + cảm xúc chân thành.'),
  ]),

  M(35, 'Tổng kết - chuẩn bị thi tốt nghiệp', [
    Q('Cấu trúc đề thi tốt nghiệp THPT môn Ngữ văn?', ['1 phần','2 phần: Đọc hiểu (3đ) + Làm văn (NLXH 2đ + NLVH 5đ)','3 phần','4 phần'], 1, 'Đề chuẩn: Đọc hiểu 3đ + Làm văn 7đ (NLXH 2đ + NLVH 5đ).'),
    Q('Thời gian thi tốt nghiệp môn Văn?', ['90p','120 phút','150p','180p'], 1, '120 phút - tự luận hoàn toàn.'),
    Q('Để học tốt môn Văn, học sinh cần?', ['Học thuộc','Đọc tác phẩm + nắm kiến thức + rèn kĩ năng viết + cảm xúc chân thành','Chỉ học mẫu','Chỉ học vẹt'], 1, 'Phải đọc trực tiếp tác phẩm + kĩ năng viết + tránh học vẹt văn mẫu.'),
    Q('Trong NLVH, dẫn chứng tốt nhất là?', ['Từ Internet','Trích chính xác từ tác phẩm','Tự sáng tác','Mượn'], 1, 'Dẫn chứng trực tiếp từ tác phẩm - trích chính xác, có phân tích.'),
    Q('Lỗi nguy hiểm nhất khi làm văn?', ['Sai chính tả nhẹ','Lạc đề - không bàn đúng yêu cầu','Trình bày','Độ dài'], 1, 'Lạc đề là lỗi nặng nhất - dù viết hay vẫn mất điểm lớn.'),
    Q('Lời khuyên cuối: trước khi nộp bài cần?', ['Nộp ngay','Đọc lại - soát lỗi - kiểm tra mạch lập luận','Sửa nhiều','Gạch xoá'], 1, 'Dành 5 phút cuối đọc soát chính tả, mạch lập luận, dấu câu.'),
  ]),
];

export const H12NV_SCENARIOS = indexBy(H12NV_WEEKS);
