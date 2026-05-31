// ============================================================
// Lớp 6 · LỊCH SỬ & ĐỊA LÍ — Lý thuyết 36 tuần (GDPT 2018)
// Key: "S6LSDL-wNN-quiz". HK1 (T1–18) Lịch sử, HK2 (T19–36) Địa lí.
// Bám SGK Kết nối tri thức / Cánh diều / Chân trời sáng tạo.
// ============================================================

export const S6LSDL_LESSONS = {
  // ============================================================
  // ============== HK1 — PHẦN LỊCH SỬ (T1–18) ==================
  // ============================================================

  'S6LSDL-w01-quiz': {
    topic: 'Vì sao phải học Lịch sử? Cách tính thời gian',
    intro: 'Các em thân mến, mở đầu chương trình THCS, chúng ta cùng đi tìm câu trả lời cho câu hỏi: Lịch sử là gì, vì sao phải học, và người xưa đã đo đếm thời gian như thế nào.',
    objectives: [
      'Hiểu được khái niệm "Lịch sử" và ý nghĩa của việc học Lịch sử.',
      'Phân biệt được âm lịch, dương lịch và Công lịch.',
      'Biết cách tính khoảng cách thời gian giữa các sự kiện theo Công nguyên (CN) và Trước Công nguyên (TCN).',
    ],
    theory: [
      { h: 'Lịch sử là gì?' },
      { p: 'Lịch sử là tất cả những gì đã diễn ra trong quá khứ. Một cuộc khởi nghĩa hôm qua, một ngôi đình làng được dựng cách đây 200 năm, hay những công cụ đá người xưa để lại — tất cả đều thuộc về lịch sử. Môn Lịch sử ở trường giúp chúng ta tìm hiểu, phục dựng và rút ra bài học từ những điều ấy.' },
      { h: 'Vì sao phải học Lịch sử?' },
      { ul: [
        'Biết về cội nguồn dân tộc, gia đình, quê hương — "uống nước nhớ nguồn".',
        'Rút ra bài học từ thành công và thất bại của người đi trước.',
        'Hiểu hiện tại đang ở đâu, từ đó định hướng cho tương lai.',
        'Bồi đắp lòng yêu nước, niềm tự hào dân tộc và ý thức công dân.',
      ] },
      { h: 'Cách tính thời gian trong lịch sử' },
      { p: 'Để ghi lại sự kiện, người xưa phải tìm cách đo thời gian. Họ quan sát các thiên thể trên bầu trời để làm ra lịch. Có hai loại lịch chính.' },
      { ul: [
        'Âm lịch: dựa vào chu kỳ Mặt Trăng quay quanh Trái Đất (~29,5 ngày/tháng). Người Việt vẫn dùng âm lịch trong Tết, giỗ chạp, lễ hội làng.',
        'Dương lịch (Công lịch): dựa vào chu kỳ Trái Đất quay quanh Mặt Trời (~365,25 ngày/năm). Đây là lịch chung của thế giới ngày nay.',
      ] },
      { h: 'Công nguyên, trước Công nguyên — cách quy ước' },
      { p: 'Người ta lấy năm Chúa Giê-su ra đời (theo truyền thuyết) làm năm 1 sau Công nguyên (SCN, hay CN). Trước mốc đó gọi là trước Công nguyên (TCN). Các đơn vị lớn hơn: 1 thập kỉ = 10 năm; 1 thế kỉ = 100 năm; 1 thiên niên kỉ = 1000 năm.' },
      { note: 'Mẹo tính khoảng cách năm: nếu hai mốc cùng phía CN → trừ; nếu khác phía (một bên TCN, một bên SCN) → cộng. Ví dụ: từ năm 179 TCN đến 2024 SCN cách 179 + 2024 = 2203 năm.' },
    ],
    examples: [
      { q: 'Năm 938 (Ngô Quyền thắng quân Nam Hán) thuộc thế kỉ thứ mấy?', a: 'Năm có 3 chữ số 938. Lấy 938 ÷ 100 = 9 dư 38 → đang ở thế kỉ thứ 10 (vì thế kỉ X gồm các năm 901–1000).' },
      { q: 'Hai Bà Trưng khởi nghĩa năm 40, cách năm 2024 bao nhiêu năm?', a: 'Hai mốc cùng nằm sau CN nên trừ: 2024 − 40 = 1984 năm.' },
      { q: 'Vì sao nói "Học lịch sử là để hiểu hiện tại"?', a: 'Vì những gì ta đang sống hôm nay (ngôn ngữ, phong tục, ranh giới đất nước…) đều là kết quả của quá khứ. Hiểu quá khứ giúp lý giải hiện tại và tránh lặp lại sai lầm.' },
    ],
  },

  'S6LSDL-w02-quiz': {
    topic: 'Nguồn sử liệu — dựa vào đâu để biết về quá khứ?',
    intro: 'Người xưa đã đi xa rồi, vậy hôm nay nhà sử học dựa vào đâu để dựng lại được câu chuyện về họ? Bài học này giúp các em làm quen với khái niệm "nguồn sử liệu".',
    objectives: [
      'Phân biệt được 3 loại tư liệu lịch sử: hiện vật, chữ viết, truyền miệng.',
      'Hiểu khái niệm tư liệu gốc và vai trò của tư liệu gốc.',
      'Biết một số phương pháp khoa học để xác định niên đại hiện vật.',
    ],
    theory: [
      { h: 'Tư liệu lịch sử là gì?' },
      { p: 'Tư liệu (sử liệu) là tất cả những gì còn lại giúp ta hiểu về quá khứ: một mảnh gốm, một bia đá, một câu chuyện kể, một cuốn sách… Nhà sử học so sánh nhiều nguồn để dựng lại câu chuyện đáng tin nhất.' },
      { h: 'Ba loại tư liệu chính' },
      { ul: [
        'Tư liệu hiện vật: đồ vật người xưa để lại — trống đồng Đông Sơn, rìu đá Hòa Bình, gạch ngói Thăng Long.',
        'Tư liệu chữ viết: sách, bia, sắc phong, gia phả — như "Đại Việt sử ký toàn thư", văn bia Văn Miếu.',
        'Tư liệu truyền miệng: truyền thuyết, ca dao, tục ngữ, lời kể của người già — như "Thánh Gióng", "Sơn Tinh – Thủy Tinh".',
      ] },
      { h: 'Tư liệu gốc — đáng tin nhất' },
      { p: 'Tư liệu gốc là tư liệu trực tiếp ghi lại sự kiện ngay khi nó vừa xảy ra, hoặc do nhân chứng làm ra. Một tấm bia đời Lý nói về việc dựng chùa năm ấy là tư liệu gốc. Sách chép lại sau hàng trăm năm chỉ là tư liệu thứ cấp.' },
      { h: 'Khoa học nào "đào quá khứ" lên?' },
      { p: 'Khảo cổ học là ngành chuyên khai quật, phân tích di tích — di vật người xưa. Nhờ khảo cổ, ta biết được người Việt đã sống trên dải đất hình chữ S từ hàng vạn năm trước.' },
      { h: 'Xác định tuổi của hiện vật' },
      { ul: [
        'Phương pháp đồng vị cacbon (C14): đo lượng cacbon phóng xạ còn lại trong hiện vật hữu cơ (xương, gỗ, tro).',
        'Phân tích lớp địa tầng: lớp đất sâu hơn thường cổ hơn lớp trên.',
        'So sánh hoa văn, kiểu dáng với các hiện vật đã được xác định niên đại.',
      ] },
      { note: 'Đối với truyền thuyết, ta KHÔNG coi mọi chi tiết là sự thật, nhưng cũng không bỏ đi. Phía sau "bọc trăm trứng" của Lạc Long Quân – Âu Cơ là ý thức "cùng nguồn gốc" rất thật của người Việt.' },
    ],
    examples: [
      { q: 'Trống đồng Ngọc Lũ và truyền thuyết Lạc Long Quân khác nhau ở chỗ nào về mặt sử liệu?', a: 'Trống đồng là tư liệu hiện vật, có thể cầm nắm, đo đạc, định niên đại. Truyền thuyết Lạc Long Quân là tư liệu truyền miệng — chứa hạt nhân lịch sử (ý thức cội nguồn) nhưng các tình tiết không thể coi là sự thật khoa học.' },
      { q: 'Vì sao bia Tiến sĩ ở Văn Miếu là tư liệu gốc quý?', a: 'Vì các bia được khắc ngay sau mỗi khoa thi (thời Lê – Mạc – Nguyễn), ghi đúng tên, quê quán, năm thi của tiến sĩ. Đó là chứng cứ trực tiếp, chưa qua sao chép.' },
    ],
  },

  'S6LSDL-w03-quiz': {
    topic: 'Nguồn gốc loài người — Người tinh khôn ở Việt Nam',
    intro: 'Loài người không bỗng dưng có mặt trên Trái Đất. Bài học này cho các em thấy quá trình tiến hóa từ Người tối cổ đến Người tinh khôn, và những dấu tích sớm nhất trên đất nước ta.',
    objectives: [
      'Phân biệt được Người tối cổ và Người tinh khôn.',
      'Biết các di chỉ tiêu biểu của Người tối cổ, Người tinh khôn ở Việt Nam.',
      'Hiểu cách kiếm sống và công cụ chủ yếu thời nguyên thủy.',
    ],
    theory: [
      { h: 'Quá trình tiến hóa của loài người' },
      { p: 'Theo các nhà khoa học, từ loài Vượn cổ (cách đây khoảng 6 triệu năm) đã dần xuất hiện Người tối cổ (Homo erectus, ~4 triệu năm) và Người tinh khôn (Homo sapiens, ~150 000 năm). Người tinh khôn chính là tổ tiên trực tiếp của chúng ta.' },
      { h: 'Người tối cổ — đặc điểm' },
      { ul: [
        'Đứng và đi bằng hai chân, hai tay đã tự do.',
        'Trán còn thấp, hàm bạnh, lông bao phủ cơ thể.',
        'Biết ghè đẽo đá thô sơ thành công cụ — gọi là thời đại đồ đá cũ.',
        'Sống thành bầy người nguyên thủy, săn bắt và hái lượm.',
      ] },
      { h: 'Người tinh khôn — đặc điểm' },
      { ul: [
        'Hình dáng, kích thước não gần như người hiện đại.',
        'Biết mài đá tinh xảo, làm cung tên, đồ gốm — thời đại đồ đá mới.',
        'Sống thành thị tộc, biết dùng lửa thuần thục, bắt đầu trồng trọt, chăn nuôi sơ khai.',
      ] },
      { h: 'Dấu tích trên đất Việt Nam' },
      { ul: [
        'Người tối cổ: răng hóa thạch ở hang Thẩm Khuyên, Thẩm Hai (Lạng Sơn); công cụ ở Núi Đọ (Thanh Hóa).',
        'Người tinh khôn: văn hóa Sơn Vi (Phú Thọ), Hòa Bình – Bắc Sơn (Hòa Bình, Lạng Sơn), Quỳnh Văn (Nghệ An).',
      ] },
      { note: 'Việt Nam là một trong những "cái nôi" cổ xưa của loài người ở Đông Nam Á — dấu tích Người tối cổ và Người tinh khôn xuất hiện liên tục trên dải đất hình chữ S.' },
    ],
    examples: [
      { q: 'Người tối cổ và Người tinh khôn khác nhau ở những điểm nào quan trọng nhất?', a: 'Người tinh khôn có hình dáng – cấu tạo cơ thể (đặc biệt là não) gần như người hiện đại; biết mài đá, làm cung tên, đồ gốm, biết trồng trọt sơ khai. Người tối cổ trán thấp, hàm bạnh, công cụ chỉ ghè đẽo thô sơ, sống dựa vào săn bắt – hái lượm.' },
      { q: 'Vì sao nói văn hóa Hòa Bình là "đỉnh cao đồ đá mới" của Việt Nam?', a: 'Vì cư dân Hòa Bình biết mài đá tinh xảo (rìu mài lưỡi), làm đồ gốm, bắt đầu trồng trọt sơ khai và sống định cư trong hang động — đặc trưng tiêu biểu của thời đại đồ đá mới ở Đông Nam Á.' },
    ],
  },

  'S6LSDL-w04-quiz': {
    topic: 'Xã hội nguyên thủy',
    intro: 'Khi chưa có nhà nước, người xưa sống và tổ chức với nhau ra sao? Bài học này dẫn các em qua hai chặng lớn: bầy người nguyên thủy và công xã thị tộc.',
    objectives: [
      'Phân biệt được bầy người nguyên thủy, thị tộc, bộ lạc.',
      'Hiểu vai trò của phụ nữ trong thị tộc mẫu hệ.',
      'Giải thích được vì sao xã hội nguyên thủy tan rã.',
    ],
    theory: [
      { h: 'Bầy người nguyên thủy' },
      { p: 'Người tối cổ sống thành từng nhóm vài chục người trong hang, gọi là bầy người nguyên thủy. Họ chưa có luật lệ rõ ràng, chủ yếu dựa vào nhau để săn bắt — hái lượm và chống thú dữ.' },
      { h: 'Công xã thị tộc' },
      { p: 'Khi Người tinh khôn xuất hiện, họ sống thành thị tộc — gồm các gia đình có cùng huyết thống. Nhiều thị tộc gần nhau hợp thành bộ lạc, do tù trưởng đứng đầu. Tài sản chung, ăn chung, làm chung.' },
      { h: 'Vì sao là "mẫu hệ"?' },
      { ul: [
        'Hái lượm (do phụ nữ làm chính) cho nguồn thức ăn ổn định hơn săn bắt.',
        'Phụ nữ sinh con, duy trì nòi giống — vai trò trung tâm trong thị tộc.',
        'Con cái mang dòng họ mẹ, tài sản truyền theo dòng mẹ.',
      ] },
      { h: 'Vì sao xã hội nguyên thủy tan rã?' },
      { p: 'Khi công cụ kim loại xuất hiện, năng suất lao động tăng cao. Một người làm ra của cải nhiều hơn nhu cầu — bắt đầu có dư thừa. Của dư thừa rơi vào tay một số người → xuất hiện tư hữu, phân hóa giàu — nghèo. Xã hội nguyên thủy "bình đẳng" tan rã, nhà nước và giai cấp ra đời.' },
      { note: 'Một quy luật quan trọng: kỹ thuật sản xuất thay đổi → tổ chức xã hội thay đổi. Đây là quy luật xuyên suốt lịch sử nhân loại.' },
    ],
    examples: [
      { q: 'Vì sao trong thị tộc mẫu hệ, người phụ nữ giữ vai trò quan trọng?', a: 'Vì nguồn sống chính là hái lượm — do phụ nữ đảm nhiệm — ổn định hơn săn bắt; đồng thời phụ nữ sinh con và nuôi dạy thế hệ tiếp nối. Vì vậy con cái mang dòng họ mẹ, vai trò người mẹ là trung tâm.' },
      { q: 'Sự xuất hiện của tư hữu dẫn tới điều gì?', a: 'Tư hữu chia xã hội thành kẻ giàu — người nghèo, người chủ — kẻ làm thuê. Mâu thuẫn giai cấp xuất hiện, đòi hỏi phải có một bộ máy đứng ra điều hành: đó là nhà nước.' },
    ],
  },

  'S6LSDL-w05-quiz': {
    topic: 'Sự chuyển biến — phát hiện kim loại',
    intro: 'Một mảnh đồng đỏ nhỏ bé đã làm thay đổi cả lịch sử loài người. Bài học này tìm hiểu vì sao "kim loại" là phát minh vĩ đại đầu tiên.',
    objectives: [
      'Biết các loại kim loại đầu tiên con người sử dụng.',
      'Hiểu hệ quả của việc dùng công cụ kim loại đối với xã hội.',
      'Nhận diện văn hóa Đông Sơn — đỉnh cao đồ đồng ở Việt Nam.',
    ],
    theory: [
      { h: 'Từ đồ đá đến đồ kim loại' },
      { p: 'Khoảng 4000 năm TCN, con người tình cờ phát hiện ra đồng khi nung quặng. Sau đó là đồng thau (hợp kim đồng — thiếc) cứng hơn, rồi đến sắt (~1500 năm TCN). Mỗi bước tiến vật liệu là một bước tiến lớn của xã hội.' },
      { h: 'Vì sao công cụ kim loại quan trọng?' },
      { ul: [
        'Cứng và sắc hơn đá → khai phá đất nhanh, cày sâu hơn.',
        'Đa dạng hình dáng: lưỡi cày, rìu, kiếm, mũi tên đồng.',
        'Năng suất lao động tăng vọt → có của dư thừa.',
        'Của dư thừa → tư hữu → phân hóa giai cấp → nhà nước ra đời.',
      ] },
      { h: 'Văn hóa Đông Sơn — đỉnh cao đồ đồng Việt Nam' },
      { p: 'Khoảng thế kỉ VII TCN, cư dân vùng đồng bằng sông Hồng đã đúc được trống đồng tinh xảo. Trống đồng Đông Sơn (Thanh Hóa), Ngọc Lũ (Hà Nam) là biểu tượng của trình độ luyện kim cao và đời sống tinh thần phong phú của người Việt cổ.' },
      { h: 'Khi sắt xuất hiện' },
      { p: 'Đồ sắt rẻ và sắc hơn đồng thau, giúp khai phá rộng rãi vùng châu thổ. Đây cũng là thời kỳ nhà nước Văn Lang – Âu Lạc dần hình thành.' },
      { note: 'Có thể nói: không có công cụ kim loại thì không có nhà nước đầu tiên. Một mảnh đồng nhỏ đã "đẻ" ra nền văn minh.' },
    ],
    examples: [
      { q: 'Vì sao công cụ kim loại lại làm xã hội nguyên thủy tan rã?', a: 'Vì công cụ kim loại làm năng suất lao động tăng, có của dư thừa. Của dư thừa rơi vào tay một số người → xuất hiện tư hữu, phân hóa giàu — nghèo → xã hội nguyên thủy bình đẳng tan vỡ.' },
      { q: 'Trống đồng Đông Sơn được làm bằng gì? Có ý nghĩa gì?', a: 'Trống đồng được đúc bằng đồng thau (hợp kim đồng – thiếc – chì). Đó vừa là nhạc cụ trong nghi lễ, vừa là biểu tượng quyền lực của thủ lĩnh, vừa thể hiện kĩ thuật luyện kim cao của người Việt cổ.' },
    ],
  },

  'S6LSDL-w06-quiz': {
    topic: 'Ai Cập cổ đại',
    intro: 'Sông Nin – "món quà của thần" – đã sinh ra một trong những nền văn minh rực rỡ nhất nhân loại. Cùng đến với Ai Cập của các Pha-ra-ông và kim tự tháp.',
    objectives: [
      'Biết vị trí địa lí và điều kiện hình thành văn minh Ai Cập.',
      'Hiểu vai trò của sông Nin với đời sống người Ai Cập.',
      'Nhận diện các thành tựu tiêu biểu: chữ tượng hình, kim tự tháp, papyrus.',
    ],
    theory: [
      { h: 'Nền văn minh trên sông Nin' },
      { p: 'Ai Cập nằm ở Đông Bắc châu Phi, gần như là sa mạc. Nhờ sông Nin hằng năm dâng nước, để lại phù sa màu mỡ ở hai bờ, người Ai Cập đã trồng được lúa mì, lúa mạch. Nhà sử học Hê-rô-đốt từng nói "Ai Cập là tặng phẩm của sông Nin".' },
      { h: 'Nhà nước và Pha-ra-ông' },
      { ul: [
        'Khoảng 3200 năm TCN, Ai Cập thống nhất thành một vương quốc.',
        'Đứng đầu là Pha-ra-ông — được coi là "con của thần Mặt Trời", quyền lực tuyệt đối.',
        'Dưới vua là quý tộc, tăng lữ; dưới cùng là nông dân và nô lệ.',
      ] },
      { h: 'Chữ viết — giấy papyrus' },
      { p: 'Người Ai Cập sáng tạo chữ tượng hình: mỗi hình vẽ tượng trưng cho một vật, một ý. Họ viết trên đá, gỗ, và đặc biệt là trên giấy papyrus — loại giấy làm từ thân cây sậy Nile, nhẹ và bền.' },
      { h: 'Kim tự tháp — kỳ quan' },
      { p: 'Kim tự tháp là lăng mộ của các Pha-ra-ông. Tiêu biểu là kim tự tháp Kê-ốp ở Giza, cao ~147m, ghép từ hơn 2 triệu khối đá nặng trung bình 2,5 tấn — một kỳ tích kĩ thuật cách đây gần 5000 năm.' },
      { h: 'Một số thành tựu khác' },
      { ul: [
        'Toán học: số π gần đúng, tính diện tích hình tròn.',
        'Y học: ướp xác (làm xác ướp) tinh vi.',
        'Lịch: dương lịch sơ khai dựa vào lũ sông Nin và sao Sirius.',
      ] },
      { note: 'Văn minh Ai Cập tồn tại liên tục hơn 3000 năm — bài học về "địa lí — sông ngòi — văn minh" rất rõ ràng: nước quyết định sự sống.' },
    ],
    examples: [
      { q: 'Vì sao văn minh Ai Cập hình thành ven sông Nin?', a: 'Vì khu vực xung quanh là sa mạc khô cằn, chỉ có sông Nin mới cung cấp nước, phù sa cho nông nghiệp. Lũ sông Nin đều đặn hằng năm còn giúp người Ai Cập tính lịch và quy hoạch ruộng đồng.' },
      { q: 'Phân tích vai trò của giấy papyrus đối với văn minh Ai Cập.', a: 'Papyrus là vật liệu viết nhẹ, bền, dễ cuộn lại lưu trữ. Nhờ papyrus, người Ai Cập ghi chép được lịch sử, tôn giáo, khoa học, truyền tới đời sau — và sau này lan tới Hy Lạp, La Mã, ảnh hưởng tới chữ viết phương Tây.' },
    ],
  },

  'S6LSDL-w07-quiz': {
    topic: 'Lưỡng Hà cổ đại',
    intro: 'Cùng thời Ai Cập, ở vùng giữa hai con sông Ti-grơ và Ơ-phrát đã nảy nở một nền văn minh khác — Lưỡng Hà. Tới nay ta vẫn đang dùng "hệ đếm 60" của họ mỗi ngày.',
    objectives: [
      'Biết vị trí địa lí của Lưỡng Hà.',
      'Nhận diện các thành tựu tiêu biểu: chữ hình nêm, luật Hammurabi, hệ đếm 60.',
      'Hiểu vì sao Lưỡng Hà thường xuyên có chiến tranh và thay đổi vương triều.',
    ],
    theory: [
      { h: '"Vùng đất giữa hai con sông"' },
      { p: 'Lưỡng Hà (Mesopotamia) nằm giữa sông Ti-grơ và sông Ơ-phrát, khu vực ngày nay chủ yếu là Iraq. Đất phù sa màu mỡ, nhưng đồng bằng mở, không có sa mạc bảo vệ như Ai Cập — nên thường xuyên bị các tộc người tràn vào, các vương triều thay đổi liên tục.' },
      { h: 'Các vương triều tiêu biểu' },
      { ul: [
        'Su-me (Sumer): tộc người sáng tạo chữ hình nêm, xây các thành thị đầu tiên.',
        'Ba-bi-lon (Babylon): nổi tiếng với vua Hammurabi và "Vườn treo Babylon".',
        'A-xi-ri, Tân Babylon: các đế chế hùng mạnh sau này.',
      ] },
      { h: 'Chữ hình nêm — ngôn ngữ trên đất sét' },
      { p: 'Người Su-me dùng que vót nhọn ấn lên đất sét ướt tạo các nét hình đinh (hình nêm). Đất sét đem phơi/nung khô lại trở thành "trang sách" tồn tại hàng nghìn năm. Đây là một trong những hệ chữ viết sớm nhất nhân loại.' },
      { h: 'Bộ luật Hammurabi — bộ luật thành văn cổ' },
      { p: 'Khắc trên một cột đá bazan đen cao gần 2m, gồm 282 điều khoản. Nguyên tắc nổi tiếng: "mắt đền mắt, răng đền răng". Đây là bộ luật thành văn cổ nhất còn được giữ tương đối nguyên vẹn.' },
      { h: 'Toán học — thiên văn' },
      { ul: [
        'Hệ đếm cơ số 60: cơ sở để chia 1 giờ = 60 phút, 1 phút = 60 giây, 1 vòng tròn = 360°.',
        'Lịch âm dương: chia 1 năm 12 tháng, biết tính nhật thực — nguyệt thực.',
        '"Vườn treo Ba-bi-lon" — một trong bảy kỳ quan của thế giới cổ đại.',
      ] },
      { note: 'Khi nhìn đồng hồ "12 giờ 30 phút", các em đang dùng phát minh của người Lưỡng Hà cách đây gần 4000 năm đấy!' },
    ],
    examples: [
      { q: 'Vì sao Lưỡng Hà thường xuyên có chiến tranh và đổi vương triều?', a: 'Vì đồng bằng Lưỡng Hà rộng mở, không có sa mạc hay núi cao bao quanh để chắn các tộc du mục. Đất lại rất giàu, nên luôn bị tranh giành — vương triều này nối tiếp vương triều khác.' },
      { q: 'Nêu hai điểm khác biệt giữa chữ tượng hình Ai Cập và chữ hình nêm Lưỡng Hà.', a: 'Khác về chất liệu (Ai Cập viết trên giấy papyrus, Lưỡng Hà viết trên đất sét) và hình dạng nét (Ai Cập là hình vẽ tượng hình mềm mại; Lưỡng Hà là các nét hình đinh do ấn que xuống đất sét).' },
    ],
  },

  'S6LSDL-w08-quiz': {
    topic: 'Ấn Độ cổ đại',
    intro: 'Đất nước của sông Hằng và sông Ấn đã sinh ra một nền văn minh độc đáo: nơi khai sinh Phật giáo, đẳng cấp Vác-na và những con số mà cả thế giới dùng ngày nay.',
    objectives: [
      'Biết vị trí địa lí và hai dòng sông lớn của Ấn Độ cổ đại.',
      'Hiểu chế độ đẳng cấp Vác-na (Varna).',
      'Nhận diện thành tựu: Phật giáo, hệ chữ số, các sử thi lớn.',
    ],
    theory: [
      { h: 'Vùng đất hai con sông' },
      { p: 'Văn minh Ấn Độ hình thành ven sông Ấn (Indus) và sông Hằng (Ganges) cách đây hơn 4000 năm. Khí hậu nhiệt đới gió mùa, đất phù sa màu mỡ, thuận lợi trồng lúa, mía, bông.' },
      { h: 'Chế độ đẳng cấp Vác-na (Varna)' },
      { ul: [
        'Bà-la-môn (tăng lữ): cao nhất, lo việc tế lễ, thần thánh.',
        'Sát-đế-lị: vua, quý tộc, võ sĩ.',
        'Vệ-xá: thương nhân, nông dân tự do.',
        'Su-đra: nông dân lệ thuộc, người làm thuê.',
      ] },
      { p: 'Đẳng cấp do dòng máu quy định, không thay đổi cả đời. Người đẳng cấp thấp không được kết hôn với đẳng cấp cao. Đây là chế độ rất khắt khe, ảnh hưởng tới Ấn Độ đến tận ngày nay.' },
      { h: 'Tôn giáo' },
      { ul: [
        'Bà-la-môn giáo (sau này là Hindu giáo) — tôn giáo lâu đời nhất Ấn Độ.',
        'Phật giáo: do Thái tử Xi-đác-ta Gô-ta-ma (Đức Phật Thích Ca) sáng lập thế kỉ VI TCN. Tư tưởng "từ bi, bình đẳng" trái với chế độ đẳng cấp khắc nghiệt.',
      ] },
      { p: 'Phật giáo sau này lan tới Trung Quốc, Đông Nam Á và Việt Nam, trở thành tôn giáo có ảnh hưởng sâu sắc.' },
      { h: 'Toán học — văn học' },
      { ul: [
        'Phát minh hệ chữ số 0–9, đặc biệt là chữ số 0. Người Ả-rập học rồi truyền sang châu Âu — gọi là "chữ số Ả-rập".',
        'Hai sử thi vĩ đại: Ra-ma-y-a-na và Ma-ha-bha-ra-ta.',
        'Kiến trúc đền — chùa, cột đá A-sô-ca có giá trị nghệ thuật cao.',
      ] },
      { note: 'Mỗi lần các em viết số "0", hãy nhớ tới người Ấn Độ cổ đại — họ đã tặng cả nhân loại một "không có gì" mà thay đổi cả toán học.' },
    ],
    examples: [
      { q: 'Vì sao Phật giáo có sức hấp dẫn với người dân Ấn Độ thời cổ đại?', a: 'Vì Phật giáo chủ trương "chúng sinh bình đẳng" — không phân biệt đẳng cấp, dòng máu. Tư tưởng đó đối lập với chế độ Vác-na khắt khe, được nhiều người dân thường ủng hộ.' },
      { q: 'Đẳng cấp Vác-na ảnh hưởng ra sao tới xã hội Ấn Độ?', a: 'Vác-na chia xã hội thành 4 đẳng cấp cố định: ai sinh ra trong đẳng cấp nào thì sống và làm việc theo đẳng cấp đó suốt đời. Đẳng cấp thấp bị khinh rẻ, không được kết hôn vượt đẳng cấp — gây bất bình đẳng kéo dài.' },
    ],
  },

  'S6LSDL-w09-quiz': {
    topic: 'Trung Quốc cổ đại — thời Tần',
    intro: 'Cùng đến với nền văn minh láng giềng phương Bắc, nơi Tần Thủy Hoàng đã lần đầu tiên thống nhất Trung Quốc và để lại Vạn Lý Trường Thành — cũng là người sau đó đã thôn tính Âu Lạc của ta.',
    objectives: [
      'Biết các con sông lớn gắn với văn minh Trung Hoa.',
      'Hiểu sự kiện Tần thống nhất Trung Quốc năm 221 TCN.',
      'Nhận diện các thành tựu và mặt trái của nhà Tần.',
    ],
    theory: [
      { h: 'Văn minh sông Hoàng Hà — Trường Giang' },
      { p: 'Trung Quốc cổ đại hình thành trên lưu vực hai dòng sông lớn: Hoàng Hà ở phía Bắc và Trường Giang ở phía Nam. Cả hai đều bồi đắp những đồng bằng rộng lớn cho nền nông nghiệp lúa, kê.' },
      { h: 'Trước Tần — thời Xuân Thu, Chiến Quốc' },
      { p: 'Trong nhiều thế kỉ, Trung Quốc bị chia cắt thành nhiều nước nhỏ tranh chấp lẫn nhau. Đây cũng là thời sinh ra Khổng Tử, Lão Tử — những nhà tư tưởng lớn.' },
      { h: 'Tần Thủy Hoàng thống nhất Trung Quốc (221 TCN)' },
      { ul: [
        'Doanh Chính, vua nước Tần, lần lượt diệt 6 nước, lập đế chế thống nhất đầu tiên.',
        'Tự xưng Hoàng đế — vị Hoàng đế đầu tiên của Trung Quốc.',
        'Thống nhất tiền tệ, đo lường, chữ viết và pháp luật trên toàn quốc.',
      ] },
      { h: 'Các công trình lớn — và mặt trái' },
      { ul: [
        'Nối các đoạn thành cũ thành Vạn Lý Trường Thành chống du mục phương Bắc.',
        'Xây lăng mộ với đội quân đất nung khổng lồ ở Tây An.',
        'Mở đường giao thông liên thông trong cả nước.',
        'Mặt trái: pháp luật hà khắc, "đốt sách, chôn nho" tàn bạo, dân lao dịch chết hàng vạn.',
      ] },
      { h: 'Liên quan tới Việt Nam' },
      { p: 'Cùng thời Tần, nhà nước Âu Lạc của Thục Phán ra đời (208 TCN). Nhà Tần từng đem quân xuống đánh nhưng vấp phải sự kháng cự ngoan cường của tổ tiên ta. Sau đó, năm 179 TCN, Triệu Đà (nguyên là tướng nhà Tần) thôn tính Âu Lạc — mở đầu Bắc thuộc.' },
      { note: 'Nhà Tần chỉ tồn tại ~15 năm, sụp đổ vì cai trị quá hà khắc. Đó là bài học muôn đời: pháp luật chỉ giữ được khi đi cùng lòng dân.' },
    ],
    examples: [
      { q: 'Phân tích ý nghĩa việc Tần Thủy Hoàng thống nhất Trung Quốc.', a: 'Tạo ra một đế chế thống nhất đầu tiên trong lịch sử Trung Quốc; đồng nhất chữ viết, tiền tệ, đo lường — đặt nền móng cho một quốc gia thống nhất tồn tại đến nay. Nhưng cũng phải trả giá bằng pháp luật hà khắc và sưu dịch nặng nề.' },
      { q: 'Vì sao nhà Tần lại sụp đổ chỉ sau 15 năm?', a: 'Vì cai trị quá hà khắc: đốt sách chôn nho, sưu dịch dồn dập (xây Trường Thành, lăng mộ, cung điện), pháp luật cay nghiệt → dân nổi dậy khắp nơi, Lưu Bang và Hạng Vũ lật đổ nhà Tần.' },
    ],
  },

  'S6LSDL-w10-quiz': {
    topic: 'Trung Quốc cổ đại — thời Hán',
    intro: 'Sau nhà Tần ngắn ngủi, nhà Hán kéo dài hơn 400 năm, đặt khuôn mẫu cho chế độ phong kiến Trung Hoa. Đây cũng là thời người Việt ta chịu ách Bắc thuộc lần đầu.',
    objectives: [
      'Biết Lưu Bang lập nhà Hán và Hán Vũ Đế.',
      'Hiểu vai trò Nho giáo và Con đường tơ lụa.',
      'Liên hệ với thời Bắc thuộc của Việt Nam.',
    ],
    theory: [
      { h: 'Lưu Bang lập nhà Hán (202 TCN)' },
      { p: 'Sau khi nhà Tần sụp đổ, Lưu Bang đánh bại Hạng Vũ, lập nhà Hán, xưng Hán Cao Tổ. Nhà Hán chia làm hai giai đoạn: Tây Hán (đóng đô Trường An) và Đông Hán (đóng đô Lạc Dương).' },
      { h: 'Nho giáo trở thành tư tưởng chính thống' },
      { ul: [
        'Hán Vũ Đế đề ra chính sách "bãi truất bách gia, độc tôn Nho thuật".',
        'Nho giáo dạy "tam cương ngũ thường", trật tự vua – tôi – cha – con – vợ chồng.',
        'Đây là tư tưởng chi phối chế độ phong kiến Trung Hoa hơn 2000 năm.',
      ] },
      { h: 'Con đường tơ lụa' },
      { p: 'Thời nhà Hán, sứ giả Trương Khiên được phái đi sứ Tây Vực, mở ra con đường buôn bán nối Trung Quốc qua Trung Á tới tận La Mã. Tơ lụa, gốm sứ, giấy Trung Hoa theo đường này lan tới châu Âu; ngược lại, hàng hóa, văn hóa phương Tây cũng vào Trung Quốc.' },
      { h: 'Bốn phát minh lớn' },
      { ul: [
        'Giấy: Thái Luân cải tiến kĩ thuật làm giấy thời Đông Hán.',
        'La bàn (sơ khai): dùng kim từ chỉ hướng.',
        'Thuốc súng: ban đầu dùng làm pháo, sau làm vũ khí.',
        'Kĩ thuật in: bản in khắc gỗ.',
      ] },
      { h: 'Người Việt thời Bắc thuộc lần thứ nhất' },
      { p: 'Thế kỉ I — III, người Việt ta chịu ách đô hộ của nhà Đông Hán. Thái thú Tô Định tàn bạo, vơ vét sản vật, đàn áp dân Việt. Đó là nguyên nhân trực tiếp khiến Hai Bà Trưng nổi dậy năm 40.' },
      { note: 'Văn minh Hán có ảnh hưởng lâu dài tới Việt Nam: chữ Hán, Nho giáo, kiến trúc, lịch âm dương... Tuy nhiên, người Việt luôn tiếp thu có chọn lọc và giữ vững bản sắc.' },
    ],
    examples: [
      { q: 'Vì sao Hán Vũ Đế chọn Nho giáo làm tư tưởng chính thống?', a: 'Vì Nho giáo đề cao trật tự vua – tôi, cha – con; coi vua là "thiên tử" — phù hợp với việc bảo vệ và củng cố chế độ quân chủ tập quyền của nhà Hán.' },
      { q: 'Con đường tơ lụa có ý nghĩa gì với thế giới cổ đại?', a: 'Nối liền hai cực Á – Âu, đưa hàng hóa (tơ lụa, gia vị, giấy) và văn hóa, tôn giáo (Phật giáo, sau là Hồi giáo) đi lại giữa Trung Quốc, Ấn Độ, Trung Á và La Mã. Đó là tuyến giao lưu lớn nhất thế giới cổ đại.' },
    ],
  },

  'S6LSDL-w11-quiz': {
    topic: 'Hy Lạp cổ đại',
    intro: 'Bên bờ Địa Trung Hải xanh ngắt, người Hy Lạp đã sáng tạo ra dân chủ, sân khấu, Olympic và những định lý toán học mà hôm nay các em vẫn học.',
    objectives: [
      'Biết vị trí địa lí và hình thức "thành bang" của Hy Lạp cổ đại.',
      'Hiểu nền dân chủ A-ten và mặt giới hạn của nó.',
      'Nhận diện thành tựu khoa học, văn học, nghệ thuật Hy Lạp.',
    ],
    theory: [
      { h: 'Bán đảo Ban-căng và biển Địa Trung Hải' },
      { p: 'Hy Lạp cổ đại nằm ở Nam Âu, trên bán đảo Ban-căng nhiều núi, bờ biển khúc khuỷu. Đất ít, núi nhiều — không thuận trồng trọt lớn — nên người Hy Lạp đi biển, buôn bán và lập thuộc địa khắp Địa Trung Hải.' },
      { h: 'Thành bang (po-li-tơ)' },
      { ul: [
        'Hy Lạp không thống nhất thành một quốc gia mà gồm nhiều thành bang độc lập.',
        'Mỗi thành bang có chính quyền, quân đội, luật lệ riêng.',
        'Hai thành bang lớn nhất: A-ten (Athens) và Xpác-ta (Sparta).',
      ] },
      { h: 'Dân chủ A-ten' },
      { p: 'A-ten là quê hương của nền dân chủ cổ điển: công dân nam trưởng thành có quyền họp Hội đồng, biểu quyết về luật, chiến tranh, hòa bình. Tuy nhiên, "dân chủ" này không áp dụng cho phụ nữ, nô lệ và người ngoại quốc.' },
      { h: 'Văn học — sân khấu' },
      { ul: [
        'Hô-me-rơ — hai trường ca I-li-át và Ô-đi-xê.',
        'Sân khấu bi kịch, hài kịch ra đời ở A-ten.',
      ] },
      { h: 'Khoa học và triết học' },
      { ul: [
        'Pi-ta-go: định lý a² + b² = c² trong tam giác vuông.',
        'Ác-si-mét: nguyên lí đòn bẩy, lực đẩy chất lỏng.',
        'Xô-cơ-rát, Pla-tôn, A-ri-xtốt: ba triết gia khai sinh triết học phương Tây.',
      ] },
      { h: 'Thể thao Olympic' },
      { p: 'Năm 776 TCN, người Hy Lạp tổ chức Đại hội Olympic đầu tiên tại Ô-lim-pi-a. Đây là nguồn gốc của Thế vận hội hiện đại mà bốn năm một lần các vận động viên thế giới vẫn tranh tài.' },
      { note: 'Câu nói "Hãy cho tôi một điểm tựa, tôi sẽ nâng cả Trái Đất" là của Ác-si-mét — đó là tinh thần khoa học rất Hy Lạp: tin vào lí trí và tính toán.' },
    ],
    examples: [
      { q: 'Vì sao Hy Lạp không thống nhất thành một quốc gia lớn?', a: 'Vì địa hình chia cắt nhiều núi, bán đảo, đảo nhỏ; người dân từng vùng có lối sống riêng, lại thiên về buôn bán đường biển. Vì vậy hình thành các thành bang độc lập, mỗi thành bang là một "nhà nước" nhỏ.' },
      { q: 'Nền dân chủ A-ten có giới hạn gì?', a: 'Chỉ công dân nam tự do mới có quyền chính trị; phụ nữ, nô lệ và người ngoại quốc không được tham gia. Vì vậy đó vẫn là một nền dân chủ "có giới hạn về phạm vi", chưa đầy đủ như dân chủ hiện đại.' },
    ],
  },

  'S6LSDL-w12-quiz': {
    topic: 'La Mã cổ đại',
    intro: 'Từ một thành nhỏ trên bán đảo Italia, La Mã đã trở thành đế chế khổng lồ trải dài ba châu, để lại đường, luật, chữ viết Latinh và Ki-tô giáo cho thế giới.',
    objectives: [
      'Biết vị trí địa lí và quá trình mở rộng của La Mã.',
      'Hiểu mô hình "Cộng hòa" và "Đế chế" La Mã.',
      'Nhận diện các thành tựu lớn: luật, đường, chữ Latinh, Ki-tô giáo.',
    ],
    theory: [
      { h: 'Trên bán đảo Italia' },
      { p: 'La Mã hình thành trên bán đảo Italia, ven Địa Trung Hải. Thuận lợi: đất phù sa, khí hậu ấm, giao thương biển. Từ một thành Rô-ma nhỏ bên sông Tiber, La Mã dần thôn tính toàn Italia rồi vươn ra Địa Trung Hải.' },
      { h: 'Từ Cộng hòa đến Đế chế' },
      { ul: [
        'Thời Cộng hòa (~509 — 27 TCN): viện nguyên lão và hai chấp chính quan thay nhau cai trị.',
        'Năm 27 TCN, Ốc-ta-vi-út lên ngôi Hoàng đế (Au-gút-tút), bắt đầu thời Đế chế.',
        'Đế chế La Mã thời đỉnh cao trải khắp Bắc Phi — châu Âu — Tây Á.',
      ] },
      { h: 'Pháp luật và đường giao thông' },
      { ul: [
        'Pháp luật La Mã là nền tảng của luật pháp phương Tây hiện đại.',
        'Hệ thống đường bộ rộng khắp — "mọi con đường đều dẫn về Rô-ma".',
        'Cầu cống, đường dẫn nước (aqueduct) phục vụ thành phố lớn.',
      ] },
      { h: 'Chữ Latinh — hệ chữ phổ biến nhất thế giới' },
      { p: 'Người La Mã hoàn thiện bảng chữ cái Latinh từ chữ Hy Lạp. Ngày nay, tiếng Anh, Pháp, Tây Ban Nha, Việt Nam (chữ Quốc ngữ)... đều dùng hệ chữ Latinh.' },
      { h: 'Đấu trường Cô-li-dê và Ki-tô giáo' },
      { ul: [
        'Đấu trường Colosseum chứa ~50 000 người, nơi đấu sĩ chiến đấu.',
        'Ki-tô giáo ra đời ở Pa-le-xtin (thuộc La Mã), ban đầu bị bức hại.',
        'Thế kỉ IV, Ki-tô giáo trở thành quốc giáo của Đế chế La Mã.',
      ] },
      { note: 'Khi các em đang đọc bài này, các em đang dùng chữ cái Latinh của người La Mã hơn 2000 năm trước. Sức sống của một nền văn minh là ở chỗ đó.' },
    ],
    examples: [
      { q: 'Vì sao Ki-tô giáo lan rộng nhanh trong Đế chế La Mã?', a: 'Vì Đế chế có hệ thống đường giao thông tốt, tiếng Hy Lạp – Latinh thông dụng, lại có nhiều tầng lớp nghèo khổ tìm niềm an ủi tinh thần. Khi được công nhận làm quốc giáo (thế kỉ IV), Ki-tô giáo càng phát triển mạnh.' },
      { q: 'So sánh ngắn gọn dân chủ A-ten và Cộng hòa La Mã.', a: 'A-ten: dân chủ trực tiếp — công dân tự biểu quyết tại Hội đồng. La Mã: cộng hòa đại diện — bầu ra viện nguyên lão và chấp chính quan để cai trị. Cả hai đều giới hạn quyền chính trị cho công dân nam tự do.' },
    ],
  },

  'S6LSDL-w13-quiz': {
    topic: 'Nhà nước Văn Lang',
    intro: 'Khoảng thế kỉ VII TCN, trên vùng đồng bằng sông Hồng, các bộ lạc Lạc Việt đã hợp nhất thành nhà nước đầu tiên của dân tộc ta — Văn Lang của các vua Hùng.',
    objectives: [
      'Biết thời gian, không gian và người đứng đầu nhà nước Văn Lang.',
      'Hiểu cơ cấu tổ chức bộ máy nhà nước Văn Lang.',
      'Nhận diện đời sống vật chất, tinh thần của cư dân Văn Lang.',
    ],
    theory: [
      { h: 'Hoàn cảnh ra đời' },
      { p: 'Thế kỉ VII TCN, kĩ thuật luyện đồng phát triển, lúa nước cho năng suất cao, dân cư đông đúc. Để tổ chức trị thủy, chống ngoại xâm và quản lí xã hội đã phân hóa, nhà nước Văn Lang ra đời. Đây là nhà nước đầu tiên trong lịch sử Việt Nam.' },
      { h: 'Thời gian — kinh đô' },
      { ul: [
        'Ra đời khoảng thế kỉ VII TCN.',
        'Đứng đầu là Hùng Vương, cha truyền con nối 18 đời.',
        'Kinh đô ở Phong Châu (nay thuộc tỉnh Phú Thọ).',
      ] },
      { h: 'Bộ máy nhà nước' },
      { p: 'Văn Lang chia thành 15 bộ. Tổ chức theo 3 cấp:' },
      { ul: [
        'Trung ương: Hùng Vương đứng đầu, dưới có Lạc hầu (quan văn), Lạc tướng (quan võ).',
        'Bộ: Lạc tướng cai quản.',
        'Làng (chiềng, chạ): Bồ chính đứng đầu — gần dân nhất.',
      ] },
      { h: 'Đời sống vật chất' },
      { ul: [
        'Trồng lúa nước, làm ruộng, chăn nuôi, đánh cá.',
        'Đúc đồng, làm gốm, dệt vải.',
        'Ở nhà sàn, đi lại bằng thuyền độc mộc, ăn cơm gạo nếp/tẻ.',
      ] },
      { h: 'Đời sống tinh thần' },
      { ul: [
        'Tín ngưỡng thờ thần Mặt Trời, thờ tổ tiên, thờ các vua Hùng.',
        'Lễ hội xuống đồng, đua thuyền, hát đối, gõ trống đồng.',
        'Tục xăm mình, nhuộm răng đen, ăn trầu — đặc trưng Lạc Việt.',
      ] },
      { note: 'Truyền thuyết Lạc Long Quân – Âu Cơ và "bọc trăm trứng" chính là cách người Việt cổ giải thích nguồn gốc chung của các bộ lạc — cơ sở tinh thần để nhà nước Văn Lang ra đời.' },
    ],
    examples: [
      { q: 'Vì sao nhà nước Văn Lang ra đời?', a: 'Vì có ba nhu cầu cấp thiết: trị thủy (chống lũ sông Hồng), chống ngoại xâm và quản lí xã hội đã phân hóa giàu — nghèo do kim loại mang lại. Bộ máy nhà nước ra đời để đáp ứng các nhu cầu này.' },
      { q: 'Nêu một số đặc trưng văn hóa của người Văn Lang còn tồn tại đến ngày nay.', a: 'Tục thờ tổ tiên, thờ Vua Hùng (Giỗ Tổ Hùng Vương 10/3 âm lịch); làm bánh chưng – bánh giầy; ở nhà sàn (đồng bào miền núi); ăn trầu cau; trồng lúa nước; lễ hội xuống đồng… vẫn là một phần đời sống Việt Nam.' },
    ],
  },

  'S6LSDL-w14-quiz': {
    topic: 'Nhà nước Âu Lạc',
    intro: 'Tiếp nối Văn Lang là Âu Lạc — nhà nước của An Dương Vương với thành Cổ Loa nhiều vòng và truyền thuyết bi tráng "nỏ thần — Mỵ Châu — Trọng Thủy".',
    objectives: [
      'Biết hoàn cảnh ra đời nhà nước Âu Lạc và vị vua An Dương Vương.',
      'Hiểu vai trò chiến lược của thành Cổ Loa.',
      'Rút ra bài học từ truyền thuyết An Dương Vương – Mỵ Châu – Trọng Thủy.',
    ],
    theory: [
      { h: 'Vì sao Âu Lạc ra đời?' },
      { p: 'Cuối thế kỉ III TCN, nhà Tần đem quân xuống đánh các bộ lạc phía Nam. Người Tây Âu (do Thục Phán đứng đầu) và người Lạc Việt liên kết kháng chiến. Sau thắng lợi, Thục Phán hợp nhất hai vùng lập nước Âu Lạc, xưng An Dương Vương (~208 TCN).' },
      { h: 'Kinh đô — bộ máy nhà nước' },
      { ul: [
        'Kinh đô dời từ Phong Châu về Cổ Loa (Đông Anh, Hà Nội).',
        'Tổ chức bộ máy về cơ bản giống Văn Lang, nhưng quyền lực vua tập trung và quân đội mạnh hơn.',
        'Quân đội đông, có nỏ Liên Châu (bắn nhiều mũi tên một lúc) — vũ khí lợi hại.',
      ] },
      { h: 'Thành Cổ Loa — kì công kiến trúc quân sự' },
      { ul: [
        'Gồm 3 vòng thành hình xoáy trôn ốc, chu vi tổng cộng hàng chục km.',
        'Hào nước bao quanh nối với sông Hoàng, sông Cà Lồ — vừa giao thông vừa phòng thủ.',
        'Khảo cổ tìm thấy hàng vạn mũi tên đồng ba cạnh ở Cổ Loa — chứng tích quân sự.',
      ] },
      { h: 'Âu Lạc mất nước (179 TCN)' },
      { p: 'Triệu Đà (tướng cũ của nhà Tần) lập nước Nam Việt ở phương Bắc, nhiều lần đánh Âu Lạc không thắng. Hắn dùng kế "trá hàng": cho con là Trọng Thủy cưới Mỵ Châu — con gái An Dương Vương — để dò bí mật nỏ thần. Sau khi đánh tráo nỏ, năm 179 TCN, Triệu Đà cất quân chiếm Âu Lạc — mở đầu hơn 1000 năm Bắc thuộc.' },
      { note: 'Truyền thuyết "nỏ thần — Mỵ Châu — Trọng Thủy" để lại bài học: mất cảnh giác trước âm mưu của kẻ thù, nhất là khi kẻ thù dùng "tình thân" để xâm nhập, sẽ phải trả giá rất đắt.' },
    ],
    examples: [
      { q: 'Vì sao thành Cổ Loa được coi là công trình quân sự đáng nể?', a: 'Vì có 3 vòng thành xoáy trôn ốc kết hợp hào nước, lợi dụng địa hình sông ngòi tự nhiên; thành có chu vi lớn, hệ thống phòng thủ chiều sâu — quân địch khó công phá. Kho mũi tên đồng ở đây cho thấy năng lực sản xuất vũ khí dồi dào.' },
      { q: 'Bài học rút ra từ việc nước Âu Lạc bị mất?', a: 'Phải luôn cảnh giác trước âm mưu của kẻ thù, không vì tình thân hay hòa hoãn mà lơ là quốc phòng. Bí mật quân sự — quốc gia là tài sản chung, không thể vì cá nhân mà tiết lộ.' },
    ],
  },

  'S6LSDL-w15-quiz': {
    topic: 'Văn hóa Đông Sơn',
    intro: 'Văn hóa Đông Sơn — đỉnh cao đồ đồng của người Việt cổ — chính là nền tảng vật chất và tinh thần của Văn Lang – Âu Lạc.',
    objectives: [
      'Biết phạm vi không gian, thời gian của văn hóa Đông Sơn.',
      'Hiểu giá trị của trống đồng Đông Sơn.',
      'Liên hệ Đông Sơn với nhà nước Văn Lang – Âu Lạc.',
    ],
    theory: [
      { h: 'Phạm vi và niên đại' },
      { p: 'Văn hóa Đông Sơn tồn tại khoảng thế kỉ VII TCN — thế kỉ II SCN, trải rộng từ Bắc Bộ tới Bắc Trung Bộ Việt Nam. Được phát hiện đầu tiên năm 1924 tại làng Đông Sơn (Thanh Hóa).' },
      { h: 'Trống đồng — biểu tượng văn hóa Đông Sơn' },
      { ul: [
        'Đúc bằng đồng thau (đồng — thiếc — chì) theo kĩ thuật khuôn sáp.',
        'Tiêu biểu: trống Ngọc Lũ (Hà Nam), Hoàng Hạ (Hà Tây cũ), Cổ Loa.',
        'Mặt trống có hình mặt trời ở giữa, các vành hoa văn đồng tâm.',
      ] },
      { h: 'Hoa văn nói gì?' },
      { p: 'Trên trống đồng, người Việt cổ khắc lại sinh hoạt: nhà sàn, giã gạo chày tay, đua thuyền, lễ hội, người mặc áo lông chim, hươu nai, chim Lạc bay vòng quanh Mặt Trời. Đó là một "bộ phim tài liệu bằng đồng" về xã hội Văn Lang – Âu Lạc.' },
      { h: 'Các hiện vật khác' },
      { ul: [
        'Rìu đồng các loại (rìu xòe cân, rìu lưỡi xéo).',
        'Mũi tên đồng ba cạnh (Cổ Loa).',
        'Đồ trang sức: vòng tay, khuyên tai bằng đồng, đá quý.',
        'Dao găm, lưỡi cày, lưỡi liềm bằng đồng.',
      ] },
      { h: 'Ý nghĩa' },
      { p: 'Văn hóa Đông Sơn là cơ sở vật chất – kĩ thuật và tinh thần của nhà nước Văn Lang – Âu Lạc. Việc đúc được trống đồng tinh xảo cho thấy: kĩ thuật luyện kim cao, tổ chức xã hội đủ phức tạp để có thợ chuyên nghiệp, đời sống tinh thần phong phú.' },
      { note: 'Chim Lạc trên trống đồng đã trở thành biểu tượng của dân tộc Việt — các em có thể thấy trên Quốc huy, trên tiền giấy Việt Nam ngày nay.' },
    ],
    examples: [
      { q: 'Vì sao trống đồng được coi là biểu tượng của văn minh Đông Sơn?', a: 'Vì trống đồng vừa thể hiện đỉnh cao kĩ thuật luyện kim (đúc khuôn sáp, hợp kim đồng – thiếc – chì), vừa ghi lại toàn bộ đời sống vật chất – tinh thần của người Việt cổ qua hoa văn. Trống đồng còn là biểu tượng quyền lực của thủ lĩnh.' },
      { q: 'Văn hóa Đông Sơn liên hệ thế nào với nhà nước Văn Lang – Âu Lạc?', a: 'Văn hóa Đông Sơn là nền tảng vật chất – kĩ thuật cho Văn Lang – Âu Lạc: có công cụ kim loại để khai phá đất, có vũ khí để chống ngoại xâm, có dư thừa của cải tạo nên sự phân hóa xã hội — điều kiện cho nhà nước ra đời.' },
    ],
  },

  'S6LSDL-w16-quiz': {
    topic: 'Bắc thuộc và khởi nghĩa Hai Bà Trưng — Bà Triệu',
    intro: 'Hơn 1000 năm Bắc thuộc là chuỗi ngày người Việt vừa giữ gìn bản sắc vừa nổi dậy đòi độc lập. Hai Bà Trưng, Bà Triệu là những ngọn cờ đầu tiên.',
    objectives: [
      'Hiểu khái niệm "Bắc thuộc" và chính sách cai trị của các triều đại phương Bắc.',
      'Nhớ diễn biến chính của khởi nghĩa Hai Bà Trưng và khởi nghĩa Bà Triệu.',
      'Nhận thức được ý chí bất khuất của dân tộc qua các cuộc khởi nghĩa.',
    ],
    theory: [
      { h: 'Bắc thuộc là gì?' },
      { p: 'Từ năm 179 TCN (Triệu Đà chiếm Âu Lạc) đến 938 (chiến thắng Bạch Đằng) — khoảng 1000 năm, nước ta bị các triều đại phương Bắc (Triệu, Hán, Ngô, Lương, Tùy, Đường…) đô hộ. Đó gọi là thời Bắc thuộc.' },
      { h: 'Chính sách cai trị của phương Bắc' },
      { ul: [
        'Chia nước ta thành các quận, huyện do người Hán cai trị.',
        'Bóc lột nặng nề: cống nạp sản vật (ngà voi, sừng tê, ngọc trai…) và thuế khóa.',
        'Đồng hóa: bắt theo phong tục Hán, học chữ Hán, bỏ tục Việt.',
        'Đưa dân Hán xuống ở lẫn để biến nước ta thành đất của Hán.',
      ] },
      { h: 'Khởi nghĩa Hai Bà Trưng (40 — 43)' },
      { ul: [
        'Mùa xuân năm 40, Trưng Trắc và em là Trưng Nhị dựng cờ ở Hát Môn (Mê Linh).',
        'Nguyên nhân: chính sách hà khắc của Thái thú Tô Định; chồng Trưng Trắc là Thi Sách bị giết.',
        'Khẩu hiệu: "Đền nợ nước, trả thù nhà".',
        'Nghĩa quân nhanh chóng chiếm 65 thành, đuổi Tô Định chạy về nước. Trưng Trắc xưng vương, đóng đô Mê Linh.',
        'Năm 42, Mã Viện đem quân Đông Hán sang đàn áp. Đến năm 43, Hai Bà thất bại, gieo mình xuống sông Hát.',
      ] },
      { h: 'Khởi nghĩa Bà Triệu (248)' },
      { ul: [
        'Triệu Thị Trinh (Bà Triệu) khởi nghĩa ở vùng Thanh Hóa năm 248, chống nhà Ngô.',
        'Câu nói nổi tiếng: "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở Biển Đông... chứ không chịu khom lưng làm tì thiếp người ta".',
        'Khởi nghĩa thất bại nhưng để lại tấm gương sáng về ý chí bất khuất.',
      ] },
      { note: 'Hai cuộc khởi nghĩa đầu tiên thời Bắc thuộc đều do phụ nữ Việt lãnh đạo — cho thấy truyền thống "anh hùng – bất khuất – trung hậu – đảm đang" của phụ nữ Việt Nam có từ rất lâu đời.' },
    ],
    examples: [
      { q: 'Phân tích nguyên nhân bùng nổ khởi nghĩa Hai Bà Trưng.', a: 'Nguyên nhân sâu xa: chính sách đô hộ tàn bạo, bóc lột nặng nề của nhà Đông Hán; nguy cơ đồng hóa dân tộc. Nguyên nhân trực tiếp: Thái thú Tô Định gian ác, giết Thi Sách (chồng Trưng Trắc) — châm ngòi cuộc nổi dậy của Hai Bà.' },
      { q: 'Ý nghĩa lời tuyên ngôn của Bà Triệu?', a: 'Lời "cưỡi gió, đạp sóng, chém cá kình" thể hiện khát vọng tự do, không cam chịu kiếp nô lệ; khẳng định ý chí và sức mạnh của người phụ nữ Việt. Đây là một trong những tuyên ngôn yêu nước sớm nhất của dân tộc.' },
    ],
  },

  'S6LSDL-w17-quiz': {
    topic: 'Lý Bí, Mai Thúc Loan, Phùng Hưng — kết thúc Bắc thuộc',
    intro: 'Suốt hơn 1000 năm Bắc thuộc, không khi nào người Việt thôi nổi dậy. Lý Bí, Mai Thúc Loan, Phùng Hưng và đỉnh cao là Ngô Quyền trên sông Bạch Đằng đã viết tiếp câu chuyện giành lại đất nước.',
    objectives: [
      'Nhớ các cuộc khởi nghĩa lớn: Lý Bí, Mai Thúc Loan, Phùng Hưng.',
      'Hiểu sự kiện Ngô Quyền chiến thắng Bạch Đằng (938) và ý nghĩa lịch sử.',
      'Nhận thức tính liên tục của cuộc đấu tranh giành độc lập.',
    ],
    theory: [
      { h: 'Khởi nghĩa Lý Bí và nước Vạn Xuân (542 — 544)' },
      { ul: [
        'Năm 542, Lý Bí (Lý Bôn) khởi nghĩa chống nhà Lương ở Thái Bình (Sơn Tây cũ).',
        'Sau 3 lần đánh bại quân Lương, năm 544 Lý Bí lên ngôi, xưng Lý Nam Đế, đặt tên nước là Vạn Xuân — "mong dân tộc trường tồn vạn xuân".',
        'Đặt kinh đô ở cửa sông Tô Lịch (Hà Nội), dựng chùa Khai Quốc, đúc tiền riêng.',
        'Sau khi Lý Nam Đế mất, Triệu Quang Phục (Triệu Việt Vương) tiếp tục chống quân Lương, đại thắng ở đầm Dạ Trạch.',
      ] },
      { h: 'Khởi nghĩa Mai Thúc Loan (713 — 722)' },
      { ul: [
        'Bùng nổ ở Hoan Châu (Nghệ An – Hà Tĩnh), chống ách đô hộ nhà Đường.',
        'Mai Thúc Loan xưng đế, lấy hiệu Mai Hắc Đế ("vua đen"), liên kết với Lâm Ấp, Chân Lạp.',
        'Đại quân lên tới hàng vạn, từng đánh chiếm thành Tống Bình (Hà Nội).',
      ] },
      { h: 'Khởi nghĩa Phùng Hưng (~776 — 791)' },
      { ul: [
        'Phùng Hưng khởi nghĩa ở Đường Lâm (Sơn Tây — Hà Nội ngày nay).',
        'Đánh chiếm thành Tống Bình, cai trị nhân từ, được dân tôn xưng Bố Cái Đại Vương ("cha mẹ của dân").',
      ] },
      { h: 'Ngô Quyền và chiến thắng Bạch Đằng (938)' },
      { ul: [
        'Năm 937, Dương Đình Nghệ bị Kiều Công Tiễn ám sát. Ngô Quyền (con rể Dương Đình Nghệ) đem quân từ Ái Châu ra hỏi tội.',
        'Kiều Công Tiễn cầu cứu Nam Hán. Quân Nam Hán do Hoằng Tháo chỉ huy kéo sang.',
        'Ngô Quyền cho cắm cọc gỗ bịt sắt dưới lòng sông Bạch Đằng, lợi dụng thủy triều.',
        'Khi nước triều rút, cọc nhô lên, thuyền giặc va vào bị đắm và đánh tan. Hoằng Tháo tử trận.',
        'Năm 939, Ngô Quyền xưng vương, đóng đô Cổ Loa — chấm dứt hơn 1000 năm Bắc thuộc.',
      ] },
      { note: 'Chiến thắng Bạch Đằng 938 mở ra kỉ nguyên độc lập tự chủ của dân tộc Việt Nam. Trận đánh thiên tài của Ngô Quyền còn được Lê Đại Hành (981) và Trần Hưng Đạo (1288) học theo, đánh thắng quân Tống và Nguyên Mông.' },
    ],
    examples: [
      { q: 'Vì sao chiến thắng Bạch Đằng 938 là một mốc son lịch sử?', a: 'Vì nó chấm dứt hơn 1000 năm Bắc thuộc, mở ra kỉ nguyên độc lập, tự chủ lâu dài cho dân tộc Việt Nam. Đồng thời, nó để lại nghệ thuật quân sự thiên tài: tận dụng địa hình sông nước và thủy triều — sau được Lê Hoàn, Trần Hưng Đạo kế thừa.' },
      { q: 'Vì sao Phùng Hưng được dân tôn là Bố Cái Đại Vương?', a: 'Vì sau khi chiếm Tống Bình, ông cai trị nhân từ, lo cho dân, được dân coi như "cha mẹ" của mình. "Bố Cái" trong tiếng Việt cổ nghĩa là cha – mẹ. Đó là sự thừa nhận đầy yêu mến của nhân dân.' },
    ],
  },

  'S6LSDL-w18-quiz': {
    topic: 'Ôn tập Lịch sử HK1',
    intro: 'Kết thúc HK1, các em cùng cô hệ thống lại toàn bộ kiến thức: từ "Lịch sử là gì", các nền văn minh cổ đại tới Văn Lang – Âu Lạc và 1000 năm Bắc thuộc.',
    objectives: [
      'Hệ thống hóa các nền văn minh cổ đại lớn của thế giới.',
      'Sắp xếp theo thời gian các nhà nước và cuộc khởi nghĩa của Việt Nam.',
      'Rút ra bài học chung từ thời cổ đại — Bắc thuộc.',
    ],
    theory: [
      { h: 'Các nền văn minh cổ đại lớn của thế giới' },
      { ul: [
        'Ai Cập (sông Nin): chữ tượng hình, kim tự tháp, papyrus.',
        'Lưỡng Hà (Ti-grơ – Ơ-phrát): chữ hình nêm, luật Hammurabi, hệ đếm 60.',
        'Ấn Độ (Ấn – Hằng): Phật giáo, đẳng cấp Vác-na, chữ số 0.',
        'Trung Quốc (Hoàng Hà – Trường Giang): chữ Hán, Nho giáo, Vạn Lý Trường Thành.',
        'Hy Lạp: thành bang, dân chủ A-ten, triết học, Olympic.',
        'La Mã: pháp luật, đường giao thông, chữ Latinh, Ki-tô giáo.',
      ] },
      { h: 'Tiến trình lịch sử Việt Nam thời cổ — Bắc thuộc' },
      { ul: [
        'Văn Lang (thế kỉ VII TCN — 208 TCN): Hùng Vương, kinh đô Phong Châu, 15 bộ.',
        'Âu Lạc (208 TCN — 179 TCN): An Dương Vương, kinh đô Cổ Loa, nỏ thần.',
        'Bắc thuộc lần 1 (179 TCN — 40 SCN): nhà Triệu, Hán.',
        'Khởi nghĩa Hai Bà Trưng (40 — 43).',
        'Bắc thuộc lần 2 — 3: các cuộc khởi nghĩa Bà Triệu (248), Lý Bí (542), Mai Thúc Loan (713), Phùng Hưng (776).',
        'Chiến thắng Bạch Đằng của Ngô Quyền (938) — kết thúc Bắc thuộc.',
      ] },
      { h: 'Bài học chung' },
      { ul: [
        'Sông ngòi sinh ra văn minh — văn minh sinh ra nhà nước.',
        'Văn minh là sự tiếp thu có chọn lọc, không phải sao chép máy móc.',
        'Dân tộc Việt Nam bền bỉ giữ gìn bản sắc qua 1000 năm Bắc thuộc.',
        'Khởi nghĩa giành độc lập là dòng chảy không bao giờ ngừng của lịch sử dân tộc.',
      ] },
      { note: 'Học lịch sử HK1, các em nhận ra: lịch sử không phải là "danh sách năm tháng" — đó là câu chuyện về cách con người tổ chức cuộc sống và chống lại áp bức.' },
    ],
    examples: [
      { q: 'Sắp xếp 4 sự kiện sau theo thứ tự thời gian: A. Hai Bà Trưng khởi nghĩa; B. Triệu Đà chiếm Âu Lạc; C. Chiến thắng Bạch Đằng; D. Nhà nước Văn Lang ra đời.', a: 'Thứ tự: D (~thế kỉ VII TCN) → B (179 TCN) → A (năm 40) → C (năm 938).' },
      { q: 'Vì sao có thể nói "trên đất nước ta, đấu tranh chống ngoại xâm là dòng chảy liên tục"?', a: 'Vì từ An Dương Vương chống Tần, Hai Bà Trưng chống Hán, Bà Triệu chống Ngô, Lý Bí – Triệu Quang Phục chống Lương, Mai Thúc Loan – Phùng Hưng chống Đường, đến Ngô Quyền đánh Nam Hán — gần như không thế hệ nào không nổi dậy đòi độc lập. Đó là truyền thống yêu nước bất khuất của dân tộc.' },
    ],
  },

  // ============================================================
  // ============= HK2 — PHẦN ĐỊA LÍ (T19–36) ===================
  // ============================================================

  'S6LSDL-w19-quiz': {
    topic: 'Hệ thống kinh — vĩ tuyến, tọa độ địa lí',
    intro: 'Bước vào HK2 phần Địa lí, cô trò mình cùng học cách "đánh số" Trái Đất để có thể xác định vị trí bất kì điểm nào trên hành tinh.',
    objectives: [
      'Hiểu khái niệm kinh tuyến, vĩ tuyến, kinh tuyến gốc, xích đạo.',
      'Biết cách xác định tọa độ địa lí của một điểm.',
      'Vận dụng vào việc xác định vị trí của Việt Nam.',
    ],
    theory: [
      { h: 'Kinh tuyến và vĩ tuyến' },
      { p: 'Để định vị một điểm trên Trái Đất hình cầu, người ta vẽ một mạng lưới các đường tưởng tượng. Đường nối hai cực Bắc – Nam gọi là kinh tuyến. Đường song song với xích đạo gọi là vĩ tuyến.' },
      { ul: [
        'Mọi kinh tuyến đều dài bằng nhau, cùng đi qua hai cực.',
        'Các vĩ tuyến nhỏ dần khi tiến về hai cực; xích đạo là vĩ tuyến lớn nhất.',
        'Có 360 kinh tuyến (mỗi cái cách 1°) và 180 vĩ tuyến (không kể xích đạo).',
      ] },
      { h: 'Mốc gốc — số 0' },
      { ul: [
        'Kinh tuyến gốc (0°): đi qua đài thiên văn Greenwich (London, Anh).',
        'Vĩ tuyến gốc (0°): xích đạo, chia Trái Đất làm 2 bán cầu Bắc – Nam.',
      ] },
      { h: 'Kinh độ — vĩ độ' },
      { ul: [
        'Kinh độ: khoảng cách góc từ kinh tuyến gốc đến điểm đó, đo về Đông (E) hay Tây (W).',
        'Vĩ độ: khoảng cách góc từ xích đạo đến điểm đó, đo về Bắc (N) hay Nam (S).',
        'Giá trị: kinh độ từ 0° đến 180°; vĩ độ từ 0° đến 90°.',
      ] },
      { h: 'Tọa độ địa lí' },
      { p: 'Tọa độ địa lí của một điểm là cặp (kinh độ; vĩ độ) của điểm đó. Ví dụ Hà Nội ở khoảng (105°50′Đ; 21°02′B) — tức kinh độ ~106° Đông, vĩ độ ~21° Bắc.' },
      { note: 'Mẹo nhớ: "Vĩ tuyến nằm ngang — vĩ tuyến chia Bắc – Nam. Kinh tuyến chạy dọc — kinh tuyến chia Đông – Tây."' },
    ],
    examples: [
      { q: 'Việt Nam nằm trong bán cầu nào? Vì sao?', a: 'Việt Nam nằm hoàn toàn ở Bắc bán cầu (vĩ độ Bắc, từ ~8°B đến ~23°B) và Đông bán cầu (kinh độ Đông, từ ~102°Đ đến ~109°Đ). Vì các điểm cực đều có vĩ độ Bắc và kinh độ Đông.' },
      { q: 'Cho điểm A ở 30°Đ, 45°B. Hãy nói rõ vị trí của điểm A.', a: 'Điểm A có kinh độ 30° Đông (cách kinh tuyến gốc Greenwich 30° về phía Đông) và vĩ độ 45° Bắc (cách xích đạo 45° về phía Bắc). Đó là khu vực nằm ở Đông Âu.' },
    ],
  },

  'S6LSDL-w20-quiz': {
    topic: 'Bản đồ — các yếu tố cơ bản',
    intro: 'Bản đồ là "phương tiện" của nhà địa lí. Bài học này giúp các em biết bản đồ là gì và đọc được những gì in trên đó.',
    objectives: [
      'Hiểu khái niệm bản đồ.',
      'Biết 3 yếu tố cơ bản: tỉ lệ, kí hiệu, phương hướng.',
      'Sử dụng được bản chú giải để đọc bản đồ đơn giản.',
    ],
    theory: [
      { h: 'Bản đồ là gì?' },
      { p: 'Bản đồ là hình vẽ thu nhỏ một phần hay toàn bộ bề mặt Trái Đất lên mặt phẳng, theo một tỉ lệ và bằng các kí hiệu nhất định.' },
      { h: 'Các loại bản đồ' },
      { ul: [
        'Bản đồ tự nhiên: thể hiện địa hình, sông ngòi, khí hậu.',
        'Bản đồ hành chính: thể hiện ranh giới quốc gia, tỉnh, thành phố.',
        'Bản đồ kinh tế: thể hiện công nghiệp, nông nghiệp, dịch vụ.',
        'Bản đồ giáo khoa: dùng trong nhà trường, tỉ lệ vừa phải.',
      ] },
      { h: '3 yếu tố cơ bản phải có' },
      { ul: [
        'Tỉ lệ bản đồ: cho biết mức thu nhỏ so với thực tế.',
        'Kí hiệu bản đồ: hình vẽ tượng trưng cho đối tượng địa lí.',
        'Phương hướng: thường được chỉ bằng mũi tên Bắc (N) hoặc qua mạng lưới kinh – vĩ tuyến.',
      ] },
      { h: 'Bản chú giải (legend)' },
      { p: 'Bản chú giải là phần giải thích ý nghĩa các kí hiệu trên bản đồ. Muốn đọc bản đồ, các em phải tra ngay bản chú giải để biết mỗi kí hiệu (chấm tròn, đường gạch, vùng màu) tượng trưng cho gì.' },
      { h: 'Quy trình đọc một bản đồ' },
      { ul: [
        'Bước 1: đọc tên bản đồ — biết bản đồ nói về gì.',
        'Bước 2: xem tỉ lệ và phương hướng.',
        'Bước 3: tra bản chú giải để hiểu kí hiệu.',
        'Bước 4: xác định thông tin cần tìm theo yêu cầu.',
      ] },
      { note: 'Một bản đồ không có chú giải, không có tỉ lệ và không có phương hướng — thì không phải bản đồ, mà chỉ là... bức tranh!' },
    ],
    examples: [
      { q: 'Khi đọc bản đồ tự nhiên Việt Nam, vì sao phần lớn miền Bắc – Tây Bắc lại tô màu nâu?', a: 'Vì trên bản đồ tự nhiên, màu nâu thường được dùng để biểu thị địa hình núi cao. Tây Bắc Việt Nam (Hoàng Liên Sơn, Phan-xi-păng) có nhiều núi cao trên 1500m nên được tô nâu sẫm.' },
      { q: 'Nếu bản đồ không có bản chú giải, em sẽ gặp khó khăn gì?', a: 'Không biết các kí hiệu (chấm tròn, vùng màu, gạch chéo…) tượng trưng cho cái gì — không thể đọc và sử dụng được bản đồ. Chú giải là "chìa khóa" để giải mã bản đồ.' },
    ],
  },

  'S6LSDL-w21-quiz': {
    topic: 'Tỉ lệ bản đồ',
    intro: 'Tỉ lệ bản đồ giúp các em biết khoảng cách thực tế giữa hai điểm chỉ bằng cách đo trên giấy. Đây là một "phép thuật toán học" cần thiết của nhà địa lí.',
    objectives: [
      'Hiểu khái niệm tỉ lệ bản đồ.',
      'Phân biệt tỉ lệ số và tỉ lệ thước.',
      'Tính được khoảng cách thực tế từ khoảng cách trên bản đồ.',
    ],
    theory: [
      { h: 'Tỉ lệ bản đồ là gì?' },
      { p: 'Tỉ lệ bản đồ cho biết khoảng cách trên bản đồ đã được thu nhỏ bao nhiêu lần so với khoảng cách thực tế ngoài mặt đất. Ví dụ tỉ lệ 1 : 100 000 nghĩa là 1 cm trên bản đồ ứng với 100 000 cm = 1 km ngoài thực tế.' },
      { h: 'Hai dạng thể hiện tỉ lệ' },
      { ul: [
        'Tỉ lệ số: ghi dưới dạng phân số, ví dụ 1 : 50 000 (hay 1/50 000).',
        'Tỉ lệ thước: đoạn thẳng có chia khoảng, mỗi khoảng ứng với một số km thực tế.',
      ] },
      { h: 'Bản đồ tỉ lệ lớn — nhỏ' },
      { ul: [
        'Tỉ lệ càng lớn (mẫu số nhỏ) → bản đồ càng chi tiết, phạm vi nhỏ. Ví dụ 1 : 5000.',
        'Tỉ lệ càng nhỏ (mẫu số lớn) → bản đồ càng ít chi tiết, phạm vi rộng. Ví dụ 1 : 5 000 000.',
      ] },
      { p: 'Bản đồ một xã thường tỉ lệ 1 : 10 000; bản đồ thế giới ~ 1 : 100 000 000.' },
      { h: 'Tính khoảng cách thực tế' },
      { p: 'Công thức: Khoảng cách thực tế = Khoảng cách trên bản đồ × Mẫu số tỉ lệ. Nhớ đổi đơn vị: 1 km = 100 000 cm.' },
      { note: 'Mẹo nhanh: với tỉ lệ 1 : 100 000 → cứ 1 cm bản đồ = 1 km thực. Với 1 : 1 000 000 → 1 cm = 10 km thực.' },
    ],
    examples: [
      { q: 'Bản đồ tỉ lệ 1 : 200 000, hai điểm A và B cách nhau 5 cm trên bản đồ. Tính khoảng cách thực tế.', a: 'Khoảng cách thực = 5 cm × 200 000 = 1 000 000 cm = 10 000 m = 10 km. Vậy A và B cách nhau 10 km ngoài thực tế.' },
      { q: 'Hai thành phố cách nhau 300 km. Trên bản đồ tỉ lệ 1 : 6 000 000, khoảng cách giữa chúng là bao nhiêu cm?', a: 'Đổi 300 km = 30 000 000 cm. Khoảng cách trên bản đồ = 30 000 000 ÷ 6 000 000 = 5 cm.' },
      { q: 'Trong các tỉ lệ 1:1000, 1:100 000, 1:10 000 000 — tỉ lệ nào lớn nhất?', a: 'Tỉ lệ 1:1000 là lớn nhất (vì mẫu số nhỏ nhất). Bản đồ này chi tiết nhất nhưng chỉ thể hiện được phạm vi nhỏ.' },
    ],
  },

  'S6LSDL-w22-quiz': {
    topic: 'Phương hướng — kí hiệu bản đồ',
    intro: 'Sau khi biết tỉ lệ, các em cần biết "hướng" và đọc được kí hiệu trên bản đồ — đó là bước cuối để thành "nhà thám hiểm địa lí".',
    objectives: [
      'Xác định được 8 hướng chính trên bản đồ.',
      'Phân biệt 3 loại kí hiệu: điểm, đường, diện tích.',
      'Hiểu khái niệm đường đồng mức.',
    ],
    theory: [
      { h: 'Phương hướng trên bản đồ' },
      { p: 'Quy ước chung: hướng Bắc ở phía trên bản đồ, Nam dưới, Đông phải, Tây trái. Nhiều bản đồ có thêm mũi tên chỉ hướng Bắc (N) để khẳng định rõ.' },
      { ul: [
        '4 hướng chính: Bắc (N), Nam (S), Đông (E), Tây (W).',
        '4 hướng phụ: Đông Bắc (NE), Đông Nam (SE), Tây Bắc (NW), Tây Nam (SW).',
      ] },
      { h: '3 loại kí hiệu bản đồ' },
      { ul: [
        'Kí hiệu điểm: chấm tròn, sao, hình vuông — biểu thị các đối tượng nhỏ như thành phố, mỏ khoáng sản, nhà máy.',
        'Kí hiệu đường: nét liền/đứt, mũi tên — biểu thị các đối tượng kéo dài như đường giao thông, sông, ranh giới.',
        'Kí hiệu diện tích: vùng tô màu/hoa văn — biểu thị các đối tượng có diện tích lớn như rừng, đồng bằng, biển.',
      ] },
      { h: 'Cách thể hiện độ cao — độ sâu' },
      { ul: [
        'Phân tầng màu: đồng bằng xanh lá, đồi vàng, núi cao nâu sẫm; biển nông xanh nhạt, biển sâu xanh sẫm.',
        'Đường đồng mức: đường nối các điểm có cùng độ cao tuyệt đối. Các đường đồng mức càng dày — sườn càng dốc.',
      ] },
      { h: 'Một vài quy ước thường gặp' },
      { ul: [
        'Sông: đường màu xanh dương uốn lượn.',
        'Đường biên giới quốc gia: nét đứt dày + dấu chấm.',
        'Thủ đô: sao đỏ trong vòng tròn.',
        'Mỏ than: kí hiệu hình tam giác đen.',
      ] },
      { note: 'Mỗi nhà địa lí phải "biết đọc bản đồ trước khi đi". Khi tới một nơi mới, các em hãy có thói quen mở bản đồ ra xem hướng và độ cao trước.' },
    ],
    examples: [
      { q: 'Trên bản đồ Việt Nam, Hà Nội nằm ở hướng nào so với TP. Hồ Chí Minh?', a: 'Hà Nội ở phía Bắc, TP. HCM ở phía Nam. Vậy Hà Nội nằm ở hướng Bắc (chính xác hơn là Bắc – Đông Bắc) so với TP. HCM.' },
      { q: 'Nếu hai đường đồng mức rất sát nhau, điều đó nói lên gì về địa hình?', a: 'Các đường đồng mức sát nhau → độ cao thay đổi nhanh trong khoảng cách nhỏ → sườn dốc. Ngược lại, đường đồng mức thưa → sườn thoải.' },
    ],
  },

  'S6LSDL-w23-quiz': {
    topic: 'Trái Đất trong hệ Mặt Trời',
    intro: 'Trái Đất chỉ là một trong 8 hành tinh quay quanh Mặt Trời. Cùng tìm hiểu vị trí của ngôi nhà chung của chúng ta trong vũ trụ.',
    objectives: [
      'Biết cấu tạo cơ bản của hệ Mặt Trời.',
      'Hiểu vị trí thứ ba và đặc biệt của Trái Đất.',
      'Giải thích vì sao Trái Đất có sự sống.',
    ],
    theory: [
      { h: 'Hệ Mặt Trời gồm gì?' },
      { p: 'Hệ Mặt Trời gồm Mặt Trời ở trung tâm và 8 hành tinh quay quanh, cùng nhiều tiểu hành tinh, sao chổi, sao băng. Mặt Trời là một ngôi sao — nguồn năng lượng (ánh sáng, nhiệt) duy nhất cho toàn hệ.' },
      { h: '8 hành tinh (từ trong ra ngoài)' },
      { ul: [
        'Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa — nhóm hành tinh đá.',
        'Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương — nhóm hành tinh khí khổng lồ.',
      ] },
      { h: 'Trái Đất — vị trí thứ ba' },
      { ul: [
        'Cách Mặt Trời trung bình ~150 triệu km (1 đơn vị thiên văn, AU).',
        'Có vệ tinh tự nhiên là Mặt Trăng.',
        'Là hành tinh duy nhất được biết có sự sống.',
      ] },
      { h: 'Vì sao Trái Đất có sự sống?' },
      { ul: [
        'Khoảng cách "vừa đủ" tới Mặt Trời → nhiệt độ phù hợp, nước tồn tại ở thể lỏng.',
        'Có khí quyển bảo vệ khỏi tia cực tím và thiên thạch.',
        'Có từ trường bảo vệ khỏi bão Mặt Trời.',
        'Có chu kỳ tự quay vừa phải → ngày đêm cân bằng.',
      ] },
      { note: 'Nếu Trái Đất gần Mặt Trời như Sao Kim — sẽ quá nóng (~460°C); xa như Sao Hỏa — sẽ quá lạnh. May mắn nằm trong "vùng sống được" (habitable zone) là điều kỳ diệu của hành tinh chúng ta.' },
    ],
    examples: [
      { q: 'Vì sao gọi Mặt Trời là một "ngôi sao" chứ không phải "hành tinh"?', a: 'Vì Mặt Trời tự phát sáng, tự sinh ra năng lượng nhờ phản ứng hạt nhân ở lõi. Còn hành tinh không tự phát sáng — chỉ phản chiếu ánh sáng Mặt Trời.' },
      { q: 'Vì sao Sao Hỏa từng được coi là "hành tinh có khả năng có sự sống"?', a: 'Vì Sao Hỏa gần Trái Đất nhất, có ngày – đêm gần 24h, có các mùa, có dấu vết nước ở dạng băng. Tuy nhiên khí quyển quá mỏng, lạnh và khô nên hiện không có sự sống.' },
    ],
  },

  'S6LSDL-w24-quiz': {
    topic: 'Hình dạng — kích thước Trái Đất',
    intro: 'Người xưa từng cho rằng Trái Đất phẳng. Phải mất hàng nghìn năm khoa học mới chứng minh: Trái Đất hình cầu — gần như một quả cam khổng lồ.',
    objectives: [
      'Mô tả được hình dạng và kích thước Trái Đất.',
      'Biết các bằng chứng Trái Đất hình cầu.',
      'Hiểu tỉ lệ giữa đại dương và lục địa.',
    ],
    theory: [
      { h: 'Trái Đất hình cầu (gần như)' },
      { p: 'Thực ra Trái Đất không phải hình cầu hoàn hảo — nó hơi dẹt ở hai cực và hơi phình ra ở xích đạo do lực ly tâm khi tự quay. Nhưng nói chung, nó là một khối cầu.' },
      { h: 'Bằng chứng Trái Đất hình cầu' },
      { ul: [
        'Khi tàu xa bờ, ta thấy phần dưới (thân tàu) biến mất trước, phần trên (cột buồm) biến mất sau — chứng tỏ bề mặt cong.',
        'Bóng Trái Đất trên Mặt Trăng (lúc nguyệt thực) luôn có dạng vòng cung.',
        'Ảnh chụp Trái Đất từ vệ tinh, tàu Apollo cho thấy rõ Trái Đất hình cầu.',
        'Ma-gien-lăng đi vòng quanh thế giới lần đầu (1519–1522) khẳng định Trái Đất là khối cầu.',
      ] },
      { h: 'Kích thước Trái Đất' },
      { ul: [
        'Bán kính trung bình: ~6371 km.',
        'Chu vi xích đạo: ~40 075 km.',
        'Diện tích bề mặt: ~510 triệu km².',
      ] },
      { h: 'Tỉ lệ đại dương — lục địa' },
      { ul: [
        'Đại dương chiếm ~71% bề mặt Trái Đất.',
        'Lục địa chỉ chiếm ~29%.',
        'Đó là lí do nhiều người gọi Trái Đất là "hành tinh xanh" — nhìn từ vũ trụ chủ yếu thấy màu xanh nước biển.',
      ] },
      { note: 'Nếu các em đi máy bay từ Hà Nội đến Tokyo, đường bay cong chứ không thẳng — vì máy bay đang đi theo đường ngắn nhất trên bề mặt cầu, gọi là cung lớn (great circle).' },
    ],
    examples: [
      { q: 'Vì sao chuyến đi vòng quanh thế giới của Ma-gien-lăng chứng minh được Trái Đất hình cầu?', a: 'Vì đoàn thuyền của Ma-gien-lăng xuất phát từ Tây Ban Nha, đi liên tục về một hướng và cuối cùng quay về chỗ cũ mà không phải quay lại. Điều đó chỉ có thể xảy ra trên một bề mặt cầu — không phải mặt phẳng.' },
      { q: 'Vì sao Trái Đất hơi dẹt ở hai cực?', a: 'Vì khi Trái Đất tự quay, lực ly tâm ở xích đạo lớn nhất → đẩy vật chất phình ra ở xích đạo, đồng thời ở hai cực bị dẹt vào. Kết quả: bán kính xích đạo lớn hơn bán kính cực ~21 km.' },
    ],
  },

  'S6LSDL-w25-quiz': {
    topic: 'Chuyển động tự quay quanh trục — ngày và đêm',
    intro: 'Mỗi 24 giờ, Trái Đất quay đủ một vòng quanh trục của nó. Chính chuyển động này sinh ra ngày và đêm, giờ múi và sự lệch hướng của gió.',
    objectives: [
      'Hiểu chuyển động tự quay quanh trục của Trái Đất.',
      'Giải thích được hiện tượng ngày và đêm.',
      'Biết hệ thống 24 múi giờ trên thế giới.',
    ],
    theory: [
      { h: 'Chuyển động tự quay quanh trục' },
      { ul: [
        'Trái Đất tự quay quanh một trục tưởng tượng, nối Bắc cực và Nam cực.',
        'Hướng quay: từ Tây sang Đông.',
        'Chu kỳ: ~24 giờ = 1 ngày đêm.',
        'Trục quay nghiêng 66°33′ so với mặt phẳng quỹ đạo.',
      ] },
      { h: 'Hệ quả 1 — Ngày và đêm luân phiên' },
      { p: 'Vì Trái Đất là hình cầu nên Mặt Trời chỉ chiếu sáng được nửa Trái Đất tại một thời điểm. Nửa được chiếu sáng là ban ngày; nửa khuất ánh sáng là ban đêm. Khi Trái Đất tự quay, các vùng trên bề mặt lần lượt được chiếu sáng → ngày và đêm luân phiên.' },
      { h: 'Hệ quả 2 — Giờ múi' },
      { ul: [
        'Bề mặt Trái Đất chia thành 24 múi giờ, mỗi múi rộng 15° kinh tuyến (vì 360°/24 = 15°).',
        'Múi giờ gốc (UTC+0) đi qua kinh tuyến Greenwich.',
        'Đi về phía Đông: cộng giờ; đi về phía Tây: trừ giờ.',
        'Việt Nam thuộc múi giờ UTC+7.',
      ] },
      { h: 'Hệ quả 3 — Lực Co-ri-ô-lít' },
      { p: 'Do Trái Đất tự quay, các vật chuyển động trên bề mặt (gió, dòng biển) bị lệch hướng: ở Bắc bán cầu lệch sang phải, ở Nam bán cầu lệch sang trái. Đây là một trong những nguyên nhân tạo gió mậu dịch.' },
      { note: 'Khi bạn ở Việt Nam ăn trưa lúc 12h, người London (UTC+0) mới ăn sáng lúc 5h; người New York (UTC-5) còn đang ngủ lúc 0h. Múi giờ làm cho cuộc sống toàn cầu vận hành nhịp nhàng.' },
    ],
    examples: [
      { q: 'Khi Hà Nội 12 giờ trưa, London (UTC+0) là mấy giờ?', a: 'Hà Nội múi giờ UTC+7, London UTC+0. Chênh nhau 7 giờ. Vì London ở phía Tây nên trừ giờ: 12 − 7 = 5 giờ sáng tại London.' },
      { q: 'Vì sao có hiện tượng ngày và đêm luân phiên?', a: 'Vì Trái Đất hình cầu (Mặt Trời chỉ chiếu sáng một nửa) và Trái Đất tự quay quanh trục từ Tây sang Đông. Khi Trái Đất quay, lần lượt từng vùng được chiếu sáng (ngày) rồi khuất sáng (đêm).' },
    ],
  },

  'S6LSDL-w26-quiz': {
    topic: 'Chuyển động quanh Mặt Trời — các mùa',
    intro: 'Ngoài tự quay, Trái Đất còn quay quanh Mặt Trời mỗi 365 ngày. Nhờ trục nghiêng, chuyển động này sinh ra bốn mùa và đêm dài – ngày ngắn khác nhau.',
    objectives: [
      'Mô tả chuyển động quanh Mặt Trời của Trái Đất.',
      'Giải thích hiện tượng các mùa ở hai bán cầu.',
      'Biết các ngày Hạ chí, Đông chí, Xuân phân, Thu phân.',
    ],
    theory: [
      { h: 'Chuyển động quanh Mặt Trời' },
      { ul: [
        'Trái Đất quay quanh Mặt Trời theo quỹ đạo gần tròn (hơi elip).',
        'Hướng chuyển động: từ Tây sang Đông (ngược chiều kim đồng hồ khi nhìn từ Bắc cực).',
        'Chu kỳ: 365,25 ngày = 1 năm.',
        'Trục Trái Đất luôn nghiêng 66°33′ và không đổi hướng trong suốt quỹ đạo.',
      ] },
      { h: '4 vị trí đặc biệt' },
      { ul: [
        'Xuân phân (~21/3): ngày và đêm bằng nhau ở khắp Trái Đất.',
        'Hạ chí (~22/6): bán cầu Bắc nghiêng nhiều nhất về Mặt Trời → ngày dài nhất ở Bắc bán cầu (mùa hè), đêm dài nhất ở Nam bán cầu (mùa đông).',
        'Thu phân (~23/9): ngày và đêm lại bằng nhau.',
        'Đông chí (~22/12): bán cầu Bắc lùi xa Mặt Trời → đêm dài nhất ở Bắc bán cầu (mùa đông), ngày dài nhất ở Nam bán cầu (mùa hè).',
      ] },
      { h: 'Vì sao có các mùa?' },
      { p: 'Do trục Trái Đất nghiêng, trong khi quay quanh Mặt Trời, lượng nhiệt nhận được ở mỗi bán cầu thay đổi theo thời gian trong năm. Khi bán cầu Bắc nghiêng về Mặt Trời, vùng này nhận nhiều nhiệt → mùa hè; khi nghiêng ra xa → mùa đông. Hai bán cầu Bắc và Nam có mùa ngược nhau.' },
      { h: 'Mùa ở Việt Nam' },
      { ul: [
        'Miền Bắc: có 4 mùa rõ rệt (xuân, hạ, thu, đông).',
        'Miền Nam: chỉ có 2 mùa (mưa và khô) do gần xích đạo, nhiệt độ ít chênh lệch.',
      ] },
      { note: 'Khi Hà Nội đang mùa đông (12/12), Sydney (Úc) lại đang mùa hè — vì hai thành phố ở hai bán cầu khác nhau.' },
    ],
    examples: [
      { q: 'Vì sao mùa hè ở Bắc bán cầu lại trùng với mùa đông ở Nam bán cầu?', a: 'Vì trục Trái Đất nghiêng và không đổi hướng. Khi Bắc bán cầu nghiêng về Mặt Trời (mùa hè) thì Nam bán cầu nghiêng ra xa (mùa đông). Hai bán cầu nhận lượng nhiệt ngược nhau.' },
      { q: 'Tại sao miền Nam Việt Nam chỉ có 2 mùa thay vì 4 mùa?', a: 'Vì miền Nam nằm gần xích đạo, nhiệt độ quanh năm cao và ít chênh lệch. Sự khác biệt chủ yếu là ở lượng mưa: mùa mưa (gió mùa Tây Nam) và mùa khô (gió mùa Đông Bắc đã suy yếu).' },
    ],
  },

  'S6LSDL-w27-quiz': {
    topic: 'Cấu tạo bên trong của Trái Đất',
    intro: 'Trái Đất không "đặc ruột" mà có cấu tạo nhiều lớp như một quả trứng khổng lồ. Bài học này giúp các em "nhìn xuyên" tới tận lõi.',
    objectives: [
      'Biết Trái Đất gồm 3 lớp chính.',
      'Nhận diện đặc điểm cơ bản của vỏ Trái Đất, lớp man-ti, lõi.',
      'Hiểu khái niệm "thạch quyển" và "mảng kiến tạo".',
    ],
    theory: [
      { h: 'Trái Đất gồm 3 lớp' },
      { ul: [
        'Vỏ Trái Đất (lớp ngoài cùng): mỏng, rắn, dày 5–70 km.',
        'Lớp man-ti (manti): dày ~2900 km, ở trạng thái dẻo quánh.',
        'Lõi Trái Đất: bán kính ~3470 km, gồm lõi ngoài lỏng và lõi trong rắn (chủ yếu là sắt, nicken).',
      ] },
      { h: 'Vỏ Trái Đất' },
      { ul: [
        'Là lớp đá rắn nơi con người sinh sống.',
        'Có hai loại: vỏ lục địa (dày, chủ yếu đá granit) và vỏ đại dương (mỏng, đá ba-dan).',
        'Vỏ Trái Đất + phần trên man-ti = thạch quyển — bị chia thành các mảng kiến tạo lớn.',
      ] },
      { h: 'Mảng kiến tạo' },
      { p: 'Thạch quyển không liền một khối mà chia thành ~7 mảng lớn (Á – Âu, Phi, Bắc Mỹ, Nam Mỹ, Thái Bình Dương, Ấn – Úc, Nam Cực) và vài mảng nhỏ. Các mảng "trôi" rất chậm trên lớp man-ti dẻo. Nơi các mảng va vào nhau hay tách rời chính là nơi sinh ra động đất, núi lửa, núi cao.' },
      { h: 'Lớp man-ti' },
      { p: 'Dù ở thể "dẻo quánh", lớp man-ti tạo nên dòng đối lưu chậm chạp, kéo các mảng kiến tạo phía trên dịch chuyển. Đây là "động cơ" của Trái Đất.' },
      { h: 'Lõi Trái Đất' },
      { p: 'Lõi ngoài (lỏng) chứa sắt – nicken nóng chảy. Dòng kim loại lỏng chuyển động tạo ra từ trường Trái Đất — bảo vệ ta khỏi gió Mặt Trời, đồng thời giúp la bàn chỉ hướng Bắc.' },
      { note: 'Nhiệt độ tăng dần khi đi xuống sâu: vỏ ~30°C, lõi trong tới ~5000°C — gần bằng nhiệt độ bề mặt Mặt Trời!' },
    ],
    examples: [
      { q: 'Vì sao vỏ Trái Đất lại có thể "trôi"?', a: 'Vì bên dưới vỏ là lớp man-ti dẻo quánh có dòng đối lưu. Các dòng đối lưu này kéo các mảng kiến tạo trên cùng dịch chuyển rất chậm (~vài cm/năm). Đây là cơ chế "lục địa trôi" hay "kiến tạo mảng".' },
      { q: 'Vì sao Trái Đất có từ trường?', a: 'Vì lõi ngoài là sắt – nicken lỏng chuyển động, sinh ra dòng điện rồi sinh ra từ trường (như một thanh nam châm khổng lồ). Từ trường này bảo vệ Trái Đất khỏi bão Mặt Trời và giúp định hướng la bàn.' },
    ],
  },

  'S6LSDL-w28-quiz': {
    topic: 'Núi lửa, động đất',
    intro: 'Núi lửa, động đất là những "phản ứng dữ dội" của Trái Đất. Hiểu chúng để biết phòng tránh và sống an toàn hơn.',
    objectives: [
      'Hiểu nguyên nhân và biểu hiện của núi lửa, động đất.',
      'Biết các vùng tập trung núi lửa, động đất trên thế giới.',
      'Nhận thức cách ứng xử khi có động đất.',
    ],
    theory: [
      { h: 'Núi lửa' },
      { ul: [
        'Núi lửa là hiện tượng mac-ma từ sâu trong lòng Trái Đất phun trào lên bề mặt qua một miệng.',
        'Sản phẩm phun trào: dung nham, khí, tro bụi.',
        'Núi lửa đang hoạt động, núi lửa ngủ, núi lửa tắt — phân loại theo tần suất phun.',
        'Vành đai lửa Thái Bình Dương — nơi tập trung 75% núi lửa thế giới (Nhật Bản, Indonesia, Philippines, Mỹ…).',
      ] },
      { h: 'Tác động của núi lửa' },
      { ul: [
        'Tiêu cực: vùi lấp nhà cửa, hủy hoại mùa màng, ô nhiễm khí quyển.',
        'Tích cực: đất bazan phong hóa từ dung nham rất màu mỡ, tốt cho trồng cao su, cà phê, hồ tiêu (Tây Nguyên Việt Nam).',
      ] },
      { h: 'Động đất' },
      { ul: [
        'Động đất là hiện tượng vỏ Trái Đất bị rung chuyển do năng lượng được giải phóng đột ngột bên trong lòng đất.',
        'Nguyên nhân chính: các mảng kiến tạo va chạm, dịch chuyển, đứt gãy.',
        'Cường độ đo bằng thang Richter (độ richter); thang MMI (mô tả mức độ thiệt hại).',
      ] },
      { h: 'Vùng dễ động đất' },
      { p: 'Cũng như núi lửa, động đất tập trung ở vành đai lửa Thái Bình Dương và vành đai Địa Trung Hải – Hi-ma-lay-a. Việt Nam ít bị động đất mạnh, nhưng vùng Tây Bắc đã từng có động đất 6 độ Richter.' },
      { h: 'Ứng xử khi có động đất' },
      { ul: [
        'Trong nhà: trốn dưới bàn chắc, tránh xa cửa kính, đồ vật cao có thể đổ.',
        'Ngoài trời: tránh xa nhà cao, cột điện, biển quảng cáo.',
        'Sau động đất: tắt bếp gas, ngắt điện, ra nơi rộng thoáng.',
      ] },
      { note: 'Nhật Bản dạy trẻ em tập diễn phòng động đất từ mẫu giáo. Đó là tinh thần "phòng còn hơn chống" — chúng ta cũng nên học theo.' },
    ],
    examples: [
      { q: 'Vì sao đất ở Tây Nguyên Việt Nam lại đỏ và tốt cho cây công nghiệp?', a: 'Vì Tây Nguyên có nguồn gốc núi lửa cổ. Dung nham bazan phun trào thời xa xưa, qua hàng triệu năm phong hóa thành đất đỏ bazan màu mỡ, thấm nước tốt — rất phù hợp trồng cao su, cà phê, hồ tiêu.' },
      { q: 'Khi đang ngồi học mà cảm thấy bàn ghế rung mạnh, em nên làm gì?', a: 'Bình tĩnh chui xuống dưới bàn vững, lấy tay che đầu, tránh xa cửa kính. Khi rung lắc dừng, mới di chuyển ra khỏi lớp theo lối thoát hiểm, không chen lấn, đi đến nơi rộng thoáng.' },
    ],
  },

  'S6LSDL-w29-quiz': {
    topic: 'Các dạng địa hình chính',
    intro: 'Bề mặt Trái Đất gồ ghề với núi, cao nguyên, đồng bằng, đồi. Mỗi dạng địa hình lại có vai trò riêng đối với đời sống con người.',
    objectives: [
      'Phân biệt 4 dạng địa hình: núi, cao nguyên, đồi, đồng bằng.',
      'Biết các vùng địa hình tiêu biểu của Việt Nam.',
      'Hiểu ảnh hưởng của địa hình tới đời sống và sản xuất.',
    ],
    theory: [
      { h: 'Núi' },
      { ul: [
        'Đặc điểm: nhô cao, sườn dốc, đỉnh nhọn (núi trẻ) hay tròn (núi già).',
        'Phân loại theo độ cao: thấp (<1000m), trung bình (1000–2000m), cao (>2000m).',
        'Ví dụ: Phan-xi-păng (3143m) — "nóc nhà Đông Dương" thuộc dãy Hoàng Liên Sơn.',
      ] },
      { h: 'Cao nguyên' },
      { ul: [
        'Đặc điểm: độ cao tuyệt đối lớn, nhưng bề mặt tương đối bằng phẳng, sườn dốc rõ.',
        'Việt Nam có các cao nguyên Tây Nguyên: Pleiku, Đắk Lắk, Lâm Viên, Di Linh.',
        'Cao nguyên đá Đồng Văn (Hà Giang) là Công viên địa chất toàn cầu.',
      ] },
      { h: 'Đồi' },
      { ul: [
        'Đặc điểm: dạng địa hình nhô cao nhưng độ cao thấp (<200m), sườn thoải, đỉnh tròn.',
        'Tập trung ở vùng trung du Bắc Bộ (Phú Thọ, Bắc Giang).',
      ] },
      { h: 'Đồng bằng' },
      { ul: [
        'Đặc điểm: tương đối bằng phẳng, độ cao thấp (<200m).',
        'Phân loại: đồng bằng bồi tụ do sông (đồng bằng sông Hồng, sông Cửu Long), đồng bằng mài mòn ven biển.',
        'Là vùng tập trung dân cư, sản xuất lương thực chính.',
      ] },
      { h: 'Ảnh hưởng của địa hình' },
      { ul: [
        'Đồng bằng: thuận lợi trồng lúa, xây dựng đô thị, giao thông.',
        'Cao nguyên: thuận lợi cây công nghiệp, chăn nuôi, du lịch.',
        'Núi: lâm nghiệp, thủy điện, du lịch — nhưng giao thông khó khăn.',
      ] },
      { note: 'Việt Nam có 3/4 diện tích là đồi núi, chỉ 1/4 là đồng bằng. Tuy nhiên, đồng bằng (sông Hồng, sông Cửu Long) lại tập trung phần lớn dân cư và sản xuất lúa gạo.' },
    ],
    examples: [
      { q: 'So sánh ngắn gọn cao nguyên và đồng bằng.', a: 'Cao nguyên: độ cao tuyệt đối lớn (thường >500m), bề mặt bằng phẳng nhưng có sườn dốc rõ. Đồng bằng: độ cao thấp (<200m), bằng phẳng. Cao nguyên thuận lợi cây công nghiệp; đồng bằng thuận lợi trồng lúa, dân cư đông.' },
      { q: 'Vì sao Đồng bằng sông Cửu Long là vựa lúa lớn nhất Việt Nam?', a: 'Vì đồng bằng rộng (~40 000 km²), đất phù sa màu mỡ do sông Mê Công bồi đắp, khí hậu cận xích đạo nhiều mưa, mạng lưới sông ngòi chằng chịt dễ tưới tiêu — rất thích hợp trồng lúa 2–3 vụ/năm.' },
    ],
  },

  'S6LSDL-w30-quiz': {
    topic: 'Khoáng sản',
    intro: 'Đất nước ta giàu khoáng sản — từ than đá Quảng Ninh, dầu mỏ Vũng Tàu tới sắt Thái Nguyên. Bài học này giúp các em hiểu khoáng sản là gì và vai trò của chúng.',
    objectives: [
      'Hiểu khái niệm khoáng sản và mỏ khoáng sản.',
      'Phân biệt 3 nhóm khoáng sản: nhiên liệu, kim loại, phi kim.',
      'Biết một số khoáng sản quan trọng của Việt Nam.',
    ],
    theory: [
      { h: 'Khoáng sản là gì?' },
      { p: 'Khoáng sản là những tích tụ tự nhiên các nguyên tố hóa học, hợp chất, khoáng vật trong vỏ Trái Đất mà con người có thể khai thác để sử dụng. Nơi tập trung khoáng sản gọi là mỏ.' },
      { h: 'Ba nhóm khoáng sản' },
      { ul: [
        'Khoáng sản nhiên liệu (năng lượng): than đá, dầu mỏ, khí đốt, urani. Cung cấp năng lượng cho công nghiệp, giao thông.',
        'Khoáng sản kim loại: sắt, đồng, chì, kẽm, vàng, bô-xít, ti-tan. Nguyên liệu luyện kim.',
        'Khoáng sản phi kim: muối mỏ, đá vôi, apatit, kim cương, đá quý. Dùng trong xây dựng, hóa chất, trang sức.',
      ] },
      { h: 'Khoáng sản tiêu biểu của Việt Nam' },
      { ul: [
        'Than đá: Quảng Ninh (lớn nhất Đông Nam Á).',
        'Dầu mỏ – khí đốt: thềm lục địa phía Nam (Bạch Hổ, Rồng, Lan Tây – Lan Đỏ).',
        'Bô-xít: Tây Nguyên (Đắk Nông, Lâm Đồng).',
        'Sắt: Thái Nguyên, Hà Tĩnh (Thạch Khê).',
        'Apatit: Lào Cai (làm phân lân).',
        'Đá vôi: Hà Nam, Ninh Bình, Quảng Ninh (làm xi-măng).',
      ] },
      { h: 'Khai thác hợp lí' },
      { ul: [
        'Khoáng sản không thể tái tạo trong thời gian ngắn → cần khai thác tiết kiệm.',
        'Khai thác phải đi kèm bảo vệ môi trường, hoàn thổ sau khai thác.',
        'Sử dụng tổng hợp: than vừa làm điện, vừa làm hóa chất.',
        'Thay thế dần bằng năng lượng tái tạo (gió, mặt trời).',
      ] },
      { note: 'Một quốc gia giàu khoáng sản chưa chắc giàu có — nếu chỉ bán thô. Cần chế biến sâu để tạo giá trị gia tăng, vừa bảo vệ tài nguyên cho con cháu.' },
    ],
    examples: [
      { q: 'Vì sao nói than đá là tài nguyên không thể tái tạo?', a: 'Vì than đá hình thành từ xác thực vật bị vùi lấp hàng triệu năm trước, qua quá trình biến đổi địa chất rất chậm. Trong thời gian ngắn (vài chục, vài trăm năm) không thể sinh thêm than. Do đó đào hết là hết — cần khai thác tiết kiệm.' },
      { q: 'Vì sao nói Quảng Ninh là "thủ đô than" của Việt Nam?', a: 'Vì Quảng Ninh có trữ lượng than antraxit lớn nhất nước, chất lượng cao, lộ thiên dễ khai thác. Đây cũng là vùng cung cấp than chủ yếu cho các nhà máy nhiệt điện và xuất khẩu.' },
    ],
  },

  'S6LSDL-w31-quiz': {
    topic: 'Khí quyển — các tầng khí quyển',
    intro: 'Bao bọc Trái Đất là một lớp khí quyển khổng lồ — vừa cho ta thở, vừa che chắn ta khỏi tia vũ trụ. Cùng tìm hiểu cấu tạo của "tấm chăn xanh" này.',
    objectives: [
      'Hiểu khí quyển là gì và thành phần của không khí.',
      'Phân biệt các tầng khí quyển.',
      'Biết vai trò của tầng ô-zôn.',
    ],
    theory: [
      { h: 'Khí quyển là gì?' },
      { p: 'Khí quyển là lớp không khí bao quanh Trái Đất, dày khoảng vài trăm km, mỏng dần ra ngoài không gian. Chính khí quyển làm cho Trái Đất có sự sống và bầu trời màu xanh.' },
      { h: 'Thành phần không khí' },
      { ul: [
        'Khí ni-tơ (N₂): ~78%.',
        'Khí ô-xi (O₂): ~21%.',
        'Các khí khác (CO₂, hơi nước, ô-zôn, ar-gon…): ~1%.',
      ] },
      { h: 'Các tầng khí quyển (từ thấp lên cao)' },
      { ul: [
        'Đối lưu: 0 – ~16 km (xích đạo) hay 8 km (cực). Tập trung 75% khối lượng khí quyển. Đây là tầng có mây, mưa, gió — quyết định thời tiết.',
        'Bình lưu: ~16 – 50 km. Chứa tầng ô-zôn bảo vệ ta khỏi tia cực tím.',
        'Tầng giữa: 50 – 80 km. Nhiệt độ rất thấp.',
        'Tầng nhiệt (ion): 80 – 500 km. Phản xạ sóng vô tuyến → các em nghe được radio xa.',
        'Ngoài cùng: trên 500 km — bắt đầu hòa với không gian.',
      ] },
      { h: 'Tầng ô-zôn — "chiếc ô" của Trái Đất' },
      { p: 'Tầng ô-zôn ở độ cao 20–25 km (trong tầng bình lưu), hấp thụ tới 97–99% tia tử ngoại có hại từ Mặt Trời. Tuy nhiên, các hợp chất CFC từ tủ lạnh, máy lạnh cũ đã làm thủng tầng ô-zôn ở Nam Cực — đó là vấn đề môi trường nghiêm trọng của loài người.' },
      { h: 'Tại sao càng lên cao càng lạnh?' },
      { p: 'Trong tầng đối lưu, mặt đất hấp thụ ánh sáng Mặt Trời rồi tỏa nhiệt lên không khí. Vì vậy không khí gần mặt đất nóng nhất; lên cao 100m, nhiệt độ giảm ~0,6°C. Đó là lí do đỉnh Phan-xi-păng quanh năm mát lạnh, đôi khi có băng giá.' },
      { note: 'Không có khí quyển, ban ngày nhiệt độ Trái Đất sẽ tới 120°C, ban đêm xuống tới -150°C (như Mặt Trăng). Khí quyển là "máy điều hòa" khổng lồ giữ nhiệt độ ổn định cho sự sống.' },
    ],
    examples: [
      { q: 'Vì sao mây và mưa chỉ xảy ra ở tầng đối lưu?', a: 'Vì tầng đối lưu chứa phần lớn hơi nước và bụi. Hơi nước bốc lên gặp lạnh ngưng tụ thành mây, sau đó tạo mưa. Các tầng trên hầu như không có hơi nước nên không có mây – mưa.' },
      { q: 'Vì sao đỉnh Phan-xi-păng lạnh hơn nhiều so với chân núi?', a: 'Vì đỉnh Phan-xi-păng cao ~3143m. Cứ lên cao 100m, nhiệt độ giảm ~0,6°C. Vậy đỉnh núi lạnh hơn chân núi khoảng 18°C. Mùa đông trên đỉnh có thể có băng giá, trong khi Sa Pa dưới chân vẫn mát lạnh.' },
    ],
  },

  'S6LSDL-w32-quiz': {
    topic: 'Thời tiết — khí hậu — các đới khí hậu',
    intro: 'Hà Nội tháng 6 nóng oi, tháng 12 lạnh buốt — đó là thời tiết. Còn nói "Hà Nội thuộc khí hậu nhiệt đới gió mùa" — đó là khí hậu. Cùng phân biệt hai khái niệm này.',
    objectives: [
      'Phân biệt thời tiết và khí hậu.',
      'Biết các yếu tố cấu thành thời tiết, khí hậu.',
      'Nhận diện 5 đới khí hậu chính trên Trái Đất.',
    ],
    theory: [
      { h: 'Thời tiết là gì?' },
      { p: 'Thời tiết là trạng thái của khí quyển tại một nơi, trong một thời gian ngắn (giờ, ngày). Ví dụ: "Hôm nay Hà Nội nắng nóng 35°C" — đó là thời tiết hôm nay.' },
      { h: 'Khí hậu là gì?' },
      { p: 'Khí hậu là tình trạng trung bình của thời tiết tại một nơi trong nhiều năm (thường 30 năm trở lên). Ví dụ: "Hà Nội có khí hậu nhiệt đới gió mùa, có 4 mùa rõ rệt" — đó là khí hậu Hà Nội.' },
      { h: 'Các yếu tố thời tiết, khí hậu' },
      { ul: [
        'Nhiệt độ không khí (đo bằng nhiệt kế, °C).',
        'Khí áp (đo bằng phong vũ biểu).',
        'Gió (hướng và tốc độ).',
        'Độ ẩm và lượng mưa (đo bằng vũ kế).',
      ] },
      { h: '5 đới khí hậu chính trên Trái Đất' },
      { ul: [
        'Đới nóng (nhiệt đới): từ 23°27′ B đến 23°27′ N. Nóng quanh năm, mưa nhiều. Việt Nam thuộc đới này.',
        'Hai đới ôn hòa (ôn đới): từ 23°27′ đến 66°33′ ở hai bán cầu. 4 mùa rõ rệt.',
        'Hai đới lạnh (hàn đới): từ 66°33′ đến 90° ở hai bán cầu. Quanh năm lạnh, băng tuyết.',
      ] },
      { h: 'Vì sao có các đới khí hậu?' },
      { p: 'Do hình dạng cầu của Trái Đất, các vùng gần xích đạo nhận tia Mặt Trời gần thẳng góc → nhiều nhiệt; các vùng gần cực nhận tia Mặt Trời nghiêng → ít nhiệt. Kết quả: nhiệt độ giảm dần từ xích đạo về hai cực, sinh ra 5 đới khí hậu.' },
      { note: 'Khí hậu giống "tính cách" của một nơi (lâu dài, ổn định); thời tiết giống "tâm trạng" trong một ngày (thay đổi liên tục).' },
    ],
    examples: [
      { q: 'Câu "Sa Pa có khí hậu mát mẻ quanh năm" và "Hôm nay Sa Pa có mưa nhỏ" — câu nào nói về khí hậu, câu nào nói về thời tiết?', a: 'Câu đầu nói về khí hậu (đặc trưng lâu dài của Sa Pa). Câu sau nói về thời tiết (trạng thái khí quyển hôm nay).' },
      { q: 'Vì sao Việt Nam thuộc đới khí hậu nhiệt đới nhưng miền Bắc vẫn có mùa đông lạnh?', a: 'Vì miền Bắc Việt Nam còn chịu ảnh hưởng của gió mùa Đông Bắc thổi từ vùng cao áp Si-bia (Nga). Gió lạnh tràn về làm nhiệt độ giảm sâu, có khi xuống dưới 10°C. Đó là khí hậu nhiệt đới gió mùa — biến thể đặc biệt của đới nóng.' },
    ],
  },

  'S6LSDL-w33-quiz': {
    topic: 'Thủy quyển — đại dương, sông hồ',
    intro: '71% bề mặt Trái Đất là nước. Bài học này giúp các em hiểu nước phân bố ra sao và đóng vai trò gì trong cuộc sống.',
    objectives: [
      'Biết các bộ phận chính của thủy quyển.',
      'Phân biệt sông, hồ, biển, đại dương.',
      'Hiểu vai trò của nước đối với đời sống.',
    ],
    theory: [
      { h: 'Thủy quyển là gì?' },
      { p: 'Thủy quyển là toàn bộ lớp nước trên Trái Đất, ở mọi trạng thái (lỏng, rắn, hơi). Trong đó, ~97,5% là nước mặn ở biển và đại dương; chỉ 2,5% là nước ngọt — và đa số nước ngọt lại đóng băng ở Bắc – Nam cực.' },
      { h: 'Bốn đại dương' },
      { ul: [
        'Thái Bình Dương — lớn nhất, sâu nhất.',
        'Đại Tây Dương — nối Bắc cực và Nam cực.',
        'Ấn Độ Dương — nằm giữa châu Phi, châu Á và châu Úc.',
        'Bắc Băng Dương — nhỏ nhất, lạnh nhất.',
      ] },
      { h: 'Biển và đại dương khác nhau ra sao?' },
      { p: 'Biển nhỏ hơn đại dương, thường nằm ven lục địa. Ví dụ Biển Đông là một biển — một phần của Thái Bình Dương. Đại dương lớn hơn nhiều, là khối nước chính ở giữa các châu lục.' },
      { h: 'Sông' },
      { ul: [
        'Sông là dòng nước chảy thường xuyên, tương đối ổn định.',
        'Mỗi sông có: nguồn (thường ở vùng núi), thượng lưu, trung lưu, hạ lưu và cửa sông.',
        'Mạng lưới sông gồm sông chính và các phụ lưu, chi lưu — gọi là lưu vực sông.',
        'Việt Nam có 2 hệ thống sông lớn: sông Hồng – Thái Bình ở Bắc, sông Mê Công ở Nam.',
      ] },
      { h: 'Hồ' },
      { ul: [
        'Hồ là vùng nước đọng tự nhiên trên lục địa.',
        'Phân loại theo nguồn gốc: hồ kiến tạo, hồ băng hà, hồ miệng núi lửa, hồ móng ngựa (do sông đổi dòng).',
        'Ví dụ: Hồ Tây (Hà Nội) là hồ móng ngựa, hình thành từ sông Hồng đổi dòng.',
      ] },
      { h: 'Vai trò của nước' },
      { ul: [
        'Cung cấp nước uống, sinh hoạt, nông nghiệp.',
        'Giao thông đường thủy, thủy điện.',
        'Cân bằng nhiệt độ Trái Đất, điều hòa khí hậu.',
        'Là môi trường sống của vô số sinh vật.',
      ] },
      { note: 'Dù 71% Trái Đất là nước, lượng nước ngọt có thể dùng được chỉ chưa tới 1% tổng số nước. Vì vậy, mỗi giọt nước đều quý — đừng quên khóa vòi khi đánh răng.' },
    ],
    examples: [
      { q: 'Vì sao Hồ Tây ở Hà Nội có hình móng ngựa?', a: 'Vì Hồ Tây vốn là một khúc của sông Hồng cổ. Theo thời gian, sông Hồng đổi dòng, để lại đoạn cong cũ thành hồ. Loại hồ này gọi là hồ móng ngựa (oxbow lake).' },
      { q: 'Vì sao nước biển có vị mặn?', a: 'Vì nước mưa, sông suối hòa tan các muối từ đất đá rồi đổ ra biển. Nước bốc hơi, nhưng muối ở lại. Quá trình này diễn ra hàng tỉ năm khiến đại dương có độ mặn trung bình ~35 g muối/lít.' },
    ],
  },

  'S6LSDL-w34-quiz': {
    topic: 'Đất — các nhân tố hình thành đất',
    intro: 'Lớp đất dưới chân các em là kết quả của hàng nghìn năm phong hóa đá, hoạt động của sinh vật, và bàn tay con người. Đó là "lớp da" mỏng manh nuôi sống cả nhân loại.',
    objectives: [
      'Hiểu đất là gì và quá trình hình thành đất.',
      'Biết các nhân tố hình thành đất.',
      'Nhận diện một số loại đất chính của Việt Nam.',
    ],
    theory: [
      { h: 'Đất là gì?' },
      { p: 'Đất (thổ nhưỡng) là lớp vật chất tơi xốp ở bề mặt Trái Đất, được tạo thành bởi sự phong hóa đá kết hợp với chất hữu cơ từ sinh vật. Đất khác với đá: đất có độ phì — khả năng cung cấp nước, dinh dưỡng cho cây trồng.' },
      { h: 'Các nhân tố hình thành đất' },
      { ul: [
        'Đá mẹ: gốc rễ vật chất của đất — phong hóa từ đá nào sẽ ra đất tương ứng (đá bazan → đất đỏ; đá vôi → đất xám).',
        'Khí hậu: nhiệt độ, mưa ảnh hưởng đến tốc độ phong hóa và phân giải chất hữu cơ.',
        'Sinh vật: vi sinh vật, giun đất, rễ cây làm đất tơi xốp và giàu mùn.',
        'Địa hình: ảnh hưởng đến tốc độ rửa trôi, xói mòn; sườn dốc đất bị bào mòn nhanh.',
        'Thời gian: đất hình thành rất chậm — 1 cm đất có thể cần hàng trăm năm.',
        'Con người: cày bừa, bón phân, trồng cây... có thể cải tạo hay phá hoại đất.',
      ] },
      { h: 'Một số loại đất chính của Việt Nam' },
      { ul: [
        'Đất phù sa: ở các đồng bằng sông Hồng, sông Cửu Long — màu mỡ, trồng lúa nước.',
        'Đất đỏ bazan: Tây Nguyên — phù hợp cà phê, cao su, hồ tiêu.',
        'Đất feralit: vùng đồi núi — chua, nghèo bazơ, trồng cây công nghiệp dài ngày.',
        'Đất mặn, đất phèn: vùng ven biển Nam Bộ — cần thau chua rửa mặn.',
      ] },
      { h: 'Bảo vệ đất' },
      { ul: [
        'Trồng rừng, giữ thảm cỏ chống xói mòn.',
        'Bón phân hữu cơ tăng độ phì.',
        'Luân canh cây trồng, không khai thác kiệt sức đất.',
        'Hạn chế thuốc trừ sâu — bảo vệ vi sinh vật trong đất.',
      ] },
      { note: 'Mỗi gam đất tốt chứa hàng tỉ vi khuẩn — đó là cả một "thành phố sống" dưới chân ta. Bảo vệ đất chính là bảo vệ nguồn sống.' },
    ],
    examples: [
      { q: 'Vì sao đất ở đồng bằng sông Cửu Long lại màu mỡ?', a: 'Vì đó là đất phù sa do sông Mê Công bồi đắp hàng nghìn năm. Phù sa giàu khoáng chất, tơi xốp, giữ nước tốt — rất phù hợp trồng lúa nước. Mỗi mùa lũ, sông lại bồi thêm một lớp phù sa mới.' },
      { q: 'Vì sao trồng rừng giúp bảo vệ đất?', a: 'Vì tán lá rừng chắn mưa, giảm xói mòn; rễ cây giữ đất không bị nước cuốn trôi; lá rụng phân hủy thành mùn, tăng độ phì cho đất. Phá rừng → đất bị xói mòn nhanh, thành đồi trọc khô cằn.' },
    ],
  },

  'S6LSDL-w35-quiz': {
    topic: 'Sinh vật — đa dạng sinh học',
    intro: 'Trái Đất có hàng triệu loài sinh vật chia sẻ ngôi nhà với chúng ta. Bài học này giúp các em hiểu sự đa dạng kì diệu ấy và biết vì sao phải bảo vệ nó.',
    objectives: [
      'Hiểu khái niệm sinh quyển và đa dạng sinh học.',
      'Biết một số đới sinh vật chính.',
      'Nhận thức nguyên nhân và hệ quả của suy giảm đa dạng sinh học.',
    ],
    theory: [
      { h: 'Sinh quyển — đa dạng sinh học' },
      { p: 'Sinh quyển là lớp vỏ Trái Đất nơi có sự sống, gồm tầng đáy đại dương đến tầng thấp của khí quyển. Đa dạng sinh học là sự phong phú về số lượng loài, gen di truyền và hệ sinh thái trên Trái Đất.' },
      { h: 'Các nhân tố ảnh hưởng đến phân bố sinh vật' },
      { ul: [
        'Khí hậu (nhiệt độ, lượng mưa): quan trọng nhất.',
        'Đất, địa hình.',
        'Sinh vật khác (cạnh tranh, cộng sinh).',
        'Con người (khai thác, săn bắn, phá rừng).',
      ] },
      { h: 'Các đới sinh vật trên cạn' },
      { ul: [
        'Đới nóng: rừng nhiệt đới ẩm (Amazon, Đông Nam Á) — đa dạng nhất, "lá phổi xanh" Trái Đất.',
        'Đới ôn hòa: rừng lá rộng rụng lá, rừng lá kim, thảo nguyên.',
        'Đới lạnh: đồng rêu (tundra), băng tuyết.',
      ] },
      { h: 'Sinh vật ở Việt Nam' },
      { ul: [
        'Việt Nam là một trong 16 quốc gia giàu đa dạng sinh học nhất thế giới.',
        '~10% số loài thực vật và động vật trên Trái Đất sống ở Việt Nam.',
        'Loài đặc hữu: voọc mũi hếch, sao la (mới phát hiện 1992), gà lôi lam đuôi trắng.',
      ] },
      { h: 'Suy giảm đa dạng sinh học' },
      { ul: [
        'Nguyên nhân: phá rừng, săn bắt, ô nhiễm, biến đổi khí hậu.',
        'Hệ quả: nhiều loài tuyệt chủng, mất cân bằng sinh thái, mất nguồn gen quý.',
        'Việt Nam: tê giác Java đã tuyệt chủng ở VN năm 2010 (cá thể cuối cùng bị bắn).',
      ] },
      { h: 'Bảo vệ đa dạng sinh học' },
      { ul: [
        'Lập vườn quốc gia, khu bảo tồn (Cúc Phương, Cát Tiên, Phong Nha — Kẻ Bàng…).',
        'Cấm săn bắn, buôn bán động vật hoang dã.',
        'Tuyên truyền nâng cao ý thức cộng đồng.',
        'Trồng rừng, phục hồi sinh cảnh.',
      ] },
      { note: 'Mất một loài sinh vật giống như mất đi một cuốn sách trong "thư viện sự sống" — không bao giờ có lại. Mỗi loài là kết quả của hàng triệu năm tiến hóa.' },
    ],
    examples: [
      { q: 'Vì sao rừng nhiệt đới được gọi là "lá phổi xanh" của Trái Đất?', a: 'Vì rừng nhiệt đới (Amazon, Đông Nam Á, Trung Phi) hấp thụ một lượng lớn khí CO₂ và thải ra khí O₂ qua quá trình quang hợp. Đồng thời, đây là nơi tập trung 50% đa dạng sinh học của hành tinh.' },
      { q: 'Vì sao Việt Nam là một trong các quốc gia có đa dạng sinh học cao?', a: 'Vì Việt Nam có địa hình đa dạng (núi, đồng bằng, biển), khí hậu nhiệt đới gió mùa với nhiều tiểu khí hậu, lại nằm ở ngã ba sinh giới (giữa Hi-ma-lay-a, Sun-da, Hoa Nam) — sinh vật ba vùng giao nhau ở Việt Nam, tạo ra sự đa dạng đặc biệt.' },
    ],
  },

  'S6LSDL-w36-quiz': {
    topic: 'Con người và thiên nhiên — bảo vệ môi trường',
    intro: 'Khép lại HK2, các em cùng cô nhìn lại mối quan hệ giữa con người và thiên nhiên: vừa được thiên nhiên nuôi dưỡng, vừa đang đe dọa chính ngôi nhà chung của mình.',
    objectives: [
      'Hiểu mối quan hệ hai chiều giữa con người và thiên nhiên.',
      'Nhận diện các vấn đề môi trường toàn cầu.',
      'Rút ra hành động bảo vệ môi trường ở mức cá nhân và cộng đồng.',
    ],
    theory: [
      { h: 'Con người phụ thuộc vào thiên nhiên' },
      { ul: [
        'Khí thở (O₂) — từ cây xanh, đại dương.',
        'Nước uống — từ sông, hồ, mạch nước ngầm.',
        'Thức ăn — từ đất, nước, sinh vật.',
        'Nguyên liệu cho công nghiệp — từ khoáng sản, rừng.',
        'Cảnh quan, sức khỏe tinh thần — từ thiên nhiên.',
      ] },
      { h: 'Con người tác động đến thiên nhiên' },
      { ul: [
        'Tích cực: trồng rừng, lập khu bảo tồn, phát triển năng lượng tái tạo.',
        'Tiêu cực: phá rừng, ô nhiễm nước – không khí, khai thác kiệt quệ.',
      ] },
      { h: 'Các vấn đề môi trường toàn cầu' },
      { ul: [
        'Biến đổi khí hậu: nhiệt độ trung bình toàn cầu tăng → băng tan, nước biển dâng, thiên tai cực đoan.',
        'Ô nhiễm không khí: khói bụi từ giao thông, công nghiệp.',
        'Ô nhiễm nước: rác thải, hóa chất, vi nhựa trong đại dương.',
        'Mất rừng và đa dạng sinh học: hàng triệu hecta rừng biến mất mỗi năm.',
        'Suy thoái đất: sa mạc hóa, xói mòn, mặn hóa.',
      ] },
      { h: 'Tình hình Việt Nam' },
      { ul: [
        'Đồng bằng sông Cửu Long là một trong những vùng bị tổn thương nặng nhất bởi nước biển dâng.',
        'Sạt lở, hạn hán, xâm nhập mặn ngày càng nghiêm trọng.',
        'Việt Nam cam kết đạt phát thải ròng bằng 0 (Net Zero) vào năm 2050 tại COP26.',
      ] },
      { h: 'Em có thể làm gì?' },
      { ul: [
        'Tiết kiệm điện, nước, giấy.',
        'Đi bộ, đi xe đạp, sử dụng giao thông công cộng.',
        'Phân loại rác, hạn chế đồ nhựa dùng một lần.',
        'Trồng cây xanh ở trường, ở nhà.',
        'Tuyên truyền cho gia đình, bạn bè cùng làm.',
      ] },
      { note: 'Một học sinh nhỏ tuổi không thể ngăn được biến đổi khí hậu một mình. Nhưng triệu học sinh cùng hành động — đó là sức mạnh thay đổi thế giới. Hãy bắt đầu ngay từ hôm nay, từ chính chiếc đèn các em đang bật.' },
    ],
    examples: [
      { q: 'Đồng bằng sông Cửu Long đang chịu những đe dọa nào do biến đổi khí hậu?', a: 'Ba đe dọa lớn: nước biển dâng (mỗi năm dâng vài mm), xâm nhập mặn vào sâu đất liền, và sạt lở bờ sông – bờ biển. Nếu không có biện pháp, một phần lớn vựa lúa quốc gia có thể bị ảnh hưởng nặng nề trong thế kỉ XXI.' },
      { q: 'Hãy đề xuất 3 hành động cụ thể mà một học sinh lớp 6 có thể làm để bảo vệ môi trường.', a: '1) Mang theo bình nước cá nhân, không dùng chai nhựa dùng một lần; 2) Tắt đèn, tắt quạt khi ra khỏi phòng và rút sạc khi không dùng; 3) Phân loại rác ở nhà thành rác hữu cơ – tái chế – rác thường, và tuyên truyền cho cả gia đình cùng làm.' },
    ],
  },
};
