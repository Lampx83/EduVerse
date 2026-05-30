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
    Q('Vần "an" gồm những âm gì?', ['Âm "a" + âm cuối "n"', 'Âm "a" + âm cuối "nh"', 'Âm "ă" + "n"', 'Một âm duy nhất'], 0, 'Vần "an" gồm âm chính "a" + âm cuối "n".'),
    Q('Tiếng "trường" có mấy âm?', ['1 âm', '2 phần (đầu + vần)', '3 phần', '4 phần'], 1, 'Tiếng có âm đầu "tr" và vần "ường".'),
    Q('Sắp xếp bảng chữ cái: c, a, b, đ', ['a, b, c, đ', 'b, a, c, đ', 'c, b, a, đ', 'đ, c, b, a'], 0, 'Bảng chữ cái: a-ă-â-b-c…-đ.'),
    Q('Tiếng "khoẻ" có vần là?', ['o', 'oẻ', 'kho', 'oe'], 1, 'Tiếng "khoẻ": âm đầu "kh" + vần "oẻ".'),
    Q('Chữ nào viết HOA: "việt nam"?', ['việt', 'V và N (Việt Nam)', 'Không cần viết hoa', 'Chỉ "việt"'], 1, 'Tên riêng → viết hoa cả 2 chữ.'),
  ]),

  M(2, 'Tập đọc: "Có công mài sắt, có ngày nên kim"', [
    Q('Câu "có công mài sắt, có ngày nên kim" khuyên?', ['Kiên trì sẽ thành công', 'Mài sắt cho nhanh', 'Đừng kiên nhẫn', 'Mua kim cho rẻ'], 0, 'Bài học: kiên trì + chăm chỉ → thành công.'),
    Q('Cậu bé trong truyện ban đầu thế nào?', ['Chăm học', 'Lười, mau chán', 'Giỏi nhất lớp', 'Rất khỏe'], 1, 'Cậu lười, mau chán nên mới được bà cụ dạy.'),
    Q('Bà cụ trong truyện đang làm gì?', ['Mài sắt thành kim', 'Đan rổ', 'Đọc sách', 'Nấu cơm'], 0, 'Bà mài thỏi sắt → ngày nào đó sẽ thành kim khâu.'),
    Q('Bài học chính của truyện?', ['Kiên trì làm việc khó cũng thành', 'Lười thì có quà', 'Không cần học', 'Ngủ thật nhiều'], 0, 'Kiên trì + nỗ lực = thành công.'),
    Q('"Mài" nghĩa là?', ['Cọ xát đều, đều một vật cứng', 'Đập vỡ', 'Cắt nhỏ', 'Bóp nát'], 0, '"Mài" = cọ xát để làm mòn dần.'),
  ]),

  M(3, 'Tập đọc: "Phần thưởng"', [
    Q('Bài "Phần thưởng" nói về?', ['Tình bạn và tấm lòng tốt', 'Đi thi học sinh giỏi', 'Đua xe', 'Đi du lịch'], 0, 'Bạn Na không học giỏi nhất nhưng tốt bụng nên được thưởng.'),
    Q('Vì sao Na được phần thưởng đặc biệt?', ['Học giỏi nhất', 'Tốt bụng, hay giúp bạn', 'Đẹp nhất', 'Vẽ đẹp nhất'], 1, 'Phần thưởng cho lòng tốt và sự sẻ chia.'),
    Q('Bài học từ câu chuyện?', ['Ngoài học giỏi, lòng tốt cũng đáng quý', 'Chỉ học giỏi mới được khen', 'Không cần học', 'Phải giỏi hơn bạn'], 0, 'Lòng tốt và sự sẻ chia cũng được trân trọng.'),
    Q('Khi bạn buồn, em nên?', ['Hỏi han, an ủi bạn', 'Cười nhạo', 'Tránh xa', 'Đánh bạn'], 0, 'Đó là việc làm của người bạn tốt.'),
    Q('Tên riêng "Na" cần?', ['Viết hoa chữ N', 'Viết thường', 'Viết hoa tất cả', 'Không viết'], 0, 'Tên riêng → viết hoa chữ cái đầu.'),
  ]),

  M(4, 'Từ chỉ sự vật', [
    Q('Từ nào sau đây CHỈ SỰ VẬT?', ['chạy', 'cái bàn', 'xanh', 'vui'], 1, '"Cái bàn" là sự vật (đồ vật).'),
    Q('Trong các từ: cây, chim, đẹp, hát — từ chỉ sự vật là?', ['cây và chim', 'đẹp', 'hát', 'tất cả'], 0, '"Cây" và "chim" là sự vật.'),
    Q('"Học sinh" là từ chỉ?', ['Sự vật (người)', 'Hoạt động', 'Đặc điểm', 'Quan hệ'], 0, 'Người cũng là sự vật.'),
    Q('Từ nào KHÔNG chỉ sự vật?', ['quyển sách', 'con mèo', 'ngôi nhà', 'thông minh'], 3, '"Thông minh" là từ chỉ đặc điểm.'),
    Q('Từ chỉ sự vật gồm: người, con vật, đồ vật, cây cối — ĐÚNG hay SAI?', ['Đúng', 'Sai', 'Không biết', 'Một phần đúng'], 0, 'Sự vật bao gồm cả 4 nhóm trên.'),
  ]),

  M(5, 'Tập đọc: "Bạn của Nai Nhỏ"', [
    Q('Trong truyện, Nai cha muốn gì khi nghe Nai Nhỏ kể về bạn?', ['Biết bạn của con là người tốt', 'Cấm Nai Nhỏ chơi', 'Tặng bạn quà', 'Đi cùng bạn'], 0, 'Nai cha muốn yên tâm vì bạn của con tốt.'),
    Q('Bạn của Nai Nhỏ có đức tính gì?', ['Khoẻ, thông minh, dũng cảm', 'Lười, kiêu căng', 'Tham ăn', 'Hay khóc'], 0, 'Bạn tốt vừa khỏe, vừa thông minh, vừa dũng cảm.'),
    Q('Bài học từ truyện?', ['Chọn bạn tốt mà chơi', 'Đừng có bạn', 'Bạn nào cũng được', 'Chỉ chơi 1 mình'], 0, 'Chọn bạn tốt → cùng tiến bộ.'),
    Q('"Dũng cảm" là?', ['Sợ hãi', 'Gan dạ, không sợ khó khăn', 'Lười biếng', 'Vui vẻ'], 1, '"Dũng cảm" = gan dạ, không sợ.'),
    Q('Câu "Con của cha có bạn tốt như vậy thì cha yên tâm." là câu?', ['Kể', 'Hỏi', 'Cảm', 'Khiến'], 0, 'Câu kể (thuật lại sự việc), kết thúc bằng dấu chấm.'),
  ]),

  M(6, 'Mở rộng vốn từ: Đồ dùng học tập', [
    Q('Đồ dùng học tập gồm?', ['Bút, vở, thước, cặp sách', 'Bóng đá', 'Đồ chơi', 'Quần áo'], 0, 'Bút, vở, sách, thước, tẩy, cặp sách… là đồ dùng học tập.'),
    Q('Đồ vật dùng để viết?', ['Cái bàn', 'Bút', 'Cái cặp', 'Cái ghế'], 1, 'Bút dùng để viết chữ.'),
    Q('Đồ vật dùng để xoá lỗi?', ['Bút', 'Tẩy (cục gôm)', 'Thước', 'Vở'], 1, 'Tẩy dùng để xoá chữ viết bút chì.'),
    Q('Trong cặp sách thường có?', ['Sách, vở, bút thước', 'Đồ ăn', 'Đồ chơi', 'Nước hoa'], 0, 'Cặp đựng dụng cụ học.'),
    Q('Khi bạn quên bút, em nên?', ['Cho bạn mượn nếu mình có dư', 'Cười nhạo bạn', 'Không cho mượn', 'Lấy mất bút bạn'], 0, 'Giúp bạn = tình bạn đẹp.'),
  ]),

  M(7, 'Tập đọc: "Bím tóc đuôi sam"', [
    Q('Bài "Bím tóc đuôi sam" dạy ta điều gì?', ['Không trêu chọc bạn gái', 'Cắt tóc thật ngắn', 'Trêu bạn cho vui', 'Khóc thật to'], 0, 'Bài học: không trêu chọc bạn, đặc biệt là bạn gái.'),
    Q('Bạn Hà bị làm gì khiến khóc?', ['Bị Tuấn nắm bím tóc lôi', 'Bị bố mắng', 'Bị cô phạt', 'Bị mất bút'], 0, 'Tuấn nắm bím tóc Hà → Hà ngã, khóc.'),
    Q('Sau khi cô giáo phê bình, Tuấn đã?', ['Xin lỗi Hà', 'Cãi cô', 'Trêu thêm', 'Bỏ học'], 0, 'Tuấn nhận lỗi và xin lỗi Hà.'),
    Q('Câu "Tớ xin lỗi cậu nhé!" thể hiện?', ['Sự ăn năn, xin tha thứ', 'Sự khinh thường', 'Sự vui vẻ', 'Sự sợ hãi'], 0, 'Lời xin lỗi chân thành.'),
    Q('"Bím tóc đuôi sam" là kiểu tóc?', ['Tóc tết hai bên', 'Tóc xù', 'Tóc cạo trọc', 'Tóc xoăn'], 0, 'Bím = tết tóc thành đuôi, đuôi sam = giống đuôi con sam.'),
  ]),

  M(8, 'Từ chỉ hoạt động', [
    Q('Từ nào CHỈ HOẠT ĐỘNG?', ['cười', 'cái bàn', 'xanh', 'đẹp'], 0, '"Cười" là hoạt động (của miệng).'),
    Q('Trong "Mèo chạy nhanh", từ chỉ hoạt động là?', ['mèo', 'chạy', 'nhanh', 'không có'], 1, '"Chạy" là hoạt động.'),
    Q('Hoạt động trong lớp gồm?', ['đọc, viết, nghe, nói', 'ăn', 'ngủ', 'chơi điện thoại'], 0, 'Học sinh đọc, viết, nghe giảng, phát biểu.'),
    Q('"Bay" là hoạt động của con vật nào?', ['Chim', 'Cá', 'Bò', 'Rắn'], 0, 'Chim bay nhờ cánh.'),
    Q('Từ nào KHÔNG phải hoạt động?', ['nhảy', 'múa', 'ngọt', 'đọc'], 2, '"Ngọt" là vị, không phải hoạt động.'),
  ]),

  M(9, 'Tập đọc: "Chiếc bút mực"', [
    Q('Bài "Chiếc bút mực" có nội dung gì?', ['Bạn cho bạn mượn bút khi cần', 'Mất bút khóc', 'Đánh nhau vì bút', 'Bút đắt tiền'], 0, 'Truyện về tình bạn — bạn sẵn lòng cho mượn bút.'),
    Q('Vì sao bạn Mai cho bạn Lan mượn bút?', ['Vì Lan quên bút mà bài tập cần', 'Vì Mai có nhiều bút', 'Vì cô yêu cầu', 'Vì bút Mai cũ'], 0, 'Mai cho mượn vì Lan đang cần.'),
    Q('Hành động cho mượn bút thể hiện?', ['Tình bạn, lòng tốt', 'Sự khoe khoang', 'Sự kiêu căng', 'Sự ích kỷ'], 0, 'Lòng tốt và sẻ chia.'),
    Q('Khi mượn đồ của bạn, em nên?', ['Giữ gìn cẩn thận và trả đúng hẹn', 'Làm hỏng', 'Quên trả', 'Tự lấy không xin'], 0, 'Mượn → giữ gìn + trả đúng hẹn.'),
    Q('"Mượn" và "Cho mượn" là 2 phía của?', ['Cùng 1 hành động', 'Hai hành động khác hẳn', 'Sự tranh giành', 'Sự thù ghét'], 0, 'Mượn ↔ Cho mượn là 2 phía của cùng 1 hành động.'),
  ]),

  M(10, 'Mẫu câu "Ai là gì?"', [
    Q('Câu "Mẹ là cô giáo" thuộc mẫu nào?', ['Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Câu hỏi'], 0, 'Có từ "là" nối chủ ngữ + danh từ → kiểu Ai là gì?'),
    Q('Câu nào theo mẫu Ai là gì?', ['Em bé khóc.', 'Hà rất ngoan.', 'Bố là kĩ sư.', 'Trời mưa.'], 2, 'Bố LÀ kĩ sư.'),
    Q('Đặt câu theo mẫu Ai là gì? với "ông em"?', ['Ông em là bác sĩ.', 'Ông em đi chợ.', 'Ông em rất khoẻ.', 'Ông em chạy nhanh.'], 0, '"là bác sĩ" làm vị ngữ.'),
    Q('Câu "Trường em là Trường Tiểu học Hoa Sen." có?', ['Mẫu Ai làm gì?', 'Mẫu Ai là gì?', 'Câu hỏi', 'Câu khiến'], 1, 'Trường em LÀ Trường Tiểu học Hoa Sen.'),
    Q('Câu Ai là gì? thường để?', ['Giới thiệu / định nghĩa', 'Mô tả hành động', 'Mô tả cảm xúc', 'Mệnh lệnh'], 0, 'Dùng để giới thiệu hoặc định nghĩa.'),
  ]),

  M(11, 'Tập đọc: "Người mẹ hiền"', [
    Q('Bài "Người mẹ hiền" nói về?', ['Cô giáo như mẹ của học sinh', 'Mẹ ở nhà', 'Bác sĩ', 'Người bán hàng'], 0, 'Cô giáo dịu dàng, yêu thương học sinh như mẹ.'),
    Q('Cô giáo trong truyện đối xử với Minh và Nam thế nào?', ['Dịu dàng, khuyên răn', 'La mắng', 'Đuổi học', 'Bỏ mặc'], 0, 'Cô khuyên răn nhẹ nhàng → nhận lỗi.'),
    Q('Vì sao gọi cô là "người mẹ hiền"?', ['Cô yêu thương, chăm sóc HS như con', 'Cô là mẹ ruột HS', 'Cô già', 'Cô khó tính'], 0, 'Tình thương như mẹ.'),
    Q('"Hiền" là?', ['Dịu dàng, không dữ', 'Hung dữ', 'Lười', 'Hay cáu'], 0, '"Hiền" = dịu dàng, tốt bụng.'),
    Q('Khi mắc lỗi, em nên?', ['Nhận lỗi và sửa', 'Đổ cho bạn', 'Trốn tránh', 'Khóc lóc'], 0, 'Người biết nhận lỗi là người tiến bộ.'),
  ]),

  M(12, 'Mẫu câu "Ai làm gì?"', [
    Q('Câu nào theo mẫu Ai làm gì?', ['Mẹ là kĩ sư.', 'Bố đọc báo.', 'Trời rất đẹp.', 'Cây xanh tươi.'], 1, 'Bố ĐỌC BÁO (làm gì).'),
    Q('Trong câu "Em quét nhà.", từ chỉ hoạt động là?', ['em', 'quét', 'nhà', 'không có'], 1, '"Quét" là hoạt động.'),
    Q('Câu "Bạn Lan đang viết bài." thuộc mẫu?', ['Ai làm gì?', 'Ai là gì?', 'Ai thế nào?', 'Câu hỏi'], 0, '"Viết bài" là hoạt động → Ai làm gì?'),
    Q('Đặt câu Ai làm gì? với "Em":', ['Em đi học.', 'Em là học sinh.', 'Em rất ngoan.', 'Em đẹp.'], 0, '"Đi học" là hoạt động.'),
    Q('Câu Ai làm gì? thường có?', ['Một từ chỉ hoạt động làm vị ngữ', 'Từ "là" nối', 'Tính từ', 'Phép tính'], 0, 'Vị ngữ là động từ.'),
  ]),

  M(13, 'Từ chỉ đặc điểm', [
    Q('Từ nào chỉ ĐẶC ĐIỂM?', ['cao', 'chạy', 'bút', 'mèo'], 0, '"Cao" là đặc điểm về chiều cao.'),
    Q('Trong "Bầu trời xanh ngắt", từ chỉ đặc điểm là?', ['bầu trời', 'xanh ngắt', 'có cả 2', 'không có'], 1, '"Xanh ngắt" là đặc điểm.'),
    Q('Từ nào KHÔNG phải từ chỉ đặc điểm?', ['vui', 'buồn', 'ăn', 'đẹp'], 2, '"Ăn" là hoạt động.'),
    Q('Mặt trời thường có đặc điểm?', ['tròn, đỏ, nóng', 'vuông, lạnh', 'xanh, nhỏ', 'thấp'], 0, 'Đặc điểm thường thấy của mặt trời.'),
    Q('Em nhỏ thường có đặc điểm?', ['nhỏ, ngoan, hiếu động', 'cao to', 'già', 'mệt'], 0, 'Em nhỏ thường nhỏ + ngoan.'),
  ]),

  M(14, 'Tập đọc: "Mẹ" (thơ Trần Quốc Minh)', [
    Q('Bài thơ "Mẹ" của tác giả nào?', ['Trần Quốc Minh', 'Tố Hữu', 'Xuân Quỳnh', 'Nguyễn Du'], 0, 'Bài "Mẹ" của Trần Quốc Minh.'),
    Q('Bài thơ ca ngợi điều gì?', ['Tình mẹ dịu dàng, lo lắng cho con', 'Bài tập về nhà', 'Đi du lịch', 'Cờ vua'], 0, 'Tình yêu của mẹ dành cho con.'),
    Q('"Mẹ là ngọn gió của con suốt đời" có nghĩa?', ['Mẹ luôn mát mẻ, che chở', 'Mẹ thổi gió', 'Mẹ là quạt', 'Mẹ thổi sáo'], 0, 'Ẩn dụ — mẹ luôn yêu thương, che chở con.'),
    Q('Câu "Mẹ ơi con yêu mẹ!" là?', ['Câu cảm', 'Câu kể', 'Câu hỏi', 'Câu khiến'], 0, 'Có dấu chấm than → câu cảm.'),
    Q('Em nên làm gì để mẹ vui?', ['Học giỏi và ngoan', 'Đòi quà', 'Cãi mẹ', 'Vứt rác bừa'], 0, 'Học giỏi + ngoan = mẹ vui.'),
  ]),

  M(15, 'Tả ngắn: Người thân', [
    Q('Mở bài tả mẹ nên?', ['Giới thiệu mẹ là ai', 'Kể chuyện đi du lịch', 'Tả con mèo', 'Tả cây cối'], 0, 'Mở bài giới thiệu đối tượng.'),
    Q('Tả mẹ có thể có chi tiết nào?', ['Khuôn mặt, mái tóc, công việc, tình cảm', 'Tốc độ máy bay', 'Số tiền lương', 'Kích cỡ tủ'], 0, 'Tả ngoại hình + hoạt động + tình cảm.'),
    Q('Câu "Mẹ em rất hiền và đảm đang." là?', ['Câu Ai thế nào?', 'Câu Ai làm gì?', 'Câu hỏi', 'Câu khiến'], 0, '"Hiền và đảm đang" là đặc điểm.'),
    Q('Kết bài tả người nên?', ['Nói về tình cảm của mình với người đó', 'Tả tiếp', 'Đề tài khác', 'Để trống'], 0, 'Kết bài thể hiện cảm xúc.'),
    Q('Bài tả người dài bao nhiêu câu cho học sinh lớp 2?', ['3-5 câu', '20 câu', '100 câu', '1 câu'], 0, 'Lớp 2 viết ngắn — 3-5 câu.'),
  ]),

  M(16, 'Tập đọc: "Sáng kiến của bé Hà"', [
    Q('Bé Hà nghĩ ra "sáng kiến" gì?', ['Tổ chức ngày lễ cho ông bà', 'Trốn học', 'Mua đồ chơi', 'Đi chơi'], 0, 'Bé Hà nghĩ tổ chức ngày của ông bà.'),
    Q('Sáng kiến của Hà nói lên điều gì?', ['Hà yêu kính ông bà', 'Hà thích nghỉ học', 'Hà lười', 'Hà thích quà'], 0, 'Tình cảm của Hà với ông bà.'),
    Q('Ngày Quốc tế Người cao tuổi là?', ['1/10', '1/6', '1/1', '8/3'], 0, '01/10 hàng năm — Ngày Quốc tế Người cao tuổi.'),
    Q('Câu hỏi "Ông bà có vui không?" kết thúc bằng?', ['Dấu chấm', 'Dấu chấm hỏi', 'Dấu chấm than', 'Dấu phẩy'], 1, 'Câu hỏi → dấu chấm hỏi.'),
    Q('Tình cảm với ông bà thể hiện qua?', ['Lễ phép, quan tâm, chăm sóc', 'Cãi lại', 'Đòi quà', 'Trốn ông bà'], 0, 'Yêu kính = lễ phép + quan tâm.'),
  ]),

  M(17, 'Mẫu câu "Ai thế nào?"', [
    Q('Câu "Bạn Lan rất chăm chỉ." thuộc mẫu?', ['Ai làm gì?', 'Ai là gì?', 'Ai thế nào?', 'Câu hỏi'], 2, '"Chăm chỉ" là đặc điểm → Ai thế nào?'),
    Q('Câu nào theo mẫu Ai thế nào?', ['Bố đọc báo.', 'Trời nắng.', 'Em là HS.', 'Em đi học.'], 1, '"Nắng" là đặc điểm.'),
    Q('Đặt câu Ai thế nào? với "Cánh đồng":', ['Cánh đồng xanh mướt.', 'Cánh đồng có lúa.', 'Cánh đồng là đất.', 'Cánh đồng đi đâu?'], 0, '"Xanh mướt" là đặc điểm.'),
    Q('Câu "Cây xoài cao to" — vị ngữ là?', ['Cây xoài', 'Cao to', 'Cây', 'Cao'], 1, '"Cao to" làm vị ngữ.'),
    Q('Câu Ai thế nào? thường có vị ngữ là?', ['Tính từ (từ chỉ đặc điểm)', 'Động từ', 'Danh từ', 'Chữ số'], 0, 'Vị ngữ là từ chỉ đặc điểm.'),
  ]),

  M(18, 'Ôn tập cuối Học kỳ 1', [
    Q('Câu "Mẹ là cô giáo." thuộc mẫu?', ['Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Câu hỏi'], 0, 'Có từ "là".'),
    Q('Từ nào chỉ sự vật?', ['chạy', 'cái bàn', 'xanh', 'vui'], 1, '"Cái bàn" là đồ vật.'),
    Q('Từ nào chỉ hoạt động?', ['đẹp', 'hát', 'cao', 'vàng'], 1, '"Hát" là hoạt động.'),
    Q('Từ nào chỉ đặc điểm?', ['mèo', 'chạy', 'cao', 'sách'], 2, '"Cao" là đặc điểm.'),
    Q('Câu cảm thường kết thúc bằng dấu?', ['Chấm', 'Chấm hỏi', 'Chấm than', 'Phẩy'], 2, 'Câu cảm → dấu !.'),
    Q('Tên riêng "Hà Nội" viết?', ['hà nội', 'Hà nội', 'Hà Nội', 'HÀ NỘI'], 2, 'Tên riêng → viết hoa chữ đầu mỗi tiếng.'),
    Q('Bài "Có công mài sắt, có ngày nên kim" khuyên?', ['Kiên trì', 'Lười', 'Nói dối', 'Tham ăn'], 0, 'Kiên trì → thành công.'),
    Q('Khi mượn đồ của bạn, em nên?', ['Giữ gìn và trả đúng hẹn', 'Làm hỏng', 'Quên trả', 'Vứt đi'], 0, 'Mượn → giữ gìn.'),
  ], { difficulty: 2, description: 'Ôn tập tổng hợp HK1: từ loại, mẫu câu, các bài tập đọc đã học.' }),

  // ──────────────── HK2 ────────────────
  M(19, 'Tập đọc: "Chuyện bốn mùa"', [
    Q('Bốn mùa trong năm là?', ['Xuân – Hạ – Thu – Đông', 'Sáng – Trưa – Chiều – Tối', 'Đỏ – Vàng – Xanh – Tím', 'Lúc đói – Lúc no'], 0, 'Một năm có 4 mùa: xuân hạ thu đông.'),
    Q('Mùa Xuân có gì?', ['Hoa nở, không khí ấm', 'Tuyết rơi', 'Nắng gắt', 'Lá rụng'], 0, 'Mùa xuân ấm, cây cối đâm chồi.'),
    Q('Mùa Đông thường?', ['Lạnh', 'Nóng', 'Mát', 'Khô'], 0, 'Mùa đông thời tiết lạnh.'),
    Q('Mỗi mùa có vai trò gì?', ['Mang lại điều quý cho con người và cây cỏ', 'Vô ích', 'Phá hoại', 'Chỉ đẹp'], 0, 'Mỗi mùa đều mang lại giá trị riêng.'),
    Q('"Bốn mùa" nghĩa là?', ['Bốn mùa trong năm', 'Bốn ngày', 'Bốn tháng', 'Bốn giờ'], 0, '4 mùa = 4 thời kỳ trong 1 năm.'),
  ]),

  M(20, 'Mở rộng vốn từ: Thời tiết', [
    Q('Từ ngữ về thời tiết:', ['Nắng, mưa, gió, lạnh', 'Cười, khóc', 'Đẹp, xấu', 'Cao, thấp'], 0, 'Thời tiết: nắng/mưa/gió/lạnh/nóng.'),
    Q('Trời "nắng chang chang" nghĩa là?', ['Trời nắng rất gắt', 'Trời mưa to', 'Trời mát mẻ', 'Trời rất lạnh'], 0, '"Chang chang" = nắng to, gắt.'),
    Q('Khi trời "âm u" là?', ['Trời nhiều mây, không có nắng', 'Trời nắng to', 'Trời tuyết', 'Trời bão'], 0, '"Âm u" = u ám, không nắng.'),
    Q('Đặt câu Ai thế nào? với "Trời":', ['Trời rất đẹp.', 'Trời mưa.', 'Trời là gì?', 'Trời đi đâu?'], 0, '"Rất đẹp" là đặc điểm.'),
    Q('Dự báo thời tiết thường nói về?', ['Trời nắng/mưa/lạnh/nóng', 'Bài tập', 'Đồ ăn', 'Đồ chơi'], 0, 'Dự báo: nhiệt độ + nắng/mưa.'),
  ]),

  M(21, 'Tập đọc: "Một trí khôn hơn trăm trí khôn"', [
    Q('Truyện "Một trí khôn hơn trăm trí khôn" nói về 2 con vật?', ['Chồn và Gà Rừng', 'Mèo và Chó', 'Cá và Tôm', 'Voi và Khỉ'], 0, 'Hai nhân vật chính: Chồn (khoe khôn) và Gà Rừng (khiêm tốn).'),
    Q('Gà Rừng "có một trí khôn" nhưng?', ['Nhanh trí, cứu được Chồn', 'Hèn nhát', 'Khoe khoang', 'Lười'], 0, 'Gà Rừng có 1 mẹo nhưng quyết định nhanh, cứu cả 2.'),
    Q('Bài học của truyện?', ['Khiêm tốn và biết suy nghĩ kĩ', 'Khoe khoang', 'Lười suy nghĩ', 'Tham lam'], 0, 'Khiêm tốn + thực tế hơn khoe khoang.'),
    Q('"Khôn" trong truyện có nghĩa?', ['Thông minh, biết xử lý', 'Đẹp', 'Giàu', 'Cao'], 0, '"Khôn" = thông minh, có trí.'),
    Q('Khi khoe khoang, người ta thường?', ['Bị người khác đánh giá thấp khi gặp khó', 'Được khen mãi', 'Giỏi thật', 'Không có gì'], 0, 'Người khoe khoang thường thiếu thực chất.'),
  ]),

  M(22, 'Nghỉ Tết — Văn hoá Tết cổ truyền', [
    Q('Tết Nguyên Đán là Tết gì?', ['Tết cổ truyền dân tộc Việt', 'Tết Tây', 'Tết Trung Thu', 'Tết Halloween'], 0, 'Nguyên Đán = đầu năm âm lịch.'),
    Q('Bánh truyền thống của Tết miền Bắc?', ['Bánh chưng', 'Bánh tét', 'Pizza', 'Bánh mì'], 0, 'Bắc: bánh chưng vuông. Nam: bánh tét tròn dài.'),
    Q('Câu chúc Tết phổ biến?', ['"Chúc mừng năm mới!"', '"Tạm biệt!"', '"Đi học!"', '"Im lặng!"'], 0, 'Câu chúc đầu năm.'),
    Q('Phong tục Tết là?', ['Lì xì, chúc Tết, dọn nhà', 'Trốn nhà', 'Vứt rác', 'Cãi nhau'], 0, 'Phong tục đẹp ngày Tết.'),
    Q('Tết đến em được?', ['Mặc quần áo mới, nhận lì xì, chúc Tết', 'Không có gì', 'Mất bạn', 'Buồn'], 0, 'Niềm vui ngày Tết.'),
  ], { difficulty: 1, description: 'Tuần nghỉ Tết — học về văn hoá Tết cổ truyền.' }),

  M(23, 'Tập đọc: "Sơn Tinh, Thuỷ Tinh"', [
    Q('Truyện "Sơn Tinh, Thuỷ Tinh" là truyện gì?', ['Truyền thuyết Việt Nam', 'Cổ tích Trung Quốc', 'Truyện hiện đại', 'Khoa học viễn tưởng'], 0, 'Truyền thuyết dân gian Việt Nam.'),
    Q('Sơn Tinh là thần gì?', ['Núi', 'Nước', 'Mây', 'Lửa'], 0, 'Sơn = núi → Sơn Tinh là thần núi.'),
    Q('Thuỷ Tinh là thần gì?', ['Nước', 'Núi', 'Đất', 'Gió'], 0, 'Thuỷ = nước → Thuỷ Tinh là thần nước.'),
    Q('Mỗi năm Thuỷ Tinh dâng nước đánh Sơn Tinh — giải thích hiện tượng?', ['Lũ lụt hàng năm', 'Trời mưa rào', 'Nắng nóng', 'Tuyết rơi'], 0, 'Truyền thuyết giải thích lũ lụt.'),
    Q('Vợ của Sơn Tinh là?', ['Công chúa Mị Nương', 'Tấm Cám', 'Bạch Tuyết', 'Cinderella'], 0, 'Mị Nương — công chúa Vua Hùng thứ 18.'),
  ]),

  M(24, 'Dấu chấm, dấu phẩy', [
    Q('Dấu chấm dùng để?', ['Kết thúc câu kể', 'Hỏi điều gì đó', 'Liệt kê', 'Bộc lộ cảm xúc'], 0, 'Câu kể → dấu chấm.'),
    Q('Dấu phẩy dùng để?', ['Tách các từ cùng loại / ngắt nghỉ trong câu', 'Kết thúc câu', 'Hỏi', 'Khiến'], 0, 'Dấu phẩy → ngắt nghỉ + tách liệt kê.'),
    Q('Điền dấu: "Trên đường có ô tô ___ xe máy ___ xe đạp."', ['Cả 2 chỗ đều phẩy', 'Cả 2 chỗ đều chấm', 'Một chấm + một phẩy', 'Không cần dấu'], 0, 'Liệt kê → phẩy.'),
    Q('Câu nào ĐÚNG?', ['Em đi học.', 'Em đi học,', 'Em đi học?', 'em đi học.'], 0, 'Câu kể → kết thúc bằng chấm, đầu câu viết hoa.'),
    Q('Sau dấu chấm, chữ tiếp theo phải?', ['Viết hoa', 'Viết thường', 'Bằng số', 'Tuỳ ý'], 0, 'Sau chấm → viết hoa.'),
  ]),

  M(25, 'Tập đọc: "Bác sĩ Sói"', [
    Q('Sói trong truyện "Bác sĩ Sói" giả làm gì?', ['Bác sĩ', 'Học sinh', 'Cô giáo', 'Cha mẹ'], 0, 'Sói giả bác sĩ để lừa Ngựa.'),
    Q('Ngựa đã làm gì để thoát?', ['Đá cho Sói một cú', 'Khóc', 'Bỏ chạy mất tích', 'Cho Sói tiền'], 0, 'Ngựa nhanh trí đá Sói.'),
    Q('Bài học từ truyện?', ['Bình tĩnh + thông minh → thoát hiểm', 'Cứ tin người lạ', 'Sợ hãi', 'Khóc lóc'], 0, 'Phải tỉnh táo trước kẻ xấu.'),
    Q('"Lừa" nghĩa là?', ['Nói dối để lấy lợi', 'Nói thật', 'Im lặng', 'Cười to'], 0, '"Lừa" = gian dối.'),
    Q('Khi gặp người lạ rủ đi, em nên?', ['Không đi, báo người lớn', 'Đi ngay', 'Nhận quà', 'Cho địa chỉ nhà'], 0, 'Cảnh giác với người lạ.'),
  ]),

  M(26, 'Mở rộng vốn từ: Bác Hồ', [
    Q('Bác Hồ tên thật là?', ['Nguyễn Sinh Cung', 'Nguyễn Văn A', 'Lê Văn B', 'Trần Văn C'], 0, 'Tên khai sinh: Nguyễn Sinh Cung.'),
    Q('Bác Hồ sinh ngày?', ['19/5/1890', '2/9/1945', '30/4/1975', '1/1/2000'], 0, '19/5/1890 tại Nghệ An.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['2/9/1945', '19/5/1890', '30/4/1975', '7/5/1954'], 0, '2/9/1945 tại Quảng trường Ba Đình.'),
    Q('Bác Hồ là?', ['Lãnh tụ dân tộc Việt Nam', 'Diễn viên', 'Ca sĩ', 'Vận động viên'], 0, 'Lãnh tụ vĩ đại của dân tộc Việt Nam.'),
    Q('Lăng Bác ở đâu?', ['Hà Nội', 'TP HCM', 'Huế', 'Đà Nẵng'], 0, 'Lăng Bác ở Quảng trường Ba Đình, Hà Nội.'),
  ]),

  M(27, 'Tập đọc: "Quả tim Khỉ"', [
    Q('Cá Sấu lừa Khỉ vì sao?', ['Vì muốn ăn quả tim Khỉ', 'Vì yêu thương', 'Vì kết bạn', 'Vì giúp đỡ'], 0, 'Cá Sấu định lừa lấy quả tim Khỉ.'),
    Q('Khỉ thoát chết nhờ?', ['Thông minh, nhanh trí', 'Khoẻ', 'Hung dữ', 'May mắn'], 0, 'Khỉ nhanh trí nói dối "để tim ở cây" → thoát.'),
    Q('Bài học của truyện?', ['Bình tĩnh + thông minh thoát hiểm', 'Tin người lạ', 'Lười suy nghĩ', 'Tham ăn'], 0, 'Thông minh giúp ta thoát hiểm.'),
    Q('Cá Sấu trong truyện là?', ['Kẻ xấu, giả vờ làm bạn', 'Bạn tốt', 'Anh hùng', 'Người thân'], 0, 'Cá Sấu tham lam, giả bạn để hại.'),
    Q('"Tim" trong câu chuyện là?', ['Cơ quan trong cơ thể', 'Đồ chơi', 'Cây cối', 'Tiền'], 0, 'Quả tim = cơ quan tuần hoàn máu.'),
  ]),

  M(28, 'Dấu chấm hỏi · Dấu chấm than', [
    Q('Câu hỏi kết thúc bằng?', ['Dấu chấm hỏi (?)', 'Dấu chấm (.)', 'Dấu phẩy (,)', 'Dấu chấm than (!)'], 0, 'Câu hỏi → ?'),
    Q('Câu cảm thường kết thúc bằng?', ['Dấu chấm than (!)', 'Dấu chấm (.)', 'Dấu chấm hỏi (?)', 'Dấu hai chấm'], 0, 'Câu cảm → !'),
    Q('Câu "Bạn có thích đi học không?" là câu?', ['Kể', 'Hỏi', 'Cảm', 'Khiến'], 1, 'Có từ "không" + dấu ? → câu hỏi.'),
    Q('Câu "Đẹp quá!" là câu?', ['Kể', 'Hỏi', 'Cảm', 'Khiến'], 2, 'Dấu ! + bộc lộ cảm xúc → câu cảm.'),
    Q('Điền dấu: "Hôm nay trời nắng quá ___"', ['!', '.', '?', ','], 0, 'Câu cảm xúc.'),
  ]),

  M(29, 'Tập đọc: "Cò và Cuốc"', [
    Q('Cò và Cuốc khác nhau ở điểm gì?', ['Cò siêng năng, Cuốc lười', 'Cò bay, Cuốc không', 'Cò đẹp, Cuốc xấu', 'Không khác gì'], 0, 'Cò chăm chỉ kiếm ăn, Cuốc lười, chỉ kêu.'),
    Q('Bài học từ truyện?', ['Phải lao động, không nên lười', 'Lười là tốt', 'Khoe khoang', 'Nói dối'], 0, 'Lao động vinh quang.'),
    Q('"Lội" là?', ['Đi trong nước nông', 'Bay', 'Chạy', 'Ngồi'], 0, '"Lội" = đi dưới nước nông.'),
    Q('Cò làm việc gì?', ['Bắt cá tôm', 'Chơi đùa', 'Ngủ', 'Khóc'], 0, 'Cò siêng năng kiếm thức ăn.'),
    Q('"Cuốc kêu" nghĩa là?', ['Tiếng chim cuốc kêu (tu hú… cuốc cuốc)', 'Cuốc trong vườn', 'Đi cuốc đất', 'Tên người'], 0, 'Tiếng kêu đặc trưng của chim cuốc.'),
  ]),

  M(30, 'Mở rộng vốn từ: Cây cối', [
    Q('Cây có các bộ phận?', ['Rễ, thân, lá, hoa, quả', 'Mắt, mũi, miệng', 'Bánh xe, vô lăng', 'Cánh, đuôi'], 0, 'Cây gồm 5 bộ phận chính.'),
    Q('Bộ phận hút nước của cây?', ['Lá', 'Thân', 'Rễ', 'Hoa'], 2, 'Rễ hút nước + muối khoáng.'),
    Q('Lá cây thường có màu?', ['Xanh', 'Đỏ', 'Tím', 'Đen'], 0, 'Lá có diệp lục → màu xanh.'),
    Q('Cây ăn quả gồm?', ['Cam, xoài, ổi, mít', 'Lúa', 'Hoa hồng', 'Cỏ'], 0, 'Cây cho quả ăn được.'),
    Q('"Cây cao bóng cả" nghĩa là?', ['Người lớn tuổi đáng kính trong nhà / cộng đồng', 'Cây cao thật', 'Trồng cây', 'Cắt cây'], 0, 'Ẩn dụ chỉ người lớn đáng kính.'),
  ]),

  M(31, 'Tập đọc: "Bóp nát quả cam" (Trần Quốc Toản)', [
    Q('Trần Quốc Toản bóp nát quả cam vì?', ['Tức giận vì không được dự bàn việc nước', 'Đói', 'Nghịch', 'Vô tình'], 0, 'Tức giận vì còn nhỏ không được dự hội nghị chống giặc.'),
    Q('Trần Quốc Toản là?', ['Một thiếu niên anh hùng đời Trần', 'Vua', 'Tướng nước ngoài', 'Người hiện đại'], 0, 'Thiếu niên anh hùng thời Trần, chống quân Nguyên.'),
    Q('Quả cam được vua ban — Quốc Toản bóp nát vì sao?', ['Vô tình, do quá tức giận', 'Cố ý vứt', 'Không thích cam', 'Đùa nghịch'], 0, 'Vì tức giận, vô tình bóp mạnh.'),
    Q('Bài học của truyện?', ['Lòng yêu nước thể hiện từ tuổi nhỏ', 'Vứt đồ vua ban', 'Tức giận hữu ích', 'Không tôn trọng vua'], 0, 'Tuổi nhỏ cũng có thể yêu nước.'),
    Q('"Bóp nát" là?', ['Dùng tay nắm chặt làm vỡ', 'Đập', 'Cắt', 'Đốt'], 0, '"Bóp nát" = dùng tay nắm vỡ.'),
  ]),

  M(32, 'Viết đoạn văn 3-5 câu', [
    Q('Đoạn văn ngắn 3-5 câu thường có?', ['Mở đoạn, thân đoạn, kết đoạn', 'Chỉ 1 câu', 'Hàng trăm câu', 'Không có gì'], 0, 'Cấu trúc 3 phần cơ bản.'),
    Q('Mở đoạn tả cây bàng nên?', ['Giới thiệu cây bàng', 'Tả con mèo', 'Đề tài khác', 'Để trống'], 0, 'Mở đoạn → giới thiệu đối tượng.'),
    Q('Thân đoạn tả?', ['Chi tiết về đối tượng', 'Đề tài khác', 'Không tả', 'Tả gì cũng được'], 0, 'Thân đoạn → chi tiết cụ thể.'),
    Q('Kết đoạn nên?', ['Bày tỏ tình cảm/suy nghĩ', 'Tả tiếp', 'Đặt câu hỏi', 'Im lặng'], 0, 'Kết đoạn → cảm xúc.'),
    Q('Khi viết, đầu câu phải?', ['Viết hoa', 'Viết thường', 'Bằng số', 'Tuỳ ý'], 0, 'Đầu câu → viết hoa.'),
  ]),

  M(33, 'Tập đọc: "Lượm" (thơ Tố Hữu)', [
    Q('Lượm là?', ['Chú bé liên lạc nhỏ tuổi thời kháng chiến', 'Người lớn', 'Anh bộ đội', 'Cô giáo'], 0, 'Lượm là chú bé liên lạc dũng cảm.'),
    Q('Bài thơ "Lượm" của tác giả?', ['Tố Hữu', 'Xuân Quỳnh', 'Trần Đăng Khoa', 'Nguyễn Du'], 0, 'Tác giả Tố Hữu.'),
    Q('"Cái xắc xinh xinh" và "Cái chân thoăn thoắt" miêu tả?', ['Hình dáng nhanh nhẹn của Lượm', 'Đồ vật', 'Cảnh thiên nhiên', 'Người lớn'], 0, 'Lượm nhỏ, nhanh nhẹn.'),
    Q('Tinh thần của Lượm thể hiện điều gì?', ['Anh hùng, dũng cảm dù còn nhỏ', 'Sợ hãi', 'Lười nhác', 'Khoe khoang'], 0, 'Tinh thần anh hùng của tuổi nhỏ.'),
    Q('"Liên lạc" trong kháng chiến nghĩa là?', ['Người đưa tin', 'Đi du lịch', 'Cô giáo', 'Bác sĩ'], 0, 'Người chuyển tin giữa các đơn vị.'),
  ]),

  M(34, 'Mở rộng vốn từ: Quê hương – Đất nước', [
    Q('Quê hương em là?', ['Nơi em sinh ra và lớn lên', 'Nước ngoài', 'Một bài hát', 'Đồ vật'], 0, 'Quê hương = nơi sinh ra.'),
    Q('Việt Nam có thủ đô là?', ['Hà Nội', 'Huế', 'TP HCM', 'Đà Nẵng'], 0, 'Thủ đô của Việt Nam là Hà Nội.'),
    Q('Cờ Việt Nam có?', ['Nền đỏ, sao vàng', 'Nền trắng, sao đỏ', 'Nền xanh', 'Nền đen'], 0, 'Cờ đỏ sao vàng 5 cánh.'),
    Q('Việt Nam có hình dáng?', ['Chữ S', 'Chữ O', 'Chữ V', 'Vuông'], 0, 'Việt Nam hình chữ S.'),
    Q('"Non sông gấm vóc" chỉ?', ['Đất nước Việt Nam tươi đẹp', 'Vải vóc', 'Núi rừng', 'Sông biển'], 0, 'Ẩn dụ chỉ đất nước đẹp.'),
  ]),

  M(35, 'Tập đọc: "Người làm đồ chơi"', [
    Q('Truyện "Người làm đồ chơi" nói về?', ['Bác thợ làm đồ chơi và lòng biết ơn của bạn nhỏ', 'Đua xe', 'Đi du lịch', 'Đi chợ'], 0, 'Bác thợ làm đồ chơi và tình cảm trẻ em với nghề thủ công.'),
    Q('Bạn nhỏ trong truyện cảm thấy thế nào với bác thợ?', ['Yêu quý, biết ơn', 'Coi thường', 'Không quan tâm', 'Cáu giận'], 0, 'Yêu quý người làm ra đồ chơi cho mình.'),
    Q('Đồ chơi thủ công như "tò he" làm bằng?', ['Bột nặn (gạo nếp + phẩm màu)', 'Nhựa', 'Sắt', 'Giấy'], 0, 'Tò he là bột nếp pha màu.'),
    Q('Bài học từ truyện?', ['Trân trọng người lao động', 'Coi thường người nghèo', 'Đòi quà nhiều', 'Lười học'], 0, 'Trân trọng mọi nghề lao động chân chính.'),
    Q('"Đồ chơi dân gian" là?', ['Đồ chơi truyền thống Việt Nam', 'Đồ chơi điện tử', 'Đồ chơi nước ngoài', 'Đồ ăn'], 0, 'Tò he, đèn ông sao, trống quân… là đồ chơi dân gian.'),
  ]),

  M(36, 'Ôn tập cuối năm', [
    Q('Câu "Bạn Lan rất chăm chỉ." thuộc mẫu?', ['Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Câu hỏi'], 2, '"Chăm chỉ" là đặc điểm.'),
    Q('Từ "ngoan" là từ chỉ?', ['Sự vật', 'Hoạt động', 'Đặc điểm', 'Số lượng'], 2, '"Ngoan" là đặc điểm.'),
    Q('Tên riêng "Hồ Chí Minh" viết?', ['hồ chí minh', 'Hồ chí minh', 'Hồ Chí Minh', 'HỒ CHÍ MINH'], 2, 'Tên người → viết hoa chữ đầu mỗi tiếng.'),
    Q('Câu hỏi kết thúc bằng?', ['Chấm', 'Chấm hỏi', 'Chấm than', 'Phẩy'], 1, '? cho câu hỏi.'),
    Q('Bốn mùa trong năm?', ['Xuân – Hạ – Thu – Đông', 'Đỏ – Cam – Vàng – Lục', 'Sáng – Trưa – Chiều – Tối', 'Đông – Tây – Nam – Bắc'], 0, '4 mùa.'),
    Q('Trần Quốc Toản nổi tiếng vì?', ['Lòng yêu nước thiếu niên', 'Vẽ tranh đẹp', 'Hát hay', 'Đá bóng giỏi'], 0, 'Thiếu niên anh hùng đời Trần.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ngày?', ['2/9/1945', '19/5/1890', '30/4/1975', '7/5/1954'], 0, '2/9/1945.'),
    Q('Việt Nam có hình?', ['Chữ S', 'Chữ O', 'Vuông', 'Tròn'], 0, 'Hình chữ S.'),
    Q('Bài "Có công mài sắt, có ngày nên kim" khuyên?', ['Kiên trì', 'Lười', 'Tham', 'Khoe'], 0, 'Kiên trì + chăm chỉ.'),
    Q('Khi mượn đồ của bạn, em nên?', ['Giữ gìn và trả đúng hẹn', 'Vứt đi', 'Quên trả', 'Làm hỏng'], 0, 'Mượn → giữ gìn.'),
  ], { difficulty: 3, description: 'Bài kiểm tra cuối năm Tiếng Việt — tổng hợp toàn bộ kiến thức.' }),
];

export const P2TV_SCENARIOS = indexBy(P2TV_WEEKS);
