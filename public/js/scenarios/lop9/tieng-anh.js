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
    Q('Từ "craft" có nghĩa?', ['Nghệ thuật thủ công', 'Cây cối', 'Máy móc', 'Văn hóa'], 0, '"Craft" = nghề thủ công, sản phẩm thủ công.'),
    Q('"Artisan" nghĩa là?', ['Người làm vườn', 'Nghệ nhân, thợ thủ công lành nghề', 'Họa sĩ', 'Nhà điêu khắc'], 1, '"Artisan" = nghệ nhân thủ công.'),
    Q('Chọn từ phù hợp: Bat Trang is famous for its _____.', ['paintings', 'pottery', 'silk', 'fish'], 1, 'Bát Tràng nổi tiếng về gốm (pottery).'),
    Q('"Handicraft" có nghĩa?', ['Đồ thủ công', 'Đồ điện tử', 'Đồ ăn nhanh', 'Đồ chơi'], 0, '"Handicraft" = sản phẩm thủ công làm bằng tay.'),
    Q('Chọn dạng đúng: He used to _____ a lot when he was young.', ['travels', 'travel', 'travelled', 'travelling'], 1, 'Sau "used to" dùng V nguyên thể.'),
    Q('"Weave" có nghĩa?', ['Dệt', 'Đốt', 'Thổi', 'Đập'], 0, '"Weave" = dệt (vải, chiếu…).'),
  ]),

  M(2, 'Local Environment — Grammar: Phrasal verbs, complex sentences', [
    Q('"Look after" nghĩa là?', ['Tìm kiếm', 'Chăm sóc', 'Nhìn lên', 'Bỏ qua'], 1, '"Look after" = take care of = chăm sóc.'),
    Q('"Turn down" nghĩa là?', ['Bật lên', 'Từ chối / vặn nhỏ', 'Quay lại', 'Tăng tốc'], 1, '"Turn down" = từ chối hoặc giảm âm lượng.'),
    Q('Chọn liên từ phù hợp: She was tired _____ she still finished the work.', ['because', 'so', 'although', 'and'], 2, '"Although" diễn tả sự nhượng bộ: mặc dù mệt nhưng vẫn làm xong.'),
    Q('Câu phức nào đúng?', ['Because it was raining, so we stayed home.', 'Because it was raining, we stayed home.', 'Because of it was raining, we stayed home.', 'Because for it was raining, we stayed home.'], 1, 'Cấu trúc: Because + S + V, S + V (không thêm "so").'),
    Q('"Set up" có nghĩa?', ['Thành lập, thiết lập', 'Đứng dậy', 'Sửa chữa', 'Mua sắm'], 0, '"Set up a business" = thành lập doanh nghiệp.'),
    Q('"Look forward to" được theo sau bởi?', ['V nguyên thể', 'V-ing', 'To + V', 'Danh từ hoặc V-ing'], 3, '"Look forward to" + noun/gerund (V-ing).'),
  ]),

  M(3, 'City Life — Vocabulary about urban life', [
    Q('"Urban" có nghĩa?', ['Thuộc nông thôn', 'Thuộc thành thị', 'Hiện đại', 'Cổ kính'], 1, '"Urban" = thuộc về thành phố; "rural" = nông thôn.'),
    Q('"Skyscraper" là?', ['Tòa nhà chọc trời', 'Bầu trời', 'Máy bay', 'Cầu vượt'], 0, '"Skyscraper" = tòa nhà cao tầng.'),
    Q('"Traffic jam" nghĩa là?', ['Cảnh sát giao thông', 'Tắc đường', 'Đèn giao thông', 'Bãi đậu xe'], 1, '"Traffic jam" = ùn tắc giao thông.'),
    Q('"Crowded" có nghĩa?', ['Vắng vẻ', 'Đông đúc', 'Yên tĩnh', 'Rộng rãi'], 1, '"Crowded" = đông người, chen chúc.'),
    Q('Chọn cụm từ phù hợp: Big cities offer many _____.', ['opportunities', 'opportunity', 'opportunites', 'opportunitys'], 0, '"Opportunities" — số nhiều của "opportunity".'),
    Q('"Cost of living" nghĩa là?', ['Chi phí sinh hoạt', 'Lương tháng', 'Tiền nhà', 'Giá hàng'], 0, '"Cost of living" = chi phí sinh hoạt nói chung.'),
  ]),

  M(4, 'City Life — Comparative & Superlative + Phrasal verbs', [
    Q('Chọn dạng đúng: Ho Chi Minh City is _____ than Hanoi.', ['big', 'bigger', 'biggest', 'more big'], 1, 'So sánh hơn của tính từ ngắn: bigger.'),
    Q('Chọn dạng đúng: London is one of the _____ cities in the world.', ['expensive', 'more expensive', 'most expensive', 'expensiver'], 2, 'So sánh hơn nhất của tính từ dài: the most expensive.'),
    Q('"As + adj + as" diễn tả?', ['So sánh hơn', 'So sánh bằng', 'So sánh nhất', 'So sánh kép'], 1, 'Cấu trúc "as ... as" = so sánh bằng.'),
    Q('Hoàn thành: Tokyo is _____ as Seoul.', ['as crowded', 'as crowdedly', 'more crowded', 'most crowded'], 0, 'Cấu trúc "as + adj + as".'),
    Q('"Get on with" nghĩa là?', ['Lên xe', 'Hòa hợp với ai đó', 'Tiến hành', 'Cả 3 đáp án'], 3, '"Get on with sb" = hòa hợp; "get on with sth" = tiến hành; "get on the bus" = lên xe.'),
    Q('Chọn từ đúng: I find city life much _____ than country life.', ['exciting', 'more exciting', 'most exciting', 'excited'], 1, 'Sau "much" + so sánh hơn: "more exciting".'),
  ]),

  M(5, 'Teen Stress and Pressure — Vocabulary', [
    Q('"Stress" có nghĩa?', ['Áp lực, căng thẳng', 'Niềm vui', 'Sự tự tin', 'Thành công'], 0, '"Stress" = căng thẳng.'),
    Q('"Pressure" nghĩa là?', ['Sức ép, áp lực', 'Hạnh phúc', 'Tự do', 'Sức khỏe'], 0, '"Pressure" = áp lực.'),
    Q('"Cope with" có nghĩa?', ['Đối phó với, xử lý', 'Yêu thương', 'Tránh xa', 'Học tập'], 0, '"Cope with stress" = đối phó với căng thẳng.'),
    Q('"Adolescence" là giai đoạn?', ['Thơ ấu', 'Vị thành niên (10-19)', 'Trưởng thành', 'Lão hóa'], 1, '"Adolescence" = tuổi vị thành niên.'),
    Q('Chọn từ phù hợp: Many teens feel _____ about exams.', ['anxious', 'anxiously', 'anxiety', 'anxiousness'], 0, 'Sau "feel" + tính từ ⇒ "anxious".'),
    Q('"Self-confidence" nghĩa là?', ['Sự tự tin', 'Sự tự kỷ', 'Tự ti', 'Tự lập'], 0, '"Self-confidence" = sự tự tin.'),
  ]),

  M(6, 'Teen Stress — Reported speech (statements)', [
    Q('Câu tường thuật của: He said, "I am tired."', ['He said he was tired.', 'He said he is tired.', 'He said I was tired.', 'He said I am tired.'], 0, 'Lùi thì: am → was; "I" → "he".'),
    Q('Câu tường thuật của: She said, "I will come tomorrow."', ['She said she will come tomorrow.', 'She said she would come the next day.', 'She said she would come tomorrow.', 'She said she comes tomorrow.'], 1, 'Will → would; tomorrow → the next day/the following day.'),
    Q('"He said, \'I have finished my homework.\'" → ?', ['He said he had finished his homework.', 'He said he has finished his homework.', 'He said I have finished my homework.', 'He said he finished his homework.'], 0, 'Present perfect → past perfect (had finished).'),
    Q('Khi tường thuật, "this" thường đổi thành?', ['that', 'these', 'those', 'it'], 0, 'Đại từ chỉ định: this → that; these → those.'),
    Q('"yesterday" trong câu tường thuật đổi thành?', ['today', 'tomorrow', 'the day before / the previous day', 'last day'], 2, 'Trạng từ thời gian: yesterday → the day before/the previous day.'),
    Q('Khi tường thuật, "here" đổi thành?', ['here', 'there', 'where', 'somewhere'], 1, 'Đại từ chỉ nơi: here → there.'),
  ]),

  M(7, 'Reported speech — Questions, Commands', [
    Q('"He asked me, \'Where do you live?\'" → ?', ['He asked me where I lived.', 'He asked me where do I live.', 'He asked me where I live.', 'He asked me where did I live.'], 0, 'Câu hỏi WH → S + V; lùi thì: do live → lived.'),
    Q('Câu tường thuật của: She asked, "Are you happy?"', ['She asked if I was happy.', 'She asked if I am happy.', 'She asked I was happy.', 'She asked am I happy.'], 0, 'Yes/No question → if/whether + S + V (lùi thì).'),
    Q('"He said to me, \'Open the door!\'" → ?', ['He told me open the door.', 'He told me to open the door.', 'He said me to open the door.', 'He told me opened the door.'], 1, 'Câu mệnh lệnh: told/asked + sb + (not) to + V.'),
    Q('"She said, \'Don\'t go out!\'" → ?', ['She told us not to go out.', 'She said us don\'t go out.', 'She told us to don\'t go out.', 'She said don\'t go out.'], 0, 'Mệnh lệnh phủ định: told + sb + not to + V.'),
    Q('"He asked, \'Who is calling?\'" → ?', ['He asked who is calling.', 'He asked who was calling.', 'He asked who called.', 'He asked who called me.'], 1, 'Câu hỏi WH (subject): who is → who was (lùi thì).'),
    Q('Trong câu tường thuật câu hỏi, trật tự từ phải?', ['Đảo ngữ', 'Theo trật tự bình thường (S + V)', 'Bỏ trợ động từ', 'Cả B và C'], 3, 'Khi tường thuật: đưa về trật tự bình thường + bỏ trợ động từ do/does/did.'),
  ]),

  M(8, 'Life in the Past — Vocabulary', [
    Q('"In the past" nghĩa là?', ['Trong tương lai', 'Trong quá khứ', 'Hiện tại', 'Ngày mai'], 1, '"In the past" = trong quá khứ.'),
    Q('"Used to + V" diễn tả?', ['Thói quen hiện tại', 'Thói quen trong quá khứ không còn nữa', 'Tương lai', 'Hành động đang xảy ra'], 1, '"Used to + V" = đã từng (quá khứ, không còn).'),
    Q('Chọn dạng đúng: He _____ to live in Hanoi.', ['used', 'use', 'using', 'uses'], 0, 'Cấu trúc: used to + V nguyên.'),
    Q('Phủ định của "used to" là?', ['didn\'t used to', 'didn\'t use to', 'don\'t use to', 'wasn\'t used to'], 1, 'Phủ định: didn\'t use to + V.'),
    Q('"Traditional" có nghĩa?', ['Hiện đại', 'Truyền thống', 'Mới mẻ', 'Lạ thường'], 1, '"Traditional" = thuộc truyền thống.'),
    Q('"Generation" nghĩa là?', ['Thế hệ', 'Thế kỷ', 'Tháng', 'Năm'], 0, '"Generation" = thế hệ (ông bà, cha mẹ, con cái…).'),
  ]),

  M(9, 'Life in the Past — Wishes (Type 2)', [
    Q('Cấu trúc câu ước hiện tại?', ['S wish + S + V (past simple)', 'S wish + S + V (present simple)', 'S wish + S + will + V', 'S wish + S + V (past perfect)'], 0, 'Wish + S + V (quá khứ đơn) = ước về hiện tại không có thật.'),
    Q('Hoàn thành: I wish I _____ taller.', ['am', 'was', 'were', 'will be'], 2, 'Wish + S + were (cho mọi ngôi) trong văn trang trọng; cũng chấp nhận "was".'),
    Q('"I wish I knew the answer" nghĩa?', ['Tôi biết câu trả lời', 'Tôi ước tôi biết câu trả lời (hiện tại không biết)', 'Tôi đã biết', 'Tôi sẽ biết'], 1, 'Wish + past = ước hiện tại trái với thực tế.'),
    Q('Cấu trúc câu ước về tương lai (mong muốn thay đổi tình huống)?', ['S wish + S + would + V', 'S wish + S + V (past)', 'S wish + S + can + V', 'S wish + S + will + V'], 0, '"I wish she would call me" = mong cô ấy gọi.'),
    Q('Hoàn thành: I wish my brother _____ less video games.', ['plays', 'played', 'will play', 'is playing'], 1, 'Wish + past simple cho việc không có thật ở hiện tại.'),
    Q('"If only I had more time" tương đương?', ['I wish I had more time', 'I wish I have more time', 'I had more time', 'I would have more time'], 0, '"If only" = "I wish" (mạnh hơn).'),
  ]),

  M(10, 'Wonders of Viet Nam — Vocabulary', [
    Q('"Wonder" trong "Wonders of Vietnam" nghĩa là?', ['Sự ngạc nhiên', 'Kỳ quan', 'Câu hỏi', 'Ý tưởng'], 1, '"Wonder" = kỳ quan, danh lam thắng cảnh.'),
    Q('"Heritage" nghĩa là?', ['Di sản', 'Du khách', 'Hướng dẫn viên', 'Phong cảnh'], 0, '"Heritage" = di sản (văn hóa, thiên nhiên).'),
    Q('"Landscape" có nghĩa?', ['Cảnh quan, phong cảnh', 'Người', 'Thành phố', 'Công trình'], 0, '"Landscape" = phong cảnh.'),
    Q('"Ha Long Bay" được UNESCO công nhận là?', ['Di sản văn hóa', 'Di sản thiên nhiên thế giới', 'Di sản hỗn hợp', 'Di sản phi vật thể'], 1, 'Vịnh Hạ Long là di sản thiên nhiên thế giới (Natural Heritage).'),
    Q('"Imperial" nghĩa là?', ['Thuộc đế chế/hoàng gia', 'Hiện đại', 'Đơn giản', 'Nghệ thuật'], 0, '"Imperial city" = kinh thành hoàng gia (vd Imperial City of Hue).'),
    Q('"Mausoleum" có nghĩa?', ['Lăng mộ', 'Bảo tàng', 'Đền thờ', 'Cung điện'], 0, '"Mausoleum" = lăng mộ (vd Ho Chi Minh Mausoleum).'),
  ]),

  M(11, 'Wonders — Passive Voice (Review)', [
    Q('Cấu trúc bị động của thì hiện tại đơn?', ['am/is/are + V3', 'was/were + V3', 'will be + V3', 'have/has been + V3'], 0, 'Present simple passive: am/is/are + V3.'),
    Q('Đổi sang bị động: "They build a new bridge."', ['A new bridge is built.', 'A new bridge built.', 'A new bridge is being built.', 'A new bridge was built.'], 0, 'Hiện tại đơn bị động: is + V3.'),
    Q('Đổi sang bị động: "They built this temple in 1010."', ['This temple was built in 1010.', 'This temple is built in 1010.', 'This temple has been built in 1010.', 'This temple built in 1010.'], 0, 'Past simple passive: was/were + V3.'),
    Q('Cấu trúc bị động hiện tại hoàn thành?', ['has/have been + V3', 'is/are being + V3', 'will be + V3', 'was/were + V3'], 0, 'Present perfect passive: has/have been + V3.'),
    Q('Đổi sang bị động: "People will visit this place."', ['This place is visited.', 'This place will be visited.', 'This place will visited.', 'This place was visited.'], 1, 'Future passive: will be + V3.'),
    Q('Khi nào dùng câu bị động?', ['Khi muốn nhấn mạnh đối tượng nhận hành động', 'Khi muốn nói chủ ngữ', 'Khi không có động từ', 'Khi cần ngắn gọn'], 0, 'Bị động nhấn mạnh đối tượng chịu tác động hơn là người thực hiện.'),
  ]),

  M(12, 'Viet Nam Then and Now — Vocabulary', [
    Q('"Then" trong "Vietnam then and now" nghĩa là?', ['Sau đó', 'Khi đó (trước đây)', 'Tiếp theo', 'Lúc đó'], 1, '"Then" trong ngữ cảnh này = trước đây (in the past).'),
    Q('"Develop" có nghĩa?', ['Phá hủy', 'Phát triển', 'Bỏ qua', 'Đánh giá'], 1, '"Develop" = phát triển.'),
    Q('"Modernize" nghĩa là?', ['Cổ xưa hóa', 'Hiện đại hóa', 'Đơn giản hóa', 'Tự nhiên hóa'], 1, '"Modernize" = hiện đại hóa.'),
    Q('Chọn từ phù hợp: Vietnam has _____ greatly since 1986.', ['changed', 'changes', 'changing', 'change'], 0, 'Sau "has" + V3 (present perfect): changed.'),
    Q('"Renovation" (đổi mới) ở Việt Nam bắt đầu năm?', ['1975', '1986', '1995', '2000'], 1, 'Đổi mới ("Đổi mới policy") chính thức bắt đầu từ Đại hội VI (1986).'),
    Q('"Modern" có nghĩa?', ['Cổ xưa', 'Hiện đại', 'Truyền thống', 'Nông thôn'], 1, '"Modern" = hiện đại; "ancient" = cổ xưa.'),
  ]),

  M(13, 'Recipes and Eating Habits — Vocabulary + Quantifiers', [
    Q('"Recipe" có nghĩa?', ['Thực đơn', 'Công thức nấu ăn', 'Hóa đơn', 'Bàn ăn'], 1, '"Recipe" = công thức nấu ăn.'),
    Q('"Ingredient" nghĩa là?', ['Bếp', 'Nguyên liệu', 'Dụng cụ', 'Người nấu ăn'], 1, '"Ingredient" = nguyên liệu/thành phần.'),
    Q('"A pinch of salt" nghĩa là?', ['Một nhúm muối', 'Một thìa muối', 'Một cốc muối', 'Một bịch muối'], 0, '"A pinch of" = một nhúm (rất ít).'),
    Q('Chọn từ chỉ lượng đúng: How _____ sugar do you need?', ['many', 'much', 'few', 'some'], 1, '"Sugar" là danh từ không đếm được ⇒ "much".'),
    Q('"A loaf of bread" có nghĩa?', ['Một lát bánh', 'Một ổ bánh mì', 'Một chiếc bánh ngọt', 'Một mẩu bánh'], 1, '"A loaf of bread" = một ổ bánh mì.'),
    Q('"Stir" có nghĩa?', ['Khuấy', 'Đổ', 'Cắt', 'Đập'], 0, '"Stir" = khuấy đều.'),
  ]),

  M(14, 'Tourism — Vocabulary', [
    Q('"Tourist" và "tourism" khác nhau ở?', ['Tourist là người, tourism là ngành/hoạt động', 'Đồng nghĩa', 'Tourist là chỗ ở', 'Tourism là du khách'], 0, '"Tourist" = du khách; "tourism" = ngành du lịch.'),
    Q('"Sightseeing" có nghĩa?', ['Ngắm cảnh, tham quan', 'Mua sắm', 'Ăn uống', 'Chụp ảnh'], 0, '"Go sightseeing" = đi tham quan ngắm cảnh.'),
    Q('"Accommodation" là?', ['Phương tiện đi lại', 'Nơi ở (khách sạn, nhà trọ…)', 'Đồ ăn', 'Người hướng dẫn'], 1, '"Accommodation" = chỗ ở khi đi du lịch.'),
    Q('"Booking" nghĩa là?', ['Sách', 'Đặt chỗ/đặt phòng', 'Mua bán', 'Đăng ký'], 1, '"Booking" = đặt phòng/đặt vé.'),
    Q('"Round-trip ticket" là?', ['Vé một chiều', 'Vé khứ hồi', 'Vé bay', 'Vé tàu'], 1, '"Round-trip" = khứ hồi (đi + về); "one-way" = một chiều.'),
    Q('Chọn giới từ đúng: We arrived _____ Hanoi at 6 a.m.', ['in', 'on', 'at', 'to'], 0, '"Arrive in + thành phố lớn/quốc gia"; "arrive at + địa điểm cụ thể".'),
  ]),

  M(15, 'English in the World — Conditional Type 1', [
    Q('Cấu trúc câu điều kiện loại 1?', ['If + S + V (present), S + will + V', 'If + S + V (past), S + would + V', 'If + S + had + V3, S + would have + V3', 'If + S + V, S + V'], 0, 'Loại 1: điều kiện có thật ở hiện tại/tương lai.'),
    Q('Hoàn thành: If it _____ tomorrow, we will stay home.', ['rains', 'rained', 'will rain', 'is raining'], 0, 'If + present simple, S + will + V.'),
    Q('Câu điều kiện loại 1 diễn tả?', ['Tình huống có thật/có thể xảy ra ở tương lai', 'Tình huống không có thật ở hiện tại', 'Tình huống không có thật ở quá khứ', 'Sự thật hiển nhiên'], 0, 'Loại 1 = điều kiện thực tế.'),
    Q('Hoàn thành: If you study hard, you _____ pass the exam.', ['will', 'would', 'might have', 'are'], 0, 'Loại 1: will + V.'),
    Q('Câu nào là điều kiện loại 1?', ['If I were you, I would say sorry.', 'If you heat ice, it melts.', 'If I have time, I will visit you.', 'If I had known, I would have helped.'], 2, 'Có cấu trúc: If + present, S + will + V.'),
    Q('"Unless" tương đương với?', ['If', 'If not', 'When', 'Because'], 1, '"Unless" = "if … not" = "nếu không".'),
  ]),

  M(16, 'Conditional Type 2 — Hypothetical situations', [
    Q('Cấu trúc câu điều kiện loại 2?', ['If + S + V (past simple), S + would/could + V', 'If + S + V (present), S + will + V', 'If + S + had + V3, S + would have + V3', 'If + S + V (past), S + V (past)'], 0, 'Loại 2: tình huống không có thật ở hiện tại/tương lai.'),
    Q('Hoàn thành: If I _____ rich, I would buy a big house.', ['am', 'was', 'were', 'will be'], 2, 'Loại 2 dùng "were" cho mọi ngôi (văn trang trọng); "was" cũng được chấp nhận.'),
    Q('Câu "If I were you, I would study harder" diễn tả?', ['Lời khuyên/giả định trái thực tế', 'Sự thật', 'Khả năng cao', 'Hành động trong quá khứ'], 0, 'Loại 2 thường dùng cho lời khuyên ("If I were you…").'),
    Q('Hoàn thành: If she _____ his phone number, she would call him.', ['know', 'knows', 'knew', 'has known'], 2, 'Loại 2: If + past simple.'),
    Q('Trong câu điều kiện loại 2, mệnh đề chính dùng?', ['Would/could/might + V', 'Will + V', 'Have + V3', 'Past simple'], 0, 'Mệnh đề chính dùng would/could/might + V nguyên.'),
    Q('Câu nào sai?', ['If I were you, I would help.', 'If I had time, I would go.', 'If he knows, he will tell.', 'If she was rich, she would travel.'], 3, 'Câu D nên là "she were rich" (tuy nhiên "was" cũng dần được chấp nhận; trong ngữ pháp truyền thống là sai).'),
  ]),

  M(17, 'Conditional Type 3 — Past unreal situations', [
    Q('Cấu trúc câu điều kiện loại 3?', ['If + S + had + V3, S + would have + V3', 'If + S + V (past), S + would + V', 'If + S + V (present), S + will + V', 'If + S + had + V, S + will + V'], 0, 'Loại 3: tình huống không có thật trong quá khứ.'),
    Q('Hoàn thành: If I _____ harder, I would have passed the exam.', ['study', 'studied', 'had studied', 'studies'], 2, 'Loại 3: If + S + had + V3.'),
    Q('Câu "If she had known, she would have come" có nghĩa?', ['Cô ấy đã biết và đã đến', 'Cô ấy không biết nên không đến (trái thực tế quá khứ)', 'Cô ấy biết và sẽ đến', 'Cô ấy sẽ biết'], 1, 'Loại 3 ám chỉ điều đã không xảy ra trong quá khứ.'),
    Q('Hoàn thành: If he hadn\'t been late, he _____ the train.', ['catches', 'caught', 'would catch', 'would have caught'], 3, 'Mệnh đề chính loại 3: would have + V3.'),
    Q('Sự khác biệt giữa loại 2 và loại 3?', ['Loại 2 nói về hiện tại không có thật, loại 3 về quá khứ không có thật', 'Loại 2 nói quá khứ, loại 3 nói tương lai', 'Không khác nhau', 'Loại 2 chắc chắn hơn'], 0, 'Loại 2: hiện tại/tương lai trái thực tế; loại 3: quá khứ trái thực tế.'),
    Q('Hoàn thành: If you _____ me earlier, I could have helped you.', ['call', 'called', 'have called', 'had called'], 3, 'Loại 3: had + V3.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('Bị động của "They are building a new school."?', ['A new school is built.', 'A new school is being built.', 'A new school was built.', 'A new school has been built.'], 1, 'Present continuous passive: is/are being + V3.'),
    Q('Tường thuật: He said, "I went to the cinema last night."', ['He said he went to the cinema the previous night.', 'He said he had gone to the cinema the night before.', 'He said he has gone to the cinema last night.', 'A và B đều đúng'], 3, 'Cả "he went … the previous night" lẫn "he had gone … the night before" đều chuẩn.'),
    Q('Câu điều kiện loại 1: If it rains, we _____ stay home.', ['will', 'would', 'have', 'are'], 0, 'Loại 1: will + V.'),
    Q('Câu ước: I wish I _____ younger.', ['am', 'was', 'were', 'will be'], 2, 'Wish + were cho mọi ngôi (trang trọng).'),
    Q('"Although" có thể thay bằng?', ['Even though, though', 'Because', 'So', 'And'], 0, '"Although", "though", "even though" đồng nghĩa.'),
    Q('"Used to + V" diễn tả?', ['Thói quen quá khứ', 'Hiện tại đơn', 'Tương lai gần', 'Hành động hoàn thành'], 0, '"Used to" = đã từng (trong quá khứ).'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Space Travel — Vocabulary', [
    Q('"Astronaut" có nghĩa?', ['Phi hành gia', 'Phi công', 'Lái xe', 'Kỹ sư'], 0, '"Astronaut" = nhà du hành vũ trụ.'),
    Q('"Spaceship" là?', ['Tàu thủy', 'Tàu vũ trụ', 'Máy bay', 'Vệ tinh'], 1, '"Spaceship" = tàu vũ trụ.'),
    Q('"Galaxy" nghĩa là?', ['Hành tinh', 'Thiên hà', 'Ngôi sao', 'Mặt trăng'], 1, '"Galaxy" = thiên hà (chứa hàng tỷ ngôi sao).'),
    Q('"Solar system" là?', ['Hệ năng lượng mặt trời', 'Hệ Mặt Trời', 'Hệ thống điện', 'Hệ thống vũ trụ'], 1, '"Solar system" = Hệ Mặt Trời (Mặt Trời + các hành tinh).'),
    Q('"Orbit" có nghĩa?', ['Quỹ đạo', 'Tốc độ', 'Trọng lực', 'Khoảng cách'], 0, '"Orbit" = quỹ đạo (đường đi của hành tinh quanh sao).'),
    Q('"Launch" trong "launch a rocket" nghĩa là?', ['Phóng', 'Hạ cánh', 'Sửa chữa', 'Lái'], 0, '"Launch" = phóng (tên lửa, vệ tinh).'),
  ]),

  M(20, 'Space Travel — Present Perfect', [
    Q('Thì hiện tại hoàn thành cấu tạo bởi?', ['have/has + V3', 'will + V', 'am/is/are + V-ing', 'was/were + V-ing'], 0, 'Present perfect: have/has + past participle (V3).'),
    Q('Câu "I have visited Hanoi" có nghĩa?', ['Tôi đang ở Hà Nội', 'Tôi đã từng đến Hà Nội (kinh nghiệm)', 'Tôi sẽ đến Hà Nội', 'Tôi không đến Hà Nội'], 1, 'Present perfect diễn tả kinh nghiệm tới hiện tại.'),
    Q('Chọn dạng đúng: She _____ already finished her homework.', ['has', 'have', 'is', 'will'], 0, 'She → has; "already" thường đi với present perfect.'),
    Q('Trạng từ nào KHÔNG đi với present perfect?', ['ever', 'never', 'yesterday', 'just'], 2, '"Yesterday" đi với past simple, không đi với present perfect.'),
    Q('Hoàn thành: NASA _____ many satellites into space.', ['launches', 'launched', 'has launched', 'is launching'], 2, 'Diễn tả hành động đã làm tới hiện tại ⇒ present perfect.'),
    Q('Sự khác biệt: "I have lost my key" vs "I lost my key yesterday"?', ['Câu 1: tình trạng vẫn ảnh hưởng hiện tại; Câu 2: chỉ sự việc trong quá khứ', 'Không khác nhau', 'Câu 1 sai', 'Câu 2 sai'], 0, 'Present perfect có liên quan đến hiện tại; past simple chỉ sự việc đã xong.'),
  ]),

  M(21, 'Changing Roles in Society — Vocabulary', [
    Q('"Gender equality" nghĩa là?', ['Bất bình đẳng giới', 'Bình đẳng giới', 'Phân biệt đối xử', 'Phụ nữ'], 1, '"Gender equality" = bình đẳng giới.'),
    Q('"Role" có nghĩa?', ['Đường', 'Vai trò', 'Quy tắc', 'Vai diễn'], 1, '"Role" = vai trò trong xã hội/gia đình.'),
    Q('"Working mother" là?', ['Mẹ thất nghiệp', 'Người mẹ đi làm', 'Mẹ ở nhà', 'Mẹ già'], 1, '"Working mother" = người mẹ vừa đi làm vừa chăm sóc con.'),
    Q('"Breadwinner" có nghĩa?', ['Người làm bánh', 'Người trụ cột về tài chính trong gia đình', 'Người chiến thắng', 'Người bán hàng'], 1, '"Breadwinner" = trụ cột kinh tế (kiếm tiền nuôi gia đình).'),
    Q('"Stereotype" nghĩa là?', ['Khuôn mẫu, định kiến', 'Sự đa dạng', 'Sự thật', 'Quan điểm'], 0, '"Stereotype" = định kiến/khuôn mẫu xã hội.'),
    Q('Chọn từ phù hợp: Women have become more _____ in society.', ['independent', 'independently', 'independence', 'depend'], 0, 'Sau "more" + tính từ ⇒ "independent".'),
  ]),

  M(22, 'Changing Roles — Passive Voice (Continued)', [
    Q('Cấu trúc bị động của thì tương lai gần (be going to)?', ['be going to be + V3', 'will be + V3', 'is going to + V3', 'going to be + V3'], 0, 'Future near passive: be going to be + V3.'),
    Q('Đổi sang bị động: "They are going to open a new park."', ['A new park is opened.', 'A new park will be opened.', 'A new park is going to be opened.', 'A new park is being opened.'], 2, 'Be going to be + V3.'),
    Q('Bị động của câu có 2 tân ngữ: "He gave me a present"?', ['I was given a present (by him). / A present was given to me (by him).', 'A present was give me.', 'I was give a present.', 'Me was given a present.'], 0, 'Có 2 cách: lấy tân ngữ gián tiếp hoặc trực tiếp làm chủ ngữ bị động.'),
    Q('Bị động của "Someone stole my bike."?', ['My bike was stolen.', 'My bike is stolen.', 'My bike has stolen.', 'My bike steals.'], 0, '"Someone" không đề cập tới ai cụ thể ⇒ bị động không cần "by".'),
    Q('Khi nào bỏ "by + tác nhân" trong câu bị động?', ['Khi không biết hoặc không cần thiết', 'Luôn luôn', 'Không bao giờ', 'Khi nói về sự việc cụ thể'], 0, 'Bỏ "by sb" khi tác nhân không quan trọng/không biết.'),
    Q('Bị động của "They have built a new bridge"?', ['A new bridge was built.', 'A new bridge has been built.', 'A new bridge is built.', 'A new bridge had been built.'], 1, 'Present perfect passive: has/have been + V3.'),
  ]),

  M(23, 'My Future Career — Vocabulary', [
    Q('"Career" có nghĩa?', ['Sự nghiệp', 'Công việc tạm thời', 'Tiền lương', 'Công ty'], 0, '"Career" = sự nghiệp (dài hạn).'),
    Q('"Job" và "career" khác nhau ở?', ['Job: công việc cụ thể; career: sự nghiệp dài hạn', 'Đồng nghĩa', 'Career ngắn hơn', 'Job dài hơn'], 0, '"Job" là công việc cụ thể; "career" là con đường nghề nghiệp.'),
    Q('"Vocational training" là?', ['Đào tạo nghề', 'Học đại học', 'Du học', 'Học cao học'], 0, '"Vocational training" = đào tạo nghề.'),
    Q('"Apply for a job" nghĩa là?', ['Bỏ việc', 'Nộp đơn xin việc', 'Làm việc', 'Phỏng vấn'], 1, '"Apply for" = nộp đơn xin (việc/học bổng).'),
    Q('"Resume" / "CV" là?', ['Đơn xin việc', 'Sơ yếu lý lịch', 'Hợp đồng', 'Bằng cấp'], 1, '"Resume" (AmE) / "CV" (Curriculum Vitae) = bản tóm tắt lý lịch nghề nghiệp.'),
    Q('"Salary" có nghĩa?', ['Tiền thưởng', 'Lương tháng', 'Tiền hưu', 'Phụ cấp'], 1, '"Salary" = lương (thường trả hàng tháng).'),
  ]),

  M(24, 'Relative Clauses — Defining (Mệnh đề quan hệ xác định)', [
    Q('Đại từ quan hệ nào thay cho người?', ['who, whom', 'which', 'whose', 'where'], 0, '"Who" làm chủ ngữ, "whom" làm tân ngữ cho người.'),
    Q('Đại từ quan hệ nào thay cho vật?', ['who', 'which', 'whom', 'when'], 1, '"Which" thay cho vật/động vật.'),
    Q('"That" có thể thay cho?', ['Cả người và vật (trong mệnh đề xác định)', 'Chỉ người', 'Chỉ vật', 'Không thay được'], 0, '"That" thay được cả người và vật, dùng trong mệnh đề xác định.'),
    Q('Hoàn thành: The man _____ lives next door is a doctor.', ['who', 'which', 'whose', 'where'], 0, 'Thay cho "the man" (người, làm chủ ngữ) ⇒ "who".'),
    Q('Hoàn thành: This is the book _____ I bought yesterday.', ['who', 'which/that', 'whose', 'where'], 1, '"Book" là vật ⇒ "which" hoặc "that".'),
    Q('"Whose" dùng để thay cho?', ['Sở hữu (người hoặc vật)', 'Chỉ người', 'Chỉ vật', 'Chỉ nơi chốn'], 0, '"Whose" = "of which/of whom" ⇒ chỉ sở hữu.'),
  ]),

  M(25, 'Relative Clauses — Non-defining (Mệnh đề quan hệ không xác định)', [
    Q('Mệnh đề quan hệ không xác định?', ['Có dấu phẩy ngăn cách, bổ sung thông tin', 'Không có dấu phẩy', 'Bắt buộc cho ý nghĩa câu', 'Không dùng "which"'], 0, 'Mệnh đề không xác định: có dấu phẩy + chỉ thêm thông tin phụ.'),
    Q('Trong mệnh đề không xác định, KHÔNG dùng đại từ?', ['who', 'which', 'whose', 'that'], 3, '"That" KHÔNG dùng trong mệnh đề không xác định.'),
    Q('Hoàn thành: My father, _____ is 60 years old, still works.', ['who', 'which', 'that', 'whose'], 0, 'Mệnh đề không xác định cho "father" ⇒ "who" (không dùng "that").'),
    Q('Đặt dấu câu đúng: "Hanoi which is the capital is beautiful."', ['Hanoi, which is the capital, is beautiful.', 'Hanoi which is the capital, is beautiful.', 'Hanoi, which is the capital is beautiful.', 'Hanoi which, is the capital, is beautiful.'], 0, 'Mệnh đề không xác định cần 2 dấu phẩy ngăn cách.'),
    Q('"Mr. Smith, _____ son is my classmate, is a lawyer."?', ['who', 'whose', 'which', 'whom'], 1, 'Sở hữu (son của Mr. Smith) ⇒ "whose".'),
    Q('Khi nào dùng mệnh đề không xác định?', ['Khi đối tượng đã được xác định rõ và mệnh đề chỉ bổ sung thông tin', 'Khi cần xác định đối tượng', 'Không bao giờ', 'Khi không có danh từ riêng'], 0, 'Đối tượng đã rõ ⇒ chỉ thêm thông tin (không xác định).'),
  ]),

  M(26, 'English in the World — Vocabulary', [
    Q('"Native speaker" là?', ['Người bản xứ nói tiếng đó từ nhỏ', 'Người học ngoại ngữ', 'Giáo viên', 'Học sinh giỏi'], 0, '"Native speaker" = người nói ngôn ngữ đó như tiếng mẹ đẻ.'),
    Q('"Fluent" có nghĩa?', ['Trôi chảy, lưu loát', 'Khó hiểu', 'Chậm rãi', 'Sai'], 0, '"Fluent in English" = nói tiếng Anh lưu loát.'),
    Q('"Bilingual" nghĩa là?', ['Một thứ tiếng', 'Hai thứ tiếng', 'Ba thứ tiếng', 'Nhiều thứ tiếng'], 1, '"Bi-" = 2; "lingual" = liên quan đến ngôn ngữ.'),
    Q('"Multilingual" có nghĩa?', ['Một thứ tiếng', 'Đa ngôn ngữ', 'Hai thứ tiếng', 'Không biết tiếng'], 1, '"Multi-" = nhiều ⇒ đa ngôn ngữ.'),
    Q('"Dialect" là?', ['Phương ngữ, tiếng địa phương', 'Tiếng phổ thông', 'Ngôn ngữ chính thức', 'Tiếng nước ngoài'], 0, '"Dialect" = phương ngữ (vd: Northern dialect, Southern dialect).'),
    Q('"Accent" có nghĩa?', ['Giọng điệu, cách phát âm vùng miền', 'Trọng âm câu', 'Ngữ pháp', 'Từ vựng'], 0, '"Accent" = giọng (British accent, American accent…).'),
  ]),

  M(27, 'Reported speech — Comprehensive review', [
    Q('Khi tường thuật, thì hiện tại đơn lùi về?', ['Quá khứ đơn', 'Quá khứ hoàn thành', 'Hiện tại hoàn thành', 'Không đổi'], 0, 'Present simple → past simple khi tường thuật.'),
    Q('"They said, \'We are studying.\'" → ?', ['They said they were studying.', 'They said they are studying.', 'They said we were studying.', 'They said we are studying.'], 0, 'Present continuous → past continuous; "we" → "they".'),
    Q('"He said, \'I can swim.\'" → ?', ['He said he can swim.', 'He said he could swim.', 'He said he swims.', 'He said I can swim.'], 1, '"Can" → "could" khi lùi thì.'),
    Q('Khi nào KHÔNG cần lùi thì trong câu tường thuật?', ['Khi nói về sự thật hiển nhiên hoặc động từ giới thiệu ở hiện tại', 'Luôn phải lùi thì', 'Không bao giờ lùi', 'Khi câu dài'], 0, 'Sự thật hiển nhiên hoặc "says/tells" ở hiện tại ⇒ không cần lùi thì.'),
    Q('"She said, \'Don\'t worry!\'" → ?', ['She told us don\'t worry.', 'She told us not to worry.', 'She said us not worry.', 'She said not to worry.'], 1, 'Mệnh lệnh phủ định: told sb not to + V.'),
    Q('"He asked, \'What time is it?\'" → ?', ['He asked what time it was.', 'He asked what time was it.', 'He asked what time is it.', 'He asked what time it is.'], 0, 'Câu hỏi WH: bỏ đảo ngữ + lùi thì.'),
  ]),

  M(28, 'Passive Voice — Comprehensive review', [
    Q('Bị động của "She is making a cake."?', ['A cake is made.', 'A cake is being made.', 'A cake was made.', 'A cake has been made.'], 1, 'Present continuous passive: is/are being + V3.'),
    Q('Bị động của "Will you finish the report?"', ['Will the report be finished?', 'Will the report finished?', 'Is the report finished?', 'Will be the report finished?'], 0, 'Future passive (câu hỏi): Will + S + be + V3?'),
    Q('Bị động của "They must clean the room."?', ['The room must be cleaned.', 'The room must clean.', 'The room is must cleaned.', 'The room cleaned must be.'], 0, 'Modal passive: modal + be + V3.'),
    Q('Bị động của "She had finished the work."?', ['The work had been finished.', 'The work was finished.', 'The work has been finished.', 'The work had finished.'], 0, 'Past perfect passive: had been + V3.'),
    Q('"This book _____ in 1990."?', ['was written', 'is written', 'has been written', 'will be written'], 0, 'Past simple passive với mốc thời gian rõ ràng "in 1990".'),
    Q('Khi đổi sang bị động, cần lưu ý?', ['Tân ngữ → chủ ngữ + chia "be" theo chủ ngữ mới + V3', 'Bỏ động từ', 'Đổi thì', 'Bỏ chủ ngữ'], 0, 'Quy tắc: O → S; V → be + V3 (be chia theo S mới và thì gốc).'),
  ]),

  M(29, 'Conditionals — Comprehensive review (Types 1, 2, 3)', [
    Q('Loại 1: If + present, then?', ['will + V', 'would + V', 'would have + V3', 'V'], 0, 'Mệnh đề chính loại 1: will + V.'),
    Q('Loại 2: If + past, then?', ['will + V', 'would + V', 'would have + V3', 'V'], 1, 'Mệnh đề chính loại 2: would/could/might + V.'),
    Q('Loại 3: If + past perfect, then?', ['will + V', 'would + V', 'would have + V3', 'V'], 2, 'Mệnh đề chính loại 3: would/could/might have + V3.'),
    Q('"If I had a car, I would drive to work" thuộc loại?', ['1', '2', '3', '0'], 1, 'If + past simple ⇒ loại 2 (giả định hiện tại).'),
    Q('"If she had studied, she would have passed" thuộc loại?', ['1', '2', '3', '0'], 2, 'If + past perfect ⇒ loại 3 (giả định quá khứ).'),
    Q('Loại 0 dùng cho?', ['Sự thật hiển nhiên (If + present, S + V present)', 'Tình huống có thật', 'Tình huống không có thật', 'Lời khuyên'], 0, 'Loại 0: chân lý/sự thật: "If you heat water, it boils".'),
  ]),

  M(30, 'Tourism — Reading and Writing skills', [
    Q('"Itinerary" trong du lịch nghĩa là?', ['Lịch trình', 'Vé máy bay', 'Khách sạn', 'Hành lý'], 0, '"Itinerary" = lịch trình chuyến đi.'),
    Q('"Tour guide" là?', ['Hướng dẫn viên du lịch', 'Khách du lịch', 'Tài xế', 'Đầu bếp'], 0, '"Tour guide" = hướng dẫn viên.'),
    Q('"Eco-tourism" là?', ['Du lịch sinh thái', 'Du lịch ẩm thực', 'Du lịch tâm linh', 'Du lịch mua sắm'], 0, '"Eco-tourism" = du lịch sinh thái, bảo vệ môi trường.'),
    Q('Để viết bài giới thiệu địa điểm du lịch cần?', ['Nêu vị trí, đặc điểm, hoạt động có thể làm, lý do nên đến', 'Chỉ tả cảnh', 'Chỉ kể chuyện', 'Chỉ giá cả'], 0, 'Bài giới thiệu cần đầy đủ thông tin hữu ích cho du khách.'),
    Q('"Souvenir" có nghĩa?', ['Đồ lưu niệm', 'Đồ ăn', 'Vé', 'Bản đồ'], 0, '"Souvenir" = đồ lưu niệm.'),
    Q('"Off the beaten track" có nghĩa?', ['Đi đường mòn', 'Những nơi ít người đến, không phải điểm du lịch quen thuộc', 'Đi sai đường', 'Đường ngắn nhất'], 1, 'Thành ngữ: nơi ít người biết đến, đi xa khỏi tuyến du lịch chính.'),
  ]),

  M(31, 'Recipes and Eating Habits — Health and food', [
    Q('"Balanced diet" là?', ['Chế độ ăn cân bằng dinh dưỡng', 'Ăn nhiều', 'Ăn ít', 'Ăn chay'], 0, '"Balanced diet" = chế độ ăn đầy đủ các nhóm chất.'),
    Q('"Nutrition" có nghĩa?', ['Dinh dưỡng', 'Năng lượng', 'Bệnh tật', 'Thể thao'], 0, '"Nutrition" = dinh dưỡng.'),
    Q('"Junk food" là?', ['Đồ ăn nhanh, kém dinh dưỡng', 'Thức ăn cao cấp', 'Đồ ăn chay', 'Đồ ăn truyền thống'], 0, '"Junk food" = đồ ăn vặt, nhiều dầu mỡ, ít dinh dưỡng.'),
    Q('"Vegetarian" là?', ['Người ăn chay', 'Người nấu ăn', 'Nông dân', 'Trẻ em'], 0, '"Vegetarian" = người ăn chay.'),
    Q('Chọn từ phù hợp: You should eat more _____ for your health.', ['fruit', 'fruits', 'a fruit', 'fruites'], 0, '"Fruit" thường là danh từ không đếm được khi nói chung chung.'),
    Q('"Calorie" có nghĩa?', ['Đơn vị năng lượng', 'Vitamin', 'Mùi vị', 'Trọng lượng'], 0, '"Calorie" = đơn vị đo năng lượng thực phẩm.'),
  ]),

  M(32, 'Ôn tập tổng hợp ngữ pháp', [
    Q('Bị động: "People speak English all over the world."', ['English is spoken all over the world.', 'English speaks all over the world.', 'English was spoken all over the world.', 'English is being spoken.'], 0, 'Present simple passive: is + V3.'),
    Q('Tường thuật: "She said, \'I have just finished my homework.\'"', ['She said she has just finished.', 'She said she had just finished her homework.', 'She said I had just finished.', 'She said she just finished.'], 1, 'Present perfect → past perfect; pronouns đổi phù hợp.'),
    Q('Mệnh đề quan hệ: "The book _____ I read yesterday is interesting."', ['who', 'which/that', 'whose', 'where'], 1, '"Book" là vật ⇒ which/that.'),
    Q('Câu điều kiện: "If you _____ (study), you will pass."', ['study', 'studied', 'had studied', 'will study'], 0, 'Loại 1: If + present simple.'),
    Q('Câu ước: "I wish I _____ a doctor."', ['am', 'were', 'will be', 'have been'], 1, 'Wish + were (giả định hiện tại trái thực tế).'),
    Q('Used to: "He _____ smoke, but he quit."', ['used to', 'use to', 'is used to', 'gets used to'], 0, '"Used to + V" = đã từng.'),
  ]),

  M(33, 'Đề ôn thi vào 10 — Đề số 1', [
    Q('Choose the best answer: "She has been studying English _____ 5 years."', ['for', 'since', 'in', 'on'], 0, '"For + khoảng thời gian"; "since + mốc thời gian".'),
    Q('Find the error: "If I was you, I would tell the truth."', ['was', 'would', 'tell', 'truth'], 0, 'Loại 2: nên dùng "were" cho mọi ngôi (trang trọng).'),
    Q('Choose the synonym of "fluent": "She speaks English fluently."', ['slowly', 'smoothly', 'badly', 'quickly'], 1, '"Fluent" ≈ "smooth" (trôi chảy).'),
    Q('Bị động: "Someone has broken the window."', ['The window was broken.', 'The window has been broken.', 'The window is broken.', 'The window broke.'], 1, 'Present perfect passive: has been + V3.'),
    Q('Hoàn thành: "_____ raining, we went out."', ['Although it was', 'Because it was', 'In spite of', 'Despite'], 0, '"Although + clause"; "in spite of/despite + noun/gerund".'),
    Q('Word form: "She gave a _____ speech." (impress)', ['impress', 'impression', 'impressive', 'impressively'], 2, 'Tính từ trước danh từ "speech" ⇒ "impressive".'),
  ]),

  M(34, 'Đề ôn thi vào 10 — Đề số 2 (Reading)', [
    Q('Đọc: "Da Lat is a beautiful city in the highlands of Vietnam. It is famous for flowers." Da Lat is famous for?', ['Beaches', 'Flowers', 'Snow', 'Markets'], 1, 'Câu thứ hai: "famous for flowers".'),
    Q('"Highlands" trong bài có nghĩa?', ['Cao nguyên', 'Đồng bằng', 'Bờ biển', 'Sa mạc'], 0, '"Highlands" = cao nguyên.'),
    Q('Cụm "famous for" có thể thay bằng?', ['known for / renowned for', 'afraid of', 'interested in', 'good at'], 0, '"Famous for" = "known for" = "renowned for" (nổi tiếng vì).'),
    Q('Đọc: "Vietnamese students study many subjects, including Math, Literature, and English." Số môn được nêu là?', ['1', '2', '3', '4'], 2, 'Liệt kê 3 môn: Math, Literature, English.'),
    Q('"Including" trong câu trên có nghĩa?', ['Loại trừ', 'Bao gồm', 'Sau đó', 'Trước hết'], 1, '"Including" = bao gồm.'),
    Q('Để tăng kỹ năng đọc hiểu, cần?', ['Đọc đa dạng, đoán nghĩa từ qua ngữ cảnh, không tra từ điển ngay', 'Tra từ điển mỗi từ', 'Đọc nhanh không hiểu', 'Bỏ qua nghĩa'], 0, 'Đoán nghĩa từ ngữ cảnh giúp đọc trôi chảy hơn.'),
  ]),

  M(35, 'Đề ôn thi vào 10 — Đề số 3 (Writing & Grammar)', [
    Q('Rewrite: "It\'s a pity I don\'t have a car." → "I wish _____"', ['I have a car.', 'I had a car.', 'I will have a car.', 'I would have a car.'], 1, 'Wish + past simple cho giả định hiện tại.'),
    Q('Rewrite: "John is my friend. He lives in Hanoi." → "John, _____ lives in Hanoi, is my friend."', ['who', 'which', 'whose', 'whom'], 0, 'Thay "he" (người, làm chủ ngữ) trong mệnh đề không xác định ⇒ "who".'),
    Q('Đổi sang bị động: "They built this temple 200 years ago."', ['This temple was built 200 years ago.', 'This temple is built.', 'This temple has been built.', 'This temple will be built.'], 0, 'Past simple passive: was/were + V3.'),
    Q('Hoàn thành: "If she had told me earlier, I _____ him."', ['will help', 'would help', 'would have helped', 'helped'], 2, 'Loại 3: would have + V3.'),
    Q('Word form: "Education plays an important role in _____ society." (modern)', ['modern', 'modernly', 'modernity', 'modernize'], 0, 'Trước danh từ "society" cần tính từ ⇒ "modern".'),
    Q('Để viết một bài luận tốt, cần?', ['Có dàn ý rõ (mở-thân-kết), dùng linking words, đa dạng cấu trúc', 'Viết dài', 'Dùng từ khó', 'Dịch từ tiếng Việt'], 0, 'Tổ chức ý + ngôn ngữ chính xác + cấu trúc đa dạng = bài luận tốt.'),
  ]),
];

export const S9TA_SCENARIOS = indexBy(S9TA_WEEKS);
