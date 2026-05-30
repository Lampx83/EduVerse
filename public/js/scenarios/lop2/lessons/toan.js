// ============================================================
// Lớp 2 · TOÁN — Lý thuyết + Ví dụ 36 tuần (GDPT 2018)
// Key TRÙNG id quiz: "P2-wNN-quiz".
// ============================================================

export const P2_TOAN_LESSONS = {
  // ──────────────── HK1 ────────────────
  'P2-w01-quiz': {
    topic: 'Ôn tập số đến 100',
    intro: 'Chào các em! Tuần này cô trò mình cùng ôn lại những con số quen thuộc từ 0 đến 100 nhé.',
    objectives: [
      'Đọc, viết và nhận biết các số đến 100.',
      'Tìm số liền trước, số liền sau.',
      'So sánh và sắp xếp các số theo thứ tự.',
    ],
    theory: [
      { h: 'Số có hai chữ số' },
      { p: 'Mỗi số có hai chữ số gồm hàng chục và hàng đơn vị. Ví dụ số 45 có 4 chục và 5 đơn vị.' },
      { ul: ['Số bé nhất có hai chữ số là 10.', 'Số lớn nhất có hai chữ số là 99.', 'Số liền sau là số đứng ngay phía sau, lớn hơn 1 đơn vị.'] },
      { h: 'Số liền trước, số liền sau' },
      { p: 'Muốn tìm số liền sau, em cộng thêm 1. Muốn tìm số liền trước, em bớt đi 1.' },
      { note: 'Khi so sánh hai số có hai chữ số, em xem hàng chục trước. Hàng chục lớn hơn thì số lớn hơn.' },
    ],
    examples: [
      { q: 'Tìm số liền sau của 67.', a: 'Số liền sau là số lớn hơn 1 đơn vị: 67 + 1 = 68. Vậy số liền sau của 67 là 68.' },
      { q: 'Sắp xếp các số 34, 43, 19, 50 theo thứ tự tăng dần.', a: 'So hàng chục: 19 (1 chục) bé nhất, rồi 34, 43, 50. Kết quả: 19, 34, 43, 50.' },
    ],
  },

  'P2-w02-quiz': {
    topic: 'Số bị trừ – Số trừ – Hiệu',
    intro: 'Các em ơi, trong phép trừ mỗi số đều có tên gọi riêng đấy. Cùng cô gọi tên chúng nhé!',
    objectives: [
      'Gọi đúng tên các thành phần của phép trừ.',
      'Tìm hiệu khi biết số bị trừ và số trừ.',
    ],
    theory: [
      { h: 'Tên gọi trong phép trừ' },
      { p: 'Trong phép trừ a − b = c: số đứng trước dấu trừ là SỐ BỊ TRỪ, số đứng sau dấu trừ là SỐ TRỪ, kết quả là HIỆU.' },
      { ul: ['Ví dụ 9 − 4 = 5.', '9 là số bị trừ.', '4 là số trừ.', '5 là hiệu.'] },
      { h: 'Cách tìm hiệu' },
      { p: 'Muốn tìm hiệu, em lấy số bị trừ trừ đi số trừ.' },
      { note: 'Hiệu luôn nhỏ hơn hoặc bằng số bị trừ vì mình lấy bớt đi.' },
    ],
    examples: [
      { q: 'Số bị trừ là 28, số trừ là 6. Tìm hiệu.', a: 'Hiệu = số bị trừ − số trừ = 28 − 6 = 22. Vậy hiệu là 22.' },
      { q: 'Trong phép tính 16 − 9 = 7, hãy gọi tên số 9.', a: 'Số 9 đứng sau dấu trừ nên là SỐ TRỪ.' },
    ],
  },

  'P2-w03-quiz': {
    topic: 'Số hạng – Tổng',
    intro: 'Hôm nay cô sẽ dạy các em tên gọi các số trong phép cộng nhé. Rất dễ thương đấy!',
    objectives: [
      'Gọi đúng tên số hạng và tổng.',
      'Hiểu tính chất đổi chỗ các số hạng.',
    ],
    theory: [
      { h: 'Tên gọi trong phép cộng' },
      { p: 'Trong phép cộng a + b = c: hai số a và b gọi là SỐ HẠNG, kết quả c gọi là TỔNG.' },
      { ul: ['Ví dụ 6 + 3 = 9.', '6 và 3 là các số hạng.', '9 là tổng.'] },
      { h: 'Đổi chỗ các số hạng' },
      { p: 'Khi đổi chỗ hai số hạng thì tổng không thay đổi. Ví dụ 3 + 5 = 5 + 3 = 8.' },
      { note: 'Cộng một số với 0 thì được chính số đó: 7 + 0 = 7.' },
    ],
    examples: [
      { q: 'Số hạng thứ nhất là 14, số hạng thứ hai là 5. Tìm tổng.', a: 'Tổng = 14 + 5 = 19. Vậy tổng là 19.' },
      { q: 'Không cần tính, cho biết 8 + 12 và 12 + 8 số nào lớn hơn?', a: 'Đổi chỗ số hạng thì tổng không đổi, nên 8 + 12 = 12 + 8. Hai tổng bằng nhau.' },
    ],
  },

  'P2-w04-quiz': {
    topic: 'Đề-xi-mét (dm)',
    intro: 'Các em đã biết xăng-ti-mét rồi. Tuần này cô giới thiệu một đơn vị đo dài hơn: đề-xi-mét.',
    objectives: [
      'Biết 1 dm = 10 cm.',
      'Đổi giữa dm và cm; cộng trừ với đơn vị dm.',
    ],
    theory: [
      { h: 'Đề-xi-mét là gì?' },
      { p: 'Đề-xi-mét viết tắt là dm. Đây là đơn vị đo độ dài lớn hơn xăng-ti-mét.' },
      { ul: ['1 dm = 10 cm.', '2 dm = 20 cm.', 'Đổi từ dm sang cm: nhân với 10.', 'Đổi từ cm sang dm: chia cho 10.'] },
      { h: 'Cộng trừ với dm' },
      { p: 'Khi cùng đơn vị dm, em cộng hoặc trừ số rồi giữ nguyên chữ "dm".' },
      { note: 'Một gang tay của em dài khoảng 1 đến 2 dm. Quyển sách dài khoảng 2 dm.' },
    ],
    examples: [
      { q: 'Đổi 4 dm ra xăng-ti-mét.', a: 'Mỗi dm bằng 10 cm, nên 4 dm = 4 × 10 = 40 cm.' },
      { q: 'Tính 6 dm − 2 dm.', a: 'Cùng đơn vị dm: 6 − 2 = 4. Kết quả là 4 dm.' },
    ],
  },

  'P2-w05-quiz': {
    topic: 'Phép cộng có nhớ trong phạm vi 20 (1)',
    intro: 'Các em ơi, khi cộng mà kết quả vượt qua 10 thì mình phải "nhớ". Cô sẽ chỉ mẹo nhé!',
    objectives: [
      'Cộng hai số có kết quả lớn hơn 10.',
      'Dùng mẹo "làm tròn 10" để cộng nhanh.',
    ],
    theory: [
      { h: 'Mẹo làm tròn 10' },
      { p: 'Khi cộng có nhớ, em tách một số ra để số kia tròn 10 trước, rồi cộng phần còn lại.' },
      { ul: ['9 + 5: lấy 9 + 1 = 10, còn 4, nên 10 + 4 = 14.', '8 + 6: lấy 8 + 2 = 10, còn 4, nên 10 + 4 = 14.', '7 + 5: lấy 7 + 3 = 10, còn 2, nên 10 + 2 = 12.'] },
      { h: 'Đếm tiếp' },
      { p: 'Em cũng có thể giữ số lớn rồi đếm tiếp. Ví dụ 9 + 5: đếm 10, 11, 12, 13, 14.' },
      { note: 'Nhớ các cặp số tròn 10: 9+1, 8+2, 7+3, 6+4 sẽ giúp em cộng rất nhanh.' },
    ],
    examples: [
      { q: 'Tính 8 + 7.', a: 'Lấy 8 + 2 = 10, còn lại 5. Vậy 8 + 7 = 10 + 5 = 15.' },
      { q: 'Tính 9 + 9.', a: 'Lấy 9 + 1 = 10, còn lại 8. Vậy 9 + 9 = 10 + 8 = 18.' },
    ],
  },

  'P2-w06-quiz': {
    topic: 'Phép cộng có nhớ trong phạm vi 20 (2)',
    intro: 'Mình tiếp tục luyện cộng có nhớ nhé các em. Càng làm nhiều em sẽ càng nhanh!',
    objectives: [
      'Thành thạo cộng có nhớ trong phạm vi 20.',
      'Áp dụng vào bài toán đơn giản.',
    ],
    theory: [
      { h: 'Ôn lại cách làm tròn 10' },
      { p: 'Vẫn dùng mẹo tách số để một số tròn 10, rồi cộng phần còn lại.' },
      { ul: ['9 + 7 = 9 + 1 + 6 = 10 + 6 = 16.', '8 + 5 = 8 + 2 + 3 = 10 + 3 = 13.', '6 + 8 = 6 + 4 + 4 = 10 + 4 = 14.'] },
      { h: 'Áp dụng đời sống' },
      { p: 'Nhiều bài tập là gộp hai nhóm đồ vật lại. Em chỉ cần cộng hai số là ra.' },
      { note: 'Đổi chỗ vẫn được: 7 + 8 = 8 + 7 = 15. Em có thể đặt số lớn trước cho dễ.' },
    ],
    examples: [
      { q: 'Hộp xanh có 8 cây bút, hộp đỏ có 7 cây bút. Hỏi cả hai hộp có bao nhiêu cây bút?', a: 'Cả hai hộp: 8 + 7 = 15. Vậy có 15 cây bút.' },
      { q: 'Tính 6 + 9.', a: 'Lấy 9 + 1 = 10, còn 5. Vậy 6 + 9 = 10 + 5 = 15.' },
    ],
  },

  'P2-w07-quiz': {
    topic: 'Cộng số có 2 chữ số (có nhớ): 26 + 5',
    intro: 'Tuần này cô dạy các em cộng một số có hai chữ số với một số có một chữ số, có nhớ nhé.',
    objectives: [
      'Đặt tính thẳng cột rồi cộng có nhớ.',
      'Hiểu khi nào phải nhớ 1 sang hàng chục.',
    ],
    theory: [
      { h: 'Cách đặt tính' },
      { p: 'Em viết hai số thẳng cột: hàng đơn vị dưới hàng đơn vị. Cộng từ phải sang trái, bắt đầu từ hàng đơn vị.' },
      { ul: ['Cộng hàng đơn vị trước.', 'Nếu kết quả lớn hơn 9, em viết chữ số đơn vị và nhớ 1 sang hàng chục.', 'Cộng hàng chục rồi cộng thêm số nhớ.'] },
      { h: 'Ví dụ 26 + 5' },
      { p: '6 + 5 = 11, viết 1 nhớ 1. Hàng chục: 2 + 1 (nhớ) = 3. Kết quả là 31.' },
      { note: 'Chỉ nhớ 1 khi tổng hàng đơn vị từ 10 trở lên.' },
    ],
    examples: [
      { q: 'Tính 48 + 7.', a: '8 + 7 = 15, viết 5 nhớ 1. Hàng chục: 4 + 1 = 5. Kết quả là 55.' },
      { q: 'Em có 47 viên kẹo, mẹ cho thêm 6 viên. Hỏi em có tất cả bao nhiêu viên kẹo?', a: '7 + 6 = 13, viết 3 nhớ 1. Hàng chục: 4 + 1 = 5. Vậy 47 + 6 = 53 viên kẹo.' },
    ],
  },

  'P2-w08-quiz': {
    topic: 'Cộng số có 2 chữ số (có nhớ): 36 + 15',
    intro: 'Bây giờ mình cộng hai số đều có hai chữ số nhé các em. Vẫn nhớ 1 như tuần trước thôi!',
    objectives: [
      'Cộng hai số có hai chữ số, có nhớ.',
      'Cộng cả số nhớ vào hàng chục.',
    ],
    theory: [
      { h: 'Cộng hai số hai chữ số' },
      { p: 'Đặt tính thẳng cột. Cộng hàng đơn vị trước, nếu được 10 trở lên thì nhớ 1 sang hàng chục.' },
      { ul: ['Hàng đơn vị: cộng, nhớ nếu cần.', 'Hàng chục: cộng hai chữ số chục rồi cộng thêm số nhớ.'] },
      { h: 'Ví dụ 36 + 15' },
      { p: '6 + 5 = 11, viết 1 nhớ 1. Hàng chục: 3 + 1 + 1 (nhớ) = 5. Kết quả là 51.' },
      { note: 'Đừng quên cộng số nhớ vào hàng chục, nếu không kết quả sẽ thiếu.' },
    ],
    examples: [
      { q: 'Tính 28 + 24.', a: '8 + 4 = 12, viết 2 nhớ 1. Hàng chục: 2 + 2 + 1 = 5. Kết quả là 52.' },
      { q: 'Lớp 2A có 28 bạn, lớp 2B có 27 bạn. Hỏi cả hai lớp có bao nhiêu bạn?', a: '8 + 7 = 15, viết 5 nhớ 1. Hàng chục: 2 + 2 + 1 = 5. Vậy 28 + 27 = 55 bạn.' },
    ],
  },

  'P2-w09-quiz': {
    topic: 'Bài toán có lời văn (cộng)',
    intro: 'Các em ơi, toán có lời văn giống như một câu chuyện nhỏ. Mình cùng đọc và giải nhé!',
    objectives: [
      'Đọc hiểu đề toán có lời văn.',
      'Viết phép tính và lời giải cho bài toán cộng.',
    ],
    theory: [
      { h: 'Các bước giải toán có lời văn' },
      { ul: ['Bước 1: Đọc kỹ đề, biết bài cho gì và hỏi gì.', 'Bước 2: Tìm phép tính đúng (gộp lại, thêm vào → phép cộng).', 'Bước 3: Viết lời giải, phép tính và đáp số.'] },
      { h: 'Dấu hiệu của phép cộng' },
      { p: 'Khi đề có các từ "cả hai", "tất cả", "tổng cộng", "thêm" thì thường dùng phép cộng.' },
      { note: 'Nhớ viết kèm đơn vị (viên bi, cây, con...) ở đáp số nhé.' },
    ],
    examples: [
      { q: 'An có 17 viên bi, Bình có 25 viên bi. Hỏi cả hai bạn có bao nhiêu viên bi?', a: 'Cả hai bạn có: 17 + 25 = 42 (viên bi). Đáp số: 42 viên bi.' },
      { q: 'Trên giá sách có 45 cuốn, mua thêm 18 cuốn. Hỏi giá sách có tất cả bao nhiêu cuốn?', a: 'Tất cả có: 45 + 18 = 63 (cuốn). Đáp số: 63 cuốn.' },
    ],
  },

  'P2-w10-quiz': {
    topic: 'Phép trừ có nhớ trong phạm vi 20 (1)',
    intro: 'Hôm nay mình học trừ có nhớ. Khi không trừ đủ ở hàng đơn vị, mình sẽ "mượn" nhé các em.',
    objectives: [
      'Trừ một số tròn chục dư cho số có một chữ số.',
      'Dùng cách mượn 10 để trừ.',
    ],
    theory: [
      { h: 'Trừ có nhớ là gì?' },
      { p: 'Khi số đơn vị bị trừ nhỏ hơn số trừ, em tách số thành 10 cộng phần lẻ rồi trừ từ 10.' },
      { ul: ['11 − 5: tách 11 = 10 + 1; 10 − 5 = 5, thêm 1 = 6.', '12 − 7: tách 12 = 10 + 2; 10 − 7 = 3, thêm 2 = 5.', '14 − 9: tách 14 = 10 + 4; 10 − 9 = 1, thêm 4 = 5.'] },
      { h: 'Cách đếm lùi' },
      { p: 'Em cũng có thể đếm lùi từ số bị trừ. Ví dụ 13 − 8: đếm lùi 8 bước được 5.' },
      { note: 'Nhớ kết quả của "10 trừ một số" sẽ giúp em trừ nhanh hơn.' },
    ],
    examples: [
      { q: 'Tính 15 − 6.', a: 'Tách 15 = 10 + 5. Lấy 10 − 6 = 4, thêm 5 = 9. Vậy 15 − 6 = 9.' },
      { q: 'Tính 17 − 8.', a: 'Tách 17 = 10 + 7. Lấy 10 − 8 = 2, thêm 7 = 9. Vậy 17 − 8 = 9.' },
    ],
  },

  'P2-w11-quiz': {
    topic: 'Phép trừ có nhớ trong phạm vi 20 (2)',
    intro: 'Mình luyện thêm trừ có nhớ nhé các em. Làm nhiều lần thì em sẽ rất giỏi đấy!',
    objectives: [
      'Thành thạo trừ có nhớ trong phạm vi 20.',
      'Áp dụng vào bài toán bớt đi.',
    ],
    theory: [
      { h: 'Ôn lại cách mượn 10' },
      { p: 'Vẫn tách số bị trừ thành 10 cộng phần lẻ, trừ từ 10 rồi cộng phần lẻ vào.' },
      { ul: ['16 − 7 = (10 − 7) + 6 = 3 + 6 = 9.', '15 − 9 = (10 − 9) + 5 = 1 + 5 = 6.', '13 − 5 = (10 − 5) + 3 = 5 + 3 = 8.'] },
      { h: 'Dấu hiệu phép trừ' },
      { p: 'Bài toán có từ "cho đi", "bớt", "còn lại" thì dùng phép trừ.' },
      { note: 'Kết quả phép trừ luôn nhỏ hơn số bị trừ.' },
    ],
    examples: [
      { q: 'Em có 12 cái kẹo, cho bạn 8 cái. Hỏi em còn lại bao nhiêu cái kẹo?', a: 'Còn lại: 12 − 8 = 4 (cái kẹo). Đáp số: 4 cái kẹo.' },
      { q: 'Tính 14 − 6.', a: 'Tách 14 = 10 + 4. Lấy 10 − 6 = 4, thêm 4 = 8. Vậy 14 − 6 = 8.' },
    ],
  },

  'P2-w12-quiz': {
    topic: '11 trừ đi một số · 12 trừ đi một số',
    intro: 'Tuần này mình học thuộc lòng các phép trừ bắt đầu từ 11 và 12 nhé các em.',
    objectives: [
      'Lập và nhớ bảng "11 trừ đi một số".',
      'Lập và nhớ bảng "12 trừ đi một số".',
    ],
    theory: [
      { h: '11 trừ đi một số' },
      { ul: ['11 − 2 = 9', '11 − 3 = 8', '11 − 4 = 7', '11 − 5 = 6', '11 − 6 = 5'] },
      { h: '12 trừ đi một số' },
      { ul: ['12 − 3 = 9', '12 − 4 = 8', '12 − 5 = 7', '12 − 6 = 6'] },
      { note: 'Em để ý: số trừ càng lớn thì hiệu càng nhỏ. Học thuộc các bảng này sẽ tính rất nhanh.' },
    ],
    examples: [
      { q: 'Tính 11 − 4.', a: 'Theo bảng 11 trừ đi một số: 11 − 4 = 7.' },
      { q: 'Tính 12 − 5.', a: 'Theo bảng 12 trừ đi một số: 12 − 5 = 7.' },
    ],
  },

  'P2-w13-quiz': {
    topic: 'Trừ số có 2 chữ số (có nhớ)',
    intro: 'Bây giờ mình trừ hai số có hai chữ số, khi hàng đơn vị không trừ đủ thì mượn nhé các em.',
    objectives: [
      'Đặt tính trừ thẳng cột.',
      'Mượn 1 chục khi hàng đơn vị không đủ trừ.',
    ],
    theory: [
      { h: 'Cách trừ có nhớ' },
      { p: 'Đặt tính thẳng cột, trừ từ hàng đơn vị. Nếu hàng đơn vị bị trừ nhỏ hơn, em mượn 1 chục (thành 10 đơn vị).' },
      { ul: ['Mượn 1 chục thì hàng đơn vị được thêm 10.', 'Sau khi mượn, hàng chục của số bị trừ bớt đi 1.'] },
      { h: 'Ví dụ 32 − 8' },
      { p: '2 không trừ được 8, mượn 1 chục thành 12. 12 − 8 = 4. Hàng chục còn 2, bớt 1 còn 1... thực ra 3 bớt 1 = 2, không có số trừ nên giữ 2. Kết quả 24.' },
      { note: 'Nhớ bớt 1 ở hàng chục sau khi đã mượn, nếu không kết quả sẽ sai.' },
    ],
    examples: [
      { q: 'Tính 51 − 15.', a: '1 không trừ được 5, mượn 1 chục thành 11. 11 − 5 = 6. Hàng chục: 5 bớt 1 còn 4, 4 − 1 = 3. Kết quả là 36.' },
      { q: 'Cửa hàng có 92 chiếc áo, bán đi 36 chiếc. Hỏi còn lại bao nhiêu chiếc áo?', a: '2 không trừ được 6, mượn thành 12. 12 − 6 = 6. Hàng chục: 9 bớt 1 còn 8, 8 − 3 = 5. Vậy còn 56 chiếc áo.' },
    ],
  },

  'P2-w14-quiz': {
    topic: 'Bài toán có lời văn (trừ)',
    intro: 'Mình lại đọc những câu chuyện toán học, nhưng lần này là phép trừ nhé các em.',
    objectives: [
      'Nhận biết bài toán dùng phép trừ.',
      'Trình bày lời giải, phép tính và đáp số.',
    ],
    theory: [
      { h: 'Khi nào dùng phép trừ?' },
      { p: 'Khi đề hỏi "còn lại bao nhiêu", "ít hơn", hoặc lấy bớt đi một phần thì dùng phép trừ.' },
      { ul: ['Bước 1: Đọc đề, tìm số ban đầu và số bị bớt.', 'Bước 2: Lấy số lớn trừ số bé.', 'Bước 3: Viết lời giải và đáp số kèm đơn vị.'] },
      { note: 'Số bị trừ luôn là số ban đầu (số lớn), số trừ là phần lấy đi.' },
    ],
    examples: [
      { q: 'Lan có 35 nhãn vở, cho bạn 12 cái. Hỏi Lan còn lại bao nhiêu nhãn vở?', a: 'Còn lại: 35 − 12 = 23 (nhãn vở). Đáp số: 23 nhãn vở.' },
      { q: 'Quyển sách có 84 trang, em đã đọc 26 trang. Hỏi còn bao nhiêu trang chưa đọc?', a: 'Còn lại: 84 − 26 = 58 (trang). Đáp số: 58 trang.' },
    ],
  },

  'P2-w15-quiz': {
    topic: 'Hình tứ giác · Hình chữ nhật',
    intro: 'Quanh em có rất nhiều hình thú vị. Tuần này mình tìm hiểu hình tứ giác và hình chữ nhật nhé!',
    objectives: [
      'Nhận biết hình tứ giác, hình chữ nhật, hình vuông.',
      'Đếm số cạnh và đỉnh của hình.',
    ],
    theory: [
      { h: 'Hình tứ giác' },
      { p: 'Hình tứ giác là hình có 4 cạnh và 4 đỉnh. "Tứ" nghĩa là bốn.' },
      { ul: ['Hình chữ nhật là tứ giác có 4 góc vuông, hai cạnh dài bằng nhau và hai cạnh ngắn bằng nhau.', 'Hình vuông là tứ giác có 4 cạnh bằng nhau và 4 góc vuông.'] },
      { h: 'Đồ vật quanh em' },
      { p: 'Tờ giấy A4, mặt bàn, quyển vở thường có dạng hình chữ nhật. Viên gạch hoa, khăn mùi xoa thường là hình vuông.' },
      { note: 'Hình vuông cũng là một loại tứ giác đặc biệt vì nó có đủ 4 cạnh.' },
    ],
    examples: [
      { q: 'Hình tứ giác có mấy cạnh và mấy đỉnh?', a: 'Hình tứ giác có 4 cạnh và 4 đỉnh.' },
      { q: 'Trong các hình: hình vuông, hình chữ nhật, hình thoi, có bao nhiêu hình là tứ giác?', a: 'Cả ba hình đều có 4 cạnh nên đều là tứ giác. Có 3 tứ giác.' },
    ],
  },

  'P2-w16-quiz': {
    topic: 'Mét (m)',
    intro: 'Để đo những vật dài như chiều cao của em hay chiều dài lớp học, mình dùng đơn vị mét nhé!',
    objectives: [
      'Biết 1 m = 10 dm = 100 cm.',
      'Đổi đơn vị và tính toán với mét.',
    ],
    theory: [
      { h: 'Mét là gì?' },
      { p: 'Mét viết tắt là m, là đơn vị đo độ dài lớn. Mét dùng để đo những vật khá dài.' },
      { ul: ['1 m = 10 dm.', '1 m = 100 cm.', 'Chiều cao của một bạn lớp 2 khoảng hơn 1 m.'] },
      { h: 'Tính với mét' },
      { p: 'Khi cùng đơn vị mét, em cộng trừ các số rồi giữ chữ "m". Khi đổi sang cm thì nhân với 100.' },
      { note: '1 m 70 cm nghĩa là 100 cm + 70 cm = 170 cm.' },
    ],
    examples: [
      { q: 'Bố cao 1 m 70 cm. Hỏi bố cao bao nhiêu xăng-ti-mét?', a: '1 m = 100 cm, thêm 70 cm = 170 cm. Vậy bố cao 170 cm.' },
      { q: 'Tính 2 m + 3 m.', a: 'Cùng đơn vị mét: 2 + 3 = 5. Kết quả là 5 m.' },
    ],
  },

  'P2-w17-quiz': {
    topic: 'Ki-lô-gam (kg)',
    intro: 'Muốn biết một vật nặng bao nhiêu, mình cân nó lên với đơn vị ki-lô-gam nhé các em!',
    objectives: [
      'Biết ki-lô-gam là đơn vị đo khối lượng; 1 kg = 1000 g.',
      'Cộng trừ các số đo theo kg.',
    ],
    theory: [
      { h: 'Ki-lô-gam là gì?' },
      { p: 'Ki-lô-gam viết tắt là kg, dùng để đo khối lượng (cân nặng) của vật.' },
      { ul: ['1 kg = 1000 g (gam).', 'Vật nặng dùng kg, vật nhẹ dùng g.', 'Để cân vật, ta dùng cái cân.'] },
      { h: 'Tính với kg' },
      { p: 'Khi cùng đơn vị kg, em cộng hoặc trừ các số rồi giữ chữ "kg".' },
      { note: 'Một bao gạo thường nặng 5 kg hoặc 10 kg.' },
    ],
    examples: [
      { q: 'Cân đu đủ nặng 3 kg và dưa hấu nặng 5 kg. Hỏi cả hai nặng bao nhiêu ki-lô-gam?', a: 'Cả hai nặng: 3 + 5 = 8 (kg). Đáp số: 8 kg.' },
      { q: 'Túi cam nặng 5 kg, mẹ lấy bớt 2 kg. Hỏi túi còn lại nặng bao nhiêu?', a: 'Còn lại: 5 − 2 = 3 (kg). Đáp số: 3 kg.' },
    ],
  },

  'P2-w18-quiz': {
    topic: 'Kiểm tra Học kỳ 1',
    intro: 'Các em ơi, đây là tuần ôn tập để kiểm tra cuối học kỳ 1. Mình cùng hệ thống lại kiến thức nhé!',
    objectives: [
      'Ôn lại số đến 100, cộng trừ có nhớ.',
      'Ôn các đơn vị đo dm, m, kg và hình học.',
    ],
    theory: [
      { h: 'Về số và phép tính' },
      { ul: ['Số liền sau cộng thêm 1, số liền trước bớt đi 1.', 'Cộng có nhớ: nhớ 1 khi hàng đơn vị từ 10 trở lên.', 'Trừ có nhớ: mượn 1 chục khi hàng đơn vị không đủ trừ.'] },
      { h: 'Về đơn vị đo' },
      { ul: ['1 dm = 10 cm.', '1 m = 100 cm = 10 dm.', '1 kg = 1000 g.'] },
      { h: 'Về hình học' },
      { p: 'Hình tứ giác có 4 cạnh. Hình chữ nhật và hình vuông là tứ giác có 4 góc vuông.' },
      { note: 'Khi làm bài kiểm tra, em đọc kỹ đề, tính cẩn thận và kiểm tra lại kết quả.' },
    ],
    examples: [
      { q: 'Tính 48 + 17.', a: '8 + 7 = 15, viết 5 nhớ 1. Hàng chục: 4 + 1 + 1 = 6. Kết quả là 65.' },
      { q: 'Em có 36 viên bi, cho bạn 8 viên. Hỏi còn bao nhiêu viên?', a: 'Còn lại: 36 − 8 = 28 (viên bi). Đáp số: 28 viên bi.' },
    ],
  },

  // ──────────────── HK2 ────────────────
  'P2-w19-quiz': {
    topic: 'Bảng nhân 2',
    intro: 'Chào học kỳ 2! Tuần này mình bắt đầu học phép nhân, dễ thương nhất là bảng nhân 2 nhé các em.',
    objectives: [
      'Hiểu phép nhân là cộng các số bằng nhau.',
      'Đọc thuộc bảng nhân 2.',
    ],
    theory: [
      { h: 'Phép nhân là gì?' },
      { p: 'Nhân là cách viết gọn của phép cộng nhiều số giống nhau. Ví dụ 2 + 2 + 2 = 2 × 3 = 6.' },
      { h: 'Bảng nhân 2' },
      { ul: ['2 × 1 = 2; 2 × 2 = 4; 2 × 3 = 6', '2 × 4 = 8; 2 × 5 = 10; 2 × 6 = 12', '2 × 7 = 14; 2 × 8 = 16; 2 × 9 = 18; 2 × 10 = 20'] },
      { note: 'Kết quả bảng nhân 2 đều là số chẵn, mỗi lần tăng thêm 2.' },
    ],
    examples: [
      { q: 'Có 2 hộp, mỗi hộp 8 cây bút. Hỏi có tất cả bao nhiêu cây bút?', a: 'Mỗi hộp 8 cây, có 2 hộp: 2 × 8 = 16. Vậy có 16 cây bút.' },
      { q: 'Tính 2 × 7.', a: 'Theo bảng nhân 2: 2 × 7 = 14.' },
    ],
  },

  'P2-w20-quiz': {
    topic: 'Bảng nhân 5',
    intro: 'Bảng nhân 5 rất dễ nhớ vì các kết quả đều tận cùng bằng 0 hoặc 5 đấy các em!',
    objectives: [
      'Đọc thuộc bảng nhân 5.',
      'Áp dụng bảng nhân 5 vào bài toán.',
    ],
    theory: [
      { h: 'Bảng nhân 5' },
      { ul: ['5 × 1 = 5; 5 × 2 = 10; 5 × 3 = 15', '5 × 4 = 20; 5 × 5 = 25; 5 × 6 = 30', '5 × 7 = 35; 5 × 8 = 40; 5 × 9 = 45; 5 × 10 = 50'] },
      { h: 'Mẹo nhớ' },
      { p: 'Mỗi lần nhân thêm, kết quả tăng 5. Các kết quả tận cùng lần lượt là 5, 0, 5, 0...' },
      { note: 'Đếm cách 5: 5, 10, 15, 20, 25... chính là bảng nhân 5.' },
    ],
    examples: [
      { q: 'Một bó hoa có 5 bông. Hỏi 7 bó có bao nhiêu bông hoa?', a: 'Mỗi bó 5 bông, 7 bó: 5 × 7 = 35. Vậy có 35 bông hoa.' },
      { q: 'Tính 5 × 8.', a: 'Theo bảng nhân 5: 5 × 8 = 40.' },
    ],
  },

  'P2-w21-quiz': {
    topic: 'Bảng nhân 3',
    intro: 'Mình học tiếp bảng nhân 3 nhé các em. Đọc to và nhịp nhàng sẽ dễ thuộc hơn đấy!',
    objectives: [
      'Đọc thuộc bảng nhân 3.',
      'Vận dụng bảng nhân 3 vào bài toán thực tế.',
    ],
    theory: [
      { h: 'Bảng nhân 3' },
      { ul: ['3 × 1 = 3; 3 × 2 = 6; 3 × 3 = 9', '3 × 4 = 12; 3 × 5 = 15; 3 × 6 = 18', '3 × 7 = 21; 3 × 8 = 24; 3 × 9 = 27; 3 × 10 = 30'] },
      { h: 'Mẹo nhớ' },
      { p: 'Mỗi lần nhân thêm, kết quả tăng 3. Em có thể đếm cách 3: 3, 6, 9, 12, 15...' },
      { note: 'Nhân là gộp các nhóm bằng nhau, nên 3 × 5 nghĩa là 5 nhóm, mỗi nhóm 3.' },
    ],
    examples: [
      { q: 'Mỗi xe đạp ba bánh có 3 bánh. Hỏi 5 xe có bao nhiêu bánh?', a: 'Mỗi xe 3 bánh, 5 xe: 3 × 5 = 15. Vậy có 15 bánh.' },
      { q: 'Tính 3 × 8.', a: 'Theo bảng nhân 3: 3 × 8 = 24.' },
    ],
  },

  'P2-w22-quiz': {
    topic: 'Nghỉ Tết — Toán vui ngày Tết',
    intro: 'Chúc mừng năm mới các em! Tuần nghỉ Tết, mình chơi vài bài toán vui về ngày Tết nhé.',
    objectives: [
      'Tính toán nhẹ nhàng qua các hoạt động ngày Tết.',
      'Thực hành cộng, trừ, nhân với tiền lì xì và bánh kẹo.',
    ],
    theory: [
      { h: 'Toán trong ngày Tết' },
      { p: 'Ngày Tết có rất nhiều con số vui: mâm ngũ quả có 5 loại quả, phong bao lì xì, cành đào nở hoa...' },
      { ul: ['Lì xì 2 tờ 50.000đ thì có 2 × 50.000 = 100.000 đồng.', 'Bánh chưng có hình khối hộp, gói lá vuông vắn.', 'Đếm số bông hoa nở trên cành đào là một bài toán đếm vui.'] },
      { note: 'Tết là dịp để em vừa chơi vừa luyện tính nhẩm cùng ông bà, bố mẹ nhé!' },
    ],
    examples: [
      { q: 'Em có 5 phong bao lì xì, mỗi phong bao 20.000đ. Hỏi em có tất cả bao nhiêu tiền?', a: 'Tổng tiền: 5 × 20.000 = 100.000 đồng. Đáp số: 100.000 đồng.' },
      { q: 'Cành đào nở 12 bông, sau đó rụng mất 4 bông. Hỏi còn lại bao nhiêu bông?', a: 'Còn lại: 12 − 4 = 8 (bông). Đáp số: 8 bông hoa.' },
    ],
  },

  'P2-w23-quiz': {
    topic: 'Bảng nhân 4',
    intro: 'Sau Tết mình học tiếp bảng nhân 4 nhé các em. Cố gắng đọc thuộc để tính nhanh hơn!',
    objectives: [
      'Đọc thuộc bảng nhân 4.',
      'Áp dụng bảng nhân 4 vào bài toán.',
    ],
    theory: [
      { h: 'Bảng nhân 4' },
      { ul: ['4 × 1 = 4; 4 × 2 = 8; 4 × 3 = 12', '4 × 4 = 16; 4 × 5 = 20; 4 × 6 = 24', '4 × 7 = 28; 4 × 8 = 32; 4 × 9 = 36; 4 × 10 = 40'] },
      { h: 'Mẹo nhớ' },
      { p: 'Mỗi lần nhân thêm, kết quả tăng 4. Bảng nhân 4 gấp đôi bảng nhân 2.' },
      { note: '4 × 3 chính là 2 × 3 rồi nhân đôi: 6 × 2 = 12.' },
    ],
    examples: [
      { q: 'Mỗi cái bàn có 4 chân. Hỏi 6 cái bàn có bao nhiêu chân?', a: 'Mỗi bàn 4 chân, 6 bàn: 4 × 6 = 24. Vậy có 24 chân.' },
      { q: 'Tính 4 × 9.', a: 'Theo bảng nhân 4: 4 × 9 = 36.' },
    ],
  },

  'P2-w24-quiz': {
    topic: 'Bảng chia 2',
    intro: 'Học nhân rồi, giờ mình học chia nhé các em. Chia là chia đều ra các phần bằng nhau.',
    objectives: [
      'Hiểu phép chia là chia đều thành các phần bằng nhau.',
      'Đọc thuộc bảng chia 2 từ bảng nhân 2.',
    ],
    theory: [
      { h: 'Phép chia là gì?' },
      { p: 'Chia là chia một số đồ vật thành các phần bằng nhau. Phép chia ngược với phép nhân.' },
      { h: 'Bảng chia 2' },
      { ul: ['Vì 2 × 3 = 6 nên 6 : 2 = 3.', '10 : 2 = 5; 14 : 2 = 7; 18 : 2 = 9; 20 : 2 = 10.'] },
      { note: 'Muốn chia cho 2, em nhớ lại bảng nhân 2: hỏi "2 nhân mấy bằng số này?".' },
    ],
    examples: [
      { q: 'Có 12 cái kẹo chia đều cho 2 bạn. Hỏi mỗi bạn được mấy cái?', a: 'Mỗi bạn được: 12 : 2 = 6 (cái kẹo). Đáp số: 6 cái kẹo.' },
      { q: 'Tính 18 : 2.', a: 'Vì 2 × 9 = 18 nên 18 : 2 = 9.' },
    ],
  },

  'P2-w25-quiz': {
    topic: 'Bảng chia 5',
    intro: 'Mình học bảng chia 5 nhé các em. Nó dựa trên bảng nhân 5 mà em đã thuộc rồi đấy!',
    objectives: [
      'Lập bảng chia 5 từ bảng nhân 5.',
      'Vận dụng vào bài toán chia đều.',
    ],
    theory: [
      { h: 'Bảng chia 5' },
      { ul: ['Vì 5 × 2 = 10 nên 10 : 5 = 2.', '15 : 5 = 3; 25 : 5 = 5; 35 : 5 = 7; 50 : 5 = 10.'] },
      { h: 'Cách nhớ' },
      { p: 'Muốn chia cho 5, em hỏi "5 nhân mấy bằng số này?". Câu trả lời chính là kết quả.' },
      { note: 'Các số chia hết cho 5 đều tận cùng bằng 0 hoặc 5.' },
    ],
    examples: [
      { q: 'Có 40 chiếc bút chia đều vào 5 hộp. Hỏi mỗi hộp có mấy chiếc?', a: 'Mỗi hộp có: 40 : 5 = 8 (chiếc bút). Đáp số: 8 chiếc bút.' },
      { q: 'Tính 35 : 5.', a: 'Vì 5 × 7 = 35 nên 35 : 5 = 7.' },
    ],
  },

  'P2-w26-quiz': {
    topic: 'Bảng chia 3',
    intro: 'Tiếp tục nào các em, mình học bảng chia 3 dựa trên bảng nhân 3 nhé!',
    objectives: [
      'Lập bảng chia 3 từ bảng nhân 3.',
      'Giải bài toán chia đều.',
    ],
    theory: [
      { h: 'Bảng chia 3' },
      { ul: ['Vì 3 × 3 = 9 nên 9 : 3 = 3.', '15 : 3 = 5; 18 : 3 = 6; 24 : 3 = 8; 27 : 3 = 9.'] },
      { h: 'Cách nhớ' },
      { p: 'Muốn chia cho 3, em hỏi "3 nhân mấy bằng số này?".' },
      { note: 'Phép chia và phép nhân là hai phép tính ngược nhau, học cùng nhau sẽ dễ nhớ.' },
    ],
    examples: [
      { q: 'Có 21 cái bánh chia đều vào 3 đĩa. Hỏi mỗi đĩa có mấy cái?', a: 'Mỗi đĩa có: 21 : 3 = 7 (cái bánh). Đáp số: 7 cái bánh.' },
      { q: 'Tính 24 : 3.', a: 'Vì 3 × 8 = 24 nên 24 : 3 = 8.' },
    ],
  },

  'P2-w27-quiz': {
    topic: 'Bảng chia 4',
    intro: 'Bảng chia 4 là bảng chia cuối cùng lớp 2 mình học nhé các em. Cố lên!',
    objectives: [
      'Lập bảng chia 4 từ bảng nhân 4.',
      'Vận dụng vào bài toán thực tế.',
    ],
    theory: [
      { h: 'Bảng chia 4' },
      { ul: ['Vì 4 × 3 = 12 nên 12 : 4 = 3.', '20 : 4 = 5; 28 : 4 = 7; 32 : 4 = 8; 40 : 4 = 10.'] },
      { h: 'Cách nhớ' },
      { p: 'Muốn chia cho 4, em hỏi "4 nhân mấy bằng số này?".' },
      { note: 'Em đã học chia cho 2, 3, 4, 5. Hãy ôn đều cả bốn bảng nhé.' },
    ],
    examples: [
      { q: 'Có 36 quyển vở chia đều cho 4 bạn. Hỏi mỗi bạn được mấy quyển?', a: 'Mỗi bạn được: 36 : 4 = 9 (quyển vở). Đáp số: 9 quyển vở.' },
      { q: 'Tính 28 : 4.', a: 'Vì 4 × 7 = 28 nên 28 : 4 = 7.' },
    ],
  },

  'P2-w28-quiz': {
    topic: 'Lít (l)',
    intro: 'Muốn biết một bình đựng được bao nhiêu nước, mình dùng đơn vị lít nhé các em!',
    objectives: [
      'Biết lít là đơn vị đo dung tích chất lỏng.',
      'Cộng, trừ, chia với đơn vị lít.',
    ],
    theory: [
      { h: 'Lít là gì?' },
      { p: 'Lít viết tắt là l, dùng để đo lượng chất lỏng như nước, dầu, sữa.' },
      { ul: ['1 lít = 1000 ml (mi-li-lít).', 'Chai nước suối thường là 0,5 lít hoặc 1 lít.', 'Khi cùng đơn vị lít, em cộng trừ số rồi giữ chữ "l".'] },
      { note: 'Đo chất lỏng dùng lít; đo độ dài dùng cm, m; cân nặng dùng kg. Đừng nhầm nhé!' },
    ],
    examples: [
      { q: 'Bình nước có 5 lít, rót đi 2 lít. Hỏi bình còn lại bao nhiêu lít?', a: 'Còn lại: 5 − 2 = 3 (lít). Đáp số: 3 lít.' },
      { q: 'Đong đều 10 lít nước vào 2 thùng. Hỏi mỗi thùng có mấy lít?', a: 'Mỗi thùng: 10 : 2 = 5 (lít). Đáp số: 5 lít.' },
    ],
  },

  'P2-w29-quiz': {
    topic: 'Số có ba chữ số (1)',
    intro: 'Các em ơi, giờ mình làm quen với những số lớn hơn: số có ba chữ số nhé!',
    objectives: [
      'Đọc, viết số có ba chữ số.',
      'Nhận biết hàng trăm, hàng chục, hàng đơn vị.',
    ],
    theory: [
      { h: 'Cấu tạo số có ba chữ số' },
      { p: 'Số có ba chữ số gồm hàng trăm, hàng chục và hàng đơn vị. Ví dụ 235 có 2 trăm, 3 chục, 5 đơn vị.' },
      { ul: ['Số bé nhất có ba chữ số là 100.', 'Số lớn nhất có ba chữ số là 999.', 'Khi hàng chục là 0, ta đọc thêm chữ "linh", ví dụ 408 đọc là "bốn trăm linh tám".'] },
      { note: 'Vị trí của một chữ số cho biết nó là trăm, chục hay đơn vị.' },
    ],
    examples: [
      { q: 'Viết số gồm 2 trăm, 3 chục, 5 đơn vị.', a: '2 trăm là 200, 3 chục là 30, 5 đơn vị là 5. Cộng lại: 200 + 30 + 5 = 235.' },
      { q: 'Trong số 537, chữ số 3 ở hàng nào?', a: 'Số 537 có 5 trăm, 3 chục, 7 đơn vị. Vậy chữ số 3 ở hàng chục.' },
    ],
  },

  'P2-w30-quiz': {
    topic: 'Số có ba chữ số (2) – So sánh',
    intro: 'Mình học cách so sánh các số có ba chữ số nhé các em. Nhớ xem hàng trăm trước!',
    objectives: [
      'So sánh hai số có ba chữ số.',
      'Sắp xếp các số theo thứ tự.',
    ],
    theory: [
      { h: 'Cách so sánh' },
      { p: 'So sánh số có ba chữ số, em xem từ hàng cao nhất xuống thấp.' },
      { ul: ['Xem hàng trăm trước: hàng trăm lớn hơn thì số lớn hơn.', 'Nếu hàng trăm bằng nhau, xem hàng chục.', 'Nếu hàng chục bằng nhau, xem hàng đơn vị.'] },
      { h: 'Số tròn trăm' },
      { p: 'Số tròn trăm có hàng chục và hàng đơn vị đều là 0, ví dụ 300, 400.' },
      { note: 'So sánh giống như xếp hàng: ai có hàng trăm to thì đứng trước.' },
    ],
    examples: [
      { q: 'So sánh 234 và 243.', a: 'Hàng trăm cùng là 2. Hàng chục: 3 < 4. Vậy 234 < 243.' },
      { q: 'Sắp xếp tăng dần: 234, 432, 342, 243.', a: 'So hàng trăm và hàng chục: 234 < 243 < 342 < 432.' },
    ],
  },

  'P2-w31-quiz': {
    topic: 'Cộng – trừ số có 3 chữ số (không nhớ)',
    intro: 'Mình tập cộng trừ số có ba chữ số nhé các em. Tuần này chưa cần nhớ nên rất dễ!',
    objectives: [
      'Đặt tính và tính cộng, trừ số có ba chữ số không nhớ.',
      'Tính theo từng hàng từ phải sang trái.',
    ],
    theory: [
      { h: 'Cách đặt tính' },
      { p: 'Viết các số thẳng cột: trăm dưới trăm, chục dưới chục, đơn vị dưới đơn vị. Tính từ phải sang trái.' },
      { ul: ['Cộng (hoặc trừ) hàng đơn vị trước.', 'Rồi đến hàng chục.', 'Cuối cùng là hàng trăm.'] },
      { note: 'Không nhớ nghĩa là mỗi hàng cộng lại không vượt quá 9, trừ luôn đủ.' },
    ],
    examples: [
      { q: 'Tính 234 + 142.', a: 'Đơn vị: 4 + 2 = 6. Chục: 3 + 4 = 7. Trăm: 2 + 1 = 3. Kết quả là 376.' },
      { q: 'Tính 456 − 123.', a: 'Đơn vị: 6 − 3 = 3. Chục: 5 − 2 = 3. Trăm: 4 − 1 = 3. Kết quả là 333.' },
    ],
  },

  'P2-w32-quiz': {
    topic: 'Cộng số có 3 chữ số (có nhớ)',
    intro: 'Bây giờ mình cộng số có ba chữ số có nhớ nhé các em. Vẫn nhớ 1 sang hàng bên trái thôi!',
    objectives: [
      'Cộng số có ba chữ số có nhớ.',
      'Nhớ 1 sang hàng chục hoặc hàng trăm.',
    ],
    theory: [
      { h: 'Cách cộng có nhớ' },
      { p: 'Cộng từ phải sang trái. Khi tổng một hàng từ 10 trở lên, em viết chữ số đơn vị và nhớ 1 sang hàng bên trái.' },
      { ul: ['Hàng đơn vị: cộng, nhớ nếu cần.', 'Hàng chục: cộng hai số rồi cộng số nhớ, lại nhớ nếu cần.', 'Hàng trăm: cộng hai số rồi cộng số nhớ.'] },
      { note: 'Mỗi lần chỉ nhớ 1, và nhớ sang hàng ngay bên trái.' },
    ],
    examples: [
      { q: 'Tính 245 + 178.', a: 'Đơn vị: 5 + 8 = 13, viết 3 nhớ 1. Chục: 4 + 7 + 1 = 12, viết 2 nhớ 1. Trăm: 2 + 1 + 1 = 4. Kết quả là 423.' },
      { q: 'Tính 489 + 137.', a: 'Đơn vị: 9 + 7 = 16, viết 6 nhớ 1. Chục: 8 + 3 + 1 = 12, viết 2 nhớ 1. Trăm: 4 + 1 + 1 = 6. Kết quả là 626.' },
    ],
  },

  'P2-w33-quiz': {
    topic: 'Trừ số có 3 chữ số (có nhớ)',
    intro: 'Mình học trừ số có ba chữ số có nhớ nhé các em. Khi không đủ trừ thì mượn 1 từ hàng bên cạnh.',
    objectives: [
      'Trừ số có ba chữ số có nhớ.',
      'Mượn 1 từ hàng bên trái khi cần.',
    ],
    theory: [
      { h: 'Cách trừ có nhớ' },
      { p: 'Trừ từ phải sang trái. Khi hàng nào không đủ trừ, em mượn 1 từ hàng bên trái (được thêm 10).' },
      { ul: ['Mượn 1 từ hàng bên trái thì hàng đó bớt đi 1.', 'Hàng được mượn cộng thêm 10 rồi mới trừ.'] },
      { note: 'Khi gặp số 0 ở hàng phải mượn, em mượn tiếp từ hàng cao hơn.' },
    ],
    examples: [
      { q: 'Tính 524 − 178.', a: 'Đơn vị: 4 không trừ được 8, mượn thành 14; 14 − 8 = 6. Chục: 2 còn 1, 1 không trừ được 7, mượn thành 11; 11 − 7 = 4. Trăm: 5 còn 4, 4 − 1 = 3. Kết quả là 346.' },
      { q: 'Tính 700 − 234.', a: 'Lần lượt mượn: 700 − 234 = 466. (Đơn vị 10 − 4 = 6, chục 9 − 3 = 6, trăm 6 − 2 = 4 sau khi mượn.)' },
    ],
  },

  'P2-w34-quiz': {
    topic: 'Tiền Việt Nam',
    intro: 'Tiền Việt Nam có nhiều mệnh giá khác nhau. Mình học cách tính tiền khi mua bán nhé các em!',
    objectives: [
      'Nhận biết các tờ tiền và mệnh giá.',
      'Tính tổng tiền và tiền trả lại.',
    ],
    theory: [
      { h: 'Các tờ tiền thường gặp' },
      { p: 'Tiền Việt Nam có các tờ 1.000đ, 2.000đ, 5.000đ, 10.000đ, 20.000đ, 50.000đ...' },
      { ul: ['Muốn biết tổng tiền, em cộng các tờ lại.', 'Muốn biết tiền trả lại, em lấy tiền đưa trừ giá món hàng.', 'Có thể đổi 1 tờ lớn thành nhiều tờ nhỏ bằng phép chia.'] },
      { note: 'Khi mua hàng, em nhớ kiểm tra tiền trả lại cho đúng nhé.' },
    ],
    examples: [
      { q: 'Em đưa tờ 20.000đ để mua bút giá 14.000đ. Hỏi cô bán hàng trả lại bao nhiêu?', a: 'Tiền trả lại: 20.000 − 14.000 = 6.000 đồng. Đáp số: 6.000 đồng.' },
      { q: 'Mẹ mua rau 12.000đ và cá 25.000đ. Hỏi mẹ phải trả tất cả bao nhiêu tiền?', a: 'Tổng tiền: 12.000 + 25.000 = 37.000 đồng. Đáp số: 37.000 đồng.' },
    ],
  },

  'P2-w35-quiz': {
    topic: 'Chu vi tam giác – tứ giác',
    intro: 'Tuần này mình học tính chu vi - đó là tổng độ dài các cạnh của một hình nhé các em!',
    objectives: [
      'Hiểu chu vi là tổng độ dài các cạnh.',
      'Tính chu vi tam giác và tứ giác.',
    ],
    theory: [
      { h: 'Chu vi là gì?' },
      { p: 'Chu vi của một hình là tổng độ dài tất cả các cạnh của hình đó.' },
      { ul: ['Chu vi tam giác = tổng độ dài 3 cạnh.', 'Chu vi tứ giác = tổng độ dài 4 cạnh.', 'Chu vi hình vuông = cạnh × 4 (vì 4 cạnh bằng nhau).', 'Chu vi hình chữ nhật = (dài + rộng) × 2.'] },
      { note: 'Tất cả các cạnh phải cùng đơn vị đo (ví dụ cùng là cm) thì mới cộng được.' },
    ],
    examples: [
      { q: 'Tam giác có ba cạnh dài 4 cm, 5 cm, 6 cm. Tính chu vi.', a: 'Chu vi = 4 + 5 + 6 = 15 cm.' },
      { q: 'Hình vuông có cạnh 8 cm. Tính chu vi.', a: 'Hình vuông có 4 cạnh bằng nhau: chu vi = 8 × 4 = 32 cm.' },
    ],
  },

  'P2-w36-quiz': {
    topic: 'Ôn tập cuối năm',
    intro: 'Một năm học sắp khép lại rồi các em! Mình cùng ôn lại tất cả kiến thức Toán lớp 2 nhé.',
    objectives: [
      'Ôn lại bảng nhân, bảng chia.',
      'Ôn cộng trừ số có ba chữ số, đơn vị đo, hình học và tiền.',
    ],
    theory: [
      { h: 'Nhân và chia' },
      { p: 'Em đã học bảng nhân 2, 3, 4, 5 và bảng chia tương ứng. Nhân và chia là hai phép tính ngược nhau.' },
      { h: 'Cộng trừ và đơn vị đo' },
      { ul: ['Cộng trừ số có ba chữ số: tính từ phải sang trái, nhớ hoặc mượn khi cần.', '1 m = 100 cm; 1 kg = 1000 g; 1 lít = 1000 ml.'] },
      { h: 'Hình học và tiền' },
      { p: 'Chu vi hình vuông = cạnh × 4. Chu vi hình chữ nhật = (dài + rộng) × 2. Khi mua hàng, tiền trả lại = tiền đưa − giá hàng.' },
      { note: 'Em đã rất cố gắng cả năm. Hãy bình tĩnh, đọc kỹ và làm bài thật cẩn thận nhé!' },
    ],
    examples: [
      { q: 'Tính 356 + 247.', a: 'Đơn vị: 6 + 7 = 13, viết 3 nhớ 1. Chục: 5 + 4 + 1 = 10, viết 0 nhớ 1. Trăm: 3 + 2 + 1 = 6. Kết quả là 603.' },
      { q: 'Hình vuông có cạnh 6 cm. Tính chu vi.', a: 'Chu vi = 6 × 4 = 24 cm.' },
    ],
  },
};
