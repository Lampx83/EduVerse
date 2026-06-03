// ============================================================
// Lớp 5 · ÂM NHẠC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Âm nhạc Lớp 5.
// ID prefix: "P5AN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5AN', 'am-nhac', n, title, qs, opts);

export const P5AN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập đầu năm — Hát "Reo vang bình minh"', [
    Q('"Reo vang bình minh" do ai sáng tác?', ['Lưu Hữu Phước', 'Phạm Tuyên', 'Phan Huỳnh Điểu', 'Văn Cao'], 0, '"Reo vang bình minh" là sáng tác của Lưu Hữu Phước.'),
    Q('Bài hát có giai điệu?', ['Trầm lắng', 'Vui tươi, rộn ràng', 'Tha thiết, sâu lắng', 'Bi thương'], 1, 'Giai điệu vui tươi, rộn ràng buổi sáng.'),
    Q('Hát đầu năm thường gồm?', ['Hét to hết sức', 'Im lặng', 'Nói chuyện', 'Khởi động giọng, ôn bài cũ'], 3, 'Khởi động giọng trước khi hát.'),
    Q('Tư thế hát đúng?', ['Đứng thẳng, vai thả lỏng', 'Ngồi gục', 'Cúi gập người', 'Vặn người'], 0, 'Đứng thẳng giúp giọng vang.'),
  ]),

  M(2, 'Học hát "Reo vang bình minh" (tiếp)', [
    Q('Bài hát nói về cảnh?', ['Mưa bão', 'Cảnh chiến tranh', 'Đêm khuya', 'Buổi sáng tươi đẹp ở quê hương'], 3, 'Bài hát ca ngợi buổi sáng đẹp đẽ.'),
    Q('Để hát hay, em cần?', ['Hét lên', 'Hát đúng nhịp, lấy hơi đúng', 'Hát nhanh', 'Hát to hết sức'], 1, 'Đúng nhịp và lấy hơi đúng là quan trọng.'),
    Q('Khi hát đồng ca, em nên?', ['Hát lệch', 'Hát nhanh', 'Hét to nhất', 'Hát hoà giọng, không hét'], 3, 'Hoà giọng là nguyên tắc hát đồng ca.'),
    Q('Lấy hơi tốt bằng cách?', ['Hét lên', 'Hít sâu qua mũi, giữ hơi đều', 'Nín thở', 'Thở dốc'], 1, 'Hít sâu qua mũi và giữ hơi đều.'),
  ]),

  M(3, 'Ôn "Reo vang bình minh" + Tập đọc nhạc số 1', [
    Q('Trên khuông nhạc có?', ['7 dòng', '10 dòng', '5 dòng và 4 khe', '3 dòng và 2 khe'], 2, 'Khuông nhạc có 5 dòng và 4 khe.'),
    Q('Khoá Son đặt ở?', ['Dòng 1', 'Dòng 5', 'Dòng 2 từ dưới lên', 'Khe 2 từ dưới lên'], 2, 'Khoá Son đặt ở dòng 2.'),
    Q('Các nốt nhạc cơ bản?', ['Đô Rê Mi Pha Son La Si', '1 2 3 4 5', 'Đỏ vàng xanh', 'A B C D'], 0, '7 nốt cơ bản Đô Rê Mi Pha Son La Si.'),
    Q('Nốt cao hơn được viết?', ['Ở vị trí cao trên khuông', 'Ở vị trí thấp', 'Bên phải', 'Bên trái'], 0, 'Nốt càng cao thì vị trí trên khuông càng cao.'),
  ]),

  M(4, 'Học hát "Hãy giữ cho em bầu trời xanh"', [
    Q('Bài hát "Hãy giữ cho em bầu trời xanh" do ai sáng tác?', ['Phạm Tuyên', 'Huy Trân', 'Văn Cao', 'Trịnh Công Sơn'], 1, '"Hãy giữ cho em bầu trời xanh" do Huy Trân sáng tác.'),
    Q('Nội dung bài hát nói về?', ['Học tập', 'Tình bạn', 'Khát vọng hoà bình', 'Mùa xuân'], 2, 'Bài hát thể hiện khát vọng hoà bình cho trẻ em.'),
    Q('Bài hát phù hợp dịp nào?', ['Ngày hoà bình thế giới, kỉ niệm trẻ em', 'Lễ Vu Lan', 'Tết âm lịch', 'Lễ Phục sinh'], 0, 'Phù hợp ngày hoà bình và sự kiện trẻ em.'),
    Q('Khi hát bài này, sắc thái?', ['Buồn bã', 'Hài hước', 'Mạnh mẽ, gay gắt', 'Trong sáng, tha thiết'], 3, 'Sắc thái trong sáng, tha thiết.'),
    Q('Bầu trời xanh tượng trưng cho?', ['Buồn bã', 'Bóng tối', 'Chiến tranh', 'Hoà bình, hi vọng'], 3, 'Bầu trời xanh là biểu tượng hoà bình.'),
  ]),

  M(5, 'Ôn "Hãy giữ cho em bầu trời xanh" + nhạc cụ', [
    Q('Recorder là?', ['Đàn phím', 'Sáo dọc của phương Tây', 'Nhạc cụ gõ bằng dùi', 'Đàn dây'], 1, 'Recorder là sáo dọc thường dùng trong trường học.'),
    Q('Recorder thổi bằng?', ['Dây cọ vào nhau', 'Tay đánh', 'Hơi qua đầu thổi', 'Que gõ'], 2, 'Recorder thổi bằng hơi qua đầu thổi.'),
    Q('Bấm nốt Si trên recorder?', ['Bịt kín tất cả các lỗ', 'Bịt hết', 'Bịt kín lỗ ngón cái và lỗ ngón trỏ', 'Mở hết'], 2, 'Nốt Si bịt ngón cái và ngón trỏ.'),
    Q('Khi thổi recorder, em nên?', ['Thổi nhẹ và đều', 'Thổi rất mạnh', 'Lắc đầu', 'Cắn ống'], 0, 'Thổi nhẹ và đều cho âm thanh trong.'),
  ]),

  M(6, 'Tập đọc nhạc số 2', [
    Q('Trường độ nốt đen?', ['2 phách', '1 phách', '4 phách', 'Nửa phách'], 1, 'Nốt đen có trường độ 1 phách.'),
    Q('Nốt trắng có giá trị?', ['Nửa phách', '1 phách', '4 phách', '2 phách'], 3, 'Nốt trắng = 2 phách.'),
    Q('Nốt tròn có giá trị?', ['8 phách', '1 phách', '2 phách', '4 phách'], 3, 'Nốt tròn = 4 phách.'),
    Q('Dấu lặng đen là?', ['Khoảng nghỉ 2 phách', 'Khoảng nghỉ 4 phách', 'Khoảng nghỉ 1 phách', 'Nốt 1 phách'], 2, 'Dấu lặng đen nghỉ 1 phách.'),
  ]),

  M(7, 'Học hát "Con chim hay hót"', [
    Q('"Con chim hay hót" do ai sáng tác?', ['Phạm Tuyên', 'Trịnh Công Sơn', 'Phan Huỳnh Điểu', 'Văn Cao'], 2, '"Con chim hay hót" của Phan Huỳnh Điểu (phổ thơ).'),
    Q('Bài hát có tính chất?', ['Buồn bã', 'Trầm tư', 'Bi tráng', 'Hồn nhiên, vui tươi'], 3, 'Tính chất hồn nhiên, vui tươi.'),
    Q('Bài hát phỏng theo?', ['Hát ru Nam Bộ', 'Quan họ Bắc Ninh', 'Đồng dao', 'Ca trù miền Bắc'], 2, 'Phỏng theo đồng dao Việt Nam.'),
    Q('Khi hát, gõ đệm bằng?', ['Phách hoặc thanh phách', 'Trống lớn', 'Đàn organ', 'Kèn saxophone'], 0, 'Gõ đệm bằng nhạc cụ gõ nhỏ.'),
  ]),

  M(8, 'Ôn tập 2 bài hát + Ôn TĐN', [
    Q('Khi ôn 2 bài hát, em nên?', ['Quên lời', 'Bỏ qua', 'Hát sai nhịp', 'Hát đúng giai điệu, lời ca'], 3, 'Hát đúng giai điệu và lời ca.'),
    Q('Lưu ý khi đọc nhạc?', ['Đọc tuỳ ý', 'Đúng cao độ, đúng trường độ', 'Đọc to hết sức', 'Đọc nhanh'], 1, 'Đúng cao độ và trường độ là quan trọng.'),
    Q('Sắc thái bài "Hãy giữ cho em bầu trời xanh"?', ['Sôi nổi, dồn dập', 'Mạnh mẽ', 'Trong sáng, tha thiết', 'Hài hước'], 2, 'Trong sáng, tha thiết.'),
    Q('Bài "Reo vang bình minh" sắc thái?', ['Bi tráng', 'Trầm lắng', 'Vui tươi, rộn ràng', 'Buồn bã'], 2, 'Vui tươi, rộn ràng.'),
  ]),

  M(9, 'Học hát "Những bông hoa, những bài ca"', [
    Q('"Những bông hoa, những bài ca" do ai sáng tác?', ['Phạm Tuyên', 'Hoàng Long', 'Trịnh Công Sơn', 'Văn Cao'], 1, '"Những bông hoa, những bài ca" của Hoàng Long.'),
    Q('Bài hát viết về?', ['Quê hương', 'Bạn bè thân thiết', 'Mùa xuân', 'Thầy cô giáo'], 3, 'Bài hát ca ngợi thầy cô giáo.'),
    Q('Phù hợp dịp nào?', ['1/6 — Quốc tế Thiếu nhi', '2/9', '20/11 — Ngày Nhà giáo VN', '8/3'], 2, 'Phù hợp Ngày Nhà giáo Việt Nam.'),
    Q('Sắc thái bài hát?', ['Trang nghiêm, hùng tráng', 'Tươi vui, trìu mến', 'Dữ dội', 'Hài hước'], 1, 'Tươi vui và trìu mến.'),
  ]),

  M(10, 'Ôn "Những bông hoa, những bài ca" + TĐN số 3', [
    Q('Nhịp 2/4 nghĩa là?', ['Mỗi ô 3 phách', 'Mỗi ô nhịp 2 phách, mỗi phách bằng nốt đen', 'Mỗi ô 4 phách', 'Mỗi ô 6 phách'], 1, '2/4: 2 phách, đơn vị là nốt đen.'),
    Q('Trong nhịp 2/4, phách 1 là?', ['Phách yếu', 'Phách nhẹ', 'Phách mạnh vừa', 'Phách mạnh'], 3, 'Phách 1 luôn là phách mạnh.'),
    Q('Vạch nhịp dùng để?', ['Trang trí', 'Chia ô nhịp', 'Không dùng', 'Đánh dấu kết'], 1, 'Vạch nhịp chia khuông thành các ô.'),
    Q('Vạch kết bài là?', ['Vạch nhịp đôi đậm', 'Dấu chấm', 'Vạch đơn', 'Dấu hỏi'], 0, 'Vạch nhịp đôi đậm là vạch kết bài.'),
  ]),

  M(11, 'Nhạc cụ dân tộc — Đàn tranh', [
    Q('Đàn tranh có bao nhiêu dây phổ biến?', ['6 dây', '12 dây', '4 dây', '16 dây'], 3, 'Đàn tranh Việt Nam phổ biến 16 dây.'),
    Q('Đàn tranh thuộc nhóm?', ['Nhạc cụ hơi', 'Nhạc cụ gõ', 'Nhạc cụ dây gảy', 'Nhạc cụ điện'], 2, 'Đàn tranh là nhạc cụ dây gảy.'),
    Q('Cách chơi đàn tranh?', ['Bấm phím', 'Gảy dây bằng móng tay đeo', 'Gõ búa', 'Thổi hơi'], 1, 'Gảy dây bằng móng đeo trên ngón.'),
    Q('Đàn tranh có âm sắc?', ['Chát chúa', 'Trầm, đục', 'Trong, ngân vang', 'Ngắn, gọn'], 2, 'Âm trong và ngân vang.'),
  ]),

  M(12, 'Nhạc cụ dân tộc — Đàn nhị', [
    Q('Đàn nhị có?', ['6 dây', '16 dây', '4 dây', '2 dây'], 3, 'Đàn nhị có 2 dây (nên gọi là "nhị").'),
    Q('Đàn nhị chơi bằng?', ['Kéo cung', 'Thổi hơi', 'Gảy tay', 'Gõ búa'], 0, 'Kéo bằng cung (vĩ).'),
    Q('Đàn nhị thuộc nhóm?', ['Nhạc cụ dây kéo', 'Nhạc cụ phím', 'Nhạc cụ hơi', 'Nhạc cụ gõ'], 0, 'Là nhạc cụ dây kéo.'),
    Q('Đàn nhị thường dùng trong?', ['Nhạc pop quốc tế', 'Hát chèo, hát văn, dân ca', 'Nhạc giao hưởng phương Tây', 'Nhạc rock'], 1, 'Đàn nhị dùng trong nhạc dân tộc VN.'),
  ]),

  M(13, 'Nhạc cụ dân tộc — Sáo trúc', [
    Q('Sáo trúc thổi bằng?', ['Bằng tay', 'Hơi qua lỗ thổi ngang', 'Bằng búa', 'Hơi qua đầu thổi'], 1, 'Sáo trúc thổi ngang qua lỗ thổi.'),
    Q('Sáo trúc làm bằng?', ['Kim loại', 'Cây trúc', 'Gỗ cứng', 'Nhựa hoàn toàn'], 1, 'Làm từ cây trúc tự nhiên.'),
    Q('Sáo trúc thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ phím', 'Nhạc cụ hơi', 'Nhạc cụ dây'], 2, 'Là nhạc cụ hơi.'),
    Q('Sáo trúc có âm sắc?', ['Trầm đục', 'The thé, chói gắt', 'Trong, du dương', 'Vang rền như chuông'], 2, 'Âm trong và du dương.'),
  ]),

  M(14, 'Nhạc cụ dân tộc — Cồng chiêng', [
    Q('Cồng chiêng là?', ['Nhạc cụ phím', 'Nhạc cụ dây', 'Nhạc cụ gõ bằng đồng', 'Nhạc cụ hơi'], 2, 'Cồng chiêng là nhạc cụ gõ bằng đồng.'),
    Q('Cồng chiêng nổi tiếng ở?', ['Đồng bằng sông Hồng', 'Tây Nguyên', 'TP.HCM', 'Hà Nội'], 1, 'Cồng chiêng Tây Nguyên nổi tiếng.'),
    Q('Không gian văn hoá cồng chiêng được UNESCO công nhận là?', ['Không gì cả', 'Di sản văn hoá phi vật thể nhân loại', 'Bí mật', 'Di sản vật thể'], 1, 'UNESCO công nhận là di sản văn hoá phi vật thể.'),
    Q('Cồng chiêng dùng trong?', ['Quán cà phê', 'Lễ hội Halloween', 'Tiệc cưới Tây', 'Lễ hội, sinh hoạt cộng đồng Tây Nguyên'], 3, 'Dùng trong lễ hội cộng đồng Tây Nguyên.'),
  ]),

  M(15, 'Học hát "Ước mơ" (nhạc Trung Quốc, lời Việt)', [
    Q('Bài "Ước mơ" là bài hát nước ngoài lời Việt do?', ['Văn Cao', 'An Hoà đặt lời', 'Phạm Tuyên', 'Trịnh Công Sơn'], 1, '"Ước mơ" nhạc TQ, An Hoà đặt lời Việt.'),
    Q('Nội dung bài hát?', ['Buồn bã', 'Lao động vất vả', 'Chiến tranh', 'Ước mơ tốt đẹp của trẻ em'], 3, 'Ước mơ đẹp của tuổi học trò.'),
    Q('Sắc thái?', ['Mạnh mẽ', 'Mơ màng, tha thiết', 'Hài hước', 'Bi tráng'], 1, 'Mơ màng, tha thiết.'),
    Q('Khi hát, em nên?', ['Hát thật to để át bạn', 'Hát đúng cao độ và lời', 'Hát to nhất', 'Cười lớn'], 1, 'Đúng cao độ và lời mới hay.'),
  ]),

  M(16, 'Ôn "Ước mơ" + TĐN số 4', [
    Q('Dấu lặng nghĩa là?', ['Hát chậm', 'Hát nhanh', 'Im lặng theo trường độ', 'Hát to'], 2, 'Dấu lặng = nghỉ theo trường độ.'),
    Q('Dấu nối nối 2 nốt cùng cao độ để?', ['Hát to', 'Hát rời', 'Đổi giọng', 'Kéo dài trường độ'], 3, 'Dấu nối kéo dài trường độ.'),
    Q('Dấu luyến nối 2 nốt khác cao độ để?', ['Hát to', 'Hát liền tiếng', 'Hát rời', 'Im lặng'], 1, 'Dấu luyến hát liền tiếng nhau.'),
    Q('Tốc độ "vừa phải" tiếng Ý là?', ['Presto', 'Adagio', 'Moderato', 'Allegro'], 2, 'Moderato = vừa phải.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('Cuối HK1 em đã học mấy bài hát chính?', ['Không bài nào', '4 bài', '10 bài', '1 bài'], 1, 'Khoảng 4 bài chính trong HK1.'),
    Q('Nhạc cụ dân tộc đã học?', ['Guitar điện', 'Đàn tranh, đàn nhị, sáo trúc, cồng chiêng', 'Trống jazz', 'Violin và kèn trumpet'], 1, 'Đã học 4 nhạc cụ dân tộc trên.'),
    Q('Khi biểu diễn, em nên?', ['Run, quên lời', 'Bỏ chạy', 'Hát thật to để át nhạc', 'Tự tin, hát đúng'], 3, 'Tự tin và hát đúng là tốt.'),
    Q('Sắc thái "Hãy giữ cho em bầu trời xanh"?', ['Mạnh mẽ, hành khúc', 'Trong sáng, tha thiết', 'Hài hước', 'Bi tráng'], 1, 'Trong sáng, tha thiết.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khi kiểm tra, em nên?', ['Hát rất nhanh cho xong', 'Hát thật to để được điểm cao', 'Tự tin, hát đúng', 'Run, quên'], 2, 'Tự tin và đúng.'),
    Q('Hát cá nhân cần chú ý?', ['Hơi, cao độ, lời ca', 'Hát thật nhanh cho gọn', 'Vừa hát vừa nhảy múa', 'Hét to'], 0, 'Hơi, cao độ, lời là 3 yếu tố quan trọng.'),
    Q('Đọc nhạc cần?', ['Đọc theo cảm hứng riêng', 'Đọc nhanh', 'Đúng cao độ và trường độ', 'Đọc to'], 2, 'Đúng cao độ và trường độ.'),
    Q('Thái độ khi nghe bạn hát?', ['Nói chuyện', 'Bỏ ra ngoài', 'Lắng nghe, vỗ tay', 'Cười nhạo'], 2, 'Lắng nghe và động viên.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Học hát "Hát mừng" (dân ca Hrê)', [
    Q('"Hát mừng" là dân ca?', ['Nam Bộ', 'Hrê (Tây Nguyên)', 'Hàn Quốc', 'Bắc Bộ'], 1, '"Hát mừng" là dân ca Hrê.'),
    Q('Tính chất bài?', ['Vui tươi, rộn ràng', 'Bi tráng', 'Trầm lắng', 'Êm dịu, ru ngủ'], 0, 'Vui tươi, rộn ràng kiểu lễ hội Tây Nguyên.'),
    Q('Nhạc cụ phù hợp đệm?', ['Guitar điện', 'Saxophone', 'Đàn organ điện tử', 'Cồng chiêng, trống'], 3, 'Cồng chiêng và trống phù hợp dân ca Tây Nguyên.'),
    Q('Khi hát em nên?', ['Buồn bã', 'Im lặng', 'Nhanh quá độ', 'Vui tươi, gõ đệm theo'], 3, 'Vui tươi, gõ đệm theo nhịp.'),
  ]),

  M(20, 'Ôn "Hát mừng" + TĐN số 5', [
    Q('Nhịp 4/4 nghĩa là?', ['4 phách/ô, đơn vị là nốt đen', '3 phách', '6 phách', '2 phách'], 0, '4/4: 4 phách/ô, đơn vị nốt đen.'),
    Q('Trong 4/4, phách mạnh nhất ở?', ['Phách 2', 'Phách 4', 'Phách 3', 'Phách 1'], 3, 'Phách 1 mạnh nhất.'),
    Q('Phách mạnh vừa trong 4/4 ở?', ['Phách 1', 'Phách 3', 'Phách 2', 'Phách 4'], 1, 'Phách 3 mạnh vừa, phách 2 và 4 nhẹ.'),
    Q('Nhịp 4/4 hay dùng cho?', ['Điệu valse xoay', 'Hành khúc', 'Nhạc trữ tình, nhạc nhẹ', 'Vọng cổ'], 2, '4/4 phổ biến cho nhạc trữ tình.'),
  ]),

  M(21, 'Học hát "Tre ngà bên Lăng Bác"', [
    Q('"Tre ngà bên Lăng Bác" do ai sáng tác?', ['Trịnh Công Sơn', 'Hàn Ngọc Bích', 'Phạm Tuyên', 'Văn Cao'], 1, '"Tre ngà bên Lăng Bác" của Hàn Ngọc Bích.'),
    Q('Nội dung bài hát?', ['Tình bạn', 'Ca ngợi Bác Hồ, Lăng Bác', 'Mùa xuân', 'Học tập'], 1, 'Ca ngợi Bác Hồ qua hình ảnh tre ngà bên Lăng.'),
    Q('Sắc thái bài?', ['Dữ dội', 'Vui nhộn', 'Hài hước', 'Tha thiết, trang nghiêm'], 3, 'Tha thiết, trang nghiêm.'),
    Q('Lăng Bác Hồ ở?', ['Đà Nẵng', 'Quảng trường Ba Đình, Hà Nội', 'TP.HCM', 'Làng Sen, Nghệ An'], 1, 'Lăng Bác ở Quảng trường Ba Đình, Hà Nội.'),
  ]),

  M(22, 'Ôn "Tre ngà bên Lăng Bác" + TĐN số 6', [
    Q('Tiết tấu chấm dôi là?', ['Giảm trường độ', 'Tăng thêm 1/2 trường độ nốt đứng trước', 'Im lặng', 'Đổi cao độ'], 1, 'Dấu chấm dôi tăng thêm 1/2.'),
    Q('Nốt đen chấm dôi có giá trị?', ['1.5 phách', '2 phách', '0.5 phách', '1 phách'], 0, 'Đen chấm dôi = 1 + 0.5 = 1.5 phách.'),
    Q('Khi đọc tiết tấu chấm dôi, cần?', ['Đọc tuỳ ý', 'Đọc nhanh', 'Giữ đúng độ dài', 'Bỏ qua'], 2, 'Giữ đúng độ dài chấm dôi.'),
    Q('Khi hát có chấm dôi?', ['Bỏ qua', 'Ngắt ngay không ngân', 'Ngân đủ thời gian', 'Hát nhanh'], 2, 'Phải ngân đủ thời gian.'),
  ]),

  M(23, 'Học hát "Màu xanh quê hương"', [
    Q('"Màu xanh quê hương" là dân ca?', ['Trung Bộ', 'Tây Nguyên', 'Bắc Bộ', 'Khmer Nam Bộ'], 3, 'Dân ca Khmer Nam Bộ (lời Việt).'),
    Q('Bài hát ca ngợi?', ['Học tập', 'Chiến tranh', 'Lao động vất vả', 'Quê hương tươi đẹp'], 3, 'Quê hương tươi đẹp, màu xanh.'),
    Q('Sắc thái?', ['Vui tươi, trong sáng', 'Dữ dội', 'Trầm lắng', 'Buồn bã'], 0, 'Vui tươi và trong sáng.'),
    Q('Khi hát em nên?', ['Hát nhanh', 'Hát đúng giai điệu dân ca', 'Hát kiểu rock', 'Hát thật nhanh và to'], 1, 'Giữ chất dân ca khi hát.'),
  ]),

  M(24, 'Ôn "Màu xanh quê hương" + giới thiệu hợp xướng', [
    Q('Hợp xướng là?', ['Hát đơn', 'Hát đuổi nhau', 'Hát nhiều bè cùng lúc', 'Đọc thơ'], 2, 'Hợp xướng là hát nhiều bè cùng lúc.'),
    Q('Hợp xướng nhiều bè giúp?', ['Lệch nhịp', 'Tệ hơn', 'Khó nghe', 'Âm thanh phong phú, đẹp'], 3, 'Nhiều bè làm âm thanh phong phú.'),
    Q('Trong hợp xướng, em cần?', ['Hét to nhất', 'Hát lung tung', 'Át bè khác', 'Hát đúng bè của mình, nghe các bè khác'], 3, 'Đúng bè và biết nghe bè khác.'),
    Q('Các giọng cơ bản trong hợp xướng?', ['Đỏ, vàng, xanh', 'Trầm, cao, vang, ngân', 'Soprano, alto, tenor, bass', '1, 2, 3, 4'], 2, '4 giọng cơ bản của hợp xướng.'),
  ]),

  M(25, 'Học hát "Em vẫn nhớ trường xưa"', [
    Q('"Em vẫn nhớ trường xưa" do ai sáng tác?', ['Phạm Tuyên', 'Trịnh Công Sơn', 'Văn Cao', 'Thanh Sơn'], 3, '"Em vẫn nhớ trường xưa" của Thanh Sơn.'),
    Q('Nội dung bài hát?', ['Tình cảm với mái trường', 'Mùa xuân', 'Quê hương', 'Chiến tranh'], 0, 'Tình cảm sâu sắc với mái trường.'),
    Q('Sắc thái?', ['Tha thiết, sâu lắng', 'Dữ dội', 'Hài hước', 'Vui nhộn'], 0, 'Tha thiết, sâu lắng.'),
    Q('Phù hợp dịp?', ['Lễ khai giảng đầu năm', 'Quốc khánh', '8/3', 'Lễ ra trường, kỉ niệm trường'], 3, 'Phù hợp lễ ra trường tiểu học.'),
  ]),

  M(26, 'Ôn "Em vẫn nhớ trường xưa" + recorder', [
    Q('Bấm nốt La trên recorder?', ['Bịt ngón cái và ngón trỏ', 'Bịt ngón cái, ngón trỏ, ngón giữa', 'Mở hết', 'Bịt hết'], 1, 'Nốt La bịt 3 ngón đầu.'),
    Q('Khi thổi recorder, lưỡi?', ['Đẩy ra', 'Cuộn lại', 'Để yên', 'Dùng để ngắt âm "tu-tu"'], 3, 'Lưỡi ngắt âm bằng "tu-tu".'),
    Q('Recorder cần giữ?', ['Sạch sẽ, lau khô sau dùng', 'Để ướt', 'Vứt bừa', 'Bẩn cũng được'], 0, 'Giữ sạch và lau khô sau dùng.'),
    Q('Thổi recorder nhịp 4/4 cần?', ['Thổi rất nhanh', 'Thổi rất chậm', 'Thổi tuỳ ý', 'Đúng phách, đều'], 3, 'Đúng phách và đều đặn.'),
  ]),

  M(27, 'Học hát "Dàn đồng ca mùa hạ"', [
    Q('"Dàn đồng ca mùa hạ" do ai sáng tác?', ['Văn Cao', 'Lê Minh Châu', 'Phạm Tuyên', 'Phan Huỳnh Điểu'], 1, '"Dàn đồng ca mùa hạ" của Lê Minh Châu (phổ thơ).'),
    Q('Nội dung bài hát?', ['Mùa đông', 'Âm thanh mùa hè qua tiếng ve', 'Mùa xuân và cây đào nở', 'Chiến tranh'], 1, 'Âm thanh ve sầu mùa hè.'),
    Q('Sắc thái?', ['Trầm tư', 'Bi tráng', 'Vui tươi, sôi nổi', 'Tha thiết, trầm lắng'], 2, 'Vui tươi, sôi nổi.'),
    Q('Phù hợp dịp?', ['Khai giảng đầu năm học', 'Trung thu', '20/11', 'Cuối năm học, hè về'], 3, 'Phù hợp dịp hè về.'),
  ]),

  M(28, 'Ôn "Dàn đồng ca mùa hạ" + TĐN số 7', [
    Q('Nhịp 3/4 nghĩa là?', ['2 phách', '4 phách', '6 phách', '3 phách/ô, đơn vị là nốt đen'], 3, '3/4: 3 phách/ô.'),
    Q('Trong 3/4, phách mạnh ở?', ['Phách 1', 'Phách 2', 'Không có', 'Phách 3'], 0, 'Phách 1 mạnh, 2 và 3 nhẹ.'),
    Q('Nhịp 3/4 hay dùng cho?', ['Hành khúc duyệt binh', 'Điệu valse', 'Vọng cổ', 'Hành khúc'], 1, 'Valse là điệu nhảy 3/4.'),
    Q('Đọc TĐN nhịp 3/4 cần?', ['Nhấn phách 4', 'Đọc lung tung', 'Nhấn phách 1', 'Không nhấn'], 2, 'Nhấn vào phách 1.'),
  ]),

  M(29, 'Nghe nhạc — tác phẩm hoà tấu dân tộc', [
    Q('Hoà tấu dân tộc là?', ['Hát một mình', 'Nhiều nhạc cụ dân tộc cùng chơi', 'Đọc thơ', 'Một nhạc cụ'], 1, 'Nhiều nhạc cụ dân tộc cùng chơi tác phẩm.'),
    Q('Khi nghe hoà tấu, em nên?', ['Vừa nghe vừa hát theo to', 'Nói chuyện', 'Lắng nghe yên lặng và cảm nhận', 'Bỏ ra ngoài'], 2, 'Lắng nghe và cảm nhận.'),
    Q('Tác phẩm nổi tiếng cho đàn tranh?', ['"Lý ngựa ô"', '"Như có Bác"', '"Trống cơm"', '"Tiến quân ca"'], 0, 'Đàn tranh hay chơi các điệu dân ca như Lý ngựa ô.'),
    Q('Lợi ích nghe nhạc dân tộc?', ['Mệt mỏi', 'Không gì', 'Mất thời gian', 'Hiểu và yêu văn hoá dân tộc'], 3, 'Hiểu và yêu văn hoá dân tộc.'),
  ]),

  M(30, 'Hợp xướng 2 bè đơn giản', [
    Q('Hợp xướng 2 bè là?', ['Một bài đọc', 'Hai nhóm hát giống nhau', 'Hai nhóm hát 2 giai điệu khác nhau cùng lúc', 'Một nhóm hát'], 2, '2 bè hát 2 giai điệu khác nhau cùng lúc.'),
    Q('Trong 2 bè, bè cao gọi?', ['Bè trầm (giọng thấp)', 'Bè 1 (giọng cao)', 'Bè trầm', 'Bè giữa'], 1, 'Bè 1 thường là giọng cao.'),
    Q('Khi hát 2 bè, em cần?', ['Hét to', 'Hát theo bè khác', 'Giữ đúng bè, không bị bè kia lôi', 'Hát lung tung'], 2, 'Giữ đúng bè của mình.'),
    Q('Hợp xướng 2 bè tạo cảm giác?', ['Nghèo nàn', 'Phong phú, đầy đặn', 'Khó nghe', 'Đơn điệu, lặp lại'], 1, 'Tạo cảm giác phong phú.'),
  ]),

  M(31, 'Ôn tập 4 bài hát HK2', [
    Q('Bài "Hát mừng" là?', ['Sáng tác mới', 'Dân ca Bắc Bộ', 'Dân ca Hrê', 'Nhạc Tây'], 2, 'Dân ca Hrê (Tây Nguyên).'),
    Q('"Tre ngà bên Lăng Bác" ca ngợi?', ['Người mẹ Việt Nam', 'Mùa xuân', 'Bác Hồ', 'Quê hương'], 2, 'Ca ngợi Bác Hồ.'),
    Q('"Màu xanh quê hương" là dân ca?', ['Tây Nguyên', 'Bắc Bộ', 'Khmer Nam Bộ', 'Trung Bộ'], 2, 'Dân ca Khmer Nam Bộ.'),
    Q('"Em vẫn nhớ trường xưa" sắc thái?', ['Tha thiết, sâu lắng', 'Vui nhộn', 'Bi tráng', 'Hài hước'], 0, 'Tha thiết, sâu lắng.'),
  ]),

  M(32, 'Ôn tập TĐN', [
    Q('Để đọc TĐN tốt em cần?', ['Nắm tên nốt, trường độ và đọc đúng', 'Đọc to', 'Đọc nhanh', 'Đọc lướt qua thật nhanh'], 0, 'Nắm tên nốt và trường độ.'),
    Q('Vị trí nốt Đô (giữa)?', ['Dòng 5', 'Trên dòng 5', 'Khe 3 từ dưới lên', 'Dưới dòng 1 (trên dòng kẻ phụ)'], 3, 'Đô giữa nằm ngay dưới dòng 1.'),
    Q('Vị trí nốt Son?', ['Trên dòng 5', 'Dòng 2', 'Dòng 5', 'Khe 2 từ dưới lên'], 1, 'Nốt Son ở dòng 2.'),
    Q('Đọc gam Đô trưởng đi lên?', ['Si Đô Rê', 'Pha Son', 'Đô La Si', 'Đô Rê Mi Pha Son La Si Đô'], 3, 'Gam Đô trưởng từ Đô đi lên 1 quãng 8.'),
  ]),

  M(33, 'Biểu diễn — tiết mục tự chọn', [
    Q('Khi biểu diễn em nên?', ['Tự tin, đúng giai điệu, sắc thái phù hợp', 'Hát to át nhạc đệm', 'Bỏ chạy', 'Run, quên lời'], 0, 'Tự tin và đúng sắc thái.'),
    Q('Trang phục biểu diễn?', ['Áo bẩn', 'Quần ngắn lệch', 'Đồng phục thể dục thường ngày', 'Gọn gàng, phù hợp bài'], 3, 'Gọn gàng và phù hợp.'),
    Q('Khi lên sân khấu em nên?', ['Cúi gằm', 'Vẫy tay cho bạn bè trước', 'Chào khán giả', 'Không chào'], 2, 'Chào khán giả là phép lịch sự.'),
    Q('Khi nghe bạn biểu diễn em nên?', ['Cười nhạo', 'Bỏ ra ngoài', 'Nói chuyện', 'Lắng nghe, vỗ tay khích lệ'], 3, 'Lắng nghe và vỗ tay động viên.'),
  ]),

  M(34, 'Ôn tập cuối năm', [
    Q('Cả năm em đã học mấy bài hát chính?', ['Khoảng 8 bài', '30 bài', 'Không bài nào', '1 bài'], 0, 'Khoảng 8 bài chính cả năm.'),
    Q('Nhạc cụ dân tộc đã học?', ['Guitar điện', 'Đàn organ điện tử', 'Trống jazz', 'Đàn tranh, đàn nhị, sáo trúc, cồng chiêng'], 3, '4 nhạc cụ dân tộc.'),
    Q('Lý thuyết nhịp đã học?', ['2/4, 3/4, 4/4', 'Chỉ 4/4', 'Chỉ 2/4', 'Chỉ 3/4 và 6/8'], 0, 'Đã học 2/4, 3/4, 4/4.'),
    Q('Khi rời cấp 1, em vẫn nên?', ['Tiếp tục yêu âm nhạc', 'Bỏ học', 'Chỉ nghe pop', 'Quên hết'], 0, 'Tiếp tục yêu âm nhạc.'),
  ]),

  M(35, 'Kiểm tra cuối năm — biểu diễn', [
    Q('Kiểm tra cuối năm gồm?', ['Hát, đọc nhạc, nhận biết nhạc cụ', 'Chỉ đọc', 'Chỉ hát', 'Chỉ nghe'], 0, 'Tổng hợp các nội dung đã học.'),
    Q('Tự đánh giá em đã tiến bộ ở?', ['Lười hơn', 'Hát đúng hơn, hiểu nhạc dân tộc', 'Tệ hơn', 'Không có gì'], 1, 'Tự nhìn lại sự tiến bộ của mình.'),
    Q('Sau cấp 1 em sẽ?', ['Học tiếp âm nhạc ở cấp 2', 'Quên hết', 'Không quan tâm', 'Bỏ học'], 0, 'Tiếp tục học âm nhạc ở cấp 2.'),
    Q('Lời tạm biệt thầy cô môn nhạc?', ['Trêu chọc', 'Vẫy tay rồi chạy ra cửa', 'Cảm ơn và hứa giữ tình yêu âm nhạc', 'Im lặng'], 2, 'Lời cảm ơn chân thành.'),
  ]),
];

export const P5AN_SCENARIOS = indexBy(P5AN_WEEKS);
