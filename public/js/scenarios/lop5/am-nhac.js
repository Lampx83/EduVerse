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
    Q('"Reo vang bình minh" do ai sáng tác?', ['Lưu Hữu Phước','Văn Cao','Phan Huỳnh Điểu','Phạm Tuyên'], 0, '"Reo vang bình minh" là sáng tác của Lưu Hữu Phước.'),
    Q('Bài hát có giai điệu?', ['Vui tươi, rộn ràng','Buồn','Trầm lắng','Bi thương'], 0, 'Giai điệu vui tươi, rộn ràng buổi sáng.'),
    Q('Hát đầu năm thường gồm?', ['Khởi động giọng, ôn bài cũ','Hét to hết sức','Nói chuyện','Im lặng'], 0, 'Khởi động giọng trước khi hát.'),
    Q('Tư thế hát đúng?', ['Đứng thẳng, vai thả lỏng','Cúi gập người','Ngồi gục','Vặn người'], 0, 'Đứng thẳng giúp giọng vang.'),
  ]),

  M(2, 'Học hát "Reo vang bình minh" (tiếp)', [
    Q('Bài hát nói về cảnh?', ['Buổi sáng tươi đẹp ở quê hương','Đêm khuya','Mưa bão','Cảnh chiến tranh'], 0, 'Bài hát ca ngợi buổi sáng đẹp đẽ.'),
    Q('Để hát hay, em cần?', ['Hát đúng nhịp, lấy hơi đúng','Hát to hết sức','Hát nhanh','Hét lên'], 0, 'Đúng nhịp và lấy hơi đúng là quan trọng.'),
    Q('Khi hát đồng ca, em nên?', ['Hát hoà giọng, không hét','Hét to nhất','Hát lệch','Hát nhanh'], 0, 'Hoà giọng là nguyên tắc hát đồng ca.'),
    Q('Lấy hơi tốt bằng cách?', ['Hít sâu qua mũi, giữ hơi đều','Thở dốc','Nín thở','Hét lên'], 0, 'Hít sâu qua mũi và giữ hơi đều.'),
  ]),

  M(3, 'Ôn "Reo vang bình minh" + Tập đọc nhạc số 1', [
    Q('Trên khuông nhạc có?', ['5 dòng và 4 khe','3 dòng và 2 khe','7 dòng','10 dòng'], 0, 'Khuông nhạc có 5 dòng và 4 khe.'),
    Q('Khoá Son đặt ở?', ['Dòng 2 từ dưới lên','Dòng 1','Dòng 5','Khe 4'], 0, 'Khoá Son đặt ở dòng 2.'),
    Q('Các nốt nhạc cơ bản?', ['Đô Rê Mi Pha Son La Si','A B C D','1 2 3 4 5','Đỏ vàng xanh'], 0, '7 nốt cơ bản Đô Rê Mi Pha Son La Si.'),
    Q('Nốt cao hơn được viết?', ['Ở vị trí cao trên khuông','Ở vị trí thấp','Bên trái','Bên phải'], 0, 'Nốt càng cao thì vị trí trên khuông càng cao.'),
  ]),

  M(4, 'Học hát "Hãy giữ cho em bầu trời xanh"', [
    Q('Bài hát "Hãy giữ cho em bầu trời xanh" do ai sáng tác?', ['Huy Trân','Văn Cao','Phạm Tuyên','Trịnh Công Sơn'], 0, '"Hãy giữ cho em bầu trời xanh" do Huy Trân sáng tác.'),
    Q('Nội dung bài hát nói về?', ['Khát vọng hoà bình','Tình bạn','Học tập','Mùa xuân'], 0, 'Bài hát thể hiện khát vọng hoà bình cho trẻ em.'),
    Q('Bài hát phù hợp dịp nào?', ['Ngày hoà bình thế giới, kỉ niệm trẻ em','Tết âm lịch','Lễ Vu Lan','Lễ Phục sinh'], 0, 'Phù hợp ngày hoà bình và sự kiện trẻ em.'),
    Q('Khi hát bài này, sắc thái?', ['Trong sáng, tha thiết','Mạnh mẽ, gay gắt','Buồn bã','Hài hước'], 0, 'Sắc thái trong sáng, tha thiết.'),
    Q('Bầu trời xanh tượng trưng cho?', ['Hoà bình, hi vọng','Chiến tranh','Buồn bã','Bóng tối'], 0, 'Bầu trời xanh là biểu tượng hoà bình.'),
  ]),

  M(5, 'Ôn "Hãy giữ cho em bầu trời xanh" + nhạc cụ', [
    Q('Recorder là?', ['Sáo dọc của phương Tây','Đàn dây','Trống','Đàn phím'], 0, 'Recorder là sáo dọc thường dùng trong trường học.'),
    Q('Recorder thổi bằng?', ['Hơi qua đầu thổi','Tay đánh','Que gõ','Pin'], 0, 'Recorder thổi bằng hơi qua đầu thổi.'),
    Q('Bấm nốt Si trên recorder?', ['Bịt kín lỗ ngón cái và lỗ ngón trỏ','Mở hết','Bịt hết','Tuỳ ý'], 0, 'Nốt Si bịt ngón cái và ngón trỏ.'),
    Q('Khi thổi recorder, em nên?', ['Thổi nhẹ và đều','Thổi rất mạnh','Cắn ống','Lắc đầu'], 0, 'Thổi nhẹ và đều cho âm thanh trong.'),
  ]),

  M(6, 'Tập đọc nhạc số 2', [
    Q('Trường độ nốt đen?', ['1 phách','2 phách','4 phách','Nửa phách'], 0, 'Nốt đen có trường độ 1 phách.'),
    Q('Nốt trắng có giá trị?', ['2 phách','1 phách','4 phách','Nửa phách'], 0, 'Nốt trắng = 2 phách.'),
    Q('Nốt tròn có giá trị?', ['4 phách','2 phách','1 phách','8 phách'], 0, 'Nốt tròn = 4 phách.'),
    Q('Dấu lặng đen là?', ['Khoảng nghỉ 1 phách','Nốt 1 phách','Khoảng nghỉ 2 phách','Khoảng nghỉ 4 phách'], 0, 'Dấu lặng đen nghỉ 1 phách.'),
  ]),

  M(7, 'Học hát "Con chim hay hót"', [
    Q('"Con chim hay hót" do ai sáng tác?', ['Phan Huỳnh Điểu','Văn Cao','Phạm Tuyên','Trịnh Công Sơn'], 0, '"Con chim hay hót" của Phan Huỳnh Điểu (phổ thơ).'),
    Q('Bài hát có tính chất?', ['Hồn nhiên, vui tươi','Buồn bã','Bi tráng','Trầm tư'], 0, 'Tính chất hồn nhiên, vui tươi.'),
    Q('Bài hát phỏng theo?', ['Đồng dao','Hò','Lý','Tuồng'], 0, 'Phỏng theo đồng dao Việt Nam.'),
    Q('Khi hát, gõ đệm bằng?', ['Phách hoặc thanh phách','Trống lớn','Đàn organ','Pianô'], 0, 'Gõ đệm bằng nhạc cụ gõ nhỏ.'),
  ]),

  M(8, 'Ôn tập 2 bài hát + Ôn TĐN', [
    Q('Khi ôn 2 bài hát, em nên?', ['Hát đúng giai điệu, lời ca','Quên lời','Hát sai nhịp','Bỏ qua'], 0, 'Hát đúng giai điệu và lời ca.'),
    Q('Lưu ý khi đọc nhạc?', ['Đúng cao độ, đúng trường độ','Đọc nhanh','Đọc to hết sức','Đọc tuỳ ý'], 0, 'Đúng cao độ và trường độ là quan trọng.'),
    Q('Sắc thái bài "Hãy giữ cho em bầu trời xanh"?', ['Trong sáng, tha thiết','Mạnh mẽ','Buồn','Hài hước'], 0, 'Trong sáng, tha thiết.'),
    Q('Bài "Reo vang bình minh" sắc thái?', ['Vui tươi, rộn ràng','Buồn bã','Trầm lắng','Bi tráng'], 0, 'Vui tươi, rộn ràng.'),
  ]),

  M(9, 'Học hát "Những bông hoa, những bài ca"', [
    Q('"Những bông hoa, những bài ca" do ai sáng tác?', ['Hoàng Long','Văn Cao','Phạm Tuyên','Trịnh Công Sơn'], 0, '"Những bông hoa, những bài ca" của Hoàng Long.'),
    Q('Bài hát viết về?', ['Thầy cô giáo','Mẹ','Quê hương','Mùa xuân'], 0, 'Bài hát ca ngợi thầy cô giáo.'),
    Q('Phù hợp dịp nào?', ['20/11 — Ngày Nhà giáo VN','Tết','2/9','8/3'], 0, 'Phù hợp Ngày Nhà giáo Việt Nam.'),
    Q('Sắc thái bài hát?', ['Tươi vui, trìu mến','Buồn','Dữ dội','Hài hước'], 0, 'Tươi vui và trìu mến.'),
  ]),

  M(10, 'Ôn "Những bông hoa, những bài ca" + TĐN số 3', [
    Q('Nhịp 2/4 nghĩa là?', ['Mỗi ô nhịp 2 phách, mỗi phách bằng nốt đen','Mỗi ô 4 phách','Mỗi ô 3 phách','Mỗi ô 6 phách'], 0, '2/4: 2 phách, đơn vị là nốt đen.'),
    Q('Trong nhịp 2/4, phách 1 là?', ['Phách mạnh','Phách nhẹ','Phách yếu','Không có'], 0, 'Phách 1 luôn là phách mạnh.'),
    Q('Vạch nhịp dùng để?', ['Chia ô nhịp','Trang trí','Đánh dấu kết','Không dùng'], 0, 'Vạch nhịp chia khuông thành các ô.'),
    Q('Vạch kết bài là?', ['Vạch nhịp đôi đậm','Vạch đơn','Dấu chấm','Dấu hỏi'], 0, 'Vạch nhịp đôi đậm là vạch kết bài.'),
  ]),

  M(11, 'Nhạc cụ dân tộc — Đàn tranh', [
    Q('Đàn tranh có bao nhiêu dây phổ biến?', ['16 dây','6 dây','4 dây','12 dây'], 0, 'Đàn tranh Việt Nam phổ biến 16 dây.'),
    Q('Đàn tranh thuộc nhóm?', ['Nhạc cụ dây gảy','Nhạc cụ gõ','Nhạc cụ hơi','Nhạc cụ điện'], 0, 'Đàn tranh là nhạc cụ dây gảy.'),
    Q('Cách chơi đàn tranh?', ['Gảy dây bằng móng tay đeo','Thổi hơi','Gõ búa','Bấm phím'], 0, 'Gảy dây bằng móng đeo trên ngón.'),
    Q('Đàn tranh có âm sắc?', ['Trong, ngân vang','Trầm, đục','Ngắn, gọn','Chát chúa'], 0, 'Âm trong và ngân vang.'),
  ]),

  M(12, 'Nhạc cụ dân tộc — Đàn nhị', [
    Q('Đàn nhị có?', ['2 dây','4 dây','6 dây','16 dây'], 0, 'Đàn nhị có 2 dây (nên gọi là "nhị").'),
    Q('Đàn nhị chơi bằng?', ['Kéo cung','Gảy tay','Thổi hơi','Gõ búa'], 0, 'Kéo bằng cung (vĩ).'),
    Q('Đàn nhị thuộc nhóm?', ['Nhạc cụ dây kéo','Nhạc cụ gõ','Nhạc cụ hơi','Nhạc cụ phím'], 0, 'Là nhạc cụ dây kéo.'),
    Q('Đàn nhị thường dùng trong?', ['Hát chèo, hát văn, dân ca','Nhạc pop quốc tế','Nhạc rock','EDM'], 0, 'Đàn nhị dùng trong nhạc dân tộc VN.'),
  ]),

  M(13, 'Nhạc cụ dân tộc — Sáo trúc', [
    Q('Sáo trúc thổi bằng?', ['Hơi qua lỗ thổi ngang','Hơi qua đầu thổi','Bằng tay','Bằng búa'], 0, 'Sáo trúc thổi ngang qua lỗ thổi.'),
    Q('Sáo trúc làm bằng?', ['Cây trúc','Kim loại','Nhựa hoàn toàn','Gỗ cứng'], 0, 'Làm từ cây trúc tự nhiên.'),
    Q('Sáo trúc thuộc nhóm?', ['Nhạc cụ hơi','Nhạc cụ dây','Nhạc cụ gõ','Nhạc cụ phím'], 0, 'Là nhạc cụ hơi.'),
    Q('Sáo trúc có âm sắc?', ['Trong, du dương','Trầm đục','Chát','Khô'], 0, 'Âm trong và du dương.'),
  ]),

  M(14, 'Nhạc cụ dân tộc — Cồng chiêng', [
    Q('Cồng chiêng là?', ['Nhạc cụ gõ bằng đồng','Nhạc cụ dây','Nhạc cụ hơi','Nhạc cụ phím'], 0, 'Cồng chiêng là nhạc cụ gõ bằng đồng.'),
    Q('Cồng chiêng nổi tiếng ở?', ['Tây Nguyên','Đồng bằng sông Hồng','TP.HCM','Hà Nội'], 0, 'Cồng chiêng Tây Nguyên nổi tiếng.'),
    Q('Không gian văn hoá cồng chiêng được UNESCO công nhận là?', ['Di sản văn hoá phi vật thể nhân loại','Di sản vật thể','Không gì cả','Bí mật'], 0, 'UNESCO công nhận là di sản văn hoá phi vật thể.'),
    Q('Cồng chiêng dùng trong?', ['Lễ hội, sinh hoạt cộng đồng Tây Nguyên','Quán cà phê','Tiệc cưới Tây','Lễ hội Halloween'], 0, 'Dùng trong lễ hội cộng đồng Tây Nguyên.'),
  ]),

  M(15, 'Học hát "Ước mơ" (nhạc Trung Quốc, lời Việt)', [
    Q('Bài "Ước mơ" là bài hát nước ngoài lời Việt do?', ['An Hoà đặt lời','Tự do','Văn Cao','Phạm Tuyên'], 0, '"Ước mơ" nhạc TQ, An Hoà đặt lời Việt.'),
    Q('Nội dung bài hát?', ['Ước mơ tốt đẹp của trẻ em','Chiến tranh','Lao động vất vả','Buồn bã'], 0, 'Ước mơ đẹp của tuổi học trò.'),
    Q('Sắc thái?', ['Mơ màng, tha thiết','Mạnh mẽ','Hài hước','Bi tráng'], 0, 'Mơ màng, tha thiết.'),
    Q('Khi hát, em nên?', ['Hát đúng cao độ và lời','Hát to nhất','Hét','Cười lớn'], 0, 'Đúng cao độ và lời mới hay.'),
  ]),

  M(16, 'Ôn "Ước mơ" + TĐN số 4', [
    Q('Dấu lặng nghĩa là?', ['Im lặng theo trường độ','Hát to','Hát nhanh','Hát chậm'], 0, 'Dấu lặng = nghỉ theo trường độ.'),
    Q('Dấu nối nối 2 nốt cùng cao độ để?', ['Kéo dài trường độ','Hát rời','Hát to','Đổi giọng'], 0, 'Dấu nối kéo dài trường độ.'),
    Q('Dấu luyến nối 2 nốt khác cao độ để?', ['Hát liền tiếng','Hát rời','Hát to','Im lặng'], 0, 'Dấu luyến hát liền tiếng nhau.'),
    Q('Tốc độ "vừa phải" tiếng Ý là?', ['Moderato','Allegro','Adagio','Presto'], 0, 'Moderato = vừa phải.'),
  ]),

  M(17, 'Ôn tập cuối HK1', [
    Q('Cuối HK1 em đã học mấy bài hát chính?', ['4 bài','1 bài','10 bài','Không bài nào'], 0, 'Khoảng 4 bài chính trong HK1.'),
    Q('Nhạc cụ dân tộc đã học?', ['Đàn tranh, đàn nhị, sáo trúc, cồng chiêng','Pianô','Guitar điện','Trống jazz'], 0, 'Đã học 4 nhạc cụ dân tộc trên.'),
    Q('Khi biểu diễn, em nên?', ['Tự tin, hát đúng','Run, quên lời','Hét','Bỏ chạy'], 0, 'Tự tin và hát đúng là tốt.'),
    Q('Sắc thái "Hãy giữ cho em bầu trời xanh"?', ['Trong sáng, tha thiết','Buồn','Bi tráng','Hài hước'], 0, 'Trong sáng, tha thiết.'),
  ]),

  M(18, 'Kiểm tra HK1', [
    Q('Khi kiểm tra, em nên?', ['Tự tin, hát đúng','Run, quên','Hét','Khóc'], 0, 'Tự tin và đúng.'),
    Q('Hát cá nhân cần chú ý?', ['Hơi, cao độ, lời ca','Hét to','Nhanh','Cười'], 0, 'Hơi, cao độ, lời là 3 yếu tố quan trọng.'),
    Q('Đọc nhạc cần?', ['Đúng cao độ và trường độ','Đọc nhanh','Đọc to','Tuỳ ý'], 0, 'Đúng cao độ và trường độ.'),
    Q('Thái độ khi nghe bạn hát?', ['Lắng nghe, vỗ tay','Cười nhạo','Nói chuyện','Bỏ ra ngoài'], 0, 'Lắng nghe và động viên.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Học hát "Hát mừng" (dân ca Hrê)', [
    Q('"Hát mừng" là dân ca?', ['Hrê (Tây Nguyên)','Bắc Bộ','Nam Bộ','Hàn Quốc'], 0, '"Hát mừng" là dân ca Hrê.'),
    Q('Tính chất bài?', ['Vui tươi, rộn ràng','Buồn','Trầm lắng','Bi tráng'], 0, 'Vui tươi, rộn ràng kiểu lễ hội Tây Nguyên.'),
    Q('Nhạc cụ phù hợp đệm?', ['Cồng chiêng, trống','Guitar điện','Pianô','Saxophone'], 0, 'Cồng chiêng và trống phù hợp dân ca Tây Nguyên.'),
    Q('Khi hát em nên?', ['Vui tươi, gõ đệm theo','Buồn bã','Im lặng','Nhanh quá độ'], 0, 'Vui tươi, gõ đệm theo nhịp.'),
  ]),

  M(20, 'Ôn "Hát mừng" + TĐN số 5', [
    Q('Nhịp 4/4 nghĩa là?', ['4 phách/ô, đơn vị là nốt đen','2 phách','3 phách','6 phách'], 0, '4/4: 4 phách/ô, đơn vị nốt đen.'),
    Q('Trong 4/4, phách mạnh nhất ở?', ['Phách 1','Phách 2','Phách 3','Phách 4'], 0, 'Phách 1 mạnh nhất.'),
    Q('Phách mạnh vừa trong 4/4 ở?', ['Phách 3','Phách 2','Phách 4','Không có'], 0, 'Phách 3 mạnh vừa, phách 2 và 4 nhẹ.'),
    Q('Nhịp 4/4 hay dùng cho?', ['Nhạc trữ tình, nhạc nhẹ','Hành khúc','Vọng cổ','Tế lễ'], 0, '4/4 phổ biến cho nhạc trữ tình.'),
  ]),

  M(21, 'Học hát "Tre ngà bên Lăng Bác"', [
    Q('"Tre ngà bên Lăng Bác" do ai sáng tác?', ['Hàn Ngọc Bích','Văn Cao','Phạm Tuyên','Trịnh Công Sơn'], 0, '"Tre ngà bên Lăng Bác" của Hàn Ngọc Bích.'),
    Q('Nội dung bài hát?', ['Ca ngợi Bác Hồ, Lăng Bác','Mùa xuân','Tình bạn','Học tập'], 0, 'Ca ngợi Bác Hồ qua hình ảnh tre ngà bên Lăng.'),
    Q('Sắc thái bài?', ['Tha thiết, trang nghiêm','Vui nhộn','Hài hước','Dữ dội'], 0, 'Tha thiết, trang nghiêm.'),
    Q('Lăng Bác Hồ ở?', ['Quảng trường Ba Đình, Hà Nội','TP.HCM','Đà Nẵng','Huế'], 0, 'Lăng Bác ở Quảng trường Ba Đình, Hà Nội.'),
  ]),

  M(22, 'Ôn "Tre ngà bên Lăng Bác" + TĐN số 6', [
    Q('Tiết tấu chấm dôi là?', ['Tăng thêm 1/2 trường độ nốt đứng trước','Giảm trường độ','Im lặng','Đổi cao độ'], 0, 'Dấu chấm dôi tăng thêm 1/2.'),
    Q('Nốt đen chấm dôi có giá trị?', ['1.5 phách','1 phách','2 phách','0.5 phách'], 0, 'Đen chấm dôi = 1 + 0.5 = 1.5 phách.'),
    Q('Khi đọc tiết tấu chấm dôi, cần?', ['Giữ đúng độ dài','Đọc nhanh','Bỏ qua','Đọc tuỳ ý'], 0, 'Giữ đúng độ dài chấm dôi.'),
    Q('Khi hát có chấm dôi?', ['Ngân đủ thời gian','Hát nhanh','Bỏ qua','Hét'], 0, 'Phải ngân đủ thời gian.'),
  ]),

  M(23, 'Học hát "Màu xanh quê hương"', [
    Q('"Màu xanh quê hương" là dân ca?', ['Khmer Nam Bộ','Bắc Bộ','Trung Bộ','Tây Nguyên'], 0, 'Dân ca Khmer Nam Bộ (lời Việt).'),
    Q('Bài hát ca ngợi?', ['Quê hương tươi đẹp','Chiến tranh','Lao động vất vả','Học tập'], 0, 'Quê hương tươi đẹp, màu xanh.'),
    Q('Sắc thái?', ['Vui tươi, trong sáng','Buồn bã','Dữ dội','Trầm lắng'], 0, 'Vui tươi và trong sáng.'),
    Q('Khi hát em nên?', ['Hát đúng giai điệu dân ca','Hát kiểu rock','Hét','Hát nhanh'], 0, 'Giữ chất dân ca khi hát.'),
  ]),

  M(24, 'Ôn "Màu xanh quê hương" + giới thiệu hợp xướng', [
    Q('Hợp xướng là?', ['Hát nhiều bè cùng lúc','Hát đơn','Hét','Đọc thơ'], 0, 'Hợp xướng là hát nhiều bè cùng lúc.'),
    Q('Hợp xướng nhiều bè giúp?', ['Âm thanh phong phú, đẹp','Khó nghe','Lệch nhịp','Tệ hơn'], 0, 'Nhiều bè làm âm thanh phong phú.'),
    Q('Trong hợp xướng, em cần?', ['Hát đúng bè của mình, nghe các bè khác','Hét to nhất','Át bè khác','Hát lung tung'], 0, 'Đúng bè và biết nghe bè khác.'),
    Q('Các giọng cơ bản trong hợp xướng?', ['Soprano, alto, tenor, bass','Đỏ, vàng, xanh','1, 2, 3, 4','Không có'], 0, '4 giọng cơ bản của hợp xướng.'),
  ]),

  M(25, 'Học hát "Em vẫn nhớ trường xưa"', [
    Q('"Em vẫn nhớ trường xưa" do ai sáng tác?', ['Thanh Sơn','Văn Cao','Phạm Tuyên','Trịnh Công Sơn'], 0, '"Em vẫn nhớ trường xưa" của Thanh Sơn.'),
    Q('Nội dung bài hát?', ['Tình cảm với mái trường','Mùa xuân','Quê hương','Chiến tranh'], 0, 'Tình cảm sâu sắc với mái trường.'),
    Q('Sắc thái?', ['Tha thiết, sâu lắng','Dữ dội','Hài hước','Vui nhộn'], 0, 'Tha thiết, sâu lắng.'),
    Q('Phù hợp dịp?', ['Lễ ra trường, kỉ niệm trường','Tết','Quốc khánh','8/3'], 0, 'Phù hợp lễ ra trường tiểu học.'),
  ]),

  M(26, 'Ôn "Em vẫn nhớ trường xưa" + recorder', [
    Q('Bấm nốt La trên recorder?', ['Bịt ngón cái, ngón trỏ, ngón giữa','Mở hết','Bịt hết','Tuỳ ý'], 0, 'Nốt La bịt 3 ngón đầu.'),
    Q('Khi thổi recorder, lưỡi?', ['Dùng để ngắt âm "tu-tu"','Để yên','Đẩy ra','Cuộn lại'], 0, 'Lưỡi ngắt âm bằng "tu-tu".'),
    Q('Recorder cần giữ?', ['Sạch sẽ, lau khô sau dùng','Bẩn cũng được','Để ướt','Vứt bừa'], 0, 'Giữ sạch và lau khô sau dùng.'),
    Q('Thổi recorder nhịp 4/4 cần?', ['Đúng phách, đều','Thổi tuỳ ý','Thổi rất nhanh','Thổi rất chậm'], 0, 'Đúng phách và đều đặn.'),
  ]),

  M(27, 'Học hát "Dàn đồng ca mùa hạ"', [
    Q('"Dàn đồng ca mùa hạ" do ai sáng tác?', ['Lê Minh Châu','Văn Cao','Phạm Tuyên','Phan Huỳnh Điểu'], 0, '"Dàn đồng ca mùa hạ" của Lê Minh Châu (phổ thơ).'),
    Q('Nội dung bài hát?', ['Âm thanh mùa hè qua tiếng ve','Tết','Mùa đông','Chiến tranh'], 0, 'Âm thanh ve sầu mùa hè.'),
    Q('Sắc thái?', ['Vui tươi, sôi nổi','Buồn','Trầm tư','Bi tráng'], 0, 'Vui tươi, sôi nổi.'),
    Q('Phù hợp dịp?', ['Cuối năm học, hè về','Tết','Trung thu','20/11'], 0, 'Phù hợp dịp hè về.'),
  ]),

  M(28, 'Ôn "Dàn đồng ca mùa hạ" + TĐN số 7', [
    Q('Nhịp 3/4 nghĩa là?', ['3 phách/ô, đơn vị là nốt đen','2 phách','4 phách','6 phách'], 0, '3/4: 3 phách/ô.'),
    Q('Trong 3/4, phách mạnh ở?', ['Phách 1','Phách 2','Phách 3','Không có'], 0, 'Phách 1 mạnh, 2 và 3 nhẹ.'),
    Q('Nhịp 3/4 hay dùng cho?', ['Điệu valse','Hành khúc','Vọng cổ','Rock'], 0, 'Valse là điệu nhảy 3/4.'),
    Q('Đọc TĐN nhịp 3/4 cần?', ['Nhấn phách 1','Nhấn phách 4','Không nhấn','Đọc lung tung'], 0, 'Nhấn vào phách 1.'),
  ]),

  M(29, 'Nghe nhạc — tác phẩm hoà tấu dân tộc', [
    Q('Hoà tấu dân tộc là?', ['Nhiều nhạc cụ dân tộc cùng chơi','Một nhạc cụ','Hát một mình','Đọc thơ'], 0, 'Nhiều nhạc cụ dân tộc cùng chơi tác phẩm.'),
    Q('Khi nghe hoà tấu, em nên?', ['Lắng nghe yên lặng và cảm nhận','Nói chuyện','Bỏ ra ngoài','Cười'], 0, 'Lắng nghe và cảm nhận.'),
    Q('Tác phẩm nổi tiếng cho đàn tranh?', ['"Lý ngựa ô"','"Tiến quân ca"','"Như có Bác"','"Trống cơm"'], 0, 'Đàn tranh hay chơi các điệu dân ca như Lý ngựa ô.'),
    Q('Lợi ích nghe nhạc dân tộc?', ['Hiểu và yêu văn hoá dân tộc','Mệt mỏi','Không gì','Mất thời gian'], 0, 'Hiểu và yêu văn hoá dân tộc.'),
  ]),

  M(30, 'Hợp xướng 2 bè đơn giản', [
    Q('Hợp xướng 2 bè là?', ['Hai nhóm hát 2 giai điệu khác nhau cùng lúc','Một nhóm hát','Hai nhóm hát giống nhau','Một bài đọc'], 0, '2 bè hát 2 giai điệu khác nhau cùng lúc.'),
    Q('Trong 2 bè, bè cao gọi?', ['Bè 1 (giọng cao)','Bè 2','Bè trầm','Bè giữa'], 0, 'Bè 1 thường là giọng cao.'),
    Q('Khi hát 2 bè, em cần?', ['Giữ đúng bè, không bị bè kia lôi','Hét to','Hát theo bè khác','Hát lung tung'], 0, 'Giữ đúng bè của mình.'),
    Q('Hợp xướng 2 bè tạo cảm giác?', ['Phong phú, đầy đặn','Loạn','Nghèo nàn','Khó nghe'], 0, 'Tạo cảm giác phong phú.'),
  ]),

  M(31, 'Ôn tập 4 bài hát HK2', [
    Q('Bài "Hát mừng" là?', ['Dân ca Hrê','Dân ca Bắc Bộ','Sáng tác mới','Nhạc Tây'], 0, 'Dân ca Hrê (Tây Nguyên).'),
    Q('"Tre ngà bên Lăng Bác" ca ngợi?', ['Bác Hồ','Mẹ','Quê hương','Mùa xuân'], 0, 'Ca ngợi Bác Hồ.'),
    Q('"Màu xanh quê hương" là dân ca?', ['Khmer Nam Bộ','Bắc Bộ','Tây Nguyên','Trung Bộ'], 0, 'Dân ca Khmer Nam Bộ.'),
    Q('"Em vẫn nhớ trường xưa" sắc thái?', ['Tha thiết, sâu lắng','Vui nhộn','Bi tráng','Hài hước'], 0, 'Tha thiết, sâu lắng.'),
  ]),

  M(32, 'Ôn tập TĐN', [
    Q('Để đọc TĐN tốt em cần?', ['Nắm tên nốt, trường độ và đọc đúng','Đọc nhanh','Đọc to','Tuỳ ý'], 0, 'Nắm tên nốt và trường độ.'),
    Q('Vị trí nốt Đô (giữa)?', ['Dưới dòng 1 (trên dòng kẻ phụ)','Dòng 5','Khe 4','Trên dòng 5'], 0, 'Đô giữa nằm ngay dưới dòng 1.'),
    Q('Vị trí nốt Son?', ['Dòng 2','Dòng 5','Khe 4','Trên dòng 5'], 0, 'Nốt Son ở dòng 2.'),
    Q('Đọc gam Đô trưởng đi lên?', ['Đô Rê Mi Pha Son La Si Đô','Đô La Si','Si Đô Rê','Pha Son'], 0, 'Gam Đô trưởng từ Đô đi lên 1 quãng 8.'),
  ]),

  M(33, 'Biểu diễn — tiết mục tự chọn', [
    Q('Khi biểu diễn em nên?', ['Tự tin, đúng giai điệu, sắc thái phù hợp','Run, quên lời','Hét','Bỏ chạy'], 0, 'Tự tin và đúng sắc thái.'),
    Q('Trang phục biểu diễn?', ['Gọn gàng, phù hợp bài','Áo bẩn','Quần ngắn lệch','Tuỳ ý'], 0, 'Gọn gàng và phù hợp.'),
    Q('Khi lên sân khấu em nên?', ['Chào khán giả','Bỏ đi','Cúi gằm','Không chào'], 0, 'Chào khán giả là phép lịch sự.'),
    Q('Khi nghe bạn biểu diễn em nên?', ['Lắng nghe, vỗ tay khích lệ','Cười nhạo','Nói chuyện','Bỏ ra ngoài'], 0, 'Lắng nghe và vỗ tay động viên.'),
  ]),

  M(34, 'Ôn tập cuối năm', [
    Q('Cả năm em đã học mấy bài hát chính?', ['Khoảng 8 bài','1 bài','30 bài','Không bài nào'], 0, 'Khoảng 8 bài chính cả năm.'),
    Q('Nhạc cụ dân tộc đã học?', ['Đàn tranh, đàn nhị, sáo trúc, cồng chiêng','Pianô','Guitar điện','Trống jazz'], 0, '4 nhạc cụ dân tộc.'),
    Q('Lý thuyết nhịp đã học?', ['2/4, 3/4, 4/4','Chỉ 2/4','Chỉ 4/4','Không có'], 0, 'Đã học 2/4, 3/4, 4/4.'),
    Q('Khi rời cấp 1, em vẫn nên?', ['Tiếp tục yêu âm nhạc','Bỏ học','Quên hết','Chỉ nghe pop'], 0, 'Tiếp tục yêu âm nhạc.'),
  ]),

  M(35, 'Kiểm tra cuối năm — biểu diễn', [
    Q('Kiểm tra cuối năm gồm?', ['Hát, đọc nhạc, nhận biết nhạc cụ','Chỉ hát','Chỉ đọc','Chỉ nghe'], 0, 'Tổng hợp các nội dung đã học.'),
    Q('Tự đánh giá em đã tiến bộ ở?', ['Hát đúng hơn, hiểu nhạc dân tộc','Không có gì','Tệ hơn','Lười hơn'], 0, 'Tự nhìn lại sự tiến bộ của mình.'),
    Q('Sau cấp 1 em sẽ?', ['Học tiếp âm nhạc ở cấp 2','Quên hết','Bỏ học','Không quan tâm'], 0, 'Tiếp tục học âm nhạc ở cấp 2.'),
    Q('Lời tạm biệt thầy cô môn nhạc?', ['Cảm ơn và hứa giữ tình yêu âm nhạc','Im lặng','Trêu chọc','Bỏ về'], 0, 'Lời cảm ơn chân thành.'),
  ]),
];

export const P5AN_SCENARIOS = indexBy(P5AN_WEEKS);
