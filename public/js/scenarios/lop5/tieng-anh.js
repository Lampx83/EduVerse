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
    Q('"Hello" có nghĩa là?', ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], 0, 'Hello = Xin chào.'),
    Q('"How are you?" trả lời?', ['I am fine, thank you.', 'My name is Lan.', 'I am 10.', 'Yes, I do.'], 0, '"How are you?" hỏi sức khỏe.'),
    Q('"Nice to meet you." nghĩa là?', ['Hẹn gặp lại', 'Rất vui được gặp bạn', 'Xin lỗi', 'Tạm biệt'], 1, 'Nice to meet you = rất vui được gặp bạn.'),
    Q('"What is your name?" trả lời?', ['My name is Mai.', 'I am fine.', 'I am 10.', 'Yes.'], 0, 'Hỏi tên → trả lời "My name is …".'),
    Q('"How old are you?" trả lời?', ['I am 10 years old.', 'I am fine.', 'My name is Lan.', 'Yes.'], 0, 'Hỏi tuổi → "I am … years old."'),
    Q('"Goodbye" nghĩa là?', ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], 1, 'Goodbye = tạm biệt.'),
  ]),

  M(2, 'Where are you from?', [
    Q('"Where are you from?" hỏi về?', ['Tên', 'Tuổi', 'Quê quán/Quốc tịch', 'Nghề nghiệp'], 2, 'Hỏi đến từ đâu.'),
    Q('"I am from Vietnam." nghĩa là?', ['Tôi đến từ Việt Nam', 'Tôi là người Mỹ', 'Tôi ở Anh', 'Tôi 10 tuổi'], 0, 'Trả lời quê quán.'),
    Q('Người Anh là?', ['English', 'American', 'Vietnamese', 'French'], 0, 'English = người Anh.'),
    Q('Người Nhật là?', ['Japanese', 'Chinese', 'Korean', 'Thai'], 0, 'Japanese = người Nhật.'),
    Q('Quốc gia Australia tiếng Anh là?', ['Australia', 'Austria', 'America', 'Africa'], 0, 'Australia = nước Úc.'),
    Q('"Where" có nghĩa?', ['Cái gì', 'Ở đâu', 'Khi nào', 'Tại sao'], 1, 'Where = ở đâu.'),
  ]),

  M(3, 'Daily routine', [
    Q('"I get up at 6 a.m." — "get up" nghĩa là?', ['Đi ngủ', 'Thức dậy', 'Đi học', 'Ăn cơm'], 1, 'Get up = thức dậy.'),
    Q('"Brush teeth" nghĩa là?', ['Đánh răng', 'Rửa mặt', 'Tắm', 'Đi học'], 0, 'Brush teeth = đánh răng.'),
    Q('"Have breakfast" nghĩa là?', ['Ăn sáng', 'Ăn trưa', 'Ăn tối', 'Uống nước'], 0, 'Breakfast = bữa sáng.'),
    Q('"What time do you go to school?" trả lời?', ['I go to school at 7 a.m.', 'I am 10.', 'I am fine.', 'Yes.'], 0, 'Hỏi giờ đi học.'),
    Q('"Go to bed" nghĩa là?', ['Đi học', 'Thức dậy', 'Đi ngủ', 'Ăn'], 2, 'Go to bed = đi ngủ.'),
    Q('Câu nào ở present simple đúng?', ['I gets up at 6.', 'I get up at 6.', 'I getting up at 6.', 'I got up at 6.'], 1, 'Chủ ngữ "I" → động từ nguyên mẫu.'),
  ]),

  M(4, 'School subjects', [
    Q('"Math" có nghĩa là?', ['Toán', 'Văn', 'Anh', 'Lý'], 0, 'Math (Maths) = Toán.'),
    Q('"English" là môn?', ['Tiếng Anh', 'Tiếng Pháp', 'Tiếng Nhật', 'Toán'], 0, 'English = Tiếng Anh.'),
    Q('"Science" có nghĩa?', ['Khoa học', 'Lịch sử', 'Địa lý', 'Tin học'], 0, 'Science = khoa học.'),
    Q('"What is your favourite subject?" trả lời?', ['My favourite subject is Math.', 'I am 10.', 'I am fine.', 'Goodbye.'], 0, 'Hỏi môn yêu thích.'),
    Q('"Music" có nghĩa?', ['Âm nhạc', 'Mỹ thuật', 'Thể thao', 'Toán'], 0, 'Music = âm nhạc.'),
    Q('"Information Technology / IT" là môn?', ['Tin học', 'Toán', 'Văn', 'Lý'], 0, 'IT = tin học.'),
  ]),

  M(5, 'Hobbies — Like + V-ing', [
    Q('"I like reading books." nghĩa là?', ['Tôi thích đọc sách', 'Tôi ghét sách', 'Tôi mua sách', 'Tôi không đọc'], 0, 'Like + V-ing = thích làm gì.'),
    Q('Sau "like" thường dùng?', ['V nguyên mẫu', 'V-ing', 'V quá khứ', 'Danh từ riêng'], 1, 'Like + V-ing (hoặc to-V) → thường dùng V-ing.'),
    Q('"What is your hobby?" trả lời?', ['My hobby is dancing.', 'I am 10.', 'I am fine.', 'Yes.'], 0, 'Hỏi sở thích.'),
    Q('"Swimming" nghĩa là?', ['Bơi lội', 'Chạy bộ', 'Đọc sách', 'Vẽ tranh'], 0, 'Swimming = bơi.'),
    Q('"Painting" nghĩa là?', ['Vẽ tranh', 'Chụp ảnh', 'Đọc sách', 'Ca hát'], 0, 'Painting = vẽ tranh.'),
    Q('"I don\'t like ___ cartoons." điền?', ['watch', 'watching', 'watched', 'watches'], 1, 'Like + V-ing.'),
  ]),

  M(6, 'Sports', [
    Q('"Football" là?', ['Bóng đá', 'Bóng rổ', 'Bóng chuyền', 'Bơi'], 0, 'Football = bóng đá.'),
    Q('"Basketball" nghĩa là?', ['Bóng rổ', 'Bóng đá', 'Bóng bàn', 'Cầu lông'], 0, 'Basketball = bóng rổ.'),
    Q('"Badminton" nghĩa là?', ['Cầu lông', 'Bóng đá', 'Tennis', 'Bóng rổ'], 0, 'Badminton = cầu lông.'),
    Q('"Do you like swimming?" trả lời (có)?', ['Yes, I do.', 'No, I do.', 'Yes, I am.', 'Yes, I likes.'], 0, 'Câu hỏi với do → Yes, I do.'),
    Q('"Can you play the piano?" trả lời (không)?', ['Yes, I can.', 'No, I can not.', 'No, I do not.', 'No, I am not.'], 1, 'Hỏi với can → trả lời với can/cannot.'),
    Q('"Table tennis" là?', ['Bóng bàn', 'Bóng chuyền', 'Cầu lông', 'Quần vợt'], 0, 'Table tennis = bóng bàn.'),
  ]),

  M(7, 'Can / Can\'t', [
    Q('"Can" diễn tả?', ['Khả năng', 'Mệnh lệnh', 'Quá khứ', 'Tương lai'], 0, 'Can → khả năng / có thể.'),
    Q('Sau "can" là?', ['V-ing', 'V nguyên mẫu', 'To-V', 'V quá khứ'], 1, 'Can + V nguyên mẫu.'),
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi biết bơi', 'Tôi sẽ bơi', 'Tôi đã bơi'], 1, 'Can swim = biết/có thể bơi.'),
    Q('Phủ định của "can" là?', ['can not / cannot / can\'t', 'do not', 'is not', 'will not'], 0, 'Can\'t = cannot.'),
    Q('"Can you sing?" → trả lời (có thể)?', ['Yes, I can.', 'Yes, I do.', 'Yes, I am.', 'Yes, I will.'], 0, 'Hỏi với can → trả lời với can.'),
    Q('"I ___ play the guitar but I can sing." điền?', ['can', 'can\'t', 'do', 'don\'t'], 1, 'Mâu thuẫn với "but I can sing" → can\'t.'),
  ]),

  M(8, 'Past simple — was / were', [
    Q('"Was" dùng với chủ ngữ?', ['I, he, she, it', 'You, we, they', 'I, you', 'They'], 0, 'Was → I, he, she, it.'),
    Q('"Were" dùng với?', ['I, he', 'You, we, they', 'It, she', 'Một mình it'], 1, 'Were → you, we, they.'),
    Q('"I ___ at school yesterday." điền?', ['am', 'is', 'was', 'were'], 2, 'I + was.'),
    Q('"They ___ happy yesterday." điền?', ['was', 'were', 'is', 'are'], 1, 'They + were.'),
    Q('Phủ định "was" là?', ['wasn\'t', 'isn\'t', 'aren\'t', 'don\'t'], 0, 'Was not → wasn\'t.'),
    Q('"Were you at home last night?" trả lời (có)?', ['Yes, I was.', 'Yes, I were.', 'Yes, I am.', 'Yes, I did.'], 0, 'Were → trả lời với was/were.'),
  ]),

  M(9, 'Past simple — V-ed regular', [
    Q('Quá khứ của "play" là?', ['played', 'playd', 'plaied', 'plays'], 0, 'Play → played (regular).'),
    Q('Quá khứ của "study" là?', ['studyed', 'studied', 'studyd', 'study'], 1, 'y → i + ed → studied.'),
    Q('Quá khứ của "stop" là?', ['stoped', 'stopped', 'stop', 'stops'], 1, 'Stop → stopped (gấp đôi p).'),
    Q('"I ___ football yesterday." điền (play)?', ['play', 'plays', 'played', 'playing'], 2, 'Yesterday → quá khứ.'),
    Q('"She ___ TV last night." điền (watch)?', ['watch', 'watches', 'watched', 'watching'], 2, 'Watched (V-ed).'),
    Q('Từ tín hiệu của quá khứ đơn?', ['yesterday, last night, ago', 'tomorrow', 'next week', 'now'], 0, 'Yesterday, last night, ago → quá khứ.'),
  ]),

  M(10, 'Past simple — irregular verbs', [
    Q('Quá khứ của "go" là?', ['goed', 'went', 'going', 'gone'], 1, 'Go → went (bất quy tắc).'),
    Q('Quá khứ của "have" là?', ['haved', 'had', 'haves', 'having'], 1, 'Have → had.'),
    Q('Quá khứ của "eat" là?', ['eated', 'ate', 'eaten', 'eating'], 1, 'Eat → ate.'),
    Q('Quá khứ của "see" là?', ['seed', 'saw', 'seen', 'seeing'], 1, 'See → saw.'),
    Q('"I ___ to the zoo last Sunday." điền?', ['go', 'goes', 'went', 'gone'], 2, 'Last Sunday → went.'),
    Q('"She ___ a new dress yesterday." điền (have)?', ['has', 'have', 'had', 'having'], 2, 'Yesterday → had.'),
  ]),

  M(11, 'Past simple — Wh-questions', [
    Q('"What did you do yesterday?" hỏi về?', ['Hoạt động hôm qua', 'Hôm nay', 'Ngày mai', 'Sở thích'], 0, 'Hỏi về hành động đã làm hôm qua.'),
    Q('Cấu trúc câu hỏi quá khứ đơn?', ['Did + S + V?', 'Do + S + V?', 'Does + S + V?', 'Was + S + V?'], 0, 'Did + S + V (nguyên mẫu)?'),
    Q('"Where ___ you go last weekend?" điền?', ['do', 'did', 'does', 'will'], 1, 'Last weekend → did.'),
    Q('"I ___ go to school yesterday." (phủ định) điền?', ['don\'t', 'doesn\'t', 'didn\'t', 'wasn\'t'], 2, 'Didn\'t + V.'),
    Q('"Did you watch TV?" trả lời (có)?', ['Yes, I do.', 'Yes, I did.', 'Yes, I am.', 'Yes, I was.'], 1, 'Did → Yes, I did.'),
    Q('"How was your trip?" hỏi?', ['Sức khỏe', 'Chuyến đi như thế nào', 'Tên', 'Ngày'], 1, 'How was = … thế nào.'),
  ]),

  M(12, 'Future — will / be going to', [
    Q('"Will" diễn tả?', ['Tương lai', 'Quá khứ', 'Hiện tại', 'Mệnh lệnh'], 0, 'Will → tương lai.'),
    Q('Sau "will" là?', ['V-ing', 'V nguyên mẫu', 'V quá khứ', 'To-V'], 1, 'Will + V nguyên mẫu.'),
    Q('"Tomorrow, I ___ visit my grandma." điền?', ['will', 'was', 'did', 'am'], 0, 'Tomorrow → will.'),
    Q('"Be going to" dùng diễn tả?', ['Kế hoạch / dự định', 'Quá khứ', 'Hiện tại đơn', 'Quá khứ tiếp diễn'], 0, 'Be going to → dự định.'),
    Q('"I am going to ___ a doctor." điền?', ['be', 'is', 'are', 'was'], 0, 'Going to + V nguyên mẫu.'),
    Q('Phủ định của "will" là?', ['will not / won\'t', 'do not', 'did not', 'is not'], 0, 'Won\'t = will not.'),
  ]),

  M(13, 'Comparative — adjectives', [
    Q('So sánh hơn của "tall" là?', ['taller', 'tallest', 'more tall', 'most tall'], 0, 'Tall → taller (1 âm tiết + er).'),
    Q('So sánh hơn của "big" là?', ['biger', 'bigger', 'more big', 'biggest'], 1, 'Big → bigger (gấp đôi g + er).'),
    Q('So sánh hơn của "beautiful" là?', ['beautifuler', 'beautifulest', 'more beautiful', 'most beautiful'], 2, 'Tính từ dài → more + adj.'),
    Q('"Mai is ___ than Lan." (tall) điền?', ['tall', 'taller', 'tallest', 'more tall'], 1, 'So sánh hơn: taller.'),
    Q('Sau so sánh hơn dùng?', ['as', 'than', 'to', 'of'], 1, '… er + than …'),
    Q('"Good" so sánh hơn là?', ['gooder', 'better', 'best', 'more good'], 1, 'Bất quy tắc: good → better.'),
  ]),

  M(14, 'Superlative — adjectives', [
    Q('So sánh nhất của "tall"?', ['taller', 'tallest', 'most tall', 'more tall'], 1, 'Tall → tallest (1 âm tiết + est).'),
    Q('So sánh nhất của "big"?', ['biger', 'bigest', 'biggest', 'most big'], 2, 'Big → biggest.'),
    Q('So sánh nhất của "beautiful"?', ['beautifulest', 'beautifuler', 'most beautiful', 'more beautiful'], 2, 'Tính từ dài → most + adj.'),
    Q('Trước so sánh nhất thường có?', ['a', 'an', 'the', 'no'], 2, 'The + superlative.'),
    Q('"Phan Xi Păng is the ___ mountain in Vietnam." (high) điền?', ['high', 'higher', 'highest', 'more high'], 2, 'Núi cao nhất → highest.'),
    Q('"Good" so sánh nhất là?', ['better', 'best', 'goodest', 'most good'], 1, 'Bất quy tắc: good → best.'),
  ]),

  M(15, 'Should / Shouldn\'t', [
    Q('"Should" dùng để?', ['Cho lời khuyên', 'Quá khứ', 'Mệnh lệnh quân sự', 'Hỏi tuổi'], 0, 'Should → lời khuyên.'),
    Q('Sau "should" là?', ['V-ing', 'V nguyên mẫu', 'V quá khứ', 'To-V'], 1, 'Should + V nguyên mẫu.'),
    Q('"You should ___ enough water." điền?', ['drink', 'drinks', 'drank', 'drinking'], 0, 'Drink (nguyên mẫu).'),
    Q('"You shouldn\'t eat too much sugar." nghĩa?', ['Bạn không nên ăn quá nhiều đường', 'Bạn nên ăn đường', 'Bạn phải ăn', 'Bạn cấm ăn'], 0, 'Shouldn\'t → không nên.'),
    Q('Bạn bị nhức đầu — lời khuyên hợp lý?', ['You should rest.', 'You should run.', 'You should eat candy.', 'You should swim.'], 0, 'Nhức đầu → nên nghỉ ngơi.'),
    Q('"Should I take an umbrella?" trả lời?', ['Yes, you should.', 'Yes, I do.', 'Yes, I am.', 'Yes, I was.'], 0, 'Hỏi với should → trả lời với should.'),
  ]),

  M(16, 'Illnesses — At the doctor', [
    Q('"Headache" nghĩa là?', ['Nhức đầu', 'Sốt', 'Đau bụng', 'Đau răng'], 0, 'Headache = nhức đầu.'),
    Q('"Fever" nghĩa là?', ['Sốt', 'Cảm', 'Ho', 'Đau họng'], 0, 'Fever = sốt.'),
    Q('"Toothache" nghĩa là?', ['Đau răng', 'Đau bụng', 'Đau lưng', 'Nhức đầu'], 0, 'Toothache = đau răng.'),
    Q('"Stomachache" nghĩa là?', ['Đau bụng', 'Đau đầu', 'Đau chân', 'Đau tay'], 0, 'Stomachache = đau bụng.'),
    Q('"What\'s the matter with you?" hỏi?', ['Bạn bị làm sao', 'Tên bạn', 'Tuổi bạn', 'Quê quán'], 0, 'Hỏi về bệnh / vấn đề.'),
    Q('"I have a ___." (sốt) điền?', ['headache', 'fever', 'cold', 'cough'], 1, 'Có sốt → fever.'),
  ]),

  M(17, 'Giving directions', [
    Q('"Turn left" nghĩa là?', ['Rẽ trái', 'Rẽ phải', 'Đi thẳng', 'Quay đầu'], 0, 'Turn left = rẽ trái.'),
    Q('"Turn right" nghĩa là?', ['Rẽ trái', 'Rẽ phải', 'Đi thẳng', 'Đứng yên'], 1, 'Turn right = rẽ phải.'),
    Q('"Go straight" nghĩa là?', ['Đi thẳng', 'Quay đầu', 'Rẽ trái', 'Rẽ phải'], 0, 'Go straight = đi thẳng.'),
    Q('"How can I get to the post office?" hỏi?', ['Cách đến bưu điện', 'Tên bưu điện', 'Giờ mở cửa', 'Giá tiền'], 0, 'How can I get to … = đường đến đâu.'),
    Q('"Opposite" nghĩa là?', ['Đối diện', 'Bên cạnh', 'Đằng sau', 'Phía trước'], 0, 'Opposite = đối diện.'),
    Q('"Next to" nghĩa là?', ['Bên cạnh', 'Đằng sau', 'Đối diện', 'Trên'], 0, 'Next to = bên cạnh.'),
  ]),

  M(18, 'Ôn tập học kỳ I', [
    Q('"My name is Lan. ___ am 10." điền?', ['I', 'You', 'He', 'She'], 0, 'Tự giới thiệu → I.'),
    Q('"I ___ to school yesterday." điền?', ['go', 'goes', 'went', 'going'], 2, 'Yesterday → went.'),
    Q('"What is your favourite ___?" điền (môn học)?', ['subject', 'food', 'colour', 'animal'], 0, 'Subject = môn học.'),
    Q('"She is ___ than me." điền (tall)?', ['tall', 'taller', 'tallest', 'more tall'], 1, 'So sánh hơn → taller.'),
    Q('"You should ___ to bed early." điền?', ['go', 'goes', 'went', 'going'], 0, 'Should + V nguyên mẫu.'),
    Q('"I am from ___." (Việt Nam) điền?', ['Vietnam', 'Vietnamese', 'Viet', 'Nam'], 0, 'Tên nước: Vietnam.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Ordinal numbers — Dates', [
    Q('"First" là số?', ['1st', '2nd', '3rd', '4th'], 0, 'First = thứ nhất = 1st.'),
    Q('"Second" là số?', ['1st', '2nd', '3rd', '4th'], 1, 'Second = thứ hai = 2nd.'),
    Q('"Third" là số?', ['2nd', '3rd', '4th', '5th'], 1, 'Third = thứ ba = 3rd.'),
    Q('"5th" đọc là?', ['fiveth', 'fifth', 'fiveth', 'five'], 1, '5th = fifth.'),
    Q('"What\'s the date today?" trả lời?', ['It\'s September 2nd.', 'I am 10.', 'It is sunny.', 'I am fine.'], 0, 'Hỏi ngày tháng.'),
    Q('"Twelfth" là số?', ['10th', '11th', '12th', '20th'], 2, '12th = twelfth.'),
  ]),

  M(20, 'Jobs', [
    Q('"Teacher" là?', ['Giáo viên', 'Bác sĩ', 'Y tá', 'Đầu bếp'], 0, 'Teacher = giáo viên.'),
    Q('"Doctor" là?', ['Giáo viên', 'Bác sĩ', 'Lái xe', 'Công nhân'], 1, 'Doctor = bác sĩ.'),
    Q('"Farmer" là?', ['Nông dân', 'Ngư dân', 'Công nhân', 'Lái xe'], 0, 'Farmer = nông dân.'),
    Q('"What does your father do?" hỏi?', ['Bố bạn làm nghề gì', 'Bố bạn bao nhiêu tuổi', 'Bố bạn tên gì', 'Bố bạn ở đâu'], 0, 'What … do? hỏi nghề.'),
    Q('"My mother is a ___." (y tá) điền?', ['teacher', 'doctor', 'nurse', 'farmer'], 2, 'Nurse = y tá.'),
    Q('"Worker" là?', ['Công nhân', 'Diễn viên', 'Ca sĩ', 'Bác sĩ'], 0, 'Worker = công nhân.'),
  ]),

  M(21, 'Animals at the zoo', [
    Q('"Lion" là?', ['Sư tử', 'Hổ', 'Voi', 'Khỉ'], 0, 'Lion = sư tử.'),
    Q('"Tiger" là?', ['Sư tử', 'Hổ', 'Báo', 'Sói'], 1, 'Tiger = hổ.'),
    Q('"Elephant" là?', ['Voi', 'Hươu', 'Hổ', 'Sư tử'], 0, 'Elephant = voi.'),
    Q('"Monkey" là?', ['Khỉ', 'Vượn', 'Sóc', 'Gấu'], 0, 'Monkey = khỉ.'),
    Q('"Giraffe" là?', ['Hươu cao cổ', 'Báo', 'Hổ', 'Sư tử'], 0, 'Giraffe = hươu cao cổ.'),
    Q('"Where is the lion?" trả lời?', ['It is in the cage.', 'I am fine.', 'I am 10.', 'Yes.'], 0, 'Where → vị trí.'),
  ]),

  M(22, 'Ôn nhẹ sau Tết — Tet holiday', [
    Q('"Tet holiday" là?', ['Tết Nguyên Đán', 'Giáng sinh', 'Trung Thu', 'Quốc khánh'], 0, 'Tet = Tết Nguyên Đán.'),
    Q('"Banh chung" là?', ['Bánh chưng', 'Bánh dày', 'Bánh tét', 'Bánh mì'], 0, 'Banh chung = bánh chưng.'),
    Q('"Happy New Year" nghĩa là?', ['Chúc mừng năm mới', 'Chúc ngủ ngon', 'Chúc thi tốt', 'Chúc sinh nhật'], 0, 'Happy New Year = chúc mừng năm mới.'),
    Q('"What do you do at Tet?" trả lời?', ['I visit my grandparents.', 'I am 10.', 'I am fine.', 'My name is Lan.'], 0, 'Hỏi hoạt động dịp Tết.'),
    Q('"Lucky money" là?', ['Tiền lì xì', 'Tiền lương', 'Tiền thưởng', 'Tiền vay'], 0, 'Lucky money = tiền lì xì.'),
    Q('"Spring" là?', ['Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'], 0, 'Spring = mùa xuân.'),
  ]),

  M(23, 'Weather — Seasons', [
    Q('"Sunny" nghĩa là?', ['Nắng', 'Mưa', 'Tuyết', 'Gió'], 0, 'Sunny = có nắng.'),
    Q('"Rainy" nghĩa là?', ['Nắng', 'Mưa', 'Lạnh', 'Nóng'], 1, 'Rainy = có mưa.'),
    Q('"Hot" nghĩa là?', ['Nóng', 'Lạnh', 'Ấm', 'Mát'], 0, 'Hot = nóng.'),
    Q('"Summer" là mùa?', ['Xuân', 'Hè', 'Thu', 'Đông'], 1, 'Summer = mùa hè.'),
    Q('"Winter" là mùa?', ['Xuân', 'Hè', 'Thu', 'Đông'], 3, 'Winter = mùa đông.'),
    Q('"What\'s the weather like today?" trả lời?', ['It is sunny.', 'I am 10.', 'My name is Lan.', 'Yes.'], 0, 'Hỏi thời tiết.'),
  ]),

  M(24, 'Hobbies — extended', [
    Q('"Reading" là sở thích?', ['Đọc sách', 'Vẽ tranh', 'Xem TV', 'Bơi'], 0, 'Reading = đọc.'),
    Q('"Dancing" nghĩa là?', ['Khiêu vũ', 'Hát', 'Bơi', 'Vẽ'], 0, 'Dancing = khiêu vũ.'),
    Q('"Cooking" nghĩa là?', ['Nấu ăn', 'Quét nhà', 'Lái xe', 'Đọc sách'], 0, 'Cooking = nấu ăn.'),
    Q('"What do you like doing?" trả lời?', ['I like ___ing.', 'I am fine.', 'I am 10.', 'Yes.'], 0, 'Hỏi sở thích bằng "doing".'),
    Q('"Photography" nghĩa là?', ['Chụp ảnh', 'Vẽ tranh', 'Hát', 'Múa'], 0, 'Photography = nhiếp ảnh.'),
    Q('Câu nào đúng?', ['I like to swimming.', 'I like swimming.', 'I likes swim.', 'I like swims.'], 1, 'Like + V-ing.'),
  ]),

  M(25, 'My birthday — Months', [
    Q('"January" là tháng?', ['1', '2', '3', '12'], 0, 'January = tháng 1.'),
    Q('"December" là tháng?', ['10', '11', '12', '9'], 2, 'December = tháng 12.'),
    Q('"When is your birthday?" trả lời?', ['My birthday is on May 5th.', 'I am 10.', 'I am fine.', 'Yes.'], 0, 'Hỏi ngày sinh.'),
    Q('"April" là tháng?', ['3', '4', '5', '6'], 1, 'April = tháng 4.'),
    Q('Tháng 9 tiếng Anh là?', ['September', 'October', 'August', 'July'], 0, 'September = tháng 9.'),
    Q('"What present do you want?" hỏi?', ['Quà gì bạn muốn', 'Bạn bao nhiêu tuổi', 'Tên bạn', 'Ở đâu'], 0, 'Present = quà.'),
  ]),

  M(26, 'Comparing animals — superlative', [
    Q('"Big" so sánh nhất là?', ['biger', 'bigest', 'biggest', 'more big'], 2, 'Big → biggest.'),
    Q('"Small" so sánh hơn?', ['smaller', 'smallest', 'more small', 'most small'], 0, 'Small → smaller.'),
    Q('"The elephant is the ___ animal at the zoo." (big) điền?', ['big', 'bigger', 'biggest', 'more big'], 2, 'The biggest.'),
    Q('"Fast" so sánh nhất?', ['fastest', 'faster', 'more fast', 'most fast'], 0, 'Fast → fastest.'),
    Q('"The cheetah is the ___ animal." (fast) điền?', ['fast', 'faster', 'fastest', 'most fast'], 2, 'The fastest.'),
    Q('Cấu trúc so sánh nhất?', ['The + adj-est / most + adj', 'adj-er + than', 'as + adj + as', 'more + adj'], 0, 'The + adj-est hoặc the most + adj.'),
  ]),

  M(27, 'My future job — going to', [
    Q('"I am going to be a ___." (giáo viên) điền?', ['teacher', 'student', 'school', 'desk'], 0, 'Teacher = giáo viên.'),
    Q('"Be going to" diễn tả?', ['Hiện tại đơn', 'Quá khứ', 'Kế hoạch tương lai', 'Mệnh lệnh'], 2, 'Be going to → dự định.'),
    Q('"What are you going to be?" hỏi?', ['Nghề tương lai', 'Tuổi', 'Tên', 'Quê quán'], 0, 'Hỏi nghề muốn làm.'),
    Q('"She ___ going to be a nurse." điền?', ['am', 'is', 'are', 'was'], 1, 'She + is.'),
    Q('"Pilot" là?', ['Phi công', 'Bác sĩ', 'Giáo viên', 'Nông dân'], 0, 'Pilot = phi công.'),
    Q('"Engineer" là?', ['Kỹ sư', 'Bác sĩ', 'Y tá', 'Lái xe'], 0, 'Engineer = kỹ sư.'),
  ]),

  M(28, 'My free time', [
    Q('"Free time" nghĩa là?', ['Thời gian rảnh', 'Giờ học', 'Giờ ngủ', 'Giờ ăn'], 0, 'Free time = thời gian rảnh.'),
    Q('"In my free time, I like ___." điền?', ['read', 'reading', 'reads', 'read books'], 1, 'Like + V-ing.'),
    Q('"Watch TV" nghĩa?', ['Xem TV', 'Đọc sách', 'Chơi game', 'Đi dạo'], 0, 'Watch TV = xem TV.'),
    Q('"Play games" nghĩa?', ['Chơi game', 'Đọc sách', 'Bơi', 'Vẽ'], 0, 'Play games = chơi trò chơi.'),
    Q('"How often do you read books?" hỏi?', ['Mức độ thường xuyên', 'Tên', 'Tuổi', 'Quê'], 0, 'How often → tần suất.'),
    Q('"Once a week" nghĩa?', ['Một lần/tuần', 'Một lần/ngày', 'Một lần/tháng', 'Không bao giờ'], 0, 'Once a week = mỗi tuần 1 lần.'),
  ]),

  M(29, 'Reading — A trip', [
    Q('"Trip" nghĩa?', ['Chuyến đi', 'Quà', 'Sách', 'Trường'], 0, 'Trip = chuyến đi.'),
    Q('"Where did you go?" trả lời?', ['I went to Hue.', 'I am 10.', 'I am fine.', 'Yes.'], 0, 'Hỏi điểm đến.'),
    Q('"What did you do there?" hỏi?', ['Bạn làm gì ở đó', 'Bạn bao nhiêu tuổi', 'Tên bạn', 'Quê'], 0, 'What did you do = đã làm gì.'),
    Q('"Holiday" nghĩa?', ['Kỳ nghỉ', 'Giờ học', 'Trường', 'Sách'], 0, 'Holiday = kỳ nghỉ.'),
    Q('"By plane" nghĩa?', ['Bằng máy bay', 'Bằng tàu', 'Bằng xe', 'Đi bộ'], 0, 'By plane = đi máy bay.'),
    Q('"Souvenir" nghĩa?', ['Quà lưu niệm', 'Hành lý', 'Thức ăn', 'Sách'], 0, 'Souvenir = quà lưu niệm.'),
  ]),

  M(30, 'Daily routine — review', [
    Q('"I usually ___ at 6 a.m." điền (get up)?', ['get up', 'gets up', 'getting up', 'got up'], 0, 'Hiện tại đơn → get up.'),
    Q('"Always, usually, often, sometimes, never" là?', ['Trạng từ tần suất', 'Đại từ', 'Quan hệ từ', 'Danh từ'], 0, 'Trạng từ tần suất.'),
    Q('"I ___ go to bed late." điền (không bao giờ)?', ['always', 'never', 'usually', 'often'], 1, 'Never = không bao giờ.'),
    Q('Vị trí của trạng từ tần suất với động từ thường?', ['Trước động từ', 'Sau động từ', 'Cuối câu', 'Đầu câu'], 0, 'Trước động từ thường.'),
    Q('"How often do you exercise?" trả lời?', ['Twice a week.', 'I am 10.', 'Yes.', 'Hello.'], 0, 'Trả lời tần suất.'),
    Q('"Have dinner" nghĩa?', ['Ăn tối', 'Ăn trưa', 'Ăn sáng', 'Uống'], 0, 'Dinner = bữa tối.'),
  ]),

  M(31, 'My family — describing people', [
    Q('"Mother" là?', ['Mẹ', 'Bố', 'Anh', 'Em'], 0, 'Mother = mẹ.'),
    Q('"Brother" là?', ['Anh/em trai', 'Chị/em gái', 'Bố', 'Mẹ'], 0, 'Brother = anh/em trai.'),
    Q('"My father is ___." (cao) điền?', ['short', 'tall', 'small', 'fat'], 1, 'Tall = cao.'),
    Q('"My sister has ___ hair." (đen) điền?', ['black', 'tall', 'short', 'old'], 0, 'Black hair = tóc đen.'),
    Q('"Grandfather" là?', ['Ông', 'Bà', 'Anh', 'Bố'], 0, 'Grandfather = ông.'),
    Q('"How many people are there in your family?" hỏi?', ['Gia đình có mấy người', 'Tên', 'Tuổi', 'Quê'], 0, 'How many people = bao nhiêu người.'),
  ]),

  M(32, 'Food and drinks', [
    Q('"Rice" nghĩa?', ['Cơm/gạo', 'Bánh mì', 'Thịt', 'Sữa'], 0, 'Rice = cơm/gạo.'),
    Q('"Milk" là?', ['Sữa', 'Nước', 'Nước cam', 'Trà'], 0, 'Milk = sữa.'),
    Q('"Would you like some juice?" trả lời (có)?', ['Yes, please.', 'Yes, I do.', 'Yes, I am.', 'Yes, I can.'], 0, 'Would like → Yes, please.'),
    Q('"Apple" là?', ['Táo', 'Cam', 'Chuối', 'Nho'], 0, 'Apple = táo.'),
    Q('"Bread" là?', ['Bánh mì', 'Cơm', 'Thịt', 'Sữa'], 0, 'Bread = bánh mì.'),
    Q('Câu mời đúng?', ['Would you like some water?', 'Do you like some water?', 'Did you like some water?', 'Will you like some water?'], 0, 'Would like → câu mời.'),
  ]),

  M(33, 'Reading — School activities', [
    Q('"Sport day" là?', ['Ngày hội thể thao', 'Ngày lễ', 'Ngày sinh nhật', 'Ngày khai giảng'], 0, 'Sport day = ngày hội thể thao.'),
    Q('"Open Day" là?', ['Ngày hội mở cửa', 'Khai giảng', 'Bế giảng', 'Tốt nghiệp'], 0, 'Open Day = ngày mở cửa.'),
    Q('"Field trip" là?', ['Đi tham quan / dã ngoại', 'Học trên lớp', 'Học bù', 'Tan trường'], 0, 'Field trip = đi dã ngoại.'),
    Q('"Library" là?', ['Thư viện', 'Phòng tin', 'Văn phòng', 'Sân thể thao'], 0, 'Library = thư viện.'),
    Q('"Classroom" là?', ['Lớp học', 'Sân chơi', 'Thư viện', 'Văn phòng'], 0, 'Classroom = lớp học.'),
    Q('"What do you do at break time?" hỏi?', ['Bạn làm gì giờ ra chơi', 'Tên bạn', 'Tuổi', 'Quê'], 0, 'Break time = giờ ra chơi.'),
  ]),

  M(34, 'Ôn cuối cấp — Grammar review', [
    Q('"He ___ a teacher." điền?', ['am', 'is', 'are', 'be'], 1, 'He + is.'),
    Q('"They ___ at home now." điền?', ['am', 'is', 'are', 'be'], 2, 'They + are.'),
    Q('"I ___ a book yesterday." (read) điền?', ['read', 'reads', 'reading', 'will read'], 0, 'Read là động từ bất quy tắc — quá khứ vẫn viết "read" (phát âm /red/).'),
    Q('"She can ___ English well." điền?', ['speak', 'speaks', 'spoke', 'speaking'], 0, 'Can + V nguyên mẫu.'),
    Q('"My brother is ___ than me." (tall) điền?', ['tall', 'taller', 'tallest', 'most tall'], 1, 'So sánh hơn.'),
    Q('"You should ___ healthy food." điền?', ['eat', 'eats', 'ate', 'eating'], 0, 'Should + V nguyên mẫu.'),
  ]),

  M(35, 'Ôn cuối cấp — Tổng hợp', [
    Q('"Hello! My name ___ Lan." điền?', ['am', 'is', 'are', 'be'], 1, 'My name + is.'),
    Q('"How ___ are you?" điền?', ['old', 'big', 'tall', 'long'], 0, 'How old = bao nhiêu tuổi.'),
    Q('"Where ___ you from?" điền?', ['am', 'is', 'are', 'do'], 2, 'Where are you from?'),
    Q('"___ is your favourite colour?" điền?', ['What', 'Where', 'When', 'Who'], 0, 'What = cái gì.'),
    Q('"I have ___ apple." điền?', ['a', 'an', 'the', 'no'], 1, 'Trước nguyên âm "a" → an apple.'),
    Q('"There ___ many books on the desk." điền?', ['is', 'am', 'are', 'be'], 2, 'Books (số nhiều) → are.'),
  ]),
];

export const P5TA_SCENARIOS = indexBy(P5TA_WEEKS);
