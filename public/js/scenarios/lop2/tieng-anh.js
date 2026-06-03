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
    Q('"Hello" có nghĩa là?', ['Xin chào', 'Xin lỗi', 'Tạm biệt', 'Cảm ơn'], 0, 'Hello = Xin chào.'),
    Q('"Goodbye" có nghĩa là?', ['Cảm ơn', 'Bạn khoẻ không', 'Xin chào', 'Tạm biệt'], 3, 'Goodbye = Tạm biệt.'),
    Q('Khi gặp bạn buổi sáng, em nói?', ['Bye (Tạm biệt — lúc chia tay)', 'Sorry (Xin lỗi)', 'Hi', 'No (Không)'], 2, 'Hi / Hello dùng để chào khi gặp nhau.'),
    Q('"Bye" là cách nói ngắn của?', ['Hi (Chào — gặp mặt)', 'Goodbye', 'Thanks', 'Hello (Xin chào — gặp mặt)'], 1, 'Bye = cách rút gọn của Goodbye.'),
    Q('Chọn câu chào lịch sự buổi sáng:', ['Goodbye', 'Good morning', 'Good night', 'Bye bye'], 1, 'Good morning = Chào buổi sáng.'),
    Q('Cuối ngày trước khi ngủ em nói?', ['Good night', 'Hello (Xin chào — khi gặp)', 'Good morning', 'Hi (Chào — khi gặp bạn)'], 0, 'Good night = Chúc ngủ ngon.'),
  ]),

  M(2, "What's your name? – My name is...", [
    Q('"What is your name?" hỏi điều gì?', ['Bạn khoẻ không?', 'Bạn ở đâu?', 'Bạn bao nhiêu tuổi?', 'Tên bạn là gì?'], 3, 'What is your name? = Tên bạn là gì?'),
    Q('Trả lời "What\'s your name?": "My name ___ Lan."', ['are (dùng với you/we/they)', 'is', 'be (dạng nguyên mẫu của to be)', 'am (dùng với I)'], 1, 'Ngôi thứ ba số ít dùng "is": My name IS Lan.'),
    Q('"My name is Nam." nghĩa là?', ['Tôi là Nam', 'Tên tôi là Nam', 'Nam khoẻ', 'Chào Nam'], 1, 'My name is Nam = Tên tôi là Nam.'),
    Q('Bạn tên Mai, em viết: "My name is ___"', ['name (đây là danh từ "tên")', 'mai (viết thường — sai quy tắc tên riêng)', 'Mai', 'is Mai'], 2, 'Tên riêng viết hoa chữ đầu: Mai.'),
    Q('"I am Linh." có nghĩa là?', ['Linh ơi', 'Linh khoẻ', 'Bạn là Linh', 'Tôi tên Linh'], 3, 'I am Linh = Tôi (tên) là Linh.'),
    Q('Cách viết tắt của "I am" là?', ['Im\' (đặt sai vị trí dấu nháy)', 'I\'m', 'I\'s (nhầm với he\'s/she\'s)', 'I am not'], 1, "I am = I'm."),
  ]),

  M(3, "How are you? – I'm fine, thank you", [
    Q('"How are you?" có nghĩa là?', ['Bạn tên gì?', 'Bạn mấy tuổi?', 'Bạn khoẻ không?', 'Bạn ở đâu?'], 2, 'How are you? = Bạn (có) khoẻ không?'),
    Q('Trả lời lịch sự cho "How are you?"', ['Goodbye', 'My name', 'I\'m fine, thank you', 'Hello (Xin chào — câu chào, không trả lời sức khỏe)'], 2, "I'm fine, thank you = Tôi khoẻ, cảm ơn."),
    Q('"Thank you" nghĩa là?', ['Cảm ơn', 'Xin chào', 'Xin lỗi', 'Tạm biệt'], 0, 'Thank you = Cảm ơn.'),
    Q('Đáp lại "Thank you" em nói?', ['Hello (Xin chào — dùng khi gặp)', 'Bye (Tạm biệt — không phải đáp lại cảm ơn)', 'You\'re welcome', 'Sorry (Xin lỗi — dùng khi xin lỗi)'], 2, "You're welcome = Không có chi."),
    Q('"Sorry" có nghĩa là?', ['Xin lỗi', 'Tạm biệt', 'Cảm ơn', 'Xin chào'], 0, 'Sorry = Xin lỗi.'),
    Q('"And you?" nghĩa là?', ['Bạn đi đâu?', 'Bạn tên gì?', 'Bạn ở đâu?', 'Còn bạn thì sao?'], 3, 'And you? = Còn bạn (thì sao)?'),
  ]),

  M(4, 'Numbers 1-5', [
    Q('"One" là số?', ['1', '3', '4', '2'], 0, 'One = 1.'),
    Q('"Three" là số?', ['1', '3', '2', '4'], 1, 'Three = 3.'),
    Q('Số 5 tiếng Anh là?', ['Six (6 — nhầm với 5)', 'Five', 'Four (4 — đứng trước 5)', 'Three (3)'], 1, 'Five = 5.'),
    Q('"Two" là số?', ['1', '5', '3', '2'], 3, 'Two = 2.'),
    Q('Số 4 tiếng Anh là?', ['Three (3 — đứng trước 4)', 'Five (5 — đứng sau 4)', 'Four', 'Two (2)'], 2, 'Four = 4.'),
    Q('Sắp đúng thứ tự: one – ___ – three', ['six (6 — vượt quá 3)', 'five (5 — đứng sau three)', 'four (4 — đứng sau three, không phải giữa 1-3)', 'two'], 3, '1 – 2 – 3 = one – two – three.'),
  ]),

  M(5, 'Numbers 6-10', [
    Q('"Six" là số?', ['7', '5', '6', '8'], 2, 'Six = 6.'),
    Q('Số 10 tiếng Anh là?', ['Ten', 'Eight (8 — đứng trước 10)', 'Nine (9 — liền trước 10)', 'Seven (7)'], 0, 'Ten = 10.'),
    Q('"Seven" là số?', ['6', '8', '9', '7'], 3, 'Seven = 7.'),
    Q('Số 8 tiếng Anh là?', ['Eight', 'Nine (9 — liền sau 8)', 'Seven (7 — liền trước 8)', 'Six (6)'], 0, 'Eight = 8.'),
    Q('"Nine" là số?', ['8', '9', '10', '7'], 1, 'Nine = 9.'),
    Q('Đếm: six, seven, ___, nine', ['five (5 — nhỏ hơn six)', 'ten (10 — đứng sau nine)', 'eight', 'four (4)'], 2, '6 – 7 – 8 – 9 → eight.'),
  ]),

  M(6, 'Colors (1): red, blue, yellow', [
    Q('"Red" là màu gì?', ['Vàng (đó là màu yellow)', 'Xanh dương', 'Đỏ', 'Đen (đó là màu black)'], 2, 'Red = màu đỏ.'),
    Q('"Blue" là màu gì?', ['Vàng (đó là yellow)', 'Trắng (đó là white)', 'Xanh dương', 'Xanh lá'], 2, 'Blue = xanh dương (xanh nước biển).'),
    Q('"Yellow" là màu gì?', ['Xanh (đó là blue/green)', 'Tím (đó là purple)', 'Vàng', 'Đỏ (đó là red)'], 2, 'Yellow = màu vàng.'),
    Q('Mặt trời thường có màu?', ['Black (đen — màu của bầu trời đêm)', 'Yellow', 'Blue (xanh dương — màu bầu trời)', 'Pink (hồng — màu hoa)'], 1, 'Mặt trời = yellow (vàng).'),
    Q('Quả cà chua chín có màu?', ['Red', 'Green (xanh lá — màu khi cà chua còn non)', 'Yellow', 'Blue (xanh dương — màu bầu trời)'], 0, 'Cà chua chín = red.'),
    Q('Bầu trời ban ngày có màu?', ['Blue', 'Red (đỏ — màu lúc hoàng hôn)', 'Yellow', 'Black (đen — màu bầu trời đêm)'], 0, 'Bầu trời = blue (xanh dương).'),
  ]),

  M(7, 'Colors (2): green, pink, purple, black, white', [
    Q('"Green" là màu gì?', ['Xanh dương', 'Xanh lá', 'Tím (đó là purple)', 'Hồng (đó là pink)'], 1, 'Green = xanh lá cây.'),
    Q('"Pink" là màu gì?', ['Hồng', 'Đỏ (đó là red — gần giống hồng)', 'Tím (đó là purple)', 'Cam (đó là orange)'], 0, 'Pink = màu hồng.'),
    Q('"Black" là màu gì?', ['Xám (đó là grey/gray)', 'Trắng (đó là white — trái nghĩa với đen)', 'Đen', 'Nâu (đó là brown)'], 2, 'Black = màu đen.'),
    Q('"White" là màu gì?', ['Đen (đó là black — trái nghĩa với trắng)', 'Trắng', 'Xám (đó là grey)', 'Vàng (đó là yellow)'], 1, 'White = màu trắng.'),
    Q('"Purple" là màu gì?', ['Hồng (đó là pink — gần giống tím)', 'Đỏ (đó là red)', 'Tím', 'Xanh (đó là blue/green)'], 2, 'Purple = màu tím.'),
    Q('Lá cây thường có màu?', ['Black (đen — màu thân cây)', 'Green', 'Pink (hồng — màu hoa)', 'Purple'], 1, 'Lá cây = green.'),
  ]),

  M(8, 'Body parts (1): head, eyes, nose, mouth', [
    Q('"Head" có nghĩa là?', ['Miệng (đó là mouth)', 'Chân (đó là leg/foot)', 'Đầu', 'Tay (đó là hand)'], 2, 'Head = đầu.'),
    Q('"Eyes" có nghĩa là?', ['Miệng (đó là mouth)', 'Tai (đó là ears)', 'Mắt', 'Mũi (đó là nose)'], 2, 'Eyes = (đôi) mắt.'),
    Q('"Nose" có nghĩa là?', ['Mũi', 'Tai (đó là ears)', 'Miệng (đó là mouth)', 'Mắt (đó là eyes)'], 0, 'Nose = mũi.'),
    Q('"Mouth" có nghĩa là?', ['Miệng', 'Răng (đó là teeth)', 'Cằm (đó là chin)', 'Lưỡi (đó là tongue)'], 0, 'Mouth = miệng.'),
    Q('Em ngửi bằng?', ['Eyes (mắt — dùng để nhìn)', 'Mouth (miệng — dùng để ăn)', 'Nose', 'Head (đầu — bộ phận chứa các giác quan)'], 2, 'Ngửi bằng mũi = nose.'),
    Q('Em nhìn bằng?', ['Ears (tai — dùng để nghe)', 'Nose (mũi — dùng để ngửi)', 'Eyes', 'Mouth (miệng — dùng để nói)'], 2, 'Nhìn bằng mắt = eyes.'),
  ]),

  M(9, 'Body parts (2): hand, foot, leg, arm', [
    Q('"Hand" có nghĩa là?', ['Cánh tay', 'Tay (bàn tay)', 'Đầu (đó là head)', 'Chân (đó là foot/leg)'], 1, 'Hand = bàn tay.'),
    Q('"Foot" có nghĩa là?', ['Đầu gối', 'Cánh tay', 'Bàn tay', 'Bàn chân'], 3, 'Foot = bàn chân.'),
    Q('"Leg" có nghĩa là?', ['Tay (đó là hand/arm)', 'Lưng (đó là back)', 'Chân (cẳng chân)', 'Đầu (đó là head)'], 2, 'Leg = chân.'),
    Q('"Arm" có nghĩa là?', ['Cánh tay', 'Cổ (đó là neck)', 'Vai (đó là shoulder)', 'Cẳng chân'], 0, 'Arm = cánh tay.'),
    Q('Em viết bằng?', ['Leg (chân — dùng để đi)', 'Foot (bàn chân — dùng để đứng)', 'Hand', 'Head (đầu — không dùng để viết)'], 2, 'Viết bằng tay = hand.'),
    Q('Em đi bằng?', ['Hands (đôi tay — dùng để viết)', 'Eyes (đôi mắt — dùng để nhìn)', 'Arms (cánh tay — không phải dùng để đi)', 'Feet'], 3, 'Đi bằng (hai) chân = feet (số nhiều của foot).'),
  ]),

  M(10, 'Family (1): mother, father', [
    Q('"Mother" có nghĩa là?', ['Mẹ', 'Anh (đó là brother)', 'Bố (đó là father)', 'Chị (đó là sister)'], 0, 'Mother = mẹ.'),
    Q('"Father" có nghĩa là?', ['Bố', 'Ông (đó là grandpa/grandfather)', 'Mẹ (đó là mother)', 'Bà (đó là grandma/grandmother)'], 0, 'Father = bố / cha.'),
    Q('Cách gọi thân mật của "mother"?', ['Dad (cách gọi thân mật của bố)', 'Mum / Mom', 'Bro (cách gọi thân mật của brother)', 'Sis (cách gọi thân mật của sister)'], 1, 'Mum (Anh) / Mom (Mỹ) = mẹ.'),
    Q('Cách gọi thân mật của "father"?', ['Mum (cách gọi thân mật của mẹ)', 'Sis (cách gọi thân mật của sister)', 'Bro (cách gọi thân mật của brother)', 'Dad'], 3, 'Dad / Daddy = bố.'),
    Q('"My mother is kind." nghĩa là?', ['Tôi tốt bụng', 'Bố tôi tốt bụng', 'Bạn tôi tốt', 'Mẹ tôi tốt bụng'], 3, 'Mother = mẹ; kind = tốt bụng.'),
    Q('"Parents" có nghĩa là?', ['Anh chị', 'Bạn bè', 'Ông bà', 'Bố mẹ'], 3, 'Parents = bố mẹ (cha mẹ).'),
  ]),

  M(11, 'Family (2): brother, sister, grandma, grandpa', [
    Q('"Brother" có nghĩa là?', ['Bố (đó là father)', 'Anh/em trai', 'Chị/em gái', 'Ông (đó là grandpa)'], 1, 'Brother = anh / em trai.'),
    Q('"Sister" có nghĩa là?', ['Bà (đó là grandma)', 'Mẹ (đó là mother)', 'Chị/em gái', 'Anh/em trai'], 2, 'Sister = chị / em gái.'),
    Q('"Grandma" có nghĩa là?', ['Mẹ (đó là mother)', 'Ông (đó là grandpa)', 'Bà', 'Cô (đó là aunt)'], 2, 'Grandma = bà (nội/ngoại).'),
    Q('"Grandpa" có nghĩa là?', ['Chú (đó là uncle)', 'Bố (đó là father/dad)', 'Ông', 'Bà (đó là grandma)'], 2, 'Grandpa = ông (nội/ngoại).'),
    Q('"I have one sister." nghĩa là?', ['Tôi có một chị/em gái', 'Tôi là chị', 'Tôi yêu chị', 'Tôi có một anh'], 0, 'I have one sister = Tôi có một chị/em gái.'),
    Q('Bố của mẹ em gọi là?', ['Brother', 'Uncle (chú/cậu — anh em của bố mẹ)', 'Grandpa', 'Grandma'], 2, 'Bố của mẹ = ông ngoại = grandpa.'),
  ]),

  M(12, 'This is.../These are... (demonstratives)', [
    Q('"This is my book." nghĩa là?', ['Đây là sách của tôi', 'Tôi có sách', 'Kia là sách của tôi', 'Đó là bạn tôi'], 0, 'This is = Đây là (chỉ vật ở gần).'),
    Q('"That is a cat." nghĩa là?', ['Mèo của tôi', 'Kia là một con mèo', 'Tôi có mèo', 'Đây là con mèo'], 1, 'That is = Kia / Đó là (chỉ vật ở xa).'),
    Q('Chỉ vào nhiều quyển sách gần em, nói:', ['These are books', 'Those are books', 'This is books', 'That is books'], 0, 'Số nhiều ở gần dùng "These are".'),
    Q('"These are my pens." nghĩa là?', ['Kia là bút', 'Đây là cây bút của tôi', 'Đây là những cây bút của tôi', 'Tôi có bút'], 2, 'These = đây là (số nhiều).'),
    Q('"___ is a dog." (con chó ở gần)', ['This', 'Those (số nhiều ở xa, đi với are)', 'These (số nhiều ở gần, đi với are)', 'They (đại từ, không đi với "is a dog")'], 0, 'Một vật ở gần dùng "This".'),
    Q('"___ are apples." (nhiều quả táo ở xa)', ['Those', 'That (số ít ở xa, đi với is)', 'These (số nhiều ở gần)', 'This (số ít ở gần)'], 0, 'Số nhiều ở xa dùng "Those".'),
  ]),

  M(13, 'Classroom (1): book, pen, pencil', [
    Q('"Book" có nghĩa là?', ['Vở (đó là notebook)', 'Bút (đó là pen)', 'Sách', 'Thước (đó là ruler)'], 2, 'Book = sách.'),
    Q('"Pen" có nghĩa là?', ['Sách (đó là book)', 'Bút mực/bút bi', 'Tẩy (đó là eraser)', 'Bút chì'], 1, 'Pen = bút mực / bút bi.'),
    Q('"Pencil" có nghĩa là?', ['Thước (đó là ruler)', 'Tẩy (đó là eraser)', 'Bút mực', 'Bút chì'], 3, 'Pencil = bút chì.'),
    Q('Em đọc bằng?', ['Pen (bút mực — để viết, không để đọc)', 'Pencil', 'Book', 'Bag (cặp sách — để đựng đồ)'], 2, 'Em đọc sách = book.'),
    Q('"A red pen" nghĩa là?', ['Một cái cặp đỏ', 'Một quyển sách đỏ', 'Một bút chì đỏ', 'Một cây bút đỏ'], 3, 'A red pen = một cây bút (mực) đỏ.'),
    Q('"Two pencils" nghĩa là?', ['Hai cái thước', 'Hai cây bút', 'Hai bút chì', 'Hai quyển sách'], 2, 'Two pencils = hai cây bút chì.'),
  ]),

  M(14, 'Classroom (2): desk, chair, board', [
    Q('"Desk" có nghĩa là?', ['Cái ghế', 'Cái bảng', 'Cái cặp', 'Cái bàn'], 3, 'Desk = cái bàn (học).'),
    Q('"Chair" có nghĩa là?', ['Cái ghế', 'Cái bàn', 'Cái tủ', 'Cái bảng'], 0, 'Chair = cái ghế.'),
    Q('"Board" có nghĩa là?', ['Cái cặp', 'Cái bảng', 'Cái cửa', 'Cái tủ'], 1, 'Board = cái bảng (đen/trắng).'),
    Q('Em ngồi trên?', ['Book (sách — để đọc, không phải ngồi)', 'Board (bảng — để viết)', 'Chair', 'Desk (bàn học — để viết lên)'], 2, 'Ngồi trên ghế = chair.'),
    Q('Cô viết trên?', ['Desk (bàn học — để viết bằng vở)', 'Bag (cặp sách — để đựng đồ)', 'Board', 'Chair (ghế — để ngồi)'], 2, 'Viết trên bảng = board.'),
    Q('"My school bag" nghĩa là?', ['Cái ghế của tôi', 'Cái cặp của tôi', 'Cái bàn của tôi', 'Cái bảng của tôi'], 1, 'School bag = cặp đi học.'),
  ]),

  M(15, 'School things review', [
    Q('Đồ dùng nào dùng để xoá chì?', ['Ruler (thước — để kẻ đường thẳng)', 'Eraser', 'Book (sách — để đọc)', 'Pen (bút mực — không xoá được chì)'], 1, 'Eraser = cục tẩy / gôm.'),
    Q('"Ruler" có nghĩa là?', ['Cục tẩy', 'Cây thước', 'Vở (đó là notebook)', 'Bút chì'], 1, 'Ruler = cây thước (kẻ).'),
    Q('"Notebook" có nghĩa là?', ['Quyển vở', 'Sách giáo khoa', 'Cặp sách', 'Bút mực'], 0, 'Notebook = quyển vở.'),
    Q('"Schoolbag" là gì?', ['Quyển sách', 'Cái bảng', 'Cái cặp', 'Cái bàn'], 2, 'Schoolbag = cặp đi học.'),
    Q('Chọn đồ KHÔNG có trong lớp học:', ['Fish', 'Desk (cái bàn — đồ dùng lớp học)', 'Board (cái bảng — đồ dùng lớp học)', 'Chair (cái ghế — đồ dùng lớp học)'], 0, 'Fish = con cá, không phải đồ dùng học tập.'),
    Q('"Open your book" nghĩa là?', ['Đóng sách lại', 'Cất sách', 'Mở sách ra', 'Đọc sách'], 2, 'Open = mở; your book = sách của bạn.'),
  ]),

  M(16, "I have / I don't have", [
    Q('"I have a pen." nghĩa là?', ['Tôi cần bút', 'Bạn có bút', 'Tôi không có bút', 'Tôi có một cây bút'], 3, 'I have = Tôi có.'),
    Q('"I don\'t have a book." nghĩa là?', ['Bạn có sách', 'Tôi thích sách', 'Tôi không có sách', 'Tôi có sách'], 2, "I don't have = Tôi không có."),
    Q('"Do you have a pencil?" nghĩa là?', ['Bạn có bút chì không?', 'Tôi có bút chì', 'Cho tôi bút chì', 'Bút chì đâu?'], 0, 'Do you have...? = Bạn có ... không?'),
    Q('Trả lời CÓ: "Do you have a pen?" – ___', ['Yes, I am', 'No, I do', 'No, I am', 'Yes, I do'], 3, 'Trả lời ngắn: Yes, I do / No, I don\'t.'),
    Q('"She has a doll." nghĩa là?', ['Tôi có búp bê', 'Cô ấy có búp bê', 'Cô ấy thích búp bê', 'Búp bê đẹp'], 1, 'She has = Cô ấy có (ngôi 3 dùng has).'),
    Q('Điền: "I ___ two brothers."', ['has (dùng với he/she/it, không dùng với I)', 'have', 'am (động từ to be, không phải động từ "có")', 'is (dùng với he/she/it của to be)'], 1, 'Ngôi "I" dùng "have".'),
  ]),

  M(17, 'Numbers 11-20', [
    Q('Số 11 tiếng Anh là?', ['Thirteen', 'Twelve', 'Ten (10 — đứng trước 11)', 'Eleven'], 3, 'Eleven = 11.'),
    Q('"Twelve" là số?', ['13', '11', '12', '20'], 2, 'Twelve = 12.'),
    Q('Số 15 tiếng Anh là?', ['Fifteen', 'Fifty (50 — dễ nhầm với fifteen)', 'Fourteen', 'Sixteen'], 0, 'Fifteen = 15.'),
    Q('"Twenty" là số?', ['22', '2', '12', '20'], 3, 'Twenty = 20.'),
    Q('Số 18 tiếng Anh là?', ['Eighty', 'Eighteen', 'Eight (8 — gốc của eighteen)', 'Eleven'], 1, 'Eighteen = 18.'),
    Q('Đếm: thirteen, ___, fifteen', ['sixteen', 'fourteen', 'eleven', 'twelve'], 1, '13 – 14 – 15 → fourteen.'),
  ]),

  M(18, 'Review HK1 (tổng hợp)', [
    Q('"Hello, my name is Lan." nghĩa là?', ['Lan khoẻ không', 'Xin chào, tôi tên Lan', 'Tạm biệt Lan', 'Lan đâu rồi'], 1, 'Hello + My name is = Xin chào, tôi tên là...'),
    Q('Số 7 tiếng Anh là?', ['Nine (9 — đứng sau 7)', 'Seven', 'Six (6 — đứng trước 7)', 'Eight (8 — liền sau 7)'], 1, 'Seven = 7.'),
    Q('"Red" là màu?', ['Xanh (đó là blue/green)', 'Đỏ', 'Vàng (đó là yellow)', 'Tím (đó là purple)'], 1, 'Red = đỏ.'),
    Q('"Mother" có nghĩa là?', ['Bà (đó là grandma)', 'Bố (đó là father)', 'Anh (đó là brother)', 'Mẹ'], 3, 'Mother = mẹ.'),
    Q('Em viết bằng?', ['Foot (bàn chân — dùng để đứng)', 'Nose (mũi — dùng để ngửi)', 'Eye (mắt — dùng để nhìn)', 'Hand'], 3, 'Viết bằng tay = hand.'),
    Q('"This is my book." nghĩa là?', ['Đây là sách của tôi', 'Sách đâu', 'Tôi đọc sách', 'Kia là sách'], 0, 'This is my book = Đây là sách của tôi.'),
    Q('Đáp "How are you?" là?', ['I\'m fine, thank you', 'My name is Lan', 'Goodbye', 'I have a pen'], 0, "I'm fine, thank you = Tôi khoẻ, cảm ơn."),
    Q('"I have two pens." nghĩa là?', ['Tôi không có bút', 'Tôi có hai cục tẩy', 'Tôi có hai quyển sách', 'Tôi có hai cây bút'], 3, 'Two pens = hai cây bút (mực).'),
    Q('Số 20 tiếng Anh là?', ['Twenty', 'Two (2 — gốc của twenty)', 'Twelve', 'Ten (10 — một nửa của 20)'], 0, 'Twenty = 20.'),
    Q('"Goodbye" có nghĩa là?', ['Tạm biệt', 'Cảm ơn', 'Xin chào', 'Xin lỗi'], 0, 'Goodbye = tạm biệt.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Animals: cat, dog, fish, bird', [
    Q('"Cat" có nghĩa là?', ['Con chim', 'Con cá', 'Con chó', 'Con mèo'], 3, 'Cat = con mèo.'),
    Q('"Dog" có nghĩa là?', ['Con cá', 'Con mèo', 'Con chó', 'Con voi'], 2, 'Dog = con chó.'),
    Q('"Fish" có nghĩa là?', ['Con cua', 'Con cá', 'Con mèo', 'Con chim'], 1, 'Fish = con cá.'),
    Q('"Bird" có nghĩa là?', ['Con chim', 'Con chó', 'Con cá', 'Con bò'], 0, 'Bird = con chim.'),
    Q('Con vật nào biết bay?', ['Fish (con cá — sống dưới nước)', 'Bird', 'Cat (con mèo — chỉ chạy nhảy)', 'Dog (con chó — chỉ chạy)'], 1, 'Bird (chim) biết bay.'),
    Q('"I have a cat." nghĩa là?', ['Tôi thích mèo', 'Mèo của tôi đẹp', 'Tôi nuôi mèo', 'Tôi có một con mèo'], 3, 'I have a cat = Tôi có một con mèo.'),
  ]),

  M(20, 'Farm animals: cow, pig, hen, duck', [
    Q('"Cow" có nghĩa là?', ['Con vịt', 'Con bò', 'Con heo', 'Con gà'], 1, 'Cow = con bò.'),
    Q('"Pig" có nghĩa là?', ['Con bò', 'Con gà', 'Con heo (lợn)', 'Con vịt'], 2, 'Pig = con heo / lợn.'),
    Q('"Hen" có nghĩa là?', ['Con vịt', 'Con bò', 'Con gà mái', 'Con thỏ'], 2, 'Hen = con gà mái.'),
    Q('"Duck" có nghĩa là?', ['Con vịt', 'Con ngỗng', 'Con heo', 'Con gà'], 0, 'Duck = con vịt.'),
    Q('Con vật cho ta sữa?', ['Pig (con heo — cho thịt)', 'Hen (gà mái — cho trứng)', 'Cow', 'Duck (con vịt — cho trứng)'], 2, 'Cow (bò) cho ta sữa.'),
    Q('Con vật đẻ trứng (trong các con):', ['Dog (chó — đẻ con)', 'Pig (heo — đẻ con)', 'Hen', 'Cow (bò — đẻ con)'], 2, 'Hen (gà mái) đẻ trứng.'),
  ]),

  M(21, 'Wild animals: lion, tiger, elephant', [
    Q('"Lion" có nghĩa là?', ['Sư tử', 'Hổ (đó là tiger)', 'Gấu (đó là bear)', 'Voi (đó là elephant)'], 0, 'Lion = con sư tử.'),
    Q('"Tiger" có nghĩa là?', ['Sư tử (đó là lion)', 'Báo (đó là leopard)', 'Gấu (đó là bear)', 'Con hổ'], 3, 'Tiger = con hổ.'),
    Q('"Elephant" có nghĩa là?', ['Con hươu', 'Con ngựa', 'Con khỉ', 'Con voi'], 3, 'Elephant = con voi.'),
    Q('Con vật to nhất trong các con:', ['Lion (sư tử — nhỏ hơn voi)', 'Elephant', 'Tiger (hổ — nhỏ hơn voi)', 'Cat (mèo — nhỏ nhất)'], 1, 'Elephant (voi) to nhất.'),
    Q('"Monkey" có nghĩa là?', ['Con cọp', 'Con khỉ', 'Con gấu', 'Con voi'], 1, 'Monkey = con khỉ.'),
    Q('Vua của muôn loài (Anh: King of the jungle)?', ['Elephant', 'Tiger (hổ — chúa sơn lâm Á)', 'Monkey', 'Lion'], 3, 'Sư tử (lion) được gọi là vua muôn loài.'),
  ]),

  M(22, 'Lunar New Year — Happy New Year!', [
    Q('"Happy New Year!" nghĩa là?', ['Chúc mừng năm mới', 'Chúc ngủ ngon', 'Tạm biệt', 'Chúc mừng sinh nhật'], 0, 'Happy New Year = Chúc mừng năm mới.'),
    Q('"Tet" trong tiếng Anh dùng để chỉ?', ['Trung Thu', 'Quốc khánh', 'Lễ Giáng sinh', 'Tết Nguyên Đán'], 3, '"Tet" = Tết Nguyên Đán của Việt Nam.'),
    Q('"Lucky money" là gì?', ['Tiền lì xì', 'Tiền tiêu vặt', 'Tiền học', 'Tiền tiết kiệm'], 0, 'Lucky money = tiền lì xì (mừng tuổi).'),
    Q('"Banh chung" là?', ['Bánh kem', 'Bánh chưng', 'Bánh mì', 'Bánh tét'], 1, 'Banh chung = bánh chưng (món Tết).'),
    Q('"Peach blossom" có nghĩa là?', ['Hoa hồng', 'Hoa cúc', 'Hoa đào', 'Hoa mai'], 2, 'Peach blossom = hoa đào (chơi Tết miền Bắc).'),
    Q('"Apricot blossom" có nghĩa là?', ['Hoa hồng', 'Hoa mai', 'Hoa lan', 'Hoa đào'], 1, 'Apricot blossom = hoa mai (chơi Tết miền Nam).'),
    Q('Em chúc ông bà: "Happy ___ Year!"', ['Long (dài — không hợp nghĩa)', 'Big (to — không dùng trong câu chúc Tết)', 'New', 'Old (cũ — trái nghĩa với New)'], 2, 'Happy New Year = Chúc mừng năm mới.'),
  ]),

  M(23, 'Food: rice, fish, meat, bread', [
    Q('"Rice" có nghĩa là?', ['Mì (đó là noodles)', 'Cá (đó là fish)', 'Bánh mì', 'Cơm/gạo'], 3, 'Rice = cơm / gạo.'),
    Q('"Fish" (món ăn) có nghĩa là?', ['Trứng (đó là egg)', 'Cá', 'Thịt (đó là meat)', 'Cơm (đó là rice)'], 1, 'Fish vừa là con cá, vừa là món cá.'),
    Q('"Meat" có nghĩa là?', ['Trứng (đó là egg)', 'Rau (đó là vegetables)', 'Cá (đó là fish)', 'Thịt'], 3, 'Meat = thịt.'),
    Q('"Bread" có nghĩa là?', ['Bánh mì', 'Mì (đó là noodles)', 'Cơm (đó là rice)', 'Bánh ngọt'], 0, 'Bread = bánh mì.'),
    Q('"Egg" có nghĩa là?', ['Trứng', 'Rau (đó là vegetables)', 'Thịt (đó là meat)', 'Cá (đó là fish)'], 0, 'Egg = quả trứng.'),
    Q('"I eat rice." nghĩa là?', ['Cơm ngon', 'Tôi nấu cơm', 'Tôi thích cơm', 'Tôi ăn cơm'], 3, 'I eat rice = Tôi ăn cơm.'),
  ]),

  M(24, 'Fruits: apple, banana, orange, mango', [
    Q('"Apple" có nghĩa là?', ['Quả xoài', 'Quả cam', 'Quả táo', 'Quả chuối'], 2, 'Apple = quả táo.'),
    Q('"Banana" có nghĩa là?', ['Quả táo', 'Quả nho', 'Quả chuối', 'Quả lê'], 2, 'Banana = quả chuối.'),
    Q('"Orange" (trái cây) có nghĩa là?', ['Quả chanh', 'Quả quýt', 'Quả bưởi', 'Quả cam'], 3, 'Orange = quả cam (cũng là màu cam).'),
    Q('"Mango" có nghĩa là?', ['Quả ổi', 'Quả xoài', 'Quả đu đủ', 'Quả mít'], 1, 'Mango = quả xoài.'),
    Q('"Grape" có nghĩa là?', ['Quả nho', 'Quả dâu', 'Quả lê', 'Quả táo'], 0, 'Grape = quả nho.'),
    Q('"I like apples." nghĩa là?', ['Tôi không thích táo', 'Tôi ăn táo', 'Tôi thích táo', 'Táo ngon'], 2, 'I like = Tôi thích.'),
  ]),

  M(25, 'Drinks: water, milk, juice, tea', [
    Q('"Water" có nghĩa là?', ['Nước ép', 'Sữa (đó là milk)', 'Trà (đó là tea)', 'Nước'], 3, 'Water = nước (lọc).'),
    Q('"Milk" có nghĩa là?', ['Nước (đó là water)', 'Sữa', 'Trà (đó là tea)', 'Cà phê'], 1, 'Milk = sữa.'),
    Q('"Juice" có nghĩa là?', ['Sữa (đó là milk)', 'Nước ép trái cây', 'Bia (đó là beer)', 'Trà (đó là tea)'], 1, 'Juice = nước ép trái cây.'),
    Q('"Tea" có nghĩa là?', ['Trà', 'Cà phê', 'Sữa (đó là milk)', 'Nước (đó là water)'], 0, 'Tea = trà.'),
    Q('"Orange juice" có nghĩa là?', ['Trà cam', 'Sữa cam', 'Nước cam ép', 'Cam quả'], 2, 'Orange juice = nước cam (ép).'),
    Q('"I drink milk." nghĩa là?', ['Tôi thích sữa', 'Tôi uống sữa', 'Sữa ngon', 'Tôi ăn sữa'], 1, 'I drink = Tôi uống.'),
  ]),

  M(26, 'Weather (1): hot, cold, warm, cool', [
    Q('"Hot" có nghĩa là?', ['Lạnh (đó là cold)', 'Ấm (đó là warm)', 'Nóng', 'Mát (đó là cool)'], 2, 'Hot = nóng.'),
    Q('"Cold" có nghĩa là?', ['Ấm (đó là warm)', 'Mát (đó là cool)', 'Lạnh', 'Nóng (đó là hot)'], 2, 'Cold = lạnh.'),
    Q('"Warm" có nghĩa là?', ['Mát (đó là cool)', 'Nóng (đó là hot)', 'Lạnh (đó là cold)', 'Ấm'], 3, 'Warm = ấm áp.'),
    Q('"Cool" có nghĩa là?', ['Lạnh (đó là cold)', 'Nóng (đó là hot)', 'Ấm (đó là warm)', 'Mát mẻ'], 3, 'Cool = mát mẻ.'),
    Q('Mùa hè ở Việt Nam thì?', ['Cold (lạnh — đặc trưng mùa đông)', 'Hot', 'Cool (mát mẻ — đặc trưng mùa thu)', 'Warm (ấm — đặc trưng mùa xuân)'], 1, 'Mùa hè = hot (nóng).'),
    Q('"It is cold today." nghĩa là?', ['Hôm nay lạnh', 'Hôm nay nóng', 'Hôm nay mát', 'Hôm nay ấm'], 0, 'It is cold = trời lạnh.'),
  ]),

  M(27, 'Weather (2): sunny, rainy, cloudy, windy', [
    Q('"Sunny" có nghĩa là?', ['Có nắng', 'Có gió', 'Có mưa', 'Có mây'], 0, 'Sunny = có nắng.'),
    Q('"Rainy" có nghĩa là?', ['Có mây', 'Có mưa', 'Có tuyết', 'Có nắng'], 1, 'Rainy = có mưa.'),
    Q('"Cloudy" có nghĩa là?', ['Có nhiều mây', 'Có nắng', 'Có sương', 'Có gió'], 0, 'Cloudy = nhiều mây.'),
    Q('"Windy" có nghĩa là?', ['Có gió', 'Có mưa', 'Có bão', 'Có nắng'], 0, 'Windy = có gió.'),
    Q('"It is sunny today." nghĩa là?', ['Hôm nay mưa', 'Hôm nay gió', 'Hôm nay nắng', 'Hôm nay lạnh'], 2, 'It is sunny = Hôm nay trời nắng.'),
    Q('"How is the weather?" hỏi gì?', ['Bạn khoẻ không?', 'Hôm nay thứ mấy?', 'Thời tiết thế nào?', 'Bạn ở đâu?'], 2, 'How is the weather? = Thời tiết hôm nay thế nào?'),
  ]),

  M(28, 'Days of week (Mon-Wed-Fri-Sun)', [
    Q('"Monday" là thứ?', ['Chủ nhật', 'Thứ tư', 'Thứ ba', 'Thứ hai'], 3, 'Monday = thứ hai.'),
    Q('"Wednesday" là thứ?', ['Thứ ba', 'Thứ tư', 'Thứ sáu', 'Thứ năm'], 1, 'Wednesday = thứ tư.'),
    Q('"Friday" là thứ?', ['Thứ sáu', 'Chủ nhật', 'Thứ bảy', 'Thứ năm'], 0, 'Friday = thứ sáu.'),
    Q('"Sunday" là?', ['Thứ bảy', 'Thứ sáu', 'Thứ hai', 'Chủ nhật'], 3, 'Sunday = chủ nhật.'),
    Q('Một tuần có bao nhiêu ngày?', ['8', '6', '5', '7'], 3, 'Một tuần = 7 days.'),
    Q('"Today is Monday." nghĩa là?', ['Ngày mai là thứ hai', 'Hôm qua là thứ hai', 'Hôm nay là chủ nhật', 'Hôm nay là thứ hai'], 3, 'Today is Monday = Hôm nay là thứ hai.'),
  ]),

  M(29, 'Days of week revisit (full 7 days)', [
    Q('"Tuesday" là thứ?', ['Thứ ba', 'Thứ hai', 'Thứ năm', 'Thứ tư'], 0, 'Tuesday = thứ ba.'),
    Q('"Thursday" là thứ?', ['Thứ năm', 'Thứ tư', 'Thứ bảy', 'Thứ sáu'], 0, 'Thursday = thứ năm.'),
    Q('"Saturday" là thứ?', ['Thứ bảy', 'Thứ sáu', 'Chủ nhật', 'Thứ hai'], 0, 'Saturday = thứ bảy.'),
    Q('Sau "Tuesday" là?', ['Friday', 'Sunday', 'Wednesday', 'Monday'], 2, 'Sau thứ ba (Tuesday) là thứ tư (Wednesday).'),
    Q('Trước "Friday" là?', ['Thursday', 'Monday', 'Sunday', 'Saturday'], 0, 'Trước thứ sáu (Friday) là thứ năm (Thursday).'),
    Q('Hai ngày cuối tuần là?', ['Mon & Tue', 'Sun & Mon', 'Sat & Sun', 'Fri & Sat'], 2, 'Weekend = Saturday & Sunday.'),
  ]),

  M(30, 'Toys: ball, doll, kite, car', [
    Q('"Ball" có nghĩa là?', ['Ô tô (đó là car)', 'Quả bóng', 'Búp bê', 'Diều (đó là kite)'], 1, 'Ball = quả bóng.'),
    Q('"Doll" có nghĩa là?', ['Búp bê', 'Quả bóng', 'Ô tô (đó là car)', 'Diều (đó là kite)'], 0, 'Doll = búp bê.'),
    Q('"Kite" có nghĩa là?', ['Xe (đó là car)', 'Diều', 'Bóng (đó là ball)', 'Tàu (đó là ship/train)'], 1, 'Kite = con diều.'),
    Q('"Car" (đồ chơi) có nghĩa là?', ['Búp bê', 'Tàu hoả', 'Máy bay', 'Ô tô (đồ chơi)'], 3, 'Car = ô tô.'),
    Q('"Teddy bear" là?', ['Búp bê', 'Gấu bông', 'Bóng (đó là ball)', 'Diều (đó là kite)'], 1, 'Teddy bear = gấu bông.'),
    Q('"I have a red ball." nghĩa là?', ['Tôi có quả bóng đỏ', 'Tôi không có bóng', 'Bóng của tôi to', 'Tôi thích bóng'], 0, 'I have a red ball = Tôi có một quả bóng đỏ.'),
  ]),

  M(31, 'Clothes: shirt, dress, hat, shoes', [
    Q('"Shirt" có nghĩa là?', ['Váy (đó là dress/skirt)', 'Mũ (đó là hat/cap)', 'Áo sơ mi', 'Giày (đó là shoes)'], 2, 'Shirt = áo sơ mi.'),
    Q('"Dress" có nghĩa là?', ['Cái mũ', 'Áo sơ mi', 'Cái váy', 'Đôi giày'], 2, 'Dress = cái váy / đầm.'),
    Q('"Hat" có nghĩa là?', ['Giày (đó là shoes)', 'Áo (đó là shirt)', 'Mũ/nón', 'Quần (đó là trousers/pants)'], 2, 'Hat = cái mũ / nón.'),
    Q('"Shoes" có nghĩa là?', ['Mũ (đó là hat)', 'Áo (đó là shirt)', 'Đôi giày', 'Tất (đó là socks)'], 2, 'Shoes = đôi giày.'),
    Q('"T-shirt" có nghĩa là?', ['Áo khoác', 'Quần (đó là trousers/pants)', 'Áo thun', 'Váy (đó là dress)'], 2, 'T-shirt = áo phông / áo thun.'),
    Q('"I wear a hat." nghĩa là?', ['Tôi mua mũ', 'Tôi có mũ', 'Tôi thích mũ', 'Tôi đội mũ'], 3, 'Wear = mặc / đội.'),
  ]),

  M(32, 'Daily routine: get up, go to school, eat, sleep', [
    Q('"Get up" có nghĩa là?', ['Thức dậy', 'Đi ngủ', 'Đi học', 'Ăn cơm'], 0, 'Get up = thức dậy.'),
    Q('"Go to school" có nghĩa là?', ['Đi chơi', 'Đi ngủ', 'Đi học', 'Về nhà'], 2, 'Go to school = đi đến trường / đi học.'),
    Q('"Eat" có nghĩa là?', ['Ngủ (đó là sleep)', 'Chơi (đó là play)', 'Uống (đó là drink)', 'Ăn'], 3, 'Eat = ăn.'),
    Q('"Sleep" có nghĩa là?', ['Ngủ', 'Học (đó là study/learn)', 'Ăn (đó là eat)', 'Uống (đó là drink)'], 0, 'Sleep = ngủ.'),
    Q('"Brush my teeth" có nghĩa là?', ['Tắm (đó là take a bath/shower)', 'Rửa mặt', 'Đánh răng', 'Chải tóc'], 2, 'Brush my teeth = đánh răng.'),
    Q('Buổi sáng em ___ rồi đi học:', ['sleep (ngủ — buổi tối làm)', 'get up', 'eat dinner', 'go to bed'], 1, 'Sáng dậy = get up; dinner = bữa tối.'),
  ]),

  M(33, 'Action verbs: run, jump, swim, sing', [
    Q('"Run" có nghĩa là?', ['Bơi (đó là swim)', 'Chạy', 'Đi (đó là walk)', 'Nhảy (đó là jump)'], 1, 'Run = chạy.'),
    Q('"Jump" có nghĩa là?', ['Hát (đó là sing)', 'Chạy (đó là run)', 'Nhảy', 'Bơi (đó là swim)'], 2, 'Jump = nhảy.'),
    Q('"Swim" có nghĩa là?', ['Đọc (đó là read)', 'Bơi', 'Chạy (đó là run)', 'Hát (đó là sing)'], 1, 'Swim = bơi.'),
    Q('"Sing" có nghĩa là?', ['Múa (đó là dance)', 'Nói (đó là talk/speak)', 'Cười (đó là laugh/smile)', 'Hát'], 3, 'Sing = hát.'),
    Q('"Dance" có nghĩa là?', ['Hát (đó là sing)', 'Bơi (đó là swim)', 'Chạy (đó là run)', 'Nhảy múa'], 3, 'Dance = nhảy múa.'),
    Q('"I can swim." nghĩa là?', ['Tôi có thể bơi', 'Tôi thích bơi', 'Tôi không biết bơi', 'Tôi đi bơi'], 0, 'I can = Tôi có thể.'),
  ]),

  M(34, "Likes & dislikes: I like.../ I don't like...", [
    Q('"I like cats." nghĩa là?', ['Tôi có mèo', 'Tôi không thích mèo', 'Tôi ghét mèo', 'Tôi thích mèo'], 3, 'I like = Tôi thích.'),
    Q('"I don\'t like fish." nghĩa là?', ['Tôi thích cá', 'Tôi không thích cá', 'Tôi ăn cá', 'Tôi có cá'], 1, "I don't like = Tôi không thích."),
    Q('"Do you like apples?" nghĩa là?', ['Bạn thích táo không?', 'Bạn có táo không?', 'Bạn ăn táo không?', 'Cho tôi táo'], 0, 'Do you like ...? = Bạn có thích ... không?'),
    Q('Trả lời CÓ thích: "Do you like milk?" – ___', ['No, I do', 'Yes, I do', 'Yes, I am', 'No, I\'m not'], 1, "Yes, I do / No, I don't."),
    Q('Trả lời KHÔNG thích:', ['No, I do', 'Yes, I don\'t', 'No, I don\'t', 'Yes, I\'m not'], 2, "No, I don't = Không, tôi không thích."),
    Q('"She likes mangoes." nghĩa là?', ['Cô ấy không thích xoài', 'Cô ấy thích xoài', 'Cô ấy có xoài', 'Cô ấy ăn xoài'], 1, 'She likes = Cô ấy thích (ngôi 3 dùng likes).'),
  ]),

  M(35, 'Where is...?: in, on, under', [
    Q('"Where is my book?" có nghĩa là?', ['Sách tôi đâu rồi?', 'Sách tôi đẹp', 'Cho tôi sách', 'Sách của ai?'], 0, 'Where is...? = ... ở đâu?'),
    Q('"In" có nghĩa là?', ['Dưới (đó là under)', 'Trong', 'Trên (đó là on)', 'Cạnh (đó là next to/beside)'], 1, 'In = ở trong.'),
    Q('"On" có nghĩa là?', ['Trong (đó là in)', 'Cạnh (đó là next to)', 'Dưới (đó là under)', 'Trên (bề mặt)'], 3, 'On = ở trên (bề mặt, có chạm).'),
    Q('"Under" có nghĩa là?', ['Dưới', 'Trong (đó là in)', 'Trước (đó là in front of)', 'Trên (đó là on)'], 0, 'Under = ở dưới (gầm).'),
    Q('"The cat is under the table." nghĩa là?', ['Con mèo trong bàn', 'Con mèo trên bàn', 'Con mèo cạnh bàn', 'Con mèo dưới gầm bàn'], 3, 'Under the table = dưới gầm bàn.'),
    Q('"The book is on the desk." nghĩa là?', ['Sách cạnh bàn', 'Sách dưới bàn', 'Sách trên bàn', 'Sách trong bàn'], 2, 'On the desk = trên (mặt) bàn.'),
  ]),

  M(36, 'Review whole year', [
    Q('"Hello! How are you?" Đáp lại:', ['I have a pen', 'Goodbye', 'My name is Lan', 'I\'m fine, thank you'], 3, "I'm fine, thank you = trả lời lịch sự cho How are you?"),
    Q('Số 15 tiếng Anh là?', ['Fourteen', 'Five (5 — gốc của fifteen)', 'Fifty (50 — dễ nhầm với fifteen)', 'Fifteen'], 3, 'Fifteen = 15.'),
    Q('"Mother and father" là?', ['Ông bà', 'Bạn bè', 'Bố mẹ', 'Anh chị em'], 2, 'Mother & father = bố mẹ (parents).'),
    Q('"I have two ___." (2 con mèo)', ['a cat (số ít, chỉ một con)', 'the cat', 'cats', 'cat (số ít, không có "s")'], 2, 'Số nhiều: 2 cats.'),
    Q('"Apple, banana, mango" là?', ['Đồ chơi', 'Con vật', 'Đồ uống', 'Trái cây'], 3, 'Đây đều là fruits (trái cây).'),
    Q('"It is sunny and hot." nghĩa là?', ['Trời ấm và mát', 'Trời lạnh và mưa', 'Trời mây và gió', 'Trời nắng và nóng'], 3, 'Sunny = nắng; hot = nóng.'),
    Q('Hôm nay là "Friday", ngày mai là?', ['Thursday', 'Sunday', 'Monday', 'Saturday'], 3, 'Sau Friday là Saturday.'),
    Q('"The cat is ___ the box." (mèo ở trong hộp)', ['in', 'under (dưới gầm hộp)', 'at (ở chỗ, không dùng cho "trong hộp")', 'on (trên nắp hộp)'], 0, 'In = ở trong.'),
    Q('"I can sing and dance." nghĩa là?', ['Tôi có thể hát và múa', 'Tôi không hát', 'Tôi đi hát múa', 'Tôi thích hát múa'], 0, 'I can = Tôi có thể.'),
    Q('"Goodbye! See you tomorrow." nghĩa là?', ['Cảm ơn nhé', 'Xin lỗi nhé', 'Tạm biệt, mai gặp lại', 'Xin chào, mai gặp'], 2, 'Goodbye + See you tomorrow = Tạm biệt, hẹn mai gặp lại.'),
  ], { difficulty: 3 }),
];

export const P2TA_SCENARIOS = indexBy(P2TA_WEEKS);
