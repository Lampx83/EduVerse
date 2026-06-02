// ============================================================
// Lớp 9 · NGỮ VĂN — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Key trùng id quiz: "S9NV-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9NV_LESSONS = {
  'S9NV-w01-quiz': L(
    'Phong cách Hồ Chí Minh',
    'Mở đầu năm học cuối cấp với văn bản về tư cách và phong cách của Bác Hồ — biểu tượng văn hoá Việt Nam.',
    ['Hiểu vẻ đẹp văn hoá trong phong cách Hồ Chí Minh.', 'Phân tích thủ pháp lập luận của tác giả.'],
    [
      { h: 'Tác giả – tác phẩm' },
      { p: 'Lê Anh Trà — bài "Phong cách Hồ Chí Minh" (1990), trích từ "Hồ Chí Minh và văn hoá Việt Nam".' },
      { h: 'Nội dung chính' },
      { ul: ['Bác Hồ tiếp thu tinh hoa văn hoá nhân loại nhưng giữ cốt cách dân tộc.', 'Lối sống giản dị, thanh cao, vĩ đại trong những điều bình thường.'] },
      { note: 'Văn bản kết hợp nghị luận + biểu cảm; lập luận chặt chẽ với dẫn chứng cụ thể.' },
    ],
    [
      { q: 'Phong cách HCM được thể hiện qua những khía cạnh nào?', a: 'Hai khía cạnh: tiếp thu văn hoá nhân loại và lối sống giản dị mà thanh cao.' },
      { q: 'Đặc sắc nghệ thuật?', a: 'Lập luận chặt chẽ, dẫn chứng phong phú, lời văn cô đọng giàu cảm xúc.' },
    ]
  ),

  'S9NV-w02-quiz': L(
    'Đấu tranh cho một thế giới hoà bình',
    'Văn bản nghị luận của G. G. Mác-két về nguy cơ chiến tranh hạt nhân — vấn đề thời sự toàn cầu.',
    ['Nắm luận điểm chính và cách lập luận.', 'Nhận thức trách nhiệm bảo vệ hoà bình.'],
    [
      { h: 'Tác giả' },
      { p: 'Gabriel García Márquez (1928-2014) — nhà văn Colombia, Nobel Văn học 1982.' },
      { h: 'Nội dung' },
      { ul: ['Cảnh báo nguy cơ chiến tranh hạt nhân huỷ diệt loài người.', 'Phân tích sự vô lý của cuộc chạy đua vũ trang.', 'Kêu gọi đấu tranh vì hoà bình.'] },
      { note: 'Lập luận sắc bén kết hợp dẫn chứng số liệu thuyết phục.' },
    ],
    [
      { q: 'Luận điểm chính của bài?', a: 'Nguy cơ chiến tranh hạt nhân và sự cần thiết phải đấu tranh ngăn chặn.' },
      { q: 'Nghệ thuật đặc sắc?', a: 'Số liệu thống kê + so sánh tương phản + giọng văn đầy trăn trở.' },
    ]
  ),

  'S9NV-w03-quiz': L(
    'Các phương châm hội thoại',
    'Học các nguyên tắc giao tiếp hiệu quả — kỹ năng cần thiết cho mọi tình huống.',
    ['Hiểu 5 phương châm hội thoại của Grice.', 'Vận dụng vào giao tiếp.'],
    [
      { h: 'Năm phương châm hội thoại' },
      { ul: ['Phương châm về lượng: nói đủ, không thiếu không thừa.', 'Phương châm về chất: nói điều có cơ sở, không bịa đặt.', 'Phương châm quan hệ: nói đúng đề tài.', 'Phương châm cách thức: rõ ràng, ngắn gọn.', 'Phương châm lịch sự: tôn trọng người nghe.'] },
      { note: 'Vi phạm có thể chủ đích (để gây cười, ẩn dụ...) hoặc vô tình.' },
    ],
    [
      { q: 'Khi A hỏi giờ, B trả lời "Tôi không có đồng hồ" — vi phạm phương châm nào?', a: 'Phương châm quan hệ (không trả lời thẳng câu hỏi).' },
      { q: 'Phương châm về chất yêu cầu gì?', a: 'Không nói điều mình không tin là đúng hoặc không có bằng chứng.' },
    ]
  ),

  'S9NV-w04-quiz': L(
    'Tuyên bố thế giới về sự sống còn, quyền được bảo vệ và phát triển của trẻ em',
    'Văn bản nhật dụng quan trọng về quyền trẻ em — vấn đề toàn cầu.',
    ['Hiểu nội dung Tuyên bố.', 'Nhận thức quyền và trách nhiệm với trẻ em.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Hội nghị cấp cao Thế giới về trẻ em họp tại Liên Hợp Quốc, 30/9/1990.' },
      { h: 'Nội dung chính' },
      { ul: ['Sự thách thức: tình trạng trẻ em trên thế giới.', 'Cơ hội: điều kiện thuận lợi để chăm sóc trẻ.', 'Nhiệm vụ cụ thể cần thực hiện.'] },
      { note: 'Văn bản có giá trị nhân văn sâu sắc, kêu gọi hành động toàn cầu vì trẻ em.' },
    ],
    [
      { q: 'Cấu trúc Tuyên bố gồm mấy phần?', a: '3 phần: Sự thách thức – Cơ hội – Nhiệm vụ.' },
      { q: 'Ý nghĩa của Tuyên bố?', a: 'Khẳng định quyền trẻ em là quyền cơ bản, kêu gọi cộng đồng quốc tế cùng hành động.' },
    ]
  ),

  'S9NV-w05-quiz': L(
    'Chuyện người con gái Nam Xương (Nguyễn Dữ)',
    'Tác phẩm cổ tiêu biểu trong "Truyền kì mạn lục" — bi kịch của Vũ Nương.',
    ['Phân tích nhân vật Vũ Nương.', 'Hiểu giá trị hiện thực và nhân đạo.'],
    [
      { h: 'Tác giả – tác phẩm' },
      { p: 'Nguyễn Dữ (thế kỷ 16), thuộc "Truyền kì mạn lục" — tập truyện ngắn chữ Hán.' },
      { h: 'Nhân vật Vũ Nương' },
      { ul: ['Đẹp người, đẹp nết, hiếu thảo, thuỷ chung.', 'Bị nghi oan, phải tự vẫn.', 'Sau khi chết vẫn giữ phẩm hạnh.'] },
      { h: 'Giá trị' },
      { ul: ['Tố cáo xã hội phong kiến trọng nam khinh nữ.', 'Cảm thương cho thân phận phụ nữ.'] },
      { note: 'Tác phẩm có yếu tố kì ảo nhưng phản ánh hiện thực sâu sắc.' },
    ],
    [
      { q: 'Nguyên nhân cái chết của Vũ Nương?', a: 'Bị chồng nghi oan vì lời nói ngây thơ của con; xã hội phong kiến không cho phép phụ nữ minh oan.' },
      { q: 'Yếu tố kì ảo trong truyện?', a: 'Vũ Nương được cứu, sống dưới thuỷ cung; trở về trong khói sương rồi biến mất.' },
    ]
  ),

  'S9NV-w06-quiz': L(
    'Hoàng Lê nhất thống chí (Ngô gia văn phái)',
    'Đoạn trích về hình tượng vua Quang Trung — anh hùng dân tộc.',
    ['Phân tích hình tượng Quang Trung.', 'Hiểu giá trị lịch sử của tác phẩm.'],
    [
      { h: 'Tác giả – tác phẩm' },
      { p: 'Ngô gia văn phái — "Hoàng Lê nhất thống chí" (cuối thế kỷ 18 đầu thế kỷ 19), tiểu thuyết chương hồi viết bằng chữ Hán.' },
      { h: 'Hình tượng Quang Trung' },
      { ul: ['Quyết đoán: nhận tin báo, lập tức chuẩn bị bắc tiến.', 'Trí tuệ sáng suốt: phân tích tình hình chính xác.', 'Tài quân sự lỗi lạc: hành quân thần tốc, đánh trận Ngọc Hồi - Đống Đa.', 'Có lòng yêu nước, ý chí tự chủ.'] },
      { note: 'Tác phẩm tái hiện sống động chiến thắng Ngọc Hồi - Đống Đa (Tết Kỷ Dậu 1789).' },
    ],
    [
      { q: 'Tại sao Quang Trung là anh hùng dân tộc?', a: 'Có công đánh tan 29 vạn quân Thanh xâm lược, bảo vệ độc lập dân tộc.' },
      { q: 'Đặc sắc miêu tả?', a: 'Bút pháp tự sự kết hợp miêu tả; ngôn ngữ trang trọng, hào hùng.' },
    ]
  ),

  'S9NV-w07-quiz': L(
    'Truyện Kiều (Nguyễn Du) — Giới thiệu',
    'Kiệt tác văn học Việt Nam — Truyện Kiều của đại thi hào Nguyễn Du.',
    ['Hiểu hoàn cảnh sáng tác và giá trị Truyện Kiều.', 'Nắm cốt truyện cơ bản.'],
    [
      { h: 'Tác giả' },
      { p: 'Nguyễn Du (1765-1820), tự Tố Như, hiệu Thanh Hiên — đại thi hào dân tộc, danh nhân văn hoá thế giới (UNESCO 1965).' },
      { h: 'Tác phẩm' },
      { ul: ['Truyện thơ Nôm 3254 câu lục bát.', 'Dựa trên "Kim Vân Kiều truyện" của Thanh Tâm Tài Nhân (Trung Quốc).', 'Kể về cuộc đời 15 năm lưu lạc của Thuý Kiều.'] },
      { h: 'Giá trị' },
      { ul: ['Hiện thực: phơi bày xã hội phong kiến bất công.', 'Nhân đạo: cảm thương số phận con người, ca ngợi vẻ đẹp tâm hồn.'] },
      { note: 'Truyện Kiều được dịch ra hàng chục thứ tiếng, là niềm tự hào của văn học VN.' },
    ],
    [
      { q: 'Truyện Kiều có bao nhiêu câu thơ?', a: '3254 câu lục bát.' },
      { q: 'Giá trị nhân đạo của Truyện Kiều?', a: 'Cảm thương cho số phận con người (đặc biệt phụ nữ), ca ngợi tài năng - phẩm hạnh, lên án xã hội bất công.' },
    ]
  ),

  'S9NV-w08-quiz': L(
    'Chị em Thuý Kiều (trích Truyện Kiều)',
    'Đoạn trích miêu tả vẻ đẹp tuyệt thế của hai chị em Thuý Kiều, Thuý Vân.',
    ['Phân tích nghệ thuật tả người của Nguyễn Du.', 'Hiểu dụng ý "miêu tả qua so sánh"".'],
    [
      { h: 'Vị trí đoạn trích' },
      { p: 'Đầu Truyện Kiều, giới thiệu nhân vật.' },
      { h: 'Phân tích' },
      { ul: ['Thuý Vân: vẻ đẹp đoan trang, phúc hậu (mây thua, tuyết nhường) — báo hiệu cuộc đời êm ả.', 'Thuý Kiều: vẻ đẹp sắc sảo, mặn mà (hoa ghen, liễu hờn) — báo hiệu số phận đa truân.', 'Cả hai đều "mười phân vẹn mười" nhưng Kiều "Sắc đành đòi một tài đành hoạ hai".'] },
      { note: 'Nghệ thuật ước lệ tượng trưng, miêu tả gợi nhiều hơn tả.' },
    ],
    [
      { q: '"Hoa ghen thua thắm, liễu hờn kém xanh" gợi điều gì?', a: 'Vẻ đẹp của Kiều khiến thiên nhiên cũng phải ghen tị, báo hiệu số phận sóng gió.' },
      { q: 'Nghệ thuật miêu tả của Nguyễn Du?', a: 'Bút pháp ước lệ tượng trưng (mượn cảnh thiên nhiên để tả người), miêu tả gợi nhiều hơn tả.' },
    ]
  ),

  'S9NV-w09-quiz': L(
    'Cảnh ngày xuân (trích Truyện Kiều)',
    'Đoạn tả cảnh ngày xuân thanh minh — kết hợp tả cảnh + tả tình tinh tế.',
    ['Phân tích nghệ thuật tả cảnh.', 'Hiểu mối quan hệ tả cảnh ngụ tình.'],
    [
      { h: 'Bố cục' },
      { ul: ['4 câu đầu: tả khung cảnh ngày xuân tươi đẹp.', '8 câu tiếp: tả cảnh lễ hội Thanh minh đông vui.', '6 câu cuối: tả cảnh chị em trở về lúc chiều tà.'] },
      { h: 'Nghệ thuật' },
      { ul: ['Tả cảnh thiên nhiên bằng những hình ảnh trong sáng.', 'Sử dụng từ láy, hình ảnh ước lệ.', 'Cảnh chiều tà gợi cảm giác bâng khuâng — báo hiệu biến cố.'] },
      { note: '"Cảnh nào cảnh chẳng đeo sầu/Người buồn cảnh có vui đâu bao giờ" — cảnh và tình hoà quyện.' },
    ],
    [
      { q: 'Câu "Cỏ non xanh tận chân trời" gợi điều gì?', a: 'Khung cảnh xuân rộng lớn, tươi mới, tràn đầy sức sống.' },
      { q: 'Cảnh chiều tà cuối đoạn có dụng ý gì?', a: 'Báo hiệu sự kiện sắp đến (gặp Kim Trọng, mộ Đạm Tiên) — nghệ thuật tả cảnh ngụ tình.' },
    ]
  ),

  'S9NV-w10-quiz': L(
    'Kiều ở lầu Ngưng Bích',
    'Đoạn tâm trạng đặc sắc của Kiều khi bị giam ở lầu Ngưng Bích.',
    ['Phân tích tâm trạng Kiều qua tả cảnh.', 'Hiểu nghệ thuật miêu tả nội tâm.'],
    [
      { h: 'Vị trí' },
      { p: 'Sau khi Kiều bán mình chuộc cha, bị Tú Bà nhốt ở lầu Ngưng Bích.' },
      { h: 'Tâm trạng Kiều' },
      { ul: ['Nỗi cô đơn, buồn tủi: "Bốn bề bát ngát xa trông".', 'Nhớ Kim Trọng: tình yêu thuỷ chung.', 'Nhớ cha mẹ: lòng hiếu thảo, day dứt.', 'Lo lắng cho tương lai: 8 câu cuối với điệp ngữ "Buồn trông".'] },
      { note: '"Buồn trông" lặp 4 lần tạo nhịp điệu day dứt, dồn nén nỗi buồn.' },
    ],
    [
      { q: 'Điệp ngữ "Buồn trông" có tác dụng gì?', a: 'Diễn tả tâm trạng buồn triền miên, lo âu tăng dần của Kiều.' },
      { q: 'Tại sao Kiều nhớ Kim Trọng trước cha mẹ?', a: 'Vì với cha mẹ, Kiều đã trả nghĩa qua việc bán mình; với Kim Trọng, Kiều day dứt vì phụ ước.' },
    ]
  ),

  'S9NV-w11-quiz': L(
    'Lục Vân Tiên cứu Kiều Nguyệt Nga (Nguyễn Đình Chiểu)',
    'Đoạn trích từ truyện thơ Nôm của Nguyễn Đình Chiểu — đề cao đạo nghĩa.',
    ['Hiểu hình tượng Lục Vân Tiên.', 'Phân tích quan niệm đạo lý.'],
    [
      { h: 'Tác giả' },
      { p: 'Nguyễn Đình Chiểu (1822-1888), nhà thơ mù yêu nước Nam Bộ.' },
      { h: 'Lục Vân Tiên' },
      { ul: ['Anh hùng nghĩa hiệp: đánh cướp cứu Nguyệt Nga.', 'Khiêm nhường: từ chối lời cảm ơn.', 'Lý tưởng "Giữa đường thấy chuyện bất bằng chẳng tha".'] },
      { note: 'Quan niệm anh hùng "kiến nghĩa bất vi vô dũng dã" của Nguyễn Đình Chiểu.' },
    ],
    [
      { q: 'Câu nói nổi tiếng của LVT?', a: '"Làm ơn há dễ trông người trả ơn / Nay đà rõ đặng nguồn cơn / Nào ai tính thiệt so hơn làm gì".' },
      { q: 'Ý nghĩa hình tượng LVT?', a: 'Biểu tượng cho lý tưởng nhân nghĩa của người dân Nam Bộ.' },
    ]
  ),

  'S9NV-w12-quiz': L(
    'Đồng chí (Chính Hữu)',
    'Bài thơ tiêu biểu về tình đồng đội kháng chiến chống Pháp.',
    ['Phân tích tình đồng chí, đồng đội.', 'Hiểu nghệ thuật ngôn ngữ thơ mộc mạc, chân thực.'],
    [
      { h: 'Tác giả' },
      { p: 'Chính Hữu (1926-2007), nhà thơ - chiến sĩ kháng chiến chống Pháp.' },
      { h: 'Nội dung' },
      { ul: ['Cơ sở hình thành tình đồng chí: cùng giai cấp, cùng lý tưởng.', 'Biểu hiện tình đồng chí: chia sẻ vật chất + tinh thần.', 'Biểu tượng "đầu súng trăng treo": đẹp + thơ + chiến đấu hoà quyện.'] },
      { note: 'Ngôn ngữ thơ mộc mạc, cô đọng; hình ảnh giàu sức gợi.' },
    ],
    [
      { q: 'Câu thơ "Đồng chí!" có ý nghĩa gì?', a: 'Câu đặc biệt, là điểm nhấn — khẳng định tình đồng chí thiêng liêng.' },
      { q: '"Đầu súng trăng treo" gợi gì?', a: 'Hình ảnh đẹp hoà quyện giữa chiến đấu (súng) và lãng mạn (trăng) — vẻ đẹp tâm hồn người lính.' },
    ]
  ),

  'S9NV-w13-quiz': L(
    'Bài thơ về tiểu đội xe không kính (Phạm Tiến Duật)',
    'Bài thơ về người lính lái xe Trường Sơn — hình ảnh tiêu biểu kháng chiến chống Mỹ.',
    ['Phân tích hình tượng người lính lái xe.', 'Hiểu giọng điệu trẻ trung, hóm hỉnh.'],
    [
      { h: 'Tác giả' },
      { p: 'Phạm Tiến Duật (1941-2007), nhà thơ Trường Sơn.' },
      { h: 'Hình tượng người lính' },
      { ul: ['Hiên ngang: "Ung dung buồng lái ta ngồi".', 'Lạc quan, hóm hỉnh: "Không có kính ừ thì có bụi".', 'Tình đồng đội: "Bắt tay qua cửa kính vỡ rồi".', 'Ý chí kiên cường: "Chỉ cần trong xe có một trái tim".'] },
      { note: 'Giọng thơ trẻ trung, ngang tàng, đầy sức sống.' },
    ],
    [
      { q: 'Vì sao xe không kính?', a: 'Do bom đạn chiến tranh tàn phá.' },
      { q: 'Hình ảnh "trái tim" cuối bài tượng trưng gì?', a: 'Tình yêu Tổ quốc, ý chí giải phóng miền Nam — sức mạnh tinh thần của người lính.' },
    ]
  ),

  'S9NV-w14-quiz': L(
    'Đoàn thuyền đánh cá (Huy Cận)',
    'Bài thơ ngợi ca lao động và thiên nhiên hùng vĩ của biển cả.',
    ['Phân tích vẻ đẹp người lao động.', 'Hiểu cảm hứng vũ trụ, lãng mạn của Huy Cận.'],
    [
      { h: 'Tác giả' },
      { p: 'Huy Cận (1919-2005), nhà thơ lớn của phong trào Thơ mới và thơ sau Cách mạng.' },
      { h: 'Nội dung' },
      { ul: ['Đoàn thuyền ra khơi lúc hoàng hôn — không khí lao động hào hứng.', 'Cảnh đánh cá trên biển đêm — vẻ đẹp huyền ảo, mạnh mẽ.', 'Đoàn thuyền trở về lúc bình minh — kết quả lao động phong phú.'] },
      { note: 'Cảm hứng vũ trụ + thiên nhiên + con người hoà làm một.' },
    ],
    [
      { q: '"Mặt trời xuống biển như hòn lửa" miêu tả điều gì?', a: 'Cảnh hoàng hôn rực rỡ — không gian rộng lớn, kì vĩ.' },
      { q: 'Tinh thần của bài thơ?', a: 'Ca ngợi vẻ đẹp lao động, niềm vui phấn khởi của người dân chài xã hội mới.' },
    ]
  ),

  'S9NV-w15-quiz': L(
    'Bếp lửa (Bằng Việt)',
    'Bài thơ về tình bà cháu sâu nặng — kỉ niệm tuổi thơ ấm áp.',
    ['Phân tích hình tượng người bà.', 'Hiểu giá trị của những kỉ niệm gia đình.'],
    [
      { h: 'Tác giả' },
      { p: 'Bằng Việt (sinh 1941), nhà thơ thế hệ chống Mỹ.' },
      { h: 'Hình tượng người bà' },
      { ul: ['Tần tảo, hi sinh: thức khuya nhóm bếp lửa.', 'Yêu thương cháu: nuôi nấng trong khó khăn.', 'Biểu tượng của gia đình, quê hương.'] },
      { h: 'Bếp lửa' },
      { p: 'Biểu tượng kép: bếp lửa thực + bếp lửa tâm hồn (tình yêu thương, kỉ niệm).' },
      { note: 'Hồi tưởng và suy tưởng đan xen — đặc trưng thơ Bằng Việt.' },
    ],
    [
      { q: '"Một bếp lửa chờn vờn sương sớm" gợi gì?', a: 'Hình ảnh ấm áp, thân thương — gợi kỉ niệm về bà.' },
      { q: '"Ôi kì lạ và thiêng liêng — bếp lửa!" — câu cảm thán thể hiện gì?', a: 'Sự xúc động sâu sắc khi nhận ra ý nghĩa của bếp lửa = tình bà.' },
    ]
  ),

  'S9NV-w16-quiz': L(
    'Ánh trăng (Nguyễn Duy)',
    'Bài thơ nhắc nhở về thái độ "uống nước nhớ nguồn".',
    ['Hiểu thông điệp đạo lý của bài thơ.', 'Phân tích nghệ thuật ẩn dụ.'],
    [
      { h: 'Tác giả' },
      { p: 'Nguyễn Duy (sinh 1948), nhà thơ trưởng thành từ chiến tranh chống Mỹ.' },
      { h: 'Nội dung' },
      { ul: ['Hồi tưởng: thời chiến tranh sống gắn bó với thiên nhiên (trăng).', 'Hiện tại: cuộc sống thành phố lãng quên trăng.', 'Khoảnh khắc gặp lại: trăng hiện ra trong đêm mất điện — gợi nhớ.', 'Suy ngẫm: "Ánh trăng im phăng phắc / Đủ cho ta giật mình".'] },
      { note: 'Ẩn dụ: trăng = thiên nhiên, quá khứ, người đồng đội, lương tâm.' },
    ],
    [
      { q: 'Vì sao tác giả "giật mình"?', a: 'Nhận ra mình đã lãng quên quá khứ, lãng quên ân nghĩa.' },
      { q: 'Thông điệp của bài thơ?', a: 'Sống có thuỷ chung, "uống nước nhớ nguồn"; trân trọng quá khứ và ân nghĩa.' },
    ]
  ),

  'S9NV-w17-quiz': L(
    'Làng (Kim Lân)',
    'Truyện ngắn về tình yêu làng quê và lòng yêu nước của ông Hai.',
    ['Phân tích diễn biến tâm lý nhân vật ông Hai.', 'Hiểu tình yêu làng gắn liền với yêu nước.'],
    [
      { h: 'Tác giả' },
      { p: 'Kim Lân (1920-2007), nhà văn chuyên viết về nông thôn.' },
      { h: 'Diễn biến tâm trạng ông Hai' },
      { ul: ['Khi nghe tin làng theo Tây: đau khổ, tủi nhục, "cổ ông lão nghẹn ắng hẳn lại".', 'Lúc giằng xé: yêu làng nhưng phải bỏ làng vì kháng chiến.', 'Khi nghe tin cải chính: vui sướng tột cùng, "rạng rỡ hẳn lên".'] },
      { note: 'Tình yêu làng đã trở thành tình yêu nước — sự thống nhất tự nhiên.' },
    ],
    [
      { q: 'Vì sao ông Hai đau khổ khi nghe tin làng theo Tây?', a: 'Ông yêu làng tha thiết; tin đó như đánh đổ niềm tự hào của ông.' },
      { q: 'Ý nghĩa câu chuyện?', a: 'Khẳng định tình yêu làng quê hoà quyện với lòng yêu nước trong người nông dân kháng chiến.' },
    ]
  ),

  'S9NV-w18-quiz': L(
    'Ôn tập HK1 — Văn học + Nghị luận xã hội',
    'Tổng hợp kiến thức HK1, chuẩn bị làm bài nghị luận xã hội.',
    ['Hệ thống các tác phẩm đã học.', 'Nắm cấu trúc bài nghị luận xã hội.'],
    [
      { h: 'Các tác phẩm trọng tâm HK1' },
      { ul: ['Văn học cổ: Truyện Kiều (đoạn trích).', 'Văn học hiện đại: Đồng chí, Bài thơ về tiểu đội xe không kính, Đoàn thuyền đánh cá, Bếp lửa, Ánh trăng, Làng.', 'Văn nghị luận: Phong cách HCM, Đấu tranh cho hoà bình.'] },
      { h: 'Nghị luận xã hội' },
      { ul: ['Mở bài: giới thiệu vấn đề.', 'Thân bài: giải thích + bàn luận + dẫn chứng + bài học.', 'Kết bài: khẳng định ý kiến + liên hệ bản thân.'] },
      { note: 'Câu nghị luận xã hội thường chiếm 2-3 điểm trong đề thi vào 10.' },
    ],
    [
      { q: 'Cấu trúc bài NLXH 200 chữ?', a: 'Mở: giới thiệu; Thân: giải thích + bàn luận + dẫn chứng; Kết: bài học bản thân.' },
      { q: 'Cách nâng cao điểm bài viết?', a: 'Lập luận chặt chẽ, dẫn chứng thuyết phục, liên hệ thực tế, văn phong sáng rõ.' },
    ]
  ),

  'S9NV-w19-quiz': L(
    'Lặng lẽ Sa Pa (Nguyễn Thành Long)',
    'Truyện ngắn về vẻ đẹp người lao động thầm lặng — anh thanh niên trên đỉnh Yên Sơn.',
    ['Phân tích nhân vật anh thanh niên.', 'Hiểu chủ đề "Đẹp ở những điều bình dị".'],
    [
      { h: 'Tác giả' },
      { p: 'Nguyễn Thành Long (1925-1991), nhà văn thường viết về người lao động mới.' },
      { h: 'Anh thanh niên' },
      { ul: ['27 tuổi, làm khí tượng thuỷ văn trên đỉnh Yên Sơn (2600m).', 'Tận tuỵ với công việc, sống cô đơn nhưng tràn đầy yêu đời.', 'Khiêm tốn: nói về mình ít, ca ngợi người khác.', 'Yêu thiên nhiên + sách + nghệ thuật.'] },
      { note: 'Anh thanh niên không có tên — biểu tượng cho lớp người lao động mới.' },
    ],
    [
      { q: 'Vì sao tác giả không đặt tên cho nhân vật chính?', a: 'Để khẳng định anh là đại diện cho lớp người lao động thầm lặng, không cần danh tiếng.' },
      { q: 'Vẻ đẹp anh thanh niên?', a: 'Yêu nghề, có lý tưởng sống, sống đẹp giữa thiên nhiên cô đơn nhưng tâm hồn phong phú.' },
    ]
  ),

  'S9NV-w20-quiz': L(
    'Chiếc lược ngà (Nguyễn Quang Sáng)',
    'Truyện cảm động về tình cha con trong chiến tranh.',
    ['Phân tích tình cha con qua bé Thu và ông Sáu.', 'Hiểu giá trị của tình cảm gia đình.'],
    [
      { h: 'Tác giả' },
      { p: 'Nguyễn Quang Sáng (1932-2014), nhà văn Nam Bộ.' },
      { h: 'Tình cha con' },
      { ul: ['Bé Thu: bướng bỉnh không nhận ba vì vết sẹo trên mặt.', 'Khi nhận ra: gọi "Ba!" — khoảnh khắc đầy xúc động.', 'Ông Sáu: yêu con vô bờ, làm chiếc lược ngà cho con.', 'Cái chết của ông Sáu, chiếc lược chưa kịp trao — bi kịch chiến tranh.'] },
      { note: 'Câu chuyện tố cáo chiến tranh + ca ngợi tình cảm gia đình bất diệt.' },
    ],
    [
      { q: 'Vì sao bé Thu không nhận ba?', a: 'Vì vết sẹo trên mặt ba không giống ảnh chụp; tâm lý trẻ con cứng nhắc.' },
      { q: 'Ý nghĩa chiếc lược ngà?', a: 'Biểu tượng tình phụ tử thiêng liêng + lời hứa chưa được giữ — nỗi đau chiến tranh.' },
    ]
  ),

  'S9NV-w21-quiz': L(
    'Mùa xuân nho nhỏ (Thanh Hải)',
    'Bài thơ về khát vọng cống hiến và tình yêu đất nước.',
    ['Phân tích hình ảnh "mùa xuân nho nhỏ".', 'Hiểu lý tưởng sống cao đẹp.'],
    [
      { h: 'Tác giả' },
      { p: 'Thanh Hải (1930-1980), nhà thơ trong chiến tranh chống Mỹ.' },
      { h: 'Nội dung' },
      { ul: ['Cảm xúc trước mùa xuân thiên nhiên đẹp.', 'Cảm xúc trước mùa xuân đất nước đầy hi vọng.', 'Khát vọng cống hiến: "Mùa xuân nho nhỏ / Lặng lẽ dâng cho đời".'] },
      { note: 'Bài thơ được sáng tác trong những ngày cuối đời của tác giả — càng xúc động.' },
    ],
    [
      { q: '"Mùa xuân nho nhỏ" ẩn dụ điều gì?', a: 'Cuộc đời cá nhân nhỏ bé góp vào mùa xuân lớn của đất nước.' },
      { q: 'Ý nghĩa "Lặng lẽ dâng cho đời"?', a: 'Khát vọng cống hiến âm thầm, không cần danh tiếng.' },
    ]
  ),

  'S9NV-w22-quiz': L(
    'Viếng lăng Bác (Viễn Phương)',
    'Bài thơ thể hiện tấm lòng thành kính, biết ơn Bác Hồ.',
    ['Phân tích cảm xúc nhân vật trữ tình.', 'Hiểu hình ảnh "hàng tre" tượng trưng.'],
    [
      { h: 'Tác giả' },
      { p: 'Viễn Phương (1928-2005), nhà thơ Nam Bộ.' },
      { h: 'Cảm xúc trong bài' },
      { ul: ['Từ ngoài lăng: hàng tre xanh — biểu tượng dân tộc.', 'Vào trong lăng: hình ảnh Bác trong "vầng trăng sáng dịu hiền".', 'Lúc về: ước nguyện "Muốn làm con chim hót quanh lăng Bác".'] },
      { note: 'Hình ảnh thơ trang trọng, thành kính, không sướt mướt.' },
    ],
    [
      { q: '"Hàng tre xanh xanh Việt Nam" tượng trưng gì?', a: 'Sức sống, sự kiên cường, đoàn kết của dân tộc Việt Nam.' },
      { q: 'Cảm xúc cuối bài thể hiện gì?', a: 'Ước nguyện tha thiết được ở bên Bác — sự gắn bó với lý tưởng cách mạng.' },
    ]
  ),

  'S9NV-w23-quiz': L(
    'Sang thu (Hữu Thỉnh)',
    'Bài thơ tinh tế về khoảnh khắc giao mùa từ hạ sang thu.',
    ['Cảm nhận vẻ đẹp tinh tế của thiên nhiên.', 'Phân tích triết lý cuối bài.'],
    [
      { h: 'Tác giả' },
      { p: 'Hữu Thỉnh (sinh 1942), nhà thơ chiến tranh và sau đó.' },
      { h: 'Nội dung' },
      { ul: ['Khổ 1: bất ngờ nhận ra thu về qua hương ổi, gió se, sương mù.', 'Khổ 2: vẻ đẹp mơ hồ của giao mùa.', 'Khổ 3: triết lý "Sấm cũng bớt bất ngờ / Trên hàng cây đứng tuổi".'] },
      { note: 'Câu cuối có ý nghĩa kép: tự nhiên + cuộc đời con người trải nghiệm.' },
    ],
    [
      { q: '"Có đám mây mùa hạ / Vắt nửa mình sang thu" gợi gì?', a: 'Khoảnh khắc giao mùa độc đáo — vừa hạ vừa thu.' },
      { q: 'Triết lý cuối bài?', a: 'Con người trưởng thành sẽ không còn "giật mình" trước sóng gió cuộc đời.' },
    ]
  ),

  'S9NV-w24-quiz': L(
    'Nói với con (Y Phương)',
    'Lời cha dạy con về cội nguồn dân tộc và niềm tự hào quê hương.',
    ['Hiểu lời cha dặn con.', 'Phân tích hình ảnh "người đồng mình".'],
    [
      { h: 'Tác giả' },
      { p: 'Y Phương (1948-2022), nhà thơ dân tộc Tày.' },
      { h: 'Nội dung' },
      { ul: ['Cội nguồn sinh dưỡng: con lớn lên trong tình thương cha mẹ.', 'Quê hương "người đồng mình": vất vả nhưng nghĩa tình, kiên cường.', 'Lời dặn: con phải tự hào, sống có nhân cách như "người đồng mình".'] },
      { note: 'Bài thơ giàu chất dân tộc, hình ảnh mộc mạc nhưng sâu lắng.' },
    ],
    [
      { q: 'Hình ảnh "Người đồng mình" tượng trưng gì?', a: 'Người dân quê hương — gần gũi, mộc mạc, kiên cường, giàu tình nghĩa.' },
      { q: 'Lời cha muốn con như thế nào?', a: 'Sống có cội nguồn, tự hào về quê hương dân tộc, kiên cường vượt khó.' },
    ]
  ),

  'S9NV-w25-quiz': L(
    'Bến quê (Nguyễn Minh Châu)',
    'Truyện ngắn triết lý về cuộc đời, tình yêu quê hương.',
    ['Phân tích nhân vật Nhĩ.', 'Hiểu triết lý "quê hương trong tầm tay mà không tới".'],
    [
      { h: 'Tác giả' },
      { p: 'Nguyễn Minh Châu (1930-1989), nhà văn "đổi mới" văn xuôi VN.' },
      { h: 'Nhân vật Nhĩ' },
      { ul: ['Bị bệnh nặng, nằm liệt giường.', 'Lần đầu nhìn thấy vẻ đẹp của bãi bồi bên kia sông — quê hương ngay trước mặt.', 'Khát khao sang bên kia sông mà không thể.', 'Nhận ra triết lý: "Con người ta trên đường đời thật khó tránh được những cái điều vòng vèo, chùng chình".'] },
      { note: 'Truyện gợi suy ngẫm về cách sống của mỗi người.' },
    ],
    [
      { q: 'Tại sao Nhĩ khao khát sang bãi bồi?', a: 'Đó là vẻ đẹp giản dị của quê hương mà cả đời anh chưa biết khám phá.' },
      { q: 'Triết lý của truyện?', a: 'Đừng để hạnh phúc trôi qua trong tầm tay; trân trọng những điều gần gũi xung quanh.' },
    ]
  ),

  'S9NV-w26-quiz': L(
    'Những ngôi sao xa xôi (Lê Minh Khuê)',
    'Truyện ngắn về 3 cô gái thanh niên xung phong Trường Sơn.',
    ['Phân tích nhân vật Phương Định.', 'Hiểu vẻ đẹp thế hệ thanh niên kháng chiến.'],
    [
      { h: 'Tác giả' },
      { p: 'Lê Minh Khuê (sinh 1949), nhà văn nữ trưởng thành từ Trường Sơn.' },
      { h: 'Nhân vật Phương Định' },
      { ul: ['Cô gái Hà Nội, hồn nhiên, mơ mộng.', 'Dũng cảm trong công việc phá bom.', 'Yêu thương đồng đội, có nét nữ tính.', 'Tinh thần lạc quan giữa chiến trường.'] },
      { note: 'Tiêu đề "Những ngôi sao xa xôi" — biểu tượng cho thanh niên VN ở Trường Sơn.' },
    ],
    [
      { q: 'Công việc của 3 cô gái?', a: 'Phá bom mở đường — công việc nguy hiểm trên tuyến Trường Sơn.' },
      { q: 'Vẻ đẹp Phương Định?', a: 'Vừa hồn nhiên trẻ trung, vừa dũng cảm — tiêu biểu cho thanh niên kháng chiến.' },
    ]
  ),

  'S9NV-w27-quiz': L(
    'Tổng kết về ngữ pháp',
    'Hệ thống các kiến thức ngữ pháp đã học để phục vụ thi.',
    ['Ôn các loại câu, các thành phần câu.', 'Nắm các biện pháp tu từ.'],
    [
      { h: 'Câu và thành phần câu' },
      { ul: ['Câu đơn, câu ghép.', 'Thành phần chính: chủ ngữ, vị ngữ.', 'Thành phần phụ: trạng ngữ, định ngữ, bổ ngữ.', 'Khởi ngữ, các thành phần biệt lập.'] },
      { h: 'Biện pháp tu từ' },
      { ul: ['So sánh, ẩn dụ, hoán dụ, nhân hoá.', 'Điệp ngữ, đảo ngữ, phép đối.', 'Nói quá, nói giảm nói tránh.'] },
      { note: 'Đề thi thường có 1 câu hỏi về biện pháp tu từ trong văn bản.' },
    ],
    [
      { q: 'Khởi ngữ là gì?', a: 'Thành phần đứng đầu câu nêu chủ đề: "Quyển sách này, tôi đã đọc rồi".' },
      { q: 'Phân biệt ẩn dụ và hoán dụ?', a: 'Ẩn dụ: gọi tên A bằng tên B (tương đồng). Hoán dụ: gọi tên A bằng tên B (tương cận, liền kề).' },
    ]
  ),

  'S9NV-w28-quiz': L(
    'Nghị luận về tác phẩm văn học',
    'Cấu trúc và kỹ năng làm bài nghị luận văn học — câu chiếm điểm cao trong đề.',
    ['Nắm cấu trúc bài nghị luận văn học.', 'Phân tích nhân vật, hình tượng, đoạn trích.'],
    [
      { h: 'Cấu trúc bài NLVH' },
      { ul: ['Mở bài: giới thiệu tác giả, tác phẩm, vấn đề nghị luận.', 'Thân bài: phân tích theo luận điểm, dẫn chứng từ văn bản.', 'Kết bài: khẳng định ý nghĩa + cảm nhận bản thân.'] },
      { h: 'Các dạng đề thường gặp' },
      { ul: ['Phân tích nhân vật.', 'Cảm nhận đoạn thơ/đoạn văn.', 'Phân tích giá trị nội dung + nghệ thuật.'] },
      { note: 'Luôn bám sát văn bản, trích dẫn câu/đoạn cụ thể.' },
    ],
    [
      { q: 'Bí quyết làm bài NLVH tốt?', a: 'Đọc kỹ đề, lập dàn ý, trích dẫn chính xác, phân tích cụ thể, có liên hệ.' },
      { q: 'Cách tránh sa vào kể lể?', a: 'Mỗi đoạn thân bài cần có luận điểm rõ ràng + phân tích nghệ thuật, không chỉ kể nội dung.' },
    ]
  ),

  'S9NV-w29-quiz': L(
    'Nghị luận xã hội — Bàn về tư tưởng đạo lý',
    'Kỹ năng làm bài nghị luận về một tư tưởng đạo lý.',
    ['Cấu trúc bài bàn về tư tưởng đạo lý.', 'Vận dụng vào các đề cụ thể.'],
    [
      { h: 'Cấu trúc' },
      { ul: ['Giải thích: tư tưởng/đạo lý đó là gì?', 'Bàn luận: vì sao đúng/sai? biểu hiện? ý nghĩa?', 'Phản biện: mặt trái, hạn chế?', 'Bài học cho bản thân.'] },
      { h: 'Các đề mẫu' },
      { ul: ['"Có công mài sắt, có ngày nên kim".', 'Lòng biết ơn.', 'Tinh thần tự học.', 'Ý chí vượt khó.'] },
      { note: 'Cần dẫn chứng cụ thể, kết hợp lý lẽ và liên hệ thực tế.' },
    ],
    [
      { q: 'Đề: Suy nghĩ về lòng biết ơn.', a: 'Giải thích: biết ơn là gì. Biểu hiện: hành động cụ thể. Ý nghĩa: nối kết quá khứ — hiện tại. Phản biện: vô ơn. Bài học cá nhân.' },
      { q: 'Dẫn chứng nên?', a: 'Cụ thể, tiêu biểu, đa dạng (lịch sử, xã hội, cá nhân).' },
    ]
  ),

  'S9NV-w30-quiz': L(
    'Nghị luận xã hội — Bàn về hiện tượng đời sống',
    'Kỹ năng làm bài về hiện tượng xã hội — bạo lực học đường, MXH, nghiện game...',
    ['Phân tích hiện tượng từ nhiều mặt.', 'Đưa ra giải pháp khả thi.'],
    [
      { h: 'Cấu trúc' },
      { ul: ['Mở bài: giới thiệu hiện tượng.', 'Thực trạng: hiện tượng đang diễn ra như thế nào?', 'Nguyên nhân: vì sao?', 'Hậu quả: ảnh hưởng đến cá nhân/xã hội.', 'Giải pháp: cá nhân, gia đình, xã hội.', 'Kết bài: bài học bản thân.'] },
      { note: 'Hiện tượng nóng: bạo lực học đường, cyberbullying, nghiện MXH, sống ảo.' },
    ],
    [
      { q: 'Đề: Hiện tượng bạo lực học đường. Phân tích nguyên nhân?', a: 'Tâm lý tuổi mới lớn, gia đình thiếu quan tâm, ảnh hưởng phim ảnh-game bạo lực, môi trường học đường.' },
      { q: 'Giải pháp?', a: 'Giáo dục đạo đức + kỹ năng sống; gia đình quan tâm; nhà trường phối hợp; xã hội tạo môi trường lành mạnh.' },
    ]
  ),

  'S9NV-w31-quiz': L(
    'Luyện đề ôn thi vào 10 — Bộ 1',
    'Bắt đầu giai đoạn luyện đề tổng hợp.',
    ['Làm đề mẫu theo cấu trúc thi.', 'Phân tích đáp án và rút kinh nghiệm.'],
    [
      { h: 'Cấu trúc đề thi Văn vào 10' },
      { ul: ['Phần I (4-5đ): đọc hiểu + nghị luận xã hội (đoạn 200 chữ).', 'Phần II (5-6đ): nghị luận văn học (bài hoàn chỉnh).'] },
      { note: 'Phân bổ thời gian: 120 phút cho cả đề; phần I khoảng 45 phút, phần II khoảng 75 phút.' },
    ],
    [
      { q: 'Đoạn 200 chữ khoảng?', a: '15-20 dòng, đầy đủ mở-thân-kết, tập trung 1 ý chính.' },
      { q: 'Bài NLVH cần?', a: '4-6 trang, có dàn ý rõ, dẫn chứng phong phú, phân tích sâu.' },
    ]
  ),

  'S9NV-w32-quiz': L(
    'Luyện đề ôn thi vào 10 — Bộ 2',
    'Tiếp tục luyện đề, tập trung kỹ năng đọc hiểu.',
    ['Kỹ năng làm bài đọc hiểu.', 'Trả lời câu hỏi ngắn gọn, chính xác.'],
    [
      { h: 'Kỹ năng đọc hiểu' },
      { ul: ['Đọc kỹ văn bản 2 lần.', 'Gạch chân từ khoá, ý chính.', 'Trả lời ngắn gọn, đúng trọng tâm.', 'Trích dẫn câu/cụm từ làm dẫn chứng.'] },
      { h: 'Các dạng câu hỏi đọc hiểu' },
      { ul: ['Xác định thể loại, phương thức biểu đạt.', 'Tìm biện pháp tu từ + phân tích tác dụng.', 'Nêu nội dung chính.', 'Liên hệ bản thân.'] },
      { note: 'Không viết lan man; mỗi câu trả lời 2-4 câu là đủ.' },
    ],
    [
      { q: 'Phương thức biểu đạt phổ biến?', a: 'Tự sự, miêu tả, biểu cảm, nghị luận, thuyết minh, hành chính-công vụ.' },
      { q: 'Khi phân tích tác dụng biện pháp tu từ?', a: 'Nêu biện pháp + chỉ ra ở đâu + phân tích ý nghĩa nội dung + giá trị nghệ thuật.' },
    ]
  ),

  'S9NV-w33-quiz': L(
    'Luyện đề ôn thi vào 10 — Bộ 3 + Nghị luận tổng hợp',
    'Hoàn thiện kỹ năng làm bài.',
    ['Làm đề tổng hợp.', 'Đánh giá năng lực hiện tại.'],
    [
      { h: 'Tổng hợp kỹ năng' },
      { ul: ['Đọc hiểu: ngắn gọn, chính xác.', 'NLXH: cấu trúc rõ, dẫn chứng thực tế.', 'NLVH: bám văn bản, phân tích sâu.'] },
      { note: 'Tự đánh giá: nắm chắc tác phẩm nào? còn yếu phần nào? cần luyện thêm gì?' },
    ],
    [
      { q: 'Sai lầm thường gặp khi làm văn?', a: 'Sa kể lể; thiếu dẫn chứng; viết lan man; bỏ phần phản biện trong NLXH.' },
      { q: 'Cách trình bày tốt?', a: 'Chữ rõ ràng, phân đoạn rõ, gạch đầu dòng khi cần, không viết 1 đoạn dài.' },
    ]
  ),

  'S9NV-w34-quiz': L(
    'Ôn tập tổng hợp — Hệ thống tác phẩm',
    'Hệ thống lại toàn bộ tác phẩm + tác giả + chủ đề.',
    ['Lập bảng tổng hợp tác phẩm.', 'Nắm các chủ đề lớn xuyên suốt.'],
    [
      { h: 'Bảng tổng hợp' },
      { p: 'Mỗi tác phẩm cần nắm: tác giả + năm sáng tác + thể loại + nhân vật/hình tượng chính + chủ đề + nghệ thuật.' },
      { h: 'Các chủ đề lớn' },
      { ul: ['Tình yêu quê hương đất nước.', 'Tình cảm gia đình, tình mẫu tử, phụ tử, bà cháu.', 'Người lính, người lao động.', 'Khát vọng cống hiến, lý tưởng sống.'] },
      { note: 'Khi gặp đề "phân tích chủ đề X qua các tác phẩm" — hệ thống này rất hữu ích.' },
    ],
    [
      { q: 'Tác phẩm về tình bà cháu?', a: 'Bếp lửa (Bằng Việt).' },
      { q: 'Tác phẩm về người lao động thầm lặng?', a: 'Lặng lẽ Sa Pa (Nguyễn Thành Long).' },
    ]
  ),

  'S9NV-w35-quiz': L(
    'Đề ôn thi vào 10 — Tổng kết',
    'Đề thi thử cuối cùng và chuẩn bị tinh thần.',
    ['Làm đề thi thử toàn diện.', 'Chuẩn bị tâm lý cho kỳ thi.'],
    [
      { h: 'Chuẩn bị tâm lý' },
      { ul: ['Ngủ đủ giấc trước thi.', 'Đến phòng thi sớm 30 phút.', 'Đọc kỹ đề trước khi viết.', 'Bình tĩnh, tự tin.'] },
      { note: 'Văn không có công thức cứng — quan trọng là cảm xúc chân thật và lập luận chặt chẽ. Chúc các em đạt kết quả tốt!' },
    ],
    [
      { q: 'Lời khuyên cho phòng thi?', a: 'Đọc đề kỹ, lập dàn ý nháp, viết sạch đẹp, soát lại trước khi nộp.' },
      { q: 'Nếu quên tác phẩm thì sao?', a: 'Bình tĩnh, suy nghĩ liên tưởng đến tác phẩm cùng chủ đề. Không nên hoảng loạn.' },
    ]
  ),
};
