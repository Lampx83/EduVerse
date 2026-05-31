// ============================================================
// Lớp 6 · GIÁO DỤC THỂ CHẤT — Lý thuyết 36 tuần (GDPT 2018)
// Key TRÙNG id quiz: "S6GDTC-wNN-quiz".
// Dạy kỹ thuật động tác, khẩu lệnh, luật chơi, an toàn — văn phong thầy/cô GDTC THCS.
// ============================================================

export const S6GDTC_LESSONS = {
  // ──────────────── HK1 ────────────────
  'S6GDTC-w01-quiz': {
    topic: 'Lợi ích của tập luyện thể dục thể thao',
    intro: 'Các em ạ, bước vào THCS rồi, cơ thể các em đang lớn rất nhanh. Bài học mở đầu hôm nay thầy/cô muốn các em hiểu rõ: vì sao phải tập thể dục thể thao đều đặn, và tập như thế nào mới đúng.',
    objectives: [
      'Hiểu được lợi ích của TDTT đối với sức khoẻ thể chất, tinh thần và học tập.',
      'Nắm khuyến cáo vận động ≥ 60 phút/ngày của WHO cho trẻ 6–17 tuổi.',
      'Nhận biết dấu hiệu tập quá sức để biết tự điều chỉnh.',
    ],
    theory: [
      { h: 'TDTT mang lại những gì cho cơ thể đang lớn?' },
      { p: 'Khi vận động đều đặn, tim đập khoẻ hơn, phổi hít sâu hơn, xương dài và chắc hơn, cơ bắp săn lại. Đặc biệt ở tuổi các em — giai đoạn dậy thì — vận động hợp lý còn giúp phát triển chiều cao và cân nặng cân đối.' },
      { ul: [
        'Tăng sức đề kháng, ít ốm vặt.',
        'Phát triển chiều cao nhờ kích thích sụn tăng trưởng.',
        'Cải thiện vóc dáng, tư thế đứng — ngồi — đi.',
      ] },
      { h: 'TDTT giúp tinh thần và học tập tốt hơn' },
      { p: 'Vận động kích thích cơ thể tiết ra endorphin — chất "hạnh phúc" tự nhiên — nên các em sẽ thấy thoải mái, đỡ căng thẳng, ngủ ngon hơn. Máu lên não nhiều hơn cũng giúp tập trung khi học bài.' },
      { h: 'Khuyến cáo của WHO cho lứa tuổi các em' },
      { ul: [
        'Vận động cường độ vừa – mạnh ≥ 60 phút mỗi ngày.',
        'Có ít nhất 3 buổi/tuần làm các bài rèn cơ bắp – xương (chạy, nhảy, leo, bật).',
        'Hạn chế ngồi tĩnh tại (xem điện thoại, TV) liên tục quá lâu.',
      ] },
      { note: 'Tập đều mỗi ngày, vừa sức và tăng dần — đó là nguyên tắc vàng. Không có chuyện "tập nặng một bữa rồi nghỉ cả tuần".' },
      { h: 'Dấu hiệu tập quá sức cần biết' },
      { p: 'Nếu thấy mệt kéo dài nhiều ngày, đau cơ dai dẳng, mất ngủ, chán ăn — đó là dấu hiệu các em đã tập quá tải. Lúc này phải giảm khối lượng, nghỉ thêm và ngủ đủ giấc cho cơ thể hồi phục.' },
    ],
    examples: [
      { q: 'Bạn An ngồi học liên tục 4 tiếng không đứng dậy. Em khuyên bạn nên làm gì?', a: 'Cứ 45–60 phút, bạn nên đứng dậy 5 phút: xoay cổ, vươn vai, đi lại nhẹ, nhìn xa ra cửa sổ. Việc này giúp giảm mỏi mắt, đỡ cong vẹo cột sống và tinh thần tỉnh táo trở lại.' },
      { q: 'Bạn Bình muốn cao thêm nên tập tạ thật nặng mỗi ngày. Tư vấn của em?', a: 'Tuổi 11–12 chưa nên tập tạ nặng vì có thể ảnh hưởng sụn tăng trưởng. Bình nên tập các môn kích thích chiều cao như bơi, bóng rổ, nhảy dây, xà đơn — kết hợp ngủ đủ 8–9 tiếng và ăn uống đủ canxi.' },
    ],
  },

  'S6GDTC-w02-quiz': {
    topic: 'Khởi động và hồi tĩnh',
    intro: 'Các em nhớ kỹ: trước mỗi buổi tập đều phải khởi động, và sau buổi tập đều phải hồi tĩnh. Bỏ qua hai phần này là rất dễ chấn thương — và buổi tập cũng kém hiệu quả.',
    objectives: [
      'Hiểu mục đích và biết cách khởi động đúng trình tự.',
      'Thực hiện được khởi động chung và khởi động chuyên môn.',
      'Biết cách hồi tĩnh sau buổi tập để cơ thể về trạng thái nghỉ.',
    ],
    theory: [
      { h: 'Vì sao phải khởi động?' },
      { p: 'Khởi động là làm "ấm máy" — tăng nhịp tim từ từ, làm nóng cơ, tăng độ linh hoạt khớp, đánh thức hệ thần kinh sẵn sàng vận động. Cơ chưa nóng mà đã tập nặng thì rất dễ căng cơ, bong gân.' },
      { h: 'Trình tự khởi động chuẩn' },
      { ul: [
        'Khởi động chung: chạy nhẹ 1–2 vòng sân, xoay các khớp từ trên xuống (cổ → vai → khuỷu → cổ tay → hông → gối → cổ chân).',
        'Khởi động chuyên môn: làm các động tác giống bài tập chính nhưng nhẹ hơn (sắp chạy ngắn thì chạy nâng cao đùi, chạy gót chạm mông…).',
        'Căng cơ động (không giữ tĩnh quá lâu trước khi tập).',
      ] },
      { h: 'Hồi tĩnh — phần quan trọng hay bị bỏ quên' },
      { p: 'Sau khi tập nặng, tim đang đập rất nhanh. Nếu dừng đột ngột, máu dồn ở chân, có thể chóng mặt, choáng. Hồi tĩnh là chuyển dần cơ thể về trạng thái nghỉ.' },
      { ul: [
        'Đi bộ chậm 2–3 phút sau khi chạy.',
        'Hít sâu — thở chậm để điều hoà nhịp tim, nhịp thở.',
        'Căng giãn cơ tĩnh (giữ 15–20 giây/động tác) các nhóm vừa hoạt động.',
      ] },
      { note: 'Khẩu hiệu: "Khởi động từ chung đến chuyên môn — Hồi tĩnh từ mạnh về nhẹ".' },
    ],
    examples: [
      { q: 'Sắp chạy 60m, em khởi động chuyên môn thế nào?', a: 'Sau khi xoay khớp xong, em chạy nâng cao đùi 20m, chạy gót chạm mông 20m, bước chéo 2 lượt, rồi 1–2 lần tăng tốc ngắn 30m ở 70–80% sức. Vậy là cơ chân đã sẵn sàng cho lần xuất phát thật.' },
      { q: 'Vừa chạy 800m xong, em làm gì để hồi tĩnh đúng?', a: 'Em KHÔNG ngồi sụp xuống ngay. Em đi bộ chậm 2–3 phút, hai tay đan sau gáy hít sâu — thở chậm. Sau đó căng giãn bắp đùi trước, đùi sau, bắp chuối, mỗi động tác giữ 20 giây.' },
    ],
  },

  'S6GDTC-w03-quiz': {
    topic: 'Đội hình đội ngũ — Tập hợp, dóng hàng',
    intro: 'Các em ơi, đội hình đội ngũ không phải chỉ là "xếp hàng" — nó rèn cho các em sự nghiêm túc, kỷ luật và tinh thần tập thể. Một lớp tập hợp nhanh, dóng hàng thẳng là một lớp có nề nếp.',
    objectives: [
      'Biết cấu trúc khẩu lệnh: dự lệnh và động lệnh.',
      'Thực hiện được tập hợp hàng dọc, hàng ngang đúng kỹ thuật.',
      'Dóng được hàng cho thẳng, đều khoảng cách.',
    ],
    theory: [
      { h: 'Khẩu lệnh có hai phần' },
      { p: 'Một khẩu lệnh chuẩn gồm: dự lệnh (nội dung — báo trước phải làm gì) và động lệnh (lệnh — phát ra để thực hiện ngay). Ví dụ: "Thành 4 hàng dọc — TẬP HỢP!". "Thành 4 hàng dọc" là dự lệnh, "TẬP HỢP!" là động lệnh, hô dứt khoát.' },
      { h: 'Tập hợp hàng dọc' },
      { ul: [
        'Tổ trưởng/người làm chuẩn chạy nhanh tới trước mặt chỉ huy, đứng nghiêm — quay mặt cùng hướng chỉ huy.',
        'Các bạn còn lại lần lượt đứng nối tiếp phía sau theo tổ.',
        'Khoảng cách giữa hai bạn ≈ một cánh tay duỗi thẳng chạm vai bạn trước.',
      ] },
      { h: 'Dóng hàng' },
      { p: 'Khẩu lệnh "Nhìn trước — THẲNG!" (hàng dọc) hoặc "Nhìn bên phải — THẲNG!" (hàng ngang). Hàng dọc thì nhìn gáy bạn phía trước; hàng ngang thì quay đầu sang phải, nhìn theo vai bạn chuẩn. Khi cô/thầy hô "Thôi!", các em đưa mặt về trước, đứng nghiêm.' },
      { note: 'Tập hợp NHANH — dóng hàng THẲNG — đứng nghiêm IM LẶNG. Đó là ba tiêu chí đánh giá đội hình.' },
    ],
    examples: [
      { q: 'Cô hô "Thành 3 hàng dọc — TẬP HỢP!". Em phải làm gì?', a: 'Em nghe dự lệnh "Thành 3 hàng dọc" để biết sẽ xếp 3 hàng. Khi nghe động lệnh "TẬP HỢP!", em chạy nhanh về vị trí tổ mình, đứng nối tiếp sau bạn tổ trưởng, giữ khoảng cách một cánh tay, đứng nghiêm chờ dóng hàng.' },
      { q: 'Hàng ngang của lớp bị cong khúc giữa. Em làm gì khi nghe "Nhìn bên phải — THẲNG!"?', a: 'Em quay nhẹ đầu sang phải, nhìn theo vai bạn chuẩn ở đầu phải hàng. Em chỉnh chân nhích lên hoặc lùi xuống cho vai mình thẳng đường với vai bạn chuẩn. Khi cô hô "Thôi!", em đưa mặt về trước.' },
    ],
  },

  'S6GDTC-w04-quiz': {
    topic: 'Đội hình đội ngũ — Điểm số, quay tại chỗ',
    intro: 'Hôm nay chúng ta học hai kỹ năng đội hình quan trọng: điểm số để biết quân số, và quay tại chỗ để chuyển hướng đội hình. Các em chú ý nghe khẩu lệnh thật kỹ nhé.',
    objectives: [
      'Biết cách điểm số trong hàng dọc, hàng ngang.',
      'Thực hiện được quay phải, quay trái, đằng sau quay đúng kỹ thuật.',
      'Phát triển phản xạ, sự tập trung và phối hợp tập thể.',
    ],
    theory: [
      { h: 'Điểm số' },
      { p: 'Khẩu lệnh "Từ một đến hết — ĐIỂM SỐ!". Bạn đầu hàng quay nhẹ mặt sang phải hô to "Một!" rồi quay trở lại. Lần lượt mỗi bạn hô số tiếp theo. Bạn cuối cùng hô số mình kèm tiếng "Hết!" để báo kết thúc — ví dụ "Mười hai — Hết!".' },
      { h: 'Quay tại chỗ' },
      { ul: [
        '"Bên phải — QUAY!": xoay 90° sang phải.',
        '"Bên trái — QUAY!": xoay 90° sang trái.',
        '"Đằng sau — QUAY!": xoay 180° (qua bên phải).',
      ] },
      { p: 'Kỹ thuật: khi nghe động lệnh "QUAY!", em xoay trên gót chân thuận với hướng quay và mũi chân kia. Thân giữ thẳng, hai tay áp sát đùi, sau khi quay xong thì kéo chân kia về đứng nghiêm — không loạng choạng.' },
      { h: 'Lỗi thường gặp khi quay' },
      { ul: [
        'Nhảy lên xoay — thân không thẳng, mất đội hình.',
        'Quay không đủ góc — hàng lệch hướng.',
        'Sau khi quay không kéo chân về — đứng lệch trục.',
      ] },
      { note: 'Tập điểm số và quay tại chỗ giúp các em phản xạ nhanh, tập trung và phối hợp đồng đều — kỹ năng quý cho mọi môn thể thao.' },
    ],
    examples: [
      { q: 'Khi nghe "Đằng sau — QUAY!", em xoay thế nào cho đúng?', a: 'Em xoay 180° qua bên PHẢI: dùng gót chân phải và mũi chân trái xoay nửa vòng, thân thẳng, hai tay áp đùi. Xoay xong em kéo chân trái về sát chân phải, đứng nghiêm.' },
      { q: 'Bạn đầu hàng quên chưa hô "Một!". Bạn thứ hai có nên hô "Hai!" trước không?', a: 'Không. Phải đợi bạn đầu hô đúng thứ tự "Một!" mới đến lượt mình. Nếu bạn đầu quên, có thể nhắc nhẹ. Tuyệt đối không tự ý hô số trước — sẽ làm rối điểm số.' },
    ],
  },

  'S6GDTC-w05-quiz': {
    topic: 'Bài thể dục liên hoàn — Động tác tay, chân, lườn',
    intro: 'Bài thể dục liên hoàn là chuỗi 8–10 động tác phối hợp, mỗi động tác nhằm vào một nhóm cơ. Hôm nay chúng ta học ba động tác đầu: tay, chân, lườn.',
    objectives: [
      'Hiểu cấu trúc bài thể dục liên hoàn THCS (8–10 động tác, 2×8 hoặc 4×8 nhịp).',
      'Thực hiện đúng biên độ động tác tay, chân, lườn.',
      'Phối hợp được hơi thở với động tác.',
    ],
    theory: [
      { h: 'Bài TD liên hoàn là gì?' },
      { p: 'Là chuỗi các động tác kế tiếp nhau, mỗi động tác nhắm một nhóm cơ — tay/vai/ngực, chân/đùi, lườn/eo, bụng/lưng, vặn mình, toàn thân. Bài THCS thường 8–10 động tác, tính nhịp theo 2×8 hoặc 4×8.' },
      { h: 'Động tác TAY' },
      { ul: [
        'Tác động: cơ vai, cơ ngực, cơ tay.',
        'Yêu cầu: tay duỗi thẳng, đưa hết biên độ (giơ lên cao thì sát tai, đưa ngang thì ngang vai).',
        'Phối hợp thở: tay giơ lên — hít vào; tay hạ xuống — thở ra.',
      ] },
      { h: 'Động tác CHÂN' },
      { ul: [
        'Tác động: cơ đùi, cơ bắp chuối.',
        'Yêu cầu: bước hoặc đá chân đủ tầm, đầu gối thẳng khi yêu cầu thẳng, gập đủ khi yêu cầu gập.',
      ] },
      { h: 'Động tác LƯỜN' },
      { p: 'Hai chân đứng rộng bằng vai, hai tay chống hông hoặc giơ lên cao. Nghiêng thân – hông sang trái rồi sang phải, giữ chân thẳng, mặt nhìn theo hướng nghiêng. Động tác này kéo giãn cơ vùng eo — phòng đau lưng.' },
      { note: 'Lỗi hay gặp: làm cho có, không hết biên độ, sai nhịp. Tập đẹp = đúng biên độ + đúng nhịp + khí thế.' },
    ],
    examples: [
      { q: 'Thực hiện động tác tay 4×8 nhịp. Mô tả nhịp 1–2.', a: 'Nhịp 1: hai tay đưa ra trước song song, ngang vai, lòng bàn tay úp — hít nhẹ. Nhịp 2: tay vung sang ngang ngang vai, lòng tay ngửa — tiếp tục hít. Thân thẳng, mắt nhìn trước, chân đứng nghiêm.' },
      { q: 'Bạn em làm động tác lườn nhưng chỉ nghiêng đầu chứ không nghiêng thân. Em sửa thế nào?', a: 'Em nhắc bạn: phải nghiêng cả thân và hông sang bên, hai chân thẳng, không gập gối. Có thể bảo bạn để tay phải duỗi thẳng áp tai, tay trái áp sườn rồi nghiêng — như vậy mới đúng biên độ và kéo căng được lườn.' },
    ],
  },

  'S6GDTC-w06-quiz': {
    topic: 'Bài thể dục liên hoàn — Động tác bụng, vặn mình, toàn thân',
    intro: 'Tiếp nối tuần trước, hôm nay các em học ba động tác còn lại: bụng, vặn mình, toàn thân. Đây là phần huy động nhiều nhóm cơ — cần làm cẩn thận để tránh trật lưng.',
    objectives: [
      'Thực hiện đúng động tác bụng, vặn mình, toàn thân.',
      'Biết phối hợp đồng đều với cả lớp theo nhịp.',
      'Hiểu khi nào nên tập bài TD trong ngày.',
    ],
    theory: [
      { h: 'Động tác BỤNG' },
      { p: 'Hai chân đứng rộng bằng vai, hai tay đan sau gáy hoặc đưa cao. Cúi gập thân về trước, hai tay chạm mũi chân (nếu được), giữ chân thẳng. Tác động: cơ bụng, cơ lưng dưới, kéo giãn gân kheo.' },
      { h: 'Động tác VẶN MÌNH' },
      { ul: [
        'Đứng rộng bằng vai, hai tay đưa ngang.',
        'Vặn thân sang trái — tay phải đưa chạm vai trái, mắt nhìn theo tay sau.',
        'Vặn TỪ TỪ, hết biên độ. Tuyệt đối không giật cục — dễ trật cơ lưng.',
      ] },
      { h: 'Động tác TOÀN THÂN' },
      { p: 'Ví dụ: ngồi xổm — đứng lên — bật cao. Đây là động tác huy động cả chân, hông, lưng, tay phối hợp — tăng sức mạnh và độ phối hợp tổng quát. Khi bật phải tiếp đất bằng nửa trước bàn chân, khuỵu gối hoãn xung.' },
      { h: 'Khi nào tập bài TD trong ngày?' },
      { ul: [
        'Buổi sáng sau khi ngủ dậy: 5–10 phút giúp đánh thức cơ thể.',
        'Giữa giờ học (thể dục giữa giờ): 3–5 phút giúp giải toả mỏi, tỉnh táo lại.',
        'Tránh tập ngay sau bữa ăn no hoặc sát giờ ngủ.',
      ] },
      { note: 'Yêu cầu cốt lõi của bài TD tập thể: ĐỒNG ĐỀU — ĐÚNG NHỊP — ĐÚNG HƯỚNG. Cả lớp như một.' },
    ],
    examples: [
      { q: 'Bạn vặn mình nhanh — mạnh để "ấn tượng" hơn. Em nhận xét?', a: 'Bạn làm sai. Vặn mình phải TỪ TỪ, hết biên độ, không giật cục. Vặn nhanh – mạnh đột ngột rất dễ trật cơ lưng hoặc đốt sống. Phải làm đúng kỹ thuật chứ không phải làm cho hoành tráng.' },
      { q: 'Lớp tập bài TD giữa giờ, một bạn vừa tập vừa nói chuyện. Em xử lý?', a: 'Em nhắc bạn nhẹ nhàng: bài TD tập thể yêu cầu nghiêm túc, đồng đều. Nói chuyện sẽ lệch nhịp, ảnh hưởng cả hàng. Nếu bạn vẫn tiếp tục, em báo lại với cô giáo để cô nhắc nhở.' },
    ],
  },

  'S6GDTC-w07-quiz': {
    topic: 'Chạy cự ly ngắn — Tư thế xuất phát',
    intro: 'Chạy cự ly ngắn ở THCS gồm 50m, 60m, 100m. Tốc độ và thành tích phụ thuộc rất nhiều vào pha xuất phát. Hôm nay chúng ta học tư thế xuất phát cao — loại phổ biến ở THCS.',
    objectives: [
      'Phân biệt xuất phát cao và xuất phát thấp.',
      'Thực hiện đúng tư thế xuất phát cao theo 3 lệnh.',
      'Phản xạ nhanh, dứt khoát khi có tín hiệu chạy.',
    ],
    theory: [
      { h: 'Hai loại xuất phát' },
      { ul: [
        'Xuất phát CAO: đứng, dùng ở THCS và chạy bền — đơn giản, an toàn.',
        'Xuất phát THẤP: dùng bàn đạp, cho thi đấu chuyên môn — cho tốc độ ban đầu cao hơn.',
      ] },
      { h: 'Ba khẩu lệnh chuẩn' },
      { p: 'Trình tự: "Vào chỗ!" → "Sẵn sàng!" → tín hiệu xuất phát (súng/còi/"Chạy!"). Nhớ thứ tự này — không được đảo.' },
      { h: 'Kỹ thuật xuất phát cao' },
      { ul: [
        '"Vào chỗ!": chân thuận đặt trước cách vạch ~20cm, mũi chân chạm vạch; chân không thuận đặt sau cách chân trước ~1 bàn chân.',
        '"Sẵn sàng!": hạ thấp trọng tâm, hơi đổ thân về trước, gối hơi gập, tay so le (tay nghịch với chân trước đưa ra trước).',
        'Tín hiệu Chạy: đạp MẠNH chân sau, đẩy người lao về trước, đánh tay phối hợp.',
      ] },
      { note: 'Phản xạ ở vạch xuất phát phải nhanh — chậm nửa giây là thua cả mét. Khi nghe "Sẵn sàng!" cơ thể đã phải sẵn lực để bật ngay.' },
    ],
    examples: [
      { q: 'Bạn nghe "Sẵn sàng!" nhưng vẫn đứng thẳng người. Bạn sai ở đâu?', a: 'Bạn không hạ thấp trọng tâm. Đúng kỹ thuật: nghe "Sẵn sàng!" phải gập gối, đổ thân về trước, tay so le, sẵn sàng đạp xuất phát. Đứng thẳng người = không tích được lực → xuất phát chậm hơn các bạn.' },
      { q: 'Em chân phải thuận. Khi vào chỗ xuất phát cao, em đặt chân thế nào?', a: 'Em đặt chân PHẢI (chân thuận) ở trước, mũi chân cách vạch ~20cm. Chân TRÁI đặt sau cách gót chân phải khoảng một bàn chân. Hai chân chếch tự nhiên, hai tay buông xuôi chờ lệnh "Sẵn sàng!".' },
    ],
  },

  'S6GDTC-w08-quiz': {
    topic: 'Chạy cự ly ngắn — Chạy giữa quãng và về đích',
    intro: 'Xuất phát xong, bài toán còn lại là làm sao giữ được tốc độ cao đến vạch đích. Hôm nay học hai pha quan trọng: chạy giữa quãng và về đích.',
    objectives: [
      'Nắm kỹ thuật chạy giữa quãng: bước, tiếp đất, đánh tay.',
      'Biết kỹ thuật đánh đích bằng ngực/vai.',
      'Biết cách hồi tĩnh sau khi qua đích để tránh choáng.',
    ],
    theory: [
      { h: 'Chạy giữa quãng — giữ tốc độ tối đa' },
      { ul: [
        'Bước dài đều, không bước quá ngắn cũng không quá dài.',
        'Tiếp đất bằng nửa trước bàn chân (mũi và ức bàn) để bật lại nhanh.',
        'Thân hơi đổ về trước, mắt nhìn thẳng (không nhìn xuống chân, không ngó hai bên).',
        'Tay khuỳu ~90°, đánh trước – sau theo nhịp chân, không bắt chéo thân.',
      ] },
      { h: 'Về đích — đánh đích' },
      { p: 'Ở mét cuối, em lao mạnh người về trước, ưỡn ngực hoặc vung vai về đích. Kỹ thuật này gọi là "đánh đích" — giúp rút ngắn thời gian qua vạch. Tuyệt đối không giảm tốc trước vạch — nhiều bạn vì sợ ngã mà chạy chậm lại ngay trước đích, mất thành tích.' },
      { h: 'Sau khi qua đích' },
      { ul: [
        'Tiếp tục chạy chậm dần thêm 10–20m rồi mới đi bộ — KHÔNG dừng đột ngột.',
        'Đi bộ chậm, hít sâu thở chậm để hồi tĩnh.',
        'Tuyệt đối không ngồi sụp xuống ngay sau khi qua đích.',
      ] },
      { note: 'An toàn khi chạy ngắn: khởi động kỹ cổ chân – gối – hông; mang giày phù hợp; chạy trên mặt sân bằng phẳng, không sỏi đá.' },
    ],
    examples: [
      { q: 'Bạn chạy 60m giữ tốc tốt nhưng đến mét cuối thì giảm tốc vì sợ va vào hàng rào. Em góp ý?', a: 'Phải đánh đích, không giảm tốc trước vạch. Bạn cứ chạy hết tốc đến qua vạch, sau đó còn ~10m để chạy chậm dần rồi đi bộ. Sợ ngã thì khi đánh đích cũng có thể chỉ ưỡn ngực vung vai chứ không cần lao gập người.' },
      { q: 'Bạn vừa qua đích thì ngồi sụp xuống thở hổn hển. Có nên không?', a: 'Không nên. Tim đang đập rất nhanh, máu dồn ở chân — ngồi sụp có thể chóng mặt, choáng. Đúng cách: tiếp tục đi bộ chậm 2–3 phút, hít sâu thở chậm, hai tay đan sau gáy. Khi nhịp tim dịu mới ngồi nghỉ.' },
    ],
  },

  'S6GDTC-w09-quiz': {
    topic: 'Chạy bền — Kỹ thuật và phân phối sức',
    intro: 'Chạy bền không phải ai nhanh nhất khi xuất phát là thắng, mà ai PHÂN PHỐI SỨC tốt nhất mới về đích đầu tiên. Đây là môn rèn ý chí — vừa chạy bằng chân, vừa chạy bằng đầu.',
    objectives: [
      'Hiểu khái niệm chạy bền và tác dụng với sức bền tim mạch – hô hấp.',
      'Biết phân phối sức và nhịp thở hợp lý.',
      'Biết cách vượt qua "cực điểm" — giai đoạn mệt nhất.',
    ],
    theory: [
      { h: 'Chạy bền là gì?' },
      { p: 'Là chạy cự ly trung bình – dài (500m, 800m, 1000m trở lên) với tốc độ ổn định. Mục tiêu không phải tốc độ tối đa mà là duy trì được tốc độ vừa phải trong thời gian dài.' },
      { h: 'Phân phối sức hợp lý' },
      { ul: [
        'Khởi đầu vừa phải — không lao đi như chạy ngắn.',
        'Giữa quãng: tốc độ ổn định, đều bước, đều nhịp thở.',
        'Cuối quãng: tăng tốc dần khi gần đích nếu còn sức (rút đích).',
      ] },
      { h: 'Kỹ thuật bước chạy bền' },
      { p: 'Bước vừa phải, không quá dài. Tiếp đất bằng cả bàn chân hoặc gần gót — êm, ít tốn sức. Thân thẳng, hơi đổ trước nhẹ. Tay đánh thoải mái, không gồng cứng.' },
      { h: 'Nhịp thở — bí quyết của chạy bền' },
      { ul: [
        'Hít sâu bằng MŨI, thở ra bằng MIỆNG.',
        'Theo nhịp chân: ví dụ 3 bước hít vào – 3 bước thở ra (hoặc 2-2 nếu mệt hơn).',
        'Thở có nhịp giúp tránh xóc hông và duy trì oxy đều cho cơ.',
      ] },
      { h: '"Cực điểm" — giai đoạn mệt nhất' },
      { p: 'Khi chạy được một đoạn, các em thường thấy rất mệt, muốn bỏ — đó là "cực điểm". Lúc này cơ thể chưa kịp cân đối oxy. Nếu giảm tốc nhẹ, điều hoà hơi thở và kiên trì vượt qua, cơ thể sẽ vào "hô hấp ổn định" — chạy nhẹ hơn rất nhiều.' },
      { note: 'Chạy bền cải thiện cả tim, phổi, sức bền chung và đặc biệt là ý chí.' },
    ],
    examples: [
      { q: 'Bạn xuất phát chạy 800m bằng tốc độ chạy 100m. Dự đoán điều gì?', a: 'Bạn sẽ kiệt sức ở khoảng 200–300m đầu, rồi phải đi bộ hoặc bỏ cuộc. Chạy bền phải PHÂN PHỐI sức — khởi đầu vừa phải, giữ tốc đều, để dành sức cho rút đích.' },
      { q: 'Em đang chạy 800m thấy thở dốc và muốn bỏ. Em xử lý thế nào?', a: 'Có thể em đang ở "cực điểm". Em giảm tốc một chút, hít sâu vào mũi – thở ra bằng miệng theo nhịp 3 bước hít – 3 bước thở. Vài chục mét sau cơ thể sẽ điều hoà lại, em chạy nhẹ hơn rõ rệt. Không bỏ cuộc!' },
    ],
  },

  'S6GDTC-w10-quiz': {
    topic: 'Chạy bền — An toàn và tập luyện thường xuyên',
    intro: 'Tuần này chúng ta đi sâu vào tập luyện an toàn cho chạy bền — chuẩn bị trước khi chạy, xử lý sự cố trong khi chạy, và hồi tĩnh sau khi chạy.',
    objectives: [
      'Biết chuẩn bị đúng trước buổi chạy bền.',
      'Biết cách xử lý xóc hông, chóng mặt khi chạy.',
      'Nhận biết dấu hiệu nguy hiểm cần dừng ngay.',
    ],
    theory: [
      { h: 'Chuẩn bị trước khi chạy bền' },
      { ul: [
        'Uống nước đủ trước 30–60 phút, không uống ừng ực ngay trước khi chạy.',
        'Khởi động kỹ 10 phút: chạy nhẹ + xoay khớp + tăng tốc ngắn.',
        'Kiểm tra giày: buộc dây chắc, không quá chật/quá rộng.',
        'Mặc đồ thoáng mát, có khả năng thấm hút mồ hôi.',
      ] },
      { h: 'Sự cố "xóc hông" và cách xử lý' },
      { p: 'Khi chạy bền, nhiều bạn bị đau nhói ở vùng hông – sườn — gọi là "xóc hông". Nguyên nhân thường do thở không đều. Cách xử lý: giảm tốc, hít sâu vào bằng mũi, thở ra dài bằng miệng. Có thể dùng tay ấn nhẹ vào chỗ đau và tiếp tục chạy chậm. Sau vài chục mét sẽ hết.' },
      { h: 'Tần suất tập' },
      { ul: [
        '2–3 buổi/tuần là phù hợp cho HS lớp 6.',
        'Mỗi buổi 500m – 1000m, tăng dần theo sức.',
        'Không tập hai buổi nặng liên tiếp.',
      ] },
      { h: 'Thời tiết và môi trường' },
      { p: 'Tránh chạy giữa trưa nắng gắt. Mùa hè nên chạy sáng sớm hoặc chiều mát. Mùa đông khởi động kỹ hơn vì cơ dễ bị căng. Tránh chạy trên đường giao thông đông đúc, ưu tiên sân trường, công viên.' },
      { h: 'Dấu hiệu PHẢI DỪNG NGAY' },
      { ul: [
        'Đau ngực, tức ngực.',
        'Chóng mặt, hoa mắt, mất thăng bằng.',
        'Khó thở dữ dội, không nói thành câu.',
        'Buồn nôn, vã mồ hôi lạnh bất thường.',
      ] },
      { note: 'Sau khi chạy: đi bộ chậm 3–5 phút, căng giãn cơ, uống nước từ từ. Không tắm nước lạnh ngay khi còn ướt mồ hôi đầm đìa — dễ cảm.' },
    ],
    examples: [
      { q: 'Đang chạy 800m em thấy đau nhói bên hông phải. Em làm gì?', a: 'Em giảm tốc xuống chạy chậm, hít sâu bằng mũi – thở ra bằng miệng dài. Có thể dùng tay phải ấn nhẹ vào chỗ đau. Sau khoảng 30–50m cơn đau sẽ giảm. Nếu vẫn đau nặng, em đi bộ nốt quãng còn lại và báo thầy cô.' },
      { q: 'Bạn chạy bền xong tu một chai nước đá lạnh ừng ực. Có nên không?', a: 'Không nên. Cơ thể đang nóng — uống nước đá lạnh đột ngột dễ viêm họng, sốc nhiệt dạ dày. Đúng cách: nghỉ vài phút cho dịu, uống nước mát từ từ từng ngụm nhỏ.' },
    ],
  },

  'S6GDTC-w11-quiz': {
    topic: 'Nhảy xa — Chạy đà và giậm nhảy',
    intro: 'Nhảy xa là môn tổng hợp tốc độ và sức bật. Một lần nhảy gồm 4 giai đoạn — hôm nay học hai giai đoạn quan trọng nhất: chạy đà và giậm nhảy.',
    objectives: [
      'Biết 4 giai đoạn của kỹ thuật nhảy xa.',
      'Thực hiện được chạy đà ổn định và giậm nhảy đúng vạch.',
      'Hiểu vai trò của lực giậm nhảy với thành tích.',
    ],
    theory: [
      { h: 'Bốn giai đoạn nhảy xa' },
      { ul: [
        'Chạy đà — tạo tốc độ.',
        'Giậm nhảy — chuyển tốc độ ngang thành lực bay.',
        'Bay trên không — giữ thăng bằng, kéo dài quỹ đạo.',
        'Tiếp đất — kết thúc lần nhảy, đo thành tích.',
      ] },
      { h: 'Chạy đà' },
      { p: 'Mục tiêu là đạt tốc độ TỐI ƯU — không phải tốc độ tối đa. Bước đà phải đều, ổn định để bước cuối cùng rơi đúng vạch giậm. Người mới tập nên đo đà: chạy thử vài lần, ghi nhớ số bước (thường 8–12 bước), đánh dấu điểm xuất phát đà.' },
      { h: 'Giậm nhảy — quyết định lực bay' },
      { ul: [
        'Đạp bằng MỘT chân (chân giậm — thường là chân thuận).',
        'Bàn chân đạp xuống ván giậm bằng cả bàn chân, lực hướng XUỐNG và VỀ TRƯỚC.',
        'Đồng thời chân kia (chân lăng) đá mạnh lên, tay vung phối hợp.',
        'Lực giậm có hướng: lên cao + hơi về trước → tạo quỹ đạo bay parabol.',
      ] },
      { h: 'Vạch giậm' },
      { p: 'KHÔNG được vượt qua mép trước của ván giậm. Vượt = phạm quy, không tính thành tích. Vì vậy người tập phải đo đà thật chính xác.' },
      { note: 'Lỗi phổ biến: đà sai bước, giậm hụt ván hoặc đạp lên ván mà không bật được. Cách khắc phục: đo đà cẩn thận, tăng tốc dần ở các bước cuối, dồn lực vào chân giậm.' },
    ],
    examples: [
      { q: 'Bạn chạy đà 10 bước, đến bước 9 đã sát ván nên ngập ngừng rồi bước cụt. Sai ở đâu?', a: 'Bạn đo đà chưa chuẩn — đà bị thừa, đến vạch sớm. Cách sửa: chạy thử vài lần, đếm số bước thực tế, đánh dấu lại điểm xuất phát đà cho lùi ra sau khoảng nửa bước. Tuyệt đối không ngập ngừng — mất hết tốc độ và lực bay.' },
      { q: 'Bạn giậm bằng cả hai chân cùng lúc. Đúng không?', a: 'Sai. Nhảy xa GIẬM MỘT CHÂN — chân thuận, gọi là chân giậm. Chân kia là chân lăng, đá mạnh lên trên để hỗ trợ lực bay. Giậm hai chân thì không tạo được tốc độ chuyển thành lực bay xa.' },
    ],
  },

  'S6GDTC-w12-quiz': {
    topic: 'Nhảy xa — Bay trên không và tiếp đất',
    intro: 'Sau khi giậm nhảy, các em đã ở trên không. Hai giai đoạn cuối — bay và tiếp đất — quyết định thành tích cuối cùng cũng như sự an toàn.',
    objectives: [
      'Biết giữ thăng bằng và chuẩn bị tiếp đất khi đang bay.',
      'Thực hiện được kỹ thuật tiếp đất bằng hai gót, khuỵu gối hoãn xung.',
      'Hiểu cách đo thành tích và một số bài tập bổ trợ.',
    ],
    theory: [
      { h: 'Bay trên không' },
      { p: 'Khi đã rời ván giậm, em không thể tăng thêm lực bay — quỹ đạo đã được quyết định bởi lực giậm. Việc trên không là: giữ thăng bằng, kéo dài quỹ đạo, chuẩn bị tiếp đất tốt nhất có thể.' },
      { ul: [
        'Kiểu "ngồi": co chân lăng lên cao, thân hơi gập — đơn giản, phù hợp người mới.',
        'Kiểu "ưỡn thân": ưỡn ngực, dạng hai tay — kỹ thuật cao hơn, dùng cho chuyên nghiệp.',
      ] },
      { h: 'Chuẩn bị tiếp đất' },
      { p: 'Khi sắp chạm cát, em DUỖI hai chân thẳng về phía trước, gối hơi gập, hai tay đưa về trước hoặc giơ ngang để giữ thăng bằng. Mục tiêu: đưa chân ra càng xa càng tốt — vì thành tích đo từ vạch giậm tới dấu cơ thể GẦN VẠCH NHẤT.' },
      { h: 'Tiếp đất' },
      { ul: [
        'Tiếp xúc cát đầu tiên bằng HAI GÓT chân.',
        'Sau đó cả bàn chân, đồng thời khuỵu gối hoãn xung.',
        'Lao người về phía trước hoặc đứng vững — KHÔNG ngã ngửa về sau.',
      ] },
      { note: 'Nếu ngã ngửa, dấu cơ thể GẦN vạch nhất sẽ là mông/lưng → mất thành tích. Vì vậy luôn nhớ: lao về trước, không ngã ngửa.' },
      { h: 'Đo thành tích' },
      { p: 'Đo từ mép trước ván giậm tới dấu cơ thể chạm cát gần vạch giậm nhất, vuông góc với vạch.' },
      { h: 'Bài tập bổ trợ' },
      { ul: [
        'Bật xa tại chỗ — luyện sức bật chân giậm.',
        'Bật cóc — luyện sức mạnh đùi và mông.',
        'Lò cò chân thuận — luyện sức bật chân giậm.',
        'Squat – nhảy dây — luyện cơ chân tổng quát.',
      ] },
    ],
    examples: [
      { q: 'Bạn tiếp đất bằng hai gót nhưng do quá đà nên ngã ngửa, mông chạm cát trước. Thành tích đo ở đâu?', a: 'Đo từ vạch giậm đến dấu MÔNG (vì mông gần vạch giậm nhất trong các dấu cơ thể). Bạn mất thành tích so với điểm gót đã tiếp đất. Cách sửa: khi sắp chạm cát, tay đưa về trước và lao thân về trước, KHÔNG ngã ngửa.' },
      { q: 'Em muốn tăng thành tích nhảy xa. Tập bổ trợ gì ở nhà?', a: 'Em có thể tập: bật xa tại chỗ 3 tổ × 8 lần, lò cò chân giậm 30m × 4 lần, nhảy dây 2 phút × 3 hiệp, squat 15 lần × 3 hiệp. Tập 2–3 buổi/tuần, kết hợp ngày tập kỹ thuật ở sân để sức mạnh chuyển hoá thành thành tích.' },
    ],
  },

  'S6GDTC-w13-quiz': {
    topic: 'Bật cao tại chỗ — Kỹ thuật',
    intro: 'Bật cao tại chỗ là bài tập rèn sức bật chân — quan trọng cho bóng rổ, bóng chuyền, cầu lông và cả nhảy xa. Hôm nay học kỹ thuật chuẩn.',
    objectives: [
      'Nắm các giai đoạn của bật cao tại chỗ.',
      'Thực hiện đúng tư thế chuẩn bị, bật và tiếp đất an toàn.',
      'Biết phối hợp tay – chân để tăng độ cao.',
    ],
    theory: [
      { h: 'Ba giai đoạn của bật cao tại chỗ' },
      { ul: [
        'Chuẩn bị: chùng gối lấy đà.',
        'Bật nhảy: đạp mạnh hai chân, vung tay.',
        'Trên không và tiếp đất: vươn người, sau đó tiếp đất khuỵu gối.',
      ] },
      { p: 'Lưu ý: bật cao TẠI CHỖ — không có chạy đà.' },
      { h: 'Chuẩn bị' },
      { p: 'Hai chân đứng rộng bằng vai, hai tay đưa trước mặt. Khuỵu gối khoảng 90–100°, thân hơi đổ về trước, hai tay đưa ra sau lưng. Đây là tư thế tích lực.' },
      { h: 'Bật nhảy' },
      { ul: [
        'Đạp MẠNH hai chân xuống đất, duỗi hết khớp gối – hông – cổ chân.',
        'Đồng thời vung mạnh hai tay từ sau ra trước – lên cao theo nhịp bật.',
        'Khi tay vung lên hết, người ở điểm cao nhất, vươn người.',
      ] },
      { h: 'Tiếp đất an toàn' },
      { p: 'Tiếp đất bằng nửa trước bàn chân, sau đó cả bàn chân, KHUỴU GỐI để hoãn xung. Tuyệt đối không tiếp đất bằng gót cứng đơ — sốc lên đầu gối và cột sống.' },
      { note: 'Phối hợp tay – chân là chìa khoá tăng độ cao. Chỉ bật chân mà không vung tay sẽ thấp hơn rõ rệt.' },
    ],
    examples: [
      { q: 'Bạn bật cao nhưng để hai tay thõng hai bên thân. Em góp ý?', a: 'Bạn thiếu phối hợp tay. Đúng kỹ thuật: tay phải vung từ sau ra trước – lên cao theo nhịp bật. Lực vung tay được "đẩy" vào lực bật chung, giúp người bật cao thêm 5–10cm. Bảo bạn tập lại có vung tay sẽ thấy khác hẳn.' },
      { q: 'Bạn bật và tiếp đất bằng gót, nghe "phịch" rất mạnh, ngày hôm sau đau gối. Vì sao?', a: 'Bạn không khuỵu gối hoãn xung, lực dội ngược lên đầu gối và cột sống. Đúng cách: tiếp đất bằng nửa trước bàn chân TRƯỚC, rồi cả bàn chân, đồng thời KHUỴU GỐI mềm như lò xo. Bảo bạn tập lại tiếp đất "êm" — hầu như không nghe tiếng.' },
    ],
  },

  'S6GDTC-w14-quiz': {
    topic: 'Bật cao — Bài tập bổ trợ và an toàn',
    intro: 'Sức bật không tự nhiên mà có — phải tập bổ trợ kiên trì. Tuần này thầy/cô hướng dẫn các em những bài tập kinh điển để tăng sức bật một cách an toàn.',
    objectives: [
      'Biết các bài tập bổ trợ tăng sức bật chân.',
      'Áp dụng nguyên tắc tập vừa sức, tăng dần.',
      'Phòng tránh và xử lý chấn thương cấp ở cổ chân – đầu gối.',
    ],
    theory: [
      { h: 'Các bài tập bổ trợ' },
      { ul: [
        'Squat (ngồi xổm – đứng lên): 15 lần × 3 hiệp — luyện đùi trước, mông.',
        'Bật cóc: 10–15m × 3 lượt — luyện sức bật bột phát.',
        'Nhảy dây: 2 phút × 3 hiệp — luyện cơ chân + tim mạch + phối hợp.',
        'Lunges (đẩy chân về trước, khuỵu gối): 10 lần/chân × 3 hiệp.',
        'Box jump (bật lên bục thấp 30–40cm): 8 lần × 3 hiệp — khi đã quen bật.',
      ] },
      { h: 'Nguyên tắc tăng dần' },
      { p: 'HS lớp 6 mới tập nên bắt đầu với khối lượng vừa phải: ví dụ squat 10 lần × 2 hiệp, nhảy dây 1 phút × 2 hiệp. Sau 1–2 tuần khi đã quen, tăng dần số lần hoặc số hiệp. KHÔNG tập đến kiệt sức, KHÔNG tập hai buổi nặng liên tiếp.' },
      { h: 'Chấn thương thường gặp' },
      { ul: [
        'Bong gân cổ chân (lật cổ chân khi tiếp đất lệch).',
        'Đau đầu gối (viêm gân bánh chè).',
        'Đau gót (viêm gân Achille).',
      ] },
      { h: 'Phòng tránh' },
      { ul: [
        'Khởi động kỹ khớp cổ chân – gối – hông trước khi bật.',
        'Mang giày có đệm, hỗ trợ cổ chân.',
        'Tập trên sân có độ đàn hồi vừa phải (sân tập, thảm), KHÔNG tập trên xi măng cứng hoặc cát lún.',
        'Đảm bảo tiếp đất khuỵu gối hoãn xung.',
      ] },
      { h: 'Xử lý chấn thương cấp — quy tắc R-I-C-E' },
      { ul: [
        'R (Rest): nghỉ tập ngay.',
        'I (Ice): chườm lạnh 15–20 phút, không chườm trực tiếp đá lên da.',
        'C (Compression): băng ép vừa phải.',
        'E (Elevation): kê chân cao hơn tim.',
      ] },
      { note: 'KHÔNG xoa dầu nóng ngay khi mới chấn thương cấp — làm sưng và chảy máu trong nặng hơn.' },
    ],
    examples: [
      { q: 'Bạn vừa tiếp đất bị lật cổ chân, sưng tím. Mẹ định dùng dầu nóng xoa bóp. Em can thiệp?', a: 'Em nói: 48 giờ đầu sau chấn thương cấp KHÔNG xoa dầu nóng. Đúng cách là quy tắc R-I-C-E: nghỉ, chườm lạnh (đá bọc khăn) 15–20 phút mỗi 2 giờ, băng ép vừa, kê cao chân. Nếu sưng to/đau nhiều cần đưa đi khám.' },
      { q: 'Em muốn tăng sức bật để chơi bóng rổ tốt. Lên kế hoạch 1 tuần?', a: 'Thứ 2: squat 12×3 + bật cóc 10m×3. Thứ 4: nhảy dây 2p×3 + lunges 10×3 mỗi chân. Thứ 6: bật cao tại chỗ 8×3 + bật xa tại chỗ 8×3. Thứ 3-5-7: nghỉ hoặc tập kỹ thuật bóng rổ. Chủ nhật nghỉ. Khởi động kỹ trước, hồi tĩnh sau.' },
    ],
  },

  'S6GDTC-w15-quiz': {
    topic: 'Ném bóng xa — Kỹ thuật ném',
    intro: 'Ném bóng xa rèn sức mạnh tay – vai và phối hợp toàn thân. Đừng nghĩ ném chỉ dùng tay — sức ném thật sự đến từ cả bàn chân lên đến đầu ngón tay.',
    objectives: [
      'Nắm 4 giai đoạn của kỹ thuật ném bóng xa.',
      'Hiểu nguyên lý truyền lực toàn thân khi ném.',
      'Biết góc ném tối ưu và tư thế kết thúc.',
    ],
    theory: [
      { h: 'Bốn giai đoạn của ném bóng xa' },
      { ul: [
        'Chuẩn bị — đứng đúng tư thế, cầm bóng đúng cách.',
        'Chạy đà — tăng tốc (nếu có).',
        'Ra sức cuối — pha quyết định: vung tay ném.',
        'Giữ thăng bằng — bước đệm chân, không vượt vạch giới hạn.',
      ] },
      { h: 'Nguyên lý truyền lực toàn thân' },
      { p: 'Đây là điều quan trọng nhất: lực ném KHÔNG chỉ từ tay. Nó truyền theo CHUỖI từ dưới lên: chân đạp đất → hông xoay → thân vặn → vai đẩy → cánh tay vung → cổ tay vẩy → ngón tay bật. Mỗi mắt xích thêm lực, làm bóng đi xa hơn rất nhiều so với chỉ "vung tay".' },
      { h: 'Tư thế ra sức cuối (đứng tại chỗ ném)' },
      { ul: [
        'Chân nghịch (trái với tay ném) đặt TRƯỚC.',
        'Chân thuận đặt SAU, làm trụ đạp.',
        'Thân hơi vặn về sau, tay cầm bóng đưa ra sau – cao.',
        'Khi ném: đạp chân sau, xoay hông – thân, vung tay ra trước qua đầu, vẩy cổ tay.',
      ] },
      { h: 'Góc ném tối ưu' },
      { p: 'Theo vật lý, góc ném ~45° so với mặt đất cho tầm xa lớn nhất khi sức cản không khí không đáng kể. Thực tế với bóng nhỏ, góc tối ưu khoảng 40°–45°.' },
      { h: 'Kết thúc' },
      { p: 'Sau khi vung tay ném xong, em bước đệm chân sau ra trước để giữ thăng bằng, KHÔNG được vượt qua vạch giới hạn. Vượt vạch = phạm quy.' },
      { note: 'Lỗi phổ biến: chỉ dùng cổ tay/cánh tay; ngã người ra sau khi ném; góc ném quá ngang (bóng rơi sớm) hoặc quá cao (bóng đi không xa).' },
    ],
    examples: [
      { q: 'Bạn ném chỉ vẩy cổ tay, bóng đi rất gần. Em hướng dẫn lại?', a: 'Em nói: lực ném đến từ TOÀN THÂN, không phải chỉ cổ tay. Bảo bạn đặt chân nghịch trước, chân thuận sau làm trụ. Khi ném: đạp chân sau → xoay hông → vặn thân → vung tay → vẩy cổ tay. Tập thử vài lần, bóng sẽ đi xa gấp 2-3 lần.' },
      { q: 'Bạn ném bóng theo góc gần như thẳng đứng (~80°). Bóng có đi xa không?', a: 'Không. Bóng sẽ bay cao nhưng rơi gần ngay trước mặt. Góc ném tối ưu khoảng 40°–45° — đó là sự cân bằng giữa thành phần lực bay lên và thành phần lực bay về trước.' },
    ],
  },

  'S6GDTC-w16-quiz': {
    topic: 'Ném bóng — An toàn khi tập',
    intro: 'Ném là môn có nguy cơ va chạm cao. Vì vậy AN TOÀN phải đặt lên hàng đầu. Tuần này thầy/cô nhắc lại các quy tắc bắt buộc — các em phải thuộc lòng.',
    objectives: [
      'Nắm các quy tắc an toàn khi tập ném.',
      'Biết cách bố trí khu vực ném và nhặt bóng.',
      'Biết khởi động đúng các khớp trước khi ném.',
    ],
    theory: [
      { h: 'Quy tắc an toàn số 1' },
      { p: 'CHỈ ném khi phía trước trống — không có người, và CHỈ ném khi có hiệu lệnh của giáo viên. Tuyệt đối không ném tự do, không ném khi bạn đang nhặt bóng, không ném vào người.' },
      { h: 'Bố trí khu vực' },
      { ul: [
        'Khu ném: vạch giới hạn rõ ràng, phía trước thoáng ít nhất 30–40m.',
        'Khu nhặt bóng: chỉ vào khi có hiệu lệnh "Nhặt bóng!".',
        'Khu quan sát: PHÍA SAU hoặc bên cạnh khu ném, KHÔNG đứng ngang/trước người ném.',
      ] },
      { h: 'Quy trình tập theo nhóm' },
      { ul: [
        'Cả nhóm ném xong loạt 1 → giáo viên hô "Dừng!" → kiểm tra an toàn → hô "Nhặt bóng!".',
        'Tất cả vào nhặt — KHÔNG ai được ném tiếp.',
        'Nhặt xong về vị trí → giáo viên hô "Ném!" — loạt mới.',
      ] },
      { h: 'Khởi động trước khi ném' },
      { p: 'Vai – khuỷu – cổ tay – hông là các khớp chịu tải lớn khi ném. Phải khởi động kỹ: xoay vai trước/sau, xoay khuỷu, xoay cổ tay, xoay hông. Có thể ném nhẹ vài lần để làm nóng trước khi ném mạnh.' },
      { h: 'Trang phục' },
      { ul: [
        'Quần áo thể dục gọn gàng.',
        'Giày phù hợp, không đi dép tông.',
        'Tháo trang sức sắc nhọn (đồng hồ kim loại có gai, vòng…).',
      ] },
      { note: 'Khi bị đau vai/khuỷu sau khi ném: dừng tập, báo giáo viên, chườm lạnh nếu sưng. Không tự kéo căng tay mạnh, không xoa dầu nóng.' },
    ],
    examples: [
      { q: 'Trong giờ ném, bạn A đang nhặt bóng thì bạn B định ném tiếp. Em xử lý?', a: 'Em ngăn lại ngay: "Dừng, chưa có lệnh ném!". Trong khi có người trong khu nhặt bóng, TUYỆT ĐỐI không ai được ném. Báo giáo viên nếu bạn cố tình. Quy tắc này không đùa được — bóng trúng đầu có thể chấn thương nặng.' },
      { q: 'Em muốn xem bạn ném có chuẩn không. Em đứng ở đâu?', a: 'Em đứng ở PHÍA SAU hoặc BÊN CẠNH bạn, ở khoảng cách an toàn (cách bạn ~2m, không trong tầm vung tay). KHÔNG đứng trước mặt bạn hoặc trong vùng rơi bóng. Vị trí phía sau cũng dễ quan sát kỹ thuật chân – hông – vai – tay.' },
    ],
  },

  'S6GDTC-w17-quiz': {
    topic: 'Trò chơi vận động dân gian (kéo co, mèo đuổi chuột)',
    intro: 'Trò chơi dân gian vừa rèn thể lực, sự nhanh nhẹn, vừa gìn giữ văn hoá truyền thống Việt Nam. Hôm nay chúng ta tìm hiểu kéo co và mèo đuổi chuột.',
    objectives: [
      'Hiểu cách chơi kéo co và mèo đuổi chuột.',
      'Nắm quy tắc an toàn khi chơi.',
      'Phát triển tinh thần đồng đội và bảo tồn văn hoá.',
    ],
    theory: [
      { h: 'KÉO CO — sức mạnh tập thể' },
      { p: 'Trò chơi dân gian phổ biến nhất Việt Nam, đã được UNESCO công nhận là Di sản văn hoá phi vật thể (cùng Hàn Quốc, Campuchia, Philippines). Hai đội đối diện qua vạch giữa, mỗi đội nắm một đầu dây. Giữa dây buộc khăn đỏ làm dấu hiệu. Có còi/hiệu lệnh, hai đội cùng kéo. Đội kéo được khăn qua mốc bên mình = thắng.' },
      { h: 'Kỹ thuật kéo co' },
      { ul: [
        'Đứng so le hai chân, chân thuận trước.',
        'Người hơi ngả về sau, lưng thẳng (không gập lưng).',
        'Hai tay nắm dây chắc, cùi tay hơi gập.',
        'Đạp chân xuống sàn lấy lực, dồn trọng tâm về sau.',
        'Theo nhịp hô "Một… hai… ba… kéo!" của đội trưởng.',
      ] },
      { h: 'An toàn khi kéo co' },
      { ul: [
        'TUYỆT ĐỐI không quấn dây quanh tay/cổ — nếu thua kéo bị tuột rất nguy hiểm.',
        'Mang giày có bám sân, không đi dép.',
        'Sân khô ráo, không trơn ướt.',
        'Khi giáo viên hô "Buông!" — tất cả buông dây cùng lúc, không kéo lén.',
      ] },
      { h: 'MÈO ĐUỔI CHUỘT' },
      { p: 'Các bạn xếp thành vòng tròn, nắm tay nhau, giơ cao. Một bạn đóng "mèo", một bạn đóng "chuột". Chuột chạy luồn qua các "khe" (giữa hai bạn nắm tay), mèo đuổi theo cùng đường. Khi bị bắt, đổi vai.' },
      { ul: [
        'Rèn: nhanh nhẹn, khéo léo, phản xạ.',
        'Tinh thần: tập thể, vui tươi, gắn kết.',
        'An toàn: không chạy quá nhanh va bạn, không đẩy nhau, sân rộng đủ chỗ.',
      ] },
      { note: 'Trò chơi dân gian vừa khoẻ thân, vừa giữ hồn dân tộc. Đừng để nó mai một — hãy chơi và truyền lại cho các em nhỏ hơn.' },
    ],
    examples: [
      { q: 'Đội kéo co của em định cho bạn khoẻ nhất đứng cuối "cột chân" bằng cách quấn dây quanh người. Có nên?', a: 'TUYỆT ĐỐI không. Quấn dây vào người/cổ/tay rất nguy hiểm — nếu thua kéo, bị giật mạnh sẽ trầy xước hoặc nghẹn cổ. Cách đúng: bạn khoẻ đứng CUỐI, hai chân đạp đất chắc, hai tay nắm dây bằng tay không (có thể quấn 1 vòng nhẹ qua khuỷu nếu được cho phép, nhưng không quanh người).' },
      { q: 'Chơi mèo đuổi chuột, "chuột" cố tình chạy ra ngoài vòng tròn. Đúng luật không?', a: 'Sai luật. Chuột phải chạy luồn QUA các khe giữa các bạn nắm tay — đó là phần thú vị của trò chơi. Chạy ra ngoài vòng = phạm luật, mèo thắng trận đó. Mời chuột mới vào chơi.' },
    ],
  },

  'S6GDTC-w18-quiz': {
    topic: 'Ôn tập học kì 1',
    intro: 'Tuần cuối học kì 1, chúng ta cùng ôn lại những kiến thức cốt lõi đã học: lợi ích TDTT, khởi động – hồi tĩnh, đội hình đội ngũ, bài thể dục, chạy ngắn, chạy bền, nhảy xa, bật cao, ném bóng.',
    objectives: [
      'Hệ thống hoá các kiến thức nền GDTC lớp 6 học kì 1.',
      'Nhớ các quy chuẩn kỹ thuật cơ bản.',
      'Vận dụng nguyên tắc tập luyện an toàn, vừa sức.',
    ],
    theory: [
      { h: 'Nguyên tắc tập luyện' },
      { ul: [
        'Vừa sức và tăng dần — không tập quá khả năng.',
        'Đều đặn — tốt hơn tập dồn rồi nghỉ dài.',
        'Toàn diện — phối hợp nhiều môn, nhiều nhóm cơ.',
        'Hệ thống — có khởi động, có hồi tĩnh, có nghỉ phục hồi.',
      ] },
      { h: 'Khởi động – Hồi tĩnh' },
      { p: 'Khởi động: từ chung đến chuyên môn, từ nhẹ đến mạnh. Hồi tĩnh: từ mạnh về nhẹ, đi bộ thở sâu, căng giãn cơ. Tuyệt đối không bỏ hai phần này.' },
      { h: 'Đội hình đội ngũ' },
      { ul: [
        'Khẩu lệnh = dự lệnh + động lệnh.',
        'Tập hợp nhanh, dóng hàng thẳng, đứng nghiêm im lặng.',
        'Quay tại chỗ: trên gót chân thuận với hướng quay.',
      ] },
      { h: 'Chạy ngắn — chạy bền' },
      { ul: [
        'Chạy ngắn: xuất phát cao "Vào chỗ – Sẵn sàng – Chạy"; chạy nửa trước bàn chân; đánh đích.',
        'Chạy bền: phân phối sức đều, thở theo nhịp chân, vượt qua "cực điểm".',
      ] },
      { h: 'Nhảy xa — Bật cao — Ném bóng' },
      { ul: [
        'Nhảy xa 4 giai đoạn; giậm 1 chân; tiếp đất 2 gót, không ngã ngửa; đo tới dấu gần vạch nhất.',
        'Bật cao: phối hợp tay – chân, tiếp đất khuỵu gối hoãn xung.',
        'Ném bóng: truyền lực toàn thân chân – hông – thân – vai – tay – cổ tay; góc ~45°.',
      ] },
      { h: 'An toàn' },
      { p: 'Khởi động kỹ — mang giày phù hợp — sân an toàn — tuân thủ hiệu lệnh — báo ngay khi có dấu hiệu chấn thương. Quy tắc R-I-C-E cho chấn thương cấp.' },
      { note: 'Học kì 2 chúng ta sẽ chuyển sang thể thao tự chọn (bóng đá, bóng rổ, cầu lông, bóng chuyền) và sâu hơn về dinh dưỡng – nghỉ ngơi. Các em ôn tập tốt nhé!' },
    ],
    examples: [
      { q: 'Em ôn tập kiểm tra kỹ thuật chạy ngắn 60m. Thầy/cô đánh giá những gì?', a: 'Bốn pha: (1) Tư thế "Vào chỗ" — chân thuận trước, mũi cách vạch ~20cm. (2) "Sẵn sàng" — hạ thấp trọng tâm, đổ thân trước, tay so le. (3) Chạy giữa quãng — nửa trước bàn chân, tay đánh trước-sau ~90°. (4) Về đích — đánh đích bằng ngực/vai, không giảm tốc trước vạch.' },
      { q: 'Bạn em nói "Khởi động mất thời gian, tôi tập luôn cho khoẻ". Em phản biện?', a: 'Khởi động KHÔNG mất thời gian — nó GIÚP buổi tập hiệu quả và an toàn. Tập ngay không khởi động: cơ chưa nóng → dễ căng cơ, bong gân; tim chưa quen nhịp → mệt nhanh hơn. 10 phút khởi động có thể tránh được 2 tuần nghỉ vì chấn thương.' },
    ],
  },

  // ──────────────── HK2 ────────────────
  'S6GDTC-w19-quiz': {
    topic: 'Bóng đá — Chuyền bóng cơ bản',
    intro: 'Bóng đá là môn vua. Học kì 2 chúng ta học các môn thể thao tự chọn, bắt đầu với bóng đá. Tuần này: chuyền bóng — kỹ thuật nền tảng của mọi pha bóng.',
    objectives: [
      'Phân biệt chuyền ngắn và chuyền dài.',
      'Thực hiện đúng kỹ thuật chuyền bằng lòng trong bàn chân.',
      'Biết cách đỡ bóng êm khi nhận chuyền.',
    ],
    theory: [
      { h: 'Hai kiểu chuyền cơ bản' },
      { ul: [
        'Chuyền NGẮN: bằng LÒNG TRONG bàn chân — chính xác, dễ kiểm soát.',
        'Chuyền DÀI: bằng MU GIỮA bàn chân — lực mạnh, bóng bay xa.',
      ] },
      { h: 'Kỹ thuật chuyền bằng lòng trong' },
      { ul: [
        'Chân TRỤ đặt cạnh bóng, mũi chân trụ chỉ hướng định chuyền.',
        'Chân CHUYỀN xoay ra ngoài 90°, KHOÁ CỔ CHÂN chắc.',
        'Tiếp xúc bóng bằng phần lòng trong (giữa mắt cá trong và gốc ngón cái).',
        'Đánh vào TÂM BÓNG để bóng đi thẳng.',
      ] },
      { h: 'Mắt và đầu' },
      { p: 'Khi tiếp xúc bóng, MẮT nhìn xuống bóng để đảm bảo chạm đúng. Sau khi bóng đi, ngẩng đầu quan sát ngay. Trước khi chuyền, phải QUAN SÁT vị trí đồng đội và đối phương — chuyền có ý đồ chứ không chuyền đại.' },
      { h: 'Đỡ bóng — đối ngẫu của chuyền' },
      { p: 'Khi bóng đến, em KHÔNG được cứng bàn chân (bóng sẽ nảy xa). Thay vào đó: khi bóng chạm chân, em hơi rút chân về sau — kiểu "hoãn xung" — để giảm tốc bóng, ôm bóng vào sát chân, sẵn sàng đi tiếp.' },
      { note: 'Chuyền ngắn nhiều bằng lòng trong là nền tảng của lối chơi tiki-taka. Tập kỹ tuần này, các kỹ năng sau sẽ dễ hơn nhiều.' },
    ],
    examples: [
      { q: 'Bạn chuyền lòng trong nhưng bóng cứ đi chéo. Em tìm lỗi giúp bạn?', a: 'Có 2 khả năng: (1) Mũi chân trụ KHÔNG chỉ đúng hướng chuyền — bóng sẽ đi theo hướng chân trụ. (2) Chạm bóng lệch — không vào tâm bóng. Em bảo bạn kiểm tra chân trụ trước, rồi đến điểm chạm bóng. Tập chuyền tường 50 lần/ngày sẽ chuẩn dần.' },
      { q: 'Bóng đến với tốc độ mạnh. Em đỡ thế nào?', a: 'Em đưa lòng bàn chân (hoặc lòng trong) ra đón bóng. Ngay khi bóng chạm chân, em hơi RÚT chân về sau theo hướng bóng đến — như khi tay bắt quả bóng tennis. Bóng giảm tốc êm và nằm gần chân, em đẩy bóng đi tiếp dễ dàng.' },
    ],
  },

  'S6GDTC-w20-quiz': {
    topic: 'Bóng đá — Dẫn bóng',
    intro: 'Dẫn bóng là kỹ năng cá nhân quan trọng — giúp em đột phá, đi qua người, tạo cơ hội. Nhưng dẫn bóng tốt không phải là "đẩy bóng đi xa rồi chạy theo" — đó là kiểm soát bóng sát chân.',
    objectives: [
      'Nắm nguyên tắc dẫn bóng kiểm soát.',
      'Phân biệt dẫn bóng tốc độ thấp và tốc độ cao.',
      'Tập cả chân thuận và chân không thuận.',
    ],
    theory: [
      { h: 'Nguyên tắc dẫn bóng' },
      { ul: [
        'Chạm bóng NHẸ — không đẩy bóng đi xa.',
        'Bóng trong tầm 1 BƯỚC CHẠY — đủ gần để kiểm soát, đủ xa để di chuyển.',
        'Chạm bóng LIÊN TỤC — không bỏ bóng quá lâu.',
      ] },
      { h: 'Dẫn tốc độ THẤP' },
      { p: 'Khi đi chậm hoặc qua người gần, dùng MU TRONG hoặc LÒNG TRONG. Chạm bóng nhẹ ở mỗi bước. Bóng luôn trong tầm tay (à không, tầm chân) — sẵn sàng đổi hướng, tăng tốc, hoặc che bóng.' },
      { h: 'Dẫn tốc độ CAO' },
      { p: 'Khi sút sang vùng trống, dùng MU CHÍNH DIỆN hoặc MU NGOÀI. Đẩy bóng đi xa hơn (3–5m) rồi chạy theo. Phù hợp khi không có đối phương gần.' },
      { h: 'Đối mặt đối phương' },
      { ul: [
        'Đổi tốc độ đột ngột (chậm rồi bật nhanh, hoặc ngược lại).',
        'Đổi hướng bằng lòng trong/lòng ngoài.',
        'Dùng THÂN che bóng — đưa thân giữa bóng và đối phương.',
      ] },
      { h: 'Mắt khi dẫn bóng' },
      { p: 'Đừng chỉ nhìn xuống chân — em sẽ không biết đồng đội ở đâu, đối phương ở đâu. Luân phiên: liếc xuống bóng → ngẩng quan sát → liếc xuống → ngẩng. Người chơi giỏi gần như không cần nhìn bóng.' },
      { note: 'Tập với CẢ HAI chân. Cầu thủ chỉ giỏi một chân là cầu thủ "thọt" — đối phương biết bạn không thể đi hướng bên kia.' },
    ],
    examples: [
      { q: 'Bạn dẫn bóng nhưng cứ đẩy bóng xa rồi chạy đuổi. Em góp ý?', a: 'Bạn đang chạy theo bóng chứ không phải dẫn bóng — sẽ dễ mất bóng cho đối phương. Đúng: chạm bóng nhẹ ở mỗi bước, bóng luôn trong tầm 1 bước với. Bảo bạn tập đi bộ dẫn bóng quanh cọc trước, sau đó tăng tốc dần khi đã quen kiểm soát.' },
      { q: 'Em đối mặt một hậu vệ. Em làm gì để qua người?', a: 'Em đổi tốc độ: giả vờ chậm lại, đối phương cũng chậm theo, rồi em BẬT NHANH sang một bên bằng cú đẩy bóng bằng lòng trong/ngoài. Đồng thời dùng thân che bóng khỏi đối phương. Nếu đối phương lao tới, em có thể "đảo người" (giả qua hướng này rồi đột ngột qua hướng kia).' },
    ],
  },

  'S6GDTC-w21-quiz': {
    topic: 'Bóng đá — Sút bóng',
    intro: 'Sút bóng — khoảnh khắc bùng nổ của bóng đá. Sút mạnh, sút chính xác hay sút sệt — mỗi tình huống một kỹ thuật. Hôm nay học sút có lực — cú sút phổ biến nhất.',
    objectives: [
      'Thực hiện đúng kỹ thuật sút bằng mu chính diện.',
      'Đặt chân trụ chính xác để định hướng sút.',
      'Phối hợp các pha tiếp xúc bóng để sút có lực và chính xác.',
    ],
    theory: [
      { h: 'Sút có lực — dùng mu chính diện' },
      { p: 'Mu chính diện = mu giữa bàn chân, phần trên dọc theo xương bàn. Đây là phần CỨNG nhất của bàn chân, cho lực sút mạnh nhất.' },
      { h: 'Đặt chân trụ — yếu tố then chốt' },
      { ul: [
        'Chân trụ đặt NGAY CẠNH bóng, cách bóng ~10–15cm bên hông.',
        'Mũi chân trụ CHỈ HƯỚNG định sút — đây là "kim chỉ nam" cho hướng đi của bóng.',
        'Đầu gối chân trụ hơi gập, trọng tâm dồn vừa phải.',
      ] },
      { h: 'Vung chân — pha tiếp xúc' },
      { ul: [
        'Vung cẳng chân từ sau ra trước theo đường thẳng.',
        'Mũi chân DUỖI THẲNG, KHOÁ căng mu.',
        'Tiếp xúc trọn vào TÂM BÓNG bằng mu chính diện.',
        'Mắt nhìn bóng tại điểm chạm, rồi mới ngẩng.',
      ] },
      { h: 'Sau khi sút — vung tiếp' },
      { p: 'Chân sút TIẾP TỤC VUNG theo hướng sút sau khi đã chạm bóng — gọi là "đường chuyển động tiếp" (follow-through). Đừng dừng chân ngay tại điểm chạm — sẽ mất lực và dễ chấn thương.' },
      { h: 'Điều chỉnh độ cao bóng' },
      { ul: [
        'Sút SỆT: chạm tâm bóng hoặc cao hơn tâm, người hơi đổ trên bóng.',
        'Sút BỔNG: chạm dưới tâm bóng, người hơi ngả về sau.',
        'Sút BÌNH THƯỜNG (nửa bổng): chạm tâm bóng.',
      ] },
      { note: 'An toàn: KHÔNG sút khi có người đứng trước mặt ở cự ly gần và không có hiệu lệnh. Trong giờ học, sút theo hiệu lệnh giáo viên vào mục tiêu đã chỉ định.' },
    ],
    examples: [
      { q: 'Bạn sút bóng nhưng cứ bay lên trời cao. Em chỉ lỗi?', a: 'Bạn đang chạm DƯỚI tâm bóng (do người ngả ra sau hoặc đặt chân trụ ngang/sau bóng). Sửa: đặt chân trụ NGAY CẠNH bóng (không sau), người HƠI ĐỔ TRÊN BÓNG khi sút, chạm tâm bóng. Sẽ ra bóng sệt – nửa bổng có lực.' },
      { q: 'Bạn sút bóng bay sang phải hẳn so với hướng định. Vì sao?', a: 'Hai khả năng: (1) Mũi chân trụ chỉ sang phải chứ không chỉ về mục tiêu — bóng sẽ đi theo hướng mũi chân trụ. (2) Chạm bóng lệch sang phải (chạm bằng phần ngoài mu chân). Sửa: đặt mũi chân trụ chỉ về mục tiêu trước, sau đó vung chân thẳng theo hướng đó.' },
    ],
  },

  'S6GDTC-w22-quiz': {
    topic: 'Bóng đá — Luật cơ bản và tinh thần fair-play',
    intro: 'Biết kỹ thuật chưa đủ — phải biết LUẬT mới chơi đúng và đẹp. Quan trọng hơn cả: tinh thần FAIR-PLAY, chơi đẹp tôn trọng đối thủ.',
    objectives: [
      'Nắm các luật cơ bản: số cầu thủ, vai trò thủ môn, lỗi penalty, ném biên.',
      'Hiểu thế nào là việt vị (giới thiệu cơ bản).',
      'Thấm tinh thần fair-play trong thi đấu.',
    ],
    theory: [
      { h: 'Số cầu thủ và vai trò' },
      { ul: [
        'Bóng đá tiêu chuẩn FIFA: 11 người/đội (kể cả thủ môn).',
        'Bóng đá futsal: 5 người/đội.',
        'Sân trường thường chơi 5-7 người tuỳ kích thước sân.',
        'CHỈ THỦ MÔN được dùng tay chơi bóng — và CHỈ trong vùng cấm địa đội mình.',
      ] },
      { h: 'Một số tình huống và luật' },
      { ul: [
        'Bóng ra biên DỌC: đội đối phương ném biên (hai tay từ sau qua đầu, hai chân chạm đất).',
        'Bóng ra biên NGANG do đội tấn công đẩy ra: thủ môn đá phát bóng.',
        'Bóng ra biên NGANG do đội phòng ngự đẩy ra: đội tấn công đá phạt góc.',
        'Phạm lỗi của hậu vệ trong vòng cấm địa đội mình: PENALTY (11m).',
      ] },
      { h: 'Việt vị — luật khó nhất' },
      { p: 'Khái niệm cơ bản: cầu thủ tấn công ở vị trí gần khung thành đối phương HƠN cả bóng VÀ HƠN cầu thủ phòng ngự áp chót, vào thời điểm đồng đội chuyền bóng cho mình — thì bị việt vị. Việt vị không phải lỗi, chỉ làm pha bóng vô hiệu, đối phương đá phạt gián tiếp. Có nhiều ngoại lệ — các em học sâu hơn ở lớp trên.' },
      { h: 'Thẻ phạt' },
      { ul: [
        'Thẻ VÀNG: cảnh cáo (chơi xấu, kéo áo, phản ứng…).',
        'Thẻ ĐỎ: truất quyền thi đấu (lỗi nặng, hai thẻ vàng cùng trận, hành vi bạo lực).',
      ] },
      { h: 'TINH THẦN FAIR-PLAY' },
      { p: 'Đây là phần quan trọng NHẤT của bóng đá học đường. Fair-play nghĩa là: thi đấu trung thực, tôn trọng đối thủ, tôn trọng trọng tài, chấp nhận thắng thua, giúp đỡ bạn ngã, không bao biện đổ lỗi. Một đội thua nhưng chơi đẹp vẫn được tôn trọng hơn đội thắng mà chơi xấu.' },
      { note: 'Khi đồng đội mắc lỗi: động viên, khích lệ, cùng sửa sai. Không trách mắng, không bỏ trận, không cười nhạo.' },
    ],
    examples: [
      { q: 'Em đá vào chân đối phương trong vòng cấm — bóng không phải mục tiêu. Hậu quả?', a: 'Đó là lỗi xoạc bóng/đạp chân trong vòng cấm — trọng tài thổi PENALTY cho đội đối phương. Đội em đối mặt với cú đá 11m, gần như chắc chắn thủng lưới. Bài học: trong vòng cấm phải đặc biệt cẩn trọng, không vào bóng liều lĩnh.' },
      { q: 'Đối thủ ngã đau trên sân, em đang cầm bóng tấn công. Em làm gì theo tinh thần fair-play?', a: 'Em đá bóng RA BIÊN để dừng trận. Sau khi đối thủ được chăm sóc, trận đấu tiếp tục bằng quả ném biên — và đội bạn nên trả bóng lại cho đội em (đó là truyền thống fair-play quốc tế). Hành động này tôn trọng đối thủ và sức khoẻ con người trên thắng thua.' },
    ],
  },

  'S6GDTC-w23-quiz': {
    topic: 'Bóng rổ — Dẫn bóng và chuyền',
    intro: 'Bóng rổ là môn nhanh, cần khéo léo. Khác với bóng đá, bóng rổ dùng TAY và bóng phải LUÔN nảy xuống sàn khi di chuyển — đó là dribble.',
    objectives: [
      'Nắm kỹ thuật dribble (đập bóng) cơ bản.',
      'Thực hiện chuyền bóng bằng hai tay trước ngực.',
      'Hiểu luật cầm bóng — chạy bộ — hai tiếng.',
    ],
    theory: [
      { h: 'Dẫn bóng (dribble)' },
      { p: 'Trong bóng rổ, khi di chuyển có bóng, em PHẢI đập bóng xuống sàn liên tục bằng MỘT TAY. Không đập = phạm luật "chạy bộ" (travelling). Không dùng hai tay cùng lúc đập = phạm luật "hai tiếng" (double dribble).' },
      { h: 'Kỹ thuật dribble đúng' },
      { ul: [
        'Đập bóng bằng đầu ngón và phần đệm ngón (KHÔNG dùng lòng bàn tay).',
        'Bóng nảy ngang hông — quá cao thì đối phương cướp dễ, quá thấp khó kiểm soát.',
        'Thân hơi gập, đầu gối chùng — tư thế thấp, sẵn sàng đổi hướng.',
        'Mắt ngẩng quan sát — KHÔNG nhìn xuống bóng.',
      ] },
      { h: 'Chuyền bóng — Chest pass (hai tay trước ngực)' },
      { ul: [
        'Cầm bóng bằng hai tay, ngón tay xoè ôm bóng, hai ngón cái sau bóng tạo hình chữ W.',
        'Bóng giữ ngang ngực.',
        'Đẩy bóng từ ngực ra trước, duỗi tay, lật ngón cái xuống.',
        'Bước chân trước theo lực đẩy.',
      ] },
      { h: 'Bounce pass (chuyền nảy đất)' },
      { p: 'Cùng kỹ thuật chest pass nhưng đẩy bóng nảy xuống sàn 1 lần trước khi tới đồng đội. Điểm nảy ở khoảng 2/3 đường đến đồng đội. Dùng khi có đối phương đứng giữa em và đồng đội.' },
      { h: 'Luật cơ bản phải nhớ' },
      { ul: [
        'CHẠY BỘ: cầm bóng đi quá 1.5 bước mà không đập = lỗi.',
        'HAI TIẾNG: đã dừng đập bóng (cầm bằng hai tay) thì KHÔNG được đập lại.',
        'CHẠM BÓNG ngoài biên: bóng cho đội đối phương.',
      ] },
      { note: 'Mắt phải LUÔN ngẩng quan sát — đó là điểm khác lớn nhất giữa người mới và người chơi giỏi.' },
    ],
    examples: [
      { q: 'Bạn cầm bóng chạy 3 bước rồi mới đập. Hậu quả?', a: 'Trọng tài thổi lỗi "CHẠY BỘ" (travelling), bóng chuyển cho đội đối phương. Luật: tối đa 1.5 bước (kỹ thuật bước 1-2 khi sắp ném rổ là ngoại lệ). Khi đi bộ/chạy phải đập bóng liên tục.' },
      { q: 'Em chuyền cho đồng đội cách 5m nhưng có đối thủ đứng giữa giơ tay cản. Em dùng kiểu chuyền gì?', a: 'Em dùng BOUNCE PASS (chuyền nảy đất). Bóng nảy xuống sàn ở khoảng 2/3 đường, đi dưới tầm tay đối thủ. Đồng đội bắt bóng ngang hông. Không nên chest pass vì đối thủ sẽ cắt bóng dễ.' },
    ],
  },

  'S6GDTC-w24-quiz': {
    topic: 'Bóng rổ — Ném rổ cơ bản',
    intro: 'Ném rổ là pha quyết định ghi điểm. Kỹ thuật chuẩn giúp em ném ổn định, ít trượt — chứ không phải mạnh tay là vào rổ.',
    objectives: [
      'Thực hiện đúng tư thế cầm bóng và ném rổ.',
      'Hiểu vai trò của BEEF — tư thế chuẩn ném rổ.',
      'Biết kỹ thuật lay-up (ném rổ sau bước 1-2).',
    ],
    theory: [
      { h: 'Cầm bóng để ném' },
      { p: 'Bóng đặt trên đầu ngón và phần đệm ngón của TAY THUẬN (tay ném). TAY KHÔNG THUẬN đỡ bên cạnh bóng để giữ thăng bằng — KHÔNG đẩy bóng. Hai ngón cái tạo hình chữ T.' },
      { h: 'BEEF — quy tắc 4 chữ vàng' },
      { ul: [
        'B (Balance): thăng bằng — hai chân rộng bằng vai, đầu gối chùng, mắt nhìn rổ.',
        'E (Elbow): khuỷu tay ném thẳng dưới bóng (không vẹo ra ngoài).',
        'E (Eyes): mắt nhìn vành trước rổ (điểm sẽ vào lưới).',
        'F (Follow-through): vẩy cổ tay sau khi ném, ngón tay chỉ vào rổ — như "thò tay vào hũ kẹo".',
      ] },
      { h: 'Pha ném — chuỗi truyền lực' },
      { p: 'Lực ném đến từ CHÂN lên, không phải chỉ từ tay: đầu gối duỗi → hông duỗi → vai vươn → tay đẩy → cổ tay vẩy. Bóng rời tay bằng đầu ngón, xoay ngược (backspin) đẹp.' },
      { h: 'Lay-up — ném rổ từ gần' },
      { p: 'Kỹ thuật cơ bản nhất để ghi điểm. Khi đến gần rổ:' },
      { ul: [
        'Bước 1: chân thuận (ví dụ chân phải) bước dài, tay phải cầm bóng dâng lên.',
        'Bước 2: chân không thuận (chân trái) đạp đất bật lên.',
        'Trên không: tay phải đưa bóng lên cao, đặt bóng nhẹ vào bảng lùi (chấm ô vuông trên bảng).',
        'Bóng nảy nhẹ vào rổ.',
      ] },
      { note: 'Tập ném từ gần — vạch phạt — xa dần. ĐỪNG vội ném 3 điểm khi chưa chuẩn kỹ thuật cơ bản.' },
    ],
    examples: [
      { q: 'Bạn ném rổ nhưng bóng cứ lệch sang trái. Em chỉ lỗi?', a: 'Có thể khuỷu tay ném của bạn vẹo ra NGOÀI (sang trái với người thuận tay phải). Đúng BEEF: khuỷu thẳng dưới bóng, hướng về rổ. Sửa: bảo bạn đứng trước gương, kiểm tra khuỷu thẳng dưới bóng trước khi ném.' },
      { q: 'Em lay-up bằng chân nào nếu thuận tay phải?', a: 'Em dùng tay PHẢI cầm bóng → bước 1 chân PHẢI → bước 2 chân TRÁI đạp bật → trên không tay phải đặt bóng vào bảng. Tóm tắt: "Tay phải – Phải – Trái – Đặt bóng". Tập đi bộ chuỗi này 20 lần trước khi tăng tốc.' },
    ],
  },

  'S6GDTC-w25-quiz': {
    topic: 'Cầu lông — Cách cầm vợt và giao cầu',
    intro: 'Cầu lông là môn rất phổ biến ở Việt Nam — sân nhỏ, dụng cụ đơn giản, hai bạn cũng chơi được. Hôm nay học hai kỹ năng nền: cầm vợt và giao cầu.',
    objectives: [
      'Cầm vợt đúng kiểu thuận tay (forehand) và trái tay (backhand).',
      'Thực hiện giao cầu thấp tay đúng luật.',
      'Hiểu các luật cơ bản về giao cầu.',
    ],
    theory: [
      { h: 'Cầm vợt — kiểu BẮT TAY' },
      { p: 'Tưởng tượng em đang bắt tay với cán vợt: ngón cái đặt thoải mái trên mặt rộng của cán, các ngón khác ôm quanh. Đây là cách cầm thuận tay (forehand) — cú đánh bên thuận. Cán vợt vừa khít trong lòng bàn tay, không quá chặt.' },
      { h: 'Trái tay (backhand)' },
      { p: 'Khi cầu bay sang bên không thuận, em xoay vợt nhẹ trong tay: ngón cái đặt LÊN MẶT PHẲNG của cán (cạnh rộng phía sau), các ngón khác ôm tự nhiên. Ngón cái đẩy ra giúp tạo lực backhand.' },
      { h: 'Giao cầu thấp tay' },
      { ul: [
        'Đứng trong ô giao cầu, hai chân vững, chân không thuận trước.',
        'Tay không thuận cầm cầu ở phần đầu lông (KHÔNG cầm thân cầu).',
        'Tay thuận cầm vợt, đưa ra phía sau.',
        'Buông cầu, vợt vung từ dưới lên trước đánh cầu.',
        'Điểm tiếp xúc PHẢI THẤP HƠN THẮT LƯNG (luật cầu lông).',
      ] },
      { h: 'Luật giao cầu cơ bản' },
      { ul: [
        'Điểm chạm cầu phải dưới thắt lưng (1.15m từ mặt sân).',
        'Hai chân (cả người giao và người nhận) phải có một phần TIẾP đất, không bước/nhảy.',
        'Vợt chạm cầu phải có thân vợt CHỈ XUỐNG dưới điểm cầm (giao thấp tay).',
        'Giao cầu vào ô CHÉO đối diện trên sân đối thủ.',
      ] },
      { note: 'Điểm số chẵn → giao từ ô bên phải. Điểm số lẻ → giao từ ô bên trái. Mẹo nhớ: "Chẵn – phải, Lẻ – trái".' },
    ],
    examples: [
      { q: 'Bạn giao cầu nhưng vợt chạm cầu ở cao trên vai. Có hợp lệ không?', a: 'KHÔNG hợp lệ. Luật cầu lông quy định điểm chạm cầu khi giao phải DƯỚI THẮT LƯNG (1.15m). Vợt chạm cầu ngang vai là phạm luật, mất điểm. Sửa: bảo bạn buông cầu sớm hơn, vung vợt từ thấp lên đánh cầu khi cầu vừa rơi ngang đùi.' },
      { q: 'Đội em đang 6 điểm, đến lượt em giao. Em đứng ở ô nào?', a: '6 là điểm CHẴN → em đứng ô bên PHẢI (nhìn từ vạch sau lưới về phía mình), giao chéo sang ô bên trái đối phương. Mẹo: "Chẵn – Phải, Lẻ – Trái".' },
    ],
  },

  'S6GDTC-w26-quiz': {
    topic: 'Cầu lông — Luật đánh đơn và đánh đôi',
    intro: 'Cầu lông có hai thể thức chính: đánh đơn (1-1) và đánh đôi (2-2). Luật sân và cách phối hợp khác nhau — các em phải nắm rõ.',
    objectives: [
      'Phân biệt sân đánh đơn và sân đánh đôi.',
      'Hiểu cách tính điểm rally point đến 21.',
      'Nắm nguyên tắc phối hợp khi đánh đôi.',
    ],
    theory: [
      { h: 'Sân đánh đơn vs đánh đôi' },
      { ul: [
        'ĐÁNH ĐƠN: dùng đường biên DỌC HẸP (đường trong) và đường biên NGANG SÂU (đường ngoài, cuối sân).',
        'ĐÁNH ĐÔI: dùng đường biên DỌC RỘNG (đường ngoài) và đường biên NGANG SÂU.',
        'Khi giao cầu đánh đôi: dùng đường ngang phía trong (đường ngắn) làm giới hạn sau ô giao cầu.',
      ] },
      { h: 'Tính điểm rally point' },
      { p: 'Hiện tại cầu lông tính theo "rally point" — MỖI điểm rally là một điểm cho người thắng pha đó, bất kể ai giao cầu. Một set chơi đến 21 điểm, hơn 2 điểm. Nếu hoà 20-20, chơi tiếp đến hơn 2 (tối đa 30). Trận thường 3 set, ai thắng 2 set trước thì thắng trận.' },
      { h: 'Quy tắc giao cầu trong set' },
      { ul: [
        'Ai vừa thắng pha trước thì được giao pha sau.',
        'Đổi sân sau mỗi set, và khi đội dẫn đạt 11 điểm trong set quyết định.',
      ] },
      { h: 'Đánh đôi — phối hợp đội' },
      { ul: [
        'Phối hợp trước – sau: một người lên lưới, một người ở sau (phổ biến khi tấn công).',
        'Phối hợp ngang: hai người chia trái – phải sân (phổ biến khi phòng thủ).',
        'Đổi vị trí linh hoạt: vừa đánh ra góc thì nhanh chóng đổi để bao quát sân.',
      ] },
      { h: 'Một số luật cần nhớ' },
      { ul: [
        'Cầu chạm lưới khi giao (let): trước đây giao lại, hiện tại vẫn tính (luật mới — kiểm tra với giáo viên).',
        'Cầu chạm vợt 2 lần: phạm luật.',
        'Vợt chạm lưới: phạm luật.',
        'Người chạm lưới hoặc bước qua đường giữa: phạm luật.',
      ] },
      { note: 'Cầu lông là môn nhanh — phản xạ và bước chân (footwork) quan trọng hơn sức mạnh. Tập di chuyển 4 góc sân là nền tảng.' },
    ],
    examples: [
      { q: 'Đánh đơn, em thấy cầu rơi giữa đường biên dọc rộng và đường biên dọc hẹp. Cầu trong hay ngoài?', a: 'Cầu NGOÀI sân đối với đánh đơn. Sân đánh đơn dùng đường biên dọc HẸP (trong). Vùng giữa hai đường dọc chỉ thuộc về sân đánh đôi. Vậy cầu ngoài, đối thủ được điểm.' },
      { q: 'Đánh đôi, đội em thắng pha có em đánh cuối. Ai giao pha sau?', a: 'Em (người vừa thắng pha) giao pha sau. Trong rally point, ai vừa thắng thì giao. Vị trí giao xác định bởi điểm số: nếu điểm chẵn, người vừa thắng đứng ô bên phải; lẻ — bên trái. Đồng đội đứng đối diện.' },
    ],
  },

  'S6GDTC-w27-quiz': {
    topic: 'Bóng chuyền — Chuyền cao tay (búng tay)',
    intro: 'Bóng chuyền có ba kỹ thuật nền: chuyền cao tay (búng), đệm bóng và đập. Hôm nay học búng — kỹ thuật chuyền chính xác cho đồng đội đập.',
    objectives: [
      'Thực hiện đúng tư thế tay khi búng bóng.',
      'Đỡ bóng cao bằng đầu ngón tay, không bằng lòng bàn tay.',
      'Phối hợp toàn thân — chân, hông, tay — khi búng.',
    ],
    theory: [
      { h: 'Búng bóng (chuyền cao tay)' },
      { p: 'Đây là kỹ thuật dùng cho bóng ĐẾN CAO — ngang đầu hoặc cao hơn. Dùng để chuyền bóng cho đồng đội đập (set ball), hoặc trả bóng nhẹ qua lưới.' },
      { h: 'Tư thế tay — quan trọng nhất' },
      { ul: [
        'Hai tay đưa lên trán, cao hơn đầu một chút.',
        'Hai bàn tay tạo HÌNH TAM GIÁC (hoặc hình trái tim) bằng hai ngón cái + hai ngón trỏ.',
        'Các ngón còn lại xoè ra ôm bóng.',
        'CHỈ ĐẦU NGÓN TAY chạm bóng — KHÔNG dùng lòng bàn tay.',
      ] },
      { h: 'Tư thế thân' },
      { ul: [
        'Hai chân rộng bằng vai, một chân hơi trước.',
        'Đầu gối CHÙNG, sẵn sàng đẩy lên.',
        'Thân thẳng, mắt nhìn bóng đến qua "khung" hai tay.',
      ] },
      { h: 'Pha búng — phối hợp toàn thân' },
      { ul: [
        'Khi bóng tới: đầu gối duỗi → hông duỗi → tay duỗi cùng lúc.',
        'Lực đẩy bóng đến từ CẢ THÂN, không chỉ tay.',
        'Tiếp xúc nhanh — bóng chỉ chạm tay khoảnh khắc rồi đi.',
        'Theo dõi (follow-through): tay duỗi thẳng hướng bóng đi.',
      ] },
      { h: 'Lỗi phổ biến' },
      { ul: [
        'Dùng lòng bàn tay → bóng "cầm" → lỗi "cầm bóng" (carrying).',
        'Tay không tạo tam giác → bóng bay lệch.',
        'Không phối hợp thân → bóng đi yếu hoặc không đủ cao.',
      ] },
      { note: 'Tập tự búng tại chỗ với bóng nhẹ 50 lần/ngày — đầu ngón tay sẽ quen cảm giác bóng.' },
    ],
    examples: [
      { q: 'Bạn búng bóng nhưng cứ bị thổi "cầm bóng". Vì sao?', a: 'Bạn dùng LÒNG BÀN TAY chạm bóng quá lâu — bóng "dính" tay = cầm bóng. Sửa: chỉ dùng ĐẦU NGÓN TAY, các ngón xoè ôm bóng, tiếp xúc CHỚP NHOÁNG rồi bóng đi ngay. Tập búng tại chỗ với bóng nhẹ, tập trung cảm giác đầu ngón.' },
      { q: 'Bóng đến cao trên đầu. Em búng cho đồng đội ở phía trước. Mô tả pha kỹ thuật.', a: 'Em di chuyển vào đúng vị trí dưới bóng, đầu gối chùng. Khi bóng đến, hai tay đưa lên trán tạo tam giác. Cùng lúc đầu gối – hông – tay duỗi đẩy bóng lên cao – ra trước theo hướng đồng đội. Tay duỗi thẳng follow-through theo hướng bóng đi.' },
    ],
  },

  'S6GDTC-w28-quiz': {
    topic: 'Bóng chuyền — Đệm bóng (bumping)',
    intro: 'Khác với búng, ĐỆM dùng cho bóng đến THẤP — ngang ngực hoặc dưới. Đây là kỹ thuật phòng thủ — đỡ bóng phục vụ (serve) hoặc đập của đối phương.',
    objectives: [
      'Thực hiện đúng tư thế tay khi đệm bóng.',
      'Đệm bằng phần cẳng tay, không phải bàn tay.',
      'Phối hợp chân – thân khi đệm.',
    ],
    theory: [
      { h: 'Đệm bóng dùng khi nào?' },
      { p: 'Khi bóng đến THẤP (ngang ngực hoặc dưới) — đặc biệt khi đỡ bóng phục vụ, đỡ bóng đập, hoặc nhặt bóng cứu sệt. Đây là kỹ thuật PHÒNG THỦ.' },
      { h: 'Tư thế tay — hai tay khoá chặt' },
      { ul: [
        'Hai cẳng tay duỗi thẳng phía trước, áp sát nhau.',
        'Hai bàn tay đan/nắm vào nhau — KHÔNG XOÈ NGÓN.',
        'Khoá khuỷu tay — hai cánh tay tạo "tấm phẳng" duy nhất.',
        'Bóng tiếp xúc phần CẲNG TAY (phần thịt giữa cổ tay và khuỷu).',
      ] },
      { h: 'Tư thế thân' },
      { ul: [
        'Hai chân rộng hơn vai, một chân hơi trước.',
        'Đầu gối CHÙNG SÂU, mông hạ thấp.',
        'Thân hơi đổ về trước, mắt nhìn bóng.',
      ] },
      { h: 'Pha đệm' },
      { ul: [
        'Đưa "tấm phẳng cẳng tay" ra đón bóng từ DƯỚI lên.',
        'Khi bóng chạm tay, đẩy nhẹ bằng cách duỗi chân – đẩy hông lên.',
        'Tay KHÔNG vung mạnh — chỉ giữ vững và dùng lực chân.',
        'Mục tiêu: bóng bay cao – đẹp về vị trí đồng đội setter.',
      ] },
      { h: 'Lỗi phổ biến' },
      { ul: [
        'Đan ngón tay không chắc → tay tách ra khi va bóng → đau và bóng đi lệch.',
        'Tay không thẳng / khuỷu cong → bóng nảy lung tung.',
        'Bóng chạm vào BÀN TAY thay vì cẳng tay → đau và lệch.',
        'Không chùng gối → không có lực, bóng đi yếu.',
      ] },
      { note: 'Đệm là môn "đau" với người mới vì cẳng tay đỏ rát ban đầu. Tập đều đặn sẽ quen. Không sợ đau mà sai kỹ thuật.' },
    ],
    examples: [
      { q: 'Bóng phục vụ của đối phương bay đến ngực em. Em đỡ thế nào?', a: 'Em di chuyển nhanh tới đứng dưới bóng, hai chân rộng hơn vai, đầu gối chùng sâu. Hai tay duỗi thẳng phía trước, đan ngón, khoá khuỷu — tạo "tấm phẳng cẳng tay". Khi bóng đến, em đưa tấm phẳng dưới bóng, đẩy chân lên đẩy bóng cao về phía setter. Tay không vung — chỉ dùng lực chân.' },
      { q: 'Bạn đệm xong cẳng tay đỏ rát. Có nên sợ và đệm tránh không?', a: 'Không nên tránh — đó là kỹ thuật phòng thủ chuẩn của bóng chuyền. Cẳng tay sẽ quen sau 1-2 tuần. Tuy nhiên kiểm tra kỹ thuật: tay phải áp sát, khoá khuỷu, bóng chạm CẲNG TAY chứ không phải cổ tay hay bàn tay. Nếu vẫn đau quá có thể đeo bảo vệ cẳng tay (sleeve).' },
    ],
  },

  'S6GDTC-w29-quiz': {
    topic: 'An toàn trong tập luyện thể thao',
    intro: 'An toàn là số 1 — không có thành tích nào đáng đánh đổi bằng chấn thương. Tuần này tổng kết các nguyên tắc an toàn cho mọi môn.',
    objectives: [
      'Nắm 5 nguyên tắc an toàn bắt buộc.',
      'Biết kiểm tra trang phục và sân bãi trước khi tập.',
      'Nhận biết dấu hiệu cần dừng ngay.',
    ],
    theory: [
      { h: 'Năm nguyên tắc an toàn' },
      { ul: [
        '1. KHỞI ĐỘNG KỸ trước khi tập — không bao giờ bỏ qua.',
        '2. VỪA SỨC — TĂNG DẦN: không tập quá khả năng, không nhảy cóc khối lượng.',
        '3. ĐÚNG KỸ THUẬT: kỹ thuật sai → chấn thương sớm hay muộn.',
        '4. TRANG PHỤC – SÂN BÃI an toàn.',
        '5. NGHE CƠ THỂ: đau bất thường = dừng và báo người lớn.',
      ] },
      { h: 'Kiểm tra trang phục' },
      { ul: [
        'Quần áo thể dục gọn gàng, thấm hút mồ hôi.',
        'Giày phù hợp môn tập: chạy bộ → giày chạy; bóng rổ → giày bóng rổ có hỗ trợ cổ chân; cầu lông → giày trong nhà.',
        'Buộc dây giày chắc — không quá chật cũng không lỏng.',
        'Tháo trang sức (đồng hồ kim loại, vòng, dây chuyền dài).',
        'Buộc tóc gọn nếu tóc dài.',
      ] },
      { h: 'Kiểm tra sân bãi' },
      { ul: [
        'Mặt sân bằng phẳng, không sỏi đá, không ổ gà.',
        'Không trơn ướt (mưa, dầu).',
        'Đủ ánh sáng nếu tập trong nhà / buổi tối.',
        'Khoảng cách an toàn với tường, hàng rào, dụng cụ.',
      ] },
      { h: 'Dấu hiệu phải DỪNG NGAY' },
      { ul: [
        'Đau dữ dội, đau nhói cấp tính ở khớp/cơ.',
        'Sưng tấy rõ ràng.',
        'Chóng mặt, hoa mắt, mất thăng bằng.',
        'Đau ngực, khó thở.',
        'Buồn nôn, vã mồ hôi lạnh.',
      ] },
      { h: 'Phòng tránh chấn thương đặc trưng' },
      { p: 'Cổ chân (chạy, bật, đá bóng): khởi động kỹ + giày tốt. Đầu gối (bật, nhảy): khuỵu gối hoãn xung khi tiếp đất. Vai (ném, bóng chuyền): khởi động vai – khuỷu trước. Lưng (vặn mình, ném): vặn từ từ không giật.' },
      { note: 'An toàn không chỉ cho mình — quan sát bạn cùng tập, hô hiệu báo nguy hiểm, không đùa giỡn trong khu tập có dụng cụ.' },
    ],
    examples: [
      { q: 'Bạn đi dép tông vào sân tập bóng đá. Em can?', a: 'Em ngăn lại: dép tông rất nguy hiểm khi đá bóng — dễ tuột, dễ chấn thương ngón chân, không bám sân. Nếu không có giày thể thao, bạn có thể đi giày vải mềm hoặc tạm thời chân đất ở sân cỏ an toàn. Tốt nhất là mượn giày bạn hoặc về thay giày.' },
      { q: 'Trong giờ chạy, em thấy bạn ngực phải, mặt tái. Em làm gì?', a: 'Đây là dấu hiệu NGUY HIỂM cần dừng ngay. Em: (1) Bảo bạn dừng chạy, ngồi nghỉ. (2) Gọi giáo viên ngay. (3) Cho bạn uống nước từ từ, không cho ăn gì. (4) Theo dõi nhịp thở. Nếu nặng — gọi y tế khẩn cấp 115. Tuyệt đối không để bạn chạy tiếp.' },
    ],
  },

  'S6GDTC-w30-quiz': {
    topic: 'Sơ cứu chấn thương đơn giản',
    intro: 'Trong tập luyện, đôi khi sẽ có chấn thương nhẹ. Biết SƠ CỨU đúng giúp giảm đau, tránh nặng thêm, và quan trọng là không làm hại người bị thương.',
    objectives: [
      'Áp dụng quy tắc R-I-C-E cho chấn thương cấp.',
      'Phân biệt khi nào sơ cứu tại chỗ, khi nào gọi y tế.',
      'Tránh các sai lầm phổ biến (xoa dầu nóng, kéo căng…).',
    ],
    theory: [
      { h: 'Quy tắc R-I-C-E — sơ cứu chấn thương cấp' },
      { ul: [
        'R (Rest) — NGHỈ: dừng vận động ngay, không cố tập tiếp.',
        'I (Ice) — CHƯỜM LẠNH: đá bọc khăn (KHÔNG đắp trực tiếp), 15–20 phút mỗi lần, cách 2 giờ làm lại. Trong 48 giờ đầu.',
        'C (Compression) — BĂNG ÉP: băng thun vừa phải để giảm sưng, KHÔNG quá chặt.',
        'E (Elevation) — KÊ CAO: kê vùng bị thương cao hơn tim để giảm sưng.',
      ] },
      { h: 'Bong gân cổ chân' },
      { p: 'Chấn thương phổ biến nhất ở các môn vận động. Áp dụng R-I-C-E. Nếu sưng to, đau dữ dội, không đặt chân được — phải đi khám để loại trừ gãy/đứt dây chằng.' },
      { h: 'Trầy xước, chảy máu nhẹ' },
      { ul: [
        'Rửa vết thương bằng nước sạch (hoặc nước muối sinh lý).',
        'Sát trùng nhẹ bằng povidine.',
        'Băng vết thương bằng gạc sạch.',
        'KHÔNG bôi đất, vôi, lá cây tự ý — nguy cơ nhiễm trùng.',
      ] },
      { h: 'Chảy máu cam' },
      { ul: [
        'Ngồi thẳng hoặc hơi cúi đầu về trước (KHÔNG ngửa đầu — máu chảy xuống họng).',
        'Bóp nhẹ cánh mũi 5–10 phút.',
        'Chườm khăn lạnh trên sống mũi.',
      ] },
      { h: 'Đuối sức do tập nắng nóng' },
      { ul: [
        'Đưa vào chỗ mát, thoáng.',
        'Cởi bớt quần áo, lau mát bằng khăn ướt.',
        'Cho uống nước từng ngụm nhỏ (nếu tỉnh táo).',
        'Nếu sốt cao, ngất → gọi y tế khẩn cấp.',
      ] },
      { h: 'SAI LẦM PHỔ BIẾN cần TRÁNH' },
      { ul: [
        'Xoa dầu nóng (cao xoa, dầu gió) lên chấn thương cấp → làm sưng nặng hơn.',
        'Cố kéo căng vùng đau → có thể đứt rách thêm.',
        'Bóp nắn vùng nghi gãy xương → di lệch nguy hiểm.',
        'Tự ý dùng thuốc giảm đau mạnh.',
      ] },
      { note: 'Khi nào gọi y tế: gãy xương rõ ràng, mất ý thức, đau dữ dội không giảm, chảy máu nhiều, chấn thương vùng đầu/cổ. Số khẩn cấp: 115.' },
    ],
    examples: [
      { q: 'Bạn bị bong gân cổ chân khi đá bóng. Em sơ cứu theo R-I-C-E?', a: 'R (Rest): em cho bạn ngồi nghỉ, không đứng đè lên chân. I (Ice): em lấy đá bọc trong khăn, chườm vùng cổ chân 15-20 phút. C (Compression): em băng thun vừa phải quanh cổ chân. E (Elevation): em kê chân bạn lên ghế cao hơn tim. Nếu sưng to và đau nhiều, em gọi giáo viên/người lớn đưa bạn đi khám.' },
      { q: 'Bạn chảy máu cam, định nằm ngửa cho máu khỏi chảy. Em hướng dẫn lại?', a: 'KHÔNG nằm ngửa — máu sẽ chảy xuống họng, bạn có thể nuốt máu gây buồn nôn, hoặc sặc vào đường thở. Đúng: ngồi thẳng, hơi cúi đầu VỀ TRƯỚC, bóp nhẹ cánh mũi 5-10 phút, thở bằng miệng. Có thể chườm khăn lạnh trên sống mũi để co mạch.' },
    ],
  },

  'S6GDTC-w31-quiz': {
    topic: 'Dinh dưỡng cho người vận động',
    intro: 'Cơ thể như chiếc xe — không có xăng tốt thì không chạy được. Dinh dưỡng đúng giúp các em tập tốt, hồi phục nhanh, lớn cao khoẻ.',
    objectives: [
      'Hiểu vai trò các nhóm chất dinh dưỡng.',
      'Biết ăn uống trước, trong và sau tập đúng cách.',
      'Tránh các sai lầm dinh dưỡng phổ biến của tuổi học sinh.',
    ],
    theory: [
      { h: 'Bốn nhóm chất chính' },
      { ul: [
        'BỘT ĐƯỜNG (carbohydrate): gạo, bánh mì, khoai, mì → NĂNG LƯỢNG chính cho vận động.',
        'ĐẠM (protein): thịt, cá, trứng, sữa, đậu → XÂY DỰNG cơ bắp, sửa chữa mô.',
        'CHẤT BÉO: dầu, mỡ, bơ → năng lượng dự trữ, hấp thu vitamin.',
        'VITAMIN – KHOÁNG: rau, củ, quả → điều hoà các quá trình trong cơ thể.',
      ] },
      { h: 'Ăn trước khi tập' },
      { ul: [
        'Bữa chính trước tập 2–3 giờ (đủ tiêu hoá).',
        'Nếu chỉ có 30–60 phút trước tập: ăn nhẹ (chuối, bánh quy, sữa) — KHÔNG ăn no, không ăn nhiều dầu mỡ.',
        'Đủ nước — uống 200–400ml trước tập 30 phút.',
        'TUYỆT ĐỐI không tập khi đói lả hoặc no căng.',
      ] },
      { h: 'Trong khi tập' },
      { ul: [
        'Uống nước thường xuyên (mỗi 15-20 phút một ngụm nhỏ).',
        'Buổi tập > 60 phút có thể bổ sung nước điện giải (oresol pha loãng, nước hoa quả).',
      ] },
      { h: 'Sau khi tập' },
      { ul: [
        'Bù nước trong 1 giờ đầu.',
        'Ăn nhẹ trong 30–60 phút: kết hợp bột đường + đạm (cơm + cá, bánh mì + trứng, sữa…).',
        'Bữa chính trong 1–2 giờ sau tập.',
      ] },
      { h: 'Đặc biệt với tuổi dậy thì' },
      { ul: [
        'Tăng nhu cầu CANXI (sữa, cá nhỏ ăn cả xương, đậu) → phát triển xương.',
        'Tăng nhu cầu SẮT (thịt đỏ, rau xanh đậm) → tránh thiếu máu.',
        'Đủ ĐẠM cho cơ bắp phát triển.',
      ] },
      { h: 'Sai lầm cần tránh' },
      { ul: [
        'Bỏ bữa sáng → tập buổi sáng mệt mỏi, dễ hạ đường huyết.',
        'Ăn quá nhiều đồ ngọt, nước có gas → tăng cân không tốt, hại răng.',
        'Ăn thức ăn nhanh (fast food) thay bữa chính → thiếu vi chất.',
        'Nhịn ăn để giảm cân ở tuổi này → ảnh hưởng phát triển.',
      ] },
      { note: 'Quy tắc đơn giản: "Ăn đa dạng — đủ no — đúng giờ. Nước trước, trong, sau tập. Tránh đồ ngọt và đồ ăn nhanh quá nhiều."' },
    ],
    examples: [
      { q: 'Em có giờ thể dục 8h sáng. Em nên ăn sáng thế nào?', a: 'Em ăn sáng KHOẢNG 6h-6h30 — trước tập 1.5-2 giờ. Bữa sáng nhẹ: bánh mì + trứng + sữa, hoặc cháo + thịt. KHÔNG ăn no quá (đầy bụng), KHÔNG bỏ bữa (sẽ mệt khi tập). Uống thêm 200ml nước trước tập 30 phút.' },
      { q: 'Sau khi đá bóng 1 giờ, em đói. Em ăn gì hợp lý?', a: 'Em ăn nhẹ kết hợp BỘT ĐƯỜNG + ĐẠM trong 30-60 phút sau tập: ví dụ bánh mì kẹp thịt + sữa, hoặc cơm với cá + rau, hoặc chuối + sữa chua. Bột đường bổ sung năng lượng, đạm giúp cơ phục hồi. Tránh nước có gas và đồ ngọt nhiều.' },
    ],
  },

  'S6GDTC-w32-quiz': {
    topic: 'Nghỉ ngơi và giấc ngủ với HS',
    intro: 'Tập luyện chỉ là 1 nửa câu chuyện. Nửa còn lại là NGHỈ NGƠI và NGỦ — đây là lúc cơ thể THỰC SỰ phát triển, hồi phục và lớn lên.',
    objectives: [
      'Hiểu vai trò của ngủ với sự phát triển và phục hồi.',
      'Biết nhu cầu ngủ của tuổi HS lớp 6.',
      'Áp dụng các thói quen tốt cho giấc ngủ.',
    ],
    theory: [
      { h: 'Vì sao ngủ quan trọng?' },
      { p: 'Khi ngủ, cơ thể tiết HORMONE TĂNG TRƯỞNG (GH) — chính là chìa khoá cho việc CAO LỚN. GH tiết nhiều nhất trong giai đoạn ngủ SÂU, đặc biệt từ 22h-2h sáng. Ngủ thiếu = mất cơ hội cao thêm. Ngủ cũng là lúc cơ phục hồi, não củng cố trí nhớ, hệ miễn dịch tăng cường.' },
      { h: 'Nhu cầu ngủ tuổi lớp 6' },
      { ul: [
        '8–10 giờ/đêm là khuyến cáo.',
        'Đi ngủ trước 22h-22h30, thức dậy 6h-6h30.',
        'Ngủ trưa 15–30 phút sau bữa trưa giúp tỉnh táo buổi chiều.',
      ] },
      { h: 'Thói quen tốt cho giấc ngủ' },
      { ul: [
        'Đi ngủ và thức dậy GIỜ CỐ ĐỊNH — kể cả cuối tuần.',
        'Phòng tối, yên tĩnh, nhiệt độ mát.',
        'KHÔNG dùng điện thoại / TV / máy tính 1 giờ trước khi ngủ — ánh sáng xanh ức chế hormone ngủ (melatonin).',
        'Không ăn no, không uống nhiều nước sát giờ ngủ.',
        'Không uống cà phê, trà đặc, nước tăng lực buổi chiều / tối.',
      ] },
      { h: 'Dấu hiệu ngủ thiếu' },
      { ul: [
        'Buồn ngủ trong giờ học, mất tập trung.',
        'Khó dậy buổi sáng dù ngủ đủ giờ trên giấy.',
        'Dễ cáu kỉnh, mệt mỏi cả ngày.',
        'Học kém đi, hay quên.',
      ] },
      { h: 'Nghỉ ngơi giữa các buổi tập' },
      { ul: [
        'Không tập 2 buổi NẶNG liên tiếp — cơ cần 24-48 giờ phục hồi.',
        'Xen kẽ ngày tập – ngày nghỉ chủ động (đi bộ, kéo giãn).',
        'Nghỉ 1 ngày/tuần hoàn toàn không tập.',
      ] },
      { note: 'Tập luyện cộng với ngủ đủ + ăn đủ + di truyền = chiều cao tối đa của em. Nếu thiếu ngủ, em đang "lãng phí" tiềm năng cao của mình.' },
    ],
    examples: [
      { q: 'Bạn em hay thức đến 12h đêm xem điện thoại, sáng dậy 6h đi học. Tổng 6 tiếng. Hậu quả?', a: 'Bạn đang thiếu ngủ nghiêm trọng — thiếu cả về thời lượng (cần 8-10h) và CHẤT lượng (vì xem điện thoại sát giờ ngủ, ánh sáng xanh ức chế melatonin). Hậu quả: học sa sút, hay cáu, có thể ảnh hưởng chiều cao do GH không tiết đủ. Em khuyên bạn tắt điện thoại lúc 21h, đọc sách 15 phút rồi ngủ trước 22h.' },
      { q: 'Em vừa thi xong, định "cày" liền 3 buổi bóng rổ nặng trong 3 ngày liên tiếp để bù. Có nên?', a: 'Không nên. Tập 3 buổi nặng liên tiếp KHÔNG cho cơ thời gian phục hồi → cơ rã rời, dễ chấn thương, kết quả tập kém. Đúng cách: tập – nghỉ – tập, xen kẽ. Ví dụ T2 tập nặng, T3 nghỉ hoặc đi bộ nhẹ, T4 tập trung bình, T5 nghỉ, T6 tập nặng. Tổng vận động vẫn nhiều, nhưng hiệu quả gấp nhiều lần.' },
    ],
  },

  'S6GDTC-w33-quiz': {
    topic: 'Tư thế đúng — Đứng, ngồi, đi',
    intro: 'Tuổi các em xương khớp đang lớn nhanh. Tư thế sai mỗi ngày sẽ tích tụ thành cong vẹo cột sống, gù lưng. Sửa tư thế là việc làm hằng ngày, không phải chỉ trong giờ thể dục.',
    objectives: [
      'Nhận biết tư thế đứng, ngồi, đi đúng và sai.',
      'Hiểu hậu quả của tư thế sai lâu ngày.',
      'Áp dụng các bài tập sửa tư thế.',
    ],
    theory: [
      { h: 'TƯ THẾ ĐỨNG ĐÚNG' },
      { ul: [
        'Hai chân rộng bằng vai, trọng tâm chia đều.',
        'Đầu gối thẳng, không khoá cứng.',
        'Hông – vai – tai trên một đường thẳng đứng (nhìn nghiêng).',
        'Vai mở ra sau, không gù.',
        'Cằm song song mặt đất.',
        'Bụng hơi gồng nhẹ giữ cột sống.',
      ] },
      { h: 'TƯ THẾ NGỒI HỌC ĐÚNG' },
      { ul: [
        'Lưng thẳng, dựa nhẹ vào lưng ghế.',
        'Hai chân đặt bằng phẳng trên sàn (hoặc kê chân nếu ghế cao).',
        'Đầu gối gập 90°, không bắt chéo chân lâu.',
        'Khuỷu tay gập 90° khi viết, không phải vươn cao hoặc rút thấp.',
        'Mắt cách vở/sách 30–35cm.',
        'Mỗi 45-60 phút đứng dậy vươn vai một lần.',
      ] },
      { h: 'TƯ THẾ ĐI ĐÚNG' },
      { ul: [
        'Thân thẳng, hơi đổ về trước nhẹ.',
        'Vai mở, không gù.',
        'Mắt nhìn thẳng phía trước 5–10m, không cúi nhìn chân.',
        'Tay đung đưa tự nhiên theo nhịp chân.',
        'Bước chân từ gót đến mũi.',
      ] },
      { h: 'Hậu quả của tư thế SAI lâu ngày' },
      { ul: [
        'Cong vẹo cột sống (scoliosis) — không thể chữa hoàn toàn khi đã lớn.',
        'Gù lưng (kyphosis) — ảnh hưởng vóc dáng cả đời.',
        'Thoái hoá cột sống sớm.',
        'Đau lưng, đau cổ mãn tính.',
        'Ảnh hưởng cả hô hấp (lồng ngực bị ép).',
      ] },
      { h: 'Bài tập sửa tư thế' },
      { ul: [
        'Treo xà đơn 30 giây/lần × 3-5 lần/ngày — kéo giãn cột sống.',
        'Tập "bức tường": đứng dựa lưng vào tường, ép đầu – vai – mông – gót sát tường 1 phút.',
        'Bơi lội — môn tốt nhất cho cột sống thẳng.',
        'Kéo vai ra sau, mở ngực mỗi giờ.',
      ] },
      { note: 'Cõng cặp NẶNG một bên vai là thói quen rất xấu của HS — đổi bên thường xuyên, tốt nhất đeo balo hai vai cân đối.' },
    ],
    examples: [
      { q: 'Em ngồi học cúi sát vở 5 tiếng mỗi ngày. Dự đoán hậu quả?', a: 'Cận thị (mắt sát vở quá), gù cổ – gù lưng do cúi nhiều, có thể cong vẹo cột sống nếu kéo dài. Sửa: mắt cách vở 30-35cm, lưng thẳng dựa ghế, mỗi 45-60 phút đứng dậy vươn vai, nhìn xa ra cửa sổ. Tập treo xà đơn cuối ngày để giãn cột sống.' },
      { q: 'Bạn em luôn đeo balo một vai, cặp nặng đầy sách. Em khuyên?', a: 'Đeo một vai cặp nặng → lệch cột sống, một bên vai cao một bên thấp, lâu ngày cong vẹo cột sống. Khuyên bạn: đeo BALO HAI VAI để cân đối; giảm bớt sách không dùng đến; siết dây balo cho ôm sát lưng. Nếu vẫn nặng, có thể dùng balo có bánh xe kéo.' },
    ],
  },

  'S6GDTC-w34-quiz': {
    topic: 'Bài tập tăng SỨC BỀN tại nhà',
    intro: 'Không cần sân lớn, không cần dụng cụ — vẫn tập được sức bền ngay tại nhà. Hôm nay thầy/cô gợi ý các bài tập thực tế.',
    objectives: [
      'Nắm các bài tập tăng sức bền không cần dụng cụ.',
      'Biết xây dựng kế hoạch tập 1 tuần.',
      'Theo dõi tiến bộ qua các chỉ số đơn giản.',
    ],
    theory: [
      { h: 'Sức bền là gì?' },
      { p: 'Là khả năng DUY TRÌ vận động trong thời gian dài — phụ thuộc tim, phổi, mạch máu, cơ bắp. Sức bền tốt giúp ít mệt khi học, lao động, chơi thể thao.' },
      { h: 'Các bài tập tại nhà' },
      { ul: [
        'NHẢY DÂY: 1-3 phút × 3-5 hiệp, nghỉ 1 phút giữa hiệp.',
        'CHẠY TẠI CHỖ NÂNG CAO ĐÙI: 30 giây × 4 lượt.',
        'BURPEES (đứng – ngồi xổm – chống đẩy – bật cao): 5-10 lần × 3 hiệp.',
        'JUMPING JACKS (đứng dạng tay chân): 30 giây × 3 lượt.',
        'MOUNTAIN CLIMBERS (chống tay leo núi tại chỗ): 30 giây × 3 lượt.',
      ] },
      { h: 'Cardio kết hợp HIIT đơn giản' },
      { p: 'HIIT = High Intensity Interval Training — tập cường độ cao xen nghỉ. Ví dụ chu kỳ: 30 giây jumping jacks → 15 giây nghỉ → 30 giây chạy tại chỗ → 15 giây nghỉ → lặp lại 5-8 vòng. Tổng 10-15 phút mà tim mạch tăng rõ rệt.' },
      { h: 'Kế hoạch 1 tuần mẫu' },
      { ul: [
        'T2: Nhảy dây 2p × 4 + chạy tại chỗ 30s × 4.',
        'T3: Nghỉ chủ động — đi bộ 20-30 phút.',
        'T4: HIIT 10 phút (jumping jacks + mountain climbers).',
        'T5: Nghỉ.',
        'T6: Nhảy dây 3p × 3 + burpees 8 × 3.',
        'T7: Hoạt động giải trí thể thao (đá bóng, đạp xe…).',
        'CN: Nghỉ hoàn toàn.',
      ] },
      { h: 'Theo dõi tiến bộ' },
      { ul: [
        'Số lượt/thời gian tăng dần qua các tuần.',
        'Nhịp tim sau bài tập tương đương nhưng cảm giác mệt giảm.',
        'Thời gian hồi phục nhịp tim về bình thường ngắn lại.',
      ] },
      { note: 'Nguyên tắc tăng dần: tuần đầu tập 60% sức, tuần 2 - 70%, tuần 3-4 - 80%. Không vội — chấn thương sẽ làm em mất nhiều tuần phục hồi.' },
    ],
    examples: [
      { q: 'Em chỉ có 15 phút buổi tối ở nhà. Tập gì cho hiệu quả?', a: 'HIIT 10 phút + giãn cơ 5 phút là lựa chọn tốt. Chu kỳ 8 vòng: 30s jumping jacks – 15s nghỉ – 30s mountain climbers – 15s nghỉ. Sau đó 5 phút căng giãn cơ chân, lưng, vai. Tim mạch được kích thích mạnh trong thời gian ngắn — hiệu quả cao.' },
      { q: 'Em tập nhảy dây 1 tuần và thấy không tiến bộ. Bỏ cuộc?', a: 'Đừng vội! 1 tuần chưa đủ để cơ thể thích nghi — cần ít nhất 3-4 tuần thấy rõ tiến bộ. Em kiểm tra: tập đều đặn không? Tăng dần khối lượng chưa? Nghỉ ngơi đủ không? Theo dõi nhịp tim trước/sau bài tập có giảm dần không? Kiên trì là chìa khoá.' },
    ],
  },

  'S6GDTC-w35-quiz': {
    topic: 'Bài tập tăng SỨC MẠNH tại nhà',
    intro: 'Cơ bắp khoẻ giúp em đứng vững, mang vác tốt, phòng ngừa chấn thương. Tại nhà, dùng chính TRỌNG LƯỢNG CƠ THỂ là đủ luyện sức mạnh ban đầu.',
    objectives: [
      'Nắm các bài tập sức mạnh không cần dụng cụ.',
      'Thực hiện đúng kỹ thuật để tránh chấn thương.',
      'Xây dựng chương trình tập sức mạnh 1 tuần.',
    ],
    theory: [
      { h: 'Tập sức mạnh tuổi 11-12 như thế nào?' },
      { p: 'Tuổi này CHƯA NÊN tập tạ nặng (có thể ảnh hưởng sụn tăng trưởng). Dùng TRỌNG LƯỢNG CƠ THỂ (bodyweight) — squat, chống đẩy, plank, kéo xà — là an toàn và hiệu quả.' },
      { h: 'Năm bài tập kinh điển' },
      { ul: [
        'SQUAT (ngồi xổm – đứng lên): cơ đùi, mông. 10-15 lần × 3 hiệp.',
        'CHỐNG ĐẨY (push-up): cơ ngực, vai, tay sau. 5-10 lần × 3 hiệp (có thể chống đẩy gối nếu chưa làm được kiểu thẳng).',
        'PLANK (giữ tư thế chống đẩy bằng khuỷu): cơ bụng, lưng. 20-40 giây × 3 hiệp.',
        'LUNGES (bước chân tới, khuỵu gối): cơ đùi, mông, thăng bằng. 8-10 lần/chân × 3 hiệp.',
        'KÉO XÀ (pull-up trên xà đơn): cơ lưng, tay trước. 1-5 lần × 3 hiệp (nếu không kéo được, treo và co cơ).',
      ] },
      { h: 'Kỹ thuật chuẩn — quan trọng hơn số lần' },
      { ul: [
        'Squat: đầu gối không vượt mũi chân quá nhiều, lưng thẳng, mông đẩy ra sau.',
        'Chống đẩy: thân thẳng từ vai đến gót, KHÔNG võng lưng, KHÔNG nhổng mông.',
        'Plank: thân thẳng tuyệt đối, không hạ mông, không nâng mông cao.',
        'Lunges: đầu gối chân trước không vượt mũi chân, đầu gối chân sau gần chạm đất.',
      ] },
      { h: 'Chu kỳ và nghỉ' },
      { ul: [
        'Tập sức mạnh 2-3 buổi/tuần là đủ.',
        'Giữa hai buổi tập SAME muscle group: nghỉ ít nhất 48 giờ.',
        'Mỗi bài 3 hiệp, nghỉ 1 phút giữa hiệp.',
        'Ngày tập sức mạnh có thể xen với ngày cardio.',
      ] },
      { h: 'Kế hoạch 1 tuần mẫu' },
      { ul: [
        'T2 (sức mạnh): Squat 12×3 + Lunges 10×3 + Plank 30s×3.',
        'T3 (cardio): Nhảy dây hoặc chạy 20 phút.',
        'T4 (sức mạnh): Chống đẩy 8×3 + Plank 30s×3 + Kéo xà 3×3.',
        'T5 (nghỉ hoặc đi bộ).',
        'T6 (toàn thân): Burpees 8×3 + Squat 12×3 + Chống đẩy 8×3.',
        'T7: Thể thao giải trí.',
        'CN: Nghỉ.',
      ] },
      { note: 'Cơ bắp tăng KHI NGHỈ chứ không phải khi tập. Tập là kích thích — nghỉ + ngủ + ăn đạm là lúc cơ thực sự lớn.' },
    ],
    examples: [
      { q: 'Em chống đẩy nhưng cứ võng lưng xuống. Hậu quả và cách sửa?', a: 'Võng lưng → đau lưng dưới + không kích thích đúng cơ ngực + nguy cơ chấn thương đốt sống. Sửa: gồng nhẹ cơ bụng trong suốt động tác, giữ thân thẳng từ vai đến gót như "tấm gỗ". Nếu khó, tạm chuyển sang CHỐNG ĐẨY GỐI (quỳ gối) cho đến khi đủ sức rồi mới làm chống đẩy thẳng.' },
      { q: 'Em tập sức mạnh 7 ngày/tuần để nhanh có cơ. Đúng không?', a: 'Sai. Cơ cần 48 giờ phục hồi giữa các buổi tập cùng nhóm cơ. Tập liên tục → cơ không lớn được, ngược lại còn quá tải, đau, mệt mỏi mãn tính. Đúng: 2-3 buổi/tuần là đủ, xen kẽ cardio và nghỉ. Ngủ đủ 9 tiếng, ăn đủ đạm — cơ sẽ phát triển tốt.' },
    ],
  },

  'S6GDTC-w36-quiz': {
    topic: 'Ôn tập học kì 2',
    intro: 'Tuần cuối lớp 6, chúng ta ôn lại toàn bộ kiến thức học kì 2: bốn môn thể thao tự chọn, an toàn – sơ cứu, dinh dưỡng – nghỉ ngơi và tư thế đúng. Đây là hành trang sang lớp 7.',
    objectives: [
      'Hệ thống hoá kiến thức học kì 2 GDTC lớp 6.',
      'Vận dụng các nguyên tắc vào tập luyện cá nhân.',
      'Tự xây dựng được lịch tập 1 tuần phù hợp.',
    ],
    theory: [
      { h: 'Bốn môn thể thao tự chọn' },
      { ul: [
        'BÓNG ĐÁ: chuyền lòng trong, dẫn bóng kiểm soát, sút mu chính diện, fair-play.',
        'BÓNG RỔ: dribble bằng đầu ngón, chest pass, BEEF khi ném rổ, lay-up.',
        'CẦU LÔNG: cầm vợt bắt tay, giao cầu thấp tay dưới thắt lưng, "chẵn-phải, lẻ-trái".',
        'BÓNG CHUYỀN: búng (đầu ngón tay, tam giác) cho bóng cao, đệm (cẳng tay khoá) cho bóng thấp.',
      ] },
      { h: 'An toàn — Sơ cứu' },
      { ul: [
        '5 nguyên tắc an toàn: khởi động kỹ, vừa sức tăng dần, đúng kỹ thuật, trang phục – sân bãi an toàn, nghe cơ thể.',
        'R-I-C-E cho chấn thương cấp: Rest – Ice – Compression – Elevation.',
        'KHÔNG xoa dầu nóng khi chấn thương cấp.',
        'Dấu hiệu nguy hiểm cần dừng ngay: đau ngực, chóng mặt, khó thở, vã mồ hôi lạnh.',
      ] },
      { h: 'Dinh dưỡng — Nghỉ ngơi' },
      { ul: [
        'Bốn nhóm chất: bột đường, đạm, béo, vitamin – khoáng.',
        'Ăn trước tập 2-3 giờ, sau tập 30-60 phút.',
        'Uống nước trước – trong – sau tập.',
        'Ngủ 8-10 giờ/đêm, đi ngủ trước 22h30 — hormone tăng trưởng tiết nhiều nhất 22h-2h.',
        'Tránh điện thoại 1 giờ trước ngủ.',
      ] },
      { h: 'Tư thế đúng' },
      { ul: [
        'Đứng: hông – vai – tai trên một đường thẳng.',
        'Ngồi học: lưng thẳng, mắt cách vở 30-35cm, mỗi 45-60p vươn vai.',
        'Đi: thân thẳng hơi đổ trước, mắt nhìn xa, không cúi.',
        'Cặp sách: balo hai vai cân đối, không một bên.',
      ] },
      { h: 'Tự xây dựng lịch tập' },
      { p: 'Một tuần lý tưởng cho HS lớp 6 nên có: 2-3 buổi cardio (chạy/nhảy dây/HIIT 20-30p), 2 buổi sức mạnh (bodyweight), 1-2 buổi thể thao yêu thích (bóng/cầu lông), 1 ngày nghỉ hoàn toàn. Tổng vận động ≥ 60 phút/ngày theo khuyến cáo WHO.' },
      { note: 'Lên lớp 7, các em sẽ học sâu hơn các môn thể thao và bắt đầu có kiểm tra thể lực chuẩn. Hãy duy trì thói quen tốt từ năm nay — sức khoẻ là tài sản cả đời.' },
    ],
    examples: [
      { q: 'Em được giao đề "Lập kế hoạch tập luyện 1 tuần cho HS lớp 6 ham bóng đá". Em làm thế nào?', a: 'Mục tiêu: tăng sức bền + sức mạnh chân để đá bóng tốt. T2: kỹ thuật bóng đá 45p (chuyền, dẫn, sút). T3: HIIT 20p + plank/squat. T4: chơi bóng đá nhỏ với bạn 1h. T5: nghỉ chủ động — đi bộ 30p. T6: sức mạnh chân (squat 12×3, lunges 10×3, bật cóc 10m×3) + nhảy dây 2p×3. T7: trận bóng đá lớn với lớp. CN: nghỉ hoàn toàn. Khởi động 10p mỗi buổi, hồi tĩnh 5p. Ngủ trước 22h.' },
      { q: 'Tổng kết: em sẽ mang 3 thông điệp nào từ GDTC lớp 6 sang lớp 7?', a: '(1) Khởi động – hồi tĩnh là BẮT BUỘC, không bao giờ bỏ. (2) Vận động ≥ 60 phút/ngày + ngủ 8-10 tiếng + ăn đủ chất = công thức cao lớn khoẻ mạnh. (3) An toàn trước thành tích — kỹ thuật đúng và biết R-I-C-E khi chấn thương. Ba điều này theo em cả đời, không chỉ năm học lớp 6.' },
    ],
  },
};
