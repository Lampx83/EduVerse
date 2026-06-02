// ============================================================
// Lớp 3 · TIẾNG VIỆT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018 (Cánh Diều / Kết nối / Chân trời).
// 7 tiết/tuần.
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3TV', 'tieng-viet', n, title, qs, opts);

export const P3TV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập âm – vần đã học (Lớp 2)', [
    Q('Tiếng "trường" có cấu tạo gồm?', ['Âm đầu "tr" + vần "ường"', 'Chỉ 1 âm', 'Âm đầu "t" + vần "rường"', 'Âm đầu "tr" + vần "ương"'], 0, 'Âm đầu "tr" + vần "ường" + thanh huyền.'),
    Q('Tiếng "khoẻ" có vần gì?', ['oe', 'oẻ', 'kho', 'oè'], 1, 'Vần "oẻ" có thanh hỏi.'),
    Q('Chọn cách viết HOA đúng: hà nội', ['hà nội', 'Hà nội', 'Hà Nội', 'hà Nội'], 2, 'Tên riêng địa danh: viết hoa cả 2 chữ.'),
    Q('Sắp xếp đúng bảng chữ cái: c, b, đ, a', ['a, b, c, đ', 'a, c, b, đ', 'đ, c, b, a', 'b, a, c, đ'], 0, 'Bảng chữ cái: a, ă, â, b, c, d, đ...'),
    Q('Tiếng nào có chứa vần "ươu"?', ['hươu', 'mưa', 'mèo', 'sông'], 0, '"Hươu" = h + ươu.'),
    Q('Câu nào viết đúng chính tả?', ['Em yêu trường em.', 'em Yêu trường em', 'Em yêu trường em', 'EM yêu trường em.'], 0, 'Đầu câu viết hoa, cuối câu có dấu chấm.'),
  ]),

  M(2, 'Tập đọc: "Cậu bé thông minh"', [
    Q('Truyện "Cậu bé thông minh" ca ngợi điều gì ở nhân vật chính?', ['Sự thông minh, nhanh trí', 'Sức khoẻ', 'Vẻ đẹp', 'Sự giàu có'], 0, 'Cậu bé dùng trí khôn để đối đáp với nhà vua.'),
    Q('Nhà vua thử tài cậu bé bằng cách?', ['Ra câu đố / mệnh lệnh khó', 'Tặng vàng', 'Bắt giam', 'Đuổi đi'], 0, 'Vua ra những đề bài khó để thử trí thông minh.'),
    Q('Bài học từ truyện?', ['Trí thông minh có thể giúp ta vượt khó', 'Sức mạnh là quan trọng nhất', 'Của cải quan trọng nhất', 'Không cần học'], 0, 'Trí khôn giúp giải quyết tình huống khó.'),
    Q('"Thông minh" trái nghĩa với?', ['Khôn ngoan', 'Dại, ngốc', 'Vui vẻ', 'Đẹp'], 1, 'Trái nghĩa của thông minh là dại, ngốc.'),
    Q('Câu "Cậu bé rất thông minh." là kiểu câu gì?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Cầu khiến'], 1, 'Kiểu "Ai thế nào?" — nói về đặc điểm/tính cách.'),
    Q('Khi gặp việc khó, em nên?', ['Bình tĩnh suy nghĩ tìm cách giải quyết', 'Bỏ chạy', 'Khóc', 'Đổ lỗi cho người khác'], 0, 'Bình tĩnh + suy nghĩ là cách của người thông minh.'),
  ]),

  M(3, 'Từ chỉ sự vật – Ôn các kiểu câu (Ai – là gì?)', [
    Q('Từ nào CHỈ SỰ VẬT?', ['chạy', 'cô giáo', 'xanh', 'vui'], 1, '"Cô giáo" là sự vật (người).'),
    Q('Trong câu "Bố em là bác sĩ.", từ chỉ sự vật là?', ['bố em, bác sĩ', 'là', 'em', 'không có'], 0, '"Bố em" và "bác sĩ" đều là sự vật.'),
    Q('Câu "Mẹ em là cô giáo." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Cầu khiến'], 2, 'Có từ "là" → kiểu "Ai là gì?".'),
    Q('Trong "Hà Nội là thủ đô của Việt Nam.", bộ phận "Hà Nội" trả lời cho câu hỏi?', ['Là gì?', 'Ai (cái gì)?', 'Làm gì?', 'Thế nào?'], 1, '"Hà Nội" trả lời cho "Cái gì?".'),
    Q('Đặt câu kiểu "Ai là gì?" với "em":', ['Em là học sinh lớp 3.', 'Em chạy nhanh.', 'Em rất ngoan.', 'Em đi học.'], 0, 'Có "là" + danh từ chỉ chức vụ/loại → đúng kiểu.'),
    Q('Từ nào KHÔNG chỉ sự vật?', ['quyển sách', 'con mèo', 'ngôi trường', 'chăm chỉ'], 3, '"Chăm chỉ" là từ chỉ đặc điểm.'),
  ]),

  M(4, 'Tập đọc: "Hai bàn tay em"', [
    Q('Bài thơ "Hai bàn tay em" ca ngợi?', ['Đôi bàn tay đáng yêu, có ích của em bé', 'Đôi mắt', 'Mái tóc', 'Đôi chân'], 0, 'Hai bàn tay vừa đẹp vừa làm được nhiều việc.'),
    Q('Trong bài, hai bàn tay được so sánh với?', ['Hoa, nụ, cánh sen', 'Mặt trời', 'Con chim', 'Quả bóng'], 0, 'So sánh với hoa, nụ — gợi sự xinh xắn.'),
    Q('Hai bàn tay giúp em làm gì?', ['Đánh răng, chải đầu, học bài...', 'Chỉ để chơi', 'Không làm gì', 'Đẩy bạn'], 0, 'Bài thơ liệt kê những việc đôi tay làm hằng ngày.'),
    Q('Bài thơ thể hiện tình cảm gì?', ['Yêu quý bản thân, biết giữ gìn cơ thể', 'Ghét đôi tay', 'Buồn bã', 'Tức giận'], 0, 'Yêu quý đôi tay → yêu quý chính mình.'),
    Q('"Hồng hào" là từ chỉ?', ['Hoạt động', 'Đặc điểm (màu da)', 'Sự vật', 'Số lượng'], 1, '"Hồng hào" tả màu sắc, là đặc điểm.'),
    Q('Em nên làm gì để giữ gìn đôi tay?', ['Rửa tay sạch, cắt móng tay', 'Để bẩn', 'Cắn móng tay', 'Không rửa'], 0, 'Vệ sinh tay thường xuyên.'),
  ]),

  M(5, 'Mở rộng vốn từ: Gia đình', [
    Q('Từ nào chỉ NGƯỜI THÂN trong gia đình?', ['ông, bà, bố, mẹ', 'cô giáo', 'bạn cùng lớp', 'bác bảo vệ'], 0, 'Ông bà bố mẹ là người thân trong gia đình.'),
    Q('"Anh em như thể tay chân" muốn nói?', ['Anh em phải đoàn kết, yêu thương', 'Anh em đánh nhau', 'Anh em xa cách', 'Anh em không cần nhau'], 0, 'Câu tục ngữ về tình anh em ruột thịt.'),
    Q('Người sinh ra bố em gọi là?', ['Ông bà nội', 'Ông bà ngoại', 'Cô', 'Chú'], 0, 'Bố mẹ của bố = ông bà nội.'),
    Q('Em gái của mẹ em gọi là?', ['Cô', 'Dì', 'Thím', 'Mợ'], 1, 'Em/chị gái của mẹ gọi là dì.'),
    Q('Câu "Cả nhà em rất yêu thương nhau." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 1, 'Tả tình cảm → "Ai thế nào?".'),
    Q('Em nên làm gì để gia đình hạnh phúc?', ['Vâng lời, giúp đỡ bố mẹ', 'Cãi lời', 'Không học', 'Trốn việc'], 0, 'Vâng lời và giúp đỡ là việc con ngoan nên làm.'),
  ]),

  M(6, 'Tập đọc: "Ai có lỗi?"', [
    Q('Truyện "Ai có lỗi?" nói về?', ['Hai bạn cãi nhau rồi làm hoà', 'Bạn học giỏi', 'Đi du lịch', 'Cuộc thi'], 0, 'Hai bạn giận nhau rồi nhận ra lỗi và làm hoà.'),
    Q('Vì sao hai bạn cãi nhau?', ['Vì hiểu lầm nhỏ', 'Vì giành đồ chơi', 'Vì mất tiền', 'Vì điểm số'], 0, 'Từ một va chạm nhỏ → hiểu lầm.'),
    Q('Sau khi cãi nhau, các bạn đã?', ['Xin lỗi và làm hoà', 'Cãi tiếp', 'Đánh nhau', 'Không bao giờ nói chuyện'], 0, 'Biết nhận lỗi và xin lỗi nhau.'),
    Q('Bài học từ câu chuyện?', ['Bạn bè cần độ lượng, biết nhận lỗi', 'Phải thắng bạn', 'Không nên chơi với ai', 'Lờ đi mọi việc'], 0, 'Tình bạn cần sự tha thứ và nhận lỗi.'),
    Q('"Làm hoà" có nghĩa?', ['Đánh nhau', 'Hoà giải, lại thân thiết', 'Lờ đi', 'Bỏ đi'], 1, '"Làm hoà" = trở lại thân thiết sau khi giận.'),
    Q('Khi mình có lỗi với bạn, em nên?', ['Xin lỗi chân thành', 'Bỏ chạy', 'Đổ lỗi', 'Không nói gì'], 0, 'Người tốt biết nhận lỗi và xin lỗi.'),
  ]),

  M(7, 'Từ chỉ hoạt động – trạng thái', [
    Q('Từ nào CHỈ HOẠT ĐỘNG?', ['đẹp', 'đọc', 'xanh', 'cao'], 1, '"Đọc" là hoạt động.'),
    Q('Trong câu "Em đang học bài.", từ chỉ hoạt động là?', ['em', 'đang', 'học', 'bài'], 2, '"Học" là hoạt động.'),
    Q('Từ nào CHỈ TRẠNG THÁI?', ['chạy', 'buồn', 'cái bàn', 'nhanh'], 1, '"Buồn" chỉ trạng thái cảm xúc.'),
    Q('Trong "Mẹ vui khi em được điểm 10.", từ chỉ trạng thái là?', ['mẹ', 'vui', 'điểm', '10'], 1, '"Vui" là trạng thái cảm xúc.'),
    Q('Câu "Học sinh đang viết bài." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 0, '"Học sinh" + "viết bài" (hoạt động) → "Ai làm gì?".'),
    Q('Đặt câu có từ chỉ hoạt động "nhảy":', ['Em nhảy dây trong giờ ra chơi.', 'Em rất nhảy.', 'Em là nhảy.', 'Nhảy là gì?'], 0, '"Nhảy dây" — hoạt động hợp ngữ cảnh.'),
  ]),

  M(8, 'Tập đọc: "Người mẹ"', [
    Q('Truyện "Người mẹ" ca ngợi?', ['Tình thương yêu vô bờ của người mẹ', 'Sức khoẻ', 'Sự giàu có', 'Vẻ đẹp'], 0, 'Mẹ sẵn sàng hi sinh để cứu con.'),
    Q('Vì con, người mẹ đã làm gì?', ['Vượt mọi khó khăn, hi sinh bản thân', 'Bỏ con đi', 'Cười nhạo', 'Quên mất'], 0, 'Mẹ vượt qua nhiều thử thách để tìm con.'),
    Q('Bài học từ câu chuyện?', ['Biết ơn và yêu thương mẹ', 'Coi thường mẹ', 'Không cần mẹ', 'Chỉ cần tiền'], 0, 'Yêu thương và biết ơn mẹ là điều quan trọng.'),
    Q('"Hi sinh" có nghĩa?', ['Chịu mất mát vì người khác', 'Vui vẻ', 'Lười biếng', 'Bỏ đi'], 0, '"Hi sinh" = chịu thiệt vì người khác.'),
    Q('Em làm gì để mẹ vui?', ['Học giỏi, ngoan, giúp việc nhà', 'Cãi mẹ', 'Bỏ học', 'Chỉ chơi'], 0, 'Con ngoan = niềm vui lớn nhất của mẹ.'),
    Q('Câu "Mẹ là người em yêu nhất." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 2, 'Có "là" + cụm danh từ → "Ai là gì?".'),
  ]),

  M(9, 'Ôn tập giữa học kì 1', [
    Q('Câu nào dùng dấu chấm đúng?', ['Em đi học.', 'em đi học', 'Em đi học?', 'em Đi học!'], 0, 'Đầu câu hoa, cuối câu kể dùng dấu chấm.'),
    Q('Bộ phận in đậm trong "Bố em LÀ KỸ SƯ." trả lời cho câu hỏi?', ['Ai?', 'Làm gì?', 'Là gì?', 'Thế nào?'], 2, 'Cụm "là kỹ sư" trả lời cho "Là gì?".'),
    Q('Từ nào chỉ đặc điểm?', ['hát', 'cao', 'sách', 'mẹ'], 1, '"Cao" tả chiều cao → đặc điểm.'),
    Q('Câu "Lan học rất chăm." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 1, 'Tả mức độ học → "Ai thế nào?".'),
    Q('Chính tả: chọn từ đúng', ['xinh sắn', 'sinh sắn', 'xinh xắn', 'sinh xắn'], 2, '"Xinh xắn" là cách viết đúng.'),
    Q('Khi viết tên người, em phải?', ['Viết hoa chữ cái đầu mỗi tiếng', 'Viết thường', 'Viết in', 'Viết tắt'], 0, 'Tên riêng viết hoa chữ cái đầu mỗi tiếng.'),
  ]),

  M(10, 'Tập đọc: "Giọng quê hương"', [
    Q('Bài "Giọng quê hương" ca ngợi?', ['Tình cảm với quê hương qua giọng nói', 'Đi chơi xa', 'Học giỏi', 'Có nhiều tiền'], 0, 'Giọng nói gợi nhớ quê hương.'),
    Q('Giọng quê hương khiến nhân vật?', ['Xúc động, nhớ về quê', 'Sợ hãi', 'Tức giận', 'Buồn ngủ'], 0, 'Giọng quê làm con người xúc động, gần gũi.'),
    Q('Bài học?', ['Yêu quê hương dù đi đâu', 'Quên quê', 'Chê quê', 'Không cần quê'], 0, 'Quê hương là cội nguồn, luôn nhớ về.'),
    Q('"Quê hương" trong câu là?', ['Từ chỉ sự vật (nơi chốn)', 'Hoạt động', 'Đặc điểm', 'Trạng thái'], 0, '"Quê hương" là danh từ chỉ địa điểm.'),
    Q('Đặt câu so sánh: "Giọng quê hương ngọt ngào như ...":', ['... mật ong.', '... cay đắng.', '... đá lạnh.', '... gai nhọn.'], 0, 'So sánh ngọt với mật ong — hợp lý.'),
    Q('Em làm gì để bày tỏ tình yêu quê hương?', ['Giữ gìn vệ sinh, học tốt, kể về quê', 'Vứt rác', 'Chê bai', 'Không quan tâm'], 0, 'Yêu quê hương qua hành động cụ thể.'),
  ]),

  M(11, 'Mở rộng vốn từ: Quê hương · So sánh', [
    Q('Từ nào chỉ cảnh đẹp quê hương?', ['cánh đồng, dòng sông', 'xe ô tô', 'tivi', 'điện thoại'], 0, 'Cánh đồng, dòng sông là cảnh đẹp quê.'),
    Q('Trong câu "Trẻ em như búp trên cành.", từ so sánh là?', ['trẻ em', 'như', 'búp', 'cành'], 1, '"Như" là từ chỉ sự so sánh.'),
    Q('Câu nào CÓ phép so sánh?', ['Mẹ ăn cơm.', 'Mặt trời đỏ rực như lửa.', 'Em đi học.', 'Trời mưa.'], 1, 'Có từ "như" → có phép so sánh.'),
    Q('Hoàn thành: "Dòng sông quê em xanh như ..."', ['ngọc', 'lửa', 'than', 'mực đen'], 0, 'Xanh ngọc — hợp với dòng sông.'),
    Q('Quê hương em có thể là?', ['Làng, phố, thành phố nơi em sinh ra/lớn lên', 'Nước Mỹ', 'Sao Hoả', 'Đáy biển'], 0, 'Quê là nơi sinh ra, lớn lên.'),
    Q('"Quê hương" và "đất nước" có quan hệ?', ['Đồng nghĩa gần (đều chỉ nơi gắn bó)', 'Trái nghĩa', 'Không liên quan', 'Đối lập'], 0, 'Đều chỉ nơi chôn rau cắt rốn, gắn bó.'),
  ]),

  M(12, 'Tập đọc: "Nắng phương Nam"', [
    Q('Bài "Nắng phương Nam" nói về?', ['Tình bạn của các bạn nhỏ Bắc – Nam', 'Cuộc thi học sinh giỏi', 'Trận bóng', 'Đi du lịch'], 0, 'Các bạn miền Nam gửi nhánh mai tặng bạn miền Bắc.'),
    Q('Vì sao các bạn gửi nhánh mai cho bạn miền Bắc?', ['Để bạn cảm nhận Tết phương Nam', 'Vì bị bắt buộc', 'Vì hết hoa đào', 'Vì muốn khoe'], 0, 'Để chia sẻ không khí Tết miền Nam.'),
    Q('Bài học?', ['Tình bạn đẹp vượt khoảng cách địa lý', 'Phải sống một mình', 'Không cần bạn xa', 'Chỉ chơi với bạn cùng phố'], 0, 'Tình bạn không phân biệt vùng miền.'),
    Q('Hoa mai thường nở vào dịp?', ['Tết Nguyên Đán', 'Tết Trung Thu', 'Giáng sinh', 'Hè'], 0, 'Mai vàng nở dịp Tết, đặc trưng miền Nam.'),
    Q('Hoa đào thường có ở miền nào dịp Tết?', ['Miền Bắc', 'Miền Nam', 'Trung', 'Cả ba miền'], 0, 'Đào hồng/đỏ là đặc trưng miền Bắc.'),
    Q('Câu "Cành mai vàng rực như nắng." là?', ['Câu kể có hình ảnh so sánh', 'Câu hỏi', 'Câu cảm', 'Câu cầu khiến'], 0, 'Có "như" → so sánh.'),
  ]),

  M(13, 'Dấu chấm – dấu phẩy · Đặt câu hỏi cho bộ phận in đậm', [
    Q('Đặt dấu phẩy đúng: "Trong vườn có hoa hồng hoa cúc hoa lan."', ['Trong vườn có hoa hồng, hoa cúc, hoa lan.', 'Trong vườn, có hoa hồng hoa cúc hoa lan.', 'Trong, vườn có hoa, hồng hoa cúc hoa lan.', 'Trong vườn có, hoa hồng hoa cúc, hoa lan.'], 0, 'Dấu phẩy ngăn cách các thành phần liệt kê.'),
    Q('Dấu chấm dùng để?', ['Kết thúc câu kể', 'Mở đầu câu', 'Hỏi', 'Cảm thán'], 0, 'Cuối câu kể thường có dấu chấm.'),
    Q('Đặt câu hỏi cho bộ phận in đậm: "EM LÀ HỌC SINH lớp 3."', ['Em là gì?', 'Em làm gì?', 'Em ở đâu?', 'Em khi nào?'], 0, '"Là học sinh" → câu hỏi "là gì?".'),
    Q('Đặt câu hỏi cho "Mẹ ĐANG NẤU CƠM."', ['Mẹ làm gì?', 'Mẹ là gì?', 'Mẹ thế nào?', 'Mẹ ở đâu?'], 0, '"Nấu cơm" là hoạt động → "làm gì?".'),
    Q('Câu "Hôm nay, em đi học sớm." có dấu phẩy để?', ['Tách trạng ngữ "hôm nay"', 'Trang trí', 'Kết thúc câu', 'Hỏi'], 0, 'Dấu phẩy tách trạng ngữ thời gian.'),
    Q('Câu nào dùng dấu phẩy SAI?', ['Em, đi học.', 'Hôm qua, em đi chơi.', 'Trong lớp, em ngồi bàn đầu.', 'Buổi sáng, em ăn sáng.'], 0, '"Em đi học" không cần dấu phẩy giữa CN và VN.'),
  ]),

  M(14, 'Tập đọc: "Cửa Tùng"', [
    Q('Bài "Cửa Tùng" miêu tả?', ['Vẻ đẹp một vùng biển', 'Một khu rừng', 'Sa mạc', 'Núi cao'], 0, 'Cửa Tùng — bãi biển nổi tiếng ở Quảng Trị.'),
    Q('Vẻ đẹp Cửa Tùng được tả qua?', ['Màu nước thay đổi trong ngày', 'Tiếng nhạc', 'Vị mặn', 'Số khách'], 0, 'Bài tả nước biển đổi màu sớm – trưa – chiều.'),
    Q('Bài giúp em hiểu?', ['Đất nước Việt Nam có nhiều cảnh đẹp', 'Biển nguy hiểm', 'Không nên đi biển', 'Biển ở nước ngoài đẹp hơn'], 0, 'Tự hào về cảnh đẹp quê hương.'),
    Q('"Cửa Tùng" thuộc tỉnh nào?', ['Quảng Trị', 'Hà Nội', 'Cần Thơ', 'Lào Cai'], 0, 'Cửa Tùng thuộc Quảng Trị, miền Trung.'),
    Q('Câu "Mặt trời lặn xuống biển đỏ rực như quả bóng lửa." có phép?', ['So sánh', 'Liệt kê', 'Đối lập', 'Lặp lại'], 0, 'Có "như" → so sánh.'),
    Q('Em làm gì khi đi biển để bảo vệ môi trường?', ['Không vứt rác bừa bãi', 'Vứt rác xuống biển', 'Phá san hô', 'Đánh bắt cá nhỏ'], 0, 'Bảo vệ môi trường biển.'),
  ]),

  M(15, 'Mở rộng vốn từ: Từ địa phương · Dấu chấm hỏi – chấm than', [
    Q('Dấu chấm hỏi (?) dùng cuối câu?', ['Hỏi', 'Kể', 'Cảm thán', 'Cầu khiến'], 0, 'Cuối câu hỏi dùng dấu ?.'),
    Q('Dấu chấm than (!) dùng cuối câu?', ['Cảm thán hoặc cầu khiến', 'Kể', 'Hỏi', 'Liệt kê'], 0, 'Dấu ! dùng cho câu cảm và câu khiến.'),
    Q('Đặt dấu đúng: "Em đi đâu đấy ___"', ['?', '.', '!', ','], 0, '"Đi đâu" → câu hỏi → dùng ?.'),
    Q('Đặt dấu đúng: "Ôi, đẹp quá ___"', ['?', '.', '!', ','], 2, 'Câu cảm thán → dùng !.'),
    Q('Từ "ba" (miền Nam) đồng nghĩa với?', ['mẹ', 'bố (miền Bắc)', 'chú', 'ông'], 1, '"Ba" (Nam) = "bố" (Bắc).'),
    Q('Từ "má" (miền Nam) tương đương?', ['cha', 'mẹ', 'cô', 'dì'], 1, '"Má" (Nam) = "mẹ" (Bắc).'),
  ]),

  M(16, 'Tập đọc: "Người liên lạc nhỏ"', [
    Q('"Người liên lạc nhỏ" kể về?', ['Kim Đồng — đội viên dũng cảm', 'Một học sinh', 'Một bác sĩ', 'Một cô giáo'], 0, 'Anh Kim Đồng làm liên lạc cho cách mạng.'),
    Q('Đức tính nổi bật của Kim Đồng?', ['Nhanh nhẹn, gan dạ, mưu trí', 'Lười biếng', 'Sợ hãi', 'Tham lam'], 0, 'Kim Đồng dũng cảm, nhanh trí khi bị địch nghi.'),
    Q('Bài học từ tấm gương Kim Đồng?', ['Yêu nước, dũng cảm từ khi còn nhỏ', 'Chỉ ham chơi', 'Không cần học', 'Bỏ học sớm'], 0, 'Anh hùng nhỏ tuổi — tấm gương yêu nước.'),
    Q('"Liên lạc" trong bài có nghĩa?', ['Người đưa tin', 'Người nấu cơm', 'Học sinh', 'Diễn viên'], 0, 'Liên lạc viên = người đưa tin tức.'),
    Q('Kim Đồng là người dân tộc?', ['Nùng', 'Kinh', 'Tày', 'H\'Mông'], 0, 'Kim Đồng người dân tộc Nùng, quê Cao Bằng.'),
    Q('Em học được gì từ Kim Đồng?', ['Lòng yêu nước, dũng cảm', 'Sự nhút nhát', 'Sự lười nhác', 'Tính ích kỷ'], 0, 'Lòng yêu nước và sự dũng cảm.'),
  ]),

  M(17, 'Viết đoạn văn 3 – 5 câu kể về gia đình', [
    Q('Một đoạn văn kể về gia đình thường gồm?', ['3–5 câu giới thiệu các thành viên và tình cảm', '1 câu duy nhất', '20 câu', 'Chỉ có dấu chấm'], 0, '3–5 câu là dung lượng phù hợp lớp 3.'),
    Q('Câu mở đoạn nên?', ['Giới thiệu chung về gia đình', 'Kể về thú cưng', 'Kể về món ăn', 'Để trống'], 0, 'Câu mở đoạn giới thiệu chung.'),
    Q('Câu nào thích hợp mở đoạn?', ['Gia đình em có bốn người: bố, mẹ, anh và em.', 'Em ăn cơm.', 'Trời mưa to.', 'Đi học vui lắm.'], 0, 'Câu giới thiệu thành viên — đúng mở đoạn.'),
    Q('Câu kết đoạn nên?', ['Bày tỏ tình cảm với gia đình', 'Hỏi bạn ăn gì', 'Kể chuyện cười', 'Bỏ trống'], 0, 'Câu kết thể hiện tình cảm.'),
    Q('Trong đoạn văn, các câu cần?', ['Đầu câu viết hoa, cuối câu có dấu', 'Viết thường tất cả', 'Không cần dấu', 'Viết tắt'], 0, 'Quy tắc chính tả cơ bản.'),
    Q('Câu nào KHÔNG nên dùng trong đoạn về gia đình?', ['Em rất yêu gia đình mình.', 'Bố em làm bác sĩ.', 'Trận đấu hôm qua rất hay.', 'Mẹ em nấu ăn ngon.'], 2, 'Trận đấu không liên quan chủ đề gia đình.'),
  ]),

  M(18, 'Ôn tập cuối học kì 1', [
    Q('Câu "Ngôi trường của em rất đẹp." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 1, 'Tả đặc điểm → "Ai thế nào?".'),
    Q('Từ nào chỉ HOẠT ĐỘNG?', ['xinh', 'vẽ', 'sách', 'đỏ'], 1, '"Vẽ" là hoạt động.'),
    Q('Tìm từ chỉ ĐẶC ĐIỂM trong "Bầu trời cao và xanh ngắt."', ['bầu trời', 'cao, xanh ngắt', 'và', 'không có'], 1, '"Cao", "xanh ngắt" là đặc điểm.'),
    Q('Câu nào có phép so sánh?', ['Trời mưa to.', 'Mẹ đi chợ.', 'Mặt trăng tròn như chiếc đĩa.', 'Em học bài.'], 2, 'Có "như" → so sánh.'),
    Q('Dấu phẩy trong "Buổi sáng, em đi học." dùng để?', ['Tách trạng ngữ', 'Kết thúc câu', 'Hỏi', 'Cảm thán'], 0, 'Tách trạng ngữ thời gian.'),
    Q('Chính tả: chọn đúng', ['xum xuê', 'sum xuê', 'xum suê', 'sum suê'], 3, '"Sum suê" là cách viết đúng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Tập đọc: "Hai Bà Trưng"', [
    Q('Hai Bà Trưng là ai?', ['Hai nữ anh hùng dân tộc thời Bắc thuộc', 'Hai cô giáo', 'Hai mẹ con', 'Hai bạn học'], 0, 'Trưng Trắc và Trưng Nhị — anh hùng dân tộc.'),
    Q('Hai Bà Trưng nổi tiếng vì?', ['Khởi nghĩa chống quân Đông Hán', 'Buôn bán giỏi', 'Đi du học', 'Làm thơ'], 0, 'Khởi nghĩa năm 40 chống ách đô hộ phương Bắc.'),
    Q('Tinh thần nổi bật của Hai Bà?', ['Yêu nước, dũng cảm', 'Sợ hãi', 'Lười biếng', 'Tham lam'], 0, 'Tấm gương yêu nước, dũng cảm vì dân.'),
    Q('Bài học từ Hai Bà Trưng?', ['Phụ nữ Việt Nam anh hùng', 'Phụ nữ yếu đuối', 'Không nên đấu tranh', 'Sống cam chịu'], 0, 'Truyền thống phụ nữ Việt Nam: anh hùng, kiên cường.'),
    Q('Hai Bà Trưng quê ở?', ['Mê Linh (Hà Nội ngày nay)', 'Sài Gòn', 'Huế', 'Đà Nẵng'], 0, 'Quê hai Bà ở Mê Linh, nay thuộc Hà Nội.'),
    Q('Em học được gì từ Hai Bà?', ['Tinh thần yêu nước, không khuất phục', 'Sự bỏ cuộc', 'Sự ích kỷ', 'Lười biếng'], 0, 'Yêu nước và kiên cường.'),
  ]),

  M(20, 'Mở rộng vốn từ: Tổ quốc · Dấu phẩy', [
    Q('"Tổ quốc" có nghĩa?', ['Đất nước, quê hương chung', 'Một ngôi nhà', 'Một con đường', 'Một lớp học'], 0, 'Tổ quốc = đất nước, quê hương.'),
    Q('Từ nào ĐỒNG NGHĨA với "Tổ quốc"?', ['Đất nước, non sông', 'Lớp học', 'Bài tập', 'Trường học'], 0, 'Tổ quốc ≈ đất nước, non sông, giang sơn.'),
    Q('Đặt dấu phẩy đúng: "Nước Việt Nam có núi sông biển đảo rừng vàng."', ['Nước Việt Nam có núi, sông, biển đảo, rừng vàng.', 'Nước, Việt Nam có núi sông biển đảo, rừng vàng.', 'Nước Việt, Nam có núi sông biển đảo rừng vàng.', 'Nước Việt Nam, có núi sông biển đảo rừng vàng.'], 0, 'Dấu phẩy ngăn cách các từ liệt kê.'),
    Q('"Yêu Tổ quốc" thể hiện qua?', ['Học giỏi, làm việc tốt, bảo vệ môi trường', 'Trốn học', 'Lười biếng', 'Vứt rác'], 0, 'Hành động cụ thể thể hiện lòng yêu Tổ quốc.'),
    Q('Quốc kì Việt Nam có?', ['Nền đỏ, sao vàng năm cánh', 'Nền vàng, sao đỏ', 'Nền xanh, sao trắng', 'Nền trắng, sao xanh'], 0, 'Cờ đỏ sao vàng — quốc kì Việt Nam.'),
    Q('Quốc ca Việt Nam tên là?', ['Tiến quân ca', 'Lên đàng', 'Tiếng hát con tàu', 'Người Hà Nội'], 0, '"Tiến quân ca" — Văn Cao sáng tác.'),
  ]),

  M(21, 'Tập đọc: "Ông tổ nghề thêu"', [
    Q('"Ông tổ nghề thêu" kể về ai?', ['Trần Quốc Khái — học nghề thêu khi đi sứ', 'Một học sinh', 'Một nông dân', 'Một bác sĩ'], 0, 'Trần Quốc Khái học nghề thêu mang về truyền cho dân.'),
    Q('Đức tính nổi bật của ông?', ['Ham học, thông minh', 'Lười biếng', 'Hay khóc', 'Sợ hãi'], 0, 'Ham học hỏi, kiên trì, thông minh.'),
    Q('Bài học từ câu chuyện?', ['Học hỏi sẽ mang lại lợi ích cho cộng đồng', 'Học một mình', 'Không cần học', 'Học rồi giấu'], 0, 'Học để truyền lại tri thức cho cộng đồng.'),
    Q('"Đi sứ" có nghĩa?', ['Đại diện vua đi gặp nước khác', 'Đi chơi', 'Đi học', 'Đi buôn'], 0, 'Đi sứ = sứ thần đại diện quốc gia.'),
    Q('Em học được điều gì từ ông?', ['Ham học, sẻ chia tri thức', 'Sự ích kỷ', 'Sự lười nhác', 'Tính giấu giếm'], 0, 'Ham học và sẻ chia.'),
    Q('Nghề thêu cần đức tính?', ['Kiên nhẫn, khéo tay', 'Vội vàng', 'Bừa bộn', 'Cẩu thả'], 0, 'Thêu cần sự kiên nhẫn, tỉ mỉ.'),
  ]),

  M(22, 'Câu "Ai làm gì?" – "Ai thế nào?" – "Ai là gì?"', [
    Q('"Bố em là kỹ sư." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 2, 'Có "là" + danh từ → "Ai là gì?".'),
    Q('"Mẹ đang nấu cơm." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 0, '"Nấu cơm" là hoạt động → "Ai làm gì?".'),
    Q('"Cây bàng cao lớn." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 1, 'Tả đặc điểm → "Ai thế nào?".'),
    Q('Câu nào thuộc kiểu "Ai làm gì?"', ['Em là học sinh.', 'Hoa hồng rất thơm.', 'Lan quét nhà.', 'Trời xanh.'], 2, '"Quét nhà" là hoạt động → "Ai làm gì?".'),
    Q('Câu nào thuộc kiểu "Ai thế nào?"', ['Bố em làm thợ.', 'Em đang học.', 'Lan rất hiền.', 'Cô là giáo viên.'], 2, '"Hiền" là đặc điểm tính cách.'),
    Q('Đặt câu "Ai là gì?" với "Hà Nội":', ['Hà Nội là thủ đô nước ta.', 'Hà Nội đẹp lắm.', 'Hà Nội mưa.', 'Hà Nội đâu?'], 0, 'Có "là" + danh từ → đúng kiểu.'),
  ]),

  M(23, 'Tập đọc: "Cái cầu"', [
    Q('Bài thơ "Cái cầu" của ai?', ['Phạm Tiến Duật', 'Trần Đăng Khoa', 'Định Hải', 'Xuân Quỳnh'], 0, 'Bài thơ của Phạm Tiến Duật.'),
    Q('Bài thơ tả ai làm gì?', ['Bố đi làm xa, xây cầu', 'Mẹ nấu cơm', 'Em đi học', 'Bạn chơi đùa'], 0, 'Bố làm cầu xa nhà, em nhớ bố.'),
    Q('Tình cảm trong bài thơ?', ['Yêu thương, tự hào về bố', 'Buồn bực', 'Tức giận', 'Sợ hãi'], 0, 'Yêu bố, tự hào nghề của bố.'),
    Q('Bài học từ bài thơ?', ['Yêu thương người thân, trân trọng lao động', 'Không cần làm việc', 'Coi thường nghề', 'Bỏ qua tình cảm'], 0, 'Trân trọng lao động và tình thân.'),
    Q('"Cầu" trong bài là?', ['Cây cầu bắc qua sông', 'Cái cầu lông', 'Cầu thủ', 'Cầu hôn'], 0, 'Cây cầu bắc qua sông để đi lại.'),
    Q('Em sẽ làm gì khi bố/mẹ đi làm xa?', ['Vâng lời mẹ, học giỏi để bố/mẹ vui', 'Nghịch ngợm', 'Không học', 'Khóc cả ngày'], 0, 'Học giỏi, ngoan là niềm vui của bố mẹ.'),
  ]),

  M(24, 'Mở rộng vốn từ: Nghệ thuật · Sáng tạo · Trí thức', [
    Q('Từ chỉ NGƯỜI HOẠT ĐỘNG NGHỆ THUẬT?', ['ca sĩ, hoạ sĩ, nhạc sĩ', 'bác sĩ', 'thợ điện', 'lái xe'], 0, 'Nghệ sĩ: ca sĩ, hoạ sĩ, nhạc sĩ...'),
    Q('Từ chỉ HOẠT ĐỘNG NGHỆ THUẬT?', ['hát, vẽ, đàn', 'mổ', 'sửa xe', 'cấy lúa'], 0, 'Các hoạt động nghệ thuật: ca, múa, hội hoạ...'),
    Q('"Trí thức" là người?', ['Có học vấn, am hiểu nhiều', 'Không biết chữ', 'Lười học', 'Chỉ làm thợ thủ công'], 0, 'Trí thức = người có học vấn cao.'),
    Q('Nhà bác học nổi tiếng Việt Nam?', ['Lê Quý Đôn', 'Trần Quốc Tuấn', 'Hai Bà Trưng', 'Lê Lợi'], 0, 'Lê Quý Đôn — nhà bác học thời Lê.'),
    Q('Người vẽ tranh gọi là?', ['Hoạ sĩ', 'Ca sĩ', 'Nhạc sĩ', 'Diễn viên'], 0, 'Hoạ sĩ = người vẽ tranh.'),
    Q('Người sáng tác nhạc gọi là?', ['Hoạ sĩ', 'Nhạc sĩ', 'Ca sĩ', 'Nhà văn'], 1, 'Nhạc sĩ = người sáng tác âm nhạc.'),
  ]),

  M(25, 'Tập đọc: "Hội vật"', [
    Q('"Hội vật" tả cảnh?', ['Đấu vật trong lễ hội cổ truyền', 'Cuộc thi học sinh', 'Trận bóng đá', 'Cuộc thi vẽ'], 0, 'Đấu vật là môn thể thao trong lễ hội.'),
    Q('Hai đô vật trong bài tên gì?', ['Quắm Đen và Cản Ngũ', 'Tý và Tèo', 'Lan và Mai', 'An và Bình'], 0, 'Hai đô vật nổi tiếng: Quắm Đen và Cản Ngũ.'),
    Q('Ai là người chiến thắng?', ['Cản Ngũ — bằng kinh nghiệm và sức bền', 'Quắm Đen', 'Hoà', 'Không ai'], 0, 'Cản Ngũ thắng nhờ sự điềm tĩnh và kinh nghiệm.'),
    Q('Bài học từ "Hội vật"?', ['Kinh nghiệm + bình tĩnh thắng sức trẻ', 'Sức mạnh là tất cả', 'Đánh nhanh thắng nhanh', 'Đừng tham gia'], 0, 'Kinh nghiệm và sự điềm tĩnh quan trọng.'),
    Q('"Lễ hội" thường diễn ra vào?', ['Dịp Tết, ngày lễ', 'Ngày thường', 'Khi học bài', 'Đêm khuya'], 0, 'Lễ hội thường vào mùa xuân, dịp Tết.'),
    Q('Hội vật là môn thể thao?', ['Truyền thống dân tộc Việt Nam', 'Của nước ngoài', 'Mới phát minh', 'Không tồn tại'], 0, 'Vật là môn truyền thống Việt Nam.'),
  ]),

  M(26, 'Mở rộng vốn từ: Lễ hội · Đặt và trả lời câu hỏi "Vì sao?"', [
    Q('Lễ hội nổi tiếng dịp Tết miền Bắc?', ['Hội Lim, hội Gióng, hội chùa Hương', 'Hội đua thuyền', 'Hội té nước', 'Hội pháo'], 0, 'Hội Lim (Bắc Ninh), hội Gióng (Hà Nội), hội chùa Hương (Hà Nội).'),
    Q('Câu hỏi "Vì sao?" dùng để hỏi?', ['Nguyên nhân, lí do', 'Thời gian', 'Địa điểm', 'Số lượng'], 0, '"Vì sao?" hỏi về nguyên nhân.'),
    Q('Trả lời cho "Vì sao em đi học sớm?":', ['Vì em sợ trễ giờ.', 'Em đi xe đạp.', 'Em đi với bạn.', 'Trường gần nhà.'], 0, 'Bắt đầu bằng "Vì..." chỉ lí do.'),
    Q('Hội Gióng tưởng nhớ ai?', ['Thánh Gióng — anh hùng đánh giặc Ân', 'Hai Bà Trưng', 'Trần Hưng Đạo', 'Quang Trung'], 0, 'Hội Gióng (Sóc Sơn) tưởng nhớ Thánh Gióng.'),
    Q('Đi lễ hội cần?', ['Ăn mặc lịch sự, giữ trật tự', 'Chen lấn', 'Vứt rác', 'La hét'], 0, 'Văn hoá tham gia lễ hội.'),
    Q('"Vì sao?" còn có thể thay bằng?', ['Tại sao?', 'Khi nào?', 'Ở đâu?', 'Bao nhiêu?'], 0, '"Tại sao?" đồng nghĩa với "Vì sao?".'),
  ]),

  M(27, 'Tập đọc: "Rước đèn ông sao"', [
    Q('"Rước đèn ông sao" tả không khí?', ['Tết Trung Thu của trẻ em', 'Tết Nguyên Đán', 'Ngày khai giảng', 'Mùa hè'], 0, 'Rước đèn là hoạt động đặc trưng Trung Thu.'),
    Q('Đèn ông sao có hình?', ['Ngôi sao 5 cánh', 'Hình tròn', 'Hình vuông', 'Hình tam giác'], 0, 'Đèn ông sao 5 cánh, mỗi cánh giấy bóng kính.'),
    Q('Trung Thu vào ngày?', ['Rằm tháng Tám âm lịch', 'Mùng 1 tháng 1', 'Rằm tháng Giêng', 'Cuối tháng 12'], 0, '15/8 âm lịch là Tết Trung Thu.'),
    Q('Cảm xúc của các em nhỏ trong bài?', ['Vui tươi, háo hức', 'Buồn bã', 'Sợ hãi', 'Tức giận'], 0, 'Trẻ em rất vui khi rước đèn.'),
    Q('Trung Thu thường có?', ['Bánh nướng, bánh dẻo, đèn, múa lân', 'Cây thông', 'Lì xì', 'Pháo hoa'], 0, 'Đặc trưng Trung Thu Việt Nam.'),
    Q('Câu "Đèn ông sao rực rỡ như những vì sao trên trời." có?', ['Phép so sánh', 'Liệt kê', 'Đối lập', 'Lặp'], 0, 'Có "như" → so sánh.'),
  ]),

  M(28, 'Tập đọc: "Cuộc chạy đua trong rừng"', [
    Q('Bài "Cuộc chạy đua trong rừng" có nhân vật chính?', ['Ngựa con — chủ quan, không chuẩn bị kĩ', 'Sư tử', 'Cáo', 'Hổ'], 0, 'Ngựa con chuẩn bị qua loa nên thất bại.'),
    Q('Bài học từ truyện?', ['Phải chuẩn bị chu đáo trước khi làm việc lớn', 'Khoe khoang là tốt', 'Không cần luyện tập', 'Sức mạnh là tất cả'], 0, 'Chuẩn bị chu đáo là yếu tố thành công.'),
    Q('Ngựa cha khuyên ngựa con?', ['Phải xem lại móng chân, chuẩn bị kĩ', 'Cứ chạy đi', 'Bỏ thi', 'Khoe sức mạnh'], 0, 'Người lớn khuyên chuẩn bị kỹ trước cuộc thi.'),
    Q('Vì sao ngựa con thua?', ['Móng bị long, ngã giữa đường', 'Bị bắt', 'Bị ốm', 'Lạc đường'], 0, 'Móng chưa được kiểm tra → bị long.'),
    Q('"Chủ quan" có nghĩa?', ['Tự tin quá mức, không cẩn thận', 'Khiêm tốn', 'Lo lắng', 'Buồn bã'], 0, 'Chủ quan = không cẩn thận, coi thường.'),
    Q('Em rút ra điều gì?', ['Cẩn thận, chuẩn bị tốt trước khi làm', 'Làm liều', 'Bỏ cuộc', 'Khoe khoang'], 0, 'Cẩn thận và chuẩn bị kĩ.'),
  ]),

  M(29, 'Mở rộng vốn từ: Thể thao · Dấu hai chấm', [
    Q('Môn thể thao nào dưới đây?', ['Bóng đá, bơi lội, cầu lông', 'Học toán', 'Đọc sách', 'Nấu cơm'], 0, 'Các môn thể thao.'),
    Q('Người chơi bóng đá gọi là?', ['Cầu thủ', 'Diễn viên', 'Hoạ sĩ', 'Bác sĩ'], 0, 'Cầu thủ = người chơi bóng đá.'),
    Q('Dấu hai chấm (:) thường dùng để?', ['Báo trước lời nói/liệt kê', 'Kết thúc câu', 'Hỏi', 'Cảm thán'], 0, 'Dấu : báo hiệu lời nói, lời giải thích hoặc liệt kê.'),
    Q('Dùng đúng dấu: "Mẹ nói ___ Con phải ngoan."', [':', '.', '?', ','], 0, 'Sau "nói" + lời nói trực tiếp → dùng :.'),
    Q('Dùng đúng dấu: "Trong cặp có ___ sách, vở, bút."', [':', '.', '?', ';'], 0, 'Trước liệt kê → dùng :.'),
    Q('Tập thể thao giúp em?', ['Khoẻ mạnh, nhanh nhẹn', 'Lười', 'Ốm yếu', 'Buồn ngủ'], 0, 'Tập thể thao giúp cơ thể khoẻ mạnh.'),
  ]),

  M(30, 'Tập đọc: "Bác sĩ Y-éc-xanh"', [
    Q('Bác sĩ Y-éc-xanh là người nước nào?', ['Người Pháp gắn bó với Việt Nam', 'Người Mỹ', 'Người Nhật', 'Người Anh'], 0, 'Y-éc-xanh — bác sĩ Pháp, sống và làm việc ở Nha Trang.'),
    Q('Ông đến Việt Nam để?', ['Nghiên cứu khoa học, chữa bệnh', 'Du lịch', 'Buôn bán', 'Đánh cá'], 0, 'Nghiên cứu vắc-xin và chữa bệnh cho người Việt.'),
    Q('Đức tính của bác sĩ?', ['Nhân hậu, yêu thương con người', 'Ích kỷ', 'Tham lam', 'Lười nhác'], 0, 'Tận tâm vì người bệnh.'),
    Q('Bài học từ tấm gương ông?', ['Yêu thương con người không phân biệt quốc tịch', 'Chỉ giúp người cùng nước', 'Coi nhẹ y học', 'Bỏ nghề'], 0, 'Tình yêu thương vượt biên giới.'),
    Q('Y-éc-xanh sống nhiều năm ở?', ['Nha Trang (Khánh Hoà)', 'Hà Nội', 'Cần Thơ', 'Đà Lạt'], 0, 'Ông sống và làm việc ở Nha Trang.'),
    Q('Em học được gì từ ông?', ['Sống có ích, yêu thương mọi người', 'Sống cho riêng mình', 'Lười học', 'Trốn việc'], 0, 'Sống có ích cho cộng đồng.'),
  ]),

  M(31, 'Viết thư · Viết thư cảm ơn', [
    Q('Một bức thư thường có?', ['Đầu thư, nội dung, cuối thư', 'Chỉ nội dung', 'Chỉ tên người gửi', 'Chỉ ngày tháng'], 0, 'Đầu thư (ngày tháng, lời chào) — nội dung — kết (lời chúc, kí tên).'),
    Q('Phần đầu thư có?', ['Địa điểm, ngày tháng, lời chào người nhận', 'Lời chúc', 'Chữ kí', 'Bài thơ'], 0, 'Đầu thư: ngày tháng + lời chào.'),
    Q('Lời chào đầu thư cho bạn?', ['"Bạn… thân mến!"', '"Kính gửi…"', '"Trân trọng,"', '"Tạm biệt!"'], 0, 'Bạn bè dùng "Thân mến!".'),
    Q('Lời chào đầu thư cho ông bà, thầy cô?', ['"Kính gửi…"', '"Cậu ơi"', '"Mày nhé"', '"Chào bạn"'], 0, 'Người trên dùng "Kính gửi…".'),
    Q('Cuối thư cần?', ['Lời chúc + chữ kí', 'Tên cha mẹ', 'Số điện thoại', 'Để trống'], 0, 'Cuối thư có lời chúc và kí tên.'),
    Q('Viết thư cảm ơn gửi ai?', ['Người đã giúp đỡ mình', 'Người lạ', 'Người chưa quen', 'Không ai'], 0, 'Thư cảm ơn gửi người đã giúp đỡ.'),
  ]),

  M(32, 'Tập đọc: "Người đi săn và con vượn"', [
    Q('"Người đi săn và con vượn" có nội dung?', ['Bài học bảo vệ động vật, tình mẫu tử', 'Đi câu cá', 'Cuộc thi săn bắn', 'Đua xe'], 0, 'Vượn mẹ hi sinh vì con → người thợ săn từ bỏ nghề.'),
    Q('Vượn mẹ làm gì trước khi chết?', ['Cho con bú lần cuối', 'Bỏ con đi', 'Tấn công người', 'Trốn'], 0, 'Vượn mẹ vẫn cho con bú dù trúng tên.'),
    Q('Người đi săn sau đó?', ['Hối hận, bỏ nghề săn', 'Tiếp tục săn', 'Cười', 'Bỏ con vượn'], 0, 'Người đi săn hối hận, bẻ gãy nỏ.'),
    Q('Bài học từ truyện?', ['Bảo vệ động vật, không tàn sát', 'Săn bắn nhiều', 'Lạnh lùng', 'Tham lam'], 0, 'Yêu thương và bảo vệ động vật.'),
    Q('Tình cảm vượn mẹ thể hiện?', ['Tình mẫu tử thiêng liêng', 'Sự ích kỷ', 'Sự thờ ơ', 'Sự sợ hãi'], 0, 'Tình mẹ con thiêng liêng cả ở loài vật.'),
    Q('Em làm gì để bảo vệ động vật?', ['Không săn bắt, không mua sản phẩm từ động vật quý', 'Bẫy chim', 'Đánh chó', 'Đốt rừng'], 0, 'Bảo vệ động vật qua hành động.'),
  ]),

  M(33, 'Mở rộng vốn từ: Thiên nhiên · Viết quảng cáo ngắn', [
    Q('Từ chỉ THIÊN NHIÊN?', ['núi, sông, biển, rừng', 'tivi', 'máy tính', 'điện thoại'], 0, 'Núi sông biển rừng — yếu tố thiên nhiên.'),
    Q('Thiên nhiên cho ta?', ['Không khí, nước, lương thực', 'Tiền bạc', 'Đồ chơi', 'Điện thoại'], 0, 'Thiên nhiên cho ta sự sống.'),
    Q('Em làm gì để bảo vệ thiên nhiên?', ['Không xả rác, trồng cây', 'Chặt cây', 'Vứt rác', 'Đốt rừng'], 0, 'Bảo vệ thiên nhiên qua hành động.'),
    Q('Quảng cáo (ngắn) nhằm?', ['Giới thiệu sản phẩm/sự kiện cho mọi người biết', 'Nấu ăn', 'Học bài', 'Đi du lịch'], 0, 'Quảng cáo = giới thiệu để mọi người chú ý.'),
    Q('Quảng cáo tốt cần?', ['Ngắn gọn, hấp dẫn, đúng sự thật', 'Dài dòng', 'Sai sự thật', 'Lẫn lộn'], 0, 'Ngắn, hấp dẫn, trung thực.'),
    Q('"Rừng vàng biển bạc" ý nói?', ['Thiên nhiên Việt Nam giàu có', 'Rừng có vàng', 'Biển có bạc', 'Không có gì'], 0, 'Câu thành ngữ ca ngợi sự giàu có của thiên nhiên VN.'),
  ]),

  M(34, 'Tập đọc: "Mặt trời xanh của tôi"', [
    Q('"Mặt trời xanh của tôi" là cách nói chỉ?', ['Tán lá cọ xoè rộng như mặt trời xanh', 'Mặt trời thật', 'Quả bóng', 'Lá cây bàng'], 0, 'Hình ảnh tán cọ được ví như mặt trời màu xanh.'),
    Q('Tác giả bài thơ?', ['Nguyễn Viết Bình', 'Trần Đăng Khoa', 'Định Hải', 'Phạm Tiến Duật'], 0, 'Bài thơ của Nguyễn Viết Bình.'),
    Q('Cảm xúc trong bài thơ?', ['Yêu thiên nhiên, yêu quê hương', 'Buồn', 'Tức giận', 'Sợ hãi'], 0, 'Tình yêu thiên nhiên và quê.'),
    Q('"Mặt trời xanh" là phép?', ['So sánh – ẩn dụ', 'Liệt kê', 'Đối lập', 'Lặp'], 0, 'Ẩn dụ: lá cọ ≈ mặt trời nhưng màu xanh.'),
    Q('Bài thơ giúp em?', ['Yêu thiên nhiên, biết quan sát', 'Sợ thiên nhiên', 'Bỏ qua thiên nhiên', 'Phá hoại'], 0, 'Yêu và biết ngắm nhìn thiên nhiên.'),
    Q('Cây cọ thường mọc nhiều ở vùng?', ['Trung du Bắc Bộ (Phú Thọ)', 'Biển', 'Sa mạc', 'Cực Bắc'], 0, 'Cọ là cây đặc trưng vùng trung du.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Câu "Lan đang quét nhà." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Hỏi'], 0, '"Quét nhà" là hoạt động.'),
    Q('Câu "Mặt biển xanh như tấm thảm." có phép gì?', ['So sánh', 'Liệt kê', 'Lặp lại', 'Đối lập'], 0, 'Có "như" → so sánh.'),
    Q('Dấu hai chấm thường dùng?', ['Báo trước lời nói / liệt kê', 'Kết thúc câu hỏi', 'Cảm thán', 'Tạm dừng nhẹ'], 0, 'Dấu : báo hiệu lời nói hoặc liệt kê.'),
    Q('Từ "yêu thương" là từ chỉ?', ['Trạng thái / tình cảm', 'Sự vật', 'Số đếm', 'Địa điểm'], 0, '"Yêu thương" là tình cảm/trạng thái.'),
    Q('Đoạn văn 3–5 câu kể về một việc tốt em đã làm cần?', ['Có mở – thân – kết, dùng dấu câu đúng', 'Chỉ 1 câu', 'Không cần chấm phẩy', 'Viết hoa toàn bộ'], 0, 'Yêu cầu đoạn văn ngắn lớp 3.'),
    Q('Câu "Ôi, quê hương em đẹp quá!" là?', ['Câu cảm thán', 'Câu kể', 'Câu hỏi', 'Câu khiến'], 0, 'Có "Ôi" + dấu ! → câu cảm.'),
  ]),
];

export const P3TV_SCENARIOS = indexBy(P3TV_WEEKS);
