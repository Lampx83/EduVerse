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
    Q('"Maths" trong tiếng Anh có nghĩa là?', ['Âm nhạc', 'Toán', 'Mỹ thuật', 'Lịch sử'], 1, 'Maths (BrE) / Math (AmE) = môn Toán.'),
    Q('Môn "History" là môn gì?', ['Hoá học', 'Lịch sử', 'Địa lý', 'Vật lý'], 1, 'History = Lịch sử.'),
    Q('Chọn từ đúng: "I study English, Maths and ___ at school."', ['sciences', 'Science', 'the Sciences', 'a science'], 1, 'Tên môn học không có mạo từ, không số nhiều; ở đây Science = môn Khoa học.'),
    Q('"Physical Education" thường viết tắt là?', ['PHE (Physical Health Education)', 'PE', 'PHY (Physical)', 'PEd (Phys Ed)'], 1, 'Physical Education = PE (Thể dục).'),
    Q('Chọn cụm đúng: "My favourite ___ is Art."', ['subjects', 'subject', 'subjecting', 'a subject'], 1, '"Favourite + danh từ số ít": favourite subject = môn yêu thích.'),
    Q('"I have Music ___ Monday morning." — Điền giới từ:', ['of (sai — of không chỉ thời gian)', 'at (chỉ dùng cho giờ cụ thể)', 'on', 'in (chỉ dùng cho tháng/năm/buổi chung)'], 2, 'Thứ trong tuần đi với "on": on Monday morning.'),
  ]),

  M(2, 'My new school (2): School things & places', [
    Q('"Schoolbag" có nghĩa là?', ['Bảng đen', 'Bút chì', 'Bàn học', 'Cặp sách'], 3, 'Schoolbag = cái cặp đi học.'),
    Q('"Library" là nơi nào trong trường?', ['Căng-tin', 'Thư viện', 'Sân trường', 'Phòng thí nghiệm'], 1, 'Library = thư viện.'),
    Q('Chọn từ điền: "We do experiments in the ___."', ['canteen', 'library', 'lab', 'gym (phòng tập thể dục)'], 2, 'Experiment = thí nghiệm → lab (laboratory).'),
    Q('"Pencil case" là vật gì?', ['Thước kẻ', 'Cục tẩy (eraser)', 'Bút mực', 'Hộp bút'], 3, 'Pencil case = hộp đựng bút.'),
    Q('"Where do students eat lunch?" — Câu trả lời phù hợp:', ['In the library', 'In the lab', 'At the gate', 'In the canteen'], 3, 'Canteen = căng-tin, nơi ăn trưa.'),
    Q('Cụm nào đúng? "I have a new ___ for Maths class."', ['ruler', 'a ruler', 'rules (danh từ số nhiều, nghĩa là quy tắc)', 'rulers'], 0, 'Sau "a new" + danh từ đếm được số ít không thêm mạo từ nữa: a new ruler.'),
  ]),

  M(3, 'Present simple: Positive & Negative', [
    Q('Chọn dạng đúng: "She ___ English every day."', ['studying', 'studies', 'studys', 'study (quên thêm -es cho ngôi 3 số ít)'], 1, 'Ngôi 3 số ít: study → studies (y → ies).'),
    Q('Điền: "I ___ go to school on Sunday."', ['am not', 'don\'t', 'doesn\'t', 'doesn\'t (chỉ dùng cho he/she/it)'], 1, 'Phủ định ngôi I/you/we/they: don\'t + V.'),
    Q('Câu nào ĐÚNG ngữ pháp?', ['He don\'t like Maths.', 'He doesn\'t likes Maths.', 'He not like Maths.', 'He doesn\'t like Maths.'], 3, 'Ngôi 3 số ít phủ định: doesn\'t + V nguyên thể.'),
    Q('Chia động từ: "My brother ___ (watch) TV after dinner."', ['watchs', 'watch (quên chia ngôi 3 số ít)', 'watching', 'watches'], 3, 'Động từ tận cùng -ch thêm -es: watches.'),
    Q('Hiện tại đơn diễn tả:', ['Việc đã hoàn thành trong quá khứ', 'Việc đang xảy ra ngay lúc nói', 'Thói quen / sự thật hiển nhiên', 'Dự đoán tương lai'], 2, 'Present simple dùng cho thói quen, sự thật chung, lịch trình.'),
    Q('Trạng từ nào thường đi với hiện tại đơn?', ['tomorrow', 'at the moment', 'usually', 'now (đi với hiện tại tiếp diễn)'], 2, '"Usually / often / always / every day" báo hiệu hiện tại đơn.'),
  ]),

  M(4, 'Present simple: Questions (Yes/No & Wh-)', [
    Q('Câu hỏi Yes/No: "___ you like Music?"', ['Are (dùng cho câu có to be)', 'Is (dùng với ngôi 3 số ít + to be)', 'Do', 'Does (chỉ dùng cho he/she/it)'], 2, 'Chủ ngữ "you" dùng "Do + S + V?".'),
    Q('Hoàn thành: "___ she play badminton?"', ['Are (dùng cho they/we/you + to be)', 'Is (dùng với to be, không dùng với động từ thường)', 'Does', 'Do (dùng cho I/you/we/they)'], 2, 'Ngôi 3 số ít: Does + S + V (nguyên thể)?'),
    Q('Trả lời ngắn câu "Does he go to school by bus?" (có)', ['Yes, he does.', 'Yes, he do.', 'Yes, he is.', 'Yes, he goes.'], 0, 'Trả lời ngắn dùng trợ động từ: Yes, he does.'),
    Q('Câu hỏi nào dùng để hỏi nơi chốn?', ['Why (hỏi lý do)', 'Where', 'What (hỏi vật/việc)', 'When (hỏi thời gian)'], 1, 'Where = ở đâu (hỏi nơi chốn).'),
    Q('Sửa câu: "Where she lives?"', ['Where she lives?', 'Where do she live?', 'Where does she live?', 'Where does she lives?'], 2, 'Wh- + does + S + V (nguyên thể): Where does she live?'),
    Q('"What time ___ school start?" — Điền từ:', ['do (chỉ dùng cho I/you/we/they)', 'is (chỉ dùng với to be)', 'are (chỉ dùng với chủ ngữ số nhiều)', 'does'], 3, 'Chủ ngữ "school" (số ít) → does.'),
  ]),

  M(5, 'My home (1): Rooms & furniture', [
    Q('"Bedroom" là phòng gì?', ['Nhà bếp', 'Phòng khách', 'Phòng tắm', 'Phòng ngủ'], 3, 'Bedroom = phòng ngủ.'),
    Q('"Living room" là?', ['Phòng ăn', 'Phòng ngủ', 'Nhà tắm', 'Phòng khách'], 3, 'Living room = phòng khách.'),
    Q('"Wardrobe" là đồ nội thất gì?', ['Ghế sô-pha', 'Giường', 'Bàn ăn (table)', 'Tủ quần áo'], 3, 'Wardrobe = tủ đựng quần áo.'),
    Q('"We cook in the ___."', ['garden', 'bathroom', 'bedroom', 'kitchen'], 3, 'Cook (nấu ăn) → kitchen (nhà bếp).'),
    Q('Chọn từ đúng: "There is a ___ in the living room."', ['the sofas', 'a sofa', 'sofas (số nhiều, không hợp với "a")', 'sofa'], 3, '"There is a + N số ít" → sofa.'),
    Q('Phòng nào để tắm?', ['Bathroom', 'Bedroom', 'Hall (sảnh, hành lang)', 'Kitchen'], 0, 'Bathroom = phòng tắm.'),
  ]),

  M(6, 'My home (2): Prepositions of place', [
    Q('"The cat is ___ the table." (con mèo Ở TRÊN bàn)', ['under (dưới bàn)', 'in (ở bên trong)', 'on', 'next to'], 2, 'On = trên bề mặt.'),
    Q('"The ball is ___ the box." (trong hộp)', ['under (dưới hộp)', 'behind', 'in', 'on (trên nắp hộp)'], 2, 'In = bên trong.'),
    Q('"The dog is ___ the chair." (dưới ghế)', ['next to', 'in (bên trong ghế)', 'under', 'on (trên mặt ghế)'], 2, 'Under = bên dưới.'),
    Q('"My bag is ___ the desk." (cạnh bàn học)', ['between', 'behind', 'in front of', 'next to'], 3, 'Next to = ngay cạnh.'),
    Q('"The picture is ___ the wall." — Chọn giới từ:', ['under (dưới tường)', 'in (ở bên trong tường)', 'on', 'at (ở vị trí điểm, không dùng với wall)'], 2, 'Tranh treo trên tường dùng "on the wall".'),
    Q('"The car is ___ the two trees." (giữa hai cái cây)', ['in (bên trong cây)', 'on (trên cây)', 'between', 'next to'], 2, 'Between A and B = ở giữa hai vật.'),
  ]),

  M(7, 'There is / There are', [
    Q('Điền: "There ___ a lamp on the desk."', ['is', 'are (dùng với số nhiều)', 'have (có, không dùng với There)', 'has (chỉ dùng với chủ ngữ số ít có sở hữu)'], 0, 'Danh từ số ít → there IS.'),
    Q('Điền: "There ___ four chairs in the room."', ['be (dạng nguyên thể, cần chia)', 'have (có, không dùng với There)', 'are', 'is (chỉ dùng với danh từ số ít)'], 2, 'Danh từ số nhiều → there ARE.'),
    Q('Phủ định: "There ___ any milk in the glass."', ['don\'t (chỉ dùng với động từ thường)', 'aren\'t', 'doesn\'t', 'isn\'t'], 3, 'Milk (không đếm được) → isn\'t + any.'),
    Q('Câu hỏi: "___ there a TV in your bedroom?"', ['Have (chỉ dùng với hiện tại hoàn thành)', 'Is', 'Do (chỉ dùng với động từ thường)', 'Are (chỉ dùng với danh từ số nhiều)'], 1, 'Chủ ngữ "a TV" số ít → Is there...?'),
    Q('Trả lời ngắn (có): "Are there any books on the shelf?"', ['Yes, there are.', 'Yes, they are.', 'Yes, it is.', 'Yes, there is.'], 0, 'Câu hỏi "Are there..." → "Yes, there are."'),
    Q('Câu nào ĐÚNG?', ['There is two beds.', 'There are a clock.', 'There is many chairs.', 'There are some flowers.'], 3, 'Some flowers (số nhiều) → there are.'),
  ]),

  M(8, 'My friends (1): Appearance', [
    Q('"Tall" có nghĩa là?', ['Béo (Fat)', 'Gầy (Thin)', 'Cao', 'Thấp (Short)'], 2, 'Tall = cao.'),
    Q('"Short hair" nghĩa là?', ['Tóc xoăn', 'Tóc ngắn', 'Tóc thẳng', 'Tóc dài'], 1, 'Short = ngắn.'),
    Q('"He has ___ eyes." (mắt nâu)', ['brown', 'browns', 'the browns', 'a brown'], 0, 'Tính từ chỉ màu đứng trước danh từ, không số nhiều: brown eyes.'),
    Q('"Curly" mô tả kiểu tóc?', ['Bạc (Grey)', 'Thẳng (Straight)', 'Hoe vàng', 'Xoăn'], 3, 'Curly hair = tóc xoăn.'),
    Q('Câu nào ĐÚNG ngữ pháp?', ['She has long hairs.', 'She have long hair.', 'She has long hair.', 'She has a long hair.'], 2, 'Hair là danh từ không đếm được → "has long hair".'),
    Q('"Slim" gần nghĩa với?', ['Tall (Cao)', 'Short (Thấp/Ngắn)', 'Fat (Béo, trái nghĩa với slim)', 'Thin'], 3, 'Slim ≈ thin = mảnh dẻ, gầy.'),
  ]),

  M(9, 'My friends (2): Personality adjectives', [
    Q('"Friendly" nghĩa là?', ['Thân thiện', 'Lười biếng', 'Buồn bã (Sad)', 'Tức giận'], 0, 'Friendly = thân thiện.'),
    Q('"Hard-working" mô tả người?', ['Chăm chỉ', 'Vui tính', 'Lười biếng (Lazy)', 'Nhút nhát'], 0, 'Hard-working = chăm chỉ.'),
    Q('"Shy" nghĩa là?', ['Vui tính', 'Nhút nhát', 'Kiêu ngạo', 'Ồn ào (Noisy)'], 1, 'Shy = nhút nhát, rụt rè.'),
    Q('Trái nghĩa của "kind" (tốt bụng):', ['lovely', 'nice (tử tế — đồng nghĩa với kind)', 'unkind', 'friendly'], 2, 'Tiền tố un- tạo phản nghĩa: unkind.'),
    Q('Chọn câu ĐÚNG: "Lan is a ___ girl."', ['friendship', 'friendly', 'friend', 'friends'], 1, 'Tính từ đứng trước danh từ: friendly girl.'),
    Q('"Confident" có nghĩa là?', ['Tự tin', 'Buồn ngủ', 'Sợ hãi', 'Bối rối'], 0, 'Confident = tự tin.'),
  ]),

  M(10, 'Present continuous', [
    Q('Cấu trúc thì hiện tại tiếp diễn:', ['S + will + V', 'S + V(s/es)', 'S + V2/ed', 'S + am/is/are + V-ing'], 3, 'Present continuous: am/is/are + V-ing.'),
    Q('Chia động từ: "Look! The baby ___ (sleep)."', ['sleep (quên thêm to be + V-ing)', 'is sleeping', 'sleeps', 'sleeping'], 1, '"Look!" báo hiệu sự việc đang xảy ra → is sleeping.'),
    Q('Điền: "They ___ football at the moment."', ['play (quên thêm to be + V-ing)', 'is playing', 'plays (chỉ dùng cho ngôi 3 số ít, hiện tại đơn)', 'are playing'], 3, 'They + are + V-ing.'),
    Q('Dạng V-ing của "run":', ['running', 'runned', 'runs (ngôi 3 số ít hiện tại đơn, không phải V-ing)', 'runing'], 0, 'Phụ âm cuối sau nguyên âm ngắn → gấp đôi: running.'),
    Q('Câu nào KHÔNG dùng hiện tại tiếp diễn?', ['She is cooking at the moment.', 'I am reading now.', 'They go to school every day.', 'We are studying English.'], 2, '"Every day" là dấu hiệu hiện tại đơn.'),
    Q('Câu hỏi: "What ___ you ___ now?"', ['is / doing', 'do / doing', 'do / do', 'are / doing'], 3, '"Now" → hiện tại tiếp diễn: are you doing.'),
  ]),

  M(11, 'My neighbourhood (1): Places in town', [
    Q('"Post office" là?', ['Ngân hàng', 'Bưu điện', 'Trường học', 'Bệnh viện'], 1, 'Post office = bưu điện.'),
    Q('"Hospital" là nơi?', ['Học tập', 'Chữa bệnh', 'Cầu nguyện', 'Mua đồ'], 1, 'Hospital = bệnh viện.'),
    Q('"Where do you buy bread and cakes?"', ['At the museum', 'At the bakery', 'At the park', 'At the bank'], 1, 'Bakery = tiệm bánh.'),
    Q('"Museum" là nơi?', ['Bảo tàng', 'Rạp chiếu phim', 'Công viên', 'Siêu thị'], 0, 'Museum = bảo tàng.'),
    Q('Điền: "I withdraw money at the ___."', ['library', 'school', 'park (công viên, không liên quan rút tiền)', 'bank'], 3, 'Withdraw money = rút tiền → bank.'),
    Q('"Pharmacy" / "Drugstore" là?', ['Hiệu sách', 'Hiệu may', 'Hiệu thuốc', 'Hiệu cắt tóc'], 2, 'Pharmacy = hiệu thuốc.'),
  ]),

  M(12, 'My neighbourhood (2): Asking directions', [
    Q('Cách hỏi đường lịch sự nhất:', ['Bank where is?', 'Where the bank?', 'You know bank?', 'Excuse me, where is the bank?'], 3, 'Mở đầu bằng "Excuse me, where is + N?".'),
    Q('"Go ___ this street." (đi thẳng)', ['left (rẽ trái)', 'right (rẽ phải)', 'straight', 'across'], 2, 'Go straight = đi thẳng.'),
    Q('"Turn ___ at the corner." (rẽ phải)', ['up (lên trên, không dùng với turn)', 'left (rẽ trái)', 'right', 'back (quay lại)'], 2, 'Turn right = rẽ phải.'),
    Q('"It\'s ___ the bank and the school." (giữa)', ['opposite', 'next to', 'between', 'behind'], 2, 'Between A and B = ở giữa hai địa điểm.'),
    Q('"Opposite the park" nghĩa là?', ['Cạnh công viên', 'Đối diện công viên', 'Trong công viên', 'Sau công viên'], 1, 'Opposite = đối diện.'),
    Q('"How far is it?" hỏi về?', ['Khoảng cách', 'Tên đường', 'Phương tiện', 'Thời gian'], 0, 'How far = bao xa (khoảng cách).'),
  ]),

  M(13, 'Comparative adjectives', [
    Q('Quy tắc: tính từ ngắn (1 âm tiết) thêm:', ['-er + than', '-est + than', 'more + than', 'most + than'], 0, 'Short adj + -er + than (e.g. taller than).'),
    Q('So sánh hơn của "big":', ['more big than', 'bigger than', 'biger than', 'biggest than'], 1, 'Phụ âm cuối + nguyên âm ngắn → gấp đôi: bigger.'),
    Q('So sánh hơn của "beautiful":', ['beautifuller', 'more beautiful', 'beautifuler than', 'beautifullest'], 1, 'Tính từ dài (≥3 âm tiết) → more + adj.'),
    Q('Điền: "My house is ___ than yours."', ['bigger', 'more big', 'big (quên thêm hậu tố so sánh hơn)', 'biger (sai chính tả, thiếu một g)'], 0, 'Bigger than = lớn hơn.'),
    Q('So sánh BẤT QUY TẮC: "good" →', ['gooder', 'best (so sánh nhất, không phải hơn)', 'more good', 'better'], 3, 'Good → better (so sánh hơn) / best (nhất).'),
    Q('Câu nào ĐÚNG?', ['She is taller than me.', 'She is more tall than me.', 'She is tallest than me.', 'She is tall than me.'], 0, 'Tall (1 âm tiết) → taller + than.'),
  ]),

  M(14, 'Superlative adjectives', [
    Q('Cấu trúc so sánh nhất với tính từ ngắn:', ['the + adj + -est', 'the + adj + than', 'the + adj + -er', 'the + most + adj'], 0, 'The + adj-est: the tallest, the smallest.'),
    Q('So sánh nhất của "happy":', ['the most happy', 'the happyest', 'the happiest', 'the happier'], 2, 'Y → I + est: happiest.'),
    Q('So sánh nhất của "expensive":', ['the more expensive', 'the most expensive', 'expensiver', 'the expensivest'], 1, 'Tính từ dài → the most + adj.'),
    Q('BẤT QUY TẮC: "bad" → so sánh nhất:', ['the worse', 'the most bad', 'the worst', 'the baddest'], 2, 'Bad → worse → the worst.'),
    Q('Điền: "Mount Everest is ___ mountain in the world."', ['high (dạng nguyên, không phải so sánh nhất)', 'higher', 'the highest', 'the most high'], 2, 'So sánh nhất "cao nhất" → the highest.'),
    Q('Câu nào ĐÚNG?', ['He is the cleverest in the class.', 'He is the more clever in the class.', 'He is the most clever in the class.', 'He is cleverest in the class.'], 0, 'Clever (2 âm tiết) chấp nhận -est: the cleverest.'),
  ]),

  M(15, 'Natural wonders (1): Vocabulary & geography', [
    Q('"Mountain" có nghĩa là?', ['Núi', 'Sông (River)', 'Hồ (Lake)', 'Biển (Sea)'], 0, 'Mountain = núi.'),
    Q('"Desert" là?', ['Rừng (Forest)', 'Thác nước', 'Đảo (Island)', 'Sa mạc'], 3, 'Desert = sa mạc.'),
    Q('"Waterfall" nghĩa là?', ['Bãi biển', 'Hang động', 'Dòng suối (Stream)', 'Thác nước'], 3, 'Waterfall = thác nước.'),
    Q('"The Amazon" là một con ___?', ['desert', 'river', 'mountain', 'island'], 1, 'The Amazon = sông Amazon.'),
    Q('"Cave" là?', ['Đồi (Hill)', 'Hang động', 'Vịnh (Bay)', 'Hòn đảo (Island)'], 1, 'Cave = hang động.'),
    Q('Cụm nào dùng mạo từ ĐÚNG?', ['Sahara is biggest desert.', 'The Sahara is the biggest desert.', 'A Sahara is the biggest desert.', 'Sahara is the bigger desert.'], 1, 'Tên các sa mạc/dãy núi/đại dương dùng "the".'),
  ]),

  M(16, 'Natural wonders (2): Countable & uncountable nouns', [
    Q('Danh từ nào KHÔNG đếm được?', ['student', 'book (sách, đếm được)', 'apple (quả táo, đếm được)', 'water'], 3, 'Water (nước) là danh từ không đếm được.'),
    Q('Điền: "How ___ rice do you eat?"', ['much', 'a lot (cụm chỉ số lượng, không dùng sau how)', 'many (chỉ dùng với danh từ đếm được)', 'some (không dùng trong câu hỏi how)'], 0, 'Rice không đếm được → much.'),
    Q('Điền: "How ___ apples are there?"', ['a (mạo từ, không dùng sau how)', 'much (chỉ dùng với danh từ không đếm được)', 'many', 'any (dùng trong câu phủ định/nghi vấn yes-no)'], 2, 'Apples đếm được số nhiều → many.'),
    Q('Câu nào ĐÚNG?', ['I need a bread.', 'I need a breads.', 'I need many breads.', 'I need some bread.'], 3, 'Bread không đếm được → some bread.'),
    Q('"A bottle of water" — "water" được tính qua đơn vị nào?', ['many (chỉ dùng với danh từ đếm được)', 'a bottle', 'số nhiều', 'few (chỉ dùng với danh từ đếm được số nhiều)'], 1, 'Với uncountable, dùng đơn vị: a bottle of, a glass of, a piece of.'),
    Q('Đếm "money": chọn câu ĐÚNG.', ['How many moneys?', 'A money please.', 'How many money?', 'How much money?'], 3, 'Money là uncountable → How much money?'),
  ]),

  M(17, 'Modal verbs: must / mustn\'t / should', [
    Q('"Must" diễn tả?', ['Khả năng', 'Dự đoán xa', 'Bắt buộc / nghĩa vụ', 'Sự cho phép'], 2, 'Must = phải, bắt buộc.'),
    Q('"You ___ smoke here." (cấm hút thuốc)', ['mustn\'t', 'should', 'must (bắt buộc phải, ngược nghĩa với cấm)', 'can (có thể, không mang nghĩa cấm)'], 0, 'Mustn\'t = cấm, không được.'),
    Q('Sau modal verbs (must, should, can) dùng động từ ở dạng?', ['V-ing (chỉ dùng sau enjoy, like, hate...)', 'V nguyên thể (không to)', 'to + V', 'V-ed (chỉ dùng trong thì quá khứ)'], 1, 'Modal + V (bare infinitive): must do, should go.'),
    Q('"You ___ drink more water." (lời khuyên)', ['must (bắt buộc, mạnh hơn lời khuyên)', 'mustn\'t', 'should', 'shouldn\'t'], 2, 'Should = nên (lời khuyên).'),
    Q('Câu nào ĐÚNG?', ['He must study.', 'He must studies.', 'He musts study.', 'He must to study.'], 0, 'Must + V nguyên thể, không -s, không "to".'),
    Q('Khác biệt "must" vs "should":', ['Cả hai đều cấm', 'Should = bắt buộc; Must = lời khuyên', 'Must = bắt buộc; Should = lời khuyên', 'Giống hệt nhau'], 2, 'Must mạnh hơn, có nghĩa bắt buộc; should chỉ lời khuyên nhẹ.'),
  ]),

  M(18, 'Review HK1', [
    Q('Chia: "She usually ___ (go) to school by bus."', ['going (V-ing, không tự đứng được)', 'went (quá khứ, không hợp với usually)', 'go (quên chia ngôi 3 số ít)', 'goes'], 3, 'Usually → hiện tại đơn; she → goes.'),
    Q('"Look! It ___ (rain)."', ['is raining', 'rained', 'rain (quên chia thì)', 'rains (hiện tại đơn, không hợp với "Look!")'], 0, '"Look!" → hiện tại tiếp diễn: is raining.'),
    Q('"There ___ a lot of books on the shelf."', ['is (chỉ dùng với danh từ số ít)', 'are', 'has (chỉ dùng với chủ ngữ sở hữu số ít)', 'be (dạng nguyên thể, cần chia)'], 1, 'A lot of books (số nhiều) → there are.'),
    Q('So sánh hơn: "Lan is ___ (clever) than Mai."', ['cleverer', 'cleverest', 'more clever', 'most clever'], 0, 'Clever (2 âm tiết) ưu tiên -er: cleverer.'),
    Q('So sánh nhất: "Mount Fansipan is ___ mountain in Vietnam."', ['the highest', 'the higher', 'the most high', 'higher'], 0, 'Cao nhất → the highest.'),
    Q('"You ___ run in the library." (cấm)', ['can (có thể, không mang nghĩa cấm)', 'mustn\'t', 'should', 'must (bắt buộc, không phải cấm)'], 1, 'Mustn\'t = không được, cấm.'),
    Q('"How ___ water do we need?"', ['many (dùng với danh từ đếm được)', 'a (mạo từ, không dùng sau how)', 'few (dùng với danh từ đếm được)', 'much'], 3, 'Water (uncountable) → how much.'),
    Q('"I have History ___ Tuesdays."', ['on', 'of (không dùng với thứ trong tuần)', 'at (chỉ dùng với giờ cụ thể)', 'in (chỉ dùng với tháng/năm)'], 0, 'On + thứ trong tuần.'),
  ]),

  // ──────────────── HK2 ────────────────

  M(19, 'Our greener world (1): Environment vocabulary', [
    Q('"Environment" có nghĩa là?', ['Thành phố', 'Môi trường', 'Gia đình', 'Trường học'], 1, 'Environment = môi trường.'),
    Q('"Pollution" nghĩa là?', ['Trồng cây', 'Tái chế', 'Tiết kiệm', 'Ô nhiễm'], 3, 'Pollution = sự ô nhiễm.'),
    Q('"Recycle" có nghĩa là?', ['Tái chế', 'Đốt rác', 'Chôn rác', 'Vứt rác'], 0, 'Recycle = tái chế (sử dụng lại nguyên liệu).'),
    Q('Cụm "reduce, reuse, recycle" là?', ['Tên một dòng sông', '3R bảo vệ môi trường', 'Một bài hát', 'Tên một công ty'], 1, '3R = giảm thiểu – tái sử dụng – tái chế.'),
    Q('"Plastic bag" là?', ['Túi nilon', 'Túi da', 'Túi giấy', 'Túi vải'], 0, 'Plastic = nhựa → túi nilon.'),
    Q('Chọn câu phù hợp: "We should plant more ___."', ['the tree', 'trees', 'tree (số ít, không hợp với "more")', 'a tree'], 1, 'More + danh từ đếm được số nhiều: more trees.'),
  ]),

  M(20, 'Our greener world (2): "Will / Won\'t" for future', [
    Q('Cấu trúc tương lai đơn:', ['S + will + V-ing', 'S + V-ed', 'S + will + V (nguyên thể)', 'S + am/is/are + V-ing'], 2, 'Will + V nguyên thể.'),
    Q('Viết tắt phủ định "will not":', ['won\'t', 'willn\'t', 'will\'nt', 'wo\'nt (sai vị trí dấu lược)'], 0, 'Will not = won\'t.'),
    Q('Điền: "I think people ___ use more solar energy."', ['do (trợ động từ hiện tại đơn, không chỉ tương lai)', 'will', 'are (hợp với V-ing, không chỉ tương lai)', 'won\'t (phủ định, ngược nghĩa với dự đoán tích cực)'], 1, 'Dự đoán tương lai dùng will + V.'),
    Q('"It ___ rain tomorrow." (sẽ không)', ['will not', 'doesn\'t', 'will (khẳng định, ngược nghĩa câu phủ định)', 'don\'t (hiện tại đơn, không chỉ tương lai)'], 0, 'Will not / won\'t + V.'),
    Q('Trạng từ nào hợp với will?', ['now (chỉ hiện tại tiếp diễn, không hợp will)', 'yesterday', 'tomorrow', 'last week'], 2, 'Tomorrow / next week / in 2030 → tương lai.'),
    Q('Câu hỏi: "___ you help me?"', ['Have (chỉ dùng với hiện tại hoàn thành)', 'Do (chỉ dùng với hiện tại đơn)', 'Are (chỉ dùng với V-ing hoặc tính từ)', 'Will'], 3, 'Will + S + V? = câu hỏi tương lai / yêu cầu.'),
  ]),

  M(21, 'First conditional (If + present, will + V)', [
    Q('Cấu trúc câu điều kiện loại 1:', ['If + will + V, S + V', 'If + present simple, S + will + V', 'If + V-ing, S + V', 'If + V-ed, S + will + V'], 1, 'If + hiện tại đơn, S + will + V.'),
    Q('Điền: "If it ___ tomorrow, we will stay at home."', ['will rain', 'is raining', 'rains', 'rained'], 2, 'Mệnh đề if dùng hiện tại đơn → rains.'),
    Q('Điền: "If we recycle, we ___ the environment."', ['save (thiếu will trong mệnh đề chính)', 'are saving', 'will save', 'saved (quá khứ, không hợp câu điều kiện loại 1)'], 2, 'Mệnh đề chính: will + V → will save.'),
    Q('Câu điều kiện loại 1 dùng để?', ['Nói về quá khứ', 'Nói về điều có thật / có thể xảy ra ở tương lai', 'Nói về giả định trái thực tế', 'Kể chuyện'], 1, 'Loại 1 = tình huống có thể xảy ra ở tương lai.'),
    Q('Câu nào ĐÚNG?', ['If you study, you will pass.', 'If you will study, you will pass.', 'If you study, you pass.', 'If you studied, you pass.'], 0, 'If + present, will + V.'),
    Q('"If she ___ early, she ___ catch the bus." (be / can)', ['will be / will', 'is / will not', 'is / will', 'was / can'], 2, 'If she IS early, she WILL catch the bus.'),
  ]),

  M(22, 'My future house (1): Future predictions', [
    Q('"In the future" nghĩa là?', ['Trong tương lai', 'Ngay bây giờ', 'Hiện tại', 'Trong quá khứ'], 0, 'In the future = trong tương lai.'),
    Q('Điền: "Houses ___ have smart robots in 2050."', ['do (không dùng với danh từ + V chỉ tương lai)', 'are (cần V-ing theo sau, không phải V nguyên)', 'won\'t (phủ định, ngược nghĩa câu khẳng định)', 'will'], 3, 'Dự đoán tương lai → will.'),
    Q('"Solar energy" là?', ['Năng lượng mặt trời', 'Năng lượng gió', 'Năng lượng nước', 'Năng lượng hạt nhân'], 0, 'Solar = thuộc về mặt trời.'),
    Q('"Wireless" có nghĩa là?', ['Có dây', 'Nặng nề', 'Không dây', 'Cũ kỹ (Old-fashioned)'], 2, 'Wireless = không dây.'),
    Q('"Smart TV" là TV?', ['Đã hỏng (Broken)', 'Đen trắng', 'Cổ điển', 'Thông minh (kết nối internet)'], 3, 'Smart = thông minh.'),
    Q('Câu nào ĐÚNG về tương lai?', ['People wills travel to Mars.', 'People will travels to Mars.', 'People will travel to Mars.', 'People will travelling to Mars.'], 2, 'Will + V nguyên thể: will travel.'),
  ]),

  M(23, 'My future house (2): Appliances & rooms', [
    Q('"Fridge" / "Refrigerator" là?', ['Máy giặt', 'Lò vi sóng', 'Tủ lạnh', 'Máy sấy'], 2, 'Fridge = tủ lạnh.'),
    Q('"Washing machine" là?', ['Máy hút bụi', 'Lò nướng', 'Máy giặt', 'Bàn ủi'], 2, 'Washing machine = máy giặt.'),
    Q('"Air conditioner" là?', ['Máy điều hoà', 'Máy sưởi', 'Máy lọc nước', 'Quạt điện (Electric fan)'], 0, 'Air conditioner (AC) = máy điều hoà.'),
    Q('Điền: "Future kitchens ___ have robot cooks."', ['do (không dùng để chỉ tương lai)', 'will', 'won\'t (phủ định, ngược nghĩa câu dự đoán tích cực)', 'are (cần V-ing theo sau)'], 1, 'Dự đoán → will.'),
    Q('"Microwave" là?', ['Lò vi sóng', 'Bếp ga', 'Tủ lạnh', 'Máy nướng bánh mì'], 0, 'Microwave (oven) = lò vi sóng.'),
    Q('Câu hỏi: "What ___ houses look like in 2100?"', ['will', 'are (cần V-ing theo sau, không phải V nguyên)', 'do (chỉ dùng cho hiện tại đơn)', 'does (chỉ dùng cho ngôi 3 số ít hiện tại đơn)'], 0, '"Sẽ trông như thế nào" → will look.'),
  ]),

  M(24, 'Possessive pronouns', [
    Q('"This book is ___." (của tôi)', ['my (tính từ sở hữu, cần đi với danh từ)', 'mine', 'I (đại từ chủ ngữ, không chỉ sở hữu)', 'me (đại từ tân ngữ, không chỉ sở hữu)'], 1, 'Possessive pronoun: mine = của tôi (đứng một mình).'),
    Q('Đại từ sở hữu của "you" là?', ['you (đại từ chủ ngữ/tân ngữ)', 'yourself', 'your (tính từ sở hữu, cần đi với danh từ)', 'yours'], 3, 'You → your (adj) → yours (pronoun).'),
    Q('Khác biệt "my" và "mine":', ['Cả hai đều dùng được', 'My đứng một mình; Mine + N', 'Giống hệt nhau', 'My + N; Mine đứng một mình'], 3, 'My book / The book is mine.'),
    Q('"That car is ___." (của họ)', ['them (đại từ tân ngữ, không chỉ sở hữu)', 'they (đại từ chủ ngữ, không chỉ sở hữu)', 'theirs', 'their (tính từ sở hữu, cần đi với danh từ)'], 2, 'Their + N / theirs đứng riêng.'),
    Q('Điền: "These keys are ___, not ___." (của cô ấy, của tôi)', ['she / I', 'her / my', 'hers / mine', 'her / mine'], 2, 'Đứng cuối câu: hers, mine.'),
    Q('Đại từ sở hữu của "he":', ['he\'s (viết tắt của he is/he has)', 'himself', 'him (đại từ tân ngữ, không chỉ sở hữu)', 'his'], 3, 'His vừa là adj sở hữu vừa là pronoun sở hữu: his book / The book is his.'),
  ]),

  M(25, 'Television (1): TV programmes', [
    Q('"Cartoon" là loại chương trình gì?', ['Tin tức', 'Phim tài liệu', 'Game show', 'Phim hoạt hình'], 3, 'Cartoon = phim hoạt hình.'),
    Q('"News" là?', ['Bản tin', 'Quảng cáo', 'Trò chơi', 'Phim truyện'], 0, 'News = tin tức.'),
    Q('"Documentary" là?', ['Phim hài', 'Phim kinh dị', 'Phim tài liệu', 'Hoạt hình'], 2, 'Documentary = phim tài liệu.'),
    Q('"Game show" là?', ['Phim hoạt hình', 'Phim truyện', 'Quảng cáo', 'Trò chơi truyền hình'], 3, 'Game show = trò chơi truyền hình.'),
    Q('"Weather forecast" là?', ['Phim truyện (Movie/Film)', 'Quảng cáo', 'Dự báo thời tiết', 'Bản tin thể thao'], 2, 'Weather forecast = dự báo thời tiết.'),
    Q('Chọn câu ĐÚNG: "My favourite ___ is Tom and Jerry."', ['a cartoon', 'the cartoons', 'cartoons', 'cartoon'], 3, 'Favourite + N số ít: favourite cartoon.'),
  ]),

  M(26, 'Television (2): Conjunctions (and, but, so, because)', [
    Q('"And" có nghĩa là?', ['Nhưng (But)', 'Và', 'Nên (So)', 'Vì (Because)'], 1, 'And = và (thêm thông tin cùng chiều).'),
    Q('"But" có nghĩa là?', ['Vì (Because)', 'Nên (So)', 'Và (And)', 'Nhưng'], 3, 'But = nhưng (tương phản).'),
    Q('Điền: "I like Music ___ I don\'t like Maths."', ['because', 'and (thêm thông tin cùng chiều)', 'but', 'so (chỉ kết quả, không chỉ tương phản)'], 2, 'Hai vế trái ngược → but.'),
    Q('Điền: "It was raining, ___ we stayed at home."', ['so', 'because', 'and (chỉ thêm thông tin, không chỉ kết quả)', 'but (chỉ tương phản, không chỉ kết quả)'], 0, 'So = nên (chỉ kết quả).'),
    Q('Điền: "I stayed at home ___ it was raining."', ['because', 'but (chỉ tương phản, không chỉ lý do)', 'so (chỉ kết quả, không chỉ lý do)', 'and (chỉ thêm thông tin, không chỉ lý do)'], 0, 'Because = vì (chỉ nguyên nhân).'),
    Q('Phân biệt "so" và "because":', ['Cả hai đều chỉ nguyên nhân', 'Because + kết quả; So + nguyên nhân', 'Giống hệt nhau', 'So + kết quả; Because + nguyên nhân'], 3, 'It rained, SO we stayed home / We stayed home BECAUSE it rained.'),
  ]),

  M(27, 'Past simple: Regular verbs', [
    Q('Quy tắc thêm "-ed" cho động từ thường:', ['Thêm -ed cho mọi ngôi', 'Thêm -es cho mọi ngôi', 'Chỉ thêm -ed cho ngôi 3', 'Đổi V thành V-ing'], 0, 'Past simple regular: V + ed cho tất cả các ngôi.'),
    Q('Quá khứ của "play":', ['plaied', 'played', 'plaing', 'plaies'], 1, 'Play + ed = played.'),
    Q('Quá khứ của "study":', ['studyed', 'studyd', 'studied', 'studyied'], 2, 'Phụ âm + y → ied: studied.'),
    Q('Quá khứ của "stop":', ['stops (hiện tại đơn ngôi 3, không phải quá khứ)', 'stoping', 'stopped', 'stoped'], 2, 'Nguyên âm ngắn + phụ âm → gấp đôi: stopped.'),
    Q('Phủ định: "She ___ go to school yesterday."', ['don\'t (hiện tại đơn ngôi I/you/we/they)', 'doesn\'t', 'didn\'t', 'wasn\'t'], 2, 'Past simple phủ định: didn\'t + V (nguyên thể).'),
    Q('Câu hỏi: "___ you visit Grandma last weekend?"', ['Were (dùng với to be quá khứ + chủ ngữ số nhiều)', 'Did', 'Do (dùng với hiện tại đơn)', 'Was (dùng với to be quá khứ + chủ ngữ số ít)'], 1, 'Past simple câu hỏi: Did + S + V?'),
  ]),

  M(28, 'Past simple: Irregular verbs', [
    Q('Quá khứ của "go":', ['gone (quá khứ phân từ V3, không phải V2)', 'goed (sai — go là động từ bất quy tắc)', 'goes (ngôi 3 số ít hiện tại đơn)', 'went'], 3, 'Go → went → gone.'),
    Q('Quá khứ của "see":', ['saw', 'sees (ngôi 3 số ít hiện tại đơn)', 'seed (sai — see là động từ bất quy tắc)', 'seen (quá khứ phân từ V3, không phải V2)'], 0, 'See → saw → seen.'),
    Q('Quá khứ của "have":', ['haved (sai — have là động từ bất quy tắc)', 'has (ngôi 3 số ít hiện tại đơn)', 'having', 'had'], 3, 'Have → had.'),
    Q('Quá khứ của "be" với "I":', ['was', 'am (hiện tại đơn, không phải quá khứ)', 'been (quá khứ phân từ V3)', 'were (dùng với you/we/they)'], 0, 'I / he / she / it → was.'),
    Q('Điền: "They ___ to the zoo last Sunday."', ['going (V-ing, cần to be đi kèm)', 'go (hiện tại đơn, không hợp với last Sunday)', 'went', 'goes (ngôi 3 số ít hiện tại đơn)'], 2, 'Last Sunday → quá khứ → went.'),
    Q('Trạng từ nào báo hiệu past simple?', ['now (báo hiệu hiện tại tiếp diễn)', 'yesterday', 'tomorrow', 'every day'], 1, 'Yesterday / last week / ago → past simple.'),
  ]),

  M(29, 'Sports and games (1): Vocabulary', [
    Q('"Football" trong tiếng Anh-Anh nghĩa là?', ['Bóng bầu dục', 'Bóng rổ', 'Bóng chuyền', 'Bóng đá'], 3, 'Football (BrE) = bóng đá (= soccer trong AmE).'),
    Q('"Swimming" là?', ['Chạy bộ', 'Bơi lội', 'Đạp xe', 'Đi bộ (Walking)'], 1, 'Swim → swimming = bơi.'),
    Q('"Badminton" là?', ['Bóng bàn', 'Quần vợt', 'Cầu lông', 'Bóng rổ'], 2, 'Badminton = cầu lông.'),
    Q('Chọn động từ: "We ___ football at the weekend."', ['play', 'do (dùng cho yoga/karate, không cho bóng đá)', 'make (làm/tạo ra, không dùng cho thể thao)', 'go (dùng cho môn V-ing như swimming/fishing)'], 0, 'Play + môn thể thao có bóng / đối kháng.'),
    Q('Chọn động từ: "I ___ swimming every Sunday."', ['make (làm/tạo ra, không dùng cho thể thao)', 'play (dùng cho môn có bóng/đối kháng)', 'do (dùng cho yoga/karate/aerobics)', 'go'], 3, 'Go + V-ing (môn thể thao kết thúc -ing): go swimming, go fishing.'),
    Q('"Yoga" và "karate" thường đi với động từ?', ['do', 'play (dùng cho môn có bóng/đối kháng)', 'make (làm/tạo ra, không dùng cho thể thao)', 'go (dùng cho môn V-ing như swimming)'], 0, 'Do + yoga / karate / aerobics.'),
  ]),

  M(30, 'Sports and games (2): Like + V-ing', [
    Q('Cấu trúc "thích làm gì":', ['like + to V', 'like + V-ed', 'like + V', 'like + V-ing'], 3, 'Like / love / hate / enjoy + V-ing.'),
    Q('Điền: "I love ___ (play) football."', ['to playing', 'played', 'playing', 'play (động từ nguyên, thiếu -ing)'], 2, 'Love + V-ing: playing.'),
    Q('Câu nào ĐÚNG?', ['She enjoys to swim.', 'She enjoys swim.', 'She enjoys swimming.', 'She enjoys swims.'], 2, 'Enjoy + V-ing: swimming.'),
    Q('"He hates ___ (get) up early."', ['get (nguyên thể, thiếu -ing sau hate)', 'getting', 'got (quá khứ, không hợp sau hate)', 'to getting'], 1, 'Hate + V-ing: getting up.'),
    Q('Phủ định: "I don\'t like ___ (do) homework."', ['do (nguyên thể, thiếu -ing)', 'doing', 'did (quá khứ, không hợp sau like)', 'to do (to-infinitive, không phải V-ing)'], 1, 'Like + V-ing: doing.'),
    Q('Đồng nghĩa với "I love football":', ['I dislike football.', 'I never play football.', 'I hate football.', 'I really like football.'], 3, 'Love ≈ really like.'),
  ]),

  M(31, 'Adverbs of frequency', [
    Q('Trạng từ tần suất cao nhất:', ['always', 'often (thường xuyên, dưới mức always)', 'sometimes', 'never (không bao giờ, mức 0%)'], 0, 'Always (100%) > usually > often > sometimes > rarely > never.'),
    Q('"Never" nghĩa là?', ['Luôn luôn', 'Thỉnh thoảng', 'Thường xuyên', 'Không bao giờ'], 3, 'Never = không bao giờ (0%).'),
    Q('Vị trí của adverb of frequency với động từ thường:', ['Cuối câu', 'Đầu câu', 'Sau V chính', 'Trước V chính'], 3, 'I ALWAYS go to school early. (trước V chính)'),
    Q('Vị trí với "be":', ['Đầu câu', 'Cuối câu', 'Trước be', 'Sau be'], 3, 'She IS often late. (sau be)'),
    Q('Câu nào ĐÚNG?', ['Always she goes to school by bike.', 'She always goes to school by bike.', 'She goes always to school by bike.', 'She goes to school always by bike.'], 1, 'Trạng từ tần suất đứng trước động từ thường.'),
    Q('"How often" hỏi về?', ['Khi nào', 'Ở đâu (Where)', 'Bao xa', 'Bao lâu một lần'], 3, 'How often = mức độ thường xuyên.'),
  ]),

  M(32, 'Cities of the world: Nationalities', [
    Q('Người đến từ "Japan" gọi là?', ['Japanish', 'Japaner', 'Japanese', 'Japan (tên quốc gia, không phải quốc tịch)'], 2, 'Japan → Japanese.'),
    Q('"Vietnam" → quốc tịch:', ['Vietnamian', 'Vietnamish', 'Vietnam', 'Vietnamese'], 3, 'Vietnam → Vietnamese.'),
    Q('"France" → quốc tịch:', ['Francaise', 'Franch', 'French', 'Frenchman'], 2, 'France → French.'),
    Q('"England" → quốc tịch:', ['British only', 'Englandish', 'English', 'Englander'], 2, 'England → English.'),
    Q('"China" → quốc tịch:', ['Chiner', 'Chinish', 'Chinan', 'Chinese'], 3, 'China → Chinese.'),
    Q('Cấu trúc giới thiệu quốc tịch: "I ___ Vietnamese."', ['am', 'is (dùng cho ngôi 3 số ít he/she/it)', 'do (trợ động từ, không phải to be)', 'are (dùng cho you/we/they)'], 0, 'I + am + nationality.'),
  ]),

  M(33, 'Present perfect (intro): Have/Has been to', [
    Q('Cấu trúc Present perfect:', ['S + will + have + V', 'S + have/has + V (nguyên thể)', 'S + have/has + V3/ed', 'S + had + V3'], 2, 'Have/Has + past participle (V3).'),
    Q('Điền: "She ___ been to Hanoi twice."', ['was (quá khứ to be, không phải hoàn thành)', 'is (hiện tại đơn, không phải hoàn thành)', 'have (dùng cho I/you/we/they)', 'has'], 3, 'She → has.'),
    Q('"Have you ever ___ to Paris?"', ['was (quá khứ to be, không phải V3)', 'been', 'being (V-ing, không phải V3)', 'be (nguyên thể, không phải V3)'], 1, 'Have + V3: been.'),
    Q('"I ___ never ___ to Korea."', ['have / been', 'was / be', 'am / be', 'has / been'], 0, 'I + have + never + been to.'),
    Q('Trạng từ nào hợp với present perfect?', ['now (báo hiệu hiện tại tiếp diễn)', 'ever / never / already', 'two days ago', 'yesterday'], 1, 'Ever / never / already / yet / since / for → present perfect.'),
    Q('Khác biệt "have been to" vs "have gone to":', ['Cả hai đều = đang ở đó', 'Been to = đã đi và đã về; Gone to = đã đi và còn ở đó', 'Giống hệt nhau', 'Ngược lại'], 1, 'Been to = đã từng đến và quay về; Gone to = đã đi và chưa về.'),
  ]),

  M(34, 'Our houses in the future: May / Might', [
    Q('"May" và "might" diễn tả?', ['Sự chắc chắn 100%', 'Khả năng / có thể (không chắc)', 'Bắt buộc', 'Cấm đoán'], 1, 'May / might = có thể (mức độ chắc chắn ~50%).'),
    Q('Sau may / might dùng động từ ở dạng?', ['V-ing (chỉ dùng sau enjoy/like/hate)', 'V nguyên thể (không to)', 'to + V', 'V-ed (chỉ dùng trong thì quá khứ)'], 1, 'Modal + V (bare infinitive).'),
    Q('Câu nào ĐÚNG?', ['It may rains tomorrow.', 'It may rain tomorrow.', 'It may to rain tomorrow.', 'It mays rain tomorrow.'], 1, 'May + V nguyên thể, không -s, không "to".'),
    Q('Điền: "We ___ have flying cars in 2050."', ['might', 'won\'t (phủ định, ngược nghĩa dự đoán tích cực)', 'should', 'must (chắc chắn, không phải dự đoán)'], 0, 'Dự đoán tương lai không chắc chắn → might.'),
    Q('So sánh "will" và "might":', ['Might mạnh hơn will', 'Giống hệt nhau', 'Will = quá khứ; Might = tương lai', 'Will mạnh hơn (chắc chắn) – Might yếu hơn (có thể)'], 3, 'Will = dự đoán chắc; might = chỉ là khả năng.'),
    Q('Phủ định "may not" có nghĩa?', ['Không được phép tuyệt đối', 'Có thể không', 'Bắt buộc không', 'Chắc chắn không'], 1, 'May not = có thể không (chứ không phải cấm).'),
  ]),

  M(35, 'Robots: Can / Could (ability & requests)', [
    Q('"Can" diễn tả?', ['Quá khứ xa', 'Bắt buộc', 'Lời khuyên', 'Khả năng / sự cho phép'], 3, 'Can = có thể (khả năng / xin phép).'),
    Q('"Could" là dạng quá khứ của?', ['should', 'can', 'will (tương lai, không có dạng quá khứ)', 'must (chỉ bắt buộc, không có dạng quá khứ)'], 1, 'Could = quá khứ / nhã nhặn hơn của can.'),
    Q('Điền: "Robots ___ do many things in the future."', ['caned (sai — can không có dạng -ed)', 'can', 'to can', 'cans (sai — modal verb không thêm -s)'], 1, 'Can + V nguyên thể; can không thêm -s.'),
    Q('Yêu cầu lịch sự: "___ you help me, please?"', ['Can (đúng nhưng kém lịch sự hơn could)', 'Cả hai đều được, Could lịch sự hơn', 'Could (đúng nhưng can cũng được dùng)', 'Must (chỉ bắt buộc, không phải yêu cầu lịch sự)'], 1, 'Could you... lịch sự hơn Can you... .'),
    Q('Phủ định "cannot" viết tắt là?', ['ca\'nt (sai vị trí dấu lược)', 'cann\'t', 'cant (thiếu dấu lược)', 'can\'t'], 3, 'Cannot = can\'t.'),
    Q('Câu nào ĐÚNG?', ['She cans sing well.', 'She can to sing well.', 'She can sings well.', 'She can sing well.'], 3, 'Can + V (bare infinitive), không -s, không "to".'),
  ]),

  M(36, 'Review HK2', [
    Q('Câu điều kiện loại 1: "If we ___ trees, the air ___ cleaner."', ['planted / would be', 'will plant / is', 'plant / is', 'plant / will be'], 3, 'If + present simple, will + V.'),
    Q('"I have ___ been to Singapore." (chưa từng)', ['already', 'yet (chưa, dùng trong câu phủ định cuối)', 'ever (đã từng, dùng trong câu hỏi)', 'never'], 3, 'Never = chưa bao giờ.'),
    Q('Quá khứ của "buy":', ['buy (nguyên thể, không phải quá khứ)', 'buyed (sai — buy là động từ bất quy tắc)', 'bought', 'buying'], 2, 'Buy → bought (irregular).'),
    Q('"I enjoy ___ comic books." (đọc)', ['read (nguyên thể, thiếu -ing sau enjoy)', 'to read', 'reads (ngôi 3 số ít hiện tại đơn)', 'reading'], 3, 'Enjoy + V-ing.'),
    Q('Vị trí trạng từ: "She ___ goes to bed late."', ['go never', 'never to', 'goes never', 'never'], 3, 'Adv tần suất trước V chính: She never goes to bed late.'),
    Q('"My grandfather is ___." (người Việt Nam)', ['Vietnamish', 'Viet (tên rút gọn, không phải quốc tịch chính thức)', 'Vietnamese', 'Vietnam'], 2, 'Quốc tịch: Vietnamese.'),
    Q('"You ___ touch that wire — it\'s dangerous!" (cấm)', ['can (có thể, không mang nghĩa cấm)', 'must (bắt buộc, ngược nghĩa với cấm)', 'mustn\'t', 'should'], 2, 'Mustn\'t = cấm tuyệt đối.'),
    Q('Tương lai dự đoán không chắc: "It ___ snow tonight."', ['might', 'should', 'will surely', 'must (chắc chắn, không phải dự đoán không chắc)'], 0, 'Might = có thể (không chắc).'),
  ]),
];

export const S6TA_SCENARIOS = indexBy(S6TA_WEEKS);
