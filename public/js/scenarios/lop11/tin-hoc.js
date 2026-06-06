// ============================================================
// Lớp 11 · TIN HỌC (Tin học ứng dụng - ICT) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018, bộ Kết nối tri thức (Phần I cốt lõi + Phần III Tin học ứng dụng).
// ID prefix: "H11TIN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H11TIN', 'tin-hoc', n, title, qs, opts);

export const H11TIN_WEEKS = [
  // ──────────────── HK1 — Phần I: Cốt lõi chung ────────────────
  M(1, 'Bài 1 — Hệ điều hành', [
    Q('Hệ điều hành (HĐH) là?', ['Phần cứng máy tính', 'Phần mềm hệ thống quản lý tài nguyên và điều khiển máy tính', 'Trình duyệt web', 'Trình soạn thảo văn bản'], 1, 'HĐH là phần mềm hệ thống.'),
    Q('Chức năng KHÔNG phải của hệ điều hành?', ['Quản lý tệp', 'Quản lý bộ nhớ', 'Quản lý tiến trình', 'Soạn thảo bảng tính'], 3, 'Bảng tính do phần mềm ứng dụng.'),
    Q('Hệ điều hành dành cho điện thoại thông minh phổ biến nhất?', ['Windows 10 và macOS', 'Android và iOS', 'Linux Ubuntu và Fedora', 'MS-DOS và Unix'], 1, 'Android, iOS chiếm thị phần lớn.'),
    Q('Đa nhiệm (multitasking) nghĩa là?', ['Chỉ chạy một chương trình tại một thời điểm', 'Chạy nhiều chương trình đồng thời (chia sẻ CPU)', 'Tắt mọi tiến trình', 'Khởi động lại máy'], 1, 'Multitasking chia thời gian CPU.'),
    Q('Tài khoản người dùng (user account) trong HĐH dùng để?', ['Tăng tốc CPU', 'Phân quyền truy cập, bảo mật và cá nhân hoá', 'Giảm dung lượng đĩa', 'Tắt máy'], 1, 'Account = phân quyền + cá nhân hoá.'),
    Q('Khi máy bị chậm do nhiều ứng dụng chạy nền, công cụ nào của HĐH giúp xem và tắt tiến trình?', ['Trình duyệt', 'Task Manager / Activity Monitor', 'Calculator', 'Notepad'], 1, 'Trình quản lý tác vụ.'),
  ]),

  M(2, 'Bài 2 — Thực hành sử dụng hệ điều hành', [
    Q('Thư mục (folder) trong HĐH dùng để?', ['Chạy chương trình', 'Tổ chức và phân loại các tệp', 'Tăng RAM', 'Kết nối mạng'], 1, 'Folder = chứa tệp.'),
    Q('Đường dẫn tuyệt đối trên Windows có dạng?', ['./tailieu/baitap.docx', 'C:\\Users\\HS\\Documents\\baitap.docx', 'baitap.docx', '~/baitap.docx'], 1, 'Bắt đầu ổ đĩa.'),
    Q('Phím tắt sao chép tệp trên Windows?', ['Ctrl + V', 'Ctrl + C', 'Ctrl + X', 'Ctrl + Z'], 1, 'Ctrl+C là copy.'),
    Q('Đuôi mở rộng .exe trên Windows thường là?', ['Tệp văn bản', 'Tệp thi hành (chương trình)', 'Tệp âm thanh', 'Tệp ảnh'], 1, 'Executable.'),
    Q('Để khôi phục tệp đã xoá nhầm, ta vào?', ['Control Panel', 'Recycle Bin (Thùng rác)', 'Device Manager', 'Disk Management'], 1, 'Thùng rác.'),
    Q('Phím tắt mở Task Manager trên Windows?', ['Ctrl + Alt + Del hoặc Ctrl + Shift + Esc', 'Alt + F4', 'Win + L', 'Ctrl + S'], 0, 'Ctrl+Shift+Esc trực tiếp.'),
  ]),

  M(3, 'Bài 3 — Phần mềm nguồn mở và phần mềm chạy trên Internet', [
    Q('Phần mềm nguồn mở (open source) là?', ['Phần mềm không cần cài', 'Phần mềm công khai mã nguồn, người dùng được xem, sửa, phân phối lại', 'Phần mềm trả phí cao', 'Phần mềm bị cấm dùng'], 1, 'Open source license.'),
    Q('Ví dụ phần mềm nguồn mở?', ['Microsoft Office', 'LibreOffice, Linux, Firefox', 'Adobe Photoshop', 'AutoCAD'], 1, 'LibreOffice, Linux, Firefox đều mở.'),
    Q('Ưu điểm phần mềm nguồn mở?', ['Bắt buộc trả phí cao', 'Miễn phí hoặc giá thấp, cộng đồng hỗ trợ, có thể tuỳ biến', 'Không ai dùng', 'Không thể tải về'], 1, 'Free, customizable.'),
    Q('Phần mềm chạy trên Internet (web app) ví dụ?', ['Notepad cục bộ', 'Google Docs, Office 365 Online, Canva web', 'Máy tính bỏ túi đời cũ', 'BIOS'], 1, 'SaaS / web app.'),
    Q('Ưu điểm phần mềm chạy trên Internet?', ['Phải cài đặt phức tạp', 'Không cần cài, truy cập mọi nơi có Internet, dễ cộng tác', 'Chỉ chạy offline', 'Tốn ổ cứng'], 1, 'No install, anywhere.'),
    Q('Giấy phép GPL thuộc nhóm?', ['Bản quyền độc quyền', 'Phần mềm tự do nguồn mở', 'Cấm sử dụng', 'Phần mềm thử nghiệm'], 1, 'GPL = open source.'),
  ]),

  M(4, 'Bài 4 — Bên trong máy tính', [
    Q('CPU là?', ['Bộ nhớ ngoài', 'Bộ xử lý trung tâm — thực hiện lệnh, tính toán', 'Màn hình', 'Bàn phím'], 1, 'Central Processing Unit.'),
    Q('RAM là?', ['Bộ nhớ chỉ đọc', 'Bộ nhớ truy cập ngẫu nhiên, lưu tạm dữ liệu khi máy đang chạy', 'Ổ cứng lưu trữ dài hạn', 'Bộ nguồn'], 1, 'RAM bay hơi khi tắt máy.'),
    Q('ROM khác RAM ở điểm?', ['ROM bay hơi, RAM không', 'ROM lưu trữ vĩnh viễn (firmware), RAM bay hơi', 'Cả hai đều bay hơi', 'Cả hai đều vĩnh viễn'], 1, 'ROM giữ thông tin khi tắt máy.'),
    Q('Đơn vị đo dung lượng bộ nhớ theo thứ tự tăng dần?', ['MB < KB < GB', 'KB < MB < GB < TB', 'TB < GB < MB', 'GB < KB'], 1, '1 KB = 1024 B, 1 MB = 1024 KB...'),
    Q('Card đồ hoạ (GPU) chuyên xử lý?', ['Âm thanh', 'Hình ảnh, đồ hoạ, video', 'Mạng', 'Lưu trữ'], 1, 'Graphics Processing Unit.'),
    Q('Tốc độ CPU thường được đo bằng?', ['Volt', 'Hertz (GHz)', 'Mét', 'Lít'], 1, 'GHz = số chu kỳ/giây.'),
  ]),

  M(5, 'Bài 5 — Kết nối thiết bị số', [
    Q('Cổng USB dùng để?', ['Kết nối nguồn điện 220V', 'Kết nối thiết bị ngoại vi (chuột, USB, ổ cứng…) với máy tính', 'Cấp Internet không dây', 'Hiển thị hình ảnh'], 1, 'Universal Serial Bus.'),
    Q('Bluetooth là chuẩn kết nối?', ['Có dây cự ly xa', 'Không dây cự ly ngắn (~10m) giữa các thiết bị', 'Truyền hình', 'Vệ tinh'], 1, 'Wireless short-range.'),
    Q('Wi-Fi cho phép?', ['Chỉ kết nối có dây', 'Kết nối mạng không dây thông qua điểm phát (Access Point)', 'Chỉ truyền âm thanh', 'Truyền hình tương tự'], 1, 'WLAN.'),
    Q('Cổng HDMI dùng để?', ['Truyền tín hiệu âm thanh và hình ảnh số chất lượng cao', 'Cấp điện cho máy in', 'Kết nối mạng LAN', 'Chỉ truyền âm thanh'], 0, 'HDMI = audio+video số.'),
    Q('Khi kết nối điện thoại với máy tính qua cáp USB có thể?', ['Chỉ sạc, không truyền dữ liệu', 'Sạc và truyền dữ liệu (ảnh, tệp)', 'Chỉ truyền gọi điện', 'Không làm gì'], 1, 'USB hỗ trợ cả 2.'),
    Q('NFC là công nghệ?', ['Truyền hình quảng bá', 'Giao tiếp tầm gần (vài cm) — thanh toán, ghép cặp nhanh', 'Mạng diện rộng', 'Sóng vô tuyến AM'], 1, 'Near Field Communication.'),
  ]),

  M(6, 'Bài 6 — Lưu trữ tệp trên Internet', [
    Q('Dịch vụ lưu trữ tệp trên Internet (cloud storage) ví dụ?', ['MS Paint', 'Google Drive, OneDrive, Dropbox, iCloud', 'Notepad', 'Calculator'], 1, 'Cloud storage phổ biến.'),
    Q('Ưu điểm lưu trữ đám mây?', ['Mất dữ liệu nếu hỏng máy cá nhân', 'Truy cập mọi nơi, đồng bộ nhiều thiết bị, sao lưu tự động', 'Không thể chia sẻ', 'Chỉ lưu được 1 tệp'], 1, 'Cloud benefits.'),
    Q('Quyền chia sẻ tệp "Chỉ xem" cho phép người nhận?', ['Sửa nội dung', 'Xem nhưng không sửa được tệp', 'Xoá tệp gốc', 'Cấp quyền cho người khác'], 1, 'View-only.'),
    Q('Để bảo mật tệp trên cloud, NÊN?', ['Đặt mật khẩu mạnh, bật xác thực 2 lớp', 'Chia sẻ link công khai cho mọi người', 'Tắt mã hoá', 'Lưu mật khẩu trên giấy dán màn hình'], 0, 'Mật khẩu mạnh + 2FA.'),
    Q('Khi xoá tệp trên Google Drive, tệp sẽ?', ['Mất ngay vĩnh viễn', 'Vào thùng rác trong khoảng 30 ngày trước khi xoá hoàn toàn', 'Tự động khôi phục', 'Gửi cho người khác'], 1, 'Recycle bin 30 ngày.'),
    Q('Đồng bộ (sync) tệp giữa máy tính và cloud nghĩa là?', ['Tệp tự cập nhật 2 chiều giữa thiết bị và đám mây', 'Chỉ tải lên một lần rồi thôi', 'Xoá tệp khỏi cloud', 'Mã hoá tệp'], 0, 'Sync 2 chiều.'),
  ]),

  M(7, 'Bài 7 — Thực hành tìm kiếm thông tin trên Internet', [
    Q('Từ khoá tìm kiếm tốt nên?', ['Dài, không cụ thể', 'Ngắn gọn, đúng chủ đề, dùng từ chuyên biệt', 'Sai chính tả nhiều', 'Toàn là dấu câu'], 1, 'Keyword chính xác.'),
    Q('Trên Google, đặt cụm từ trong dấu ngoặc kép "..." để?', ['Tìm chính xác cụm từ đó theo đúng thứ tự', 'Loại bỏ kết quả', 'Tìm hình ảnh', 'Xoá lịch sử'], 0, 'Exact match.'),
    Q('Toán tử nào loại bỏ một từ trong kết quả Google?', ['+từ', '-từ (dấu trừ)', '*từ', '#từ'], 1, 'Dấu trừ exclude.'),
    Q('Toán tử site: dùng để?', ['Giới hạn kết quả trong một trang web cụ thể', 'Mã hoá truy vấn', 'Đặt mật khẩu', 'Tìm video'], 0, 'site:moet.gov.vn ...'),
    Q('Để đánh giá độ tin cậy của một trang web nên?', ['Tin mọi trang', 'Kiểm tra tác giả, ngày đăng, nguồn dẫn, đối chiếu nhiều nguồn', 'Chỉ xem màu sắc', 'Chỉ xem ảnh'], 1, 'Critical thinking.'),
    Q('Wikipedia là nguồn nên?', ['Trích dẫn nguyên văn vào báo cáo khoa học mà không kiểm chứng', 'Tham khảo ban đầu rồi truy ngược về nguồn gốc', 'Bỏ hoàn toàn', 'Chỉ dùng cho trò chơi'], 1, 'Khởi điểm, không phải nguồn cuối.'),
  ]),

  M(8, 'Bài 8 — Thực hành nâng cao sử dụng thư điện tử và mạng xã hội', [
    Q('Khi gửi email cho nhiều người mà KHÔNG muốn họ thấy địa chỉ của nhau, dùng?', ['To', 'Cc', 'Bcc (ẩn người nhận)', 'Subject'], 2, 'Bcc giấu danh sách.'),
    Q('Tệp đính kèm (attachment) email có giới hạn dung lượng tuỳ nhà cung cấp, ví dụ Gmail tối đa?', ['100 MB', '25 MB (lớn hơn cần dùng Drive)', '1 GB', '500 KB'], 1, 'Gmail ~25MB.'),
    Q('Để tránh trở thành "thư rác" (spam) khi gửi tin tập thể nên?', ['Gửi cho tất cả ở mục To', 'Dùng Bcc + tiêu đề rõ ràng + nội dung phù hợp', 'Viết tiêu đề rỗng', 'Dùng nhiều dấu chấm than'], 1, 'Best practice.'),
    Q('Mạng xã hội nên đăng nội dung?', ['Đời tư người khác không xin phép', 'Lịch sự, không vi phạm pháp luật và quyền riêng tư', 'Tin giả giật gân', 'Mật khẩu tài khoản'], 1, 'Văn hoá MXH.'),
    Q('Bị tag vào bài đăng không mong muốn, ta nên?', ['Im lặng', 'Gỡ thẻ, báo cáo hoặc đặt quyền duyệt thẻ trước khi hiện trên trang cá nhân', 'Đăng trả thù', 'Xoá tài khoản'], 1, 'Quản lý quyền.'),
    Q('Để bảo vệ tài khoản email/MXH nên?', ['Mật khẩu mạnh, bật xác thực 2 lớp, không bấm link lạ', 'Dùng 1 mật khẩu cho mọi tài khoản', 'Cho bạn mượn mật khẩu', 'Bỏ qua cảnh báo'], 0, 'Security hygiene.'),
  ]),

  M(9, 'Bài 9 — Giao tiếp an toàn trên Internet', [
    Q('Hành vi nào vi phạm đạo đức và pháp luật trên không gian mạng?', ['Đăng bài học tập', 'Phát tán tin giả, xúc phạm danh dự, lừa đảo, đánh cắp dữ liệu', 'Chia sẻ bài báo có nguồn', 'Học online'], 1, 'Cybercrime.'),
    Q('Lừa đảo trực tuyến (phishing) là?', ['Câu cá thật', 'Giả mạo trang/email/ tin nhắn để chiếm tài khoản, mật khẩu, tiền', 'Học tiếng Anh', 'Cập nhật phần mềm chính chủ'], 1, 'Phishing.'),
    Q('Khi nhận được tin nhắn "trúng thưởng" yêu cầu nhập OTP/chuyển tiền, nên?', ['Chuyển ngay', 'Không thực hiện, kiểm tra nguồn, báo người lớn/cơ quan chức năng', 'Đăng lên MXH khoe', 'Nhập thông tin thẻ'], 1, 'Cảnh giác.'),
    Q('Luật An ninh mạng Việt Nam có hiệu lực từ năm?', ['2010', '2019 (Luật năm 2018, hiệu lực 1/1/2019)', '2024', '2000'], 1, 'Luật ANM 2018.'),
    Q('Bản quyền tác giả trên Internet bảo vệ?', ['Chỉ tài sản vật chất', 'Sản phẩm sáng tạo (văn, ảnh, video, phần mềm…) của tác giả', 'Tài khoản ngân hàng', 'Bí mật quốc gia'], 1, 'Copyright.'),
    Q('Khi muốn dùng ảnh trên Internet cho bài học cần?', ['Tải về dùng tuỳ ý', 'Kiểm tra giấy phép, ghi nguồn hoặc dùng ảnh CC0/Creative Commons', 'Cắt logo', 'Xoá tên tác giả'], 1, 'Tôn trọng bản quyền.'),
  ]),

  M(10, 'Bài 10 — Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lý', [
    Q('Dữ liệu (data) khác thông tin (information) ở chỗ?', ['Giống hệt nhau', 'Dữ liệu là các sự kiện thô, thông tin là dữ liệu đã xử lý có ý nghĩa', 'Dữ liệu luôn lớn hơn thông tin', 'Thông tin là dữ liệu chưa xử lý'], 1, 'Data → Information.'),
    Q('Bảng tính Excel có thể quản lý dữ liệu kiểu?', ['Vài chục bản ghi đơn giản', 'Hàng triệu bản ghi với truy vấn phức tạp, đa người dùng đồng thời', 'Không quản lý được dữ liệu', 'Chỉ vẽ hình'], 0, 'Excel hợp với dữ liệu nhỏ; phức tạp dùng CSDL.'),
    Q('Khi dữ liệu lớn và cần nhiều người dùng truy cập đồng thời, nên dùng?', ['Một tệp Word', 'Hệ Cơ sở dữ liệu (Database)', 'Tệp .txt rời rạc', 'Giấy'], 1, 'CSDL chuyên dụng.'),
    Q('Khai thác thông tin (information retrieval) nhằm mục đích?', ['Phá huỷ dữ liệu', 'Truy xuất, phân tích để ra quyết định', 'Xoá dữ liệu', 'Sao chép trộm'], 1, 'Retrieval & analysis.'),
    Q('Báo cáo (report) trong quản lý dữ liệu là?', ['Bản trình bày kết quả truy vấn dưới dạng dễ đọc', 'Một loại bảng tính', 'File ảnh', 'Tệp âm thanh'], 0, 'Report tổng hợp.'),
    Q('Ưu điểm khi lưu trữ tập trung (CSDL) so với lưu trữ phân tán bằng nhiều tệp riêng?', ['Khó tìm kiếm', 'Tránh trùng lặp, đảm bảo nhất quán, dễ phân quyền', 'Mỗi người 1 bản khác nhau', 'Bắt buộc dùng giấy'], 1, 'Single source of truth.'),
  ]),

  M(11, 'Bài 11 — Cơ sở dữ liệu', [
    Q('Cơ sở dữ liệu (CSDL) là?', ['Một chiếc tủ kim loại', 'Tập hợp dữ liệu có cấu trúc, được tổ chức để lưu trữ và khai thác', 'Một chương trình duyệt web', 'Một loại virus'], 1, 'Database.'),
    Q('Tính chất quan trọng của CSDL?', ['Trùng lặp, không nhất quán', 'Toàn vẹn, nhất quán, bảo mật, độc lập dữ liệu', 'Không cần bảo mật', 'Chỉ một người dùng'], 1, 'Integrity, consistency.'),
    Q('CSDL phân cấp tổ chức dữ liệu theo?', ['Hình cây (cha - con)', 'Hình tròn', 'Vô tổ chức', 'Theo màu sắc'], 0, 'Hierarchical DB.'),
    Q('CSDL quan hệ tổ chức dữ liệu theo?', ['Bảng (table) với hàng và cột', 'Văn bản tự do', 'Hình ảnh', 'Âm thanh'], 0, 'Relational model.'),
    Q('Mục tiêu chính khi thiết kế CSDL?', ['Càng nhiều trùng lặp càng tốt', 'Giảm dư thừa, đảm bảo toàn vẹn, dễ truy vấn và mở rộng', 'Làm rối dữ liệu', 'Chỉ dành cho một người'], 1, 'Mục tiêu thiết kế DB.'),
    Q('Người dùng cuối của CSDL thường tương tác qua?', ['Câu lệnh hệ thống thấp', 'Ứng dụng/giao diện (form, báo cáo)', 'Mã máy', 'Trực tiếp ổ cứng'], 1, 'Application layer.'),
  ]),

  M(12, 'Bài 12 — Hệ quản trị cơ sở dữ liệu và hệ CSDL', [
    Q('Hệ quản trị cơ sở dữ liệu (DBMS) là?', ['Một bảng tính', 'Phần mềm quản lý, cho phép tạo và khai thác CSDL', 'Một thiết bị mạng', 'Một loại virus'], 1, 'DBMS = phần mềm quản lý CSDL.'),
    Q('Ví dụ DBMS phổ biến?', ['MS Word, PowerPoint', 'MySQL, PostgreSQL, MS Access, Oracle, SQL Server', 'Notepad', 'Paint'], 1, 'DBMS thực tế.'),
    Q('Hệ CSDL gồm?', ['CSDL + DBMS + người dùng + phần cứng/mạng', 'Chỉ tệp dữ liệu', 'Chỉ phần cứng', 'Chỉ con người'], 0, 'Database system.'),
    Q('Vai trò người quản trị CSDL (DBA)?', ['Soạn văn bản', 'Thiết kế, vận hành, bảo trì, sao lưu, phân quyền CSDL', 'Lái xe', 'Chỉ vẽ logo'], 1, 'DBA.'),
    Q('Sao lưu (backup) CSDL nhằm?', ['Làm tăng dữ liệu rác', 'Phục hồi khi sự cố mất dữ liệu (hỏng đĩa, lỗi người dùng)', 'Xoá dữ liệu', 'Tăng tốc CPU'], 1, 'Backup & recovery.'),
    Q('Khi nhiều người cùng cập nhật dữ liệu, DBMS xử lý bằng?', ['Bỏ qua', 'Cơ chế giao tác (transaction) và khoá (lock) để đảm bảo nhất quán', 'Xoá ngẫu nhiên', 'Tự tắt máy'], 1, 'Transaction + lock.'),
  ]),

  M(13, 'Bài 13 — Cơ sở dữ liệu quan hệ', [
    Q('Trong CSDL quan hệ, một bảng (table/relation) gồm?', ['Chỉ ô trống', 'Các hàng (bản ghi) và cột (trường/thuộc tính)', 'Một dòng duy nhất', 'Một con số'], 1, 'Rows & columns.'),
    Q('Khoá chính (primary key) là?', ['Trường có giá trị trùng nhau', 'Trường (hoặc nhóm trường) định danh duy nhất mỗi bản ghi', 'Trường có giá trị NULL', 'Tên bảng'], 1, 'PK unique & not null.'),
    Q('Khoá ngoài (foreign key) dùng để?', ['Mã hoá mật khẩu', 'Liên kết bản ghi giữa hai bảng (tham chiếu khoá chính bảng khác)', 'Tạo bảng mới', 'Xoá CSDL'], 1, 'FK references.'),
    Q('Cho bảng HỌC_SINH(MaHS, HoTen, Lop) và LOP(MaLop, TenLop). Liên kết HỌC_SINH.Lop với LOP.MaLop là quan hệ?', ['1-1', '1-nhiều (nhiều HS thuộc 1 Lớp)', 'Nhiều-nhiều', 'Không có'], 1, 'Nhiều HS - 1 Lớp.'),
    Q('Ràng buộc toàn vẹn thực thể yêu cầu?', ['Khoá chính có giá trị NULL', 'Khoá chính phải duy nhất và khác NULL', 'Mọi giá trị đều bằng nhau', 'Không có khoá'], 1, 'Entity integrity.'),
    Q('Chuẩn hoá (normalization) nhằm?', ['Tăng trùng lặp', 'Giảm dư thừa và phụ thuộc bất thường, tăng nhất quán', 'Bỏ khoá chính', 'Mã hoá dữ liệu'], 1, 'Normalization.'),
  ]),

  M(14, 'Bài 14 — SQL — Ngôn ngữ truy vấn có cấu trúc', [
    Q('SQL viết tắt của?', ['Standard Query Logic', 'Structured Query Language', 'System Quality Level', 'Super Quick Loader'], 1, 'SQL = Structured Query Language.'),
    Q('Câu lệnh SQL nào dùng để lấy dữ liệu?', ['INSERT', 'SELECT', 'DELETE', 'CREATE'], 1, 'SELECT truy vấn.'),
    Q('Lệnh SELECT * FROM HocSinh WHERE Lop = "11A"; trả về?', ['Tất cả học sinh', 'Tất cả các cột của các học sinh thuộc lớp 11A', 'Chỉ tên lớp', 'Xoá học sinh'], 1, '* = mọi cột, WHERE lọc.'),
    Q('Để đếm số bản ghi dùng hàm?', ['SUM()', 'COUNT()', 'AVG()', 'MAX()'], 1, 'COUNT.'),
    Q('Lệnh INSERT INTO HocSinh(MaHS, HoTen) VALUES("HS01", "An"); có chức năng?', ['Xoá bản ghi', 'Thêm một bản ghi mới vào bảng HocSinh', 'Cập nhật bản ghi', 'Tạo bảng mới'], 1, 'INSERT thêm.'),
    Q('Để xoá bản ghi theo điều kiện dùng?', ['DROP TABLE', 'DELETE FROM ... WHERE ...', 'TRUNCATE COLUMN', 'INSERT'], 1, 'DELETE...WHERE.'),
  ]),

  M(15, 'Bài 15 — Bảo mật và an toàn dữ liệu', [
    Q('Bảo mật CSDL nhằm?', ['Tăng dữ liệu rác', 'Bảo vệ dữ liệu khỏi truy cập trái phép, sửa đổi, mất mát', 'Làm chậm hệ thống', 'Công khai mọi dữ liệu'], 1, 'Confidentiality + integrity.'),
    Q('Phân quyền (authorization) là?', ['Cho mọi người mọi quyền', 'Cấp quyền truy cập theo vai trò người dùng', 'Xoá mọi tài khoản', 'Khoá toàn bộ CSDL'], 1, 'Role-based access.'),
    Q('Mã hoá dữ liệu (encryption) giúp?', ['Để ai cũng đọc được', 'Biến dữ liệu thành dạng không đọc được nếu không có khoá', 'Tăng dung lượng vô ích', 'Xoá dữ liệu'], 1, 'Encryption.'),
    Q('Mật khẩu mạnh nên?', ['Tên hoặc ngày sinh', 'Dài, kết hợp chữ hoa, thường, số, ký tự đặc biệt; không trùng tên', 'Chỉ là "123456"', 'Trống'], 1, 'Strong password.'),
    Q('Sao lưu định kỳ giúp chống lại?', ['Tăng giá điện', 'Sự cố mất dữ liệu do hỏng đĩa, ransomware, lỗi người dùng', 'Tăng RAM', 'Vẽ biểu đồ'], 1, 'Backup chống mất dữ liệu.'),
    Q('Ransomware là?', ['Phần mềm hợp pháp', 'Mã độc mã hoá dữ liệu và đòi tiền chuộc', 'Trò chơi trẻ em', 'Trình duyệt'], 1, 'Ransom = chuộc.'),
  ]),

  M(16, 'Bài 16 — Nghề quản trị cơ sở dữ liệu (hướng nghiệp)', [
    Q('Người quản trị CSDL (DBA) cần kỹ năng?', ['Vẽ tranh sơn dầu', 'Thiết kế CSDL, SQL, bảo mật, sao lưu/khôi phục, hiểu nghiệp vụ', 'Lái máy bay', 'Khâu vá'], 1, 'DBA skills.'),
    Q('DBA làm việc ở môi trường nào?', ['Chỉ trường học', 'Ngân hàng, doanh nghiệp, bệnh viện, cơ quan nhà nước — bất cứ nơi có CSDL', 'Chỉ ngoài trời', 'Không nơi nào'], 1, 'Mọi tổ chức có dữ liệu.'),
    Q('Phẩm chất quan trọng của DBA?', ['Cẩu thả, thiếu trung thực', 'Cẩn thận, trung thực, có trách nhiệm với dữ liệu, ham học', 'Lười học', 'Không biết SQL'], 1, 'Phẩm chất nghề.'),
    Q('Ngành học liên quan đến nghề DBA?', ['Khoa học máy tính, Công nghệ thông tin, Hệ thống thông tin', 'Y khoa', 'Nông học', 'Luật'], 0, 'IT/CS/IS.'),
    Q('Ngoài DBA, dữ liệu còn mở ra nghề?', ['Data Engineer, Data Analyst, Data Scientist, BI Engineer', 'Phi công', 'Đầu bếp', 'Họa sĩ'], 0, 'Hệ sinh thái dữ liệu.'),
    Q('Để chuẩn bị cho nghề DBA, học sinh nên?', ['Bỏ Tin học', 'Học chắc Toán, Tin, ngoại ngữ; rèn luyện SQL, dự án nhỏ', 'Chỉ chơi game', 'Không cần học'], 1, 'Career prep.'),
  ]),

  M(17, 'Ôn tập cuối học kì 1', [
    Q('HĐH chịu trách nhiệm chính cho?', ['Soạn thảo văn bản', 'Quản lý tài nguyên (CPU, RAM, đĩa, thiết bị) và tiến trình', 'Vẽ logo', 'Chơi nhạc'], 1, 'HĐH = quản lý tài nguyên.'),
    Q('CSDL quan hệ tổ chức dữ liệu theo?', ['Hình cây', 'Bảng (hàng và cột)', 'Hình tròn', 'Văn bản tự do'], 1, 'Bảng.'),
    Q('Lệnh SELECT thuộc nhóm nào của SQL?', ['DDL', 'DML — Ngôn ngữ thao tác dữ liệu', 'DCL', 'TCL'], 1, 'DML.'),
    Q('Khoá chính có đặc điểm?', ['Cho phép trùng', 'Duy nhất và khác NULL', 'Luôn NULL', 'Phải là số'], 1, 'PK.'),
    Q('Phần mềm nguồn mở khác phần mềm thương mại ở điểm?', ['Công khai mã nguồn, được phép sửa và phân phối lại', 'Luôn mất phí cao hơn', 'Không hoạt động', 'Chỉ chạy được ở Việt Nam'], 0, 'Open source.'),
    Q('Để gửi email tập thể nhưng giấu danh sách người nhận, ta dùng?', ['To', 'Cc', 'Bcc', 'Subject'], 2, 'Bcc.'),
  ]),

  M(18, 'Kiểm tra cuối học kì 1', [
    Q('Đơn vị nào lớn nhất trong các đơn vị sau?', ['KB', 'MB', 'GB', 'TB'], 3, 'TB > GB > MB > KB.'),
    Q('Để truy vấn tất cả bản ghi có Lop = 11A trong bảng HocSinh, lệnh đúng là?', ['SELECT * FROM HocSinh WHERE Lop = "11A";', 'GET * IN HocSinh.Lop=11A', 'FIND HocSinh "11A"', 'PRINT HocSinh'], 0, 'SQL chuẩn.'),
    Q('Cloud storage giúp?', ['Mất dữ liệu khi đổi máy', 'Truy cập tệp từ nhiều thiết bị, sao lưu tự động', 'Tăng tiếng ồn', 'Tắt máy nhanh'], 1, 'Cloud benefits.'),
    Q('Hai bảng được liên kết bằng?', ['Khoá ngoài tham chiếu khoá chính', 'Tên bảng giống nhau', 'Cùng số dòng', 'Cùng màu nền'], 0, 'FK ↔ PK.'),
    Q('Phishing là?', ['Tấn công kỹ thuật cao xé tường lửa', 'Lừa đảo giả danh trang/email để chiếm thông tin nhạy cảm', 'Bản cập nhật Windows', 'Một loại CSDL'], 1, 'Phishing = lừa đảo.'),
    Q('DBMS có vai trò?', ['Sản xuất phần cứng', 'Quản lý CSDL, cấp quyền, sao lưu, đảm bảo toàn vẹn', 'Làm trình duyệt web', 'Vẽ ảnh'], 1, 'DBMS.'),
  ]),

  // ──────────────── HK2 — Phần III: Tin học ứng dụng (ICT) ────────────────
  M(19, 'Bài 17 — Quản trị CSDL trên máy tính (làm quen MS Access)', [
    Q('MS Access là?', ['Trình duyệt web', 'Hệ quản trị CSDL quan hệ cho người dùng cuối/dự án vừa nhỏ', 'Trình chỉnh sửa ảnh', 'Phần mềm soạn thảo'], 1, 'Access = DBMS desktop.'),
    Q('Tệp Access có đuôi mở rộng?', ['.docx', '.accdb (hoặc .mdb cũ)', '.xlsx', '.pptx'], 1, '.accdb.'),
    Q('Thành phần chính của một CSDL Access gồm?', ['Bảng, truy vấn, biểu mẫu, báo cáo', 'Chỉ bảng', 'Chỉ ảnh', 'Chỉ macro'], 0, 'Tables, Queries, Forms, Reports.'),
    Q('Bảng (Table) trong Access dùng để?', ['Lưu trữ dữ liệu', 'Xoá hệ điều hành', 'Vẽ tranh', 'Phát nhạc'], 0, 'Table = nơi lưu data.'),
    Q('Để mở một bảng trong Access ta?', ['Bấm phải chọn Open hoặc nháy đúp tên bảng', 'Nhấn Ctrl + Alt + Del', 'Đăng nhập lại', 'Khởi động lại máy'], 0, 'Double-click hoặc Open.'),
    Q('Biểu mẫu (Form) trong Access giúp?', ['Nhập và hiển thị dữ liệu thân thiện với người dùng', 'Tăng dung lượng đĩa', 'Mã hoá Wi-Fi', 'Chỉnh sửa BIOS'], 0, 'Form = UI nhập liệu.'),
  ]),

  M(20, 'Bài 18 — Thực hành xác định cấu trúc bảng và các trường khoá', [
    Q('Khi thiết kế bảng HOC_SINH, trường MaHS nên đặt là?', ['Khoá ngoài', 'Khoá chính (Primary Key)', 'Không khoá', 'Trường ảnh'], 1, 'MaHS định danh duy nhất.'),
    Q('Kiểu dữ liệu phù hợp cho trường NgaySinh?', ['Text', 'Date/Time', 'Yes/No', 'Currency'], 1, 'Date/Time.'),
    Q('Kiểu dữ liệu phù hợp cho HoTen?', ['Number', 'Short Text (Text)', 'Date', 'Yes/No'], 1, 'Text.'),
    Q('Trường DiemTB (điểm trung bình) nên dùng kiểu?', ['Yes/No', 'Number — kiểu Single hoặc Double', 'Text', 'OLE Object'], 1, 'Số thực.'),
    Q('Khi đặt khoá chính trong Access ta vào?', ['Design View → chọn trường → Primary Key', 'Datasheet View → xoá trường', 'Form → Save', 'File → Print'], 0, 'Design View.'),
    Q('Ràng buộc Required = Yes nghĩa là?', ['Bắt buộc nhập giá trị, không cho NULL', 'Cho phép NULL', 'Tự sinh số ngẫu nhiên', 'Xoá trường'], 0, 'Required.'),
  ]),

  M(21, 'Bài 19 — Thực hành tạo lập CSDL và các bảng', [
    Q('Để tạo bảng mới trong Access nên dùng?', ['Create → Table Design (chỉ định trường + kiểu)', 'File → Save As', 'External Data → Import', 'Tools → Options'], 0, 'Table Design.'),
    Q('Khi thêm trường Lop trong bảng HOC_SINH liên kết LOP(MaLop), trường Lop nên là?', ['Khoá chính HOC_SINH', 'Khoá ngoài tham chiếu LOP.MaLop', 'Trường ngày tháng', 'Không cần'], 1, 'FK.'),
    Q('Lưu bảng trong Access dùng phím?', ['Ctrl + S', 'F12', 'Alt + Tab', 'Ctrl + P'], 0, 'Ctrl+S.'),
    Q('Khi nhập sai kiểu dữ liệu (ví dụ chữ vào số) Access sẽ?', ['Tự chuyển thành 0', 'Báo lỗi và không lưu', 'Xoá bảng', 'Khởi động lại'], 1, 'Type checking.'),
    Q('Để tránh trùng MaHS ta đặt MaHS làm?', ['Khoá chính', 'Trường ảnh', 'Trường ngày', 'Không gì'], 0, 'PK đảm bảo duy nhất.'),
    Q('Nhập 10 bản ghi mẫu để?', ['Phá CSDL', 'Kiểm tra cấu trúc bảng hoạt động đúng và làm dữ liệu nháp cho truy vấn', 'Tăng RAM', 'Đổi hệ điều hành'], 1, 'Test data.'),
  ]),

  M(22, 'Bài 20 — Thực hành tạo biểu mẫu (Form)', [
    Q('Biểu mẫu (Form) trong Access dùng để?', ['Truy vấn SQL', 'Nhập, sửa, xem dữ liệu trên giao diện thân thiện', 'Vẽ biểu đồ', 'Lưu trữ ảnh thô'], 1, 'Form = UI.'),
    Q('Cách nhanh tạo Form từ bảng?', ['Create → Form (chọn bảng nguồn)', 'External Data → Export', 'File → New → Database', 'View → Datasheet'], 0, 'Auto Form.'),
    Q('Bố cục Form gồm phần?', ['Header, Detail, Footer', 'Chỉ Detail', 'Chỉ Header', 'Không có phần'], 0, 'Section.'),
    Q('Điều khiển (control) "Text Box" trên Form dùng để?', ['Hiển thị và nhập giá trị một trường', 'Đặt ảnh nền', 'Tạo mật khẩu hệ thống', 'In trang'], 0, 'Text Box.'),
    Q('Liên kết Form với bảng/truy vấn nguồn qua thuộc tính?', ['Caption', 'Record Source', 'Default View', 'Tab Index'], 1, 'Record Source.'),
    Q('Ưu điểm dùng Form thay vì nhập trực tiếp Datasheet?', ['Hạn chế sai sót, kiểm soát quyền, có chỉ dẫn rõ ràng', 'Mất nhiều thời gian hơn', 'Không thể nhập', 'Không tương thích'], 0, 'UX tốt + validation.'),
  ]),

  M(23, 'Bài 21 — Thực hành truy vấn dữ liệu (Query)', [
    Q('Truy vấn (Query) trong Access dùng để?', ['Lưu ảnh', 'Lấy dữ liệu theo điều kiện từ một hoặc nhiều bảng', 'Chạy game', 'Vẽ logo'], 1, 'Query.'),
    Q('Loại Query phổ biến nhất là?', ['Select Query', 'Make-Table Query', 'Append Query', 'Crosstab'], 0, 'Select.'),
    Q('Câu SQL nào tương đương với Query lọc lớp 11A?', ['SELECT * FROM HocSinh WHERE Lop = "11A";', 'DROP TABLE HocSinh;', 'UPDATE HocSinh SET Lop = "11A";', 'DELETE FROM HocSinh;'], 0, 'SELECT...WHERE.'),
    Q('Để gộp dữ liệu từ 2 bảng theo khoá chung ta dùng?', ['JOIN', 'UNION ALL không điều kiện', 'DROP', 'CREATE'], 0, 'JOIN.'),
    Q('Mệnh đề ORDER BY dùng để?', ['Sắp xếp kết quả theo cột', 'Xoá bản ghi', 'Tạo bảng', 'Đếm số dòng'], 0, 'Sort.'),
    Q('Mệnh đề GROUP BY dùng kết hợp với hàm tổng hợp như?', ['INSERT', 'COUNT, SUM, AVG, MAX, MIN', 'CREATE', 'DROP'], 1, 'Aggregate.'),
  ]),

  M(24, 'Bài 22 — Thực hành báo cáo (Report)', [
    Q('Báo cáo (Report) trong Access dùng để?', ['Trình bày dữ liệu dưới dạng dễ in/đọc', 'Soạn email', 'Chạy game', 'Tải video'], 0, 'Report = trình bày.'),
    Q('Nguồn dữ liệu cho Report thường là?', ['Bảng hoặc Query', 'Một tệp ảnh', 'BIOS', 'Mật khẩu'], 0, 'Record Source.'),
    Q('Bố cục Report cơ bản gồm?', ['Page Header, Detail, Page Footer (và Group Header/Footer nếu có)', 'Chỉ Detail', 'Chỉ ảnh', 'Không phân vùng'], 0, 'Sections.'),
    Q('Nhóm (Group) trong Report dùng để?', ['Phân nhóm dữ liệu theo trường (ví dụ theo Lop) và tính tổng theo nhóm', 'Xoá dữ liệu', 'Bảo mật CSDL', 'Vẽ logo'], 0, 'Grouping.'),
    Q('Khi xuất Report ra PDF ta?', ['Save As → PDF', 'External Data → PDF/XPS', 'Chỉ in giấy mới được', 'Không thể xuất'], 1, 'Export PDF.'),
    Q('Báo cáo nên?', ['Trình bày rối, nhiều màu', 'Sạch sẽ, có tiêu đề, đánh số trang, ngày in', 'Không có tiêu đề', 'Không có ngày'], 1, 'Best practice.'),
  ]),

  M(25, 'Bài 23 — Thực hành phân quyền và bảo mật CSDL', [
    Q('Trong Access, để bảo vệ CSDL ta có thể?', ['Đặt mật khẩu mở tệp .accdb', 'Đăng tải lên Internet công khai', 'Đổi tên đuôi file thành .txt', 'Cài thêm virus'], 0, 'Password protect.'),
    Q('Khi triển khai trên DBMS lớn (MySQL/SQL Server), phân quyền thực hiện qua?', ['Lệnh GRANT/REVOKE', 'CREATE TABLE', 'SELECT', 'DROP DATABASE'], 0, 'GRANT/REVOKE.'),
    Q('Vai trò "chỉ đọc" thường cấp quyền?', ['SELECT', 'INSERT, UPDATE, DELETE', 'DROP TABLE', 'GRANT'], 0, 'Read-only = SELECT.'),
    Q('Sao lưu CSDL Access có thể thực hiện bằng?', ['File → Save As → Back Up Database', 'Tắt máy đột ngột', 'Xoá tệp', 'Đổi tên thư mục'], 0, 'Backup tool.'),
    Q('Khôi phục dữ liệu sau sự cố cần?', ['Bản sao lưu mới nhất + nhật ký giao tác (nếu có)', 'Khởi động lại modem', 'Đổi mật khẩu Wi-Fi', 'Không cần gì'], 0, 'Restore.'),
    Q('Để tránh mất dữ liệu, nên?', ['Sao lưu định kỳ và lưu ở vị trí khác (cloud/ổ ngoài)', 'Chỉ giữ 1 bản trên ổ chính', 'Xoá log', 'Tắt Access'], 0, '3-2-1 rule.'),
  ]),

  M(26, 'Bài 24 — Thực hành tổng hợp dự án CSDL nhỏ', [
    Q('Bước đầu tiên khi làm dự án CSDL?', ['Code SQL ngay', 'Phân tích yêu cầu nghiệp vụ và xác định thực thể, thuộc tính, quan hệ', 'Mua phần cứng đắt', 'Tải mẫu trên mạng'], 1, 'Analysis trước.'),
    Q('Sơ đồ ERD (Entity - Relationship) dùng để?', ['Mô hình hoá thực thể và quan hệ giữa chúng', 'Vẽ logo', 'Soạn email', 'Tải video'], 0, 'ERD.'),
    Q('Khi chuyển ERD sang bảng quan hệ, mỗi thực thể trở thành?', ['Một bảng với khoá chính', 'Một trường duy nhất', 'Không thành gì', 'Một tệp ảnh'], 0, 'Entity → Table.'),
    Q('Trước khi triển khai, nên?', ['Thử với dữ liệu mẫu và kịch bản người dùng', 'Bỏ kiểm thử', 'Đẩy thẳng lên prod', 'Không lưu mã'], 0, 'Testing.'),
    Q('Tài liệu (documentation) dự án CSDL gồm?', ['ERD, mô tả bảng, từ điển dữ liệu, hướng dẫn sử dụng', 'Không cần tài liệu', 'Chỉ mã nguồn', 'Chỉ ảnh nền'], 0, 'Docs đầy đủ.'),
    Q('Khi bàn giao dự án nên?', ['Hướng dẫn người dùng, sao lưu, phân quyền, kế hoạch bảo trì', 'Tắt máy bỏ chạy', 'Xoá CSDL', 'Đổi mật khẩu giấu'], 0, 'Handover.'),
  ]),

  M(27, 'Bài 25 — Phần mềm chỉnh sửa ảnh — Làm quen', [
    Q('Phần mềm chỉnh sửa ảnh phổ biến?', ['Microsoft Word', 'GIMP (mã nguồn mở), Adobe Photoshop, Photopea', 'AutoCAD', 'Excel'], 1, 'Image editor.'),
    Q('Ảnh raster (bitmap) được tạo từ?', ['Các điểm ảnh (pixel)', 'Các đường vector', 'Văn bản', 'Số bit không gian'], 0, 'Pixel grid.'),
    Q('Ảnh vector được tạo từ?', ['Các điểm ảnh rời', 'Các đối tượng hình học (đường, hình) mô tả bằng toán học', 'Văn bản thuần', 'Âm thanh'], 1, 'Vector graphics.'),
    Q('Định dạng ảnh nào hỗ trợ nền trong suốt?', ['JPG', 'PNG', 'BMP', 'TIFF không nén'], 1, 'PNG có alpha.'),
    Q('Độ phân giải (resolution) đo bằng?', ['m²', 'PPI (pixel per inch) hoặc DPI khi in', 'Lít', 'Volt'], 1, 'PPI/DPI.'),
    Q('Hệ màu phổ biến cho ảnh hiển thị trên màn hình?', ['CMYK', 'RGB', 'PMS', 'HSL bắt buộc'], 1, 'RGB cho screen, CMYK cho in.'),
  ]),

  M(28, 'Bài 26 — Thực hành chỉnh sửa ảnh cơ bản', [
    Q('Lớp (Layer) trong phần mềm chỉnh sửa ảnh giúp?', ['Tổ chức và chỉnh sửa các thành phần ảnh độc lập, không phá huỷ ảnh gốc', 'Tăng RAM', 'Đổi hệ điều hành', 'Mở email'], 0, 'Non-destructive editing.'),
    Q('Công cụ "Crop" dùng để?', ['Cắt một phần ảnh', 'Thay đổi định dạng', 'Tô màu', 'In ảnh'], 0, 'Crop.'),
    Q('Công cụ "Clone Stamp" dùng để?', ['Sao chép một vùng ảnh lên vùng khác — xoá khuyết điểm', 'Tạo lớp mới', 'In ảnh', 'Xuất PDF'], 0, 'Clone stamp.'),
    Q('Điều chỉnh "Brightness/Contrast" thay đổi?', ['Độ sáng và độ tương phản của ảnh', 'Định dạng tệp', 'Độ phân giải tự nhiên', 'Kích thước ổ cứng'], 0, 'Tone adjustment.'),
    Q('Để xuất ảnh đã chỉnh sửa giữ chất lượng cao nhất nên?', ['Lưu PNG hoặc TIFF không nén thay vì JPG nhiều lần', 'Lưu JPG chất lượng 1%', 'Không xuất', 'Đổi đuôi file thủ công'], 0, 'Lossless.'),
    Q('Khi muốn giữ phiên bản gốc và bản chỉnh sửa nên?', ['Lưu file dự án (.psd/.xcf) tách rời và export ra ảnh', 'Ghi đè trực tiếp lên ảnh gốc', 'Xoá ảnh gốc', 'Đổi tên ngẫu nhiên'], 0, 'Non-destructive workflow.'),
  ]),

  M(29, 'Bài 27 — Thực hành nâng cao xử lý ảnh', [
    Q('Bộ lọc (filter) trong phần mềm ảnh dùng để?', ['Áp hiệu ứng (làm mờ, sắc nét, nghệ thuật…) lên ảnh hoặc lớp', 'Đổi tên file', 'Mở email', 'Tải Wi-Fi'], 0, 'Filters.'),
    Q('Mặt nạ lớp (layer mask) cho phép?', ['Hiển thị hoặc che một phần lớp một cách không phá huỷ', 'Xoá tệp gốc', 'Thay nhãn ảnh', 'In ảnh'], 0, 'Layer mask = ẩn/hiện vùng.'),
    Q('Lớp điều chỉnh (adjustment layer) ưu việt hơn ở chỗ?', ['Tác động lên các lớp dưới nhưng không thay đổi pixel gốc', 'Tăng dung lượng vô ích', 'Khoá file', 'Mã hoá ảnh'], 0, 'Adjustment layer.'),
    Q('Khi xuất ảnh lên Web nên dùng định dạng?', ['BMP không nén', 'JPG (ảnh chụp), PNG (đồ hoạ/nền trong suốt), WebP', 'TIFF', 'PSD'], 1, 'Web format.'),
    Q('Trước khi áp filter mạnh nên?', ['Sao chép lớp để giữ bản gốc', 'Xoá tệp gốc', 'Tắt máy', 'In ngay'], 0, 'Duplicate layer.'),
    Q('Khi chỉnh sửa ảnh chân dung của người khác cần?', ['Tôn trọng bản quyền và quyền hình ảnh của người trong ảnh', 'Đăng công khai chế giễu', 'Đổi mặt thành người khác để lừa', 'Bán cho bên thứ ba mà không xin phép'], 0, 'Đạo đức số.'),
  ]),

  M(30, 'Bài 28 — Vẽ kĩ thuật số cơ bản', [
    Q('Phần mềm vẽ kĩ thuật số ví dụ?', ['Krita, Inkscape, Procreate, Photoshop, Illustrator', 'Excel', 'Notepad', 'BIOS'], 0, 'Digital painting/drawing.'),
    Q('Vẽ vector phù hợp khi?', ['Cần phóng to thu nhỏ không vỡ hình (logo, icon)', 'Chụp phong cảnh', 'Quay video', 'Soạn văn bản'], 0, 'Vector scalable.'),
    Q('Vẽ raster phù hợp khi?', ['Vẽ tranh tả thực, chân dung, phong cảnh số', 'Làm logo', 'Cắt giấy', 'Đo nhiệt độ'], 0, 'Raster cho painting.'),
    Q('Bảng vẽ điện tử (graphic tablet) giúp?', ['Vẽ nét chính xác và tự nhiên hơn chuột thường', 'Soạn email', 'Mở Wi-Fi', 'Quản lý nhân sự'], 0, 'Wacom/Huion.'),
    Q('Bút áp lực (pressure-sensitive pen) tạo nét?', ['Mỏng/đậm theo lực ấn', 'Luôn cùng độ dày', 'Chỉ vẽ chấm', 'Chỉ vẽ đường thẳng'], 0, 'Pressure sensitivity.'),
    Q('Để chia sẻ bản vẽ giữ nguyên độ nét nên xuất?', ['SVG cho vector, PNG độ phân giải cao cho raster', 'JPG chất lượng thấp', 'TXT', 'CSV'], 0, 'Format hợp lý.'),
  ]),

  M(31, 'Bài 29 — Ảnh động và làm phim — Khái niệm cơ bản', [
    Q('Ảnh động (animation) tạo từ?', ['Một chuỗi khung hình liên tiếp đánh lừa thị giác', 'Một bức ảnh tĩnh', 'Văn bản thuần', 'Âm thanh'], 0, 'Frame sequence.'),
    Q('Số khung hình/giây (FPS) phổ biến cho phim?', ['24 fps; video web/TV thường 30 hoặc 60 fps', '1 fps', '1000 fps', '0 fps'], 0, 'Standard FPS.'),
    Q('Định dạng ảnh động ngắn phổ biến trên web?', ['GIF, WebP, APNG', 'TXT', 'DOC', 'XLS'], 0, 'Animated formats.'),
    Q('Phần mềm làm phim/biên tập video?', ['DaVinci Resolve, Adobe Premiere, CapCut, Shotcut, OpenShot', 'Excel', 'Notepad', 'BIOS'], 0, 'NLE.'),
    Q('Storyboard là?', ['Bảng phân cảnh phác thảo trước khi quay/dựng', 'Bảng tính kế toán', 'Sơ đồ mạng', 'Bản đồ địa lý'], 0, 'Storyboard.'),
    Q('Khi làm phim ngắn cần?', ['Kịch bản, phân cảnh, quay, dựng, âm thanh, xuất bản', 'Chỉ quay là đủ', 'Chỉ viết kịch bản', 'Không cần gì'], 0, 'Quy trình.'),
  ]),

  M(32, 'Bài 30 — Thực hành tạo ảnh động và đoạn phim ngắn', [
    Q('Trong phần mềm dựng phim, đường thời gian (timeline) dùng để?', ['Sắp xếp các clip, âm thanh, hiệu ứng theo thời gian', 'Lưu mật khẩu', 'Soạn email', 'Tải Wi-Fi'], 0, 'Timeline.'),
    Q('Cut (cắt) clip dùng để?', ['Tách clip thành nhiều đoạn, loại bỏ phần không cần', 'Lưu tệp', 'In ảnh', 'Tăng RAM'], 0, 'Edit.'),
    Q('Hiệu ứng chuyển cảnh (transition) như Fade dùng để?', ['Chuyển mượt giữa hai cảnh', 'Tăng tốc CPU', 'Đặt mật khẩu', 'Mã hoá file'], 0, 'Transition.'),
    Q('Phụ đề (subtitle) trên phim giúp?', ['Người xem khiếm thính/ không nghe rõ vẫn hiểu nội dung', 'Tăng dung lượng vô ích', 'Xoá âm thanh', 'Tự dịch tiếng nước ngoài thành tiếng Việt 100% chính xác'], 0, 'Accessibility.'),
    Q('Khi xuất video lên YouTube/TikTok thường dùng định dạng?', ['MP4 (codec H.264)', 'TXT', 'DOC', 'CSV'], 0, 'MP4 phổ biến.'),
    Q('Khi dùng nhạc nền cho phim ngắn nên?', ['Sử dụng nhạc có giấy phép phù hợp (royalty-free/CC) hoặc xin phép', 'Lấy nhạc bản quyền tuỳ ý', 'Xoá tác giả', 'Đổi tên file để qua mặt'], 0, 'Tôn trọng bản quyền.'),
  ]),

  M(33, 'Bài 31 — Biên tập và xuất bản sản phẩm đa phương tiện', [
    Q('Biên tập video bao gồm các bước?', ['Sắp xếp clip, chỉnh màu, thêm hiệu ứng, hoà âm, kiểm thử trước khi xuất', 'Chỉ tải lên', 'Chỉ lưu file', 'Không có bước'], 0, 'Quy trình edit.'),
    Q('Chỉnh màu (color grading) giúp?', ['Tạo cảm xúc và sự đồng nhất hình ảnh giữa các cảnh', 'Tăng dung lượng ổ cứng', 'Đặt mật khẩu', 'Sửa hệ điều hành'], 0, 'Color grading.'),
    Q('Trước khi xuất bản nên?', ['Xem lại toàn bộ, kiểm lỗi chính tả, âm lượng, ánh sáng', 'Đăng ngay không xem lại', 'Xoá phụ đề', 'Tắt máy'], 0, 'QA bước cuối.'),
    Q('Để xuất bản trên nhiều nền tảng (YouTube, TikTok) cần?', ['Xuất nhiều phiên bản có tỉ lệ phù hợp (16:9, 9:16, 1:1)', 'Một phiên bản 16:9 dùng chung tốt cho mọi nền tảng', 'Bỏ qua', 'Xoá video'], 0, 'Aspect ratio.'),
    Q('Khi đăng tải nội dung lên mạng nên?', ['Tuân thủ pháp luật, bản quyền, đạo đức và quyền riêng tư', 'Bịa đặt, xúc phạm cho vui', 'Đăng video người khác không xin phép', 'Phát tán tin giả'], 0, 'Đạo đức số.'),
    Q('Đánh giá sản phẩm đa phương tiện theo tiêu chí?', ['Mục tiêu, nội dung, hình ảnh, âm thanh, thông điệp, kỹ thuật', 'Chỉ độ dài', 'Chỉ màu nền', 'Chỉ số lượt xem'], 0, 'Tiêu chí toàn diện.'),
  ]),

  M(34, 'Ôn tập cuối học kì 2', [
    Q('CSDL quan hệ tổ chức dữ liệu theo?', ['Bảng (hàng và cột)', 'Hình cây', 'Hình tròn', 'Văn bản tự do'], 0, 'Bảng.'),
    Q('Lệnh SQL nào dùng để cập nhật giá trị?', ['UPDATE ... SET ... WHERE ...', 'SELECT', 'CREATE', 'DROP'], 0, 'UPDATE.'),
    Q('Định dạng ảnh nào hỗ trợ nền trong suốt?', ['PNG', 'JPG', 'BMP', 'TIFF không nén'], 0, 'PNG alpha.'),
    Q('Khi xuất phim ngắn lên YouTube thường dùng?', ['MP4 (H.264)', 'TXT', 'PDF', 'XLSX'], 0, 'MP4.'),
    Q('Phần mềm nguồn mở vẽ vector?', ['Inkscape', 'Photoshop', 'Excel', 'Notepad'], 0, 'Inkscape free.'),
    Q('Sao lưu CSDL nhằm?', ['Phòng tránh mất mát dữ liệu khi sự cố', 'Tăng tốc CPU', 'Làm chậm hệ thống', 'Xoá dữ liệu cũ'], 0, 'Backup.'),
  ]),

  M(35, 'Kiểm tra cuối học kì 2 — Tổng ôn cả năm Tin 11', [
    Q('HĐH có vai trò?', ['Quản lý tài nguyên và điều khiển hoạt động máy tính', 'Soạn báo cáo tài chính', 'Vẽ tranh', 'Chơi game'], 0, 'HĐH.'),
    Q('Khoá chính (primary key) trong CSDL quan hệ phải?', ['Duy nhất và khác NULL', 'Cho phép trùng', 'Luôn là số 0', 'Luôn NULL'], 0, 'PK.'),
    Q('Câu lệnh SQL nào xoá có điều kiện?', ['DELETE FROM HocSinh WHERE Lop = "11A";', 'DROP DATABASE;', 'SELECT *;', 'INSERT INTO;'], 0, 'DELETE WHERE.'),
    Q('Cloud storage giúp?', ['Truy cập tệp mọi nơi và đồng bộ thiết bị', 'Mất dữ liệu khi đổi máy', 'Tốn nhiều điện cá nhân', 'Tự xoá tệp'], 0, 'Cloud benefits.'),
    Q('Để bảo vệ tài khoản trực tuyến nên?', ['Mật khẩu mạnh + xác thực 2 lớp + cảnh giác phishing', 'Dùng "123456"', 'Chia sẻ mật khẩu cho bạn', 'Tắt cập nhật'], 0, 'Security.'),
    Q('Khi sử dụng tài nguyên (ảnh, nhạc, video) trên Internet cho sản phẩm số nên?', ['Tôn trọng bản quyền, dùng tài nguyên có giấy phép phù hợp và ghi nguồn', 'Lấy tuỳ ý', 'Cắt logo bản quyền', 'Đổi tên tác giả'], 0, 'Bản quyền.'),
  ]),
];

export const H11TIN_SCENARIOS = indexBy(H11TIN_WEEKS);
