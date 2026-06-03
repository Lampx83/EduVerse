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
    Q('"Quê hương tươi đẹp" là dân ca của dân tộc nào?', ['Dân ca Nùng', 'Dân ca Khmer', 'Dân ca Kinh', 'Dân ca Thái'], 0, '"Quê hương tươi đẹp" là dân ca Nùng được đặt lời mới.'),
    Q('Bài hát nói về điều gì?', ['Mùa xuân', 'Đi học', 'Vẻ đẹp quê hương', 'Mẹ ru con'], 2, 'Bài hát ca ngợi vẻ đẹp quê hương.'),
    Q('Khi hát bài này, em nên có cảm xúc?', ['Buồn bã', 'Sợ hãi', 'Giận dữ', 'Vui tươi, tự hào'], 3, 'Bài hát có giai điệu vui tươi, êm dịu.'),
    Q('Câu mở đầu bài hát là "Quê hương em …"?', ['buồn lắm', 'ướt át mưa', 'biết bao tươi đẹp', 'xa quá rồi'], 2, '"Quê hương em biết bao tươi đẹp…"'),
    Q('Khi hát em ngồi/đứng thế nào?', ['Ngồi/đứng thẳng, mắt nhìn cô', 'Nằm xuống', 'Ngồi gục xuống bàn', 'Quay lưng đi'], 0, 'Tư thế đẹp giúp hơi thở tốt, hát hay hơn.'),
    Q('Khi cô đánh nhịp, em nên?', ['Hát theo nhịp tay cô', 'Hát thật nhanh cho xong', 'Hát to át lời bạn', 'Hát thật chậm'], 0, 'Hát theo nhịp cô đánh giúp cả lớp hát đều.'),
  ]),

  M(2, 'Nghe nhạc — phân biệt to và nhỏ', [
    Q('Âm thanh to là âm thanh thế nào?', ['Yên lặng', 'Không có âm', 'Nhỏ, êm, thì thầm', 'Vang, mạnh, nghe rõ'], 3, 'Âm to nghe rõ và vang.'),
    Q('Tiếng trống thường là âm?', ['Im lặng', 'Không nghe được', 'Nhỏ như tiếng lá rơi', 'To'], 3, 'Trống là nhạc cụ có âm to.'),
    Q('Tiếng thì thầm là âm?', ['Không nghe được', 'Rất to', 'To như tiếng trống', 'Nhỏ'], 3, 'Thì thầm là âm rất nhỏ.'),
    Q('Khi cô bảo "hát to lên", em nên?', ['Hát nhỏ hơn', 'Hát to vừa phải, rõ lời', 'Hét thật to', 'Im lặng'], 1, 'To đủ rõ lời, không phải hét.'),
    Q('Trong lớp học em nên nói âm thanh thế nào?', ['Nói vừa nghe, không hét', 'Im lặng', 'Thì thầm cả ngày', 'Hét thật to'], 0, 'Nói vừa nghe là lịch sự trong lớp.'),
    Q('Khi nghe nhạc trầm em sẽ thấy?', ['Nhức tai', 'Khó chịu', 'Êm dịu, dễ chịu', 'Sợ hãi'], 2, 'Âm thanh êm dịu khiến em dễ chịu.'),
  ]),

  M(3, 'Vỗ tay theo phách bài "Quê hương tươi đẹp"', [
    Q('Phách là gì?', ['Tên một con vật', 'Một loại bánh', 'Một loại quả', 'Đơn vị thời gian đều đặn trong nhạc'], 3, 'Phách là nhịp đều giúp ta vỗ tay theo nhạc.'),
    Q('Vỗ tay theo phách giúp em?', ['Hát nhanh hơn', 'Hát lệch', 'Hát đúng nhịp', 'Hát to hơn'], 2, 'Vỗ tay giúp giữ nhịp đều.'),
    Q('Một phách trong bài hát thường tương ứng với?', ['Không có vỗ', 'Hai cái vỗ', 'Bốn cái vỗ', 'Một cái vỗ tay đều'], 3, 'Mỗi phách = một cái vỗ đều đặn.'),
    Q('Khi vỗ tay theo nhạc, em nên?', ['Vỗ thật chậm', 'Vỗ đều, không nhanh không chậm', 'Vỗ thật nhanh', 'Không cần đều'], 1, 'Đều đặn là quan trọng nhất.'),
    Q('Bạn nào vỗ tay đúng?', ['Bạn Bình không vỗ', 'Bạn Hà vỗ thật nhanh', 'Bạn Mai vỗ đều theo nhịp cô', 'Bạn Tú vỗ lung tung'], 2, 'Vỗ đều theo nhịp là đúng.'),
    Q('Vỗ tay là một cách?', ['Đệm cho lời hát', 'Phá lời hát', 'Không cần thiết', 'Làm bạn rối'], 0, 'Vỗ tay là cách đệm đơn giản cho bài hát.'),
  ]),

  M(4, 'Nhạc cụ gõ — thanh phách', [
    Q('Thanh phách làm bằng?', ['Nhựa cứng', 'Một ống sắt dài', 'Hai thanh gỗ ngắn', 'Vỏ tre mỏng'], 2, 'Thanh phách là hai thanh gỗ tròn ngắn.'),
    Q('Cách chơi thanh phách?', ['Đập xuống đất', 'Gõ hai thanh vào nhau', 'Kéo như đàn', 'Thổi như sáo'], 1, 'Gõ hai thanh vào nhau tạo ra âm "tách – tách".'),
    Q('Âm của thanh phách là?', ['Trầm vang', 'Rất to', 'Êm dịu như sáo', 'Khô, giòn'], 3, 'Tiếng phách khô, giòn — hợp đệm nhịp.'),
    Q('Thanh phách thường dùng để?', ['Giữ nhịp', 'Tạo giai điệu chính', 'Chỉ trang trí', 'Thay tiếng hát của ca sĩ'], 0, 'Phách giúp giữ nhịp cho bài hát.'),
    Q('Khi gõ phách em nên?', ['Quăng phách đi', 'Gõ thật mạnh', 'Gõ lung tung', 'Gõ đều theo nhịp'], 3, 'Gõ đều theo nhịp là đúng.'),
    Q('Phách là nhạc cụ thuộc nhóm?', ['Nhạc cụ điện', 'Nhạc cụ gõ', 'Nhạc cụ dây', 'Nhạc cụ hơi'], 1, 'Phách là nhạc cụ gõ truyền thống.'),
  ]),

  M(5, 'Bài hát "Cháu lên ba"', [
    Q('"Cháu lên ba" là bài hát của nhạc sĩ?', ['Văn Cao', 'Phạm Tuyên', 'Trịnh Công Sơn', 'Lưu Hữu Phước'], 1, 'Bài "Cháu lên ba" do nhạc sĩ Phạm Tuyên sáng tác.'),
    Q('Bài hát nói về?', ['Cháu lên ba đi mẫu giáo', 'Cháu đi làm', 'Cháu đi học lớp 5', 'Cháu đi chơi xa'], 0, 'Bài hát kể chuyện bé 3 tuổi đi mẫu giáo.'),
    Q('Câu hát mở đầu là "Cháu lên ba …"?', ['cháu đi chơi', 'cháu đi mẫu giáo', 'cháu ở nhà', 'cháu đi học chữ'], 1, '"Cháu lên ba, cháu đi mẫu giáo…"'),
    Q('Cảm xúc khi hát bài này?', ['Sợ hãi', 'Buồn, da diết', 'Vui tươi, hồn nhiên', 'Giận dữ'], 2, 'Bài hát rộn ràng, hồn nhiên.'),
    Q('Bài hát phù hợp tốc độ?', ['Vừa phải, vui tươi', 'Nhanh như chạy', 'Đứng yên', 'Chậm rất chậm'], 0, 'Tốc độ vừa phải để rõ lời và vui.'),
    Q('Khi hát bài này em nên?', ['Mỉm cười, hát rõ lời', 'Hát thì thầm', 'Không hát', 'Hát buồn'], 0, 'Mỉm cười giúp giọng hát tươi vui hơn.'),
  ]),

  M(6, 'Nhanh và chậm trong âm nhạc', [
    Q('Nhịp nhanh thường gợi cảm giác?', ['Yên tĩnh', 'Vui, sôi nổi', 'Sợ hãi', 'Buồn ngủ'], 1, 'Nhịp nhanh tạo không khí sôi nổi.'),
    Q('Nhịp chậm thường gợi?', ['Náo nhiệt', 'Giận dữ', 'Lo lắng', 'Êm dịu, sâu lắng'], 3, 'Nhịp chậm cho cảm giác sâu lắng.'),
    Q('Bài hát ru em bé thường có tốc độ?', ['Chậm', 'Nhanh và rộn ràng', 'Rất nhanh', 'Cực nhanh'], 0, 'Hát ru chậm để em bé dễ ngủ.'),
    Q('Khi cô bảo "hát nhanh hơn", em nên?', ['Im lặng', 'Hát nhanh nhưng vẫn rõ lời', 'Hát thật chậm', 'Hát líu lưỡi'], 1, 'Nhanh nhưng phải rõ lời.'),
    Q('Bài hát đi diễu hành thường tốc độ?', ['Líu lưỡi', 'Rất chậm', 'Vừa, đều như bước chân', 'Đứng yên'], 2, 'Tốc độ đi đều giúp bước chân khớp nhau.'),
    Q('Em có thể đổi tốc độ khi hát không?', ['Không bao giờ', 'Phải luôn chậm', 'Có, theo cảm xúc bài hát', 'Phải luôn nhanh'], 2, 'Bài hát có thể nhanh hay chậm tuỳ nội dung.'),
  ]),

  M(7, 'Bài hát "Mời bạn vui múa ca"', [
    Q('Bài "Mời bạn vui múa ca" của nhạc sĩ?', ['Văn Cao', 'Hoàng Vân', 'Trần Hoàn', 'Phạm Tuyên'], 3, 'Nhạc sĩ Phạm Tuyên là tác giả bài này.'),
    Q('Bài hát mời các bạn làm gì?', ['Ăn cơm', 'Đi học bài', 'Đi ngủ', 'Vui múa ca cùng nhau'], 3, 'Bài hát mời các bạn cùng múa ca.'),
    Q('Cảm xúc khi hát bài này?', ['Sợ hãi', 'Vui tươi, rộn ràng', 'Mệt mỏi', 'Buồn, sâu lắng'], 1, 'Giai điệu vui tươi, mời gọi.'),
    Q('Khi hát bài này em có thể?', ['Ngồi im một chỗ', 'Hét to', 'Quay lưng đi', 'Vừa hát vừa múa nhẹ'], 3, 'Vừa hát vừa múa giúp bài thêm sinh động.'),
    Q('Hát bài này nên có nhịp?', ['Rất nhanh líu lưỡi', 'Lệch nhịp', 'Rất chậm', 'Đều, vui'], 3, 'Đều và vui là phù hợp.'),
    Q('Khi cùng các bạn múa, em nên?', ['Làm theo ý mình lung tung', 'Làm động tác cùng cả lớp', 'Đứng yên', 'Bỏ ra ngoài'], 1, 'Múa đều cùng lớp mới đẹp.'),
  ]),

  M(8, 'Nhạc cụ gõ — trống nhỏ', [
    Q('Trống nhỏ thường được làm bằng?', ['Bông và len mềm', 'Da và gỗ (hoặc nhựa)', 'Giấy cứng cuộn tròn', 'Vải dày nhiều lớp'], 1, 'Trống có mặt da căng trên thân gỗ.'),
    Q('Cách chơi trống nhỏ?', ['Đập xuống đất', 'Thổi vào lỗ nhỏ trên trống', 'Kéo dây', 'Gõ bằng tay hoặc dùi'], 3, 'Gõ tay hoặc dùi lên mặt trống.'),
    Q('Âm của trống là?', ['Êm như sáo', 'Cao véo von', 'To, vang, sâu', 'Nhỏ thì thầm'], 2, 'Trống có âm to và vang.'),
    Q('Trống nhỏ thuộc nhóm?', ['Nhạc cụ hơi', 'Nhạc cụ dây', 'Nhạc cụ điện', 'Nhạc cụ gõ'], 3, 'Trống là nhạc cụ gõ.'),
    Q('Khi gõ trống em nên?', ['Đập thật mạnh', 'Gõ đều theo nhịp', 'Quăng dùi', 'Gõ lung tung'], 1, 'Đều theo nhịp là đúng.'),
    Q('Trống thường dùng để?', ['Trang trí', 'Không có công dụng', 'Đệm rất nhẹ như đàn', 'Giữ nhịp mạnh cho bài hát'], 3, 'Trống giữ nhịp mạnh mẽ cho bài hát.'),
  ]),

  M(9, 'Bài hát "Cùng quây quần"', [
    Q('"Cùng quây quần" nói về điều gì?', ['Đi ngủ', 'Các bạn quây quần ca hát', 'Đi chợ', 'Đi học một mình'], 1, 'Bài hát kể về các bạn cùng quây quần ca hát.'),
    Q('Khi hát cùng bạn, em nên?', ['Hát sai cố tình', 'Hát đều cùng cả lớp', 'Át tiếng bạn', 'Im lặng'], 1, 'Hát đều giúp lớp hát đẹp.'),
    Q('Cảm xúc khi hát "Cùng quây quần"?', ['Buồn, nhớ nhà', 'Sợ hãi', 'Vui, ấm áp', 'Giận dữ'], 2, 'Bài hát rất vui và ấm áp.'),
    Q('Nếu bạn hát sai, em nên?', ['Cười nhạo', 'La mắng bạn', 'Nhẹ nhàng nhắc bạn', 'Bỏ ra ngoài'], 2, 'Nhẹ nhàng giúp bạn hát tốt hơn.'),
    Q('Hát cùng nhau gọi là?', ['Hát tập thể', 'Hát đôi', 'Hát theo nhạc', 'Hát đơn'], 0, 'Hát tập thể là hát cùng nhau.'),
    Q('Khi hát tập thể em không nên?', ['Cùng giữ nhịp', 'Hát to át tiếng bạn', 'Lắng nghe nhau', 'Hát hoà giọng'], 1, 'Át tiếng bạn làm bài hát mất đẹp.'),
  ]),

  M(10, 'Nghe nhạc — "Quốc ca Việt Nam"', [
    Q('Quốc ca Việt Nam có tên gốc?', ['Diệt phát xít', 'Hành quân xa', 'Lên đàng', 'Tiến quân ca'], 3, 'Quốc ca là bài "Tiến quân ca" của Văn Cao.'),
    Q('Khi hát/ nghe Quốc ca, em có tư thế?', ['Ngồi tự do', 'Cười đùa', 'Nằm nghỉ thoải mái', 'Đứng nghiêm, mắt hướng cờ'], 3, 'Đứng nghiêm và hướng về Quốc kỳ là tôn kính.'),
    Q('Quốc ca thường vang lên khi nào ở trường?', ['Giờ ra chơi', 'Giờ ăn', 'Giờ chào cờ thứ Hai', 'Giờ ngủ trưa'], 2, 'Lễ chào cờ thứ Hai là dịp hát Quốc ca.'),
    Q('Khi nghe Quốc ca, em có cười nói không?', ['Có, vừa nghe vừa nói chuyện', 'Chỉ cười nhẹ', 'Tuỳ thích', 'Không, phải trang nghiêm'], 3, 'Nghe Quốc ca cần thái độ nghiêm trang.'),
    Q('Quốc kỳ Việt Nam có màu?', ['Trắng, sao xanh', 'Đỏ, sao vàng', 'Xanh, sao trắng', 'Vàng, sao đỏ'], 1, 'Cờ đỏ sao vàng là Quốc kỳ Việt Nam.'),
    Q('Tác giả của Quốc ca là?', ['Văn Cao', 'Hoàng Vân', 'Phạm Tuyên', 'Lưu Hữu Phước'], 0, 'Nhạc sĩ Văn Cao là tác giả "Tiến quân ca".'),
  ]),

  M(11, 'Bài hát "Lý cây xanh"', [
    Q('"Lý cây xanh" là dân ca?', ['Dân ca quan họ', 'Dân ca Nam Bộ', 'Dân ca Bắc Bộ', 'Dân ca Tây Nguyên'], 1, '"Lý cây xanh" là dân ca Nam Bộ.'),
    Q('Bài hát nói về?', ['Mưa to', 'Cây xanh, con chim hót', 'Mẹ ru con', 'Đi học'], 1, 'Bài hát tả cảnh cây xanh có chim hót.'),
    Q('Câu mở đầu là "Cái cây xanh xanh thì lá …"?', ['cũng xanh', 'cũng đỏ', 'cũng tím', 'cũng vàng'], 0, '"Cái cây xanh xanh thì lá cũng xanh…"'),
    Q('Khi hát bài dân ca em nên?', ['Hát mềm mại, rõ lời', 'Hát thì thầm', 'Hát rất nhanh', 'Hát mạnh như hành quân'], 0, 'Dân ca cần giọng mềm mại, tình cảm.'),
    Q('Cảm xúc bài "Lý cây xanh"?', ['Buồn bã', 'Sợ hãi', 'Trong sáng, vui tươi', 'Giận dữ'], 2, 'Giai điệu trong sáng, dễ thương.'),
    Q('Bài "Lý cây xanh" thuộc loại?', ['Nhạc ru con', 'Nhạc cách mạng', 'Bài hát nước ngoài', 'Dân ca Việt Nam'], 3, 'Là dân ca Việt Nam.'),
  ]),

  M(12, 'Cao và thấp trong âm nhạc', [
    Q('Tiếng chim hót thường là âm?', ['Cao', 'Thấp như tiếng bò rống', 'Trầm như tiếng trống lớn', 'Im lặng'], 0, 'Chim hót có âm cao, véo von.'),
    Q('Tiếng trống lớn thường là âm?', ['Cao véo von', 'Thấp, trầm', 'Vừa, không cao không thấp', 'Rất cao'], 1, 'Trống lớn cho âm thấp, trầm vang.'),
    Q('Khi cô đàn nốt thấp, em nghe thấy?', ['Tiếng ồn', 'Âm trầm, dày', 'Âm cao véo von', 'Im lặng'], 1, 'Nốt thấp nghe trầm.'),
    Q('Khi cô đàn nốt cao, em nghe?', ['Âm trầm dày', 'Âm sáng, vút lên', 'Im lặng', 'Tiếng động'], 1, 'Nốt cao nghe sáng và vút lên.'),
    Q('Giọng của bạn nhỏ thường?', ['Bằng người lớn', 'Cao hơn người lớn', 'Thấp hơn người lớn', 'Không có giọng'], 1, 'Giọng bạn nhỏ thường cao và trong.'),
    Q('Khi hát em nên?', ['Tự ý đổi độ cao', 'Hát thật cao', 'Hát đúng độ cao cô đàn', 'Hát thật trầm'], 2, 'Hát đúng cao độ là quan trọng.'),
  ]),

  M(13, 'Bài hát "Tìm bạn thân"', [
    Q('"Tìm bạn thân" là bài hát của?', ['Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn', 'Việt Anh'], 3, 'Bài "Tìm bạn thân" do nhạc sĩ Việt Anh sáng tác.'),
    Q('Bài hát nói về?', ['Tìm và làm bạn với nhau', 'Đi học một mình', 'Đi chợ', 'Đi xa không trở về'], 0, 'Bài hát mời các bạn cùng tìm bạn thân.'),
    Q('Khi hát em nên?', ['Quay lưng đi', 'Cười tươi, rủ bạn cùng hát', 'Im lặng', 'Hát một mình'], 1, 'Cùng hát với bạn là vui nhất.'),
    Q('Cảm xúc bài hát?', ['Giận dữ', 'Cô đơn', 'Vui, thân thiện', 'Buồn, nhớ mong'], 2, 'Bài hát ấm áp, thân thiện.'),
    Q('Sau khi học bài này em nên?', ['Quan tâm bạn xung quanh', 'Trêu bạn', 'Cô lập bạn', 'Bỏ mặc bạn'], 0, 'Bài hát dạy em quý tình bạn.'),
    Q('Hát có nhịp?', ['Đều, vui', 'Lệch nhịp', 'Rất nhanh', 'Rất chậm'], 0, 'Đều, vui là phù hợp.'),
  ]),

  M(14, 'Nhạc cụ gõ — song loan', [
    Q('Song loan là?', ['Một loại trống điện', 'Một loại sáo', 'Một loại đàn', 'Một nhạc cụ gõ bằng gỗ'], 3, 'Song loan là nhạc cụ gõ truyền thống Việt Nam.'),
    Q('Cách chơi song loan?', ['Kéo dây', 'Dùng chân hoặc tay gõ', 'Bóp mạnh hai đầu lại', 'Thổi vào lỗ nhỏ'], 1, 'Song loan được gõ bằng chân hoặc tay.'),
    Q('Âm của song loan?', ['Êm như sáo', 'Cao véo von', 'Khô, sắc, gọn', 'Trầm vang'], 2, 'Tiếng song loan khô, sắc — hợp giữ nhịp.'),
    Q('Song loan thường dùng trong?', ['Nhạc EDM', 'Nhạc cổ điển phương Tây', 'Nhạc rock', 'Nhạc cải lương, tuồng'], 3, 'Song loan rất phổ biến trong nhạc cải lương, tuồng.'),
    Q('Song loan thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ điện', 'Nhạc cụ dây', 'Nhạc cụ hơi'], 0, 'Song loan là nhạc cụ gõ.'),
    Q('Khi gõ song loan em nên?', ['Quăng đi', 'Gõ lung tung', 'Gõ đều theo nhịp', 'Đập thật mạnh'], 2, 'Đều theo nhịp là đúng.'),
  ]),

  M(15, 'Bài hát "Bắc kim thang"', [
    Q('"Bắc kim thang" là?', ['Nhạc nước ngoài', 'Nhạc cách mạng', 'Nhạc thiếu nhi mới', 'Đồng dao – dân ca Nam Bộ'], 3, '"Bắc kim thang" là đồng dao – dân ca Nam Bộ.'),
    Q('Bài hát có nhịp điệu?', ['Vui tươi, dí dỏm', 'Lo lắng', 'Buồn bã', 'Sợ hãi'], 0, 'Giai điệu vui và dí dỏm.'),
    Q('Câu mở đầu là?', ['"Trời mưa lất phất"', '"Cháu lên ba"', '"Mẹ ru con ngủ"', '"Bắc kim thang cà lang bí rợ"'], 3, '"Bắc kim thang cà lang bí rợ…"'),
    Q('Khi hát em có thể?', ['Quay lưng', 'Bỏ ra ngoài', 'Vừa hát vừa vỗ tay/làm động tác', 'Ngồi im'], 2, 'Vừa hát vừa làm động tác cho vui.'),
    Q('Bài này phù hợp tốc độ?', ['Đứng yên', 'Chậm rất chậm', 'Vui, vừa phải', 'Nhanh líu lưỡi'], 2, 'Vừa phải để rõ lời.'),
    Q('Hát bài này em nên?', ['Mỉm cười, hát rõ lời', 'Im lặng', 'Buồn rầu', 'Hát thì thầm'], 0, 'Mỉm cười giúp giọng vui hơn.'),
  ]),

  M(16, 'Ôn tập: hát + gõ phách', [
    Q('Hát kết hợp gõ phách giúp em?', ['Giữ nhịp đều, hát hay hơn', 'Hát lệch', 'Hát nhanh hơn', 'Hát to hơn'], 0, 'Gõ phách giúp giữ nhịp đều.'),
    Q('Bài "Quê hương tươi đẹp" là dân ca?', ['Dân ca Kinh đồng bằng Bắc Bộ', 'Dân ca Thái Tây Bắc', 'Dân ca Mường Hòa Bình', 'Nùng'], 3, 'Dân ca Nùng.'),
    Q('"Cháu lên ba" của nhạc sĩ?', ['Hoàng Vân', 'Văn Cao', 'Trịnh Công Sơn', 'Phạm Tuyên'], 3, 'Phạm Tuyên.'),
    Q('"Lý cây xanh" là dân ca?', ['Nam Bộ', 'Tây Nguyên', 'Bắc Bộ', 'Quan họ'], 0, 'Dân ca Nam Bộ.'),
    Q('Khi hát em nên?', ['Hát thật to', 'Hét lên', 'Tuỳ ý sai cũng được', 'Đúng cao độ, đúng nhịp'], 3, 'Đúng cao độ, đúng nhịp là tốt.'),
    Q('Bạn nào hát ngoan?', ['Bạn Lan đều nhịp, rõ lời', 'Bạn Bình quay lưng', 'Bạn Hà la hét', 'Bạn Tú át tiếng bạn'], 0, 'Đều nhịp, rõ lời là hát đẹp.'),
  ]),

  M(17, 'Ôn tập HK1 — kể tên bài đã học', [
    Q('Bài hát nói về quê hương em đã học?', ['Bắc kim thang', 'Cháu lên ba', 'Cùng quây quần', 'Quê hương tươi đẹp'], 3, '"Quê hương tươi đẹp" là bài về quê hương.'),
    Q('Bài hát về bé 3 tuổi đi mẫu giáo?', ['Cháu lên ba', 'Quê hương tươi đẹp', 'Bắc kim thang', 'Lý cây xanh'], 0, '"Cháu lên ba".'),
    Q('Bài dân ca Nam Bộ về cây và chim?', ['Lý cây xanh', 'Cháu lên ba', 'Cùng quây quần', 'Quê hương tươi đẹp'], 0, '"Lý cây xanh".'),
    Q('Đồng dao – dân ca Nam Bộ là?', ['Cháu lên ba', 'Quê hương tươi đẹp', 'Bắc kim thang', 'Lý cây xanh'], 2, '"Bắc kim thang".'),
    Q('Nhạc cụ gõ làm bằng hai thanh gỗ?', ['Thanh phách', 'Đàn nhị', 'Sáo trúc thổi hơi', 'Trống lớn'], 0, 'Thanh phách.'),
    Q('Quốc ca Việt Nam tên là?', ['Tiến quân ca', 'Hành quân xa', 'Diệt phát xít', 'Lên đàng'], 0, '"Tiến quân ca".'),
  ]),

  M(18, 'Kiểm tra cuối HK1', [
    Q('Hát Quốc ca em phải?', ['Cười đùa', 'Đứng nghiêm trang', 'Ngồi tự do', 'Nằm xuống'], 1, 'Tư thế nghiêm trang.'),
    Q('Vỗ tay theo phách giúp?', ['Hát đúng nhịp', 'Hát lệch', 'Hát nhanh', 'Hát to hơn'], 0, 'Giữ nhịp đều.'),
    Q('Thanh phách thuộc nhóm?', ['Nhạc cụ điện', 'Nhạc cụ gõ', 'Nhạc cụ dây', 'Nhạc cụ hơi'], 1, 'Nhạc cụ gõ.'),
    Q('Tiếng chim hót là âm?', ['Trầm như trống lớn', 'Cao', 'Thấp như tiếng bò', 'Im lặng'], 1, 'Âm cao véo von.'),
    Q('Bài hát ru em bé thường?', ['Nhanh sôi nổi', 'Chậm, êm dịu', 'To như trống', 'Rất nhanh'], 1, 'Chậm và êm để bé ngủ.'),
    Q('Khi hát tập thể em nên?', ['Át tiếng bạn', 'Hoà giọng cùng bạn', 'Im lặng', 'Hát sai cố tình'], 1, 'Hoà giọng để cả lớp hát đẹp.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Bài hát "Sắp đến Tết rồi"', [
    Q('"Sắp đến Tết rồi" của nhạc sĩ?', ['Văn Cao', 'Hoàng Vân', 'Phạm Tuyên', 'Trịnh Công Sơn'], 1, 'Nhạc sĩ Hoàng Vân sáng tác bài này.'),
    Q('Bài hát nói về?', ['Niềm vui sắp đến Tết', 'Đi ngủ', 'Mưa to', 'Đi học'], 0, 'Bé háo hức vì sắp được đón Tết.'),
    Q('Cảm xúc bài hát?', ['Buồn, thương nhớ', 'Rộn ràng, vui tươi', 'Giận dữ', 'Sợ hãi'], 1, 'Rộn ràng đón Tết.'),
    Q('Câu mở đầu là "Sắp đến Tết rồi …"?', ['đến trường rất vui', 'đến trường buồn quá', 'đến trường thật xa', 'đến trường nhớ mẹ'], 0, '"Sắp đến Tết rồi, đến trường rất vui…"'),
    Q('Khi Tết đến em được?', ['Buồn rầu', 'Ở một mình', 'Mặc áo mới, chúc Tết ông bà', 'Đi học bình thường'], 2, 'Tết là dịp đoàn viên, mặc áo mới.'),
    Q('Khi hát bài này em nên?', ['Buồn rầu', 'Tươi cười, rộn ràng', 'Im lặng', 'Quay lưng'], 1, 'Tươi cười cho hợp không khí Tết.'),
  ]),

  M(20, 'Bài hát "Cả nhà thương nhau"', [
    Q('"Cả nhà thương nhau" của nhạc sĩ?', ['Phan Văn Minh', 'Văn Cao', 'Hoàng Vân', 'Phạm Tuyên'], 0, 'Nhạc sĩ Phan Văn Minh sáng tác bài này.'),
    Q('Bài hát nói về?', ['Đi học', 'Đi chợ', 'Tình yêu thương trong gia đình', 'Cơn mưa rào ngoài sân'], 2, 'Tình yêu thương bố – mẹ – con.'),
    Q('Câu mở đầu là "Ba thương con vì con …"?', ['giống ba', 'giống ông', 'giống cô', 'giống mẹ'], 3, '"Ba thương con vì con giống mẹ…"'),
    Q('Cảm xúc bài hát?', ['Ấm áp, yêu thương', 'Buồn, cô đơn một mình', 'Sợ hãi', 'Giận dữ'], 0, 'Ấm áp, yêu thương.'),
    Q('Khi hát bài này em nên nghĩ về?', ['Đồ chơi mới', 'Bài kiểm tra', 'Trò chơi điện tử', 'Bố mẹ, người thân'], 3, 'Nghĩ về bố mẹ giúp hát truyền cảm.'),
    Q('Bài hát phù hợp tốc độ?', ['Đứng yên', 'Rất nhanh', 'Vừa, êm, ấm áp', 'Líu lưỡi'], 2, 'Vừa và êm để truyền cảm xúc.'),
  ]),

  M(21, 'Đếm phách 1 – 2', [
    Q('Bài hát nhịp 2/4 em đếm như thế nào?', ['1 – 2, 1 – 2…', '1 – 2 – 3', 'Đếm 1 – 2 – 3 – 4 – 5', '1 – 2 – 3 – 4'], 0, 'Nhịp 2/4 đếm 1 – 2 đều nhau.'),
    Q('Phách 1 là phách?', ['Im lặng', 'Cao nhất', 'Mạnh', 'Nhẹ, lướt qua'], 2, 'Phách 1 thường là phách mạnh.'),
    Q('Phách 2 là phách?', ['Cao nhất', 'Trầm nhất', 'Nhẹ', 'Mạnh hơn phách 1'], 2, 'Phách 2 thường nhẹ hơn phách 1.'),
    Q('Khi vỗ tay theo nhịp 2/4 em vỗ?', ['Đều mỗi phách', 'Không vỗ', 'Chỉ vỗ một lần', 'Lung tung'], 0, 'Đều mỗi phách giúp giữ nhịp.'),
    Q('Khi cô đếm "1 – 2", em hát?', ['Hát sau cô 1 phút', 'Vào nhịp, đều theo cô', 'Không hát', 'Hát ngược'], 1, 'Vào nhịp theo cô là đúng.'),
    Q('Đếm phách giúp em?', ['Hát đều, không sai nhịp', 'Hát to hơn', 'Hát nhanh hơn', 'Hát chậm'], 0, 'Giữ nhịp đều.'),
  ]),

  M(22, 'Tết — bài hát "Sắp đến Tết rồi" (ôn)', [
    Q('Tết là dịp em đoàn viên với?', ['Bạn xa lạ', 'Người lạ', 'Một mình', 'Gia đình, người thân'], 3, 'Tết là dịp gia đình quây quần.'),
    Q('Bài "Sắp đến Tết rồi" do nhạc sĩ?', ['Trịnh Công Sơn', 'Văn Cao', 'Hoàng Vân', 'Phạm Tuyên'], 2, 'Hoàng Vân.'),
    Q('Cảm xúc của bài?', ['Rộn ràng, vui tươi', 'Lo lắng', 'Buồn, nhớ năm cũ', 'Giận dữ'], 0, 'Rộn ràng đón Tết.'),
    Q('Tết, em có thể hát tặng?', ['Tự mình thôi', 'Ông bà, cha mẹ', 'Hát qua loa cho hàng xóm', 'Không ai cả'], 1, 'Hát tặng ông bà cha mẹ là món quà ý nghĩa.'),
    Q('Khi đi chúc Tết em nên?', ['Đòi lì xì luôn', 'Lễ phép, vui vẻ', 'Im lặng quay đi', 'Cãi người lớn'], 1, 'Lễ phép là biểu hiện đẹp ngày Tết.'),
    Q('Hoa đào nở vào dịp nào?', ['Trung thu', 'Mùa hè', 'Mùa thu', 'Tết Nguyên đán'], 3, 'Hoa đào báo hiệu Tết.'),
  ]),

  M(23, 'Bài hát "Quả"', [
    Q('Bài hát "Quả" do nhạc sĩ?', ['Văn Cao', 'Phạm Tuyên', 'Trịnh Công Sơn', 'Xanh Xanh'], 1, 'Bài "Quả" của nhạc sĩ Phạm Tuyên (Phạm Tuyên có nhiều bài cho thiếu nhi).'),
    Q('Bài "Quả" hỏi về?', ['Các loại quả như khế, trứng…', 'Mẹ ru con ngủ trên võng', 'Cơn mưa rào mùa hạ', 'Bài học toán'], 0, 'Bài hát hỏi đáp về các loại quả.'),
    Q('Khi hát bài này em có thể?', ['Bỏ ra ngoài', 'Hỏi đáp cùng bạn', 'Quay lưng', 'Im lặng'], 1, 'Hỏi đáp cùng bạn cho vui.'),
    Q('Quả khế khi cắt ra có dạng?', ['Hình tam giác', 'Hình tròn đặc', 'Hình vuông', 'Hình ngôi sao'], 3, 'Quả khế cắt ngang có hình ngôi sao 5 cánh.'),
    Q('Cảm xúc bài hát?', ['Buồn, nhớ bạn cũ', 'Giận dữ', 'Sợ hãi', 'Vui, hồn nhiên'], 3, 'Vui và hồn nhiên.'),
    Q('Khi hát hỏi đáp, em nên?', ['La hét', 'Im lặng', 'Đáp lung tung', 'Lắng nghe và đáp đúng nhịp'], 3, 'Lắng nghe và đáp đúng nhịp là đúng.'),
  ]),

  M(24, 'Nhịp 2/4 — vỗ tay theo nhịp mạnh và nhẹ', [
    Q('Trong nhịp 2/4, phách mạnh là phách?', ['4', '2', '1', '3'], 2, 'Phách 1 là phách mạnh.'),
    Q('Phách nhẹ là phách?', ['2', '1', '4', '3'], 0, 'Phách 2 là phách nhẹ.'),
    Q('Vỗ tay theo nhịp mạnh – nhẹ giúp em?', ['Hát nhanh hơn', 'Cảm nhận tiết tấu', 'Hát to hơn', 'Át tiếng bạn'], 1, 'Giúp em cảm nhận tiết tấu bài hát.'),
    Q('Khi vỗ phách mạnh, em vỗ?', ['Không vỗ', 'Yếu hơn', 'Vỗ nhanh hơn', 'Mạnh hơn một chút'], 3, 'Mạnh hơn để nổi bật phách mạnh.'),
    Q('Khi vỗ phách nhẹ, em vỗ?', ['Không vỗ', 'Mạnh hơn', 'Nhẹ hơn', 'Vỗ rất chậm'], 2, 'Nhẹ để phân biệt với phách mạnh.'),
    Q('Cô đếm "1 – 2 – 1 – 2…", nhịp này là?', ['Nhịp 4/4', 'Nhịp đếm tự do không đều', 'Nhịp 2/4', 'Nhịp 3/4'], 2, 'Đếm 1 – 2 là nhịp 2/4.'),
  ]),

  M(25, 'Bài hát "Đi học về"', [
    Q('Bài "Đi học về" của nhạc sĩ?', ['Trịnh Công Sơn', 'Phạm Tuyên', 'Hoàng Long – Hoàng Lân', 'Văn Cao'], 2, 'Hai anh em nhạc sĩ Hoàng Long – Hoàng Lân.'),
    Q('Bài hát nói về?', ['Bé đi ngủ', 'Bé đi chơi', 'Bé đi chợ', 'Bé đi học về chào bố mẹ'], 3, 'Bài hát kể chuyện bé đi học về.'),
    Q('Câu mở đầu là "Đi học về là …"?', ['là đi ngủ', 'là ăn cơm', 'là đi chơi', 'đi học về'], 3, '"Đi học về là đi học về…"'),
    Q('Bài hát dạy em?', ['Chào hỏi bố mẹ khi về nhà', 'Cãi mẹ', 'Vứt cặp rồi chơi', 'Bỏ ra ngoài'], 0, 'Đi học về phải chào hỏi bố mẹ.'),
    Q('Cảm xúc bài hát?', ['Giận dữ', 'Buồn, lẻ loi', 'Sợ hãi', 'Vui, ấm áp'], 3, 'Vui và ấm áp.'),
    Q('Khi hát bài này em nên?', ['Quay lưng', 'La hét', 'Cười tươi, hát rõ lời', 'Im lặng'], 2, 'Cười tươi để giọng hát ấm.'),
  ]),

  M(26, 'Nốt đen và nốt trắng (làm quen)', [
    Q('Nốt đen kéo dài?', ['3 phách', '1 phách', '2 phách', '4 phách'], 1, 'Nốt đen có giá trị 1 phách.'),
    Q('Nốt trắng kéo dài?', ['3 phách', '1 phách', '4 phách', '2 phách'], 3, 'Nốt trắng có giá trị 2 phách.'),
    Q('Nốt đen có hình?', ['Tròn rỗng', 'Đầu đen, có đuôi', 'Đầu trắng, có đuôi', 'Hình vuông có đuôi'], 1, 'Nốt đen có đầu tô đen.'),
    Q('Nốt trắng có hình?', ['Hình vuông rỗng giữa', 'Đầu trắng (rỗng), có đuôi', 'Tam giác', 'Đầu đen có đuôi'], 1, 'Nốt trắng có đầu rỗng.'),
    Q('Khi gặp nốt trắng em ngân?', ['Không ngân', 'Ngắn hơn nốt đen', 'Lâu hơn nốt đen', 'Bằng nốt đen'], 2, 'Nốt trắng dài bằng 2 nốt đen.'),
    Q('Hai nốt đen liền nhau bằng?', ['Một nốt trắng', 'Một nốt tròn', 'Một nốt đen', 'Im lặng'], 0, 'Hai nốt đen = một nốt trắng (cùng 2 phách).'),
  ]),

  M(27, 'Bài hát "Đàn gà con"', [
    Q('Bài "Đàn gà con" có lời Việt do?', ['Trịnh Công Sơn', 'Văn Cao', 'Phạm Tuyên đặt lời', 'Việt Anh đặt lời'], 3, 'Lời Việt Anh dựa trên nhạc nước ngoài (Filippenko).'),
    Q('Bài hát nói về?', ['Đàn chim', 'Đàn gà con và mẹ gà', 'Đàn cừu', 'Đàn cá'], 1, 'Đàn gà con vui đùa cùng mẹ gà.'),
    Q('Tiếng kêu của gà con?', ['Gâu gâu', 'Chiếp chiếp', 'Ò ó o (tiếng gà trống)', 'Meo meo'], 1, 'Gà con kêu "chiếp chiếp".'),
    Q('Khi hát em có thể làm động tác?', ['Bỏ ra ngoài', 'Đứng yên', 'Mô phỏng gà con kêu', 'Quay lưng'], 2, 'Mô phỏng động tác gà con cho vui.'),
    Q('Cảm xúc bài hát?', ['Giận dữ', 'Sợ hãi', 'Buồn, nhớ bạn xa', 'Vui, ngộ nghĩnh'], 3, 'Vui và ngộ nghĩnh.'),
    Q('Bài hát có nhịp?', ['Rất chậm', 'Lệch nhịp', 'Đều, vừa phải', 'Rất nhanh líu lưỡi'], 2, 'Nhịp đều, vừa phải.'),
  ]),

  M(28, 'Bài hát "Chú voi con ở Bản Đôn"', [
    Q('"Chú voi con ở Bản Đôn" của nhạc sĩ?', ['Hoàng Vân', 'Phạm Tuyên', 'Văn Cao', 'Trịnh Công Sơn'], 1, 'Nhạc sĩ Phạm Tuyên sáng tác bài này.'),
    Q('Bài hát kể về?', ['Chú cá con', 'Chú voi con ở Bản Đôn (Tây Nguyên)', 'Chú mèo con', 'Chú chim con'], 1, 'Chú voi con vùng Tây Nguyên.'),
    Q('Bản Đôn ở đâu?', ['Đà Nẵng', 'Tây Nguyên', 'TP.HCM', 'Hà Nội'], 1, 'Bản Đôn thuộc Đắk Lắk – Tây Nguyên.'),
    Q('Câu mở đầu là "Chú voi con ở Bản Đôn …"?', ['chưa có ngà', 'đang đói', 'đã có ngà', 'rất to'], 0, '"Chú voi con ở Bản Đôn, chưa có ngà nên còn trẻ con…"'),
    Q('Khi hát em nên?', ['Sợ hãi', 'Vui, ngộ nghĩnh', 'Buồn rầu', 'Im lặng'], 1, 'Vui, ngộ nghĩnh phù hợp bài hát.'),
    Q('Bài hát có cảm xúc?', ['Ghét voi', 'Sợ voi', 'Yêu mến chú voi', 'Không có cảm xúc'], 2, 'Bài hát thể hiện sự yêu mến voi.'),
  ]),

  M(29, 'Bài hát "Múa vui"', [
    Q('"Múa vui" của nhạc sĩ?', ['Lưu Hữu Phước', 'Trịnh Công Sơn', 'Văn Cao', 'Phạm Tuyên'], 0, 'Nhạc sĩ Lưu Hữu Phước sáng tác bài này.'),
    Q('Bài hát mời các bạn?', ['Cầm tay nhau múa hát', 'Đi ngủ', 'Đi chợ', 'Đi học bài'], 0, 'Bài hát mời các bạn cầm tay múa hát.'),
    Q('Câu mở đầu "Cùng nhau múa …"?', ['xung quanh vòng', 'một mình', 'thật buồn', 'rồi đi ngủ'], 0, '"Cùng nhau múa xung quanh vòng…"'),
    Q('Khi múa em nên?', ['Cùng làm động tác với bạn', 'Tự ý lung tung', 'Đứng yên', 'Bỏ ra ngoài'], 0, 'Múa đều cùng bạn mới đẹp.'),
    Q('Cảm xúc bài hát?', ['Sợ hãi', 'Buồn, lặng lẽ một mình', 'Giận dữ', 'Vui, rộn ràng'], 3, 'Vui và rộn ràng.'),
    Q('Bài hát dạy em?', ['Cô lập bạn', 'Bắt nạt bạn', 'Tự chơi một mình', 'Đoàn kết, vui chơi cùng bạn'], 3, 'Đoàn kết là điều bài hát muốn truyền tải.'),
  ]),

  M(30, 'Phân biệt âm thanh nhạc cụ', [
    Q('Tiếng "tách tách" giòn là của?', ['Sáo trúc thổi véo von', 'Thanh phách', 'Trống lớn', 'Đàn nhị'], 1, 'Thanh phách kêu "tách tách".'),
    Q('Tiếng "tùng tùng" vang là của?', ['Trống', 'Đàn tranh', 'Sáo trúc thổi cao véo von', 'Phách gõ tách tách giòn'], 0, 'Trống kêu "tùng tùng".'),
    Q('Tiếng "véo von" cao là của?', ['Trống lớn vang tùng tùng', 'Đàn đáy', 'Sáo', 'Phách gõ tách tách'], 2, 'Sáo có âm cao véo von.'),
    Q('Đàn nhị có?', ['Không có dây', 'Hai dây kéo bằng vĩ', 'Sáu dây gảy', 'Một dây'], 1, 'Đàn nhị có 2 dây kéo bằng vĩ.'),
    Q('Đàn tranh có?', ['Một dây', 'Hai dây kéo', 'Không có dây', 'Nhiều dây gảy'], 3, 'Đàn tranh có nhiều dây gảy bằng tay.'),
    Q('Phách, trống, song loan thuộc nhóm?', ['Nhạc cụ gõ', 'Nhạc cụ hơi', 'Nhạc cụ điện', 'Nhạc cụ dây'], 0, 'Cả ba đều là nhạc cụ gõ.'),
  ]),

  M(31, 'Bài hát "Năm ngón tay ngoan"', [
    Q('"Năm ngón tay ngoan" của nhạc sĩ?', ['Trần Văn Thụ', 'Trịnh Công Sơn', 'Văn Cao', 'Phạm Tuyên'], 0, 'Nhạc sĩ Trần Văn Thụ sáng tác bài này.'),
    Q('Bài hát có mấy ngón tay?', ['10 ngón', '4 ngón', '5 ngón', '3 ngón'], 2, 'Năm ngón tay trên một bàn tay.'),
    Q('Mỗi ngón tay trong bài đều?', ['Ngoan, đáng yêu', 'Hư hỏng', 'Xấu xí', 'Lười biếng'], 0, 'Bài hát kể về các ngón tay ngoan.'),
    Q('Khi hát em có thể?', ['Làm động tác với các ngón tay', 'Quay lưng', 'Bỏ ra ngoài', 'Đứng yên'], 0, 'Vừa hát vừa giơ ngón tay cho vui.'),
    Q('Cảm xúc bài hát?', ['Buồn, nhớ bạn cũ', 'Giận dữ', 'Vui, hồn nhiên', 'Sợ hãi'], 2, 'Vui và hồn nhiên.'),
    Q('Bài hát dạy em?', ['Vứt bỏ', 'Yêu quý đôi tay của mình', 'Không quan tâm', 'Để tay nghịch lung tung'], 1, 'Đôi tay rất quý — em hãy giữ gìn.'),
  ]),

  M(32, 'Bài hát "Trời nắng, trời mưa"', [
    Q('"Trời nắng, trời mưa" của nhạc sĩ?', ['Trịnh Công Sơn', 'Phạm Tuyên', 'Đặng Nhất Mai', 'Văn Cao'], 2, 'Nhạc sĩ Đặng Nhất Mai sáng tác bài này.'),
    Q('Bài hát nói về?', ['Các bạn thỏ đi tắm nắng và chạy mưa', 'Đi chợ', 'Đi học', 'Đi ngủ'], 0, 'Các bạn thỏ vui đùa rồi trú mưa.'),
    Q('Khi trời mưa em nên?', ['Mặc áo mưa hoặc trú mưa', 'Chạy nhảy dưới mưa lâu', 'Đứng giữa trời cho ướt', 'Tắm mưa lâu'], 0, 'Tránh mưa để không bị cảm lạnh.'),
    Q('Bài hát có nhịp?', ['Nhịp lệch, không đều', 'Rất nhanh', 'Rất chậm', 'Vui, đều'], 3, 'Vui và đều.'),
    Q('Khi hát em nên?', ['Cười tươi, làm động tác', 'Im lặng', 'Bỏ ra ngoài', 'Quay lưng'], 0, 'Vừa hát vừa làm động tác cho sinh động.'),
    Q('Cảm xúc bài hát?', ['Vui, ngộ nghĩnh', 'Giận dữ', 'Buồn, nhớ bạn cũ', 'Lo lắng'], 0, 'Vui và ngộ nghĩnh.'),
  ]),

  M(33, 'Ôn tập: nhạc cụ gõ + nốt đen, nốt trắng', [
    Q('Nốt đen = mấy phách?', ['2', '3', '1', '4'], 2, '1 phách.'),
    Q('Nốt trắng = mấy phách?', ['2', '4', '3', '1'], 0, '2 phách.'),
    Q('Phách, song loan, trống thuộc nhóm?', ['Nhạc cụ dây', 'Nhạc cụ điện', 'Nhạc cụ hơi', 'Nhạc cụ gõ'], 3, 'Nhạc cụ gõ.'),
    Q('Vỗ tay theo phách giúp?', ['Hát nhanh', 'Giữ nhịp đều', 'Hát lệch', 'Hát to'], 1, 'Giữ nhịp đều.'),
    Q('Nhịp 2/4 đếm?', ['Đếm tự do không theo nhịp', '1 – 2, 1 – 2', '1 – 2 – 3', '1 – 2 – 3 – 4'], 1, '1 – 2 đều nhau.'),
    Q('Bạn nào hát đẹp?', ['Hát lệch nhịp', 'Hát thật to át bạn', 'Hét lên', 'Đúng cao độ, đúng nhịp, rõ lời'], 3, 'Đúng cao độ và nhịp là đẹp.'),
  ]),

  M(34, 'Ôn tập HK2 — các bài hát đã học', [
    Q('Bài về Tết là?', ['Đàn gà con', 'Lý cây xanh', 'Cháu lên ba', 'Sắp đến Tết rồi'], 3, '"Sắp đến Tết rồi".'),
    Q('Bài về tình cảm gia đình là?', ['Đàn gà con', 'Cả nhà thương nhau', 'Bắc kim thang', 'Múa vui'], 1, '"Cả nhà thương nhau".'),
    Q('Bài về chú voi con là?', ['Chú voi con ở Bản Đôn', 'Quê hương tươi đẹp', 'Đàn gà con', 'Lý cây xanh'], 0, '"Chú voi con ở Bản Đôn".'),
    Q('Bài về đi học về là?', ['Cháu lên ba', 'Đi học', 'Tìm bạn thân', 'Đi học về'], 3, '"Đi học về".'),
    Q('Bài về các ngón tay là?', ['Trời nắng trời mưa', 'Cả nhà thương nhau', 'Năm ngón tay ngoan', 'Múa vui'], 2, '"Năm ngón tay ngoan".'),
    Q('Bài về thỏ và mưa nắng là?', ['Trời nắng, trời mưa', 'Quả khế, quả trứng', 'Đàn gà con', 'Đi học về'], 0, '"Trời nắng, trời mưa".'),
  ]),

  M(35, 'Tổng kết — Em yêu âm nhạc', [
    Q('Âm nhạc giúp em?', ['Vui vẻ, sống tích cực', 'Mệt mỏi', 'Không có ích', 'Buồn hơn'], 0, 'Âm nhạc làm cuộc sống đẹp hơn.'),
    Q('Khi nghe nhạc em nên?', ['Nói chuyện to át nhạc', 'Lắng nghe, cảm nhận', 'Bỏ ra ngoài chơi khác', 'Phá nhạc'], 1, 'Lắng nghe để cảm nhận âm nhạc.'),
    Q('Hát cùng bạn bè giúp em?', ['Đoàn kết, vui vẻ', 'Mệt mỏi', 'Cô đơn', 'Bị bạn ghét'], 0, 'Cùng hát là cùng vui.'),
    Q('Sau một năm học, em đã biết hát?', ['Không bài nào', 'Chỉ một bài', 'Không nhớ', 'Nhiều bài hay'], 3, 'Em đã biết nhiều bài hát thiếu nhi.'),
    Q('Lên lớp 2, em mong?', ['Học thêm nhiều bài hát mới', 'Không hát nữa', 'Quên hết', 'Bỏ môn nhạc'], 0, 'Cứ tiếp tục yêu âm nhạc nhé.'),
    Q('Em yêu âm nhạc nghĩa là?', ['Phá tiếng hát bạn', 'Hát lung tung', 'Chỉ hát lúc cô bắt', 'Trân trọng và hát bằng cả tấm lòng'], 3, 'Hát bằng cả tấm lòng là yêu âm nhạc.'),
  ]),
];

export const P1AN_SCENARIOS = indexBy(P1AN_WEEKS);
