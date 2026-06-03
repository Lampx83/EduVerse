// ============================================================
// Lớp 5 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35 · T22 nghỉ Tết)
// Bám SGK GDPT 2018 / chương trình 10 năm.
// ID prefix: "P5TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P5TA', 'tieng-anh', n, title, qs, opts);

export const P5TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Hello — Back to school', [
    Q('"Hello" có nghĩa là?', ['Cảm ơn', 'Xin chào', 'Tạm biệt', 'Xin lỗi'], 1, 'Hello = Xin chào.'),
    Q('"How are you?" trả lời?', ['I am fine, thank you.', 'I am 10.', 'Yes, I do.', 'My name is Lan.'], 0, '"How are you?" hỏi sức khỏe.'),
    Q('"Nice to meet you." nghĩa là?', ['Xin lỗi', 'Rất vui được gặp bạn', 'Hẹn gặp lại', 'Tạm biệt'], 1, 'Nice to meet you = rất vui được gặp bạn.'),
    Q('"What is your name?" trả lời?', ['Hello, nice to meet you.', 'I am fine.', 'I am 10.', 'My name is Mai.'], 3, 'Hỏi tên → trả lời "My name is …".'),
    Q('"How old are you?" trả lời?', ['My name is Lan.', 'My name is Nam.', 'I am fine.', 'I am 10 years old.'], 3, 'Hỏi tuổi → "I am … years old."'),
    Q('"Goodbye" nghĩa là?', ['Cảm ơn', 'Xin chào', 'Xin lỗi', 'Tạm biệt'], 3, 'Goodbye = tạm biệt.'),
  ]),

  M(2, 'Where are you from?', [
    Q('"Where are you from?" hỏi về?', ['Sở thích cá nhân', 'Địa chỉ nhà cụ thể', 'Quê quán/Quốc tịch', 'Nghề nghiệp'], 2, 'Hỏi đến từ đâu.'),
    Q('"I am from Vietnam." nghĩa là?', ['Tôi ở Anh', 'Tôi đến từ Việt Nam', 'Tôi là người Mỹ', 'Tôi 10 tuổi'], 1, 'Trả lời quê quán.'),
    Q('Người Anh là?', ['French', 'Vietnamese', 'American', 'English'], 3, 'English = người Anh.'),
    Q('Người Nhật là?', ['Japanese', 'Korean', 'Chinese', 'Vietnamese (người Việt)'], 0, 'Japanese = người Nhật.'),
    Q('Quốc gia Australia tiếng Anh là?', ['Africa', 'Austria', 'Australia', 'America'], 2, 'Australia = nước Úc.'),
    Q('"Where" có nghĩa?', ['Khi nào', 'Ở đâu', 'Cái gì', 'Tại sao'], 1, 'Where = ở đâu.'),
  ]),

  M(3, 'Daily routine', [
    Q('"I get up at 6 a.m." — "get up" nghĩa là?', ['Đi học', 'Ăn cơm', 'Đi ngủ', 'Thức dậy'], 3, 'Get up = thức dậy.'),
    Q('"Brush teeth" nghĩa là?', ['Chải tóc', 'Đánh răng', 'Đi học', 'Rửa mặt'], 1, 'Brush teeth = đánh răng.'),
    Q('"Have breakfast" nghĩa là?', ['Ăn sáng', 'Ăn tối', 'Uống nước', 'Ăn trưa'], 0, 'Breakfast = bữa sáng.'),
    Q('"What time do you go to school?" trả lời?', ['I go to school at 7 a.m.', 'I like school very much.', 'I am 10.', 'I am fine.'], 0, 'Hỏi giờ đi học.'),
    Q('"Go to bed" nghĩa là?', ['Thức dậy', 'Đi ngủ', 'Ăn sáng', 'Đi học'], 1, 'Go to bed = đi ngủ.'),
    Q('Câu nào ở present simple đúng?', ['I get up at 6.', 'I got up at 6.', 'I getting up at 6.', 'I gets up at 6.'], 0, 'Chủ ngữ "I" → động từ nguyên mẫu.'),
  ]),

  M(4, 'School subjects', [
    Q('"Math" có nghĩa là?', ['Ngữ văn', 'Toán', 'Tiếng Anh', 'Vật lý'], 1, 'Math (Maths) = Toán.'),
    Q('"English" là môn?', ['Tiếng Anh', 'Tiếng Nhật', 'Tiếng Pháp', 'Tiếng Trung'], 0, 'English = Tiếng Anh.'),
    Q('"Science" có nghĩa?', ['Tin học', 'Địa lý', 'Khoa học', 'Lịch sử'], 2, 'Science = khoa học.'),
    Q('"What is your favourite subject?" trả lời?', ['Goodbye.', 'I am fine.', 'I am 10.', 'My favourite subject is Math.'], 3, 'Hỏi môn yêu thích.'),
    Q('"Music" có nghĩa?', ['Khoa học', 'Âm nhạc', 'Mỹ thuật', 'Thể thao'], 1, 'Music = âm nhạc.'),
    Q('"Information Technology / IT" là môn?', ['Công nghệ', 'Tin học', 'Khoa học tự nhiên', 'Mỹ thuật'], 1, 'IT = tin học.'),
  ]),

  M(5, 'Hobbies — Like + V-ing', [
    Q('"I like reading books." nghĩa là?', ['Tôi thích đọc sách', 'Tôi không đọc', 'Tôi ghét sách', 'Tôi mua sách'], 0, 'Like + V-ing = thích làm gì.'),
    Q('Sau "like" thường dùng?', ['V-ing', 'V nguyên mẫu', 'V quá khứ', 'Danh từ riêng'], 0, 'Like + V-ing (hoặc to-V) → thường dùng V-ing.'),
    Q('"What is your hobby?" trả lời?', ['I am fine.', 'I am 10.', 'I have a hobby.', 'My hobby is dancing.'], 3, 'Hỏi sở thích.'),
    Q('"Swimming" nghĩa là?', ['Đọc sách', 'Bơi lội', 'Vẽ tranh', 'Chạy bộ'], 1, 'Swimming = bơi.'),
    Q('"Painting" nghĩa là?', ['Vẽ tranh', 'Chụp ảnh', 'Ca hát', 'Đọc sách'], 0, 'Painting = vẽ tranh.'),
    Q('"I don\'t like ___ cartoons." điền?', ['watches', 'to watch', 'watching', 'watched'], 2, 'Like + V-ing.'),
  ]),

  M(6, 'Sports', [
    Q('"Football" là?', ['Bóng chuyền', 'Bóng bàn', 'Bóng đá', 'Bóng rổ'], 2, 'Football = bóng đá.'),
    Q('"Basketball" nghĩa là?', ['Cầu lông', 'Bóng đá', 'Bóng bàn', 'Bóng rổ'], 3, 'Basketball = bóng rổ.'),
    Q('"Badminton" nghĩa là?', ['Bóng đá', 'Tennis', 'Cầu lông', 'Bóng rổ'], 2, 'Badminton = cầu lông.'),
    Q('"Do you like swimming?" trả lời (có)?', ['No, I do.', 'Yes, I do.', 'Yes, I am.', 'Yes, I likes.'], 1, 'Câu hỏi với do → Yes, I do.'),
    Q('"Can you play the piano?" trả lời (không)?', ['No, I can not.', 'No, I do not.', 'Yes, I can.', 'No, I am not.'], 0, 'Hỏi với can → trả lời với can/cannot.'),
    Q('"Table tennis" là?', ['Bóng bàn', 'Quần vợt', 'Cầu lông', 'Bóng chuyền'], 0, 'Table tennis = bóng bàn.'),
  ]),

  M(7, 'Can / Can\'t', [
    Q('"Can" diễn tả?', ['Quá khứ', 'Mệnh lệnh', 'Khả năng', 'Tương lai'], 2, 'Can → khả năng / có thể.'),
    Q('Sau "can" là?', ['V + s/es', 'V nguyên mẫu', 'V quá khứ', 'V + ed'], 1, 'Can + V nguyên mẫu.'),
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi biết bơi', 'Tôi đã bơi', 'Tôi sẽ bơi'], 1, 'Can swim = biết/có thể bơi.'),
    Q('Phủ định của "can" là?', ['will not', 'do not', 'is not', 'can not / cannot / can\'t'], 3, 'Can\'t = cannot.'),
    Q('"Can you sing?" → trả lời (có thể)?', ['Yes, I will.', 'Yes, I do.', 'Yes, I am.', 'Yes, I can.'], 3, 'Hỏi với can → trả lời với can.'),
    Q('"I ___ play the guitar but I can sing." điền?', ['don\'t (không phù hợp ngữ pháp)', 'can (mâu thuẫn với but)', 'can\'t', 'didn\'t (sai thì)'], 2, 'Mâu thuẫn với "but I can sing" → can\'t.'),
  ]),

  M(8, 'Past simple — was / were', [
    Q('"Was" dùng với chủ ngữ?', ['I, he, she, it', 'I, you', 'We, you, they', 'You, we, they'], 0, 'Was → I, he, she, it.'),
    Q('"Were" dùng với?', ['It, she', 'You, we, they', 'Một mình it', 'He, she, it'], 1, 'Were → you, we, they.'),
    Q('"I ___ at school yesterday." điền?', ['am (sai thì hiện tại)', 'are (sai chủ ngữ)', 'was', 'were (sai chủ ngữ)'], 2, 'I + was.'),
    Q('"They ___ happy yesterday." điền?', ['are (sai thì)', 'were', 'was (sai số)', 'have (không phải tobe)'], 1, 'They + were.'),
    Q('Phủ định "was" là?', ['weren\'t', 'didn\'t', 'aren\'t', 'wasn\'t'], 3, 'Was not → wasn\'t.'),
    Q('"Were you at home last night?" trả lời (có)?', ['Yes, I was.', 'Yes, I did.', 'Yes, I am.', 'Yes, I were.'], 0, 'Were → trả lời với was/were.'),
  ]),

  M(9, 'Past simple — V-ed regular', [
    Q('Quá khứ của "play" là?', ['plaied', 'playing', 'played', 'playd'], 2, 'Play → played (regular).'),
    Q('Quá khứ của "study" là?', ['studyed', 'studyd', 'studied', 'studyied'], 2, 'y → i + ed → studied.'),
    Q('Quá khứ của "stop" là?', ['stopped', 'stops', 'stopping', 'stoped'], 0, 'Stop → stopped (gấp đôi p).'),
    Q('"I ___ football yesterday." điền (play)?', ['played', 'will play', 'plaied', 'playing'], 0, 'Yesterday → quá khứ.'),
    Q('"She ___ TV last night." điền (watch)?', ['watched', 'watching', 'will watch', 'watches'], 0, 'Watched (V-ed).'),
    Q('Từ tín hiệu của quá khứ đơn?', ['next week', 'yesterday, last night, ago', 'tomorrow', 'every day, always'], 1, 'Yesterday, last night, ago → quá khứ.'),
  ]),

  M(10, 'Past simple — irregular verbs', [
    Q('Quá khứ của "go" là?', ['gone', 'went', 'goes', 'wented'], 1, 'Go → went (bất quy tắc).'),
    Q('Quá khứ của "have" là?', ['hadded', 'having', 'has', 'had'], 3, 'Have → had.'),
    Q('Quá khứ của "eat" là?', ['eaten', 'eating', 'eats', 'ate'], 3, 'Eat → ate.'),
    Q('Quá khứ của "see" là?', ['sawed', 'saw', 'seeing', 'sees'], 1, 'See → saw.'),
    Q('"I ___ to the zoo last Sunday." điền?', ['goed', 'will go', 'goes', 'went'], 3, 'Last Sunday → went.'),
    Q('"She ___ a new dress yesterday." điền (have)?', ['had', 'has', 'having', 'haves'], 0, 'Yesterday → had.'),
  ]),

  M(11, 'Past simple — Wh-questions', [
    Q('"What did you do yesterday?" hỏi về?', ['Ngày mai', 'Sở thích', 'Hoạt động hôm qua', 'Hôm nay'], 2, 'Hỏi về hành động đã làm hôm qua.'),
    Q('Cấu trúc câu hỏi quá khứ đơn?', ['Does + S + V?', 'Do + S + V?', 'Did + S + V?', 'Was + S + V?'], 2, 'Did + S + V (nguyên mẫu)?'),
    Q('"Where ___ you go last weekend?" điền?', ['will (sai thì tương lai)', 'do (sai thì hiện tại)', 'did', 'was (sai dạng trợ động từ)'], 2, 'Last weekend → did.'),
    Q('"I ___ go to school yesterday." (phủ định) điền?', ['weren\'t', 'didn\'t', 'wasn\'t', 'doesn\'t'], 1, 'Didn\'t + V.'),
    Q('"Did you watch TV?" trả lời (có)?', ['Yes, I did.', 'Yes, I was.', 'Yes, I do.', 'Yes, I am.'], 0, 'Did → Yes, I did.'),
    Q('"How was your trip?" hỏi?', ['Sức khỏe', 'Phương tiện đi', 'Chuyến đi như thế nào', 'Bạn đi cùng ai'], 2, 'How was = … thế nào.'),
  ]),

  M(12, 'Future — will / be going to', [
    Q('"Will" diễn tả?', ['Mệnh lệnh', 'Tương lai', 'Hiện tại', 'Quá khứ'], 1, 'Will → tương lai.'),
    Q('Sau "will" là?', ['V + s/es', 'V + ed', 'V quá khứ', 'V nguyên mẫu'], 3, 'Will + V nguyên mẫu.'),
    Q('"Tomorrow, I ___ visit my grandma." điền?', ['am (sai thì tương lai)', 'will', 'went (sai thì quá khứ)', 'was (sai thì quá khứ)'], 1, 'Tomorrow → will.'),
    Q('"Be going to" dùng diễn tả?', ['Quá khứ tiếp diễn', 'Kế hoạch / dự định', 'Quá khứ', 'Hiện tại đơn'], 1, 'Be going to → dự định.'),
    Q('"I am going to ___ a doctor." điền?', ['being (sai cấu trúc)', 'am (đã có am ở trước)', 'to be (thừa to)', 'be'], 3, 'Going to + V nguyên mẫu.'),
    Q('Phủ định của "will" là?', ['do not', 'is not', 'did not', 'will not / won\'t'], 3, 'Won\'t = will not.'),
  ]),

  M(13, 'Comparative — adjectives', [
    Q('So sánh hơn của "tall" là?', ['more tall', 'most tall', 'tallest', 'taller'], 3, 'Tall → taller (1 âm tiết + er).'),
    Q('So sánh hơn của "big" là?', ['bigger', 'more big', 'biggest', 'more bigger'], 0, 'Big → bigger (gấp đôi g + er).'),
    Q('So sánh hơn của "beautiful" là?', ['beautifuler', 'more beautiful', 'beautifulest', 'most beautiful'], 1, 'Tính từ dài → more + adj.'),
    Q('"Mai is ___ than Lan." (tall) điền?', ['the tallest', 'tallest', 'more tall', 'taller'], 3, 'So sánh hơn: taller.'),
    Q('Sau so sánh hơn dùng?', ['as (dùng cho bằng nhau)', 'from (sai giới từ)', 'than', 'that (sai loại từ)'], 2, '… er + than …'),
    Q('"Good" so sánh hơn là?', ['best', 'better', 'more good', 'gooder'], 1, 'Bất quy tắc: good → better.'),
  ]),

  M(14, 'Superlative — adjectives', [
    Q('So sánh nhất của "tall"?', ['taller', 'tallest', 'most tall', 'more tall'], 1, 'Tall → tallest (1 âm tiết + est).'),
    Q('So sánh nhất của "big"?', ['most biggest', 'biggest', 'most big', 'bigest'], 1, 'Big → biggest.'),
    Q('So sánh nhất của "beautiful"?', ['more beautiful', 'beautifulest', 'beautifuler', 'most beautiful'], 3, 'Tính từ dài → most + adj.'),
    Q('Trước so sánh nhất thường có?', ['a (mạo từ không xác định)', 'the', 'an (mạo từ không xác định)', 'this (đại từ chỉ định)'], 1, 'The + superlative.'),
    Q('"Phan Xi Păng is the ___ mountain in Vietnam." (high) điền?', ['higher', 'more high', 'highest', 'most high'], 2, 'Núi cao nhất → highest.'),
    Q('"Good" so sánh nhất là?', ['most good', 'goodest', 'better', 'best'], 3, 'Bất quy tắc: good → best.'),
  ]),

  M(15, 'Should / Shouldn\'t', [
    Q('"Should" dùng để?', ['Quá khứ', 'Mệnh lệnh quân sự', 'Cho lời khuyên', 'Hỏi tuổi'], 2, 'Should → lời khuyên.'),
    Q('Sau "should" là?', ['V + s/es', 'V nguyên mẫu', 'V quá khứ', 'V + ed'], 1, 'Should + V nguyên mẫu.'),
    Q('"You should ___ enough water." điền?', ['drink', 'to drink', 'drinking', 'drinks'], 0, 'Drink (nguyên mẫu).'),
    Q('"You shouldn\'t eat too much sugar." nghĩa?', ['Bạn nên ăn đường', 'Bạn phải ăn', 'Bạn không nên ăn quá nhiều đường', 'Bạn cấm ăn'], 2, 'Shouldn\'t → không nên.'),
    Q('Bạn bị nhức đầu — lời khuyên hợp lý?', ['You should run.', 'You should rest.', 'You should eat candy.', 'You should swim.'], 1, 'Nhức đầu → nên nghỉ ngơi.'),
    Q('"Should I take an umbrella?" trả lời?', ['Yes, I do.', 'Yes, I was.', 'Yes, you should.', 'Yes, I am.'], 2, 'Hỏi với should → trả lời với should.'),
  ]),

  M(16, 'Illnesses — At the doctor', [
    Q('"Headache" nghĩa là?', ['Đau bụng', 'Nhức đầu', 'Ho khan', 'Đau răng'], 1, 'Headache = nhức đầu.'),
    Q('"Fever" nghĩa là?', ['Sổ mũi', 'Đau họng', 'Đau tai', 'Sốt'], 3, 'Fever = sốt.'),
    Q('"Toothache" nghĩa là?', ['Nhức đầu', 'Đau lưng', 'Đau răng', 'Đau bụng'], 2, 'Toothache = đau răng.'),
    Q('"Stomachache" nghĩa là?', ['Đau tay', 'Đau đầu', 'Đau chân', 'Đau bụng'], 3, 'Stomachache = đau bụng.'),
    Q('"What\'s the matter with you?" hỏi?', ['Quê quán', 'Tên bạn', 'Tuổi bạn', 'Bạn bị làm sao'], 3, 'Hỏi về bệnh / vấn đề.'),
    Q('"I have a ___." (sốt) điền?', ['sore throat', 'fever', 'headache', 'toothache'], 1, 'Có sốt → fever.'),
  ]),

  M(17, 'Giving directions', [
    Q('"Turn left" nghĩa là?', ['Rẽ trái', 'Đi thẳng', 'Rẽ phải', 'Quay đầu'], 0, 'Turn left = rẽ trái.'),
    Q('"Turn right" nghĩa là?', ['Đi thẳng', 'Rẽ trái', 'Đứng yên', 'Rẽ phải'], 3, 'Turn right = rẽ phải.'),
    Q('"Go straight" nghĩa là?', ['Đi thẳng', 'Rẽ phải', 'Rẽ trái', 'Quay đầu'], 0, 'Go straight = đi thẳng.'),
    Q('"How can I get to the post office?" hỏi?', ['Giá tiền', 'Tên bưu điện', 'Cách đến bưu điện', 'Giờ mở cửa'], 2, 'How can I get to … = đường đến đâu.'),
    Q('"Opposite" nghĩa là?', ['Đằng sau', 'Đối diện', 'Phía trước', 'Bên cạnh'], 1, 'Opposite = đối diện.'),
    Q('"Next to" nghĩa là?', ['Đằng sau', 'Bên cạnh', 'Phía trước', 'Đối diện'], 1, 'Next to = bên cạnh.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('"My name is Lan. ___ am 10." điền?', ['My (sai loại đại từ)', 'It (sai ngôi)', 'We (sai số)', 'I'], 3, 'Tự giới thiệu → I.'),
    Q('"I ___ to school yesterday." điền?', ['will go', 'went', 'go', 'go (sai thì)'], 1, 'Yesterday → went.'),
    Q('"What is your favourite ___?" điền (môn học)?', ['animal', 'subject', 'sport', 'colour'], 1, 'Subject = môn học.'),
    Q('"She is ___ than me." điền (tall)?', ['tall', 'more tall', 'taller', 'tallest'], 2, 'So sánh hơn → taller.'),
    Q('"You should ___ to bed early." điền?', ['go', 'to go', 'gone', 'will go'], 0, 'Should + V nguyên mẫu.'),
    Q('"I am from ___." (Việt Nam) điền?', ['Vietnamese', 'Vietnames', 'Viet Nam city', 'Vietnam'], 3, 'Tên nước: Vietnam.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Ordinal numbers — Dates', [
    Q('"First" là số?', ['3rd', '1st', '4th', '2nd'], 1, 'First = thứ nhất = 1st.'),
    Q('"Second" là số?', ['2nd', '3rd', '1st', '4th'], 0, 'Second = thứ hai = 2nd.'),
    Q('"Third" là số?', ['4th', '3rd', '5th', '2nd'], 1, 'Third = thứ ba = 3rd.'),
    Q('"5th" đọc là?', ['five', 'fifth', 'fiveth', 'fiveth'], 1, '5th = fifth.'),
    Q('"What\'s the date today?" trả lời?', ['It is sunny.', 'I am 10.', 'I am fine.', 'It\'s September 2nd.'], 3, 'Hỏi ngày tháng.'),
    Q('"Twelfth" là số?', ['12th', '11th', '10th', '20th'], 0, '12th = twelfth.'),
  ]),

  M(20, 'Jobs', [
    Q('"Teacher" là?', ['Bác sĩ', 'Cảnh sát', 'Đầu bếp', 'Giáo viên'], 3, 'Teacher = giáo viên.'),
    Q('"Doctor" là?', ['Bác sĩ', 'Lái xe', 'Giáo viên', 'Công nhân'], 0, 'Doctor = bác sĩ.'),
    Q('"Farmer" là?', ['Công nhân', 'Nông dân', 'Lái xe', 'Ngư dân'], 1, 'Farmer = nông dân.'),
    Q('"What does your father do?" hỏi?', ['Bố bạn ở đâu', 'Bố bạn tên gì', 'Bố bạn làm nghề gì', 'Bố bạn bao nhiêu tuổi'], 2, 'What … do? hỏi nghề.'),
    Q('"My mother is a ___." (y tá) điền?', ['doctor', 'farmer', 'teacher', 'nurse'], 3, 'Nurse = y tá.'),
    Q('"Worker" là?', ['Họa sĩ', 'Diễn viên', 'Công nhân', 'Bác sĩ'], 2, 'Worker = công nhân.'),
  ]),

  M(21, 'Animals at the zoo', [
    Q('"Lion" là?', ['Báo đốm', 'Gấu nâu', 'Cá sấu', 'Sư tử'], 3, 'Lion = sư tử.'),
    Q('"Tiger" là?', ['Sói rừng', 'Báo đốm', 'Gấu nâu', 'Hổ'], 3, 'Tiger = hổ.'),
    Q('"Elephant" là?', ['Tê giác', 'Hà mã', 'Hươu cao cổ', 'Voi'], 3, 'Elephant = voi.'),
    Q('"Monkey" là?', ['Tinh tinh', 'Gấu nâu', 'Khỉ', 'Chuột túi'], 2, 'Monkey = khỉ.'),
    Q('"Giraffe" là?', ['Ngựa vằn', 'Lạc đà', 'Hươu cao cổ', 'Tê giác'], 2, 'Giraffe = hươu cao cổ.'),
    Q('"Where is the lion?" trả lời?', ['I am 10.', 'It is a tiger.', 'It is in the cage.', 'I am fine.'], 2, 'Where → vị trí.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Tet holiday', [
    Q('"Tet holiday" là?', ['Tết Nguyên Đán', 'Giáng sinh', 'Quốc khánh', 'Trung Thu'], 0, 'Tet = Tết Nguyên Đán.'),
    Q('"Banh chung" là?', ['Bánh tét', 'Bánh mì', 'Bánh chưng', 'Bánh dày'], 2, 'Banh chung = bánh chưng.'),
    Q('"Happy New Year" nghĩa là?', ['Chúc ngủ ngon', 'Chúc mừng năm mới', 'Chúc sinh nhật', 'Chúc thi tốt'], 1, 'Happy New Year = chúc mừng năm mới.'),
    Q('"What do you do at Tet?" trả lời?', ['I visit my grandparents.', 'I am 10.', 'I am fine.', 'My name is Lan.'], 0, 'Hỏi hoạt động dịp Tết.'),
    Q('"Lucky money" là?', ['Tiền lương', 'Tiền lì xì', 'Tiền vay', 'Tiền thưởng'], 1, 'Lucky money = tiền lì xì.'),
    Q('"Spring" là?', ['Mùa đông', 'Mùa hè', 'Mùa thu', 'Mùa xuân'], 3, 'Spring = mùa xuân.'),
  ]),

  M(23, 'Weather — Seasons', [
    Q('"Sunny" nghĩa là?', ['Có mưa', 'Nắng', 'Lạnh giá', 'Có mây'], 1, 'Sunny = có nắng.'),
    Q('"Rainy" nghĩa là?', ['Có nắng', 'Mưa', 'Có gió', 'Có sấm'], 1, 'Rainy = có mưa.'),
    Q('"Hot" nghĩa là?', ['Mát mẻ', 'Ấm áp', 'Nóng', 'Lạnh giá'], 2, 'Hot = nóng.'),
    Q('"Summer" là mùa?', ['Mùa thu', 'Hè', 'Mùa xuân', 'Mùa đông'], 1, 'Summer = mùa hè.'),
    Q('"Winter" là mùa?', ['Mùa thu', 'Mùa hè', 'Mùa xuân', 'Đông'], 3, 'Winter = mùa đông.'),
    Q('"What\'s the weather like today?" trả lời?', ['It is Monday.', 'My name is Lan.', 'I am 10.', 'It is sunny.'], 3, 'Hỏi thời tiết.'),
  ]),

  M(24, 'Hobbies — extended', [
    Q('"Reading" là sở thích?', ['Vẽ tranh', 'Đọc sách', 'Đá bóng', 'Xem TV'], 1, 'Reading = đọc.'),
    Q('"Dancing" nghĩa là?', ['Hát hò', 'Khiêu vũ', 'Bơi lội', 'Vẽ tranh'], 1, 'Dancing = khiêu vũ.'),
    Q('"Cooking" nghĩa là?', ['Lái xe', 'Nấu ăn', 'Đọc sách', 'Quét nhà'], 1, 'Cooking = nấu ăn.'),
    Q('"What do you like doing?" trả lời?', ['I like ___ing.', 'I am fine.', 'I do my homework.', 'I am 10.'], 0, 'Hỏi sở thích bằng "doing".'),
    Q('"Photography" nghĩa là?', ['Vẽ tranh', 'Chụp ảnh', 'Quay phim', 'Sưu tầm tem'], 1, 'Photography = nhiếp ảnh.'),
    Q('Câu nào đúng?', ['I likes swim.', 'I like swims.', 'I like to swimming.', 'I like swimming.'], 3, 'Like + V-ing.'),
  ]),

  M(25, 'My birthday — Months', [
    Q('"January" là tháng?', ['12', '2', '3', '1'], 3, 'January = tháng 1.'),
    Q('"December" là tháng?', ['12', '10', '9', '11'], 0, 'December = tháng 12.'),
    Q('"When is your birthday?" trả lời?', ['I am 10.', 'It is on the table.', 'My birthday is on May 5th.', 'I am fine.'], 2, 'Hỏi ngày sinh.'),
    Q('"April" là tháng?', ['5', '3', '4', '6'], 2, 'April = tháng 4.'),
    Q('Tháng 9 tiếng Anh là?', ['October', 'August', 'September', 'November'], 2, 'September = tháng 9.'),
    Q('"What present do you want?" hỏi?', ['Tên bạn', 'Bạn bao nhiêu tuổi', 'Quà gì bạn muốn', 'Bữa tiệc khi nào'], 2, 'Present = quà.'),
  ]),

  M(26, 'Comparing animals — superlative', [
    Q('"Big" so sánh nhất là?', ['biggest', 'bigest', 'more bigger', 'more big'], 0, 'Big → biggest.'),
    Q('"Small" so sánh hơn?', ['most small', 'smallest', 'more small', 'smaller'], 3, 'Small → smaller.'),
    Q('"The elephant is the ___ animal at the zoo." (big) điền?', ['biggest', 'bigger', 'more big', 'the most big'], 0, 'The biggest.'),
    Q('"Fast" so sánh nhất?', ['fastest', 'more fast', 'faster', 'most fast'], 0, 'Fast → fastest.'),
    Q('"The cheetah is the ___ animal." (fast) điền?', ['faster', 'the faster', 'fastest', 'most fast'], 2, 'The fastest.'),
    Q('Cấu trúc so sánh nhất?', ['adj-er + than', 'as + adj + as', 'more + adj', 'The + adj-est / most + adj'], 3, 'The + adj-est hoặc the most + adj.'),
  ]),

  M(27, 'My future job — going to', [
    Q('"I am going to be a ___." (giáo viên) điền?', ['classroom', 'teacher', 'student', 'school'], 1, 'Teacher = giáo viên.'),
    Q('"Be going to" diễn tả?', ['Kế hoạch tương lai', 'Hiện tại đơn', 'Mệnh lệnh', 'Quá khứ'], 0, 'Be going to → dự định.'),
    Q('"What are you going to be?" hỏi?', ['Sở thích hiện tại', 'Họ tên đầy đủ', 'Nghề tương lai', 'Quê quán'], 2, 'Hỏi nghề muốn làm.'),
    Q('"She ___ going to be a nurse." điền?', ['are (sai ngôi)', 'were (sai thì)', 'is', 'am (sai ngôi)'], 2, 'She + is.'),
    Q('"Pilot" là?', ['Phi công', 'Giáo viên', 'Nông dân', 'Bác sĩ'], 0, 'Pilot = phi công.'),
    Q('"Engineer" là?', ['Kỹ sư', 'Lái xe', 'Đầu bếp', 'Bác sĩ'], 0, 'Engineer = kỹ sư.'),
  ]),

  M(28, 'My free time', [
    Q('"Free time" nghĩa là?', ['Giờ học', 'Giờ ngủ', 'Giờ ăn', 'Thời gian rảnh'], 3, 'Free time = thời gian rảnh.'),
    Q('"In my free time, I like ___." điền?', ['to read', 'will read', 'read books', 'reading'], 3, 'Like + V-ing.'),
    Q('"Watch TV" nghĩa?', ['Đi dạo', 'Chơi game', 'Xem TV', 'Đọc sách'], 2, 'Watch TV = xem TV.'),
    Q('"Play games" nghĩa?', ['Chơi nhạc', 'Đọc sách', 'Chơi game', 'Chơi đá bóng'], 2, 'Play games = chơi trò chơi.'),
    Q('"How often do you read books?" hỏi?', ['Loại sách yêu thích', 'Thời gian đọc', 'Nơi đọc sách', 'Mức độ thường xuyên'], 3, 'How often → tần suất.'),
    Q('"Once a week" nghĩa?', ['Một lần/tháng', 'Một lần/ngày', 'Một lần/tuần', 'Không bao giờ'], 2, 'Once a week = mỗi tuần 1 lần.'),
  ]),

  M(29, 'Reading — A trip', [
    Q('"Trip" nghĩa?', ['Trường', 'Chuyến đi', 'Vali hành lý', 'Bản đồ'], 1, 'Trip = chuyến đi.'),
    Q('"Where did you go?" trả lời?', ['I went to Hue.', 'I went by bus.', 'I am 10.', 'I am fine.'], 0, 'Hỏi điểm đến.'),
    Q('"What did you do there?" hỏi?', ['Bạn làm gì ở đó', 'Bạn bao nhiêu tuổi', 'Bạn đi với ai', 'Tên bạn'], 0, 'What did you do = đã làm gì.'),
    Q('"Holiday" nghĩa?', ['Ngày lễ', 'Kỳ nghỉ', 'Trường', 'Giờ học'], 1, 'Holiday = kỳ nghỉ.'),
    Q('"By plane" nghĩa?', ['Bằng máy bay', 'Bằng xe', 'Bằng tàu', 'Bằng xe đạp'], 0, 'By plane = đi máy bay.'),
    Q('"Souvenir" nghĩa?', ['Thức ăn', 'Bản đồ du lịch', 'Hành lý', 'Quà lưu niệm'], 3, 'Souvenir = quà lưu niệm.'),
  ]),

  M(30, 'Daily routine — review', [
    Q('"I usually ___ at 6 a.m." điền (get up)?', ['get up', 'gets up', 'got up', 'getting up'], 0, 'Hiện tại đơn → get up.'),
    Q('"Always, usually, often, sometimes, never" là?', ['Trạng từ tần suất', 'Quan hệ từ', 'Danh từ', 'Đại từ'], 0, 'Trạng từ tần suất.'),
    Q('"I ___ go to bed late." điền (không bao giờ)?', ['never', 'usually', 'sometimes', 'always'], 0, 'Never = không bao giờ.'),
    Q('Vị trí của trạng từ tần suất với động từ thường?', ['Trước động từ', 'Đầu câu', 'Cuối câu', 'Sau động từ'], 0, 'Trước động từ thường.'),
    Q('"How often do you exercise?" trả lời?', ['Twice a week.', 'Hello.', 'I am 10.', 'I like sports.'], 0, 'Trả lời tần suất.'),
    Q('"Have dinner" nghĩa?', ['Ăn trưa', 'Ăn vặt', 'Ăn sáng', 'Ăn tối'], 3, 'Dinner = bữa tối.'),
  ]),

  M(31, 'My family — describing people', [
    Q('"Mother" là?', ['Chị gái', 'Mẹ', 'Bố đẻ', 'Em gái'], 1, 'Mother = mẹ.'),
    Q('"Brother" là?', ['Chị/em gái', 'Anh họ', 'Anh/em trai', 'Chú/cậu'], 2, 'Brother = anh/em trai.'),
    Q('"My father is ___." (cao) điền?', ['thin (gầy)', 'young (trẻ)', 'old (già)', 'tall'], 3, 'Tall = cao.'),
    Q('"My sister has ___ hair." (đen) điền?', ['long (dài)', 'big (lớn)', 'black', 'new (mới)'], 2, 'Black hair = tóc đen.'),
    Q('"Grandfather" là?', ['Ông', 'Bà nội', 'Cô/dì', 'Bác trai'], 0, 'Grandfather = ông.'),
    Q('"How many people are there in your family?" hỏi?', ['Bạn bao nhiêu tuổi', 'Gia đình có mấy người', 'Bố mẹ làm nghề gì', 'Tên anh chị em'], 1, 'How many people = bao nhiêu người.'),
  ]),

  M(32, 'Food and drinks', [
    Q('"Rice" nghĩa?', ['Cá tươi', 'Cơm/gạo', 'Trứng gà', 'Bánh mì'], 1, 'Rice = cơm/gạo.'),
    Q('"Milk" là?', ['Nước ngọt', 'Cà phê', 'Sữa', 'Nước cam'], 2, 'Milk = sữa.'),
    Q('"Would you like some juice?" trả lời (có)?', ['Yes, I do.', 'Yes, I am.', 'Yes, please.', 'Yes, I can.'], 2, 'Would like → Yes, please.'),
    Q('"Apple" là?', ['Táo', 'Xoài chín', 'Dưa hấu', 'Quả lê'], 0, 'Apple = táo.'),
    Q('"Bread" là?', ['Bún bò', 'Phở bò', 'Bánh mì', 'Bơ thực vật'], 2, 'Bread = bánh mì.'),
    Q('Câu mời đúng?', ['Did you like some water?', 'Would you like some water?', 'Will you like some water?', 'Do you like some water?'], 1, 'Would like → câu mời.'),
  ]),

  M(33, 'Reading — School activities', [
    Q('"Sport day" là?', ['Ngày hội thể thao', 'Ngày sinh nhật', 'Ngày khai giảng', 'Ngày lễ'], 0, 'Sport day = ngày hội thể thao.'),
    Q('"Open Day" là?', ['Bế giảng', 'Ngày hội mở cửa', 'Khai giảng', 'Tốt nghiệp'], 1, 'Open Day = ngày mở cửa.'),
    Q('"Field trip" là?', ['Tan trường', 'Đi tham quan / dã ngoại', 'Học bù', 'Học trên lớp'], 1, 'Field trip = đi dã ngoại.'),
    Q('"Library" là?', ['Văn phòng', 'Phòng tin', 'Sân thể thao', 'Thư viện'], 3, 'Library = thư viện.'),
    Q('"Classroom" là?', ['Lớp học', 'Sân chơi', 'Văn phòng', 'Thư viện'], 0, 'Classroom = lớp học.'),
    Q('"What do you do at break time?" hỏi?', ['Bạn làm gì giờ ra chơi', 'Số tiết học', 'Đường tới trường', 'Tên bạn'], 0, 'Break time = giờ ra chơi.'),
  ]),

  M(34, 'Ôn cuối cấp — Grammar review', [
    Q('"He ___ a teacher." điền?', ['be (thiếu chia)', 'are (sai ngôi)', 'is', 'was (sai thì)'], 2, 'He + is.'),
    Q('"They ___ at home now." điền?', ['are', 'am (sai ngôi)', 'be (thiếu chia)', 'was (sai thì)'], 0, 'They + are.'),
    Q('"I ___ a book yesterday." (read) điền?', ['read', 'will read', 'reading', 'readed'], 0, 'Read là động từ bất quy tắc — quá khứ vẫn viết "read" (phát âm /red/).'),
    Q('"She can ___ English well." điền?', ['speak', 'speaks', 'to speak', 'speaking'], 0, 'Can + V nguyên mẫu.'),
    Q('"My brother is ___ than me." (tall) điền?', ['more tall', 'most tall', 'tallest', 'taller'], 3, 'So sánh hơn.'),
    Q('"You should ___ healthy food." điền?', ['to eat', 'eat', 'eats', 'eating'], 1, 'Should + V nguyên mẫu.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp', [
    Q('"Hello! My name ___ Lan." điền?', ['are (sai ngôi)', 'is', 'am (sai ngôi)', 'be (thiếu chia)'], 1, 'My name + is.'),
    Q('"How ___ are you?" điền?', ['many (sai cấu trúc)', 'much (sai cấu trúc)', 'high (sai nghĩa)', 'old'], 3, 'How old = bao nhiêu tuổi.'),
    Q('"Where ___ you from?" điền?', ['do (sai trợ động từ)', 'were (sai thì)', 'have (sai loại từ)', 'are'], 3, 'Where are you from?'),
    Q('"___ is your favourite colour?" điền?', ['Which', 'What', 'How', 'Why'], 1, 'What = cái gì.'),
    Q('"I have ___ apple." điền?', ['a (trước phụ âm)', 'any (dùng phủ định)', 'an', 'some (dùng số nhiều)'], 2, 'Trước nguyên âm "a" → an apple.'),
    Q('"There ___ many books on the desk." điền?', ['are', 'has', 'have', 'were'], 0, 'Books (số nhiều) → are.'),
  ]),
];

export const P5TA_SCENARIOS = indexBy(P5TA_WEEKS);
