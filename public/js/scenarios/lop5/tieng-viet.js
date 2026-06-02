// ============================================================
// Lớp 5 · TIẾNG VIỆT — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK GDPT 2018.
// ID prefix: "P5TV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5TV', 'tieng-viet', n, title, qs, opts);

export const P5TV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập từ loại — Danh từ, động từ, tính từ', [
    Q('Từ nào là DANH TỪ?', ['chạy', 'bàn', 'đẹp', 'nhanh'], 1, 'Danh từ chỉ sự vật: bàn.'),
    Q('Từ nào là ĐỘNG TỪ?', ['cây', 'đỏ', 'học', 'cao'], 2, 'Động từ chỉ hoạt động: học.'),
    Q('Từ nào là TÍNH TỪ?', ['mưa', 'ngủ', 'xanh', 'sách'], 2, 'Tính từ chỉ tính chất: xanh.'),
    Q('"Bạn Lan rất chăm chỉ" — từ "chăm chỉ" là?', ['Danh từ', 'Động từ', 'Tính từ', 'Đại từ'], 2, 'Chăm chỉ chỉ tính chất.'),
    Q('Danh từ riêng trong câu sau: "Tôi sinh ở Hà Nội." là?', ['Tôi', 'sinh', 'Hà Nội', 'ở'], 2, 'Hà Nội là danh từ riêng (viết hoa).'),
    Q('"Mặt trời mọc trên biển" — từ nào là động từ?', ['Mặt trời', 'mọc', 'trên', 'biển'], 1, 'Mọc là hoạt động.'),
  ]),

  M(2, 'Đại từ', [
    Q('Đại từ là từ?', ['Chỉ sự vật cụ thể', 'Dùng để xưng hô hoặc thay thế', 'Chỉ hoạt động', 'Chỉ tính chất'], 1, 'Đại từ dùng xưng hô (tôi, bạn) hoặc thay thế (nó, đó).'),
    Q('Đại từ trong câu "Em đi học" là?', ['Em', 'đi', 'học', 'không có'], 0, '"Em" là đại từ xưng hô ngôi thứ nhất.'),
    Q('"Lan học giỏi. Bạn ấy được khen." — "Bạn ấy" thay cho?', ['Học', 'Lan', 'Được khen', 'Giỏi'], 1, '"Bạn ấy" = Lan.'),
    Q('Đại từ ngôi thứ ba số ít?', ['Tôi', 'Chúng ta', 'Nó / Anh ấy', 'Các bạn'], 2, 'Nó, anh ấy, cô ấy là ngôi 3 số ít.'),
    Q('"Chúng tôi" là đại từ ngôi?', ['1 số ít', '1 số nhiều', '2 số nhiều', '3 số nhiều'], 1, 'Người nói + người cùng phía, không bao gồm người nghe.'),
    Q('Câu nào dùng đại từ?', ['Hoa rất đẹp.', 'Em yêu mẹ em.', 'Lá rơi.', 'Trời mưa.'], 1, '"Em" — đại từ.'),
  ]),

  M(3, 'Quan hệ từ', [
    Q('Quan hệ từ là từ?', ['Chỉ sự vật', 'Nối các từ, câu, đoạn để chỉ quan hệ', 'Chỉ tính chất', 'Chỉ hoạt động'], 1, 'Quan hệ từ: và, nhưng, vì, nên, của, ở…'),
    Q('Trong câu "Sách của em mới." — "của" là?', ['Danh từ', 'Quan hệ từ', 'Đại từ', 'Tính từ'], 1, '"Của" nối sở hữu.'),
    Q('Cặp quan hệ từ chỉ NGUYÊN NHÂN — KẾT QUẢ?', ['Tuy… nhưng…', 'Nếu… thì…', 'Vì… nên…', 'Không những… mà còn…'], 2, 'Vì… nên… diễn tả nguyên nhân — kết quả.'),
    Q('Cặp quan hệ từ chỉ TƯƠNG PHẢN?', ['Vì… nên…', 'Tuy… nhưng…', 'Nếu… thì…', 'Càng… càng…'], 1, 'Tuy… nhưng… diễn tả ý trái ngược.'),
    Q('Cặp quan hệ từ chỉ ĐIỀU KIỆN — KẾT QUẢ?', ['Vì… nên…', 'Tuy… nhưng…', 'Nếu… thì…', 'Không những… mà còn…'], 2, 'Nếu… thì… diễn tả điều kiện — kết quả.'),
    Q('"Em chăm học nên kết quả tốt." — "nên" chỉ quan hệ?', ['Tương phản', 'Nguyên nhân — kết quả', 'Điều kiện', 'Lựa chọn'], 1, '"Chăm học" là nguyên nhân, "kết quả tốt" là hệ quả.'),
  ]),

  M(4, 'Câu ghép', [
    Q('Câu ghép là câu?', ['Có 1 vế', 'Có từ 2 vế trở lên, mỗi vế có C-V', 'Không có CN', 'Không có VN'], 1, 'Câu ghép có ≥ 2 cụm C-V.'),
    Q('"Mẹ nấu cơm, em quét nhà." là câu?', ['Đơn', 'Ghép', 'Cảm thán', 'Cầu khiến'], 1, '2 cụm C-V → câu ghép.'),
    Q('Vế trong câu ghép thường nối nhau bằng?', ['Quan hệ từ', 'Dấu phẩy', 'Cả A và B đều đúng', 'Chỉ dấu chấm'], 2, 'Có thể nối bằng quan hệ từ hoặc dấu câu (,;).'),
    Q('"Trời mưa nên đường ướt." — cách nối là?', ['Dấu phẩy', 'Quan hệ từ', 'Không nối gì', 'Chấm than'], 1, '"Nên" là quan hệ từ.'),
    Q('Số vế tối thiểu của câu ghép?', ['1', '2', '3', '4'], 1, 'Câu ghép có ít nhất 2 vế.'),
    Q('Câu nào KHÔNG phải câu ghép?', ['Mẹ đi chợ, em ở nhà.', 'Lan và Hoa cùng học.', 'Nếu trời mưa thì em ở nhà.', 'Tuy mệt nhưng em vẫn làm bài.'], 1, '"Lan và Hoa cùng học" chỉ 1 cụm C-V.'),
  ]),

  M(5, 'Câu ghép — cách nối các vế (1)', [
    Q('Vế câu nối với nhau bằng quan hệ từ nào tạo quan hệ NGUYÊN NHÂN?', ['Vì, do, bởi vì', 'Nếu, hễ', 'Tuy, mặc dù', 'Hay, hoặc'], 0, 'Vì / do / bởi vì → nguyên nhân.'),
    Q('Điền: "_____ trời mưa _____ em mặc áo mưa."', ['Vì… nên…', 'Nếu… thì…', 'Tuy… nhưng…', 'Càng… càng…'], 0, 'Nguyên nhân — kết quả.'),
    Q('Điền: "_____ em chăm học _____ em sẽ giỏi."', ['Vì… nên…', 'Nếu… thì…', 'Tuy… nhưng…', 'Hễ… thì…'], 1, 'Điều kiện — kết quả.'),
    Q('Điền: "_____ trời mưa to _____ chúng em vẫn đến lớp."', ['Vì… nên…', 'Tuy… nhưng…', 'Nếu… thì…', 'Không những… mà còn…'], 1, 'Tương phản.'),
    Q('"Bạn Lan vừa học giỏi vừa hát hay." — cặp quan hệ từ là?', ['Vừa… vừa…', 'Tuy… nhưng…', 'Vì… nên…', 'Hễ… thì…'], 0, 'Vừa… vừa… → tăng tiến.'),
    Q('"Càng học, em càng thấy thú vị." — chỉ quan hệ?', ['Tương phản', 'Tăng tiến / tăng cường', 'Nguyên nhân', 'Lựa chọn'], 1, 'Càng… càng… → tăng tiến.'),
  ]),

  M(6, 'Câu ghép — cách nối các vế (2)', [
    Q('Câu ghép có thể nối bằng dấu nào?', ['Dấu phẩy', 'Dấu chấm phẩy', 'Dấu hai chấm', 'Cả 3 đáp án'], 3, 'Tất cả đều có thể dùng để nối các vế.'),
    Q('"Trời tối; em bật đèn." vế nối bằng?', ['Dấu phẩy', 'Dấu chấm phẩy', 'Quan hệ từ', 'Không nối'], 1, 'Dấu ; nối 2 vế độc lập.'),
    Q('"Hoặc em làm, hoặc anh làm." — chỉ quan hệ?', ['Lựa chọn', 'Tương phản', 'Nguyên nhân', 'Tăng tiến'], 0, 'Hoặc… hoặc… → lựa chọn.'),
    Q('Cặp quan hệ từ TĂNG TIẾN?', ['Không những… mà còn…', 'Vì… nên…', 'Hoặc… hoặc…', 'Nếu… thì…'], 0, 'Không những… mà còn… → tăng tiến.'),
    Q('"Mai đến lớp, Lan đã ở đó." cách nối?', ['Dấu phẩy', 'Quan hệ từ', 'Hai chấm', 'Không nối'], 0, '2 vế nối bằng dấu phẩy.'),
    Q('Vế độc lập trong câu ghép có thể đứng?', ['Chỉ trước', 'Chỉ sau', 'Trước hoặc sau', 'Không đứng được'], 2, 'Vế có thể đảo vị trí khi không thay đổi nghĩa.'),
  ]),

  M(7, 'Liên kết câu — phép lặp, phép thế', [
    Q('Phép LẶP là dùng?', ['Từ trái nghĩa', 'Lặp lại từ ngữ đã dùng', 'Đại từ thay thế', 'Quan hệ từ'], 1, 'Phép lặp giữ nguyên 1 từ ở các câu để liên kết.'),
    Q('Phép THẾ là dùng?', ['Lặp từ', 'Từ ngữ khác thay cho từ ở câu trước', 'Quan hệ từ', 'Dấu câu'], 1, 'Phép thế dùng đại từ / từ đồng nghĩa thay cho từ trước.'),
    Q('"Bố em là bác sĩ. Ông luôn tận tâm." — "Ông" thay cho?', ['Em', 'Bố', 'Bác sĩ', 'Tận tâm'], 1, '"Ông" = bố.'),
    Q('"Cây phượng nở hoa. Hoa phượng đỏ rực." — phép liên kết?', ['Phép lặp', 'Phép thế', 'Phép nối', 'Phép đồng nghĩa'], 0, 'Lặp từ "phượng/hoa".'),
    Q('Đại từ thay thế làm cho câu văn?', ['Lặp lại nhiều', 'Tránh lặp, gọn hơn', 'Dài hơn', 'Khó hiểu'], 1, 'Đại từ thay thế giúp tránh lặp.'),
    Q('"Hôm qua trời mưa to. Trận mưa kéo dài cả ngày." — câu 2 dùng phép?', ['Lặp + đồng nghĩa', 'Đối lập', 'Nối', 'Tương phản'], 0, 'Mưa được lặp/đồng nghĩa (trận mưa).'),
  ]),

  M(8, 'Liên kết câu — phép nối', [
    Q('Phép NỐI dùng?', ['Quan hệ từ / từ nối', 'Đại từ', 'Lặp từ', 'Dấu phẩy'], 0, 'Phép nối dùng các từ "vì, nên, nhưng, do đó…" để liên kết.'),
    Q('"Trời rất nóng. Vì vậy, ai cũng mệt." — phép?', ['Lặp', 'Thế', 'Nối', 'Tương phản'], 2, '"Vì vậy" là từ nối.'),
    Q('Từ nào dùng cho phép nối?', ['Của', 'Nó', 'Tuy nhiên', 'Bàn'], 2, '"Tuy nhiên" là từ nối.'),
    Q('"Em rất chăm học. Tuy nhiên, kết quả chưa cao." — quan hệ?', ['Nguyên nhân', 'Tương phản', 'Điều kiện', 'Tăng tiến'], 1, 'Tuy nhiên → trái ngược.'),
    Q('Câu thứ hai bắt đầu bằng "Do đó" có vai trò?', ['Kết quả', 'Nguyên nhân', 'So sánh', 'Cảm thán'], 0, '"Do đó" dẫn ra kết quả.'),
    Q('Phép nối thường đặt ở?', ['Cuối câu', 'Đầu câu sau', 'Giữa từ', 'Trong dấu ngoặc'], 1, 'Phép nối thường đứng đầu câu sau.'),
  ]),

  M(9, 'Văn tả người (1)', [
    Q('Bài văn tả người có bố cục mấy phần?', ['1', '2', '3', '4'], 2, 'Mở bài – thân bài – kết bài.'),
    Q('Phần mở bài tả người nên?', ['Tả luôn ngoại hình', 'Giới thiệu người được tả', 'Kể kết quả', 'Nêu câu hỏi'], 1, 'Mở bài giới thiệu chung.'),
    Q('Thân bài tả người gồm?', ['Chỉ tả ngoại hình', 'Tả ngoại hình + hoạt động/tính tình', 'Chỉ tả tính tình', 'Kể chuyện'], 1, 'Tả ngoại hình + hoạt động/tính cách.'),
    Q('Tả ngoại hình gồm chi tiết nào?', ['Khuôn mặt, mái tóc, dáng người', 'Quê quán', 'Số điện thoại', 'Tuổi của ông bà'], 0, 'Ngoại hình: dáng, mặt, tóc, ánh mắt…'),
    Q('Kết bài tả người nên?', ['Nêu cảm nghĩ về người được tả', 'Tả thêm chi tiết', 'Kể câu chuyện khác', 'Hỏi lại người đọc'], 0, 'Kết bài nêu cảm nghĩ.'),
    Q('Khi tả nên chọn?', ['Mọi chi tiết', 'Chi tiết nổi bật, tiêu biểu', 'Chi tiết bí mật', 'Chi tiết tiêu cực'], 1, 'Chọn chi tiết tiêu biểu nhất.'),
  ]),

  M(10, 'Văn tả cảnh', [
    Q('Tả cảnh là?', ['Kể chuyện', 'Vẽ lại bằng lời cảnh vật quan sát được', 'Bày tỏ ý kiến', 'Viết thư'], 1, 'Tả cảnh = mô tả bằng lời.'),
    Q('Bố cục bài tả cảnh?', ['Mở – thân – kết', 'Đầu – cuối', 'Chỉ thân bài', 'Chỉ kết bài'], 0, '3 phần như bài văn miêu tả.'),
    Q('Trình tự tả cảnh KHÔNG bao gồm?', ['Theo thời gian', 'Theo không gian (xa – gần)', 'Theo trình tự bảng chữ cái', 'Theo trọng tâm'], 2, 'Không có "trình tự bảng chữ cái".'),
    Q('Khi tả cảnh, nên dùng giác quan nào?', ['Chỉ thị giác', 'Chỉ thính giác', 'Nhiều giác quan: nhìn, nghe, ngửi, sờ', 'Không dùng giác quan'], 2, 'Dùng nhiều giác quan để miêu tả sinh động.'),
    Q('Câu "Tiếng chim hót líu lo trong vòm lá." dùng giác quan?', ['Thị giác', 'Thính giác', 'Khứu giác', 'Xúc giác'], 1, '"Tiếng" → thính giác.'),
    Q('Bài tả cảnh tốt cần?', ['Sao chép từ sách', 'Quan sát thực tế và có cảm xúc', 'Liệt kê khô khan', 'Toàn từ ngữ khó'], 1, 'Quan sát + cảm xúc → bài hay.'),
  ]),

  M(11, 'Văn tả con vật', [
    Q('Tả con vật thường tả?', ['Ngoại hình + hoạt động/thói quen', 'Chỉ giá tiền', 'Chỉ trọng lượng', 'Chỉ tên'], 0, 'Ngoại hình + thói quen / hoạt động.'),
    Q('Khi tả con mèo, chi tiết KHÔNG phù hợp?', ['Bộ lông mềm', 'Đôi mắt sáng', 'Mức lương', 'Tiếng kêu meo meo'], 2, '"Mức lương" — không phù hợp với mèo.'),
    Q('Mở bài tả con vật cần?', ['Giới thiệu con vật được tả', 'Kết quả', 'Bài học', 'Số đo'], 0, 'Giới thiệu tên / nguồn gốc / hoàn cảnh có con vật.'),
    Q('"Chú mèo có bộ lông mượt như nhung." dùng biện pháp?', ['So sánh', 'Nhân hoá', 'Ẩn dụ', 'Hoán dụ'], 0, '"Như nhung" → so sánh.'),
    Q('"Chú chó vẫy đuôi mừng tôi như đứa em vui mừng đón anh." dùng biện pháp?', ['So sánh + nhân hoá', 'Ẩn dụ', 'Điệp từ', 'Hoán dụ'], 0, 'Vừa so sánh vừa nhân hoá.'),
    Q('Kết bài tả con vật cần?', ['Nêu tình cảm với con vật', 'Bán lại con vật', 'Hỏi giá', 'Quên đi'], 0, 'Kết bài nêu cảm xúc, tình cảm.'),
  ]),

  M(12, 'Văn tả đồ vật', [
    Q('Tả đồ vật là?', ['Mô tả lại đặc điểm đồ vật cụ thể', 'Kể chuyện', 'Bài thơ', 'Viết thư'], 0, 'Tả lại đồ vật mình quan sát.'),
    Q('Khi tả chiếc cặp sách nên tả?', ['Hình dáng, màu sắc, công dụng', 'Ngày sinh', 'Quê quán', 'Học lực'], 0, 'Hình dáng – màu – chất liệu – công dụng.'),
    Q('Câu mở bài hay dùng cho tả đồ vật?', ['Đó là món quà…', 'Tôi không thích…', 'Tôi không có…', 'Tôi không biết…'], 0, 'Mở bài giới thiệu nguồn gốc, hoàn cảnh có đồ vật.'),
    Q('"Chiếc bút máy của tôi tựa người bạn nhỏ." dùng biện pháp?', ['So sánh + nhân hoá', 'Ẩn dụ', 'Điệp ngữ', 'Hoán dụ'], 0, 'Vừa so sánh vừa nhân hoá.'),
    Q('Khi tả nên dùng từ ngữ?', ['Trừu tượng khó hiểu', 'Cụ thể, sinh động, gợi tả', 'Toàn tiếng nước ngoài', 'Toàn từ khoa học'], 1, 'Cụ thể, gợi tả.'),
    Q('Kết bài tả đồ vật nên?', ['Nêu tình cảm, ý nghĩa', 'Bán đồ vật', 'Vứt đi', 'Quên đi'], 0, 'Nêu tình cảm, sự gắn bó.'),
  ]),

  M(13, 'Dấu câu — ngoặc đơn, hai chấm', [
    Q('Dấu ngoặc đơn ( ) dùng để?', ['Ngắt câu', 'Đánh dấu phần giải thích, chú thích thêm', 'Hỏi', 'Cảm thán'], 1, 'Ngoặc đơn → chú thích thêm.'),
    Q('"Bác Hồ (1890–1969) là vị lãnh tụ vĩ đại." — ngoặc đơn dùng để?', ['Hỏi', 'Chú thích năm sinh – mất', 'Liệt kê', 'Cảm thán'], 1, 'Năm sinh, năm mất.'),
    Q('Dấu HAI CHẤM (:) thường dùng để?', ['Báo trước phần liệt kê hoặc lời thoại', 'Chỉ kết thúc câu', 'Chỉ câu hỏi', 'Chỉ câu cảm'], 0, 'Báo trước liệt kê hoặc lời nói trực tiếp.'),
    Q('Câu nào dùng đúng dấu hai chấm?', ['Lan nói: "Em sẽ cố gắng."', 'Lan nói. "Em sẽ cố gắng."', 'Lan nói? "Em sẽ cố gắng."', 'Lan nói! "Em sẽ cố gắng."'], 0, 'Hai chấm trước lời thoại.'),
    Q('"Trong vườn có nhiều loại hoa: hồng, cúc, lan." — dấu hai chấm?', ['Đặt câu hỏi', 'Báo trước liệt kê', 'Cảm thán', 'Chú thích'], 1, 'Liệt kê các loại hoa.'),
    Q('Cuối câu hỏi dùng dấu gì?', ['.', '!', '?', ','], 2, 'Câu hỏi dùng dấu chấm hỏi.'),
  ]),

  M(14, 'Dấu chấm than — câu cảm — câu cầu khiến', [
    Q('Cuối câu cảm thán dùng dấu gì?', ['.', '!', '?', ','], 1, 'Câu cảm dùng dấu chấm than.'),
    Q('Câu nào là câu cảm?', ['Em đi học.', 'Em có đi học không?', 'Ôi, bông hoa đẹp quá!', 'Hãy đi học.'], 2, 'Câu cảm có từ "ôi, quá, biết bao…" và dấu !'),
    Q('Câu cầu khiến dùng từ?', ['Hãy, đừng, chớ, nên', 'Bao giờ, ở đâu', 'Sao, vì sao', 'Ôi, ô, a'], 0, 'Hãy / đừng / nên → cầu khiến.'),
    Q('Câu "Hãy giữ gìn sách vở." là?', ['Cảm thán', 'Cầu khiến', 'Trần thuật', 'Nghi vấn'], 1, '"Hãy" → cầu khiến.'),
    Q('Câu "Đừng nói chuyện trong giờ học!" là?', ['Cảm thán', 'Cầu khiến', 'Trần thuật', 'Nghi vấn'], 1, '"Đừng" → cầu khiến.'),
    Q('Câu "Trời ơi, đẹp quá!" thuộc kiểu?', ['Cảm thán', 'Cầu khiến', 'Nghi vấn', 'Kể'], 0, '"Trời ơi… quá!" → cảm.'),
  ]),

  M(15, 'Văn kể chuyện đã chứng kiến', [
    Q('Kể chuyện đã chứng kiến là?', ['Tưởng tượng', 'Kể lại 1 sự việc mình từng thấy', 'Đọc lại sách', 'Vẽ tranh'], 1, 'Kể chuyện thật mình đã chứng kiến.'),
    Q('Mở bài kể chuyện cần?', ['Giới thiệu hoàn cảnh', 'Kể luôn cao trào', 'Nêu kết quả', 'Liệt kê'], 0, 'Mở bài giới thiệu hoàn cảnh, thời gian, địa điểm.'),
    Q('Thân bài kể chuyện nên kể theo?', ['Trình tự ngược', 'Trình tự thời gian', 'Trình tự bảng chữ cái', 'Không trình tự'], 1, 'Kể theo trình tự thời gian, diễn biến.'),
    Q('Khi kể nên?', ['Chỉ kể vắn tắt', 'Có chi tiết tiêu biểu, có cảm xúc', 'Liệt kê khô', 'Toàn dấu câu'], 1, 'Chi tiết tiêu biểu + cảm xúc → câu chuyện sinh động.'),
    Q('Ngôi kể thông dụng?', ['Ngôi 1 (tôi/em)', 'Ngôi 2', 'Ngôi 4', 'Không có ngôi'], 0, 'Người chứng kiến kể ở ngôi 1.'),
    Q('Kết bài nên?', ['Nêu suy nghĩ, bài học', 'Đột ngột bỏ', 'Liệt kê người', 'Chú thích'], 0, 'Kết bài rút ra suy nghĩ, ý nghĩa.'),
  ]),

  M(16, 'Viết đoạn miêu tả', [
    Q('Đoạn văn miêu tả thường có?', ['Câu chủ đề + câu triển khai', 'Chỉ 1 câu', 'Chỉ liệt kê', 'Không cấu trúc'], 0, 'Đoạn văn có câu chủ đề + câu triển khai.'),
    Q('Câu chủ đề trong đoạn tả thường?', ['Nêu ý chung của đoạn', 'Kể chuyện khác', 'Nêu lời thoại', 'Hỏi'], 0, 'Câu chủ đề nêu ý chính của đoạn.'),
    Q('Khi viết đoạn tả nên dùng?', ['Nhiều câu cảm thán', 'Hình ảnh so sánh, nhân hoá', 'Toàn dấu hỏi', 'Chỉ tính từ'], 1, 'Biện pháp tu từ làm câu văn sinh động.'),
    Q('Câu "Bầu trời như tấm thảm xanh." dùng biện pháp?', ['So sánh', 'Nhân hoá', 'Ẩn dụ', 'Hoán dụ'], 0, 'Dùng "như" → so sánh.'),
    Q('Câu "Cây bàng đang ngái ngủ." dùng biện pháp?', ['So sánh', 'Nhân hoá', 'Liệt kê', 'Điệp ngữ'], 1, 'Gán hành động người cho cây → nhân hoá.'),
    Q('Đoạn miêu tả cần?', ['Trình tự rõ ràng', 'Lộn xộn', 'Liệt kê tự do', 'Không cần liên kết'], 0, 'Sắp xếp theo trình tự nhất định.'),
  ]),

  M(17, 'Tập đọc — Bác Hồ', [
    Q('Bác Hồ sinh ngày nào?', ['19/5/1890', '5/9/1945', '2/9/1969', '30/4/1975'], 0, 'Bác Hồ sinh 19/5/1890.'),
    Q('Quê Bác Hồ ở đâu?', ['Hà Nội', 'Nghệ An', 'Huế', 'Sài Gòn'], 1, 'Quê Bác ở Nghệ An (Kim Liên).'),
    Q('Tên thật của Bác Hồ là?', ['Nguyễn Sinh Cung', 'Nguyễn Ái Quốc', 'Hồ Chí Minh', 'Cả 3 đáp án'], 3, 'Đều là tên của Bác qua các thời kỳ.'),
    Q('Bác Hồ ra đi tìm đường cứu nước năm?', ['1911', '1930', '1945', '1969'], 0, 'Ngày 5/6/1911 từ bến cảng Nhà Rồng.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ở đâu?', ['Hà Nội', 'Huế', 'Sài Gòn', 'Nghệ An'], 0, 'Tại Quảng trường Ba Đình, Hà Nội.'),
    Q('5 điều Bác Hồ dạy thiếu nhi nhằm?', ['Hướng dẫn cách học, làm việc, sống tốt', 'Dạy nấu ăn', 'Dạy thể thao', 'Dạy võ'], 0, '5 điều Bác Hồ dạy hướng đến phẩm chất thiếu nhi.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Đại từ "chúng tôi" thuộc ngôi?', ['1 số nhiều', '2 số nhiều', '3 số nhiều', '1 số ít'], 0, 'Ngôi 1 số nhiều, loại trừ người nghe.'),
    Q('"Vì… nên…" là cặp quan hệ từ chỉ?', ['Tương phản', 'Điều kiện', 'Nguyên nhân – kết quả', 'Lựa chọn'], 2, 'Vì… nên… → nguyên nhân – kết quả.'),
    Q('Câu "Mẹ đi chợ, bố đi làm." là?', ['Câu đơn', 'Câu ghép', 'Câu hỏi', 'Câu cảm'], 1, '2 vế C-V → câu ghép.'),
    Q('Dấu ngoặc đơn dùng để?', ['Ngắt câu', 'Chú thích', 'Liệt kê', 'Cảm thán'], 1, 'Ngoặc đơn → chú thích.'),
    Q('Câu cảm thán kết thúc bằng dấu?', ['.', '?', '!', ','], 2, 'Câu cảm dùng dấu chấm than.'),
    Q('"Bầu trời như tấm thảm." dùng?', ['Nhân hoá', 'So sánh', 'Ẩn dụ', 'Điệp ngữ'], 1, '"Như" → so sánh.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Tập đọc — Trần Hưng Đạo', [
    Q('Trần Hưng Đạo là tướng thời?', ['Lý', 'Trần', 'Lê', 'Nguyễn'], 1, 'Trần Hưng Đạo (Trần Quốc Tuấn) — nhà Trần.'),
    Q('Trần Hưng Đạo nổi tiếng vì?', ['Đánh thắng quân Nguyên – Mông', 'Lập triều Lý', 'Cải cách giáo dục', 'Mở đất phương Nam'], 0, '3 lần đánh thắng quân Nguyên – Mông.'),
    Q('Tác phẩm nổi tiếng của Trần Hưng Đạo?', ['Bình Ngô đại cáo', 'Hịch tướng sĩ', 'Nam quốc sơn hà', 'Truyện Kiều'], 1, '"Hịch tướng sĩ" — Trần Hưng Đạo.'),
    Q('Trận đánh quyết định trên sông?', ['Bạch Đằng (1288)', 'Như Nguyệt', 'Đống Đa', 'Rạch Gầm – Xoài Mút'], 0, 'Chiến thắng Bạch Đằng 1288.'),
    Q('Trần Hưng Đạo được tôn xưng là?', ['Đức Thánh Trần', 'Đức Vua', 'Bác', 'Cụ'], 0, 'Nhân dân tôn xưng Đức Thánh Trần.'),
    Q('Câu "Vua tôi đồng lòng, anh em hoà mục" thể hiện?', ['Tinh thần đoàn kết', 'Tinh thần độc lập', 'Tinh thần thương mại', 'Tinh thần học tập'], 0, 'Tư tưởng đoàn kết — sức mạnh.'),
  ]),

  M(20, 'Tập đọc — Đất nước Việt Nam', [
    Q('Việt Nam nằm ở khu vực?', ['Đông Bắc Á', 'Đông Nam Á', 'Nam Á', 'Trung Đông'], 1, 'Việt Nam thuộc Đông Nam Á.'),
    Q('Thủ đô Việt Nam là?', ['Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Huế'], 0, 'Thủ đô là Hà Nội.'),
    Q('Quốc kỳ Việt Nam có?', ['Sao trắng', 'Sao vàng giữa nền đỏ', 'Hai sọc xanh đỏ', 'Trăng lưỡi liềm'], 1, 'Cờ đỏ sao vàng.'),
    Q('Quốc ca Việt Nam là bài?', ['Tiến quân ca', 'Tự nguyện', 'Bài ca Việt Nam', 'Việt Nam ơi'], 0, '"Tiến quân ca" — Văn Cao.'),
    Q('Việt Nam có biển ở phía?', ['Bắc', 'Đông', 'Tây', 'Tất cả các phía'], 1, 'Biển Đông ở phía Đông.'),
    Q('Đảo lớn nhất của Việt Nam?', ['Phú Quốc', 'Côn Đảo', 'Cô Tô', 'Bạch Long Vĩ'], 0, 'Đảo Phú Quốc lớn nhất.'),
  ]),

  M(21, 'Đại từ thay thế — luyện tập', [
    Q('Câu "Cô giáo dạy chúng em. Cô rất hiền." — "Cô" là?', ['Danh từ', 'Đại từ thay thế', 'Tính từ', 'Quan hệ từ'], 1, '"Cô" thay cho "cô giáo" — đại từ thay thế.'),
    Q('Đại từ thay thế dùng để?', ['Tránh lặp từ', 'Tăng lặp từ', 'Hỏi', 'Đáp'], 0, 'Đại từ thay thế giúp tránh lặp.'),
    Q('"Bố em làm nông. Ông cần cù." — đại từ thay thế?', ['Em', 'Bố', 'Ông', 'Làm'], 2, '"Ông" thay cho "bố em".'),
    Q('"Cây bàng cao lớn. Nó đã trồng từ lâu." — "Nó" thay cho?', ['Cây bàng', 'Cao lớn', 'Trồng', 'Lâu'], 0, '"Nó" thay cho cây bàng.'),
    Q('"Lan và Mai cùng học. Hai bạn rất thân." — "Hai bạn" thay cho?', ['Lan', 'Mai', 'Lan và Mai', 'Học'], 2, '"Hai bạn" = Lan và Mai.'),
    Q('Dùng đại từ thay thế làm câu văn?', ['Lủng củng', 'Trôi chảy, gọn', 'Tối nghĩa', 'Khó hiểu'], 1, 'Tránh lặp → trôi chảy.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Tập đọc danh nhân', [
    Q('Danh nhân nào là vua mở đầu nhà Lý?', ['Lý Công Uẩn', 'Lý Thường Kiệt', 'Lý Bí', 'Lý Bôn'], 0, 'Lý Công Uẩn lên ngôi 1009.'),
    Q('Lý Thường Kiệt nổi tiếng với bài thơ?', ['Hịch tướng sĩ', 'Nam quốc sơn hà', 'Bình Ngô đại cáo', 'Đại Việt sử ký'], 1, '"Nam quốc sơn hà" — bài thơ "thần".'),
    Q('Lê Lợi khởi nghĩa chống quân?', ['Tống', 'Nguyên', 'Minh', 'Thanh'], 2, 'Khởi nghĩa Lam Sơn chống quân Minh.'),
    Q('Bình Ngô đại cáo do ai viết?', ['Nguyễn Trãi', 'Trần Hưng Đạo', 'Lý Thường Kiệt', 'Lê Lợi'], 0, 'Nguyễn Trãi viết Bình Ngô đại cáo.'),
    Q('Quang Trung — Nguyễn Huệ đại phá quân?', ['Pháp', 'Mông Cổ', 'Thanh', 'Minh'], 2, 'Quang Trung đại phá quân Thanh 1789.'),
    Q('Hai Bà Trưng khởi nghĩa năm?', ['40', '938', '1010', '1789'], 0, 'Năm 40 sau Công nguyên.'),
  ]),

  M(23, 'Viết đơn', [
    Q('Đơn là loại văn bản?', ['Hành chính', 'Miêu tả', 'Kể chuyện', 'Tự sự'], 0, 'Đơn thuộc văn bản hành chính.'),
    Q('Mở đầu đơn cần ghi?', ['Quốc hiệu, tiêu ngữ', 'Câu chào', 'Lời cảm ơn', 'Bài thơ'], 0, '"CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM…"'),
    Q('Tiêu ngữ là?', ['Độc lập – Tự do – Hạnh phúc', 'Đoàn kết – Tiến bộ', 'Học – Học nữa – Học mãi', 'Vì dân phục vụ'], 0, '"Độc lập – Tự do – Hạnh phúc" đứng dưới quốc hiệu.'),
    Q('Đơn phải có?', ['Tên đơn, người nhận, lý do, chữ kí', 'Bài thơ', 'Tranh minh hoạ', 'Bảng giá'], 0, 'Bố cục đơn: tiêu đề – kính gửi – nội dung – chữ kí.'),
    Q('"Kính gửi: Thầy hiệu trưởng…" thuộc phần?', ['Đầu đơn', 'Cuối đơn', 'Giữa thân', 'Chữ kí'], 0, 'Phần đầu sau quốc hiệu.'),
    Q('Cuối đơn cần?', ['Ngày tháng + chữ kí', 'Vẽ tranh', 'Bài thơ', 'Bảng điểm'], 0, 'Cuối đơn ghi ngày tháng + chữ kí.'),
  ]),

  M(24, 'Viết biên bản', [
    Q('Biên bản dùng để?', ['Ghi lại sự việc đã xảy ra', 'Kể chuyện', 'Tả cảnh', 'Viết thư'], 0, 'Biên bản ghi sự việc làm bằng chứng.'),
    Q('Biên bản cần ghi?', ['Thời gian, địa điểm, thành phần, nội dung', 'Bài thơ', 'Tranh', 'Bảng giá'], 0, 'Đủ 4 thành phần cơ bản.'),
    Q('Cuối biên bản cần?', ['Chữ kí của các bên', 'Tranh', 'Bảng điểm', 'Đề bài'], 0, 'Chữ kí xác nhận.'),
    Q('Biên bản viết theo văn phong?', ['Trang trọng, ngắn gọn, khách quan', 'Thơ ca', 'Hài hước', 'Cảm xúc'], 0, 'Hành chính → khách quan, ngắn gọn.'),
    Q('Biên bản cuộc họp lớp cần ghi?', ['Nội dung họp, ý kiến, biểu quyết', 'Bài thơ', 'Số đo', 'Truyện cười'], 0, 'Ghi diễn biến cuộc họp.'),
    Q('Sự khác biệt giữa biên bản và bài văn?', ['Biên bản khô khan, khách quan', 'Biên bản dùng nhiều biện pháp tu từ', 'Biên bản kể chuyện', 'Biên bản tả cảnh'], 0, 'Biên bản → văn bản hành chính, khách quan.'),
  ]),

  M(25, 'Viết báo cáo', [
    Q('Báo cáo dùng để?', ['Trình bày kết quả hoạt động đã làm', 'Kể chuyện vui', 'Tả cảnh', 'Vẽ tranh'], 0, 'Báo cáo trình bày kết quả công việc.'),
    Q('Báo cáo cần?', ['Quốc hiệu, tiêu ngữ, tên báo cáo, nội dung', 'Bài thơ', 'Tranh minh hoạ', 'Truyện cười'], 0, 'Bố cục báo cáo hành chính.'),
    Q('Phần nội dung báo cáo gồm?', ['Công việc đã làm, kết quả, kiến nghị', 'Bài thơ', 'Bảng giá', 'Truyện cổ'], 0, 'Báo cáo có 3 phần nội dung chính.'),
    Q('Văn phong báo cáo nên?', ['Trang trọng, ngắn gọn, chính xác', 'Hài hước', 'Cảm xúc', 'Thơ ca'], 0, 'Hành chính: ngắn gọn, chính xác.'),
    Q('Báo cáo "Hoạt động chi đội tháng 9" do ai viết?', ['Chi đội trưởng / thư kí chi đội', 'Phụ huynh', 'Bảo vệ', 'Người ngoài'], 0, 'Người được giao nhiệm vụ.'),
    Q('Báo cáo khác biên bản ở chỗ?', ['Báo cáo tổng kết, biên bản ghi tại chỗ', 'Giống nhau', 'Cùng tả cảnh', 'Cùng kể chuyện'], 0, 'Biên bản — ghi tức thời; Báo cáo — tổng kết sau.'),
  ]),

  M(26, 'Mở rộng vốn từ — Quyền và bổn phận', [
    Q('Quyền của trẻ em theo Luật?', ['Được học tập', 'Được vui chơi', 'Được bảo vệ', 'Tất cả'], 3, 'Trẻ em có nhiều quyền cơ bản.'),
    Q('Bổn phận của trẻ em?', ['Vâng lời cha mẹ', 'Học tập tốt', 'Giúp đỡ gia đình', 'Tất cả'], 3, 'Bổn phận trẻ em với gia đình, nhà trường, xã hội.'),
    Q('"Quyền" trái nghĩa với?', ['Bổn phận / nghĩa vụ', 'Hạnh phúc', 'Học tập', 'Vui chơi'], 0, 'Quyền — nghĩa vụ là cặp đối lập.'),
    Q('Trẻ em được pháp luật?', ['Bỏ rơi', 'Bảo vệ', 'Đánh đập', 'Bóc lột'], 1, 'Trẻ em được pháp luật bảo vệ.'),
    Q('"Trẻ em hôm nay, thế giới ngày mai" thể hiện?', ['Trẻ em là tương lai', 'Trẻ em không quan trọng', 'Trẻ em chỉ chơi', 'Trẻ em chỉ ngủ'], 0, 'Tôn trọng vai trò trẻ em.'),
    Q('Tổ chức bảo vệ trẻ em quốc tế?', ['UNICEF', 'WHO', 'FIFA', 'IMF'], 0, 'UNICEF — Quỹ Nhi đồng LHQ.'),
  ]),

  M(27, 'Mở rộng vốn từ — Hữu nghị, Hợp tác', [
    Q('"Hữu nghị" có nghĩa?', ['Tình bạn thân thiết giữa các nước', 'Đối đầu', 'Tranh chấp', 'Đánh nhau'], 0, 'Hữu nghị → quan hệ thân thiện.'),
    Q('"Hợp tác" có nghĩa?', ['Cùng làm việc với nhau', 'Một mình làm', 'Tranh giành', 'Ngược lại'], 0, 'Cùng làm việc để đạt mục đích chung.'),
    Q('Từ nào CÙNG nghĩa với "hữu nghị"?', ['Thân thiện', 'Thù địch', 'Lạnh nhạt', 'Tranh chấp'], 0, 'Thân thiện gần nghĩa với hữu nghị.'),
    Q('Từ trái nghĩa với "hợp tác"?', ['Đoàn kết', 'Chia rẽ', 'Giúp đỡ', 'Cùng làm'], 1, 'Chia rẽ trái nghĩa với hợp tác.'),
    Q('Trong câu "Hai nước kí hiệp định hợp tác." từ "hợp tác" làm?', ['Danh từ', 'Động từ', 'Tính từ', 'Trạng từ'], 0, 'Là danh từ chỉ hoạt động hợp tác.'),
    Q('Cụm "tình hữu nghị" thuộc?', ['Danh từ', 'Động từ', 'Tính từ', 'Quan hệ từ'], 0, 'Cụm danh từ.'),
  ]),

  M(28, 'Biện pháp tu từ — Ẩn dụ, Hoán dụ', [
    Q('Ẩn dụ là?', ['So sánh ngầm dựa trên sự giống nhau', 'Lặp từ', 'Đối lập', 'Liệt kê'], 0, 'Ẩn dụ = so sánh ngầm.'),
    Q('"Thuyền về có nhớ bến chăng?" — "Thuyền" và "Bến" ẩn dụ chỉ?', ['Đồ vật', 'Người đi và người ở lại', 'Sông nước', 'Đi du lịch'], 1, 'Thuyền = người đi; bến = người ở lại.'),
    Q('Hoán dụ là?', ['Gọi sự vật này bằng sự vật khác có quan hệ gần gũi', 'So sánh', 'Nhân hoá', 'Lặp ngữ'], 0, 'Dựa trên quan hệ gần gũi (bộ phận – toàn thể, vật chứa – vật bị chứa…).'),
    Q('"Áo nâu cùng với áo xanh, Nông thôn cùng với thị thành đứng lên." — "Áo nâu", "áo xanh" là hoán dụ chỉ?', ['Quần áo', 'Nông dân, công nhân', 'Bộ đội', 'Học sinh'], 1, 'Áo nâu → nông dân; áo xanh → công nhân.'),
    Q('"Bàn tay ta làm nên tất cả" — "bàn tay" hoán dụ chỉ?', ['Bàn tay thật', 'Sức lao động của con người', 'Đôi giày', 'Quần áo'], 1, 'Bộ phận → toàn thể (con người lao động).'),
    Q('"Người là Cha, là Bác, là Anh." — biện pháp gì?', ['Ẩn dụ', 'Hoán dụ', 'So sánh', 'Liệt kê tăng tiến'], 3, 'Liệt kê nhiều vai → tăng tiến tình cảm.'),
  ]),

  M(29, 'Câu ghép — luyện tập', [
    Q('Câu "Hễ trời mưa thì em mang áo mưa." là?', ['Câu đơn', 'Câu ghép — điều kiện/kết quả', 'Câu ghép — tương phản', 'Câu cảm'], 1, '"Hễ… thì…" → điều kiện.'),
    Q('"Mặc dù mệt, em vẫn làm bài." là câu ghép?', ['Nguyên nhân', 'Tương phản', 'Điều kiện', 'Lựa chọn'], 1, '"Mặc dù… vẫn…" → tương phản.'),
    Q('"Em không những học giỏi mà còn rất ngoan." là?', ['Tương phản', 'Tăng tiến', 'Nguyên nhân', 'Điều kiện'], 1, '"Không những… mà còn…" → tăng tiến.'),
    Q('Chọn câu ghép đúng cấu trúc:', ['Vì trời mưa nên đường ướt.', 'Vì trời mưa.', 'Đường ướt.', 'Trời.'], 0, 'Đủ 2 vế C-V và quan hệ từ.'),
    Q('Cặp "Càng… càng…" diễn tả?', ['Tăng tiến / song hành', 'Tương phản', 'Lựa chọn', 'Nguyên nhân'], 0, 'Càng… càng… → tăng tiến.'),
    Q('"Hoặc anh, hoặc tôi đi." chỉ quan hệ?', ['Lựa chọn', 'Tương phản', 'Tăng tiến', 'Nguyên nhân'], 0, 'Hoặc… hoặc… → lựa chọn.'),
  ]),

  M(30, 'Tập đọc — Bài về thiên nhiên Việt Nam', [
    Q('Vịnh Hạ Long thuộc tỉnh nào?', ['Quảng Ninh', 'Hải Phòng', 'Đà Nẵng', 'Huế'], 0, 'Vịnh Hạ Long ở Quảng Ninh.'),
    Q('Phong Nha — Kẻ Bàng thuộc tỉnh?', ['Quảng Bình', 'Quảng Trị', 'Quảng Ngãi', 'Quảng Nam'], 0, 'Vườn quốc gia Phong Nha — Quảng Bình.'),
    Q('Sông dài nhất Việt Nam?', ['Sông Hồng', 'Sông Mê Kông (Cửu Long)', 'Sông Đà', 'Sông Đồng Nai'], 1, 'Sông Mê Kông (đoạn VN là Cửu Long) dài nhất.'),
    Q('Núi cao nhất Việt Nam?', ['Phan Xi Păng', 'Bạch Mã', 'Tản Viên', 'Bà Đen'], 0, 'Phan Xi Păng (3 143 m).'),
    Q('Đồng bằng lớn nhất Việt Nam?', ['ĐB sông Hồng', 'ĐB sông Cửu Long', 'ĐB ven biển miền Trung', 'ĐB Thanh Hoá'], 1, 'ĐB sông Cửu Long lớn nhất.'),
    Q('"Rừng vàng biển bạc" ngợi ca?', ['Sự giàu có của thiên nhiên VN', 'Sản phẩm thủ công', 'Tiền vàng thật', 'Trang sức'], 0, 'Thiên nhiên giàu có.'),
  ]),

  M(31, 'Từ đồng nghĩa — trái nghĩa — đồng âm', [
    Q('"Đẹp" đồng nghĩa với?', ['Xấu', 'Tệ', 'Xinh', 'Bẩn'], 2, '"Xinh" gần nghĩa "đẹp".'),
    Q('"Cao" trái nghĩa với?', ['Thấp', 'Lớn', 'Nhỏ', 'Nông'], 0, 'Cao ↔ thấp.'),
    Q('Từ đồng âm là?', ['Phát âm giống nhau, nghĩa khác nhau', 'Nghĩa giống nhau', 'Phát âm khác nhau', 'Cùng nghĩa'], 0, 'Đồng âm — khác nghĩa.'),
    Q('"Đường (đi)" và "đường (ăn)" là?', ['Đồng nghĩa', 'Trái nghĩa', 'Đồng âm', 'Đa nghĩa'], 2, 'Cùng âm, nghĩa khác hẳn → đồng âm.'),
    Q('"Vàng (kim loại)" và "vàng (màu)" là?', ['Đồng nghĩa', 'Trái nghĩa', 'Đa nghĩa', 'Đồng âm'], 2, 'Cùng nguồn gốc liên quan → đa nghĩa.'),
    Q('"Siêng năng" đồng nghĩa với?', ['Lười biếng', 'Cần cù / chăm chỉ', 'Buồn ngủ', 'Mệt mỏi'], 1, 'Cần cù, chăm chỉ → gần nghĩa siêng năng.'),
  ]),

  M(32, 'Văn miêu tả — Kết hợp tả người và cảnh', [
    Q('Khi tả ông nội đang chăm vườn, em sẽ tả?', ['Cả ông và vườn', 'Chỉ ông', 'Chỉ vườn', 'Cảnh khác'], 0, 'Kết hợp tả người + cảnh.'),
    Q('Câu chuyển ý hay dùng?', ['Bên cạnh ông, khu vườn cũng…', 'Tôi không nhớ.', 'Tôi không tả nữa.', 'Không liên quan.'], 0, 'Câu chuyển giữa các đoạn tả.'),
    Q('Khi tả người trong cảnh nên?', ['Chọn chi tiết người gắn với cảnh', 'Tả riêng biệt', 'Bỏ cảnh', 'Bỏ người'], 0, 'Để bài văn liền mạch, tự nhiên.'),
    Q('Đoạn tả cảnh cần?', ['Trật tự không gian/thời gian', 'Liệt kê tự do', 'Lộn xộn', 'Không trình tự'], 0, 'Phải có trình tự.'),
    Q('Khi tả cần lưu ý?', ['Cảm xúc + chi tiết tiêu biểu', 'Chỉ chi tiết', 'Chỉ cảm xúc', 'Liệt kê khô'], 0, 'Kết hợp cảm xúc và chi tiết tiêu biểu.'),
    Q('Bài tả người + cảnh nên kết bài?', ['Nêu cảm nghĩ về cả người và cảnh', 'Đột ngột dừng', 'Chỉ về người', 'Chỉ về cảnh'], 0, 'Bài kết bài nêu cảm nghĩ chung.'),
  ]),

  M(33, 'Ôn tập tổng hợp — Từ loại & Câu', [
    Q('Từ "tươi đẹp" thuộc?', ['Danh từ', 'Động từ', 'Tính từ', 'Đại từ'], 2, 'Tính từ chỉ tính chất.'),
    Q('"Em đến trường" — chủ ngữ là?', ['Em', 'Đến', 'Trường', 'Đến trường'], 0, '"Em" là CN.'),
    Q('"Mẹ là người tuyệt vời." — vị ngữ?', ['Mẹ', 'là người tuyệt vời', 'người', 'tuyệt vời'], 1, 'VN bắt đầu từ "là".'),
    Q('"Nếu chăm học thì kết quả tốt." là câu?', ['Đơn', 'Ghép — điều kiện', 'Ghép — tương phản', 'Cảm thán'], 1, '"Nếu… thì…" → điều kiện.'),
    Q('Đại từ "nó" thuộc ngôi?', ['1 số ít', '2 số ít', '3 số ít', '3 số nhiều'], 2, '"Nó" — ngôi 3 số ít.'),
    Q('"Trời ơi, lạnh quá!" là câu?', ['Trần thuật', 'Nghi vấn', 'Cảm thán', 'Cầu khiến'], 2, '"Ơi… quá!" → cảm.'),
  ]),

  M(34, 'Ôn tập cuối cấp — Đọc hiểu', [
    Q('Mục đích đọc hiểu là?', ['Nắm nội dung, ý nghĩa của văn bản', 'Đếm số chữ', 'Học thuộc lòng', 'Vẽ tranh'], 0, 'Hiểu nội dung, ý nghĩa.'),
    Q('Khi đọc một bài, ta nên?', ['Đọc kỹ, tìm ý chính', 'Đọc nhanh không suy nghĩ', 'Bỏ qua đoạn khó', 'Đọc ngược'], 0, 'Đọc kỹ, tìm ý chính.'),
    Q('Đại ý là?', ['Ý chung, ý lớn nhất của bài', 'Câu cuối bài', 'Tên tác giả', 'Số trang'], 0, 'Đại ý nêu ý chung.'),
    Q('Bài thơ hoặc văn xuôi đều có?', ['Nội dung và nghệ thuật', 'Chỉ nội dung', 'Chỉ nghệ thuật', 'Không có gì'], 0, 'Nội dung + nghệ thuật.'),
    Q('Khi học thuộc lòng cần?', ['Hiểu rồi mới học thuộc', 'Học vẹt', 'Bỏ qua hiểu', 'Đọc 1 lần'], 0, 'Hiểu trước, thuộc sau.'),
    Q('Khi gặp từ khó, cần?', ['Hỏi, tra từ điển', 'Bỏ qua', 'Đoán bừa', 'Không cần biết'], 0, 'Tra cứu, hỏi để hiểu nghĩa.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp Tiếng Việt 5', [
    Q('Bộ phận chính của câu gồm?', ['CN và VN', 'Trạng ngữ và CN', 'CN và bổ ngữ', 'VN và bổ ngữ'], 0, 'CN + VN là 2 thành phần chính.'),
    Q('Trạng ngữ trả lời câu hỏi?', ['Khi nào? Ở đâu? Vì sao? Để làm gì?', 'Ai? Cái gì?', 'Làm gì?', 'Thế nào?'], 0, 'Trạng ngữ chỉ thời gian/nơi chốn/nguyên nhân/mục đích.'),
    Q('"Hôm qua, em đi học." — "Hôm qua" là?', ['Chủ ngữ', 'Trạng ngữ chỉ thời gian', 'Vị ngữ', 'Bổ ngữ'], 1, 'Hôm qua → thời gian.'),
    Q('Từ "hoa hồng" là?', ['Từ ghép', 'Từ láy', 'Đơn', 'Đại từ'], 0, '"Hoa" + "hồng" → từ ghép.'),
    Q('Từ "lung linh" là?', ['Từ ghép', 'Từ láy', 'Đại từ', 'Quan hệ từ'], 1, 'Lặp âm "l" → từ láy.'),
    Q('Bài tập đọc giúp em?', ['Rèn đọc + mở rộng vốn từ + hiểu nội dung', 'Học toán', 'Chơi điện tử', 'Vẽ tranh'], 0, 'Tập đọc rèn đọc, mở rộng vốn từ và hiểu nội dung.'),
  ]),
];

export const P5TV_SCENARIOS = indexBy(P5TV_WEEKS);
