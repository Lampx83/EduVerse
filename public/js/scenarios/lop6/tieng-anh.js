// ============================================================
// Lớp 6 · TIẾNG ANH — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám GDPT 2018, tham chiếu Global Success / Friends Plus / i-Learn Smart World.
// Trình độ CEFR A1–A2. Stem tiếng Việt, nội dung tiếng Anh.
// ID prefix: "S6TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6TA', 'tieng-anh', n, title, qs, opts);

export const S6TA_WEEKS = [
  // ──────────────── HK1 ────────────────

  M(1, 'My new school (1): School subjects & vocabulary', [
    Q('"Maths" trong tiếng Anh có nghĩa là?', ['Lịch sử', 'Toán', 'Mỹ thuật', 'Âm nhạc'], 1, 'Maths (BrE) / Math (AmE) = môn Toán.'),
    Q('Môn "History" là môn gì?', ['Địa lý', 'Vật lý', 'Lịch sử', 'Hoá học'], 2, 'History = Lịch sử.'),
    Q('Chọn từ đúng: "I study English, Maths and ___ at school."', ['Science', 'sciences', 'a science', 'the Sciences'], 0, 'Tên môn học không có mạo từ, không số nhiều; ở đây Science = môn Khoa học.'),
    Q('"Physical Education" thường viết tắt là?', ['PE', 'PA', 'PT', 'ED'], 0, 'Physical Education = PE (Thể dục).'),
    Q('Chọn cụm đúng: "My favourite ___ is Art."', ['subject', 'subjects', 'subjecting', 'a subject'], 0, '"Favourite + danh từ số ít": favourite subject = môn yêu thích.'),
    Q('"I have Music ___ Monday morning." — Điền giới từ:', ['in', 'at', 'on', 'of'], 2, 'Thứ trong tuần đi với "on": on Monday morning.'),
  ]),

  M(2, 'My new school (2): School things & places', [
    Q('"Schoolbag" có nghĩa là?', ['Bàn học', 'Cặp sách', 'Bảng đen', 'Bút chì'], 1, 'Schoolbag = cái cặp đi học.'),
    Q('"Library" là nơi nào trong trường?', ['Phòng thí nghiệm', 'Thư viện', 'Căng-tin', 'Sân trường'], 1, 'Library = thư viện.'),
    Q('Chọn từ điền: "We do experiments in the ___."', ['library', 'gym', 'lab', 'canteen'], 2, 'Experiment = thí nghiệm → lab (laboratory).'),
    Q('"Pencil case" là vật gì?', ['Bút mực', 'Hộp bút', 'Tẩy', 'Thước'], 1, 'Pencil case = hộp đựng bút.'),
    Q('"Where do students eat lunch?" — Câu trả lời phù hợp:', ['In the library', 'In the canteen', 'In the lab', 'At the gate'], 1, 'Canteen = căng-tin, nơi ăn trưa.'),
    Q('Cụm nào đúng? "I have a new ___ for Maths class."', ['rulers', 'a ruler', 'ruler', 'rules'], 2, 'Sau "a new" + danh từ đếm được số ít không thêm mạo từ nữa: a new ruler.'),
  ]),

  M(3, 'Present simple: Positive & Negative', [
    Q('Chọn dạng đúng: "She ___ English every day."', ['study', 'studies', 'studys', 'studying'], 1, 'Ngôi 3 số ít: study → studies (y → ies).'),
    Q('Điền: "I ___ go to school on Sunday."', ["don't", "doesn't", 'not', 'am not'], 0, 'Phủ định ngôi I/you/we/they: don\'t + V.'),
    Q('Câu nào ĐÚNG ngữ pháp?', ['He don\'t like Maths.', 'He doesn\'t likes Maths.', 'He doesn\'t like Maths.', 'He not like Maths.'], 2, 'Ngôi 3 số ít phủ định: doesn\'t + V nguyên thể.'),
    Q('Chia động từ: "My brother ___ (watch) TV after dinner."', ['watch', 'watches', 'watchs', 'watching'], 1, 'Động từ tận cùng -ch thêm -es: watches.'),
    Q('Hiện tại đơn diễn tả:', ['Việc đang xảy ra ngay lúc nói', 'Việc đã hoàn thành trong quá khứ', 'Thói quen / sự thật hiển nhiên', 'Dự đoán tương lai'], 2, 'Present simple dùng cho thói quen, sự thật chung, lịch trình.'),
    Q('Trạng từ nào thường đi với hiện tại đơn?', ['now', 'at the moment', 'usually', 'tomorrow'], 2, '"Usually / often / always / every day" báo hiệu hiện tại đơn.'),
  ]),

  M(4, 'Present simple: Questions (Yes/No & Wh-)', [
    Q('Câu hỏi Yes/No: "___ you like Music?"', ['Are', 'Do', 'Does', 'Is'], 1, 'Chủ ngữ "you" dùng "Do + S + V?".'),
    Q('Hoàn thành: "___ she play badminton?"', ['Do', 'Does', 'Is', 'Are'], 1, 'Ngôi 3 số ít: Does + S + V (nguyên thể)?'),
    Q('Trả lời ngắn câu "Does he go to school by bus?" (có)', ['Yes, he do.', 'Yes, he does.', 'Yes, he is.', 'Yes, he goes.'], 1, 'Trả lời ngắn dùng trợ động từ: Yes, he does.'),
    Q('Câu hỏi nào dùng để hỏi nơi chốn?', ['What', 'When', 'Where', 'Why'], 2, 'Where = ở đâu (hỏi nơi chốn).'),
    Q('Sửa câu: "Where she lives?"', ['Where she lives?', 'Where does she lives?', 'Where does she live?', 'Where do she live?'], 2, 'Wh- + does + S + V (nguyên thể): Where does she live?'),
    Q('"What time ___ school start?" — Điền từ:', ['do', 'does', 'is', 'are'], 1, 'Chủ ngữ "school" (số ít) → does.'),
  ]),

  M(5, 'My home (1): Rooms & furniture', [
    Q('"Bedroom" là phòng gì?', ['Nhà bếp', 'Phòng khách', 'Phòng ngủ', 'Phòng tắm'], 2, 'Bedroom = phòng ngủ.'),
    Q('"Living room" là?', ['Phòng ăn', 'Phòng khách', 'Phòng ngủ', 'Nhà tắm'], 1, 'Living room = phòng khách.'),
    Q('"Wardrobe" là đồ nội thất gì?', ['Tủ quần áo', 'Giường', 'Bàn', 'Ghế sô-pha'], 0, 'Wardrobe = tủ đựng quần áo.'),
    Q('"We cook in the ___."', ['bathroom', 'bedroom', 'kitchen', 'garden'], 2, 'Cook (nấu ăn) → kitchen (nhà bếp).'),
    Q('Chọn từ đúng: "There is a ___ in the living room."', ['sofa', 'sofas', 'a sofa', 'the sofas'], 0, '"There is a + N số ít" → sofa.'),
    Q('Phòng nào để tắm?', ['Kitchen', 'Bathroom', 'Bedroom', 'Hall'], 1, 'Bathroom = phòng tắm.'),
  ]),

  M(6, 'My home (2): Prepositions of place', [
    Q('"The cat is ___ the table." (con mèo Ở TRÊN bàn)', ['on', 'in', 'under', 'next to'], 0, 'On = trên bề mặt.'),
    Q('"The ball is ___ the box." (trong hộp)', ['on', 'in', 'under', 'behind'], 1, 'In = bên trong.'),
    Q('"The dog is ___ the chair." (dưới ghế)', ['on', 'in', 'under', 'next to'], 2, 'Under = bên dưới.'),
    Q('"My bag is ___ the desk." (cạnh bàn học)', ['between', 'next to', 'behind', 'in front of'], 1, 'Next to = ngay cạnh.'),
    Q('"The picture is ___ the wall." — Chọn giới từ:', ['in', 'at', 'on', 'under'], 2, 'Tranh treo trên tường dùng "on the wall".'),
    Q('"The car is ___ the two trees." (giữa hai cái cây)', ['between', 'next to', 'in', 'on'], 0, 'Between A and B = ở giữa hai vật.'),
  ]),

  M(7, 'There is / There are', [
    Q('Điền: "There ___ a lamp on the desk."', ['is', 'are', 'have', 'has'], 0, 'Danh từ số ít → there IS.'),
    Q('Điền: "There ___ four chairs in the room."', ['is', 'are', 'have', 'be'], 1, 'Danh từ số nhiều → there ARE.'),
    Q('Phủ định: "There ___ any milk in the glass."', ['isn\'t', 'aren\'t', 'don\'t', 'doesn\'t'], 0, 'Milk (không đếm được) → isn\'t + any.'),
    Q('Câu hỏi: "___ there a TV in your bedroom?"', ['Is', 'Are', 'Do', 'Have'], 0, 'Chủ ngữ "a TV" số ít → Is there...?'),
    Q('Trả lời ngắn (có): "Are there any books on the shelf?"', ['Yes, there is.', 'Yes, there are.', 'Yes, they are.', 'Yes, it is.'], 1, 'Câu hỏi "Are there..." → "Yes, there are."'),
    Q('Câu nào ĐÚNG?', ['There are a clock.', 'There is two beds.', 'There are some flowers.', 'There is many chairs.'], 2, 'Some flowers (số nhiều) → there are.'),
  ]),

  M(8, 'My friends (1): Appearance', [
    Q('"Tall" có nghĩa là?', ['Cao', 'Thấp', 'Gầy', 'Béo'], 0, 'Tall = cao.'),
    Q('"Short hair" nghĩa là?', ['Tóc dài', 'Tóc ngắn', 'Tóc xoăn', 'Tóc thẳng'], 1, 'Short = ngắn.'),
    Q('"He has ___ eyes." (mắt nâu)', ['brown', 'a brown', 'browns', 'the browns'], 0, 'Tính từ chỉ màu đứng trước danh từ, không số nhiều: brown eyes.'),
    Q('"Curly" mô tả kiểu tóc?', ['Thẳng', 'Xoăn', 'Hoe vàng', 'Bạc'], 1, 'Curly hair = tóc xoăn.'),
    Q('Câu nào ĐÚNG ngữ pháp?', ['She has a long hair.', 'She has long hair.', 'She have long hair.', 'She has long hairs.'], 1, 'Hair là danh từ không đếm được → "has long hair".'),
    Q('"Slim" gần nghĩa với?', ['Fat', 'Thin', 'Short', 'Tall'], 1, 'Slim ≈ thin = mảnh dẻ, gầy.'),
  ]),

  M(9, 'My friends (2): Personality adjectives', [
    Q('"Friendly" nghĩa là?', ['Thân thiện', 'Lười biếng', 'Tức giận', 'Buồn'], 0, 'Friendly = thân thiện.'),
    Q('"Hard-working" mô tả người?', ['Lười', 'Chăm chỉ', 'Nhút nhát', 'Vui tính'], 1, 'Hard-working = chăm chỉ.'),
    Q('"Shy" nghĩa là?', ['Nhút nhát', 'Vui tính', 'Ồn ào', 'Kiêu ngạo'], 0, 'Shy = nhút nhát, rụt rè.'),
    Q('Trái nghĩa của "kind" (tốt bụng):', ['nice', 'unkind', 'lovely', 'friendly'], 1, 'Tiền tố un- tạo phản nghĩa: unkind.'),
    Q('Chọn câu ĐÚNG: "Lan is a ___ girl."', ['friend', 'friendly', 'friendship', 'friends'], 1, 'Tính từ đứng trước danh từ: friendly girl.'),
    Q('"Confident" có nghĩa là?', ['Tự tin', 'Bối rối', 'Sợ hãi', 'Buồn ngủ'], 0, 'Confident = tự tin.'),
  ]),

  M(10, 'Present continuous', [
    Q('Cấu trúc thì hiện tại tiếp diễn:', ['S + V(s/es)', 'S + am/is/are + V-ing', 'S + will + V', 'S + V2/ed'], 1, 'Present continuous: am/is/are + V-ing.'),
    Q('Chia động từ: "Look! The baby ___ (sleep)."', ['sleeps', 'is sleeping', 'sleep', 'sleeping'], 1, '"Look!" báo hiệu sự việc đang xảy ra → is sleeping.'),
    Q('Điền: "They ___ football at the moment."', ['play', 'plays', 'are playing', 'is playing'], 2, 'They + are + V-ing.'),
    Q('Dạng V-ing của "run":', ['runing', 'running', 'runned', 'runs'], 1, 'Phụ âm cuối sau nguyên âm ngắn → gấp đôi: running.'),
    Q('Câu nào KHÔNG dùng hiện tại tiếp diễn?', ['I am reading now.', 'She is cooking at the moment.', 'They go to school every day.', 'We are studying English.'], 2, '"Every day" là dấu hiệu hiện tại đơn.'),
    Q('Câu hỏi: "What ___ you ___ now?"', ['do / do', 'are / doing', 'is / doing', 'do / doing'], 1, '"Now" → hiện tại tiếp diễn: are you doing.'),
  ]),

  M(11, 'My neighbourhood (1): Places in town', [
    Q('"Post office" là?', ['Ngân hàng', 'Bưu điện', 'Trường học', 'Bệnh viện'], 1, 'Post office = bưu điện.'),
    Q('"Hospital" là nơi?', ['Học tập', 'Chữa bệnh', 'Mua đồ', 'Cầu nguyện'], 1, 'Hospital = bệnh viện.'),
    Q('"Where do you buy bread and cakes?"', ['At the bank', 'At the bakery', 'At the museum', 'At the park'], 1, 'Bakery = tiệm bánh.'),
    Q('"Museum" là nơi?', ['Bảo tàng', 'Rạp chiếu phim', 'Siêu thị', 'Công viên'], 0, 'Museum = bảo tàng.'),
    Q('Điền: "I withdraw money at the ___."', ['library', 'bank', 'school', 'park'], 1, 'Withdraw money = rút tiền → bank.'),
    Q('"Pharmacy" / "Drugstore" là?', ['Hiệu sách', 'Hiệu thuốc', 'Hiệu may', 'Hiệu cắt tóc'], 1, 'Pharmacy = hiệu thuốc.'),
  ]),

  M(12, 'My neighbourhood (2): Asking directions', [
    Q('Cách hỏi đường lịch sự nhất:', ['Where the bank?', 'Excuse me, where is the bank?', 'Bank where is?', 'You know bank?'], 1, 'Mở đầu bằng "Excuse me, where is + N?".'),
    Q('"Go ___ this street." (đi thẳng)', ['straight', 'right', 'left', 'across'], 0, 'Go straight = đi thẳng.'),
    Q('"Turn ___ at the corner." (rẽ phải)', ['left', 'right', 'back', 'up'], 1, 'Turn right = rẽ phải.'),
    Q('"It\'s ___ the bank and the school." (giữa)', ['next to', 'opposite', 'between', 'behind'], 2, 'Between A and B = ở giữa hai địa điểm.'),
    Q('"Opposite the park" nghĩa là?', ['Cạnh công viên', 'Đối diện công viên', 'Sau công viên', 'Trong công viên'], 1, 'Opposite = đối diện.'),
    Q('"How far is it?" hỏi về?', ['Thời gian', 'Khoảng cách', 'Phương tiện', 'Tên đường'], 1, 'How far = bao xa (khoảng cách).'),
  ]),

  M(13, 'Comparative adjectives', [
    Q('Quy tắc: tính từ ngắn (1 âm tiết) thêm:', ['-er + than', 'more + than', '-est + than', 'most + than'], 0, 'Short adj + -er + than (e.g. taller than).'),
    Q('So sánh hơn của "big":', ['biger than', 'bigger than', 'more big than', 'biggest than'], 1, 'Phụ âm cuối + nguyên âm ngắn → gấp đôi: bigger.'),
    Q('So sánh hơn của "beautiful":', ['beautifuller', 'more beautiful', 'beautifullest', 'beautifuler than'], 1, 'Tính từ dài (≥3 âm tiết) → more + adj.'),
    Q('Điền: "My house is ___ than yours."', ['big', 'biger', 'bigger', 'more big'], 2, 'Bigger than = lớn hơn.'),
    Q('So sánh BẤT QUY TẮC: "good" →', ['gooder', 'more good', 'better', 'best'], 2, 'Good → better (so sánh hơn) / best (nhất).'),
    Q('Câu nào ĐÚNG?', ['She is taller than me.', 'She is more tall than me.', 'She is tallest than me.', 'She is tall than me.'], 0, 'Tall (1 âm tiết) → taller + than.'),
  ]),

  M(14, 'Superlative adjectives', [
    Q('Cấu trúc so sánh nhất với tính từ ngắn:', ['the + adj + -er', 'the + most + adj', 'the + adj + -est', 'the + adj + than'], 2, 'The + adj-est: the tallest, the smallest.'),
    Q('So sánh nhất của "happy":', ['the happier', 'the happiest', 'the most happy', 'the happyest'], 1, 'Y → I + est: happiest.'),
    Q('So sánh nhất của "expensive":', ['the expensivest', 'the most expensive', 'the more expensive', 'expensiver'], 1, 'Tính từ dài → the most + adj.'),
    Q('BẤT QUY TẮC: "bad" → so sánh nhất:', ['the baddest', 'the worse', 'the worst', 'the most bad'], 2, 'Bad → worse → the worst.'),
    Q('Điền: "Mount Everest is ___ mountain in the world."', ['high', 'higher', 'the highest', 'the most high'], 2, 'So sánh nhất "cao nhất" → the highest.'),
    Q('Câu nào ĐÚNG?', ['He is the most clever in the class.', 'He is the cleverest in the class.', 'He is the more clever in the class.', 'He is cleverest in the class.'], 1, 'Clever (2 âm tiết) chấp nhận -est: the cleverest.'),
  ]),

  M(15, 'Natural wonders (1): Vocabulary & geography', [
    Q('"Mountain" có nghĩa là?', ['Sông', 'Núi', 'Hồ', 'Biển'], 1, 'Mountain = núi.'),
    Q('"Desert" là?', ['Đảo', 'Sa mạc', 'Rừng', 'Thác nước'], 1, 'Desert = sa mạc.'),
    Q('"Waterfall" nghĩa là?', ['Suối', 'Thác nước', 'Hang động', 'Bãi biển'], 1, 'Waterfall = thác nước.'),
    Q('"The Amazon" là một con ___?', ['mountain', 'river', 'desert', 'island'], 1, 'The Amazon = sông Amazon.'),
    Q('"Cave" là?', ['Hang động', 'Vịnh', 'Đảo', 'Đồi'], 0, 'Cave = hang động.'),
    Q('Cụm nào dùng mạo từ ĐÚNG?', ['Sahara is biggest desert.', 'The Sahara is the biggest desert.', 'A Sahara is the biggest desert.', 'Sahara is the bigger desert.'], 1, 'Tên các sa mạc/dãy núi/đại dương dùng "the".'),
  ]),

  M(16, 'Natural wonders (2): Countable & uncountable nouns', [
    Q('Danh từ nào KHÔNG đếm được?', ['apple', 'book', 'water', 'student'], 2, 'Water (nước) là danh từ không đếm được.'),
    Q('Điền: "How ___ rice do you eat?"', ['many', 'much', 'a lot', 'some'], 1, 'Rice không đếm được → much.'),
    Q('Điền: "How ___ apples are there?"', ['many', 'much', 'any', 'a'], 0, 'Apples đếm được số nhiều → many.'),
    Q('Câu nào ĐÚNG?', ['I need a bread.', 'I need some bread.', 'I need many breads.', 'I need a breads.'], 1, 'Bread không đếm được → some bread.'),
    Q('"A bottle of water" — "water" được tính qua đơn vị nào?', ['số nhiều', 'a bottle', 'many', 'few'], 1, 'Với uncountable, dùng đơn vị: a bottle of, a glass of, a piece of.'),
    Q('Đếm "money": chọn câu ĐÚNG.', ['How many money?', 'How much money?', 'How many moneys?', 'A money please.'], 1, 'Money là uncountable → How much money?'),
  ]),

  M(17, 'Modal verbs: must / mustn\'t / should', [
    Q('"Must" diễn tả?', ['Sự cho phép', 'Bắt buộc / nghĩa vụ', 'Khả năng', 'Dự đoán xa'], 1, 'Must = phải, bắt buộc.'),
    Q('"You ___ smoke here." (cấm hút thuốc)', ['must', 'mustn\'t', 'should', 'can'], 1, 'Mustn\'t = cấm, không được.'),
    Q('Sau modal verbs (must, should, can) dùng động từ ở dạng?', ['V-ing', 'V nguyên thể (không to)', 'to + V', 'V-ed'], 1, 'Modal + V (bare infinitive): must do, should go.'),
    Q('"You ___ drink more water." (lời khuyên)', ['must', 'mustn\'t', 'should', 'shouldn\'t'], 2, 'Should = nên (lời khuyên).'),
    Q('Câu nào ĐÚNG?', ['He musts study.', 'He must to study.', 'He must study.', 'He must studies.'], 2, 'Must + V nguyên thể, không -s, không "to".'),
    Q('Khác biệt "must" vs "should":', ['Giống hệt nhau', 'Must = bắt buộc; Should = lời khuyên', 'Should = bắt buộc; Must = lời khuyên', 'Cả hai đều cấm'], 1, 'Must mạnh hơn, có nghĩa bắt buộc; should chỉ lời khuyên nhẹ.'),
  ]),

  M(18, 'Review HK1', [
    Q('Chia: "She usually ___ (go) to school by bus."', ['go', 'goes', 'going', 'went'], 1, 'Usually → hiện tại đơn; she → goes.'),
    Q('"Look! It ___ (rain)."', ['rains', 'is raining', 'rain', 'rained'], 1, '"Look!" → hiện tại tiếp diễn: is raining.'),
    Q('"There ___ a lot of books on the shelf."', ['is', 'are', 'be', 'has'], 1, 'A lot of books (số nhiều) → there are.'),
    Q('So sánh hơn: "Lan is ___ (clever) than Mai."', ['cleverer', 'more clever', 'cleverest', 'most clever'], 0, 'Clever (2 âm tiết) ưu tiên -er: cleverer.'),
    Q('So sánh nhất: "Mount Fansipan is ___ mountain in Vietnam."', ['higher', 'the higher', 'the highest', 'the most high'], 2, 'Cao nhất → the highest.'),
    Q('"You ___ run in the library." (cấm)', ['must', 'mustn\'t', 'should', 'can'], 1, 'Mustn\'t = không được, cấm.'),
    Q('"How ___ water do we need?"', ['many', 'much', 'a', 'few'], 1, 'Water (uncountable) → how much.'),
    Q('"I have History ___ Tuesdays."', ['in', 'on', 'at', 'of'], 1, 'On + thứ trong tuần.'),
  ]),

  // ──────────────── HK2 ────────────────

  M(19, 'Our greener world (1): Environment vocabulary', [
    Q('"Environment" có nghĩa là?', ['Trường học', 'Môi trường', 'Gia đình', 'Thành phố'], 1, 'Environment = môi trường.'),
    Q('"Pollution" nghĩa là?', ['Ô nhiễm', 'Tái chế', 'Tiết kiệm', 'Trồng cây'], 0, 'Pollution = sự ô nhiễm.'),
    Q('"Recycle" có nghĩa là?', ['Vứt rác', 'Tái chế', 'Đốt rác', 'Chôn rác'], 1, 'Recycle = tái chế (sử dụng lại nguyên liệu).'),
    Q('Cụm "reduce, reuse, recycle" là?', ['3R bảo vệ môi trường', 'Tên một công ty', 'Tên một dòng sông', 'Một bài hát'], 0, '3R = giảm thiểu – tái sử dụng – tái chế.'),
    Q('"Plastic bag" là?', ['Túi vải', 'Túi nilon', 'Túi giấy', 'Túi da'], 1, 'Plastic = nhựa → túi nilon.'),
    Q('Chọn câu phù hợp: "We should plant more ___."', ['tree', 'trees', 'a tree', 'the tree'], 1, 'More + danh từ đếm được số nhiều: more trees.'),
  ]),

  M(20, 'Our greener world (2): "Will / Won\'t" for future', [
    Q('Cấu trúc tương lai đơn:', ['S + will + V (nguyên thể)', 'S + will + V-ing', 'S + am/is/are + V-ing', 'S + V-ed'], 0, 'Will + V nguyên thể.'),
    Q('Viết tắt phủ định "will not":', ['willn\'t', 'won\'t', 'wo\'nt', 'will\'nt'], 1, 'Will not = won\'t.'),
    Q('Điền: "I think people ___ use more solar energy."', ['will', 'won\'t', 'are', 'do'], 0, 'Dự đoán tương lai dùng will + V.'),
    Q('"It ___ rain tomorrow." (sẽ không)', ['will', 'will not', 'don\'t', 'doesn\'t'], 1, 'Will not / won\'t + V.'),
    Q('Trạng từ nào hợp với will?', ['yesterday', 'now', 'tomorrow', 'last week'], 2, 'Tomorrow / next week / in 2030 → tương lai.'),
    Q('Câu hỏi: "___ you help me?"', ['Do', 'Are', 'Will', 'Have'], 2, 'Will + S + V? = câu hỏi tương lai / yêu cầu.'),
  ]),

  M(21, 'First conditional (If + present, will + V)', [
    Q('Cấu trúc câu điều kiện loại 1:', ['If + V-ed, S + will + V', 'If + present simple, S + will + V', 'If + will + V, S + V', 'If + V-ing, S + V'], 1, 'If + hiện tại đơn, S + will + V.'),
    Q('Điền: "If it ___ tomorrow, we will stay at home."', ['rains', 'will rain', 'rained', 'is raining'], 0, 'Mệnh đề if dùng hiện tại đơn → rains.'),
    Q('Điền: "If we recycle, we ___ the environment."', ['save', 'saved', 'will save', 'are saving'], 2, 'Mệnh đề chính: will + V → will save.'),
    Q('Câu điều kiện loại 1 dùng để?', ['Nói về quá khứ', 'Nói về điều có thật / có thể xảy ra ở tương lai', 'Nói về giả định trái thực tế', 'Kể chuyện'], 1, 'Loại 1 = tình huống có thể xảy ra ở tương lai.'),
    Q('Câu nào ĐÚNG?', ['If you will study, you will pass.', 'If you study, you will pass.', 'If you studied, you pass.', 'If you study, you pass.'], 1, 'If + present, will + V.'),
    Q('"If she ___ early, she ___ catch the bus." (be / can)', ['is / will', 'will be / will', 'is / will not', 'was / can'], 0, 'If she IS early, she WILL catch the bus.'),
  ]),

  M(22, 'My future house (1): Future predictions', [
    Q('"In the future" nghĩa là?', ['Trong quá khứ', 'Hiện tại', 'Trong tương lai', 'Ngay bây giờ'], 2, 'In the future = trong tương lai.'),
    Q('Điền: "Houses ___ have smart robots in 2050."', ['will', 'won\'t', 'are', 'do'], 0, 'Dự đoán tương lai → will.'),
    Q('"Solar energy" là?', ['Năng lượng gió', 'Năng lượng mặt trời', 'Năng lượng nước', 'Năng lượng hạt nhân'], 1, 'Solar = thuộc về mặt trời.'),
    Q('"Wireless" có nghĩa là?', ['Có dây', 'Không dây', 'Cũ kỹ', 'Nặng nề'], 1, 'Wireless = không dây.'),
    Q('"Smart TV" là TV?', ['Đen trắng', 'Thông minh (kết nối internet)', 'Hỏng', 'Cổ điển'], 1, 'Smart = thông minh.'),
    Q('Câu nào ĐÚNG về tương lai?', ['People will travels to Mars.', 'People will travel to Mars.', 'People wills travel to Mars.', 'People will travelling to Mars.'], 1, 'Will + V nguyên thể: will travel.'),
  ]),

  M(23, 'My future house (2): Appliances & rooms', [
    Q('"Fridge" / "Refrigerator" là?', ['Tủ lạnh', 'Lò vi sóng', 'Máy giặt', 'Máy sấy'], 0, 'Fridge = tủ lạnh.'),
    Q('"Washing machine" là?', ['Máy hút bụi', 'Máy giặt', 'Lò nướng', 'Bàn ủi'], 1, 'Washing machine = máy giặt.'),
    Q('"Air conditioner" là?', ['Máy lọc nước', 'Máy điều hoà', 'Máy sưởi', 'Quạt'], 1, 'Air conditioner (AC) = máy điều hoà.'),
    Q('Điền: "Future kitchens ___ have robot cooks."', ['will', 'won\'t', 'do', 'are'], 0, 'Dự đoán → will.'),
    Q('"Microwave" là?', ['Lò vi sóng', 'Tủ lạnh', 'Bếp ga', 'Máy nướng bánh mì'], 0, 'Microwave (oven) = lò vi sóng.'),
    Q('Câu hỏi: "What ___ houses look like in 2100?"', ['do', 'does', 'will', 'are'], 2, '"Sẽ trông như thế nào" → will look.'),
  ]),

  M(24, 'Possessive pronouns', [
    Q('"This book is ___." (của tôi)', ['my', 'mine', 'me', 'I'], 1, 'Possessive pronoun: mine = của tôi (đứng một mình).'),
    Q('Đại từ sở hữu của "you" là?', ['your', 'yours', 'you', 'yourself'], 1, 'You → your (adj) → yours (pronoun).'),
    Q('Khác biệt "my" và "mine":', ['Giống hệt nhau', 'My + N; Mine đứng một mình', 'My đứng một mình; Mine + N', 'Cả hai đều dùng được'], 1, 'My book / The book is mine.'),
    Q('"That car is ___." (của họ)', ['their', 'theirs', 'them', 'they'], 1, 'Their + N / theirs đứng riêng.'),
    Q('Điền: "These keys are ___, not ___." (của cô ấy, của tôi)', ['her / my', 'hers / mine', 'she / I', 'her / mine'], 1, 'Đứng cuối câu: hers, mine.'),
    Q('Đại từ sở hữu của "he":', ['his', 'him', 'he\'s', 'himself'], 0, 'His vừa là adj sở hữu vừa là pronoun sở hữu: his book / The book is his.'),
  ]),

  M(25, 'Television (1): TV programmes', [
    Q('"Cartoon" là loại chương trình gì?', ['Phim hoạt hình', 'Tin tức', 'Game show', 'Phim tài liệu'], 0, 'Cartoon = phim hoạt hình.'),
    Q('"News" là?', ['Phim truyện', 'Bản tin', 'Trò chơi', 'Quảng cáo'], 1, 'News = tin tức.'),
    Q('"Documentary" là?', ['Phim hài', 'Phim tài liệu', 'Phim kinh dị', 'Hoạt hình'], 1, 'Documentary = phim tài liệu.'),
    Q('"Game show" là?', ['Phim hoạt hình', 'Trò chơi truyền hình', 'Quảng cáo', 'Phim truyện'], 1, 'Game show = trò chơi truyền hình.'),
    Q('"Weather forecast" là?', ['Dự báo thời tiết', 'Quảng cáo', 'Bản tin thể thao', 'Phim'], 0, 'Weather forecast = dự báo thời tiết.'),
    Q('Chọn câu ĐÚNG: "My favourite ___ is Tom and Jerry."', ['cartoon', 'a cartoon', 'cartoons', 'the cartoons'], 0, 'Favourite + N số ít: favourite cartoon.'),
  ]),

  M(26, 'Television (2): Conjunctions (and, but, so, because)', [
    Q('"And" có nghĩa là?', ['Nhưng', 'Và', 'Vì', 'Nên'], 1, 'And = và (thêm thông tin cùng chiều).'),
    Q('"But" có nghĩa là?', ['Và', 'Nhưng', 'Vì', 'Nên'], 1, 'But = nhưng (tương phản).'),
    Q('Điền: "I like Music ___ I don\'t like Maths."', ['and', 'but', 'so', 'because'], 1, 'Hai vế trái ngược → but.'),
    Q('Điền: "It was raining, ___ we stayed at home."', ['and', 'but', 'so', 'because'], 2, 'So = nên (chỉ kết quả).'),
    Q('Điền: "I stayed at home ___ it was raining."', ['and', 'but', 'so', 'because'], 3, 'Because = vì (chỉ nguyên nhân).'),
    Q('Phân biệt "so" và "because":', ['Giống hệt nhau', 'So + kết quả; Because + nguyên nhân', 'Because + kết quả; So + nguyên nhân', 'Cả hai đều chỉ nguyên nhân'], 1, 'It rained, SO we stayed home / We stayed home BECAUSE it rained.'),
  ]),

  M(27, 'Past simple: Regular verbs', [
    Q('Quy tắc thêm "-ed" cho động từ thường:', ['Chỉ thêm -ed cho ngôi 3', 'Thêm -ed cho mọi ngôi', 'Thêm -es cho mọi ngôi', 'Đổi V thành V-ing'], 1, 'Past simple regular: V + ed cho tất cả các ngôi.'),
    Q('Quá khứ của "play":', ['plaied', 'played', 'plaies', 'plaing'], 1, 'Play + ed = played.'),
    Q('Quá khứ của "study":', ['studyed', 'studied', 'studyd', 'studyied'], 1, 'Phụ âm + y → ied: studied.'),
    Q('Quá khứ của "stop":', ['stoped', 'stopped', 'stops', 'stoping'], 1, 'Nguyên âm ngắn + phụ âm → gấp đôi: stopped.'),
    Q('Phủ định: "She ___ go to school yesterday."', ['don\'t', 'didn\'t', 'doesn\'t', 'wasn\'t'], 1, 'Past simple phủ định: didn\'t + V (nguyên thể).'),
    Q('Câu hỏi: "___ you visit Grandma last weekend?"', ['Do', 'Did', 'Were', 'Was'], 1, 'Past simple câu hỏi: Did + S + V?'),
  ]),

  M(28, 'Past simple: Irregular verbs', [
    Q('Quá khứ của "go":', ['goed', 'went', 'gone', 'goes'], 1, 'Go → went → gone.'),
    Q('Quá khứ của "see":', ['seed', 'saw', 'seen', 'sees'], 1, 'See → saw → seen.'),
    Q('Quá khứ của "have":', ['haved', 'had', 'has', 'having'], 1, 'Have → had.'),
    Q('Quá khứ của "be" với "I":', ['were', 'was', 'am', 'been'], 1, 'I / he / she / it → was.'),
    Q('Điền: "They ___ to the zoo last Sunday."', ['go', 'goes', 'went', 'going'], 2, 'Last Sunday → quá khứ → went.'),
    Q('Trạng từ nào báo hiệu past simple?', ['now', 'tomorrow', 'yesterday', 'every day'], 2, 'Yesterday / last week / ago → past simple.'),
  ]),

  M(29, 'Sports and games (1): Vocabulary', [
    Q('"Football" trong tiếng Anh-Anh nghĩa là?', ['Bóng rổ', 'Bóng đá', 'Bóng chuyền', 'Bóng bầu dục'], 1, 'Football (BrE) = bóng đá (= soccer trong AmE).'),
    Q('"Swimming" là?', ['Chạy bộ', 'Bơi lội', 'Đạp xe', 'Đi bộ'], 1, 'Swim → swimming = bơi.'),
    Q('"Badminton" là?', ['Bóng bàn', 'Cầu lông', 'Quần vợt', 'Bóng rổ'], 1, 'Badminton = cầu lông.'),
    Q('Chọn động từ: "We ___ football at the weekend."', ['do', 'play', 'go', 'make'], 1, 'Play + môn thể thao có bóng / đối kháng.'),
    Q('Chọn động từ: "I ___ swimming every Sunday."', ['play', 'do', 'go', 'make'], 2, 'Go + V-ing (môn thể thao kết thúc -ing): go swimming, go fishing.'),
    Q('"Yoga" và "karate" thường đi với động từ?', ['play', 'go', 'do', 'make'], 2, 'Do + yoga / karate / aerobics.'),
  ]),

  M(30, 'Sports and games (2): Like + V-ing', [
    Q('Cấu trúc "thích làm gì":', ['like + to V', 'like + V-ing', 'like + V', 'like + V-ed'], 1, 'Like / love / hate / enjoy + V-ing.'),
    Q('Điền: "I love ___ (play) football."', ['play', 'to playing', 'playing', 'played'], 2, 'Love + V-ing: playing.'),
    Q('Câu nào ĐÚNG?', ['She enjoys swim.', 'She enjoys to swim.', 'She enjoys swimming.', 'She enjoys swims.'], 2, 'Enjoy + V-ing: swimming.'),
    Q('"He hates ___ (get) up early."', ['get', 'getting', 'got', 'to getting'], 1, 'Hate + V-ing: getting up.'),
    Q('Phủ định: "I don\'t like ___ (do) homework."', ['do', 'to do', 'doing', 'did'], 2, 'Like + V-ing: doing.'),
    Q('Đồng nghĩa với "I love football":', ['I hate football.', 'I dislike football.', 'I really like football.', 'I never play football.'], 2, 'Love ≈ really like.'),
  ]),

  M(31, 'Adverbs of frequency', [
    Q('Trạng từ tần suất cao nhất:', ['never', 'sometimes', 'often', 'always'], 3, 'Always (100%) > usually > often > sometimes > rarely > never.'),
    Q('"Never" nghĩa là?', ['Luôn luôn', 'Thường xuyên', 'Thỉnh thoảng', 'Không bao giờ'], 3, 'Never = không bao giờ (0%).'),
    Q('Vị trí của adverb of frequency với động từ thường:', ['Trước V chính', 'Sau V chính', 'Đầu câu', 'Cuối câu'], 0, 'I ALWAYS go to school early. (trước V chính)'),
    Q('Vị trí với "be":', ['Trước be', 'Sau be', 'Đầu câu', 'Cuối câu'], 1, 'She IS often late. (sau be)'),
    Q('Câu nào ĐÚNG?', ['She goes always to school by bike.', 'She always goes to school by bike.', 'Always she goes to school by bike.', 'She goes to school always by bike.'], 1, 'Trạng từ tần suất đứng trước động từ thường.'),
    Q('"How often" hỏi về?', ['Khi nào', 'Bao lâu một lần', 'Ở đâu', 'Bao xa'], 1, 'How often = mức độ thường xuyên.'),
  ]),

  M(32, 'Cities of the world: Nationalities', [
    Q('Người đến từ "Japan" gọi là?', ['Japan', 'Japanese', 'Japanish', 'Japaner'], 1, 'Japan → Japanese.'),
    Q('"Vietnam" → quốc tịch:', ['Vietnam', 'Vietnamish', 'Vietnamese', 'Vietnamian'], 2, 'Vietnam → Vietnamese.'),
    Q('"France" → quốc tịch:', ['Franch', 'Frenchman', 'French', 'Francaise'], 2, 'France → French.'),
    Q('"England" → quốc tịch:', ['Englandish', 'British only', 'English', 'Englander'], 2, 'England → English.'),
    Q('"China" → quốc tịch:', ['Chinish', 'Chinese', 'Chiner', 'Chinan'], 1, 'China → Chinese.'),
    Q('Cấu trúc giới thiệu quốc tịch: "I ___ Vietnamese."', ['am', 'is', 'are', 'do'], 0, 'I + am + nationality.'),
  ]),

  M(33, 'Present perfect (intro): Have/Has been to', [
    Q('Cấu trúc Present perfect:', ['S + have/has + V (nguyên thể)', 'S + have/has + V3/ed', 'S + had + V3', 'S + will + have + V'], 1, 'Have/Has + past participle (V3).'),
    Q('Điền: "She ___ been to Hanoi twice."', ['have', 'has', 'is', 'was'], 1, 'She → has.'),
    Q('"Have you ever ___ to Paris?"', ['be', 'was', 'been', 'being'], 2, 'Have + V3: been.'),
    Q('"I ___ never ___ to Korea."', ['have / been', 'has / been', 'am / be', 'was / be'], 0, 'I + have + never + been to.'),
    Q('Trạng từ nào hợp với present perfect?', ['yesterday', 'two days ago', 'ever / never / already', 'now'], 2, 'Ever / never / already / yet / since / for → present perfect.'),
    Q('Khác biệt "have been to" vs "have gone to":', ['Giống hệt nhau', 'Been to = đã đi và đã về; Gone to = đã đi và còn ở đó', 'Ngược lại', 'Cả hai đều = đang ở đó'], 1, 'Been to = đã từng đến và quay về; Gone to = đã đi và chưa về.'),
  ]),

  M(34, 'Our houses in the future: May / Might', [
    Q('"May" và "might" diễn tả?', ['Sự chắc chắn 100%', 'Khả năng / có thể (không chắc)', 'Bắt buộc', 'Cấm đoán'], 1, 'May / might = có thể (mức độ chắc chắn ~50%).'),
    Q('Sau may / might dùng động từ ở dạng?', ['V-ing', 'V nguyên thể (không to)', 'to + V', 'V-ed'], 1, 'Modal + V (bare infinitive).'),
    Q('Câu nào ĐÚNG?', ['It may rains tomorrow.', 'It may to rain tomorrow.', 'It may rain tomorrow.', 'It mays rain tomorrow.'], 2, 'May + V nguyên thể, không -s, không "to".'),
    Q('Điền: "We ___ have flying cars in 2050."', ['must', 'might', 'should', 'won\'t'], 1, 'Dự đoán tương lai không chắc chắn → might.'),
    Q('So sánh "will" và "might":', ['Will mạnh hơn (chắc chắn) – Might yếu hơn (có thể)', 'Giống hệt nhau', 'Might mạnh hơn will', 'Will = quá khứ; Might = tương lai'], 0, 'Will = dự đoán chắc; might = chỉ là khả năng.'),
    Q('Phủ định "may not" có nghĩa?', ['Chắc chắn không', 'Có thể không', 'Không được phép tuyệt đối', 'Bắt buộc không'], 1, 'May not = có thể không (chứ không phải cấm).'),
  ]),

  M(35, 'Robots: Can / Could (ability & requests)', [
    Q('"Can" diễn tả?', ['Bắt buộc', 'Khả năng / sự cho phép', 'Quá khứ xa', 'Lời khuyên'], 1, 'Can = có thể (khả năng / xin phép).'),
    Q('"Could" là dạng quá khứ của?', ['will', 'can', 'must', 'should'], 1, 'Could = quá khứ / nhã nhặn hơn của can.'),
    Q('Điền: "Robots ___ do many things in the future."', ['can', 'cans', 'to can', 'caned'], 0, 'Can + V nguyên thể; can không thêm -s.'),
    Q('Yêu cầu lịch sự: "___ you help me, please?"', ['Can', 'Could', 'Cả hai đều được, Could lịch sự hơn', 'Must'], 2, 'Could you... lịch sự hơn Can you... .'),
    Q('Phủ định "cannot" viết tắt là?', ['can\'t', 'cant', 'cann\'t', 'ca\'nt'], 0, 'Cannot = can\'t.'),
    Q('Câu nào ĐÚNG?', ['She can sings well.', 'She cans sing well.', 'She can sing well.', 'She can to sing well.'], 2, 'Can + V (bare infinitive), không -s, không "to".'),
  ]),

  M(36, 'Review HK2', [
    Q('Câu điều kiện loại 1: "If we ___ trees, the air ___ cleaner."', ['plant / will be', 'will plant / is', 'planted / would be', 'plant / is'], 0, 'If + present simple, will + V.'),
    Q('"I have ___ been to Singapore." (chưa từng)', ['ever', 'never', 'already', 'yet'], 1, 'Never = chưa bao giờ.'),
    Q('Quá khứ của "buy":', ['buyed', 'bought', 'buy', 'buying'], 1, 'Buy → bought (irregular).'),
    Q('"I enjoy ___ comic books." (đọc)', ['read', 'to read', 'reading', 'reads'], 2, 'Enjoy + V-ing.'),
    Q('Vị trí trạng từ: "She ___ goes to bed late."', ['never', 'go never', 'goes never', 'never to'], 0, 'Adv tần suất trước V chính: She never goes to bed late.'),
    Q('"My grandfather is ___." (người Việt Nam)', ['Vietnam', 'Vietnamese', 'Vietnamish', 'Viet'], 1, 'Quốc tịch: Vietnamese.'),
    Q('"You ___ touch that wire — it\'s dangerous!" (cấm)', ['must', 'mustn\'t', 'should', 'can'], 1, 'Mustn\'t = cấm tuyệt đối.'),
    Q('Tương lai dự đoán không chắc: "It ___ snow tonight."', ['will surely', 'might', 'must', 'should'], 1, 'Might = có thể (không chắc).'),
  ]),
];

export const S6TA_SCENARIOS = indexBy(S6TA_WEEKS);
