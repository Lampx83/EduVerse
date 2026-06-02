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
    Q('"Brother" tiếng Việt là?', ['Chị gái', 'Em gái', 'Anh/Em trai', 'Ông'], 2, 'Brother = anh trai hoặc em trai.'),
    Q('"Sister" có nghĩa là?', ['Anh trai', 'Chị/Em gái', 'Mẹ', 'Cô'], 1, 'Sister = chị gái hoặc em gái.'),
    Q('"This is my ___." Bố em — chọn từ?', ['mother', 'father', 'sister', 'friend'], 1, 'Father = bố/cha.'),
    Q('"My friend" có nghĩa là?', ['Hàng xóm', 'Bạn của tôi', 'Em họ', 'Anh trai'], 1, 'My friend = bạn của tôi.'),
    Q('Hỏi: "Who is she?" — đáp:', ['It is a book', 'She is my sister', 'He is my dad', 'I am Lan'], 1, 'Chủ ngữ "she" → "She is my sister".'),
    Q('Số nhiều của "friend" là?', ['friend', 'friends', 'friendes', 'frienz'], 1, 'Danh từ đếm được thêm -s: friends.'),
  ]),

  M(2, 'Days of the week', [
    Q('"Monday" là thứ mấy?', ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư'], 1, 'Monday = thứ hai.'),
    Q('"Friday" là thứ mấy?', ['Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'], 1, 'Friday = thứ sáu.'),
    Q('Cuối tuần (weekend) gồm những ngày nào?', ['Mon & Tue', 'Wed & Thu', 'Sat & Sun', 'Fri & Mon'], 2, 'Weekend = Saturday + Sunday.'),
    Q('Sắp đúng: Tuesday, ___, Thursday', ['Monday', 'Wednesday', 'Friday', 'Sunday'], 1, 'Thứ 3 – thứ 4 – thứ 5: Tue – Wed – Thu.'),
    Q('"What day is it today?" hỏi gì?', ['Mấy giờ rồi', 'Hôm nay thứ mấy', 'Hôm nay ngày bao nhiêu', 'Thời tiết thế nào'], 1, 'What day is it today? = Hôm nay (là) thứ mấy?'),
    Q('Trả lời: "It\'s ___ today." (thứ bảy)', ['Saturday', 'saturday', 'a Saturday', 'the Saturday'], 0, 'Thứ trong tuần luôn viết hoa chữ đầu: Saturday.'),
  ]),

  M(3, 'What do you do on...?', [
    Q('"What do you do on Sunday?" hỏi gì?', ['Bạn bao nhiêu tuổi?', 'Chủ nhật bạn làm gì?', 'Bạn ở đâu?', 'Bạn tên gì?'], 1, 'Hỏi hoạt động thường làm vào ngày đó.'),
    Q('"I go to school" có nghĩa là?', ['Tôi đi học', 'Tôi đi chơi', 'Tôi ở nhà', 'Tôi ngủ'], 0, 'Go to school = đi học.'),
    Q('Chia động từ: "She ___ TV in the evening."', ['watch', 'watches', 'watching', 'watched'], 1, 'Ngôi thứ 3 số ít, hiện tại đơn: watches.'),
    Q('"On Monday, I have ___" (môn Toán):', ['Maths', 'English', 'Music', 'Art'], 0, 'Maths = Toán.'),
    Q('"Play football" có nghĩa là?', ['Đá bóng', 'Đọc sách', 'Nấu ăn', 'Bơi'], 0, 'Play football = chơi/đá bóng.'),
    Q('Trả lời "What do you do on Saturday?":', ['Yes, I do', 'I play with my friends', 'It is hot', 'I am Lan'], 1, 'Hỏi hoạt động → trả lời bằng động từ chỉ hoạt động.'),
  ]),

  M(4, "When's your birthday?", [
    Q('"When\'s your birthday?" hỏi gì?', ['Sinh nhật bạn khi nào?', 'Bạn bao nhiêu tuổi?', 'Bạn ở đâu?', 'Bạn tên gì?'], 0, "When's = When is — hỏi thời gian sinh nhật."),
    Q('Tháng 1 tiếng Anh là?', ['June', 'January', 'July', 'March'], 1, 'January = tháng 1.'),
    Q('"My birthday is ___ May." (vào tháng 5)', ['on', 'in', 'at', 'to'], 1, 'Với THÁNG dùng "in": in May.'),
    Q('"December" là tháng?', ['Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 9'], 2, 'December = tháng 12.'),
    Q('"It\'s on the 2nd of September" — sinh nhật vào?', ['1/9', '2/9', '20/9', '2/10'], 1, '2nd of September = ngày 2 tháng 9.'),
    Q('Trả lời "How old are you?" (9 tuổi):', ['I am 9 years old', 'I am 9 year', 'I have 9', 'My 9'], 0, 'Cấu trúc: I am + số + years old.'),
  ]),

  M(5, 'Can you swim?', [
    Q('"Can you swim?" hỏi gì?', ['Bạn có biết bơi không?', 'Bạn có đói không?', 'Bạn ở đâu?', 'Bạn bao nhiêu tuổi?'], 0, 'Can = có thể (khả năng).'),
    Q('Trả lời khẳng định "Can you sing?"', ['Yes, I can', 'No, I am', 'Yes, I do', 'I sing'], 0, 'Yes, I can / No, I can\'t.'),
    Q('"I can\'t ride a bike" có nghĩa là?', ['Tôi biết đi xe đạp', 'Tôi không biết đi xe đạp', 'Tôi thích xe đạp', 'Tôi có xe đạp'], 1, "can't = cannot = không thể."),
    Q('"Dance" có nghĩa là?', ['Hát', 'Nhảy múa', 'Vẽ', 'Đọc'], 1, 'Dance = nhảy múa.'),
    Q('Sau "can" động từ ở dạng?', ['nguyên thể (V)', 'V-ing', 'V-ed', 'V-s'], 0, 'Can + V (nguyên thể, không to).'),
    Q('Chọn câu đúng:', ['She can swims', 'She can swim', 'She cans swim', 'She is can swim'], 1, 'Can + V nguyên thể, không thêm -s.'),
  ]),

  M(6, "Where's your school?", [
    Q('"Where\'s your school?" hỏi gì?', ['Trường bạn tên gì?', 'Trường bạn ở đâu?', 'Trường bạn lớn không?', 'Bạn học lớp mấy?'], 1, "Where = ở đâu."),
    Q('"My school is on ___ Street."', ['in', 'at', 'on', 'to'], 2, 'Với tên đường dùng "on": on Le Loi Street.'),
    Q('"It\'s in the city" có nghĩa là?', ['Ở nông thôn', 'Ở trong thành phố', 'Ở trên núi', 'Ở biển'], 1, 'City = thành phố.'),
    Q('Trả lời "What\'s the name of your school?":', ['It\'s big', 'It\'s Le Loi Primary School', 'I go to school', 'Yes, I do'], 1, 'Hỏi TÊN → trả lời bằng danh từ riêng.'),
    Q('"Class 4A" có nghĩa là?', ['Lớp 4A', 'Trường 4A', 'Tuần 4', 'Tầng 4'], 0, 'Class 4A = lớp 4A.'),
    Q('"My classroom is on the ___ floor." (tầng 2)', ['one', 'first', 'second', 'two'], 2, 'Tầng dùng số thứ tự: second floor.'),
  ]),

  M(7, 'What do you like doing?', [
    Q('"What do you like doing?" hỏi gì?', ['Bạn thích làm gì?', 'Bạn đang làm gì?', 'Bạn có khoẻ không?', 'Bạn tên gì?'], 0, 'Hỏi sở thích về hoạt động.'),
    Q('Sau "like" động từ ở dạng?', ['V', 'V-ing', 'V-ed', 'V-s'], 1, 'Like + V-ing (sở thích): I like reading.'),
    Q('"I like reading books." có nghĩa là?', ['Tôi đang đọc sách', 'Tôi thích đọc sách', 'Tôi có sách', 'Tôi mua sách'], 1, 'Like reading = thích đọc.'),
    Q('"Cooking" có nghĩa là?', ['Hát', 'Nấu ăn', 'Đọc', 'Vẽ'], 1, 'Cook = nấu, cooking = (việc) nấu ăn.'),
    Q('Chọn câu đúng:', ['I like swim', 'I like swimming', 'I like to swims', 'I likes swim'], 1, 'Like + V-ing: swimming.'),
    Q('"Drawing" có nghĩa là?', ['Đọc sách', 'Vẽ', 'Nhảy', 'Hát'], 1, 'Draw = vẽ → drawing.'),
  ]),

  M(8, "What's your favourite food?", [
    Q('"Favourite" có nghĩa là?', ['Yêu thích nhất', 'Ghét nhất', 'Bình thường', 'Khó'], 0, 'Favourite = (ưa) thích nhất.'),
    Q('"Rice" có nghĩa là?', ['Bánh mì', 'Cơm/Gạo', 'Mì', 'Cháo'], 1, 'Rice = cơm/gạo.'),
    Q('"Bread" có nghĩa là?', ['Cơm', 'Bánh mì', 'Phở', 'Bún'], 1, 'Bread = bánh mì.'),
    Q('Trả lời "What\'s your favourite food?":', ['It\'s big', 'It\'s chicken', 'I am hungry', 'I like'], 1, 'Hỏi món ăn ưa thích → tên món: chicken.'),
    Q('"I\'d like ___ apple." (một quả táo)', ['a', 'an', 'the', 'some'], 1, 'apple bắt đầu bằng nguyên âm → an apple.'),
    Q('"Noodles" có nghĩa là?', ['Cơm', 'Bánh', 'Mì', 'Chè'], 2, 'Noodles = mì/bún.'),
  ]),

  M(9, 'At the zoo', [
    Q('"Zoo" có nghĩa là?', ['Công viên', 'Sở thú', 'Sân bay', 'Bệnh viện'], 1, 'Zoo = sở thú/vườn thú.'),
    Q('"Elephant" là con gì?', ['Hổ', 'Voi', 'Sư tử', 'Khỉ'], 1, 'Elephant = voi.'),
    Q('"Monkey" là con gì?', ['Khỉ', 'Gấu', 'Hươu', 'Báo'], 0, 'Monkey = khỉ.'),
    Q('"The tiger can ___ very fast." (chạy)', ['swim', 'run', 'fly', 'sing'], 1, 'Tiger (hổ) chạy nhanh: run.'),
    Q('"Look at the ___!" — con vật trong tranh là sư tử:', ['lion', 'cow', 'duck', 'fish'], 0, 'Lion = sư tử.'),
    Q('Số nhiều "elephant" là?', ['elephant', 'elephants', 'elephantes', 'elephanties'], 1, 'Thêm -s: elephants.'),
  ]),

  M(10, "What's the weather like?", [
    Q('"What\'s the weather like?" hỏi gì?', ['Bạn thích gì?', 'Thời tiết thế nào?', 'Bạn mấy tuổi?', 'Hôm nay thứ mấy?'], 1, 'Weather = thời tiết.'),
    Q('"It\'s sunny" có nghĩa là?', ['Trời mưa', 'Trời nắng', 'Trời lạnh', 'Trời gió'], 1, 'Sunny = có nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có mưa', 'Có tuyết', 'Có gió', 'Nóng'], 0, 'Rain = mưa → rainy = có mưa.'),
    Q('"It\'s ___ in winter." (lạnh)', ['hot', 'cold', 'warm', 'cool'], 1, 'Mùa đông lạnh: cold.'),
    Q('"Windy" có nghĩa là?', ['Nóng', 'Có gió', 'Có mây', 'Sương mù'], 1, 'Wind = gió → windy.'),
    Q('Mùa hè ở Việt Nam thường?', ['hot and sunny', 'cold and snowy', 'cool and windy', 'foggy'], 0, 'Hè VN nóng và nắng.'),
  ]),

  M(11, 'How much is it?', [
    Q('"How much is it?" hỏi gì?', ['Cái này là gì?', 'Cái này bao nhiêu tiền?', 'Cái này của ai?', 'Bạn có gì?'], 1, 'How much = bao nhiêu (giá).'),
    Q('"It\'s 20,000 dong" có nghĩa là?', ['20.000 đồng', '200.000 đồng', '2.000 đồng', '20 đồng'], 0, '20,000 dong = 20.000 đồng.'),
    Q('"I\'d like a ___ of milk." (một cốc)', ['glass', 'kilo', 'bottle', 'piece'], 0, 'A glass of milk = một cốc/ly sữa.'),
    Q('"A kilo of beef" có nghĩa là?', ['Một cân thịt bò', 'Một lát thịt', 'Một hộp bò', 'Một con bò'], 0, 'Kilo = ki-lô-gam.'),
    Q('Hỏi giá lịch sự:', ['What is it?', 'How much is it?', 'Who is it?', 'Where is it?'], 1, 'How much is it? = Giá bao nhiêu?'),
    Q('Đáp: "How much are these apples?"', ['It is red', 'They are 30,000 dong', 'Yes, I do', 'I like apples'], 1, 'Chủ ngữ số nhiều → "They are".'),
  ]),

  M(12, 'What time is it?', [
    Q('"What time is it?" hỏi gì?', ['Mấy giờ rồi?', 'Hôm nay thứ mấy?', 'Bạn ở đâu?', 'Bạn tên gì?'], 0, 'Hỏi giờ.'),
    Q('"It\'s seven o\'clock" có nghĩa là?', ['7 giờ đúng', '7 giờ rưỡi', '17 giờ', '7 phút'], 0, "o'clock = giờ đúng."),
    Q('"Half past six" là?', ['6:00', '6:15', '6:30', '6:45'], 2, 'Half past = qua nửa giờ → 6:30.'),
    Q('"A quarter past nine" là?', ['9:00', '9:15', '9:30', '9:45'], 1, 'A quarter past = qua 15 phút → 9:15.'),
    Q('"I get up at 6 ___" (vào lúc 6 giờ)', ['in', 'on', 'at', 'to'], 2, 'Với giờ dùng "at": at 6.'),
    Q('"It\'s twelve o\'clock" — buổi trưa em ăn?', ['breakfast', 'lunch', 'dinner', 'snack'], 1, '12h trưa → lunch.'),
  ]),

  M(13, 'Free time activities', [
    Q('"Free time" có nghĩa là?', ['Giờ học', 'Thời gian rảnh', 'Giờ ngủ', 'Giờ ăn'], 1, 'Free time = thời gian rảnh rỗi.'),
    Q('"What do you do in your free time?" trả lời:', ['I sleep all day', 'I read books', 'Yes, I do', 'It is hot'], 1, 'Kể hoạt động yêu thích.'),
    Q('"Listen to music" có nghĩa là?', ['Xem TV', 'Nghe nhạc', 'Vẽ tranh', 'Đọc sách'], 1, 'Listen to music = nghe nhạc.'),
    Q('"Watch cartoons" có nghĩa là?', ['Xem phim hoạt hình', 'Xem bóng đá', 'Đọc truyện', 'Đi bơi'], 0, 'Cartoons = phim hoạt hình.'),
    Q('Chia: "He ___ to music every day."', ['listen', 'listens', 'listening', 'listened'], 1, 'He + V-s: listens.'),
    Q('"Play chess" có nghĩa là?', ['Đá bóng', 'Đánh cờ', 'Bơi', 'Hát'], 1, 'Chess = (môn) cờ.'),
  ]),

  M(14, 'Hobbies', [
    Q('"Hobby" có nghĩa là?', ['Nghề nghiệp', 'Sở thích', 'Lớp học', 'Trường học'], 1, 'Hobby = sở thích.'),
    Q('"My hobby is ___ stamps." (sưu tầm)', ['collect', 'collecting', 'collected', 'collects'], 1, 'Sau "is" trong cấu trúc hobby thường dùng V-ing.'),
    Q('"Painting" có nghĩa là?', ['Vẽ tranh/Sơn', 'Hát', 'Nấu ăn', 'Bơi'], 0, 'Paint = vẽ tranh / sơn.'),
    Q('"What\'s your hobby?" trả lời:', ['I am 9', 'My hobby is reading', 'Yes, I do', 'On Monday'], 1, 'Trả lời hobby bằng V-ing.'),
    Q('"Gardening" có nghĩa là?', ['Làm vườn', 'Câu cá', 'Đi bộ', 'Nấu ăn'], 0, 'Garden = vườn → gardening = làm vườn.'),
    Q('Cùng hỏi sở thích: "Do you like ___?"', ['cook', 'cooking', 'to cooks', 'cooks'], 1, 'Like + V-ing.'),
  ]),

  M(15, 'In the town', [
    Q('"Bookshop" có nghĩa là?', ['Tiệm sách', 'Bệnh viện', 'Bưu điện', 'Nhà ga'], 0, 'Book + shop = tiệm sách.'),
    Q('"Post office" có nghĩa là?', ['Bưu điện', 'Sân bay', 'Nhà hàng', 'Trường học'], 0, 'Post office = bưu điện.'),
    Q('"Hospital" có nghĩa là?', ['Khách sạn', 'Bệnh viện', 'Nhà thờ', 'Sở thú'], 1, 'Hospital = bệnh viện.'),
    Q('"The bank is ___ the post office." (kế bên)', ['on', 'next to', 'in', 'under'], 1, 'Next to = ngay cạnh.'),
    Q('Hỏi đường: "How can I ___ to the museum?"', ['get', 'go to', 'come', 'arrive'], 0, 'How can I get to ...? = Làm sao tới...?'),
    Q('"Turn left" có nghĩa là?', ['Rẽ trái', 'Rẽ phải', 'Đi thẳng', 'Quay lại'], 0, 'Turn left = rẽ trái.'),
  ]),

  M(16, 'Jobs', [
    Q('"Teacher" là nghề?', ['Bác sĩ', 'Giáo viên', 'Nông dân', 'Đầu bếp'], 1, 'Teacher = giáo viên.'),
    Q('"Doctor" là nghề?', ['Y tá', 'Bác sĩ', 'Họa sĩ', 'Ca sĩ'], 1, 'Doctor = bác sĩ.'),
    Q('"Farmer" có nghĩa là?', ['Công nhân', 'Nông dân', 'Lính cứu hoả', 'Phi công'], 1, 'Farm = nông trại → farmer.'),
    Q('"My mother is ___ nurse."', ['a', 'an', 'the', '∅'], 0, 'Nghề nghiệp ở số ít → mạo từ a/an. Nurse bắt đầu phụ âm → "a nurse".'),
    Q('"What does your father do?" hỏi gì?', ['Bố bạn đang làm gì?', 'Bố bạn làm nghề gì?', 'Bố bạn ở đâu?', 'Bố bạn tên gì?'], 1, 'What does X do? = X làm nghề gì?'),
    Q('"Engineer" là nghề?', ['Kỹ sư', 'Bác sĩ', 'Cảnh sát', 'Đầu bếp'], 0, 'Engineer = kỹ sư.'),
  ]),

  M(17, 'Review HK1 — Vocabulary', [
    Q('Chọn từ KHÁC nhóm:', ['red', 'blue', 'green', 'apple'], 3, 'Ba từ đầu là màu; apple là quả.'),
    Q('"My birthday is ___ April."', ['in', 'on', 'at', 'to'], 0, 'Tháng dùng "in": in April.'),
    Q('"She ___ play the piano." (có thể)', ['can', 'cans', 'is', 'are'], 0, 'Can + V nguyên thể.'),
    Q('"What time ___ it?"', ['is', 'are', 'am', 'be'], 0, 'It → is.'),
    Q('Số nhiều của "child":', ['childs', 'childes', 'children', 'childies'], 2, 'Child → children (bất quy tắc).'),
    Q('Đáp: "How are you?"', ['I\'m nine', 'I\'m fine, thank you', 'I\'m Lan', 'I\'m at home'], 1, 'How are you? hỏi sức khoẻ.'),
  ]),

  M(18, 'Review HK1 — Grammar', [
    Q('Chọn dạng đúng: "He ___ football every day."', ['play', 'plays', 'playing', 'played'], 1, 'He + V-s (hiện tại đơn).'),
    Q('"I ___ a student."', ['am', 'is', 'are', 'be'], 0, 'I + am.'),
    Q('"They ___ in the park now." (đang chơi)', ['play', 'plays', 'are playing', 'is playing'], 2, 'Hiện tại tiếp diễn: they are V-ing.'),
    Q('"___ you have a pen?"', ['Do', 'Does', 'Are', 'Is'], 0, 'I/You/We/They → Do.'),
    Q('"There ___ two books on the desk."', ['is', 'are', 'am', 'be'], 1, 'Số nhiều → there are.'),
    Q('Chọn câu đúng:', ['I don\'t likes fish', 'I doesn\'t like fish', 'I don\'t like fish', 'I not like fish'], 2, 'I + don\'t + V nguyên thể.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'My new clothes', [
    Q('"Shirt" có nghĩa là?', ['Áo sơ mi', 'Quần', 'Giày', 'Mũ'], 0, 'Shirt = áo sơ mi.'),
    Q('"Trousers" có nghĩa là?', ['Áo', 'Quần dài', 'Váy', 'Tất'], 1, 'Trousers = quần dài (luôn số nhiều).'),
    Q('"She is wearing a ___ dress." (váy đỏ)', ['red', 'reds', 'reding', 'a red'], 0, 'Tính từ đứng trước danh từ.'),
    Q('"Shoes" có nghĩa là?', ['Tất', 'Giày', 'Găng tay', 'Mũ'], 1, 'Shoes = (đôi) giày.'),
    Q('"Wear" có nghĩa là?', ['Cởi', 'Mặc/Đội/Đi (trang phục)', 'Mua', 'Bán'], 1, 'Wear = mặc.'),
    Q('"How much are these jeans?" — đáp:', ['It is 100,000 dong', 'They are 200,000 dong', 'Yes, I do', 'I like jeans'], 1, 'Jeans số nhiều → they are.'),
  ]),

  M(20, 'My house and rooms', [
    Q('"Kitchen" có nghĩa là?', ['Phòng khách', 'Bếp', 'Phòng ngủ', 'Phòng tắm'], 1, 'Kitchen = (phòng) bếp.'),
    Q('"Bedroom" có nghĩa là?', ['Phòng tắm', 'Phòng ngủ', 'Phòng học', 'Phòng khách'], 1, 'Bed + room = phòng ngủ.'),
    Q('"There is a sofa ___ the living room." (trong)', ['on', 'in', 'at', 'under'], 1, 'Trong phòng dùng "in".'),
    Q('"Bathroom" có nghĩa là?', ['Bếp', 'Phòng tắm', 'Sân vườn', 'Ga ra'], 1, 'Bath + room = phòng tắm.'),
    Q('"My house has ___ rooms." (4 phòng)', ['four', 'fourth', 'a four', 'fours'], 0, 'Số đếm + danh từ số nhiều: four rooms.'),
    Q('"Garden" có nghĩa là?', ['Vườn', 'Ga ra', 'Tầng hầm', 'Mái nhà'], 0, 'Garden = vườn.'),
  ]),

  M(21, 'My day — Daily routines', [
    Q('"I get up at 6 a.m." có nghĩa là?', ['Tôi đi ngủ lúc 6 giờ sáng', 'Tôi thức dậy lúc 6 giờ sáng', 'Tôi ăn lúc 6 giờ', 'Tôi học lúc 6 giờ'], 1, 'Get up = thức dậy.'),
    Q('"Have breakfast" có nghĩa là?', ['Ăn sáng', 'Ăn trưa', 'Ăn tối', 'Uống nước'], 0, 'Breakfast = bữa sáng.'),
    Q('Chia: "She ___ to school at 7."', ['go', 'goes', 'going', 'went'], 1, 'She + goes.'),
    Q('"Go to bed" có nghĩa là?', ['Đi học', 'Đi ngủ', 'Đi chơi', 'Đi ăn'], 1, 'Go to bed = đi ngủ.'),
    Q('Sắp xếp đúng trong ngày:', ['get up – go to bed – have lunch', 'go to bed – get up – have breakfast', 'get up – have breakfast – go to school', 'have dinner – get up – go to school'], 2, 'Sáng: dậy → ăn sáng → đi học.'),
    Q('"What time do you go to school?" — đáp:', ['I go to school by bike', 'At 7 o\'clock', 'It is far', 'Yes, I do'], 1, 'Hỏi giờ → at + giờ.'),
  ]),

  M(22, 'School subjects', [
    Q('"Maths" có nghĩa là?', ['Văn', 'Toán', 'Tiếng Anh', 'Mỹ thuật'], 1, 'Maths = Toán.'),
    Q('"Vietnamese" trong lớp học là?', ['Lịch sử', 'Tiếng Việt', 'Thể dục', 'Âm nhạc'], 1, 'Môn Tiếng Việt.'),
    Q('"P.E." là viết tắt của?', ['Physical Education', 'Personal English', 'Public Event', 'Play English'], 0, 'P.E. = Physical Education = Thể dục.'),
    Q('"What\'s your favourite subject?" trả lời:', ['It\'s red', 'It\'s English', 'Yes, I do', 'I\'m fine'], 1, 'Subject = môn học; trả lời tên môn.'),
    Q('"I have Music ___ Tuesday."', ['in', 'on', 'at', 'to'], 1, 'Thứ trong tuần dùng "on": on Tuesday.'),
    Q('"Art" là môn?', ['Mỹ thuật', 'Khoa học', 'Toán', 'Lịch sử'], 0, 'Art = (mỹ) thuật.'),
  ]),

  M(23, 'School activities', [
    Q('"Have a music lesson" có nghĩa là?', ['Có giờ âm nhạc', 'Đi chơi nhạc', 'Mua nhạc', 'Nghe nhạc'], 0, 'Have a lesson = có giờ học.'),
    Q('"Recess" / "break time" có nghĩa là?', ['Giờ ra chơi', 'Giờ ngủ', 'Giờ ăn tối', 'Giờ về'], 0, 'Recess = giờ ra chơi.'),
    Q('"Do exercises" có nghĩa là?', ['Tập thể dục/làm bài tập', 'Đi học', 'Đi chơi', 'Đi ngủ'], 0, 'Do exercises = làm bài tập hoặc tập thể dục.'),
    Q('"Read a story" có nghĩa là?', ['Viết truyện', 'Đọc truyện', 'Vẽ truyện', 'Hát truyện'], 1, 'Read a story = đọc truyện.'),
    Q('Chia: "We ___ English on Mondays."', ['have', 'has', 'having', 'had'], 0, 'We + have.'),
    Q('"Sing a song" có nghĩa là?', ['Vẽ tranh', 'Hát một bài', 'Đọc thơ', 'Nhảy múa'], 1, 'Sing a song = hát một bài hát.'),
  ]),

  M(24, 'My favourite subject', [
    Q('"Why do you like English?" hỏi gì?', ['Bạn thích Tiếng Anh khi nào?', 'Vì sao bạn thích Tiếng Anh?', 'Bạn học Tiếng Anh ở đâu?', 'Ai dạy bạn Tiếng Anh?'], 1, 'Why = tại sao.'),
    Q('Trả lời "Why": dùng từ?', ['Where', 'Because', 'When', 'Who'], 1, 'Because = bởi vì.'),
    Q('"It\'s ___" — môn dễ:', ['easy', 'difficult', 'hard', 'boring'], 0, 'Easy = dễ.'),
    Q('"Interesting" có nghĩa là?', ['Chán', 'Thú vị', 'Khó', 'Dễ'], 1, 'Interesting = thú vị.'),
    Q('"Difficult" có nghĩa là?', ['Dễ', 'Khó', 'Vui', 'Buồn'], 1, 'Difficult = khó.'),
    Q('"How many subjects do you have?" hỏi gì?', ['Bao nhiêu môn?', 'Môn gì?', 'Mấy giờ học?', 'Học ở đâu?'], 0, 'How many = bao nhiêu (đếm được).'),
  ]),

  M(25, 'Where were you yesterday?', [
    Q('"Yesterday" có nghĩa là?', ['Hôm nay', 'Hôm qua', 'Ngày mai', 'Tuần trước'], 1, 'Yesterday = hôm qua.'),
    Q('"Where were you yesterday?" — đáp:', ['I am at home', 'I was at the zoo', 'I will be home', 'I go to school'], 1, 'Quá khứ của "am/is" là "was".'),
    Q('"They ___ at school yesterday."', ['was', 'were', 'are', 'is'], 1, 'They → were.'),
    Q('"Last week" có nghĩa là?', ['Tuần này', 'Tuần trước', 'Tuần sau', 'Hôm qua'], 1, 'Last week = tuần trước.'),
    Q('Chia: "She ___ tired yesterday."', ['is', 'was', 'were', 'are'], 1, 'She + was (quá khứ).'),
    Q('Câu hỏi đúng:', ['Where you were yesterday?', 'Where were you yesterday?', 'Where was you yesterday?', 'You were where yesterday?'], 1, 'Cấu trúc: Wh- + was/were + chủ ngữ?'),
  ]),

  M(26, 'What did you do? — Past simple (1)', [
    Q('"What did you do yesterday?" hỏi gì?', ['Hôm qua bạn làm gì?', 'Hôm nay bạn làm gì?', 'Ngày mai bạn làm gì?', 'Bạn đang làm gì?'], 0, 'Did + V → quá khứ.'),
    Q('Quá khứ của "play" là?', ['playing', 'plays', 'played', 'play'], 2, 'Động từ thường thêm -ed: played.'),
    Q('Quá khứ của "go" là?', ['goed', 'went', 'gone', 'going'], 1, 'Go → went (bất quy tắc).'),
    Q('"I ___ football yesterday."', ['play', 'plays', 'played', 'playing'], 2, 'Yesterday → quá khứ → played.'),
    Q('Sau "did" + chủ ngữ, động từ ở dạng?', ['quá khứ', 'nguyên thể', 'V-ing', 'V-s'], 1, 'Did + V nguyên thể: Did you play?'),
    Q('"Did you watch TV?" — đáp khẳng định:', ['Yes, I did', 'Yes, I do', 'Yes, I am', 'Yes, I was'], 0, 'Yes, I did / No, I didn\'t.'),
  ]),

  M(27, 'Past simple (2) — Irregular verbs', [
    Q('Quá khứ của "have" là?', ['haved', 'had', 'has', 'having'], 1, 'Have → had.'),
    Q('Quá khứ của "eat" là?', ['eated', 'eat', 'ate', 'eaten'], 2, 'Eat → ate.'),
    Q('Quá khứ của "see" là?', ['seed', 'saw', 'seen', 'sees'], 1, 'See → saw.'),
    Q('"He ___ to Hanoi last summer."', ['go', 'goes', 'went', 'gone'], 2, 'Last summer → went.'),
    Q('"I ___ a new book yesterday." (đọc)', ['read', 'readed', 'reads', 'reading'], 0, 'Read quá khứ giữ nguyên hình thức (phát âm khác).'),
    Q('Câu phủ định: "She ___ go to school."', ['don\'t', 'doesn\'t', 'didn\'t', 'wasn\'t'], 2, 'Quá khứ phủ định: didn\'t + V.'),
  ]),

  M(28, 'My summer holiday', [
    Q('"Summer holiday" có nghĩa là?', ['Kì nghỉ hè', 'Nghỉ Tết', 'Nghỉ đông', 'Nghỉ cuối tuần'], 0, 'Summer = hè; holiday = kì nghỉ.'),
    Q('"I went to the ___." (bãi biển)', ['beach', 'bench', 'beech', 'bean'], 0, 'Beach = bãi biển.'),
    Q('"Visit my grandparents" có nghĩa là?', ['Thăm ông bà', 'Gọi điện ông bà', 'Tặng quà ông bà', 'Tạm biệt ông bà'], 0, 'Visit = thăm.'),
    Q('Quá khứ của "swim":', ['swimmed', 'swam', 'swum', 'swims'], 1, 'Swim → swam.'),
    Q('"Where did you go last summer?" — đáp:', ['I will go', 'I went to Da Nang', 'I go now', 'I am at home'], 1, 'Quá khứ: went.'),
    Q('"It was great fun!" có nghĩa là?', ['Thật vui', 'Rất chán', 'Bình thường', 'Hơi mệt'], 0, 'Great fun = rất vui.'),
  ]),

  M(29, 'Future plans — be going to', [
    Q('"I am going to ___ Da Lat next week." (đi/đi thăm)', ['visit', 'visits', 'visited', 'visiting'], 0, 'Be going to + V nguyên thể.'),
    Q('"Tomorrow" có nghĩa là?', ['Hôm qua', 'Hôm nay', 'Ngày mai', 'Tuần sau'], 2, 'Tomorrow = ngày mai.'),
    Q('"What are you going to do tomorrow?" hỏi gì?', ['Hôm qua làm gì?', 'Mai bạn dự định làm gì?', 'Hôm nay làm gì?', 'Bạn thích gì?'], 1, 'Be going to V = dự định.'),
    Q('"Next weekend" có nghĩa là?', ['Cuối tuần trước', 'Cuối tuần này (tới)', 'Hằng tuần', 'Đầu tuần'], 1, 'Next weekend = cuối tuần tới.'),
    Q('Chọn câu đúng:', ['She is going to swims', 'She is going to swim', 'She going to swim', 'She is go to swim'], 1, 'Be + going to + V nguyên thể.'),
    Q('"I\'m going to be a teacher" có nghĩa là?', ['Tôi đang là giáo viên', 'Tôi sẽ trở thành giáo viên', 'Tôi từng là giáo viên', 'Tôi không thích giáo viên'], 1, 'Be going to = dự định/tương lai.'),
  ]),

  M(30, 'Means of transport', [
    Q('"By bike" có nghĩa là?', ['Đi bộ', 'Bằng xe đạp', 'Bằng máy bay', 'Bằng tàu'], 1, 'By bike = bằng xe đạp.'),
    Q('"How do you go to school?" — đáp:', ['I go to school', 'I go to school by bus', 'I am at school', 'Yes, I do'], 1, 'How → phương tiện: by bus.'),
    Q('"On foot" có nghĩa là?', ['Bằng xe', 'Đi bộ', 'Đi tàu', 'Đi máy bay'], 1, 'On foot = đi bộ (không dùng by foot).'),
    Q('"Plane" có nghĩa là?', ['Tàu hoả', 'Máy bay', 'Tàu thuỷ', 'Xe buýt'], 1, 'Plane = máy bay.'),
    Q('"Train" có nghĩa là?', ['Xe đạp', 'Tàu hoả', 'Ô tô', 'Xe máy'], 1, 'Train = tàu hoả.'),
    Q('Chọn câu đúng:', ['I go to school on bus', 'I go to school by bus', 'I go to school in bus', 'I go to school with bus'], 1, 'Phương tiện: by + bus.'),
  ]),

  M(31, 'Articles a / an / the', [
    Q('"___ apple a day…" — chỗ trống là?', ['A', 'An', 'The', '∅'], 1, 'Apple bắt đầu nguyên âm → an.'),
    Q('"I have ___ dog. ___ dog is white."', ['a / The', 'an / A', 'the / A', 'a / A'], 0, 'Lần đầu: a; nhắc lại: the.'),
    Q('Khi nào dùng "the"?', ['Lần đầu nhắc đến', 'Vật xác định/đã nhắc rồi', 'Bất kỳ danh từ số nhiều', 'Tên người'], 1, 'The dùng cho danh từ xác định.'),
    Q('"He is ___ honest boy."', ['a', 'an', 'the', '∅'], 1, 'Honest đọc /ˈɒn.ɪst/ — âm /o/ → an honest.'),
    Q('"I play ___ piano every day."', ['a', 'an', 'the', '∅'], 2, 'Nhạc cụ chơi: the + nhạc cụ.'),
    Q('"I have ___ orange juice."', ['a', 'an', 'the', '∅'], 3, 'Danh từ không đếm được, không xác định → không mạo từ (hoặc some).'),
  ]),

  M(32, 'Present continuous', [
    Q('Cấu trúc hiện tại tiếp diễn:', ['S + V-s', 'S + am/is/are + V-ing', 'S + V-ed', 'S + will + V'], 1, 'S + be + V-ing.'),
    Q('"She ___ a book now."', ['read', 'reads', 'is reading', 'reading'], 2, 'Now → tiếp diễn → is reading.'),
    Q('Dấu hiệu tiếp diễn:', ['every day', 'now / at the moment', 'yesterday', 'last week'], 1, 'Now, at the moment, look! ...'),
    Q('"They ___ football in the yard."', ['plays', 'are playing', 'play', 'played'], 1, 'They + are + V-ing.'),
    Q('Chọn câu SAI:', ['I am eating lunch', 'He is sleeping', 'We are studying', 'She are running'], 3, 'She + IS, không phải are.'),
    Q('Phủ định: "He ___ watching TV now."', ['don\'t', 'doesn\'t', 'isn\'t', 'aren\'t'], 2, 'He + isn\'t + V-ing.'),
  ]),

  M(33, 'Comparing present simple vs continuous', [
    Q('"I ___ to school every day."', ['go', 'goes', 'am going', 'went'], 0, 'Every day → hiện tại đơn → go.'),
    Q('"Look! The baby ___."', ['cries', 'is crying', 'cried', 'cry'], 1, 'Look! → đang diễn ra → is crying.'),
    Q('"She always ___ early."', ['gets up', 'is getting up', 'got up', 'getting up'], 0, 'Always → hiện tại đơn.'),
    Q('"They ___ in the park now."', ['run', 'runs', 'are running', 'ran'], 2, 'Now → tiếp diễn.'),
    Q('"He ___ English on Mondays."', ['learns', 'is learning', 'learn', 'learning'], 0, 'On Mondays → thói quen → learns.'),
    Q('"Listen! She ___ a song."', ['sing', 'sings', 'is singing', 'sang'], 2, 'Listen! → đang diễn ra → is singing.'),
  ]),

  M(34, 'Review HK2 — Vocabulary & Reading', [
    Q('Chọn từ KHÁC nhóm:', ['summer', 'winter', 'spring', 'Monday'], 3, 'Ba từ đầu là mùa; Monday là thứ.'),
    Q('"I went to the beach ___ summer." (vào)', ['in', 'on', 'at', 'to'], 0, 'Mùa dùng "in": in summer.'),
    Q('Đọc: "Nam is going to visit Hue next week." Nam sẽ?', ['Đã đi Huế', 'Đang ở Huế', 'Sẽ đi Huế', 'Không đi Huế'], 2, 'Be going to → dự định tương lai.'),
    Q('"Travel" có nghĩa là?', ['Du lịch/Đi lại', 'Ăn uống', 'Học', 'Ngủ'], 0, 'Travel = du lịch.'),
    Q('Đối lập với "hot" là?', ['cool', 'warm', 'cold', 'sunny'], 2, 'Hot ↔ cold.'),
    Q('"My favourite season is ___" — câu đúng:', ['spring', 'on spring', 'a spring', 'the spring'], 0, 'Trả lời ngắn gọn bằng tên mùa.'),
  ]),

  M(35, 'Review HK2 — Grammar mix', [
    Q('"They ___ to the zoo last Sunday."', ['go', 'goes', 'went', 'are going'], 2, 'Last Sunday → went.'),
    Q('"What ___ you do tomorrow?" (dự định)', ['do', 'did', 'are going to', 'were'], 2, 'Tomorrow + dự định → are going to.'),
    Q('"She ___ piano very well."', ['can play', 'can plays', 'cans play', 'is can play'], 0, 'Can + V nguyên thể.'),
    Q('"I ___ a sandwich now."', ['eat', 'eats', 'am eating', 'ate'], 2, 'Now → tiếp diễn → am eating.'),
    Q('Đáp: "Did you go out yesterday?"', ['Yes, I do', 'Yes, I did', 'Yes, I am', 'Yes, I was'], 1, 'Did → Yes, I did / No, I didn\'t.'),
    Q('"There ___ many students in my class."', ['is', 'are', 'am', 'be'], 1, 'Students số nhiều → are.'),
  ]),
];

export const P4TA_SCENARIOS = indexBy(P4TA_WEEKS);
