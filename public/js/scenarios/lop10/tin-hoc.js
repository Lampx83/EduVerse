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
    Q('Xã hội tri thức là?', ['Xã hội mà tri thức là yếu tố sản xuất chính','XH nông nghiệp','XH săn bắn','XH công nghiệp thuần'], 0, 'Xã hội tri thức: tri thức + thông tin là động lực sản xuất chính.'),
    Q('Máy tính là?', ['Thiết bị xử lý thông tin tự động theo chương trình','Máy ghi âm','TV','Bàn tính'], 0, 'Máy tính = thiết bị xử lý dữ liệu tự động theo chương trình lưu sẵn.'),
    Q('Cuộc cách mạng công nghiệp 4.0 dựa trên?', ['AI, IoT, big data, robot','Hơi nước','Điện','Dây chuyền'], 0, 'CMCN 4.0: AI, IoT, big data, blockchain, robot, in 3D.'),
    Q('Thiết bị thông minh phổ biến hiện nay?', ['Điện thoại thông minh, máy tính bảng','Bàn tính','Đồng hồ cát','TV CRT'], 0, 'Smartphone, tablet, smart TV, smartwatch là thiết bị thông minh phổ biến.'),
    Q('Nghề nghiệp tin học gồm?', ['Lập trình, AI, dữ liệu, an ninh mạng','Nông dân','Bác sĩ','Giáo viên'], 0, 'Nghề CNTT: lập trình viên, kỹ sư AI, nhà khoa học dữ liệu, kỹ sư an ninh mạng...'),
    Q('Đạo đức trong tin học gồm?', ['Tôn trọng bản quyền, riêng tư, không lừa đảo','Sao chép tự do','Hack','Phá hoại'], 0, 'Đạo đức tin học: tôn trọng bản quyền, riêng tư, không vi phạm an ninh.'),
  ]),

  M(2, 'Biểu diễn thông tin trong máy tính', [
    Q('Đơn vị nhỏ nhất biểu diễn thông tin trong máy tính?', ['Bit','Byte','KB','MB'], 0, 'Bit (binary digit) = 0 hoặc 1, là đơn vị nhỏ nhất.'),
    Q('1 Byte bằng?', ['8 bit','4 bit','16 bit','1024 bit'], 0, '1 byte = 8 bit.'),
    Q('1 KB bằng?', ['1024 byte','1000 byte','1 MB','100 byte'], 0, '1 KB (kilobyte) = 2¹⁰ = 1024 byte.'),
    Q('1 MB bằng?', ['1024 KB','1000 KB','1 GB','100 KB'], 0, '1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.'),
    Q('Hệ đếm nhị phân dùng các chữ số?', ['0 và 1','0-9','0-15','A-Z'], 0, 'Nhị phân (binary) dùng 2 ký số: 0 và 1.'),
    Q('Hệ đếm thập lục phân (hex) dùng?', ['0-9 và A-F','0-9','0-7','A-Z'], 0, 'Hex (16) dùng 16 ký số: 0-9 và A-F.'),
  ]),

  M(3, 'ASCII và Unicode', [
    Q('ASCII là?', ['Bảng mã ký tự 7-bit (128 ký tự)','Bảng mã 16 bit','Bảng tiếng Việt','Bảng emoji'], 0, 'ASCII = American Standard Code for Information Interchange, 7 bit, 128 ký tự.'),
    Q('Chữ "A" trong ASCII có mã?', ['65','97','0','100'], 0, '"A" có mã ASCII 65; "a" là 97.'),
    Q('Chữ "a" trong ASCII có mã?', ['97','65','100','0'], 0, '"a" có mã 97; cách "A" 32 đơn vị.'),
    Q('Unicode được tạo ra để?', ['Biểu diễn được mọi ngôn ngữ trên thế giới','Chỉ tiếng Anh','Chỉ tiếng Việt','Chỉ emoji'], 0, 'Unicode (UTF-8, UTF-16) bao phủ mọi ngôn ngữ, ký tự, emoji.'),
    Q('UTF-8 dùng?', ['1-4 byte mỗi ký tự (linh hoạt)','Cố định 1 byte','Cố định 2 byte','Cố định 4 byte'], 0, 'UTF-8 mã hoá linh hoạt 1-4 byte, tương thích ngược với ASCII.'),
    Q('Tiếng Việt có dấu hiển thị đúng nhờ?', ['Unicode (UTF-8)','ASCII','TCVN3','VNI'], 0, 'Web hiện đại dùng UTF-8 để hiển thị tiếng Việt và mọi ngôn ngữ.'),
  ]),

  M(4, 'Biểu diễn số và hình ảnh', [
    Q('Số nguyên trong máy tính được biểu diễn bằng?', ['Hệ nhị phân (binary)','Hệ thập phân','Hệ chữ Latin','Hệ La Mã'], 0, 'Máy tính lưu số nguyên dưới dạng nhị phân (kèm bit dấu cho số âm).'),
    Q('Số thực được biểu diễn theo chuẩn?', ['IEEE 754 (dấu phẩy động)','Số nguyên','Hệ La Mã','Hex'], 0, 'Số thực dùng dấu phẩy động (floating point) theo chuẩn IEEE 754.'),
    Q('Màu RGB là?', ['Tổ hợp 3 màu cơ bản: Đỏ, Lục, Lam','Đỏ, vàng, xanh','3 màu in','3 kênh âm thanh'], 0, 'RGB = Red - Green - Blue, mỗi kênh 0-255, tổ hợp tạo mọi màu.'),
    Q('Mỗi kênh màu RGB thường dùng?', ['8 bit (0-255)','4 bit','16 bit','32 bit'], 0, 'Mỗi kênh 8 bit → 256 mức; tổng 24 bit cho 1 điểm ảnh (16 triệu màu).'),
    Q('Điểm ảnh (pixel) là?', ['Đơn vị nhỏ nhất của ảnh','Đơn vị âm thanh','Đơn vị video','Đơn vị văn bản'], 0, 'Pixel là đơn vị nhỏ nhất tạo nên hình ảnh số.'),
    Q('Ảnh JPG khác PNG ở?', ['JPG nén có mất, PNG nén không mất','PNG mất, JPG không','Giống nhau','PNG chỉ đen trắng'], 0, 'JPG dùng nén có mất (lossy), nhỏ hơn; PNG nén không mất (lossless), giữ chất lượng.'),
  ]),

  M(5, 'Mạng máy tính và Internet', [
    Q('Mạng máy tính là?', ['Hệ thống các máy tính kết nối để trao đổi dữ liệu','1 máy tính','Đường dây','Phần mềm'], 0, 'Mạng MT: nhiều thiết bị kết nối, chia sẻ tài nguyên và trao đổi dữ liệu.'),
    Q('Internet là?', ['Mạng toàn cầu kết nối hàng tỷ máy tính','Mạng nội bộ','Mạng LAN','Phần mềm'], 0, 'Internet là mạng của các mạng, kết nối toàn cầu qua TCP/IP.'),
    Q('Giao thức nền tảng của Internet là?', ['TCP/IP','HTTP','FTP','SMTP'], 0, 'TCP/IP là bộ giao thức nền tảng của Internet.'),
    Q('Mỗi thiết bị trên Internet có?', ['Địa chỉ IP duy nhất','Tên ngẫu nhiên','Không có địa chỉ','Số điện thoại'], 0, 'Mỗi thiết bị có địa chỉ IP (IPv4 hoặc IPv6) duy nhất trong mạng.'),
    Q('DNS là?', ['Hệ thống đổi tên miền sang IP','Hệ giao thức email','Hệ FTP','Hệ tìm kiếm'], 0, 'DNS (Domain Name System) đổi google.com → 142.250.x.x.'),
    Q('WWW là?', ['World Wide Web — dịch vụ web','Wi-Fi','Internet','Modem'], 0, 'WWW là dịch vụ web trên Internet, dùng giao thức HTTP/HTTPS.'),
  ]),

  M(6, 'An toàn thông tin cá nhân', [
    Q('An toàn thông tin gồm?', ['Bảo mật, toàn vẹn, sẵn sàng (CIA)','Chỉ bảo mật','Chỉ tốc độ','Chỉ giá rẻ'], 0, 'CIA triad: Confidentiality, Integrity, Availability.'),
    Q('Mật khẩu mạnh nên?', ['Dài ≥8 ký tự, có chữ - số - ký tự đặc biệt','Ngày sinh','Tên mình','123456'], 0, 'Mật khẩu mạnh: dài, có chữ hoa/thường, số, ký tự đặc biệt, không liên quan cá nhân.'),
    Q('Xác thực 2 yếu tố (2FA) là?', ['Đăng nhập cần thêm OTP/khoá vật lý ngoài mật khẩu','Đăng nhập 2 lần','Có 2 mật khẩu','Không có mật khẩu'], 0, '2FA = mật khẩu + yếu tố thứ 2 (OTP, vân tay, khoá vật lý).'),
    Q('Phishing là?', ['Lừa đảo lấy thông tin qua giả mạo','Đánh cá','Quảng cáo','Tin tức'], 0, 'Phishing: kẻ tấn công giả mạo (email, web) để lấy mật khẩu, OTP.'),
    Q('Khi gặp link lạ trong email?', ['Không click, không nhập mật khẩu','Click ngay','Nhập mật khẩu','Chuyển tiền'], 0, 'Không click link lạ, không nhập thông tin nhạy cảm, kiểm tra nguồn.'),
    Q('Phần mềm độc hại (malware) gồm?', ['Virus, trojan, ransomware','Chỉ virus','Chỉ trojan','Chỉ adware'], 0, 'Malware: virus, trojan, ransomware, spyware, worm, adware.'),
  ]),

  M(7, 'Đạo đức và pháp luật khi sử dụng Internet', [
    Q('Khi đăng bài lên mạng XH cần?', ['Tôn trọng người khác, không xúc phạm','Nói gì cũng được','Tin nguồn lạ','Phát tán'], 0, 'Đăng bài cần tôn trọng người khác, không xúc phạm, lan truyền tin sai.'),
    Q('Tin giả (fake news) gây?', ['Hoang mang, gây thiệt hại','Vô hại','Có lợi','Hài hước'], 0, 'Tin giả gây hoang mang, định hướng sai dư luận, ảnh hưởng kinh tế - xã hội.'),
    Q('Đăng tin sai sự thật ở VN bị?', ['Xử phạt hành chính hoặc hình sự','Khen','Bỏ qua','Không gì'], 0, 'Đăng tin sai có thể bị phạt VPHC 7,5-10 triệu hoặc xử hình sự nếu nghiêm trọng.'),
    Q('Bắt nạt qua mạng (cyberbullying) là?', ['Hành vi xúc phạm, đe doạ qua mạng','Trò đùa','Đăng meme','Like ảnh'], 0, 'Cyberbullying: xúc phạm, đe doạ, làm nhục qua không gian mạng — có thể vi phạm PL.'),
    Q('Bản quyền trên Internet?', ['Phải tôn trọng, ghi nguồn khi sử dụng','Tự do tải','Sao chép','Bán lại'], 0, 'Nội dung trên Internet vẫn có bản quyền, phải xin phép hoặc trích nguồn.'),
    Q('Khi bị bắt nạt qua mạng?', ['Lưu bằng chứng, báo cho người lớn, cơ quan','Im lặng','Phản bắt nạt','Bỏ học'], 0, 'Lưu screenshot, chặn người bắt nạt, báo cho người lớn, nhà trường, cơ quan chức năng.'),
  ]),

  M(8, 'Phần mềm và hệ điều hành', [
    Q('Phần mềm chia thành?', ['Hệ thống và ứng dụng','Đắt và rẻ','Mới và cũ','Lớn và nhỏ'], 0, '2 loại chính: phần mềm hệ thống (OS) và phần mềm ứng dụng.'),
    Q('Hệ điều hành (OS) là?', ['Phần mềm quản lý phần cứng và phần mềm ứng dụng','Phần cứng','Trình duyệt','Game'], 0, 'OS quản lý CPU, bộ nhớ, thiết bị, file và chạy ứng dụng.'),
    Q('Hệ điều hành phổ biến trên PC?', ['Windows, macOS, Linux','Chỉ Windows','Chỉ macOS','Android'], 0, 'PC chủ yếu chạy Windows (~70%), macOS, Linux.'),
    Q('Hệ điều hành phổ biến trên smartphone?', ['Android và iOS','Windows Phone','Symbian','Linux'], 0, 'Smartphone hiện chủ yếu chạy Android (~70%) và iOS (~28%).'),
    Q('Phần mềm mã nguồn mở (open source) là?', ['Cho phép xem, sửa, phân phối mã nguồn','Phải mua','Đóng kín','Bị cấm'], 0, 'Open source: mã nguồn công khai, theo các giấy phép như GPL, MIT.'),
    Q('Ví dụ phần mềm mã nguồn mở?', ['Linux, Firefox, LibreOffice, Python','Windows','Photoshop','MS Office'], 0, 'Linux, Firefox, LibreOffice, Python là phần mềm mã nguồn mở phổ biến.'),
  ]),

  M(9, 'Làm quen với Python', [
    Q('Python là?', ['Ngôn ngữ lập trình bậc cao, thông dịch','Ngôn ngữ máy','HTML','CSS'], 0, 'Python là ngôn ngữ lập trình bậc cao, thông dịch, đa năng.'),
    Q('Người sáng tạo Python là?', ['Guido van Rossum','Linus Torvalds','Bill Gates','Steve Jobs'], 0, 'Guido van Rossum tạo Python năm 1991.'),
    Q('Để chạy chương trình Python cần?', ['Python interpreter','Compiler C++','Trình duyệt','OS riêng'], 0, 'Python cần trình thông dịch (interpreter) để chạy.'),
    Q('Lệnh in ra màn hình trong Python là?', ['print()','printf()','cout','echo'], 0, 'Python dùng print() để in ra màn hình.'),
    Q('Lệnh `print("Hello")` in ra?', ['Hello','print','"Hello"','Lỗi'], 0, 'print("Hello") in chuỗi Hello (không gồm dấu nháy).'),
    Q('Comment 1 dòng trong Python bắt đầu bằng?', ['#','//','/*','--'], 0, 'Comment 1 dòng Python dùng #.'),
  ]),

  M(10, 'Biến và kiểu dữ liệu', [
    Q('Biến trong Python là?', ['Tên gọi tham chiếu đến giá trị trong bộ nhớ','Số','Chuỗi','Hằng'], 0, 'Biến là tên gắn với một vùng nhớ chứa giá trị.'),
    Q('Khai báo biến trong Python?', ['Gán trực tiếp: x = 5','int x = 5;','var x = 5','let x = 5'], 0, 'Python dynamic typing: gán giá trị là tạo biến (x = 5).'),
    Q('Kiểu dữ liệu int trong Python là?', ['Số nguyên','Số thực','Chuỗi','Boolean'], 0, 'int = số nguyên (5, -10, 100).'),
    Q('Kiểu dữ liệu float trong Python là?', ['Số thực','Số nguyên','Chuỗi','Boolean'], 0, 'float = số thực (3.14, -2.5).'),
    Q('Kiểu dữ liệu str trong Python là?', ['Chuỗi ký tự','Số nguyên','Số thực','Boolean'], 0, 'str = chuỗi (string), dùng "abc" hoặc \'abc\'.'),
    Q('Kiểu dữ liệu bool trong Python có giá trị?', ['True và False','0 và 1','Yes và No','Có và Không'], 0, 'bool có 2 giá trị: True và False (viết hoa chữ đầu).'),
  ]),

  M(11, 'Toán tử và biểu thức', [
    Q('Toán tử cộng trong Python là?', ['+','plus','add','&'], 0, 'Toán tử cộng là +.'),
    Q('Phép chia lấy phần nguyên trong Python?', ['//','/','%','**'], 0, 'Toán tử // = chia lấy phần nguyên; 7 // 2 = 3.'),
    Q('Phép chia lấy dư trong Python?', ['%','/','//','mod'], 0, '% = lấy dư (modulo); 7 % 2 = 1.'),
    Q('Phép luỹ thừa trong Python?', ['**','^','pow','^^'], 0, '** là toán tử luỹ thừa; 2 ** 3 = 8.'),
    Q('5 / 2 trong Python kết quả?', ['2.5','2','3','Lỗi'], 0, 'Python 3: / là chia thực, luôn cho float (2.5).'),
    Q('Toán tử so sánh "bằng" trong Python?', ['==','=','!=','<>'], 0, '== so sánh bằng; = là gán giá trị.'),
  ]),

  M(12, 'Câu lệnh nhập - xuất', [
    Q('Lệnh nhập dữ liệu từ bàn phím trong Python?', ['input()','print()','scan()','read()'], 0, 'input() đọc 1 dòng từ bàn phím, trả về chuỗi.'),
    Q('`input()` trả về kiểu?', ['str (chuỗi)','int','float','bool'], 0, 'input() luôn trả về chuỗi; cần ép kiểu khi cần số.'),
    Q('Ép kiểu chuỗi thành int?', ['int(s)','str(s)','float(s)','toInt(s)'], 0, 'int("5") = 5.'),
    Q('Ép kiểu chuỗi thành float?', ['float(s)','int(s)','str(s)','toFloat(s)'], 0, 'float("3.14") = 3.14.'),
    Q('Nhập tuổi và in ra tuổi: `age = int(input())`. Sau đó?', ['print(age)','print("age")','printf(age)','cout(age)'], 0, 'print(age) in giá trị của biến.'),
    Q('In có format trong Python dùng?', ['f-string: f"x = {x}"','printf','format()','str()'], 0, 'f-string là cách format hiện đại nhất: f"x = {x}".'),
  ]),

  M(13, 'Câu lệnh điều kiện if-else', [
    Q('Cú pháp if trong Python?', ['if điều_kiện:','if (đk) {','IF đk THEN','if đk DO'], 0, 'Python: `if điều_kiện:` rồi indent (tab) khối lệnh.'),
    Q('Python dùng gì để phân khối lệnh?', ['Thụt lề (indentation)','{}','BEGIN/END','do/end'], 0, 'Python dùng thụt lề (4 spaces hoặc tab) để phân khối lệnh.'),
    Q('Khối else được thực hiện khi?', ['Điều kiện if sai','Điều kiện if đúng','Luôn luôn','Không bao giờ'], 0, 'else chạy khi điều kiện if là False.'),
    Q('Cú pháp xét nhiều trường hợp?', ['if - elif - else','if - elseif - else','if - else if - else','switch - case'], 0, 'Python: if - elif - else.'),
    Q('Toán tử logic AND trong Python?', ['and','&&','AND','&'], 0, 'Python dùng từ khoá `and` (chữ thường).'),
    Q('Toán tử logic OR trong Python?', ['or','||','OR','|'], 0, 'Python dùng từ khoá `or`.'),
  ]),

  M(14, 'Vòng lặp for', [
    Q('Cú pháp vòng for trong Python?', ['for i in range(n):','for(i=0;i<n;i++)','for i := 1 to n','foreach i'], 0, 'Python: `for biến in iterable:`.'),
    Q('`range(5)` tạo dãy?', ['0, 1, 2, 3, 4','1, 2, 3, 4, 5','0, 1, 2, 3, 4, 5','5'], 0, 'range(5) = [0, 1, 2, 3, 4] (không bao gồm 5).'),
    Q('`range(1, 6)` tạo dãy?', ['1, 2, 3, 4, 5','0, 1, 2, 3, 4, 5','1, 2, 3, 4, 5, 6','1-5'], 0, 'range(start, stop): từ start đến stop-1.'),
    Q('`range(0, 10, 2)` tạo dãy?', ['0, 2, 4, 6, 8','0, 2, 4, 6, 8, 10','2, 4, 6, 8','Lỗi'], 0, 'range(start, stop, step): step = 2 → 0, 2, 4, 6, 8.'),
    Q('Vòng for in 5 lần "Hello"?', ['for _ in range(5): print("Hello")','print(Hello)*5','5: print("Hello")','for(5){print}'], 0, 'Lặp 5 lần dùng for _ in range(5).'),
    Q('Tổng các số 1 đến 100?', ['sum(range(1, 101))','sum(range(100))','sum(range(1, 100))','100'], 0, 'sum(range(1, 101)) tính 1+2+...+100 = 5050.'),
  ]),

  M(15, 'Vòng lặp while', [
    Q('Cú pháp while trong Python?', ['while điều_kiện:','while (đk) {','while đk DO','do while'], 0, 'Python: `while điều_kiện:`.'),
    Q('Vòng while dừng khi?', ['Điều kiện sai','Điều kiện đúng','Sau 100 lần','Không bao giờ'], 0, 'while chạy khi điều kiện True, dừng khi False.'),
    Q('Lệnh thoát vòng lặp?', ['break','continue','exit','return'], 0, 'break thoát ngay vòng lặp gần nhất.'),
    Q('Lệnh bỏ qua bước hiện tại, sang vòng kế?', ['continue','break','pass','skip'], 0, 'continue: bỏ phần còn lại, chuyển sang lần lặp tiếp theo.'),
    Q('Nguy cơ của while khi viết sai?', ['Vòng lặp vô hạn','Bị reset','Hỏng máy','Chạy đúng'], 0, 'Nếu điều kiện luôn True và không có break → vòng lặp vô hạn.'),
    Q('Khi nào dùng while thay vì for?', ['Số lần lặp không biết trước','Số lần lặp xác định','Lặp 0 lần','Không bao giờ'], 0, 'while phù hợp khi không biết trước số lần lặp (vd: đến khi nhập đúng).'),
  ]),

  M(16, 'Hàm trong Python', [
    Q('Hàm trong Python định nghĩa bằng?', ['def','function','func','def function'], 0, 'def tên_hàm(tham_số): khai báo hàm.'),
    Q('`def chao(ten): print("Xin chao", ten)` - hàm này?', ['Nhận 1 tham số, in lời chào','Không có tham số','Trả về giá trị','Lỗi'], 0, 'Hàm chao() nhận tham số ten, in lời chào.'),
    Q('Trả về giá trị từ hàm dùng?', ['return','print','output','give'], 0, 'return trả về giá trị cho hàm gọi.'),
    Q('Hàm không có return mặc định trả về?', ['None','0','""','False'], 0, 'Hàm không có return trả về None.'),
    Q('Phạm vi (scope) của biến trong hàm?', ['Cục bộ (local)','Toàn cục','Lớp','Module'], 0, 'Biến trong hàm là local, không nhìn thấy bên ngoài.'),
    Q('Hàm có thể gọi chính nó được gọi là?', ['Đệ quy (recursion)','Vòng lặp','Hằng','Method'], 0, 'Đệ quy: hàm tự gọi chính nó để giải bài toán nhỏ hơn.'),
  ]),

  M(17, 'Danh sách (list) và chuỗi (string)', [
    Q('List trong Python khai báo?', ['lst = [1, 2, 3]','lst = (1, 2, 3)','lst = {1, 2, 3}','array(1,2,3)'], 0, 'List Python dùng dấu []: lst = [1, 2, 3].'),
    Q('Truy cập phần tử đầu tiên của list?', ['lst[0]','lst[1]','lst.first','lst.start'], 0, 'Python index từ 0; lst[0] là phần tử đầu.'),
    Q('Thêm phần tử vào cuối list?', ['lst.append(x)','lst.add(x)','lst.push(x)','lst.insert(x)'], 0, 'append() thêm vào cuối list.'),
    Q('Số phần tử của list?', ['len(lst)','lst.size()','lst.length','count(lst)'], 0, 'len(lst) trả về số phần tử.'),
    Q('Chuỗi trong Python tạo bằng?', ['"abc" hoặc \'abc\'','{abc}','[abc]','(abc)'], 0, 'Chuỗi Python dùng dấu nháy đơn hoặc kép.'),
    Q('Nối 2 chuỗi dùng toán tử?', ['+','*','&','.'], 0, '"Hello" + " " + "World" = "Hello World".'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('1 Byte = ? bit', ['8','4','16','1024'], 0, '1 byte = 8 bit.'),
    Q('Đơn vị nhỏ nhất biểu diễn thông tin?', ['Bit','Byte','KB','GB'], 0, 'Bit là đơn vị nhỏ nhất.'),
    Q('Lệnh in trong Python?', ['print()','printf()','cout','echo'], 0, 'print() trong Python.'),
    Q('Biến `x = 5` trong Python có kiểu?', ['int','float','str','bool'], 0, 'x = 5 là int (số nguyên).'),
    Q('Vòng for đi qua các phần tử của list?', ['for x in lst:','for(x in lst)','foreach x','lst.each'], 0, 'Python: `for x in lst:`.'),
    Q('Hàm trong Python khai báo bằng?', ['def','function','func','let'], 0, 'def định nghĩa hàm.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Thuật toán và biểu diễn', [
    Q('Thuật toán là?', ['Dãy hữu hạn bước giải bài toán','Phép tính','Công thức','Đáp án'], 0, 'Thuật toán: dãy hữu hạn các bước rõ ràng để giải bài toán.'),
    Q('Tính chất của thuật toán?', ['Tính dừng, xác định, đầu vào - đầu ra, hiệu quả','Tính ngẫu nhiên','Tính chậm','Không có'], 0, 'Đặc trưng: dừng, xác định, có đầu vào và đầu ra, hiệu quả.'),
    Q('Biểu diễn thuật toán có thể bằng?', ['Liệt kê + sơ đồ khối + mã giả','Chỉ mã','Chỉ vẽ','Chỉ kể'], 0, 'Liệt kê các bước, sơ đồ khối (flowchart), mã giả (pseudocode).'),
    Q('Sơ đồ khối thuộc cấu trúc nào?', ['Bắt đầu - kết thúc, xử lý, điều kiện, vòng lặp','Chỉ ô vuông','Chỉ ô tròn','Chỉ mũi tên'], 0, 'Hình oval (bắt đầu/kết thúc), chữ nhật (xử lý), thoi (điều kiện), mũi tên (luồng).'),
    Q('Pseudocode là?', ['Mã giả, gần ngôn ngữ tự nhiên','Mã máy','HTML','Mã hex'], 0, 'Mã giả mô tả thuật toán giống ngôn ngữ tự nhiên, dễ hiểu.'),
    Q('Mục đích biểu diễn thuật toán trước khi viết code?', ['Hiểu rõ logic, tránh sai sót','Tốn thời gian','Vô ích','Bắt buộc'], 0, 'Lên thuật toán trước giúp tránh lỗi logic và tăng tốc viết code.'),
  ]),

  M(20, 'Thuật toán tìm kiếm tuyến tính', [
    Q('Tìm kiếm tuyến tính là?', ['Duyệt từ đầu đến cuối tìm phần tử','Chia đôi','Sắp xếp','Đệ quy'], 0, 'Tuyến tính: duyệt tuần tự từ đầu đến cuối list.'),
    Q('Độ phức tạp tìm tuyến tính?', ['O(n)','O(1)','O(log n)','O(n²)'], 0, 'Tìm tuyến tính có độ phức tạp O(n) - tệ nhất duyệt cả n phần tử.'),
    Q('Code tìm tuyến tính trong Python?', ['for i, x in enumerate(lst): if x == target: return i','sort(lst)','sum(lst)','print(lst)'], 0, 'Duyệt enumerate và so sánh; return index khi tìm thấy.'),
    Q('Khi nào dùng tìm tuyến tính?', ['Mảng nhỏ, chưa sắp xếp','Mảng đã sắp','Mảng cực lớn','Không bao giờ'], 0, 'Phù hợp khi mảng nhỏ hoặc chưa sắp xếp.'),
    Q('Tìm tuyến tính có cần điều kiện gì?', ['Không cần (mảng bất kỳ)','Đã sắp','Đã đảo ngược','Có ID'], 0, 'Không cần điều kiện gì với dữ liệu.'),
    Q('Nếu không tìm thấy, hàm trả về?', ['-1 hoặc None','0','True','Lỗi'], 0, 'Quy ước thường trả về -1 hoặc None khi không tìm thấy.'),
  ]),

  M(21, 'Thuật toán tìm kiếm nhị phân', [
    Q('Tìm kiếm nhị phân yêu cầu?', ['Mảng đã sắp xếp','Mảng bất kỳ','Mảng rỗng','Mảng có 1 phần tử'], 0, 'Binary search yêu cầu mảng phải được sắp xếp.'),
    Q('Tìm nhị phân hoạt động bằng cách?', ['Chia đôi liên tục, so sánh giữa','Duyệt từ đầu','Đảo ngược','Sắp xếp lại'], 0, 'Mỗi bước so sánh phần tử giữa, loại bỏ nửa không chứa target.'),
    Q('Độ phức tạp tìm nhị phân?', ['O(log n)','O(n)','O(1)','O(n²)'], 0, 'Binary search: O(log n) - rất nhanh với mảng lớn.'),
    Q('Tìm số 7 trong [1,3,5,7,9,11] bằng nhị phân?', ['So với 5 (giữa) → so với 9 → tìm thấy 7','Duyệt từng phần tử','Bắt đầu từ cuối','Đảo ngược'], 0, 'Mid index 2 (val 5), 7 > 5 → tìm bên phải; mid mới là index 4 (val 9), 7 < 9 → bên trái; thấy 7.'),
    Q('Python có hàm thư viện tìm nhị phân?', ['bisect','search','find','locate'], 0, 'Module bisect cung cấp bisect_left, bisect_right cho tìm nhị phân.'),
    Q('Nếu không tìm thấy, tìm nhị phân kết thúc khi?', ['left > right','left == right','left < 0','Không bao giờ'], 0, 'Vòng lặp dừng khi left > right (khoảng tìm rỗng).'),
  ]),

  M(22, 'Thuật toán sắp xếp - Sắp xếp nổi bọt', [
    Q('Sắp xếp nổi bọt (bubble sort) là?', ['So sánh - hoán đổi từng cặp kề nhau','Chia đôi','Đệ quy','Random'], 0, 'Bubble sort: so sánh cặp kề, hoán đổi nếu sai thứ tự, lặp lại.'),
    Q('Độ phức tạp bubble sort tệ nhất?', ['O(n²)','O(n)','O(log n)','O(1)'], 0, 'Bubble sort O(n²) - chậm với mảng lớn.'),
    Q('Bubble sort có ổn định không?', ['Có (stable)','Không','Tuỳ ngôn ngữ','Chỉ với số nguyên'], 0, 'Bubble sort là thuật toán sắp xếp ổn định.'),
    Q('Code bubble sort trong Python?', ['Vòng for lồng 2 cấp, hoán đổi nếu lst[i] > lst[i+1]','sort(lst)','sum(lst)','print(lst)'], 0, 'Bubble: 2 vòng for, hoán đổi cặp kề nếu thứ tự sai.'),
    Q('Hoán đổi 2 biến trong Python?', ['a, b = b, a','swap(a, b)','a := b; b := a','tmp = a; a = b; b = tmp'], 0, 'Python: a, b = b, a là cách hoán đổi đơn giản nhất.'),
    Q('Bubble sort có thể tối ưu bằng?', ['Cờ flag dừng sớm khi không có hoán đổi','Đảo ngược','Không thể','Sắp lại'], 0, 'Nếu không hoán đổi nào trong 1 lượt → mảng đã sắp xong, dừng sớm.'),
  ]),

  M(23, 'Thuật toán sắp xếp - Sắp xếp chọn và chèn', [
    Q('Sắp xếp chọn (selection sort) là?', ['Chọn phần tử nhỏ nhất trong phần chưa sắp, đưa lên đầu','Chia đôi','Lặp đệ quy','Random'], 0, 'Selection sort: mỗi lượt chọn min của phần chưa sắp, đổi vị trí với đầu phần chưa sắp.'),
    Q('Độ phức tạp selection sort?', ['O(n²)','O(n)','O(log n)','O(1)'], 0, 'Selection sort O(n²) tệ nhất và trung bình.'),
    Q('Sắp xếp chèn (insertion sort) là?', ['Chèn từng phần tử vào đúng vị trí ở mảng đã sắp','Chọn min','Đảo ngược','Random'], 0, 'Insertion sort: lấy từng phần tử, chèn vào đúng chỗ trong mảng đã sắp đầu.'),
    Q('Khi nào insertion sort nhanh nhất?', ['Mảng gần như đã sắp','Mảng ngẫu nhiên','Mảng đảo ngược','Mảng rỗng'], 0, 'Insertion sort tốt nhất O(n) khi mảng gần như đã sắp xếp.'),
    Q('Python có hàm sắp xếp built-in?', ['sorted() và list.sort()','sort_list()','arrange()','order()'], 0, 'sorted() trả về list mới đã sắp; list.sort() sắp tại chỗ.'),
    Q('Sắp xếp giảm dần trong Python?', ['sorted(lst, reverse=True)','sort(lst, desc)','sortDesc(lst)','lst.reverse()'], 0, 'sorted(lst, reverse=True) trả về list giảm dần.'),
  ]),

  M(24, 'Bài toán đơn giản với mảng', [
    Q('Tổng các phần tử của list?', ['sum(lst)','total(lst)','lst.sum()','add(lst)'], 0, 'sum(lst) tính tổng các phần tử.'),
    Q('Max của list?', ['max(lst)','top(lst)','lst.max()','highest(lst)'], 0, 'max(lst) trả về giá trị lớn nhất.'),
    Q('Min của list?', ['min(lst)','low(lst)','lst.min()','bottom(lst)'], 0, 'min(lst) trả về giá trị nhỏ nhất.'),
    Q('Trung bình cộng list?', ['sum(lst) / len(lst)','avg(lst)','mean(lst)','lst.avg()'], 0, 'Trung bình = tổng / số phần tử.'),
    Q('Đếm số chẵn trong list?', ['len([x for x in lst if x % 2 == 0])','count_even(lst)','lst.count_even','sum(lst) % 2'], 0, 'List comprehension lọc x % 2 == 0 rồi len().'),
    Q('Đảo ngược list?', ['lst[::-1] hoặc lst.reverse()','lst.flip()','lst * -1','invert(lst)'], 0, 'lst[::-1] tạo bản đảo ngược; lst.reverse() đảo tại chỗ.'),
  ]),

  M(25, 'Xử lý chuỗi (string)', [
    Q('Độ dài chuỗi?', ['len(s)','s.length','length(s)','size(s)'], 0, 'len(s) trả về số ký tự.'),
    Q('Chuyển chuỗi sang chữ hoa?', ['s.upper()','toUpper(s)','s.toUpperCase()','s.upcase'], 0, 'str.upper() trả về chuỗi viết hoa.'),
    Q('Chuyển chuỗi sang chữ thường?', ['s.lower()','toLower(s)','s.toLowerCase()','s.downcase'], 0, 'str.lower() trả về chuỗi viết thường.'),
    Q('Tách chuỗi thành list theo dấu cách?', ['s.split()','s.divide()','tokenize(s)','s.cut()'], 0, 'split() mặc định tách theo khoảng trắng.'),
    Q('Ghép list các chuỗi với dấu cách?', ['" ".join(lst)','lst.join(" ")','concat(lst)','sum(lst)'], 0, 'sep.join(lst) ghép các chuỗi của list với separator.'),
    Q('Thay thế chuỗi con?', ['s.replace(cũ, mới)','s.swap(cũ, mới)','replace(s, cũ, mới)','s.change(cũ, mới)'], 0, 's.replace("a", "b") thay mọi "a" bằng "b".'),
  ]),

  M(26, 'Câu lệnh điều kiện và lặp - bài tập tổng hợp', [
    Q('Kiểm tra số dương, âm, 0 dùng?', ['if - elif - else','match - case','switch','goto'], 0, 'if x > 0 / elif x < 0 / else (x == 0).'),
    Q('In các số chẵn từ 1 đến 20?', ['for i in range(2, 21, 2): print(i)','for i in range(20)','print(2, 4, 6)','i = 2; while < 20'], 0, 'range(2, 21, 2) sinh 2, 4, ..., 20.'),
    Q('Tính giai thừa n bằng vòng lặp?', ['fact = 1; for i in range(1, n+1): fact *= i','fact = n','factorial(n)','math.factorial(n)'], 0, 'Lặp tích lũy: fact *= i với i từ 1 đến n.'),
    Q('Kiểm tra số nguyên tố?', ['Duyệt từ 2 đến √n, kiểm tra chia hết','Chia n cho 2','n > 1','Random'], 0, 'Kiểm tra chia hết bởi i từ 2 đến int(sqrt(n)).'),
    Q('Tính tổng các chữ số của n?', ['Dùng while với n % 10 và n //= 10','sum(n)','n.digits()','str(n)'], 0, 'Lặp while n > 0: tổng += n % 10; n //= 10.'),
    Q('In tam giác sao 5 dòng (1 sao đến 5 sao)?', ['for i in range(1, 6): print("*" * i)','for i: print("*")','print("*" * 5)','5 lần in *'], 0, 'Lặp i từ 1 đến 5, in "*" * i.'),
  ]),

  M(27, 'Module và thư viện Python', [
    Q('Để dùng thư viện, dùng từ khoá?', ['import','include','using','require'], 0, 'Python: `import module_name`.'),
    Q('Thư viện toán học Python?', ['math','numbers','calc','calculator'], 0, 'math chứa các hàm toán học: sqrt, sin, cos, pi.'),
    Q('`math.sqrt(16)` trả về?', ['4.0','4','16','2'], 0, 'sqrt = căn bậc 2; math.sqrt(16) = 4.0 (float).'),
    Q('`math.pi` là?', ['Hằng số π ~3.14159','3','3.14','22/7'], 0, 'math.pi = 3.141592653589793.'),
    Q('Thư viện sinh số ngẫu nhiên?', ['random','rand','randomize','number'], 0, 'random module: random(), randint(), choice().'),
    Q('`random.randint(1, 10)` trả về?', ['Số nguyên ngẫu nhiên từ 1-10','Số thực','Chuỗi','1.0'], 0, 'randint(a, b) trả về số nguyên ngẫu nhiên trong [a, b] (cả 2 đầu).'),
  ]),

  M(28, 'Tin học và nghề nghiệp', [
    Q('Lập trình viên (developer) làm?', ['Viết và bảo trì phần mềm','Sửa máy','Bán hàng','Quản trị mạng'], 0, 'Dev viết code, debug, bảo trì, cải tiến phần mềm.'),
    Q('Nhà khoa học dữ liệu (Data Scientist) làm?', ['Phân tích dữ liệu, xây mô hình','Sửa máy','Quản trị mạng','Thiết kế đồ hoạ'], 0, 'Data Scientist: thu thập, phân tích dữ liệu, xây mô hình ML.'),
    Q('Kỹ sư AI làm?', ['Phát triển hệ thống trí tuệ nhân tạo','Sửa máy','Bán hàng','Lễ tân'], 0, 'AI Engineer: phát triển mô hình ML, deep learning, xử lý NLP/CV.'),
    Q('Kỹ sư an ninh mạng (Cybersecurity) làm?', ['Bảo vệ hệ thống khỏi tấn công','Tấn công hệ thống','Bán hàng','Marketing'], 0, 'Cybersecurity Engineer bảo vệ hệ thống, phát hiện và xử lý tấn công.'),
    Q('Ngôn ngữ lập trình phổ biến hiện nay?', ['Python, JavaScript, Java, C++','Pascal','BASIC','COBOL'], 0, 'Top ngôn ngữ: Python, JavaScript, Java, C++, C#, Go.'),
    Q('Học sinh muốn theo CNTT cần?', ['Toán, logic, tiếng Anh, kiên trì','Chỉ giỏi vẽ','Chỉ thuộc lòng','Chỉ chạy nhanh'], 0, 'CNTT cần toán/logic, tiếng Anh, tư duy, kiên trì và sáng tạo.'),
  ]),

  M(29, 'Lập trình hướng đối tượng - khái quát', [
    Q('OOP viết tắt là?', ['Object-Oriented Programming','Open Operating Platform','Online Office Pack','One Object Process'], 0, 'OOP = Lập trình hướng đối tượng.'),
    Q('OOP dựa trên 4 nguyên lý?', ['Encapsulation, Inheritance, Polymorphism, Abstraction','Sort, Search, Save, Send','HTML, CSS, JS, PHP','SQL, NoSQL, Cache, DB'], 0, '4 nguyên lý: đóng gói, kế thừa, đa hình, trừu tượng.'),
    Q('Class là?', ['Bản thiết kế (blueprint) cho object','1 đối tượng','1 hàm','1 biến'], 0, 'Class định nghĩa thuộc tính và phương thức; object là instance của class.'),
    Q('Object là?', ['Đối tượng cụ thể tạo từ class','Class','Hàm','Module'], 0, 'Object = thể hiện cụ thể (instance) của class.'),
    Q('Định nghĩa class trong Python?', ['class TenClass:','def class','new Class','create class'], 0, 'class TenClass: dùng từ khoá class.'),
    Q('Phương thức khởi tạo trong Python?', ['__init__','constructor','new','start'], 0, '__init__ được gọi khi tạo object mới.'),
  ]),

  M(30, 'Cơ sở dữ liệu - khái niệm', [
    Q('CSDL (database) là?', ['Tập hợp dữ liệu có cấu trúc, lưu trữ và quản lý','Mạng máy tính','Phần mềm','Hệ điều hành'], 0, 'CSDL = collection of structured data được tổ chức và quản lý.'),
    Q('Hệ quản trị CSDL (DBMS) là?', ['Phần mềm quản lý CSDL','CSDL','Bàn phím','Modem'], 0, 'DBMS: phần mềm tạo, truy vấn, quản lý CSDL.'),
    Q('Ngôn ngữ truy vấn CSDL phổ biến?', ['SQL','Python','HTML','CSS'], 0, 'SQL (Structured Query Language) chuẩn cho CSDL quan hệ.'),
    Q('Hệ quản trị CSDL phổ biến?', ['MySQL, PostgreSQL, Oracle, SQL Server','Word','Excel','PowerPoint'], 0, 'DBMS phổ biến: MySQL, PostgreSQL, Oracle, MS SQL Server, MongoDB.'),
    Q('Bảng (table) trong CSDL quan hệ gồm?', ['Hàng và cột','Chỉ hàng','Chỉ cột','Ô đơn lẻ'], 0, 'Bảng = các hàng (records) × cột (fields).'),
    Q('Khoá chính (primary key) là?', ['Cột định danh duy nhất mỗi hàng','Tên bảng','Khoá ngoại','Index'], 0, 'PK định danh duy nhất mỗi bản ghi, không trùng và không null.'),
  ]),

  M(31, 'Ứng dụng tin học trong đời sống', [
    Q('Tin học ứng dụng trong y tế gồm?', ['Quản lý bệnh án, chẩn đoán AI, telemedicine','Chỉ in toa','Chỉ kế toán','Chỉ lịch hẹn'], 0, 'Y tế: bệnh án điện tử, chẩn đoán hình ảnh AI, khám từ xa, robot phẫu thuật.'),
    Q('Tin học trong giáo dục gồm?', ['LMS, e-learning, AI giáo dục, MOOCs','Chỉ máy chiếu','Chỉ máy tính','Chỉ Excel'], 0, 'GD: hệ quản lý học tập (LMS), MOOCs, AI tutor, VR/AR.'),
    Q('Tin học trong giao thông?', ['GPS, bản đồ, xe tự lái, giao thông thông minh','Chỉ đèn giao thông','Chỉ camera','Chỉ radio'], 0, 'Giao thông thông minh: GPS, Google Maps, xe tự lái, ITS.'),
    Q('Tin học trong nông nghiệp?', ['IoT, drone, AI dự báo, thuỷ canh thông minh','Chỉ máy cày','Chỉ trồng tay','Chỉ thuốc trừ sâu'], 0, 'Smart farming: IoT cảm biến, drone, AI dự báo, thuỷ canh.'),
    Q('Tin học trong tài chính ngân hàng?', ['Online banking, ví điện tử, blockchain','Chỉ rút tiền','Chỉ in séc','Chỉ tính tay'], 0, 'Fintech: e-banking, ví điện tử (Momo, ZaloPay), blockchain, crypto.'),
    Q('Tin học trong giải trí?', ['Game, streaming, mạng xã hội, VR','Chỉ TV','Chỉ radio','Chỉ sách'], 0, 'Giải trí: game, Netflix, YouTube, mạng xã hội, VR/AR.'),
  ]),

  M(32, 'AI và Machine Learning - sơ lược', [
    Q('AI là?', ['Trí tuệ nhân tạo - máy mô phỏng trí thông minh','Máy tính','Robot','Internet'], 0, 'AI: máy mô phỏng các quá trình nhận thức của con người.'),
    Q('Machine Learning là?', ['Máy học từ dữ liệu','Lập trình thủ công','Sửa máy','Bảo trì'], 0, 'ML: máy học mẫu từ dữ liệu thay vì lập trình thủ công.'),
    Q('Deep Learning dựa trên?', ['Mạng nơ-ron sâu','Logic Boolean','Sắp xếp','Đệ quy'], 0, 'Deep Learning dùng mạng nơ-ron nhân tạo nhiều lớp.'),
    Q('Ứng dụng AI phổ biến?', ['Trợ lý ảo, dịch máy, nhận dạng ảnh, chatbot','Chỉ Excel','Chỉ Word','Chỉ Paint'], 0, 'AI: Siri, Google Translate, nhận diện ảnh, ChatGPT, xe tự lái.'),
    Q('ChatGPT là?', ['Mô hình ngôn ngữ lớn (LLM)','Trình duyệt','Game','Bản đồ'], 0, 'ChatGPT là LLM do OpenAI phát triển, ra mắt 11/2022.'),
    Q('Đạo đức AI cần chú ý?', ['Thiên vị (bias), riêng tư, trách nhiệm','Tốc độ','Kích thước','Màu sắc'], 0, 'AI ethics: tránh bias, bảo vệ riêng tư, minh bạch, trách nhiệm.'),
  ]),

  M(33, 'Dự án lập trình nhỏ', [
    Q('Bước 1 khi làm dự án phần mềm?', ['Xác định bài toán','Viết code','Chạy thử','Giao hàng'], 0, 'Quy trình: phân tích yêu cầu → thiết kế → code → test → triển khai.'),
    Q('Phương pháp lập trình theo Agile đặc trưng bởi?', ['Lặp ngắn (sprint), phản hồi nhanh','Lập kế hoạch 1 năm','Không kế hoạch','Làm xong rồi sửa'], 0, 'Agile: chia thành sprint 1-2 tuần, liên tục phản hồi và cải tiến.'),
    Q('Kiểm thử (testing) gồm?', ['Unit test, integration test, system test','Chỉ unit','Chỉ chạy','Chỉ debug'], 0, 'Test: đơn vị (unit), tích hợp (integration), hệ thống (system), người dùng (UAT).'),
    Q('Git dùng để?', ['Quản lý phiên bản mã nguồn','Tải file','Gửi email','Chạy game'], 0, 'Git là hệ quản lý phiên bản (version control) phổ biến nhất.'),
    Q('GitHub là?', ['Nền tảng lưu trữ và cộng tác qua Git','Game online','Trình duyệt','OS'], 0, 'GitHub là dịch vụ lưu trữ Git repo, hỗ trợ cộng tác phát triển.'),
    Q('Làm việc nhóm trong dự án cần?', ['Giao tiếp, phân công, dùng Git','Mạnh ai nấy làm','Im lặng','Tự ý'], 0, 'Teamwork: giao tiếp, phân công rõ ràng, version control, code review.'),
  ]),

  M(34, 'Hướng nghiệp tin học', [
    Q('Ngành CNTT đào tạo ở?', ['Đại học, cao đẳng, bootcamp','Chỉ ĐH lớn','Chỉ tự học','Không cần học'], 0, 'CNTT đào tạo ở ĐH, CĐ, trung cấp, bootcamp, tự học online.'),
    Q('Kỹ năng quan trọng của lập trình viên?', ['Logic, ngoại ngữ, giải quyết vấn đề, học liên tục','Chỉ code','Chỉ thuộc lòng','Chỉ vẽ'], 0, 'Lập trình viên cần logic, tiếng Anh, problem-solving, học liên tục công nghệ mới.'),
    Q('CNTT có thể làm việc?', ['Từ xa, đa quốc gia','Chỉ trong nước','Chỉ văn phòng','Chỉ tại nhà máy'], 0, 'CNTT có thể làm từ xa, freelance, làm cho công ty nước ngoài (remote).'),
    Q('Mức lương kỹ sư CNTT VN?', ['Cao hơn nhiều ngành khác','Thấp','Trung bình','Không có lương'], 0, 'CNTT có mức lương cao và tăng nhanh ở VN.'),
    Q('Học CNTT có cần giỏi toán?', ['Có (nhất là khoa học máy tính)','Không cần','Chỉ cần văn','Chỉ cần Anh'], 0, 'CNTT, đặc biệt là khoa học máy tính, cần nền tảng toán tốt.'),
    Q('Nguồn học tin học miễn phí?', ['Coursera, edX, FreeCodeCamp, YouTube','Chỉ sách giấy','Chỉ ĐH','Không có'], 0, 'Nhiều nền tảng miễn phí: Coursera, edX, FreeCodeCamp, YouTube.'),
  ]),

  M(35, 'Ôn tập cuối năm', [
    Q('Thuật toán là?', ['Dãy hữu hạn bước giải bài toán','Phép tính','Công thức','Đáp án'], 0, 'Thuật toán: dãy hữu hạn bước rõ ràng để giải bài toán.'),
    Q('Tìm kiếm nhị phân yêu cầu?', ['Mảng đã sắp xếp','Mảng bất kỳ','Mảng rỗng','Số lượng lớn'], 0, 'Binary search yêu cầu mảng đã sắp xếp.'),
    Q('Vòng lặp for trong Python?', ['for x in iterable:','for(x;y;z)','for x := 1 to n','forEach x'], 0, 'Python: for x in iterable.'),
    Q('Sắp xếp mặc định trong Python?', ['sorted() / list.sort()','sort()','arrange()','order()'], 0, 'sorted() trả về list mới; sort() sắp tại chỗ.'),
    Q('1 GB =?', ['1024 MB','1000 MB','1 TB','100 MB'], 0, '1 GB = 1024 MB.'),
    Q('OOP gồm 4 nguyên lý?', ['Đóng gói, kế thừa, đa hình, trừu tượng','Sort, Search, Save, Send','Class, Object, Method, Variable','HTML, CSS, JS, SQL'], 0, '4 nguyên lý OOP cơ bản.'),
  ]),
];

export const H10TIN_SCENARIOS = indexBy(H10TIN_WEEKS);
