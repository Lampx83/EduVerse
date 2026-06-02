// ============================================================
// Trường Mầm non — TUẦN CHỦ ĐỀ (36 tuần × 3 độ tuổi)
// Lấy cảm hứng theo Chương trình GDMN của Bộ GD&ĐT VN
// ============================================================
// Mỗi tuần là 1 scenario quiz, 4 câu ngắn, đầy emoji, 3 lựa chọn.
// id: N1-wXX (Mầm 3t), N2-wXX (Chồi 4t), N3-wXX (Lá 5t).
// Chủ đề lớn theo tháng:
//   T9  — Trường Mầm non của bé
//   T10 — Bản thân (cơ thể, giác quan, cảm xúc)
//   T11 — Gia đình
//   T12 — Nghề nghiệp
//   T1  — Thế giới động vật
//   T2  — Tết và mùa xuân
//   T3  — Thực vật
//   T4  — Giao thông
//   T5  — Nước & hiện tượng tự nhiên
//   T6+ — Quê hương · Bác Hồ · Trường Tiểu học
// ============================================================

const q = (id, title, yearLevel, questions) => ({
  id, title, kind: 'quiz', yearLevel, subject: 'lam-quen-toan', difficulty: 1, questions,
});
const Q = (stem, choices, answer, explanation) => ({ stem, choices, answer, explanation });

// ============================================================
// ── MẦM (3 tuổi · level 1) — 36 tuần ──
// Đếm 1-5, màu cơ bản, hình tròn-vuông, hành vi ngoan, từ vựng đơn giản.
// ============================================================
export const PRESCHOOL_M_WEEKS = [
  // ── Tháng 9: Trường Mầm non của bé ──
  q('N1-w01', 'Tuần 1 — Bé đến lớp 🏫', 1, [
    Q('Đến lớp, bé chào ai trước? 👩‍🏫', ['Cô giáo', 'Cái bàn', 'Không chào'], 0, 'Bé chào cô giáo trước nhé.'),
    Q('Đồ chơi nào hình tròn? ⚽', ['🧸 Gấu bông', '⚽ Quả bóng', '📚 Quyển sách'], 1, 'Quả bóng có dạng hình tròn.'),
    Q('🧒🧒 Có mấy bạn?', ['1 bạn', '2 bạn', '3 bạn'], 1, 'Có 2 bạn.'),
    Q('Lớp Mầm non có cô và ai nữa?', ['Các bạn', 'Bố mẹ', 'Bác sĩ'], 0, 'Lớp có cô và các bạn cùng học.'),
  ]),
  q('N1-w02', 'Tuần 2 — Cô giáo của bé 👩‍🏫', 1, [
    Q('Ai dạy bé hát ở lớp? 🎵', ['Cô giáo', 'Em bé', 'Chú mèo'], 0, 'Cô giáo dạy bé hát.'),
    Q('Cô khen bé khi bé làm gì? ✨', ['Ngoan ngoãn', 'Khóc nhè', 'Đánh bạn'], 0, 'Bé ngoan sẽ được cô khen.'),
    Q('🌸 Bông hoa có mấy cánh? (đếm: 🌸🌸🌸)', ['2', '3', '4'], 1, 'Có 3 bông hoa.'),
    Q('Khi cô gọi tên, bé làm gì?', ['Dạ cô', 'Im lặng', 'Cười to'], 0, 'Bé dạ cô để trả lời.'),
  ]),
  q('N1-w03', 'Tuần 3 — Bạn bè của bé 👫', 1, [
    Q('Bé chơi cùng ai ở lớp? 🤝', ['Các bạn', 'Một mình', 'Ô tô'], 0, 'Bé chơi cùng các bạn.'),
    Q('🧒🧒🧒 Có mấy bạn?', ['2', '3', '4'], 1, 'Có 3 bạn.'),
    Q('Khi bạn ngã, bé làm gì? 🥺', ['Đỡ bạn dậy', 'Cười bạn', 'Bỏ đi'], 0, 'Bé biết yêu thương đỡ bạn dậy.'),
    Q('Khi chơi chung, bé nên làm gì? 🧸', ['Chia đồ chơi', 'Giành đồ', 'Khóc'], 0, 'Bé chia đồ chơi cho bạn.'),
  ]),
  q('N1-w04', 'Tuần 4 — Đồ chơi của bé 🧸', 1, [
    Q('Sau khi chơi xong, bé làm gì?', ['Cất gọn', 'Vứt bừa', 'Bỏ về'], 0, 'Bé cất đồ chơi gọn gàng.'),
    Q('🚗 là đồ chơi gì?', ['Ô tô', 'Búp bê', 'Bóng'], 0, 'Đó là ô tô đồ chơi.'),
    Q('🧸🧸 Có mấy gấu bông?', ['1', '2', '3'], 1, 'Có 2 chú gấu.'),
    Q('Quả bóng ⚽ có màu thường thấy?', ['Đỏ', 'Cầu vồng', 'Tím'], 0, 'Bóng hay có màu đỏ rực rỡ.'),
  ]),

  // ── Tháng 10: Bản thân ──
  q('N1-w05', 'Tuần 5 — Cơ thể của bé 🧒', 1, [
    Q('Bé có mấy mắt? 👀', ['1', '2', '3'], 1, 'Bé có 2 mắt.'),
    Q('✋ Một bàn tay có mấy ngón?', ['4', '5', '6'], 1, 'Một bàn tay có 5 ngón.'),
    Q('Bé dùng gì để nghe? 👂', ['Tai', 'Miệng', 'Chân'], 0, 'Bé nghe bằng tai.'),
    Q('Bé đi bằng gì? 🦶', ['Tay', 'Chân', 'Đầu'], 1, 'Bé đi bằng đôi chân.'),
  ]),
  q('N1-w06', 'Tuần 6 — Năm giác quan 👃👅', 1, [
    Q('Bé ngửi hoa 🌸 bằng gì?', ['Mũi', 'Tai', 'Mắt'], 0, 'Bé ngửi bằng mũi.'),
    Q('Bé nếm kẹo 🍬 bằng gì?', ['Lưỡi', 'Mũi', 'Tay'], 0, 'Bé nếm bằng lưỡi.'),
    Q('Bé nhìn 👀 bằng gì?', ['Mắt', 'Tai', 'Miệng'], 0, 'Bé nhìn bằng đôi mắt.'),
    Q('Bé sờ vào bông 🐰 bằng gì?', ['Tay', 'Chân', 'Đầu'], 0, 'Bé sờ bằng tay.'),
  ]),
  q('N1-w07', 'Tuần 7 — Cảm xúc của bé 😊', 1, [
    Q('😊 là cảm xúc gì?', ['Vui', 'Buồn', 'Giận'], 0, 'Mặt 😊 là vui vẻ.'),
    Q('😢 là cảm xúc gì?', ['Vui', 'Buồn', 'Sợ'], 1, 'Mặt 😢 là buồn.'),
    Q('Khi được mẹ ôm, bé thấy?', ['Vui sướng', 'Khóc', 'Sợ'], 0, 'Bé thấy vui sướng và ấm áp.'),
    Q('Bé nên cười 😄 mỗi ngày bao nhiêu lần?', ['Thật nhiều', 'Một lần', 'Không cười'], 0, 'Bé nên cười thật nhiều mỗi ngày.'),
  ]),
  q('N1-w08', 'Tuần 8 — Vệ sinh thân thể 🧼', 1, [
    Q('Trước khi ăn 🍚, bé phải làm gì?', ['Rửa tay', 'Đi chơi', 'Ngủ'], 0, 'Bé rửa tay sạch trước khi ăn.'),
    Q('Bé đánh răng 🪥 mỗi ngày mấy lần?', ['0', '2', '5'], 1, 'Bé đánh răng 2 lần: sáng và tối.'),
    Q('🧼 dùng để làm gì?', ['Rửa tay', 'Ăn', 'Xem'], 0, 'Xà phòng dùng để rửa tay sạch.'),
    Q('Khi hắt hơi, bé che bằng?', ['Tay', 'Sách', 'Đồ chơi'], 0, 'Bé che miệng bằng tay.'),
  ]),

  // ── Tháng 11: Gia đình ──
  q('N1-w09', 'Tuần 9 — Gia đình của bé 👨‍👩‍👧', 1, [
    Q('Mẹ của bé là ai? 👩', ['Mẹ', 'Cô giáo', 'Bạn'], 0, 'Người sinh ra bé là mẹ.'),
    Q('Bố của bé là ai? 👨', ['Bố', 'Bác sĩ', 'Anh trai'], 0, 'Người dắt bé đi là bố.'),
    Q('👨‍👩‍👧 Trong tranh có mấy người?', ['2', '3', '4'], 1, 'Có 3 người: bố, mẹ, bé.'),
    Q('Bé yêu ai nhất nhà? ❤️', ['Cả nhà', 'Đồ chơi', 'TV'], 0, 'Bé yêu cả gia đình.'),
  ]),
  q('N1-w10', 'Tuần 10 — Ông bà của bé 👴👵', 1, [
    Q('👵 là ai trong gia đình?', ['Bà', 'Mẹ', 'Bạn'], 0, 'Đó là bà của bé.'),
    Q('Bé chào ông bà bằng gì? 🙇', ['Khoanh tay', 'Đá chân', 'Trốn'], 0, 'Bé khoanh tay chào ông bà.'),
    Q('Ông bà thương bé như? 💖', ['Rất nhiều', 'Một chút', 'Không'], 0, 'Ông bà thương bé rất nhiều.'),
    Q('👴👵 Có mấy người?', ['1', '2', '3'], 1, 'Có 2 người: ông và bà.'),
  ]),
  q('N1-w11', 'Tuần 11 — Nhà của bé 🏠', 1, [
    Q('Bé ngủ ở đâu? 🛏️', ['Giường', 'Bếp', 'Sân'], 0, 'Bé ngủ trên giường.'),
    Q('Mẹ nấu cơm ở đâu? 🍳', ['Bếp', 'Phòng ngủ', 'Sân'], 0, 'Mẹ nấu cơm ở bếp.'),
    Q('Cửa nhà 🚪 dùng để?', ['Ra vào', 'Ăn cơm', 'Ngủ'], 0, 'Cửa để mọi người ra vào.'),
    Q('🏠 Có mấy ngôi nhà? (🏠🏠)', ['1', '2', '3'], 1, 'Có 2 ngôi nhà.'),
  ]),
  q('N1-w12', 'Tuần 12 — Đồ dùng trong nhà 🪑', 1, [
    Q('🪑 dùng để làm gì?', ['Ngồi', 'Ăn', 'Đọc'], 0, 'Ghế để ngồi.'),
    Q('Đèn 💡 giúp gì cho bé?', ['Sáng', 'Nóng', 'Mát'], 0, 'Đèn giúp căn phòng sáng.'),
    Q('🍽️ dùng để?', ['Đựng cơm', 'Ngủ', 'Chơi'], 0, 'Cái đĩa để đựng cơm và thức ăn.'),
    Q('Quạt 🌀 thổi gió ra sao?', ['Mát', 'Nóng', 'Lạnh buốt'], 0, 'Quạt thổi gió mát.'),
  ]),

  // ── Tháng 12: Nghề nghiệp ──
  q('N1-w13', 'Tuần 13 — Bác sĩ và y tá 👨‍⚕️', 1, [
    Q('Khi ốm, bé đến gặp ai? 👨‍⚕️', ['Bác sĩ', 'Đầu bếp', 'Tài xế'], 0, 'Bé đến gặp bác sĩ khi ốm.'),
    Q('💉 dùng để làm gì?', ['Tiêm thuốc', 'Ăn', 'Đọc'], 0, 'Kim tiêm để tiêm thuốc chữa bệnh.'),
    Q('Bác sĩ mặc áo màu gì? 🥼', ['Trắng', 'Đen', 'Tím'], 0, 'Bác sĩ thường mặc áo trắng.'),
    Q('Khi tiêm 💉, bé nên?', ['Dũng cảm', 'Khóc to', 'Trốn'], 0, 'Bé dũng cảm để mau khỏe.'),
  ]),
  q('N1-w14', 'Tuần 14 — Cô giáo và thầy giáo 👨‍🏫', 1, [
    Q('Ai dạy bé học chữ? 📚', ['Cô giáo', 'Đầu bếp', 'Bác nông dân'], 0, 'Cô giáo dạy bé học.'),
    Q('📚📚 Có mấy quyển sách?', ['1', '2', '3'], 1, 'Có 2 quyển sách.'),
    Q('Đến lớp, bé mang theo gì? 🎒', ['Cặp sách', 'Đồ chơi', 'TV'], 0, 'Bé mang cặp sách đến lớp.'),
    Q('Cô viết bài bằng gì? ✏️', ['Bút', 'Tay không', 'Hoa'], 0, 'Cô viết bằng bút.'),
  ]),
  q('N1-w15', 'Tuần 15 — Đầu bếp 👨‍🍳', 1, [
    Q('Ai nấu ăn ngon ở nhà hàng? 👨‍🍳', ['Đầu bếp', 'Bác sĩ', 'Công an'], 0, 'Đầu bếp nấu ăn ngon.'),
    Q('Đầu bếp đội gì trên đầu? 🎩', ['Mũ trắng cao', 'Mũ bảo hiểm', 'Khăn'], 0, 'Đầu bếp đội mũ trắng cao.'),
    Q('🍚 là món gì?', ['Cơm', 'Bánh', 'Sữa'], 0, 'Đó là cơm.'),
    Q('🍜🍜🍜 Có mấy bát mì?', ['2', '3', '4'], 1, 'Có 3 bát mì.'),
  ]),
  q('N1-w16', 'Tuần 16 — Công an 👮', 1, [
    Q('Ai bắt kẻ xấu giúp dân? 👮', ['Công an', 'Đầu bếp', 'Cô giáo'], 0, 'Công an bắt kẻ xấu.'),
    Q('Đèn 🚦 đỏ thì xe phải?', ['Dừng lại', 'Đi tiếp', 'Quay đầu'], 0, 'Đèn đỏ thì dừng lại.'),
    Q('Công an mặc áo màu? 👮', ['Xanh', 'Hồng', 'Vàng'], 0, 'Công an mặc áo xanh.'),
    Q('Khi lạc đường, bé nhờ ai? 🤔', ['Công an', 'Người lạ', 'Tự đi'], 0, 'Bé nhờ chú công an.'),
  ]),

  // ── Tháng 1: Thế giới động vật ──
  q('N1-w17', 'Tuần 17 — Vật nuôi trong nhà 🐶', 1, [
    Q('🐶 kêu thế nào?', ['Gâu gâu', 'Meo meo', 'Ò ó o'], 0, 'Chó kêu gâu gâu.'),
    Q('🐱 kêu thế nào?', ['Gâu gâu', 'Meo meo', 'Quạc quạc'], 1, 'Mèo kêu meo meo.'),
    Q('🐶🐶 Có mấy con chó?', ['1', '2', '3'], 1, 'Có 2 chú chó.'),
    Q('🐔 cho ta gì để ăn?', ['Trứng', 'Sữa', 'Lá'], 0, 'Gà mái đẻ trứng cho ta ăn.'),
  ]),
  q('N1-w18', 'Tuần 18 — Động vật trong rừng 🦁', 1, [
    Q('🐘 có vòi dùng để?', ['Hút nước', 'Bay', 'Bơi'], 0, 'Voi dùng vòi hút nước.'),
    Q('🦁 là vua rừng xanh?', ['Đúng', 'Sai', 'Không biết'], 0, 'Sư tử là vua rừng.'),
    Q('🐒 thích ăn gì?', ['Chuối', 'Cá', 'Cỏ'], 0, 'Khỉ thích ăn chuối.'),
    Q('🐰🐰🐰 Có mấy thỏ?', ['2', '3', '4'], 1, 'Có 3 chú thỏ.'),
  ]),
  q('N1-w19', 'Tuần 19 — Động vật dưới nước 🐟', 1, [
    Q('🐟 sống ở đâu?', ['Dưới nước', 'Trên cây', 'Trong nhà'], 0, 'Cá sống dưới nước.'),
    Q('🐠🐠 Có mấy cá?', ['1', '2', '3'], 1, 'Có 2 con cá.'),
    Q('🦀 đi như thế nào?', ['Ngang', 'Thẳng', 'Lùi'], 0, 'Cua đi ngang ngộ nghĩnh.'),
    Q('🐢 đi nhanh hay chậm?', ['Nhanh', 'Chậm', 'Như xe máy'], 1, 'Rùa đi rất chậm.'),
  ]),
  q('N1-w20', 'Tuần 20 — Côn trùng nhỏ 🐝', 1, [
    Q('🐝 cho ta gì ngọt?', ['Mật', 'Sữa', 'Trứng'], 0, 'Ong cho ta mật ong ngọt.'),
    Q('🦋 có nhiều màu rực rỡ?', ['Có', 'Không', 'Đen thui'], 0, 'Bướm có cánh nhiều màu sặc sỡ.'),
    Q('🐜 hay tha mồi đi đâu?', ['Về tổ', 'Lên trời', 'Xuống biển'], 0, 'Kiến tha mồi về tổ.'),
    Q('🐞🐞 Có mấy bọ?', ['1', '2', '3'], 1, 'Có 2 con bọ rùa.'),
  ]),

  // ── Tháng 2: Tết và mùa xuân ──
  q('N1-w21', 'Tuần 21 — Tết Nguyên đán 🧧', 1, [
    Q('Ngày Tết bé nhận gì? 🧧', ['Bao lì xì', 'Bài tập', 'Roi'], 0, 'Ngày Tết bé nhận bao lì xì đỏ.'),
    Q('Hoa Tết miền Bắc là? 🌸', ['Hoa đào hồng', 'Hoa cúc', 'Hoa sen'], 0, 'Miền Bắc có hoa đào hồng.'),
    Q('Hoa Tết miền Nam là? 🌼', ['Hoa mai vàng', 'Hoa đào', 'Hoa hồng'], 0, 'Miền Nam có hoa mai vàng.'),
    Q('Tết bé chúc ông bà gì?', ['Sức khỏe', 'Đồ chơi', 'Tiền'], 0, 'Bé chúc ông bà sức khỏe.'),
  ]),
  q('N1-w22', 'Tuần 22 — Bánh chưng bánh tét 🍱', 1, [
    Q('Bánh chưng có hình gì?', ['Vuông', 'Tròn', 'Tam giác'], 0, 'Bánh chưng có hình vuông.'),
    Q('Bánh chưng gói bằng lá? 🍃', ['Lá dong xanh', 'Lá khô', 'Giấy'], 0, 'Bánh chưng gói bằng lá dong xanh.'),
    Q('Bánh chưng làm từ gạo gì? 🌾', ['Gạo nếp', 'Gạo tẻ', 'Bột mì'], 0, 'Bánh chưng làm từ gạo nếp dẻo.'),
    Q('🍱🍱 Có mấy bánh?', ['1', '2', '3'], 1, 'Có 2 chiếc bánh.'),
  ]),
  q('N1-w23', 'Tuần 23 — Mùa xuân ấm áp 🌸', 1, [
    Q('Mùa xuân thời tiết thế nào?', ['Ấm áp', 'Rét buốt', 'Nóng'], 0, 'Mùa xuân ấm áp dễ chịu.'),
    Q('🌸🌸🌸 Có mấy hoa?', ['2', '3', '4'], 1, 'Có 3 bông hoa.'),
    Q('Cây cối mùa xuân thế nào?', ['Đâm chồi xanh', 'Khô', 'Rụng hết'], 0, 'Cây đâm chồi xanh non.'),
    Q('🐦 mùa xuân thường?', ['Hót líu lo', 'Ngủ', 'Im lặng'], 0, 'Chim hót líu lo đón xuân.'),
  ]),
  q('N1-w24', 'Tuần 24 — Lễ hội xuân 🎉', 1, [
    Q('🎈🎈 Có mấy bóng bay?', ['1', '2', '3'], 1, 'Có 2 quả bóng.'),
    Q('Khi đi lễ hội, bé phải?', ['Đi cùng người lớn', 'Đi một mình', 'Chạy lung tung'], 0, 'Bé phải đi cùng người lớn.'),
    Q('🥁 dùng để làm gì?', ['Đánh kêu', 'Ăn', 'Đọc'], 0, 'Trống dùng để đánh kêu vang.'),
    Q('Múa lân 🦁 vào dịp gì?', ['Tết', 'Đi ngủ', 'Đi học'], 0, 'Múa lân vào dịp Tết.'),
  ]),

  // ── Tháng 3: Thực vật ──
  q('N1-w25', 'Tuần 25 — Cây xanh 🌳', 1, [
    Q('Cây 🌳 có lá màu gì?', ['Xanh', 'Tím', 'Đen'], 0, 'Lá cây màu xanh.'),
    Q('🌳🌳 Có mấy cây?', ['1', '2', '3'], 1, 'Có 2 cây xanh.'),
    Q('Cây cần gì để sống? 💧', ['Nước', 'Kẹo', 'Đá'], 0, 'Cây cần nước để sống.'),
    Q('Cây cho ta gì để thở? 🌬️', ['Khí mát', 'Khói', 'Bụi'], 0, 'Cây cho ta khí trong lành.'),
  ]),
  q('N1-w26', 'Tuần 26 — Các loài hoa 🌹', 1, [
    Q('🌹 là hoa gì?', ['Hoa hồng', 'Hoa cúc', 'Hoa mai'], 0, 'Đó là hoa hồng đỏ.'),
    Q('🌻 có màu gì?', ['Vàng', 'Đen', 'Tím'], 0, 'Hoa hướng dương màu vàng.'),
    Q('🌷🌷🌷 Có mấy hoa?', ['2', '3', '4'], 1, 'Có 3 bông tulip.'),
    Q('Bé có nên hái hoa nơi công cộng? 🌸', ['Không', 'Có', 'Hái thật nhiều'], 0, 'Bé không hái hoa nơi công cộng.'),
  ]),
  q('N1-w27', 'Tuần 27 — Quả ngọt 🍎', 1, [
    Q('🍎 là quả gì?', ['Táo', 'Chuối', 'Nho'], 0, 'Đó là quả táo.'),
    Q('🍌 là quả gì?', ['Chuối', 'Cam', 'Dâu'], 0, 'Đó là quả chuối.'),
    Q('🍇🍇 Có mấy chùm nho?', ['1', '2', '3'], 1, 'Có 2 chùm nho.'),
    Q('Trước khi ăn quả, bé phải? 💧', ['Rửa sạch', 'Ăn ngay', 'Để bẩn'], 0, 'Bé rửa quả sạch trước khi ăn.'),
  ]),
  q('N1-w28', 'Tuần 28 — Rau củ 🥕', 1, [
    Q('🥕 là củ gì?', ['Cà rốt', 'Khoai', 'Hành'], 0, 'Đó là củ cà rốt cam.'),
    Q('🥬 là rau gì?', ['Rau xanh', 'Hoa', 'Quả'], 0, 'Đó là rau xanh.'),
    Q('Ăn rau giúp bé thế nào?', ['Khỏe mạnh', 'Mệt', 'Buồn'], 0, 'Ăn rau giúp bé khỏe.'),
    Q('🌽🌽 Có mấy bắp ngô?', ['1', '2', '3'], 1, 'Có 2 bắp ngô.'),
  ]),

  // ── Tháng 4: Giao thông ──
  q('N1-w29', 'Tuần 29 — Các loại xe 🚗', 1, [
    Q('🚗 là xe gì?', ['Ô tô', 'Xe máy', 'Tàu'], 0, 'Đó là ô tô.'),
    Q('🚲 là xe gì?', ['Xe đạp', 'Tàu', 'Máy bay'], 0, 'Đó là xe đạp.'),
    Q('🚗🚗🚗 Có mấy ô tô?', ['2', '3', '4'], 1, 'Có 3 ô tô.'),
    Q('🚌 chở nhiều người gọi là?', ['Xe buýt', 'Xe đạp', 'Máy bay'], 0, 'Xe chở nhiều người là xe buýt.'),
  ]),
  q('N1-w30', 'Tuần 30 — Đèn tín hiệu 🚦', 1, [
    Q('Đèn 🔴 đỏ thì sao?', ['Dừng lại', 'Đi tiếp', 'Chạy'], 0, 'Đèn đỏ phải dừng lại.'),
    Q('Đèn 🟢 xanh thì sao?', ['Được đi', 'Dừng', 'Quay lại'], 0, 'Đèn xanh được đi.'),
    Q('Đèn 🟡 vàng thì sao?', ['Đi chậm', 'Phóng nhanh', 'Tắt máy'], 0, 'Đèn vàng đi chậm và chuẩn bị dừng.'),
    Q('Bé đi đường bên nào? 🛣️', ['Bên phải', 'Bên trái', 'Giữa đường'], 0, 'Bé đi bên phải.'),
  ]),
  q('N1-w31', 'Tuần 31 — Đi xe an toàn 🚗', 1, [
    Q('Đi xe máy 🛵 phải đội?', ['Mũ bảo hiểm', 'Mũ vải', 'Không đội'], 0, 'Phải đội mũ bảo hiểm.'),
    Q('Ngồi ô tô 🚗 phải?', ['Cài dây an toàn', 'Đứng', 'Nhảy'], 0, 'Phải cài dây an toàn.'),
    Q('Khi qua đường, bé?', ['Cầm tay người lớn', 'Chạy nhanh', 'Đi một mình'], 0, 'Bé cầm tay người lớn qua đường.'),
    Q('🚲🚲 Có mấy xe đạp?', ['1', '2', '3'], 1, 'Có 2 xe đạp.'),
  ]),
  q('N1-w32', 'Tuần 32 — Máy bay & Tàu hỏa ✈️', 1, [
    Q('✈️ bay ở đâu?', ['Trên trời', 'Dưới nước', 'Trong đất'], 0, 'Máy bay bay trên trời.'),
    Q('🚂 chạy ở đâu?', ['Trên đường ray', 'Trên trời', 'Dưới sông'], 0, 'Tàu hỏa chạy trên đường ray.'),
    Q('🚢 đi ở đâu?', ['Trên biển', 'Trên trời', 'Trong rừng'], 0, 'Tàu thủy đi trên biển.'),
    Q('✈️✈️ Có mấy máy bay?', ['1', '2', '3'], 1, 'Có 2 máy bay.'),
  ]),

  // ── Tháng 5: Nước & hiện tượng tự nhiên ──
  q('N1-w33', 'Tuần 33 — Mưa và nắng ☀️🌧️', 1, [
    Q('☀️ chiếu sáng vào ban?', ['Ngày', 'Đêm', 'Khuya'], 0, 'Mặt trời chiếu sáng ban ngày.'),
    Q('Khi 🌧️ mưa, bé cần?', ['Ô', 'Quạt', 'Đèn'], 0, 'Bé cần ô để khỏi ướt.'),
    Q('Nước 💧 dùng để?', ['Uống', 'Đọc', 'Chơi'], 0, 'Nước để uống và rửa.'),
    Q('☀️ buổi sáng mọc ở?', ['Hướng đông', 'Hướng tây', 'Trên đầu'], 0, 'Mặt trời mọc ở hướng đông.'),
  ]),
  q('N1-w34', 'Tuần 34 — Gió và mây 🌬️☁️', 1, [
    Q('☁️ có màu gì?', ['Trắng', 'Đỏ', 'Đen thui'], 0, 'Mây thường màu trắng.'),
    Q('🌬️ thổi làm gì lay?', ['Lá cây', 'Nhà cửa', 'Núi'], 0, 'Gió thổi làm lá cây lay.'),
    Q('☁️☁️ Có mấy đám mây?', ['1', '2', '3'], 1, 'Có 2 đám mây.'),
    Q('Trời nhiều mây đen sẽ?', ['Mưa', 'Nắng to', 'Lạnh'], 0, 'Mây đen báo hiệu trời mưa.'),
  ]),
  q('N1-w35', 'Tuần 35 — Cầu vồng 🌈', 1, [
    Q('🌈 cầu vồng xuất hiện sau?', ['Mưa', 'Đêm', 'Ngủ'], 0, 'Cầu vồng xuất hiện sau cơn mưa.'),
    Q('🌈 có nhiều màu không?', ['Có', 'Không', 'Một màu'], 0, 'Cầu vồng có nhiều màu sắc đẹp.'),
    Q('🌈🌈 Có mấy cầu vồng?', ['1', '2', '3'], 1, 'Có 2 cầu vồng.'),
    Q('Cầu vồng có dạng hình?', ['Vòng cung', 'Vuông', 'Tam giác'], 0, 'Cầu vồng cong như vòng cung.'),
  ]),
  q('N1-w36', 'Tuần 36 — Bé yêu quê hương 🇻🇳', 1, [
    Q('Quê hương bé là nước?', ['Việt Nam', 'Mỹ', 'Nhật'], 0, 'Quê hương bé là Việt Nam.'),
    Q('🇻🇳 là cờ nước?', ['Việt Nam', 'Pháp', 'Anh'], 0, 'Đó là cờ Việt Nam.'),
    Q('Bác Hồ là ai? 👴', ['Lãnh tụ kính yêu', 'Ca sĩ', 'Đầu bếp'], 0, 'Bác Hồ là vị lãnh tụ kính yêu.'),
    Q('Bé có yêu quê hương không? ❤️', ['Có', 'Không', 'Không biết'], 0, 'Bé rất yêu quê hương.'),
  ]),
];

// ============================================================
// ── CHỒI (4 tuổi · level 2) — 36 tuần ──
// Đếm 1-10, so sánh nhiều/ít, hình tam giác-chữ nhật, từ vựng phong phú.
// ============================================================
export const PRESCHOOL_C_WEEKS = [
  // ── Tháng 9: Trường Mầm non ──
  q('N2-w01', 'Tuần 1 — Trường Chồi của bé 🏫', 2, [
    Q('Lớp Chồi bé học cùng cô và ai?', ['Các bạn', 'Một mình', 'Bác bảo vệ'], 0, 'Bé học cùng cô và các bạn.'),
    Q('🎒🎒🎒🎒 Có mấy cặp sách?', ['3', '4', '5'], 1, 'Có 4 cặp sách.'),
    Q('Đến lớp đúng giờ là?', ['Tốt', 'Không tốt', 'Bình thường'], 0, 'Đến đúng giờ là biểu hiện tốt.'),
    Q('Khi cô nói chuyện, bé?', ['Lắng nghe', 'Nói chuyện riêng', 'Chơi'], 0, 'Bé lắng nghe khi cô nói.'),
  ]),
  q('N2-w02', 'Tuần 2 — Lớp học của bé 📚', 2, [
    Q('📚📚📚📚📚 Có mấy quyển sách?', ['4', '5', '6'], 1, 'Có 5 quyển sách.'),
    Q('Bảng đen 🪧 dùng để?', ['Cô viết bài', 'Ngồi', 'Ngủ'], 0, 'Bảng để cô viết bài giảng.'),
    Q('Trong lớp có nhiều bạn hơn hay ít hơn ngoài sân?', ['Tùy', 'Luôn nhiều', 'Luôn ít'], 0, 'Tùy giờ học hay giờ chơi.'),
    Q('Số nào lớn hơn: 5 hay 3?', ['5', '3', 'Bằng nhau'], 0, '5 lớn hơn 3.'),
  ]),
  q('N2-w03', 'Tuần 3 — Cô giáo yêu bé 💖', 2, [
    Q('Cô giáo như mẹ?', ['Hiền thứ hai', 'Không liên quan', 'Nghiêm'], 0, 'Cô như người mẹ thứ hai.'),
    Q('Bé tặng cô gì 20/11? 🌸', ['Hoa', 'Đồ chơi', 'Kẹo'], 0, 'Bé tặng cô bông hoa.'),
    Q('🌸🌸🌸🌸🌸🌸 Có mấy hoa?', ['5', '6', '7'], 1, 'Có 6 bông hoa.'),
    Q('Khi cô gọi, bé trả lời?', ['Dạ thưa cô', 'Im lặng', 'Vâng'], 0, 'Bé thưa "Dạ thưa cô".'),
  ]),
  q('N2-w04', 'Tuần 4 — Đồ chơi vận động 🏐', 2, [
    Q('⚽ có dạng hình?', ['Tròn', 'Vuông', 'Tam giác'], 0, 'Bóng có hình tròn.'),
    Q('🏐🏐🏐🏐🏐🏐🏐 Có mấy bóng?', ['6', '7', '8'], 1, 'Có 7 quả bóng.'),
    Q('Chơi cầu trượt phải?', ['Xếp hàng', 'Chen lấn', 'Đẩy bạn'], 0, 'Bé biết xếp hàng.'),
    Q('Sau khi chơi, bé?', ['Cất đồ', 'Vứt bừa', 'Đi luôn'], 0, 'Bé cất đồ chơi gọn gàng.'),
  ]),

  // ── Tháng 10: Bản thân ──
  q('N2-w05', 'Tuần 5 — Cơ thể bé khỏe mạnh 💪', 2, [
    Q('Bé có mấy chân? 🦵🦵', ['1', '2', '3'], 1, 'Bé có 2 chân.'),
    Q('Hai bàn tay có tất cả mấy ngón? ✋✋', ['8', '10', '12'], 1, '5 + 5 = 10 ngón.'),
    Q('Tập thể dục giúp bé?', ['Khỏe', 'Mệt', 'Yếu'], 0, 'Thể dục giúp bé khỏe mạnh.'),
    Q('💪💪 Có mấy bắp tay?', ['1', '2', '3'], 1, 'Có 2 bắp tay khỏe.'),
  ]),
  q('N2-w06', 'Tuần 6 — Năm giác quan 👀👃', 2, [
    Q('Mắt 👀 dùng để?', ['Nhìn', 'Nghe', 'Ngửi'], 0, 'Mắt để nhìn thế giới.'),
    Q('Mũi 👃 ngửi được gì?', ['Mùi hương', 'Âm thanh', 'Ánh sáng'], 0, 'Mũi ngửi được mùi hương.'),
    Q('Lưỡi 👅 nếm được vị?', ['Ngọt, mặn, chua', 'Sáng tối', 'Nóng lạnh'], 0, 'Lưỡi nếm được nhiều vị.'),
    Q('Bé có mấy giác quan?', ['3', '5', '7'], 1, 'Bé có 5 giác quan.'),
  ]),
  q('N2-w07', 'Tuần 7 — Cảm xúc đa dạng 😊😢', 2, [
    Q('😡 là cảm xúc gì?', ['Tức giận', 'Vui', 'Buồn'], 0, 'Mặt 😡 là tức giận.'),
    Q('😨 là cảm xúc gì?', ['Sợ hãi', 'Vui', 'Bình thường'], 0, 'Mặt 😨 là sợ hãi.'),
    Q('Khi giận, bé nên?', ['Hít thở sâu', 'Đánh bạn', 'La hét'], 0, 'Bé hít thở sâu để bình tĩnh.'),
    Q('Khi vui, bé thường?', ['Cười', 'Khóc', 'Im lặng'], 0, 'Bé cười khi vui vẻ.'),
  ]),
  q('N2-w08', 'Tuần 8 — Tự chăm sóc bản thân 🧼', 2, [
    Q('Bé tự mặc quần áo được không?', ['Có thể', 'Không bao giờ', 'Cần mẹ mãi'], 0, 'Chồi đã tự mặc được.'),
    Q('Bé đánh răng mỗi ngày? 🪥', ['2 lần', '0 lần', '10 lần'], 0, 'Đánh răng 2 lần một ngày.'),
    Q('Khi muốn đi vệ sinh, bé?', ['Xin phép cô', 'Nín nhịn', 'Đi luôn không xin'], 0, 'Bé xin phép cô đi vệ sinh.'),
    Q('Bé đi tắm có nên nhờ?', ['Người lớn giúp', 'Bạn nhỏ', 'Tự đi'], 0, 'Bé nhờ người lớn giúp.'),
  ]),

  // ── Tháng 11: Gia đình ──
  q('N2-w09', 'Tuần 9 — Gia đình thân yêu 👨‍👩‍👧‍👦', 2, [
    Q('👨‍👩‍👧‍👦 Trong tranh có mấy người?', ['3', '4', '5'], 1, 'Có 4 người trong gia đình.'),
    Q('Chị gái lớn hơn hay nhỏ hơn em? 👧', ['Lớn hơn', 'Nhỏ hơn', 'Bằng'], 0, 'Chị gái lớn hơn em.'),
    Q('Bé yêu thương gia đình bằng?', ['Lời nói và hành động', 'Đồ chơi', 'Tiền'], 0, 'Bé yêu bằng lời nói và hành động.'),
    Q('Em bé 👶 còn bé hay lớn?', ['Còn bé', 'Đã lớn', 'Cao'], 0, 'Em bé còn rất bé.'),
  ]),
  q('N2-w10', 'Tuần 10 — Nghề của bố mẹ 👨‍💼👩‍🍳', 2, [
    Q('👩‍🍳 là nghề gì?', ['Đầu bếp', 'Bác sĩ', 'Cô giáo'], 0, 'Đó là đầu bếp.'),
    Q('👨‍🏫 là nghề gì?', ['Thầy giáo', 'Công an', 'Nông dân'], 0, 'Đó là thầy giáo.'),
    Q('👨‍⚕️👩‍⚕️ Có mấy bác sĩ?', ['1', '2', '3'], 1, 'Có 2 bác sĩ.'),
    Q('Nghề nào cũng?', ['Đáng quý', 'Không quan trọng', 'Nhàm chán'], 0, 'Nghề nào cũng đáng quý.'),
  ]),
  q('N2-w11', 'Tuần 11 — Nhà cửa của bé 🏘️', 2, [
    Q('🏘️🏘️🏘️🏘️🏘️🏘️🏘️🏘️ Có mấy nhà?', ['7', '8', '9'], 1, 'Có 8 ngôi nhà.'),
    Q('Phòng khách dùng để?', ['Tiếp khách', 'Nấu ăn', 'Tắm'], 0, 'Phòng khách để tiếp khách.'),
    Q('Phòng tắm 🛁 dùng để?', ['Tắm rửa', 'Ngủ', 'Ăn'], 0, 'Phòng tắm để tắm và vệ sinh.'),
    Q('Nhà cao hơn cây hay thấp hơn?', ['Có thể cao hơn', 'Luôn thấp', 'Không biết'], 0, 'Nhà cao tầng cao hơn cây.'),
  ]),
  q('N2-w12', 'Tuần 12 — Đồ dùng gia đình 🪑🛏️', 2, [
    Q('🛏️ dùng để?', ['Ngủ', 'Ăn', 'Tắm'], 0, 'Giường để ngủ.'),
    Q('🧊 lạnh hay nóng?', ['Lạnh', 'Nóng', 'Ấm'], 0, 'Đá rất lạnh.'),
    Q('Tivi 📺 dùng để?', ['Xem phim', 'Nấu ăn', 'Ngủ'], 0, 'TV để xem phim, chương trình.'),
    Q('🪑🪑🪑🪑🪑🪑🪑🪑🪑 Có mấy ghế?', ['8', '9', '10'], 1, 'Có 9 cái ghế.'),
  ]),

  // ── Tháng 12: Nghề nghiệp ──
  q('N2-w13', 'Tuần 13 — Bác sĩ chữa bệnh 👨‍⚕️', 2, [
    Q('Bác sĩ dùng gì để nghe tim? 🩺', ['Ống nghe', 'Búa', 'Bút'], 0, 'Bác sĩ dùng ống nghe.'),
    Q('Khi sốt, bé uống gì? 💊', ['Thuốc theo chỉ định', 'Kẹo', 'Nước ngọt'], 0, 'Bé uống thuốc theo bác sĩ kê.'),
    Q('💊💊💊💊💊💊 Có mấy viên thuốc?', ['5', '6', '7'], 1, 'Có 6 viên thuốc.'),
    Q('Y tá làm việc cùng?', ['Bác sĩ', 'Công an', 'Cô giáo'], 0, 'Y tá làm việc cùng bác sĩ.'),
  ]),
  q('N2-w14', 'Tuần 14 — Nông dân & Công nhân 👨‍🌾', 2, [
    Q('👨‍🌾 trồng gì cho ta ăn?', ['Lúa, rau', 'Đồ chơi', 'Sách'], 0, 'Nông dân trồng lúa, rau.'),
    Q('Gạo 🌾 từ đâu mà có?', ['Cây lúa', 'Cây táo', 'Cây cam'], 0, 'Gạo từ cây lúa.'),
    Q('Công nhân xây nhà 🏗️ cần?', ['Mũ bảo hộ', 'Sách', 'Hoa'], 0, 'Công nhân cần mũ bảo hộ.'),
    Q('Bé biết ơn ai cho cơm ăn?', ['Bác nông dân', 'Đồ chơi', 'TV'], 0, 'Bé biết ơn bác nông dân.'),
  ]),
  q('N2-w15', 'Tuần 15 — Lính cứu hỏa & Phi công 👨‍🚒✈️', 2, [
    Q('👨‍🚒 dập lửa cứu ai?', ['Mọi người', 'Robot', 'Cây'], 0, 'Lính cứu hỏa cứu mọi người.'),
    Q('Phi công lái cái gì? ✈️', ['Máy bay', 'Ô tô', 'Tàu thủy'], 0, 'Phi công lái máy bay.'),
    Q('✈️✈️✈️ Có mấy máy bay?', ['2', '3', '4'], 1, 'Có 3 máy bay.'),
    Q('Lính cứu hỏa dũng cảm hay nhút nhát?', ['Dũng cảm', 'Nhút nhát', 'Yếu đuối'], 0, 'Họ rất dũng cảm.'),
  ]),
  q('N2-w16', 'Tuần 16 — Họa sĩ & Nhạc sĩ 👨‍🎨🎵', 2, [
    Q('👨‍🎨 dùng gì để vẽ?', ['Bút, màu', 'Búa', 'Kéo'], 0, 'Họa sĩ dùng bút và màu.'),
    Q('🎵 do ai sáng tạo?', ['Nhạc sĩ', 'Bác sĩ', 'Đầu bếp'], 0, 'Nhạc sĩ sáng tác nhạc.'),
    Q('🎨🎨🎨🎨🎨 Có mấy bảng màu?', ['4', '5', '6'], 1, 'Có 5 bảng màu.'),
    Q('Bé thích trở thành?', ['Bất cứ ai bé thích', 'Không ai', 'Phải làm bác sĩ'], 0, 'Bé được chọn ước mơ.'),
  ]),

  // ── Tháng 1: Động vật ──
  q('N2-w17', 'Tuần 17 — Vật nuôi 🐶🐱', 2, [
    Q('🐶🐱🐰 Có mấy con?', ['2', '3', '4'], 1, 'Có 3 con vật nuôi.'),
    Q('🐮 cho ta gì uống?', ['Sữa', 'Trứng', 'Mật'], 0, 'Bò cho sữa.'),
    Q('🐷 thường ăn gì?', ['Cám', 'Cá', 'Lá xanh'], 0, 'Lợn ăn cám.'),
    Q('Số chân của 🐶 là?', ['2', '4', '6'], 1, 'Chó có 4 chân.'),
  ]),
  q('N2-w18', 'Tuần 18 — Thú rừng 🦁🐯', 2, [
    Q('🦒 có cổ thế nào?', ['Rất dài', 'Ngắn', 'Bình thường'], 0, 'Hươu cao cổ có cổ rất dài.'),
    Q('🐯 sống ở đâu?', ['Rừng', 'Biển', 'Trong nhà'], 0, 'Hổ sống trong rừng.'),
    Q('🐘🐘🐘🐘🐘🐘🐘🐘🐘🐘 Có mấy voi?', ['9', '10', '11'], 1, 'Có 10 con voi.'),
    Q('Khỉ 🐒 leo cây giỏi không?', ['Rất giỏi', 'Không', 'Tệ'], 0, 'Khỉ leo cây rất giỏi.'),
  ]),
  q('N2-w19', 'Tuần 19 — Động vật biển 🐟🐬', 2, [
    Q('🐬 thông minh thế nào?', ['Rất thông minh', 'Ngốc', 'Bình thường'], 0, 'Cá heo rất thông minh.'),
    Q('🐙 có mấy chân/xúc tu?', ['4', '8', '10'], 1, 'Bạch tuộc có 8 xúc tu.'),
    Q('🦈 có răng?', ['Sắc', 'Cùn', 'Không có'], 0, 'Cá mập răng rất sắc.'),
    Q('🐳🐳🐳🐳🐳🐳 Có mấy cá voi?', ['5', '6', '7'], 1, 'Có 6 cá voi.'),
  ]),
  q('N2-w20', 'Tuần 20 — Chim trời 🐦🦜', 2, [
    Q('🦅 bay cao hay thấp?', ['Cao', 'Thấp', 'Không bay'], 0, 'Đại bàng bay rất cao.'),
    Q('🦜 có lông màu?', ['Sặc sỡ', 'Trắng', 'Đen'], 0, 'Vẹt có lông sặc sỡ.'),
    Q('🐦🐦🐦🐦🐦🐦🐦 Có mấy chim?', ['6', '7', '8'], 1, 'Có 7 con chim.'),
    Q('🦉 hoạt động vào?', ['Ban đêm', 'Ban ngày', 'Sáng sớm'], 0, 'Cú hoạt động ban đêm.'),
  ]),

  // ── Tháng 2: Tết & xuân ──
  q('N2-w21', 'Tuần 21 — Tết cổ truyền 🧧', 2, [
    Q('Tết Nguyên đán vào tháng?', ['Âm lịch', 'Dương lịch', 'Không biết'], 0, 'Tết Nguyên đán theo lịch âm.'),
    Q('Ngày Tết bé thường?', ['Mặc đồ đẹp', 'Đi học', 'Đi làm'], 0, 'Bé mặc đồ mới đẹp.'),
    Q('🧧🧧🧧🧧🧧🧧🧧🧧 Có mấy bao lì xì?', ['7', '8', '9'], 1, 'Có 8 bao lì xì.'),
    Q('Bé chúc Tết ai trước?', ['Ông bà', 'Bạn', 'Đồ chơi'], 0, 'Bé chúc ông bà trước nhất.'),
  ]),
  q('N2-w22', 'Tuần 22 — Mâm cỗ Tết 🍱', 2, [
    Q('Bánh chưng hình?', ['Vuông', 'Tròn', 'Trái tim'], 0, 'Bánh chưng hình vuông.'),
    Q('Bánh tét hình?', ['Dài', 'Vuông', 'Sao'], 0, 'Bánh tét hình trụ dài.'),
    Q('Mâm ngũ quả có?', ['5 loại quả', '3 loại', '10 loại'], 0, 'Mâm ngũ quả có 5 loại.'),
    Q('🥢 dùng để?', ['Gắp thức ăn', 'Viết', 'Vẽ'], 0, 'Đũa để gắp thức ăn.'),
  ]),
  q('N2-w23', 'Tuần 23 — Mùa xuân hoa nở 🌸🌷', 2, [
    Q('Mùa xuân hoa gì nở nhiều ở Bắc?', ['Hoa đào', 'Hoa sen', 'Hoa cúc'], 0, 'Hoa đào nở rộ ở miền Bắc.'),
    Q('🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸 Có mấy hoa?', ['9', '10', '11'], 1, 'Có 10 bông hoa.'),
    Q('Mùa xuân chim 🐦 làm gì?', ['Hót líu lo', 'Im', 'Ngủ'], 0, 'Chim hót đón xuân.'),
    Q('Thời tiết xuân?', ['Ấm áp', 'Rét đậm', 'Nóng bức'], 0, 'Mùa xuân ấm áp dễ chịu.'),
  ]),
  q('N2-w24', 'Tuần 24 — Lễ hội mùa xuân 🎊', 2, [
    Q('Múa lân vào dịp? 🦁', ['Tết', 'Trung thu', 'Sinh nhật'], 0, 'Múa lân vào dịp Tết.'),
    Q('🥁 đánh trống nghe?', ['Vang', 'Im', 'Nhẹ'], 0, 'Trống đánh vang rộn ràng.'),
    Q('Pháo hoa 🎆 nở vào?', ['Đêm', 'Sáng', 'Trưa'], 0, 'Pháo hoa nở rực rỡ trong đêm.'),
    Q('🎈🎈🎈🎈🎈 Có mấy bóng?', ['4', '5', '6'], 1, 'Có 5 quả bóng.'),
  ]),

  // ── Tháng 3: Thực vật ──
  q('N2-w25', 'Tuần 25 — Các bộ phận cây 🌱', 2, [
    Q('Cây hút nước bằng?', ['Rễ', 'Lá', 'Hoa'], 0, 'Cây hút nước bằng rễ.'),
    Q('🌳 có bộ phận nào trên cùng?', ['Tán lá', 'Rễ', 'Gốc'], 0, 'Trên cùng là tán lá.'),
    Q('🌱🌱🌱🌱 Có mấy cây non?', ['3', '4', '5'], 1, 'Có 4 cây non.'),
    Q('Cây cần ánh sáng từ?', ['Mặt trời ☀️', 'Đèn nê-on', 'Bóng tối'], 0, 'Cây cần ánh sáng mặt trời.'),
  ]),
  q('N2-w26', 'Tuần 26 — Hoa muôn màu 🌹🌻', 2, [
    Q('🌻 có màu chủ đạo?', ['Vàng', 'Tím', 'Đen'], 0, 'Hoa hướng dương màu vàng.'),
    Q('🌷 có nguồn gốc từ?', ['Nước ngoài', 'Việt Nam', 'Mặt trăng'], 0, 'Tulip có nguồn gốc nước ngoài.'),
    Q('🌸🌺🌻🌷 Có mấy loại hoa?', ['3', '4', '5'], 1, 'Có 4 loại hoa khác nhau.'),
    Q('Hoa nở để?', ['Khoe sắc, thu hút ong', 'Cãi nhau', 'Ngủ'], 0, 'Hoa nở khoe sắc, thu hút ong bướm.'),
  ]),
  q('N2-w27', 'Tuần 27 — Quả nhiều vitamin 🍊🥭', 2, [
    Q('🍊 cam có vị?', ['Chua ngọt', 'Mặn', 'Đắng'], 0, 'Cam vị chua ngọt.'),
    Q('🥭 xoài chín màu?', ['Vàng', 'Xanh đen', 'Đỏ tươi'], 0, 'Xoài chín vàng ươm.'),
    Q('🍉 dưa hấu bên trong?', ['Đỏ', 'Trắng', 'Đen'], 0, 'Bên trong dưa hấu đỏ ngọt.'),
    Q('🍓🍓🍓🍓🍓🍓🍓 Có mấy dâu?', ['6', '7', '8'], 1, 'Có 7 quả dâu.'),
  ]),
  q('N2-w28', 'Tuần 28 — Rau củ quanh ta 🥬🥕', 2, [
    Q('🥕 chứa nhiều vitamin tốt cho?', ['Mắt', 'Tóc', 'Tai'], 0, 'Cà rốt tốt cho mắt.'),
    Q('🍅 cà chua màu?', ['Đỏ', 'Xanh dương', 'Tím'], 0, 'Cà chua chín đỏ.'),
    Q('🥒🥒🥒🥒🥒 Có mấy dưa leo?', ['4', '5', '6'], 1, 'Có 5 quả dưa leo.'),
    Q('Rau sống nên?', ['Rửa kỹ', 'Ăn ngay', 'Để bẩn'], 0, 'Rau phải rửa kỹ trước khi ăn.'),
  ]),

  // ── Tháng 4: Giao thông ──
  q('N2-w29', 'Tuần 29 — Phương tiện trên đường 🚗🚌', 2, [
    Q('🚌 chở được nhiều người?', ['Có', 'Không', 'Một người'], 0, 'Xe buýt chở được nhiều người.'),
    Q('🚕 là xe?', ['Taxi', 'Xe tải', 'Cứu thương'], 0, 'Đó là taxi.'),
    Q('🚚 dùng để?', ['Chở hàng', 'Chở người', 'Chơi'], 0, 'Xe tải chở hàng hóa.'),
    Q('🚗🚕🚌🚚🚒🚓🚑 Có mấy xe?', ['6', '7', '8'], 1, 'Có 7 loại xe.'),
  ]),
  q('N2-w30', 'Tuần 30 — Đèn tín hiệu & biển báo 🚦', 2, [
    Q('Đèn 🚦 có mấy màu chính?', ['2', '3', '4'], 1, 'Đèn có 3 màu: đỏ, vàng, xanh.'),
    Q('🛑 là biển?', ['Dừng lại', 'Đi tiếp', 'Quay đầu'], 0, 'Đó là biển dừng.'),
    Q('Vạch trắng kẻ đường để?', ['Người đi bộ qua', 'Trang trí', 'Đua xe'], 0, 'Vạch trắng cho người đi bộ qua.'),
    Q('Khi qua đường, bé nhìn?', ['Hai bên', 'Một bên', 'Không nhìn'], 0, 'Nhìn hai bên rồi mới qua.'),
  ]),
  q('N2-w31', 'Tuần 31 — An toàn giao thông 🦺', 2, [
    Q('Đội mũ bảo hiểm 🪖 khi?', ['Đi xe máy', 'Đi bộ trong nhà', 'Ngủ'], 0, 'Đội mũ khi đi xe máy.'),
    Q('Bé qua đường nên?', ['Đi cùng người lớn', 'Chạy lung tung', 'Đi một mình'], 0, 'Bé đi cùng người lớn.'),
    Q('🚸 là biển?', ['Trẻ em', 'Người già', 'Xe đạp'], 0, 'Biển báo có trẻ em qua đường.'),
    Q('Ngồi sau xe, bé phải?', ['Bám chặt', 'Đứng', 'Buông tay'], 0, 'Bé phải bám chặt người lớn.'),
  ]),
  q('N2-w32', 'Tuần 32 — Tàu, máy bay, tàu thủy ✈️🚢', 2, [
    Q('✈️ nhanh hay chậm?', ['Rất nhanh', 'Chậm', 'Như đi bộ'], 0, 'Máy bay bay rất nhanh.'),
    Q('🚢 lớn hay nhỏ?', ['Rất lớn', 'Nhỏ', 'Như chiếc lá'], 0, 'Tàu thủy rất lớn.'),
    Q('🚂 đi trên?', ['Đường ray', 'Đường nhựa', 'Đường mòn'], 0, 'Tàu hỏa đi trên đường ray.'),
    Q('🚀 bay đi đâu?', ['Vũ trụ', 'Dưới nước', 'Trong rừng'], 0, 'Tên lửa bay vào vũ trụ.'),
  ]),

  // ── Tháng 5: Hiện tượng tự nhiên ──
  q('N2-w33', 'Tuần 33 — Mặt trời, mặt trăng ☀️🌙', 2, [
    Q('☀️ xuất hiện vào?', ['Ban ngày', 'Ban đêm', 'Cả hai'], 0, 'Mặt trời xuất hiện ban ngày.'),
    Q('🌙 xuất hiện vào?', ['Ban đêm', 'Ban trưa', 'Cả hai'], 0, 'Mặt trăng xuất hiện ban đêm.'),
    Q('Sao ⭐ có nhiều hay ít trên trời?', ['Rất nhiều', 'Một', 'Không có'], 0, 'Trời đêm rất nhiều sao.'),
    Q('⭐⭐⭐⭐⭐⭐⭐⭐⭐ Có mấy sao?', ['8', '9', '10'], 1, 'Có 9 ngôi sao.'),
  ]),
  q('N2-w34', 'Tuần 34 — Bốn mùa 🍂🌸', 2, [
    Q('Mùa hè trời?', ['Nóng', 'Lạnh', 'Mát'], 0, 'Mùa hè trời nóng.'),
    Q('Mùa đông trời?', ['Lạnh', 'Nóng', 'Ấm'], 0, 'Mùa đông trời lạnh.'),
    Q('Mùa thu lá cây?', ['Rụng nhiều', 'Xanh non', 'Đâm chồi'], 0, 'Mùa thu lá rụng nhiều.'),
    Q('Có mấy mùa trong năm?', ['2', '3', '4'], 2, 'Có 4 mùa: xuân hạ thu đông.'),
  ]),
  q('N2-w35', 'Tuần 35 — Nước rất quý 💧', 2, [
    Q('💧 nước dùng để?', ['Uống, rửa', 'Đốt', 'Đập'], 0, 'Nước để uống và rửa.'),
    Q('Tiết kiệm nước có nên?', ['Có', 'Không', 'Tùy'], 0, 'Bé nên tiết kiệm nước.'),
    Q('💧💧💧💧💧💧💧💧 Có mấy giọt?', ['7', '8', '9'], 1, 'Có 8 giọt nước.'),
    Q('Bé uống mấy ly nước mỗi ngày?', ['Nhiều ly', 'Một ly', 'Không uống'], 0, 'Bé uống nhiều ly nước mỗi ngày.'),
  ]),
  q('N2-w36', 'Tuần 36 — Quê hương yêu dấu 🇻🇳', 2, [
    Q('Thủ đô Việt Nam là?', ['Hà Nội', 'TP.HCM', 'Đà Nẵng'], 0, 'Thủ đô là Hà Nội.'),
    Q('🇻🇳 cờ đỏ sao?', ['Vàng', 'Trắng', 'Xanh'], 0, 'Cờ đỏ sao vàng.'),
    Q('Bác Hồ là vị?', ['Lãnh tụ kính yêu', 'Ca sĩ', 'Đầu bếp'], 0, 'Bác Hồ là lãnh tụ kính yêu.'),
    Q('Bé yêu Tổ quốc bằng?', ['Học giỏi, ngoan', 'Lười học', 'Không gì'], 0, 'Bé học giỏi và ngoan để yêu Tổ quốc.'),
  ]),
];

// ============================================================
// ── LÁ (5 tuổi · level 3) — 36 tuần ──
// Đếm 1-20, cộng-trừ trong 5, hình khối 3D, sẵn sàng vào lớp 1.
// ============================================================
export const PRESCHOOL_L_WEEKS = [
  // ── Tháng 9: Trường Mầm non ──
  q('N3-w01', 'Tuần 1 — Lá chuẩn bị vào lớp 1 🎒', 3, [
    Q('Năm sau bé học lớp?', ['Lớp 1', 'Lớp Mầm', 'Lớp Chồi'], 0, 'Năm sau Lá vào lớp 1.'),
    Q('🎒🎒🎒🎒🎒🎒🎒🎒🎒🎒🎒🎒 Có mấy cặp?', ['11', '12', '13'], 1, 'Có 12 cái cặp.'),
    Q('Bé chuẩn bị gì để vào lớp 1?', ['Học chữ và số', 'Quên hết', 'Ngủ nhiều'], 0, 'Bé học chữ, học số.'),
    Q('Khi cô hỏi, bé giơ?', ['Tay', 'Chân', 'Sách'], 0, 'Bé giơ tay phát biểu.'),
  ]),
  q('N3-w02', 'Tuần 2 — Lớp học và bạn bè 📚', 3, [
    Q('5 + 2 = ?', ['6', '7', '8'], 1, '5 cộng 2 bằng 7.'),
    Q('Số nào lớn nhất: 8, 5, 9?', ['8', '5', '9'], 2, '9 lớn nhất.'),
    Q('Số nào nhỏ nhất: 4, 7, 2?', ['4', '7', '2'], 2, '2 nhỏ nhất.'),
    Q('Đếm tiếp: 11, 12, 13, ...?', ['14', '10', '20'], 0, 'Sau 13 là 14.'),
  ]),
  q('N3-w03', 'Tuần 3 — Cô giáo kính yêu 👩‍🏫', 3, [
    Q('Bé tặng cô gì 20/11? 🌸', ['Hoa và lời chúc', 'Im lặng', 'Đánh cô'], 0, 'Bé tặng hoa và lời chúc.'),
    Q('🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸 Có mấy hoa?', ['12', '13', '14'], 1, 'Có 13 bông hoa.'),
    Q('Cô vất vả để bé?', ['Học giỏi, nên người', 'Lười', 'Đi chơi'], 0, 'Cô mong bé học giỏi và nên người.'),
    Q('Khi gặp cô, bé chào bằng?', ['Lễ phép', 'Cộc lốc', 'Không chào'], 0, 'Bé chào cô lễ phép.'),
  ]),
  q('N3-w04', 'Tuần 4 — Sách vở và đồ học tập 📚✏️', 3, [
    Q('Bé giữ sách thế nào?', ['Sạch sẽ', 'Vẽ bậy', 'Xé rách'], 0, 'Bé giữ sách sạch sẽ.'),
    Q('✏️ dùng để?', ['Viết, vẽ', 'Ăn', 'Ngủ'], 0, 'Bút chì để viết và vẽ.'),
    Q('Cục tẩy 🧽 dùng?', ['Xóa nét sai', 'Vẽ', 'Đọc'], 0, 'Tẩy để xóa nét sai.'),
    Q('✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️✏️ Có mấy?', ['10', '11', '12'], 1, 'Có 11 bút chì.'),
  ]),

  // ── Tháng 10: Bản thân ──
  q('N3-w05', 'Tuần 5 — Cơ thể và sức khỏe 💪', 3, [
    Q('Bé cao lên nhờ?', ['Ăn đủ chất, ngủ đủ', 'Lười ăn', 'Thức khuya'], 0, 'Ăn đủ chất và ngủ đủ giúp bé cao.'),
    Q('Bé có bao nhiêu răng sữa?', ['10', '20', '30'], 1, 'Bé có 20 răng sữa.'),
    Q('Tập thể dục giúp gì?', ['Khỏe mạnh', 'Mệt mỏi', 'Yếu hơn'], 0, 'Thể dục giúp khỏe mạnh.'),
    Q('Bé nên ngủ mấy giờ?', ['9-10 giờ', '1 giờ', '20 giờ'], 0, 'Bé nên ngủ 9-10 giờ.'),
  ]),
  q('N3-w06', 'Tuần 6 — Giác quan và bảo vệ 👀👂', 3, [
    Q('Bảo vệ mắt 👀 bằng cách?', ['Không nhìn gần TV', 'Nhìn nắng', 'Dụi mạnh'], 0, 'Không nhìn TV quá gần.'),
    Q('Bảo vệ tai 👂 bằng cách?', ['Không nghe quá to', 'Nghe ồn', 'Chọc vật cứng'], 0, 'Không nghe nhạc quá to.'),
    Q('Bảo vệ răng 🦷?', ['Đánh răng', 'Ăn nhiều kẹo', 'Cắn vật cứng'], 0, 'Đánh răng đều đặn.'),
    Q('Khi nhức đầu, bé báo?', ['Người lớn', 'Bạn nhỏ', 'Không ai'], 0, 'Bé báo người lớn ngay.'),
  ]),
  q('N3-w07', 'Tuần 7 — Cảm xúc và ứng xử 😊', 3, [
    Q('Khi vui, bé nên chia sẻ với?', ['Người thân', 'Một mình', 'Đồ chơi'], 0, 'Chia sẻ với người thân.'),
    Q('Khi buồn, bé nên?', ['Nói ra cho người tin', 'Im lặng', 'Khóc to mãi'], 0, 'Nói với người mình tin tưởng.'),
    Q('Bị bạn trêu, bé nên?', ['Báo cô', 'Đánh lại', 'Khóc to'], 0, 'Bé báo cô để được giúp.'),
    Q('Yêu thương bắt đầu từ?', ['Trong gia đình', 'Trên TV', 'Trong sách'], 0, 'Yêu thương bắt đầu từ gia đình.'),
  ]),
  q('N3-w08', 'Tuần 8 — Tự lập 🧦', 3, [
    Q('Lá tự làm được gì?', ['Mặc đồ, đeo giày', 'Lái xe', 'Nấu cơm'], 0, 'Lá đã tự mặc đồ và đeo giày.'),
    Q('🧦🧦 Có mấy chiếc tất?', ['1 đôi', '2 đôi', '3 đôi'], 0, '2 chiếc là 1 đôi.'),
    Q('Sau khi chơi, bé?', ['Tự dọn', 'Đợi mẹ dọn', 'Vứt bừa'], 0, 'Bé tự dọn đồ chơi.'),
    Q('Bé biết tự đánh răng chưa?', ['Có thể', 'Chưa bao giờ', 'Không cần'], 0, 'Lá đã tự đánh răng được.'),
  ]),

  // ── Tháng 11: Gia đình ──
  q('N3-w09', 'Tuần 9 — Cây gia đình 🌳', 3, [
    Q('Bố của mẹ bé gọi là?', ['Ông ngoại', 'Ông nội', 'Chú'], 0, 'Bố của mẹ là ông ngoại.'),
    Q('Mẹ của bố bé gọi là?', ['Bà nội', 'Bà ngoại', 'Cô'], 0, 'Mẹ của bố là bà nội.'),
    Q('Em của bố là?', ['Chú hoặc cô', 'Ông', 'Bà'], 0, 'Em của bố là chú (nam) hoặc cô (nữ).'),
    Q('Nhà có ông bà bố mẹ và 2 con, mấy người?', ['5', '6', '7'], 1, '2 ông bà + 2 bố mẹ + 2 con = 6 người.'),
  ]),
  q('N3-w10', 'Tuần 10 — Yêu thương gia đình ❤️', 3, [
    Q('Bé giúp mẹ việc nhỏ nào?', ['Quét nhà', 'Lái xe', 'Nấu ăn'], 0, 'Bé giúp quét nhà.'),
    Q('Sinh nhật người thân, bé?', ['Chúc mừng', 'Đòi quà', 'Im lặng'], 0, 'Bé chúc mừng người thân.'),
    Q('5 - 2 = ?', ['2', '3', '4'], 1, '5 trừ 2 bằng 3.'),
    Q('Ai đi làm cho bé có cơm ăn?', ['Bố mẹ', 'Bạn', 'Đồ chơi'], 0, 'Bố mẹ đi làm vất vả.'),
  ]),
  q('N3-w11', 'Tuần 11 — Ngôi nhà của bé 🏠', 3, [
    Q('Nhà cao tầng gọi là?', ['Chung cư/nhà cao tầng', 'Nhà lá', 'Lều'], 0, 'Đó là chung cư hoặc nhà cao tầng.'),
    Q('Số tầng từ 1 tới 10 là?', ['10 số', '20 số', '5 số'], 0, 'Có 10 số: 1,2,...,10.'),
    Q('Nhà sàn 🏠 thường ở?', ['Miền núi', 'Trung tâm thành phố', 'Trên trời'], 0, 'Nhà sàn ở miền núi.'),
    Q('Ngôi nhà có hình mái?', ['Tam giác', 'Tròn', 'Sao'], 0, 'Mái nhà thường hình tam giác.'),
  ]),
  q('N3-w12', 'Tuần 12 — Đồ dùng và an toàn 🏠⚠️', 3, [
    Q('Ổ điện ⚡ có an toàn cho bé sờ?', ['Không', 'Có', 'Tùy'], 0, 'Tuyệt đối không sờ ổ điện.'),
    Q('Dao 🔪 dùng?', ['Người lớn dùng', 'Bé chơi', 'Đồ chơi'], 0, 'Dao chỉ người lớn dùng.'),
    Q('Khi thấy lửa 🔥 cháy, bé?', ['Gọi người lớn', 'Tự dập', 'Bỏ chạy không nói'], 0, 'Bé gọi người lớn ngay.'),
    Q('🚪 cửa khóa khi đi đâu?', ['Ra ngoài/đi ngủ', 'Trong bữa ăn', 'Khi xem TV'], 0, 'Khóa cửa khi ra ngoài hoặc đi ngủ.'),
  ]),

  // ── Tháng 12: Nghề nghiệp ──
  q('N3-w13', 'Tuần 13 — Nghề chăm sóc sức khỏe 👨‍⚕️', 3, [
    Q('Bác sĩ và y tá làm việc ở?', ['Bệnh viện', 'Trường học', 'Chợ'], 0, 'Họ làm ở bệnh viện.'),
    Q('Khi đau bụng, bé?', ['Báo người lớn', 'Im lặng', 'Tự uống thuốc'], 0, 'Bé báo người lớn.'),
    Q('Bác sĩ nha khoa chữa?', ['Răng', 'Mắt', 'Tai'], 0, 'Nha sĩ chữa răng.'),
    Q('💉💉💉 Có mấy mũi tiêm?', ['2', '3', '4'], 1, 'Có 3 mũi tiêm.'),
  ]),
  q('N3-w14', 'Tuần 14 — Nghề giáo dục 👨‍🏫', 3, [
    Q('Cô giáo lớp Lá dạy?', ['Bé sẵn sàng vào lớp 1', 'Lái xe', 'Nấu ăn'], 0, 'Cô dạy bé sẵn sàng vào lớp 1.'),
    Q('Hiệu trưởng là?', ['Người đứng đầu trường', 'Bác bảo vệ', 'Đầu bếp'], 0, 'Hiệu trưởng là người đứng đầu trường.'),
    Q('📚 + 📚 + 📚 = ? (3 quyển × 2)', ['5', '6', '7'], 1, '3 + 3 = 6.'),
    Q('Bé học để?', ['Hiểu biết, trưởng thành', 'Lười', 'Bỏ học'], 0, 'Học để hiểu biết và trưởng thành.'),
  ]),
  q('N3-w15', 'Tuần 15 — Nghề sản xuất 👨‍🌾👷', 3, [
    Q('Ai trồng lúa cho ta gạo?', ['Nông dân', 'Bác sĩ', 'Phi công'], 0, 'Bác nông dân trồng lúa.'),
    Q('Ai xây nhà cho ta ở?', ['Thợ xây', 'Cô giáo', 'Đầu bếp'], 0, 'Thợ xây xây nhà.'),
    Q('Ai may quần áo cho ta?', ['Thợ may', 'Y tá', 'Tài xế'], 0, 'Thợ may may áo.'),
    Q('Bé biết ơn người lao động bằng?', ['Trân trọng sản phẩm', 'Vứt bừa', 'Không quan tâm'], 0, 'Bé trân trọng sản phẩm họ làm ra.'),
  ]),
  q('N3-w16', 'Tuần 16 — Nghề bé mơ ước 🌟', 3, [
    Q('Bé có quyền chọn nghề tương lai?', ['Có', 'Không', 'Phải nghe người khác'], 0, 'Bé có quyền chọn ước mơ.'),
    Q('Để theo nghề, bé cần?', ['Học giỏi', 'Lười học', 'Bỏ học'], 0, 'Bé cần học giỏi.'),
    Q('🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟 Có mấy sao?', ['13', '14', '15'], 1, 'Có 14 ngôi sao.'),
    Q('Nghề nào cao quý hơn?', ['Tất cả đều cao quý', 'Bác sĩ', 'Phi công'], 0, 'Mọi nghề đều cao quý.'),
  ]),

  // ── Tháng 1: Động vật ──
  q('N3-w17', 'Tuần 17 — Vật nuôi có ích 🐶🐔', 3, [
    Q('🐔 đẻ trứng, vịt 🦆?', ['Cũng đẻ trứng', 'Đẻ con', 'Không đẻ'], 0, 'Vịt cũng đẻ trứng.'),
    Q('🐮 cho sữa, 🐷 cho?', ['Thịt', 'Sữa', 'Trứng'], 0, 'Lợn cho thịt.'),
    Q('🐶 giúp người?', ['Trông nhà', 'Bay', 'Bơi'], 0, 'Chó trông nhà.'),
    Q('🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔🐔 Có mấy?', ['14', '15', '16'], 1, 'Có 15 con gà.'),
  ]),
  q('N3-w18', 'Tuần 18 — Động vật quý hiếm 🐼🐅', 3, [
    Q('🐼 sống ở đâu?', ['Rừng tre Trung Quốc', 'Sa mạc', 'Biển'], 0, 'Gấu trúc sống ở rừng tre.'),
    Q('🐅 hổ là động vật?', ['Quý hiếm', 'Phổ biến', 'Vô danh'], 0, 'Hổ là động vật quý hiếm.'),
    Q('Bé bảo vệ động vật bằng?', ['Không săn bắn', 'Đánh', 'Lờ đi'], 0, 'Bé không săn bắn động vật.'),
    Q('20 - 5 = ?', ['14', '15', '16'], 1, '20 trừ 5 bằng 15.'),
  ]),
  q('N3-w19', 'Tuần 19 — Đại dương kỳ diệu 🌊🐠', 3, [
    Q('Đại dương rộng hay hẹp?', ['Rất rộng', 'Hẹp', 'Như cái ao'], 0, 'Đại dương rất rộng lớn.'),
    Q('🐳 cá voi to hay nhỏ?', ['Rất to', 'Nhỏ', 'Tí xíu'], 0, 'Cá voi rất to.'),
    Q('🐢 rùa biển sống?', ['Rất lâu', 'Rất ngắn', '1 tuần'], 0, 'Rùa biển sống rất lâu.'),
    Q('Đếm: 16, 17, 18, ...?', ['19', '15', '20'], 0, 'Sau 18 là 19.'),
  ]),
  q('N3-w20', 'Tuần 20 — Côn trùng có ích 🐝🐞', 3, [
    Q('🐝 thụ phấn cho?', ['Hoa', 'Cá', 'Đá'], 0, 'Ong thụ phấn cho hoa.'),
    Q('🐞 bọ rùa ăn?', ['Rệp hại cây', 'Lá xanh', 'Trái cây'], 0, 'Bọ rùa ăn rệp hại cây.'),
    Q('🦋 phát triển từ?', ['Sâu', 'Hột', 'Đá'], 0, 'Bướm từ sâu hóa thành.'),
    Q('🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜🐜 Có mấy?', ['15', '16', '17'], 1, 'Có 16 con kiến.'),
  ]),

  // ── Tháng 2: Tết & xuân ──
  q('N3-w21', 'Tuần 21 — Tết và phong tục 🧧', 3, [
    Q('Tất niên là?', ['Bữa cơm cuối năm', 'Bữa sáng', 'Bữa mới'], 0, 'Tất niên là bữa cuối năm.'),
    Q('Giao thừa là?', ['Đêm cuối năm cũ', 'Sáng đầu năm', 'Trưa Tết'], 0, 'Giao thừa là đêm cuối năm cũ.'),
    Q('Xông đất là?', ['Người đầu tiên đến nhà', 'Quét nhà', 'Nấu cơm'], 0, 'Xông đất là người đầu tiên đến nhà ngày Tết.'),
    Q('5 + 5 = ?', ['9', '10', '11'], 1, '5 + 5 = 10.'),
  ]),
  q('N3-w22', 'Tuần 22 — Mâm cơm Tết 🍱', 3, [
    Q('Bánh chưng gói cùng?', ['Đậu xanh và thịt', 'Đường', 'Sữa'], 0, 'Bánh chưng có đậu xanh và thịt mỡ.'),
    Q('Mâm ngũ quả tượng trưng?', ['Mong ước tốt đẹp', 'Đói', 'Không gì'], 0, 'Mâm ngũ quả thể hiện ước mong tốt đẹp.'),
    Q('Câu đối Tết viết bằng?', ['Chữ Hán Nôm hoặc chữ Việt', 'Số', 'Hình vẽ'], 0, 'Câu đối thường viết bằng chữ Hán Nôm hay chữ Việt.'),
    Q('🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱🍱 Có mấy?', ['16', '17', '18'], 1, 'Có 17 mâm.'),
  ]),
  q('N3-w23', 'Tuần 23 — Mùa xuân và thiên nhiên 🌸', 3, [
    Q('Mưa xuân thường?', ['Nhẹ, mưa phùn', 'Rào to', 'Bão'], 0, 'Mưa xuân nhẹ như mưa phùn.'),
    Q('Cây cối mùa xuân?', ['Đâm chồi, nảy lộc', 'Khô héo', 'Trơ trụi'], 0, 'Cây đâm chồi nảy lộc.'),
    Q('Mùa xuân kéo dài?', ['Khoảng 3 tháng', '1 ngày', 'Cả năm'], 0, 'Mùa xuân khoảng 3 tháng.'),
    Q('🌸 + 🌸 + 🌸 + 🌸 = ?', ['3', '4', '5'], 1, 'Đếm: có 4 bông hoa.'),
  ]),
  q('N3-w24', 'Tuần 24 — Lễ hội truyền thống 🎊', 3, [
    Q('Lễ hội đền Hùng vào?', ['Mùng 10/3 âm', 'Tết Trung Thu', 'Tết Dương lịch'], 0, 'Giỗ Tổ vào mùng 10/3 âm lịch.'),
    Q('Múa lân biểu tượng?', ['May mắn, thịnh vượng', 'Buồn', 'Đói'], 0, 'Lân tượng trưng cho may mắn.'),
    Q('Đếm: 18, 19, 20 — số nào lớn nhất?', ['18', '19', '20'], 2, '20 lớn nhất.'),
    Q('Trang phục truyền thống VN là?', ['Áo dài', 'Kimono', 'Hanbok'], 0, 'Áo dài là trang phục truyền thống VN.'),
  ]),

  // ── Tháng 3: Thực vật ──
  q('N3-w25', 'Tuần 25 — Cây và quá trình lớn lên 🌱🌳', 3, [
    Q('Cây lớn từ?', ['Hạt giống', 'Đá', 'Nước'], 0, 'Cây lớn từ hạt giống.'),
    Q('Để cây phát triển cần?', ['Nước, ánh sáng, đất', 'Bóng tối', 'Không gì'], 0, 'Cây cần nước, ánh sáng và đất.'),
    Q('🌱 → 🌿 → 🌳: thứ tự đúng?', ['Đúng', 'Sai', 'Ngược'], 0, 'Cây non → cây lớn → cây trưởng thành.'),
    Q('Cây xanh giúp ta thở?', ['Cho khí ôxy', 'Hút khí', 'Không liên quan'], 0, 'Cây cho ta khí ôxy.'),
  ]),
  q('N3-w26', 'Tuần 26 — Hoa và ý nghĩa 🌺', 3, [
    Q('Hoa sen là quốc hoa VN?', ['Đúng', 'Sai', 'Không phải'], 0, 'Hoa sen là quốc hoa Việt Nam.'),
    Q('Hoa hồng 🌹 tượng trưng?', ['Tình yêu thương', 'Buồn bã', 'Tức giận'], 0, 'Hoa hồng tượng trưng cho tình yêu.'),
    Q('Hoa cúc 🌼 thường có vào?', ['Mùa thu', 'Mùa hè', 'Mùa đông'], 0, 'Hoa cúc nở mùa thu.'),
    Q('🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹 Có?', ['17', '18', '19'], 1, 'Có 18 bông hồng.'),
  ]),
  q('N3-w27', 'Tuần 27 — Quả và vitamin 🍇🥝', 3, [
    Q('🥝 kiwi giàu vitamin?', ['C', 'A', 'D'], 0, 'Kiwi giàu vitamin C.'),
    Q('🍌 chuối cung cấp?', ['Kali, năng lượng', 'Sắt thôi', 'Không gì'], 0, 'Chuối nhiều kali và năng lượng.'),
    Q('Ăn nhiều quả giúp?', ['Khỏe đẹp', 'Mệt', 'Không gì'], 0, 'Ăn quả giúp khỏe và đẹp.'),
    Q('15 - 3 = ?', ['11', '12', '13'], 1, '15 - 3 = 12.'),
  ]),
  q('N3-w28', 'Tuần 28 — Rau xanh và bữa ăn 🥗', 3, [
    Q('Bữa ăn đủ chất cần?', ['Cơm, rau, thịt cá', 'Chỉ cơm', 'Chỉ kẹo'], 0, 'Cần cơm, rau, thịt cá.'),
    Q('🥦 bông cải xanh nhiều?', ['Vitamin', 'Đường', 'Muối'], 0, 'Bông cải nhiều vitamin.'),
    Q('Rau cần nấu chín ngay không?', ['Có loại sống có loại chín', 'Luôn chín', 'Luôn sống'], 0, 'Tùy loại rau.'),
    Q('🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕🥕 Có?', ['18', '19', '20'], 1, 'Có 19 củ cà rốt.'),
  ]),

  // ── Tháng 4: Giao thông ──
  q('N3-w29', 'Tuần 29 — Phân loại phương tiện 🚗✈️🚢', 3, [
    Q('Trên không có?', ['Máy bay, trực thăng', 'Tàu thủy', 'Xe đạp'], 0, 'Máy bay, trực thăng đi trên không.'),
    Q('Dưới nước có?', ['Tàu thủy, thuyền', 'Máy bay', 'Xe đạp'], 0, 'Tàu thủy, thuyền đi dưới nước.'),
    Q('Trên đường bộ có?', ['Ô tô, xe máy', 'Máy bay', 'Tàu thủy'], 0, 'Ô tô, xe máy đi trên đường bộ.'),
    Q('🚗🚕🚌🚎🚐🚑🚒🚓🚚 Có mấy?', ['8', '9', '10'], 1, 'Có 9 loại xe.'),
  ]),
  q('N3-w30', 'Tuần 30 — Luật giao thông cơ bản 🚸', 3, [
    Q('Đi bộ trên?', ['Vỉa hè', 'Lòng đường', 'Giữa đường'], 0, 'Đi bộ trên vỉa hè.'),
    Q('Khi qua đường, bé?', ['Đi vạch trắng + nhìn 2 bên', 'Chạy nhanh', 'Bịt mắt'], 0, 'Đi vạch và nhìn hai bên.'),
    Q('Đèn 🚦 nào báo dừng?', ['Đỏ', 'Xanh', 'Vàng'], 0, 'Đèn đỏ báo dừng.'),
    Q('Đèn xanh được?', ['Đi qua', 'Dừng', 'Lùi'], 0, 'Đèn xanh được đi.'),
  ]),
  q('N3-w31', 'Tuần 31 — An toàn ngồi xe 🦺', 3, [
    Q('Ngồi ô tô 🚗 phải?', ['Cài dây an toàn', 'Đứng', 'Nhảy'], 0, 'Phải cài dây an toàn.'),
    Q('Ngồi sau xe máy phải?', ['Bám chặt, đội mũ', 'Đứng', 'Buông tay'], 0, 'Phải bám chặt và đội mũ.'),
    Q('Không thò tay/đầu ra?', ['Cửa xe đang chạy', 'Cửa nhà', 'Cửa sổ trường'], 0, 'Không thò ra cửa xe đang chạy.'),
    Q('🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖🪖 Có?', ['19', '20', '21'], 1, 'Có 20 mũ bảo hiểm.'),
  ]),
  q('N3-w32', 'Tuần 32 — Phương tiện đặc biệt 🚒🚑', 3, [
    Q('🚒 xe cứu hỏa kêu để?', ['Báo nhường đường', 'Đùa', 'Hát'], 0, 'Để báo cho xe khác nhường đường.'),
    Q('🚑 cứu thương chở?', ['Người bệnh', 'Hàng', 'Đồ chơi'], 0, 'Chở người bệnh nguy cấp.'),
    Q('Khi nghe còi 🚨, các xe?', ['Nhường đường', 'Tăng tốc', 'Chặn'], 0, 'Tất cả phải nhường đường.'),
    Q('Số gọi cứu hỏa VN là?', ['114', '113', '115'], 0, '114 là số cứu hỏa.'),
  ]),

  // ── Tháng 5: Tự nhiên ──
  q('N3-w33', 'Tuần 33 — Trái đất và vũ trụ 🌍🌟', 3, [
    Q('Trái đất 🌍 có dạng?', ['Hình cầu', 'Hình vuông', 'Hình tam giác'], 0, 'Trái đất dạng hình cầu.'),
    Q('Mặt trời ☀️ là?', ['Ngôi sao', 'Hành tinh', 'Vệ tinh'], 0, 'Mặt trời là ngôi sao.'),
    Q('Mặt trăng 🌙 quay quanh?', ['Trái đất', 'Mặt trời', 'Sao'], 0, 'Mặt trăng quay quanh Trái đất.'),
    Q('20 - 10 = ?', ['9', '10', '11'], 1, '20 - 10 = 10.'),
  ]),
  q('N3-w34', 'Tuần 34 — Bốn mùa và thời tiết 🌤️', 3, [
    Q('Bão 🌪️ rất?', ['Nguy hiểm', 'An toàn', 'Vui'], 0, 'Bão rất nguy hiểm.'),
    Q('Khi sấm sét ⛈️, bé nên?', ['Trong nhà', 'Ra sân', 'Lên cây'], 0, 'Bé nên ở trong nhà.'),
    Q('Mùa hè ở miền Nam VN?', ['Có mưa nhiều', 'Tuyết rơi', 'Khô hạn quanh năm'], 0, 'Miền Nam mùa hè mưa nhiều.'),
    Q('Có 4 mùa: xuân, hạ, thu và?', ['Đông', 'Khô', 'Lạnh'], 0, '4 mùa là xuân hạ thu đông.'),
  ]),
  q('N3-w35', 'Tuần 35 — Bảo vệ môi trường 🌍♻️', 3, [
    Q('Bé bỏ rác vào?', ['Thùng rác', 'Đường', 'Sông'], 0, 'Bé bỏ rác đúng thùng.'),
    Q('♻️ nghĩa là?', ['Tái chế', 'Bỏ đi', 'Đốt'], 0, 'Biểu tượng tái chế.'),
    Q('Tiết kiệm điện 💡 bằng?', ['Tắt khi không dùng', 'Bật cả ngày', 'Bật đêm'], 0, 'Tắt đèn khi không dùng.'),
    Q('Trồng cây giúp?', ['Trái đất xanh hơn', 'Không gì', 'Có hại'], 0, 'Trồng cây giúp môi trường xanh.'),
  ]),
  q('N3-w36', 'Tuần 36 — Bé sẵn sàng vào lớp 1 🎒🏫', 3, [
    Q('Năm sau bé là?', ['Học sinh lớp 1', 'Em bé Mầm non', 'Người lớn'], 0, 'Năm sau bé là học sinh lớp 1.'),
    Q('Đến trường tiểu học, bé sẽ?', ['Học chữ và số', 'Chỉ chơi', 'Ngủ'], 0, 'Bé học chữ và số.'),
    Q('Bé đếm được tới?', ['20 hoặc hơn', '3', '5'], 0, 'Lá đã đếm được tới 20 hoặc hơn.'),
    Q('Bé hứa với cô và bố mẹ?', ['Học giỏi, ngoan ngoãn', 'Lười', 'Quên cô'], 0, 'Bé hứa học giỏi và ngoan.'),
  ]),
];

// ============================================================
// Map id → scenario (để wire vào engine)
// ============================================================
export const PRESCHOOL_WEEKS_SCENARIOS = Object.fromEntries(
  [...PRESCHOOL_M_WEEKS, ...PRESCHOOL_C_WEEKS, ...PRESCHOOL_L_WEEKS].map((s) => [s.id, s])
);
