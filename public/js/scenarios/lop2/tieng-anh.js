// ============================================================
// Lớp 2 · TIẾNG ANH — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám SGK GDPT 2018 (tự chọn lớp 1-2, bắt buộc từ lớp 3).
// ID prefix: "P2TA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2TA', 'tieng-anh', n, title, qs, opts);

export const P2TA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Greetings: Hello / Hi / Bye', [
    Q('"Hello" có nghĩa là?', ['Tạm biệt', 'Xin chào', 'Cảm ơn', 'Xin lỗi'], 1, 'Hello = Xin chào.'),
    Q('"Goodbye" có nghĩa là?', ['Xin chào', 'Tạm biệt', 'Bạn khoẻ không', 'Cảm ơn'], 1, 'Goodbye = Tạm biệt.'),
    Q('Khi gặp bạn buổi sáng, em nói?', ['Bye', 'Hi', 'No', 'Sorry'], 1, 'Hi / Hello dùng để chào khi gặp nhau.'),
    Q('"Bye" là cách nói ngắn của?', ['Hello', 'Hi', 'Goodbye', 'Thanks'], 2, 'Bye = cách rút gọn của Goodbye.'),
    Q('Chọn câu chào lịch sự buổi sáng:', ['Good night', 'Good morning', 'Goodbye', 'Bye bye'], 1, 'Good morning = Chào buổi sáng.'),
    Q('Cuối ngày trước khi ngủ em nói?', ['Good night', 'Good morning', 'Hello', 'Hi'], 0, 'Good night = Chúc ngủ ngon.'),
  ]),

  M(2, "What's your name? – My name is...", [
    Q('"What is your name?" hỏi điều gì?', ['Bạn bao nhiêu tuổi?', 'Tên bạn là gì?', 'Bạn khoẻ không?', 'Bạn ở đâu?'], 1, 'What is your name? = Tên bạn là gì?'),
    Q('Trả lời "What\'s your name?": "My name ___ Lan."', ['am', 'is', 'are', 'be'], 1, 'Ngôi thứ ba số ít dùng "is": My name IS Lan.'),
    Q('"My name is Nam." nghĩa là?', ['Tôi là Nam', 'Tên tôi là Nam', 'Nam khoẻ', 'Chào Nam'], 1, 'My name is Nam = Tên tôi là Nam.'),
    Q('Bạn tên Mai, em viết: "My name is ___"', ['Mai', 'mai', 'is Mai', 'name'], 0, 'Tên riêng viết hoa chữ đầu: Mai.'),
    Q('"I am Linh." có nghĩa là?', ['Tôi tên Linh', 'Bạn là Linh', 'Linh khoẻ', 'Linh ơi'], 0, 'I am Linh = Tôi (tên) là Linh.'),
    Q('Cách viết tắt của "I am" là?', ["I's", "I'm", "Im'", 'I am not'], 1, "I am = I'm."),
  ]),

  M(3, "How are you? – I'm fine, thank you", [
    Q('"How are you?" có nghĩa là?', ['Bạn tên gì?', 'Bạn khoẻ không?', 'Bạn ở đâu?', 'Bạn mấy tuổi?'], 1, 'How are you? = Bạn (có) khoẻ không?'),
    Q('Trả lời lịch sự cho "How are you?"', ['Hello', "I'm fine, thank you", 'Goodbye', 'My name'], 1, "I'm fine, thank you = Tôi khoẻ, cảm ơn."),
    Q('"Thank you" nghĩa là?', ['Xin lỗi', 'Cảm ơn', 'Tạm biệt', 'Xin chào'], 1, 'Thank you = Cảm ơn.'),
    Q('Đáp lại "Thank you" em nói?', ["You're welcome", 'Hello', 'Bye', 'Sorry'], 0, "You're welcome = Không có chi."),
    Q('"Sorry" có nghĩa là?', ['Cảm ơn', 'Xin chào', 'Xin lỗi', 'Tạm biệt'], 2, 'Sorry = Xin lỗi.'),
    Q('"And you?" nghĩa là?', ['Còn bạn thì sao?', 'Bạn đi đâu?', 'Bạn tên gì?', 'Bạn ở đâu?'], 0, 'And you? = Còn bạn (thì sao)?'),
  ]),

  M(4, 'Numbers 1-5', [
    Q('"One" là số?', ['1', '2', '3', '4'], 0, 'One = 1.'),
    Q('"Three" là số?', ['1', '2', '3', '4'], 2, 'Three = 3.'),
    Q('Số 5 tiếng Anh là?', ['Four', 'Five', 'Six', 'Three'], 1, 'Five = 5.'),
    Q('"Two" là số?', ['1', '2', '3', '5'], 1, 'Two = 2.'),
    Q('Số 4 tiếng Anh là?', ['Three', 'Four', 'Five', 'Two'], 1, 'Four = 4.'),
    Q('Sắp đúng thứ tự: one – ___ – three', ['four', 'two', 'five', 'six'], 1, '1 – 2 – 3 = one – two – three.'),
  ]),

  M(5, 'Numbers 6-10', [
    Q('"Six" là số?', ['5', '6', '7', '8'], 1, 'Six = 6.'),
    Q('Số 10 tiếng Anh là?', ['Nine', 'Ten', 'Seven', 'Eight'], 1, 'Ten = 10.'),
    Q('"Seven" là số?', ['6', '7', '8', '9'], 1, 'Seven = 7.'),
    Q('Số 8 tiếng Anh là?', ['Six', 'Seven', 'Eight', 'Nine'], 2, 'Eight = 8.'),
    Q('"Nine" là số?', ['7', '8', '9', '10'], 2, 'Nine = 9.'),
    Q('Đếm: six, seven, ___, nine', ['five', 'eight', 'ten', 'four'], 1, '6 – 7 – 8 – 9 → eight.'),
  ]),

  M(6, 'Colors (1): red, blue, yellow', [
    Q('"Red" là màu gì?', ['Xanh dương', 'Đỏ', 'Vàng', 'Đen'], 1, 'Red = màu đỏ.'),
    Q('"Blue" là màu gì?', ['Xanh dương', 'Xanh lá', 'Vàng', 'Trắng'], 0, 'Blue = xanh dương (xanh nước biển).'),
    Q('"Yellow" là màu gì?', ['Đỏ', 'Vàng', 'Xanh', 'Tím'], 1, 'Yellow = màu vàng.'),
    Q('Mặt trời thường có màu?', ['Blue', 'Yellow', 'Black', 'Pink'], 1, 'Mặt trời = yellow (vàng).'),
    Q('Quả cà chua chín có màu?', ['Red', 'Blue', 'Yellow', 'Green'], 0, 'Cà chua chín = red.'),
    Q('Bầu trời ban ngày có màu?', ['Red', 'Yellow', 'Blue', 'Black'], 2, 'Bầu trời = blue (xanh dương).'),
  ]),

  M(7, 'Colors (2): green, pink, purple, black, white', [
    Q('"Green" là màu gì?', ['Xanh lá', 'Xanh dương', 'Hồng', 'Tím'], 0, 'Green = xanh lá cây.'),
    Q('"Pink" là màu gì?', ['Tím', 'Hồng', 'Đỏ', 'Cam'], 1, 'Pink = màu hồng.'),
    Q('"Black" là màu gì?', ['Trắng', 'Đen', 'Xám', 'Nâu'], 1, 'Black = màu đen.'),
    Q('"White" là màu gì?', ['Đen', 'Trắng', 'Vàng', 'Xám'], 1, 'White = màu trắng.'),
    Q('"Purple" là màu gì?', ['Tím', 'Hồng', 'Xanh', 'Đỏ'], 0, 'Purple = màu tím.'),
    Q('Lá cây thường có màu?', ['Pink', 'Green', 'Black', 'Purple'], 1, 'Lá cây = green.'),
  ]),

  M(8, 'Body parts (1): head, eyes, nose, mouth', [
    Q('"Head" có nghĩa là?', ['Tay', 'Đầu', 'Chân', 'Miệng'], 1, 'Head = đầu.'),
    Q('"Eyes" có nghĩa là?', ['Tai', 'Mắt', 'Mũi', 'Miệng'], 1, 'Eyes = (đôi) mắt.'),
    Q('"Nose" có nghĩa là?', ['Tai', 'Mắt', 'Mũi', 'Miệng'], 2, 'Nose = mũi.'),
    Q('"Mouth" có nghĩa là?', ['Răng', 'Lưỡi', 'Miệng', 'Cằm'], 2, 'Mouth = miệng.'),
    Q('Em ngửi bằng?', ['Eyes', 'Nose', 'Mouth', 'Head'], 1, 'Ngửi bằng mũi = nose.'),
    Q('Em nhìn bằng?', ['Eyes', 'Nose', 'Mouth', 'Ears'], 0, 'Nhìn bằng mắt = eyes.'),
  ]),

  M(9, 'Body parts (2): hand, foot, leg, arm', [
    Q('"Hand" có nghĩa là?', ['Chân', 'Tay (bàn tay)', 'Cánh tay', 'Đầu'], 1, 'Hand = bàn tay.'),
    Q('"Foot" có nghĩa là?', ['Bàn chân', 'Bàn tay', 'Cánh tay', 'Đầu gối'], 0, 'Foot = bàn chân.'),
    Q('"Leg" có nghĩa là?', ['Tay', 'Chân (cẳng chân)', 'Đầu', 'Lưng'], 1, 'Leg = chân.'),
    Q('"Arm" có nghĩa là?', ['Cánh tay', 'Cẳng chân', 'Vai', 'Cổ'], 0, 'Arm = cánh tay.'),
    Q('Em viết bằng?', ['Foot', 'Leg', 'Hand', 'Head'], 2, 'Viết bằng tay = hand.'),
    Q('Em đi bằng?', ['Hands', 'Feet', 'Eyes', 'Arms'], 1, 'Đi bằng (hai) chân = feet (số nhiều của foot).'),
  ]),

  M(10, 'Family (1): mother, father', [
    Q('"Mother" có nghĩa là?', ['Bố', 'Mẹ', 'Anh', 'Chị'], 1, 'Mother = mẹ.'),
    Q('"Father" có nghĩa là?', ['Mẹ', 'Bố', 'Ông', 'Bà'], 1, 'Father = bố / cha.'),
    Q('Cách gọi thân mật của "mother"?', ['Mum / Mom', 'Dad', 'Sis', 'Bro'], 0, 'Mum (Anh) / Mom (Mỹ) = mẹ.'),
    Q('Cách gọi thân mật của "father"?', ['Mum', 'Dad', 'Sis', 'Bro'], 1, 'Dad / Daddy = bố.'),
    Q('"My mother is kind." nghĩa là?', ['Bố tôi tốt bụng', 'Mẹ tôi tốt bụng', 'Tôi tốt bụng', 'Bạn tôi tốt'], 1, 'Mother = mẹ; kind = tốt bụng.'),
    Q('"Parents" có nghĩa là?', ['Bố mẹ', 'Anh chị', 'Ông bà', 'Bạn bè'], 0, 'Parents = bố mẹ (cha mẹ).'),
  ]),

  M(11, 'Family (2): brother, sister, grandma, grandpa', [
    Q('"Brother" có nghĩa là?', ['Chị/em gái', 'Anh/em trai', 'Bố', 'Ông'], 1, 'Brother = anh / em trai.'),
    Q('"Sister" có nghĩa là?', ['Anh/em trai', 'Chị/em gái', 'Mẹ', 'Bà'], 1, 'Sister = chị / em gái.'),
    Q('"Grandma" có nghĩa là?', ['Bà', 'Ông', 'Mẹ', 'Cô'], 0, 'Grandma = bà (nội/ngoại).'),
    Q('"Grandpa" có nghĩa là?', ['Bà', 'Ông', 'Bố', 'Chú'], 1, 'Grandpa = ông (nội/ngoại).'),
    Q('"I have one sister." nghĩa là?', ['Tôi có một anh', 'Tôi có một chị/em gái', 'Tôi là chị', 'Tôi yêu chị'], 1, 'I have one sister = Tôi có một chị/em gái.'),
    Q('Bố của mẹ em gọi là?', ['Grandma', 'Grandpa', 'Uncle', 'Brother'], 1, 'Bố của mẹ = ông ngoại = grandpa.'),
  ]),

  M(12, 'This is.../These are... (demonstratives)', [
    Q('"This is my book." nghĩa là?', ['Kia là sách của tôi', 'Đây là sách của tôi', 'Đó là bạn tôi', 'Tôi có sách'], 1, 'This is = Đây là (chỉ vật ở gần).'),
    Q('"That is a cat." nghĩa là?', ['Đây là con mèo', 'Kia là một con mèo', 'Mèo của tôi', 'Tôi có mèo'], 1, 'That is = Kia / Đó là (chỉ vật ở xa).'),
    Q('Chỉ vào nhiều quyển sách gần em, nói:', ['This is books', 'These are books', 'Those are books', 'That is books'], 1, 'Số nhiều ở gần dùng "These are".'),
    Q('"These are my pens." nghĩa là?', ['Đây là cây bút của tôi', 'Đây là những cây bút của tôi', 'Kia là bút', 'Tôi có bút'], 1, 'These = đây là (số nhiều).'),
    Q('"___ is a dog." (con chó ở gần)', ['These', 'Those', 'This', 'They'], 2, 'Một vật ở gần dùng "This".'),
    Q('"___ are apples." (nhiều quả táo ở xa)', ['This', 'That', 'These', 'Those'], 3, 'Số nhiều ở xa dùng "Those".'),
  ]),

  M(13, 'Classroom (1): book, pen, pencil', [
    Q('"Book" có nghĩa là?', ['Bút', 'Sách', 'Vở', 'Thước'], 1, 'Book = sách.'),
    Q('"Pen" có nghĩa là?', ['Bút mực/bút bi', 'Bút chì', 'Tẩy', 'Sách'], 0, 'Pen = bút mực / bút bi.'),
    Q('"Pencil" có nghĩa là?', ['Bút mực', 'Bút chì', 'Tẩy', 'Thước'], 1, 'Pencil = bút chì.'),
    Q('Em đọc bằng?', ['Pen', 'Pencil', 'Book', 'Bag'], 2, 'Em đọc sách = book.'),
    Q('"A red pen" nghĩa là?', ['Một cây bút đỏ', 'Một quyển sách đỏ', 'Một bút chì đỏ', 'Một cái cặp đỏ'], 0, 'A red pen = một cây bút (mực) đỏ.'),
    Q('"Two pencils" nghĩa là?', ['Hai cây bút', 'Hai bút chì', 'Hai quyển sách', 'Hai cái thước'], 1, 'Two pencils = hai cây bút chì.'),
  ]),

  M(14, 'Classroom (2): desk, chair, board', [
    Q('"Desk" có nghĩa là?', ['Cái ghế', 'Cái bàn', 'Cái bảng', 'Cái cặp'], 1, 'Desk = cái bàn (học).'),
    Q('"Chair" có nghĩa là?', ['Cái bàn', 'Cái ghế', 'Cái bảng', 'Cái tủ'], 1, 'Chair = cái ghế.'),
    Q('"Board" có nghĩa là?', ['Cái bảng', 'Cái cửa', 'Cái tủ', 'Cái cặp'], 0, 'Board = cái bảng (đen/trắng).'),
    Q('Em ngồi trên?', ['Desk', 'Chair', 'Board', 'Book'], 1, 'Ngồi trên ghế = chair.'),
    Q('Cô viết trên?', ['Chair', 'Desk', 'Board', 'Bag'], 2, 'Viết trên bảng = board.'),
    Q('"My school bag" nghĩa là?', ['Cái cặp của tôi', 'Cái bàn của tôi', 'Cái ghế của tôi', 'Cái bảng của tôi'], 0, 'School bag = cặp đi học.'),
  ]),

  M(15, 'School things review', [
    Q('Đồ dùng nào dùng để xoá chì?', ['Pen', 'Eraser', 'Ruler', 'Book'], 1, 'Eraser = cục tẩy / gôm.'),
    Q('"Ruler" có nghĩa là?', ['Cây thước', 'Cục tẩy', 'Bút chì', 'Vở'], 0, 'Ruler = cây thước (kẻ).'),
    Q('"Notebook" có nghĩa là?', ['Sách giáo khoa', 'Quyển vở', 'Bút mực', 'Cặp sách'], 1, 'Notebook = quyển vở.'),
    Q('"Schoolbag" là gì?', ['Cái cặp', 'Quyển sách', 'Cái bàn', 'Cái bảng'], 0, 'Schoolbag = cặp đi học.'),
    Q('Chọn đồ KHÔNG có trong lớp học:', ['Desk', 'Chair', 'Board', 'Fish'], 3, 'Fish = con cá, không phải đồ dùng học tập.'),
    Q('"Open your book" nghĩa là?', ['Đóng sách lại', 'Mở sách ra', 'Đọc sách', 'Cất sách'], 1, 'Open = mở; your book = sách của bạn.'),
  ]),

  M(16, "I have / I don't have", [
    Q('"I have a pen." nghĩa là?', ['Tôi không có bút', 'Tôi có một cây bút', 'Bạn có bút', 'Tôi cần bút'], 1, 'I have = Tôi có.'),
    Q('"I don\'t have a book." nghĩa là?', ['Tôi có sách', 'Tôi không có sách', 'Bạn có sách', 'Tôi thích sách'], 1, "I don't have = Tôi không có."),
    Q('"Do you have a pencil?" nghĩa là?', ['Bạn có bút chì không?', 'Tôi có bút chì', 'Cho tôi bút chì', 'Bút chì đâu?'], 0, 'Do you have...? = Bạn có ... không?'),
    Q('Trả lời CÓ: "Do you have a pen?" – ___', ['Yes, I do', 'No, I do', 'Yes, I am', 'No, I am'], 0, 'Trả lời ngắn: Yes, I do / No, I don\'t.'),
    Q('"She has a doll." nghĩa là?', ['Cô ấy có búp bê', 'Tôi có búp bê', 'Cô ấy thích búp bê', 'Búp bê đẹp'], 0, 'She has = Cô ấy có (ngôi 3 dùng has).'),
    Q('Điền: "I ___ two brothers."', ['has', 'have', 'is', 'am'], 1, 'Ngôi "I" dùng "have".'),
  ]),

  M(17, 'Numbers 11-20', [
    Q('Số 11 tiếng Anh là?', ['Ten', 'Eleven', 'Twelve', 'Thirteen'], 1, 'Eleven = 11.'),
    Q('"Twelve" là số?', ['11', '12', '13', '20'], 1, 'Twelve = 12.'),
    Q('Số 15 tiếng Anh là?', ['Fifteen', 'Fifty', 'Fourteen', 'Sixteen'], 0, 'Fifteen = 15.'),
    Q('"Twenty" là số?', ['12', '20', '2', '22'], 1, 'Twenty = 20.'),
    Q('Số 18 tiếng Anh là?', ['Eighty', 'Eighteen', 'Eight', 'Eleven'], 1, 'Eighteen = 18.'),
    Q('Đếm: thirteen, ___, fifteen', ['twelve', 'fourteen', 'sixteen', 'eleven'], 1, '13 – 14 – 15 → fourteen.'),
  ]),

  M(18, 'Review HK1 (tổng hợp)', [
    Q('"Hello, my name is Lan." nghĩa là?', ['Xin chào, tôi tên Lan', 'Tạm biệt Lan', 'Lan đâu rồi', 'Lan khoẻ không'], 0, 'Hello + My name is = Xin chào, tôi tên là...'),
    Q('Số 7 tiếng Anh là?', ['Six', 'Seven', 'Eight', 'Nine'], 1, 'Seven = 7.'),
    Q('"Red" là màu?', ['Đỏ', 'Xanh', 'Vàng', 'Tím'], 0, 'Red = đỏ.'),
    Q('"Mother" có nghĩa là?', ['Bố', 'Mẹ', 'Anh', 'Bà'], 1, 'Mother = mẹ.'),
    Q('Em viết bằng?', ['Eye', 'Hand', 'Foot', 'Nose'], 1, 'Viết bằng tay = hand.'),
    Q('"This is my book." nghĩa là?', ['Kia là sách', 'Đây là sách của tôi', 'Tôi đọc sách', 'Sách đâu'], 1, 'This is my book = Đây là sách của tôi.'),
    Q('Đáp "How are you?" là?', ['My name is Lan', "I'm fine, thank you", 'Goodbye', 'I have a pen'], 1, "I'm fine, thank you = Tôi khoẻ, cảm ơn."),
    Q('"I have two pens." nghĩa là?', ['Tôi có hai cây bút', 'Tôi có hai quyển sách', 'Tôi có hai cục tẩy', 'Tôi không có bút'], 0, 'Two pens = hai cây bút (mực).'),
    Q('Số 20 tiếng Anh là?', ['Twelve', 'Twenty', 'Two', 'Ten'], 1, 'Twenty = 20.'),
    Q('"Goodbye" có nghĩa là?', ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], 1, 'Goodbye = tạm biệt.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Animals: cat, dog, fish, bird', [
    Q('"Cat" có nghĩa là?', ['Con chó', 'Con mèo', 'Con cá', 'Con chim'], 1, 'Cat = con mèo.'),
    Q('"Dog" có nghĩa là?', ['Con chó', 'Con mèo', 'Con voi', 'Con cá'], 0, 'Dog = con chó.'),
    Q('"Fish" có nghĩa là?', ['Con chim', 'Con mèo', 'Con cá', 'Con cua'], 2, 'Fish = con cá.'),
    Q('"Bird" có nghĩa là?', ['Con chim', 'Con cá', 'Con bò', 'Con chó'], 0, 'Bird = con chim.'),
    Q('Con vật nào biết bay?', ['Fish', 'Bird', 'Cat', 'Dog'], 1, 'Bird (chim) biết bay.'),
    Q('"I have a cat." nghĩa là?', ['Tôi nuôi mèo', 'Tôi có một con mèo', 'Mèo của tôi đẹp', 'Tôi thích mèo'], 1, 'I have a cat = Tôi có một con mèo.'),
  ]),

  M(20, 'Farm animals: cow, pig, hen, duck', [
    Q('"Cow" có nghĩa là?', ['Con bò', 'Con heo', 'Con gà', 'Con vịt'], 0, 'Cow = con bò.'),
    Q('"Pig" có nghĩa là?', ['Con bò', 'Con heo (lợn)', 'Con gà', 'Con vịt'], 1, 'Pig = con heo / lợn.'),
    Q('"Hen" có nghĩa là?', ['Con gà mái', 'Con vịt', 'Con bò', 'Con thỏ'], 0, 'Hen = con gà mái.'),
    Q('"Duck" có nghĩa là?', ['Con gà', 'Con ngỗng', 'Con vịt', 'Con heo'], 2, 'Duck = con vịt.'),
    Q('Con vật cho ta sữa?', ['Pig', 'Cow', 'Hen', 'Duck'], 1, 'Cow (bò) cho ta sữa.'),
    Q('Con vật đẻ trứng (trong các con):', ['Cow', 'Pig', 'Hen', 'Dog'], 2, 'Hen (gà mái) đẻ trứng.'),
  ]),

  M(21, 'Wild animals: lion, tiger, elephant', [
    Q('"Lion" có nghĩa là?', ['Sư tử', 'Hổ', 'Voi', 'Gấu'], 0, 'Lion = con sư tử.'),
    Q('"Tiger" có nghĩa là?', ['Sư tử', 'Con hổ', 'Báo', 'Gấu'], 1, 'Tiger = con hổ.'),
    Q('"Elephant" có nghĩa là?', ['Con voi', 'Con hươu', 'Con khỉ', 'Con ngựa'], 0, 'Elephant = con voi.'),
    Q('Con vật to nhất trong các con:', ['Lion', 'Tiger', 'Elephant', 'Cat'], 2, 'Elephant (voi) to nhất.'),
    Q('"Monkey" có nghĩa là?', ['Con khỉ', 'Con gấu', 'Con voi', 'Con cọp'], 0, 'Monkey = con khỉ.'),
    Q('Vua của muôn loài (Anh: King of the jungle)?', ['Tiger', 'Lion', 'Elephant', 'Monkey'], 1, 'Sư tử (lion) được gọi là vua muôn loài.'),
  ]),

  M(22, 'Lunar New Year — Happy New Year!', [
    Q('"Happy New Year!" nghĩa là?', ['Chúc mừng sinh nhật', 'Chúc mừng năm mới', 'Tạm biệt', 'Chúc ngủ ngon'], 1, 'Happy New Year = Chúc mừng năm mới.'),
    Q('"Tet" trong tiếng Anh dùng để chỉ?', ['Lễ Giáng sinh', 'Tết Nguyên Đán', 'Trung Thu', 'Quốc khánh'], 1, '"Tet" = Tết Nguyên Đán của Việt Nam.'),
    Q('"Lucky money" là gì?', ['Tiền lì xì', 'Tiền tiêu vặt', 'Tiền học', 'Tiền tiết kiệm'], 0, 'Lucky money = tiền lì xì (mừng tuổi).'),
    Q('"Banh chung" là?', ['Bánh chưng', 'Bánh tét', 'Bánh kem', 'Bánh mì'], 0, 'Banh chung = bánh chưng (món Tết).'),
    Q('"Peach blossom" có nghĩa là?', ['Hoa mai', 'Hoa đào', 'Hoa hồng', 'Hoa cúc'], 1, 'Peach blossom = hoa đào (chơi Tết miền Bắc).'),
    Q('"Apricot blossom" có nghĩa là?', ['Hoa đào', 'Hoa mai', 'Hoa lan', 'Hoa hồng'], 1, 'Apricot blossom = hoa mai (chơi Tết miền Nam).'),
    Q('Em chúc ông bà: "Happy ___ Year!"', ['Old', 'New', 'Big', 'Long'], 1, 'Happy New Year = Chúc mừng năm mới.'),
  ]),

  M(23, 'Food: rice, fish, meat, bread', [
    Q('"Rice" có nghĩa là?', ['Mì', 'Cơm/gạo', 'Bánh mì', 'Cá'], 1, 'Rice = cơm / gạo.'),
    Q('"Fish" (món ăn) có nghĩa là?', ['Thịt', 'Cá', 'Trứng', 'Cơm'], 1, 'Fish vừa là con cá, vừa là món cá.'),
    Q('"Meat" có nghĩa là?', ['Cá', 'Thịt', 'Trứng', 'Rau'], 1, 'Meat = thịt.'),
    Q('"Bread" có nghĩa là?', ['Cơm', 'Bánh mì', 'Mì', 'Bánh ngọt'], 1, 'Bread = bánh mì.'),
    Q('"Egg" có nghĩa là?', ['Trứng', 'Cá', 'Thịt', 'Rau'], 0, 'Egg = quả trứng.'),
    Q('"I eat rice." nghĩa là?', ['Tôi ăn cơm', 'Tôi nấu cơm', 'Tôi thích cơm', 'Cơm ngon'], 0, 'I eat rice = Tôi ăn cơm.'),
  ]),

  M(24, 'Fruits: apple, banana, orange, mango', [
    Q('"Apple" có nghĩa là?', ['Quả táo', 'Quả chuối', 'Quả cam', 'Quả xoài'], 0, 'Apple = quả táo.'),
    Q('"Banana" có nghĩa là?', ['Quả táo', 'Quả chuối', 'Quả nho', 'Quả lê'], 1, 'Banana = quả chuối.'),
    Q('"Orange" (trái cây) có nghĩa là?', ['Quả cam', 'Quả quýt', 'Quả chanh', 'Quả bưởi'], 0, 'Orange = quả cam (cũng là màu cam).'),
    Q('"Mango" có nghĩa là?', ['Quả xoài', 'Quả ổi', 'Quả mít', 'Quả đu đủ'], 0, 'Mango = quả xoài.'),
    Q('"Grape" có nghĩa là?', ['Quả nho', 'Quả lê', 'Quả táo', 'Quả dâu'], 0, 'Grape = quả nho.'),
    Q('"I like apples." nghĩa là?', ['Tôi không thích táo', 'Tôi thích táo', 'Tôi ăn táo', 'Táo ngon'], 1, 'I like = Tôi thích.'),
  ]),

  M(25, 'Drinks: water, milk, juice, tea', [
    Q('"Water" có nghĩa là?', ['Nước', 'Sữa', 'Nước ép', 'Trà'], 0, 'Water = nước (lọc).'),
    Q('"Milk" có nghĩa là?', ['Nước', 'Sữa', 'Trà', 'Cà phê'], 1, 'Milk = sữa.'),
    Q('"Juice" có nghĩa là?', ['Nước ép trái cây', 'Sữa', 'Trà', 'Bia'], 0, 'Juice = nước ép trái cây.'),
    Q('"Tea" có nghĩa là?', ['Cà phê', 'Trà', 'Sữa', 'Nước'], 1, 'Tea = trà.'),
    Q('"Orange juice" có nghĩa là?', ['Nước cam ép', 'Sữa cam', 'Trà cam', 'Cam quả'], 0, 'Orange juice = nước cam (ép).'),
    Q('"I drink milk." nghĩa là?', ['Tôi uống sữa', 'Tôi ăn sữa', 'Sữa ngon', 'Tôi thích sữa'], 0, 'I drink = Tôi uống.'),
  ]),

  M(26, 'Weather (1): hot, cold, warm, cool', [
    Q('"Hot" có nghĩa là?', ['Lạnh', 'Nóng', 'Mát', 'Ấm'], 1, 'Hot = nóng.'),
    Q('"Cold" có nghĩa là?', ['Nóng', 'Lạnh', 'Mát', 'Ấm'], 1, 'Cold = lạnh.'),
    Q('"Warm" có nghĩa là?', ['Lạnh', 'Mát', 'Ấm', 'Nóng'], 2, 'Warm = ấm áp.'),
    Q('"Cool" có nghĩa là?', ['Mát mẻ', 'Nóng', 'Lạnh', 'Ấm'], 0, 'Cool = mát mẻ.'),
    Q('Mùa hè ở Việt Nam thì?', ['Cold', 'Hot', 'Cool', 'Warm'], 1, 'Mùa hè = hot (nóng).'),
    Q('"It is cold today." nghĩa là?', ['Hôm nay nóng', 'Hôm nay lạnh', 'Hôm nay mát', 'Hôm nay ấm'], 1, 'It is cold = trời lạnh.'),
  ]),

  M(27, 'Weather (2): sunny, rainy, cloudy, windy', [
    Q('"Sunny" có nghĩa là?', ['Có nắng', 'Có mưa', 'Có mây', 'Có gió'], 0, 'Sunny = có nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có nắng', 'Có mưa', 'Có mây', 'Có tuyết'], 1, 'Rainy = có mưa.'),
    Q('"Cloudy" có nghĩa là?', ['Có nắng', 'Có gió', 'Có nhiều mây', 'Có sương'], 2, 'Cloudy = nhiều mây.'),
    Q('"Windy" có nghĩa là?', ['Có gió', 'Có mưa', 'Có nắng', 'Có bão'], 0, 'Windy = có gió.'),
    Q('"It is sunny today." nghĩa là?', ['Hôm nay mưa', 'Hôm nay nắng', 'Hôm nay lạnh', 'Hôm nay gió'], 1, 'It is sunny = Hôm nay trời nắng.'),
    Q('"How is the weather?" hỏi gì?', ['Bạn khoẻ không?', 'Thời tiết thế nào?', 'Hôm nay thứ mấy?', 'Bạn ở đâu?'], 1, 'How is the weather? = Thời tiết hôm nay thế nào?'),
  ]),

  M(28, 'Days of week (Mon-Wed-Fri-Sun)', [
    Q('"Monday" là thứ?', ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư'], 1, 'Monday = thứ hai.'),
    Q('"Wednesday" là thứ?', ['Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu'], 1, 'Wednesday = thứ tư.'),
    Q('"Friday" là thứ?', ['Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'], 1, 'Friday = thứ sáu.'),
    Q('"Sunday" là?', ['Thứ bảy', 'Thứ hai', 'Chủ nhật', 'Thứ sáu'], 2, 'Sunday = chủ nhật.'),
    Q('Một tuần có bao nhiêu ngày?', ['5', '6', '7', '8'], 2, 'Một tuần = 7 days.'),
    Q('"Today is Monday." nghĩa là?', ['Hôm nay là chủ nhật', 'Hôm nay là thứ hai', 'Ngày mai là thứ hai', 'Hôm qua là thứ hai'], 1, 'Today is Monday = Hôm nay là thứ hai.'),
  ]),

  M(29, 'Days of week revisit (full 7 days)', [
    Q('"Tuesday" là thứ?', ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm'], 1, 'Tuesday = thứ ba.'),
    Q('"Thursday" là thứ?', ['Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'], 1, 'Thursday = thứ năm.'),
    Q('"Saturday" là thứ?', ['Thứ sáu', 'Thứ bảy', 'Chủ nhật', 'Thứ hai'], 1, 'Saturday = thứ bảy.'),
    Q('Sau "Tuesday" là?', ['Monday', 'Wednesday', 'Sunday', 'Friday'], 1, 'Sau thứ ba (Tuesday) là thứ tư (Wednesday).'),
    Q('Trước "Friday" là?', ['Thursday', 'Saturday', 'Monday', 'Sunday'], 0, 'Trước thứ sáu (Friday) là thứ năm (Thursday).'),
    Q('Hai ngày cuối tuần là?', ['Mon & Tue', 'Sat & Sun', 'Fri & Sat', 'Sun & Mon'], 1, 'Weekend = Saturday & Sunday.'),
  ]),

  M(30, 'Toys: ball, doll, kite, car', [
    Q('"Ball" có nghĩa là?', ['Quả bóng', 'Búp bê', 'Diều', 'Ô tô'], 0, 'Ball = quả bóng.'),
    Q('"Doll" có nghĩa là?', ['Quả bóng', 'Búp bê', 'Diều', 'Ô tô'], 1, 'Doll = búp bê.'),
    Q('"Kite" có nghĩa là?', ['Diều', 'Bóng', 'Xe', 'Tàu'], 0, 'Kite = con diều.'),
    Q('"Car" (đồ chơi) có nghĩa là?', ['Búp bê', 'Ô tô (đồ chơi)', 'Tàu hoả', 'Máy bay'], 1, 'Car = ô tô.'),
    Q('"Teddy bear" là?', ['Gấu bông', 'Búp bê', 'Diều', 'Bóng'], 0, 'Teddy bear = gấu bông.'),
    Q('"I have a red ball." nghĩa là?', ['Tôi có quả bóng đỏ', 'Tôi thích bóng', 'Bóng của tôi to', 'Tôi không có bóng'], 0, 'I have a red ball = Tôi có một quả bóng đỏ.'),
  ]),

  M(31, 'Clothes: shirt, dress, hat, shoes', [
    Q('"Shirt" có nghĩa là?', ['Áo sơ mi', 'Váy', 'Mũ', 'Giày'], 0, 'Shirt = áo sơ mi.'),
    Q('"Dress" có nghĩa là?', ['Áo sơ mi', 'Cái váy', 'Cái mũ', 'Đôi giày'], 1, 'Dress = cái váy / đầm.'),
    Q('"Hat" có nghĩa là?', ['Áo', 'Quần', 'Mũ/nón', 'Giày'], 2, 'Hat = cái mũ / nón.'),
    Q('"Shoes" có nghĩa là?', ['Tất', 'Đôi giày', 'Áo', 'Mũ'], 1, 'Shoes = đôi giày.'),
    Q('"T-shirt" có nghĩa là?', ['Áo thun', 'Áo khoác', 'Quần', 'Váy'], 0, 'T-shirt = áo phông / áo thun.'),
    Q('"I wear a hat." nghĩa là?', ['Tôi mua mũ', 'Tôi đội mũ', 'Tôi có mũ', 'Tôi thích mũ'], 1, 'Wear = mặc / đội.'),
  ]),

  M(32, 'Daily routine: get up, go to school, eat, sleep', [
    Q('"Get up" có nghĩa là?', ['Đi ngủ', 'Thức dậy', 'Ăn cơm', 'Đi học'], 1, 'Get up = thức dậy.'),
    Q('"Go to school" có nghĩa là?', ['Về nhà', 'Đi học', 'Đi chơi', 'Đi ngủ'], 1, 'Go to school = đi đến trường / đi học.'),
    Q('"Eat" có nghĩa là?', ['Uống', 'Ăn', 'Ngủ', 'Chơi'], 1, 'Eat = ăn.'),
    Q('"Sleep" có nghĩa là?', ['Ăn', 'Uống', 'Ngủ', 'Học'], 2, 'Sleep = ngủ.'),
    Q('"Brush my teeth" có nghĩa là?', ['Rửa mặt', 'Đánh răng', 'Tắm', 'Chải tóc'], 1, 'Brush my teeth = đánh răng.'),
    Q('Buổi sáng em ___ rồi đi học:', ['sleep', 'get up', 'go to bed', 'eat dinner'], 1, 'Sáng dậy = get up; dinner = bữa tối.'),
  ]),

  M(33, 'Action verbs: run, jump, swim, sing', [
    Q('"Run" có nghĩa là?', ['Đi', 'Chạy', 'Nhảy', 'Bơi'], 1, 'Run = chạy.'),
    Q('"Jump" có nghĩa là?', ['Chạy', 'Nhảy', 'Bơi', 'Hát'], 1, 'Jump = nhảy.'),
    Q('"Swim" có nghĩa là?', ['Bơi', 'Chạy', 'Hát', 'Đọc'], 0, 'Swim = bơi.'),
    Q('"Sing" có nghĩa là?', ['Múa', 'Hát', 'Nói', 'Cười'], 1, 'Sing = hát.'),
    Q('"Dance" có nghĩa là?', ['Hát', 'Nhảy múa', 'Chạy', 'Bơi'], 1, 'Dance = nhảy múa.'),
    Q('"I can swim." nghĩa là?', ['Tôi không biết bơi', 'Tôi có thể bơi', 'Tôi thích bơi', 'Tôi đi bơi'], 1, 'I can = Tôi có thể.'),
  ]),

  M(34, "Likes & dislikes: I like.../ I don't like...", [
    Q('"I like cats." nghĩa là?', ['Tôi không thích mèo', 'Tôi thích mèo', 'Tôi có mèo', 'Tôi ghét mèo'], 1, 'I like = Tôi thích.'),
    Q('"I don\'t like fish." nghĩa là?', ['Tôi thích cá', 'Tôi không thích cá', 'Tôi có cá', 'Tôi ăn cá'], 1, "I don't like = Tôi không thích."),
    Q('"Do you like apples?" nghĩa là?', ['Bạn có táo không?', 'Bạn thích táo không?', 'Bạn ăn táo không?', 'Cho tôi táo'], 1, 'Do you like ...? = Bạn có thích ... không?'),
    Q('Trả lời CÓ thích: "Do you like milk?" – ___', ['Yes, I do', 'No, I do', 'Yes, I am', "No, I'm not"], 0, "Yes, I do / No, I don't."),
    Q('Trả lời KHÔNG thích:', ["Yes, I don't", "No, I don't", "Yes, I'm not", 'No, I do'], 1, "No, I don't = Không, tôi không thích."),
    Q('"She likes mangoes." nghĩa là?', ['Cô ấy thích xoài', 'Cô ấy có xoài', 'Cô ấy ăn xoài', 'Cô ấy không thích xoài'], 0, 'She likes = Cô ấy thích (ngôi 3 dùng likes).'),
  ]),

  M(35, 'Where is...?: in, on, under', [
    Q('"Where is my book?" có nghĩa là?', ['Sách tôi đâu rồi?', 'Sách tôi đẹp', 'Sách của ai?', 'Cho tôi sách'], 0, 'Where is...? = ... ở đâu?'),
    Q('"In" có nghĩa là?', ['Trên', 'Trong', 'Dưới', 'Cạnh'], 1, 'In = ở trong.'),
    Q('"On" có nghĩa là?', ['Trong', 'Dưới', 'Trên (bề mặt)', 'Cạnh'], 2, 'On = ở trên (bề mặt, có chạm).'),
    Q('"Under" có nghĩa là?', ['Trên', 'Dưới', 'Trong', 'Trước'], 1, 'Under = ở dưới (gầm).'),
    Q('"The cat is under the table." nghĩa là?', ['Con mèo trên bàn', 'Con mèo dưới gầm bàn', 'Con mèo trong bàn', 'Con mèo cạnh bàn'], 1, 'Under the table = dưới gầm bàn.'),
    Q('"The book is on the desk." nghĩa là?', ['Sách trong bàn', 'Sách dưới bàn', 'Sách trên bàn', 'Sách cạnh bàn'], 2, 'On the desk = trên (mặt) bàn.'),
  ]),

  M(36, 'Review whole year', [
    Q('"Hello! How are you?" Đáp lại:', ['My name is Lan', "I'm fine, thank you", 'Goodbye', 'I have a pen'], 1, "I'm fine, thank you = trả lời lịch sự cho How are you?"),
    Q('Số 15 tiếng Anh là?', ['Fifty', 'Fifteen', 'Five', 'Fourteen'], 1, 'Fifteen = 15.'),
    Q('"Mother and father" là?', ['Anh chị em', 'Bố mẹ', 'Ông bà', 'Bạn bè'], 1, 'Mother & father = bố mẹ (parents).'),
    Q('"I have two ___." (2 con mèo)', ['cat', 'cats', 'a cat', 'the cat'], 1, 'Số nhiều: 2 cats.'),
    Q('"Apple, banana, mango" là?', ['Đồ uống', 'Trái cây', 'Con vật', 'Đồ chơi'], 1, 'Đây đều là fruits (trái cây).'),
    Q('"It is sunny and hot." nghĩa là?', ['Trời lạnh và mưa', 'Trời nắng và nóng', 'Trời mây và gió', 'Trời ấm và mát'], 1, 'Sunny = nắng; hot = nóng.'),
    Q('Hôm nay là "Friday", ngày mai là?', ['Thursday', 'Saturday', 'Sunday', 'Monday'], 1, 'Sau Friday là Saturday.'),
    Q('"The cat is ___ the box." (mèo ở trong hộp)', ['on', 'in', 'under', 'at'], 1, 'In = ở trong.'),
    Q('"I can sing and dance." nghĩa là?', ['Tôi thích hát múa', 'Tôi có thể hát và múa', 'Tôi đi hát múa', 'Tôi không hát'], 1, 'I can = Tôi có thể.'),
    Q('"Goodbye! See you tomorrow." nghĩa là?', ['Xin chào, mai gặp', 'Tạm biệt, mai gặp lại', 'Cảm ơn nhé', 'Xin lỗi nhé'], 1, 'Goodbye + See you tomorrow = Tạm biệt, hẹn mai gặp lại.'),
  ], { difficulty: 3 }),
];

export const P2TA_SCENARIOS = indexBy(P2TA_WEEKS);
