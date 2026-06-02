// ============================================================
// Lớp 8 · Giáo dục địa phương Hà Nội — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Hà Nội nửa cuối XIX - đầu XX · Văn hoá · Đô thị hiện đại.
// Key: "S8GDDP-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8GDDP_LESSONS = {
  'S8GDDP-w01-quiz': L(
    'Hà Nội trước năm 1873 — Thành Hà Nội thời Nguyễn',
    'Hà Nội đầu thời Nguyễn là trung tâm Bắc Kỳ — thành cổ Vauban tiêu biểu.',
    ['Vị trí Hà Nội thời Nguyễn.', 'Kiến trúc thành Hà Nội.', 'Đời sống dân cư.'],
    [
      { h: 'Hà Nội đầu thời Nguyễn' },
      { p: 'Vua Gia Long (1802) chuyển kinh đô về Phú Xuân (Huế). Thăng Long đổi thành Hà Nội (1831), là trung tâm Bắc Kỳ.' },
      { h: 'Thành Hà Nội' },
      { ul: ['Xây dựng 1805 thời Gia Long.', 'Kiểu thành Vauban (kiểu Pháp) — tường thấp, hào sâu, 5 cửa.', 'Kích thước: ~1.4km x 1.4km.', 'Trung tâm quân sự + hành chính Bắc Kỳ.'] },
      { h: 'Đời sống' },
      { ul: ['36 phố phường thương mại sầm uất.', 'Nho sĩ, quan lại, thương nhân tập trung.', 'Văn hoá vẫn giữ truyền thống Kinh kỳ.'] },
    ],
    [
      { q: 'Vua nào đổi Thăng Long thành Hà Nội?', a: 'Minh Mạng — năm 1831.' },
      { q: 'Thành Hà Nội xây kiểu nào?', a: 'Vauban — kiểu Pháp, tường thấp, hào sâu.' },
    ]
  ),

  'S8GDDP-w02-quiz': L(
    'Pháp xâm chiếm Hà Nội lần 1 (1873) — Nguyễn Tri Phương',
    'Pháp đánh thành Hà Nội lần 1 (1873). Tổng đốc Nguyễn Tri Phương kiên cường hy sinh.',
    ['Bối cảnh.', 'Diễn biến.', 'Anh hùng Nguyễn Tri Phương.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Pháp đã chiếm 6 tỉnh Nam Kỳ (1867). Tiếp tục bắc tiến — viện cớ "vấn đề Jean Dupuis" (lái buôn Pháp).' },
      { h: 'Diễn biến' },
      { ul: ['20/11/1873: Francis Garnier dẫn ~200 quân Pháp đánh thành.', 'Trung tâm chỉ huy: cửa Đông.', 'Sau vài giờ — thành thất thủ.', '21/12/1873: Garnier bị quân Cờ đen (Lưu Vĩnh Phúc) giết ở Cầu Giấy.'] },
      { h: 'Nguyễn Tri Phương' },
      { p: 'Tổng đốc Hà Nội (72 tuổi). Bị thương nặng, từ chối điều trị, tuyệt thực 1 tháng và hy sinh.' },
      { note: '"Tôi không thể sống được nữa khi mất thành" — câu nói nổi tiếng của ông.' },
    ],
    [
      { q: 'Ai chỉ huy đánh thành Hà Nội 1873?', a: 'Francis Garnier (sau bị giết ở Cầu Giấy).' },
      { q: 'Nguyễn Tri Phương hy sinh thế nào?', a: 'Bị thương, tuyệt thực 1 tháng để giữ khí tiết.' },
    ]
  ),

  'S8GDDP-w03-quiz': L(
    'Pháp xâm chiếm Hà Nội lần 2 (1882) — Hoàng Diệu',
    'Pháp đánh Hà Nội lần 2 (1882). Tổng đốc Hoàng Diệu giữ thành, tự vẫn để giữ khí tiết.',
    ['Diễn biến.', 'Hoàng Diệu.', 'Hậu quả.'],
    [
      { h: 'Diễn biến' },
      { ul: ['25/4/1882: Henri Rivière dẫn quân Pháp đánh thành.', 'Quân Việt khoảng 3.000 người chống lại 600 lính Pháp.', 'Pháp dùng pháo phá cửa.', 'Thành thất thủ sau 4-5 giờ.'] },
      { h: 'Hoàng Diệu (1828-1882)' },
      { p: 'Tổng đốc Hà Nội, người Quảng Nam. Khi thành mất, tự thắt cổ tại Võ miếu để không bị bắt làm tù binh.' },
      { h: 'Hậu quả' },
      { p: 'Pháp tăng cường ở Bắc Kỳ. 1883 ký Hiệp ước Hácmăng — VN chính thức thành thuộc địa.' },
    ],
    [
      { q: 'Pháp đánh Hà Nội lần 2 năm nào?', a: '1882.' },
      { q: 'Hoàng Diệu là người tỉnh nào?', a: 'Quảng Nam.' },
    ]
  ),

  'S8GDDP-w04-quiz': L(
    'Hà Nội thời Pháp thuộc — Quy hoạch thuộc địa',
    'Pháp biến Hà Nội thành thủ phủ Đông Dương (1902) — quy hoạch theo kiểu thuộc địa.',
    ['Hà Nội trở thành thủ phủ.', 'Quy hoạch mới.', 'Khu Pháp vs khu Việt.'],
    [
      { h: 'Thủ phủ Liên bang Đông Dương' },
      { p: '1902 — Hà Nội thay Sài Gòn làm thủ phủ Liên bang Đông Dương (gồm VN, Lào, Campuchia).' },
      { h: 'Quy hoạch mới' },
      { ul: ['Phá thành cổ (1894-1897) — chỉ giữ cửa Bắc làm di tích.', 'Mở rộng đường: Pháp đặt tên kiểu Tây (rue Paul Bert = Tràng Tiền).', 'Xây công trình lớn: Phủ Toàn quyền, Nhà hát Lớn, Bưu điện.', 'Vườn cây xanh, công viên.'] },
      { h: 'Khu Pháp vs Khu Việt' },
      { ul: ['Khu Pháp (vùng đường Tràng Tiền, Tràng Thi): biệt thự, đường rộng, vườn.', 'Khu Việt (36 phố phường): chật chội, nhà ống truyền thống.'] },
    ],
    [
      { q: 'Hà Nội thành thủ phủ Đông Dương năm nào?', a: '1902.' },
      { q: 'Thành cổ Hà Nội còn lại gì sau 1897?', a: 'Cửa Bắc — di tích duy nhất, hiện vẫn còn.' },
    ]
  ),

  'S8GDDP-w05-quiz': L(
    'Cầu Long Biên — Biểu tượng kiến trúc Pháp',
    'Cầu Long Biên (1898-1902) — cây cầu thép đầu tiên ở Đông Dương, biểu tượng Hà Nội.',
    ['Lịch sử xây dựng.', 'Đặc điểm kiến trúc.', 'Ý nghĩa.'],
    [
      { h: 'Lịch sử' },
      { ul: ['Xây 1898-1902, dưới thời Toàn quyền Paul Doumer.', 'Kỹ sư thiết kế: Daydé & Pillé (Pháp) — không phải Eiffel như nhiều người tưởng.', 'Tên Pháp: Paul Doumer. Sau 1945 đổi tên Long Biên.', 'Dài 1.682m — cầu dài nhất châu Á thời đó.'] },
      { h: 'Đặc điểm' },
      { ul: ['Khung thép.', '19 nhịp cầu.', 'Đường sắt giữa, hai bên đi bộ + xe đạp.', 'Phong cách Art Nouveau.'] },
      { h: 'Ý nghĩa' },
      { ul: ['Kết nối Hà Nội với Hải Phòng, Lào Cai.', 'Biểu tượng kiến trúc thuộc địa.', 'Chứng nhân các cuộc chiến tranh.', 'Hiện chỉ còn 9 nhịp gốc (do bị bom Mỹ 1967-1972).'] },
    ],
    [
      { q: 'Cầu Long Biên do ai thiết kế?', a: 'Daydé & Pillé (Pháp) — không phải Gustave Eiffel.' },
      { q: 'Cầu Long Biên xây xong năm nào?', a: '1902.' },
    ]
  ),

  'S8GDDP-w06-quiz': L(
    'Nhà hát Lớn Hà Nội',
    'Nhà hát Lớn (1901-1911) — biểu tượng kiến trúc tân cổ điển Pháp ở Hà Nội.',
    ['Lịch sử xây dựng.', 'Kiến trúc.', 'Vai trò văn hoá.'],
    [
      { h: 'Lịch sử' },
      { ul: ['Khởi công 1901, hoàn thành 1911.', 'Mô phỏng Nhà hát Opera Garnier (Paris).', 'Là một trong những nhà hát Opera lớn nhất Đông Nam Á thời đó.'] },
      { h: 'Kiến trúc' },
      { ul: ['Phong cách Tân cổ điển (Neoclassical).', '870 ghế (ban đầu).', 'Trần cao 4 tầng.', 'Mặt tiền: cột Corinth, tượng nghệ thuật.'] },
      { h: 'Vai trò văn hoá' },
      { ul: ['Nơi biểu diễn opera, hoà nhạc, ballet.', 'Ngày 2/9/1945: ngày Quốc khánh đầu tiên — Bác Hồ đọc Tuyên ngôn ở Quảng trường Ba Đình.', '17/8/1945: cuộc mít-tinh giành chính quyền diễn ra trước Nhà hát Lớn.'] },
    ],
    [
      { q: 'Nhà hát Lớn HN mô phỏng nhà hát nào?', a: 'Opera Garnier (Paris).' },
      { q: 'Sự kiện lịch sử ở Nhà hát Lớn năm 1945?', a: '17/8/1945: mít-tinh giành chính quyền.' },
    ]
  ),

  'S8GDDP-w07-quiz': L(
    'Phong trào yêu nước đầu XX tại Hà Nội — Đông Du',
    'Hà Nội là nơi xuất phát phong trào Đông Du (Phan Bội Châu) — gửi học sinh sang Nhật.',
    ['Phan Bội Châu.', 'Phong trào Đông Du.', 'Vai trò Hà Nội.'],
    [
      { h: 'Phan Bội Châu (1867-1940)' },
      { p: 'Nhà yêu nước, lãnh đạo phong trào Đông Du. Người Nghệ An, từng hoạt động tại Hà Nội.' },
      { h: 'Phong trào Đông Du (1905-1909)' },
      { ul: ['Gửi HS Việt sang Nhật học khoa học, quân sự.', 'Mục tiêu: xây dựng lực lượng đánh Pháp.', 'Đỉnh cao: ~200 HS sang Nhật.', '1908: Nhật trục xuất theo yêu cầu Pháp. Phong trào tan.'] },
      { h: 'Hà Nội trong phong trào' },
      { p: 'Nơi tổ chức tuyển HS, quyên góp tiền. Nhiều thanh niên Hà Nội tham gia.' },
    ],
    [
      { q: 'Phong trào Đông Du do ai khởi xướng?', a: 'Phan Bội Châu.' },
      { q: 'Mục tiêu phong trào Đông Du?', a: 'Gửi HS sang Nhật học để về xây lực lượng đánh Pháp.' },
    ]
  ),

  'S8GDDP-w08-quiz': L(
    'Đông Kinh Nghĩa Thục tại Hà Nội (1907)',
    'Đông Kinh Nghĩa Thục — trường học cải lương ở Hà Nội, dù chỉ tồn tại 9 tháng nhưng ảnh hưởng lớn.',
    ['Bối cảnh.', 'Hoạt động.', 'Ý nghĩa.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Đầu XX, các nhà nho yêu nước nhận ra cần canh tân đất nước — học tập Nhật Bản (Khánh Ứng Nghĩa Thục).' },
      { h: 'Đông Kinh Nghĩa Thục (3/1907)' },
      { ul: ['Lập tại số 4 phố Hàng Đào, Hà Nội.', 'Người sáng lập: Lương Văn Can, Nguyễn Quyền.', 'Dạy chữ Quốc ngữ, tiếng Pháp, Toán, Lịch sử, Địa lý.', 'Hô hào: cắt tóc, mặc Tây phục, dùng hàng nội.', 'Tổ chức diễn thuyết, xuất bản sách.'] },
      { h: 'Kết thúc' },
      { p: 'Tháng 11/1907 — Pháp đóng cửa trường. Các lãnh đạo bị tù.' },
      { h: 'Ý nghĩa' },
      { ul: ['Đặt nền cho phong trào canh tân.', 'Phổ biến chữ Quốc ngữ.', 'Khơi gợi tinh thần yêu nước, dân chủ.'] },
    ],
    [
      { q: 'Đông Kinh Nghĩa Thục lập ở đâu?', a: 'Số 4 phố Hàng Đào, Hà Nội — 3/1907.' },
      { q: 'Mục tiêu của Đông Kinh Nghĩa Thục?', a: 'Canh tân đất nước qua giáo dục — dạy chữ Quốc ngữ, kiến thức mới.' },
    ]
  ),

  'S8GDDP-w09-quiz': L(
    'Phong trào duy tân tại Hà Nội — Phan Châu Trinh',
    'Phan Châu Trinh — nhà yêu nước duy tân, chủ trương "khai dân trí, chấn dân khí, hậu dân sinh".',
    ['Phan Châu Trinh.', 'Tư tưởng.', 'Hoạt động.'],
    [
      { h: 'Phan Châu Trinh (1872-1926)' },
      { p: 'Nhà nho yêu nước, người Quảng Nam. Khác Phan Bội Châu (bạo động): ông chọn duy tân ôn hoà.' },
      { h: 'Tư tưởng "Tam dân"' },
      { ul: ['Khai dân trí: mở mang trí tuệ dân.', 'Chấn dân khí: tăng tinh thần dân.', 'Hậu dân sinh: nâng cao đời sống dân.'] },
      { h: 'Hoạt động tại Hà Nội' },
      { ul: ['Diễn thuyết tại Đông Kinh Nghĩa Thục.', 'Viết báo phê phán Pháp.', 'Bị Pháp bắt 1908, đày Côn Đảo, sau ra tù sang Pháp.', '1925: về VN, tổ chức diễn thuyết ở Hà Nội thu hút hàng ngàn người.'] },
    ],
    [
      { q: '"Tam dân" của Phan Châu Trinh gồm gì?', a: 'Khai dân trí - Chấn dân khí - Hậu dân sinh.' },
      { q: 'Phan Châu Trinh khác Phan Bội Châu thế nào?', a: 'PCT: duy tân ôn hoà. PBC: bạo động (Đông Du, Việt Nam Quang Phục Hội).' },
    ]
  ),

  'S8GDDP-w10-quiz': L(
    'Vụ Hà thành đầu độc (1908)',
    'Vụ Hà thành đầu độc 27/6/1908 — âm mưu giết quân Pháp bằng cách đầu độc thức ăn.',
    ['Bối cảnh.', 'Diễn biến.', 'Hậu quả.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Đầu XX, phong trào yêu nước phát triển. Binh sĩ Việt trong quân đội Pháp ngấm tinh thần yêu nước, tổ chức nổi dậy.' },
      { h: 'Diễn biến (27/6/1908)' },
      { ul: ['Đầu bếp Việt trong trại lính Pháp đầu độc cà phê + thức ăn.', '200+ lính Pháp bị ngộ độc.', 'Kế hoạch: lính Pháp gục → quân Cờ đen từ ngoài đánh vào.', 'Nhưng kế hoạch bị lộ → quân Cờ đen không vào kịp.'] },
      { h: 'Hậu quả' },
      { ul: ['~24 lính Việt bị xử tử.', 'Pháp tăng cường giám sát.', 'Tinh thần yêu nước lan rộng — minh chứng "không có thuốc nào trị được lòng yêu nước".'] },
    ],
    [
      { q: 'Vụ Hà thành đầu độc xảy ra năm nào?', a: '27/6/1908.' },
      { q: 'Cách đầu độc?', a: 'Đầu bếp Việt cho thuốc độc vào cà phê và thức ăn lính Pháp.' },
    ]
  ),

  'S8GDDP-w11-quiz': L(
    'Khu phố cổ Hà Nội — 36 phố phường',
    'Khu phố cổ là di sản văn hoá đặc biệt — mỗi phố một nghề.',
    ['Lịch sử 36 phố phường.', 'Đặc điểm nhà ống.', 'Bảo tồn.'],
    [
      { h: 'Lịch sử' },
      { p: 'Hình thành từ thời Lý-Trần. Đến thời Lê-Nguyễn: định hình 36 phố phường, mỗi phố một nghề.' },
      { h: 'Các phố nghề tiêu biểu' },
      { ul: ['Hàng Bạc: thợ bạc, kim hoàn.', 'Hàng Đào: bán lụa.', 'Hàng Gai: bán dây gai.', 'Hàng Mã: đồ hàng mã, vàng mã.', 'Hàng Bồ: làm và bán bồ tre.'] },
      { h: 'Nhà ống' },
      { ul: ['Mặt tiền hẹp 2-4m, sâu 30-60m.', 'Lý do: thuế tính theo mặt tiền.', 'Nhiều sân nhỏ trong nhà cho thoáng.', 'Mặt phố để bán hàng.'] },
      { h: 'Bảo tồn' },
      { p: 'Khu phố cổ Hà Nội — di tích quốc gia (2004). Quy chế nghiêm bảo tồn kiến trúc.' },
    ],
    [
      { q: 'Tại sao nhà ống có mặt tiền hẹp?', a: 'Do thuế đất tính theo chiều rộng mặt tiền — nên nhà hẹp mà sâu.' },
      { q: 'Hàng Bạc bán gì?', a: 'Bạc và đồ trang sức kim hoàn — nghề truyền thống.' },
    ]
  ),

  'S8GDDP-w12-quiz': L(
    'Văn hoá Hà Nội — Thạch Lam và "Hà Nội 36 phố phường"',
    'Thạch Lam (1910-1942) — nhà văn lãng mạn, ghi lại Hà Nội đầu XX bằng văn đẹp.',
    ['Tiểu sử Thạch Lam.', 'Tác phẩm.', '"Hà Nội 36 phố phường".'],
    [
      { h: 'Thạch Lam (1910-1942)' },
      { p: 'Tên thật Nguyễn Tường Vinh (sau đổi Nguyễn Tường Lân). Thành viên Tự Lực Văn Đoàn. Em ruột Nhất Linh, Hoàng Đạo.' },
      { h: 'Phong cách' },
      { ul: ['Văn nhẹ nhàng, tinh tế.', 'Truyện ngắn ngắn nhưng giàu cảm xúc.', 'Quan tâm người nghèo, sinh hoạt thường ngày.'] },
      { h: '"Hà Nội 36 phố phường" (1943)' },
      { ul: ['Tập tản văn, xuất bản sau khi ông mất.', 'Mỗi bài viết về 1 món ăn/phố/cảnh Hà Nội: phở, bún chả, cốm, ốc luộc...', 'Lưu giữ Hà Nội đầu XX bằng văn đẹp.'] },
      { h: 'Câu nói nổi tiếng' },
      { p: '"Phở là một thứ quà đặc biệt của Hà Nội..." — đoạn văn ai cũng nhớ.' },
    ],
    [
      { q: 'Thạch Lam mất năm bao nhiêu tuổi?', a: '32 tuổi (1942) — chết vì lao phổi.' },
      { q: '"Hà Nội 36 phố phường" là loại tác phẩm gì?', a: 'Tản văn — viết về món ăn, phố, cảnh Hà Nội.' },
    ]
  ),

  'S8GDDP-w13-quiz': L(
    'Văn hoá Hà Nội — Nguyễn Tuân và "Vang bóng một thời"',
    'Nguyễn Tuân (1910-1987) — nhà văn lớn, ghi lại văn hoá Hà Nội xưa.',
    ['Tiểu sử.', 'Phong cách.', '"Vang bóng một thời".'],
    [
      { h: 'Nguyễn Tuân (1910-1987)' },
      { p: 'Người Hà Nội. Trước CMT8: viết về văn hoá truyền thống. Sau CMT8: chuyển sang viết theo dòng cách mạng.' },
      { h: 'Phong cách' },
      { ul: ['Ngôn ngữ tinh tế, độc đáo.', 'Hay viết về cái đẹp văn hoá.', 'Nhân vật thường là người tài hoa cuối thời.'] },
      { h: '"Vang bóng một thời" (1940)' },
      { ul: ['Tập truyện ngắn về văn hoá Việt cổ.', 'Các nhân vật tài hoa: chữ thư pháp, uống trà, chơi cờ, làm thơ.', 'Tiếc nuối thời "vàng son" đã qua.'] },
      { h: 'Tác phẩm khác' },
      { ul: ['"Chữ người tử tù" — kiệt tác.', '"Sông Đà" — viết sau CMT8 về Tây Bắc.'] },
    ],
    [
      { q: '"Vang bóng một thời" viết về gì?', a: 'Văn hoá Việt cổ — chữ thư pháp, uống trà, chơi cờ. Tiếc nuối thời vàng son.' },
      { q: 'Tác phẩm nổi tiếng nhất của Nguyễn Tuân?', a: '"Chữ người tử tù" — trong "Vang bóng một thời".' },
    ]
  ),

  'S8GDDP-w14-quiz': L(
    'Làng nghề truyền thống Hà Nội — Lụa Vạn Phúc',
    'Lụa Vạn Phúc (Hà Đông) — làng lụa nghìn năm tuổi của Hà Nội.',
    ['Lịch sử làng Vạn Phúc.', 'Kỹ thuật.', 'Sản phẩm.'],
    [
      { h: 'Lịch sử' },
      { ul: ['Hơn 1.000 năm tuổi.', 'Tổ nghề: bà A Lã Thị Nương.', 'Vạn Phúc nằm bên sông Nhuệ (Hà Đông).', 'Xuất khẩu sang Pháp thế kỷ XIX-XX.'] },
      { h: 'Kỹ thuật' },
      { ul: ['Trồng dâu, nuôi tằm tại chỗ.', 'Kéo tơ thủ công.', 'Dệt khung gỗ truyền thống.', 'Nhuộm bằng thảo mộc tự nhiên.'] },
      { h: 'Sản phẩm nổi tiếng' },
      { ul: ['Lụa Vân: hoa văn nổi.', 'Lụa Lĩnh: dày, trang trọng.', 'Lụa Sa: mỏng, mát.'] },
      { note: 'Hiện làng Vạn Phúc vẫn dệt nhưng đa số dùng máy. Còn vài hộ giữ kỹ thuật thủ công.' },
    ],
    [
      { q: 'Vạn Phúc nằm ở quận nào Hà Nội?', a: 'Hà Đông.' },
      { q: 'Lụa Vân khác lụa Lĩnh?', a: 'Vân: có hoa văn nổi. Lĩnh: dày, trơn, trang trọng.' },
    ]
  ),

  'S8GDDP-w15-quiz': L(
    'Làng nghề truyền thống — Gốm Bát Tràng',
    'Bát Tràng — làng gốm 700 năm tuổi bên sông Hồng.',
    ['Lịch sử.', 'Kỹ thuật.', 'Sản phẩm hiện đại.'],
    [
      { h: 'Lịch sử' },
      { ul: ['Hình thành thời Trần (XIII-XIV).', 'Vị trí: huyện Gia Lâm (nay Hà Nội), bên sông Hồng.', 'Đất sét trắng + đỏ tốt cho làm gốm.', 'Cung cấp gốm cho cung đình Lê, Nguyễn.'] },
      { h: 'Kỹ thuật' },
      { ul: ['Pha đất, lọc cát.', 'Vuốt bằng bàn xoay.', 'Vẽ hoa văn (xanh chàm là đặc trưng).', 'Tráng men.', 'Nung lò gas/điện (xưa nung củi).'] },
      { h: 'Sản phẩm' },
      { ul: ['Bát đĩa truyền thống.', 'Tượng gốm.', 'Bình hoa, ấm chén.', 'Hiện đại: gốm decor, gốm xuất khẩu.'] },
    ],
    [
      { q: 'Bát Tràng có từ thời nào?', a: 'Khoảng thời Trần — XIII-XIV.' },
      { q: 'Đặc trưng hoa văn Bát Tràng?', a: 'Xanh chàm trên nền trắng.' },
    ]
  ),

  'S8GDDP-w16-quiz': L(
    'Làng nghề truyền thống — Đúc đồng Ngũ Xã',
    'Ngũ Xã — làng đúc đồng cổ giữa lòng Hà Nội.',
    ['Lịch sử.', 'Kỹ thuật đúc.', 'Tác phẩm tiêu biểu.'],
    [
      { h: 'Lịch sử' },
      { ul: ['Hình thành thế kỷ XVII (thời Lê).', 'Vị trí: hồ Trúc Bạch, quận Ba Đình.', '5 làng nghệ nhân từ Bắc Ninh đến lập (nên gọi Ngũ Xã).', 'Chuyên đúc chuông, tượng Phật, đồ thờ.'] },
      { h: 'Kỹ thuật đúc đồng' },
      { ul: ['Làm khuôn đất sét.', 'Đốt khuôn cứng.', 'Đun đồng nóng chảy (~1.080°C).', 'Đổ đồng vào khuôn.', 'Đập khuôn, mài, đánh bóng.'] },
      { h: 'Tác phẩm tiêu biểu' },
      { ul: ['Tượng A-di-đà tại chùa Ngũ Xã.', 'Chuông chùa Một Cột (cũ).', 'Đồ thờ cung đình.'] },
    ],
    [
      { q: 'Ngũ Xã ở quận nào HN?', a: 'Ba Đình, bên hồ Trúc Bạch.' },
      { q: 'Đồng nóng chảy ở nhiệt độ nào?', a: 'Khoảng 1.080°C.' },
    ]
  ),

  'S8GDDP-w17-quiz': L(
    'Nông nghiệp đô thị tại Hà Nội',
    'Trong đô thị hoá, Hà Nội vẫn giữ vùng nông nghiệp — xu hướng "nông nghiệp đô thị" hiện đại.',
    ['Vùng nông nghiệp HN.', 'Sản phẩm đặc trưng.', 'Nông nghiệp hiện đại.'],
    [
      { h: 'Vùng nông nghiệp HN' },
      { ul: ['Đông Anh, Sóc Sơn: rau, hoa.', 'Thanh Trì, Thường Tín: lúa, rau.', 'Long Biên, Gia Lâm: hoa, rau.', 'Mê Linh: hoa quả, rau sạch.'] },
      { h: 'Sản phẩm đặc trưng' },
      { ul: ['Hoa Tây Tựu, Mê Linh.', 'Cốm Vòng (Cầu Giấy) — đặc sản truyền thống.', 'Bưởi Diễn, ổi Đông Dư.', 'Rau sạch Vân Nội.'] },
      { h: 'Nông nghiệp hiện đại' },
      { ul: ['Nhà kính, thuỷ canh.', 'Rau quả organic.', 'Du lịch nông nghiệp (vườn dâu, vườn hoa).'] },
    ],
    [
      { q: 'Hoa nổi tiếng nhất HN trồng ở đâu?', a: 'Tây Tựu (Bắc Từ Liêm) và Mê Linh.' },
      { q: 'Cốm Vòng đặc sản từ đâu?', a: 'Làng Vòng (Cầu Giấy) — món cốm xanh truyền thống mùa thu.' },
    ]
  ),

  'S8GDDP-w18-quiz': L(
    'Ôn tập HK1',
    'Hệ thống nội dung HK1: lịch sử HN cận đại + văn hoá + làng nghề.',
    ['Lịch sử HN 1873-1907.', 'Văn hoá HN.', 'Làng nghề.'],
    [
      { h: 'Lịch sử (1873-1907)' },
      { ul: ['Pháp đánh HN lần 1 (1873) — Nguyễn Tri Phương.', 'Pháp đánh HN lần 2 (1882) — Hoàng Diệu.', 'Quy hoạch thuộc địa.', 'Phong trào Đông Du, Đông Kinh Nghĩa Thục, Hà thành đầu độc.'] },
      { h: 'Văn hoá' },
      { ul: ['Cầu Long Biên, Nhà hát Lớn.', '36 phố phường.', 'Thạch Lam, Nguyễn Tuân.'] },
      { h: 'Làng nghề' },
      { ul: ['Lụa Vạn Phúc.', 'Gốm Bát Tràng.', 'Đúc đồng Ngũ Xã.', 'Nông nghiệp HN.'] },
    ],
    [
      { q: '2 anh hùng giữ thành HN?', a: 'Nguyễn Tri Phương (1873) và Hoàng Diệu (1882).' },
      { q: '3 làng nghề HN tiêu biểu?', a: 'Lụa Vạn Phúc, gốm Bát Tràng, đúc đồng Ngũ Xã.' },
    ]
  ),

  'S8GDDP-w19-quiz': L(
    'Phong trào Cần Vương tại Hà Nội và Bắc Bộ',
    'Phong trào Cần Vương (1885-1896) — phong trào yêu nước lớn nhất cuối XIX.',
    ['Hịch Cần Vương.', 'Các cuộc khởi nghĩa ở Bắc Bộ.', 'Vai trò Hà Nội.'],
    [
      { h: 'Hịch Cần Vương (1885)' },
      { p: 'Vua Hàm Nghi và Tôn Thất Thuyết phát hịch kêu gọi nhân dân nổi dậy chống Pháp giúp vua.' },
      { h: 'Khởi nghĩa ở Bắc Bộ' },
      { ul: ['Khởi nghĩa Bãi Sậy (Nguyễn Thiện Thuật) — Hưng Yên, Hải Dương.', 'Khởi nghĩa Ba Đình (Phạm Bành, Đinh Công Tráng) — Thanh Hoá.', 'Khởi nghĩa Hùng Lĩnh (Tống Duy Tân) — Thanh Hoá.'] },
      { h: 'Vai trò HN' },
      { p: 'Hà Nội bị Pháp kiểm soát chặt, nhưng nhiều nho sĩ HN âm thầm ủng hộ Cần Vương qua việc liên lạc, quyên góp.' },
    ],
    [
      { q: 'Vua nào phát hịch Cần Vương?', a: 'Hàm Nghi (cùng Tôn Thất Thuyết).' },
      { q: 'Khởi nghĩa Bãi Sậy do ai lãnh đạo?', a: 'Nguyễn Thiện Thuật.' },
    ]
  ),

  'S8GDDP-w20-quiz': L(
    'Khởi nghĩa Yên Thế (1884-1913) — Đề Thám',
    'Yên Thế — cuộc khởi nghĩa nông dân dài nhất, ác nhất chống Pháp.',
    ['Đề Thám.', 'Diễn biến.', 'Ý nghĩa.'],
    [
      { h: 'Đề Thám (Hoàng Hoa Thám)' },
      { p: 'Lãnh đạo Yên Thế (Bắc Giang). Tên thật Trương Văn Thám. Là nông dân, không phải nho sĩ.' },
      { h: 'Diễn biến' },
      { ul: ['1884: bắt đầu.', '1894-1897: hoà hoãn với Pháp lần 1.', '1898-1908: hoạt động mạnh, đánh nhiều trận.', '1909-1913: Pháp tổng tấn công.', '10/2/1913: Đề Thám bị giết — phong trào chấm dứt.'] },
      { h: 'Ý nghĩa' },
      { ul: ['Kéo dài 29 năm — dài nhất lịch sử chống Pháp.', 'Lực lượng chính là nông dân.', 'Khác Cần Vương ở chỗ không kêu gọi vua.'] },
    ],
    [
      { q: 'Đề Thám hy sinh năm nào?', a: '10/2/1913.' },
      { q: 'Yên Thế khác Cần Vương?', a: 'Yên Thế: lực lượng nông dân, không kêu gọi vua. Cần Vương: nho sĩ, kêu gọi giúp vua.' },
    ]
  ),

  'S8GDDP-w21-quiz': L(
    'Chính sách khai thác thuộc địa Pháp tại HN (1897-1914)',
    'Cuộc khai thác lần 1 (1897-1914) làm thay đổi mạnh kinh tế-xã hội HN.',
    ['Mục đích Pháp.', 'Các lĩnh vực khai thác.', 'Ảnh hưởng HN.'],
    [
      { h: 'Mục đích' },
      { p: 'Bù đắp chiến phí + thu lợi nhuận tối đa cho Pháp. Toàn quyền Paul Doumer chỉ đạo.' },
      { h: 'Lĩnh vực' },
      { ul: ['Nông nghiệp: lập đồn điền cao su, chè, cà phê.', 'Khai mỏ: than (Quảng Ninh), thiếc, sắt.', 'Công nghiệp nhẹ: dệt, gạch, xi măng.', 'Giao thông: đường sắt (HN-Lào Cai, HN-Lạng Sơn), cảng Hải Phòng.', 'Ngân hàng: Đông Dương Ngân hàng.'] },
      { h: 'Ảnh hưởng HN' },
      { ul: ['Phát triển đô thị (xây cầu, đường, nhà).', 'Hình thành giai cấp công nhân.', 'Tư sản người Việt mới hình thành.', 'Đời sống nông dân khó khăn — mất ruộng.'] },
    ],
    [
      { q: 'Cuộc khai thác lần 1 do Toàn quyền nào chủ trương?', a: 'Paul Doumer.' },
      { q: 'Giai cấp mới hình thành ở HN?', a: 'Công nhân và tư sản người Việt.' },
    ]
  ),

  'S8GDDP-w22-quiz': L(
    'Nguyễn Tất Thành ra đi tìm đường cứu nước',
    '5/6/1911 — Nguyễn Tất Thành (sau là Bác Hồ) rời cảng Nhà Rồng tìm đường cứu nước.',
    ['Bối cảnh.', 'Lý do ra đi.', 'Hành trình.'],
    [
      { h: 'Bối cảnh' },
      { p: 'Cuối XIX, các phong trào yêu nước thất bại (Cần Vương, Đông Du, Đông Kinh Nghĩa Thục). Cần con đường mới.' },
      { h: 'Lý do ra đi' },
      { p: 'Nguyễn Tất Thành muốn ra nước ngoài để xem các nước phát triển thế nào, học cách giải phóng đất nước.' },
      { h: 'Hành trình' },
      { ul: ['5/6/1911: rời cảng Nhà Rồng (Sài Gòn) trên tàu Latouche-Tréville làm phụ bếp.', '1911-1917: qua Pháp, Anh, Mỹ, châu Phi.', '1920: đọc "Sơ thảo luận cương về vấn đề dân tộc và thuộc địa" của Lenin → đến với chủ nghĩa Mác-Lênin.', '1920: gia nhập Đảng Cộng sản Pháp — người Việt đầu tiên.'] },
      { h: 'Liên hệ với HN' },
      { p: 'Khi ra đi 1911, Nguyễn Tất Thành chưa lên HN. Nhưng tinh thần ra đi tìm đường ấy là kế thừa của các nho sĩ HN trước.' },
    ],
    [
      { q: 'Ngày Nguyễn Tất Thành ra đi?', a: '5/6/1911.' },
      { q: 'Vai trò trên tàu Latouche-Tréville?', a: 'Phụ bếp (vai trò chính: lao động kiếm sống để học hỏi).' },
    ]
  ),

  'S8GDDP-w23-quiz': L(
    'Văn hoá Hà Nội — Ẩm thực truyền thống',
    'Ẩm thực HN tinh tế, sâu sắc — di sản văn hoá của Thủ đô.',
    ['Các món tiêu biểu.', 'Đặc điểm.', 'Bảo tồn.'],
    [
      { h: 'Các món tiêu biểu' },
      { ul: ['Phở Hà Nội: nước trong, vị thanh, có hành lá.', 'Bún chả: thịt nướng + bún + nước chấm.', 'Chả cá Lã Vọng: cá lăng nướng.', 'Bánh cuốn Thanh Trì: mỏng, trắng.', 'Cốm Vòng (mùa thu).', 'Phở cuốn Ngũ Xã.'] },
      { h: 'Đặc điểm' },
      { ul: ['Tinh tế: ít gia vị, vị thanh.', 'Nhiều rau thơm.', 'Theo mùa: cốm thu, ốc đông.', 'Quán cũ, lâu năm.'] },
      { h: 'Bảo tồn' },
      { ul: ['Phở Hà Nội: Phở Bát Đàn, Phở Thìn Lò Đúc.', 'Bún chả: Bún chả Hàng Mành.', 'Chả cá: Chả cá Lã Vọng 130+ tuổi.'] },
      { note: '2017 — Tổng thống Obama ăn bún chả Hà Nội với Anthony Bourdain. Sự kiện gọi là "bữa cơm Obama".' },
    ],
    [
      { q: 'Món gì tổng thống Obama ăn ở HN?', a: 'Bún chả — tại quán Bún chả Hương Liên (Lê Văn Hưu).' },
      { q: 'Cốm Vòng là đặc sản mùa nào?', a: 'Mùa thu — khi lúa nếp non.' },
    ]
  ),

  'S8GDDP-w24-quiz': L(
    'Hà Nội thời Cách mạng tháng Tám (1945)',
    'CMT8 thành công tại HN ngày 19/8/1945 — bước ngoặt lịch sử.',
    ['Bối cảnh.', 'Diễn biến HN.', 'Ý nghĩa.'],
    [
      { h: 'Bối cảnh' },
      { ul: ['Nhật đảo chính Pháp (9/3/1945).', 'Phát xít Nhật đầu hàng Đồng minh (15/8/1945).', 'Cơ hội "có một không hai" — Đảng phát động Tổng khởi nghĩa.'] },
      { h: 'Diễn biến HN' },
      { ul: ['17/8/1945: mít-tinh trước Nhà hát Lớn (~20.000 người).', '19/8/1945: tổng khởi nghĩa — chiếm phủ Khâm sai, đài phát thanh.', 'Quân Việt Minh chiếm các cơ quan chính quyền.', 'Cuối ngày: cờ đỏ sao vàng tung bay khắp HN.'] },
      { h: 'Ý nghĩa' },
      { ul: ['HN là 1 trong 3 thành phố tổng khởi nghĩa sớm nhất (cùng Huế và Sài Gòn).', 'Cổ vũ cả nước nổi dậy.', '2/9/1945: Bác Hồ đọc Tuyên ngôn độc lập ở Quảng trường Ba Đình.'] },
    ],
    [
      { q: 'Ngày CMT8 thành công ở HN?', a: '19/8/1945.' },
      { q: 'Ngày 2/9/1945 — sự kiện gì?', a: 'Bác Hồ đọc Tuyên ngôn độc lập tại Quảng trường Ba Đình.' },
    ]
  ),

  'S8GDDP-w25-quiz': L(
    'Hà Nội trong kháng chiến chống Pháp (1946-1954)',
    '60 ngày đêm Toàn quốc kháng chiến tại HN — bài học về anh dũng và sáng tạo.',
    ['Toàn quốc kháng chiến 19/12/1946.', '60 ngày đêm.', 'Hà Nội về sau.'],
    [
      { h: 'Toàn quốc kháng chiến (19/12/1946)' },
      { ul: ['Pháp khiêu khích Hà Nội nhiều lần.', '19/12/1946 — Bác Hồ phát "Lời kêu gọi toàn quốc kháng chiến".', 'HN bắt đầu cuộc chiến với Pháp.'] },
      { h: '60 ngày đêm (12/1946 - 2/1947)' },
      { ul: ['Trung đoàn Thủ đô (gọi Trung đoàn 102) bảo vệ HN.', 'Chiến đấu ác liệt từng phố, từng nhà.', 'Đào hào, dựng chiến luỹ.', 'Bom 3 càng — chiến sĩ ôm bom tấn công xe tăng.', '17/2/1947: Trung đoàn rút lui chiến lược thành công về vùng tự do.'] },
      { h: 'HN về sau' },
      { ul: ['HN nằm dưới chiếm đóng Pháp 1947-1954.', 'Phong trào nội thành: tuyên truyền, phá hoại.', '10/10/1954: HN được giải phóng — sau Hiệp định Geneva.'] },
    ],
    [
      { q: 'Ngày Toàn quốc kháng chiến?', a: '19/12/1946 — Bác Hồ kêu gọi.' },
      { q: 'Ngày HN giải phóng?', a: '10/10/1954 — Ngày Giải phóng Thủ đô.' },
    ]
  ),

  'S8GDDP-w26-quiz': L(
    'Hà Nội trong kháng chiến chống Mỹ — Điện Biên Phủ trên không 1972',
    '12 ngày đêm "Điện Biên Phủ trên không" — chiến thắng oanh liệt nhất của HN.',
    ['Bối cảnh.', '12 ngày đêm.', 'Ý nghĩa.'],
    [
      { h: 'Bối cảnh' },
      { ul: ['Mỹ tăng cường bắn phá miền Bắc từ 1965.', '12/1972: Nixon tung "đòn cuối" — B-52 đánh phá HN-Hải Phòng.', 'Mục đích: ép VN ký Hiệp định Paris có lợi cho Mỹ.'] },
      { h: '12 ngày đêm (18/12 - 30/12/1972)' },
      { ul: ['Mỹ ném 36.000 tấn bom (gấp nhiều lần bom Hiroshima).', 'Phố Khâm Thiên bị san phẳng — chết 287 người.', 'Bệnh viện Bạch Mai bị bom.', 'Quân dân HN bắn rơi 34 máy bay (16 B-52).'] },
      { h: 'Ý nghĩa' },
      { ul: ['Lần đầu B-52 bị bắn hạ ở chiến trường.', 'Buộc Mỹ ký Hiệp định Paris (1/1973).', 'Chiến thắng vĩ đại nhất của HN trong chống Mỹ.'] },
    ],
    [
      { q: 'Bao nhiêu B-52 bị bắn rơi trong 12 ngày đêm?', a: '16 chiếc — kỷ lục thế giới.' },
      { q: 'Phố nào bị san phẳng?', a: 'Phố Khâm Thiên — đêm 26/12/1972 chết 287 người.' },
    ]
  ),

  'S8GDDP-w27-quiz': L(
    'Hà Nội — Thủ đô anh hùng',
    'HN được phong "Thủ đô anh hùng" vì những đóng góp lịch sử.',
    ['Danh hiệu.', 'Cơ sở danh hiệu.', 'Trách nhiệm hiện tại.'],
    [
      { h: 'Danh hiệu' },
      { ul: ['"Thủ đô của lương tri và phẩm giá con người" (UNESCO 1999 — Thành phố Vì hoà bình).', '"Thủ đô anh hùng" — Nhà nước VN phong tặng.', 'Huân chương Sao Vàng.'] },
      { h: 'Cơ sở danh hiệu' },
      { ul: ['60 ngày đêm Toàn quốc kháng chiến.', '"Điện Biên Phủ trên không" 1972.', 'Đóng góp lớn cho cả 2 cuộc kháng chiến.', 'Trung tâm chính trị-văn hoá VN.'] },
      { h: 'Trách nhiệm hiện tại' },
      { ul: ['Phát triển kinh tế.', 'Bảo tồn di sản.', 'Phát triển khoa học-công nghệ.', 'Xây dựng thủ đô văn minh, hiện đại.'] },
    ],
    [
      { q: 'Khi nào HN được UNESCO công nhận "Thành phố Vì hoà bình"?', a: '1999 — kỷ niệm 990 năm Thăng Long-Hà Nội.' },
      { q: 'Tại sao HN là "Thủ đô anh hùng"?', a: 'Vì 60 ngày đêm + Điện Biên Phủ trên không + đóng góp lớn cho 2 cuộc kháng chiến.' },
    ]
  ),

  'S8GDDP-w28-quiz': L(
    'Văn miếu - Quốc tử giám',
    'Văn miếu - Quốc tử giám — trường ĐH đầu tiên VN (1076), biểu tượng học vấn.',
    ['Lịch sử.', 'Kiến trúc.', 'Bia tiến sĩ.'],
    [
      { h: 'Lịch sử' },
      { ul: ['1070: vua Lý Thánh Tông xây Văn miếu thờ Khổng Tử.', '1076: vua Lý Nhân Tông lập Quốc tử giám — trường ĐH cho con vua, quý tộc.', 'Sau mở rộng cho con quan, sau cùng cho dân chúng giỏi.', 'Hoạt động đến 1779 (cuối Lê).'] },
      { h: 'Kiến trúc' },
      { ul: ['5 lớp sân, mỗi sân vào qua 1 cổng.', 'Sân chính: hồ Thiên Quang.', 'Khuê Văn Các — biểu tượng HN (hình trên tờ 100k VND).', 'Đại Bái — nơi tế Khổng Tử.'] },
      { h: 'Bia tiến sĩ' },
      { ul: ['82 tấm bia khắc tên 1.307 tiến sĩ (1442-1779).', 'Mỗi bia đặt trên lưng rùa đá — "tốn tâm khắc bia".', 'Được UNESCO công nhận Di sản tư liệu thế giới (2010).'] },
    ],
    [
      { q: 'Quốc tử giám lập năm nào?', a: '1076 — vua Lý Nhân Tông.' },
      { q: 'Khuê Văn Các hiện in trên tờ tiền nào?', a: 'Tờ 100.000 đồng.' },
    ]
  ),

  'S8GDDP-w29-quiz': L(
    'Hà Nội — Đô thị thông minh (Smart City)',
    'HN đang xây dựng đô thị thông minh — áp dụng công nghệ vào quản lý và đời sống.',
    ['Khái niệm smart city.', 'Ứng dụng tại HN.', 'Tương lai.'],
    [
      { h: 'Smart city' },
      { p: 'Đô thị áp dụng công nghệ thông tin và truyền thông (ICT) + dữ liệu lớn (big data) + IoT để nâng cao chất lượng cuộc sống.' },
      { h: 'Ứng dụng tại HN' },
      { ul: ['HN smart city - chính quyền số: dịch vụ công online.', 'Giao thông: đèn tín hiệu thông minh, camera giám sát.', 'Quản lý rác thải.', 'Y tế thông minh (hồ sơ điện tử).', 'iHanoi app: tra cứu thông tin HN.'] },
      { h: 'Tương lai' },
      { ul: ['Xây dựng thành phố thông minh khu vực phía Bắc HN.', '5G phủ sóng.', 'AI hỗ trợ giao thông, y tế.', 'Năng lượng tái tạo.'] },
    ],
    [
      { q: 'Smart city là gì?', a: 'Đô thị áp dụng công nghệ ICT + dữ liệu lớn để quản lý hiệu quả.' },
      { q: 'App "iHanoi" làm gì?', a: 'Cung cấp thông tin du lịch, hành chính, giao thông HN.' },
    ]
  ),

  'S8GDDP-w30-quiz': L(
    'Quy hoạch và phát triển đô thị HN',
    'HN đang quy hoạch trở thành đô thị hiện đại - 7-9 triệu dân vào 2030.',
    ['Quy hoạch tổng thể.', 'Vùng đô thị mở rộng.', 'Vấn đề.'],
    [
      { h: 'Quy hoạch tổng thể HN đến 2030' },
      { ul: ['Dân số: 7-9 triệu người (hiện ~8.5 triệu).', 'Diện tích: 3.358 km².', '5 đô thị vệ tinh: Hoà Lạc, Sơn Tây, Xuân Mai, Phú Xuyên, Sóc Sơn.', 'Phát triển trục Đông-Tây (sông Hồng + Nhuệ).'] },
      { h: 'Mở rộng' },
      { ul: ['2008: sáp nhập Hà Tây + 1 phần Hoà Bình, Vĩnh Phúc.', 'HN trở thành 1 trong 17 thủ đô lớn nhất thế giới về diện tích.'] },
      { h: 'Vấn đề' },
      { ul: ['Tắc nghẽn giao thông.', 'Ô nhiễm không khí.', 'Ngập lụt mùa mưa.', 'Áp lực dân số.'] },
    ],
    [
      { q: 'Năm nào HN sáp nhập Hà Tây?', a: '2008 — tăng gấp 3 diện tích.' },
      { q: 'Mục tiêu dân số HN 2030?', a: '7-9 triệu người.' },
    ]
  ),

  'S8GDDP-w31-quiz': L(
    'Bảo vệ môi trường tại Hà Nội',
    'HN đang đối mặt với nhiều thách thức môi trường — cần hành động khẩn cấp.',
    ['Tình trạng môi trường HN.', 'Nguyên nhân.', 'Giải pháp.'],
    [
      { h: 'Tình trạng' },
      { ul: ['Không khí: PM2.5 vượt chuẩn nhiều ngày/năm — đặc biệt mùa đông.', 'Sông Tô Lịch, Kim Ngưu ô nhiễm.', 'Rác thải: ~7.000 tấn/ngày.', 'Tiếng ồn vượt chuẩn.'] },
      { h: 'Nguyên nhân' },
      { ul: ['Phương tiện cá nhân nhiều (6 triệu xe máy).', 'Đốt rơm rạ ngoại thành.', 'Công nghiệp ven HN.', 'Quản lý rác chưa tốt.'] },
      { h: 'Giải pháp' },
      { ul: ['Phát triển giao thông công cộng (metro, BRT).', 'Khuyến khích xe điện.', 'Cấm đốt rơm.', 'Phân loại rác tại nguồn.', 'Cải tạo sông Tô Lịch.'] },
      { note: 'HS có thể đóng góp: đi bộ/đạp xe ngắn, không xả rác, tuyên truyền gia đình.' },
    ],
    [
      { q: 'Sông nào ở HN ô nhiễm nặng nhất?', a: 'Sông Tô Lịch — đang được dự án cải tạo.' },
      { q: 'PM2.5 là gì?', a: 'Bụi mịn đường kính <2.5 micromet — gây hại phổi, tim, ung thư.' },
    ]
  ),

  'S8GDDP-w32-quiz': L(
    'Du lịch Hà Nội — Di sản và trải nghiệm',
    'HN là điểm du lịch hấp dẫn — kết hợp lịch sử, văn hoá, ẩm thực.',
    ['Điểm du lịch chính.', 'Trải nghiệm văn hoá.', 'Vai trò HS.'],
    [
      { h: 'Điểm du lịch' },
      { ul: ['Hồ Hoàn Kiếm + Tháp Rùa + Đền Ngọc Sơn.', 'Văn miếu - Quốc tử giám.', 'Lăng Bác Hồ + Phủ Chủ tịch.', 'Phố cổ + Nhà thờ Lớn.', 'Cầu Long Biên + Sông Hồng.', 'Làng cổ Đường Lâm.'] },
      { h: 'Trải nghiệm văn hoá' },
      { ul: ['Ẩm thực: phở, bún chả, chả cá.', 'Cà phê: Café trứng, café Giảng.', 'Nghệ thuật: múa rối nước, hát chèo.', 'Phố đi bộ cuối tuần.'] },
      { h: 'Vai trò HS' },
      { ul: ['Hiểu di sản để giới thiệu cho bạn nước ngoài.', 'Học tiếng Anh để giao tiếp.', 'Tự hào và bảo vệ di sản.'] },
    ],
    [
      { q: 'Café trứng có ở quán nào nổi tiếng HN?', a: 'Café Giảng (Nguyễn Hữu Huân) — sáng lập bởi ông Giảng từ 1946.' },
      { q: 'Làng cổ ngoại thành HN?', a: 'Đường Lâm (Sơn Tây) — làng đá ong cổ, di tích quốc gia.' },
    ]
  ),

  'S8GDDP-w33-quiz': L(
    'Văn hoá HN ngày nay — Giới trẻ và sáng tạo',
    'HN ngày nay là trung tâm sáng tạo của VN — từ thời trang, nghệ thuật đến công nghệ.',
    ['Sáng tạo trẻ HN.', 'Không gian sáng tạo.', 'Vai trò HS.'],
    [
      { h: 'Sáng tạo trẻ HN' },
      { ul: ['Streetwear, thời trang Việt: Lê Thanh Hoà, Đỗ Mạnh Cường.', 'Nghệ thuật đường phố (street art).', 'Phim ngắn, podcast.', 'Startup công nghệ.'] },
      { h: 'Không gian sáng tạo' },
      { ul: ['Hanoi Creative City — không gian co-working, triển lãm.', 'Cafe sáng tạo: The Workshop, Tranquil.', 'Triển lãm tranh ở Vietnam Fine Arts Museum.', 'Phố đi bộ Hồ Gươm — biểu diễn cuối tuần.'] },
      { h: 'HN là Thành phố sáng tạo UNESCO' },
      { p: '2019 — HN gia nhập Mạng lưới các thành phố sáng tạo UNESCO (lĩnh vực thiết kế).' },
      { h: 'HS có thể tham gia thế nào?' },
      { ul: ['Tham gia CLB ở trường.', 'Đi triển lãm, workshop.', 'Tự sáng tạo: vẽ, viết, làm video.', 'Khám phá nghệ thuật đường phố.'] },
    ],
    [
      { q: 'HN gia nhập Mạng lưới Thành phố sáng tạo UNESCO năm nào?', a: '2019 — lĩnh vực thiết kế.' },
      { q: 'Có những không gian sáng tạo trẻ ở HN?', a: 'Hanoi Creative City, các café sáng tạo, Phố đi bộ Hồ Gươm.' },
    ]
  ),

  'S8GDDP-w34-quiz': L(
    'Trách nhiệm công dân HN — Xây dựng Thủ đô',
    'HN là Thủ đô — công dân HN có trách nhiệm xây dựng và tự hào.',
    ['Trách nhiệm cụ thể.', 'Đóng góp HS.', 'Tinh thần Hà Nội.'],
    [
      { h: 'Trách nhiệm công dân HN' },
      { ul: ['Tuân pháp luật, giữ trật tự.', 'Bảo vệ môi trường.', 'Giữ gìn di sản văn hoá.', 'Văn minh trong ứng xử.', 'Đóng góp lao động, trí tuệ.'] },
      { h: 'HS đóng góp' },
      { ul: ['Học giỏi — tương lai HN.', 'Bảo vệ môi trường ở khu phố.', 'Tham gia hoạt động cộng đồng.', 'Tự hào và giới thiệu HN cho người khác.', 'Tuân giao thông.'] },
      { h: 'Tinh thần Hà Nội' },
      { p: '"Người HN thanh lịch, văn minh" — không phải khoe khoang mà là ứng xử lịch sự, tôn trọng người khác.' },
      { note: 'Mỗi HS HN đều là "đại sứ" của Thủ đô — cách em ứng xử cho thấy người HN thế nào.' },
    ],
    [
      { q: '"Người HN thanh lịch văn minh" nghĩa gì?', a: 'Ứng xử lịch sự, tôn trọng người khác, có văn hoá — không phải khoe khoang.' },
      { q: 'HS HN đóng góp gì cho Thủ đô?', a: 'Học giỏi, bảo vệ môi trường, tham gia cộng đồng, tuân giao thông, tự hào và giới thiệu HN.' },
    ]
  ),

  'S8GDDP-w35-quiz': L(
    'Ôn tập cuối năm',
    'Tổng kết Giáo dục địa phương HN lớp 8 — lịch sử cận đại + văn hoá + hiện đại.',
    ['Tổng kết lịch sử.', 'Tổng kết văn hoá.', 'Định hướng tiếp.'],
    [
      { h: 'Lịch sử HN (1873-1972)' },
      { ul: ['Pháp xâm chiếm (1873, 1882) — Nguyễn Tri Phương, Hoàng Diệu.', 'Pháp thuộc — quy hoạch, cầu Long Biên, Nhà hát Lớn.', 'Phong trào yêu nước — Đông Du, Đông Kinh Nghĩa Thục, Yên Thế.', 'CMT8 1945, kháng chiến chống Pháp 1946-1954.', 'Điện Biên Phủ trên không 1972.'] },
      { h: 'Văn hoá HN' },
      { ul: ['36 phố phường, làng nghề (Vạn Phúc, Bát Tràng, Ngũ Xã).', 'Văn miếu - Quốc tử giám.', 'Thạch Lam, Nguyễn Tuân.', 'Ẩm thực truyền thống.'] },
      { h: 'HN hiện đại' },
      { ul: ['Smart city.', 'Bảo vệ môi trường.', 'Du lịch và sáng tạo.', 'Trách nhiệm công dân.'] },
      { note: 'HN là thành phố ngàn năm — chứa đựng cả lịch sử, văn hoá và tương lai. Tự hào và có trách nhiệm là 2 mặt của 1 đồng tiền.' },
    ],
    [
      { q: '3 cột mốc lịch sử HN cận đại?', a: '1873/1882 (Pháp xâm chiếm), 1945 (CMT8), 1972 (Điện Biên Phủ trên không).' },
      { q: '3 di sản UNESCO liên quan HN?', a: 'Hoàng thành Thăng Long (2010), Bia tiến sĩ Văn miếu (2010), HN — Thành phố sáng tạo (2019).' },
    ]
  ),
};
