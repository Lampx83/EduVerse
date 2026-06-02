// ============================================================
// Lớp 8 · TIN HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Lập trình Python, thuật toán cơ bản, đạo đức số theo CTGD 2018.
// ID prefix: "S8TIN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8TIN', 'tin-hoc', n, title, qs, opts);

export const S8TIN_WEEKS = [
  // ──────────────── HK1: NHẬP MÔN PYTHON + VĂN BẢN/BẢNG TÍNH ────────────────
  M(1, 'Giới thiệu ngôn ngữ lập trình Python', [
    Q('Python là ngôn ngữ?', ['Bậc cao, thông dịch, dễ học, đa năng', 'Bậc thấp', 'Chỉ chạy trên Windows', 'Đã lỗi thời'], 0, 'Python là ngôn ngữ bậc cao, thông dịch, đa nền tảng, cú pháp đơn giản, rất phổ biến.'),
    Q('Phần mở rộng file Python?', ['.py', '.python', '.pyt', '.exe'], 0, 'File Python có đuôi .py (ví dụ hello.py).'),
    Q('Python được tạo bởi?', ['Guido van Rossum', 'Bill Gates', 'Steve Jobs', 'Linus Torvalds'], 0, 'Python do Guido van Rossum tạo ra năm 1991.'),
    Q('Lệnh in chuỗi ra màn hình?', ['print("Xin chao")', 'echo "Xin chao"', 'cout << "Xin chao"', 'write("Xin chao")'], 0, 'Hàm print() in văn bản ra màn hình.'),
    Q('Python phân biệt chữ hoa-thường?', ['Có', 'Không', 'Tuỳ ngữ cảnh', 'Chỉ khi gọi hàm'], 0, 'Python case-sensitive: name và Name là 2 biến khác nhau.'),
  ]),

  M(2, 'Biến và kiểu dữ liệu cơ bản', [
    Q('Cách gán giá trị 5 cho biến x?', ['x = 5', 'x := 5', 'int x = 5', 'var x = 5'], 0, 'Python dùng dấu = để gán: x = 5.'),
    Q('Kiểu dữ liệu của 3.14?', ['float', 'int', 'str', 'bool'], 0, '3.14 có phần thập phân → float (số thực).'),
    Q('Kiểu dữ liệu của "Hello"?', ['str', 'int', 'float', 'bool'], 0, '"Hello" trong dấu nháy là chuỗi (str).'),
    Q('Hàm kiểm tra kiểu của biến?', ['type(x)', 'kind(x)', 'typeof(x)', 'class(x)'], 0, 'type(x) trả về kiểu dữ liệu của x.'),
    Q('Kết quả type(True) ?', ["<class 'bool'>", "<class 'int'>", "<class 'str'>", 'error'], 0, 'True/False là kiểu bool.'),
  ]),

  M(3, 'Toán tử số học và toán tử so sánh', [
    Q('Toán tử chia lấy nguyên trong Python?', ['//', '/', '%', '**'], 0, '// chia lấy nguyên: 7//2 = 3.'),
    Q('Toán tử chia lấy dư?', ['%', '/', '//', '**'], 0, '% lấy dư: 7%2 = 1.'),
    Q('Toán tử luỹ thừa?', ['**', '^', 'pow', '%%'], 0, '** là luỹ thừa: 2**3 = 8.'),
    Q('Kết quả 10 / 3 trong Python 3?', ['3.3333...', '3', '3.0', '4'], 0, '/ luôn cho float trong Python 3: 10/3 ≈ 3.333.'),
    Q('Toán tử so sánh "khác nhau"?', ['!=', '<>', '~=', 'not='], 0, '!= nghĩa là khác. == là bằng.'),
  ]),

  M(4, 'Nhập dữ liệu từ bàn phím và xuất ra màn hình', [
    Q('Hàm nhập dữ liệu từ bàn phím?', ['input()', 'read()', 'scan()', 'get()'], 0, 'input() đọc 1 dòng từ bàn phím, trả về chuỗi.'),
    Q('input() trả về kiểu?', ['str (chuỗi)', 'int', 'float', 'tuỳ giá trị nhập'], 0, 'input() LUÔN trả về chuỗi, cần ép kiểu nếu muốn số.'),
    Q('Để nhập 1 số nguyên?', ['n = int(input())', 'n = input()', 'n = float(input())', 'n = number(input())'], 0, 'int(input()) đọc chuỗi rồi đổi sang số nguyên.'),
    Q('print có thể in nhiều giá trị?', ['Có, cách nhau bởi dấu phẩy', 'Không', 'Chỉ 1 giá trị', 'Phải dùng nhiều lần print'], 0, 'print(a, b, c) — các giá trị cách nhau bằng dấu cách.'),
    Q('print("a", end=" ") khác print("a") ở?', ['Không xuống dòng sau khi in, kết thúc bằng dấu cách', 'Không khác', 'In hoa', 'In đậm'], 0, 'end=" " thay newline bằng dấu cách.'),
  ]),

  M(5, 'Câu lệnh điều kiện if', [
    Q('Cú pháp if đúng?', ['if x > 0:\\n    print("duong")', 'if (x > 0) { print("duong") }', 'if x > 0 then print("duong")', 'if x > 0: print("duong");'], 0, 'Python: if điều_kiện: rồi xuống dòng + thụt lề.'),
    Q('Python phân biệt khối lệnh bằng?', ['Thụt lề (indentation)', 'Dấu {}', 'Dấu ()', 'Dấu ;'], 0, 'Python dùng thụt lề (thường 4 dấu cách) để phân biệt khối.'),
    Q('Kết quả: if 5 > 3: print("Y") ?', ['Y', 'N', 'Lỗi', 'Không in gì'], 0, '5>3 là True nên in Y.'),
    Q('Toán tử logic "và"?', ['and', '&&', '&', 'AND'], 0, 'Python dùng từ khoá and (chữ thường).'),
    Q('Toán tử logic "hoặc"?', ['or', '||', '|', 'OR'], 0, 'Python dùng or.'),
  ]),

  M(6, 'Cấu trúc if-else và if-elif-else', [
    Q('Cú pháp if-else?', ['if đk:\\n  …\\nelse:\\n  …', 'if đk { … } else { … }', 'if đk then … else …', 'if-else không tồn tại'], 0, 'Python: if điều_kiện: … else: ….'),
    Q('Khi kiểm tra nhiều điều kiện liên tiếp dùng?', ['elif', 'else if', 'elseif', 'or if'], 0, 'Python dùng từ khoá elif (viết liền) cho điều kiện tiếp theo.'),
    Q('Chương trình: if x>0: print("D") elif x<0: print("A") else: print("0"). x=−5 in?', ['A', 'D', '0', 'Lỗi'], 0, 'x<0 → in A (âm).'),
    Q('Có thể lồng if trong if?', ['Có', 'Không', 'Chỉ 1 mức', 'Chỉ với else'], 0, 'Có thể lồng if-else nhiều mức (chú ý thụt lề).'),
    Q('Bài toán: in "Pass" nếu điểm ≥5, "Fail" nếu <5. Cấu trúc?', ['if-else 1 cấp', 'if-elif 5 cấp', 'Chỉ if', 'Không cần điều kiện'], 0, '2 trường hợp → if-else đủ.'),
  ]),

  M(7, 'Vòng lặp for', [
    Q('Cú pháp for cơ bản?', ['for i in range(n):', 'for (i=0;i<n;i++)', 'for i = 1 to n', 'foreach i in n'], 0, 'Python: for i in range(n): — i nhận giá trị 0..n-1.'),
    Q('range(5) sinh ra?', ['0,1,2,3,4', '1,2,3,4,5', '0,1,2,3,4,5', '5,4,3,2,1'], 0, 'range(n) sinh dãy 0..n-1.'),
    Q('range(2, 6) sinh ra?', ['2,3,4,5', '2,3,4,5,6', '1,2,3,4,5', '2,4,6'], 0, 'range(start, stop) sinh start..stop-1.'),
    Q('range(0, 10, 2) sinh ra?', ['0,2,4,6,8', '0,2,4,6,8,10', '0,5', '2,4,6,8,10'], 0, 'range(start, stop, step) — bước nhảy 2.'),
    Q('Tính tổng 1+2+…+10. Lệnh for?', ['for i in range(1,11): s += i', 'for i in range(10): s += i', 'for i in range(1,10): s += i', 'for i in 10: s += i'], 0, 'range(1,11) sinh 1..10.'),
  ]),

  M(8, 'Vòng lặp while', [
    Q('Cú pháp while?', ['while điều_kiện:', 'do { … } while (đk)', 'while (đk) do', 'while đk then'], 0, 'Python: while điều_kiện: rồi khối thụt lề.'),
    Q('Vòng while chạy khi?', ['Điều kiện True', 'Điều kiện False', 'Luôn chạy', 'Không bao giờ'], 0, 'Vòng while lặp tiếp khi điều kiện còn True.'),
    Q('Lệnh thoát vòng lặp?', ['break', 'exit', 'stop', 'return'], 0, 'break thoát khỏi vòng lặp ngay lập tức.'),
    Q('Lệnh bỏ qua phần còn lại 1 lần lặp, tiếp tục lần sau?', ['continue', 'pass', 'skip', 'next'], 0, 'continue bỏ qua phần còn lại của lần hiện tại, tiếp tục lần lặp tiếp theo.'),
    Q('Vòng lặp vô hạn?', ['while True:', 'while:', 'for(;;)', 'loop'], 0, 'while True: tạo vòng vô hạn, cần break để thoát.'),
  ]),

  M(9, 'Bài tập tổng hợp: vòng lặp', [
    Q('Đếm số lần lặp 1 vòng for i in range(3,8)?', ['5 lần', '8 lần', '3 lần', '4 lần'], 0, '8-3 = 5 giá trị: 3,4,5,6,7.'),
    Q('In bảng cửu chương 5, dùng?', ['for i in range(1,11): print(5,"x",i,"=",5*i)', 'while', '1 lệnh print', 'không cần vòng lặp'], 0, 'Vòng for chạy 10 lần, in dòng 5×i.'),
    Q('Tìm GTLN trong danh sách bằng?', ['Khởi tạo max=phần_tử_đầu, duyệt cập nhật', 'max() có sẵn (cũng được)', 'Cả A và B', 'Không làm được'], 2, 'Cả 2 cách đều đúng: tự duyệt hoặc dùng hàm max().'),
    Q('Đếm số chẵn trong 1..100?', ['for i in range(2,101,2): count+=1', 'for i in range(1,101): if i%2==0: count+=1', 'Cả A và B', 'Không có cách'], 2, 'Cả 2 cách đều ra 50.'),
    Q('In 5 dòng "Hello"?', ['for i in range(5): print("Hello")', 'print("Hello"*5)', 'Cả A và B (B in liền 1 dòng)', 'Chỉ 1 lệnh print'], 0, 'for là cách chuẩn; print("Hello"*5) in liên tiếp HelloHello… 1 dòng.'),
  ]),

  M(10, 'Kiểu danh sách (list)', [
    Q('Tạo list rỗng?', ['a = []', 'a = ()', 'a = {}', 'a = ""'], 0, 'a = [] tạo list rỗng. () là tuple, {} là dict/set.'),
    Q('Truy cập phần tử đầu của list a?', ['a[0]', 'a[1]', 'a.first', 'a(0)'], 0, 'Python đánh chỉ số từ 0, phần tử đầu là a[0].'),
    Q('Thêm phần tử x vào cuối list a?', ['a.append(x)', 'a.add(x)', 'a.insert(x)', 'a + x'], 0, 'append(x) thêm x vào cuối list.'),
    Q('Độ dài list a?', ['len(a)', 'a.length', 'a.size()', 'count(a)'], 0, 'len(a) trả về số phần tử.'),
    Q('Xoá phần tử ở vị trí i?', ['del a[i] hoặc a.pop(i)', 'a.remove(i)', 'a[i] = null', 'không xoá được'], 0, 'del a[i] hoặc a.pop(i) xoá theo chỉ số; remove(x) xoá theo GIÁ TRỊ x.'),
  ]),

  M(11, 'Thao tác trên danh sách — Duyệt, tìm, đếm', [
    Q('Duyệt mọi phần tử trong list a?', ['for x in a: print(x)', 'for x = 1 to len(a)', 'for(i;i<len;i++)', 'while a'], 0, 'for x in a: là cách duyệt Pythonic nhất.'),
    Q('Kiểm tra 5 có trong list a?', ['5 in a', 'a.find(5)', 'a.contains(5)', 'has(a, 5)'], 0, 'Toán tử in: 5 in a → True/False.'),
    Q('Đếm số lần 3 xuất hiện?', ['a.count(3)', 'count(a, 3)', 'len(a, 3)', 'a.find(3)'], 0, 'method count(x) đếm số lần x xuất hiện.'),
    Q('Tìm tổng các phần tử trong list số?', ['sum(a)', 'total(a)', 'a.sum()', 'len(a)'], 0, 'Hàm sum() có sẵn.'),
    Q('Sắp xếp list tăng dần?', ['a.sort() hoặc sorted(a)', 'a.order()', 'sort(a)', 'arrange(a)'], 0, 'a.sort() sửa list gốc; sorted(a) trả list mới.'),
  ]),

  M(12, 'Hàm trong Python', [
    Q('Khai báo hàm bằng từ khoá?', ['def', 'function', 'fun', 'sub'], 0, 'def tên_hàm(tham_số): bắt đầu khai báo hàm.'),
    Q('Hàm trả về giá trị dùng?', ['return', 'output', 'print', 'yield (đặc biệt)'], 0, 'return trả giá trị về nơi gọi hàm.'),
    Q('Hàm không return trả về?', ['None', '0', '""', 'Error'], 0, 'Hàm không return tự trả về None.'),
    Q('Tham số có giá trị mặc định?', ['def f(x=5):', 'def f(x:5):', 'def f(x default 5):', 'def f(x[5]):'], 0, 'def f(x=5): — khi gọi f() thì x = 5.'),
    Q('Phạm vi (scope) biến trong hàm?', ['Cục bộ — chỉ truy cập trong hàm', 'Toàn cục', 'Tuỳ', 'Không có scope'], 0, 'Biến tạo trong hàm là local, chỉ tồn tại trong hàm đó.'),
  ]),

  M(13, 'Soạn thảo văn bản nâng cao — Định dạng đoạn, kiểu (styles)', [
    Q('Style (kiểu) trong Word giúp?', ['Áp dụng định dạng đồng nhất cho nhiều đoạn nhanh chóng', 'Trang trí', 'Chỉ in đậm', 'Không có công dụng'], 0, 'Styles cho phép thay đổi 1 lần — toàn bộ đoạn cùng style tự cập nhật.'),
    Q('Heading 1, Heading 2 dùng để?', ['Tạo cấu trúc tiêu đề có thứ bậc, hỗ trợ mục lục tự động', 'Chỉ in đậm', 'Trang trí', 'Không có ý nghĩa'], 0, 'Heading có thứ bậc, là cơ sở tạo mục lục (Table of Contents) tự động.'),
    Q('Mục lục tự động trong Word từ?', ['Các Heading đã đặt', 'Đoạn văn thường', 'Hình ảnh', 'Bảng biểu'], 0, 'Word quét tất cả Heading 1, 2, 3… để sinh mục lục.'),
    Q('Khoảng cách trước/sau đoạn cài ở?', ['Paragraph → Spacing → Before/After', 'Font', 'Page', 'View'], 0, 'Paragraph dialog có Before/After spacing để chỉnh khoảng cách giữa các đoạn.'),
    Q('Để chia 2 cột báo dùng?', ['Layout → Columns', 'Insert → Table', 'View', 'File'], 0, 'Layout (Page Layout) → Columns chia trang thành nhiều cột.'),
  ]),

  M(14, 'Chèn bảng, biểu đồ vào văn bản', [
    Q('Chèn bảng trong Word qua?', ['Insert → Table', 'File → Table', 'View → Table', 'Home → Table'], 0, 'Insert → Table cho chọn số dòng, cột.'),
    Q('Gộp ô trong bảng (merge cells)?', ['Chọn các ô → Layout → Merge Cells', 'Không thể', 'Phải vẽ lại', 'Insert'], 0, 'Chọn các ô liền nhau → Layout (Table Tools) → Merge Cells.'),
    Q('Tô đậm đường viền bảng?', ['Design → Borders', 'Insert', 'File', 'View'], 0, 'Design (Table Tools) → Borders để chọn kiểu, độ đậm đường viền.'),
    Q('Chèn biểu đồ từ?', ['Insert → Chart', 'Insert → Picture', 'Insert → Table', 'Format'], 0, 'Insert → Chart, chọn loại biểu đồ và nhập dữ liệu.'),
    Q('Để bảng/biểu đồ căn giữa trang?', ['Center alignment', 'Justify', 'Left', 'Không căn được'], 0, 'Căn giữa = Center (Ctrl+E).'),
  ]),

  M(15, 'Bảng tính — Công thức và hàm cơ bản', [
    Q('Bắt đầu 1 công thức trong Excel/Sheets bằng?', ['=', '#', '+', '@'], 0, 'Mọi công thức bắt đầu bằng dấu =.'),
    Q('Hàm tính tổng?', ['SUM', 'TOTAL', 'PLUS', 'ADD'], 0, '=SUM(A1:A10) cộng các ô từ A1 đến A10.'),
    Q('Hàm trung bình cộng?', ['AVERAGE', 'AVG', 'MEAN', 'AV'], 0, '=AVERAGE(A1:A10).'),
    Q('Hàm max/min?', ['MAX/MIN', 'BIG/SMALL', 'TOP/BOTTOM', 'HIGH/LOW'], 0, '=MAX(range), =MIN(range).'),
    Q('Tham chiếu tuyệt đối?', ['$A$1', 'A1', 'A$1', '$A1'], 0, '$ cố định cột và dòng. Khi sao chép công thức, $A$1 không đổi.'),
  ]),

  M(16, 'Bảng tính — Hàm logic IF', [
    Q('Cú pháp hàm IF?', ['IF(điều_kiện, giá_trị_đúng, giá_trị_sai)', 'IF(đk THEN x ELSE y)', 'IF đk: x else y', 'IF(x, đk, y)'], 0, '=IF(A1>=5, "Đậu", "Trượt").'),
    Q('IF lồng (nested IF) khi?', ['Nhiều điều kiện liên tiếp', '1 điều kiện', 'Không có điều kiện', 'Sai cú pháp'], 0, '=IF(A1>=9,"Giỏi",IF(A1>=7,"Khá","TB")) — nested IF.'),
    Q('Hàm thay thế nested IF từ Excel 2016?', ['IFS', 'CASE', 'SWITCH', 'WHEN'], 0, 'IFS(cond1,val1, cond2,val2,…) gọn hơn nested IF.'),
    Q('Hàm AND, OR dùng để?', ['Kết hợp nhiều điều kiện trong IF', 'Tính tổng', 'Tìm max', 'Lọc dữ liệu'], 0, 'AND/OR trả True/False, dùng trong IF: =IF(AND(A>=5,B>=5),…).'),
    Q('Hàm COUNTIF đếm?', ['Số ô thoả điều kiện', 'Tổng ô', 'Trung bình', 'Số dòng'], 0, '=COUNTIF(range, "criteria") đếm ô thoả điều kiện.'),
  ]),

  M(17, 'Biểu đồ trong bảng tính', [
    Q('Tạo biểu đồ trong Excel/Sheets?', ['Chọn dữ liệu → Insert → Chart', 'File → Print', 'View → Zoom', 'Format'], 0, 'Chọn vùng dữ liệu → Insert → Chart, chọn loại.'),
    Q('Biểu đồ cột (column) dùng cho?', ['So sánh giá trị giữa các nhóm', 'Hiển thị tỉ lệ %', 'Xu hướng theo thời gian dài', 'Quan hệ 2 biến'], 0, 'Cột phù hợp so sánh các nhóm rời rạc.'),
    Q('Biểu đồ tròn (pie) dùng cho?', ['Thể hiện tỉ lệ phần trăm của 1 tổng', 'So sánh xu hướng', 'Quan hệ biến', 'Dữ liệu thời gian'], 0, 'Pie chart phù hợp tỉ lệ thành phần trong 1 tổng.'),
    Q('Biểu đồ đường (line) dùng cho?', ['Thể hiện xu hướng theo thời gian', 'Tỉ lệ phần trăm', 'So sánh nhóm', 'Phân loại'], 0, 'Line chart thể hiện sự thay đổi giá trị theo thời gian/thứ tự.'),
    Q('Tiêu đề biểu đồ chỉnh ở?', ['Chart Title hoặc Customize → Chart title', 'File', 'Insert', 'Print'], 0, 'Chart Title (Excel) hoặc Customize → Chart & axis titles (Sheets).'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Python in màn hình dùng?', ['print()', 'write()', 'echo', 'cout'], 0, 'print().'),
    Q('Vòng lặp xác định số lần dùng?', ['for', 'while', 'if', 'def'], 0, 'for lặp với số lần biết trước (range).'),
    Q('a = [1,2,3]. a[1] = ?', ['2', '1', '3', 'Error'], 0, 'Chỉ số 1 → phần tử thứ 2.'),
    Q('Hàm SUM trong Excel?', ['=SUM(A1:A10)', 'SUM A1:A10', 'sum(A1:A10)', '+SUM'], 0, 'Excel.'),
    Q('Tạo cấu trúc tiêu đề trong Word dùng?', ['Heading 1, 2, 3', 'Font', 'Size', 'Color'], 0, 'Heading.'),
  ]),

  // ──────────────── HK2: THUẬT TOÁN SẮP XẾP + ĐẠO ĐỨC SỐ ────────────────
  M(19, 'Thuật toán sắp xếp — Khái niệm', [
    Q('Sắp xếp là?', ['Sắp các phần tử theo thứ tự (tăng/giảm)', 'Tìm kiếm', 'Xoá', 'Thêm'], 0, 'Sắp xếp = đưa phần tử về thứ tự xác định (thường tăng dần).'),
    Q('Ứng dụng sắp xếp trong đời sống?', ['Sắp danh sách HS theo điểm, theo tên ABC; sắp giá hàng…', 'Không có ứng dụng', 'Chỉ trong máy tính', 'Chỉ trong Toán'], 0, 'Rất nhiều ứng dụng: bảng điểm, danh bạ, lịch trình, tìm kiếm hiệu quả…'),
    Q('Sau khi sắp xếp tăng dần, phần tử đầu là?', ['Nhỏ nhất', 'Lớn nhất', 'Trung bình', 'Tuỳ'], 0, 'Tăng dần → phần tử đầu là nhỏ nhất, cuối là lớn nhất.'),
    Q('2 thuật toán sắp xếp đơn giản học ở lớp 8?', ['Sắp xếp chèn (Insertion sort) và sắp xếp chọn (Selection sort)', 'Quick sort & Merge sort', 'Heap & Radix', 'Bucket & Bubble'], 0, 'Insertion sort và Selection sort là 2 thuật toán đơn giản, dễ hiểu.'),
    Q('Sắp xếp nhanh nhất với n lớn?', ['Các thuật toán O(n log n) như Merge/Quick sort', 'Selection sort', 'Insertion sort', 'Bubble sort'], 0, 'Với n lớn, thuật toán O(n log n) hiệu quả hơn O(n²) rất nhiều.'),
  ]),

  M(20, 'Thuật toán sắp xếp chọn (Selection sort)', [
    Q('Ý tưởng selection sort?', ['Chọn phần tử nhỏ nhất, đưa lên đầu, lặp với phần còn lại', 'Chèn mỗi phần tử vào vị trí đúng', 'Đổi chỗ liền kề', 'Chia đôi'], 0, 'Selection sort: mỗi lần chọn min của phần chưa sắp, đặt lên đầu phần đó.'),
    Q('Số lần so sánh trong selection sort cho n phần tử?', ['~ n²/2 (O(n²))', 'n', 'log n', 'n³'], 0, 'Selection sort có độ phức tạp O(n²) — không phụ thuộc thứ tự đầu vào.'),
    Q('Selection sort sắp [3,1,2]. Bước 1?', ['Tìm min (1), đổi với phần tử đầu → [1,3,2]', 'Đổi 3 với 2', 'Không làm gì', 'Đổi 3 với 1 sau khi chèn'], 0, 'Bước 1: tìm min trong toàn dãy = 1, đổi vị trí với 3 → [1,3,2].'),
    Q('Sau bước 1, phần tử nào đã đúng vị trí?', ['Phần tử đầu (vị trí 0)', 'Cuối', 'Giữa', 'Chưa có'], 0, 'Sau bước 1, phần tử đầu đã là min — đúng vị trí cuối cùng.'),
    Q('Ưu điểm selection sort?', ['Đơn giản, dễ cài đặt, số lần đổi chỗ ít', 'Nhanh nhất', 'Tối ưu bộ nhớ tuyệt đối', 'Ổn định'], 0, 'Selection sort dễ hiểu, số swap chỉ O(n), nhưng chậm với n lớn.'),
  ]),

  M(21, 'Thuật toán sắp xếp chèn (Insertion sort)', [
    Q('Ý tưởng insertion sort?', ['Lấy từng phần tử, chèn vào vị trí đúng trong phần đã sắp', 'Chọn min đưa lên đầu', 'Đổi chỗ liền kề', 'Chia đôi'], 0, 'Insertion sort xây dần phần đã sắp bằng cách chèn mỗi phần tử vào đúng chỗ.'),
    Q('Độ phức tạp insertion sort xấu nhất?', ['O(n²)', 'O(n)', 'O(log n)', 'O(n log n)'], 0, 'Xấu nhất (đảo ngược): O(n²). Tốt nhất (đã sắp): O(n).'),
    Q('Insertion sort sắp [4,2,5,1]. Sau bước chèn 2?', ['[2,4,5,1]', '[4,5,2,1]', '[1,2,4,5]', '[2,4,1,5]'], 0, 'Chèn 2 vào trước 4 → [2,4,5,1].'),
    Q('Insertion sort tốt khi?', ['Dãy gần như đã sắp xếp', 'Dãy đảo ngược', 'Dãy ngẫu nhiên', 'Dãy lớn'], 0, 'Dãy gần sắp: O(n) — nhanh. Cũng tốt cho dãy nhỏ.'),
    Q('Insertion sort vs selection sort, sự khác biệt chính?', ['Insertion chèn vào phần đã sắp; Selection chọn min cho phần chưa sắp', 'Không khác', 'Insertion nhanh hơn luôn', 'Selection ổn định hơn luôn'], 0, 'Insertion mở rộng phần đã sắp; Selection thu hẹp phần chưa sắp.'),
  ]),

  M(22, 'Thực hành sắp xếp với Python', [
    Q('Hàm sort() có sẵn của Python sắp xếp?', ['List tại chỗ', 'Tạo list mới', 'Không thay đổi', 'Chỉ string'], 0, 'a.sort() sắp xếp list a tại chỗ; sorted(a) tạo list mới.'),
    Q('Hàm sorted() trả về?', ['List mới đã sắp', 'None', 'a gốc đã sửa', 'Error'], 0, 'sorted(a) trả list mới, không đổi a.'),
    Q('Sắp giảm dần dùng?', ['sort(reverse=True) hoặc sorted(a, reverse=True)', 'sort(desc=True)', 'sort.desc()', 'reverse()'], 0, 'Tham số reverse=True để sắp giảm dần.'),
    Q('Đổi chỗ 2 phần tử a[i], a[j] trong Python?', ['a[i], a[j] = a[j], a[i]', 'temp = a[i]; a[i]=a[j]; a[j]=temp', 'Cả A và B', 'Không đổi được'], 2, 'Python hỗ trợ swap 1 dòng: a[i], a[j] = a[j], a[i] (hoặc cách truyền thống dùng temp).'),
    Q('Sắp danh sách điểm hs = [7, 5, 9, 3] tăng dần. Kết quả?', ['[3, 5, 7, 9]', '[9, 7, 5, 3]', '[7, 5, 9, 3]', '[3, 9, 5, 7]'], 0, 'Sắp tăng: [3,5,7,9].'),
  ]),

  M(23, 'Tìm kiếm tuyến tính (Linear search)', [
    Q('Linear search hoạt động bằng?', ['Duyệt tuần tự từng phần tử, so sánh với x cần tìm', 'Chia đôi', 'Nhảy bước', 'Băm'], 0, 'Linear search: kiểm tra từng phần tử cho đến khi tìm thấy hoặc hết dãy.'),
    Q('Độ phức tạp linear search xấu nhất?', ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], 0, 'Xấu nhất: phải duyệt toàn bộ n phần tử → O(n).'),
    Q('Khi nào linear search là cách duy nhất?', ['Dãy chưa sắp xếp', 'Dãy đã sắp', 'Mảng', 'Liên kết'], 0, 'Dãy chưa sắp → chỉ có thể duyệt tuần tự (không thể binary search).'),
    Q('Trong Python, kiểm tra x in list dùng?', ['Cơ chế tương đương linear search', 'Binary search', 'Hash', 'Không có cách'], 0, 'Toán tử in trên list = linear search; trên set/dict mới là hash O(1).'),
    Q('Linear search trả về gì khi không tìm thấy?', ['-1 (hoặc None — tuỳ quy ước)', '0', 'Crash', 'Tự thêm'], 0, 'Quy ước phổ biến: trả -1 hoặc None để báo không tìm thấy.'),
  ]),

  M(24, 'Tìm kiếm nhị phân (Binary search)', [
    Q('Yêu cầu đầu vào của binary search?', ['Dãy đã sắp xếp', 'Dãy ngẫu nhiên', 'Không yêu cầu', 'Dãy đảo ngược'], 0, 'Binary search BẮT BUỘC dãy đã sắp xếp.'),
    Q('Ý tưởng binary search?', ['Chia đôi dãy, so sánh giữa, loại nửa không chứa x', 'Duyệt tuần tự', 'Sắp lại', 'Nhảy ngẫu nhiên'], 0, 'Mỗi bước chia đôi dãy còn lại → loại trừ 1/2.'),
    Q('Độ phức tạp binary search?', ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'], 0, 'Mỗi bước giảm 1/2 → log₂(n) bước.'),
    Q('Với 1 triệu phần tử, binary search cần tối đa?', ['~20 bước', '1 triệu', '1000', '10 bước'], 0, 'log₂(1.000.000) ≈ 20.'),
    Q('Binary search có nhanh hơn linear với n nhỏ?', ['Không nhiều — nhưng vẫn nhanh hơn khi n lớn', 'Luôn nhanh hơn', 'Luôn chậm hơn', 'Bằng nhau'], 0, 'Với n nhỏ chênh lệch nhỏ; với n lớn (>1000) binary search vượt trội.'),
  ]),

  M(25, 'Kiểu dữ liệu xâu (string) trong Python', [
    Q('Khai báo xâu?', ['s = "hello" hoặc s = \'hello\'', 's = hello', 'string s = "hello"', 's := "hello"'], 0, 'Xâu trong nháy đơn hoặc nháy kép đều được.'),
    Q('Độ dài xâu?', ['len(s)', 's.length', 's.size()', 'count(s)'], 0, 'len(s) trả số ký tự.'),
    Q('Truy cập ký tự thứ i?', ['s[i] (i từ 0)', 's(i)', 's.char(i)', 's.get(i)'], 0, 'Indexing từ 0: s[0] là ký tự đầu.'),
    Q('Ghép 2 xâu?', ['s1 + s2', 's1.append(s2)', 'concat(s1, s2)', 's1, s2'], 0, 'Toán tử + nối 2 xâu: "abc"+"def" = "abcdef".'),
    Q('Đổi xâu thành chữ hoa?', ['s.upper()', 's.uppercase()', 'upper(s)', 'UPPER(s)'], 0, 's.upper() trả xâu chữ hoa; .lower() trả chữ thường.'),
  ]),

  M(26, 'Xử lý xâu — Tách, ghép, tìm', [
    Q('Tách xâu theo dấu cách?', ['s.split()', 's.cut()', 'split(s)', 's.divide()'], 0, 's.split() tách theo khoảng trắng; s.split(",") tách theo dấu phẩy.'),
    Q('Ghép list các xâu thành 1 xâu, ngăn cách bởi -?', ['"-".join(list)', 'list.join("-")', 'join(list, "-")', '"-".concat(list)'], 0, 'sep.join(iterable). VD: "-".join(["a","b","c"]) → "a-b-c".'),
    Q('Tìm vị trí xuất hiện đầu tiên của "ab" trong s?', ['s.find("ab") (-1 nếu không có)', 's.index("ab")', 'Cả A và B (B raise lỗi nếu không có)', 'Không tìm được'], 2, 'find trả -1 nếu không có; index raise ValueError.'),
    Q('Thay thế "a" bằng "b" trong s?', ['s.replace("a","b")', 's.swap("a","b")', 's.substitute("a","b")', 's("a"→"b")'], 0, 'replace(old, new) trả xâu mới.'),
    Q('Đếm số ký tự "a" trong xâu?', ['s.count("a")', 'count(s, "a")', 'len(s, "a")', 's.find("a")'], 0, 'count(x) đếm số lần xuất hiện.'),
  ]),

  M(27, 'Kiểu từ điển (dictionary)', [
    Q('Tạo dictionary?', ['d = {"key1": "value1"}', 'd = ["key", "value"]', 'd = ("key", "value")', 'd = key:value'], 0, 'Dict dùng dấu {} với cặp khoá:giá_trị.'),
    Q('Truy cập giá trị theo khoá?', ['d["key"]', 'd.get("key") (cũng được)', 'Cả A và B', 'd.key'], 2, 'Cả d["key"] và d.get("key") — get an toàn hơn (không lỗi nếu thiếu).'),
    Q('Thêm cặp khoá-giá trị?', ['d["new_key"] = value', 'd.add(key, value)', 'd.insert(key, value)', 'd + (key, value)'], 0, 'Gán giá trị cho khoá mới = thêm cặp mới.'),
    Q('Duyệt mọi khoá trong dict?', ['for k in d:', 'for k in d.values()', 'for k in d.items()', 'for k in d.keys() (cũng được)'], 0, 'for k in d duyệt khoá; values() duyệt giá trị; items() duyệt cặp.'),
    Q('Ứng dụng dictionary?', ['Đếm tần suất, ánh xạ tên→điểm, mã→thông tin', 'Sắp xếp', 'Tìm kiếm', 'Cộng số'], 0, 'Dict rất tốt để lưu dữ liệu dạng ánh xạ key→value.'),
  ]),

  M(28, 'An toàn thông tin — Mật khẩu mạnh và xác thực 2 yếu tố', [
    Q('Mật khẩu mạnh có?', ['Đủ dài (≥12), kết hợp hoa-thường-số-ký_tự_đặc_biệt', '4 chữ số', 'Tên mình', 'Ngày sinh'], 0, 'Mật khẩu mạnh: ≥12 ký tự, đa dạng loại ký tự, không liên quan thông tin cá nhân.'),
    Q('Mật khẩu yếu?', ['123456, password, abc123, tên-sinh-nhật', 'Mật khẩu phức tạp', '20 ký tự ngẫu nhiên', 'Cụm từ dài'], 0, 'Các mật khẩu phổ biến/cá nhân rất dễ đoán/bị brute-force.'),
    Q('Xác thực 2 yếu tố (2FA) là?', ['Cần thêm yếu tố thứ 2 (OTP, vân tay…) ngoài mật khẩu', 'Đổi mật khẩu 2 lần', '2 mật khẩu', 'Không có ý nghĩa'], 0, '2FA = mật khẩu (biết) + OTP/vân tay/khoá vật lý (có/là) → an toàn hơn nhiều.'),
    Q('Quản lý nhiều mật khẩu hiệu quả bằng?', ['Trình quản lý mật khẩu (Bitwarden, 1Password)', 'Ghi vào notepad', 'Dùng chung 1 mật khẩu cho tất cả', 'Đặt sticky note'], 0, 'Password manager mã hoá lưu trữ, sinh mật khẩu mạnh, đồng bộ nhiều thiết bị.'),
    Q('Không nên?', ['Dùng chung mật khẩu cho nhiều tài khoản', 'Bật 2FA', 'Đổi mật khẩu định kỳ', 'Dùng password manager'], 0, 'Dùng chung 1 mật khẩu = 1 nơi lộ → mọi tài khoản nguy hiểm.'),
  ]),

  M(29, 'An toàn thông tin — Lừa đảo trực tuyến (phishing)', [
    Q('Phishing là?', ['Lừa người dùng cung cấp thông tin (mật khẩu, thẻ) qua mạo danh', 'Đánh cắp máy tính', 'Phá website', 'Quảng cáo'], 0, 'Phishing = mạo danh website/email tin cậy để lừa lấy thông tin nhạy cảm.'),
    Q('Dấu hiệu email phishing?', ['Cảnh báo khẩn cấp, link lạ, sai chính tả, đòi mật khẩu', 'Email đẹp', 'Không có link', 'Từ người quen'], 0, 'Email lừa đảo thường tạo cảm giác khẩn cấp, link rút gọn, sai chính tả.'),
    Q('Khi nghi email phishing, nên?', ['Không click link, kiểm tra URL gốc, xoá', 'Click ngay để xem', 'Trả lời ngay', 'Chuyển tiếp bạn bè'], 0, 'Không tương tác, xoá ngay. Cần thì truy cập trực tiếp website chính thức.'),
    Q('Website giả mạo có URL?', ['Khác URL chính thức (sai chính tả, domain lạ)', 'Giống hệt URL chính thức', 'Luôn có HTTPS', 'Không có URL'], 0, 'URL giả thường sai chính tả 1 chữ (faceb00k.com, google-login.com…).'),
    Q('Khi vô tình nhập mật khẩu vào trang giả?', ['Đổi mật khẩu ngay, bật 2FA, kiểm tra hoạt động lạ', 'Im lặng', 'Vứt máy', 'Không sao'], 0, 'Phản ứng nhanh: đổi mật khẩu, bật 2FA, kiểm tra giao dịch/đăng nhập bất thường.'),
  ]),

  M(30, 'Phần mềm độc hại (malware) và phòng tránh', [
    Q('Malware gồm?', ['Virus, trojan, ransomware, spyware, adware', 'Chỉ virus', 'Game online', 'Phần mềm thật'], 0, 'Malware = phần mềm độc hại nhiều loại.'),
    Q('Ransomware làm gì?', ['Mã hoá dữ liệu, đòi tiền chuộc để giải mã', 'Quảng cáo', 'Theo dõi vị trí', 'Tăng tốc máy'], 0, 'Ransomware mã hoá file người dùng, đòi tiền (thường bitcoin) để giải mã.'),
    Q('Spyware làm gì?', ['Theo dõi hoạt động, đánh cắp thông tin', 'Hiện quảng cáo', 'Đòi tiền', 'Tăng tốc máy'], 0, 'Spyware lén lút thu thập thông tin người dùng.'),
    Q('Phòng tránh malware bằng?', ['Cài chương trình diệt virus, không click link/file lạ, cập nhật HĐH', 'Tắt antivirus', 'Mở mọi file', 'Tải software lậu'], 0, 'Antivirus + thói quen an toàn + cập nhật bản vá là tổ hợp phòng tránh chính.'),
    Q('Tin nhắn lạ kèm link, nên?', ['Không click, xoá', 'Click thử', 'Chuyển tiếp', 'Bấm vào'], 0, 'Không bấm link lạ kể cả từ người quen (có thể tài khoản họ bị hack).'),
  ]),

  M(31, 'Đạo đức số — Quyền tác giả trong môi trường số', [
    Q('Quyền tác giả là?', ['Quyền của tác giả với tác phẩm do mình sáng tạo', 'Quyền sở hữu tài sản vật chất', 'Quyền sử dụng tự do', 'Không có khái niệm'], 0, 'Quyền tác giả bảo vệ sáng tạo trí tuệ (văn học, nghệ thuật, phần mềm…).'),
    Q('Khi tải nhạc lậu?', ['Vi phạm quyền tác giả', 'Hợp pháp', 'Không sao', 'Khôn ngoan'], 0, 'Tải nhạc/phim/sách không có giấy phép = vi phạm bản quyền.'),
    Q('Khi dùng ảnh trên mạng cho bài thuyết trình?', ['Cần ghi nguồn, dùng ảnh có giấy phép Creative Commons', 'Copy thoải mái', 'Không cần nguồn', 'Không được dùng'], 0, 'Ghi nguồn + dùng ảnh CC (vd Unsplash, Wikimedia Commons) là cách đúng.'),
    Q('Phần mềm mã nguồn mở (open source)?', ['Cho phép xem, sửa, phân phối lại theo giấy phép cụ thể', 'Miễn phí tuyệt đối', 'Không có giấy phép', 'Bị cấm'], 0, 'Open source có giấy phép (MIT, GPL…) cho phép sử dụng/sửa đổi với điều kiện nhất định.'),
    Q('Đạo văn (plagiarism) là?', ['Sao chép ý/lời người khác mà không ghi nguồn', 'Trích dẫn có nguồn', 'Tổng hợp ý có nguồn', 'Học hỏi'], 0, 'Đạo văn vi phạm đạo đức học thuật và quyền tác giả.'),
  ]),

  M(32, 'Đạo đức số — Ứng xử trên mạng xã hội', [
    Q('Ứng xử văn minh trên mạng?', ['Tôn trọng, lịch sự, không công kích cá nhân', 'Chửi bới', 'Đe doạ', 'Bóc phốt'], 0, 'Trên mạng cần ứng xử như đời thực: tôn trọng, lịch sự, không xúc phạm.'),
    Q('Trước khi đăng bài, cần?', ['Kiểm chứng thông tin, suy nghĩ về hệ quả', 'Đăng ngay', 'Không cần kiểm', 'Sao chép thoải mái'], 0, 'Suy nghĩ về tính xác thực và tác động trước khi đăng.'),
    Q('Khi gặp bắt nạt mạng?', ['Báo người lớn, chặn, lưu bằng chứng, báo cảnh sát nếu nghiêm trọng', 'Im lặng chịu đựng', 'Trả thù', 'Tự xử lý mình'], 0, 'Báo người lớn, lưu chứng cứ, dùng tính năng chặn, báo cảnh sát nếu nghiêm trọng.'),
    Q('Chia sẻ tin giả (fake news) có hậu quả?', ['Lan truyền thông tin sai, có thể bị xử phạt theo Luật An ninh mạng', 'Không sao', 'Có lợi', 'Tăng like'], 0, 'Luật An ninh mạng VN xử phạt việc lan truyền tin sai, gây ảnh hưởng XH.'),
    Q('Bảo vệ quyền riêng tư online?', ['Cài đặt quyền riêng tư cao, không chia sẻ thông tin nhạy cảm', 'Chia sẻ mọi thứ', 'Đăng địa chỉ', 'Đăng số CMND'], 0, 'Cài private, không đăng thông tin cá nhân nhạy cảm (CMND, địa chỉ, ảnh nhạy cảm…).'),
  ]),

  M(33, 'Trí tuệ nhân tạo (AI) trong đời sống', [
    Q('AI có thể làm gì?', ['Nhận diện hình ảnh, dịch ngôn ngữ, trợ lý ảo, gợi ý nội dung', 'Mọi thứ con người làm', 'Chỉ chơi game', 'Không có ứng dụng'], 0, 'AI ứng dụng rất rộng: nhận diện ảnh, NLP, trợ lý, gợi ý phim/sản phẩm…'),
    Q('Trợ lý ảo phổ biến?', ['Siri, Google Assistant, Alexa, ChatGPT', 'Word, Excel', 'Photoshop', 'Notepad'], 0, 'Các trợ lý ảo tích hợp AI.'),
    Q('AI có thay thế con người hoàn toàn?', ['Không — AI là công cụ hỗ trợ, không có cảm xúc/trực giác con người', 'Có, thay hết', 'Tuỳ ngành', 'Không liên quan'], 0, 'AI hỗ trợ rất tốt nhưng không thay thế hoàn toàn — vẫn cần con người định hướng, đánh giá.'),
    Q('Khi dùng AI làm bài tập, cần?', ['Tham khảo, KHÔNG copy nguyên — học để hiểu', 'Copy 100%', 'Không bao giờ dùng', 'Trả tiền cho AI'], 0, 'AI là trợ lý học tập, không phải máy làm bài thay. Hiểu mới quan trọng.'),
    Q('Rủi ro của AI?', ['Mất quyền riêng tư, thiên lệch, deepfake, mất việc làm', 'Không có rủi ro', 'Chỉ rủi ro kỹ thuật', 'Tuyệt đối an toàn'], 0, 'AI có rủi ro: thiên lệch dữ liệu, lừa đảo deepfake, vấn đề quyền riêng tư…'),
  ]),

  M(34, 'Dự án — Lập trình giải bài toán nhỏ', [
    Q('Quy trình giải bài toán bằng máy tính?', ['Xác định bài toán → Thiết kế thuật toán → Viết chương trình → Kiểm thử', 'Viết code ngay', 'Tuỳ ý', 'Bắt đầu từ kết quả'], 0, '4 bước chuẩn: hiểu bài → thuật toán → code → test.'),
    Q('Khi chương trình chạy sai, cần?', ['Debug — tìm và sửa lỗi', 'Viết lại từ đầu', 'Bỏ qua', 'Đổi máy'], 0, 'Debug = quá trình tìm và sửa lỗi (bug) trong chương trình.'),
    Q('Loại lỗi trong lập trình?', ['Lỗi cú pháp (syntax) và lỗi logic', 'Chỉ syntax', 'Chỉ logic', 'Không có lỗi'], 0, '2 loại chính: syntax (sai cú pháp, không chạy được) và logic (chạy nhưng sai kết quả).'),
    Q('Kiểm thử chương trình bằng?', ['Nhập nhiều bộ dữ liệu khác nhau, so kết quả với mong đợi', 'Chỉ 1 input', 'Không kiểm', 'Tin tưởng tuyệt đối'], 0, 'Test với nhiều bộ dữ liệu: cơ bản, biên, đặc biệt — đảm bảo đúng mọi trường hợp.'),
    Q('Khi làm dự án nhóm cần?', ['Phân công, dùng Git/Google Drive để cộng tác', 'Mỗi người làm riêng', 'Không liên lạc', '1 người làm tất'], 0, 'Phân công rõ ràng + công cụ cộng tác (Git, Google Drive, Trello) là chìa khoá.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Vòng lặp xác định trong Python?', ['for', 'while', 'if', 'def'], 0, 'for biết trước số lần.'),
    Q('Sắp xếp list a tăng dần?', ['a.sort()', 'a.order()', 'sort(a)', 'a.up()'], 0, 'Method có sẵn.'),
    Q('Binary search yêu cầu?', ['Dãy đã sắp xếp', 'Dãy ngẫu nhiên', 'Không yêu cầu', 'Dãy đảo'], 0, 'Điều kiện bắt buộc.'),
    Q('Phishing là?', ['Lừa đảo lấy thông tin', 'Phần mềm độc hại', 'Quảng cáo', 'Bản quyền'], 0, 'Định nghĩa.'),
    Q('Tham chiếu tuyệt đối trong Excel?', ['$A$1', 'A1', '#A#1', '@A@1'], 0, '$ cố định.'),
  ]),
];

export const S8TIN_SCENARIOS = indexBy(S8TIN_WEEKS);
