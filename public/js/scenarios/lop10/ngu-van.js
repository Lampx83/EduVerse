// ============================================================
// Lớp 10 · NGỮ VĂN — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Ngữ văn 10: VHDG, văn học trung đại VN, thơ Đường, thơ Nôm…).
// ID prefix: "H10NV-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10NV', 'ngu-van', n, title, qs, opts);

export const H10NV_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Khái quát văn học dân gian Việt Nam', [
    Q('Văn học dân gian là sáng tác?', ['Tập thể nhân dân, truyền miệng', 'Văn học viết', 'Của tác giả cá nhân được ghi tên', 'Chỉ có ở thời hiện đại'], 0, 'VHDG là sáng tác tập thể, lưu truyền chủ yếu bằng miệng.'),
    Q('Đặc trưng cơ bản nào KHÔNG thuộc VHDG?', ['Tính truyền miệng', 'Tính cá thể tác giả', 'Tính dị bản', 'Tính tập thể'], 1, 'VHDG không có tác giả cá nhân cố định.'),
    Q('Thể loại nào sau đây là VHDG?', ['Hồi ký', 'Tiểu thuyết', 'Tản văn', 'Truyện cổ tích'], 3, 'Truyện cổ tích là thể loại tự sự dân gian.'),
    Q('Sử thi của dân tộc nào ở Tây Nguyên?', ['Ê-đê (Đăm Săn)', 'Mường (Đẻ đất đẻ nước)', 'Thái (Tiễn dặn người yêu)', 'Ba-na (Xinh Nhã)'], 0, 'Sử thi Đăm Săn của người Ê-đê.'),
    Q('Truyền thuyết khác cổ tích ở điểm?', ['Ngắn hơn', 'Hoàn toàn hư cấu', 'Gắn với sự kiện và nhân vật lịch sử', 'Có vần điệu'], 2, 'Truyền thuyết bám vào sự thật lịch sử (dù có yếu tố kì ảo).'),
    Q('Câu tục ngữ "Ăn quả nhớ kẻ trồng cây" thuộc thể loại?', ['Ca dao', 'Sử thi', 'Tục ngữ', 'Truyện cười'], 2, 'Câu nói ngắn, đúc kết kinh nghiệm/đạo lý.'),
  ]),

  M(2, 'Truyện An Dương Vương và Mị Châu – Trọng Thuỷ', [
    Q('Truyện An Dương Vương thuộc thể loại?', ['Cổ tích', 'Ngụ ngôn', 'Truyền thuyết', 'Truyện cười'], 2, 'Là truyền thuyết gắn với lịch sử Âu Lạc.'),
    Q('An Dương Vương xây thành ở đâu?', ['Phong Châu', 'Cổ Loa', 'Thăng Long', 'Hoa Lư'], 1, 'Thành Cổ Loa (nay thuộc Đông Anh, Hà Nội).'),
    Q('Ai giúp An Dương Vương xây thành?', ['Lạc Long Quân', 'Thánh Gióng', 'Rùa Vàng (Thần Kim Quy)', 'Sơn Tinh'], 2, 'Thần Kim Quy giúp xây thành và cho nỏ thần.'),
    Q('Trọng Thuỷ là con của ai?', ['Triệu Đà', 'Lạc Long Quân', 'Quang Trung', 'An Dương Vương'], 0, 'Trọng Thuỷ là con Triệu Đà — người nước Nam Việt.'),
    Q('Bi kịch của Mị Châu thể hiện bài học?', ['Tin tưởng tuyệt đối', 'Đoàn kết gia đình', 'Tình yêu là tất cả', 'Cảnh giác trước kẻ thù xâm lược'], 3, 'Mị Châu tin chồng nên đất nước mất.'),
    Q('Hình ảnh "ngọc trai – giếng nước" tượng trưng?', ['Chiến thắng', 'Cái chết tàn nhẫn', 'Sự hoá giải, nỗi oan và niềm xót thương', 'Sự phản bội'], 2, 'Hình ảnh đẹp mang ý nghĩa hoá giải, thương xót Mị Châu.'),
  ]),

  M(3, 'Truyện cổ tích Tấm Cám', [
    Q('Tấm Cám thuộc loại cổ tích?', ['Sinh hoạt thế tục', 'Loài vật', 'Thần kỳ', 'Sinh hoạt'], 2, 'Tấm Cám là cổ tích thần kỳ (có yếu tố hoang đường).'),
    Q('Bụt hiện ra giúp Tấm khi nào?', ['Khi Tấm chiến thắng', 'Khi Cám đến', 'Khi đi hội', 'Khi Tấm khóc/gặp khó khăn'], 3, 'Bụt — biểu tượng cứu giúp người tốt — hiện mỗi khi Tấm khóc.'),
    Q('Tấm hoá thân lần lượt thành?', ['Chỉ quả thị', 'Chim vàng anh – cây xoan – khung cửi – quả thị', 'Con cá', 'Cây hoa'], 1, 'Bốn lần hoá thân thể hiện sức sống mãnh liệt.'),
    Q('Mâu thuẫn chính trong truyện?', ['Tâm và Cám là chị em', 'Giàu và nghèo', 'Thiện và ác (Tấm vs mẹ con Cám)', 'Vua và dân'], 2, 'Xung đột thiện – ác là tư tưởng cốt lõi.'),
    Q('Kết thúc truyện thể hiện quan niệm?', ['Số phận con người do trời', 'Người tốt phải chịu khổ', 'Ở hiền gặp lành, ác giả ác báo', 'Phụ nữ phải nhường nhịn'], 2, 'Quan niệm dân gian về công bằng.'),
    Q('Yếu tố thần kỳ trong Tấm Cám có vai trò?', ['Chỉ để vui', 'Không có ý nghĩa', 'Giúp người tốt vượt qua khó khăn, hiện thực hoá ước mơ công bằng', 'Mê tín dị đoan'], 2, 'Yếu tố thần kỳ hỗ trợ cái thiện thắng cái ác.'),
  ]),

  M(4, 'Ca dao Việt Nam — Ca dao than thân, yêu thương tình nghĩa', [
    Q('Ca dao là?', ['Tục ngữ', 'Truyện kể dân gian', 'Sử thi', 'Lời thơ trữ tình dân gian, thường kết hợp với âm nhạc'], 3, 'Ca dao là lời thơ trữ tình của nhân dân.'),
    Q('"Thân em như tấm lụa đào…" là kiểu ca dao?', ['Than thân', 'Lao động', 'Hài hước', 'Châm biếm'], 0, 'Mô-típ "Thân em…" là ca dao than thân của phụ nữ.'),
    Q('Hình ảnh "cái cò" trong ca dao thường biểu trưng?', ['Sự giàu sang', 'Vua chúa', 'Người nông dân, người phụ nữ vất vả', 'Thiên nhiên đẹp'], 2, 'Cò là biểu tượng người nông dân/phụ nữ Việt cần cù mà khổ cực.'),
    Q('Ca dao "Công cha như núi Thái Sơn…" nói về?', ['Tình cảm gia đình, công ơn cha mẹ', 'Lòng yêu nước', 'Lao động', 'Tình yêu đôi lứa'], 0, 'So sánh công cha nghĩa mẹ với những hình ảnh lớn lao.'),
    Q('Biện pháp tu từ phổ biến trong ca dao?', ['Liệt kê khoa học', 'Trích dẫn', 'So sánh, ẩn dụ, điệp ngữ', 'Chú thích'], 2, 'Ca dao giàu hình ảnh so sánh, ẩn dụ.'),
    Q('Thể thơ chủ đạo của ca dao Việt Nam?', ['Lục bát', 'Thất ngôn tứ tuyệt', 'Song thất lục bát', 'Đường luật'], 0, 'Đa số ca dao viết bằng thể lục bát.'),
  ]),

  M(5, 'Tỏ lòng (Thuật hoài) — Phạm Ngũ Lão', [
    Q('Tác giả của bài Tỏ lòng?', ['Phạm Ngũ Lão', 'Nguyễn Trãi', 'Lý Thường Kiệt', 'Trần Quốc Tuấn'], 0, 'Phạm Ngũ Lão (1255–1320), danh tướng nhà Trần.'),
    Q('Bài thơ viết bằng chữ?', ['Hán', 'Quốc ngữ', 'Chữ Nôm', 'Phạn (Sanskrit)'], 0, 'Thuật hoài viết bằng chữ Hán theo thể thất ngôn tứ tuyệt.'),
    Q('Hình ảnh "hoành sóc" có nghĩa?', ['Giương cung', 'Cầm dao', 'Cầm ngang ngọn giáo', 'Mang gươm'], 2, 'Hoành sóc = cầm ngang ngọn giáo, hình ảnh tráng sĩ.'),
    Q('"Nợ công danh" trong bài thơ là?', ['Trách nhiệm lập công với non sông', 'Tình cảm', 'Học vấn', 'Tiền nong'], 0, 'Quan niệm nho gia về việc lập công danh cho Tổ quốc.'),
    Q('"Tu thính nhân gian thuyết Vũ Hầu" nói về?', ['Lời chúc tụng', 'Sự than thở', 'Sự tự hào', 'Nỗi thẹn khi nghe người đời ca ngợi Gia Cát Lượng'], 3, 'Tác giả thẹn vì chưa lập công như Vũ Hầu Gia Cát Lượng.'),
    Q('Bài thơ thể hiện vẻ đẹp con người thời?', ['Lê sơ (hào khí Lam Sơn)', 'Nguyễn', 'Trần (hào khí Đông A)', 'Lý (hào khí Thăng Long)'], 2, 'Hào khí Đông A đời Trần — quyết tâm chống Nguyên Mông.'),
  ]),

  M(6, 'Cảnh ngày hè (Bảo kính cảnh giới 43) — Nguyễn Trãi', [
    Q('Nguyễn Trãi quê ở?', ['Hải Dương (làng Chi Ngại - Nhị Khê)', 'Hà Nam', 'Nghệ An', 'Thái Bình'], 0, 'Nguyễn Trãi quê Chi Ngại, sau dời về Nhị Khê (Hà Nội).'),
    Q('Bài "Cảnh ngày hè" nằm trong tập?', ['Quốc âm thi tập', 'Ức Trai thi tập', 'Bình Ngô đại cáo', 'Dư địa chí'], 0, 'Quốc âm thi tập — thơ Nôm của Nguyễn Trãi.'),
    Q('Thể thơ bài này?', ['Thất ngôn bát cú Đường luật', 'Lục bát', 'Thất ngôn xen lục ngôn', 'Song thất lục bát'], 2, 'Bài có câu 6 chữ xen vào — đặc trưng Nôm Đường luật của Nguyễn Trãi.'),
    Q('Bức tranh cảnh ngày hè gợi điều gì?', ['Lạnh lẽo', 'Sự sống tràn đầy, sinh động', 'Hoang vắng', 'U buồn cô đơn'], 1, 'Màu xanh hoè lục, lựu đỏ, sen hồng — thiên nhiên rộn ràng.'),
    Q('"Dẽ có Ngu cầm đàn một tiếng…" thể hiện?', ['Khát vọng riêng tư', 'Buồn vì xa nhà', 'Khát vọng cuộc sống nhân dân ấm no, hạnh phúc', 'Tiếc nuối quá khứ'], 2, 'Nguyễn Trãi mơ ước có đàn vua Ngu để dân khắp nơi đủ giàu.'),
    Q('Tư tưởng nổi bật của Nguyễn Trãi qua bài?', ['Hưởng thụ', 'Yêu thiên nhiên thuần tuý', 'Ẩn dật xa lánh', 'Lo trước thiên hạ, yêu nước thương dân'], 3, 'Tư tưởng nhân nghĩa — lo cho dân — xuyên suốt thơ Ức Trai.'),
  ]),

  M(7, 'Bình Ngô đại cáo (Phần 1) — Nguyễn Trãi', [
    Q('Bình Ngô đại cáo được Nguyễn Trãi viết theo lệnh ai?', ['Hồ Quý Ly', 'Lê Lợi', 'Trần Hưng Đạo', 'Lê Thánh Tông'], 1, 'Nguyễn Trãi thừa lệnh Lê Lợi viết sau khi đánh tan quân Minh.'),
    Q('Bài cáo viết năm?', ['1418', '1500', '1428', '1418–1427'], 2, 'Hoàn thành đầu năm 1428.'),
    Q('Bình Ngô đại cáo được coi là?', ['Hịch tướng sĩ thứ hai', 'Bản tuyên ngôn độc lập thứ hai của Việt Nam', 'Một bài chiếu dời đô', 'Bài thơ tình'], 1, 'Sau Nam quốc sơn hà, đây là tuyên ngôn độc lập lần 2.'),
    Q('"Việc nhân nghĩa cốt ở yên dân" nghĩa là?', ['Yên dân nghĩa là trung thành vua', 'Nhân nghĩa là tu thân', 'Đạo nhân nghĩa cốt ở chỗ làm cho dân được yên ổn', 'Nhân nghĩa là lễ phép'], 2, 'Nguyễn Trãi đặt "yên dân" lên hàng đầu của nhân nghĩa.'),
    Q('Tác giả nêu nền văn hiến VN qua điều gì?', ['Chỉ vua chúa', 'Phong tục, văn hiến, lãnh thổ, lịch sử, hào kiệt', 'Chỉ chiến công', 'Chỉ địa lý'], 1, 'Phần đầu liệt kê nhiều yếu tố khẳng định độc lập.'),
    Q('Thể loại "cáo" dùng để?', ['Báo cáo', 'Đối thoại', 'Vua công bố sự kiện trọng đại với toàn dân', 'Thư riêng'], 2, 'Cáo: thể văn nghị luận hùng biện công bố sự kiện trọng đại.'),
  ]),

  M(8, 'Bình Ngô đại cáo (Phần 2 — tội ác giặc Minh)', [
    Q('Phần tố cáo tội ác giặc Minh dùng giọng điệu?', ['Hài hước', 'Tôn kính', 'Bình thản', 'Căm phẫn, đau xót'], 3, 'Giọng văn đầy phẫn nộ, đau đớn trước cảnh dân lành bị tàn sát.'),
    Q('"Nướng dân đen trên ngọn lửa hung tàn" thuộc biện pháp?', ['Điệp ngữ', 'Ẩn dụ + phóng đại', 'So sánh', 'Hoán dụ thuần'], 1, 'Hình ảnh ẩn dụ kết hợp phóng đại, cực tả tội ác.'),
    Q('"Trúc Nam Sơn không ghi hết tội" nghĩa là?', ['Núi Nam Sơn cao', 'Tội ác giặc nhiều không kể xiết', 'Tre không dùng để ghi', 'Trúc rất quý'], 1, 'Phóng đại chỉ tội ác vô cùng tận.'),
    Q('Tội ác nào KHÔNG được liệt kê?', ['Giết hại dân lành', 'Vơ vét tài sản', 'Truyền bá đạo', 'Mở mang văn hoá tốt đẹp'], 3, 'Giặc Minh không mang điều tốt mà huỷ diệt.'),
    Q('Đoạn này thể hiện cảm hứng?', ['Cô đơn', 'Yêu nước căm thù giặc', 'Trữ tình lãng mạn', 'Hài hước'], 1, 'Cảm hứng nhân đạo, yêu nước, căm thù sâu sắc.'),
    Q('Lập luận của Nguyễn Trãi giàu sức thuyết phục nhờ?', ['Ngôi kể thứ nhất', 'Câu thơ ngắn', 'Dẫn chứng cụ thể + lý lẽ sắc bén + giọng văn hùng hồn', 'Vần điệu'], 2, 'Văn chính luận mẫu mực.'),
  ]),

  M(9, 'Hoàng Hạc Lâu — Thôi Hiệu', [
    Q('Hoàng Hạc Lâu là thơ?', ['Nguyễn', 'Tống (Trung Quốc)', 'Lý (Việt Nam)', 'Đường (Trung Quốc)'], 3, 'Thôi Hiệu là thi nhân đời Đường.'),
    Q('Hoàng Hạc Lâu nằm ở đâu?', ['Thăng Long', 'Lạc Dương', 'Hà Nội', 'Vũ Xương, Hồ Bắc, Trung Quốc'], 3, 'Lầu Hoàng Hạc bên sông Trường Giang.'),
    Q('Thể thơ của bài?', ['Thất ngôn bát cú Đường luật', 'Thất ngôn tứ tuyệt Đường luật', 'Tứ tuyệt', 'Lục bát'], 0, '8 câu × 7 chữ theo luật Đường.'),
    Q('Hai câu kết "Nhật mộ hương quan hà xứ thị / Yên ba giang thượng sử nhân sầu" thể hiện?', ['Giận dữ', 'Tả cảnh thuần tuý', 'Nỗi nhớ quê hương sâu lắng', 'Sự vui sướng'], 2, 'Nỗi sầu nhớ quê trong khói sóng trên sông.'),
    Q('Hình ảnh "hạc vàng đã bay đi" gợi?', ['Sự giàu sang', 'Chiến tranh', 'Niềm vui', 'Cảm thức về thời gian và sự mất mát'], 3, 'Hạc vàng — biểu tượng quá khứ vĩnh viễn không trở lại.'),
    Q('Bản dịch nổi tiếng nhất bài thơ này ở Việt Nam là của?', ['Tản Đà', 'Nguyễn Du', 'Xuân Diệu', 'Hồ Chí Minh'], 0, 'Tản Đà dịch "Hoàng Hạc Lâu" rất hay, được nhiều người yêu thích.'),
  ]),

  M(10, 'Tỳ bà hành — Bạch Cư Dị', [
    Q('Bạch Cư Dị là nhà thơ đời?', ['Đường', 'Hán', 'Nguyên', 'Thanh'], 0, 'Bạch Cư Dị (772–846), nhà thơ Đường nổi tiếng.'),
    Q('Tỳ bà hành thuộc thể?', ['Trường thiên trường ca', 'Bát cú', 'Tứ tuyệt', 'Lục bát'], 0, 'Hành — thể trường thiên kể chuyện.'),
    Q('Nhân vật trung tâm là?', ['Thi nhân', 'Tướng quân', 'Vị quan bị giáng chức nơi Tầm Dương', 'Người ca nữ đánh đàn tỳ bà'], 3, 'Bài thơ kể chuyện cuộc đời người ca nữ tài hoa.'),
    Q('Câu "Đồng thị thiên nhai luân lạc nhân, Tương phùng hà tất tằng tương thức" nghĩa?', ['Đường đời xa cách', 'Cùng là kẻ luân lạc nơi chân trời, gặp nhau hà tất phải quen biết', 'Người xa lạ thì xa nhau', 'Phải quen biết mới hiểu'], 1, 'Hai số phận chung cảnh ngộ, đồng cảm sâu sắc.'),
    Q('Bài thơ thể hiện tư tưởng?', ['Yêu nước', 'Hưởng lạc', 'Tôn vinh vua chúa', 'Đồng cảm với những con người tài hoa bạc mệnh'], 3, 'Tư tưởng nhân đạo: cùng "thiên nhai luân lạc".'),
    Q('Phan Huy Vịnh dịch bài này sang tiếng Việt theo thể?', ['Lục bát', 'Song thất lục bát', 'Đường luật', 'Thất ngôn trường thiên'], 1, 'Bản dịch song thất lục bát rất nổi tiếng.'),
  ]),

  M(11, 'Thơ Hồ Xuân Hương — Bánh trôi nước & Tự tình II', [
    Q('Hồ Xuân Hương được mệnh danh?', ['Bà chúa thơ Nôm', 'Bà chúa thơ tình', 'Đại thi hào', 'Nữ hoàng văn xuôi'], 0, 'Mệnh danh "Bà chúa thơ Nôm" của thi đàn Việt Nam.'),
    Q('Bài Bánh trôi nước có hình ảnh trung tâm?', ['Mâm cỗ', 'Bữa ăn', 'Chiếc bánh trôi — ẩn dụ cho người phụ nữ', 'Trẻ em'], 2, 'Bánh trôi là biểu tượng cho thân phận và phẩm chất phụ nữ.'),
    Q('"Thân em vừa trắng lại vừa tròn" nói về?', ['Vẻ đẹp người phụ nữ', 'Đứa trẻ', 'Bánh thật', 'Trăng tròn'], 0, 'Ngợi ca vẻ đẹp ngoại hình + ẩn dụ phẩm chất.'),
    Q('"Mà em vẫn giữ tấm lòng son" nhấn?', ['Trẻ trung', 'Phẩm chất thuỷ chung, son sắt', 'Sự giàu có', 'Màu đỏ của bánh'], 1, 'Tấm lòng son = lòng thuỷ chung không phai.'),
    Q('Tự tình II có cảm xúc chủ đạo?', ['Yêu đời', 'Vui mừng', 'Tự hào', 'Cô đơn, phẫn uất, khát vọng hạnh phúc'], 3, 'Nỗi cô đơn của người phụ nữ giữa đêm khuya.'),
    Q('Thơ Hồ Xuân Hương có đặc trưng?', ['Cổ điển khô khan', 'Vừa trào phúng vừa trữ tình, đầy nữ quyền', 'Bình dị giản đơn', 'Trang nghiêm thuần tuý'], 1, 'Tiếng nói nữ quyền sớm + giọng điệu sắc sảo.'),
  ]),

  M(12, 'Thơ Bà Huyện Thanh Quan — Qua Đèo Ngang', [
    Q('Bà Huyện Thanh Quan tên thật?', ['Nguyễn Thị Hinh', 'Lê Ngọc Hân', 'Hồ Xuân Hương', 'Đoàn Thị Điểm'], 0, 'Tên thật Nguyễn Thị Hinh, sống đầu thế kỉ XIX.'),
    Q('Bài Qua Đèo Ngang viết theo thể?', ['Lục bát', 'Thất ngôn tứ tuyệt', 'Thất ngôn bát cú Đường luật', 'Song thất lục bát'], 2, '8 câu 7 chữ chuẩn Đường luật.'),
    Q('Đèo Ngang nằm ở?', ['Lạng Sơn', 'Quảng Ninh', 'Ranh giới Hà Tĩnh – Quảng Bình', 'Đà Nẵng'], 2, 'Đèo Ngang giáp Hà Tĩnh và Quảng Bình.'),
    Q('Hai câu "Nhớ nước đau lòng con quốc quốc / Thương nhà mỏi miệng cái gia gia" dùng?', ['So sánh', 'Hoán dụ', 'Chơi chữ + đối + ẩn dụ', 'Liệt kê'], 2, 'Chơi chữ "quốc quốc – gia gia" rất tinh tế.'),
    Q('Cảm xúc chủ đạo của bài?', ['Vui sướng', 'Tự hào', 'Hoài cổ, cô đơn, nỗi nhớ nước thương nhà', 'Lạc quan'], 2, 'Buồn man mác, hoài niệm quá khứ vàng son.'),
    Q('"Một mảnh tình riêng ta với ta" thể hiện?', ['Đám đông', 'Sự cô đơn tuyệt đối', 'Niềm vui', 'Lễ hội'], 1, 'Chỉ một mình ta đối diện với chính mình giữa thiên nhiên hùng vĩ.'),
  ]),

  M(13, 'Truyện Kiều — Phần 1: Tác giả Nguyễn Du và tác phẩm', [
    Q('Nguyễn Du sống vào giai đoạn?', ['Cuối Lê đầu Nguyễn (1765–1820)', 'Lý Trần', 'Tây Sơn (1771–1802)', 'Hậu Lê thuần'], 0, 'Nguyễn Du (1765–1820), thời chuyển giao Lê – Nguyễn.'),
    Q('Quê hương Nguyễn Du?', ['Tiên Điền, Nghi Xuân, Hà Tĩnh', 'Nam Định', 'Bắc Ninh', 'Quảng Nam'], 0, 'Làng Tiên Điền, huyện Nghi Xuân, Hà Tĩnh.'),
    Q('Truyện Kiều có bao nhiêu câu thơ?', ['1 254', '5 000', '2 000', '3 254'], 3, '3254 câu thơ lục bát.'),
    Q('Truyện Kiều dựa trên cốt truyện nào?', ['Hồng Lâu Mộng', 'Tam Quốc', 'Tây Du Ký', 'Kim Vân Kiều truyện của Thanh Tâm Tài Nhân'], 3, 'Nguyễn Du sáng tạo lại Kim Vân Kiều truyện đời Minh.'),
    Q('Thể loại Truyện Kiều?', ['Truyện thơ Nôm', 'Tiểu thuyết', 'Tản văn', 'Truyện ngắn chữ Hán'], 0, 'Truyện thơ Nôm theo thể lục bát.'),
    Q('Tên gốc tác phẩm là?', ['Đoạn trường tân thanh', 'Thanh Hiên thi tập', 'Kim Vân Kiều', 'Truyện Kiều'], 0, 'Nguyên tên: "Đoạn trường tân thanh" (Tiếng kêu mới đứt ruột).'),
  ]),

  M(14, 'Truyện Kiều — Trao duyên (Trích đoạn)', [
    Q('Đoạn "Trao duyên" Kiều trao mối tình cho ai?', ['Thuý Vân', 'Hoạn Thư', 'Đạm Tiên', 'Thuý Kiều'], 0, 'Kiều cậy em là Thuý Vân nối duyên với Kim Trọng.'),
    Q('"Cậy em em có chịu lời / Ngồi lên cho chị lạy rồi sẽ thưa" thể hiện?', ['Sự kiêu hãnh', 'Sự thờ ơ', 'Sự khẩn thiết bất thường của Kiều', 'Sự vui mừng'], 2, 'Chị "lạy" em — điều bất thường — thể hiện áp lực bi thảm.'),
    Q('Vì sao Kiều phải trao duyên?', ['Hết yêu', 'Kiều bán mình chuộc cha, không thể giữ lời thề với Kim Trọng', 'Bị ép cưới', 'Thuý Vân giành'], 1, 'Hoàn cảnh éo le buộc Kiều hi sinh.'),
    Q('Đoạn trích thể hiện vẻ đẹp gì ở Kiều?', ['Lạnh lùng', 'Hiếu thảo, vị tha, đa cảm', 'Ích kỷ', 'Yếu đuối thuần tuý'], 1, 'Hi sinh tình riêng vì gia đình — đức hi sinh cao đẹp.'),
    Q('Nghệ thuật nổi bật trong đoạn?', ['Tả cảnh thiên nhiên', 'Đối thoại trào phúng', 'Tự sự lịch sử', 'Miêu tả nội tâm tinh tế'], 3, 'Nguyễn Du nổi tiếng bậc thầy về tâm lý nhân vật.'),
    Q('Câu "Duyên này thì giữ vật này của chung" nói về?', ['Trao vật làm tin (kim thoa, tờ mây)', 'Tiền bạc', 'Quà mừng', 'Đồ vật bình thường'], 0, 'Trao kỉ vật tình yêu — đoạn đứt ruột.'),
  ]),

  M(15, 'Truyện Kiều — Chí khí anh hùng (Từ Hải)', [
    Q('Nhân vật Từ Hải xuất hiện như?', ['Quan lại', 'Người buôn', 'Người anh hùng "đầu đội trời, chân đạp đất"', 'Thư sinh'], 2, 'Hình ảnh người anh hùng lý tưởng hoá.'),
    Q('Từ Hải gặp Thuý Kiều ở đâu?', ['Trong cung', 'Trên đường', 'Tại lễ hội', 'Lầu xanh của Tú Bà'], 3, 'Gặp Kiều khi nàng đang bị Tú Bà ép tiếp khách.'),
    Q('"Trượng phu thoắt đã động lòng bốn phương" thể hiện?', ['Ham vui', 'Buồn chán', 'Khát vọng tung hoành thiên hạ', 'Sợ hãi'], 2, 'Chí khí anh hùng không thể bị bó hẹp tình riêng.'),
    Q('"Bao giờ mười vạn tinh binh / Tiếng chiêng dậy đất, bóng tinh rợp đường" thể hiện?', ['Tiếc thương', 'Nỗi sợ', 'Ước hẹn lập đại nghiệp', 'Lời chia tay buồn'], 2, 'Hứa hẹn quay lại với khí thế hùng tráng.'),
    Q('Nguyễn Du gửi gắm gì qua Từ Hải?', ['Sự cam chịu số phận', 'Hưởng thụ', 'Buồn chán cuộc đời', 'Khát vọng tự do, công lý, lý tưởng anh hùng'], 3, 'Từ Hải là giấc mơ anh hùng và công lý của Nguyễn Du.'),
    Q('Bút pháp xây dựng Từ Hải?', ['Châm biếm', 'Tả thực', 'Bình thường', 'Lý tưởng hoá, ước lệ'], 3, 'Bút pháp ước lệ tượng trưng đậm chất sử thi.'),
  ]),

  M(16, 'Hịch tướng sĩ — Trần Quốc Tuấn', [
    Q('Hịch tướng sĩ được viết khi?', ['Trước khởi nghĩa Lam Sơn', 'Trước cuộc kháng chiến chống Nguyên Mông lần 2', 'Khi xây Cổ Loa', 'Sau khi thắng giặc'], 1, 'Hưng Đạo Đại Vương viết hịch cổ vũ tướng sĩ chống Nguyên (1284).'),
    Q('"Ta thường tới bữa quên ăn, nửa đêm vỗ gối…" thể hiện?', ['Bệnh tật', 'Nỗi đau xót lo cho đất nước', 'Sự mệt mỏi', 'Vui chơi'], 1, 'Lòng yêu nước, căm thù giặc cháy bỏng.'),
    Q('"Hịch" là thể văn?', ['Thơ tình', 'Tản văn', 'Truyện kể', 'Để kêu gọi, khích lệ tướng sĩ'], 3, 'Hịch dùng để kêu gọi chiến đấu, khích lệ tinh thần.'),
    Q('Tác giả phê phán tướng sĩ điều gì?', ['Lối sống hưởng lạc, vô trách nhiệm', 'Tham lam', 'Hèn nhát thuần', 'Trộm cắp'], 0, 'Phê phán thái độ thờ ơ, hưởng lạc trước nguy cơ mất nước.'),
    Q('Mục đích cuối cùng của bài hịch?', ['Trách móc', 'Xin lỗi', 'Khoe tài', 'Kêu gọi tướng sĩ học Binh thư yếu lược, sẵn sàng chiến đấu'], 3, 'Kêu gọi đoàn kết, rèn luyện, sẵn sàng diệt giặc.'),
    Q('Giọng văn của bài hịch?', ['Hài hước', 'Nhẹ nhàng', 'Hùng hồn, tha thiết, đanh thép', 'Cô đơn'], 2, 'Văn chính luận hào hùng đầy sức thuyết phục.'),
  ]),

  M(17, 'Đại Việt sử ký toàn thư — Sử kí Việt Nam', [
    Q('Đại Việt sử ký toàn thư do ai biên soạn chính?', ['Lê Quý Đôn', 'Phan Phu Tiên', 'Lê Văn Hưu', 'Ngô Sĩ Liên'], 3, 'Ngô Sĩ Liên đời Lê Thánh Tông biên soạn (1479).'),
    Q('Bộ sử này ghi chép lịch sử Việt Nam từ?', ['Khởi nghĩa Hai Bà Trưng', 'Hậu Lê', 'Họ Hồng Bàng đến năm 1675', 'Triệu Đà'], 2, 'Từ thời huyền sử Hồng Bàng đến hết Lê Trung Hưng.'),
    Q('Đặc điểm thể loại sử ký?', ['Hư cấu', 'Tiểu thuyết', 'Ghi chép sự kiện lịch sử có chọn lọc, có bình luận', 'Thơ ca'], 2, 'Sử ký kết hợp ghi chép và bình giá nhân vật, sự kiện.'),
    Q('Ngô Sĩ Liên là sử gia thời?', ['Nguyễn', 'Lê Thánh Tông', 'Trần Nhân Tông', 'Lý Thái Tổ'], 1, 'Ông sống thời Lê Thánh Tông (TK XV).'),
    Q('Một giá trị của Đại Việt sử ký toàn thư?', ['Bảo tồn lịch sử và đạo lý dân tộc', 'Văn vần', 'Chỉ là sách giải trí', 'Sách khoa học tự nhiên'], 0, 'Là nguồn tư liệu quý nhất về lịch sử trung đại Việt Nam.'),
    Q('Ngôn ngữ của Đại Việt sử ký toàn thư?', ['Chữ Nôm', 'Chữ Phạn', 'Quốc ngữ', 'Chữ Hán'], 3, 'Viết bằng chữ Hán (cũng như đa số sử thư đương thời).'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Văn học dân gian khác văn học viết ở?', ['Tính truyền miệng và tập thể', 'Số trang', 'Ngôn ngữ', 'Thời gian'], 0, 'Đặc trưng cơ bản phân biệt VHDG với VH viết.'),
    Q('Tác phẩm "Bình Ngô đại cáo" của?', ['Nguyễn Trãi', 'Nguyễn Du', 'Trần Quốc Tuấn', 'Lê Lợi'], 0, 'Nguyễn Trãi soạn thừa lệnh Lê Lợi.'),
    Q('Truyện Kiều có bao nhiêu câu lục bát?', ['5 000', '1 000', '3 254', '2 254'], 2, '3254 câu.'),
    Q('Bà chúa thơ Nôm là?', ['Đoàn Thị Điểm', 'Hồ Xuân Hương', 'Lê Ngọc Hân', 'Bà Huyện Thanh Quan'], 1, 'Mệnh danh dành cho Hồ Xuân Hương.'),
    Q('Hịch tướng sĩ ra đời để?', ['Ghi sự kiện', 'Khuyên dân làm ruộng', 'Báo công', 'Khích lệ tướng sĩ chống Nguyên'], 3, 'Tác phẩm chính luận yêu nước.'),
    Q('Đại Việt sử ký toàn thư viết bằng?', ['Quốc ngữ', 'Chữ Nôm', 'Chữ Hán', 'Chữ Phạn'], 2, 'Sử ký trung đại VN viết bằng chữ Hán.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Phú sông Bạch Đằng — Trương Hán Siêu', [
    Q('Trương Hán Siêu là danh sĩ thời?', ['Trần', 'Lý (thời Thăng Long)', 'Lê sơ', 'Nguyễn'], 0, 'Sống cuối Trần đầu Hồ.'),
    Q('Bài phú gắn với chiến thắng?', ['Đống Đa', 'Chi Lăng', 'Như Nguyệt', 'Bạch Đằng năm 1288'], 3, 'Chiến thắng quân Nguyên trên sông Bạch Đằng (1288).'),
    Q('Thể loại "phú" có đặc điểm?', ['Truyện kể', 'Thơ tứ tuyệt', 'Văn nghị luận chính trị, kêu gọi đánh giặc', 'Văn biền ngẫu, dùng để miêu tả + biểu cảm'], 3, 'Phú là thể văn biền ngẫu cổ điển.'),
    Q('Nhân vật "khách" trong bài tượng trưng cho?', ['Nông dân', 'Người trí thức yêu nước, tinh thần kẻ sĩ', 'Người lính già từng tham chiến Bạch Đằng', 'Vua chúa'], 1, 'Khách là sự phân thân của tác giả — kẻ sĩ thưởng ngoạn.'),
    Q('Hình ảnh "Đến sông Bạch Đằng…" gợi?', ['Buồn chán', 'Sợ hãi', 'Vui mừng', 'Niềm tự hào và nỗi tiếc thương quá khứ hào hùng'], 3, 'Hoài niệm chiến công lịch sử trên dòng sông lịch sử.'),
    Q('Tư tưởng cốt lõi của bài phú?', ['Đề cao yếu tố con người, đạo lý là gốc của thắng lợi', 'Thiên thời', 'May rủi', 'Thuần lực lượng'], 0, '"Cốt mình đức cao" — đề cao nhân nghĩa và con người.'),
  ]),

  M(20, 'Đại cáo bình Ngô — Phần kết (Tuyên bố hoà bình)', [
    Q('Phần kết tuyên bố?', ['Tiếp tục chiến tranh', 'Hoà bình, mở ra kỷ nguyên mới', 'Đầu hàng', 'Ăn mừng riêng'], 1, 'Tuyên bố hoà bình và xây dựng quốc gia thái bình.'),
    Q('"Xã tắc từ đây vững bền / Giang sơn từ đây đổi mới" thể hiện?', ['Lo lắng', 'Hoài nghi', 'Buồn nuối tiếc', 'Khát vọng đất nước thái bình thịnh trị'], 3, 'Niềm tin vào tương lai sau chiến thắng.'),
    Q('Tư tưởng của Nguyễn Trãi trong toàn bài?', ['Bá vương cứng rắn', 'Tôn giáo', 'Nhân nghĩa và yêu nước thương dân', 'Pháp trị nghiêm khắc'], 2, 'Tư tưởng nhân nghĩa lấy dân làm gốc.'),
    Q('Bố cục Bình Ngô đại cáo gồm mấy phần?', ['4', '2', '3', '5'], 0, '4 phần: chính nghĩa, tố cáo, diễn biến, tuyên bố.'),
    Q('Giá trị của Bình Ngô đại cáo?', ['Chỉ là thơ', 'Chỉ là sớ tấu', 'Chỉ là sách lịch sử', 'Vừa là áng văn chính luận mẫu mực vừa là bản tuyên ngôn độc lập'], 3, 'Giá trị kép: văn học và lịch sử.'),
    Q('Câu mở đầu "Việc nhân nghĩa cốt ở…" nói về?', ['Yên dân', 'Giàu mạnh', 'Bình loạn', 'Yêu nước'], 0, '"Yên dân" và "trừ bạo" là 2 trụ cột nhân nghĩa.'),
  ]),

  M(21, 'Văn nghị luận xã hội — Cấu trúc bài viết', [
    Q('Văn nghị luận xã hội bàn về?', ['Tác phẩm văn học', 'Đoạn thơ', 'Một tư tưởng đạo lý hoặc hiện tượng đời sống', 'Một nhân vật văn học'], 2, 'Nghị luận xã hội thiên về tư tưởng/hiện tượng XH.'),
    Q('Mở bài cần?', ['Giới thiệu vấn đề nghị luận', 'Kể chuyện riêng', 'Tả cảnh', 'Bình thơ'], 0, 'Nêu vấn đề bàn luận.'),
    Q('Thân bài nghị luận tư tưởng đạo lý thường gồm?', ['Tả – kể – cảm', 'Giải thích – chứng minh – bàn luận – bài học', 'Đặt vấn đề – tả – kể', 'Mở – thân – kết'], 1, 'Bốn bước cơ bản của nghị luận tư tưởng.'),
    Q('Dẫn chứng nên?', ['Tự bịa', 'Tiêu biểu, xác thực, đa dạng', 'Trùng lặp', 'Càng nhiều càng tốt'], 1, 'Dẫn chứng chọn lọc, đa dạng và đúng.'),
    Q('Yêu cầu của kết bài?', ['Kể chuyện', 'Khái quát + liên hệ bản thân', 'Lặp lại mở bài', 'Nhận xét người khác'], 1, 'Khái quát ý nghĩa và rút bài học cho bản thân.'),
    Q('Văn nghị luận xã hội đề cao?', ['Vần điệu', 'Hư cấu', 'Lập luận chặt chẽ, dẫn chứng thuyết phục', 'Tả cảnh'], 2, 'Khả năng tư duy logic, lý lẽ và bằng chứng.'),
  ]),

  M(22, 'Văn nghị luận xã hội — Tư tưởng đạo lý', [
    Q('Nghị luận về tư tưởng đạo lý nêu được?', ['Chỉ định nghĩa', 'Chỉ cảm nhận', 'Quan niệm, ý nghĩa, biểu hiện, phản đề', 'Chỉ ví dụ'], 2, 'Cần phân tích đa chiều, có phản đề.'),
    Q('Ví dụ tư tưởng đạo lý?', ['Đại dịch', '"Ăn quả nhớ kẻ trồng cây"', 'Bão lụt', 'Ô nhiễm'], 1, 'Câu tục ngữ — tư tưởng đạo lý cổ truyền.'),
    Q('"Phản đề" trong bài nghị luận để?', ['Khẳng định', 'Bỏ qua', 'Phê phán biểu hiện trái với tư tưởng đúng', 'Mặc kệ'], 2, 'Phản đề: phê phán biểu hiện ngược lại, tăng sức thuyết phục.'),
    Q('Kỹ năng quan trọng khi nghị luận?', ['Viết dài', 'Vần điệu', 'Dùng nhiều từ Hán Việt', 'Lập luận logic, có dẫn chứng'], 3, 'Logic và dẫn chứng quyết định chất lượng.'),
    Q('Bài học nhận thức và hành động đặt ở?', ['Không cần', 'Cuối thân bài hoặc kết bài', 'Giữa thân', 'Mở bài'], 1, 'Bài học rút ra ở phần cuối thân hoặc kết bài.'),
    Q('Khi bàn về một câu danh ngôn, bước đầu cần?', ['Bình luận', 'Phê phán ngay', 'Giải thích từ ngữ/khái niệm trong câu', 'Liên hệ ngay'], 2, 'Giải thích là bước đầu tiên.'),
  ]),

  M(23, 'Văn nghị luận xã hội — Hiện tượng đời sống', [
    Q('Hiện tượng đời sống cần nghị luận thường là?', ['Câu thơ', 'Nhân vật văn học', 'Đoạn văn', 'Vấn đề có tính thời sự, ảnh hưởng cộng đồng'], 3, 'VD: bạo lực học đường, ô nhiễm, mạng xã hội.'),
    Q('Cấu trúc bài nghị luận hiện tượng?', ['Thực trạng – nguyên nhân – hậu quả – giải pháp', 'Tả – kể – cảm', 'Mở – thân – kết', 'Chứng minh – phản đề'], 0, 'Cấu trúc 4 bước phổ biến.'),
    Q('Khi bàn về ô nhiễm môi trường, "thực trạng" gồm?', ['Câu hỏi', 'Số liệu, hiện trạng đang xảy ra', 'Suy đoán cá nhân', 'Cảm xúc'], 1, 'Mô tả tình hình thực tế bằng số liệu/dẫn chứng.'),
    Q('"Giải pháp" trong nghị luận hiện tượng?', ['Đề xuất biện pháp khắc phục', 'Liệt kê hậu quả', 'Tả cảnh', 'Hỏi tu từ'], 0, 'Đưa ra biện pháp cụ thể, khả thi.'),
    Q('Ví dụ hiện tượng tích cực?', ['Ô nhiễm', 'Chiến tranh', 'Tham nhũng', 'Phong trào "Mùa hè xanh", thiện nguyện'], 3, 'Hiện tượng đáng biểu dương.'),
    Q('Người viết cần thái độ?', ['Cảm tính', 'Khách quan, đa chiều, dựa số liệu', 'Vô cảm', 'Một chiều'], 1, 'Thái độ khách quan, có cơ sở.'),
  ]),

  M(24, 'Văn nghị luận văn học — Phân tích tác phẩm', [
    Q('Nghị luận văn học bàn về?', ['Tác phẩm/đoạn trích/nhân vật văn học', 'Tư tưởng', 'Sự kiện đời sống', 'Khoa học'], 0, 'Đối tượng là tác phẩm văn học.'),
    Q('Khi phân tích một bài thơ, cần chú ý?', ['Tiểu sử tác giả', 'Chỉ nội dung', 'Chỉ nghệ thuật', 'Nội dung + nghệ thuật'], 3, 'Kết hợp nội dung và hình thức nghệ thuật.'),
    Q('Yếu tố nào thuộc nghệ thuật của một bài thơ?', ['Cốt truyện', 'Nhân vật', 'Vần, nhịp, hình ảnh, biện pháp tu từ', 'Sự kiện'], 2, 'Các yếu tố hình thức của thơ.'),
    Q('Khi phân tích nhân vật, cần?', ['Chỉ lời nói', 'Chỉ ngoại hình', 'Chỉ hành động', 'Ngoại hình, hành động, lời nói, nội tâm, quan hệ'], 3, 'Phân tích đa chiều mới đầy đủ.'),
    Q('Yếu tố đặc trưng của thể truyện?', ['Phép đối', 'Cốt truyện, nhân vật, tình huống truyện', 'Vần điệu', 'Niêm luật'], 1, 'Cốt truyện và nhân vật là trụ cột.'),
    Q('Cảm hứng chủ đạo của tác phẩm là?', ['Chỉ bối cảnh', 'Chỉ nhân vật', 'Tình cảm chủ yếu tác giả gửi gắm', 'Chỉ chủ đề'], 2, 'Cảm hứng chủ đạo là tình cảm xuyên suốt tác phẩm.'),
  ]),

  M(25, 'Văn nghị luận văn học — So sánh và đánh giá', [
    Q('So sánh hai tác phẩm, cần tìm?', ['Điểm chung và điểm riêng', 'Chỉ tác giả', 'Chỉ riêng', 'Chỉ chung'], 0, 'Vừa thấy tương đồng, vừa thấy khác biệt.'),
    Q('Tiêu chí so sánh có thể là?', ['Giá tiền', 'Đề tài, chủ đề, hình tượng, nghệ thuật', 'Năm in', 'Số trang'], 1, 'Các tiêu chí nội dung và hình thức.'),
    Q('Đánh giá tác phẩm cần dựa trên?', ['Thị trường', 'Cảm tính cá nhân', 'Giá trị nội dung + nghệ thuật + ý nghĩa thời đại', 'Tin đồn'], 2, 'Đánh giá khách quan có cơ sở.'),
    Q('Khi so sánh hai bài thơ về quê hương, cần?', ['Hiểu rõ bối cảnh từng bài', 'Đoán mò', 'Chỉ thuộc bài', 'Tả cảnh'], 0, 'Bối cảnh quyết định cách thể hiện.'),
    Q('"Giá trị thời đại" của tác phẩm là?', ['Năm xuất bản', 'Doanh thu', 'Ý nghĩa tác phẩm với người đọc qua các thời kỳ', 'Số trang'], 2, 'Sức sống của tác phẩm qua thời gian.'),
    Q('Bài nghị luận so sánh cần?', ['Cấu trúc rõ ràng, song hành 2 đối tượng', 'Lan man', 'Chỉ nói 1 cái', 'Tả người'], 0, 'Cấu trúc song hành hoặc kết hợp.'),
  ]),

  M(26, 'Văn bản thông tin — Đặc điểm', [
    Q('Văn bản thông tin nhằm?', ['Bày tỏ cảm xúc', 'Cung cấp thông tin chính xác cho người đọc', 'Hư cấu', 'Vần điệu'], 1, 'Mục đích thông tin là chính.'),
    Q('Đặc điểm văn bản thông tin?', ['Trữ tình', 'Khách quan, chính xác, rõ ràng', 'Hư cấu', 'Đa nghĩa'], 1, 'Tính khách quan và chính xác.'),
    Q('Cấu trúc văn bản thông tin thường có?', ['Lời thoại', 'Cốt truyện', 'Vần điệu', 'Tiêu đề, đề mục, đoạn, bảng/biểu'], 3, 'Cấu trúc rõ ràng giúp tra cứu.'),
    Q('Phương tiện phi ngôn ngữ trong văn bản thông tin?', ['Vần điệu', 'Bảng, biểu đồ, hình ảnh', 'So sánh, nhân hoá', 'Phép đối'], 1, 'Biểu đồ, ảnh giúp truyền tải thông tin trực quan.'),
    Q('Ví dụ văn bản thông tin?', ['Sử thi', 'Truyện ngắn', 'Bản tin, infographic, hướng dẫn sử dụng', 'Bài thơ'], 2, 'Các loại văn bản chuyển tải thông tin.'),
    Q('Người viết văn bản thông tin cần?', ['Hư cấu', 'Bịa số liệu', 'Tả cảnh', 'Xác minh nguồn, tránh sai lệch'], 3, 'Phải kiểm chứng nguồn tin.'),
  ]),

  M(27, 'Văn bản thông tin — Viết bản tin và infographic', [
    Q('Một bản tin gồm các yếu tố?', ['Tiêu đề, mở, thân, kết — trả lời 5W1H', 'Phép đối', 'Vần, nhịp', 'Nhân vật, cốt'], 0, 'Bản tin trả lời các câu hỏi 5W1H (ai, cái gì, khi nào, ở đâu, tại sao, như thế nào).'),
    Q('Tiêu đề bản tin cần?', ['Gieo vần, có nhịp điệu', 'Ngắn, gọn, hấp dẫn, có thông tin chính', 'Dài, ẩn ý', 'Hư cấu'], 1, 'Tiêu đề cô đọng nội dung.'),
    Q('Infographic kết hợp?', ['Văn bản + hình ảnh + dữ liệu', 'Chỉ số liệu', 'Chỉ ảnh', 'Chỉ chữ'], 0, 'Đồ hoạ thông tin = chữ + hình + dữ liệu.'),
    Q('Ưu điểm của infographic?', ['Dài dòng', 'Khó đọc', 'Trừu tượng', 'Trực quan, dễ hiểu, dễ nhớ'], 3, 'Trực quan hoá thông tin phức tạp.'),
    Q('Khi viết bản tin, ngôn ngữ cần?', ['Hài hước', 'Cảm tính', 'Trung tính, khách quan', 'Trữ tình'], 2, 'Văn báo chí khách quan.'),
    Q('Nguồn thông tin trong bản tin cần?', ['Không cần', 'Có dẫn nguồn rõ ràng', 'Tự nghĩ', 'Bí mật'], 1, 'Trích dẫn nguồn để đảm bảo độ tin cậy.'),
  ]),

  M(28, 'Tổng kết văn học dân gian Việt Nam', [
    Q('Vai trò của VHDG đối với VH viết?', ['Là kho tàng đề tài, cảm hứng, chất liệu cho VH viết', 'Đối lập', 'Thay thế', 'Không liên quan'], 0, 'Nhiều tác giả viết khai thác mô-típ dân gian.'),
    Q('Thể loại nào là sử thi anh hùng?', ['Đăm Săn', 'Tấm Cám', 'Trầu Cau', 'Sơn Tinh – Thuỷ Tinh'], 0, 'Đăm Săn là sử thi của người Ê-đê.'),
    Q('Đặc trưng nghệ thuật VHDG?', ['Tâm lý phức tạp', 'Ước lệ, công thức, mô-típ lặp lại', 'Hiện thực sắc nét', 'Cá nhân hoá cao'], 1, 'Tính công thức và mô-típ là đặc trưng VHDG.'),
    Q('Truyện cổ tích thường có kết thúc?', ['Bi kịch', 'Bỏ ngỏ để người đọc tự suy luận', 'Lửng lơ, không phân thắng bại', 'Có hậu'], 3, 'Phần lớn cổ tích kết thúc có hậu — phản ánh ước mơ.'),
    Q('Ca dao chủ yếu phản ánh?', ['Lịch sử thế giới', 'Triết lý phương Tây', 'Tâm tư tình cảm và đời sống nhân dân', 'Khoa học'], 2, 'Tiếng nói tâm hồn của nhân dân lao động.'),
    Q('Giá trị lớn nhất của VHDG?', ['Lưu giữ bản sắc văn hoá và tâm hồn dân tộc', 'Kinh tế', 'Giải trí thuần', 'Khoa học'], 0, 'VHDG là di sản tinh thần vô giá.'),
  ]),

  M(29, 'Tổng kết văn học trung đại Việt Nam', [
    Q('Văn học trung đại Việt Nam tính từ?', ['Đầu CN', 'Thế kỷ X đến hết thế kỷ XIX', 'Cổ đại', 'Thế kỷ XX'], 1, 'Từ Ngô Quyền (938/X) đến hết XIX.'),
    Q('Chữ viết chính của VHTĐ?', ['Quốc ngữ', 'Chỉ Nôm', 'Chỉ Hán', 'Chữ Hán và chữ Nôm'], 3, 'Cả Hán và Nôm song hành.'),
    Q('Tác phẩm nào KHÔNG thuộc VHTĐ?', ['Truyện Kiều', 'Bình Ngô đại cáo', 'Số đỏ (Vũ Trọng Phụng)', 'Hịch tướng sĩ'], 2, 'Số đỏ là văn học hiện đại (1936).'),
    Q('Cảm hứng chủ đạo VHTĐ?', ['Cá nhân', 'Yêu nước và nhân đạo', 'Phi lý', 'Khoa học'], 1, 'Hai dòng cảm hứng lớn.'),
    Q('Đặc điểm thi pháp VHTĐ?', ['Tự do tuyệt đối', 'Cái tôi cá nhân', 'Ước lệ tượng trưng, sùng cổ, phi ngã', 'Hiện thực sắc nét'], 2, 'Thi pháp đặc trưng của VHTĐ.'),
    Q('Đại thi hào của VHTĐ Việt Nam?', ['Cả 3 đều là danh nhân lớn', 'Hồ Xuân Hương', 'Nguyễn Trãi', 'Nguyễn Du'], 0, 'Cả 3 đều là danh nhân văn hoá lớn.'),
  ]),

  M(30, 'Tổng kết thơ Đường', [
    Q('Thơ Đường ở Trung Quốc phát triển vào?', ['Thế kỷ XV', 'Thế kỷ VII–X', 'Thế kỷ III', 'Thế kỷ XII'], 1, 'Triều Đường (618–907).'),
    Q('Ba đại biểu lớn của thơ Đường?', ['Tô Đông Pha', 'Lý Bạch, Đỗ Phủ, Bạch Cư Dị', 'Khổng Tử, Lão Tử', 'Nguyễn Du'], 1, 'Lý Bạch (thi tiên), Đỗ Phủ (thi thánh), Bạch Cư Dị (thi nhân của nhân dân).'),
    Q('Thể thơ điển hình thời Đường?', ['Thơ tự do phá cách', 'Lục bát', 'Thất ngôn bát cú và tứ tuyệt', 'Song thất lục bát'], 2, 'Thể luật Đường nổi tiếng.'),
    Q('Bài Hoàng Hạc Lâu của?', ['Lý Bạch', 'Bạch Cư Dị', 'Thôi Hiệu', 'Đỗ Phủ'], 2, 'Thôi Hiệu — bài thơ được coi là tuyệt tác.'),
    Q('Tỳ bà hành thuộc thể?', ['Cổ phong', 'Bát cú', 'Hành (trường thiên)', 'Tứ tuyệt'], 2, 'Trường thiên kể chuyện.'),
    Q('Ảnh hưởng của thơ Đường đến VN?', ['Đối lập', 'Sâu rộng, mẫu mực cho thơ chữ Hán Việt Nam', 'Không đáng kể', 'Chỉ ngắn hạn'], 1, 'Thơ Đường là kiểu mẫu cho thơ trung đại VN.'),
  ]),

  M(31, 'Tổng kết Truyện Kiều', [
    Q('Truyện Kiều giàu giá trị?', ['Tôn giáo', 'Nhân đạo và hiện thực', 'Khoa học', 'Triết học'], 1, 'Tác phẩm có cả giá trị nhân đạo và hiện thực sâu sắc.'),
    Q('Giá trị nhân đạo Truyện Kiều thể hiện ở?', ['Tôn giáo', 'Cảm thương cho số phận con người, đặc biệt phụ nữ', 'Khoa học', 'Khen chê chính trị'], 1, 'Lòng nhân ái với người tài hoa bạc mệnh.'),
    Q('Giá trị hiện thực thể hiện ở?', ['Ca ngợi vua', 'Tả tình thuần', 'Tả cảnh đẹp', 'Tố cáo xã hội phong kiến bất công'], 3, 'Phơi bày bất công, đồng tiền chi phối số phận.'),
    Q('Nguyễn Du sử dụng ngôn ngữ?', ['Chỉ dân gian', 'Chỉ Hán', 'Chỉ Nôm', 'Tiếng Việt giàu hình ảnh, kết hợp Hán + Nôm + dân gian'], 3, 'Ngôn ngữ kết hợp hài hoà nhiều nguồn.'),
    Q('Nhân vật Thuý Kiều tiêu biểu cho?', ['Vô tài', 'Phụ nữ giàu sang', 'Người phụ nữ tài sắc nhưng số phận bi thảm', 'Bình thường'], 2, '"Tài tình chi lắm cho trời đất ghen".'),
    Q('Truyện Kiều được dịch ra?', ['Chỉ tiếng Pháp', 'Nhiều thứ tiếng trên thế giới', 'Chỉ Hán', 'Chỉ Anh'], 1, 'Đã có nhiều bản dịch khắp thế giới.'),
  ]),

  M(32, 'Ôn tập nghị luận xã hội tổng hợp', [
    Q('Nghị luận xã hội cần kỹ năng?', ['Tả cảnh', 'Phân tích – tổng hợp – lập luận', 'Hư cấu', 'Vần điệu'], 1, 'Tư duy logic là quan trọng nhất.'),
    Q('Một bài nghị luận xã hội thường viết ?', ['Khoảng 600 chữ (cho đề trong đề thi)', 'Vài chục chữ', 'Tuỳ thích', 'Vài nghìn chữ'], 0, 'Thông thường đề thi yêu cầu ~600 từ.'),
    Q('Phần mở bài cần?', ['Giới thiệu vấn đề và nêu luận đề', 'Kể chuyện', 'Đặt câu hỏi', 'Tả người'], 0, 'Mở bài: dẫn dắt + nêu vấn đề.'),
    Q('Dẫn chứng tốt là?', ['Trùng lặp', 'Tiêu biểu, chính xác, đa dạng', 'Tự nghĩ', 'Cảm tính'], 1, 'Dẫn chứng quyết định sức thuyết phục.'),
    Q('Khi bàn về một câu danh ngôn, bước đầu là?', ['Liên hệ ngay', 'Tả cảnh', 'Phê phán ngay', 'Giải thích nội dung câu'], 3, 'Giải thích trước khi bàn luận.'),
    Q('Kết bài cần?', ['Tả thiên nhiên', 'Lặp mở', 'Đặt câu hỏi mới', 'Khẳng định lại + liên hệ bản thân'], 3, 'Khái quát và rút bài học cá nhân.'),
  ]),

  M(33, 'Ôn tập nghị luận văn học tổng hợp', [
    Q('Phân tích thơ cần tập trung?', ['Hình ảnh, ngôn ngữ, nhịp, biện pháp tu từ + nội dung', 'Chỉ vần', 'Chỉ nội dung', 'Chỉ tác giả'], 0, 'Cần kết hợp nội dung và nghệ thuật.'),
    Q('Phân tích truyện cần?', ['Cốt truyện, nhân vật, tình huống, chủ đề', 'Tiểu sử', 'Chỉ tả cảnh', 'Chỉ vần'], 0, 'Yếu tố đặc trưng của truyện.'),
    Q('So sánh hai tác phẩm cần?', ['Lan man', 'Tiêu chí rõ ràng + cân bằng giữa 2 đối tượng', 'Không cấu trúc', 'Chỉ 1 đối tượng'], 1, 'So sánh có tiêu chí.'),
    Q('Đoạn văn 200 chữ trong nghị luận VH cần?', ['Tả cảnh', 'Lan man', 'Cô đọng, có luận điểm rõ ràng', 'Hư cấu'], 2, 'Đoạn ngắn nhưng phải có ý mạch lạc.'),
    Q('Một bài nghị luận văn học có?', ['Chỉ mở', 'Mở – thân – kết', 'Chỉ thân', 'Chỉ kết'], 1, 'Bố cục 3 phần cơ bản.'),
    Q('Khi viết về một nhân vật, cần?', ['Phim ảnh', 'Dẫn chứng từ chính tác phẩm', 'Sách khác', 'Tưởng tượng'], 1, 'Dẫn chứng phải lấy từ tác phẩm gốc.'),
  ]),

  M(34, 'Đề tổng hợp 1 — Đọc hiểu và viết', [
    Q('Văn bản nghị luận khác văn bản tự sự ở?', ['Chỉ độ dài', 'Lập luận thay vì cốt truyện', 'Không khác', 'Chỉ ngôn ngữ'], 1, 'Nghị luận lập luận, tự sự kể chuyện.'),
    Q('Phép tu từ "ẩn dụ" là?', ['Liệt kê', 'Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng', 'Phóng đại', 'So sánh có từ "như"'], 1, 'Ẩn dụ là so sánh ngầm.'),
    Q('"Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền" dùng?', ['Ẩn dụ + nhân hoá', 'Điệp ngữ', 'Liệt kê', 'Hoán dụ'], 0, 'Thuyền – bến ẩn dụ cho chàng – nàng; nhân hoá nỗi nhớ.'),
    Q('Để viết đoạn nghị luận xã hội tốt cần?', ['Hư cấu', 'Tả cảnh', 'Vần điệu', 'Luận điểm + lý lẽ + dẫn chứng'], 3, 'Đầy đủ 3 thành phần.'),
    Q('Khi đọc hiểu một văn bản, bước đầu?', ['Chỉ đọc lướt', 'Xác định thể loại và nội dung chính', 'Bỏ qua', 'Học thuộc'], 1, 'Bước đầu là nhận diện thể loại và nội dung.'),
    Q('Văn bản đa phương thức là?', ['Kết hợp văn bản + hình ảnh + đồ hoạ', 'Chỉ chữ', 'Chỉ video', 'Chỉ ảnh'], 0, 'Đa phương thức kết hợp nhiều phương tiện.'),
  ]),

  M(35, 'Đề tổng hợp 2 — Cuối năm', [
    Q('Tác phẩm nào của Nguyễn Trãi?', ['Truyện Kiều', 'Bình Ngô đại cáo và Quốc âm thi tập', 'Hịch tướng sĩ', 'Phú sông Bạch Đằng'], 1, 'Hai tác phẩm tiêu biểu của Ức Trai.'),
    Q('Đại Việt sử ký toàn thư do ai soạn chính?', ['Phan Phu Tiên', 'Nguyễn Trãi', 'Ngô Sĩ Liên', 'Lê Văn Hưu'], 2, 'Ngô Sĩ Liên đời Lê Thánh Tông.'),
    Q('Bài Hoàng Hạc Lâu thể hiện cảm xúc?', ['Phẫn nộ trước thời cuộc', 'Nhớ quê và hoài cổ', 'Hân hoan trước cảnh đẹp', 'Tự hào'], 1, 'Cảm hứng nhớ quê tha thiết.'),
    Q('Đoạn "Trao duyên" thể hiện?', ['Tự hào', 'Vui mừng', 'Bi kịch và đức hi sinh của Kiều', 'Châm biếm'], 2, 'Đoạn đầy nước mắt của Truyện Kiều.'),
    Q('Hồ Xuân Hương được mệnh danh?', ['Bà chúa thơ Đường', 'Nữ hoàng văn xuôi', 'Đại thi hào', 'Bà chúa thơ Nôm'], 3, 'Mệnh danh nổi tiếng.'),
    Q('Hịch tướng sĩ ra đời nhằm?', ['Khích lệ tướng sĩ chống Nguyên Mông', 'Ghi sử', 'Khuyên dân', 'Báo công'], 0, 'Cổ vũ chiến đấu trong kháng chiến chống Nguyên.'),
  ]),
];

export const H10NV_SCENARIOS = indexBy(H10NV_WEEKS);
