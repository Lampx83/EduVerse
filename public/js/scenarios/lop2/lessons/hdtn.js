// ============================================================
// Lớp 2 · HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) — LÝ THUYẾT + VÍ DỤ 36 tuần
// Bám CT GDPT 2018 · Mạch: Bản thân → Gia đình → Nhà trường → Cộng đồng → Tự nhiên → Nghề.
// Key TRÙNG id quiz: "P2HDTN-wNN-quiz". Đủ 36 key.
// ============================================================

export const P2HDTN_LESSONS = {
  // ──────────────── HK1 — BẢN THÂN · GIA ĐÌNH · NHÀ TRƯỜNG ────────────────

  'P2HDTN-w01-quiz': {
    topic: 'Tự giới thiệu về bản thân',
    intro: 'Các em ơi, mỗi người đều có những điều thú vị riêng. Hôm nay cô sẽ giúp các em biết cách giới thiệu bản thân thật tự tin và lễ phép nhé!',
    objectives: [
      'Biết cách giới thiệu tên, lớp và sở thích của mình.',
      'Nói rõ ràng, tự tin và lễ phép trước lớp.',
      'Biết lắng nghe khi bạn giới thiệu.',
    ],
    theory: [
      { h: 'Bắt đầu bằng lời chào' },
      { p: 'Khi đứng trước lớp, em hãy chào trước rồi mới nói tên. Ví dụ: "Em chào cô và các bạn, em tên là…". Lời chào lễ phép giúp mọi người quý mến em.' },
      { h: 'Nói gì khi giới thiệu?' },
      { ul: ['Tên của em', 'Em học lớp mấy', 'Sở thích lành mạnh (đọc truyện, vẽ tranh, đá bóng)', 'Một điều em mong muốn'] },
      { h: 'Giọng nói và thái độ' },
      { p: 'Em nói rõ ràng, đủ nghe, không quá to cũng không lí nhí. Đứng thẳng, mắt nhìn về phía các bạn và mỉm cười nhẹ.' },
      { note: 'Không chia sẻ thông tin riêng tư như mật khẩu điện thoại hay địa chỉ nhà cho người lạ nhé!' },
    ],
    examples: [
      { q: 'Em nên làm gì khi đến lượt mình giới thiệu trước lớp mới?', a: 'Em đứng dậy, mỉm cười và nói: "Em chào cô và các bạn, em tên là Minh, em học lớp 2A. Em thích đọc truyện tranh và vẽ. Em rất vui được làm bạn với các bạn ạ."' },
      { q: 'Em nên làm gì khi một bạn đang giới thiệu về mình?', a: 'Em ngồi yên lắng nghe, không nói chuyện riêng. Khi bạn nói xong, em vỗ tay để động viên bạn.' },
    ],
  },

  'P2HDTN-w02-quiz': {
    topic: 'Đôi tay sạch sẽ — rửa tay đúng cách',
    intro: 'Các em biết không, đôi bàn tay của chúng ta chạm vào rất nhiều thứ trong ngày. Cùng cô học cách rửa tay sạch để luôn khoẻ mạnh nhé!',
    objectives: [
      'Biết khi nào cần rửa tay.',
      'Rửa tay đúng cách với xà phòng và nước sạch.',
      'Hiểu vì sao tay bẩn gây bệnh.',
    ],
    theory: [
      { h: 'Khi nào cần rửa tay?' },
      { ul: ['Trước khi ăn', 'Sau khi đi vệ sinh', 'Sau khi chơi, sờ vào đồ bẩn', 'Khi tay nhìn thấy bẩn'] },
      { h: 'Rửa tay đúng các bước' },
      { p: 'Làm ướt tay, lấy xà phòng, xoa đều lòng bàn tay, mu bàn tay, kẽ ngón tay và cổ tay trong khoảng 20 giây. Sau đó rửa sạch với nước và lau khô bằng khăn sạch.' },
      { note: 'Mẹo: xoa xà phòng đủ lâu bằng cách hát bài "Chúc mừng sinh nhật" 2 lần (khoảng 20 giây).' },
      { h: 'Vì sao phải rửa tay?' },
      { p: 'Tay bẩn mang nhiều vi khuẩn mắt thường không nhìn thấy. Nếu ăn bằng tay bẩn, vi khuẩn vào bụng làm em đau bụng, tiêu chảy.' },
    ],
    examples: [
      { q: 'Em vừa đi chơi về và sắp ăn cơm. Em nên làm gì?', a: 'Em đi rửa tay bằng xà phòng và nước sạch trong khoảng 20 giây, lau khô tay rồi mới ngồi vào bàn ăn.' },
      { q: 'Em nên làm gì khi đang xoa xà phòng mà vòi nước vẫn chảy?', a: 'Em khoá vòi lại khi đang xoa xà phòng để tiết kiệm nước, chỉ mở lại khi cần rửa sạch tay.' },
    ],
  },

  'P2HDTN-w03-quiz': {
    topic: 'Đánh răng đúng cách (sáng + tối)',
    intro: 'Hàm răng trắng đẹp giúp em cười tươi và ăn ngon. Hôm nay cô hướng dẫn các em đánh răng đúng cách nhé!',
    objectives: [
      'Biết đánh răng ít nhất 2 lần mỗi ngày.',
      'Chải răng đúng chiều, nhẹ nhàng.',
      'Giữ bàn chải sạch và dùng riêng.',
    ],
    theory: [
      { h: 'Đánh răng mấy lần?' },
      { p: 'Em đánh răng ít nhất 2 lần mỗi ngày: buổi sáng sau khi ngủ dậy và buổi tối trước khi đi ngủ.' },
      { h: 'Chải răng thế nào cho đúng?' },
      { ul: ['Chải dọc và xoay tròn nhẹ nhàng', 'Chải cả mặt trong, mặt ngoài và mặt nhai', 'Không chải ngang quá mạnh', 'Chải nhẹ cả lưỡi cho thơm miệng'] },
      { h: 'Giữ bàn chải sạch' },
      { p: 'Mỗi người dùng một bàn chải riêng, không dùng chung. Thay bàn chải mới khoảng 3 tháng một lần.' },
      { note: 'Sau khi ăn kẹo ngọt, em nên súc miệng hoặc đánh răng vì đường làm sâu răng.' },
    ],
    examples: [
      { q: 'Em vừa ăn kẹo xong và buồn ngủ. Em nên làm gì?', a: 'Em đánh răng hoặc súc miệng sạch trước khi đi ngủ, không để đường còn trên răng cả đêm gây sâu răng.' },
      { q: 'Bạn nói "đánh răng càng mạnh càng sạch". Theo em đúng không?', a: 'Không đúng. Chải quá mạnh làm chảy máu lợi và mòn men răng. Em nên chải nhẹ nhàng, đều tay là đủ sạch.' },
    ],
  },

  'P2HDTN-w04-quiz': {
    topic: 'Mặc quần áo gọn gàng',
    intro: 'Quần áo gọn gàng giúp em trông lịch sự và được mọi người yêu quý. Cùng cô học cách tự chăm sóc trang phục nhé!',
    objectives: [
      'Biết tự kiểm tra quần áo trước khi đi học.',
      'Biết xử lí khi áo bẩn hoặc tuột cúc.',
      'Hiểu lợi ích của việc mặc gọn gàng.',
    ],
    theory: [
      { h: 'Chuẩn bị trước khi đi học' },
      { p: 'Trước khi đi học, em tự kiểm tra quần áo: áo có phẳng không, cúc cài đủ chưa, có vết bẩn không.' },
      { h: 'Khi quần áo có vấn đề' },
      { ul: ['Áo bẩn: bỏ vào giỏ giặt, thay áo sạch', 'Áo tuột cúc: nhờ người lớn đính lại', 'Áo nhăn: nhờ là phẳng hoặc treo cho thẳng'] },
      { h: 'Thế nào là gọn gàng?' },
      { p: 'Áo sơ vin ngay ngắn, cổ áo thẳng, đi giày dép sạch, tóc tai gọn. Như vậy em trông lịch sự.' },
      { note: 'Mặc gọn gàng giúp em tự tin và được mọi người quý mến.' },
    ],
    examples: [
      { q: 'Sáng nay em phát hiện áo đồng phục bị tuột một cúc. Em nên làm gì?', a: 'Em nhờ bố mẹ đính lại cúc áo, không mặc luôn áo tuột cúc đi học vì như vậy sẽ không gọn gàng.' },
      { q: 'Em làm bẩn áo khi ăn sáng. Em nên làm gì?', a: 'Em bỏ áo bẩn vào giỏ giặt và thay một chiếc áo sạch khác, không mặc tiếp áo bẩn đến trường.' },
    ],
  },

  'P2HDTN-w05-quiz': {
    topic: 'Em tự chải tóc',
    intro: 'Tự chải tóc gọn gàng mỗi sáng là dấu hiệu em đã lớn và tự lập rồi đấy! Cùng cô học cách nhé.',
    objectives: [
      'Biết tự chải tóc gọn gàng mỗi ngày.',
      'Biết gỡ tóc rối đúng cách.',
      'Giữ vệ sinh lược và dọn tóc rụng.',
    ],
    theory: [
      { h: 'Chải tóc mỗi sáng' },
      { p: 'Buổi sáng trước khi đi học, em tự chải tóc cho gọn. Bạn gái có thể tự buộc tóc lại.' },
      { h: 'Gỡ tóc rối' },
      { p: 'Khi tóc bị rối, em chải từ phần ngọn lên dần, nhẹ nhàng, không giật mạnh kẻo đau và đứt tóc.' },
      { ul: ['Dùng lược riêng của mình', 'Giữ lược sạch sẽ', 'Tóc rụng cho vào thùng rác'] },
      { note: 'Tự chải tóc, buộc tóc là biểu hiện của bạn nhỏ tự lập, không phải lúc nào cũng cần mẹ làm hộ.' },
    ],
    examples: [
      { q: 'Tóc em bị rối thành một búi nhỏ. Em nên làm gì?', a: 'Em chải nhẹ nhàng từ phần ngọn tóc đi lên dần, gỡ từ từ. Em không giật mạnh vì sẽ đau và làm đứt tóc.' },
      { q: 'Em vừa chải tóc xong, có mấy sợi tóc rụng trên sàn. Em nên làm gì?', a: 'Em nhặt tóc rụng bỏ vào thùng rác để giữ nhà sạch sẽ, không để tóc vương trên sàn hay ghế.' },
    ],
  },

  'P2HDTN-w06-quiz': {
    topic: 'Cất đồ dùng đúng chỗ',
    intro: 'Một căn phòng gọn gàng giúp em dễ tìm đồ và thấy vui vẻ hơn. Cùng cô học cách cất đồ đúng chỗ nhé!',
    objectives: [
      'Biết cất sách vở, đồ chơi, giày dép đúng nơi.',
      'Hiểu lợi ích của việc gọn gàng.',
      'Biết nhắc bạn cùng giữ gọn gàng.',
    ],
    theory: [
      { h: 'Mỗi đồ có một chỗ' },
      { ul: ['Sách vở: xếp gọn vào giá sách hoặc cặp', 'Giày dép: xếp ngay ngắn trên giá giày', 'Đồ chơi: cất vào hộp hoặc giỏ sau khi chơi'] },
      { h: 'Vì sao cần cất đồ đúng chỗ?' },
      { p: 'Khi đồ ở đúng chỗ, em dễ tìm, nhà cửa gọn gàng và không bị mất đồ. Nhà gọn cũng giúp tinh thần thoải mái.' },
      { note: 'Tự cất đồ của mình, không để bố mẹ dọn hộ, là cách em rèn tính tự lập.' },
    ],
    examples: [
      { q: 'Em vừa chơi xong một đống đồ chơi bày khắp sàn. Em nên làm gì?', a: 'Em tự thu dọn đồ chơi, cất vào hộp hoặc giỏ đựng đồ chơi, để sàn nhà gọn gàng trở lại.' },
      { q: 'Em thấy bạn Nam làm bài xong vứt bút trên ghế. Em nên làm gì?', a: 'Em nhẹ nhàng nhắc bạn: "Nam ơi, cậu cất bút vào hộp bút nhé, kẻo lăn mất." Đó là góp ý chân thành cho bạn.' },
    ],
  },

  'P2HDTN-w07-quiz': {
    topic: 'Chuẩn bị cặp sách đi học',
    intro: 'Soạn cặp đầy đủ giúp em không quên sách vở và học tốt hơn. Cùng cô học cách soạn cặp gọn gàng nhé!',
    objectives: [
      'Biết soạn cặp theo thời khoá biểu từ tối hôm trước.',
      'Biết những đồ dùng học tập cơ bản cần mang.',
      'Biết xử lí khi quên sách.',
    ],
    theory: [
      { h: 'Soạn cặp khi nào?' },
      { p: 'Em soạn cặp vào tối hôm trước, theo thời khoá biểu (TKB) của ngày mai. Như vậy sáng đi học không vội vàng, không quên đồ.' },
      { h: 'Soạn cặp thế nào?' },
      { ul: ['Xem TKB ngày mai có những môn gì', 'Lấy đủ sách và vở của các môn đó', 'Mang đồ dùng cơ bản: bút, thước, tẩy, hộp bút', 'Không mang đồ chơi, đồ ăn vặt'] },
      { note: 'Cặp quá nặng có thể làm đau lưng, lệch vai. Chỉ mang đúng những thứ cần cho ngày hôm đó.' },
    ],
    examples: [
      { q: 'Ngày mai em có môn Toán, Tiếng Việt và Mĩ thuật. Em nên soạn cặp thế nào?', a: 'Em lấy sách và vở Toán, Tiếng Việt, đồ vẽ cho Mĩ thuật, cùng hộp bút có bút, thước, tẩy. Em soạn từ tối hôm trước để khỏi quên.' },
      { q: 'Đến lớp em mới phát hiện quên sách Toán ở nhà. Em nên làm gì?', a: 'Em xin lỗi cô và lễ phép mượn chung sách với bạn ngồi cạnh, không khóc lóc hay đổ lỗi cho bố mẹ. Tối về em soạn cặp cẩn thận hơn.' },
    ],
  },

  'P2HDTN-w08-quiz': {
    topic: 'Em yêu gia đình — vai trò mỗi người',
    intro: 'Gia đình là nơi yêu thương em nhất. Hôm nay cô cùng các em tìm hiểu về những người thân trong gia đình nhé!',
    objectives: [
      'Biết vai trò của các thành viên trong gia đình.',
      'Biết cách thể hiện tình yêu thương gia đình.',
      'Biết yêu thương, nhường nhịn anh chị em.',
    ],
    theory: [
      { h: 'Những người trong gia đình' },
      { ul: ['Bố mẹ: sinh ra và nuôi em khôn lớn', 'Ông bà: là bố mẹ của bố hoặc mẹ em', 'Anh chị em: cùng chung bố mẹ với em'] },
      { h: 'Thể hiện tình yêu thương' },
      { p: 'Em yêu gia đình bằng những việc nhỏ: lấy nước mời bố mẹ khi đi làm về mệt, hỏi thăm ông bà, nói "Con yêu cả nhà".' },
      { note: 'Anh chị em trong nhà nên yêu thương, nhường nhịn nhau thì gia đình mới hạnh phúc.' },
    ],
    examples: [
      { q: 'Bố mẹ đi làm về có vẻ mệt mỏi. Em nên làm gì?', a: 'Em rót một cốc nước mời bố mẹ và hỏi thăm: "Bố mẹ đi làm có mệt không ạ?". Em không đòi mua đồ chơi hay bật ti vi to ngay lúc đó.' },
      { q: 'Em trai đòi xem chung cuốn truyện em đang đọc. Em nên làm gì?', a: 'Em vui vẻ nhường em xem cùng hoặc đọc truyện cho em nghe. Nhường nhịn em nhỏ giúp gia đình vui vẻ, hoà thuận.' },
    ],
  },

  'P2HDTN-w09-quiz': {
    topic: 'Phụ giúp mẹ làm bếp đơn giản',
    intro: 'Giúp mẹ làm bếp những việc nhỏ vừa vui vừa giúp em tự lập. Nhưng phải nhớ giữ an toàn nhé các em!',
    objectives: [
      'Biết những việc bếp an toàn em có thể làm.',
      'Biết giữ an toàn khi ở gần bếp.',
      'Biết vệ sinh tay trước khi làm bếp.',
    ],
    theory: [
      { h: 'Việc em giúp được' },
      { ul: ['Nhặt rau, vo gạo', 'Lau bàn ăn', 'Bày bát đũa (loại không dễ vỡ)'] },
      { h: 'Giữ an toàn' },
      { p: 'Bếp ga, nồi nước sôi và dầu nóng rất nguy hiểm. Em đứng xa bếp đang nấu, không chạy nhảy quanh bếp, không cầm dao thái.' },
      { note: 'Rửa tay sạch trước khi giúp mẹ chuẩn bị thức ăn. Nếu lỡ đổ nước ra sàn, em lau khô ngay để không trơn trượt.' },
    ],
    examples: [
      { q: 'Mẹ đang chiên cá trên chảo dầu nóng. Em muốn giúp. Em nên làm gì?', a: 'Em đứng xa bếp, không lại gần chảo dầu nóng. Em có thể giúp việc khác như nhặt rau, lau bàn hoặc bày bát đũa.' },
      { q: 'Em lỡ làm đổ nước ra sàn bếp. Em nên làm gì?', a: 'Em lấy khăn lau khô sàn ngay để không ai bị trơn trượt ngã, và báo cho mẹ biết, không giấu.' },
    ],
  },

  'P2HDTN-w10-quiz': {
    topic: 'Chăm sóc em nhỏ',
    intro: 'Nếu nhà có em bé, em là anh chị lớn rồi đấy! Cùng cô học cách chăm sóc em nhỏ an toàn và yêu thương nhé.',
    objectives: [
      'Biết cách dỗ dành và chơi cùng em nhỏ an toàn.',
      'Biết chọn đồ chơi và đồ ăn an toàn cho em.',
      'Biết yêu thương, không làm đau em.',
    ],
    theory: [
      { h: 'Khi em bé khóc' },
      { p: 'Em dỗ dành em bé nhẹ nhàng và gọi người lớn đến giúp, không quát to hay bịt miệng em.' },
      { h: 'Chơi an toàn với em' },
      { ul: ['Chọn đồ chơi mềm, không sắc nhọn', 'Tránh hạt nhỏ, vật dễ nuốt', 'Không tự ý cho em ăn kẹo cứng — hỏi người lớn trước'] },
      { note: 'Em nhỏ rất yếu, em phải luôn yêu thương, không bao giờ được đánh em dù em quấy khóc.' },
    ],
    examples: [
      { q: 'Em bé đòi ăn một viên kẹo cứng to. Em nên làm gì?', a: 'Em không tự ý cho em bé ăn vì kẹo cứng dễ làm em hóc. Em hỏi ý người lớn trước khi cho em ăn bất cứ thứ gì.' },
      { q: 'Em bé khóc to khi mẹ đang nấu cơm. Em nên làm gì?', a: 'Em lại gần dỗ dành em nhẹ nhàng, hát hoặc đưa đồ chơi mềm cho em, đồng thời gọi mẹ biết để mẹ ra xem.' },
    ],
  },

  'P2HDTN-w11-quiz': {
    topic: 'Quan tâm ông bà',
    intro: 'Ông bà đã già và rất yêu thương các cháu. Cùng cô học cách quan tâm, chăm sóc ông bà nhé các em!',
    objectives: [
      'Biết chào hỏi và trò chuyện lễ phép với ông bà.',
      'Biết quan tâm khi ông bà ốm.',
      'Biết thể hiện tình yêu thương ông bà.',
    ],
    theory: [
      { h: 'Lễ phép với ông bà' },
      { p: 'Khi gặp ông bà, em khoanh tay chào lễ phép. Khi ông bà nói chuyện, em lắng nghe và "Vâng ạ", không ngắt lời.' },
      { h: 'Quan tâm ông bà' },
      { ul: ['Hỏi thăm, rót nước khi ông bà ốm', 'Nghe ông bà kể chuyện, đi dạo cùng', 'Vẽ tranh, làm thiệp tặng ông bà'] },
      { note: 'Những việc nhỏ đầy yêu thương sẽ làm ông bà rất vui và hạnh phúc.' },
    ],
    examples: [
      { q: 'Bà bị mệt phải nằm nghỉ. Em nên làm gì?', a: 'Em đến hỏi thăm: "Bà có khoẻ không ạ?", rót nước cho bà và giữ yên lặng để bà nghỉ, không bật nhạc to hay nô đùa ầm ĩ.' },
      { q: 'Ông đang kể chuyện ngày xưa cho em nghe. Em nên làm gì?', a: 'Em ngồi lắng nghe chăm chú, thỉnh thoảng "Vâng ạ", không ngắt lời ông. Như vậy là lễ phép và thể hiện em yêu quý ông.' },
    ],
  },

  'P2HDTN-w12-quiz': {
    topic: 'Em chào hỏi lễ phép với người lớn',
    intro: 'Lời chào lễ phép như một bông hoa đẹp tặng người khác. Cùng cô học cách chào hỏi và ứng xử lễ phép nhé!',
    objectives: [
      'Biết chào hỏi lễ phép với người lớn.',
      'Biết tiếp khách đến nhà lịch sự.',
      'Biết nhận quà và cảm ơn đúng cách.',
    ],
    theory: [
      { h: 'Lời chào lễ phép' },
      { p: 'Khi gặp người lớn, em khoanh tay chào và thêm chữ "ạ": "Em chào cô ạ", "Cháu chào bác ạ". Không nói trống không, cộc lốc.' },
      { h: 'Khi khách đến nhà' },
      { ul: ['Lễ phép chào hỏi khách', 'Mời khách ngồi', 'Mời nước nếu được phép'] },
      { note: 'Khi được người lớn cho quà, em nhận bằng hai tay và nói "Cháu cảm ơn ạ".' },
    ],
    examples: [
      { q: 'Em gặp bác hàng xóm ở cổng nhà. Em nên chào thế nào?', a: 'Em khoanh tay và nói: "Cháu chào bác ạ." Đó là cách chào lễ phép. Em không gọi cộc lốc "Ê bác!" hay lờ đi.' },
      { q: 'Cô của em đến chơi và cho em một gói bánh. Em nên làm gì?', a: 'Em đưa hai tay nhận gói bánh và nói: "Cháu cảm ơn cô ạ." Em không cướp lấy hay chê quà.' },
    ],
  },

  'P2HDTN-w13-quiz': {
    topic: 'Em yêu trường lớp — giữ gìn lớp học',
    intro: 'Lớp học là ngôi nhà thứ hai của em. Cùng cô giữ cho lớp luôn sạch đẹp nhé các em!',
    objectives: [
      'Hiểu giữ gìn lớp học là trách nhiệm chung.',
      'Biết bỏ rác đúng chỗ và chăm sóc cây trong lớp.',
      'Biết khuyên bạn không phá hoại của chung.',
    ],
    theory: [
      { h: 'Lớp sạch là của chung' },
      { p: 'Lớp học sạch đẹp là nhờ tất cả học sinh và thầy cô cùng giữ gìn, không phải chỉ riêng bác lao công.' },
      { h: 'Những việc em làm được' },
      { ul: ['Vỏ bánh kẹo bỏ vào thùng rác', 'Tưới và chăm sóc cây cảnh trong lớp', 'Giữ gìn bàn ghế, không vẽ bậy, không đu lên'] },
      { note: 'Khi thấy bạn làm hỏng đồ chung, em nên khuyên bạn dừng lại và báo cô nếu cần.' },
    ],
    examples: [
      { q: 'Giờ ra chơi em ăn xong một chiếc bánh. Vỏ bánh em nên để đâu?', a: 'Em bỏ vỏ bánh vào thùng rác, không vứt ra sân, không nhét gầm bàn. Như vậy lớp mới sạch sẽ.' },
      { q: 'Em thấy bạn lấy bút vẽ bậy lên tường lớp. Em nên làm gì?', a: 'Em khuyên bạn dừng lại: "Đừng vẽ lên tường, bẩn lớp mình." Nếu bạn không nghe, em báo cô giáo biết.' },
    ],
  },

  'P2HDTN-w14-quiz': {
    topic: 'Trực nhật lớp — chia công bằng',
    intro: 'Trực nhật giúp lớp sạch đẹp và rèn cho em tính trách nhiệm. Cùng cô tìm hiểu cách trực nhật tốt nhé!',
    objectives: [
      'Biết các công việc trực nhật.',
      'Biết tự giác làm phần việc của mình.',
      'Hiểu trực nhật cần chia công bằng và giúp nhau.',
    ],
    theory: [
      { h: 'Trực nhật gồm những việc gì?' },
      { ul: ['Quét lớp', 'Lau bảng', 'Sắp xếp bàn ghế ngay ngắn', 'Đổ rác'] },
      { h: 'Làm trực nhật thế nào?' },
      { p: 'Đến lượt trực nhật, em đến sớm và làm phần việc được giao. Nếu bạn cùng tổ làm chậm, em giúp bạn cho xong, không bỏ mặc.' },
      { note: 'Trực nhật chia đều mỗi bạn một phần và luân phiên các tổ thì mới công bằng. Dụng cụ xong cất đúng nơi quy định.' },
    ],
    examples: [
      { q: 'Hôm nay đến lượt tổ em trực nhật mà em lại muốn về sớm. Em nên làm gì?', a: 'Em ở lại làm phần việc được giao như quét lớp hoặc lau bảng cho xong, không trốn về hay đẩy việc cho bạn. Trực nhật là trách nhiệm của em.' },
      { q: 'Một bạn cùng tổ quét chậm nên chưa xong. Em nên làm gì?', a: 'Em đến giúp bạn quét nốt phần còn lại để cả tổ cùng hoàn thành sớm. Đó là tinh thần đồng đội.' },
    ],
  },

  'P2HDTN-w15-quiz': {
    topic: 'Giúp đỡ bạn bè trong lớp',
    intro: 'Tình bạn đẹp được xây từ những lần giúp đỡ nhau. Cùng cô học cách trở thành người bạn tốt nhé các em!',
    objectives: [
      'Biết giúp đỡ, chia sẻ với bạn bè.',
      'Biết đón chào bạn mới thân thiện.',
      'Hiểu không nên nói xấu, trêu chọc bạn.',
    ],
    theory: [
      { h: 'Giúp bạn khi nào?' },
      { ul: ['Cho bạn mượn bút khi bạn quên (nếu em có dư)', 'Đỡ bạn dậy khi bạn ngã, báo cô nếu bạn đau', 'Giảng lại bài cho bạn chưa hiểu (khi cô cho phép)'] },
      { h: 'Đón bạn mới' },
      { p: 'Khi có bạn mới chuyển đến, em chủ động làm quen, giới thiệu về lớp để bạn bớt bỡ ngỡ.' },
      { note: 'Không nói xấu sau lưng, không trêu chọc hay đặt biệt danh xấu cho bạn — điều đó làm bạn buồn.' },
    ],
    examples: [
      { q: 'Bạn ngồi cạnh quên mang bút, mà em có hai chiếc. Em nên làm gì?', a: 'Em vui vẻ cho bạn mượn một chiếc bút. Chia sẻ với bạn là biểu hiện của tình bạn đẹp.' },
      { q: 'Có một bạn mới vừa chuyển đến lớp em. Em nên làm gì?', a: 'Em chủ động lại gần làm quen: "Chào cậu, mình tên là Lan. Để mình chỉ cho cậu chỗ để cặp nhé!" Em không lờ đi hay trêu bạn.' },
    ],
  },

  'P2HDTN-w16-quiz': {
    topic: 'Ứng xử lễ phép với thầy cô',
    intro: 'Thầy cô dạy em điều hay lẽ phải. Cùng cô học cách ứng xử lễ phép với thầy cô nhé các em!',
    objectives: [
      'Biết chào hỏi và nghe giảng lễ phép.',
      'Biết giơ tay xin phát biểu.',
      'Biết xin lỗi và sửa sai khi mắc lỗi.',
    ],
    theory: [
      { h: 'Trong và ngoài lớp học' },
      { ul: ['Gặp thầy cô: khoanh tay chào lễ phép', 'Khi thầy cô giảng: lắng nghe, ghi chép', 'Muốn nói: giơ tay xin phát biểu'] },
      { h: 'Khi mắc lỗi' },
      { p: 'Nếu em làm sai, em xin lỗi và sửa sai, không đổ lỗi cho bạn hay cãi lại. Biết nhận lỗi là dấu hiệu em đang trưởng thành.' },
      { note: 'Câu nói lễ phép thường có "Thưa cô…" ở đầu và "ạ" ở cuối.' },
    ],
    examples: [
      { q: 'Em muốn hỏi cô một câu trong giờ học. Em nên làm gì?', a: 'Em giơ tay xin phép, đợi cô gọi rồi mới đứng dậy hỏi: "Thưa cô, em chưa hiểu chỗ này ạ." Em không nói lớn cắt ngang lời cô.' },
      { q: 'Em làm ồn trong giờ học và bị cô nhắc. Em nên làm gì?', a: 'Em xin lỗi cô: "Em xin lỗi cô ạ", rồi ngồi yên chú ý nghe giảng. Em không cãi lại hay đổ lỗi cho bạn.' },
    ],
  },

  'P2HDTN-w17-quiz': {
    topic: 'Tham gia sinh hoạt lớp tích cực',
    intro: 'Giờ sinh hoạt lớp là lúc cả lớp cùng nhau tiến bộ. Cùng cô học cách tham gia tích cực nhé các em!',
    objectives: [
      'Biết phát biểu ý kiến và lắng nghe bạn.',
      'Biết bình bầu công bằng.',
      'Biết tiếp thu góp ý để sửa mình.',
    ],
    theory: [
      { h: 'Tham gia tích cực' },
      { p: 'Trong giờ sinh hoạt lớp, em mạnh dạn nêu ý kiến và lắng nghe ý kiến của các bạn, không ngồi im hay làm việc riêng.' },
      { h: 'Bình bầu công bằng' },
      { p: 'Khi lớp bình bầu khen thưởng, em bầu cho bạn xứng đáng, không vì bạn thân mà bầu cho bạn dù bạn chưa tốt.' },
      { note: 'Khi bị bạn phê bình đúng, em tiếp thu và sửa, không giận hay trả thù bạn. Đó là cầu tiến.' },
    ],
    examples: [
      { q: 'Lớp đang chọn hoạt động cho buổi vui chơi. Em muốn đề xuất. Em nên chọn gì?', a: 'Em đề xuất hoạt động mà cả lớp cùng tham gia được, như trò chơi tập thể, không chọn trò chỉ mình em thích hay trò nguy hiểm.' },
      { q: 'Một bạn nhận xét em hay nói chuyện riêng trong lớp, và điều đó đúng. Em nên làm gì?', a: 'Em tiếp thu lời góp ý và cố gắng sửa, cảm ơn bạn đã nhắc, không giận dỗi hay trả thù bạn.' },
    ],
  },

  'P2HDTN-w18-quiz': {
    topic: 'Sơ kết Học kì 1 — chia sẻ kĩ năng đã có',
    intro: 'Một học kì đã qua rồi! Cùng cô nhìn lại những điều các em đã học được và làm tốt nhé.',
    objectives: [
      'Tự nhìn lại các kĩ năng đã rèn được trong HK1.',
      'Biết tự hào việc tốt và rút kinh nghiệm việc chưa tốt.',
      'Biết chia sẻ trải nghiệm với gia đình.',
    ],
    theory: [
      { h: 'Em đã học được những gì?' },
      { ul: ['Tự phục vụ: đánh răng, rửa tay, chải tóc, soạn cặp', 'Gia đình: giúp việc nhỏ, lễ phép với ông bà', 'Nhà trường: trực nhật, giúp bạn, lễ phép với thầy cô'] },
      { h: 'Nhìn lại bản thân' },
      { p: 'Em tự hào với những việc làm tốt và rút kinh nghiệm với việc chưa tốt. Em đặt mục tiêu cho HK2: tự lập hơn, kiên trì hơn, làm việc nhóm tốt hơn.' },
      { note: 'Chia sẻ trải nghiệm vui ở trường với gia đình giúp mọi người thêm gắn kết.' },
    ],
    examples: [
      { q: 'Cuối học kì, em nhìn lại thấy mình hay quên soạn cặp. Em nên làm gì?', a: 'Em không tự ti mà rút kinh nghiệm, đặt mục tiêu HK2: soạn cặp đầy đủ từ tối hôm trước theo thời khoá biểu.' },
      { q: 'Em muốn kể với bố mẹ về học kì vừa qua. Em nên nói gì?', a: 'Em kể những việc tốt mình đã làm và những điều vui ở trường, ví dụ: "Con đã biết tự soạn cặp và giúp bạn mượn bút." Em cũng nói lời chúc cả lớp HK2 tiến bộ hơn.' },
    ],
  },

  // ──────────────── HK2 — CỘNG ĐỒNG · TỰ NHIÊN · NGHỀ NGHIỆP ────────────────

  'P2HDTN-w19-quiz': {
    topic: 'An toàn giao thông (1): Đèn tín hiệu',
    intro: 'Đèn giao thông là người bạn giúp mọi người đi lại an toàn. Cùng cô học ý nghĩa của ba màu đèn nhé các em!',
    objectives: [
      'Hiểu ý nghĩa đèn đỏ, vàng, xanh.',
      'Biết chờ đèn khi qua đường.',
      'Hiểu phải tuân thủ đèn dù đường vắng.',
    ],
    theory: [
      { h: 'Ba màu đèn giao thông' },
      { ul: ['Đèn ĐỎ: Dừng lại', 'Đèn VÀNG: Chuẩn bị dừng (đi chậm lại)', 'Đèn XANH: Được đi'] },
      { h: 'Người đi bộ làm gì?' },
      { p: 'Khi đèn đỏ, người đi bộ đứng đợi trên vỉa hè. Khi đèn xanh dành cho người đi bộ mới được qua đường.' },
      { note: 'Luôn tuân thủ đèn tín hiệu, dừng đèn đỏ kể cả khi đường vắng không có xe. Đi qua ngã tư cùng người lớn thì nắm tay và quan sát đèn.' },
    ],
    examples: [
      { q: 'Em đứng ở ngã tư, đèn dành cho người đi bộ đang đỏ. Em nên làm gì?', a: 'Em đứng đợi trên vỉa hè cho đến khi đèn chuyển xanh mới qua đường. Em không chạy ra giữa đường hay vẫy tay yêu cầu xe dừng.' },
      { q: 'Đường vắng, không có xe nào, nhưng đèn đang đỏ. Em đi cùng mẹ. Em nên làm gì?', a: 'Em vẫn cùng mẹ đứng đợi đèn xanh rồi mới qua, vì tuân thủ đèn tín hiệu là quy tắc an toàn, không nên vượt đèn đỏ dù đường vắng.' },
    ],
  },

  'P2HDTN-w20-quiz': {
    topic: 'An toàn giao thông (2): Đi bộ qua đường',
    intro: 'Qua đường đúng cách giúp em an toàn mỗi ngày đến trường. Cùng cô học quy tắc qua đường nhé các em!',
    objectives: [
      'Biết qua đường đúng nơi có vạch kẻ.',
      'Biết quan sát trái – phải – trái trước khi qua.',
      'Biết đi bộ trên vỉa hè.',
    ],
    theory: [
      { h: 'Qua đường ở đâu?' },
      { p: 'Em qua đường tại vạch kẻ trắng dành cho người đi bộ, không qua bừa giữa đường.' },
      { h: 'Quy tắc qua đường' },
      { ul: ['Quan sát trái – phải – trái và lắng nghe', 'Đi với tốc độ vừa phải, không chạy không dừng giữa đường', 'Tốt nhất đi cùng người lớn'] },
      { note: 'Khi đi bộ trên đường, em đi trên vỉa hè (hoặc sát lề nếu không có vỉa hè). Không vừa qua đường vừa xem điện thoại hay đeo tai nghe to.' },
    ],
    examples: [
      { q: 'Em cần qua một con đường để đến trường. Em nên làm gì?', a: 'Em đến chỗ có vạch kẻ trắng cho người đi bộ, dừng lại quan sát trái – phải – trái, khi an toàn thì đi vừa phải sang bên kia, tốt nhất là nắm tay người lớn.' },
      { q: 'Bạn rủ em vừa đi vừa nghe nhạc bằng tai nghe khi qua đường. Em nên làm gì?', a: 'Em từ chối và khuyên bạn bỏ tai nghe khi qua đường, vì nghe nhạc to làm mình không nghe được tiếng xe, rất nguy hiểm.' },
    ],
  },

  'P2HDTN-w21-quiz': {
    topic: 'An toàn giao thông (3): Đội mũ bảo hiểm',
    intro: 'Mũ bảo hiểm là người bạn bảo vệ cái đầu của em khi đi xe máy. Cùng cô học cách đội mũ đúng nhé!',
    objectives: [
      'Biết phải đội mũ bảo hiểm khi ngồi sau xe máy.',
      'Biết cài quai mũ đúng cách.',
      'Biết ngồi xe an toàn.',
    ],
    theory: [
      { h: 'Vì sao phải đội mũ?' },
      { p: 'Mũ bảo hiểm bảo vệ đầu khi không may va đập. Khi ngồi sau xe máy, em phải đội mũ đúng cỡ và cài quai.' },
      { h: 'Đội mũ đúng cách' },
      { ul: ['Chọn mũ vừa đầu, không quá rộng', 'Cài quai vừa khít, lọt một ngón tay', 'Ngồi yên, ôm chắc eo hoặc vai người lái'] },
      { note: 'Nếu mũ bị nứt vỡ, em báo bố mẹ thay mũ mới, vì mũ vỡ không còn bảo vệ được nữa.' },
    ],
    examples: [
      { q: 'Bố chở em đi học bằng xe máy. Trước khi đi em nên làm gì?', a: 'Em đội mũ bảo hiểm đúng cỡ và cài quai vừa khít (lọt một ngón tay), rồi ngồi yên sau lưng bố, ôm chắc eo bố.' },
      { q: 'Em phát hiện mũ bảo hiểm của mình bị nứt một vết. Em nên làm gì?', a: 'Em báo bố mẹ để thay mũ mới, không dùng tiếp hay dán băng dính, vì mũ nứt vỡ không bảo vệ được đầu nữa.' },
    ],
  },

  'P2HDTN-w22-quiz': {
    topic: 'Phong tục Tết — lì xì, chúc Tết, dọn nhà, mâm ngũ quả',
    intro: 'Tết đến rồi! Đây là dịp sum họp đầm ấm nhất trong năm. Cùng cô tìm hiểu những phong tục đẹp ngày Tết nhé các em!',
    objectives: [
      'Hiểu Tết Nguyên đán là Tết cổ truyền của dân tộc.',
      'Biết nhận lì xì và chúc Tết lễ phép.',
      'Biết phong tục dọn nhà, mâm ngũ quả, bánh chưng.',
    ],
    theory: [
      { h: 'Tết Nguyên đán là gì?' },
      { p: 'Tết Nguyên đán là Tết cổ truyền của người Việt Nam, tính theo Âm lịch. Đây là dịp gia đình sum họp, mọi người chúc nhau những điều tốt đẹp.' },
      { h: 'Những phong tục đẹp' },
      { ul: ['Dọn dẹp nhà cửa sạch sẽ đón Tết', 'Bày mâm ngũ quả (năm loại quả): miền Bắc thường có chuối, bưởi, quýt, đào, hồng', 'Gói và ăn bánh chưng vuông tượng trưng cho Đất', 'Mặc quần áo mới đi chúc Tết'] },
      { note: 'Khi được lì xì, em nhận bằng hai tay, cảm ơn và chúc Tết. Lì xì mang ý nghĩa chúc may mắn, bình an, không phải để khoe tiền. Ngày Tết kiêng cãi nhau, làm đổ vỡ.' },
    ],
    examples: [
      { q: 'Ngày mồng Một Tết, ông nội lì xì cho em. Em nên làm gì?', a: 'Em đưa hai tay nhận phong bao và nói: "Cháu cảm ơn ông ạ. Cháu chúc ông sống lâu, mạnh khoẻ." Em không mở phong bao ngay trước mặt ông hay chê ít.' },
      { q: 'Trước Tết, bố mẹ đang dọn dẹp nhà cửa. Em nên làm gì?', a: 'Em giúp lau bàn, quét nhà, sắp xếp đồ đạc gọn gàng để cùng gia đình đón Tết. Dọn nhà đón Tết là một phong tục đẹp.' },
    ],
  },

  'P2HDTN-w23-quiz': {
    topic: 'Tiết kiệm nước',
    intro: 'Nước sạch rất quý, không phải là vô tận đâu các em. Cùng cô học cách tiết kiệm nước mỗi ngày nhé!',
    objectives: [
      'Biết các cách tiết kiệm nước hằng ngày.',
      'Biết báo người lớn khi vòi nước bị rò.',
      'Hiểu nước sạch là tài nguyên có hạn.',
    ],
    theory: [
      { h: 'Tiết kiệm nước thế nào?' },
      { ul: ['Đánh răng: hứng nước vào cốc, tắt vòi khi chải', 'Rửa rau: dùng chậu hứng nước thay vì để vòi chảy', 'Khoá vòi khi không dùng'] },
      { h: 'Tận dụng nước' },
      { p: 'Nước vo gạo có thể tận dụng để tưới cây rất tốt. Vòi nước bị rò rỉ thì báo bố mẹ sửa ngay để không lãng phí.' },
      { note: 'Nước sạch là tài nguyên có hạn. Mỗi giọt nước tiết kiệm hôm nay là một việc tốt cho gia đình và Trái Đất.' },
    ],
    examples: [
      { q: 'Em đang đánh răng. Làm thế nào để tiết kiệm nước?', a: 'Em hứng nước vào cốc để súc miệng và khoá vòi trong lúc chải răng, chỉ mở vòi khi cần. Không để vòi chảy suốt thời gian đánh răng.' },
      { q: 'Em phát hiện vòi nước trong bếp bị rò, nước nhỏ giọt liên tục. Em nên làm gì?', a: 'Em báo ngay cho bố mẹ để sửa vòi, không mặc kệ, vì nước nhỏ giọt cả ngày sẽ lãng phí rất nhiều nước sạch.' },
    ],
  },

  'P2HDTN-w24-quiz': {
    topic: 'Tiết kiệm điện',
    intro: 'Tắt một bóng đèn không dùng cũng là bảo vệ Trái Đất đấy! Cùng cô học cách tiết kiệm điện nhé các em.',
    objectives: [
      'Biết tắt thiết bị điện khi không dùng.',
      'Biết tận dụng ánh sáng tự nhiên.',
      'Hiểu lợi ích của tiết kiệm điện.',
    ],
    theory: [
      { h: 'Tiết kiệm điện thế nào?' },
      { ul: ['Ra khỏi phòng: tắt đèn, tắt quạt', 'Xem xong ti vi: tắt nguồn hoàn toàn', 'Ban ngày trời sáng: mở cửa tận dụng ánh sáng tự nhiên', 'Lấy đồ trong tủ lạnh nhanh rồi đóng cửa'] },
      { h: 'Vì sao cần tiết kiệm điện?' },
      { p: 'Tiết kiệm điện giúp giảm hoá đơn tiền điện cho gia đình và góp phần bảo vệ môi trường.' },
      { note: 'Không sạc điện thoại cả ngày khi pin đã đầy, không để máy chạy suốt đêm khi không dùng.' },
    ],
    examples: [
      { q: 'Em ra khỏi phòng học để đi ăn cơm. Trong phòng có đèn và quạt đang bật. Em nên làm gì?', a: 'Em tắt đèn và quạt trước khi ra khỏi phòng, vì không có ai trong phòng thì không cần dùng điện nữa.' },
      { q: 'Ban ngày trời sáng nhưng phòng hơi tối nên em định bật hết đèn. Em nên làm gì?', a: 'Em mở rèm và cửa sổ để tận dụng ánh sáng mặt trời tự nhiên thay vì bật nhiều đèn. Vừa sáng vừa tiết kiệm điện.' },
    ],
  },

  'P2HDTN-w25-quiz': {
    topic: 'Phân loại rác',
    intro: 'Phân loại rác đúng cách giúp môi trường sạch và bảo vệ sức khoẻ. Cùng cô học cách phân loại rác nhé các em!',
    objectives: [
      'Biết phân biệt rác hữu cơ, rác tái chế, rác nguy hại.',
      'Biết bỏ rác đúng nơi và phân loại đơn giản tại nhà.',
      'Hiểu hậu quả của vứt rác bừa bãi.',
    ],
    theory: [
      { h: 'Các loại rác' },
      { ul: ['Rác hữu cơ: vỏ trái cây, rau củ thừa, cơm thừa (dễ phân huỷ)', 'Rác tái chế: giấy, vỏ chai nhựa, lon nhôm (dùng lại được)', 'Rác nguy hại: pin cũ (chứa kim loại nặng, cần thu gom riêng)'] },
      { h: 'Em làm được gì?' },
      { p: 'Em bỏ rác đúng nơi quy định và phân loại đơn giản tại nhà. Uống xong chai nhựa thì bóp dẹp và bỏ vào thùng rác tái chế.' },
      { note: 'Vứt rác bừa bãi gây ô nhiễm môi trường, sinh ruồi muỗi và bệnh tật. Mỗi việc nhỏ của em đều quan trọng.' },
    ],
    examples: [
      { q: 'Em vừa uống xong một chai nước nhựa. Em nên bỏ vào đâu?', a: 'Em bóp dẹp chai nhựa và bỏ vào thùng rác tái chế, không vứt ra đường hay ném xuống ao. Chai nhựa có thể tái chế dùng lại.' },
      { q: 'Nhà em có một viên pin cũ đã hỏng. Em nên xử lí thế nào?', a: 'Pin cũ là rác nguy hại nên em không bỏ chung với rác thường. Em để riêng và nhờ người lớn mang đến điểm thu gom pin cũ.' },
    ],
  },

  'P2HDTN-w26-quiz': {
    topic: 'Trồng cây xanh trong lớp/nhà',
    intro: 'Trồng và chăm cây xanh giúp không khí trong lành và rèn cho em tính kiên trì. Cùng cô trồng cây nhé!',
    objectives: [
      'Hiểu lợi ích của cây xanh với không khí.',
      'Biết cách chăm sóc cây.',
      'Biết bảo vệ cây và yêu thiên nhiên.',
    ],
    theory: [
      { h: 'Cây xanh giúp gì?' },
      { p: 'Cây xanh quang hợp, cung cấp khí ô-xy và làm không khí trong lành hơn. Cây cũng làm lớp học, ngôi nhà thêm đẹp.' },
      { h: 'Chăm cây thế nào?' },
      { ul: ['Tưới nước đều đặn, vừa đủ', 'Đặt cây nơi có ánh sáng', 'Chọn cây nhỏ, dễ chăm, an toàn cho lớp học'] },
      { note: 'Lá vàng rụng có thể ủ làm phân bón cho cây. Trồng cây rèn cho em tính kiên trì và lòng yêu thiên nhiên.' },
    ],
    examples: [
      { q: 'Lớp em có một chậu cây nhỏ và đến lượt em chăm sóc. Em nên làm gì?', a: 'Em tưới nước vừa đủ cho cây mỗi ngày, đặt cây nơi có ánh sáng, nhặt lá vàng rụng. Em chăm cây kiên trì để cây luôn xanh tốt.' },
      { q: 'Em thấy bạn ngắt lá cây trong lớp để chơi. Em nên làm gì?', a: 'Em khuyên bạn dừng lại: "Đừng ngắt lá, cây sẽ đau và xấu đi." Nếu bạn không nghe, em báo cô giáo để cùng bảo vệ cây.' },
    ],
  },

  'P2HDTN-w27-quiz': {
    topic: 'Yêu cây cối, động vật xung quanh',
    intro: 'Cây cối và động vật là những người bạn của chúng ta. Cùng cô học cách yêu thương và bảo vệ chúng nhé các em!',
    objectives: [
      'Biết bảo vệ hoa, cây cỏ.',
      'Biết yêu thương và chăm sóc động vật.',
      'Hiểu cây cối, động vật là bạn của con người.',
    ],
    theory: [
      { h: 'Yêu cây cối' },
      { p: 'Em không dẫm lên hoa, không bứt lá bẻ cành. Khi thấy bạn làm vậy, em nhẹ nhàng khuyên bạn dừng lại.' },
      { h: 'Yêu thương động vật' },
      { ul: ['Cho thú nuôi ăn đúng giờ', 'Không đánh, không bỏ đói, không nhốt chật', 'Thấy con vật bị thương: báo người lớn giúp', 'Không bắt côn trùng làm đồ chơi'] },
      { note: 'Cây xanh và động vật là bạn của con người, cần được yêu thương và bảo vệ.' },
    ],
    examples: [
      { q: 'Em thấy bạn bắt một con bọ rùa để chơi rồi định vứt đi. Em nên làm gì?', a: 'Em khuyên bạn thả con bọ rùa về với thiên nhiên, vì côn trùng cũng là sinh vật sống. Em không cùng bắt hay cổ vũ bạn.' },
      { q: 'Em thấy một chú chó hàng xóm bị thương ở chân. Em nên làm gì?', a: 'Em báo cho người lớn (bố mẹ hoặc chủ chú chó) để họ giúp chữa cho chú chó. Em không trêu chọc hay đến gần khi chưa có người lớn.' },
    ],
  },

  'P2HDTN-w28-quiz': {
    topic: 'Bảo vệ môi trường khu phố',
    intro: 'Khu phố sạch đẹp là nhờ mọi người cùng chung tay, trong đó có cả em. Cùng cô học cách bảo vệ khu phố nhé!',
    objectives: [
      'Hiểu giữ khu phố sạch là trách nhiệm chung.',
      'Biết bỏ rác đúng chỗ khi đi ngoài đường.',
      'Biết tham gia hoạt động làm sạch cộng đồng.',
    ],
    theory: [
      { h: 'Khu phố sạch là của chung' },
      { p: 'Khu phố sạch đẹp là nhờ mọi người cùng giữ gìn, không phải chỉ một mình bác lao công.' },
      { h: 'Em làm được gì?' },
      { ul: ['Vỏ kẹo, vỏ bánh: cho vào túi mang về bỏ thùng rác', 'Tham gia "Ngày Chủ nhật xanh" cùng bố mẹ', 'Nhặt rác bỏ vào thùng (nếu an toàn) và nhắc người lớn'] },
      { note: 'Khu phố sạch giúp mọi người khoẻ mạnh. Bảo vệ môi trường là việc của tất cả mọi người, kể cả các bạn nhỏ.' },
    ],
    examples: [
      { q: 'Em đi dạo với mẹ và ăn xong một chiếc kẹo, nhưng quanh đó không có thùng rác. Em nên làm gì?', a: 'Em bỏ vỏ kẹo vào túi và mang về nhà bỏ vào thùng rác, không vứt xuống cống hay ném vào bụi cây.' },
      { q: 'Khu phố tổ chức "Ngày Chủ nhật xanh" để dọn vệ sinh. Em nên làm gì?', a: 'Em cùng bố mẹ tham gia dọn dẹp, nhặt rác, quét đường trong khả năng của mình, không đứng nhìn hay ngủ cả ngày.' },
    ],
  },

  'P2HDTN-w29-quiz': {
    topic: 'Nghề nghiệp (1): Bác sĩ — chữa bệnh',
    intro: 'Bác sĩ là người chăm sóc sức khoẻ cho mọi người. Cùng cô tìm hiểu về nghề bác sĩ nhé các em!',
    objectives: [
      'Biết công việc và nơi làm việc của bác sĩ.',
      'Biết cách ứng xử khi đi khám bệnh.',
      'Hiểu đức tính cần có của bác sĩ.',
    ],
    theory: [
      { h: 'Bác sĩ làm gì?' },
      { p: 'Bác sĩ khám và chữa bệnh cho mọi người, giúp người ốm khoẻ lại. Bác sĩ thường làm việc ở bệnh viện, phòng khám.' },
      { h: 'Để thành bác sĩ' },
      { p: 'Muốn làm bác sĩ phải học giỏi và học rất nhiều năm về y học.' },
      { ul: ['Đức tính cần có: yêu thương người bệnh', 'Kiên nhẫn, cẩn thận'] },
      { note: 'Khi đi khám, em trả lời thật về chỗ đau để bác sĩ chữa đúng bệnh. Gặp bác sĩ ngoài đường em chào lễ phép.' },
    ],
    examples: [
      { q: 'Em bị đau bụng và mẹ đưa đi khám bác sĩ. Khi bác sĩ hỏi, em nên làm gì?', a: 'Em trả lời thật về chỗ đau và cảm giác của mình, ví dụ: "Cháu đau bụng từ sáng ạ", để bác sĩ chẩn đoán đúng và cho thuốc phù hợp.' },
      { q: 'Em gặp bác sĩ hàng xóm đi ngoài đường. Em nên làm gì?', a: 'Em chào lễ phép: "Cháu chào bác sĩ ạ." Bác sĩ cũng là người lớn đáng kính, em chào hỏi như với mọi người lớn khác.' },
    ],
  },

  'P2HDTN-w30-quiz': {
    topic: 'Nghề nghiệp (2): Giáo viên — dạy học',
    intro: 'Giáo viên là người dạy em kiến thức và dạy em làm người. Cùng cô tìm hiểu về nghề giáo viên nhé!',
    objectives: [
      'Biết công việc của giáo viên.',
      'Biết cách thể hiện lòng biết ơn thầy cô.',
      'Biết ngày Nhà giáo Việt Nam.',
    ],
    theory: [
      { h: 'Giáo viên làm gì?' },
      { p: 'Giáo viên dạy học và dạy em cách làm người tốt. Muốn làm giáo viên phải học sư phạm, giỏi chuyên môn và yêu trẻ.' },
      { h: 'Biết ơn thầy cô' },
      { ul: ['Học chăm chỉ, lễ phép', 'Chú ý nghe giảng, ghi chép', 'Chúc mừng thầy cô ngày 20/11 — Ngày Nhà giáo Việt Nam'] },
      { note: 'Đức tính của giáo viên: kiên nhẫn, công bằng, yêu thương học trò.' },
    ],
    examples: [
      { q: 'Sắp đến ngày 20/11. Em muốn thể hiện lòng biết ơn cô giáo. Em nên làm gì?', a: 'Em học chăm, ngoan ngoãn, lễ phép và có thể tự làm một tấm thiệp chúc mừng cô: "Em chúc cô luôn mạnh khoẻ. Em cảm ơn cô đã dạy em." Đó là món quà ý nghĩa nhất.' },
      { q: 'Trong giờ học, cô đang giảng bài. Em nên làm gì để tỏ lòng tôn trọng cô?', a: 'Em chú ý lắng nghe, ghi chép bài đầy đủ, không nói chuyện riêng hay ngủ gật. Chăm chú nghe giảng chính là cách tôn trọng công sức của cô.' },
    ],
  },

  'P2HDTN-w31-quiz': {
    topic: 'Nghề nghiệp (3): Nông dân — trồng lúa',
    intro: 'Bát cơm em ăn mỗi ngày là nhờ công sức vất vả của bác nông dân. Cùng cô tìm hiểu nghề nông nhé các em!',
    objectives: [
      'Biết công việc của nông dân.',
      'Hiểu hạt gạo từ đâu mà có.',
      'Biết trân trọng công sức nông dân, không lãng phí thức ăn.',
    ],
    theory: [
      { h: 'Nông dân làm gì?' },
      { p: 'Nông dân trồng lúa, trồng rau, nuôi cá, làm ra lương thực cho mọi người. Hạt gạo em ăn hằng ngày là từ cây lúa do nông dân vất vả trồng nên.' },
      { h: 'Nghề nông vất vả' },
      { p: 'Nông dân làm việc ngoài đồng dưới nắng mưa thất thường, rất vất vả mới có hạt gạo.' },
      { note: 'Câu ca dao nhắc ta trân trọng nông dân: "Ai ơi bưng bát cơm đầy / Dẻo thơm một hạt, đắng cay muôn phần." Em hãy ăn hết cơm, không để rơi vãi.' },
    ],
    examples: [
      { q: 'Bữa cơm em ăn còn thừa một ít trong bát. Em nên làm gì?', a: 'Em cố gắng ăn hết phần cơm trong bát, không để rơi vãi hay đổ đi. Đó là cách trân trọng công sức vất vả của bác nông dân.' },
      { q: 'Một bạn chê "cơm chán, không muốn ăn". Em nên nói gì với bạn?', a: 'Em nhẹ nhàng nói: "Hạt gạo này là nhờ bác nông dân vất vả làm ra đấy, mình nên quý và ăn hết." Em không cùng bạn chê bai hay bỏ phí cơm.' },
    ],
  },

  'P2HDTN-w32-quiz': {
    topic: 'Nghề nghiệp (4): Công an — giữ an ninh',
    intro: 'Chú công an giữ cho cuộc sống bình yên và bảo vệ mọi người. Cùng cô tìm hiểu về nghề công an nhé các em!',
    objectives: [
      'Biết công việc của công an.',
      'Biết tìm công an giúp đỡ khi bị lạc.',
      'Biết số điện thoại khẩn cấp và cảnh giác với người lạ.',
    ],
    theory: [
      { h: 'Công an làm gì?' },
      { p: 'Công an giữ gìn an ninh và bảo vệ nhân dân. Khi bị lạc đường, em tìm chú công an hoặc bảo vệ để nhờ giúp đỡ.' },
      { h: 'Số điện thoại khẩn cấp' },
      { ul: ['113 — Công an', '114 — Cứu hoả', '115 — Cấp cứu'] },
      { note: 'Không đi theo người lạ dù họ nói gì. Đức tính của công an: dũng cảm, kỉ luật, công bằng. Gặp chú công an em chào lễ phép.' },
    ],
    examples: [
      { q: 'Em bị lạc bố mẹ ở siêu thị đông người. Em nên làm gì?', a: 'Em bình tĩnh, đứng yên một chỗ hoặc tìm chú công an, chú bảo vệ để nhờ giúp tìm bố mẹ. Em không khóc chạy lung tung hay đi theo người lạ.' },
      { q: 'Một người lạ nói "Đi theo chú, bố mẹ nhờ chú đón cháu" mà không có bố mẹ ở đó. Em nên làm gì?', a: 'Em không đi theo người lạ. Em chạy về phía đông người, tìm chú công an hoặc người lớn tin tưởng để báo, không cho người lạ địa chỉ nhà.' },
    ],
  },

  'P2HDTN-w33-quiz': {
    topic: 'Nghề nghiệp (5): Kĩ sư — xây dựng, sửa máy móc',
    intro: 'Ngôi nhà em ở, cây cầu em qua đều có công của kĩ sư. Cùng cô tìm hiểu về nghề kĩ sư nhé các em!',
    objectives: [
      'Biết công việc của kĩ sư.',
      'Biết những môn học nền tảng để làm kĩ sư.',
      'Biết giữ an toàn khi đi qua công trình.',
    ],
    theory: [
      { h: 'Kĩ sư làm gì?' },
      { p: 'Kĩ sư thiết kế, xây dựng nhà cửa, cầu đường và sửa chữa máy móc. Ngôi nhà em ở là do kĩ sư xây dựng và kiến trúc sư thiết kế.' },
      { h: 'Để thành kĩ sư' },
      { ul: ['Học giỏi Toán và Khoa học', 'Đức tính: cẩn thận, sáng tạo, ham học'] },
      { note: 'Mỗi nghề đều quan trọng và đáng quý như nhau. Khi đi qua công trình xây dựng, em đi xa ra, cẩn thận vật rơi.' },
    ],
    examples: [
      { q: 'Trên đường đi học, em đi ngang một công trình đang xây dựng. Em nên làm gì?', a: 'Em đi xa khỏi công trình, không đứng sát hay trèo lên giàn giáo, đề phòng vật liệu rơi. Nếu được, em đội mũ và đi nhanh qua.' },
      { q: 'Bạn em nói "nghề kĩ sư oai hơn nghề nông". Em nghĩ sao?', a: 'Em không đồng ý. Mỗi nghề đều quan trọng và đáng quý: kĩ sư xây nhà, nông dân làm ra gạo, ai cũng có ích cho xã hội. Không nghề nào hơn nghề nào.' },
    ],
  },

  'P2HDTN-w34-quiz': {
    topic: 'Em ước mơ làm gì?',
    intro: 'Mỗi bạn nhỏ đều có một ước mơ đẹp. Cùng cô chia sẻ ước mơ và cách thực hiện ước mơ nhé các em!',
    objectives: [
      'Hiểu ước mơ là gì.',
      'Biết tôn trọng ước mơ của bạn.',
      'Biết cần học tập, rèn luyện để thực hiện ước mơ.',
    ],
    theory: [
      { h: 'Ước mơ là gì?' },
      { p: 'Ước mơ là điều em mong muốn đạt được trong tương lai, như trở thành bác sĩ, giáo viên, phi hành gia… Ước mơ giúp em có hướng phấn đấu.' },
      { h: 'Thực hiện ước mơ' },
      { p: 'Để thực hiện ước mơ, em cần học chăm, rèn luyện và kiên trì, không chỉ ngồi chờ hay mơ rồi quên.' },
      { note: 'Mỗi người có ước mơ riêng. Em tôn trọng ước mơ của bạn dù khác mình. Ước mơ phải tích cực, không vi phạm pháp luật.' },
    ],
    examples: [
      { q: 'Bạn em ước mơ làm ca sĩ nhưng hát chưa hay lắm. Em nên nói gì với bạn?', a: 'Em động viên bạn: "Cậu cứ luyện tập chăm chỉ thì sẽ hát hay hơn." Em không cười chê hay bảo bạn bỏ ước mơ.' },
      { q: 'Em ước mơ trở thành bác sĩ. Em nên làm gì ngay từ bây giờ?', a: 'Em học chăm các môn học, rèn tính kiên trì, cẩn thận và biết yêu thương người khác — đó là những điều cần để thực hiện ước mơ làm bác sĩ.' },
    ],
  },

  'P2HDTN-w35-quiz': {
    topic: 'Sinh hoạt câu lạc bộ — em chọn hoạt động yêu thích',
    intro: 'Câu lạc bộ là nơi em gặp các bạn cùng sở thích và phát triển tài năng. Cùng cô tìm hiểu nhé các em!',
    objectives: [
      'Hiểu câu lạc bộ là gì.',
      'Biết chọn câu lạc bộ theo sở thích, năng lực.',
      'Biết tham gia tích cực, đoàn kết.',
    ],
    theory: [
      { h: 'Câu lạc bộ là gì?' },
      { p: 'Câu lạc bộ (CLB) là nhóm các bạn có cùng sở thích sinh hoạt định kì cùng nhau, như CLB đọc sách, CLB cờ vua, CLB bóng đá.' },
      { h: 'Chọn và tham gia CLB' },
      { ul: ['Chọn CLB theo sở thích và năng lực của mình', 'Trong CLB: đoàn kết, tích cực tham gia', 'Nếu không hợp: trao đổi với cô để xin chuyển'] },
      { note: 'Tham gia CLB giúp em phát triển sở thích, kết bạn mới và tự tin hơn.' },
    ],
    examples: [
      { q: 'Em rất thích đọc truyện và sách. Em nên chọn câu lạc bộ nào?', a: 'Em chọn CLB đọc sách vì phù hợp với sở thích của mình, không nên chọn theo bạn thân hay theo bố mẹ ép. Chọn đúng sở thích em sẽ tham gia vui và hào hứng hơn.' },
      { q: 'Em đã vào CLB cờ vua nhưng thấy mình không hợp. Em nên làm gì?', a: 'Em trao đổi với cô phụ trách và xin chuyển sang CLB phù hợp hơn, không bỏ ngang giữa chừng hay phá rối lớp CLB.' },
    ],
  },

  'P2HDTN-w36-quiz': {
    topic: 'Tổng kết cuối năm — chia sẻ trải nghiệm',
    intro: 'Một năm học đầy ý nghĩa sắp khép lại! Cùng cô nhìn lại tất cả những điều các em đã học và đặt mục tiêu cho năm mới nhé.',
    objectives: [
      'Tự nhìn lại những điều đã học cả năm.',
      'Biết chia sẻ trải nghiệm và lắng nghe bạn.',
      'Biết đặt mục tiêu và nói lời cảm ơn.',
    ],
    theory: [
      { h: 'Cả năm em đã học được gì?' },
      { ul: ['Bản thân: tự phục vụ — vệ sinh, ăn mặc, soạn cặp', 'Gia đình: yêu thương, giúp việc nhỏ, lễ phép với ông bà', 'Nhà trường: trực nhật, giữ vệ sinh, lễ phép, giúp bạn', 'Cộng đồng & môi trường: phân loại rác, tiết kiệm điện nước, an toàn giao thông', 'Nghề nghiệp: bác sĩ, giáo viên, nông dân, công an, kĩ sư'] },
      { h: 'Chia sẻ và đặt mục tiêu' },
      { p: 'Khi chia sẻ trải nghiệm trước lớp, em nói rõ ràng, tự tin và lắng nghe, vỗ tay khích lệ khi bạn chia sẻ. Em đặt mục tiêu cho Lớp 3: tự lập hơn, học giỏi hơn, yêu thương mọi người hơn.' },
      { note: 'Cuối năm, em nói lời cảm ơn: "Em cảm ơn thầy cô và các bạn đã giúp em trong năm học vừa qua." Biết ơn là một phẩm chất đẹp.' },
    ],
    examples: [
      { q: 'Đến lượt em chia sẻ kỉ niệm đáng nhớ nhất trong năm học trước lớp. Em nên làm gì?', a: 'Em kể một kỉ niệm tích cực, rõ ràng và tự tin, ví dụ: "Em nhớ nhất buổi cả lớp cùng trồng cây trong sân trường." Em không kể chuyện đánh nhau hay trốn học.' },
      { q: 'Cuối năm học, em muốn nói lời chia tay với thầy cô và các bạn. Em nên nói gì?', a: 'Em nói lời cảm ơn chân thành: "Em cảm ơn thầy cô và các bạn đã giúp em trong năm học vừa qua. Em chúc mọi người một mùa hè vui vẻ." Em cũng đặt mục tiêu cho Lớp 3 tiến bộ hơn.' },
    ],
  },
};
