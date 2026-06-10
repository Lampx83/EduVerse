// ============================================================
// Lớp 9 · LỊCH SỬ + ĐỊA LÝ — Lý thuyết 35 tuần.
// Key trùng id quiz: "S9LSDL-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9LSDL_LESSONS = {
  'S9LSDL-w01-quiz': L(
    'Liên Xô và các nước Đông Âu sau 1945',
    'Mở đầu lịch sử thế giới hiện đại với hệ thống XHCN sau Thế chiến II.',
    ['Hiểu vai trò Liên Xô.', 'Biết các nước Đông Âu XHCN.'],
    [
      { h: 'Liên Xô sau 1945' },
      { ul: ['Phục hồi nhanh sau chiến tranh.', 'Cường quốc khoa học công nghệ: vệ tinh đầu tiên (1957), con người đầu tiên vào vũ trụ (Gagarin, 1961).', 'Lãnh đạo hệ thống XHCN.'] },
      { h: 'Các nước Đông Âu XHCN' },
      { ul: ['Ba Lan, Tiệp Khắc, Hungary, Đông Đức, Bulgaria, Rumania, Albania.', 'Phát triển theo mô hình kế hoạch hoá tập trung.'] },
      { note: 'Hệ thống XHCN đối trọng với khối tư bản phương Tây thời Chiến tranh Lạnh.' },
    ],
    [
      { q: 'Khi nào Liên Xô phóng vệ tinh đầu tiên?', a: '04/10/1957 — Sputnik 1.' },
      { q: 'Ai là con người đầu tiên vào vũ trụ?', a: 'Yuri Gagarin (Liên Xô), 12/4/1961.' },
    ]
  ),

  'S9LSDL-w02-quiz': L(
    'Khủng hoảng và sụp đổ Liên Xô — Đông Âu (1989-1991)',
    'Sự sụp đổ XHCN ở Đông Âu và Liên Xô — sự kiện chấn động thế giới.',
    ['Hiểu nguyên nhân khủng hoảng.', 'Biết diễn biến chính.'],
    [
      { h: 'Nguyên nhân' },
      { ul: ['Trì trệ kinh tế do mô hình kế hoạch hoá.', 'Chạy đua vũ trang tốn kém.', 'Khủng hoảng niềm tin vào CNXH.', 'Tác động cải tổ (perestroika) của Gorbachev.'] },
      { h: 'Diễn biến' },
      { ul: ['1989: bức tường Berlin sụp đổ.', '1989-1990: các nước Đông Âu chuyển đổi chính trị.', '1991: Liên Xô tan rã thành 15 quốc gia độc lập.'] },
      { note: 'Đây là chuyển biến lớn nhất cuối thế kỷ 20, kết thúc Chiến tranh Lạnh.' },
    ],
    [
      { q: 'Bức tường Berlin sụp đổ năm?', a: '09/11/1989.' },
      { q: 'Liên Xô tan rã năm?', a: '25/12/1991 — Gorbachev từ chức, Liên Xô chính thức tan rã.' },
    ]
  ),

  'S9LSDL-w03-quiz': L(
    'Các nước Á, Phi, Mỹ La-tinh — Phong trào giải phóng',
    'Phong trào giành độc lập của các nước thuộc địa sau Thế chiến II.',
    ['Hiểu phong trào giải phóng dân tộc.', 'Biết các sự kiện tiêu biểu.'],
    [
      { h: 'Châu Á' },
      { ul: ['Trung Quốc giành thắng lợi (1949) — CHND Trung Hoa.', 'Ấn Độ độc lập (1947).', 'Indonesia (1945), Việt Nam (1945), Lào, Campuchia.'] },
      { h: 'Châu Phi' },
      { ul: ['Bùng nổ phong trào giải phóng từ 1960 — "Năm châu Phi" (17 nước độc lập).', 'Algeria (1962), Nam Phi xoá bỏ apartheid (1994).'] },
      { h: 'Mỹ La-tinh' },
      { ul: ['Cuba cách mạng (1959).', 'Đấu tranh chống chế độ độc tài.'] },
      { note: 'Phong trào giải phóng dân tộc làm sụp đổ hệ thống thuộc địa thế giới.' },
    ],
    [
      { q: 'CHND Trung Hoa thành lập năm?', a: '01/10/1949, tại Bắc Kinh.' },
      { q: '"Năm châu Phi" là năm nào?', a: '1960 — có 17 nước châu Phi giành độc lập.' },
    ]
  ),

  'S9LSDL-w04-quiz': L(
    'Mỹ, Nhật Bản, Tây Âu sau 1945',
    'Sự phát triển của các nước tư bản chủ chốt thời hậu chiến.',
    ['Hiểu sự phát triển kinh tế Mỹ, Nhật, Tây Âu.', 'Biết Liên minh châu Âu (EU).'],
    [
      { h: 'Mỹ' },
      { ul: ['Cường quốc số 1 thế giới về kinh tế, khoa học.', 'Lãnh đạo khối tư bản trong Chiến tranh Lạnh.', 'Đặt người lên Mặt Trăng (1969).'] },
      { h: 'Nhật Bản' },
      { ul: ['Phục hồi nhanh sau chiến tranh (Phép màu Nhật Bản).', 'Trở thành cường quốc kinh tế thứ 2 thế giới (1968-2010).'] },
      { h: 'Tây Âu' },
      { ul: ['Marshall Plan giúp phục hồi.', 'Hợp tác qua EEC (1957) → EU (1993).'] },
      { note: 'Mỹ, Nhật, Tây Âu là 3 cực kinh tế thế giới hiện đại.' },
    ],
    [
      { q: 'EU chính thức ra đời năm?', a: '1993 (Hiệp ước Maastricht có hiệu lực).' },
      { q: 'Người Mỹ đặt chân lên Mặt Trăng năm?', a: '1969 (Neil Armstrong, Apollo 11).' },
    ]
  ),

  'S9LSDL-w05-quiz': L(
    'Quan hệ quốc tế từ 1945 — Chiến tranh Lạnh',
    'Trật tự thế giới hai cực sau Thế chiến II.',
    ['Hiểu Chiến tranh Lạnh.', 'Biết các sự kiện căng thẳng.'],
    [
      { h: 'Chiến tranh Lạnh' },
      { p: 'Sự đối đầu căng thẳng giữa Mỹ và Liên Xô từ 1947 đến 1991.' },
      { h: 'Đặc trưng' },
      { ul: ['Chạy đua vũ trang (hạt nhân, không gian).', 'Chia rẽ thế giới thành 2 phe.', 'Chiến tranh cục bộ: Triều Tiên, Việt Nam, Afghanistan.', 'Không có chiến tranh trực tiếp giữa 2 siêu cường.'] },
      { h: 'Tổ chức tiêu biểu' },
      { ul: ['Phương Tây: NATO (1949), OEEC.', 'Phương Đông: Warsaw Pact (1955), Comecon.', 'Trung lập: Phong trào Không liên kết.'] },
      { note: 'Chiến tranh Lạnh kết thúc 1991 cùng với sự sụp đổ của Liên Xô.' },
    ],
    [
      { q: 'NATO thành lập năm?', a: '1949.' },
      { q: 'Phong trào Không liên kết do ai sáng lập?', a: 'Nehru (Ấn Độ), Nasser (Ai Cập), Tito (Nam Tư), Sukarno (Indonesia) — 1955.' },
    ]
  ),

  'S9LSDL-w06-quiz': L(
    'Cách mạng khoa học - công nghệ',
    'Cuộc cách mạng khoa học - công nghệ thay đổi diện mạo thế giới.',
    ['Hiểu thành tựu cách mạng KH-CN.', 'Nắm ý nghĩa và tác động.'],
    [
      { h: 'Các giai đoạn' },
      { ul: ['Cách mạng công nghiệp 4.0 (hiện nay): AI, IoT, Big Data, Robot.', 'Trước đó: máy hơi nước (1.0), điện (2.0), máy tính (3.0).'] },
      { h: 'Thành tựu' },
      { ul: ['Công nghệ thông tin (máy tính, internet).', 'Công nghệ sinh học (DNA, nhân bản, GMO).', 'Công nghệ vũ trụ (Mặt Trăng, sao Hoả).', 'Công nghệ vật liệu mới (nano).'] },
      { note: 'KH-CN làm thay đổi sản xuất, đời sống, văn hoá toàn cầu.' },
    ],
    [
      { q: 'Cừu Dolly — sản phẩm KH-CN nào?', a: 'Công nghệ nhân bản vô tính (Anh, 1996).' },
      { q: 'Internet phổ biến từ?', a: 'Cuối thập niên 1990, ARPANET có từ 1969.' },
    ]
  ),

  'S9LSDL-w07-quiz': L(
    'Việt Nam sau 1918 — Khai thác thuộc địa lần II',
    'Bắt đầu lịch sử Việt Nam giai đoạn 1919-1930.',
    ['Hiểu chính sách khai thác thuộc địa.', 'Biết tác động đến xã hội VN.'],
    [
      { h: 'Khai thác thuộc địa lần II (1919-1929)' },
      { p: 'Pháp đầu tư vào VN nhiều hơn để bù đắp thiệt hại Thế chiến I.' },
      { h: 'Đặc điểm' },
      { ul: ['Tập trung khai thác nông sản (cao su, lúa), khoáng sản.', 'Phát triển hạ tầng phục vụ vơ vét.', 'Đẩy mạnh áp bức + bóc lột thuế.'] },
      { h: 'Tác động' },
      { ul: ['Xuất hiện giai cấp công nhân, tư sản dân tộc.', 'Mâu thuẫn dân tộc + giai cấp gay gắt.', 'Tạo cơ sở cho phong trào cách mạng mới.'] },
      { note: 'Sự ra đời giai cấp công nhân là điều kiện quan trọng cho Đảng Cộng sản VN.' },
    ],
    [
      { q: 'Khai thác thuộc địa lần II do ai chủ trương?', a: 'Toàn quyền Albert Sarraut và sau đó.' },
      { q: 'Mặt hàng Pháp đầu tư nhiều nhất?', a: 'Cao su (vùng Đông Nam Bộ) và khai thác mỏ than (Quảng Ninh).' },
    ]
  ),

  'S9LSDL-w08-quiz': L(
    'Phong trào dân tộc dân chủ 1919-1925',
    'Hoạt động yêu nước của Nguyễn Ái Quốc và các phong trào trong nước.',
    ['Hiểu hoạt động NAQ.', 'Biết các phong trào trong nước.'],
    [
      { h: 'Nguyễn Ái Quốc' },
      { ul: ['1919: gửi Bản yêu sách 8 điểm tới Hội nghị Versailles.', '1920: đọc Sơ thảo Luận cương về vấn đề dân tộc và thuộc địa của Lenin, trở thành người cộng sản.', '1921-1923: hoạt động ở Pháp.', '1924-1925: hoạt động ở Quảng Châu, lập Hội Việt Nam Cách mạng Thanh niên.'] },
      { h: 'Phong trào trong nước' },
      { ul: ['Tư sản: vận động kinh tế (Bạch Thái Bưởi), văn hoá.', 'Tiểu tư sản: lập đảng, báo chí (Đảng Phục Việt, "Tiếng dân"...).'] },
      { note: 'NAQ đã chuẩn bị về tư tưởng, tổ chức cho Đảng Cộng sản VN ra đời.' },
    ],
    [
      { q: 'Năm NAQ tìm được con đường cứu nước?', a: '1920, qua Luận cương về vấn đề dân tộc và thuộc địa của Lenin.' },
      { q: 'Hội VN Cách mạng Thanh niên thành lập?', a: '6/1925, tại Quảng Châu (Trung Quốc).' },
    ]
  ),

  'S9LSDL-w09-quiz': L(
    'Đảng Cộng sản Việt Nam ra đời (3/2/1930)',
    'Sự kiện trọng đại đánh dấu bước ngoặt của cách mạng VN.',
    ['Hiểu hoàn cảnh ra đời Đảng.', 'Nắm Cương lĩnh đầu tiên.'],
    [
      { h: 'Hoàn cảnh' },
      { ul: ['Tháng 6/1929: Đông Dương Cộng sản đảng (Bắc Kỳ).', 'Tháng 7/1929: An Nam Cộng sản đảng (Nam Kỳ).', 'Tháng 9/1929: Đông Dương Cộng sản liên đoàn (Trung Kỳ).', 'Ba tổ chức cần thống nhất.'] },
      { h: 'Hội nghị thành lập Đảng' },
      { p: 'Do NAQ chủ trì tại Hương Cảng (Hong Kong), 3/2 - 7/2/1930.' },
      { h: 'Cương lĩnh đầu tiên' },
      { ul: ['Đường lối: Cách mạng tư sản dân quyền → cách mạng XHCN.', 'Nhiệm vụ: đánh đổ đế quốc Pháp + phong kiến.', 'Lực lượng: công - nông là chủ yếu, lôi kéo TTS, tư sản dân tộc.', 'Lãnh đạo: Đảng của giai cấp công nhân.'] },
      { note: 'Cương lĩnh do NAQ soạn thảo, được công nhận là Cương lĩnh chính trị đầu tiên của Đảng.' },
    ],
    [
      { q: 'Ngày thành lập Đảng?', a: '3/2/1930 tại Hương Cảng.' },
      { q: 'Người chủ trì Hội nghị thành lập Đảng?', a: 'Nguyễn Ái Quốc.' },
    ]
  ),

  'S9LSDL-w10-quiz': L(
    'Phong trào cách mạng 1930-1931 và Xô viết Nghệ - Tĩnh',
    'Cao trào cách mạng đầu tiên do Đảng lãnh đạo.',
    ['Hiểu phong trào 1930-1931.', 'Đánh giá ý nghĩa Xô viết Nghệ Tĩnh.'],
    [
      { h: 'Phong trào 1930-1931' },
      { ul: ['Bùng nổ trên toàn quốc.', 'Đỉnh điểm: Xô viết Nghệ - Tĩnh (9-10/1930) — chính quyền cách mạng đầu tiên do dân thành lập.'] },
      { h: 'Xô viết Nghệ Tĩnh' },
      { ul: ['Bãi bỏ thuế, chia ruộng đất.', 'Tổ chức học chữ Quốc ngữ.', 'Bảo vệ dân quyền.'] },
      { h: 'Bị đàn áp' },
      { p: 'Pháp đàn áp dã man, đến cuối 1931 phong trào tạm lắng.' },
      { note: 'Xô viết Nghệ Tĩnh là cuộc "tổng diễn tập" cho Cách mạng tháng Tám 1945.' },
    ],
    [
      { q: 'Xô viết Nghệ Tĩnh kéo dài bao lâu?', a: 'Khoảng 5-6 tháng, từ 9/1930 đến đầu 1931.' },
      { q: 'Ý nghĩa Xô viết Nghệ Tĩnh?', a: 'Khẳng định vai trò lãnh đạo của Đảng, là cuộc tổng diễn tập cho CMT8.' },
    ]
  ),

  'S9LSDL-w11-quiz': L(
    'Cách mạng tháng Tám 1945',
    'Sự kiện vĩ đại nhất của lịch sử cách mạng VN — giành độc lập.',
    ['Hiểu thời cơ + chuẩn bị.', 'Nắm diễn biến CMT8.'],
    [
      { h: 'Thời cơ' },
      { ul: ['Phát xít Nhật đầu hàng Đồng minh (15/8/1945).', 'Đảng đã chuẩn bị suốt từ Hội nghị TW 8 (5/1941).', 'Cao trào kháng Nhật cứu nước.'] },
      { h: 'Tổng khởi nghĩa' },
      { ul: ['13-15/8: Hội nghị toàn quốc của Đảng quyết định tổng khởi nghĩa.', '14-18/8: nhân dân khởi nghĩa thắng lợi.', '19/8: thắng lợi tại Hà Nội.', '23/8: Huế.', '25/8: Sài Gòn.', '02/9/1945: Bác Hồ đọc Tuyên ngôn Độc lập tại Ba Đình.'] },
      { note: 'CMT8 là cuộc cách mạng giải phóng dân tộc thắng lợi đầu tiên do giai cấp công nhân lãnh đạo.' },
    ],
    [
      { q: 'Ngày Cách mạng tháng Tám thắng lợi tại HN?', a: '19/8/1945.' },
      { q: 'Ngày tuyên bố độc lập?', a: '02/9/1945 tại Quảng trường Ba Đình.' },
    ]
  ),

  'S9LSDL-w12-quiz': L(
    'Việt Nam 1945-1946 — Bảo vệ chính quyền',
    'Năm đầu tiên đầy gian khổ của nước VNDCCH.',
    ['Hiểu khó khăn sau CMT8.', 'Nắm các biện pháp giải quyết.'],
    [
      { h: 'Khó khăn' },
      { ul: ['Giặc đói: hậu quả nạn đói Ất Dậu.', 'Giặc dốt: 90% mù chữ.', 'Giặc ngoại xâm: Pháp, Tưởng, Anh.', 'Tài chính: kho bạc trống rỗng.'] },
      { h: 'Biện pháp' },
      { ul: ['Diệt giặc đói: Tuần lễ vàng, hũ gạo cứu đói.', 'Diệt giặc dốt: bình dân học vụ.', 'Đối ngoại khéo léo: ký Hiệp định Sơ bộ 6/3/1946 + Tạm ước 14/9/1946 với Pháp để loại Tưởng.', 'Bầu Quốc hội đầu tiên (6/1/1946).'] },
      { note: 'Đây là thời kỳ đối phó với "ngàn cân treo sợi tóc" của VNDCCH.' },
    ],
    [
      { q: 'Quốc hội VNDCCH bầu cử đầu tiên?', a: '06/01/1946.' },
      { q: 'Hiệp định Sơ bộ ký năm?', a: '06/3/1946.' },
    ]
  ),

  'S9LSDL-w13-quiz': L(
    'Kháng chiến chống Pháp 1946-1954',
    'Cuộc kháng chiến trường kỳ chống thực dân Pháp.',
    ['Hiểu đường lối kháng chiến.', 'Biết các chiến dịch lớn.'],
    [
      { h: 'Đường lối kháng chiến' },
      { ul: ['Toàn dân, toàn diện, lâu dài, tự lực cánh sinh.', 'Bác Hồ kêu gọi toàn quốc kháng chiến 19/12/1946.'] },
      { h: 'Các chiến dịch lớn' },
      { ul: ['Việt Bắc Thu-Đông 1947: bảo vệ căn cứ địa.', 'Biên giới 1950: khai thông biên giới Việt-Trung.', 'Tây Bắc 1952.', 'Thượng Lào 1953.', 'Điện Biên Phủ 1954: chiến thắng quyết định.'] },
      { h: 'Điện Biên Phủ' },
      { ul: ['07/5/1954: cờ "Quyết chiến quyết thắng" tung bay trên hầm De Castries.', '"Điện Biên Phủ chấn động địa cầu".'] },
      { note: 'Hiệp định Geneva 21/7/1954 chia VN thành 2 miền tại vĩ tuyến 17.' },
    ],
    [
      { q: 'Chiến dịch Điện Biên Phủ thắng lợi ngày?', a: '07/5/1954.' },
      { q: 'Hiệp định Geneva ký ngày?', a: '21/7/1954.' },
    ]
  ),

  'S9LSDL-w14-quiz': L(
    'Việt Nam 1954-1975 — Kháng chiến chống Mỹ',
    'Cuộc kháng chiến chống Mỹ, cứu nước — kéo dài 21 năm.',
    ['Hiểu chiến lược cách mạng VN giai đoạn này.', 'Biết các sự kiện lớn.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Miền Bắc: xây dựng CNXH, là hậu phương lớn.', 'Miền Nam: cách mạng dân tộc dân chủ.', 'Khẩu hiệu: "Tất cả cho tiền tuyến, tất cả vì miền Nam ruột thịt".'] },
      { h: 'Các chiến lược của Mỹ' },
      { ul: ['1954-1960: "chiến tranh đơn phương" của Ngô Đình Diệm.', '1961-1965: "chiến tranh đặc biệt".', '1965-1968: "chiến tranh cục bộ".', '1969-1973: "Việt Nam hoá chiến tranh".'] },
      { h: 'Các thắng lợi lớn của ta' },
      { ul: ['Tết Mậu Thân 1968.', '"Điện Biên Phủ trên không" 12/1972.', 'Hiệp định Paris 27/01/1973.', 'Đại thắng mùa Xuân 1975 (Tây Nguyên - Huế-Đà Nẵng - Sài Gòn).'] },
      { note: '30/4/1975 — đất nước hoàn toàn thống nhất.' },
    ],
    [
      { q: '30/4/1975 đánh dấu gì?', a: 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước.' },
      { q: 'Hiệp định Paris ký?', a: '27/01/1973, Mỹ rút khỏi VN.' },
    ]
  ),

  'S9LSDL-w15-quiz': L(
    'Việt Nam sau 1975 — Đổi mới và hội nhập',
    'Đất nước thống nhất và quá trình Đổi mới.',
    ['Hiểu đường lối Đổi mới.', 'Biết thành tựu sau Đổi mới.'],
    [
      { h: '1975-1986: Thời kỳ bao cấp' },
      { ul: ['Khôi phục đất nước sau chiến tranh.', 'Khó khăn do mô hình kế hoạch hoá + cấm vận.'] },
      { h: 'Đổi mới (từ 1986)' },
      { ul: ['Đại hội VI (12/1986) đề ra đường lối Đổi mới.', 'Chuyển sang kinh tế thị trường định hướng XHCN.', 'Mở cửa, hội nhập quốc tế.'] },
      { h: 'Thành tựu' },
      { ul: ['Kinh tế: tăng trưởng cao, từ nước nghèo lên thu nhập trung bình.', 'Đối ngoại: gia nhập ASEAN (1995), WTO (2007), CPTPP, EVFTA...', 'Đời sống nhân dân được cải thiện.'] },
      { note: 'Đổi mới là cuộc cải cách toàn diện đưa VN tiến vào thế kỷ 21.' },
    ],
    [
      { q: 'Đại hội Đảng đề ra Đổi mới?', a: 'Đại hội VI, tháng 12/1986.' },
      { q: 'VN gia nhập WTO năm?', a: '2007.' },
    ]
  ),

  'S9LSDL-w16-quiz': L(
    'Ôn tập HK1 — Lịch sử',
    'Tổng hợp lịch sử thế giới + Việt Nam HK1.',
    ['Hệ thống các mốc lịch sử.', 'Liên kết các sự kiện.'],
    [
      { h: 'Mốc lịch sử quan trọng' },
      { ul: ['1945: Thế chiến II kết thúc, CMT8 thành công, VN tuyên bố độc lập.', '1954: chiến thắng Điện Biên Phủ, Hiệp định Geneva.', '1975: thống nhất VN.', '1986: Đổi mới.', '1989-1991: sụp đổ XHCN Đông Âu - Liên Xô.'] },
      { note: 'Liên hệ giữa lịch sử thế giới và VN giúp hiểu sâu hơn.' },
    ],
    [
      { q: 'Sự kiện cùng năm 1945 ở thế giới và VN?', a: 'Thế giới: Thế chiến II kết thúc; VN: Cách mạng tháng Tám.' },
      { q: 'Năm Đổi mới của VN trùng với gì ở Liên Xô?', a: '1986 — Liên Xô bắt đầu Perestroika (1985-1986).' },
    ]
  ),

  'S9LSDL-w17-quiz': L(
    'Địa lý — Vị trí, giới hạn lãnh thổ Việt Nam',
    'Bước vào phần Địa lý — kiến thức về đất nước.',
    ['Nắm vị trí địa lý VN.', 'Hiểu ý nghĩa địa - chính trị.'],
    [
      { h: 'Vị trí' },
      { ul: ['Đông Nam Á, ven Biển Đông.', 'Vĩ độ: 8°34\' - 23°23\' Bắc.', 'Kinh độ: 102°09\' - 109°24\' Đông.'] },
      { h: 'Giới hạn lãnh thổ' },
      { ul: ['Bắc giáp Trung Quốc.', 'Tây giáp Lào, Campuchia.', 'Đông giáp Biển Đông.', 'Diện tích đất liền ~331.000 km².', 'Biển ~1 triệu km².'] },
      { h: 'Ý nghĩa vị trí' },
      { ul: ['Cầu nối ĐNÁ lục địa - hải đảo.', 'Vị trí chiến lược ở Biển Đông.', 'Nhiều tài nguyên thiên nhiên.'] },
      { note: 'Hoàng Sa và Trường Sa là phần không thể tách rời lãnh thổ VN.' },
    ],
    [
      { q: 'Cực Bắc VN ở đâu?', a: 'Đỉnh Lũng Cú, Hà Giang (23°23\' Bắc).' },
      { q: 'Cực Nam VN ở đâu?', a: 'Mũi Cà Mau (8°34\' Bắc).' },
    ]
  ),

  'S9LSDL-w18-quiz': L(
    'Ôn tập HK1 — Tổng hợp Sử + Địa',
    'Hệ thống cả lịch sử và địa lý HK1.',
    ['Liên kết Lịch sử và Địa lý.', 'Vận dụng vào bài tập.'],
    [
      { h: 'Trọng tâm' },
      { ul: ['Lịch sử: VN từ 1919-1986.', 'Địa lý: vị trí, ranh giới lãnh thổ.'] },
      { note: 'Sử + Địa đều dùng phân tích đa chiều — không học thuộc lòng.' },
    ],
    [
      { q: 'Vì sao vị trí địa lý VN có ý nghĩa chính trị quan trọng?', a: 'Nằm ở cửa ngõ ĐNÁ + Biển Đông, là tuyến đường biển quốc tế quan trọng.' },
      { q: 'Sự kiện 1986 ở VN?', a: 'Đại hội VI Đảng đề ra đường lối Đổi mới.' },
    ]
  ),

  'S9LSDL-w19-quiz': L(
    'Địa hình Việt Nam',
    'Đặc điểm địa hình Việt Nam và tác động tới phát triển.',
    ['Nắm đặc điểm địa hình.', 'Phân biệt các vùng địa hình.'],
    [
      { h: 'Đặc điểm chung' },
      { ul: ['3/4 diện tích là đồi núi (chủ yếu thấp).', '1/4 đồng bằng (lớn nhất là sông Hồng, Cửu Long).', 'Hướng chính: Tây Bắc - Đông Nam.'] },
      { h: 'Các vùng địa hình' },
      { ul: ['Tây Bắc: núi cao (Fansipan 3147m), hùng vĩ.', 'Đông Bắc: núi thấp, hình cánh cung.', 'Bắc Trường Sơn: hẹp ngang, ven biển.', 'Nam Trường Sơn + Tây Nguyên: cao nguyên rộng.', 'Đồng bằng sông Hồng + sông Cửu Long.'] },
      { note: 'Địa hình đa dạng tạo nhiều cảnh quan và tiềm năng kinh tế.' },
    ],
    [
      { q: 'Đỉnh cao nhất VN?', a: 'Fansipan, 3147m, thuộc dãy Hoàng Liên Sơn (Lào Cai).' },
      { q: 'Đồng bằng lớn nhất VN?', a: 'Đồng bằng sông Cửu Long, ~40.000 km².' },
    ]
  ),

  'S9LSDL-w20-quiz': L(
    'Khí hậu Việt Nam',
    'Khí hậu VN với đặc điểm nhiệt đới ẩm gió mùa.',
    ['Nắm đặc điểm khí hậu VN.', 'Hiểu tác động đến đời sống.'],
    [
      { h: 'Đặc điểm khí hậu' },
      { ul: ['Nhiệt đới ẩm gió mùa.', 'Nhiệt độ cao quanh năm (trung bình > 21°C).', 'Lượng mưa lớn (1500-2000mm/năm).', 'Gió mùa Đông Bắc (mùa đông) + Tây Nam (mùa hạ).'] },
      { h: 'Phân hoá' },
      { ul: ['Bắc: 4 mùa rõ rệt (xuân, hạ, thu, đông).', 'Nam: 2 mùa (mưa, khô).', 'Vùng núi: lạnh hơn theo độ cao.'] },
      { note: 'VN chịu nhiều thiên tai: bão, lũ, hạn, mặn xâm nhập.' },
    ],
    [
      { q: 'Khí hậu miền Bắc khác miền Nam ở?', a: 'Miền Bắc có mùa đông lạnh (do gió mùa Đông Bắc); miền Nam chỉ có 2 mùa mưa khô.' },
      { q: 'Mùa mưa miền Nam vào?', a: 'Tháng 5-11 (khi có gió mùa Tây Nam).' },
    ]
  ),

  'S9LSDL-w21-quiz': L(
    'Sông ngòi và biển Việt Nam',
    'Hệ thống sông ngòi và Biển Đông — nguồn tài nguyên quan trọng.',
    ['Hiểu mạng lưới sông ngòi.', 'Biết tiềm năng biển VN.'],
    [
      { h: 'Sông ngòi' },
      { ul: ['Mạng lưới dày đặc (>2360 sông dài hơn 10km).', 'Hướng chính: Tây Bắc - Đông Nam.', 'Các sông lớn: sông Hồng, Cửu Long, Đà, Mê Kông.', 'Lưu lượng nước lớn, phù sa nhiều.'] },
      { h: 'Biển Đông' },
      { ul: ['Diện tích biển VN ~1 triệu km².', 'Bờ biển dài 3260 km.', 'Nhiều đảo: Hoàng Sa, Trường Sa, Phú Quốc, Côn Đảo.', 'Tài nguyên: thuỷ sản, dầu khí, du lịch.'] },
      { note: 'Biển Đông có vị trí chiến lược về kinh tế và an ninh.' },
    ],
    [
      { q: 'Sông dài nhất chảy qua VN?', a: 'Sông Cửu Long (Mê Kông), tổng dài ~4350 km (qua VN ~230 km).' },
      { q: 'Bờ biển VN dài bao nhiêu?', a: '3260 km.' },
    ]
  ),

  'S9LSDL-w22-quiz': L(
    'Dân cư và lao động Việt Nam',
    'Dân số và đặc điểm lao động — yếu tố quyết định phát triển.',
    ['Nắm đặc điểm dân số.', 'Hiểu vấn đề lao động.'],
    [
      { h: 'Dân số' },
      { ul: ['Trên 100 triệu người (2024).', 'Đứng thứ 15 thế giới, thứ 3 ĐNÁ.', '54 dân tộc, đa số là Kinh.', 'Phân bố không đều: tập trung đồng bằng, ven biển.'] },
      { h: 'Cơ cấu' },
      { ul: ['"Cơ cấu vàng": tỉ lệ trong độ tuổi lao động cao.', 'Đang già hoá nhanh.'] },
      { h: 'Lao động' },
      { ul: ['Lực lượng lao động đông đảo.', 'Năng suất lao động còn thấp.', 'Cần nâng cao chất lượng nguồn nhân lực.'] },
      { note: 'Tận dụng "cơ cấu vàng" trước khi già hoá là thách thức lớn.' },
    ],
    [
      { q: 'VN có bao nhiêu dân tộc?', a: '54 dân tộc.' },
      { q: '"Cơ cấu dân số vàng" nghĩa là gì?', a: 'Tỉ lệ người trong độ tuổi lao động (15-64) chiếm 2/3 dân số trở lên.' },
    ]
  ),

  'S9LSDL-w23-quiz': L(
    'Nông nghiệp Việt Nam',
    'Nông nghiệp — ngành kinh tế truyền thống và quan trọng.',
    ['Nắm đặc điểm nông nghiệp.', 'Hiểu sản phẩm chính.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Chiếm ~12% GDP, ~30% lao động.', 'Phát triển toàn diện: trồng trọt + chăn nuôi + thuỷ sản.', 'Đang chuyển dịch sang nông nghiệp công nghệ cao.'] },
      { h: 'Sản phẩm chính' },
      { ul: ['Lúa: VN là 1 trong những nước xuất khẩu gạo hàng đầu.', 'Cà phê: thứ 2 thế giới (sau Brazil).', 'Hồ tiêu, điều, cao su, tôm cá đứng top thế giới.'] },
      { note: 'Nông nghiệp cần chuyển đổi sang sản xuất bền vững + an toàn thực phẩm.' },
    ],
    [
      { q: 'VN xếp thứ mấy về xuất khẩu cà phê?', a: 'Thứ 2 thế giới sau Brazil.' },
      { q: 'Đồng bằng nào sản xuất lúa nhiều nhất?', a: 'Đồng bằng sông Cửu Long.' },
    ]
  ),

  'S9LSDL-w24-quiz': L(
    'Công nghiệp Việt Nam',
    'Công nghiệp đang chuyển dịch nhanh và đa dạng.',
    ['Nắm cơ cấu công nghiệp.', 'Hiểu xu hướng phát triển.'],
    [
      { h: 'Cơ cấu' },
      { ul: ['Công nghiệp chế biến (lớn nhất).', 'Công nghiệp khai khoáng.', 'Sản xuất điện - khí - nước.', 'Xây dựng.'] },
      { h: 'Ngành mũi nhọn' },
      { ul: ['Điện tử (Samsung, LG đầu tư lớn).', 'Dệt may, da giày.', 'Chế biến thuỷ sản.', 'Lắp ráp ô tô.'] },
      { h: 'Xu hướng' },
      { ul: ['Chuyển từ gia công sang sản xuất giá trị cao.', 'Phát triển công nghiệp hỗ trợ.', 'Công nghiệp 4.0 (AI, IoT).'] },
      { note: 'VN đang trở thành "công xưởng" của khu vực + thế giới.' },
    ],
    [
      { q: 'Mặt hàng xuất khẩu lớn nhất VN?', a: 'Điện thoại + linh kiện điện tử.' },
      { q: 'Công ty nước ngoài lớn nhất tại VN?', a: 'Samsung (Hàn Quốc).' },
    ]
  ),

  'S9LSDL-w25-quiz': L(
    'Dịch vụ Việt Nam',
    'Dịch vụ là ngành đóng góp lớn cho GDP.',
    ['Hiểu vai trò dịch vụ.', 'Biết các ngành dịch vụ chính.'],
    [
      { h: 'Vai trò' },
      { ul: ['Chiếm trên 40% GDP.', 'Tạo nhiều việc làm.', 'Là ngành phát triển mạnh.'] },
      { h: 'Các ngành chính' },
      { ul: ['Du lịch: 17 triệu khách quốc tế (2023), kỳ vọng vượt 18 triệu.', 'Giao thông vận tải.', 'Tài chính - ngân hàng.', 'Bưu chính viễn thông.', 'Thương mại.'] },
      { h: 'Du lịch' },
      { ul: ['Điểm đến nổi tiếng: Hạ Long, Hội An, Phú Quốc, Đà Nẵng, Sa Pa.', 'Du lịch sinh thái, văn hoá, biển đảo.'] },
      { note: 'Dịch vụ là ngành mũi nhọn của các nước phát triển.' },
    ],
    [
      { q: 'Di sản UNESCO của VN?', a: 'Vịnh Hạ Long, Hội An, Mỹ Sơn, Phong Nha-Kẻ Bàng, Cố đô Huế, Hoàng thành Thăng Long, Thành nhà Hồ, Tràng An.' },
      { q: 'Sân bay quốc tế lớn nhất VN?', a: 'Tân Sơn Nhất (TP.HCM).' },
    ]
  ),

  'S9LSDL-w26-quiz': L(
    'Vùng Trung du và miền núi Bắc Bộ',
    'Vùng kinh tế đặc thù với thế mạnh khai khoáng + thuỷ điện.',
    ['Hiểu đặc điểm vùng.', 'Biết thế mạnh kinh tế.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Diện tích lớn nhất (chiếm 1/3 cả nước).', 'Địa hình núi cao, nhiều dân tộc thiểu số.', 'Khí hậu mát mẻ (Sa Pa, Mộc Châu).'] },
      { h: 'Thế mạnh' },
      { ul: ['Thuỷ điện (sông Đà - Sơn La, Hoà Bình).', 'Khai khoáng (than Quảng Ninh, sắt Thái Nguyên).', 'Cây công nghiệp (chè, hồi, quế).', 'Du lịch (Sa Pa, Hạ Long).'] },
      { note: 'Vùng còn nhiều khó khăn về cơ sở hạ tầng và đời sống.' },
    ],
    [
      { q: 'Thuỷ điện lớn nhất VN?', a: 'Nhà máy thuỷ điện Sơn La (sông Đà), công suất 2400 MW.' },
      { q: 'Mỏ than lớn nhất?', a: 'Quảng Ninh.' },
    ]
  ),

  'S9LSDL-w27-quiz': L(
    'Đồng bằng sông Hồng',
    'Vùng kinh tế trọng điểm phía Bắc, có Hà Nội.',
    ['Hiểu đặc điểm ĐBSH.', 'Biết thế mạnh + thách thức.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Diện tích nhỏ (~15.000 km²) nhưng dân đông (~21 triệu).', 'Mật độ dân số cao nhất nước.', 'Hà Nội là thủ đô, trung tâm chính trị - văn hoá - kinh tế.'] },
      { h: 'Thế mạnh' },
      { ul: ['Đồng bằng phì nhiêu, sản xuất lúa lớn.', 'Công nghiệp phát triển: cơ khí, điện tử, dệt may.', 'Trung tâm giáo dục, văn hoá.'] },
      { h: 'Thách thức' },
      { ul: ['Đất chật người đông.', 'Ô nhiễm môi trường.', 'Thiếu việc làm.'] },
      { note: 'ĐBSH là vùng kinh tế trọng điểm Bắc Bộ.' },
    ],
    [
      { q: 'Vùng có mật độ dân số cao nhất?', a: 'Đồng bằng sông Hồng.' },
      { q: 'Thủ đô VN nằm ở vùng nào?', a: 'Đồng bằng sông Hồng.' },
    ]
  ),

  'S9LSDL-w28-quiz': L(
    'Bắc Trung Bộ + Duyên hải Nam Trung Bộ',
    'Hai vùng ven biển miền Trung với cấu trúc địa lý đặc biệt.',
    ['Phân biệt hai vùng.', 'Hiểu thế mạnh kinh tế biển.'],
    [
      { h: 'Bắc Trung Bộ' },
      { ul: ['Từ Thanh Hoá đến Huế (sau sáp nhập 2025: Thanh Hoá, Nghệ An, Hà Tĩnh, Quảng Trị, Huế).', 'Hẹp ngang, dãy Trường Sơn án ngữ.', 'Chịu nhiều thiên tai (bão, lũ).', 'Du lịch: Huế (cố đô), Phong Nha - Kẻ Bàng (nay thuộc Quảng Trị).'] },
      { h: 'Duyên hải miền Trung (phía Nam)' },
      { ul: ['Sau sáp nhập 2025: Đà Nẵng, Quảng Ngãi, Gia Lai, Khánh Hoà.', 'Bờ biển dài, nhiều vũng, vịnh.', 'Thuỷ sản phát triển.', 'Du lịch biển: Đà Nẵng, Nha Trang, Quy Nhơn.'] },
      { note: 'Từ 2025, Bắc Trung Bộ và Duyên hải miền Trung là MỘT vùng kinh tế – xã hội. Vùng giáp Lào - giáp Biển Đông, có vị trí chiến lược.' },
    ],
    [
      { q: 'Cố đô của VN ở đâu?', a: 'Huế (Thừa Thiên Huế).' },
      { q: 'Thành phố ven biển có Đà Nẵng thuộc vùng?', a: 'Duyên hải Nam Trung Bộ.' },
    ]
  ),

  'S9LSDL-w29-quiz': L(
    'Tây Nguyên + Đông Nam Bộ',
    'Hai vùng có thế mạnh đặc biệt: Tây Nguyên cà phê, Đông Nam Bộ công nghiệp.',
    ['Hiểu đặc điểm hai vùng.', 'Biết kinh tế chủ lực.'],
    [
      { h: 'Tây Nguyên' },
      { ul: ['Sau sáp nhập 2025 gồm 2 tỉnh: Đắk Lắk và Lâm Đồng (Kon Tum→Quảng Ngãi, Đắk Nông→Lâm Đồng, Gia Lai về vùng DHMT).', 'Cao nguyên rộng, đất bazan phì nhiêu.', 'Sản xuất cà phê hàng đầu.', 'Đa dạng dân tộc thiểu số.'] },
      { h: 'Đông Nam Bộ' },
      { ul: ['Sau sáp nhập 2025 gồm 3 đơn vị: TP.HCM, Đồng Nai, Tây Ninh.', 'Vùng kinh tế lớn nhất nước.', 'Công nghiệp + dịch vụ phát triển.', 'TP.HCM là trung tâm kinh tế lớn nhất.'] },
      { note: 'Đông Nam Bộ là đầu tàu kinh tế VN.' },
    ],
    [
      { q: 'TP.HCM có tên cũ?', a: 'Sài Gòn (đổi tên ngày 02/7/1976).' },
      { q: 'Đỉnh cao nhất Tây Nguyên?', a: 'Đỉnh Ngọc Linh (Kon Tum), ~2598m.' },
    ]
  ),

  'S9LSDL-w30-quiz': L(
    'Đồng bằng sông Cửu Long',
    'Vựa lúa, thuỷ sản của VN — vùng kinh tế trọng điểm phía Nam.',
    ['Hiểu đặc điểm ĐBSCL.', 'Biết thách thức biến đổi khí hậu.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Diện tích ~40.000 km², lớn nhất VN.', 'Đất phù sa màu mỡ.', 'Mạng lưới sông ngòi dày đặc.', 'Vựa lúa quan trọng nhất.'] },
      { h: 'Thế mạnh' },
      { ul: ['Lúa: 50% sản lượng cả nước.', 'Thuỷ sản: tôm, cá tra xuất khẩu.', 'Trái cây nhiệt đới.'] },
      { h: 'Thách thức' },
      { ul: ['Biến đổi khí hậu, nước biển dâng.', 'Mặn xâm nhập.', 'Sụt lún do khai thác nước ngầm.'] },
      { note: 'ĐBSCL là vùng dễ tổn thương nhất do biến đổi khí hậu ở VN.' },
    ],
    [
      { q: 'Vùng sản xuất lúa lớn nhất VN?', a: 'Đồng bằng sông Cửu Long.' },
      { q: 'Cá tra (basa) xuất khẩu nhiều ở?', a: 'ĐBSCL — Cần Thơ, An Giang, Đồng Tháp.' },
    ]
  ),

  'S9LSDL-w31-quiz': L(
    'Biển Đông + chủ quyền Hoàng Sa, Trường Sa',
    'Vấn đề biển đảo — chủ quyền thiêng liêng của Tổ quốc.',
    ['Hiểu vị trí + tài nguyên Biển Đông.', 'Nắm chủ quyền của VN với HS, TS.'],
    [
      { h: 'Biển Đông' },
      { ul: ['Diện tích ~3,5 triệu km² (VN ~1 triệu km²).', 'Vị trí chiến lược: tuyến đường biển quốc tế.', 'Tài nguyên: thuỷ sản, dầu khí, du lịch.'] },
      { h: 'Hoàng Sa, Trường Sa' },
      { ul: ['Hoàng Sa: ~30 đảo, đá, bãi cạn (Đà Nẵng).', 'Trường Sa: ~100 đảo, đá, bãi (Khánh Hoà).', 'VN có chủ quyền từ thế kỷ 17 (Triều Nguyễn).'] },
      { h: 'Bảo vệ chủ quyền' },
      { ul: ['Đấu tranh pháp lý.', 'Hợp tác quốc tế.', 'Tuyên truyền chủ quyền.'] },
      { note: 'Bảo vệ chủ quyền biển đảo là trách nhiệm thiêng liêng của mọi công dân.' },
    ],
    [
      { q: 'Hoàng Sa thuộc tỉnh/thành phố nào?', a: 'TP Đà Nẵng.' },
      { q: 'Trường Sa thuộc tỉnh?', a: 'Khánh Hoà.' },
    ]
  ),

  'S9LSDL-w32-quiz': L(
    'Việt Nam — Hội nhập quốc tế',
    'Quá trình hội nhập của VN vào khu vực và thế giới.',
    ['Hiểu các tổ chức VN tham gia.', 'Đánh giá thành tựu hội nhập.'],
    [
      { h: 'Hội nhập khu vực' },
      { ul: ['ASEAN (1995): cộng đồng kinh tế ĐNA.', 'AFTA: khu vực thương mại tự do ASEAN.', 'ACMECS, GMS: tiểu vùng Mê Kông.'] },
      { h: 'Hội nhập toàn cầu' },
      { ul: ['APEC (1998): hợp tác kinh tế châu Á-Thái Bình Dương.', 'WTO (2007): tổ chức thương mại thế giới.', 'CPTPP (2018), EVFTA (2020), RCEP (2022).'] },
      { h: 'Thành tựu' },
      { ul: ['Mở rộng thị trường xuất khẩu.', 'Thu hút FDI.', 'Nâng cao vị thế quốc tế.'] },
      { note: 'Hội nhập là động lực phát triển nhưng cũng đặt ra nhiều thách thức cho doanh nghiệp nội địa.' },
    ],
    [
      { q: 'VN gia nhập ASEAN năm?', a: '28/7/1995.' },
      { q: 'CPTPP là gì?', a: 'Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương — VN ký 2018.' },
    ]
  ),

  'S9LSDL-w33-quiz': L(
    'Ôn tập tổng hợp Sử + Địa',
    'Hệ thống toàn bộ kiến thức cuối cấp.',
    ['Liên kết Sử và Địa.', 'Vận dụng giải bài.'],
    [
      { h: 'Liên kết' },
      { ul: ['Vị trí địa lý ảnh hưởng lịch sử (như VN nằm giữa các cường quốc).', 'Lịch sử quyết định kinh tế hiện tại (Đổi mới 1986 → phát triển).', 'Tài nguyên thiên nhiên ảnh hưởng phát triển vùng.'] },
      { note: 'Cách nhìn liên môn giúp hiểu sâu hơn về đất nước và thế giới.' },
    ],
    [
      { q: 'Vì sao VN đa dạng văn hoá?', a: 'Vị trí giao thoa nhiều nền văn minh + 54 dân tộc + lịch sử dài.' },
      { q: 'Tại sao ĐBSCL phát triển lúa nước?', a: 'Đất phù sa màu mỡ + khí hậu nhiệt đới + sông ngòi dày đặc.' },
    ]
  ),

  'S9LSDL-w34-quiz': L(
    'Việt Nam tương lai — Tầm nhìn 2045',
    'Mục tiêu phát triển VN đến 2045 — kỷ niệm 100 năm độc lập.',
    ['Hiểu các mục tiêu chiến lược.', 'Vai trò thế hệ trẻ.'],
    [
      { h: 'Mục tiêu 2045' },
      { ul: ['Trở thành nước phát triển, thu nhập cao.', 'GDP bình quân đầu người ~18.000 USD.', 'Xã hội văn minh, dân chủ.'] },
      { h: 'Định hướng' },
      { ul: ['Phát triển kinh tế số, kinh tế xanh.', 'Giáo dục + khoa học công nghệ là then chốt.', 'Bảo vệ môi trường, ứng phó BĐKH.', 'Giữ gìn bản sắc văn hoá.'] },
      { h: 'Vai trò thế hệ trẻ' },
      { ul: ['Học tập, rèn luyện toàn diện.', 'Đóng góp cho đất nước.', 'Hội nhập quốc tế.'] },
      { note: 'Học sinh lớp 9 hôm nay sẽ là lực lượng lao động chủ chốt vào 2045.' },
    ],
    [
      { q: 'Năm 2045 đánh dấu gì?', a: '100 năm thành lập nước VNDCCH (1945) — nay là CHXHCN VN.' },
      { q: 'Để chuẩn bị cho VN 2045, HS cần?', a: 'Học giỏi, rèn ngoại ngữ, kỹ năng số, có hoài bão, sống có trách nhiệm.' },
    ]
  ),

  'S9LSDL-w35-quiz': L(
    'Đề ôn thi vào 10 — Sử + Địa',
    'Đề thi thử cuối cùng và chuẩn bị thi.',
    ['Làm đề thi thử.', 'Củng cố tâm lý cho thi.'],
    [
      { h: 'Cấu trúc đề thi' },
      { ul: ['Lịch sử: 50% (5 điểm).', 'Địa lý: 50% (5 điểm).', 'Thời gian: 60 phút (nếu là môn thi thứ 4 độc lập).'] },
      { h: 'Kỹ năng làm bài' },
      { ul: ['Đọc kỹ đề, xác định loại câu hỏi.', 'Trắc nghiệm: loại trừ đáp án sai.', 'Tự luận: lập dàn ý ngắn trước khi viết.', 'Phân bổ thời gian hợp lý.'] },
      { note: 'Tự tin vào kiến thức đã học. Chúc các em đạt kết quả tốt!' },
    ],
    [
      { q: 'Mẹo nhớ lịch sử?', a: 'Hệ thống theo dòng thời gian + liên kết sự kiện. Vẽ sơ đồ tư duy.' },
      { q: 'Mẹo nhớ địa lý?', a: 'Dùng bản đồ + atlat. Liên kết giữa địa hình - khí hậu - kinh tế.' },
    ]
  ),
};
