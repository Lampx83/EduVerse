// ============================================================
// Lớp 10 · TIN HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Tin 10: Máy tính & xã hội tri thức — Lập trình Python — Thuật toán cơ bản).
// ID prefix: "H10TIN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10TIN', 'tin-hoc', n, title, qs, opts);

export const H10TIN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Máy tính và xã hội tri thức', [
    Q('Xã hội tri thức là?', ['XH săn bắn', 'XH công nghiệp thuần', 'Xã hội mà tri thức là yếu tố sản xuất chính', 'XH nông nghiệp'], 2, 'Xã hội tri thức: tri thức + thông tin là động lực sản xuất chính.'),
    Q('Máy tính là?', ['Máy ghi âm', 'Màn hình hiển thị hình ảnh', 'Bàn tính', 'Thiết bị xử lý thông tin tự động theo chương trình'], 3, 'Máy tính = thiết bị xử lý dữ liệu tự động theo chương trình lưu sẵn.'),
    Q('Cuộc cách mạng công nghiệp 4.0 dựa trên?', ['AI, IoT, big data, robot', 'Hơi nước', 'Dây chuyền', 'Động cơ đốt trong'], 0, 'CMCN 4.0: AI, IoT, big data, blockchain, robot, in 3D.'),
    Q('Thiết bị thông minh phổ biến hiện nay?', ['TV CRT', 'Điện thoại thông minh, máy tính bảng', 'Đồng hồ cát', 'Bàn tính'], 1, 'Smartphone, tablet, smart TV, smartwatch là thiết bị thông minh phổ biến.'),
    Q('Nghề nghiệp tin học gồm?', ['Nông dân', 'Bác sĩ', 'Lập trình, AI, dữ liệu, an ninh mạng', 'Giáo viên'], 2, 'Nghề CNTT: lập trình viên, kỹ sư AI, nhà khoa học dữ liệu, kỹ sư an ninh mạng...'),
    Q('Đạo đức trong tin học gồm?', ['Chia sẻ mật khẩu cá nhân cho bạn', 'Sao chép tự do', 'Tải phần mềm bẻ khoá để dùng thử', 'Tôn trọng bản quyền, riêng tư, không lừa đảo'], 3, 'Đạo đức tin học: tôn trọng bản quyền, riêng tư, không vi phạm an ninh.'),
  ]),

  M(2, 'Biểu diễn thông tin trong máy tính', [
    Q('Đơn vị nhỏ nhất biểu diễn thông tin trong máy tính?', ['KB (kilobyte)', 'MB (megabyte)', 'Bit', 'Byte (8 bit)'], 2, 'Bit (binary digit) = 0 hoặc 1, là đơn vị nhỏ nhất.'),
    Q('1 Byte bằng?', ['4 bit', '1024 bit', '16 bit', '8 bit'], 3, '1 byte = 8 bit.'),
    Q('1 KB bằng?', ['1 MB', '1000 byte', '100 byte', '1024 byte'], 3, '1 KB (kilobyte) = 2¹⁰ = 1024 byte.'),
    Q('1 MB bằng?', ['100 KB', '1024 KB', '1000 KB', '1 GB'], 1, '1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.'),
    Q('Hệ đếm nhị phân dùng các chữ số?', ['0-15', '0 và 1', '0-9', 'Các chữ cái A-F'], 1, 'Nhị phân (binary) dùng 2 ký số: 0 và 1.'),
    Q('Hệ đếm thập lục phân (hex) dùng?', ['0-9', '0-9 và A-F', '0-9 và a-z', '0-7'], 1, 'Hex (16) dùng 16 ký số: 0-9 và A-F.'),
  ]),

  M(3, 'ASCII và Unicode', [
    Q('ASCII là?', ['Bảng tiếng Việt', 'Bảng mã 16 bit', 'Bảng emoji', 'Bảng mã ký tự 7-bit (128 ký tự)'], 3, 'ASCII = American Standard Code for Information Interchange, 7 bit, 128 ký tự.'),
    Q('Chữ "A" trong ASCII có mã?', ['100', '0', '97', '65'], 3, '"A" có mã ASCII 65; "a" là 97.'),
    Q('Chữ "a" trong ASCII có mã?', ['0', '65', '100', '97'], 3, '"a" có mã 97; cách "A" 32 đơn vị.'),
    Q('Unicode được tạo ra để?', ['Chỉ emoji', 'Chỉ tiếng Việt', 'Biểu diễn được mọi ngôn ngữ trên thế giới', 'Chỉ tiếng Anh'], 2, 'Unicode (UTF-8, UTF-16) bao phủ mọi ngôn ngữ, ký tự, emoji.'),
    Q('UTF-8 dùng?', ['Cố định 1 byte', 'Cố định 2 byte', '1-4 byte mỗi ký tự (linh hoạt)', 'Cố định 4 byte'], 2, 'UTF-8 mã hoá linh hoạt 1-4 byte, tương thích ngược với ASCII.'),
    Q('Tiếng Việt có dấu hiển thị đúng nhờ?', ['Unicode (UTF-8)', 'Bảng mã TCVN3 (font ABC)', 'Bảng mã ASCII 7 bit', 'Bảng mã VNI-Windows'], 0, 'Web hiện đại dùng UTF-8 để hiển thị tiếng Việt và mọi ngôn ngữ.'),
  ]),

  M(4, 'Biểu diễn số và hình ảnh', [
    Q('Số nguyên trong máy tính được biểu diễn bằng?', ['Hệ nhị phân (binary)', 'Hệ La Mã', 'Hệ thập phân', 'Hệ chữ Latin'], 0, 'Máy tính lưu số nguyên dưới dạng nhị phân (kèm bit dấu cho số âm).'),
    Q('Số thực được biểu diễn theo chuẩn?', ['IEEE 754 (dấu phẩy động)', 'Hệ thập lục phân (hex)', 'Số nguyên', 'Hệ La Mã'], 0, 'Số thực dùng dấu phẩy động (floating point) theo chuẩn IEEE 754.'),
    Q('Màu RGB là?', ['3 màu in', '3 kênh âm thanh', 'Tổ hợp 3 màu cơ bản: Đỏ, Lục, Lam', 'Đỏ, vàng, xanh'], 2, 'RGB = Red - Green - Blue, mỗi kênh 0-255, tổ hợp tạo mọi màu.'),
    Q('Mỗi kênh màu RGB thường dùng?', ['8 bit (0-255)', '16 bit', '4 bit', '32 bit'], 0, 'Mỗi kênh 8 bit → 256 mức; tổng 24 bit cho 1 điểm ảnh (16 triệu màu).'),
    Q('Điểm ảnh (pixel) là?', ['Đơn vị video', 'Đơn vị nhỏ nhất của ảnh', 'Đơn vị âm thanh', 'Đơn vị văn bản'], 1, 'Pixel là đơn vị nhỏ nhất tạo nên hình ảnh số.'),
    Q('Ảnh JPG khác PNG ở?', ['Giống nhau', 'PNG mất, JPG không', 'PNG chỉ đen trắng', 'JPG nén có mất, PNG nén không mất'], 3, 'JPG dùng nén có mất (lossy), nhỏ hơn; PNG nén không mất (lossless), giữ chất lượng.'),
  ]),

  M(5, 'Mạng máy tính và Internet', [
    Q('Mạng máy tính là?', ['Phần mềm', '1 máy tính', 'Đường dây', 'Hệ thống các máy tính kết nối để trao đổi dữ liệu'], 3, 'Mạng MT: nhiều thiết bị kết nối, chia sẻ tài nguyên và trao đổi dữ liệu.'),
    Q('Internet là?', ['Mạng nội bộ', 'Mạng toàn cầu kết nối hàng tỷ máy tính', 'Phần mềm', 'Mạng LAN'], 1, 'Internet là mạng của các mạng, kết nối toàn cầu qua TCP/IP.'),
    Q('Giao thức nền tảng của Internet là?', ['TCP/IP', 'SMTP — gửi email', 'FTP — truyền tệp', 'HTTP — truyền siêu văn bản'], 0, 'TCP/IP là bộ giao thức nền tảng của Internet.'),
    Q('Mỗi thiết bị trên Internet có?', ['Địa chỉ IP duy nhất', 'Số điện thoại', 'Không có địa chỉ', 'Tên ngẫu nhiên'], 0, 'Mỗi thiết bị có địa chỉ IP (IPv4 hoặc IPv6) duy nhất trong mạng.'),
    Q('DNS là?', ['Hệ thống đổi tên miền sang IP', 'Hệ FTP', 'Hệ giao thức email', 'Hệ tìm kiếm'], 0, 'DNS (Domain Name System) đổi google.com → 142.250.x.x.'),
    Q('WWW là?', ['Internet', 'World Wide Web — dịch vụ web', 'Modem — thiết bị kết nối mạng', 'Wi-Fi — mạng không dây'], 1, 'WWW là dịch vụ web trên Internet, dùng giao thức HTTP/HTTPS.'),
  ]),

  M(6, 'An toàn thông tin cá nhân', [
    Q('An toàn thông tin gồm?', ['Chỉ tốc độ', 'Bảo mật, toàn vẹn, sẵn sàng (CIA)', 'Chỉ giá rẻ', 'Chỉ bảo mật'], 1, 'CIA triad: Confidentiality, Integrity, Availability.'),
    Q('Mật khẩu mạnh nên?', ['Dài ≥8 ký tự, có chữ - số - ký tự đặc biệt', 'Ngày sinh', '123456', 'Tên mình'], 0, 'Mật khẩu mạnh: dài, có chữ hoa/thường, số, ký tự đặc biệt, không liên quan cá nhân.'),
    Q('Xác thực 2 yếu tố (2FA) là?', ['Không có mật khẩu', 'Đăng nhập 2 lần', 'Có 2 mật khẩu', 'Đăng nhập cần thêm OTP/khoá vật lý ngoài mật khẩu'], 3, '2FA = mật khẩu + yếu tố thứ 2 (OTP, vân tay, khoá vật lý).'),
    Q('Phishing là?', ['Đánh cá', 'Quảng cáo', 'Tin tức', 'Lừa đảo lấy thông tin qua giả mạo'], 3, 'Phishing: kẻ tấn công giả mạo (email, web) để lấy mật khẩu, OTP.'),
    Q('Khi gặp link lạ trong email?', ['Click ngay', 'Không click, không nhập mật khẩu', 'Chuyển tiền', 'Nhập mật khẩu'], 1, 'Không click link lạ, không nhập thông tin nhạy cảm, kiểm tra nguồn.'),
    Q('Phần mềm độc hại (malware) gồm?', ['Chỉ adware', 'Chỉ virus', 'Virus, trojan, ransomware', 'Chỉ trojan'], 2, 'Malware: virus, trojan, ransomware, spyware, worm, adware.'),
  ]),

  M(7, 'Đạo đức và pháp luật khi sử dụng Internet', [
    Q('Khi đăng bài lên mạng XH cần?', ['Tin nguồn lạ', 'Nói gì cũng được', 'Phát tán', 'Tôn trọng người khác, không xúc phạm'], 3, 'Đăng bài cần tôn trọng người khác, không xúc phạm, lan truyền tin sai.'),
    Q('Tin giả (fake news) gây?', ['Hoang mang, gây thiệt hại', 'Có lợi', 'Vô hại', 'Hài hước'], 0, 'Tin giả gây hoang mang, định hướng sai dư luận, ảnh hưởng kinh tế - xã hội.'),
    Q('Đăng tin sai sự thật ở VN bị?', ['Không gì', 'Được tặng thưởng vì lan truyền nhanh', 'Xử phạt hành chính hoặc hình sự', 'Bỏ qua'], 2, 'Đăng tin sai có thể bị phạt VPHC 7,5-10 triệu hoặc xử hình sự nếu nghiêm trọng.'),
    Q('Bắt nạt qua mạng (cyberbullying) là?', ['Đăng meme', 'Like ảnh', 'Hành vi xúc phạm, đe doạ qua mạng', 'Trò đùa'], 2, 'Cyberbullying: xúc phạm, đe doạ, làm nhục qua không gian mạng — có thể vi phạm PL.'),
    Q('Bản quyền trên Internet?', ['Sao chép', 'Bán lại', 'Tự do tải', 'Phải tôn trọng, ghi nguồn khi sử dụng'], 3, 'Nội dung trên Internet vẫn có bản quyền, phải xin phép hoặc trích nguồn.'),
    Q('Khi bị bắt nạt qua mạng?', ['Lưu bằng chứng, báo cho người lớn, cơ quan', 'Im lặng', 'Bỏ học', 'Phản bắt nạt'], 0, 'Lưu screenshot, chặn người bắt nạt, báo cho người lớn, nhà trường, cơ quan chức năng.'),
  ]),

  M(8, 'Phần mềm và hệ điều hành', [
    Q('Phần mềm chia thành?', ['Hệ thống và ứng dụng', 'Đắt và rẻ', 'Lớn và nhỏ', 'Mới và cũ'], 0, '2 loại chính: phần mềm hệ thống (OS) và phần mềm ứng dụng.'),
    Q('Hệ điều hành (OS) là?', ['Trình duyệt', 'Ứng dụng giải trí trên máy tính', 'Phần cứng', 'Phần mềm quản lý phần cứng và phần mềm ứng dụng'], 3, 'OS quản lý CPU, bộ nhớ, thiết bị, file và chạy ứng dụng.'),
    Q('Hệ điều hành phổ biến trên PC?', ['Chỉ Windows', 'Windows, macOS, Linux', 'Chỉ macOS', 'Android'], 1, 'PC chủ yếu chạy Windows (~70%), macOS, Linux.'),
    Q('Hệ điều hành phổ biến trên smartphone?', ['Symbian', 'Linux Ubuntu cho điện thoại', 'Android và iOS', 'Windows Phone'], 2, 'Smartphone hiện chủ yếu chạy Android (~70%) và iOS (~28%).'),
    Q('Phần mềm mã nguồn mở (open source) là?', ['Cho phép xem, sửa, phân phối mã nguồn', 'Đóng kín', 'Phải mua', 'Bị cấm'], 0, 'Open source: mã nguồn công khai, theo các giấy phép như GPL, MIT.'),
    Q('Ví dụ phần mềm mã nguồn mở?', ['Windows', 'MS Office', 'Photoshop', 'Linux, Firefox, LibreOffice, Python'], 3, 'Linux, Firefox, LibreOffice, Python là phần mềm mã nguồn mở phổ biến.'),
  ]),

  M(9, 'Làm quen với Python', [
    Q('Python là?', ['CSS — ngôn ngữ định dạng web', 'Ngôn ngữ máy', 'Ngôn ngữ lập trình bậc cao, thông dịch', 'HTML — ngôn ngữ đánh dấu siêu văn bản'], 2, 'Python là ngôn ngữ lập trình bậc cao, thông dịch, đa năng.'),
    Q('Người sáng tạo Python là?', ['Guido van Rossum', 'Bill Gates', 'Linus Torvalds', 'Steve Jobs'], 0, 'Guido van Rossum tạo Python năm 1991.'),
    Q('Để chạy chương trình Python cần?', ['OS riêng', 'Trình duyệt', 'Compiler C++', 'Python interpreter'], 3, 'Python cần trình thông dịch (interpreter) để chạy.'),
    Q('Lệnh in ra màn hình trong Python là?', ['cout (C++)', 'printf()', 'echo (PHP/Bash)', 'print()'], 3, 'Python dùng print() để in ra màn hình.'),
    Q('Lệnh `print("Hello")` in ra?', ['Hello', '"Hello"', 'SyntaxError do thiếu dấu nháy', 'Tên biến print'], 0, 'print("Hello") in chuỗi Hello (không gồm dấu nháy).'),
    Q('Comment 1 dòng trong Python bắt đầu bằng?', ['//', '--', '#', '/*'], 2, 'Comment 1 dòng Python dùng #.'),
  ]),

  M(10, 'Biến và kiểu dữ liệu', [
    Q('Biến trong Python là?', ['Một số cố định không đổi khi chạy', 'Hằng số không thể gán lại', 'Chuỗi ký tự cố định', 'Tên gọi tham chiếu đến giá trị trong bộ nhớ'], 3, 'Biến là tên gắn với một vùng nhớ chứa giá trị.'),
    Q('Khai báo biến trong Python?', ['int x = 5;', 'var x = 5', 'let x = 5', 'Gán trực tiếp: x = 5'], 3, 'Python dynamic typing: gán giá trị là tạo biến (x = 5).'),
    Q('Kiểu dữ liệu int trong Python là?', ['Số nguyên', 'Số thực', 'Chuỗi ký tự (str)', 'Boolean'], 0, 'int = số nguyên (5, -10, 100).'),
    Q('Kiểu dữ liệu float trong Python là?', ['Số nguyên', 'Boolean', 'Chuỗi ký tự (str)', 'Số thực'], 3, 'float = số thực (3.14, -2.5).'),
    Q('Kiểu dữ liệu str trong Python là?', ['Boolean', 'Chuỗi ký tự', 'Số nguyên', 'Số thực'], 1, 'str = chuỗi (string), dùng "abc" hoặc \'abc\'.'),
    Q('Kiểu dữ liệu bool trong Python có giá trị?', ['Có và Không', 'True và False', '0 và 1', 'Yes và No'], 1, 'bool có 2 giá trị: True và False (viết hoa chữ đầu).'),
  ]),

  M(11, 'Toán tử và biểu thức', [
    Q('Toán tử cộng trong Python là?', ['add (tên hàm)', '+', '& (toán tử AND bit)', 'plus (từ tiếng Anh)'], 1, 'Toán tử cộng là +.'),
    Q('Phép chia lấy phần nguyên trong Python?', ['%', '** (luỹ thừa)', '/', '//'], 3, 'Toán tử // = chia lấy phần nguyên; 7 // 2 = 3.'),
    Q('Phép chia lấy dư trong Python?', ['/', '//', 'mod (từ khoá Pascal)', '%'], 3, '% = lấy dư (modulo); 7 % 2 = 1.'),
    Q('Phép luỹ thừa trong Python?', ['pow (hàm pow, không phải toán tử)', '^^ (không tồn tại trong Python)', '**', '^ (toán tử XOR bit)'], 2, '** là toán tử luỹ thừa; 2 ** 3 = 8.'),
    Q('5 / 2 trong Python kết quả?', ['2.5', 'ZeroDivisionError', '2', '3'], 0, 'Python 3: / là chia thực, luôn cho float (2.5).'),
    Q('Toán tử so sánh "bằng" trong Python?', ['<> (cú pháp Pascal cũ)', '= (phép gán giá trị)', '!= (so sánh khác nhau)', '=='], 3, '== so sánh bằng; = là gán giá trị.'),
  ]),

  M(12, 'Câu lệnh nhập - xuất', [
    Q('Lệnh nhập dữ liệu từ bàn phím trong Python?', ['read()', 'print()', 'scan()', 'input()'], 3, 'input() đọc 1 dòng từ bàn phím, trả về chuỗi.'),
    Q('`input()` trả về kiểu?', ['float (số thực)', 'bool (đúng/sai)', 'str (chuỗi)', 'int (số nguyên)'], 2, 'input() luôn trả về chuỗi; cần ép kiểu khi cần số.'),
    Q('Ép kiểu chuỗi thành int?', ['toInt(s)', 'str(s)', 'int(s)', 'float(s)'], 2, 'int("5") = 5.'),
    Q('Ép kiểu chuỗi thành float?', ['int(s)', 'float(s)', 'str(s)', 'toFloat(s)'], 1, 'float("3.14") = 3.14.'),
    Q('Nhập tuổi và in ra tuổi: `age = int(input())`. Sau đó?', ['print(age)', 'cout(age)', 'printf(age)', 'print("age")'], 0, 'print(age) in giá trị của biến.'),
    Q('In có format trong Python dùng?', ['str() để ép kiểu sang chuỗi', 'f-string: f"x = {x}"', 'printf', 'format()'], 1, 'f-string là cách format hiện đại nhất: f"x = {x}".'),
  ]),

  M(13, 'Câu lệnh điều kiện if-else', [
    Q('Cú pháp if trong Python?', ['IF đk THEN', 'if điều_kiện:', 'if (đk) {', 'if đk DO'], 1, 'Python: `if điều_kiện:` rồi indent (tab) khối lệnh.'),
    Q('Python dùng gì để phân khối lệnh?', ['Dấu ngoặc nhọn {} như C/Java', 'Thụt lề (indentation)', 'do/end', 'BEGIN/END'], 1, 'Python dùng thụt lề (4 spaces hoặc tab) để phân khối lệnh.'),
    Q('Khối else được thực hiện khi?', ['Điều kiện if đúng', 'Điều kiện if sai', 'Luôn luôn', 'Không bao giờ'], 1, 'else chạy khi điều kiện if là False.'),
    Q('Cú pháp xét nhiều trường hợp?', ['if - elseif - else', 'switch - case', 'if - else if - else', 'if - elif - else'], 3, 'Python: if - elif - else.'),
    Q('Toán tử logic AND trong Python?', ['&& (cú pháp C/Java)', 'AND (viết hoa, SQL)', 'and', '& (AND theo bit)'], 2, 'Python dùng từ khoá `and` (chữ thường).'),
    Q('Toán tử logic OR trong Python?', ['OR (viết hoa, SQL)', '| (OR theo bit)', '|| (cú pháp C/Java)', 'or'], 3, 'Python dùng từ khoá `or`.'),
  ]),

  M(14, 'Vòng lặp for', [
    Q('Cú pháp vòng for trong Python?', ['for i in range(n):', 'for i := 1 to n', 'for(i=0;i<n;i++)', 'foreach i'], 0, 'Python: `for biến in iterable:`.'),
    Q('`range(5)` tạo dãy?', ['5', '0, 1, 2, 3, 4, 5', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4'], 3, 'range(5) = [0, 1, 2, 3, 4] (không bao gồm 5).'),
    Q('`range(1, 6)` tạo dãy?', ['1, 2, 3, 4, 5, 6', '1, 2, 3, 4, 5', '0, 1, 2, 3, 4, 5', '1-5'], 1, 'range(start, stop): từ start đến stop-1.'),
    Q('`range(0, 10, 2)` tạo dãy?', ['0, 2, 4, 6, 8', '2, 4, 6, 8', '0, 2, 4, 6, 8, 10', '0, 1, 2, 3, 4, 5, 6, 7, 8, 9'], 0, 'range(start, stop, step): step = 2 → 0, 2, 4, 6, 8.'),
    Q('Vòng for in 5 lần "Hello"?', ['for(5){print}', '5: print("Hello")', 'for _ in range(5): print("Hello")', 'print(Hello)*5'], 2, 'Lặp 5 lần dùng for _ in range(5).'),
    Q('Tổng các số 1 đến 100?', ['sum(range(1, 101))', 'sum(range(100))', '100', 'sum(range(1, 100))'], 0, 'sum(range(1, 101)) tính 1+2+...+100 = 5050.'),
  ]),

  M(15, 'Vòng lặp while', [
    Q('Cú pháp while trong Python?', ['while đk DO', 'while (đk) {', 'do while', 'while điều_kiện:'], 3, 'Python: `while điều_kiện:`.'),
    Q('Vòng while dừng khi?', ['Không bao giờ', 'Điều kiện đúng', 'Sau 100 lần', 'Điều kiện sai'], 3, 'while chạy khi điều kiện True, dừng khi False.'),
    Q('Lệnh thoát vòng lặp?', ['return', 'continue', 'break', 'exit() — thoát chương trình'], 2, 'break thoát ngay vòng lặp gần nhất.'),
    Q('Lệnh bỏ qua bước hiện tại, sang vòng kế?', ['continue', 'break — thoát hẳn vòng lặp', 'pass — không làm gì cả', 'skip — không có trong Python'], 0, 'continue: bỏ phần còn lại, chuyển sang lần lặp tiếp theo.'),
    Q('Nguy cơ của while khi viết sai?', ['Vòng lặp vô hạn', 'Bị reset', 'Chạy đúng', 'Hỏng máy'], 0, 'Nếu điều kiện luôn True và không có break → vòng lặp vô hạn.'),
    Q('Khi nào dùng while thay vì for?', ['Số lần lặp xác định', 'Không bao giờ', 'Lặp 0 lần', 'Số lần lặp không biết trước'], 3, 'while phù hợp khi không biết trước số lần lặp (vd: đến khi nhập đúng).'),
  ]),

  M(16, 'Hàm trong Python', [
    Q('Hàm trong Python định nghĩa bằng?', ['def function', 'func tên_hàm():', 'def', 'function'], 2, 'def tên_hàm(tham_số): khai báo hàm.'),
    Q('`def chao(ten): print("Xin chao", ten)` - hàm này?', ['NameError do thiếu dấu hai chấm', 'Trả về giá trị', 'Không có tham số', 'Nhận 1 tham số, in lời chào'], 3, 'Hàm chao() nhận tham số ten, in lời chào.'),
    Q('Trả về giá trị từ hàm dùng?', ['return', 'give value (cú pháp giả định)', 'output', 'print() để xuất ra màn hình'], 0, 'return trả về giá trị cho hàm gọi.'),
    Q('Hàm không có return mặc định trả về?', ['None', 'False (mặc định Boolean)', '0', '"" (chuỗi rỗng)'], 0, 'Hàm không có return trả về None.'),
    Q('Phạm vi (scope) của biến trong hàm?', ['Module', 'Cục bộ (local)', 'Toàn cục', 'Phạm vi lớp (class)'], 1, 'Biến trong hàm là local, không nhìn thấy bên ngoài.'),
    Q('Hàm có thể gọi chính nó được gọi là?', ['Hằng số (constant)', 'Vòng lặp', 'Method', 'Đệ quy (recursion)'], 3, 'Đệ quy: hàm tự gọi chính nó để giải bài toán nhỏ hơn.'),
  ]),

  M(17, 'Danh sách (list) và chuỗi (string)', [
    Q('List trong Python khai báo?', ['lst = [1, 2, 3]', 'lst = (1, 2, 3)', 'lst = {1, 2, 3}', 'array(1,2,3)'], 0, 'List Python dùng dấu []: lst = [1, 2, 3].'),
    Q('Truy cập phần tử đầu tiên của list?', ['lst.first', 'lst.start', 'lst[1]', 'lst[0]'], 3, 'Python index từ 0; lst[0] là phần tử đầu.'),
    Q('Thêm phần tử vào cuối list?', ['lst.append(x)', 'lst.insert(x)', 'lst.add(x)', 'lst.push(x)'], 0, 'append() thêm vào cuối list.'),
    Q('Số phần tử của list?', ['lst.size()', 'lst.length', 'len(lst)', 'count(lst)'], 2, 'len(lst) trả về số phần tử.'),
    Q('Chuỗi trong Python tạo bằng?', ['{abc} (cú pháp tập hợp set)', '[abc] (cú pháp danh sách list)', '"abc" hoặc \'abc\'', '(abc) (cú pháp tuple)'], 2, 'Chuỗi Python dùng dấu nháy đơn hoặc kép.'),
    Q('Nối 2 chuỗi dùng toán tử?', ['+', '.', '& (toán tử AND theo bit)', '* (nhân lặp chuỗi)'], 0, '"Hello" + " " + "World" = "Hello World".'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('1 Byte = ? bit', ['16', '1024', '8', '4'], 2, '1 byte = 8 bit.'),
    Q('Đơn vị nhỏ nhất biểu diễn thông tin?', ['Byte (1 byte = 8 bit)', 'KB (1024 byte)', 'Bit', 'GB (10^9 byte)'], 2, 'Bit là đơn vị nhỏ nhất.'),
    Q('Lệnh in trong Python?', ['echo (lệnh in của PHP/Bash)', 'cout << (lệnh in của C++)', 'print()', 'printf()'], 2, 'print() trong Python.'),
    Q('Biến `x = 5` trong Python có kiểu?', ['bool — đúng/sai', 'str — chuỗi ký tự', 'float — số thực', 'int'], 3, 'x = 5 là int (số nguyên).'),
    Q('Vòng for đi qua các phần tử của list?', ['for x in lst:', 'foreach x', 'lst.each', 'for(x in lst)'], 0, 'Python: `for x in lst:`.'),
    Q('Hàm trong Python khai báo bằng?', ['func (cú pháp giả định)', 'def', 'let (cú pháp JavaScript)', 'function'], 1, 'def định nghĩa hàm.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Thuật toán và biểu diễn', [
    Q('Thuật toán là?', ['Đáp án', 'Công thức', 'Dãy hữu hạn bước giải bài toán', 'Phép tính'], 2, 'Thuật toán: dãy hữu hạn các bước rõ ràng để giải bài toán.'),
    Q('Tính chất của thuật toán?', ['Tính ngẫu nhiên', 'Tính lặp vô hạn không dừng', 'Tính chậm', 'Tính dừng, xác định, đầu vào - đầu ra, hiệu quả'], 3, 'Đặc trưng: dừng, xác định, có đầu vào và đầu ra, hiệu quả.'),
    Q('Biểu diễn thuật toán có thể bằng?', ['Liệt kê + sơ đồ khối + mã giả', 'Chỉ kể', 'Chỉ mã', 'Chỉ vẽ'], 0, 'Liệt kê các bước, sơ đồ khối (flowchart), mã giả (pseudocode).'),
    Q('Sơ đồ khối thuộc cấu trúc nào?', ['Bắt đầu - kết thúc, xử lý, điều kiện, vòng lặp', 'Chỉ ô vuông', 'Chỉ ô tròn', 'Chỉ mũi tên'], 0, 'Hình oval (bắt đầu/kết thúc), chữ nhật (xử lý), thoi (điều kiện), mũi tên (luồng).'),
    Q('Pseudocode là?', ['Mã máy', 'HTML — ngôn ngữ đánh dấu web', 'Mã giả, gần ngôn ngữ tự nhiên', 'Mã hex'], 2, 'Mã giả mô tả thuật toán giống ngôn ngữ tự nhiên, dễ hiểu.'),
    Q('Mục đích biểu diễn thuật toán trước khi viết code?', ['Hiểu rõ logic, tránh sai sót', 'Tốc độ chạy code nhanh hơn', 'Bắt buộc', 'Tốn thời gian'], 0, 'Lên thuật toán trước giúp tránh lỗi logic và tăng tốc viết code.'),
  ]),

  M(20, 'Thuật toán tìm kiếm tuyến tính', [
    Q('Tìm kiếm tuyến tính là?', ['Duyệt từ đầu đến cuối tìm phần tử', 'Đệ quy', 'Chia đôi', 'Sắp xếp'], 0, 'Tuyến tính: duyệt tuần tự từ đầu đến cuối list.'),
    Q('Độ phức tạp tìm tuyến tính?', ['O(n²) — như sắp xếp nổi bọt', 'O(1) — như tra mảng theo chỉ số', 'O(n)', 'O(log n)'], 2, 'Tìm tuyến tính có độ phức tạp O(n) - tệ nhất duyệt cả n phần tử.'),
    Q('Code tìm tuyến tính trong Python?', ['for i, x in enumerate(lst): if x == target: return i', 'print(lst)', 'sort(lst)', 'sum(lst)'], 0, 'Duyệt enumerate và so sánh; return index khi tìm thấy.'),
    Q('Khi nào dùng tìm tuyến tính?', ['Mảng đã sắp', 'Không bao giờ', 'Mảng cực lớn', 'Mảng nhỏ, chưa sắp xếp'], 3, 'Phù hợp khi mảng nhỏ hoặc chưa sắp xếp.'),
    Q('Tìm tuyến tính có cần điều kiện gì?', ['Mỗi phần tử phải có ID duy nhất', 'Không cần (mảng bất kỳ)', 'Đã sắp', 'Đã đảo ngược'], 1, 'Không cần điều kiện gì với dữ liệu.'),
    Q('Nếu không tìm thấy, hàm trả về?', ['0', 'True (đã tìm thấy)', '-1 hoặc None', 'IndexError ngoài phạm vi'], 2, 'Quy ước thường trả về -1 hoặc None khi không tìm thấy.'),
  ]),

  M(21, 'Thuật toán tìm kiếm nhị phân', [
    Q('Tìm kiếm nhị phân yêu cầu?', ['Mảng bất kỳ', 'Mảng đã sắp xếp', 'Mảng rỗng', 'Mảng có 1 phần tử'], 1, 'Binary search yêu cầu mảng phải được sắp xếp.'),
    Q('Tìm nhị phân hoạt động bằng cách?', ['Đảo ngược', 'Chia đôi liên tục, so sánh giữa', 'Duyệt từ đầu', 'Sắp xếp lại'], 1, 'Mỗi bước so sánh phần tử giữa, loại bỏ nửa không chứa target.'),
    Q('Độ phức tạp tìm nhị phân?', ['O(n) — như tìm tuyến tính', 'O(log n)', 'O(1) — truy cập trực tiếp', 'O(n²) — như bubble sort'], 1, 'Binary search: O(log n) - rất nhanh với mảng lớn.'),
    Q('Tìm số 7 trong [1,3,5,7,9,11] bằng nhị phân?', ['So với 5 (giữa) → so với 9 → tìm thấy 7', 'Bắt đầu từ cuối', 'Đảo ngược', 'Duyệt từng phần tử'], 0, 'Mid index 2 (val 5), 7 > 5 → tìm bên phải; mid mới là index 4 (val 9), 7 < 9 → bên trái; thấy 7.'),
    Q('Python có hàm thư viện tìm nhị phân?', ['find (tìm chuỗi con)', 'locate', 'bisect', 'search'], 2, 'Module bisect cung cấp bisect_left, bisect_right cho tìm nhị phân.'),
    Q('Nếu không tìm thấy, tìm nhị phân kết thúc khi?', ['left == right', 'left < 0', 'Không bao giờ', 'left > right'], 3, 'Vòng lặp dừng khi left > right (khoảng tìm rỗng).'),
  ]),

  M(22, 'Thuật toán sắp xếp - Sắp xếp nổi bọt', [
    Q('Sắp xếp nổi bọt (bubble sort) là?', ['Đệ quy', 'Chia đôi', 'Random', 'So sánh - hoán đổi từng cặp kề nhau'], 3, 'Bubble sort: so sánh cặp kề, hoán đổi nếu sai thứ tự, lặp lại.'),
    Q('Độ phức tạp bubble sort tệ nhất?', ['O(1) — hằng số', 'O(n) — tuyến tính', 'O(n²)', 'O(log n)'], 2, 'Bubble sort O(n²) - chậm với mảng lớn.'),
    Q('Bubble sort có ổn định không?', ['Có (stable)', 'Chỉ với số nguyên', 'Không ổn định (unstable)', 'Tuỳ ngôn ngữ'], 0, 'Bubble sort là thuật toán sắp xếp ổn định.'),
    Q('Code bubble sort trong Python?', ['sort(lst)', 'sum(lst)', 'print(lst)', 'Vòng for lồng 2 cấp, hoán đổi nếu lst[i] > lst[i+1]'], 3, 'Bubble: 2 vòng for, hoán đổi cặp kề nếu thứ tự sai.'),
    Q('Hoán đổi 2 biến trong Python?', ['tmp = a; a = b; b = tmp', 'swap(a, b)', 'a, b = b, a', 'a := b; b := a'], 2, 'Python: a, b = b, a là cách hoán đổi đơn giản nhất.'),
    Q('Bubble sort có thể tối ưu bằng?', ['Đảo ngược', 'Sắp lại', 'Cờ flag dừng sớm khi không có hoán đổi', 'Không thể'], 2, 'Nếu không hoán đổi nào trong 1 lượt → mảng đã sắp xong, dừng sớm.'),
  ]),

  M(23, 'Thuật toán sắp xếp - Sắp xếp chọn và chèn', [
    Q('Sắp xếp chọn (selection sort) là?', ['Lặp đệ quy', 'Random', 'Chọn phần tử nhỏ nhất trong phần chưa sắp, đưa lên đầu', 'Chia đôi'], 2, 'Selection sort: mỗi lượt chọn min của phần chưa sắp, đổi vị trí với đầu phần chưa sắp.'),
    Q('Độ phức tạp selection sort?', ['O(n) — tuyến tính', 'O(n²)', 'O(log n)', 'O(1) — hằng số'], 1, 'Selection sort O(n²) tệ nhất và trung bình.'),
    Q('Sắp xếp chèn (insertion sort) là?', ['Chèn từng phần tử vào đúng vị trí ở mảng đã sắp', 'Random', 'Đảo ngược', 'Chọn min'], 0, 'Insertion sort: lấy từng phần tử, chèn vào đúng chỗ trong mảng đã sắp đầu.'),
    Q('Khi nào insertion sort nhanh nhất?', ['Mảng gần như đã sắp', 'Mảng rỗng', 'Mảng ngẫu nhiên', 'Mảng đảo ngược'], 0, 'Insertion sort tốt nhất O(n) khi mảng gần như đã sắp xếp.'),
    Q('Python có hàm sắp xếp built-in?', ['order()', 'arrange()', 'sorted() và list.sort()', 'sort_list()'], 2, 'sorted() trả về list mới đã sắp; list.sort() sắp tại chỗ.'),
    Q('Sắp xếp giảm dần trong Python?', ['sortDesc(lst)', 'lst.reverse()', 'sorted(lst, reverse=True)', 'sort(lst, desc)'], 2, 'sorted(lst, reverse=True) trả về list giảm dần.'),
  ]),

  M(24, 'Bài toán đơn giản với mảng', [
    Q('Tổng các phần tử của list?', ['sum(lst)', 'lst.sum()', 'add(lst)', 'total(lst)'], 0, 'sum(lst) tính tổng các phần tử.'),
    Q('Max của list?', ['highest(lst)', 'max(lst)', 'top(lst)', 'lst.max()'], 1, 'max(lst) trả về giá trị lớn nhất.'),
    Q('Min của list?', ['min(lst)', 'low(lst)', 'lst.min()', 'bottom(lst)'], 0, 'min(lst) trả về giá trị nhỏ nhất.'),
    Q('Trung bình cộng list?', ['sum(lst) / len(lst)', 'mean(lst)', 'avg(lst)', 'lst.avg()'], 0, 'Trung bình = tổng / số phần tử.'),
    Q('Đếm số chẵn trong list?', ['sum(lst) % 2', 'lst.count_even', 'count_even(lst)', 'len([x for x in lst if x % 2 == 0])'], 3, 'List comprehension lọc x % 2 == 0 rồi len().'),
    Q('Đảo ngược list?', ['lst * -1', 'lst.flip()', 'invert(lst)', 'lst[::-1] hoặc lst.reverse()'], 3, 'lst[::-1] tạo bản đảo ngược; lst.reverse() đảo tại chỗ.'),
  ]),

  M(25, 'Xử lý chuỗi (string)', [
    Q('Độ dài chuỗi?', ['len(s)', 's.length', 'length(s)', 'size(s)'], 0, 'len(s) trả về số ký tự.'),
    Q('Chuyển chuỗi sang chữ hoa?', ['s.upper()', 's.toUpperCase()', 'toUpper(s)', 's.upcase'], 0, 'str.upper() trả về chuỗi viết hoa.'),
    Q('Chuyển chuỗi sang chữ thường?', ['toLower(s)', 's.toLowerCase()', 's.downcase', 's.lower()'], 3, 'str.lower() trả về chuỗi viết thường.'),
    Q('Tách chuỗi thành list theo dấu cách?', ['s.split()', 'tokenize(s)', 's.cut()', 's.divide()'], 0, 'split() mặc định tách theo khoảng trắng.'),
    Q('Ghép list các chuỗi với dấu cách?', ['lst.join(" ")', '" ".join(lst)', 'concat(lst)', 'sum(lst)'], 1, 'sep.join(lst) ghép các chuỗi của list với separator.'),
    Q('Thay thế chuỗi con?', ['s.change(cũ, mới)', 's.replace(cũ, mới)', 'replace(s, cũ, mới)', 's.swap(cũ, mới)'], 1, 's.replace("a", "b") thay mọi "a" bằng "b".'),
  ]),

  M(26, 'Câu lệnh điều kiện và lặp - bài tập tổng hợp', [
    Q('Kiểm tra số dương, âm, 0 dùng?', ['goto label (cú pháp BASIC cũ)', 'if - elif - else', 'switch', 'match - case'], 1, 'if x > 0 / elif x < 0 / else (x == 0).'),
    Q('In các số chẵn từ 1 đến 20?', ['for i in range(2, 21, 2): print(i)', 'for i in range(20)', 'i = 2; while < 20', 'print(2, 4, 6)'], 0, 'range(2, 21, 2) sinh 2, 4, ..., 20.'),
    Q('Tính giai thừa n bằng vòng lặp?', ['math.factorial(n)', 'fact = 1; for i in range(1, n+1): fact *= i', 'fact = n', 'factorial(n)'], 1, 'Lặp tích lũy: fact *= i với i từ 1 đến n.'),
    Q('Kiểm tra số nguyên tố?', ['Random', 'Kiểm tra n > 1 là đủ', 'Chia n cho 2', 'Duyệt từ 2 đến √n, kiểm tra chia hết'], 3, 'Kiểm tra chia hết bởi i từ 2 đến int(sqrt(n)).'),
    Q('Tính tổng các chữ số của n?', ['Dùng while với n % 10 và n //= 10', 'sum(n)', 'n.digits()', 'str(n)'], 0, 'Lặp while n > 0: tổng += n % 10; n //= 10.'),
    Q('In tam giác sao 5 dòng (1 sao đến 5 sao)?', ['for i in range(1, 6): print("*" * i)', '5 lần in *', 'for i: print("*")', 'print("*" * 5)'], 0, 'Lặp i từ 1 đến 5, in "*" * i.'),
  ]),

  M(27, 'Module và thư viện Python', [
    Q('Để dùng thư viện, dùng từ khoá?', ['import', 'include', 'using (cú pháp C#/C++)', 'require'], 0, 'Python: `import module_name`.'),
    Q('Thư viện toán học Python?', ['math', 'calculator', 'numbers', 'calc — máy tính bỏ túi'], 0, 'math chứa các hàm toán học: sqrt, sin, cos, pi.'),
    Q('`math.sqrt(16)` trả về?', ['16', '2', '4', '4.0'], 3, 'sqrt = căn bậc 2; math.sqrt(16) = 4.0 (float).'),
    Q('`math.pi` là?', ['3.14', 'Hằng số π ~3.14159', '3', '22/7'], 1, 'math.pi = 3.141592653589793.'),
    Q('Thư viện sinh số ngẫu nhiên?', ['number', 'random', 'rand (tên hàm của C)', 'randomize'], 1, 'random module: random(), randint(), choice().'),
    Q('`random.randint(1, 10)` trả về?', ['1.0', 'Số nguyên ngẫu nhiên từ 1-10', 'Chuỗi ký tự gồm số ngẫu nhiên', 'Số thực'], 1, 'randint(a, b) trả về số nguyên ngẫu nhiên trong [a, b] (cả 2 đầu).'),
  ]),

  M(28, 'Tin học và nghề nghiệp', [
    Q('Lập trình viên (developer) làm?', ['Sửa máy', 'Bán hàng', 'Quản trị mạng', 'Viết và bảo trì phần mềm'], 3, 'Dev viết code, debug, bảo trì, cải tiến phần mềm.'),
    Q('Nhà khoa học dữ liệu (Data Scientist) làm?', ['Quản trị mạng', 'Phân tích dữ liệu, xây mô hình', 'Sửa máy', 'Thiết kế đồ hoạ'], 1, 'Data Scientist: thu thập, phân tích dữ liệu, xây mô hình ML.'),
    Q('Kỹ sư AI làm?', ['Bán hàng', 'Sửa máy', 'Lễ tân', 'Phát triển hệ thống trí tuệ nhân tạo'], 3, 'AI Engineer: phát triển mô hình ML, deep learning, xử lý NLP/CV.'),
    Q('Kỹ sư an ninh mạng (Cybersecurity) làm?', ['Bán hàng', 'Tấn công hệ thống', 'Bảo vệ hệ thống khỏi tấn công', 'Marketing'], 2, 'Cybersecurity Engineer bảo vệ hệ thống, phát hiện và xử lý tấn công.'),
    Q('Ngôn ngữ lập trình phổ biến hiện nay?', ['Python, JavaScript, Java, C++', 'BASIC — ngôn ngữ cũ thập niên 80', 'Pascal', 'COBOL — ngôn ngữ cho ngân hàng'], 0, 'Top ngôn ngữ: Python, JavaScript, Java, C++, C#, Go.'),
    Q('Học sinh muốn theo CNTT cần?', ['Chỉ thuộc lòng', 'Chỉ chạy nhanh', 'Chỉ giỏi vẽ', 'Toán, logic, tiếng Anh, kiên trì'], 3, 'CNTT cần toán/logic, tiếng Anh, tư duy, kiên trì và sáng tạo.'),
  ]),

  M(29, 'Lập trình hướng đối tượng - khái quát', [
    Q('OOP viết tắt là?', ['One Object Process', 'Online Office Pack', 'Object-Oriented Programming', 'Open Operating Platform'], 2, 'OOP = Lập trình hướng đối tượng.'),
    Q('OOP dựa trên 4 nguyên lý?', ['HTML, CSS, JS, PHP', 'Encapsulation, Inheritance, Polymorphism, Abstraction', 'SQL, NoSQL, Cache, DB', 'Sort, Search, Save, Send'], 1, '4 nguyên lý: đóng gói, kế thừa, đa hình, trừu tượng.'),
    Q('Class là?', ['Bản thiết kế (blueprint) cho object', '1 hàm', '1 đối tượng', '1 biến'], 0, 'Class định nghĩa thuộc tính và phương thức; object là instance của class.'),
    Q('Object là?', ['Hàm độc lập không thuộc class', 'Đối tượng cụ thể tạo từ class', 'Khuôn mẫu định nghĩa thuộc tính', 'Module'], 1, 'Object = thể hiện cụ thể (instance) của class.'),
    Q('Định nghĩa class trong Python?', ['create class', 'class TenClass:', 'new Class', 'def class'], 1, 'class TenClass: dùng từ khoá class.'),
    Q('Phương thức khởi tạo trong Python?', ['start() (gọi thủ công)', '__init__', 'new() (cú pháp Java)', 'constructor'], 1, '__init__ được gọi khi tạo object mới.'),
  ]),

  M(30, 'Cơ sở dữ liệu - khái niệm', [
    Q('CSDL (database) là?', ['Phần mềm', 'Hệ điều hành', 'Mạng máy tính', 'Tập hợp dữ liệu có cấu trúc, lưu trữ và quản lý'], 3, 'CSDL = collection of structured data được tổ chức và quản lý.'),
    Q('Hệ quản trị CSDL (DBMS) là?', ['Phần mềm quản lý CSDL', 'Bàn phím', 'Tập hợp dữ liệu được lưu trữ', 'Thiết bị kết nối Internet'], 0, 'DBMS: phần mềm tạo, truy vấn, quản lý CSDL.'),
    Q('Ngôn ngữ truy vấn CSDL phổ biến?', ['Python', 'CSS (ngôn ngữ định dạng web)', 'SQL', 'HTML (ngôn ngữ đánh dấu web)'], 2, 'SQL (Structured Query Language) chuẩn cho CSDL quan hệ.'),
    Q('Hệ quản trị CSDL phổ biến?', ['Microsoft Word (xử lý văn bản)', 'MySQL, PostgreSQL, Oracle, SQL Server', 'Microsoft Excel (bảng tính)', 'PowerPoint'], 1, 'DBMS phổ biến: MySQL, PostgreSQL, Oracle, MS SQL Server, MongoDB.'),
    Q('Bảng (table) trong CSDL quan hệ gồm?', ['Hàng và cột', 'Ô đơn lẻ', 'Chỉ hàng', 'Chỉ cột'], 0, 'Bảng = các hàng (records) × cột (fields).'),
    Q('Khoá chính (primary key) là?', ['Chỉ mục tăng tốc truy vấn', 'Cột định danh duy nhất mỗi hàng', 'Tên bảng', 'Khoá ngoại'], 1, 'PK định danh duy nhất mỗi bản ghi, không trùng và không null.'),
  ]),

  M(31, 'Ứng dụng tin học trong đời sống', [
    Q('Tin học ứng dụng trong y tế gồm?', ['Quản lý bệnh án, chẩn đoán AI, telemedicine', 'Chỉ kế toán', 'Chỉ in toa', 'Chỉ lịch hẹn'], 0, 'Y tế: bệnh án điện tử, chẩn đoán hình ảnh AI, khám từ xa, robot phẫu thuật.'),
    Q('Tin học trong giáo dục gồm?', ['Chỉ máy chiếu', 'Chỉ máy tính', 'LMS, e-learning, AI giáo dục, MOOCs', 'Chỉ Excel'], 2, 'GD: hệ quản lý học tập (LMS), MOOCs, AI tutor, VR/AR.'),
    Q('Tin học trong giao thông?', ['Chỉ camera', 'Chỉ đèn giao thông', 'GPS, bản đồ, xe tự lái, giao thông thông minh', 'Chỉ radio'], 2, 'Giao thông thông minh: GPS, Google Maps, xe tự lái, ITS.'),
    Q('Tin học trong nông nghiệp?', ['Chỉ thuốc trừ sâu', 'Chỉ máy cày', 'IoT, drone, AI dự báo, thuỷ canh thông minh', 'Chỉ trồng tay'], 2, 'Smart farming: IoT cảm biến, drone, AI dự báo, thuỷ canh.'),
    Q('Tin học trong tài chính ngân hàng?', ['Chỉ rút tiền', 'Chỉ tính tay', 'Chỉ in séc', 'Online banking, ví điện tử, blockchain'], 3, 'Fintech: e-banking, ví điện tử (Momo, ZaloPay), blockchain, crypto.'),
    Q('Tin học trong giải trí?', ['Chỉ radio', 'Chỉ sách', 'Game, streaming, mạng xã hội, VR', 'Chỉ TV'], 2, 'Giải trí: game, Netflix, YouTube, mạng xã hội, VR/AR.'),
  ]),

  M(32, 'AI và Machine Learning - sơ lược', [
    Q('AI là?', ['Máy tính', 'Robot công nghiệp lắp ráp', 'Internet', 'Trí tuệ nhân tạo - máy mô phỏng trí thông minh'], 3, 'AI: máy mô phỏng các quá trình nhận thức của con người.'),
    Q('Machine Learning là?', ['Máy học từ dữ liệu', 'Sửa máy', 'Bảo trì', 'Lập trình thủ công'], 0, 'ML: máy học mẫu từ dữ liệu thay vì lập trình thủ công.'),
    Q('Deep Learning dựa trên?', ['Logic Boolean', 'Mạng nơ-ron sâu', 'Đệ quy', 'Sắp xếp'], 1, 'Deep Learning dùng mạng nơ-ron nhân tạo nhiều lớp.'),
    Q('Ứng dụng AI phổ biến?', ['Chỉ Paint', 'Chỉ Word', 'Chỉ Excel', 'Trợ lý ảo, dịch máy, nhận dạng ảnh, chatbot'], 3, 'AI: Siri, Google Translate, nhận diện ảnh, ChatGPT, xe tự lái.'),
    Q('ChatGPT là?', ['Mô hình ngôn ngữ lớn (LLM)', 'Bản đồ', 'Trình duyệt', 'Trò chơi giải đố trực tuyến'], 0, 'ChatGPT là LLM do OpenAI phát triển, ra mắt 11/2022.'),
    Q('Đạo đức AI cần chú ý?', ['Tốc độ', 'Kích thước', 'Thiên vị (bias), riêng tư, trách nhiệm', 'Màu sắc'], 2, 'AI ethics: tránh bias, bảo vệ riêng tư, minh bạch, trách nhiệm.'),
  ]),

  M(33, 'Dự án lập trình nhỏ', [
    Q('Bước 1 khi làm dự án phần mềm?', ['Xác định bài toán', 'Viết code', 'Chạy thử', 'Giao hàng'], 0, 'Quy trình: phân tích yêu cầu → thiết kế → code → test → triển khai.'),
    Q('Phương pháp lập trình theo Agile đặc trưng bởi?', ['Lặp ngắn (sprint), phản hồi nhanh', 'Lập kế hoạch 1 năm', 'Làm xong rồi sửa', 'Không kế hoạch'], 0, 'Agile: chia thành sprint 1-2 tuần, liên tục phản hồi và cải tiến.'),
    Q('Kiểm thử (testing) gồm?', ['Unit test, integration test, system test', 'Chỉ unit', 'Chỉ debug', 'Chỉ chạy'], 0, 'Test: đơn vị (unit), tích hợp (integration), hệ thống (system), người dùng (UAT).'),
    Q('Git dùng để?', ['Tải file', 'Chạy game', 'Gửi email', 'Quản lý phiên bản mã nguồn'], 3, 'Git là hệ quản lý phiên bản (version control) phổ biến nhất.'),
    Q('GitHub là?', ['Nền tảng lưu trữ và cộng tác qua Git', 'Hệ điều hành nguồn mở', 'Trình duyệt', 'Game online'], 0, 'GitHub là dịch vụ lưu trữ Git repo, hỗ trợ cộng tác phát triển.'),
    Q('Làm việc nhóm trong dự án cần?', ['Im lặng', 'Mỗi người tự quyết định hướng đi', 'Giao tiếp, phân công, dùng Git', 'Mạnh ai nấy làm'], 2, 'Teamwork: giao tiếp, phân công rõ ràng, version control, code review.'),
  ]),

  M(34, 'Hướng nghiệp tin học', [
    Q('Ngành CNTT đào tạo ở?', ['Chỉ ĐH lớn', 'Chỉ tự học', 'Đại học, cao đẳng, bootcamp', 'Không cần học'], 2, 'CNTT đào tạo ở ĐH, CĐ, trung cấp, bootcamp, tự học online.'),
    Q('Kỹ năng quan trọng của lập trình viên?', ['Logic, ngoại ngữ, giải quyết vấn đề, học liên tục', 'Chỉ vẽ', 'Chỉ code', 'Chỉ thuộc lòng'], 0, 'Lập trình viên cần logic, tiếng Anh, problem-solving, học liên tục công nghệ mới.'),
    Q('CNTT có thể làm việc?', ['Chỉ trong nước', 'Từ xa, đa quốc gia', 'Chỉ tại nhà máy', 'Chỉ văn phòng'], 1, 'CNTT có thể làm từ xa, freelance, làm cho công ty nước ngoài (remote).'),
    Q('Mức lương kỹ sư CNTT VN?', ['Thấp hơn lương công nhân', 'Trung bình', 'Cao hơn nhiều ngành khác', 'Không có lương'], 2, 'CNTT có mức lương cao và tăng nhanh ở VN.'),
    Q('Học CNTT có cần giỏi toán?', ['Chỉ cần văn', 'Không cần', 'Chỉ cần Anh', 'Có (nhất là khoa học máy tính)'], 3, 'CNTT, đặc biệt là khoa học máy tính, cần nền tảng toán tốt.'),
    Q('Nguồn học tin học miễn phí?', ['Chỉ sách giấy', 'Coursera, edX, FreeCodeCamp, YouTube', 'Chỉ ĐH', 'Phải mua khoá học mới học được'], 1, 'Nhiều nền tảng miễn phí: Coursera, edX, FreeCodeCamp, YouTube.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Thuật toán là?', ['Đáp án', 'Phép tính', 'Dãy hữu hạn bước giải bài toán', 'Công thức'], 2, 'Thuật toán: dãy hữu hạn bước rõ ràng để giải bài toán.'),
    Q('Tìm kiếm nhị phân yêu cầu?', ['Mảng rỗng', 'Mảng đã sắp xếp', 'Số lượng lớn', 'Mảng bất kỳ'], 1, 'Binary search yêu cầu mảng đã sắp xếp.'),
    Q('Vòng lặp for trong Python?', ['for x := 1 to n', 'forEach x', 'for x in iterable:', 'for(x;y;z)'], 2, 'Python: for x in iterable.'),
    Q('Sắp xếp mặc định trong Python?', ['arrange()', 'order()', 'sorted() / list.sort()', 'sort()'], 2, 'sorted() trả về list mới; sort() sắp tại chỗ.'),
    Q('1 GB =?', ['1000 MB', '1024 MB', '1 TB', '100 MB'], 1, '1 GB = 1024 MB.'),
    Q('OOP gồm 4 nguyên lý?', ['Đóng gói, kế thừa, đa hình, trừu tượng', 'HTML, CSS, JS, SQL', 'Class, Object, Method, Variable', 'Sort, Search, Save, Send'], 0, '4 nguyên lý OOP cơ bản.'),
  ]),
];

export const H10TIN_SCENARIOS = indexBy(H10TIN_WEEKS);
