// ============================================================
// Lớp 4 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018: Global Success / Family and Friends / iLearn 4.
// ID prefix: "P4TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P4TA', 'tieng-anh', n, title, qs, opts);

export const P4TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'My family and friends', [
    Q('"Brother" tiếng Việt là?', ['Chị gái', 'Em gái', 'Anh/Em trai', 'Ông nội (Grandfather)'], 2, 'Brother = anh trai hoặc em trai.'),
    Q('"Sister" có nghĩa là?', ['Mẹ (Mother)', 'Anh trai', 'Chị/Em gái', 'Cô/Dì (Aunt)'], 2, 'Sister = chị gái hoặc em gái.'),
    Q('"This is my ___." Bố em — chọn từ?', ['friend', 'father', 'mother', 'sister'], 1, 'Father = bố/cha.'),
    Q('"My friend" có nghĩa là?', ['Hàng xóm', 'Em họ (Cousin)', 'Bạn của tôi', 'Anh trai'], 2, 'My friend = bạn của tôi.'),
    Q('Hỏi: "Who is she?" — đáp:', ['He is my dad', 'She is my sister', 'I am Lan', 'It is a book'], 1, 'Chủ ngữ "she" → "She is my sister".'),
    Q('Số nhiều của "friend" là?', ['friend', 'friends', 'friendes', 'frienz'], 1, 'Danh từ đếm được thêm -s: friends.'),
  ]),

  M(2, 'Days of the week', [
    Q('"Monday" là thứ mấy?', ['Thứ hai', 'Chủ nhật', 'Thứ ba', 'Thứ tư'], 0, 'Monday = thứ hai.'),
    Q('"Friday" là thứ mấy?', ['Chủ nhật', 'Thứ bảy', 'Thứ năm', 'Thứ sáu'], 3, 'Friday = thứ sáu.'),
    Q('Cuối tuần (weekend) gồm những ngày nào?', ['Wed & Thu', 'Fri & Mon', 'Sat & Sun', 'Mon & Tue'], 2, 'Weekend = Saturday + Sunday.'),
    Q('Sắp đúng: Tuesday, ___, Thursday', ['Friday', 'Wednesday', 'Sunday', 'Monday'], 1, 'Thứ 3 – thứ 4 – thứ 5: Tue – Wed – Thu.'),
    Q('"What day is it today?" hỏi gì?', ['Mấy giờ rồi', 'Hôm nay thứ mấy', 'Hôm nay ngày bao nhiêu', 'Thời tiết thế nào'], 1, 'What day is it today? = Hôm nay (là) thứ mấy?'),
    Q('Trả lời: "It\'s ___ today." (thứ bảy)', ['saturday', 'a Saturday', 'the Saturday', 'Saturday'], 3, 'Thứ trong tuần luôn viết hoa chữ đầu: Saturday.'),
  ]),

  M(3, 'What do you do on...?', [
    Q('"What do you do on Sunday?" hỏi gì?', ['Bạn tên gì?', 'Bạn ở đâu?', 'Chủ nhật bạn làm gì?', 'Bạn bao nhiêu tuổi?'], 2, 'Hỏi hoạt động thường làm vào ngày đó.'),
    Q('"I go to school" có nghĩa là?', ['Tôi ở nhà', 'Tôi ngủ', 'Tôi đi học', 'Tôi đi chơi'], 2, 'Go to school = đi học.'),
    Q('Chia động từ: "She ___ TV in the evening."', ['watch (sai vì She cần thêm -es)', 'watched', 'watching', 'watches'], 3, 'Ngôi thứ 3 số ít, hiện tại đơn: watches.'),
    Q('"On Monday, I have ___" (môn Toán):', ['Music (Âm nhạc)', 'Art (Mỹ thuật)', 'English', 'Maths'], 3, 'Maths = Toán.'),
    Q('"Play football" có nghĩa là?', ['Nấu ăn', 'Bơi lội (swim)', 'Đá bóng', 'Đọc sách'], 2, 'Play football = chơi/đá bóng.'),
    Q('Trả lời "What do you do on Saturday?":', ['I play with my friends', 'It is hot', 'Yes, I do', 'I am Lan'], 0, 'Hỏi hoạt động → trả lời bằng động từ chỉ hoạt động.'),
  ]),

  M(4, "When's your birthday?", [
    Q('"When\'s your birthday?" hỏi gì?', ['Bạn bao nhiêu tuổi?', 'Sinh nhật bạn khi nào?', 'Bạn tên gì?', 'Bạn ở đâu?'], 1, "When's = When is — hỏi thời gian sinh nhật."),
    Q('Tháng 1 tiếng Anh là?', ['January', 'June (tháng 6)', 'March (tháng 3)', 'July (tháng 7)'], 0, 'January = tháng 1.'),
    Q('"My birthday is ___ May." (vào tháng 5)', ['in', 'at (chỉ dùng với giờ)', 'on (chỉ dùng với thứ/ngày)', 'to (chỉ hướng, không dùng cho tháng)'], 0, 'Với THÁNG dùng "in": in May.'),
    Q('"December" là tháng?', ['Tháng 9', 'Tháng 12', 'Tháng 10', 'Tháng 11'], 1, 'December = tháng 12.'),
    Q('"It\'s on the 2nd of September" — sinh nhật vào?', ['1/9', '20/9', '2/9', '2/10'], 2, '2nd of September = ngày 2 tháng 9.'),
    Q('Trả lời "How old are you?" (9 tuổi):', ['My age is 9 (dịch từng chữ từ tiếng Việt)', 'I have 9', 'I am 9 years old', 'I am 9 year'], 2, 'Cấu trúc: I am + số + years old.'),
  ]),

  M(5, 'Can you swim?', [
    Q('"Can you swim?" hỏi gì?', ['Bạn có biết bơi không?', 'Bạn ở đâu?', 'Bạn có đói không?', 'Bạn bao nhiêu tuổi?'], 0, 'Can = có thể (khả năng).'),
    Q('Trả lời khẳng định "Can you sing?"', ['Yes, I can', 'No, I am', 'I sing', 'Yes, I do'], 0, 'Yes, I can / No, I can\'t.'),
    Q('"I can\'t ride a bike" có nghĩa là?', ['Tôi không biết đi xe đạp', 'Tôi biết đi xe đạp', 'Tôi thích xe đạp', 'Tôi có xe đạp'], 0, "can't = cannot = không thể."),
    Q('"Dance" có nghĩa là?', ['Hát (sing)', 'Nhảy múa', 'Đọc sách (read)', 'Vẽ tranh (draw)'], 1, 'Dance = nhảy múa.'),
    Q('Sau "can" động từ ở dạng?', ['V-ed (quá khứ)', 'nguyên thể (V)', 'V-ing (tiếp diễn)', 'V-s (ngôi 3 số ít)'], 1, 'Can + V (nguyên thể, không to).'),
    Q('Chọn câu đúng:', ['She can swim', 'She can swims', 'She cans swim', 'She is can swim'], 0, 'Can + V nguyên thể, không thêm -s.'),
  ]),

  M(6, "Where's your school?", [
    Q('"Where\'s your school?" hỏi gì?', ['Trường bạn ở đâu?', 'Bạn học lớp mấy?', 'Trường bạn lớn không?', 'Trường bạn tên gì?'], 0, "Where = ở đâu."),
    Q('"My school is on ___ Street."', ['in (chỉ dùng với thành phố/nước)', 'at (chỉ dùng với địa chỉ số nhà)', 'on', 'to (chỉ hướng đến)'], 2, 'Với tên đường dùng "on": on Le Loi Street.'),
    Q('"It\'s in the city" có nghĩa là?', ['Ở biển', 'Ở nông thôn', 'Ở trên núi', 'Ở trong thành phố'], 3, 'City = thành phố.'),
    Q('Trả lời "What\'s the name of your school?":', ['It\'s big', 'I go to school', 'Yes, I do', 'It\'s Le Loi Primary School'], 3, 'Hỏi TÊN → trả lời bằng danh từ riêng.'),
    Q('"Class 4A" có nghĩa là?', ['Tuần 4', 'Tầng 4', 'Lớp 4A', 'Trường 4A'], 2, 'Class 4A = lớp 4A.'),
    Q('"My classroom is on the ___ floor." (tầng 2)', ['one (số đếm, không dùng cho tầng)', 'two (số đếm, không dùng cho tầng)', 'second', 'first (tầng 1, không phải tầng 2)'], 2, 'Tầng dùng số thứ tự: second floor.'),
  ]),

  M(7, 'What do you like doing?', [
    Q('"What do you like doing?" hỏi gì?', ['Bạn đang làm gì?', 'Bạn tên gì?', 'Bạn có khoẻ không?', 'Bạn thích làm gì?'], 3, 'Hỏi sở thích về hoạt động.'),
    Q('Sau "like" động từ ở dạng?', ['V-s (ngôi 3 số ít)', 'V-ing', 'V-ed (quá khứ)', 'V (nguyên thể)'], 1, 'Like + V-ing (sở thích): I like reading.'),
    Q('"I like reading books." có nghĩa là?', ['Tôi đang đọc sách', 'Tôi mua sách', 'Tôi có sách', 'Tôi thích đọc sách'], 3, 'Like reading = thích đọc.'),
    Q('"Cooking" có nghĩa là?', ['Đọc sách (reading)', 'Hát (singing)', 'Nấu ăn', 'Vẽ tranh (drawing)'], 2, 'Cook = nấu, cooking = (việc) nấu ăn.'),
    Q('Chọn câu đúng:', ['I likes swim', 'I like swim', 'I like swimming', 'I like to swims'], 2, 'Like + V-ing: swimming.'),
    Q('"Drawing" có nghĩa là?', ['Hát (singing)', 'Vẽ', 'Nhảy múa (dancing)', 'Đọc sách'], 1, 'Draw = vẽ → drawing.'),
  ]),

  M(8, "What's your favourite food?", [
    Q('"Favourite" có nghĩa là?', ['Yêu thích nhất', 'Ghét nhất', 'Khó nhất (most difficult)', 'Bình thường'], 0, 'Favourite = (ưa) thích nhất.'),
    Q('"Rice" có nghĩa là?', ['Cháo (porridge)', 'Bánh mì', 'Mì (noodles)', 'Cơm/Gạo'], 3, 'Rice = cơm/gạo.'),
    Q('"Bread" có nghĩa là?', ['Bún (rice noodles)', 'Bánh mì', 'Cơm (rice)', 'Phở (pho/beef noodle soup)'], 1, 'Bread = bánh mì.'),
    Q('Trả lời "What\'s your favourite food?":', ['I like', 'I am hungry', 'It\'s big', 'It\'s chicken'], 3, 'Hỏi món ăn ưa thích → tên món: chicken.'),
    Q('"I\'d like ___ apple." (một quả táo)', ['an', 'some (chỉ dùng với số nhiều/không đếm)', 'a (chỉ dùng trước phụ âm)', 'the (chỉ vật xác định)'], 0, 'apple bắt đầu bằng nguyên âm → an apple.'),
    Q('"Noodles" có nghĩa là?', ['Chè (sweet soup/tea)', 'Cơm (rice)', 'Bánh ngọt (cake)', 'Mì'], 3, 'Noodles = mì/bún.'),
  ]),

  M(9, 'At the zoo', [
    Q('"Zoo" có nghĩa là?', ['Sân bay', 'Công viên', 'Bệnh viện', 'Sở thú'], 3, 'Zoo = sở thú/vườn thú.'),
    Q('"Elephant" là con gì?', ['Hổ (tiger)', 'Khỉ (monkey)', 'Sư tử (lion)', 'Voi'], 3, 'Elephant = voi.'),
    Q('"Monkey" là con gì?', ['Báo (leopard)', 'Hươu cao cổ (giraffe)', 'Khỉ', 'Gấu (bear)'], 2, 'Monkey = khỉ.'),
    Q('"The tiger can ___ very fast." (chạy)', ['run', 'fly (bay, dành cho chim)', 'swim (bơi, dành cho cá)', 'sing (hát, dành cho chim)'], 0, 'Tiger (hổ) chạy nhanh: run.'),
    Q('"Look at the ___!" — con vật trong tranh là sư tử:', ['fish (cá)', 'lion', 'duck (vịt)', 'cow (bò)'], 1, 'Lion = sư tử.'),
    Q('Số nhiều "elephant" là?', ['elephant', 'elephanties', 'elephants', 'elephantes'], 2, 'Thêm -s: elephants.'),
  ]),

  M(10, "What's the weather like?", [
    Q('"What\'s the weather like?" hỏi gì?', ['Bạn thích gì?', 'Hôm nay thứ mấy?', 'Thời tiết thế nào?', 'Bạn mấy tuổi?'], 2, 'Weather = thời tiết.'),
    Q('"It\'s sunny" có nghĩa là?', ['Trời mưa', 'Trời lạnh', 'Trời gió', 'Trời nắng'], 3, 'Sunny = có nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có mưa', 'Nóng (hot/nắng nóng)', 'Có gió', 'Có tuyết'], 0, 'Rain = mưa → rainy = có mưa.'),
    Q('"It\'s ___ in winter." (lạnh)', ['cool (mát, dùng cho mùa thu)', 'cold', 'warm (ấm, dùng cho mùa xuân)', 'hot (nóng, dùng cho mùa hè)'], 1, 'Mùa đông lạnh: cold.'),
    Q('"Windy" có nghĩa là?', ['Có mây', 'Có nắng (sunny)', 'Có gió', 'Sương mù'], 2, 'Wind = gió → windy.'),
    Q('Mùa hè ở Việt Nam thường?', ['cold and snowy', 'cool and windy', 'foggy (có sương mù, dành cho mùa đông)', 'hot and sunny'], 3, 'Hè VN nóng và nắng.'),
  ]),

  M(11, 'How much is it?', [
    Q('"How much is it?" hỏi gì?', ['Cái này bao nhiêu tiền?', 'Bạn có gì?', 'Cái này của ai?', 'Cái này là gì?'], 0, 'How much = bao nhiêu (giá).'),
    Q('"It\'s 20,000 dong" có nghĩa là?', ['200.000 đồng', '20.000 đồng', '20 đồng', '2.000 đồng'], 1, '20,000 dong = 20.000 đồng.'),
    Q('"I\'d like a ___ of milk." (một cốc)', ['glass', 'piece (miếng, dùng cho bánh)', 'bottle', 'kilo (cân, dùng cho thịt/gạo)'], 0, 'A glass of milk = một cốc/ly sữa.'),
    Q('"A kilo of beef" có nghĩa là?', ['Một hộp bò', 'Một cân thịt bò', 'Một con bò', 'Một lát thịt'], 1, 'Kilo = ki-lô-gam.'),
    Q('Hỏi giá lịch sự:', ['How much is it?', 'What is it?', 'Who is it?', 'Where is it?'], 0, 'How much is it? = Giá bao nhiêu?'),
    Q('Đáp: "How much are these apples?"', ['I like apples', 'Yes, I do', 'They are 30,000 dong', 'It is red'], 2, 'Chủ ngữ số nhiều → "They are".'),
  ]),

  M(12, 'What time is it?', [
    Q('"What time is it?" hỏi gì?', ['Hôm nay thứ mấy?', 'Bạn ở đâu?', 'Mấy giờ rồi?', 'Bạn tên gì?'], 2, 'Hỏi giờ.'),
    Q('"It\'s seven o\'clock" có nghĩa là?', ['7 giờ rưỡi', '7 phút', '7 giờ đúng', '17 giờ'], 2, "o'clock = giờ đúng."),
    Q('"Half past six" là?', ['6:45', '6:30', '6:00', '6:15'], 1, 'Half past = qua nửa giờ → 6:30.'),
    Q('"A quarter past nine" là?', ['9:00', '9:30', '9:15', '9:45'], 2, 'A quarter past = qua 15 phút → 9:15.'),
    Q('"I get up at 6 ___" (vào lúc 6 giờ)', ['in (chỉ dùng với tháng/năm)', 'on (chỉ dùng với thứ/ngày)', 'to (chỉ hướng, không dùng cho giờ)', 'at'], 3, 'Với giờ dùng "at": at 6.'),
    Q('"It\'s twelve o\'clock" — buổi trưa em ăn?', ['lunch', 'snack (bữa phụ buổi xế chiều)', 'dinner', 'breakfast'], 0, '12h trưa → lunch.'),
  ]),

  M(13, 'Free time activities', [
    Q('"Free time" có nghĩa là?', ['Giờ học', 'Giờ ngủ', 'Giờ ăn', 'Thời gian rảnh'], 3, 'Free time = thời gian rảnh rỗi.'),
    Q('"What do you do in your free time?" trả lời:', ['I read books', 'Yes, I do', 'It is hot', 'I sleep all day'], 0, 'Kể hoạt động yêu thích.'),
    Q('"Listen to music" có nghĩa là?', ['Đọc sách', 'Xem TV', 'Nghe nhạc', 'Vẽ tranh'], 2, 'Listen to music = nghe nhạc.'),
    Q('"Watch cartoons" có nghĩa là?', ['Đi bơi', 'Xem bóng đá', 'Đọc truyện', 'Xem phim hoạt hình'], 3, 'Cartoons = phim hoạt hình.'),
    Q('Chia: "He ___ to music every day."', ['listens', 'listen', 'listened', 'listening'], 0, 'He + V-s: listens.'),
    Q('"Play chess" có nghĩa là?', ['Bơi (swim)', 'Đá bóng', 'Đánh cờ', 'Hát (sing)'], 2, 'Chess = (môn) cờ.'),
  ]),

  M(14, 'Hobbies', [
    Q('"Hobby" có nghĩa là?', ['Sở thích', 'Lớp học', 'Nghề nghiệp', 'Trường học'], 0, 'Hobby = sở thích.'),
    Q('"My hobby is ___ stamps." (sưu tầm)', ['collecting', 'collects', 'collected', 'collect'], 0, 'Sau "is" trong cấu trúc hobby thường dùng V-ing.'),
    Q('"Painting" có nghĩa là?', ['Hát (singing)', 'Nấu ăn', 'Vẽ tranh/Sơn', 'Bơi (swimming)'], 2, 'Paint = vẽ tranh / sơn.'),
    Q('"What\'s your hobby?" trả lời:', ['My hobby is reading', 'I am 9', 'On Monday', 'Yes, I do'], 0, 'Trả lời hobby bằng V-ing.'),
    Q('"Gardening" có nghĩa là?', ['Câu cá', 'Nấu ăn', 'Đi bộ (walking)', 'Làm vườn'], 3, 'Garden = vườn → gardening = làm vườn.'),
    Q('Cùng hỏi sở thích: "Do you like ___?"', ['cook (sai vì sau like phải V-ing)', 'cooking', 'cooks (dạng ngôi 3 số ít, không dùng sau like)', 'to cooks'], 1, 'Like + V-ing.'),
  ]),

  M(15, 'In the town', [
    Q('"Bookshop" có nghĩa là?', ['Nhà ga', 'Bưu điện', 'Bệnh viện', 'Tiệm sách'], 3, 'Book + shop = tiệm sách.'),
    Q('"Post office" có nghĩa là?', ['Sân bay', 'Bưu điện', 'Nhà hàng', 'Trường học'], 1, 'Post office = bưu điện.'),
    Q('"Hospital" có nghĩa là?', ['Bệnh viện', 'Khách sạn', 'Nhà thờ', 'Sở thú'], 0, 'Hospital = bệnh viện.'),
    Q('"The bank is ___ the post office." (kế bên)', ['in (trong, không phù hợp giữa 2 toà nhà)', 'under (bên dưới, sai logic)', 'on (trên, không phù hợp)', 'next to'], 3, 'Next to = ngay cạnh.'),
    Q('Hỏi đường: "How can I ___ to the museum?"', ['arrive', 'get', 'come (sai cấu trúc, đúng phải là come to)', 'go to (lặp giới từ, sai cấu trúc với how)'], 1, 'How can I get to ...? = Làm sao tới...?'),
    Q('"Turn left" có nghĩa là?', ['Quay lại', 'Rẽ phải', 'Rẽ trái', 'Đi thẳng'], 2, 'Turn left = rẽ trái.'),
  ]),

  M(16, 'Jobs', [
    Q('"Teacher" là nghề?', ['Giáo viên', 'Bác sĩ', 'Đầu bếp', 'Nông dân'], 0, 'Teacher = giáo viên.'),
    Q('"Doctor" là nghề?', ['Bác sĩ', 'Y tá (nurse)', 'Ca sĩ (singer)', 'Họa sĩ'], 0, 'Doctor = bác sĩ.'),
    Q('"Farmer" có nghĩa là?', ['Phi công', 'Lính cứu hoả', 'Công nhân', 'Nông dân'], 3, 'Farm = nông trại → farmer.'),
    Q('"My mother is ___ nurse."', ['∅ (không mạo từ, sai vì nghề số ít cần a/an)', 'a', 'an (chỉ dùng trước nguyên âm)', 'the (chỉ vật xác định, không dùng cho nghề chung)'], 1, 'Nghề nghiệp ở số ít → mạo từ a/an. Nurse bắt đầu phụ âm → "a nurse".'),
    Q('"What does your father do?" hỏi gì?', ['Bố bạn tên gì?', 'Bố bạn đang làm gì?', 'Bố bạn ở đâu?', 'Bố bạn làm nghề gì?'], 3, 'What does X do? = X làm nghề gì?'),
    Q('"Engineer" là nghề?', ['Kỹ sư', 'Đầu bếp', 'Cảnh sát', 'Bác sĩ'], 0, 'Engineer = kỹ sư.'),
  ]),

  M(17, 'Review HK1 — Vocabulary', [
    Q('Chọn từ KHÁC nhóm:', ['green (xanh lá, là màu)', 'apple', 'red (đỏ, là màu)', 'blue (xanh dương, là màu)'], 1, 'Ba từ đầu là màu; apple là quả.'),
    Q('"My birthday is ___ April."', ['on (dùng với thứ/ngày, không dùng cho tháng)', 'in', 'at (dùng với giờ, không dùng cho tháng)', 'to (chỉ hướng, không dùng cho tháng)'], 1, 'Tháng dùng "in": in April.'),
    Q('"She ___ play the piano." (có thể)', ['cans (sai, can không thêm s)', 'are (dùng cho they/you, không dùng cho she)', 'is (động từ to be, không phải động từ khuyết thiếu)', 'can'], 3, 'Can + V nguyên thể.'),
    Q('"What time ___ it?"', ['be (dạng nguyên thể, không chia ngôi)', 'is', 'are (dùng với you/we/they)', 'am (chỉ dùng với I)'], 1, 'It → is.'),
    Q('Số nhiều của "child":', ['childies', 'childs', 'children', 'childes'], 2, 'Child → children (bất quy tắc).'),
    Q('Đáp: "How are you?"', ['I\'m nine', 'I\'m Lan', 'I\'m at home', 'I\'m fine, thank you'], 3, 'How are you? hỏi sức khoẻ.'),
  ]),

  M(18, 'Review HK1 — Grammar', [
    Q('Chọn dạng đúng: "He ___ football every day."', ['plays', 'play (sai, He cần V-s)', 'played', 'playing'], 0, 'He + V-s (hiện tại đơn).'),
    Q('"I ___ a student."', ['are (dùng với you/we/they)', 'am', 'is (dùng với he/she/it)', 'be (dạng nguyên thể, không chia ngôi)'], 1, 'I + am.'),
    Q('"They ___ in the park now." (đang chơi)', ['play (sai, có now nên phải tiếp diễn)', 'are playing', 'is playing', 'plays (sai, they không thêm s)'], 1, 'Hiện tại tiếp diễn: they are V-ing.'),
    Q('"___ you have a pen?"', ['Are (dùng với danh từ số nhiều, không dùng have)', 'Does (dùng với he/she/it)', 'Do', 'Is (dùng với danh từ số ít/he/she/it)'], 2, 'I/You/We/They → Do.'),
    Q('"There ___ two books on the desk."', ['is (chỉ dùng với số ít)', 'be (dạng nguyên thể, không chia ngôi)', 'are', 'am (chỉ dùng với I)'], 2, 'Số nhiều → there are.'),
    Q('Chọn câu đúng:', ['I don\'t like fish', 'I doesn\'t like fish', 'I not like fish', 'I don\'t likes fish'], 0, 'I + don\'t + V nguyên thể.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'My new clothes', [
    Q('"Shirt" có nghĩa là?', ['Áo sơ mi', 'Quần (trousers/pants)', 'Giày (shoes)', 'Mũ (hat)'], 0, 'Shirt = áo sơ mi.'),
    Q('"Trousers" có nghĩa là?', ['Áo (shirt)', 'Váy (skirt/dress)', 'Tất (socks)', 'Quần dài'], 3, 'Trousers = quần dài (luôn số nhiều).'),
    Q('"She is wearing a ___ dress." (váy đỏ)', ['red', 'a red (thừa mạo từ, đã có a dress)', 'reds (tính từ không thêm s)', 'reding'], 0, 'Tính từ đứng trước danh từ.'),
    Q('"Shoes" có nghĩa là?', ['Tất (socks)', 'Mũ (hat)', 'Giày', 'Găng tay'], 2, 'Shoes = (đôi) giày.'),
    Q('"Wear" có nghĩa là?', ['Mặc/Đội/Đi (trang phục)', 'Cởi (take off)', 'Bán (sell)', 'Mua (buy)'], 0, 'Wear = mặc.'),
    Q('"How much are these jeans?" — đáp:', ['Yes, I do', 'They are 200,000 dong', 'It is 100,000 dong', 'I like jeans'], 1, 'Jeans số nhiều → they are.'),
  ]),

  M(20, 'My house and rooms', [
    Q('"Kitchen" có nghĩa là?', ['Phòng khách', 'Bếp', 'Phòng tắm', 'Phòng ngủ'], 1, 'Kitchen = (phòng) bếp.'),
    Q('"Bedroom" có nghĩa là?', ['Phòng học', 'Phòng tắm', 'Phòng ngủ', 'Phòng khách'], 2, 'Bed + room = phòng ngủ.'),
    Q('"There is a sofa ___ the living room." (trong)', ['on (trên bề mặt, không phù hợp với phòng)', 'under (bên dưới, không phù hợp)', 'in', 'at (chỉ dùng với địa điểm điểm cụ thể)'], 2, 'Trong phòng dùng "in".'),
    Q('"Bathroom" có nghĩa là?', ['Phòng tắm', 'Ga ra (garage)', 'Sân vườn', 'Bếp/Nhà bếp (kitchen)'], 0, 'Bath + room = phòng tắm.'),
    Q('"My house has ___ rooms." (4 phòng)', ['a four', 'four', 'fourth', 'fours (số đếm không thêm s)'], 1, 'Số đếm + danh từ số nhiều: four rooms.'),
    Q('"Garden" có nghĩa là?', ['Mái nhà', 'Tầng hầm', 'Ga ra (garage)', 'Vườn'], 3, 'Garden = vườn.'),
  ]),

  M(21, 'My day — Daily routines', [
    Q('"I get up at 6 a.m." có nghĩa là?', ['Tôi học lúc 6 giờ', 'Tôi thức dậy lúc 6 giờ sáng', 'Tôi ăn lúc 6 giờ', 'Tôi đi ngủ lúc 6 giờ sáng'], 1, 'Get up = thức dậy.'),
    Q('"Have breakfast" có nghĩa là?', ['Ăn trưa', 'Ăn tối', 'Uống nước', 'Ăn sáng'], 3, 'Breakfast = bữa sáng.'),
    Q('Chia: "She ___ to school at 7."', ['goes', 'going (cần thêm to be)', 'went (quá khứ, không hợp với at 7 thói quen)', 'go (sai vì She cần thêm -es)'], 0, 'She + goes.'),
    Q('"Go to bed" có nghĩa là?', ['Đi ngủ', 'Đi chơi', 'Đi học', 'Đi ăn (go to eat)'], 0, 'Go to bed = đi ngủ.'),
    Q('Sắp xếp đúng trong ngày:', ['get up – go to bed – have lunch', 'get up – have breakfast – go to school', 'go to bed – get up – have breakfast', 'have dinner – get up – go to school'], 1, 'Sáng: dậy → ăn sáng → đi học.'),
    Q('"What time do you go to school?" — đáp:', ['Yes, I do', 'It is far', 'I go to school by bike', 'At 7 o\'clock'], 3, 'Hỏi giờ → at + giờ.'),
  ]),

  M(22, 'School subjects', [
    Q('"Maths" có nghĩa là?', ['Tiếng Anh', 'Văn/Tiếng Việt (Vietnamese)', 'Mỹ thuật', 'Toán'], 3, 'Maths = Toán.'),
    Q('"Vietnamese" trong lớp học là?', ['Tiếng Việt', 'Lịch sử', 'Thể dục', 'Âm nhạc'], 0, 'Môn Tiếng Việt.'),
    Q('"P.E." là viết tắt của?', ['Public Event', 'Personal English', 'Play English', 'Physical Education'], 3, 'P.E. = Physical Education = Thể dục.'),
    Q('"What\'s your favourite subject?" trả lời:', ['I\'m fine', 'Yes, I do', 'It\'s English', 'It\'s red'], 2, 'Subject = môn học; trả lời tên môn.'),
    Q('"I have Music ___ Tuesday."', ['at (dùng với giờ)', 'in (dùng với tháng/năm)', 'on', 'to (chỉ hướng, không dùng cho thứ)'], 2, 'Thứ trong tuần dùng "on": on Tuesday.'),
    Q('"Art" là môn?', ['Toán (Maths)', 'Khoa học', 'Lịch sử', 'Mỹ thuật'], 3, 'Art = (mỹ) thuật.'),
  ]),

  M(23, 'School activities', [
    Q('"Have a music lesson" có nghĩa là?', ['Nghe nhạc', 'Mua nhạc', 'Có giờ âm nhạc', 'Đi chơi nhạc'], 2, 'Have a lesson = có giờ học.'),
    Q('"Recess" / "break time" có nghĩa là?', ['Giờ ngủ', 'Giờ về', 'Giờ ra chơi', 'Giờ ăn tối'], 2, 'Recess = giờ ra chơi.'),
    Q('"Do exercises" có nghĩa là?', ['Tập thể dục/làm bài tập', 'Đi học', 'Đi ngủ', 'Đi chơi'], 0, 'Do exercises = làm bài tập hoặc tập thể dục.'),
    Q('"Read a story" có nghĩa là?', ['Đọc truyện', 'Viết truyện', 'Hát truyện', 'Vẽ truyện'], 0, 'Read a story = đọc truyện.'),
    Q('Chia: "We ___ English on Mondays."', ['had (quá khứ, không hợp với on Mondays)', 'has (dùng cho he/she/it, không dùng với we)', 'have', 'having'], 2, 'We + have.'),
    Q('"Sing a song" có nghĩa là?', ['Đọc thơ', 'Vẽ tranh', 'Hát một bài', 'Nhảy múa'], 2, 'Sing a song = hát một bài hát.'),
  ]),

  M(24, 'My favourite subject', [
    Q('"Why do you like English?" hỏi gì?', ['Bạn thích Tiếng Anh khi nào?', 'Vì sao bạn thích Tiếng Anh?', 'Bạn học Tiếng Anh ở đâu?', 'Ai dạy bạn Tiếng Anh?'], 1, 'Why = tại sao.'),
    Q('Trả lời "Why": dùng từ?', ['Where (hỏi ở đâu)', 'Because', 'When (hỏi khi nào)', 'Who (hỏi ai)'], 1, 'Because = bởi vì.'),
    Q('"It\'s ___" — môn dễ:', ['hard (khó, trái nghĩa với dễ)', 'boring', 'difficult', 'easy'], 3, 'Easy = dễ.'),
    Q('"Interesting" có nghĩa là?', ['Dễ (easy)', 'Khó (difficult)', 'Chán (boring)', 'Thú vị'], 3, 'Interesting = thú vị.'),
    Q('"Difficult" có nghĩa là?', ['Dễ (easy)', 'Khó', 'Buồn (sad)', 'Vui (happy)'], 1, 'Difficult = khó.'),
    Q('"How many subjects do you have?" hỏi gì?', ['Bao nhiêu môn?', 'Mấy giờ học?', 'Môn gì?', 'Học ở đâu?'], 0, 'How many = bao nhiêu (đếm được).'),
  ]),

  M(25, 'Where were you yesterday?', [
    Q('"Yesterday" có nghĩa là?', ['Tuần trước', 'Hôm qua', 'Hôm nay', 'Ngày mai'], 1, 'Yesterday = hôm qua.'),
    Q('"Where were you yesterday?" — đáp:', ['I was at the zoo', 'I am at home', 'I go to school', 'I will be home'], 0, 'Quá khứ của "am/is" là "was".'),
    Q('"They ___ at school yesterday."', ['is (hiện tại, số ít)', 'was (quá khứ số ít)', 'were', 'are (hiện tại số nhiều)'], 2, 'They → were.'),
    Q('"Last week" có nghĩa là?', ['Tuần trước', 'Tuần này', 'Hôm qua', 'Tuần sau'], 0, 'Last week = tuần trước.'),
    Q('Chia: "She ___ tired yesterday."', ['were (dùng với you/we/they)', 'was', 'are (hiện tại, không dùng với yesterday)', 'is (hiện tại, không dùng với yesterday)'], 1, 'She + was (quá khứ).'),
    Q('Câu hỏi đúng:', ['You were where yesterday?', 'Where was you yesterday?', 'Where were you yesterday?', 'Where you were yesterday?'], 2, 'Cấu trúc: Wh- + was/were + chủ ngữ?'),
  ]),

  M(26, 'What did you do? — Past simple (1)', [
    Q('"What did you do yesterday?" hỏi gì?', ['Hôm nay bạn làm gì?', 'Ngày mai bạn làm gì?', 'Bạn đang làm gì?', 'Hôm qua bạn làm gì?'], 3, 'Did + V → quá khứ.'),
    Q('Quá khứ của "play" là?', ['plays (hiện tại ngôi 3 số ít)', 'played', 'playing', 'play (nguyên thể, không phải quá khứ)'], 1, 'Động từ thường thêm -ed: played.'),
    Q('Quá khứ của "go" là?', ['went', 'going (V-ing, không phải quá khứ)', 'gone (quá khứ phân từ, không phải V2)', 'goed (sai vì go bất quy tắc)'], 0, 'Go → went (bất quy tắc).'),
    Q('"I ___ football yesterday."', ['playing', 'plays (hiện tại ngôi 3 số ít)', 'play (nguyên thể, không hợp yesterday)', 'played'], 3, 'Yesterday → quá khứ → played.'),
    Q('Sau "did" + chủ ngữ, động từ ở dạng?', ['quá khứ', 'nguyên thể', 'V-s (ngôi 3 số ít)', 'V-ing (tiếp diễn)'], 1, 'Did + V nguyên thể: Did you play?'),
    Q('"Did you watch TV?" — đáp khẳng định:', ['Yes, I do', 'Yes, I did', 'Yes, I am', 'Yes, I was'], 1, 'Yes, I did / No, I didn\'t.'),
  ]),

  M(27, 'Past simple (2) — Irregular verbs', [
    Q('Quá khứ của "have" là?', ['has (hiện tại ngôi 3 số ít)', 'having', 'haved (sai vì have bất quy tắc)', 'had'], 3, 'Have → had.'),
    Q('Quá khứ của "eat" là?', ['ate', 'eated (sai vì eat bất quy tắc)', 'eaten (quá khứ phân từ, không phải V2)', 'eat (nguyên thể)'], 0, 'Eat → ate.'),
    Q('Quá khứ của "see" là?', ['sees (hiện tại ngôi 3 số ít)', 'seen (quá khứ phân từ, không phải V2)', 'seed (sai vì see bất quy tắc)', 'saw'], 3, 'See → saw.'),
    Q('"He ___ to Hanoi last summer."', ['go (nguyên thể, không hợp last summer)', 'went', 'goes (hiện tại ngôi 3 số ít)', 'gone (quá khứ phân từ, không phải V2)'], 1, 'Last summer → went.'),
    Q('"I ___ a new book yesterday." (đọc)', ['reads (hiện tại ngôi 3 số ít)', 'reading', 'readed', 'read'], 3, 'Read quá khứ giữ nguyên hình thức (phát âm khác).'),
    Q('Câu phủ định: "She ___ go to school."', ['wasn\'t', 'didn\'t', 'don\'t (hiện tại, không dùng cho she/quá khứ)', 'doesn\'t'], 1, 'Quá khứ phủ định: didn\'t + V.'),
  ]),

  M(28, 'My summer holiday', [
    Q('"Summer holiday" có nghĩa là?', ['Nghỉ đông', 'Kì nghỉ hè', 'Nghỉ Tết', 'Nghỉ cuối tuần'], 1, 'Summer = hè; holiday = kì nghỉ.'),
    Q('"I went to the ___." (bãi biển)', ['beech (cây sồi, không phải bãi biển)', 'beach', 'bean (hạt đậu)', 'bench (ghế dài)'], 1, 'Beach = bãi biển.'),
    Q('"Visit my grandparents" có nghĩa là?', ['Tặng quà ông bà', 'Thăm ông bà', 'Gọi điện ông bà', 'Tạm biệt ông bà'], 1, 'Visit = thăm.'),
    Q('Quá khứ của "swim":', ['swimmed', 'swam', 'swims (hiện tại ngôi 3 số ít)', 'swum (quá khứ phân từ, không phải V2)'], 1, 'Swim → swam.'),
    Q('"Where did you go last summer?" — đáp:', ['I go now', 'I went to Da Nang', 'I am at home', 'I will go'], 1, 'Quá khứ: went.'),
    Q('"It was great fun!" có nghĩa là?', ['Thật vui', 'Rất chán', 'Bình thường', 'Hơi mệt'], 0, 'Great fun = rất vui.'),
  ]),

  M(29, 'Future plans — be going to', [
    Q('"I am going to ___ Da Lat next week." (đi/đi thăm)', ['visits', 'visited', 'visiting', 'visit'], 3, 'Be going to + V nguyên thể.'),
    Q('"Tomorrow" có nghĩa là?', ['Ngày mai', 'Tuần sau', 'Hôm nay', 'Hôm qua'], 0, 'Tomorrow = ngày mai.'),
    Q('"What are you going to do tomorrow?" hỏi gì?', ['Hôm nay làm gì?', 'Bạn thích gì?', 'Hôm qua làm gì?', 'Mai bạn dự định làm gì?'], 3, 'Be going to V = dự định.'),
    Q('"Next weekend" có nghĩa là?', ['Đầu tuần', 'Cuối tuần trước', 'Hằng tuần', 'Cuối tuần này (tới)'], 3, 'Next weekend = cuối tuần tới.'),
    Q('Chọn câu đúng:', ['She is go to swim', 'She is going to swim', 'She is going to swims', 'She going to swim'], 1, 'Be + going to + V nguyên thể.'),
    Q('"I\'m going to be a teacher" có nghĩa là?', ['Tôi từng là giáo viên', 'Tôi không thích giáo viên', 'Tôi sẽ trở thành giáo viên', 'Tôi đang là giáo viên'], 2, 'Be going to = dự định/tương lai.'),
  ]),

  M(30, 'Means of transport', [
    Q('"By bike" có nghĩa là?', ['Bằng máy bay', 'Bằng xe đạp', 'Bằng tàu', 'Đi bộ (on foot/walking)'], 1, 'By bike = bằng xe đạp.'),
    Q('"How do you go to school?" — đáp:', ['Yes, I do', 'I go to school by bus', 'I am at school', 'I go to school'], 1, 'How → phương tiện: by bus.'),
    Q('"On foot" có nghĩa là?', ['Đi máy bay', 'Đi tàu', 'Bằng xe', 'Đi bộ'], 3, 'On foot = đi bộ (không dùng by foot).'),
    Q('"Plane" có nghĩa là?', ['Tàu hoả', 'Tàu thuỷ', 'Xe buýt', 'Máy bay'], 3, 'Plane = máy bay.'),
    Q('"Train" có nghĩa là?', ['Xe đạp', 'Xe máy', 'Ô tô (car)', 'Tàu hoả'], 3, 'Train = tàu hoả.'),
    Q('Chọn câu đúng:', ['I go to school by bus', 'I go to school with bus', 'I go to school on bus', 'I go to school in bus'], 0, 'Phương tiện: by + bus.'),
  ]),

  M(31, 'Articles a / an / the', [
    Q('"___ apple a day…" — chỗ trống là?', ['An', 'The (chỉ dùng cho vật xác định)', '∅ (không mạo từ, sai vì apple đếm được số ít)', 'A (chỉ dùng trước phụ âm)'], 0, 'Apple bắt đầu nguyên âm → an.'),
    Q('"I have ___ dog. ___ dog is white."', ['a / A (lần nhắc lại phải dùng The)', 'a / The', 'an / A', 'the / A'], 1, 'Lần đầu: a; nhắc lại: the.'),
    Q('Khi nào dùng "the"?', ['Bất kỳ danh từ số nhiều', 'Vật xác định/đã nhắc rồi', 'Tên người', 'Lần đầu nhắc đến'], 1, 'The dùng cho danh từ xác định.'),
    Q('"He is ___ honest boy."', ['the (chỉ dùng cho vật xác định)', '∅ (không mạo từ, sai vì boy đếm được số ít)', 'an', 'a (chỉ dùng trước phụ âm phát âm)'], 2, 'Honest đọc /ˈɒn.ɪst/ — âm /o/ → an honest.'),
    Q('"I play ___ piano every day."', ['the', '∅ (không mạo từ, sai vì nhạc cụ cần the)', 'an (chỉ dùng trước nguyên âm)', 'a (chỉ dùng cho lần đầu nhắc đến)'], 0, 'Nhạc cụ chơi: the + nhạc cụ.'),
    Q('"I have ___ orange juice."', ['a (chỉ dùng với danh từ đếm được)', 'an (chỉ dùng với danh từ đếm được số ít)', '∅', 'the (chỉ vật xác định)'], 2, 'Danh từ không đếm được, không xác định → không mạo từ (hoặc some).'),
  ]),

  M(32, 'Present continuous', [
    Q('Cấu trúc hiện tại tiếp diễn:', ['S + V-s', 'S + am/is/are + V-ing', 'S + will + V', 'S + V-ed'], 1, 'S + be + V-ing.'),
    Q('"She ___ a book now."', ['read (nguyên thể, không phù hợp now)', 'is reading', 'reading', 'reads (hiện tại ngôi 3 số ít, không hợp now)'], 1, 'Now → tiếp diễn → is reading.'),
    Q('Dấu hiệu tiếp diễn:', ['now / at the moment', 'every day', 'last week', 'yesterday'], 0, 'Now, at the moment, look! ...'),
    Q('"They ___ football in the yard."', ['play (thiếu trợ động từ to be)', 'plays (dùng cho he/she/it)', 'played', 'are playing'], 3, 'They + are + V-ing.'),
    Q('Chọn câu SAI:', ['We are studying', 'I am eating lunch', 'She are running', 'He is sleeping'], 2, 'She + IS, không phải are.'),
    Q('Phủ định: "He ___ watching TV now."', ['don\'t (dùng cho hiện tại đơn, không có V-ing)', 'aren\'t', 'doesn\'t', 'isn\'t'], 3, 'He + isn\'t + V-ing.'),
  ]),

  M(33, 'Comparing present simple vs continuous', [
    Q('"I ___ to school every day."', ['went (quá khứ, không hợp every day)', 'goes (dùng cho he/she/it, không dùng với I)', 'am going', 'go'], 3, 'Every day → hiện tại đơn → go.'),
    Q('"Look! The baby ___."', ['cries (hiện tại đơn, không hợp Look!)', 'cried (quá khứ, không hợp Look!)', 'cry (nguyên thể, không hợp Look!)', 'is crying'], 3, 'Look! → đang diễn ra → is crying.'),
    Q('"She always ___ early."', ['got up', 'getting up', 'is getting up', 'gets up'], 3, 'Always → hiện tại đơn.'),
    Q('"They ___ in the park now."', ['run (nguyên thể, không hợp now)', 'ran (quá khứ, không hợp now)', 'are running', 'runs (hiện tại đơn, không hợp now)'], 2, 'Now → tiếp diễn.'),
    Q('"He ___ English on Mondays."', ['learns', 'is learning', 'learn (sai vì He cần thêm -s)', 'learning'], 0, 'On Mondays → thói quen → learns.'),
    Q('"Listen! She ___ a song."', ['sing (nguyên thể, không hợp Listen!)', 'is singing', 'sings (hiện tại đơn, không hợp Listen!)', 'sang (quá khứ, không hợp Listen!)'], 1, 'Listen! → đang diễn ra → is singing.'),
  ]),

  M(34, 'Review HK2 — Vocabulary & Reading', [
    Q('Chọn từ KHÁC nhóm:', ['summer', 'spring', 'Monday', 'winter'], 2, 'Ba từ đầu là mùa; Monday là thứ.'),
    Q('"I went to the beach ___ summer." (vào)', ['on (dùng với thứ/ngày)', 'at (dùng với giờ)', 'in', 'to (chỉ hướng, không dùng cho mùa)'], 2, 'Mùa dùng "in": in summer.'),
    Q('Đọc: "Nam is going to visit Hue next week." Nam sẽ?', ['Không đi Huế', 'Đã đi Huế', 'Đang ở Huế', 'Sẽ đi Huế'], 3, 'Be going to → dự định tương lai.'),
    Q('"Travel" có nghĩa là?', ['Ăn uống', 'Du lịch/Đi lại', 'Học (study)', 'Ngủ (sleep)'], 1, 'Travel = du lịch.'),
    Q('Đối lập với "hot" là?', ['sunny (có nắng, gần nghĩa hot)', 'cold', 'cool (mát, không phải đối lập hot)', 'warm (ấm, gần nghĩa hot)'], 1, 'Hot ↔ cold.'),
    Q('"My favourite season is ___" — câu đúng:', ['a spring', 'the spring', 'on spring', 'spring'], 3, 'Trả lời ngắn gọn bằng tên mùa.'),
  ]),

  M(35, 'Review HK2 — Grammar mix', [
    Q('"They ___ to the zoo last Sunday."', ['go (nguyên thể, không hợp last Sunday)', 'goes (hiện tại ngôi 3 số ít)', 'are going', 'went'], 3, 'Last Sunday → went.'),
    Q('"What ___ you do tomorrow?" (dự định)', ['are going to', 'do (hiện tại đơn, không chỉ dự định)', 'did (quá khứ, không hợp tomorrow)', 'were (quá khứ, không hợp tomorrow)'], 0, 'Tomorrow + dự định → are going to.'),
    Q('"She ___ piano very well."', ['can plays', 'cans play', 'is can play', 'can play'], 3, 'Can + V nguyên thể.'),
    Q('"I ___ a sandwich now."', ['ate (quá khứ, không hợp now)', 'eats (hiện tại ngôi 3 số ít)', 'am eating', 'eat (nguyên thể, không hợp now)'], 2, 'Now → tiếp diễn → am eating.'),
    Q('Đáp: "Did you go out yesterday?"', ['Yes, I did', 'Yes, I do', 'Yes, I was', 'Yes, I am'], 0, 'Did → Yes, I did / No, I didn\'t.'),
    Q('"There ___ many students in my class."', ['is (dùng với danh từ số ít)', 'are', 'be (dạng nguyên thể, không chia ngôi)', 'am (chỉ dùng với I)'], 1, 'Students số nhiều → are.'),
  ]),
];

export const P4TA_SCENARIOS = indexBy(P4TA_WEEKS);
