// ============================================================
// Lớp 8 · Nghệ thuật — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Âm nhạc · Mỹ thuật. Key: "S8NT-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8NT_LESSONS = {
  'S8NT-w01-quiz': L(
    'Âm nhạc — Ôn tập kiến thức nhạc lý cơ bản',
    'Khởi động Âm nhạc 8 với ôn tập nhạc lý: nốt, nhịp, khoá, dấu hoá.',
    ['Ôn tên 7 nốt.', 'Ôn các loại nhịp.', 'Ôn khoá Sol và dấu hoá.'],
    [
      { h: '7 nốt nhạc' },
      { p: 'Đô - Rê - Mi - Pha - Son - La - Si (C - D - E - F - G - A - B).' },
      { h: 'Nhịp' },
      { ul: ['Nhịp 2/4: 2 phách/ô, phách 1 mạnh.', 'Nhịp 3/4: 3 phách/ô — như waltz.', 'Nhịp 4/4: phổ biến nhất.', 'Nhịp 6/8: nhịp ghép, êm dịu.'] },
      { h: 'Khoá Sol' },
      { p: 'Vòng vào dòng 2 → đó là nốt Sol. Khoá phổ biến nhất.' },
      { h: 'Dấu hoá' },
      { ul: ['Dấu thăng (#): nâng nửa cung.', 'Dấu giáng (♭): hạ nửa cung.', 'Dấu bình (♮): khôi phục.'] },
    ],
    [
      { q: 'Nhịp 4/4 có mấy phách?', a: '4 phách. Phách 1 mạnh, phách 3 mạnh vừa.' },
      { q: 'Dấu # và ♭ khác nhau?', a: '#: nâng nửa cung. ♭: hạ nửa cung.' },
    ]
  ),

  'S8NT-w02-quiz': L(
    'Âm nhạc — Đảo phách (syncopation)',
    'Đảo phách là kỹ thuật âm nhạc tạo cảm giác "lệch nhịp" hấp dẫn.',
    ['Hiểu đảo phách.', 'Nhận biết trong bài hát.', 'Vận dụng vỗ tay.'],
    [
      { h: 'Đảo phách là gì?' },
      { p: 'Là hiện tượng âm nhạc trong đó nhấn mạnh phách yếu hoặc phần yếu của phách (thay vì phách mạnh).' },
      { h: 'Tác dụng' },
      { ul: ['Tạo cảm giác "lắc lư", "groove".', 'Đặc trưng của jazz, R&B, latin.', 'Tạo sự thú vị, không đoán trước.'] },
      { h: 'Ví dụ' },
      { p: 'Bài "Despacito", "Uptown Funk" — đảo phách rất rõ.' },
    ],
    [
      { q: 'Tại sao jazz "lắc lư"?', a: 'Vì đảo phách (syncopation) — nhấn vào phách yếu, tạo groove.' },
      { q: 'Nhịp 4/4 phách mạnh ở đâu?', a: 'Phách 1. Đảo phách = nhấn vào phách 2 hoặc 4.' },
    ]
  ),

  'S8NT-w03-quiz': L(
    'Âm nhạc — Hợp âm 7 (Seventh chord)',
    'Hợp âm 7 thêm "màu sắc" và độ phức tạp cho hoà thanh.',
    ['Hiểu cấu tạo hợp âm 7.', 'Các loại 7.', 'Vận dụng nghe.'],
    [
      { h: 'Cấu tạo hợp âm 7' },
      { p: 'Hợp âm 3 nốt + thêm nốt 7 (cách nốt gốc 7 bậc). VD: Cmaj7 = C - E - G - B.' },
      { h: 'Các loại 7' },
      { ul: ['Maj7 (CMaj7): trưởng — êm dịu, "mơ màng".', 'm7 (Dm7): thứ — buồn nhẹ.', '7 (G7): trưởng át — căng thẳng, đòi giải.', 'dim7: giảm 7 — căng thẳng, kịch tính.'] },
      { h: 'Sử dụng' },
      { p: 'Phổ biến trong jazz, bossa nova, ballad. Tạo cảm giác sâu lắng, sang trọng.' },
    ],
    [
      { q: 'CMaj7 gồm những nốt nào?', a: 'C - E - G - B.' },
      { q: 'Vì sao G7 "muốn giải" về C?', a: 'Vì nốt B (nốt nhạy) muốn lên C, và F muốn xuống E. Đó là quan hệ át (dominant) → chủ (tonic).' },
    ]
  ),

  'S8NT-w04-quiz': L(
    'Âm nhạc — Kỹ thuật hát nâng cao',
    'Kỹ thuật hát đúng giúp giọng đẹp, dày, không bị khản.',
    ['Hít thở bụng.', 'Phát âm rõ.', 'Mở khẩu hình.'],
    [
      { h: 'Hít thở bụng (diaphragmatic breathing)' },
      { p: 'Hít vào bằng mũi, bụng phình ra (không phải ngực). Thở ra: bụng xẹp dần — giữ hơi dài.' },
      { h: 'Mở khẩu hình' },
      { ul: ['Mở miệng đủ rộng (2 ngón tay dọc).', 'Hạ lưỡi.', 'Vòm miệng nâng (như đang ngáp).'] },
      { h: 'Phát âm rõ' },
      { ul: ['Phân biệt phụ âm rõ (B/V, S/X, L/N).', 'Mở nguyên âm.', 'Nhả chữ cuối câu.'] },
      { note: 'Hát đúng kỹ thuật giúp giọng bền — không khản, hát được 2+ tiếng.' },
    ],
    [
      { q: 'Hít thở đúng dùng bộ phận gì?', a: 'Cơ hoành (bụng) — không phải ngực.' },
      { q: 'Mở khẩu hình giúp gì?', a: 'Âm thanh thoát ra to, tròn, không bị nghẹn.' },
    ]
  ),

  'S8NT-w05-quiz': L(
    'Âm nhạc — Recorder/Sáo nâng cao',
    'Recorder lớp 8 nâng cao: thổi nốt cao và bài 2 bè.',
    ['Thổi nốt cao (octave trên).', 'Kỹ thuật staccato.', 'Bài 2 bè.'],
    [
      { h: 'Nốt cao (octave trên)' },
      { p: 'Bịt 1 phần lỗ ngón cái (lỗ sau) → tạo octave cao. Thổi nhẹ hơn để âm trong.' },
      { h: 'Staccato (ngắt)' },
      { p: 'Dùng đầu lưỡi gõ "tu" để ngắt từng nốt — tạo nhịp giật, vui tươi.' },
      { h: 'Bài 2 bè' },
      { p: '2 người thổi 2 giai điệu khác nhau hài hoà — bè 1 melody, bè 2 đệm.' },
    ],
    [
      { q: 'Cách tạo nốt cao trên recorder?', a: 'Bịt 1 phần lỗ ngón cái, thổi nhẹ hơn.' },
      { q: 'Staccato ngược lại với gì?', a: 'Legato (luyến) — nốt liền nhau, mượt.' },
    ]
  ),

  'S8NT-w06-quiz': L(
    'Âm nhạc — Nhạc sĩ Bach (J.S. Bach)',
    'Johann Sebastian Bach (1685-1750) — đỉnh cao của âm nhạc Baroque.',
    ['Cuộc đời Bach.', 'Tác phẩm tiêu biểu.', 'Phong cách Baroque.'],
    [
      { h: 'Cuộc đời' },
      { p: 'Sinh ở Đức, mồ côi cha mẹ từ nhỏ. Là nhà soạn nhạc + organist + giáo viên. Có 20 con. Đến cuối đời mới được công nhận.' },
      { h: 'Tác phẩm tiêu biểu' },
      { ul: ['Brandenburg Concertos.', 'Mass in B Minor.', 'Toccata and Fugue in D Minor (organ).', 'Goldberg Variations (piano).'] },
      { h: 'Phong cách Baroque' },
      { ul: ['Đối âm (counterpoint) — nhiều giai điệu chồng nhau.', 'Trang trọng, phức tạp.', 'Cấu trúc toán học chặt chẽ.'] },
      { note: 'Bach được coi là "cha đẻ" của âm nhạc cổ điển phương Tây.' },
    ],
    [
      { q: 'Bach sống thời nào?', a: 'Baroque (1600-1750).' },
      { q: 'Bach giỏi nhạc cụ gì nhất?', a: 'Organ và Harpsichord.' },
    ]
  ),

  'S8NT-w07-quiz': L(
    'Âm nhạc — Nhạc sĩ Mozart (W.A. Mozart)',
    'Wolfgang Amadeus Mozart (1756-1791) — thần đồng âm nhạc thời Cổ điển.',
    ['Cuộc đời thần đồng.', 'Tác phẩm.', 'Phong cách Cổ điển.'],
    [
      { h: 'Cuộc đời' },
      { p: 'Sinh ở Salzburg (Áo). 3 tuổi chơi piano, 5 tuổi sáng tác, 12 tuổi viết opera. Mất sớm ở tuổi 35.' },
      { h: 'Tác phẩm tiêu biểu' },
      { ul: ['Symphony No. 40 in G minor.', 'Eine kleine Nachtmusik.', 'The Magic Flute (Opera).', 'Requiem (chưa hoàn thành).', 'Piano Sonata K. 545 (HS hay học).'] },
      { h: 'Phong cách Cổ điển' },
      { ul: ['Trong sáng, cân đối.', 'Giai điệu đẹp, dễ nhớ.', 'Cấu trúc rõ ràng (Sonata form).'] },
    ],
    [
      { q: 'Mozart sinh ở đâu?', a: 'Salzburg, Áo.' },
      { q: 'Mozart sống thời nào?', a: 'Classical (Cổ điển — 1750-1820).' },
    ]
  ),

  'S8NT-w08-quiz': L(
    'Âm nhạc — Nhạc sĩ Beethoven (L. van Beethoven)',
    'Ludwig van Beethoven (1770-1827) — cầu nối Cổ điển và Lãng mạn, vẫn sáng tác khi điếc.',
    ['Cuộc đời.', 'Tác phẩm.', 'Câu chuyện điếc.'],
    [
      { h: 'Cuộc đời' },
      { p: 'Sinh ở Bonn (Đức). Bố nghiện rượu. Từ ~26 tuổi mất dần thính giác, cuối đời điếc hoàn toàn. Vẫn sáng tác kiệt tác.' },
      { h: 'Tác phẩm tiêu biểu' },
      { ul: ['Symphony No. 5 (4 nốt mở đầu nổi tiếng nhất lịch sử).', 'Symphony No. 9 (Ode to Joy — quốc ca EU).', 'Für Elise (piano).', 'Moonlight Sonata.'] },
      { h: 'Câu chuyện' },
      { p: 'Symphony No. 9 sáng tác khi đã điếc hoàn toàn — chỉ "nghe" trong đầu. Khán giả vỗ tay nhưng ông không nghe được — phải xoay người ra mới thấy.' },
    ],
    [
      { q: 'Beethoven nổi tiếng vì gì ngoài âm nhạc?', a: 'Vẫn sáng tác khi điếc hoàn toàn.' },
      { q: 'Ode to Joy hiện là gì?', a: 'Quốc ca chính thức của Liên minh châu Âu (EU).' },
    ]
  ),

  'S8NT-w09-quiz': L(
    'Mỹ thuật — Luật xa gần (perspective)',
    'Luật xa gần (phối cảnh) là nguyên lý cốt lõi của vẽ 3D.',
    ['Hiểu luật xa gần.', 'Điểm tụ.', 'Vẽ khối lập phương 1 điểm tụ.'],
    [
      { h: 'Luật xa gần' },
      { ul: ['Vật càng xa càng nhỏ.', 'Đường thẳng song song dẫn về 1 điểm tụ (vanishing point).', 'Chi tiết xa mờ, gần rõ.', 'Màu xa nhạt, gần đậm.'] },
      { h: 'Đường chân trời (horizon)' },
      { p: 'Đường ngang, ngang tầm mắt người vẽ. Điểm tụ nằm trên đường này.' },
      { h: '1 điểm tụ' },
      { p: 'Mọi đường thẳng vuông góc mặt phẳng tranh hội tụ về 1 điểm. Dùng vẽ đường thẳng, hành lang, đường ray.' },
    ],
    [
      { q: 'Đường ray tàu hoả nhìn xa thì sao?', a: 'Hai đường ray hội tụ về 1 điểm — điểm tụ.' },
      { q: 'Đường chân trời ở đâu?', a: 'Ngang tầm mắt người vẽ.' },
    ]
  ),

  'S8NT-w10-quiz': L(
    'Mỹ thuật — Ký hoạ chân dung',
    'Ký hoạ chân dung: vẽ nhanh khuôn mặt, nắm bắt thần thái.',
    ['Tỉ lệ khuôn mặt.', 'Vẽ mắt, mũi, miệng.', 'Bắt thần thái.'],
    [
      { h: 'Tỉ lệ chuẩn' },
      { ul: ['Khuôn mặt chia 3 phần đều: trán, mũi, cằm.', 'Mắt nằm giữa khuôn mặt (chiều dọc).', 'Khoảng cách 2 mắt = 1 mắt.', 'Tai từ đầu lông mày đến đáy mũi.'] },
      { h: 'Vẽ chi tiết' },
      { ul: ['Mắt: hình hạnh nhân.', 'Mũi: phác hình tam giác.', 'Miệng: đường ngang chia môi trên-dưới.'] },
      { h: 'Bắt thần thái' },
      { p: 'Quan trọng nhất là MẮT và TƯ THẾ. Vẽ đúng tỉ lệ mà thần thái không có → tranh "khô".' },
    ],
    [
      { q: 'Khuôn mặt chia mấy phần?', a: '3 phần đều: trán, mũi, cằm.' },
      { q: 'Vị trí mắt trên khuôn mặt?', a: 'Giữa khuôn mặt (chiều dọc) — không phải 1/3 trên như tưởng tượng.' },
    ]
  ),

  'S8NT-w11-quiz': L(
    'Mỹ thuật — Tranh tự do (chủ đề học đường)',
    'Tranh tự do cho HS thể hiện cá tính và cảm xúc.',
    ['Chọn chủ đề.', 'Phác bố cục.', 'Chọn chất liệu.'],
    [
      { h: 'Chủ đề học đường' },
      { ul: ['Giờ ra chơi.', 'Lớp học.', 'Sân trường.', 'Thư viện.', 'Sinh hoạt CLB.'] },
      { h: 'Bố cục' },
      { ul: ['Nguyên tắc 1/3 (rule of thirds).', 'Có tâm điểm chính.', 'Cân bằng hình khối.'] },
      { h: 'Chất liệu' },
      { ul: ['Bút chì màu: dễ kiểm soát.', 'Sáp dầu: màu đậm rực.', 'Màu nước: trong suốt, đẹp.', 'Acrylic: che đậm, có thể sửa.'] },
    ],
    [
      { q: 'Nguyên tắc 1/3 là gì?', a: 'Chia tranh thành 3x3 ô, đặt tâm điểm chính ở giao điểm.' },
      { q: 'Chất liệu dễ nhất cho người mới?', a: 'Bút chì màu hoặc sáp dầu — dễ kiểm soát, ít hỏng.' },
    ]
  ),

  'S8NT-w12-quiz': L(
    'Mỹ thuật — Đồ hoạ ấn phẩm (poster, áp phích)',
    'Poster cần truyền tải thông điệp nhanh và mạnh.',
    ['Nguyên tắc thiết kế poster.', 'Phân cấp thông tin.', 'Tạo poster chủ đề học đường.'],
    [
      { h: 'Nguyên tắc' },
      { ul: ['Thông điệp rõ — 1 ý chính.', 'Hình ảnh mạnh — bắt mắt từ xa.', 'Chữ to, dễ đọc.', 'Đối lập màu sắc cao.'] },
      { h: 'Phân cấp thông tin' },
      { ul: ['Headline (tiêu đề): to nhất.', 'Hình ảnh: thu hút mắt.', 'Nội dung: rõ ràng.', 'Logo/info: nhỏ ở góc.'] },
      { h: 'Phần mềm' },
      { p: 'Canva (miễn phí, dễ), Adobe Express, Figma — đều có trên web.' },
    ],
    [
      { q: 'Poster sai khi nào?', a: 'Quá nhiều chữ, nhiều ý, màu rối, chữ nhỏ → không ai đọc.' },
      { q: 'Công cụ dễ nhất cho HS làm poster?', a: 'Canva — free, mẫu sẵn, kéo thả.' },
    ]
  ),

  'S8NT-w13-quiz': L(
    'Mỹ thuật — Lịch sử mỹ thuật VN thời Lý',
    'Mỹ thuật thời Lý (1010-1225) — đỉnh cao Phật giáo và kiến trúc.',
    ['Đặc điểm.', 'Tác phẩm tiêu biểu.', 'Tinh thần.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Ảnh hưởng Phật giáo sâu đậm.', 'Trang trí tinh xảo — rồng cong mềm mại.', 'Kiến trúc thiền tịnh, hoa văn sen, lá đề.'] },
      { h: 'Tác phẩm tiêu biểu' },
      { ul: ['Chùa Một Cột (1049) — biểu tượng Hà Nội.', 'Tượng A-di-đà chùa Phật Tích — đẹp nhất thời Lý.', 'Rồng thời Lý — thân dài, mềm mại, có "vai mây".'] },
      { h: 'Tinh thần' },
      { p: 'Tinh tế, thanh thoát, hài hoà — phản ánh xã hội ổn định, đạo Phật phát triển.' },
    ],
    [
      { q: 'Đặc trưng rồng thời Lý?', a: 'Thân dài, mềm mại, uốn lượn — không dữ dằn như rồng Trung.' },
      { q: 'Công trình nổi tiếng nhất thời Lý?', a: 'Chùa Một Cột (1049).' },
    ]
  ),

  'S8NT-w14-quiz': L(
    'Mỹ thuật — Lịch sử mỹ thuật VN thời Trần',
    'Mỹ thuật thời Trần (1225-1400) — mạnh mẽ, gần dân hơn.',
    ['Đặc điểm.', 'Tác phẩm.', 'So sánh Lý-Trần.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Mạnh mẽ, đơn giản hơn Lý.', 'Rồng to khoẻ, dữ dằn hơn.', 'Ảnh hưởng cả Phật giáo và Nho giáo.', 'Quan tâm đời sống nhân dân.'] },
      { h: 'Tác phẩm' },
      { ul: ['Tháp Phổ Minh (Nam Định).', 'Tượng các vua tại lăng.', 'Đồ gốm Thiên Trường — gốm trang trí giản dị, mạnh.'] },
      { h: 'So sánh Lý vs Trần' },
      { ul: ['Lý: tinh tế, mềm mại, thiền tịnh.', 'Trần: mạnh, khoẻ, gần dân.'] },
    ],
    [
      { q: 'Rồng Lý-Trần khác ở đâu?', a: 'Lý: mềm mại, mảnh. Trần: to khoẻ, dữ dằn.' },
      { q: 'Tinh thần Mỹ thuật Trần phản ánh gì?', a: 'Thời đại chống Nguyên — tinh thần thượng võ, mạnh mẽ.' },
    ]
  ),

  'S8NT-w15-quiz': L(
    'Mỹ thuật — Lịch sử mỹ thuật VN thời Lê',
    'Mỹ thuật thời Lê (1428-1788) — đỉnh cao tranh khắc gỗ và kiến trúc Nho giáo.',
    ['Đặc điểm.', 'Tác phẩm.', 'Tranh dân gian.'],
    [
      { h: 'Đặc điểm' },
      { ul: ['Ảnh hưởng Nho giáo mạnh.', 'Phát triển tranh dân gian.', 'Đình làng phát triển rộng khắp.'] },
      { h: 'Tác phẩm' },
      { ul: ['Đình Tây Đằng, Chu Quyến (Hà Nội).', 'Văn miếu — bia tiến sĩ.', 'Tranh dân gian Đông Hồ, Hàng Trống.'] },
      { h: 'Tranh dân gian' },
      { ul: ['Đông Hồ (Bắc Ninh): in mộc bản, màu tự nhiên.', 'Hàng Trống (Hà Nội): vẽ tay tinh tế hơn.', 'Chủ đề: Tết, sinh hoạt, lịch sử.'] },
    ],
    [
      { q: 'Tranh Đông Hồ làm bằng kỹ thuật gì?', a: 'Mộc bản (in từ bản khắc gỗ).' },
      { q: 'Đình làng phát triển mạnh thời nào?', a: 'Thời Lê (đặc biệt Lê Trung Hưng — XVII-XVIII).' },
    ]
  ),

  'S8NT-w16-quiz': L(
    'Mỹ thuật — Mỹ thuật thời Nguyễn',
    'Mỹ thuật Nguyễn (1802-1945) — kiến trúc cung đình và mỹ thuật Phật giáo.',
    ['Kiến trúc cung đình Huế.', 'Tranh thờ.', 'Đồ thủ công mỹ nghệ.'],
    [
      { h: 'Kiến trúc cung đình' },
      { ul: ['Kinh thành Huế — UNESCO 1993.', 'Lăng tẩm các vua: Tự Đức, Khải Định, Minh Mạng.', 'Trang trí pháp lam (men sứ), khảm sành sứ.'] },
      { h: 'Tranh thờ' },
      { p: 'Tranh thờ Phật, tranh đám tang — chi tiết, tỉ mỉ.' },
      { h: 'Thủ công' },
      { ul: ['Pháp lam: men sứ trên đồng.', 'Khảm xà cừ.', 'Gốm Bát Tràng phát triển mạnh.'] },
    ],
    [
      { q: 'Kinh thành Huế được UNESCO công nhận năm nào?', a: '1993.' },
      { q: 'Pháp lam là gì?', a: 'Men sứ được nung trên đồng — kỹ thuật trang trí cung đình Huế.' },
    ]
  ),

  'S8NT-w17-quiz': L(
    'Âm nhạc — Dân ca quốc tế (Folk music)',
    'Mỗi dân tộc có dân ca riêng — kho tàng văn hoá nhân loại.',
    ['Hiểu dân ca quốc tế.', 'Các dòng tiêu biểu.', 'So sánh.'],
    [
      { h: 'Dân ca là gì?' },
      { p: 'Bài hát ra đời từ dân gian, lưu truyền qua các thế hệ — phản ánh cuộc sống, văn hoá dân tộc.' },
      { h: 'Các dòng tiêu biểu' },
      { ul: ['Mỹ: Country, Blues, Gospel.', 'Ireland: Celtic — nhịp nhanh, sáo flute.', 'Nga: Kalinka, Katyusha — buồn man mác.', 'Nhật: Sakura — đàn koto, sáo.', 'Hàn: Arirang.'] },
      { h: 'Đặc điểm chung' },
      { ul: ['Giai điệu dễ nhớ.', 'Lời gắn với đời sống.', 'Truyền miệng → có nhiều dị bản.'] },
    ],
    [
      { q: 'Dân ca khác nhạc cổ điển?', a: 'Dân ca: từ dân gian, không tác giả. Cổ điển: có tác giả, soạn cho hoà nhạc.' },
      { q: 'Sakura của nước nào?', a: 'Nhật Bản.' },
    ]
  ),

  'S8NT-w18-quiz': L(
    'Ôn tập học kì I',
    'Hệ thống nội dung HK1: nhạc lý, nhạc sĩ, mỹ thuật lịch sử.',
    ['Nhạc lý nâng cao.', 'Nhạc sĩ lớn.', 'Lịch sử mỹ thuật VN.'],
    [
      { h: 'Nhạc lý' },
      { ul: ['Đảo phách.', 'Hợp âm 7.', 'Kỹ thuật hát.', 'Recorder nâng cao.'] },
      { h: 'Nhạc sĩ' },
      { ul: ['Bach — Baroque.', 'Mozart — Cổ điển.', 'Beethoven — chuyển Cổ điển sang Lãng mạn.'] },
      { h: 'Mỹ thuật VN' },
      { ul: ['Lý — tinh tế, Phật giáo.', 'Trần — mạnh mẽ.', 'Lê — Nho giáo, tranh dân gian.', 'Nguyễn — cung đình Huế.'] },
    ],
    [
      { q: 'Thứ tự thời gian các thời?', a: 'Lý (1010) → Trần (1225) → Lê (1428) → Nguyễn (1802).' },
      { q: 'Bộ 3 đại nhạc sĩ Đức-Áo?', a: 'Bach, Mozart, Beethoven.' },
    ]
  ),

  'S8NT-w19-quiz': L(
    'Âm nhạc — Thể loại nhạc thính phòng (chamber music)',
    'Nhạc thính phòng: nhóm nhỏ (2-10 người) chơi trong phòng — tinh tế, đối thoại.',
    ['Hiểu nhạc thính phòng.', 'Các nhóm phổ biến.', 'Khác giao hưởng.'],
    [
      { h: 'Nhạc thính phòng' },
      { p: 'Là nhạc cho nhóm nhỏ, mỗi bè 1 người chơi — chơi trong phòng nhỏ thay vì hội trường lớn.' },
      { h: 'Các nhóm phổ biến' },
      { ul: ['Duet (2): violin + piano.', 'Trio (3): piano trio (violin+cello+piano).', 'Quartet (4): string quartet (2 violin+viola+cello).', 'Quintet (5): wind/string quintet.'] },
      { h: 'Khác giao hưởng' },
      { ul: ['Thính phòng: 2-10 người, mỗi bè 1 người.', 'Giao hưởng: 50-100 người, nhiều người 1 bè.'] },
    ],
    [
      { q: 'String quartet gồm những nhạc cụ nào?', a: '2 violin + 1 viola + 1 cello.' },
      { q: 'Khác nhạc thính phòng vs giao hưởng?', a: 'Số người: thính phòng ít (2-10), giao hưởng đông (50-100).' },
    ]
  ),

  'S8NT-w20-quiz': L(
    'Âm nhạc — Nhạc kịch (Opera) cơ bản',
    'Opera là sân khấu kết hợp hát + nhạc + diễn + đôi khi múa.',
    ['Hiểu opera.', 'Các vai chính.', 'Tác phẩm tiêu biểu.'],
    [
      { h: 'Opera là gì?' },
      { p: 'Tác phẩm sân khấu mà toàn bộ lời thoại được HÁT thay vì nói — kèm dàn nhạc giao hưởng.' },
      { h: 'Các giọng' },
      { ul: ['Nữ: Soprano (cao), Mezzo (trung), Alto/Contralto (thấp).', 'Nam: Tenor (cao), Baritone (trung), Bass (thấp).'] },
      { h: 'Tác phẩm tiêu biểu' },
      { ul: ['Mozart — The Magic Flute.', 'Verdi — La Traviata, Aida.', 'Puccini — Madama Butterfly, La Bohème.', 'Bizet — Carmen.'] },
    ],
    [
      { q: 'Opera hát thay vì nói — đúng không?', a: 'Đúng. Tất cả lời thoại đều hát.' },
      { q: 'Giọng nữ cao nhất?', a: 'Soprano.' },
    ]
  ),

  'S8NT-w21-quiz': L(
    'Mỹ thuật — Tranh sơn dầu cơ bản',
    'Sơn dầu là chất liệu kinh điển của hội hoạ phương Tây.',
    ['Đặc điểm sơn dầu.', 'Kỹ thuật cơ bản.', 'Bảo quản.'],
    [
      { h: 'Sơn dầu' },
      { p: 'Sơn pha với dầu lanh, khô chậm (vài ngày đến vài tuần). Cho phép sửa, đè lớp, tạo độ sâu.' },
      { h: 'Kỹ thuật' },
      { ul: ['Lớp lót (underpainting): vẽ phác bằng màu mỏng.', 'Lớp đậm: vẽ chi tiết bằng màu đậm.', 'Glazing: lớp trong suốt phủ lên — tạo độ sâu.', 'Impasto: vẽ dày, có texture.'] },
      { h: 'Bảo quản' },
      { ul: ['Tranh khô hoàn toàn ~6-12 tháng.', 'Tránh ánh sáng mặt trời trực tiếp.', 'Tránh ẩm mốc.'] },
    ],
    [
      { q: 'Sơn dầu khô nhanh hay chậm?', a: 'Chậm — vài ngày đến vài tuần (so với acrylic vài giờ).' },
      { q: 'Hoạ sĩ sơn dầu nổi tiếng?', a: 'Van Gogh, Monet, Picasso, Da Vinci...' },
    ]
  ),

  'S8NT-w22-quiz': L(
    'Mỹ thuật — Tranh lụa Việt Nam',
    'Tranh lụa là tinh hoa của mỹ thuật Việt Nam hiện đại.',
    ['Đặc điểm.', 'Hoạ sĩ tiêu biểu.', 'Kỹ thuật.'],
    [
      { h: 'Tranh lụa' },
      { p: 'Vẽ trên lụa tơ tằm bằng mực và màu nước — tạo cảm giác trong trẻo, mềm mại đặc trưng VN.' },
      { h: 'Đặc điểm' },
      { ul: ['Màu trong, nhẹ nhàng.', 'Đề tài: thiếu nữ, phong cảnh quê.', 'Phong cách thanh tao, Á Đông.'] },
      { h: 'Hoạ sĩ tiêu biểu' },
      { ul: ['Nguyễn Phan Chánh — "cha đẻ" tranh lụa VN.', 'Trần Văn Cẩn.', 'Tô Ngọc Vân.'] },
      { h: 'Tác phẩm nổi tiếng' },
      { p: '"Chơi ô ăn quan" (Nguyễn Phan Chánh) — tranh lụa nổi tiếng nhất VN.' },
    ],
    [
      { q: '"Chơi ô ăn quan" của ai?', a: 'Nguyễn Phan Chánh.' },
      { q: 'Tranh lụa vẽ bằng màu gì?', a: 'Mực và màu nước — không phải sơn dầu.' },
    ]
  ),

  'S8NT-w23-quiz': L(
    'Mỹ thuật — Lịch sử mỹ thuật VN thời Pháp thuộc',
    'Pháp thuộc (1858-1945) mang đến mỹ thuật phương Tây — đặt nền cho mỹ thuật hiện đại VN.',
    ['Trường Mỹ thuật Đông Dương.', 'Hoạ sĩ tiêu biểu.', 'Tác phẩm.'],
    [
      { h: 'Trường Mỹ thuật Đông Dương (1925)' },
      { p: 'Do người Pháp lập tại Hà Nội — đào tạo hoạ sĩ VN theo phương pháp châu Âu. Là cái nôi của mỹ thuật hiện đại VN.' },
      { h: 'Hoạ sĩ tiêu biểu' },
      { ul: ['Tô Ngọc Vân — "Em Thuý".', 'Nguyễn Phan Chánh — tranh lụa.', 'Trần Văn Cẩn — "Em bé cho chim ăn".', 'Lê Phổ, Vũ Cao Đàm — sang Pháp.'] },
      { h: 'Đặc điểm' },
      { ul: ['Học kỹ thuật phương Tây nhưng giữ tâm hồn Việt.', 'Đề tài: thiếu nữ, làng quê, sinh hoạt.', 'Pha trộn Đông-Tây.'] },
    ],
    [
      { q: '"Em Thuý" của ai?', a: 'Tô Ngọc Vân (1943).' },
      { q: 'Trường Mỹ thuật Đông Dương lập năm nào?', a: '1925.' },
    ]
  ),

  'S8NT-w24-quiz': L(
    'Âm nhạc — Nhạc Romantic (Chopin, Schumann, Schubert)',
    'Thời Lãng mạn (1820-1900) — cảm xúc mãnh liệt, cá nhân, tự do.',
    ['Đặc trưng Romantic.', '3 nhạc sĩ tiêu biểu.', 'Tác phẩm.'],
    [
      { h: 'Đặc trưng' },
      { ul: ['Cảm xúc mãnh liệt.', 'Tự do hơn về hình thức.', 'Hoà thanh phong phú.', 'Khám phá nội tâm cá nhân.'] },
      { h: '3 nhạc sĩ Romantic' },
      { ul: ['Chopin (Ba Lan) — "thi sĩ piano". Nocturne, Mazurka, Ballade.', 'Schumann (Đức) — sáng tác piano + lieder. Carnaval, Träumerei.', 'Schubert (Áo) — 600+ ca khúc (lieder). Ave Maria, Serenade.'] },
      { h: 'Câu chuyện' },
      { p: 'Chopin sống cô đơn ở Paris, mất sớm vì lao phổi. Schubert mất ở tuổi 31. Schumann điên cuối đời. Bi kịch là chủ đề chung.' },
    ],
    [
      { q: 'Chopin nổi tiếng nhạc cụ gì?', a: 'Piano — hầu hết tác phẩm là piano solo.' },
      { q: 'Lieder là gì?', a: 'Bài hát nghệ thuật tiếng Đức — Schubert là bậc thầy.' },
    ]
  ),

  'S8NT-w25-quiz': L(
    'Âm nhạc — Nhạc dân ca Việt Nam vùng miền',
    'Mỗi vùng VN có dân ca riêng — phản ánh đời sống và tâm hồn người dân.',
    ['Dân ca Bắc Bộ.', 'Dân ca Trung Bộ.', 'Dân ca Nam Bộ.'],
    [
      { h: 'Bắc Bộ' },
      { ul: ['Quan họ Bắc Ninh (UNESCO 2009) — hát đôi nam nữ.', 'Hát chèo — sân khấu dân gian.', 'Hát xẩm — hát rong với đàn nhị.'] },
      { h: 'Trung Bộ' },
      { ul: ['Hò Huế, Ca Huế trên sông Hương.', 'Bài chòi Quảng Nam (UNESCO 2017).', 'Hò Khoan Lệ Thuỷ.'] },
      { h: 'Nam Bộ' },
      { ul: ['Đờn ca tài tử (UNESCO 2013) — gốc Nam Bộ.', 'Cải lương — sân khấu Nam Bộ.', 'Hò Đồng Tháp, Hò Tiền Giang.'] },
    ],
    [
      { q: 'Quan họ Bắc Ninh được UNESCO công nhận năm nào?', a: '2009 — Di sản văn hoá phi vật thể nhân loại.' },
      { q: 'Đờn ca tài tử của vùng nào?', a: 'Nam Bộ — đặc biệt miền Tây.' },
    ]
  ),

  'S8NT-w26-quiz': L(
    'Mỹ thuật — Thiết kế ứng dụng (graphic design)',
    'Graphic design = mỹ thuật phục vụ truyền thông.',
    ['Hiểu graphic design.', 'Các lĩnh vực.', 'Nguyên tắc thiết kế.'],
    [
      { h: 'Graphic design' },
      { p: 'Là nghệ thuật kết hợp hình ảnh, chữ, màu sắc để truyền đạt thông điệp — phục vụ truyền thông, quảng cáo.' },
      { h: 'Các lĩnh vực' },
      { ul: ['Branding: logo, nhận diện thương hiệu.', 'Bao bì: hộp, nhãn.', 'Web/App: UI/UX design.', 'In ấn: poster, brochure, sách.', 'Digital: mạng xã hội, banner web.'] },
      { h: 'Nguyên tắc' },
      { ul: ['Cân bằng (balance).', 'Đối lập (contrast).', 'Nhịp điệu (rhythm).', 'Phân cấp (hierarchy).', 'Khoảng trắng (white space).'] },
    ],
    [
      { q: 'UI/UX design là gì?', a: 'UI: giao diện người dùng. UX: trải nghiệm người dùng. Cả 2 là phần của graphic design.' },
      { q: 'Khoảng trắng có quan trọng?', a: 'Rất. Khoảng trắng giúp thiết kế "thở" — không rối, dễ đọc.' },
    ]
  ),

  'S8NT-w27-quiz': L(
    'Mỹ thuật — Tranh vẽ đời sống',
    'Tranh vẽ đời sống bắt khoảnh khắc đời thường — gần gũi và xúc động.',
    ['Quan sát đời sống.', 'Chọn khoảnh khắc.', 'Bố cục và cảm xúc.'],
    [
      { h: 'Quan sát' },
      { ul: ['Quan sát sinh hoạt gia đình, đường phố.', 'Ghi nhớ chi tiết: ánh sáng, biểu cảm.', 'Phác hoạ nhanh (sketch) tại chỗ.'] },
      { h: 'Khoảnh khắc đắt giá' },
      { p: 'Khoảnh khắc giàu cảm xúc: mẹ ru con, ông cụ ngồi đường, trẻ chơi mưa, công nhân lao động.' },
      { h: 'Bố cục' },
      { ul: ['Tâm điểm là nhân vật chính.', 'Bối cảnh hỗ trợ, không lấn át.', 'Ánh sáng tạo cảm xúc.'] },
      { note: 'Tranh đời sống không cần đẹp — cần CHÂN THẬT và CÓ HỒN.' },
    ],
    [
      { q: 'Hoạ sĩ VN vẽ tranh đời sống nổi tiếng?', a: 'Bùi Xuân Phái — "Phố Phái" Hà Nội.' },
      { q: 'Yếu tố quan trọng nhất của tranh đời sống?', a: 'Chân thật và cảm xúc — kỹ thuật là thứ yếu.' },
    ]
  ),

  'S8NT-w28-quiz': L(
    'Âm nhạc — Nhạc cụ dân tộc Việt Nam',
    'Nhạc cụ dân tộc VN đa dạng — gắn liền văn hoá vùng miền.',
    ['Nhóm nhạc cụ.', 'Nhạc cụ tiêu biểu.', 'Bảo tồn.'],
    [
      { h: '4 nhóm nhạc cụ' },
      { ul: ['Dây: đàn tranh, đàn nhị, đàn bầu, đàn nguyệt.', 'Hơi: sáo trúc, kèn bầu, tù và.', 'Gõ: trống, cồng chiêng, mõ.', 'Tự thân: sênh tiền.'] },
      { h: 'Nhạc cụ đặc trưng' },
      { ul: ['Đàn bầu: 1 dây, độc nhất VN.', 'Đàn tranh: 16 dây.', 'Cồng chiêng Tây Nguyên (UNESCO 2005).', 'Sáo trúc.'] },
      { h: 'Bảo tồn' },
      { p: 'Học viện Âm nhạc Quốc gia có khoa Nhạc cụ Dân tộc. Liên hoan dân ca, hội diễn — giữ gìn cho thế hệ sau.' },
    ],
    [
      { q: 'Nhạc cụ độc nhất của VN?', a: 'Đàn bầu — chỉ 1 dây nhưng đánh được nhiều cao độ nhờ cần đàn.' },
      { q: 'Cồng chiêng Tây Nguyên UNESCO năm nào?', a: '2005.' },
    ]
  ),

  'S8NT-w29-quiz': L(
    'Âm nhạc — Hình thức bài hát (verse-chorus, A-B-A)',
    'Hiểu cấu trúc bài hát giúp nghe sâu và sáng tác.',
    ['Hiểu verse-chorus.', 'Hiểu A-B-A.', 'Phân tích bài hát.'],
    [
      { h: 'Verse-Chorus (phổ biến nhạc pop)' },
      { ul: ['Verse (đoạn lời): kể chuyện, ít nhớ.', 'Chorus (điệp khúc): hấp dẫn, dễ nhớ, lặp lại.', 'Bridge: đoạn chuyển khác lạ trước chorus cuối.', 'Cấu trúc: Verse → Chorus → Verse → Chorus → Bridge → Chorus.'] },
      { h: 'A-B-A (nhạc cổ điển, dân ca)' },
      { ul: ['A: chủ đề chính.', 'B: chủ đề tương phản.', 'A: trở lại chủ đề chính (đôi khi biến tấu).'] },
      { h: 'Phân tích' },
      { p: 'Nghe bài quen → xác định verse, chorus, bridge ở đâu.' },
    ],
    [
      { q: 'Chorus có vai trò gì?', a: 'Đoạn dễ nhớ nhất, lặp lại nhiều lần — "linh hồn" bài hát.' },
      { q: 'A-B-A là cấu trúc của thể loại nào?', a: 'Nhạc cổ điển và dân ca.' },
    ]
  ),

  'S8NT-w30-quiz': L(
    'Mỹ thuật — Trang trí và ứng dụng (ergonomic design)',
    'Thiết kế đẹp PHẢI đi đôi với thoải mái, an toàn cho người dùng.',
    ['Hiểu ergonomic.', 'Ví dụ thực tế.', 'Áp dụng đời sống.'],
    [
      { h: 'Ergonomic design' },
      { p: 'Là thiết kế ưu tiên sự thoải mái, hiệu quả, an toàn của người sử dụng.' },
      { h: 'Ví dụ' },
      { ul: ['Bút chì 3 cạnh (dễ cầm).', 'Bàn phím gập (giảm đau cổ tay).', 'Ghế công thái học (lưng cong).', 'Tay nắm cửa thấp cho trẻ.', 'Đèn xanh-đỏ to cho người mù màu.'] },
      { h: 'Nguyên tắc' },
      { ul: ['Phù hợp cơ thể con người.', 'Dễ sử dụng, không cần học nhiều.', 'An toàn — không gây hại.', 'Bao trùm (inclusive) — cả người khuyết tật dùng được.'] },
    ],
    [
      { q: 'Vì sao bút chì lục giác?', a: 'Không lăn khi đặt bàn, dễ cầm hơn bút tròn.' },
      { q: 'Ergonomic design ưu tiên gì hơn đẹp?', a: 'Sự thoải mái và an toàn — đẹp là thứ yếu.' },
    ]
  ),

  'S8NT-w31-quiz': L(
    'Âm nhạc — Sáng tác và biểu diễn nhóm',
    'Sáng tác và biểu diễn cùng nhóm rèn nhiều kỹ năng.',
    ['Quy trình sáng tác.', 'Phân vai trong nhóm.', 'Biểu diễn.'],
    [
      { h: 'Quy trình sáng tác' },
      { ul: ['Chọn chủ đề (tình bạn, gia đình, ước mơ).', 'Viết lời (verse + chorus).', 'Sáng giai điệu — bắt đầu từ chorus.', 'Đệm hợp âm cơ bản (4 hợp âm: C-Am-F-G hoặc tương tự).', 'Hoà âm.'] },
      { h: 'Phân vai nhóm' },
      { ul: ['Hát chính (lead vocal).', 'Bè (backing vocal).', 'Guitar/piano đệm.', 'Trống cajon/percussion.'] },
      { h: 'Biểu diễn' },
      { ul: ['Tập đều, đúng nhịp.', 'Tự tin trên sân khấu.', 'Tương tác khán giả.'] },
    ],
    [
      { q: '4 hợp âm "kẹo ngọt" phổ biến?', a: 'C - G - Am - F (hoặc tonality khác: I - V - vi - IV).' },
      { q: 'Bắt đầu sáng tác bài hát thường từ đâu?', a: 'Chorus (điệp khúc) — phần "hook" hấp dẫn nhất.' },
    ]
  ),

  'S8NT-w32-quiz': L(
    'Mỹ thuật — Sắp đặt (Installation art)',
    'Installation art tạo trải nghiệm 3D toàn diện — vượt ra ngoài tranh treo.',
    ['Hiểu installation art.', 'Ví dụ nổi tiếng.', 'Khác tranh truyền thống.'],
    [
      { h: 'Installation art' },
      { p: 'Tác phẩm chiếm cả 1 không gian, người xem bước vào và trải nghiệm — không chỉ "xem từ xa".' },
      { h: 'Đặc điểm' },
      { ul: ['Trải nghiệm 3D, đôi khi 4D (ánh sáng, âm thanh, mùi).', 'Người xem tương tác.', 'Thường tạm thời (gỡ sau triển lãm).'] },
      { h: 'Ví dụ' },
      { ul: ['"The Weather Project" (Olafur Eliasson) — mặt trời nhân tạo trong Tate Modern.', 'Yayoi Kusama — phòng gương vô hạn.', 'Banksy — tranh tường + sắp đặt.'] },
      { h: 'Khác tranh' },
      { p: 'Tranh: 2D, treo trên tường. Installation: 3D, người bước vào.' },
    ],
    [
      { q: 'Installation art khác tranh ở đâu?', a: 'Installation: 3D, không gian, tương tác. Tranh: 2D, treo, xem.' },
      { q: 'Yayoi Kusama nổi tiếng với gì?', a: 'Phòng gương vô hạn với chấm tròn (polka dots).' },
    ]
  ),

  'S8NT-w33-quiz': L(
    'Mỹ thuật — Nhiếp ảnh (photography) cơ bản',
    'Nhiếp ảnh là mỹ thuật hiện đại — ai có điện thoại đều có thể bắt đầu.',
    ['Hiểu nguyên tắc bố cục.', 'Ánh sáng.', 'Khung hình.'],
    [
      { h: 'Bố cục' },
      { ul: ['Quy tắc 1/3 (rule of thirds).', 'Đường dẫn (leading lines).', 'Khung trong khung (frame within frame).', 'Đối xứng (symmetry).'] },
      { h: 'Ánh sáng' },
      { ul: ['Golden hour: 1h sau bình minh / 1h trước hoàng hôn — ánh sáng vàng đẹp.', 'Blue hour: 30 phút sau hoàng hôn — xanh dịu.', 'Tránh nắng trưa (gắt, bóng đậm).'] },
      { h: 'Khung hình' },
      { ul: ['Ngang (landscape): phong cảnh.', 'Dọc (portrait): chân dung, mạng xã hội.', 'Vuông: Instagram.'] },
    ],
    [
      { q: 'Golden hour là gì?', a: '1h sau bình minh hoặc 1h trước hoàng hôn — ánh sáng vàng ấm đẹp nhất.' },
      { q: 'Quy tắc 1/3 là gì?', a: 'Chia khung 3x3, đặt chủ thể ở giao điểm hoặc đường chia.' },
    ]
  ),

  'S8NT-w34-quiz': L(
    'Tổng kết — Triển lãm/biểu diễn cuối năm',
    'Tổng kết năm học bằng triển lãm/biểu diễn — đánh giá toàn diện.',
    ['Chuẩn bị triển lãm.', 'Biểu diễn nhóm.', 'Đánh giá đồng đẳng.'],
    [
      { h: 'Chuẩn bị triển lãm' },
      { ul: ['Chọn tác phẩm tốt nhất cả năm.', 'Đặt tên + chú thích.', 'Sắp xếp theo chủ đề.', 'Trang trí phòng triển lãm.'] },
      { h: 'Biểu diễn' },
      { ul: ['Hợp xướng cả lớp.', 'Bài quyền võ (chéo môn với GDTC).', 'Bài hát/nhạc cụ nhóm.', 'Múa hiện đại.'] },
      { h: 'Đánh giá đồng đẳng' },
      { p: 'Bạn bè bình chọn tác phẩm yêu thích. Giáo viên đánh giá kỹ thuật và sáng tạo.' },
    ],
    [
      { q: 'Triển lãm cần gì để hấp dẫn?', a: 'Tác phẩm chất lượng + chú thích rõ + sắp xếp đẹp + không gian phù hợp.' },
      { q: 'Đánh giá đồng đẳng là gì?', a: 'Bạn bè cùng đánh giá nhau — học cách nhìn nhận khách quan.' },
    ]
  ),

  'S8NT-w35-quiz': L(
    'Ôn tập cuối năm',
    'Tổng kết toàn bộ Nghệ thuật 8: âm nhạc và mỹ thuật.',
    ['Hệ thống âm nhạc.', 'Hệ thống mỹ thuật.', 'Định hướng tiếp.'],
    [
      { h: 'Âm nhạc' },
      { ul: ['Nhạc lý: đảo phách, hợp âm 7.', 'Nhạc sĩ lớn: Bach, Mozart, Beethoven, Chopin.', 'Dân ca quốc tế và VN.', 'Hình thức bài hát, sáng tác nhóm.'] },
      { h: 'Mỹ thuật' },
      { ul: ['Luật xa gần, ký hoạ chân dung.', 'Lịch sử MT VN: Lý-Trần-Lê-Nguyễn-Pháp thuộc.', 'Tranh sơn dầu, tranh lụa.', 'Graphic design, installation, photography.'] },
      { note: 'Nghệ thuật không phải để "giỏi" mà để cảm nhận và biểu đạt — học suốt đời.' },
    ],
    [
      { q: '3 nhạc sĩ Cổ điển vĩ đại nhất?', a: 'Bach, Mozart, Beethoven.' },
      { q: '4 thời mỹ thuật VN đã học?', a: 'Lý, Trần, Lê, Nguyễn + Pháp thuộc.' },
    ]
  ),
};
