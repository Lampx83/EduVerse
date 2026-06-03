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
    Q('Tiếng "trường" có cấu tạo gồm?', ['Chỉ 1 âm', 'Âm đầu "t" + vần "rường"', 'Âm đầu "tr" + vần "ường"', 'Âm đầu "tr" + vần "ương"'], 2, 'Âm đầu "tr" + vần "ường" + thanh huyền.'),
    Q('Tiếng "khoẻ" có vần gì?', ['oẻ', 'vần oè', 'vần oe', 'vần oẹ'], 0, 'Vần "oẻ" có thanh hỏi.'),
    Q('Chọn cách viết HOA đúng: hà nội', ['Hà nội', 'hà Nội', 'hà nội', 'Hà Nội'], 3, 'Tên riêng địa danh: viết hoa cả 2 chữ.'),
    Q('Sắp xếp đúng bảng chữ cái: c, b, đ, a', ['b, a, c, đ', 'a, c, b, đ', 'a, b, c, đ', 'đ, c, b, a'], 2, 'Bảng chữ cái: a, ă, â, b, c, d, đ...'),
    Q('Tiếng nào có chứa vần "ươu"?', ['hươu', 'rượu', 'trừu', 'cừu'], 0, '"Hươu" = h + ươu.'),
    Q('Câu nào viết đúng chính tả?', ['em Yêu trường em', 'EM yêu trường em.', 'Em yêu trường em', 'Em yêu trường em.'], 3, 'Đầu câu viết hoa, cuối câu có dấu chấm.'),
  ]),

  M(2, 'Tập đọc: "Cậu bé thông minh"', [
    Q('Truyện "Cậu bé thông minh" ca ngợi điều gì ở nhân vật chính?', ['Sức khoẻ', 'Sự thông minh, nhanh trí', 'Vẻ đẹp', 'Sự giàu có'], 1, 'Cậu bé dùng trí khôn để đối đáp với nhà vua.'),
    Q('Nhà vua thử tài cậu bé bằng cách?', ['Ra câu đố / mệnh lệnh khó', 'Tặng vàng', 'Bắt giam', 'Đuổi đi'], 0, 'Vua ra những đề bài khó để thử trí thông minh.'),
    Q('Bài học từ truyện?', ['Trí thông minh có thể giúp ta vượt khó', 'Của cải quan trọng nhất', 'Không cần học', 'Sức mạnh là quan trọng nhất'], 0, 'Trí khôn giúp giải quyết tình huống khó.'),
    Q('"Thông minh" trái nghĩa với?', ['Khôn ngoan', 'Dại, ngốc', 'Lanh lợi', 'Vui vẻ'], 1, 'Trái nghĩa của thông minh là dại, ngốc.'),
    Q('Câu "Cậu bé rất thông minh." là kiểu câu gì?', ['Ai làm gì?', 'Ai thế nào?', 'Ai là gì?', 'Cầu khiến'], 1, 'Kiểu "Ai thế nào?" — nói về đặc điểm/tính cách.'),
    Q('Khi gặp việc khó, em nên?', ['Bỏ chạy', 'Đổ lỗi cho người khác', 'Làm liều mà không suy nghĩ', 'Bình tĩnh suy nghĩ tìm cách giải quyết'], 3, 'Bình tĩnh + suy nghĩ là cách của người thông minh.'),
  ]),

  M(3, 'Từ chỉ sự vật – Ôn các kiểu câu (Ai – là gì?)', [
    Q('Từ nào CHỈ SỰ VẬT?', ['cô giáo', 'vui vẻ', 'xanh', 'chạy nhảy'], 0, '"Cô giáo" là sự vật (người).'),
    Q('Trong câu "Bố em là bác sĩ.", từ chỉ sự vật là?', ['bố em, bác sĩ', 'là, bác sĩ', 'chỉ có bác sĩ', 'chỉ có bố em'], 0, '"Bố em" và "bác sĩ" đều là sự vật.'),
    Q('Câu "Mẹ em là cô giáo." thuộc kiểu?', ['Ai thế nào?', 'Ai là gì?', 'Cầu khiến', 'Ai làm gì?'], 1, 'Có từ "là" → kiểu "Ai là gì?".'),
    Q('Trong "Hà Nội là thủ đô của Việt Nam.", bộ phận "Hà Nội" trả lời cho câu hỏi?', ['Thế nào?', 'Ai (cái gì)?', 'Làm gì?', 'Là gì?'], 1, '"Hà Nội" trả lời cho "Cái gì?".'),
    Q('Đặt câu kiểu "Ai là gì?" với "em":', ['Em là học sinh lớp 3.', 'Em chạy nhanh.', 'Em đi học.', 'Em rất ngoan.'], 0, 'Có "là" + danh từ chỉ chức vụ/loại → đúng kiểu.'),
    Q('Từ nào KHÔNG chỉ sự vật?', ['chăm chỉ', 'ngôi trường', 'quyển sách', 'con mèo'], 0, '"Chăm chỉ" là từ chỉ đặc điểm.'),
  ]),

  M(4, 'Tập đọc: "Hai bàn tay em"', [
    Q('Bài thơ "Hai bàn tay em" ca ngợi?', ['Mái tóc', 'Đôi mắt', 'Đôi bàn tay đáng yêu, có ích của em bé', 'Đôi chân'], 2, 'Hai bàn tay vừa đẹp vừa làm được nhiều việc.'),
    Q('Trong bài, hai bàn tay được so sánh với?', ['Con chim', 'Mặt trời', 'Quả bóng', 'Hoa, nụ, cánh sen'], 3, 'So sánh với hoa, nụ — gợi sự xinh xắn.'),
    Q('Hai bàn tay giúp em làm gì?', ['Chỉ để chơi', 'Đánh răng, chải đầu, học bài...', 'Đẩy bạn', 'Chỉ để vẫy chào'], 1, 'Bài thơ liệt kê những việc đôi tay làm hằng ngày.'),
    Q('Bài thơ thể hiện tình cảm gì?', ['Ghét đôi tay', 'Tức giận', 'Buồn bã', 'Yêu quý bản thân, biết giữ gìn cơ thể'], 3, 'Yêu quý đôi tay → yêu quý chính mình.'),
    Q('"Hồng hào" là từ chỉ?', ['Hoạt động', 'Đặc điểm (màu da)', 'Sự vật', 'Số lượng'], 1, '"Hồng hào" tả màu sắc, là đặc điểm.'),
    Q('Em nên làm gì để giữ gìn đôi tay?', ['Rửa tay sạch, cắt móng tay', 'Để bẩn', 'Cắn móng tay', 'Không rửa'], 0, 'Vệ sinh tay thường xuyên.'),
  ]),

  M(5, 'Mở rộng vốn từ: Gia đình', [
    Q('Từ nào chỉ NGƯỜI THÂN trong gia đình?', ['bác bảo vệ', 'bạn cùng lớp', 'ông, bà, bố, mẹ', 'cô giáo'], 2, 'Ông bà bố mẹ là người thân trong gia đình.'),
    Q('"Anh em như thể tay chân" muốn nói?', ['Anh em không cần nhau', 'Anh em đánh nhau', 'Anh em phải đoàn kết, yêu thương', 'Anh em xa cách'], 2, 'Câu tục ngữ về tình anh em ruột thịt.'),
    Q('Người sinh ra bố em gọi là?', ['Ông bà ngoại', 'Bác (anh của bố)', 'Ông bà nội', 'Cụ (bố mẹ của ông)'], 2, 'Bố mẹ của bố = ông bà nội.'),
    Q('Em gái của mẹ em gọi là?', ['Mợ (vợ của cậu)', 'Dì', 'Cô (em gái của bố)', 'Thím (vợ của chú)'], 1, 'Em/chị gái của mẹ gọi là dì.'),
    Q('Câu "Cả nhà em rất yêu thương nhau." thuộc kiểu?', ['Ai làm gì?', 'Ai thế nào?', 'Hỏi', 'Ai là gì?'], 1, 'Tả tình cảm → "Ai thế nào?".'),
    Q('Em nên làm gì để gia đình hạnh phúc?', ['Vâng lời, giúp đỡ bố mẹ', 'Không học', 'Trốn việc', 'Cãi lời'], 0, 'Vâng lời và giúp đỡ là việc con ngoan nên làm.'),
  ]),

  M(6, 'Tập đọc: "Ai có lỗi?"', [
    Q('Truyện "Ai có lỗi?" nói về?', ['Hai bạn cãi nhau rồi làm hoà', 'Đi du lịch', 'Cuộc thi', 'Bạn học giỏi'], 0, 'Hai bạn giận nhau rồi nhận ra lỗi và làm hoà.'),
    Q('Vì sao hai bạn cãi nhau?', ['Vì điểm số', 'Vì mất tiền', 'Vì giành đồ chơi', 'Vì hiểu lầm nhỏ'], 3, 'Từ một va chạm nhỏ → hiểu lầm.'),
    Q('Sau khi cãi nhau, các bạn đã?', ['Không bao giờ nói chuyện', 'Xin lỗi và làm hoà', 'Đánh nhau', 'Cãi tiếp'], 1, 'Biết nhận lỗi và xin lỗi nhau.'),
    Q('Bài học từ câu chuyện?', ['Phải thắng bạn', 'Bạn bè cần độ lượng, biết nhận lỗi', 'Không nên chơi với ai', 'Lờ đi mọi việc'], 1, 'Tình bạn cần sự tha thứ và nhận lỗi.'),
    Q('"Làm hoà" có nghĩa?', ['Đánh nhau', 'Hoà giải, lại thân thiết', 'Im lặng giận nhau lâu hơn', 'Giả vờ không có chuyện gì'], 1, '"Làm hoà" = trở lại thân thiết sau khi giận.'),
    Q('Khi mình có lỗi với bạn, em nên?', ['Đổ lỗi', 'Bỏ chạy', 'Xin lỗi chân thành', 'Không nói gì'], 2, 'Người tốt biết nhận lỗi và xin lỗi.'),
  ]),

  M(7, 'Từ chỉ hoạt động – trạng thái', [
    Q('Từ nào CHỈ HOẠT ĐỘNG?', ['tròn', 'thấp', 'xanh', 'đọc'], 3, '"Đọc" là hoạt động.'),
    Q('Trong câu "Em đang học bài.", từ chỉ hoạt động là?', ['em (chủ thể của câu)', 'học', 'bài (sự vật được học)', 'đang (chỉ thời gian)'], 1, '"Học" là hoạt động.'),
    Q('Từ nào CHỈ TRẠNG THÁI?', ['nhanh', 'buồn', 'chạy', 'cái bàn'], 1, '"Buồn" chỉ trạng thái cảm xúc.'),
    Q('Trong "Mẹ vui khi em được điểm 10.", từ chỉ trạng thái là?', ['điểm (sự vật)', '10', 'mẹ (sự vật)', 'vui'], 3, '"Vui" là trạng thái cảm xúc.'),
    Q('Câu "Học sinh đang viết bài." thuộc kiểu?', ['Ai làm gì?', 'Ai ở đâu?', 'Ai là gì?', 'Ai thế nào?'], 0, '"Học sinh" + "viết bài" (hoạt động) → "Ai làm gì?".'),
    Q('Đặt câu có từ chỉ hoạt động "nhảy":', ['Nhảy là gì?', 'Em là nhảy.', 'Em nhảy dây trong giờ ra chơi.', 'Em rất nhảy.'], 2, '"Nhảy dây" — hoạt động hợp ngữ cảnh.'),
  ]),

  M(8, 'Tập đọc: "Người mẹ"', [
    Q('Truyện "Người mẹ" ca ngợi?', ['Tình thương yêu vô bờ của người mẹ', 'Vẻ đẹp', 'Sự giàu có', 'Sức khoẻ'], 0, 'Mẹ sẵn sàng hi sinh để cứu con.'),
    Q('Vì con, người mẹ đã làm gì?', ['Vượt mọi khó khăn, hi sinh bản thân', 'Cười nhạo', 'Quên mất', 'Bỏ con đi'], 0, 'Mẹ vượt qua nhiều thử thách để tìm con.'),
    Q('Bài học từ câu chuyện?', ['Không cần mẹ', 'Biết ơn và yêu thương mẹ', 'Chỉ cần tiền', 'Coi thường mẹ'], 1, 'Yêu thương và biết ơn mẹ là điều quan trọng.'),
    Q('"Hi sinh" có nghĩa?', ['Vui vẻ', 'Lười biếng', 'Chịu mất mát vì người khác', 'Tự ý làm theo ý mình'], 2, '"Hi sinh" = chịu thiệt vì người khác.'),
    Q('Em làm gì để mẹ vui?', ['Bỏ học', 'Chỉ chơi', 'Cãi mẹ', 'Học giỏi, ngoan, giúp việc nhà'], 3, 'Con ngoan = niềm vui lớn nhất của mẹ.'),
    Q('Câu "Mẹ là người em yêu nhất." thuộc kiểu?', ['Ai thế nào?', 'Ai là gì?', 'Ai làm gì?', 'Cảm thán'], 1, 'Có "là" + cụm danh từ → "Ai là gì?".'),
  ]),

  M(9, 'Ôn tập giữa học kì 1', [
    Q('Câu nào dùng dấu chấm đúng?', ['em đi học', 'Em đi học.', 'Em đi học?', 'em Đi học!'], 1, 'Đầu câu hoa, cuối câu kể dùng dấu chấm.'),
    Q('Bộ phận in đậm trong "Bố em LÀ KỸ SƯ." trả lời cho câu hỏi?', ['Câu hỏi Ai?', 'Làm gì?', 'Là gì?', 'Thế nào?'], 2, 'Cụm "là kỹ sư" trả lời cho "Là gì?".'),
    Q('Từ nào chỉ đặc điểm?', ['sách (sự vật)', 'hát (hoạt động)', 'cao', 'mẹ (sự vật)'], 2, '"Cao" tả chiều cao → đặc điểm.'),
    Q('Câu "Lan học rất chăm." thuộc kiểu?', ['Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Cầu khiến'], 2, 'Tả mức độ học → "Ai thế nào?".'),
    Q('Chính tả: chọn từ đúng', ['xinh sắn', 'xinh xắn', 'sinh sắn', 'sinh xắn'], 1, '"Xinh xắn" là cách viết đúng.'),
    Q('Khi viết tên người, em phải?', ['Viết hoa chữ cái đầu mỗi tiếng', 'Viết tắt', 'Viết in', 'Viết thường'], 0, 'Tên riêng viết hoa chữ cái đầu mỗi tiếng.'),
  ]),

  M(10, 'Tập đọc: "Giọng quê hương"', [
    Q('Bài "Giọng quê hương" ca ngợi?', ['Học giỏi', 'Đi chơi xa', 'Có nhiều tiền', 'Tình cảm với quê hương qua giọng nói'], 3, 'Giọng nói gợi nhớ quê hương.'),
    Q('Giọng quê hương khiến nhân vật?', ['Xúc động, nhớ về quê', 'Sợ hãi', 'Tức giận', 'Buồn ngủ'], 0, 'Giọng quê làm con người xúc động, gần gũi.'),
    Q('Bài học?', ['Yêu quê hương dù đi đâu', 'Quên quê', 'Không cần quê', 'Chê quê'], 0, 'Quê hương là cội nguồn, luôn nhớ về.'),
    Q('"Quê hương" trong câu là?', ['Đặc điểm', 'Hoạt động', 'Từ chỉ sự vật (nơi chốn)', 'Trạng thái'], 2, '"Quê hương" là danh từ chỉ địa điểm.'),
    Q('Đặt câu so sánh: "Giọng quê hương ngọt ngào như ...":', ['... đá lạnh.', '... mật ong.', '... cay đắng.', '... gai nhọn.'], 1, 'So sánh ngọt với mật ong — hợp lý.'),
    Q('Em làm gì để bày tỏ tình yêu quê hương?', ['Vứt rác', 'Giữ gìn vệ sinh, học tốt, kể về quê', 'Chê bai', 'Không quan tâm'], 1, 'Yêu quê hương qua hành động cụ thể.'),
  ]),

  M(11, 'Mở rộng vốn từ: Quê hương · So sánh', [
    Q('Từ nào chỉ cảnh đẹp quê hương?', ['nhà cao tầng', 'xe ô tô', 'điện thoại', 'cánh đồng, dòng sông'], 3, 'Cánh đồng, dòng sông là cảnh đẹp quê.'),
    Q('Trong câu "Trẻ em như búp trên cành.", từ so sánh là?', ['như', 'cành (sự vật được so sánh tới)', 'búp (hình ảnh so sánh)', 'trẻ em'], 0, '"Như" là từ chỉ sự so sánh.'),
    Q('Câu nào CÓ phép so sánh?', ['Trời mưa.', 'Mẹ ăn cơm.', 'Em đi học.', 'Mặt trời đỏ rực như lửa.'], 3, 'Có từ "như" → có phép so sánh.'),
    Q('Hoàn thành: "Dòng sông quê em xanh như ..."', ['mực đen', 'than', 'ngọc', 'máu'], 2, 'Xanh ngọc — hợp với dòng sông.'),
    Q('Quê hương em có thể là?', ['Nước Mỹ', 'Sao Hoả', 'Đáy biển', 'Làng, phố, thành phố nơi em sinh ra/lớn lên'], 3, 'Quê là nơi sinh ra, lớn lên.'),
    Q('"Quê hương" và "đất nước" có quan hệ?', ['Không liên quan', 'Trái nghĩa', 'Đồng nghĩa gần (đều chỉ nơi gắn bó)', 'Đối lập'], 2, 'Đều chỉ nơi chôn rau cắt rốn, gắn bó.'),
  ]),

  M(12, 'Tập đọc: "Nắng phương Nam"', [
    Q('Bài "Nắng phương Nam" nói về?', ['Trận bóng', 'Cuộc thi học sinh giỏi', 'Tình bạn của các bạn nhỏ Bắc – Nam', 'Đi du lịch'], 2, 'Các bạn miền Nam gửi nhánh mai tặng bạn miền Bắc.'),
    Q('Vì sao các bạn gửi nhánh mai cho bạn miền Bắc?', ['Để bạn cảm nhận Tết phương Nam', 'Vì hết hoa đào', 'Vì bị bắt buộc', 'Vì muốn khoe'], 0, 'Để chia sẻ không khí Tết miền Nam.'),
    Q('Bài học?', ['Chỉ chơi với bạn cùng phố', 'Phải sống một mình', 'Không cần bạn xa', 'Tình bạn đẹp vượt khoảng cách địa lý'], 3, 'Tình bạn không phân biệt vùng miền.'),
    Q('Hoa mai thường nở vào dịp?', ['Mùa hè', 'Tết Nguyên Đán', 'Tết Trung Thu', 'Giáng sinh'], 1, 'Mai vàng nở dịp Tết, đặc trưng miền Nam.'),
    Q('Hoa đào thường có ở miền nào dịp Tết?', ['Miền Trung', 'Cả ba miền', 'Miền Nam', 'Miền Bắc'], 3, 'Đào hồng/đỏ là đặc trưng miền Bắc.'),
    Q('Câu "Cành mai vàng rực như nắng." là?', ['Câu kể có hình ảnh so sánh', 'Câu hỏi', 'Câu cầu khiến', 'Câu cảm'], 0, 'Có "như" → so sánh.'),
  ]),

  M(13, 'Dấu chấm – dấu phẩy · Đặt câu hỏi cho bộ phận in đậm', [
    Q('Đặt dấu phẩy đúng: "Trong vườn có hoa hồng hoa cúc hoa lan."', ['Trong vườn, có hoa hồng hoa cúc hoa lan.', 'Trong vườn có, hoa hồng hoa cúc, hoa lan.', 'Trong, vườn có hoa, hồng hoa cúc hoa lan.', 'Trong vườn có hoa hồng, hoa cúc, hoa lan.'], 3, 'Dấu phẩy ngăn cách các thành phần liệt kê.'),
    Q('Dấu chấm dùng để?', ['Kết thúc câu kể', 'Cảm thán', 'Kết thúc câu hỏi', 'Mở đầu câu'], 0, 'Cuối câu kể thường có dấu chấm.'),
    Q('Đặt câu hỏi cho bộ phận in đậm: "EM LÀ HỌC SINH lớp 3."', ['Em là gì?', 'Em làm gì?', 'Em khi nào?', 'Em ở đâu?'], 0, '"Là học sinh" → câu hỏi "là gì?".'),
    Q('Đặt câu hỏi cho "Mẹ ĐANG NẤU CƠM."', ['Mẹ thế nào?', 'Mẹ là gì?', 'Mẹ ở đâu?', 'Mẹ làm gì?'], 3, '"Nấu cơm" là hoạt động → "làm gì?".'),
    Q('Câu "Hôm nay, em đi học sớm." có dấu phẩy để?', ['Kết thúc câu', 'Báo hiệu câu hỏi', 'Trang trí', 'Tách trạng ngữ "hôm nay"'], 3, 'Dấu phẩy tách trạng ngữ thời gian.'),
    Q('Câu nào dùng dấu phẩy SAI?', ['Buổi sáng, em ăn sáng.', 'Hôm qua, em đi chơi.', 'Trong lớp, em ngồi bàn đầu.', 'Em, đi học.'], 3, '"Em đi học" không cần dấu phẩy giữa CN và VN.'),
  ]),

  M(14, 'Tập đọc: "Cửa Tùng"', [
    Q('Bài "Cửa Tùng" miêu tả?', ['Sa mạc', 'Núi cao', 'Một khu rừng', 'Vẻ đẹp một vùng biển'], 3, 'Cửa Tùng — bãi biển nổi tiếng ở Quảng Trị.'),
    Q('Vẻ đẹp Cửa Tùng được tả qua?', ['Màu nước thay đổi trong ngày', 'Tiếng nhạc', 'Số khách', 'Vị mặn'], 0, 'Bài tả nước biển đổi màu sớm – trưa – chiều.'),
    Q('Bài giúp em hiểu?', ['Biển nguy hiểm', 'Không nên đi biển', 'Biển ở nước ngoài đẹp hơn', 'Đất nước Việt Nam có nhiều cảnh đẹp'], 3, 'Tự hào về cảnh đẹp quê hương.'),
    Q('"Cửa Tùng" thuộc tỉnh nào?', ['Quảng Trị', 'Hà Nội', 'Lào Cai', 'Cần Thơ'], 0, 'Cửa Tùng thuộc Quảng Trị, miền Trung.'),
    Q('Câu "Mặt trời lặn xuống biển đỏ rực như quả bóng lửa." có phép?', ['Liệt kê', 'So sánh', 'Đối lập', 'Lặp lại'], 1, 'Có "như" → so sánh.'),
    Q('Em làm gì khi đi biển để bảo vệ môi trường?', ['Vứt rác xuống biển', 'Đánh bắt cá nhỏ', 'Không vứt rác bừa bãi', 'Phá san hô'], 2, 'Bảo vệ môi trường biển.'),
  ]),

  M(15, 'Mở rộng vốn từ: Từ địa phương · Dấu chấm hỏi – chấm than', [
    Q('Dấu chấm hỏi (?) dùng cuối câu?', ['Hỏi', 'Kể (câu trần thuật)', 'Cầu khiến', 'Cảm thán'], 0, 'Cuối câu hỏi dùng dấu ?.'),
    Q('Dấu chấm than (!) dùng cuối câu?', ['Cảm thán hoặc cầu khiến', 'Kể chuyện bình thường', 'Liệt kê', 'Câu hỏi'], 0, 'Dấu ! dùng cho câu cảm và câu khiến.'),
    Q('Đặt dấu đúng: "Em đi đâu đấy ___"', ['! (câu cảm thán)', '.', '?', ','], 2, '"Đi đâu" → câu hỏi → dùng ?.'),
    Q('Đặt dấu đúng: "Ôi, đẹp quá ___"', ['? (câu hỏi)', '!', '.', ','], 1, 'Câu cảm thán → dùng !.'),
    Q('Từ "ba" (miền Nam) đồng nghĩa với?', ['ông (bố của bố)', 'chú (em trai của bố)', 'bố (miền Bắc)', 'mẹ (người sinh ra mình)'], 2, '"Ba" (Nam) = "bố" (Bắc).'),
    Q('Từ "má" (miền Nam) tương đương?', ['dì (em gái của mẹ)', 'cha (tức bố)', 'mẹ', 'cô (em gái của bố)'], 2, '"Má" (Nam) = "mẹ" (Bắc).'),
  ]),

  M(16, 'Tập đọc: "Người liên lạc nhỏ"', [
    Q('"Người liên lạc nhỏ" kể về?', ['Kim Đồng — đội viên dũng cảm', 'Một bác sĩ', 'Một học sinh', 'Một cô giáo'], 0, 'Anh Kim Đồng làm liên lạc cho cách mạng.'),
    Q('Đức tính nổi bật của Kim Đồng?', ['Lười biếng', 'Nhanh nhẹn, gan dạ, mưu trí', 'Tham lam', 'Sợ hãi'], 1, 'Kim Đồng dũng cảm, nhanh trí khi bị địch nghi.'),
    Q('Bài học từ tấm gương Kim Đồng?', ['Chỉ ham chơi', 'Không cần học', 'Yêu nước, dũng cảm từ khi còn nhỏ', 'Bỏ học sớm'], 2, 'Anh hùng nhỏ tuổi — tấm gương yêu nước.'),
    Q('"Liên lạc" trong bài có nghĩa?', ['Người nấu cơm', 'Người đưa tin', 'Diễn viên', 'Học sinh'], 1, 'Liên lạc viên = người đưa tin tức.'),
    Q('Kim Đồng là người dân tộc?', ['Nùng', 'Tày', 'Kinh', 'H\'Mông'], 0, 'Kim Đồng người dân tộc Nùng, quê Cao Bằng.'),
    Q('Em học được gì từ Kim Đồng?', ['Tính ích kỷ', 'Sự nhút nhát', 'Lòng yêu nước, dũng cảm', 'Sự lười nhác'], 2, 'Lòng yêu nước và sự dũng cảm.'),
  ]),

  M(17, 'Viết đoạn văn 3 – 5 câu kể về gia đình', [
    Q('Một đoạn văn kể về gia đình thường gồm?', ['1 câu duy nhất', '20 câu', 'Chỉ có dấu chấm', '3–5 câu giới thiệu các thành viên và tình cảm'], 3, '3–5 câu là dung lượng phù hợp lớp 3.'),
    Q('Câu mở đoạn nên?', ['Để trống', 'Kể về thú cưng', 'Giới thiệu chung về gia đình', 'Kể về món ăn'], 2, 'Câu mở đoạn giới thiệu chung.'),
    Q('Câu nào thích hợp mở đoạn?', ['Gia đình em có bốn người: bố, mẹ, anh và em.', 'Trời mưa to.', 'Em ăn cơm.', 'Đi học vui lắm.'], 0, 'Câu giới thiệu thành viên — đúng mở đoạn.'),
    Q('Câu kết đoạn nên?', ['Bày tỏ tình cảm với gia đình', 'Hỏi bạn ăn gì', 'Bỏ trống', 'Kể chuyện cười'], 0, 'Câu kết thể hiện tình cảm.'),
    Q('Trong đoạn văn, các câu cần?', ['Đầu câu viết hoa, cuối câu có dấu', 'Viết thường tất cả', 'Không cần dấu', 'Viết tắt'], 0, 'Quy tắc chính tả cơ bản.'),
    Q('Câu nào KHÔNG nên dùng trong đoạn về gia đình?', ['Trận đấu hôm qua rất hay.', 'Mẹ em nấu ăn ngon.', 'Em rất yêu gia đình mình.', 'Bố em làm bác sĩ.'], 0, 'Trận đấu không liên quan chủ đề gia đình.'),
  ]),

  M(18, 'Ôn tập cuối học kì 1', [
    Q('Câu "Ngôi trường của em rất đẹp." thuộc kiểu?', ['Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Cầu khiến'], 2, 'Tả đặc điểm → "Ai thế nào?".'),
    Q('Từ nào chỉ HOẠT ĐỘNG?', ['xinh', 'đỏ (đặc điểm)', 'sách (sự vật)', 'vẽ'], 3, '"Vẽ" là hoạt động.'),
    Q('Tìm từ chỉ ĐẶC ĐIỂM trong "Bầu trời cao và xanh ngắt."', ['cao, xanh ngắt', 'và (từ nối)', 'bầu trời (sự vật)', 'bầu trời'], 0, '"Cao", "xanh ngắt" là đặc điểm.'),
    Q('Câu nào có phép so sánh?', ['Em học bài.', 'Mặt trăng tròn như chiếc đĩa.', 'Trời mưa to.', 'Mẹ đi chợ.'], 1, 'Có "như" → so sánh.'),
    Q('Dấu phẩy trong "Buổi sáng, em đi học." dùng để?', ['Tách trạng ngữ', 'Kết thúc câu', 'Báo hiệu câu hỏi', 'Cảm thán'], 0, 'Tách trạng ngữ thời gian.'),
    Q('Chính tả: chọn đúng', ['xum suê', 'sum xuê', 'sum suê', 'xum xuê'], 2, '"Sum suê" là cách viết đúng.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Tập đọc: "Hai Bà Trưng"', [
    Q('Hai Bà Trưng là ai?', ['Hai cô giáo', 'Hai bạn học', 'Hai mẹ con', 'Hai nữ anh hùng dân tộc thời Bắc thuộc'], 3, 'Trưng Trắc và Trưng Nhị — anh hùng dân tộc.'),
    Q('Hai Bà Trưng nổi tiếng vì?', ['Khởi nghĩa chống quân Đông Hán', 'Đi du học', 'Làm thơ', 'Buôn bán giỏi'], 0, 'Khởi nghĩa năm 40 chống ách đô hộ phương Bắc.'),
    Q('Tinh thần nổi bật của Hai Bà?', ['Sợ hãi', 'Lười biếng', 'Tham lam', 'Yêu nước, dũng cảm'], 3, 'Tấm gương yêu nước, dũng cảm vì dân.'),
    Q('Bài học từ Hai Bà Trưng?', ['Phụ nữ Việt Nam anh hùng', 'Không nên đấu tranh', 'Phụ nữ yếu đuối', 'Sống cam chịu'], 0, 'Truyền thống phụ nữ Việt Nam: anh hùng, kiên cường.'),
    Q('Hai Bà Trưng quê ở?', ['Phong Châu (Phú Thọ)', 'Sài Gòn', 'Mê Linh (Hà Nội ngày nay)', 'Đà Nẵng'], 2, 'Quê hai Bà ở Mê Linh, nay thuộc Hà Nội.'),
    Q('Em học được gì từ Hai Bà?', ['Tinh thần yêu nước, không khuất phục', 'Sự bỏ cuộc', 'Lười biếng', 'Sự ích kỷ'], 0, 'Yêu nước và kiên cường.'),
  ]),

  M(20, 'Mở rộng vốn từ: Tổ quốc · Dấu phẩy', [
    Q('"Tổ quốc" có nghĩa?', ['Một lớp học', 'Một ngôi nhà', 'Một con đường', 'Đất nước, quê hương chung'], 3, 'Tổ quốc = đất nước, quê hương.'),
    Q('Từ nào ĐỒNG NGHĨA với "Tổ quốc"?', ['Trường học', 'Bài tập', 'Lớp học', 'Đất nước, non sông'], 3, 'Tổ quốc ≈ đất nước, non sông, giang sơn.'),
    Q('Đặt dấu phẩy đúng: "Nước Việt Nam có núi sông biển đảo rừng vàng."', ['Nước Việt Nam có núi, sông, biển đảo, rừng vàng.', 'Nước, Việt Nam có núi sông biển đảo, rừng vàng.', 'Nước Việt Nam, có núi sông biển đảo rừng vàng.', 'Nước Việt, Nam có núi sông biển đảo rừng vàng.'], 0, 'Dấu phẩy ngăn cách các từ liệt kê.'),
    Q('"Yêu Tổ quốc" thể hiện qua?', ['Vứt rác', 'Trốn học', 'Học giỏi, làm việc tốt, bảo vệ môi trường', 'Lười biếng'], 2, 'Hành động cụ thể thể hiện lòng yêu Tổ quốc.'),
    Q('Quốc kì Việt Nam có?', ['Nền xanh, sao trắng', 'Nền trắng, sao xanh', 'Nền vàng, sao đỏ', 'Nền đỏ, sao vàng năm cánh'], 3, 'Cờ đỏ sao vàng — quốc kì Việt Nam.'),
    Q('Quốc ca Việt Nam tên là?', ['Tiếng hát con tàu', 'Lên đàng', 'Người Hà Nội', 'Tiến quân ca'], 3, '"Tiến quân ca" — Văn Cao sáng tác.'),
  ]),

  M(21, 'Tập đọc: "Ông tổ nghề thêu"', [
    Q('"Ông tổ nghề thêu" kể về ai?', ['Một nông dân', 'Một học sinh', 'Trần Quốc Khái — học nghề thêu khi đi sứ', 'Một bác sĩ'], 2, 'Trần Quốc Khái học nghề thêu mang về truyền cho dân.'),
    Q('Đức tính nổi bật của ông?', ['Sợ hãi', 'Ham học, thông minh', 'Lười biếng', 'Hay khóc'], 1, 'Ham học hỏi, kiên trì, thông minh.'),
    Q('Bài học từ câu chuyện?', ['Học một mình', 'Học hỏi sẽ mang lại lợi ích cho cộng đồng', 'Không cần học', 'Học rồi giấu'], 1, 'Học để truyền lại tri thức cho cộng đồng.'),
    Q('"Đi sứ" có nghĩa?', ['Đi học', 'Đi chơi', 'Đi buôn', 'Đại diện vua đi gặp nước khác'], 3, 'Đi sứ = sứ thần đại diện quốc gia.'),
    Q('Em học được điều gì từ ông?', ['Sự ích kỷ', 'Tính giấu giếm', 'Sự lười nhác', 'Ham học, sẻ chia tri thức'], 3, 'Ham học và sẻ chia.'),
    Q('Nghề thêu cần đức tính?', ['Kiên nhẫn, khéo tay', 'Cẩu thả', 'Bừa bộn', 'Vội vàng'], 0, 'Thêu cần sự kiên nhẫn, tỉ mỉ.'),
  ]),

  M(22, 'Câu "Ai làm gì?" – "Ai thế nào?" – "Ai là gì?"', [
    Q('"Bố em là kỹ sư." thuộc kiểu?', ['Ai là gì?', 'Ai làm gì?', 'Ai thế nào?', 'Cảm thán'], 0, 'Có "là" + danh từ → "Ai là gì?".'),
    Q('"Mẹ đang nấu cơm." thuộc kiểu?', ['Ai thế nào?', 'Ai là gì?', 'Ai làm gì?', 'Cầu khiến'], 2, '"Nấu cơm" là hoạt động → "Ai làm gì?".'),
    Q('"Cây bàng cao lớn." thuộc kiểu?', ['Ai thế nào?', 'Ai là gì?', 'Ai làm gì?', 'Cảm thán'], 0, 'Tả đặc điểm → "Ai thế nào?".'),
    Q('Câu nào thuộc kiểu "Ai làm gì?"', ['Hoa hồng rất thơm.', 'Trời xanh.', 'Lan quét nhà.', 'Em là học sinh.'], 2, '"Quét nhà" là hoạt động → "Ai làm gì?".'),
    Q('Câu nào thuộc kiểu "Ai thế nào?"', ['Em đang học.', 'Lan rất hiền.', 'Bố em làm thợ.', 'Cô là giáo viên.'], 1, '"Hiền" là đặc điểm tính cách.'),
    Q('Đặt câu "Ai là gì?" với "Hà Nội":', ['Hà Nội mưa.', 'Hà Nội là thủ đô nước ta.', 'Hà Nội đẹp lắm.', 'Hà Nội đâu?'], 1, 'Có "là" + danh từ → đúng kiểu.'),
  ]),

  M(23, 'Tập đọc: "Cái cầu"', [
    Q('Bài thơ "Cái cầu" của ai?', ['Phạm Tiến Duật', 'Trần Đăng Khoa', 'Định Hải', 'Xuân Quỳnh'], 0, 'Bài thơ của Phạm Tiến Duật.'),
    Q('Bài thơ tả ai làm gì?', ['Em đi học', 'Bạn chơi đùa', 'Mẹ nấu cơm', 'Bố đi làm xa, xây cầu'], 3, 'Bố làm cầu xa nhà, em nhớ bố.'),
    Q('Tình cảm trong bài thơ?', ['Buồn bực', 'Tức giận', 'Yêu thương, tự hào về bố', 'Sợ hãi'], 2, 'Yêu bố, tự hào nghề của bố.'),
    Q('Bài học từ bài thơ?', ['Không cần làm việc', 'Bỏ qua tình cảm', 'Yêu thương người thân, trân trọng lao động', 'Coi thường nghề'], 2, 'Trân trọng lao động và tình thân.'),
    Q('"Cầu" trong bài là?', ['Cầu thủ', 'Cầu hôn', 'Cái cầu lông', 'Cây cầu bắc qua sông'], 3, 'Cây cầu bắc qua sông để đi lại.'),
    Q('Em sẽ làm gì khi bố/mẹ đi làm xa?', ['Khóc cả ngày', 'Không học', 'Nghịch ngợm', 'Vâng lời mẹ, học giỏi để bố/mẹ vui'], 3, 'Học giỏi, ngoan là niềm vui của bố mẹ.'),
  ]),

  M(24, 'Mở rộng vốn từ: Nghệ thuật · Sáng tạo · Trí thức', [
    Q('Từ chỉ NGƯỜI HOẠT ĐỘNG NGHỆ THUẬT?', ['thợ điện', 'ca sĩ, hoạ sĩ, nhạc sĩ', 'lái xe', 'bác sĩ'], 1, 'Nghệ sĩ: ca sĩ, hoạ sĩ, nhạc sĩ...'),
    Q('Từ chỉ HOẠT ĐỘNG NGHỆ THUẬT?', ['may vá', 'hát, vẽ, đàn', 'cấy lúa', 'sửa xe'], 1, 'Các hoạt động nghệ thuật: ca, múa, hội hoạ...'),
    Q('"Trí thức" là người?', ['Có học vấn, am hiểu nhiều', 'Không biết chữ', 'Chỉ làm thợ thủ công', 'Lười học'], 0, 'Trí thức = người có học vấn cao.'),
    Q('Nhà bác học nổi tiếng Việt Nam?', ['Lê Lợi', 'Lê Quý Đôn', 'Hai Bà Trưng', 'Trần Quốc Tuấn'], 1, 'Lê Quý Đôn — nhà bác học thời Lê.'),
    Q('Người vẽ tranh gọi là?', ['Hoạ sĩ', 'Nghệ sĩ (nói chung)', 'Nhạc sĩ', 'Diễn viên'], 0, 'Hoạ sĩ = người vẽ tranh.'),
    Q('Người sáng tác nhạc gọi là?', ['Nhạc sĩ', 'Hoạ sĩ', 'Nhà văn', 'Nhà thơ'], 0, 'Nhạc sĩ = người sáng tác âm nhạc.'),
  ]),

  M(25, 'Tập đọc: "Hội vật"', [
    Q('"Hội vật" tả cảnh?', ['Trận bóng đá', 'Đấu vật trong lễ hội cổ truyền', 'Cuộc thi vẽ', 'Cuộc thi học sinh'], 1, 'Đấu vật là môn thể thao trong lễ hội.'),
    Q('Hai đô vật trong bài tên gì?', ['Tý và Tèo', 'Quắm Đen và Cản Ngũ', 'An và Bình', 'Lan và Mai'], 1, 'Hai đô vật nổi tiếng: Quắm Đen và Cản Ngũ.'),
    Q('Ai là người chiến thắng?', ['Không ai', 'Cản Ngũ — bằng kinh nghiệm và sức bền', 'Cả hai đô vật cùng thua', 'Quắm Đen'], 1, 'Cản Ngũ thắng nhờ sự điềm tĩnh và kinh nghiệm.'),
    Q('Bài học từ "Hội vật"?', ['Đánh nhanh thắng nhanh', 'Kinh nghiệm + bình tĩnh thắng sức trẻ', 'Đừng tham gia', 'Sức mạnh là tất cả'], 1, 'Kinh nghiệm và sự điềm tĩnh quan trọng.'),
    Q('"Lễ hội" thường diễn ra vào?', ['Đêm khuya', 'Ngày thường', 'Dịp Tết, ngày lễ', 'Khi học bài'], 2, 'Lễ hội thường vào mùa xuân, dịp Tết.'),
    Q('Hội vật là môn thể thao?', ['Không tồn tại', 'Mới phát minh', 'Của nước ngoài', 'Truyền thống dân tộc Việt Nam'], 3, 'Vật là môn truyền thống Việt Nam.'),
  ]),

  M(26, 'Mở rộng vốn từ: Lễ hội · Đặt và trả lời câu hỏi "Vì sao?"', [
    Q('Lễ hội nổi tiếng dịp Tết miền Bắc?', ['Hội đua thuyền', 'Hội pháo', 'Hội Lim, hội Gióng, hội chùa Hương', 'Hội té nước'], 2, 'Hội Lim (Bắc Ninh), hội Gióng (Hà Nội), hội chùa Hương (Hà Nội).'),
    Q('Câu hỏi "Vì sao?" dùng để hỏi?', ['Thời gian', 'Nguyên nhân, lí do', 'Địa điểm', 'Số lượng'], 1, '"Vì sao?" hỏi về nguyên nhân.'),
    Q('Trả lời cho "Vì sao em đi học sớm?":', ['Em đi với bạn.', 'Em đi xe đạp.', 'Vì em sợ trễ giờ.', 'Trường gần nhà.'], 2, 'Bắt đầu bằng "Vì..." chỉ lí do.'),
    Q('Hội Gióng tưởng nhớ ai?', ['Thánh Gióng — anh hùng đánh giặc Ân', 'Hai Bà Trưng', 'Quang Trung', 'Trần Hưng Đạo'], 0, 'Hội Gióng (Sóc Sơn) tưởng nhớ Thánh Gióng.'),
    Q('Đi lễ hội cần?', ['Vứt rác', 'Chen lấn', 'Ăn mặc lịch sự, giữ trật tự', 'La hét'], 2, 'Văn hoá tham gia lễ hội.'),
    Q('"Vì sao?" còn có thể thay bằng?', ['Bao nhiêu?', 'Ở đâu?', 'Tại sao?', 'Khi nào?'], 2, '"Tại sao?" đồng nghĩa với "Vì sao?".'),
  ]),

  M(27, 'Tập đọc: "Rước đèn ông sao"', [
    Q('"Rước đèn ông sao" tả không khí?', ['Tết Nguyên Đán', 'Tết Trung Thu của trẻ em', 'Ngày khai giảng', 'Mùa hè'], 1, 'Rước đèn là hoạt động đặc trưng Trung Thu.'),
    Q('Đèn ông sao có hình?', ['Hình tròn', 'Ngôi sao 5 cánh', 'Hình tam giác', 'Hình vuông'], 1, 'Đèn ông sao 5 cánh, mỗi cánh giấy bóng kính.'),
    Q('Trung Thu vào ngày?', ['Rằm tháng Giêng', 'Rằm tháng Tám âm lịch', 'Cuối tháng 12', 'Mùng 1 tháng 1'], 1, '15/8 âm lịch là Tết Trung Thu.'),
    Q('Cảm xúc của các em nhỏ trong bài?', ['Buồn bã', 'Tức giận', 'Sợ hãi', 'Vui tươi, háo hức'], 3, 'Trẻ em rất vui khi rước đèn.'),
    Q('Trung Thu thường có?', ['Cây thông', 'Bánh chưng, bánh tét', 'Bánh nướng, bánh dẻo, đèn, múa lân', 'Pháo hoa'], 2, 'Đặc trưng Trung Thu Việt Nam.'),
    Q('Câu "Đèn ông sao rực rỡ như những vì sao trên trời." có?', ['Liệt kê', 'Nhân hoá', 'Phép so sánh', 'Đối lập'], 2, 'Có "như" → so sánh.'),
  ]),

  M(28, 'Tập đọc: "Cuộc chạy đua trong rừng"', [
    Q('Bài "Cuộc chạy đua trong rừng" có nhân vật chính?', ['Thỏ con — chạy nhanh nhất rừng', 'Hươu sao — đối thủ chính', 'Ngựa con — chủ quan, không chuẩn bị kĩ', 'Voi con — to khoẻ nhất'], 2, 'Ngựa con chuẩn bị qua loa nên thất bại.'),
    Q('Bài học từ truyện?', ['Phải chuẩn bị chu đáo trước khi làm việc lớn', 'Sức mạnh là tất cả', 'Khoe khoang là tốt', 'Không cần luyện tập'], 0, 'Chuẩn bị chu đáo là yếu tố thành công.'),
    Q('Ngựa cha khuyên ngựa con?', ['Bỏ thi', 'Cứ chạy đi', 'Khoe sức mạnh', 'Phải xem lại móng chân, chuẩn bị kĩ'], 3, 'Người lớn khuyên chuẩn bị kỹ trước cuộc thi.'),
    Q('Vì sao ngựa con thua?', ['Bị thỏ vượt qua ở phút cuối', 'Móng bị long, ngã giữa đường', 'Bị bắt', 'Lạc đường'], 1, 'Móng chưa được kiểm tra → bị long.'),
    Q('"Chủ quan" có nghĩa?', ['Buồn bã', 'Khiêm tốn', 'Tự tin quá mức, không cẩn thận', 'Lo lắng'], 2, 'Chủ quan = không cẩn thận, coi thường.'),
    Q('Em rút ra điều gì?', ['Khoe khoang', 'Cẩn thận, chuẩn bị tốt trước khi làm', 'Làm liều', 'Bỏ cuộc'], 1, 'Cẩn thận và chuẩn bị kĩ.'),
  ]),

  M(29, 'Mở rộng vốn từ: Thể thao · Dấu hai chấm', [
    Q('Môn thể thao nào dưới đây?', ['Đọc sách', 'Nấu cơm', 'Học toán', 'Bóng đá, bơi lội, cầu lông'], 3, 'Các môn thể thao.'),
    Q('Người chơi bóng đá gọi là?', ['Cầu thủ', 'Bác sĩ', 'Diễn viên', 'Hoạ sĩ'], 0, 'Cầu thủ = người chơi bóng đá.'),
    Q('Dấu hai chấm (:) thường dùng để?', ['Báo trước lời nói/liệt kê', 'Cảm thán', 'Kết thúc câu', 'Báo hiệu câu hỏi'], 0, 'Dấu : báo hiệu lời nói, lời giải thích hoặc liệt kê.'),
    Q('Dùng đúng dấu: "Mẹ nói ___ Con phải ngoan."', ['? (báo hiệu câu hỏi)', '.', ',', ':'], 3, 'Sau "nói" + lời nói trực tiếp → dùng :.'),
    Q('Dùng đúng dấu: "Trong cặp có ___ sách, vở, bút."', ['.', ':', '? (báo hiệu câu hỏi)', '; (ngăn các vế dài)'], 1, 'Trước liệt kê → dùng :.'),
    Q('Tập thể thao giúp em?', ['Khoẻ mạnh, nhanh nhẹn', 'Buồn ngủ', 'Ốm yếu', 'Mệt mỏi suốt cả ngày'], 0, 'Tập thể thao giúp cơ thể khoẻ mạnh.'),
  ]),

  M(30, 'Tập đọc: "Bác sĩ Y-éc-xanh"', [
    Q('Bác sĩ Y-éc-xanh là người nước nào?', ['Người Nhật', 'Người Mỹ', 'Người Anh', 'Người Pháp gắn bó với Việt Nam'], 3, 'Y-éc-xanh — bác sĩ Pháp, sống và làm việc ở Nha Trang.'),
    Q('Ông đến Việt Nam để?', ['Du lịch', 'Đánh cá', 'Nghiên cứu khoa học, chữa bệnh', 'Buôn bán'], 2, 'Nghiên cứu vắc-xin và chữa bệnh cho người Việt.'),
    Q('Đức tính của bác sĩ?', ['Lười nhác', 'Tham lam', 'Nhân hậu, yêu thương con người', 'Ích kỷ'], 2, 'Tận tâm vì người bệnh.'),
    Q('Bài học từ tấm gương ông?', ['Coi nhẹ y học', 'Chỉ giúp người cùng nước', 'Yêu thương con người không phân biệt quốc tịch', 'Bỏ nghề'], 2, 'Tình yêu thương vượt biên giới.'),
    Q('Y-éc-xanh sống nhiều năm ở?', ['Cần Thơ', 'Nha Trang (Khánh Hoà)', 'Đà Lạt', 'Hà Nội'], 1, 'Ông sống và làm việc ở Nha Trang.'),
    Q('Em học được gì từ ông?', ['Sống cho riêng mình', 'Trốn việc', 'Lười học', 'Sống có ích, yêu thương mọi người'], 3, 'Sống có ích cho cộng đồng.'),
  ]),

  M(31, 'Viết thư · Viết thư cảm ơn', [
    Q('Một bức thư thường có?', ['Chỉ tên người gửi', 'Chỉ nội dung', 'Đầu thư, nội dung, cuối thư', 'Chỉ ngày tháng'], 2, 'Đầu thư (ngày tháng, lời chào) — nội dung — kết (lời chúc, kí tên).'),
    Q('Phần đầu thư có?', ['Chữ kí', 'Địa điểm, ngày tháng, lời chào người nhận', 'Bài thơ', 'Lời chúc'], 1, 'Đầu thư: ngày tháng + lời chào.'),
    Q('Lời chào đầu thư cho bạn?', ['"Kính gửi…"', '"Bạn… thân mến!"', '"Tạm biệt!"', '"Trân trọng,"'], 1, 'Bạn bè dùng "Thân mến!".'),
    Q('Lời chào đầu thư cho ông bà, thầy cô?', ['"Chào bạn"', '"Mày nhé"', '"Cậu ơi"', '"Kính gửi…"'], 3, 'Người trên dùng "Kính gửi…".'),
    Q('Cuối thư cần?', ['Tên cha mẹ', 'Để trống', 'Lời chúc + chữ kí', 'Số điện thoại'], 2, 'Cuối thư có lời chúc và kí tên.'),
    Q('Viết thư cảm ơn gửi ai?', ['Người đã giúp đỡ mình', 'Người lạ', 'Người chưa quen', 'Không ai'], 0, 'Thư cảm ơn gửi người đã giúp đỡ.'),
  ]),

  M(32, 'Tập đọc: "Người đi săn và con vượn"', [
    Q('"Người đi săn và con vượn" có nội dung?', ['Cuộc thi săn bắn', 'Đua xe', 'Đi câu cá', 'Bài học bảo vệ động vật, tình mẫu tử'], 3, 'Vượn mẹ hi sinh vì con → người thợ săn từ bỏ nghề.'),
    Q('Vượn mẹ làm gì trước khi chết?', ['Trốn vào hốc cây sâu', 'Cho con bú lần cuối', 'Bỏ con đi', 'Tấn công người'], 1, 'Vượn mẹ vẫn cho con bú dù trúng tên.'),
    Q('Người đi săn sau đó?', ['Tiếp tục săn', 'Mang vượn con về nuôi', 'Hối hận, bỏ nghề săn', 'Bỏ con vượn'], 2, 'Người đi săn hối hận, bẻ gãy nỏ.'),
    Q('Bài học từ truyện?', ['Tham lam', 'Săn bắn nhiều', 'Lạnh lùng', 'Bảo vệ động vật, không tàn sát'], 3, 'Yêu thương và bảo vệ động vật.'),
    Q('Tình cảm vượn mẹ thể hiện?', ['Sự sợ hãi', 'Tình mẫu tử thiêng liêng', 'Sự thờ ơ', 'Sự ích kỷ'], 1, 'Tình mẹ con thiêng liêng cả ở loài vật.'),
    Q('Em làm gì để bảo vệ động vật?', ['Bẫy chim', 'Không săn bắt, không mua sản phẩm từ động vật quý', 'Đốt rừng', 'Đánh chó'], 1, 'Bảo vệ động vật qua hành động.'),
  ]),

  M(33, 'Mở rộng vốn từ: Thiên nhiên · Viết quảng cáo ngắn', [
    Q('Từ chỉ THIÊN NHIÊN?', ['điện thoại', 'núi, sông, biển, rừng', 'máy tính', 'ô tô du lịch'], 1, 'Núi sông biển rừng — yếu tố thiên nhiên.'),
    Q('Thiên nhiên cho ta?', ['Tiền bạc', 'Điện thoại', 'Đồ chơi', 'Không khí, nước, lương thực'], 3, 'Thiên nhiên cho ta sự sống.'),
    Q('Em làm gì để bảo vệ thiên nhiên?', ['Không xả rác, trồng cây', 'Chặt cây', 'Vứt rác', 'Đốt rừng'], 0, 'Bảo vệ thiên nhiên qua hành động.'),
    Q('Quảng cáo (ngắn) nhằm?', ['Đi du lịch', 'Giới thiệu sản phẩm/sự kiện cho mọi người biết', 'Nấu ăn', 'Học bài'], 1, 'Quảng cáo = giới thiệu để mọi người chú ý.'),
    Q('Quảng cáo tốt cần?', ['Dài dòng', 'Sai sự thật', 'Ngắn gọn, hấp dẫn, đúng sự thật', 'Lẫn lộn'], 2, 'Ngắn, hấp dẫn, trung thực.'),
    Q('"Rừng vàng biển bạc" ý nói?', ['Biển có bạc', 'Không có gì', 'Thiên nhiên Việt Nam giàu có', 'Rừng có vàng'], 2, 'Câu thành ngữ ca ngợi sự giàu có của thiên nhiên VN.'),
  ]),

  M(34, 'Tập đọc: "Mặt trời xanh của tôi"', [
    Q('"Mặt trời xanh của tôi" là cách nói chỉ?', ['Quả bóng', 'Lá cây bàng', 'Tán lá cọ xoè rộng như mặt trời xanh', 'Mặt trời thật'], 2, 'Hình ảnh tán cọ được ví như mặt trời màu xanh.'),
    Q('Tác giả bài thơ?', ['Định Hải', 'Phạm Tiến Duật', 'Nguyễn Viết Bình', 'Trần Đăng Khoa'], 2, 'Bài thơ của Nguyễn Viết Bình.'),
    Q('Cảm xúc trong bài thơ?', ['Tức giận', 'Yêu thiên nhiên, yêu quê hương', 'Cô đơn, lạc lõng', 'Sợ hãi'], 1, 'Tình yêu thiên nhiên và quê.'),
    Q('"Mặt trời xanh" là phép?', ['Liệt kê', 'Lặp', 'So sánh – ẩn dụ', 'Đối lập'], 2, 'Ẩn dụ: lá cọ ≈ mặt trời nhưng màu xanh.'),
    Q('Bài thơ giúp em?', ['Chán ghét cảnh vật quê hương', 'Bỏ qua thiên nhiên', 'Sợ thiên nhiên', 'Yêu thiên nhiên, biết quan sát'], 3, 'Yêu và biết ngắm nhìn thiên nhiên.'),
    Q('Cây cọ thường mọc nhiều ở vùng?', ['Trung du Bắc Bộ (Phú Thọ)', 'Vùng ven biển miền Trung', 'Cực Bắc', 'Sa mạc'], 0, 'Cọ là cây đặc trưng vùng trung du.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Câu "Lan đang quét nhà." thuộc kiểu?', ['Ai làm gì?', 'Ai là gì?', 'Cảm thán', 'Ai thế nào?'], 0, '"Quét nhà" là hoạt động.'),
    Q('Câu "Mặt biển xanh như tấm thảm." có phép gì?', ['Lặp lại', 'So sánh', 'Đối lập', 'Liệt kê'], 1, 'Có "như" → so sánh.'),
    Q('Dấu hai chấm thường dùng?', ['Báo trước lời nói / liệt kê', 'Tạm dừng nhẹ', 'Cảm thán', 'Kết thúc câu hỏi'], 0, 'Dấu : báo hiệu lời nói hoặc liệt kê.'),
    Q('Từ "yêu thương" là từ chỉ?', ['Địa điểm', 'Trạng thái / tình cảm', 'Sự vật', 'Số đếm'], 1, '"Yêu thương" là tình cảm/trạng thái.'),
    Q('Đoạn văn 3–5 câu kể về một việc tốt em đã làm cần?', ['Viết hoa toàn bộ', 'Có mở – thân – kết, dùng dấu câu đúng', 'Không cần chấm phẩy', 'Chỉ 1 câu'], 1, 'Yêu cầu đoạn văn ngắn lớp 3.'),
    Q('Câu "Ôi, quê hương em đẹp quá!" là?', ['Câu hỏi', 'Câu khiến', 'Câu cảm thán', 'Câu kể'], 2, 'Có "Ôi" + dấu ! → câu cảm.'),
  ]),
];

export const P3TV_SCENARIOS = indexBy(P3TV_WEEKS);
