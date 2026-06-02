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
    Q('Câu lệnh in ra màn hình trong Python?', ['print()', 'echo()', 'cout', 'console.log'], 0, 'Hàm print() in dữ liệu ra màn hình.'),
    Q('Kiểu dữ liệu số nguyên trong Python?', ['int', 'integer', 'long', 'number'], 0, 'int là kiểu số nguyên trong Python.'),
    Q('Khai báo biến cần?', ['Không cần khai báo kiểu (tự suy luận)', 'Khai báo var', 'Khai báo kiểu', 'Khai báo public'], 0, 'Python là ngôn ngữ động: x = 5 là đủ.'),
    Q('Câu lệnh điều kiện?', ['if … elif … else', 'switch case', 'when then', 'cond'], 0, 'Python dùng if/elif/else cho rẽ nhánh.'),
    Q('Vòng lặp for chạy trên?', ['Mọi đối tượng lặp được (iterable)', 'Chỉ số', 'Chỉ list', 'Chỉ chuỗi'], 0, 'for chạy trên mọi iterable: list, tuple, dict, str...'),
  ]),

  M(2, 'List — Khai báo và thao tác', [
    Q('Khai báo list rỗng?', ['a = []', 'a = {}', 'a = ()', 'a = ""'], 0, '[] tạo list rỗng; {} là dict/set; () là tuple.'),
    Q('Thêm phần tử vào cuối list?', ['append()', 'add()', 'push()', 'insert()'], 0, 'list.append(x) thêm x vào cuối.'),
    Q('Truy cập phần tử thứ 3 của a?', ['a[2]', 'a[3]', 'a(3)', 'a.3'], 0, 'Python index từ 0; phần tử thứ 3 là a[2].'),
    Q('Xoá phần tử theo index?', ['del a[i] hoặc a.pop(i)', 'remove(i)', 'delete', 'drop'], 0, 'del a[i] hoặc a.pop(i) xoá theo vị trí.'),
    Q('Lấy độ dài list?', ['len(a)', 'a.length', 'a.size()', 'count(a)'], 0, 'len(a) trả về độ dài.'),
  ]),

  M(3, 'List — Slicing và phép toán', [
    Q('a[1:4] trả về?', ['Phần tử index 1, 2, 3', '1 đến 4', '1, 2, 3, 4', 'Chỉ index 4'], 0, 'Slicing a[start:stop] không bao gồm stop.'),
    Q('a[::-1] làm gì?', ['Đảo ngược list', 'Sao chép', 'Xoá', 'Sắp xếp'], 0, '[::-1] đảo ngược chuỗi/list.'),
    Q('a + b với 2 list?', ['Nối 2 list thành list mới', 'Cộng từng phần tử', 'Lỗi', 'Thay thế'], 0, '+ nối 2 list.'),
    Q('a * 3 với list a?', ['Lặp list 3 lần', 'Nhân từng phần tử', 'Lỗi', 'Sắp xếp'], 0, '* lặp lại list.'),
    Q('Sắp xếp list a tăng dần?', ['a.sort() hoặc sorted(a)', 'a.order()', 'sort(a)', 'a.asc()'], 0, 'sort() sửa list gốc; sorted() trả về list mới.'),
  ]),

  M(4, 'Tuple và Set', [
    Q('Tuple khác list ở?', ['Không thể sửa (immutable)', 'Có thể sửa', 'Có index từ 1', 'Không có index'], 0, 'Tuple bất biến, không sửa được sau khi tạo.'),
    Q('Khai báo tuple?', ['t = (1, 2, 3)', 't = [1,2,3]', 't = {1,2,3}', 't = <1,2,3>'], 0, '() tạo tuple.'),
    Q('Set là?', ['Tập hợp không trùng lặp, không thứ tự', 'List có thứ tự', 'Dict', 'Tuple'], 0, 'Set chứa các phần tử duy nhất, không thứ tự.'),
    Q('Khai báo set rỗng?', ['s = set()', 's = {}', 's = []', 's = ()'], 0, '{} là dict; phải dùng set() cho set rỗng.'),
    Q('Phép toán tập hợp?', ['union, intersection, difference', 'add, remove', 'append', 'sort'], 0, 'Set hỗ trợ các phép toán tập hợp toán học.'),
  ]),

  M(5, 'Dictionary (dict)', [
    Q('Dict là?', ['Cặp key-value', 'Mảng', 'Tập hợp', 'Chuỗi'], 0, 'Dict lưu cặp key-value.'),
    Q('Khai báo dict?', ['d = {"a": 1, "b": 2}', 'd = [a:1, b:2]', 'd = (a=1, b=2)', 'd = <a:1>'], 0, '{} với cặp key:value tạo dict.'),
    Q('Truy cập value theo key?', ['d["a"] hoặc d.get("a")', 'd.a (chỉ với JS)', 'd<a>', 'd->a'], 0, 'd[key] hoặc d.get(key); get an toàn hơn (không lỗi nếu thiếu).'),
    Q('Thêm/sửa cặp key-value?', ['d["c"] = 3', 'd.add(c, 3)', 'd.push("c", 3)', 'd.insert(c, 3)'], 0, 'Gán d[key] = value để thêm/sửa.'),
    Q('Duyệt dict?', ['for k, v in d.items()', 'for x in d', 'for k in d.keys()', 'Cả ba đều được'], 3, 'Có nhiều cách duyệt dict; items() lấy cả key-value.'),
  ]),

  M(6, 'String — Xử lý chuỗi', [
    Q('Độ dài chuỗi s?', ['len(s)', 's.length', 's.size()', 'count(s)'], 0, 'len(s) trả độ dài chuỗi.'),
    Q('Tách chuỗi theo dấu phẩy?', ['s.split(",")', 's.parse(",")', 's.cut(",")', 's.divide(",")'], 0, 'split(sep) tách chuỗi thành list.'),
    Q('Nối các phần tử list thành chuỗi?', ['",".join(list)', 'join(list, ",")', 'list.concat(",")', 'merge'], 0, '",".join(list) là cách nối chuẩn Python.'),
    Q('Chuyển hoa?', ['s.upper()', 's.toUpper()', 's.uppercase', 'UPPER(s)'], 0, 'upper() chuyển sang chữ hoa.'),
    Q('Định dạng chuỗi hiện đại?', ['f"Xin chào {name}"', '"Xin chào " + name', 'sprintf', 'format'], 0, 'f-string (PEP 498) là cách hiện đại và nhanh.'),
  ]),

  M(7, 'File I/O — Đọc/ghi file', [
    Q('Mở file để đọc?', ['open("a.txt", "r")', 'open("a.txt")', 'read("a.txt")', 'fopen'], 0, 'open(path, mode) mở file; "r" là read.'),
    Q('Đọc toàn bộ file?', ['f.read()', 'f.all()', 'f.scan()', 'f.full()'], 0, 'f.read() đọc hết.'),
    Q('Đọc từng dòng?', ['f.readline() hoặc for line in f', 'f.line()', 'f.next()', 'f.row()'], 0, 'readline() đọc 1 dòng; for line in f duyệt từng dòng.'),
    Q('Ghi file?', ['open(path, "w") rồi f.write()', 'f.save()', 'f.put()', 'f.set()'], 0, '"w" mở để ghi (xoá cũ); "a" để nối thêm.'),
    Q('Cách an toàn để mở file?', ['with open(...) as f:', 'open() rồi close()', 'try-finally', 'Cả với đều được'], 0, 'with tự động đóng file dù có lỗi xảy ra.'),
  ]),

  M(8, 'OOP cơ bản — Class và Object', [
    Q('Class trong Python?', ['class Ten:', 'Class Ten {}', 'def Ten():', 'object Ten'], 0, 'class Ten: định nghĩa lớp.'),
    Q('Hàm khởi tạo?', ['__init__(self)', 'init()', 'constructor()', 'new()'], 0, '__init__ là constructor trong Python.'),
    Q('Tham số self là?', ['Tham chiếu đến đối tượng hiện tại', 'Lớp cha', 'Module', 'Hằng số'], 0, 'self trỏ tới instance hiện tại.'),
    Q('Tạo đối tượng?', ['obj = Ten()', 'obj = new Ten()', 'obj = Ten.new()', 'obj = create Ten'], 0, 'Gọi tên class như hàm để tạo instance.'),
    Q('Phương thức là?', ['Hàm bên trong class, có self ở tham số đầu', 'Biến của class', 'Hằng số', 'Module'], 0, 'Method là hàm trong class với tham số đầu là self.'),
  ]),

  M(9, 'OOP — Kế thừa và Encapsulation', [
    Q('Kế thừa trong Python?', ['class Con(Cha):', 'class Con extends Cha', 'class Con < Cha', 'inherit Cha'], 0, 'class Con(Cha): kế thừa từ Cha.'),
    Q('Lớp con tự động có?', ['Toàn bộ thuộc tính và phương thức của lớp cha', 'Chỉ thuộc tính', 'Chỉ phương thức', 'Không có'], 0, 'Lớp con kế thừa cả thuộc tính + phương thức.'),
    Q('Ghi đè phương thức?', ['Định nghĩa lại trong lớp con', 'Không thể', 'Dùng @override', 'Tự động'], 0, 'Ghi đè (override) bằng cách định nghĩa lại trong lớp con.'),
    Q('Tiền tố _ trong tên biến nghĩa là?', ['Quy ước biến nội bộ (private theo quy ước)', 'Public', 'Hằng', 'Lỗi'], 0, '_ là quy ước "private" trong Python (không cưỡng chế).'),
    Q('Phương thức đặc biệt __str__ làm gì?', ['Định dạng chuỗi khi in đối tượng', 'Khởi tạo', 'Huỷ', 'So sánh'], 0, '__str__ trả về chuỗi đại diện khi print(obj).'),
  ]),

  M(10, 'Thực hành Python tổng hợp', [
    Q('Hàm tính tổng list?', ['sum(list)', 'total(list)', 'add(list)', 'list.sum()'], 0, 'sum() trả tổng các phần tử số.'),
    Q('Tìm max?', ['max(list)', 'list.max()', 'big(list)', 'top(list)'], 0, 'max() trả phần tử lớn nhất.'),
    Q('Lọc list giữ phần tử chẵn?', ['[x for x in a if x%2==0]', 'a.filter(x%2==0)', 'filter(a, even)', 'list.where()'], 0, 'List comprehension là cách Pythonic.'),
    Q('Đảo ngược chuỗi s?', ['s[::-1]', 'reverse(s)', 's.reverse()', 's.flip()'], 0, '[::-1] là slicing đảo ngược.'),
    Q('Kiểm tra phần tử x có trong list a?', ['x in a', 'a.contains(x)', 'a.has(x)', 'find(x, a)'], 0, 'Toán tử in kiểm tra tồn tại.'),
  ]),

  M(11, 'HTML — Cấu trúc trang web', [
    Q('HTML viết tắt?', ['HyperText Markup Language', 'Home Text Multi Lang', 'High Tech ML', 'Hyper Tool ML'], 0, 'HTML = HyperText Markup Language.'),
    Q('Thẻ tiêu đề lớn nhất?', ['<h1>', '<h6>', '<title>', '<head>'], 0, 'h1 là tiêu đề cấp 1 (lớn nhất); h6 nhỏ nhất.'),
    Q('Thẻ đoạn văn?', ['<p>', '<para>', '<text>', '<div>'], 0, '<p> là paragraph (đoạn văn).'),
    Q('Thẻ chèn ảnh?', ['<img src="..." alt="...">', '<image>', '<picture>', '<photo>'], 0, '<img> với thuộc tính src và alt.'),
    Q('Thẻ liên kết?', ['<a href="...">', '<link>', '<url>', '<href>'], 0, '<a href="..."> tạo siêu liên kết.'),
  ]),

  M(12, 'HTML — Form và bảng', [
    Q('Thẻ form?', ['<form action="..." method="...">', '<input>', '<submit>', '<field>'], 0, '<form> tạo biểu mẫu.'),
    Q('Ô nhập text?', ['<input type="text">', '<text>', '<field>', '<input>'], 0, '<input type="text"> tạo ô nhập 1 dòng.'),
    Q('Nút gửi form?', ['<button type="submit"> hoặc <input type="submit">', '<send>', '<go>', '<submit-button>'], 0, 'submit gửi form.'),
    Q('Bảng trong HTML dùng?', ['<table>, <tr>, <td>', '<grid>, <row>, <cell>', '<board>', '<matrix>'], 0, '<table> là khung; <tr> là hàng; <td> là ô.'),
    Q('Tiêu đề ô bảng?', ['<th>', '<thead>', '<title>', '<head>'], 0, '<th> là table header.'),
  ]),

  M(13, 'CSS — Định dạng cơ bản', [
    Q('CSS viết tắt?', ['Cascading Style Sheets', 'Computer Style Sheet', 'Common Style Set', 'Custom Style Sheet'], 0, 'CSS = Cascading Style Sheets.'),
    Q('Cách nhúng CSS từ file riêng?', ['<link rel="stylesheet" href="...">', '<css>', '<style src=...>', '<import>'], 0, '<link> dùng để gắn file css ngoài.'),
    Q('Quy tắc CSS gồm?', ['selector { property: value; }', 'selector = value', 'property: selector', 'value -> selector'], 0, 'selector { thuộc tính: giá trị; } là cú pháp chuẩn.'),
    Q('Chọn theo class?', ['.tenClass', '#tenId', 'tenTag', '*tenClass'], 0, '.class chọn theo class; #id theo id.'),
    Q('Đặt màu chữ?', ['color: red;', 'text-color: red;', 'font-color: red;', 'fg-color: red;'], 0, 'Thuộc tính color đặt màu chữ.'),
  ]),

  M(14, 'CSS — Box model và Layout', [
    Q('Box model gồm?', ['content + padding + border + margin', 'border + padding', 'margin + content', 'padding + margin'], 0, 'Box model: nội dung + padding + viền + lề.'),
    Q('Padding là?', ['Khoảng cách trong giữa content và border', 'Khoảng cách ngoài', 'Viền', 'Bóng'], 0, 'Padding là khoảng trống bên trong viền.'),
    Q('Margin là?', ['Khoảng cách ngoài giữa border và phần tử khác', 'Khoảng trong', 'Viền', 'Bóng'], 0, 'Margin là khoảng cách ngoài viền.'),
    Q('Flexbox dùng để?', ['Bố cục 1 chiều linh hoạt', 'Bảng', 'In ấn', 'Animation'], 0, 'Flexbox cho phép bố cục linh hoạt 1 chiều.'),
    Q('display: none làm gì?', ['Ẩn phần tử hoàn toàn', 'Làm trong suốt', 'Thu nhỏ', 'Đổi màu'], 0, 'display:none ẩn và không chiếm không gian.'),
  ]),

  M(15, 'JavaScript căn bản', [
    Q('JS thường nhúng trong HTML qua thẻ?', ['<script>', '<js>', '<code>', '<lang>'], 0, '<script> nhúng JS.'),
    Q('Khai báo biến hiện đại?', ['let, const', 'var only', 'dim', 'declare'], 0, 'let cho biến thay đổi, const cho hằng (ES6+).'),
    Q('In ra console?', ['console.log()', 'print()', 'echo()', 'output()'], 0, 'console.log() ra console trình duyệt.'),
    Q('Sự kiện click?', ['onclick hoặc addEventListener("click", fn)', 'on.click', 'click.add', 'when click'], 0, 'addEventListener là cách hiện đại.'),
    Q('Lấy phần tử theo id?', ['document.getElementById("...")', 'find("...")', 'query("...")', 'select("...")'], 0, 'document.getElementById hoặc document.querySelector.'),
  ]),

  M(16, 'Tạo trang web đơn giản', [
    Q('File HTML mở bằng?', ['Trình duyệt', 'Word', 'Excel', 'Photoshop'], 0, 'HTML hiển thị trên browser.'),
    Q('Tách HTML + CSS + JS giúp?', ['Dễ bảo trì, tách concerns', 'Chạy nhanh hơn', 'Đẹp hơn', 'Tốn dung lượng hơn'], 0, 'Separation of concerns: HTML cấu trúc, CSS trình bày, JS hành vi.'),
    Q('Đặt tên file trang chủ thường?', ['index.html', 'home.html', 'main.html', 'start.html'], 0, 'index.html là quy ước cho trang chủ.'),
    Q('Responsive web là?', ['Tự thích ứng kích thước màn hình', 'Chỉ chạy mobile', 'Chỉ desktop', 'Không liên quan'], 0, 'Responsive web design thích ứng đa thiết bị.'),
  ]),

  M(17, 'Triển khai trang web đơn giản', [
    Q('Hosting là?', ['Dịch vụ lưu trữ trang web trên server', 'Tên miền', 'Trình duyệt', 'Code editor'], 0, 'Hosting cung cấp máy chủ cho website.'),
    Q('Tên miền (domain) ví dụ?', ['google.com, tizia.vn', 'index.html', 'http', 'css'], 0, 'Tên miền là địa chỉ "thân thiện" của website.'),
    Q('Hosting miễn phí phổ biến?', ['GitHub Pages, Netlify, Vercel', 'Microsoft Word', 'Google Sheets', 'Notepad'], 0, 'GitHub Pages, Netlify, Vercel là dịch vụ hosting tĩnh phổ biến.'),
    Q('Trước khi public web, cần?', ['Kiểm tra trên nhiều trình duyệt và thiết bị', 'Up luôn', 'Không cần test', 'Tuỳ ý'], 0, 'Cross-browser testing đảm bảo trải nghiệm đồng đều.'),
  ]),

  M(18, 'Ôn tập HK1', [
    Q('List, tuple, set, dict khác nhau ở?', ['Tính chất: thứ tự, trùng lặp, mutable', 'Tên gọi', 'Không khác', 'Cú pháp giống nhau'], 0, '4 cấu trúc dữ liệu có đặc điểm khác nhau.'),
    Q('OOP có 4 đặc trưng?', ['Encapsulation, Inheritance, Polymorphism, Abstraction', 'Chỉ class', 'Chỉ object', 'Chỉ method'], 0, '4 trụ cột OOP.'),
    Q('HTML + CSS + JS đảm nhận?', ['Cấu trúc + trình bày + hành vi', 'Cùng làm 1 việc', 'Không liên quan', 'Tuỳ ý'], 0, 'Tách concerns rõ ràng.'),
    Q('with open(...) as f: ưu điểm?', ['Tự đóng file', 'Mở nhanh hơn', 'Bảo mật', 'Không lỗi'], 0, 'with đảm bảo đóng file dù có lỗi.'),
    Q('Hosting miễn phí cho static site?', ['GitHub Pages', 'AWS EC2', 'Word', 'Google Drive'], 0, 'GitHub Pages miễn phí cho static site.'),
  ]),

  // ───── HK2 — Đạo đức số + ATTT + AI + Nghề CNTT ─────
  M(19, 'Đạo đức và pháp lý số — Luật An toàn thông tin mạng', [
    Q('Luật An toàn thông tin mạng VN ban hành năm?', ['2015 (có hiệu lực 2016)', '2018', '2020', '2010'], 0, 'Luật ATTT mạng số 86/2015/QH13.'),
    Q('Luật An ninh mạng VN có hiệu lực?', ['01/01/2019', '2015', '2020', '2022'], 0, 'Luật An ninh mạng số 24/2018/QH14 có hiệu lực 01/01/2019.'),
    Q('Hành vi bị cấm trên không gian mạng?', ['Xuyên tạc, vu khống, kích động, lừa đảo', 'Học tập', 'Mua sắm hợp pháp', 'Đăng ảnh đẹp'], 0, 'Luật An ninh mạng liệt kê các hành vi bị cấm.'),
    Q('Phát tán thông tin sai sự thật trên mạng có thể bị?', ['Phạt hành chính hoặc xử lý hình sự', 'Không sao', 'Khen thưởng', 'Bỏ qua'], 0, 'Phát tán tin sai có thể bị phạt nặng theo Luật An ninh mạng.'),
    Q('HS dùng mạng đúng luật bằng?', ['Không chia sẻ tin sai, tôn trọng người khác, không vi phạm bản quyền', 'Đăng tuỳ ý', 'Chế ảnh người khác', 'Spam'], 0, 'Hành vi mạng đúng luật bắt đầu từ ý thức cá nhân.'),
  ]),

  M(20, 'Bản quyền và sở hữu trí tuệ số', [
    Q('Bản quyền (copyright) bảo vệ?', ['Tác phẩm sáng tạo: văn học, âm nhạc, code', 'Tên thương hiệu', 'Sáng chế', 'Đất đai'], 0, 'Bản quyền bảo vệ tác phẩm sáng tạo nguyên gốc.'),
    Q('Sao chép code/ảnh/nhạc không xin phép là?', ['Vi phạm bản quyền', 'Hợp lệ', 'Khen ngợi tác giả', 'Tuỳ ý'], 0, 'Sao chép không phép vi phạm Luật Sở hữu trí tuệ.'),
    Q('Phần mềm "free" và "open-source" khác nhau?', ['Open-source có thể đọc và sửa code; free có thể chỉ miễn phí', 'Giống nhau', 'Đối lập', 'Không khác'], 0, 'Free ≠ Open-source; open-source có quyền đọc/sửa source.'),
    Q('Giấy phép Creative Commons (CC) cho phép?', ['Chia sẻ tác phẩm với điều kiện ghi tên tác giả, không thương mại...', 'Sao chép tuỳ ý', 'Bán không cần phép', 'Không có điều kiện'], 0, 'CC có nhiều biến thể (BY, NC, SA, ND) với điều kiện cụ thể.'),
    Q('Trích dẫn nguồn khi dùng nội dung người khác?', ['Bắt buộc, kể cả khi được phép', 'Tuỳ chọn', 'Không cần', 'Chỉ khi bị nhắc'], 0, 'Trích nguồn là yêu cầu đạo đức + pháp lý.'),
  ]),

  M(21, 'An toàn thông tin — Mật khẩu mạnh', [
    Q('Mật khẩu mạnh nên?', ['≥ 12 ký tự, gồm chữ hoa-thường-số-ký tự đặc biệt', '6 ký tự', 'Tên mình', 'Ngày sinh'], 0, 'Mật khẩu mạnh tối thiểu 12 ký tự với nhiều loại ký tự.'),
    Q('Không nên?', ['Dùng 1 mật khẩu cho nhiều tài khoản', 'Dùng mật khẩu khác nhau', 'Đổi mật khẩu định kỳ', 'Bật 2FA'], 0, 'Tái sử dụng mật khẩu là rủi ro lớn nếu một site bị lộ.'),
    Q('2FA (xác thực 2 bước) là?', ['Mật khẩu + mã OTP từ điện thoại/app', 'Hỏi 2 câu', 'Mật khẩu 2 lần', 'Username 2 cái'], 0, '2FA tăng độ an toàn đáng kể.'),
    Q('Password manager giúp?', ['Tạo + lưu mật khẩu mạnh, mỗi site một mật khẩu', 'Hack', 'Chia sẻ pass', 'Nhớ thay'], 0, 'Password manager (Bitwarden, 1Password) là công cụ an toàn quan trọng.'),
    Q('Không bao giờ?', ['Gửi mật khẩu qua chat/SMS, viết lên giấy nhớ chung', 'Lưu password manager', 'Bật 2FA', 'Đổi mật khẩu'], 0, 'Mật khẩu là thông tin tuyệt mật.'),
  ]),

  M(22, 'An toàn thông tin — OWASP Top 10 cơ bản', [
    Q('OWASP là?', ['Tổ chức phi lợi nhuận về bảo mật ứng dụng web', 'Hãng phần mềm', 'Loại virus', 'Hệ điều hành'], 0, 'OWASP = Open Web Application Security Project.'),
    Q('SQL Injection là?', ['Chèn câu SQL độc vào input để chiếm DB', 'Loại virus', 'Phần cứng', 'Loại mật khẩu'], 0, 'SQL Injection xảy ra khi input không được sanitize.'),
    Q('XSS (Cross-Site Scripting) là?', ['Chèn script JS độc vào trang để chạy ở trình duyệt nạn nhân', 'Tấn công mạng', 'DDoS', 'Phishing'], 0, 'XSS chèn script độc vào trang.'),
    Q('CSRF là?', ['Lừa người dùng đã đăng nhập thực hiện hành động ngoài ý muốn', 'Phá mật khẩu', 'Virus', 'Spam'], 0, 'CSRF = Cross-Site Request Forgery.'),
    Q('Phòng tránh OWASP cơ bản?', ['Validate input, escape output, HTTPS, cập nhật phần mềm', 'Tin mọi input', 'Không cập nhật', 'Tuỳ ý'], 0, 'Bảo mật web cần nhiều lớp phòng thủ.'),
  ]),

  M(23, 'An toàn — Phishing, malware, lừa đảo mạng', [
    Q('Phishing là?', ['Giả mạo trang web/email để lấy thông tin nhạy cảm', 'Câu cá', 'Loại virus', 'Spam thường'], 0, 'Phishing lừa người dùng cung cấp thông tin nhạy cảm.'),
    Q('Dấu hiệu email phishing?', ['Sai chính tả, link lạ, yêu cầu gấp, đe doạ', 'Đẹp', 'Đến từ người quen', 'Có chữ ký'], 0, 'Email phishing thường vội vã + có lỗi rõ ràng.'),
    Q('Malware là?', ['Phần mềm độc hại (virus, worm, ransomware...)', 'Phần mềm tốt', 'Trò chơi', 'OS'], 0, 'Malware = Malicious Software.'),
    Q('Ransomware là?', ['Mã hoá file đòi tiền chuộc', 'Chơi game', 'Quảng cáo', 'Tăng tốc máy'], 0, 'Ransomware là mối đe doạ nghiêm trọng.'),
    Q('Phòng tránh malware?', ['Không click link lạ, không tải phần mềm crack, cập nhật phần mềm', 'Tải tự do', 'Click hết link', 'Tuỳ ý'], 0, 'Cảnh giác + cập nhật là tuyến phòng thủ đầu tiên.'),
  ]),

  M(24, 'Bảo vệ thông tin cá nhân', [
    Q('Thông tin cá nhân quan trọng?', ['Số CMND/CCCD, ngày sinh, số tài khoản, mật khẩu', 'Tên', 'Quê', 'Tuổi'], 0, 'Thông tin nhạy cảm cần được bảo vệ tuyệt đối.'),
    Q('Không nên?', ['Đăng số CCCD, vé máy bay, vé tàu lên mạng xã hội', 'Đăng ảnh phong cảnh', 'Đăng status thường', 'Like bài bạn'], 0, 'Đăng giấy tờ lên mạng có thể bị lợi dụng.'),
    Q('Quyền riêng tư trên mạng?', ['Bật cài đặt riêng tư, kiểm soát ai xem được', 'Public tất', 'Không quan tâm', 'Tuỳ ý'], 0, 'Mỗi MXH có cài đặt riêng tư; cần xem xét kỹ.'),
    Q('Wi-Fi công cộng có rủi ro?', ['Có; nên dùng VPN khi truy cập thông tin nhạy cảm', 'Không rủi ro', 'An toàn tuyệt đối', 'Nhanh hơn'], 0, 'Wi-Fi công cộng có thể bị nghe trộm.'),
    Q('Quy tắc cơ bản?', ['Nghĩ trước khi đăng — internet là vĩnh viễn', 'Đăng tuỳ ý', 'Xoá là hết', 'Không sao'], 0, 'Nội dung trên mạng khó xoá triệt để.'),
  ]),

  M(25, 'AI cơ bản — Khái niệm và ứng dụng', [
    Q('AI viết tắt?', ['Artificial Intelligence — Trí tuệ nhân tạo', 'Auto Internet', 'Apple Inc.', 'Active Info'], 0, 'AI = Trí tuệ nhân tạo.'),
    Q('Machine Learning là?', ['Máy học từ dữ liệu để đưa ra quyết định', 'Lập trình tay', 'Sửa máy', 'Học toán'], 0, 'ML là nhánh AI: máy tự học từ dữ liệu.'),
    Q('Deep Learning dựa trên?', ['Mạng nơ-ron nhân tạo nhiều lớp', 'Cây quyết định', 'Quy tắc if-else', 'Tuỳ ý'], 0, 'Deep Learning dùng deep neural networks.'),
    Q('Ứng dụng AI trong đời sống?', ['Trợ lý ảo (Siri, ChatGPT), gợi ý phim, xe tự lái, nhận diện khuôn mặt', 'Chỉ chơi game', 'Chỉ tính toán', 'Vô bổ'], 0, 'AI hiện diện trong mọi mặt cuộc sống.'),
    Q('ChatGPT (LLM) là?', ['Mô hình ngôn ngữ lớn dự đoán văn bản kế tiếp', 'Tìm kiếm Google', 'Soạn văn bản tay', 'Lưu trữ'], 0, 'LLM = Large Language Model.'),
  ]),

  M(26, 'AI — Deepfake và đạo đức AI', [
    Q('Deepfake là?', ['Video/ảnh giả mạo do AI tạo ra trông như thật', 'Tin thật', 'Phim hoạt hình', 'Vẽ tay'], 0, 'Deepfake dùng AI tạo nội dung giả mạo có độ thực cao.'),
    Q('Tác hại của deepfake?', ['Bôi nhọ danh dự, lừa đảo, thao túng dư luận', 'Vô hại', 'Có lợi', 'Tốt cho XH'], 0, 'Deepfake gây hại nghiêm trọng nếu lạm dụng.'),
    Q('Cách nhận biết deepfake?', ['Quan sát chi tiết bất thường (mắt, viền tóc, ánh sáng), kiểm chứng nguồn', 'Tin ngay', 'Chia sẻ ngay', 'Tuỳ ý'], 0, 'Kỹ năng tư duy phản biện rất quan trọng.'),
    Q('Vấn đề đạo đức của AI?', ['Bias (định kiến), riêng tư, mất việc, deepfake, vũ khí tự động', 'Không có', 'Chỉ tốt', 'Vô bổ'], 0, 'AI có nhiều vấn đề đạo đức cần xem xét.'),
    Q('Khi dùng AI cho bài học?', ['Dùng làm gợi ý, tự suy nghĩ và kiểm tra, ghi nguồn', 'Copy y nguyên', 'Nộp luôn', 'Lừa thầy cô'], 0, 'Dùng AI có đạo đức = hỗ trợ học, không gian lận.'),
  ]),

  M(27, 'AI — Prompt engineering cơ bản', [
    Q('Prompt là?', ['Câu lệnh/yêu cầu gửi cho AI', 'Tên AI', 'Loại model', 'Output'], 0, 'Prompt là input cho LLM.'),
    Q('Prompt tốt có?', ['Rõ ràng, cụ thể, bối cảnh, định dạng output mong muốn', 'Mơ hồ', 'Cụt ngủn', 'Không bối cảnh'], 0, 'Prompt rõ ràng = output chất lượng.'),
    Q('Kỹ thuật few-shot là?', ['Cho AI vài ví dụ trước khi yêu cầu', 'Không ví dụ', 'Hỏi 1 lần', 'Yêu cầu ngắn'], 0, 'Few-shot giúp AI hiểu pattern.'),
    Q('Chain-of-thought là?', ['Yêu cầu AI suy luận từng bước', 'Trả lời ngay', 'Đoán', 'Bỏ qua'], 0, 'CoT tăng chất lượng câu trả lời cho bài toán suy luận.'),
    Q('Lưu ý khi dùng AI?', ['Kiểm chứng thông tin AI đưa ra, vì có thể "ảo giác"', 'Tin tuyệt đối', 'Không kiểm', 'Tuỳ ý'], 0, 'AI có thể hallucinate; luôn kiểm chứng.'),
  ]),

  M(28, 'Nghề CNTT — Tổng quan ngành', [
    Q('CNTT là?', ['Công nghệ Thông tin — ngành về xử lý và truyền thông tin bằng máy tính', 'Sửa máy tính', 'Lắp ráp', 'Chỉ lập trình'], 0, 'CNTT bao trùm phần cứng, phần mềm, mạng, dữ liệu...'),
    Q('Triển vọng nghề CNTT VN?', ['Rất tốt, thiếu nhân lực, lương cao', 'Bão hoà', 'Không có việc', 'Mất giá'], 0, 'CNTT Việt Nam đang thiếu nhân lực chất lượng cao.'),
    Q('Các mảng chính CNTT?', ['Software, Web, Mobile, Data, AI, Security, DevOps, Cloud', 'Chỉ web', 'Chỉ game', 'Chỉ sửa máy'], 0, 'CNTT có rất nhiều chuyên ngành.'),
    Q('Kỹ năng cần để học CNTT?', ['Tư duy logic, toán, tự học, ngoại ngữ (đặc biệt tiếng Anh)', 'Khéo tay', 'Hát hay', 'Không cần gì'], 0, 'CNTT cần tư duy + tự học + tiếng Anh.'),
  ]),

  M(29, 'Nghề CNTT — Developer (Lập trình viên)', [
    Q('Developer làm?', ['Viết, kiểm thử, bảo trì phần mềm', 'Thiết kế đồ hoạ', 'Sửa máy', 'Lắp ráp'], 0, 'Dev là người tạo ra phần mềm.'),
    Q('Ngôn ngữ lập trình phổ biến 2026?', ['Python, JavaScript, Java, C++, Go, Rust, TypeScript', 'Chỉ Pascal', 'Chỉ Basic', 'Chỉ Logo'], 0, 'Nhiều ngôn ngữ phổ biến tuỳ theo lĩnh vực.'),
    Q('Frontend dev?', ['Làm giao diện người dùng (HTML/CSS/JS, React/Vue)', 'Server', 'Database', 'Hardware'], 0, 'Frontend làm UI/UX trên client.'),
    Q('Backend dev?', ['Làm phần server, API, DB', 'Giao diện', 'Đồ hoạ', 'Mạng'], 0, 'Backend xử lý logic + dữ liệu trên server.'),
    Q('Full-stack dev?', ['Cả frontend + backend', 'Chỉ frontend', 'Chỉ backend', 'Không có ngành này'], 0, 'Full-stack làm cả hai mảng.'),
  ]),

  M(30, 'Nghề CNTT — Designer (UI/UX)', [
    Q('UI khác UX?', ['UI là giao diện; UX là trải nghiệm tổng thể', 'Giống nhau', 'Đối lập', 'Không khác'], 0, 'UI = User Interface; UX = User Experience.'),
    Q('Công cụ UI/UX phổ biến?', ['Figma, Adobe XD, Sketch', 'Word', 'Excel', 'Notepad'], 0, 'Figma là chuẩn ngành hiện nay.'),
    Q('UX designer làm?', ['Nghiên cứu người dùng, wireframe, prototype, kiểm thử khả dụng', 'Vẽ icon', 'Code', 'Server'], 0, 'UX design tập trung vào trải nghiệm tổng thể.'),
    Q('Nguyên tắc thiết kế tốt?', ['Đơn giản, nhất quán, dễ dùng, phản hồi rõ ràng', 'Phức tạp', 'Lộn xộn', 'Tuỳ ý'], 0, 'Heuristics của Jakob Nielsen là nguyên tắc UX kinh điển.'),
  ]),

  M(31, 'Nghề CNTT — Data Analyst & Data Scientist', [
    Q('Data Analyst làm?', ['Phân tích dữ liệu để rút ra insight và làm báo cáo', 'Lập trình game', 'Sửa máy', 'Thiết kế'], 0, 'DA tập trung vào phân tích và báo cáo.'),
    Q('Data Scientist khác DA?', ['DS thiên về ML, mô hình dự đoán; DA thiên về phân tích báo cáo', 'Giống nhau', 'Không khác', 'Đối lập'], 0, 'DS dùng ML nâng cao; DA chủ yếu phân tích.'),
    Q('Công cụ Data?', ['SQL, Excel, Python, R, Power BI, Tableau', 'Chỉ Excel', 'Chỉ Word', 'Chỉ Notepad'], 0, 'Bộ công cụ Data rất phong phú.'),
    Q('Kỹ năng quan trọng?', ['Toán + thống kê + lập trình + kể chuyện bằng dữ liệu (data storytelling)', 'Vẽ', 'Hát', 'Tuỳ ý'], 0, 'Data career cần đa kỹ năng.'),
    Q('Big Data là?', ['Dữ liệu lớn với 4V: Volume, Velocity, Variety, Veracity', 'Excel', 'CSV nhỏ', 'Tuỳ ý'], 0, 'Big Data có đặc trưng 4V.'),
  ]),

  M(32, 'Nghề CNTT — Security & DevOps', [
    Q('Cybersecurity engineer làm?', ['Bảo vệ hệ thống, mạng khỏi tấn công mạng', 'Tấn công', 'Hack', 'Lập trình game'], 0, 'Security engineer bảo vệ hệ thống.'),
    Q('Ethical hacker (white hat)?', ['Hack để tìm lỗ hổng giúp tổ chức vá', 'Hack phá hoại', 'Trộm dữ liệu', 'Tuỳ ý'], 0, 'White hat hack hợp pháp để bảo vệ.'),
    Q('DevOps là?', ['Tích hợp phát triển + vận hành phần mềm', 'Chỉ dev', 'Chỉ ops', 'Marketing'], 0, 'DevOps kết hợp Dev + Operations.'),
    Q('Công cụ DevOps phổ biến?', ['Docker, Kubernetes, Git, Jenkins, CI/CD', 'Word', 'Excel', 'PowerPoint'], 0, 'Bộ công cụ DevOps tập trung tự động hoá.'),
    Q('Cloud computing phổ biến?', ['AWS, Azure, Google Cloud', 'Local PC', 'USB', 'Đĩa CD'], 0, 'Big 3 cloud providers.'),
  ]),

  M(33, 'Ứng xử văn minh trên mạng', [
    Q('Văn hoá mạng quan trọng vì?', ['Mạng là không gian công cộng, ảnh hưởng nhiều người', 'Riêng tư', 'Không ai biết', 'Vô bổ'], 0, 'Mạng có tầm ảnh hưởng rộng lớn.'),
    Q('Không nên?', ['Bình luận xúc phạm, bắt nạt online (cyberbullying), chửi bới', 'Chia sẻ kiến thức', 'Khen ngợi', 'Hỏi lịch sự'], 0, 'Cyberbullying gây hại nghiêm trọng cho tâm lý.'),
    Q('Khi bị bắt nạt online?', ['Chụp màn hình bằng chứng, báo người lớn/cơ quan chức năng', 'Im lặng', 'Trả đũa', 'Tự xử'], 0, 'Báo cáo và lưu bằng chứng là cách xử lý đúng.'),
    Q('Trước khi chia sẻ tin?', ['Kiểm chứng nguồn, đối chiếu nhiều nguồn', 'Chia ngay', 'Tin ngay', 'Tuỳ ý'], 0, 'Tư duy phản biện trước khi chia sẻ.'),
    Q('Quy tắc vàng?', ['Đối xử với người khác trên mạng như ngoài đời', 'Tuỳ ý mạng', 'Mạng khác đời', 'Vô danh'], 0, 'Mạng không phải nơi vô luật pháp/đạo đức.'),
  ]),

  M(34, 'Định hướng học CNTT — Sau cấp 2', [
    Q('Để học CNTT tốt, lớp 9 cần?', ['Học chắc Toán + Tiếng Anh + Tin học cơ bản', 'Chỉ Tin học', 'Chỉ Toán', 'Không cần gì'], 0, 'Toán + Tiếng Anh + Tin học là nền tảng.'),
    Q('Trường THPT chuyên Tin?', ['Có ở Hà Nội (Amsterdam, KHTN, Sư Phạm), TP.HCM, các tỉnh', 'Không có', 'Chỉ đại học', 'Hiếm'], 0, 'Nhiều trường chuyên có lớp Tin học.'),
    Q('Học CNTT có thể qua?', ['Đại học, cao đẳng, học nghề, tự học online', 'Chỉ đại học', 'Chỉ tự học', 'Không có cách'], 0, 'Nhiều con đường để vào CNTT.'),
    Q('Khoá học online uy tín?', ['Coursera, edX, Udemy, MIT OCW, freeCodeCamp', 'TikTok', 'Facebook', 'Game'], 0, 'Nhiều nền tảng học online uy tín.'),
    Q('Portfolio cho dev?', ['GitHub + project cá nhân', 'CV đẹp', 'Bằng cấp', 'Quen biết'], 0, 'Portfolio thực tế quan trọng hơn bằng cấp.'),
  ]),

  M(35, 'Tổng kết môn — Liên hệ thực tế', [
    Q('Python phù hợp cho?', ['Data, AI, Web backend, automation', 'Game AAA', 'Phần cứng', 'Đồ hoạ'], 0, 'Python mạnh trong Data + AI + Web.'),
    Q('HTML/CSS/JS dùng để?', ['Xây trang web', 'Lập trình hệ điều hành', 'Phần cứng', 'AI'], 0, 'Bộ ba web frontend cơ bản.'),
    Q('An toàn thông tin quan trọng vì?', ['Bảo vệ tài sản, danh dự, quyền riêng tư', 'Vô bổ', 'Chỉ doanh nghiệp', 'Tuỳ ý'], 0, 'ATTT là quan trọng với mọi người trong thời đại số.'),
    Q('AI tốt khi?', ['Hỗ trợ con người, không thay thế tư duy', 'Thay thế con người', 'Lạm dụng', 'Gian lận'], 0, 'AI là công cụ hỗ trợ, không thay thế tư duy con người.'),
    Q('Nghề CNTT đòi hỏi?', ['Học suốt đời, đạo đức nghề, kỹ năng cứng + mềm', 'Tiền', 'May mắn', 'Không cần học'], 0, 'CNTT thay đổi nhanh; học suốt đời là bắt buộc.'),
  ]),
];

export const S9TIN_SCENARIOS = indexBy(S9TIN_WEEKS);
