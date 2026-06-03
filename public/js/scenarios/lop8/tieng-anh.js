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
    Q('"Leisure activities" có nghĩa là?', ['Công việc', 'Học tập', 'Hoạt động giải trí', 'Bài tập về nhà'], 2, 'Leisure = giải trí, thư giãn.'),
    Q('Choose the correct: "She enjoys ___ to music."', ['listen', 'listens', 'listening', 'listened'], 2, 'Enjoy + V-ing → listening.'),
    Q('"Hang out with friends" nghĩa là?', ['Cãi nhau với bạn', 'Học cùng bạn', 'Đi chơi với bạn', 'Treo đồ với bạn'], 2, 'Cụm động từ chỉ "đi chơi giao lưu".'),
    Q('Activity NOT a leisure activity?', ['doing exam', 'watching TV', 'gardening', 'reading books'], 0, 'Làm bài thi không phải giải trí.'),
    Q('"I like ___ chess in my free time."', ['to playing', 'playing', 'to play', 'played'], 1, 'Like + V-ing là cách dùng phổ biến nhất.'),
    Q('"Free time" có thể đồng nghĩa với?', ['Bad time', 'Hard time', 'Spare time', 'Old time'], 2, 'Spare time = thời gian rảnh.'),
  ]),

  M(2, 'Unit 1 — Verbs of liking + V-ing/to-V', [
    Q('Sau "enjoy" dùng?', ['to-V (nguyên thể có to)', 'V-ing', 'V bare', 'V3/V-ed (quá khứ phân từ)'], 1, 'Enjoy + V-ing.'),
    Q('Sau "want" dùng?', ['V-ing (động từ thêm -ing)', 'V-ing (như sau enjoy)', 'to-V', 'V nguyên mẫu (không to)'], 2, 'Want + to-V.'),
    Q('Sau "love" có thể dùng?', ['Chỉ V-ing', 'Chỉ V nguyên mẫu (không to)', 'Cả V-ing và to-V', 'Chỉ to-V'], 2, 'Love + V-ing/to-V đều được.'),
    Q('Sau "hate" có thể dùng?', ['Chỉ V-ed', 'Chỉ V-ing', 'Chỉ V nguyên mẫu (không to)', 'V-ing hoặc to-V'], 3, 'Hate + V-ing/to-V.'),
    Q('"I don\'t mind ___ early."', ['got up', 'to get up', 'get up', 'getting up'], 3, 'Don\'t mind + V-ing.'),
    Q('"He hopes ___ a doctor."', ['became', 'become', 'to become', 'becoming'], 2, 'Hope + to-V.'),
  ]),

  M(3, 'Unit 2 — Life in the Countryside', [
    Q('"Countryside" nghĩa là?', ['Bãi biển', 'Vùng nông thôn', 'Trung tâm thành phố', 'Sa mạc'], 1, 'Countryside = vùng nông thôn.'),
    Q('Activity typical in countryside?', ['collecting hay', 'going to skyscrapers', 'taking the subway', 'shopping malls'], 0, 'Thu hoạch cỏ khô (rơm) — đặc trưng nông thôn.'),
    Q('"Buffalo" là?', ['Con dê', 'Con bò', 'Con trâu', 'Con cừu'], 2, 'Buffalo = con trâu.'),
    Q('"Pick fruits" có nghĩa?', ['Bán trái cây', 'Hái trái cây', 'Ăn trái cây', 'Trồng trái cây'], 1, 'Pick = hái.'),
    Q('Choose: "Children in the countryside often ___ kites."', ['fly', 'flies (số ít)', 'flew (quá khứ)', 'flying'], 0, 'Hiện tại đơn, chủ ngữ số nhiều.'),
    Q('Adjective best describes countryside?', ['polluted', 'crowded', 'peaceful', 'noisy (ồn ào)'], 2, 'Nông thôn thường yên bình.'),
  ]),

  M(4, 'Unit 2 — Comparative forms of adverbs', [
    Q('So sánh hơn của adverb 1 âm tiết "fast"?', ['fasterly', 'faster', 'fastly', 'more fast'], 1, 'Fast → faster (giống tính từ ngắn).'),
    Q('So sánh hơn của "carefully"?', ['carefullier', 'more carefully', 'most carefully', 'carefuller'], 1, 'Adverb dài: more + adverb.'),
    Q('Choose: "He runs ___ than I do."', ['fast (nguyên dạng, không so sánh)', 'fastest', 'more fast', 'faster'], 3, 'Comparative + than.'),
    Q('"She speaks English ___ than her brother."', ['fluently', 'more fluently', 'most fluently', 'fluenter'], 1, 'Adverb dài.'),
    Q('Irregular: "well" — comparative?', ['better', 'more well', 'weller', 'best (so sánh nhất)'], 0, 'Well → better.'),
    Q('"Badly" — comparative?', ['worse', 'worst (so sánh nhất)', 'badlier', 'more badly'], 0, 'Badly → worse.'),
  ]),

  M(5, 'Unit 3 — Peoples of Vietnam', [
    Q('"Ethnic group" nghĩa?', ['Dân tộc/nhóm dân tộc', 'Một bài hát', 'Một câu chuyện', 'Một lớp học'], 0, 'Ethnic group = dân tộc.'),
    Q('Việt Nam có bao nhiêu dân tộc?', ['34', '54', '64', '74'], 1, 'Việt Nam có 54 dân tộc.'),
    Q('Dân tộc đông nhất Việt Nam?', ['Mường', 'Kinh', 'Thái', 'Tày'], 1, 'Người Kinh chiếm đa số.'),
    Q('"Traditional costume" nghĩa?', ['Trang phục truyền thống', 'Bài hát', 'Đồ ăn truyền thống', 'Lễ hội'], 0, 'Costume = trang phục.'),
    Q('"The H\'Mong live in ___ areas."', ['coastal (vùng ven biển)', 'mountainous', 'lowland', 'desert'], 1, 'Người H\'Mông sống ở vùng núi.'),
    Q('"Stilt house" là?', ['Nhà sàn', 'Nhà gạch', 'Nhà gỗ', 'Nhà tranh'], 0, 'Stilt house = nhà sàn.'),
  ]),

  M(6, 'Unit 3 — Questions: how many / how much', [
    Q('"___ ethnic groups are there in Vietnam?"', ['How long', 'How many', 'How much', 'How often'], 1, 'How many + danh từ đếm được số nhiều.'),
    Q('"___ water do you drink every day?"', ['How often', 'How long', 'How many', 'How much'], 3, 'How much + danh từ không đếm được.'),
    Q('Đáp án "About 54" trả lời cho?', ['How far…?', 'How many ethnic groups…?', 'How often…?', 'How much rice…?'], 1, 'Số đếm được → how many.'),
    Q('Choose: "How many ___ are there in your class?"', ['student', 'a student', 'students', 'studenting'], 2, 'How many + N số nhiều.'),
    Q('Choose: "How much ___ do you need?"', ['books (sách - đếm được)', 'pens (bút - đếm được)', 'sugar', 'apples'], 2, 'Sugar không đếm được.'),
    Q('"How many books do you have?" — câu hỏi về?', ['Tần suất', 'Số lượng (đếm được)', 'Khối lượng', 'Khoảng cách'], 1, 'Hỏi số lượng đếm được.'),
  ]),

  M(7, 'Unit 4 — Our Customs and Traditions', [
    Q('"Custom" nghĩa là?', ['Hải quan', 'Khách hàng', 'Phong tục', 'Quà tặng'], 2, 'Custom = phong tục.'),
    Q('"Tradition" nghĩa là?', ['Truyền thống', 'Sự chuyển dời', 'Sự thay đổi', 'Sự dịch thuật'], 0, 'Tradition = truyền thống.'),
    Q('"Should" dùng để?', ['Đưa lời khuyên', 'Diễn tả khả năng', 'Hỏi giờ', 'Diễn tả tương lai'], 0, 'Should = nên (lời khuyên).'),
    Q('"You ___ take off your shoes before entering a Vietnamese house."', ['can (có thể - khả năng)', 'will (sẽ - tương lai)', 'should', 'must not'], 2, 'Lời khuyên về phong tục.'),
    Q('"It is impolite to ___" — chọn động từ thích hợp:', ['help others', 'be kind', 'study hard', 'point at people'], 3, 'Chỉ tay vào người khác là bất lịch sự.'),
    Q('"Lì xì" trong tiếng Anh thường gọi là?', ['tip money', 'pocket money', 'birthday money', 'lucky money'], 3, 'Lì xì = lucky money.'),
  ]),

  M(8, 'Unit 4 — should / shouldn\'t', [
    Q('Cấu trúc: S + should + ?', ['to-V (nguyên thể có to)', 'V-ing (động từ thêm -ing)', 'V-ed (quá khứ phân từ)', 'V (bare)'], 3, 'Should + V nguyên thể (không to).'),
    Q('Câu phủ định của should?', ['doesn\'t should', 'shouldn\'ts', 'shouldn\'t', 'don\'t should'], 2, 'Shouldn\'t = should not.'),
    Q('"You ___ smoke; it\'s bad for health."', ['must (bắt buộc)', 'can (có thể)', 'should', 'shouldn\'t'], 3, 'Khuyên KHÔNG nên.'),
    Q('"You ___ help your parents with housework."', ['aren\'t', 'shouldn\'t', 'should', 'don\'t (phủ định hiện tại đơn)'], 2, 'Lời khuyên tích cực.'),
    Q('Câu hỏi với should: "___ I bring a gift?"', ['Should', 'Am (động từ to be)', 'Does (trợ động từ ngôi 3 số ít)', 'Do (trợ động từ hiện tại)'], 0, 'Đảo should lên trước.'),
    Q('"Should" formality?', ['Mệnh lệnh quân đội', 'Đe doạ', 'Lời khuyên thân mật/lịch sự', 'Ra lệnh nghiêm khắc'], 2, 'Lời khuyên lịch sự, nhẹ nhàng.'),
  ]),

  M(9, 'Unit 5 — Festivals in Vietnam', [
    Q('"Festival" nghĩa là?', ['Lễ hội', 'Hội nghị', 'Bữa tiệc', 'Lễ tốt nghiệp'], 0, 'Festival = lễ hội.'),
    Q('"Lunar New Year" là?', ['Lễ Phật đản', 'Tết Nguyên đán (theo âm lịch)', 'Quốc khánh', 'Tết Trung thu'], 1, 'Lunar = âm lịch.'),
    Q('"Mid-Autumn Festival" là?', ['Giáng sinh', 'Tết Trung thu', 'Tết Nguyên đán', 'Lễ Tạ ơn'], 1, 'Trung thu vào rằm tháng 8 âm lịch.'),
    Q('"Worship" có nghĩa là?', ['Mua sắm', 'Ăn uống', 'Thờ cúng/cầu nguyện', 'Trò chuyện'], 2, 'Worship = thờ phụng.'),
    Q('"Hung Kings Temple Festival" diễn ra ở tỉnh nào?', ['Hà Nội', 'Bến Tre', 'Đà Nẵng', 'Phú Thọ'], 3, 'Đền Hùng ở Phú Thọ.'),
    Q('"Dragon boat" liên quan đến?', ['Tết Nguyên đán', 'Lễ Phục sinh', 'Tết Trung thu', 'Lễ hội đua thuyền rồng'], 3, 'Đua thuyền rồng là phần của nhiều lễ hội.'),
  ]),

  M(10, 'Unit 5 — Simple past + used to', [
    Q('"Used to + V" diễn tả?', ['Hành động hiện tại', 'Thói quen/sự thật trong quá khứ nhưng nay không còn', 'Khả năng', 'Tương lai'], 1, 'Used to: từng (giờ không còn).'),
    Q('"I ___ to live in Hanoi."', ['use (nguyên dạng)', 'using (V-ing)', 'uses (số ít hiện tại)', 'used'], 3, 'Used to (quá khứ).'),
    Q('Phủ định: "She ___ to eat meat."', ['didn\'t used', 'doesn\'t use', 'didn\'t use', 'don\'t use'], 2, 'Did not + use to + V.'),
    Q('Câu hỏi: "___ you use to play soccer?"', ['Are (to be hiện tại)', 'Did', 'Do (trợ động từ hiện tại)', 'Does (trợ động từ số ít)'], 1, 'Did + S + use to + V?'),
    Q('Quá khứ đơn của "go"?', ['went', 'goed (thêm -ed sai)', 'gone (quá khứ phân từ V3)', 'going (V-ing)'], 0, 'Bất quy tắc: went.'),
    Q('"Last year, we ___ to Hue."', ['go (nguyên dạng)', 'going (V-ing)', 'gone (quá khứ phân từ V3)', 'went'], 3, 'Last year → quá khứ đơn.'),
  ]),

  M(11, 'Unit 6 — Folk Tales', [
    Q('"Folk tale" nghĩa?', ['Trò chơi', 'Truyện dân gian', 'Điệu múa', 'Bài hát dân gian'], 1, 'Folk tale = truyện dân gian.'),
    Q('"Fairy tale" là?', ['Thần thoại', 'Truyện ngụ ngôn', 'Truyện cổ tích', 'Truyền thuyết'], 2, 'Truyện cổ tích có yếu tố thần tiên.'),
    Q('"Once upon a time" mở đầu cho thể loại?', ['Truyện cổ tích', 'Tin tức', 'Báo cáo', 'Bài luận khoa học'], 0, 'Cụm mở đầu cổ tích.'),
    Q('"Tấm Cám" là loại truyện?', ['Cổ tích', 'Truyền thuyết', 'Ngụ ngôn', 'Thần thoại'], 0, 'Cổ tích thần kì.'),
    Q('"Hero" nghĩa là?', ['Khán giả', 'Anh hùng', 'Kẻ xấu', 'Thầy giáo'], 1, 'Hero = anh hùng/người hùng.'),
    Q('"Brave" nghĩa?', ['Dũng cảm', 'Hèn nhát', 'Tốt bụng', 'Thông minh'], 0, 'Brave = dũng cảm.'),
  ]),

  M(12, 'Unit 6 — Past simple vs past continuous', [
    Q('Quá khứ tiếp diễn cấu trúc?', ['S + has + V3', 'S + V-ed', 'S + will + V', 'S + was/were + V-ing'], 3, 'Was/were + V-ing.'),
    Q('"While he ___ (read), the phone rang."', ['read (nguyên dạng/quá khứ đơn)', 'was reading', 'reads (hiện tại đơn số ít)', 'is reading'], 1, 'Hành động đang xảy ra → was reading.'),
    Q('"When I came home, my mother ___ dinner."', ['was cooking', 'is cooking', 'cooks (hiện tại đơn số ít)', 'cooked'], 0, 'Khi đến → mẹ đang nấu → was cooking.'),
    Q('Quá khứ đơn của "sing"?', ['sang', 'sings (hiện tại số ít)', 'singed', 'sung (quá khứ phân từ V3)'], 0, 'Sing → sang → sung.'),
    Q('"Yesterday at 7 p.m., we ___ TV."', ['are watching', 'watch (nguyên dạng)', 'watched', 'were watching'], 3, 'Mốc thời gian cụ thể → tiếp diễn.'),
    Q('Liên từ phổ biến nối 2 mệnh đề quá khứ?', ['so (vì vậy - kết quả)', 'because of', 'although', 'while / when / as'], 3, 'While/when/as nối past continuous với past simple.'),
  ]),

  M(13, 'Unit 7 — Pollution', [
    Q('"Pollution" nghĩa là?', ['Sự ô nhiễm', 'Sự bảo vệ', 'Sự phát triển', 'Sự đầu tư'], 0, 'Pollution = ô nhiễm.'),
    Q('Loại ô nhiễm nào do tiếng ồn?', ['Water pollution', 'Air pollution', 'Noise pollution', 'Soil pollution'], 2, 'Noise = tiếng ồn.'),
    Q('Ô nhiễm không khí gây ra do?', ['Cây xanh', 'Đèn LED', 'Rác thải nhựa', 'Khí thải xe, nhà máy'], 3, 'Emissions từ phương tiện và nhà máy.'),
    Q('"Conditional sentence type 1" diễn tả?', ['Hành động trong quá khứ', 'Sự việc có thể xảy ra ở hiện tại/tương lai', 'Điều không có thật', 'Sự thật chung'], 1, 'Câu điều kiện loại 1 — thực tế.'),
    Q('Cấu trúc loại 1: "If + S + V (htđ), S + ___ + V."', ['would (loại 2)', 'will', 'was (to be quá khứ)', 'had (loại 3)'], 1, 'If + present simple, will + V.'),
    Q('"If we ___ trees, the air will be cleaner."', ['planted', 'plants', 'will plant', 'plant'], 3, 'Mệnh đề if + htđ.'),
  ]),

  M(14, 'Unit 7 — Conditional sentence type 1', [
    Q('"If it rains tomorrow, we ___ at home."', ['will stay', 'are staying', 'stay (nguyên dạng, thiếu will)', 'stayed'], 0, 'Loại 1: will + V.'),
    Q('Đảo trật tự: "We will stay at home ___ it rains tomorrow."', ['because', 'if', 'unless', 'although'], 1, 'Mệnh đề if có thể ở sau, không cần phẩy.'),
    Q('"Unless" = ?', ['Because', 'Although', 'If not', 'When (khi)'], 2, 'Unless = if … not.'),
    Q('"Unless you study hard, you ___ the exam."', ['passed', 'won\'t pass', 'will pass', 'pass (nguyên dạng, thiếu trợ động từ)'], 1, 'Unless = nếu không.'),
    Q('Mệnh đề if của câu loại 1 dùng thì?', ['Present perfect', 'Future simple', 'Past simple', 'Present simple'], 3, 'Hiện tại đơn ở mệnh đề if.'),
    Q('"If you eat too much candy, you ___ a stomachache."', ['will have', 'have (nguyên dạng, thiếu will)', 'are having', 'had (quá khứ đơn)'], 0, 'Loại 1.'),
  ]),

  M(15, 'Unit 8 — English Speaking Countries', [
    Q('Country where English is NOT the official language?', ['Canada (Canada)', 'Australia', 'New Zealand (New Zealand)', 'Vietnam'], 3, 'Việt Nam: tiếng Việt là ngôn ngữ chính thức.'),
    Q('Thủ đô nước Anh (UK)?', ['Edinburgh', 'Manchester', 'London', 'Liverpool'], 2, 'Capital of UK = London.'),
    Q('Thủ đô Mỹ?', ['Chicago', 'Washington D.C.', 'Los Angeles', 'New York'], 1, 'Capital of USA = Washington D.C.'),
    Q('Thủ đô Australia?', ['Brisbane', 'Canberra', 'Melbourne', 'Sydney'], 1, 'Canberra (không phải Sydney).'),
    Q('Quốc kì Anh được gọi là?', ['Stars and Stripes', 'Southern Cross', 'Union Jack', 'Maple Leaf'], 2, 'Union Jack/Union Flag.'),
    Q('Người dân Mỹ gọi là?', ['Englishmen', 'Australians', 'Americans', 'Canadians'], 2, 'Americans.'),
  ]),

  M(16, 'Unit 8 — Articles a / an / the', [
    Q('Mạo từ "a" dùng trước?', ['Bất kì từ nào', 'Nguyên âm phát âm', 'Số nhiều', 'Phụ âm phát âm'], 3, 'A + phụ âm (a book, a university).'),
    Q('Mạo từ "an" dùng trước?', ['Tên riêng', 'Số nhiều', 'Phụ âm phát âm', 'Nguyên âm phát âm'], 3, 'An + nguyên âm (an apple, an hour).'),
    Q('Mạo từ xác định "the" dùng khi?', ['Không bao giờ', 'Lần đầu nhắc đến', 'Đối tượng cụ thể hoặc nhắc lại', 'Số nhiều bất định'], 2, 'The dùng cho đối tượng đã xác định.'),
    Q('Choose: "She is ___ honest girl."', ['a (mạo từ trước phụ âm)', 'the (mạo từ xác định)', 'an', 'no article'], 2, '"Honest" bắt đầu nguyên âm /ɒ/, dùng an.'),
    Q('"I live in ___ USA."', ['no article', 'the', 'an (trước nguyên âm)', 'a (trước phụ âm)'], 1, 'Tên quốc gia có "of/States" dùng the.'),
    Q('"He plays ___ piano."', ['no article', 'an (trước nguyên âm)', 'the', 'a (trước phụ âm)'], 2, 'Nhạc cụ dùng "the".'),
  ]),

  M(17, 'Unit 8 — Speaking practice: introducing places', [
    Q('"Where is it located?" hỏi về?', ['Vị trí', 'Giá tiền', 'Thời gian', 'Tên người'], 0, 'Located = vị trí.'),
    Q('"How big is it?" hỏi về?', ['Tuổi (How old)', 'Màu sắc', 'Kích thước', 'Giá (How much)'], 2, 'Big = kích thước.'),
    Q('"What is the population?" hỏi?', ['Khí hậu', 'Dân số', 'Lịch sử', 'Diện tích'], 1, 'Population = dân số.'),
    Q('"Sydney is famous ___ the Opera House."', ['for', 'on (giới từ chỉ vị trí trên)', 'in (giới từ chỉ trong)', 'at (giới từ chỉ tại)'], 0, 'Famous for + danh từ.'),
    Q('"London is the capital ___ England."', ['at (giới từ chỉ tại điểm)', 'of', 'for (giới từ chỉ cho)', 'in (giới từ chỉ trong)'], 1, 'Capital of + country.'),
    Q('"Australia is well-known ___ kangaroos."', ['for', 'at (giới từ chỉ tại điểm)', 'on (giới từ chỉ trên)', 'in (giới từ chỉ trong)'], 0, 'Well-known for.'),
  ]),

  M(18, 'Review HK1', [
    Q('"Enjoy + ?"', ['V-ed (quá khứ phân từ)', 'to-V (nguyên thể có to)', 'V-ing', 'V nguyên dạng'], 2, 'Enjoy + V-ing.'),
    Q('Comparative of "carefully"?', ['carefuller', 'most carefully', 'more carefully', 'carefullier'], 2, 'Adverb dài.'),
    Q('"How many" dùng với danh từ?', ['Đếm được số ít', 'Danh từ riêng', 'Không đếm được', 'Đếm được số nhiều'], 3, 'Đếm được số nhiều.'),
    Q('"Should" theo sau bởi?', ['V-ed (quá khứ phân từ)', 'V-ing (động từ thêm -ing)', 'V (bare)', 'to-V (nguyên thể có to)'], 2, 'Should + V nguyên thể.'),
    Q('Past simple of "sing"?', ['sung (quá khứ phân từ V3)', 'sing (nguyên dạng)', 'sang', 'singed'], 2, 'Sang.'),
    Q('Câu điều kiện loại 1: If + present simple, ___ + V.', ['will', 'would (dùng cho loại 2)', 'was (to be quá khứ)', 'had (dùng cho loại 3)'], 0, 'Will + V.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Unit 9 — Natural Disasters', [
    Q('"Earthquake" nghĩa?', ['Sóng thần', 'Sạt lở đất', 'Động đất', 'Lũ lụt'], 2, 'Earth + quake = động đất.'),
    Q('"Tsunami" nghĩa?', ['Hạn hán', 'Cháy rừng', 'Sóng thần', 'Lốc xoáy'], 2, 'Tsunami = sóng thần.'),
    Q('"Flood" là?', ['Sạt lở', 'Động đất', 'Lũ lụt', 'Núi lửa'], 2, 'Flood = lũ.'),
    Q('"Volcano" là?', ['Đầm lầy', 'Thung lũng', 'Núi lửa', 'Đồi cát'], 2, 'Volcano = núi lửa.'),
    Q('"Drought" là?', ['Mưa đá', 'Hạn hán', 'Sương mù dày', 'Tuyết rơi'], 1, 'Drought = hạn hán.'),
    Q('"Evacuate" nghĩa?', ['Xây dựng', 'Sơ tán', 'Trú ẩn vĩnh viễn', 'Tấn công'], 1, 'Evacuate = sơ tán.'),
  ]),

  M(20, 'Unit 9 — Past continuous (recap)', [
    Q('Cấu trúc past continuous?', ['S + will + V-ing', 'S + was/were + V-ing', 'S + has + V3', 'S + V-ed'], 1, 'Was/were + V-ing.'),
    Q('Was/were + V-ing diễn tả?', ['Tương lai', 'Hành động lặp lại', 'Hành động đang xảy ra tại một thời điểm trong quá khứ', 'Sự thật chung'], 2, 'Hành động đang diễn ra ở quá khứ.'),
    Q('"At 8 p.m. yesterday, they ___ dinner."', ['were having', 'had (quá khứ đơn)', 'are having', 'have (hiện tại đơn)'], 0, 'Mốc thời gian cụ thể → past continuous.'),
    Q('"While the earthquake ___ (happen), people ran out."', ['is happening', 'was happening', 'happens', 'happened'], 1, 'Đang xảy ra → was happening.'),
    Q('Phủ định: "I ___ TV when you called."', ['not was watching', 'wasn\'t watch', 'wasn\'t watching', 'didn\'t watching'], 2, 'Wasn\'t + V-ing.'),
    Q('Câu hỏi yes/no past continuous?', ['Did + S + V-ing?', 'Was/Were + S + V-ing?', 'Do + S + V-ing?', 'Have + S + V-ing?'], 1, 'Đảo was/were lên trước.'),
  ]),

  M(21, 'Unit 10 — Communication', [
    Q('"Communication" nghĩa?', ['Sự im lặng', 'Sự giao tiếp', 'Sự chia rẽ', 'Sự cô lập'], 1, 'Communication = giao tiếp.'),
    Q('"Body language" là?', ['Tiếng địa phương', 'Ngôn ngữ lập trình', 'Tiếng nước ngoài', 'Ngôn ngữ cơ thể'], 3, 'Body language = ngôn ngữ cơ thể.'),
    Q('Phương tiện giao tiếp hiện đại?', ['Sign language only', 'Social media / Email', 'Carrier pigeons', 'Smoke signals'], 1, 'Mạng xã hội, email.'),
    Q('"Misunderstand" nghĩa?', ['Hiểu đúng', 'Hiểu lầm', 'Hiểu sâu', 'Hiểu nhanh'], 1, 'Mis- (sai) + understand.'),
    Q('"Face-to-face" nghĩa?', ['Qua tin nhắn', 'Qua điện thoại', 'Trực diện/đối mặt', 'Qua email'], 2, 'Trực tiếp gặp mặt.'),
    Q('"Nod your head" là cử chỉ?', ['Gật đầu', 'Lắc đầu', 'Quay đầu', 'Cúi đầu'], 0, 'Nod = gật đầu.'),
  ]),

  M(22, 'Unit 10 — Future continuous & passive voice (intro)', [
    Q('Cấu trúc future continuous?', ['S + will + be + V-ing', 'S + will + V', 'S + will + V-ing', 'S + is going to + V'], 0, 'Will + be + V-ing.'),
    Q('"At 8 p.m. tomorrow, I ___ for my exam."', ['am studying', 'will study', 'study (hiện tại đơn)', 'will be studying'], 3, 'Sẽ đang xảy ra ở một thời điểm tương lai.'),
    Q('Bị động cơ bản: "English is ___ all over the world."', ['speaking', 'speak (nguyên dạng)', 'spoken', 'spoke (quá khứ đơn V2)'], 2, 'Be + V3/ed → spoken.'),
    Q('"The letter ___ by Tom yesterday."', ['wrote (chủ động quá khứ)', 'is written', 'writes', 'was written'], 3, 'Quá khứ bị động: was/were + V3.'),
    Q('Active: "They build houses." → Passive: "Houses ___ ."', ['were built', 'are building', 'are built', 'build (nguyên dạng, không bị động)'], 2, 'Hiện tại bị động.'),
    Q('Chủ thể của hành động trong bị động đặt sau từ?', ['in (giới từ chỉ trong)', 'with (giới từ chỉ công cụ/cùng)', 'by', 'for (giới từ chỉ cho)'], 2, 'By + tác nhân.'),
  ]),

  M(23, 'Unit 11 — Science and Technology', [
    Q('"Technology" nghĩa?', ['Địa lý', 'Công nghệ', 'Sinh học', 'Lịch sử'], 1, 'Technology.'),
    Q('"Invention" là?', ['Khám phá', 'Bản thiết kế', 'Sáng tạo', 'Phát minh'], 3, 'Invention = phát minh.'),
    Q('Ai phát minh bóng đèn?', ['Einstein', 'Newton', 'Bell (Alexander Graham Bell)', 'Edison'], 3, 'Thomas Edison.'),
    Q('"AI" viết tắt cho?', ['Automatic Internet', 'Active Information', 'Artificial Intelligence', 'All Inclusive'], 2, 'AI = trí tuệ nhân tạo.'),
    Q('"Smartphone" thuộc loại?', ['Dụng cụ học tập', 'Thiết bị công nghệ', 'Phương tiện giao thông', 'Trang phục'], 1, 'Thiết bị công nghệ cá nhân.'),
    Q('"Robot can replace humans in ___ work."', ['artistic (nghệ thuật)', 'emotional (cảm xúc)', 'creative', 'dangerous'], 3, 'Robot thường thay người ở việc nguy hiểm.'),
  ]),

  M(24, 'Unit 11 — Reported speech (basic statements)', [
    Q('Direct: He said "I am tired." → Reported?', ['He says he was tired.', 'He said I was tired.', 'He said he is tired.', 'He said he was tired.'], 3, 'Lùi thì: am → was.'),
    Q('"She said: I love English." → ?', ['She says she loved English.', 'She tell she loved English.', 'She said she loves English.', 'She said she loved English.'], 3, 'Lùi: love → loved.'),
    Q('Khi đổi sang reported, "today" thường đổi thành?', ['yesterday', 'that day', 'the previous day (ngày trước đó)', 'tomorrow'], 1, 'Today → that day.'),
    Q('"Tomorrow" → reported = ?', ['last day', 'the next day / the following day', 'that day (ngày đó)', 'the day before'], 1, 'Tomorrow → the next day.'),
    Q('"Here" trong reported speech đổi thành?', ['that place (chỗ đó)', 'in there (ở trong đó)', 'there', 'to there (đến đó)'], 2, 'Here → there.'),
    Q('Sau "said to + sb" có thể đổi thành?', ['say sb', 'said sb', 'told to sb', 'told + sb'], 3, 'Said to sb = told sb.'),
  ]),

  M(25, 'Unit 12 — Life on Other Planets', [
    Q('"Planet" là?', ['Hành tinh', 'Sao chổi', 'Ngôi sao', 'Mặt trăng'], 0, 'Planet = hành tinh.'),
    Q('"UFO" viết tắt của?', ['Universal Flying Object', 'United Flight Office', 'Unidentified Flying Object', 'Unknown Future Order'], 2, 'Vật thể bay không xác định.'),
    Q('"Alien" nghĩa?', ['Nhà du hành vũ trụ', 'Người ngoài hành tinh', 'Phi hành gia', 'Phi công'], 1, 'Alien = sinh vật ngoài Trái Đất.'),
    Q('"Astronaut" là?', ['Phi hành gia', 'Bác sĩ', 'Người ngoài hành tinh', 'Nhà khoa học'], 0, 'Astronaut = phi hành gia.'),
    Q('Hành tinh đỏ trong hệ Mặt Trời?', ['Mercury (sao Thuỷ)', 'Jupiter', 'Mars', 'Saturn'], 2, 'Sao Hoả = Mars (Red Planet).'),
    Q('"Solar system" là?', ['Thiên hà', 'Hệ Mặt Trời', 'Ngân hà', 'Vũ trụ'], 1, 'Hệ Mặt Trời.'),
  ]),

  M(26, 'Unit 12 — Modal verbs: may / might', [
    Q('"May" trong câu "It may rain" diễn tả?', ['Sự cấm đoán', 'Mệnh lệnh', 'Sự chắc chắn', 'Khả năng có thể xảy ra'], 3, 'May = có thể (khả năng).'),
    Q('Sau "may/might" dùng?', ['V-ing (động từ thêm -ing)', 'to-V (nguyên thể có to)', 'V (bare)', 'V-ed (quá khứ phân từ)'], 2, 'May/Might + V nguyên thể.'),
    Q('"Might" so với "may" thì?', ['Khả năng cao hơn', 'Bắt buộc hơn', 'Khả năng thấp hơn (ít chắc chắn hơn)', 'Nghiêm túc hơn'], 2, 'Might = ít chắc chắn hơn may.'),
    Q('"May I open the window?" diễn tả?', ['Khả năng', 'Xin phép lịch sự', 'Lời khuyên', 'Tương lai'], 1, 'Xin phép lịch sự.'),
    Q('"There ___ be life on Mars."', ['should', 'might', 'will (chắc chắn sẽ)', 'must (chắc chắn phải)'], 1, 'Có thể có sự sống — khả năng không chắc chắn.'),
    Q('Phủ định may/might?', ['mayn\'ts', 'may not / might not', 'doesn\'t might', 'don\'t may'], 1, 'May not / might not.'),
  ]),

  M(27, 'Unit 7–12 — Vocabulary review', [
    Q('"Pollution" thuộc topic?', ['Sports', 'Travel', 'Festivals', 'Environment'], 3, 'Môi trường.'),
    Q('"Lunar New Year" thuộc topic?', ['Pollution', 'Technology', 'Disasters', 'Festivals/Customs'], 3, 'Lễ hội/phong tục.'),
    Q('"Earthquake" thuộc topic?', ['School subjects (môn học)', 'Communication', 'Natural disasters', 'Free-time activities (hoạt động giải trí)'], 2, 'Thảm hoạ thiên nhiên.'),
    Q('"Smartphone" thuộc topic?', ['Festivals', 'Folk tales', 'Pollution', 'Science and Technology'], 3, 'Khoa học công nghệ.'),
    Q('"Mars" thuộc topic?', ['Customs', 'Communication', 'Folk tales', 'Life on other planets'], 3, 'Hành tinh — vũ trụ.'),
    Q('"Body language" thuộc topic?', ['Pollution', 'Festivals', 'Disasters', 'Communication'], 3, 'Giao tiếp.'),
  ]),

  M(28, 'Grammar — Comparatives review (intermediate)', [
    Q('Form so sánh hơn của adjective ngắn?', ['more + adj', 'adj + est', 'most + adj', 'adj + er'], 3, 'Ngắn: + er.'),
    Q('Form so sánh hơn của adjective dài?', ['more + adj', 'most + adj', 'adj + est', 'adj + er'], 0, 'Dài: more + adj.'),
    Q('Comparative của "good"?', ['best (so sánh nhất)', 'more good', 'better', 'gooder'], 2, 'Bất quy tắc: better.'),
    Q('"She is ___ than her sister."', ['taller', 'tallest', 'more tall', 'tall (nguyên dạng, không so sánh)'], 0, 'Comparative.'),
    Q('Equal comparison: "He is ___ tall ___ his brother."', ['so / as', 'as / as', 'as / than', 'more / than'], 1, 'As … as.'),
    Q('"This book is ___ interesting than that one."', ['as (dùng cho as ... as)', 'so (vì vậy - kết quả)', 'most (so sánh nhất)', 'more'], 3, 'Adj dài → more.'),
  ]),

  M(29, 'Grammar — Passive voice (simple tenses)', [
    Q('Cấu trúc bị động hiện tại đơn?', ['am/is/are + V3', 'was/were + V3', 'am/is/are + V-ing', 'has/have + V3'], 0, 'Be + past participle.'),
    Q('"Vietnamese ___ in Vietnam."', ['speaks', 'speaking', 'spoke (quá khứ đơn V2)', 'is spoken'], 3, 'Hiện tại bị động.'),
    Q('"The cake ___ by my mom."', ['be made', 'made (quá khứ đơn V2)', 'is made', 'making'], 2, 'Is + made.'),
    Q('Active "They built this house in 1990." → Passive: "This house ___ in 1990."', ['built (chủ động quá khứ)', 'was building', 'is built', 'was built'], 3, 'Quá khứ bị động.'),
    Q('Tác nhân trong bị động đặt sau?', ['by', 'in (giới từ chỉ trong)', 'for (giới từ chỉ cho)', 'with (giới từ chỉ công cụ)'], 0, 'By + agent.'),
    Q('"Letters ___ every day."', ['delivering', 'delivered', 'is delivered', 'are delivered'], 3, 'Letters (số nhiều) + are + V3.'),
  ]),

  M(30, 'Reading & Vocabulary — Festivals', [
    Q('"Take place" nghĩa?', ['Diễn ra', 'Đặt chỗ', 'Mang đi', 'Lấy chỗ'], 0, 'Take place = diễn ra.'),
    Q('"Be held" nghĩa?', ['Bị nắm', 'Bị bắt', 'Được giữ', 'Được tổ chức'], 3, 'Be held = được tổ chức.'),
    Q('"Worship" trong "ancestor worship"?', ['Du lịch tổ tiên', 'Thờ cúng tổ tiên', 'Đọc thơ', 'Ghi nhớ'], 1, 'Thờ cúng tổ tiên.'),
    Q('"Costume" số nhiều?', ['costumies', 'costume', 'costumes', 'costums'], 2, 'Costumes.'),
    Q('"Traditional dance" là?', ['Múa balê', 'Nhảy hiện đại', 'Nhảy hip hop', 'Múa truyền thống'], 3, 'Múa truyền thống.'),
    Q('"Lantern" liên quan đến lễ hội?', ['Mid-Autumn', 'Easter', 'Hung Kings (Giỗ Tổ Hùng Vương)', 'Christmas'], 0, 'Đèn lồng — Trung Thu.'),
  ]),

  M(31, 'Speaking — Giving opinions', [
    Q('Cách nêu ý kiến: "In my ___, …"', ['mind (tâm trí)', 'opinion', 'thought', 'view (quan điểm, sai cụm)'], 1, 'In my opinion.'),
    Q('"I think ___" sau đó dùng?', ['Chỉ một từ', 'Một danh từ riêng', 'Một mệnh đề', 'Một dấu chấm'], 2, 'I think + that-clause.'),
    Q('"I agree with you" nghĩa?', ['Tôi không biết', 'Tôi đồng ý với bạn', 'Tôi suy nghĩ', 'Tôi không đồng ý'], 1, 'Agree = đồng ý.'),
    Q('"I don\'t think so" thể hiện?', ['Không đồng ý nhẹ nhàng', 'Đồng ý mạnh', 'Tránh né', 'Im lặng'], 0, 'Không đồng ý nhẹ.'),
    Q('Để xin ý kiến: "What do you ___?"', ['say (nói - sai cụm)', 'think', 'see (nhìn - sai cụm)', 'feel (cảm thấy - sai cụm)'], 1, 'What do you think?'),
    Q('"You\'re right" nghĩa?', ['Bạn đúng', 'Bạn sai', 'Bạn ở đúng vị trí', 'Bạn nên đi'], 0, 'Bạn nói đúng.'),
  ]),

  M(32, 'Writing — Email & Paragraph', [
    Q('Cách mở đầu email thân mật?', ['Dear Sir/Madam,', 'Yours faithfully,', 'Hi/Hello + name,', 'To whom it may concern,'], 2, 'Email thân mật: Hi/Hello.'),
    Q('Cách kết email thân mật?', ['Best regards / Love', 'Sincerely yours', 'Kind regards (trang trọng)', 'Yours faithfully'], 0, 'Best regards/Love thân mật.'),
    Q('Cấu trúc một đoạn văn?', ['Câu chủ đề + câu phát triển + câu kết', 'Chỉ một câu', 'Chỉ liệt kê', 'Chỉ câu hỏi'], 0, 'Topic – supporting – concluding.'),
    Q('Từ nối thể hiện đối lập?', ['For example', 'Therefore (do đó - kết quả)', 'However / But', 'Because'], 2, 'However = tuy nhiên.'),
    Q('Từ nối nguyên nhân – kết quả?', ['Although', 'Moreover (hơn nữa - bổ sung)', 'Because / So', 'However'], 2, 'Because/so.'),
    Q('Khi viết email công việc, ngôn ngữ?', ['Đầy biểu tượng cảm xúc', 'Trang trọng (formal)', 'Ngắn cộc', 'Tuỳ tiện'], 1, 'Formal cho email công việc.'),
  ]),

  M(33, 'Listening — Numbers, dates, prices', [
    Q('"Twenty-first" là số thứ tự của?', ['21', '12', '20', '22'], 0, 'Twenty-first = thứ 21.'),
    Q('Ngày 1/5 đọc là?', ['May one', 'May 1st / The first of May', 'May once', 'May the first one'], 1, 'May 1st hoặc The first of May.'),
    Q('"$15.99" đọc là?', ['Fifteen dollars and ninety-nine cents', 'Cả A và B đều đúng', 'Fifteen ninety-nine', 'Fifteen point nine nine dollars'], 1, 'Cả hai cách đều dùng.'),
    Q('Năm "2025" đọc là?', ['Two thousand and twenty-five', 'Twenty twenty-five', 'Two-zero-two-five', 'Cả hai đều đúng'], 3, 'Cả hai cách đều phổ biến.'),
    Q('"Half past seven" là mấy giờ?', ['7:00', '6:30', '7:30', '8:30'], 2, 'Bảy giờ rưỡi.'),
    Q('"A quarter to nine" là?', ['8:45', '9:45', '8:15', '9:15'], 0, 'Kém 15 phút đến 9 → 8:45.'),
  ]),

  M(34, 'Grammar review — Tenses', [
    Q('"I ___ to school every day."', ['goes (số ít hiện tại đơn)', 'went (quá khứ đơn)', 'going (V-ing, thiếu to be)', 'go'], 3, 'Hiện tại đơn — thói quen.'),
    Q('"She ___ her homework now."', ['is doing', 'does (hiện tại đơn)', 'did (quá khứ đơn)', 'done (V3, thiếu trợ động từ)'], 0, 'Now → hiện tại tiếp diễn.'),
    Q('"They ___ Hanoi last week."', ['have visited', 'visited', 'visit (hiện tại đơn)', 'are visiting'], 1, 'Quá khứ đơn.'),
    Q('"I have ___ this book three times."', ['reading', 'readed', 'read', 'reads (hiện tại đơn số ít)'], 2, 'Have + V3/ed; read là dạng V3 bất quy tắc.'),
    Q('"Tomorrow he ___ to Paris."', ['flew (quá khứ đơn)', 'will fly', 'flying', 'flies (hiện tại đơn số ít)'], 1, 'Tương lai đơn.'),
    Q('"While she ___ TV, he came in."', ['watched', 'watches', 'is watching', 'was watching'], 3, 'Past continuous.'),
  ]),

  M(35, 'Review HK2 — Final', [
    Q('Future continuous: "S + will + ___ + V-ing"', ['be', 'is (to be hiện tại)', 'have (động từ have)', 'been (V3 của be)'], 0, 'Will + be + V-ing.'),
    Q('Passive present simple: "Books ___ in the library."', ['is read', 'are read', 'reading', 'read (nguyên dạng, thiếu to be)'], 1, 'Be + V3.'),
    Q('Reported: He said "I am tired." → He said he ___ tired.', ['has been', 'am (to be hiện tại - không lùi thì)', 'was', 'were (số nhiều, sai chủ ngữ)'], 2, 'Lùi thì: am → was.'),
    Q('"It may rain tomorrow." — "may" thể hiện?', ['Lời khuyên', 'Bắt buộc', 'Khả năng có thể xảy ra', 'Tương lai chắc chắn'], 2, 'Khả năng.'),
    Q('Comparative of "interesting"?', ['interestinger', 'more interesting', 'most interesting', 'interestingest'], 1, 'Adj dài → more.'),
    Q('Topic "Communication" tập trung vào?', ['Hành tinh khác', 'Phương tiện và cách giao tiếp', 'Ô nhiễm', 'Lễ hội'], 1, 'Communication = giao tiếp.'),
  ]),
];

export const S8TA_SCENARIOS = indexBy(S8TA_WEEKS);
