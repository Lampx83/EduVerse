// ============================================================
// Lớp 8 · LỊCH SỬ - ĐỊA LÝ — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Key TRÙNG id quiz: "S8LSDL-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8LSDL_LESSONS = {
  'S8LSDL-w01-quiz': L(
    'LS — Cách mạng tư sản Anh thế kỉ XVII',
    'Bắt đầu LS lớp 8 với cách mạng tư sản Anh — cuộc cách mạng tư sản đầu tiên thế giới.',
    ['Hiểu nguyên nhân CMTS Anh.', 'Diễn biến chính.', 'Ý nghĩa lịch sử.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Thế kỷ XVII, Anh là nước có nền kinh tế tư bản phát triển nhất châu Âu. Mâu thuẫn giữa giai cấp tư sản (cùng quý tộc mới) và chế độ phong kiến chuyên chế Stuart ngày càng gay gắt.' },
      { h: 'Diễn biến' },
      { ul: ['1640: Quốc hội triệu tập — mở đầu cách mạng.', '1642-1649: Nội chiến giữa Quốc hội và Vua.', '1649: Vua Charles I bị xử tử, thành lập nền cộng hoà.', '1660: Quân chủ phục hồi.', '1688: "Cách mạng vinh quang" — thiết lập quân chủ lập hiến.'] },
      { h: 'Ý nghĩa' },
      { p: 'Mở đầu thời kỳ tư sản hiện đại. Mở đường cho chủ nghĩa tư bản phát triển. Hạn chế: chưa giải quyết triệt để vấn đề ruộng đất cho nông dân.' },
    ],
    [
      { q: 'CMTS Anh diễn ra thế kỷ nào?', a: 'Thế kỷ XVII (1640-1688).' },
      { q: 'Kết quả CM Anh?', a: 'Thiết lập chế độ quân chủ lập hiến — vua chỉ là biểu tượng, Quốc hội nắm quyền.' },
    ]
  ),

  'S8LSDL-w02-quiz': L(
    'LS — Chiến tranh giành độc lập Bắc Mỹ (1775–1783)',
    '13 thuộc địa Bắc Mỹ giành độc lập từ Anh, thành lập Hợp chúng quốc Hoa Kỳ.',
    ['Nguyên nhân chiến tranh.', 'Diễn biến và Tuyên ngôn Độc lập.', 'Ý nghĩa lịch sử.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Anh có 13 thuộc địa ở Bắc Mỹ. Mâu thuẫn ngày càng gay gắt do Anh tăng thuế, hạn chế phát triển kinh tế thuộc địa.' },
      { h: 'Diễn biến' },
      { ul: ['1773: Sự kiện "Boston Tea Party" — đổ chè xuống biển phản đối thuế.', '1775: Chiến tranh bùng nổ.', '4/7/1776: Tuyên ngôn Độc lập do Thomas Jefferson soạn thảo — ra đời nước Mỹ.', '1783: Anh công nhận độc lập của Mỹ.'] },
      { h: 'Ý nghĩa' },
      { p: 'Cách mạng tư sản đầu tiên thắng lợi ở thuộc địa. Lập nên nước cộng hoà tổng thống đầu tiên. Tuyên ngôn Độc lập có ảnh hưởng lớn đến tư tưởng dân chủ thế giới.' },
    ],
    [
      { q: 'Tuyên ngôn Độc lập Mỹ ngày nào?', a: '4/7/1776.' },
      { q: 'Tổng thống đầu tiên của Mỹ?', a: 'George Washington (1789).' },
    ]
  ),

  'S8LSDL-w03-quiz': L(
    'LS — Cách mạng tư sản Pháp 1789',
    'CMTS Pháp 1789 — cuộc cách mạng tư sản triệt để và có ảnh hưởng lớn nhất.',
    ['Nguyên nhân CM Pháp.', 'Diễn biến chính.', 'Ý nghĩa lịch sử thế giới.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Pháp cuối XVIII: chế độ phong kiến khủng hoảng, ngân khố trống rỗng. Xã hội chia 3 đẳng cấp: quý tộc, tăng lữ (đặc quyền), thường dân (chiếm 90% nhưng phải đóng thuế).' },
      { h: 'Diễn biến' },
      { ul: ['14/7/1789: Phá ngục Bastille — mở đầu cách mạng.', '8/1789: Tuyên ngôn Nhân quyền và Dân quyền.', '1792: Pháp trở thành cộng hoà.', '1793: Vua Louis XVI bị xử tử. Chuyên chính Gia-cô-banh đạt đỉnh cao.', '1799: Napoléon đảo chính.'] },
      { h: 'Ý nghĩa' },
      { p: '"Cách mạng vĩ đại nhất của giai cấp tư sản" — Lê-nin. Lật đổ chế độ phong kiến, tuyên bố quyền tự do, bình đẳng. Ảnh hưởng to lớn đến phong trào dân chủ thế giới.' },
    ],
    [
      { q: 'Ngày Quốc khánh Pháp là?', a: '14/7 (kỷ niệm phá ngục Bastille 1789).' },
      { q: 'Slogan của CM Pháp?', a: '"Tự do - Bình đẳng - Bác ái" (Liberté, Égalité, Fraternité).' },
    ]
  ),

  'S8LSDL-w04-quiz': L(
    'LS — Cách mạng công nghiệp Anh',
    'Cách mạng công nghiệp khởi đầu ở Anh thế kỷ XVIII — biến đổi cách sản xuất.',
    ['Nguyên nhân.', 'Các phát minh chính.', 'Hậu quả xã hội.'],
    [
      { h: 'Nguyên nhân khởi đầu ở Anh' },
      { ul: ['Tích luỹ vốn lớn từ thuộc địa.', 'Tài nguyên dồi dào (than, sắt).', 'Cách mạng tư sản giải phóng sức sản xuất.', 'Nhân công tự do từ nông dân mất ruộng.'] },
      { h: 'Các phát minh quan trọng' },
      { ul: ['1764: Máy kéo sợi Jenny.', '1769: Máy hơi nước James Watt.', '1814: Đầu máy xe lửa Stephenson.', '1825: Đường sắt đầu tiên.'] },
      { h: 'Hậu quả' },
      { ul: ['Năng suất lao động tăng vọt.', 'Giai cấp tư sản và công nhân hình thành.', 'Đô thị hoá nhanh.', 'Mâu thuẫn giai cấp gay gắt.'] },
    ],
    [
      { q: 'Phát minh nào đặc trưng cho CMCN?', a: 'Máy hơi nước (James Watt, 1769) — biểu tượng của CMCN.' },
      { q: 'Đầu máy xe lửa do ai phát minh?', a: 'George Stephenson (1814).' },
    ]
  ),

  'S8LSDL-w05-quiz': L(
    'LS — Công xã Pari 1871',
    'Công xã Pari — nhà nước vô sản đầu tiên thế giới.',
    ['Hoàn cảnh ra đời.', 'Chính sách công xã.', 'Ý nghĩa lịch sử.'],
    [
      { h: 'Hoàn cảnh' },
      { p: 'Sau thất bại Pháp trong chiến tranh Pháp-Phổ (1870-1871), nhân dân Pari nổi dậy. 18/3/1871: Công xã Pari thành lập — nhà nước kiểu mới của giai cấp công nhân.' },
      { h: 'Chính sách' },
      { ul: ['Tách giáo hội khỏi nhà nước.', 'Quốc hữu hoá xí nghiệp bỏ trốn.', 'Giáo dục miễn phí, thế tục.', 'Lương cán bộ ngang công nhân.'] },
      { h: 'Kết cục' },
      { p: 'Công xã chỉ tồn tại 72 ngày (18/3 - 28/5/1871) rồi bị Quân đội Versailles dập tắt đẫm máu. Nhưng để lại bài học lớn về nhà nước vô sản.' },
    ],
    [
      { q: 'Công xã Pari kéo dài bao lâu?', a: '72 ngày (18/3 - 28/5/1871).' },
      { q: 'Ý nghĩa Công xã Pari?', a: 'Nhà nước vô sản đầu tiên thế giới — bài học cho phong trào CN sau này.' },
    ]
  ),

  'S8LSDL-w06-quiz': L(
    'LS — Quốc tế thứ nhất và Mác – Ăng-ghen',
    'Mác và Ăng-ghen sáng lập Quốc tế Cộng sản và Tuyên ngôn của Đảng Cộng sản.',
    ['Karl Marx và F. Engels.', 'Tuyên ngôn Đảng Cộng sản.', 'Quốc tế thứ nhất.'],
    [
      { h: 'Karl Marx (1818-1883) và Friedrich Engels (1820-1895)' },
      { p: 'Hai nhà tư tưởng vĩ đại người Đức, sáng lập học thuyết chủ nghĩa cộng sản khoa học (chủ nghĩa Mác).' },
      { h: 'Tuyên ngôn Đảng Cộng sản (1848)' },
      { p: 'Mác và Ăng-ghen viết, công bố ở London. Khẩu hiệu nổi tiếng: "Vô sản tất cả các nước, đoàn kết lại!"' },
      { h: 'Quốc tế thứ nhất (1864-1876)' },
      { p: 'Liên minh quốc tế của các tổ chức công nhân, do Mác chỉ đạo. Mục đích: đoàn kết phong trào công nhân các nước.' },
    ],
    [
      { q: 'Tuyên ngôn Đảng Cộng sản công bố năm?', a: '1848.' },
      { q: 'Khẩu hiệu nổi tiếng?', a: '"Vô sản tất cả các nước, đoàn kết lại!"' },
    ]
  ),

  'S8LSDL-w07-quiz': L(
    'LS — Các nước châu Á cuối XIX – đầu XX',
    'Các nước châu Á đối mặt với chủ nghĩa thực dân phương Tây.',
    ['Tình hình chung châu Á.', 'Trung Quốc bị xâm chiếm.', 'Nhật Bản canh tân Minh Trị.'],
    [
      { h: 'Tình hình chung' },
      { p: 'Cuối XIX, hầu hết châu Á (trừ Nhật) trở thành thuộc địa/nửa thuộc địa của các nước phương Tây.' },
      { h: 'Trung Quốc' },
      { p: 'Chiến tranh nha phiến (1840-1842) → Anh chiếm Hong Kong. Các nước phương Tây chia nhau quyền lợi ở TQ → TQ thành nửa thuộc địa.' },
      { h: 'Nhật Bản — Minh Trị Duy Tân (1868)' },
      { p: 'Vua Minh Trị (Meiji) cải cách triệt để: bỏ chế độ Mạc phủ, học theo phương Tây về kỹ thuật, giáo dục, quân đội. Nhật trở thành nước tư bản hùng mạnh duy nhất ở châu Á.' },
    ],
    [
      { q: 'Vì sao Nhật không bị phương Tây xâm chiếm?', a: 'Vì Nhật canh tân Minh Trị thành công, trở thành nước tư bản mạnh.' },
      { q: 'Trung Quốc trở thành?', a: 'Nửa thuộc địa — bị các nước phương Tây phân chia ảnh hưởng.' },
    ]
  ),

  'S8LSDL-w08-quiz': L(
    'LS — Phong trào giải phóng dân tộc Đông Nam Á',
    'Đông Nam Á cuối XIX-đầu XX dậy lên phong trào chống thực dân.',
    ['Tình hình các nước ĐNÁ.', 'Các phong trào tiêu biểu.', 'Đặc điểm chung.'],
    [
      { h: 'Tình hình' },
      { p: 'Cuối XIX, các nước ĐNÁ trở thành thuộc địa: Anh chiếm Mã Lai, Miến Điện; Pháp chiếm Đông Dương; Hà Lan chiếm Indonesia… Chỉ Thái Lan giữ độc lập (do khôn khéo về ngoại giao).' },
      { h: 'Các phong trào tiêu biểu' },
      { ul: ['Indonesia: phong trào dân tộc do Sarekat Islam dẫn đầu.', 'Philippines: cách mạng 1896 chống Tây Ban Nha, sau đó chống Mỹ.', 'Việt Nam: Cần Vương (1885-1896), Đông Du, Đông Kinh Nghĩa Thục.'] },
      { h: 'Đặc điểm' },
      { p: 'Hầu hết tự phát, do trí thức/quý tộc lãnh đạo; thất bại do thiếu giai cấp tiên phong và đường lối đúng.' },
    ],
    [
      { q: 'Nước ĐNÁ duy nhất không trở thành thuộc địa?', a: 'Thái Lan (Xiêm).' },
      { q: 'Pháp chiếm phần nào ĐNÁ?', a: 'Đông Dương (Việt Nam, Lào, Campuchia).' },
    ]
  ),

  'S8LSDL-w09-quiz': L(
    'LS — Việt Nam: Pháp xâm lược (1858)',
    'Pháp bắt đầu xâm lược Việt Nam năm 1858 tại Đà Nẵng.',
    ['Bối cảnh và nguyên cớ.', 'Diễn biến trận Đà Nẵng.', 'Nguyễn Tri Phương kháng chiến.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Giữa XIX, Pháp đẩy mạnh xâm lược thuộc địa. Việt Nam (triều Nguyễn) đóng cửa với phương Tây, cấm đạo Thiên Chúa — Pháp lấy đó làm cớ.' },
      { h: 'Diễn biến' },
      { ul: ['1/9/1858: Pháp tấn công Đà Nẵng cùng Tây Ban Nha.', 'Nguyễn Tri Phương đắp luỹ phòng thủ, áp dụng "vườn không nhà trống".', 'Pháp sa lầy ở Đà Nẵng, bệnh tật → rút quân tấn công Sài Gòn (2/1859).'] },
      { h: 'Ý nghĩa' },
      { p: 'Bắt đầu thời kỳ Pháp xâm lược VN. Trận Đà Nẵng cho thấy quân dân VN có thể chống lại — nhưng triều đình thiếu quyết tâm chống đến cùng.' },
    ],
    [
      { q: 'Pháp đánh Đà Nẵng năm?', a: '1858 (1/9/1858).' },
      { q: 'Tướng nào chỉ huy chống Pháp ở Đà Nẵng?', a: 'Nguyễn Tri Phương.' },
    ]
  ),

  'S8LSDL-w10-quiz': L(
    'LS — Việt Nam: Hiệp ước Nhâm Tuất 1862, mất Nam Kì',
    'Pháp đánh Sài Gòn, triều Nguyễn ký Hiệp ước Nhâm Tuất nhường Nam Kì.',
    ['Diễn biến trận Sài Gòn.', 'Hiệp ước Nhâm Tuất 1862.', 'Phong trào nhân dân tự phát.'],
    [
      { h: 'Diễn biến' },
      { p: '2/1859: Pháp đánh Sài Gòn, chiếm thành. Triều Nguyễn không tận dụng cơ hội phản công khi Pháp suy yếu.' },
      { h: 'Hiệp ước Nhâm Tuất 5/6/1862' },
      { p: 'Triều Nguyễn nhường 3 tỉnh miền Đông Nam Kì (Biên Hoà, Gia Định, Định Tường) và đảo Côn Lôn cho Pháp. Phải bồi thường 4 triệu USD.' },
      { h: 'Phong trào nhân dân' },
      { p: 'Trong khi triều đình nhân nhượng, nhân dân tự phát kháng chiến: Trương Định ở Gò Công, Nguyễn Trung Trực đánh đắm tàu Pháp ở Vàm Cỏ Đông…' },
    ],
    [
      { q: 'Hiệp ước Nhâm Tuất ký năm?', a: '5/6/1862.' },
      { q: 'Người anh hùng đốt tàu Pháp Espérance?', a: 'Nguyễn Trung Trực.' },
    ]
  ),

  'S8LSDL-w11-quiz': L(
    'LS — Pháp đánh Bắc Kì lần I và II (1873, 1882)',
    'Pháp mở rộng xâm lược ra Bắc Kì — Hà Nội thất thủ 2 lần.',
    ['Pháp đánh Hà Nội lần 1.', 'Pháp đánh Hà Nội lần 2.', 'Hai tổng đốc hy sinh.'],
    [
      { h: 'Lần I (1873)' },
      { p: 'Francis Garnier đem ~180 lính tấn công Hà Nội. Nguyễn Tri Phương chỉ huy bảo vệ, bị thương nặng, tuyệt thực mà mất.' },
      { h: 'Lần II (1882)' },
      { p: 'Henri Rivière chỉ huy. Tổng đốc Hoàng Diệu giữ thành, khi thành thất thủ đã thắt cổ tự sát giữ khí tiết.' },
      { h: 'Hai tướng anh hùng' },
      { p: 'Nguyễn Tri Phương và Hoàng Diệu — biểu tượng tiết tháo, không khuất phục, dù triều đình đầu hàng.' },
    ],
    [
      { q: 'Pháp đánh HN lần 1 năm?', a: '1873.' },
      { q: 'Tổng đốc HN trong cả 2 lần?', a: 'Lần 1: Nguyễn Tri Phương. Lần 2: Hoàng Diệu.' },
    ]
  ),

  'S8LSDL-w12-quiz': L(
    'LS — Hiệp ước Hác-măng (1883) và Pa-tơ-nốt (1884)',
    'Triều Nguyễn ký 2 hiệp ước cuối cùng — VN trở thành thuộc địa Pháp.',
    ['Hiệp ước Hác-măng 1883.', 'Hiệp ước Pa-tơ-nốt 1884.', 'Việt Nam trở thành thuộc địa.'],
    [
      { h: 'Hiệp ước Hác-măng 25/8/1883' },
      { p: 'Triều Nguyễn công nhận VN gồm 3 kì: Bắc Kì (đất bảo hộ), Trung Kì (do triều đình quản lý dưới sự chỉ đạo Pháp), Nam Kì (đất thuộc địa).' },
      { h: 'Hiệp ước Pa-tơ-nốt 6/6/1884' },
      { p: 'Pháp điều chỉnh nhẹ một số điều có lợi cho triều đình (mở rộng Trung Kì) để xoa dịu. Bản chất: VN chính thức trở thành thuộc địa Pháp.' },
      { h: 'Hậu quả' },
      { p: 'VN mất hoàn toàn độc lập. Bắt đầu thời kỳ thuộc Pháp dài 61 năm (1884-1945).' },
    ],
    [
      { q: 'Hiệp ước nào chính thức biến VN thành thuộc địa?', a: 'Pa-tơ-nốt 1884.' },
      { q: 'VN bị Pháp đô hộ bao nhiêu năm?', a: '61 năm (1884-1945).' },
    ]
  ),

  'S8LSDL-w13-quiz': L(
    'LS — Phong trào Cần Vương (1885–1896)',
    'Cần Vương — phong trào yêu nước phong kiến cuối cùng của VN.',
    ['Hoàn cảnh.', 'Các cuộc khởi nghĩa tiêu biểu.', 'Ý nghĩa lịch sử.'],
    [
      { h: 'Hoàn cảnh' },
      { p: 'Sau Hiệp ước Pa-tơ-nốt, phái chủ chiến do Tôn Thất Thuyết đứng đầu chuẩn bị khởi nghĩa. 7/1885: thất bại ở Huế, Tôn Thất Thuyết đưa vua Hàm Nghi (13 tuổi) ra Tân Sở. 13/7/1885: vua ban Chiếu Cần Vương kêu gọi cứu nước.' },
      { h: 'Các khởi nghĩa lớn' },
      { ul: ['Khởi nghĩa Bãi Sậy (Hưng Yên, 1883-1892) — Nguyễn Thiện Thuật.', 'Khởi nghĩa Ba Đình (Thanh Hoá, 1886-1887) — Đinh Công Tráng.', 'Khởi nghĩa Hương Khê (Hà Tĩnh, 1885-1896) — Phan Đình Phùng.'] },
      { h: 'Ý nghĩa' },
      { p: 'Thể hiện tinh thần yêu nước, ý chí giành độc lập. Nhưng do thiếu đường lối phù hợp, không liên minh được giai cấp, các khởi nghĩa đều thất bại.' },
    ],
    [
      { q: 'Vua nào ban Chiếu Cần Vương?', a: 'Hàm Nghi (13/7/1885).' },
      { q: 'Khởi nghĩa Cần Vương dài nhất?', a: 'Khởi nghĩa Hương Khê (Phan Đình Phùng, 11 năm).' },
    ]
  ),

  'S8LSDL-w14-quiz': L(
    'LS — Khởi nghĩa Yên Thế (1884–1913) — Hoàng Hoa Thám',
    'Khởi nghĩa Yên Thế — cuộc khởi nghĩa nông dân dài nhất chống Pháp.',
    ['Bối cảnh và lãnh đạo.', 'Diễn biến.', 'Đặc điểm và ý nghĩa.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Vùng Yên Thế (Bắc Giang) là vùng rừng núi hiểm trở, là nơi tụ tập của những nông dân lưu tán. 1884: Hoàng Hoa Thám (Đề Thám, "hùm thiêng Yên Thế") lãnh đạo khởi nghĩa.' },
      { h: 'Diễn biến' },
      { p: '29 năm chiến đấu (1884-1913) — dài nhất trong lịch sử chống Pháp. Pháp nhiều lần phải đàm phán hoà với Đề Thám. 1908: liên kết với vụ Hà thành đầu độc nhưng không thành. 1913: Đề Thám bị phản bội và sát hại.' },
      { h: 'Đặc điểm' },
      { ul: ['Khởi nghĩa nông dân tự phát (không phải Cần Vương phong kiến).', 'Có cơ sở quần chúng vững chắc.', 'Chiến thuật du kích linh hoạt.'] },
    ],
    [
      { q: 'Khởi nghĩa Yên Thế kéo dài bao lâu?', a: '29 năm (1884-1913).' },
      { q: 'Lãnh tụ khởi nghĩa Yên Thế?', a: 'Hoàng Hoa Thám (Đề Thám) - "hùm thiêng Yên Thế".' },
    ]
  ),

  'S8LSDL-w15-quiz': L(
    'LS — Phong trào yêu nước đầu thế kỉ XX',
    'Đầu XX, phong trào yêu nước có khuynh hướng mới — duy tân, cải cách.',
    ['Phan Bội Châu và Đông Du.', 'Phan Châu Trinh và duy tân.', 'Đông Kinh Nghĩa Thục.'],
    [
      { h: 'Phan Bội Châu (1867-1940)' },
      { p: 'Chủ trương bạo động vũ trang. Khởi xướng phong trào Đông Du (1905-1908): đưa ~200 thanh niên VN sang Nhật học. Pháp-Nhật thoả thuận trục xuất, kết thúc Đông Du (1909).' },
      { h: 'Phan Châu Trinh (1872-1926)' },
      { p: 'Chủ trương ôn hoà, duy tân: "Khai dân trí, chấn dân khí, hậu dân sinh". Dựa Pháp để cải cách văn hoá, giáo dục.' },
      { h: 'Đông Kinh Nghĩa Thục (1907)' },
      { p: 'Lương Văn Can, Nguyễn Quyền sáng lập tại HN — dạy chữ Quốc ngữ + kiến thức mới, tuyên truyền yêu nước. Pháp đóng cửa cuối 1907.' },
    ],
    [
      { q: '2 phương thức cứu nước đầu XX?', a: 'Phan Bội Châu - bạo động. Phan Châu Trinh - duy tân ôn hoà.' },
      { q: 'Đông Kinh Nghĩa Thục ở đâu?', a: 'Hà Nội (phố Hàng Đào), 1907.' },
    ]
  ),

  'S8LSDL-w16-quiz': L(
    'LS — Nguyễn Tất Thành ra đi tìm đường cứu nước',
    'Bước ngoặt lịch sử khi Nguyễn Tất Thành quyết định ra nước ngoài.',
    ['Hoàn cảnh.', 'Hành trình tìm đường.', 'Ý nghĩa.'],
    [
      { h: 'Hoàn cảnh' },
      { p: 'Đầu XX, các phong trào yêu nước (Cần Vương, Đông Du, duy tân) đều thất bại. Nguyễn Tất Thành (sinh 1890, Nghệ An) thấy con đường cứu nước cần khác.' },
      { h: 'Hành trình' },
      { ul: ['5/6/1911: Rời bến Nhà Rồng (Sài Gòn) trên tàu Amiral Latouche-Tréville.', 'Đến Marseille (Pháp), sau đi nhiều nước.', '1920: Tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours — đến với CN Mác-Lê.', '1930: Sáng lập Đảng Cộng sản VN.', '1941: Trở về VN, lãnh đạo CMVN.'] },
      { h: 'Ý nghĩa' },
      { p: 'Mở ra con đường cứu nước theo cách mạng vô sản — con đường đưa VN đến độc lập.' },
    ],
    [
      { q: 'Nguyễn Tất Thành rời VN ngày nào?', a: '5/6/1911 từ bến Nhà Rồng.' },
      { q: 'Người tham gia sáng lập ĐCS Pháp năm?', a: '1920 tại Đại hội Tours.' },
    ]
  ),

  'S8LSDL-w17-quiz': L(
    'LS — Chính sách khai thác thuộc địa lần I của Pháp (1897–1914)',
    'Toàn quyền Paul Doumer thực hiện khai thác thuộc địa quy mô lớn.',
    ['Mục đích.', 'Các chính sách kinh tế.', 'Hậu quả với VN.'],
    [
      { h: 'Mục đích' },
      { p: 'Biến VN thành thị trường tiêu thụ + nguồn nhân công + nơi cung cấp nguyên liệu rẻ cho Pháp.' },
      { h: 'Chính sách kinh tế' },
      { ul: ['Đầu tư xây dựng hạ tầng (đường sắt, cầu, cảng).', 'Khai thác mỏ (than Quảng Ninh, vonfram, thiếc).', 'Lập đồn điền (cà phê, cao su).', 'Phát triển công nghiệp nhẹ (chế biến nông sản).', 'Tăng thuế nặng (thuế thân, thuế ruộng).'] },
      { h: 'Hậu quả' },
      { p: 'VN trở thành nước nông nghiệp lạc hậu, phụ thuộc Pháp. Phân hoá giai cấp mới: công nhân, tư sản dân tộc, tiểu tư sản trí thức. Mâu thuẫn dân tộc + giai cấp gay gắt.' },
    ],
    [
      { q: 'Khai thác thuộc địa lần I diễn ra?', a: '1897-1914 (toàn quyền Paul Doumer).' },
      { q: 'Giai cấp nào mới xuất hiện ở VN?', a: 'Công nhân, tư sản dân tộc, tiểu tư sản trí thức.' },
    ]
  ),

  'S8LSDL-w18-quiz': L(
    'Ôn tập học kì I (Lịch sử)',
    'Tổng hợp Lịch sử HK1.',
    ['CMTS thế giới.', 'Pháp xâm lược VN.', 'Phong trào yêu nước.'],
    [
      { h: 'Tổng kết LS HK1' },
      { ul: ['CMTS Anh (1640), Mỹ (1775-1783), Pháp (1789).', 'CMCN Anh - máy hơi nước Watt.', 'Công xã Pari 1871, Mác-Ăng-ghen.', 'Pháp xâm lược VN: 1858 → 1884.', 'Cần Vương, Yên Thế, Đông Du, duy tân.', 'Nguyễn Tất Thành ra đi 1911.', 'Khai thác thuộc địa lần I (1897-1914).'] },
    ],
    [
      { q: 'CMTS Pháp năm?', a: '1789.' },
      { q: 'Pháp chiếm hoàn toàn VN năm?', a: '1884 (Hiệp ước Pa-tơ-nốt).' },
    ]
  ),

  'S8LSDL-w19-quiz': L(
    'ĐL — Vị trí địa lý và phạm vi lãnh thổ VN',
    'Bắt đầu Địa lý lớp 8 với vị trí địa lý Việt Nam.',
    ['Vị trí địa lý VN.', 'Phạm vi lãnh thổ.', 'Ý nghĩa vị trí.'],
    [
      { h: 'Vị trí' },
      { p: 'VN nằm ở rìa Đông bán đảo Đông Dương, gần trung tâm Đông Nam Á. Hệ toạ độ: 8°34\'B - 23°23\'B (trải dài 15° vĩ độ), 102°09\'Đ - 109°24\'Đ.' },
      { h: 'Phạm vi' },
      { ul: ['Đất liền: ~331 212 km².', 'Vùng biển: ~1 triệu km² (gấp 3 đất liền).', 'Đường biên giới đất liền: ~4639 km (với TQ, Lào, Campuchia).', 'Bờ biển: 3260 km.'] },
      { h: 'Ý nghĩa vị trí' },
      { ul: ['Khí hậu nhiệt đới ẩm gió mùa.', 'Tài nguyên đa dạng (rừng, biển, khoáng sản).', 'Vị trí giao thông quan trọng (cửa ngõ Đông Nam Á).', 'Thuận lợi giao lưu kinh tế-văn hoá.'] },
    ],
    [
      { q: 'Diện tích đất liền VN?', a: '~331 212 km².' },
      { q: 'VN tiếp giáp 3 nước nào?', a: 'Trung Quốc, Lào, Campuchia.' },
    ]
  ),

  'S8LSDL-w20-quiz': L(
    'ĐL — Ảnh hưởng vị trí địa lý đến tự nhiên VN',
    'Vị trí địa lý quy định nhiều đặc điểm tự nhiên VN.',
    ['Khí hậu nhiệt đới gió mùa.', 'Đa dạng sinh học.', 'Tài nguyên biển.'],
    [
      { h: 'Khí hậu' },
      { p: 'Nằm trong vùng nội chí tuyến (giữa 2 chí tuyến) → khí hậu nhiệt đới. Gần biển Đông + vị trí Đông Nam Á → có gió mùa. Trải dài 15° vĩ → khí hậu phân hoá Bắc-Nam.' },
      { h: 'Sinh học' },
      { p: 'Vị trí giao thoa 3 luồng sinh vật (Trung Hoa, Ấn-Mã, Đông Bắc Á) → đa dạng sinh học cao. VN có nhiều loài đặc hữu.' },
      { h: 'Biển và tài nguyên' },
      { p: 'Vùng biển rộng → nhiều hải sản, dầu khí, du lịch biển. Bãi biển dài 3260 km thuận lợi phát triển kinh tế biển.' },
    ],
    [
      { q: 'Khí hậu VN thuộc loại?', a: 'Nhiệt đới gió mùa.' },
      { q: 'Vì sao VN đa dạng sinh học?', a: 'Vị trí giao thoa 3 luồng sinh vật từ TQ, Ấn-Mã, Đông Bắc Á.' },
    ]
  ),

  'S8LSDL-w21-quiz': L(
    'ĐL — Địa hình Việt Nam (1)',
    'Đặc điểm chung địa hình VN.',
    ['Đặc điểm chung.', '3 dạng địa hình chính.', 'Hướng nghiêng.'],
    [
      { h: 'Đặc điểm chung' },
      { ul: ['Đồi núi chiếm 3/4 diện tích.', 'Đồng bằng chỉ 1/4 (nhưng tập trung dân cư).', 'Hướng nghiêng: Tây Bắc - Đông Nam.', 'Hướng núi: chủ yếu Tây Bắc - Đông Nam (Hoàng Liên Sơn), và vòng cung (Đông Bắc).'] },
      { h: '3 dạng địa hình' },
      { ul: ['Đồi núi: Hoàng Liên Sơn, Trường Sơn, Tây Nguyên.', 'Đồng bằng: ĐBSH, ĐBSCL, đồng bằng duyên hải miền Trung.', 'Bờ biển và thềm lục địa.'] },
    ],
    [
      { q: 'Đồi núi chiếm bao nhiêu % diện tích VN?', a: '~3/4 (75%).' },
      { q: 'Đỉnh núi cao nhất VN?', a: 'Phan-xi-păng (3143m) thuộc dãy Hoàng Liên Sơn.' },
    ]
  ),

  'S8LSDL-w22-quiz': L(
    'ĐL — Địa hình Việt Nam (2)',
    'Các khu vực địa hình chi tiết.',
    ['Vùng núi.', 'Vùng đồng bằng.', 'Bờ biển và thềm lục địa.'],
    [
      { h: 'Vùng núi' },
      { ul: ['Tây Bắc: Hoàng Liên Sơn cao đồ sộ (Phan-xi-păng 3143m).', 'Đông Bắc: nhiều dãy vòng cung (Sông Gâm, Ngân Sơn, Bắc Sơn).', 'Trường Sơn Bắc: dài, hẹp.', 'Trường Sơn Nam và Tây Nguyên: cao nguyên xếp tầng (Kontum, Pleiku, Đắk Lắk).'] },
      { h: 'Đồng bằng' },
      { ul: ['ĐB Sông Hồng: ~15 000 km², phù sa sông Hồng.', 'ĐB Sông Cửu Long: ~40 000 km², phù sa sông Mekong — vựa lúa.', 'ĐB duyên hải miền Trung: hẹp, kéo dài.'] },
    ],
    [
      { q: 'Đồng bằng lớn nhất VN?', a: 'Đồng bằng Sông Cửu Long (~40 000 km²).' },
      { q: 'Tây Nguyên có địa hình?', a: 'Cao nguyên xếp tầng (Kontum, Pleiku, Đắk Lắk, Lâm Viên…).' },
    ]
  ),

  'S8LSDL-w23-quiz': L(
    'ĐL — Khí hậu Việt Nam',
    'Khí hậu VN: nhiệt đới ẩm gió mùa.',
    ['Đặc điểm chung.', 'Hai mùa gió.', 'Phân hoá khí hậu.'],
    [
      { h: 'Khí hậu nhiệt đới ẩm gió mùa' },
      { ul: ['Nhiệt độ TB năm: 22-27°C.', 'Lượng mưa: 1500-2000 mm/năm.', 'Độ ẩm cao (>80%).'] },
      { h: 'Hai mùa gió' },
      { ul: ['Gió mùa Đông Bắc (11-4): lạnh, khô (miền Bắc); mưa phùn cuối mùa.', 'Gió mùa Tây Nam (5-10): nóng, ẩm, gây mưa lớn cả nước.'] },
      { h: 'Phân hoá' },
      { ul: ['Bắc-Nam: miền Bắc có mùa đông lạnh; miền Nam nóng quanh năm.', 'Đông-Tây: sườn đón gió mưa nhiều, khuất gió khô.', 'Theo độ cao: lên cao nhiệt độ giảm.'] },
    ],
    [
      { q: 'Gió mùa Đông Bắc thổi vào thời gian?', a: '11-4 (mùa đông), lạnh và khô.' },
      { q: 'Vì sao Đà Lạt mát?', a: 'Ở độ cao ~1500m → nhiệt độ thấp hơn vùng đồng bằng cùng vĩ độ.' },
    ]
  ),

  'S8LSDL-w24-quiz': L(
    'ĐL — Sông ngòi Việt Nam',
    'Mạng lưới sông ngòi dày đặc của VN.',
    ['Đặc điểm chung.', 'Các hệ thống sông chính.', 'Vai trò sông ngòi.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Mạng lưới dày: >2360 sông dài >10km.', 'Chế độ chảy theo mùa: mùa lũ (75-80% lượng nước) trùng mùa mưa.', 'Hướng chảy: chủ yếu Tây Bắc - Đông Nam (Hồng) hoặc Tây - Đông (Mê Kông).', 'Hàm lượng phù sa lớn.'] },
      { h: 'Các hệ thống sông chính' },
      { ul: ['Sông Hồng (Bắc Bộ).', 'Sông Mã, Sông Cả (Bắc Trung Bộ).', 'Sông Mê Kông (Nam Bộ — vào VN gọi Cửu Long).', 'Sông Đồng Nai.'] },
      { h: 'Vai trò' },
      { p: 'Tưới tiêu nông nghiệp, giao thông thuỷ, thuỷ điện (Hoà Bình, Sơn La, Yaly…), du lịch, nuôi trồng thuỷ sản.' },
    ],
    [
      { q: 'Hệ thống sông lớn nhất VN?', a: 'Sông Mê Kông (gồm 9 cửa nên gọi Cửu Long).' },
      { q: 'Nhà máy thuỷ điện lớn nhất VN?', a: 'Sơn La (2400 MW) trên sông Đà.' },
    ]
  ),

  'S8LSDL-w25-quiz': L(
    'ĐL — Đất và sinh vật VN',
    'Tài nguyên đất và đa dạng sinh học VN.',
    ['Các loại đất chính.', 'Đa dạng sinh học.', 'Bảo vệ tài nguyên.'],
    [
      { h: 'Các loại đất' },
      { ul: ['Đất feralit: chủ yếu ở đồi núi (60% diện tích) — màu đỏ, ít dinh dưỡng.', 'Đất phù sa: đồng bằng — màu mỡ, trồng lúa tốt.', 'Đất badan: Tây Nguyên — màu nâu đỏ, tốt cho cà phê, cao su.', 'Đất mặn, đất phèn: ven biển.'] },
      { h: 'Đa dạng sinh học' },
      { p: 'VN có ~12 000 loài thực vật, ~7000 loài động vật. Nhiều loài đặc hữu (sao la, voọc Cát Bà). Là 1 trong 25 điểm nóng đa dạng sinh học thế giới.' },
      { h: 'Bảo vệ' },
      { ul: ['33 vườn quốc gia (Cúc Phương, Cát Tiên, Phong Nha…).', '~9 triệu ha rừng phòng hộ.', 'Tuyên truyền + chế tài pháp luật.'] },
    ],
    [
      { q: 'Đất nào tốt cho cà phê?', a: 'Đất badan (Tây Nguyên).' },
      { q: 'VN có bao nhiêu vườn quốc gia?', a: '33 vườn quốc gia.' },
    ]
  ),

  'S8LSDL-w26-quiz': L(
    'ĐL — Tài nguyên và môi trường VN',
    'Tài nguyên thiên nhiên và thách thức môi trường.',
    ['Các loại tài nguyên.', 'Thách thức môi trường.', 'Bảo vệ môi trường.'],
    [
      { h: 'Tài nguyên' },
      { ul: ['Đất: 33 triệu ha.', 'Nước: dồi dào (sông + biển).', 'Rừng: ~14 triệu ha.', 'Khoáng sản: dầu khí, than, sắt, vàng, đá vôi…', 'Biển: hải sản, du lịch, năng lượng.'] },
      { h: 'Thách thức môi trường' },
      { ul: ['Ô nhiễm không khí đô thị (HN, TP.HCM).', 'Ô nhiễm nước (sông Tô Lịch, lưu vực sông Đồng Nai).', 'Mất rừng và đa dạng sinh học.', 'Biến đổi khí hậu (xâm nhập mặn ĐBSCL).'] },
      { h: 'Giải pháp' },
      { ul: ['Trồng rừng.', 'Xử lý nước thải.', 'Năng lượng tái tạo.', 'Pháp luật và giáo dục.'] },
    ],
    [
      { q: 'ĐBSCL đối mặt vấn đề?', a: 'Xâm nhập mặn do nước biển dâng + thuỷ điện thượng nguồn.' },
      { q: 'Tài nguyên rừng VN?', a: '~14 triệu ha rừng (cả rừng tự nhiên + trồng).' },
    ]
  ),

  'S8LSDL-w27-quiz': L(
    'LS — Chiến tranh thế giới thứ nhất (1914–1918)',
    'Cuộc chiến tranh đế quốc đầu tiên — quy mô thế giới.',
    ['Nguyên nhân.', 'Diễn biến và kết quả.', 'Hậu quả.'],
    [
      { h: 'Nguyên nhân' },
      { p: 'Mâu thuẫn giữa 2 phe đế quốc: Liên minh (Đức, Áo-Hung, Ý) vs Hiệp ước (Anh, Pháp, Nga). Mâu thuẫn về thuộc địa và thị trường. Cớ trực tiếp: ám sát thái tử Áo-Hung tại Sarajevo (28/6/1914).' },
      { h: 'Diễn biến' },
      { p: '7/1914 - 11/1918. 38 nước tham gia. Mặt trận chính: Tây Âu (đường hào). Mỹ tham chiến 1917. Cách mạng Tháng Mười Nga 1917 → Nga rút khỏi chiến tranh.' },
      { h: 'Kết quả' },
      { p: 'Phe Hiệp ước thắng. ~10 triệu người chết. Hiệp ước Versailles (1919) chia lại thế giới. Cách mạng XHCN thắng lợi ở Nga.' },
    ],
    [
      { q: 'Cớ trực tiếp WW1?', a: 'Ám sát thái tử Franz Ferdinand tại Sarajevo (28/6/1914).' },
      { q: 'WW1 kết thúc năm?', a: '1918 (11/11/1918 hiệp định đình chiến).' },
    ]
  ),

  'S8LSDL-w28-quiz': L(
    'LS — Cách mạng tháng Mười Nga 1917',
    'CM Tháng Mười Nga 1917 — cuộc cách mạng XHCN đầu tiên thành công.',
    ['Bối cảnh.', 'Diễn biến.', 'Ý nghĩa lịch sử.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Nga đầu XX: nước phong kiến chuyên chế (Nga hoàng), kinh tế lạc hậu, tham gia WW1 thua liên tiếp. 2/1917: CM dân chủ tư sản lật đổ Nga hoàng. 10/1917: CM Tháng Mười (XHCN) thắng lợi.' },
      { h: 'Diễn biến' },
      { p: '7/11/1917 (theo lịch mới — 25/10 theo lịch cũ): Lê-nin lãnh đạo công nhân + binh sĩ chiếm Cung điện Mùa Đông ở Petrograd, lật đổ Chính phủ lâm thời tư sản.' },
      { h: 'Ý nghĩa' },
      { ul: ['Cách mạng XHCN đầu tiên thắng lợi.', 'Mở ra thời đại mới: thời đại quá độ lên CNXH.', 'Cổ vũ phong trào giải phóng dân tộc và CN thế giới.', 'Ảnh hưởng lớn đến CM Việt Nam.'] },
    ],
    [
      { q: 'CM tháng Mười Nga lãnh đạo bởi?', a: 'V.I. Lê-nin và Đảng Bolshevik.' },
      { q: 'Cuộc CM XHCN đầu tiên thắng lợi?', a: 'Cách mạng Tháng Mười Nga 1917.' },
    ]
  ),

  'S8LSDL-w29-quiz': L(
    'LS — Giữa hai cuộc chiến tranh thế giới (1918–1939)',
    'Thời kỳ giữa 2 cuộc chiến — đầy biến động.',
    ['Khủng hoảng kinh tế 1929-1933.', 'Sự xuất hiện chủ nghĩa phát-xít.', 'Tình hình Đông Á.'],
    [
      { h: 'Khủng hoảng kinh tế 1929-1933' },
      { p: 'Bắt đầu từ Mỹ (sụp đổ thị trường chứng khoán Phố Wall 10/1929), lan ra toàn TG. Sản lượng công nghiệp giảm 50%. Thất nghiệp tăng vọt. Các nước tìm lối thoát: Mỹ-New Deal; Đức-Nhật-Ý đi vào chủ nghĩa phát-xít.' },
      { h: 'Chủ nghĩa phát-xít' },
      { ul: ['Đức (1933): Hitler lên cầm quyền.', 'Ý (1922): Mussolini.', 'Nhật: quân phiệt cầm quyền.'] },
      { p: 'Phát-xít: chế độ độc tài, hiếu chiến, bành trướng. Là nguyên nhân chính WW2.' },
    ],
    [
      { q: 'Khủng hoảng 1929 bắt đầu ở đâu?', a: 'Mỹ (sụp đổ Phố Wall 10/1929).' },
      { q: 'Hitler lên cầm quyền năm?', a: '1933 tại Đức.' },
    ]
  ),

  'S8LSDL-w30-quiz': L(
    'LS — Chiến tranh thế giới thứ hai (1939–1945)',
    'Cuộc chiến tranh thế giới khốc liệt nhất lịch sử.',
    ['Nguyên nhân và bùng nổ.', 'Diễn biến chính.', 'Kết quả và bài học.'],
    [
      { h: 'Nguyên nhân' },
      { p: 'Mâu thuẫn giữa các nước đế quốc (đặc biệt phát-xít Đức-Ý-Nhật) tham vọng bành trướng. 1/9/1939: Đức tấn công Ba Lan → WW2 bùng nổ.' },
      { h: 'Diễn biến' },
      { ul: ['1939-1941: Phe phát-xít chiếm ưu thế (Đức chiếm châu Âu, Nhật ĐNÁ-TBD).', '1941: Đức tấn công Liên Xô (22/6); Nhật tấn công Trân Châu Cảng (7/12).', '1942-1943: Bước ngoặt — Liên Xô thắng Stalingrad (2/1943); Mỹ thắng Midway.', '1944-1945: Đồng minh phản công. 5/1945 Đức đầu hàng; 9/1945 Nhật đầu hàng (sau 2 quả bom nguyên tử Hiroshima-Nagasaki).'] },
      { h: 'Kết quả' },
      { p: '~60-80 triệu người chết. Liên Xô và Mỹ trở thành 2 siêu cường. Liên hợp quốc thành lập (24/10/1945). Phong trào giải phóng dân tộc bùng nổ — VN giành độc lập 2/9/1945.' },
    ],
    [
      { q: 'WW2 bắt đầu năm?', a: '1/9/1939 (Đức tấn công Ba Lan).' },
      { q: 'Mỹ ném 2 bom nguyên tử xuống?', a: 'Hiroshima (6/8/1945) và Nagasaki (9/8/1945).' },
    ]
  ),

  'S8LSDL-w31-quiz': L(
    'LS — Việt Nam đầu thế kỉ XX đến 1918',
    'VN trong giai đoạn 1900-1918 — phong trào yêu nước phát triển.',
    ['Tình hình VN.', 'Các phong trào yêu nước.', 'Vai trò Nguyễn Tất Thành.'],
    [
      { h: 'Tình hình VN' },
      { p: 'Pháp khai thác thuộc địa lần I (1897-1914) — VN trở thành thuộc địa-nửa phong kiến. Giai cấp mới: công nhân, tư sản dân tộc, tiểu tư sản trí thức.' },
      { h: 'Các phong trào' },
      { ul: ['Đông Du (1905-1908) - Phan Bội Châu.', 'Đông Kinh Nghĩa Thục (1907) - Lương Văn Can.', 'Phong trào duy tân - Phan Châu Trinh.', 'Việt Nam Quang phục Hội (1912) - Phan Bội Châu.', 'Khởi nghĩa Yên Thế (đến 1913) - Đề Thám.'] },
      { h: 'Nguyễn Tất Thành' },
      { p: '5/6/1911: ra đi tìm đường cứu nước, mở ra hướng đi mới — con đường cách mạng vô sản.' },
    ],
    [
      { q: 'Việt Nam Quang phục Hội thành lập năm?', a: '1912 (Phan Bội Châu).' },
      { q: 'Ai khởi xướng phong trào Đông Du?', a: 'Phan Bội Châu.' },
    ]
  ),

  'S8LSDL-w32-quiz': L(
    'ĐL — Đặc điểm chung tự nhiên VN',
    'Tổng kết đặc điểm chung của tự nhiên VN.',
    ['Hệ thống đặc điểm tự nhiên.', 'Mối quan hệ giữa các yếu tố.', 'Vai trò với phát triển.'],
    [
      { h: '4 đặc điểm chung' },
      { ul: ['Nhiệt đới ẩm gió mùa.', 'Đồi núi chiếm 3/4 diện tích.', 'Tính chất bán đảo, có biển.', 'Đa dạng và phức tạp.'] },
      { h: 'Mối quan hệ' },
      { p: 'Khí hậu + địa hình → đất + sinh vật + sông ngòi. Mọi yếu tố liên kết chặt chẽ tạo nên cảnh quan tự nhiên đa dạng.' },
      { h: 'Vai trò' },
      { ul: ['Thuận lợi: nông nghiệp đa canh, du lịch.', 'Khó khăn: thiên tai (bão, lũ, hạn).'] },
    ],
    [
      { q: 'Đặc điểm bao trùm nhất của tự nhiên VN?', a: 'Nhiệt đới ẩm gió mùa.' },
      { q: 'Cảnh quan tự nhiên VN?', a: 'Đa dạng - phức tạp do địa hình nhiều, khí hậu phân hoá.' },
    ]
  ),

  'S8LSDL-w33-quiz': L(
    'Ôn tập Lịch sử cận đại',
    'Tổng hợp Lịch sử cận đại thế giới và VN.',
    ['CMTS thế giới.', 'CM tháng Mười Nga.', 'WW1, WW2.'],
    [
      { h: 'Tổng kết LS cận đại' },
      { ul: ['CMTS Anh (1640), Mỹ (1776), Pháp (1789).', 'CMCN Anh - máy hơi nước.', 'Mác-Ăng-ghen và Tuyên ngôn ĐCS 1848.', 'CM tháng Mười Nga 1917.', 'WW1 (1914-1918), WW2 (1939-1945).', 'Pháp xâm lược VN (1858), VN thành thuộc địa (1884).', 'Phong trào yêu nước VN: Cần Vương, Đông Du, Đông Kinh Nghĩa Thục.', 'Nguyễn Tất Thành ra đi 1911.'] },
    ],
    [
      { q: 'CMTS đầu tiên trên thế giới?', a: 'Cách mạng tư sản Anh thế kỷ XVII (1640).' },
      { q: 'Năm kết thúc WW2?', a: '1945 (Nhật đầu hàng 2/9/1945).' },
    ]
  ),

  'S8LSDL-w34-quiz': L(
    'Ôn tập Địa lý VN',
    'Tổng hợp Địa lý VN.',
    ['Vị trí + lãnh thổ.', 'Địa hình + khí hậu + sông ngòi.', 'Đất + sinh vật + tài nguyên.'],
    [
      { h: 'Tổng kết Địa lý VN' },
      { ul: ['Vị trí: rìa Đông bán đảo Đông Dương, ĐNÁ.', 'Đất liền: ~331 212 km².', 'Đồi núi 3/4, đồng bằng 1/4.', 'Khí hậu nhiệt đới ẩm gió mùa, phân hoá Bắc-Nam.', 'Sông ngòi dày, thuỷ chế theo mùa.', 'Đất feralit, phù sa, badan… Đa dạng sinh học cao.'] },
    ],
    [
      { q: '3 đồng bằng lớn của VN?', a: 'ĐB Sông Hồng, ĐB Sông Cửu Long, ĐB duyên hải miền Trung.' },
      { q: 'Đỉnh núi cao nhất VN?', a: 'Phan-xi-păng 3143m.' },
    ]
  ),

  'S8LSDL-w35-quiz': L(
    'Ôn tập cuối năm',
    'Tổng kết LSDL lớp 8.',
    ['Lịch sử thế giới + VN.', 'Địa lý VN.', 'Liên hệ thực tiễn.'],
    [
      { h: 'Tổng kết' },
      { ul: ['LS: CMTS thế giới, Pháp xâm lược VN, phong trào yêu nước, WW1-2.', 'ĐL: vị trí + lãnh thổ, địa hình, khí hậu, sông, đất, sinh vật.', 'Liên hệ: lịch sử ngày nay (HN, các sự kiện kỷ niệm), địa lý ngày nay (môi trường, biến đổi khí hậu).'] },
      { note: 'Tự ra đề kiểm tra để củng cố.' },
    ],
    [
      { q: 'Hiệp ước biến VN thành thuộc địa?', a: 'Pa-tơ-nốt 1884.' },
      { q: 'Khí hậu VN có 2 mùa gió chính?', a: 'Gió mùa Đông Bắc (11-4) và gió mùa Tây Nam (5-10).' },
    ]
  ),
};
