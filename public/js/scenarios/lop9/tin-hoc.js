// ============================================================
// Lớp 9 · TIN HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018: Python nâng cao + Web cơ bản + ATTT + AI + nghề CNTT.
// 4–5 câu/tuần · ID prefix: "S9TIN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S9TIN', 'tin-hoc', n, title, qs, opts);

export const S9TIN_WEEKS = [
  // ───── HK1 — Python nâng cao + Web cơ bản ─────
  M(1, 'Ôn tập Python cơ bản', [
    Q('Câu lệnh in ra màn hình trong Python?', ['printf()', 'print()', 'echo()', 'console.log'], 1, 'Hàm print() in dữ liệu ra màn hình.'),
    Q('Kiểu dữ liệu số nguyên trong Python?', ['int', 'integer', 'int32', 'number'], 0, 'int là kiểu số nguyên trong Python.'),
    Q('Khai báo biến cần?', ['Khai báo public', 'Khai báo kiểu', 'Khai báo var', 'Không cần khai báo kiểu (tự suy luận)'], 3, 'Python là ngôn ngữ động: x = 5 là đủ.'),
    Q('Câu lệnh điều kiện?', ['when then', 'switch case', 'if … elif … else', 'if … then … endif'], 2, 'Python dùng if/elif/else cho rẽ nhánh.'),
    Q('Vòng lặp for chạy trên?', ['Chỉ số', 'Chỉ chuỗi', 'Chỉ list', 'Mọi đối tượng lặp được (iterable)'], 3, 'for chạy trên mọi iterable: list, tuple, dict, str...'),
  ]),

  M(2, 'List — Khai báo và thao tác', [
    Q('Khai báo list rỗng?', ['a = ()', 'a = []', 'a = ""', 'a = {}'], 1, '[] tạo list rỗng; {} là dict/set; () là tuple.'),
    Q('Thêm phần tử vào cuối list?', ['insert()', 'push()', 'append()', 'extend()'], 2, 'list.append(x) thêm x vào cuối.'),
    Q('Truy cập phần tử thứ 3 của a?', ['a[3] (nhầm index từ 1)', 'a.at(3)', 'a.get(2)', 'a[2]'], 3, 'Python index từ 0; phần tử thứ 3 là a[2].'),
    Q('Xoá phần tử theo index?', ['remove(i)', 'remove(value) (xoá theo giá trị, không theo index)', 'delete', 'del a[i] hoặc a.pop(i)'], 3, 'del a[i] hoặc a.pop(i) xoá theo vị trí.'),
    Q('Lấy độ dài list?', ['count(a)', 'a.size()', 'a.length', 'len(a)'], 3, 'len(a) trả về độ dài.'),
  ]),

  M(3, 'List — Slicing và phép toán', [
    Q('a[1:4] trả về?', ['1, 2, 3, 4', 'Chỉ index 4', 'Phần tử index 1, 2, 3', '1 đến 4'], 2, 'Slicing a[start:stop] không bao gồm stop.'),
    Q('a[::-1] làm gì?', ['Sắp xếp', 'Sao chép', 'Xoá phần tử cuối list', 'Đảo ngược list'], 3, '[::-1] đảo ngược chuỗi/list.'),
    Q('a + b với 2 list?', ['Thay thế', 'Cộng từng phần tử', 'Nối 2 list thành list mới', 'Cộng phần tử cùng vị trí của 2 list'], 2, '+ nối 2 list.'),
    Q('a * 3 với list a?', ['Sắp xếp', 'Nhân mỗi phần tử của a với 3', 'Nhân từng phần tử', 'Lặp list 3 lần'], 3, '* lặp lại list.'),
    Q('Sắp xếp list a tăng dần?', ['a.order()', 'a.asc()', 'sort(a)', 'a.sort() hoặc sorted(a)'], 3, 'sort() sửa list gốc; sorted() trả về list mới.'),
  ]),

  M(4, 'Tuple và Set', [
    Q('Tuple khác list ở?', ['Có thể sửa', 'Không thể sửa (immutable)', 'Không có index', 'Có index từ 1'], 1, 'Tuple bất biến, không sửa được sau khi tạo.'),
    Q('Khai báo tuple?', ['t = [1,2,3]', 't = {1,2,3}', 't = (1, 2, 3)', 't = <1,2,3>'], 2, '() tạo tuple.'),
    Q('Set là?', ['Tập hợp không trùng lặp, không thứ tự', 'List có thứ tự', 'Dãy có thứ tự, không đổi giá trị được', 'Cặp key-value có thứ tự'], 0, 'Set chứa các phần tử duy nhất, không thứ tự.'),
    Q('Khai báo set rỗng?', ['s = ()', 's = set()', 's = {}', 's = []'], 1, '{} là dict; phải dùng set() cho set rỗng.'),
    Q('Phép toán tập hợp?', ['union, intersection, difference', 'concat, split, join', 'add, remove', 'append'], 0, 'Set hỗ trợ các phép toán tập hợp toán học.'),
  ]),

  M(5, 'Dictionary (dict)', [
    Q('Dict là?', ['Dãy phần tử có chỉ số nguyên', 'Dãy ký tự có thứ tự', 'Tập hợp', 'Cặp key-value'], 3, 'Dict lưu cặp key-value.'),
    Q('Khai báo dict?', ['d = (a=1, b=2)', 'd = {"a": 1, "b": 2}', 'd = [a:1, b:2]', 'd = <a:1>'], 1, '{} với cặp key:value tạo dict.'),
    Q('Truy cập value theo key?', ['d.a (chỉ với JS)', 'd["a"] hoặc d.get("a")', 'd{"a"}', 'd.key("a")'], 1, 'd[key] hoặc d.get(key); get an toàn hơn (không lỗi nếu thiếu).'),
    Q('Thêm/sửa cặp key-value?', ['d.push("c", 3)', 'd["c"] = 3', 'd.insert(c, 3)', 'd.add(c, 3)'], 1, 'Gán d[key] = value để thêm/sửa.'),
    Q('Duyệt dict?', ['for x in d', 'for k in d.keys()', 'Cả ba đều được', 'for k, v in d.items()'], 2, 'Có nhiều cách duyệt dict; items() lấy cả key-value.'),
  ]),

  M(6, 'String — Xử lý chuỗi', [
    Q('Độ dài chuỗi s?', ['len(s)', 'count(s)', 's.length', 's.size()'], 0, 'len(s) trả độ dài chuỗi.'),
    Q('Tách chuỗi theo dấu phẩy?', ['s.divide(",")', 's.split(",")', 's.cut(",")', 's.parse(",")'], 1, 'split(sep) tách chuỗi thành list.'),
    Q('Nối các phần tử list thành chuỗi?', ['list.join(",")', '",".join(list)', 'list.concat(",")', 'join(list, ",")'], 1, '",".join(list) là cách nối chuẩn Python.'),
    Q('Chuyển hoa?', ['s.uppercase', 'UPPER(s)', 's.toUpper()', 's.upper()'], 3, 'upper() chuyển sang chữ hoa.'),
    Q('Định dạng chuỗi hiện đại?', ['"Xin chào " + name', 'format', 'sprintf', 'f"Xin chào {name}"'], 3, 'f-string (PEP 498) là cách hiện đại và nhanh.'),
  ]),

  M(7, 'File I/O — Đọc/ghi file', [
    Q('Mở file để đọc?', ['open("a.txt", "r")', 'read("a.txt")', 'open("a.txt")', 'file.open("a.txt", "r")'], 0, 'open(path, mode) mở file; "r" là read.'),
    Q('Đọc toàn bộ file?', ['f.full()', 'f.all()', 'f.read()', 'f.scan()'], 2, 'f.read() đọc hết.'),
    Q('Đọc từng dòng?', ['f.next()', 'f.line()', 'f.row()', 'f.readline() hoặc for line in f'], 3, 'readline() đọc 1 dòng; for line in f duyệt từng dòng.'),
    Q('Ghi file?', ['open(path, "w") rồi f.write()', 'f.put()', 'f.save()', 'f.set()'], 0, '"w" mở để ghi (xoá cũ); "a" để nối thêm.'),
    Q('Cách an toàn để mở file?', ['Cả với đều được', 'open() rồi close()', 'with open(...) as f:', 'try-finally'], 2, 'with tự động đóng file dù có lỗi xảy ra.'),
  ]),

  M(8, 'OOP cơ bản — Class và Object', [
    Q('Class trong Python?', ['object Ten', 'Class Ten {}', 'class Ten:', 'def Ten():'], 2, 'class Ten: định nghĩa lớp.'),
    Q('Hàm khởi tạo?', ['init()', '__new__(cls)', '__init__(self)', 'constructor()'], 2, '__init__ là constructor trong Python.'),
    Q('Tham số self là?', ['Hằng số', 'Module', 'Lớp cha', 'Tham chiếu đến đối tượng hiện tại'], 3, 'self trỏ tới instance hiện tại.'),
    Q('Tạo đối tượng?', ['obj = create Ten', 'obj = Ten.new()', 'obj = new Ten()', 'obj = Ten()'], 3, 'Gọi tên class như hàm để tạo instance.'),
    Q('Phương thức là?', ['Hằng số', 'Hàm bên trong class, có self ở tham số đầu', 'Module', 'Biến của class'], 1, 'Method là hàm trong class với tham số đầu là self.'),
  ]),

  M(9, 'OOP — Kế thừa và Encapsulation', [
    Q('Kế thừa trong Python?', ['class Con(Cha):', 'class Con < Cha', 'inherit Cha', 'class Con extends Cha'], 0, 'class Con(Cha): kế thừa từ Cha.'),
    Q('Lớp con tự động có?', ['Toàn bộ thuộc tính và phương thức của lớp cha', 'Chỉ phương thức', 'Chỉ thuộc tính', 'Chỉ các thuộc tính/phương thức public'], 0, 'Lớp con kế thừa cả thuộc tính + phương thức.'),
    Q('Ghi đè phương thức?', ['Dùng @override', 'Không thể', 'Định nghĩa lại trong lớp con', 'Tự động'], 2, 'Ghi đè (override) bằng cách định nghĩa lại trong lớp con.'),
    Q('Tiền tố _ trong tên biến nghĩa là?', ['Biến toàn cục (global)', 'Hằng số không đổi', 'Quy ước biến nội bộ (private theo quy ước)', 'Public'], 2, '_ là quy ước "private" trong Python (không cưỡng chế).'),
    Q('Phương thức đặc biệt __str__ làm gì?', ['Định dạng chuỗi khi in đối tượng', 'Khởi tạo', 'So sánh', 'Giải phóng bộ nhớ khi xoá đối tượng'], 0, '__str__ trả về chuỗi đại diện khi print(obj).'),
  ]),

  M(10, 'Thực hành Python tổng hợp', [
    Q('Hàm tính tổng list?', ['total(list)', 'list.sum()', 'add(list)', 'sum(list)'], 3, 'sum() trả tổng các phần tử số.'),
    Q('Tìm max?', ['top(list)', 'list.max()', 'big(list)', 'max(list)'], 3, 'max() trả phần tử lớn nhất.'),
    Q('Lọc list giữ phần tử chẵn?', ['list.where()', 'filter(a, even)', 'a.filter(x%2==0)', '[x for x in a if x%2==0]'], 3, 'List comprehension là cách Pythonic.'),
    Q('Đảo ngược chuỗi s?', ['reverse(s)', 's[::-1]', 's.flip()', 's.reverse()'], 1, '[::-1] là slicing đảo ngược.'),
    Q('Kiểm tra phần tử x có trong list a?', ['a.has(x)', 'find(x, a)', 'a.contains(x)', 'x in a'], 3, 'Toán tử in kiểm tra tồn tại.'),
  ]),

  M(11, 'HTML — Cấu trúc trang web', [
    Q('HTML viết tắt?', ['High Tech ML', 'HyperText Markup Language', 'Home Text Multi Lang', 'Hyper Tool ML'], 1, 'HTML = HyperText Markup Language.'),
    Q('Thẻ tiêu đề lớn nhất?', ['<h0>', '<head>', '<h1>', '<title>'], 2, 'h1 là tiêu đề cấp 1 (lớn nhất); h6 nhỏ nhất.'),
    Q('Thẻ đoạn văn?', ['<para>', '<paragraph>', '<p>', '<text>'], 2, '<p> là paragraph (đoạn văn).'),
    Q('Thẻ chèn ảnh?', ['<photo>', '<img src="..." alt="...">', '<image>', '<picture>'], 1, '<img> với thuộc tính src và alt.'),
    Q('Thẻ liên kết?', ['<link>', '<link href="...">', '<a href="...">', '<href>'], 2, '<a href="..."> tạo siêu liên kết.'),
  ]),

  M(12, 'HTML — Form và bảng', [
    Q('Thẻ form?', ['<input>', '<form action="..." method="...">', '<field>', '<submit>'], 1, '<form> tạo biểu mẫu.'),
    Q('Ô nhập text?', ['<field>', '<input>', '<input type="text">', '<text>'], 2, '<input type="text"> tạo ô nhập 1 dòng.'),
    Q('Nút gửi form?', ['<send>', '<button type="submit"> hoặc <input type="submit">', '<button onclick="send()">', '<submit-button>'], 1, 'submit gửi form.'),
    Q('Bảng trong HTML dùng?', ['<matrix>', '<table>, <tr>, <td>', '<board>', '<grid>, <row>, <cell>'], 1, '<table> là khung; <tr> là hàng; <td> là ô.'),
    Q('Tiêu đề ô bảng?', ['<th>', '<thead>', '<title>', '<head>'], 0, '<th> là table header.'),
  ]),

  M(13, 'CSS — Định dạng cơ bản', [
    Q('CSS viết tắt?', ['Custom Style Sheet', 'Computer Style Sheet', 'Common Style Set', 'Cascading Style Sheets'], 3, 'CSS = Cascading Style Sheets.'),
    Q('Cách nhúng CSS từ file riêng?', ['<style href="style.css">', '<style src=...>', '<import>', '<link rel="stylesheet" href="...">'], 3, '<link> dùng để gắn file css ngoài.'),
    Q('Quy tắc CSS gồm?', ['selector = value', 'property: selector', 'value -> selector', 'selector { property: value; }'], 3, 'selector { thuộc tính: giá trị; } là cú pháp chuẩn.'),
    Q('Chọn theo class?', ['#tenId', '*tenClass', '.tenClass', 'tenTag'], 2, '.class chọn theo class; #id theo id.'),
    Q('Đặt màu chữ?', ['fg-color: red;', 'font-color: red;', 'color: red;', 'text-color: red;'], 2, 'Thuộc tính color đặt màu chữ.'),
  ]),

  M(14, 'CSS — Box model và Layout', [
    Q('Box model gồm?', ['content + padding + border + margin', 'padding + margin', 'border + padding', 'margin + content'], 0, 'Box model: nội dung + padding + viền + lề.'),
    Q('Padding là?', ['Đường viền bao quanh phần tử', 'Khoảng cách ngoài', 'Khoảng cách trong giữa content và border', 'Khoảng cách giữa border và phần tử bên ngoài'], 2, 'Padding là khoảng trống bên trong viền.'),
    Q('Margin là?', ['Khoảng trong', 'Khoảng cách ngoài giữa border và phần tử khác', 'Khoảng cách giữa content và border', 'Đường viền bao quanh phần tử'], 1, 'Margin là khoảng cách ngoài viền.'),
    Q('Flexbox dùng để?', ['Animation', 'Hiển thị trang in (print stylesheet)', 'Tạo layout dạng bảng cứng', 'Bố cục 1 chiều linh hoạt'], 3, 'Flexbox cho phép bố cục linh hoạt 1 chiều.'),
    Q('display: none làm gì?', ['Đổi màu', 'Làm trong suốt', 'Ẩn phần tử hoàn toàn', 'Thu nhỏ'], 2, 'display:none ẩn và không chiếm không gian.'),
  ]),

  M(15, 'JavaScript căn bản', [
    Q('JS thường nhúng trong HTML qua thẻ?', ['<javascript>', '<code>', '<lang>', '<script>'], 3, '<script> nhúng JS.'),
    Q('Khai báo biến hiện đại?', ['def x = 0', 'let, const', 'var only', 'declare'], 1, 'let cho biến thay đổi, const cho hằng (ES6+).'),
    Q('In ra console?', ['print()', 'output()', 'echo()', 'console.log()'], 3, 'console.log() ra console trình duyệt.'),
    Q('Sự kiện click?', ['on.click', 'when click', 'onclick hoặc addEventListener("click", fn)', 'click.add'], 2, 'addEventListener là cách hiện đại.'),
    Q('Lấy phần tử theo id?', ['query("...")', 'select("...")', 'document.getElementById("...")', 'find("...")'], 2, 'document.getElementById hoặc document.querySelector.'),
  ]),

  M(16, 'Tạo trang web đơn giản', [
    Q('File HTML mở bằng?', ['Trình duyệt', 'Trình biên dịch C++', 'Photoshop', 'Trình soạn thảo Word'], 0, 'HTML hiển thị trên browser.'),
    Q('Tách HTML + CSS + JS giúp?', ['Tốn dung lượng hơn', 'Đẹp hơn', 'Dễ bảo trì, tách concerns', 'Chạy nhanh hơn'], 2, 'Separation of concerns: HTML cấu trúc, CSS trình bày, JS hành vi.'),
    Q('Đặt tên file trang chủ thường?', ['main.html', 'home.html', 'start.html', 'index.html'], 3, 'index.html là quy ước cho trang chủ.'),
    Q('Responsive web là?', ['Không liên quan', 'Chỉ chạy mobile', 'Tự thích ứng kích thước màn hình', 'Chỉ desktop'], 2, 'Responsive web design thích ứng đa thiết bị.'),
  ]),

  M(17, 'Triển khai trang web đơn giản', [
    Q('Hosting là?', ['Tên miền', 'Trình duyệt', 'Code editor', 'Dịch vụ lưu trữ trang web trên server'], 3, 'Hosting cung cấp máy chủ cho website.'),
    Q('Tên miền (domain) ví dụ?', ['index.html', 'google.com, tizia.vn', 'https', 'css'], 1, 'Tên miền là địa chỉ "thân thiện" của website.'),
    Q('Hosting miễn phí phổ biến?', ['GitHub Pages, Netlify, Vercel', 'Notepad', 'Microsoft Word', 'Google Sheets'], 0, 'GitHub Pages, Netlify, Vercel là dịch vụ hosting tĩnh phổ biến.'),
    Q('Trước khi public web, cần?', ['Chỉ xem trên máy mình rồi up', 'Kiểm tra trên nhiều trình duyệt và thiết bị', 'Không cần test', 'Up luôn'], 1, 'Cross-browser testing đảm bảo trải nghiệm đồng đều.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('List, tuple, set, dict khác nhau ở?', ['Tính chất: thứ tự, trùng lặp, mutable', 'Tên gọi', 'Cú pháp giống nhau', 'Không khác'], 0, '4 cấu trúc dữ liệu có đặc điểm khác nhau.'),
    Q('OOP có 4 đặc trưng?', ['Chỉ method', 'Chỉ class', 'Chỉ object', 'Encapsulation, Inheritance, Polymorphism, Abstraction'], 3, '4 trụ cột OOP.'),
    Q('HTML + CSS + JS đảm nhận?', ['Cùng làm 1 việc', 'Cấu trúc + trình bày + hành vi', 'Cùng đảm nhận giao diện', 'Không liên quan'], 1, 'Tách concerns rõ ràng.'),
    Q('with open(...) as f: ưu điểm?', ['Mở nhanh hơn', 'Bảo mật', 'Tự đóng file', 'Không lỗi'], 2, 'with đảm bảo đóng file dù có lỗi.'),
    Q('Hosting miễn phí cho static site?', ['Google Drive', 'GitHub Pages', 'AWS EC2', 'Microsoft Word Online'], 1, 'GitHub Pages miễn phí cho static site.'),
  ]),

  // ───── HK2 — Đạo đức số + ATTT + AI + Nghề CNTT ─────
  M(19, 'Đạo đức và pháp lý số — Luật An toàn thông tin mạng', [
    Q('Luật An toàn thông tin mạng VN ban hành năm?', ['2020', '2010', '2015 (có hiệu lực 2016)', '2018'], 2, 'Luật ATTT mạng số 86/2015/QH13.'),
    Q('Luật An ninh mạng VN có hiệu lực?', ['2020', '2022', '2015', '01/01/2019'], 3, 'Luật An ninh mạng số 24/2018/QH14 có hiệu lực 01/01/2019.'),
    Q('Hành vi bị cấm trên không gian mạng?', ['Mua sắm hợp pháp', 'Học tập', 'Xuyên tạc, vu khống, kích động, lừa đảo', 'Đăng ảnh đẹp'], 2, 'Luật An ninh mạng liệt kê các hành vi bị cấm.'),
    Q('Phát tán thông tin sai sự thật trên mạng có thể bị?', ['Bỏ qua', 'Phạt hành chính hoặc xử lý hình sự', 'Không sao', 'Khen thưởng'], 1, 'Phát tán tin sai có thể bị phạt nặng theo Luật An ninh mạng.'),
    Q('HS dùng mạng đúng luật bằng?', ['Đăng tuỳ ý', 'Không chia sẻ tin sai, tôn trọng người khác, không vi phạm bản quyền', 'Gửi tin nhắn hàng loạt quảng cáo', 'Chế ảnh người khác'], 1, 'Hành vi mạng đúng luật bắt đầu từ ý thức cá nhân.'),
  ]),

  M(20, 'Bản quyền và sở hữu trí tuệ số', [
    Q('Bản quyền (copyright) bảo vệ?', ['Sáng chế', 'Tên thương hiệu', 'Tác phẩm sáng tạo: văn học, âm nhạc, code', 'Đất đai'], 2, 'Bản quyền bảo vệ tác phẩm sáng tạo nguyên gốc.'),
    Q('Sao chép code/ảnh/nhạc không xin phép là?', ['Hợp lệ', 'Vi phạm bản quyền', 'Được phép nếu chỉ dùng cá nhân', 'Khen ngợi tác giả'], 1, 'Sao chép không phép vi phạm Luật Sở hữu trí tuệ.'),
    Q('Phần mềm "free" và "open-source" khác nhau?', ['Không khác', 'Giống nhau', 'Open-source có thể đọc và sửa code; free có thể chỉ miễn phí', 'Đối lập'], 2, 'Free ≠ Open-source; open-source có quyền đọc/sửa source.'),
    Q('Giấy phép Creative Commons (CC) cho phép?', ['Bán không cần phép', 'Sao chép tuỳ ý', 'Không có điều kiện', 'Chia sẻ tác phẩm với điều kiện ghi tên tác giả, không thương mại...'], 3, 'CC có nhiều biến thể (BY, NC, SA, ND) với điều kiện cụ thể.'),
    Q('Trích dẫn nguồn khi dùng nội dung người khác?', ['Tuỳ chọn', 'Không cần', 'Bắt buộc, kể cả khi được phép', 'Chỉ khi bị nhắc'], 2, 'Trích nguồn là yêu cầu đạo đức + pháp lý.'),
  ]),

  M(21, 'An toàn thông tin — Mật khẩu mạnh', [
    Q('Mật khẩu mạnh nên?', ['Tên mình', 'Ngày sinh', '≥ 12 ký tự, gồm chữ hoa-thường-số-ký tự đặc biệt', '6 ký tự'], 2, 'Mật khẩu mạnh tối thiểu 12 ký tự với nhiều loại ký tự.'),
    Q('Không nên?', ['Dùng 1 mật khẩu cho nhiều tài khoản', 'Đổi mật khẩu định kỳ', 'Dùng mật khẩu khác nhau', 'Bật 2FA'], 0, 'Tái sử dụng mật khẩu là rủi ro lớn nếu một site bị lộ.'),
    Q('2FA (xác thực 2 bước) là?', ['Username 2 cái', 'Mật khẩu + mã OTP từ điện thoại/app', 'Mật khẩu 2 lần', 'Hỏi 2 câu'], 1, '2FA tăng độ an toàn đáng kể.'),
    Q('Password manager giúp?', ['Nhớ thay', 'Chia sẻ pass', 'Đăng nhập thay người dùng', 'Tạo + lưu mật khẩu mạnh, mỗi site một mật khẩu'], 3, 'Password manager (Bitwarden, 1Password) là công cụ an toàn quan trọng.'),
    Q('Không bao giờ?', ['Bật 2FA', 'Gửi mật khẩu qua chat/SMS, viết lên giấy nhớ chung', 'Đổi mật khẩu', 'Lưu password manager'], 1, 'Mật khẩu là thông tin tuyệt mật.'),
  ]),

  M(22, 'An toàn thông tin — OWASP Top 10 cơ bản', [
    Q('OWASP là?', ['Loại virus', 'Tổ chức phi lợi nhuận về bảo mật ứng dụng web', 'Hệ điều hành', 'Hãng phần mềm'], 1, 'OWASP = Open Web Application Security Project.'),
    Q('SQL Injection là?', ['Chèn câu SQL độc vào input để chiếm DB', 'Phần cứng', 'Loại virus', 'Loại mật khẩu'], 0, 'SQL Injection xảy ra khi input không được sanitize.'),
    Q('XSS (Cross-Site Scripting) là?', ['Tấn công mạng', 'Chèn script JS độc vào trang để chạy ở trình duyệt nạn nhân', 'Làm sập máy chủ bằng lưu lượng lớn', 'Phishing'], 1, 'XSS chèn script độc vào trang.'),
    Q('CSRF là?', ['Phần mềm tự nhân bản', 'Lừa người dùng đã đăng nhập thực hiện hành động ngoài ý muốn', 'Phá mật khẩu', 'Đánh cắp mật khẩu qua keylogger'], 1, 'CSRF = Cross-Site Request Forgery.'),
    Q('Phòng tránh OWASP cơ bản?', ['Chỉ cần đặt mật khẩu mạnh là đủ', 'Validate input, escape output, HTTPS, cập nhật phần mềm', 'Tin mọi input', 'Không cập nhật'], 1, 'Bảo mật web cần nhiều lớp phòng thủ.'),
  ]),

  M(23, 'An toàn — Phishing, malware, lừa đảo mạng', [
    Q('Phishing là?', ['Câu cá', 'Spam thường', 'Giả mạo trang web/email để lấy thông tin nhạy cảm', 'Loại virus'], 2, 'Phishing lừa người dùng cung cấp thông tin nhạy cảm.'),
    Q('Dấu hiệu email phishing?', ['Có logo công ty rõ ràng', 'Đến từ người quen', 'Có chữ ký', 'Sai chính tả, link lạ, yêu cầu gấp, đe doạ'], 3, 'Email phishing thường vội vã + có lỗi rõ ràng.'),
    Q('Malware là?', ['Trò chơi', 'Phần mềm tốt', 'Phần mềm độc hại (virus, worm, ransomware...)', 'Trình duyệt web'], 2, 'Malware = Malicious Software.'),
    Q('Ransomware là?', ['Mã hoá file đòi tiền chuộc', 'Quảng cáo', 'Chơi game', 'Tăng tốc máy'], 0, 'Ransomware là mối đe doạ nghiêm trọng.'),
    Q('Phòng tránh malware?', ['Không click link lạ, không tải phần mềm crack, cập nhật phần mềm', 'Click hết link', 'Tắt firewall để máy chạy nhanh hơn', 'Tải tự do'], 0, 'Cảnh giác + cập nhật là tuyến phòng thủ đầu tiên.'),
  ]),

  M(24, 'Bảo vệ thông tin cá nhân', [
    Q('Thông tin cá nhân quan trọng?', ['Tên trường đang học', 'Số CMND/CCCD, ngày sinh, số tài khoản, mật khẩu', 'Sở thích cá nhân', 'Biệt danh trên mạng'], 1, 'Thông tin nhạy cảm cần được bảo vệ tuyệt đối.'),
    Q('Không nên?', ['Đăng status thường', 'Đăng ảnh phong cảnh', 'Like bài bạn', 'Đăng số CCCD, vé máy bay, vé tàu lên mạng xã hội'], 3, 'Đăng giấy tờ lên mạng có thể bị lợi dụng.'),
    Q('Quyền riêng tư trên mạng?', ['Bật cài đặt riêng tư, kiểm soát ai xem được', 'Để mặc định public cho dễ kết bạn', 'Không quan tâm', 'Public tất'], 0, 'Mỗi MXH có cài đặt riêng tư; cần xem xét kỹ.'),
    Q('Wi-Fi công cộng có rủi ro?', ['Không rủi ro', 'Có; nên dùng VPN khi truy cập thông tin nhạy cảm', 'An toàn tuyệt đối', 'Nhanh hơn'], 1, 'Wi-Fi công cộng có thể bị nghe trộm.'),
    Q('Quy tắc cơ bản?', ['Đăng tuỳ ý', 'Nghĩ trước khi đăng — internet là vĩnh viễn', 'Xoá là hết', 'Không sao'], 1, 'Nội dung trên mạng khó xoá triệt để.'),
  ]),

  M(25, 'AI cơ bản — Khái niệm và ứng dụng', [
    Q('AI viết tắt?', ['Auto Internet', 'Active Info', 'Artificial Intelligence — Trí tuệ nhân tạo', 'Apple Inc.'], 2, 'AI = Trí tuệ nhân tạo.'),
    Q('Machine Learning là?', ['Sửa máy', 'Máy học từ dữ liệu để đưa ra quyết định', 'Học toán', 'Lập trình tay'], 1, 'ML là nhánh AI: máy tự học từ dữ liệu.'),
    Q('Deep Learning dựa trên?', ['Cây quyết định', 'Bảng tra cứu cố định', 'Quy tắc if-else', 'Mạng nơ-ron nhân tạo nhiều lớp'], 3, 'Deep Learning dùng deep neural networks.'),
    Q('Ứng dụng AI trong đời sống?', ['Chỉ tính toán', 'Chỉ chạy được trong phòng thí nghiệm', 'Chỉ chơi game', 'Trợ lý ảo (Siri, ChatGPT), gợi ý phim, xe tự lái, nhận diện khuôn mặt'], 3, 'AI hiện diện trong mọi mặt cuộc sống.'),
    Q('ChatGPT (LLM) là?', ['Lưu trữ', 'Mô hình ngôn ngữ lớn dự đoán văn bản kế tiếp', 'Tìm kiếm Google', 'Soạn văn bản tay'], 1, 'LLM = Large Language Model.'),
  ]),

  M(26, 'AI — Deepfake và đạo đức AI', [
    Q('Deepfake là?', ['Vẽ tay', 'Tin thật', 'Video/ảnh giả mạo do AI tạo ra trông như thật', 'Phim hoạt hình'], 2, 'Deepfake dùng AI tạo nội dung giả mạo có độ thực cao.'),
    Q('Tác hại của deepfake?', ['Có lợi', 'Vô hại', 'Bôi nhọ danh dự, lừa đảo, thao túng dư luận', 'Tốt cho XH'], 2, 'Deepfake gây hại nghiêm trọng nếu lạm dụng.'),
    Q('Cách nhận biết deepfake?', ['Nhìn lượt thích để đánh giá', 'Chia sẻ ngay', 'Quan sát chi tiết bất thường (mắt, viền tóc, ánh sáng), kiểm chứng nguồn', 'Tin ngay'], 2, 'Kỹ năng tư duy phản biện rất quan trọng.'),
    Q('Vấn đề đạo đức của AI?', ['Bias (định kiến), riêng tư, mất việc, deepfake, vũ khí tự động', 'Chỉ tốn điện máy chủ', 'Đã có pháp luật giải quyết hết', 'Chỉ tốt'], 0, 'AI có nhiều vấn đề đạo đức cần xem xét.'),
    Q('Khi dùng AI cho bài học?', ['Lừa thầy cô', 'Nộp luôn', 'Copy y nguyên', 'Dùng làm gợi ý, tự suy nghĩ và kiểm tra, ghi nguồn'], 3, 'Dùng AI có đạo đức = hỗ trợ học, không gian lận.'),
  ]),

  M(27, 'AI — Prompt engineering cơ bản', [
    Q('Prompt là?', ['Output', 'Câu lệnh/yêu cầu gửi cho AI', 'Tên AI', 'Loại model'], 1, 'Prompt là input cho LLM.'),
    Q('Prompt tốt có?', ['Dùng nhiều từ chuyên ngành khó hiểu', 'Rõ ràng, cụ thể, bối cảnh, định dạng output mong muốn', 'Không bối cảnh', 'Cụt ngủn'], 1, 'Prompt rõ ràng = output chất lượng.'),
    Q('Kỹ thuật few-shot là?', ['Yêu cầu ngắn', 'Không ví dụ', 'Hỏi 1 lần', 'Cho AI vài ví dụ trước khi yêu cầu'], 3, 'Few-shot giúp AI hiểu pattern.'),
    Q('Chain-of-thought là?', ['Yêu cầu AI đoán mò đáp án', 'Bỏ qua', 'Yêu cầu AI suy luận từng bước', 'Trả lời ngay'], 2, 'CoT tăng chất lượng câu trả lời cho bài toán suy luận.'),
    Q('Lưu ý khi dùng AI?', ['Kiểm chứng thông tin AI đưa ra, vì có thể "ảo giác"', 'Tin tuyệt đối', 'Không kiểm', 'Dùng AI làm bài kiểm tra thay mình'], 0, 'AI có thể hallucinate; luôn kiểm chứng.'),
  ]),

  M(28, 'Nghề CNTT — Tổng quan ngành', [
    Q('CNTT là?', ['Công nghệ Thông tin — ngành về xử lý và truyền thông tin bằng máy tính', 'Chỉ lập trình', 'Sửa máy tính', 'Lắp ráp'], 0, 'CNTT bao trùm phần cứng, phần mềm, mạng, dữ liệu...'),
    Q('Triển vọng nghề CNTT VN?', ['Không có việc', 'Mất giá', 'Bão hoà', 'Rất tốt, thiếu nhân lực, lương cao'], 3, 'CNTT Việt Nam đang thiếu nhân lực chất lượng cao.'),
    Q('Các mảng chính CNTT?', ['Chỉ game', 'Software, Web, Mobile, Data, AI, Security, DevOps, Cloud', 'Chỉ sửa máy', 'Chỉ web'], 1, 'CNTT có rất nhiều chuyên ngành.'),
    Q('Kỹ năng cần để học CNTT?', ['Tư duy logic, toán, tự học, ngoại ngữ (đặc biệt tiếng Anh)', 'Khéo tay', 'Hát hay', 'Không cần gì'], 0, 'CNTT cần tư duy + tự học + tiếng Anh.'),
  ]),

  M(29, 'Nghề CNTT — Developer (Lập trình viên)', [
    Q('Developer làm?', ['Thiết kế đồ hoạ', 'Lắp ráp', 'Sửa máy', 'Viết, kiểm thử, bảo trì phần mềm'], 3, 'Dev là người tạo ra phần mềm.'),
    Q('Ngôn ngữ lập trình phổ biến 2026?', ['Python, JavaScript, Java, C++, Go, Rust, TypeScript', 'Chỉ Logo', 'Chỉ Basic', 'Chỉ Pascal'], 0, 'Nhiều ngôn ngữ phổ biến tuỳ theo lĩnh vực.'),
    Q('Frontend dev?', ['Database', 'Làm giao diện người dùng (HTML/CSS/JS, React/Vue)', 'Server', 'Hardware'], 1, 'Frontend làm UI/UX trên client.'),
    Q('Backend dev?', ['Giao diện', 'Làm phần server, API, DB', 'Cấu hình router, switch mạng LAN', 'Đồ hoạ'], 1, 'Backend xử lý logic + dữ liệu trên server.'),
    Q('Full-stack dev?', ['Chỉ frontend', 'Không có ngành này', 'Cả frontend + backend', 'Chỉ backend'], 2, 'Full-stack làm cả hai mảng.'),
  ]),

  M(30, 'Nghề CNTT — Designer (UI/UX)', [
    Q('UI khác UX?', ['Đối lập', 'Không khác', 'Giống nhau', 'UI là giao diện; UX là trải nghiệm tổng thể'], 3, 'UI = User Interface; UX = User Experience.'),
    Q('Công cụ UI/UX phổ biến?', ['Figma, Adobe XD, Sketch', 'Microsoft Paint', 'Visual Studio Code', 'Notepad'], 0, 'Figma là chuẩn ngành hiện nay.'),
    Q('UX designer làm?', ['Vẽ icon', 'Chỉ phối màu và chọn font cho icon', 'Nghiên cứu người dùng, wireframe, prototype, kiểm thử khả dụng', 'Server'], 2, 'UX design tập trung vào trải nghiệm tổng thể.'),
    Q('Nguyên tắc thiết kế tốt?', ['Phức tạp', 'Đơn giản, nhất quán, dễ dùng, phản hồi rõ ràng', 'Càng nhiều màu sắc, animation càng tốt', 'Lộn xộn'], 1, 'Heuristics của Jakob Nielsen là nguyên tắc UX kinh điển.'),
  ]),

  M(31, 'Nghề CNTT — Data Analyst & Data Scientist', [
    Q('Data Analyst làm?', ['Phân tích dữ liệu để rút ra insight và làm báo cáo', 'Sửa máy', 'Lập trình game', 'Thiết kế'], 0, 'DA tập trung vào phân tích và báo cáo.'),
    Q('Data Scientist khác DA?', ['Không khác', 'Giống nhau', 'DS thiên về ML, mô hình dự đoán; DA thiên về phân tích báo cáo', 'Đối lập'], 2, 'DS dùng ML nâng cao; DA chủ yếu phân tích.'),
    Q('Công cụ Data?', ['SQL, Excel, Python, R, Power BI, Tableau', 'Chỉ Word', 'Chỉ Excel', 'Chỉ Notepad'], 0, 'Bộ công cụ Data rất phong phú.'),
    Q('Kỹ năng quan trọng?', ['Đánh máy nhanh', 'Ngoại ngữ điêu luyện', 'Thiết kế đồ hoạ 3D', 'Toán + thống kê + lập trình + kể chuyện bằng dữ liệu (data storytelling)'], 3, 'Data career cần đa kỹ năng.'),
    Q('Big Data là?', ['Dữ liệu nhập tay vào sổ', 'CSV nhỏ', 'Bảng tính dưới 1 triệu dòng', 'Dữ liệu lớn với 4V: Volume, Velocity, Variety, Veracity'], 3, 'Big Data có đặc trưng 4V.'),
  ]),

  M(32, 'Nghề CNTT — Security & DevOps', [
    Q('Cybersecurity engineer làm?', ['Phát triển trò chơi điện tử', 'Bảo vệ hệ thống, mạng khỏi tấn công mạng', 'Tấn công', 'Lập trình game'], 1, 'Security engineer bảo vệ hệ thống.'),
    Q('Ethical hacker (white hat)?', ['Hack để tìm lỗ hổng giúp tổ chức vá', 'Hack phá hoại', 'Trộm dữ liệu', 'Phát tán mã độc để thử nghiệm'], 0, 'White hat hack hợp pháp để bảo vệ.'),
    Q('DevOps là?', ['Tích hợp phát triển + vận hành phần mềm', 'Chỉ dev', 'Chỉ ops', 'Marketing'], 0, 'DevOps kết hợp Dev + Operations.'),
    Q('Công cụ DevOps phổ biến?', ['Microsoft Office Suite', 'Docker, Kubernetes, Git, Jenkins, CI/CD', 'PowerPoint', 'Photoshop, Illustrator'], 1, 'Bộ công cụ DevOps tập trung tự động hoá.'),
    Q('Cloud computing phổ biến?', ['AWS, Azure, Google Cloud', 'Local PC', 'Ổ cứng gắn ngoài', 'Đĩa CD'], 0, 'Big 3 cloud providers.'),
  ]),

  M(33, 'Ứng xử văn minh trên mạng', [
    Q('Văn hoá mạng quan trọng vì?', ['Không ai biết', 'Riêng tư', 'Chỉ ảnh hưởng đến cá nhân đăng bài', 'Mạng là không gian công cộng, ảnh hưởng nhiều người'], 3, 'Mạng có tầm ảnh hưởng rộng lớn.'),
    Q('Không nên?', ['Bình luận xúc phạm, bắt nạt online (cyberbullying), chửi bới', 'Chia sẻ kiến thức', 'Khen ngợi', 'Hỏi lịch sự'], 0, 'Cyberbullying gây hại nghiêm trọng cho tâm lý.'),
    Q('Khi bị bắt nạt online?', ['Block và xoá tài khoản kẻ bắt nạt', 'Im lặng', 'Trả đũa', 'Chụp màn hình bằng chứng, báo người lớn/cơ quan chức năng'], 3, 'Báo cáo và lưu bằng chứng là cách xử lý đúng.'),
    Q('Trước khi chia sẻ tin?', ['Kiểm chứng nguồn, đối chiếu nhiều nguồn', 'Chia ngay', 'Tin ngay', 'Chia sẻ nếu nhiều người đã chia sẻ'], 0, 'Tư duy phản biện trước khi chia sẻ.'),
    Q('Quy tắc vàng?', ['Đối xử với người khác trên mạng như ngoài đời', 'Mạng khác đời', 'Vô danh', 'Tuỳ ý mạng'], 0, 'Mạng không phải nơi vô luật pháp/đạo đức.'),
  ]),

  M(34, 'Định hướng học CNTT — Sau cấp 2', [
    Q('Để học CNTT tốt, lớp 9 cần?', ['Học chắc Toán + Tiếng Anh + Tin học cơ bản', 'Không cần gì', 'Chỉ Tin học', 'Chỉ Toán'], 0, 'Toán + Tiếng Anh + Tin học là nền tảng.'),
    Q('Trường THPT chuyên Tin?', ['Chỉ có ở các nước phát triển', 'Chỉ học sau đại học mới có', 'Chỉ đại học', 'Có ở Hà Nội (Amsterdam, KHTN, Sư Phạm), TP.HCM, các tỉnh'], 3, 'Nhiều trường chuyên có lớp Tin học.'),
    Q('Học CNTT có thể qua?', ['Chỉ đại học', 'Chỉ tự học', 'Đại học, cao đẳng, học nghề, tự học online', 'Không có cách'], 2, 'Nhiều con đường để vào CNTT.'),
    Q('Khoá học online uy tín?', ['TikTok', 'Facebook', 'Coursera, edX, Udemy, MIT OCW, freeCodeCamp', 'Diễn đàn không rõ nguồn'], 2, 'Nhiều nền tảng học online uy tín.'),
    Q('Portfolio cho dev?', ['Quen biết', 'GitHub + project cá nhân', 'CV đẹp', 'Bằng cấp'], 1, 'Portfolio thực tế quan trọng hơn bằng cấp.'),
  ]),

  M(35, 'Tổng kết môn — Liên hệ thực tế', [
    Q('Python phù hợp cho?', ['Đồ hoạ', 'Game AAA', 'Data, AI, Web backend, automation', 'Phần cứng'], 2, 'Python mạnh trong Data + AI + Web.'),
    Q('HTML/CSS/JS dùng để?', ['Lập trình hệ điều hành', 'Huấn luyện mô hình học sâu', 'Phần cứng', 'Xây trang web'], 3, 'Bộ ba web frontend cơ bản.'),
    Q('An toàn thông tin quan trọng vì?', ['Chỉ là vấn đề kỹ thuật của IT', 'Chỉ doanh nghiệp', 'Chỉ cần khi giao dịch ngân hàng', 'Bảo vệ tài sản, danh dự, quyền riêng tư'], 3, 'ATTT là quan trọng với mọi người trong thời đại số.'),
    Q('AI tốt khi?', ['Thay thế con người', 'Lạm dụng', 'Hỗ trợ con người, không thay thế tư duy', 'Gian lận'], 2, 'AI là công cụ hỗ trợ, không thay thế tư duy con người.'),
    Q('Nghề CNTT đòi hỏi?', ['Chỉ cần biết một ngôn ngữ lập trình', 'Học suốt đời, đạo đức nghề, kỹ năng cứng + mềm', 'Không cần học', 'May mắn'], 1, 'CNTT thay đổi nhanh; học suốt đời là bắt buộc.'),
  ]),
];

export const S9TIN_SCENARIOS = indexBy(S9TIN_WEEKS);
