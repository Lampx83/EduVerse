// ============================================================
// Lớp 12 · TIN HỌC (KNTT — định hướng Tin học ứng dụng ICT) — 35 tuần
// HK1 (1–18): Cốt lõi — AI, Mạng, Đạo đức số, HTML/CSS, Hướng nghiệp
// HK2 (19–35): ICT — Kết nối thiết bị + Dự án xây website hoàn chỉnh
// ID prefix: "H12TIN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H12TIN', 'tin-hoc', n, title, qs, opts);

export const H12TIN_WEEKS = [
  // ──────────────── HK1 — Cốt lõi ────────────────
  M(1, 'Làm quen với Trí tuệ nhân tạo', [
    Q('Trí tuệ nhân tạo (AI) là?', ['Lĩnh vực mô phỏng trí tuệ con người cho máy móc/phần mềm', 'Một loại ngôn ngữ lập trình', 'Một loại CPU', 'Một mạng xã hội'], 0, 'AI = Artificial Intelligence.'),
    Q('Học máy (Machine Learning) là?', ['Học thuộc lòng', 'Nhánh của AI cho máy học từ dữ liệu mà không cần lập trình rõ tường minh', 'Một loại CPU', 'Game'], 1, 'ML là tập con của AI.'),
    Q('Học sâu (Deep Learning) dựa trên?', ['Mạng nơron nhân tạo nhiều lớp', 'Cây quyết định', 'Cờ vua', 'Hệ điều hành'], 0, 'Deep neural networks.'),
    Q('Ví dụ ứng dụng AI?', ['Chỉ máy tính cũ', 'Trợ lý ảo, nhận dạng ảnh-giọng nói, xe tự lái, gợi ý nội dung, ChatGPT', 'Bàn phím', 'Chuột'], 1, 'Ứng dụng rộng.'),
    Q('AI hẹp (Narrow AI) là?', ['AI làm được mọi việc như con người', 'AI chuyên biệt cho một nhiệm vụ cụ thể (đa số AI hiện nay)', 'AI siêu việt', 'AI giả'], 1, 'ANI là loại hiện hữu.'),
    Q('AI tổng quát (AGI) là?', ['AI hẹp', 'AI có khả năng tổng quát như con người - hiện chưa đạt được', 'AI cho mạng', 'AI cho điện thoại'], 1, 'AGI vẫn là mục tiêu nghiên cứu.'),
  ]),

  M(2, 'AI trong khoa học và đời sống', [
    Q('AI trong y tế giúp?', ['Thay bác sĩ hoàn toàn', 'Hỗ trợ chẩn đoán hình ảnh, phát hiện bệnh sớm, gợi ý phác đồ', 'Không có vai trò', 'Gây bệnh'], 1, 'AI hỗ trợ y tế.'),
    Q('AI trong giáo dục giúp?', ['Thay giáo viên hoàn toàn', 'Cá nhân hoá học tập, chấm bài tự động, gia sư ảo, dịch ngôn ngữ', 'Bỏ học', 'Không có vai trò'], 1, 'AI hỗ trợ GD.'),
    Q('Hạn chế/rủi ro của AI?', ['Không có', 'Lệ thuộc dữ liệu, sai lệch, thiên kiến, mất việc làm, vi phạm bản quyền-quyền riêng tư', 'Chỉ có lợi', 'Tự xoá'], 1, 'Nhiều rủi ro.'),
    Q('Khi dùng ChatGPT để học, cần?', ['Tin tuyệt đối', 'Kiểm chứng thông tin, không sao chép nguyên văn, hiểu bài thay vì làm hộ', 'Nộp y nguyên', 'Trả tiền không cần biết'], 1, 'Sử dụng có trách nhiệm.'),
    Q('Prompt cơ bản gồm?', ['Chỉ một câu hỏi mơ hồ', 'Vai trò + Ngữ cảnh + Yêu cầu cụ thể + Định dạng đầu ra', 'Một từ', 'Chỉ định dạng'], 1, 'Cấu trúc prompt tốt.'),
    Q('Để AI viết một bài giới thiệu trường, prompt nào TỐT nhất?', ['"Viết bài"', '"Bạn là một học sinh THPT. Hãy viết bài giới thiệu trường XYZ dài 200 từ, văn phong thân thiện, có 3 đoạn"', '"Trường"', '"Viết đi"'], 1, 'Prompt rõ ràng + đầy đủ.'),
  ]),

  M(3, 'Thiết bị mạng máy tính', [
    Q('Switch (bộ chuyển mạch) hoạt động ở tầng?', ['Tầng 1 (vật lí)', 'Tầng 2 (liên kết dữ liệu) — chuyển frame theo MAC', 'Tầng 3', 'Tầng 7'], 1, 'Layer 2.'),
    Q('Router (bộ định tuyến) hoạt động ở tầng?', ['Tầng 1', 'Tầng 3 (mạng) — định tuyến gói tin theo IP', 'Tầng 2', 'Tầng 7'], 1, 'Layer 3.'),
    Q('Hub khác Switch ở chỗ?', ['Không khác', 'Hub phát quảng bá tới mọi cổng (lạc hậu); Switch chỉ gửi đúng cổng đích', 'Hub thông minh hơn', 'Switch là hub mới'], 1, 'Hub lỗi thời.'),
    Q('Access Point (AP) dùng để?', ['Phát Wi-Fi cho thiết bị không dây kết nối vào mạng', 'Cấp điện', 'In ấn', 'Lưu trữ'], 0, 'Wireless AP.'),
    Q('Modem dùng để?', ['Chuyển đổi tín hiệu số ↔ tương tự, kết nối nhà mạng', 'Phát sóng FM', 'Đo nhiệt độ', 'Lưu file'], 0, 'MOdulator-DEModulator.'),
    Q('Cáp mạng phổ biến cho LAN?', ['Cáp đồng trục', 'Cáp xoắn đôi UTP (CAT5e, CAT6)', 'Dây điện', 'Cáp HDMI'], 1, 'Twisted pair.'),
  ]),

  M(4, 'Giao thức mạng và Internet', [
    Q('Mô hình giao thức Internet dùng?', ['OSI 7 tầng', 'TCP/IP (4 tầng)', 'IPX/SPX', 'AppleTalk'], 1, 'TCP/IP.'),
    Q('IP có chức năng?', ['Đánh địa chỉ và định tuyến gói tin trong mạng', 'Truyền tệp', 'In ấn', 'Lưu trữ'], 0, 'Internet Protocol.'),
    Q('TCP đảm bảo?', ['Truyền không tin cậy', 'Truyền tin cậy, có thứ tự, có kiểm soát lỗi', 'Truyền nhanh hơn UDP', 'Không kiểm tra lỗi'], 1, 'Reliable.'),
    Q('UDP có đặc điểm?', ['Tin cậy như TCP', 'Không tin cậy, không bắt tay, nhanh - thích hợp streaming, game online', 'Chậm hơn TCP', 'Không tồn tại'], 1, 'Connectionless.'),
    Q('HTTP là giao thức?', ['Truyền tệp', 'Truyền siêu văn bản — nền tảng World Wide Web', 'Gửi mail', 'Định tuyến'], 1, 'HyperText Transfer Protocol.'),
    Q('HTTPS khác HTTP ở chỗ?', ['Không khác', 'HTTPS mã hoá dữ liệu bằng SSL/TLS, an toàn hơn', 'HTTPS chậm hơn hẳn', 'HTTPS là cũ'], 1, 'Bảo mật.'),
  ]),

  M(5, 'Thực hành — Chia sẻ tài nguyên trong mạng LAN', [
    Q('Để chia sẻ thư mục trong Windows cần?', ['Tắt máy', 'Bật Network Discovery + File Sharing, đặt quyền chia sẻ thư mục', 'Mua phần mềm', 'Cài Linux'], 1, 'Network sharing.'),
    Q('Địa chỉ IP để truy cập máy khác trong LAN có dạng?', ['8.8.8.8', '192.168.x.x (IP riêng)', '127.0.0.1', '0.0.0.0'], 1, 'Private IP.'),
    Q('Để mở thư mục chia sẻ từ máy khác, dùng?', ['Gõ \\\\ip-may\\ten-share trong File Explorer', 'Đập máy', 'Tắt mạng', 'Mở Word'], 0, 'UNC path.'),
    Q('Quyền chia sẻ thường có?', ['Chỉ Read', 'Read, Read/Write, Full Control', 'Chỉ Write', 'Không có quyền'], 1, '3 mức quyền.'),
    Q('Máy in dùng chung trong LAN cần?', ['Mỗi máy 1 máy in riêng', 'Cài máy in mạng (Network Printer) hoặc chia sẻ từ máy chủ', 'Mua bản quyền giấy', 'Tắt Wi-Fi'], 1, 'Network printer.'),
    Q('NAS (Network Attached Storage) là?', ['Modem', 'Thiết bị lưu trữ kết nối mạng, chia sẻ dữ liệu nhiều người', 'Bàn phím', 'Loa'], 1, 'Shared storage.'),
  ]),

  M(6, 'Giao tiếp ứng xử trong môi trường số', [
    Q('Quy tắc ứng xử trên không gian mạng yêu cầu?', ['Tuỳ tiện', 'Tôn trọng, tuân thủ pháp luật, lành mạnh, an toàn, trách nhiệm', 'Văng tục', 'Bịa đặt'], 1, 'Bộ Quy tắc 874/QĐ-BTTTT.'),
    Q('Hành vi nào VI PHẠM Luật An ninh mạng?', ['Đăng bài học tập', 'Tuyên truyền chống Nhà nước, xuyên tạc, kích động, lừa đảo trên mạng', 'Tham gia diễn đàn học thuật', 'Chia sẻ bài hợp pháp'], 1, 'Vi phạm.'),
    Q('Bắt nạt qua mạng (cyberbullying) là?', ['Vô hại', 'Hành vi đe doạ, sỉ nhục, quấy rối qua mạng, có thể bị xử lí hành chính/hình sự', 'Chuyện đùa', 'Hợp pháp'], 1, 'Vi phạm pháp luật.'),
    Q('Quyền tác giả trên Internet bảo vệ?', ['Không cần bảo vệ', 'Tác phẩm văn học, nghệ thuật, phần mềm, ảnh, video do tác giả tạo ra', 'Chỉ sách giấy', 'Chỉ phim'], 1, 'Quyền tác giả số.'),
    Q('Khi muốn dùng ảnh trên mạng cho bài thuyết trình cần?', ['Dùng tự do', 'Kiểm tra giấy phép (CC, public domain) và ghi nguồn', 'Xoá watermark', 'Bán lại'], 1, 'Tôn trọng bản quyền.'),
    Q('Cách bảo vệ bản thân trên mạng?', ['Chia sẻ mọi thông tin', 'Đặt mật khẩu mạnh, bật 2FA, không click link lạ, không chia sẻ thông tin nhạy cảm', 'Tin mọi người', 'Mở khoá tài khoản'], 1, 'An toàn số.'),
  ]),

  M(7, 'HTML — Cấu trúc cơ bản của trang web', [
    Q('Trang HTML cơ bản phải có?', ['Chỉ thẻ <html>', 'Cặp thẻ <!DOCTYPE html>, <html>, <head>, <body>', 'Chỉ <body>', 'Chỉ <head>'], 1, 'Cấu trúc HTML5.'),
    Q('Thẻ <title> đặt ở đâu?', ['<body>', '<head>', 'Bất kỳ', 'Ngoài <html>'], 1, 'Trong head.'),
    Q('Thẻ <meta charset="UTF-8"> dùng để?', ['Định màu chữ', 'Khai báo bảng mã ký tự — hiển thị tiếng Việt đúng', 'Vẽ ảnh', 'Định kiểu CSS'], 1, 'Encoding.'),
    Q('Thẻ <h1> đến <h6> là?', ['Định dạng đoạn', 'Tiêu đề từ lớn (h1) đến nhỏ (h6)', 'Liên kết', 'Bảng'], 1, 'Heading.'),
    Q('Thẻ tạo đoạn văn?', ['<div>', '<p>', '<span>', '<br>'], 1, '<p> = paragraph.'),
    Q('Thẻ ngắt dòng?', ['<br>', '<p>', '<hr>', '<div>'], 0, '<br> = line break.'),
  ]),

  M(8, 'HTML — Định dạng văn bản', [
    Q('Thẻ in đậm?', ['<i>', '<b> hoặc <strong>', '<u>', '<em>'], 1, '<strong> in đậm ngữ nghĩa.'),
    Q('Thẻ in nghiêng?', ['<b>', '<i> hoặc <em>', '<u>', '<s>'], 1, '<em>.'),
    Q('Thẻ gạch chân?', ['<u>', '<b>', '<i>', '<s>'], 0, '<u> underline.'),
    Q('Thẻ gạch ngang?', ['<s>', '<u>', '<b>', '<i>'], 0, '<s> strikethrough.'),
    Q('Thẻ chỉ số trên?', ['<sub>', '<sup>', '<b>', '<i>'], 1, '<sup> superscript: x².'),
    Q('Thẻ chỉ số dưới?', ['<sub>', '<sup>', '<u>', '<b>'], 0, '<sub> subscript: H₂O.'),
  ]),

  M(9, 'HTML — Danh sách', [
    Q('Danh sách không thứ tự (chấm tròn)?', ['<ol>', '<ul>', '<dl>', '<list>'], 1, '<ul> = unordered list.'),
    Q('Danh sách có thứ tự (1,2,3)?', ['<ul>', '<ol>', '<dl>', '<list>'], 1, '<ol> = ordered list.'),
    Q('Mỗi mục trong danh sách dùng thẻ?', ['<item>', '<li>', '<list>', '<p>'], 1, '<li>.'),
    Q('Danh sách định nghĩa dùng?', ['<ol>', '<dl> với <dt> và <dd>', '<ul>', '<table>'], 1, 'Definition list.'),
    Q('Để đổi số đếm danh sách thành chữ cái (a,b,c) dùng?', ['type="A" cho <ol>', '<li type>', '<ul type=A>', 'CSS list-style-type:lower-alpha'], 3, 'Dùng CSS hiện đại.'),
    Q('Danh sách có thể lồng nhau không?', ['Không', 'Có — <ul>/<ol> lồng nhiều cấp', 'Chỉ 1 cấp', 'Chỉ 2 cấp'], 1, 'Nested lists.'),
  ]),

  M(10, 'HTML — Bảng', [
    Q('Thẻ tạo bảng?', ['<grid>', '<table>', '<box>', '<list>'], 1, '<table>.'),
    Q('Hàng trong bảng dùng?', ['<row>', '<tr>', '<td>', '<th>'], 1, '<tr> = table row.'),
    Q('Ô dữ liệu dùng?', ['<td>', '<tr>', '<th>', '<cell>'], 0, '<td> = table data.'),
    Q('Ô tiêu đề (in đậm, căn giữa) dùng?', ['<td>', '<th>', '<tr>', '<header>'], 1, '<th> = table header.'),
    Q('Để ô kéo dài qua 2 cột dùng?', ['rowspan=2', 'colspan=2', 'span=2', 'width=2'], 1, 'colspan.'),
    Q('Để ô kéo dài qua 2 hàng dùng?', ['rowspan=2', 'colspan=2', 'span=2', 'height=2'], 0, 'rowspan.'),
  ]),

  M(11, 'HTML — Liên kết và đa phương tiện', [
    Q('Thẻ tạo liên kết?', ['<link>', '<a href="url">text</a>', '<href>', '<url>'], 1, '<a> = anchor.'),
    Q('Để liên kết mở trong tab mới?', ['target="_blank"', 'target="new"', 'target="other"', 'rel="open"'], 0, 'target="_blank".'),
    Q('Thẻ chèn ảnh?', ['<picture src="">', '<img src="" alt="">', '<image>', '<photo>'], 1, '<img> self-closing.'),
    Q('Thuộc tính alt của <img> dùng để?', ['Hiển thị ảnh', 'Văn bản thay thế khi ảnh không tải được, hỗ trợ accessibility', 'Tên file', 'Bản quyền'], 1, 'Alt text.'),
    Q('Thẻ chèn video?', ['<media>', '<video src="" controls></video>', '<film>', '<movie>'], 1, '<video>.'),
    Q('Thẻ chèn âm thanh?', ['<sound>', '<audio src="" controls></audio>', '<music>', '<voice>'], 1, '<audio>.'),
  ]),

  M(12, 'HTML — Biểu mẫu (form)', [
    Q('Thẻ form?', ['<form action="" method="">', '<input>', '<button>', '<submit>'], 0, '<form>.'),
    Q('Ô nhập văn bản một dòng?', ['<input type="text">', '<textarea>', '<input type="line">', '<text>'], 0, '<input type="text">.'),
    Q('Ô nhập văn bản nhiều dòng?', ['<input type="textarea">', '<textarea></textarea>', '<input type="multi">', '<area>'], 1, '<textarea>.'),
    Q('Ô nhập mật khẩu?', ['<input type="password">', '<input type="hidden">', '<password>', '<input type="secret">'], 0, 'type="password".'),
    Q('Nút gửi form?', ['<button type="reset">', '<button type="submit"> hoặc <input type="submit">', '<send>', '<go>'], 1, 'Submit.'),
    Q('Để chọn nhiều giá trị dùng?', ['<input type="text">', '<input type="checkbox">', '<input type="radio">', '<select>'], 1, 'Checkbox cho phép chọn nhiều.'),
  ]),

  M(13, 'CSS — Cơ bản', [
    Q('CSS dùng để?', ['Định cấu trúc trang', 'Định dạng (style) trình bày trang HTML', 'Lập trình logic', 'Lưu dữ liệu'], 1, 'Cascading Style Sheets.'),
    Q('Cú pháp CSS?', ['property: selector;', 'selector { property: value; }', 'value: property;', 'tag = style;'], 1, 'selector { prop: value; }.'),
    Q('CSS gắn vào HTML qua?', ['Chỉ inline', 'Inline (style=""), internal (<style>), external (<link rel="stylesheet">)', 'Chỉ external', 'Chỉ internal'], 1, '3 cách.'),
    Q('Bộ chọn theo thẻ HTML?', ['p { ... }', '.p { ... }', '#p { ... }', '*p { ... }'], 0, 'Type selector.'),
    Q('Bộ chọn theo class?', ['.ten-class { ... }', '#ten-class { ... }', 'ten-class { ... }', '*ten-class { ... }'], 0, 'Class selector dùng dấu chấm.'),
    Q('Bộ chọn theo id?', ['.ten-id', '#ten-id', '*ten-id', 'ten-id'], 1, 'ID selector dùng #.'),
  ]),

  M(14, 'CSS — Định dạng văn bản, màu, nền', [
    Q('Thuộc tính đổi màu chữ?', ['background-color', 'color', 'font-color', 'text-fill'], 1, 'color: red;.'),
    Q('Thuộc tính đổi màu nền?', ['color', 'background-color', 'fill', 'border-color'], 1, 'background-color.'),
    Q('Cỡ chữ?', ['size', 'font-size', 'text-size', 'char-size'], 1, 'font-size.'),
    Q('Họ font?', ['font-name', 'font-family', 'font-type', 'family'], 1, 'font-family.'),
    Q('Căn giữa văn bản?', ['text-align: center;', 'align: middle;', 'center: true;', 'text-center;'], 0, 'text-align.'),
    Q('In đậm bằng CSS?', ['font-weight: bold;', 'bold: true;', 'text-bold: yes;', 'strong: 1;'], 0, 'font-weight: bold/700.'),
  ]),

  M(15, 'CSS — Khung, viền và độ ưu tiên bộ chọn', [
    Q('Mô hình hộp (box model) trong CSS gồm?', ['Chỉ content', 'Content + Padding + Border + Margin', 'Chỉ border', 'Chỉ margin'], 1, '4 lớp.'),
    Q('Thuộc tính khoảng cách bên trong (giữa nội dung và viền)?', ['margin', 'padding', 'border', 'gap'], 1, 'padding.'),
    Q('Thuộc tính khoảng cách bên ngoài (ngoài viền)?', ['margin', 'padding', 'border', 'spacing'], 0, 'margin.'),
    Q('Đặt viền 1px màu đen?', ['border: 1px solid black;', 'edge: 1px black;', 'frame: 1 black;', 'line: 1 black;'], 0, 'border shorthand.'),
    Q('Độ ưu tiên cao nhất (trong cùng file CSS)?', ['Bộ chọn thẻ', 'Bộ chọn id', 'Bộ chọn class', 'Bộ chọn *'], 1, '#id (1,0,0,0) cao hơn class (0,1,0,0) và tag (0,0,1,0). Inline style và !important cao hơn nữa.'),
    Q('Khi nhiều bộ chọn cùng độ ưu tiên áp dụng, áp dụng theo?', ['Bộ chọn xuất hiện trước', 'Quy tắc xuất hiện sau (cascade)', 'Ngẫu nhiên', 'Bộ chọn ngắn nhất'], 1, 'Last one wins.'),
  ]),

  M(16, 'Hướng nghiệp ngành CNTT', [
    Q('Nhóm ngành CNTT phổ biến gồm?', ['Chỉ lập trình', 'Khoa học máy tính, Công nghệ phần mềm, Hệ thống thông tin, Mạng-An toàn TT, Khoa học dữ liệu, AI', 'Chỉ mạng', 'Chỉ AI'], 1, 'Nhiều nhánh.'),
    Q('Lập trình viên (Developer) làm việc gì?', ['Bán phần cứng', 'Phân tích yêu cầu, viết mã, kiểm thử, bảo trì phần mềm', 'Lắp ráp linh kiện', 'Giảng dạy'], 1, 'Software dev.'),
    Q('Quản trị mạng (Network Admin) làm?', ['Lập trình game', 'Thiết kế, vận hành, bảo trì hệ thống mạng và an ninh mạng', 'Marketing', 'Bán hàng'], 1, 'Network admin.'),
    Q('Chuyên gia dữ liệu (Data Scientist) cần?', ['Chỉ Word', 'Toán, thống kê, Python/R, học máy, kĩ năng phân tích dữ liệu', 'Chỉ tiếng Anh', 'Chỉ Excel'], 1, 'Đa kĩ năng.'),
    Q('Kĩ sư AI làm?', ['Chỉ chơi AI', 'Xây dựng-huấn luyện mô hình ML/DL, triển khai vào sản phẩm', 'Bán AI', 'Sửa AI'], 1, 'AI Engineer.'),
    Q('Để theo ngành CNTT, học sinh nên?', ['Bỏ Toán', 'Chú trọng Toán-Lí-Anh-Tin học, tham gia CLB, làm dự án, học thêm trực tuyến', 'Chỉ học Văn', 'Không cần học'], 1, 'Chuẩn bị toàn diện.'),
  ]),

  M(17, 'Ôn tập HK1', [
    Q('AI hẹp khác AI tổng quát ở chỗ?', ['Không khác', 'AI hẹp chuyên một việc; AI tổng quát (AGI) làm được mọi việc như con người - chưa đạt', 'AI hẹp tốt hơn', 'AGI lạc hậu'], 1, 'ANI vs AGI.'),
    Q('TCP đảm bảo?', ['Truyền nhanh không cần xác nhận', 'Truyền tin cậy, có thứ tự, kiểm soát lỗi', 'Không kiểm tra', 'Không có đặc điểm'], 1, 'Reliable.'),
    Q('HTML thẻ chèn ảnh?', ['<image>', '<img>', '<picture>', '<photo>'], 1, '<img>.'),
    Q('CSS bộ chọn class dùng?', ['#', '.', '*', '$'], 1, 'Class = dấu chấm.'),
    Q('Box model gồm 4 lớp?', ['Border-Margin-Content', 'Content-Padding-Border-Margin', 'Margin-Border-Padding', 'Padding-Margin'], 1, '4 lớp đầy đủ.'),
    Q('Độ ưu tiên CSS từ cao xuống thấp (giữa các bộ chọn)?', ['tag > class > id', '!important > inline > id > class > tag', 'id < class < tag', 'Ngẫu nhiên'], 1, 'CSS specificity.'),
  ]),

  M(18, 'Thi học kỳ I', [
    Q('Prompt tốt cho AI gồm?', ['Một câu hỏi mơ hồ', 'Vai trò + Ngữ cảnh + Yêu cầu + Định dạng đầu ra', 'Một từ', 'Câu lệnh ngắn'], 1, 'Prompt engineering.'),
    Q('Router hoạt động ở tầng?', ['Tầng 2', 'Tầng 3 (Network) — định tuyến IP', 'Tầng 1', 'Tầng 7'], 1, 'Layer 3.'),
    Q('HTTPS dùng để?', ['Mã hoá dữ liệu giữa trình duyệt và server bằng SSL/TLS', 'Tăng tốc', 'Lưu cache', 'Phát Wi-Fi'], 0, 'Bảo mật.'),
    Q('Để tạo bảng HTML có 3 cột tiêu đề + 2 hàng dữ liệu, KHÔNG dùng thẻ?', ['<table>', '<tr>, <th>, <td>', '<div>', 'Cả ba thẻ trên đều dùng được'], 2, '<div> không phải thẻ bảng.'),
    Q('CSS đặt màu nền vàng cho thẻ <body>?', ['body { background-color: yellow; }', '.body { color: yellow; }', '#body { bg: yellow; }', 'body: yellow;'], 0, 'Đúng cú pháp.'),
    Q('Hành vi bắt nạt qua mạng bị xử lí?', ['Không sao', 'Bị xử lí theo Luật An ninh mạng, có thể phạt hành chính hoặc hình sự', 'Chỉ nhắc nhở', 'Khen thưởng'], 1, 'Vi phạm pháp luật.'),
  ]),

  // ──────────────── HK2 — Tin học ứng dụng ICT ────────────────
  M(19, 'Thực hành — Kết nối thiết bị số', [
    Q('Để kết nối điện thoại với máy tính, có thể dùng?', ['Chỉ cáp USB', 'Cáp USB, Bluetooth, Wi-Fi (chia sẻ file qua mạng cục bộ)', 'Chỉ Bluetooth', 'Chỉ Wi-Fi'], 1, 'Nhiều cách.'),
    Q('Để truyền file ảnh nhanh từ điện thoại sang máy tính, cách phổ biến?', ['Gửi qua mail từng ảnh', 'Cáp USB hoặc dùng dịch vụ đồng bộ đám mây (Google Photos, OneDrive)', 'Chụp lại màn hình', 'In ra giấy'], 1, 'Hiệu quả.'),
    Q('In ấn từ điện thoại sang máy in?', ['Không thể', 'Wi-Fi Direct, Google Cloud Print, AirPrint (Apple), in qua mạng', 'Chỉ qua máy tính', 'Phải copy thủ công'], 1, 'Mobile printing.'),
    Q('Kết nối máy tính với TV để trình chiếu?', ['Chỉ cáp HDMI', 'Cáp HDMI, hoặc không dây qua Chromecast/Miracast/AirPlay', 'Chỉ AirPlay', 'Không thể'], 1, 'Có/không dây.'),
    Q('Khi gặp lỗi không phát hiện thiết bị USB cần?', ['Đập máy', 'Kiểm tra cáp, cổng, driver, thử cổng khác', 'Format máy', 'Mua điện thoại mới'], 1, 'Khắc phục sự cố.'),
    Q('Quản lí thiết bị Bluetooth cần?', ['Bật chế độ máy bay', 'Bật Bluetooth, pair (ghép đôi) bằng mã PIN', 'Tắt nguồn', 'Mở Wi-Fi'], 1, 'Pairing.'),
  ]),

  M(20, 'Dự án website — Lập kế hoạch và cấu trúc', [
    Q('Bước đầu khi xây dựng website?', ['Viết mã ngay', 'Xác định mục tiêu, đối tượng, nội dung, sơ đồ trang (sitemap)', 'Mua domain', 'Mua hosting'], 1, 'Planning first.'),
    Q('Sitemap là?', ['Bản đồ Google', 'Sơ đồ cấu trúc trang web — danh sách trang và liên kết giữa chúng', 'Bản đồ đường đi', 'Tên miền'], 1, 'Site structure.'),
    Q('Wireframe là?', ['Mã nguồn', 'Bản phác thảo bố cục giao diện chưa có chi tiết thẩm mỹ', 'Tên miền', 'Database'], 1, 'Low-fidelity prototype.'),
    Q('Một website thường có tối thiểu các trang?', ['Trang chủ, Giới thiệu, Liên hệ', 'Chỉ trang chủ', 'Chỉ liên hệ', 'Chỉ giới thiệu'], 0, 'Tối thiểu 3 trang cơ bản.'),
    Q('Tên miền (domain) là?', ['Tên thư mục', 'Địa chỉ web dễ nhớ, ánh xạ tới địa chỉ IP server', 'Tên file HTML', 'Mật khẩu'], 1, 'Domain name.'),
    Q('Hosting là?', ['Tên miền', 'Dịch vụ lưu trữ tệp web và phục vụ qua Internet', 'Phần mềm soạn thảo', 'Trình duyệt'], 1, 'Web hosting.'),
  ]),

  M(21, 'Dự án — Soạn nội dung HTML cho trang chủ', [
    Q('Tệp trang chủ thường tên?', ['main.html', 'index.html (đa số server mặc định)', 'home.html', 'start.html'], 1, 'index.html.'),
    Q('Để có tiêu đề trang hiển thị trên tab trình duyệt dùng?', ['<h1>', '<title>', '<header>', '<head>'], 1, '<title> trong <head>.'),
    Q('Đặt favicon (biểu tượng tab)?', ['<link rel="icon" href="favicon.ico">', '<favicon>', '<icon>', '<img rel="favicon">'], 0, '<link rel="icon">.'),
    Q('Thẻ ngữ nghĩa cho phần đầu trang?', ['<header>', '<head>', '<top>', '<begin>'], 0, '<header> ngữ nghĩa.'),
    Q('Thẻ ngữ nghĩa cho phần điều hướng?', ['<menu>', '<nav>', '<navigation>', '<links>'], 1, '<nav>.'),
    Q('Thẻ ngữ nghĩa cho phần nội dung chính?', ['<main>', '<content>', '<body-main>', '<center>'], 0, '<main>.'),
  ]),

  M(22, 'Dự án — Phần đầu trang (header) và menu', [
    Q('Menu ngang thường dùng cấu trúc?', ['Bảng', '<nav> chứa <ul>, các <li><a>', 'Chỉ <a>', '<form>'], 1, 'List of links.'),
    Q('Để menu nằm ngang dùng CSS?', ['display: block;', 'display: flex; (hoặc inline-block, hoặc float)', 'display: none;', 'visibility: hidden;'], 1, 'Flexbox phổ biến.'),
    Q('Đặt logo trong header?', ['Dùng <img> trong <header>, có thể bọc bởi <a href="index.html">', 'Vẽ trên giấy', 'Chỉ chữ', 'Không cần'], 0, 'Logo + link về trang chủ.'),
    Q('Thuộc tính CSS cho khoảng cách giữa các mục menu?', ['gap (với flex) hoặc margin/padding của <li>', 'space', 'distance', 'between'], 0, 'gap/margin.'),
    Q('Khi rê chuột vào liên kết menu thường đổi màu, dùng?', ['a:hover { ... }', 'a:on { ... }', 'a.hover { ... }', '#hover a { ... }'], 0, 'Pseudo-class :hover.'),
    Q('Để menu responsive trên mobile, kĩ thuật phổ biến?', ['Không cần', 'Hamburger menu + media query CSS', 'Cấm xem mobile', 'Phóng to'], 1, 'Responsive design.'),
  ]),

  M(23, 'Dự án — Thân trang và chân trang', [
    Q('Thẻ ngữ nghĩa cho một nhóm nội dung độc lập?', ['<article>', '<section>', 'Cả hai tuỳ ngữ cảnh (article cho bài độc lập, section cho nhóm chủ đề)', '<div>'], 2, 'Cả hai dùng được tuỳ ngữ cảnh.'),
    Q('Thẻ ngữ nghĩa cho thanh bên?', ['<aside>', '<side>', '<bar>', '<column>'], 0, '<aside>.'),
    Q('Thẻ ngữ nghĩa cho chân trang?', ['<bottom>', '<footer>', '<end>', '<foot>'], 1, '<footer>.'),
    Q('Footer thường chứa?', ['Tiêu đề trang', 'Bản quyền, liên hệ, liên kết phụ, mạng xã hội', 'Menu chính', 'Logo to'], 1, 'Footer nội dung.'),
    Q('Để chia 2 cột nội dung trên desktop dùng?', ['CSS Flexbox hoặc Grid', 'Bảng <table>', 'Khung iframe', '<br><br>'], 0, 'Flex/Grid hiện đại.'),
    Q('CSS Grid khác Flexbox ở chỗ?', ['Không khác', 'Grid bố cục 2 chiều (hàng + cột); Flex bố cục 1 chiều', 'Grid 1 chiều', 'Flex 2 chiều'], 1, '2D vs 1D.'),
  ]),

  M(24, 'Dự án — Liên kết và đa phương tiện', [
    Q('Liên kết nội bộ trong website?', ['<a href="https://example.com">', '<a href="about.html"> hoặc href="#section-id"', 'Chỉ liên kết ngoài', 'Không dùng được'], 1, 'Relative path / anchor.'),
    Q('Để cuộn mượt khi nhấn liên kết # dùng CSS?', ['html { scroll-behavior: smooth; }', 'a { smooth: true; }', 'body { scroll: true; }', 'Không thể'], 0, 'CSS hiện đại.'),
    Q('Chèn video YouTube?', ['<video src=youtube>', '<iframe src="https://www.youtube.com/embed/ID"></iframe>', '<embed>', '<youtube>'], 1, 'Embed iframe.'),
    Q('Ảnh nền cho thẻ?', ['background-image: url("anh.jpg");', 'image: url("anh.jpg");', 'bg: anh.jpg;', 'src: anh.jpg;'], 0, 'CSS background-image.'),
    Q('Ảnh responsive (co dãn theo khung) CSS?', ['img { width: 100%; height: auto; }', 'img { size: 100%; }', 'img.responsive {}', 'img.fixed {}'], 0, 'Fluid image.'),
    Q('Để ảnh tải nhanh trên mobile dùng?', ['Ảnh nguyên dung lượng lớn', 'Nén ảnh, dùng định dạng WebP, srcset chọn ảnh theo thiết bị', 'Tăng kích thước', 'Bỏ alt'], 1, 'Image optimization.'),
  ]),

  M(25, 'Dự án — Biểu mẫu liên hệ', [
    Q('Biểu mẫu liên hệ tối thiểu cần?', ['Chỉ nút gửi', 'Họ tên, email, nội dung, nút gửi', 'Chỉ email', 'Chỉ tên'], 1, 'Tối thiểu.'),
    Q('Để kiểm tra email hợp lệ trong HTML5 dùng?', ['<input type="email">', '<input type="text">', '<input type="mail">', 'JavaScript bắt buộc'], 0, 'Validation HTML5.'),
    Q('Để trường bắt buộc nhập?', ['required', 'must', 'need', 'mustfill'], 0, 'Thuộc tính required.'),
    Q('Để giới hạn độ dài tối đa?', ['maxlength="100"', 'max="100"', 'limit="100"', 'size="100"'], 0, 'maxlength.'),
    Q('Để gợi ý nội dung khi ô trống dùng?', ['placeholder', 'hint', 'tip', 'value'], 0, 'placeholder.'),
    Q('Sau khi nhấn Gửi, dữ liệu form thường?', ['Bay mất', 'Gửi đến server xử lí theo URL action và phương thức (GET/POST)', 'Lưu cục bộ', 'In ra giấy'], 1, 'Form submission.'),
  ]),

  M(26, 'Dự án — Định dạng nâng cao bằng CSS', [
    Q('Bo góc?', ['border-radius: 8px;', 'corner: 8px;', 'round: 8px;', 'arc: 8px;'], 0, 'border-radius.'),
    Q('Đổ bóng hộp?', ['shadow: 5px;', 'box-shadow: 0 2px 8px rgba(0,0,0,0.2);', 'drop: 2px;', 'effect: shadow;'], 1, 'box-shadow.'),
    Q('Gradient nền?', ['background: linear-gradient(45deg, red, blue);', 'background: gradient(red,blue);', 'bg: red→blue;', 'color: gradient;'], 0, 'linear-gradient.'),
    Q('Hoạt ảnh chuyển đổi mượt khi hover?', ['transition: all .3s ease;', 'animate: hover;', 'smooth: true;', 'effect: 0.3s;'], 0, 'transition.'),
    Q('Đơn vị tương đối phổ biến cho cỡ chữ?', ['rem, em', 'cm', 'inch', 'mm'], 0, 'Đơn vị responsive.'),
    Q('Media query cho mobile (≤768px)?', ['@media (max-width: 768px) { ... }', '@if (mobile) { ... }', '@small { ... }', '#mobile { ... }'], 0, 'Media query.'),
  ]),

  M(27, 'Dự án — Tổ chức tệp tin và đường dẫn', [
    Q('Cấu trúc thư mục dự án web khuyến nghị?', ['Tất cả 1 file', 'Tách thư mục: css/, js/, images/, pages/ + index.html ở gốc', 'Mỗi file 1 thư mục', 'Không cần thư mục'], 1, 'Project structure.'),
    Q('Đường dẫn tương đối từ pages/about.html đến css/style.css?', ['../css/style.css', 'css/style.css', '/css/style.css', '//css/style.css'], 0, '../ lùi 1 cấp.'),
    Q('Đường dẫn tuyệt đối bắt đầu bằng?', ['/css/style.css (từ gốc website) hoặc URL đầy đủ http://...', '../', './', 'tên-file'], 0, 'Absolute path.'),
    Q('Để liên kết hoạt động khi đẩy lên host, KHÔNG nên?', ['Dùng đường dẫn tương đối', 'Dùng đường dẫn tuyệt đối tới ổ C: máy mình', 'Dùng /url-từ-gốc', 'Dùng href hợp lệ'], 1, 'Đường dẫn ổ đĩa cục bộ không chạy được trên server.'),
    Q('Tệp CSS chung nên đặt ở?', ['Mỗi trang một file riêng', 'Một file dùng chung (vd css/style.css) + <link> trong mỗi HTML', 'Trong <head> mỗi trang riêng biệt khác nhau', 'Trong JS'], 1, 'DRY - một nguồn.'),
    Q('Đặt tên file/folder web nên?', ['Có dấu, dấu cách', 'Không dấu, không dấu cách, dùng chữ thường, gạch nối', 'Viết hoa toàn bộ', 'Tuỳ ý'], 1, 'Web-safe naming.'),
  ]),

  M(28, 'Dự án — Tích hợp JavaScript cơ bản', [
    Q('JavaScript dùng để?', ['Định cấu trúc', 'Thêm tương tác cho trang web (xử lí sự kiện, thay đổi DOM)', 'Chỉ tạo style', 'Lưu file'], 1, 'JS = behavior.'),
    Q('Gắn file JS bên ngoài?', ['<script src="script.js"></script>', '<js src="">', '<link rel="script">', '<style src="">'], 0, '<script src>.'),
    Q('Hiển thị hộp thoại?', ['alert("Hello")', 'print("Hello")', 'echo("Hello")', 'show("Hello")'], 0, 'alert().'),
    Q('Lấy phần tử theo id trong DOM?', ['document.getElementById("ten")', 'document.getClass("ten")', 'document.find("ten")', 'window.id("ten")'], 0, 'getElementById.'),
    Q('Gắn sự kiện click cho nút?', ['button.onclick = function() {...}', 'button.click()', 'button:click', 'click button'], 0, 'Event handler.'),
    Q('Lưu giá trị trong trình duyệt (giữa các lần tải)?', ['Không thể', 'localStorage hoặc sessionStorage', 'CPU', 'RAM'], 1, 'Web Storage.'),
  ]),

  M(29, 'Dự án — Kiểm thử và sửa lỗi', [
    Q('Để kiểm tra giao diện trên nhiều thiết bị dùng?', ['Chỉ máy mình', 'Trình duyệt DevTools (responsive mode), test trên thiết bị thật', 'Không cần kiểm', 'In ra giấy'], 1, 'Cross-device testing.'),
    Q('Khi gặp lỗi JavaScript, mở?', ['Word', 'Console trong DevTools (F12) để xem lỗi', 'Excel', 'Notepad'], 1, 'F12 Console.'),
    Q('HTML validator giúp?', ['Tăng tốc', 'Kiểm tra cú pháp HTML đúng chuẩn W3C', 'Đổi tên file', 'Cài đặt'], 1, 'W3C validator.'),
    Q('Accessibility (khả năng tiếp cận) cần?', ['Bỏ qua', 'Có alt cho ảnh, contrast màu đủ, label cho input, dùng landmark roles', 'Chỉ ảnh đẹp', 'Không cần'], 1, 'A11y.'),
    Q('Tối ưu tốc độ tải trang KHÔNG bằng?', ['Nén ảnh', 'Gộp file CSS/JS', 'Tải nhiều ảnh độ phân giải cao không cần thiết', 'Bật cache'], 2, 'Ảnh nặng làm chậm.'),
    Q('SEO cơ bản cần?', ['Bỏ qua', 'Tiêu đề <title>, mô tả <meta description>, heading <h1>-<h6> rõ ràng, URL ngắn gọn', 'Chỉ ảnh đẹp', 'Chỉ nhiều quảng cáo'], 1, 'On-page SEO.'),
  ]),

  M(30, 'Dự án — Xuất bản website', [
    Q('Để website có thể truy cập trên Internet cần?', ['Chỉ lưu trên máy', 'Tên miền + Hosting (hoặc dịch vụ tĩnh như GitHub Pages, Netlify, Vercel)', 'Chỉ tên miền', 'Chỉ hosting'], 1, '2 thành phần.'),
    Q('GitHub Pages là?', ['Một game', 'Dịch vụ hosting website tĩnh MIỄN PHÍ từ GitHub', 'Mạng xã hội', 'Email'], 1, 'Static hosting free.'),
    Q('Để đẩy code lên GitHub dùng?', ['Email', 'Git: add, commit, push', 'Word', 'Tin nhắn'], 1, 'Git commands.'),
    Q('Để cập nhật website đã đẩy lên?', ['Phải tạo mới', 'Chỉnh sửa code → commit → push, GitHub Pages tự build', 'Không sửa được', 'Xoá tài khoản'], 1, 'CI tự động.'),
    Q('Tên miền .vn của Việt Nam đăng ký tại?', ['Bộ NN', 'Trung tâm Internet Việt Nam (VNNIC) qua nhà đăng ký', 'Tự nhận', 'GitHub'], 1, 'VNNIC.'),
    Q('HTTPS cho website cá nhân lấy chứng chỉ miễn phí từ?', ['Microsoft', 'Let\'s Encrypt', 'Google', 'Mua đắt'], 1, 'Let\'s Encrypt.'),
  ]),

  M(31, 'Dự án — Trải nghiệm người dùng (UX) và an toàn', [
    Q('Trải nghiệm người dùng (UX) là?', ['Cảm xúc người dùng khi tương tác với sản phẩm', 'Mã nguồn', 'Phần cứng', 'Chỉ giao diện'], 0, 'User Experience.'),
    Q('Thiết kế hướng người dùng đặt?', ['Người dùng làm trung tâm', 'Lập trình viên làm trung tâm', 'Doanh nghiệp làm trung tâm', 'Không ai'], 0, 'User-centered design.'),
    Q('Quyền riêng tư của người dùng web cần?', ['Bỏ qua', 'Thông báo cookie, không thu thập trái phép, mã hoá dữ liệu nhạy cảm', 'Bán dữ liệu', 'Theo dõi mọi nơi'], 1, 'Privacy by design.'),
    Q('Tấn công XSS là?', ['Chèn mã JavaScript độc vào trang web hiển thị cho người khác', 'Phá vỡ HTML', 'Tấn công server', 'Tấn công mạng'], 0, 'Cross-Site Scripting.'),
    Q('Để chống XSS cần?', ['Tin mọi input', 'Lọc và escape input từ người dùng trước khi hiển thị', 'Tắt JS', 'Tắt Internet'], 1, 'Sanitize.'),
    Q('Đối với form đăng nhập cần?', ['Lưu mật khẩu thô', 'Dùng HTTPS, hash mật khẩu trên server (bcrypt…)', 'Email mật khẩu', 'In ra giấy'], 1, 'Security best practices.'),
  ]),

  M(32, 'Dự án — Tích hợp với dịch vụ ngoài', [
    Q('Để chèn bản đồ vào website dùng?', ['<map>', 'Google Maps Embed iframe', '<atlas>', 'Không thể'], 1, 'Maps embed.'),
    Q('Để chèn nút like Facebook?', ['Facebook Social Plugins (iframe/SDK)', '<facebook>', '<like>', 'Không thể'], 0, 'FB plugins.'),
    Q('Phân tích traffic website dùng?', ['Bút và giấy', 'Google Analytics, Cloudflare Analytics, Plausible', 'Word', 'PowerPoint'], 1, 'Analytics.'),
    Q('API (Application Programming Interface) là?', ['Ngôn ngữ', 'Giao diện lập trình ứng dụng - cách để các phần mềm trao đổi dữ liệu', 'Phần cứng', 'Trình duyệt'], 1, 'API.'),
    Q('Định dạng dữ liệu API web phổ biến?', ['Word', 'JSON, XML', 'PDF', 'MP3'], 1, 'JSON phổ biến nhất.'),
    Q('Gọi API trong JavaScript dùng?', ['document.write', 'fetch() hoặc XMLHttpRequest', 'console.log', 'alert'], 1, 'fetch API.'),
  ]),

  M(33, 'Dự án — Trình bày và bảo vệ', [
    Q('Khi bảo vệ dự án website cần?', ['Chỉ chiếu code', 'Demo website, giải thích cấu trúc, nội dung, công nghệ, khó khăn-giải pháp', 'Đọc thuộc', 'Không cần trình bày'], 1, 'Presentation.'),
    Q('Tài liệu dự án nên có?', ['Chỉ source code', 'README mô tả mục tiêu, hướng dẫn cài đặt, sử dụng, công nghệ', 'Chỉ ảnh chụp', 'Không cần'], 1, 'README.md.'),
    Q('Đánh giá chất lượng website dựa trên?', ['Chỉ giao diện đẹp', 'Đầy đủ nội dung, đúng yêu cầu, dễ dùng, đẹp, tốc độ, an toàn', 'Chỉ tốc độ', 'Chỉ màu sắc'], 1, 'Đa tiêu chí.'),
    Q('Làm việc nhóm dự án website cần?', ['Mỗi người tự làm riêng lẻ không trao đổi', 'Phân vai (FE/BE/Design/Content), dùng Git để cộng tác', 'Một người làm hết', 'Không cần phân công'], 1, 'Teamwork.'),
    Q('Phản hồi từ người dùng thử nên?', ['Bỏ qua', 'Ghi nhận, phân loại, cải tiến qua các vòng lặp', 'Phớt lờ', 'Tự ái'], 1, 'Iterative improvement.'),
    Q('Khi sản phẩm có lỗi sau khi xuất bản nên?', ['Đổ lỗi', 'Nhanh chóng vá lỗi, thông báo người dùng, học từ sự cố', 'Bỏ luôn', 'Giấu giếm'], 1, 'Post-mortem.'),
  ]),

  M(34, 'Ôn tập cả năm', [
    Q('Thẻ HTML chèn liên kết?', ['<link>', '<a>', '<href>', '<url>'], 1, '<a href>.'),
    Q('CSS đặt cỡ chữ?', ['size', 'font-size', 'char-size', 'text-size'], 1, 'font-size.'),
    Q('Bộ chọn class trong CSS?', ['#', '.', '*', '$'], 1, 'Dot.'),
    Q('JavaScript để in ra console?', ['print()', 'console.log()', 'alert()', 'echo'], 1, 'console.log.'),
    Q('Tầng của HTTP trong mô hình TCP/IP?', ['Mạng', 'Ứng dụng', 'Vận chuyển', 'Liên kết'], 1, 'Application layer.'),
    Q('AI hẹp khác AGI ở chỗ?', ['AI hẹp chuyên một việc, AGI tổng quát chưa đạt được', 'Không khác', 'AGI cổ điển', 'AI hẹp giả'], 0, 'ANI vs AGI.'),
  ]),

  M(35, 'Thi học kỳ II — Bảo vệ dự án', [
    Q('index.html là?', ['Tệp ngẫu nhiên', 'Tệp khởi đầu mặc định của website', 'Tệp CSS', 'Tệp JS'], 1, 'Tệp chính.'),
    Q('Để website chạy trên Internet cần?', ['Chỉ tên miền', 'Tên miền + Hosting + (HTTPS)', 'Chỉ hosting', 'Không cần gì'], 1, 'Triển khai.'),
    Q('Thẻ HTML5 ngữ nghĩa cho điều hướng?', ['<menu>', '<nav>', '<header>', '<footer>'], 1, '<nav>.'),
    Q('CSS Flexbox dùng?', ['Bố cục 2D', 'Bố cục 1 chiều (ngang hoặc dọc)', 'Animation', 'Lưu trữ'], 1, 'Flex 1D.'),
    Q('Tấn công XSS bị chống bằng?', ['Tin mọi input', 'Escape/sanitize input và output', 'Tắt website', 'Khoá tài khoản'], 1, 'XSS prevention.'),
    Q('Một website tốt cần?', ['Chỉ đẹp', 'Nội dung đầy đủ, dễ dùng, đẹp, tải nhanh, an toàn, có khả năng tiếp cận', 'Chỉ nhanh', 'Chỉ an toàn'], 1, 'Tổng hợp tiêu chí.'),
  ]),
];

export const H12TIN_SCENARIOS = indexBy(H12TIN_WEEKS);
