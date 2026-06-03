// ============================================================
// Lớp 3 · ÂM NHẠC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 môn Âm nhạc Lớp 3.
// ID prefix: "P3AN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3AN', 'am-nhac', n, title, qs, opts);

export const P3AN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Quốc ca Việt Nam', [
    Q('Bài Quốc ca Việt Nam tên đầy đủ là gì?', ['Tiến quân ca', 'Lên đàng', 'Bác đang cùng chúng cháu hành quân', 'Trường ca sông Lô'], 0, '"Tiến quân ca" do nhạc sĩ Văn Cao sáng tác là Quốc ca.'),
    Q('Tác giả Quốc ca Việt Nam là?', ['Nguyễn Văn Tý', 'Trịnh Công Sơn', 'Phạm Tuyên', 'Văn Cao'], 3, 'Văn Cao sáng tác Tiến quân ca năm 1944.'),
    Q('Khi hát Quốc ca, em nên?', ['Quay lưng đi', 'Hát thầm rất nhỏ', 'Vừa hát vừa cười đùa', 'Đứng nghiêm, hát to và rõ ràng'], 3, 'Hát Quốc ca cần trang nghiêm, dõng dạc.'),
    Q('Câu mở đầu Quốc ca là?', ['"Ai yêu Bác Hồ…"', '"Đoàn quân Việt Nam đi…"', '"Em yêu trường em…"', '"Như có Bác Hồ…"'], 1, '"Đoàn quân Việt Nam đi…" là câu mở đầu Quốc ca.'),
    Q('Quốc ca thường được hát trong dịp nào ở trường?', ['Giờ ra chơi', 'Khi ăn trưa', 'Lễ chào cờ đầu tuần', 'Khi đi vệ sinh'], 2, 'Quốc ca hát trong lễ chào cờ trang trọng.'),
  ]),

  M(2, 'Bài hát "Quốc ca" — Tập hát chuẩn', [
    Q('Khi hát Quốc ca, tay em đặt ở đâu?', ['Để trong túi', 'Chống nạnh', 'Để xuôi theo thân hoặc đặt lên trái tim', 'Vung tay loạn xạ'], 2, 'Tư thế nghiêm trang khi hát Quốc ca.'),
    Q('Khi hát sai lời Quốc ca, em nên?', ['Bỏ không hát', 'Cố gắng tập lại cho đúng', 'Hát to hơn để át đi', 'Cười cho qua'], 1, 'Quốc ca rất quan trọng, cần hát đúng lời.'),
    Q('Trong lời Quốc ca có nhắc đến hình ảnh gì?', ['Cánh đồng lúa', 'Cờ in máu chiến thắng', 'Biển cả', 'Đêm trăng'], 1, '"Cờ in máu chiến thắng mang hồn nước" là câu trong Quốc ca.'),
    Q('Hát Quốc ca với nhịp độ thế nào?', ['Rất chậm như nhạc buồn', 'Lúc nhanh lúc chậm tuỳ thích', 'Vừa phải, hùng tráng', 'Cực nhanh như tập thể dục'], 2, 'Quốc ca có nhịp độ hùng tráng vừa phải.'),
    Q('Khi nghe Quốc ca vang lên ở nơi công cộng, em nên?', ['Đi tiếp như không nghe', 'Ngồi yên không quan tâm', 'Đứng dậy nghiêm trang', 'Cười nói to'], 2, 'Đứng nghiêm là tôn trọng Quốc ca.'),
  ]),

  M(3, 'Nhịp 2/4 và phách', [
    Q('Phách trong âm nhạc là?', ['Tên một bài hát', 'Một nhạc cụ', 'Một loại nốt nhạc', 'Đơn vị đều đặn để đếm thời gian âm nhạc'], 3, 'Phách là đơn vị đo nhịp đều.'),
    Q('Nhịp 2/4 có nghĩa là?', ['Mỗi phách có 2 nốt', 'Hát 2 lần', 'Bài hát chỉ có 2 câu', 'Mỗi ô nhịp có 2 phách'], 3, 'Nhịp 2/4: mỗi ô nhịp có 2 phách.'),
    Q('Trong nhịp 2/4, phách nào là phách mạnh?', ['Phách 1', 'Phách 2', 'Cả hai như nhau', 'Không có phách mạnh'], 0, 'Phách 1 mạnh, phách 2 nhẹ.'),
    Q('Em vỗ tay theo phách bài hát nghĩa là?', ['Vỗ một lần duy nhất', 'Mỗi phách vỗ một cái', 'Vỗ khi nào thích', 'Vỗ liên tục không nghỉ'], 1, 'Vỗ đều theo từng phách.'),
    Q('Bài hát nào thường viết ở nhịp 2/4?', ['Không có bài nào', 'Chỉ nhạc giao hưởng', 'Nhiều bài hát thiếu nhi vui tươi', 'Chỉ những bài buồn'], 2, 'Nhịp 2/4 phổ biến trong nhạc thiếu nhi.'),
  ]),

  M(4, 'Nhịp 3/4 — Nhịp valse', [
    Q('Nhịp 3/4 có nghĩa là?', ['Bài hát có 3 câu', 'Mỗi phách có 3 nốt', 'Hát 3 lần', 'Mỗi ô nhịp có 3 phách'], 3, 'Nhịp 3/4: mỗi ô nhịp có 3 phách.'),
    Q('Phách mạnh trong nhịp 3/4 là?', ['Phách 3', 'Cả phách 1 và phách 2 đều mạnh', 'Phách 2', 'Phách 1'], 3, 'Phách 1 là phách mạnh, 2 và 3 là phách nhẹ.'),
    Q('Nhịp 3/4 còn được gọi là?', ['Nhịp hành khúc', 'Nhịp rock', 'Nhịp jazz', 'Nhịp valse (van)'], 3, 'Nhịp 3/4 phổ biến trong điệu valse.'),
    Q('Cách đếm nhịp 3/4 là?', ['"1, 1, 1, 1…"', '"1 – 2, 1 – 2…"', '"1 – 2 – 3 – 4…"', '"1 – 2 – 3, 1 – 2 – 3…"'], 3, 'Đếm 1–2–3 lặp lại đều cho nhịp 3/4.'),
    Q('Bài "Đếm sao" được viết ở nhịp nào?', ['Nhịp 2/4', 'Nhịp 4/4', 'Nhịp 6/8', 'Nhịp 3/4'], 3, '"Đếm sao" của Văn Chung viết ở nhịp 3/4.'),
  ]),

  M(5, 'Bài hát "Đếm sao"', [
    Q('Tác giả bài "Đếm sao" là?', ['Văn Chung', 'Phạm Tuyên', 'Phong Nhã', 'Hoàng Lân'], 0, 'Nhạc sĩ Văn Chung sáng tác "Đếm sao".'),
    Q('Câu mở đầu bài "Đếm sao" là?', ['"Cả nhà thương nhau…"', '"Hai con thằn lằn con…"', '"Một ông sao sáng, hai ông sáng sao…"', '"Em yêu trường em…"'], 2, '"Một ông sao sáng, hai ông sáng sao" là câu mở đầu.'),
    Q('Bài "Đếm sao" có tính chất âm nhạc?', ['Hùng tráng', 'Sôi động', 'Buồn bã', 'Nhẹ nhàng, êm ái như hát ru'], 3, '"Đếm sao" có giai điệu nhẹ nhàng, êm ái.'),
    Q('Bài "Đếm sao" nói về điều gì?', ['Trường học', 'Bầu trời đêm với những vì sao', 'Quê hương', 'Mẹ con'], 1, 'Bài hát miêu tả bầu trời đêm sao đẹp.'),
    Q('Em nên hát "Đếm sao" thế nào?', ['Hát rất chậm như ru', 'Hát thật to và nhanh', 'Hét lên', 'Nhẹ nhàng, đếm rõ từng số'], 3, 'Hát nhẹ nhàng phù hợp với tính chất bài.'),
  ]),

  M(6, 'Nốt móc đơn', [
    Q('Nốt móc đơn có giá trị bằng?', ['Nửa phách (½ phách trong nhịp 2/4)', '1 phách', '4 phách', '2 phách'], 0, 'Nốt móc đơn = nửa phách.'),
    Q('Nốt móc đơn có hình dáng?', ['Hình tròn rỗng', 'Có thân và một dấu móc', 'Hình tròn đặc không thân', 'Hình vuông'], 1, 'Nốt móc đơn có cờ (dấu móc) ở đuôi.'),
    Q('Hai nốt móc đơn liền nhau có thể được?', ['Phải tô đỏ', 'Phải tách rời', 'Nối với nhau bằng một vạch ngang', 'Phải có dấu chấm'], 2, 'Hai móc đơn liền có thể nối thanh ngang.'),
    Q('Nốt nào DÀI HƠN nốt móc đơn?', ['Nốt móc kép', 'Nốt móc tam', 'Không có nốt nào dài hơn', 'Nốt đen (1 phách)'], 3, 'Nốt đen (1 phách) dài hơn móc đơn (½ phách).'),
    Q('Trong 1 phách (nốt đen) có bao nhiêu móc đơn?', ['2 móc đơn', '4 móc đơn', '1 móc đơn', '3 móc đơn'], 0, '1 nốt đen = 2 móc đơn.'),
  ]),

  M(7, 'Gõ đệm theo phách', [
    Q('Gõ đệm theo phách nghĩa là?', ['Gõ liên tục không nghỉ', 'Gõ khi nào thích', 'Mỗi phách gõ một lần đều đặn', 'Chỉ gõ phách đầu'], 2, 'Gõ đều mỗi phách.'),
    Q('Nhạc cụ thường dùng gõ đệm trong lớp là?', ['Saxophone', 'Thanh phách, song loan, trống nhỏ', 'Đàn piano', 'Đàn violin'], 1, 'Thanh phách, song loan là nhạc cụ gõ phổ biến.'),
    Q('Khi cả lớp gõ đệm, em nên?', ['Không gõ', 'Gõ tuỳ ý', 'Gõ đều, đúng nhịp với cả lớp', 'Gõ to hơn để nổi bật'], 2, 'Hợp tác đều để âm thanh hoà quyện.'),
    Q('Gõ đệm giúp em?', ['Đọc nhanh', 'Cảm thụ nhịp và phách của bài hát', 'Hát nhanh hơn', 'Học toán giỏi'], 1, 'Gõ đệm giúp cảm thụ nhịp điệu.'),
    Q('Trong nhịp 2/4, gõ phách mạnh thế nào?', ['Không phân biệt', 'Gõ mạnh ở phách 2', 'Gõ đều như nhau', 'Gõ mạnh ở phách 1, nhẹ ở phách 2'], 3, 'Phân biệt mạnh nhẹ cho âm nhạc sinh động.'),
  ]),

  M(8, 'Gõ đệm theo nhịp', [
    Q('Gõ đệm theo nhịp nghĩa là?', ['Không gõ gì', 'Gõ ngẫu nhiên', 'Gõ liên tục mọi phách', 'Mỗi ô nhịp gõ một lần (vào phách mạnh đầu ô)'], 3, 'Gõ vào đầu mỗi ô nhịp.'),
    Q('Trong nhịp 2/4, gõ theo nhịp tức là?', ['Gõ 2 lần mỗi ô', 'Gõ 3 lần mỗi ô', 'Gõ 1 lần vào phách 1 mỗi ô nhịp', 'Gõ 4 lần mỗi ô'], 2, 'Gõ phách mạnh đầu ô nhịp.'),
    Q('Gõ theo nhịp so với gõ theo phách thì?', ['Không liên quan', 'Dày hơn (gõ nhiều hơn)', 'Thưa hơn (ít gõ hơn)', 'Bằng nhau'], 2, 'Gõ nhịp thưa hơn gõ phách.'),
    Q('Bài tập gõ đệm theo nhịp giúp em?', ['Học toán', 'Nhận ra ô nhịp và phách mạnh', 'Viết chữ đẹp', 'Đá bóng giỏi'], 1, 'Cảm nhận cấu trúc nhịp.'),
    Q('Khi gõ đệm theo nhịp 3/4, em gõ?', ['3 lần mỗi ô', '1 lần vào phách 1 mỗi ô nhịp', 'Không gõ', 'Liên tục'], 1, 'Gõ một lần vào phách mạnh đầu ô.'),
  ]),

  M(9, 'Gõ đệm theo tiết tấu', [
    Q('Gõ đệm theo tiết tấu nghĩa là?', ['Gõ đầu ô nhịp', 'Gõ đều mỗi phách', 'Gõ ngẫu nhiên', 'Gõ theo độ dài và nhịp của từng nốt nhạc trong bài hát'], 3, 'Tiết tấu = mô hình độ dài các nốt.'),
    Q('Gõ tiết tấu khó hơn gõ phách vì?', ['Vì gõ to hơn', 'Vì gõ nhanh hơn', 'Vì gõ một mình', 'Phải gõ chính xác theo từng nốt dài ngắn khác nhau'], 3, 'Tiết tấu đòi hỏi cảm nhận độ dài từng nốt.'),
    Q('Ba kiểu gõ đệm trong âm nhạc Lớp 3 gồm?', ['Theo cao, theo thấp, theo dài', 'Theo lời, theo điệu, theo giọng', 'Theo phách, theo nhịp, theo tiết tấu', 'Theo nốt, theo quãng, theo hợp âm'], 2, '3 kiểu gõ đệm cơ bản.'),
    Q('Khi tập gõ tiết tấu, em nên?', ['Bỏ qua không tập', 'Tập nhanh ngay', 'Chỉ nghe người khác', 'Tập chậm và đúng trước, sau đó nhanh dần'], 3, 'Tập chậm và đúng là phương pháp đúng.'),
    Q('Gõ tiết tấu giúp em?', ['Không có tác dụng', 'Hát nhanh hơn người khác', 'Hát đúng nhịp và rõ lời', 'Át tiếng cô giáo'], 2, 'Cảm thụ tiết tấu giúp hát đúng nhịp.'),
  ]),

  M(10, 'Sáo recorder — Làm quen', [
    Q('Sáo recorder là?', ['Loại sáo nhựa dùng để học nhạc trong trường', 'Sáo trúc Việt Nam', 'Kèn đồng', 'Đàn ghita'], 0, 'Recorder là sáo dọc thường dùng trong trường học.'),
    Q('Cách giữ sáo recorder đúng là?', ['Hai tay đặt tuỳ thích', 'Tay trái phía trên, tay phải phía dưới', 'Cầm ngang', 'Tay phải phía trên'], 1, 'Tay trái trên, tay phải dưới là tư thế chuẩn.'),
    Q('Khi thổi sáo recorder, em nên?', ['Vừa thổi vừa nói', 'Hít thật nhanh', 'Thổi nhẹ và đều, không thổi quá mạnh', 'Thổi thật mạnh để to'], 2, 'Thổi nhẹ đều cho tiếng đẹp.'),
    Q('Trước khi thổi sáo, em nên?', ['Rửa tay, vệ sinh sáo sạch sẽ', 'Ăn kẹo trong miệng', 'Uống nước có đá', 'Không cần chuẩn bị'], 0, 'Vệ sinh sạch để sáo bền và sạch.'),
    Q('Khi thổi sai nốt, em nên?', ['Bỏ sáo', 'Thổi lại đúng, không bỏ cuộc', 'Đánh sáo xuống bàn', 'Chê sáo dở'], 1, 'Kiên trì luyện tập là cách học sáo.'),
  ]),

  M(11, 'Sáo recorder — Các nốt cơ bản', [
    Q('Khi không bịt lỗ nào trên sáo recorder, thổi ra nốt?', ['Đô (C)', 'Mi (E)', 'Fa (F)', 'Si (B)'], 3, 'Lỗ mở toàn bộ thường cho nốt cao.'),
    Q('Bịt lỗ tay trái (ngón trỏ + lỗ ngón cái sau) thường thổi nốt?', ['La (A)', 'Re (D)', 'Sol (G)', 'Đô (C)'], 0, 'Cách bấm phổ biến cho nốt La.'),
    Q('Để thổi đúng cao độ, em cần?', ['Để lỗ mở', 'Bịt nửa lỗ', 'Bịt kín lỗ và thổi đều hơi', 'Thổi rất mạnh'], 2, 'Bịt kín lỗ là kỹ thuật cơ bản.'),
    Q('Khi tập sáo, em nên tập?', ['Không cần tập', 'Cả bài ngay từ đầu', 'Từng nốt một, sau đó ghép câu nhạc', 'Bài khó nhất trước'], 2, 'Tập từng nốt rồi ghép là phương pháp hiệu quả.'),
    Q('Sáo recorder phổ biến trong trường là loại?', ['Soprano (sáo Soprano)', 'Bass (trầm rất lớn)', 'Không có loại nào', 'Contrabass'], 0, 'Soprano recorder là loại phổ biến nhất.'),
  ]),

  M(12, 'Bài hát "Em yêu trường em"', [
    Q('Tác giả bài "Em yêu trường em" là?', ['Văn Cao', 'Trịnh Công Sơn', 'Phạm Tuyên', 'Hoàng Vân'], 3, 'Nhạc sĩ Hoàng Vân sáng tác "Em yêu trường em".'),
    Q('Bài hát "Em yêu trường em" nói về?', ['Tình yêu của em với trường lớp, thầy cô, bạn bè', 'Đất nước', 'Tình cảm của em dành cho mẹ và gia đình', 'Quê hương'], 0, 'Bài hát thể hiện tình yêu trường.'),
    Q('Câu mở đầu bài "Em yêu trường em" là?', ['"Trường làng tôi cây xanh…"', '"Mái trường mến yêu…"', '"Bụi phấn rơi rơi…"', '"Em yêu trường em, với bao bạn thân…"'], 3, '"Em yêu trường em, với bao bạn thân…" là câu mở.'),
    Q('Tính chất bài "Em yêu trường em"?', ['Hùng tráng', 'Vui tươi, trong sáng', 'Trầm lắng', 'Buồn bã'], 1, 'Bài hát vui tươi, phù hợp tuổi học sinh.'),
    Q('Nên hát "Em yêu trường em" với cảm xúc?', ['Bực bội', 'Vui tươi, hồn nhiên', 'Cau có', 'Buồn bã'], 1, 'Cảm xúc vui tươi đúng tinh thần bài hát.'),
  ]),

  M(13, 'Hát bè đơn giản — Bè đôi', [
    Q('Hát bè đôi là?', ['Không có ai hát', 'Hai người hát cùng một câu', 'Một người hát to', 'Hai nhóm cùng hát hai phần khác nhau hoà quyện'], 3, 'Bè đôi tạo hoà âm.'),
    Q('Khi hát bè, em nên?', ['Hát to át nhóm khác', 'Nghe nhóm khác và giữ đúng bè của mình', 'Hát theo nhóm khác', 'Hát ngẫu nhiên'], 1, 'Lắng nghe để giữ đúng bè của mình.'),
    Q('Hát bè giúp bài hát?', ['Khó nghe hơn', 'Buồn hơn', 'Phong phú, đẹp và sinh động hơn', 'Không thay đổi'], 2, 'Bè tạo hoà âm phong phú.'),
    Q('Khi tập hát bè, em cần?', ['Tập riêng từng bè rồi ghép lại', 'Mỗi người tập một bài', 'Không cần tập', 'Tập ghép luôn từ đầu'], 0, 'Tập riêng rồi ghép là cách hiệu quả.'),
    Q('Bè cao và bè thấp khác nhau ở?', ['Tiết tấu', 'Số người', 'Lời bài hát', 'Cao độ — bè cao hát các nốt cao hơn'], 3, 'Bè cao – thấp khác nhau ở cao độ.'),
  ]),

  M(14, 'Dân ca Bắc Bộ', [
    Q('Dân ca Bắc Bộ nổi tiếng có?', ['Lý cây bông', 'Quan họ Bắc Ninh, Hát Xoan Phú Thọ', 'Ví dặm Nghệ Tĩnh', 'Đờn ca tài tử'], 1, 'Quan họ và Hát Xoan là dân ca Bắc Bộ.'),
    Q('Quan họ Bắc Ninh được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Không có gì', 'Kì quan thế giới', 'Di sản văn hoá phi vật thể đại diện của nhân loại'], 3, 'Quan họ được UNESCO ghi danh năm 2009.'),
    Q('Trang phục biểu diễn Quan họ là?', ['Áo bà ba', 'Áo tứ thân, nón quai thao', 'Áo dài tím', 'Áo cổ trang Trung Quốc'], 1, 'Liền anh – liền chị mặc áo tứ thân, nón quai thao.'),
    Q('Bài dân ca Bắc Bộ "Cò lả" thường có nội dung?', ['Tả phố thị', 'Tả cảnh đồng quê, con cò bay lả bay la', 'Tả biển', 'Tả chiến tranh'], 1, '"Cò lả" tả cảnh đồng quê Bắc Bộ.'),
    Q('Đặc trưng giai điệu dân ca Bắc Bộ?', ['Buồn thảm', 'Sôi động như nhạc rock', 'Mềm mại, tinh tế, có nhiều luyến láy', 'Cứng cỏi như hành khúc'], 2, 'Dân ca Bắc Bộ giàu luyến láy.'),
  ]),

  M(15, 'Dân ca Trung Bộ', [
    Q('Dân ca Trung Bộ nổi tiếng có?', ['Hát Xoan', 'Đờn ca tài tử Nam Bộ', 'Quan họ', 'Ví dặm Nghệ Tĩnh, Hò Huế'], 3, 'Ví dặm và Hò Huế là dân ca Trung Bộ.'),
    Q('Ví, Giặm Nghệ Tĩnh được UNESCO công nhận năm?', ['2000', '2020', '2014', '1990'], 2, 'Dân ca Ví, Giặm Nghệ Tĩnh được ghi danh năm 2014.'),
    Q('Hò Huế thường được hát ở đâu?', ['Trong nhà tù', 'Trên núi', 'Trên sông Hương', 'Trong rạp hát'], 2, 'Hò Huế gắn với sông Hương xứ Huế.'),
    Q('Đặc trưng dân ca miền Trung?', ['Da diết, sâu lắng', 'Lạnh lùng', 'Vui nhộn ồn ào', 'Hùng tráng quân hành'], 0, 'Dân ca miền Trung da diết, sâu lắng.'),
    Q('Bài "Lý ngựa ô" là dân ca vùng nào?', ['Tây Bắc', 'Chỉ Bắc Bộ', 'Tây Nguyên', 'Có cả Huế và Nam Bộ với phiên bản khác nhau'], 3, 'Lý ngựa ô có nhiều phiên bản theo vùng.'),
  ]),

  M(16, 'Dân ca Nam Bộ', [
    Q('Dân ca Nam Bộ nổi tiếng có?', ['Quan họ', 'Hát Xoan', 'Đờn ca tài tử, các điệu Lý', 'Hò Huế'], 2, 'Đờn ca tài tử và điệu Lý là dân ca Nam Bộ.'),
    Q('Đờn ca tài tử Nam Bộ được UNESCO công nhận năm?', ['1995', '2000', '2020', '2013'], 3, 'Đờn ca tài tử được ghi danh năm 2013.'),
    Q('Bài dân ca Nam Bộ "Lý cây bông" có giai điệu?', ['Vui tươi, mộc mạc', 'Hùng tráng', 'Trầm lắng', 'Buồn thảm'], 0, 'Lý cây bông vui tươi, mộc mạc.'),
    Q('Trang phục truyền thống Nam Bộ là?', ['Áo nhung', 'Áo bà ba và khăn rằn', 'Áo dài tím', 'Áo tứ thân'], 1, 'Áo bà ba là trang phục Nam Bộ.'),
    Q('Đặc trưng giai điệu dân ca Nam Bộ?', ['Không có đặc trưng', 'Da diết sâu lắng', 'Cứng cỏi như hành khúc', 'Mộc mạc, gần gũi, đậm chất sông nước'], 3, 'Dân ca Nam Bộ mộc mạc, mang hơi thở sông nước.'),
  ]),

  M(17, 'Nhạc cụ dân tộc — Đàn bầu, đàn tranh', [
    Q('Đàn bầu là nhạc cụ?', ['Của Tây Phương', 'Của Trung Quốc', 'Có 6 dây', 'Truyền thống Việt Nam, chỉ có 1 dây'], 3, 'Đàn bầu là độc đáo của Việt Nam — chỉ 1 dây.'),
    Q('Đàn tranh có mấy dây?', ['16 dây (đàn tranh truyền thống)', '6 dây', '1 dây', '4 dây'], 0, 'Đàn tranh có 16 dây (có loại 17, 21 dây).'),
    Q('Cách chơi đàn bầu là?', ['Dùng que gảy và tay nhấn cần đàn', 'Thổi như sáo', 'Đánh trống', 'Vỗ tay'], 0, 'Đàn bầu chơi bằng que gảy + tay nhấn cần.'),
    Q('Đàn bầu, đàn tranh thường dùng trong?', ['Nhạc rock', 'Nhạc cổ truyền, dân ca Việt Nam', 'Nhạc điện tử', 'Nhạc rap'], 1, 'Hai nhạc cụ này gắn với nhạc cổ truyền.'),
    Q('Em cần làm gì với nhạc cụ dân tộc?', ['Chê là quê mùa', 'Trân trọng, gìn giữ và giới thiệu cho bạn bè', 'Coi thường vì cũ', 'Vứt bỏ'], 1, 'Trân trọng di sản dân tộc.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Quốc ca Việt Nam tên là?', ['Bác đang cùng chúng cháu hành quân', 'Lên đàng', 'Tiến quân ca', 'Đếm sao'], 2, '"Tiến quân ca" là Quốc ca.'),
    Q('Nhịp 3/4 có mấy phách mỗi ô?', ['6 phách', '2 phách', '3 phách', '4 phách'], 2, 'Nhịp 3/4 có 3 phách.'),
    Q('Quan họ là dân ca vùng nào?', ['Bắc Ninh – Bắc Bộ', 'Nghệ Tĩnh', 'Tây Nguyên', 'Nam Bộ'], 0, 'Quan họ Bắc Ninh.'),
    Q('Sáo recorder cầm tay nào ở trên?', ['Tay trái', 'Tay nào thuận thì để ở trên', 'Tay phải', 'Cả hai bằng nhau'], 0, 'Tay trái ở trên là chuẩn.'),
    Q('Gõ đệm theo phách nghĩa là?', ['Gõ khi nào thích', 'Không gõ', 'Mỗi phách gõ một lần', 'Gõ liên tục'], 2, 'Gõ đều mỗi phách.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Bài hát "Cùng múa hát dưới trăng"', [
    Q('Bài "Cùng múa hát dưới trăng" miêu tả không khí?', ['Hùng tráng', 'Buồn bã', 'Trầm lắng, nhẹ nhàng như lời ru', 'Vui tươi, các loài vật múa hát đêm trăng'], 3, 'Bài hát vui tươi, không khí đêm trăng rộn ràng.'),
    Q('Khi hát bài này, em nên?', ['Hét lên thật to', 'Hát rất chậm như ru', 'Hát buồn', 'Hát vui tươi và có thể vỗ tay theo nhịp'], 3, 'Hát vui tươi phù hợp tính chất bài.'),
    Q('Bài hát thường được viết ở nhịp?', ['4/4', '3/4 (nhịp valse vui)', '6/8', '2/4'], 1, 'Bài thường ở nhịp 3/4.'),
    Q('Có thể biểu diễn bài này với?', ['Không làm gì cả', 'Quay lưng đi', 'Đứng yên im lặng', 'Vận động phụ hoạ đơn giản'], 3, 'Vận động phụ hoạ giúp biểu diễn sinh động.'),
    Q('Các con vật trong bài thường là?', ['Hổ, báo, sói và gấu trong rừng', 'Hươu, nai, sóc, thỏ…', 'Khủng long', 'Cá voi'], 1, 'Các con vật rừng vui múa hát.'),
  ]),

  M(20, 'Nhịp 4/4', [
    Q('Nhịp 4/4 có nghĩa là?', ['Hát 4 lần', 'Mỗi phách có 4 nốt', 'Mỗi ô nhịp có 4 phách', 'Bài hát có 4 câu'], 2, 'Nhịp 4/4: 4 phách mỗi ô.'),
    Q('Trong nhịp 4/4, phách 1 là?', ['Phách nhẹ', 'Không có ý nghĩa', 'Phách yếu nhất', 'Phách mạnh'], 3, 'Phách 1 là phách mạnh.'),
    Q('Phách 3 trong nhịp 4/4 là?', ['Phách mạnh nhất trong nhịp', 'Yếu nhất', 'Phách mạnh vừa', 'Mạnh nhất'], 2, 'Phách 3 mạnh vừa, phách 1 mạnh nhất.'),
    Q('Cách đếm nhịp 4/4 là?', ['"1 – 2, 1 – 2…"', '"1 – 2 – 3 – 4, 1 – 2 – 3 – 4…"', '"1, 1, 1, 1…"', '"1 – 2 – 3, 1 – 2 – 3…"'], 1, 'Đếm 1–2–3–4 đều.'),
    Q('Nhiều bài hát thiếu nhi và pop hiện đại dùng nhịp?', ['4/4', '7/8', '12/8', '6/8'], 0, '4/4 là nhịp phổ biến nhất trong nhạc hiện đại.'),
  ]),

  M(21, 'Dấu lặng', [
    Q('Dấu lặng trong âm nhạc nghĩa là?', ['Hát to lên', 'Không phát ra âm thanh trong một khoảng thời gian', 'Hát rất chậm', 'Hát rất nhỏ'], 1, 'Dấu lặng = im lặng có thời gian xác định.'),
    Q('Dấu lặng đen có giá trị bằng?', ['4 phách', '1 phách (như nốt đen)', '½ phách', '2 phách'], 1, 'Dấu lặng đen tương đương 1 phách im.'),
    Q('Khi gặp dấu lặng, em nên?', ['Bỏ qua như không có', 'Hát to gấp đôi', 'Hát rất nhỏ thôi', 'Im lặng đúng thời gian rồi hát tiếp'], 3, 'Im lặng đúng thời gian giữ nhịp.'),
    Q('Dấu lặng giúp bài hát?', ['Buồn hơn', 'Khó hát hơn', 'Không có ý nghĩa', 'Có khoảng nghỉ, không bị liền tù tì'], 3, 'Khoảng nghỉ làm bài hát có hồn.'),
    Q('Dấu lặng móc đơn bằng?', ['4 phách', 'Nửa phách (½ phách)', '2 phách', '1 phách'], 1, 'Dấu lặng móc đơn = ½ phách im.'),
  ]),

  M(22, 'Bài hát "Chúng em cần hoà bình"', [
    Q('Bài "Chúng em cần hoà bình" thể hiện?', ['Buôn bán', 'Học hành', 'Khát vọng hoà bình của trẻ em', 'Chiến tranh'], 2, 'Bài hát ca ngợi hoà bình.'),
    Q('Tác giả bài này là?', ['Hoàng Long – Hoàng Lân', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Hai anh em nhạc sĩ Hoàng Long – Hoàng Lân.'),
    Q('Hát bài này nên với?', ['Quát lớn', 'Buồn ngủ', 'Cười đùa', 'Tinh thần tha thiết, mong ước hoà bình'], 3, 'Tinh thần tha thiết phù hợp nội dung.'),
    Q('Hoà bình mang lại điều gì?', ['Đau buồn', 'Đói nghèo', 'Cuộc sống yên ổn, hạnh phúc cho mọi người', 'Chia ly'], 2, 'Hoà bình là khát vọng chung của nhân loại.'),
    Q('Trẻ em cần làm gì để góp phần giữ hoà bình?', ['Chia phe phái', 'Cãi vã', 'Học tập tốt, yêu thương bạn bè, không gây gổ', 'Đánh nhau'], 2, 'Từ tình bạn nhỏ xây hoà bình lớn.'),
  ]),

  M(23, 'Đọc nhạc — 5 nốt cơ bản', [
    Q('5 nốt nhạc cơ bản đầu là?', ['Đô – Rê – Mi – Pha – Sol', 'Đỏ – Cam – Vàng – Lục – Lam', 'A – B – C – D – E', '1 – 2 – 3 – 4 – 5'], 0, '5 nốt đầu của thang âm: Đô Rê Mi Pha Sol.'),
    Q('Nốt Đô trên khuông nhạc khoá Sol nằm ở?', ['Dòng thứ nhất', 'Dòng thứ năm', 'Khe thứ 4', 'Dòng kẻ phụ phía dưới khuông'], 3, 'Đô nằm dưới khuông, kẻ phụ thứ nhất.'),
    Q('Nốt cao hơn Đô là?', ['Sol thấp', 'La (cao hơn Đô 5 bậc)', 'Si (ngay trước Đô cao)', 'Rê'], 3, 'Trật tự đi lên: Đô – Rê – Mi…'),
    Q('Sau nốt Sol là nốt gì?', ['Si (bỏ qua nốt La)', 'Pha (nốt liền trước Sol)', 'La', 'Đô cao'], 2, 'Trật tự: …Sol – La – Si – Đô.'),
    Q('Đọc nhạc giúp em?', ['Hát đúng cao độ và học bài hát mới nhanh hơn', 'Vẽ đẹp hơn', 'Hát to hơn', 'Đá bóng giỏi'], 0, 'Đọc nhạc là nền tảng học nhạc bài bản.'),
  ]),

  M(24, 'Khuông nhạc và khoá Sol', [
    Q('Khuông nhạc gồm?', ['7 dòng', '6 dòng', '5 dòng kẻ song song', '4 dòng'], 2, 'Khuông nhạc có 5 dòng.'),
    Q('Giữa các dòng kẻ là?', ['Các khe (4 khe)', 'Số đếm', 'Hình vuông', 'Chấm tròn'], 0, '5 dòng tạo thành 4 khe.'),
    Q('Khoá Sol nằm trên dòng?', ['Dòng thứ 5 (dòng trên cùng)', 'Dòng thứ 1 (dòng dưới cùng)', 'Thứ 2 (từ dưới lên)', 'Dòng thứ 3 (dòng giữa khuông)'], 2, 'Khoá Sol xác định nốt Sol ở dòng 2.'),
    Q('Khoá Sol còn được gọi là?', ['Khoá Mi', 'Khoá Đô', 'Khoá La', 'Khoá G (vì Sol = G)'], 3, 'Sol = G trong cách gọi quốc tế.'),
    Q('Khoá nhạc dùng để?', ['Trang trí', 'Xác định cao độ các nốt trên khuông nhạc', 'Khoá tủ', 'Mở cửa'], 1, 'Khoá nhạc quy ước cao độ.'),
  ]),

  M(25, 'Bài hát "Bài ca đi học"', [
    Q('Tác giả bài "Bài ca đi học" là?', ['Phạm Tuyên', 'Hoàng Vân', 'Phan Trần Bảng', 'Văn Cao'], 2, 'Nhạc sĩ Phan Trần Bảng sáng tác.'),
    Q('Bài "Bài ca đi học" miêu tả?', ['Cảnh ngủ', 'Cảnh đi chợ', 'Cảnh học sinh tới trường vui tươi buổi sáng', 'Cảnh chiến tranh'], 2, 'Bài hát tả không khí buổi sáng đến trường.'),
    Q('Câu mở đầu là?', ['"Mẹ đi vắng…"', '"Bình minh dâng lên ánh trên giọt sương long lanh…"', '"Em yêu trường em…"', '"Đoàn quân Việt Nam đi…"'], 1, '"Bình minh dâng lên…" là câu mở.'),
    Q('Hát bài này nên?', ['Buồn bã', 'Hùng tráng quân hành', 'Trầm buồn', 'Vui tươi, trong sáng'], 3, 'Tinh thần vui tươi phù hợp nội dung.'),
    Q('Bài hát có hình ảnh đẹp gì?', ['Giọt sương, chim hót, đường đến trường', 'Súng đạn', 'Tang tóc', 'Khói lửa'], 0, 'Hình ảnh thiên nhiên trong sáng.'),
  ]),

  M(26, 'Trống nhỏ và nhạc cụ gõ', [
    Q('Trống nhỏ trong lớp dùng để?', ['Báo cháy', 'Đánh thức cả lớp', 'Gõ đệm theo nhịp phách bài hát', 'Trang trí'], 2, 'Trống nhỏ giúp gõ đệm.'),
    Q('Cách đánh trống nhỏ đúng là?', ['Ngồi lên trống', 'Đập tay xuống cho mạnh', 'Đá vào trống', 'Dùng dùi gõ vào mặt trống đều, không quá mạnh'], 3, 'Dùng dùi gõ đều là kỹ thuật cơ bản.'),
    Q('Song loan là?', ['Nhạc cụ gõ làm bằng tre có lá kim loại', 'Cái trống', 'Loa lớn', 'Cây đàn'], 0, 'Song loan là nhạc cụ gõ truyền thống.'),
    Q('Khi không dùng nhạc cụ, em nên?', ['Đập phá', 'Để giữa nhà', 'Cất vào hộp, giữ gìn cẩn thận', 'Vứt vào sọt rác'], 2, 'Giữ gìn nhạc cụ là tôn trọng đồ dùng học tập.'),
    Q('Cả lớp cùng chơi nhạc cụ gõ nên?', ['Không gõ gì', 'Hợp tác đúng nhịp, không gõ tuỳ ý', 'Gõ to nhất có thể', 'Mỗi người gõ một kiểu'], 1, 'Hợp tác đúng nhịp tạo âm thanh hài hoà.'),
  ]),

  M(27, 'Bài hát "Tia nắng hạt mưa"', [
    Q('Bài "Tia nắng hạt mưa" thuộc thể loại?', ['Nhạc đám tang', 'Quốc ca', 'Hát thiếu nhi vui tươi', 'Hành khúc'], 2, 'Bài hát thiếu nhi vui tươi.'),
    Q('Nội dung bài hát nói về?', ['Chiến tranh', 'Buôn bán', 'Đói nghèo', 'Vẻ đẹp thiên nhiên với nắng, mưa và tình bạn'], 3, 'Bài hát ca ngợi vẻ đẹp thiên nhiên và tình bạn.'),
    Q('Hát bài này em nên?', ['Hét lên', 'Hát nhẹ nhàng, trong trẻo', 'Hát chậm như ru ngủ', 'Hát buồn'], 1, 'Hát nhẹ nhàng phù hợp giai điệu.'),
    Q('Bài hát có thể vận động phụ hoạ với?', ['Ngủ gục', 'Động tác mưa rơi, nắng toả nhẹ nhàng', 'Đánh nhau', 'Đá bóng'], 1, 'Vận động phụ hoạ hợp nội dung bài.'),
    Q('Tia nắng và hạt mưa trong bài tượng trưng?', ['Chiến tranh', 'Sự buồn bã', 'Niềm vui, sự tươi mới của tuổi học trò', 'Bệnh tật'], 2, 'Hình ảnh thiên nhiên gợi niềm vui.'),
  ]),

  M(28, 'Phân biệt giọng cao – thấp', [
    Q('Giọng nữ thường cao hơn giọng nam vì?', ['Không có lý do', 'Nữ thông minh hơn', 'Cấu tạo dây thanh khác nhau', 'Nam yếu hơn'], 2, 'Dây thanh nữ ngắn hơn nên cao hơn.'),
    Q('Khi hát hợp xướng, người ta chia bè dựa vào?', ['Tuổi tác', 'Chiều cao cơ thể', 'Cân nặng', 'Cao độ giọng hát'], 3, 'Chia bè theo cao độ giọng.'),
    Q('Để tìm giọng phù hợp, em nên?', ['Hát theo người khác', 'Thử hát thấp – cao và chọn vùng dễ hát nhất', 'Không quan tâm', 'Hát rất to'], 1, 'Tìm vùng giọng tự nhiên của mình.'),
    Q('Hát quá cao hoặc quá thấp so với giọng có thể?', ['Gây căng dây thanh, khàn tiếng', 'Tốt cho giọng', 'Hát hay hơn', 'Không sao cả'], 0, 'Hát quá sức tổn thương dây thanh.'),
    Q('Em nên bảo vệ giọng hát bằng cách?', ['Hét càng to càng tốt', 'Không hét to, uống đủ nước, ngủ đủ giấc', 'Thức khuya', 'Uống đá liên tục'], 1, 'Bảo vệ giọng là bảo vệ sức khoẻ.'),
  ]),

  M(29, 'Nhạc cụ phương Tây cơ bản', [
    Q('Piano là loại nhạc cụ?', ['Dây (vì bên trong có dây thép căng)', 'Phím (gõ vào các phím để tạo tiếng)', 'Gõ (vì búa gõ vào dây để phát tiếng)', 'Hơi (vì cần thổi để phát tiếng)'], 1, 'Piano là nhạc cụ phím.'),
    Q('Violin là loại nhạc cụ?', ['Hơi (thổi vào để phát tiếng)', 'Gõ (dùng dùi gõ lên thân đàn)', 'Phím (bấm phím như đàn piano)', 'Dây (kéo bằng cung)'], 3, 'Violin là đàn dây kéo.'),
    Q('Guitar được chơi bằng cách?', ['Thổi hơi vào lỗ trên thân đàn', 'Gõ phím', 'Gảy hoặc đệm bằng tay vào dây', 'Đánh trống'], 2, 'Guitar là nhạc cụ dây gảy.'),
    Q('Flute (sáo ngang phương Tây) chơi bằng?', ['Đánh phím', 'Thổi hơi', 'Gảy dây', 'Đập trống'], 1, 'Flute là nhạc cụ hơi.'),
    Q('Em thích nhạc cụ nào tuỳ ý, nhưng quan trọng là?', ['Mua đắt nhất', 'Kiên trì luyện tập đều đặn', 'Khoe khoang', 'Có nhạc cụ rồi không tập'], 1, 'Kiên trì là chìa khoá học nhạc cụ.'),
  ]),

  M(30, 'Bài hát "Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng"', [
    Q('Tác giả bài hát này là?', ['Văn Cao', 'Phạm Tuyên', 'Phong Nhã', 'Hoàng Vân'], 2, 'Nhạc sĩ Phong Nhã sáng tác.'),
    Q('Bài hát thể hiện tình cảm?', ['Của thầy cô với học sinh', 'Của thiếu nhi với Bác Hồ', 'Của bố mẹ với con', 'Của bạn bè với nhau'], 1, 'Bài hát thể hiện tình cảm thiêng liêng của thiếu nhi với Bác.'),
    Q('Bác Hồ là?', ['Một bác hàng xóm', 'Một ca sĩ', 'Chủ tịch Hồ Chí Minh, vị lãnh tụ kính yêu của dân tộc', 'Tên một bài hát'], 2, 'Bác Hồ là Chủ tịch Hồ Chí Minh.'),
    Q('Hát bài này nên với cảm xúc?', ['Bực bội', 'Buồn ngủ', 'Đùa cợt', 'Trang trọng, tha thiết'], 3, 'Tha thiết, trang trọng đúng nội dung.'),
    Q('Ngày sinh nhật Bác Hồ là?', ['19/5', '20/11', '1/6', '2/9'], 0, '19/5 là ngày sinh Bác Hồ.'),
  ]),

  M(31, 'Vận động phụ hoạ', [
    Q('Vận động phụ hoạ là?', ['Đánh nhau', 'Đá bóng', 'Đứng yên', 'Cử động cơ thể phù hợp lời và nhịp bài hát'], 3, 'Vận động phụ hoạ tăng tính biểu diễn.'),
    Q('Khi vận động phụ hoạ, em nên?', ['Chỉ cử động một tay', 'Tự tin, đúng nhịp và đẹp mắt', 'Lúng túng', 'Đứng yên cứng đờ'], 1, 'Tự tin và đúng nhịp là quan trọng.'),
    Q('Vận động phụ hoạ cho bài "Đếm sao" có thể?', ['Đá chân loạn xạ', 'Đưa tay chỉ lên trời như đếm sao', 'Nằm xuống', 'Chống nạnh'], 1, 'Động tác phù hợp nội dung bài.'),
    Q('Khi biểu diễn nhóm, em nên?', ['Đồng đều với các bạn', 'Không vận động gì', 'Chỉ làm khác để nổi bật', 'Mỗi người một kiểu'], 0, 'Đồng đều tạo hiệu ứng đẹp mắt.'),
    Q('Vận động phụ hoạ giúp em?', ['Học toán giỏi', 'Biểu diễn sinh động và cảm thụ bài hát tốt hơn', 'Vẽ đẹp', 'Đá bóng giỏi'], 1, 'Vận động kết hợp âm nhạc tăng cảm xúc.'),
  ]),

  M(32, 'Lý cây xanh — Dân ca Nam Bộ', [
    Q('"Lý cây xanh" thuộc dân ca vùng nào?', ['Tây Nguyên', 'Bắc Bộ', 'Trung Bộ', 'Nam Bộ'], 3, 'Lý cây xanh là dân ca Nam Bộ.'),
    Q('Lý cây xanh có giai điệu?', ['Hùng tráng', 'Vui tươi, mộc mạc', 'Trầm lắng', 'Buồn thảm'], 1, 'Giai điệu vui tươi, mộc mạc Nam Bộ.'),
    Q('Bài hát thường được hát kèm?', ['Im lặng', 'Đánh trống đại', 'Vỗ tay hoặc gõ đệm theo phách', 'Thổi kèn lớn'], 2, 'Vỗ tay đệm phù hợp.'),
    Q('Hát Lý cây xanh em nên?', ['Buồn bã', 'Trang nghiêm', 'Hồn nhiên, vui tươi', 'Mệt mỏi'], 2, 'Hồn nhiên phù hợp tính chất dân ca.'),
    Q('Học dân ca giúp em?', ['Hiểu và yêu văn hoá dân tộc', 'Không có ý nghĩa', 'Học toán giỏi', 'Đá bóng giỏi'], 0, 'Dân ca là cầu nối với văn hoá truyền thống.'),
  ]),

  M(33, 'Câu nhạc và đoạn nhạc', [
    Q('Câu nhạc là?', ['Một lời nói', 'Một nốt nhạc', 'Đoạn ngắn có ý nghĩa âm nhạc trọn vẹn', 'Một dấu lặng'], 2, 'Câu nhạc tương tự câu văn trong âm nhạc.'),
    Q('Một bài hát thường gồm?', ['Nhiều câu nhạc và đoạn nhạc', 'Một câu duy nhất', 'Một nốt', 'Không có cấu trúc'], 0, 'Bài hát có nhiều câu, nhiều đoạn.'),
    Q('Giữa các câu nhạc thường có?', ['Tiếng cười', 'Không có gì', 'Khoảng nghỉ ngắn (dấu lặng)', 'Tiếng động'], 2, 'Khoảng nghỉ phân tách các câu.'),
    Q('Khi hát, em nên?', ['Không lấy hơi', 'Lấy hơi giữa câu', 'Lấy hơi cuối câu nhạc', 'Hít thật to khi đang hát'], 2, 'Lấy hơi cuối câu là kỹ thuật cơ bản.'),
    Q('Đoạn nhạc lớn hơn câu nhạc và?', ['Gồm nhiều câu nhạc', 'Bằng câu nhạc', 'Nhỏ hơn câu nhạc', 'Không liên quan'], 0, 'Đoạn = nhiều câu nhạc.'),
  ]),

  M(34, 'Biểu diễn cuối năm — Chuẩn bị tiết mục', [
    Q('Khi chuẩn bị biểu diễn, em nên?', ['Lo lắng quá mức', 'Không tập gì', 'Bỏ cuộc', 'Luyện tập kĩ và tự tin'], 3, 'Luyện tập là chìa khoá biểu diễn tốt.'),
    Q('Trang phục biểu diễn nên?', ['Lôi thôi', 'Bẩn thỉu', 'Gọn gàng, sạch sẽ, phù hợp tiết mục', 'Tuỳ tiện'], 2, 'Trang phục thể hiện sự nghiêm túc.'),
    Q('Khi lên sân khấu, em nên?', ['Đứng vững, nhìn về khán giả, tự tin', 'Chạy xuống', 'Cúi gằm mặt', 'Quay lưng đi'], 0, 'Tự tin và giao tiếp với khán giả.'),
    Q('Nếu quên lời hoặc hát sai, em nên?', ['Khóc và bỏ chạy', 'Bình tĩnh hát tiếp, không bỏ cuộc', 'Quát khán giả', 'Đá bạn'], 1, 'Bình tĩnh là điều quan trọng khi biểu diễn.'),
    Q('Sau khi biểu diễn, em nên?', ['Chạy ngay xuống', 'Cãi nhau với bạn', 'Quay lưng đi', 'Cúi chào khán giả và cảm ơn'], 3, 'Cúi chào là phép lịch sự.'),
  ]),

  M(35, 'Tổng kết cuối năm', [
    Q('Trong năm học, em đã học những nhịp nào?', ['Không học nhịp nào', 'Chỉ 4/4', 'Chỉ 2/4', '2/4, 3/4 và 4/4'], 3, 'Lớp 3 học các nhịp 2/4, 3/4, 4/4.'),
    Q('Em đã học các bài hát?', ['Không bài nào', 'Một bài duy nhất', 'Quốc ca, Đếm sao, Em yêu trường em… và nhiều bài khác', 'Chỉ Quốc ca'], 2, 'Lớp 3 học nhiều bài hát.'),
    Q('Dân ca các vùng em đã làm quen?', ['Chỉ Nam Bộ', 'Bắc Bộ, Trung Bộ, Nam Bộ', 'Chỉ Bắc Bộ', 'Chỉ Tây Nguyên và miền núi phía Bắc'], 1, 'Đủ 3 miền dân ca.'),
    Q('Sáo recorder đã giúp em?', ['Vẽ đẹp', 'Đá bóng giỏi', 'Học toán', 'Làm quen với nhạc cụ thực hành'], 3, 'Sáo là nhạc cụ thực hành cơ bản.'),
    Q('Để âm nhạc giỏi hơn, em cần?', ['Bỏ cuộc khi khó', 'Không cần làm gì', 'Luyện tập đều đặn và yêu thích âm nhạc', 'Học vì điểm số'], 2, 'Kiên trì và yêu thích là chìa khoá.'),
  ], { difficulty: 2 }),
];

export const P3AN_SCENARIOS = indexBy(P3AN_WEEKS);
