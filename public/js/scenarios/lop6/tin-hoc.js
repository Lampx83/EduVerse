// ============================================================
// Tin học Lớp 6 — 36 tuần theo GDPT 2018 (THCS).
// HK1: T1–18 · HK2: T19–36.
// Chủ đề: A. Máy tính & xã hội tri thức | B. Mạng & Internet
//         C. Tổ chức lưu trữ dữ liệu   | D. Đạo đức, pháp luật, văn hóa số
//         E. Ứng dụng tin học           | F. Giải quyết vấn đề với máy tính
// ============================================================

import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6TH', 'tin-hoc', n, title, qs, opts);

export const S6TH_WEEKS = [
  // ============================================================
  // CHỦ ĐỀ A — MÁY TÍNH VÀ XÃ HỘI TRI THỨC (T1–6)
  // ============================================================
  M(1, 'Thông tin và dữ liệu', [
    Q('Thông tin là gì?', ['Là các thiết bị điện tử nói chung', 'Là các tệp lưu trên ổ đĩa', 'Là các tín hiệu, hình ảnh, âm thanh… mang lại sự hiểu biết về sự vật, sự việc', 'Là tập hợp các con số trong máy tính'], 2, 'Thông tin mang lại hiểu biết cho con người về thế giới xung quanh.'),
    Q('Dữ liệu khác thông tin ở điểm nào?', ['Dữ liệu chỉ tồn tại trên giấy', 'Dữ liệu là dạng ghi nhận, biểu diễn của thông tin để máy tính xử lí', 'Dữ liệu chính là thông tin', 'Dữ liệu luôn là số'], 1, 'Dữ liệu là cách biểu diễn thông tin dưới dạng máy tính có thể lưu trữ và xử lí.'),
    Q('Trong các vật sau, đâu KHÔNG phải là vật mang thông tin?', ['Tờ báo', 'Quyển sách', 'Hòn đá cuội bình thường', 'Tấm biển báo giao thông'], 2, 'Hòn đá bình thường không mang thông tin có ý nghĩa với con người.'),
    Q('Tiếng chuông báo thức là dạng thông tin gì?', ['Số liệu', 'Văn bản', 'Hình ảnh', 'Âm thanh'], 3, 'Âm thanh là một dạng biểu diễn thông tin phổ biến.'),
    Q('Hành động "đọc nhiệt độ trên nhiệt kế" thuộc giai đoạn nào?', ['Thu nhận thông tin', 'Xử lí thông tin', 'Lưu trữ thông tin', 'Truyền thông tin'], 0, 'Đọc nhiệt kế là việc tiếp nhận thông tin từ thiết bị đo.'),
    Q('Phát biểu nào đúng?', ['Dữ liệu phải luôn dưới dạng văn bản', 'Thông tin và dữ liệu là một', 'Một dữ liệu có thể mang nhiều thông tin khác nhau tùy ngữ cảnh', 'Một dữ liệu chỉ mang đúng một thông tin'], 2, 'Cùng một con số "10" có thể là điểm số, có thể là số học sinh… tùy ngữ cảnh.'),
  ]),

  M(2, 'Xử lí thông tin', [
    Q('Quá trình xử lí thông tin gồm mấy hoạt động cơ bản?', ['2: thu nhận và truyền', '5: thu, lọc, lưu, gửi, xóa', '3: nhập, in, lưu', '4: thu nhận, lưu trữ, xử lí, truyền'], 3, 'Bốn hoạt động cơ bản của quá trình xử lí thông tin.'),
    Q('Khi em làm phép tính 25 + 17 trong đầu, đây là hoạt động:', ['Lưu trữ thông tin', 'Xử lí thông tin', 'Thu nhận thông tin', 'Truyền thông tin'], 1, 'Tính toán là một dạng xử lí thông tin.'),
    Q('Ghi bài vào vở là hoạt động:', ['Xóa thông tin', 'Truyền thông tin', 'Lưu trữ thông tin', 'Xử lí thông tin'], 2, 'Vở là vật mang để lưu trữ thông tin.'),
    Q('Nói chuyện điện thoại là hoạt động:', ['Lưu trữ thông tin', 'Thu thập thông tin', 'Truyền thông tin', 'Xử lí thông tin'], 2, 'Truyền thông tin từ người này sang người khác.'),
    Q('Máy tính KHÔNG làm tốt việc nào trong các việc sau?', ['Cảm nhận cảm xúc con người', 'Lưu trữ khối lượng dữ liệu lớn', 'Sao chép chính xác', 'Tính toán hàng triệu phép tính/giây'], 0, 'Cảm nhận, cảm xúc là điểm mạnh của con người, không phải máy tính.'),
    Q('Bộ phận tương đương "bộ não" của máy tính là:', ['Ổ đĩa cứng', 'CPU (bộ xử lí trung tâm)', 'Màn hình', 'Bàn phím'], 1, 'CPU thực hiện các phép xử lí, ví như bộ não của máy tính.'),
  ]),

  M(3, 'Thông tin trong máy tính — bit, byte, mã hóa', [
    Q('Đơn vị nhỏ nhất biểu diễn thông tin trong máy tính là:', ['Kí tự (chữ cái A, B, C...)', 'Byte (gồm 8 bit)', 'Bit (0 hoặc 1)', 'KB (kilobyte, 1024 byte)'], 2, 'Bit nhận một trong hai giá trị 0 hoặc 1.'),
    Q('1 byte bằng bao nhiêu bit?', ['8', '16', '4', '10'], 0, '1 byte = 8 bit.'),
    Q('1 KB xấp xỉ bằng:', ['100 byte', '1000000 byte', '10 byte', '1024 byte'], 3, '1 KB = 2^10 byte = 1024 byte.'),
    Q('Sắp xếp tăng dần các đơn vị: KB, MB, GB, TB', ['KB < GB < MB < TB', 'TB < GB < MB < KB', 'KB < MB < GB < TB', 'MB < KB < GB < TB'], 2, 'Đơn vị đứng sau lớn hơn đơn vị trước khoảng 1024 lần.'),
    Q('Để máy tính lưu được chữ "A", người ta phải:', ['Đọc chữ A bằng micro', 'Lưu trực tiếp hình chữ A', 'Mã hóa "A" thành dãy bit 0/1', 'Vẽ chữ A lên ổ cứng'], 2, 'Mọi dữ liệu trong máy tính đều được mã hóa thành dãy bit.'),
    Q('Phát biểu nào ĐÚNG?', ['Âm thanh không thể lưu trong máy tính', 'Chỉ có số mới lưu được dưới dạng bit', 'Cả văn bản, hình ảnh và âm thanh đều được lưu dưới dạng dãy bit', 'Hình ảnh được lưu bằng các nét vẽ thật'], 2, 'Mọi loại dữ liệu trong máy tính đều được biểu diễn nhị phân.'),
    Q('Một tệp ảnh có dung lượng 2 048 KB tương đương:', ['2 GB', '2 MB', '20 MB', '0,2 MB'], 1, '2048 KB = 2048/1024 MB = 2 MB.'),
  ]),

  M(4, 'Cấu trúc máy tính', [
    Q('Sơ đồ cấu trúc chung của máy tính (theo Von Neumann) gồm các thành phần:', ['CPU và máy in', 'Bàn phím, chuột, màn hình', 'Ổ đĩa và RAM', 'Bộ xử lí (CPU), bộ nhớ, thiết bị vào, thiết bị ra'], 3, 'Bốn khối chức năng cơ bản của máy tính.'),
    Q('Thiết bị nào là thiết bị VÀO?', ['Bàn phím', 'Màn hình', 'Máy in', 'Loa (phát âm thanh ra ngoài)'], 0, 'Bàn phím dùng để nhập dữ liệu vào máy tính.'),
    Q('Thiết bị nào là thiết bị RA?', ['Webcam', 'Chuột (di chuyển con trỏ, nhập lệnh)', 'Máy in', 'Bàn phím'], 2, 'Máy in xuất kết quả ra giấy.'),
    Q('RAM thuộc loại bộ nhớ:', ['Thiết bị vào', 'Bộ nhớ trong, mất dữ liệu khi tắt máy', 'Bộ nhớ ngoài, lưu lâu dài', 'Bộ xử lí'], 1, 'RAM là bộ nhớ tạm thời, mất dữ liệu khi mất điện.'),
    Q('Ổ cứng (HDD/SSD) thuộc loại:', ['Bộ nhớ tạm', 'Thiết bị nhập', 'CPU (bộ xử lí trung tâm)', 'Bộ nhớ ngoài, lưu dữ liệu lâu dài'], 3, 'Ổ cứng lưu dữ liệu kể cả khi tắt máy.'),
    Q('Vai trò của CPU là:', ['Điều khiển và thực hiện các phép xử lí', 'Hiển thị hình ảnh', 'Nhận âm thanh', 'Lưu dữ liệu lâu dài'], 0, 'CPU là bộ xử lí trung tâm của máy tính.'),
  ]),

  M(5, 'Phần cứng và phần mềm', [
    Q('Phần cứng (hardware) là:', ['Các bộ phận vật lí của máy tính mà ta có thể chạm vào', 'Tệp dữ liệu', 'Các chương trình chạy trên máy tính', 'Tài liệu hướng dẫn'], 0, 'Phần cứng là phần "sờ được" của máy.'),
    Q('Phần mềm là:', ['Các thiết bị điện tử', 'Các loại cáp kết nối', 'Vỏ máy tính', 'Các chương trình, ứng dụng chạy trên máy tính'], 3, 'Phần mềm là tập hợp các lệnh để máy tính thực hiện công việc.'),
    Q('Windows, Linux thuộc loại phần mềm:', ['Phần mềm trò chơi', 'Phần cứng', 'Phần mềm hệ thống (hệ điều hành)', 'Phần mềm ứng dụng'], 2, 'Hệ điều hành thuộc nhóm phần mềm hệ thống.'),
    Q('Microsoft Word, Zalo, Chrome là phần mềm:', ['Phần mềm ứng dụng', 'Hệ điều hành', 'Phần cứng', 'Phần mềm hệ thống'], 0, 'Đây là các phần mềm ứng dụng phục vụ công việc cụ thể.'),
    Q('Máy tính có thể hoạt động chỉ với phần cứng không?', ['Không, cần có phần mềm điều khiển', 'Có, nhưng chậm', 'Có, phần cứng tự chạy', 'Tùy hãng sản xuất'], 0, 'Phải có hệ điều hành và phần mềm thì máy mới làm việc được.'),
    Q('Đâu là phần cứng?', ['Phần mềm diệt virus', 'Card màn hình', 'Hệ điều hành Windows', 'Trình duyệt Chrome'], 1, 'Card màn hình là thiết bị vật lí — phần cứng.'),
  ]),

  M(6, 'Vai trò của máy tính trong xã hội', [
    Q('Máy tính được dùng nhiều trong lĩnh vực:', ['Chỉ trong quân đội', 'Chỉ để chơi game', 'Y tế, giáo dục, giao thông, ngân hàng… (hầu hết các lĩnh vực)', 'Chỉ trong văn phòng'], 2, 'Máy tính có mặt trong gần như mọi lĩnh vực của đời sống.'),
    Q('Việc dùng máy tính để học trực tuyến giúp em:', ['Học mọi lúc mọi nơi, có nhiều tài nguyên', 'Không cần thầy cô', 'Bỏ luôn việc đến trường', 'Không cần bạn bè'], 0, 'Học trực tuyến là một hình thức bổ trợ, không thay thế hoàn toàn lớp học.'),
    Q('Ảnh hưởng tiêu cực có thể xảy ra khi lạm dụng máy tính là:', ['Học giỏi hơn tự nhiên', 'Mỏi mắt, ít vận động, nghiện game', 'Ngủ ngon hơn', 'Tăng chiều cao'], 1, 'Lạm dụng máy tính ảnh hưởng đến sức khỏe và tâm lí.'),
    Q('Cách sử dụng máy tính an toàn cho sức khỏe:', ['Ngồi đúng tư thế, nghỉ giải lao sau mỗi 45–60 phút', 'Dùng liên tục 5 giờ không nghỉ', 'Ngồi sát màn hình', 'Tắt đèn, chỉ để màn hình sáng'], 0, 'Tư thế đúng và nghỉ giải lao bảo vệ mắt, cổ, lưng.'),
    Q('Robot dùng trong nhà máy là ví dụ về:', ['Trò chơi điện tử', 'Mạng xã hội', 'Phần mềm soạn thảo', 'Máy tính ứng dụng trong sản xuất'], 3, 'Robot công nghiệp là ứng dụng của máy tính trong sản xuất.'),
    Q('Câu nào ĐÚNG về vai trò của con người với máy tính?', ['Máy tính có cảm xúc', 'Con người là chủ thể, máy tính là công cụ', 'Máy tính thông minh hơn con người', 'Máy tính thay thế hoàn toàn con người'], 1, 'Máy tính là công cụ phục vụ con người.'),
  ]),

  // ============================================================
  // CHỦ ĐỀ B — MẠNG MÁY TÍNH VÀ INTERNET (T7–12)
  // ============================================================
  M(7, 'Mạng máy tính là gì?', [
    Q('Mạng máy tính là:', ['Một chiếc máy tính rất mạnh', 'Một loại phần mềm', 'Một loại virus', 'Tập hợp các máy tính được kết nối để chia sẻ dữ liệu, thiết bị'], 3, 'Mạng giúp các máy tính trao đổi và chia sẻ tài nguyên.'),
    Q('Lợi ích chính của mạng máy tính:', ['Làm máy chạy chậm hơn', 'Không có lợi ích gì', 'Tăng giá tiền điện', 'Chia sẻ dữ liệu, máy in, kết nối Internet'], 3, 'Chia sẻ tài nguyên là lợi ích cốt lõi của mạng.'),
    Q('Mạng LAN là loại mạng:', ['Mạng toàn cầu', 'Mạng truyền hình', 'Mạng cục bộ, phạm vi nhỏ (lớp học, công ty)', 'Mạng điện thoại'], 2, 'LAN = Local Area Network — mạng cục bộ.'),
    Q('Mạng WAN là loại mạng:', ['Mạng không dây trong phòng', 'Mạng nhỏ trong nhà', 'Mạng diện rộng, có thể trải khắp các quốc gia', 'Mạng chỉ có 2 máy'], 2, 'WAN = Wide Area Network — mạng diện rộng.'),
    Q('Thiết bị thường dùng để kết nối các máy trong mạng gia đình:', ['Router/modem Wi-Fi', 'Loa Bluetooth (phát nhạc qua mạng)', 'Máy in', 'Bàn phím'], 0, 'Router/modem Wi-Fi là thiết bị mạng phổ biến trong gia đình.'),
    Q('Để các máy tính trong mạng "hiểu" nhau, chúng cần dùng chung:', ['Một màn hình', 'Một bàn phím', 'Một mật khẩu duy nhất', 'Giao thức (protocol) như TCP/IP'], 3, 'Giao thức là quy tắc chung để các máy giao tiếp.'),
  ]),

  M(8, 'Internet — kết nối toàn cầu', [
    Q('Internet là:', ['Một thiết bị điện tử', 'Một trang web', 'Mạng toàn cầu kết nối hàng tỉ thiết bị trên thế giới', 'Một phần mềm trên máy'], 2, 'Internet là mạng của các mạng, có quy mô toàn cầu.'),
    Q('WWW (World Wide Web) là:', ['Hệ thống các trang web liên kết với nhau qua Internet', 'Một hệ điều hành', 'Một loại virus', 'Một loại cáp mạng'], 0, 'WWW là dịch vụ phổ biến trên Internet.'),
    Q('Để truy cập Internet, em cần:', ['Chỉ cần bàn phím', 'Thiết bị (máy tính/điện thoại) + kết nối mạng + trình duyệt/ứng dụng', 'Chỉ cần điện', 'Chỉ cần một quyển sách'], 1, 'Cần thiết bị, đường truyền và phần mềm thích hợp.'),
    Q('Dịch vụ nào KHÔNG phải dịch vụ Internet phổ biến?', ['Web (xem trang thông tin trực tuyến)', 'Email (gửi nhận thư điện tử)', 'Mạng xã hội', 'Bật tắt đèn nhà bằng công tắc cơ'], 3, 'Công tắc cơ là thao tác vật lí, không qua Internet.'),
    Q('Địa chỉ web thường bắt đầu bằng:', ['https://', 'C:\\ (đường dẫn ổ đĩa máy tính)', 'mailto:phone', '/etc/'], 0, 'Trang web bắt đầu bằng giao thức http:// hoặc https://.'),
    Q('Lợi ích của Internet đối với học sinh:', ['Chỉ để xem phim', 'Tra cứu tài liệu, học trực tuyến, kết nối bạn bè', 'Không có lợi ích gì', 'Chỉ để chơi game'], 1, 'Internet là kho tri thức và phương tiện học tập rất lớn.'),
  ]),

  M(9, 'Trình duyệt và truy cập web', [
    Q('Trình duyệt web là phần mềm dùng để:', ['Xem các trang web', 'Nghe nhạc offline', 'Vẽ tranh', 'Soạn thảo văn bản chuyên nghiệp'], 0, 'Trình duyệt giúp truy cập và hiển thị các trang web.'),
    Q('Đâu KHÔNG phải trình duyệt web?', ['Mozilla Firefox', 'Microsoft Word', 'Google Chrome', 'Microsoft Edge'], 1, 'Microsoft Word là phần mềm soạn thảo, không phải trình duyệt.'),
    Q('Để mở một trang web, em gõ địa chỉ vào:', ['Thanh tiêu đề', 'Thanh địa chỉ (address bar)', 'Menu File', 'Thanh trạng thái'], 1, 'Địa chỉ web được gõ vào thanh địa chỉ của trình duyệt.'),
    Q('URL là gì?', ['Tên trình duyệt', 'Một loại virus', 'Địa chỉ định vị tài nguyên trên web', 'Một loại cáp'], 2, 'URL = Uniform Resource Locator — địa chỉ trang/tài nguyên trên web.'),
    Q('Để mở một liên kết trong tab mới, em thường:', ['Tắt máy tính', 'Xoá lịch sử', 'Bấm chuột giữa hoặc Ctrl + click vào liên kết', 'Rút cáp mạng'], 2, 'Bấm chuột giữa hoặc Ctrl+click mở liên kết trong tab mới.'),
    Q('Bookmark (đánh dấu) trên trình duyệt giúp:', ['Lưu lại địa chỉ trang web để truy cập nhanh sau này', 'Đổi tên máy tính', 'Tắt quảng cáo', 'Tăng tốc Internet'], 0, 'Bookmark giúp lưu địa chỉ trang yêu thích.'),
  ]),

  M(10, 'Tìm kiếm thông tin trên Internet', [
    Q('Công cụ tìm kiếm phổ biến nhất hiện nay là:', ['Notepad', 'Microsoft Word', 'Google', 'Paint (vẽ hình, chỉnh sửa ảnh)'], 2, 'Google là công cụ tìm kiếm thông dụng.'),
    Q('Em muốn tìm "thủ đô Việt Nam", em nên gõ:', ['Cả một bài văn dài', 'Từ khóa ngắn gọn: "thủ đô Việt Nam"', 'Gõ tên người khác', 'Chỉ gõ "tìm"'], 1, 'Từ khóa ngắn gọn, đúng trọng tâm cho kết quả tốt hơn.'),
    Q('Khi gõ từ khóa "An toàn giao thông trường học" trong Google, kết quả:', ['Không có kết quả', 'Tự động in ra giấy', 'Chỉ có duy nhất 1 kết quả', 'Có thể là cả triệu trang, cần chọn nguồn uy tín'], 3, 'Google trả về rất nhiều kết quả, cần lựa chọn nguồn tin cậy.'),
    Q('Để tìm chính xác cụm từ "Trường Sa Hoàng Sa", em nên dùng:', ['Gõ thật chậm', 'Đặt cụm trong dấu nháy kép: "Trường Sa Hoàng Sa"', 'Viết hoa toàn bộ', 'Gõ liền không khoảng trắng'], 1, 'Dấu nháy kép giúp tìm chính xác cụm từ.'),
    Q('Nguồn thông tin nào đáng tin cậy hơn?', ['Một video chưa rõ tác giả', 'Một tin nhắn truyền tay', 'Trang chính thức của Bộ GD&ĐT (.edu.vn / .gov.vn)', 'Một bài bình luận ẩn danh trên mạng xã hội'], 2, 'Trang chính thức của cơ quan nhà nước/giáo dục có độ tin cậy cao.'),
    Q('Khi sử dụng thông tin tìm được, em cần:', ['Đăng lại với tên mình', 'Sao chép nguyên không cần nguồn', 'Ghi rõ nguồn, kiểm chứng, không sao chép nguyên văn', 'Coi như mình tự viết'], 2, 'Trích dẫn nguồn là yêu cầu cơ bản về đạo đức học thuật.'),
  ]),

  M(11, 'An toàn thông tin và mật khẩu', [
    Q('Mật khẩu MẠNH thường có đặc điểm:', ['Là tên em viết liền', 'Là ngày sinh của em', 'Dài ≥ 8 kí tự, có chữ hoa, chữ thường, số và kí tự đặc biệt', 'Là "123456"'], 2, 'Mật khẩu mạnh khó đoán và khó dò.'),
    Q('Việc nào KHÔNG nên làm với mật khẩu?', ['Bật xác thực 2 lớp', 'Chia sẻ mật khẩu cho bạn bè qua chat', 'Đổi mật khẩu định kì', 'Dùng mật khẩu khác nhau cho các tài khoản khác nhau'], 1, 'Mật khẩu là bí mật cá nhân, không nên chia sẻ.'),
    Q('Khi nhận email lạ kèm liên kết "trúng thưởng 100 triệu", em nên:', ['Không bấm, xóa email, báo người lớn', 'Chia sẻ cho cả lớp cùng bấm', 'Gửi mật khẩu để xác nhận', 'Bấm ngay để nhận thưởng'], 0, 'Đây là dấu hiệu lừa đảo (phishing) phổ biến.'),
    Q('Phần mềm độc hại (malware/virus) có thể:', ['Tăng RAM cho máy', 'Làm máy chạy nhanh hơn', 'Sửa lỗi tự động cho hệ điều hành', 'Đánh cắp dữ liệu, làm hỏng máy'], 3, 'Malware gây hại cho dữ liệu và thiết bị.'),
    Q('Để phòng chống virus, em nên:', ['Tải file từ trang không rõ nguồn', 'Tắt phần mềm diệt virus', 'Cài thật nhiều phần mềm lạ', 'Cài phần mềm diệt virus và cập nhật hệ điều hành thường xuyên'], 3, 'Cập nhật và phần mềm bảo vệ là tuyến phòng vệ cơ bản.'),
    Q('Em vừa lộ mật khẩu Facebook, cần làm gì NGAY?', ['Xóa luôn tài khoản người lạ', 'Đợi vài hôm xem có chuyện gì xảy ra', 'Đăng status xin lỗi', 'Đổi mật khẩu mới, kiểm tra hoạt động đăng nhập, báo người lớn'], 3, 'Đổi mật khẩu ngay là việc cấp bách nhất.'),
  ]),

  M(12, 'Văn hóa giao tiếp trên mạng — phòng chống bắt nạt mạng', [
    Q('Văn hóa giao tiếp trên mạng thể hiện qua:', ['Đăng ảnh chế người khác', 'Lời nói lịch sự, tôn trọng, không xúc phạm người khác', 'Bình luận tiêu cực', 'Viết tắt thật nhiều cho ngầu'], 1, 'Giao tiếp trên mạng cần văn minh như ngoài đời.'),
    Q('Hành vi nào là BẮT NẠT MẠNG (cyberbullying)?', ['Chúc mừng sinh nhật bạn', 'Khen bạn đạt điểm cao', 'Đăng bài chế giễu, lăng mạ bạn lên nhóm chat', 'Hỏi bài bạn'], 2, 'Lăng mạ, chế giễu trên mạng là một dạng bắt nạt.'),
    Q('Khi bị bắt nạt trên mạng, em nên:', ['Im lặng chịu đựng', 'Lập tài khoản giả trả thù', 'Lưu bằng chứng (ảnh chụp), báo cha mẹ/thầy cô, chặn người bắt nạt', 'Tự bắt nạt lại'], 2, 'Tìm sự giúp đỡ từ người lớn và giữ bằng chứng là cách xử lí đúng.'),
    Q('Trước khi đăng một bài lên mạng, em nên tự hỏi:', ['Có nhiều like không?', 'Có vui mắt không?', 'Đăng càng nhanh càng tốt', 'Bài có làm tổn thương người khác không? Có vi phạm gì không?'], 3, 'Cân nhắc trước khi đăng giúp tránh hậu quả đáng tiếc.'),
    Q('Thông tin nào KHÔNG nên đăng công khai?', ['Bức tranh em vẽ', 'Bài thơ em yêu thích', 'Số CCCD, địa chỉ nhà, số điện thoại, mật khẩu', 'Lời chào'], 2, 'Thông tin cá nhân nhạy cảm dễ bị kẻ xấu lợi dụng.'),
    Q('Khi bạn nhờ em "like dạo" để chê bai bạn khác, em sẽ:', ['Chụp màn hình chê tiếp', 'Đăng lại để câu like', 'Từ chối, khuyên bạn dừng lại', 'Like ngay vì cả nhóm cùng làm'], 2, 'Cần tỉnh táo, không tiếp tay cho hành vi không tốt.'),
  ]),

  // ============================================================
  // CHỦ ĐỀ C — TỔ CHỨC LƯU TRỮ DỮ LIỆU (T13–18)
  // ============================================================
  M(13, 'Tệp và thư mục', [
    Q('Tệp (file) trong máy tính là:', ['Đơn vị cơ bản chứa dữ liệu (văn bản, ảnh, nhạc…) trên ổ đĩa', 'Một loại mạng', 'Một loại virus', 'Một thiết bị phần cứng'], 0, 'Tệp là đơn vị lưu trữ dữ liệu trên ổ đĩa.'),
    Q('Thư mục (folder) dùng để:', ['Tăng tốc máy tính', 'Bảo vệ chống virus', 'In dữ liệu ra giấy', 'Chứa các tệp và thư mục con, giúp tổ chức dữ liệu'], 3, 'Thư mục giúp nhóm các tệp có liên quan với nhau.'),
    Q('Tên tệp "baocao.docx" có phần mở rộng là:', ['.docx', 'docx. (dấu chấm đứng cuối)', 'baocao', 'báo cáo'], 0, 'Phần mở rộng đứng sau dấu chấm cuối cùng.'),
    Q('Phần mở rộng cho biết:', ['Kích thước tệp', 'Vị trí lưu', 'Người tạo tệp', 'Loại tệp / phần mềm mở được tệp đó'], 3, 'Ví dụ .mp3 là nhạc, .docx là tài liệu Word, .jpg là ảnh.'),
    Q('Tệp nào là tệp ẢNH?', ['phim.mp4', 'baitap.docx', 'baihat.mp3', 'anh_lop.jpg'], 3, '.jpg là định dạng ảnh phổ biến.'),
    Q('Trong một thư mục, hai tệp KHÔNG được:', ['Khác kích thước', 'Cùng tên và cùng phần mở rộng', 'Khác ngày tạo', 'Khác nội dung'], 1, 'Hai tệp cùng tên + mở rộng trong cùng thư mục sẽ xung đột.'),
  ]),

  M(14, 'Thao tác cơ bản với tệp/thư mục', [
    Q('Để tạo thư mục mới trong Windows Explorer, em làm:', ['Bấm nút nguồn', 'Chuột phải → New → Folder, rồi đặt tên', 'Cắm USB', 'Tắt máy'], 1, 'Cách phổ biến để tạo thư mục mới.'),
    Q('Phím tắt thường dùng để SAO CHÉP:', ['Ctrl + C', 'Ctrl + Z', 'Ctrl + V', 'Ctrl + X'], 0, 'Ctrl + C = Copy.'),
    Q('Phím tắt để DÁN:', ['Ctrl + S', 'Ctrl + X', 'Ctrl + V', 'Ctrl + C'], 2, 'Ctrl + V = Paste.'),
    Q('Phím tắt để CẮT (di chuyển):', ['Ctrl + A', 'Ctrl + V', 'Ctrl + X', 'Ctrl + C'], 2, 'Ctrl + X = Cut.'),
    Q('Đổi tên tệp/thư mục trong Windows: nhấn phím nào sau khi chọn?', ['F5 (làm mới cửa sổ)', 'Esc (huỷ thao tác đang làm)', 'F1 (mở trợ giúp Help)', 'F2'], 3, 'F2 dùng để đổi tên trong Windows Explorer.'),
    Q('Xóa tệp bằng Delete sẽ:', ['Sao chép tệp', 'Đổi tên tệp', 'Xóa vĩnh viễn ngay', 'Đưa vào thùng rác (Recycle Bin), có thể khôi phục'], 3, 'Shift + Delete mới xóa vĩnh viễn.'),
  ]),

  M(15, 'Tổ chức cây thư mục', [
    Q('Cây thư mục có cấu trúc:', ['Mạng lưới ngẫu nhiên', 'Một hàng ngang', 'Phân cấp: thư mục cha chứa thư mục con và tệp', 'Hình tròn'], 2, 'Cây thư mục có dạng phân cấp như cây gia phả.'),
    Q('Thư mục gốc (root) trên ổ C: thường được kí hiệu:', ['C-disk', 'root.exe', 'C:/ (dùng dấu xuyệc thường)', 'C:\\'], 3, 'Trong Windows, ổ C có thư mục gốc C:\\.'),
    Q('Cách tổ chức nào KHOA HỌC để lưu bài tập?', ['Lưu mỗi tệp một ổ đĩa', 'Lưu tất cả vào Desktop không phân loại', 'HocTap/Lop6/Tin/BaiTap', 'Đặt tên là 1, 2, 3, 4…'], 2, 'Cây thư mục theo chủ đề/môn học giúp dễ tìm.'),
    Q('Lợi ích của việc tổ chức thư mục tốt:', ['Dễ tìm, dễ sao lưu, dễ chia sẻ', 'Tốn nhiều dung lượng hơn', 'Máy chạy chậm hơn', 'Tăng nguy cơ virus'], 0, 'Tổ chức tốt giúp quản lí dữ liệu hiệu quả.'),
    Q('Thư mục "Tin" nằm trong "Lop6", "Lop6" nằm trong "HocTap". Quan hệ "Tin" và "HocTap":', ['Không liên quan', 'Hai thư mục ngang hàng', '"Tin" chứa "HocTap"', '"HocTap" là tổ tiên của "Tin"; "Tin" là con cháu'], 3, 'Tin là thư mục cháu của HocTap.'),
    Q('Đặt tên thư mục/tệp nên:', ['Đặt giống nhau hết', 'Ngắn gọn, có ý nghĩa, không dùng kí tự đặc biệt như \\ / : * ? " < > |', 'Dùng nhiều dấu cách và kí tự lạ', 'Càng dài càng tốt'], 1, 'Tên rõ nghĩa giúp dễ tìm; tránh kí tự cấm.'),
  ]),

  M(16, 'Đường dẫn (path)', [
    Q('Đường dẫn (path) là:', ['Chuỗi các tên thư mục để chỉ đến vị trí của tệp/thư mục', 'Cáp mạng', 'Đường đi bộ', 'Một loại phần mềm'], 0, 'Đường dẫn cho biết tệp nằm ở đâu trên cây thư mục.'),
    Q('Trong Windows, dấu phân tách trong đường dẫn là:', ['Dấu / (xuyệc thường)', 'Dấu , (phẩy)', 'Dấu : (hai chấm)', 'Dấu \\ (xuyệc ngược)'], 3, 'Windows dùng \\ để phân cách thư mục.'),
    Q('Đường dẫn C:\\HocTap\\Lop6\\Tin\\baitap.docx có nghĩa:', ['Tệp không tồn tại', 'Tệp baitap.docx nằm trong Tin → Lop6 → HocTap → ổ C', 'Tệp nằm trên Desktop', 'Tệp nằm trong Recycle Bin'], 1, 'Đường dẫn đầy đủ chỉ rõ vị trí của tệp.'),
    Q('Đường dẫn TUYỆT ĐỐI bắt đầu từ:', ['Vị trí hiện tại', 'Ngẫu nhiên', 'Thư mục Desktop', 'Thư mục gốc (vd C:\\, /)'], 3, 'Đường dẫn tuyệt đối luôn bắt đầu từ gốc của ổ đĩa.'),
    Q('Trong macOS/Linux, dấu phân tách là:', [': (dấu hai chấm, ngăn ổ đĩa)', '/ (xuyệc thường)', '\\ (xuyệc ngược, dùng cho Windows)', '; (dấu chấm phẩy, ngăn lệnh)'], 1, 'Hệ Unix-like dùng / để phân cách.'),
    Q('Hai tệp khác nhau có thể trùng tên nếu:', ['Chúng nằm ở hai thư mục khác nhau (đường dẫn khác nhau)', 'Cùng người tạo', 'Không bao giờ trùng tên được', 'Cùng ổ đĩa'], 0, 'Đường dẫn đầy đủ phân biệt các tệp cùng tên.'),
  ]),

  M(17, 'Sao lưu dữ liệu cá nhân', [
    Q('Sao lưu (backup) dữ liệu là:', ['Đổi tên tệp', 'Xóa dữ liệu cũ', 'Tạo bản sao để phòng khi mất/hỏng dữ liệu gốc', 'In ra giấy'], 2, 'Backup giúp khôi phục khi sự cố xảy ra.'),
    Q('Nguyên nhân nào KHÔNG dẫn tới mất dữ liệu?', ['Hỏng ổ cứng', 'Virus tấn công', 'Đặt tên tệp dài', 'Xóa nhầm'], 2, 'Tên dài không gây mất dữ liệu; các nguyên nhân kia có thể.'),
    Q('Nơi sao lưu phổ biến:', ['Không cần sao lưu', 'Trên Desktop của cùng máy', 'USB, ổ cứng ngoài, đám mây (Google Drive, OneDrive)', 'Cùng một thư mục'], 2, 'Sao lưu cần ở vị trí khác máy gốc để an toàn.'),
    Q('Lịch sao lưu hợp lí cho bài học của em:', ['Định kì (vd hàng tuần) hoặc sau khi có thay đổi quan trọng', 'Mỗi 5 năm', 'Một năm 1 lần', 'Không bao giờ'], 0, 'Sao lưu định kì giúp giảm rủi ro mất dữ liệu mới.'),
    Q('Lưu trữ "đám mây" (cloud) có lợi ích:', ['Truy cập mọi nơi, an toàn hơn nếu máy hỏng', 'Không sao lưu được', 'Luôn miễn phí không giới hạn', 'Chỉ dùng được khi tắt mạng'], 0, 'Đám mây tiện lợi và có khả năng phục hồi tốt.'),
    Q('Trước khi cài lại Windows, em nên:', ['Sao lưu các tệp quan trọng ra USB/Cloud', 'Xóa hết file ngay lập tức', 'Tắt nguồn đột ngột', 'Đập máy'], 0, 'Cài lại Windows có thể mất dữ liệu trên ổ C.'),
  ]),

  M(18, 'Ôn tập Học kì 1', [
    Q('Đơn vị nhỏ nhất biểu diễn thông tin trong máy tính là:', ['KB (1 KB ≈ 1024 byte)', 'MB (1 MB ≈ 1024 KB)', 'Byte (gồm 8 bit)', 'Bit'], 3, 'Bit nhận giá trị 0 hoặc 1.'),
    Q('Đâu là phần mềm hệ thống?', ['Zalo (ứng dụng nhắn tin)', 'Microsoft Word', 'Google Chrome', 'Hệ điều hành Windows'], 3, 'Windows là hệ điều hành — phần mềm hệ thống.'),
    Q('LAN là viết tắt của:', ['Local Area Network', 'Large Area Network', 'Light Area Net', 'Long Access Network'], 0, 'LAN = Local Area Network.'),
    Q('Phím tắt sao chép tệp là:', ['Ctrl + V', 'Ctrl + C', 'Ctrl + Z', 'Ctrl + X'], 1, 'Ctrl + C để sao chép.'),
    Q('Đặc điểm mật khẩu mạnh:', ['Là ngày sinh', 'Là tên đăng nhập', '≥ 8 kí tự, có hoa, thường, số, kí tự đặc biệt', 'Là 12345678'], 2, 'Mật khẩu mạnh khó đoán.'),
    Q('Trong đường dẫn C:\\HocTap\\Tin\\bai1.docx, "HocTap" là:', ['Thư mục con của C:\\', 'Phần mở rộng', 'Tên ổ đĩa', 'Tên tệp'], 0, 'HocTap nằm trực tiếp trong ổ C.'),
    Q('Việc nào nên làm khi gặp tin "trúng thưởng 1 tỉ"?', ['Bấm vào ngay', 'Chia sẻ cho bạn cùng bấm', 'Bỏ qua, không bấm liên kết, báo người lớn', 'Gửi mật khẩu để xác nhận'], 2, 'Đây là dấu hiệu lừa đảo.'),
  ]),

  // ============================================================
  // CHỦ ĐỀ D — ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HÓA SỐ (T19–22)
  // ============================================================
  M(19, 'Bản quyền tác phẩm số', [
    Q('Bản quyền (copyright) là:', ['Quyền của tác giả đối với tác phẩm mình sáng tạo, được pháp luật bảo vệ', 'Một loại phần mềm', 'Quyền của nhà mạng', 'Quyền của người mua máy tính'], 0, 'Bản quyền bảo vệ tác giả và tác phẩm.'),
    Q('Hành vi nào VI PHẠM bản quyền?', ['Đọc sách thư viện', 'Sao chép, phát tán phần mềm/nhạc/sách mà không xin phép tác giả', 'Tự sáng tác bài hát', 'Mua đĩa nhạc chính hãng'], 1, 'Sao chép trái phép là vi phạm bản quyền.'),
    Q('Khi sử dụng bài viết của người khác cho bài thuyết trình, em nên:', ['Đăng lại với tên mình', 'Ghi rõ tác giả và nguồn trích dẫn', 'Xóa tên tác giả', 'Coi như mình viết'], 1, 'Trích dẫn nguồn là tôn trọng tác giả.'),
    Q('Phần mềm có giấy phép "trả phí" mà em tải lậu (crack) sẽ:', ['Vi phạm pháp luật, dễ dính virus', 'Tốt cho máy tính', 'An toàn hoàn toàn', 'Được bảo hành chính hãng'], 0, 'Phần mềm crack vi phạm bản quyền và nhiều rủi ro.'),
    Q('Hình ảnh em tự chụp:', ['Không có bản quyền', 'Em là tác giả, em có bản quyền', 'Thuộc về nhà sản xuất máy ảnh', 'Thuộc về mạng xã hội nơi em đăng'], 1, 'Người sáng tạo là chủ sở hữu bản quyền.'),
    Q('"Creative Commons" (CC) là:', ['Tên hãng máy tính', 'Một loại virus', 'Giấy phép cho phép chia sẻ tác phẩm với điều kiện nhất định', 'Một loại tệp'], 2, 'Creative Commons cho phép tác giả chia sẻ rộng hơn nhưng vẫn giữ quyền.'),
  ]),

  M(20, 'Phần mềm có bản quyền và phần mềm nguồn mở', [
    Q('Phần mềm thương mại có đặc điểm:', ['Không cần cài đặt', 'Luôn miễn phí', 'Phải trả phí mua bản quyền sử dụng', 'Không có tác giả'], 2, 'Phần mềm thương mại được bán có bản quyền.'),
    Q('Phần mềm nguồn mở (open source) là:', ['Phần mềm gây hại', 'Phần mềm trả phí', 'Phần mềm công khai mã nguồn, người dùng được tự do dùng, chỉnh sửa', 'Phần mềm bí mật'], 2, 'Open source mở mã nguồn cho cộng đồng.'),
    Q('Ví dụ phần mềm NGUỒN MỞ:', ['LibreOffice, Linux, Firefox', 'Photoshop', 'Microsoft Office trả phí', 'Windows 11'], 0, 'Đây là các phần mềm nguồn mở phổ biến.'),
    Q('Phần mềm miễn phí (freeware) có nhất thiết là nguồn mở không?', ['Có — miễn phí là nguồn mở', 'Tùy hãng máy', 'Luôn luôn', 'Không — miễn phí dùng nhưng có thể không công khai mã nguồn'], 3, 'Freeware ≠ open source.'),
    Q('Khi em chọn phần mềm cho lớp học, ưu tiên:', ['Phần mềm crack lậu', 'Phần mềm có bản quyền chính thức hoặc nguồn mở phù hợp', 'Phần mềm gây hại', 'Phần mềm không rõ nguồn gốc'], 1, 'Tôn trọng bản quyền và bảo đảm an toàn.'),
    Q('Việc cài đặt phần mềm crack có rủi ro:', ['Không có rủi ro nào', 'Nhiễm virus, mất dữ liệu, vi phạm pháp luật', 'Tăng tốc máy', 'Bảo hành tốt hơn'], 1, 'Phần mềm crack chứa nhiều rủi ro nghiêm trọng.'),
  ]),

  M(21, 'Nhận diện tin giả (fake news)', [
    Q('Tin giả là:', ['Tin tức trên báo chính thống', 'Thông báo của nhà trường', 'Tin tức bịa đặt, sai sự thật nhằm gây hiểu lầm hoặc trục lợi', 'Tin tức khoa học đã kiểm chứng'], 2, 'Tin giả không có cơ sở sự thật.'),
    Q('Dấu hiệu nhận biết tin giả:', ['Được đăng trên báo lớn', 'Tiêu đề giật gân, không nguồn rõ ràng, viết sai chính tả nhiều', 'Có dẫn nguồn cụ thể', 'Có ý kiến chuyên gia có tên'], 1, 'Tin giả thường giật gân và thiếu nguồn.'),
    Q('Khi gặp tin "chấn động" trên mạng, em nên:', ['Tin tuyệt đối vào tiêu đề', 'Bình luận đồng tình ngay', 'Kiểm chứng từ 2–3 nguồn uy tín trước khi tin/chia sẻ', 'Chia sẻ ngay cho mọi người'], 2, 'Kiểm chứng giúp tránh lan truyền tin sai.'),
    Q('Hậu quả lan truyền tin giả:', ['Tăng uy tín', 'Được khen thưởng', 'Không có hậu quả', 'Gây hoang mang, có thể bị xử phạt theo pháp luật'], 3, 'Lan truyền tin sai có thể bị xử phạt hành chính/hình sự.'),
    Q('Nguồn nào đáng tin?', ['Video cắt ghép không rõ tác giả', 'Nick ẩn danh trên Facebook', 'VTV, VNExpress, Tuoitre, Bộ Y tế… các báo/tổ chức chính thống', 'Tin nhắn truyền tay'], 2, 'Nguồn chính thống có quy trình kiểm duyệt.'),
    Q('Trước khi chia sẻ thông tin, em nên tự hỏi:', ['Tin này có thật không? Nguồn từ đâu? Có làm tổn hại ai không?', 'Tin có "hot" không?', 'Tin có nhiều like không?', 'Đăng càng nhanh càng tốt'], 0, 'Tư duy phản biện là kĩ năng số quan trọng.'),
  ]),

  M(22, 'Bảo vệ thông tin cá nhân', [
    Q('Thông tin cá nhân bao gồm:', ['Tên bài hát yêu thích', 'Tên trường', 'Họ tên, ngày sinh, CCCD, địa chỉ, số điện thoại, ảnh chân dung…', 'Màu sắc yêu thích'], 2, 'Đây là thông tin cá nhân cần bảo vệ.'),
    Q('Việc nào KHÔNG nên làm trên mạng xã hội?', ['Đăng ảnh phong cảnh', 'Comment lịch sự', 'Đăng bài chúc Tết', 'Đăng số CCCD, vé máy bay, mật khẩu'], 3, 'Đăng giấy tờ cá nhân dễ bị lợi dụng.'),
    Q('Trang web yêu cầu em nhập "số CCCD để nhận quà miễn phí", em sẽ:', ['Nhập ngay để nhận quà', 'Không cung cấp, đó là dấu hiệu lừa đảo', 'Chia sẻ cho bạn cùng nhập', 'Báo cha mẹ rồi nhập'], 1, 'Không cung cấp thông tin nhạy cảm cho trang lạ.'),
    Q('Để giảm rủi ro lộ thông tin trên mạng xã hội, em nên:', ['Đặt chế độ riêng tư, giới hạn người xem', 'Đăng hết mọi sinh hoạt cá nhân', 'Để công khai toàn bộ', 'Kết bạn với mọi người lạ'], 0, 'Cài đặt riêng tư giúp bảo vệ thông tin.'),
    Q('Luật pháp Việt Nam (Luật An ninh mạng, Luật bảo vệ dữ liệu cá nhân) quy định:', ['Cho phép thu thập trái phép', 'Không có quy định nào', 'Bảo vệ dữ liệu cá nhân của công dân; xử lí hành vi xâm phạm', 'Khuyến khích đăng đời tư người khác'], 2, 'Pháp luật bảo vệ quyền riêng tư của công dân trên mạng.'),
    Q('Khi tài khoản bị hack/giả mạo, em cần:', ['Đăng status thách thức hacker', 'Lập tài khoản giả khác đi lừa', 'Im lặng', 'Báo nhà cung cấp dịch vụ, đổi mật khẩu, báo bạn bè đề phòng'], 3, 'Hành động nhanh và đúng giúp giảm thiệt hại.'),
  ]),

  // ============================================================
  // CHỦ ĐỀ E — ỨNG DỤNG TIN HỌC (T23–32)
  // ============================================================
  M(23, 'Soạn thảo văn bản — nhập văn bản', [
    Q('Phần mềm soạn thảo văn bản phổ biến:', ['Chrome', 'Photoshop', 'Microsoft Word, LibreOffice Writer, Google Docs', 'Zalo (ứng dụng chat, gọi điện)'], 2, 'Đây là các phần mềm soạn thảo phổ biến.'),
    Q('Để xuống dòng (tạo đoạn mới), em nhấn phím:', ['Space (chèn dấu cách giữa từ)', 'Enter', 'Shift (gõ chữ hoa tạm thời)', 'Tab (thụt đầu dòng)'], 1, 'Enter dùng để kết thúc đoạn, sang đoạn mới.'),
    Q('Để gõ chữ HOA tạm thời, em giữ phím:', ['Ctrl (kết hợp phím tắt, ví dụ Ctrl+C)', 'Shift', 'Alt (kết hợp mở menu)', 'Tab (di chuyển sang ô bên phải)'], 1, 'Shift + chữ cho ra chữ hoa.'),
    Q('Để bật/tắt gõ HOA liên tục, em dùng phím:', ['Scroll Lock', 'Shift (chỉ gõ hoa khi giữ phím)', 'Caps Lock', 'Num Lock'], 2, 'Caps Lock bật/tắt chế độ gõ hoa.'),
    Q('Khi gõ tiếng Việt, em thường dùng bộ gõ:', ['Unikey, Vietkey (kiểu Telex hoặc VNI)', 'Photoshop', 'Excel (phần mềm bảng tính)', 'PowerPoint'], 0, 'Unikey/Vietkey là phần mềm hỗ trợ gõ tiếng Việt.'),
    Q('Quy tắc gõ văn bản đúng chuẩn:', ['Dấu chấm/phẩy đứng SÁT từ trước, có 1 khoảng trắng sau', 'Không cần khoảng trắng', 'Mỗi từ một dòng', 'Có khoảng trắng cả trước và sau dấu chấm'], 0, 'Quy tắc soạn thảo cơ bản.'),
  ]),

  M(24, 'Soạn thảo văn bản — định dạng kí tự', [
    Q('Để in ĐẬM văn bản, em chọn văn bản rồi nhấn:', ['Ctrl + B', 'Ctrl + S', 'Ctrl + U', 'Ctrl + I'], 0, 'Ctrl + B = Bold (in đậm).'),
    Q('Để in NGHIÊNG, em nhấn:', ['Ctrl + N', 'Ctrl + I', 'Ctrl + B', 'Ctrl + U'], 1, 'Ctrl + I = Italic (in nghiêng).'),
    Q('Để GẠCH CHÂN, em nhấn:', ['Ctrl + U', 'Ctrl + I', 'Ctrl + L', 'Ctrl + B'], 0, 'Ctrl + U = Underline (gạch chân).'),
    Q('Để thay đổi PHÔNG CHỮ, em dùng:', ['Phím F1', 'Hộp chọn Font trên thanh công cụ (vd Times New Roman, Arial)', 'Phím Esc', 'Phím F5'], 1, 'Phông chữ chọn từ danh sách Font.'),
    Q('Cỡ chữ (font size) thường dùng cho bài tập là:', ['12 – 14 pt', '4 pt', '6 pt (rất nhỏ)', '72 pt (rất to)'], 0, 'Cỡ 12–14 pt là chuẩn cho văn bản học tập.'),
    Q('Để đổi MÀU CHỮ, em dùng nút:', ['Print (in văn bản ra giấy)', 'Highlight (tô vàng)', 'Font Color (chữ A có thanh màu)', 'Save (lưu tệp văn bản)'], 2, 'Font Color thay đổi màu kí tự.'),
  ]),

  M(25, 'Định dạng đoạn — căn lề, giãn dòng, thụt đầu dòng', [
    Q('Để căn GIỮA đoạn văn, phím tắt:', ['Ctrl + L', 'Ctrl + J', 'Ctrl + R', 'Ctrl + E'], 3, 'Ctrl + E = Center.'),
    Q('Căn lề TRÁI:', ['Ctrl + L', 'Ctrl + E', 'Ctrl + J', 'Ctrl + R'], 0, 'Ctrl + L = Align Left.'),
    Q('Căn lề PHẢI:', ['Ctrl + L', 'Ctrl + J', 'Ctrl + R', 'Ctrl + E'], 2, 'Ctrl + R = Align Right.'),
    Q('Căn đều hai bên (justify):', ['Ctrl + E', 'Ctrl + R', 'Ctrl + L', 'Ctrl + J'], 3, 'Ctrl + J = Justify.'),
    Q('Giãn dòng (line spacing) thường dùng cho văn bản:', ['Không cần thiết lập', '0.1 (chồng lên nhau)', '1.0 – 1.5 (đơn / một rưỡi)', '5.0 (rất xa)'], 2, 'Giãn dòng 1.5 dễ đọc cho bài tập.'),
    Q('Thụt đầu dòng (first line indent) là:', ['Phông chữ đặc biệt', 'Cỡ chữ lớn', 'Khoảng cách lùi vào ở dòng đầu mỗi đoạn', 'Khoảng cách giữa các đoạn'], 2, 'Thụt đầu dòng giúp phân biệt các đoạn rõ hơn.'),
  ]),

  M(26, 'Chèn hình ảnh và kí tự đặc biệt', [
    Q('Để chèn HÌNH ẢNH từ máy tính vào Word, em chọn:', ['File → Print', 'Insert → Pictures → This Device', 'View → Zoom', 'Home → Bold'], 1, 'Menu Insert chứa lệnh chèn ảnh.'),
    Q('Để chèn KÍ TỰ ĐẶC BIỆT (vd ©, ™, ☺), em chọn:', ['Home → Font', 'Insert → Symbol', 'File → Save', 'View → Layout'], 1, 'Insert > Symbol có bảng kí tự đặc biệt.'),
    Q('Sau khi chèn ảnh, để thay đổi kích thước, em:', ['Phải xóa ảnh và chèn lại', 'Kéo các "tay nắm" (handles) ở góc ảnh', 'Đóng file', 'In ra giấy rồi cắt'], 1, 'Kéo tay nắm để chỉnh kích thước ảnh.'),
    Q('Để ảnh KHÔNG bị méo, em kéo handle ở:', ['Ngoài trang', 'Trung tâm', 'Góc ảnh (giữ tỉ lệ)', 'Cạnh giữa (sẽ bị méo)'], 2, 'Kéo handle góc giúp giữ tỉ lệ ảnh.'),
    Q('Tùy chọn "Wrap Text" trong Word dùng để:', ['Quy định cách văn bản chảy quanh ảnh', 'Đổi tên ảnh', 'In ảnh', 'Xóa ảnh'], 0, 'Wrap Text quyết định mối quan hệ giữa ảnh và văn bản.'),
    Q('Ảnh được chèn vào Word:', ['Được nhúng vào tệp .docx, tệp có thể to ra', 'Bị xóa khi lưu', 'Được lưu vào ổ C riêng', 'Không làm thay đổi kích thước tệp'], 0, 'Ảnh nhúng làm tăng dung lượng tệp.'),
  ]),

  M(27, 'Bảng biểu — chèn bảng', [
    Q('Để chèn BẢNG vào Word, em chọn:', ['View → Ruler', 'File → Open', 'Insert → Table', 'Home → Bold'], 2, 'Menu Insert có lệnh Table.'),
    Q('Bảng có 3 cột, 4 hàng thì có bao nhiêu ô?', ['12', '7', '1', '34'], 0, '3 × 4 = 12 ô.'),
    Q('Để di chuyển sang ô bên phải, phím:', ['Tab', 'Enter (xuống dòng trong ô)', 'Shift (giữ để gõ chữ hoa)', 'Esc (thoát thao tác đang làm)'], 0, 'Tab nhảy sang ô tiếp theo.'),
    Q('Để thêm 1 hàng mới ở cuối bảng, em đặt con trỏ ở ô cuối và nhấn:', ['Tab', 'Ctrl + Z', 'Esc (thoát chế độ chỉnh sửa bảng)', 'Alt + F4'], 0, 'Tab tại ô cuối tự tạo hàng mới.'),
    Q('Bảng trong văn bản thường dùng để:', ['In thẻ học sinh', 'Làm to văn bản', 'Trình bày dữ liệu có cấu trúc (danh sách, thời khóa biểu…)', 'Thay thế hình ảnh'], 2, 'Bảng giúp trình bày dữ liệu dạng hàng-cột.'),
    Q('Để xóa cả bảng, em chọn:', ['In bảng ra', 'Đóng Word', 'Chọn bảng → Layout → Delete → Delete Table', 'Khởi động lại máy'], 2, 'Menu Layout của Table Tools cho phép xóa bảng.'),
  ]),

  M(28, 'Bảng biểu — gộp ô, đường viền, định dạng', [
    Q('Gộp ô (Merge Cells) là:', ['Xóa nội dung trong ô đã chọn', 'Đổi màu ô', 'Tách 1 ô thành nhiều ô', 'Hợp nhiều ô thành 1 ô'], 3, 'Merge giúp tạo ô tiêu đề trải rộng.'),
    Q('Tách ô (Split Cells) là:', ['Gộp các ô', 'Tô màu', 'Chia 1 ô thành nhiều ô con', 'Xóa hàng hoặc cột trong bảng'], 2, 'Split chia ô thành nhiều ô con.'),
    Q('Để có đường viền cho cả bảng, em dùng:', ['Spell Check', 'Insert Image', 'Borders (All Borders)', 'Save (lưu lại tệp văn bản)'], 2, 'Lệnh Borders điều khiển đường viền bảng.'),
    Q('Đổ màu nền cho ô (shading) dùng:', ['Insert → Picture', 'View → Zoom', 'File → Print', 'Table Design → Shading'], 3, 'Shading dùng để tô màu nền cho ô.'),
    Q('Khi cần in danh sách lớp gồm STT, Họ tên, Điểm thì:', ['Dùng kí tự đặc biệt', 'Nên dùng bảng để xếp cột rõ ràng', 'Gõ tất cả thành đoạn văn dài', 'Dùng hình ảnh'], 1, 'Bảng phù hợp với dữ liệu có cấu trúc.'),
    Q('Tiêu đề bảng (header) nên:', ['Để trống', 'Viết chữ thật nhỏ', 'Viết chữ thật to bằng cả ô', 'Được in đậm, căn giữa, có màu nền nhẹ để nổi bật'], 3, 'Định dạng tiêu đề giúp bảng rõ ràng.'),
  ]),

  M(29, 'Sơ đồ tư duy (Mind Map)', [
    Q('Sơ đồ tư duy là:', ['Sơ đồ thể hiện ý tưởng theo cấu trúc cây/phân nhánh từ chủ đề trung tâm', 'Một loại đồ thị thống kê', 'Một bức tranh nghệ thuật', 'Một loại bảng'], 0, 'Mind map biểu diễn ý tưởng có liên kết phân nhánh.'),
    Q('Phần mềm/ứng dụng vẽ sơ đồ tư duy:', ['Notepad', 'Word (chỉ phần soạn thảo)', 'Paint cơ bản', 'XMind, MindMaple, Coggle, MindMup'], 3, 'Có nhiều ứng dụng chuyên cho mind map.'),
    Q('Một sơ đồ tư duy bắt đầu từ:', ['Chủ đề chính ở trung tâm, các nhánh tỏa ra', 'Một đoạn văn', 'Một bảng số liệu', 'Một danh sách thẳng đứng'], 0, 'Mind map có dạng phân nhánh tỏa ra.'),
    Q('Lợi ích của sơ đồ tư duy:', ['Tốn giấy hơn văn bản', 'Khó nhớ', 'Khó vẽ', 'Trực quan, dễ ghi nhớ, kích thích sáng tạo'], 3, 'Mind map giúp tổ chức ý tưởng và ghi nhớ tốt.'),
    Q('Khi vẽ sơ đồ tư duy về môn "Tin học 6", chủ đề trung tâm là:', ['Tên lớp', '"Tin học 6"', 'Tên giáo viên', 'Một bài hát'], 1, 'Chủ đề trung tâm là nội dung chính cần triển khai.'),
    Q('Để có sơ đồ tư duy rõ ràng:', ['Dùng cùng một màu', 'Không có chủ đề trung tâm', 'Dùng từ khóa ngắn, màu sắc khác nhau cho từng nhánh', 'Viết dài như văn bản'], 2, 'Mind map hiệu quả khi dùng từ khóa và màu phân biệt.'),
  ]),

  M(30, 'Trình chiếu — tạo slide cơ bản', [
    Q('Phần mềm trình chiếu phổ biến:', ['Chrome', 'Notepad', 'Microsoft PowerPoint, Google Slides, LibreOffice Impress', 'Photoshop'], 2, 'Đây là các phần mềm trình chiếu thông dụng.'),
    Q('Để tạo slide MỚI trong PowerPoint, em chọn:', ['Insert → Header', 'File → Print', 'Home → New Slide', 'View → Zoom'], 2, 'New Slide trên tab Home.'),
    Q('Mỗi slide nên:', ['Có cỡ chữ 6 pt', 'Ngắn gọn, ít chữ, dùng hình minh họa', 'Chỉ có hình, không có chữ', 'Đầy chữ kín cả slide'], 1, 'Slide hiệu quả là slide trực quan.'),
    Q('Để chuyển sang slide TIẾP THEO khi trình chiếu, em nhấn:', ['Phím Space / Enter / mũi tên phải', 'Phím F1', 'Phím Caps Lock', 'Phím Esc'], 0, 'Các phím này dùng để qua slide.'),
    Q('Phím tắt bắt đầu trình chiếu từ slide đầu tiên:', ['F5', 'F9 (cập nhật trường dữ liệu)', 'F2 (đổi tên tệp/thư mục)', 'F1 (mở cửa sổ trợ giúp)'], 0, 'F5 bắt đầu trình chiếu từ đầu.'),
    Q('Để dừng trình chiếu, nhấn:', ['F5 (bắt đầu lại trình chiếu từ đầu)', 'Ctrl + S', 'Esc', 'Enter (chuyển sang slide tiếp theo)'], 2, 'Esc thoát chế độ trình chiếu.'),
  ]),

  M(31, 'Trình chiếu — bố cục slide và nội dung', [
    Q('Bố cục (Layout) slide phổ biến gồm:', ['Là tên tệp', 'Là tên người trình bày', 'Chỉ một loại', 'Title slide, Title and Content, Two Content, Blank…'], 3, 'PowerPoint cung cấp nhiều layout sẵn.'),
    Q('Slide tiêu đề (Title slide) thường dùng cho:', ['Slide không có gì', 'Slide cuối', 'Slide đầu tiên — tên bài và tác giả', 'Slide chứa nhiều bảng'], 2, 'Title slide mở đầu bài thuyết trình.'),
    Q('Một bài thuyết trình tốt thường có:', ['Chỉ có kết luận', 'Mở đầu — nội dung chính — kết luận', 'Không có mở đầu', 'Toàn slide trắng'], 1, 'Cấu trúc 3 phần rõ ràng.'),
    Q('Phông chữ nên chọn cho slide:', ['Phông chữ thư pháp cỡ 6 pt', 'Phông trang trí khó đọc', 'Phông bằng kí hiệu lạ', 'Phông dễ đọc, cỡ ≥ 18 pt (vd Arial, Calibri)'], 3, 'Cần dễ đọc khi nhìn từ xa.'),
    Q('Mỗi slide nên có thời lượng nói khoảng:', ['10 giây', '1 – 2 phút', '1 giờ', '20 phút'], 1, 'Quy tắc gợi ý để bài thuyết trình cô đọng.'),
    Q('Khi thuyết trình, em nên:', ['Nói thêm với khán giả, không chỉ đọc nguyên slide', 'Quay lưng vào khán giả', 'Đứng yên không tương tác', 'Đọc nguyên chữ trên slide'], 0, 'Slide chỉ là hỗ trợ, phần thuyết trình của người nói quan trọng hơn.'),
  ]),

  M(32, 'Trình chiếu — chèn ảnh, hiệu ứng', [
    Q('Để chèn ẢNH vào slide:', ['View → Slide Master', 'File → Print', 'Insert → Pictures', 'Home → Bold'], 2, 'Insert chứa các tùy chọn chèn đối tượng.'),
    Q('Hiệu ứng chuyển slide (Transitions) là:', ['Hiệu ứng cho chữ trong cùng slide', 'Một loại bảng', 'Một loại phông chữ', 'Hiệu ứng khi chuyển từ slide này sang slide khác'], 3, 'Transition áp dụng cho việc chuyển slide.'),
    Q('Hiệu ứng cho đối tượng (Animations) là:', ['Đổi tên tệp', 'In màu', 'Hiệu ứng cho chữ/ảnh xuất hiện, biến mất trong cùng slide', 'Sao lưu'], 2, 'Animation hoạt cho các đối tượng trong slide.'),
    Q('Sử dụng hiệu ứng nên:', ['Mỗi chữ một hiệu ứng riêng', 'Phải có nhạc nền lớn', 'Vừa phải, có chủ đích, tránh lạm dụng', 'Càng nhiều càng tốt'], 2, 'Hiệu ứng quá nhiều làm rối khán giả.'),
    Q('Để chèn ÂM THANH/VIDEO vào slide:', ['Insert → Audio / Video', 'File → New', 'View → Zoom', 'Home → Font Color'], 0, 'Insert có lệnh chèn media.'),
    Q('Khi xuất bài, em nên lưu thêm dạng:', ['Excel .xlsx', 'Notepad .txt (mất hiệu ứng)', 'Word .docx', 'PDF (để chia sẻ đúng định dạng) hoặc PowerPoint Show'], 3, 'PDF giữ nguyên bố cục khi mở trên máy khác.'),
  ]),

  // ============================================================
  // CHỦ ĐỀ F — GIẢI QUYẾT VẤN ĐỀ VỚI MÁY TÍNH (T33–36)
  // ============================================================
  M(33, 'Khái niệm thuật toán', [
    Q('Thuật toán là:', ['Dãy hữu hạn các bước rõ ràng để giải quyết một bài toán', 'Một thiết bị nhập', 'Một loại mạng', 'Một phần cứng máy tính'], 0, 'Thuật toán là chuỗi các bước thực hiện cụ thể.'),
    Q('Đặc trưng của thuật toán:', ['Tính vô hạn', 'Không cần đầu vào, đầu ra', 'Tính xác định, tính dừng (hữu hạn bước), tính đúng đắn', 'Tính ngẫu nhiên'], 2, 'Thuật toán phải hữu hạn và đúng đắn.'),
    Q('Ví dụ thuật toán trong đời sống:', ['Một bài thơ ngẫu nhiên', 'Một bức tranh', 'Quy trình pha mì tôm: đun nước → cho mì → cho gia vị → ăn', 'Một bài hát'], 2, 'Quy trình rõ ràng theo bước là một thuật toán đơn giản.'),
    Q('Đầu VÀO (Input) của thuật toán cộng 2 số là:', ['Một bảng', 'Tổng của chúng', 'Một bài văn', 'Hai số cần cộng'], 3, 'Input là dữ liệu ban đầu cần xử lí.'),
    Q('Đầu RA (Output) của thuật toán cộng 2 số là:', ['Tổng của hai số đó', 'Hệ điều hành', 'Hai số ban đầu', 'Phép cộng'], 0, 'Output là kết quả thuật toán trả về.'),
    Q('Vai trò của thuật toán trong lập trình:', ['Là phần mềm diệt virus', 'Là phần cứng', 'Là tên chương trình', 'Là "bản thiết kế" để viết chương trình'], 3, 'Thuật toán là cốt lõi trước khi viết mã.'),
  ]),

  M(34, 'Mô tả thuật toán — liệt kê và sơ đồ khối', [
    Q('Hai cách mô tả thuật toán phổ biến:', ['Liệt kê các bước bằng lời và sơ đồ khối', 'Đọc và chép', 'Vẽ tranh và làm thơ', 'Hát và múa'], 0, 'Liệt kê và sơ đồ khối là hai cách chuẩn.'),
    Q('Trong sơ đồ khối, hình OVAN (elip) biểu diễn:', ['Vòng lặp', 'Phép toán', 'Bắt đầu / kết thúc', 'Điều kiện'], 2, 'Hình ovan là điểm bắt đầu/kết thúc.'),
    Q('Hình CHỮ NHẬT biểu diễn:', ['Kết thúc', 'Bắt đầu', 'Bước xử lí / phép tính', 'Điều kiện'], 2, 'Chữ nhật là khối lệnh thực hiện.'),
    Q('Hình THOI biểu diễn:', ['Kết thúc', 'Bắt đầu', 'Phép tính', 'Điều kiện (đúng/sai, có/không)'], 3, 'Hình thoi dùng cho điều kiện rẽ nhánh.'),
    Q('Hình BÌNH HÀNH biểu diễn:', ['Kết thúc', 'Nhập (input) hoặc xuất (output) dữ liệu', 'Điều kiện', 'Phép tính'], 1, 'Hình bình hành dùng cho nhập/xuất.'),
    Q('Các mũi tên trong sơ đồ khối thể hiện:', ['Tốc độ máy tính', 'Tên tệp', 'Phần cứng', 'Thứ tự thực hiện các bước'], 3, 'Mũi tên chỉ luồng thực hiện.'),
  ]),

  M(35, 'Cấu trúc điều khiển — tuần tự, rẽ nhánh, lặp', [
    Q('Có mấy cấu trúc điều khiển cơ bản?', ['1: chỉ tuần tự', '10', '5: tuần tự, nhảy, dừng, lặp, kết thúc', '3: tuần tự, rẽ nhánh, lặp'], 3, 'Ba cấu trúc cơ bản trong lập trình.'),
    Q('Cấu trúc TUẦN TỰ là:', ['Lặp lại', 'Các bước thực hiện lần lượt từ trên xuống', 'Bỏ qua một số bước', 'Thực hiện song song'], 1, 'Tuần tự là thực hiện theo thứ tự.'),
    Q('Cấu trúc RẼ NHÁNH dùng khi:', ['Cần lặp lại', 'Tất cả luôn chạy như nhau', 'Không cần điều kiện', 'Tùy điều kiện đúng/sai mà thực hiện các bước khác nhau (nếu… thì…)'], 3, 'Rẽ nhánh = if/else.'),
    Q('Ví dụ về rẽ nhánh:', ['Nếu trời mưa thì mang ô, nếu không thì không mang', 'Lặp lại bài hát', 'Đếm từ 1 đến 10', 'Đi học mỗi ngày'], 0, 'Có điều kiện và hành động tương ứng = rẽ nhánh.'),
    Q('Cấu trúc LẶP dùng khi:', ['Chỉ làm 1 lần', 'Cần thực hiện một việc nhiều lần', 'Chỉ dùng cho rẽ nhánh', 'Không bao giờ làm'], 1, 'Lặp = while/for.'),
    Q('Ví dụ về lặp:', ['Mở 1 trang web', 'Đếm từ 1 đến 100', 'Tính 2 + 3', 'In 1 tờ giấy'], 1, 'Đếm liên tục là một dạng lặp.'),
  ]),

  M(36, 'Ôn tập Học kì 2', [
    Q('Phần mềm nguồn mở khác phần mềm thương mại ở chỗ:', ['Luôn tốt hơn', 'Công khai mã nguồn, có thể dùng/sửa tự do (theo giấy phép)', 'Luôn xấu hơn', 'Không có khác biệt'], 1, 'Open source mở mã nguồn cho cộng đồng.'),
    Q('Trước khi chia sẻ một tin "chấn động" trên mạng, em nên:', ['Bình luận theo cảm xúc', 'Chia sẻ ngay', 'Kiểm chứng từ nguồn uy tín', 'Bỏ qua việc xác thực'], 2, 'Tránh lan truyền tin giả.'),
    Q('Để chèn bảng vào văn bản Word, em chọn:', ['Home → Font', 'File → Save', 'View → Zoom', 'Insert → Table'], 3, 'Insert > Table tạo bảng.'),
    Q('Phím tắt căn giữa đoạn:', ['Ctrl + R', 'Ctrl + E', 'Ctrl + B', 'Ctrl + L'], 1, 'Ctrl + E = Center.'),
    Q('Để bắt đầu trình chiếu PowerPoint từ slide đầu, nhấn:', ['F1 (mở cửa sổ trợ giúp Help)', 'Esc (thoát chế độ trình chiếu)', 'F5', 'Ctrl + S'], 2, 'F5 trình chiếu từ đầu.'),
    Q('Trong sơ đồ khối, hình THOI biểu diễn:', ['Điều kiện rẽ nhánh', 'Nhập dữ liệu', 'Bắt đầu', 'Phép tính'], 0, 'Hình thoi = điều kiện.'),
    Q('Cấu trúc lặp dùng khi:', ['Không liên quan', 'Là một loại phần cứng', 'Cần thực hiện việc gì đó nhiều lần', 'Chỉ chạy 1 lần'], 2, 'Lặp giúp tránh viết lại nhiều bước giống nhau.'),
    Q('Thuật toán có đặc trưng QUAN TRỌNG nào?', ['Chỉ chạy trên điện thoại', 'Không cần đúng kết quả', 'Chạy mãi không dừng', 'Tính dừng (kết thúc sau hữu hạn bước)'], 3, 'Một thuật toán đúng phải kết thúc và cho kết quả đúng.'),
  ]),
];

export const S6TH_SCENARIOS = indexBy(S6TH_WEEKS);
