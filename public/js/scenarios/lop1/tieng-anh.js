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
    Q('"Hello" có nghĩa là?', ['Xin lỗi', 'Xin chào', 'Tạm biệt', 'Cảm ơn'], 1, 'Hello = Xin chào.'),
    Q('"Hi" có nghĩa là?', ['Vâng ạ (Yes)', 'Cảm ơn', 'Tạm biệt', 'Xin chào (thân mật)'], 3, 'Hi = chào (cách nói thân mật).'),
    Q('Khi gặp bạn buổi sáng, em nói?', ['Sorry (Xin lỗi)', 'Good night (Chúc ngủ ngon)', 'Hi', 'Thank you (Cảm ơn)'], 2, 'Hi / Hello dùng để chào khi gặp nhau.'),
    Q('"Hello, Lan!" nghĩa là?', ['Xin chào Lan', 'Tạm biệt Lan', 'Lan đâu', 'Lan ơi'], 0, 'Hello + tên = Xin chào (ai đó).'),
    Q('Chọn từ chào hỏi:', ['Goodbye (Tạm biệt)', 'Sorry (Xin lỗi)', 'Hello', 'Thanks (Cảm ơn)'], 2, 'Hello là lời chào.'),
    Q('Khi cô giáo vào lớp, em nói:', ['Hello, teacher!', 'Goodbye, teacher!', 'Sorry, teacher!', 'No, teacher!'], 0, 'Chào cô khi gặp.'),
  ]),

  M(2, 'Goodbye / Bye — Tạm biệt', [
    Q('"Goodbye" có nghĩa là?', ['Xin lỗi', 'Xin chào', 'Cảm ơn', 'Tạm biệt'], 3, 'Goodbye = Tạm biệt.'),
    Q('"Bye" là cách nói ngắn của?', ['Hi (Xin chào thân mật)', 'Good night (Chúc ngủ ngon)', 'Goodbye', 'Thanks'], 2, 'Bye = cách rút gọn của Goodbye.'),
    Q('Khi tan học ra về, em nói với cô?', ['Goodbye', 'Good morning (Chào buổi sáng)', 'Hi (Xin chào)', 'Thank you (Cảm ơn)'], 0, 'Goodbye khi chia tay.'),
    Q('"Bye bye!" nghĩa là?', ['Không sao', 'Cảm ơn', 'Xin chào', 'Tạm biệt nhé'], 3, 'Bye bye = tạm biệt (thân mật).'),
    Q('"See you!" nghĩa là?', ['Cảm ơn', 'Xin chào', 'Xin lỗi', 'Hẹn gặp lại'], 3, 'See you = hẹn gặp lại.'),
    Q('Đáp lại "Goodbye!" em có thể nói:', ['Goodbye! (Tạm biệt!)', 'Sorry!', 'Bye!', 'Hello!'], 2, 'Tạm biệt đáp tạm biệt.'),
  ]),

  M(3, 'Good morning / Good night', [
    Q('"Good morning" nghĩa là?', ['Chào buổi sáng', 'Chào buổi tối', 'Chúc ngủ ngon', 'Tạm biệt'], 0, 'Good morning = Chào buổi sáng.'),
    Q('"Good night" nghĩa là?', ['Xin chào', 'Chúc ngủ ngon', 'Chào buổi chiều', 'Chào buổi sáng'], 1, 'Good night = chúc ngủ ngon.'),
    Q('"Good afternoon" nghĩa là?', ['Tạm biệt', 'Chào buổi chiều', 'Chào buổi sáng', 'Chúc ngon miệng'], 1, 'Good afternoon = chào buổi chiều.'),
    Q('Buổi tối trước khi ngủ em nói với mẹ:', ['Good morning (Chào buổi sáng)', 'Good night', 'Good morning', 'Good afternoon (Chào buổi chiều)'], 1, 'Trước khi ngủ chúc good night.'),
    Q('Sáng đến lớp em nói với cô:', ['Goodbye', 'Good morning', 'Good afternoon (Chào buổi chiều)', 'Good night'], 1, 'Buổi sáng chào good morning.'),
    Q('Buổi tối ăn cơm xong, em nói:', ['Hello morning', 'Night good', 'Good evening', 'Good morning'], 2, 'Good evening = chào buổi tối.'),
  ]),

  M(4, "What's your name? – I'm…", [
    Q('"What is your name?" hỏi điều gì?', ['Tên bạn là gì?', 'Bạn ở đâu?', 'Bạn khoẻ không?', 'Bạn mấy tuổi?'], 0, 'What is your name? = Tên bạn là gì?'),
    Q('Trả lời tên: "I ___ Nam."', ['is (là)', 'have (có)', 'am', 'are (là)'], 2, 'I am Nam = Tôi (tên) là Nam.'),
    Q('"My name is Lan." nghĩa là?', ['Tên tôi là Lan', 'Chào Lan', 'Lan ơi', 'Tôi là Lan'], 0, 'My name is = Tên tôi là.'),
    Q('Cách viết tắt của "I am" là?', ['I am\'', 'I\'m', 'I\'am', 'Im (không dấu)'], 1, "I am = I'm."),
    Q('Bạn tên Bin, em viết: "My name is ___"', ['Bin', 'bin (không viết hoa)', 'BIN (viết hoa hết)', 'is Bin'], 0, 'Tên riêng viết hoa chữ đầu.'),
    Q('"I\'m Lan." nghĩa là?', ['Bạn là Lan', 'Lan đâu', 'Lan ơi', 'Tôi là Lan'], 3, "I'm Lan = Tôi là Lan."),
  ]),

  M(5, 'Numbers 1-5 — Số đếm 1 đến 5', [
    Q('"One" là số?', ['1', '2', '4', '3'], 0, 'One = 1.'),
    Q('"Two" là số?', ['3', '1', '2', '5'], 2, 'Two = 2.'),
    Q('"Three" là số?', ['1', '4', '2', '3'], 3, 'Three = 3.'),
    Q('Số 4 tiếng Anh là?', ['Three (3)', 'Four', 'Five (5)', 'Forty (40)'], 1, 'Four = 4.'),
    Q('Số 5 tiếng Anh là?', ['Four (4)', 'Five', 'Fifteen (15)', 'Fifty (50)'], 1, 'Five = 5.'),
    Q('Sắp đúng thứ tự: one – ___ – three', ['second (thứ hai)', 'twelve (12)', 'two', 'too (cũng)'], 2, '1 – 2 – 3 = one – two – three.'),
  ]),

  M(6, 'Numbers 6-10 — Số đếm 6 đến 10', [
    Q('"Six" là số?', ['6', '7', '5', '8'], 0, 'Six = 6.'),
    Q('"Seven" là số?', ['8', '7', '9', '6'], 1, 'Seven = 7.'),
    Q('Số 8 tiếng Anh là?', ['Eight', 'Seven (7)', 'Eighteen (18)', 'Eighty (80)'], 0, 'Eight = 8.'),
    Q('"Nine" là số?', ['7', '10', '8', '9'], 3, 'Nine = 9.'),
    Q('Số 10 tiếng Anh là?', ['Tan (không phải số)', 'Twelve (12)', 'Tenth (thứ 10)', 'Ten'], 3, 'Ten = 10.'),
    Q('Đếm: six, seven, ___, nine', ['ate (đã ăn)', 'eighty (80)', 'eighteen (18)', 'eight'], 3, '6 – 7 – 8 – 9 → eight.'),
  ]),

  M(7, 'How many? — Hỏi số lượng', [
    Q('"How many?" hỏi điều gì?', ['Bao nhiêu?', 'Ở đâu?', 'Cái gì?', 'Khi nào? (When?)'], 0, 'How many = bao nhiêu (đếm).'),
    Q('"How many books?" nghĩa là?', ['Bao nhiêu quyển sách?', 'Sách của ai?', 'Sách ở đâu?', 'Sách màu gì?'], 0, 'How many books = Bao nhiêu sách.'),
    Q('Có 3 quả bóng → "___ balls"', ['Tree (Cây)', 'Third (Thứ ba)', 'Threes (sai số nhiều)', 'Three'], 3, '3 = three.'),
    Q('Trả lời số lượng "How many cats?" – có 2 con:', ['Two', 'Twos (sai số nhiều)', 'Too (cũng)', 'To (đến)'], 0, '2 cats = two.'),
    Q('Có 5 cây bút chì → "Five ___"', ['a pencil', 'pencil\'s (sở hữu)', 'pencil', 'pencils'], 3, 'Nhiều hơn 1 → thêm "s".'),
    Q('Một quả táo viết là?', ['An apple', 'An apples', 'A apple', 'Apples'], 0, 'Apple bắt đầu bằng nguyên âm → an.'),
  ]),

  M(8, 'Colors (1) — Đỏ, xanh, vàng', [
    Q('"Red" là màu gì?', ['Màu hồng', 'Đỏ', 'Xanh dương', 'Màu cam'], 1, 'Red = màu đỏ.'),
    Q('"Blue" là màu gì?', ['Xanh dương', 'Xanh lá', 'Màu đen', 'Màu tím'], 0, 'Blue = xanh dương.'),
    Q('"Yellow" là màu gì?', ['Vàng', 'Màu cam', 'Màu nâu', 'Màu xanh lá'], 0, 'Yellow = màu vàng.'),
    Q('Mặt trời thường có màu?', ['White (Trắng)', 'Green (Xanh lá)', 'Red (Đỏ)', 'Yellow'], 3, 'Mặt trời = yellow.'),
    Q('Quả cà chua chín có màu?', ['Orange (Cam)', 'Red', 'Yellow', 'Pink (Hồng)'], 1, 'Cà chua chín = red.'),
    Q('Bầu trời ban ngày có màu?', ['White (Trắng)', 'Yellow', 'Blue', 'Green (Xanh lá)'], 2, 'Bầu trời = blue.'),
  ]),

  M(9, 'Colors (2) — Xanh lá, đen, trắng, hồng', [
    Q('"Green" là màu gì?', ['Xanh dương', 'Màu cam', 'Xanh lá', 'Màu nâu'], 2, 'Green = xanh lá cây.'),
    Q('"Black" là màu gì?', ['Màu hồng', 'Màu tím', 'Đen', 'Màu cam'], 2, 'Black = màu đen.'),
    Q('"White" là màu gì?', ['Màu hồng', 'Trắng', 'Màu xám', 'Màu xanh lá'], 1, 'White = màu trắng.'),
    Q('"Pink" là màu gì?', ['Màu trắng', 'Màu vàng', 'Màu xanh lá', 'Hồng'], 3, 'Pink = màu hồng.'),
    Q('Lá cây thường có màu?', ['Purple', 'Yellow (Vàng)', 'Green', 'Brown (Nâu)'], 2, 'Lá cây = green.'),
    Q('"What color is it?" hỏi gì?', ['Nó màu gì?', 'Ở đâu?', 'Cái gì đây?', 'Bao nhiêu?'], 0, 'What color = màu gì.'),
  ]),

  M(10, 'Family (1) — Mum / Dad', [
    Q('"Mum" (Mom) có nghĩa là?', ['Bố (Dad)', 'Cô giáo (Teacher)', 'Mẹ', 'Em gái (Sister)'], 2, 'Mum / Mom = mẹ.'),
    Q('"Dad" có nghĩa là?', ['Em trai (Brother)', 'Anh trai (Brother)', 'Chú (Uncle)', 'Bố'], 3, 'Dad = bố / cha.'),
    Q('"Mother" có nghĩa là?', ['Bà (Grandma)', 'Chị gái (Sister)', 'Em gái (Sister)', 'Mẹ'], 3, 'Mother = mẹ (trang trọng).'),
    Q('"Father" có nghĩa là?', ['Ông (Grandpa)', 'Bố', 'Anh trai (Brother)', 'Em trai (Brother)'], 1, 'Father = bố (trang trọng).'),
    Q('"This is my mum." nghĩa là?', ['Đây là mẹ tôi', 'Tôi yêu mẹ', 'Đây là bố tôi', 'Đây là cô tôi'], 0, 'This is my mum = Đây là mẹ tôi.'),
    Q('Cách gọi thân mật bố là?', ['Dad / Daddy', 'Mum / Mummy', 'Grandpa', 'Brother'], 0, 'Dad / Daddy = bố (thân mật).'),
  ]),

  M(11, 'Family (2) — Brother / Sister / Baby', [
    Q('"Brother" có nghĩa là?', ['Em bé (Baby)', 'Anh/em trai', 'Chị/em gái', 'Bạn cùng lớp'], 1, 'Brother = anh / em trai.'),
    Q('"Sister" có nghĩa là?', ['Em trai (Brother)', 'Em bé (Baby)', 'Anh/em trai', 'Chị/em gái'], 3, 'Sister = chị / em gái.'),
    Q('"Baby" có nghĩa là?', ['Mẹ (Mother)', 'Anh trai', 'Em bé', 'Bạn (Friend)'], 2, 'Baby = em bé.'),
    Q('"Grandma" có nghĩa là?', ['Mẹ (Mother)', 'Chị gái (Sister)', 'Em gái (Sister)', 'Bà'], 3, 'Grandma = bà.'),
    Q('"Grandpa" có nghĩa là?', ['Ông', 'Bà (Grandma)', 'Anh trai (Brother)', 'Em trai (Brother)'], 0, 'Grandpa = ông.'),
    Q('"My family" nghĩa là?', ['Bạn tôi', 'Trường tôi', 'Lớp tôi', 'Gia đình tôi'], 3, 'Family = gia đình.'),
  ]),

  M(12, 'Classroom things (1) — Book, pen, pencil', [
    Q('"Book" có nghĩa là?', ['Sách', 'Vở viết', 'Bút mực', 'Cặp sách'], 0, 'Book = sách.'),
    Q('"Pen" có nghĩa là?', ['Quyển vở', 'Cái cặp', 'Bút chì', 'Bút mực / bút bi'], 3, 'Pen = bút mực / bút bi.'),
    Q('"Pencil" có nghĩa là?', ['Bút mực', 'Cái cặp', 'Quyển vở', 'Bút chì'], 3, 'Pencil = bút chì.'),
    Q('Em đọc bằng?', ['Book', 'Cặp sách', 'Pencil', 'Bút mực'], 0, 'Em đọc sách = book.'),
    Q('"A red pen" nghĩa là?', ['Một bút chì đỏ', 'Một cây bút đỏ', 'Một cái cặp đỏ', 'Một quyển sách đỏ'], 1, 'A red pen = một cây bút đỏ.'),
    Q('"Two books" nghĩa là?', ['Một quyển sách', 'Hai cục tẩy', 'Hai quyển sách', 'Hai cây bút'], 2, 'Two books = hai quyển sách.'),
  ]),

  M(13, 'Classroom things (2) — Bag, chair, desk', [
    Q('"Bag" có nghĩa là?', ['Cái ghế', 'Cái bảng', 'Cái cặp', 'Cái bàn'], 2, 'Bag = cái cặp / túi.'),
    Q('"Chair" có nghĩa là?', ['Cái bàn', 'Cái ghế', 'Cái bảng', 'Cái tủ'], 1, 'Chair = cái ghế.'),
    Q('"Desk" có nghĩa là?', ['Cái ghế', 'Cái bàn (học)', 'Cái bảng', 'Cái cặp'], 1, 'Desk = cái bàn học.'),
    Q('Em ngồi trên?', ['Book (Cặp)', 'Chair', 'Desk (Bàn học)', 'Board (Bảng)'], 1, 'Ngồi trên ghế = chair.'),
    Q('"Schoolbag" là gì?', ['Cái cặp', 'Cái bảng', 'Quyển sách', 'Cái bàn'], 0, 'Schoolbag = cặp đi học.'),
    Q('"Open your book." nghĩa là?', ['Đóng sách lại', 'Cất sách', 'Mở sách ra', 'Đọc to'], 2, 'Open = mở.'),
  ]),

  M(14, 'My body (1) — Head, eyes, nose, mouth', [
    Q('"Head" có nghĩa là?', ['Cái tai', 'Vai (Shoulder)', 'Đầu', 'Cổ (Neck)'], 2, 'Head = đầu.'),
    Q('"Eyes" có nghĩa là?', ['Lông mày', 'Lông mi', 'Trán (Forehead)', 'Mắt'], 3, 'Eyes = (đôi) mắt.'),
    Q('"Nose" có nghĩa là?', ['Cằm (Chin)', 'Má (Cheek)', 'Trán (Forehead)', 'Mũi'], 3, 'Nose = mũi.'),
    Q('"Mouth" có nghĩa là?', ['Miệng', 'Môi (Lips)', 'Má (Cheek)', 'Cằm (Chin)'], 0, 'Mouth = miệng.'),
    Q('Em ngửi bằng?', ['Mouth (Miệng)', 'Hand (Tay)', 'Nose', 'Ears (Tai)'], 2, 'Ngửi bằng mũi = nose.'),
    Q('Em nhìn bằng?', ['Mouth (Miệng)', 'Nose (Mũi)', 'Hands (Tay)', 'Eyes'], 3, 'Nhìn bằng mắt = eyes.'),
  ]),

  M(15, 'My body (2) — Hand, foot, ears', [
    Q('"Hand" có nghĩa là?', ['Ngón tay', 'Cánh tay', 'Bàn tay', 'Cổ tay'], 2, 'Hand = bàn tay.'),
    Q('"Foot" có nghĩa là?', ['Bàn tay', 'Đầu gối', 'Cánh tay', 'Bàn chân'], 3, 'Foot = bàn chân.'),
    Q('"Ears" có nghĩa là?', ['Cổ (Neck)', 'Má (Cheek)', 'Tai', 'Tóc (Hair)'], 2, 'Ears = (đôi) tai.'),
    Q('Em viết bằng?', ['Eyes (Mắt)', 'Mouth (Miệng)', 'Nose (Mũi)', 'Hand'], 3, 'Viết bằng tay = hand.'),
    Q('Em nghe bằng?', ['Hands (Tay)', 'Feet (Chân)', 'Head (Đầu)', 'Ears'], 3, 'Nghe bằng tai = ears.'),
    Q('Em đi bằng?', ['Ears (Tai)', 'Mouth (Miệng)', 'Nose (Mũi)', 'Feet'], 3, 'Đi bằng chân = feet (số nhiều của foot).'),
  ]),

  M(16, 'Toys (1) — Ball, doll, car', [
    Q('"Ball" có nghĩa là?', ['Búp bê', 'Quả bóng', 'Xe đạp', 'Máy bay'], 1, 'Ball = quả bóng.'),
    Q('"Doll" có nghĩa là?', ['Gấu bông', 'Diều (Kite)', 'Robot', 'Búp bê'], 3, 'Doll = búp bê.'),
    Q('"Car" (đồ chơi) có nghĩa là?', ['Xe đạp', 'Ô tô', 'Búp bê', 'Máy bay'], 1, 'Car = ô tô.'),
    Q('"Teddy bear" là?', ['Búp bê', 'Gấu bông', 'Quả bóng', 'Con rô-bốt'], 1, 'Teddy bear = gấu bông.'),
    Q('"My toy" nghĩa là?', ['Sách của tôi', 'Bạn của tôi', 'Đồ chơi của tôi', 'Mèo của tôi'], 2, 'My toy = đồ chơi của tôi.'),
    Q('"I have a doll." nghĩa là?', ['Búp bê của tôi đẹp', 'Cho tôi búp bê', 'Tôi có một búp bê', 'Tôi thích búp bê'], 2, 'I have = Tôi có.'),
  ]),

  M(17, 'Toys (2) — Kite, plane, train', [
    Q('"Kite" có nghĩa là?', ['Quả bóng', 'Cái diều', 'Búp bê', 'Cái bóng'], 1, 'Kite = con diều.'),
    Q('"Plane" có nghĩa là?', ['Thuyền', 'Máy bay', 'Tàu hoả', 'Thuyền (Boat)'], 1, 'Plane = máy bay.'),
    Q('"Train" có nghĩa là?', ['Máy bay', 'Tàu hoả', 'Xe đạp', 'Tàu thuỷ'], 1, 'Train = tàu hoả.'),
    Q('"Boat" có nghĩa là?', ['Cái diều', 'Máy bay', 'Tàu hoả', 'Thuyền'], 3, 'Boat = thuyền.'),
    Q('Đồ chơi bay được trên trời:', ['Doll (Búp bê)', 'Car (Ô tô)', 'Ball (Bóng)', 'Kite'], 3, 'Diều bay trên trời.'),
    Q('"Look! A red kite!" nghĩa là?', ['Một con diều bay', 'Bóng đỏ', 'Mèo đỏ', 'Nhìn kìa! Một cái diều đỏ!'], 3, 'Look = nhìn kìa.'),
  ]),

  M(18, 'Review HK1 — Ôn tập học kỳ 1', [
    Q('"Hello, my name is Bin." nghĩa là?', ['Tạm biệt Bin', 'Xin chào, tôi tên Bin', 'Bin đâu rồi', 'Bin khoẻ không'], 1, 'Hello + My name is = Xin chào, tôi tên là...'),
    Q('Số 7 tiếng Anh là?', ['Six (6)', 'Seven', 'Eleven (11)', 'Seventy (70)'], 1, 'Seven = 7.'),
    Q('"Red" là màu?', ['Đỏ', 'Màu xanh dương', 'Màu tím', 'Màu vàng'], 0, 'Red = đỏ.'),
    Q('"Mum" có nghĩa là?', ['Bố (Dad)', 'Anh trai (Brother)', 'Mẹ', 'Bà (Grandma)'], 2, 'Mum = mẹ.'),
    Q('Em viết bằng?', ['Nose (Mũi)', 'Foot (Bàn chân)', 'Hand', 'Eye (Mắt)'], 2, 'Viết bằng tay = hand.'),
    Q('"This is my ball." nghĩa là?', ['Kia là bóng', 'Bóng đâu', 'Tôi chơi bóng', 'Đây là quả bóng của tôi'], 3, 'This is my ball = Đây là quả bóng của tôi.'),
    Q('"Goodbye!" nghĩa là?', ['Cảm ơn', 'Tạm biệt', 'Xin lỗi', 'Xin chào'], 1, 'Goodbye = tạm biệt.'),
    Q('Số 10 tiếng Anh là?', ['Ten', 'Eleven (11)', 'Twelve', 'Twenty (20)'], 0, 'Ten = 10.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Animals (1) — Cat, dog, fish, bird', [
    Q('"Cat" có nghĩa là?', ['Con chim', 'Con chó', 'Con cá', 'Con mèo'], 3, 'Cat = con mèo.'),
    Q('"Dog" có nghĩa là?', ['Con mèo', 'Con chó', 'Con cá', 'Con voi'], 1, 'Dog = con chó.'),
    Q('"Fish" có nghĩa là?', ['Con mèo', 'Con cua', 'Con cá', 'Con chim'], 2, 'Fish = con cá.'),
    Q('"Bird" có nghĩa là?', ['Con chim', 'Con cá', 'Con chó', 'Con bò'], 0, 'Bird = con chim.'),
    Q('Con vật nào biết bay?', ['Cat (Mèo)', 'Fish (Cá)', 'Dog (Chó)', 'Bird'], 3, 'Bird (chim) biết bay.'),
    Q('"I have a cat." nghĩa là?', ['Tôi thích mèo', 'Mèo đẹp', 'Tôi có một con mèo', 'Tôi nuôi mèo'], 2, 'I have = Tôi có.'),
  ]),

  M(20, 'Animals (2) — Cow, pig, hen, duck', [
    Q('"Cow" có nghĩa là?', ['Con vịt', 'Con bò', 'Con heo', 'Con gà'], 1, 'Cow = con bò.'),
    Q('"Pig" có nghĩa là?', ['Con vịt', 'Con gà', 'Con heo', 'Con bò'], 2, 'Pig = con heo / lợn.'),
    Q('"Hen" có nghĩa là?', ['Con bò', 'Con gà mái', 'Con vịt', 'Con thỏ'], 1, 'Hen = con gà mái.'),
    Q('"Duck" có nghĩa là?', ['Con ngỗng', 'Con gà', 'Con vịt', 'Con heo'], 2, 'Duck = con vịt.'),
    Q('Con vật cho ta sữa?', ['Duck (Vịt)', 'Hen (Gà mái)', 'Cow', 'Pig (Lợn)'], 2, 'Cow (bò) cho sữa.'),
    Q('Con vật đẻ trứng:', ['Hen', 'Cow (Bò)', 'Dog (Chó)', 'Pig (Lợn)'], 0, 'Hen (gà mái) đẻ trứng.'),
  ]),

  M(21, 'Big animals — Elephant, tiger, monkey', [
    Q('"Elephant" có nghĩa là?', ['Con khỉ', 'Con voi', 'Con ngựa', 'Con hươu'], 1, 'Elephant = con voi.'),
    Q('"Tiger" có nghĩa là?', ['Con hổ', 'Con sư tử', 'Con báo', 'Con gấu'], 0, 'Tiger = con hổ.'),
    Q('"Monkey" có nghĩa là?', ['Con khỉ', 'Con voi', 'Con gấu', 'Con cọp'], 0, 'Monkey = con khỉ.'),
    Q('"Lion" có nghĩa là?', ['Con gấu', 'Sư tử', 'Con hổ', 'Con voi'], 1, 'Lion = con sư tử.'),
    Q('Con vật to nhất trong các con:', ['Cat (Mèo)', 'Bird (Chim)', 'Elephant', 'Monkey'], 2, 'Voi (elephant) to nhất.'),
    Q('"Look at the monkey!" nghĩa là?', ['Cho tôi khỉ', 'Nhìn con khỉ kìa!', 'Khỉ đâu', 'Khỉ của tôi'], 1, 'Look at = nhìn ... kìa.'),
  ]),

  M(22, 'Lunar New Year — Happy New Year!', [
    Q('"Happy New Year!" nghĩa là?', ['Chúc mừng sinh nhật', 'Chúc ngủ ngon', 'Tạm biệt', 'Chúc mừng năm mới'], 3, 'Happy New Year = Chúc mừng năm mới.'),
    Q('"Tet" trong tiếng Anh dùng để chỉ?', ['Quốc khánh', 'Lễ Giáng sinh', 'Tết Nguyên Đán', 'Trung Thu'], 2, 'Tet = Tết Nguyên Đán Việt Nam.'),
    Q('"Lucky money" là?', ['Tiền lì xì', 'Tiền học', 'Tiền tiết kiệm', 'Tiền tiêu vặt'], 0, 'Lucky money = tiền lì xì.'),
    Q('"Peach blossom" có nghĩa là?', ['Hoa cúc', 'Hoa mai', 'Hoa đào', 'Hoa hồng'], 2, 'Peach blossom = hoa đào (Tết miền Bắc).'),
    Q('"Apricot blossom" có nghĩa là?', ['Hoa hồng', 'Hoa đào', 'Hoa lan', 'Hoa mai'], 3, 'Apricot blossom = hoa mai (Tết miền Nam).'),
    Q('Em chúc ông bà: "Happy ___ Year!"', ['Long (Dài)', 'Big (Lớn)', 'Old (Cũ)', 'New'], 3, 'Happy New Year.'),
  ]),

  M(23, 'Food (1) — Rice, fish, meat', [
    Q('"Rice" có nghĩa là?', ['Cơm / gạo', 'Con cá', 'Bánh mì', 'Sợi mì'], 0, 'Rice = cơm / gạo.'),
    Q('"Fish" (món ăn) có nghĩa là?', ['Thịt heo', 'Cá', 'Quả trứng', 'Cơm trắng'], 1, 'Fish vừa là con cá, vừa là món cá.'),
    Q('"Meat" có nghĩa là?', ['Thịt', 'Quả trứng', 'Con cá', 'Rau xanh'], 0, 'Meat = thịt.'),
    Q('"Egg" có nghĩa là?', ['Miếng thịt', 'Rau xanh', 'Trứng', 'Con cá'], 2, 'Egg = quả trứng.'),
    Q('"I eat rice." nghĩa là?', ['Cơm ngon', 'Tôi nấu cơm', 'Tôi thích cơm', 'Tôi ăn cơm'], 3, 'I eat rice = Tôi ăn cơm.'),
    Q('"Bread" có nghĩa là?', ['Sợi mì', 'Con cá', 'Bánh mì', 'Cơm trắng'], 2, 'Bread = bánh mì.'),
  ]),

  M(24, 'Food (2) — Cake, candy, ice cream', [
    Q('"Cake" có nghĩa là?', ['Bánh ngọt / bánh kem', 'Cơm trắng', 'Viên kẹo', 'Con cá'], 0, 'Cake = bánh ngọt.'),
    Q('"Candy" có nghĩa là?', ['Quả trứng', 'Bánh ngọt', 'Con cá', 'Kẹo'], 3, 'Candy = kẹo.'),
    Q('"Ice cream" có nghĩa là?', ['Sữa nóng', 'Bánh ngọt', 'Kem (lạnh)', 'Cơm trắng'], 2, 'Ice cream = kem.'),
    Q('"Yummy!" nghĩa là?', ['Đắng quá!', 'Dở quá!', 'Cay quá!', 'Ngon quá!'], 3, 'Yummy = ngon (cách trẻ con khen).'),
    Q('"I like cake." nghĩa là?', ['Tôi thích bánh', 'Tôi ăn bánh', 'Tôi không thích bánh', 'Bánh to'], 0, 'I like = Tôi thích.'),
    Q('Đồ ăn KHÔNG nên ăn quá nhiều:', ['Fish (Cá)', 'Vegetables', 'Candy', 'Rice (Cơm)'], 2, 'Ăn nhiều kẹo bị sâu răng.'),
  ]),

  M(25, 'Drinks — Water, milk, juice', [
    Q('"Water" có nghĩa là?', ['Nước trà', 'Nước ép', 'Sữa tươi', 'Nước'], 3, 'Water = nước (lọc).'),
    Q('"Milk" có nghĩa là?', ['Cà phê', 'Nước trà', 'Sữa', 'Nước lọc'], 2, 'Milk = sữa.'),
    Q('"Juice" có nghĩa là?', ['Nước ép trái cây', 'Sữa tươi', 'Cà phê', 'Nước trà'], 0, 'Juice = nước ép.'),
    Q('"Orange juice" có nghĩa là?', ['Nước cam ép', 'Trà cam', 'Cam quả', 'Sữa cam'], 0, 'Orange juice = nước cam.'),
    Q('"I drink milk." nghĩa là?', ['Tôi thích sữa', 'Tôi uống sữa', 'Sữa ngon', 'Tôi ăn sữa'], 1, 'I drink = Tôi uống.'),
    Q('Khi khát em uống?', ['Rice (Cơm)', 'Cake (Bánh)', 'Water', 'Meat (Thịt)'], 2, 'Khát → uống nước (water).'),
  ]),

  M(26, 'Fruits — Apple, banana, orange', [
    Q('"Apple" có nghĩa là?', ['Quả xoài', 'Quả táo', 'Quả cam', 'Quả chuối'], 1, 'Apple = quả táo.'),
    Q('"Banana" có nghĩa là?', ['Quả chuối', 'Quả nho', 'Quả táo', 'Quả lê'], 0, 'Banana = quả chuối.'),
    Q('"Orange" có nghĩa là?', ['Quả chanh', 'Quả cam', 'Quả bưởi', 'Quả quýt'], 1, 'Orange = quả cam.'),
    Q('"Mango" có nghĩa là?', ['Quả đu đủ', 'Quả mít', 'Quả xoài', 'Quả ổi'], 2, 'Mango = quả xoài.'),
    Q('"I like apples." nghĩa là?', ['Tôi thích táo', 'Tôi ăn táo', 'Táo ngon', 'Tôi không thích táo'], 0, 'I like = Tôi thích.'),
    Q('Quả nào màu vàng dài cong:', ['Apple (Táo)', 'Banana', 'Grape (Nho)', 'Orange'], 1, 'Chuối (banana) màu vàng cong.'),
  ]),

  M(27, 'Weather — Sunny, rainy, hot, cold', [
    Q('"Sunny" có nghĩa là?', ['Có nắng', 'Có gió', 'Có mây', 'Có mưa'], 0, 'Sunny = có nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có mây', 'Có tuyết', 'Có mưa', 'Có nắng'], 2, 'Rainy = có mưa.'),
    Q('"Hot" có nghĩa là?', ['Ấm áp', 'Mát mẻ', 'Nóng', 'Lạnh giá'], 2, 'Hot = nóng.'),
    Q('"Cold" có nghĩa là?', ['Ấm áp', 'Nóng bức', 'Mát mẻ', 'Lạnh'], 3, 'Cold = lạnh.'),
    Q('Mùa hè ở Việt Nam thì?', ['Hot', 'Cool (Mát)', 'Cold (Lạnh)', 'Snowy (Có tuyết)'], 0, 'Mùa hè = hot.'),
    Q('"It is sunny today." nghĩa là?', ['Hôm nay nắng', 'Hôm nay mưa', 'Hôm nay lạnh', 'Hôm nay tuyết'], 0, 'It is sunny = trời nắng.'),
  ]),

  M(28, 'Can / Can\'t — Có thể / Không thể', [
    Q('"I can run." nghĩa là?', ['Tôi đang chạy', 'Tôi không chạy được', 'Tôi có thể chạy', 'Tôi thích chạy'], 2, 'I can = Tôi có thể.'),
    Q('"I can\'t swim." nghĩa là?', ['Tôi không thể bơi', 'Tôi thích bơi', 'Tôi biết bơi', 'Tôi đi bơi'], 0, "Can't = không thể."),
    Q('"Can you sing?" nghĩa là?', ['Bạn có thể hát không?', 'Bạn thích hát không?', 'Bạn hát đâu?', 'Bạn hát gì?'], 0, 'Can you...? = Bạn có thể... không?'),
    Q('Trả lời CÓ: "Can you jump?" – ___', ['No, I can', 'Yes, I can', 'No, I do', 'Yes, I do'], 1, 'Yes, I can = Vâng, tôi có thể.'),
    Q('"A bird can ___."', ['fly', 'read (đọc)', 'cook (nấu ăn)', 'swim (bơi)'], 0, 'Chim biết bay (fly).'),
    Q('"A fish can ___."', ['fly (bay)', 'jump (nhảy)', 'swim', 'run (chạy)'], 2, 'Cá biết bơi (swim).'),
  ]),

  M(29, 'Action verbs — Run, jump, sing, dance', [
    Q('"Run" có nghĩa là?', ['Chạy', 'Bơi lội', 'Đi bộ', 'Nhảy lên'], 0, 'Run = chạy.'),
    Q('"Jump" có nghĩa là?', ['Chạy nhanh', 'Hát hay', 'Bơi lội', 'Nhảy'], 3, 'Jump = nhảy.'),
    Q('"Sing" có nghĩa là?', ['Nói chuyện', 'Cười tươi', 'Nhảy múa', 'Hát'], 3, 'Sing = hát.'),
    Q('"Dance" có nghĩa là?', ['Chạy nhanh', 'Bơi lội', 'Hát hay', 'Nhảy múa'], 3, 'Dance = nhảy múa.'),
    Q('"Swim" có nghĩa là?', ['Chạy nhanh', 'Hát hay', 'Bơi', 'Đọc sách'], 2, 'Swim = bơi.'),
    Q('"Let\'s sing!" nghĩa là?', ['Hãy chạy nào!', 'Tạm biệt', 'Hãy hát nào!', 'Hãy ngủ nào!'], 2, "Let's sing = chúng ta cùng hát nào."),
  ]),

  M(30, 'This / That — Đây / Kia', [
    Q('"This is my book." nghĩa là?', ['Đây là sách của tôi', 'Kia là sách', 'Tôi đọc sách', 'Sách đâu'], 0, 'This = đây (gần).'),
    Q('"That is a cat." nghĩa là?', ['Kia là một con mèo', 'Mèo của tôi', 'Đây là con mèo', 'Tôi có mèo'], 0, 'That = kia (xa).'),
    Q('Chỉ vật ở gần em dùng?', ['That (Kia)', 'Those (Những cái kia)', 'These (Những cái này)', 'This'], 3, 'Vật ở gần → this.'),
    Q('Chỉ vật ở xa em dùng?', ['This (Này)', 'That', 'There (Ở đó)', 'These (Những cái này)'], 1, 'Vật ở xa → that.'),
    Q('"This is a pen." nghĩa là?', ['Bút của tôi', 'Cho tôi bút', 'Đây là cây bút', 'Kia là cây bút'], 2, 'This is a pen = Đây là cây bút.'),
    Q('"What is this?" nghĩa là?', ['Ở đâu?', 'Ai đây?', 'Cái gì đây?', 'Cái gì kia?'], 2, 'What is this? = Cái này là gì?'),
  ]),

  M(31, 'Where? — In / On / Under', [
    Q('"Where is my book?" nghĩa là?', ['Sách của ai?', 'Sách màu gì?', 'Sách tôi đâu rồi?', 'Sách tôi đẹp'], 2, 'Where is...? = ... ở đâu?'),
    Q('"In" có nghĩa là?', ['Ở trên', 'Ở dưới', 'Trong', 'Cạnh / kế bên'], 2, 'In = ở trong.'),
    Q('"On" có nghĩa là?', ['Ở trong', 'Trên (bề mặt)', 'Ở dưới', 'Cạnh / kế bên'], 1, 'On = ở trên (bề mặt).'),
    Q('"Under" có nghĩa là?', ['Ở trong', 'Phía trước', 'Ở trên', 'Dưới'], 3, 'Under = ở dưới (gầm).'),
    Q('"The cat is under the chair." nghĩa là?', ['Mèo cạnh ghế', 'Mèo trên ghế', 'Mèo trong ghế', 'Mèo dưới ghế'], 3, 'Under the chair = dưới ghế.'),
    Q('"The book is on the desk." nghĩa là?', ['Sách dưới bàn', 'Sách cạnh bàn', 'Sách trong bàn', 'Sách trên bàn'], 3, 'On the desk = trên (mặt) bàn.'),
  ]),

  M(32, 'Clothes — Shirt, hat, shoes', [
    Q('"Shirt" có nghĩa là?', ['Đôi giày', 'Cái váy', 'Áo sơ mi', 'Cái mũ'], 2, 'Shirt = áo sơ mi.'),
    Q('"Hat" có nghĩa là?', ['Mũ/nón', 'Áo sơ mi', 'Cái quần', 'Đôi giày'], 0, 'Hat = mũ/nón.'),
    Q('"Shoes" có nghĩa là?', ['Đôi tất', 'Đôi giày', 'Áo sơ mi', 'Cái mũ'], 1, 'Shoes = đôi giày.'),
    Q('"T-shirt" có nghĩa là?', ['Cái váy', 'Áo thun', 'Áo khoác', 'Cái quần'], 1, 'T-shirt = áo phông.'),
    Q('"I wear a hat." nghĩa là?', ['Tôi mua mũ', 'Tôi đội mũ', 'Tôi thích mũ', 'Tôi có mũ'], 1, 'Wear = mặc / đội.'),
    Q('"Put on your shoes." nghĩa là?', ['Cất giày', 'Mua giày', 'Mang giày vào', 'Bỏ giày ra'], 2, 'Put on = mang / mặc vào.'),
  ]),

  M(33, 'Days & playtime — Today, play, school', [
    Q('"Today" có nghĩa là?', ['Hôm qua', 'Hôm nay', 'Đêm nay', 'Ngày mai'], 1, 'Today = hôm nay.'),
    Q('"Play" có nghĩa là?', ['Chơi', 'Học bài', 'Ngủ trưa', 'Ăn cơm'], 0, 'Play = chơi.'),
    Q('"School" có nghĩa là?', ['Bệnh viện', 'Ngôi nhà', 'Công viên', 'Trường học'], 3, 'School = trường học.'),
    Q('"Let\'s play!" nghĩa là?', ['Hãy ăn nào', 'Hãy ngủ nào', 'Hãy chơi nào', 'Hãy đi'], 2, "Let's play = cùng chơi nào."),
    Q('"I go to school." nghĩa là?', ['Tôi đi ngủ', 'Tôi đi chơi', 'Tôi đi học', 'Tôi ở nhà'], 2, 'Go to school = đi học.'),
    Q('"Friend" có nghĩa là?', ['Anh trai (Brother)', 'Bạn', 'Cô giáo', 'Mẹ (Mother)'], 1, 'Friend = bạn bè.'),
  ]),

  M(34, 'Polite words — Please, thank you, sorry', [
    Q('"Please" có nghĩa là?', ['Tạm biệt', 'Cảm ơn', 'Xin lỗi', 'Làm ơn / vui lòng'], 3, 'Please = làm ơn / vui lòng.'),
    Q('"Thank you" có nghĩa là?', ['Tạm biệt', 'Xin chào', 'Cảm ơn', 'Xin lỗi'], 2, 'Thank you = Cảm ơn.'),
    Q('"Sorry" có nghĩa là?', ['Tạm biệt', 'Xin chào', 'Xin lỗi', 'Cảm ơn'], 2, 'Sorry = Xin lỗi.'),
    Q('Đáp "Thank you" lịch sự:', ['Sorry (Xin lỗi)', 'You\'re welcome', 'Hello (Xin chào)', 'Goodbye (Tạm biệt)'], 1, "You're welcome = Không có chi."),
    Q('Khi nhờ bạn lấy giúp sách, em nói:', ['Sorry book.', 'Give me book!', 'Book please!', 'Please give me the book.'], 3, 'Dùng Please cho lịch sự.'),
    Q('Lỡ làm rơi đồ của bạn, em nói:', ['Goodbye (Tạm biệt)', 'Hello (Xin chào)', 'Thank you', 'Sorry'], 3, 'Xin lỗi = sorry.'),
  ]),

  M(35, 'Review whole year — Ôn tập cuối năm', [
    Q('"Hello! What is your name?" Trả lời:', ['My name red.', 'Yes I do', 'Goodbye', 'I\'m Lan.'], 3, "I'm + tên = giới thiệu tên."),
    Q('Số 5 tiếng Anh là?', ['Four (4)', 'Three (3)', 'Five', 'Six (6)'], 2, 'Five = 5.'),
    Q('"Mum and dad" là?', ['Anh chị', 'Bạn bè', 'Bố mẹ', 'Ông bà'], 2, 'Mum & dad = bố mẹ.'),
    Q('"Apple, banana, orange" là?', ['Trái cây', 'Con vật', 'Đồ uống', 'Đồ chơi'], 0, 'Đây là fruits (trái cây).'),
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi đi bơi', 'Tôi thích bơi', 'Tôi có thể bơi'], 3, 'I can = Tôi có thể.'),
    Q('"The cat is ___ the box." (mèo ở trong hộp)', ['at (tại)', 'on (trên)', 'in', 'under (dưới)'], 2, 'In = ở trong.'),
    Q('"It is sunny and hot." nghĩa là?', ['Trời ấm mát', 'Trời lạnh và mưa', 'Trời nắng và nóng', 'Trời mây gió'], 2, 'Sunny = nắng; hot = nóng.'),
    Q('"Goodbye! See you!" nghĩa là?', ['Cảm ơn nhé', 'Xin chào, gặp lại', 'Tạm biệt, hẹn gặp lại', 'Xin lỗi nhé'], 2, 'Goodbye + See you = Tạm biệt, hẹn gặp lại.'),
  ], { difficulty: 2 }),
];

export const P1TA_SCENARIOS = indexBy(P1TA_WEEKS);
