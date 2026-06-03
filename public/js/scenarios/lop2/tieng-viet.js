// ============================================================
// Lớp 2 · TIẾNG VIỆT — 36 tuần
// Bám SGK GDPT 2018 (Cánh Diều / Kết nối / Chân trời).
// 10 tiết/tuần — môn nhiều tiết nhất.
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2TV', 'tieng-viet', n, title, qs, opts);

export const P2TV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập âm – vần đã học (Lớp 1)', [
    Q('Vần "an" gồm những âm gì?', ['Âm "ă" + "n"', 'Âm "a" + âm cuối "nh"', 'Một âm duy nhất', 'Âm "a" + âm cuối "n"'], 3, 'Vần "an" gồm âm chính "a" + âm cuối "n".'),
    Q('Tiếng "trường" có mấy âm?', ['4 phần', '3 phần', '2 phần (đầu + vần)', '1 âm'], 2, 'Tiếng có âm đầu "tr" và vần "ường".'),
    Q('Sắp xếp bảng chữ cái: c, a, b, đ', ['c, b, a, đ', 'a, b, c, đ', 'b, a, c, đ', 'đ, c, b, a'], 1, 'Bảng chữ cái: a-ă-â-b-c…-đ.'),
    Q('Tiếng "khoẻ" có vần là?', ['oẻ', 'oe (không có dấu hỏi)', 'khoẻ (cả tiếng)', 'kh (chỉ là âm đầu)'], 0, 'Tiếng "khoẻ": âm đầu "kh" + vần "oẻ".'),
    Q('Chữ nào viết HOA: "việt nam"?', ['V và N (Việt Nam)', 'Chỉ V (Việt nam)', 'Không cần viết hoa', 'Chỉ "việt"'], 0, 'Tên riêng → viết hoa cả 2 chữ.'),
  ]),

  M(2, 'Tập đọc: "Có công mài sắt, có ngày nên kim"', [
    Q('Câu "có công mài sắt, có ngày nên kim" khuyên?', ['Kiên trì sẽ thành công', 'Mài sắt cho nhanh', 'Mua kim cho rẻ', 'Đừng kiên nhẫn'], 0, 'Bài học: kiên trì + chăm chỉ → thành công.'),
    Q('Cậu bé trong truyện ban đầu thế nào?', ['Giỏi nhất lớp', 'Lười, mau chán', 'Chăm học', 'Rất khỏe'], 1, 'Cậu lười, mau chán nên mới được bà cụ dạy.'),
    Q('Bà cụ trong truyện đang làm gì?', ['Mài sắt thành kim', 'Đan rổ', 'Nấu cơm', 'Đọc sách'], 0, 'Bà mài thỏi sắt → ngày nào đó sẽ thành kim khâu.'),
    Q('Bài học chính của truyện?', ['Lười thì có quà', 'Không cần học', 'Kiên trì làm việc khó cũng thành', 'Ngủ thật nhiều'], 2, 'Kiên trì + nỗ lực = thành công.'),
    Q('"Mài" nghĩa là?', ['Cắt nhỏ', 'Đập vỡ', 'Cọ xát đều, đều một vật cứng', 'Bóp nát'], 2, '"Mài" = cọ xát để làm mòn dần.'),
  ]),

  M(3, 'Tập đọc: "Phần thưởng"', [
    Q('Bài "Phần thưởng" nói về?', ['Đi du lịch', 'Đi thi học sinh giỏi', 'Đua xe', 'Tình bạn và tấm lòng tốt'], 3, 'Bạn Na không học giỏi nhất nhưng tốt bụng nên được thưởng.'),
    Q('Vì sao Na được phần thưởng đặc biệt?', ['Đẹp nhất', 'Vẽ đẹp nhất', 'Học giỏi nhất', 'Tốt bụng, hay giúp bạn'], 3, 'Phần thưởng cho lòng tốt và sự sẻ chia.'),
    Q('Bài học từ câu chuyện?', ['Chỉ học giỏi mới được khen', 'Phải giỏi hơn bạn', 'Không cần học', 'Ngoài học giỏi, lòng tốt cũng đáng quý'], 3, 'Lòng tốt và sự sẻ chia cũng được trân trọng.'),
    Q('Khi bạn buồn, em nên?', ['Tránh xa', 'Hỏi han, an ủi bạn', 'Đánh bạn', 'Cười nhạo'], 1, 'Đó là việc làm của người bạn tốt.'),
    Q('Tên riêng "Na" cần?', ['Không viết', 'Viết hoa chữ N', 'Viết thường', 'Viết hoa tất cả'], 1, 'Tên riêng → viết hoa chữ cái đầu.'),
  ]),

  M(4, 'Từ chỉ sự vật', [
    Q('Từ nào sau đây CHỈ SỰ VẬT?', ['cái bàn', 'chạy (hoạt động)', 'xanh', 'vui (đặc điểm/cảm xúc)'], 0, '"Cái bàn" là sự vật (đồ vật).'),
    Q('Trong các từ: cây, chim, đẹp, hát — từ chỉ sự vật là?', ['cây và chim', 'hát (hoạt động)', 'tất cả', 'đẹp (đặc điểm)'], 0, '"Cây" và "chim" là sự vật.'),
    Q('"Học sinh" là từ chỉ?', ['Quan hệ', 'Sự vật (người)', 'Đặc điểm', 'Hoạt động'], 1, 'Người cũng là sự vật.'),
    Q('Từ nào KHÔNG chỉ sự vật?', ['quyển sách', 'con mèo', 'ngôi nhà', 'thông minh'], 3, '"Thông minh" là từ chỉ đặc điểm.'),
    Q('Từ chỉ sự vật gồm: người, con vật, đồ vật, cây cối — ĐÚNG hay SAI?', ['Sai, chỉ gồm đồ vật và con vật', 'Sai, chỉ gồm người và cây cối', 'Đúng', 'Một phần đúng'], 2, 'Sự vật bao gồm cả 4 nhóm trên.'),
  ]),

  M(5, 'Tập đọc: "Bạn của Nai Nhỏ"', [
    Q('Trong truyện, Nai cha muốn gì khi nghe Nai Nhỏ kể về bạn?', ['Tặng bạn quà', 'Cấm Nai Nhỏ chơi', 'Đi cùng bạn', 'Biết bạn của con là người tốt'], 3, 'Nai cha muốn yên tâm vì bạn của con tốt.'),
    Q('Bạn của Nai Nhỏ có đức tính gì?', ['Lười, kiêu căng', 'Khoẻ, thông minh, dũng cảm', 'Hay khóc', 'Tham ăn'], 1, 'Bạn tốt vừa khỏe, vừa thông minh, vừa dũng cảm.'),
    Q('Bài học từ truyện?', ['Bạn nào cũng được', 'Đừng có bạn', 'Chỉ chơi 1 mình', 'Chọn bạn tốt mà chơi'], 3, 'Chọn bạn tốt → cùng tiến bộ.'),
    Q('"Dũng cảm" là?', ['Vui vẻ', 'Sợ hãi', 'Gan dạ, không sợ khó khăn', 'Lười biếng'], 2, '"Dũng cảm" = gan dạ, không sợ.'),
    Q('Câu "Con của cha có bạn tốt như vậy thì cha yên tâm." là câu?', ['Kể', 'Hỏi (kết thúc dấu ?)', 'Khiến (yêu cầu, đề nghị)', 'Cảm (bộc lộ cảm xúc)'], 0, 'Câu kể (thuật lại sự việc), kết thúc bằng dấu chấm.'),
  ]),

  M(6, 'Mở rộng vốn từ: Đồ dùng học tập', [
    Q('Đồ dùng học tập gồm?', ['Đồ chơi', 'Bút, vở, thước, cặp sách', 'Quần áo', 'Bóng đá'], 1, 'Bút, vở, sách, thước, tẩy, cặp sách… là đồ dùng học tập.'),
    Q('Đồ vật dùng để viết?', ['Cái cặp', 'Bút', 'Cái ghế', 'Cái bàn'], 1, 'Bút dùng để viết chữ.'),
    Q('Đồ vật dùng để xoá lỗi?', ['Thước (dùng để kẻ, đo)', 'Tẩy (cục gôm)', 'Bút (dùng để viết)', 'Vở (dùng để ghi chép)'], 1, 'Tẩy dùng để xoá chữ viết bút chì.'),
    Q('Trong cặp sách thường có?', ['Sách, vở, bút thước', 'Nước hoa', 'Đồ ăn vặt, kẹo bánh', 'Đồ chơi'], 0, 'Cặp đựng dụng cụ học.'),
    Q('Khi bạn quên bút, em nên?', ['Không cho mượn', 'Lấy mất bút bạn', 'Cười nhạo bạn', 'Cho bạn mượn nếu mình có dư'], 3, 'Giúp bạn = tình bạn đẹp.'),
  ]),

  M(7, 'Tập đọc: "Bím tóc đuôi sam"', [
    Q('Bài "Bím tóc đuôi sam" dạy ta điều gì?', ['Cắt tóc thật ngắn', 'Không trêu chọc bạn gái', 'Khóc thật to', 'Trêu bạn cho vui'], 1, 'Bài học: không trêu chọc bạn, đặc biệt là bạn gái.'),
    Q('Bạn Hà bị làm gì khiến khóc?', ['Bị bố mắng', 'Bị cô phạt', 'Bị mất bút', 'Bị Tuấn nắm bím tóc lôi'], 3, 'Tuấn nắm bím tóc Hà → Hà ngã, khóc.'),
    Q('Sau khi cô giáo phê bình, Tuấn đã?', ['Cãi cô', 'Xin lỗi Hà', 'Trêu thêm', 'Bỏ học'], 1, 'Tuấn nhận lỗi và xin lỗi Hà.'),
    Q('Câu "Tớ xin lỗi cậu nhé!" thể hiện?', ['Sự sợ hãi', 'Sự vui vẻ', 'Sự khinh thường', 'Sự ăn năn, xin tha thứ'], 3, 'Lời xin lỗi chân thành.'),
    Q('"Bím tóc đuôi sam" là kiểu tóc?', ['Tóc xù', 'Tóc xoăn', 'Tóc cạo trọc', 'Tóc tết hai bên'], 3, 'Bím = tết tóc thành đuôi, đuôi sam = giống đuôi con sam.'),
  ]),

  M(8, 'Từ chỉ hoạt động', [
    Q('Từ nào CHỈ HOẠT ĐỘNG?', ['cái bàn', 'đẹp (chỉ đặc điểm)', 'xanh', 'cười'], 3, '"Cười" là hoạt động (của miệng).'),
    Q('Trong "Mèo chạy nhanh", từ chỉ hoạt động là?', ['cả 3 từ đều là hoạt động', 'chạy', 'mèo (chỉ con vật)', 'nhanh (chỉ đặc điểm)'], 1, '"Chạy" là hoạt động.'),
    Q('Hoạt động trong lớp gồm?', ['chơi điện thoại', 'ngủ trong giờ học', 'đọc, viết, nghe, nói', 'ăn quà vặt'], 2, 'Học sinh đọc, viết, nghe giảng, phát biểu.'),
    Q('"Bay" là hoạt động của con vật nào?', ['Bò (di chuyển bằng 4 chân)', 'Rắn (trườn trên mặt đất)', 'Chim', 'Cá (bơi dưới nước)'], 2, 'Chim bay nhờ cánh.'),
    Q('Từ nào KHÔNG phải hoạt động?', ['múa (hoạt động tay chân)', 'đọc (hoạt động học tập)', 'nhảy (hoạt động chân)', 'ngọt'], 3, '"Ngọt" là vị, không phải hoạt động.'),
  ]),

  M(9, 'Tập đọc: "Chiếc bút mực"', [
    Q('Bài "Chiếc bút mực" có nội dung gì?', ['Mất bút khóc', 'Bạn cho bạn mượn bút khi cần', 'Đánh nhau vì bút', 'Bút đắt tiền'], 1, 'Truyện về tình bạn — bạn sẵn lòng cho mượn bút.'),
    Q('Vì sao bạn Mai cho bạn Lan mượn bút?', ['Vì cô yêu cầu', 'Vì Lan quên bút mà bài tập cần', 'Vì Mai có nhiều bút', 'Vì bút Mai cũ'], 1, 'Mai cho mượn vì Lan đang cần.'),
    Q('Hành động cho mượn bút thể hiện?', ['Tình bạn, lòng tốt', 'Sự khoe khoang', 'Sự kiêu căng', 'Sự ích kỷ'], 0, 'Lòng tốt và sẻ chia.'),
    Q('Khi mượn đồ của bạn, em nên?', ['Tự lấy không xin', 'Quên trả', 'Làm hỏng', 'Giữ gìn cẩn thận và trả đúng hẹn'], 3, 'Mượn → giữ gìn + trả đúng hẹn.'),
    Q('"Mượn" và "Cho mượn" là 2 phía của?', ['Hai hành động khác hẳn', 'Sự tranh giành', 'Cùng 1 hành động', 'Sự thù ghét'], 2, 'Mượn ↔ Cho mượn là 2 phía của cùng 1 hành động.'),
  ]),

  M(10, 'Mẫu câu "Ai là gì?"', [
    Q('Câu "Mẹ là cô giáo" thuộc mẫu nào?', ['Ai là gì?', 'Câu hỏi', 'Ai thế nào?', 'Ai làm gì?'], 0, 'Có từ "là" nối chủ ngữ + danh từ → kiểu Ai là gì?'),
    Q('Câu nào theo mẫu Ai là gì?', ['Em bé khóc.', 'Trời mưa.', 'Bố là kĩ sư.', 'Hà rất ngoan.'], 2, 'Bố LÀ kĩ sư.'),
    Q('Đặt câu theo mẫu Ai là gì? với "ông em"?', ['Ông em đi chợ.', 'Ông em là bác sĩ.', 'Ông em chạy nhanh.', 'Ông em rất khoẻ.'], 1, '"là bác sĩ" làm vị ngữ.'),
    Q('Câu "Trường em là Trường Tiểu học Hoa Sen." có?', ['Mẫu Ai làm gì?', 'Câu khiến', 'Câu hỏi', 'Mẫu Ai là gì?'], 3, 'Trường em LÀ Trường Tiểu học Hoa Sen.'),
    Q('Câu Ai là gì? thường để?', ['Mệnh lệnh', 'Giới thiệu / định nghĩa', 'Mô tả hành động', 'Mô tả cảm xúc'], 1, 'Dùng để giới thiệu hoặc định nghĩa.'),
  ]),

  M(11, 'Tập đọc: "Người mẹ hiền"', [
    Q('Bài "Người mẹ hiền" nói về?', ['Mẹ ở nhà', 'Bác sĩ', 'Người bán hàng', 'Cô giáo như mẹ của học sinh'], 3, 'Cô giáo dịu dàng, yêu thương học sinh như mẹ.'),
    Q('Cô giáo trong truyện đối xử với Minh và Nam thế nào?', ['Bỏ mặc', 'Đuổi học', 'Dịu dàng, khuyên răn', 'La mắng'], 2, 'Cô khuyên răn nhẹ nhàng → nhận lỗi.'),
    Q('Vì sao gọi cô là "người mẹ hiền"?', ['Cô già', 'Cô yêu thương, chăm sóc HS như con', 'Cô là mẹ ruột HS', 'Cô khó tính'], 1, 'Tình thương như mẹ.'),
    Q('"Hiền" là?', ['Chăm chỉ, siêng năng', 'Hung dữ', 'Dịu dàng, không dữ', 'Hay cáu'], 2, '"Hiền" = dịu dàng, tốt bụng.'),
    Q('Khi mắc lỗi, em nên?', ['Trốn tránh', 'Đổ cho bạn', 'Nhận lỗi và sửa', 'Khóc lóc'], 2, 'Người biết nhận lỗi là người tiến bộ.'),
  ]),

  M(12, 'Mẫu câu "Ai làm gì?"', [
    Q('Câu nào theo mẫu Ai làm gì?', ['Mẹ là kĩ sư.', 'Cây xanh tươi.', 'Trời rất đẹp.', 'Bố đọc báo.'], 3, 'Bố ĐỌC BÁO (làm gì).'),
    Q('Trong câu "Em quét nhà.", từ chỉ hoạt động là?', ['nhà (chỉ sự vật)', 'em (chỉ người)', 'cả câu đều là sự vật', 'quét'], 3, '"Quét" là hoạt động.'),
    Q('Câu "Bạn Lan đang viết bài." thuộc mẫu?', ['Ai là gì?', 'Ai làm gì?', 'Câu hỏi', 'Ai thế nào?'], 1, '"Viết bài" là hoạt động → Ai làm gì?'),
    Q('Đặt câu Ai làm gì? với "Em":', ['Em đẹp.', 'Em rất ngoan.', 'Em là học sinh.', 'Em đi học.'], 3, '"Đi học" là hoạt động.'),
    Q('Câu Ai làm gì? thường có?', ['Phép tính', 'Từ "là" nối', 'Một từ chỉ hoạt động làm vị ngữ', 'Tính từ'], 2, 'Vị ngữ là động từ.'),
  ]),

  M(13, 'Từ chỉ đặc điểm', [
    Q('Từ nào chỉ ĐẶC ĐIỂM?', ['chạy (chỉ hoạt động)', 'bút (chỉ sự vật)', 'mèo (chỉ con vật)', 'cao'], 3, '"Cao" là đặc điểm về chiều cao.'),
    Q('Trong "Bầu trời xanh ngắt", từ chỉ đặc điểm là?', ['xanh ngắt', 'bầu trời', 'có cả 2', 'bầu (đặc điểm hình dáng)'], 0, '"Xanh ngắt" là đặc điểm.'),
    Q('Từ nào KHÔNG phải từ chỉ đặc điểm?', ['ăn', 'đẹp (đặc điểm hình thức)', 'buồn (đặc điểm cảm xúc)', 'vui (đặc điểm cảm xúc)'], 0, '"Ăn" là hoạt động.'),
    Q('Mặt trời thường có đặc điểm?', ['vuông, mát', 'tròn, đỏ, nóng', 'xanh, nhỏ', 'vuông, lạnh'], 1, 'Đặc điểm thường thấy của mặt trời.'),
    Q('Em nhỏ thường có đặc điểm?', ['nhỏ, ngoan, hiếu động', 'già nua, chậm chạp', 'cao to', 'mệt mỏi, ốm yếu'], 0, 'Em nhỏ thường nhỏ + ngoan.'),
  ]),

  M(14, 'Tập đọc: "Mẹ" (thơ Trần Quốc Minh)', [
    Q('Bài thơ "Mẹ" của tác giả nào?', ['Trần Quốc Minh', 'Tố Hữu', 'Nguyễn Du', 'Xuân Quỳnh'], 0, 'Bài "Mẹ" của Trần Quốc Minh.'),
    Q('Bài thơ ca ngợi điều gì?', ['Cờ vua', 'Đi du lịch', 'Bài tập về nhà', 'Tình mẹ dịu dàng, lo lắng cho con'], 3, 'Tình yêu của mẹ dành cho con.'),
    Q('"Mẹ là ngọn gió của con suốt đời" có nghĩa?', ['Mẹ luôn mát mẻ, che chở', 'Mẹ thổi gió', 'Mẹ thổi sáo', 'Mẹ là quạt'], 0, 'Ẩn dụ — mẹ luôn yêu thương, che chở con.'),
    Q('Câu "Mẹ ơi con yêu mẹ!" là?', ['Câu khiến', 'Câu kể', 'Câu hỏi', 'Câu cảm'], 3, 'Có dấu chấm than → câu cảm.'),
    Q('Em nên làm gì để mẹ vui?', ['Vứt rác bừa', 'Học giỏi và ngoan', 'Cãi mẹ', 'Đòi quà'], 1, 'Học giỏi + ngoan = mẹ vui.'),
  ]),

  M(15, 'Tả ngắn: Người thân', [
    Q('Mở bài tả mẹ nên?', ['Kể chuyện đi du lịch', 'Giới thiệu mẹ là ai', 'Tả cây cối', 'Tả con mèo'], 1, 'Mở bài giới thiệu đối tượng.'),
    Q('Tả mẹ có thể có chi tiết nào?', ['Khuôn mặt, mái tóc, công việc, tình cảm', 'Số tiền lương', 'Tốc độ máy bay', 'Kích cỡ tủ'], 0, 'Tả ngoại hình + hoạt động + tình cảm.'),
    Q('Câu "Mẹ em rất hiền và đảm đang." là?', ['Câu Ai làm gì?', 'Câu hỏi', 'Câu khiến', 'Câu Ai thế nào?'], 3, '"Hiền và đảm đang" là đặc điểm.'),
    Q('Kết bài tả người nên?', ['Để trống', 'Nói về tình cảm của mình với người đó', 'Tả tiếp', 'Đề tài khác'], 1, 'Kết bài thể hiện cảm xúc.'),
    Q('Bài tả người dài bao nhiêu câu cho học sinh lớp 2?', ['1 câu', '20 câu', '100 câu', '3-5 câu'], 3, 'Lớp 2 viết ngắn — 3-5 câu.'),
  ]),

  M(16, 'Tập đọc: "Sáng kiến của bé Hà"', [
    Q('Bé Hà nghĩ ra "sáng kiến" gì?', ['Mua đồ chơi', 'Tổ chức ngày lễ cho ông bà', 'Đi chơi', 'Trốn học'], 1, 'Bé Hà nghĩ tổ chức ngày của ông bà.'),
    Q('Sáng kiến của Hà nói lên điều gì?', ['Hà thích nghỉ học', 'Hà lười', 'Hà yêu kính ông bà', 'Hà thích quà'], 2, 'Tình cảm của Hà với ông bà.'),
    Q('Ngày Quốc tế Người cao tuổi là?', ['8/3', '1/10', '1/6', '1/1'], 1, '01/10 hàng năm — Ngày Quốc tế Người cao tuổi.'),
    Q('Câu hỏi "Ông bà có vui không?" kết thúc bằng?', ['Dấu chấm hỏi', 'Dấu phẩy', 'Dấu chấm than', 'Dấu chấm'], 0, 'Câu hỏi → dấu chấm hỏi.'),
    Q('Tình cảm với ông bà thể hiện qua?', ['Cãi lại', 'Lễ phép, quan tâm, chăm sóc', 'Đòi quà', 'Trốn ông bà'], 1, 'Yêu kính = lễ phép + quan tâm.'),
  ]),

  M(17, 'Mẫu câu "Ai thế nào?"', [
    Q('Câu "Bạn Lan rất chăm chỉ." thuộc mẫu?', ['Câu hỏi', 'Ai là gì?', 'Ai làm gì?', 'Ai thế nào?'], 3, '"Chăm chỉ" là đặc điểm → Ai thế nào?'),
    Q('Câu nào theo mẫu Ai thế nào?', ['Bố đọc báo.', 'Em là HS.', 'Trời nắng.', 'Em đi học.'], 2, '"Nắng" là đặc điểm.'),
    Q('Đặt câu Ai thế nào? với "Cánh đồng":', ['Cánh đồng là đất.', 'Cánh đồng đi đâu?', 'Cánh đồng có lúa.', 'Cánh đồng xanh mướt.'], 3, '"Xanh mướt" là đặc điểm.'),
    Q('Câu "Cây xoài cao to" — vị ngữ là?', ['Cao (thiếu một từ)', 'Cây (làm chủ ngữ)', 'Cao to', 'Cây xoài'], 2, '"Cao to" làm vị ngữ.'),
    Q('Câu Ai thế nào? thường có vị ngữ là?', ['Chữ số', 'Tính từ (từ chỉ đặc điểm)', 'Động từ', 'Danh từ'], 1, 'Vị ngữ là từ chỉ đặc điểm.'),
  ]),

  M(18, 'Ôn tập cuối Học kỳ 1', [
    Q('Câu "Mẹ là cô giáo." thuộc mẫu?', ['Ai thế nào?', 'Câu hỏi', 'Ai làm gì?', 'Ai là gì?'], 3, 'Có từ "là".'),
    Q('Từ nào chỉ sự vật?', ['vui (chỉ đặc điểm)', 'chạy (chỉ hoạt động)', 'cái bàn', 'xanh'], 2, '"Cái bàn" là đồ vật.'),
    Q('Từ nào chỉ hoạt động?', ['hát', 'vàng (chỉ đặc điểm màu sắc)', 'đẹp (chỉ đặc điểm)', 'cao (chỉ đặc điểm)'], 0, '"Hát" là hoạt động.'),
    Q('Từ nào chỉ đặc điểm?', ['chạy (chỉ hoạt động)', 'mèo (chỉ con vật)', 'cao', 'sách (chỉ sự vật)'], 2, '"Cao" là đặc điểm.'),
    Q('Câu cảm thường kết thúc bằng dấu?', ['Phẩy (ngắt nghỉ giữa câu)', 'Chấm than', 'Chấm hỏi', 'Chấm (kết câu kể)'], 1, 'Câu cảm → dấu !.'),
    Q('Tên riêng "Hà Nội" viết?', ['HÀ NỘI', 'hà nội', 'Hà Nội', 'Hà nội'], 2, 'Tên riêng → viết hoa chữ đầu mỗi tiếng.'),
    Q('Bài "Có công mài sắt, có ngày nên kim" khuyên?', ['Tham ăn', 'Kiên trì', 'Lười biếng, không cố gắng', 'Nói dối'], 1, 'Kiên trì → thành công.'),
    Q('Khi mượn đồ của bạn, em nên?', ['Làm hỏng', 'Quên trả', 'Giữ gìn và trả đúng hẹn', 'Vứt đi'], 2, 'Mượn → giữ gìn.'),
  ], { difficulty: 2, description: 'Ôn tập tổng hợp HK1: từ loại, mẫu câu, các bài tập đọc đã học.' }),

  // ──────────────── HK2 ────────────────
  M(19, 'Tập đọc: "Chuyện bốn mùa"', [
    Q('Bốn mùa trong năm là?', ['Sáng – Trưa – Chiều – Tối', 'Lúc đói – Lúc no', 'Đỏ – Vàng – Xanh – Tím', 'Xuân – Hạ – Thu – Đông'], 3, 'Một năm có 4 mùa: xuân hạ thu đông.'),
    Q('Mùa Xuân có gì?', ['Nắng gắt', 'Tuyết rơi', 'Hoa nở, không khí ấm', 'Lá rụng'], 2, 'Mùa xuân ấm, cây cối đâm chồi.'),
    Q('Mùa Đông thường?', ['Nóng (như mùa hè)', 'Lạnh', 'Khô và nhiều gió', 'Mát mẻ dễ chịu'], 1, 'Mùa đông thời tiết lạnh.'),
    Q('Mỗi mùa có vai trò gì?', ['Chỉ đẹp', 'Mang lại điều quý cho con người và cây cỏ', 'Chỉ để phân chia thời gian', 'Chỉ gây khó chịu cho con người'], 1, 'Mỗi mùa đều mang lại giá trị riêng.'),
    Q('"Bốn mùa" nghĩa là?', ['Bốn giờ', 'Bốn ngày', 'Bốn tháng', 'Bốn mùa trong năm'], 3, '4 mùa = 4 thời kỳ trong 1 năm.'),
  ]),

  M(20, 'Mở rộng vốn từ: Thời tiết', [
    Q('Từ ngữ về thời tiết:', ['Nắng, mưa, gió, lạnh', 'Cười, khóc', 'Đẹp, xấu', 'Cao, thấp'], 0, 'Thời tiết: nắng/mưa/gió/lạnh/nóng.'),
    Q('Trời "nắng chang chang" nghĩa là?', ['Trời mưa to', 'Trời mát mẻ', 'Trời nắng rất gắt', 'Trời rất lạnh'], 2, '"Chang chang" = nắng to, gắt.'),
    Q('Khi trời "âm u" là?', ['Trời tuyết', 'Trời bão', 'Trời nhiều mây, không có nắng', 'Trời nắng to'], 2, '"Âm u" = u ám, không nắng.'),
    Q('Đặt câu Ai thế nào? với "Trời":', ['Trời là gì?', 'Trời rất đẹp.', 'Trời đi đâu?', 'Trời mưa.'], 1, '"Rất đẹp" là đặc điểm.'),
    Q('Dự báo thời tiết thường nói về?', ['Giá cả thực phẩm hàng ngày', 'Bài tập', 'Đồ chơi', 'Trời nắng/mưa/lạnh/nóng'], 3, 'Dự báo: nhiệt độ + nắng/mưa.'),
  ]),

  M(21, 'Tập đọc: "Một trí khôn hơn trăm trí khôn"', [
    Q('Truyện "Một trí khôn hơn trăm trí khôn" nói về 2 con vật?', ['Mèo và Chó', 'Cá và Tôm', 'Chồn và Gà Rừng', 'Voi và Khỉ'], 2, 'Hai nhân vật chính: Chồn (khoe khôn) và Gà Rừng (khiêm tốn).'),
    Q('Gà Rừng "có một trí khôn" nhưng?', ['Lười, không chịu suy nghĩ', 'Khoe khoang', 'Nhanh trí, cứu được Chồn', 'Hèn nhát'], 2, 'Gà Rừng có 1 mẹo nhưng quyết định nhanh, cứu cả 2.'),
    Q('Bài học của truyện?', ['Khiêm tốn và biết suy nghĩ kĩ', 'Tham lam', 'Lười suy nghĩ', 'Khoe khoang'], 0, 'Khiêm tốn + thực tế hơn khoe khoang.'),
    Q('"Khôn" trong truyện có nghĩa?', ['Giàu có, nhiều tiền', 'Cao lớn, to khoẻ', 'Thông minh, biết xử lý', 'Đẹp, dễ thương'], 2, '"Khôn" = thông minh, có trí.'),
    Q('Khi khoe khoang, người ta thường?', ['Giỏi thật', 'Không có gì', 'Được khen mãi', 'Bị người khác đánh giá thấp khi gặp khó'], 3, 'Người khoe khoang thường thiếu thực chất.'),
  ]),

  M(22, 'Nghỉ Tết — Văn hoá Tết cổ truyền', [
    Q('Tết Nguyên Đán là Tết gì?', ['Tết Tây', 'Tết Halloween', 'Tết cổ truyền dân tộc Việt', 'Tết Trung Thu'], 2, 'Nguyên Đán = đầu năm âm lịch.'),
    Q('Bánh truyền thống của Tết miền Bắc?', ['Bánh bao nhân thịt', 'Bánh chưng', 'Bánh mì', 'Bánh tét'], 1, 'Bắc: bánh chưng vuông. Nam: bánh tét tròn dài.'),
    Q('Câu chúc Tết phổ biến?', ['"Đi học!"', '"Im lặng!"', '"Tạm biệt!"', '"Chúc mừng năm mới!"'], 3, 'Câu chúc đầu năm.'),
    Q('Phong tục Tết là?', ['Trốn nhà', 'Lì xì, chúc Tết, dọn nhà', 'Cãi nhau', 'Vứt rác'], 1, 'Phong tục đẹp ngày Tết.'),
    Q('Tết đến em được?', ['Buồn vì phải xa trường lớp', 'Không có gì', 'Mặc quần áo mới, nhận lì xì, chúc Tết', 'Mất bạn'], 2, 'Niềm vui ngày Tết.'),
  ], { difficulty: 1, description: 'Tuần nghỉ Tết — học về văn hoá Tết cổ truyền.' }),

  M(23, 'Tập đọc: "Sơn Tinh, Thuỷ Tinh"', [
    Q('Truyện "Sơn Tinh, Thuỷ Tinh" là truyện gì?', ['Truyện hiện đại', 'Truyền thuyết Việt Nam', 'Khoa học viễn tưởng', 'Cổ tích Trung Quốc'], 1, 'Truyền thuyết dân gian Việt Nam.'),
    Q('Sơn Tinh là thần gì?', ['Núi', 'Lửa (đốt cháy rừng núi)', 'Mây (bay trên bầu trời)', 'Nước (dâng lên gây lũ)'], 0, 'Sơn = núi → Sơn Tinh là thần núi.'),
    Q('Thuỷ Tinh là thần gì?', ['Gió (thổi bay mọi vật)', 'Núi (dâng đất chắn nước)', 'Đất (làm rung chuyển)', 'Nước'], 3, 'Thuỷ = nước → Thuỷ Tinh là thần nước.'),
    Q('Mỗi năm Thuỷ Tinh dâng nước đánh Sơn Tinh — giải thích hiện tượng?', ['Lũ lụt hàng năm', 'Nắng nóng', 'Trời mưa rào', 'Tuyết rơi'], 0, 'Truyền thuyết giải thích lũ lụt.'),
    Q('Vợ của Sơn Tinh là?', ['Bạch Tuyết', 'Cinderella', 'Tấm Cám', 'Công chúa Mị Nương'], 3, 'Mị Nương — công chúa Vua Hùng thứ 18.'),
  ]),

  M(24, 'Dấu chấm, dấu phẩy', [
    Q('Dấu chấm dùng để?', ['Bộc lộ cảm xúc', 'Liệt kê', 'Kết thúc câu kể', 'Hỏi điều gì đó'], 2, 'Câu kể → dấu chấm.'),
    Q('Dấu phẩy dùng để?', ['Kết thúc câu', 'Đặt cuối câu hỏi', 'Đặt cuối câu yêu cầu, đề nghị', 'Tách các từ cùng loại / ngắt nghỉ trong câu'], 3, 'Dấu phẩy → ngắt nghỉ + tách liệt kê.'),
    Q('Điền dấu: "Trên đường có ô tô ___ xe máy ___ xe đạp."', ['Cả 2 chỗ đều phẩy', 'Không cần dấu', 'Một chấm + một phẩy', 'Cả 2 chỗ đều chấm'], 0, 'Liệt kê → phẩy.'),
    Q('Câu nào ĐÚNG?', ['Em đi học.', 'Em đi học,', 'em đi học.', 'Em đi học?'], 0, 'Câu kể → kết thúc bằng chấm, đầu câu viết hoa.'),
    Q('Sau dấu chấm, chữ tiếp theo phải?', ['Viết hoa nếu là tên riêng', 'Viết thường', 'Bằng số', 'Viết hoa'], 3, 'Sau chấm → viết hoa.'),
  ]),

  M(25, 'Tập đọc: "Bác sĩ Sói"', [
    Q('Sói trong truyện "Bác sĩ Sói" giả làm gì?', ['Cha mẹ', 'Học sinh', 'Bác sĩ', 'Cô giáo'], 2, 'Sói giả bác sĩ để lừa Ngựa.'),
    Q('Ngựa đã làm gì để thoát?', ['Bỏ chạy mất tích', 'Đá cho Sói một cú', 'Khóc lóc, van xin Sói', 'Cho Sói tiền'], 1, 'Ngựa nhanh trí đá Sói.'),
    Q('Bài học từ truyện?', ['Khóc lóc', 'Cứ tin người lạ', 'Sợ hãi', 'Bình tĩnh + thông minh → thoát hiểm'], 3, 'Phải tỉnh táo trước kẻ xấu.'),
    Q('"Lừa" nghĩa là?', ['Cười to', 'Im lặng', 'Nói dối để lấy lợi', 'Nói thật'], 2, '"Lừa" = gian dối.'),
    Q('Khi gặp người lạ rủ đi, em nên?', ['Cho địa chỉ nhà', 'Nhận quà', 'Đi ngay', 'Không đi, báo người lớn'], 3, 'Cảnh giác với người lạ.'),
  ]),

  M(26, 'Mở rộng vốn từ: Bác Hồ', [
    Q('Bác Hồ tên thật là?', ['Lê Văn B', 'Nguyễn Văn A', 'Nguyễn Sinh Cung', 'Trần Văn C'], 2, 'Tên khai sinh: Nguyễn Sinh Cung.'),
    Q('Bác Hồ sinh ngày?', ['30/4/1975', '2/9/1945', '1/1/2000', '19/5/1890'], 3, '19/5/1890 tại Nghệ An.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['7/5/1954', '2/9/1945', '19/5/1890', '30/4/1975'], 1, '2/9/1945 tại Quảng trường Ba Đình.'),
    Q('Bác Hồ là?', ['Diễn viên', 'Lãnh tụ dân tộc Việt Nam', 'Vận động viên', 'Nhà thơ thiếu nhi'], 1, 'Lãnh tụ vĩ đại của dân tộc Việt Nam.'),
    Q('Lăng Bác ở đâu?', ['Đà Nẵng', 'TP HCM', 'Hà Nội', 'Cố đô Huế'], 2, 'Lăng Bác ở Quảng trường Ba Đình, Hà Nội.'),
  ]),

  M(27, 'Tập đọc: "Quả tim Khỉ"', [
    Q('Cá Sấu lừa Khỉ vì sao?', ['Vì giúp đỡ', 'Vì kết bạn', 'Vì yêu thương', 'Vì muốn ăn quả tim Khỉ'], 3, 'Cá Sấu định lừa lấy quả tim Khỉ.'),
    Q('Khỉ thoát chết nhờ?', ['Khoẻ hơn cả Cá Sấu', 'Hung dữ', 'May mắn', 'Thông minh, nhanh trí'], 3, 'Khỉ nhanh trí nói dối "để tim ở cây" → thoát.'),
    Q('Bài học của truyện?', ['Lười suy nghĩ', 'Tham ăn', 'Tin người lạ', 'Bình tĩnh + thông minh thoát hiểm'], 3, 'Thông minh giúp ta thoát hiểm.'),
    Q('Cá Sấu trong truyện là?', ['Bạn tốt', 'Kẻ xấu, giả vờ làm bạn', 'Người thân', 'Anh hùng'], 1, 'Cá Sấu tham lam, giả bạn để hại.'),
    Q('"Tim" trong câu chuyện là?', ['Cây cối', 'Cơ quan trong cơ thể', 'Đồ chơi', 'Một loại quả trên cây'], 1, 'Quả tim = cơ quan tuần hoàn máu.'),
  ]),

  M(28, 'Dấu chấm hỏi · Dấu chấm than', [
    Q('Câu hỏi kết thúc bằng?', ['Dấu chấm hỏi (?)', 'Dấu chấm (.)', 'Dấu phẩy (,)', 'Dấu chấm than (!)'], 0, 'Câu hỏi → ?'),
    Q('Câu cảm thường kết thúc bằng?', ['Dấu hai chấm', 'Dấu chấm than (!)', 'Dấu chấm (.)', 'Dấu chấm hỏi (?)'], 1, 'Câu cảm → !'),
    Q('Câu "Bạn có thích đi học không?" là câu?', ['Cảm (bộc lộ cảm xúc)', 'Kể (thuật lại sự việc)', 'Hỏi', 'Khiến (yêu cầu, đề nghị)'], 2, 'Có từ "không" + dấu ? → câu hỏi.'),
    Q('Câu "Đẹp quá!" là câu?', ['Hỏi (kết thúc dấu ?)', 'Cảm', 'Kể (thuật lại sự việc)', 'Khiến (yêu cầu, đề nghị)'], 1, 'Dấu ! + bộc lộ cảm xúc → câu cảm.'),
    Q('Điền dấu: "Hôm nay trời nắng quá ___"', ['Dấu ? (dùng cho câu hỏi)', '!', '.', ','], 1, 'Câu cảm xúc.'),
  ]),

  M(29, 'Tập đọc: "Cò và Cuốc"', [
    Q('Cò và Cuốc khác nhau ở điểm gì?', ['Không khác gì', 'Cò bay, Cuốc không', 'Cò đẹp, Cuốc xấu', 'Cò siêng năng, Cuốc lười'], 3, 'Cò chăm chỉ kiếm ăn, Cuốc lười, chỉ kêu.'),
    Q('Bài học từ truyện?', ['Nói dối', 'Lười là tốt', 'Phải lao động, không nên lười', 'Khoe khoang'], 2, 'Lao động vinh quang.'),
    Q('"Lội" là?', ['Ngồi yên một chỗ', 'Chạy trên cạn nhanh', 'Đi trong nước nông', 'Bay trên không trung'], 2, '"Lội" = đi dưới nước nông.'),
    Q('Cò làm việc gì?', ['Ngủ cả ngày trên cành', 'Khóc vì bị Cuốc chê', 'Chơi đùa', 'Bắt cá tôm'], 3, 'Cò siêng năng kiếm thức ăn.'),
    Q('"Cuốc kêu" nghĩa là?', ['Tiếng chim cuốc kêu (tu hú… cuốc cuốc)', 'Cuốc trong vườn', 'Tên người', 'Đi cuốc đất'], 0, 'Tiếng kêu đặc trưng của chim cuốc.'),
  ]),

  M(30, 'Mở rộng vốn từ: Cây cối', [
    Q('Cây có các bộ phận?', ['Mắt, mũi, miệng', 'Bánh xe, vô lăng', 'Cánh, đuôi', 'Rễ, thân, lá, hoa, quả'], 3, 'Cây gồm 5 bộ phận chính.'),
    Q('Bộ phận hút nước của cây?', ['Rễ', 'Lá (quang hợp tạo chất)', 'Hoa (làm ra quả, hạt)', 'Thân (vận chuyển nước lên)'], 0, 'Rễ hút nước + muối khoáng.'),
    Q('Lá cây thường có màu?', ['Tím (khi lá non hé nụ)', 'Đen (khi lá khô héo)', 'Xanh', 'Đỏ (khi lá vào mùa thu)'], 2, 'Lá có diệp lục → màu xanh.'),
    Q('Cây ăn quả gồm?', ['Hoa hồng', 'Lúa (cây lương thực)', 'Cam, xoài, ổi, mít', 'Cỏ (cây thân thấp)'], 2, 'Cây cho quả ăn được.'),
    Q('"Cây cao bóng cả" nghĩa là?', ['Cắt cây', 'Trồng cây', 'Cây cao thật', 'Người lớn tuổi đáng kính trong nhà / cộng đồng'], 3, 'Ẩn dụ chỉ người lớn đáng kính.'),
  ]),

  M(31, 'Tập đọc: "Bóp nát quả cam" (Trần Quốc Toản)', [
    Q('Trần Quốc Toản bóp nát quả cam vì?', ['Đói bụng vì chưa ăn sáng', 'Nghịch', 'Vô tình', 'Tức giận vì không được dự bàn việc nước'], 3, 'Tức giận vì còn nhỏ không được dự hội nghị chống giặc.'),
    Q('Trần Quốc Toản là?', ['Người hiện đại', 'Tướng nước ngoài', 'Vua đời nhà Trần', 'Một thiếu niên anh hùng đời Trần'], 3, 'Thiếu niên anh hùng thời Trần, chống quân Nguyên.'),
    Q('Quả cam được vua ban — Quốc Toản bóp nát vì sao?', ['Đùa nghịch', 'Không thích cam', 'Cố ý vứt', 'Vô tình, do quá tức giận'], 3, 'Vì tức giận, vô tình bóp mạnh.'),
    Q('Bài học của truyện?', ['Lòng yêu nước thể hiện từ tuổi nhỏ', 'Tức giận hữu ích', 'Vứt đồ vua ban', 'Không tôn trọng vua'], 0, 'Tuổi nhỏ cũng có thể yêu nước.'),
    Q('"Bóp nát" là?', ['Cắt bằng dao thành miếng', 'Đập mạnh xuống đất', 'Dùng tay nắm chặt làm vỡ', 'Đốt cháy thành tro'], 2, '"Bóp nát" = dùng tay nắm vỡ.'),
  ]),

  M(32, 'Viết đoạn văn 3-5 câu', [
    Q('Đoạn văn ngắn 3-5 câu thường có?', ['Không có gì', 'Mở đoạn, thân đoạn, kết đoạn', 'Hàng trăm câu', 'Chỉ 1 câu'], 1, 'Cấu trúc 3 phần cơ bản.'),
    Q('Mở đoạn tả cây bàng nên?', ['Để trống', 'Giới thiệu cây bàng', 'Tả con mèo', 'Đề tài khác'], 1, 'Mở đoạn → giới thiệu đối tượng.'),
    Q('Thân đoạn tả?', ['Tả gì cũng được', 'Chi tiết về đối tượng', 'Đề tài khác', 'Không tả'], 1, 'Thân đoạn → chi tiết cụ thể.'),
    Q('Kết đoạn nên?', ['Đặt câu hỏi', 'Bày tỏ tình cảm/suy nghĩ', 'Im lặng', 'Tả tiếp'], 1, 'Kết đoạn → cảm xúc.'),
    Q('Khi viết, đầu câu phải?', ['Bằng số', 'Viết thường', 'Viết hoa nếu là tên riêng', 'Viết hoa'], 3, 'Đầu câu → viết hoa.'),
  ]),

  M(33, 'Tập đọc: "Lượm" (thơ Tố Hữu)', [
    Q('Lượm là?', ['Anh bộ đội', 'Chú bé liên lạc nhỏ tuổi thời kháng chiến', 'Cô giáo', 'Người lớn'], 1, 'Lượm là chú bé liên lạc dũng cảm.'),
    Q('Bài thơ "Lượm" của tác giả?', ['Nguyễn Du', 'Xuân Quỳnh', 'Tố Hữu', 'Trần Đăng Khoa'], 2, 'Tác giả Tố Hữu.'),
    Q('"Cái xắc xinh xinh" và "Cái chân thoăn thoắt" miêu tả?', ['Cảnh thiên nhiên', 'Đồ vật', 'Hình dáng nhanh nhẹn của Lượm', 'Người lớn'], 2, 'Lượm nhỏ, nhanh nhẹn.'),
    Q('Tinh thần của Lượm thể hiện điều gì?', ['Sợ hãi', 'Anh hùng, dũng cảm dù còn nhỏ', 'Lười nhác', 'Khoe khoang'], 1, 'Tinh thần anh hùng của tuổi nhỏ.'),
    Q('"Liên lạc" trong kháng chiến nghĩa là?', ['Đi du lịch', 'Người đưa tin', 'Bác sĩ', 'Cô giáo'], 1, 'Người chuyển tin giữa các đơn vị.'),
  ]),

  M(34, 'Mở rộng vốn từ: Quê hương – Đất nước', [
    Q('Quê hương em là?', ['Nước ngoài', 'Nơi em sinh ra và lớn lên', 'Đồ vật', 'Một bài hát'], 1, 'Quê hương = nơi sinh ra.'),
    Q('Việt Nam có thủ đô là?', ['Hà Nội', 'TP HCM', 'Huế (cố đô triều Nguyễn)', 'Đà Nẵng'], 0, 'Thủ đô của Việt Nam là Hà Nội.'),
    Q('Cờ Việt Nam có?', ['Nền trắng, sao đỏ', 'Nền xanh', 'Nền đen', 'Nền đỏ, sao vàng'], 3, 'Cờ đỏ sao vàng 5 cánh.'),
    Q('Việt Nam có hình dáng?', ['Chữ O (tròn khép kín)', 'Chữ S', 'Chữ V (mở rộng ra biển)', 'Vuông (bốn cạnh đều nhau)'], 1, 'Việt Nam hình chữ S.'),
    Q('"Non sông gấm vóc" chỉ?', ['Vải vóc', 'Sông biển', 'Núi rừng', 'Đất nước Việt Nam tươi đẹp'], 3, 'Ẩn dụ chỉ đất nước đẹp.'),
  ]),

  M(35, 'Tập đọc: "Người làm đồ chơi"', [
    Q('Truyện "Người làm đồ chơi" nói về?', ['Bác thợ làm đồ chơi và lòng biết ơn của bạn nhỏ', 'Đua xe', 'Đi du lịch', 'Đi chợ'], 0, 'Bác thợ làm đồ chơi và tình cảm trẻ em với nghề thủ công.'),
    Q('Bạn nhỏ trong truyện cảm thấy thế nào với bác thợ?', ['Yêu quý, biết ơn', 'Coi thường', 'Không quan tâm', 'Cáu giận'], 0, 'Yêu quý người làm ra đồ chơi cho mình.'),
    Q('Đồ chơi thủ công như "tò he" làm bằng?', ['Giấy (gấp thành hình)', 'Sắt (đúc khuôn)', 'Nhựa (ép thành hình)', 'Bột nặn (gạo nếp + phẩm màu)'], 3, 'Tò he là bột nếp pha màu.'),
    Q('Bài học từ truyện?', ['Lười học', 'Coi thường người nghèo', 'Trân trọng người lao động', 'Đòi quà nhiều'], 2, 'Trân trọng mọi nghề lao động chân chính.'),
    Q('"Đồ chơi dân gian" là?', ['Đồ chơi truyền thống Việt Nam', 'Đồ ăn truyền thống ngày Tết', 'Đồ chơi nước ngoài', 'Đồ chơi điện tử'], 0, 'Tò he, đèn ông sao, trống quân… là đồ chơi dân gian.'),
  ]),

  M(36, 'Ôn tập cuối năm', [
    Q('Câu "Bạn Lan rất chăm chỉ." thuộc mẫu?', ['Ai làm gì?', 'Ai là gì?', 'Ai thế nào?', 'Câu hỏi'], 2, '"Chăm chỉ" là đặc điểm.'),
    Q('Từ "ngoan" là từ chỉ?', ['Đặc điểm', 'Hoạt động', 'Sự vật', 'Số lượng'], 0, '"Ngoan" là đặc điểm.'),
    Q('Tên riêng "Hồ Chí Minh" viết?', ['HỒ CHÍ MINH', 'hồ chí minh', 'Hồ Chí Minh', 'Hồ chí minh'], 2, 'Tên người → viết hoa chữ đầu mỗi tiếng.'),
    Q('Câu hỏi kết thúc bằng?', ['Chấm hỏi', 'Chấm than', 'Phẩy (ngắt nghỉ giữa câu)', 'Chấm (kết câu kể)'], 0, '? cho câu hỏi.'),
    Q('Bốn mùa trong năm?', ['Đỏ – Cam – Vàng – Lục', 'Sáng – Trưa – Chiều – Tối', 'Xuân – Hạ – Thu – Đông', 'Đông – Tây – Nam – Bắc'], 2, '4 mùa.'),
    Q('Trần Quốc Toản nổi tiếng vì?', ['Đá bóng giỏi', 'Vẽ tranh đẹp', 'Hát hay', 'Lòng yêu nước thiếu niên'], 3, 'Thiếu niên anh hùng đời Trần.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['30/4/1975', '7/5/1954', '2/9/1945', '19/5/1890'], 2, '2/9/1945.'),
    Q('Việt Nam có hình?', ['Chữ O (tròn khép kín)', 'Tròn như hình cầu', 'Chữ S', 'Vuông bốn cạnh bằng nhau'], 2, 'Hình chữ S.'),
    Q('Bài "Có công mài sắt, có ngày nên kim" khuyên?', ['Lười biếng, ngại khó', 'Khoe khoang tài năng', 'Kiên trì', 'Tham ăn, ham chơi'], 2, 'Kiên trì + chăm chỉ.'),
    Q('Khi mượn đồ của bạn, em nên?', ['Giữ gìn và trả đúng hẹn', 'Quên trả', 'Vứt đi', 'Làm hỏng'], 0, 'Mượn → giữ gìn.'),
  ], { difficulty: 3, description: 'Bài kiểm tra cuối năm Tiếng Việt — tổng hợp toàn bộ kiến thức.' }),
];

export const P2TV_SCENARIOS = indexBy(P2TV_WEEKS);
