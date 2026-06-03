// ============================================================
// Lớp 7 — Nghệ thuật (Âm nhạc + Mỹ thuật) · 35 tuần
// HK1 (T1-T18): trọng tâm ÂM NHẠC nâng cao
// HK2 (T19-T35): trọng tâm MỸ THUẬT nâng cao
// Bám sát Chương trình GDPT 2018 môn Nghệ thuật cấp THCS.
// ============================================================

import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7NT', 'nghe-thuat', n, title, qs, opts);

export const S7NT_WEEKS = [
  // ───────────── HK1 — ÂM NHẠC ─────────────

  M(1, 'Ôn nhịp 2/4, 3/4 và làm quen nhịp 6/8', [
    Q('Nhịp 6/8 có mấy phách trong một ô nhịp?', ['3', '4', '6', '2'], 2, 'Số trên (6) cho biết có 6 phách; số dưới (8) cho biết mỗi phách = nốt móc đơn.'),
    Q('Trong nhịp 6/8, mỗi phách tương đương với hình nốt nào?', ['Nốt tròn', 'Nốt trắng', 'Nốt móc đơn', 'Nốt đen'], 2, 'Số 8 ở dưới chỉ đơn vị phách là nốt móc đơn (1/8 nốt tròn).'),
    Q('Nhịp 6/8 thường được chia thành mấy nhóm tự nhiên?', ['1 nhóm × 6 phách', '3 nhóm × 2 phách', '6 nhóm × 1 phách', '2 nhóm × 3 phách'], 3, 'Nhịp 6/8 chia thành 2 nhóm, mỗi nhóm 3 phách → cảm giác "đung đưa".'),
    Q('Loại bài hát nào thường dùng nhịp 6/8?', ['Bài ru, bài có cảm giác đung đưa', 'Nhạc điện tử', 'Hành khúc nhanh', 'Nhạc rock mạnh'], 0, 'Nhịp 6/8 nhẹ nhàng, phù hợp bài ru, ballad, dân ca.'),
    Q('Nhịp 2/4 và 6/8 khác nhau chủ yếu ở điểm gì?', ['Tên nốt', 'Trường độ nốt tròn', 'Số phách và cảm giác nhịp', 'Khoá nhạc'], 2, '2/4 có cảm giác mạnh-nhẹ rõ; 6/8 lắc lư hai trọng âm phụ.'),
  ]),

  M(2, 'Gam Đô trưởng và bậc của gam', [
    Q('Gam Đô trưởng gồm những nốt nào theo thứ tự?', ['Đô-Mi-Sol-Đô', 'Rê-Mi-Fa-Sol-La-Si-Đô-Rê', 'Đô-Rê-Mi-Sol-La-Đô', 'Đô-Rê-Mi-Fa-Sol-La-Si-Đô'], 3, 'Gam Đô trưởng bắt đầu và kết thúc ở nốt Đô, gồm 7 nốt khác nhau.'),
    Q('Bậc I của gam Đô trưởng là nốt nào?', ['Si (bậc VII của gam Đô trưởng)', 'Sol (bậc V của gam Đô trưởng)', 'Đô', 'Mi (bậc III của gam Đô trưởng)'], 2, 'Bậc I (chủ âm) là nốt mở đầu — Đô trong gam Đô trưởng.'),
    Q('Bậc V của gam Đô trưởng là nốt nào?', ['Si (bậc VII)', 'Sol', 'Fa (bậc IV)', 'La (bậc VI)'], 1, 'Đếm: I-Đô, II-Rê, III-Mi, IV-Fa, V-Sol.'),
    Q('Khoảng cách giữa bậc III và bậc IV trong gam trưởng là?', ['1.5 cung', 'Nửa cung', '2 cung', 'Một cung'], 1, 'Trong gam trưởng, các bậc III-IV và VII-VIII cách nhau nửa cung.'),
    Q('Gam trưởng thường mang sắc thái cảm xúc thế nào?', ['Buồn, u tối', 'Tươi sáng, vui', 'Bí ẩn, mờ ảo (đặc trưng của gam thứ hoà thanh)', 'Hồi hộp'], 1, 'Gam trưởng thường nghe vui tươi, sáng; gam thứ nghe buồn hơn.'),
  ]),

  M(3, 'Hợp âm cơ bản — hợp âm ba', [
    Q('Hợp âm ba được tạo thành bằng cách chồng mấy nốt theo quãng ba?', ['4 nốt', '3 nốt', '5 nốt', '2 nốt'], 1, 'Hợp âm ba (triad) gồm 3 nốt chồng lên nhau theo quãng ba.'),
    Q('Hợp âm Đô trưởng (C) gồm những nốt nào?', ['Đô-Rê-Mi', 'Đô-Mi-Sol', 'Đô-Sol-Si', 'Đô-Fa-La'], 1, 'C major = C-E-G = Đô-Mi-Sol.'),
    Q('Hợp âm Sol trưởng (G) gồm những nốt nào?', ['Sol-La-Đô', 'Sol-Mi-Đô', 'Sol-Si-Rê', 'Sol-Si-Fa'], 2, 'G major = G-B-D = Sol-Si-Rê.'),
    Q('Hợp âm Fa trưởng (F) gồm những nốt nào?', ['Fa-La-Đô', 'Fa-Sol-La', 'Fa-Si-Rê', 'Fa-Mi-Rê'], 0, 'F major = F-A-C = Fa-La-Đô.'),
    Q('Hợp âm trưởng và hợp âm thứ khác nhau ở điểm chính nào?', ['Khoảng cách giữa nốt 1 và nốt 3 (trưởng = 2 cung, thứ = 1.5 cung)', 'Tên gọi nốt đầu', 'Độ to nhỏ (cường độ) khi đánh hợp âm', 'Số nốt'], 0, 'Trưởng: nốt giữa cao hơn (quãng 3 trưởng); thứ: nốt giữa thấp hơn (quãng 3 thứ).'),
  ]),

  M(4, 'Hợp xướng và bè', [
    Q('Hợp xướng 2 bè nghĩa là gì?', ['2 lần lặp lại', '2 nhóm hát cùng giai điệu', '2 nhóm hát 2 giai điệu khác nhau cùng lúc', '2 người hát solo'], 2, 'Hợp xướng 2 bè: hai nhóm hát hai đường giai điệu khác nhau, hòa hợp với nhau.'),
    Q('Trong hợp xướng 3 bè cơ bản thường có những bè giọng nào?', ['Tenor - Alto - Tenor', 'Bass - Bass - Bass', 'Soprano - Alto - Bass', 'Cao - Cao - Cao'], 2, 'Cấu trúc phổ biến: bè cao (Soprano), bè giữa (Alto), bè thấp (Bass/Tenor).'),
    Q('"Soprano" là bè giọng gì?', ['Nữ trầm', 'Nam trầm', 'Nam cao', 'Nữ cao'], 3, 'Soprano = giọng nữ cao nhất.'),
    Q('Khi hát hợp xướng, yêu cầu quan trọng nhất là gì?', ['Hát riêng lẻ', 'Hát nhanh', 'Hát to nhất', 'Hát đúng bè, đúng nhịp, hoà giọng'], 3, 'Hợp xướng đòi hỏi mỗi người giữ đúng bè và hoà hợp với cả nhóm.'),
    Q('"Đuổi" (canon) trong hợp xướng là gì?', ['Các bè dừng giữa chừng', 'Các bè vào sau, hát cùng giai điệu so le', 'Các bè hát to nhỏ', 'Các bè hát ngược'], 1, 'Canon: các bè cùng hát một giai điệu nhưng vào ở các thời điểm khác nhau (như "Frère Jacques").'),
  ]),

  M(5, 'Sáo recorder — kỹ thuật nâng cao', [
    Q('Khi thổi sáo recorder, hơi cần như thế nào?', ['Ngắt quãng', 'Không cần kiểm soát', 'Đều, nhẹ, ổn định', 'Mạnh hết sức'], 2, 'Hơi đều và nhẹ giúp âm thanh trong, không bị "rè".'),
    Q('Để bấm nốt cao trên recorder thường cần kỹ thuật nào?', ['Không cần kỹ thuật', 'Thổi rất mạnh', 'Bịt kín lỗ phía sau (lỗ ngón cái) một phần', 'Mở hết lỗ'], 2, 'Kỹ thuật "half-hole" — mở hé lỗ ngón cái — giúp lên quãng tám.'),
    Q('Lưỡi đóng vai trò gì khi thổi recorder?', ['Chỉ giữ ẩm khoang miệng, không ảnh hưởng tiếng', 'Bịt lỗ', 'Đè phím', 'Tạo âm "tu" để bắt đầu/ngắt từng nốt'], 3, 'Đầu lưỡi chạm răng/lợi rồi rút ra để tạo âm "tu" — gọi là kỹ thuật tonguing.'),
    Q('Khi tập một bài mới trên recorder, nên bắt đầu thế nào?', ['Thổi nhanh ngay', 'Bỏ qua nốt khó', 'Chỉ tập đoạn dễ', 'Thổi tốc độ chậm, đúng nốt, đúng nhịp'], 3, 'Luôn tập chậm để đúng cao độ và nhịp, sau đó mới tăng tốc.'),
    Q('Lỗi thường gặp khiến sáo recorder kêu "chói/rè" là?', ['Thổi quá mạnh', 'Thổi quá nhẹ chỉ', 'Không bấm phím', 'Đặt sáo ngang'], 0, 'Thổi quá mạnh thường làm âm bị chói; cần kiểm soát hơi.'),
  ]),

  M(6, 'Nhạc cụ dân tộc Việt Nam', [
    Q('Đàn bầu có mấy dây?', ['1', '2', '4', '16'], 0, 'Đàn bầu chỉ có 1 dây — đặc biệt của nhạc cụ Việt Nam.'),
    Q('Đàn tranh truyền thống thường có bao nhiêu dây?', ['16', '6', '36', '1'], 0, 'Đàn tranh phổ biến 16 dây (có loại 17, 19, 21 dây cải tiến).'),
    Q('Sáo trúc là nhạc cụ thuộc bộ nào?', ['Bộ hơi (khí)', 'Bộ gõ (gõ lên ống trúc để phát âm)', 'Bộ điện tử', 'Bộ dây'], 0, 'Sáo trúc dùng hơi thổi qua lỗ → thuộc bộ hơi.'),
    Q('Đàn nguyệt (kìm) có hình dáng đặc trưng gì?', ['Mặt bầu dục', 'Mặt vuông', 'Mặt tam giác', 'Mặt tròn như mặt trăng'], 3, 'Đàn nguyệt có thùng đàn tròn như mặt trăng — nên gọi là "nguyệt".'),
    Q('Trống cơm thường được dùng trong loại hình âm nhạc nào?', ['Nhạc dân gian, hát chèo, ca trù', 'Nhạc điện tử', 'Nhạc giao hưởng phương Tây', 'Nhạc rock'], 0, 'Trống cơm là nhạc cụ truyền thống, hay xuất hiện trong dân ca và nghệ thuật cổ truyền.'),
  ]),

  M(7, 'Bài hát chủ điểm Quê hương', [
    Q('Khi hát một bài về quê hương, sắc thái biểu cảm phù hợp là?', ['Tha thiết, tự hào', 'Sôi nổi như hành khúc', 'Buồn rầu, ai oán', 'Hài hước'], 0, 'Bài hát quê hương thường thể hiện tình yêu, tự hào, có thể tha thiết hoặc tươi sáng.'),
    Q('Câu hát "Quê hương là chùm khế ngọt" trong bài "Quê hương" do ai phổ nhạc?', ['Trịnh Công Sơn', 'Văn Cao', 'Giáp Văn Thạch', 'Phạm Tuyên'], 2, 'Bài "Quê hương" do Giáp Văn Thạch phổ thơ Đỗ Trung Quân.'),
    Q('Khi tập bài hát mới nên bắt đầu từ đâu?', ['Chỉ nghe không hát', 'Hát to ngay từ đầu', 'Đọc lời, vỡ giai điệu từng câu', 'Bỏ qua phần khó'], 2, 'Quy trình: đọc lời → vỡ giai điệu từng câu → ghép → thể hiện sắc thái.'),
    Q('Lấy hơi đúng cách trong khi hát là?', ['Há miệng không hít', 'Hít sâu xuống bụng (hơi cơ hoành)', 'Hít cạn vào ngực', 'Nín thở'], 1, 'Hơi bụng (cơ hoành) cho giọng khoẻ, ngân dài, ít mệt.'),
    Q('Để bài hát có cảm xúc, ngoài đúng nốt cần chú ý gì?', ['Hát thật nhanh', 'Hát thật to', 'Chỉ cần đúng nhịp, không cần biểu cảm', 'Sắc thái to-nhỏ, ngắt câu, biểu cảm khuôn mặt'], 3, 'Diễn cảm: cường độ, ngắt câu, biểu cảm — làm bài hát "sống".'),
  ]),

  M(8, 'Đọc nhạc — cao độ và quãng', [
    Q('Quãng là gì trong âm nhạc?', ['Tên hợp âm', 'Khoảng cách giữa hai nốt', 'Khoá nhạc', 'Số phách của nốt'], 1, 'Quãng (interval) = khoảng cách cao độ giữa hai nốt.'),
    Q('Quãng từ Đô đến Sol là quãng mấy?', ['Quãng 3', 'Quãng 8', 'Quãng 5', 'Quãng 4'], 2, 'Đếm: Đô-Rê-Mi-Fa-Sol = 5 → quãng 5.'),
    Q('Quãng từ Đô đến Đô (cao hơn 1 octave) là quãng mấy?', ['Quãng 8', 'Quãng 7', 'Quãng 1', 'Quãng 6'], 0, 'Một quãng 8 (octave) = từ một nốt đến cùng tên ở quãng tám trên/dưới.'),
    Q('Quãng từ Đô đến Mi là quãng mấy?', ['Quãng 2', 'Quãng 4', 'Quãng 5', 'Quãng 3'], 3, 'Đô-Rê-Mi = 3 → quãng 3.'),
    Q('Khi đọc nhạc, "solfège" nghĩa là?', ['Đọc tên nốt theo Đô-Rê-Mi...', 'Hát lời', 'Đánh đàn', 'Vỗ tay'], 0, 'Solfège = đọc tên nốt nhạc lên thành tiếng để luyện tai và mắt.'),
  ]),

  M(9, 'Lịch sử âm nhạc — thời kỳ Cổ điển', [
    Q('Wolfgang Amadeus Mozart là nhạc sĩ người nước nào?', ['Ý (quê hương của opera Cổ điển)', 'Pháp (trung tâm âm nhạc Cổ điển châu Âu)', 'Áo', 'Đức (cùng vùng nói tiếng Đức với Mozart)'], 2, 'Mozart (1756-1791) là nhạc sĩ người Áo, một trong những thiên tài âm nhạc Cổ điển.'),
    Q('Ludwig van Beethoven nổi tiếng vì điều gì đặc biệt?', ['Chưa từng biểu diễn', 'Không biết đọc nhạc', 'Chỉ chơi đàn không sáng tác', 'Tiếp tục sáng tác dù bị điếc'], 3, 'Beethoven bị điếc nặng nhưng vẫn sáng tác nhiều kiệt tác như Bản giao hưởng số 9.'),
    Q('Thời kỳ Cổ điển trong âm nhạc phương Tây kéo dài khoảng thời gian nào?', ['Thế kỷ 20', 'Thế kỷ 22', 'Thế kỷ 16', 'Khoảng 1750-1820'], 3, 'Thời kỳ Cổ điển (Classical period) ~ 1750-1820 với Haydn, Mozart, Beethoven.'),
    Q('Bản "Für Elise" nổi tiếng là sáng tác của ai?', ['Mozart', 'Beethoven', 'Chopin', 'Bach (nhà soạn nhạc Baroque nổi tiếng)'], 1, '"Für Elise" là một trong những bản piano nổi tiếng nhất của Beethoven.'),
    Q('"Giao hưởng" (Symphony) là tác phẩm dành cho?', ['Một cây guitar', 'Trống đơn', 'Một người hát solo', 'Dàn nhạc giao hưởng lớn'], 3, 'Giao hưởng = tác phẩm nhiều chương cho dàn nhạc giao hưởng đầy đủ.'),
  ]),

  M(10, 'Dân ca Việt Nam — ba miền', [
    Q('Quan họ Bắc Ninh thuộc miền nào của Việt Nam?', ['Miền Bắc', 'Miền Nam', 'Tây Nguyên', 'Miền Trung'], 0, 'Quan họ là di sản văn hoá phi vật thể của miền Bắc (Bắc Ninh - Bắc Giang).'),
    Q('Ca Huế là di sản của miền nào?', ['Miền Nam', 'Miền Trung', 'Miền Bắc', 'Tây Nguyên'], 1, 'Ca Huế nổi tiếng ở miền Trung, đặc biệt cố đô Huế.'),
    Q('Đờn ca tài tử Nam Bộ là di sản UNESCO của miền nào?', ['Miền Trung', 'Tây Bắc', 'Miền Bắc', 'Miền Nam'], 3, 'Đờn ca tài tử Nam Bộ được UNESCO ghi danh năm 2013.'),
    Q('Hát Xoan có nguồn gốc từ tỉnh nào?', ['Thanh Hoá', 'Bắc Giang', 'Phú Thọ', 'Hà Tĩnh'], 2, 'Hát Xoan Phú Thọ — di sản văn hoá phi vật thể của nhân loại.'),
    Q('Cồng chiêng là di sản đặc trưng của vùng nào?', ['Đông Nam Bộ', 'Đồng bằng Bắc Bộ', 'Miền Trung biển', 'Tây Nguyên'], 3, 'Không gian văn hoá cồng chiêng Tây Nguyên được UNESCO công nhận năm 2005.'),
  ]),

  M(11, 'Nhạc lý — dấu thăng, dấu giáng', [
    Q('Dấu thăng (#) làm gì với nốt nhạc?', ['Tăng cao độ nửa cung', 'Không đổi', 'Giảm cao độ nửa cung', 'Tăng 1 cung'], 0, 'Dấu thăng (#) → nâng cao độ nửa cung.'),
    Q('Dấu giáng (♭) làm gì với nốt nhạc?', ['Bỏ qua nốt', 'Tăng cao độ nửa cung', 'Tăng 1 cung', 'Giảm cao độ nửa cung'], 3, 'Dấu giáng (♭) → hạ cao độ nửa cung.'),
    Q('Nốt Fa thăng (F#) cao hơn nốt Fa bao nhiêu?', ['Nửa cung', '2 cung', 'Một cung', '1.5 cung'], 0, 'F# = F + nửa cung.'),
    Q('Dấu bình (♮) có tác dụng gì?', ['Huỷ dấu thăng/giáng, đưa nốt về tự nhiên', 'Tăng nửa cung', 'Giảm nửa cung', 'Bỏ qua'], 0, 'Dấu bình (natural) huỷ tác dụng của # hoặc ♭ trên nốt đó.'),
    Q('Trên đàn piano, từ phím Đô đến Đô# (C đến C#) là phím nào?', ['Phím trắng kế tiếp', 'Không có phím nào — Đô# trùng với Đô', 'Phím đen bên trái', 'Phím đen ngay bên phải Đô'], 3, 'C# = phím đen giữa C và D trên đàn piano.'),
  ]),

  M(12, 'Tiết tấu — đảo phách và nghịch phách', [
    Q('"Đảo phách" (syncopation) là gì?', ['Hát to', 'Nhấn vào phách yếu hoặc giữa phách', 'Đổi nhịp', 'Hát chậm'], 1, 'Syncopation = nhấn lệch vào phách yếu / phần lẻ → tạo cảm giác "lệch nhịp" thú vị.'),
    Q('Trong nhịp 4/4, phách nào là phách mạnh nhất?', ['Phách 1', 'Phách 3', 'Phách 2', 'Phách 4'], 0, 'Phách 1 là phách mạnh nhất; phách 3 là phách mạnh phụ; 2 và 4 là yếu.'),
    Q('Thể loại nhạc nào nổi bật với đảo phách?', ['Nhạc hành khúc', 'Nhạc ru', 'Nhạc cổ điển trang nghiêm', 'Jazz, Latin, Bossa Nova'], 3, 'Jazz và các thể loại Latin (Bossa, Samba) đặc trưng bằng syncopation.'),
    Q('Dấu lặng có ý nghĩa gì trong tiết tấu?', ['Tăng tốc', 'Lặp lại', 'Kết thúc bài', 'Khoảng im lặng có độ dài cụ thể'], 3, 'Dấu lặng = quãng im lặng có giá trị trường độ như nốt nhạc tương ứng.'),
    Q('Khi gặp dấu chấm sau nốt, trường độ nốt đó tăng thêm bao nhiêu?', ['Giảm một nửa', 'Không đổi', 'Thêm 1/2 giá trị ban đầu', 'Gấp đôi'], 2, 'Dấu chấm dôi: tăng thêm 1/2 trường độ nốt (đen có chấm = 1.5 phách).'),
  ]),

  M(13, 'Nghe nhạc — cảm thụ tác phẩm', [
    Q('Khi nghe một bản nhạc, nên chú ý đến yếu tố nào đầu tiên?', ['Giai điệu và tiết tấu', 'Bìa album', 'Năm phát hành', 'Tên ca sĩ'], 0, 'Cảm thụ âm nhạc bắt đầu từ giai điệu, tiết tấu, sau đó đến hoà âm, sắc thái.'),
    Q('"Hoà âm" trong âm nhạc là gì?', ['Tên ca sĩ', 'Cao độ một nốt', 'Cách kết hợp các nốt/hợp âm cùng vang lên', 'Lời bài hát'], 2, 'Hoà âm (harmony) = sự kết hợp đồng thời nhiều nốt → hợp âm và chuyển hợp âm.'),
    Q('"Sắc thái" (dynamics) chỉ điều gì?', ['Tên nốt', 'Độ to nhỏ của âm thanh', 'Số phách', 'Khoá nhạc'], 1, 'Sắc thái: pp, p, mp, mf, f, ff... chỉ độ mạnh-nhẹ.'),
    Q('Ký hiệu "f" trong bản nhạc nghĩa là?', ['Nhanh (tempo allegro)', 'Forte = mạnh', 'Piano = nhẹ', 'Chậm (tempo lento)'], 1, 'f = forte = mạnh; ff = rất mạnh; p = nhẹ; pp = rất nhẹ.'),
    Q('Ký hiệu "p" trong bản nhạc nghĩa là?', ['Piano = nhẹ', 'Phách mạnh đầu ô nhịp', 'Forte = mạnh', 'Tạm dừng'], 0, 'p = piano = nhẹ; pp = pianissimo = rất nhẹ.'),
  ]),

  M(14, 'Bài hát chủ điểm Mái trường', [
    Q('Bài hát "Bụi phấn" do ai sáng tác?', ['Văn Cao', 'Phạm Tuyên', 'Trịnh Công Sơn', 'Vũ Hoàng'], 3, '"Bụi phấn" do nhạc sĩ Vũ Hoàng sáng tác — ca ngợi nghề giáo.'),
    Q('Bài hát chủ điểm mái trường thường có nội dung gì?', ['Lao động', 'Tình thầy trò, kỉ niệm tuổi học trò', 'Chiến tranh', 'Tình yêu lứa đôi'], 1, 'Chủ điểm mái trường ca ngợi thầy cô, bạn bè, kỉ niệm tuổi học trò.'),
    Q('Bài "Mái trường mến yêu" do nhạc sĩ nào sáng tác?', ['Văn Cao', 'Lê Quốc Thắng', 'Vũ Hoàng', 'Phạm Tuyên'], 1, '"Mái trường mến yêu" là bài hát của nhạc sĩ Lê Quốc Thắng.'),
    Q('Khi hát bài về thầy cô, sắc thái cảm xúc phù hợp là?', ['Thờ ơ, không cảm xúc (đọc thuộc lời)', 'Giận dữ', 'Hài hước', 'Trân trọng, biết ơn, ấm áp'], 3, 'Sắc thái: trân trọng, biết ơn, thân thương.'),
    Q('Hát đồng ca cần đảm bảo điều gì?', ['Đồng đều về nhịp, hoà giọng, cùng sắc thái', 'Hát to nhất', 'Hát nhanh', 'Mỗi người hát kiểu riêng'], 0, 'Đồng ca: cả nhóm hát như một giọng → đồng đều và hoà hợp.'),
  ]),

  M(15, 'Hát kết hợp gõ đệm', [
    Q('Khi hát kết hợp gõ đệm, người gõ cần làm gì?', ['Gõ ngẫu nhiên', 'Giữ nhịp ổn định, không lấn át giọng hát', 'Gõ thật to', 'Không gõ vào phách 1'], 1, 'Gõ đệm: ổn định nhịp, vừa phải, làm nền cho giọng hát.'),
    Q('Trong nhịp 2/4, mẫu gõ phổ biến là?', ['Nhẹ - mạnh', 'Mạnh - nhẹ', 'Nhẹ - nhẹ', 'Mạnh - mạnh'], 1, 'Nhịp 2/4: phách 1 mạnh, phách 2 nhẹ.'),
    Q('Trong nhịp 3/4, mẫu gõ là?', ['Nhẹ - mạnh - mạnh', 'Mạnh - nhẹ - mạnh phụ (mẫu của nhịp 4/4)', 'Mạnh - mạnh - mạnh', 'Mạnh - nhẹ - nhẹ'], 3, 'Nhịp 3/4 (waltz): phách 1 mạnh, phách 2 và 3 nhẹ.'),
    Q('Trong nhịp 4/4, mẫu gõ là?', ['Mạnh - nhẹ - nhẹ (mẫu của nhịp 3/4)', 'Nhẹ - nhẹ - nhẹ - nhẹ', 'Mạnh - mạnh - mạnh - mạnh', 'Mạnh - nhẹ - mạnh phụ - nhẹ'], 3, 'Nhịp 4/4: phách 1 mạnh, phách 3 mạnh phụ, phách 2 và 4 nhẹ.'),
    Q('Có thể dùng dụng cụ nào để gõ đệm đơn giản?', ['Đàn piano', 'Sáo recorder', 'Đàn bầu', 'Thanh phách, song loan, tambourine, vỗ tay'], 3, 'Bộ gõ đơn giản: thanh phách, song loan, tambourine, vỗ tay, gõ bàn.'),
  ]),

  M(16, 'Ôn tập âm nhạc giữa kỳ', [
    Q('Nhịp 6/8 có mấy phách?', ['6', '4', '3', '2'], 0, 'Ôn tuần 1.'),
    Q('Hợp âm Đô trưởng gồm những nốt nào?', ['Đô-Sol-Si', 'Đô-Mi-Sol', 'Đô-Fa-La', 'Đô-Rê-Mi'], 1, 'Ôn tuần 3.'),
    Q('Đàn bầu có mấy dây?', ['1', '16', '2', '4'], 0, 'Ôn tuần 6.'),
    Q('Quãng từ Đô đến Sol là quãng mấy?', ['Quãng 5', 'Quãng 8', 'Quãng 3', 'Quãng 4'], 0, 'Ôn tuần 8.'),
    Q('Dấu thăng (#) làm gì với nốt nhạc?', ['Tăng 1 cung', 'Tăng nửa cung', 'Giảm nửa cung', 'Không đổi'], 1, 'Ôn tuần 11.'),
  ]),

  M(17, 'Biểu diễn nhóm — chuẩn bị sân khấu', [
    Q('Khi biểu diễn nhóm trên sân khấu, đứng thế nào là phù hợp?', ['Sát mép sân khấu', 'Tản mác', 'Theo đội hình đã tập, hướng về khán giả', 'Quay lưng'], 2, 'Đội hình rõ ràng, hướng về khán giả, giữ khoảng cách đều.'),
    Q('Trước khi biểu diễn cần chuẩn bị gì?', ['Không cần chuẩn bị', 'Ăn no để có sức hát to và lâu', 'Khởi động giọng, kiểm tra micro, xem lại bài', 'Uống nước lạnh'], 2, 'Khởi động giọng (luyện thanh) + kiểm tra thiết bị + ôn bài.'),
    Q('Khi quên lời/nốt giữa lúc biểu diễn, nên làm gì?', ['Bình tĩnh, hát tiếp/dùng "la la" rồi vào lại đúng nhịp', 'Dừng hẳn', 'Chạy xuống', 'Hát lại từ đầu bài để không bị sai'], 0, 'Bình tĩnh giữ nhịp, dùng âm "la"/ngân để vượt qua đoạn quên rồi vào lại.'),
    Q('Trang phục biểu diễn nên thế nào?', ['Mặc đồ ở nhà cho thoải mái khi hát', 'Càng nổi bật càng tốt', 'Khác nhau hết', 'Lịch sự, thống nhất nhóm, phù hợp chủ đề'], 3, 'Trang phục đồng đều, phù hợp chủ đề và đối tượng khán giả.'),
    Q('Sau biểu diễn nên làm gì?', ['Cười rồi chạy', 'Cúi chào khán giả', 'Đi thẳng vào trong', 'Đứng yên'], 1, 'Cúi chào là cách lịch sự cảm ơn khán giả.'),
  ]),

  M(18, 'Kiểm tra cuối kỳ I — Âm nhạc', [
    Q('Bài hợp xướng nghĩa là gì?', ['Nhạc không lời', 'Một người hát', 'Nhiều người hát các bè khác nhau hoà hợp', 'Nhạc điện tử'], 2, 'Tổng hợp.'),
    Q('Hợp âm Sol trưởng gồm những nốt nào?', ['Sol-La-Đô', 'Sol-Si-Rê', 'Sol-Fa-Mi', 'Sol-Mi-Đô'], 1, 'Tổng hợp.'),
    Q('Trong nhịp 6/8, mỗi phách = nốt nào?', ['Nốt tròn', 'Nốt đen', 'Nốt trắng', 'Nốt móc đơn'], 3, 'Tổng hợp.'),
    Q('Quan họ là di sản của tỉnh nào?', ['Thanh Hoá', 'Phú Thọ', 'Bắc Ninh', 'Hà Nam'], 2, 'Tổng hợp.'),
    Q('Ký hiệu "f" trong bản nhạc nghĩa là?', ['Nhanh (tempo allegro)', 'Chậm (tempo lento)', 'Nhẹ (piano, ký hiệu p)', 'Mạnh'], 3, 'Tổng hợp.'),
  ]),

  // ───────────── HK2 — MỸ THUẬT ─────────────

  M(19, 'Hình hoạ — vẽ tĩnh vật nâng cao', [
    Q('Tĩnh vật là gì?', ['Vẽ người', 'Vẽ động vật', 'Vẽ phong cảnh', 'Vẽ các đồ vật không chuyển động'], 3, 'Tĩnh vật = still life = vẽ các đồ vật bất động (bình hoa, trái cây, sách...).'),
    Q('Khi vẽ tĩnh vật, bước đầu tiên là?', ['Quan sát và phác bố cục tổng thể', 'Vẽ chi tiết ngay', 'Tô màu trước', 'Bỏ qua phác thảo'], 0, 'Bước 1: quan sát, phác khung tổng thể bằng hình học đơn giản.'),
    Q('"Mảng sáng - tối" trong vẽ tĩnh vật giúp gì?', ['Tạo cảm giác khối, chiều sâu', 'Trang trí', 'Không cần thiết', 'Tô màu'], 0, 'Sáng-tối tạo khối, làm vật trông có chiều sâu thay vì phẳng.'),
    Q('Hướng chiếu sáng ảnh hưởng đến yếu tố nào?', ['Vị trí vùng sáng, bóng đổ, sắc độ', 'Số lượng vật', 'Kích thước giấy', 'Tên vật'], 0, 'Hướng sáng quyết định nơi sáng nhất, bóng đổ và độ tương phản.'),
    Q('Tỉ lệ trong tĩnh vật là gì?', ['Số vật', 'Tổng khối lượng', 'Tương quan kích thước giữa các vật', 'Màu sắc'], 2, 'Tỉ lệ = so sánh kích thước các vật và các phần của một vật.'),
  ]),

  M(20, 'Màu sắc — màu nóng và màu lạnh', [
    Q('Màu nào sau đây là MÀU NÓNG?', ['Xanh dương', 'Xanh lá', 'Tím (màu lạnh, gần xanh dương)', 'Đỏ'], 3, 'Màu nóng: đỏ, cam, vàng — gợi cảm giác ấm, năng động.'),
    Q('Màu nào sau đây là MÀU LẠNH?', ['Xanh dương', 'Cam (màu nóng, gợi cảm giác ấm)', 'Đỏ (màu nóng, năng động)', 'Vàng (màu nóng, rực rỡ)'], 0, 'Màu lạnh: xanh dương, xanh lá, tím — gợi cảm giác mát, yên bình.'),
    Q('Phối nhiều màu nóng cùng nhau cho cảm giác?', ['Yên tĩnh', 'Lạnh lẽo', 'Buồn bã, u uất (gợi cảm xúc tiêu cực)', 'Ấm áp, sôi động'], 3, 'Tông nóng: ấm, sôi động, mạnh mẽ.'),
    Q('Phối nhiều màu lạnh cùng nhau cho cảm giác?', ['Mát, yên bình, sâu lắng', 'Vui nhộn', 'Nóng bức', 'Sôi động'], 0, 'Tông lạnh: mát, yên bình, trầm.'),
    Q('Màu trung gian (neutral) là?', ['Trắng, đen, xám, nâu', 'Xanh dương, tím', 'Đỏ, vàng', 'Cam (màu nóng phối với đỏ và vàng)'], 0, 'Trắng, đen, xám, nâu — không nghiêng nóng hay lạnh, dùng cân bằng.'),
  ]),

  M(21, 'Phối màu nâng cao — bộ ba bổ túc và tương phản', [
    Q('Hai màu "bổ túc" (complementary) nằm ở vị trí nào trên vòng tròn màu?', ['Cùng vị trí', 'Cạnh nhau', 'Cùng cung nhưng khác sắc độ', 'Đối diện nhau'], 3, 'Bổ túc: hai màu đối diện trên vòng tròn màu (đỏ-lục, vàng-tím, cam-lam).'),
    Q('Cặp màu bổ túc của Đỏ là?', ['Xanh lá', 'Cam (gần Đỏ trên vòng tròn màu)', 'Vàng (cùng nhóm màu nóng với Đỏ)', 'Tím (bổ túc của Vàng, không phải Đỏ)'], 0, 'Đỏ ↔ Xanh lá (lục).'),
    Q('Cặp màu bổ túc của Vàng là?', ['Xanh dương', 'Tím', 'Đỏ (bổ túc của Xanh lá, không phải Vàng)', 'Cam (kế bên Vàng trên vòng tròn màu)'], 1, 'Vàng ↔ Tím.'),
    Q('Cặp màu bổ túc của Cam là?', ['Tím (bổ túc của Vàng, không phải Cam)', 'Đỏ (kế bên Cam trên vòng tròn màu)', 'Vàng (kế bên Cam trên vòng tròn màu)', 'Xanh dương (lam)'], 3, 'Cam ↔ Lam.'),
    Q('Phối màu bổ túc tạo hiệu quả gì?', ['Mờ nhạt', 'Tương phản mạnh, nổi bật', 'Buồn tẻ', 'Êm dịu'], 1, 'Màu bổ túc đặt cạnh nhau → tương phản mạnh, làm nhau nổi bật.'),
  ]),

  M(22, 'Vẽ tranh đề tài cuộc sống', [
    Q('Khi vẽ tranh đề tài cuộc sống, bước đầu tiên là?', ['Vẽ luôn', 'Chọn đề tài và tìm ý tưởng', 'Tô màu', 'Chọn khung'], 1, 'Quy trình: chọn đề tài → ý tưởng → ký hoạ → bố cục → tô màu.'),
    Q('"Bố cục" trong tranh là gì?', ['Cách sắp xếp các hình ảnh trong khuôn tranh', 'Tên tranh', 'Kích thước tranh', 'Khung tranh'], 0, 'Bố cục: cách bố trí mảng chính - phụ trong tranh.'),
    Q('Hình ảnh chính trong tranh nên đặt ở đâu?', ['Ngoài khung', 'Góc dưới', 'Sát mép', 'Vùng tập trung sự chú ý (thường gần giao điểm tỉ lệ vàng)'], 3, 'Hình chính đặt ở vị trí thu hút mắt — quy tắc 1/3 hoặc tỉ lệ vàng.'),
    Q('"Ký hoạ" (sketch) dùng để làm gì?', ['Ghi nhanh hình ảnh, ý tưởng để làm tư liệu', 'Tô màu', 'Hoàn thiện tranh', 'Đóng khung'], 0, 'Ký hoạ là bản vẽ nhanh để ghi lại quan sát, ý tưởng làm tư liệu.'),
    Q('Đề tài "cuộc sống" có thể là?', ['Chỉ tĩnh vật', 'Chỉ chân dung', 'Sinh hoạt gia đình, lao động, lễ hội, trường học', 'Chỉ phong cảnh'], 2, 'Đề tài cuộc sống rất rộng: sinh hoạt, lễ hội, lao động, học tập, vui chơi...'),
  ]),

  M(23, 'Luật phối cảnh cơ bản', [
    Q('"Phối cảnh" trong hội hoạ là gì?', ['Phối hợp đường nét', 'Cách thể hiện không gian 3 chiều trên mặt phẳng 2 chiều', 'Phối màu', 'Chia tranh'], 1, 'Phối cảnh (perspective) tạo cảm giác chiều sâu trên mặt phẳng giấy.'),
    Q('"Đường chân trời" trong phối cảnh là?', ['Đường ngang tưởng tượng ngang tầm mắt người nhìn', 'Đường biên', 'Đường dọc giữa tranh', 'Khung tranh'], 0, 'Đường chân trời = nơi trời và đất gặp nhau ngang tầm mắt.'),
    Q('"Điểm tụ" trong phối cảnh là gì?', ['Điểm giữa tranh', 'Điểm sáng nhất', 'Điểm các đường song song trong thực tế giao nhau trên đường chân trời', 'Tên màu'], 2, 'Điểm tụ (vanishing point) là nơi các đường song song "tụ" về trên đường chân trời.'),
    Q('Vật ở xa thì trông như thế nào trong tranh phối cảnh?', ['Rõ hơn', 'Lớn hơn', 'Không đổi', 'Nhỏ hơn, mờ hơn'], 3, 'Càng xa → càng nhỏ, càng mờ và nhạt màu (phối cảnh không gian).'),
    Q('Phối cảnh "một điểm tụ" thường dùng để vẽ?', ['Đường đi thẳng, hành lang, đường ray', 'Hoa lá', 'Khuôn mặt', 'Chim cá'], 0, '1 điểm tụ phù hợp với cảnh nhìn thẳng vào: đường ray, hành lang, hàng cây.'),
  ]),

  M(24, 'In mộc bản (in khắc gỗ)', [
    Q('In mộc bản là kỹ thuật gì?', ['Vẽ bằng chì', 'Vẽ bằng bút lông', 'In bằng máy phun', 'Khắc hình lên gỗ rồi quét mực để in lên giấy'], 3, 'Mộc bản: khắc tranh trên ván gỗ → quét mực → in lên giấy.'),
    Q('Dòng tranh dân gian nào nổi tiếng dùng kỹ thuật mộc bản?', ['Sơn mài', 'Lụa (vẽ trên nền vải lụa, không khắc gỗ)', 'Đông Hồ', 'Sơn dầu'], 2, 'Tranh Đông Hồ in từ ván khắc gỗ, mỗi màu một ván.'),
    Q('Ưu điểm của in mộc bản là?', ['Không dùng mực', 'Không cần khắc', 'Mỗi bản khác hẳn nhau', 'In được nhiều bản giống nhau'], 3, 'Ván khắc dùng đi dùng lại → in được nhiều bản giống nhau.'),
    Q('Trong in mộc bản nhiều màu, mỗi màu cần?', ['Một ván khắc riêng', 'Một ván duy nhất', 'Vẽ tay', 'Không cần ván'], 0, 'Mỗi màu = 1 ván khắc riêng; in từng màu chồng lên nhau theo thứ tự.'),
    Q('Dụng cụ chính để khắc mộc bản là?', ['Bút lông', 'Cọ vẽ và bột màu nước', 'Máy ảnh', 'Đục, dao khắc'], 3, 'Dùng đục/dao khắc gỗ để tạo phần lồi (giữ mực) và phần lõm (không in).'),
  ]),

  M(25, 'Thiết kế đồ hoạ cơ bản', [
    Q('"Thiết kế đồ hoạ" (graphic design) là gì?', ['Chụp ảnh', 'Quay phim', 'Vẽ tranh nghệ thuật thuần tuý', 'Sáng tạo hình ảnh, chữ, bố cục để truyền đạt thông tin'], 3, 'Graphic design: kết hợp chữ + hình + màu + bố cục để truyền tải thông điệp.'),
    Q('Yếu tố nào KHÔNG thuộc thiết kế đồ hoạ?', ['Hình ảnh', 'Màu sắc', 'Mùi hương', 'Chữ (typography)'], 2, 'Đồ hoạ chủ yếu là yếu tố thị giác: chữ, hình, màu, bố cục.'),
    Q('"Typography" trong thiết kế là?', ['Phối màu thuần tuý', 'Vẽ tranh', 'Nghệ thuật sắp xếp và chọn kiểu chữ', 'Chụp ảnh'], 2, 'Typography = nghệ thuật chọn font, kích thước, khoảng cách chữ.'),
    Q('Khi thiết kế poster, yếu tố nào quan trọng nhất?', ['Càng nhiều chữ càng tốt', 'Càng nhiều màu càng tốt', 'Đặt mọi thứ ngẫu nhiên', 'Thông điệp rõ ràng, hình ảnh hấp dẫn, bố cục dễ đọc'], 3, 'Poster: thông điệp rõ + thị giác bắt mắt + bố cục hợp lý.'),
    Q('"Logo" là gì?', ['Khẩu hiệu', 'Bài hát quảng cáo', 'Áo phông', 'Biểu tượng nhận diện của thương hiệu/tổ chức'], 3, 'Logo: dấu hiệu nhận diện trực quan của thương hiệu.'),
  ]),

  M(26, 'Tranh Đông Hồ — dòng tranh dân gian', [
    Q('Tranh Đông Hồ thuộc tỉnh nào?', ['Huế (nơi có dòng tranh làng Sình)', 'Bắc Ninh', 'Hà Nam', 'Hà Nội'], 1, 'Tranh Đông Hồ xuất xứ làng Đông Hồ, huyện Thuận Thành, tỉnh Bắc Ninh.'),
    Q('Tranh Đông Hồ chủ yếu dùng dịp nào?', ['Giáng sinh', 'Lễ tốt nghiệp', 'Trung thu', 'Tết Nguyên đán'], 3, 'Tranh Đông Hồ là tranh Tết — treo ngày Tết để cầu may.'),
    Q('Bức "Đám cưới chuột" thuộc dòng tranh nào?', ['Đông Hồ', 'Làng Sình', 'Kim Hoàng', 'Hàng Trống'], 0, 'Đám cưới chuột — kiệt tác tiêu biểu của tranh Đông Hồ.'),
    Q('Màu sắc tranh Đông Hồ lấy từ?', ['Mực in máy', 'Tự nhiên (lá, vỏ cây, sỏi, vỏ điệp...)', 'Hoá học công nghiệp', 'Sơn dầu'], 1, 'Màu tự nhiên: đen từ tro lá, xanh từ lá chàm, đỏ từ sỏi son, trắng từ vỏ điệp...'),
    Q('Giấy in tranh Đông Hồ gọi là?', ['Giấy báo', 'Giấy gió', 'Giấy bìa', 'Giấy điệp'], 3, 'Giấy điệp: phủ một lớp vỏ điệp nghiền → mặt giấy lấp lánh.'),
  ]),

  M(27, 'Tranh Hàng Trống và Kim Hoàng', [
    Q('Tranh Hàng Trống xuất xứ ở đâu?', ['Bắc Ninh', 'Hà Nội (phố Hàng Trống)', 'Hải Phòng', 'Huế (nơi có dòng tranh làng Sình)'], 1, 'Tranh Hàng Trống có nguồn gốc từ phố Hàng Trống, Hà Nội.'),
    Q('Tranh Hàng Trống khác Đông Hồ chủ yếu ở?', ['Kết hợp in nét đen + tô màu bằng tay', 'Không có nét', 'In toàn bộ', 'Chỉ một màu'], 0, 'Hàng Trống: in nét đen từ ván rồi nghệ nhân tô màu bằng cọ.'),
    Q('Tranh Kim Hoàng xuất xứ ở đâu?', ['Hà Nội (làng Kim Hoàng, Hoài Đức)', 'Bắc Ninh', 'Hải Dương', 'Hà Nam'], 0, 'Làng Kim Hoàng xưa thuộc Hoài Đức, nay là Hà Nội.'),
    Q('Tranh Kim Hoàng nổi tiếng với màu nền đặc trưng nào?', ['Xanh dương', 'Đỏ điều', 'Trắng điệp (đặc trưng tranh Đông Hồ)', 'Đen huyền (đặc trưng tranh Hàng Trống)'], 1, 'Tranh Kim Hoàng có nền đỏ điều đặc trưng → còn gọi là "tranh đỏ".'),
    Q('Cả ba dòng Đông Hồ, Hàng Trống, Kim Hoàng đều là?', ['Tranh hiện đại', 'Tranh trừu tượng', 'Tranh sơn dầu', 'Dòng tranh dân gian Việt Nam'], 3, 'Đều là tranh dân gian truyền thống, gắn với tín ngưỡng và Tết Việt.'),
  ]),

  M(28, 'Vẽ chân dung — bước đầu', [
    Q('Tỉ lệ khuôn mặt người trưởng thành: mắt nằm khoảng vị trí nào?', ['Sát trán', 'Sát cằm', 'Trên trán', 'Giữa khuôn mặt (chia theo chiều dọc)'], 3, 'Người lớn: đường ngang mắt nằm xấp xỉ giữa khuôn mặt từ đỉnh đầu đến cằm.'),
    Q('Khoảng cách giữa hai mắt thường bằng bao nhiêu?', ['Một nửa con mắt', 'Khoảng một con mắt', 'Hai con mắt', 'Không cố định'], 1, 'Khoảng cách hai mắt ~ chiều ngang một con mắt.'),
    Q('Chân mũi nằm ở vị trí nào trên khuôn mặt?', ['Sát trán', 'Khoảng giữa mắt và cằm', 'Sát cằm', 'Sát mắt'], 1, 'Chân mũi xấp xỉ chia đôi đoạn từ mắt đến cằm.'),
    Q('Miệng nằm ở vị trí nào?', ['Giữa trán', 'Khoảng 1/3 từ chân mũi đến cằm', 'Sát cằm', 'Sát mũi'], 1, 'Miệng ở khoảng 1/3 trên của đoạn chân mũi → cằm.'),
    Q('Khi vẽ chân dung, nên bắt đầu bằng?', ['Tô màu trước', 'Vẽ tóc trước', 'Phác hình ô-van khuôn mặt và các đường tỉ lệ', 'Vẽ mắt trước'], 2, 'Phác ô-van + đường ngang mắt-mũi-miệng và trục giữa trước.'),
  ]),

  M(29, 'Mỹ thuật ứng dụng — thiết kế bao bì', [
    Q('"Mỹ thuật ứng dụng" hướng đến?', ['Phục vụ đời sống và sản phẩm cụ thể', 'Chỉ thi', 'Không có mục đích', 'Chỉ trưng bày bảo tàng'], 0, 'Mỹ thuật ứng dụng = áp dụng mỹ thuật vào sản phẩm thực tế (bao bì, quảng cáo, đồ dùng).'),
    Q('Thiết kế bao bì sản phẩm cần đảm bảo?', ['Chỉ rẻ', 'Chỉ đẹp', 'Bảo vệ sản phẩm + truyền tải thông tin + thẩm mỹ', 'Chỉ to'], 2, 'Bao bì có 3 vai trò chính: bảo vệ, truyền thông tin, tạo cảm xúc thẩm mỹ.'),
    Q('Trên bao bì thực phẩm thường có thông tin nào BẮT BUỘC?', ['Chỉ tên', 'Chỉ giá', 'Tên sản phẩm, thành phần, hạn dùng, nhà sản xuất', 'Chỉ hình ảnh'], 2, 'Luật quy định: tên, thành phần, khối lượng, hạn dùng, nhà sản xuất...'),
    Q('Bao bì thân thiện môi trường nên ưu tiên?', ['Nhiều nhựa', 'Vật liệu tái chế / phân huỷ sinh học', 'Không có gì', 'Càng nhiều lớp càng tốt'], 1, 'Vật liệu tái chế, giấy, phân huỷ sinh học → giảm rác thải.'),
    Q('Logo trên bao bì nên đặt ở đâu?', ['Sát mép', 'Vị trí dễ nhìn, hài hoà bố cục', 'Mặt sau', 'Không cần có'], 1, 'Logo nên đặt nơi dễ nhận diện, hài hoà với toàn bộ bố cục.'),
  ]),

  M(30, 'Trang trí — đối xứng và lặp lại', [
    Q('"Đối xứng" trong trang trí nghĩa là?', ['Lộn xộn', 'Một bên trống', 'Không có quy luật', 'Hai bên giống nhau qua một trục'], 3, 'Đối xứng (symmetry): hai bên qua trục/tâm giống hệt nhau.'),
    Q('Hình tròn có bao nhiêu trục đối xứng?', ['2', '4', '1', 'Vô số'], 3, 'Hình tròn có vô số trục đối xứng đi qua tâm.'),
    Q('"Hoạ tiết lặp lại" (pattern) thường dùng để trang trí?', ['Chỉ tranh nghệ thuật', 'Không dùng', 'Vải, gạch, giấy dán tường, đồ vật', 'Chỉ dùng cho bìa sách giáo khoa'], 2, 'Pattern: hoạ tiết lặp đều dùng nhiều trong vải, gạch, giấy dán...'),
    Q('Hình vuông có bao nhiêu trục đối xứng?', ['2', '4', '6', '8'], 1, 'Hình vuông có 4 trục đối xứng (2 đường chéo + 2 đường giữa cạnh).'),
    Q('Trang trí "đăng đối" khác trang trí "lặp lại" ở điểm nào?', ['Đăng đối: cân xứng qua trục; Lặp lại: hoạ tiết lặp đi lặp lại', 'Không phân biệt', 'Hoàn toàn giống nhau', 'Đều ngẫu nhiên'], 0, 'Đăng đối nhấn vào sự cân xứng; lặp lại nhấn vào sự lặp đều của hoạ tiết.'),
  ]),

  M(31, 'Vẽ phong cảnh', [
    Q('Khi vẽ phong cảnh, đường chân trời nên đặt ở đâu để có cảm giác "bầu trời rộng"?', ['Giữa tranh', 'Cao lên trên', 'Sát mép trên', 'Thấp xuống dưới'], 3, 'Đường chân trời thấp → trời chiếm phần lớn tranh → cảm giác rộng, cao.'),
    Q('Để tạo chiều sâu trong tranh phong cảnh nên dùng?', ['Tất cả cùng kích thước', 'Bỏ vật gần', 'Vật gần lớn-rõ; vật xa nhỏ-mờ', 'Vật xa to hơn vật gần'], 2, 'Quy luật phối cảnh: gần lớn-rõ-đậm; xa nhỏ-mờ-nhạt.'),
    Q('Khi vẽ cây trong tranh phong cảnh, cần chú ý điều gì?', ['Chỉ vẽ thân', 'Vẽ từng chiếc lá', 'Bỏ qua bóng', 'Mảng tán (sáng-tối), không vẽ từng lá'], 3, 'Vẽ cây theo mảng tán sáng-tối thay vì từng lá → giữ tổng thể.'),
    Q('Phong cảnh đồng quê Việt Nam thường có hình ảnh đặc trưng nào?', ['Sa mạc', 'Băng tuyết', 'Toà nhà cao tầng', 'Luỹ tre, đồng lúa, con trâu, mái đình'], 3, 'Biểu tượng quê Việt: luỹ tre, đồng lúa, con trâu, mái đình, con sông.'),
    Q('Khi tô màu tranh phong cảnh, có thể tô từ?', ['Tô ngẫu nhiên', 'Chỉ tô viền', 'Chi tiết nhỏ trước', 'Mảng lớn ra mảng nhỏ, xa đến gần'], 3, 'Thường tô từ mảng lớn → nhỏ; từ xa (trời, núi) → gần (mặt đất, cây).'),
  ]),

  M(32, 'Sản phẩm thủ công — quà tặng', [
    Q('Khi thiết kế một sản phẩm thủ công làm quà tặng, cần chú ý điều gì?', ['Ngẫu nhiên', 'Đối tượng nhận, công năng, thẩm mỹ', 'Càng to càng tốt', 'Càng đắt càng tốt'], 1, 'Quà thủ công: hợp người nhận, có ý nghĩa, đẹp và bền.'),
    Q('Vật liệu phổ biến cho sản phẩm thủ công ở trường là?', ['Giấy màu, bìa, vải, dây, đất nặn', 'Hoá chất độc', 'Kim loại nóng chảy', 'Thuỷ tinh vỡ'], 0, 'Ưu tiên vật liệu an toàn, dễ tìm, dễ tạo hình.'),
    Q('Khi cắt giấy thủ công cần lưu ý an toàn gì?', ['Đưa mũi kéo vào bạn', 'Không cần lưu ý', 'Cầm kéo đúng cách, không vẩy, không hướng mũi vào người khác', 'Chạy khi cầm kéo'], 2, 'An toàn: cầm chuôi, mũi hướng xuống, không vẩy/chạy.'),
    Q('"Tái sử dụng" (upcycling) trong làm thủ công nghĩa là?', ['Vứt đi', 'Đốt bỏ', 'Biến đồ cũ/bỏ thành sản phẩm mới có giá trị', 'Mua đồ mới'], 2, 'Upcycling: sáng tạo lại từ vật bỏ → giảm rác, tăng giá trị.'),
    Q('Khi đóng gói quà thủ công, nên?', ['Gọn, đẹp, có thẻ ghi lời chúc', 'Không cần đóng gói', 'Càng nhiều lớp càng tốt', 'Lộn xộn'], 0, 'Gói quà gọn đẹp + thẻ chúc → tăng giá trị tinh thần.'),
  ]),

  M(33, 'Nghệ thuật và đời sống', [
    Q('"Nghệ thuật ứng dụng" có mặt ở đâu trong đời sống?', ['Chỉ có trong các phòng triển lãm tranh', 'Thiết kế nhà, quần áo, đồ dùng, bao bì, web...', 'Chỉ trong sách giáo khoa', 'Chỉ trong bảo tàng'], 1, 'Mỹ thuật ứng dụng hiện diện ở khắp đời sống: kiến trúc, thời trang, đồ vật, đồ hoạ.'),
    Q('Người làm "kiến trúc sư" cần kỹ năng gì?', ['Vẽ, mỹ thuật, kỹ thuật, tư duy không gian', 'Không cần mỹ thuật', 'Chỉ vẽ', 'Chỉ tính toán'], 0, 'Kiến trúc sư cần kết hợp mỹ thuật + kỹ thuật + công năng + thẩm mỹ.'),
    Q('Nghề "thiết kế thời trang" làm gì?', ['May khâu thuần tuý', 'Giặt quần áo', 'Sáng tạo mẫu trang phục', 'Bán quần áo'], 2, 'Designer thời trang sáng tạo mẫu, chọn vải, màu, kiểu dáng.'),
    Q('Mỹ thuật có vai trò gì trong quảng cáo?', ['Làm khó hiểu', 'Không có vai trò', 'Tạo hình ảnh hấp dẫn, truyền thông điệp đến người xem', 'Chỉ trang trí'], 2, 'Mỹ thuật là yếu tố cốt lõi của quảng cáo: hình, màu, chữ → tác động thị giác.'),
    Q('Khi học mỹ thuật, lợi ích gì cho học sinh?', ['Phát triển óc thẩm mỹ, sáng tạo, quan sát', 'Chỉ vui', 'Không có lợi ích', 'Mất thời gian'], 0, 'Học mỹ thuật rèn quan sát, sáng tạo, biểu đạt cảm xúc, thẩm mỹ sống.'),
  ]),

  M(34, 'Danh hoạ thế giới và Việt Nam', [
    Q('Bức "Mona Lisa" do ai sáng tác?', ['Michelangelo', 'Picasso', 'Leonardo da Vinci', 'Van Gogh'], 2, 'Mona Lisa là kiệt tác của Leonardo da Vinci, hiện ở bảo tàng Louvre.'),
    Q('Vincent van Gogh nổi tiếng với bức tranh nào?', ['Sự sáng tạo của Adam', 'Đêm đầy sao (Starry Night)', 'Bữa tiệc cuối cùng', 'Mona Lisa'], 1, 'The Starry Night là kiệt tác của Van Gogh.'),
    Q('Pablo Picasso là người nước nào?', ['Mỹ (nơi Picasso không sinh ra)', 'Ý (cái nôi của nghệ thuật Phục hưng)', 'Tây Ban Nha', 'Pháp (nơi Picasso sống và sáng tác lâu năm)'], 2, 'Picasso (1881-1973) là hoạ sĩ người Tây Ban Nha, sáng tạo trường phái Lập thể.'),
    Q('Hoạ sĩ Việt Nam nào nổi tiếng với tranh sơn mài?', ['Tô Ngọc Vân', 'Trần Văn Cẩn', 'Bùi Xuân Phái', 'Nguyễn Gia Trí'], 3, 'Nguyễn Gia Trí được coi là "ông tổ" tranh sơn mài Việt Nam hiện đại.'),
    Q('Bùi Xuân Phái nổi tiếng với chủ đề tranh nào?', ['Chân dung trẻ em', 'Núi rừng', 'Phố cổ Hà Nội', 'Biển cả và thuyền chài miền Trung'], 2, 'Bùi Xuân Phái nổi tiếng với loạt tranh "Phố Phái" — phố cổ Hà Nội.'),
  ]),

  M(35, 'Kiểm tra cuối kỳ II — Mỹ thuật', [
    Q('Màu nóng gồm những màu nào?', ['Trắng, đen', 'Xanh dương, tím', 'Xám, nâu (nhóm màu trung gian)', 'Đỏ, cam, vàng'], 3, 'Ôn tuần 20.'),
    Q('Cặp màu bổ túc của Đỏ là?', ['Tím (bổ túc của Vàng, không phải Đỏ)', 'Cam (kế bên Đỏ trên vòng tròn màu)', 'Vàng (cùng nhóm màu nóng với Đỏ)', 'Xanh lá'], 3, 'Ôn tuần 21.'),
    Q('Tranh Đông Hồ thuộc tỉnh nào?', ['Hà Nội', 'Hà Nam', 'Bắc Ninh', 'Huế (nơi có dòng tranh làng Sình)'], 2, 'Ôn tuần 26.'),
    Q('Bức "Mona Lisa" do ai sáng tác?', ['Michelangelo', 'Picasso', 'Van Gogh', 'Leonardo da Vinci'], 3, 'Ôn tuần 34.'),
    Q('"Đường chân trời" trong phối cảnh là?', ['Khung tranh', 'Đường biên', 'Đường ngang tưởng tượng ngang tầm mắt người nhìn', 'Đường dọc giữa tranh'], 2, 'Ôn tuần 23.'),
  ]),
];

export const S7NT_SCENARIOS = indexBy(S7NT_WEEKS);
