// ============================================================
// Tin học Lớp 7 — 35 tuần theo GDPT 2018 (THCS).
// HK1: T1–18 · HK2: T19–35.
// Chủ đề: B. Mạng & Internet | C. Tổ chức lưu trữ
//         D. Đạo đức, pháp luật, văn hóa số | E. Soạn thảo VB nâng cao,
//         Bảng tính cơ bản | F. Giải quyết vấn đề với thuật toán
// 4–5 câu/tuần · ID prefix: "S7TIN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S7TIN', 'tin-hoc', n, title, qs, opts);

export const S7TIN_WEEKS = [
  // ========== CHỦ ĐỀ B — MẠNG MÁY TÍNH & INTERNET (T1–6) ==========
  M(1, 'Mạng máy tính là gì?', [
    Q('Mạng máy tính là?', ['Một thiết bị duy nhất', 'Một máy tính lớn', 'Một chương trình', 'Hệ thống các máy tính được kết nối để chia sẻ tài nguyên'], 3, 'Mạng máy tính là hệ thống các máy được kết nối với nhau.'),
    Q('Lợi ích của mạng máy tính?', ['Phá hoại máy', 'Chia sẻ dữ liệu, thiết bị, kết nối thông tin', 'Làm chậm máy', 'Không có lợi ích'], 1, 'Mạng giúp chia sẻ tài nguyên hiệu quả.'),
    Q('Thiết bị nào KHÔNG dùng để kết nối mạng?', ['Router', 'Bàn phím', 'Switch', 'Access Point Wi-Fi'], 1, 'Bàn phím là thiết bị nhập, không phải thiết bị mạng.'),
    Q('Phương tiện truyền dữ liệu trong mạng có dây?', ['Sóng vô tuyến', 'Sóng âm', 'Cáp đồng, cáp quang', 'Sóng hồng ngoại'], 2, 'Cáp đồng và cáp quang là phương tiện có dây.'),
    Q('Mạng không dây dùng?', ['Cáp quang', 'Sóng vô tuyến (Wi-Fi, Bluetooth)', 'Cáp xoắn', 'Dây điện'], 1, 'Mạng không dây dùng sóng vô tuyến.'),
  ]),

  M(2, 'Phân loại mạng theo quy mô', [
    Q('LAN là viết tắt của?', ['Last Area Network', 'Local Area Network — mạng cục bộ', 'Long Area Network', 'Large Area Network'], 1, 'LAN = mạng cục bộ trong phạm vi nhỏ.'),
    Q('LAN có phạm vi?', ['Toàn châu lục', 'Trong một phòng, toà nhà, trường học', 'Một quốc gia', 'Toàn thế giới'], 1, 'LAN là mạng cục bộ trong phạm vi hẹp.'),
    Q('WAN là viết tắt của?', ['World Area Network', 'Wireless Area Network', 'Web Area Network', 'Wide Area Network — mạng diện rộng'], 3, 'WAN = mạng diện rộng, kết nối qua nhiều khu vực.'),
    Q('Internet là loại mạng nào?', ['WAN toàn cầu — mạng của các mạng', 'LAN trong một toà nhà', 'PAN cá nhân qua Bluetooth', 'MAN nhỏ'], 0, 'Internet là mạng diện rộng toàn cầu.'),
    Q('Mạng kết nối các máy trong một thành phố gọi là?', ['MAN (Metropolitan Area Network)', 'LAN — mạng cục bộ trong toà nhà', 'PAN — mạng cá nhân Bluetooth', 'WAN — mạng diện rộng toàn cầu'], 0, 'MAN = mạng đô thị, phạm vi thành phố.'),
  ]),

  M(3, 'Internet — cách hoạt động cơ bản', [
    Q('Internet ra đời vào khoảng?', ['1500', 'Cuối thập niên 1960 (ARPANET)', '2000', '1900'], 1, 'ARPANET — tiền thân Internet — ra đời cuối thập niên 1960.'),
    Q('Để truy cập Internet, máy tính cần?', ['Chỉ cần loa', 'Thiết bị kết nối (modem/router) và nhà cung cấp dịch vụ (ISP)', 'Chỉ cần màn hình', 'Chỉ cần chuột'], 1, 'Cần thiết bị mạng và ISP để kết nối Internet.'),
    Q('Địa chỉ IP là?', ['Địa chỉ định danh duy nhất của thiết bị trong mạng', 'Mật khẩu', 'Tên trình duyệt', 'Tên người dùng'], 0, 'IP địa chỉ định danh thiết bị trên mạng.'),
    Q('Tên miền (domain) ví dụ?', ['Một ảnh', 'Một âm thanh', 'Một số dài', 'google.com, vnexpress.net'], 3, 'Tên miền dạng chữ giúp dễ nhớ thay cho IP số.'),
    Q('DNS có chức năng gì?', ['Lưu trữ ảnh', 'Phân giải tên miền thành địa chỉ IP', 'Bảo vệ virus', 'Tăng tốc máy'], 1, 'DNS dịch tên miền sang IP để truy cập.'),
  ]),

  M(4, 'Dịch vụ trên Internet', [
    Q('WWW (World Wide Web) là?', ['Một loại cáp', 'Một máy tính', 'Hệ thống các trang web liên kết qua Internet', 'Một loại virus'], 2, 'WWW là hệ thống trang web trên Internet.'),
    Q('Trình duyệt web là?', ['Mạng cục bộ', 'Phần cứng máy tính', 'Phần mềm để xem trang web (Chrome, Firefox, Edge)', 'Một loại virus'], 2, 'Trình duyệt là phần mềm xem web.'),
    Q('Công cụ tìm kiếm phổ biến?', ['Microsoft Edge, Chrome (trình duyệt)', 'Word, Excel', 'PowerPoint', 'Google, Bing, Cốc Cốc'], 3, 'Google, Bing là công cụ tìm kiếm phổ biến.'),
    Q('Email là dịch vụ?', ['Gửi và nhận thư điện tử qua Internet', 'Gọi điện thoại', 'Chia sẻ ảnh', 'Lưu trữ đám mây'], 0, 'Email là thư điện tử qua Internet.'),
    Q('Dịch vụ lưu trữ đám mây phổ biến?', ['Word, Excel', 'PowerPoint', 'Google Drive, OneDrive, Dropbox, iCloud', 'Gmail, Outlook (thư điện tử)'], 2, 'Google Drive, OneDrive là dịch vụ lưu trữ đám mây.'),
  ]),

  M(5, 'Tìm kiếm thông tin trên Internet', [
    Q('Để tìm kiếm hiệu quả, em nên?', ['Dùng từ khoá ngắn gọn, chính xác', 'Không cần gõ gì', 'Gõ cả câu dài lê thê', 'Dùng từ mơ hồ'], 0, 'Từ khoá ngắn và chính xác cho kết quả tốt.'),
    Q('Để tìm cụm từ chính xác trong Google, dùng?', ['Dấu cộng +', 'Dấu hỏi ?', 'Dấu ngoặc kép ""', 'Dấu sao *'], 2, 'Dấu ngoặc kép tìm cụm từ chính xác.'),
    Q('Để loại bỏ từ trong kết quả tìm, dùng?', ['Dấu hỏi', 'Dấu trừ - trước từ', 'Dấu cộng', 'Dấu sao'], 1, 'Dấu trừ loại từ ra khỏi kết quả.'),
    Q('Để tìm trong một website cụ thể, dùng?', ['in:tên website', 'on:tên website', 'Cách thông thường', 'site:tên_website từ_khoá'], 3, 'site:vnexpress.net giáo dục — tìm trong vnexpress.net.'),
    Q('Khi nhận thông tin trên mạng, em cần?', ['Chia sẻ ngay', 'Tin ngay', 'Kiểm tra nguồn gốc, đối chiếu nhiều nguồn', 'Không cần kiểm chứng'], 2, 'Kiểm tra nguồn để tránh tin giả.'),
  ]),

  M(6, 'An toàn thông tin cá nhân trên Internet', [
    Q('Thông tin cá nhân cần bảo vệ gồm?', ['Chỉ tên', 'Họ tên, địa chỉ, số điện thoại, mật khẩu, hình ảnh', 'Không cần bảo vệ', 'Chỉ tuổi'], 1, 'Tất cả thông tin định danh đều cần bảo vệ.'),
    Q('Mật khẩu mạnh nên?', ['Là ngày sinh', 'Là 123456', 'Dài ≥8 ký tự, có chữ hoa, thường, số, ký tự đặc biệt', 'Là tên mình'], 2, 'Mật khẩu mạnh kết hợp nhiều loại ký tự.'),
    Q('KHÔNG nên dùng mật khẩu nào?', ['Mật khẩu dài có ký tự đặc biệt', '"123456", "password", ngày sinh, tên mình', 'Mật khẩu ngẫu nhiên', 'Mật khẩu chỉ mình biết'], 1, 'Mật khẩu phổ biến rất dễ bị đoán.'),
    Q('Khi gặp người lạ xin thông tin cá nhân trên mạng, em nên?', ['Từ chối, không cung cấp', 'Cung cấp đầy đủ', 'Chia sẻ ảnh', 'Hẹn gặp'], 0, 'Không cung cấp thông tin cho người lạ trên mạng.'),
    Q('Để bảo vệ tài khoản, em nên?', ['Chia sẻ tài khoản', 'Lưu mật khẩu công khai', 'Bật xác thực 2 bước, đổi mật khẩu định kì, đăng xuất khi xong', 'Không cần bảo mật'], 2, 'Xác thực 2 bước và đổi mật khẩu giúp bảo vệ tài khoản.'),
  ]),

  // ========== CHỦ ĐỀ C — TỔ CHỨC LƯU TRỮ, TÌM KIẾM (T7–9) ==========
  M(7, 'Tổ chức lưu trữ dữ liệu', [
    Q('Tệp (file) là?', ['Một chương trình', 'Một thiết bị', 'Một thư mục', 'Đơn vị lưu trữ thông tin trên máy tính'], 3, 'File là đơn vị cơ bản lưu trữ thông tin.'),
    Q('Thư mục (folder) dùng để?', ['Chạy chương trình', 'Lưu mật khẩu', 'Tổ chức và nhóm các tệp', 'Phát nhạc'], 2, 'Thư mục giúp tổ chức các tệp.'),
    Q('Phần mở rộng tệp ".docx" thuộc?', ['Notepad (.txt)', 'Microsoft Word', 'Microsoft Excel (.xlsx)', 'PowerPoint'], 1, '.docx là tệp Word.'),
    Q('Phần mở rộng ".xlsx" thuộc?', ['PowerPoint', 'Excel', 'Word (.docx)', 'PowerPoint (.pptx)'], 1, '.xlsx là tệp Excel.'),
    Q('Cây thư mục có dạng?', ['Phẳng — tất cả tệp xếp cùng một mức', 'Thư mục mẹ chứa thư mục con và tệp', 'Dạng lưới ô vuông như bảng tính', 'Dạng vòng tròn khép kín'], 1, 'Cấu trúc cây giúp tổ chức tệp logic.'),
  ]),

  M(8, 'Tìm kiếm và trao đổi tệp', [
    Q('Để tìm tệp trên máy Windows, dùng?', ['Calculator', 'Notepad', 'Search Bar / File Explorer', 'Disk Cleanup (dọn ổ đĩa)'], 2, 'Search Bar trong Windows giúp tìm tệp.'),
    Q('Để sao chép tệp, dùng phím tắt?', ['Ctrl + C', 'Ctrl + V', 'Ctrl + Z', 'Ctrl + X'], 0, 'Ctrl+C để copy.'),
    Q('Để dán tệp, dùng?', ['Ctrl + C', 'Ctrl + Z', 'Ctrl + X', 'Ctrl + V'], 3, 'Ctrl+V để paste.'),
    Q('Để di chuyển tệp, dùng?', ['Chỉ Ctrl + Z', 'Chỉ Ctrl + V', 'Ctrl + C rồi Ctrl + V', 'Ctrl + X rồi Ctrl + V'], 3, 'Cut (Ctrl+X) rồi Paste (Ctrl+V) để di chuyển.'),
    Q('Cách trao đổi tệp qua mạng?', ['In ra giấy', 'Email đính kèm, lưu trữ đám mây, USB chia sẻ', 'Chép tay', 'Đọc cho nhau nghe'], 1, 'Email, cloud, USB là cách trao đổi tệp phổ biến.'),
  ]),

  M(9, 'Nén và giải nén tệp', [
    Q('Nén tệp để làm gì?', ['Không có tác dụng', 'Giảm dung lượng, dễ chia sẻ', 'Phá tệp', 'Tăng dung lượng'], 1, 'Nén giảm dung lượng tệp.'),
    Q('Phần mềm nén phổ biến?', ['Notepad, WordPad', 'WinRAR, 7-Zip', 'Word, Excel', 'Calculator'], 1, 'WinRAR, 7-Zip là phần mềm nén phổ biến.'),
    Q('Tệp nén thường có đuôi?', ['.zip, .rar, .7z', '.xlsx', '.docx', '.pptx'], 0, '.zip, .rar, .7z là tệp nén.'),
    Q('Để giải nén tệp .zip cần?', ['Trình phát nhạc', 'Trình duyệt', 'Bàn phím', 'Phần mềm nén/giải nén'], 3, 'Cần phần mềm để giải nén.'),
    Q('Nén tệp giúp ích khi?', ['Phá tệp', 'Làm chậm máy', 'Không có ích', 'Gửi qua email (giới hạn dung lượng), tiết kiệm bộ nhớ'], 3, 'Nén giúp gửi email và tiết kiệm bộ nhớ.'),
  ]),

  // ========== CHỦ ĐỀ D — ĐẠO ĐỨC SỐ (T10–12) ==========
  M(10, 'Đạo đức và pháp luật khi dùng Internet', [
    Q('Khi đăng bài lên mạng, em nên?', ['Đăng tin giả', 'Tôn trọng người khác, không xúc phạm', 'Phỉ báng người khác', 'Lăng mạ tự do'], 1, 'Tôn trọng người khác là đạo đức mạng cơ bản.'),
    Q('Hành vi vi phạm pháp luật trên mạng?', ['Tìm kiếm thông tin', 'Tung tin giả, xúc phạm, lừa đảo, vi phạm bản quyền', 'Đọc báo', 'Học online'], 1, 'Tin giả, xúc phạm là vi phạm pháp luật.'),
    Q('Bản quyền tác giả nghĩa là?', ['Quyền của bất kì ai', 'Quyền của người sáng tác đối với tác phẩm của mình', 'Tự do sao chép', 'Không có quyền'], 1, 'Bản quyền bảo vệ quyền của tác giả.'),
    Q('Tải nhạc, phim lậu (không trả tiền cho tác giả) là?', ['Hợp pháp', 'Khuyến khích', 'Không sao', 'Vi phạm bản quyền'], 3, 'Tải lậu vi phạm bản quyền.'),
    Q('Khi trích dẫn thông tin trên mạng, em nên?', ['Coi như của mình', 'Không cần ghi', 'Sửa đổi rồi đăng', 'Ghi rõ nguồn'], 3, 'Ghi nguồn là tôn trọng tác giả.'),
  ]),

  M(11, 'Văn hoá ứng xử trên mạng xã hội', [
    Q('Khi giao tiếp trên mạng, em nên?', ['Lịch sự, không gây xung đột', 'Chửi bới', 'Khiêu khích', 'Lăng mạ'], 0, 'Lịch sự là văn hoá mạng cơ bản.'),
    Q('Khi gặp bình luận tiêu cực, em nên?', ['Chửi lại to hơn', 'Lập group nói xấu', 'Không phản ứng nóng giận, có thể báo cáo', 'Đăng ảnh chế'], 2, 'Bình tĩnh và báo cáo là cách văn minh.'),
    Q('Hành vi bắt nạt qua mạng (cyberbullying) là?', ['Quấy rối, xúc phạm, đe doạ người khác qua mạng', 'Khuyến khích', 'Bình thường', 'Trò đùa vô hại'], 0, 'Cyberbullying là hành vi xấu cần lên án.'),
    Q('Khi bị bắt nạt qua mạng, em nên?', ['Lưu bằng chứng, chặn người gây, báo người lớn', 'Im lặng chịu', 'Trầm cảm', 'Trả đũa'], 0, 'Lưu bằng chứng và báo người lớn.'),
    Q('Đăng ảnh người khác KHÔNG xin phép?', ['Khuyến khích', 'Bình thường', 'Vi phạm quyền riêng tư', 'Hợp pháp'], 2, 'Đăng ảnh cần xin phép — quyền hình ảnh.'),
  ]),

  M(12, 'Phòng chống lừa đảo và an toàn tài khoản', [
    Q('Hình thức lừa đảo phổ biến qua mạng?', ['Phishing — giả mạo trang web/email lấy mật khẩu', 'Tải sách', 'Hỏi thăm', 'Học nhóm'], 0, 'Phishing là chiêu lừa lấy thông tin.'),
    Q('Email lạ yêu cầu nhập mật khẩu, em nên?', ['Chia sẻ với bạn', 'Không nhập, kiểm tra kĩ hoặc xoá', 'Trả lời', 'Nhập ngay'], 1, 'Email lạ xin mật khẩu thường là phishing.'),
    Q('Khi thấy thông báo "trúng thưởng triệu USD", em nên?', ['Tin ngay', 'Không tin, không cung cấp thông tin', 'Chuyển tiền phí', 'Cung cấp số điện thoại'], 1, '"Trúng thưởng" là lừa đảo phổ biến.'),
    Q('Để tránh virus, em nên?', ['Tải mọi thứ', 'Không tải tệp từ nguồn lạ, có phần mềm diệt virus', 'Tắt diệt virus', 'Click mọi link'], 1, 'Tải từ nguồn tin cậy và có anti-virus.'),
    Q('Khi bị lừa đảo trên mạng, em nên?', ['Báo gia đình, công an, nhà cung cấp dịch vụ', 'Tự xử lý', 'Im lặng', 'Trả đũa lại'], 0, 'Báo người có thẩm quyền khi bị lừa.'),
  ]),

  // ========== CHỦ ĐỀ E1 — SOẠN THẢO VĂN BẢN NÂNG CAO (T13–17) ==========
  M(13, 'Định dạng văn bản nâng cao', [
    Q('Để chỉnh khoảng cách dòng trong Word, dùng?', ['Line Spacing (Home / Paragraph)', 'Font Size', 'Font Color (màu chữ)', 'Italic (chữ nghiêng)'], 0, 'Line Spacing chỉnh khoảng cách dòng.'),
    Q('Để chỉnh thụt đầu dòng (indent), dùng?', ['Tab hoặc nút Increase Indent', 'Enter để xuống dòng mới', 'Backspace', 'Delete'], 0, 'Tab hoặc nút thụt đầu dòng.'),
    Q('Để tạo danh sách có dấu chấm tròn, dùng?', ['Numbering', 'Outline', 'Numbering (đánh số 1, 2, 3)', 'Bullets'], 3, 'Bullets tạo danh sách chấm tròn.'),
    Q('Để tạo danh sách có số 1, 2, 3..., dùng?', ['Bullets', 'Numbering', 'Multilevel List (danh sách phân cấp)', 'Header'], 1, 'Numbering tạo danh sách đánh số.'),
    Q('Phím tắt Ctrl + B dùng để?', ['Tô màu', 'In đậm (Bold)', 'Gạch chân', 'In nghiêng'], 1, 'Ctrl+B = Bold.'),
  ]),

  M(14, 'Chèn hình ảnh trong văn bản', [
    Q('Để chèn hình ảnh trong Word, dùng?', ['View → Zoom', 'Insert → Picture', 'Home → Bold', 'File → Print'], 1, 'Insert → Picture để chèn ảnh.'),
    Q('Sau khi chèn, có thể thay đổi?', ['Chỉ kích thước', 'Không thay đổi được', 'Chỉ vị trí', 'Kích thước, vị trí, kiểu chữ bao quanh'], 3, 'Ảnh trong Word có thể tuỳ chỉnh đa dạng.'),
    Q('Kiểu chữ bao quanh "In Line With Text" nghĩa là?', ['Ảnh thả tự do', 'Ảnh nằm trên dòng văn bản như một chữ', 'Ảnh ẩn', 'Ảnh có nền'], 1, 'In Line With Text — ảnh như một chữ.'),
    Q('Kiểu "Square" cho phép?', ['Ảnh xuyên qua text', 'Ảnh tự do', 'Ảnh nằm trên text', 'Văn bản bao quanh ảnh theo hình vuông'], 3, 'Square — text bao quanh ảnh hình vuông.'),
    Q('Để xoá ảnh đã chèn?', ['Tắt máy', 'Khởi động lại', 'Đóng Word', 'Chọn ảnh và nhấn Delete'], 3, 'Chọn ảnh rồi Delete.'),
  ]),

  M(15, 'Chèn bảng trong văn bản', [
    Q('Để chèn bảng trong Word?', ['View → Zoom', 'Insert → Table', 'File → Print', 'Home → Bold'], 1, 'Insert → Table để chèn bảng.'),
    Q('Để thêm dòng vào bảng?', ['Xoá bảng', 'Chuột phải vào bảng → Insert → Rows Above/Below', 'Đóng Word', 'Tắt máy'], 1, 'Chuột phải để thêm dòng.'),
    Q('Để gộp ô (merge cells)?', ['Tắt máy', 'Split Cells (chia ô)', 'Chọn các ô → chuột phải → Merge Cells', 'Thêm dòng'], 2, 'Merge Cells để gộp ô.'),
    Q('Để chia ô (split cells)?', ['Chọn ô → chuột phải → Split Cells', 'Merge Cells (gộp ô)', 'Sao chép', 'Delete Cells (xoá ô)'], 0, 'Split Cells để chia ô.'),
    Q('Bảng giúp ích khi?', ['Lưu nhạc', 'Lưu video', 'Trình bày dữ liệu có cấu trúc rõ ràng', 'Trang trí'], 2, 'Bảng trình bày dữ liệu có cấu trúc.'),
  ]),

  M(16, 'Tạo danh sách và phân cấp', [
    Q('Danh sách đa cấp (Multilevel List) dùng để?', ['Tạo danh sách có nhiều cấp lồng nhau', 'Chèn ảnh', 'Sửa font', 'Tô màu'], 0, 'Multilevel List tạo danh sách phân cấp.'),
    Q('Để tăng cấp danh sách?', ['Phím Shift+Tab', 'Phím Tab', 'Phím Backspace', 'Phím Delete'], 1, 'Tab để tăng cấp; Shift+Tab để giảm cấp.'),
    Q('Để giảm cấp danh sách?', ['Enter để xuống dòng mới', 'Delete', 'Shift + Tab', 'Tab để tăng cấp danh sách'], 2, 'Shift+Tab giảm cấp.'),
    Q('Đánh số trang trong Word?', ['Insert → Page Number', 'View → Zoom', 'Home → Color', 'File → Save'], 0, 'Insert → Page Number.'),
    Q('Tạo mục lục tự động trong Word?', ['Insert → Picture', 'View → Zoom', 'Home → Bold', 'References → Table of Contents'], 3, 'References → Table of Contents.'),
  ]),

  M(17, 'Thực hành soạn thảo văn bản', [
    Q('Phím tắt Ctrl + S?', ['Save (Lưu)', 'Copy (Ctrl + C)', 'Paste (Ctrl + V)', 'Save As'], 0, 'Ctrl+S = Save.'),
    Q('Phím tắt Ctrl + Z?', ['Redo (Ctrl + Y)', 'Undo (hoàn tác)', 'Save (Ctrl + S)', 'Copy (Ctrl + C)'], 1, 'Ctrl+Z = Undo.'),
    Q('Phím tắt Ctrl + Y?', ['Redo (làm lại)', 'Copy (Ctrl + C)', 'Save (Ctrl + S)', 'Undo (Ctrl + Z)'], 0, 'Ctrl+Y = Redo.'),
    Q('Để in văn bản?', ['Ctrl + Z', 'Ctrl + C', 'Ctrl + S', 'Ctrl + P'], 3, 'Ctrl+P = Print.'),
    Q('Trước khi in, em nên?', ['Xoá tệp', 'Xem trước (Print Preview) và kiểm tra lỗi', 'Đóng máy', 'In ngay'], 1, 'Print Preview giúp kiểm tra trước khi in.'),
  ]),

  M(18, 'Ôn tập học kì 1', [
    Q('LAN là?', ['Mạng cá nhân', 'Mạng đô thị', 'Mạng diện rộng', 'Mạng cục bộ'], 3, 'LAN = Local Area Network.'),
    Q('Internet là?', ['LAN — mạng cục bộ một toà nhà', 'Một máy tính', 'PAN — mạng cá nhân Bluetooth', 'Mạng diện rộng toàn cầu'], 3, 'Internet là WAN toàn cầu.'),
    Q('Mật khẩu mạnh nên?', ['Dài ≥8 ký tự, có chữ hoa, thường, số, ký tự đặc biệt', 'Là 123456', 'Là ngày sinh', 'Là tên'], 0, 'Mật khẩu mạnh kết hợp nhiều loại.'),
    Q('Để nén tệp?', ['WinRAR, 7-Zip', 'Microsoft Word (soạn thảo văn bản)', 'Microsoft Excel (bảng tính)', 'Paint (vẽ tranh)'], 0, 'WinRAR, 7-Zip để nén.'),
    Q('Ctrl + B trong Word?', ['In nghiêng', 'Gạch chân', 'In đậm', 'Tô màu'], 2, 'Ctrl+B = Bold.'),
  ]),

  // ========== CHỦ ĐỀ E2 — BẢNG TÍNH (T19–28) ==========
  M(19, 'Làm quen với bảng tính Excel', [
    Q('Bảng tính (Spreadsheet) dùng để?', ['Tổ chức dữ liệu dạng bảng và thực hiện tính toán', 'Soạn thảo văn bản', 'Vẽ tranh', 'Phát nhạc'], 0, 'Bảng tính tổ chức và tính toán dữ liệu.'),
    Q('Phần mềm bảng tính phổ biến?', ['Microsoft Paint (vẽ tranh)', 'Microsoft Word (soạn thảo văn bản)', 'Microsoft Excel, Google Sheets, LibreOffice Calc', 'PowerPoint'], 2, 'Excel, Google Sheets là phần mềm bảng tính phổ biến.'),
    Q('Ô (cell) trong Excel là?', ['Một file', 'Giao điểm của hàng và cột', 'Một sheet', 'Cả bảng tính'], 1, 'Ô là giao điểm của hàng và cột.'),
    Q('Địa chỉ ô A1 nghĩa là?', ['Hàng đầu tiên', 'Cột đầu tiên', 'Cột 1, hàng A', 'Cột A, hàng 1'], 3, 'A1 = cột A, hàng 1.'),
    Q('Một file Excel có thể chứa?', ['Chỉ 1 sheet', 'Không có sheet', '100 sheet cố định', 'Nhiều sheet (trang tính)'], 3, 'Một file Excel chứa nhiều sheet.'),
  ]),

  M(20, 'Nhập và định dạng dữ liệu', [
    Q('Có mấy loại dữ liệu cơ bản trong Excel?', ['Số, văn bản, ngày giờ, công thức', '2 loại', '1 loại', '10 loại'], 0, 'Excel có nhiều loại dữ liệu.'),
    Q('Để định dạng số (số tiền, %), dùng?', ['Insert → Picture', 'File → Print', 'View → Zoom', 'Home → Number Format'], 3, 'Number Format trong Home.'),
    Q('Để gộp các ô lại?', ['Wrap Text (gói chữ trong ô)', 'Split Cells', 'Merge & Center', 'AutoFit (tự co giãn ô)'], 2, 'Merge & Center để gộp ô.'),
    Q('Để xuống dòng trong cùng ô?', ['Space (chỉ tạo khoảng trắng)', 'Tab (sang ô bên phải)', 'Alt + Enter', 'Enter (xuống ô bên dưới)'], 2, 'Alt+Enter xuống dòng trong ô.'),
    Q('Để kéo công thức xuống các ô khác?', ['Kéo Fill Handle (góc dưới phải)', 'Không làm được', 'Copy Paste từng ô', 'Gõ lại'], 0, 'Fill Handle (chấm vuông góc dưới) để kéo công thức.'),
  ]),

  M(21, 'Công thức cơ bản', [
    Q('Công thức trong Excel bắt đầu bằng?', ['Dấu + (cộng)', 'Dấu = (bằng)', 'Dấu : (hai chấm)', 'Dấu @ (a còng)'], 1, 'Mọi công thức Excel bắt đầu bằng dấu =.'),
    Q('Công thức =A1+B1 sẽ?', ['Cộng giá trị ô A1 và B1', 'Nhân giá trị A1 với B1', 'Lấy A1 trừ B1', 'Lấy A1 chia cho B1'], 0, '=A1+B1 cộng hai ô.'),
    Q('Phép nhân trong Excel dùng dấu?', ['* (sao)', 'x', '×', '. (dấu chấm)'], 0, 'Excel dùng dấu * cho phép nhân.'),
    Q('Phép chia trong Excel dùng dấu?', ['\\ (sổ ngược)', '% (phần trăm)', '/ (sổ chéo)', '÷'], 2, 'Excel dùng dấu / cho phép chia.'),
    Q('Phép luỹ thừa trong Excel?', ['^ (mũ)', '* * (hai dấu sao)', 'exp (hàm exp)', '// (hai sổ chéo)'], 0, 'Excel dùng dấu ^ cho luỹ thừa: 2^3 = 8.'),
  ]),

  M(22, 'Hàm SUM, AVERAGE', [
    Q('Hàm SUM dùng để?', ['Tính trung bình', 'Đếm số ô', 'Tính tổng', 'Tìm lớn nhất'], 2, 'SUM tính tổng.'),
    Q('=SUM(A1:A10) nghĩa là?', ['Lấy A1 trừ A10', 'Nhân A1 với A10', 'Tổng các ô từ A1 đến A10', 'Cộng A1 với A10'], 2, '=SUM(A1:A10) tính tổng 10 ô.'),
    Q('Hàm AVERAGE dùng để?', ['Tính tổng', 'Tìm max', 'Tìm min', 'Tính trung bình cộng'], 3, 'AVERAGE tính trung bình.'),
    Q('=AVERAGE(B2:B6) sẽ?', ['Đếm số ô có dữ liệu trong B2:B6', 'Tìm lớn nhất', 'Tính tổng', 'Tính trung bình 5 giá trị B2 đến B6'], 3, 'AVERAGE tính trung bình các ô trong vùng.'),
    Q('Nếu A1=5, A2=3, A3=7, kết quả =SUM(A1:A3) là?', ['5', '7', '15', '0'], 2, '5+3+7 = 15.'),
  ]),

  M(23, 'Hàm MAX, MIN, COUNT', [
    Q('Hàm MAX dùng để?', ['Tìm giá trị lớn nhất', 'Tính tổng', 'Tìm nhỏ nhất', 'Đếm số ô chứa số'], 0, 'MAX tìm giá trị lớn nhất.'),
    Q('Hàm MIN dùng để?', ['Tính tổng', 'Tìm lớn nhất', 'Đếm số ô chứa số', 'Tìm giá trị nhỏ nhất'], 3, 'MIN tìm giá trị nhỏ nhất.'),
    Q('Hàm COUNT dùng để?', ['Cộng tất cả ô trong vùng', 'Lấy hiệu giữa ô đầu và ô cuối', 'Trung bình', 'Đếm số ô chứa số trong vùng'], 3, 'COUNT đếm số ô chứa số.'),
    Q('Hàm COUNTA dùng để?', ['Tính tổng', 'Đếm ô trống', 'Chỉ đếm số', 'Đếm số ô không trống (cả text và số)'], 3, 'COUNTA đếm ô không trống bất kì.'),
    Q('Nếu A1=10, A2=5, A3=20, kết quả =MAX(A1:A3)?', ['35', '10', '20', '5'], 2, 'Max của (10, 5, 20) là 20.'),
  ]),

  M(24, 'Hàm IF', [
    Q('Hàm IF có cú pháp?', ['=IF(a)', '=IF(a, b)', '=IF(điều_kiện, giá_trị_đúng, giá_trị_sai)', '=IF(điều_kiện, giá_trị_đúng)'], 2, 'IF có 3 tham số.'),
    Q('=IF(A1>5, "Lớn", "Nhỏ") trả về?', ['Luôn "Lớn"', 'Luôn "Nhỏ"', '#NAME? (lỗi tên hàm)', '"Lớn" nếu A1>5, "Nhỏ" nếu ngược lại'], 3, 'IF kiểm tra điều kiện.'),
    Q('=IF(A1>=5, "Đạt", "Không đạt") với A1=5 sẽ?', ['"Đạt"', '#VALUE! (lỗi giá trị)', '"Không đạt"', '0'], 0, '5>=5 đúng nên trả "Đạt".'),
    Q('Hàm IF lồng nhau dùng khi?', ['Lỗi luôn', 'Cần kiểm tra nhiều điều kiện', 'Không cần điều kiện', 'Chỉ một điều kiện'], 1, 'IF lồng để kiểm tra nhiều cấp điều kiện.'),
    Q('=IF(A1>=8, "Giỏi", IF(A1>=5, "TB", "Yếu")) với A1=6?', ['"Giỏi"', '#N/A (không xác định)', '"TB"', '"Yếu" (do nhánh sai)'], 2, '6<8 nhưng 6>=5 nên "TB".'),
  ]),

  M(25, 'Sắp xếp và lọc dữ liệu', [
    Q('Để sắp xếp dữ liệu, dùng?', ['Data → Sort', 'View → Zoom', 'Home → Bold', 'File → Print'], 0, 'Data → Sort để sắp xếp.'),
    Q('Sắp xếp tăng dần (Ascending) là?', ['Không thay đổi', 'Ngẫu nhiên', 'Nhỏ → Lớn', 'Lớn → Nhỏ'], 2, 'Ascending = tăng dần.'),
    Q('Sắp xếp giảm dần là?', ['A → Z (theo bảng chữ cái)', 'Nhỏ → Lớn', 'Ngẫu nhiên', 'Lớn → Nhỏ'], 3, 'Descending = giảm dần.'),
    Q('Để lọc dữ liệu, dùng?', ['Data → Filter', 'View → Zoom (phóng to)', 'Data → Sort (sắp xếp)', 'Home → Bold (in đậm)'], 0, 'Data → Filter để lọc.'),
    Q('Lọc giúp ích khi?', ['Chỉ hiển thị dữ liệu thoả điều kiện', 'In dữ liệu', 'Xoá dữ liệu', 'Tô màu dữ liệu'], 0, 'Filter hiển thị dữ liệu thoả điều kiện.'),
  ]),

  M(26, 'Biểu đồ trong Excel', [
    Q('Để tạo biểu đồ trong Excel?', ['Chọn dữ liệu → Insert → Chart', 'Home → Bold', 'View → Zoom', 'File → Save'], 0, 'Insert → Chart để tạo biểu đồ.'),
    Q('Loại biểu đồ nào thể hiện so sánh số liệu?', ['Đường (Line)', 'Cột (Column/Bar)', 'Tản (Scatter)', 'Tròn (Pie)'], 1, 'Biểu đồ cột so sánh số liệu.'),
    Q('Biểu đồ tròn (Pie) thể hiện?', ['Số tuyệt đối', 'So sánh hai biến', 'Xu hướng theo thời gian', 'Tỉ lệ phần trăm các thành phần'], 3, 'Pie chart thể hiện tỉ lệ.'),
    Q('Biểu đồ đường (Line) thể hiện?', ['Bảng dữ liệu', 'Tỉ lệ phần trăm các thành phần', 'So sánh tuyệt đối', 'Xu hướng biến đổi theo thời gian'], 3, 'Line chart thể hiện xu hướng.'),
    Q('Tiêu đề biểu đồ giúp?', ['Người xem hiểu nội dung biểu đồ', 'Trang trí', 'Tốn dung lượng', 'Không cần'], 0, 'Tiêu đề rất quan trọng để hiểu biểu đồ.'),
  ]),

  M(27, 'Thực hành tổng hợp Excel', [
    Q('Để tính tổng điểm của HS có 3 môn ở B2, C2, D2?', ['=B2*C2', '=SUM(B2:D2) hoặc =B2+C2+D2', '=AVERAGE(B2:D2)', '=B2-C2'], 1, 'SUM(B2:D2) hoặc cộng trực tiếp.'),
    Q('Để tính trung bình điểm?', ['=MAX(B2:D2)', '=SUM(B2:D2)', '=AVERAGE(B2:D2)', '=MIN(B2:D2)'], 2, 'AVERAGE tính trung bình.'),
    Q('Để xếp loại "Đạt" nếu TB>=5?', ['=COUNT(E2)', '=MAX(E2)', '=SUM(E2)', '=IF(E2>=5, "Đạt", "Không đạt")'], 3, 'IF để xếp loại theo điều kiện.'),
    Q('Để biết HS nào điểm cao nhất, dùng?', ['MIN để tìm điểm cao nhất', 'AVERAGE', 'MAX để tìm điểm cao nhất', 'SUM để tìm điểm cao nhất'], 2, 'MAX tìm điểm cao nhất.'),
    Q('Để đếm số HS đạt, dùng hàm?', ['MAX (tìm điểm cao nhất)', 'SUM (tính tổng điểm)', 'COUNTIF', 'COUNT (đếm mọi ô có số)'], 2, 'COUNTIF đếm theo điều kiện.'),
  ]),

  M(28, 'Lưu, in và chia sẻ bảng tính', [
    Q('Để lưu file Excel?', ['Ctrl + C', 'Ctrl + P', 'Ctrl + S', 'Ctrl + Z'], 2, 'Ctrl+S = Save.'),
    Q('Để in?', ['Ctrl + S', 'Ctrl + Z', 'Ctrl + P', 'Ctrl + C'], 2, 'Ctrl+P = Print.'),
    Q('Trước khi in nên?', ['In nhiều bản', 'Xoá dữ liệu', 'Tắt máy', 'Xem trước (Print Preview)'], 3, 'Print Preview để kiểm tra trước.'),
    Q('Chia sẻ Excel online qua?', ['Google Sheets hoặc OneDrive', 'In ra giấy', 'Chép vào USB rồi gửi', 'Chép tay'], 0, 'Google Sheets/OneDrive cho phép chia sẻ online.'),
    Q('Để bảo vệ tệp Excel?', ['Lưu dưới dạng PDF chỉ đọc', 'Đặt mật khẩu File → Info → Protect Workbook', 'Lưu ở USB', 'Đặt tên dài'], 1, 'Protect Workbook để đặt mật khẩu.'),
  ]),

  // ========== CHỦ ĐỀ F — GIẢI QUYẾT VẤN ĐỀ VỚI THUẬT TOÁN (T29–34) ==========
  M(29, 'Thuật toán là gì?', [
    Q('Thuật toán là?', ['Một chương trình', 'Một thiết bị', 'Dãy các bước rõ ràng để giải quyết vấn đề', 'Một máy tính'], 2, 'Thuật toán = dãy bước rõ ràng giải vấn đề.'),
    Q('Tính chất quan trọng của thuật toán?', ['Tính phức tạp', 'Tính dài dòng', 'Tính xác định, tính dừng, tính đúng đắn', 'Tính ngẫu nhiên'], 2, 'Thuật toán cần xác định, dừng, đúng.'),
    Q('Thuật toán "đun nước sôi" KHÔNG có?', ['Tính dừng', 'Tính xác định', 'Tính dài hạn vô tận', 'Tính đúng đắn'], 2, 'Thuật toán phải có tính dừng.'),
    Q('Hai cách biểu diễn thuật toán phổ biến?', ['Đoán mò không có quy tắc', 'Vẽ tranh', 'Liệt kê bước và sơ đồ khối (flowchart)', 'Viết thành bài thơ'], 2, 'Liệt kê và sơ đồ khối là phổ biến.'),
    Q('Sơ đồ khối dùng các hình?', ['Chỉ hình vuông', 'Hình bầu dục (bắt đầu/kết thúc), chữ nhật (xử lí), thoi (điều kiện)', 'Dùng tuỳ ý không theo quy ước', 'Chỉ hình tròn'], 1, 'Mỗi hình có ý nghĩa riêng trong sơ đồ khối.'),
  ]),

  M(30, 'Cấu trúc tuần tự', [
    Q('Cấu trúc tuần tự là?', ['Các bước thực hiện không cần thứ tự', 'Rẽ nhánh', 'Lặp lại', 'Các bước thực hiện lần lượt theo thứ tự'], 3, 'Tuần tự = thực hiện lần lượt từng bước.'),
    Q('Ví dụ về cấu trúc tuần tự?', ['Lặp 10 lần', 'Kiểm tra số chẵn lẻ', 'Đếm từ 1 đến 100', 'Nấu ăn: rửa rau → cắt → xào → nêm gia vị'], 3, 'Nấu ăn theo thứ tự là tuần tự.'),
    Q('Trong sơ đồ khối, các bước tuần tự được nối bằng?', ['Mũi tên đi xuống', 'Không nối', 'Vòng tròn', 'Đường cong'], 0, 'Mũi tên thể hiện thứ tự thực hiện.'),
    Q('Đặc điểm cấu trúc tuần tự?', ['Không xác định', 'Lặp lại', 'Phức tạp', 'Đơn giản, dễ hiểu, mỗi bước chỉ thực hiện 1 lần'], 3, 'Tuần tự là cấu trúc đơn giản nhất.'),
  ]),

  M(31, 'Cấu trúc rẽ nhánh (If)', [
    Q('Cấu trúc rẽ nhánh dùng khi?', ['Lặp lại', 'Cần lựa chọn giữa các trường hợp', 'Tuần tự', 'Không cần'], 1, 'Rẽ nhánh = lựa chọn theo điều kiện.'),
    Q('Cấu trúc rẽ nhánh đơn (If):?', ['Nếu điều kiện đúng thì làm việc A', 'Làm cả A và B cùng lúc', 'Lặp 10 lần', 'Tuần tự'], 0, 'If chỉ làm khi điều kiện đúng.'),
    Q('Cấu trúc rẽ nhánh đầy đủ (If-Else):?', ['Nếu điều kiện đúng thì bỏ qua', 'Chỉ làm A', 'Lặp lại điều kiện cho đến khi đúng', 'Nếu điều kiện đúng thì A, ngược lại thì B'], 3, 'If-Else có hai nhánh đúng và sai.'),
    Q('Trong sơ đồ khối, điều kiện vẽ bằng hình?', ['Hình ngôi sao', 'Hình tròn', 'Hình thoi (diamond)', 'Hình vuông'], 2, 'Hình thoi biểu diễn điều kiện rẽ nhánh.'),
    Q('Ví dụ rẽ nhánh: "Nếu trời mưa thì mang ô" thuộc loại?', ['Rẽ nhánh đơn (If)', 'Tuần tự', 'Cấu trúc lặp (For)', 'If-Else'], 0, 'Chỉ có "nếu mưa" → rẽ nhánh đơn.'),
  ]),

  M(32, 'Cấu trúc lặp (For/While)', [
    Q('Cấu trúc lặp dùng khi?', ['Rẽ nhánh', 'Cần kiểm tra một điều kiện', 'Cần làm một việc nhiều lần', 'Chỉ làm 1 lần'], 2, 'Lặp = làm nhiều lần.'),
    Q('Lặp với số lần xác định (For)?', ['Vô tận', 'Biết trước số lần lặp (vd: 10 lần)', 'Không biết trước', 'Một lần'], 1, 'For lặp với số lần biết trước.'),
    Q('Lặp với điều kiện (While)?', ['Lặp đến khi điều kiện sai', 'Lặp 1 lần', 'Lặp vô tận', 'Không lặp'], 0, 'While lặp đến khi điều kiện sai.'),
    Q('Ví dụ: "Tính tổng 1+2+...+100" dùng?', ['Tuần tự 100 dòng', 'Lặp For 100 lần', 'Rẽ nhánh If-Else', 'Rẽ nhánh'], 1, 'For 100 lần là gọn nhất.'),
    Q('Vòng lặp vô tận nguy hiểm vì?', ['Tốt cho máy', 'Không sao', 'Chạy nhanh hơn', 'Chương trình không dừng được'], 3, 'Vòng lặp vô tận làm chương trình treo.'),
  ]),

  M(33, 'Thực hành thuật toán đơn giản', [
    Q('Thuật toán tìm số lớn nhất trong 3 số a, b, c?', ['Cộng cả 3', 'So sánh từng cặp, lưu max', 'Chia cả 3', 'Nhân cả 3'], 1, 'So sánh từng cặp để tìm max.'),
    Q('Thuật toán đếm số chẵn từ 1 đến 100?', ['Tính tổng', 'Lặp 100 lần in', 'Lặp 1-100, kiểm tra chia hết cho 2', 'Chia 100 cho 2'], 2, 'Lặp + kiểm tra chia 2 dư 0.'),
    Q('Thuật toán kiểm tra số chẵn?', ['Nếu số chia hết cho 3 thì chẵn', 'Số bé là chẵn', 'Số lớn là chẵn', 'Nếu số chia hết cho 2 thì chẵn'], 3, 'Chia hết cho 2 = số chẵn.'),
    Q('Thuật toán sắp xếp dãy số tăng dần — đơn giản nhất?', ['Random', 'Đổi chỗ các cặp số sai vị trí (Bubble sort)', 'Chọn ngẫu nhiên rồi đảo dãy', 'Không cần thuật toán'], 1, 'Bubble sort là thuật toán sắp xếp đơn giản.'),
    Q('Để tính TB của n số, thuật toán cần?', ['Chỉ cộng', 'Chỉ chia', 'Tính tổng rồi chia cho n', 'Không tính được'], 2, 'TB = Tổng / n.'),
  ]),

  M(34, 'Thuật toán trong cuộc sống', [
    Q('Thuật toán nấu cơm gồm các bước?', ['Đợi chín → vo gạo → đổ nước', 'Bật nồi trước rồi đổ gạo', 'Vo gạo → đổ nước → bật nồi → đợi chín', 'Đổ nước trước khi có gạo'], 2, 'Vo gạo → đổ nước → nấu → chín.'),
    Q('Tại sao cần thuật toán?', ['Để giải quyết vấn đề một cách có hệ thống', 'Để khó hơn', 'Không cần thiết', 'Để mất thời gian'], 0, 'Thuật toán giúp giải quyết vấn đề hệ thống.'),
    Q('Khi viết thuật toán, em cần?', ['Viết dài dòng', 'Không cần xác định', 'Bừa bãi', 'Xác định đầu vào, đầu ra và các bước rõ ràng'], 3, 'Xác định Input, Output và các bước.'),
    Q('Học thuật toán giúp em?', ['Tệ hơn', 'Không có lợi', 'Tư duy logic, giải quyết vấn đề hệ thống', 'Lười suy nghĩ'], 2, 'Thuật toán rèn tư duy logic.'),
    Q('Sau khi có thuật toán, làm gì tiếp?', ['Lưu giữ thuật toán mà không cần code', 'Vứt đi', 'Viết chương trình (code) để máy tính thực thi', 'Đem đốt'], 2, 'Thuật toán → code → máy tính chạy.'),
  ]),

  M(35, 'Ôn tập tổng kết — Thi cuối năm', [
    Q('Internet là?', ['Phần mềm', 'Mạng diện rộng toàn cầu', 'LAN — mạng cục bộ trong toà nhà', 'Máy tính'], 1, 'Internet là mạng WAN toàn cầu.'),
    Q('Mật khẩu mạnh có?', ['Đúng họ tên đầy đủ của mình', '6 số', 'Chữ hoa/thường, số, ký tự đặc biệt, dài ≥8', 'Ngày sinh'], 2, 'Mật khẩu mạnh phức tạp và dài.'),
    Q('Hàm SUM trong Excel?', ['Tính TB', 'Tính tổng', 'Đếm số ô chứa số', 'Tìm max'], 1, 'SUM = tổng.'),
    Q('Hàm IF có cú pháp?', ['IF(điều kiện)', 'IF(điều kiện, đúng, sai)', 'IF(a, b)', 'IF(đúng, sai)'], 1, 'IF cần 3 tham số.'),
    Q('Cấu trúc lặp dùng khi?', ['Một lần', 'Không cần', 'Rẽ nhánh', 'Làm việc nhiều lần'], 3, 'Lặp = làm nhiều lần.'),
  ]),
];

export const S7TIN_SCENARIOS = indexBy(S7TIN_WEEKS);
