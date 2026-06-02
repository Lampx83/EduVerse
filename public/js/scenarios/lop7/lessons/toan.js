// ============================================================
// Lớp 7 · TOÁN — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Key TRÙNG id quiz: "S7TOAN-wNN-quiz".
// ============================================================

export const S7TOAN_LESSONS = {
  // ──────────────── HK1 ────────────────
  'S7TOAN-w01-quiz': {
    topic: 'Tập hợp các số hữu tỉ Q',
    intro: 'Chào các em lớp 7! Tuần này cô trò mình mở rộng "thế giới số" sang tập hợp số hữu tỉ Q — gồm tất cả các phân số mà các em đã quen.',
    objectives: [
      'Hiểu định nghĩa số hữu tỉ và kí hiệu Q.',
      'Biểu diễn được số hữu tỉ trên trục số.',
      'So sánh hai số hữu tỉ bằng cách quy đồng.',
    ],
    theory: [
      { h: 'Số hữu tỉ là gì?' },
      { p: 'Số hữu tỉ là số viết được dưới dạng a/b, với a, b là số nguyên và b ≠ 0. Tập hợp các số hữu tỉ kí hiệu là Q.' },
      { ul: ['Mọi số nguyên a đều là số hữu tỉ vì a = a/1.', 'N ⊂ Z ⊂ Q (số tự nhiên là số nguyên, số nguyên là số hữu tỉ).', 'Một số hữu tỉ có vô số cách viết: 2/3 = 4/6 = 6/9 = …'] },
      { h: 'Biểu diễn trên trục số' },
      { p: 'Trục số gồm điểm 0, các số dương nằm bên phải, số âm nằm bên trái. Để biểu diễn a/b (b > 0), ta chia đoạn đơn vị thành b phần, lấy a phần theo dấu của a.' },
      { h: 'So sánh hai số hữu tỉ' },
      { p: 'Muốn so sánh hai số hữu tỉ, ta đưa về cùng mẫu dương rồi so sánh tử số. Số nào có tử lớn hơn thì lớn hơn.' },
      { ul: ['Số hữu tỉ dương > 0; số hữu tỉ âm < 0.', 'Nếu cùng mẫu dương thì so tử: lớn hơn ⇒ lớn hơn.', '√2; π… không phải số hữu tỉ — sẽ học ở tuần 8.'] },
      { note: 'Mẹo: muốn biết một phân số có bằng phân số khác không, hãy kiểm tra a·d = b·c (tích chéo).' },
    ],
    examples: [
      { q: 'Số 0,5 có phải số hữu tỉ không? Vì sao?', a: '0,5 = 1/2, dạng a/b với a = 1, b = 2 (b ≠ 0). Vậy 0,5 là số hữu tỉ.' },
      { q: 'So sánh −3/4 và −2/4.', a: 'Cùng mẫu dương 4. Tử số: −3 < −2 nên −3/4 < −2/4.' },
    ],
  },

  'S7TOAN-w02-quiz': {
    topic: 'Cộng, trừ số hữu tỉ',
    intro: 'Cộng trừ phân số các em đã quen ở Tiểu học. Tuần này ta mở rộng cho cả phân số âm và áp dụng quy tắc dấu ngoặc.',
    objectives: [
      'Cộng, trừ hai số hữu tỉ bằng cách quy đồng mẫu.',
      'Hiểu số đối và áp dụng a − b = a + (−b).',
      'Vận dụng quy tắc dấu ngoặc khi tính giá trị biểu thức.',
    ],
    theory: [
      { h: 'Quy tắc cộng — trừ' },
      { p: 'Muốn cộng/trừ hai số hữu tỉ, ta quy đồng mẫu dương rồi cộng (hoặc trừ) tử, giữ nguyên mẫu chung.' },
      { ul: ['a/m + b/m = (a + b)/m', 'a/m − b/m = (a − b)/m', 'Khác mẫu thì quy đồng trước khi cộng/trừ.'] },
      { h: 'Số đối' },
      { p: 'Số đối của số hữu tỉ a là −a, tức là số mà cộng với a sẽ ra 0. Số đối của a/b là −a/b (hoặc a/(−b)).' },
      { h: 'Quy tắc dấu ngoặc' },
      { p: 'Bỏ dấu ngoặc có dấu "+" phía trước thì giữ nguyên dấu các hạng tử bên trong. Bỏ dấu ngoặc có dấu "−" phía trước thì đổi dấu tất cả hạng tử bên trong.' },
      { note: 'Thói quen tốt: đưa mọi phép trừ về phép cộng với số đối — tránh sai dấu.' },
    ],
    examples: [
      { q: 'Tính 1/2 + 1/3.', a: 'Quy đồng mẫu 6: 3/6 + 2/6 = 5/6.' },
      { q: 'Tính (−1/3) − (−1/6).', a: '(−1/3) − (−1/6) = −1/3 + 1/6 = −2/6 + 1/6 = −1/6.' },
    ],
  },

  'S7TOAN-w03-quiz': {
    topic: 'Nhân, chia số hữu tỉ',
    intro: 'Tuần này cô trò mình học nhân — chia số hữu tỉ. Mẹo lớn: chia chính là nhân với nghịch đảo.',
    objectives: [
      'Nhân, chia hai số hữu tỉ và rút gọn kết quả.',
      'Hiểu số nghịch đảo và quy tắc dấu.',
      'Tính giá trị biểu thức có nhiều phép nhân, chia.',
    ],
    theory: [
      { h: 'Phép nhân số hữu tỉ' },
      { p: 'Muốn nhân hai số hữu tỉ a/b và c/d (b, d ≠ 0), ta nhân tử với tử, mẫu với mẫu: (a/b)·(c/d) = (a·c)/(b·d).' },
      { h: 'Phép chia số hữu tỉ' },
      { p: 'Muốn chia số hữu tỉ a/b cho c/d (c ≠ 0), ta nhân a/b với nghịch đảo của c/d: (a/b) : (c/d) = (a/b)·(d/c).' },
      { ul: ['Số nghịch đảo của a/b là b/a (a ≠ 0).', 'Tích hai số cùng dấu là số dương; khác dấu là số âm.', 'Luôn rút gọn trước khi nhân để tính nhanh.'] },
      { h: 'Tính chất' },
      { p: 'Phép nhân số hữu tỉ có tính chất giao hoán, kết hợp, phân phối với phép cộng. Đó là "vũ khí" để biến đổi biểu thức gọn.' },
      { note: 'Khi nhân nhiều số có dấu, đếm số dấu âm: chẵn dấu âm ⇒ kết quả dương; lẻ dấu âm ⇒ kết quả âm.' },
    ],
    examples: [
      { q: 'Tính (−3/5)·(10/9).', a: 'Rút gọn: 10 và 5 ⇒ 2; 3 và 9 ⇒ 1/3. Kết quả: (−1·2)/(1·3) = −2/3.' },
      { q: 'Tính (2/3) : (4/9).', a: '(2/3)·(9/4) = 18/12 = 3/2.' },
    ],
  },

  'S7TOAN-w04-quiz': {
    topic: 'Luỹ thừa của số hữu tỉ',
    intro: 'Luỹ thừa giúp viết gọn tích nhiều số giống nhau. Tuần này ta áp dụng cho cả số hữu tỉ.',
    objectives: [
      'Tính được luỹ thừa của số hữu tỉ.',
      'Áp dụng quy tắc nhân, chia luỹ thừa cùng cơ số.',
      'Vận dụng (a^m)^n = a^(m·n).',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Luỹ thừa bậc n của số hữu tỉ x là tích của n thừa số x: x^n = x·x·…·x (n thừa số, n nguyên dương). Quy ước x^0 = 1 với mọi x ≠ 0.' },
      { h: 'Công thức cơ bản' },
      { ul: ['a^m · a^n = a^(m+n) — nhân: cộng số mũ.', 'a^m : a^n = a^(m−n) — chia: trừ số mũ (a ≠ 0).', '(a^m)^n = a^(m·n) — luỹ thừa của luỹ thừa.', '(a·b)^n = a^n · b^n và (a/b)^n = a^n / b^n.'] },
      { h: 'Dấu của luỹ thừa' },
      { p: 'Nếu cơ số âm: luỹ thừa bậc chẵn cho kết quả dương; bậc lẻ giữ nguyên dấu âm. Ví dụ (−2)^4 = 16; (−2)^3 = −8.' },
      { note: 'Cẩn thận: (−2)^2 = 4 nhưng −2^2 = −4 (vì −2^2 hiểu là −(2^2)).' },
    ],
    examples: [
      { q: 'Tính (2/3)^2.', a: '(2/3)^2 = 2^2/3^2 = 4/9.' },
      { q: 'Rút gọn (−1/2)^3 · (−1/2)^2.', a: '(−1/2)^(3+2) = (−1/2)^5 = −1/32.' },
    ],
  },

  'S7TOAN-w05-quiz': {
    topic: 'Thứ tự thực hiện phép tính — Quy tắc dấu ngoặc',
    intro: 'Một biểu thức có thể có cộng, trừ, nhân, chia, luỹ thừa và dấu ngoặc. Để tính đúng, cần thứ tự rõ ràng.',
    objectives: [
      'Thực hiện đúng thứ tự: luỹ thừa → nhân/chia → cộng/trừ.',
      'Tính trong ngoặc trước, ngoài ngoặc sau.',
      'Áp dụng quy tắc dấu ngoặc khi bỏ ngoặc.',
    ],
    theory: [
      { h: 'Thứ tự ưu tiên' },
      { ul: ['1. Trong ngoặc: ( ) → [ ] → { }.', '2. Luỹ thừa.', '3. Nhân, chia (cùng cấp — thực hiện trái sang phải).', '4. Cộng, trừ (cùng cấp — thực hiện trái sang phải).'] },
      { h: 'Quy tắc dấu ngoặc' },
      { p: 'Khi bỏ ngoặc có dấu "−" phía trước, ta đổi dấu tất cả các hạng tử trong ngoặc. Ngược lại, khi đưa các hạng tử vào ngoặc có dấu "−" phía trước, ta đổi dấu các hạng tử đó.' },
      { h: 'Mẹo tính nhanh' },
      { p: 'Trước khi tính, hãy nhìn xem có thể nhóm các số đối nhau, hoặc nhóm các thừa số chung không — sẽ tránh được nhiều bước trung gian.' },
      { note: 'Nhớ: "phần trong ngoặc là một khối duy nhất" — tính xong mới mang ra ngoài.' },
    ],
    examples: [
      { q: 'Tính 2 + 3·(1/2).', a: 'Nhân trước: 3·(1/2) = 3/2. Cộng: 2 + 3/2 = 4/2 + 3/2 = 7/2.' },
      { q: 'Tính (−2)^2 + (−3)·2.', a: '(−2)^2 = 4; (−3)·2 = −6. Cộng: 4 + (−6) = −2.' },
    ],
  },

  'S7TOAN-w06-quiz': {
    topic: 'Giá trị tuyệt đối của số hữu tỉ',
    intro: 'Giá trị tuyệt đối đo "khoảng cách từ số đó đến 0" trên trục số — nên luôn là một số không âm.',
    objectives: [
      'Hiểu định nghĩa và tính |a| với mọi a ∈ Q.',
      'Vận dụng |a| ≥ 0 và |a| = 0 ⇔ a = 0.',
      'Giải bài toán tìm x khi biết |x|.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Giá trị tuyệt đối của số hữu tỉ a, kí hiệu |a|, là khoảng cách từ điểm a đến 0 trên trục số. Vì khoảng cách luôn không âm nên |a| ≥ 0.' },
      { ul: ['|a| = a nếu a ≥ 0.', '|a| = −a nếu a < 0.', '|0| = 0; |a| = |−a|.'] },
      { h: 'Tính chất' },
      { p: '|a · b| = |a| · |b|; |a + b| ≤ |a| + |b| (bất đẳng thức tam giác). Hai số đối nhau có cùng giá trị tuyệt đối.' },
      { h: 'Phương trình |x| = k' },
      { p: 'Nếu k > 0 thì x = k hoặc x = −k. Nếu k = 0 thì x = 0. Nếu k < 0 thì vô nghiệm.' },
      { note: 'Đừng nhầm: |−3/4| = 3/4 (bỏ dấu âm), không phải −3/4 vẫn còn âm.' },
    ],
    examples: [
      { q: 'Tính |−3/4| và |0,75|.', a: '|−3/4| = 3/4 = 0,75; |0,75| = 0,75.' },
      { q: 'Tìm x biết |x| = 5.', a: 'x = 5 hoặc x = −5.' },
    ],
  },

  'S7TOAN-w07-quiz': {
    topic: 'Làm tròn số — Sai số',
    intro: 'Nhiều khi ta không cần con số quá chính xác — chỉ cần "xấp xỉ" để báo cáo nhanh. Bài hôm nay học cách làm tròn và ước lượng sai số.',
    objectives: [
      'Làm tròn số đến hàng/chữ số thập phân cho trước.',
      'Hiểu khái niệm sai số tuyệt đối, sai số tương đối.',
      'Áp dụng vào ước lượng kết quả phép tính.',
    ],
    theory: [
      { h: 'Quy tắc làm tròn' },
      { p: 'Để làm tròn đến hàng (hoặc chữ số thập phân) thứ k, ta nhìn chữ số ngay sau hàng đó:' },
      { ul: ['Nếu chữ số đó < 5 ⇒ giữ nguyên hàng cần làm tròn, bỏ các chữ số sau.', 'Nếu chữ số đó ≥ 5 ⇒ cộng thêm 1 vào hàng cần làm tròn, rồi bỏ các chữ số sau.'] },
      { h: 'Sai số' },
      { p: 'Sai số tuyệt đối = |giá trị thực − giá trị xấp xỉ|. Sai số tương đối = sai số tuyệt đối / |giá trị thực| (thường viết %).' },
      { h: 'Ứng dụng' },
      { p: 'Trong thực tế (đo chiều cao, cân nặng, dân số…), ta luôn làm tròn để dễ trình bày. Mỗi phép làm tròn đều mang theo sai số — cần nhận biết để không tin tưởng quá mức.' },
      { note: 'Quy tắc 5: nếu chữ số bị bỏ đúng là 5 và sau đó toàn 0, một số tài liệu làm tròn lên (5/4 rounding). Trong SGK ta dùng quy tắc đơn giản ≥ 5 ⇒ làm tròn lên.' },
    ],
    examples: [
      { q: 'Làm tròn 3,1416 đến chữ số thập phân thứ hai.', a: 'Chữ số thứ ba sau dấu phẩy là 1 (< 5) ⇒ giữ nguyên. Vậy 3,1416 ≈ 3,14.' },
      { q: 'Làm tròn 12 763 đến hàng trăm.', a: 'Chữ số hàng chục là 6 (≥ 5) ⇒ làm tròn lên: 12 763 ≈ 12 800.' },
    ],
  },

  'S7TOAN-w08-quiz': {
    topic: 'Số vô tỉ — Căn bậc hai số học',
    intro: 'Có những số như √2, π… KHÔNG viết được dưới dạng phân số. Chúng được gọi là số vô tỉ — mở ra "tập số thực" tuần sau.',
    objectives: [
      'Hiểu khái niệm số vô tỉ và ví dụ điển hình.',
      'Biết căn bậc hai số học của số không âm.',
      'Tính √a với a là số chính phương; ước lượng √a khác.',
    ],
    theory: [
      { h: 'Số vô tỉ' },
      { p: 'Số vô tỉ là số viết được dưới dạng số thập phân vô hạn KHÔNG tuần hoàn. Tập số vô tỉ kí hiệu là I. Ví dụ: √2 ≈ 1,41421356…; π ≈ 3,14159265…' },
      { h: 'Căn bậc hai số học' },
      { p: 'Căn bậc hai số học của số không âm a là số không âm x sao cho x^2 = a, kí hiệu √a. Mọi số dương a có đúng 2 căn bậc hai: √a và −√a; nhưng √a luôn là căn dương.' },
      { ul: ['√0 = 0; √1 = 1; √4 = 2; √9 = 3; √25 = 5.', 'Không có căn bậc hai của số âm trong tập số thực.', '(√a)^2 = a (với a ≥ 0).'] },
      { h: 'Số chính phương' },
      { p: 'Số chính phương là số có căn bậc hai là số tự nhiên (1, 4, 9, 16, 25, 36, 49, 64, 81, 100…). Với những số khác, √a là số vô tỉ.' },
      { note: '√2 không phải phân số — đây là phát hiện chấn động của trường phái Pythagoras thời Hy Lạp cổ đại.' },
    ],
    examples: [
      { q: 'Tính √49 và √(25/4).', a: '√49 = 7 vì 7^2 = 49. √(25/4) = 5/2 vì (5/2)^2 = 25/4.' },
      { q: 'Số nào trong các số sau là vô tỉ: 0,5 ; √3 ; 22/7 ; 0,(3)?', a: '√3 là số vô tỉ. Còn 0,5 = 1/2; 22/7 và 0,(3) = 1/3 đều hữu tỉ.' },
    ],
  },

  'S7TOAN-w09-quiz': {
    topic: 'Tập hợp số thực R',
    intro: 'Hợp tập hữu tỉ Q và tập vô tỉ I lại, ta được tập số thực R — chứa "đầy" trục số, không còn lỗ hổng.',
    objectives: [
      'Hiểu mối quan hệ N ⊂ Z ⊂ Q ⊂ R.',
      'Biểu diễn số thực trên trục số.',
      'So sánh hai số thực và áp dụng tính chất.',
    ],
    theory: [
      { h: 'Tập số thực R' },
      { p: 'Tập số thực R là hợp của tập số hữu tỉ Q và tập số vô tỉ I. Mỗi điểm trên trục số tương ứng với đúng một số thực và ngược lại.' },
      { ul: ['N ⊂ Z ⊂ Q ⊂ R.', 'I ⊂ R nhưng I ∩ Q = ∅.', 'Trục số được lấp đầy bởi các số thực.'] },
      { h: 'So sánh số thực' },
      { p: 'Hai số thực so sánh bằng cách viết dưới dạng số thập phân (có thể vô hạn) rồi so từng chữ số. Số nằm bên phải trên trục số thì lớn hơn.' },
      { h: 'Phép toán trong R' },
      { p: 'Mọi phép cộng, trừ, nhân, chia (chia khác 0) đều thực hiện được trong R và giữ đầy đủ tính chất giao hoán, kết hợp, phân phối.' },
      { note: 'Trục số trong R là "liên tục" — giữa 2 số thực bất kì luôn có vô số số thực khác.' },
    ],
    examples: [
      { q: 'Sắp xếp các số sau theo thứ tự tăng dần: −2; √2; 0; 22/7; π.', a: '√2 ≈ 1,414; π ≈ 3,1416; 22/7 ≈ 3,1429. Vậy −2 < 0 < √2 < π < 22/7.' },
      { q: '√5 là số hữu tỉ hay vô tỉ?', a: '5 không phải số chính phương nên √5 là số vô tỉ.' },
    ],
  },

  'S7TOAN-w10-quiz': {
    topic: 'Tỉ lệ thức',
    intro: 'Tỉ lệ thức là phát biểu "hai tỉ số bằng nhau" — công cụ mạnh để giải nhiều bài toán tỉ lệ.',
    objectives: [
      'Hiểu định nghĩa tỉ lệ thức và các số hạng.',
      'Vận dụng tính chất tích chéo a·d = b·c.',
      'Tìm số chưa biết trong một tỉ lệ thức.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Tỉ lệ thức là đẳng thức của hai tỉ số: a/b = c/d (b, d ≠ 0). Các số a, b, c, d gọi là các số hạng; a và d là ngoại tỉ; b và c là trung tỉ.' },
      { h: 'Tính chất' },
      { ul: ['Tính chất 1: nếu a/b = c/d thì a·d = b·c (tích ngoại tỉ = tích trung tỉ).', 'Tính chất 2: nếu a·d = b·c (a, b, c, d ≠ 0) thì ta có 4 tỉ lệ thức tương đương.', 'Tỉ lệ thức không thay đổi khi đổi chỗ trung tỉ với nhau hoặc ngoại tỉ với nhau.'] },
      { h: 'Tính chất dãy tỉ số bằng nhau' },
      { p: 'Từ a/b = c/d, ta có a/b = c/d = (a + c)/(b + d) = (a − c)/(b − d) (với mẫu khác 0). Đây là công cụ "vàng" để giải bài toán chia tỉ lệ.' },
      { note: 'Mẹo: thấy "chia theo tỉ lệ 2:3:5" — viết ngay x/2 = y/3 = z/5 = k rồi xử lí.' },
    ],
    examples: [
      { q: 'Cho 2/x = 4/10. Tìm x.', a: 'Tích chéo: 2·10 = 4·x ⇒ 20 = 4x ⇒ x = 5.' },
      { q: 'Tìm x, y biết x/3 = y/5 và x + y = 16.', a: 'x/3 = y/5 = (x + y)/(3 + 5) = 16/8 = 2. Vậy x = 3·2 = 6; y = 5·2 = 10.' },
    ],
  },

  'S7TOAN-w11-quiz': {
    topic: 'Đại lượng tỉ lệ thuận',
    intro: 'Hai đại lượng tỉ lệ thuận khi đại lượng này tăng bao nhiêu lần thì đại lượng kia cũng tăng bấy nhiêu lần.',
    objectives: [
      'Hiểu định nghĩa và công thức y = k·x.',
      'Tìm hệ số tỉ lệ k từ một cặp giá trị.',
      'Giải bài toán chia một đại lượng theo tỉ lệ.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Nếu đại lượng y liên hệ với đại lượng x theo công thức y = k·x (k ≠ 0 là hằng số) thì y tỉ lệ thuận với x theo hệ số tỉ lệ k.' },
      { h: 'Tính chất' },
      { ul: ['Tỉ số hai giá trị tương ứng luôn không đổi: y1/x1 = y2/x2 = … = k.', 'Tỉ số hai giá trị bất kì của y bằng tỉ số hai giá trị tương ứng của x: y1/y2 = x1/x2.', 'Nếu y tỉ lệ thuận với x theo hệ số k thì x tỉ lệ thuận với y theo hệ số 1/k.'] },
      { h: 'Bài toán chia tỉ lệ' },
      { p: 'Muốn chia số M thành các phần x, y, z tỉ lệ với a, b, c — ta đặt x/a = y/b = z/c = k, rồi suy ra k = M/(a + b + c).' },
      { note: 'Ví dụ thực tế: thời gian và quãng đường ở vận tốc không đổi; số tiền và số sản phẩm khi giá cố định.' },
    ],
    examples: [
      { q: 'Cho y tỉ lệ thuận với x; khi x = 3 thì y = 12. Tính y khi x = 5.', a: 'k = y/x = 12/3 = 4. Khi x = 5 ⇒ y = 4·5 = 20.' },
      { q: 'Chia 60 thành 3 phần tỉ lệ với 1; 2; 3.', a: 'x/1 = y/2 = z/3 = 60/(1+2+3) = 10. Vậy 3 phần là 10; 20; 30.' },
    ],
  },

  'S7TOAN-w12-quiz': {
    topic: 'Đại lượng tỉ lệ nghịch',
    intro: 'Hai đại lượng tỉ lệ nghịch khi đại lượng này tăng bao nhiêu lần thì đại lượng kia GIẢM bấy nhiêu lần.',
    objectives: [
      'Hiểu định nghĩa và công thức x·y = a.',
      'Tìm hệ số a từ cặp giá trị; tính giá trị còn lại.',
      'Giải bài toán liên quan: số công nhân — số ngày làm việc.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Nếu hai đại lượng x và y liên hệ theo công thức x·y = a (a ≠ 0 là hằng số) thì y tỉ lệ nghịch với x theo hệ số tỉ lệ a.' },
      { h: 'Tính chất' },
      { ul: ['Tích hai giá trị tương ứng luôn không đổi: x1·y1 = x2·y2 = … = a.', 'Tỉ số hai giá trị bất kì của y bằng nghịch đảo tỉ số hai giá trị tương ứng của x: y1/y2 = x2/x1.', 'Nếu y tỉ lệ nghịch với x thì x cũng tỉ lệ nghịch với y theo cùng hệ số a.'] },
      { h: 'Bài toán thực tế' },
      { p: 'Với cùng một công việc, số công nhân và thời gian hoàn thành tỉ lệ nghịch; vận tốc và thời gian (quãng đường không đổi) tỉ lệ nghịch.' },
      { note: 'Đừng nhầm: y/x = const ⇒ tỉ lệ thuận; x·y = const ⇒ tỉ lệ nghịch.' },
    ],
    examples: [
      { q: '12 công nhân làm xong 1 việc trong 8 ngày. Hỏi 16 công nhân làm xong việc đó trong bao nhiêu ngày (năng suất như nhau)?', a: 'Số công nhân tỉ lệ nghịch với số ngày: 12·8 = 16·t ⇒ t = 96/16 = 6 ngày.' },
      { q: 'Cho y tỉ lệ nghịch với x; khi x = 4 thì y = 9. Tính y khi x = 6.', a: 'a = x·y = 4·9 = 36 ⇒ y = 36/6 = 6.' },
    ],
  },

  'S7TOAN-w13-quiz': {
    topic: 'Biểu đồ — Thu thập và biểu diễn dữ liệu',
    intro: 'Một bảng số khô khan có thể "biết nói" khi vẽ thành biểu đồ. Bài này giúp các em chọn đúng loại biểu đồ.',
    objectives: [
      'Hiểu các bước thu thập dữ liệu.',
      'Biết khi nào dùng biểu đồ cột / hình quạt / đường gấp khúc.',
      'Đọc và lập biểu đồ đơn giản từ bảng số liệu.',
    ],
    theory: [
      { h: 'Quy trình thu thập' },
      { ul: ['1. Xác định vấn đề và đối tượng khảo sát.', '2. Thu thập dữ liệu (đo, phỏng vấn, ghi chép…).', '3. Sắp xếp và tổng hợp vào bảng tần số.', '4. Trực quan hoá bằng biểu đồ phù hợp.'] },
      { h: 'Chọn loại biểu đồ' },
      { ul: ['Biểu đồ cột: so sánh số lượng giữa các nhóm.', 'Biểu đồ hình quạt (pie chart): hiển thị TỈ LỆ phần trăm của các thành phần trong tổng thể.', 'Biểu đồ đường gấp khúc: thể hiện sự biến đổi theo thời gian.'] },
      { h: 'Đọc biểu đồ' },
      { p: 'Khi đọc, các em chú ý: tiêu đề, đơn vị trục, ghi chú (legend), nguồn dữ liệu. Đừng vội kết luận — hãy đọc đầy đủ ngữ cảnh.' },
      { note: 'Mẹo: nếu đề bài hỏi "phần trăm" hay "tỉ trọng" — chọn biểu đồ hình quạt.' },
    ],
    examples: [
      { q: 'Lớp 7A có 30 bạn, trong đó 12 bạn thích bóng đá, 9 bạn thích cầu lông, 6 bạn thích bơi, 3 bạn thích cờ vua. Nên dùng biểu đồ nào để so sánh?', a: 'Vì so sánh số lượng giữa các nhóm môn thể thao — dùng biểu đồ CỘT. Mỗi cột cao tương ứng với số bạn yêu thích.' },
      { q: 'Nhiệt độ trung bình tháng từ tháng 1 đến tháng 12 ở Hà Nội — dùng biểu đồ nào?', a: 'Dữ liệu biến đổi theo thời gian — dùng biểu đồ ĐƯỜNG GẤP KHÚC để dễ thấy xu hướng tăng/giảm.' },
    ],
  },

  'S7TOAN-w14-quiz': {
    topic: 'Phân tích và xử lí dữ liệu',
    intro: 'Có dữ liệu rồi, ta phải biết "rút ra ý nghĩa". Bài hôm nay học cách tính số trung bình, mốt và đọc nhanh tần số.',
    objectives: [
      'Lập bảng tần số.',
      'Tính số trung bình cộng từ bảng tần số.',
      'Tìm mốt của dấu hiệu.',
    ],
    theory: [
      { h: 'Bảng tần số' },
      { p: 'Khi điều tra một dấu hiệu, ta liệt kê các giá trị khác nhau cùng số lần xuất hiện (tần số) thành một bảng. Đó là bảng tần số.' },
      { h: 'Số trung bình cộng' },
      { p: 'Số trung bình cộng = (Tổng các tích giá trị · tần số tương ứng) chia cho tổng tần số. Kí hiệu thường là x̄.' },
      { ul: ['Công thức: x̄ = (x1·n1 + x2·n2 + … + xk·nk) / N, với N = n1 + n2 + … + nk.', 'Là đại diện cho "mức trung bình" của tập dữ liệu.', 'Có thể bị "kéo lệch" bởi giá trị quá lớn/quá nhỏ (outlier).'] },
      { h: 'Mốt' },
      { p: 'Mốt của dấu hiệu là giá trị có TẦN SỐ LỚN NHẤT. Nếu có hai giá trị cùng tần số lớn nhất, ta có hai mốt.' },
      { note: 'Khi đọc biểu đồ cột tần số, cột cao nhất chính là mốt.' },
    ],
    examples: [
      { q: 'Điểm bài kiểm tra 10 bạn: 6, 7, 8, 7, 9, 7, 8, 10, 6, 7. Tính điểm trung bình và mốt.', a: 'Tổng = 75 ⇒ x̄ = 75/10 = 7,5. Tần số: 6 (2 lần); 7 (4 lần); 8 (2 lần); 9 (1); 10 (1). Mốt là 7.' },
      { q: 'Bảng tần số: giá trị 1, 2, 3, 4 với tần số 5, 8, 4, 3. Tính trung bình cộng.', a: 'Tổng tích = 1·5 + 2·8 + 3·4 + 4·3 = 5 + 16 + 12 + 12 = 45. N = 20. x̄ = 45/20 = 2,25.' },
    ],
  },

  'S7TOAN-w15-quiz': {
    topic: 'Góc ở vị trí đặc biệt — Tia phân giác',
    intro: 'Khi hai đường thẳng cắt nhau, sinh ra các cặp góc đặc biệt. Tia phân giác là tia "chia đôi" góc — dụng cụ quen thuộc trong hình học.',
    objectives: [
      'Nhận biết hai góc kề bù, hai góc đối đỉnh.',
      'Vận dụng tính chất: hai góc đối đỉnh thì bằng nhau.',
      'Vẽ và nhận biết tia phân giác của một góc.',
    ],
    theory: [
      { h: 'Hai góc kề bù' },
      { p: 'Hai góc kề bù là hai góc kề nhau (chung một cạnh, hai cạnh còn lại nằm trên hai nửa mặt phẳng đối nhau) và có tổng bằng 180°.' },
      { h: 'Hai góc đối đỉnh' },
      { p: 'Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Tính chất: hai góc đối đỉnh thì bằng nhau.' },
      { h: 'Tia phân giác của một góc' },
      { p: 'Tia phân giác của một góc là tia nằm giữa hai cạnh của góc, tạo với hai cạnh hai góc bằng nhau (mỗi góc bằng nửa góc gốc).' },
      { ul: ['Mỗi góc (khác góc bẹt) có duy nhất một tia phân giác.', 'Cách vẽ: dùng thước đo độ chia đôi; hoặc dùng compa dựng.', 'Nếu Oz là phân giác của góc xOy thì ∠xOz = ∠zOy = ∠xOy/2.'] },
      { note: 'Hai đường thẳng cắt nhau tạo ra 4 góc — chúng ghép thành 2 cặp đối đỉnh và 4 cặp kề bù.' },
    ],
    examples: [
      { q: 'Cho hai đường thẳng xx\' và yy\' cắt nhau tại O. Nếu ∠xOy = 50° thì ∠x\'Oy\' bằng bao nhiêu?', a: '∠x\'Oy\' đối đỉnh với ∠xOy nên bằng 50°.' },
      { q: 'Cho ∠AOB = 80°, Ot là tia phân giác. Tính ∠AOt.', a: '∠AOt = ∠AOB / 2 = 80°/2 = 40°.' },
    ],
  },

  'S7TOAN-w16-quiz': {
    topic: 'Hai đường thẳng song song — Tiên đề Ơ-clit',
    intro: 'Hai đường thẳng song song là "không bao giờ gặp nhau". Tiên đề Ơ-clit khẳng định: qua một điểm ngoài đường thẳng, chỉ vẽ được DUY NHẤT một đường song song.',
    objectives: [
      'Nhận biết hai đường thẳng song song và dấu hiệu nhận biết.',
      'Hiểu nội dung Tiên đề Ơ-clit.',
      'Vận dụng tính chất các cặp góc tạo bởi một đường thẳng cắt hai đường thẳng song song.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Hai đường thẳng a, b gọi là song song (kí hiệu a // b) nếu chúng không có điểm chung.' },
      { h: 'Dấu hiệu nhận biết' },
      { p: 'Nếu một đường thẳng c cắt hai đường thẳng a, b tạo nên một cặp góc so le trong bằng nhau (hoặc đồng vị bằng nhau, hoặc trong cùng phía bù nhau) thì a // b.' },
      { h: 'Tiên đề Ơ-clit' },
      { p: 'Qua một điểm M nằm ngoài đường thẳng a, có duy nhất một đường thẳng song song với a.' },
      { h: 'Tính chất' },
      { ul: ['Hai đường thẳng song song bị cắt bởi đường thẳng thứ ba thì: các góc so le trong bằng nhau; các góc đồng vị bằng nhau; các góc trong cùng phía bù nhau.', 'Hai đường thẳng phân biệt cùng song song với đường thứ ba thì song song với nhau.', 'Hai đường thẳng phân biệt cùng vuông góc với đường thứ ba thì song song với nhau.'] },
      { note: 'Tiên đề Ơ-clit là một trong những tiên đề nổi tiếng nhất toán học, làm nền tảng cho cả hình học phẳng.' },
    ],
    examples: [
      { q: 'Đường thẳng c cắt a và b tạo cặp góc so le trong bằng 60°. Kết luận?', a: 'Vì cặp góc so le trong bằng nhau ⇒ a // b.' },
      { q: 'Cho a // b, c cắt a và b. Góc đồng vị thứ nhất bằng 75°. Tính góc đồng vị thứ hai.', a: 'Hai đường thẳng song song bị cắt ⇒ góc đồng vị bằng nhau ⇒ 75°.' },
    ],
  },

  'S7TOAN-w17-quiz': {
    topic: 'Tổng các góc trong tam giác',
    intro: 'Một định lí "kinh điển" mà ai cũng phải thuộc: tổng ba góc trong một tam giác luôn bằng 180°.',
    objectives: [
      'Hiểu và phát biểu định lí tổng ba góc.',
      'Áp dụng để tìm góc còn lại khi biết hai góc.',
      'Biết tính chất góc ngoài tam giác.',
    ],
    theory: [
      { h: 'Định lí' },
      { p: 'Tổng ba góc trong một tam giác bằng 180°. Nghĩa là với tam giác ABC: ∠A + ∠B + ∠C = 180°.' },
      { h: 'Tam giác vuông' },
      { p: 'Tam giác vuông có một góc 90°. Suy ra hai góc nhọn còn lại có tổng bằng 90° (chúng phụ nhau).' },
      { h: 'Góc ngoài tam giác' },
      { p: 'Góc ngoài của tam giác là góc kề bù với một góc trong. Định lí: mỗi góc ngoài của tam giác bằng tổng hai góc trong KHÔNG kề với nó.' },
      { ul: ['Tam giác đều: ba góc đều 60°.', 'Tam giác cân: hai góc ở đáy bằng nhau.', 'Một tam giác có nhiều nhất 1 góc vuông hoặc 1 góc tù.'] },
      { note: 'Suy luận: trong một tam giác không thể có hai góc vuông (vì tổng đã 180°, còn góc thứ ba sẽ là 0).' },
    ],
    examples: [
      { q: 'Tam giác ABC có ∠A = 70°, ∠B = 60°. Tính ∠C.', a: '∠C = 180° − (70° + 60°) = 50°.' },
      { q: 'Tam giác vuông có một góc nhọn bằng 35°. Tính góc nhọn còn lại.', a: 'Hai góc nhọn phụ nhau ⇒ góc còn lại = 90° − 35° = 55°.' },
    ],
  },

  'S7TOAN-w18-quiz': {
    topic: 'Ôn tập học kì I',
    intro: 'Khép lại học kì I, cô trò mình hệ thống lại số hữu tỉ, tỉ lệ, thống kê và hình học góc — tam giác.',
    objectives: [
      'Tổng hợp kĩ năng tính toán với số hữu tỉ — số thực.',
      'Vận dụng tỉ lệ thức, dãy tỉ số bằng nhau.',
      'Vận dụng định lí tổng ba góc, góc tạo bởi hai đường thẳng song song.',
    ],
    theory: [
      { h: 'Khối Đại số' },
      { ul: ['Q ⊂ R; |a| ≥ 0; (a/b)^n = a^n/b^n.', 'Tỉ lệ thức a/b = c/d ⇔ a·d = b·c.', 'Dãy tỉ số bằng nhau: a/b = c/d = (a + c)/(b + d).', 'Phân biệt tỉ lệ thuận (y = k·x) và tỉ lệ nghịch (x·y = a).'] },
      { h: 'Khối Hình học' },
      { ul: ['Hai góc đối đỉnh bằng nhau.', 'a // b ⇔ có cặp góc so le trong (hoặc đồng vị) bằng nhau.', 'Tổng ba góc tam giác = 180°.', 'Góc ngoài tam giác bằng tổng hai góc trong không kề.'] },
      { h: 'Khối Thống kê' },
      { p: 'Quy trình: thu thập → bảng tần số → chọn biểu đồ phù hợp → tính trung bình, mốt → rút kết luận.' },
      { note: 'Học kì I: trọng tâm vẫn là kỹ năng tính toán chính xác và lập luận hình học có căn cứ.' },
    ],
    examples: [
      { q: 'Tính (1/2)^2 · (2/3) − (−1/4).', a: '(1/2)^2 = 1/4; 1/4 · 2/3 = 2/12 = 1/6. 1/6 − (−1/4) = 1/6 + 1/4 = 2/12 + 3/12 = 5/12.' },
      { q: 'Tam giác ABC có ∠A = 50°, ∠B = 70°. Tính góc ngoài tại đỉnh C.', a: 'Góc ngoài tại C = ∠A + ∠B = 50° + 70° = 120°.' },
    ],
  },

  // ──────────────── HK2 ────────────────
  'S7TOAN-w19-quiz': {
    topic: 'Hai tam giác bằng nhau — Trường hợp c-c-c',
    intro: 'Hai tam giác "giống hệt nhau" được gọi là bằng nhau. Trường hợp đầu tiên: ba cặp cạnh bằng nhau ⇒ hai tam giác bằng nhau.',
    objectives: [
      'Hiểu định nghĩa hai tam giác bằng nhau.',
      'Vận dụng trường hợp c-c-c để chứng minh.',
      'Suy ra các cặp góc tương ứng bằng nhau.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Hai tam giác bằng nhau là hai tam giác có ba cặp cạnh tương ứng bằng nhau và ba cặp góc tương ứng bằng nhau. Kí hiệu ΔABC = ΔA\'B\'C\' nghĩa là A ↔ A\', B ↔ B\', C ↔ C\'.' },
      { h: 'Trường hợp c-c-c (cạnh — cạnh — cạnh)' },
      { p: 'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.' },
      { ul: ['Khi viết ΔABC = ΔMNP, các đỉnh phải khớp đúng thứ tự tương ứng.', 'Từ "bằng nhau" suy ra mọi yếu tố tương ứng (cạnh, góc, đường cao…) đều bằng nhau.'] },
      { h: 'Ứng dụng' },
      { p: 'Dùng để chứng minh hai đoạn thẳng bằng nhau, hai góc bằng nhau, một điểm là trung điểm…' },
      { note: 'Khi kí hiệu phải khớp đúng thứ tự đỉnh — sai một chữ là sai cả bài chứng minh.' },
    ],
    examples: [
      { q: 'Cho ΔABC và ΔA\'B\'C\' có AB = A\'B\', BC = B\'C\', CA = C\'A\'. Kết luận?', a: 'Theo trường hợp c-c-c: ΔABC = ΔA\'B\'C\'. Suy ra ∠A = ∠A\', ∠B = ∠B\', ∠C = ∠C\'.' },
      { q: 'Cho ΔABC cân tại A với AB = AC. Vẽ trung tuyến AM. Chứng minh ΔABM = ΔACM.', a: 'AB = AC (gt); BM = CM (M là trung điểm); AM chung ⇒ ΔABM = ΔACM (c-c-c).' },
    ],
  },

  'S7TOAN-w20-quiz': {
    topic: 'Trường hợp c-g-c và g-c-g',
    intro: 'Ngoài c-c-c, còn hai trường hợp bằng nhau quan trọng: c-g-c và g-c-g — giúp giải hầu hết bài toán chứng minh tam giác.',
    objectives: [
      'Phát biểu trường hợp c-g-c và g-c-g.',
      'Phân biệt thứ tự "cạnh — góc — cạnh" và "góc — cạnh — góc".',
      'Vận dụng để chứng minh tam giác bằng nhau và suy hệ quả.',
    ],
    theory: [
      { h: 'Trường hợp c-g-c (cạnh — góc — cạnh)' },
      { p: 'Nếu hai cạnh và GÓC XEN GIỮA của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.' },
      { ul: ['Góc phải XEN GIỮA hai cạnh đó — không lấy góc bất kì.', 'Sai sót thường gặp: lấy góc không xen giữa ⇒ kết luận sai.'] },
      { h: 'Trường hợp g-c-g (góc — cạnh — góc)' },
      { p: 'Nếu một cạnh và hai góc KỀ với cạnh đó của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.' },
      { h: 'Hệ quả tam giác vuông' },
      { p: 'Hai tam giác vuông bằng nhau nếu có: hai cạnh góc vuông tương ứng bằng nhau (c-g-c), hoặc một cạnh góc vuông và một góc nhọn kề (g-c-g).' },
      { note: 'Sơ đồ chứng minh: viết rõ "cặp cạnh, cặp góc, cặp cạnh" + có chữ "xen giữa" hoặc "kề" để không bị trừ điểm.' },
    ],
    examples: [
      { q: 'Cho ΔABC và ΔDEF có AB = DE, ∠B = ∠E, BC = EF. Kết luận?', a: 'Hai cạnh AB, BC và góc B xen giữa bằng hai cạnh DE, EF và góc E xen giữa ⇒ ΔABC = ΔDEF (c-g-c).' },
      { q: 'Cho ΔABC và ΔMNP có ∠A = ∠M, AB = MN, ∠B = ∠N. Kết luận?', a: 'Cạnh AB và hai góc kề (A, B) bằng cạnh MN và hai góc kề (M, N) ⇒ ΔABC = ΔMNP (g-c-g).' },
    ],
  },

  'S7TOAN-w21-quiz': {
    topic: 'Tam giác cân — Tam giác đều',
    intro: 'Tam giác cân và tam giác đều là hai "ngôi sao" trong hình học — với rất nhiều tính chất đối xứng đẹp.',
    objectives: [
      'Nhận biết tam giác cân, tam giác đều.',
      'Vận dụng tính chất hai góc đáy bằng nhau.',
      'Sử dụng tam giác đều có ba góc 60°.',
    ],
    theory: [
      { h: 'Tam giác cân' },
      { p: 'Tam giác cân là tam giác có hai cạnh bằng nhau (gọi là hai cạnh bên). Cạnh còn lại là đáy; hai góc kề đáy là hai góc ở đáy.' },
      { ul: ['Tính chất: trong tam giác cân, hai góc ở đáy bằng nhau.', 'Dấu hiệu: nếu hai góc của tam giác bằng nhau thì tam giác đó cân tại đỉnh còn lại.', 'Đường trung tuyến từ đỉnh đến đáy đồng thời là đường cao, đường phân giác và đường trung trực.'] },
      { h: 'Tam giác đều' },
      { p: 'Tam giác đều là tam giác có ba cạnh bằng nhau. Hệ quả: ba góc cùng bằng 60°.' },
      { h: 'Dấu hiệu nhận biết tam giác đều' },
      { ul: ['Tam giác có ba cạnh bằng nhau.', 'Tam giác có ba góc bằng nhau.', 'Tam giác cân có một góc bằng 60°.'] },
      { note: 'Mẹo nhớ: cân thì hai góc đáy bằng; đều thì cả ba góc = 60°.' },
    ],
    examples: [
      { q: 'Tam giác ABC cân tại A có ∠A = 80°. Tính ∠B và ∠C.', a: '∠B = ∠C = (180° − 80°)/2 = 50°.' },
      { q: 'Tam giác ABC cân tại A có ∠B = 60°. Tam giác này là tam giác gì?', a: 'Cân tại A ⇒ ∠C = ∠B = 60°, ⇒ ∠A = 60°. Vậy ΔABC là tam giác ĐỀU.' },
    ],
  },

  'S7TOAN-w22-quiz': {
    topic: 'Nghỉ Tết — Bài tập về nhà nhẹ',
    intro: 'Tuần Tết các em được nghỉ. Cô gửi vài bài tập nhẹ để giữ "phong độ" và áp dụng toán vào đời sống ngày Tết.',
    objectives: [
      'Ôn luyện nhẹ kĩ năng tính toán với số hữu tỉ.',
      'Vận dụng tỉ lệ thức vào bài thực tế Tết.',
      'Quan sát hình học trong các vật trang trí Tết.',
    ],
    theory: [
      { h: 'Toán với lì xì' },
      { p: 'Tổng số tiền mừng tuổi của em là một số hữu tỉ (đơn vị nghìn đồng). Hãy ghi chép cẩn thận và làm tròn đến hàng nghìn để dễ tổng kết.' },
      { h: 'Tỉ lệ trong gói bánh chưng' },
      { p: 'Công thức gói bánh chưng cần gạo nếp, đậu xanh, thịt theo tỉ lệ. Ví dụ 4 phần gạo : 2 phần đậu : 1 phần thịt. Đây là bài toán dãy tỉ số đời thường.' },
      { h: 'Hình học ngày Tết' },
      { ul: ['Bánh chưng có dạng hình hộp chữ nhật.', 'Bánh tét có dạng trụ.', 'Câu đối Tết thường được dán trên hai cánh cửa — tạo cặp đối xứng.'] },
      { note: 'Học toán vui là khi mình thấy toán ở khắp nơi — kể cả trong nồi bánh chưng!' },
    ],
    examples: [
      { q: 'Em nhận được lì xì từ 5 người với số tiền (nghìn): 50; 100; 200; 100; 50. Tính trung bình mỗi lì xì.', a: 'Tổng = 500 nghìn. Trung bình = 500/5 = 100 nghìn đồng.' },
      { q: 'Gói bánh chưng theo tỉ lệ gạo : đậu : thịt = 4 : 2 : 1, tổng 1 400 g. Tính khối lượng mỗi loại.', a: 'Đặt x/4 = y/2 = z/1 = 1 400/(4+2+1) = 200. Gạo 800 g; đậu 400 g; thịt 200 g.' },
    ],
  },

  'S7TOAN-w23-quiz': {
    topic: 'Định lí Py-ta-go',
    intro: 'Một trong những định lí nổi tiếng nhất thế giới — kết nối ba cạnh của tam giác vuông bằng một công thức tuyệt đẹp.',
    objectives: [
      'Phát biểu định lí Py-ta-go.',
      'Tính cạnh thứ ba khi biết hai cạnh của tam giác vuông.',
      'Vận dụng định lí đảo để nhận biết tam giác vuông.',
    ],
    theory: [
      { h: 'Định lí Py-ta-go' },
      { p: 'Trong một tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông. Nếu tam giác ABC vuông tại A với cạnh huyền BC, ta có: BC^2 = AB^2 + AC^2.' },
      { h: 'Định lí Py-ta-go đảo' },
      { p: 'Nếu một tam giác có bình phương của một cạnh bằng tổng bình phương hai cạnh kia thì tam giác đó vuông (tại đỉnh đối diện cạnh lớn nhất).' },
      { h: 'Bộ ba Py-ta-go' },
      { ul: ['(3; 4; 5) — bộ kinh điển: 3^2 + 4^2 = 5^2.', '(6; 8; 10), (5; 12; 13), (8; 15; 17)…', 'Mọi bội của bộ ba Py-ta-go cũng là bộ ba Py-ta-go.'] },
      { h: 'Ứng dụng' },
      { p: 'Dùng để tính khoảng cách (ví dụ cao bao nhiêu so với mặt đất), trong xây dựng dựng góc vuông bằng dây 3-4-5, trong định vị GPS…' },
      { note: 'Py-ta-go là nhà toán học Hy Lạp cổ đại (TK VI TCN). Định lí thực ra đã được biết đến từ trước — nhưng ông là người chứng minh tổng quát.' },
    ],
    examples: [
      { q: 'Tam giác ABC vuông tại A có AB = 6 cm, AC = 8 cm. Tính BC.', a: 'BC^2 = 6^2 + 8^2 = 36 + 64 = 100 ⇒ BC = 10 cm.' },
      { q: 'Tam giác có ba cạnh 5; 12; 13 cm. Đây có phải tam giác vuông?', a: '5^2 + 12^2 = 25 + 144 = 169 = 13^2 ⇒ Theo định lí đảo, tam giác này vuông tại đỉnh đối diện cạnh 13.' },
    ],
  },

  'S7TOAN-w24-quiz': {
    topic: 'Đường trung trực — Đường trung tuyến',
    intro: 'Trong tam giác có rất nhiều "đường đặc biệt". Tuần này ta gặp hai đường: trung trực và trung tuyến.',
    objectives: [
      'Hiểu đường trung trực của đoạn thẳng.',
      'Hiểu đường trung tuyến trong tam giác.',
      'Vận dụng tính chất ba đường trung tuyến đồng quy tại trọng tâm.',
    ],
    theory: [
      { h: 'Đường trung trực' },
      { p: 'Đường trung trực của đoạn thẳng AB là đường thẳng vuông góc với AB tại trung điểm M của AB. Tính chất: mọi điểm thuộc trung trực đều cách đều hai đầu mút A và B.' },
      { h: 'Đường trung tuyến' },
      { p: 'Trong tam giác, đường trung tuyến từ đỉnh nối đến trung điểm của cạnh đối diện. Một tam giác có 3 đường trung tuyến.' },
      { h: 'Trọng tâm tam giác' },
      { p: 'Ba đường trung tuyến trong tam giác đồng quy tại một điểm gọi là trọng tâm (kí hiệu G). Trọng tâm chia mỗi đường trung tuyến theo tỉ lệ 2 : 1 kể từ đỉnh.' },
      { ul: ['AG = (2/3)·AM (M là trung điểm BC).', 'GM = (1/3)·AM.', 'Trọng tâm luôn nằm trong tam giác.'] },
      { note: 'Mẹo nhớ: trọng tâm chia trung tuyến "2 phần trên — 1 phần dưới" tính từ đỉnh xuống.' },
    ],
    examples: [
      { q: 'Tam giác ABC có AM là trung tuyến từ A; G là trọng tâm. Biết AM = 9 cm. Tính AG và GM.', a: 'AG = (2/3)·9 = 6 cm; GM = (1/3)·9 = 3 cm.' },
      { q: 'Đoạn thẳng AB = 8 cm. Điểm I nằm trên đường trung trực của AB. Biết IA = 5 cm. Tính IB.', a: 'I thuộc trung trực ⇒ IA = IB ⇒ IB = 5 cm.' },
    ],
  },

  'S7TOAN-w25-quiz': {
    topic: 'Đường phân giác — Đường cao trong tam giác',
    intro: 'Bộ "tứ đường" trong tam giác đã giới thiệu xong với đường phân giác và đường cao. Mỗi loại có điểm đồng quy riêng.',
    objectives: [
      'Hiểu đường phân giác và đường cao của tam giác.',
      'Biết ba phân giác đồng quy tại tâm đường tròn nội tiếp.',
      'Biết ba đường cao đồng quy tại trực tâm.',
    ],
    theory: [
      { h: 'Đường phân giác' },
      { p: 'Đường phân giác từ một đỉnh là đoạn thẳng nối đỉnh đó với điểm trên cạnh đối diện sao cho nó chia đôi góc tại đỉnh đó.' },
      { ul: ['Ba đường phân giác trong tam giác đồng quy tại 1 điểm — gọi là tâm đường tròn NỘI tiếp (kí hiệu I).', 'I cách đều ba cạnh của tam giác.'] },
      { h: 'Đường cao' },
      { p: 'Đường cao từ một đỉnh là đoạn thẳng vuông góc với cạnh đối diện (hoặc đường thẳng chứa cạnh đối diện).' },
      { ul: ['Ba đường cao đồng quy tại 1 điểm — gọi là trực tâm (kí hiệu H).', 'Trong tam giác nhọn: H nằm trong tam giác.', 'Tam giác vuông: H trùng đỉnh góc vuông.', 'Tam giác tù: H nằm ngoài tam giác.'] },
      { h: 'Tổng kết các điểm đặc biệt' },
      { p: 'Trọng tâm G (trung tuyến); trực tâm H (đường cao); tâm nội tiếp I (phân giác); tâm ngoại tiếp O (trung trực — cách đều ba đỉnh).' },
      { note: 'Định lí Euler: G, H, O thẳng hàng trên một đường (đường thẳng Euler). Phần nâng cao — sẽ học sau.' },
    ],
    examples: [
      { q: 'Tam giác ABC đều cạnh 6 cm. Tìm khoảng cách từ tâm đường tròn nội tiếp đến mỗi cạnh.', a: 'Tam giác đều có tâm I cũng là trọng tâm. Đường cao = (6·√3)/2 = 3√3. Khoảng cách từ I đến cạnh = (1/3)·3√3 = √3 cm.' },
      { q: 'Tam giác vuông tại A. Trực tâm H ở đâu?', a: 'H trùng với đỉnh góc vuông A.' },
    ],
  },

  'S7TOAN-w26-quiz': {
    topic: 'Quan hệ giữa các yếu tố trong tam giác',
    intro: 'Tuần này tổng hợp các "quan hệ" giữa cạnh — góc — đường vuông góc — đường xiên — bất đẳng thức tam giác.',
    objectives: [
      'Vận dụng quan hệ giữa cạnh và góc đối diện.',
      'Hiểu quan hệ đường vuông góc và đường xiên, hình chiếu.',
      'Áp dụng bất đẳng thức tam giác.',
    ],
    theory: [
      { h: 'Cạnh và góc đối diện' },
      { p: 'Trong một tam giác, GÓC ĐỐI DIỆN với cạnh LỚN HƠN sẽ LỚN HƠN, và ngược lại. Nghĩa là cạnh lớn ↔ góc lớn.' },
      { h: 'Đường vuông góc — đường xiên' },
      { ul: ['Trong các đường nối từ một điểm đến một đường thẳng, đường vuông góc là ngắn nhất.', 'Đường xiên có hình chiếu lớn hơn thì lớn hơn.', 'Hai đường xiên bằng nhau ⇔ hai hình chiếu bằng nhau.'] },
      { h: 'Bất đẳng thức tam giác' },
      { p: 'Trong một tam giác, mỗi cạnh nhỏ hơn tổng và lớn hơn hiệu của hai cạnh kia: |b − c| < a < b + c.' },
      { note: 'Mẹo: muốn ba đoạn ghép thành tam giác — tổng hai cạnh nhỏ phải lớn hơn cạnh lớn nhất.' },
    ],
    examples: [
      { q: 'Tam giác ABC có AB = 5, BC = 7, AC = 8. So sánh các góc.', a: 'Cạnh BC = 7 < AC = 8 < ? — sửa: BC = 7 đối diện ∠A, AC = 8 đối diện ∠B, AB = 5 đối diện ∠C. Vì 5 < 7 < 8 ⇒ ∠C < ∠A < ∠B.' },
      { q: 'Ba đoạn 3, 4, 8 có ghép thành tam giác được không?', a: '3 + 4 = 7 < 8 — vi phạm bất đẳng thức tam giác. KHÔNG ghép thành tam giác được.' },
    ],
  },

  'S7TOAN-w27-quiz': {
    topic: 'Biểu thức đại số — Giá trị của biểu thức',
    intro: 'Đại số bắt đầu xuất hiện những "chữ" thay cho số. Bài hôm nay học cách viết biểu thức và tính giá trị của nó.',
    objectives: [
      'Phân biệt biểu thức số và biểu thức đại số.',
      'Tính giá trị biểu thức tại giá trị của biến.',
      'Lập biểu thức từ tình huống thực tế.',
    ],
    theory: [
      { h: 'Biểu thức đại số' },
      { p: 'Biểu thức đại số là biểu thức gồm các số, biến (chữ), liên kết bởi các phép tính cộng, trừ, nhân, chia, luỹ thừa, dấu ngoặc. Ví dụ: 3x + 5; (a + b)^2; x^2 − 2xy.' },
      { h: 'Giá trị của biểu thức' },
      { p: 'Để tính giá trị của biểu thức tại một giá trị của biến, ta THAY giá trị đó vào, rồi thực hiện phép tính theo thứ tự ưu tiên.' },
      { ul: ['Bước 1: Thay biến bằng số (chú ý đặt trong ngoặc nếu số âm).', 'Bước 2: Tính luỹ thừa.', 'Bước 3: Tính nhân/chia trước cộng/trừ.'] },
      { h: 'Lập biểu thức' },
      { p: 'Khi gặp bài toán đố, ta đặt biến cho đại lượng chưa biết rồi biểu diễn các đại lượng còn lại theo biến đó. Đây là bước "phiên dịch" từ lời sang đại số.' },
      { note: 'Nhớ: khi thay số âm vào biểu thức, LUÔN đặt trong dấu ngoặc để tránh sai dấu.' },
    ],
    examples: [
      { q: 'Tính giá trị của biểu thức A = 3x − 5 tại x = 2.', a: 'A = 3·2 − 5 = 6 − 5 = 1.' },
      { q: 'Tính B = x^2 − 2x + 1 tại x = −1.', a: 'B = (−1)^2 − 2·(−1) + 1 = 1 + 2 + 1 = 4.' },
    ],
  },

  'S7TOAN-w28-quiz': {
    topic: 'Đa thức một biến — Sắp xếp',
    intro: 'Đa thức một biến là "viên gạch" cơ bản trong đại số. Sắp xếp giúp ta dễ tính toán hơn.',
    objectives: [
      'Hiểu định nghĩa đa thức một biến và bậc đa thức.',
      'Sắp xếp đa thức theo luỹ thừa giảm/tăng của biến.',
      'Tìm hệ số cao nhất, hệ số tự do.',
    ],
    theory: [
      { h: 'Định nghĩa' },
      { p: 'Đa thức một biến x là tổng đại số của các đơn thức một biến x. Mỗi đơn thức có dạng a·x^n (a là hệ số, n là số tự nhiên).' },
      { h: 'Bậc của đa thức' },
      { p: 'Bậc của đa thức một biến (đã thu gọn, khác đa thức không) là số mũ LỚN NHẤT của biến trong đa thức đó.' },
      { ul: ['Đa thức 5x^3 − 2x + 7 có bậc 3.', 'Hệ số cao nhất: hệ số của số hạng có bậc lớn nhất (ở ví dụ trên là 5).', 'Hệ số tự do: số hạng không chứa biến (ở ví dụ trên là 7).'] },
      { h: 'Sắp xếp' },
      { p: 'Ta thường sắp xếp các hạng tử theo LUỸ THỪA GIẢM của biến — giúp dễ cộng trừ và xác định bậc. Nếu thiếu một bậc, có thể bỏ qua hoặc để hệ số 0.' },
      { note: 'Đa thức 0 (đa thức không) — không có bậc xác định, hoặc quy ước bậc = "không xác định".' },
    ],
    examples: [
      { q: 'Sắp xếp đa thức 2 + 3x^2 − 5x theo luỹ thừa giảm.', a: '3x^2 − 5x + 2 (bậc 2; hệ số cao nhất 3; hệ số tự do 2).' },
      { q: 'Cho P(x) = 4x^3 − x + 2. Tính P(1) và P(−1).', a: 'P(1) = 4 − 1 + 2 = 5. P(−1) = 4·(−1)^3 − (−1) + 2 = −4 + 1 + 2 = −1.' },
    ],
  },

  'S7TOAN-w29-quiz': {
    topic: 'Cộng, trừ đa thức một biến',
    intro: 'Cộng — trừ đa thức cũng giống "gom đồ cùng loại": gom các đơn thức đồng dạng (cùng bậc) lại với nhau.',
    objectives: [
      'Cộng, trừ hai đa thức một biến.',
      'Sắp xếp gọn kết quả theo luỹ thừa giảm.',
      'Áp dụng quy tắc dấu ngoặc khi mở ngoặc.',
    ],
    theory: [
      { h: 'Đơn thức đồng dạng' },
      { p: 'Hai đơn thức đồng dạng là hai đơn thức có cùng phần biến (cùng bậc, cùng kí hiệu biến). Ví dụ 3x^2 và −5x^2 là đồng dạng; còn 3x^2 và 3x^3 thì không.' },
      { h: 'Cộng — trừ đa thức' },
      { p: 'Bước 1: Bỏ ngoặc (chú ý dấu ngoặc có dấu trừ — đổi dấu các hạng tử). Bước 2: Gom các đơn thức đồng dạng. Bước 3: Sắp xếp kết quả theo luỹ thừa giảm.' },
      { ul: ['(a + b)x^n: cộng — gom hệ số.', 'Cách 1: viết hàng ngang.', 'Cách 2: sắp xếp theo cột (đặt thẳng các bậc rồi cộng từng cột) — dễ với đa thức dài.'] },
      { h: 'Tính chất' },
      { p: 'Phép cộng đa thức có tính giao hoán, kết hợp; có đa thức 0 là phần tử không; mỗi đa thức P(x) có đa thức đối −P(x).' },
      { note: 'Mẹo: khi cộng/trừ đa thức dài, sắp xếp theo cột cho dễ kiểm tra.' },
    ],
    examples: [
      { q: 'Cho A(x) = 3x^2 + 2x − 5; B(x) = x^2 − 4x + 1. Tính A(x) + B(x).', a: 'Gom đồng dạng: (3 + 1)x^2 + (2 − 4)x + (−5 + 1) = 4x^2 − 2x − 4.' },
      { q: 'Tính A(x) − B(x) với A, B ở trên.', a: 'A − B = (3 − 1)x^2 + (2 − (−4))x + (−5 − 1) = 2x^2 + 6x − 6.' },
    ],
  },

  'S7TOAN-w30-quiz': {
    topic: 'Nhân đa thức một biến',
    intro: 'Để nhân hai đa thức, ta dùng "luật phân phối" — mỗi hạng tử của đa thức này nhân với mỗi hạng tử của đa thức kia.',
    objectives: [
      'Nhân đơn thức với đa thức.',
      'Nhân hai đa thức.',
      'Áp dụng các hằng đẳng thức cơ bản trong tính toán.',
    ],
    theory: [
      { h: 'Nhân đơn thức với đa thức' },
      { p: 'a·(b + c) = a·b + a·c. Áp dụng tương tự: 2x·(3x^2 − 4x + 5) = 6x^3 − 8x^2 + 10x.' },
      { h: 'Nhân hai đa thức' },
      { p: '(a + b)·(c + d) = a·c + a·d + b·c + b·d. Mở rộng: nhân từng hạng tử rồi gom đồng dạng.' },
      { ul: ['Áp dụng quy tắc luỹ thừa: x^m · x^n = x^(m+n).', 'Sau khi nhân, sắp xếp theo luỹ thừa giảm.', 'Kiểm tra: bậc đa thức tích = tổng bậc hai đa thức nhân.'] },
      { h: 'Hằng đẳng thức quen thuộc' },
      { ul: ['(a + b)^2 = a^2 + 2ab + b^2.', '(a − b)^2 = a^2 − 2ab + b^2.', '(a + b)(a − b) = a^2 − b^2.'] },
      { note: 'Bước nhân là bước hay sai dấu nhất — hãy kẻ bảng nhỏ nhân từng cặp cho chắc chắn.' },
    ],
    examples: [
      { q: 'Tính (x + 2)(x − 3).', a: '= x·x + x·(−3) + 2·x + 2·(−3) = x^2 − 3x + 2x − 6 = x^2 − x − 6.' },
      { q: 'Tính (x + 1)^2.', a: '= x^2 + 2·x·1 + 1^2 = x^2 + 2x + 1.' },
    ],
  },

  'S7TOAN-w31-quiz': {
    topic: 'Chia đa thức cho đơn thức',
    intro: 'Khi mọi hạng tử của đa thức đều chia hết cho đơn thức cho trước, ta thực hiện phép chia bằng cách chia từng hạng tử.',
    objectives: [
      'Chia đơn thức cho đơn thức.',
      'Chia đa thức cho đơn thức.',
      'Áp dụng quy tắc chia luỹ thừa cùng cơ số.',
    ],
    theory: [
      { h: 'Chia đơn thức cho đơn thức' },
      { p: 'Muốn chia đơn thức A cho đơn thức B (khi A chia hết cho B), ta: chia hệ số cho hệ số, chia biến cho biến (theo quy tắc trừ số mũ).' },
      { h: 'Chia đa thức cho đơn thức' },
      { p: 'Muốn chia đa thức A(x) cho đơn thức B (khi mỗi hạng tử của A chia hết cho B), ta chia mỗi hạng tử của A cho B rồi cộng các kết quả lại.' },
      { ul: ['(a + b + c) : m = a:m + b:m + c:m.', 'Quy tắc luỹ thừa: x^m : x^n = x^(m−n) (m ≥ n).', 'Không quên dấu — hệ số âm chia âm ra dương.'] },
      { h: 'Lưu ý' },
      { p: 'Phép chia này chỉ thực hiện được khi MỌI hạng tử của đa thức chia hết cho đơn thức chia. Nếu một hạng tử không chia hết, ta phải "kéo" lại như phần dư.' },
      { note: 'Mẹo: muốn rút gọn đa thức phức tạp, hãy tìm đơn thức chung lớn nhất rồi chia.' },
    ],
    examples: [
      { q: 'Chia 6x^3 cho 2x.', a: 'Hệ số: 6:2 = 3. Biến: x^3 : x = x^(3−1) = x^2. Kết quả: 3x^2.' },
      { q: 'Chia (4x^3 − 8x^2 + 12x) cho 2x.', a: '4x^3 : 2x = 2x^2; −8x^2 : 2x = −4x; 12x : 2x = 6. Kết quả: 2x^2 − 4x + 6.' },
    ],
  },

  'S7TOAN-w32-quiz': {
    topic: 'Nghiệm của đa thức một biến',
    intro: 'Nghiệm là "giá trị làm cho đa thức bằng 0". Tìm nghiệm là một trong những công việc trung tâm của đại số.',
    objectives: [
      'Hiểu định nghĩa nghiệm.',
      'Kiểm tra một số có là nghiệm của đa thức không.',
      'Tìm nghiệm của đa thức dạng đơn giản (bậc 1, bậc 2 dạng đặc biệt).',
    ],
    theory: [
      { h: 'Định nghĩa nghiệm' },
      { p: 'Số a được gọi là nghiệm của đa thức P(x) nếu khi thay x = a vào, ta được P(a) = 0.' },
      { h: 'Cách kiểm tra' },
      { p: 'Thay x = a vào đa thức và tính giá trị. Nếu kết quả bằng 0 thì a là nghiệm; nếu khác 0 thì không.' },
      { h: 'Cách tìm nghiệm đơn giản' },
      { ul: ['Đa thức bậc 1: ax + b = 0 ⇒ x = −b/a (a ≠ 0).', 'Đa thức tích = 0 ⇒ một trong các thừa số = 0 (định lí "tích bằng 0").', 'Đa thức bậc 2 dạng x^2 − k = 0 (k ≥ 0) ⇒ x = ±√k.'] },
      { h: 'Số nghiệm tối đa' },
      { p: 'Một đa thức một biến bậc n có nhiều nhất n nghiệm. Có thể ít hơn, hoặc bằng 0 (đa thức không có nghiệm thực).' },
      { note: 'Đa thức P(x) = x^2 + 1 không có nghiệm thực vì x^2 ≥ 0 ⇒ x^2 + 1 ≥ 1 > 0.' },
    ],
    examples: [
      { q: 'Kiểm tra x = 2 có là nghiệm của P(x) = x^2 − 3x + 2 không.', a: 'P(2) = 4 − 6 + 2 = 0 ⇒ x = 2 LÀ nghiệm.' },
      { q: 'Tìm nghiệm của 3x − 9 = 0.', a: 'x = 9/3 = 3.' },
    ],
  },

  'S7TOAN-w33-quiz': {
    topic: 'Tổng hợp đại số — bài toán tỉ lệ',
    intro: 'Tuần này tổng hợp các dạng bài đại số ứng dụng — đặc biệt là bài toán tỉ lệ thuận, tỉ lệ nghịch.',
    objectives: [
      'Lập tỉ lệ thức từ bài toán đời thực.',
      'Phân biệt khi nào dùng tỉ lệ thuận, tỉ lệ nghịch.',
      'Giải bài toán chia tỉ lệ.',
    ],
    theory: [
      { h: 'Sơ đồ giải' },
      { ul: ['1. Đọc kĩ đề: xác định đại lượng và mối quan hệ (thuận/nghịch).', '2. Gọi ẩn, biểu diễn các đại lượng theo ẩn.', '3. Lập đẳng thức tỉ lệ (hoặc phương trình).', '4. Giải và kiểm tra điều kiện.'] },
      { h: 'Tỉ lệ thuận' },
      { p: 'Dùng khi: số lượng tăng đều ⇒ giá trị tăng đều. Ví dụ: số kg gạo và số tiền (đơn giá không đổi); thời gian và quãng đường (vận tốc không đổi).' },
      { h: 'Tỉ lệ nghịch' },
      { p: 'Dùng khi: tăng cái này thì giảm cái kia (tích không đổi). Ví dụ: số công nhân và thời gian (cùng khối lượng việc); vận tốc và thời gian (cùng quãng đường).' },
      { note: 'Khi đề bài có chữ "cùng năng suất", "cùng vận tốc", "cùng đơn giá" — thường là tỉ lệ thuận hoặc nghịch.' },
    ],
    examples: [
      { q: '3 công nhân làm xong 1 việc trong 12 ngày. Hỏi 6 công nhân làm xong việc đó trong bao nhiêu ngày?', a: 'Số công nhân và số ngày tỉ lệ NGHỊCH: 3·12 = 6·t ⇒ t = 36/6 = 6 ngày.' },
      { q: 'Chia 90 thành 3 phần tỉ lệ thuận với 2; 3; 5. Tìm 3 phần.', a: 'x/2 = y/3 = z/5 = 90/(2+3+5) = 9. Vậy 18; 27; 45.' },
    ],
  },

  'S7TOAN-w34-quiz': {
    topic: 'Tổng hợp hình học',
    intro: 'Tổng hợp các định lí hình học đã học cả năm: tam giác, đường đặc biệt, định lí Py-ta-go.',
    objectives: [
      'Vận dụng các trường hợp bằng nhau của tam giác.',
      'Vận dụng định lí Py-ta-go trong tính toán.',
      'Sử dụng tính chất các đường trung tuyến, trung trực, phân giác, đường cao.',
    ],
    theory: [
      { h: 'Bằng nhau của tam giác' },
      { ul: ['c-c-c, c-g-c, g-c-g.', 'Tam giác cân: hai góc đáy bằng; đường trung tuyến từ đỉnh đồng thời là trung trực — phân giác — đường cao.', 'Tam giác đều: ba cạnh bằng, ba góc 60°.'] },
      { h: 'Định lí Py-ta-go' },
      { p: 'Tam giác vuông tại A: BC^2 = AB^2 + AC^2. Định lí đảo: cho ba cạnh thoả mãn ⇒ tam giác vuông.' },
      { h: 'Các điểm đặc biệt' },
      { ul: ['Trọng tâm G (giao 3 trung tuyến) — chia trung tuyến 2:1 từ đỉnh.', 'Trực tâm H (giao 3 đường cao).', 'Tâm nội tiếp I (giao 3 phân giác) — cách đều 3 cạnh.', 'Tâm ngoại tiếp O (giao 3 trung trực) — cách đều 3 đỉnh.'] },
      { h: 'Quan hệ cạnh — góc — đường xiên' },
      { p: 'Cạnh lớn ↔ góc lớn. Đường vuông góc ngắn nhất trong các đường nối từ điểm đến đường thẳng. Bất đẳng thức tam giác.' },
      { note: 'Khi giải bài hình tổng hợp: vẽ hình chính xác, ghi giả thiết — kết luận rõ ràng, viết các bước có căn cứ.' },
    ],
    examples: [
      { q: 'Tam giác ABC vuông tại A, AB = 9, AC = 12. Tính BC và đường cao AH từ A.', a: 'BC = √(9^2 + 12^2) = √225 = 15. Diện tích = (1/2)·9·12 = 54 = (1/2)·BC·AH ⇒ AH = 108/15 = 7,2.' },
      { q: 'Tam giác đều cạnh 6. Tính độ dài đường cao.', a: 'h = (cạnh·√3)/2 = (6·√3)/2 = 3√3.' },
    ],
  },

  'S7TOAN-w35-quiz': {
    topic: 'Ôn tập học kì II — Tổng hợp cả năm',
    intro: 'Tuần cuối — chúng ta tổng kết toàn bộ kiến thức Lớp 7 và chuẩn bị sẵn sàng cho năm học sau.',
    objectives: [
      'Tổng hợp tất cả công thức và định lí trọng tâm.',
      'Luyện kĩ năng giải bài tổng hợp.',
      'Tự tin đối mặt với kì thi cuối năm.',
    ],
    theory: [
      { h: 'Đại số trọng tâm' },
      { ul: ['Số hữu tỉ Q ⊂ R; tỉ lệ thức, dãy tỉ số bằng nhau.', 'Tỉ lệ thuận y = kx; tỉ lệ nghịch x·y = a.', 'Đa thức một biến: cộng, trừ, nhân, chia, tìm nghiệm.', 'Biểu thức đại số và tính giá trị.'] },
      { h: 'Hình học trọng tâm' },
      { ul: ['Hai đường thẳng song song và tiên đề Ơ-clit.', 'Tổng ba góc tam giác = 180°; góc ngoài = tổng hai góc trong không kề.', 'Trường hợp bằng nhau: c-c-c, c-g-c, g-c-g.', 'Định lí Py-ta-go (thuận và đảo).', 'Các điểm đặc biệt: G, H, I, O.'] },
      { h: 'Thống kê' },
      { p: 'Bảng tần số → biểu đồ → trung bình, mốt → kết luận. Biết chọn biểu đồ phù hợp với dạng dữ liệu.' },
      { note: 'Lời chúc của cô: hãy ôn kĩ — đọc đề chậm rãi — trình bày sạch — kiểm tra lại trước khi nộp bài. Chúc các em thi tốt!' },
    ],
    examples: [
      { q: 'Tìm x biết x/3 = y/4 = z/5 và x + y + z = 24.', a: 'k = 24/(3+4+5) = 2 ⇒ x = 6; y = 8; z = 10.' },
      { q: 'Tam giác ABC có AB = AC, ∠A = 50°. Vẽ trung tuyến AM. Chứng minh ΔABM = ΔACM và tính ∠B.', a: 'AB = AC; BM = CM; AM chung ⇒ ΔABM = ΔACM (c-c-c). Cân tại A ⇒ ∠B = ∠C = (180° − 50°)/2 = 65°.' },
    ],
  },
};
