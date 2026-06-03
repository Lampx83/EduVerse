// ============================================================
// Lớp 3 · TIẾNG ANH — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK GDPT 2018 (bắt buộc từ lớp 3): Global Success / Family & Friends 3
// / iLearn Smart Start 3. Mở rộng vốn từ và mẫu câu so với lớp 2.
// ID prefix: "P3TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P3TA', 'tieng-anh', n, title, qs, opts);

export const P3TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Greetings & Introductions', [
    Q('Câu chào buổi sáng: "Good ___"', ['evening (buổi tối)', 'afternoon (buổi chiều)', 'morning', 'day (ngày)'], 2, 'Good morning = Chào buổi sáng.'),
    Q('"Nice to meet you." nghĩa là?', ['Cảm ơn bạn', 'Tạm biệt', 'Hẹn gặp lại', 'Rất vui được gặp bạn'], 3, 'Nice to meet you = Rất vui được gặp bạn (lần đầu gặp).'),
    Q('Đáp lại "Nice to meet you." em nói?', ['Nice to meet you, too', 'Goodbye', 'You are welcome', 'Hello, how are you?'], 0, 'Đáp lại bằng "Nice to meet you, too." = Tôi cũng vậy.'),
    Q('Chào buổi chiều dùng câu?', ['Good night', 'Good morning', 'Good evening', 'Good afternoon'], 3, 'Good afternoon = Chào buổi chiều (khoảng 12h–18h).'),
    Q('Buổi tối khi gặp nhau em chào?', ['Good morning', 'Good evening', 'Good night', 'Good afternoon'], 1, 'Good evening = chào buổi tối (khi mới gặp).'),
    Q('"See you tomorrow!" nghĩa là?', ['Xin chào', 'Tạm biệt mãi mãi', 'Hẹn gặp lại ngày mai', 'Hôm nay gặp nhé'], 2, 'See you tomorrow = Hẹn gặp lại ngày mai.'),
  ]),

  M(2, "What's your name? – How old are you?", [
    Q('"What is your name?" hỏi điều gì?', ['Bạn ở đâu?', 'Bạn khoẻ không?', 'Tên bạn là gì?', 'Bạn bao nhiêu tuổi?'], 2, 'What is your name? = Tên bạn là gì?'),
    Q('Trả lời "What is your name?" – "___ Nam."', ['My name', 'I am name', 'I have', 'My name is'], 3, 'Trả lời đầy đủ: My name is Nam.'),
    Q('"How old are you?" hỏi gì?', ['Bạn học lớp mấy?', 'Bạn tên gì?', 'Bạn ở đâu?', 'Bạn bao nhiêu tuổi?'], 3, 'How old are you? = Bạn bao nhiêu tuổi?'),
    Q('Em 8 tuổi: "I am ___ years old."', ['eight', 'eighth', 'eighty', 'eighteen'], 0, 'eight = 8; eighteen = 18; eighty = 80.'),
    Q('Cách viết tắt của "I am" là?', ['I\'am', 'Iam', 'I,m', 'I\'m'], 3, "I am = I'm."),
    Q('"How do you spell your name?" nghĩa là?', ['Tên bạn viết thế nào?', 'Bạn thích gì?', 'Bạn bao nhiêu tuổi?', 'Bạn ở đâu?'], 0, 'Spell = đánh vần / viết. Hỏi cách viết tên.'),
  ]),

  M(3, 'Where are you from?', [
    Q('"Where are you from?" hỏi gì?', ['Bạn từ đâu đến?', 'Bạn mấy tuổi?', 'Bạn tên gì?', 'Bạn khoẻ không?'], 0, 'Where are you from? = Bạn đến từ đâu?'),
    Q('Trả lời: "I am from ___."', ['Japan (Nhật Bản)', 'America (Mỹ)', 'England (Anh)', 'Vietnam'], 3, 'Sau "from" là tên quốc gia / địa phương.'),
    Q('"I am Vietnamese." nghĩa là?', ['Tôi đến Việt Nam', 'Tôi thích Việt Nam', 'Tôi là người Việt Nam', 'Tôi ở Hà Nội'], 2, 'Vietnamese = (người) Việt Nam.'),
    Q('Thủ đô của Việt Nam tiếng Anh là?', ['Ho Chi Minh', 'Hanoi', 'Da Nang', 'Hai Phong'], 1, 'Hanoi = Hà Nội — thủ đô.'),
    Q('Người Anh là?', ['Japanese', 'American', 'Vietnamese', 'English / British'], 3, 'English / British = người Anh.'),
    Q('"England" có nghĩa là?', ['Nước Anh', 'Nước Nhật', 'Nước Pháp', 'Nước Mỹ'], 0, 'England = nước Anh.'),
  ]),

  M(4, 'My family (members)', [
    Q('"Father" có nghĩa là?', ['Em gái', 'Bố', 'Chú ruột', 'Anh trai'], 1, 'Father = bố / cha.'),
    Q('"Mother" có nghĩa là?', ['Mẹ', 'Chị gái', 'Cô giáo', 'Dì ruột'], 0, 'Mother = mẹ.'),
    Q('"Brother" có nghĩa là?', ['Bạn thân', 'Anh/em trai', 'Chú ruột', 'Chị/em gái'], 1, 'Brother = anh / em trai.'),
    Q('"Sister" có nghĩa là?', ['Dì ruột', 'Anh/em trai', 'Mẹ ruột', 'Chị/em gái'], 3, 'Sister = chị / em gái.'),
    Q('"Grandparents" là?', ['Cô chú', 'Anh chị', 'Ông bà', 'Cha mẹ (parents)'], 2, 'Grandparents = ông bà.'),
    Q('"This is my family." nghĩa là?', ['Kia là gia đình tôi', 'Tôi yêu gia đình', 'Gia đình tôi đông', 'Đây là gia đình tôi'], 3, 'This is my family = Đây là gia đình tôi.'),
  ]),

  M(5, 'My friends', [
    Q('"Friend" có nghĩa là?', ['Bạn (bè)', 'Anh em', 'Cô giáo', 'Hàng xóm'], 0, 'Friend = bạn.'),
    Q('"This is my friend, Linh." nghĩa là?', ['Linh tạm biệt', 'Linh là cô tôi', 'Linh là chị tôi', 'Đây là bạn tôi, Linh'], 3, 'This is my friend = Đây là bạn của tôi.'),
    Q('"Best friend" là?', ['Bạn cùng tuổi', 'Bạn thân nhất', 'Bạn mới', 'Bạn xấu'], 1, 'Best friend = bạn thân nhất.'),
    Q('Hỏi tên bạn: "What is ___ name?"', ['his/her', 'their (của họ)', 'its (của nó)', 'a (một)'], 0, 'Hỏi tên người thứ ba (anh ấy/cô ấy) → his / her.'),
    Q('"Her name is Mai." nghĩa là?', ['Bạn tên Mai', 'Tên cô ấy là Mai', 'Tên anh ấy là Mai', 'Tên tôi là Mai'], 1, 'Her = của cô ấy.'),
    Q('"His name is Nam." nghĩa là?', ['Bạn tên Nam', 'Tên anh ấy là Nam', 'Tên cô ấy là Nam', 'Tôi tên Nam'], 1, 'His = của anh ấy.'),
  ]),

  M(6, 'Numbers 1-20 review', [
    Q('"Eleven" là số?', ['10', '11', '20', '12'], 1, 'Eleven = 11.'),
    Q('Số 13 tiếng Anh là?', ['Thirteen', 'Thirteenth', 'Thirty', 'Thirtieth'], 0, 'Thirteen = 13.'),
    Q('"Fifteen" là số?', ['15', '14', '5', '50'], 0, 'Fifteen = 15.'),
    Q('Số 18 tiếng Anh là?', ['Eighty', 'Eighteen', 'Eighteenth', 'Eighty-eight'], 1, 'Eighteen = 18.'),
    Q('"Twenty" là số?', ['12', '2', '20', '22'], 2, 'Twenty = 20.'),
    Q('Đếm: sixteen, ___, eighteen', ['nineteen', 'fifteen', 'seventeen', 'fourteen'], 2, '16 – 17 – 18 → seventeen.'),
  ]),

  M(7, 'My body parts', [
    Q('"Head" có nghĩa là?', ['Chân (leg)', 'Mắt (eye)', 'Đầu', 'Tay (hand)'], 2, 'Head = đầu.'),
    Q('"Eyes" có nghĩa là?', ['Tai (ear)', 'Miệng (mouth)', 'Mũi (nose)', 'Mắt'], 3, 'Eyes = (đôi) mắt.'),
    Q('"Ears" có nghĩa là?', ['Mắt (eye)', 'Tai', 'Mũi (nose)', 'Tay (hand)'], 1, 'Ears = (đôi) tai.'),
    Q('"Hands" có nghĩa là?', ['Đôi bàn tay', 'Đôi vai (shoulders)', 'Đôi chân (feet)', 'Cánh tay'], 0, 'Hands = đôi bàn tay (số nhiều).'),
    Q('Em nghe bằng?', ['Nose (mũi - để ngửi)', 'Mouth (miệng - để nói)', 'Ears', 'Eyes (mắt - để nhìn)'], 2, 'Nghe bằng tai = ears.'),
    Q('"Touch your nose!" nghĩa là?', ['Cười lên!', 'Chạm vào mũi của bạn!', 'Ngửi đi!', 'Bịt mũi lại!'], 1, 'Touch = chạm; nose = mũi.'),
  ]),

  M(8, 'My toys (đồ chơi)', [
    Q('"Ball" có nghĩa là?', ['Quả bóng', 'Búp bê', 'Con diều (kite)', 'Người máy (robot)'], 0, 'Ball = quả bóng.'),
    Q('"Doll" có nghĩa là?', ['Búp bê', 'Ô tô đồ chơi (car)', 'Tàu hỏa (train)', 'Quả bóng'], 0, 'Doll = búp bê.'),
    Q('"Car" (đồ chơi) có nghĩa là?', ['Máy bay', 'Ô tô', 'Tàu hoả', 'Búp bê'], 1, 'Car = ô tô (đồ chơi).'),
    Q('"Kite" có nghĩa là?', ['Bóng bay', 'Xe đạp', 'Diều', 'Tàu thuyền'], 2, 'Kite = con diều.'),
    Q('"Teddy bear" là?', ['Búp bê', 'Người máy', 'Quả bóng', 'Gấu bông'], 3, 'Teddy bear = gấu bông.'),
    Q('"Robot" có nghĩa là?', ['Xe đạp', 'Người máy', 'Con thú', 'Quả bóng'], 1, 'Robot = người máy.'),
  ]),

  M(9, 'My pets (thú cưng)', [
    Q('"Pet" có nghĩa là?', ['Thức ăn cho vật nuôi', 'Thú nuôi trong nhà', 'Đồ chơi', 'Cây cảnh'], 1, 'Pet = thú cưng (mèo, chó, cá cảnh...).'),
    Q('"Cat" có nghĩa là?', ['Cá (fish)', 'Chim (bird)', 'Mèo', 'Chó (dog)'], 2, 'Cat = con mèo.'),
    Q('"Dog" có nghĩa là?', ['Chó', 'Mèo (cat)', 'Thỏ (rabbit)', 'Cá (fish)'], 0, 'Dog = con chó.'),
    Q('"Rabbit" có nghĩa là?', ['Gấu (bear)', 'Thỏ', 'Chuột (mouse)', 'Hổ (tiger)'], 1, 'Rabbit = con thỏ.'),
    Q('"Parrot" có nghĩa là?', ['Vẹt', 'Vịt (duck)', 'Gà (chicken)', 'Quạ (crow)'], 0, 'Parrot = con vẹt (biết nói).'),
    Q('"I have a pet dog." nghĩa là?', ['Tôi muốn nuôi chó', 'Chó của tôi to', 'Tôi yêu chó', 'Tôi có một con chó nuôi'], 3, 'I have a pet dog = Tôi có một chú chó cưng.'),
  ]),

  M(10, 'In the classroom', [
    Q('"Classroom" có nghĩa là?', ['Phòng ngủ', 'Phòng học', 'Nhà vệ sinh', 'Sân chơi'], 1, 'Classroom = phòng học (lớp học).'),
    Q('"Book" có nghĩa là?', ['Bảng (board)', 'Bút (pen)', 'Vở (notebook)', 'Sách'], 3, 'Book = sách.'),
    Q('"Desk" có nghĩa là?', ['Cái cặp', 'Cái bảng', 'Cái ghế', 'Cái bàn (học)'], 3, 'Desk = bàn học.'),
    Q('"Chair" có nghĩa là?', ['Cặp sách (bag)', 'Bảng (board)', 'Bàn (table)', 'Ghế'], 3, 'Chair = ghế.'),
    Q('"Pencil case" có nghĩa là?', ['Bút mực', 'Cái cặp sách', 'Cục tẩy', 'Hộp bút'], 3, 'Pencil case = hộp bút (đựng bút chì, gôm...).'),
    Q('"Open your book, please." nghĩa là?', ['Vui lòng mở sách ra', 'Đóng sách lại', 'Đọc sách to lên', 'Cất sách đi'], 0, 'Open = mở; please = làm ơn / vui lòng.'),
  ]),

  M(11, 'My school', [
    Q('"School" có nghĩa là?', ['Công viên', 'Trường học', 'Bệnh viện', 'Cửa hàng'], 1, 'School = trường học.'),
    Q('"Teacher" có nghĩa là?', ['Cha mẹ', 'Bác sĩ', 'Giáo viên', 'Học sinh'], 2, 'Teacher = giáo viên / thầy cô.'),
    Q('"Student" / "pupil" có nghĩa là?', ['Học sinh', 'Giáo viên', 'Hiệu trưởng', 'Bảo vệ'], 0, 'Student / pupil = học sinh.'),
    Q('"Library" có nghĩa là?', ['Thư viện', 'Sân bóng', 'Nhà ăn', 'Phòng y tế'], 0, 'Library = thư viện.'),
    Q('"Playground" có nghĩa là?', ['Sân chơi', 'Thư viện', 'Nhà vệ sinh', 'Phòng học'], 0, 'Playground = sân chơi.'),
    Q('"I go to school every day." nghĩa là?', ['Trường tôi to', 'Tôi đến trường mỗi ngày', 'Tôi yêu trường', 'Tôi đi học cuối tuần'], 1, 'Every day = mỗi ngày.'),
  ]),

  M(12, 'This is / These are (demonstratives)', [
    Q('"This is my book." nghĩa là?', ['Kia là sách tôi', 'Tôi đọc sách', 'Sách tôi đẹp', 'Đây là sách của tôi'], 3, 'This is = Đây là (chỉ vật ở gần, số ít).'),
    Q('"These are my pens." nghĩa là?', ['Tôi có bút', 'Đây là những cây bút của tôi', 'Kia là bút', 'Đây là cây bút'], 1, 'These are = Đây là (số nhiều, ở gần).'),
    Q('"That is a cat." nghĩa là?', ['Mèo tôi', 'Đây là mèo', 'Tôi có mèo', 'Kia là một con mèo'], 3, 'That is = Kia / Đó là (số ít, ở xa).'),
    Q('"Those are dogs." nghĩa là?', ['Kia là một con chó', 'Tôi có chó', 'Đây là chó', 'Kia là những con chó'], 3, 'Those are = Kia là (số nhiều, ở xa).'),
    Q('"___ is a pencil." (1 vật ở gần)', ['Those (nhiều vật ở xa)', 'They (chúng)', 'This', 'These (nhiều vật ở gần)'], 2, 'Một vật ở gần dùng "This".'),
    Q('"___ are erasers." (nhiều vật ở xa)', ['These (nhiều vật ở gần)', 'This (1 vật ở gần)', 'That (1 vật ở xa)', 'Those'], 3, 'Số nhiều ở xa dùng "Those".'),
  ]),

  M(13, 'How many...? + numbers', [
    Q('"How many books?" hỏi gì?', ['Có bao nhiêu quyển sách?', 'Sách của ai?', 'Sách màu gì?', 'Sách ở đâu?'], 0, 'How many ...? = Có bao nhiêu ... ?'),
    Q('"How many" dùng với danh từ?', ['Số ít đếm được', 'Số nhiều đếm được', 'Tên riêng', 'Không đếm được'], 1, 'How many + danh từ số nhiều đếm được.'),
    Q('Có 3 quyển sách: "I have ___ books."', ['three', 'threes', 'thirty', 'a three'], 0, 'three = 3 (số đếm).'),
    Q('"How many pencils are there?" trả lời:', ['There is one', 'It is red', 'There are five', 'They are big'], 2, 'There are + số nhiều (số lượng > 1).'),
    Q('"There is one cat." nghĩa là?', ['Có nhiều con mèo', 'Không có mèo', 'Mèo to', 'Có một con mèo'], 3, 'There is = có (số ít).'),
    Q('"There are two dogs." nghĩa là?', ['Không có chó', 'Có 12 con chó', 'Có 2 con chó', 'Có 1 con chó'], 2, 'There are + số nhiều: 2 dogs.'),
  ]),

  M(14, 'Colors & shapes', [
    Q('"Red" là màu gì?', ['Tím (purple)', 'Đỏ', 'Vàng (yellow)', 'Xanh (blue)'], 1, 'Red = màu đỏ.'),
    Q('"Yellow" là màu gì?', ['Xanh dương (blue)', 'Tím (purple)', 'Hồng (pink)', 'Vàng'], 3, 'Yellow = màu vàng.'),
    Q('"Circle" là hình gì?', ['Hình chữ nhật', 'Hình tam giác', 'Hình tròn', 'Hình vuông'], 2, 'Circle = hình tròn.'),
    Q('"Square" là hình gì?', ['Hình sao', 'Hình vuông', 'Hình tam giác', 'Hình tròn'], 1, 'Square = hình vuông.'),
    Q('"Triangle" là hình gì?', ['Hình vuông (square)', 'Trái tim', 'Hình tròn (circle)', 'Tam giác'], 3, 'Triangle = hình tam giác.'),
    Q('"What color is it?" hỏi gì?', ['Nó màu gì?', 'Nó là hình gì?', 'Nó của ai?', 'Nó ở đâu?'], 0, 'What color is it? = Nó (có) màu gì?'),
  ]),

  M(15, 'I have / He has (have/has got)', [
    Q('"I have a pen." nghĩa là?', ['Tôi không có bút', 'Bạn có bút', 'Tôi có một cây bút', 'Cho tôi bút'], 2, 'I have = Tôi có.'),
    Q('"She has a doll." nghĩa là?', ['Tôi có búp bê', 'Cô ấy thích búp bê', 'Cô ấy có búp bê', 'Búp bê đẹp'], 2, 'She / he / it dùng "has".'),
    Q('Điền: "He ___ a dog."', ['has', 'have (dùng cho I/you/we/they)', 'is (động từ to be)', 'are (to be số nhiều)'], 0, 'He / She / It → has.'),
    Q('Điền: "We ___ many books."', ['have', 'am (to be cho I)', 'has (dùng cho he/she/it)', 'is (to be số ít)'], 0, 'I / you / we / they → have.'),
    Q('"Do you have a pencil?" nghĩa là?', ['Tôi có bút chì', 'Bạn có bút chì không?', 'Cho tôi bút chì', 'Bút chì đâu?'], 1, 'Do you have ...? = Bạn có ... không?'),
    Q('Trả lời CÓ: "Do you have a pen?" – ___', ['Yes, I do', 'No, I do', 'No, I am', 'Yes, I am'], 0, "Trả lời ngắn: Yes, I do. / No, I don't."),
  ]),

  M(16, 'Can / Can\'t (khả năng)', [
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi thích bơi', 'Tôi có thể bơi', 'Tôi đi bơi'], 2, 'I can + V = Tôi có thể ...'),
    Q('"She can\'t sing." nghĩa là?', ['Cô ấy đang hát', 'Cô ấy biết hát', 'Cô ấy không biết hát', 'Cô ấy thích hát'], 2, "can't = không thể."),
    Q('"Can you ride a bike?" nghĩa là?', ['Bạn có biết đi xe đạp không?', 'Cho tôi xe đạp', 'Bạn đang đi xe đạp', 'Xe đạp đâu?'], 0, 'Can you ...? = Bạn có thể / có biết ... không?'),
    Q('Trả lời CÓ thể: "Can you swim?" – ___', ['Yes, I can', 'No, I can', 'Yes, I do', 'Yes, I am'], 0, "Trả lời ngắn: Yes, I can. / No, I can't."),
    Q('Điền: "Birds ___ fly."', ['are (to be số nhiều)', 'can\'t (không thể)', 'is (to be số ít)', 'can'], 3, 'Chim có thể bay → can.'),
    Q('"Fish can swim but they can\'t walk." nghĩa là?', ['Cá biết đi', 'Cá biết bơi nhưng không biết đi', 'Cá không bơi được', 'Cá biết bay'], 1, 'But = nhưng; can\'t = không thể.'),
  ]),

  M(17, 'Days of the week', [
    Q('"Monday" là thứ?', ['Thứ hai', 'Thứ tư', 'Thứ ba', 'Chủ nhật'], 0, 'Monday = thứ hai.'),
    Q('"Friday" là thứ?', ['Chủ nhật', 'Thứ bảy', 'Thứ sáu', 'Thứ năm'], 2, 'Friday = thứ sáu.'),
    Q('"Sunday" là?', ['Chủ nhật', 'Thứ sáu', 'Thứ bảy', 'Thứ hai'], 0, 'Sunday = chủ nhật.'),
    Q('Một tuần có bao nhiêu ngày?', ['8', '6', '7', '5'], 2, 'Một tuần = 7 days.'),
    Q('Hai ngày cuối tuần là?', ['Mon & Tue', 'Wed & Thu', 'Fri & Sat', 'Sat & Sun'], 3, 'Weekend = Saturday & Sunday.'),
    Q('"What day is it today?" hỏi gì?', ['Hôm nay thời tiết thế nào?', 'Hôm nay là ngày bao nhiêu?', 'Bạn đi đâu hôm nay?', 'Hôm nay là thứ mấy?'], 3, 'What day = thứ mấy?'),
  ]),

  M(18, 'Review HK1', [
    Q('"Hello, my name is Lan." nghĩa là?', ['Lan khoẻ không', 'Lan đâu rồi', 'Tạm biệt Lan', 'Xin chào, tôi tên Lan'], 3, 'My name is ... = Tôi tên là ...'),
    Q('"How old are you?" – "I am 8 ___ old."', ['yearly', 'year (số ít, dùng khi 1 tuổi)', 'years', 'olds'], 2, '"years old" — từ 2 tuổi trở lên dùng số nhiều "years".'),
    Q('"Where are you from?" – "I am from ___."', ['Vietnam', 'happy (vui — tính từ)', 'big (to lớn — tính từ)', 'red (đỏ — màu sắc)'], 0, 'Sau "from" là tên nước/địa danh.'),
    Q('"She has a cat." nghĩa là?', ['Cô ấy thích mèo', 'Tôi có mèo', 'Cô ấy có một con mèo', 'Mèo của cô ấy'], 2, 'She has = cô ấy có.'),
    Q('"How many books?" – "There ___ five books."', ['be (dạng nguyên thể)', 'is (dùng cho số ít)', 'am (dùng cho I)', 'are'], 3, 'There are + số nhiều.'),
    Q('"Can you sing?" – Trả lời CÓ:', ['Yes, I do', 'Yes, I am', 'Yes, I can', 'No, I can'], 2, "Yes, I can / No, I can't."),
    Q('Hôm nay là Monday, ngày mai là?', ['Wednesday', 'Sunday', 'Tuesday', 'Friday'], 2, 'Sau Monday là Tuesday.'),
    Q('"Touch your nose!" nghĩa là?', ['Ngửi đi', 'Hắt hơi', 'Bịt mũi lại', 'Chạm vào mũi của bạn'], 3, 'Touch = chạm; nose = mũi.'),
    Q('"This is my pet dog." nghĩa là?', ['Tôi không có chó', 'Tôi yêu chó', 'Kia là con chó của tôi', 'Đây là chú chó cưng của tôi'], 3, 'This is my pet dog = Đây là con chó cưng của tôi.'),
    Q('"Good evening!" dùng khi nào?', ['Chào buổi sáng', 'Tạm biệt', 'Chào buổi chiều', 'Chào buổi tối'], 3, 'Good evening = chào buổi tối (mới gặp).'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'My house (1) — rooms', [
    Q('"House" có nghĩa là?', ['Trường', 'Công viên', 'Cửa hàng', 'Ngôi nhà'], 3, 'House = ngôi nhà.'),
    Q('"Bedroom" là phòng?', ['Phòng tắm', 'Phòng ngủ', 'Phòng khách', 'Phòng bếp'], 1, 'Bedroom = phòng ngủ.'),
    Q('"Kitchen" là phòng?', ['Phòng khách', 'Phòng ngủ', 'Phòng tắm', 'Phòng bếp'], 3, 'Kitchen = phòng bếp.'),
    Q('"Bathroom" là phòng?', ['Phòng tắm', 'Phòng bếp', 'Phòng ăn', 'Phòng ngủ'], 0, 'Bathroom = phòng tắm.'),
    Q('"Living room" là phòng?', ['Phòng tắm', 'Phòng khách', 'Phòng bếp', 'Phòng ngủ'], 1, 'Living room = phòng khách (nơi sinh hoạt chung).'),
    Q('Em ngủ ở?', ['Garden', 'Bedroom', 'Bathroom', 'Kitchen'], 1, 'Ngủ ở phòng ngủ = bedroom.'),
  ]),

  M(20, 'My house (2) — furniture & prepositions of place', [
    Q('"Table" có nghĩa là?', ['Giường', 'Tủ (wardrobe)', 'Bàn', 'Ghế (chair)'], 2, 'Table = cái bàn.'),
    Q('"Bed" có nghĩa là?', ['Bàn (table)', 'Tủ quần áo', 'Ghế sofa', 'Giường'], 3, 'Bed = cái giường.'),
    Q('"In" có nghĩa là?', ['Dưới (under)', 'Cạnh (next to)', 'Trong', 'Trên (on)'], 2, 'In = ở trong.'),
    Q('"On" có nghĩa là?', ['Trong (in)', 'Dưới (under)', 'Trên (bề mặt)', 'Cạnh (next to)'], 2, 'On = ở trên (bề mặt).'),
    Q('"Under" có nghĩa là?', ['Trong (in)', 'Dưới', 'Trên (on)', 'Cạnh (next to)'], 1, 'Under = ở dưới.'),
    Q('"Next to" có nghĩa là?', ['Trước (in front of)', 'Cạnh / kế bên', 'Trong (in)', 'Sau (behind)'], 1, 'Next to = ngay cạnh.'),
  ]),

  M(21, 'Where is...?: in/on/under/next to', [
    Q('"Where is my book?" có nghĩa là?', ['Sách tôi đẹp', 'Cho tôi sách', 'Sách của ai?', 'Sách tôi đâu rồi?'], 3, 'Where is ...? = ... ở đâu?'),
    Q('"The cat is under the table." nghĩa là?', ['Mèo trên bàn', 'Mèo cạnh bàn', 'Mèo trong bàn', 'Mèo dưới gầm bàn'], 3, 'Under the table = dưới gầm bàn.'),
    Q('"The book is on the desk." nghĩa là?', ['Sách dưới bàn', 'Sách trên (mặt) bàn', 'Sách trong bàn', 'Sách cạnh bàn'], 1, 'On the desk = trên mặt bàn.'),
    Q('"The ball is in the box." nghĩa là?', ['Bóng dưới hộp', 'Bóng trong hộp', 'Bóng cạnh hộp', 'Bóng trên hộp'], 1, 'In the box = ở trong hộp.'),
    Q('"The chair is next to the desk." nghĩa là?', ['Ghế trên bàn', 'Ghế kế bên bàn', 'Ghế trong bàn', 'Ghế xa bàn'], 1, 'Next to = ngay cạnh.'),
    Q('Em ngồi trên ghế: "I sit ___ the chair."', ['next (kế bên — cần "to")', 'on', 'in (ở trong)', 'under (ở dưới)'], 1, 'Ngồi trên ghế = on the chair.'),
  ]),

  M(22, 'Food (1) — rice, noodles, bread, meat', [
    Q('"Rice" có nghĩa là?', ['Bánh mì', 'Mì / phở (noodles)', 'Cơm / gạo', 'Cá (fish)'], 2, 'Rice = cơm / gạo.'),
    Q('"Noodles" có nghĩa là?', ['Bánh mì', 'Cơm (rice)', 'Mì / bún / phở', 'Trứng (egg)'], 2, 'Noodles = mì / phở / bún (sợi).'),
    Q('"Bread" có nghĩa là?', ['Cơm (rice)', 'Bánh mì', 'Bánh ngọt', 'Mì (noodles)'], 1, 'Bread = bánh mì.'),
    Q('"Meat" có nghĩa là?', ['Rau (vegetables)', 'Cá (fish)', 'Trứng (egg)', 'Thịt'], 3, 'Meat = thịt (chung).'),
    Q('"Chicken" có nghĩa là?', ['Thịt bò', 'Thịt gà', 'Thịt heo', 'Cá (fish)'], 1, 'Chicken = gà / thịt gà.'),
    Q('"I eat rice for lunch." nghĩa là?', ['Tôi ăn bánh mì sáng', 'Tôi nấu cơm', 'Tôi ăn cơm trưa', 'Tôi thích cơm'], 2, 'Lunch = bữa trưa.'),
  ]),

  M(23, 'Food (2) — fruits & vegetables', [
    Q('"Apple" có nghĩa là?', ['Xoài (mango)', 'Cam (orange)', 'Táo', 'Chuối (banana)'], 2, 'Apple = quả táo.'),
    Q('"Banana" có nghĩa là?', ['Chuối', 'Nho (grape)', 'Lê (pear)', 'Táo (apple)'], 0, 'Banana = quả chuối.'),
    Q('"Orange" (trái cây) có nghĩa là?', ['Bưởi (pomelo)', 'Cam', 'Chanh (lemon)', 'Quýt (mandarin)'], 1, 'Orange = quả cam.'),
    Q('"Vegetables" có nghĩa là?', ['Nước ngọt', 'Rau củ', 'Trái cây', 'Thịt cá'], 1, 'Vegetables = rau củ.'),
    Q('"Carrot" có nghĩa là?', ['Cải bắp', 'Cà rốt', 'Cà chua', 'Cà tím'], 1, 'Carrot = củ cà rốt.'),
    Q('"Tomato" có nghĩa là?', ['Khoai tây (potato)', 'Cà chua', 'Dưa chuột (cucumber)', 'Cà rốt'], 1, 'Tomato = cà chua.'),
  ]),

  M(24, 'Drinks & I like / I don\'t like', [
    Q('"Water" có nghĩa là?', ['Nước ép', 'Sữa (milk)', 'Nước', 'Trà (tea)'], 2, 'Water = nước (lọc).'),
    Q('"Milk" có nghĩa là?', ['Cà phê', 'Trà (tea)', 'Sữa', 'Nước lọc (water)'], 2, 'Milk = sữa.'),
    Q('"Juice" có nghĩa là?', ['Nước ép trái cây', 'Sữa (milk)', 'Trà (tea)', 'Cà phê (coffee)'], 0, 'Juice = nước ép.'),
    Q('"I like apples." nghĩa là?', ['Tôi không thích táo', 'Tôi có táo', 'Tôi thích táo', 'Tôi ghét táo'], 2, 'I like = Tôi thích.'),
    Q('"I don\'t like fish." nghĩa là?', ['Tôi có cá', 'Tôi không thích cá', 'Tôi ăn cá', 'Tôi thích cá'], 1, "I don't like = Tôi không thích."),
    Q('"She likes milk." nghĩa là?', ['Cô ấy có sữa', 'Cô ấy ghét sữa', 'Cô ấy thích sữa', 'Cô ấy uống sữa'], 2, 'She likes (ngôi 3 thêm s).'),
  ]),

  M(25, 'Animals (1) — pets & farm animals', [
    Q('"Dog" có nghĩa là?', ['Mèo (cat)', 'Bò (cow)', 'Vịt (duck)', 'Chó'], 3, 'Dog = con chó.'),
    Q('"Cow" có nghĩa là?', ['Con bò', 'Con heo', 'Con gà', 'Con vịt'], 0, 'Cow = con bò.'),
    Q('"Pig" có nghĩa là?', ['Con gà', 'Con vịt', 'Con bò', 'Con heo / lợn'], 3, 'Pig = con heo / lợn.'),
    Q('"Duck" có nghĩa là?', ['Con thỏ', 'Con ngỗng', 'Con vịt', 'Con gà'], 2, 'Duck = con vịt.'),
    Q('"Chicken" (con vật) có nghĩa là?', ['Con vịt', 'Con heo', 'Con bò', 'Con gà'], 3, 'Chicken = con gà.'),
    Q('Con vật cho ta sữa là?', ['Pig (lợn)', 'Dog (chó)', 'Cow', 'Hen (gà mái)'], 2, 'Cow (bò) cho ta sữa.'),
  ]),

  M(26, 'Animals (2) — wild animals & zoo', [
    Q('"Lion" có nghĩa là?', ['Hổ (tiger)', 'Gấu (bear)', 'Voi (elephant)', 'Sư tử'], 3, 'Lion = sư tử.'),
    Q('"Tiger" có nghĩa là?', ['Báo (leopard)', 'Sư tử (lion)', 'Hổ', 'Gấu (bear)'], 2, 'Tiger = con hổ.'),
    Q('"Elephant" có nghĩa là?', ['Con hươu', 'Con ngựa', 'Con voi', 'Con khỉ'], 2, 'Elephant = con voi.'),
    Q('"Monkey" có nghĩa là?', ['Con cọp', 'Con gấu', 'Con khỉ', 'Con ngựa'], 2, 'Monkey = con khỉ.'),
    Q('"Bear" có nghĩa là?', ['Gấu', 'Hươu (deer)', 'Hươu cao cổ', 'Báo (leopard)'], 0, 'Bear = con gấu.'),
    Q('"Zoo" có nghĩa là?', ['Bệnh viện', 'Sở thú', 'Cửa hàng', 'Sân bay'], 1, 'Zoo = vườn bách thú (sở thú).'),
  ]),

  M(27, 'Weather & seasons', [
    Q('"Sunny" có nghĩa là?', ['Có gió', 'Có mưa', 'Có nắng', 'Có mây'], 2, 'Sunny = trời nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có gió', 'Có tuyết', 'Có nắng', 'Có mưa'], 3, 'Rainy = trời mưa.'),
    Q('"Hot" có nghĩa là?', ['Lạnh (cold)', 'Mát (cool)', 'Ấm (warm)', 'Nóng'], 3, 'Hot = nóng.'),
    Q('"Cold" có nghĩa là?', ['Ấm (warm)', 'Mát (cool)', 'Nóng (hot)', 'Lạnh'], 3, 'Cold = lạnh.'),
    Q('"Summer" là mùa?', ['Đông (winter)', 'Xuân (spring)', 'Hạ', 'Thu (autumn)'], 2, 'Summer = mùa hạ (hè).'),
    Q('"How is the weather today?" hỏi gì?', ['Bạn khoẻ không?', 'Thời tiết hôm nay thế nào?', 'Hôm nay thứ mấy?', 'Bạn ở đâu?'], 1, 'How is the weather? = Thời tiết thế nào?'),
  ]),

  M(28, 'Hobbies & free time', [
    Q('"Hobby" có nghĩa là?', ['Nghề nghiệp', 'Bài tập', 'Lịch trình', 'Sở thích'], 3, 'Hobby = sở thích.'),
    Q('"I like reading." nghĩa là?', ['Tôi mua sách', 'Tôi thích đọc sách', 'Tôi đọc nhanh', 'Tôi thích viết'], 1, 'Reading = (việc) đọc.'),
    Q('"Drawing" có nghĩa là?', ['Hát (singing)', 'Nhảy múa (dancing)', 'Vẽ', 'Bơi (swimming)'], 2, 'Drawing = vẽ.'),
    Q('"Singing" có nghĩa là?', ['Nói (speaking)', 'Hát', 'Đọc (reading)', 'Múa (dancing)'], 1, 'Singing = (việc) hát.'),
    Q('"Playing football" có nghĩa là?', ['Cất bóng', 'Mua bóng', 'Xem bóng đá', 'Chơi đá bóng'], 3, 'Play football = chơi bóng đá.'),
    Q('"What is your hobby?" hỏi gì?', ['Sở thích của bạn là gì?', 'Bạn tên gì?', 'Bạn từ đâu?', 'Bạn mấy tuổi?'], 0, 'What is your hobby? = Sở thích của bạn là gì?'),
  ]),

  M(29, 'Daily routine (Present Simple)', [
    Q('"I get up at six o\'clock." nghĩa là?', ['Tôi đi ngủ lúc 6 giờ', 'Tôi ăn sáng lúc 6 giờ', 'Tôi thức dậy lúc 6 giờ', 'Tôi đi học lúc 6 giờ'], 2, 'Get up = thức dậy.'),
    Q('"I brush my teeth." nghĩa là?', ['Tôi chải tóc', 'Tôi tắm', 'Tôi rửa mặt', 'Tôi đánh răng'], 3, 'Brush my teeth = đánh răng.'),
    Q('"I go to school." nghĩa là?', ['Tôi đi ngủ', 'Tôi đi đến trường', 'Tôi về nhà', 'Tôi đi chơi'], 1, 'Go to school = đi học.'),
    Q('"I have breakfast." nghĩa là?', ['Tôi ăn trưa', 'Tôi ăn sáng', 'Tôi ăn tối', 'Tôi đi ngủ'], 1, 'Have breakfast = ăn sáng.'),
    Q('"She goes to school every day." — chú ý động từ:', ['gone (đã đi - quá khứ phân từ)', 'go (nguyên thể - dùng cho I/you/we/they)', 'going (V-ing - dạng tiếp diễn)', 'goes'], 3, 'Ngôi 3 số ít (she) thêm "s/es": goes.'),
    Q('"He gets up early." nghĩa là?', ['Anh ấy thức dậy sớm', 'Anh ấy đi học', 'Anh ấy ngủ muộn', 'Anh ấy mệt'], 0, 'Get up early = thức dậy sớm.'),
  ]),

  M(30, 'Time — What time is it?', [
    Q('"What time is it?" hỏi gì?', ['Bạn mấy tuổi?', 'Bao nhiêu cái?', 'Hôm nay là thứ mấy?', 'Bây giờ là mấy giờ?'], 3, 'What time is it? = Bây giờ là mấy giờ?'),
    Q('"It is seven o\'clock." nghĩa là?', ['Bây giờ là 7 phút', 'Bây giờ là 17 giờ', 'Bây giờ là 7 giờ', 'Bây giờ là 7 giờ 30'], 2, 'o\'clock = giờ chẵn.'),
    Q('"Half past six" là?', ['6 giờ 30 phút', '5 giờ 30', '6 giờ', '7 giờ 30'], 0, 'Half past 6 = 6 giờ rưỡi = 6:30.'),
    Q('Sáng dậy lúc 6 giờ: "I get up at 6 ___."', ['hour (giờ - danh từ chỉ thời lượng)', 'o\'clock', 'half (rưỡi - dùng cho giờ rưỡi)', 'minute'], 1, "at 6 o'clock = lúc 6 giờ."),
    Q('"AM" thường chỉ?', ['Buổi sáng', 'Đêm khuya', 'Buổi tối', 'Cả ngày'], 0, 'AM = từ nửa đêm đến 12h trưa (sáng).'),
    Q('"PM" thường chỉ?', ['Không có nghĩa', 'Cả ngày', 'Buổi sáng', 'Từ trưa đến nửa đêm'], 3, 'PM = từ 12h trưa đến nửa đêm.'),
  ]),

  M(31, 'Months & birthday', [
    Q('"January" là tháng?', ['Tháng 1', 'Tháng 6', 'Tháng 7', 'Tháng 12'], 0, 'January = tháng 1.'),
    Q('"December" là tháng?', ['Tháng 9', 'Tháng 12', 'Tháng 11', 'Tháng 10'], 1, 'December = tháng 12.'),
    Q('Một năm có bao nhiêu tháng?', ['10', '11', '12', '14'], 2, '1 year = 12 months.'),
    Q('"Birthday" có nghĩa là?', ['Ngày Tết', 'Quốc khánh', 'Năm mới', 'Ngày sinh nhật'], 3, 'Birthday = sinh nhật.'),
    Q('"Happy birthday!" nghĩa là?', ['Chúc mừng năm mới', 'Chào buổi sáng', 'Tạm biệt', 'Chúc mừng sinh nhật'], 3, 'Happy birthday = Chúc mừng sinh nhật.'),
    Q('"My birthday is in May." nghĩa là?', ['Sinh nhật tôi vào tháng 5', 'Sinh nhật tôi vào tháng 3', 'Sinh nhật tôi vào tháng 8', 'Tôi sinh năm 5'], 0, 'May = tháng 5.'),
  ]),

  M(32, 'Clothes', [
    Q('"Shirt" có nghĩa là?', ['Giày (shoes)', 'Váy (skirt)', 'Áo sơ mi', 'Mũ (hat)'], 2, 'Shirt = áo sơ mi.'),
    Q('"T-shirt" có nghĩa là?', ['Quần (trousers)', 'Áo khoác', 'Áo thun', 'Váy (skirt)'], 2, 'T-shirt = áo thun / áo phông.'),
    Q('"Trousers" có nghĩa là?', ['Đôi tất (socks)', 'Áo (shirt)', 'Quần dài', 'Mũ (hat)'], 2, 'Trousers = quần dài.'),
    Q('"Shoes" có nghĩa là?', ['Đôi giày', 'Đôi tất (socks)', 'Áo (shirt)', 'Mũ (hat)'], 0, 'Shoes = đôi giày.'),
    Q('"I wear a hat." nghĩa là?', ['Tôi giặt mũ', 'Tôi thích mũ', 'Tôi đội mũ', 'Tôi mua mũ'], 2, 'Wear = mặc / đội / mang.'),
    Q('"She is wearing a red dress." nghĩa là?', ['Cô ấy đang mặc váy đỏ', 'Cô ấy có váy đỏ', 'Váy đỏ rất đẹp', 'Cô ấy thích váy đỏ'], 0, 'is wearing = đang mặc.'),
  ]),

  M(33, 'Action verbs — run, jump, swim, dance', [
    Q('"Run" có nghĩa là?', ['Chạy', 'Đi (walk)', 'Bơi (swim)', 'Nhảy (jump)'], 0, 'Run = chạy.'),
    Q('"Jump" có nghĩa là?', ['Hát (sing)', 'Chạy (run)', 'Bơi (swim)', 'Nhảy (cao/xa)'], 3, 'Jump = nhảy.'),
    Q('"Swim" có nghĩa là?', ['Bơi', 'Chạy (run)', 'Hát (sing)', 'Đọc (read)'], 0, 'Swim = bơi.'),
    Q('"Dance" có nghĩa là?', ['Nhảy múa', 'Bơi (swim)', 'Chạy (run)', 'Hát (sing)'], 0, 'Dance = nhảy múa.'),
    Q('"Look!" nghĩa là?', ['Đi đi!', 'Nghe đi!', 'Nhìn kìa!', 'Ngồi xuống!'], 2, 'Look! = Nhìn kìa!'),
    Q('"He is running." nghĩa là?', ['Anh ấy biết chạy', 'Anh ấy đang chạy', 'Anh ấy không chạy', 'Anh ấy chạy nhanh'], 1, 'is running = đang chạy (hiện tại tiếp diễn).'),
  ]),

  M(34, 'Present simple — he/she/it (s/es)', [
    Q('"She ___ to school every day." (đi)', ['goes', 'go (nguyên thể, dùng cho I/you/we/they)', 'going (V-ing, dạng tiếp diễn)', 'gone (quá khứ phân từ)'], 0, 'Ngôi 3 số ít → goes.'),
    Q('"He ___ TV in the evening." (xem)', ['watches', 'watch (nguyên thể, dùng cho I/you/we/they)', 'watched', 'watching'], 0, 'watch + es → watches.'),
    Q('"My brother ___ football on Sunday." (chơi)', ['plays', 'play (nguyên thể, dùng cho I/you/we/they)', 'played', 'playing'], 0, 'Ngôi 3 số ít → plays.'),
    Q('"I ___ rice for lunch." (ăn)', ['eat', 'ate (quá khứ của eat)', 'eats (chỉ dùng cho he/she/it)', 'eating'], 0, 'I → động từ nguyên thể: eat.'),
    Q('"My cat ___ fish." (thích)', ['like (nguyên thể, dùng cho I/you/we/they)', 'liking', 'liked (quá khứ của like)', 'likes'], 3, 'My cat = it (ngôi 3 số ít) → likes.'),
    Q('"They ___ in Hanoi." (sống)', ['lives (chỉ dùng cho he/she/it)', 'lived (quá khứ của live)', 'live', 'living'], 2, 'They → động từ nguyên thể: live.'),
  ]),

  M(35, 'Review whole year', [
    Q('"Hello! How are you?" Đáp lại:', ['My name is Lan', 'I\'m fine, thank you', 'I have a pen', 'Goodbye'], 1, "I'm fine, thank you = Tôi khoẻ, cảm ơn."),
    Q('"How old are you?" – "I am ___ years old."', ['an eight', 'eighty year', 'eighth', 'eight'], 3, 'I am eight years old.'),
    Q('Số 17 tiếng Anh là?', ['Seven (số 7)', 'Sixteen', 'Seventeen', 'Seventy'], 2, 'Seventeen = 17.'),
    Q('"Where are you from?" – "I am ___ Vietnam."', ['in (ở trong - chỉ vị trí)', 'at (ở tại - chỉ điểm)', 'on (ở trên - chỉ bề mặt)', 'from'], 3, 'I am from Vietnam.'),
    Q('"This is my friend, Mai." nghĩa là?', ['Đây là bạn tôi, Mai', 'Mai là cô tôi', 'Tạm biệt Mai', 'Đây là chị tôi'], 0, 'My friend = bạn của tôi.'),
    Q('"She ___ a cat." (có)', ['is (to be — không có nghĩa "có")', 'are (to be số nhiều)', 'have (dùng cho I/you/we/they)', 'has'], 3, 'She / he / it → has.'),
    Q('"Can you swim?" – Trả lời CÓ:', ['Yes, I am', 'No, I can', 'Yes, I do', 'Yes, I can'], 3, "Yes, I can / No, I can't."),
    Q('"The book is ___ the table." (mặt bàn)', ['on', 'at (tại — dùng cho địa điểm)', 'under (ở dưới)', 'in (ở trong)'], 0, 'On the table = trên (mặt) bàn.'),
    Q('"What time is it?" – "It is 7 ___."', ['hour (giờ — danh từ thời lượng)', 'o\'clock', 'minute', 'half (rưỡi — dùng cho giờ rưỡi)'], 1, "It is 7 o'clock."),
    Q('"My birthday is in ___." (tháng 9)', ['October', 'August', 'September', 'November'], 2, 'September = tháng 9.'),
  ], { difficulty: 3 }),
];

export const P3TA_SCENARIOS = indexBy(P3TA_WEEKS);
