// ============================================================
// Lớp 9 · TOÁN — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Key trùng id quiz: "S9TOAN-wNN-quiz".
// Văn phong nghiêm túc, đúng chuẩn cấp THCS cuối cấp.
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9TOAN_LESSONS = {
  'S9TOAN-w01-quiz': L(
    'Căn bậc hai — Định nghĩa và tính chất',
    'Bước vào lớp 9, chúng ta khởi đầu hành trình ôn thi vào 10 với chương Căn bậc hai — một mảng kiến thức trọng tâm của đại số.',
    ['Nắm chắc định nghĩa căn bậc hai số học của số không âm.', 'Biết điều kiện xác định và tính chất cơ bản của √a.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Với a ≥ 0, căn bậc hai số học của a là số x ≥ 0 sao cho x² = a, ký hiệu √a.' },
      { ul: ['√0 = 0', '√a ≥ 0 với mọi a ≥ 0', '(√a)² = a với a ≥ 0', '√(a²) = |a| với mọi a ∈ ℝ'] },
      { h: 'Điều kiện xác định' },
      { p: 'Biểu thức √A xác định khi và chỉ khi A ≥ 0.' },
      { note: 'Đây là kiến thức nền tảng, sẽ được dùng xuyên suốt cả năm học.' },
    ],
    [
      { q: 'Tìm điều kiện xác định của √(2x − 6).', a: '2x − 6 ≥ 0 ⇔ x ≥ 3.' },
      { q: 'Rút gọn √((−5)²).', a: '√25 = 5 hoặc dùng tính chất √(a²) = |a| = |−5| = 5.' },
    ]
  ),

  'S9TOAN-w02-quiz': L(
    'Liên hệ phép nhân, phép chia và căn bậc hai',
    'Tuần này ta nghiên cứu hai quy tắc cơ bản giúp tính nhanh: khai phương một tích và khai phương một thương.',
    ['Áp dụng được √(a·b) = √a·√b và √(a/b) = √a/√b.', 'Đưa thừa số ra ngoài/vào trong dấu căn.'],
    [
      { h: 'Khai phương một tích' },
      { p: 'Với a ≥ 0, b ≥ 0: √(a·b) = √a · √b.' },
      { h: 'Khai phương một thương' },
      { p: 'Với a ≥ 0, b > 0: √(a/b) = √a / √b.' },
      { ul: ['Hệ quả: √a · √b = √(ab)', '√a / √b = √(a/b)'] },
      { note: 'Khi áp dụng phải kiểm tra điều kiện về dấu của a, b.' },
    ],
    [
      { q: 'Tính √72.', a: '√72 = √(36·2) = √36 · √2 = 6√2.' },
      { q: 'Tính √(50/8).', a: '√(50/8) = √(25/4) = 5/2.' },
    ]
  ),

  'S9TOAN-w03-quiz': L(
    'Biến đổi đơn giản biểu thức chứa căn bậc hai',
    'Để tính toán và rút gọn nhanh, ta học các kỹ thuật biến đổi: trục căn thức, khử mẫu, nhân liên hợp.',
    ['Trục căn thức ở mẫu và khử mẫu.', 'Dùng biểu thức liên hợp để rút gọn.'],
    [
      { h: 'Trục căn thức ở mẫu' },
      { p: 'Dạng 1/√a (a > 0) = √a/a. Dạng 1/(√a + √b) = (√a − √b)/(a − b) khi a ≠ b.' },
      { h: 'Khử mẫu trong căn' },
      { p: '√(a/b) = √(ab)/b (với b > 0).' },
      { note: 'Trục căn thức làm cho mẫu số không còn dấu căn — chuẩn hoá biểu thức.' },
    ],
    [
      { q: 'Trục căn thức 5/√3.', a: '5/√3 = 5√3/3.' },
      { q: 'Rút gọn 1/(√5 − √2).', a: 'Nhân liên hợp: (√5 + √2)/((√5)² − (√2)²) = (√5 + √2)/3.' },
    ]
  ),

  'S9TOAN-w04-quiz': L(
    'Căn bậc ba',
    'Khác với căn bậc hai, căn bậc ba xác định với mọi số thực và chỉ cho một giá trị duy nhất.',
    ['Nắm định nghĩa và tính chất căn bậc ba.', 'Tính ∛a của một số cụ thể.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Căn bậc ba của a là số x sao cho x³ = a, ký hiệu ∛a. Với mọi a ∈ ℝ, ∛a tồn tại và duy nhất.' },
      { ul: ['∛0 = 0', '∛(a³) = a với mọi a', '∛(ab) = ∛a · ∛b', '∛(a/b) = ∛a/∛b (b ≠ 0)'] },
      { note: 'Căn bậc ba có nghiệm cả với số âm: ∛(−8) = −2.' },
    ],
    [
      { q: 'Tính ∛(−64).', a: '(−4)³ = −64 nên ∛(−64) = −4.' },
      { q: 'Rút gọn ∛(54) − ∛(2).', a: '∛54 = ∛(27·2) = 3∛2 ⇒ 3∛2 − ∛2 = 2∛2.' },
    ]
  ),

  'S9TOAN-w05-quiz': L(
    'Ôn tập chương Căn bậc hai',
    'Tổng hợp các dạng bài thường gặp về căn thức — bước chuẩn bị quan trọng cho phần đại số tiếp theo.',
    ['Hệ thống hoá các phép toán về căn.', 'Vận dụng giải toán tổng hợp.'],
    [
      { h: 'Các dạng bài thường gặp' },
      { ul: ['Rút gọn biểu thức chứa căn.', 'Tìm điều kiện xác định.', 'Chứng minh đẳng thức.', 'Giải phương trình chứa căn.'] },
      { note: 'Nắm vững quy tắc √(a²) = |a| và (√a)² = a là chìa khoá.' },
    ],
    [
      { q: 'Rút gọn √98 − √50 + √32.', a: '√98=7√2, √50=5√2, √32=4√2 ⇒ 7√2 − 5√2 + 4√2 = 6√2.' },
      { q: 'Giải √(x+1) = 3.', a: 'x+1 ≥ 0; bình phương: x+1 = 9 ⇒ x = 8.' },
    ]
  ),

  'S9TOAN-w06-quiz': L(
    'Hàm số bậc nhất y = ax + b — Định nghĩa',
    'Hàm số bậc nhất là nền tảng để hiểu các loại hàm số khác. Tuần này ta học định nghĩa và tính đồng biến/nghịch biến.',
    ['Nhận dạng hàm bậc nhất.', 'Xác định tính đồng biến/nghịch biến qua hệ số a.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Hàm số y = ax + b với a ≠ 0 gọi là hàm số bậc nhất.' },
      { ul: ['a là hệ số góc (slope).', 'b là tung độ gốc (y-intercept).', 'a > 0 ⇒ đồng biến trên ℝ.', 'a < 0 ⇒ nghịch biến trên ℝ.'] },
      { note: 'Đồ thị của hàm bậc nhất là một đường thẳng.' },
    ],
    [
      { q: 'Hàm y = (m − 3)x + 5 là hàm bậc nhất khi nào?', a: 'Cần m − 3 ≠ 0 ⇔ m ≠ 3.' },
      { q: 'Tìm m để y = (2m − 1)x + 4 đồng biến.', a: '2m − 1 > 0 ⇔ m > 1/2.' },
    ]
  ),

  'S9TOAN-w07-quiz': L(
    'Đường thẳng — Hệ số góc, đồ thị',
    'Hiểu rõ hệ số góc giúp ta phân tích vị trí tương đối giữa các đường thẳng — kiến thức thường gặp trong đề thi.',
    ['Tính hệ số góc qua hai điểm.', 'Xét vị trí tương đối giữa hai đường thẳng.'],
    [
      { h: 'Hệ số góc' },
      { p: 'Hệ số góc a = (y₂ − y₁)/(x₂ − x₁) qua hai điểm (x₁, y₁), (x₂, y₂).' },
      { h: 'Vị trí tương đối' },
      { ul: ['Song song: a = a′ và b ≠ b′.', 'Trùng nhau: a = a′ và b = b′.', 'Cắt nhau: a ≠ a′.', 'Vuông góc: a · a′ = −1.'] },
      { note: 'Hệ số góc còn cho biết tan của góc tạo với trục Ox.' },
    ],
    [
      { q: 'Đường thẳng qua A(1; 4) và B(3; 10) có hệ số góc?', a: 'a = (10 − 4)/(3 − 1) = 3.' },
      { q: 'Hai đường y = 2x + 1 và y = (−1/2)x + 3 có quan hệ?', a: '2 · (−1/2) = −1 ⇒ vuông góc.' },
    ]
  ),

  'S9TOAN-w08-quiz': L(
    'Phương trình đường thẳng — Bài toán xác định',
    'Bài toán "tìm phương trình đường thẳng" thoả mãn điều kiện cho trước là dạng thường gặp trong đề thi vào 10.',
    ['Viết phương trình đường thẳng qua điểm cho trước, có hệ số góc cho trước.', 'Tìm phương trình đường thẳng song song/vuông góc với đường cho trước.'],
    [
      { h: 'Phương pháp' },
      { p: 'Phương trình y = ax + b có 2 ẩn (a, b); cần 2 điều kiện độc lập để giải.' },
      { ul: ['Đi qua 2 điểm: thay toạ độ vào và giải hệ.', 'Đi qua 1 điểm + có a cho trước: thay điểm tìm b.', 'Song song với đường cho trước (a đã biết) + đi qua điểm: như trên.'] },
      { note: 'Luôn kiểm tra điều kiện a ≠ 0 nếu cần.' },
    ],
    [
      { q: 'Viết phương trình đường thẳng qua A(2; 3) và song song y = 2x − 1.', a: 'Song song ⇒ a = 2; qua A: 3 = 2·2 + b ⇒ b = −1. Vậy y = 2x − 1 — trùng với đường ban đầu. Chọn lại A(2;5): 5 = 4+b ⇒ b=1 ⇒ y = 2x+1.' },
      { q: 'Viết phương trình qua A(0; 2) và B(1; 5).', a: 'a = (5−2)/(1−0) = 3; b = 2. ⇒ y = 3x + 2.' },
    ]
  ),

  'S9TOAN-w09-quiz': L(
    'Ứng dụng hàm bậc nhất',
    'Hàm bậc nhất xuất hiện trong nhiều bài toán thực tế: tính lãi đơn, vận tốc đều, giá điện theo bậc thang.',
    ['Mô hình hoá bài toán thực tế bằng hàm bậc nhất.', 'Giải các bài toán ứng dụng đơn giản.'],
    [
      { h: 'Quy trình giải' },
      { ul: ['Đặt biến: thường là số lượng (x).', 'Lập hàm số: y theo x.', 'Sử dụng tính chất hàm số (giá trị, đồng/nghịch biến) để giải.'] },
      { note: 'Bài toán thực tế thường xuất hiện trong câu cuối đề thi vào 10.' },
    ],
    [
      { q: 'Cước điện thoại 200đ/phút + thuê bao 30.000đ/tháng. Lập y theo x phút.', a: 'y = 200x + 30000.' },
      { q: 'Một bể chứa 100 lít, mở vòi xả 2 l/phút. Lập hàm V theo t.', a: 'V = 100 − 2t (đơn vị lít, t là phút, 0 ≤ t ≤ 50).' },
    ]
  ),

  'S9TOAN-w10-quiz': L(
    'Hệ phương trình bậc nhất hai ẩn — Phương pháp thế',
    'Phương pháp thế là kỹ thuật cơ bản để giải hệ hai phương trình hai ẩn — thường gặp trong câu 2 đề thi vào 10.',
    ['Áp dụng phương pháp thế để giải hệ.', 'Nhận biết hệ vô nghiệm, có vô số nghiệm.'],
    [
      { h: 'Phương pháp thế' },
      { ul: ['Bước 1: Từ một phương trình, biểu diễn ẩn này theo ẩn kia.', 'Bước 2: Thay vào phương trình còn lại để có phương trình 1 ẩn.', 'Bước 3: Giải và thế ngược lại.'] },
      { note: 'Khi phương trình rút gọn ra 0 = số ≠ 0: hệ vô nghiệm. Ra 0 = 0: có vô số nghiệm.' },
    ],
    [
      { q: 'Giải hệ { 2x + y = 5; x − y = 1 }.', a: 'Từ (2): x = y + 1. Thế: 2(y+1) + y = 5 ⇒ 3y = 3 ⇒ y = 1, x = 2.' },
      { q: 'Giải hệ { x + 2y = 4; 3x + 6y = 12 }.', a: 'Nhân (1) cho 3 ⇒ 3x + 6y = 12 ≡ (2). Hệ có vô số nghiệm.' },
    ]
  ),

  'S9TOAN-w11-quiz': L(
    'Hệ phương trình — Phương pháp cộng đại số',
    'Phương pháp cộng đại số nhanh hơn thế trong nhiều trường hợp — đặc biệt khi hệ có hệ số đẹp.',
    ['Áp dụng phương pháp cộng đại số.', 'Chọn phương pháp phù hợp cho từng hệ.'],
    [
      { h: 'Phương pháp cộng đại số' },
      { ul: ['Bước 1: Nhân hai phương trình với hệ số phù hợp để hệ số một ẩn đối nhau.', 'Bước 2: Cộng (hoặc trừ) 2 phương trình để khử ẩn.', 'Bước 3: Giải phương trình 1 ẩn và thế ngược.'] },
      { note: 'Khi hệ số có sẵn đối nhau (như x và −x), cộng trực tiếp.' },
    ],
    [
      { q: 'Giải { 3x + 2y = 7; 5x − 2y = 1 } bằng cộng đại số.', a: 'Cộng 2 PT: 8x = 8 ⇒ x = 1; thế: 3 + 2y = 7 ⇒ y = 2.' },
      { q: 'Giải { 2x + 3y = 12; 4x − y = 10 }.', a: 'Nhân (2) cho 3: 12x − 3y = 30; cộng với (1): 14x = 42 ⇒ x = 3, y = 2.' },
    ]
  ),

  'S9TOAN-w12-quiz': L(
    'Giải bài toán bằng cách lập hệ phương trình',
    'Dạng "lập hệ" rất phổ biến trong đề thi: chuyển bài toán có lời thành hệ phương trình.',
    ['Phân tích đề, đặt ẩn, lập hệ.', 'Giải và kiểm tra điều kiện.'],
    [
      { h: 'Quy trình' },
      { ul: ['Bước 1: Đặt ẩn (chú ý đơn vị, điều kiện).', 'Bước 2: Biểu diễn các đại lượng theo ẩn.', 'Bước 3: Lập hệ phương trình.', 'Bước 4: Giải hệ và kiểm tra điều kiện.'] },
      { note: 'Đặc biệt chú ý điều kiện về dấu (số người, tuổi, vận tốc... đều dương).' },
    ],
    [
      { q: 'Hai số có tổng 25, hiệu 7. Tìm hai số.', a: 'Đặt x, y với x > y; { x + y = 25; x − y = 7 } ⇒ x = 16, y = 9.' },
      { q: 'Một ô tô đi 240 km. Nếu tăng vận tốc 10 km/h, đi nhanh hơn 1h. Tính vận tốc ban đầu.', a: 'Đặt v km/h, t giờ; 240 = vt, 240 = (v+10)(t−1). Giải: v = 40 km/h.' },
    ]
  ),

  'S9TOAN-w13-quiz': L(
    'Ôn tập học kỳ I — Đại số',
    'Hệ thống hoá toàn bộ kiến thức đại số đã học: căn thức, hàm bậc nhất, hệ phương trình.',
    ['Tổng hợp 3 chương đại số HK1.', 'Vận dụng giải đề thi tổng hợp.'],
    [
      { h: 'Các chủ đề chính' },
      { ul: ['Căn bậc hai, căn bậc ba: định nghĩa, tính chất, biến đổi.', 'Hàm số bậc nhất: định nghĩa, đồ thị, vị trí tương đối.', 'Hệ PT bậc nhất 2 ẩn: thế, cộng đại số, lập hệ.'] },
      { note: 'Đây là 3 chương cốt lõi sẽ tiếp tục được dùng ở HK2 và đề thi vào 10.' },
    ],
    [
      { q: 'Cho y = (m−1)x + 2 và y = 3x − 1 cắt nhau. Tìm m.', a: 'Cắt nhau ⇒ m − 1 ≠ 3 ⇒ m ≠ 4.' },
      { q: 'Tính (√3 + √2)(√3 − √2).', a: '= 3 − 2 = 1.' },
    ]
  ),

  'S9TOAN-w14-quiz': L(
    'Hệ thức lượng trong tam giác vuông — Phần 1',
    'Mở đầu chương Hình học: ôn lại tam giác vuông với các hệ thức lượng quan trọng.',
    ['Nắm các hệ thức về cạnh và đường cao.', 'Áp dụng vào tính độ dài.'],
    [
      { h: 'Các hệ thức cơ bản' },
      { p: 'Cho tam giác ABC vuông tại A, AH là đường cao (H ∈ BC). Gọi BC = a, AB = c, AC = b, AH = h, BH = c′, CH = b′.' },
      { ul: ['b² = a·b′; c² = a·c′ (hệ thức 1, 2)', 'h² = b′·c′ (hệ thức 3)', 'a·h = b·c (hệ thức 4)', '1/h² = 1/b² + 1/c² (hệ thức 5)'] },
      { note: 'Đây là công cụ mạnh để tính cạnh trong tam giác vuông.' },
    ],
    [
      { q: 'Tam giác vuông tại A có AB = 6, AC = 8. Tính BC và AH.', a: 'BC = √(36+64) = 10. AH = AB·AC/BC = 48/10 = 4,8.' },
      { q: 'Tam giác vuông tại A, AH = 12, BH = 9. Tính HC.', a: 'h² = BH · HC ⇒ 144 = 9 · HC ⇒ HC = 16.' },
    ]
  ),

  'S9TOAN-w15-quiz': L(
    'Hệ thức lượng — Phần 2 + Tỉ số lượng giác',
    'Tiếp tục với tỉ số lượng giác của góc nhọn — nền tảng cho hình học không gian sau này.',
    ['Nắm định nghĩa sin, cos, tan, cot.', 'Áp dụng tính cạnh và góc.'],
    [
      { h: 'Tỉ số lượng giác' },
      { p: 'Trong tam giác vuông tại A, với góc nhọn B: sin B = đối/huyền = b/a; cos B = kề/huyền = c/a; tan B = đối/kề = b/c; cot B = c/b.' },
      { ul: ['sin²α + cos²α = 1', 'tan α = sin α / cos α', 'tan α · cot α = 1'] },
      { note: 'Ghi nhớ: "SOH-CAH-TOA" giúp nhớ định nghĩa.' },
    ],
    [
      { q: 'Cho tam giác vuông có 1 góc nhọn 30°, huyền 10. Tính cạnh đối góc 30°.', a: 'sin 30° = 1/2 = đối/10 ⇒ đối = 5.' },
      { q: 'Biết cos α = 3/5, α nhọn. Tính sin α.', a: 'sin α = √(1 − 9/25) = √(16/25) = 4/5.' },
    ]
  ),

  'S9TOAN-w16-quiz': L(
    'Đường tròn — Định nghĩa và sự xác định',
    'Bước vào chương Đường tròn — một mảng kiến thức quan trọng trong đề thi vào 10.',
    ['Nắm định nghĩa và cách xác định đường tròn.', 'Biết quan hệ giữa các yếu tố cơ bản.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Đường tròn tâm O bán kính R là tập hợp các điểm cách O một khoảng R. Ký hiệu (O; R) hoặc (O).' },
      { h: 'Cách xác định' },
      { ul: ['Biết tâm và bán kính.', 'Qua 3 điểm không thẳng hàng (duy nhất 1 đường tròn).', 'Đường tròn ngoại tiếp tam giác: qua 3 đỉnh.'] },
      { note: 'Tâm đường tròn ngoại tiếp là giao điểm 3 đường trung trực của tam giác.' },
    ],
    [
      { q: 'Cho tam giác đều cạnh 6. Tính bán kính đường tròn ngoại tiếp.', a: 'R = a/√3 = 6/√3 = 2√3.' },
      { q: 'Đường tròn (O; 5) đi qua điểm A. Hỏi OA = ?', a: 'OA = R = 5 (vì A thuộc đường tròn).' },
    ]
  ),

  'S9TOAN-w17-quiz': L(
    'Vị trí tương đối của đường thẳng và đường tròn',
    'Có 3 vị trí: cắt nhau (2 điểm chung), tiếp xúc (1 điểm chung), không cắt nhau.',
    ['Nhận biết 3 vị trí tương đối qua khoảng cách từ tâm.', 'Vận dụng vào bài toán cụ thể.'],
    [
      { h: 'Ba vị trí tương đối' },
      { p: 'Gọi d là khoảng cách từ tâm O đến đường thẳng a, R là bán kính:' },
      { ul: ['d > R: a và (O) không có điểm chung.', 'd = R: a tiếp xúc (O) — a là tiếp tuyến.', 'd < R: a cắt (O) tại 2 điểm.'] },
      { note: 'Khi a tiếp xúc (O) tại T, OT vuông góc với a.' },
    ],
    [
      { q: 'Đường tròn (O; 5), đường thẳng cách O 5cm. Vị trí?', a: 'd = R ⇒ tiếp xúc.' },
      { q: 'Tính độ dài tiếp tuyến từ điểm M cách O 13cm, R = 5cm.', a: 'Tiếp tuyến² = OM² − R² = 169 − 25 = 144 ⇒ độ dài = 12cm.' },
    ]
  ),

  'S9TOAN-w18-quiz': L(
    'Ôn tập học kỳ I — Hình học',
    'Tổng hợp kiến thức hình học HK1: hệ thức lượng, tỉ số lượng giác, đường tròn.',
    ['Tổng hợp 3 chủ đề hình học HK1.', 'Giải bài tổng hợp.'],
    [
      { h: 'Các chủ đề' },
      { ul: ['Hệ thức lượng trong tam giác vuông.', 'Tỉ số lượng giác của góc nhọn.', 'Đường tròn: định nghĩa, vị trí tương đối với đường thẳng.'] },
      { note: 'Hình học là phần chiếm điểm cao trong đề thi vào 10 (thường câu 4 — 3-3,5 điểm).' },
    ],
    [
      { q: 'Tam giác ABC vuông tại A, AB = 3, AC = 4. Tính sin B.', a: 'BC = 5; sin B = AC/BC = 4/5.' },
      { q: 'Đường tròn (O; 6) và dây AB = 8. Tính khoảng cách d từ O đến AB.', a: 'd² = R² − (AB/2)² = 36 − 16 = 20 ⇒ d = 2√5.' },
    ]
  ),

  'S9TOAN-w19-quiz': L(
    'Hàm số y = ax² (a ≠ 0) — Định nghĩa và tính chất',
    'Bước vào HK2 với hàm số bậc hai dạng y = ax² — chuẩn bị cho phương trình bậc hai.',
    ['Nắm định nghĩa và tính chất của y = ax².', 'Vẽ đồ thị parabol.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Hàm số y = ax² (a ≠ 0) có đồ thị là parabol nhận trục Oy làm trục đối xứng, đỉnh tại O.' },
      { ul: ['a > 0: parabol quay bề lõm lên trên, có giá trị nhỏ nhất tại x = 0.', 'a < 0: quay bề lõm xuống dưới, có giá trị lớn nhất tại x = 0.'] },
      { note: '|a| càng lớn, parabol càng "hẹp".' },
    ],
    [
      { q: 'Cho y = 2x². Tìm y khi x = −3.', a: 'y = 2 · 9 = 18.' },
      { q: 'Parabol y = −3x² có đỉnh quay lên hay xuống?', a: 'a = −3 < 0 ⇒ quay bề lõm xuống dưới.' },
    ]
  ),

  'S9TOAN-w20-quiz': L(
    'Phương trình bậc hai một ẩn — Công thức nghiệm',
    'Phương trình bậc hai là một trong những chủ đề quan trọng nhất của lớp 9 và đề thi vào 10.',
    ['Nắm công thức nghiệm tổng quát.', 'Xét biệt thức Δ để biện luận số nghiệm.'],
    [
      { h: 'Dạng tổng quát' },
      { p: 'ax² + bx + c = 0 (a ≠ 0).' },
      { h: 'Công thức nghiệm' },
      { ul: ['Δ = b² − 4ac.', 'Δ > 0: 2 nghiệm phân biệt x₁,₂ = (−b ± √Δ)/(2a).', 'Δ = 0: nghiệm kép x = −b/(2a).', 'Δ < 0: vô nghiệm thực.'] },
      { note: 'Có công thức rút gọn Δ′ = b′² − ac khi b = 2b′ chẵn.' },
    ],
    [
      { q: 'Giải x² − 5x + 6 = 0.', a: 'Δ = 25 − 24 = 1 ⇒ x = (5±1)/2 ⇒ x = 3 hoặc x = 2.' },
      { q: 'Tìm m để x² − 4x + m = 0 có nghiệm kép.', a: 'Δ = 16 − 4m = 0 ⇒ m = 4.' },
    ]
  ),

  'S9TOAN-w21-quiz': L(
    'Định lý Viète',
    'Định lý Viète cho phép tính tổng và tích nghiệm mà không cần giải phương trình — công cụ mạnh trong nhiều bài toán.',
    ['Nắm hệ thức Viète.', 'Vận dụng tính các biểu thức đối xứng của 2 nghiệm.'],
    [
      { h: 'Định lý Viète' },
      { p: 'Nếu x₁, x₂ là 2 nghiệm của ax² + bx + c = 0 (a ≠ 0):' },
      { ul: ['x₁ + x₂ = −b/a (S = tổng)', 'x₁ · x₂ = c/a (P = tích)'] },
      { h: 'Ứng dụng' },
      { ul: ['Tính các biểu thức đối xứng (x₁² + x₂², x₁³ + x₂³,...).', 'Tìm 2 số biết tổng và tích.', 'Biện luận dấu của nghiệm.'] },
      { note: 'Điều kiện áp dụng: phương trình phải có nghiệm thực (Δ ≥ 0).' },
    ],
    [
      { q: 'PT 2x² − 6x + 4 = 0 có S, P = ?', a: 'S = 6/2 = 3; P = 4/2 = 2.' },
      { q: 'Tính x₁² + x₂² biết x₁ + x₂ = 5, x₁x₂ = 6.', a: '= (x₁+x₂)² − 2x₁x₂ = 25 − 12 = 13.' },
    ]
  ),

  'S9TOAN-w22-quiz': L(
    'Phương trình quy về phương trình bậc hai',
    'Nhiều phương trình có thể đưa về dạng bậc hai bằng cách đặt ẩn phụ.',
    ['Đặt ẩn phụ cho phương trình trùng phương, phương trình chứa biểu thức lặp.', 'Giải phương trình chứa căn đơn giản.'],
    [
      { h: 'Phương trình trùng phương' },
      { p: 'ax⁴ + bx² + c = 0. Đặt t = x² ≥ 0, đưa về at² + bt + c = 0.' },
      { h: 'Phương trình chứa căn' },
      { ul: ['Đặt điều kiện.', 'Bình phương hai vế (nhớ kiểm tra nghiệm).', 'Hoặc đặt ẩn phụ thay căn.'] },
      { note: 'Luôn kiểm tra lại nghiệm khi bình phương vì có thể tạo nghiệm ngoại lai.' },
    ],
    [
      { q: 'Giải x⁴ − 5x² + 4 = 0.', a: 'Đặt t = x² ≥ 0: t² − 5t + 4 = 0 ⇒ t = 1 hoặc 4 ⇒ x = ±1, ±2.' },
      { q: 'Giải √(x+2) = x.', a: 'Điều kiện x ≥ 0. Bình phương: x + 2 = x² ⇒ x² − x − 2 = 0 ⇒ x = 2 hoặc −1. Loại −1, chỉ x = 2.' },
    ]
  ),

  'S9TOAN-w23-quiz': L(
    'Giải bài toán bằng cách lập phương trình',
    'Dạng quan trọng trong đề thi: chuyển bài toán thực tế thành phương trình bậc hai để giải.',
    ['Đặt ẩn, lập phương trình bậc hai.', 'Kiểm tra điều kiện và kết luận.'],
    [
      { h: 'Quy trình' },
      { ul: ['Đặt ẩn (thường là đại lượng cần tìm, kèm điều kiện).', 'Biểu diễn các đại lượng liên quan.', 'Lập phương trình từ mối quan hệ.', 'Giải và kiểm tra điều kiện.'] },
      { note: 'Các dạng phổ biến: chuyển động, công việc, dân số, hình học.' },
    ],
    [
      { q: 'Hai số dương hơn kém nhau 4, tích là 96. Tìm 2 số.', a: 'Đặt x, x+4 dương; x(x+4) = 96 ⇒ x² + 4x − 96 = 0 ⇒ x = 8. Hai số là 8 và 12.' },
      { q: 'Một thửa đất hình chữ nhật, chiều dài hơn chiều rộng 3m, diện tích 54m². Tính kích thước.', a: 'x(x+3) = 54 ⇒ x² + 3x − 54 = 0 ⇒ x = 6 ⇒ kích thước 6m × 9m.' },
    ]
  ),

  'S9TOAN-w24-quiz': L(
    'Đường tròn — Góc với đường tròn',
    'Các loại góc và mối quan hệ với cung — kiến thức quan trọng trong câu hình học thi vào 10.',
    ['Phân biệt góc ở tâm, góc nội tiếp, góc tạo bởi tia tiếp tuyến và dây.', 'Quan hệ giữa các góc và cung.'],
    [
      { h: 'Các loại góc' },
      { ul: ['Góc ở tâm: bằng số đo cung bị chắn.', 'Góc nội tiếp: bằng 1/2 cung bị chắn.', 'Góc tạo bởi tia tiếp tuyến và dây: bằng 1/2 cung bị chắn.'] },
      { h: 'Hệ quả quan trọng' },
      { ul: ['Các góc nội tiếp chắn cùng cung thì bằng nhau.', 'Góc nội tiếp chắn nửa đường tròn = 90°.'] },
      { note: 'Đây là công cụ mạnh để chứng minh các bài hình.' },
    ],
    [
      { q: 'Cung AB có số đo 100°. Góc nội tiếp chắn AB = ?', a: '100°/2 = 50°.' },
      { q: 'Tam giác nội tiếp đường tròn, một cạnh là đường kính. Góc đối diện cạnh đó?', a: '= 90° (góc nội tiếp chắn nửa đường tròn).' },
    ]
  ),

  'S9TOAN-w25-quiz': L(
    'Tứ giác nội tiếp',
    'Tứ giác nội tiếp là một dạng bài thường gặp trong câu hình thi vào 10.',
    ['Định nghĩa và điều kiện tứ giác nội tiếp.', 'Vận dụng chứng minh.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Tứ giác có 4 đỉnh nằm trên cùng một đường tròn.' },
      { h: 'Tính chất + dấu hiệu' },
      { ul: ['Tổng 2 góc đối = 180°.', 'Dấu hiệu nhận biết: tổng 2 góc đối bằng 180° hoặc 4 điểm cùng cách 1 điểm cố định.', 'Hai góc nhìn 1 đoạn dưới góc bằng nhau ⇒ 4 điểm thuộc đường tròn.'] },
      { note: 'Chứng minh tứ giác nội tiếp là kỹ năng cơ bản trong hình lớp 9.' },
    ],
    [
      { q: 'Tứ giác ABCD nội tiếp, A = 80°. Tính C.', a: 'A + C = 180° ⇒ C = 100°.' },
      { q: 'Hai góc đối tứ giác bằng 110° và 70°. Tứ giác có nội tiếp không?', a: '110 + 70 = 180 ⇒ nội tiếp.' },
    ]
  ),

  'S9TOAN-w26-quiz': L(
    'Hình trụ — Diện tích và thể tích',
    'Bắt đầu chương Hình không gian: hình trụ là khối quen thuộc trong đời sống.',
    ['Tính diện tích xung quanh, diện tích toàn phần, thể tích hình trụ.'],
    [
      { h: 'Công thức hình trụ' },
      { p: 'Bán kính đáy R, chiều cao h.' },
      { ul: ['S_xq = 2πRh', 'S_tp = 2πRh + 2πR² = 2πR(R + h)', 'V = πR²h'] },
      { note: 'Hình trụ thường gặp: lon nước ngọt, ống cống.' },
    ],
    [
      { q: 'Hình trụ R = 3, h = 10. Tính V.', a: 'V = π · 9 · 10 = 90π.' },
      { q: 'Hình trụ R = 5, h = 4. Tính S_xq.', a: 'S_xq = 2π · 5 · 4 = 40π.' },
    ]
  ),

  'S9TOAN-w27-quiz': L(
    'Hình nón — Diện tích và thể tích',
    'Hình nón và hình nón cụt — các khối quen thuộc trong thực tế (nón lá, phễu).',
    ['Tính các đại lượng của hình nón.'],
    [
      { h: 'Công thức hình nón' },
      { p: 'Bán kính đáy R, đường sinh l, chiều cao h.' },
      { ul: ['l² = R² + h²', 'S_xq = πRl', 'S_tp = πRl + πR² = πR(l + R)', 'V = (1/3)πR²h'] },
      { note: 'Hình nón cụt: thể tích V = (1/3)πh(R² + r² + Rr).' },
    ],
    [
      { q: 'Hình nón R = 3, h = 4. Tính l và S_xq.', a: 'l = √(9+16) = 5; S_xq = π · 3 · 5 = 15π.' },
      { q: 'Hình nón R = 6, h = 8. Tính V (lấy π ≈ 3,14).', a: 'V = (1/3) · 3,14 · 36 · 8 ≈ 301,44.' },
    ]
  ),

  'S9TOAN-w28-quiz': L(
    'Hình cầu — Diện tích và thể tích',
    'Hoàn thiện hình học không gian với hình cầu — khối có nhiều tính chất đặc biệt.',
    ['Tính diện tích mặt cầu và thể tích hình cầu.'],
    [
      { h: 'Công thức hình cầu' },
      { p: 'Bán kính R.' },
      { ul: ['S = 4πR²', 'V = (4/3)πR³'] },
      { note: 'Hình cầu là khối có thể tích lớn nhất trong cùng diện tích bề mặt.' },
    ],
    [
      { q: 'Hình cầu R = 3. Tính V.', a: 'V = (4/3)π · 27 = 36π.' },
      { q: 'Hình cầu V = 36π. Tính R.', a: '(4/3)πR³ = 36π ⇒ R³ = 27 ⇒ R = 3.' },
    ]
  ),

  'S9TOAN-w29-quiz': L(
    'Ôn tập tổng hợp đại số — Phương trình + hệ',
    'Ôn lại 2 dạng quan trọng nhất của đại số lớp 9.',
    ['Giải thành thạo phương trình bậc 2 và hệ phương trình.', 'Vận dụng Viète.'],
    [
      { h: 'Ôn tập' },
      { ul: ['Phương trình bậc 2: công thức nghiệm + Viète.', 'Hệ phương trình: thế + cộng đại số.', 'Bài toán lập phương trình/hệ.'] },
      { note: 'Phần này thường chiếm 4-5 điểm trong đề thi vào 10.' },
    ],
    [
      { q: 'Tìm 2 số biết tổng = 10, tích = 21.', a: 'Hai số là nghiệm của x² − 10x + 21 = 0 ⇒ x = 3, 7.' },
      { q: 'Giải hệ { 2x + 3y = 13; x − y = −1 }.', a: 'Từ (2): x = y − 1; thế: 2(y−1) + 3y = 13 ⇒ 5y = 15 ⇒ y = 3, x = 2.' },
    ]
  ),

  'S9TOAN-w30-quiz': L(
    'Bất phương trình bậc nhất — Bậc hai',
    'Mở rộng từ phương trình sang bất phương trình — chuẩn bị cho cấp 3.',
    ['Giải bất phương trình bậc nhất.', 'Giải bất phương trình bậc hai đơn giản.'],
    [
      { h: 'Bất phương trình bậc nhất' },
      { p: 'ax + b > 0 (hoặc <, ≥, ≤). Giải tương tự phương trình; chú ý đổi dấu khi nhân/chia với số âm.' },
      { h: 'Bất phương trình bậc hai' },
      { ul: ['Tìm nghiệm pt = 0.', 'Lập bảng dấu (tam thức bậc hai cùng dấu a ngoài 2 nghiệm).', 'Lấy khoảng cần thiết.'] },
      { note: 'Tam thức ax² + bx + c (a > 0): dương ngoài 2 nghiệm, âm trong 2 nghiệm.' },
    ],
    [
      { q: 'Giải 2x − 6 > 0.', a: 'x > 3.' },
      { q: 'Giải x² − 5x + 6 < 0.', a: 'Nghiệm 2, 3 ⇒ 2 < x < 3.' },
    ]
  ),

  'S9TOAN-w31-quiz': L(
    'Luyện đề ôn thi vào 10 — Bộ 1',
    'Bắt đầu giai đoạn luyện đề: mỗi tuần làm 1 đề tổng hợp.',
    ['Làm đề thi mẫu theo cấu trúc đề thi tỉnh.', 'Phân tích sai lầm thường gặp.'],
    [
      { h: 'Cấu trúc đề thi vào 10 (HN)' },
      { ul: ['Câu 1 (2đ): Rút gọn biểu thức + bài toán liên quan.', 'Câu 2 (2đ): Lập PT/hệ giải bài toán có lời.', 'Câu 3 (2đ): Hàm số bậc 2 hoặc PT bậc 2.', 'Câu 4 (3đ): Hình học (đường tròn).', 'Câu 5 (1đ): Bất đẳng thức/cực trị.'] },
      { note: 'Phân bổ thời gian: ~120 phút cho cả đề. Câu khó nhất là câu 5.' },
    ],
    [
      { q: 'Câu 5 thường có dạng?', a: 'Bất đẳng thức, tìm GTLN/GTNN, hoặc PT-hệ phức tạp.' },
      { q: 'Bí quyết câu hình?', a: 'Vẽ hình chính xác, làm câu a (chứng minh tứ giác nội tiếp) trước.' },
    ]
  ),

  'S9TOAN-w32-quiz': L(
    'Luyện đề ôn thi vào 10 — Bộ 2',
    'Tiếp tục luyện đề + kỹ thuật làm bài.',
    ['Làm đề và phân tích.'],
    [
      { h: 'Kỹ thuật làm bài' },
      { ul: ['Đọc đề kỹ, gạch chân từ khoá.', 'Làm câu dễ trước để lấy điểm chắc.', 'Khi gặp câu khó, đánh dấu rồi quay lại.', 'Soát lại 10-15 phút cuối.'] },
      { note: 'Tâm lý vững là yếu tố then chốt.' },
    ],
    [
      { q: 'Cho phương trình x² − 2(m+1)x + m² = 0. Tìm m để có 2 nghiệm phân biệt.', a: 'Δ′ = (m+1)² − m² = 2m+1 > 0 ⇔ m > −1/2.' },
      { q: 'Tìm m để 2 nghiệm trên có tổng bình phương nhỏ nhất.', a: 'x₁² + x₂² = S² − 2P = 4(m+1)² − 2m² = 2m² + 8m + 4 = 2(m+2)² − 4. Min = −4 khi m = −2 (nhưng m > −1/2 nên không đạt; xét trên khoảng).' },
    ]
  ),

  'S9TOAN-w33-quiz': L(
    'Luyện đề ôn thi vào 10 — Bộ 3 + Bất đẳng thức',
    'Bất đẳng thức là câu 5 đề thi vào 10 — câu khó nhất, dùng phân loại học sinh.',
    ['Nắm các bất đẳng thức cơ bản.', 'Vận dụng vào câu khó.'],
    [
      { h: 'Bất đẳng thức cơ bản' },
      { ul: ['BĐT Cauchy (AM-GM): a + b ≥ 2√(ab) với a, b ≥ 0.', 'BĐT Bunyakovsky: (a² + b²)(c² + d²) ≥ (ac + bd)².', 'BĐT |a| + |b| ≥ |a + b|.', 'BĐT phụ: a² + b² ≥ 2ab.'] },
      { note: 'Dấu "=" thường xảy ra khi các biến bằng nhau.' },
    ],
    [
      { q: 'Cho a, b > 0, a + b = 4. Tìm Min của 1/a + 1/b.', a: '1/a + 1/b ≥ 4/(a+b) = 1 (BĐT Cauchy-Schwarz). Min = 1 khi a = b = 2.' },
      { q: 'Cho a + b = 6. Tìm Max của ab.', a: 'ab ≤ (a+b)²/4 = 9. Max = 9 khi a = b = 3.' },
    ]
  ),

  'S9TOAN-w34-quiz': L(
    'Ôn tập tổng hợp — Đường tròn + Hình không gian',
    'Hoàn thiện ôn hình học trước thi.',
    ['Tổng hợp kiến thức hình học cả năm.'],
    [
      { h: 'Trọng tâm ôn' },
      { ul: ['Đường tròn: góc, dây, tiếp tuyến, tứ giác nội tiếp.', 'Hình không gian: trụ, nón, cầu.', 'Hệ thức lượng + tỉ số lượng giác.'] },
      { note: 'Câu hình thi vào 10 thường 3 ý: chứng minh, tính toán, vận dụng nâng cao.' },
    ],
    [
      { q: 'Tam giác ABC nội tiếp (O), AH là đường cao. CMR: AB · AC = AH · AD với AD là đường kính qua A.', a: 'Tam giác vuông ABD và AHC đồng dạng (góc B = góc C cùng chắn cung) ⇒ AB · AC = AH · AD.' },
      { q: 'Khối nón R = 3, h = 4. Tính V.', a: 'V = (1/3)π · 9 · 4 = 12π.' },
    ]
  ),

  'S9TOAN-w35-quiz': L(
    'Đề ôn thi vào 10 — Tổng hợp cuối cấp',
    'Đề thi thử cuối cùng — chuẩn bị bước vào kỳ thi quan trọng.',
    ['Làm đề thi thử toàn diện.', 'Tự đánh giá năng lực + điều chỉnh kế hoạch ôn tập.'],
    [
      { h: 'Chuẩn bị tâm lý' },
      { ul: ['Ngủ đủ giấc trước thi.', 'Mang đầy đủ dụng cụ: bút, thước, máy tính, atlat.', 'Đến phòng thi sớm 30 phút.', 'Bình tĩnh, tự tin.'] },
      { note: 'Kết quả tốt là phần thưởng cho cả quá trình nỗ lực. Chúc các em thành công!' },
    ],
    [
      { q: 'Chiến lược làm bài Toán?', a: 'Câu 1, 2 dễ → làm chắc. Câu 3 trung bình. Câu 4 cẩn thận vẽ hình. Câu 5 làm sau cùng.' },
      { q: 'Lời khuyên cuối?', a: 'Tự tin vào kiến thức đã học, không hoảng loạn khi gặp câu khó. Bỏ qua câu khó, làm tiếp câu khác rồi quay lại.' },
    ]
  ),
};
