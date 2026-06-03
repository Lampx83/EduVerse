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
    Q('Từ nào là DANH TỪ?', ['nhanh (tính từ chỉ tốc độ)', 'chạy (động từ chỉ hoạt động)', 'đẹp (tính từ chỉ đặc điểm)', 'bàn'], 3, 'Danh từ chỉ sự vật: bàn.'),
    Q('Từ nào là ĐỘNG TỪ?', ['cao (tính từ chỉ chiều cao)', 'học', 'cây (danh từ chỉ sự vật)', 'đỏ (tính từ chỉ màu sắc)'], 1, 'Động từ chỉ hoạt động: học.'),
    Q('Từ nào là TÍNH TỪ?', ['xanh', 'sách (danh từ chỉ đồ vật)', 'mưa (danh từ chỉ hiện tượng)', 'ngủ (động từ chỉ trạng thái)'], 0, 'Tính từ chỉ tính chất: xanh.'),
    Q('"Bạn Lan rất chăm chỉ" — từ "chăm chỉ" là?', ['Tính từ', 'Động từ', 'Đại từ', 'Danh từ'], 0, 'Chăm chỉ chỉ tính chất.'),
    Q('Danh từ riêng trong câu sau: "Tôi sinh ở Hà Nội." là?', ['Tôi (đại từ xưng hô)', 'Hà Nội', 'sinh (động từ)', 'ở (quan hệ từ chỉ nơi chốn)'], 1, 'Hà Nội là danh từ riêng (viết hoa).'),
    Q('"Mặt trời mọc trên biển" — từ nào là động từ?', ['Mặt trời', 'mọc', 'biển (danh từ chỉ sự vật)', 'trên (quan hệ từ chỉ vị trí)'], 1, 'Mọc là hoạt động.'),
  ]),

  M(2, 'Đại từ', [
    Q('Đại từ là từ?', ['Chỉ tính chất', 'Chỉ hoạt động', 'Dùng để xưng hô hoặc thay thế', 'Chỉ sự vật cụ thể'], 2, 'Đại từ dùng xưng hô (tôi, bạn) hoặc thay thế (nó, đó).'),
    Q('Đại từ trong câu "Em đi học" là?', ['đi (động từ chỉ hoạt động)', 'Câu không có đại từ', 'học (động từ chỉ hoạt động)', 'Em'], 3, '"Em" là đại từ xưng hô ngôi thứ nhất.'),
    Q('"Lan học giỏi. Bạn ấy được khen." — "Bạn ấy" thay cho?', ['Tính từ "giỏi" của Lan', 'Hoạt động "học" của Lan', 'Lan', 'Được khen'], 2, '"Bạn ấy" = Lan.'),
    Q('Đại từ ngôi thứ ba số ít?', ['Tôi (ngôi 1 số ít)', 'Nó / Anh ấy', 'Chúng ta', 'Các bạn'], 1, 'Nó, anh ấy, cô ấy là ngôi 3 số ít.'),
    Q('"Chúng tôi" là đại từ ngôi?', ['1 số nhiều', '2 số nhiều', '1 số ít', '3 số nhiều'], 0, 'Người nói + người cùng phía, không bao gồm người nghe.'),
    Q('Câu nào dùng đại từ?', ['Em yêu mẹ em.', 'Trời mưa.', 'Lá rơi.', 'Hoa rất đẹp.'], 0, '"Em" — đại từ.'),
  ]),

  M(3, 'Quan hệ từ', [
    Q('Quan hệ từ là từ?', ['Nối các từ, câu, đoạn để chỉ quan hệ', 'Chỉ sự vật', 'Chỉ hoạt động', 'Chỉ tính chất'], 0, 'Quan hệ từ: và, nhưng, vì, nên, của, ở…'),
    Q('Trong câu "Sách của em mới." — "của" là?', ['Tính từ', 'Quan hệ từ', 'Danh từ', 'Đại từ'], 1, '"Của" nối sở hữu.'),
    Q('Cặp quan hệ từ chỉ NGUYÊN NHÂN — KẾT QUẢ?', ['Nếu… thì…', 'Tuy… nhưng…', 'Vì… nên…', 'Không những… mà còn…'], 2, 'Vì… nên… diễn tả nguyên nhân — kết quả.'),
    Q('Cặp quan hệ từ chỉ TƯƠNG PHẢN?', ['Vì… nên…', 'Tuy… nhưng…', 'Càng… càng…', 'Nếu… thì…'], 1, 'Tuy… nhưng… diễn tả ý trái ngược.'),
    Q('Cặp quan hệ từ chỉ ĐIỀU KIỆN — KẾT QUẢ?', ['Nếu… thì…', 'Không những… mà còn…', 'Tuy… nhưng…', 'Vì… nên…'], 0, 'Nếu… thì… diễn tả điều kiện — kết quả.'),
    Q('"Em chăm học nên kết quả tốt." — "nên" chỉ quan hệ?', ['Nguyên nhân — kết quả', 'Điều kiện', 'Tương phản', 'Lựa chọn'], 0, '"Chăm học" là nguyên nhân, "kết quả tốt" là hệ quả.'),
  ]),

  M(4, 'Câu ghép', [
    Q('Câu ghép là câu?', ['Có từ 2 vế trở lên, mỗi vế có C-V', 'Không có CN', 'Không có VN', 'Có 1 vế'], 0, 'Câu ghép có ≥ 2 cụm C-V.'),
    Q('"Mẹ nấu cơm, em quét nhà." là câu?', ['Cảm thán', 'Ghép', 'Đơn (chỉ có 1 cụm chủ – vị)', 'Cầu khiến'], 1, '2 cụm C-V → câu ghép.'),
    Q('Vế trong câu ghép thường nối nhau bằng?', ['Chỉ dấu chấm', 'Cả A và B đều đúng', 'Dấu phẩy', 'Quan hệ từ'], 1, 'Có thể nối bằng quan hệ từ hoặc dấu câu (,;).'),
    Q('"Trời mưa nên đường ướt." — cách nối là?', ['Dấu phẩy', 'Chấm than', 'Quan hệ từ', 'Không nối gì'], 2, '"Nên" là quan hệ từ.'),
    Q('Số vế tối thiểu của câu ghép?', ['1', '3', '2', '4'], 2, 'Câu ghép có ít nhất 2 vế.'),
    Q('Câu nào KHÔNG phải câu ghép?', ['Tuy mệt nhưng em vẫn làm bài.', 'Mẹ đi chợ, em ở nhà.', 'Nếu trời mưa thì em ở nhà.', 'Lan và Hoa cùng học.'], 3, '"Lan và Hoa cùng học" chỉ 1 cụm C-V.'),
  ]),

  M(5, 'Câu ghép — cách nối các vế (1)', [
    Q('Vế câu nối với nhau bằng quan hệ từ nào tạo quan hệ NGUYÊN NHÂN?', ['Hay, hoặc', 'Vì, do, bởi vì', 'Nếu, hễ', 'Tuy, mặc dù'], 1, 'Vì / do / bởi vì → nguyên nhân.'),
    Q('Điền: "_____ trời mưa _____ em mặc áo mưa."', ['Vì… nên…', 'Nếu… thì…', 'Càng… càng…', 'Tuy… nhưng…'], 0, 'Nguyên nhân — kết quả.'),
    Q('Điền: "_____ em chăm học _____ em sẽ giỏi."', ['Vì… nên…', 'Hễ… thì…', 'Tuy… nhưng…', 'Nếu… thì…'], 3, 'Điều kiện — kết quả.'),
    Q('Điền: "_____ trời mưa to _____ chúng em vẫn đến lớp."', ['Tuy… nhưng…', 'Nếu… thì…', 'Vì… nên…', 'Không những… mà còn…'], 0, 'Tương phản.'),
    Q('"Bạn Lan vừa học giỏi vừa hát hay." — cặp quan hệ từ là?', ['Hễ… thì…', 'Vừa… vừa…', 'Vì… nên…', 'Tuy… nhưng…'], 1, 'Vừa… vừa… → tăng tiến.'),
    Q('"Càng học, em càng thấy thú vị." — chỉ quan hệ?', ['Tương phản', 'Tăng tiến / tăng cường', 'Nguyên nhân', 'Lựa chọn'], 1, 'Càng… càng… → tăng tiến.'),
  ]),

  M(6, 'Câu ghép — cách nối các vế (2)', [
    Q('Câu ghép có thể nối bằng dấu nào?', ['Cả 3 đáp án', 'Dấu phẩy', 'Dấu hai chấm', 'Dấu chấm phẩy'], 0, 'Tất cả đều có thể dùng để nối các vế.'),
    Q('"Trời tối; em bật đèn." vế nối bằng?', ['Dấu phẩy', 'Không nối', 'Quan hệ từ', 'Dấu chấm phẩy'], 3, 'Dấu ; nối 2 vế độc lập.'),
    Q('"Hoặc em làm, hoặc anh làm." — chỉ quan hệ?', ['Tăng tiến', 'Tương phản', 'Nguyên nhân', 'Lựa chọn'], 3, 'Hoặc… hoặc… → lựa chọn.'),
    Q('Cặp quan hệ từ TĂNG TIẾN?', ['Nếu… thì…', 'Hoặc… hoặc…', 'Không những… mà còn…', 'Vì… nên…'], 2, 'Không những… mà còn… → tăng tiến.'),
    Q('"Mai đến lớp, Lan đã ở đó." cách nối?', ['Hai chấm', 'Dấu phẩy', 'Không nối', 'Quan hệ từ'], 1, '2 vế nối bằng dấu phẩy.'),
    Q('Vế độc lập trong câu ghép có thể đứng?', ['Chỉ sau', 'Không đứng được', 'Trước hoặc sau', 'Chỉ trước'], 2, 'Vế có thể đảo vị trí khi không thay đổi nghĩa.'),
  ]),

  M(7, 'Liên kết câu — phép lặp, phép thế', [
    Q('Phép LẶP là dùng?', ['Lặp lại từ ngữ đã dùng', 'Đại từ thay thế', 'Từ trái nghĩa', 'Quan hệ từ'], 0, 'Phép lặp giữ nguyên 1 từ ở các câu để liên kết.'),
    Q('Phép THẾ là dùng?', ['Dấu câu', 'Quan hệ từ', 'Từ ngữ khác thay cho từ ở câu trước', 'Lặp từ'], 2, 'Phép thế dùng đại từ / từ đồng nghĩa thay cho từ trước.'),
    Q('"Bố em là bác sĩ. Ông luôn tận tâm." — "Ông" thay cho?', ['Tận tâm', 'Bác sĩ', 'Em (người kể chuyện)', 'Bố'], 3, '"Ông" = bố.'),
    Q('"Cây phượng nở hoa. Hoa phượng đỏ rực." — phép liên kết?', ['Phép thế', 'Phép nối', 'Phép lặp', 'Phép đồng nghĩa'], 2, 'Lặp từ "phượng/hoa".'),
    Q('Đại từ thay thế làm cho câu văn?', ['Dài hơn', 'Khó hiểu', 'Lặp lại nhiều', 'Tránh lặp, gọn hơn'], 3, 'Đại từ thay thế giúp tránh lặp.'),
    Q('"Hôm qua trời mưa to. Trận mưa kéo dài cả ngày." — câu 2 dùng phép?', ['Tương phản', 'Nối bằng quan hệ từ', 'Lặp + đồng nghĩa', 'Đối lập'], 2, 'Mưa được lặp/đồng nghĩa (trận mưa).'),
  ]),

  M(8, 'Liên kết câu — phép nối', [
    Q('Phép NỐI dùng?', ['Dấu phẩy', 'Đại từ', 'Lặp từ', 'Quan hệ từ / từ nối'], 3, 'Phép nối dùng các từ "vì, nên, nhưng, do đó…" để liên kết.'),
    Q('"Trời rất nóng. Vì vậy, ai cũng mệt." — phép?', ['Tương phản', 'Lặp lại từ "trời"', 'Nối', 'Thế bằng đại từ'], 2, '"Vì vậy" là từ nối.'),
    Q('Từ nào dùng cho phép nối?', ['Nó (đại từ thay thế)', 'Tuy nhiên', 'Bàn (danh từ chỉ vật)', 'Của (quan hệ từ sở hữu)'], 1, '"Tuy nhiên" là từ nối.'),
    Q('"Em rất chăm học. Tuy nhiên, kết quả chưa cao." — quan hệ?', ['Điều kiện', 'Tăng tiến', 'Tương phản', 'Nguyên nhân'], 2, 'Tuy nhiên → trái ngược.'),
    Q('Câu thứ hai bắt đầu bằng "Do đó" có vai trò?', ['So sánh', 'Kết quả', 'Nguyên nhân', 'Cảm thán'], 1, '"Do đó" dẫn ra kết quả.'),
    Q('Phép nối thường đặt ở?', ['Trong dấu ngoặc', 'Cuối câu', 'Đầu câu sau', 'Giữa từ'], 2, 'Phép nối thường đứng đầu câu sau.'),
  ]),

  M(9, 'Văn tả người (1)', [
    Q('Bài văn tả người có bố cục mấy phần?', ['1', '3', '4', '2'], 1, 'Mở bài – thân bài – kết bài.'),
    Q('Phần mở bài tả người nên?', ['Giới thiệu người được tả', 'Tả luôn ngoại hình', 'Nêu câu hỏi', 'Kể kết quả'], 0, 'Mở bài giới thiệu chung.'),
    Q('Thân bài tả người gồm?', ['Chỉ tả tính tình', 'Kể chuyện', 'Tả ngoại hình + hoạt động/tính tình', 'Chỉ tả ngoại hình'], 2, 'Tả ngoại hình + hoạt động/tính cách.'),
    Q('Tả ngoại hình gồm chi tiết nào?', ['Số điện thoại', 'Quê quán', 'Tuổi của ông bà', 'Khuôn mặt, mái tóc, dáng người'], 3, 'Ngoại hình: dáng, mặt, tóc, ánh mắt…'),
    Q('Kết bài tả người nên?', ['Kể câu chuyện khác', 'Tả thêm chi tiết', 'Nêu cảm nghĩ về người được tả', 'Hỏi lại người đọc'], 2, 'Kết bài nêu cảm nghĩ.'),
    Q('Khi tả nên chọn?', ['Chi tiết nổi bật, tiêu biểu', 'Chi tiết bí mật', 'Mọi chi tiết', 'Chi tiết tiêu cực'], 0, 'Chọn chi tiết tiêu biểu nhất.'),
  ]),

  M(10, 'Văn tả cảnh', [
    Q('Tả cảnh là?', ['Vẽ lại bằng lời cảnh vật quan sát được', 'Bày tỏ ý kiến', 'Viết thư', 'Kể chuyện'], 0, 'Tả cảnh = mô tả bằng lời.'),
    Q('Bố cục bài tả cảnh?', ['Chỉ thân bài', 'Mở – thân – kết', 'Đầu – cuối', 'Chỉ kết bài'], 1, '3 phần như bài văn miêu tả.'),
    Q('Trình tự tả cảnh KHÔNG bao gồm?', ['Theo thời gian', 'Theo trọng tâm', 'Theo không gian (xa – gần)', 'Theo trình tự bảng chữ cái'], 3, 'Không có "trình tự bảng chữ cái".'),
    Q('Khi tả cảnh, nên dùng giác quan nào?', ['Không dùng giác quan', 'Nhiều giác quan: nhìn, nghe, ngửi, sờ', 'Chỉ thính giác', 'Chỉ thị giác'], 1, 'Dùng nhiều giác quan để miêu tả sinh động.'),
    Q('Câu "Tiếng chim hót líu lo trong vòm lá." dùng giác quan?', ['Thị giác', 'Xúc giác', 'Thính giác', 'Khứu giác'], 2, '"Tiếng" → thính giác.'),
    Q('Bài tả cảnh tốt cần?', ['Quan sát thực tế và có cảm xúc', 'Toàn từ ngữ khó', 'Sao chép từ sách', 'Liệt kê khô khan'], 0, 'Quan sát + cảm xúc → bài hay.'),
  ]),

  M(11, 'Văn tả con vật', [
    Q('Tả con vật thường tả?', ['Chỉ tên', 'Ngoại hình + hoạt động/thói quen', 'Chỉ giá tiền', 'Chỉ trọng lượng'], 1, 'Ngoại hình + thói quen / hoạt động.'),
    Q('Khi tả con mèo, chi tiết KHÔNG phù hợp?', ['Đôi mắt sáng', 'Bộ lông mềm', 'Tiếng kêu meo meo', 'Mức lương'], 3, '"Mức lương" — không phù hợp với mèo.'),
    Q('Mở bài tả con vật cần?', ['Giới thiệu con vật được tả', 'Đo cân nặng, kích thước con vật', 'Bài học', 'Kết quả'], 0, 'Giới thiệu tên / nguồn gốc / hoàn cảnh có con vật.'),
    Q('"Chú mèo có bộ lông mượt như nhung." dùng biện pháp?', ['So sánh', 'Ẩn dụ (ngầm so sánh)', 'Hoán dụ', 'Nhân hoá'], 0, '"Như nhung" → so sánh.'),
    Q('"Chú chó vẫy đuôi mừng tôi như đứa em vui mừng đón anh." dùng biện pháp?', ['Điệp từ', 'Hoán dụ', 'So sánh + nhân hoá', 'Ẩn dụ (so sánh ngầm)'], 2, 'Vừa so sánh vừa nhân hoá.'),
    Q('Kết bài tả con vật cần?', ['Nêu tình cảm với con vật', 'Quên đi', 'Bán lại con vật', 'Hỏi giá'], 0, 'Kết bài nêu cảm xúc, tình cảm.'),
  ]),

  M(12, 'Văn tả đồ vật', [
    Q('Tả đồ vật là?', ['Kể chuyện', 'Viết thư', 'Mô tả lại đặc điểm đồ vật cụ thể', 'Bài thơ'], 2, 'Tả lại đồ vật mình quan sát.'),
    Q('Khi tả chiếc cặp sách nên tả?', ['Hình dáng, màu sắc, công dụng', 'Quê quán', 'Học lực', 'Ngày sinh'], 0, 'Hình dáng – màu – chất liệu – công dụng.'),
    Q('Câu mở bài hay dùng cho tả đồ vật?', ['Tôi không thích…', 'Tôi không có…', 'Tôi không biết…', 'Đó là món quà…'], 3, 'Mở bài giới thiệu nguồn gốc, hoàn cảnh có đồ vật.'),
    Q('"Chiếc bút máy của tôi tựa người bạn nhỏ." dùng biện pháp?', ['Điệp ngữ', 'So sánh + nhân hoá', 'Ẩn dụ (so sánh ngầm)', 'Hoán dụ'], 1, 'Vừa so sánh vừa nhân hoá.'),
    Q('Khi tả nên dùng từ ngữ?', ['Toàn tiếng nước ngoài', 'Trừu tượng khó hiểu', 'Toàn từ khoa học', 'Cụ thể, sinh động, gợi tả'], 3, 'Cụ thể, gợi tả.'),
    Q('Kết bài tả đồ vật nên?', ['Bán đồ vật', 'Quên đi', 'Nêu tình cảm, ý nghĩa', 'Vứt đi'], 2, 'Nêu tình cảm, sự gắn bó.'),
  ]),

  M(13, 'Dấu câu — ngoặc đơn, hai chấm', [
    Q('Dấu ngoặc đơn ( ) dùng để?', ['Ngắt câu', 'Cảm thán', 'Đánh dấu câu hỏi trực tiếp', 'Đánh dấu phần giải thích, chú thích thêm'], 3, 'Ngoặc đơn → chú thích thêm.'),
    Q('"Bác Hồ (1890–1969) là vị lãnh tụ vĩ đại." — ngoặc đơn dùng để?', ['Liệt kê', 'Cảm thán', 'Chú thích năm sinh – mất', 'Đặt câu hỏi tu từ'], 2, 'Năm sinh, năm mất.'),
    Q('Dấu HAI CHẤM (:) thường dùng để?', ['Chỉ câu hỏi', 'Chỉ kết thúc câu', 'Báo trước phần liệt kê hoặc lời thoại', 'Chỉ câu cảm'], 2, 'Báo trước liệt kê hoặc lời nói trực tiếp.'),
    Q('Câu nào dùng đúng dấu hai chấm?', ['Lan nói! "Em sẽ cố gắng."', 'Lan nói. "Em sẽ cố gắng."', 'Lan nói? "Em sẽ cố gắng."', 'Lan nói: "Em sẽ cố gắng."'], 3, 'Hai chấm trước lời thoại.'),
    Q('"Trong vườn có nhiều loại hoa: hồng, cúc, lan." — dấu hai chấm?', ['Báo trước liệt kê', 'Cảm thán', 'Đặt câu hỏi', 'Chú thích'], 0, 'Liệt kê các loại hoa.'),
    Q('Cuối câu hỏi dùng dấu gì?', ['.', ',', '! (dấu chấm than)', '?'], 3, 'Câu hỏi dùng dấu chấm hỏi.'),
  ]),

  M(14, 'Dấu chấm than — câu cảm — câu cầu khiến', [
    Q('Cuối câu cảm thán dùng dấu gì?', [',', '!', '.', '? (dấu chấm hỏi)'], 1, 'Câu cảm dùng dấu chấm than.'),
    Q('Câu nào là câu cảm?', ['Ôi, bông hoa đẹp quá!', 'Hãy đi học.', 'Em có đi học không?', 'Em đi học.'], 0, 'Câu cảm có từ "ôi, quá, biết bao…" và dấu !'),
    Q('Câu cầu khiến dùng từ?', ['Ôi, ô, a', 'Sao, vì sao', 'Bao giờ, ở đâu', 'Hãy, đừng, chớ, nên'], 3, 'Hãy / đừng / nên → cầu khiến.'),
    Q('Câu "Hãy giữ gìn sách vở." là?', ['Nghi vấn', 'Cảm thán', 'Trần thuật', 'Cầu khiến'], 3, '"Hãy" → cầu khiến.'),
    Q('Câu "Đừng nói chuyện trong giờ học!" là?', ['Cảm thán', 'Trần thuật', 'Cầu khiến', 'Nghi vấn'], 2, '"Đừng" → cầu khiến.'),
    Q('Câu "Trời ơi, đẹp quá!" thuộc kiểu?', ['Cảm thán', 'Cầu khiến', 'Kể (câu trần thuật)', 'Nghi vấn'], 0, '"Trời ơi… quá!" → cảm.'),
  ]),

  M(15, 'Văn kể chuyện đã chứng kiến', [
    Q('Kể chuyện đã chứng kiến là?', ['Đọc lại sách', 'Vẽ tranh', 'Kể lại 1 sự việc mình từng thấy', 'Tưởng tượng'], 2, 'Kể chuyện thật mình đã chứng kiến.'),
    Q('Mở bài kể chuyện cần?', ['Kể luôn cao trào', 'Giới thiệu hoàn cảnh', 'Nêu kết quả', 'Liệt kê'], 1, 'Mở bài giới thiệu hoàn cảnh, thời gian, địa điểm.'),
    Q('Thân bài kể chuyện nên kể theo?', ['Trình tự ngược', 'Trình tự thời gian', 'Không trình tự', 'Trình tự bảng chữ cái'], 1, 'Kể theo trình tự thời gian, diễn biến.'),
    Q('Khi kể nên?', ['Có chi tiết tiêu biểu, có cảm xúc', 'Toàn dấu câu', 'Liệt kê khô', 'Chỉ kể vắn tắt'], 0, 'Chi tiết tiêu biểu + cảm xúc → câu chuyện sinh động.'),
    Q('Ngôi kể thông dụng?', ['Không có ngôi', 'Ngôi 4', 'Ngôi 2', 'Ngôi 1 (tôi/em)'], 3, 'Người chứng kiến kể ở ngôi 1.'),
    Q('Kết bài nên?', ['Liệt kê người', 'Nêu suy nghĩ, bài học', 'Chú thích', 'Đột ngột bỏ'], 1, 'Kết bài rút ra suy nghĩ, ý nghĩa.'),
  ]),

  M(16, 'Viết đoạn miêu tả', [
    Q('Đoạn văn miêu tả thường có?', ['Chỉ 1 câu', 'Không cấu trúc', 'Câu chủ đề + câu triển khai', 'Chỉ liệt kê'], 2, 'Đoạn văn có câu chủ đề + câu triển khai.'),
    Q('Câu chủ đề trong đoạn tả thường?', ['Nêu ý chung của đoạn', 'Đặt câu hỏi cho người đọc', 'Kể chuyện khác', 'Nêu lời thoại'], 0, 'Câu chủ đề nêu ý chính của đoạn.'),
    Q('Khi viết đoạn tả nên dùng?', ['Hình ảnh so sánh, nhân hoá', 'Chỉ tính từ', 'Nhiều câu cảm thán', 'Toàn dấu hỏi'], 0, 'Biện pháp tu từ làm câu văn sinh động.'),
    Q('Câu "Bầu trời như tấm thảm xanh." dùng biện pháp?', ['Ẩn dụ (so sánh ngầm)', 'Nhân hoá', 'So sánh', 'Hoán dụ'], 2, 'Dùng "như" → so sánh.'),
    Q('Câu "Cây bàng đang ngái ngủ." dùng biện pháp?', ['So sánh', 'Liệt kê', 'Điệp ngữ', 'Nhân hoá'], 3, 'Gán hành động người cho cây → nhân hoá.'),
    Q('Đoạn miêu tả cần?', ['Trình tự rõ ràng', 'Liệt kê tự do', 'Không cần liên kết', 'Lộn xộn'], 0, 'Sắp xếp theo trình tự nhất định.'),
  ]),

  M(17, 'Tập đọc — Bác Hồ', [
    Q('Bác Hồ sinh ngày nào?', ['2/9/1969', '30/4/1975', '19/5/1890', '5/9/1945'], 2, 'Bác Hồ sinh 19/5/1890.'),
    Q('Quê Bác Hồ ở đâu?', ['Hà Nội', 'Nghệ An', 'Sài Gòn', 'Huế (kinh đô triều Nguyễn)'], 1, 'Quê Bác ở Nghệ An (Kim Liên).'),
    Q('Tên thật của Bác Hồ là?', ['Cả 3 đáp án', 'Nguyễn Sinh Cung', 'Nguyễn Ái Quốc', 'Hồ Chí Minh'], 0, 'Đều là tên của Bác qua các thời kỳ.'),
    Q('Bác Hồ ra đi tìm đường cứu nước năm?', ['1945', '1969', '1911', '1930'], 2, 'Ngày 5/6/1911 từ bến cảng Nhà Rồng.'),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập ở đâu?', ['Nghệ An', 'Hà Nội', 'Sài Gòn', 'Huế (cố đô triều Nguyễn)'], 1, 'Tại Quảng trường Ba Đình, Hà Nội.'),
    Q('5 điều Bác Hồ dạy thiếu nhi nhằm?', ['Hướng dẫn cách học, làm việc, sống tốt', 'Dạy nấu ăn', 'Dạy thể thao', 'Dạy võ'], 0, '5 điều Bác Hồ dạy hướng đến phẩm chất thiếu nhi.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Đại từ "chúng tôi" thuộc ngôi?', ['3 số nhiều', '1 số nhiều', '2 số nhiều', '1 số ít'], 1, 'Ngôi 1 số nhiều, loại trừ người nghe.'),
    Q('"Vì… nên…" là cặp quan hệ từ chỉ?', ['Lựa chọn', 'Nguyên nhân – kết quả', 'Điều kiện', 'Tương phản'], 1, 'Vì… nên… → nguyên nhân – kết quả.'),
    Q('Câu "Mẹ đi chợ, bố đi làm." là?', ['Câu hỏi', 'Câu ghép', 'Câu đơn', 'Câu cảm'], 1, '2 vế C-V → câu ghép.'),
    Q('Dấu ngoặc đơn dùng để?', ['Liệt kê', 'Cảm thán', 'Chú thích', 'Ngắt câu'], 2, 'Ngoặc đơn → chú thích.'),
    Q('Câu cảm thán kết thúc bằng dấu?', ['? (dấu chấm hỏi)', '.', ',', '!'], 3, 'Câu cảm dùng dấu chấm than.'),
    Q('"Bầu trời như tấm thảm." dùng?', ['So sánh', 'Ẩn dụ (so sánh ngầm)', 'Điệp ngữ', 'Nhân hoá'], 0, '"Như" → so sánh.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Tập đọc — Trần Hưng Đạo', [
    Q('Trần Hưng Đạo là tướng thời?', ['Trần', 'Lê (Lê Lợi chống Minh)', 'Nguyễn', 'Lý (Lý Thường Kiệt chống Tống)'], 0, 'Trần Hưng Đạo (Trần Quốc Tuấn) — nhà Trần.'),
    Q('Trần Hưng Đạo nổi tiếng vì?', ['Cải cách giáo dục', 'Đánh thắng quân Nguyên – Mông', 'Mở đất phương Nam', 'Lập triều Lý'], 1, '3 lần đánh thắng quân Nguyên – Mông.'),
    Q('Tác phẩm nổi tiếng của Trần Hưng Đạo?', ['Truyện Kiều', 'Hịch tướng sĩ', 'Nam quốc sơn hà', 'Bình Ngô đại cáo'], 1, '"Hịch tướng sĩ" — Trần Hưng Đạo.'),
    Q('Trận đánh quyết định trên sông?', ['Như Nguyệt', 'Bạch Đằng (1288)', 'Đống Đa', 'Rạch Gầm – Xoài Mút'], 1, 'Chiến thắng Bạch Đằng 1288.'),
    Q('Trần Hưng Đạo được tôn xưng là?', ['Đức Vua', 'Cụ Tổ (tổ tiên dòng họ)', 'Bác Hồ (lãnh tụ thời nay)', 'Đức Thánh Trần'], 3, 'Nhân dân tôn xưng Đức Thánh Trần.'),
    Q('Câu "Vua tôi đồng lòng, anh em hoà mục" thể hiện?', ['Tinh thần học tập', 'Tinh thần thương mại', 'Tinh thần độc lập', 'Tinh thần đoàn kết'], 3, 'Tư tưởng đoàn kết — sức mạnh.'),
  ]),

  M(20, 'Tập đọc — Đất nước Việt Nam', [
    Q('Việt Nam nằm ở khu vực?', ['Đông Bắc Á', 'Nam Á (Ấn Độ, Pakistan)', 'Trung Đông', 'Đông Nam Á'], 3, 'Việt Nam thuộc Đông Nam Á.'),
    Q('Thủ đô Việt Nam là?', ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Huế (cố đô triều Nguyễn)'], 1, 'Thủ đô là Hà Nội.'),
    Q('Quốc kỳ Việt Nam có?', ['Sao trắng', 'Sao vàng giữa nền đỏ', 'Hai sọc xanh đỏ', 'Trăng lưỡi liềm'], 1, 'Cờ đỏ sao vàng.'),
    Q('Quốc ca Việt Nam là bài?', ['Tiến quân ca', 'Tự nguyện', 'Việt Nam ơi', 'Bài ca Việt Nam'], 0, '"Tiến quân ca" — Văn Cao.'),
    Q('Việt Nam có biển ở phía?', ['Tây (giáp Lào, Campuchia)', 'Bắc (giáp Trung Quốc)', 'Đông', 'Tất cả các phía'], 2, 'Biển Đông ở phía Đông.'),
    Q('Đảo lớn nhất của Việt Nam?', ['Phú Quốc', 'Cô Tô (Quảng Ninh)', 'Bạch Long Vĩ', 'Côn Đảo'], 0, 'Đảo Phú Quốc lớn nhất.'),
  ]),

  M(21, 'Đại từ thay thế — luyện tập', [
    Q('Câu "Cô giáo dạy chúng em. Cô rất hiền." — "Cô" là?', ['Danh từ', 'Đại từ thay thế', 'Quan hệ từ', 'Tính từ'], 1, '"Cô" thay cho "cô giáo" — đại từ thay thế.'),
    Q('Đại từ thay thế dùng để?', ['Tăng lặp từ', 'Tránh lặp từ', 'Đặt câu trả lời cho câu hỏi', 'Đặt câu hỏi nghi vấn'], 1, 'Đại từ thay thế giúp tránh lặp.'),
    Q('"Bố em làm nông. Ông cần cù." — đại từ thay thế?', ['Làm (động từ chỉ hoạt động)', 'Bố (danh từ chỉ người)', 'Em (đại từ ngôi 1)', 'Ông'], 3, '"Ông" thay cho "bố em".'),
    Q('"Cây bàng cao lớn. Nó đã trồng từ lâu." — "Nó" thay cho?', ['Lâu (tính từ chỉ thời gian)', 'Cao lớn', 'Cây bàng', 'Trồng (động từ chỉ hoạt động)'], 2, '"Nó" thay cho cây bàng.'),
    Q('"Lan và Mai cùng học. Hai bạn rất thân." — "Hai bạn" thay cho?', ['Lan và Mai', 'Học (động từ chỉ hoạt động)', 'Riêng Mai (chỉ một người)', 'Riêng Lan (chỉ một người)'], 0, '"Hai bạn" = Lan và Mai.'),
    Q('Dùng đại từ thay thế làm câu văn?', ['Tối nghĩa', 'Trôi chảy, gọn', 'Lủng củng', 'Khó hiểu'], 1, 'Tránh lặp → trôi chảy.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Tập đọc danh nhân', [
    Q('Danh nhân nào là vua mở đầu nhà Lý?', ['Lý Thường Kiệt', 'Lý Công Uẩn', 'Lý Bí (lập nhà Tiền Lý, thế kỉ VI)', 'Lý Bôn'], 1, 'Lý Công Uẩn lên ngôi 1009.'),
    Q('Lý Thường Kiệt nổi tiếng với bài thơ?', ['Đại Việt sử ký', 'Bình Ngô đại cáo', 'Nam quốc sơn hà', 'Hịch tướng sĩ'], 2, '"Nam quốc sơn hà" — bài thơ "thần".'),
    Q('Lê Lợi khởi nghĩa chống quân?', ['Minh', 'Thanh (Quang Trung đại phá)', 'Nguyên', 'Tống (Lý Thường Kiệt chống)'], 0, 'Khởi nghĩa Lam Sơn chống quân Minh.'),
    Q('Bình Ngô đại cáo do ai viết?', ['Lý Thường Kiệt', 'Nguyễn Trãi', 'Lê Lợi', 'Trần Hưng Đạo'], 1, 'Nguyễn Trãi viết Bình Ngô đại cáo.'),
    Q('Quang Trung — Nguyễn Huệ đại phá quân?', ['Pháp (Bác Hồ tìm đường cứu nước)', 'Minh (Lê Lợi khởi nghĩa Lam Sơn)', 'Mông Cổ', 'Thanh'], 3, 'Quang Trung đại phá quân Thanh 1789.'),
    Q('Hai Bà Trưng khởi nghĩa năm?', ['938', '1789', '40', '1010'], 2, 'Năm 40 sau Công nguyên.'),
  ]),

  M(23, 'Viết đơn', [
    Q('Đơn là loại văn bản?', ['Kể chuyện', 'Miêu tả', 'Tự sự (kể chuyện đời thường)', 'Hành chính'], 3, 'Đơn thuộc văn bản hành chính.'),
    Q('Mở đầu đơn cần ghi?', ['Bài thơ', 'Quốc hiệu, tiêu ngữ', 'Lời cảm ơn', 'Câu chào'], 1, '"CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM…"'),
    Q('Tiêu ngữ là?', ['Vì dân phục vụ', 'Độc lập – Tự do – Hạnh phúc', 'Học – Học nữa – Học mãi', 'Đoàn kết – Tiến bộ'], 1, '"Độc lập – Tự do – Hạnh phúc" đứng dưới quốc hiệu.'),
    Q('Đơn phải có?', ['Bài thơ', 'Tên đơn, người nhận, lý do, chữ kí', 'Tranh minh hoạ', 'Bảng giá'], 1, 'Bố cục đơn: tiêu đề – kính gửi – nội dung – chữ kí.'),
    Q('"Kính gửi: Thầy hiệu trưởng…" thuộc phần?', ['Đầu đơn', 'Chữ kí', 'Cuối đơn', 'Giữa thân'], 0, 'Phần đầu sau quốc hiệu.'),
    Q('Cuối đơn cần?', ['Bài thơ', 'Bảng điểm', 'Ngày tháng + chữ kí', 'Vẽ tranh'], 2, 'Cuối đơn ghi ngày tháng + chữ kí.'),
  ]),

  M(24, 'Viết biên bản', [
    Q('Biên bản dùng để?', ['Viết thư', 'Tả cảnh', 'Kể chuyện', 'Ghi lại sự việc đã xảy ra'], 3, 'Biên bản ghi sự việc làm bằng chứng.'),
    Q('Biên bản cần ghi?', ['Bài thơ', 'Thời gian, địa điểm, thành phần, nội dung', 'Bảng giá', 'Tranh minh hoạ cuộc họp'], 1, 'Đủ 4 thành phần cơ bản.'),
    Q('Cuối biên bản cần?', ['Bảng điểm', 'Chữ kí của các bên', 'Đề bài', 'Tranh minh hoạ cuộc họp'], 1, 'Chữ kí xác nhận.'),
    Q('Biên bản viết theo văn phong?', ['Hài hước', 'Trang trọng, ngắn gọn, khách quan', 'Thơ ca', 'Cảm xúc'], 1, 'Hành chính → khách quan, ngắn gọn.'),
    Q('Biên bản cuộc họp lớp cần ghi?', ['Số đo chiều cao học sinh', 'Bài thơ', 'Nội dung họp, ý kiến, biểu quyết', 'Truyện cười'], 2, 'Ghi diễn biến cuộc họp.'),
    Q('Sự khác biệt giữa biên bản và bài văn?', ['Biên bản kể chuyện', 'Biên bản khô khan, khách quan', 'Biên bản dùng nhiều biện pháp tu từ', 'Biên bản tả cảnh'], 1, 'Biên bản → văn bản hành chính, khách quan.'),
  ]),

  M(25, 'Viết báo cáo', [
    Q('Báo cáo dùng để?', ['Tả cảnh', 'Trình bày kết quả hoạt động đã làm', 'Vẽ tranh', 'Kể chuyện vui'], 1, 'Báo cáo trình bày kết quả công việc.'),
    Q('Báo cáo cần?', ['Quốc hiệu, tiêu ngữ, tên báo cáo, nội dung', 'Truyện cười', 'Bài thơ', 'Tranh minh hoạ'], 0, 'Bố cục báo cáo hành chính.'),
    Q('Phần nội dung báo cáo gồm?', ['Bài thơ', 'Công việc đã làm, kết quả, kiến nghị', 'Truyện cổ', 'Bảng giá'], 1, 'Báo cáo có 3 phần nội dung chính.'),
    Q('Văn phong báo cáo nên?', ['Hài hước', 'Trang trọng, ngắn gọn, chính xác', 'Thơ ca', 'Cảm xúc'], 1, 'Hành chính: ngắn gọn, chính xác.'),
    Q('Báo cáo "Hoạt động chi đội tháng 9" do ai viết?', ['Bảo vệ', 'Chi đội trưởng / thư kí chi đội', 'Phụ huynh', 'Người ngoài'], 1, 'Người được giao nhiệm vụ.'),
    Q('Báo cáo khác biên bản ở chỗ?', ['Báo cáo tổng kết, biên bản ghi tại chỗ', 'Giống nhau', 'Cùng tả cảnh', 'Cùng kể chuyện'], 0, 'Biên bản — ghi tức thời; Báo cáo — tổng kết sau.'),
  ]),

  M(26, 'Mở rộng vốn từ — Quyền và bổn phận', [
    Q('Quyền của trẻ em theo Luật?', ['Tất cả', 'Được vui chơi', 'Được bảo vệ', 'Được học tập'], 0, 'Trẻ em có nhiều quyền cơ bản.'),
    Q('Bổn phận của trẻ em?', ['Học tập tốt', 'Giúp đỡ gia đình', 'Vâng lời cha mẹ', 'Tất cả'], 3, 'Bổn phận trẻ em với gia đình, nhà trường, xã hội.'),
    Q('"Quyền" trái nghĩa với?', ['Học tập', 'Hạnh phúc', 'Bổn phận / nghĩa vụ', 'Vui chơi'], 2, 'Quyền — nghĩa vụ là cặp đối lập.'),
    Q('Trẻ em được pháp luật?', ['Bóc lột', 'Bảo vệ', 'Bỏ rơi', 'Đánh đập'], 1, 'Trẻ em được pháp luật bảo vệ.'),
    Q('"Trẻ em hôm nay, thế giới ngày mai" thể hiện?', ['Trẻ em chỉ ngủ', 'Trẻ em chỉ chơi', 'Trẻ em không quan trọng', 'Trẻ em là tương lai'], 3, 'Tôn trọng vai trò trẻ em.'),
    Q('Tổ chức bảo vệ trẻ em quốc tế?', ['IMF (Quỹ Tiền tệ Quốc tế)', 'WHO (Tổ chức Y tế Thế giới)', 'FIFA (Liên đoàn Bóng đá Quốc tế)', 'UNICEF'], 3, 'UNICEF — Quỹ Nhi đồng LHQ.'),
  ]),

  M(27, 'Mở rộng vốn từ — Hữu nghị, Hợp tác', [
    Q('"Hữu nghị" có nghĩa?', ['Tranh chấp', 'Tình bạn thân thiết giữa các nước', 'Đánh nhau', 'Đối đầu'], 1, 'Hữu nghị → quan hệ thân thiện.'),
    Q('"Hợp tác" có nghĩa?', ['Cùng làm việc với nhau', 'Một mình làm', 'Tranh giành', 'Ngược lại'], 0, 'Cùng làm việc để đạt mục đích chung.'),
    Q('Từ nào CÙNG nghĩa với "hữu nghị"?', ['Tranh chấp', 'Lạnh nhạt', 'Thân thiện', 'Thù địch'], 2, 'Thân thiện gần nghĩa với hữu nghị.'),
    Q('Từ trái nghĩa với "hợp tác"?', ['Cùng làm', 'Giúp đỡ', 'Chia rẽ', 'Đoàn kết'], 2, 'Chia rẽ trái nghĩa với hợp tác.'),
    Q('Trong câu "Hai nước kí hiệp định hợp tác." từ "hợp tác" làm?', ['Động từ', 'Danh từ', 'Tính từ', 'Trạng từ'], 1, 'Là danh từ chỉ hoạt động hợp tác.'),
    Q('Cụm "tình hữu nghị" thuộc?', ['Tính từ', 'Danh từ', 'Động từ', 'Quan hệ từ'], 1, 'Cụm danh từ.'),
  ]),

  M(28, 'Biện pháp tu từ — Ẩn dụ, Hoán dụ', [
    Q('Ẩn dụ là?', ['So sánh ngầm dựa trên sự giống nhau', 'Lặp từ', 'Liệt kê', 'Đối lập'], 0, 'Ẩn dụ = so sánh ngầm.'),
    Q('"Thuyền về có nhớ bến chăng?" — "Thuyền" và "Bến" ẩn dụ chỉ?', ['Người đi và người ở lại', 'Đi du lịch', 'Đồ vật', 'Sông nước'], 0, 'Thuyền = người đi; bến = người ở lại.'),
    Q('Hoán dụ là?', ['So sánh', 'Lặp ngữ', 'Gọi sự vật này bằng sự vật khác có quan hệ gần gũi', 'Nhân hoá'], 2, 'Dựa trên quan hệ gần gũi (bộ phận – toàn thể, vật chứa – vật bị chứa…).'),
    Q('"Áo nâu cùng với áo xanh, Nông thôn cùng với thị thành đứng lên." — "Áo nâu", "áo xanh" là hoán dụ chỉ?', ['Bộ đội', 'Quần áo', 'Nông dân, công nhân', 'Học sinh'], 2, 'Áo nâu → nông dân; áo xanh → công nhân.'),
    Q('"Bàn tay ta làm nên tất cả" — "bàn tay" hoán dụ chỉ?', ['Sức lao động của con người', 'Quần áo', 'Đôi giày', 'Bàn tay thật'], 0, 'Bộ phận → toàn thể (con người lao động).'),
    Q('"Người là Cha, là Bác, là Anh." — biện pháp gì?', ['Hoán dụ', 'So sánh', 'Ẩn dụ (so sánh ngầm)', 'Liệt kê tăng tiến'], 3, 'Liệt kê nhiều vai → tăng tiến tình cảm.'),
  ]),

  M(29, 'Câu ghép — luyện tập', [
    Q('Câu "Hễ trời mưa thì em mang áo mưa." là?', ['Câu ghép — điều kiện/kết quả', 'Câu cảm', 'Câu ghép — tương phản', 'Câu đơn'], 0, '"Hễ… thì…" → điều kiện.'),
    Q('"Mặc dù mệt, em vẫn làm bài." là câu ghép?', ['Nguyên nhân', 'Tương phản', 'Lựa chọn', 'Điều kiện'], 1, '"Mặc dù… vẫn…" → tương phản.'),
    Q('"Em không những học giỏi mà còn rất ngoan." là?', ['Điều kiện', 'Tương phản', 'Tăng tiến', 'Nguyên nhân'], 2, '"Không những… mà còn…" → tăng tiến.'),
    Q('Chọn câu ghép đúng cấu trúc:', ['Vì trời mưa.', 'Vì trời mưa nên đường ướt.', 'Trời. (chưa thành câu)', 'Đường ướt.'], 1, 'Đủ 2 vế C-V và quan hệ từ.'),
    Q('Cặp "Càng… càng…" diễn tả?', ['Lựa chọn', 'Tăng tiến / song hành', 'Nguyên nhân', 'Tương phản'], 1, 'Càng… càng… → tăng tiến.'),
    Q('"Hoặc anh, hoặc tôi đi." chỉ quan hệ?', ['Nguyên nhân', 'Tăng tiến', 'Lựa chọn', 'Tương phản'], 2, 'Hoặc… hoặc… → lựa chọn.'),
  ]),

  M(30, 'Tập đọc — Bài về thiên nhiên Việt Nam', [
    Q('Vịnh Hạ Long thuộc tỉnh nào?', ['Quảng Ninh', 'Thừa Thiên Huế (có sông Hương)', 'Đà Nẵng', 'Hải Phòng'], 0, 'Vịnh Hạ Long ở Quảng Ninh.'),
    Q('Phong Nha — Kẻ Bàng thuộc tỉnh?', ['Quảng Bình', 'Quảng Ngãi', 'Quảng Trị', 'Quảng Nam'], 0, 'Vườn quốc gia Phong Nha — Quảng Bình.'),
    Q('Sông dài nhất Việt Nam?', ['Sông Đà', 'Sông Đồng Nai', 'Sông Mê Kông (Cửu Long)', 'Sông Hồng'], 2, 'Sông Mê Kông (đoạn VN là Cửu Long) dài nhất.'),
    Q('Núi cao nhất Việt Nam?', ['Bạch Mã', 'Bà Đen', 'Tản Viên', 'Phan Xi Păng'], 3, 'Phan Xi Păng (3 143 m).'),
    Q('Đồng bằng lớn nhất Việt Nam?', ['ĐB Thanh Hoá', 'ĐB sông Hồng', 'ĐB ven biển miền Trung', 'ĐB sông Cửu Long'], 3, 'ĐB sông Cửu Long lớn nhất.'),
    Q('"Rừng vàng biển bạc" ngợi ca?', ['Sự giàu có của thiên nhiên VN', 'Tiền vàng thật', 'Trang sức', 'Sản phẩm thủ công'], 0, 'Thiên nhiên giàu có.'),
  ]),

  M(31, 'Từ đồng nghĩa — trái nghĩa — đồng âm', [
    Q('"Đẹp" đồng nghĩa với?', ['Tệ (trái nghĩa với tốt)', 'Bẩn (trái nghĩa với sạch)', 'Xấu (trái nghĩa với đẹp)', 'Xinh'], 3, '"Xinh" gần nghĩa "đẹp".'),
    Q('"Cao" trái nghĩa với?', ['Nhỏ (trái nghĩa với to)', 'Thấp', 'Lớn (trái nghĩa với bé)', 'Nông (trái nghĩa với sâu)'], 1, 'Cao ↔ thấp.'),
    Q('Từ đồng âm là?', ['Nghĩa giống nhau', 'Cùng nghĩa', 'Phát âm giống nhau, nghĩa khác nhau', 'Phát âm khác nhau'], 2, 'Đồng âm — khác nghĩa.'),
    Q('"Đường (đi)" và "đường (ăn)" là?', ['Đồng âm', 'Trái nghĩa', 'Đa nghĩa', 'Đồng nghĩa'], 0, 'Cùng âm, nghĩa khác hẳn → đồng âm.'),
    Q('"Vàng (kim loại)" và "vàng (màu)" là?', ['Đồng âm', 'Đa nghĩa', 'Trái nghĩa', 'Đồng nghĩa'], 1, 'Cùng nguồn gốc liên quan → đa nghĩa.'),
    Q('"Siêng năng" đồng nghĩa với?', ['Cần cù / chăm chỉ', 'Mệt mỏi', 'Buồn ngủ', 'Lười biếng'], 0, 'Cần cù, chăm chỉ → gần nghĩa siêng năng.'),
  ]),

  M(32, 'Văn miêu tả — Kết hợp tả người và cảnh', [
    Q('Khi tả ông nội đang chăm vườn, em sẽ tả?', ['Cảnh khác', 'Chỉ vườn', 'Chỉ ông', 'Cả ông và vườn'], 3, 'Kết hợp tả người + cảnh.'),
    Q('Câu chuyển ý hay dùng?', ['Không liên quan.', 'Bên cạnh ông, khu vườn cũng…', 'Tôi không tả nữa.', 'Tôi không nhớ.'], 1, 'Câu chuyển giữa các đoạn tả.'),
    Q('Khi tả người trong cảnh nên?', ['Tả riêng biệt', 'Bỏ cảnh', 'Bỏ người', 'Chọn chi tiết người gắn với cảnh'], 3, 'Để bài văn liền mạch, tự nhiên.'),
    Q('Đoạn tả cảnh cần?', ['Không trình tự', 'Trật tự không gian/thời gian', 'Lộn xộn', 'Liệt kê tự do'], 1, 'Phải có trình tự.'),
    Q('Khi tả cần lưu ý?', ['Chỉ cảm xúc', 'Chỉ chi tiết', 'Liệt kê khô', 'Cảm xúc + chi tiết tiêu biểu'], 3, 'Kết hợp cảm xúc và chi tiết tiêu biểu.'),
    Q('Bài tả người + cảnh nên kết bài?', ['Chỉ về người', 'Đột ngột dừng', 'Nêu cảm nghĩ về cả người và cảnh', 'Chỉ về cảnh'], 2, 'Bài kết bài nêu cảm nghĩ chung.'),
  ]),

  M(33, 'Ôn tập tổng hợp — Từ loại & Câu', [
    Q('Từ "tươi đẹp" thuộc?', ['Động từ', 'Tính từ', 'Đại từ', 'Danh từ'], 1, 'Tính từ chỉ tính chất.'),
    Q('"Em đến trường" — chủ ngữ là?', ['Đến (vị ngữ – động từ)', 'Đến trường', 'Trường', 'Em'], 3, '"Em" là CN.'),
    Q('"Mẹ là người tuyệt vời." — vị ngữ?', ['tuyệt vời', 'là người tuyệt vời', 'người (danh từ trong vị ngữ)', 'Mẹ (chủ ngữ của câu)'], 1, 'VN bắt đầu từ "là".'),
    Q('"Nếu chăm học thì kết quả tốt." là câu?', ['Ghép — tương phản', 'Cảm thán', 'Đơn (chỉ một cụm chủ – vị)', 'Ghép — điều kiện'], 3, '"Nếu… thì…" → điều kiện.'),
    Q('Đại từ "nó" thuộc ngôi?', ['3 số ít', '2 số ít', '1 số ít', '3 số nhiều'], 0, '"Nó" — ngôi 3 số ít.'),
    Q('"Trời ơi, lạnh quá!" là câu?', ['Cầu khiến', 'Cảm thán', 'Nghi vấn', 'Trần thuật'], 1, '"Ơi… quá!" → cảm.'),
  ]),

  M(34, 'Ôn tập cuối cấp — Đọc hiểu', [
    Q('Mục đích đọc hiểu là?', ['Nắm nội dung, ý nghĩa của văn bản', 'Học thuộc lòng', 'Đếm số chữ', 'Vẽ tranh'], 0, 'Hiểu nội dung, ý nghĩa.'),
    Q('Khi đọc một bài, ta nên?', ['Bỏ qua đoạn khó', 'Đọc kỹ, tìm ý chính', 'Đọc ngược', 'Đọc nhanh không suy nghĩ'], 1, 'Đọc kỹ, tìm ý chính.'),
    Q('Đại ý là?', ['Tên tác giả', 'Số trang', 'Câu cuối bài', 'Ý chung, ý lớn nhất của bài'], 3, 'Đại ý nêu ý chung.'),
    Q('Bài thơ hoặc văn xuôi đều có?', ['Chỉ nghệ thuật', 'Không có gì', 'Nội dung và nghệ thuật', 'Chỉ nội dung'], 2, 'Nội dung + nghệ thuật.'),
    Q('Khi học thuộc lòng cần?', ['Đọc 1 lần', 'Học vẹt', 'Bỏ qua hiểu', 'Hiểu rồi mới học thuộc'], 3, 'Hiểu trước, thuộc sau.'),
    Q('Khi gặp từ khó, cần?', ['Không cần biết', 'Hỏi, tra từ điển', 'Bỏ qua', 'Đoán bừa'], 1, 'Tra cứu, hỏi để hiểu nghĩa.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp Tiếng Việt 5', [
    Q('Bộ phận chính của câu gồm?', ['CN và VN', 'VN và bổ ngữ', 'Trạng ngữ và CN', 'CN và bổ ngữ'], 0, 'CN + VN là 2 thành phần chính.'),
    Q('Trạng ngữ trả lời câu hỏi?', ['Thế nào?', 'Ai? Cái gì?', 'Khi nào? Ở đâu? Vì sao? Để làm gì?', 'Làm gì?'], 2, 'Trạng ngữ chỉ thời gian/nơi chốn/nguyên nhân/mục đích.'),
    Q('"Hôm qua, em đi học." — "Hôm qua" là?', ['Vị ngữ', 'Trạng ngữ chỉ thời gian', 'Bổ ngữ', 'Chủ ngữ'], 1, 'Hôm qua → thời gian.'),
    Q('Từ "hoa hồng" là?', ['Đơn (chỉ một tiếng có nghĩa)', 'Từ ghép', 'Đại từ', 'Từ láy'], 1, '"Hoa" + "hồng" → từ ghép.'),
    Q('Từ "lung linh" là?', ['Quan hệ từ', 'Từ ghép', 'Từ láy', 'Đại từ'], 2, 'Lặp âm "l" → từ láy.'),
    Q('Bài tập đọc giúp em?', ['Rèn đọc + mở rộng vốn từ + hiểu nội dung', 'Học toán', 'Vẽ tranh', 'Chơi điện tử'], 0, 'Tập đọc rèn đọc, mở rộng vốn từ và hiểu nội dung.'),
  ]),
];

export const P5TV_SCENARIOS = indexBy(P5TV_WEEKS);
