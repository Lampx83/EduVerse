// ============================================================
// Lớp 1 · ÂM NHẠC — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 chủ đề Tết)
// Bám SGK Âm nhạc Lớp 1 (CTGD 2018): hát bài quen, nhạc cụ gõ,
// to – nhỏ, nhanh – chậm, phách, nốt đen / trắng.
// ID prefix: "P1AN-wNN-quiz"
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1AN', 'am-nhac', n, title, qs, opts);

export const P1AN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Bài hát "Quê hương tươi đẹp"', [
    Q('"Quê hương tươi đẹp" là dân ca của dân tộc nào?', ['Dân ca Nùng', 'Dân ca Kinh', 'Dân ca Thái', 'Dân ca Khmer'], 0, '"Quê hương tươi đẹp" là dân ca Nùng được đặt lời mới.'),
    Q('Bài hát nói về điều gì?', ['Vẻ đẹp quê hương', 'Đi học', 'Mẹ ru con', 'Mùa xuân'], 0, 'Bài hát ca ngợi vẻ đẹp quê hương.'),
    Q('Khi hát bài này, em nên có cảm xúc?', ['Buồn bã', 'Vui tươi, tự hào', 'Sợ hãi', 'Giận dữ'], 1, 'Bài hát có giai điệu vui tươi, êm dịu.'),
    Q('Câu mở đầu bài hát là "Quê hương em …"?', ['biết bao tươi đẹp', 'xa quá rồi', 'buồn lắm', 'ướt át mưa'], 0, '"Quê hương em biết bao tươi đẹp…"'),
    Q('Khi hát em ngồi/đứng thế nào?', ['Ngồi gục xuống bàn', 'Ngồi/đứng thẳng, mắt nhìn cô', 'Quay lưng đi', 'Nằm xuống'], 1, 'Tư thế đẹp giúp hơi thở tốt, hát hay hơn.'),
    Q('Khi cô đánh nhịp, em nên?', ['Hát theo nhịp tay cô', 'Hát thật nhanh cho xong', 'Hát thật chậm', 'Hát to át lời bạn'], 0, 'Hát theo nhịp cô đánh giúp cả lớp hát đều.'),
  ]),

  M(2, 'Nghe nhạc — phân biệt to và nhỏ', [
    Q('Âm thanh to là âm thanh thế nào?', ['Vang, mạnh, nghe rõ', 'Nhỏ, êm, thì thầm', 'Không có âm', 'Yên lặng'], 0, 'Âm to nghe rõ và vang.'),
    Q('Tiếng trống thường là âm?', ['To', 'Nhỏ', 'Im lặng', 'Không nghe được'], 0, 'Trống là nhạc cụ có âm to.'),
    Q('Tiếng thì thầm là âm?', ['To', 'Nhỏ', 'Rất to', 'Không nghe được'], 1, 'Thì thầm là âm rất nhỏ.'),
    Q('Khi cô bảo "hát to lên", em nên?', ['Hát to vừa phải, rõ lời', 'Hét thật to', 'Hát nhỏ hơn', 'Im lặng'], 0, 'To đủ rõ lời, không phải hét.'),
    Q('Trong lớp học em nên nói âm thanh thế nào?', ['Hét thật to', 'Nói vừa nghe, không hét', 'Thì thầm cả ngày', 'Im lặng'], 1, 'Nói vừa nghe là lịch sự trong lớp.'),
    Q('Khi nghe nhạc trầm em sẽ thấy?', ['Êm dịu, dễ chịu', 'Nhức tai', 'Khó chịu', 'Sợ hãi'], 0, 'Âm thanh êm dịu khiến em dễ chịu.'),
  ]),

  M(3, 'Vỗ tay theo phách bài "Quê hương tươi đẹp"', [
    Q('Phách là gì?', ['Đơn vị thời gian đều đặn trong nhạc', 'Một loại bánh', 'Tên một con vật', 'Một loại quả'], 0, 'Phách là nhịp đều giúp ta vỗ tay theo nhạc.'),
    Q('Vỗ tay theo phách giúp em?', ['Hát đúng nhịp', 'Hát lệch', 'Hát to hơn', 'Hát nhanh hơn'], 0, 'Vỗ tay giúp giữ nhịp đều.'),
    Q('Một phách trong bài hát thường tương ứng với?', ['Một cái vỗ tay đều', 'Hai cái vỗ', 'Không có vỗ', 'Bốn cái vỗ'], 0, 'Mỗi phách = một cái vỗ đều đặn.'),
    Q('Khi vỗ tay theo nhạc, em nên?', ['Vỗ đều, không nhanh không chậm', 'Vỗ thật nhanh', 'Vỗ thật chậm', 'Không cần đều'], 0, 'Đều đặn là quan trọng nhất.'),
    Q('Bạn nào vỗ tay đúng?', ['Bạn Mai vỗ đều theo nhịp cô', 'Bạn Tú vỗ lung tung', 'Bạn Hà vỗ thật nhanh', 'Bạn Bình không vỗ'], 0, 'Vỗ đều theo nhịp là đúng.'),
    Q('Vỗ tay là một cách?', ['Đệm cho lời hát', 'Phá lời hát', 'Làm bạn rối', 'Không cần thiết'], 0, 'Vỗ tay là cách đệm đơn giản cho bài hát.'),
  ]),

  M(4, 'Nhạc cụ gõ — thanh phách', [
    Q('Thanh phách làm bằng?', ['Hai thanh gỗ ngắn', 'Sắt', 'Nhựa cứng', 'Giấy'], 0, 'Thanh phách là hai thanh gỗ tròn ngắn.'),
    Q('Cách chơi thanh phách?', ['Gõ hai thanh vào nhau', 'Thổi như sáo', 'Kéo như đàn', 'Đập xuống đất'], 0, 'Gõ hai thanh vào nhau tạo ra âm "tách – tách".'),
    Q('Âm của thanh phách là?', ['Khô, giòn', 'Trầm vang', 'Rất to', 'Êm dịu như sáo'], 0, 'Tiếng phách khô, giòn — hợp đệm nhịp.'),
    Q('Thanh phách thường dùng để?', ['Giữ nhịp', 'Hát', 'Múa', 'Chỉ trang trí'], 0, 'Phách giúp giữ nhịp cho bài hát.'),
    Q('Khi gõ phách em nên?', ['Gõ đều theo nhịp', 'Gõ thật mạnh', 'Gõ lung tung', 'Quăng phách đi'], 0, 'Gõ đều theo nhịp là đúng.'),
    Q('Phách là nhạc cụ thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ hơi', 'Nhạc cụ dây', 'Nhạc cụ điện'], 0, 'Phách là nhạc cụ gõ truyền thống.'),
  ]),

  M(5, 'Bài hát "Cháu lên ba"', [
    Q('"Cháu lên ba" là bài hát của nhạc sĩ?', ['Phạm Tuyên', 'Văn Cao', 'Lưu Hữu Phước', 'Trịnh Công Sơn'], 0, 'Bài "Cháu lên ba" do nhạc sĩ Phạm Tuyên sáng tác.'),
    Q('Bài hát nói về?', ['Cháu lên ba đi mẫu giáo', 'Cháu đi học lớp 5', 'Cháu đi làm', 'Cháu đi chơi xa'], 0, 'Bài hát kể chuyện bé 3 tuổi đi mẫu giáo.'),
    Q('Câu hát mở đầu là "Cháu lên ba …"?', ['cháu đi mẫu giáo', 'cháu đi học chữ', 'cháu đi chơi', 'cháu ở nhà'], 0, '"Cháu lên ba, cháu đi mẫu giáo…"'),
    Q('Cảm xúc khi hát bài này?', ['Vui tươi, hồn nhiên', 'Buồn', 'Giận dữ', 'Sợ hãi'], 0, 'Bài hát rộn ràng, hồn nhiên.'),
    Q('Bài hát phù hợp tốc độ?', ['Vừa phải, vui tươi', 'Chậm rất chậm', 'Nhanh như chạy', 'Đứng yên'], 0, 'Tốc độ vừa phải để rõ lời và vui.'),
    Q('Khi hát bài này em nên?', ['Mỉm cười, hát rõ lời', 'Hát thì thầm', 'Hát buồn', 'Không hát'], 0, 'Mỉm cười giúp giọng hát tươi vui hơn.'),
  ]),

  M(6, 'Nhanh và chậm trong âm nhạc', [
    Q('Nhịp nhanh thường gợi cảm giác?', ['Vui, sôi nổi', 'Buồn ngủ', 'Yên tĩnh', 'Sợ hãi'], 0, 'Nhịp nhanh tạo không khí sôi nổi.'),
    Q('Nhịp chậm thường gợi?', ['Êm dịu, sâu lắng', 'Náo nhiệt', 'Lo lắng', 'Giận dữ'], 0, 'Nhịp chậm cho cảm giác sâu lắng.'),
    Q('Bài hát ru em bé thường có tốc độ?', ['Nhanh', 'Chậm', 'Rất nhanh', 'Cực nhanh'], 1, 'Hát ru chậm để em bé dễ ngủ.'),
    Q('Khi cô bảo "hát nhanh hơn", em nên?', ['Hát nhanh nhưng vẫn rõ lời', 'Hát líu lưỡi', 'Hát thật chậm', 'Im lặng'], 0, 'Nhanh nhưng phải rõ lời.'),
    Q('Bài hát đi diễu hành thường tốc độ?', ['Vừa, đều như bước chân', 'Rất chậm', 'Líu lưỡi', 'Đứng yên'], 0, 'Tốc độ đi đều giúp bước chân khớp nhau.'),
    Q('Em có thể đổi tốc độ khi hát không?', ['Có, theo cảm xúc bài hát', 'Không bao giờ', 'Phải luôn nhanh', 'Phải luôn chậm'], 0, 'Bài hát có thể nhanh hay chậm tuỳ nội dung.'),
  ]),

  M(7, 'Bài hát "Mời bạn vui múa ca"', [
    Q('Bài "Mời bạn vui múa ca" của nhạc sĩ?', ['Phạm Tuyên', 'Trần Hoàn', 'Văn Cao', 'Hoàng Vân'], 0, 'Nhạc sĩ Phạm Tuyên là tác giả bài này.'),
    Q('Bài hát mời các bạn làm gì?', ['Vui múa ca cùng nhau', 'Đi ngủ', 'Đi học bài', 'Ăn cơm'], 0, 'Bài hát mời các bạn cùng múa ca.'),
    Q('Cảm xúc khi hát bài này?', ['Vui tươi, rộn ràng', 'Buồn', 'Mệt mỏi', 'Sợ hãi'], 0, 'Giai điệu vui tươi, mời gọi.'),
    Q('Khi hát bài này em có thể?', ['Vừa hát vừa múa nhẹ', 'Ngồi im một chỗ', 'Quay lưng đi', 'Hét to'], 0, 'Vừa hát vừa múa giúp bài thêm sinh động.'),
    Q('Hát bài này nên có nhịp?', ['Đều, vui', 'Lệch nhịp', 'Rất chậm', 'Rất nhanh líu lưỡi'], 0, 'Đều và vui là phù hợp.'),
    Q('Khi cùng các bạn múa, em nên?', ['Làm động tác cùng cả lớp', 'Làm theo ý mình lung tung', 'Đứng yên', 'Bỏ ra ngoài'], 0, 'Múa đều cùng lớp mới đẹp.'),
  ]),

  M(8, 'Nhạc cụ gõ — trống nhỏ', [
    Q('Trống nhỏ thường được làm bằng?', ['Da và gỗ (hoặc nhựa)', 'Giấy', 'Vải', 'Bông'], 0, 'Trống có mặt da căng trên thân gỗ.'),
    Q('Cách chơi trống nhỏ?', ['Gõ bằng tay hoặc dùi', 'Thổi', 'Kéo dây', 'Đập xuống đất'], 0, 'Gõ tay hoặc dùi lên mặt trống.'),
    Q('Âm của trống là?', ['To, vang, sâu', 'Nhỏ thì thầm', 'Cao véo von', 'Êm như sáo'], 0, 'Trống có âm to và vang.'),
    Q('Trống nhỏ thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ dây', 'Nhạc cụ hơi', 'Nhạc cụ điện'], 0, 'Trống là nhạc cụ gõ.'),
    Q('Khi gõ trống em nên?', ['Gõ đều theo nhịp', 'Đập thật mạnh', 'Gõ lung tung', 'Quăng dùi'], 0, 'Đều theo nhịp là đúng.'),
    Q('Trống thường dùng để?', ['Giữ nhịp mạnh cho bài hát', 'Đệm rất nhẹ như đàn', 'Trang trí', 'Không có công dụng'], 0, 'Trống giữ nhịp mạnh mẽ cho bài hát.'),
  ]),

  M(9, 'Bài hát "Cùng quây quần"', [
    Q('"Cùng quây quần" nói về điều gì?', ['Các bạn quây quần ca hát', 'Đi học một mình', 'Đi ngủ', 'Đi chợ'], 0, 'Bài hát kể về các bạn cùng quây quần ca hát.'),
    Q('Khi hát cùng bạn, em nên?', ['Hát đều cùng cả lớp', 'Át tiếng bạn', 'Im lặng', 'Hát sai cố tình'], 0, 'Hát đều giúp lớp hát đẹp.'),
    Q('Cảm xúc khi hát "Cùng quây quần"?', ['Vui, ấm áp', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Bài hát rất vui và ấm áp.'),
    Q('Nếu bạn hát sai, em nên?', ['Cười nhạo', 'Nhẹ nhàng nhắc bạn', 'Bỏ ra ngoài', 'La mắng bạn'], 1, 'Nhẹ nhàng giúp bạn hát tốt hơn.'),
    Q('Hát cùng nhau gọi là?', ['Hát đơn', 'Hát tập thể', 'Hát đôi', 'Hát theo nhạc'], 1, 'Hát tập thể là hát cùng nhau.'),
    Q('Khi hát tập thể em không nên?', ['Hát to át tiếng bạn', 'Hát hoà giọng', 'Lắng nghe nhau', 'Cùng giữ nhịp'], 0, 'Át tiếng bạn làm bài hát mất đẹp.'),
  ]),

  M(10, 'Nghe nhạc — "Quốc ca Việt Nam"', [
    Q('Quốc ca Việt Nam có tên gốc?', ['Tiến quân ca', 'Diệt phát xít', 'Lên đàng', 'Hành quân xa'], 0, 'Quốc ca là bài "Tiến quân ca" của Văn Cao.'),
    Q('Khi hát/ nghe Quốc ca, em có tư thế?', ['Đứng nghiêm, mắt hướng cờ', 'Ngồi tự do', 'Cười đùa', 'Nằm'], 0, 'Đứng nghiêm và hướng về Quốc kỳ là tôn kính.'),
    Q('Quốc ca thường vang lên khi nào ở trường?', ['Giờ chào cờ thứ Hai', 'Giờ ra chơi', 'Giờ ngủ trưa', 'Giờ ăn'], 0, 'Lễ chào cờ thứ Hai là dịp hát Quốc ca.'),
    Q('Khi nghe Quốc ca, em có cười nói không?', ['Có', 'Không, phải trang nghiêm', 'Tuỳ thích', 'Chỉ cười nhẹ'], 1, 'Nghe Quốc ca cần thái độ nghiêm trang.'),
    Q('Quốc kỳ Việt Nam có màu?', ['Đỏ, sao vàng', 'Xanh, sao trắng', 'Trắng, sao xanh', 'Vàng, sao đỏ'], 0, 'Cờ đỏ sao vàng là Quốc kỳ Việt Nam.'),
    Q('Tác giả của Quốc ca là?', ['Văn Cao', 'Phạm Tuyên', 'Hoàng Vân', 'Lưu Hữu Phước'], 0, 'Nhạc sĩ Văn Cao là tác giả "Tiến quân ca".'),
  ]),

  M(11, 'Bài hát "Lý cây xanh"', [
    Q('"Lý cây xanh" là dân ca?', ['Dân ca Nam Bộ', 'Dân ca Bắc Bộ', 'Dân ca quan họ', 'Dân ca Tây Nguyên'], 0, '"Lý cây xanh" là dân ca Nam Bộ.'),
    Q('Bài hát nói về?', ['Cây xanh, con chim hót', 'Mưa to', 'Đi học', 'Mẹ ru con'], 0, 'Bài hát tả cảnh cây xanh có chim hót.'),
    Q('Câu mở đầu là "Cái cây xanh xanh thì lá …"?', ['cũng xanh', 'cũng vàng', 'cũng đỏ', 'cũng tím'], 0, '"Cái cây xanh xanh thì lá cũng xanh…"'),
    Q('Khi hát bài dân ca em nên?', ['Hát mềm mại, rõ lời', 'Hát mạnh như hành quân', 'Hát rất nhanh', 'Hát thì thầm'], 0, 'Dân ca cần giọng mềm mại, tình cảm.'),
    Q('Cảm xúc bài "Lý cây xanh"?', ['Trong sáng, vui tươi', 'Buồn bã', 'Giận dữ', 'Sợ hãi'], 0, 'Giai điệu trong sáng, dễ thương.'),
    Q('Bài "Lý cây xanh" thuộc loại?', ['Dân ca Việt Nam', 'Bài hát nước ngoài', 'Nhạc cách mạng', 'Nhạc ru con'], 0, 'Là dân ca Việt Nam.'),
  ]),

  M(12, 'Cao và thấp trong âm nhạc', [
    Q('Tiếng chim hót thường là âm?', ['Cao', 'Thấp', 'Trầm', 'Im lặng'], 0, 'Chim hót có âm cao, véo von.'),
    Q('Tiếng trống lớn thường là âm?', ['Cao véo von', 'Thấp, trầm', 'Rất cao', 'Không có'], 1, 'Trống lớn cho âm thấp, trầm vang.'),
    Q('Khi cô đàn nốt thấp, em nghe thấy?', ['Âm trầm, dày', 'Âm cao véo von', 'Im lặng', 'Tiếng ồn'], 0, 'Nốt thấp nghe trầm.'),
    Q('Khi cô đàn nốt cao, em nghe?', ['Âm sáng, vút lên', 'Âm trầm dày', 'Im lặng', 'Tiếng động'], 0, 'Nốt cao nghe sáng và vút lên.'),
    Q('Giọng của bạn nhỏ thường?', ['Cao hơn người lớn', 'Thấp hơn người lớn', 'Bằng người lớn', 'Không có giọng'], 0, 'Giọng bạn nhỏ thường cao và trong.'),
    Q('Khi hát em nên?', ['Hát đúng độ cao cô đàn', 'Tự ý đổi độ cao', 'Hát thật cao', 'Hát thật trầm'], 0, 'Hát đúng cao độ là quan trọng.'),
  ]),

  M(13, 'Bài hát "Tìm bạn thân"', [
    Q('"Tìm bạn thân" là bài hát của?', ['Việt Anh', 'Văn Cao', 'Phạm Tuyên', 'Trịnh Công Sơn'], 0, 'Bài "Tìm bạn thân" do nhạc sĩ Việt Anh sáng tác.'),
    Q('Bài hát nói về?', ['Tìm và làm bạn với nhau', 'Đi học một mình', 'Đi xa', 'Đi chợ'], 0, 'Bài hát mời các bạn cùng tìm bạn thân.'),
    Q('Khi hát em nên?', ['Cười tươi, rủ bạn cùng hát', 'Hát một mình', 'Im lặng', 'Quay lưng đi'], 0, 'Cùng hát với bạn là vui nhất.'),
    Q('Cảm xúc bài hát?', ['Vui, thân thiện', 'Buồn', 'Cô đơn', 'Giận dữ'], 0, 'Bài hát ấm áp, thân thiện.'),
    Q('Sau khi học bài này em nên?', ['Quan tâm bạn xung quanh', 'Bỏ mặc bạn', 'Trêu bạn', 'Cô lập bạn'], 0, 'Bài hát dạy em quý tình bạn.'),
    Q('Hát có nhịp?', ['Đều, vui', 'Lệch nhịp', 'Rất chậm', 'Rất nhanh'], 0, 'Đều, vui là phù hợp.'),
  ]),

  M(14, 'Nhạc cụ gõ — song loan', [
    Q('Song loan là?', ['Một nhạc cụ gõ bằng gỗ', 'Một loại đàn', 'Một loại sáo', 'Một loại trống điện'], 0, 'Song loan là nhạc cụ gõ truyền thống Việt Nam.'),
    Q('Cách chơi song loan?', ['Dùng chân hoặc tay gõ', 'Thổi', 'Kéo dây', 'Bóp'], 0, 'Song loan được gõ bằng chân hoặc tay.'),
    Q('Âm của song loan?', ['Khô, sắc, gọn', 'Trầm vang', 'Cao véo von', 'Êm như sáo'], 0, 'Tiếng song loan khô, sắc — hợp giữ nhịp.'),
    Q('Song loan thường dùng trong?', ['Nhạc cải lương, tuồng', 'Nhạc rock', 'Nhạc EDM', 'Nhạc cổ điển phương Tây'], 0, 'Song loan rất phổ biến trong nhạc cải lương, tuồng.'),
    Q('Song loan thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ dây', 'Nhạc cụ hơi', 'Nhạc cụ điện'], 0, 'Song loan là nhạc cụ gõ.'),
    Q('Khi gõ song loan em nên?', ['Gõ đều theo nhịp', 'Đập thật mạnh', 'Gõ lung tung', 'Quăng đi'], 0, 'Đều theo nhịp là đúng.'),
  ]),

  M(15, 'Bài hát "Bắc kim thang"', [
    Q('"Bắc kim thang" là?', ['Đồng dao – dân ca Nam Bộ', 'Nhạc nước ngoài', 'Nhạc thiếu nhi mới', 'Nhạc cách mạng'], 0, '"Bắc kim thang" là đồng dao – dân ca Nam Bộ.'),
    Q('Bài hát có nhịp điệu?', ['Vui tươi, dí dỏm', 'Buồn bã', 'Lo lắng', 'Sợ hãi'], 0, 'Giai điệu vui và dí dỏm.'),
    Q('Câu mở đầu là?', ['"Bắc kim thang cà lang bí rợ"', '"Trời mưa lất phất"', '"Mẹ ru con ngủ"', '"Cháu lên ba"'], 0, '"Bắc kim thang cà lang bí rợ…"'),
    Q('Khi hát em có thể?', ['Vừa hát vừa vỗ tay/làm động tác', 'Ngồi im', 'Quay lưng', 'Bỏ ra ngoài'], 0, 'Vừa hát vừa làm động tác cho vui.'),
    Q('Bài này phù hợp tốc độ?', ['Vui, vừa phải', 'Chậm rất chậm', 'Nhanh líu lưỡi', 'Đứng yên'], 0, 'Vừa phải để rõ lời.'),
    Q('Hát bài này em nên?', ['Mỉm cười, hát rõ lời', 'Buồn rầu', 'Im lặng', 'Hát thì thầm'], 0, 'Mỉm cười giúp giọng vui hơn.'),
  ]),

  M(16, 'Ôn tập: hát + gõ phách', [
    Q('Hát kết hợp gõ phách giúp em?', ['Giữ nhịp đều, hát hay hơn', 'Hát lệch', 'Hát to hơn', 'Hát nhanh hơn'], 0, 'Gõ phách giúp giữ nhịp đều.'),
    Q('Bài "Quê hương tươi đẹp" là dân ca?', ['Nùng', 'Kinh', 'Thái', 'Mường'], 0, 'Dân ca Nùng.'),
    Q('"Cháu lên ba" của nhạc sĩ?', ['Phạm Tuyên', 'Văn Cao', 'Hoàng Vân', 'Trịnh Công Sơn'], 0, 'Phạm Tuyên.'),
    Q('"Lý cây xanh" là dân ca?', ['Nam Bộ', 'Bắc Bộ', 'Quan họ', 'Tây Nguyên'], 0, 'Dân ca Nam Bộ.'),
    Q('Khi hát em nên?', ['Đúng cao độ, đúng nhịp', 'Tuỳ ý sai cũng được', 'Hát thật to', 'Hét lên'], 0, 'Đúng cao độ, đúng nhịp là tốt.'),
    Q('Bạn nào hát ngoan?', ['Bạn Lan đều nhịp, rõ lời', 'Bạn Tú át tiếng bạn', 'Bạn Hà la hét', 'Bạn Bình quay lưng'], 0, 'Đều nhịp, rõ lời là hát đẹp.'),
  ]),

  M(17, 'Ôn tập HK1 — kể tên bài đã học', [
    Q('Bài hát nói về quê hương em đã học?', ['Quê hương tươi đẹp', 'Cháu lên ba', 'Cùng quây quần', 'Bắc kim thang'], 0, '"Quê hương tươi đẹp" là bài về quê hương.'),
    Q('Bài hát về bé 3 tuổi đi mẫu giáo?', ['Cháu lên ba', 'Lý cây xanh', 'Quê hương tươi đẹp', 'Bắc kim thang'], 0, '"Cháu lên ba".'),
    Q('Bài dân ca Nam Bộ về cây và chim?', ['Lý cây xanh', 'Cháu lên ba', 'Cùng quây quần', 'Quê hương tươi đẹp'], 0, '"Lý cây xanh".'),
    Q('Đồng dao – dân ca Nam Bộ là?', ['Bắc kim thang', 'Cháu lên ba', 'Quê hương tươi đẹp', 'Lý cây xanh'], 0, '"Bắc kim thang".'),
    Q('Nhạc cụ gõ làm bằng hai thanh gỗ?', ['Thanh phách', 'Sáo', 'Đàn nhị', 'Trống lớn'], 0, 'Thanh phách.'),
    Q('Quốc ca Việt Nam tên là?', ['Tiến quân ca', 'Diệt phát xít', 'Lên đàng', 'Hành quân xa'], 0, '"Tiến quân ca".'),
  ]),

  M(18, 'Kiểm tra cuối HK1', [
    Q('Hát Quốc ca em phải?', ['Đứng nghiêm trang', 'Cười đùa', 'Ngồi tự do', 'Nằm xuống'], 0, 'Tư thế nghiêm trang.'),
    Q('Vỗ tay theo phách giúp?', ['Hát đúng nhịp', 'Hát lệch', 'Hát to hơn', 'Hát nhanh'], 0, 'Giữ nhịp đều.'),
    Q('Thanh phách thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ hơi', 'Nhạc cụ dây', 'Nhạc cụ điện'], 0, 'Nhạc cụ gõ.'),
    Q('Tiếng chim hót là âm?', ['Cao', 'Thấp', 'Trầm', 'Im lặng'], 0, 'Âm cao véo von.'),
    Q('Bài hát ru em bé thường?', ['Nhanh sôi nổi', 'Chậm, êm dịu', 'Rất nhanh', 'To như trống'], 1, 'Chậm và êm để bé ngủ.'),
    Q('Khi hát tập thể em nên?', ['Hoà giọng cùng bạn', 'Át tiếng bạn', 'Im lặng', 'Hát sai cố tình'], 0, 'Hoà giọng để cả lớp hát đẹp.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bài hát "Sắp đến Tết rồi"', [
    Q('"Sắp đến Tết rồi" của nhạc sĩ?', ['Hoàng Vân', 'Trịnh Công Sơn', 'Phạm Tuyên', 'Văn Cao'], 0, 'Nhạc sĩ Hoàng Vân sáng tác bài này.'),
    Q('Bài hát nói về?', ['Niềm vui sắp đến Tết', 'Đi học', 'Đi ngủ', 'Mưa to'], 0, 'Bé háo hức vì sắp được đón Tết.'),
    Q('Cảm xúc bài hát?', ['Rộn ràng, vui tươi', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Rộn ràng đón Tết.'),
    Q('Câu mở đầu là "Sắp đến Tết rồi …"?', ['đến trường rất vui', 'đến trường buồn quá', 'đến trường thật xa', 'đến trường nhớ mẹ'], 0, '"Sắp đến Tết rồi, đến trường rất vui…"'),
    Q('Khi Tết đến em được?', ['Mặc áo mới, chúc Tết ông bà', 'Đi học bình thường', 'Ở một mình', 'Buồn rầu'], 0, 'Tết là dịp đoàn viên, mặc áo mới.'),
    Q('Khi hát bài này em nên?', ['Tươi cười, rộn ràng', 'Buồn rầu', 'Im lặng', 'Quay lưng'], 0, 'Tươi cười cho hợp không khí Tết.'),
  ]),

  M(20, 'Bài hát "Cả nhà thương nhau"', [
    Q('"Cả nhà thương nhau" của nhạc sĩ?', ['Phan Văn Minh', 'Phạm Tuyên', 'Văn Cao', 'Hoàng Vân'], 0, 'Nhạc sĩ Phan Văn Minh sáng tác bài này.'),
    Q('Bài hát nói về?', ['Tình yêu thương trong gia đình', 'Đi học', 'Mưa', 'Đi chợ'], 0, 'Tình yêu thương bố – mẹ – con.'),
    Q('Câu mở đầu là "Ba thương con vì con …"?', ['giống mẹ', 'giống ba', 'giống ông', 'giống cô'], 0, '"Ba thương con vì con giống mẹ…"'),
    Q('Cảm xúc bài hát?', ['Ấm áp, yêu thương', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Ấm áp, yêu thương.'),
    Q('Khi hát bài này em nên nghĩ về?', ['Bố mẹ, người thân', 'Đồ chơi mới', 'Bài kiểm tra', 'Trò chơi điện tử'], 0, 'Nghĩ về bố mẹ giúp hát truyền cảm.'),
    Q('Bài hát phù hợp tốc độ?', ['Vừa, êm, ấm áp', 'Rất nhanh', 'Líu lưỡi', 'Đứng yên'], 0, 'Vừa và êm để truyền cảm xúc.'),
  ]),

  M(21, 'Đếm phách 1 – 2', [
    Q('Bài hát nhịp 2/4 em đếm như thế nào?', ['1 – 2, 1 – 2…', '1 – 2 – 3', '1 – 2 – 3 – 4', 'Tự do'], 0, 'Nhịp 2/4 đếm 1 – 2 đều nhau.'),
    Q('Phách 1 là phách?', ['Mạnh', 'Nhẹ', 'Im lặng', 'Cao nhất'], 0, 'Phách 1 thường là phách mạnh.'),
    Q('Phách 2 là phách?', ['Mạnh', 'Nhẹ', 'Cao nhất', 'Trầm nhất'], 1, 'Phách 2 thường nhẹ hơn phách 1.'),
    Q('Khi vỗ tay theo nhịp 2/4 em vỗ?', ['Đều mỗi phách', 'Lung tung', 'Chỉ vỗ một lần', 'Không vỗ'], 0, 'Đều mỗi phách giúp giữ nhịp.'),
    Q('Khi cô đếm "1 – 2", em hát?', ['Vào nhịp, đều theo cô', 'Hát ngược', 'Hát sau cô 1 phút', 'Không hát'], 0, 'Vào nhịp theo cô là đúng.'),
    Q('Đếm phách giúp em?', ['Hát đều, không sai nhịp', 'Hát to hơn', 'Hát nhanh hơn', 'Hát chậm'], 0, 'Giữ nhịp đều.'),
  ]),

  M(22, 'Tết — bài hát "Sắp đến Tết rồi" (ôn)', [
    Q('Tết là dịp em đoàn viên với?', ['Gia đình, người thân', 'Bạn xa lạ', 'Người lạ', 'Một mình'], 0, 'Tết là dịp gia đình quây quần.'),
    Q('Bài "Sắp đến Tết rồi" do nhạc sĩ?', ['Hoàng Vân', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Hoàng Vân.'),
    Q('Cảm xúc của bài?', ['Rộn ràng, vui tươi', 'Buồn', 'Lo lắng', 'Giận dữ'], 0, 'Rộn ràng đón Tết.'),
    Q('Tết, em có thể hát tặng?', ['Ông bà, cha mẹ', 'Không ai cả', 'Tự mình thôi', 'Tivi'], 0, 'Hát tặng ông bà cha mẹ là món quà ý nghĩa.'),
    Q('Khi đi chúc Tết em nên?', ['Lễ phép, vui vẻ', 'Đòi lì xì luôn', 'Cãi người lớn', 'Im lặng quay đi'], 0, 'Lễ phép là biểu hiện đẹp ngày Tết.'),
    Q('Hoa đào nở vào dịp nào?', ['Tết Nguyên đán', 'Mùa hè', 'Mùa thu', 'Trung thu'], 0, 'Hoa đào báo hiệu Tết.'),
  ]),

  M(23, 'Bài hát "Quả"', [
    Q('Bài hát "Quả" do nhạc sĩ?', ['Xanh Xanh', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 1, 'Bài "Quả" của nhạc sĩ Phạm Tuyên (Phạm Tuyên có nhiều bài cho thiếu nhi).'),
    Q('Bài "Quả" hỏi về?', ['Các loại quả như khế, trứng…', 'Bài học toán', 'Mưa', 'Mẹ ru'], 0, 'Bài hát hỏi đáp về các loại quả.'),
    Q('Khi hát bài này em có thể?', ['Hỏi đáp cùng bạn', 'Im lặng', 'Quay lưng', 'Bỏ ra ngoài'], 0, 'Hỏi đáp cùng bạn cho vui.'),
    Q('Quả khế khi cắt ra có dạng?', ['Hình ngôi sao', 'Hình vuông', 'Hình tròn đặc', 'Hình tam giác'], 0, 'Quả khế cắt ngang có hình ngôi sao 5 cánh.'),
    Q('Cảm xúc bài hát?', ['Vui, hồn nhiên', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Vui và hồn nhiên.'),
    Q('Khi hát hỏi đáp, em nên?', ['Lắng nghe và đáp đúng nhịp', 'Đáp lung tung', 'Im lặng', 'La hét'], 0, 'Lắng nghe và đáp đúng nhịp là đúng.'),
  ]),

  M(24, 'Nhịp 2/4 — vỗ tay theo nhịp mạnh và nhẹ', [
    Q('Trong nhịp 2/4, phách mạnh là phách?', ['1', '2', '3', '4'], 0, 'Phách 1 là phách mạnh.'),
    Q('Phách nhẹ là phách?', ['1', '2', '3', '4'], 1, 'Phách 2 là phách nhẹ.'),
    Q('Vỗ tay theo nhịp mạnh – nhẹ giúp em?', ['Cảm nhận tiết tấu', 'Hát to hơn', 'Hát nhanh hơn', 'Át tiếng bạn'], 0, 'Giúp em cảm nhận tiết tấu bài hát.'),
    Q('Khi vỗ phách mạnh, em vỗ?', ['Mạnh hơn một chút', 'Yếu hơn', 'Không vỗ', 'Vỗ nhanh hơn'], 0, 'Mạnh hơn để nổi bật phách mạnh.'),
    Q('Khi vỗ phách nhẹ, em vỗ?', ['Nhẹ hơn', 'Mạnh hơn', 'Không vỗ', 'Vỗ rất chậm'], 0, 'Nhẹ để phân biệt với phách mạnh.'),
    Q('Cô đếm "1 – 2 – 1 – 2…", nhịp này là?', ['Nhịp 2/4', 'Nhịp 3/4', 'Nhịp 4/4', 'Tự do'], 0, 'Đếm 1 – 2 là nhịp 2/4.'),
  ]),

  M(25, 'Bài hát "Đi học về"', [
    Q('Bài "Đi học về" của nhạc sĩ?', ['Hoàng Long – Hoàng Lân', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Hai anh em nhạc sĩ Hoàng Long – Hoàng Lân.'),
    Q('Bài hát nói về?', ['Bé đi học về chào bố mẹ', 'Bé đi chơi', 'Bé đi ngủ', 'Bé đi chợ'], 0, 'Bài hát kể chuyện bé đi học về.'),
    Q('Câu mở đầu là "Đi học về là …"?', ['đi học về', 'là đi chơi', 'là ăn cơm', 'là đi ngủ'], 0, '"Đi học về là đi học về…"'),
    Q('Bài hát dạy em?', ['Chào hỏi bố mẹ khi về nhà', 'Vứt cặp rồi chơi', 'Bỏ ra ngoài', 'Cãi mẹ'], 0, 'Đi học về phải chào hỏi bố mẹ.'),
    Q('Cảm xúc bài hát?', ['Vui, ấm áp', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Vui và ấm áp.'),
    Q('Khi hát bài này em nên?', ['Cười tươi, hát rõ lời', 'Im lặng', 'Quay lưng', 'La hét'], 0, 'Cười tươi để giọng hát ấm.'),
  ]),

  M(26, 'Nốt đen và nốt trắng (làm quen)', [
    Q('Nốt đen kéo dài?', ['1 phách', '2 phách', '3 phách', '4 phách'], 0, 'Nốt đen có giá trị 1 phách.'),
    Q('Nốt trắng kéo dài?', ['1 phách', '2 phách', '3 phách', '4 phách'], 1, 'Nốt trắng có giá trị 2 phách.'),
    Q('Nốt đen có hình?', ['Đầu đen, có đuôi', 'Đầu trắng, có đuôi', 'Tròn rỗng', 'Vuông'], 0, 'Nốt đen có đầu tô đen.'),
    Q('Nốt trắng có hình?', ['Đầu trắng (rỗng), có đuôi', 'Đầu đen có đuôi', 'Vuông', 'Tam giác'], 0, 'Nốt trắng có đầu rỗng.'),
    Q('Khi gặp nốt trắng em ngân?', ['Lâu hơn nốt đen', 'Ngắn hơn nốt đen', 'Bằng nốt đen', 'Không ngân'], 0, 'Nốt trắng dài bằng 2 nốt đen.'),
    Q('Hai nốt đen liền nhau bằng?', ['Một nốt trắng', 'Một nốt đen', 'Một nốt tròn', 'Im lặng'], 0, 'Hai nốt đen = một nốt trắng (cùng 2 phách).'),
  ]),

  M(27, 'Bài hát "Đàn gà con"', [
    Q('Bài "Đàn gà con" có lời Việt do?', ['Việt Anh đặt lời', 'Phạm Tuyên đặt lời', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Lời Việt Anh dựa trên nhạc nước ngoài (Filippenko).'),
    Q('Bài hát nói về?', ['Đàn gà con và mẹ gà', 'Đàn cá', 'Đàn chim', 'Đàn cừu'], 0, 'Đàn gà con vui đùa cùng mẹ gà.'),
    Q('Tiếng kêu của gà con?', ['Chiếp chiếp', 'Meo meo', 'Gâu gâu', 'Ò ó o'], 0, 'Gà con kêu "chiếp chiếp".'),
    Q('Khi hát em có thể làm động tác?', ['Mô phỏng gà con kêu', 'Đứng yên', 'Quay lưng', 'Bỏ ra ngoài'], 0, 'Mô phỏng động tác gà con cho vui.'),
    Q('Cảm xúc bài hát?', ['Vui, ngộ nghĩnh', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Vui và ngộ nghĩnh.'),
    Q('Bài hát có nhịp?', ['Đều, vừa phải', 'Lệch nhịp', 'Rất chậm', 'Rất nhanh líu lưỡi'], 0, 'Nhịp đều, vừa phải.'),
  ]),

  M(28, 'Bài hát "Chú voi con ở Bản Đôn"', [
    Q('"Chú voi con ở Bản Đôn" của nhạc sĩ?', ['Phạm Tuyên', 'Văn Cao', 'Hoàng Vân', 'Trịnh Công Sơn'], 0, 'Nhạc sĩ Phạm Tuyên sáng tác bài này.'),
    Q('Bài hát kể về?', ['Chú voi con ở Bản Đôn (Tây Nguyên)', 'Chú mèo con', 'Chú chim con', 'Chú cá con'], 0, 'Chú voi con vùng Tây Nguyên.'),
    Q('Bản Đôn ở đâu?', ['Tây Nguyên', 'Hà Nội', 'TP.HCM', 'Đà Nẵng'], 0, 'Bản Đôn thuộc Đắk Lắk – Tây Nguyên.'),
    Q('Câu mở đầu là "Chú voi con ở Bản Đôn …"?', ['chưa có ngà', 'đã có ngà', 'rất to', 'đang đói'], 0, '"Chú voi con ở Bản Đôn, chưa có ngà nên còn trẻ con…"'),
    Q('Khi hát em nên?', ['Vui, ngộ nghĩnh', 'Buồn rầu', 'Sợ hãi', 'Im lặng'], 0, 'Vui, ngộ nghĩnh phù hợp bài hát.'),
    Q('Bài hát có cảm xúc?', ['Yêu mến chú voi', 'Sợ voi', 'Ghét voi', 'Không có cảm xúc'], 0, 'Bài hát thể hiện sự yêu mến voi.'),
  ]),

  M(29, 'Bài hát "Múa vui"', [
    Q('"Múa vui" của nhạc sĩ?', ['Lưu Hữu Phước', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Nhạc sĩ Lưu Hữu Phước sáng tác bài này.'),
    Q('Bài hát mời các bạn?', ['Cầm tay nhau múa hát', 'Đi ngủ', 'Đi học bài', 'Đi chợ'], 0, 'Bài hát mời các bạn cầm tay múa hát.'),
    Q('Câu mở đầu "Cùng nhau múa …"?', ['xung quanh vòng', 'một mình', 'thật buồn', 'rồi đi ngủ'], 0, '"Cùng nhau múa xung quanh vòng…"'),
    Q('Khi múa em nên?', ['Cùng làm động tác với bạn', 'Tự ý lung tung', 'Đứng yên', 'Bỏ ra ngoài'], 0, 'Múa đều cùng bạn mới đẹp.'),
    Q('Cảm xúc bài hát?', ['Vui, rộn ràng', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Vui và rộn ràng.'),
    Q('Bài hát dạy em?', ['Đoàn kết, vui chơi cùng bạn', 'Tự chơi một mình', 'Bắt nạt bạn', 'Cô lập bạn'], 0, 'Đoàn kết là điều bài hát muốn truyền tải.'),
  ]),

  M(30, 'Phân biệt âm thanh nhạc cụ', [
    Q('Tiếng "tách tách" giòn là của?', ['Thanh phách', 'Sáo', 'Đàn nhị', 'Trống lớn'], 0, 'Thanh phách kêu "tách tách".'),
    Q('Tiếng "tùng tùng" vang là của?', ['Trống', 'Sáo', 'Đàn tranh', 'Phách'], 0, 'Trống kêu "tùng tùng".'),
    Q('Tiếng "véo von" cao là của?', ['Sáo', 'Trống', 'Phách', 'Đàn đáy'], 0, 'Sáo có âm cao véo von.'),
    Q('Đàn nhị có?', ['Hai dây kéo bằng vĩ', 'Một dây', 'Sáu dây gảy', 'Không có dây'], 0, 'Đàn nhị có 2 dây kéo bằng vĩ.'),
    Q('Đàn tranh có?', ['Nhiều dây gảy', 'Hai dây kéo', 'Một dây', 'Không có dây'], 0, 'Đàn tranh có nhiều dây gảy bằng tay.'),
    Q('Phách, trống, song loan thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ dây', 'Nhạc cụ hơi', 'Nhạc cụ điện'], 0, 'Cả ba đều là nhạc cụ gõ.'),
  ]),

  M(31, 'Bài hát "Năm ngón tay ngoan"', [
    Q('"Năm ngón tay ngoan" của nhạc sĩ?', ['Trần Văn Thụ', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Nhạc sĩ Trần Văn Thụ sáng tác bài này.'),
    Q('Bài hát có mấy ngón tay?', ['3 ngón', '4 ngón', '5 ngón', '10 ngón'], 2, 'Năm ngón tay trên một bàn tay.'),
    Q('Mỗi ngón tay trong bài đều?', ['Ngoan, đáng yêu', 'Lười biếng', 'Hư hỏng', 'Xấu xí'], 0, 'Bài hát kể về các ngón tay ngoan.'),
    Q('Khi hát em có thể?', ['Làm động tác với các ngón tay', 'Đứng yên', 'Quay lưng', 'Bỏ ra ngoài'], 0, 'Vừa hát vừa giơ ngón tay cho vui.'),
    Q('Cảm xúc bài hát?', ['Vui, hồn nhiên', 'Buồn', 'Sợ hãi', 'Giận dữ'], 0, 'Vui và hồn nhiên.'),
    Q('Bài hát dạy em?', ['Yêu quý đôi tay của mình', 'Vứt bỏ', 'Phá hoại', 'Không quan tâm'], 0, 'Đôi tay rất quý — em hãy giữ gìn.'),
  ]),

  M(32, 'Bài hát "Trời nắng, trời mưa"', [
    Q('"Trời nắng, trời mưa" của nhạc sĩ?', ['Đặng Nhất Mai', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 0, 'Nhạc sĩ Đặng Nhất Mai sáng tác bài này.'),
    Q('Bài hát nói về?', ['Các bạn thỏ đi tắm nắng và chạy mưa', 'Đi học', 'Đi chợ', 'Đi ngủ'], 0, 'Các bạn thỏ vui đùa rồi trú mưa.'),
    Q('Khi trời mưa em nên?', ['Mặc áo mưa hoặc trú mưa', 'Đứng giữa trời cho ướt', 'Chạy nhảy dưới mưa lâu', 'Tắm mưa lâu'], 0, 'Tránh mưa để không bị cảm lạnh.'),
    Q('Bài hát có nhịp?', ['Vui, đều', 'Lệch', 'Rất chậm', 'Rất nhanh'], 0, 'Vui và đều.'),
    Q('Khi hát em nên?', ['Cười tươi, làm động tác', 'Im lặng', 'Quay lưng', 'Bỏ ra ngoài'], 0, 'Vừa hát vừa làm động tác cho sinh động.'),
    Q('Cảm xúc bài hát?', ['Vui, ngộ nghĩnh', 'Buồn', 'Lo lắng', 'Giận dữ'], 0, 'Vui và ngộ nghĩnh.'),
  ]),

  M(33, 'Ôn tập: nhạc cụ gõ + nốt đen, nốt trắng', [
    Q('Nốt đen = mấy phách?', ['1', '2', '3', '4'], 0, '1 phách.'),
    Q('Nốt trắng = mấy phách?', ['1', '2', '3', '4'], 1, '2 phách.'),
    Q('Phách, song loan, trống thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ hơi', 'Nhạc cụ dây', 'Nhạc cụ điện'], 0, 'Nhạc cụ gõ.'),
    Q('Vỗ tay theo phách giúp?', ['Giữ nhịp đều', 'Hát lệch', 'Hát to', 'Hát nhanh'], 0, 'Giữ nhịp đều.'),
    Q('Nhịp 2/4 đếm?', ['1 – 2, 1 – 2', '1 – 2 – 3 – 4', '1 – 2 – 3', 'Tự do'], 0, '1 – 2 đều nhau.'),
    Q('Bạn nào hát đẹp?', ['Đúng cao độ, đúng nhịp, rõ lời', 'Hát thật to át bạn', 'Hét lên', 'Hát lệch nhịp'], 0, 'Đúng cao độ và nhịp là đẹp.'),
  ]),

  M(34, 'Ôn tập HK2 — các bài hát đã học', [
    Q('Bài về Tết là?', ['Sắp đến Tết rồi', 'Cháu lên ba', 'Lý cây xanh', 'Đàn gà con'], 0, '"Sắp đến Tết rồi".'),
    Q('Bài về tình cảm gia đình là?', ['Cả nhà thương nhau', 'Bắc kim thang', 'Đàn gà con', 'Múa vui'], 0, '"Cả nhà thương nhau".'),
    Q('Bài về chú voi con là?', ['Chú voi con ở Bản Đôn', 'Đàn gà con', 'Lý cây xanh', 'Quê hương tươi đẹp'], 0, '"Chú voi con ở Bản Đôn".'),
    Q('Bài về đi học về là?', ['Đi học về', 'Đi học', 'Cháu lên ba', 'Tìm bạn thân'], 0, '"Đi học về".'),
    Q('Bài về các ngón tay là?', ['Năm ngón tay ngoan', 'Cả nhà thương nhau', 'Múa vui', 'Trời nắng trời mưa'], 0, '"Năm ngón tay ngoan".'),
    Q('Bài về thỏ và mưa nắng là?', ['Trời nắng, trời mưa', 'Đàn gà con', 'Quả', 'Đi học về'], 0, '"Trời nắng, trời mưa".'),
  ]),

  M(35, 'Tổng kết — Em yêu âm nhạc', [
    Q('Âm nhạc giúp em?', ['Vui vẻ, sống tích cực', 'Buồn hơn', 'Mệt mỏi', 'Không có ích'], 0, 'Âm nhạc làm cuộc sống đẹp hơn.'),
    Q('Khi nghe nhạc em nên?', ['Lắng nghe, cảm nhận', 'Nói chuyện to át nhạc', 'Bỏ đi', 'Phá nhạc'], 0, 'Lắng nghe để cảm nhận âm nhạc.'),
    Q('Hát cùng bạn bè giúp em?', ['Đoàn kết, vui vẻ', 'Cô đơn', 'Mệt mỏi', 'Bị bạn ghét'], 0, 'Cùng hát là cùng vui.'),
    Q('Sau một năm học, em đã biết hát?', ['Nhiều bài hay', 'Không bài nào', 'Chỉ một bài', 'Không nhớ'], 0, 'Em đã biết nhiều bài hát thiếu nhi.'),
    Q('Lên lớp 2, em mong?', ['Học thêm nhiều bài hát mới', 'Quên hết', 'Không hát nữa', 'Bỏ môn nhạc'], 0, 'Cứ tiếp tục yêu âm nhạc nhé.'),
    Q('Em yêu âm nhạc nghĩa là?', ['Trân trọng và hát bằng cả tấm lòng', 'Chỉ hát lúc cô bắt', 'Hát lung tung', 'Phá tiếng hát bạn'], 0, 'Hát bằng cả tấm lòng là yêu âm nhạc.'),
  ]),
];

export const P1AN_SCENARIOS = indexBy(P1AN_WEEKS);
