// ============================================================
// Lớp 9 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018 — Global Success / Friends Plus / i-Learn.
// CEFR A2–B1, năm thi vào lớp 10.
// Reported speech full, Passive full, Conditionals 1-2-3, Relative clauses.
// ID prefix: "S9TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9TA', 'tieng-anh', n, title, qs, opts);

export const S9TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Local Environment — Crafts and traditional villages', [
    Q('Từ "craft" có nghĩa?', ['Nghệ thuật thủ công', 'Văn hóa', 'Cây cối', 'Máy móc'], 0, '"Craft" = nghề thủ công, sản phẩm thủ công.'),
    Q('"Artisan" nghĩa là?', ['Họa sĩ', 'Nhà điêu khắc', 'Người làm vườn', 'Nghệ nhân, thợ thủ công lành nghề'], 3, '"Artisan" = nghệ nhân thủ công.'),
    Q('Chọn từ phù hợp: Bat Trang is famous for its _____.', ['paintings', 'pottery', 'silk (lụa - làng Vạn Phúc)', 'bronze casting (đúc đồng - làng Đại Bái)'], 1, 'Bát Tràng nổi tiếng về gốm (pottery).'),
    Q('"Handicraft" có nghĩa?', ['Đồ chơi', 'Đồ điện tử', 'Đồ ăn nhanh', 'Đồ thủ công'], 3, '"Handicraft" = sản phẩm thủ công làm bằng tay.'),
    Q('Chọn dạng đúng: He used to _____ a lot when he was young.', ['travels', 'travelling', 'travel', 'travelled'], 2, 'Sau "used to" dùng V nguyên thể.'),
    Q('"Weave" có nghĩa?', ['Đan (dùng cho "knit/braid")', 'Dệt', 'Nhuộm (dùng cho "dye")', 'Thêu (dùng cho "embroider")'], 1, '"Weave" = dệt (vải, chiếu…).'),
  ]),

  M(2, 'Local Environment — Grammar: Phrasal verbs, complex sentences', [
    Q('"Look after" nghĩa là?', ['Bỏ qua', 'Chăm sóc', 'Tìm kiếm', 'Nhìn lên'], 1, '"Look after" = take care of = chăm sóc.'),
    Q('"Turn down" nghĩa là?', ['Tăng tốc', 'Bật lên', 'Từ chối / vặn nhỏ', 'Quay lại'], 2, '"Turn down" = từ chối hoặc giảm âm lượng.'),
    Q('Chọn liên từ phù hợp: She was tired _____ she still finished the work.', ['so (vì vậy - chỉ kết quả, không hợp ngữ cảnh)', 'because', 'although', 'and (và - nối đẳng lập, không thể hiện tương phản)'], 2, '"Although" diễn tả sự nhượng bộ: mặc dù mệt nhưng vẫn làm xong.'),
    Q('Câu phức nào đúng?', ['Because it was raining, we stayed home.', 'Because of it was raining, we stayed home.', 'Because for it was raining, we stayed home.', 'Because it was raining, so we stayed home.'], 0, 'Cấu trúc: Because + S + V, S + V (không thêm "so").'),
    Q('"Set up" có nghĩa?', ['Đứng dậy', 'Mua sắm', 'Sửa chữa', 'Thành lập, thiết lập'], 3, '"Set up a business" = thành lập doanh nghiệp.'),
    Q('"Look forward to" được theo sau bởi?', ['V-ing (chỉ đúng khi không có "to" đi liền)', 'To + V', 'Danh từ hoặc V-ing', 'V nguyên thể'], 2, '"Look forward to" + noun/gerund (V-ing).'),
  ]),

  M(3, 'City Life — Vocabulary about urban life', [
    Q('"Urban" có nghĩa?', ['Cổ kính', 'Hiện đại', 'Thuộc nông thôn', 'Thuộc thành thị'], 3, '"Urban" = thuộc về thành phố; "rural" = nông thôn.'),
    Q('"Skyscraper" là?', ['Bầu trời', 'Tòa nhà chọc trời', 'Cầu vượt', 'Máy bay'], 1, '"Skyscraper" = tòa nhà cao tầng.'),
    Q('"Traffic jam" nghĩa là?', ['Đèn giao thông', 'Bãi đậu xe', 'Cảnh sát giao thông', 'Tắc đường'], 3, '"Traffic jam" = ùn tắc giao thông.'),
    Q('"Crowded" có nghĩa?', ['Yên tĩnh', 'Vắng vẻ', 'Đông đúc', 'Rộng rãi'], 2, '"Crowded" = đông người, chen chúc.'),
    Q('Chọn cụm từ phù hợp: Big cities offer many _____.', ['opportunity', 'opportunitys', 'opportunites', 'opportunities'], 3, '"Opportunities" — số nhiều của "opportunity".'),
    Q('"Cost of living" nghĩa là?', ['Tiền nhà', 'Giá hàng', 'Lương tháng', 'Chi phí sinh hoạt'], 3, '"Cost of living" = chi phí sinh hoạt nói chung.'),
  ]),

  M(4, 'City Life — Comparative & Superlative + Phrasal verbs', [
    Q('Chọn dạng đúng: Ho Chi Minh City is _____ than Hanoi.', ['bigger', 'biggest', 'more big', 'big (nguyên cấp - thiếu "-er" so sánh hơn)'], 0, 'So sánh hơn của tính từ ngắn: bigger.'),
    Q('Chọn dạng đúng: London is one of the _____ cities in the world.', ['expensive', 'expensiver', 'most expensive', 'more expensive'], 2, 'So sánh hơn nhất của tính từ dài: the most expensive.'),
    Q('"As + adj + as" diễn tả?', ['So sánh kép', 'So sánh bằng', 'So sánh hơn', 'So sánh nhất'], 1, 'Cấu trúc "as ... as" = so sánh bằng.'),
    Q('Hoàn thành: Tokyo is _____ as Seoul.', ['more crowded', 'as crowded', 'most crowded', 'as crowdedly'], 1, 'Cấu trúc "as + adj + as".'),
    Q('"Get on with" nghĩa là?', ['Hòa hợp với ai đó', 'Cả 3 đáp án', 'Lên xe', 'Tiến hành'], 1, '"Get on with sb" = hòa hợp; "get on with sth" = tiến hành; "get on the bus" = lên xe.'),
    Q('Chọn từ đúng: I find city life much _____ than country life.', ['exciting', 'excited', 'most exciting', 'more exciting'], 3, 'Sau "much" + so sánh hơn: "more exciting".'),
  ]),

  M(5, 'Teen Stress and Pressure — Vocabulary', [
    Q('"Stress" có nghĩa?', ['Áp lực, căng thẳng', 'Niềm vui', 'Sự tự tin', 'Thành công'], 0, '"Stress" = căng thẳng.'),
    Q('"Pressure" nghĩa là?', ['Hạnh phúc', 'Sức ép, áp lực', 'Sức khỏe', 'Sự thư giãn (relaxation - trái nghĩa)'], 1, '"Pressure" = áp lực.'),
    Q('"Cope with" có nghĩa?', ['Yêu thương', 'Đối phó với, xử lý', 'Tránh xa', 'Học tập'], 1, '"Cope with stress" = đối phó với căng thẳng.'),
    Q('"Adolescence" là giai đoạn?', ['Trưởng thành', 'Thơ ấu', 'Vị thành niên (10-19)', 'Lão hóa'], 2, '"Adolescence" = tuổi vị thành niên.'),
    Q('Chọn từ phù hợp: Many teens feel _____ about exams.', ['anxiousness', 'anxiously', 'anxiety', 'anxious'], 3, 'Sau "feel" + tính từ ⇒ "anxious".'),
    Q('"Self-confidence" nghĩa là?', ['Sự tự kỷ', 'Tự ti (low self-esteem - khái niệm trái nghĩa)', 'Tự lập', 'Sự tự tin'], 3, '"Self-confidence" = sự tự tin.'),
  ]),

  M(6, 'Teen Stress — Reported speech (statements)', [
    Q('Câu tường thuật của: He said, "I am tired."', ['He said I was tired.', 'He said I am tired.', 'He said he is tired.', 'He said he was tired.'], 3, 'Lùi thì: am → was; "I" → "he".'),
    Q('Câu tường thuật của: She said, "I will come tomorrow."', ['She said she would come tomorrow.', 'She said she would come the next day.', 'She said she will come tomorrow.', 'She said she comes tomorrow.'], 1, 'Will → would; tomorrow → the next day/the following day.'),
    Q('"He said, \'I have finished my homework.\'" → ?', ['He said he has finished his homework.', 'He said he had finished his homework.', 'He said he finished his homework.', 'He said I have finished my homework.'], 1, 'Present perfect → past perfect (had finished).'),
    Q('Khi tường thuật, "this" thường đổi thành?', ['that', 'those (chỉ đổi từ "these", không phải "this")', 'these (giữ nguyên - không thay đổi khi tường thuật)', 'it (chỉ thay khi nhắc lại danh từ đã biết)'], 0, 'Đại từ chỉ định: this → that; these → those.'),
    Q('"yesterday" trong câu tường thuật đổi thành?', ['the day before / the previous day', 'today (chỉ dùng khi "today" → "that day")', 'tomorrow', 'last day'], 0, 'Trạng từ thời gian: yesterday → the day before/the previous day.'),
    Q('Khi tường thuật, "here" đổi thành?', ['here (giữ nguyên - không đổi khi tường thuật)', 'somewhere', 'where (đại từ quan hệ chỉ nơi, không dùng tường thuật)', 'there'], 3, 'Đại từ chỉ nơi: here → there.'),
  ]),

  M(7, 'Reported speech — Questions, Commands', [
    Q('"He asked me, \'Where do you live?\'" → ?', ['He asked me where I live.', 'He asked me where did I live.', 'He asked me where do I live.', 'He asked me where I lived.'], 3, 'Câu hỏi WH → S + V; lùi thì: do live → lived.'),
    Q('Câu tường thuật của: She asked, "Are you happy?"', ['She asked am I happy.', 'She asked if I was happy.', 'She asked I was happy.', 'She asked if I am happy.'], 1, 'Yes/No question → if/whether + S + V (lùi thì).'),
    Q('"He said to me, \'Open the door!\'" → ?', ['He told me opened the door.', 'He told me open the door.', 'He told me to open the door.', 'He said me to open the door.'], 2, 'Câu mệnh lệnh: told/asked + sb + (not) to + V.'),
    Q('"She said, \'Don\'t go out!\'" → ?', ['She said us don\'t go out.', 'She told us to don\'t go out.', 'She said don\'t go out.', 'She told us not to go out.'], 3, 'Mệnh lệnh phủ định: told + sb + not to + V.'),
    Q('"He asked, \'Who is calling?\'" → ?', ['He asked who called me.', 'He asked who called.', 'He asked who was calling.', 'He asked who is calling.'], 2, 'Câu hỏi WH (subject): who is → who was (lùi thì).'),
    Q('Trong câu tường thuật câu hỏi, trật tự từ phải?', ['Theo trật tự bình thường (S + V)', 'Cả B và C', 'Đảo ngữ', 'Bỏ trợ động từ'], 1, 'Khi tường thuật: đưa về trật tự bình thường + bỏ trợ động từ do/does/did.'),
  ]),

  M(8, 'Life in the Past — Vocabulary', [
    Q('"In the past" nghĩa là?', ['Ngày mai', 'Trong quá khứ', 'Hiện tại', 'Trong tương lai'], 1, '"In the past" = trong quá khứ.'),
    Q('"Used to + V" diễn tả?', ['Tương lai', 'Thói quen hiện tại', 'Hành động đang xảy ra', 'Thói quen trong quá khứ không còn nữa'], 3, '"Used to + V" = đã từng (quá khứ, không còn).'),
    Q('Chọn dạng đúng: He _____ to live in Hanoi.', ['using (V-ing - không đúng cấu trúc "used to")', 'used', 'uses (hiện tại đơn - sai thì)', 'use (nguyên thể - thiếu "-d" của "used to")'], 1, 'Cấu trúc: used to + V nguyên.'),
    Q('Phủ định của "used to" là?', ['wasn\'t used to', 'don\'t use to', 'didn\'t used to', 'didn\'t use to'], 3, 'Phủ định: didn\'t use to + V.'),
    Q('"Traditional" có nghĩa?', ['Mới mẻ', 'Truyền thống', 'Lạ thường', 'Hiện đại'], 1, '"Traditional" = thuộc truyền thống.'),
    Q('"Generation" nghĩa là?', ['Năm (year - đơn vị thời gian ngắn hơn)', 'Thập kỷ (decade - 10 năm, khác "thế hệ")', 'Thế hệ', 'Thế kỷ'], 2, '"Generation" = thế hệ (ông bà, cha mẹ, con cái…).'),
  ]),

  M(9, 'Life in the Past — Wishes (Type 2)', [
    Q('Cấu trúc câu ước hiện tại?', ['S wish + S + will + V', 'S wish + S + V (past simple)', 'S wish + S + V (past perfect)', 'S wish + S + V (present simple)'], 1, 'Wish + S + V (quá khứ đơn) = ước về hiện tại không có thật.'),
    Q('Hoàn thành: I wish I _____ taller.', ['am (hiện tại đơn - không dùng sau "wish")', 'was (chấp nhận trong văn nói, kém chuẩn mực)', 'were', 'will be'], 2, 'Wish + S + were (cho mọi ngôi) trong văn trang trọng; cũng chấp nhận "was".'),
    Q('"I wish I knew the answer" nghĩa?', ['Tôi ước tôi biết câu trả lời (hiện tại không biết)', 'Tôi sẽ biết', 'Tôi biết câu trả lời', 'Tôi đã biết'], 0, 'Wish + past = ước hiện tại trái với thực tế.'),
    Q('Cấu trúc câu ước về tương lai (mong muốn thay đổi tình huống)?', ['S wish + S + can + V', 'S wish + S + V (past)', 'S wish + S + would + V', 'S wish + S + will + V'], 2, '"I wish she would call me" = mong cô ấy gọi.'),
    Q('Hoàn thành: I wish my brother _____ less video games.', ['plays (hiện tại đơn - sai thì sau "wish")', 'played', 'is playing', 'will play'], 1, 'Wish + past simple cho việc không có thật ở hiện tại.'),
    Q('"If only I had more time" tương đương?', ['I wish I had more time', 'I would have more time', 'I wish I have more time', 'I had more time'], 0, '"If only" = "I wish" (mạnh hơn).'),
  ]),

  M(10, 'Wonders of Viet Nam — Vocabulary', [
    Q('"Wonder" trong "Wonders of Vietnam" nghĩa là?', ['Kỳ quan', 'Câu hỏi', 'Sự ngạc nhiên', 'Ý tưởng'], 0, '"Wonder" = kỳ quan, danh lam thắng cảnh.'),
    Q('"Heritage" nghĩa là?', ['Du khách', 'Di sản', 'Phong cảnh', 'Hướng dẫn viên'], 1, '"Heritage" = di sản (văn hóa, thiên nhiên).'),
    Q('"Landscape" có nghĩa?', ['Thành phố', 'Du khách (tourist - sai khái niệm)', 'Cảnh quan, phong cảnh', 'Công trình'], 2, '"Landscape" = phong cảnh.'),
    Q('"Ha Long Bay" được UNESCO công nhận là?', ['Di sản văn hóa', 'Di sản hỗn hợp', 'Di sản thiên nhiên thế giới', 'Di sản phi vật thể'], 2, 'Vịnh Hạ Long là di sản thiên nhiên thế giới (Natural Heritage).'),
    Q('"Imperial" nghĩa là?', ['Thuộc đế chế/hoàng gia', 'Nghệ thuật', 'Hiện đại', 'Đơn giản'], 0, '"Imperial city" = kinh thành hoàng gia (vd Imperial City of Hue).'),
    Q('"Mausoleum" có nghĩa?', ['Đền thờ', 'Bảo tàng', 'Lăng mộ', 'Cung điện'], 2, '"Mausoleum" = lăng mộ (vd Ho Chi Minh Mausoleum).'),
  ]),

  M(11, 'Wonders — Passive Voice (Review)', [
    Q('Cấu trúc bị động của thì hiện tại đơn?', ['have/has been + V3', 'was/were + V3', 'am/is/are + V3', 'will be + V3'], 2, 'Present simple passive: am/is/are + V3.'),
    Q('Đổi sang bị động: "They build a new bridge."', ['A new bridge was built.', 'A new bridge built.', 'A new bridge is built.', 'A new bridge is being built.'], 2, 'Hiện tại đơn bị động: is + V3.'),
    Q('Đổi sang bị động: "They built this temple in 1010."', ['This temple has been built in 1010.', 'This temple built in 1010.', 'This temple was built in 1010.', 'This temple is built in 1010.'], 2, 'Past simple passive: was/were + V3.'),
    Q('Cấu trúc bị động hiện tại hoàn thành?', ['was/were + V3', 'will be + V3', 'has/have been + V3', 'is/are being + V3'], 2, 'Present perfect passive: has/have been + V3.'),
    Q('Đổi sang bị động: "People will visit this place."', ['This place will be visited.', 'This place will visited.', 'This place is visited.', 'This place was visited.'], 0, 'Future passive: will be + V3.'),
    Q('Khi nào dùng câu bị động?', ['Khi muốn nói chủ ngữ', 'Khi muốn nhấn mạnh đối tượng nhận hành động', 'Khi không có động từ', 'Khi cần ngắn gọn'], 1, 'Bị động nhấn mạnh đối tượng chịu tác động hơn là người thực hiện.'),
  ]),

  M(12, 'Viet Nam Then and Now — Vocabulary', [
    Q('"Then" trong "Vietnam then and now" nghĩa là?', ['Khi đó (trước đây)', 'Sau đó', 'Tiếp theo', 'Lúc đó'], 0, '"Then" trong ngữ cảnh này = trước đây (in the past).'),
    Q('"Develop" có nghĩa?', ['Phá hủy', 'Đánh giá', 'Phát triển', 'Bỏ qua'], 2, '"Develop" = phát triển.'),
    Q('"Modernize" nghĩa là?', ['Cổ xưa hóa', 'Hiện đại hóa', 'Đơn giản hóa', 'Tự nhiên hóa'], 1, '"Modernize" = hiện đại hóa.'),
    Q('Chọn từ phù hợp: Vietnam has _____ greatly since 1986.', ['changes', 'change', 'changed', 'changing'], 2, 'Sau "has" + V3 (present perfect): changed.'),
    Q('"Renovation" (đổi mới) ở Việt Nam bắt đầu năm?', ['1986', '1995', '2000', '1975'], 0, 'Đổi mới ("Đổi mới policy") chính thức bắt đầu từ Đại hội VI (1986).'),
    Q('"Modern" có nghĩa?', ['Nông thôn', 'Truyền thống', 'Cổ xưa', 'Hiện đại'], 3, '"Modern" = hiện đại; "ancient" = cổ xưa.'),
  ]),

  M(13, 'Recipes and Eating Habits — Vocabulary + Quantifiers', [
    Q('"Recipe" có nghĩa?', ['Thực đơn', 'Công thức nấu ăn', 'Hóa đơn', 'Bàn ăn'], 1, '"Recipe" = công thức nấu ăn.'),
    Q('"Ingredient" nghĩa là?', ['Dụng cụ', 'Nguyên liệu', 'Người nấu ăn', 'Công thức (recipe - dễ nhầm với ingredient)'], 1, '"Ingredient" = nguyên liệu/thành phần.'),
    Q('"A pinch of salt" nghĩa là?', ['Một thìa muối', 'Một bịch muối', 'Một nhúm muối', 'Một cốc muối'], 2, '"A pinch of" = một nhúm (rất ít).'),
    Q('Chọn từ chỉ lượng đúng: How _____ sugar do you need?', ['few (dùng cho danh từ đếm được số nhiều)', 'some (dùng trong câu khẳng định, không trong câu hỏi)', 'much', 'many (dùng cho danh từ đếm được số nhiều)'], 2, '"Sugar" là danh từ không đếm được ⇒ "much".'),
    Q('"A loaf of bread" có nghĩa?', ['Một lát bánh', 'Một chiếc bánh ngọt', 'Một ổ bánh mì', 'Một mẩu bánh'], 2, '"A loaf of bread" = một ổ bánh mì.'),
    Q('"Stir" có nghĩa?', ['Khuấy', 'Cắt (cut - thao tác dao kéo)', 'Đập (beat - nghĩa khác trong nấu ăn)', 'Đổ (pour - rót chất lỏng)'], 0, '"Stir" = khuấy đều.'),
  ]),

  M(14, 'Tourism — Vocabulary', [
    Q('"Tourist" và "tourism" khác nhau ở?', ['Đồng nghĩa', 'Tourist là chỗ ở', 'Tourism là du khách', 'Tourist là người, tourism là ngành/hoạt động'], 3, '"Tourist" = du khách; "tourism" = ngành du lịch.'),
    Q('"Sightseeing" có nghĩa?', ['Mua sắm', 'Chụp ảnh', 'Ngắm cảnh, tham quan', 'Ăn uống'], 2, '"Go sightseeing" = đi tham quan ngắm cảnh.'),
    Q('"Accommodation" là?', ['Phương tiện đi lại', 'Nơi ở (khách sạn, nhà trọ…)', 'Đồ ăn, ẩm thực (cuisine - sai khái niệm)', 'Người hướng dẫn'], 1, '"Accommodation" = chỗ ở khi đi du lịch.'),
    Q('"Booking" nghĩa là?', ['Đặt chỗ/đặt phòng', 'Sách (book - dạng danh từ gốc, sai nghĩa)', 'Mua bán', 'Đăng ký'], 0, '"Booking" = đặt phòng/đặt vé.'),
    Q('"Round-trip ticket" là?', ['Vé tàu', 'Vé một chiều', 'Vé khứ hồi', 'Vé bay'], 2, '"Round-trip" = khứ hồi (đi + về); "one-way" = một chiều.'),
    Q('Chọn giới từ đúng: We arrived _____ Hanoi at 6 a.m.', ['at (dùng cho địa điểm cụ thể như sân bay)', 'on (dùng cho ngày tháng, không đi với địa điểm)', 'in', 'to (đi với "go to", không đi với "arrive")'], 2, '"Arrive in + thành phố lớn/quốc gia"; "arrive at + địa điểm cụ thể".'),
  ]),

  M(15, 'English in the World — Conditional Type 1', [
    Q('Cấu trúc câu điều kiện loại 1?', ['If + S + V (past), S + would + V', 'If + S + V (present), S + will + V', 'If + S + had + V3, S + would have + V3', 'If + S + V, S + V'], 1, 'Loại 1: điều kiện có thật ở hiện tại/tương lai.'),
    Q('Hoàn thành: If it _____ tomorrow, we will stay home.', ['rains', 'rained', 'is raining', 'will rain'], 0, 'If + present simple, S + will + V.'),
    Q('Câu điều kiện loại 1 diễn tả?', ['Tình huống không có thật ở quá khứ', 'Tình huống có thật/có thể xảy ra ở tương lai', 'Tình huống không có thật ở hiện tại', 'Sự thật hiển nhiên'], 1, 'Loại 1 = điều kiện thực tế.'),
    Q('Hoàn thành: If you study hard, you _____ pass the exam.', ['would (dùng cho câu điều kiện loại 2)', 'will', 'are (động từ to-be, không phù hợp ngữ pháp)', 'might have'], 1, 'Loại 1: will + V.'),
    Q('Câu nào là điều kiện loại 1?', ['If I were you, I would say sorry.', 'If I have time, I will visit you.', 'If you heat ice, it melts.', 'If I had known, I would have helped.'], 1, 'Có cấu trúc: If + present, S + will + V.'),
    Q('"Unless" tương đương với?', ['If (chỉ điều kiện khẳng định, không phải phủ định)', 'Because', 'When (chỉ thời gian, không phải điều kiện phủ định)', 'If not'], 3, '"Unless" = "if … not" = "nếu không".'),
  ]),

  M(16, 'Conditional Type 2 — Hypothetical situations', [
    Q('Cấu trúc câu điều kiện loại 2?', ['If + S + had + V3, S + would have + V3', 'If + S + V (present), S + will + V', 'If + S + V (past), S + V (past)', 'If + S + V (past simple), S + would/could + V'], 3, 'Loại 2: tình huống không có thật ở hiện tại/tương lai.'),
    Q('Hoàn thành: If I _____ rich, I would buy a big house.', ['were', 'will be', 'was (chấp nhận văn nói, kém trang trọng)', 'am (hiện tại đơn - sai thì với loại 2)'], 0, 'Loại 2 dùng "were" cho mọi ngôi (văn trang trọng); "was" cũng được chấp nhận.'),
    Q('Câu "If I were you, I would study harder" diễn tả?', ['Khả năng cao', 'Hành động trong quá khứ', 'Lời khuyên/giả định trái thực tế', 'Sự thật'], 2, 'Loại 2 thường dùng cho lời khuyên ("If I were you…").'),
    Q('Hoàn thành: If she _____ his phone number, she would call him.', ['know (nguyên thể - thiếu chia thì quá khứ)', 'knows (hiện tại đơn - sai thì với loại 2)', 'knew', 'has known'], 2, 'Loại 2: If + past simple.'),
    Q('Trong câu điều kiện loại 2, mệnh đề chính dùng?', ['Will + V', 'Would/could/might + V', 'Have + V3', 'Past simple'], 1, 'Mệnh đề chính dùng would/could/might + V nguyên.'),
    Q('Câu nào sai?', ['If he knows, he will tell.', 'If she was rich, she would travel.', 'If I had time, I would go.', 'If I were you, I would help.'], 1, 'Câu D nên là "she were rich" (tuy nhiên "was" cũng dần được chấp nhận; trong ngữ pháp truyền thống là sai).'),
  ]),

  M(17, 'Conditional Type 3 — Past unreal situations', [
    Q('Cấu trúc câu điều kiện loại 3?', ['If + S + V (past), S + would + V', 'If + S + V (present), S + will + V', 'If + S + had + V3, S + would have + V3', 'If + S + had + V, S + will + V'], 2, 'Loại 3: tình huống không có thật trong quá khứ.'),
    Q('Hoàn thành: If I _____ harder, I would have passed the exam.', ['had studied', 'studies', 'studied', 'study (nguyên thể - sai thì với loại 3)'], 0, 'Loại 3: If + S + had + V3.'),
    Q('Câu "If she had known, she would have come" có nghĩa?', ['Cô ấy sẽ biết', 'Cô ấy đã biết và đã đến', 'Cô ấy không biết nên không đến (trái thực tế quá khứ)', 'Cô ấy biết và sẽ đến'], 2, 'Loại 3 ám chỉ điều đã không xảy ra trong quá khứ.'),
    Q('Hoàn thành: If he hadn\'t been late, he _____ the train.', ['caught', 'catches', 'would have caught', 'would catch'], 2, 'Mệnh đề chính loại 3: would have + V3.'),
    Q('Sự khác biệt giữa loại 2 và loại 3?', ['Loại 2 chắc chắn hơn', 'Loại 2 nói về hiện tại không có thật, loại 3 về quá khứ không có thật', 'Không khác nhau', 'Loại 2 nói quá khứ, loại 3 nói tương lai'], 1, 'Loại 2: hiện tại/tương lai trái thực tế; loại 3: quá khứ trái thực tế.'),
    Q('Hoàn thành: If you _____ me earlier, I could have helped you.', ['called', 'call (nguyên thể - sai thì với loại 3)', 'had called', 'have called'], 2, 'Loại 3: had + V3.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Bị động của "They are building a new school."?', ['A new school has been built.', 'A new school is being built.', 'A new school was built.', 'A new school is built.'], 1, 'Present continuous passive: is/are being + V3.'),
    Q('Tường thuật: He said, "I went to the cinema last night."', ['He said he went to the cinema the previous night.', 'He said he has gone to the cinema last night.', 'A và B đều đúng', 'He said he had gone to the cinema the night before.'], 2, 'Cả "he went … the previous night" lẫn "he had gone … the night before" đều chuẩn.'),
    Q('Câu điều kiện loại 1: If it rains, we _____ stay home.', ['will', 'are (động từ to-be - sai cấu trúc loại 1)', 'have (thiếu V3, sai cấu trúc hoàn thành)', 'would (dùng cho điều kiện loại 2)'], 0, 'Loại 1: will + V.'),
    Q('Câu ước: I wish I _____ younger.', ['will be', 'was (chấp nhận văn nói, kém chuẩn mực)', 'am (hiện tại đơn - sai thì sau "wish")', 'were'], 3, 'Wish + were cho mọi ngôi (trang trọng).'),
    Q('"Although" có thể thay bằng?', ['Because', 'Even though, though', 'And (liên từ nối đẳng lập, không tương phản)', 'So (chỉ kết quả, không phải nhượng bộ)'], 1, '"Although", "though", "even though" đồng nghĩa.'),
    Q('"Used to + V" diễn tả?', ['Hiện tại đơn', 'Hành động hoàn thành', 'Tương lai gần', 'Thói quen quá khứ'], 3, '"Used to" = đã từng (trong quá khứ).'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Space Travel — Vocabulary', [
    Q('"Astronaut" có nghĩa?', ['Phi công', 'Lái xe', 'Phi hành gia', 'Kỹ sư hàng không (aerospace engineer - nghề liên quan)'], 2, '"Astronaut" = nhà du hành vũ trụ.'),
    Q('"Spaceship" là?', ['Tàu thủy', 'Tàu vũ trụ', 'Vệ tinh', 'Máy bay'], 1, '"Spaceship" = tàu vũ trụ.'),
    Q('"Galaxy" nghĩa là?', ['Mặt trăng', 'Ngôi sao', 'Thiên hà', 'Hành tinh'], 2, '"Galaxy" = thiên hà (chứa hàng tỷ ngôi sao).'),
    Q('"Solar system" là?', ['Hệ thống điện', 'Hệ năng lượng mặt trời', 'Hệ thống vũ trụ', 'Hệ Mặt Trời'], 3, '"Solar system" = Hệ Mặt Trời (Mặt Trời + các hành tinh).'),
    Q('"Orbit" có nghĩa?', ['Tốc độ', 'Trọng lực', 'Khoảng cách', 'Quỹ đạo'], 3, '"Orbit" = quỹ đạo (đường đi của hành tinh quanh sao).'),
    Q('"Launch" trong "launch a rocket" nghĩa là?', ['Lái (drive/pilot - thao tác khi đã bay)', 'Phóng', 'Hạ cánh', 'Sửa chữa'], 1, '"Launch" = phóng (tên lửa, vệ tinh).'),
  ]),

  M(20, 'Space Travel — Present Perfect', [
    Q('Thì hiện tại hoàn thành cấu tạo bởi?', ['have/has + V3', 'was/were + V-ing', 'am/is/are + V-ing', 'will + V'], 0, 'Present perfect: have/has + past participle (V3).'),
    Q('Câu "I have visited Hanoi" có nghĩa?', ['Tôi đã từng đến Hà Nội (kinh nghiệm)', 'Tôi đang ở Hà Nội', 'Tôi sẽ đến Hà Nội', 'Tôi không đến Hà Nội'], 0, 'Present perfect diễn tả kinh nghiệm tới hiện tại.'),
    Q('Chọn dạng đúng: She _____ already finished her homework.', ['is (hiện tại đơn - sai thì hoàn thành)', 'have (chỉ dùng với I/you/we/they)', 'will (tương lai - sai thì hoàn thành)', 'has'], 3, 'She → has; "already" thường đi với present perfect.'),
    Q('Trạng từ nào KHÔNG đi với present perfect?', ['never (đi với hoàn thành chỉ kinh nghiệm)', 'ever (đi với hoàn thành trong câu hỏi)', 'yesterday', 'just (đi với hoàn thành chỉ vừa xong)'], 2, '"Yesterday" đi với past simple, không đi với present perfect.'),
    Q('Hoàn thành: NASA _____ many satellites into space.', ['launched', 'launches', 'is launching', 'has launched'], 3, 'Diễn tả hành động đã làm tới hiện tại ⇒ present perfect.'),
    Q('Sự khác biệt: "I have lost my key" vs "I lost my key yesterday"?', ['Câu 2 sai', 'Không khác nhau', 'Câu 1: tình trạng vẫn ảnh hưởng hiện tại; Câu 2: chỉ sự việc trong quá khứ', 'Câu 1 sai'], 2, 'Present perfect có liên quan đến hiện tại; past simple chỉ sự việc đã xong.'),
  ]),

  M(21, 'Changing Roles in Society — Vocabulary', [
    Q('"Gender equality" nghĩa là?', ['Bất bình đẳng giới', 'Bình đẳng giới', 'Phụ nữ', 'Phân biệt đối xử'], 1, '"Gender equality" = bình đẳng giới.'),
    Q('"Role" có nghĩa?', ['Vai trò', 'Quy tắc', 'Vai diễn', 'Lối đi (road - âm gần "role" nhưng khác nghĩa)'], 0, '"Role" = vai trò trong xã hội/gia đình.'),
    Q('"Working mother" là?', ['Mẹ thất nghiệp', 'Mẹ ở nhà', 'Người mẹ đi làm', 'Mẹ già'], 2, '"Working mother" = người mẹ vừa đi làm vừa chăm sóc con.'),
    Q('"Breadwinner" có nghĩa?', ['Người bán hàng', 'Người chiến thắng', 'Người trụ cột về tài chính trong gia đình', 'Người làm bánh'], 2, '"Breadwinner" = trụ cột kinh tế (kiếm tiền nuôi gia đình).'),
    Q('"Stereotype" nghĩa là?', ['Quan điểm', 'Sự đa dạng', 'Khuôn mẫu, định kiến', 'Sự thật'], 2, '"Stereotype" = định kiến/khuôn mẫu xã hội.'),
    Q('Chọn từ phù hợp: Women have become more _____ in society.', ['independently', 'independent', 'depend', 'independence'], 1, 'Sau "more" + tính từ ⇒ "independent".'),
  ]),

  M(22, 'Changing Roles — Passive Voice (Continued)', [
    Q('Cấu trúc bị động của thì tương lai gần (be going to)?', ['will be + V3', 'going to be + V3', 'be going to be + V3', 'is going to + V3'], 2, 'Future near passive: be going to be + V3.'),
    Q('Đổi sang bị động: "They are going to open a new park."', ['A new park is opened.', 'A new park is going to be opened.', 'A new park is being opened.', 'A new park will be opened.'], 1, 'Be going to be + V3.'),
    Q('Bị động của câu có 2 tân ngữ: "He gave me a present"?', ['A present was give me.', 'Me was given a present.', 'I was given a present (by him). / A present was given to me (by him).', 'I was give a present.'], 2, 'Có 2 cách: lấy tân ngữ gián tiếp hoặc trực tiếp làm chủ ngữ bị động.'),
    Q('Bị động của "Someone stole my bike."?', ['My bike has stolen.', 'My bike steals.', 'My bike was stolen.', 'My bike is stolen.'], 2, '"Someone" không đề cập tới ai cụ thể ⇒ bị động không cần "by".'),
    Q('Khi nào bỏ "by + tác nhân" trong câu bị động?', ['Luôn luôn', 'Không bao giờ', 'Khi không biết hoặc không cần thiết', 'Khi nói về sự việc cụ thể'], 2, 'Bỏ "by sb" khi tác nhân không quan trọng/không biết.'),
    Q('Bị động của "They have built a new bridge"?', ['A new bridge had been built.', 'A new bridge is built.', 'A new bridge has been built.', 'A new bridge was built.'], 2, 'Present perfect passive: has/have been + V3.'),
  ]),

  M(23, 'My Future Career — Vocabulary', [
    Q('"Career" có nghĩa?', ['Công ty', 'Sự nghiệp', 'Công việc tạm thời', 'Tiền lương'], 1, '"Career" = sự nghiệp (dài hạn).'),
    Q('"Job" và "career" khác nhau ở?', ['Đồng nghĩa', 'Job: công việc cụ thể; career: sự nghiệp dài hạn', 'Career ngắn hơn', 'Job dài hơn'], 1, '"Job" là công việc cụ thể; "career" là con đường nghề nghiệp.'),
    Q('"Vocational training" là?', ['Học đại học', 'Đào tạo nghề', 'Du học', 'Học cao học'], 1, '"Vocational training" = đào tạo nghề.'),
    Q('"Apply for a job" nghĩa là?', ['Phỏng vấn', 'Làm việc', 'Bỏ việc', 'Nộp đơn xin việc'], 3, '"Apply for" = nộp đơn xin (việc/học bổng).'),
    Q('"Resume" / "CV" là?', ['Sơ yếu lý lịch', 'Bằng cấp', 'Hợp đồng', 'Đơn xin việc'], 0, '"Resume" (AmE) / "CV" (Curriculum Vitae) = bản tóm tắt lý lịch nghề nghiệp.'),
    Q('"Salary" có nghĩa?', ['Phụ cấp', 'Tiền thưởng', 'Lương tháng', 'Tiền hưu'], 2, '"Salary" = lương (thường trả hàng tháng).'),
  ]),

  M(24, 'Relative Clauses — Defining (Mệnh đề quan hệ xác định)', [
    Q('Đại từ quan hệ nào thay cho người?', ['where (thay cho nơi chốn, không phải người)', 'which (thay cho vật, không phải người)', 'whose (chỉ sở hữu, không phải chủ ngữ người)', 'who, whom'], 3, '"Who" làm chủ ngữ, "whom" làm tân ngữ cho người.'),
    Q('Đại từ quan hệ nào thay cho vật?', ['which', 'whom (làm tân ngữ cho người, không cho vật)', 'who (chủ ngữ cho người, không cho vật)', 'when (thay cho thời gian, không cho vật)'], 0, '"Which" thay cho vật/động vật.'),
    Q('"That" có thể thay cho?', ['Chỉ vật', 'Chỉ người', 'Cả người và vật (trong mệnh đề xác định)', 'Không thay được'], 2, '"That" thay được cả người và vật, dùng trong mệnh đề xác định.'),
    Q('Hoàn thành: The man _____ lives next door is a doctor.', ['who', 'where (chỉ nơi chốn, không phải người)', 'which (thay cho vật, không cho người)', 'whose (chỉ quan hệ sở hữu, sai ngữ cảnh)'], 0, 'Thay cho "the man" (người, làm chủ ngữ) ⇒ "who".'),
    Q('Hoàn thành: This is the book _____ I bought yesterday.', ['whose (chỉ sở hữu, không thay tân ngữ vật)', 'where (thay cho nơi chốn, không phải sách)', 'which/that', 'who (chỉ dùng cho người)'], 2, '"Book" là vật ⇒ "which" hoặc "that".'),
    Q('"Whose" dùng để thay cho?', ['Chỉ người', 'Chỉ nơi chốn', 'Chỉ vật', 'Sở hữu (người hoặc vật)'], 3, '"Whose" = "of which/of whom" ⇒ chỉ sở hữu.'),
  ]),

  M(25, 'Relative Clauses — Non-defining (Mệnh đề quan hệ không xác định)', [
    Q('Mệnh đề quan hệ không xác định?', ['Không có dấu phẩy', 'Có dấu phẩy ngăn cách, bổ sung thông tin', 'Không dùng "which"', 'Bắt buộc cho ý nghĩa câu'], 1, 'Mệnh đề không xác định: có dấu phẩy + chỉ thêm thông tin phụ.'),
    Q('Trong mệnh đề không xác định, KHÔNG dùng đại từ?', ['who (vẫn dùng được cho người sau dấu phẩy)', 'whose (vẫn dùng được chỉ sở hữu sau dấu phẩy)', 'that', 'which (vẫn dùng được cho vật sau dấu phẩy)'], 2, '"That" KHÔNG dùng trong mệnh đề không xác định.'),
    Q('Hoàn thành: My father, _____ is 60 years old, still works.', ['that (không dùng trong mệnh đề không xác định)', 'whose (chỉ quan hệ sở hữu, sai ngữ cảnh)', 'which (thay cho vật, không cho cha)', 'who'], 3, 'Mệnh đề không xác định cho "father" ⇒ "who" (không dùng "that").'),
    Q('Đặt dấu câu đúng: "Hanoi which is the capital is beautiful."', ['Hanoi, which is the capital is beautiful.', 'Hanoi which, is the capital, is beautiful.', 'Hanoi, which is the capital, is beautiful.', 'Hanoi which is the capital, is beautiful.'], 2, 'Mệnh đề không xác định cần 2 dấu phẩy ngăn cách.'),
    Q('"Mr. Smith, _____ son is my classmate, is a lawyer."?', ['which (thay cho vật, không chỉ sở hữu)', 'whom (tân ngữ chỉ người, không chỉ sở hữu)', 'who (chủ ngữ chỉ người, không chỉ sở hữu)', 'whose'], 3, 'Sở hữu (son của Mr. Smith) ⇒ "whose".'),
    Q('Khi nào dùng mệnh đề không xác định?', ['Không bao giờ', 'Khi cần xác định đối tượng', 'Khi không có danh từ riêng', 'Khi đối tượng đã được xác định rõ và mệnh đề chỉ bổ sung thông tin'], 3, 'Đối tượng đã rõ ⇒ chỉ thêm thông tin (không xác định).'),
  ]),

  M(26, 'English in the World — Vocabulary', [
    Q('"Native speaker" là?', ['Người học ngoại ngữ', 'Người bản xứ nói tiếng đó từ nhỏ', 'Học sinh giỏi', 'Giáo viên'], 1, '"Native speaker" = người nói ngôn ngữ đó như tiếng mẹ đẻ.'),
    Q('"Fluent" có nghĩa?', ['Chậm rãi', 'Trôi chảy, lưu loát', 'Khó hiểu', 'Lưu loát (nhưng hay sai - sai phần "hay sai")'], 1, '"Fluent in English" = nói tiếng Anh lưu loát.'),
    Q('"Bilingual" nghĩa là?', ['Ba thứ tiếng', 'Một thứ tiếng', 'Nhiều thứ tiếng', 'Hai thứ tiếng'], 3, '"Bi-" = 2; "lingual" = liên quan đến ngôn ngữ.'),
    Q('"Multilingual" có nghĩa?', ['Không biết tiếng', 'Hai thứ tiếng', 'Đa ngôn ngữ', 'Một thứ tiếng'], 2, '"Multi-" = nhiều ⇒ đa ngôn ngữ.'),
    Q('"Dialect" là?', ['Tiếng nước ngoài', 'Tiếng phổ thông', 'Ngôn ngữ chính thức', 'Phương ngữ, tiếng địa phương'], 3, '"Dialect" = phương ngữ (vd: Northern dialect, Southern dialect).'),
    Q('"Accent" có nghĩa?', ['Từ vựng', 'Trọng âm câu', 'Giọng điệu, cách phát âm vùng miền', 'Ngữ pháp'], 2, '"Accent" = giọng (British accent, American accent…).'),
  ]),

  M(27, 'Reported speech — Comprehensive review', [
    Q('Khi tường thuật, thì hiện tại đơn lùi về?', ['Quá khứ hoàn thành', 'Không đổi', 'Quá khứ đơn', 'Hiện tại hoàn thành'], 2, 'Present simple → past simple khi tường thuật.'),
    Q('"They said, \'We are studying.\'" → ?', ['They said we are studying.', 'They said we were studying.', 'They said they are studying.', 'They said they were studying.'], 3, 'Present continuous → past continuous; "we" → "they".'),
    Q('"He said, \'I can swim.\'" → ?', ['He said he could swim.', 'He said I can swim.', 'He said he swims.', 'He said he can swim.'], 0, '"Can" → "could" khi lùi thì.'),
    Q('Khi nào KHÔNG cần lùi thì trong câu tường thuật?', ['Luôn phải lùi thì', 'Khi câu dài', 'Không bao giờ lùi', 'Khi nói về sự thật hiển nhiên hoặc động từ giới thiệu ở hiện tại'], 3, 'Sự thật hiển nhiên hoặc "says/tells" ở hiện tại ⇒ không cần lùi thì.'),
    Q('"She said, \'Don\'t worry!\'" → ?', ['She told us not to worry.', 'She told us don\'t worry.', 'She said us not worry.', 'She said not to worry.'], 0, 'Mệnh lệnh phủ định: told sb not to + V.'),
    Q('"He asked, \'What time is it?\'" → ?', ['He asked what time it is.', 'He asked what time is it.', 'He asked what time it was.', 'He asked what time was it.'], 2, 'Câu hỏi WH: bỏ đảo ngữ + lùi thì.'),
  ]),

  M(28, 'Passive Voice — Comprehensive review', [
    Q('Bị động của "She is making a cake."?', ['A cake is being made.', 'A cake has been made.', 'A cake was made.', 'A cake is made.'], 0, 'Present continuous passive: is/are being + V3.'),
    Q('Bị động của "Will you finish the report?"', ['Will the report finished?', 'Will be the report finished?', 'Is the report finished?', 'Will the report be finished?'], 3, 'Future passive (câu hỏi): Will + S + be + V3?'),
    Q('Bị động của "They must clean the room."?', ['The room must be cleaned.', 'The room must clean.', 'The room cleaned must be.', 'The room is must cleaned.'], 0, 'Modal passive: modal + be + V3.'),
    Q('Bị động của "She had finished the work."?', ['The work has been finished.', 'The work had been finished.', 'The work had finished.', 'The work was finished.'], 1, 'Past perfect passive: had been + V3.'),
    Q('"This book _____ in 1990."?', ['was written', 'will be written', 'is written', 'has been written'], 0, 'Past simple passive với mốc thời gian rõ ràng "in 1990".'),
    Q('Khi đổi sang bị động, cần lưu ý?', ['Bỏ chủ ngữ', 'Đổi thì', 'Bỏ động từ', 'Tân ngữ → chủ ngữ + chia "be" theo chủ ngữ mới + V3'], 3, 'Quy tắc: O → S; V → be + V3 (be chia theo S mới và thì gốc).'),
  ]),

  M(29, 'Conditionals — Comprehensive review (Types 1, 2, 3)', [
    Q('Loại 1: If + present, then?', ['will + V', 'V (nguyên thể - thiếu "will")', 'would + V', 'would have + V3'], 0, 'Mệnh đề chính loại 1: will + V.'),
    Q('Loại 2: If + past, then?', ['V (nguyên thể - thiếu "would")', 'will + V', 'would have + V3', 'would + V'], 3, 'Mệnh đề chính loại 2: would/could/might + V.'),
    Q('Loại 3: If + past perfect, then?', ['will + V', 'would have + V3', 'V (nguyên thể - thiếu "would have")', 'would + V'], 1, 'Mệnh đề chính loại 3: would/could/might have + V3.'),
    Q('"If I had a car, I would drive to work" thuộc loại?', ['3', '2', '0', '1'], 1, 'If + past simple ⇒ loại 2 (giả định hiện tại).'),
    Q('"If she had studied, she would have passed" thuộc loại?', ['3', '1', '0', '2'], 0, 'If + past perfect ⇒ loại 3 (giả định quá khứ).'),
    Q('Loại 0 dùng cho?', ['Lời khuyên', 'Tình huống không có thật', 'Sự thật hiển nhiên (If + present, S + V present)', 'Tình huống có thật'], 2, 'Loại 0: chân lý/sự thật: "If you heat water, it boils".'),
  ]),

  M(30, 'Tourism — Reading and Writing skills', [
    Q('"Itinerary" trong du lịch nghĩa là?', ['Vé máy bay', 'Lịch trình', 'Khách sạn', 'Hành lý'], 1, '"Itinerary" = lịch trình chuyến đi.'),
    Q('"Tour guide" là?', ['Tài xế', 'Đầu bếp', 'Hướng dẫn viên du lịch', 'Khách du lịch'], 2, '"Tour guide" = hướng dẫn viên.'),
    Q('"Eco-tourism" là?', ['Du lịch sinh thái', 'Du lịch mua sắm', 'Du lịch ẩm thực', 'Du lịch tâm linh'], 0, '"Eco-tourism" = du lịch sinh thái, bảo vệ môi trường.'),
    Q('Để viết bài giới thiệu địa điểm du lịch cần?', ['Chỉ giá cả', 'Nêu vị trí, đặc điểm, hoạt động có thể làm, lý do nên đến', 'Chỉ tả cảnh', 'Chỉ kể chuyện'], 1, 'Bài giới thiệu cần đầy đủ thông tin hữu ích cho du khách.'),
    Q('"Souvenir" có nghĩa?', ['Đồ lưu niệm', 'Bản đồ', 'Vé (ticket - vật mua khi du lịch nhưng khác nghĩa)', 'Đặc sản (specialty - dễ nhầm với lưu niệm)'], 0, '"Souvenir" = đồ lưu niệm.'),
    Q('"Off the beaten track" có nghĩa?', ['Những nơi ít người đến, không phải điểm du lịch quen thuộc', 'Đường ngắn nhất', 'Đi sai đường', 'Đi đường mòn'], 0, 'Thành ngữ: nơi ít người biết đến, đi xa khỏi tuyến du lịch chính.'),
  ]),

  M(31, 'Recipes and Eating Habits — Health and food', [
    Q('"Balanced diet" là?', ['Ăn nhiều', 'Chế độ ăn cân bằng dinh dưỡng', 'Ăn chay', 'Ăn kiêng giảm cân (diet plan - khác cân bằng)'], 1, '"Balanced diet" = chế độ ăn đầy đủ các nhóm chất.'),
    Q('"Nutrition" có nghĩa?', ['Thể thao', 'Bệnh tật', 'Năng lượng', 'Dinh dưỡng'], 3, '"Nutrition" = dinh dưỡng.'),
    Q('"Junk food" là?', ['Đồ ăn nhanh, kém dinh dưỡng', 'Đồ ăn truyền thống', 'Đồ ăn chay', 'Thức ăn cao cấp'], 0, '"Junk food" = đồ ăn vặt, nhiều dầu mỡ, ít dinh dưỡng.'),
    Q('"Vegetarian" là?', ['Người ăn chay', 'Trẻ em', 'Người nấu ăn', 'Nông dân'], 0, '"Vegetarian" = người ăn chay.'),
    Q('Chọn từ phù hợp: You should eat more _____ for your health.', ['fruites', 'a fruit', 'fruit', 'fruits'], 2, '"Fruit" thường là danh từ không đếm được khi nói chung chung.'),
    Q('"Calorie" có nghĩa?', ['Mùi vị', 'Trọng lượng', 'Vitamin', 'Đơn vị năng lượng'], 3, '"Calorie" = đơn vị đo năng lượng thực phẩm.'),
  ]),

  M(32, 'Ôn tập tổng hợp ngữ pháp', [
    Q('Bị động: "People speak English all over the world."', ['English was spoken all over the world.', 'English speaks all over the world.', 'English is spoken all over the world.', 'English is being spoken.'], 2, 'Present simple passive: is + V3.'),
    Q('Tường thuật: "She said, \'I have just finished my homework.\'"', ['She said I had just finished.', 'She said she just finished.', 'She said she has just finished.', 'She said she had just finished her homework.'], 3, 'Present perfect → past perfect; pronouns đổi phù hợp.'),
    Q('Mệnh đề quan hệ: "The book _____ I read yesterday is interesting."', ['which/that', 'who (chỉ dùng cho người, không cho sách)', 'whose (chỉ quan hệ sở hữu, sai ngữ cảnh)', 'where (chỉ nơi chốn, không cho vật)'], 0, '"Book" là vật ⇒ which/that.'),
    Q('Câu điều kiện: "If you _____ (study), you will pass."', ['had studied', 'will study', 'studied', 'study'], 3, 'Loại 1: If + present simple.'),
    Q('Câu ước: "I wish I _____ a doctor."', ['will be', 'were', 'have been', 'am (hiện tại đơn - sai thì sau "wish")'], 1, 'Wish + were (giả định hiện tại trái thực tế).'),
    Q('Used to: "He _____ smoke, but he quit."', ['used to', 'gets used to', 'use to', 'is used to'], 0, '"Used to + V" = đã từng.'),
  ]),

  M(33, 'Đề ôn thi vào 10 — Đề số 1', [
    Q('Choose the best answer: "She has been studying English _____ 5 years."', ['since (đi với mốc thời gian cụ thể như 2020)', 'on (đi với ngày, không phải khoảng thời gian)', 'in (đi với tháng/năm, không phải khoảng)', 'for'], 3, '"For + khoảng thời gian"; "since + mốc thời gian".'),
    Q('Find the error: "If I was you, I would tell the truth."', ['tell (động từ đúng cấu trúc loại 2)', 'truth (danh từ đúng, không có lỗi)', 'was', 'would (mệnh đề chính đúng loại 2)'], 2, 'Loại 2: nên dùng "were" cho mọi ngôi (trang trọng).'),
    Q('Choose the synonym of "fluent": "She speaks English fluently."', ['quickly', 'badly (trái nghĩa - kém, không trôi chảy)', 'smoothly', 'slowly'], 2, '"Fluent" ≈ "smooth" (trôi chảy).'),
    Q('Bị động: "Someone has broken the window."', ['The window was broken.', 'The window broke.', 'The window has been broken.', 'The window is broken.'], 2, 'Present perfect passive: has been + V3.'),
    Q('Hoàn thành: "_____ raining, we went out."', ['In spite of', 'Although it was', 'Despite', 'Because it was'], 1, '"Although + clause"; "in spite of/despite + noun/gerund".'),
    Q('Word form: "She gave a _____ speech." (impress)', ['impress', 'impressive', 'impressively', 'impression'], 1, 'Tính từ trước danh từ "speech" ⇒ "impressive".'),
  ]),

  M(34, 'Đề ôn thi vào 10 — Đề số 2 (Reading)', [
    Q('Đọc: "Da Lat is a beautiful city in the highlands of Vietnam. It is famous for flowers." Da Lat is famous for?', ['Markets', 'Flowers', 'Beaches', 'Snow (bài đọc không nhắc đến tuyết)'], 1, 'Câu thứ hai: "famous for flowers".'),
    Q('"Highlands" trong bài có nghĩa?', ['Bờ biển', 'Đồng bằng', 'Sa mạc', 'Cao nguyên'], 3, '"Highlands" = cao nguyên.'),
    Q('Cụm "famous for" có thể thay bằng?', ['afraid of', 'good at', 'known for / renowned for', 'interested in'], 2, '"Famous for" = "known for" = "renowned for" (nổi tiếng vì).'),
    Q('Đọc: "Vietnamese students study many subjects, including Math, Literature, and English." Số môn được nêu là?', ['4', '3', '2', '1'], 1, 'Liệt kê 3 môn: Math, Literature, English.'),
    Q('"Including" trong câu trên có nghĩa?', ['Trước hết', 'Bao gồm', 'Loại trừ', 'Sau đó'], 1, '"Including" = bao gồm.'),
    Q('Để tăng kỹ năng đọc hiểu, cần?', ['Tra từ điển mỗi từ', 'Đọc nhanh không hiểu', 'Đọc đa dạng, đoán nghĩa từ qua ngữ cảnh, không tra từ điển ngay', 'Bỏ qua nghĩa'], 2, 'Đoán nghĩa từ ngữ cảnh giúp đọc trôi chảy hơn.'),
  ]),

  M(35, 'Đề ôn thi vào 10 — Đề số 3 (Writing & Grammar)', [
    Q('Rewrite: "It\'s a pity I don\'t have a car." → "I wish _____"', ['I will have a car.', 'I have a car.', 'I would have a car.', 'I had a car.'], 3, 'Wish + past simple cho giả định hiện tại.'),
    Q('Rewrite: "John is my friend. He lives in Hanoi." → "John, _____ lives in Hanoi, is my friend."', ['whom (làm tân ngữ, không phải chủ ngữ)', 'who', 'which (thay cho vật, không cho người)', 'whose (chỉ quan hệ sở hữu, sai ngữ cảnh)'], 1, 'Thay "he" (người, làm chủ ngữ) trong mệnh đề không xác định ⇒ "who".'),
    Q('Đổi sang bị động: "They built this temple 200 years ago."', ['This temple will be built.', 'This temple was built 200 years ago.', 'This temple is built.', 'This temple has been built.'], 1, 'Past simple passive: was/were + V3.'),
    Q('Hoàn thành: "If she had told me earlier, I _____ him."', ['would have helped', 'would help', 'helped', 'will help'], 0, 'Loại 3: would have + V3.'),
    Q('Word form: "Education plays an important role in _____ society." (modern)', ['modernity', 'modern', 'modernly', 'modernize'], 1, 'Trước danh từ "society" cần tính từ ⇒ "modern".'),
    Q('Để viết một bài luận tốt, cần?', ['Dùng từ khó', 'Dịch từ tiếng Việt', 'Có dàn ý rõ (mở-thân-kết), dùng linking words, đa dạng cấu trúc', 'Viết dài'], 2, 'Tổ chức ý + ngôn ngữ chính xác + cấu trúc đa dạng = bài luận tốt.'),
  ]),
];

export const S9TA_SCENARIOS = indexBy(S9TA_WEEKS);
