// ============================================================
// Lớp 8 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK Tiếng Anh 8 — Global Success (CTGD 2018).
// ID prefix: "S8TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8TA', 'tieng-anh', n, title, qs, opts);

export const S8TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Unit 1 — Leisure Activities (Vocabulary)', [
    Q('"Leisure activities" có nghĩa là?', ['Bài tập về nhà', 'Hoạt động giải trí', 'Công việc', 'Học tập'], 1, 'Leisure = giải trí, thư giãn.'),
    Q('Choose the correct: "She enjoys ___ to music."', ['listen', 'listens', 'listening', 'listened'], 2, 'Enjoy + V-ing → listening.'),
    Q('"Hang out with friends" nghĩa là?', ['Treo đồ với bạn', 'Đi chơi với bạn', 'Cãi nhau với bạn', 'Học cùng bạn'], 1, 'Cụm động từ chỉ "đi chơi giao lưu".'),
    Q('Activity NOT a leisure activity?', ['gardening', 'reading books', 'doing exam', 'watching TV'], 2, 'Làm bài thi không phải giải trí.'),
    Q('"I like ___ chess in my free time."', ['play', 'to playing', 'playing', 'played'], 2, 'Like + V-ing là cách dùng phổ biến nhất.'),
    Q('"Free time" có thể đồng nghĩa với?', ['Spare time', 'Hard time', 'Bad time', 'Old time'], 0, 'Spare time = thời gian rảnh.'),
  ]),

  M(2, 'Unit 1 — Verbs of liking + V-ing/to-V', [
    Q('Sau "enjoy" dùng?', ['to-V', 'V-ing', 'V-ed', 'V bare'], 1, 'Enjoy + V-ing.'),
    Q('Sau "want" dùng?', ['V-ing', 'to-V', 'V-ed', 'V'], 1, 'Want + to-V.'),
    Q('Sau "love" có thể dùng?', ['Chỉ V-ing', 'Chỉ to-V', 'Cả V-ing và to-V', 'Chỉ V'], 2, 'Love + V-ing/to-V đều được.'),
    Q('Sau "hate" có thể dùng?', ['Chỉ V', 'V-ing hoặc to-V', 'Chỉ V-ed', 'Chỉ V-ing'], 1, 'Hate + V-ing/to-V.'),
    Q('"I don\'t mind ___ early."', ['get up', 'to get up', 'getting up', 'got up'], 2, 'Don\'t mind + V-ing.'),
    Q('"He hopes ___ a doctor."', ['become', 'to become', 'becoming', 'became'], 1, 'Hope + to-V.'),
  ]),

  M(3, 'Unit 2 — Life in the Countryside', [
    Q('"Countryside" nghĩa là?', ['Trung tâm thành phố', 'Vùng nông thôn', 'Bãi biển', 'Sa mạc'], 1, 'Countryside = vùng nông thôn.'),
    Q('Activity typical in countryside?', ['shopping malls', 'collecting hay', 'going to skyscrapers', 'taking the subway'], 1, 'Thu hoạch cỏ khô (rơm) — đặc trưng nông thôn.'),
    Q('"Buffalo" là?', ['Con bò', 'Con trâu', 'Con dê', 'Con cừu'], 1, 'Buffalo = con trâu.'),
    Q('"Pick fruits" có nghĩa?', ['Bán trái cây', 'Hái trái cây', 'Trồng trái cây', 'Ăn trái cây'], 1, 'Pick = hái.'),
    Q('Choose: "Children in the countryside often ___ kites."', ['fly', 'flies', 'flew', 'flying'], 0, 'Hiện tại đơn, chủ ngữ số nhiều.'),
    Q('Adjective best describes countryside?', ['noisy', 'peaceful', 'crowded', 'polluted'], 1, 'Nông thôn thường yên bình.'),
  ]),

  M(4, 'Unit 2 — Comparative forms of adverbs', [
    Q('So sánh hơn của adverb 1 âm tiết "fast"?', ['more fast', 'faster', 'fastly', 'fasterly'], 1, 'Fast → faster (giống tính từ ngắn).'),
    Q('So sánh hơn của "carefully"?', ['carefullier', 'more carefully', 'carefuller', 'most carefully'], 1, 'Adverb dài: more + adverb.'),
    Q('Choose: "He runs ___ than I do."', ['fast', 'faster', 'fastest', 'more fast'], 1, 'Comparative + than.'),
    Q('"She speaks English ___ than her brother."', ['fluently', 'more fluently', 'fluenter', 'most fluently'], 1, 'Adverb dài.'),
    Q('Irregular: "well" — comparative?', ['weller', 'more well', 'better', 'best'], 2, 'Well → better.'),
    Q('"Badly" — comparative?', ['worse', 'badlier', 'more badly', 'worst'], 0, 'Badly → worse.'),
  ]),

  M(5, 'Unit 3 — Peoples of Vietnam', [
    Q('"Ethnic group" nghĩa?', ['Một bài hát', 'Dân tộc/nhóm dân tộc', 'Một câu chuyện', 'Một lớp học'], 1, 'Ethnic group = dân tộc.'),
    Q('Việt Nam có bao nhiêu dân tộc?', ['34', '54', '64', '74'], 1, 'Việt Nam có 54 dân tộc.'),
    Q('Dân tộc đông nhất Việt Nam?', ['Kinh', 'Tày', 'Thái', 'Mường'], 0, 'Người Kinh chiếm đa số.'),
    Q('"Traditional costume" nghĩa?', ['Trang phục truyền thống', 'Đồ ăn truyền thống', 'Lễ hội', 'Bài hát'], 0, 'Costume = trang phục.'),
    Q('"The H\'Mong live in ___ areas."', ['lowland', 'mountainous', 'sea', 'desert'], 1, 'Người H\'Mông sống ở vùng núi.'),
    Q('"Stilt house" là?', ['Nhà gỗ', 'Nhà sàn', 'Nhà tranh', 'Nhà gạch'], 1, 'Stilt house = nhà sàn.'),
  ]),

  M(6, 'Unit 3 — Questions: how many / how much', [
    Q('"___ ethnic groups are there in Vietnam?"', ['How much', 'How many', 'How long', 'How often'], 1, 'How many + danh từ đếm được số nhiều.'),
    Q('"___ water do you drink every day?"', ['How many', 'How much', 'How long', 'How often'], 1, 'How much + danh từ không đếm được.'),
    Q('Đáp án "About 54" trả lời cho?', ['How much rice…?', 'How many ethnic groups…?', 'How often…?', 'How far…?'], 1, 'Số đếm được → how many.'),
    Q('Choose: "How many ___ are there in your class?"', ['student', 'students', 'a student', 'studenting'], 1, 'How many + N số nhiều.'),
    Q('Choose: "How much ___ do you need?"', ['apples', 'sugar', 'books', 'pens'], 1, 'Sugar không đếm được.'),
    Q('"How many books do you have?" — câu hỏi về?', ['Số lượng (đếm được)', 'Khối lượng', 'Tần suất', 'Khoảng cách'], 0, 'Hỏi số lượng đếm được.'),
  ]),

  M(7, 'Unit 4 — Our Customs and Traditions', [
    Q('"Custom" nghĩa là?', ['Phong tục', 'Khách hàng', 'Hải quan', 'Quà tặng'], 0, 'Custom = phong tục.'),
    Q('"Tradition" nghĩa là?', ['Truyền thống', 'Sự dịch thuật', 'Sự thay đổi', 'Sự chuyển dời'], 0, 'Tradition = truyền thống.'),
    Q('"Should" dùng để?', ['Diễn tả khả năng', 'Đưa lời khuyên', 'Diễn tả tương lai', 'Hỏi giờ'], 1, 'Should = nên (lời khuyên).'),
    Q('"You ___ take off your shoes before entering a Vietnamese house."', ['can', 'should', 'must not', 'will'], 1, 'Lời khuyên về phong tục.'),
    Q('"It is impolite to ___" — chọn động từ thích hợp:', ['help others', 'point at people', 'study hard', 'be kind'], 1, 'Chỉ tay vào người khác là bất lịch sự.'),
    Q('"Lì xì" trong tiếng Anh thường gọi là?', ['lucky money', 'birthday money', 'pocket money', 'tip money'], 0, 'Lì xì = lucky money.'),
  ]),

  M(8, 'Unit 4 — should / shouldn\'t', [
    Q('Cấu trúc: S + should + ?', ['V-ing', 'V (bare)', 'to-V', 'V-ed'], 1, 'Should + V nguyên thể (không to).'),
    Q('Câu phủ định của should?', ['don\'t should', 'shouldn\'t', 'doesn\'t should', 'shouldn\'ts'], 1, 'Shouldn\'t = should not.'),
    Q('"You ___ smoke; it\'s bad for health."', ['should', 'shouldn\'t', 'must', 'can'], 1, 'Khuyên KHÔNG nên.'),
    Q('"You ___ help your parents with housework."', ['should', 'shouldn\'t', 'don\'t', 'aren\'t'], 0, 'Lời khuyên tích cực.'),
    Q('Câu hỏi với should: "___ I bring a gift?"', ['Do', 'Does', 'Should', 'Am'], 2, 'Đảo should lên trước.'),
    Q('"Should" formality?', ['Lời khuyên thân mật/lịch sự', 'Ra lệnh nghiêm khắc', 'Đe doạ', 'Mệnh lệnh quân đội'], 0, 'Lời khuyên lịch sự, nhẹ nhàng.'),
  ]),

  M(9, 'Unit 5 — Festivals in Vietnam', [
    Q('"Festival" nghĩa là?', ['Hội nghị', 'Lễ hội', 'Lễ tốt nghiệp', 'Bữa tiệc'], 1, 'Festival = lễ hội.'),
    Q('"Lunar New Year" là?', ['Tết Trung thu', 'Tết Nguyên đán (theo âm lịch)', 'Quốc khánh', 'Lễ Phật đản'], 1, 'Lunar = âm lịch.'),
    Q('"Mid-Autumn Festival" là?', ['Tết Trung thu', 'Tết Nguyên đán', 'Lễ Tạ ơn', 'Giáng sinh'], 0, 'Trung thu vào rằm tháng 8 âm lịch.'),
    Q('"Worship" có nghĩa là?', ['Mua sắm', 'Thờ cúng/cầu nguyện', 'Trò chuyện', 'Ăn uống'], 1, 'Worship = thờ phụng.'),
    Q('"Hung Kings Temple Festival" diễn ra ở tỉnh nào?', ['Phú Thọ', 'Hà Nội', 'Đà Nẵng', 'Bến Tre'], 0, 'Đền Hùng ở Phú Thọ.'),
    Q('"Dragon boat" liên quan đến?', ['Lễ hội đua thuyền rồng', 'Tết Trung thu', 'Lễ Phục sinh', 'Tết Nguyên đán'], 0, 'Đua thuyền rồng là phần của nhiều lễ hội.'),
  ]),

  M(10, 'Unit 5 — Simple past + used to', [
    Q('"Used to + V" diễn tả?', ['Hành động hiện tại', 'Thói quen/sự thật trong quá khứ nhưng nay không còn', 'Tương lai', 'Khả năng'], 1, 'Used to: từng (giờ không còn).'),
    Q('"I ___ to live in Hanoi."', ['use', 'used', 'using', 'uses'], 1, 'Used to (quá khứ).'),
    Q('Phủ định: "She ___ to eat meat."', ['don\'t use', 'didn\'t used', 'didn\'t use', 'doesn\'t use'], 2, 'Did not + use to + V.'),
    Q('Câu hỏi: "___ you use to play soccer?"', ['Do', 'Does', 'Did', 'Are'], 2, 'Did + S + use to + V?'),
    Q('Quá khứ đơn của "go"?', ['goed', 'went', 'gone', 'going'], 1, 'Bất quy tắc: went.'),
    Q('"Last year, we ___ to Hue."', ['go', 'went', 'gone', 'going'], 1, 'Last year → quá khứ đơn.'),
  ]),

  M(11, 'Unit 6 — Folk Tales', [
    Q('"Folk tale" nghĩa?', ['Bài hát dân gian', 'Truyện dân gian', 'Trò chơi', 'Điệu múa'], 1, 'Folk tale = truyện dân gian.'),
    Q('"Fairy tale" là?', ['Truyện cổ tích', 'Truyện ngụ ngôn', 'Truyền thuyết', 'Thần thoại'], 0, 'Truyện cổ tích có yếu tố thần tiên.'),
    Q('"Once upon a time" mở đầu cho thể loại?', ['Tin tức', 'Truyện cổ tích', 'Báo cáo', 'Email'], 1, 'Cụm mở đầu cổ tích.'),
    Q('"Tấm Cám" là loại truyện?', ['Truyền thuyết', 'Cổ tích', 'Ngụ ngôn', 'Thần thoại'], 1, 'Cổ tích thần kì.'),
    Q('"Hero" nghĩa là?', ['Kẻ xấu', 'Anh hùng', 'Thầy giáo', 'Khán giả'], 1, 'Hero = anh hùng/người hùng.'),
    Q('"Brave" nghĩa?', ['Hèn nhát', 'Dũng cảm', 'Thông minh', 'Đẹp'], 1, 'Brave = dũng cảm.'),
  ]),

  M(12, 'Unit 6 — Past simple vs past continuous', [
    Q('Quá khứ tiếp diễn cấu trúc?', ['S + V-ed', 'S + was/were + V-ing', 'S + has + V3', 'S + will + V'], 1, 'Was/were + V-ing.'),
    Q('"While he ___ (read), the phone rang."', ['read', 'was reading', 'reads', 'is reading'], 1, 'Hành động đang xảy ra → was reading.'),
    Q('"When I came home, my mother ___ dinner."', ['cooked', 'was cooking', 'is cooking', 'cooks'], 1, 'Khi đến → mẹ đang nấu → was cooking.'),
    Q('Quá khứ đơn của "sing"?', ['singed', 'sang', 'sung', 'sings'], 1, 'Sing → sang → sung.'),
    Q('"Yesterday at 7 p.m., we ___ TV."', ['watch', 'watched', 'were watching', 'are watching'], 2, 'Mốc thời gian cụ thể → tiếp diễn.'),
    Q('Liên từ phổ biến nối 2 mệnh đề quá khứ?', ['so', 'while / when / as', 'because of', 'although'], 1, 'While/when/as nối past continuous với past simple.'),
  ]),

  M(13, 'Unit 7 — Pollution', [
    Q('"Pollution" nghĩa là?', ['Sự ô nhiễm', 'Sự bảo vệ', 'Sự phát triển', 'Sự đầu tư'], 0, 'Pollution = ô nhiễm.'),
    Q('Loại ô nhiễm nào do tiếng ồn?', ['Air pollution', 'Water pollution', 'Noise pollution', 'Soil pollution'], 2, 'Noise = tiếng ồn.'),
    Q('Ô nhiễm không khí gây ra do?', ['Khí thải xe, nhà máy', 'Rác thải nhựa', 'Đèn LED', 'Cây xanh'], 0, 'Emissions từ phương tiện và nhà máy.'),
    Q('"Conditional sentence type 1" diễn tả?', ['Sự thật chung', 'Sự việc có thể xảy ra ở hiện tại/tương lai', 'Điều không có thật', 'Hành động trong quá khứ'], 1, 'Câu điều kiện loại 1 — thực tế.'),
    Q('Cấu trúc loại 1: "If + S + V (htđ), S + ___ + V."', ['will', 'would', 'had', 'was'], 0, 'If + present simple, will + V.'),
    Q('"If we ___ trees, the air will be cleaner."', ['planted', 'plant', 'will plant', 'plants'], 1, 'Mệnh đề if + htđ.'),
  ]),

  M(14, 'Unit 7 — Conditional sentence type 1', [
    Q('"If it rains tomorrow, we ___ at home."', ['stay', 'will stay', 'stayed', 'are staying'], 1, 'Loại 1: will + V.'),
    Q('Đảo trật tự: "We will stay at home ___ it rains tomorrow."', ['if', 'unless', 'although', 'because'], 0, 'Mệnh đề if có thể ở sau, không cần phẩy.'),
    Q('"Unless" = ?', ['If not', 'If', 'Because', 'Although'], 0, 'Unless = if … not.'),
    Q('"Unless you study hard, you ___ the exam."', ['will pass', 'won\'t pass', 'pass', 'passed'], 1, 'Unless = nếu không.'),
    Q('Mệnh đề if của câu loại 1 dùng thì?', ['Past simple', 'Present simple', 'Present perfect', 'Future simple'], 1, 'Hiện tại đơn ở mệnh đề if.'),
    Q('"If you eat too much candy, you ___ a stomachache."', ['have', 'will have', 'had', 'are having'], 1, 'Loại 1.'),
  ]),

  M(15, 'Unit 8 — English Speaking Countries', [
    Q('Country where English is NOT the official language?', ['UK', 'USA', 'Australia', 'Vietnam'], 3, 'Việt Nam: tiếng Việt là ngôn ngữ chính thức.'),
    Q('Thủ đô nước Anh (UK)?', ['London', 'Manchester', 'Liverpool', 'Edinburgh'], 0, 'Capital of UK = London.'),
    Q('Thủ đô Mỹ?', ['New York', 'Washington D.C.', 'Los Angeles', 'Chicago'], 1, 'Capital of USA = Washington D.C.'),
    Q('Thủ đô Australia?', ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], 2, 'Canberra (không phải Sydney).'),
    Q('Quốc kì Anh được gọi là?', ['Union Jack', 'Stars and Stripes', 'Maple Leaf', 'Southern Cross'], 0, 'Union Jack/Union Flag.'),
    Q('Người dân Mỹ gọi là?', ['Americans', 'Englishmen', 'Australians', 'Canadians'], 0, 'Americans.'),
  ]),

  M(16, 'Unit 8 — Articles a / an / the', [
    Q('Mạo từ "a" dùng trước?', ['Phụ âm phát âm', 'Nguyên âm phát âm', 'Bất kì từ nào', 'Số nhiều'], 0, 'A + phụ âm (a book, a university).'),
    Q('Mạo từ "an" dùng trước?', ['Phụ âm phát âm', 'Nguyên âm phát âm', 'Số nhiều', 'Tên riêng'], 1, 'An + nguyên âm (an apple, an hour).'),
    Q('Mạo từ xác định "the" dùng khi?', ['Lần đầu nhắc đến', 'Đối tượng cụ thể hoặc nhắc lại', 'Số nhiều bất định', 'Không bao giờ'], 1, 'The dùng cho đối tượng đã xác định.'),
    Q('Choose: "She is ___ honest girl."', ['a', 'an', 'the', 'no article'], 1, '"Honest" bắt đầu nguyên âm /ɒ/, dùng an.'),
    Q('"I live in ___ USA."', ['a', 'an', 'the', 'no article'], 2, 'Tên quốc gia có "of/States" dùng the.'),
    Q('"He plays ___ piano."', ['a', 'an', 'the', 'no article'], 2, 'Nhạc cụ dùng "the".'),
  ]),

  M(17, 'Unit 8 — Speaking practice: introducing places', [
    Q('"Where is it located?" hỏi về?', ['Vị trí', 'Thời gian', 'Tên người', 'Giá tiền'], 0, 'Located = vị trí.'),
    Q('"How big is it?" hỏi về?', ['Tuổi', 'Kích thước', 'Màu sắc', 'Giá'], 1, 'Big = kích thước.'),
    Q('"What is the population?" hỏi?', ['Diện tích', 'Dân số', 'Khí hậu', 'Lịch sử'], 1, 'Population = dân số.'),
    Q('"Sydney is famous ___ the Opera House."', ['for', 'in', 'at', 'on'], 0, 'Famous for + danh từ.'),
    Q('"London is the capital ___ England."', ['for', 'of', 'in', 'at'], 1, 'Capital of + country.'),
    Q('"Australia is well-known ___ kangaroos."', ['for', 'in', 'at', 'on'], 0, 'Well-known for.'),
  ]),

  M(18, 'Review HK1', [
    Q('"Enjoy + ?"', ['to-V', 'V-ing', 'V', 'V-ed'], 1, 'Enjoy + V-ing.'),
    Q('Comparative of "carefully"?', ['carefuller', 'more carefully', 'most carefully', 'carefullier'], 1, 'Adverb dài.'),
    Q('"How many" dùng với danh từ?', ['Không đếm được', 'Đếm được số nhiều', 'Số ít', 'Riêng'], 1, 'Đếm được số nhiều.'),
    Q('"Should" theo sau bởi?', ['V-ing', 'to-V', 'V (bare)', 'V-ed'], 2, 'Should + V nguyên thể.'),
    Q('Past simple of "sing"?', ['sing', 'sang', 'sung', 'singed'], 1, 'Sang.'),
    Q('Câu điều kiện loại 1: If + present simple, ___ + V.', ['would', 'will', 'had', 'was'], 1, 'Will + V.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Natural Disasters', [
    Q('"Earthquake" nghĩa?', ['Bão', 'Động đất', 'Lũ lụt', 'Sóng thần'], 1, 'Earth + quake = động đất.'),
    Q('"Tsunami" nghĩa?', ['Lốc xoáy', 'Sóng thần', 'Hạn hán', 'Cháy rừng'], 1, 'Tsunami = sóng thần.'),
    Q('"Flood" là?', ['Lũ lụt', 'Động đất', 'Núi lửa', 'Sạt lở'], 0, 'Flood = lũ.'),
    Q('"Volcano" là?', ['Núi lửa', 'Hồ', 'Sông', 'Đầm lầy'], 0, 'Volcano = núi lửa.'),
    Q('"Drought" là?', ['Lũ', 'Hạn hán', 'Mưa đá', 'Tuyết rơi'], 1, 'Drought = hạn hán.'),
    Q('"Evacuate" nghĩa?', ['Sơ tán', 'Tấn công', 'Trú ẩn vĩnh viễn', 'Xây dựng'], 0, 'Evacuate = sơ tán.'),
  ]),

  M(20, 'Unit 9 — Past continuous (recap)', [
    Q('Cấu trúc past continuous?', ['S + V-ed', 'S + was/were + V-ing', 'S + has + V3', 'S + will + V-ing'], 1, 'Was/were + V-ing.'),
    Q('Was/were + V-ing diễn tả?', ['Sự thật chung', 'Hành động đang xảy ra tại một thời điểm trong quá khứ', 'Tương lai', 'Hành động lặp lại'], 1, 'Hành động đang diễn ra ở quá khứ.'),
    Q('"At 8 p.m. yesterday, they ___ dinner."', ['have', 'are having', 'were having', 'had'], 2, 'Mốc thời gian cụ thể → past continuous.'),
    Q('"While the earthquake ___ (happen), people ran out."', ['happens', 'was happening', 'happened', 'is happening'], 1, 'Đang xảy ra → was happening.'),
    Q('Phủ định: "I ___ TV when you called."', ['didn\'t watching', 'wasn\'t watching', 'wasn\'t watch', 'not was watching'], 1, 'Wasn\'t + V-ing.'),
    Q('Câu hỏi yes/no past continuous?', ['Did + S + V-ing?', 'Was/Were + S + V-ing?', 'Do + S + V-ing?', 'Have + S + V-ing?'], 1, 'Đảo was/were lên trước.'),
  ]),

  M(21, 'Unit 10 — Communication', [
    Q('"Communication" nghĩa?', ['Sự cô lập', 'Sự giao tiếp', 'Sự im lặng', 'Sự chia rẽ'], 1, 'Communication = giao tiếp.'),
    Q('"Body language" là?', ['Ngôn ngữ cơ thể', 'Ngôn ngữ lập trình', 'Tiếng địa phương', 'Tiếng nước ngoài'], 0, 'Body language = ngôn ngữ cơ thể.'),
    Q('Phương tiện giao tiếp hiện đại?', ['Smoke signals', 'Carrier pigeons', 'Social media / Email', 'Sign language only'], 2, 'Mạng xã hội, email.'),
    Q('"Misunderstand" nghĩa?', ['Hiểu lầm', 'Hiểu đúng', 'Hiểu sâu', 'Hiểu nhanh'], 0, 'Mis- (sai) + understand.'),
    Q('"Face-to-face" nghĩa?', ['Trực diện/đối mặt', 'Qua điện thoại', 'Qua email', 'Qua tin nhắn'], 0, 'Trực tiếp gặp mặt.'),
    Q('"Nod your head" là cử chỉ?', ['Lắc đầu', 'Gật đầu', 'Cúi đầu', 'Quay đầu'], 1, 'Nod = gật đầu.'),
  ]),

  M(22, 'Unit 10 — Future continuous & passive voice (intro)', [
    Q('Cấu trúc future continuous?', ['S + will + V-ing', 'S + will + be + V-ing', 'S + is going to + V', 'S + will + V'], 1, 'Will + be + V-ing.'),
    Q('"At 8 p.m. tomorrow, I ___ for my exam."', ['will study', 'will be studying', 'study', 'am studying'], 1, 'Sẽ đang xảy ra ở một thời điểm tương lai.'),
    Q('Bị động cơ bản: "English is ___ all over the world."', ['speak', 'spoke', 'spoken', 'speaking'], 2, 'Be + V3/ed → spoken.'),
    Q('"The letter ___ by Tom yesterday."', ['wrote', 'was written', 'is written', 'writes'], 1, 'Quá khứ bị động: was/were + V3.'),
    Q('Active: "They build houses." → Passive: "Houses ___ ."', ['are built', 'are building', 'built', 'were built'], 0, 'Hiện tại bị động.'),
    Q('Chủ thể của hành động trong bị động đặt sau từ?', ['for', 'by', 'in', 'with'], 1, 'By + tác nhân.'),
  ]),

  M(23, 'Unit 11 — Science and Technology', [
    Q('"Technology" nghĩa?', ['Công nghệ', 'Sinh học', 'Lịch sử', 'Địa lý'], 0, 'Technology.'),
    Q('"Invention" là?', ['Sáng tạo', 'Phát minh', 'Khám phá', 'Bản thiết kế'], 1, 'Invention = phát minh.'),
    Q('Ai phát minh bóng đèn?', ['Edison', 'Newton', 'Einstein', 'Tesla'], 0, 'Thomas Edison.'),
    Q('"AI" viết tắt cho?', ['Artificial Intelligence', 'Automatic Internet', 'Active Information', 'All Inclusive'], 0, 'AI = trí tuệ nhân tạo.'),
    Q('"Smartphone" thuộc loại?', ['Đồ ăn', 'Thiết bị công nghệ', 'Phương tiện giao thông', 'Trang phục'], 1, 'Thiết bị công nghệ cá nhân.'),
    Q('"Robot can replace humans in ___ work."', ['fun', 'dangerous', 'easy', 'creative'], 1, 'Robot thường thay người ở việc nguy hiểm.'),
  ]),

  M(24, 'Unit 11 — Reported speech (basic statements)', [
    Q('Direct: He said "I am tired." → Reported?', ['He said he is tired.', 'He said he was tired.', 'He says he was tired.', 'He said I was tired.'], 1, 'Lùi thì: am → was.'),
    Q('"She said: I love English." → ?', ['She said she loves English.', 'She said she loved English.', 'She says she loved English.', 'She tell she loved English.'], 1, 'Lùi: love → loved.'),
    Q('Khi đổi sang reported, "today" thường đổi thành?', ['yesterday', 'that day', 'tomorrow', 'now'], 1, 'Today → that day.'),
    Q('"Tomorrow" → reported = ?', ['the day before', 'the next day / the following day', 'today', 'last day'], 1, 'Tomorrow → the next day.'),
    Q('"Here" trong reported speech đổi thành?', ['here', 'there', 'where', 'this'], 1, 'Here → there.'),
    Q('Sau "said to + sb" có thể đổi thành?', ['told + sb', 'said sb', 'say sb', 'told to sb'], 0, 'Said to sb = told sb.'),
  ]),

  M(25, 'Unit 12 — Life on Other Planets', [
    Q('"Planet" là?', ['Hành tinh', 'Ngôi sao', 'Mặt trăng', 'Sao chổi'], 0, 'Planet = hành tinh.'),
    Q('"UFO" viết tắt của?', ['Unidentified Flying Object', 'Universal Flying Object', 'Unknown Future Order', 'United Flight Office'], 0, 'Vật thể bay không xác định.'),
    Q('"Alien" nghĩa?', ['Người ngoài hành tinh', 'Phi hành gia', 'Phi công', 'Kĩ sư'], 0, 'Alien = sinh vật ngoài Trái Đất.'),
    Q('"Astronaut" là?', ['Người ngoài hành tinh', 'Phi hành gia', 'Nhà khoa học', 'Bác sĩ'], 1, 'Astronaut = phi hành gia.'),
    Q('Hành tinh đỏ trong hệ Mặt Trời?', ['Venus', 'Mars', 'Jupiter', 'Saturn'], 1, 'Sao Hoả = Mars (Red Planet).'),
    Q('"Solar system" là?', ['Hệ Mặt Trời', 'Thiên hà', 'Vũ trụ', 'Ngân hà'], 0, 'Hệ Mặt Trời.'),
  ]),

  M(26, 'Unit 12 — Modal verbs: may / might', [
    Q('"May" trong câu "It may rain" diễn tả?', ['Khả năng có thể xảy ra', 'Sự chắc chắn', 'Sự cấm đoán', 'Mệnh lệnh'], 0, 'May = có thể (khả năng).'),
    Q('Sau "may/might" dùng?', ['V-ing', 'to-V', 'V (bare)', 'V-ed'], 2, 'May/Might + V nguyên thể.'),
    Q('"Might" so với "may" thì?', ['Khả năng cao hơn', 'Khả năng thấp hơn (ít chắc chắn hơn)', 'Bắt buộc hơn', 'Nghiêm túc hơn'], 1, 'Might = ít chắc chắn hơn may.'),
    Q('"May I open the window?" diễn tả?', ['Khả năng', 'Xin phép lịch sự', 'Lời khuyên', 'Tương lai'], 1, 'Xin phép lịch sự.'),
    Q('"There ___ be life on Mars."', ['must', 'might', 'should', 'will'], 1, 'Có thể có sự sống — khả năng không chắc chắn.'),
    Q('Phủ định may/might?', ['may not / might not', 'don\'t may', 'doesn\'t might', 'mayn\'ts'], 0, 'May not / might not.'),
  ]),

  M(27, 'Unit 7–12 — Vocabulary review', [
    Q('"Pollution" thuộc topic?', ['Festivals', 'Environment', 'Sports', 'Travel'], 1, 'Môi trường.'),
    Q('"Lunar New Year" thuộc topic?', ['Festivals/Customs', 'Pollution', 'Technology', 'Disasters'], 0, 'Lễ hội/phong tục.'),
    Q('"Earthquake" thuộc topic?', ['Communication', 'Natural disasters', 'Space', 'Music'], 1, 'Thảm hoạ thiên nhiên.'),
    Q('"Smartphone" thuộc topic?', ['Festivals', 'Pollution', 'Science and Technology', 'Folk tales'], 2, 'Khoa học công nghệ.'),
    Q('"Mars" thuộc topic?', ['Life on other planets', 'Folk tales', 'Communication', 'Customs'], 0, 'Hành tinh — vũ trụ.'),
    Q('"Body language" thuộc topic?', ['Disasters', 'Communication', 'Pollution', 'Festivals'], 1, 'Giao tiếp.'),
  ]),

  M(28, 'Grammar — Comparatives review (intermediate)', [
    Q('Form so sánh hơn của adjective ngắn?', ['adj + er', 'more + adj', 'adj + est', 'most + adj'], 0, 'Ngắn: + er.'),
    Q('Form so sánh hơn của adjective dài?', ['adj + er', 'more + adj', 'adj + est', 'most + adj'], 1, 'Dài: more + adj.'),
    Q('Comparative của "good"?', ['gooder', 'more good', 'better', 'best'], 2, 'Bất quy tắc: better.'),
    Q('"She is ___ than her sister."', ['tall', 'taller', 'tallest', 'more tall'], 1, 'Comparative.'),
    Q('Equal comparison: "He is ___ tall ___ his brother."', ['as / as', 'so / as', 'more / than', 'as / than'], 0, 'As … as.'),
    Q('"This book is ___ interesting than that one."', ['more', 'most', 'as', 'so'], 0, 'Adj dài → more.'),
  ]),

  M(29, 'Grammar — Passive voice (simple tenses)', [
    Q('Cấu trúc bị động hiện tại đơn?', ['am/is/are + V-ing', 'am/is/are + V3', 'has/have + V3', 'was/were + V3'], 1, 'Be + past participle.'),
    Q('"Vietnamese ___ in Vietnam."', ['speaks', 'is spoken', 'spoke', 'speaking'], 1, 'Hiện tại bị động.'),
    Q('"The cake ___ by my mom."', ['made', 'is made', 'making', 'be made'], 1, 'Is + made.'),
    Q('Active "They built this house in 1990." → Passive: "This house ___ in 1990."', ['was built', 'is built', 'built', 'was building'], 0, 'Quá khứ bị động.'),
    Q('Tác nhân trong bị động đặt sau?', ['for', 'by', 'with', 'in'], 1, 'By + agent.'),
    Q('"Letters ___ every day."', ['delivered', 'are delivered', 'is delivered', 'delivering'], 1, 'Letters (số nhiều) + are + V3.'),
  ]),

  M(30, 'Reading & Vocabulary — Festivals', [
    Q('"Take place" nghĩa?', ['Mang đi', 'Diễn ra', 'Đặt chỗ', 'Lấy chỗ'], 1, 'Take place = diễn ra.'),
    Q('"Be held" nghĩa?', ['Được tổ chức', 'Được giữ', 'Bị nắm', 'Bị bắt'], 0, 'Be held = được tổ chức.'),
    Q('"Worship" trong "ancestor worship"?', ['Thờ cúng tổ tiên', 'Du lịch tổ tiên', 'Ghi nhớ', 'Đọc thơ'], 0, 'Thờ cúng tổ tiên.'),
    Q('"Costume" số nhiều?', ['costums', 'costumes', 'costumies', 'costume'], 1, 'Costumes.'),
    Q('"Traditional dance" là?', ['Múa truyền thống', 'Nhảy hiện đại', 'Múa balê', 'Nhảy hip hop'], 0, 'Múa truyền thống.'),
    Q('"Lantern" liên quan đến lễ hội?', ['Mid-Autumn', 'Tet', 'Easter', 'Christmas'], 0, 'Đèn lồng — Trung Thu.'),
  ]),

  M(31, 'Speaking — Giving opinions', [
    Q('Cách nêu ý kiến: "In my ___, …"', ['idea', 'opinion', 'mind', 'thought'], 1, 'In my opinion.'),
    Q('"I think ___" sau đó dùng?', ['Một mệnh đề', 'Một danh từ riêng', 'Chỉ một từ', 'Một dấu chấm'], 0, 'I think + that-clause.'),
    Q('"I agree with you" nghĩa?', ['Tôi không đồng ý', 'Tôi đồng ý với bạn', 'Tôi suy nghĩ', 'Tôi không biết'], 1, 'Agree = đồng ý.'),
    Q('"I don\'t think so" thể hiện?', ['Không đồng ý nhẹ nhàng', 'Đồng ý mạnh', 'Im lặng', 'Tránh né'], 0, 'Không đồng ý nhẹ.'),
    Q('Để xin ý kiến: "What do you ___?"', ['think', 'have', 'do', 'are'], 0, 'What do you think?'),
    Q('"You\'re right" nghĩa?', ['Bạn đúng', 'Bạn sai', 'Bạn nên đi', 'Bạn ở đúng vị trí'], 0, 'Bạn nói đúng.'),
  ]),

  M(32, 'Writing — Email & Paragraph', [
    Q('Cách mở đầu email thân mật?', ['Dear Sir/Madam,', 'Hi/Hello + name,', 'To whom it may concern,', 'Yours faithfully,'], 1, 'Email thân mật: Hi/Hello.'),
    Q('Cách kết email thân mật?', ['Yours faithfully', 'Best regards / Love', 'Sincerely yours', 'Dear'], 1, 'Best regards/Love thân mật.'),
    Q('Cấu trúc một đoạn văn?', ['Câu chủ đề + câu phát triển + câu kết', 'Chỉ một câu', 'Chỉ liệt kê', 'Chỉ câu hỏi'], 0, 'Topic – supporting – concluding.'),
    Q('Từ nối thể hiện đối lập?', ['However / But', 'Because', 'So', 'For example'], 0, 'However = tuy nhiên.'),
    Q('Từ nối nguyên nhân – kết quả?', ['Because / So', 'However', 'Although', 'But'], 0, 'Because/so.'),
    Q('Khi viết email công việc, ngôn ngữ?', ['Trang trọng (formal)', 'Tuỳ tiện', 'Đầy biểu tượng cảm xúc', 'Ngắn cộc'], 0, 'Formal cho email công việc.'),
  ]),

  M(33, 'Listening — Numbers, dates, prices', [
    Q('"Twenty-first" là số thứ tự của?', ['20', '21', '22', '12'], 1, 'Twenty-first = thứ 21.'),
    Q('Ngày 1/5 đọc là?', ['May 1st / The first of May', 'May 1', 'May one', 'May once'], 0, 'May 1st hoặc The first of May.'),
    Q('"$15.99" đọc là?', ['Fifteen dollars and ninety-nine cents', 'Fifteen ninety-nine', 'Fifteen point nine nine dollars', 'Cả A và B đều đúng'], 3, 'Cả hai cách đều dùng.'),
    Q('Năm "2025" đọc là?', ['Twenty twenty-five', 'Two thousand and twenty-five', 'Cả hai đều đúng', 'Two-zero-two-five'], 2, 'Cả hai cách đều phổ biến.'),
    Q('"Half past seven" là mấy giờ?', ['6:30', '7:30', '8:30', '7:00'], 1, 'Bảy giờ rưỡi.'),
    Q('"A quarter to nine" là?', ['8:45', '9:15', '9:45', '8:15'], 0, 'Kém 15 phút đến 9 → 8:45.'),
  ]),

  M(34, 'Grammar review — Tenses', [
    Q('"I ___ to school every day."', ['go', 'goes', 'went', 'going'], 0, 'Hiện tại đơn — thói quen.'),
    Q('"She ___ her homework now."', ['does', 'is doing', 'did', 'done'], 1, 'Now → hiện tại tiếp diễn.'),
    Q('"They ___ Hanoi last week."', ['visit', 'visited', 'are visiting', 'have visited'], 1, 'Quá khứ đơn.'),
    Q('"I have ___ this book three times."', ['read', 'readed', 'reads', 'reading'], 0, 'Have + V3/ed; read là dạng V3 bất quy tắc.'),
    Q('"Tomorrow he ___ to Paris."', ['flies', 'will fly', 'flew', 'flying'], 1, 'Tương lai đơn.'),
    Q('"While she ___ TV, he came in."', ['watched', 'was watching', 'is watching', 'watches'], 1, 'Past continuous.'),
  ]),

  M(35, 'Review HK2 — Final', [
    Q('Future continuous: "S + will + ___ + V-ing"', ['be', 'have', 'do', 'is'], 0, 'Will + be + V-ing.'),
    Q('Passive present simple: "Books ___ in the library."', ['read', 'are read', 'is read', 'reading'], 1, 'Be + V3.'),
    Q('Reported: He said "I am tired." → He said he ___ tired.', ['is', 'was', 'were', 'has been'], 1, 'Lùi thì: am → was.'),
    Q('"It may rain tomorrow." — "may" thể hiện?', ['Bắt buộc', 'Khả năng có thể xảy ra', 'Lời khuyên', 'Tương lai chắc chắn'], 1, 'Khả năng.'),
    Q('Comparative of "interesting"?', ['interestinger', 'more interesting', 'most interesting', 'interestingest'], 1, 'Adj dài → more.'),
    Q('Topic "Communication" tập trung vào?', ['Phương tiện và cách giao tiếp', 'Lễ hội', 'Ô nhiễm', 'Hành tinh khác'], 0, 'Communication = giao tiếp.'),
  ]),
];

export const S8TA_SCENARIOS = indexBy(S8TA_WEEKS);
