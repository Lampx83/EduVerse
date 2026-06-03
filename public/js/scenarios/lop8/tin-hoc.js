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
    Q('Python là ngôn ngữ?', ['Bậc thấp', 'Đã lỗi thời', 'Bậc cao, thông dịch, dễ học, đa năng', 'Chỉ chạy trên Windows'], 2, 'Python là ngôn ngữ bậc cao, thông dịch, đa nền tảng, cú pháp đơn giản, rất phổ biến.'),
    Q('Phần mở rộng file Python?', ['.py', '.pyt', '.exe', '.python'], 0, 'File Python có đuôi .py (ví dụ hello.py).'),
    Q('Python được tạo bởi?', ['Steve Jobs', 'Guido van Rossum', 'Linus Torvalds', 'Bill Gates'], 1, 'Python do Guido van Rossum tạo ra năm 1991.'),
    Q('Lệnh in chuỗi ra màn hình?', ['cout << "Xin chao"', 'echo "Xin chao"', 'print("Xin chao")', 'write("Xin chao")'], 2, 'Hàm print() in văn bản ra màn hình.'),
    Q('Python phân biệt chữ hoa-thường?', ['Không, mọi tên đều như nhau', 'Tuỳ ngữ cảnh', 'Có', 'Chỉ khi gọi hàm'], 2, 'Python case-sensitive: name và Name là 2 biến khác nhau.'),
  ]),

  M(2, 'Biến và kiểu dữ liệu cơ bản', [
    Q('Cách gán giá trị 5 cho biến x?', ['x := 5', 'x = 5', 'int x = 5', 'var x = 5'], 1, 'Python dùng dấu = để gán: x = 5.'),
    Q('Kiểu dữ liệu của 3.14?', ['float', 'str (chuỗi ký tự)', 'int (số nguyên)', 'complex (số phức)'], 0, '3.14 có phần thập phân → float (số thực).'),
    Q('Kiểu dữ liệu của "Hello"?', ['str', 'char (ký tự đơn)', 'int (số nguyên)', 'list (danh sách ký tự)'], 0, '"Hello" trong dấu nháy là chuỗi (str).'),
    Q('Hàm kiểm tra kiểu của biến?', ['kind(x)', 'typeof(x)', 'class(x)', 'type(x)'], 3, 'type(x) trả về kiểu dữ liệu của x.'),
    Q('Kết quả type(True) ?', ['<class \'int\'>', '<class \'bool\'>', '<class \'str\'>', '<class \'boolean\'>'], 1, 'True/False là kiểu bool.'),
  ]),

  M(3, 'Toán tử số học và toán tử so sánh', [
    Q('Toán tử chia lấy nguyên trong Python?', ['%', '//', '/', 'div'], 1, '// chia lấy nguyên: 7//2 = 3.'),
    Q('Toán tử chia lấy dư?', ['%', '/', 'mod', '//'], 0, '% lấy dư: 7%2 = 1.'),
    Q('Toán tử luỹ thừa?', ['%%', '^^ (luỹ thừa kép)', '**', '^ (như C/Java)'], 2, '** là luỹ thừa: 2**3 = 8.'),
    Q('Kết quả 10 / 3 trong Python 3?', ['3.3333...', '4', '3', '3.0'], 0, '/ luôn cho float trong Python 3: 10/3 ≈ 3.333.'),
    Q('Toán tử so sánh "khác nhau"?', ['=! (đảo dấu bằng)', '!== (so sánh nghiêm ngặt)', '>< (hai chiều khác)', '!='], 3, '!= nghĩa là khác. == là bằng.'),
  ]),

  M(4, 'Nhập dữ liệu từ bàn phím và xuất ra màn hình', [
    Q('Hàm nhập dữ liệu từ bàn phím?', ['input()', 'read()', 'scan()', 'keyboard()'], 0, 'input() đọc 1 dòng từ bàn phím, trả về chuỗi.'),
    Q('input() trả về kiểu?', ['int (số nguyên)', 'float (số thực)', 'tuỳ giá trị nhập', 'str (chuỗi)'], 3, 'input() LUÔN trả về chuỗi, cần ép kiểu nếu muốn số.'),
    Q('Để nhập 1 số nguyên?', ['n = float(input())', 'n = number(input())', 'n = input()', 'n = int(input())'], 3, 'int(input()) đọc chuỗi rồi đổi sang số nguyên.'),
    Q('print có thể in nhiều giá trị?', ['Chỉ 1 giá trị', 'Phải dùng nhiều lần print', 'Có, cách nhau bởi dấu phẩy', 'Có, nhưng phải nối bằng dấu +'], 2, 'print(a, b, c) — các giá trị cách nhau bằng dấu cách.'),
    Q('print("a", end=" ") khác print("a") ở?', ['In đậm', 'In hoa', 'Không xuống dòng sau khi in, kết thúc bằng dấu cách', 'Không khác'], 2, 'end=" " thay newline bằng dấu cách.'),
  ]),

  M(5, 'Câu lệnh điều kiện if', [
    Q('Cú pháp if đúng?', ['if (x > 0) { print("duong") }', 'if x > 0: print("duong");', 'if x > 0 then print("duong")', 'if x > 0:\\n    print("duong")'], 3, 'Python: if điều_kiện: rồi xuống dòng + thụt lề.'),
    Q('Python phân biệt khối lệnh bằng?', ['Dấu ()', 'Dấu {}', 'Thụt lề (indentation)', 'Dấu hai chấm cuối dòng'], 2, 'Python dùng thụt lề (thường 4 dấu cách) để phân biệt khối.'),
    Q('Kết quả: if 5 > 3: print("Y") ?', ['Không in gì', 'Lỗi cú pháp do thiếu else', 'N (vì điều kiện sai)', 'Y'], 3, '5>3 là True nên in Y.'),
    Q('Toán tử logic "và"?', ['&& (như C/Java)', 'AND (viết hoa)', 'and', '& (toán tử bit)'], 2, 'Python dùng từ khoá and (chữ thường).'),
    Q('Toán tử logic "hoặc"?', ['|| (như C/Java)', '| (toán tử bit)', 'or', 'OR (viết hoa)'], 2, 'Python dùng or.'),
  ]),

  M(6, 'Cấu trúc if-else và if-elif-else', [
    Q('Cú pháp if-else?', ['if-else không tồn tại', 'if đk { … } else { … }', 'if đk:\\n  …\\nelse:\\n  …', 'if đk then … else …'], 2, 'Python: if điều_kiện: … else: ….'),
    Q('Khi kiểm tra nhiều điều kiện liên tiếp dùng?', ['else if (viết rời như C)', 'else if', 'elif', 'elseif'], 2, 'Python dùng từ khoá elif (viết liền) cho điều kiện tiếp theo.'),
    Q('Chương trình: if x>0: print("D") elif x<0: print("A") else: print("0"). x=−5 in?', ['D (vì x=-5 vẫn là số)', 'A', '0', 'Lỗi do thiếu dấu ngoặc'], 1, 'x<0 → in A (âm).'),
    Q('Có thể lồng if trong if?', ['Chỉ với else', 'Không, sẽ báo lỗi cú pháp', 'Chỉ 1 mức', 'Có'], 3, 'Có thể lồng if-else nhiều mức (chú ý thụt lề).'),
    Q('Bài toán: in "Pass" nếu điểm ≥5, "Fail" nếu <5. Cấu trúc?', ['Không cần điều kiện', 'Chỉ if', 'if-else 1 cấp', 'if-elif 5 cấp'], 2, '2 trường hợp → if-else đủ.'),
  ]),

  M(7, 'Vòng lặp for', [
    Q('Cú pháp for cơ bản?', ['for i = 1 to n', 'for i in range(n):', 'foreach i in n', 'for (i=0;i<n;i++)'], 1, 'Python: for i in range(n): — i nhận giá trị 0..n-1.'),
    Q('range(5) sinh ra?', ['1,2,3,4,5', '0,1,2,3,4', '0,1,2,3,4,5', '5,4,3,2,1'], 1, 'range(n) sinh dãy 0..n-1.'),
    Q('range(2, 6) sinh ra?', ['2,4,6', '2,3,4,5,6', '2,3,4,5', '1,2,3,4,5'], 2, 'range(start, stop) sinh start..stop-1.'),
    Q('range(0, 10, 2) sinh ra?', ['0,2,4,6,8', '0,2,4,6,8,10', '0,5', '2,4,6,8,10'], 0, 'range(start, stop, step) — bước nhảy 2.'),
    Q('Tính tổng 1+2+…+10. Lệnh for?', ['for i in range(10): s += i', 'for i in range(1,11): s += i', 'for i in range(1,10): s += i', 'for i in 10: s += i'], 1, 'range(1,11) sinh 1..10.'),
  ]),

  M(8, 'Vòng lặp while', [
    Q('Cú pháp while?', ['while (đk) do', 'while đk then', 'while điều_kiện:', 'do { … } while (đk)'], 2, 'Python: while điều_kiện: rồi khối thụt lề.'),
    Q('Vòng while chạy khi?', ['Không bao giờ', 'Điều kiện True', 'Luôn chạy', 'Điều kiện False'], 1, 'Vòng while lặp tiếp khi điều kiện còn True.'),
    Q('Lệnh thoát vòng lặp?', ['exit() (thoát chương trình)', 'quit (kết thúc vòng)', 'return', 'break'], 3, 'break thoát khỏi vòng lặp ngay lập tức.'),
    Q('Lệnh bỏ qua phần còn lại 1 lần lặp, tiếp tục lần sau?', ['pass (lệnh rỗng)', 'next (sang lần lặp kế)', 'skip (bỏ qua bước)', 'continue'], 3, 'continue bỏ qua phần còn lại của lần hiện tại, tiếp tục lần lặp tiếp theo.'),
    Q('Vòng lặp vô hạn?', ['for(;;)', 'while:', 'while True:', 'repeat True:'], 2, 'while True: tạo vòng vô hạn, cần break để thoát.'),
  ]),

  M(9, 'Bài tập tổng hợp: vòng lặp', [
    Q('Đếm số lần lặp 1 vòng for i in range(3,8)?', ['8 lần', '5 lần', '3 lần', '4 lần'], 1, '8-3 = 5 giá trị: 3,4,5,6,7.'),
    Q('In bảng cửu chương 5, dùng?', ['for i in range(1,11): print(5,"x",i,"=",5*i)', 'không cần vòng lặp', '1 lệnh print', 'while i<=10 không cần i+=1'], 0, 'Vòng for chạy 10 lần, in dòng 5×i.'),
    Q('Tìm GTLN trong danh sách bằng?', ['Cả A và B', 'max() có sẵn (cũng được)', 'Không làm được', 'Khởi tạo max=phần_tử_đầu, duyệt cập nhật'], 0, 'Cả 2 cách đều đúng: tự duyệt hoặc dùng hàm max().'),
    Q('Đếm số chẵn trong 1..100?', ['for i in range(2,101,2): count+=1', 'Cả A và B', 'Không có cách', 'for i in range(1,101): if i%2==0: count+=1'], 1, 'Cả 2 cách đều ra 50.'),
    Q('In 5 dòng "Hello"?', ['for i in range(5): print("Hello")', 'Chỉ 1 lệnh print', 'print("Hello"*5)', 'Cả A và B (B in liền 1 dòng)'], 0, 'for là cách chuẩn; print("Hello"*5) in liên tiếp HelloHello… 1 dòng.'),
  ]),

  M(10, 'Kiểu danh sách (list)', [
    Q('Tạo list rỗng?', ['a = ()', 'a = ""', 'a = {}', 'a = []'], 3, 'a = [] tạo list rỗng. () là tuple, {} là dict/set.'),
    Q('Truy cập phần tử đầu của list a?', ['a[1] (chỉ số bắt đầu từ 1)', 'a(0) (cú pháp như gọi hàm)', 'a.first', 'a[0]'], 3, 'Python đánh chỉ số từ 0, phần tử đầu là a[0].'),
    Q('Thêm phần tử x vào cuối list a?', ['a.insert(x)', 'a += x (cộng trực tiếp)', 'a.add(x)', 'a.append(x)'], 3, 'append(x) thêm x vào cuối list.'),
    Q('Độ dài list a?', ['a.length', 'count(a)', 'len(a)', 'a.size()'], 2, 'len(a) trả về số phần tử.'),
    Q('Xoá phần tử ở vị trí i?', ['del a[i] hoặc a.pop(i)', 'a[i] = null', 'a.remove(i)', 'không xoá được'], 0, 'del a[i] hoặc a.pop(i) xoá theo chỉ số; remove(x) xoá theo GIÁ TRỊ x.'),
  ]),

  M(11, 'Thao tác trên danh sách — Duyệt, tìm, đếm', [
    Q('Duyệt mọi phần tử trong list a?', ['for x = 1 to len(a)', 'for(i;i<len;i++)', 'while a', 'for x in a: print(x)'], 3, 'for x in a: là cách duyệt Pythonic nhất.'),
    Q('Kiểm tra 5 có trong list a?', ['5 in a', 'a.find(5)', 'has(a, 5)', 'a.contains(5)'], 0, 'Toán tử in: 5 in a → True/False.'),
    Q('Đếm số lần 3 xuất hiện?', ['a.find(3)', 'len(a, 3)', 'count(a, 3)', 'a.count(3)'], 3, 'method count(x) đếm số lần x xuất hiện.'),
    Q('Tìm tổng các phần tử trong list số?', ['total(a)', 'sum(a)', 'len(a)', 'a.sum()'], 1, 'Hàm sum() có sẵn.'),
    Q('Sắp xếp list tăng dần?', ['sort(a)', 'a.order()', 'arrange(a)', 'a.sort() hoặc sorted(a)'], 3, 'a.sort() sửa list gốc; sorted(a) trả list mới.'),
  ]),

  M(12, 'Hàm trong Python', [
    Q('Khai báo hàm bằng từ khoá?', ['sub (như Pascal procedure)', 'fun (rút gọn function)', 'function', 'def'], 3, 'def tên_hàm(tham_số): bắt đầu khai báo hàm.'),
    Q('Hàm trả về giá trị dùng?', ['print (in ra rồi trả về)', 'return', 'yield (đặc biệt)', 'output'], 1, 'return trả giá trị về nơi gọi hàm.'),
    Q('Hàm không return trả về?', ['0', 'None', '"" (chuỗi rỗng)', 'NameError do không có giá trị'], 1, 'Hàm không return tự trả về None.'),
    Q('Tham số có giá trị mặc định?', ['def f(x=5):', 'def f(x default 5):', 'def f(x:5):', 'def f(x[5]):'], 0, 'def f(x=5): — khi gọi f() thì x = 5.'),
    Q('Phạm vi (scope) biến trong hàm?', ['Cục bộ — chỉ truy cập trong hàm', 'Toàn cục', 'Toàn cục nếu khai báo ngoài if', 'Không có scope'], 0, 'Biến tạo trong hàm là local, chỉ tồn tại trong hàm đó.'),
  ]),

  M(13, 'Soạn thảo văn bản nâng cao — Định dạng đoạn, kiểu (styles)', [
    Q('Style (kiểu) trong Word giúp?', ['Không có công dụng', 'Trang trí', 'Chỉ in đậm', 'Áp dụng định dạng đồng nhất cho nhiều đoạn nhanh chóng'], 3, 'Styles cho phép thay đổi 1 lần — toàn bộ đoạn cùng style tự cập nhật.'),
    Q('Heading 1, Heading 2 dùng để?', ['Trang trí', 'Không có ý nghĩa', 'Tạo cấu trúc tiêu đề có thứ bậc, hỗ trợ mục lục tự động', 'Chỉ in đậm'], 2, 'Heading có thứ bậc, là cơ sở tạo mục lục (Table of Contents) tự động.'),
    Q('Mục lục tự động trong Word từ?', ['Đoạn văn thường', 'Bảng biểu', 'Hình ảnh', 'Các Heading đã đặt'], 3, 'Word quét tất cả Heading 1, 2, 3… để sinh mục lục.'),
    Q('Khoảng cách trước/sau đoạn cài ở?', ['View → Ruler', 'Paragraph → Spacing → Before/After', 'Font → Character Spacing', 'Page Setup → Margins'], 1, 'Paragraph dialog có Before/After spacing để chỉnh khoảng cách giữa các đoạn.'),
    Q('Để chia 2 cột báo dùng?', ['File → Page Setup', 'Layout → Columns', 'Insert → Table', 'View → Print Layout'], 1, 'Layout (Page Layout) → Columns chia trang thành nhiều cột.'),
  ]),

  M(14, 'Chèn bảng, biểu đồ vào văn bản', [
    Q('Chèn bảng trong Word qua?', ['Insert → Table', 'File → Table', 'Home → Table', 'View → Table'], 0, 'Insert → Table cho chọn số dòng, cột.'),
    Q('Gộp ô trong bảng (merge cells)?', ['Không thể', 'Insert', 'Phải vẽ lại', 'Chọn các ô → Layout → Merge Cells'], 3, 'Chọn các ô liền nhau → Layout (Table Tools) → Merge Cells.'),
    Q('Tô đậm đường viền bảng?', ['File → Page Setup → Border', 'View → Gridlines', 'Insert', 'Design → Borders'], 3, 'Design (Table Tools) → Borders để chọn kiểu, độ đậm đường viền.'),
    Q('Chèn biểu đồ từ?', ['Insert → Picture', 'Insert → Chart', 'Format', 'Insert → Table'], 1, 'Insert → Chart, chọn loại biểu đồ và nhập dữ liệu.'),
    Q('Để bảng/biểu đồ căn giữa trang?', ['Không căn được', 'Align Left (căn trái)', 'Justify', 'Center alignment'], 3, 'Căn giữa = Center (Ctrl+E).'),
  ]),

  M(15, 'Bảng tính — Công thức và hàm cơ bản', [
    Q('Bắt đầu 1 công thức trong Excel/Sheets bằng?', ['+', '@ (như Excel hàm động)', '# (đầu công thức kiểu cũ)', '='], 3, 'Mọi công thức bắt đầu bằng dấu =.'),
    Q('Hàm tính tổng?', ['PLUS (cộng đôi giá trị)', 'ADD (hàm cộng)', 'SUM', 'TOTAL (tính tổng)'], 2, '=SUM(A1:A10) cộng các ô từ A1 đến A10.'),
    Q('Hàm trung bình cộng?', ['AVG (rút gọn average)', 'AVERAGE', 'MEAN (giá trị trung bình)', 'AV (rút gọn 2 chữ)'], 1, '=AVERAGE(A1:A10).'),
    Q('Hàm max/min?', ['TOP/BOTTOM', 'MAX/MIN', 'HIGH/LOW', 'BIG/SMALL'], 1, '=MAX(range), =MIN(range).'),
    Q('Tham chiếu tuyệt đối?', ['$A1 (chỉ cố định cột A)', 'A$1 (chỉ cố định dòng 1)', '$A$1', 'A1 (tham chiếu tương đối)'], 2, '$ cố định cột và dòng. Khi sao chép công thức, $A$1 không đổi.'),
  ]),

  M(16, 'Bảng tính — Hàm logic IF', [
    Q('Cú pháp hàm IF?', ['IF(đk THEN x ELSE y)', 'IF(x, đk, y)', 'IF(điều_kiện, giá_trị_đúng, giá_trị_sai)', 'IF đk: x else y'], 2, '=IF(A1>=5, "Đậu", "Trượt").'),
    Q('IF lồng (nested IF) khi?', ['Sai cú pháp', 'Nhiều điều kiện liên tiếp', '1 điều kiện', 'Không có điều kiện'], 1, '=IF(A1>=9,"Giỏi",IF(A1>=7,"Khá","TB")) — nested IF.'),
    Q('Hàm thay thế nested IF từ Excel 2016?', ['WHEN (điều kiện đa nhánh)', 'CASE (như SQL)', 'SWITCH', 'IFS'], 3, 'IFS(cond1,val1, cond2,val2,…) gọn hơn nested IF.'),
    Q('Hàm AND, OR dùng để?', ['Tính tổng', 'Lọc dữ liệu', 'Tìm max', 'Kết hợp nhiều điều kiện trong IF'], 3, 'AND/OR trả True/False, dùng trong IF: =IF(AND(A>=5,B>=5),…).'),
    Q('Hàm COUNTIF đếm?', ['Số dòng', 'Trung bình', 'Số ô thoả điều kiện', 'Tổng ô'], 2, '=COUNTIF(range, "criteria") đếm ô thoả điều kiện.'),
  ]),

  M(17, 'Biểu đồ trong bảng tính', [
    Q('Tạo biểu đồ trong Excel/Sheets?', ['Format', 'Chọn dữ liệu → Insert → Chart', 'View → Zoom', 'File → Print'], 1, 'Chọn vùng dữ liệu → Insert → Chart, chọn loại.'),
    Q('Biểu đồ cột (column) dùng cho?', ['Quan hệ 2 biến', 'Xu hướng theo thời gian dài', 'So sánh giá trị giữa các nhóm', 'Hiển thị tỉ lệ %'], 2, 'Cột phù hợp so sánh các nhóm rời rạc.'),
    Q('Biểu đồ tròn (pie) dùng cho?', ['So sánh xu hướng', 'Dữ liệu thời gian', 'Thể hiện tỉ lệ phần trăm của 1 tổng', 'Quan hệ biến'], 2, 'Pie chart phù hợp tỉ lệ thành phần trong 1 tổng.'),
    Q('Biểu đồ đường (line) dùng cho?', ['Phân loại', 'So sánh nhóm', 'Tỉ lệ phần trăm', 'Thể hiện xu hướng theo thời gian'], 3, 'Line chart thể hiện sự thay đổi giá trị theo thời gian/thứ tự.'),
    Q('Tiêu đề biểu đồ chỉnh ở?', ['File → Page Setup', 'Chart Title hoặc Customize → Chart title', 'Print → Header', 'Insert'], 1, 'Chart Title (Excel) hoặc Customize → Chart & axis titles (Sheets).'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Python in màn hình dùng?', ['print()', 'write()', 'echo (như PHP/Shell)', 'cout (như C++)'], 0, 'print().'),
    Q('Vòng lặp xác định số lần dùng?', ['if (cấu trúc rẽ nhánh)', 'while (lặp không xác định)', 'for', 'def (khai báo hàm)'], 2, 'for lặp với số lần biết trước (range).'),
    Q('a = [1,2,3]. a[1] = ?', ['3', '2', 'IndexError (vượt phạm vi)', '1'], 1, 'Chỉ số 1 → phần tử thứ 2.'),
    Q('Hàm SUM trong Excel?', ['=SUM(A1:A10)', 'SUM A1:A10', '+SUM', 'sum(A1:A10)'], 0, 'Excel.'),
    Q('Tạo cấu trúc tiêu đề trong Word dùng?', ['Color (đổi màu chữ)', 'Size (đổi cỡ chữ)', 'Heading 1, 2, 3', 'Font (đổi phông chữ)'], 2, 'Heading.'),
  ]),

  // ──────────────── HK2: THUẬT TOÁN SẮP XẾP + ĐẠO ĐỨC SỐ ────────────────
  M(19, 'Thuật toán sắp xếp — Khái niệm', [
    Q('Sắp xếp là?', ['Tìm kiếm', 'Xoá phần tử trùng nhau', 'Sắp các phần tử theo thứ tự (tăng/giảm)', 'Thêm phần tử mới vào dãy'], 2, 'Sắp xếp = đưa phần tử về thứ tự xác định (thường tăng dần).'),
    Q('Ứng dụng sắp xếp trong đời sống?', ['Chỉ trong Toán', 'Chỉ trong máy tính', 'Sắp danh sách HS theo điểm, theo tên ABC; sắp giá hàng…', 'Không có ứng dụng'], 2, 'Rất nhiều ứng dụng: bảng điểm, danh bạ, lịch trình, tìm kiếm hiệu quả…'),
    Q('Sau khi sắp xếp tăng dần, phần tử đầu là?', ['Nhỏ nhất', 'Trung bình', 'Lớn nhất', 'Tuỳ thuật toán sắp xếp'], 0, 'Tăng dần → phần tử đầu là nhỏ nhất, cuối là lớn nhất.'),
    Q('2 thuật toán sắp xếp đơn giản học ở lớp 8?', ['Heap & Radix', 'Bucket & Bubble', 'Sắp xếp chèn (Insertion sort) và sắp xếp chọn (Selection sort)', 'Quick sort & Merge sort'], 2, 'Insertion sort và Selection sort là 2 thuật toán đơn giản, dễ hiểu.'),
    Q('Sắp xếp nhanh nhất với n lớn?', ['Insertion sort', 'Selection sort', 'Các thuật toán O(n log n) như Merge/Quick sort', 'Bubble sort'], 2, 'Với n lớn, thuật toán O(n log n) hiệu quả hơn O(n²) rất nhiều.'),
  ]),

  M(20, 'Thuật toán sắp xếp chọn (Selection sort)', [
    Q('Ý tưởng selection sort?', ['Chọn phần tử nhỏ nhất, đưa lên đầu, lặp với phần còn lại', 'Chèn mỗi phần tử vào vị trí đúng', 'Chia đôi', 'Đổi chỗ liền kề'], 0, 'Selection sort: mỗi lần chọn min của phần chưa sắp, đặt lên đầu phần đó.'),
    Q('Số lần so sánh trong selection sort cho n phần tử?', ['O(log n) — chia đôi mỗi bước', '~ n²/2 (O(n²))', 'O(n³) — ba vòng lặp lồng', 'O(n) — duyệt 1 lượt'], 1, 'Selection sort có độ phức tạp O(n²) — không phụ thuộc thứ tự đầu vào.'),
    Q('Selection sort sắp [3,1,2]. Bước 1?', ['Đổi 3 và 1 ngay vì 3>1', 'Tìm min (1), đổi với phần tử đầu → [1,3,2]', 'Đổi 3 với 2', 'Đổi 3 với 1 sau khi chèn'], 1, 'Bước 1: tìm min trong toàn dãy = 1, đổi vị trí với 3 → [1,3,2].'),
    Q('Sau bước 1, phần tử nào đã đúng vị trí?', ['Phần tử giữa (vị trí 1)', 'Chưa có', 'Phần tử đầu (vị trí 0)', 'Phần tử cuối (vị trí n-1)'], 2, 'Sau bước 1, phần tử đầu đã là min — đúng vị trí cuối cùng.'),
    Q('Ưu điểm selection sort?', ['Đơn giản, dễ cài đặt, số lần đổi chỗ ít', 'Tối ưu bộ nhớ tuyệt đối', 'Ổn định', 'Nhanh nhất'], 0, 'Selection sort dễ hiểu, số swap chỉ O(n), nhưng chậm với n lớn.'),
  ]),

  M(21, 'Thuật toán sắp xếp chèn (Insertion sort)', [
    Q('Ý tưởng insertion sort?', ['Chọn min đưa lên đầu', 'Đổi chỗ liền kề', 'Chia đôi', 'Lấy từng phần tử, chèn vào vị trí đúng trong phần đã sắp'], 3, 'Insertion sort xây dần phần đã sắp bằng cách chèn mỗi phần tử vào đúng chỗ.'),
    Q('Độ phức tạp insertion sort xấu nhất?', ['O(log n)', 'O(n²)', 'O(n) — chỉ duyệt 1 lượt', 'O(n log n)'], 1, 'Xấu nhất (đảo ngược): O(n²). Tốt nhất (đã sắp): O(n).'),
    Q('Insertion sort sắp [4,2,5,1]. Sau bước chèn 2?', ['[1,2,4,5]', '[4,5,2,1]', '[2,4,1,5]', '[2,4,5,1]'], 3, 'Chèn 2 vào trước 4 → [2,4,5,1].'),
    Q('Insertion sort tốt khi?', ['Dãy gần như đã sắp xếp', 'Dãy lớn', 'Dãy ngẫu nhiên', 'Dãy đảo ngược'], 0, 'Dãy gần sắp: O(n) — nhanh. Cũng tốt cho dãy nhỏ.'),
    Q('Insertion sort vs selection sort, sự khác biệt chính?', ['Không khác', 'Insertion chèn vào phần đã sắp; Selection chọn min cho phần chưa sắp', 'Insertion nhanh hơn luôn', 'Selection ổn định hơn luôn'], 1, 'Insertion mở rộng phần đã sắp; Selection thu hẹp phần chưa sắp.'),
  ]),

  M(22, 'Thực hành sắp xếp với Python', [
    Q('Hàm sort() có sẵn của Python sắp xếp?', ['Không thay đổi', 'Chỉ string', 'Tạo list mới', 'List tại chỗ'], 3, 'a.sort() sắp xếp list a tại chỗ; sorted(a) tạo list mới.'),
    Q('Hàm sorted() trả về?', ['a gốc đã sửa', 'TypeError nếu a có chuỗi', 'List mới đã sắp', 'None (giống a.sort())'], 2, 'sorted(a) trả list mới, không đổi a.'),
    Q('Sắp giảm dần dùng?', ['sort.desc()', 'reverse()', 'sort(reverse=True) hoặc sorted(a, reverse=True)', 'sort(desc=True)'], 2, 'Tham số reverse=True để sắp giảm dần.'),
    Q('Đổi chỗ 2 phần tử a[i], a[j] trong Python?', ['a[i], a[j] = a[j], a[i]', 'Cả A và B', 'Không đổi được', 'temp = a[i]; a[i]=a[j]; a[j]=temp'], 1, 'Python hỗ trợ swap 1 dòng: a[i], a[j] = a[j], a[i] (hoặc cách truyền thống dùng temp).'),
    Q('Sắp danh sách điểm hs = [7, 5, 9, 3] tăng dần. Kết quả?', ['[9, 7, 5, 3]', '[3, 5, 7, 9]', '[7, 5, 9, 3]', '[3, 9, 5, 7]'], 1, 'Sắp tăng: [3,5,7,9].'),
  ]),

  M(23, 'Tìm kiếm tuyến tính (Linear search)', [
    Q('Linear search hoạt động bằng?', ['Duyệt tuần tự từng phần tử, so sánh với x cần tìm', 'Băm khoá rồi tra bảng', 'Nhảy bước', 'Chia đôi'], 0, 'Linear search: kiểm tra từng phần tử cho đến khi tìm thấy hoặc hết dãy.'),
    Q('Độ phức tạp linear search xấu nhất?', ['O(1) — luôn tìm thấy ngay', 'O(n)', 'O(log n)', 'O(n²) — hai vòng lồng'], 1, 'Xấu nhất: phải duyệt toàn bộ n phần tử → O(n).'),
    Q('Khi nào linear search là cách duy nhất?', ['Mảng đã sắp tăng dần', 'Dãy đã sắp', 'Liên kết', 'Dãy chưa sắp xếp'], 3, 'Dãy chưa sắp → chỉ có thể duyệt tuần tự (không thể binary search).'),
    Q('Trong Python, kiểm tra x in list dùng?', ['Cơ chế tương đương linear search', 'Hash O(1) như set/dict', 'Không có cách', 'Binary search'], 0, 'Toán tử in trên list = linear search; trên set/dict mới là hash O(1).'),
    Q('Linear search trả về gì khi không tìm thấy?', ['Crash chương trình', 'Tự thêm', '0', '-1 (hoặc None — tuỳ quy ước)'], 3, 'Quy ước phổ biến: trả -1 hoặc None để báo không tìm thấy.'),
  ]),

  M(24, 'Tìm kiếm nhị phân (Binary search)', [
    Q('Yêu cầu đầu vào của binary search?', ['Dãy đã sắp xếp', 'Dãy đảo ngược', 'Không yêu cầu', 'Dãy ngẫu nhiên'], 0, 'Binary search BẮT BUỘC dãy đã sắp xếp.'),
    Q('Ý tưởng binary search?', ['Nhảy ngẫu nhiên', 'Chia đôi dãy, so sánh giữa, loại nửa không chứa x', 'Sắp lại', 'Duyệt tuần tự'], 1, 'Mỗi bước chia đôi dãy còn lại → loại trừ 1/2.'),
    Q('Độ phức tạp binary search?', ['O(n) — duyệt tuần tự', 'O(n²) — hai vòng lồng', 'O(log n)', 'O(1) — truy cập trực tiếp'], 2, 'Mỗi bước giảm 1/2 → log₂(n) bước.'),
    Q('Với 1 triệu phần tử, binary search cần tối đa?', ['1000', '1 triệu', '~20 bước', '10 bước'], 2, 'log₂(1.000.000) ≈ 20.'),
    Q('Binary search có nhanh hơn linear với n nhỏ?', ['Luôn chậm hơn', 'Luôn nhanh hơn', 'Bằng nhau', 'Không nhiều — nhưng vẫn nhanh hơn khi n lớn'], 3, 'Với n nhỏ chênh lệch nhỏ; với n lớn (>1000) binary search vượt trội.'),
  ]),

  M(25, 'Kiểu dữ liệu xâu (string) trong Python', [
    Q('Khai báo xâu?', ['string s = "hello"', 's = "hello" hoặc s = \'hello\'', 's := "hello"', 's = hello'], 1, 'Xâu trong nháy đơn hoặc nháy kép đều được.'),
    Q('Độ dài xâu?', ['count(s)', 's.length', 'len(s)', 's.size()'], 2, 'len(s) trả số ký tự.'),
    Q('Truy cập ký tự thứ i?', ['s[i] (i từ 0)', 's(i) (cú pháp gọi hàm)', 's.char(i)', 's.get(i)'], 0, 'Indexing từ 0: s[0] là ký tự đầu.'),
    Q('Ghép 2 xâu?', ['concat(s1, s2)', 's1.append(s2)', 's1, s2', 's1 + s2'], 3, 'Toán tử + nối 2 xâu: "abc"+"def" = "abcdef".'),
    Q('Đổi xâu thành chữ hoa?', ['upper(s)', 'UPPER(s)', 's.upper()', 's.uppercase()'], 2, 's.upper() trả xâu chữ hoa; .lower() trả chữ thường.'),
  ]),

  M(26, 'Xử lý xâu — Tách, ghép, tìm', [
    Q('Tách xâu theo dấu cách?', ['s.divide()', 's.split()', 's.cut()', 'split(s)'], 1, 's.split() tách theo khoảng trắng; s.split(",") tách theo dấu phẩy.'),
    Q('Ghép list các xâu thành 1 xâu, ngăn cách bởi -?', ['list.join("-")', 'join(list, "-")', '"-".join(list)', '"-".concat(list)'], 2, 'sep.join(iterable). VD: "-".join(["a","b","c"]) → "a-b-c".'),
    Q('Tìm vị trí xuất hiện đầu tiên của "ab" trong s?', ['s.index("ab")', 'Cả A và B (B raise lỗi nếu không có)', 's.find("ab") (-1 nếu không có)', 'Không tìm được'], 1, 'find trả -1 nếu không có; index raise ValueError.'),
    Q('Thay thế "a" bằng "b" trong s?', ['s.swap("a","b")', 's.replace("a","b")', 's("a"→"b")', 's.substitute("a","b")'], 1, 'replace(old, new) trả xâu mới.'),
    Q('Đếm số ký tự "a" trong xâu?', ['s.find("a")', 'count(s, "a")', 's.count("a")', 'len(s, "a")'], 2, 'count(x) đếm số lần xuất hiện.'),
  ]),

  M(27, 'Kiểu từ điển (dictionary)', [
    Q('Tạo dictionary?', ['d = key:value', 'd = {"key1": "value1"}', 'd = ("key", "value")', 'd = ["key", "value"]'], 1, 'Dict dùng dấu {} với cặp khoá:giá_trị.'),
    Q('Truy cập giá trị theo khoá?', ['Cả A và B', 'd["key"]', 'd.get("key") (cũng được)', 'd.key (truy cập như thuộc tính)'], 0, 'Cả d["key"] và d.get("key") — get an toàn hơn (không lỗi nếu thiếu).'),
    Q('Thêm cặp khoá-giá trị?', ['d.add(key, value)', 'd.insert(key, value)', 'd["new_key"] = value', 'd + (key, value)'], 2, 'Gán giá trị cho khoá mới = thêm cặp mới.'),
    Q('Duyệt mọi khoá trong dict?', ['for k in d.items()', 'for k in d:', 'for k in d.values()', 'for k in d.keys() (cũng được)'], 1, 'for k in d duyệt khoá; values() duyệt giá trị; items() duyệt cặp.'),
    Q('Ứng dụng dictionary?', ['Sắp xếp', 'Đếm tần suất, ánh xạ tên→điểm, mã→thông tin', 'Tìm kiếm', 'Cộng số'], 1, 'Dict rất tốt để lưu dữ liệu dạng ánh xạ key→value.'),
  ]),

  M(28, 'An toàn thông tin — Mật khẩu mạnh và xác thực 2 yếu tố', [
    Q('Mật khẩu mạnh có?', ['Tên mình', '4 chữ số', 'Ngày sinh', 'Đủ dài (≥12), kết hợp hoa-thường-số-ký_tự_đặc_biệt'], 3, 'Mật khẩu mạnh: ≥12 ký tự, đa dạng loại ký tự, không liên quan thông tin cá nhân.'),
    Q('Mật khẩu yếu?', ['20 ký tự ngẫu nhiên', '123456, password, abc123, tên-sinh-nhật', 'Mật khẩu phức tạp', 'Cụm từ dài'], 1, 'Các mật khẩu phổ biến/cá nhân rất dễ đoán/bị brute-force.'),
    Q('Xác thực 2 yếu tố (2FA) là?', ['Không có ý nghĩa', 'Cần thêm yếu tố thứ 2 (OTP, vân tay…) ngoài mật khẩu', 'Đổi mật khẩu 2 lần', '2 mật khẩu'], 1, '2FA = mật khẩu (biết) + OTP/vân tay/khoá vật lý (có/là) → an toàn hơn nhiều.'),
    Q('Quản lý nhiều mật khẩu hiệu quả bằng?', ['Đặt sticky note', 'Ghi vào notepad', 'Trình quản lý mật khẩu (Bitwarden, 1Password)', 'Dùng chung 1 mật khẩu cho tất cả'], 2, 'Password manager mã hoá lưu trữ, sinh mật khẩu mạnh, đồng bộ nhiều thiết bị.'),
    Q('Không nên?', ['Dùng password manager', 'Dùng chung mật khẩu cho nhiều tài khoản', 'Bật 2FA', 'Đổi mật khẩu định kỳ'], 1, 'Dùng chung 1 mật khẩu = 1 nơi lộ → mọi tài khoản nguy hiểm.'),
  ]),

  M(29, 'An toàn thông tin — Lừa đảo trực tuyến (phishing)', [
    Q('Phishing là?', ['Lừa người dùng cung cấp thông tin (mật khẩu, thẻ) qua mạo danh', 'Quảng cáo', 'Phá website', 'Đánh cắp máy tính'], 0, 'Phishing = mạo danh website/email tin cậy để lừa lấy thông tin nhạy cảm.'),
    Q('Dấu hiệu email phishing?', ['Từ người quen', 'Email đẹp', 'Cảnh báo khẩn cấp, link lạ, sai chính tả, đòi mật khẩu', 'Không có link'], 2, 'Email lừa đảo thường tạo cảm giác khẩn cấp, link rút gọn, sai chính tả.'),
    Q('Khi nghi email phishing, nên?', ['Trả lời ngay', 'Click ngay để xem', 'Chuyển tiếp bạn bè', 'Không click link, kiểm tra URL gốc, xoá'], 3, 'Không tương tác, xoá ngay. Cần thì truy cập trực tiếp website chính thức.'),
    Q('Website giả mạo có URL?', ['Khác URL chính thức (sai chính tả, domain lạ)', 'Giống hệt URL chính thức', 'Luôn có HTTPS', 'Không có URL'], 0, 'URL giả thường sai chính tả 1 chữ (faceb00k.com, google-login.com…).'),
    Q('Khi vô tình nhập mật khẩu vào trang giả?', ['Vứt máy', 'Không sao', 'Im lặng', 'Đổi mật khẩu ngay, bật 2FA, kiểm tra hoạt động lạ'], 3, 'Phản ứng nhanh: đổi mật khẩu, bật 2FA, kiểm tra giao dịch/đăng nhập bất thường.'),
  ]),

  M(30, 'Phần mềm độc hại (malware) và phòng tránh', [
    Q('Malware gồm?', ['Virus, trojan, ransomware, spyware, adware', 'Chỉ virus', 'Game online', 'Phần mềm thật'], 0, 'Malware = phần mềm độc hại nhiều loại.'),
    Q('Ransomware làm gì?', ['Tăng tốc máy', 'Mã hoá dữ liệu, đòi tiền chuộc để giải mã', 'Theo dõi vị trí', 'Quảng cáo'], 1, 'Ransomware mã hoá file người dùng, đòi tiền (thường bitcoin) để giải mã.'),
    Q('Spyware làm gì?', ['Đòi tiền', 'Theo dõi hoạt động, đánh cắp thông tin', 'Tăng tốc máy', 'Hiện quảng cáo'], 1, 'Spyware lén lút thu thập thông tin người dùng.'),
    Q('Phòng tránh malware bằng?', ['Cài chương trình diệt virus, không click link/file lạ, cập nhật HĐH', 'Mở mọi file', 'Tải software lậu', 'Tắt antivirus'], 0, 'Antivirus + thói quen an toàn + cập nhật bản vá là tổ hợp phòng tránh chính.'),
    Q('Tin nhắn lạ kèm link, nên?', ['Click thử', 'Chuyển tiếp', 'Không click, xoá', 'Bấm vào'], 2, 'Không bấm link lạ kể cả từ người quen (có thể tài khoản họ bị hack).'),
  ]),

  M(31, 'Đạo đức số — Quyền tác giả trong môi trường số', [
    Q('Quyền tác giả là?', ['Quyền sở hữu tài sản vật chất', 'Quyền của tác giả với tác phẩm do mình sáng tạo', 'Quyền sử dụng tự do', 'Không có khái niệm'], 1, 'Quyền tác giả bảo vệ sáng tạo trí tuệ (văn học, nghệ thuật, phần mềm…).'),
    Q('Khi tải nhạc lậu?', ['Khôn ngoan', 'Hợp pháp', 'Vi phạm quyền tác giả', 'Không sao'], 2, 'Tải nhạc/phim/sách không có giấy phép = vi phạm bản quyền.'),
    Q('Khi dùng ảnh trên mạng cho bài thuyết trình?', ['Copy thoải mái', 'Cần ghi nguồn, dùng ảnh có giấy phép Creative Commons', 'Không được dùng', 'Không cần nguồn'], 1, 'Ghi nguồn + dùng ảnh CC (vd Unsplash, Wikimedia Commons) là cách đúng.'),
    Q('Phần mềm mã nguồn mở (open source)?', ['Bị cấm', 'Miễn phí tuyệt đối', 'Không có giấy phép', 'Cho phép xem, sửa, phân phối lại theo giấy phép cụ thể'], 3, 'Open source có giấy phép (MIT, GPL…) cho phép sử dụng/sửa đổi với điều kiện nhất định.'),
    Q('Đạo văn (plagiarism) là?', ['Trích dẫn có nguồn', 'Học hỏi', 'Sao chép ý/lời người khác mà không ghi nguồn', 'Tổng hợp ý có nguồn'], 2, 'Đạo văn vi phạm đạo đức học thuật và quyền tác giả.'),
  ]),

  M(32, 'Đạo đức số — Ứng xử trên mạng xã hội', [
    Q('Ứng xử văn minh trên mạng?', ['Đe doạ', 'Tôn trọng, lịch sự, không công kích cá nhân', 'Bóc phốt', 'Chửi bới'], 1, 'Trên mạng cần ứng xử như đời thực: tôn trọng, lịch sự, không xúc phạm.'),
    Q('Trước khi đăng bài, cần?', ['Không cần kiểm', 'Sao chép thoải mái', 'Đăng ngay', 'Kiểm chứng thông tin, suy nghĩ về hệ quả'], 3, 'Suy nghĩ về tính xác thực và tác động trước khi đăng.'),
    Q('Khi gặp bắt nạt mạng?', ['Trả thù', 'Tự xử lý mình', 'Báo người lớn, chặn, lưu bằng chứng, báo cảnh sát nếu nghiêm trọng', 'Im lặng chịu đựng'], 2, 'Báo người lớn, lưu chứng cứ, dùng tính năng chặn, báo cảnh sát nếu nghiêm trọng.'),
    Q('Chia sẻ tin giả (fake news) có hậu quả?', ['Có lợi', 'Lan truyền thông tin sai, có thể bị xử phạt theo Luật An ninh mạng', 'Tăng like', 'Không sao'], 1, 'Luật An ninh mạng VN xử phạt việc lan truyền tin sai, gây ảnh hưởng XH.'),
    Q('Bảo vệ quyền riêng tư online?', ['Đăng địa chỉ', 'Cài đặt quyền riêng tư cao, không chia sẻ thông tin nhạy cảm', 'Chia sẻ mọi thứ', 'Đăng số CMND'], 1, 'Cài private, không đăng thông tin cá nhân nhạy cảm (CMND, địa chỉ, ảnh nhạy cảm…).'),
  ]),

  M(33, 'Trí tuệ nhân tạo (AI) trong đời sống', [
    Q('AI có thể làm gì?', ['Mọi thứ con người làm', 'Chỉ chơi game', 'Không có ứng dụng', 'Nhận diện hình ảnh, dịch ngôn ngữ, trợ lý ảo, gợi ý nội dung'], 3, 'AI ứng dụng rất rộng: nhận diện ảnh, NLP, trợ lý, gợi ý phim/sản phẩm…'),
    Q('Trợ lý ảo phổ biến?', ['Word, Excel', 'Photoshop', 'Notepad', 'Siri, Google Assistant, Alexa, ChatGPT'], 3, 'Các trợ lý ảo tích hợp AI.'),
    Q('AI có thay thế con người hoàn toàn?', ['Không liên quan', 'Tuỳ ngành', 'Có, thay hết', 'Không — AI là công cụ hỗ trợ, không có cảm xúc/trực giác con người'], 3, 'AI hỗ trợ rất tốt nhưng không thay thế hoàn toàn — vẫn cần con người định hướng, đánh giá.'),
    Q('Khi dùng AI làm bài tập, cần?', ['Trả tiền cho AI', 'Tham khảo, KHÔNG copy nguyên — học để hiểu', 'Copy 100%', 'Không bao giờ dùng'], 1, 'AI là trợ lý học tập, không phải máy làm bài thay. Hiểu mới quan trọng.'),
    Q('Rủi ro của AI?', ['Tuyệt đối an toàn', 'Mất quyền riêng tư, thiên lệch, deepfake, mất việc làm', 'Chỉ rủi ro kỹ thuật', 'Không có rủi ro'], 1, 'AI có rủi ro: thiên lệch dữ liệu, lừa đảo deepfake, vấn đề quyền riêng tư…'),
  ]),

  M(34, 'Dự án — Lập trình giải bài toán nhỏ', [
    Q('Quy trình giải bài toán bằng máy tính?', ['Bắt đầu từ kết quả', 'Tuỳ ý, không có quy trình', 'Viết code ngay', 'Xác định bài toán → Thiết kế thuật toán → Viết chương trình → Kiểm thử'], 3, '4 bước chuẩn: hiểu bài → thuật toán → code → test.'),
    Q('Khi chương trình chạy sai, cần?', ['Debug — tìm và sửa lỗi', 'Viết lại từ đầu', 'Bỏ qua', 'Đổi máy'], 0, 'Debug = quá trình tìm và sửa lỗi (bug) trong chương trình.'),
    Q('Loại lỗi trong lập trình?', ['Chỉ syntax', 'Chỉ logic', 'Lỗi cú pháp (syntax) và lỗi logic', 'Không có lỗi'], 2, '2 loại chính: syntax (sai cú pháp, không chạy được) và logic (chạy nhưng sai kết quả).'),
    Q('Kiểm thử chương trình bằng?', ['Nhập nhiều bộ dữ liệu khác nhau, so kết quả với mong đợi', 'Chỉ 1 input', 'Tin tưởng tuyệt đối', 'Không kiểm'], 0, 'Test với nhiều bộ dữ liệu: cơ bản, biên, đặc biệt — đảm bảo đúng mọi trường hợp.'),
    Q('Khi làm dự án nhóm cần?', ['1 người làm tất', 'Không liên lạc', 'Phân công, dùng Git/Google Drive để cộng tác', 'Mỗi người làm riêng'], 2, 'Phân công rõ ràng + công cụ cộng tác (Git, Google Drive, Trello) là chìa khoá.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Vòng lặp xác định trong Python?', ['if (cấu trúc rẽ nhánh)', 'while (lặp không biết trước)', 'def (khai báo hàm)', 'for'], 3, 'for biết trước số lần.'),
    Q('Sắp xếp list a tăng dần?', ['a.order()', 'sort(a)', 'a.sort()', 'a.up()'], 2, 'Method có sẵn.'),
    Q('Binary search yêu cầu?', ['Không yêu cầu', 'Dãy đảo', 'Dãy ngẫu nhiên', 'Dãy đã sắp xếp'], 3, 'Điều kiện bắt buộc.'),
    Q('Phishing là?', ['Bản quyền', 'Lừa đảo lấy thông tin', 'Quảng cáo', 'Phần mềm độc hại'], 1, 'Định nghĩa.'),
    Q('Tham chiếu tuyệt đối trong Excel?', ['$A$1', 'A1 (tham chiếu tương đối)', '#A#1 (dùng dấu thăng)', '@A@1 (dùng dấu a còng)'], 0, '$ cố định.'),
  ]),
];

export const S8TIN_SCENARIOS = indexBy(S8TIN_WEEKS);
