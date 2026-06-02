// ============================================================
// Lớp 8 · Tin học — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Python cơ bản · Tin học văn phòng · Thuật toán · An toàn thông tin · AI.
// Key TRÙNG id quiz: "S8TIN-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8TIN_LESSONS = {
  'S8TIN-w01-quiz': L(
    'Giới thiệu ngôn ngữ lập trình Python',
    'Python là ngôn ngữ lập trình thông dụng, dễ đọc, nhiều ứng dụng từ web đến AI.',
    ['Hiểu Python là gì.', 'Biết môi trường chạy Python.', 'Viết chương trình "Hello, World!".'],
    [
      { h: 'Python là gì?' },
      { p: 'Python là ngôn ngữ lập trình bậc cao, thông dịch, cú pháp đơn giản — phù hợp người mới học.' },
      { h: 'Môi trường chạy' },
      { ul: ['IDLE (đi kèm Python).', 'VS Code, PyCharm.', 'Google Colab, replit.com (chạy trên trình duyệt).'] },
      { h: 'Chương trình đầu tiên' },
      { p: 'print("Hello, World!") — hiện chữ "Hello, World!" lên màn hình.' },
      { note: 'Python phân biệt CHỮ HOA - chữ thường. "Print" khác "print".' },
    ],
    [
      { q: 'Viết lệnh hiện "Em yêu Python".', a: 'print("Em yêu Python")' },
      { q: 'In ra 2 dòng?', a: 'print("Dòng 1"); print("Dòng 2") — hoặc dùng \\n trong cùng 1 chuỗi.' },
    ]
  ),

  'S8TIN-w02-quiz': L(
    'Biến và kiểu dữ liệu cơ bản',
    'Biến là "ngăn" lưu dữ liệu. Mỗi biến có một kiểu dữ liệu.',
    ['Hiểu biến.', 'Phân biệt int, float, str, bool.', 'Biết quy tắc đặt tên.'],
    [
      { h: 'Biến' },
      { p: 'Biến là tên đại diện cho 1 giá trị. VD: tuoi = 13.' },
      { h: 'Các kiểu dữ liệu cơ bản' },
      { ul: ['int — số nguyên (5, -3, 0).', 'float — số thực (3.14, -0.5).', 'str — chuỗi ("Hello").', 'bool — True/False.'] },
      { h: 'Quy tắc đặt tên biến' },
      { ul: ['Bắt đầu bằng chữ hoặc _.', 'Không có dấu cách, không bắt đầu bằng số.', 'Không trùng từ khoá (if, for, print...).', 'Phân biệt hoa/thường: Tuoi ≠ tuoi.'] },
    ],
    [
      { q: 'Khai báo biến lưu tên em.', a: 'ten = "Nam"' },
      { q: 'Biến hợp lệ: "2hs", "_diem", "ho ten", "diem8"?', a: '_diem và diem8 hợp lệ. "2hs" sai (bắt đầu bằng số); "ho ten" sai (có dấu cách).' },
    ]
  ),

  'S8TIN-w03-quiz': L(
    'Toán tử số học và toán tử so sánh',
    'Toán tử giúp tính toán và so sánh giá trị.',
    ['Biết toán tử số học (+ - * / // % **).', 'Biết toán tử so sánh.', 'Vận dụng tính toán.'],
    [
      { h: 'Toán tử số học' },
      { ul: ['+ cộng, - trừ, * nhân, / chia.', '// chia lấy nguyên (7//2 = 3).', '% chia lấy dư (7%2 = 1).', '** luỹ thừa (2**3 = 8).'] },
      { h: 'Toán tử so sánh' },
      { ul: ['== bằng, != khác.', '< nhỏ hơn, > lớn hơn.', '<= nhỏ-bằng, >= lớn-bằng.', 'Kết quả: True hoặc False.'] },
      { h: 'Thứ tự ưu tiên' },
      { p: '** → *, /, //, % → +, -. Dùng () để rõ ràng.' },
    ],
    [
      { q: 'Kết quả 17 // 5 và 17 % 5?', a: '17 // 5 = 3 (nguyên); 17 % 5 = 2 (dư).' },
      { q: 'Kết quả 2 ** 10?', a: '1024 (2 luỹ thừa 10).' },
    ]
  ),

  'S8TIN-w04-quiz': L(
    'Nhập dữ liệu từ bàn phím và xuất ra màn hình',
    'input() đọc dữ liệu từ người dùng; print() xuất kết quả.',
    ['Dùng input() đọc dữ liệu.', 'Ép kiểu int/float.', 'Format chuỗi với f-string.'],
    [
      { h: 'input()' },
      { p: 'a = input("Nhập số: ") — biến a sẽ là chuỗi str.' },
      { h: 'Ép kiểu' },
      { ul: ['int(input()) — đọc số nguyên.', 'float(input()) — đọc số thực.'] },
      { h: 'print() và f-string' },
      { p: 'print(f"Tuổi của {ten} là {tuoi}") — chèn biến vào chuỗi.' },
    ],
    [
      { q: 'Đọc 2 số và in tổng.', a: 'a = int(input()); b = int(input()); print(a+b)' },
      { q: 'Vì sao "5" + "3" = "53"?', a: 'input() trả str. Cộng chuỗi là ghép. Phải ép int.' },
    ]
  ),

  'S8TIN-w05-quiz': L(
    'Câu lệnh điều kiện if',
    'if cho phép chương trình "quyết định" theo điều kiện.',
    ['Cú pháp if.', 'Hiểu indentation (thụt lề).', 'Vận dụng.'],
    [
      { h: 'Cú pháp' },
      { p: 'if điều_kiện:\\n    lệnh' },
      { h: 'Indentation' },
      { p: 'Python dùng thụt lề (4 dấu cách) để gom khối lệnh. Sai thụt lề → lỗi.' },
      { h: 'Ví dụ' },
      { p: 'if diem >= 5:\\n    print("Đậu")' },
    ],
    [
      { q: 'Viết if kiểm tra số chẵn.', a: 'if n % 2 == 0: print("Chẵn")' },
      { q: 'Lỗi gì? if n>0:\\nprint(n)', a: 'Thiếu thụt lề. Phải: if n>0:\\n    print(n)' },
    ]
  ),

  'S8TIN-w06-quiz': L(
    'Cấu trúc if-else và if-elif-else',
    'else cho trường hợp ngược; elif cho nhiều nhánh.',
    ['Hiểu if-else.', 'Hiểu if-elif-else.', 'Vận dụng phân loại.'],
    [
      { h: 'if-else' },
      { p: 'if cond:\\n    A\\nelse:\\n    B' },
      { h: 'if-elif-else' },
      { p: 'Nhiều nhánh nối tiếp: if... elif... elif... else.' },
      { h: 'Khi nào dùng?' },
      { ul: ['if-else: 2 trường hợp.', 'if-elif-else: 3+ trường hợp.'] },
    ],
    [
      { q: 'Xếp loại điểm: ≥8 Giỏi, ≥6.5 Khá, ≥5 TB, <5 Yếu.', a: 'if d>=8: print("Giỏi")\\nelif d>=6.5: print("Khá")\\nelif d>=5: print("TB")\\nelse: print("Yếu")' },
      { q: 'else có cần luôn không?', a: 'Không. Nếu không có trường hợp ngược cần xử lý thì bỏ.' },
    ]
  ),

  'S8TIN-w07-quiz': L(
    'Vòng lặp for',
    'for lặp qua dãy số hoặc danh sách.',
    ['Cú pháp for + range().', 'Lặp qua list.', 'Vận dụng.'],
    [
      { h: 'range()' },
      { ul: ['range(5) → 0,1,2,3,4.', 'range(1,6) → 1,2,3,4,5.', 'range(0,10,2) → 0,2,4,6,8.'] },
      { h: 'for' },
      { p: 'for i in range(5):\\n    print(i)' },
      { h: 'Lặp qua list' },
      { p: 'for x in [1,2,3]:\\n    print(x)' },
    ],
    [
      { q: 'In tổng 1+2+...+100.', a: 's=0\\nfor i in range(1,101): s+=i\\nprint(s) # 5050' },
      { q: 'In các số chẵn từ 0-20.', a: 'for i in range(0,21,2): print(i)' },
    ]
  ),

  'S8TIN-w08-quiz': L(
    'Vòng lặp while',
    'while lặp khi điều kiện còn đúng — không biết trước số lần.',
    ['Cú pháp while.', 'Tránh lặp vô hạn.', 'Phân biệt for vs while.'],
    [
      { h: 'Cú pháp' },
      { p: 'while điều_kiện:\\n    lệnh' },
      { h: 'Lặp vô hạn' },
      { p: 'Phải có lệnh thay đổi biến điều kiện trong vòng lặp, kẻo lặp mãi.' },
      { h: 'for vs while' },
      { ul: ['for: biết số lần (qua dãy).', 'while: lặp đến khi điều kiện sai.'] },
    ],
    [
      { q: 'In từ 1 đến khi tổng vượt 50.', a: 's=0; i=1\\nwhile s<=50: s+=i; i+=1\\nprint(i-1)' },
      { q: 'Lỗi vô hạn: while i<10: print(i)', a: 'Thiếu i+=1 → lặp mãi. Phải có lệnh thay đổi i.' },
    ]
  ),

  'S8TIN-w09-quiz': L(
    'Bài tập tổng hợp: vòng lặp',
    'Vận dụng for và while giải bài toán thực tế.',
    ['Giải bài toán đếm.', 'Bài toán tổng có điều kiện.', 'Bài toán tìm.'],
    [
      { h: 'Đếm' },
      { p: 'Đếm các số chia hết cho 3 từ 1-100: dùng for + if + biến đếm.' },
      { h: 'Tổng có điều kiện' },
      { p: 'Tổng các số lẻ từ 1-50: s=0; for i in range(1,51,2): s+=i.' },
      { h: 'Tìm' },
      { p: 'Tìm UCLN: dùng while với % (thuật toán Euclid).' },
    ],
    [
      { q: 'Đếm các số chia hết cho 7 từ 1-100.', a: 'cnt=0\\nfor i in range(1,101):\\n    if i%7==0: cnt+=1\\nprint(cnt) # 14' },
      { q: 'Tìm số nhỏ nhất ≥100 chia hết cho cả 3 và 5.', a: 'i=100\\nwhile not(i%3==0 and i%5==0): i+=1\\nprint(i) # 105' },
    ]
  ),

  'S8TIN-w10-quiz': L(
    'Kiểu danh sách (list)',
    'List lưu nhiều giá trị trong 1 biến — kiểu dữ liệu mạnh mẽ.',
    ['Khai báo list.', 'Truy cập, thêm, xoá.', 'Hiểu chỉ số (index).'],
    [
      { h: 'Khai báo' },
      { p: 'a = [1, 2, 3, "Nam"] — list trộn nhiều kiểu được.' },
      { h: 'Truy cập' },
      { ul: ['a[0] — phần tử đầu.', 'a[-1] — phần tử cuối.', 'a[1:3] — slice (cắt).'] },
      { h: 'Thao tác' },
      { ul: ['a.append(x) — thêm cuối.', 'a.remove(x) — xoá theo giá trị.', 'len(a) — độ dài.'] },
    ],
    [
      { q: 'Tạo list 5 số yêu thích.', a: 'a = [3, 7, 8, 13, 21]' },
      { q: 'Lấy phần tử cuối của a.', a: 'a[-1] hoặc a[len(a)-1].' },
    ]
  ),

  'S8TIN-w11-quiz': L(
    'Thao tác trên danh sách — Duyệt, tìm, đếm',
    'Duyệt + lọc + đếm là 3 thao tác cơ bản nhất với list.',
    ['Duyệt list bằng for.', 'Tìm phần tử.', 'Đếm theo điều kiện.'],
    [
      { h: 'Duyệt' },
      { p: 'for x in a: print(x) — duyệt từng phần tử.' },
      { h: 'Tìm' },
      { p: 'if x in a: ... — kiểm tra tồn tại.\\na.index(x) — vị trí (báo lỗi nếu không có).' },
      { h: 'Đếm' },
      { p: 'a.count(x) — đếm số lần x xuất hiện.' },
    ],
    [
      { q: 'Tính trung bình điểm trong list.', a: 'sum(a)/len(a)' },
      { q: 'Đếm số chẵn trong a.', a: 'cnt = 0\\nfor x in a:\\n    if x%2==0: cnt+=1' },
    ]
  ),

  'S8TIN-w12-quiz': L(
    'Hàm trong Python',
    'Hàm giúp tái sử dụng code và chia nhỏ bài toán.',
    ['Khai báo hàm.', 'Tham số và return.', 'Vận dụng.'],
    [
      { h: 'Khai báo' },
      { p: 'def ten_ham(tham_so):\\n    # lệnh\\n    return ket_qua' },
      { h: 'Gọi hàm' },
      { p: 'kq = ten_ham(5) — truyền 5 vào, nhận kết quả.' },
      { h: 'return' },
      { p: 'Trả về giá trị. Nếu không có return → hàm trả None.' },
    ],
    [
      { q: 'Viết hàm tính giai thừa n!.', a: 'def gt(n):\\n    s=1\\n    for i in range(1,n+1): s*=i\\n    return s' },
      { q: 'Vì sao nên dùng hàm?', a: 'Tái sử dụng, dễ đọc, dễ sửa, ít lỗi.' },
    ]
  ),

  'S8TIN-w13-quiz': L(
    'Soạn thảo văn bản nâng cao — Định dạng đoạn, kiểu (styles)',
    'Styles giúp định dạng nhất quán toàn văn bản và tạo mục lục tự động.',
    ['Hiểu styles (Heading 1/2/3, Normal).', 'Áp dụng styles.', 'Tạo mục lục.'],
    [
      { h: 'Styles' },
      { p: 'Styles là tập hợp định dạng (font, cỡ, màu, lề) được đặt tên — áp dụng 1 click cho cả đoạn.' },
      { h: 'Các styles thường dùng' },
      { ul: ['Heading 1: tiêu đề chương.', 'Heading 2: tiêu đề mục.', 'Heading 3: tiêu đề nhỏ.', 'Normal: văn bản thường.'] },
      { h: 'Tạo mục lục tự động' },
      { p: 'References → Table of Contents → chọn mẫu. Word tự gom các Heading thành mục lục.' },
    ],
    [
      { q: 'Vì sao không nên định dạng tay từng đoạn?', a: 'Mất công, không nhất quán, khó tạo mục lục tự động.' },
      { q: 'Mục lục có cập nhật được không?', a: 'Có. Click chuột phải → Update Field hoặc nút Update Table.' },
    ]
  ),

  'S8TIN-w14-quiz': L(
    'Chèn bảng, biểu đồ vào văn bản',
    'Bảng và biểu đồ giúp trình bày dữ liệu trực quan.',
    ['Chèn và định dạng bảng.', 'Chèn biểu đồ.', 'Sao chép từ Excel.'],
    [
      { h: 'Chèn bảng' },
      { p: 'Insert → Table → chọn số hàng/cột. Có thể vẽ bảng phức tạp.' },
      { h: 'Định dạng bảng' },
      { ul: ['Merge Cells: gộp ô.', 'Split Cells: tách ô.', 'Table Styles: chọn mẫu nhanh.'] },
      { h: 'Chèn biểu đồ' },
      { p: 'Insert → Chart → chọn loại (cột, đường, tròn) → nhập số liệu trong Excel mini hiện ra.' },
    ],
    [
      { q: 'Biểu đồ tròn dùng khi nào?', a: 'Khi muốn so sánh phần trăm các thành phần trong tổng.' },
      { q: 'Sao chép bảng từ Excel sang Word giữ liên kết?', a: 'Paste Special → Paste Link → khi sửa Excel, Word tự cập nhật.' },
    ]
  ),

  'S8TIN-w15-quiz': L(
    'Bảng tính — Công thức và hàm cơ bản',
    'Bảng tính tự động hoá tính toán với công thức và hàm.',
    ['Viết công thức.', 'Dùng hàm SUM, AVERAGE, MAX, MIN.', 'Sao chép công thức.'],
    [
      { h: 'Công thức' },
      { p: 'Bắt đầu bằng dấu =. VD: =A1+B1.' },
      { h: 'Hàm cơ bản' },
      { ul: ['=SUM(A1:A10) — tổng.', '=AVERAGE(A1:A10) — TB.', '=MAX(A1:A10) — lớn nhất.', '=MIN(A1:A10) — nhỏ nhất.', '=COUNT(A1:A10) — đếm số.'] },
      { h: 'Sao chép công thức' },
      { p: 'Kéo góc dưới phải ô (fill handle). Tham chiếu tương đối tự điều chỉnh.' },
    ],
    [
      { q: 'Tính tổng điểm 5 môn ô A2:E2.', a: '=SUM(A2:E2)' },
      { q: 'Khác nhau A1 và $A$1?', a: 'A1: tương đối, sao chép thay đổi. $A$1: tuyệt đối, sao chép không đổi.' },
    ]
  ),

  'S8TIN-w16-quiz': L(
    'Bảng tính — Hàm logic IF',
    'IF cho phép bảng tính "quyết định" theo điều kiện.',
    ['Cú pháp IF.', 'IF lồng nhau.', 'Vận dụng xếp loại.'],
    [
      { h: 'Cú pháp' },
      { p: '=IF(điều_kiện, giá_trị_đúng, giá_trị_sai)' },
      { h: 'Ví dụ' },
      { p: '=IF(A2>=5, "Đậu", "Rớt")' },
      { h: 'IF lồng' },
      { p: '=IF(A2>=8, "Giỏi", IF(A2>=6.5, "Khá", IF(A2>=5, "TB", "Yếu")))' },
    ],
    [
      { q: 'Viết IF: nếu điểm A2 ≥ 7 ghi "Khá", ngược lại "Cần cố gắng".', a: '=IF(A2>=7, "Khá", "Cần cố gắng")' },
      { q: 'IF khác IFS thế nào?', a: 'IFS đơn giản hơn cho nhiều điều kiện. Không phải Excel nào cũng hỗ trợ IFS.' },
    ]
  ),

  'S8TIN-w17-quiz': L(
    'Biểu đồ trong bảng tính',
    'Biểu đồ biến số liệu khô khan thành hình ảnh trực quan.',
    ['Chọn loại biểu đồ phù hợp.', 'Vẽ biểu đồ.', 'Định dạng biểu đồ.'],
    [
      { h: 'Các loại biểu đồ' },
      { ul: ['Cột: so sánh giá trị.', 'Đường: xu hướng theo thời gian.', 'Tròn: phần trăm.', 'Thanh ngang: so sánh xếp hạng.'] },
      { h: 'Vẽ biểu đồ' },
      { p: 'Chọn vùng dữ liệu → Insert → Chart → chọn loại.' },
      { h: 'Định dạng' },
      { p: 'Tiêu đề (Chart Title), nhãn trục, chú thích (Legend), nhãn dữ liệu (Data Labels).' },
    ],
    [
      { q: 'So sánh điểm thi 5 môn — chọn loại nào?', a: 'Cột.' },
      { q: 'Tỷ lệ % HS yêu thích các môn — chọn loại nào?', a: 'Tròn.' },
    ]
  ),

  'S8TIN-w18-quiz': L(
    'Ôn tập học kì I',
    'Hệ thống HK1: Python cơ bản, Word, Excel.',
    ['Hệ thống Python.', 'Hệ thống Word.', 'Hệ thống Excel.'],
    [
      { h: 'Python' },
      { ul: ['Biến, kiểu dữ liệu.', 'if-elif-else.', 'for, while.', 'list, hàm.'] },
      { h: 'Word' },
      { ul: ['Styles, mục lục.', 'Bảng, biểu đồ.'] },
      { h: 'Excel' },
      { ul: ['Công thức, SUM, AVERAGE...', 'IF, IF lồng.', 'Biểu đồ.'] },
    ],
    [
      { q: 'Khác nhau between for và while?', a: 'for biết số lần; while theo điều kiện.' },
      { q: 'IF trong Excel có giống if trong Python?', a: 'Tương tự về logic, khác cú pháp: =IF(cond, A, B) vs if cond: A else: B.' },
    ]
  ),

  'S8TIN-w19-quiz': L(
    'Thuật toán sắp xếp — Khái niệm',
    'Sắp xếp là bài toán cơ bản: đưa dãy về trật tự (tăng/giảm).',
    ['Hiểu bài toán sắp xếp.', 'Biết các thuật toán phổ biến.', 'Đánh giá độ phức tạp.'],
    [
      { h: 'Bài toán' },
      { p: 'Cho dãy n số, sắp xếp tăng dần (hoặc giảm dần).' },
      { h: 'Các thuật toán' },
      { ul: ['Bubble sort — đổi chỗ liền kề.', 'Selection sort — chọn min đặt đầu.', 'Insertion sort — chèn vào vị trí đúng.', 'Quick sort, Merge sort — nâng cao, nhanh hơn.'] },
      { h: 'Độ phức tạp' },
      { p: 'Bubble/Selection/Insertion: O(n²). Quick/Merge: O(n log n).' },
    ],
    [
      { q: 'Tại sao sắp xếp quan trọng?', a: 'Tìm kiếm nhị phân cần dãy sắp xếp; hiển thị bảng xếp hạng; xử lý dữ liệu.' },
      { q: 'O(n²) nghĩa là gì?', a: 'Số phép so sánh tỉ lệ n². n=1000 thì ~1 triệu phép.' },
    ]
  ),

  'S8TIN-w20-quiz': L(
    'Thuật toán sắp xếp chọn (Selection sort)',
    'Selection sort: lần lượt tìm min và đặt vào đầu.',
    ['Hiểu ý tưởng.', 'Cài đặt Python.', 'Phân tích.'],
    [
      { h: 'Ý tưởng' },
      { ul: ['Bước i: tìm min trong a[i..n-1].', 'Đổi chỗ với a[i].', 'Tăng i, lặp đến i=n-1.'] },
      { h: 'Cài đặt' },
      { p: 'for i in range(n):\\n    m = i\\n    for j in range(i+1, n):\\n        if a[j]<a[m]: m = j\\n    a[i], a[m] = a[m], a[i]' },
    ],
    [
      { q: 'Sắp xếp [5,2,8,1,9].', a: '[1,2,5,8,9]. Lần 1 chọn 1, lần 2 chọn 2, lần 3 chọn 5...' },
      { q: 'Số lần đổi chỗ tối đa?', a: 'n-1 lần. Ít hơn Bubble sort.' },
    ]
  ),

  'S8TIN-w21-quiz': L(
    'Thuật toán sắp xếp chèn (Insertion sort)',
    'Insertion sort: chèn từng phần tử vào vị trí đúng trong phần đã sắp.',
    ['Hiểu ý tưởng.', 'Cài đặt Python.', 'So sánh với Selection sort.'],
    [
      { h: 'Ý tưởng' },
      { p: 'Như xếp bài: lấy 1 lá, chèn vào tay đã sắp đúng vị trí.' },
      { h: 'Cài đặt' },
      { p: 'for i in range(1, n):\\n    key = a[i]; j = i-1\\n    while j>=0 and a[j]>key: a[j+1]=a[j]; j-=1\\n    a[j+1] = key' },
      { h: 'Ưu điểm' },
      { p: 'Hiệu quả với dãy gần sắp xếp; O(n) trường hợp tốt nhất.' },
    ],
    [
      { q: 'Insertion sort với [3,1,4,1,5,9,2,6]?', a: 'Kết quả: [1,1,2,3,4,5,6,9].' },
      { q: 'Khi nào Insertion sort tốt nhất?', a: 'Dãy gần sắp xếp — chỉ O(n).' },
    ]
  ),

  'S8TIN-w22-quiz': L(
    'Thực hành sắp xếp với Python',
    'Python có hàm sort() và sorted() — tiện lợi cho thực tế.',
    ['Dùng a.sort().', 'Dùng sorted().', 'Sắp xếp ngược, theo key.'],
    [
      { h: 'sort() và sorted()' },
      { ul: ['a.sort() — sắp xếp tại chỗ (thay đổi a).', 'sorted(a) — trả về list mới, a không đổi.'] },
      { h: 'Sắp xếp ngược' },
      { p: 'a.sort(reverse=True) — giảm dần.' },
      { h: 'Theo key' },
      { p: 'sorted(students, key=lambda x: x["diem"]) — theo điểm.' },
    ],
    [
      { q: 'Sắp xếp tên theo độ dài.', a: 'sorted(names, key=len)' },
      { q: 'Khác sort() vs sorted()?', a: 'sort() đổi list gốc, không trả về. sorted() không đổi gốc, trả về list mới.' },
    ]
  ),

  'S8TIN-w23-quiz': L(
    'Tìm kiếm tuyến tính (Linear search)',
    'Tìm kiếm tuyến tính: duyệt từng phần tử đến khi tìm thấy.',
    ['Hiểu ý tưởng.', 'Cài đặt.', 'Đánh giá.'],
    [
      { h: 'Ý tưởng' },
      { p: 'Duyệt từ đầu đến cuối, so sánh với khoá. Trả vị trí khi tìm thấy, hoặc -1.' },
      { h: 'Cài đặt' },
      { p: 'def find(a, x):\\n    for i in range(len(a)):\\n        if a[i]==x: return i\\n    return -1' },
      { h: 'Đánh giá' },
      { p: 'O(n). Đơn giản, áp dụng cho mọi dãy (không cần sắp xếp).' },
    ],
    [
      { q: 'Tìm 8 trong [3,1,8,4]?', a: 'Trả 2 (vị trí của 8).' },
      { q: 'Số phép so sánh tối đa?', a: 'n (khi không tìm thấy).' },
    ]
  ),

  'S8TIN-w24-quiz': L(
    'Tìm kiếm nhị phân (Binary search)',
    'Binary search: nhanh hơn nhiều nhưng cần dãy đã sắp xếp.',
    ['Hiểu ý tưởng "chia đôi".', 'Cài đặt.', 'So sánh tuyến tính.'],
    [
      { h: 'Ý tưởng' },
      { ul: ['So sánh với phần tử giữa.', 'Nếu bằng → tìm thấy.', 'Nếu nhỏ hơn → tìm bên trái.', 'Nếu lớn hơn → tìm bên phải.', 'Lặp lại.'] },
      { h: 'Cài đặt' },
      { p: 'l, r = 0, len(a)-1\\nwhile l<=r:\\n    m = (l+r)//2\\n    if a[m]==x: return m\\n    elif a[m]<x: l=m+1\\n    else: r=m-1' },
      { h: 'Đánh giá' },
      { p: 'O(log n). n=1 triệu chỉ cần ~20 phép so sánh!' },
    ],
    [
      { q: 'Yêu cầu của binary search?', a: 'Dãy phải đã sắp xếp tăng dần (hoặc giảm).' },
      { q: 'Tìm trong 1024 phần tử mất tối đa bao nhiêu bước?', a: '~10 bước (log₂ 1024 = 10).' },
    ]
  ),

  'S8TIN-w25-quiz': L(
    'Kiểu dữ liệu xâu (string) trong Python',
    'String là dãy ký tự — kiểu dữ liệu cực kỳ phổ biến.',
    ['Tạo string.', 'Truy cập, cắt (slice).', 'Các phương thức cơ bản.'],
    [
      { h: 'Tạo' },
      { p: 's = "Hello" hoặc \'Hello\'. Dùng """...""" cho nhiều dòng.' },
      { h: 'Truy cập và slice' },
      { ul: ['s[0] — ký tự đầu.', 's[-1] — ký tự cuối.', 's[1:4] — slice.', 'len(s) — độ dài.'] },
      { h: 'Phương thức' },
      { ul: ['s.upper() — IN HOA.', 's.lower() — chữ thường.', 's.strip() — bỏ khoảng trắng đầu/cuối.', 's.replace("a","b") — thay thế.'] },
    ],
    [
      { q: '"Hello"[1:4] = ?', a: '"ell".' },
      { q: 'Đếm số ký tự "a" trong s?', a: 's.count("a")' },
    ]
  ),

  'S8TIN-w26-quiz': L(
    'Xử lý xâu — Tách, ghép, tìm',
    'split, join, find — 3 thao tác chuỗi quan trọng.',
    ['split() tách chuỗi.', 'join() ghép chuỗi.', 'find()/in tìm chuỗi con.'],
    [
      { h: 'split()' },
      { p: '"a,b,c".split(",") → ["a","b","c"]. Mặc định tách theo khoảng trắng.' },
      { h: 'join()' },
      { p: '"-".join(["a","b","c"]) → "a-b-c"' },
      { h: 'find() và in' },
      { ul: ['"hello".find("ll") → 2 (vị trí). -1 nếu không có.', '"ll" in "hello" → True.'] },
    ],
    [
      { q: 'Đảo ngược câu "Toi yeu Python"?', a: '" ".join(reversed("Toi yeu Python".split()))' },
      { q: 'Đếm số từ trong s?', a: 'len(s.split())' },
    ]
  ),

  'S8TIN-w27-quiz': L(
    'Kiểu từ điển (dictionary)',
    'Dict lưu cặp key-value — như từ điển thật.',
    ['Tạo dict.', 'Truy cập, thêm, xoá.', 'Duyệt dict.'],
    [
      { h: 'Tạo' },
      { p: 'd = {"ten": "Nam", "tuoi": 13}' },
      { h: 'Truy cập' },
      { ul: ['d["ten"] → "Nam".', 'd.get("a", 0) → 0 nếu không có key "a".', 'd["mon"] = "Toán" — thêm/sửa.'] },
      { h: 'Duyệt' },
      { p: 'for k, v in d.items(): print(k, v)' },
    ],
    [
      { q: 'Đếm số lần xuất hiện ký tự trong chuỗi.', a: 'd = {}\\nfor c in s: d[c] = d.get(c,0) + 1' },
      { q: 'Khác list ở chỗ?', a: 'List: dùng chỉ số 0,1,2... Dict: dùng key (bất kỳ).' },
    ]
  ),

  'S8TIN-w28-quiz': L(
    'An toàn thông tin — Mật khẩu mạnh và xác thực 2 yếu tố',
    'Mật khẩu mạnh + 2FA = lá chắn quan trọng nhất bảo vệ tài khoản.',
    ['Hiểu thế nào là mật khẩu mạnh.', 'Hiểu 2FA.', 'Vận dụng.'],
    [
      { h: 'Mật khẩu mạnh' },
      { ul: ['Tối thiểu 12 ký tự.', 'Có chữ HOA + thường + số + ký tự đặc biệt.', 'Không dùng ngày sinh, tên, password123...', 'Mỗi tài khoản 1 mật khẩu riêng.'] },
      { h: 'Quản lý mật khẩu' },
      { p: 'Dùng password manager (Bitwarden, 1Password) thay vì nhớ tất.' },
      { h: '2FA (Two-Factor Authentication)' },
      { ul: ['Lớp bảo vệ thứ 2: mật khẩu + mã OTP từ điện thoại.', 'Bật cho Gmail, Facebook, ngân hàng.', 'Dù lộ mật khẩu, hacker vẫn không vào được.'] },
    ],
    [
      { q: 'Mật khẩu nào tốt: "20100515" hay "Toi$YeuPython#2024"?', a: '"Toi$YeuPython#2024" — dài, đủ loại ký tự, không phải ngày sinh.' },
      { q: '2FA có mấy lớp?', a: '2 lớp: "biết" (mật khẩu) + "có" (điện thoại nhận OTP).' },
    ]
  ),

  'S8TIN-w29-quiz': L(
    'An toàn thông tin — Lừa đảo trực tuyến (phishing)',
    'Phishing là lừa đảo qua email/web giả mạo. Rất phổ biến ở VN.',
    ['Nhận biết phishing.', 'Phòng tránh.', 'Phản ứng khi bị.'],
    [
      { h: 'Phishing là gì?' },
      { p: 'Kẻ xấu giả mạo ngân hàng/tổ chức uy tín gửi email/SMS/web giả để cướp mật khẩu, tiền.' },
      { h: 'Dấu hiệu' },
      { ul: ['URL sai chính tả (vietcombak.com).', 'Email báo "tài khoản bị khoá", "thắng giải".', 'Yêu cầu nhập mật khẩu/OTP gấp.', 'Link rút gọn (bit.ly...) lạ.'] },
      { h: 'Phòng tránh' },
      { ul: ['Không click link lạ.', 'Vào trực tiếp web ngân hàng, không qua link email.', 'Không gửi OTP cho ai.', 'Báo ngân hàng nếu nghi ngờ.'] },
    ],
    [
      { q: 'Email "Tài khoản Facebook của bạn sẽ bị khoá. Click để xác minh" — em làm gì?', a: 'Bỏ qua, không click. Vào trực tiếp facebook.com kiểm tra.' },
      { q: 'Ai nên gửi OTP?', a: 'KHÔNG AI. Cán bộ ngân hàng không bao giờ hỏi OTP. Ai hỏi đều là lừa đảo.' },
    ]
  ),

  'S8TIN-w30-quiz': L(
    'Phần mềm độc hại (malware) và phòng tránh',
    'Malware là phần mềm độc hại — gồm virus, trojan, ransomware...',
    ['Hiểu các loại malware.', 'Cách lây nhiễm.', 'Phòng tránh.'],
    [
      { h: 'Các loại malware' },
      { ul: ['Virus: lây qua file thực thi.', 'Trojan: ẩn trong phần mềm "hợp pháp".', 'Worm: tự lây qua mạng.', 'Ransomware: mã hoá dữ liệu, đòi tiền chuộc.', 'Spyware: theo dõi người dùng.'] },
      { h: 'Đường lây' },
      { ul: ['Tải phần mềm crack/bẻ khoá.', 'Click link/attach lạ trong email.', 'Cắm USB lạ.', 'Truy cập web đen.'] },
      { h: 'Phòng tránh' },
      { ul: ['Cài antivirus (Windows Defender đủ tốt).', 'Cập nhật hệ điều hành.', 'Không tải crack.', 'Backup dữ liệu thường xuyên.'] },
    ],
    [
      { q: 'Tại sao crack phần mềm nguy hiểm?', a: 'Crack thường kèm malware ẩn. Có thể mất tài khoản, dữ liệu.' },
      { q: 'Ransomware mã hoá toàn ổ — phải làm gì?', a: 'KHÔNG trả tiền. Báo công an. Khôi phục từ backup.' },
    ]
  ),

  'S8TIN-w31-quiz': L(
    'Đạo đức số — Quyền tác giả trong môi trường số',
    'Sản phẩm số (ảnh, nhạc, phần mềm) đều có chủ — cần tôn trọng.',
    ['Hiểu quyền tác giả.', 'Biết Creative Commons.', 'Trích dẫn đúng.'],
    [
      { h: 'Quyền tác giả' },
      { p: 'Là quyền của người sáng tác (sách, ảnh, nhạc, phần mềm...) được bảo vệ bởi pháp luật — tự động phát sinh khi tác phẩm ra đời.' },
      { h: 'Vi phạm thường gặp' },
      { ul: ['Copy bài người khác làm bài tập.', 'Tải phim/nhạc lậu.', 'Dùng ảnh trên mạng không xin phép.', 'Sao chép code không ghi nguồn.'] },
      { h: 'Creative Commons (CC)' },
      { p: 'Giấy phép cho phép tái sử dụng (có thể kèm điều kiện: ghi nguồn, không thương mại, không sửa).' },
      { h: 'Trích dẫn đúng' },
      { p: 'Khi dùng tác phẩm người khác: ghi rõ tác giả, nguồn, năm. Ví dụ: Theo Nguyễn Văn A (2024), ...' },
    ],
    [
      { q: 'Tải ảnh Google bỏ vào bài thuyết trình — đúng?', a: 'Có thể vi phạm. Nên tìm ảnh CC trên Unsplash, Pexels hoặc ghi rõ nguồn.' },
      { q: 'Copy đoạn văn của bạn nộp bài — đúng?', a: 'Sai. Đó là đạo văn — vi phạm đạo đức và quyền tác giả.' },
    ]
  ),

  'S8TIN-w32-quiz': L(
    'Đạo đức số — Ứng xử trên mạng xã hội',
    'Mạng xã hội phóng đại mọi hành vi — tốt và xấu. Cần ứng xử có trách nhiệm.',
    ['Nguyên tắc ứng xử.', 'Phòng chống cyberbullying.', 'Bảo vệ thông tin cá nhân.'],
    [
      { h: 'Nguyên tắc ứng xử' },
      { ul: ['Tử tế trên mạng như ngoài đời.', 'Suy nghĩ trước khi đăng/chia sẻ.', 'Không lan tin chưa kiểm chứng.', 'Tôn trọng ý kiến khác biệt.'] },
      { h: 'Cyberbullying — bắt nạt mạng' },
      { p: 'Là hành vi đe doạ, lăng mạ, bôi nhọ người khác qua mạng. Hậu quả tinh thần lớn, có thể dẫn đến trầm cảm, tự tử.' },
      { h: 'Bảo vệ thông tin' },
      { ul: ['Không chia sẻ địa chỉ nhà, số điện thoại công khai.', 'Cẩn thận check-in vị trí thật.', 'Cài đặt quyền riêng tư cho profile.', 'Không nhận lời mời người lạ.'] },
    ],
    [
      { q: 'Bạn bị chế giễu trong nhóm chat — em làm gì?', a: 'Đứng về phía bạn, báo thầy cô. Không cười theo. Lưu screenshot làm bằng chứng.' },
      { q: 'Đăng ảnh kỳ nghỉ kèm địa chỉ khách sạn — có nên?', a: 'Không. Kẻ xấu có thể biết em không có nhà → trộm.' },
    ]
  ),

  'S8TIN-w33-quiz': L(
    'Trí tuệ nhân tạo (AI) trong đời sống',
    'AI đang thay đổi mọi mặt cuộc sống. Hiểu AI để dùng đúng và thông minh.',
    ['Hiểu AI là gì.', 'Ứng dụng AI quanh ta.', 'Cơ hội và nguy cơ.'],
    [
      { h: 'AI là gì?' },
      { p: 'Trí tuệ nhân tạo (Artificial Intelligence) — máy tính học, suy luận, ra quyết định như con người. Ngày nay đa số là Machine Learning.' },
      { h: 'Ứng dụng quanh ta' },
      { ul: ['Trợ lý ảo: Siri, Google Assistant.', 'Gợi ý: YouTube, TikTok.', 'Dịch máy: Google Translate.', 'Tạo ảnh, văn bản: ChatGPT, Midjourney.', 'Xe tự lái: Tesla.', 'Y tế: chẩn đoán bệnh từ ảnh.'] },
      { h: 'Cơ hội' },
      { p: 'Hỗ trợ học tập, tăng năng suất, giải quyết vấn đề lớn (biến đổi khí hậu, y tế).' },
      { h: 'Nguy cơ' },
      { ul: ['Mất việc một số ngành.', 'Tin giả deepfake.', 'Phụ thuộc quá mức, mất khả năng tự suy nghĩ.', 'Vấn đề đạo đức: AI ra quyết định thay người.'] },
    ],
    [
      { q: 'ChatGPT giúp gì cho HS?', a: 'Giải thích bài, gợi ý ý tưởng, tóm tắt. Nhưng phải kiểm tra, không sao chép.' },
      { q: 'Tại sao không thể tin AI 100%?', a: 'AI có thể sai (hallucination), thiên kiến, tin sai. Cần kiểm tra nguồn.' },
    ]
  ),

  'S8TIN-w34-quiz': L(
    'Dự án — Lập trình giải bài toán nhỏ',
    'Tổng hợp kiến thức Python để giải bài toán thực tế.',
    ['Phân tích yêu cầu.', 'Thiết kế thuật toán.', 'Cài đặt và kiểm thử.'],
    [
      { h: 'Quy trình' },
      { ul: ['Bước 1: Hiểu rõ bài toán (input/output).', 'Bước 2: Phác thuật toán bằng pseudo-code.', 'Bước 3: Cài Python.', 'Bước 4: Kiểm thử bằng nhiều bộ dữ liệu.'] },
      { h: 'Ví dụ dự án' },
      { ul: ['Quản lý điểm HS: nhập, lưu, tìm, sắp xếp.', 'Trò chơi đoán số.', 'Tính tiền hoá đơn cửa hàng.', 'Chuyển đổi đơn vị (km↔m, °C↔°F).'] },
      { h: 'Mẹo debug' },
      { p: 'Dùng print() để theo dõi giá trị biến. Đọc kỹ thông báo lỗi.' },
    ],
    [
      { q: 'Bài toán đoán số 1-100, gợi ý "lớn quá"/"nhỏ quá". Thuật toán?', a: 'Người chơi: dùng binary search (đoán 50, theo gợi ý). Máy biết: dùng while + so sánh.' },
      { q: 'Lỗi "IndentationError"?', a: 'Sai thụt lề — dùng nhất quán 4 dấu cách.' },
    ]
  ),

  'S8TIN-w35-quiz': L(
    'Ôn tập cuối năm',
    'Hệ thống toàn bộ Tin học 8: Python, văn phòng, thuật toán, an toàn, AI.',
    ['Tổng hợp kiến thức.', 'Vận dụng tổng hợp.', 'Định hướng Tin học 9.'],
    [
      { h: 'Python' },
      { ul: ['Cấu trúc cơ bản: biến, if, for, while, list, dict, hàm.', 'Xử lý chuỗi.', 'Thuật toán: sắp xếp, tìm kiếm.'] },
      { h: 'Tin học văn phòng' },
      { ul: ['Word: styles, bảng, biểu đồ.', 'Excel: công thức, IF, biểu đồ.'] },
      { h: 'An toàn và đạo đức' },
      { ul: ['Mật khẩu mạnh, 2FA, phishing, malware.', 'Quyền tác giả, ứng xử mạng, AI.'] },
      { note: 'Tin học là công cụ — học cách dùng đúng và thông minh quan trọng hơn nhớ cú pháp.' },
    ],
    [
      { q: '3 thói quen an toàn em sẽ giữ?', a: 'Mật khẩu mạnh, không click link lạ, backup dữ liệu thường xuyên.' },
      { q: 'AI có thay thầy cô không?', a: 'Hỗ trợ nhiều nhưng không thay thế. Thầy cô có cảm xúc, sự thấu hiểu — AI thì không.' },
    ]
  ),
};
