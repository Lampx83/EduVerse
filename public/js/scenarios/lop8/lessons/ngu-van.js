// ============================================================
// Lớp 8 · NGỮ VĂN — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Key TRÙNG id quiz: "S8NV-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8NV_LESSONS = {
  'S8NV-w01-quiz': L(
    'Tôi đi học — Thanh Tịnh',
    'Mở đầu lớp 8 bằng truyện ngắn "Tôi đi học" của Thanh Tịnh — gợi cảm xúc ngày đầu đến trường.',
    ['Hiểu nội dung và nghệ thuật truyện ngắn.', 'Phân tích tâm trạng nhân vật "tôi".', 'Cảm nhận vẻ đẹp ngôn ngữ giàu chất thơ.'],
    [
      { h: 'Tác giả Thanh Tịnh' },
      { p: 'Thanh Tịnh (1911-1988) — nhà văn lãng mạn, văn phong nhẹ nhàng, trữ tình. Tác phẩm tiêu biểu: tập truyện "Quê mẹ" (1941).' },
      { h: 'Truyện "Tôi đi học"' },
      { p: 'Trích "Quê mẹ" — kể về ngày đầu tiên đi học của nhân vật "tôi". Truyện không có cốt truyện gay cấn mà tinh tế ghi lại dòng cảm xúc ngày đầu đến trường: bỡ ngỡ, thiêng liêng, hồi hộp.' },
      { ul: ['Nghệ thuật: kể chuyện kết hợp tả cảnh + tả tâm trạng.', 'Ngôn ngữ giàu chất thơ, nhiều hình ảnh so sánh đẹp.', 'Giọng văn nhẹ nhàng, ấm áp, đầy hoài niệm.'] },
      { note: 'Câu mở đầu nổi tiếng: "Hằng năm cứ vào cuối thu, lá ngoài đường rụng nhiều và trên không có những đám mây bàng bạc, lòng tôi lại nao nức những kỷ niệm mơn man của buổi tựu trường."' },
    ],
    [
      { q: 'Tâm trạng nhân vật "tôi" trên đường đến trường ngày đầu?', a: 'Bỡ ngỡ, hồi hộp, thiêng liêng. Cảnh vật quen thuộc bỗng trở nên xa lạ vì lần đầu được đi học.' },
      { q: 'Hình ảnh so sánh đẹp trong truyện?', a: '"Ý nghĩ ấy thoáng qua trong trí tôi nhẹ nhàng như một làn mây lướt ngang trên ngọn núi" — so sánh tinh tế, gợi cảm.' },
    ]
  ),

  'S8NV-w02-quiz': L(
    'Trong lòng mẹ — Nguyên Hồng',
    'Đoạn trích "Trong lòng mẹ" từ "Những ngày thơ ấu" của Nguyên Hồng — tình mẫu tử thiêng liêng.',
    ['Hiểu nội dung đoạn trích hồi ký.', 'Phân tích tình mẹ con thiêng liêng.', 'Cảm nhận giọng văn xúc động.'],
    [
      { h: 'Tác giả Nguyên Hồng' },
      { p: 'Nguyên Hồng (1918-1982) — nhà văn của những người cùng khổ. Văn phong giàu cảm xúc, mãnh liệt. "Những ngày thơ ấu" là hồi ký về tuổi thơ đau buồn nhưng đầy tình mẹ.' },
      { h: 'Đoạn trích "Trong lòng mẹ"' },
      { p: 'Kể về tâm trạng bé Hồng bị bà cô nói xấu mẹ. Khi gặp lại mẹ, em không kìm được nỗi sung sướng, oà khóc trong vòng tay mẹ — tình mẫu tử thiêng liêng vượt qua mọi đắng cay.' },
      { ul: ['Nhân vật bà cô: cay nghiệt, gieo rắc nghi ngờ về mẹ.', 'Nhân vật mẹ: dù bị đẩy đi xa vẫn yêu con da diết.', 'Nhân vật bé Hồng: yêu mẹ vô bờ, đau khổ trước lời cay độc.'] },
      { note: 'Văn Nguyên Hồng đầy cảm xúc, có khi như tiếng khóc, có khi như tiếng cười nức nở.' },
    ],
    [
      { q: 'Vì sao bé Hồng đau khổ khi nghe bà cô nói xấu mẹ?', a: 'Em yêu mẹ tha thiết; lời cay độc của bà cô không lay chuyển được tình yêu mẹ mà chỉ khiến em đau hơn.' },
      { q: 'Cảm xúc khi gặp lại mẹ?', a: 'Sung sướng tột cùng, oà khóc trong lòng mẹ — như "đứa bé nguyên thuỷ" trở về với "lòng mẹ".' },
    ]
  ),

  'S8NV-w03-quiz': L(
    'Tức nước vỡ bờ — Ngô Tất Tố',
    'Đoạn trích "Tức nước vỡ bờ" từ "Tắt đèn" của Ngô Tất Tố — sức mạnh phản kháng của người nông dân.',
    ['Hiểu hiện thực xã hội VN trước CMTT.', 'Phân tích nhân vật chị Dậu.', 'Cảm nhận tinh thần phản kháng.'],
    [
      { h: 'Tác giả Ngô Tất Tố' },
      { p: 'Ngô Tất Tố (1894-1954) — nhà văn hiện thực phê phán xuất sắc. "Tắt đèn" (1939) tái hiện cuộc sống cùng cực của nông dân VN dưới ách thực dân.' },
      { h: 'Đoạn trích "Tức nước vỡ bờ"' },
      { p: 'Kể chuyện gia đình chị Dậu bị bóc lột tận cùng. Khi cai lệ đến đánh chồng đang ốm, chị Dậu từ van xin chuyển sang phản kháng quyết liệt — đánh ngã cai lệ.' },
      { ul: ['Chị Dậu: hiền lành nhưng khi bị dồn đến cùng có sức mạnh phản kháng.', 'Cai lệ: hung hãn, độc ác — đại diện chế độ áp bức.', 'Tinh thần "tức nước vỡ bờ" — khi bị áp bức quá sức chịu đựng, người dân sẽ vùng lên.'] },
    ],
    [
      { q: 'Vì sao chị Dậu chuyển từ van xin sang phản kháng?', a: 'Cai lệ đánh chồng đang ốm — chị không chịu được nữa. Tình yêu chồng + bản năng bảo vệ vượt qua sợ hãi.' },
      { q: 'Ý nghĩa nhan đề "Tức nước vỡ bờ"?', a: 'Khi bị áp bức quá mức, người ta sẽ vùng lên — tinh thần phản kháng tất yếu của nhân dân bị áp bức.' },
    ]
  ),

  'S8NV-w04-quiz': L(
    'Lão Hạc — Nam Cao',
    'Truyện ngắn "Lão Hạc" của Nam Cao — bi kịch người nông dân trước Cách mạng.',
    ['Hiểu số phận và phẩm chất Lão Hạc.', 'Phân tích nghệ thuật miêu tả tâm lý.', 'Cảm nhận giá trị nhân đạo.'],
    [
      { h: 'Tác giả Nam Cao' },
      { p: 'Nam Cao (1915-1951) — bậc thầy truyện ngắn hiện thực. Phong cách: phân tích tâm lý sâu sắc, ngôn ngữ giàu chất triết lý. Tác phẩm: "Chí Phèo", "Lão Hạc", "Sống mòn"…' },
      { h: 'Truyện "Lão Hạc"' },
      { p: 'Lão Hạc — nông dân nghèo, vợ chết, con trai bỏ đi làm phu cao su. Lão sống cô đơn với con chó Vàng. Đói khổ, lão bán chó (đau đớn vô cùng), gửi tiền cho con, rồi tự tử bằng bả chó để giữ trọn nhân cách.' },
      { ul: ['Lão Hạc: cha hết lòng vì con, nhân cách cao đẹp dù nghèo khổ.', 'Cái chết của lão: bi kịch nhưng là sự lựa chọn đầy nhân phẩm.', 'Giá trị nhân đạo: cảm thông với người nông dân nghèo, đề cao nhân cách họ.'] },
      { note: 'Câu nổi tiếng: "Một người đau chân có lúc nào quên được cái chân đau của mình..." — triết lý về sự cô đơn và đồng cảm.' },
    ],
    [
      { q: 'Vì sao Lão Hạc tự tử?', a: 'Để giữ trọn nhân cách: không muốn ăn vào tiền của con, không muốn xin xỏ. Cái chết là lựa chọn cao thượng cuối cùng.' },
      { q: 'Phẩm chất nổi bật của Lão Hạc?', a: 'Yêu con vô bờ, tự trọng, giữ nhân cách đến cùng dù nghèo khó.' },
    ]
  ),

  'S8NV-w05-quiz': L(
    'Trường từ vựng',
    'Trường từ vựng giúp chúng ta hiểu mối quan hệ ngữ nghĩa giữa các từ.',
    ['Hiểu khái niệm trường từ vựng.', 'Phân loại các trường từ vựng.', 'Vận dụng trong nói/viết.'],
    [
      { h: 'Khái niệm' },
      { p: 'Trường từ vựng = tập hợp các từ có ít nhất một nét chung về nghĩa. VD trường từ vựng "động vật": chó, mèo, gà, vịt, hổ, voi…' },
      { h: 'Các trường từ vựng phổ biến' },
      { ul: ['Trường người: nhà thơ, bác sĩ, sinh viên…', 'Trường thiên nhiên: cây, núi, sông, biển…', 'Trường cảm xúc: vui, buồn, giận, yêu, ghét…', 'Trường màu sắc: đỏ, xanh, vàng, tím…'] },
      { note: 'Một từ có thể thuộc nhiều trường từ vựng tuỳ ngữ cảnh.' },
    ],
    [
      { q: 'Các từ "hồ, sông, biển, ao" thuộc trường từ vựng nào?', a: 'Trường các loại nước (mặt nước tự nhiên).' },
      { q: 'Xếp các từ sau vào trường thích hợp: đỏ, tím, gà, chó, vui, buồn.', a: 'Màu sắc: đỏ, tím. Động vật: gà, chó. Cảm xúc: vui, buồn.' },
    ]
  ),

  'S8NV-w06-quiz': L(
    'Từ tượng hình — Từ tượng thanh',
    'Hai loại từ giàu sức biểu cảm — từ tượng hình và từ tượng thanh.',
    ['Phân biệt từ tượng hình và từ tượng thanh.', 'Vai trò của chúng trong văn miêu tả.', 'Sử dụng phù hợp.'],
    [
      { h: 'Từ tượng hình' },
      { p: 'Từ gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật. VD: lom khom, lung linh, loạng choạng, rón rén, thướt tha…' },
      { h: 'Từ tượng thanh' },
      { p: 'Từ mô phỏng âm thanh tự nhiên, con người. VD: róc rách, ầm ầm, leng keng, thì thầm, ríu rít…' },
      { note: 'Từ tượng hình + tượng thanh làm văn miêu tả sinh động, gợi cảm.' },
    ],
    [
      { q: 'Phân loại: lom khom, ầm ầm, lung linh, thì thầm.', a: 'Tượng hình: lom khom, lung linh. Tượng thanh: ầm ầm, thì thầm.' },
      { q: 'Đặt câu có từ tượng hình "thướt tha".', a: 'Tà áo dài thướt tha trong gió chiều.' },
    ]
  ),

  'S8NV-w07-quiz': L(
    'Cô bé bán diêm — An-đéc-xen',
    'Truyện cổ tích thấm đẫm nhân văn của H. C. Andersen.',
    ['Hiểu nội dung truyện.', 'Phân tích hình ảnh cô bé bán diêm.', 'Cảm nhận giá trị nhân đạo.'],
    [
      { h: 'Tác giả Hans Christian Andersen' },
      { p: 'Andersen (1805-1875) — nhà văn Đan Mạch, "ông vua truyện cổ tích". Truyện ông giàu nhân văn, thường lấy trẻ em làm nhân vật.' },
      { h: 'Truyện "Cô bé bán diêm"' },
      { p: 'Đêm giao thừa lạnh giá, cô bé bán diêm lạnh và đói. Em quẹt từng que diêm để sưởi và mộng mị: cây Noel, bữa ăn ấm, bà ngoại yêu thương. Cuối cùng em chết cóng trong góc phố — nhưng vẫn cười như được lên thiên đường với bà.' },
      { ul: ['Tương phản: cô bé khốn khổ vs xã hội xa hoa.', 'Mộng và thực: trong giấc mơ em được hạnh phúc; thực tế đầy bất hạnh.', 'Tố cáo xã hội thờ ơ, nhưng vẫn giữ niềm tin vào tình thương.'] },
    ],
    [
      { q: 'Mỗi lần quẹt diêm, cô bé thấy gì?', a: 'Lò sưởi ấm, bữa ăn ngon, cây thông Noel, bà ngoại yêu thương — những điều em khao khát.' },
      { q: 'Ý nghĩa cái chết của cô bé?', a: 'Bi kịch của trẻ em nghèo; tố cáo xã hội thờ ơ. Nhưng cô bé "lên thiên đường với bà" — giữ niềm tin vào tình thương.' },
    ]
  ),

  'S8NV-w08-quiz': L(
    'Đánh nhau với cối xay gió — Xéc-van-tét',
    'Đoạn trích từ "Đôn Ki-hô-tê" — tiểu thuyết bất hủ của Cervantes.',
    ['Hiểu nội dung đoạn trích.', 'Phân tích nhân vật Đôn Ki-hô-tê.', 'Tiếng cười và bài học.'],
    [
      { h: 'Tác giả Cervantes' },
      { p: 'Miguel de Cervantes (1547-1616) — nhà văn Tây Ban Nha. "Đôn Ki-hô-tê" (1605, 1615) là tiểu thuyết đỉnh cao văn học Tây Ban Nha và thế giới.' },
      { h: 'Đoạn trích "Đánh nhau với cối xay gió"' },
      { p: 'Đôn Ki-hô-tê — quý tộc mê truyện hiệp sĩ, tưởng tượng mình là hiệp sĩ. Khi thấy các cối xay gió, lão nhầm là khổng lồ và xông vào đánh. Sancho Panza — người hầu thực tế — can ngăn nhưng không được.' },
      { ul: ['Đôn Ki-hô-tê: lý tưởng, dũng cảm nhưng ảo tưởng đến nực cười.', 'Sancho Panza: thực tế, hài hước, đối lập với chủ.', 'Tiếng cười kết hợp với nỗi buồn — bi-hài kịch nhân sinh.'] },
      { note: 'Trở thành cụm từ "đánh nhau với cối xay gió" = chiến đấu với kẻ thù tưởng tượng.' },
    ],
    [
      { q: 'Vì sao Đôn Ki-hô-tê tưởng cối xay gió là khổng lồ?', a: 'Vì lão mê truyện hiệp sĩ đến mất khả năng phân biệt thực-ảo, luôn muốn tỏ ra anh hùng.' },
      { q: 'Sancho Panza có vai trò gì?', a: 'Đối lập với Đôn Ki-hô-tê: thực tế, hài hước. Tạo tiếng cười và phản ánh lẽ thường.' },
    ]
  ),

  'S8NV-w09-quiz': L(
    'Chiếc lá cuối cùng — O. Hen-ri',
    'Truyện ngắn nhân văn của O. Henry — tình bạn và sự hy sinh.',
    ['Hiểu nội dung truyện.', 'Phân tích nhân vật cụ Bơ-men.', 'Cảm nhận tình người.'],
    [
      { h: 'Tác giả O. Henry' },
      { p: 'O. Henry (1862-1910) — nhà văn Mỹ, bậc thầy truyện ngắn với kết thúc bất ngờ (twist ending). Truyện ông thấm đẫm tình người.' },
      { h: 'Truyện "Chiếc lá cuối cùng"' },
      { p: 'Giôn-xi (cô gái nghệ sĩ) bị viêm phổi, nghĩ rằng khi chiếc lá cuối cùng trên cây thường xuân rụng thì cô sẽ chết. Cụ Bơ-men — họa sĩ già — đã vẽ một chiếc lá thường xuân trên tường trong đêm bão tuyết để cứu Giôn-xi. Lá giả không rụng → Giôn-xi tìm lại được niềm tin sống. Nhưng cụ Bơ-men chết vì viêm phổi.' },
      { ul: ['Cụ Bơ-men: hy sinh thầm lặng — kiệt tác đời mình là chiếc lá cứu một mạng người.', 'Giôn-xi: thoát khỏi tuyệt vọng nhờ niềm tin.', 'Tình bạn nghệ sĩ ấm áp, ý nghĩa.'] },
      { note: 'Twist ending: người đọc và Giôn-xi đều chỉ biết "chiếc lá" là tác phẩm cuối cùng của cụ Bơ-men ở cuối truyện.' },
    ],
    [
      { q: 'Vì sao chiếc lá cuối cùng không rụng?', a: 'Vì đó là chiếc lá cụ Bơ-men vẽ trên tường trong đêm bão tuyết.' },
      { q: 'Ý nghĩa hy sinh của cụ Bơ-men?', a: '"Kiệt tác" cuộc đời cụ — không phải bức tranh để bán mà là chiếc lá cứu được mạng sống một con người.' },
    ]
  ),

  'S8NV-w10-quiz': L(
    'Trợ từ — Thán từ',
    'Hai loại từ đặc biệt giúp biểu cảm trong câu.',
    ['Hiểu khái niệm trợ từ.', 'Hiểu khái niệm thán từ.', 'Vận dụng phù hợp.'],
    [
      { h: 'Trợ từ' },
      { p: 'Trợ từ = từ đi kèm để nhấn mạnh hoặc biểu thị sắc thái. VD: chính, đích, chỉ, những, có, ngay…' },
      { h: 'Thán từ' },
      { p: 'Thán từ = từ biểu lộ cảm xúc trực tiếp. VD: ôi, a, trời ơi, ô, ơ…' },
      { ul: ['Thán từ thường đứng đầu câu, có dấu phẩy ngắt.', 'Có 2 loại thán từ: bộc lộ cảm xúc + gọi đáp.'] },
    ],
    [
      { q: 'Tìm trợ từ trong: "Nó có 3 quyển sách chứ ít gì."', a: '"có" — trợ từ nhấn mạnh số lượng (theo nghĩa "tận", "đến").' },
      { q: 'Tìm thán từ: "Ôi! Sao mà đẹp thế!"', a: '"Ôi" — thán từ biểu lộ cảm xúc ngạc nhiên, thán phục.' },
    ]
  ),

  'S8NV-w11-quiz': L(
    'Tình thái từ',
    'Tình thái từ giúp thể hiện thái độ, sắc thái cảm xúc của người nói.',
    ['Hiểu khái niệm tình thái từ.', 'Phân loại theo chức năng.', 'Sử dụng phù hợp ngữ cảnh.'],
    [
      { h: 'Tình thái từ' },
      { p: 'Tình thái từ = từ đặt cuối câu (hoặc giữa câu) để tạo câu nghi vấn, cầu khiến, cảm thán hoặc biểu thị sắc thái cảm xúc.' },
      { ul: ['Tạo câu nghi vấn: à, ư, hả, chứ, chăng…', 'Tạo câu cầu khiến: đi, nào, với…', 'Tạo câu cảm thán: thay, ơi, sao…', 'Biểu thị sắc thái: ạ, nhỉ, nhé, cơ, mà…'] },
      { note: 'Tình thái từ chiếm vị trí cuối câu trong tiếng Việt.' },
    ],
    [
      { q: 'Xác định tình thái từ: "Em đi đâu đấy?"', a: '"đấy" — tình thái từ tạo sắc thái nghi vấn, gần gũi.' },
      { q: '"Mẹ ơi, con đói rồi ạ." Tình thái từ?', a: '"ơi" (gọi đáp), "ạ" (kính trọng).' },
    ]
  ),

  'S8NV-w12-quiz': L(
    'Ôn dịch, thuốc lá — Văn bản nhật dụng',
    'Văn bản nhật dụng tuyên truyền tác hại của thuốc lá.',
    ['Hiểu thông tin về tác hại thuốc lá.', 'Phân tích nghệ thuật văn bản.', 'Có ý thức tránh xa thuốc lá.'],
    [
      { h: 'Văn bản nhật dụng' },
      { p: 'Văn bản nhật dụng = đề cập vấn đề thời sự, gần gũi đời sống. VD: môi trường, dân số, y tế cộng đồng…' },
      { h: 'Nội dung "Ôn dịch, thuốc lá"' },
      { p: 'Văn bản trình bày tác hại của thuốc lá: nicotine gây nghiện, hắc ín gây ung thư, ảnh hưởng cả người hút thụ động. Hút thuốc còn lan truyền lối sống xấu, tốn kém.' },
      { ul: ['Thuốc lá là "ôn dịch" — bệnh dịch nguy hiểm.', 'Hút thụ động cũng nguy hiểm.', 'Bỏ thuốc khó nhưng cần thiết — vì sức khoẻ bản thân và gia đình.'] },
    ],
    [
      { q: 'Vì sao tác giả gọi thuốc lá là "ôn dịch"?', a: 'Vì thuốc lá lan rộng và gây hại cho sức khoẻ giống bệnh dịch.' },
      { q: 'Hút thụ động là gì?', a: 'Hít phải khói thuốc của người khác — cũng nguy hại không kém người hút trực tiếp.' },
    ]
  ),

  'S8NV-w13-quiz': L(
    'Câu ghép',
    'Câu ghép gồm nhiều vế câu, biểu thị mối quan hệ phức tạp.',
    ['Hiểu khái niệm câu ghép.', 'Các kiểu quan hệ giữa các vế.', 'Sử dụng quan hệ từ phù hợp.'],
    [
      { h: 'Câu ghép' },
      { p: 'Câu ghép = câu có 2 hay nhiều vế câu (mỗi vế là 1 cụm C-V hoàn chỉnh), nối với nhau bằng quan hệ từ hoặc dấu câu.' },
      { h: 'Các quan hệ giữa các vế' },
      { ul: ['Nguyên nhân - kết quả: vì... nên..., bởi... cho nên...', 'Điều kiện - kết quả: nếu... thì..., hễ... thì...', 'Tương phản: tuy... nhưng..., dù... vẫn...', 'Tăng tiến: không những... mà còn...', 'Lựa chọn: hoặc... hoặc..., hay là...'] },
    ],
    [
      { q: 'Câu "Vì trời mưa nên đường trơn." là câu ghép loại nào?', a: 'Quan hệ nguyên nhân - kết quả.' },
      { q: 'Đặt câu ghép biểu thị quan hệ tương phản.', a: '"Tuy bạn ấy nhỏ tuổi nhưng học rất giỏi."' },
    ]
  ),

  'S8NV-w14-quiz': L(
    'Dấu ngoặc đơn, dấu hai chấm',
    'Hai dấu câu hỗ trợ giải thích và liệt kê.',
    ['Công dụng dấu ngoặc đơn.', 'Công dụng dấu hai chấm.', 'Sử dụng đúng quy ước.'],
    [
      { h: 'Dấu ngoặc đơn ( )' },
      { p: 'Đánh dấu phần chú thích, giải thích, bổ sung thông tin.' },
      { h: 'Dấu hai chấm :' },
      { ul: ['Báo trước phần giải thích, thuyết minh.', 'Báo trước lời dẫn trực tiếp hoặc liệt kê.'] },
    ],
    [
      { q: 'Đặt câu có dấu ngoặc đơn.', a: 'Nguyễn Du (1765-1820) là đại thi hào dân tộc.' },
      { q: 'Đặt câu có dấu hai chấm.', a: 'Trong vườn có nhiều loại cây: cam, quýt, bưởi, ổi.' },
    ]
  ),

  'S8NV-w15-quiz': L(
    'Dấu ngoặc kép',
    'Dấu ngoặc kép có nhiều công dụng — đánh dấu lời dẫn, tên riêng, ý đặc biệt.',
    ['3 công dụng chính của dấu ngoặc kép.', 'Đặt câu sử dụng dấu ngoặc kép.', 'Phân biệt với dấu ngoặc đơn.'],
    [
      { h: 'Dấu ngoặc kép " "' },
      { ul: ['Đánh dấu lời dẫn trực tiếp.', 'Đánh dấu tên tác phẩm, tờ báo, tập san…', 'Đánh dấu từ ngữ được hiểu theo nghĩa đặc biệt hoặc châm biếm.'] },
    ],
    [
      { q: 'Đặt câu có lời dẫn trực tiếp.', a: 'Bác Hồ nói: "Không có gì quý hơn độc lập tự do."' },
      { q: 'Đặt câu có tên tác phẩm trong dấu ngoặc kép.', a: 'Em đang đọc "Truyện Kiều" của Nguyễn Du.' },
    ]
  ),

  'S8NV-w16-quiz': L(
    'Văn bản thuyết minh',
    'Văn bản thuyết minh cung cấp thông tin khách quan về sự vật, hiện tượng.',
    ['Đặc điểm văn bản thuyết minh.', 'Các phương pháp thuyết minh.', 'Viết đoạn thuyết minh đơn giản.'],
    [
      { h: 'Văn bản thuyết minh' },
      { p: 'Văn bản cung cấp tri thức khách quan về đặc điểm, tính chất, công dụng… của sự vật, hiện tượng. Tính chất: chính xác, khoa học, khách quan.' },
      { h: 'Phương pháp thuyết minh' },
      { ul: ['Nêu định nghĩa.', 'Liệt kê.', 'Nêu ví dụ.', 'So sánh.', 'Phân tích, phân loại.', 'Dùng số liệu.'] },
    ],
    [
      { q: 'Văn bản thuyết minh khác văn bản tự sự ở?', a: 'Thuyết minh: cung cấp tri thức khách quan. Tự sự: kể chuyện, có nhân vật và cốt truyện.' },
      { q: 'Viết câu thuyết minh về cây tre.', a: 'Cây tre là loài cây thân thẳng, có nhiều đốt, mọc thành bụi, gắn liền với làng quê Việt Nam.' },
    ]
  ),

  'S8NV-w17-quiz': L(
    'Hai cây phong — Ai-ma-tốp',
    'Đoạn trích thấm đượm tình thầy trò trong "Người thầy đầu tiên" của Aitmatov.',
    ['Hiểu nội dung đoạn trích.', 'Phân tích hình ảnh hai cây phong.', 'Cảm nhận tình thầy trò.'],
    [
      { h: 'Tác giả Aitmatov' },
      { p: 'Chingiz Aitmatov (1928-2008) — nhà văn người Kyrgyzstan, văn phong giàu chất trữ tình.' },
      { h: 'Đoạn trích "Hai cây phong"' },
      { p: 'Người kể chuyện hồi tưởng về 2 cây phong trên đồi quê — biểu tượng tình thầy An-tư-nai (thầy Đuy-sen trồng). Hai cây phong là chứng nhân tuổi thơ và tình thầy trò.' },
      { ul: ['Hai cây phong: biểu tượng tình yêu, tình thầy trò.', 'Người kể chuyện: cảm xúc thiêng liêng với cây và thầy.', 'Hình ảnh thiên nhiên đẹp, đầy chất thơ.'] },
    ],
    [
      { q: 'Hai cây phong tượng trưng cho gì?', a: 'Tình thầy trò thiêng liêng, kỷ niệm tuổi thơ trong sáng.' },
      { q: 'Phong cách văn Aitmatov?', a: 'Trữ tình, thấm đẫm chất thơ, gắn với thiên nhiên và tình người.' },
    ]
  ),

  'S8NV-w18-quiz': L(
    'Ôn tập học kì I',
    'Tổng hợp kiến thức Văn HK1.',
    ['Hệ thống các tác phẩm.', 'Ôn kiến thức tiếng Việt.', 'Kỹ năng viết văn thuyết minh.'],
    [
      { h: 'Văn bản đã học' },
      { ul: ['Truyện ngắn: Tôi đi học, Trong lòng mẹ, Lão Hạc…', 'Văn học nước ngoài: Cô bé bán diêm, Chiếc lá cuối cùng…', 'Văn bản nhật dụng: Ôn dịch thuốc lá…'] },
      { h: 'Tiếng Việt' },
      { ul: ['Trường từ vựng, từ tượng hình-thanh.', 'Trợ từ, thán từ, tình thái từ.', 'Câu ghép, các dấu câu.'] },
    ],
    [
      { q: 'Truyện "Lão Hạc" của ai?', a: 'Nam Cao.' },
      { q: '"Tức nước vỡ bờ" trích từ?', a: 'Tiểu thuyết "Tắt đèn" của Ngô Tất Tố.' },
    ]
  ),

  'S8NV-w19-quiz': L(
    'Nhớ rừng — Thế Lữ',
    'Bài thơ "Nhớ rừng" của Thế Lữ — tiếng kêu bi tráng của con hổ trong cũi sắt.',
    ['Hiểu nội dung và nghệ thuật bài thơ.', 'Phân tích hình tượng con hổ.', 'Ý nghĩa biểu tượng.'],
    [
      { h: 'Tác giả Thế Lữ' },
      { p: 'Thế Lữ (1907-1989) — đại biểu phong trào Thơ Mới. "Nhớ rừng" (1934) là tác phẩm tiêu biểu.' },
      { h: 'Bài thơ "Nhớ rừng"' },
      { p: 'Lời tâm sự của con hổ bị giam trong vườn bách thú — nhớ về thuở vàng son làm chúa sơn lâm. Bài thơ là tiếng kêu của tâm hồn yêu tự do, không cam phận tù túng.' },
      { ul: ['Hình tượng con hổ: biểu tượng tâm hồn yêu tự do.', 'Tiếng kêu nhớ rừng: nỗi buồn của trí thức VN trước 1945.', 'Nghệ thuật: ngôn ngữ hùng tráng, hình ảnh thơ mộng.'] },
    ],
    [
      { q: 'Con hổ trong bài thơ tượng trưng cho?', a: 'Tâm hồn yêu tự do, khát vọng vùng lên, không cam phận tù túng — biểu tượng cho trí thức VN.' },
      { q: 'Câu "Nào đâu những đêm vàng bên bờ suối…" thể hiện?', a: 'Hồi ức về quá khứ vàng son tự do — đối lập với hiện tại tù túng.' },
    ]
  ),

  'S8NV-w20-quiz': L(
    'Quê hương — Tế Hanh',
    'Bài thơ "Quê hương" của Tế Hanh — tình yêu quê hương biển cả.',
    ['Hiểu nội dung và cảm xúc bài thơ.', 'Phân tích hình ảnh quê hương.', 'Cảm nhận tình yêu quê.'],
    [
      { h: 'Tác giả Tế Hanh' },
      { p: 'Tế Hanh (1921-2009) — nhà thơ Quảng Ngãi, thơ ông giàu tình quê hương. "Quê hương" (1939) là một trong những bài thơ hay nhất.' },
      { h: 'Bài thơ "Quê hương"' },
      { p: 'Bức tranh quê hương vùng biển: cảnh ra khơi và trở về của thuyền cá. Hình ảnh người dân chài, cánh buồm, mùi mặn mòi biển cả… tất cả thấm đẫm tình yêu quê.' },
      { ul: ['Hình ảnh "Chiếc thuyền nhẹ hăng như con tuấn mã / Phăng mái chèo, mạnh mẽ vượt trường giang" — sinh động.', 'Người dân chài: khoẻ khoắn, dũng cảm.', 'Tình yêu quê hương: da diết, sâu lắng.'] },
    ],
    [
      { q: 'Quê hương Tế Hanh được khắc hoạ qua hình ảnh chính nào?', a: 'Biển cả, thuyền đánh cá, người dân chài, cánh buồm — đặc trưng làng chài.' },
      { q: 'Câu "Tôi nhớ cái nồi cơm mẹ nấu / Có vị mặn của biển khơi" thể hiện?', a: 'Nỗi nhớ quê hương qua những hình ảnh giản dị, mùi vị quen thuộc.' },
    ]
  ),

  'S8NV-w21-quiz': L(
    'Khi con tu hú — Tố Hữu',
    'Bài thơ "Khi con tu hú" của Tố Hữu — tiếng gọi tự do của người tù.',
    ['Hiểu hoàn cảnh sáng tác.', 'Phân tích tâm trạng người tù.', 'Ý nghĩa hình ảnh con tu hú.'],
    [
      { h: 'Hoàn cảnh sáng tác' },
      { p: 'Tố Hữu (1920-2002) sáng tác bài này khi bị giam trong nhà tù Pháp năm 1939. Nghe tiếng tu hú gọi bầy ngoài tự nhiên, lòng người tù da diết khát khao tự do.' },
      { h: 'Nội dung bài thơ' },
      { p: '6 câu đầu: bức tranh mùa hè rộn ràng, tự do. 4 câu sau: tâm trạng ngột ngạt, khao khát tự do mãnh liệt của người tù.' },
      { ul: ['Tiếng tu hú: tiếng gọi tự do, mùa hè.', 'Tương phản: thiên nhiên tự do vs tù ngục chật chội.', 'Khát vọng phá ngục: "Tôi muốn đập tan phòng / Hè ôi!"'] },
    ],
    [
      { q: 'Vì sao tiếng tu hú gây xúc động cho người tù?', a: 'Tiếng tu hú gợi mùa hè, sự tự do — đối lập hoàn toàn với cảnh tù ngục, khiến khao khát tự do càng cháy bỏng.' },
      { q: 'Câu "Tôi muốn đập tan phòng" thể hiện?', a: 'Khát vọng phá tù mãnh liệt, không chịu cam phận giam cầm.' },
    ]
  ),

  'S8NV-w22-quiz': L(
    'Tức cảnh Pác Bó — Hồ Chí Minh',
    'Bài thơ "Tức cảnh Pác Bó" — tinh thần ung dung, lạc quan của Bác.',
    ['Hiểu hoàn cảnh sáng tác.', 'Phân tích phong thái Bác.', 'Cảm nhận tinh thần CM.'],
    [
      { h: 'Hoàn cảnh sáng tác' },
      { p: 'Hồ Chí Minh sáng tác năm 1941 tại Pác Bó (Cao Bằng) — khi mới về nước trực tiếp lãnh đạo CMVN. Sống trong hang đá, ăn cháo bẹ rau măng, nhưng Bác vẫn giữ tinh thần ung dung.' },
      { h: 'Bài thơ' },
      { p: '"Sáng ra bờ suối, tối vào hang / Cháo bẹ rau măng vẫn sẵn sàng / Bàn đá chông chênh dịch sử Đảng / Cuộc đời cách mạng thật là sang." — thể hiện phong thái ung dung, lạc quan dù cuộc sống khó khăn.' },
      { ul: ['Đối lập: hoàn cảnh khắc nghiệt vs tinh thần ung dung.', 'Cụm từ "thật là sang" — niềm tự hào cách mạng.', 'Phong cách Bác: giản dị, vĩ đại.'] },
    ],
    [
      { q: 'Câu "Cuộc đời cách mạng thật là sang" thể hiện gì?', a: 'Tinh thần lạc quan, tự hào của Bác. "Sang" không phải vật chất mà là sự "sang trọng" của lý tưởng CM.' },
      { q: 'Phong thái Bác ở Pác Bó?', a: 'Ung dung, tự tại, lạc quan dù cuộc sống vật chất khó khăn — phong thái người chiến sĩ cách mạng cao đẹp.' },
    ]
  ),

  'S8NV-w23-quiz': L(
    'Ngắm trăng — Hồ Chí Minh',
    'Bài thơ chữ Hán "Vọng nguyệt" (Ngắm trăng) trong "Nhật ký trong tù".',
    ['Hoàn cảnh trong tù.', 'Tâm hồn nghệ sĩ.', 'Hình ảnh trăng và người.'],
    [
      { h: 'Hoàn cảnh sáng tác' },
      { p: 'Bác bị giam trong nhà tù Tưởng Giới Thạch (1942-1943). Trong cảnh tù, Bác vẫn giữ tâm hồn nghệ sĩ, ngắm trăng và đối đáp với trăng.' },
      { h: 'Bài thơ' },
      { p: '"Ngục trung vô tửu diệc vô hoa / Đối thử lương tiêu nại nhược hà? / Nhân hướng song tiền khán minh nguyệt / Nguyệt tòng song khích khán thi gia." — Trong tù không rượu không hoa, đêm trăng đẹp biết làm sao? Người qua song cửa ngắm trăng sáng, trăng qua khe cửa ngắm nhà thơ.' },
      { ul: ['Tâm hồn nghệ sĩ vượt qua tù ngục.', 'Trăng và người: cuộc giao hoà thơ mộng.', 'Phong thái ung dung, vượt lên hoàn cảnh.'] },
    ],
    [
      { q: 'Câu "Nhân hướng song tiền khán minh nguyệt" thể hiện?', a: 'Tâm hồn nghệ sĩ vượt qua tù ngục — dù trong tù vẫn ngắm trăng, giao hoà với thiên nhiên.' },
      { q: 'Phong cách thơ Bác trong "Nhật ký trong tù"?', a: 'Cổ điển (chữ Hán) nhưng tinh thần hiện đại, lạc quan; bình dị mà sâu sắc.' },
    ]
  ),

  'S8NV-w24-quiz': L(
    'Đi đường — Hồ Chí Minh',
    'Bài thơ "Tẩu lộ" (Đi đường) — bài học triết lý sâu sắc.',
    ['Hoàn cảnh sáng tác.', 'Triết lý đi đường.', 'Liên hệ cách mạng.'],
    [
      { h: 'Bài thơ' },
      { p: '"Tẩu lộ tài tri tẩu lộ nan / Trùng san chi ngoại hựu trùng san / Trùng san đăng đáo cao phong hậu / Vạn lý dư đồ cố miện gian." — Đi đường mới biết đi đường khó, núi cao rồi lại núi cao trập trùng. Khi đã lên đến đỉnh núi cao nhất, ngàn dặm non sông thu vào tầm mắt.' },
      { h: 'Triết lý' },
      { p: 'Đi đường khó nhưng vượt qua rồi sẽ thấy tầm nhìn rộng mở — triết lý về sự kiên trì vượt khó của người cách mạng.' },
      { ul: ['Lớp nghĩa thực: đi đường thực sự.', 'Lớp nghĩa biểu tượng: đường cách mạng đầy gian khó.', 'Bài học: kiên trì thì thành công.'] },
    ],
    [
      { q: 'Triết lý của bài thơ?', a: 'Vượt qua khó khăn sẽ thấy thành quả lớn — kiên trì là chìa khoá thành công.' },
      { q: 'Liên hệ với con đường CM?', a: 'Đường CM đầy khó khăn nhưng nếu kiên trì sẽ đạt độc lập, tự do cho dân tộc.' },
    ]
  ),

  'S8NV-w25-quiz': L(
    'Chiếu dời đô — Lí Công Uẩn',
    'Văn bản nghị luận cổ — Chiếu dời đô của vua Lí Thái Tổ (1010).',
    ['Hiểu bối cảnh lịch sử.', 'Phân tích lập luận của Lí Công Uẩn.', 'Ý nghĩa việc dời đô.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Năm 1010, Lí Công Uẩn (Lí Thái Tổ) lên ngôi, quyết định dời đô từ Hoa Lư (Ninh Bình) ra Đại La (Hà Nội), đổi tên Thăng Long — bước ngoặt lịch sử.' },
      { h: 'Nội dung Chiếu' },
      { p: 'Vua nêu các lý do dời đô: nhà Hạ, Thương đã từng dời đô vì sự phát triển. Hoa Lư chật hẹp, Đại La rộng rãi, trung tâm bốn phương, đất rồng cuộn hổ ngồi — đáng làm đế đô vạn đời.' },
      { ul: ['Lập luận chặt chẽ: dẫn chứng lịch sử + phân tích địa thế.', 'Tầm nhìn xa: đặt nền móng cho Thăng Long-Hà Nội ngàn năm.', 'Tinh thần dân chủ: hỏi ý kiến quần thần ("Trẫm muốn dời đô đến đó. Các khanh nghĩ thế nào?")'] },
    ],
    [
      { q: 'Vì sao Lí Công Uẩn quyết định dời đô?', a: 'Hoa Lư chật hẹp, phòng thủ tốt nhưng không phát triển được. Đại La rộng, là trung tâm bốn phương, thuận lợi xây dựng quốc gia.' },
      { q: 'Ý nghĩa lịch sử của việc dời đô?', a: 'Đặt nền móng cho Thăng Long-Hà Nội — kinh đô ngàn năm văn hiến của dân tộc.' },
    ]
  ),

  'S8NV-w26-quiz': L(
    'Hịch tướng sĩ — Trần Quốc Tuấn',
    'Bài Hịch khích lệ tướng sĩ chống quân Nguyên-Mông của Trần Quốc Tuấn.',
    ['Hoàn cảnh ra đời.', 'Phân tích lập luận và cảm xúc.', 'Tinh thần yêu nước.'],
    [
      { h: 'Hoàn cảnh' },
      { p: 'Trần Quốc Tuấn (Hưng Đạo Vương) viết Hịch tướng sĩ trước cuộc kháng chiến chống Nguyên-Mông lần 2 (1285). Mục đích: khích lệ tướng sĩ quyết tâm chiến đấu.' },
      { h: 'Nội dung Hịch' },
      { p: 'Trần Quốc Tuấn nêu gương các tướng trung nghĩa lịch sử, phê phán những kẻ hèn nhát ham vui, kêu gọi tướng sĩ học theo binh thư, sẵn sàng chiến đấu vì non sông.' },
      { ul: ['Lập luận sắc bén: dẫn chứng lịch sử + phân tích thực tế.', 'Cảm xúc mãnh liệt: "Ta thường tới bữa quên ăn, nửa đêm vỗ gối..."', 'Tinh thần yêu nước, quật cường.'] },
    ],
    [
      { q: 'Mục đích bài Hịch?', a: 'Khích lệ tướng sĩ quyết tâm chiến đấu chống quân Nguyên-Mông, bỏ thói ham vui hèn nhát.' },
      { q: 'Câu "Ta thường tới bữa quên ăn..." thể hiện?', a: 'Lòng yêu nước cháy bỏng, nỗi đau khi đất nước bị xâm lăng.' },
    ]
  ),

  'S8NV-w27-quiz': L(
    'Câu nghi vấn — Câu cầu khiến',
    'Hai loại câu phân theo mục đích nói.',
    ['Đặc điểm câu nghi vấn.', 'Đặc điểm câu cầu khiến.', 'Phân biệt và sử dụng.'],
    [
      { h: 'Câu nghi vấn' },
      { p: 'Câu hỏi để tìm hiểu thông tin. Dấu hiệu: từ nghi vấn (ai, gì, nào, sao, đâu, bao giờ…), từ "hay là", "à", "ư"…, dấu chấm hỏi cuối câu.' },
      { h: 'Câu cầu khiến' },
      { p: 'Câu yêu cầu, ra lệnh, đề nghị. Dấu hiệu: từ "hãy", "đừng", "chớ", "đi", "thôi"…, dấu chấm than (cũng có thể dấu chấm).' },
    ],
    [
      { q: 'Phân loại: "Bạn đi đâu đấy?" và "Hãy đi học đi!"', a: 'Câu 1: nghi vấn. Câu 2: cầu khiến.' },
      { q: 'Đặt 1 câu nghi vấn và 1 câu cầu khiến.', a: 'NV: "Em ăn cơm chưa?" CK: "Em đi ngủ sớm nhé!"' },
    ]
  ),

  'S8NV-w28-quiz': L(
    'Câu cảm thán — Câu trần thuật',
    'Hai loại câu nữa: cảm thán biểu cảm và trần thuật thông tin.',
    ['Đặc điểm câu cảm thán.', 'Đặc điểm câu trần thuật.', 'Phân biệt và sử dụng.'],
    [
      { h: 'Câu cảm thán' },
      { p: 'Câu bộc lộ cảm xúc trực tiếp. Dấu hiệu: thán từ (ôi, chao, trời ơi…), từ "thay", "biết bao"…, dấu chấm than.' },
      { h: 'Câu trần thuật' },
      { p: 'Câu kể, trình bày, miêu tả (loại câu phổ biến nhất). Kết thúc bằng dấu chấm. Không có dấu hiệu đặc biệt.' },
    ],
    [
      { q: 'Phân loại: "Trời ơi, nóng quá!" và "Hôm nay trời nóng."', a: 'Câu 1: cảm thán. Câu 2: trần thuật.' },
      { q: 'Đặt câu cảm thán.', a: '"Ôi, bức tranh đẹp biết bao!"' },
    ]
  ),

  'S8NV-w29-quiz': L(
    'Câu phủ định',
    'Câu phủ định bác bỏ thông tin hoặc phủ định sự tồn tại.',
    ['Đặc điểm câu phủ định.', 'Phân biệt phủ định miêu tả và bác bỏ.', 'Sử dụng phù hợp.'],
    [
      { h: 'Câu phủ định' },
      { p: 'Câu có từ phủ định: không, chưa, chẳng, không phải… Có 2 loại chức năng:' },
      { ul: ['Phủ định miêu tả: thông báo sự không tồn tại. VD: "Hôm nay không có gió."', 'Phủ định bác bỏ: bác bỏ ý kiến/nhận định. VD: "Không, bạn nhầm rồi!"'] },
    ],
    [
      { q: 'Đặt câu phủ định miêu tả.', a: '"Tôi chưa đọc cuốn sách đó."' },
      { q: 'Đặt câu phủ định bác bỏ.', a: '"Không, mày không thể nói thế!"' },
    ]
  ),

  'S8NV-w30-quiz': L(
    'Hành động nói',
    'Hành động nói là khái niệm trong ngữ dụng học — nói cũng là hành động.',
    ['Hiểu khái niệm hành động nói.', 'Các loại hành động nói.', 'Phân biệt trong các tình huống.'],
    [
      { h: 'Hành động nói' },
      { p: 'Hành động nói = hành động được thực hiện bằng lời nói nhằm một mục đích nhất định. Khi nói, chúng ta thực hiện hành động (hỏi, hứa, ra lệnh, mời…).' },
      { h: 'Các kiểu hành động nói' },
      { ul: ['Hỏi.', 'Trình bày (báo cáo, kể, thông báo…).', 'Điều khiển (yêu cầu, mời, ra lệnh…).', 'Hứa hẹn.', 'Bộc lộ cảm xúc.'] },
    ],
    [
      { q: 'Câu "Mai 7h tôi đến đón bạn." thực hiện hành động nói gì?', a: 'Hứa hẹn.' },
      { q: 'Câu "Hãy giúp mẹ rửa chén!" thực hiện hành động?', a: 'Điều khiển (yêu cầu, mệnh lệnh).' },
    ]
  ),

  'S8NV-w31-quiz': L(
    'Hội thoại — Lượt lời',
    'Trong hội thoại, người tham gia luân phiên nhau lượt lời.',
    ['Hiểu vai trò người nói/nghe.', 'Quy tắc lượt lời.', 'Ứng xử trong hội thoại.'],
    [
      { h: 'Hội thoại' },
      { p: 'Hội thoại = giao tiếp giữa hai hay nhiều người. Trong hội thoại, mỗi người có vai (người nói, người nghe) và thực hiện lượt lời.' },
      { h: 'Lượt lời' },
      { ul: ['Mỗi người nói một lượt rồi nhường người khác.', 'Không ngắt lời người khác.', 'Lắng nghe khi đến lượt người khác.', 'Có thể tỏ thái độ qua việc nói/im lặng.'] },
      { note: 'Lịch sự trong hội thoại = tôn trọng lượt lời + lắng nghe + ứng xử phù hợp.' },
    ],
    [
      { q: 'Lỗi giao tiếp phổ biến?', a: 'Ngắt lời người khác, không lắng nghe, nói át — đều thiếu tôn trọng.' },
      { q: 'Lượt lời trong hội thoại lớp họp?', a: 'Phát biểu khi được mời, không nói cùng lúc, lắng nghe người khác.' },
    ]
  ),

  'S8NV-w32-quiz': L(
    'Văn nghị luận — Luận điểm, luận cứ',
    'Văn nghị luận bàn về vấn đề có ý nghĩa xã hội, cần lập luận chặt chẽ.',
    ['Hiểu khái niệm văn nghị luận.', 'Phân biệt luận điểm và luận cứ.', 'Lập dàn ý nghị luận.'],
    [
      { h: 'Văn nghị luận' },
      { p: 'Văn nghị luận trình bày quan điểm, ý kiến về một vấn đề và thuyết phục người đọc tin theo. Tính chất: chặt chẽ, có lý lẽ, dẫn chứng.' },
      { h: 'Luận điểm và luận cứ' },
      { ul: ['Luận điểm: ý kiến chính, quan điểm của người viết.', 'Luận cứ: lý lẽ và dẫn chứng để chứng minh luận điểm.', 'Mỗi luận điểm cần có luận cứ thuyết phục.'] },
    ],
    [
      { q: 'Phân biệt luận điểm và luận cứ.', a: 'Luận điểm = quan điểm chính (cần chứng minh). Luận cứ = lý lẽ + dẫn chứng (để chứng minh).' },
      { q: 'Đề "Học sinh nên đọc sách". Luận điểm chính là?', a: 'Học sinh nên đọc sách (vì đọc sách giúp mở mang trí tuệ, rèn nhân cách, mở rộng kiến thức).' },
    ]
  ),

  'S8NV-w33-quiz': L(
    'Bàn luận về phép học — Nguyễn Thiếp',
    'Bài "Bàn luận về phép học" của Nguyễn Thiếp — quan điểm về giáo dục.',
    ['Hiểu hoàn cảnh sáng tác.', 'Phân tích quan điểm về học.', 'Ý nghĩa với hiện tại.'],
    [
      { h: 'Tác giả Nguyễn Thiếp' },
      { p: 'Nguyễn Thiếp (1723-1804) — nhà nho, La Sơn Phu Tử. Bài "Luận học pháp" gửi vua Quang Trung trình bày quan điểm về phép học đúng đắn.' },
      { h: 'Quan điểm về học' },
      { p: 'Học không phải để vinh thân phì gia mà để biết đạo lý, giúp đời. Phép học chân chính: học từ dễ đến khó, từ thấp đến cao, học đi đôi với hành.' },
      { ul: ['Học để hiểu đạo lý làm người.', 'Học rồi phải vận dụng (hành).', 'Phê phán lối học khoa cử, hư danh.'] },
    ],
    [
      { q: 'Theo Nguyễn Thiếp, mục đích học là?', a: 'Hiểu đạo lý làm người, làm việc có ích cho dân, cho nước — không phải vinh thân phì gia.' },
      { q: 'Câu "Học rộng tóm lược, đặng theo lối tu thân" có ý gì?', a: 'Học nhiều nhưng phải biết tổng kết để rèn nhân cách.' },
    ]
  ),

  'S8NV-w34-quiz': L(
    'Đi bộ ngao du — Ru-xô',
    'Đoạn trích từ "Émile" của Jean-Jacques Rousseau — triết gia Khai sáng Pháp.',
    ['Hiểu nội dung đoạn trích.', 'Phân tích lợi ích đi bộ.', 'Quan điểm giáo dục tự nhiên.'],
    [
      { h: 'Tác giả Rousseau' },
      { p: 'Jean-Jacques Rousseau (1712-1778) — triết gia, nhà văn Pháp thời Khai sáng. "Émile" (1762) là tác phẩm giáo dục nổi tiếng đề cao giáo dục tự nhiên.' },
      { h: 'Đoạn trích "Đi bộ ngao du"' },
      { p: 'Rousseau ca ngợi việc đi bộ — không chỉ vận động thân thể mà còn rèn ý chí, tự do, mở mang đầu óc qua quan sát.' },
      { ul: ['Đi bộ = vận động + giải trí + học hỏi.', 'Giáo dục tự nhiên: học qua trải nghiệm thực tế.', 'Tinh thần tự do, tự lập.'] },
    ],
    [
      { q: 'Theo Rousseau, đi bộ có lợi ích gì?', a: 'Rèn thân thể, giải trí, tự do, mở mang đầu óc qua quan sát thực tế.' },
      { q: 'Triết lý giáo dục của Rousseau?', a: 'Giáo dục tự nhiên — học qua trải nghiệm, tự do phát triển theo bản tính tự nhiên.' },
    ]
  ),

  'S8NV-w35-quiz': L(
    'Ôn tập cuối năm',
    'Tổng hợp Văn lớp 8 — chuẩn bị kiểm tra cuối năm.',
    ['Hệ thống các văn bản đã học.', 'Ôn tập kiến thức Tiếng Việt.', 'Kỹ năng làm văn nghị luận.'],
    [
      { h: 'Tổng kết' },
      { ul: ['Văn bản: truyện ngắn VN+nước ngoài, văn nhật dụng, thơ Thơ Mới + CM, văn nghị luận cổ điển.', 'Tiếng Việt: trường từ vựng, các loại từ + dấu câu, các kiểu câu, hành động nói, hội thoại.', 'Tập làm văn: thuyết minh, nghị luận.'] },
      { note: 'Đọc lại tác phẩm, gạch chân chi tiết hay, ghi nhớ tác giả + thời đại.' },
    ],
    [
      { q: 'Bài thơ "Nhớ rừng" của ai?', a: 'Thế Lữ — đại biểu Thơ Mới.' },
      { q: '"Hịch tướng sĩ" của ai? Bối cảnh?', a: 'Trần Quốc Tuấn, viết trước kháng chiến chống Nguyên-Mông lần 2 (1285).' },
    ]
  ),
};
