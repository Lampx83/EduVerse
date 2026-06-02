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
    Q('Tác giả Quốc ca Việt Nam là?', ['Văn Cao', 'Trịnh Công Sơn', 'Phạm Tuyên', 'Nguyễn Văn Tý'], 0, 'Văn Cao sáng tác Tiến quân ca năm 1944.'),
    Q('Khi hát Quốc ca, em nên?', ['Đứng nghiêm, hát to và rõ ràng', 'Vừa hát vừa cười đùa', 'Hát thầm rất nhỏ', 'Quay lưng đi'], 0, 'Hát Quốc ca cần trang nghiêm, dõng dạc.'),
    Q('Câu mở đầu Quốc ca là?', ['"Đoàn quân Việt Nam đi…"', '"Như có Bác Hồ…"', '"Ai yêu Bác Hồ…"', '"Em yêu trường em…"'], 0, '"Đoàn quân Việt Nam đi…" là câu mở đầu Quốc ca.'),
    Q('Quốc ca thường được hát trong dịp nào ở trường?', ['Lễ chào cờ đầu tuần', 'Giờ ra chơi', 'Khi đi vệ sinh', 'Khi ăn trưa'], 0, 'Quốc ca hát trong lễ chào cờ trang trọng.'),
  ]),

  M(2, 'Bài hát "Quốc ca" — Tập hát chuẩn', [
    Q('Khi hát Quốc ca, tay em đặt ở đâu?', ['Để xuôi theo thân hoặc đặt lên trái tim', 'Vung tay loạn xạ', 'Để trong túi', 'Chống nạnh'], 0, 'Tư thế nghiêm trang khi hát Quốc ca.'),
    Q('Khi hát sai lời Quốc ca, em nên?', ['Cố gắng tập lại cho đúng', 'Cười cho qua', 'Hát to hơn để át đi', 'Bỏ không hát'], 0, 'Quốc ca rất quan trọng, cần hát đúng lời.'),
    Q('Trong lời Quốc ca có nhắc đến hình ảnh gì?', ['Cờ in máu chiến thắng', 'Cánh đồng lúa', 'Biển cả', 'Đêm trăng'], 0, '"Cờ in máu chiến thắng mang hồn nước" là câu trong Quốc ca.'),
    Q('Hát Quốc ca với nhịp độ thế nào?', ['Vừa phải, hùng tráng', 'Rất chậm như nhạc buồn', 'Cực nhanh như tập thể dục', 'Lúc nhanh lúc chậm tuỳ thích'], 0, 'Quốc ca có nhịp độ hùng tráng vừa phải.'),
    Q('Khi nghe Quốc ca vang lên ở nơi công cộng, em nên?', ['Đứng dậy nghiêm trang', 'Ngồi yên không quan tâm', 'Đi tiếp như không nghe', 'Cười nói to'], 0, 'Đứng nghiêm là tôn trọng Quốc ca.'),
  ]),

  M(3, 'Nhịp 2/4 và phách', [
    Q('Phách trong âm nhạc là?', ['Đơn vị đều đặn để đếm thời gian âm nhạc', 'Tên một bài hát', 'Một nhạc cụ', 'Một loại nốt nhạc'], 0, 'Phách là đơn vị đo nhịp đều.'),
    Q('Nhịp 2/4 có nghĩa là?', ['Mỗi ô nhịp có 2 phách', 'Mỗi phách có 2 nốt', 'Bài hát chỉ có 2 câu', 'Hát 2 lần'], 0, 'Nhịp 2/4: mỗi ô nhịp có 2 phách.'),
    Q('Trong nhịp 2/4, phách nào là phách mạnh?', ['Phách 1', 'Phách 2', 'Cả hai như nhau', 'Không có phách mạnh'], 0, 'Phách 1 mạnh, phách 2 nhẹ.'),
    Q('Em vỗ tay theo phách bài hát nghĩa là?', ['Mỗi phách vỗ một cái', 'Vỗ liên tục không nghỉ', 'Vỗ khi nào thích', 'Vỗ một lần duy nhất'], 0, 'Vỗ đều theo từng phách.'),
    Q('Bài hát nào thường viết ở nhịp 2/4?', ['Nhiều bài hát thiếu nhi vui tươi', 'Chỉ những bài buồn', 'Không có bài nào', 'Chỉ nhạc giao hưởng'], 0, 'Nhịp 2/4 phổ biến trong nhạc thiếu nhi.'),
  ]),

  M(4, 'Nhịp 3/4 — Nhịp valse', [
    Q('Nhịp 3/4 có nghĩa là?', ['Mỗi ô nhịp có 3 phách', 'Mỗi phách có 3 nốt', 'Bài hát có 3 câu', 'Hát 3 lần'], 0, 'Nhịp 3/4: mỗi ô nhịp có 3 phách.'),
    Q('Phách mạnh trong nhịp 3/4 là?', ['Phách 1', 'Phách 2', 'Phách 3', 'Cả ba'], 0, 'Phách 1 là phách mạnh, 2 và 3 là phách nhẹ.'),
    Q('Nhịp 3/4 còn được gọi là?', ['Nhịp valse (van)', 'Nhịp hành khúc', 'Nhịp rock', 'Nhịp jazz'], 0, 'Nhịp 3/4 phổ biến trong điệu valse.'),
    Q('Cách đếm nhịp 3/4 là?', ['"1 – 2 – 3, 1 – 2 – 3…"', '"1 – 2, 1 – 2…"', '"1 – 2 – 3 – 4…"', '"1, 1, 1, 1…"'], 0, 'Đếm 1–2–3 lặp lại đều cho nhịp 3/4.'),
    Q('Bài "Đếm sao" được viết ở nhịp nào?', ['Nhịp 3/4', 'Nhịp 2/4', 'Nhịp 4/4', 'Nhịp 6/8'], 0, '"Đếm sao" của Văn Chung viết ở nhịp 3/4.'),
  ]),

  M(5, 'Bài hát "Đếm sao"', [
    Q('Tác giả bài "Đếm sao" là?', ['Văn Chung', 'Phạm Tuyên', 'Phong Nhã', 'Hoàng Lân'], 0, 'Nhạc sĩ Văn Chung sáng tác "Đếm sao".'),
    Q('Câu mở đầu bài "Đếm sao" là?', ['"Một ông sao sáng, hai ông sáng sao…"', '"Hai con thằn lằn con…"', '"Em yêu trường em…"', '"Cả nhà thương nhau…"'], 0, '"Một ông sao sáng, hai ông sáng sao" là câu mở đầu.'),
    Q('Bài "Đếm sao" có tính chất âm nhạc?', ['Nhẹ nhàng, êm ái như hát ru', 'Hùng tráng', 'Sôi động', 'Buồn bã'], 0, '"Đếm sao" có giai điệu nhẹ nhàng, êm ái.'),
    Q('Bài "Đếm sao" nói về điều gì?', ['Bầu trời đêm với những vì sao', 'Trường học', 'Mẹ con', 'Quê hương'], 0, 'Bài hát miêu tả bầu trời đêm sao đẹp.'),
    Q('Em nên hát "Đếm sao" thế nào?', ['Nhẹ nhàng, đếm rõ từng số', 'Hát thật to và nhanh', 'Hét lên', 'Hát rất chậm như ru'], 0, 'Hát nhẹ nhàng phù hợp với tính chất bài.'),
  ]),

  M(6, 'Nốt móc đơn', [
    Q('Nốt móc đơn có giá trị bằng?', ['Nửa phách (½ phách trong nhịp 2/4)', '1 phách', '2 phách', '4 phách'], 0, 'Nốt móc đơn = nửa phách.'),
    Q('Nốt móc đơn có hình dáng?', ['Có thân và một dấu móc', 'Hình tròn rỗng', 'Hình tròn đặc không thân', 'Hình vuông'], 0, 'Nốt móc đơn có cờ (dấu móc) ở đuôi.'),
    Q('Hai nốt móc đơn liền nhau có thể được?', ['Nối với nhau bằng một vạch ngang', 'Phải tách rời', 'Phải có dấu chấm', 'Phải tô đỏ'], 0, 'Hai móc đơn liền có thể nối thanh ngang.'),
    Q('Nốt nào DÀI HƠN nốt móc đơn?', ['Nốt đen (1 phách)', 'Nốt móc kép', 'Nốt móc tam', 'Không có nốt nào dài hơn'], 0, 'Nốt đen (1 phách) dài hơn móc đơn (½ phách).'),
    Q('Trong 1 phách (nốt đen) có bao nhiêu móc đơn?', ['2 móc đơn', '1 móc đơn', '3 móc đơn', '4 móc đơn'], 0, '1 nốt đen = 2 móc đơn.'),
  ]),

  M(7, 'Gõ đệm theo phách', [
    Q('Gõ đệm theo phách nghĩa là?', ['Mỗi phách gõ một lần đều đặn', 'Gõ liên tục không nghỉ', 'Gõ khi nào thích', 'Chỉ gõ phách đầu'], 0, 'Gõ đều mỗi phách.'),
    Q('Nhạc cụ thường dùng gõ đệm trong lớp là?', ['Thanh phách, song loan, trống nhỏ', 'Đàn piano', 'Đàn violin', 'Saxophone'], 0, 'Thanh phách, song loan là nhạc cụ gõ phổ biến.'),
    Q('Khi cả lớp gõ đệm, em nên?', ['Gõ đều, đúng nhịp với cả lớp', 'Gõ to hơn để nổi bật', 'Gõ tuỳ ý', 'Không gõ'], 0, 'Hợp tác đều để âm thanh hoà quyện.'),
    Q('Gõ đệm giúp em?', ['Cảm thụ nhịp và phách của bài hát', 'Hát nhanh hơn', 'Học toán giỏi', 'Đọc nhanh'], 0, 'Gõ đệm giúp cảm thụ nhịp điệu.'),
    Q('Trong nhịp 2/4, gõ phách mạnh thế nào?', ['Gõ mạnh ở phách 1, nhẹ ở phách 2', 'Gõ đều như nhau', 'Gõ mạnh ở phách 2', 'Không phân biệt'], 0, 'Phân biệt mạnh nhẹ cho âm nhạc sinh động.'),
  ]),

  M(8, 'Gõ đệm theo nhịp', [
    Q('Gõ đệm theo nhịp nghĩa là?', ['Mỗi ô nhịp gõ một lần (vào phách mạnh đầu ô)', 'Gõ liên tục mọi phách', 'Gõ ngẫu nhiên', 'Không gõ gì'], 0, 'Gõ vào đầu mỗi ô nhịp.'),
    Q('Trong nhịp 2/4, gõ theo nhịp tức là?', ['Gõ 1 lần vào phách 1 mỗi ô nhịp', 'Gõ 2 lần mỗi ô', 'Gõ 3 lần mỗi ô', 'Gõ 4 lần mỗi ô'], 0, 'Gõ phách mạnh đầu ô nhịp.'),
    Q('Gõ theo nhịp so với gõ theo phách thì?', ['Thưa hơn (ít gõ hơn)', 'Dày hơn (gõ nhiều hơn)', 'Bằng nhau', 'Không liên quan'], 0, 'Gõ nhịp thưa hơn gõ phách.'),
    Q('Bài tập gõ đệm theo nhịp giúp em?', ['Nhận ra ô nhịp và phách mạnh', 'Học toán', 'Viết chữ đẹp', 'Đá bóng giỏi'], 0, 'Cảm nhận cấu trúc nhịp.'),
    Q('Khi gõ đệm theo nhịp 3/4, em gõ?', ['1 lần vào phách 1 mỗi ô nhịp', '3 lần mỗi ô', 'Liên tục', 'Không gõ'], 0, 'Gõ một lần vào phách mạnh đầu ô.'),
  ]),

  M(9, 'Gõ đệm theo tiết tấu', [
    Q('Gõ đệm theo tiết tấu nghĩa là?', ['Gõ theo độ dài và nhịp của từng nốt nhạc trong bài hát', 'Gõ đều mỗi phách', 'Gõ đầu ô nhịp', 'Gõ ngẫu nhiên'], 0, 'Tiết tấu = mô hình độ dài các nốt.'),
    Q('Gõ tiết tấu khó hơn gõ phách vì?', ['Phải gõ chính xác theo từng nốt dài ngắn khác nhau', 'Vì gõ to hơn', 'Vì gõ nhanh hơn', 'Vì gõ một mình'], 0, 'Tiết tấu đòi hỏi cảm nhận độ dài từng nốt.'),
    Q('Ba kiểu gõ đệm trong âm nhạc Lớp 3 gồm?', ['Theo phách, theo nhịp, theo tiết tấu', 'Theo lời, theo điệu, theo giọng', 'Theo cao, theo thấp, theo dài', 'Không có'], 0, '3 kiểu gõ đệm cơ bản.'),
    Q('Khi tập gõ tiết tấu, em nên?', ['Tập chậm và đúng trước, sau đó nhanh dần', 'Tập nhanh ngay', 'Bỏ qua không tập', 'Chỉ nghe người khác'], 0, 'Tập chậm và đúng là phương pháp đúng.'),
    Q('Gõ tiết tấu giúp em?', ['Hát đúng nhịp và rõ lời', 'Hát nhanh hơn người khác', 'Át tiếng cô giáo', 'Không có tác dụng'], 0, 'Cảm thụ tiết tấu giúp hát đúng nhịp.'),
  ]),

  M(10, 'Sáo recorder — Làm quen', [
    Q('Sáo recorder là?', ['Loại sáo nhựa dùng để học nhạc trong trường', 'Sáo trúc Việt Nam', 'Kèn đồng', 'Đàn ghita'], 0, 'Recorder là sáo dọc thường dùng trong trường học.'),
    Q('Cách giữ sáo recorder đúng là?', ['Tay trái phía trên, tay phải phía dưới', 'Hai tay đặt tuỳ thích', 'Tay phải phía trên', 'Cầm ngang'], 0, 'Tay trái trên, tay phải dưới là tư thế chuẩn.'),
    Q('Khi thổi sáo recorder, em nên?', ['Thổi nhẹ và đều, không thổi quá mạnh', 'Thổi thật mạnh để to', 'Hít thật nhanh', 'Vừa thổi vừa nói'], 0, 'Thổi nhẹ đều cho tiếng đẹp.'),
    Q('Trước khi thổi sáo, em nên?', ['Rửa tay, vệ sinh sáo sạch sẽ', 'Ăn kẹo trong miệng', 'Uống nước có đá', 'Không cần chuẩn bị'], 0, 'Vệ sinh sạch để sáo bền và sạch.'),
    Q('Khi thổi sai nốt, em nên?', ['Thổi lại đúng, không bỏ cuộc', 'Bỏ sáo', 'Đánh sáo xuống bàn', 'Chê sáo dở'], 0, 'Kiên trì luyện tập là cách học sáo.'),
  ]),

  M(11, 'Sáo recorder — Các nốt cơ bản', [
    Q('Khi không bịt lỗ nào trên sáo recorder, thổi ra nốt?', ['Si (B)', 'Đô (C)', 'Mi (E)', 'Fa (F)'], 0, 'Lỗ mở toàn bộ thường cho nốt cao.'),
    Q('Bịt lỗ tay trái (ngón trỏ + lỗ ngón cái sau) thường thổi nốt?', ['La (A)', 'Sol (G)', 'Đô (C)', 'Re (D)'], 0, 'Cách bấm phổ biến cho nốt La.'),
    Q('Để thổi đúng cao độ, em cần?', ['Bịt kín lỗ và thổi đều hơi', 'Bịt nửa lỗ', 'Để lỗ mở', 'Thổi rất mạnh'], 0, 'Bịt kín lỗ là kỹ thuật cơ bản.'),
    Q('Khi tập sáo, em nên tập?', ['Từng nốt một, sau đó ghép câu nhạc', 'Cả bài ngay từ đầu', 'Bài khó nhất trước', 'Không cần tập'], 0, 'Tập từng nốt rồi ghép là phương pháp hiệu quả.'),
    Q('Sáo recorder phổ biến trong trường là loại?', ['Soprano (sáo Soprano)', 'Bass (trầm rất lớn)', 'Contrabass', 'Không có loại nào'], 0, 'Soprano recorder là loại phổ biến nhất.'),
  ]),

  M(12, 'Bài hát "Em yêu trường em"', [
    Q('Tác giả bài "Em yêu trường em" là?', ['Hoàng Vân', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Nhạc sĩ Hoàng Vân sáng tác "Em yêu trường em".'),
    Q('Bài hát "Em yêu trường em" nói về?', ['Tình yêu của em với trường lớp, thầy cô, bạn bè', 'Quê hương', 'Mẹ', 'Đất nước'], 0, 'Bài hát thể hiện tình yêu trường.'),
    Q('Câu mở đầu bài "Em yêu trường em" là?', ['"Em yêu trường em, với bao bạn thân…"', '"Trường làng tôi cây xanh…"', '"Mái trường mến yêu…"', '"Bụi phấn rơi rơi…"'], 0, '"Em yêu trường em, với bao bạn thân…" là câu mở.'),
    Q('Tính chất bài "Em yêu trường em"?', ['Vui tươi, trong sáng', 'Buồn bã', 'Hùng tráng', 'Trầm lắng'], 0, 'Bài hát vui tươi, phù hợp tuổi học sinh.'),
    Q('Nên hát "Em yêu trường em" với cảm xúc?', ['Vui tươi, hồn nhiên', 'Buồn bã', 'Cau có', 'Bực bội'], 0, 'Cảm xúc vui tươi đúng tinh thần bài hát.'),
  ]),

  M(13, 'Hát bè đơn giản — Bè đôi', [
    Q('Hát bè đôi là?', ['Hai nhóm cùng hát hai phần khác nhau hoà quyện', 'Hai người hát cùng một câu', 'Một người hát to', 'Không có ai hát'], 0, 'Bè đôi tạo hoà âm.'),
    Q('Khi hát bè, em nên?', ['Nghe nhóm khác và giữ đúng bè của mình', 'Hát to át nhóm khác', 'Hát theo nhóm khác', 'Hát ngẫu nhiên'], 0, 'Lắng nghe để giữ đúng bè của mình.'),
    Q('Hát bè giúp bài hát?', ['Phong phú, đẹp và sinh động hơn', 'Buồn hơn', 'Khó nghe hơn', 'Không thay đổi'], 0, 'Bè tạo hoà âm phong phú.'),
    Q('Khi tập hát bè, em cần?', ['Tập riêng từng bè rồi ghép lại', 'Tập ghép luôn từ đầu', 'Không cần tập', 'Mỗi người tập một bài'], 0, 'Tập riêng rồi ghép là cách hiệu quả.'),
    Q('Bè cao và bè thấp khác nhau ở?', ['Cao độ — bè cao hát các nốt cao hơn', 'Lời bài hát', 'Tiết tấu', 'Số người'], 0, 'Bè cao – thấp khác nhau ở cao độ.'),
  ]),

  M(14, 'Dân ca Bắc Bộ', [
    Q('Dân ca Bắc Bộ nổi tiếng có?', ['Quan họ Bắc Ninh, Hát Xoan Phú Thọ', 'Đờn ca tài tử', 'Lý cây bông', 'Ví dặm Nghệ Tĩnh'], 0, 'Quan họ và Hát Xoan là dân ca Bắc Bộ.'),
    Q('Quan họ Bắc Ninh được UNESCO công nhận là?', ['Di sản văn hoá phi vật thể đại diện của nhân loại', 'Di sản thiên nhiên', 'Kì quan thế giới', 'Không có gì'], 0, 'Quan họ được UNESCO ghi danh năm 2009.'),
    Q('Trang phục biểu diễn Quan họ là?', ['Áo tứ thân, nón quai thao', 'Áo bà ba', 'Áo dài tím', 'Áo cổ trang Trung Quốc'], 0, 'Liền anh – liền chị mặc áo tứ thân, nón quai thao.'),
    Q('Bài dân ca Bắc Bộ "Cò lả" thường có nội dung?', ['Tả cảnh đồng quê, con cò bay lả bay la', 'Tả biển', 'Tả phố thị', 'Tả chiến tranh'], 0, '"Cò lả" tả cảnh đồng quê Bắc Bộ.'),
    Q('Đặc trưng giai điệu dân ca Bắc Bộ?', ['Mềm mại, tinh tế, có nhiều luyến láy', 'Sôi động như nhạc rock', 'Cứng cỏi như hành khúc', 'Buồn thảm'], 0, 'Dân ca Bắc Bộ giàu luyến láy.'),
  ]),

  M(15, 'Dân ca Trung Bộ', [
    Q('Dân ca Trung Bộ nổi tiếng có?', ['Ví dặm Nghệ Tĩnh, Hò Huế', 'Quan họ', 'Hát Xoan', 'Đờn ca tài tử Nam Bộ'], 0, 'Ví dặm và Hò Huế là dân ca Trung Bộ.'),
    Q('Ví, Giặm Nghệ Tĩnh được UNESCO công nhận năm?', ['2014', '2000', '2020', '1990'], 0, 'Dân ca Ví, Giặm Nghệ Tĩnh được ghi danh năm 2014.'),
    Q('Hò Huế thường được hát ở đâu?', ['Trên sông Hương', 'Trên núi', 'Trong rạp hát', 'Trong nhà tù'], 0, 'Hò Huế gắn với sông Hương xứ Huế.'),
    Q('Đặc trưng dân ca miền Trung?', ['Da diết, sâu lắng', 'Vui nhộn ồn ào', 'Hùng tráng quân hành', 'Lạnh lùng'], 0, 'Dân ca miền Trung da diết, sâu lắng.'),
    Q('Bài "Lý ngựa ô" là dân ca vùng nào?', ['Có cả Huế và Nam Bộ với phiên bản khác nhau', 'Chỉ Bắc Bộ', 'Tây Bắc', 'Tây Nguyên'], 0, 'Lý ngựa ô có nhiều phiên bản theo vùng.'),
  ]),

  M(16, 'Dân ca Nam Bộ', [
    Q('Dân ca Nam Bộ nổi tiếng có?', ['Đờn ca tài tử, các điệu Lý', 'Quan họ', 'Hát Xoan', 'Hò Huế'], 0, 'Đờn ca tài tử và điệu Lý là dân ca Nam Bộ.'),
    Q('Đờn ca tài tử Nam Bộ được UNESCO công nhận năm?', ['2013', '2000', '1995', '2020'], 0, 'Đờn ca tài tử được ghi danh năm 2013.'),
    Q('Bài dân ca Nam Bộ "Lý cây bông" có giai điệu?', ['Vui tươi, mộc mạc', 'Hùng tráng', 'Buồn thảm', 'Trầm lắng'], 0, 'Lý cây bông vui tươi, mộc mạc.'),
    Q('Trang phục truyền thống Nam Bộ là?', ['Áo bà ba và khăn rằn', 'Áo tứ thân', 'Áo dài tím', 'Áo nhung'], 0, 'Áo bà ba là trang phục Nam Bộ.'),
    Q('Đặc trưng giai điệu dân ca Nam Bộ?', ['Mộc mạc, gần gũi, đậm chất sông nước', 'Cứng cỏi như hành khúc', 'Da diết sâu lắng', 'Không có đặc trưng'], 0, 'Dân ca Nam Bộ mộc mạc, mang hơi thở sông nước.'),
  ]),

  M(17, 'Nhạc cụ dân tộc — Đàn bầu, đàn tranh', [
    Q('Đàn bầu là nhạc cụ?', ['Truyền thống Việt Nam, chỉ có 1 dây', 'Của Trung Quốc', 'Của Tây Phương', 'Có 6 dây'], 0, 'Đàn bầu là độc đáo của Việt Nam — chỉ 1 dây.'),
    Q('Đàn tranh có mấy dây?', ['16 dây (đàn tranh truyền thống)', '4 dây', '6 dây', '1 dây'], 0, 'Đàn tranh có 16 dây (có loại 17, 21 dây).'),
    Q('Cách chơi đàn bầu là?', ['Dùng que gảy và tay nhấn cần đàn', 'Thổi như sáo', 'Đánh trống', 'Vỗ tay'], 0, 'Đàn bầu chơi bằng que gảy + tay nhấn cần.'),
    Q('Đàn bầu, đàn tranh thường dùng trong?', ['Nhạc cổ truyền, dân ca Việt Nam', 'Nhạc rock', 'Nhạc điện tử', 'Nhạc rap'], 0, 'Hai nhạc cụ này gắn với nhạc cổ truyền.'),
    Q('Em cần làm gì với nhạc cụ dân tộc?', ['Trân trọng, gìn giữ và giới thiệu cho bạn bè', 'Coi thường vì cũ', 'Vứt bỏ', 'Chê là quê mùa'], 0, 'Trân trọng di sản dân tộc.'),
  ]),

  M(18, 'Sơ kết HK1', [
    Q('Quốc ca Việt Nam tên là?', ['Tiến quân ca', 'Lên đàng', 'Bác đang cùng chúng cháu hành quân', 'Đếm sao'], 0, '"Tiến quân ca" là Quốc ca.'),
    Q('Nhịp 3/4 có mấy phách mỗi ô?', ['3 phách', '2 phách', '4 phách', '6 phách'], 0, 'Nhịp 3/4 có 3 phách.'),
    Q('Quan họ là dân ca vùng nào?', ['Bắc Ninh – Bắc Bộ', 'Nghệ Tĩnh', 'Nam Bộ', 'Tây Nguyên'], 0, 'Quan họ Bắc Ninh.'),
    Q('Sáo recorder cầm tay nào ở trên?', ['Tay trái', 'Tay phải', 'Cả hai bằng nhau', 'Tuỳ ý'], 0, 'Tay trái ở trên là chuẩn.'),
    Q('Gõ đệm theo phách nghĩa là?', ['Mỗi phách gõ một lần', 'Gõ liên tục', 'Gõ khi nào thích', 'Không gõ'], 0, 'Gõ đều mỗi phách.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Bài hát "Cùng múa hát dưới trăng"', [
    Q('Bài "Cùng múa hát dưới trăng" miêu tả không khí?', ['Vui tươi, các loài vật múa hát đêm trăng', 'Buồn bã', 'Hùng tráng', 'U ám'], 0, 'Bài hát vui tươi, không khí đêm trăng rộn ràng.'),
    Q('Khi hát bài này, em nên?', ['Hát vui tươi và có thể vỗ tay theo nhịp', 'Hát buồn', 'Hét lên thật to', 'Hát rất chậm như ru'], 0, 'Hát vui tươi phù hợp tính chất bài.'),
    Q('Bài hát thường được viết ở nhịp?', ['3/4 (nhịp valse vui)', '2/4', '4/4', '6/8'], 0, 'Bài thường ở nhịp 3/4.'),
    Q('Có thể biểu diễn bài này với?', ['Vận động phụ hoạ đơn giản', 'Đứng yên im lặng', 'Quay lưng đi', 'Không làm gì cả'], 0, 'Vận động phụ hoạ giúp biểu diễn sinh động.'),
    Q('Các con vật trong bài thường là?', ['Hươu, nai, sóc, thỏ…', 'Cá voi', 'Khủng long', 'Sư tử'], 0, 'Các con vật rừng vui múa hát.'),
  ]),

  M(20, 'Nhịp 4/4', [
    Q('Nhịp 4/4 có nghĩa là?', ['Mỗi ô nhịp có 4 phách', 'Mỗi phách có 4 nốt', 'Bài hát có 4 câu', 'Hát 4 lần'], 0, 'Nhịp 4/4: 4 phách mỗi ô.'),
    Q('Trong nhịp 4/4, phách 1 là?', ['Phách mạnh', 'Phách nhẹ', 'Phách yếu nhất', 'Không có ý nghĩa'], 0, 'Phách 1 là phách mạnh.'),
    Q('Phách 3 trong nhịp 4/4 là?', ['Phách mạnh vừa', 'Mạnh nhất', 'Yếu nhất', 'Không có'], 0, 'Phách 3 mạnh vừa, phách 1 mạnh nhất.'),
    Q('Cách đếm nhịp 4/4 là?', ['"1 – 2 – 3 – 4, 1 – 2 – 3 – 4…"', '"1 – 2, 1 – 2…"', '"1 – 2 – 3, 1 – 2 – 3…"', '"1, 1, 1, 1…"'], 0, 'Đếm 1–2–3–4 đều.'),
    Q('Nhiều bài hát thiếu nhi và pop hiện đại dùng nhịp?', ['4/4', '6/8', '12/8', '7/8'], 0, '4/4 là nhịp phổ biến nhất trong nhạc hiện đại.'),
  ]),

  M(21, 'Dấu lặng', [
    Q('Dấu lặng trong âm nhạc nghĩa là?', ['Không phát ra âm thanh trong một khoảng thời gian', 'Hát rất nhỏ', 'Hát to lên', 'Hát rất chậm'], 0, 'Dấu lặng = im lặng có thời gian xác định.'),
    Q('Dấu lặng đen có giá trị bằng?', ['1 phách (như nốt đen)', '½ phách', '2 phách', '4 phách'], 0, 'Dấu lặng đen tương đương 1 phách im.'),
    Q('Khi gặp dấu lặng, em nên?', ['Im lặng đúng thời gian rồi hát tiếp', 'Hát rất nhỏ thôi', 'Hát to gấp đôi', 'Bỏ qua như không có'], 0, 'Im lặng đúng thời gian giữ nhịp.'),
    Q('Dấu lặng giúp bài hát?', ['Có khoảng nghỉ, không bị liền tù tì', 'Khó hát hơn', 'Buồn hơn', 'Không có ý nghĩa'], 0, 'Khoảng nghỉ làm bài hát có hồn.'),
    Q('Dấu lặng móc đơn bằng?', ['Nửa phách (½ phách)', '1 phách', '2 phách', '4 phách'], 0, 'Dấu lặng móc đơn = ½ phách im.'),
  ]),

  M(22, 'Bài hát "Chúng em cần hoà bình"', [
    Q('Bài "Chúng em cần hoà bình" thể hiện?', ['Khát vọng hoà bình của trẻ em', 'Chiến tranh', 'Buôn bán', 'Học hành'], 0, 'Bài hát ca ngợi hoà bình.'),
    Q('Tác giả bài này là?', ['Hoàng Long – Hoàng Lân', 'Văn Cao', 'Phạm Tuyên', 'Trịnh Công Sơn'], 0, 'Hai anh em nhạc sĩ Hoàng Long – Hoàng Lân.'),
    Q('Hát bài này nên với?', ['Tinh thần tha thiết, mong ước hoà bình', 'Cười đùa', 'Quát lớn', 'Buồn ngủ'], 0, 'Tinh thần tha thiết phù hợp nội dung.'),
    Q('Hoà bình mang lại điều gì?', ['Cuộc sống yên ổn, hạnh phúc cho mọi người', 'Đói nghèo', 'Chia ly', 'Đau buồn'], 0, 'Hoà bình là khát vọng chung của nhân loại.'),
    Q('Trẻ em cần làm gì để góp phần giữ hoà bình?', ['Học tập tốt, yêu thương bạn bè, không gây gổ', 'Đánh nhau', 'Chia phe phái', 'Cãi vã'], 0, 'Từ tình bạn nhỏ xây hoà bình lớn.'),
  ]),

  M(23, 'Đọc nhạc — 5 nốt cơ bản', [
    Q('5 nốt nhạc cơ bản đầu là?', ['Đô – Rê – Mi – Pha – Sol', 'A – B – C – D – E', '1 – 2 – 3 – 4 – 5', 'Đỏ – Cam – Vàng – Lục – Lam'], 0, '5 nốt đầu của thang âm: Đô Rê Mi Pha Sol.'),
    Q('Nốt Đô trên khuông nhạc khoá Sol nằm ở?', ['Dòng kẻ phụ phía dưới khuông', 'Dòng thứ nhất', 'Dòng thứ năm', 'Khe thứ 4'], 0, 'Đô nằm dưới khuông, kẻ phụ thứ nhất.'),
    Q('Nốt cao hơn Đô là?', ['Rê', 'Si', 'La', 'Sol thấp'], 0, 'Trật tự đi lên: Đô – Rê – Mi…'),
    Q('Sau nốt Sol là nốt gì?', ['La', 'Si', 'Đô cao', 'Pha'], 0, 'Trật tự: …Sol – La – Si – Đô.'),
    Q('Đọc nhạc giúp em?', ['Hát đúng cao độ và học bài hát mới nhanh hơn', 'Hát to hơn', 'Vẽ đẹp hơn', 'Đá bóng giỏi'], 0, 'Đọc nhạc là nền tảng học nhạc bài bản.'),
  ]),

  M(24, 'Khuông nhạc và khoá Sol', [
    Q('Khuông nhạc gồm?', ['5 dòng kẻ song song', '4 dòng', '6 dòng', '7 dòng'], 0, 'Khuông nhạc có 5 dòng.'),
    Q('Giữa các dòng kẻ là?', ['Các khe (4 khe)', 'Chấm tròn', 'Số đếm', 'Hình vuông'], 0, '5 dòng tạo thành 4 khe.'),
    Q('Khoá Sol nằm trên dòng?', ['Thứ 2 (từ dưới lên)', 'Thứ 1', 'Thứ 5', 'Thứ 3'], 0, 'Khoá Sol xác định nốt Sol ở dòng 2.'),
    Q('Khoá Sol còn được gọi là?', ['Khoá G (vì Sol = G)', 'Khoá Mi', 'Khoá Đô', 'Khoá La'], 0, 'Sol = G trong cách gọi quốc tế.'),
    Q('Khoá nhạc dùng để?', ['Xác định cao độ các nốt trên khuông nhạc', 'Mở cửa', 'Khoá tủ', 'Trang trí'], 0, 'Khoá nhạc quy ước cao độ.'),
  ]),

  M(25, 'Bài hát "Bài ca đi học"', [
    Q('Tác giả bài "Bài ca đi học" là?', ['Phan Trần Bảng', 'Văn Cao', 'Phạm Tuyên', 'Hoàng Vân'], 0, 'Nhạc sĩ Phan Trần Bảng sáng tác.'),
    Q('Bài "Bài ca đi học" miêu tả?', ['Cảnh học sinh tới trường vui tươi buổi sáng', 'Cảnh chiến tranh', 'Cảnh đi chợ', 'Cảnh ngủ'], 0, 'Bài hát tả không khí buổi sáng đến trường.'),
    Q('Câu mở đầu là?', ['"Bình minh dâng lên ánh trên giọt sương long lanh…"', '"Đoàn quân Việt Nam đi…"', '"Em yêu trường em…"', '"Mẹ đi vắng…"'], 0, '"Bình minh dâng lên…" là câu mở.'),
    Q('Hát bài này nên?', ['Vui tươi, trong sáng', 'Buồn bã', 'Hùng tráng quân hành', 'Trầm buồn'], 0, 'Tinh thần vui tươi phù hợp nội dung.'),
    Q('Bài hát có hình ảnh đẹp gì?', ['Giọt sương, chim hót, đường đến trường', 'Súng đạn', 'Khói lửa', 'Tang tóc'], 0, 'Hình ảnh thiên nhiên trong sáng.'),
  ]),

  M(26, 'Trống nhỏ và nhạc cụ gõ', [
    Q('Trống nhỏ trong lớp dùng để?', ['Gõ đệm theo nhịp phách bài hát', 'Đánh thức cả lớp', 'Báo cháy', 'Trang trí'], 0, 'Trống nhỏ giúp gõ đệm.'),
    Q('Cách đánh trống nhỏ đúng là?', ['Dùng dùi gõ vào mặt trống đều, không quá mạnh', 'Đập tay xuống cho mạnh', 'Đá vào trống', 'Ngồi lên trống'], 0, 'Dùng dùi gõ đều là kỹ thuật cơ bản.'),
    Q('Song loan là?', ['Nhạc cụ gõ làm bằng tre có lá kim loại', 'Loa lớn', 'Cây đàn', 'Cái trống'], 0, 'Song loan là nhạc cụ gõ truyền thống.'),
    Q('Khi không dùng nhạc cụ, em nên?', ['Cất vào hộp, giữ gìn cẩn thận', 'Để giữa nhà', 'Vứt vào sọt rác', 'Đập phá'], 0, 'Giữ gìn nhạc cụ là tôn trọng đồ dùng học tập.'),
    Q('Cả lớp cùng chơi nhạc cụ gõ nên?', ['Hợp tác đúng nhịp, không gõ tuỳ ý', 'Mỗi người gõ một kiểu', 'Gõ to nhất có thể', 'Không gõ gì'], 0, 'Hợp tác đúng nhịp tạo âm thanh hài hoà.'),
  ]),

  M(27, 'Bài hát "Tia nắng hạt mưa"', [
    Q('Bài "Tia nắng hạt mưa" thuộc thể loại?', ['Hát thiếu nhi vui tươi', 'Hành khúc', 'Nhạc đám tang', 'Quốc ca'], 0, 'Bài hát thiếu nhi vui tươi.'),
    Q('Nội dung bài hát nói về?', ['Vẻ đẹp thiên nhiên với nắng, mưa và tình bạn', 'Chiến tranh', 'Buôn bán', 'Đói nghèo'], 0, 'Bài hát ca ngợi vẻ đẹp thiên nhiên và tình bạn.'),
    Q('Hát bài này em nên?', ['Hát nhẹ nhàng, trong trẻo', 'Hét lên', 'Hát buồn', 'Hát chậm như ru ngủ'], 0, 'Hát nhẹ nhàng phù hợp giai điệu.'),
    Q('Bài hát có thể vận động phụ hoạ với?', ['Động tác mưa rơi, nắng toả nhẹ nhàng', 'Đá bóng', 'Đánh nhau', 'Ngủ gục'], 0, 'Vận động phụ hoạ hợp nội dung bài.'),
    Q('Tia nắng và hạt mưa trong bài tượng trưng?', ['Niềm vui, sự tươi mới của tuổi học trò', 'Chiến tranh', 'Sự buồn bã', 'Bệnh tật'], 0, 'Hình ảnh thiên nhiên gợi niềm vui.'),
  ]),

  M(28, 'Phân biệt giọng cao – thấp', [
    Q('Giọng nữ thường cao hơn giọng nam vì?', ['Cấu tạo dây thanh khác nhau', 'Nữ thông minh hơn', 'Nam yếu hơn', 'Không có lý do'], 0, 'Dây thanh nữ ngắn hơn nên cao hơn.'),
    Q('Khi hát hợp xướng, người ta chia bè dựa vào?', ['Cao độ giọng hát', 'Chiều cao cơ thể', 'Tuổi tác', 'Cân nặng'], 0, 'Chia bè theo cao độ giọng.'),
    Q('Để tìm giọng phù hợp, em nên?', ['Thử hát thấp – cao và chọn vùng dễ hát nhất', 'Hát theo người khác', 'Không quan tâm', 'Hát rất to'], 0, 'Tìm vùng giọng tự nhiên của mình.'),
    Q('Hát quá cao hoặc quá thấp so với giọng có thể?', ['Gây căng dây thanh, khàn tiếng', 'Hát hay hơn', 'Không sao cả', 'Tốt cho giọng'], 0, 'Hát quá sức tổn thương dây thanh.'),
    Q('Em nên bảo vệ giọng hát bằng cách?', ['Không hét to, uống đủ nước, ngủ đủ giấc', 'Hét càng to càng tốt', 'Uống đá liên tục', 'Thức khuya'], 0, 'Bảo vệ giọng là bảo vệ sức khoẻ.'),
  ]),

  M(29, 'Nhạc cụ phương Tây cơ bản', [
    Q('Piano là loại nhạc cụ?', ['Phím (gõ vào các phím để tạo tiếng)', 'Dây', 'Hơi', 'Gõ'], 0, 'Piano là nhạc cụ phím.'),
    Q('Violin là loại nhạc cụ?', ['Dây (kéo bằng cung)', 'Phím', 'Hơi', 'Gõ'], 0, 'Violin là đàn dây kéo.'),
    Q('Guitar được chơi bằng cách?', ['Gảy hoặc đệm bằng tay vào dây', 'Thổi', 'Đánh trống', 'Gõ phím'], 0, 'Guitar là nhạc cụ dây gảy.'),
    Q('Flute (sáo ngang phương Tây) chơi bằng?', ['Thổi hơi', 'Gảy dây', 'Đánh phím', 'Đập trống'], 0, 'Flute là nhạc cụ hơi.'),
    Q('Em thích nhạc cụ nào tuỳ ý, nhưng quan trọng là?', ['Kiên trì luyện tập đều đặn', 'Mua đắt nhất', 'Khoe khoang', 'Có nhạc cụ rồi không tập'], 0, 'Kiên trì là chìa khoá học nhạc cụ.'),
  ]),

  M(30, 'Bài hát "Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng"', [
    Q('Tác giả bài hát này là?', ['Phong Nhã', 'Văn Cao', 'Phạm Tuyên', 'Hoàng Vân'], 0, 'Nhạc sĩ Phong Nhã sáng tác.'),
    Q('Bài hát thể hiện tình cảm?', ['Của thiếu nhi với Bác Hồ', 'Của bố mẹ với con', 'Của thầy cô với học sinh', 'Của bạn bè với nhau'], 0, 'Bài hát thể hiện tình cảm thiêng liêng của thiếu nhi với Bác.'),
    Q('Bác Hồ là?', ['Chủ tịch Hồ Chí Minh, vị lãnh tụ kính yêu của dân tộc', 'Một bác hàng xóm', 'Tên một bài hát', 'Một ca sĩ'], 0, 'Bác Hồ là Chủ tịch Hồ Chí Minh.'),
    Q('Hát bài này nên với cảm xúc?', ['Trang trọng, tha thiết', 'Đùa cợt', 'Buồn ngủ', 'Bực bội'], 0, 'Tha thiết, trang trọng đúng nội dung.'),
    Q('Ngày sinh nhật Bác Hồ là?', ['19/5', '2/9', '20/11', '1/6'], 0, '19/5 là ngày sinh Bác Hồ.'),
  ]),

  M(31, 'Vận động phụ hoạ', [
    Q('Vận động phụ hoạ là?', ['Cử động cơ thể phù hợp lời và nhịp bài hát', 'Đứng yên', 'Đánh nhau', 'Đá bóng'], 0, 'Vận động phụ hoạ tăng tính biểu diễn.'),
    Q('Khi vận động phụ hoạ, em nên?', ['Tự tin, đúng nhịp và đẹp mắt', 'Lúng túng', 'Chỉ cử động một tay', 'Đứng yên cứng đờ'], 0, 'Tự tin và đúng nhịp là quan trọng.'),
    Q('Vận động phụ hoạ cho bài "Đếm sao" có thể?', ['Đưa tay chỉ lên trời như đếm sao', 'Đá chân loạn xạ', 'Chống nạnh', 'Nằm xuống'], 0, 'Động tác phù hợp nội dung bài.'),
    Q('Khi biểu diễn nhóm, em nên?', ['Đồng đều với các bạn', 'Mỗi người một kiểu', 'Chỉ làm khác để nổi bật', 'Không vận động gì'], 0, 'Đồng đều tạo hiệu ứng đẹp mắt.'),
    Q('Vận động phụ hoạ giúp em?', ['Biểu diễn sinh động và cảm thụ bài hát tốt hơn', 'Học toán giỏi', 'Đá bóng giỏi', 'Vẽ đẹp'], 0, 'Vận động kết hợp âm nhạc tăng cảm xúc.'),
  ]),

  M(32, 'Lý cây xanh — Dân ca Nam Bộ', [
    Q('"Lý cây xanh" thuộc dân ca vùng nào?', ['Nam Bộ', 'Bắc Bộ', 'Trung Bộ', 'Tây Nguyên'], 0, 'Lý cây xanh là dân ca Nam Bộ.'),
    Q('Lý cây xanh có giai điệu?', ['Vui tươi, mộc mạc', 'Hùng tráng', 'Buồn thảm', 'Trầm lắng'], 0, 'Giai điệu vui tươi, mộc mạc Nam Bộ.'),
    Q('Bài hát thường được hát kèm?', ['Vỗ tay hoặc gõ đệm theo phách', 'Đánh trống đại', 'Thổi kèn lớn', 'Im lặng'], 0, 'Vỗ tay đệm phù hợp.'),
    Q('Hát Lý cây xanh em nên?', ['Hồn nhiên, vui tươi', 'Trang nghiêm', 'Buồn bã', 'Mệt mỏi'], 0, 'Hồn nhiên phù hợp tính chất dân ca.'),
    Q('Học dân ca giúp em?', ['Hiểu và yêu văn hoá dân tộc', 'Học toán giỏi', 'Đá bóng giỏi', 'Không có ý nghĩa'], 0, 'Dân ca là cầu nối với văn hoá truyền thống.'),
  ]),

  M(33, 'Câu nhạc và đoạn nhạc', [
    Q('Câu nhạc là?', ['Đoạn ngắn có ý nghĩa âm nhạc trọn vẹn', 'Một nốt nhạc', 'Một lời nói', 'Một dấu lặng'], 0, 'Câu nhạc tương tự câu văn trong âm nhạc.'),
    Q('Một bài hát thường gồm?', ['Nhiều câu nhạc và đoạn nhạc', 'Một câu duy nhất', 'Không có cấu trúc', 'Một nốt'], 0, 'Bài hát có nhiều câu, nhiều đoạn.'),
    Q('Giữa các câu nhạc thường có?', ['Khoảng nghỉ ngắn (dấu lặng)', 'Tiếng động', 'Tiếng cười', 'Không có gì'], 0, 'Khoảng nghỉ phân tách các câu.'),
    Q('Khi hát, em nên?', ['Lấy hơi cuối câu nhạc', 'Lấy hơi giữa câu', 'Không lấy hơi', 'Hít thật to khi đang hát'], 0, 'Lấy hơi cuối câu là kỹ thuật cơ bản.'),
    Q('Đoạn nhạc lớn hơn câu nhạc và?', ['Gồm nhiều câu nhạc', 'Nhỏ hơn câu nhạc', 'Bằng câu nhạc', 'Không liên quan'], 0, 'Đoạn = nhiều câu nhạc.'),
  ]),

  M(34, 'Biểu diễn cuối năm — Chuẩn bị tiết mục', [
    Q('Khi chuẩn bị biểu diễn, em nên?', ['Luyện tập kĩ và tự tin', 'Không tập gì', 'Lo lắng quá mức', 'Bỏ cuộc'], 0, 'Luyện tập là chìa khoá biểu diễn tốt.'),
    Q('Trang phục biểu diễn nên?', ['Gọn gàng, sạch sẽ, phù hợp tiết mục', 'Tuỳ tiện', 'Lôi thôi', 'Bẩn thỉu'], 0, 'Trang phục thể hiện sự nghiêm túc.'),
    Q('Khi lên sân khấu, em nên?', ['Đứng vững, nhìn về khán giả, tự tin', 'Cúi gằm mặt', 'Quay lưng đi', 'Chạy xuống'], 0, 'Tự tin và giao tiếp với khán giả.'),
    Q('Nếu quên lời hoặc hát sai, em nên?', ['Bình tĩnh hát tiếp, không bỏ cuộc', 'Khóc và bỏ chạy', 'Quát khán giả', 'Đá bạn'], 0, 'Bình tĩnh là điều quan trọng khi biểu diễn.'),
    Q('Sau khi biểu diễn, em nên?', ['Cúi chào khán giả và cảm ơn', 'Chạy ngay xuống', 'Quay lưng đi', 'Cãi nhau với bạn'], 0, 'Cúi chào là phép lịch sự.'),
  ]),

  M(35, 'Tổng kết cuối năm', [
    Q('Trong năm học, em đã học những nhịp nào?', ['2/4, 3/4 và 4/4', 'Chỉ 2/4', 'Chỉ 4/4', 'Không học nhịp nào'], 0, 'Lớp 3 học các nhịp 2/4, 3/4, 4/4.'),
    Q('Em đã học các bài hát?', ['Quốc ca, Đếm sao, Em yêu trường em… và nhiều bài khác', 'Chỉ Quốc ca', 'Không bài nào', 'Một bài duy nhất'], 0, 'Lớp 3 học nhiều bài hát.'),
    Q('Dân ca các vùng em đã làm quen?', ['Bắc Bộ, Trung Bộ, Nam Bộ', 'Chỉ Bắc Bộ', 'Chỉ Nam Bộ', 'Không có'], 0, 'Đủ 3 miền dân ca.'),
    Q('Sáo recorder đã giúp em?', ['Làm quen với nhạc cụ thực hành', 'Học toán', 'Vẽ đẹp', 'Đá bóng giỏi'], 0, 'Sáo là nhạc cụ thực hành cơ bản.'),
    Q('Để âm nhạc giỏi hơn, em cần?', ['Luyện tập đều đặn và yêu thích âm nhạc', 'Không cần làm gì', 'Học vì điểm số', 'Bỏ cuộc khi khó'], 0, 'Kiên trì và yêu thích là chìa khoá.'),
  ], { difficulty: 2 }),
];

export const P3AN_SCENARIOS = indexBy(P3AN_WEEKS);
