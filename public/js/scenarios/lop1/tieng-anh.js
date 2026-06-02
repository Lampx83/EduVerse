// ============================================================
// Lớp 1 · TIẾNG ANH (TỰ CHỌN) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám SGK tự chọn: i-Learn Smart Start / Family and Friends / KNTT.
// Trình độ rất cơ bản: nhận diện từ vựng quen thuộc, mẫu câu chào hỏi
// đơn giản, số đếm 1-10, màu sắc, gia đình, lớp học, con vật, đồ chơi…
// ID prefix: "P1TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1TA', 'tieng-anh', n, title, qs, opts);

export const P1TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Hello / Hi — Chào hỏi', [
    Q('"Hello" có nghĩa là?', ['Tạm biệt', 'Xin chào', 'Cảm ơn', 'Xin lỗi'], 1, 'Hello = Xin chào.'),
    Q('"Hi" có nghĩa là?', ['Xin chào (thân mật)', 'Tạm biệt', 'Cảm ơn', 'Không'], 0, 'Hi = chào (cách nói thân mật).'),
    Q('Khi gặp bạn buổi sáng, em nói?', ['Bye', 'Hi', 'No', 'Sorry'], 1, 'Hi / Hello dùng để chào khi gặp nhau.'),
    Q('"Hello, Lan!" nghĩa là?', ['Tạm biệt Lan', 'Xin chào Lan', 'Lan ơi', 'Lan đâu'], 1, 'Hello + tên = Xin chào (ai đó).'),
    Q('Chọn từ chào hỏi:', ['Cat', 'Hello', 'Red', 'Book'], 1, 'Hello là lời chào.'),
    Q('Khi cô giáo vào lớp, em nói:', ['Goodbye, teacher!', 'Hello, teacher!', 'Sorry, teacher!', 'No, teacher!'], 1, 'Chào cô khi gặp.'),
  ]),

  M(2, 'Goodbye / Bye — Tạm biệt', [
    Q('"Goodbye" có nghĩa là?', ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], 1, 'Goodbye = Tạm biệt.'),
    Q('"Bye" là cách nói ngắn của?', ['Hello', 'Hi', 'Goodbye', 'Thanks'], 2, 'Bye = cách rút gọn của Goodbye.'),
    Q('Khi tan học ra về, em nói với cô?', ['Hello', 'Goodbye', 'Sorry', 'Thank'], 1, 'Goodbye khi chia tay.'),
    Q('"Bye bye!" nghĩa là?', ['Xin chào', 'Tạm biệt nhé', 'Cảm ơn', 'Không sao'], 1, 'Bye bye = tạm biệt (thân mật).'),
    Q('"See you!" nghĩa là?', ['Hẹn gặp lại', 'Xin chào', 'Cảm ơn', 'Xin lỗi'], 0, 'See you = hẹn gặp lại.'),
    Q('Đáp lại "Goodbye!" em có thể nói:', ['Hello!', 'Bye!', 'Sorry!', 'Yes!'], 1, 'Tạm biệt đáp tạm biệt.'),
  ]),

  M(3, 'Good morning / Good night', [
    Q('"Good morning" nghĩa là?', ['Chào buổi sáng', 'Chào buổi tối', 'Chúc ngủ ngon', 'Tạm biệt'], 0, 'Good morning = Chào buổi sáng.'),
    Q('"Good night" nghĩa là?', ['Chào buổi sáng', 'Chào buổi chiều', 'Chúc ngủ ngon', 'Xin chào'], 2, 'Good night = chúc ngủ ngon.'),
    Q('"Good afternoon" nghĩa là?', ['Chào buổi chiều', 'Chào buổi sáng', 'Tạm biệt', 'Chúc ngon miệng'], 0, 'Good afternoon = chào buổi chiều.'),
    Q('Buổi tối trước khi ngủ em nói với mẹ:', ['Good morning', 'Good night', 'Hello', 'Bye'], 1, 'Trước khi ngủ chúc good night.'),
    Q('Sáng đến lớp em nói với cô:', ['Good night', 'Good morning', 'Goodbye', 'Bye'], 1, 'Buổi sáng chào good morning.'),
    Q('Buổi tối ăn cơm xong, em nói:', ['Good evening', 'Good morning', 'Hello morning', 'Night good'], 0, 'Good evening = chào buổi tối.'),
  ]),

  M(4, "What's your name? – I'm…", [
    Q('"What is your name?" hỏi điều gì?', ['Bạn mấy tuổi?', 'Tên bạn là gì?', 'Bạn khoẻ không?', 'Bạn ở đâu?'], 1, 'What is your name? = Tên bạn là gì?'),
    Q('Trả lời tên: "I ___ Nam."', ['am', 'is', 'are', 'be'], 0, 'I am Nam = Tôi (tên) là Nam.'),
    Q('"My name is Lan." nghĩa là?', ['Tôi là Lan', 'Tên tôi là Lan', 'Lan ơi', 'Chào Lan'], 1, 'My name is = Tên tôi là.'),
    Q('Cách viết tắt của "I am" là?', ["Im'", "I'm", "I's", 'Iam'], 1, "I am = I'm."),
    Q('Bạn tên Bin, em viết: "My name is ___"', ['Bin', 'bin', 'is Bin', 'name'], 0, 'Tên riêng viết hoa chữ đầu.'),
    Q('"I\'m Lan." nghĩa là?', ['Tôi là Lan', 'Bạn là Lan', 'Lan đâu', 'Lan ơi'], 0, "I'm Lan = Tôi là Lan."),
  ]),

  M(5, 'Numbers 1-5 — Số đếm 1 đến 5', [
    Q('"One" là số?', ['1', '2', '3', '4'], 0, 'One = 1.'),
    Q('"Two" là số?', ['1', '2', '3', '5'], 1, 'Two = 2.'),
    Q('"Three" là số?', ['1', '2', '3', '4'], 2, 'Three = 3.'),
    Q('Số 4 tiếng Anh là?', ['Three', 'Four', 'Five', 'Two'], 1, 'Four = 4.'),
    Q('Số 5 tiếng Anh là?', ['Four', 'Five', 'Six', 'Three'], 1, 'Five = 5.'),
    Q('Sắp đúng thứ tự: one – ___ – three', ['four', 'two', 'five', 'six'], 1, '1 – 2 – 3 = one – two – three.'),
  ]),

  M(6, 'Numbers 6-10 — Số đếm 6 đến 10', [
    Q('"Six" là số?', ['5', '6', '7', '8'], 1, 'Six = 6.'),
    Q('"Seven" là số?', ['6', '7', '8', '9'], 1, 'Seven = 7.'),
    Q('Số 8 tiếng Anh là?', ['Six', 'Seven', 'Eight', 'Nine'], 2, 'Eight = 8.'),
    Q('"Nine" là số?', ['7', '8', '9', '10'], 2, 'Nine = 9.'),
    Q('Số 10 tiếng Anh là?', ['Nine', 'Ten', 'Seven', 'Eight'], 1, 'Ten = 10.'),
    Q('Đếm: six, seven, ___, nine', ['five', 'eight', 'ten', 'four'], 1, '6 – 7 – 8 – 9 → eight.'),
  ]),

  M(7, 'How many? — Hỏi số lượng', [
    Q('"How many?" hỏi điều gì?', ['Bao nhiêu?', 'Ai?', 'Cái gì?', 'Ở đâu?'], 0, 'How many = bao nhiêu (đếm).'),
    Q('"How many books?" nghĩa là?', ['Sách màu gì?', 'Bao nhiêu quyển sách?', 'Sách ở đâu?', 'Sách của ai?'], 1, 'How many books = Bao nhiêu sách.'),
    Q('Có 3 quả bóng → "___ balls"', ['One', 'Two', 'Three', 'Four'], 2, '3 = three.'),
    Q('Trả lời số lượng "How many cats?" – có 2 con:', ['Two', 'One', 'Three', 'Five'], 0, '2 cats = two.'),
    Q('Có 5 cây bút chì → "Five ___"', ['pencil', 'pencils', 'a pencil', 'pen'], 1, 'Nhiều hơn 1 → thêm "s".'),
    Q('Một quả táo viết là?', ['An apple', 'A apple', 'Apples', 'An apples'], 0, 'Apple bắt đầu bằng nguyên âm → an.'),
  ]),

  M(8, 'Colors (1) — Đỏ, xanh, vàng', [
    Q('"Red" là màu gì?', ['Xanh dương', 'Đỏ', 'Vàng', 'Đen'], 1, 'Red = màu đỏ.'),
    Q('"Blue" là màu gì?', ['Xanh dương', 'Xanh lá', 'Vàng', 'Trắng'], 0, 'Blue = xanh dương.'),
    Q('"Yellow" là màu gì?', ['Đỏ', 'Vàng', 'Xanh', 'Tím'], 1, 'Yellow = màu vàng.'),
    Q('Mặt trời thường có màu?', ['Blue', 'Yellow', 'Black', 'Pink'], 1, 'Mặt trời = yellow.'),
    Q('Quả cà chua chín có màu?', ['Red', 'Blue', 'Yellow', 'Green'], 0, 'Cà chua chín = red.'),
    Q('Bầu trời ban ngày có màu?', ['Red', 'Yellow', 'Blue', 'Black'], 2, 'Bầu trời = blue.'),
  ]),

  M(9, 'Colors (2) — Xanh lá, đen, trắng, hồng', [
    Q('"Green" là màu gì?', ['Xanh lá', 'Xanh dương', 'Hồng', 'Tím'], 0, 'Green = xanh lá cây.'),
    Q('"Black" là màu gì?', ['Trắng', 'Đen', 'Xám', 'Nâu'], 1, 'Black = màu đen.'),
    Q('"White" là màu gì?', ['Đen', 'Trắng', 'Vàng', 'Xám'], 1, 'White = màu trắng.'),
    Q('"Pink" là màu gì?', ['Tím', 'Hồng', 'Đỏ', 'Cam'], 1, 'Pink = màu hồng.'),
    Q('Lá cây thường có màu?', ['Pink', 'Green', 'Black', 'Purple'], 1, 'Lá cây = green.'),
    Q('"What color is it?" hỏi gì?', ['Cái gì đây?', 'Nó màu gì?', 'Ở đâu?', 'Bao nhiêu?'], 1, 'What color = màu gì.'),
  ]),

  M(10, 'Family (1) — Mum / Dad', [
    Q('"Mum" (Mom) có nghĩa là?', ['Bố', 'Mẹ', 'Anh', 'Bà'], 1, 'Mum / Mom = mẹ.'),
    Q('"Dad" có nghĩa là?', ['Mẹ', 'Bố', 'Ông', 'Bà'], 1, 'Dad = bố / cha.'),
    Q('"Mother" có nghĩa là?', ['Mẹ', 'Bố', 'Cô', 'Bà'], 0, 'Mother = mẹ (trang trọng).'),
    Q('"Father" có nghĩa là?', ['Bố', 'Mẹ', 'Ông', 'Chú'], 0, 'Father = bố (trang trọng).'),
    Q('"This is my mum." nghĩa là?', ['Đây là bố tôi', 'Đây là mẹ tôi', 'Đây là cô tôi', 'Tôi yêu mẹ'], 1, 'This is my mum = Đây là mẹ tôi.'),
    Q('Cách gọi thân mật bố là?', ['Dad / Daddy', 'Mum', 'Sis', 'Bro'], 0, 'Dad / Daddy = bố (thân mật).'),
  ]),

  M(11, 'Family (2) — Brother / Sister / Baby', [
    Q('"Brother" có nghĩa là?', ['Chị/em gái', 'Anh/em trai', 'Bố', 'Ông'], 1, 'Brother = anh / em trai.'),
    Q('"Sister" có nghĩa là?', ['Anh/em trai', 'Chị/em gái', 'Mẹ', 'Bà'], 1, 'Sister = chị / em gái.'),
    Q('"Baby" có nghĩa là?', ['Em bé', 'Anh trai', 'Bà', 'Ông'], 0, 'Baby = em bé.'),
    Q('"Grandma" có nghĩa là?', ['Bà', 'Ông', 'Mẹ', 'Cô'], 0, 'Grandma = bà.'),
    Q('"Grandpa" có nghĩa là?', ['Bà', 'Ông', 'Bố', 'Chú'], 1, 'Grandpa = ông.'),
    Q('"My family" nghĩa là?', ['Bạn tôi', 'Gia đình tôi', 'Lớp tôi', 'Trường tôi'], 1, 'Family = gia đình.'),
  ]),

  M(12, 'Classroom things (1) — Book, pen, pencil', [
    Q('"Book" có nghĩa là?', ['Bút', 'Sách', 'Vở', 'Thước'], 1, 'Book = sách.'),
    Q('"Pen" có nghĩa là?', ['Bút mực / bút bi', 'Bút chì', 'Tẩy', 'Sách'], 0, 'Pen = bút mực / bút bi.'),
    Q('"Pencil" có nghĩa là?', ['Bút mực', 'Bút chì', 'Tẩy', 'Thước'], 1, 'Pencil = bút chì.'),
    Q('Em đọc bằng?', ['Pen', 'Pencil', 'Book', 'Bag'], 2, 'Em đọc sách = book.'),
    Q('"A red pen" nghĩa là?', ['Một cây bút đỏ', 'Một quyển sách đỏ', 'Một bút chì đỏ', 'Một cái cặp đỏ'], 0, 'A red pen = một cây bút đỏ.'),
    Q('"Two books" nghĩa là?', ['Một quyển sách', 'Hai quyển sách', 'Hai cây bút', 'Hai cục tẩy'], 1, 'Two books = hai quyển sách.'),
  ]),

  M(13, 'Classroom things (2) — Bag, chair, desk', [
    Q('"Bag" có nghĩa là?', ['Cái cặp', 'Cái ghế', 'Cái bàn', 'Cái bảng'], 0, 'Bag = cái cặp / túi.'),
    Q('"Chair" có nghĩa là?', ['Cái bàn', 'Cái ghế', 'Cái bảng', 'Cái tủ'], 1, 'Chair = cái ghế.'),
    Q('"Desk" có nghĩa là?', ['Cái ghế', 'Cái bàn (học)', 'Cái bảng', 'Cái cặp'], 1, 'Desk = cái bàn học.'),
    Q('Em ngồi trên?', ['Desk', 'Chair', 'Board', 'Book'], 1, 'Ngồi trên ghế = chair.'),
    Q('"Schoolbag" là gì?', ['Cái cặp', 'Quyển sách', 'Cái bàn', 'Cái bảng'], 0, 'Schoolbag = cặp đi học.'),
    Q('"Open your book." nghĩa là?', ['Đóng sách lại', 'Mở sách ra', 'Cất sách', 'Đọc to'], 1, 'Open = mở.'),
  ]),

  M(14, 'My body (1) — Head, eyes, nose, mouth', [
    Q('"Head" có nghĩa là?', ['Tay', 'Đầu', 'Chân', 'Miệng'], 1, 'Head = đầu.'),
    Q('"Eyes" có nghĩa là?', ['Tai', 'Mắt', 'Mũi', 'Miệng'], 1, 'Eyes = (đôi) mắt.'),
    Q('"Nose" có nghĩa là?', ['Tai', 'Mắt', 'Mũi', 'Miệng'], 2, 'Nose = mũi.'),
    Q('"Mouth" có nghĩa là?', ['Răng', 'Lưỡi', 'Miệng', 'Cằm'], 2, 'Mouth = miệng.'),
    Q('Em ngửi bằng?', ['Eyes', 'Nose', 'Mouth', 'Head'], 1, 'Ngửi bằng mũi = nose.'),
    Q('Em nhìn bằng?', ['Eyes', 'Nose', 'Mouth', 'Ears'], 0, 'Nhìn bằng mắt = eyes.'),
  ]),

  M(15, 'My body (2) — Hand, foot, ears', [
    Q('"Hand" có nghĩa là?', ['Chân', 'Bàn tay', 'Đầu', 'Tai'], 1, 'Hand = bàn tay.'),
    Q('"Foot" có nghĩa là?', ['Bàn chân', 'Bàn tay', 'Cánh tay', 'Đầu gối'], 0, 'Foot = bàn chân.'),
    Q('"Ears" có nghĩa là?', ['Mắt', 'Mũi', 'Tai', 'Miệng'], 2, 'Ears = (đôi) tai.'),
    Q('Em viết bằng?', ['Foot', 'Ear', 'Hand', 'Head'], 2, 'Viết bằng tay = hand.'),
    Q('Em nghe bằng?', ['Eyes', 'Ears', 'Nose', 'Mouth'], 1, 'Nghe bằng tai = ears.'),
    Q('Em đi bằng?', ['Hands', 'Feet', 'Eyes', 'Ears'], 1, 'Đi bằng chân = feet (số nhiều của foot).'),
  ]),

  M(16, 'Toys (1) — Ball, doll, car', [
    Q('"Ball" có nghĩa là?', ['Quả bóng', 'Búp bê', 'Ô tô', 'Diều'], 0, 'Ball = quả bóng.'),
    Q('"Doll" có nghĩa là?', ['Bóng', 'Búp bê', 'Xe', 'Tàu'], 1, 'Doll = búp bê.'),
    Q('"Car" (đồ chơi) có nghĩa là?', ['Búp bê', 'Ô tô', 'Tàu', 'Máy bay'], 1, 'Car = ô tô.'),
    Q('"Teddy bear" là?', ['Gấu bông', 'Búp bê', 'Diều', 'Bóng'], 0, 'Teddy bear = gấu bông.'),
    Q('"My toy" nghĩa là?', ['Đồ chơi của tôi', 'Bạn của tôi', 'Sách của tôi', 'Mèo của tôi'], 0, 'My toy = đồ chơi của tôi.'),
    Q('"I have a doll." nghĩa là?', ['Tôi thích búp bê', 'Tôi có một búp bê', 'Búp bê của tôi đẹp', 'Cho tôi búp bê'], 1, 'I have = Tôi có.'),
  ]),

  M(17, 'Toys (2) — Kite, plane, train', [
    Q('"Kite" có nghĩa là?', ['Cái diều', 'Cái bóng', 'Xe', 'Tàu'], 0, 'Kite = con diều.'),
    Q('"Plane" có nghĩa là?', ['Máy bay', 'Ô tô', 'Tàu', 'Thuyền'], 0, 'Plane = máy bay.'),
    Q('"Train" có nghĩa là?', ['Tàu hoả', 'Tàu thuỷ', 'Ô tô', 'Máy bay'], 0, 'Train = tàu hoả.'),
    Q('"Boat" có nghĩa là?', ['Thuyền', 'Tàu hoả', 'Xe', 'Máy bay'], 0, 'Boat = thuyền.'),
    Q('Đồ chơi bay được trên trời:', ['Car', 'Kite', 'Doll', 'Ball'], 1, 'Diều bay trên trời.'),
    Q('"Look! A red kite!" nghĩa là?', ['Nhìn kìa! Một cái diều đỏ!', 'Bóng đỏ', 'Xe đỏ', 'Mèo đỏ'], 0, 'Look = nhìn kìa.'),
  ]),

  M(18, 'Review HK1 — Ôn tập học kỳ 1', [
    Q('"Hello, my name is Bin." nghĩa là?', ['Xin chào, tôi tên Bin', 'Tạm biệt Bin', 'Bin đâu rồi', 'Bin khoẻ không'], 0, 'Hello + My name is = Xin chào, tôi tên là...'),
    Q('Số 7 tiếng Anh là?', ['Six', 'Seven', 'Eight', 'Nine'], 1, 'Seven = 7.'),
    Q('"Red" là màu?', ['Đỏ', 'Xanh', 'Vàng', 'Tím'], 0, 'Red = đỏ.'),
    Q('"Mum" có nghĩa là?', ['Bố', 'Mẹ', 'Anh', 'Bà'], 1, 'Mum = mẹ.'),
    Q('Em viết bằng?', ['Eye', 'Hand', 'Foot', 'Nose'], 1, 'Viết bằng tay = hand.'),
    Q('"This is my ball." nghĩa là?', ['Kia là bóng', 'Đây là quả bóng của tôi', 'Tôi chơi bóng', 'Bóng đâu'], 1, 'This is my ball = Đây là quả bóng của tôi.'),
    Q('"Goodbye!" nghĩa là?', ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], 1, 'Goodbye = tạm biệt.'),
    Q('Số 10 tiếng Anh là?', ['Nine', 'Ten', 'Twelve', 'Two'], 1, 'Ten = 10.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Animals (1) — Cat, dog, fish, bird', [
    Q('"Cat" có nghĩa là?', ['Con chó', 'Con mèo', 'Con cá', 'Con chim'], 1, 'Cat = con mèo.'),
    Q('"Dog" có nghĩa là?', ['Con chó', 'Con mèo', 'Con voi', 'Con cá'], 0, 'Dog = con chó.'),
    Q('"Fish" có nghĩa là?', ['Con chim', 'Con mèo', 'Con cá', 'Con cua'], 2, 'Fish = con cá.'),
    Q('"Bird" có nghĩa là?', ['Con chim', 'Con cá', 'Con bò', 'Con chó'], 0, 'Bird = con chim.'),
    Q('Con vật nào biết bay?', ['Fish', 'Bird', 'Cat', 'Dog'], 1, 'Bird (chim) biết bay.'),
    Q('"I have a cat." nghĩa là?', ['Tôi nuôi mèo', 'Tôi có một con mèo', 'Mèo đẹp', 'Tôi thích mèo'], 1, 'I have = Tôi có.'),
  ]),

  M(20, 'Animals (2) — Cow, pig, hen, duck', [
    Q('"Cow" có nghĩa là?', ['Con bò', 'Con heo', 'Con gà', 'Con vịt'], 0, 'Cow = con bò.'),
    Q('"Pig" có nghĩa là?', ['Con bò', 'Con heo', 'Con gà', 'Con vịt'], 1, 'Pig = con heo / lợn.'),
    Q('"Hen" có nghĩa là?', ['Con gà mái', 'Con vịt', 'Con bò', 'Con thỏ'], 0, 'Hen = con gà mái.'),
    Q('"Duck" có nghĩa là?', ['Con gà', 'Con ngỗng', 'Con vịt', 'Con heo'], 2, 'Duck = con vịt.'),
    Q('Con vật cho ta sữa?', ['Pig', 'Cow', 'Hen', 'Duck'], 1, 'Cow (bò) cho sữa.'),
    Q('Con vật đẻ trứng:', ['Cow', 'Pig', 'Hen', 'Dog'], 2, 'Hen (gà mái) đẻ trứng.'),
  ]),

  M(21, 'Big animals — Elephant, tiger, monkey', [
    Q('"Elephant" có nghĩa là?', ['Con voi', 'Con hươu', 'Con khỉ', 'Con ngựa'], 0, 'Elephant = con voi.'),
    Q('"Tiger" có nghĩa là?', ['Sư tử', 'Con hổ', 'Báo', 'Gấu'], 1, 'Tiger = con hổ.'),
    Q('"Monkey" có nghĩa là?', ['Con khỉ', 'Con gấu', 'Con voi', 'Con cọp'], 0, 'Monkey = con khỉ.'),
    Q('"Lion" có nghĩa là?', ['Sư tử', 'Hổ', 'Voi', 'Gấu'], 0, 'Lion = con sư tử.'),
    Q('Con vật to nhất trong các con:', ['Cat', 'Monkey', 'Elephant', 'Bird'], 2, 'Voi (elephant) to nhất.'),
    Q('"Look at the monkey!" nghĩa là?', ['Nhìn con khỉ kìa!', 'Cho tôi khỉ', 'Khỉ đâu', 'Khỉ của tôi'], 0, 'Look at = nhìn ... kìa.'),
  ]),

  M(22, 'Lunar New Year — Happy New Year!', [
    Q('"Happy New Year!" nghĩa là?', ['Chúc mừng sinh nhật', 'Chúc mừng năm mới', 'Tạm biệt', 'Chúc ngủ ngon'], 1, 'Happy New Year = Chúc mừng năm mới.'),
    Q('"Tet" trong tiếng Anh dùng để chỉ?', ['Lễ Giáng sinh', 'Tết Nguyên Đán', 'Trung Thu', 'Quốc khánh'], 1, 'Tet = Tết Nguyên Đán Việt Nam.'),
    Q('"Lucky money" là?', ['Tiền lì xì', 'Tiền tiêu vặt', 'Tiền học', 'Tiền tiết kiệm'], 0, 'Lucky money = tiền lì xì.'),
    Q('"Peach blossom" có nghĩa là?', ['Hoa mai', 'Hoa đào', 'Hoa hồng', 'Hoa cúc'], 1, 'Peach blossom = hoa đào (Tết miền Bắc).'),
    Q('"Apricot blossom" có nghĩa là?', ['Hoa đào', 'Hoa mai', 'Hoa lan', 'Hoa hồng'], 1, 'Apricot blossom = hoa mai (Tết miền Nam).'),
    Q('Em chúc ông bà: "Happy ___ Year!"', ['Old', 'New', 'Big', 'Long'], 1, 'Happy New Year.'),
  ]),

  M(23, 'Food (1) — Rice, fish, meat', [
    Q('"Rice" có nghĩa là?', ['Mì', 'Cơm / gạo', 'Bánh mì', 'Cá'], 1, 'Rice = cơm / gạo.'),
    Q('"Fish" (món ăn) có nghĩa là?', ['Thịt', 'Cá', 'Trứng', 'Cơm'], 1, 'Fish vừa là con cá, vừa là món cá.'),
    Q('"Meat" có nghĩa là?', ['Cá', 'Thịt', 'Trứng', 'Rau'], 1, 'Meat = thịt.'),
    Q('"Egg" có nghĩa là?', ['Trứng', 'Cá', 'Thịt', 'Rau'], 0, 'Egg = quả trứng.'),
    Q('"I eat rice." nghĩa là?', ['Tôi nấu cơm', 'Tôi ăn cơm', 'Tôi thích cơm', 'Cơm ngon'], 1, 'I eat rice = Tôi ăn cơm.'),
    Q('"Bread" có nghĩa là?', ['Cơm', 'Bánh mì', 'Mì', 'Cá'], 1, 'Bread = bánh mì.'),
  ]),

  M(24, 'Food (2) — Cake, candy, ice cream', [
    Q('"Cake" có nghĩa là?', ['Bánh ngọt / bánh kem', 'Cơm', 'Cá', 'Kẹo'], 0, 'Cake = bánh ngọt.'),
    Q('"Candy" có nghĩa là?', ['Bánh', 'Kẹo', 'Trứng', 'Cá'], 1, 'Candy = kẹo.'),
    Q('"Ice cream" có nghĩa là?', ['Kem (lạnh)', 'Sữa nóng', 'Bánh', 'Cơm'], 0, 'Ice cream = kem.'),
    Q('"Yummy!" nghĩa là?', ['Ngon quá!', 'Dở quá!', 'Đắng quá!', 'Cay quá!'], 0, 'Yummy = ngon (cách trẻ con khen).'),
    Q('"I like cake." nghĩa là?', ['Tôi thích bánh', 'Tôi không thích bánh', 'Tôi ăn bánh', 'Bánh to'], 0, 'I like = Tôi thích.'),
    Q('Đồ ăn KHÔNG nên ăn quá nhiều:', ['Rice', 'Vegetables', 'Candy', 'Fish'], 2, 'Ăn nhiều kẹo bị sâu răng.'),
  ]),

  M(25, 'Drinks — Water, milk, juice', [
    Q('"Water" có nghĩa là?', ['Nước', 'Sữa', 'Nước ép', 'Trà'], 0, 'Water = nước (lọc).'),
    Q('"Milk" có nghĩa là?', ['Nước', 'Sữa', 'Trà', 'Cà phê'], 1, 'Milk = sữa.'),
    Q('"Juice" có nghĩa là?', ['Nước ép trái cây', 'Sữa', 'Trà', 'Cà phê'], 0, 'Juice = nước ép.'),
    Q('"Orange juice" có nghĩa là?', ['Nước cam ép', 'Sữa cam', 'Trà cam', 'Cam quả'], 0, 'Orange juice = nước cam.'),
    Q('"I drink milk." nghĩa là?', ['Tôi uống sữa', 'Tôi ăn sữa', 'Sữa ngon', 'Tôi thích sữa'], 0, 'I drink = Tôi uống.'),
    Q('Khi khát em uống?', ['Cake', 'Water', 'Rice', 'Meat'], 1, 'Khát → uống nước (water).'),
  ]),

  M(26, 'Fruits — Apple, banana, orange', [
    Q('"Apple" có nghĩa là?', ['Quả táo', 'Quả chuối', 'Quả cam', 'Quả xoài'], 0, 'Apple = quả táo.'),
    Q('"Banana" có nghĩa là?', ['Quả táo', 'Quả chuối', 'Quả nho', 'Quả lê'], 1, 'Banana = quả chuối.'),
    Q('"Orange" có nghĩa là?', ['Quả cam', 'Quả quýt', 'Quả chanh', 'Quả bưởi'], 0, 'Orange = quả cam.'),
    Q('"Mango" có nghĩa là?', ['Quả xoài', 'Quả ổi', 'Quả mít', 'Quả đu đủ'], 0, 'Mango = quả xoài.'),
    Q('"I like apples." nghĩa là?', ['Tôi không thích táo', 'Tôi thích táo', 'Tôi ăn táo', 'Táo ngon'], 1, 'I like = Tôi thích.'),
    Q('Quả nào màu vàng dài cong:', ['Apple', 'Banana', 'Orange', 'Grape'], 1, 'Chuối (banana) màu vàng cong.'),
  ]),

  M(27, 'Weather — Sunny, rainy, hot, cold', [
    Q('"Sunny" có nghĩa là?', ['Có nắng', 'Có mưa', 'Có mây', 'Có gió'], 0, 'Sunny = có nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có nắng', 'Có mưa', 'Có mây', 'Có tuyết'], 1, 'Rainy = có mưa.'),
    Q('"Hot" có nghĩa là?', ['Lạnh', 'Nóng', 'Mát', 'Ấm'], 1, 'Hot = nóng.'),
    Q('"Cold" có nghĩa là?', ['Nóng', 'Lạnh', 'Mát', 'Ấm'], 1, 'Cold = lạnh.'),
    Q('Mùa hè ở Việt Nam thì?', ['Cold', 'Hot', 'Snowy', 'Cool'], 1, 'Mùa hè = hot.'),
    Q('"It is sunny today." nghĩa là?', ['Hôm nay mưa', 'Hôm nay nắng', 'Hôm nay lạnh', 'Hôm nay tuyết'], 1, 'It is sunny = trời nắng.'),
  ]),

  M(28, 'Can / Can\'t — Có thể / Không thể', [
    Q('"I can run." nghĩa là?', ['Tôi không chạy được', 'Tôi có thể chạy', 'Tôi đang chạy', 'Tôi thích chạy'], 1, 'I can = Tôi có thể.'),
    Q('"I can\'t swim." nghĩa là?', ['Tôi biết bơi', 'Tôi không thể bơi', 'Tôi thích bơi', 'Tôi đi bơi'], 1, "Can't = không thể."),
    Q('"Can you sing?" nghĩa là?', ['Bạn thích hát không?', 'Bạn có thể hát không?', 'Bạn hát gì?', 'Bạn hát đâu?'], 1, 'Can you...? = Bạn có thể... không?'),
    Q('Trả lời CÓ: "Can you jump?" – ___', ['Yes, I can', 'No, I can', 'Yes, I do', 'No, I do'], 0, 'Yes, I can = Vâng, tôi có thể.'),
    Q('"A bird can ___."', ['fly', 'swim', 'read', 'cook'], 0, 'Chim biết bay (fly).'),
    Q('"A fish can ___."', ['fly', 'swim', 'run', 'jump'], 1, 'Cá biết bơi (swim).'),
  ]),

  M(29, 'Action verbs — Run, jump, sing, dance', [
    Q('"Run" có nghĩa là?', ['Đi', 'Chạy', 'Nhảy', 'Bơi'], 1, 'Run = chạy.'),
    Q('"Jump" có nghĩa là?', ['Chạy', 'Nhảy', 'Bơi', 'Hát'], 1, 'Jump = nhảy.'),
    Q('"Sing" có nghĩa là?', ['Múa', 'Hát', 'Nói', 'Cười'], 1, 'Sing = hát.'),
    Q('"Dance" có nghĩa là?', ['Hát', 'Nhảy múa', 'Chạy', 'Bơi'], 1, 'Dance = nhảy múa.'),
    Q('"Swim" có nghĩa là?', ['Bơi', 'Chạy', 'Hát', 'Đọc'], 0, 'Swim = bơi.'),
    Q('"Let\'s sing!" nghĩa là?', ['Hãy hát nào!', 'Hãy chạy nào!', 'Hãy ngủ nào!', 'Tạm biệt'], 0, "Let's sing = chúng ta cùng hát nào."),
  ]),

  M(30, 'This / That — Đây / Kia', [
    Q('"This is my book." nghĩa là?', ['Kia là sách', 'Đây là sách của tôi', 'Tôi đọc sách', 'Sách đâu'], 1, 'This = đây (gần).'),
    Q('"That is a cat." nghĩa là?', ['Đây là con mèo', 'Kia là một con mèo', 'Mèo của tôi', 'Tôi có mèo'], 1, 'That = kia (xa).'),
    Q('Chỉ vật ở gần em dùng?', ['This', 'That', 'Those', 'These'], 0, 'Vật ở gần → this.'),
    Q('Chỉ vật ở xa em dùng?', ['This', 'That', 'These', 'There'], 1, 'Vật ở xa → that.'),
    Q('"This is a pen." nghĩa là?', ['Đây là cây bút', 'Kia là cây bút', 'Bút của tôi', 'Cho tôi bút'], 0, 'This is a pen = Đây là cây bút.'),
    Q('"What is this?" nghĩa là?', ['Cái gì đây?', 'Cái gì kia?', 'Ở đâu?', 'Ai đây?'], 0, 'What is this? = Cái này là gì?'),
  ]),

  M(31, 'Where? — In / On / Under', [
    Q('"Where is my book?" nghĩa là?', ['Sách tôi đâu rồi?', 'Sách tôi đẹp', 'Sách của ai?', 'Sách màu gì?'], 0, 'Where is...? = ... ở đâu?'),
    Q('"In" có nghĩa là?', ['Trên', 'Trong', 'Dưới', 'Cạnh'], 1, 'In = ở trong.'),
    Q('"On" có nghĩa là?', ['Trong', 'Dưới', 'Trên (bề mặt)', 'Cạnh'], 2, 'On = ở trên (bề mặt).'),
    Q('"Under" có nghĩa là?', ['Trên', 'Dưới', 'Trong', 'Trước'], 1, 'Under = ở dưới (gầm).'),
    Q('"The cat is under the chair." nghĩa là?', ['Mèo trên ghế', 'Mèo dưới ghế', 'Mèo trong ghế', 'Mèo cạnh ghế'], 1, 'Under the chair = dưới ghế.'),
    Q('"The book is on the desk." nghĩa là?', ['Sách trong bàn', 'Sách dưới bàn', 'Sách trên bàn', 'Sách cạnh bàn'], 2, 'On the desk = trên (mặt) bàn.'),
  ]),

  M(32, 'Clothes — Shirt, hat, shoes', [
    Q('"Shirt" có nghĩa là?', ['Áo sơ mi', 'Váy', 'Mũ', 'Giày'], 0, 'Shirt = áo sơ mi.'),
    Q('"Hat" có nghĩa là?', ['Áo', 'Quần', 'Mũ/nón', 'Giày'], 2, 'Hat = mũ/nón.'),
    Q('"Shoes" có nghĩa là?', ['Tất', 'Đôi giày', 'Áo', 'Mũ'], 1, 'Shoes = đôi giày.'),
    Q('"T-shirt" có nghĩa là?', ['Áo thun', 'Áo khoác', 'Quần', 'Váy'], 0, 'T-shirt = áo phông.'),
    Q('"I wear a hat." nghĩa là?', ['Tôi mua mũ', 'Tôi đội mũ', 'Tôi có mũ', 'Tôi thích mũ'], 1, 'Wear = mặc / đội.'),
    Q('"Put on your shoes." nghĩa là?', ['Bỏ giày ra', 'Mang giày vào', 'Mua giày', 'Cất giày'], 1, 'Put on = mang / mặc vào.'),
  ]),

  M(33, 'Days & playtime — Today, play, school', [
    Q('"Today" có nghĩa là?', ['Hôm qua', 'Hôm nay', 'Ngày mai', 'Đêm nay'], 1, 'Today = hôm nay.'),
    Q('"Play" có nghĩa là?', ['Học', 'Chơi', 'Ngủ', 'Ăn'], 1, 'Play = chơi.'),
    Q('"School" có nghĩa là?', ['Nhà', 'Trường học', 'Bệnh viện', 'Công viên'], 1, 'School = trường học.'),
    Q('"Let\'s play!" nghĩa là?', ['Hãy chơi nào', 'Hãy ngủ nào', 'Hãy ăn nào', 'Hãy đi'], 0, "Let's play = cùng chơi nào."),
    Q('"I go to school." nghĩa là?', ['Tôi đi học', 'Tôi đi chơi', 'Tôi đi ngủ', 'Tôi ở nhà'], 0, 'Go to school = đi học.'),
    Q('"Friend" có nghĩa là?', ['Bạn', 'Anh', 'Mẹ', 'Cô giáo'], 0, 'Friend = bạn bè.'),
  ]),

  M(34, 'Polite words — Please, thank you, sorry', [
    Q('"Please" có nghĩa là?', ['Cảm ơn', 'Làm ơn / vui lòng', 'Xin lỗi', 'Tạm biệt'], 1, 'Please = làm ơn / vui lòng.'),
    Q('"Thank you" có nghĩa là?', ['Xin lỗi', 'Cảm ơn', 'Tạm biệt', 'Xin chào'], 1, 'Thank you = Cảm ơn.'),
    Q('"Sorry" có nghĩa là?', ['Cảm ơn', 'Xin chào', 'Xin lỗi', 'Tạm biệt'], 2, 'Sorry = Xin lỗi.'),
    Q('Đáp "Thank you" lịch sự:', ["You're welcome", 'Hello', 'Bye', 'Sorry'], 0, "You're welcome = Không có chi."),
    Q('Khi nhờ bạn lấy giúp sách, em nói:', ['Give me book!', 'Please give me the book.', 'Book!', 'Sorry book.'], 1, 'Dùng Please cho lịch sự.'),
    Q('Lỡ làm rơi đồ của bạn, em nói:', ['Hello', 'Thank you', 'Sorry', 'Bye'], 2, 'Xin lỗi = sorry.'),
  ]),

  M(35, 'Review whole year — Ôn tập cuối năm', [
    Q('"Hello! What is your name?" Trả lời:', ['Goodbye', "I'm Lan.", 'Yes I do', 'Red'], 1, "I'm + tên = giới thiệu tên."),
    Q('Số 5 tiếng Anh là?', ['Four', 'Five', 'Six', 'Three'], 1, 'Five = 5.'),
    Q('"Mum and dad" là?', ['Bạn bè', 'Bố mẹ', 'Ông bà', 'Anh chị'], 1, 'Mum & dad = bố mẹ.'),
    Q('"Apple, banana, orange" là?', ['Đồ uống', 'Trái cây', 'Con vật', 'Đồ chơi'], 1, 'Đây là fruits (trái cây).'),
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi có thể bơi', 'Tôi thích bơi', 'Tôi đi bơi'], 1, 'I can = Tôi có thể.'),
    Q('"The cat is ___ the box." (mèo ở trong hộp)', ['on', 'in', 'under', 'at'], 1, 'In = ở trong.'),
    Q('"It is sunny and hot." nghĩa là?', ['Trời lạnh và mưa', 'Trời nắng và nóng', 'Trời mây gió', 'Trời ấm mát'], 1, 'Sunny = nắng; hot = nóng.'),
    Q('"Goodbye! See you!" nghĩa là?', ['Xin chào, gặp lại', 'Tạm biệt, hẹn gặp lại', 'Cảm ơn nhé', 'Xin lỗi nhé'], 1, 'Goodbye + See you = Tạm biệt, hẹn gặp lại.'),
  ], { difficulty: 2 }),
];

export const P1TA_SCENARIOS = indexBy(P1TA_WEEKS);
