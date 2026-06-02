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
    Q('Văn học dân gian là sáng tác?', ['Của tác giả cá nhân được ghi tên','Tập thể nhân dân, truyền miệng','Văn học viết','Chỉ có ở thời hiện đại'], 1, 'VHDG là sáng tác tập thể, lưu truyền chủ yếu bằng miệng.'),
    Q('Đặc trưng cơ bản nào KHÔNG thuộc VHDG?', ['Tính tập thể','Tính truyền miệng','Tính dị bản','Tính cá thể tác giả'], 3, 'VHDG không có tác giả cá nhân cố định.'),
    Q('Thể loại nào sau đây là VHDG?', ['Truyện cổ tích','Tiểu thuyết','Hồi ký','Tản văn'], 0, 'Truyện cổ tích là thể loại tự sự dân gian.'),
    Q('Sử thi của dân tộc nào ở Tây Nguyên?', ['Ê-đê (Đăm Săn)','Kinh','Tày','Hoa'], 0, 'Sử thi Đăm Săn của người Ê-đê.'),
    Q('Truyền thuyết khác cổ tích ở điểm?', ['Gắn với sự kiện và nhân vật lịch sử','Hoàn toàn hư cấu','Có vần điệu','Ngắn hơn'], 0, 'Truyền thuyết bám vào sự thật lịch sử (dù có yếu tố kì ảo).'),
    Q('Câu tục ngữ "Ăn quả nhớ kẻ trồng cây" thuộc thể loại?', ['Tục ngữ','Ca dao','Truyện cười','Sử thi'], 0, 'Câu nói ngắn, đúc kết kinh nghiệm/đạo lý.'),
  ]),

  M(2, 'Truyện An Dương Vương và Mị Châu – Trọng Thuỷ', [
    Q('Truyện An Dương Vương thuộc thể loại?', ['Truyền thuyết','Cổ tích','Ngụ ngôn','Truyện cười'], 0, 'Là truyền thuyết gắn với lịch sử Âu Lạc.'),
    Q('An Dương Vương xây thành ở đâu?', ['Cổ Loa','Hoa Lư','Phong Châu','Thăng Long'], 0, 'Thành Cổ Loa (nay thuộc Đông Anh, Hà Nội).'),
    Q('Ai giúp An Dương Vương xây thành?', ['Rùa Vàng (Thần Kim Quy)','Lạc Long Quân','Sơn Tinh','Thánh Gióng'], 0, 'Thần Kim Quy giúp xây thành và cho nỏ thần.'),
    Q('Trọng Thuỷ là con của ai?', ['Triệu Đà','An Dương Vương','Lạc Long Quân','Quang Trung'], 0, 'Trọng Thuỷ là con Triệu Đà — người nước Nam Việt.'),
    Q('Bi kịch của Mị Châu thể hiện bài học?', ['Cảnh giác trước kẻ thù xâm lược','Tình yêu là tất cả','Tin tưởng tuyệt đối','Đoàn kết gia đình'], 0, 'Mị Châu tin chồng nên đất nước mất.'),
    Q('Hình ảnh "ngọc trai – giếng nước" tượng trưng?', ['Sự hoá giải, nỗi oan và niềm xót thương','Sự phản bội','Chiến thắng','Cái chết tàn nhẫn'], 0, 'Hình ảnh đẹp mang ý nghĩa hoá giải, thương xót Mị Châu.'),
  ]),

  M(3, 'Truyện cổ tích Tấm Cám', [
    Q('Tấm Cám thuộc loại cổ tích?', ['Thần kỳ','Sinh hoạt','Loài vật','Cười'], 0, 'Tấm Cám là cổ tích thần kỳ (có yếu tố hoang đường).'),
    Q('Bụt hiện ra giúp Tấm khi nào?', ['Khi Tấm khóc/gặp khó khăn','Khi Tấm chiến thắng','Khi Cám đến','Khi đi hội'], 0, 'Bụt — biểu tượng cứu giúp người tốt — hiện mỗi khi Tấm khóc.'),
    Q('Tấm hoá thân lần lượt thành?', ['Chim vàng anh – cây xoan – khung cửi – quả thị','Cây hoa','Con cá','Chỉ quả thị'], 0, 'Bốn lần hoá thân thể hiện sức sống mãnh liệt.'),
    Q('Mâu thuẫn chính trong truyện?', ['Thiện và ác (Tấm vs mẹ con Cám)','Giàu và nghèo','Vua và dân','Tâm và Cám là chị em'], 0, 'Xung đột thiện – ác là tư tưởng cốt lõi.'),
    Q('Kết thúc truyện thể hiện quan niệm?', ['Ở hiền gặp lành, ác giả ác báo','Số phận con người do trời','Người tốt phải chịu khổ','Phụ nữ phải nhường nhịn'], 0, 'Quan niệm dân gian về công bằng.'),
    Q('Yếu tố thần kỳ trong Tấm Cám có vai trò?', ['Giúp người tốt vượt qua khó khăn, hiện thực hoá ước mơ công bằng','Chỉ để vui','Mê tín dị đoan','Không có ý nghĩa'], 0, 'Yếu tố thần kỳ hỗ trợ cái thiện thắng cái ác.'),
  ]),

  M(4, 'Ca dao Việt Nam — Ca dao than thân, yêu thương tình nghĩa', [
    Q('Ca dao là?', ['Lời thơ trữ tình dân gian, thường kết hợp với âm nhạc','Truyện kể dân gian','Sử thi','Tục ngữ'], 0, 'Ca dao là lời thơ trữ tình của nhân dân.'),
    Q('"Thân em như tấm lụa đào…" là kiểu ca dao?', ['Than thân','Hài hước','Châm biếm','Lao động'], 0, 'Mô-típ "Thân em…" là ca dao than thân của phụ nữ.'),
    Q('Hình ảnh "cái cò" trong ca dao thường biểu trưng?', ['Người nông dân, người phụ nữ vất vả','Sự giàu sang','Vua chúa','Thiên nhiên đẹp'], 0, 'Cò là biểu tượng người nông dân/phụ nữ Việt cần cù mà khổ cực.'),
    Q('Ca dao "Công cha như núi Thái Sơn…" nói về?', ['Tình cảm gia đình, công ơn cha mẹ','Tình yêu đôi lứa','Lòng yêu nước','Lao động'], 0, 'So sánh công cha nghĩa mẹ với những hình ảnh lớn lao.'),
    Q('Biện pháp tu từ phổ biến trong ca dao?', ['So sánh, ẩn dụ, điệp ngữ','Liệt kê khoa học','Chú thích','Trích dẫn'], 0, 'Ca dao giàu hình ảnh so sánh, ẩn dụ.'),
    Q('Thể thơ chủ đạo của ca dao Việt Nam?', ['Lục bát','Đường luật','Tự do','Song thất lục bát'], 0, 'Đa số ca dao viết bằng thể lục bát.'),
  ]),

  M(5, 'Tỏ lòng (Thuật hoài) — Phạm Ngũ Lão', [
    Q('Tác giả của bài Tỏ lòng?', ['Phạm Ngũ Lão','Trần Quốc Tuấn','Nguyễn Trãi','Lý Thường Kiệt'], 0, 'Phạm Ngũ Lão (1255–1320), danh tướng nhà Trần.'),
    Q('Bài thơ viết bằng chữ?', ['Hán','Nôm','Quốc ngữ','Pháp'], 0, 'Thuật hoài viết bằng chữ Hán theo thể thất ngôn tứ tuyệt.'),
    Q('Hình ảnh "hoành sóc" có nghĩa?', ['Cầm ngang ngọn giáo','Mang gươm','Giương cung','Cầm dao'], 0, 'Hoành sóc = cầm ngang ngọn giáo, hình ảnh tráng sĩ.'),
    Q('"Nợ công danh" trong bài thơ là?', ['Trách nhiệm lập công với non sông','Tiền nong','Tình cảm','Học vấn'], 0, 'Quan niệm nho gia về việc lập công danh cho Tổ quốc.'),
    Q('"Tu thính nhân gian thuyết Vũ Hầu" nói về?', ['Nỗi thẹn khi nghe người đời ca ngợi Gia Cát Lượng','Sự tự hào','Sự than thở','Lời chúc tụng'], 0, 'Tác giả thẹn vì chưa lập công như Vũ Hầu Gia Cát Lượng.'),
    Q('Bài thơ thể hiện vẻ đẹp con người thời?', ['Trần (hào khí Đông A)','Lý','Lê','Nguyễn'], 0, 'Hào khí Đông A đời Trần — quyết tâm chống Nguyên Mông.'),
  ]),

  M(6, 'Cảnh ngày hè (Bảo kính cảnh giới 43) — Nguyễn Trãi', [
    Q('Nguyễn Trãi quê ở?', ['Hải Dương (làng Chi Ngại - Nhị Khê)','Nghệ An','Thái Bình','Hà Nam'], 0, 'Nguyễn Trãi quê Chi Ngại, sau dời về Nhị Khê (Hà Nội).'),
    Q('Bài "Cảnh ngày hè" nằm trong tập?', ['Quốc âm thi tập','Ức Trai thi tập','Bình Ngô đại cáo','Dư địa chí'], 0, 'Quốc âm thi tập — thơ Nôm của Nguyễn Trãi.'),
    Q('Thể thơ bài này?', ['Thất ngôn xen lục ngôn','Thất ngôn bát cú Đường luật','Lục bát','Song thất lục bát'], 0, 'Bài có câu 6 chữ xen vào — đặc trưng Nôm Đường luật của Nguyễn Trãi.'),
    Q('Bức tranh cảnh ngày hè gợi điều gì?', ['Sự sống tràn đầy, sinh động','U buồn cô đơn','Lạnh lẽo','Hoang vắng'], 0, 'Màu xanh hoè lục, lựu đỏ, sen hồng — thiên nhiên rộn ràng.'),
    Q('"Dẽ có Ngu cầm đàn một tiếng…" thể hiện?', ['Khát vọng cuộc sống nhân dân ấm no, hạnh phúc','Khát vọng riêng tư','Buồn vì xa nhà','Tiếc nuối quá khứ'], 0, 'Nguyễn Trãi mơ ước có đàn vua Ngu để dân khắp nơi đủ giàu.'),
    Q('Tư tưởng nổi bật của Nguyễn Trãi qua bài?', ['Lo trước thiên hạ, yêu nước thương dân','Yêu thiên nhiên thuần tuý','Ẩn dật xa lánh','Hưởng thụ'], 0, 'Tư tưởng nhân nghĩa — lo cho dân — xuyên suốt thơ Ức Trai.'),
  ]),

  M(7, 'Bình Ngô đại cáo (Phần 1) — Nguyễn Trãi', [
    Q('Bình Ngô đại cáo được Nguyễn Trãi viết theo lệnh ai?', ['Lê Lợi','Trần Hưng Đạo','Hồ Quý Ly','Lê Thánh Tông'], 0, 'Nguyễn Trãi thừa lệnh Lê Lợi viết sau khi đánh tan quân Minh.'),
    Q('Bài cáo viết năm?', ['1428','1418','1418–1427','1500'], 0, 'Hoàn thành đầu năm 1428.'),
    Q('Bình Ngô đại cáo được coi là?', ['Bản tuyên ngôn độc lập thứ hai của Việt Nam','Bài thơ tình','Sử ký','Hịch'], 0, 'Sau Nam quốc sơn hà, đây là tuyên ngôn độc lập lần 2.'),
    Q('"Việc nhân nghĩa cốt ở yên dân" nghĩa là?', ['Đạo nhân nghĩa cốt ở chỗ làm cho dân được yên ổn','Nhân nghĩa là lễ phép','Nhân nghĩa là tu thân','Yên dân nghĩa là trung thành vua'], 0, 'Nguyễn Trãi đặt "yên dân" lên hàng đầu của nhân nghĩa.'),
    Q('Tác giả nêu nền văn hiến VN qua điều gì?', ['Phong tục, văn hiến, lãnh thổ, lịch sử, hào kiệt','Chỉ vua chúa','Chỉ chiến công','Chỉ địa lý'], 0, 'Phần đầu liệt kê nhiều yếu tố khẳng định độc lập.'),
    Q('Thể loại "cáo" dùng để?', ['Vua công bố sự kiện trọng đại với toàn dân','Thư riêng','Báo cáo','Đối thoại'], 0, 'Cáo: thể văn nghị luận hùng biện công bố sự kiện trọng đại.'),
  ]),

  M(8, 'Bình Ngô đại cáo (Phần 2 — tội ác giặc Minh)', [
    Q('Phần tố cáo tội ác giặc Minh dùng giọng điệu?', ['Căm phẫn, đau xót','Bình thản','Hài hước','Tôn kính'], 0, 'Giọng văn đầy phẫn nộ, đau đớn trước cảnh dân lành bị tàn sát.'),
    Q('"Nướng dân đen trên ngọn lửa hung tàn" thuộc biện pháp?', ['Ẩn dụ + phóng đại','So sánh','Hoán dụ thuần','Điệp ngữ'], 0, 'Hình ảnh ẩn dụ kết hợp phóng đại, cực tả tội ác.'),
    Q('"Trúc Nam Sơn không ghi hết tội" nghĩa là?', ['Tội ác giặc nhiều không kể xiết','Trúc rất quý','Núi Nam Sơn cao','Tre không dùng để ghi'], 0, 'Phóng đại chỉ tội ác vô cùng tận.'),
    Q('Tội ác nào KHÔNG được liệt kê?', ['Vơ vét tài sản','Giết hại dân lành','Truyền bá đạo','Mở mang văn hoá tốt đẹp'], 3, 'Giặc Minh không mang điều tốt mà huỷ diệt.'),
    Q('Đoạn này thể hiện cảm hứng?', ['Yêu nước căm thù giặc','Trữ tình lãng mạn','Hài hước','Cô đơn'], 0, 'Cảm hứng nhân đạo, yêu nước, căm thù sâu sắc.'),
    Q('Lập luận của Nguyễn Trãi giàu sức thuyết phục nhờ?', ['Dẫn chứng cụ thể + lý lẽ sắc bén + giọng văn hùng hồn','Câu thơ ngắn','Vần điệu','Ngôi kể thứ nhất'], 0, 'Văn chính luận mẫu mực.'),
  ]),

  M(9, 'Hoàng Hạc Lâu — Thôi Hiệu', [
    Q('Hoàng Hạc Lâu là thơ?', ['Đường (Trung Quốc)','Lý (Việt Nam)','Trần','Nguyễn'], 0, 'Thôi Hiệu là thi nhân đời Đường.'),
    Q('Hoàng Hạc Lâu nằm ở đâu?', ['Vũ Xương, Hồ Bắc, Trung Quốc','Hà Nội','Thăng Long','Lạc Dương'], 0, 'Lầu Hoàng Hạc bên sông Trường Giang.'),
    Q('Thể thơ của bài?', ['Thất ngôn bát cú Đường luật','Lục bát','Tứ tuyệt','Tự do'], 0, '8 câu × 7 chữ theo luật Đường.'),
    Q('Hai câu kết "Nhật mộ hương quan hà xứ thị / Yên ba giang thượng sử nhân sầu" thể hiện?', ['Nỗi nhớ quê hương sâu lắng','Sự vui sướng','Tả cảnh thuần tuý','Giận dữ'], 0, 'Nỗi sầu nhớ quê trong khói sóng trên sông.'),
    Q('Hình ảnh "hạc vàng đã bay đi" gợi?', ['Cảm thức về thời gian và sự mất mát','Niềm vui','Sự giàu sang','Chiến tranh'], 0, 'Hạc vàng — biểu tượng quá khứ vĩnh viễn không trở lại.'),
    Q('Bản dịch nổi tiếng nhất bài thơ này ở Việt Nam là của?', ['Tản Đà','Nguyễn Du','Hồ Chí Minh','Xuân Diệu'], 0, 'Tản Đà dịch "Hoàng Hạc Lâu" rất hay, được nhiều người yêu thích.'),
  ]),

  M(10, 'Tỳ bà hành — Bạch Cư Dị', [
    Q('Bạch Cư Dị là nhà thơ đời?', ['Đường','Tống','Minh','Hán'], 0, 'Bạch Cư Dị (772–846), nhà thơ Đường nổi tiếng.'),
    Q('Tỳ bà hành thuộc thể?', ['Trường thiên trường ca','Tứ tuyệt','Bát cú','Lục bát'], 0, 'Hành — thể trường thiên kể chuyện.'),
    Q('Nhân vật trung tâm là?', ['Người ca nữ đánh đàn tỳ bà','Vua','Thi nhân','Tướng quân'], 0, 'Bài thơ kể chuyện cuộc đời người ca nữ tài hoa.'),
    Q('Câu "Đồng thị thiên nhai luân lạc nhân, Tương phùng hà tất tằng tương thức" nghĩa?', ['Cùng là kẻ luân lạc nơi chân trời, gặp nhau hà tất phải quen biết','Người xa lạ thì xa nhau','Phải quen biết mới hiểu','Đường đời xa cách'], 0, 'Hai số phận chung cảnh ngộ, đồng cảm sâu sắc.'),
    Q('Bài thơ thể hiện tư tưởng?', ['Đồng cảm với những con người tài hoa bạc mệnh','Yêu nước','Hưởng lạc','Tôn vinh vua chúa'], 0, 'Tư tưởng nhân đạo: cùng "thiên nhai luân lạc".'),
    Q('Phan Huy Vịnh dịch bài này sang tiếng Việt theo thể?', ['Song thất lục bát','Lục bát','Đường luật','Tự do'], 0, 'Bản dịch song thất lục bát rất nổi tiếng.'),
  ]),

  M(11, 'Thơ Hồ Xuân Hương — Bánh trôi nước & Tự tình II', [
    Q('Hồ Xuân Hương được mệnh danh?', ['Bà chúa thơ Nôm','Bà chúa thơ tình','Nữ hoàng văn xuôi','Đại thi hào'], 0, 'Mệnh danh "Bà chúa thơ Nôm" của thi đàn Việt Nam.'),
    Q('Bài Bánh trôi nước có hình ảnh trung tâm?', ['Chiếc bánh trôi — ẩn dụ cho người phụ nữ','Bữa ăn','Trẻ em','Mâm cỗ'], 0, 'Bánh trôi là biểu tượng cho thân phận và phẩm chất phụ nữ.'),
    Q('"Thân em vừa trắng lại vừa tròn" nói về?', ['Vẻ đẹp người phụ nữ','Bánh thật','Đứa trẻ','Trăng tròn'], 0, 'Ngợi ca vẻ đẹp ngoại hình + ẩn dụ phẩm chất.'),
    Q('"Mà em vẫn giữ tấm lòng son" nhấn?', ['Phẩm chất thuỷ chung, son sắt','Màu đỏ của bánh','Sự giàu có','Trẻ trung'], 0, 'Tấm lòng son = lòng thuỷ chung không phai.'),
    Q('Tự tình II có cảm xúc chủ đạo?', ['Cô đơn, phẫn uất, khát vọng hạnh phúc','Vui mừng','Yêu đời','Tự hào'], 0, 'Nỗi cô đơn của người phụ nữ giữa đêm khuya.'),
    Q('Thơ Hồ Xuân Hương có đặc trưng?', ['Vừa trào phúng vừa trữ tình, đầy nữ quyền','Trang nghiêm thuần tuý','Cổ điển khô khan','Bình dị giản đơn'], 0, 'Tiếng nói nữ quyền sớm + giọng điệu sắc sảo.'),
  ]),

  M(12, 'Thơ Bà Huyện Thanh Quan — Qua Đèo Ngang', [
    Q('Bà Huyện Thanh Quan tên thật?', ['Nguyễn Thị Hinh','Hồ Xuân Hương','Đoàn Thị Điểm','Lê Ngọc Hân'], 0, 'Tên thật Nguyễn Thị Hinh, sống đầu thế kỉ XIX.'),
    Q('Bài Qua Đèo Ngang viết theo thể?', ['Thất ngôn bát cú Đường luật','Lục bát','Song thất lục bát','Tự do'], 0, '8 câu 7 chữ chuẩn Đường luật.'),
    Q('Đèo Ngang nằm ở?', ['Ranh giới Hà Tĩnh – Quảng Bình','Quảng Ninh','Lạng Sơn','Đà Nẵng'], 0, 'Đèo Ngang giáp Hà Tĩnh và Quảng Bình.'),
    Q('Hai câu "Nhớ nước đau lòng con quốc quốc / Thương nhà mỏi miệng cái gia gia" dùng?', ['Chơi chữ + đối + ẩn dụ','Hoán dụ','So sánh','Liệt kê'], 0, 'Chơi chữ "quốc quốc – gia gia" rất tinh tế.'),
    Q('Cảm xúc chủ đạo của bài?', ['Hoài cổ, cô đơn, nỗi nhớ nước thương nhà','Vui sướng','Lạc quan','Tự hào'], 0, 'Buồn man mác, hoài niệm quá khứ vàng son.'),
    Q('"Một mảnh tình riêng ta với ta" thể hiện?', ['Sự cô đơn tuyệt đối','Niềm vui','Đám đông','Lễ hội'], 0, 'Chỉ một mình ta đối diện với chính mình giữa thiên nhiên hùng vĩ.'),
  ]),

  M(13, 'Truyện Kiều — Phần 1: Tác giả Nguyễn Du và tác phẩm', [
    Q('Nguyễn Du sống vào giai đoạn?', ['Cuối Lê đầu Nguyễn (1765–1820)','Lý Trần','Hồ','Hậu Lê thuần'], 0, 'Nguyễn Du (1765–1820), thời chuyển giao Lê – Nguyễn.'),
    Q('Quê hương Nguyễn Du?', ['Tiên Điền, Nghi Xuân, Hà Tĩnh','Bắc Ninh','Nam Định','Quảng Nam'], 0, 'Làng Tiên Điền, huyện Nghi Xuân, Hà Tĩnh.'),
    Q('Truyện Kiều có bao nhiêu câu thơ?', ['3 254','2 000','5 000','1 254'], 0, '3254 câu thơ lục bát.'),
    Q('Truyện Kiều dựa trên cốt truyện nào?', ['Kim Vân Kiều truyện của Thanh Tâm Tài Nhân','Tam Quốc','Hồng Lâu Mộng','Tây Du Ký'], 0, 'Nguyễn Du sáng tạo lại Kim Vân Kiều truyện đời Minh.'),
    Q('Thể loại Truyện Kiều?', ['Truyện thơ Nôm','Tiểu thuyết','Sử ký','Tản văn'], 0, 'Truyện thơ Nôm theo thể lục bát.'),
    Q('Tên gốc tác phẩm là?', ['Đoạn trường tân thanh','Truyện Kiều','Kim Vân Kiều','Thanh Hiên thi tập'], 0, 'Nguyên tên: "Đoạn trường tân thanh" (Tiếng kêu mới đứt ruột).'),
  ]),

  M(14, 'Truyện Kiều — Trao duyên (Trích đoạn)', [
    Q('Đoạn "Trao duyên" Kiều trao mối tình cho ai?', ['Thuý Vân','Thuý Kiều','Hoạn Thư','Đạm Tiên'], 0, 'Kiều cậy em là Thuý Vân nối duyên với Kim Trọng.'),
    Q('"Cậy em em có chịu lời / Ngồi lên cho chị lạy rồi sẽ thưa" thể hiện?', ['Sự khẩn thiết bất thường của Kiều','Sự kiêu hãnh','Sự vui mừng','Sự thờ ơ'], 0, 'Chị "lạy" em — điều bất thường — thể hiện áp lực bi thảm.'),
    Q('Vì sao Kiều phải trao duyên?', ['Kiều bán mình chuộc cha, không thể giữ lời thề với Kim Trọng','Hết yêu','Bị ép cưới','Thuý Vân giành'], 0, 'Hoàn cảnh éo le buộc Kiều hi sinh.'),
    Q('Đoạn trích thể hiện vẻ đẹp gì ở Kiều?', ['Hiếu thảo, vị tha, đa cảm','Ích kỷ','Lạnh lùng','Yếu đuối thuần tuý'], 0, 'Hi sinh tình riêng vì gia đình — đức hi sinh cao đẹp.'),
    Q('Nghệ thuật nổi bật trong đoạn?', ['Miêu tả nội tâm tinh tế','Tả cảnh thiên nhiên','Đối thoại trào phúng','Tự sự lịch sử'], 0, 'Nguyễn Du nổi tiếng bậc thầy về tâm lý nhân vật.'),
    Q('Câu "Duyên này thì giữ vật này của chung" nói về?', ['Trao vật làm tin (kim thoa, tờ mây)','Tiền bạc','Quà mừng','Đồ vật bình thường'], 0, 'Trao kỉ vật tình yêu — đoạn đứt ruột.'),
  ]),

  M(15, 'Truyện Kiều — Chí khí anh hùng (Từ Hải)', [
    Q('Nhân vật Từ Hải xuất hiện như?', ['Người anh hùng "đầu đội trời, chân đạp đất"','Thư sinh','Quan lại','Người buôn'], 0, 'Hình ảnh người anh hùng lý tưởng hoá.'),
    Q('Từ Hải gặp Thuý Kiều ở đâu?', ['Lầu xanh của Tú Bà','Trên đường','Trong cung','Tại lễ hội'], 0, 'Gặp Kiều khi nàng đang bị Tú Bà ép tiếp khách.'),
    Q('"Trượng phu thoắt đã động lòng bốn phương" thể hiện?', ['Khát vọng tung hoành thiên hạ','Ham vui','Buồn chán','Sợ hãi'], 0, 'Chí khí anh hùng không thể bị bó hẹp tình riêng.'),
    Q('"Bao giờ mười vạn tinh binh / Tiếng chiêng dậy đất, bóng tinh rợp đường" thể hiện?', ['Ước hẹn lập đại nghiệp','Lời chia tay buồn','Nỗi sợ','Tiếc thương'], 0, 'Hứa hẹn quay lại với khí thế hùng tráng.'),
    Q('Nguyễn Du gửi gắm gì qua Từ Hải?', ['Khát vọng tự do, công lý, lý tưởng anh hùng','Hưởng thụ','Buồn chán cuộc đời','Tự ti'], 0, 'Từ Hải là giấc mơ anh hùng và công lý của Nguyễn Du.'),
    Q('Bút pháp xây dựng Từ Hải?', ['Lý tưởng hoá, ước lệ','Tả thực','Châm biếm','Bình thường'], 0, 'Bút pháp ước lệ tượng trưng đậm chất sử thi.'),
  ]),

  M(16, 'Hịch tướng sĩ — Trần Quốc Tuấn', [
    Q('Hịch tướng sĩ được viết khi?', ['Trước cuộc kháng chiến chống Nguyên Mông lần 2','Trước khởi nghĩa Lam Sơn','Sau khi thắng giặc','Khi xây Cổ Loa'], 0, 'Hưng Đạo Đại Vương viết hịch cổ vũ tướng sĩ chống Nguyên (1284).'),
    Q('"Ta thường tới bữa quên ăn, nửa đêm vỗ gối…" thể hiện?', ['Nỗi đau xót lo cho đất nước','Sự mệt mỏi','Vui chơi','Bệnh tật'], 0, 'Lòng yêu nước, căm thù giặc cháy bỏng.'),
    Q('"Hịch" là thể văn?', ['Để kêu gọi, khích lệ tướng sĩ','Truyện kể','Thơ tình','Tản văn'], 0, 'Hịch dùng để kêu gọi chiến đấu, khích lệ tinh thần.'),
    Q('Tác giả phê phán tướng sĩ điều gì?', ['Lối sống hưởng lạc, vô trách nhiệm','Tham lam','Hèn nhát thuần','Trộm cắp'], 0, 'Phê phán thái độ thờ ơ, hưởng lạc trước nguy cơ mất nước.'),
    Q('Mục đích cuối cùng của bài hịch?', ['Kêu gọi tướng sĩ học Binh thư yếu lược, sẵn sàng chiến đấu','Khoe tài','Trách móc','Xin lỗi'], 0, 'Kêu gọi đoàn kết, rèn luyện, sẵn sàng diệt giặc.'),
    Q('Giọng văn của bài hịch?', ['Hùng hồn, tha thiết, đanh thép','Nhẹ nhàng','Hài hước','Cô đơn'], 0, 'Văn chính luận hào hùng đầy sức thuyết phục.'),
  ]),

  M(17, 'Đại Việt sử ký toàn thư — Sử kí Việt Nam', [
    Q('Đại Việt sử ký toàn thư do ai biên soạn chính?', ['Ngô Sĩ Liên','Lê Văn Hưu','Phan Phu Tiên','Lê Quý Đôn'], 0, 'Ngô Sĩ Liên đời Lê Thánh Tông biên soạn (1479).'),
    Q('Bộ sử này ghi chép lịch sử Việt Nam từ?', ['Họ Hồng Bàng đến năm 1675','Triệu Đà','Lê sơ','Hậu Lê'], 0, 'Từ thời huyền sử Hồng Bàng đến hết Lê Trung Hưng.'),
    Q('Đặc điểm thể loại sử ký?', ['Ghi chép sự kiện lịch sử có chọn lọc, có bình luận','Hư cấu','Thơ ca','Tiểu thuyết'], 0, 'Sử ký kết hợp ghi chép và bình giá nhân vật, sự kiện.'),
    Q('Ngô Sĩ Liên là sử gia thời?', ['Lê Thánh Tông','Lý','Trần','Nguyễn'], 0, 'Ông sống thời Lê Thánh Tông (TK XV).'),
    Q('Một giá trị của Đại Việt sử ký toàn thư?', ['Bảo tồn lịch sử và đạo lý dân tộc','Chỉ là sách giải trí','Sách khoa học tự nhiên','Văn vần'], 0, 'Là nguồn tư liệu quý nhất về lịch sử trung đại Việt Nam.'),
    Q('Ngôn ngữ của Đại Việt sử ký toàn thư?', ['Chữ Hán','Chữ Nôm','Quốc ngữ','Pháp'], 0, 'Viết bằng chữ Hán (cũng như đa số sử thư đương thời).'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Văn học dân gian khác văn học viết ở?', ['Tính truyền miệng và tập thể','Số trang','Ngôn ngữ','Thời gian'], 0, 'Đặc trưng cơ bản phân biệt VHDG với VH viết.'),
    Q('Tác phẩm "Bình Ngô đại cáo" của?', ['Nguyễn Trãi','Nguyễn Du','Trần Quốc Tuấn','Lê Lợi'], 0, 'Nguyễn Trãi soạn thừa lệnh Lê Lợi.'),
    Q('Truyện Kiều có bao nhiêu câu lục bát?', ['3 254','1 000','5 000','2 254'], 0, '3254 câu.'),
    Q('Bà chúa thơ Nôm là?', ['Hồ Xuân Hương','Bà Huyện Thanh Quan','Đoàn Thị Điểm','Lê Ngọc Hân'], 0, 'Mệnh danh dành cho Hồ Xuân Hương.'),
    Q('Hịch tướng sĩ ra đời để?', ['Khích lệ tướng sĩ chống Nguyên','Khuyên dân làm ruộng','Báo công','Ghi sự kiện'], 0, 'Tác phẩm chính luận yêu nước.'),
    Q('Đại Việt sử ký toàn thư viết bằng?', ['Chữ Hán','Chữ Nôm','Quốc ngữ','Pháp'], 0, 'Sử ký trung đại VN viết bằng chữ Hán.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Phú sông Bạch Đằng — Trương Hán Siêu', [
    Q('Trương Hán Siêu là danh sĩ thời?', ['Trần','Lý','Lê','Nguyễn'], 0, 'Sống cuối Trần đầu Hồ.'),
    Q('Bài phú gắn với chiến thắng?', ['Bạch Đằng năm 1288','Chi Lăng','Đống Đa','Như Nguyệt'], 0, 'Chiến thắng quân Nguyên trên sông Bạch Đằng (1288).'),
    Q('Thể loại "phú" có đặc điểm?', ['Văn biền ngẫu, dùng để miêu tả + biểu cảm','Thơ tứ tuyệt','Truyện kể','Hịch'], 0, 'Phú là thể văn biền ngẫu cổ điển.'),
    Q('Nhân vật "khách" trong bài tượng trưng cho?', ['Người trí thức yêu nước, tinh thần kẻ sĩ','Vua chúa','Nông dân','Lính'], 0, 'Khách là sự phân thân của tác giả — kẻ sĩ thưởng ngoạn.'),
    Q('Hình ảnh "Đến sông Bạch Đằng…" gợi?', ['Niềm tự hào và nỗi tiếc thương quá khứ hào hùng','Vui mừng','Buồn chán','Sợ hãi'], 0, 'Hoài niệm chiến công lịch sử trên dòng sông lịch sử.'),
    Q('Tư tưởng cốt lõi của bài phú?', ['Đề cao yếu tố con người, đạo lý là gốc của thắng lợi','May rủi','Thiên thời','Thuần lực lượng'], 0, '"Cốt mình đức cao" — đề cao nhân nghĩa và con người.'),
  ]),

  M(20, 'Đại cáo bình Ngô — Phần kết (Tuyên bố hoà bình)', [
    Q('Phần kết tuyên bố?', ['Hoà bình, mở ra kỷ nguyên mới','Tiếp tục chiến tranh','Ăn mừng riêng','Đầu hàng'], 0, 'Tuyên bố hoà bình và xây dựng quốc gia thái bình.'),
    Q('"Xã tắc từ đây vững bền / Giang sơn từ đây đổi mới" thể hiện?', ['Khát vọng đất nước thái bình thịnh trị','Buồn nuối tiếc','Hoài nghi','Lo lắng'], 0, 'Niềm tin vào tương lai sau chiến thắng.'),
    Q('Tư tưởng của Nguyễn Trãi trong toàn bài?', ['Nhân nghĩa và yêu nước thương dân','Bá vương cứng rắn','Hư vô','Tôn giáo'], 0, 'Tư tưởng nhân nghĩa lấy dân làm gốc.'),
    Q('Bố cục Bình Ngô đại cáo gồm mấy phần?', ['4','3','5','2'], 0, '4 phần: chính nghĩa, tố cáo, diễn biến, tuyên bố.'),
    Q('Giá trị của Bình Ngô đại cáo?', ['Vừa là áng văn chính luận mẫu mực vừa là bản tuyên ngôn độc lập','Chỉ là sách lịch sử','Chỉ là thơ','Chỉ là sớ tấu'], 0, 'Giá trị kép: văn học và lịch sử.'),
    Q('Câu mở đầu "Việc nhân nghĩa cốt ở…" nói về?', ['Yên dân','Yêu nước','Giàu mạnh','Bình loạn'], 0, '"Yên dân" và "trừ bạo" là 2 trụ cột nhân nghĩa.'),
  ]),

  M(21, 'Văn nghị luận xã hội — Cấu trúc bài viết', [
    Q('Văn nghị luận xã hội bàn về?', ['Một tư tưởng đạo lý hoặc hiện tượng đời sống','Tác phẩm văn học','Một nhân vật văn học','Đoạn thơ'], 0, 'Nghị luận xã hội thiên về tư tưởng/hiện tượng XH.'),
    Q('Mở bài cần?', ['Giới thiệu vấn đề nghị luận','Kể chuyện riêng','Bình thơ','Tả cảnh'], 0, 'Nêu vấn đề bàn luận.'),
    Q('Thân bài nghị luận tư tưởng đạo lý thường gồm?', ['Giải thích – chứng minh – bàn luận – bài học','Tả – kể – cảm','Mở – thân – kết','Đặt vấn đề – tả – kể'], 0, 'Bốn bước cơ bản của nghị luận tư tưởng.'),
    Q('Dẫn chứng nên?', ['Tiêu biểu, xác thực, đa dạng','Càng nhiều càng tốt','Tự bịa','Trùng lặp'], 0, 'Dẫn chứng chọn lọc, đa dạng và đúng.'),
    Q('Yêu cầu của kết bài?', ['Khái quát + liên hệ bản thân','Lặp lại mở bài','Kể chuyện','Nhận xét người khác'], 0, 'Khái quát ý nghĩa và rút bài học cho bản thân.'),
    Q('Văn nghị luận xã hội đề cao?', ['Lập luận chặt chẽ, dẫn chứng thuyết phục','Hư cấu','Vần điệu','Tả cảnh'], 0, 'Khả năng tư duy logic, lý lẽ và bằng chứng.'),
  ]),

  M(22, 'Văn nghị luận xã hội — Tư tưởng đạo lý', [
    Q('Nghị luận về tư tưởng đạo lý nêu được?', ['Quan niệm, ý nghĩa, biểu hiện, phản đề','Chỉ định nghĩa','Chỉ ví dụ','Chỉ cảm nhận'], 0, 'Cần phân tích đa chiều, có phản đề.'),
    Q('Ví dụ tư tưởng đạo lý?', ['"Ăn quả nhớ kẻ trồng cây"','Bão lụt','Đại dịch','Ô nhiễm'], 0, 'Câu tục ngữ — tư tưởng đạo lý cổ truyền.'),
    Q('"Phản đề" trong bài nghị luận để?', ['Phê phán biểu hiện trái với tư tưởng đúng','Bỏ qua','Khẳng định','Mặc kệ'], 0, 'Phản đề: phê phán biểu hiện ngược lại, tăng sức thuyết phục.'),
    Q('Kỹ năng quan trọng khi nghị luận?', ['Lập luận logic, có dẫn chứng','Viết dài','Dùng nhiều từ Hán Việt','Vần điệu'], 0, 'Logic và dẫn chứng quyết định chất lượng.'),
    Q('Bài học nhận thức và hành động đặt ở?', ['Cuối thân bài hoặc kết bài','Mở bài','Giữa thân','Không cần'], 0, 'Bài học rút ra ở phần cuối thân hoặc kết bài.'),
    Q('Khi bàn về một câu danh ngôn, bước đầu cần?', ['Giải thích từ ngữ/khái niệm trong câu','Phê phán ngay','Bình luận','Liên hệ ngay'], 0, 'Giải thích là bước đầu tiên.'),
  ]),

  M(23, 'Văn nghị luận xã hội — Hiện tượng đời sống', [
    Q('Hiện tượng đời sống cần nghị luận thường là?', ['Vấn đề có tính thời sự, ảnh hưởng cộng đồng','Câu thơ','Nhân vật văn học','Đoạn văn'], 0, 'VD: bạo lực học đường, ô nhiễm, mạng xã hội.'),
    Q('Cấu trúc bài nghị luận hiện tượng?', ['Thực trạng – nguyên nhân – hậu quả – giải pháp','Tả – kể – cảm','Mở – thân – kết','Chứng minh – phản đề'], 0, 'Cấu trúc 4 bước phổ biến.'),
    Q('Khi bàn về ô nhiễm môi trường, "thực trạng" gồm?', ['Số liệu, hiện trạng đang xảy ra','Suy đoán cá nhân','Cảm xúc','Câu hỏi'], 0, 'Mô tả tình hình thực tế bằng số liệu/dẫn chứng.'),
    Q('"Giải pháp" trong nghị luận hiện tượng?', ['Đề xuất biện pháp khắc phục','Liệt kê hậu quả','Hỏi tu từ','Tả cảnh'], 0, 'Đưa ra biện pháp cụ thể, khả thi.'),
    Q('Ví dụ hiện tượng tích cực?', ['Phong trào "Mùa hè xanh", thiện nguyện','Chiến tranh','Ô nhiễm','Tham nhũng'], 0, 'Hiện tượng đáng biểu dương.'),
    Q('Người viết cần thái độ?', ['Khách quan, đa chiều, dựa số liệu','Cảm tính','Một chiều','Vô cảm'], 0, 'Thái độ khách quan, có cơ sở.'),
  ]),

  M(24, 'Văn nghị luận văn học — Phân tích tác phẩm', [
    Q('Nghị luận văn học bàn về?', ['Tác phẩm/đoạn trích/nhân vật văn học','Sự kiện đời sống','Tư tưởng','Khoa học'], 0, 'Đối tượng là tác phẩm văn học.'),
    Q('Khi phân tích một bài thơ, cần chú ý?', ['Nội dung + nghệ thuật','Chỉ nội dung','Chỉ nghệ thuật','Tiểu sử tác giả'], 0, 'Kết hợp nội dung và hình thức nghệ thuật.'),
    Q('Yếu tố nào thuộc nghệ thuật của một bài thơ?', ['Vần, nhịp, hình ảnh, biện pháp tu từ','Nhân vật','Cốt truyện','Sự kiện'], 0, 'Các yếu tố hình thức của thơ.'),
    Q('Khi phân tích nhân vật, cần?', ['Ngoại hình, hành động, lời nói, nội tâm, quan hệ','Chỉ ngoại hình','Chỉ lời nói','Chỉ hành động'], 0, 'Phân tích đa chiều mới đầy đủ.'),
    Q('Yếu tố đặc trưng của thể truyện?', ['Cốt truyện, nhân vật, tình huống truyện','Vần điệu','Phép đối','Niêm luật'], 0, 'Cốt truyện và nhân vật là trụ cột.'),
    Q('Cảm hứng chủ đạo của tác phẩm là?', ['Tình cảm chủ yếu tác giả gửi gắm','Chỉ chủ đề','Chỉ nhân vật','Chỉ bối cảnh'], 0, 'Cảm hứng chủ đạo là tình cảm xuyên suốt tác phẩm.'),
  ]),

  M(25, 'Văn nghị luận văn học — So sánh và đánh giá', [
    Q('So sánh hai tác phẩm, cần tìm?', ['Điểm chung và điểm riêng','Chỉ chung','Chỉ riêng','Chỉ tác giả'], 0, 'Vừa thấy tương đồng, vừa thấy khác biệt.'),
    Q('Tiêu chí so sánh có thể là?', ['Đề tài, chủ đề, hình tượng, nghệ thuật','Số trang','Năm in','Giá tiền'], 0, 'Các tiêu chí nội dung và hình thức.'),
    Q('Đánh giá tác phẩm cần dựa trên?', ['Giá trị nội dung + nghệ thuật + ý nghĩa thời đại','Cảm tính cá nhân','Thị trường','Tin đồn'], 0, 'Đánh giá khách quan có cơ sở.'),
    Q('Khi so sánh hai bài thơ về quê hương, cần?', ['Hiểu rõ bối cảnh từng bài','Chỉ thuộc bài','Đoán mò','Tả cảnh'], 0, 'Bối cảnh quyết định cách thể hiện.'),
    Q('"Giá trị thời đại" của tác phẩm là?', ['Ý nghĩa tác phẩm với người đọc qua các thời kỳ','Năm xuất bản','Doanh thu','Số trang'], 0, 'Sức sống của tác phẩm qua thời gian.'),
    Q('Bài nghị luận so sánh cần?', ['Cấu trúc rõ ràng, song hành 2 đối tượng','Chỉ nói 1 cái','Lan man','Tả người'], 0, 'Cấu trúc song hành hoặc kết hợp.'),
  ]),

  M(26, 'Văn bản thông tin — Đặc điểm', [
    Q('Văn bản thông tin nhằm?', ['Cung cấp thông tin chính xác cho người đọc','Bày tỏ cảm xúc','Hư cấu','Vần điệu'], 0, 'Mục đích thông tin là chính.'),
    Q('Đặc điểm văn bản thông tin?', ['Khách quan, chính xác, rõ ràng','Trữ tình','Hư cấu','Đa nghĩa'], 0, 'Tính khách quan và chính xác.'),
    Q('Cấu trúc văn bản thông tin thường có?', ['Tiêu đề, đề mục, đoạn, bảng/biểu','Vần điệu','Cốt truyện','Lời thoại'], 0, 'Cấu trúc rõ ràng giúp tra cứu.'),
    Q('Phương tiện phi ngôn ngữ trong văn bản thông tin?', ['Bảng, biểu đồ, hình ảnh','Vần điệu','Phép đối','Ẩn dụ'], 0, 'Biểu đồ, ảnh giúp truyền tải thông tin trực quan.'),
    Q('Ví dụ văn bản thông tin?', ['Bản tin, infographic, hướng dẫn sử dụng','Bài thơ','Truyện ngắn','Sử thi'], 0, 'Các loại văn bản chuyển tải thông tin.'),
    Q('Người viết văn bản thông tin cần?', ['Xác minh nguồn, tránh sai lệch','Tả cảnh','Hư cấu','Bịa số liệu'], 0, 'Phải kiểm chứng nguồn tin.'),
  ]),

  M(27, 'Văn bản thông tin — Viết bản tin và infographic', [
    Q('Một bản tin gồm các yếu tố?', ['Tiêu đề, mở, thân, kết — trả lời 5W1H','Vần, nhịp','Nhân vật, cốt','Phép đối'], 0, 'Bản tin trả lời các câu hỏi 5W1H (ai, cái gì, khi nào, ở đâu, tại sao, như thế nào).'),
    Q('Tiêu đề bản tin cần?', ['Ngắn, gọn, hấp dẫn, có thông tin chính','Dài, ẩn ý','Vần','Hư cấu'], 0, 'Tiêu đề cô đọng nội dung.'),
    Q('Infographic kết hợp?', ['Văn bản + hình ảnh + dữ liệu','Chỉ chữ','Chỉ ảnh','Chỉ số liệu'], 0, 'Đồ hoạ thông tin = chữ + hình + dữ liệu.'),
    Q('Ưu điểm của infographic?', ['Trực quan, dễ hiểu, dễ nhớ','Dài dòng','Khó đọc','Trừu tượng'], 0, 'Trực quan hoá thông tin phức tạp.'),
    Q('Khi viết bản tin, ngôn ngữ cần?', ['Trung tính, khách quan','Cảm tính','Hài hước','Trữ tình'], 0, 'Văn báo chí khách quan.'),
    Q('Nguồn thông tin trong bản tin cần?', ['Có dẫn nguồn rõ ràng','Bí mật','Tự nghĩ','Không cần'], 0, 'Trích dẫn nguồn để đảm bảo độ tin cậy.'),
  ]),

  M(28, 'Tổng kết văn học dân gian Việt Nam', [
    Q('Vai trò của VHDG đối với VH viết?', ['Là kho tàng đề tài, cảm hứng, chất liệu cho VH viết','Không liên quan','Đối lập','Thay thế'], 0, 'Nhiều tác giả viết khai thác mô-típ dân gian.'),
    Q('Thể loại nào là sử thi anh hùng?', ['Đăm Săn','Tấm Cám','Sơn Tinh – Thuỷ Tinh','Trầu Cau'], 0, 'Đăm Săn là sử thi của người Ê-đê.'),
    Q('Đặc trưng nghệ thuật VHDG?', ['Ước lệ, công thức, mô-típ lặp lại','Hiện thực sắc nét','Tâm lý phức tạp','Cá nhân hoá cao'], 0, 'Tính công thức và mô-típ là đặc trưng VHDG.'),
    Q('Truyện cổ tích thường có kết thúc?', ['Có hậu','Bi kịch','Mở','Không rõ'], 0, 'Phần lớn cổ tích kết thúc có hậu — phản ánh ước mơ.'),
    Q('Ca dao chủ yếu phản ánh?', ['Tâm tư tình cảm và đời sống nhân dân','Triết lý phương Tây','Lịch sử thế giới','Khoa học'], 0, 'Tiếng nói tâm hồn của nhân dân lao động.'),
    Q('Giá trị lớn nhất của VHDG?', ['Lưu giữ bản sắc văn hoá và tâm hồn dân tộc','Giải trí thuần','Kinh tế','Khoa học'], 0, 'VHDG là di sản tinh thần vô giá.'),
  ]),

  M(29, 'Tổng kết văn học trung đại Việt Nam', [
    Q('Văn học trung đại Việt Nam tính từ?', ['Thế kỷ X đến hết thế kỷ XIX','Đầu CN','Thế kỷ XX','Cổ đại'], 0, 'Từ Ngô Quyền (938/X) đến hết XIX.'),
    Q('Chữ viết chính của VHTĐ?', ['Chữ Hán và chữ Nôm','Chỉ Hán','Chỉ Nôm','Quốc ngữ'], 0, 'Cả Hán và Nôm song hành.'),
    Q('Tác phẩm nào KHÔNG thuộc VHTĐ?', ['Số đỏ (Vũ Trọng Phụng)','Truyện Kiều','Bình Ngô đại cáo','Hịch tướng sĩ'], 0, 'Số đỏ là văn học hiện đại (1936).'),
    Q('Cảm hứng chủ đạo VHTĐ?', ['Yêu nước và nhân đạo','Cá nhân','Khoa học','Phi lý'], 0, 'Hai dòng cảm hứng lớn.'),
    Q('Đặc điểm thi pháp VHTĐ?', ['Ước lệ tượng trưng, sùng cổ, phi ngã','Hiện thực sắc nét','Cái tôi cá nhân','Tự do tuyệt đối'], 0, 'Thi pháp đặc trưng của VHTĐ.'),
    Q('Đại thi hào của VHTĐ Việt Nam?', ['Nguyễn Du','Nguyễn Trãi','Hồ Xuân Hương','Cả 3 đều là danh nhân lớn'], 3, 'Cả 3 đều là danh nhân văn hoá lớn.'),
  ]),

  M(30, 'Tổng kết thơ Đường', [
    Q('Thơ Đường ở Trung Quốc phát triển vào?', ['Thế kỷ VII–X','Thế kỷ III','Thế kỷ XII','Thế kỷ XV'], 0, 'Triều Đường (618–907).'),
    Q('Ba đại biểu lớn của thơ Đường?', ['Lý Bạch, Đỗ Phủ, Bạch Cư Dị','Khổng Tử, Lão Tử','Tô Đông Pha','Nguyễn Du'], 0, 'Lý Bạch (thi tiên), Đỗ Phủ (thi thánh), Bạch Cư Dị (thi nhân của nhân dân).'),
    Q('Thể thơ điển hình thời Đường?', ['Thất ngôn bát cú và tứ tuyệt','Lục bát','Song thất lục bát','Tự do'], 0, 'Thể luật Đường nổi tiếng.'),
    Q('Bài Hoàng Hạc Lâu của?', ['Thôi Hiệu','Lý Bạch','Đỗ Phủ','Bạch Cư Dị'], 0, 'Thôi Hiệu — bài thơ được coi là tuyệt tác.'),
    Q('Tỳ bà hành thuộc thể?', ['Hành (trường thiên)','Tứ tuyệt','Bát cú','Cổ phong'], 0, 'Trường thiên kể chuyện.'),
    Q('Ảnh hưởng của thơ Đường đến VN?', ['Sâu rộng, mẫu mực cho thơ chữ Hán Việt Nam','Không đáng kể','Chỉ ngắn hạn','Đối lập'], 0, 'Thơ Đường là kiểu mẫu cho thơ trung đại VN.'),
  ]),

  M(31, 'Tổng kết Truyện Kiều', [
    Q('Truyện Kiều giàu giá trị?', ['Nhân đạo và hiện thực','Khoa học','Triết học','Tôn giáo'], 0, 'Tác phẩm có cả giá trị nhân đạo và hiện thực sâu sắc.'),
    Q('Giá trị nhân đạo Truyện Kiều thể hiện ở?', ['Cảm thương cho số phận con người, đặc biệt phụ nữ','Khen chê chính trị','Khoa học','Tôn giáo'], 0, 'Lòng nhân ái với người tài hoa bạc mệnh.'),
    Q('Giá trị hiện thực thể hiện ở?', ['Tố cáo xã hội phong kiến bất công','Tả cảnh đẹp','Tả tình thuần','Ca ngợi vua'], 0, 'Phơi bày bất công, đồng tiền chi phối số phận.'),
    Q('Nguyễn Du sử dụng ngôn ngữ?', ['Tiếng Việt giàu hình ảnh, kết hợp Hán + Nôm + dân gian','Chỉ Hán','Chỉ Nôm','Chỉ dân gian'], 0, 'Ngôn ngữ kết hợp hài hoà nhiều nguồn.'),
    Q('Nhân vật Thuý Kiều tiêu biểu cho?', ['Người phụ nữ tài sắc nhưng số phận bi thảm','Phụ nữ giàu sang','Bình thường','Vô tài'], 0, '"Tài tình chi lắm cho trời đất ghen".'),
    Q('Truyện Kiều được dịch ra?', ['Nhiều thứ tiếng trên thế giới','Chỉ tiếng Pháp','Chỉ Hán','Chỉ Anh'], 0, 'Đã có nhiều bản dịch khắp thế giới.'),
  ]),

  M(32, 'Ôn tập nghị luận xã hội tổng hợp', [
    Q('Nghị luận xã hội cần kỹ năng?', ['Phân tích – tổng hợp – lập luận','Tả cảnh','Vần điệu','Hư cấu'], 0, 'Tư duy logic là quan trọng nhất.'),
    Q('Một bài nghị luận xã hội thường viết ?', ['Khoảng 600 chữ (cho đề trong đề thi)','Vài chục chữ','Vài nghìn chữ','Tuỳ thích'], 0, 'Thông thường đề thi yêu cầu ~600 từ.'),
    Q('Phần mở bài cần?', ['Giới thiệu vấn đề và nêu luận đề','Tả người','Kể chuyện','Đặt câu hỏi'], 0, 'Mở bài: dẫn dắt + nêu vấn đề.'),
    Q('Dẫn chứng tốt là?', ['Tiêu biểu, chính xác, đa dạng','Tự nghĩ','Trùng lặp','Cảm tính'], 0, 'Dẫn chứng quyết định sức thuyết phục.'),
    Q('Khi bàn về một câu danh ngôn, bước đầu là?', ['Giải thích nội dung câu','Phê phán ngay','Liên hệ ngay','Tả cảnh'], 0, 'Giải thích trước khi bàn luận.'),
    Q('Kết bài cần?', ['Khẳng định lại + liên hệ bản thân','Lặp mở','Đặt câu hỏi mới','Tả thiên nhiên'], 0, 'Khái quát và rút bài học cá nhân.'),
  ]),

  M(33, 'Ôn tập nghị luận văn học tổng hợp', [
    Q('Phân tích thơ cần tập trung?', ['Hình ảnh, ngôn ngữ, nhịp, biện pháp tu từ + nội dung','Chỉ nội dung','Chỉ vần','Chỉ tác giả'], 0, 'Cần kết hợp nội dung và nghệ thuật.'),
    Q('Phân tích truyện cần?', ['Cốt truyện, nhân vật, tình huống, chủ đề','Chỉ vần','Chỉ tả cảnh','Tiểu sử'], 0, 'Yếu tố đặc trưng của truyện.'),
    Q('So sánh hai tác phẩm cần?', ['Tiêu chí rõ ràng + cân bằng giữa 2 đối tượng','Chỉ 1 đối tượng','Không cấu trúc','Lan man'], 0, 'So sánh có tiêu chí.'),
    Q('Đoạn văn 200 chữ trong nghị luận VH cần?', ['Cô đọng, có luận điểm rõ ràng','Lan man','Tả cảnh','Hư cấu'], 0, 'Đoạn ngắn nhưng phải có ý mạch lạc.'),
    Q('Một bài nghị luận văn học có?', ['Mở – thân – kết','Chỉ mở','Chỉ thân','Chỉ kết'], 0, 'Bố cục 3 phần cơ bản.'),
    Q('Khi viết về một nhân vật, cần?', ['Dẫn chứng từ chính tác phẩm','Tưởng tượng','Phim ảnh','Sách khác'], 0, 'Dẫn chứng phải lấy từ tác phẩm gốc.'),
  ]),

  M(34, 'Đề tổng hợp 1 — Đọc hiểu và viết', [
    Q('Văn bản nghị luận khác văn bản tự sự ở?', ['Lập luận thay vì cốt truyện','Không khác','Chỉ ngôn ngữ','Chỉ độ dài'], 0, 'Nghị luận lập luận, tự sự kể chuyện.'),
    Q('Phép tu từ "ẩn dụ" là?', ['Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng','Phóng đại','So sánh có từ "như"','Liệt kê'], 0, 'Ẩn dụ là so sánh ngầm.'),
    Q('"Thuyền về có nhớ bến chăng / Bến thì một dạ khăng khăng đợi thuyền" dùng?', ['Ẩn dụ + nhân hoá','Liệt kê','Hoán dụ','Điệp ngữ'], 0, 'Thuyền – bến ẩn dụ cho chàng – nàng; nhân hoá nỗi nhớ.'),
    Q('Để viết đoạn nghị luận xã hội tốt cần?', ['Luận điểm + lý lẽ + dẫn chứng','Vần điệu','Tả cảnh','Hư cấu'], 0, 'Đầy đủ 3 thành phần.'),
    Q('Khi đọc hiểu một văn bản, bước đầu?', ['Xác định thể loại và nội dung chính','Chỉ đọc lướt','Học thuộc','Bỏ qua'], 0, 'Bước đầu là nhận diện thể loại và nội dung.'),
    Q('Văn bản đa phương thức là?', ['Kết hợp văn bản + hình ảnh + đồ hoạ','Chỉ chữ','Chỉ ảnh','Chỉ video'], 0, 'Đa phương thức kết hợp nhiều phương tiện.'),
  ]),

  M(35, 'Đề tổng hợp 2 — Cuối năm', [
    Q('Tác phẩm nào của Nguyễn Trãi?', ['Bình Ngô đại cáo và Quốc âm thi tập','Truyện Kiều','Hịch tướng sĩ','Phú sông Bạch Đằng'], 0, 'Hai tác phẩm tiêu biểu của Ức Trai.'),
    Q('Đại Việt sử ký toàn thư do ai soạn chính?', ['Ngô Sĩ Liên','Lê Văn Hưu','Phan Phu Tiên','Nguyễn Trãi'], 0, 'Ngô Sĩ Liên đời Lê Thánh Tông.'),
    Q('Bài Hoàng Hạc Lâu thể hiện cảm xúc?', ['Nhớ quê và hoài cổ','Vui','Tự hào','Giận'], 0, 'Cảm hứng nhớ quê tha thiết.'),
    Q('Đoạn "Trao duyên" thể hiện?', ['Bi kịch và đức hi sinh của Kiều','Vui mừng','Tự hào','Châm biếm'], 0, 'Đoạn đầy nước mắt của Truyện Kiều.'),
    Q('Hồ Xuân Hương được mệnh danh?', ['Bà chúa thơ Nôm','Đại thi hào','Nữ hoàng văn xuôi','Bà chúa thơ Đường'], 0, 'Mệnh danh nổi tiếng.'),
    Q('Hịch tướng sĩ ra đời nhằm?', ['Khích lệ tướng sĩ chống Nguyên Mông','Khuyên dân','Báo công','Ghi sử'], 0, 'Cổ vũ chiến đấu trong kháng chiến chống Nguyên.'),
  ]),
];

export const H10NV_SCENARIOS = indexBy(H10NV_WEEKS);
