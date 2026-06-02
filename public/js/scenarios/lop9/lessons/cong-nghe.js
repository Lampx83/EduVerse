// ============================================================
// Lớp 9 · Công nghệ — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Mạch nội dung: điện dân dụng → nông nghiệp → sửa xe đạp → nấu ăn → hướng nghiệp.
// Key trùng id quiz: "S9CN-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9CN_LESSONS = {
  'S9CN-w01-quiz': L(
    'Giới thiệu nghề điện dân dụng',
    'Lớp 9 mở đầu với mô-đun điện dân dụng — kĩ năng nền tảng cho mọi gia đình hiện đại và là cơ hội nghề nghiệp thiết thực.',
    ['Hiểu vai trò của nghề điện dân dụng.', 'Nắm yêu cầu và đặc điểm lao động.', 'Có ý thức an toàn khi tiếp xúc điện.'],
    [
      { h: 'Vai trò nghề điện dân dụng' },
      { p: 'Nghề điện dân dụng phục vụ lắp đặt, sửa chữa hệ thống điện trong gia đình, trường học, cơ quan — góp phần đảm bảo sinh hoạt và sản xuất.' },
      { h: 'Đặc điểm và yêu cầu' },
      { ul: ['Làm việc trong nhà, ngoài trời; thường xuyên tiếp xúc điện áp 220V.', 'Cần có sức khoẻ tốt, thị lực bình thường, không sợ độ cao.', 'Cần kiến thức về điện, cơ khí; tính cẩn thận, tỉ mỉ.'] },
      { h: 'Triển vọng' },
      { p: 'Cùng với điện hoá nông thôn, nhà thông minh và năng lượng tái tạo, nghề điện dân dụng tiếp tục phát triển và có thu nhập ổn định.' },
      { note: 'An toàn điện luôn đặt lên trên hết — một sai sót nhỏ có thể nguy hiểm đến tính mạng.' },
    ],
    [
      { q: 'Vì sao thợ điện cần có sức khoẻ tốt và không sợ độ cao?', a: 'Vì công việc thường phải leo cột điện, thao tác trên cao, kéo dây dài, mang vật liệu nặng.' },
      { q: 'Em đánh giá triển vọng nghề điện dân dụng hiện nay?', a: 'Rất tốt — nhà ở ngày càng nhiều thiết bị, năng lượng mặt trời phát triển, nhu cầu thợ điện có tay nghề luôn cao.' },
    ]
  ),

  'S9CN-w02-quiz': L(
    'Vật liệu điện dùng trong lắp đặt mạng điện trong nhà',
    'Tuần này các em làm quen với hai nhóm vật liệu cốt lõi: dây dẫn và vật liệu cách điện — hiểu rõ trước khi cầm tay vào lắp đặt.',
    ['Phân biệt vật liệu dẫn điện và cách điện.', 'Nhận biết các loại dây dẫn phổ biến.', 'Biết chọn vật liệu phù hợp công suất.'],
    [
      { h: 'Phân loại vật liệu' },
      { ul: ['Vật liệu dẫn điện: đồng, nhôm (lõi dây).', 'Vật liệu cách điện: nhựa PVC, cao su, sứ, thuỷ tinh.', 'Vật liệu dẫn từ: thép kĩ thuật điện (trong biến áp, động cơ).'] },
      { h: 'Dây dẫn điện' },
      { p: 'Dây dẫn gồm lõi (đồng/nhôm) và vỏ cách điện. Có dây trần và dây có vỏ; dây 1 lõi, nhiều lõi; mềm, cứng tuỳ ứng dụng.' },
      { h: 'Chọn dây theo dòng điện' },
      { ul: ['Tiết diện càng lớn, chịu dòng càng cao.', 'Dùng nhỏ hơn yêu cầu → dây nóng, dễ cháy.', 'Mạng điện gia đình thường dùng 1.5–2.5 mm² cho ổ cắm.'] },
      { note: 'Trên dây luôn ghi thông số: VD "Cu/PVC 2×2.5mm²" — đồng, vỏ PVC, 2 lõi, tiết diện 2.5mm².' },
    ],
    [
      { q: 'Vì sao không dùng nhôm thay đồng cho dây trong nhà dù nhôm rẻ hơn?', a: 'Nhôm dẫn điện kém hơn đồng, dễ gãy khi uốn nhiều, lâu ngày oxi hoá ở mối nối gây phát nhiệt. Đồng bền và an toàn hơn cho mạng điện trong nhà.' },
      { q: 'Bếp từ 2000W. Em chọn dây tiết diện bao nhiêu?', a: 'Bếp 2000W ở 220V → ~9A. Nên dùng dây đồng 2.5mm² trở lên để đảm bảo an toàn và dự phòng.' },
    ]
  ),

  'S9CN-w03-quiz': L(
    'Dụng cụ dùng trong lắp đặt mạng điện',
    'Trước khi thực hành, các em cần nhận biết và sử dụng đúng dụng cụ cầm tay và dụng cụ đo — đây cũng là nội dung lý thuyết hay xuất hiện trong đề thi.',
    ['Phân loại dụng cụ cơ khí và đo lường.', 'Biết công dụng từng dụng cụ.', 'Có ý thức bảo quản dụng cụ.'],
    [
      { h: 'Dụng cụ cơ khí' },
      { ul: ['Kìm cắt, kìm tuốt dây, kìm mỏ nhọn, kìm điện.', 'Tua vít các loại (cạnh, bake, có cách điện).', 'Búa, khoan, cưa, dao tách vỏ.'] },
      { h: 'Dụng cụ đo lường' },
      { ul: ['Bút thử điện: kiểm tra có điện hay không.', 'Đồng hồ vạn năng (VOM): đo U, I, R.', 'Ampe kìm: đo dòng không cần ngắt mạch.', 'Mê-gôm-mét: đo điện trở cách điện.'] },
      { h: 'Bảo quản' },
      { p: 'Cất dụng cụ nơi khô ráo, sạch sẽ; tay cầm tua vít, kìm phải nguyên vỏ cách điện; kiểm tra trước khi sử dụng.' },
      { note: 'Tua vít có vỏ cách điện ghi 1000V chỉ chịu được áp đó — vẫn phải cắt aptomat trước khi thao tác.' },
    ],
    [
      { q: 'Bút thử điện sáng khi chạm vào vỏ kim loại của bếp. Điều này nghĩa là gì?', a: 'Vỏ bếp bị rò điện — cực kì nguy hiểm. Em cần cắt aptomat ngay, không chạm vào và báo người lớn để kiểm tra dây nối đất.' },
      { q: 'Vì sao không nên dùng kìm thường thay kìm điện?', a: 'Kìm thường không có vỏ cách điện ở tay cầm. Khi thao tác với dây có điện rất dễ bị giật, nguy hiểm tính mạng.' },
    ]
  ),

  'S9CN-w04-quiz': L(
    'Đồng hồ vạn năng (VOM) — Sử dụng',
    'VOM là dụng cụ đo quan trọng nhất của thợ điện. Tuần này các em học cách đọc thang đo và đo đúng đại lượng.',
    ['Nhận biết các thang đo trên VOM.', 'Biết cách đo U, I, R.', 'Tránh các lỗi gây hỏng VOM.'],
    [
      { h: 'Cấu tạo VOM' },
      { p: 'VOM gồm núm xoay chọn thang đo, hai que đo (đỏ - đen) và mặt hiển thị. VOM số hiển thị trực tiếp, VOM kim đọc theo vạch.' },
      { h: 'Các thang đo chính' },
      { ul: ['DCV / VDC: đo điện áp một chiều.', 'ACV / VAC: đo điện áp xoay chiều (220V).', 'DCA: đo dòng một chiều.', 'Ω: đo điện trở (phải ngắt nguồn).'] },
      { h: 'Quy tắc đo' },
      { ul: ['Đo U: mắc song song; chọn thang lớn hơn giá trị dự đoán.', 'Đo I: mắc nối tiếp; cẩn thận chọn thang đúng.', 'Đo R: ngắt nguồn hoàn toàn, không chạm tay vào que đo.'] },
      { note: 'Lỗi phổ biến: đo I nhưng để thang đo U → cháy cầu chì hoặc hỏng VOM ngay lập tức.' },
    ],
    [
      { q: 'Em đo điện áp ổ cắm gia đình thì chọn thang nào?', a: 'Chọn ACV thang 250V hoặc 500V (lớn hơn 220V). Cắm que đo song song vào hai lỗ ổ cắm.' },
      { q: 'Vì sao đo điện trở phải ngắt nguồn?', a: 'Vì khi đo R, VOM tự cấp nguồn nhỏ từ pin trong máy. Nếu mạch còn điện sẽ làm sai số lớn và có thể hỏng VOM.' },
    ]
  ),

  'S9CN-w05-quiz': L(
    'Nối dây dẫn điện',
    'Mối nối dây là chi tiết tưởng nhỏ nhưng quyết định an toàn cả mạng điện. Tuần này các em học các kiểu nối cơ bản trước khi thực hành.',
    ['Hiểu yêu cầu của mối nối tốt.', 'Nhận biết các kiểu nối: thẳng, phân nhánh, dùng phụ kiện.', 'Biết cách bọc cách điện mối nối.'],
    [
      { h: 'Yêu cầu mối nối' },
      { ul: ['Dẫn điện tốt: điện trở mối nối nhỏ.', 'Có độ bền cơ học: không bị tuột khi kéo nhẹ.', 'An toàn điện: được cách điện kín.', 'Mỹ thuật: gọn gàng, đều đặn.'] },
      { h: 'Phân loại mối nối' },
      { ul: ['Theo cấu trúc: nối thẳng (hai đầu cùng phương), nối phân nhánh (rẽ T).', 'Theo cách thực hiện: nối xoắn, nối hàn, nối bằng phụ kiện (cosse, terminal).'] },
      { h: 'Quy trình nối xoắn' },
      { p: 'Bước 1: bóc vỏ cách điện ~3cm. Bước 2: làm sạch lõi. Bước 3: xoắn hai đầu dây vào nhau ít nhất 5-6 vòng đều. Bước 4: hàn thiếc nếu yêu cầu cao. Bước 5: bọc băng keo cách điện trùm kín mối xoắn.' },
      { note: 'Mối nối không bọc cách điện = bom hẹn giờ — chạm vỏ, chập cháy có thể xảy ra bất cứ lúc nào.' },
    ],
    [
      { q: 'Em nối hai dây nhưng không bọc băng keo. Hệ quả?', a: 'Mối nối hở dễ chạm vỏ ổ cắm, chạm với dây khác gây chập cháy; có thể bị điện giật khi chạm vào.' },
      { q: 'Vì sao mối nối kém làm bóng đèn yếu hơn?', a: 'Mối nối kém có điện trở lớn, làm sụt áp và tỏa nhiệt tại đó. Đèn nhận điện áp thấp hơn nên sáng yếu, đồng thời mối nối có thể nóng đỏ gây cháy.' },
    ]
  ),

  'S9CN-w06-quiz': L(
    'Thực hành: Nối dây dẫn — Nối thẳng',
    'Tuần thực hành đầu tiên — các em luyện kĩ năng nối thẳng hai đoạn dây, vừa đảm bảo dẫn điện vừa đảm bảo mỹ thuật.',
    ['Thực hiện đúng quy trình nối thẳng.', 'Đạt yêu cầu kĩ thuật và mỹ thuật.', 'Rèn tính cẩn thận, tỉ mỉ.'],
    [
      { h: 'Chuẩn bị' },
      { ul: ['Hai đoạn dây đồng cùng cỡ.', 'Kìm tuốt dây, kìm điện, kìm cắt.', 'Băng keo cách điện, thiếc hàn (nếu có).'] },
      { h: 'Quy trình nối thẳng' },
      { ul: ['Bước 1: cắt và bóc vỏ mỗi đầu khoảng 3-5cm.', 'Bước 2: làm sạch lõi (cạo lớp oxit nếu có).', 'Bước 3: bẻ cong lõi vuông góc thành hình chữ L.', 'Bước 4: móc hai đầu vào nhau, dùng kìm xoắn đều 5-7 vòng.', 'Bước 5: cắt phần thừa, ép sát thân dây.', 'Bước 6: bọc băng keo phủ kín, dài hơn phần kim loại 1cm mỗi bên.'] },
      { h: 'Tiêu chí đánh giá' },
      { p: 'Mối nối chắc khi kéo nhẹ, các vòng xoắn đều, không lộ kim loại, băng keo dán phẳng, không phồng rộp.' },
      { note: 'Quan sát đôi tay của thầy cô khi làm mẫu — kĩ năng nghề là sự lặp đi lặp lại nhiều lần.' },
    ],
    [
      { q: 'Em xoắn 2 vòng rồi nghĩ "thế là đủ". Đánh giá?', a: 'Chưa đạt. Phải xoắn tối thiểu 5-6 vòng đều — mối nối mới đủ độ bền cơ học và tiếp xúc điện ổn định.' },
      { q: 'Băng keo bọc ngắn hơn phần lõi đồng. Hậu quả?', a: 'Một phần kim loại lộ ra ngoài, có thể chạm với dây khác hoặc vỏ thiết bị, gây điện giật và chập cháy.' },
    ]
  ),

  'S9CN-w07-quiz': L(
    'Thực hành: Nối dây phân nhánh + dùng phụ kiện',
    'Tiếp tục mạch thực hành, các em học nối rẽ T và sử dụng đầu cosse — kĩ năng thường dùng khi đấu dây vào ổ cắm, công tắc.',
    ['Thực hiện được nối phân nhánh kiểu T.', 'Bấm và lắp được đầu cosse đúng kĩ thuật.', 'Rèn an toàn lao động.'],
    [
      { h: 'Nối phân nhánh chữ T' },
      { p: 'Dùng khi từ một dây chính rẽ nhánh sang một điểm khác. Bóc vỏ dây chính ~5cm, dây nhánh ~7cm. Quấn dây nhánh quanh dây chính 5-6 vòng đều, cắt phần thừa, ép sát rồi bọc băng keo.' },
      { h: 'Sử dụng đầu cosse' },
      { ul: ['Cosse là phụ kiện kim loại bọc đầu dây để bắt vít vào ổ cắm/aptomat.', 'Bóc vỏ khoảng 8-10mm.', 'Luồn lõi vào ống cosse rồi dùng kìm bấm cosse ép chặt.', 'Cosse có nhiều cỡ — chọn đúng tiết diện dây.'] },
      { h: 'An toàn khi thao tác' },
      { ul: ['Luôn ngắt aptomat trước khi đấu dây.', 'Đầu dây trần phải ngắn, không thò ra khỏi vít kẹp.', 'Kiểm tra bằng bút thử điện trước khi đóng nguồn.'] },
      { note: 'Đầu cosse lỏng là nguyên nhân hàng đầu gây cháy ổ cắm — phải bấm thật chặt.' },
    ],
    [
      { q: 'Vì sao đấu trực tiếp dây mềm vào vít kẹp ổ cắm dễ hỏng?', a: 'Dây mềm có nhiều sợi nhỏ, bắt vít trực tiếp dễ tuột, gãy sợi và tiếp xúc kém. Nên dùng đầu cosse bấm chặt rồi bắt vít qua cosse.' },
      { q: 'Sau khi nối nhánh xong em quên kiểm tra bằng bút thử điện. Rủi ro?', a: 'Có thể mối nối còn lỏng, chạm vỏ, hoặc đấu nhầm pha-trung tính. Mở nguồn ngay có thể chập cháy hoặc gây giật.' },
    ]
  ),

  'S9CN-w08-quiz': L(
    'Lắp đặt mạch điện bảng điện',
    'Bảng điện là trung tâm điều khiển của mỗi căn phòng. Hiểu sơ đồ và cách lắp giúp em vừa thực hành tốt vừa nắm chắc kiến thức thi.',
    ['Đọc được sơ đồ nguyên lí và sơ đồ lắp đặt.', 'Hiểu chức năng các thiết bị trên bảng điện.', 'Tuân thủ quy tắc an toàn khi lắp.'],
    [
      { h: 'Khái niệm bảng điện' },
      { p: 'Bảng điện là nơi tập trung các thiết bị đóng cắt, bảo vệ và lấy điện cho phụ tải (đèn, ổ cắm, quạt...).' },
      { h: 'Các thiết bị cơ bản' },
      { ul: ['Cầu chì / aptomat: bảo vệ quá tải, ngắn mạch.', 'Công tắc: đóng/cắt mạch đèn.', 'Ổ cắm: lấy điện cho thiết bị di động.', 'Đui đèn: kết nối bóng đèn.'] },
      { h: 'Sơ đồ nguyên lí và sơ đồ lắp đặt' },
      { ul: ['Sơ đồ nguyên lí: thể hiện mối liên hệ điện, không quan tâm vị trí thực.', 'Sơ đồ lắp đặt: thể hiện vị trí thực của thiết bị trên bảng.', 'Vẽ sơ đồ nguyên lí trước, sơ đồ lắp đặt sau.'] },
      { note: 'Aptomat luôn đặt đầu mạch, trước các thiết bị; dây pha (L) đi qua công tắc, dây trung tính (N) nối thẳng tới đèn.' },
    ],
    [
      { q: 'Vì sao công tắc phải đặt trên dây pha (L), không phải dây trung tính (N)?', a: 'Khi tắt công tắc trên dây pha, đèn hoàn toàn không còn điện — an toàn khi thay bóng. Nếu đặt trên dây N, đèn vẫn có pha rò qua, dễ giật điện.' },
      { q: 'Aptomat thay cho cầu chì có ưu điểm gì?', a: 'Aptomat có thể đóng lại sau khi xử lý sự cố, không cần thay; ngắt nhanh, an toàn hơn và có thêm chức năng chống quá tải.' },
    ]
  ),

  'S9CN-w09-quiz': L(
    'Thực hành: Lắp bảng điện 1 cầu chì + 1 ổ cắm + 1 công tắc + 1 bóng đèn',
    'Bài thực hành tổng hợp — lắp một bảng điện đầy đủ chức năng. Đây là kĩ năng thực tế các em có thể dùng ngay tại nhà.',
    ['Lắp đúng sơ đồ nguyên lí và sơ đồ lắp đặt.', 'Đấu dây gọn gàng, an toàn.', 'Vận hành thử mạch đúng kĩ thuật.'],
    [
      { h: 'Vẽ sơ đồ trước khi lắp' },
      { p: 'Nguồn 220V → cầu chì → tách 2 nhánh: (1) qua công tắc → đui đèn, (2) tới ổ cắm. Dây trung tính nối thẳng từ nguồn tới đèn và ổ cắm.' },
      { h: 'Quy trình lắp đặt' },
      { ul: ['Bước 1: chuẩn bị bảng nhựa, thiết bị, dây.', 'Bước 2: bố trí thiết bị trên bảng, đánh dấu vị trí lỗ khoan.', 'Bước 3: khoan, bắt vít cố định thiết bị.', 'Bước 4: đi dây theo sơ đồ, đấu vào các đầu cốt.', 'Bước 5: kiểm tra mối nối, đo thông mạch bằng VOM.', 'Bước 6: cấp nguồn thử, quan sát.'] },
      { h: 'Kiểm tra trước khi cấp nguồn' },
      { ul: ['Không có ngắn mạch giữa L và N (đo R thấy ∞ khi công tắc tắt).', 'Vít chặt, không lỏng.', 'Vỏ thiết bị không chạm dây trần.'] },
      { note: 'Mọi cuộc đấu dây phải kết thúc bằng kiểm tra thông mạch — đừng tin "cảm giác làm đúng".' },
    ],
    [
      { q: 'Khi bật công tắc đèn không sáng. Em kiểm tra theo thứ tự nào?', a: 'Lần lượt: (1) cầu chì còn nguyên không, (2) bóng đèn có cháy không, (3) công tắc có đóng mạch không (dùng bút thử / VOM), (4) đui đèn tiếp xúc tốt không, (5) dây đứt ở đâu.' },
      { q: 'Ổ cắm hoạt động nhưng đèn không sáng. Sự cố có thể ở đâu?', a: 'Ổ cắm hoạt động chứng tỏ nguồn và cầu chì OK. Sự cố nằm trong nhánh đèn: công tắc hỏng, bóng cháy, hoặc dây từ công tắc tới đui bị đứt.' },
    ]
  ),

  'S9CN-w10-quiz': L(
    'Lắp đặt mạch điện đèn ống huỳnh quang',
    'Đèn ống huỳnh quang vẫn rất phổ biến ở trường học, văn phòng. Hiểu nguyên lí giúp các em sửa chữa thay vì vứt bỏ.',
    ['Hiểu cấu tạo và nguyên lí đèn huỳnh quang.', 'Lắp được mạch đèn dùng chấn lưu và tắc te.', 'Biết các pan thường gặp.'],
    [
      { h: 'Cấu tạo' },
      { ul: ['Ống thuỷ tinh bên trong tráng bột huỳnh quang, có hơi thuỷ ngân.', 'Hai cực điện ở hai đầu.', 'Chấn lưu (ballast): tạo điện áp cao đánh tia ban đầu, hạn chế dòng khi hoạt động.', 'Tắc te (starter): tự động đóng - mở để gây phóng tia.'] },
      { h: 'Nguyên lí hoạt động' },
      { p: 'Khi bật công tắc, tắc te đóng-mở liên tục → chấn lưu sinh điện áp cao → đánh tia trong ống → tia tử ngoại kích thích bột huỳnh quang phát ánh sáng nhìn thấy.' },
      { h: 'Pan thường gặp' },
      { ul: ['Đèn chớp liên tục: hỏng tắc te, thay tắc te mới.', 'Hai đầu đỏ nhưng không sáng: hỏng tắc te hoặc bóng yếu.', 'Đèn không lên: kiểm tra chấn lưu, công tắc, bóng.'] },
      { note: 'Đèn LED ống thay thế trực tiếp huỳnh quang ngày càng phổ biến do tiết kiệm điện và bền hơn.' },
    ],
    [
      { q: 'Đèn huỳnh quang nháy liên tục không sáng. Em nghĩ tới linh kiện nào trước?', a: 'Tắc te (starter) — bộ phận này dễ hỏng nhất sau thời gian dài, thay tắc te mới thường khắc phục ngay.' },
      { q: 'Vì sao đèn LED tiết kiệm điện hơn huỳnh quang?', a: 'LED biến đổi điện trực tiếp thành ánh sáng với hiệu suất 80-90%, không cần ballast và không có tổn hao nhiệt lớn như huỳnh quang.' },
    ]
  ),

  'S9CN-w11-quiz': L(
    'Mạch điện đèn 2 công tắc — Đèn cầu thang',
    'Mạch đèn 2 công tắc rất quen thuộc ở cầu thang, hành lang dài. Đây là sơ đồ kinh điển và thường có trong đề thi.',
    ['Hiểu nguyên lí mạch đèn 2 công tắc.', 'Vẽ được sơ đồ nguyên lí.', 'Lắp được mạch thực tế.'],
    [
      { h: 'Đặc điểm mạch' },
      { p: 'Một bóng đèn được điều khiển bởi 2 công tắc đặt ở 2 vị trí khác nhau. Bật/tắt được từ bất kì công tắc nào — tiện cho cầu thang.' },
      { h: 'Linh kiện sử dụng' },
      { ul: ['2 công tắc 3 cực (công tắc chuyển hướng).', '1 bóng đèn.', 'Dây dẫn nhiều đoạn.'] },
      { h: 'Nguyên lí' },
      { p: 'Dây pha vào cực chung (C) của công tắc 1. Hai cực còn lại (1 và 2) nối tới hai cực (1 và 2) của công tắc 2. Cực chung (C) của công tắc 2 nối tới đèn. Khi cả hai công tắc cùng "thông mạch" → đèn sáng; khác trạng thái → đèn tắt.' },
      { h: 'Ứng dụng' },
      { ul: ['Cầu thang nhiều tầng.', 'Hành lang dài.', 'Phòng ngủ — bật từ cửa, tắt tại giường.'] },
      { note: 'Công tắc 3 cực có ký hiệu "C – 1 – 2" hoặc "L1 – L2 – L3" tuỳ hãng, cần đọc kĩ trước khi lắp.' },
    ],
    [
      { q: 'Vì sao mạch đèn cầu thang phải dùng công tắc 3 cực mà không phải 2 cực?', a: 'Công tắc 2 cực chỉ đóng/cắt một chiều. Công tắc 3 cực chuyển hướng dòng điện qua hai đường — cho phép bật/tắt từ cả hai vị trí.' },
      { q: 'Mạch đã lắp xong nhưng chỉ một công tắc điều khiển được đèn. Em kiểm tra gì?', a: 'Có thể cực C của một trong hai công tắc đấu sai (vào cực 1 hoặc 2 thay vì C); hoặc dây giữa hai công tắc bị nhầm chéo.' },
    ]
  ),

  'S9CN-w12-quiz': L(
    'Lắp đặt dây dẫn của mạng điện trong nhà',
    'Đi dây trong nhà có 2 phương pháp chính: đi nổi và đi ngầm. Hiểu rõ giúp em lựa chọn đúng cho từng công trình.',
    ['So sánh đi dây nổi và đi dây ngầm.', 'Nắm quy tắc kĩ thuật khi đi dây.', 'Biết các sai lầm cần tránh.'],
    [
      { h: 'Đi dây nổi' },
      { p: 'Dây đi trong ống nhựa, máng cáp, ghim trực tiếp vào tường. Ưu điểm: dễ lắp, dễ sửa. Nhược: kém mỹ thuật, dễ bị hư hại.' },
      { h: 'Đi dây ngầm' },
      { p: 'Dây luồn trong ống đi âm tường, sàn. Ưu điểm: gọn, đẹp, an toàn. Nhược: khó sửa, phải làm khi xây mới.' },
      { h: 'Quy tắc kĩ thuật' },
      { ul: ['Luôn dùng ống dẫn (PVC) bảo vệ dây.', 'Tránh nối dây trong ống — chỉ nối tại hộp nối.', 'Không bẻ gập dây quá gấp.', 'Đường dây đi thẳng, vuông góc — dễ kiểm tra sau này.'] },
      { h: 'Sai lầm hay gặp' },
      { ul: ['Đi dây trần không có ống bảo vệ.', 'Nối dây tuỳ tiện trong tường, không có hộp nối.', 'Tiết diện dây không đủ cho công suất.'] },
      { note: 'Bản vẽ điện sau khi lắp xong phải lưu lại — sau này sửa chữa biết dây chạy ở đâu.' },
    ],
    [
      { q: 'Nhà mới xây em sẽ chọn đi dây nổi hay ngầm? Tại sao?', a: 'Đi dây ngầm vì xây mới có cơ hội đặt ống trước khi tô tường; đảm bảo mỹ thuật và an toàn lâu dài.' },
      { q: 'Vì sao tuyệt đối không nối dây ngầm trong tường?', a: 'Mối nối có thể oxi hoá, lỏng theo thời gian; sửa chữa rất khó vì phải đục tường. Quy chuẩn yêu cầu nối tại hộp nối có nắp đậy.' },
    ]
  ),

  'S9CN-w13-quiz': L(
    'Kiểm tra an toàn mạng điện trong nhà',
    'Định kì kiểm tra mạng điện giúp phát hiện sớm rủi ro cháy nổ, điện giật. Đây là kĩ năng nội trợ quan trọng cho mọi gia đình.',
    ['Biết các hạng mục cần kiểm tra.', 'Sử dụng được bút thử điện, VOM kiểm tra.', 'Phát hiện và xử lý các nguy cơ phổ biến.'],
    [
      { h: 'Hạng mục cần kiểm tra' },
      { ul: ['Dây dẫn: nứt vỏ, lão hoá, bị chuột cắn.', 'Cách điện: kiểm tra điện trở cách điện bằng mê-gôm-mét.', 'Thiết bị đóng cắt: aptomat, công tắc hoạt động bình thường.', 'Ổ cắm: chắc, không lỏng, không cháy đen.', 'Hệ thống tiếp đất: dây nối đất còn nguyên.'] },
      { h: 'Cách kiểm tra cơ bản' },
      { ul: ['Bút thử điện: ổ cắm và vỏ thiết bị.', 'VOM thang R: đo thông mạch cầu chì, công tắc.', 'Quan sát: dây cháy xém, ổ cắm bị nóng chảy.'] },
      { h: 'Cảnh báo nguy hiểm' },
      { ul: ['Ổ cắm nóng khi cắm thiết bị → tải quá lớn hoặc lỏng vít.', 'Aptomat ngắt liên tục → có rò rỉ hoặc ngắn mạch.', 'Có mùi khét → dừng ngay, kiểm tra tổng thể.'] },
      { note: 'Khuyến nghị kiểm tra mạng điện 6-12 tháng/lần, đặc biệt trước mùa mưa và mùa nắng cao điểm.' },
    ],
    [
      { q: 'Em chạm tay vào vỏ máy giặt thấy tê tê. Em nên làm gì ngay?', a: 'Lập tức cắt aptomat, không chạm máy nữa. Vỏ máy đang rò điện — gọi thợ kiểm tra dây tiếp đất và cách điện trước khi dùng tiếp.' },
      { q: 'Aptomat tự nhảy mỗi khi bật bình nóng lạnh. Nguyên nhân?', a: 'Có thể: (1) bình bị rò điện, (2) công suất bình lớn vượt định mức aptomat, (3) dây dẫn không đủ tiết diện. Cần kiểm tra cả ba.' },
    ]
  ),

  'S9CN-w14-quiz': L(
    'Ôn tập + Kiểm tra giữa HK1',
    'Tuần 14 các em hệ thống lại mô-đun điện dân dụng và chuẩn bị cho bài kiểm tra giữa kì — một dịp tổng duyệt năng lực.',
    ['Hệ thống lại các nội dung HK1.', 'Vận dụng được kiến thức vào tình huống thực.', 'Tự đánh giá năng lực bản thân.'],
    [
      { h: 'Nội dung trọng tâm' },
      { ul: ['Vật liệu điện và dụng cụ.', 'Quy tắc nối dây và bọc cách điện.', 'Sơ đồ nguyên lí ↔ sơ đồ lắp đặt.', 'Mạch bảng điện cơ bản, mạch đèn cầu thang.', 'An toàn điện và kiểm tra mạng điện trong nhà.'] },
      { h: 'Dạng câu hỏi thường gặp' },
      { ul: ['Lý thuyết: định nghĩa, phân loại, công dụng.', 'Vẽ sơ đồ nguyên lí mạch điện đơn giản.', 'Tính chọn dây theo công suất.', 'Xử lý tình huống an toàn điện.'] },
      { h: 'Mẹo làm bài' },
      { ul: ['Đọc kĩ đề, gạch chân từ khoá.', 'Phần vẽ: dùng thước, ký hiệu chuẩn.', 'Câu tình huống: nêu nguyên nhân + cách khắc phục.'] },
      { note: 'Đừng học vẹt — hãy hình dung lại từng buổi thực hành để câu trả lời sinh động và đúng thực tế.' },
    ],
    [
      { q: 'Đề bài: vẽ sơ đồ mạch điện gồm 1 cầu chì, 1 công tắc, 1 đèn. Em làm gì trước?', a: 'Đọc đề, xác định: nguồn 220V → cầu chì → công tắc → đèn → về trung tính. Vẽ ký hiệu chuẩn, mũi tên dòng điện, ghi chú đầu vào/ra.' },
      { q: 'Câu hỏi tình huống: bếp gia đình hay bị "nhảy aptomat". Em trả lời như thế nào?', a: 'Nguyên nhân: tải tổng vượt định mức, hoặc bếp/lò vi sóng bị rò điện. Khắc phục: phân chia thiết bị sang nhánh khác, kiểm tra cách điện thiết bị, tăng aptomat đúng tiêu chuẩn nếu cần.' },
    ]
  ),

  'S9CN-w15-quiz': L(
    'Trồng cây ăn quả — Giá trị + đặc điểm',
    'Sang mô-đun nông nghiệp, các em làm quen với cây ăn quả — nhóm cây kinh tế quan trọng của Việt Nam.',
    ['Hiểu giá trị kinh tế, dinh dưỡng, môi trường của cây ăn quả.', 'Nắm đặc điểm chung của nhóm cây này.', 'Biết một số cây ăn quả tiêu biểu của Việt Nam.'],
    [
      { h: 'Giá trị của cây ăn quả' },
      { ul: ['Kinh tế: nguồn thu nhập lớn, xuất khẩu (thanh long, vải, xoài).', 'Dinh dưỡng: vitamin, khoáng chất, chất xơ.', 'Môi trường: che phủ đất, chống xói mòn, điều hoà khí hậu.', 'Văn hoá: tạo cảnh quan, gắn với phong tục Việt.'] },
      { h: 'Đặc điểm sinh học' },
      { ul: ['Cây lâu năm, có rễ ăn sâu.', 'Thân gỗ, có nhiều cành.', 'Ra hoa, kết quả theo mùa.', 'Đòi hỏi chăm sóc thường xuyên: tỉa cành, bón phân, phòng sâu bệnh.'] },
      { h: 'Một số cây ăn quả tiêu biểu' },
      { ul: ['Miền Bắc: vải, nhãn, na, cam, bưởi, hồng.', 'Miền Trung: xoài, nhãn, dưa, nho.', 'Miền Nam: sầu riêng, măng cụt, chôm chôm, thanh long, dừa.'] },
      { note: 'Thanh long, sầu riêng, xoài Việt Nam đang được xuất khẩu chính ngạch sang Trung Quốc, Mỹ, châu Âu.' },
    ],
    [
      { q: 'Vì sao trồng cây ăn quả góp phần bảo vệ đất?', a: 'Tán lá che mưa, rễ giữ đất, lá rụng làm tăng mùn — giảm xói mòn và cải tạo đất, nhất là vùng đồi núi.' },
      { q: 'Gia đình em ở miền Bắc, muốn trồng 1 cây ăn quả lâu năm. Em chọn cây nào và vì sao?', a: 'Có thể chọn bưởi Diễn hoặc nhãn lồng — phù hợp khí hậu, dễ chăm, có giá trị kinh tế và làm cảnh quan đẹp cho sân vườn.' },
    ]
  ),

  'S9CN-w16-quiz': L(
    'Kỹ thuật trồng và chăm sóc cây ăn quả',
    'Trồng đúng kĩ thuật quyết định 70% thành công của vườn cây. Tuần này các em tìm hiểu quy trình chuẩn.',
    ['Nắm quy trình trồng cây ăn quả.', 'Biết các kĩ thuật chăm sóc cơ bản.', 'Có ý thức trồng cây phù hợp điều kiện địa phương.'],
    [
      { h: 'Chuẩn bị đất trồng' },
      { ul: ['Đào hố trước 15-30 ngày, kích thước 60×60×60cm.', 'Bón lót: phân chuồng hoai 10-20kg + lân 0.3-0.5kg + vôi.', 'Trộn đều đất với phân, lấp hố hơi cao hơn mặt đất.'] },
      { h: 'Trồng cây' },
      { ul: ['Chọn giống tốt, sạch bệnh từ vườn ươm.', 'Trồng vào lúc trời mát (sáng sớm hoặc chiều).', 'Đặt cây ngay ngắn, lấp đất quanh gốc, nén nhẹ.', 'Cắm cọc chống đổ, tưới đẫm nước.'] },
      { h: 'Chăm sóc' },
      { ul: ['Tưới nước: đều đặn, không úng.', 'Bón thúc: theo từng giai đoạn (sinh trưởng, ra hoa, nuôi quả).', 'Tỉa cành tạo tán: bỏ cành tăm, cành sâu bệnh.', 'Phòng trừ sâu bệnh: ưu tiên biện pháp sinh học.'] },
      { note: 'Trồng cây ăn quả cần kiên nhẫn — nhiều loài 3-5 năm mới cho thu hoạch, nhưng có thể thu trong 20-30 năm.' },
    ],
    [
      { q: 'Vì sao phải đào hố trước khi trồng 15-30 ngày?', a: 'Để phân hữu cơ phân huỷ một phần, đất tơi xốp hơn, vi sinh vật có ích phát triển — cây non sẽ nhanh bén rễ và phát triển tốt.' },
      { q: 'Cây mới trồng héo lá. Em xử lý thế nào?', a: 'Tưới đẫm gốc, che nắng tạm thời, kiểm tra cọc chống đổ. Nếu cây quá yếu có thể trồng lại, cẩn thận không làm dập rễ.' },
    ]
  ),

  'S9CN-w17-quiz': L(
    'Kỹ thuật ghép cây',
    'Ghép cây là kĩ thuật nhân giống quan trọng — vừa giữ được đặc tính tốt, vừa rút ngắn thời gian cho thu hoạch.',
    ['Hiểu mục đích của ghép cây.', 'Biết các phương pháp ghép phổ biến.', 'Nắm điều kiện ghép thành công.'],
    [
      { h: 'Mục đích ghép cây' },
      { ul: ['Giữ nguyên đặc tính giống tốt (không thay đổi qua hạt).', 'Rút ngắn thời gian cho quả.', 'Tăng sức chống chịu sâu bệnh nhờ gốc ghép.', 'Phục tráng cây già.'] },
      { h: 'Các phương pháp ghép' },
      { ul: ['Ghép mắt: lấy mắt (chồi) từ cành ngon, ghép vào gốc ghép. Dùng cho cam, bưởi.', 'Ghép cành: cắt đoạn cành có mắt, ghép vào gốc. Dùng cho xoài, sầu riêng.', 'Ghép áp: áp hai cành sống vào nhau cho dính lại.'] },
      { h: 'Điều kiện ghép thành công' },
      { ul: ['Gốc ghép và cành ghép phải cùng họ, tốt nhất cùng loài.', 'Tầng sinh gỗ hai bên phải áp khít.', 'Thời tiết: trời mát, không mưa to.', 'Cuốn chặt bằng băng ni-lông, che nắng.'] },
      { note: 'Sau ghép 2-3 tuần, mở băng kiểm tra — nếu mắt còn xanh là dấu hiệu thành công.' },
    ],
    [
      { q: 'Vì sao ghép cây giữ được đặc tính giống tốt hơn gieo hạt?', a: 'Khi gieo hạt, cây con thừa hưởng tính trạng cả bố lẫn mẹ — có thể bị lai tạp. Ghép giữ nguyên gen của cành mẹ nên đặc tính bất biến.' },
      { q: 'Cây ghép xoài chết sau 1 tháng. Nguyên nhân có thể là gì?', a: 'Có thể: (1) gốc và cành ghép không tương hợp, (2) tầng sinh gỗ không áp khít, (3) buộc chặt quá làm thắt cành, (4) thời tiết mưa nhiều làm nhiễm khuẩn vết ghép.' },
    ]
  ),

  'S9CN-w18-quiz': L(
    'Ôn tập học kì I',
    'Tuần 18 — tổng kết toàn bộ kiến thức HK1, gồm điện dân dụng và bước đầu nông nghiệp. Đây là kì kiểm tra quan trọng.',
    ['Hệ thống lại kiến thức và kĩ năng HK1.', 'Luyện đề tổng hợp.', 'Định hướng ôn thi giữa - cuối kì hợp lí.'],
    [
      { h: 'Trọng tâm HK1' },
      { ul: ['Mô-đun điện: vật liệu, dụng cụ, mối nối, mạch điện cơ bản, an toàn điện.', 'Mô-đun nông nghiệp: trồng cây ăn quả, kĩ thuật ghép.'] },
      { h: 'Kĩ năng cần thành thạo' },
      { ul: ['Đọc - vẽ sơ đồ điện.', 'Chọn dây và thiết bị bảo vệ.', 'Mô tả quy trình kĩ thuật.', 'Phân tích tình huống thực tế.'] },
      { h: 'Phương pháp ôn' },
      { ul: ['Tự lập sơ đồ tư duy theo mô-đun.', 'Làm đề thử có giới hạn thời gian.', 'Học theo cặp để kiểm tra chéo.', 'Hỏi thầy cô những điểm còn mơ hồ.'] },
      { note: 'Lớp 9 là năm bản lề thi vào 10 — mỗi điểm số có ý nghĩa quan trọng cho học bạ.' },
    ],
    [
      { q: 'Em chưa nắm chắc phần vẽ sơ đồ. Em ôn như thế nào?', a: 'Vẽ lại 3-5 sơ đồ kinh điển (đèn 1 công tắc, đèn 2 công tắc, bảng điện cơ bản, mạch huỳnh quang). Tự kiểm tra với đáp án và lặp lại đến khi vẽ thành thạo trong 5 phút.' },
      { q: 'Đề thi có câu hỏi mở: "Em sẽ làm gì để đảm bảo an toàn điện gia đình?". Trả lời thế nào?', a: 'Liệt kê: kiểm tra dây định kì, lắp aptomat chống giật, dùng ổ cắm có nắp, không cắm quá tải, giáo dục trẻ em không sờ vào ổ cắm, có dây tiếp đất cho thiết bị lớn.' },
    ]
  ),

  'S9CN-w19-quiz': L(
    'Sửa xe đạp — Cấu tạo xe đạp',
    'Học kì 2 mở đầu với mô-đun thực dụng: sửa xe đạp. Phương tiện thân quen của HS — biết sửa giúp tiết kiệm thời gian, tiền bạc.',
    ['Nắm cấu tạo cơ bản của xe đạp.', 'Hiểu chức năng từng bộ phận.', 'Biết các dụng cụ sửa xe cơ bản.'],
    [
      { h: 'Cấu tạo cơ bản' },
      { ul: ['Khung xe: bộ phận chịu lực chính.', 'Bánh xe: vành, lốp, săm, nan hoa.', 'Hệ thống truyền lực: bàn đạp, đĩa, xích, líp.', 'Hệ thống lái: ghi-đông, phuộc trước.', 'Hệ thống phanh: phanh trước, phanh sau, dây phanh.', 'Phụ kiện: yên, đèn, chuông, baga.'] },
      { h: 'Chức năng' },
      { ul: ['Bánh xe: tiếp xúc và lăn trên mặt đường.', 'Xích - đĩa - líp: truyền lực từ chân đạp sang bánh sau.', 'Phanh: giảm tốc và dừng xe.', 'Ghi-đông: điều khiển hướng đi.'] },
      { h: 'Dụng cụ sửa xe' },
      { ul: ['Bộ tuốc-nơ-vít, cờ-lê, mỏ lết.', 'Bộ vá săm: keo, miếng vá, giấy nhám.', 'Bơm xe, bộ tháo lốp.', 'Khoá đa năng cho bánh.'] },
      { note: 'Bảo dưỡng định kì 6 tháng/lần: bơm hơi, tra dầu xích, kiểm tra phanh — xe sẽ bền hơn nhiều năm.' },
    ],
    [
      { q: 'Xe đạp đạp nặng dần theo thời gian dù không hỏng gì. Lý do?', a: 'Xích khô dầu, ổ trục bánh bẩn, lốp non hơi. Tra dầu xích, vệ sinh và bơm hơi đúng áp suất là xe sẽ nhẹ trở lại.' },
      { q: 'Vì sao khi đi xe đạp đường dốc cần dùng phanh trước cẩn thận?', a: 'Phanh trước hãm mạnh khi xuống dốc dễ làm bánh trước cứng, xe lật ngược. Nên phanh sau trước, phanh trước nhẹ nhàng cùng lúc.' },
    ]
  ),

  'S9CN-w20-quiz': L(
    'Sửa xe đạp — Tháo lắp bánh xe',
    'Tháo bánh là kĩ năng nền tảng để vá săm, thay lốp, sửa moay-ơ. Tuần này các em thực hành thao tác chuẩn.',
    ['Thực hiện được quy trình tháo và lắp bánh xe.', 'Sử dụng đúng dụng cụ.', 'Đảm bảo an toàn khi thao tác.'],
    [
      { h: 'Chuẩn bị' },
      { ul: ['Mỏ lết hoặc cờ-lê 15 (cỡ ốc trục).', 'Khay đựng ốc, vít.', 'Dụng cụ tháo lốp (2 que dẹt).', 'Giẻ lau.'] },
      { h: 'Quy trình tháo bánh sau' },
      { ul: ['Dựng xe ngược (bánh hướng lên).', 'Nới lỏng ốc trục bánh 2 bên.', 'Tháo xích ra khỏi líp.', 'Rút bánh ra khỏi càng.'] },
      { h: 'Quy trình tháo bánh trước' },
      { ul: ['Mở cần phanh nếu có.', 'Nới lỏng ốc trục.', 'Rút bánh xuống.'] },
      { h: 'Lắp lại' },
      { ul: ['Lắp ngược thứ tự: đặt bánh vào càng, ấn xích vào líp.', 'Vặn ốc trục đều 2 bên.', 'Kiểm tra bánh quay tròn không đảo.', 'Kiểm tra phanh hoạt động trước khi đi.'] },
      { note: 'Đừng quên kiểm tra phanh sau khi lắp lại — đây là sai lầm phổ biến gây tai nạn.' },
    ],
    [
      { q: 'Tháo bánh sau khó hơn bánh trước ở điểm nào?', a: 'Bánh sau có xích và líp — phải tháo xích cẩn thận, khi lắp lại phải đưa xích vào đúng răng líp và căng vừa phải.' },
      { q: 'Lắp bánh xong, bánh quay bị đảo lệch. Em xử lý thế nào?', a: 'Ốc 2 bên trục có thể chưa vặn đều — nới ra, căn cho bánh nằm chính giữa càng, rồi vặn chặt đối xứng. Nếu vẫn đảo, nan hoa có thể bị lệch, cần đảo nan.' },
    ]
  ),

  'S9CN-w21-quiz': L(
    'Sửa xe đạp — Vá săm + thay lốp',
    'Săm bị thủng là sự cố phổ biến nhất khi đi xe đạp. Biết vá săm các em sẽ không bị "đứng đường".',
    ['Thực hiện được quy trình vá săm.', 'Biết khi nào cần thay săm, lốp.', 'Có kĩ năng xử lý sự cố cơ bản.'],
    [
      { h: 'Quy trình vá săm' },
      { ul: ['Tháo bánh, tháo lốp, lấy săm ra.', 'Bơm săm, nhúng vào nước để tìm vị trí thủng (xuất hiện bọt khí).', 'Đánh dấu lỗ thủng, lau khô, đánh giấy nhám quanh lỗ.', 'Quét lớp keo mỏng, đợi se mặt 30-60 giây.', 'Dán miếng vá, ép chặt và đợi 5 phút.', 'Bơm thử lại trong nước để kiểm tra.', 'Lắp săm vào lốp, lắp lốp vào vành, bơm đủ hơi.'] },
      { h: 'Khi nào nên thay săm' },
      { ul: ['Săm nhiều lỗ chồng chéo nhau.', 'Bị nứt dài, rạn vỏ ở chân van.', 'Van bơm bị hỏng không thay được.'] },
      { h: 'Khi nào nên thay lốp' },
      { ul: ['Mòn hết gai lốp.', 'Nứt sâu, có vết rách.', 'Phồng rộp bất thường.'] },
      { note: 'Bơm hơi đúng áp suất ghi trên thành lốp — non quá làm hỏng săm, căng quá dễ nổ.' },
    ],
    [
      { q: 'Vá xong vẫn xì hơi. Có thể lỗi ở đâu?', a: 'Có thể có lỗ thủng thứ 2 chưa tìm thấy; hoặc miếng vá chưa kín do bụi, keo chưa khô; hoặc lỗi ở chân van.' },
      { q: 'Vì sao phải kiểm tra bên trong lốp trước khi lắp săm lại?', a: 'Mảnh thuỷ tinh, đinh nhỏ còn dính trong lốp sẽ tiếp tục đâm thủng săm mới — phải lau, kiểm tra kĩ trước khi lắp.' },
    ]
  ),

  'S9CN-w22-quiz': L(
    'Sửa xe đạp — Hiệu chỉnh phanh, xích',
    'Phanh ăn và xích chuẩn quyết định độ an toàn và mượt mà của xe. Tuần này các em học cách tự chỉnh.',
    ['Hiệu chỉnh được phanh: căng dây, thay má phanh.', 'Hiệu chỉnh được xích: căng, tra dầu.', 'Hiểu nguyên tắc an toàn khi sửa.'],
    [
      { h: 'Hiệu chỉnh phanh' },
      { ul: ['Kiểm tra má phanh: còn dày, không cứng quắp.', 'Căng dây phanh: vặn ốc điều chỉnh ở tay phanh.', 'Khoảng cách má-vành: 2-3mm.', 'Kiểm tra bóp phanh không bị kẹt, nhả ra phải tự về.'] },
      { h: 'Hiệu chỉnh xích' },
      { ul: ['Xích chuẩn: nhấn giữa 2 đĩa - líp, độ võng khoảng 10-15mm.', 'Căng xích: nới ốc trục bánh sau, kéo bánh ra sau, vặn chặt lại.', 'Xích chùng dễ tuột; xích quá căng làm mòn nhanh.'] },
      { h: 'Tra dầu xích' },
      { ul: ['Dùng dầu xích chuyên dụng (không dùng mỡ đặc).', 'Nhỏ dầu lên từng mắt xích, quay bàn đạp ngược cho dầu ngấm.', 'Lau bớt dầu thừa để khỏi bám bụi.'] },
      { note: 'Bảo dưỡng xe đạp mỗi tháng 1 lần: làm sạch xích, tra dầu, chỉnh phanh — xe luôn vận hành tốt.' },
    ],
    [
      { q: 'Em bóp phanh thấy lỏng và xe vẫn lao. Cách xử lý?', a: 'Vặn chặt ốc điều chỉnh ở tay phanh để rút ngắn dây phanh. Nếu vẫn lỏng, có thể má phanh đã mòn — cần thay má mới.' },
      { q: 'Xích đứt giữa đường. Em làm gì?', a: 'Mang xe ra lề đường an toàn. Nếu có dụng cụ tháo xích thì nối lại bằng mắt nối; nếu không, dắt xe đến tiệm gần nhất hoặc gọi người trợ giúp.' },
    ]
  ),

  'S9CN-w23-quiz': L(
    'Nấu ăn — Vệ sinh an toàn thực phẩm',
    'Mô-đun nấu ăn — kĩ năng sống cần thiết. Nguyên tắc số 1 luôn là vệ sinh an toàn thực phẩm.',
    ['Hiểu khái niệm vệ sinh an toàn thực phẩm.', 'Nắm 5 nguyên tắc của WHO.', 'Biết phòng tránh ngộ độc thực phẩm.'],
    [
      { h: 'Vệ sinh an toàn thực phẩm là gì?' },
      { p: 'Là các điều kiện và biện pháp đảm bảo thực phẩm không gây hại cho sức khoẻ người tiêu dùng — từ khâu chọn nguyên liệu, chế biến đến bảo quản và sử dụng.' },
      { h: '5 nguyên tắc của WHO' },
      { ul: ['Giữ sạch: rửa tay, dụng cụ, mặt bằng chế biến.', 'Tách riêng: thực phẩm sống với thực phẩm chín.', 'Nấu kĩ: đảm bảo đủ nhiệt độ tiêu diệt vi khuẩn.', 'Giữ ở nhiệt độ an toàn: nóng trên 60°C hoặc lạnh dưới 5°C.', 'Dùng nước và nguyên liệu an toàn.'] },
      { h: 'Nguyên nhân ngộ độc thực phẩm' },
      { ul: ['Vi khuẩn, virus, kí sinh trùng (Salmonella, E.coli...).', 'Độc tố tự nhiên (nấm độc, cá nóc).', 'Hoá chất (thuốc trừ sâu, chất tẩy rửa).', 'Thực phẩm ôi thiu, hư hỏng.'] },
      { h: 'Dấu hiệu thực phẩm hỏng' },
      { ul: ['Mùi lạ, chua, hôi.', 'Đổi màu bất thường.', 'Có mốc, có nhớt.', 'Quá hạn sử dụng.'] },
      { note: 'Nguyên tắc vàng: nếu nghi ngờ — không ăn.' },
    ],
    [
      { q: 'Em chế biến gà sống xong, dùng luôn dao đó cắt rau sống. Có an toàn không?', a: 'Không. Vi khuẩn từ gà sống lây sang rau. Phải rửa dao, thớt bằng xà phòng nóng giữa hai công đoạn — hoặc tốt nhất dùng dao thớt riêng.' },
      { q: 'Cá để ngoài bàn cả ngày trời nóng. Có nên ăn không?', a: 'Không. Trên 5°C vi khuẩn nhân lên nhanh; trên 4 giờ ở nhiệt độ phòng nóng là nguy hiểm. Phải bỏ.' },
    ]
  ),

  'S9CN-w24-quiz': L(
    'Nấu ăn — Phương pháp chế biến',
    'Hiểu các phương pháp chế biến giúp em chọn cách nấu phù hợp với từng nguyên liệu, vừa ngon vừa giữ dinh dưỡng.',
    ['Phân loại các phương pháp chế biến.', 'Biết ưu nhược điểm từng phương pháp.', 'Áp dụng phù hợp với nguyên liệu.'],
    [
      { h: 'Chế biến có sử dụng nhiệt' },
      { ul: ['Luộc, nấu, ninh, hầm: dùng nước.', 'Hấp: dùng hơi nước.', 'Xào, rán: dùng dầu mỡ.', 'Nướng, quay: dùng nhiệt trực tiếp.'] },
      { h: 'Chế biến không dùng nhiệt' },
      { ul: ['Trộn (gỏi, salad).', 'Muối, ngâm chua.', 'Lên men (nem chua, sữa chua, mắm).'] },
      { h: 'Ưu nhược điểm' },
      { ul: ['Luộc, hấp: giữ chất dinh dưỡng, ít dầu mỡ — tốt cho sức khoẻ.', 'Xào, rán: ngon, nhanh nhưng nhiều dầu.', 'Nướng: thơm nhưng có thể tạo chất không tốt nếu cháy.', 'Trộn: tươi, mát nhưng dễ nhiễm khuẩn nếu không vệ sinh.'] },
      { h: 'Chọn phương pháp phù hợp' },
      { p: 'Rau xanh: luộc nhanh hoặc hấp. Thịt nạc: nấu, hầm. Thịt bò: xào nhanh. Cá: hấp hoặc kho. Khoai củ: luộc, nướng.' },
      { note: 'Người Việt có truyền thống "ăn nhiều rau, đủ thịt, đa dạng phương pháp" — đây là chế độ dinh dưỡng khoa học.' },
    ],
    [
      { q: 'Em muốn nấu rau giữ được nhiều vitamin C nhất. Chọn cách nào?', a: 'Hấp hoặc luộc nhanh trong nước sôi (1-3 phút) rồi vớt ra ngâm nước đá. Hạn chế cắt nhỏ trước khi nấu.' },
      { q: 'Rán nhiều dầu có tác hại gì?', a: 'Tăng calo, dễ béo phì; dầu rán đi rán lại sinh chất độc; ăn nhiều đồ rán làm tăng nguy cơ tim mạch.' },
    ]
  ),

  'S9CN-w25-quiz': L(
    'Nấu ăn — Xây dựng thực đơn gia đình',
    'Thực đơn hợp lí giúp gia đình ăn ngon, đủ chất, không lãng phí. Đây là kĩ năng nội trợ quan trọng.',
    ['Hiểu nguyên tắc xây dựng thực đơn.', 'Biết cân đối dinh dưỡng theo tháp dinh dưỡng.', 'Lập được thực đơn 1 ngày.'],
    [
      { h: 'Nguyên tắc xây dựng thực đơn' },
      { ul: ['Đủ chất: tinh bột, đạm, béo, vitamin, khoáng.', 'Cân đối: tỉ lệ các nhóm phù hợp.', 'Đa dạng: thay đổi món, không lặp lại.', 'Phù hợp lứa tuổi, sức khoẻ.', 'Hợp khẩu vị, hợp túi tiền.', 'Hợp mùa, hợp văn hoá vùng miền.'] },
      { h: 'Tháp dinh dưỡng' },
      { ul: ['Đỉnh: muối, đường, dầu mỡ (ít).', 'Sữa và chế phẩm (vừa phải).', 'Đạm: thịt, cá, trứng, đậu (vừa phải).', 'Rau và trái cây (nhiều).', 'Đáy: ngũ cốc, tinh bột (nhiều nhất).'] },
      { h: 'Cấu trúc bữa ăn Việt' },
      { p: 'Bữa truyền thống: cơm + canh + món mặn (kho/rán/xào) + rau. Đa dạng món, cân đối nóng - mát, mặn - ngọt.' },
      { h: 'Lập thực đơn 1 ngày' },
      { ul: ['Sáng: bánh mì + trứng + sữa, hoặc xôi + giò, hoặc phở.', 'Trưa: cơm + canh + 1 mặn + 1 rau + 1 món tráng miệng.', 'Tối: nhẹ hơn trưa, ưu tiên rau và đạm dễ tiêu.'] },
      { note: 'HS đang lớn cần đủ đạm cho phát triển và nhiều canxi cho xương — đừng bỏ bữa sáng.' },
    ],
    [
      { q: 'Em chọn thực đơn cho gia đình 4 người (bố mẹ + 2 con). Bữa trưa em đề xuất gì?', a: 'Cơm trắng + canh chua cá lóc + thịt heo kho trứng + rau muống luộc + dưa hấu tráng miệng. Đủ tinh bột, đạm, vitamin, dễ ăn và phù hợp với gia đình Việt.' },
      { q: 'Sai lầm phổ biến khi xây dựng thực đơn gia đình?', a: 'Lặp món nhiều ngày, thiếu rau, lạm dụng đồ rán, không cân đối với khẩu phần trẻ em - người già. Khắc phục bằng cách lên thực đơn theo tuần.' },
    ]
  ),

  'S9CN-w26-quiz': L(
    'Nấu ăn — Thực hành: Món luộc + xào đơn giản',
    'Hai phương pháp căn bản nhất — luộc và xào — phù hợp cho người mới bắt đầu nấu ăn.',
    ['Thực hiện đúng quy trình luộc rau.', 'Thực hiện đúng quy trình xào rau hoặc thịt.', 'Trình bày món ăn đẹp mắt.'],
    [
      { h: 'Luộc rau xanh' },
      { ul: ['Rửa rau sạch, để ráo.', 'Đun nước sôi to, thêm chút muối hoặc dầu ăn.', 'Cho rau vào, đảo đều, đậy nắp 1-3 phút (tuỳ loại).', 'Vớt ra ngay, có thể ngâm nước đá 30 giây để giữ màu xanh.', 'Bày đĩa, ăn nóng.'] },
      { h: 'Xào rau hoặc thịt' },
      { ul: ['Sơ chế: thịt thái mỏng ướp gia vị 5 phút; rau cắt vừa ăn.', 'Phi thơm tỏi với dầu nóng.', 'Cho thịt vào xào nhanh tay, chín tái thì xúc ra.', 'Xào rau riêng đến gần chín, đổ thịt vào đảo đều.', 'Nêm nếm, tắt bếp, bày đĩa.'] },
      { h: 'Mẹo nấu ngon' },
      { ul: ['Lửa to khi xào — không xào lửa nhỏ.', 'Không xào quá lâu — rau dai, thịt khô.', 'Muối nêm cuối cùng để giữ độ giòn của rau.'] },
      { note: 'Nấu ăn là sự thực tập — món đầu hỏng cũng không sao, lần sau sẽ tốt hơn.' },
    ],
    [
      { q: 'Em luộc rau muống mà rau vàng úa. Sai ở đâu?', a: 'Có thể luộc quá lâu, hoặc không cho muối/dầu, hoặc đậy kín nắp. Lần sau: nước sôi to, ít muối, luộc 1-2 phút, không đậy kín, vớt ra ngâm nước đá.' },
      { q: 'Thịt bò xào bị dai. Cách khắc phục?', a: 'Thái mỏng ngang thớ, ướp dầu ăn + chút bột bắp; chảo nóng già rồi mới xào, lửa to, đảo nhanh tay 1-2 phút là xong. Xào lâu thịt bò sẽ dai.' },
    ]
  ),

  'S9CN-w27-quiz': L(
    'May mặc cơ bản — Đường khâu cơ bản',
    'Biết khâu một vài đường cơ bản giúp các em tự sửa nút áo bung, vá quần rách — kĩ năng sống không thể thiếu.',
    ['Nhận biết các đường khâu cơ bản.', 'Thực hiện được khâu khôi, khâu vắt.', 'Biết đính cúc, vá rách đơn giản.'],
    [
      { h: 'Dụng cụ may cơ bản' },
      { ul: ['Kim khâu các cỡ.', 'Chỉ may (đỏ, đen, trắng, màu vải).', 'Kéo nhỏ.', 'Đê (vòng bảo vệ ngón tay).', 'Thước, bút sáp đánh dấu.'] },
      { h: 'Các đường khâu cơ bản' },
      { ul: ['Khâu khôi: mũi đều, đơn giản — dùng vá tạm hoặc lược trước khi may máy.', 'Khâu vắt: kín mép vải — dùng cho gấu áo, ống tay.', 'Khâu mạng: đan chỉ — dùng vá lỗ thủng nhỏ.', 'Khâu đột mau / đột thưa: chắc hơn khôi — dùng may đường chịu lực.'] },
      { h: 'Đính cúc' },
      { ul: ['Luồn chỉ đôi qua kim, thắt nút cuối.', 'Đặt cúc đúng vị trí, châm kim từ mặt trong ra.', 'Đính qua 4 lỗ (cúc 4 lỗ) hoặc 2 lỗ (cúc 2 lỗ) 5-7 lần.', 'Quấn chỉ quanh cổ cúc 2-3 vòng để cúc đứng vững.', 'Đâm kim sang mặt trong, thắt nút giấu mép.'] },
      { note: 'Kĩ năng khâu vá đơn giản giúp tiết kiệm quần áo, giảm rác thải — phù hợp lối sống xanh.' },
    ],
    [
      { q: 'Áo bung cúc giữa buổi học. Em xử lý thế nào?', a: 'Mang kim chỉ cá nhân hoặc xin bạn. Khâu tạm bằng mũi khôi đơn giản qua 2 lỗ cúc 5-6 lần là đủ giữ tới khi về nhà khâu lại kĩ hơn.' },
      { q: 'Vì sao khi đính cúc cần quấn chỉ quanh cổ cúc?', a: 'Quấn chỉ tạo "cổ cúc" — cúc đứng cao hơn vải một chút, dễ luồn vào lỗ khuyết và bền hơn khi sử dụng.' },
    ]
  ),

  'S9CN-w28-quiz': L(
    'Định hướng nghề nghiệp sau lớp 9',
    'Lớp 9 là ngã rẽ quan trọng — vào THPT, học nghề, hay vào trường chuyên. Tuần này các em làm quen với hướng nghiệp có hệ thống.',
    ['Hiểu vai trò của hướng nghiệp.', 'Nắm các con đường sau lớp 9.', 'Biết các yếu tố cần cân nhắc khi chọn.'],
    [
      { h: 'Vì sao cần hướng nghiệp?' },
      { p: 'Hướng nghiệp giúp em chọn nghề phù hợp với năng lực, sở thích và điều kiện — quyết định chất lượng cuộc sống lâu dài.' },
      { h: 'Các con đường sau lớp 9' },
      { ul: ['THPT: học tiếp 3 năm rồi thi đại học, cao đẳng.', 'GDTX: học vừa làm vừa lấy bằng THPT.', 'Trung cấp nghề: vừa học văn hoá vừa học nghề (3-4 năm).', 'Sơ cấp nghề: học nghề ngắn hạn rồi đi làm.', 'Du học sớm (nếu có điều kiện).'] },
      { h: 'Yếu tố cân nhắc' },
      { ul: ['Năng lực học tập của bản thân.', 'Sở thích, đam mê.', 'Điều kiện kinh tế gia đình.', 'Nhu cầu xã hội của ngành nghề.', 'Tính cách phù hợp công việc tương lai.'] },
      { h: 'Các bước tự định hướng' },
      { ul: ['Tự đánh giá điểm mạnh - yếu.', 'Tìm hiểu các nghề: nội dung, môi trường, thu nhập.', 'Tham vấn cha mẹ, thầy cô, người làm nghề.', 'Trải nghiệm (tham quan, làm thêm).', 'Đặt mục tiêu trung hạn (3-5 năm).'] },
      { note: 'Không có nghề "tốt nhất" — chỉ có nghề "phù hợp nhất" với mỗi người.' },
    ],
    [
      { q: 'Bạn em học khá nhưng gia đình khó khăn. Em tư vấn hướng đi nào?', a: 'Vẫn nên thi vào THPT công lập (chi phí thấp); song song tìm học bổng, lớp học thêm miễn phí. Nếu thật sự không đủ điều kiện, học trung cấp nghề có lợi thế thu nhập sớm.' },
      { q: 'Em yêu thích vẽ và muốn theo nghề mỹ thuật. Em chuẩn bị từ đâu?', a: 'Tự đánh giá năng lực qua portfolio; tham gia CLB vẽ; tìm hiểu các trường mỹ thuật, kiến trúc, thiết kế; chuẩn bị bộ ảnh tác phẩm cá nhân cho việc thi đầu vào sau này.' },
    ]
  ),

  'S9CN-w29-quiz': L(
    'Một số ngành nghề phổ biến hiện nay',
    'Hiểu bức tranh nghề nghiệp hiện đại giúp các em không bị "đóng khung" theo những hình dung cũ.',
    ['Nắm các nhóm nghề chính hiện nay.', 'Biết xu hướng nghề tương lai.', 'Có thông tin cơ bản về một số nghề tiêu biểu.'],
    [
      { h: 'Phân nhóm nghề' },
      { ul: ['Khoa học - công nghệ: kĩ sư, lập trình viên, nhà nghiên cứu.', 'Kinh tế - kinh doanh: kế toán, marketing, ngân hàng.', 'Y tế - chăm sóc: bác sĩ, điều dưỡng, dinh dưỡng.', 'Giáo dục: giáo viên, nhà nghiên cứu giáo dục.', 'Nghệ thuật - truyền thông: thiết kế, đạo diễn, MC.', 'Dịch vụ: du lịch, nhà hàng, bán lẻ.', 'Lao động kĩ thuật: thợ điện, thợ xây, đầu bếp.'] },
      { h: 'Nghề xu hướng tương lai' },
      { ul: ['Công nghệ thông tin: AI, dữ liệu lớn, an ninh mạng.', 'Năng lượng tái tạo: mặt trời, gió.', 'Y tế: chăm sóc người già, dinh dưỡng.', 'Sáng tạo nội dung số.', 'Tâm lý học, công tác xã hội.'] },
      { h: 'Nghề "truyền thống" vẫn quan trọng' },
      { p: 'Nông nghiệp công nghệ cao, thợ thủ công có tay nghề, đầu bếp giỏi, dạy học, y tá... vẫn luôn có giá trị, không bao giờ lỗi thời.' },
      { note: 'Không có nghề "thấp kém" — chỉ có người làm nghề chưa hết khả năng.' },
    ],
    [
      { q: 'AI sẽ thay thế nghề nào? Em chọn nghề nào để an toàn?', a: 'AI thay thế các công việc lặp lại (nhập liệu, kế toán cơ bản). An toàn là nghề cần sáng tạo, đồng cảm, kĩ năng tay nghề: giáo viên, bác sĩ, nghệ sĩ, thợ thủ công, kĩ sư đầu ngành.' },
      { q: 'Bạn em muốn theo nghề "youtuber". Em nghĩ sao?', a: 'Đó là nghề thực sự, nhưng cần kĩ năng đa dạng (kịch bản, quay phim, biên tập, marketing). Hãy học song song với học văn hoá để có nền tảng vững — youtuber thành công đều là người tự học rất nhiều.' },
    ]
  ),

  'S9CN-w30-quiz': L(
    'Năng lực số trong thời đại mới',
    'Năng lực số là yêu cầu bắt buộc của mọi nghề trong thế kỉ 21. Hiểu rõ giúp em tự rèn luyện.',
    ['Hiểu khái niệm năng lực số.', 'Biết các thành phần của năng lực số.', 'Có ý thức rèn luyện liên tục.'],
    [
      { h: 'Năng lực số là gì?' },
      { p: 'Là khả năng sử dụng công nghệ số một cách tự tin, an toàn, sáng tạo và có trách nhiệm để học tập, làm việc và tham gia xã hội.' },
      { h: 'Các thành phần (theo khung DigComp)' },
      { ul: ['Hiểu biết về thông tin và dữ liệu: tìm, đánh giá, quản lý.', 'Giao tiếp và hợp tác: làm việc nhóm qua nền tảng số.', 'Sáng tạo nội dung số: viết, làm video, lập trình.', 'An toàn: bảo vệ mình và người khác trên mạng.', 'Giải quyết vấn đề: dùng công cụ số đúng cách.'] },
      { h: 'Cách rèn luyện' },
      { ul: ['Học gõ phím 10 ngón.', 'Thành thạo Word, Excel, PowerPoint.', 'Biết tìm kiếm thông tin hiệu quả.', 'Học gọi AI làm trợ lý (prompt engineering).', 'Hiểu cơ bản về lập trình.', 'Biết cách bảo vệ tài khoản và dữ liệu cá nhân.'] },
      { note: 'Năng lực số không phải biết dùng TikTok — đó là biết tạo ra giá trị bằng công nghệ.' },
    ],
    [
      { q: 'Em dùng mạng xã hội nhiều giờ/ngày nhưng học chưa tốt. Em có năng lực số cao chưa?', a: 'Chưa. Sử dụng nhiều ≠ năng lực số cao. Năng lực số đòi hỏi tạo ra giá trị: tìm thông tin học tập, tạo nội dung, hợp tác qua công cụ số, bảo vệ thông tin cá nhân.' },
      { q: 'AI sẽ giúp em làm bài hộ. Em có cần học nữa không?', a: 'Vẫn cần học rất nhiều. AI là công cụ, không thay được kiến thức nền và tư duy phản biện. Em phải hiểu thì mới dùng AI hiệu quả và không bị AI lừa.' },
    ]
  ),

  'S9CN-w31-quiz': L(
    'Khởi nghiệp và tinh thần doanh nhân',
    'Tinh thần doanh nhân không chỉ là mở công ty — đó là tư duy chủ động, sáng tạo trong mọi công việc.',
    ['Hiểu khái niệm khởi nghiệp.', 'Nắm các đặc điểm của tinh thần doanh nhân.', 'Có ý thức rèn luyện từ HS.'],
    [
      { h: 'Khởi nghiệp là gì?' },
      { p: 'Khởi nghiệp (startup) là quá trình tạo ra sản phẩm, dịch vụ mới để giải quyết vấn đề trong xã hội, thường gắn với rủi ro và đổi mới sáng tạo.' },
      { h: 'Tinh thần doanh nhân' },
      { ul: ['Chủ động, không chờ giao việc.', 'Sáng tạo, dám thử cái mới.', 'Chịu trách nhiệm về kết quả.', 'Học hỏi không ngừng.', 'Hợp tác với người khác.', 'Không sợ thất bại — coi đó là bài học.'] },
      { h: 'HS rèn tinh thần doanh nhân từ đâu?' },
      { ul: ['Tổ chức các hoạt động lớp: tự lên kế hoạch, phân công.', 'Dự án nhỏ: bán hàng từ thiện, gian hàng ngày hội.', 'Tham gia CLB sáng tạo.', 'Đọc sách về khởi nghiệp, doanh nhân.'] },
      { h: 'Doanh nhân Việt tiêu biểu' },
      { ul: ['Phạm Nhật Vượng (Vingroup).', 'Trương Gia Bình (FPT).', 'Đoàn Nguyên Đức (Hoàng Anh Gia Lai).', 'Nguyễn Hà Đông (Flappy Bird).'] },
      { note: 'Không phải ai cũng cần khởi nghiệp, nhưng ai cũng cần tinh thần doanh nhân ngay trong công việc thường ngày.' },
    ],
    [
      { q: 'Em không có vốn, có khởi nghiệp được không?', a: 'Được — khởi nghiệp HS bắt đầu từ ý tưởng và sức lao động: dạy kèm em nhỏ, làm bánh bán cho lớp, viết content cho cha mẹ kinh doanh. Vốn ban đầu là thời gian và sức trẻ.' },
      { q: 'Khởi nghiệp khác làm thuê thế nào?', a: 'Làm thuê: được trả lương, chịu rủi ro thấp, được hướng dẫn. Khởi nghiệp: tự quyết, lợi nhuận cao nhưng rủi ro lớn, phải tự học tất cả. Không nghề nào hơn — phụ thuộc tính cách và hoàn cảnh.' },
    ]
  ),

  'S9CN-w32-quiz': L(
    'An toàn lao động — Trong nhà và sản xuất',
    'Tuần này các em học các nguyên tắc an toàn lao động — kĩ năng giữ tính mạng và sức khoẻ cho bản thân và người khác.',
    ['Hiểu khái niệm an toàn lao động.', 'Biết các nguyên tắc an toàn tại nhà và nơi làm việc.', 'Biết cách sơ cứu cơ bản.'],
    [
      { h: 'An toàn lao động là gì?' },
      { p: 'Là tổng thể các biện pháp bảo vệ người lao động khỏi tai nạn và bệnh nghề nghiệp trong quá trình lao động — từ phương tiện bảo hộ đến quy trình làm việc.' },
      { h: 'An toàn tại nhà' },
      { ul: ['An toàn điện: không dùng tay ướt cắm rút phích.', 'An toàn bếp: tắt gas khi không dùng, có bình chữa cháy.', 'An toàn dụng cụ: dao kéo cất đúng chỗ, xa tầm trẻ em.', 'An toàn hoá chất: không trộn lẫn các chất tẩy rửa.'] },
      { h: 'An toàn nơi làm việc' },
      { ul: ['Đeo bảo hộ lao động đầy đủ (mũ, kính, găng, giày).', 'Tuân thủ quy trình kĩ thuật.', 'Không làm việc khi mệt, say.', 'Báo ngay sự cố cho người quản lý.'] },
      { h: 'Sơ cứu cơ bản' },
      { ul: ['Điện giật: cắt nguồn rồi mới kéo nạn nhân ra.', 'Bỏng: ngâm chỗ bỏng vào nước mát 15-20 phút.', 'Chảy máu: ép giữ vết thương, băng lại.', 'Gãy xương: cố định, gọi 115.'] },
      { note: 'Luật quy định: chủ sử dụng lao động phải đào tạo an toàn lao động và cung cấp bảo hộ — đó là quyền của người lao động.' },
    ],
    [
      { q: 'Em thấy bạn bị điện giật. Phản ứng đúng?', a: 'Tuyệt đối không chạm vào bạn — sẽ bị giật theo. Cắt aptomat / rút phích cắm trước. Nếu không thể, dùng vật cách điện (cán chổi gỗ, dây thừng) đẩy bạn ra. Gọi cấp cứu 115.' },
      { q: 'Bỏng nhẹ ngón tay khi nấu ăn. Em xử lý thế nào?', a: 'Đưa ngay vào vòi nước mát chảy 15-20 phút. Không bôi kem đánh răng, nước mắm theo "mẹo dân gian" — có thể làm nhiễm trùng. Sau đó bôi gel bỏng hoặc băng sạch.' },
    ]
  ),

  'S9CN-w33-quiz': L(
    'Ôn tập HK2 — Thực hành tổng hợp',
    'Tuần ôn HK2 — tổng kết các mô-đun sửa xe đạp, nấu ăn, may mặc, hướng nghiệp.',
    ['Hệ thống lại các nội dung HK2.', 'Vận dụng vào tình huống thực tế.', 'Sẵn sàng cho kì thi cuối cấp.'],
    [
      { h: 'Nội dung trọng tâm HK2' },
      { ul: ['Sửa xe đạp: cấu tạo, tháo lắp bánh, vá săm, chỉnh phanh.', 'Nấu ăn: vệ sinh, phương pháp chế biến, thực đơn.', 'May mặc cơ bản: các đường khâu, đính cúc.', 'Hướng nghiệp: con đường sau lớp 9, ngành nghề, năng lực số.', 'An toàn lao động: tại nhà và nơi làm.'] },
      { h: 'Dạng đề thường gặp' },
      { ul: ['Lý thuyết: nêu khái niệm, phân loại, quy trình.', 'Tình huống: xử lí sự cố thực tế.', 'Sáng tạo: lập thực đơn, lên kế hoạch hướng nghiệp.', 'Vẽ sơ đồ điện, cấu tạo.'] },
      { h: 'Mẹo ôn thi' },
      { ul: ['Học theo sơ đồ tư duy.', 'Tự diễn lại các quy trình thực hành.', 'Liên hệ kiến thức với việc thường ngày trong gia đình.'] },
      { note: 'Môn Công nghệ rất "thật" — kiến thức học sẽ dùng được ngay trong cuộc sống của các em.' },
    ],
    [
      { q: 'Đề: "Em hãy lập thực đơn 1 ngày cho gia đình em với chi phí dưới 200.000đ". Cách tiếp cận?', a: 'Liệt kê 3 bữa: sáng đơn giản (xôi/bánh mì), trưa cơm canh + mặn + rau, tối nhẹ. Tính chi phí từng nguyên liệu theo giá chợ. Đảm bảo đủ dinh dưỡng và đa dạng.' },
      { q: 'Đề: "Phân tích đường đời sau lớp 9 phù hợp với em". Trả lời thế nào?', a: 'Tự đánh giá điểm mạnh - yếu - sở thích; nêu con đường định chọn (THPT/trung cấp); lý do; kế hoạch 3 năm tới; phương án dự phòng nếu thi không đỗ trường đầu tiên.' },
    ]
  ),

  'S9CN-w34-quiz': L(
    'Đánh giá năng lực bản thân và lập kế hoạch nghề nghiệp',
    'Kết tinh của môn Công nghệ lớp 9 — biết mình, biết nghề, lập được kế hoạch khả thi.',
    ['Tự đánh giá được điểm mạnh - yếu.', 'Lập kế hoạch nghề nghiệp ngắn - trung hạn.', 'Có thái độ chủ động với tương lai.'],
    [
      { h: 'Tự đánh giá bản thân' },
      { ul: ['Sở thích: làm việc gì em thấy hứng thú?', 'Năng lực: môn nào em làm tốt? Em giỏi tay chân hay tư duy?', 'Tính cách: hướng nội hay hướng ngoại? Thích cô độc hay tập thể?', 'Giá trị: tiền bạc, sáng tạo, ổn định, giúp người... điều gì quan trọng nhất với em?'] },
      { h: 'Tìm hiểu nghề' },
      { ul: ['Nội dung công việc thực tế.', 'Môi trường làm việc.', 'Thu nhập trung bình.', 'Yêu cầu học vấn, kĩ năng.', 'Triển vọng phát triển.'] },
      { h: 'Lập kế hoạch nghề nghiệp' },
      { ul: ['Mục tiêu dài hạn: nghề mơ ước trong 10 năm tới.', 'Mục tiêu trung hạn: 3-5 năm — học xong THPT/nghề gì?', 'Mục tiêu ngắn hạn: 6-12 tháng — thi đỗ trường nào?', 'Hành động cụ thể từng tháng.'] },
      { h: 'Tính linh hoạt' },
      { p: 'Kế hoạch nghề có thể thay đổi khi em trưởng thành. Quan trọng là có kế hoạch để bắt đầu, không phải để gò bó.' },
      { note: 'Đừng ngại sai — sai lầm trong việc chọn nghề ở tuổi 14-15 còn dễ sửa hơn ở tuổi 24-25.' },
    ],
    [
      { q: 'Em chưa biết mình thích nghề gì. Em nên làm gì?', a: 'Bắt đầu loại trừ: nghề chắc chắn không thích. Trải nghiệm các hoạt động đa dạng (CLB, tình nguyện, công việc nhỏ). Đọc về các nghề. Trò chuyện với người làm nghề. Theo thời gian em sẽ rõ dần.' },
      { q: 'Bố mẹ muốn em làm bác sĩ, em thích vẽ. Em xử lý thế nào?', a: 'Tôn trọng nguyện vọng bố mẹ nhưng cần thẳng thắn chia sẻ. Có thể tìm điểm chung: ngành thiết kế y khoa, minh hoạ khoa học. Quan trọng là chứng minh em nghiêm túc với lựa chọn của mình bằng kết quả học tập.' },
    ]
  ),

  'S9CN-w35-quiz': L(
    'Tổng kết môn — Liên hệ thực tế',
    'Tuần cuối cùng — nhìn lại hành trình và mang kiến thức Công nghệ vào cuộc sống hằng ngày của bản thân.',
    ['Tổng kết các kiến thức và kĩ năng cả năm.', 'Vận dụng vào tình huống gia đình.', 'Có ý thức rèn luyện suốt đời.'],
    [
      { h: 'Nhìn lại các mạch kiến thức' },
      { ul: ['Điện dân dụng: an toàn, lắp đặt, kiểm tra.', 'Nông nghiệp: cây ăn quả, kĩ thuật ghép.', 'Sửa xe đạp: tự bảo dưỡng phương tiện.', 'Nấu ăn: dinh dưỡng, vệ sinh, chế biến.', 'May mặc: khâu vá đơn giản.', 'Hướng nghiệp: định hướng tương lai.'] },
      { h: 'Vận dụng vào gia đình' },
      { ul: ['Thay bóng đèn, sửa ổ cắm cho mẹ.', 'Chăm cây trong vườn cùng bố.', 'Tự bảo dưỡng xe đạp đi học.', 'Nấu ăn giúp gia đình 1-2 bữa/tuần.', 'Khâu lại nút áo cho em.', 'Chia sẻ với cha mẹ về định hướng nghề.'] },
      { h: 'Học tập suốt đời' },
      { p: 'Công nghệ thay đổi không ngừng — kĩ năng học hôm nay có thể lỗi thời ngày mai. Quan trọng nhất là rèn thói quen tự học và thử cái mới.' },
      { h: 'Lời chia tay' },
      { p: 'Môn Công nghệ lớp 9 khép lại nhưng kĩ năng các em học sẽ theo suốt cuộc đời. Chúc các em vững vàng bước vào kì thi và chặng đường tiếp theo.' },
      { note: '"Học một biết mười" — kiến thức công nghệ là nền tảng để các em tự học mọi kĩ năng mới sau này.' },
    ],
    [
      { q: 'Em đã học sửa xe đạp. Em sẽ áp dụng thế nào trong cuộc sống?', a: 'Tự bảo dưỡng xe đi học mỗi tháng; sửa giúp bạn, em nhỏ khi cần; dạy lại em ruột; lưu lại bí quyết — đây cũng có thể là nghề tay trái khi cần.' },
      { q: 'Em sẽ tiếp tục rèn năng lực nghề nghiệp như thế nào sau lớp 9?', a: 'Tham gia CLB chuyên môn; tự học online; tìm mentor; xin trải nghiệm thực tế (làm thêm, thực tập); luôn cập nhật xu hướng nghề; rèn năng lực số liên tục.' },
    ]
  ),
};
