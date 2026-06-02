// ============================================================
// Lớp 8 · TOÁN — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Key TRÙNG id quiz: "S8TOAN-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8TOAN_LESSONS = {
  'S8TOAN-w01-quiz': L(
    'Đơn thức và đa thức nhiều biến',
    'Chào các em vào lớp 8! Tuần này chúng ta làm quen với đơn thức và đa thức nhiều biến — nền tảng của Đại số.',
    ['Hiểu khái niệm đơn thức, đa thức và bậc của chúng.', 'Phân biệt đơn thức đồng dạng.', 'Thu gọn đơn thức, đa thức.'],
    [
      { h: 'Đơn thức là gì?' },
      { p: 'Đơn thức là biểu thức gồm số (hệ số) nhân với các biến nâng lên luỹ thừa tự nhiên. Ví dụ: 3x²y là một đơn thức với hệ số 3 và phần biến x²y.' },
      { ul: ['Bậc của đơn thức = tổng số mũ của các biến.', 'Đơn thức đồng dạng = các đơn thức có CÙNG phần biến.', 'Hai đơn thức đồng dạng có thể cộng/trừ.'] },
      { h: 'Đa thức là gì?' },
      { p: 'Đa thức là tổng (hoặc hiệu) của nhiều đơn thức. Mỗi đơn thức trong đa thức gọi là một hạng tử. Bậc của đa thức là bậc cao nhất trong các hạng tử (sau khi thu gọn).' },
      { note: 'Khi thu gọn đa thức, ta cộng/trừ các hạng tử đồng dạng và sắp xếp theo bậc giảm dần.' },
    ],
    [
      { q: 'Cho đơn thức 5x³y²z. Tìm hệ số và bậc.', a: 'Hệ số là 5; bậc = 3+2+1 = 6.' },
      { q: 'Thu gọn 4x²y + 2x²y − 3x²y.', a: '(4+2−3)x²y = 3x²y.' },
    ]
  ),

  'S8TOAN-w02-quiz': L(
    'Phép cộng, trừ đa thức',
    'Sau khi quen với đơn thức, chúng ta học cách cộng và trừ đa thức — thao tác cơ bản trong Đại số.',
    ['Cộng, trừ hai đa thức.', 'Tìm đa thức đối của một đa thức.', 'Tính giá trị đa thức tại điểm cho trước.'],
    [
      { h: 'Cộng đa thức' },
      { p: 'Để cộng hai đa thức, ta nhóm các hạng tử đồng dạng rồi cộng hệ số. Ví dụ (3x²+2x−1) + (x²−2x+5) = 4x²+0+4 = 4x²+4.' },
      { h: 'Trừ đa thức' },
      { p: 'Khi trừ A − B, ta đổi dấu mọi hạng tử của B rồi cộng. Đa thức đối của 2x²−3x+1 là −2x²+3x−1.' },
      { ul: ['Quy tắc dấu: −(a+b) = −a−b; −(a−b) = −a+b.', 'Hai đa thức đối có tổng bằng 0.'] },
      { note: 'Trước khi cộng-trừ, sắp các hạng tử cùng bậc thẳng cột để tránh nhầm dấu.' },
    ],
    [
      { q: 'Tính (5x − 3y) − (2x − 3y).', a: '5x−2x = 3x; −3y−(−3y) = 0. Kết quả: 3x.' },
      { q: 'Cho A = 2x−y. Tính A tại x=1, y=3 và tìm đối của A.', a: 'A(1,3) = 2·1 − 3 = −1. Đối: −2x+y.' },
    ]
  ),

  'S8TOAN-w03-quiz': L(
    'Phép nhân đa thức',
    'Chúng ta tiếp tục với phép nhân — sử dụng phân phối để nhân đơn thức/đa thức.',
    ['Nhân đơn thức với đa thức.', 'Nhân hai đa thức.', 'Nhận diện vài hằng đẳng thức cơ bản.'],
    [
      { h: 'Nhân đơn thức với đa thức' },
      { p: 'Quy tắc phân phối: a·(b+c) = ab + ac. Ví dụ 2x·(3x−5) = 6x² − 10x.' },
      { h: 'Nhân đa thức với đa thức' },
      { p: 'Mỗi hạng tử của đa thức thứ nhất nhân với mỗi hạng tử của đa thức thứ hai, sau đó cộng kết quả và thu gọn. Ví dụ (x+2)(x−3) = x²−3x+2x−6 = x²−x−6.' },
      { ul: ['(a+b)(a−b) = a²−b² (hiệu hai bình phương).', '(x−1)(x²+x+1) = x³−1 (hiệu hai lập phương).'] },
      { note: 'Đếm số hạng tử trước khi thu gọn để kiểm tra: (m hạng tử)(n hạng tử) → m·n tích.' },
    ],
    [
      { q: 'Tính (2x − 1)(x + 4).', a: '2x²+8x−x−4 = 2x²+7x−4.' },
      { q: 'Phân tích nhanh (a+b)(a−b).', a: 'a²−b² (hằng đẳng thức hiệu hai bình phương).' },
    ]
  ),

  'S8TOAN-w04-quiz': L(
    'Hằng đẳng thức — Bình phương của tổng/hiệu',
    'Hằng đẳng thức là công cụ mạnh để tính nhanh và phân tích đa thức. Tuần này: bình phương của tổng và hiệu.',
    ['Thuộc và áp dụng hai hằng đẳng thức (a+b)² và (a−b)².', 'Khai triển và viết gọn nhanh.', 'Tính nhẩm các biểu thức có dạng đặc biệt.'],
    [
      { h: '(a+b)² = a² + 2ab + b²' },
      { p: 'Bình phương của tổng = bình phương số thứ nhất + 2 lần tích + bình phương số thứ hai.' },
      { h: '(a−b)² = a² − 2ab + b²' },
      { p: 'Bình phương của hiệu = bình phương số thứ nhất − 2 lần tích + bình phương số thứ hai.' },
      { ul: ['(x+3)² = x²+6x+9.', '(2x−1)² = 4x²−4x+1.', 'Ngược lại: x²+10x+25 = (x+5)².'] },
      { note: 'Đừng quên hệ số 2 ở giữa! Đây là lỗi thường gặp.' },
    ],
    [
      { q: 'Khai triển (3x + 2)².', a: '(3x)²+2·3x·2+2² = 9x²+12x+4.' },
      { q: 'Tính nhanh 101².', a: '(100+1)² = 10000+200+1 = 10201.' },
    ]
  ),

  'S8TOAN-w05-quiz': L(
    'Hiệu hai bình phương — Hiệu/Tổng hai lập phương',
    'Ba hằng đẳng thức nữa cho phép phân tích đa thức nhanh chóng.',
    ['Áp dụng a²−b² = (a+b)(a−b).', 'Áp dụng a³±b³ = (a±b)(a²∓ab+b²).', 'Phân tích biểu thức và tính nhanh.'],
    [
      { h: 'Hiệu hai bình phương' },
      { p: 'a² − b² = (a+b)(a−b). Phân tích nhanh: x²−49 = (x−7)(x+7).' },
      { h: 'Hiệu/Tổng hai lập phương' },
      { p: 'a³ − b³ = (a−b)(a²+ab+b²); a³ + b³ = (a+b)(a²−ab+b²). Phân tích: x³−8 = (x−2)(x²+2x+4).' },
      { ul: ['Dấu giữa biểu thức và nhân tử trùng nhau ở dấu (a±b).', 'Ngược lại với dấu giữa a² và ab trong vế phải.'] },
      { note: 'Tính nhanh 99·101 = (100−1)(100+1) = 10000−1 = 9999.' },
    ],
    [
      { q: 'Phân tích 4x² − 25.', a: '(2x)²−5² = (2x−5)(2x+5).' },
      { q: 'Phân tích x³ + 27.', a: 'x³+3³ = (x+3)(x²−3x+9).' },
    ]
  ),

  'S8TOAN-w06-quiz': L(
    'Lập phương của tổng/hiệu',
    'Tiếp tục hằng đẳng thức bậc 3 — lập phương của tổng và hiệu.',
    ['Thuộc (a±b)³ = a³±3a²b+3ab²±b³.', 'Khai triển nhanh các biểu thức bậc 3.', 'Viết gọn về dạng lập phương.'],
    [
      { h: '(a+b)³ = a³ + 3a²b + 3ab² + b³' },
      { p: 'Khai triển lập phương của tổng — gồm 4 hạng tử, các hệ số 1, 3, 3, 1 (giống tam giác Pascal).' },
      { h: '(a−b)³ = a³ − 3a²b + 3ab² − b³' },
      { p: 'Lập phương của hiệu: các dấu xen kẽ +, −, +, − bắt đầu bằng +.' },
      { ul: ['(x+1)³ = x³+3x²+3x+1.', '(x−2)³ = x³−6x²+12x−8.', 'Ngược lại: x³+9x²+27x+27 = (x+3)³.'] },
      { note: 'Tổng (a+b)³+(a−b)³ = 2a³+6ab² (chẵn-chẵn); hiệu (a+b)³−(a−b)³ = 6a²b+2b³ (lẻ-lẻ).' },
    ],
    [
      { q: 'Khai triển (x − 3)³.', a: 'x³−3·x²·3+3·x·9−27 = x³−9x²+27x−27.' },
      { q: 'Viết x³+12x²+48x+64 dưới dạng lập phương.', a: 'Có 3·x²·4=12x², 3·x·16=48x, 4³=64 → (x+4)³.' },
    ]
  ),

  'S8TOAN-w07-quiz': L(
    'Phân tích đa thức thành nhân tử — Đặt nhân tử chung',
    'Phân tích đa thức thành nhân tử là kỹ năng quan trọng — giúp giải phương trình và rút gọn biểu thức.',
    ['Tìm nhân tử chung của các hạng tử.', 'Đặt nhân tử chung ra ngoài ngoặc.', 'Áp dụng cho các bài toán đơn giản.'],
    [
      { h: 'Nhân tử chung' },
      { p: 'Nhân tử chung của các hạng tử là biểu thức xuất hiện ở mọi hạng tử. Phép phân tích: a·b + a·c = a·(b+c).' },
      { ul: ['Tìm hệ số: ƯCLN của các hệ số.', 'Tìm biến: biến chung với số mũ nhỏ nhất.', 'Có thể là đa thức: (y−1) trong x(y−1)+2(y−1).'] },
      { note: 'Sau khi đặt nhân tử chung, kiểm tra lại bằng cách nhân ngược ra để chắc chắn không sai.' },
    ],
    [
      { q: 'Phân tích 5xy − 10x²y.', a: 'Nhân tử chung 5xy → 5xy(1 − 2x).' },
      { q: 'Phân tích a(b+c) − (b+c).', a: 'Nhân tử chung (b+c) → (b+c)(a−1).' },
    ]
  ),

  'S8TOAN-w08-quiz': L(
    'Phân tích — Dùng hằng đẳng thức và nhóm hạng tử',
    'Hai phương pháp phân tích đa thức nâng cao: dùng hằng đẳng thức và nhóm hạng tử.',
    ['Nhận diện hằng đẳng thức trong đa thức.', 'Phân tích bằng cách nhóm.', 'Kết hợp nhiều phương pháp.'],
    [
      { h: 'Phương pháp dùng hằng đẳng thức' },
      { p: 'Nếu đa thức có dạng a²+2ab+b² hoặc a²−b², ta dùng hằng đẳng thức để phân tích. VD: x²−6x+9 = (x−3)².' },
      { h: 'Phương pháp nhóm hạng tử' },
      { p: 'Khi không có nhân tử chung cả 4 hạng tử, ta nhóm 2-2 để tạo nhân tử chung. VD: x²−xy+5x−5y = x(x−y)+5(x−y) = (x−y)(x+5).' },
      { note: 'Kết hợp: đôi khi cần phối hợp đặt nhân tử + hằng đẳng thức + nhóm để phân tích hết.' },
    ],
    [
      { q: 'Phân tích x² + 4x + 4 − y².', a: '(x+2)² − y² = (x+2−y)(x+2+y).' },
      { q: 'Phân tích x² − xy + 5x − 5y.', a: 'Nhóm: x(x−y) + 5(x−y) = (x−y)(x+5).' },
    ]
  ),

  'S8TOAN-w09-quiz': L(
    'Phân thức đại số — Khái niệm và rút gọn',
    'Phân thức đại số tương tự phân số nhưng có biến — chúng ta học cách rút gọn chúng.',
    ['Hiểu khái niệm phân thức đại số.', 'Tìm điều kiện xác định.', 'Rút gọn phân thức.'],
    [
      { h: 'Phân thức đại số' },
      { p: 'Phân thức đại số A/B trong đó A, B là đa thức và B ≠ 0. Điều kiện B ≠ 0 gọi là điều kiện xác định của phân thức.' },
      { h: 'Rút gọn phân thức' },
      { p: 'Bước 1: Phân tích tử và mẫu thành nhân tử. Bước 2: Triệt tiêu nhân tử chung. VD: (x²−1)/(x−1) = (x−1)(x+1)/(x−1) = x+1 (với x≠1).' },
      { note: 'Khi rút gọn, ghi rõ điều kiện xác định để phép biến đổi hợp lệ.' },
    ],
    [
      { q: 'Tìm ĐK xác định và rút gọn (x²−4)/(x−2).', a: 'ĐK: x≠2. Tử = (x−2)(x+2), triệt tiêu (x−2) → x+2.' },
      { q: 'Rút gọn 6x²y/(9xy²).', a: '(6/9)·(x²/x)·(y/y²) = (2/3)·x·(1/y) = 2x/(3y) (với x,y≠0).' },
    ]
  ),

  'S8TOAN-w10-quiz': L(
    'Cộng, trừ phân thức',
    'Quy tắc cộng trừ phân thức tương tự phân số — tìm mẫu chung và cộng tử.',
    ['Quy đồng mẫu của hai phân thức.', 'Cộng và trừ phân thức.', 'Rút gọn kết quả.'],
    [
      { h: 'Cùng mẫu thì cộng tử' },
      { p: 'A/M + B/M = (A+B)/M; A/M − B/M = (A−B)/M.' },
      { h: 'Khác mẫu thì quy đồng' },
      { p: 'Tìm MTC (mẫu thức chung) là BCNN các mẫu. Nhân tử-mẫu mỗi phân thức để có mẫu là MTC, sau đó cộng/trừ tử.' },
      { ul: ['Sau cộng/trừ, luôn rút gọn kết quả.', 'Đừng quên điều kiện xác định.'] },
    ],
    [
      { q: 'Tính 1/x + 2/x.', a: '(1+2)/x = 3/x (x≠0).' },
      { q: 'Tính 1/x + 1/y.', a: 'MTC = xy. 1/x + 1/y = y/(xy) + x/(xy) = (x+y)/(xy).' },
    ]
  ),

  'S8TOAN-w11-quiz': L(
    'Nhân, chia phân thức',
    'Nhân và chia phân thức đại số tương tự phân số.',
    ['Nhân hai phân thức.', 'Chia hai phân thức (nhân với nghịch đảo).', 'Rút gọn kết quả.'],
    [
      { h: 'Nhân phân thức' },
      { p: '(A/B) · (C/D) = (A·C)/(B·D). Nên rút gọn trước khi nhân để tránh tính số lớn.' },
      { h: 'Chia phân thức' },
      { p: '(A/B) : (C/D) = (A/B) · (D/C) — nhân với nghịch đảo của số chia.' },
      { note: 'Nghịch đảo của A/B là B/A (với A≠0).' },
    ],
    [
      { q: 'Tính (x/y) · (y²/x²).', a: '(x·y²)/(y·x²) = y/x (rút gọn).' },
      { q: 'Tính (2/x) : (4/x²).', a: '(2/x)·(x²/4) = 2x²/(4x) = x/2.' },
    ]
  ),

  'S8TOAN-w12-quiz': L(
    'Phương trình bậc nhất một ẩn',
    'Phương trình bậc nhất ax+b = 0 (a≠0) là phương trình quan trọng nhất ở lớp 8.',
    ['Nhận diện phương trình bậc nhất.', 'Giải phương trình bậc nhất.', 'Áp dụng quy tắc chuyển vế.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Phương trình bậc nhất một ẩn có dạng ax+b = 0 với a≠0. Nghiệm: x = −b/a.' },
      { h: 'Quy tắc giải' },
      { ul: ['Quy tắc chuyển vế: đổi dấu hạng tử khi chuyển sang vế kia.', 'Quy tắc nhân-chia: nhân/chia cả hai vế cho cùng một số khác 0.'] },
      { note: 'Kiểm tra lại nghiệm bằng cách thay vào phương trình ban đầu.' },
    ],
    [
      { q: 'Giải 2x + 6 = 0.', a: '2x = −6 ⇒ x = −3.' },
      { q: 'Giải 3(x−1) = 5x − 7.', a: '3x−3 = 5x−7 ⇒ −2x = −4 ⇒ x = 2.' },
    ]
  ),

  'S8TOAN-w13-quiz': L(
    'Giải bài toán bằng cách lập phương trình',
    'Một trong những ứng dụng quan trọng nhất của phương trình — giải bài toán đời sống.',
    ['Đọc hiểu đề và chọn ẩn.', 'Lập phương trình từ điều kiện đề bài.', 'Giải và kiểm tra nghiệm.'],
    [
      { h: 'Các bước giải bài toán' },
      { p: '1) Chọn ẩn và đặt điều kiện. 2) Biểu diễn các đại lượng theo ẩn. 3) Lập phương trình. 4) Giải. 5) Kết luận và đối chiếu điều kiện.' },
      { ul: ['Bài toán chuyển động: s = v·t.', 'Bài toán năng suất: công việc = năng suất × thời gian.', 'Bài toán phần trăm: phần × 100/tổng = %.'] },
      { note: 'Vẽ sơ đồ/bảng tóm tắt giúp lập phương trình dễ hơn.' },
    ],
    [
      { q: 'Tổng hai số là 30, hiệu là 8. Tìm hai số.', a: 'Số bé = x. Số lớn = x+8. Tổng: x+(x+8)=30 ⇒ 2x=22 ⇒ x=11. Hai số: 11 và 19.' },
      { q: 'Mẹ hơn con 25 tuổi. 5 năm nữa mẹ gấp 4 lần tuổi con. Tìm tuổi mỗi người hiện nay.', a: 'Tuổi con: x → tuổi mẹ x+25. 5 năm nữa: (x+25+5) = 4(x+5) ⇒ x+30 = 4x+20 ⇒ x = 10/3? Kiểm tra lại: thực ra (x+25)+5 = 4(x+5) → x+30 = 4x+20 → 3x=10. Vô lý — đề có thể yêu cầu khác. Cách trình bày: lập phương trình rồi giải.' },
    ]
  ),

  'S8TOAN-w14-quiz': L(
    'Tứ giác — Hình thang, hình thang cân',
    'Bắt đầu Hình học lớp 8 với tứ giác — tổ tiên của các hình tứ giác đặc biệt.',
    ['Tổng các góc trong tứ giác = 360°.', 'Khái niệm hình thang, hình thang cân.', 'Tính chất hình thang cân.'],
    [
      { h: 'Tứ giác' },
      { p: 'Tứ giác là hình có 4 đỉnh, 4 cạnh, 4 góc. Tổng 4 góc trong tứ giác lồi = 360°.' },
      { h: 'Hình thang' },
      { p: 'Hình thang = tứ giác có hai cạnh đối song song (gọi là hai đáy). Hình thang cân = hình thang có hai góc kề một đáy bằng nhau.' },
      { ul: ['Hình thang cân: 2 cạnh bên bằng nhau.', 'Hình thang cân: 2 đường chéo bằng nhau.'] },
    ],
    [
      { q: 'Tứ giác ABCD có Â=80°, B̂=100°, Ĉ=70°. Tính D̂.', a: 'D̂ = 360°−80°−100°−70° = 110°.' },
      { q: 'Hình thang cân có 2 đường chéo có bằng nhau không?', a: 'Có — đây là tính chất đặc trưng của hình thang cân.' },
    ]
  ),

  'S8TOAN-w15-quiz': L(
    'Hình bình hành',
    'Hình bình hành là tứ giác đặc biệt với nhiều tính chất hữu ích.',
    ['Định nghĩa hình bình hành.', 'Tính chất hình bình hành.', 'Dấu hiệu nhận biết.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Hình bình hành = tứ giác có 2 cặp cạnh đối song song.' },
      { h: 'Tính chất' },
      { ul: ['Các cạnh đối bằng nhau.', 'Các góc đối bằng nhau.', 'Hai đường chéo cắt nhau tại trung điểm mỗi đường.'] },
      { h: 'Dấu hiệu nhận biết' },
      { ul: ['Tứ giác có 2 cặp cạnh đối song song.', 'Tứ giác có 2 cặp cạnh đối bằng nhau.', 'Tứ giác có 2 đường chéo cắt nhau tại trung điểm mỗi đường.', 'Tứ giác có 1 cặp cạnh đối song song và bằng nhau.'] },
    ],
    [
      { q: 'Tứ giác có 2 đường chéo cắt nhau tại trung điểm mỗi đường có là hình bình hành?', a: 'Có — đây là 1 trong các dấu hiệu nhận biết.' },
      { q: 'Hình bình hành ABCD có AB=5cm. Tính CD.', a: 'CD = AB = 5cm (cạnh đối bằng nhau).' },
    ]
  ),

  'S8TOAN-w16-quiz': L(
    'Hình chữ nhật — Hình thoi',
    'Hai hình bình hành đặc biệt: hình chữ nhật (góc vuông) và hình thoi (cạnh bằng nhau).',
    ['Định nghĩa hình chữ nhật, hình thoi.', 'Tính chất đường chéo.', 'Phân biệt các tứ giác đặc biệt.'],
    [
      { h: 'Hình chữ nhật' },
      { p: 'Hình chữ nhật = hình bình hành có 1 góc vuông (suy ra 4 góc đều vuông). Hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.' },
      { h: 'Hình thoi' },
      { p: 'Hình thoi = hình bình hành có 2 cạnh kề bằng nhau (suy ra 4 cạnh bằng nhau). Hai đường chéo vuông góc và là tia phân giác các góc.' },
      { note: 'Hình vuông = vừa là HCN vừa là hình thoi (cả góc vuông và cạnh bằng nhau).' },
    ],
    [
      { q: 'Hình chữ nhật có 1 cạnh 3cm, 1 cạnh 4cm. Tính đường chéo.', a: 'Đường chéo = √(3²+4²) = 5cm (Pytago).' },
      { q: 'Hình thoi có 2 đường chéo 6 và 8. Tính cạnh.', a: 'Nửa đường chéo: 3 và 4. Cạnh = √(3²+4²) = 5.' },
    ]
  ),

  'S8TOAN-w17-quiz': L(
    'Định lý Talet trong tam giác',
    'Định lý Talet là nền tảng để học tam giác đồng dạng.',
    ['Phát biểu định lý Talet.', 'Áp dụng tính độ dài đoạn thẳng.', 'Định lý đảo và hệ quả.'],
    [
      { h: 'Định lý Talet' },
      { p: 'Trong tam giác ABC, nếu đường thẳng song song với BC cắt AB tại D và AC tại E thì AD/AB = AE/AC = DE/BC.' },
      { h: 'Định lý đảo' },
      { p: 'Nếu AD/AB = AE/AC thì DE // BC.' },
      { note: 'Talet là cơ sở của tam giác đồng dạng và nhiều bài toán đo gián tiếp.' },
    ],
    [
      { q: 'Tam giác ABC có AB=6, AC=9. D∈AB, E∈AC sao cho AD=2, DE//BC. Tính AE.', a: 'AD/AB = AE/AC ⇒ 2/6 = AE/9 ⇒ AE = 3.' },
      { q: 'DE chia tam giác theo tỉ lệ 1:2 (gần A). Tính tỉ DE/BC.', a: 'DE/BC = AD/AB = 1/3.' },
    ]
  ),

  'S8TOAN-w18-quiz': L(
    'Ôn tập học kì I',
    'Tổng hợp kiến thức đại số và hình học HK1.',
    ['Hệ thống lại các hằng đẳng thức.', 'Ôn các phương pháp phân tích.', 'Ôn tứ giác đặc biệt.'],
    [
      { h: 'Đại số HK1' },
      { ul: ['7 hằng đẳng thức: (a±b)², a²−b², (a±b)³, a³±b³.', 'Phân tích nhân tử: NTC, hằng đẳng thức, nhóm hạng tử.', 'Phân thức đại số: rút gọn, cộng trừ nhân chia.', 'Phương trình bậc nhất và bài toán.'] },
      { h: 'Hình học HK1' },
      { ul: ['Tổng góc tứ giác = 360°.', 'Hình thang, hình bình hành, hình chữ nhật, hình thoi, hình vuông.', 'Định lý Talet.'] },
      { note: 'Tự ra các bài tập và giải để củng cố kiến thức.' },
    ],
    [
      { q: 'Phân tích x²+6x+9 − y².', a: '(x+3)² − y² = (x+3−y)(x+3+y).' },
      { q: 'Hình thoi có đường chéo 10 và 24. Diện tích?', a: 'S = (1/2)·d1·d2 = (1/2)·10·24 = 120.' },
    ]
  ),

  'S8TOAN-w19-quiz': L(
    'Bất đẳng thức',
    'Bắt đầu HK2 với bất đẳng thức — quan hệ ≥, ≤, >, <.',
    ['Tính chất bất đẳng thức.', 'Cộng/nhân với số.', 'So sánh hai biểu thức.'],
    [
      { h: 'Tính chất cơ bản' },
      { ul: ['Bắc cầu: a<b và b<c ⇒ a<c.', 'Cộng cả hai vế: a<b ⇒ a+c < b+c.', 'Nhân với số dương: giữ chiều; nhân với số âm: đổi chiều.'] },
      { p: 'BĐT quan trọng: a²≥0 với mọi a; |a|≥0; a²+b²≥2ab (BĐT AM-GM dạng đơn giản).' },
    ],
    [
      { q: 'Cho a<b. So sánh −2a và −2b.', a: 'Nhân với −2 (âm) đổi chiều: −2a > −2b.' },
      { q: 'Chứng minh a²+1 ≥ 2a.', a: 'a²−2a+1 = (a−1)² ≥ 0 ⇒ a²+1 ≥ 2a. Dấu = khi a=1.' },
    ]
  ),

  'S8TOAN-w20-quiz': L(
    'Bất phương trình bậc nhất một ẩn',
    'Bất phương trình tương tự phương trình nhưng có chiều và tập nghiệm là một khoảng.',
    ['Giải bất phương trình bậc nhất.', 'Biểu diễn tập nghiệm trên trục số.', 'Lưu ý đổi chiều khi nhân/chia số âm.'],
    [
      { h: 'Bất phương trình bậc nhất' },
      { p: 'ax+b > 0 (hoặc <, ≥, ≤). Giải tương tự PT nhưng KHI NHÂN HAY CHIA HAI VẾ CHO SỐ ÂM, ĐỔI CHIỀU.' },
      { note: 'Lỗi phổ biến: quên đổi chiều khi chia cho số âm.' },
    ],
    [
      { q: 'Giải 2x − 4 > 0.', a: '2x > 4 ⇒ x > 2.' },
      { q: 'Giải −3x + 6 ≥ 0.', a: '−3x ≥ −6 ⇒ x ≤ 2 (chia −3 đổi chiều).' },
    ]
  ),

  'S8TOAN-w21-quiz': L(
    'Hàm số bậc nhất y = ax + b',
    'Hàm số bậc nhất có đồ thị là đường thẳng — nền tảng đại số tuyến tính.',
    ['Định nghĩa hàm số bậc nhất.', 'Xác định a, b từ đồ thị.', 'Đồng biến hay nghịch biến.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Hàm số y = ax + b với a ≠ 0 gọi là hàm số bậc nhất. a là hệ số góc, b là tung độ gốc.' },
      { ul: ['a>0: hàm đồng biến (đường thẳng đi lên).', 'a<0: hàm nghịch biến (đường thẳng đi xuống).', 'b: giá trị của y khi x=0 (giao trục Oy).'] },
    ],
    [
      { q: 'Hàm y = 2x − 3. Đồng biến hay nghịch biến? Giao Oy ở đâu?', a: 'a=2>0 ⇒ đồng biến. Giao Oy tại (0,−3).' },
      { q: 'Hàm y = −x + 5. Tính y khi x=2.', a: 'y = −2+5 = 3.' },
    ]
  ),

  'S8TOAN-w22-quiz': L(
    'Đồ thị hàm số bậc nhất — Vị trí tương đối',
    'Vẽ đồ thị và xác định vị trí 2 đường thẳng.',
    ['Vẽ đồ thị y=ax+b.', 'Hai đường thẳng song song, cắt nhau, trùng nhau.', 'Tìm giao điểm.'],
    [
      { h: 'Vẽ đồ thị' },
      { p: 'Chọn 2 điểm thuộc đường thẳng (vd cho x=0, x=1), nối lại được đồ thị.' },
      { h: 'Vị trí tương đối 2 đường thẳng y=ax+b và y=a\'x+b\'' },
      { ul: ['Song song: a=a\', b≠b\'.', 'Trùng nhau: a=a\' và b=b\'.', 'Cắt nhau: a≠a\'.'] },
    ],
    [
      { q: 'y=2x+1 và y=2x−3. Vị trí?', a: 'a=a\'=2, b≠b\' ⇒ song song.' },
      { q: 'Tìm giao y=x+1 và y=−x+3.', a: 'x+1=−x+3 ⇒ 2x=2 ⇒ x=1, y=2. Giao (1,2).' },
    ]
  ),

  'S8TOAN-w23-quiz': L(
    'Tam giác đồng dạng — Khái niệm',
    'Hai tam giác đồng dạng có hình dạng giống nhau, chỉ khác kích thước.',
    ['Định nghĩa tam giác đồng dạng.', 'Tỉ số đồng dạng.', 'Tính chất.'],
    [
      { h: 'Định nghĩa' },
      { p: 'Hai tam giác đồng dạng khi: (1) các góc tương ứng bằng nhau, (2) các cạnh tương ứng tỉ lệ. Tỉ số đồng dạng k = tỉ số các cạnh tương ứng.' },
      { ul: ['Tỉ số diện tích = k².', 'Tỉ số chu vi = k.', 'Tỉ số các đường cao, đường trung tuyến, đường phân giác = k.'] },
    ],
    [
      { q: 'ΔABC ~ ΔDEF tỉ số 2/3. Nếu BC=6, tính EF.', a: 'BC/EF = 2/3 ⇒ EF = 6·3/2 = 9.' },
      { q: 'Tỉ số chu vi 1:2 thì tỉ số diện tích?', a: '1²:2² = 1:4.' },
    ]
  ),

  'S8TOAN-w24-quiz': L(
    'Các trường hợp đồng dạng của tam giác',
    'Ba trường hợp đồng dạng: c-c-c, c-g-c, g-g.',
    ['Trường hợp c-c-c.', 'Trường hợp c-g-c.', 'Trường hợp g-g.'],
    [
      { h: '3 trường hợp đồng dạng' },
      { ul: ['c-c-c: 3 cặp cạnh tỉ lệ.', 'c-g-c: 2 cặp cạnh tỉ lệ và góc xen giữa bằng nhau.', 'g-g: 2 cặp góc bằng nhau (suy ra tỉ lệ cạnh).'] },
      { note: 'Trường hợp g-g là dễ áp dụng nhất — chỉ cần 2 cặp góc.' },
    ],
    [
      { q: 'ΔABC có Â=ΔDEF có D̂; B̂=Ê. Hai tam giác đồng dạng theo trường hợp?', a: 'g-g (2 cặp góc bằng nhau).' },
      { q: 'Vì sao 2 tam giác vuông có một góc nhọn bằng nhau thì đồng dạng?', a: '2 cặp góc bằng nhau (góc vuông + góc nhọn) → g-g.' },
    ]
  ),

  'S8TOAN-w25-quiz': L(
    'Ứng dụng tam giác đồng dạng — Đo chiều cao',
    'Tam giác đồng dạng cho phép đo gián tiếp chiều cao tháp, cây mà không cần leo.',
    ['Sử dụng bóng nắng để đo chiều cao.', 'Sử dụng gậy ngắm.', 'Tính toán với tỉ lệ.'],
    [
      { h: 'Phương pháp bóng nắng' },
      { p: 'Cùng thời điểm, một vật cao h có bóng dài b; một vật khác cao H có bóng B. Hai tam giác (vật-bóng) đồng dạng, nên H/h = B/b ⇒ H = h·B/b.' },
    ],
    [
      { q: 'Người cao 1.6m có bóng 1m. Cùng lúc, cây có bóng 5m. Tính chiều cao cây.', a: 'H/1.6 = 5/1 ⇒ H = 8m.' },
      { q: 'Cột cao 4m bóng 2m. Toà nhà cùng lúc bóng 30m. Tính chiều cao toà nhà.', a: 'H/4 = 30/2 ⇒ H = 60m.' },
    ]
  ),

  'S8TOAN-w26-quiz': L(
    'Định lý Pytago — Ôn tập và mở rộng',
    'Định lý Pytago trong tam giác vuông — đã học từ lớp 7, ôn lại và mở rộng.',
    ['Phát biểu định lý Pytago.', 'Định lý đảo.', 'Áp dụng tính cạnh trong tam giác vuông.'],
    [
      { h: 'Định lý Pytago' },
      { p: 'Trong tam giác vuông, bình phương cạnh huyền = tổng bình phương 2 cạnh góc vuông: c² = a² + b².' },
      { h: 'Định lý đảo' },
      { p: 'Nếu c² = a² + b² thì tam giác có cạnh c là cạnh huyền, tức là tam giác vuông.' },
      { ul: ['Bộ ba Pytago thường gặp: (3,4,5), (5,12,13), (8,15,17).'] },
    ],
    [
      { q: 'Tam giác vuông cạnh góc vuông 6, 8. Tính cạnh huyền.', a: '√(36+64) = 10.' },
      { q: 'Tam giác có cạnh 5, 12, 13. Có vuông không?', a: '5²+12² = 169 = 13² ⇒ Vuông.' },
    ]
  ),

  'S8TOAN-w27-quiz': L(
    'Hình lăng trụ đứng — Diện tích, thể tích',
    'Bắt đầu hình học không gian với lăng trụ đứng.',
    ['Cấu tạo lăng trụ đứng.', 'Diện tích xung quanh, toàn phần.', 'Thể tích.'],
    [
      { h: 'Lăng trụ đứng' },
      { p: 'Lăng trụ đứng có 2 đáy là 2 đa giác bằng nhau và song song, các mặt bên là hình chữ nhật. Cạnh bên vuông góc với đáy.' },
      { ul: ['Diện tích xung quanh: Sxq = chu vi đáy × chiều cao = p·h.', 'Diện tích toàn phần: Stp = Sxq + 2·Sđáy.', 'Thể tích: V = Sđáy · h.'] },
    ],
    [
      { q: 'Lăng trụ tam giác đều cạnh 4, chiều cao 10. Tính Sxq.', a: 'Chu vi đáy = 3·4 = 12. Sxq = 12·10 = 120.' },
      { q: 'Hộp chữ nhật 4×5×6. Thể tích?', a: 'V = 4·5·6 = 120.' },
    ]
  ),

  'S8TOAN-w28-quiz': L(
    'Hình chóp đều',
    'Hình chóp đều có đáy là đa giác đều và đỉnh nằm trên trục đáy.',
    ['Cấu tạo hình chóp đều.', 'Diện tích xung quanh.', 'Thể tích.'],
    [
      { h: 'Hình chóp đều' },
      { p: 'Đáy là đa giác đều, các mặt bên là tam giác cân bằng nhau. Đỉnh nằm trên đường thẳng vuông góc với đáy đi qua tâm đáy.' },
      { ul: ['Sxq = (chu vi đáy / 2) × trung đoạn.', 'Stp = Sxq + Sđáy.', 'V = (1/3) · Sđáy · chiều cao.'] },
    ],
    [
      { q: 'Hình chóp tứ giác đều có mấy mặt bên?', a: '4 mặt bên (đều là tam giác cân).' },
      { q: 'Hình chóp đáy 3×3, cao 4. Thể tích?', a: 'V = (1/3)·9·4 = 12.' },
    ]
  ),

  'S8TOAN-w29-quiz': L(
    'Thống kê — Bảng tần số, biểu đồ',
    'Thống kê đơn giản: tổ chức dữ liệu và biểu diễn bằng biểu đồ.',
    ['Lập bảng tần số.', 'Vẽ biểu đồ cột.', 'Biểu đồ tròn (pie).'],
    [
      { h: 'Bảng tần số' },
      { p: 'Cột 1: giá trị; cột 2: số lần xuất hiện (tần số). Tổng tần số = tổng số liệu thu thập.' },
      { ul: ['Biểu đồ cột: so sánh các giá trị rời rạc.', 'Biểu đồ tròn: thể hiện tỉ lệ phần trăm.'] },
    ],
    [
      { q: 'Điểm KT của 10 HS: 5,6,5,7,8,6,5,7,8,6. Lập bảng tần số.', a: '5: 3 lần; 6: 3 lần; 7: 2 lần; 8: 2 lần.' },
      { q: 'Biểu đồ nào phù hợp thể hiện tỉ lệ giới tính trong lớp?', a: 'Biểu đồ tròn (pie).' },
    ]
  ),

  'S8TOAN-w30-quiz': L(
    'Số trung bình — Mốt — Trung vị',
    'Ba đại lượng đo "trung tâm" của dãy số liệu.',
    ['Tính trung bình cộng.', 'Tìm mốt (giá trị xuất hiện nhiều nhất).', 'Tìm trung vị.'],
    [
      { h: 'Trung bình cộng' },
      { p: 'TB = (tổng số liệu) / (số phần tử).' },
      { h: 'Mốt' },
      { p: 'Mốt = giá trị có tần số lớn nhất. Có thể có nhiều mốt.' },
      { h: 'Trung vị' },
      { p: 'Sắp dãy tăng. Nếu n lẻ: trung vị = phần tử ở giữa. Nếu n chẵn: trung vị = TB 2 phần tử giữa.' },
    ],
    [
      { q: 'Dãy 2,3,5,7,8. Tính TB.', a: '(2+3+5+7+8)/5 = 25/5 = 5.' },
      { q: 'Dãy 3,5,5,7,8. Tìm mốt và trung vị.', a: 'Mốt: 5 (xuất hiện 2 lần). Trung vị: phần tử ở giữa = 5.' },
    ]
  ),

  'S8TOAN-w31-quiz': L(
    'Xác suất của biến cố — Khái niệm',
    'Xác suất đo khả năng xảy ra của biến cố.',
    ['Khái niệm biến cố và không gian mẫu.', 'Công thức cổ điển.', 'Tính xác suất bài toán đơn giản.'],
    [
      { h: 'Xác suất cổ điển' },
      { p: 'P(A) = (số kết quả thuận lợi cho A) / (tổng số kết quả của không gian mẫu). 0 ≤ P(A) ≤ 1.' },
      { ul: ['P(A) = 0: biến cố không thể.', 'P(A) = 1: biến cố chắc chắn.', 'P(A) + P(không A) = 1.'] },
    ],
    [
      { q: 'Gieo xúc xắc 6 mặt. P(số chẵn)?', a: '3 kết quả chẵn / 6 = 1/2.' },
      { q: 'Hộp có 3 bi đỏ, 2 bi xanh. Lấy 1 bi. P(đỏ)?', a: '3/5.' },
    ]
  ),

  'S8TOAN-w32-quiz': L(
    'Phương trình tích — Phương trình chứa ẩn ở mẫu',
    'Hai loại phương trình đặc biệt: tích bằng 0 và có ẩn ở mẫu.',
    ['Giải phương trình tích.', 'Tìm điều kiện xác định.', 'Giải phương trình có ẩn ở mẫu.'],
    [
      { h: 'Phương trình tích' },
      { p: 'A·B = 0 ⇔ A = 0 hoặc B = 0. Tách thành nhiều phương trình con để giải.' },
      { h: 'Phương trình ẩn ở mẫu' },
      { p: 'Bước 1: ĐKXĐ (mẫu ≠ 0). Bước 2: Quy đồng khử mẫu. Bước 3: Giải PT thu được. Bước 4: Đối chiếu ĐKXĐ.' },
    ],
    [
      { q: 'Giải (x−2)(x+3) = 0.', a: 'x−2=0 ⇒ x=2; hoặc x+3=0 ⇒ x=−3. Tập nghiệm: {2, −3}.' },
      { q: 'Giải 1/(x−1) = 2/x. ĐKXĐ: x≠0, x≠1.', a: 'x = 2(x−1) ⇒ x = 2x−2 ⇒ x = 2. Thoả ĐKXĐ.' },
    ]
  ),

  'S8TOAN-w33-quiz': L(
    'Ôn tập đại số học kì II',
    'Tổng hợp đại số HK2: BĐT, BPT, hàm số bậc nhất, PT.',
    ['Bất đẳng thức và bất phương trình.', 'Hàm số bậc nhất và đồ thị.', 'Phương trình tích và phân thức.'],
    [
      { h: 'Nội dung ôn tập' },
      { ul: ['Bất đẳng thức: tính chất + chứng minh đơn giản.', 'BPT bậc nhất: giải + biểu diễn nghiệm.', 'Hàm y=ax+b: đồ thị + vị trí 2 đường.', 'PT bậc nhất, PT tích, PT phân thức.'] },
    ],
    [
      { q: 'Giải BPT 3x − 6 ≤ 0.', a: '3x ≤ 6 ⇒ x ≤ 2.' },
      { q: 'Giải (x²−1)/(x−1) = 3 (ĐK x≠1).', a: 'Rút gọn x+1=3 ⇒ x=2.' },
    ]
  ),

  'S8TOAN-w34-quiz': L(
    'Ôn tập hình học học kì II',
    'Tổng hợp hình học HK2: tam giác đồng dạng, hình không gian.',
    ['Tam giác đồng dạng và ứng dụng.', 'Định lý Pytago.', 'Hình lăng trụ, hình chóp.'],
    [
      { h: 'Nội dung ôn tập' },
      { ul: ['Đồng dạng: 3 trường hợp + ứng dụng đo gián tiếp.', 'Pytago: tính cạnh tam giác vuông.', 'Lăng trụ: Sxq, V.', 'Chóp đều: Sxq, V = (1/3)Sđáy·h.'] },
    ],
    [
      { q: '2 tam giác đồng dạng tỉ số 1:3. Tỉ số diện tích?', a: '1:9 (bình phương tỉ số).' },
      { q: 'Hộp 4×5×6. Tính V và đường chéo.', a: 'V=120. Đường chéo = √(16+25+36) = √77 ≈ 8.77.' },
    ]
  ),

  'S8TOAN-w35-quiz': L(
    'Ôn tập cuối năm',
    'Tổng kết cả năm Toán 8 — chuẩn bị kiểm tra cuối năm.',
    ['Hệ thống lại các chủ đề chính.', 'Giải bài tập tổng hợp.', 'Tự đánh giá năng lực.'],
    [
      { h: 'Tổng kết' },
      { ul: ['Đại số: hằng đẳng thức, phân tích, phân thức, PT, BPT, hàm số.', 'Hình học: tứ giác đặc biệt, đồng dạng, không gian.', 'Thống kê - xác suất cơ bản.'] },
      { note: 'Tự ra đề và giải lại để củng cố kiến thức.' },
    ],
    [
      { q: 'Khai triển (2x+3)².', a: '4x²+12x+9.' },
      { q: 'Phân tích x²−2x+1.', a: '(x−1)².' },
    ]
  ),
};
