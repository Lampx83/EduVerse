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
    Q('Câu chào buổi sáng: "Good ___"', ['night', 'morning', 'bye', 'luck'], 1, 'Good morning = Chào buổi sáng.'),
    Q('"Nice to meet you." nghĩa là?', ['Hẹn gặp lại', 'Rất vui được gặp bạn', 'Tạm biệt', 'Cảm ơn bạn'], 1, 'Nice to meet you = Rất vui được gặp bạn (lần đầu gặp).'),
    Q('Đáp lại "Nice to meet you." em nói?', ['Nice to meet you, too', 'Goodbye', 'Sorry', 'You are welcome'], 0, 'Đáp lại bằng "Nice to meet you, too." = Tôi cũng vậy.'),
    Q('Chào buổi chiều dùng câu?', ['Good morning', 'Good afternoon', 'Good evening', 'Good night'], 1, 'Good afternoon = Chào buổi chiều (khoảng 12h–18h).'),
    Q('Buổi tối khi gặp nhau em chào?', ['Good night', 'Good evening', 'Good morning', 'Good afternoon'], 1, 'Good evening = chào buổi tối (khi mới gặp).'),
    Q('"See you tomorrow!" nghĩa là?', ['Tạm biệt mãi mãi', 'Hẹn gặp lại ngày mai', 'Hôm nay gặp nhé', 'Xin chào'], 1, 'See you tomorrow = Hẹn gặp lại ngày mai.'),
  ]),

  M(2, "What's your name? – How old are you?", [
    Q('"What is your name?" hỏi điều gì?', ['Bạn bao nhiêu tuổi?', 'Tên bạn là gì?', 'Bạn ở đâu?', 'Bạn khoẻ không?'], 1, 'What is your name? = Tên bạn là gì?'),
    Q('Trả lời "What is your name?" – "___ Nam."', ['I am', 'My name is', 'I have', 'My is'], 1, 'Trả lời đầy đủ: My name is Nam.'),
    Q('"How old are you?" hỏi gì?', ['Bạn tên gì?', 'Bạn ở đâu?', 'Bạn bao nhiêu tuổi?', 'Bạn học lớp mấy?'], 2, 'How old are you? = Bạn bao nhiêu tuổi?'),
    Q('Em 8 tuổi: "I am ___ years old."', ['eight', 'eighth', 'eighty', 'eighteen'], 0, 'eight = 8; eighteen = 18; eighty = 80.'),
    Q('Cách viết tắt của "I am" là?', ["I's", "I'm", "Im'", 'I are'], 1, "I am = I'm."),
    Q('"How do you spell your name?" nghĩa là?', ['Tên bạn viết thế nào?', 'Bạn ở đâu?', 'Bạn bao nhiêu tuổi?', 'Bạn thích gì?'], 0, 'Spell = đánh vần / viết. Hỏi cách viết tên.'),
  ]),

  M(3, 'Where are you from?', [
    Q('"Where are you from?" hỏi gì?', ['Bạn tên gì?', 'Bạn từ đâu đến?', 'Bạn mấy tuổi?', 'Bạn khoẻ không?'], 1, 'Where are you from? = Bạn đến từ đâu?'),
    Q('Trả lời: "I am from ___."', ['Vietnam', 'eight', 'red', 'happy'], 0, 'Sau "from" là tên quốc gia / địa phương.'),
    Q('"I am Vietnamese." nghĩa là?', ['Tôi đến Việt Nam', 'Tôi là người Việt Nam', 'Tôi thích Việt Nam', 'Tôi ở Hà Nội'], 1, 'Vietnamese = (người) Việt Nam.'),
    Q('Thủ đô của Việt Nam tiếng Anh là?', ['Ho Chi Minh', 'Hanoi', 'Hue', 'Da Nang'], 1, 'Hanoi = Hà Nội — thủ đô.'),
    Q('Người Anh là?', ['American', 'English / British', 'Japanese', 'Vietnamese'], 1, 'English / British = người Anh.'),
    Q('"England" có nghĩa là?', ['Nước Mỹ', 'Nước Anh', 'Nước Nhật', 'Nước Pháp'], 1, 'England = nước Anh.'),
  ]),

  M(4, 'My family (members)', [
    Q('"Father" có nghĩa là?', ['Mẹ', 'Bố', 'Anh trai', 'Ông'], 1, 'Father = bố / cha.'),
    Q('"Mother" có nghĩa là?', ['Bố', 'Mẹ', 'Chị gái', 'Bà'], 1, 'Mother = mẹ.'),
    Q('"Brother" có nghĩa là?', ['Anh/em trai', 'Chị/em gái', 'Bố', 'Ông'], 0, 'Brother = anh / em trai.'),
    Q('"Sister" có nghĩa là?', ['Anh/em trai', 'Chị/em gái', 'Bà', 'Cô'], 1, 'Sister = chị / em gái.'),
    Q('"Grandparents" là?', ['Bố mẹ', 'Ông bà', 'Anh chị', 'Cô chú'], 1, 'Grandparents = ông bà.'),
    Q('"This is my family." nghĩa là?', ['Kia là gia đình tôi', 'Đây là gia đình tôi', 'Tôi yêu gia đình', 'Gia đình tôi đông'], 1, 'This is my family = Đây là gia đình tôi.'),
  ]),

  M(5, 'My friends', [
    Q('"Friend" có nghĩa là?', ['Bạn (bè)', 'Anh em', 'Hàng xóm', 'Cô giáo'], 0, 'Friend = bạn.'),
    Q('"This is my friend, Linh." nghĩa là?', ['Đây là bạn tôi, Linh', 'Linh là chị tôi', 'Linh là cô tôi', 'Linh tạm biệt'], 0, 'This is my friend = Đây là bạn của tôi.'),
    Q('"Best friend" là?', ['Bạn xấu', 'Bạn thân nhất', 'Bạn cùng tuổi', 'Bạn mới'], 1, 'Best friend = bạn thân nhất.'),
    Q('Hỏi tên bạn: "What is ___ name?"', ['your', 'his/her', 'my', 'our'], 1, 'Hỏi tên người thứ ba (anh ấy/cô ấy) → his / her.'),
    Q('"Her name is Mai." nghĩa là?', ['Tên anh ấy là Mai', 'Tên cô ấy là Mai', 'Tên tôi là Mai', 'Bạn tên Mai'], 1, 'Her = của cô ấy.'),
    Q('"His name is Nam." nghĩa là?', ['Tên anh ấy là Nam', 'Tên cô ấy là Nam', 'Tôi tên Nam', 'Bạn tên Nam'], 0, 'His = của anh ấy.'),
  ]),

  M(6, 'Numbers 1-20 review', [
    Q('"Eleven" là số?', ['10', '11', '12', '20'], 1, 'Eleven = 11.'),
    Q('Số 13 tiếng Anh là?', ['Thirty', 'Thirteen', 'Three', 'Thirteenth'], 1, 'Thirteen = 13.'),
    Q('"Fifteen" là số?', ['5', '15', '50', '14'], 1, 'Fifteen = 15.'),
    Q('Số 18 tiếng Anh là?', ['Eight', 'Eighteen', 'Eighty', 'Eighty-eight'], 1, 'Eighteen = 18.'),
    Q('"Twenty" là số?', ['12', '20', '2', '22'], 1, 'Twenty = 20.'),
    Q('Đếm: sixteen, ___, eighteen', ['fifteen', 'seventeen', 'nineteen', 'fourteen'], 1, '16 – 17 – 18 → seventeen.'),
  ]),

  M(7, 'My body parts', [
    Q('"Head" có nghĩa là?', ['Tay', 'Đầu', 'Chân', 'Mắt'], 1, 'Head = đầu.'),
    Q('"Eyes" có nghĩa là?', ['Tai', 'Mắt', 'Mũi', 'Miệng'], 1, 'Eyes = (đôi) mắt.'),
    Q('"Ears" có nghĩa là?', ['Tay', 'Tai', 'Mũi', 'Mắt'], 1, 'Ears = (đôi) tai.'),
    Q('"Hands" có nghĩa là?', ['Chân', 'Đôi bàn tay', 'Cánh tay', 'Vai'], 1, 'Hands = đôi bàn tay (số nhiều).'),
    Q('Em nghe bằng?', ['Eyes', 'Ears', 'Nose', 'Mouth'], 1, 'Nghe bằng tai = ears.'),
    Q('"Touch your nose!" nghĩa là?', ['Chạm vào mũi của bạn!', 'Bịt mũi lại!', 'Ngửi đi!', 'Cười lên!'], 0, 'Touch = chạm; nose = mũi.'),
  ]),

  M(8, 'My toys (đồ chơi)', [
    Q('"Ball" có nghĩa là?', ['Quả bóng', 'Búp bê', 'Diều', 'Robot'], 0, 'Ball = quả bóng.'),
    Q('"Doll" có nghĩa là?', ['Quả bóng', 'Búp bê', 'Tàu', 'Xe'], 1, 'Doll = búp bê.'),
    Q('"Car" (đồ chơi) có nghĩa là?', ['Búp bê', 'Ô tô', 'Tàu hoả', 'Máy bay'], 1, 'Car = ô tô (đồ chơi).'),
    Q('"Kite" có nghĩa là?', ['Diều', 'Bóng bay', 'Xe đạp', 'Tàu thuyền'], 0, 'Kite = con diều.'),
    Q('"Teddy bear" là?', ['Gấu bông', 'Búp bê', 'Robot', 'Quả bóng'], 0, 'Teddy bear = gấu bông.'),
    Q('"Robot" có nghĩa là?', ['Người máy', 'Con thú', 'Quả bóng', 'Xe đạp'], 0, 'Robot = người máy.'),
  ]),

  M(9, 'My pets (thú cưng)', [
    Q('"Pet" có nghĩa là?', ['Thú nuôi trong nhà', 'Đồ chơi', 'Cây cảnh', 'Đồ ăn'], 0, 'Pet = thú cưng (mèo, chó, cá cảnh...).'),
    Q('"Cat" có nghĩa là?', ['Mèo', 'Chó', 'Cá', 'Chim'], 0, 'Cat = con mèo.'),
    Q('"Dog" có nghĩa là?', ['Mèo', 'Chó', 'Thỏ', 'Cá'], 1, 'Dog = con chó.'),
    Q('"Rabbit" có nghĩa là?', ['Chuột', 'Thỏ', 'Hổ', 'Gấu'], 1, 'Rabbit = con thỏ.'),
    Q('"Parrot" có nghĩa là?', ['Vẹt', 'Quạ', 'Gà', 'Vịt'], 0, 'Parrot = con vẹt (biết nói).'),
    Q('"I have a pet dog." nghĩa là?', ['Tôi có một con chó nuôi', 'Tôi yêu chó', 'Chó của tôi to', 'Tôi muốn nuôi chó'], 0, 'I have a pet dog = Tôi có một chú chó cưng.'),
  ]),

  M(10, 'In the classroom', [
    Q('"Classroom" có nghĩa là?', ['Phòng học', 'Sân chơi', 'Nhà vệ sinh', 'Phòng ngủ'], 0, 'Classroom = phòng học (lớp học).'),
    Q('"Book" có nghĩa là?', ['Bút', 'Sách', 'Vở', 'Bảng'], 1, 'Book = sách.'),
    Q('"Desk" có nghĩa là?', ['Cái ghế', 'Cái bàn (học)', 'Cái bảng', 'Cái cặp'], 1, 'Desk = bàn học.'),
    Q('"Chair" có nghĩa là?', ['Bàn', 'Ghế', 'Bảng', 'Cặp'], 1, 'Chair = ghế.'),
    Q('"Pencil case" có nghĩa là?', ['Cái cặp sách', 'Hộp bút', 'Bút mực', 'Cục tẩy'], 1, 'Pencil case = hộp bút (đựng bút chì, gôm...).'),
    Q('"Open your book, please." nghĩa là?', ['Đóng sách lại', 'Vui lòng mở sách ra', 'Đọc sách to lên', 'Cất sách đi'], 1, 'Open = mở; please = làm ơn / vui lòng.'),
  ]),

  M(11, 'My school', [
    Q('"School" có nghĩa là?', ['Trường học', 'Bệnh viện', 'Cửa hàng', 'Công viên'], 0, 'School = trường học.'),
    Q('"Teacher" có nghĩa là?', ['Học sinh', 'Giáo viên', 'Bác sĩ', 'Cha mẹ'], 1, 'Teacher = giáo viên / thầy cô.'),
    Q('"Student" / "pupil" có nghĩa là?', ['Học sinh', 'Giáo viên', 'Bảo vệ', 'Hiệu trưởng'], 0, 'Student / pupil = học sinh.'),
    Q('"Library" có nghĩa là?', ['Thư viện', 'Phòng y tế', 'Nhà ăn', 'Sân bóng'], 0, 'Library = thư viện.'),
    Q('"Playground" có nghĩa là?', ['Phòng học', 'Sân chơi', 'Thư viện', 'Nhà vệ sinh'], 1, 'Playground = sân chơi.'),
    Q('"I go to school every day." nghĩa là?', ['Tôi đến trường mỗi ngày', 'Tôi yêu trường', 'Trường tôi to', 'Tôi đi học cuối tuần'], 0, 'Every day = mỗi ngày.'),
  ]),

  M(12, 'This is / These are (demonstratives)', [
    Q('"This is my book." nghĩa là?', ['Kia là sách tôi', 'Đây là sách của tôi', 'Sách tôi đẹp', 'Tôi đọc sách'], 1, 'This is = Đây là (chỉ vật ở gần, số ít).'),
    Q('"These are my pens." nghĩa là?', ['Đây là cây bút', 'Đây là những cây bút của tôi', 'Kia là bút', 'Tôi có bút'], 1, 'These are = Đây là (số nhiều, ở gần).'),
    Q('"That is a cat." nghĩa là?', ['Đây là mèo', 'Kia là một con mèo', 'Mèo tôi', 'Tôi có mèo'], 1, 'That is = Kia / Đó là (số ít, ở xa).'),
    Q('"Those are dogs." nghĩa là?', ['Kia là một con chó', 'Kia là những con chó', 'Đây là chó', 'Tôi có chó'], 1, 'Those are = Kia là (số nhiều, ở xa).'),
    Q('"___ is a pencil." (1 vật ở gần)', ['These', 'Those', 'This', 'They'], 2, 'Một vật ở gần dùng "This".'),
    Q('"___ are erasers." (nhiều vật ở xa)', ['This', 'That', 'These', 'Those'], 3, 'Số nhiều ở xa dùng "Those".'),
  ]),

  M(13, 'How many...? + numbers', [
    Q('"How many books?" hỏi gì?', ['Sách màu gì?', 'Có bao nhiêu quyển sách?', 'Sách của ai?', 'Sách ở đâu?'], 1, 'How many ...? = Có bao nhiêu ... ?'),
    Q('"How many" dùng với danh từ?', ['Số ít', 'Số nhiều đếm được', 'Không đếm được', 'Tên riêng'], 1, 'How many + danh từ số nhiều đếm được.'),
    Q('Có 3 quyển sách: "I have ___ books."', ['three', 'third', 'thirty', 'a three'], 0, 'three = 3 (số đếm).'),
    Q('"How many pencils are there?" trả lời:', ['There is one', 'There are five', 'It is red', 'They are big'], 1, 'There are + số nhiều (số lượng > 1).'),
    Q('"There is one cat." nghĩa là?', ['Có nhiều con mèo', 'Có một con mèo', 'Không có mèo', 'Mèo to'], 1, 'There is = có (số ít).'),
    Q('"There are two dogs." nghĩa là?', ['Có 2 con chó', 'Có 1 con chó', 'Có 12 con chó', 'Không có chó'], 0, 'There are + số nhiều: 2 dogs.'),
  ]),

  M(14, 'Colors & shapes', [
    Q('"Red" là màu gì?', ['Xanh', 'Đỏ', 'Vàng', 'Tím'], 1, 'Red = màu đỏ.'),
    Q('"Yellow" là màu gì?', ['Vàng', 'Xanh', 'Tím', 'Hồng'], 0, 'Yellow = màu vàng.'),
    Q('"Circle" là hình gì?', ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], 1, 'Circle = hình tròn.'),
    Q('"Square" là hình gì?', ['Hình tròn', 'Hình vuông', 'Hình tam giác', 'Hình sao'], 1, 'Square = hình vuông.'),
    Q('"Triangle" là hình gì?', ['Tam giác', 'Tròn', 'Vuông', 'Trái tim'], 0, 'Triangle = hình tam giác.'),
    Q('"What color is it?" hỏi gì?', ['Nó là hình gì?', 'Nó màu gì?', 'Nó ở đâu?', 'Nó của ai?'], 1, 'What color is it? = Nó (có) màu gì?'),
  ]),

  M(15, 'I have / He has (have/has got)', [
    Q('"I have a pen." nghĩa là?', ['Tôi không có bút', 'Tôi có một cây bút', 'Bạn có bút', 'Cho tôi bút'], 1, 'I have = Tôi có.'),
    Q('"She has a doll." nghĩa là?', ['Cô ấy có búp bê', 'Tôi có búp bê', 'Cô ấy thích búp bê', 'Búp bê đẹp'], 0, 'She / he / it dùng "has".'),
    Q('Điền: "He ___ a dog."', ['have', 'has', 'is', 'are'], 1, 'He / She / It → has.'),
    Q('Điền: "We ___ many books."', ['has', 'have', 'is', 'am'], 1, 'I / you / we / they → have.'),
    Q('"Do you have a pencil?" nghĩa là?', ['Bạn có bút chì không?', 'Tôi có bút chì', 'Cho tôi bút chì', 'Bút chì đâu?'], 0, 'Do you have ...? = Bạn có ... không?'),
    Q('Trả lời CÓ: "Do you have a pen?" – ___', ['Yes, I do', 'No, I do', 'Yes, I am', 'No, I am'], 0, "Trả lời ngắn: Yes, I do. / No, I don't."),
  ]),

  M(16, 'Can / Can\'t (khả năng)', [
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi có thể bơi', 'Tôi thích bơi', 'Tôi đi bơi'], 1, 'I can + V = Tôi có thể ...'),
    Q('"She can\'t sing." nghĩa là?', ['Cô ấy biết hát', 'Cô ấy không biết hát', 'Cô ấy thích hát', 'Cô ấy đang hát'], 1, "can't = không thể."),
    Q('"Can you ride a bike?" nghĩa là?', ['Bạn có biết đi xe đạp không?', 'Bạn đang đi xe đạp', 'Cho tôi xe đạp', 'Xe đạp đâu?'], 0, 'Can you ...? = Bạn có thể / có biết ... không?'),
    Q('Trả lời CÓ thể: "Can you swim?" – ___', ['Yes, I can', 'No, I can', 'Yes, I do', 'Yes, I am'], 0, "Trả lời ngắn: Yes, I can. / No, I can't."),
    Q('Điền: "Birds ___ fly."', ['can', "can't", 'is', 'are'], 0, 'Chim có thể bay → can.'),
    Q('"Fish can swim but they can\'t walk." nghĩa là?', ['Cá biết bơi nhưng không biết đi', 'Cá biết đi', 'Cá không bơi được', 'Cá biết bay'], 0, 'But = nhưng; can\'t = không thể.'),
  ]),

  M(17, 'Days of the week', [
    Q('"Monday" là thứ?', ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư'], 1, 'Monday = thứ hai.'),
    Q('"Friday" là thứ?', ['Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'], 1, 'Friday = thứ sáu.'),
    Q('"Sunday" là?', ['Thứ bảy', 'Chủ nhật', 'Thứ hai', 'Thứ sáu'], 1, 'Sunday = chủ nhật.'),
    Q('Một tuần có bao nhiêu ngày?', ['5', '6', '7', '8'], 2, 'Một tuần = 7 days.'),
    Q('Hai ngày cuối tuần là?', ['Mon & Tue', 'Sat & Sun', 'Fri & Sat', 'Wed & Thu'], 1, 'Weekend = Saturday & Sunday.'),
    Q('"What day is it today?" hỏi gì?', ['Hôm nay là ngày bao nhiêu?', 'Hôm nay là thứ mấy?', 'Hôm nay thời tiết thế nào?', 'Bạn đi đâu hôm nay?'], 1, 'What day = thứ mấy?'),
  ]),

  M(18, 'Review HK1', [
    Q('"Hello, my name is Lan." nghĩa là?', ['Xin chào, tôi tên Lan', 'Tạm biệt Lan', 'Lan đâu rồi', 'Lan khoẻ không'], 0, 'My name is ... = Tôi tên là ...'),
    Q('"How old are you?" – "I am 8 ___ old."', ['year', 'years', 'old', 'yearly'], 1, '"years old" — từ 2 tuổi trở lên dùng số nhiều "years".'),
    Q('"Where are you from?" – "I am from ___."', ['Vietnam', 'happy', 'red', 'big'], 0, 'Sau "from" là tên nước/địa danh.'),
    Q('"She has a cat." nghĩa là?', ['Tôi có mèo', 'Cô ấy có một con mèo', 'Cô ấy thích mèo', 'Mèo của cô ấy'], 1, 'She has = cô ấy có.'),
    Q('"How many books?" – "There ___ five books."', ['is', 'are', 'am', 'be'], 1, 'There are + số nhiều.'),
    Q('"Can you sing?" – Trả lời CÓ:', ['Yes, I can', 'No, I can', 'Yes, I do', 'Yes, I am'], 0, "Yes, I can / No, I can't."),
    Q('Hôm nay là Monday, ngày mai là?', ['Sunday', 'Tuesday', 'Wednesday', 'Friday'], 1, 'Sau Monday là Tuesday.'),
    Q('"Touch your nose!" nghĩa là?', ['Bịt mũi lại', 'Chạm vào mũi của bạn', 'Ngửi đi', 'Hắt hơi'], 1, 'Touch = chạm; nose = mũi.'),
    Q('"This is my pet dog." nghĩa là?', ['Kia là con chó của tôi', 'Đây là chú chó cưng của tôi', 'Tôi yêu chó', 'Tôi không có chó'], 1, 'This is my pet dog = Đây là con chó cưng của tôi.'),
    Q('"Good evening!" dùng khi nào?', ['Chào buổi sáng', 'Chào buổi tối', 'Chào buổi chiều', 'Tạm biệt'], 1, 'Good evening = chào buổi tối (mới gặp).'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'My house (1) — rooms', [
    Q('"House" có nghĩa là?', ['Trường', 'Ngôi nhà', 'Cửa hàng', 'Công viên'], 1, 'House = ngôi nhà.'),
    Q('"Bedroom" là phòng?', ['Phòng ngủ', 'Phòng bếp', 'Phòng tắm', 'Phòng khách'], 0, 'Bedroom = phòng ngủ.'),
    Q('"Kitchen" là phòng?', ['Phòng ngủ', 'Phòng bếp', 'Phòng tắm', 'Phòng khách'], 1, 'Kitchen = phòng bếp.'),
    Q('"Bathroom" là phòng?', ['Phòng bếp', 'Phòng tắm', 'Phòng ngủ', 'Phòng ăn'], 1, 'Bathroom = phòng tắm.'),
    Q('"Living room" là phòng?', ['Phòng khách', 'Phòng ngủ', 'Phòng bếp', 'Phòng tắm'], 0, 'Living room = phòng khách (nơi sinh hoạt chung).'),
    Q('Em ngủ ở?', ['Kitchen', 'Bedroom', 'Bathroom', 'Garden'], 1, 'Ngủ ở phòng ngủ = bedroom.'),
  ]),

  M(20, 'My house (2) — furniture & prepositions of place', [
    Q('"Table" có nghĩa là?', ['Bàn', 'Ghế', 'Giường', 'Tủ'], 0, 'Table = cái bàn.'),
    Q('"Bed" có nghĩa là?', ['Bàn', 'Giường', 'Ghế sofa', 'Tủ quần áo'], 1, 'Bed = cái giường.'),
    Q('"In" có nghĩa là?', ['Trên', 'Trong', 'Dưới', 'Cạnh'], 1, 'In = ở trong.'),
    Q('"On" có nghĩa là?', ['Trong', 'Trên (bề mặt)', 'Dưới', 'Cạnh'], 1, 'On = ở trên (bề mặt).'),
    Q('"Under" có nghĩa là?', ['Trên', 'Dưới', 'Trong', 'Cạnh'], 1, 'Under = ở dưới.'),
    Q('"Next to" có nghĩa là?', ['Trước', 'Sau', 'Cạnh / kế bên', 'Trong'], 2, 'Next to = ngay cạnh.'),
  ]),

  M(21, 'Where is...?: in/on/under/next to', [
    Q('"Where is my book?" có nghĩa là?', ['Sách tôi đâu rồi?', 'Sách tôi đẹp', 'Sách của ai?', 'Cho tôi sách'], 0, 'Where is ...? = ... ở đâu?'),
    Q('"The cat is under the table." nghĩa là?', ['Mèo trên bàn', 'Mèo dưới gầm bàn', 'Mèo trong bàn', 'Mèo cạnh bàn'], 1, 'Under the table = dưới gầm bàn.'),
    Q('"The book is on the desk." nghĩa là?', ['Sách trong bàn', 'Sách dưới bàn', 'Sách trên (mặt) bàn', 'Sách cạnh bàn'], 2, 'On the desk = trên mặt bàn.'),
    Q('"The ball is in the box." nghĩa là?', ['Bóng trên hộp', 'Bóng trong hộp', 'Bóng dưới hộp', 'Bóng cạnh hộp'], 1, 'In the box = ở trong hộp.'),
    Q('"The chair is next to the desk." nghĩa là?', ['Ghế trong bàn', 'Ghế trên bàn', 'Ghế kế bên bàn', 'Ghế xa bàn'], 2, 'Next to = ngay cạnh.'),
    Q('Em ngồi trên ghế: "I sit ___ the chair."', ['in', 'on', 'under', 'next'], 1, 'Ngồi trên ghế = on the chair.'),
  ]),

  M(22, 'Food (1) — rice, noodles, bread, meat', [
    Q('"Rice" có nghĩa là?', ['Mì', 'Cơm / gạo', 'Bánh mì', 'Cá'], 1, 'Rice = cơm / gạo.'),
    Q('"Noodles" có nghĩa là?', ['Cơm', 'Mì / bún / phở', 'Bánh mì', 'Trứng'], 1, 'Noodles = mì / phở / bún (sợi).'),
    Q('"Bread" có nghĩa là?', ['Cơm', 'Bánh mì', 'Mì', 'Bánh ngọt'], 1, 'Bread = bánh mì.'),
    Q('"Meat" có nghĩa là?', ['Thịt', 'Cá', 'Trứng', 'Rau'], 0, 'Meat = thịt (chung).'),
    Q('"Chicken" có nghĩa là?', ['Thịt bò', 'Thịt gà', 'Thịt heo', 'Cá'], 1, 'Chicken = gà / thịt gà.'),
    Q('"I eat rice for lunch." nghĩa là?', ['Tôi ăn cơm trưa', 'Tôi ăn bánh mì sáng', 'Tôi nấu cơm', 'Tôi thích cơm'], 0, 'Lunch = bữa trưa.'),
  ]),

  M(23, 'Food (2) — fruits & vegetables', [
    Q('"Apple" có nghĩa là?', ['Táo', 'Chuối', 'Cam', 'Xoài'], 0, 'Apple = quả táo.'),
    Q('"Banana" có nghĩa là?', ['Táo', 'Chuối', 'Nho', 'Lê'], 1, 'Banana = quả chuối.'),
    Q('"Orange" (trái cây) có nghĩa là?', ['Cam', 'Quýt', 'Chanh', 'Bưởi'], 0, 'Orange = quả cam.'),
    Q('"Vegetables" có nghĩa là?', ['Trái cây', 'Rau củ', 'Thịt cá', 'Nước ngọt'], 1, 'Vegetables = rau củ.'),
    Q('"Carrot" có nghĩa là?', ['Cà rốt', 'Cà chua', 'Cà tím', 'Cải bắp'], 0, 'Carrot = củ cà rốt.'),
    Q('"Tomato" có nghĩa là?', ['Cà chua', 'Cà rốt', 'Khoai', 'Dưa'], 0, 'Tomato = cà chua.'),
  ]),

  M(24, 'Drinks & I like / I don\'t like', [
    Q('"Water" có nghĩa là?', ['Nước', 'Sữa', 'Trà', 'Nước ép'], 0, 'Water = nước (lọc).'),
    Q('"Milk" có nghĩa là?', ['Nước', 'Sữa', 'Trà', 'Cà phê'], 1, 'Milk = sữa.'),
    Q('"Juice" có nghĩa là?', ['Nước ép trái cây', 'Sữa', 'Trà', 'Bia'], 0, 'Juice = nước ép.'),
    Q('"I like apples." nghĩa là?', ['Tôi không thích táo', 'Tôi thích táo', 'Tôi có táo', 'Tôi ghét táo'], 1, 'I like = Tôi thích.'),
    Q('"I don\'t like fish." nghĩa là?', ['Tôi thích cá', 'Tôi không thích cá', 'Tôi có cá', 'Tôi ăn cá'], 1, "I don't like = Tôi không thích."),
    Q('"She likes milk." nghĩa là?', ['Cô ấy thích sữa', 'Cô ấy có sữa', 'Cô ấy ghét sữa', 'Cô ấy uống sữa'], 0, 'She likes (ngôi 3 thêm s).'),
  ]),

  M(25, 'Animals (1) — pets & farm animals', [
    Q('"Dog" có nghĩa là?', ['Chó', 'Mèo', 'Bò', 'Vịt'], 0, 'Dog = con chó.'),
    Q('"Cow" có nghĩa là?', ['Con bò', 'Con heo', 'Con gà', 'Con vịt'], 0, 'Cow = con bò.'),
    Q('"Pig" có nghĩa là?', ['Con bò', 'Con heo / lợn', 'Con gà', 'Con vịt'], 1, 'Pig = con heo / lợn.'),
    Q('"Duck" có nghĩa là?', ['Con gà', 'Con vịt', 'Con ngỗng', 'Con thỏ'], 1, 'Duck = con vịt.'),
    Q('"Chicken" (con vật) có nghĩa là?', ['Con gà', 'Con vịt', 'Con bò', 'Con heo'], 0, 'Chicken = con gà.'),
    Q('Con vật cho ta sữa là?', ['Pig', 'Cow', 'Hen', 'Dog'], 1, 'Cow (bò) cho ta sữa.'),
  ]),

  M(26, 'Animals (2) — wild animals & zoo', [
    Q('"Lion" có nghĩa là?', ['Sư tử', 'Hổ', 'Voi', 'Gấu'], 0, 'Lion = sư tử.'),
    Q('"Tiger" có nghĩa là?', ['Sư tử', 'Hổ', 'Báo', 'Gấu'], 1, 'Tiger = con hổ.'),
    Q('"Elephant" có nghĩa là?', ['Con voi', 'Con hươu', 'Con khỉ', 'Con ngựa'], 0, 'Elephant = con voi.'),
    Q('"Monkey" có nghĩa là?', ['Con khỉ', 'Con gấu', 'Con cọp', 'Con ngựa'], 0, 'Monkey = con khỉ.'),
    Q('"Bear" có nghĩa là?', ['Gấu', 'Hươu', 'Hươu cao cổ', 'Báo'], 0, 'Bear = con gấu.'),
    Q('"Zoo" có nghĩa là?', ['Sở thú', 'Sân bay', 'Cửa hàng', 'Bệnh viện'], 0, 'Zoo = vườn bách thú (sở thú).'),
  ]),

  M(27, 'Weather & seasons', [
    Q('"Sunny" có nghĩa là?', ['Có nắng', 'Có mưa', 'Có mây', 'Có gió'], 0, 'Sunny = trời nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có nắng', 'Có mưa', 'Có gió', 'Có tuyết'], 1, 'Rainy = trời mưa.'),
    Q('"Hot" có nghĩa là?', ['Lạnh', 'Nóng', 'Mát', 'Ấm'], 1, 'Hot = nóng.'),
    Q('"Cold" có nghĩa là?', ['Nóng', 'Lạnh', 'Ấm', 'Mát'], 1, 'Cold = lạnh.'),
    Q('"Summer" là mùa?', ['Xuân', 'Hạ', 'Thu', 'Đông'], 1, 'Summer = mùa hạ (hè).'),
    Q('"How is the weather today?" hỏi gì?', ['Bạn khoẻ không?', 'Thời tiết hôm nay thế nào?', 'Hôm nay thứ mấy?', 'Bạn ở đâu?'], 1, 'How is the weather? = Thời tiết thế nào?'),
  ]),

  M(28, 'Hobbies & free time', [
    Q('"Hobby" có nghĩa là?', ['Nghề nghiệp', 'Sở thích', 'Bài tập', 'Lịch trình'], 1, 'Hobby = sở thích.'),
    Q('"I like reading." nghĩa là?', ['Tôi thích đọc sách', 'Tôi thích viết', 'Tôi đọc nhanh', 'Tôi mua sách'], 0, 'Reading = (việc) đọc.'),
    Q('"Drawing" có nghĩa là?', ['Vẽ', 'Hát', 'Nhảy', 'Bơi'], 0, 'Drawing = vẽ.'),
    Q('"Singing" có nghĩa là?', ['Múa', 'Hát', 'Đọc', 'Nói'], 1, 'Singing = (việc) hát.'),
    Q('"Playing football" có nghĩa là?', ['Chơi đá bóng', 'Xem bóng đá', 'Mua bóng', 'Cất bóng'], 0, 'Play football = chơi bóng đá.'),
    Q('"What is your hobby?" hỏi gì?', ['Bạn tên gì?', 'Sở thích của bạn là gì?', 'Bạn mấy tuổi?', 'Bạn từ đâu?'], 1, 'What is your hobby? = Sở thích của bạn là gì?'),
  ]),

  M(29, 'Daily routine (Present Simple)', [
    Q('"I get up at six o\'clock." nghĩa là?', ['Tôi đi ngủ lúc 6 giờ', 'Tôi thức dậy lúc 6 giờ', 'Tôi ăn sáng lúc 6 giờ', 'Tôi đi học lúc 6 giờ'], 1, 'Get up = thức dậy.'),
    Q('"I brush my teeth." nghĩa là?', ['Tôi rửa mặt', 'Tôi đánh răng', 'Tôi chải tóc', 'Tôi tắm'], 1, 'Brush my teeth = đánh răng.'),
    Q('"I go to school." nghĩa là?', ['Tôi về nhà', 'Tôi đi đến trường', 'Tôi đi chơi', 'Tôi đi ngủ'], 1, 'Go to school = đi học.'),
    Q('"I have breakfast." nghĩa là?', ['Tôi ăn sáng', 'Tôi ăn trưa', 'Tôi ăn tối', 'Tôi đi ngủ'], 0, 'Have breakfast = ăn sáng.'),
    Q('"She goes to school every day." — chú ý động từ:', ['go', 'goes', 'going', 'gone'], 1, 'Ngôi 3 số ít (she) thêm "s/es": goes.'),
    Q('"He gets up early." nghĩa là?', ['Anh ấy ngủ muộn', 'Anh ấy thức dậy sớm', 'Anh ấy đi học', 'Anh ấy mệt'], 1, 'Get up early = thức dậy sớm.'),
  ]),

  M(30, 'Time — What time is it?', [
    Q('"What time is it?" hỏi gì?', ['Bây giờ là mấy giờ?', 'Hôm nay là thứ mấy?', 'Bạn mấy tuổi?', 'Bao nhiêu cái?'], 0, 'What time is it? = Bây giờ là mấy giờ?'),
    Q('"It is seven o\'clock." nghĩa là?', ['Bây giờ là 7 giờ', 'Bây giờ là 17 giờ', 'Bây giờ là 7 phút', 'Số 7'], 0, 'o\'clock = giờ chẵn.'),
    Q('"Half past six" là?', ['6 giờ', '6 giờ 30 phút', '5 giờ 30', '7 giờ 30'], 1, 'Half past 6 = 6 giờ rưỡi = 6:30.'),
    Q('Sáng dậy lúc 6 giờ: "I get up at 6 ___."', ["o'clock", 'minute', 'hour', 'half'], 0, "at 6 o'clock = lúc 6 giờ."),
    Q('"AM" thường chỉ?', ['Buổi sáng', 'Buổi tối', 'Cả ngày', 'Đêm khuya'], 0, 'AM = từ nửa đêm đến 12h trưa (sáng).'),
    Q('"PM" thường chỉ?', ['Buổi sáng', 'Từ trưa đến nửa đêm', 'Cả ngày', 'Không có nghĩa'], 1, 'PM = từ 12h trưa đến nửa đêm.'),
  ]),

  M(31, 'Months & birthday', [
    Q('"January" là tháng?', ['Tháng 1', 'Tháng 6', 'Tháng 12', 'Tháng 7'], 0, 'January = tháng 1.'),
    Q('"December" là tháng?', ['Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 9'], 2, 'December = tháng 12.'),
    Q('Một năm có bao nhiêu tháng?', ['10', '11', '12', '14'], 2, '1 year = 12 months.'),
    Q('"Birthday" có nghĩa là?', ['Ngày Tết', 'Ngày sinh nhật', 'Năm mới', 'Quốc khánh'], 1, 'Birthday = sinh nhật.'),
    Q('"Happy birthday!" nghĩa là?', ['Chúc mừng năm mới', 'Chúc mừng sinh nhật', 'Chào buổi sáng', 'Tạm biệt'], 1, 'Happy birthday = Chúc mừng sinh nhật.'),
    Q('"My birthday is in May." nghĩa là?', ['Sinh nhật tôi vào tháng 3', 'Sinh nhật tôi vào tháng 5', 'Sinh nhật tôi vào tháng 8', 'Tôi sinh năm 5'], 1, 'May = tháng 5.'),
  ]),

  M(32, 'Clothes', [
    Q('"Shirt" có nghĩa là?', ['Áo sơ mi', 'Váy', 'Mũ', 'Giày'], 0, 'Shirt = áo sơ mi.'),
    Q('"T-shirt" có nghĩa là?', ['Áo thun', 'Áo khoác', 'Quần', 'Váy'], 0, 'T-shirt = áo thun / áo phông.'),
    Q('"Trousers" có nghĩa là?', ['Áo', 'Quần dài', 'Mũ', 'Tất'], 1, 'Trousers = quần dài.'),
    Q('"Shoes" có nghĩa là?', ['Tất', 'Đôi giày', 'Áo', 'Mũ'], 1, 'Shoes = đôi giày.'),
    Q('"I wear a hat." nghĩa là?', ['Tôi mua mũ', 'Tôi đội mũ', 'Tôi giặt mũ', 'Tôi thích mũ'], 1, 'Wear = mặc / đội / mang.'),
    Q('"She is wearing a red dress." nghĩa là?', ['Cô ấy có váy đỏ', 'Cô ấy đang mặc váy đỏ', 'Cô ấy thích váy đỏ', 'Váy đỏ rất đẹp'], 1, 'is wearing = đang mặc.'),
  ]),

  M(33, 'Action verbs — run, jump, swim, dance', [
    Q('"Run" có nghĩa là?', ['Đi', 'Chạy', 'Nhảy', 'Bơi'], 1, 'Run = chạy.'),
    Q('"Jump" có nghĩa là?', ['Chạy', 'Nhảy (cao/xa)', 'Bơi', 'Hát'], 1, 'Jump = nhảy.'),
    Q('"Swim" có nghĩa là?', ['Bơi', 'Chạy', 'Hát', 'Đọc'], 0, 'Swim = bơi.'),
    Q('"Dance" có nghĩa là?', ['Hát', 'Nhảy múa', 'Chạy', 'Bơi'], 1, 'Dance = nhảy múa.'),
    Q('"Look!" nghĩa là?', ['Nhìn kìa!', 'Nghe đi!', 'Đi đi!', 'Ngồi xuống!'], 0, 'Look! = Nhìn kìa!'),
    Q('"He is running." nghĩa là?', ['Anh ấy chạy nhanh', 'Anh ấy đang chạy', 'Anh ấy biết chạy', 'Anh ấy không chạy'], 1, 'is running = đang chạy (hiện tại tiếp diễn).'),
  ]),

  M(34, 'Present simple — he/she/it (s/es)', [
    Q('"She ___ to school every day." (đi)', ['go', 'goes', 'going', 'gone'], 1, 'Ngôi 3 số ít → goes.'),
    Q('"He ___ TV in the evening." (xem)', ['watch', 'watches', 'watching', 'watched'], 1, 'watch + es → watches.'),
    Q('"My brother ___ football on Sunday." (chơi)', ['play', 'plays', 'playing', 'played'], 1, 'Ngôi 3 số ít → plays.'),
    Q('"I ___ rice for lunch." (ăn)', ['eat', 'eats', 'eating', 'ate'], 0, 'I → động từ nguyên thể: eat.'),
    Q('"My cat ___ fish." (thích)', ['like', 'likes', 'liking', 'liked'], 1, 'My cat = it (ngôi 3 số ít) → likes.'),
    Q('"They ___ in Hanoi." (sống)', ['live', 'lives', 'living', 'lived'], 0, 'They → động từ nguyên thể: live.'),
  ]),

  M(35, 'Review whole year', [
    Q('"Hello! How are you?" Đáp lại:', ['My name is Lan', "I'm fine, thank you", 'Goodbye', 'I have a pen'], 1, "I'm fine, thank you = Tôi khoẻ, cảm ơn."),
    Q('"How old are you?" – "I am ___ years old."', ['eight', 'eighth', 'eighty year', 'an eight'], 0, 'I am eight years old.'),
    Q('Số 17 tiếng Anh là?', ['Seventy', 'Seventeen', 'Seven', 'Sixteen'], 1, 'Seventeen = 17.'),
    Q('"Where are you from?" – "I am ___ Vietnam."', ['in', 'from', 'on', 'at'], 1, 'I am from Vietnam.'),
    Q('"This is my friend, Mai." nghĩa là?', ['Đây là bạn tôi, Mai', 'Đây là chị tôi', 'Mai là cô tôi', 'Tạm biệt Mai'], 0, 'My friend = bạn của tôi.'),
    Q('"She ___ a cat." (có)', ['have', 'has', 'is', 'are'], 1, 'She / he / it → has.'),
    Q('"Can you swim?" – Trả lời CÓ:', ['Yes, I can', 'No, I can', 'Yes, I do', 'Yes, I am'], 0, "Yes, I can / No, I can't."),
    Q('"The book is ___ the table." (mặt bàn)', ['in', 'on', 'under', 'at'], 1, 'On the table = trên (mặt) bàn.'),
    Q('"What time is it?" – "It is 7 ___."', ["o'clock", 'minute', 'hour', 'half'], 0, "It is 7 o'clock."),
    Q('"My birthday is in ___." (tháng 9)', ['September', 'November', 'October', 'August'], 0, 'September = tháng 9.'),
  ], { difficulty: 3 }),
];

export const P3TA_SCENARIOS = indexBy(P3TA_WEEKS);
