// ============================================================
// Lớp 2 · ÂM NHẠC — 36 tuần (HK1: 1–18 · HK2: 19–36 · T22 chủ đề Tết)
// Bám Chương trình GDPT 2018 môn Âm nhạc (1 tiết/tuần).
// ID prefix: "P2AN-wNN-quiz"
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2AN', 'am-nhac', n, title, qs, opts);

export const P2AN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Quốc ca Việt Nam', [
    Q('Quốc ca Việt Nam có tên gốc là gì?', ['Tiến quân ca', 'Hành quân xa', 'Diệt phát xít', 'Lên đàng'], 0, 'Quốc ca Việt Nam là bài "Tiến quân ca".'),
    Q('Ai là tác giả của Quốc ca Việt Nam?', ['Phạm Tuyên', 'Văn Cao', 'Hoàng Vân', 'Trịnh Công Sơn'], 1, 'Nhạc sĩ Văn Cao sáng tác "Tiến quân ca" năm 1944.'),
    Q('Khi hát Quốc ca, em phải có tư thế thế nào?', ['Ngồi tự do', 'Đứng nghiêm, mắt hướng cờ', 'Vừa hát vừa chạy', 'Nằm xuống'], 1, 'Phải đứng nghiêm trang, mắt hướng về Quốc kỳ.'),
    Q('Quốc ca thường được hát vào dịp nào ở trường?', ['Giờ ra chơi', 'Lễ chào cờ đầu tuần', 'Giờ ăn trưa', 'Giờ ngủ trưa'], 1, 'Lễ chào cờ thứ Hai đầu tuần là dịp hát Quốc ca.'),
    Q('Khi hát Quốc ca em có được cười đùa không?', ['Có, để vui', 'Không, phải trang nghiêm', 'Tuỳ thích', 'Chỉ cười nhẹ'], 1, 'Hát Quốc ca cần thái độ trang nghiêm, tôn kính.'),
    Q('Lá cờ Tổ quốc Việt Nam có màu gì?', ['Xanh – trắng', 'Đỏ sao vàng', 'Vàng – đen', 'Trắng – xanh'], 1, 'Quốc kỳ Việt Nam nền đỏ, ngôi sao vàng năm cánh ở giữa.'),
  ]),

  M(2, 'Bài hát "Em yêu trường em" (Hoàng Vân)', [
    Q('Bài hát "Em yêu trường em" do nhạc sĩ nào sáng tác?', ['Phạm Tuyên', 'Hoàng Vân', 'Lưu Hữu Phước', 'Văn Cao'], 1, 'Nhạc sĩ Hoàng Vân là tác giả bài "Em yêu trường em".'),
    Q('Bài hát "Em yêu trường em" nói về tình cảm với?', ['Ông bà', 'Mái trường, thầy cô, bạn bè', 'Quê hương xa', 'Chú bộ đội'], 1, 'Bài hát thể hiện tình yêu mái trường, thầy cô và bạn bè.'),
    Q('Câu hát mở đầu bài là "Em yêu …"?', ['mẹ em', 'trường em', 'bố em', 'cô em'], 1, '"Em yêu trường em, với bao bạn thân…"'),
    Q('Khi hát bài này em nên có cảm xúc thế nào?', ['Buồn bã', 'Vui tươi, trìu mến', 'Giận dữ', 'Sợ hãi'], 1, 'Bài hát có giai điệu vui tươi, đầm ấm.'),
    Q('Nhạc sĩ Hoàng Vân nổi tiếng vì sáng tác cho ai?', ['Người lớn tuổi', 'Thiếu nhi và cách mạng', 'Chỉ ca khúc tình yêu', 'Chỉ nhạc nước ngoài'], 1, 'Hoàng Vân nhiều ca khúc thiếu nhi và nhạc cách mạng nổi tiếng.'),
    Q('Mái trường trong bài hát là nơi để em làm gì?', ['Chơi điện tử', 'Học tập, vui chơi cùng bạn', 'Ngủ', 'Đi mua đồ'], 1, 'Trường là nơi em học tập, vui chơi cùng bạn bè.'),
  ]),

  M(3, 'Hát "Em yêu trường em" + vỗ tay theo phách', [
    Q('Vỗ tay theo phách nghĩa là?', ['Vỗ lúc nào cũng được', 'Vỗ đều theo nhịp đập của bài', 'Vỗ thật to bất kỳ', 'Không vỗ gì cả'], 1, 'Vỗ tay theo phách là vỗ đều theo từng phách của bài hát.'),
    Q('Khi hát kết hợp vỗ tay, hai tay phải?', ['Đập mạnh xuống bàn', 'Vỗ vào nhau đều, nhẹ nhàng', 'Vẫy lên cao', 'Không cử động'], 1, 'Hai bàn tay vỗ nhẹ, đều theo phách.'),
    Q('Tốc độ vỗ tay so với giai điệu nên?', ['Lúc nhanh lúc chậm tuỳ thích', 'Đều, khớp với phách bài hát', 'Càng nhanh càng tốt', 'Càng chậm càng tốt'], 1, 'Vỗ tay phải đều và khớp với phách của bài.'),
    Q('Khi cả lớp cùng hát, em cần lưu ý điều gì?', ['Hát to át bạn', 'Hát hoà giọng cùng bạn', 'Hát theo ý riêng', 'Im lặng không hát'], 1, 'Hát đồng đều, hoà giọng cùng cả lớp.'),
    Q('Vỗ tay theo phách giúp em điều gì?', ['Mỏi tay', 'Cảm nhận nhịp phách, hát đúng nhịp', 'Quên lời bài hát', 'Hát sai nhịp'], 1, 'Giúp cảm nhận nhịp phách và giữ nhịp khi hát.'),
    Q('Khi biểu diễn nhóm bài này, em nên?', ['Quay lưng về khán giả', 'Tươi cười, hướng về khán giả', 'Cúi gằm mặt xuống', 'Nhắm mắt'], 1, 'Biểu diễn cần tươi tắn, tự tin, hướng về khán giả.'),
  ]),

  M(4, 'Phân biệt âm thanh to – nhỏ', [
    Q('Tiếng trống đánh mạnh sẽ nghe?', ['To', 'Nhỏ', 'Im lặng', 'Cao'], 0, 'Đánh mạnh thì âm thanh to (cường độ lớn).'),
    Q('Khi nói thì thầm, âm thanh nghe thế nào?', ['Rất to', 'Nhỏ', 'Vang khắp nơi', 'Cao vút'], 1, 'Thì thầm là âm thanh nhỏ.'),
    Q('Trong âm nhạc, to – nhỏ gọi là?', ['Cao độ', 'Trường độ', 'Cường độ', 'Nhịp độ'], 2, 'To – nhỏ là cường độ của âm thanh.'),
    Q('Tiếng sấm thường là âm thanh?', ['To', 'Nhỏ', 'Không có âm', 'Rất nhẹ'], 0, 'Tiếng sấm là âm thanh rất to.'),
    Q('Tiếng lá rơi thường là âm thanh?', ['To', 'Nhỏ, nhẹ', 'Vang dội', 'Chói tai'], 1, 'Tiếng lá rơi rất nhỏ và nhẹ.'),
    Q('Khi hát ru em bé, ta hát?', ['Rất to', 'Nhỏ, êm dịu', 'Hét lên', 'Không hát'], 1, 'Hát ru cần nhỏ, êm dịu để bé ngủ.'),
  ]),

  M(5, 'Bài hát "Thật là hay" (Hoàng Lân)', [
    Q('Bài "Thật là hay" do nhạc sĩ nào sáng tác?', ['Hoàng Vân', 'Hoàng Lân', 'Phạm Tuyên', 'Văn Cao'], 1, 'Nhạc sĩ Hoàng Lân là tác giả bài "Thật là hay".'),
    Q('Bài "Thật là hay" miêu tả tiếng hót của con vật nào?', ['Mèo', 'Chim', 'Chó', 'Gà'], 1, '"Nghe véo von trong vòm cây, hoạ mi với chim oanh…" — các loài chim.'),
    Q('Câu hát "Nghe véo von…" tả âm thanh của?', ['Còi xe', 'Tiếng chim hót', 'Tiếng trống', 'Tiếng người'], 1, 'Véo von là tiếng chim hót.'),
    Q('Giai điệu bài "Thật là hay" có tính chất?', ['Buồn, chậm', 'Vui tươi, trong sáng', 'Hùng tráng dữ dội', 'Bi thương'], 1, 'Bài có giai điệu vui tươi, trong sáng.'),
    Q('Nhạc sĩ Hoàng Lân là anh em sinh đôi với?', ['Hoàng Vân', 'Hoàng Long', 'Hoàng Hiệp', 'Hoàng Cầm'], 1, 'Hoàng Long – Hoàng Lân là cặp anh em sinh đôi nổi tiếng nhạc thiếu nhi.'),
    Q('Khi hát bài này em nên thể hiện?', ['Vẻ buồn bã', 'Sự vui tươi, yêu thiên nhiên', 'Vẻ tức giận', 'Vẻ mệt mỏi'], 1, 'Bài thể hiện niềm vui và tình yêu thiên nhiên.'),
  ]),

  M(6, 'Phân biệt âm thanh cao – thấp', [
    Q('Tiếng chim hót so với tiếng trống lớn thường?', ['Cao hơn', 'Thấp hơn', 'Bằng nhau', 'Không nghe được'], 0, 'Chim hót có cao độ cao hơn tiếng trống lớn.'),
    Q('Trong âm nhạc, cao – thấp gọi là?', ['Cao độ', 'Cường độ', 'Trường độ', 'Sắc độ'], 0, 'Cao – thấp là cao độ.'),
    Q('Tiếng voi rống thường là âm?', ['Cao vút', 'Thấp, trầm', 'Im lặng', 'Không có'], 1, 'Tiếng voi rống rất trầm (thấp).'),
    Q('Giọng nữ thường cao hơn hay thấp hơn giọng nam?', ['Cao hơn', 'Thấp hơn', 'Bằng nhau', 'Không so sánh được'], 0, 'Thông thường giọng nữ cao hơn giọng nam.'),
    Q('Đàn piano càng sang bên phải, âm thanh càng?', ['Càng thấp', 'Càng cao', 'Càng to', 'Càng nhỏ'], 1, 'Phía bên phải piano là các nốt cao.'),
    Q('Nốt Đô – Mi – Son thì nốt nào cao nhất?', ['Đô', 'Mi', 'Son', 'Bằng nhau'], 2, 'Trong 3 nốt này, Son là cao nhất.'),
  ]),

  M(7, 'Bài hát "Xòe hoa" (Dân ca Thái)', [
    Q('Bài "Xòe hoa" là dân ca dân tộc nào?', ['Kinh', 'Thái', 'Mông', 'Khmer'], 1, '"Xòe hoa" là dân ca của dân tộc Thái.'),
    Q('"Xòe" trong văn hoá Thái là?', ['Một món ăn', 'Một điệu múa truyền thống', 'Một nhạc cụ', 'Một bài thơ'], 1, 'Xòe là điệu múa truyền thống của người Thái.'),
    Q('Trong bài có nhắc đến những âm thanh nào?', ['Tiếng tàu hoả', 'Tiếng chiêng, tiếng khèn', 'Tiếng còi xe', 'Tiếng máy bay'], 1, '"Bùng boong bính boong" — tiếng chiêng, khèn của người Thái.'),
    Q('Người Thái sống chủ yếu ở vùng nào?', ['Đồng bằng sông Cửu Long', 'Miền núi Tây Bắc', 'Biển miền Trung', 'Hải đảo'], 1, 'Dân tộc Thái sống chủ yếu ở Tây Bắc Việt Nam.'),
    Q('Bài "Xòe hoa" có tính chất giai điệu?', ['Buồn bã', 'Vui tươi, rộn ràng', 'Bi thương', 'U sầu'], 1, 'Giai điệu vui tươi, rộn ràng kiểu nhạc lễ hội.'),
    Q('Khi hát "Xòe hoa" có thể kết hợp?', ['Ngồi yên', 'Múa nhẹ theo nhịp xòe', 'Chạy quanh', 'Nhảy dây'], 1, 'Có thể kết hợp động tác múa xòe nhẹ nhàng.'),
  ]),

  M(8, 'Phân biệt âm dài – ngắn (trường độ)', [
    Q('Trong âm nhạc, dài – ngắn gọi là?', ['Cao độ', 'Cường độ', 'Trường độ', 'Tốc độ'], 2, 'Dài – ngắn là trường độ của âm thanh.'),
    Q('Tiếng còi tàu kéo dài là âm?', ['Dài', 'Ngắn', 'Không có âm', 'Cao'], 0, 'Còi tàu kéo dài là âm thanh dài.'),
    Q('Tiếng vỗ tay "bốp" một cái là âm?', ['Dài', 'Ngắn', 'Cao', 'Thấp'], 1, 'Vỗ tay "bốp" gọn là âm thanh ngắn.'),
    Q('Khi hát ngân dài cuối câu, ta nên?', ['Ngắt liền', 'Giữ hơi để ngân đủ', 'Hét lên', 'Im lặng'], 1, 'Phải giữ hơi để ngân đủ trường độ.'),
    Q('Nốt nhạc có giá trị dài nhất trong các nốt em học là?', ['Nốt móc đơn', 'Nốt đen', 'Nốt trắng', 'Nốt tròn'], 3, 'Nốt tròn dài nhất (4 phách).'),
    Q('Khi gõ thanh phách "cộc – cộc – cộc" đều đều là các âm?', ['Dài bằng nhau', 'Ngắn và bằng nhau', 'Khác nhau hoàn toàn', 'Không có âm'], 1, 'Các tiếng gõ ngắn, đều, bằng nhau về trường độ.'),
  ]),

  M(9, 'Bài hát "Múa vui" (Lưu Hữu Phước)', [
    Q('Bài "Múa vui" do nhạc sĩ nào sáng tác?', ['Lưu Hữu Phước', 'Hoàng Vân', 'Phạm Tuyên', 'Văn Cao'], 0, 'Nhạc sĩ Lưu Hữu Phước là tác giả "Múa vui".'),
    Q('Câu hát mở đầu bài là "Cùng nhau múa …"?', ['xung quanh vòng', 'thật là hay', 'với mẹ', 'dưới trăng'], 0, '"Cùng nhau múa xung quanh vòng, cùng nhau múa cùng vui…"'),
    Q('Khi hát bài này có thể kết hợp?', ['Ngồi im', 'Múa vòng tròn', 'Chạy nhảy lung tung', 'Nằm xuống'], 1, 'Bài thường được hát kèm múa vòng tròn.'),
    Q('Tính chất bài "Múa vui" là?', ['Buồn, chậm', 'Vui, nhịp nhàng', 'Trầm hùng', 'Bi thương'], 1, 'Bài có giai điệu vui, nhịp nhàng phù hợp múa tập thể.'),
    Q('Nhạc sĩ Lưu Hữu Phước còn nổi tiếng với bài?', ['Tiến quân ca', 'Lên đàng / Giải phóng miền Nam', 'Mái trường mến yêu', 'Em yêu trường em'], 1, 'Lưu Hữu Phước là tác giả "Lên đàng", "Giải phóng miền Nam"…'),
    Q('Khi múa vòng tròn em cần?', ['Đi tự do', 'Nắm tay bạn, đi đều', 'Đẩy bạn ngã', 'Chạy ra ngoài'], 1, 'Nắm tay bạn, đi đều theo vòng tròn để múa đẹp.'),
  ]),

  M(10, 'Vỗ tay theo nhịp 2/4', [
    Q('Nhịp 2/4 có mấy phách trong một ô nhịp?', ['1 phách', '2 phách', '3 phách', '4 phách'], 1, 'Nhịp 2/4 có 2 phách trong 1 ô nhịp.'),
    Q('Trong nhịp 2/4, phách nào là phách mạnh?', ['Phách 1', 'Phách 2', 'Cả hai', 'Không có'], 0, 'Phách 1 mạnh, phách 2 nhẹ.'),
    Q('Vỗ tay theo nhịp 2/4 thường vỗ?', ['1 mạnh – 1 nhẹ', '2 mạnh – 2 nhẹ', '3 cái như nhau', 'Tùy ý'], 0, 'Một cái mạnh (phách 1), một cái nhẹ (phách 2), lặp lại.'),
    Q('Bài "Thật là hay" được viết ở nhịp?', ['2/4', '3/4', '4/4', '6/8'], 0, 'Nhiều bài hát thiếu nhi viết ở nhịp 2/4.'),
    Q('Khi đếm nhịp 2/4, ta đếm thế nào?', ['1 – 2 – 3 – 4', '1 – 2, 1 – 2', '1 – 2 – 3, 1 – 2 – 3', '1 – 2 – 3 – 4 – 5'], 1, 'Đếm 1 – 2 lặp lại.'),
    Q('Phách mạnh trong nhịp 2/4 thường rơi vào?', ['Đầu ô nhịp', 'Cuối ô nhịp', 'Giữa ô nhịp', 'Không có quy luật'], 0, 'Phách mạnh luôn ở đầu ô nhịp.'),
  ]),

  M(11, 'Bài hát "Chúc mừng sinh nhật"', [
    Q('Bài "Chúc mừng sinh nhật" thường hát vào dịp?', ['Tết Trung thu', 'Sinh nhật', 'Lễ chào cờ', 'Tết Nguyên đán'], 1, 'Bài hát chúc mừng người được mừng sinh nhật.'),
    Q('Khi hát chúc sinh nhật bạn, em nên?', ['Trêu chọc bạn', 'Tươi vui, thân ái', 'Buồn rầu', 'Cau mày'], 1, 'Hát vui vẻ, thân ái để bạn vui.'),
    Q('Người được mừng sinh nhật thường?', ['Khóc to', 'Thổi nến và ước', 'Bỏ đi', 'Không làm gì'], 1, 'Thổi nến trên bánh và ước điều ước.'),
    Q('Khi tặng quà sinh nhật bạn, em nói?', ['Mặc kệ', 'Chúc mừng sinh nhật bạn!', 'Tạm biệt!', 'Xin chào!'], 1, 'Lời chúc lịch sự, ấm áp.'),
    Q('Bài "Happy Birthday" tiếng Việt thường có câu?', ['Chúc mừng sinh nhật', 'Tạm biệt nhé', 'Mừng năm mới', 'Chào buổi sáng'], 0, '"Mừng ngày sinh nhật… chúc mừng sinh nhật…"'),
    Q('Cảm xúc khi hát bài này nên là?', ['Tức giận', 'Vui vẻ, ấm áp', 'Hồi hộp lo sợ', 'Buồn ngủ'], 1, 'Vui vẻ, ấm áp dành cho người thân/bạn.'),
  ]),

  M(12, 'Nhạc cụ: Thanh phách', [
    Q('Thanh phách thường được làm bằng?', ['Sắt', 'Tre hoặc gỗ', 'Nhựa mềm', 'Vải'], 1, 'Thanh phách làm bằng tre hoặc gỗ cứng.'),
    Q('Thanh phách phát ra âm thanh khi?', ['Thổi vào', 'Gõ hai thanh vào nhau', 'Kéo dây', 'Bóp mạnh'], 1, 'Gõ hai thanh vào nhau để tạo tiếng.'),
    Q('Cầm thanh phách đúng cách là?', ['Một thanh ở mỗi tay', 'Hai thanh trong một tay', 'Cầm bằng chân', 'Để trên bàn'], 0, 'Mỗi tay cầm một thanh, đưa lại gõ vào nhau.'),
    Q('Tiếng thanh phách thuộc loại âm?', ['Cao, trong', 'Trầm sâu', 'Rất to dội', 'Không có âm'], 0, 'Tiếng thanh phách trong, ngắn, gọn.'),
    Q('Thanh phách dùng để?', ['Trang trí', 'Gõ giữ nhịp khi hát', 'Nấu ăn', 'Quét nhà'], 1, 'Dùng để giữ nhịp, đệm cho bài hát.'),
    Q('Khi gõ thanh phách, em nên gõ?', ['Mạnh hết sức', 'Đều, vừa phải theo nhịp', 'Rất nhỏ không ai nghe', 'Tùy hứng'], 1, 'Gõ đều, vừa phải, đúng nhịp.'),
  ]),

  M(13, 'Bài hát "Cộc cách tùng cheng"', [
    Q('"Cộc cách tùng cheng" mô phỏng âm thanh của?', ['Các con vật', 'Các nhạc cụ gõ', 'Tiếng mưa', 'Tiếng xe'], 1, 'Bài liệt kê tiếng các nhạc cụ gõ: sênh, thanh la, mõ, trống…'),
    Q('"Cộc" trong bài là tiếng của nhạc cụ nào?', ['Trống lớn', 'Mõ / sênh', 'Đàn dây', 'Sáo'], 1, '"Cộc" mô phỏng tiếng mõ hoặc sênh tiền.'),
    Q('"Tùng" là tiếng của nhạc cụ nào?', ['Trống', 'Sáo', 'Đàn tranh', 'Kèn'], 0, '"Tùng" mô phỏng tiếng trống.'),
    Q('"Cheng" gợi tiếng nhạc cụ?', ['Đàn bầu', 'Thanh la / chũm choẹ', 'Mõ', 'Sáo trúc'], 1, '"Cheng" là tiếng kim loại của thanh la, chũm choẹ.'),
    Q('Bài hát giúp em làm gì?', ['Quên nhạc cụ', 'Nhận biết âm sắc một số nhạc cụ gõ', 'Học nấu ăn', 'Học toán'], 1, 'Giúp nhận biết âm sắc nhạc cụ gõ qua từ tượng thanh.'),
    Q('Khi hát bài này có thể kết hợp?', ['Gõ thanh phách, trống nhỏ', 'Vẽ tranh', 'Đếm tiền', 'Ngủ'], 0, 'Kết hợp gõ thanh phách, trống nhỏ minh hoạ rất hợp.'),
  ]),

  M(14, 'Nhạc cụ: Trống nhỏ', [
    Q('Trống nhỏ phát ra âm khi?', ['Thổi vào', 'Gõ bằng dùi vào mặt trống', 'Kéo dây', 'Đặt im'], 1, 'Dùng dùi gõ vào mặt trống để tạo âm.'),
    Q('Mặt trống thường được làm bằng?', ['Giấy', 'Da hoặc nhựa căng', 'Kim loại đặc', 'Nước'], 1, 'Mặt trống thường là da căng (hoặc nhựa).'),
    Q('Âm thanh của trống nhỏ thuộc loại?', ['Trong, cao vút', 'Đanh, gọn, vang vừa', 'Êm dịu kéo dài', 'Không có âm'], 1, 'Trống nhỏ có tiếng đanh, gọn.'),
    Q('Khi gõ trống cần?', ['Đập càng mạnh càng tốt', 'Vừa sức, đúng nhịp', 'Đập nhẹ tới mức không nghe', 'Không gõ'], 1, 'Đánh vừa sức và đúng nhịp.'),
    Q('Trống nhỏ thường dùng để?', ['Giữ nhịp, đệm hát', 'Trang trí treo tường', 'Làm bánh', 'Tưới cây'], 0, 'Trống nhỏ dùng giữ nhịp, đệm cho bài hát.'),
    Q('Khi cầm dùi trống nên?', ['Nắm chặt cứng', 'Cầm nhẹ, linh hoạt cổ tay', 'Cầm ngược', 'Ném đi'], 1, 'Cầm nhẹ, cổ tay linh hoạt mới gõ hay.'),
  ]),

  M(15, 'Bài hát "Chiến sĩ tí hon"', [
    Q('Bài "Chiến sĩ tí hon" có hình ảnh các bạn nhỏ làm gì?', ['Đi học', 'Đóng vai chiến sĩ, bước đều', 'Đi chơi công viên', 'Đi ngủ'], 1, 'Các bạn nhỏ giả làm chiến sĩ, bước đều, vác súng giấy.'),
    Q('Tính chất bài hát "Chiến sĩ tí hon"?', ['Buồn bã', 'Khoẻ khoắn, hành khúc', 'Êm dịu ru ngủ', 'Trữ tình sâu lắng'], 1, 'Bài có tính chất hành khúc, khoẻ khoắn.'),
    Q('Bước đi theo nhạc hành khúc phải?', ['Lúc nhanh lúc chậm', 'Đều, dứt khoát', 'Lê chân', 'Nhảy lò cò'], 1, 'Bước đều, dứt khoát theo phách mạnh.'),
    Q('Phách mạnh trong hành khúc thường rơi vào?', ['Chân phải bước đầu', 'Lúc nghỉ', 'Cuối bài', 'Không có'], 0, 'Phách mạnh thường khớp với bước chân đầu.'),
    Q('Khi hát bài này nên kết hợp?', ['Nằm yên', 'Bước đều tại chỗ', 'Quay tròn', 'Bò'], 1, 'Bước đều tại chỗ hợp với hành khúc.'),
    Q('Bài hát giáo dục em điều gì?', ['Lười biếng', 'Yêu chú bộ đội, tinh thần kỷ luật', 'Sợ hãi', 'Không quan tâm'], 1, 'Khơi tình yêu chú bộ đội và tinh thần kỷ luật.'),
  ]),

  M(16, 'Nghe nhạc: Dân ca các vùng miền', [
    Q('Dân ca quan họ nổi tiếng ở vùng nào?', ['Bắc Ninh (miền Bắc)', 'Huế (miền Trung)', 'Nam Bộ', 'Tây Nguyên'], 0, 'Quan họ Bắc Ninh là di sản miền Bắc.'),
    Q('Hò Huế, Lý Huế là dân ca vùng nào?', ['Miền Bắc', 'Miền Trung', 'Miền Nam', 'Tây Bắc'], 1, 'Hò Huế, Lý Huế thuộc miền Trung.'),
    Q('"Lý cây bông", "Lý ngựa ô" là dân ca?', ['Bắc Bộ', 'Trung Bộ', 'Nam Bộ', 'Tây Nguyên'], 2, 'Các bài Lý nổi tiếng là dân ca Nam Bộ.'),
    Q('Dân ca là gì?', ['Bài hát do một nhạc sĩ nổi tiếng viết riêng', 'Bài hát của nhân dân, truyền miệng qua nhiều đời', 'Nhạc nước ngoài', 'Nhạc điện tử'], 1, 'Dân ca là bài hát do nhân dân sáng tác, truyền miệng.'),
    Q('Khi nghe dân ca, thái độ nên?', ['Cười nhạo', 'Tôn trọng, lắng nghe cảm nhận', 'Bỏ ra ngoài', 'Bịt tai'], 1, 'Trân trọng vốn âm nhạc dân tộc.'),
    Q('Học dân ca giúp em?', ['Quên quê hương', 'Hiểu và yêu văn hoá dân tộc', 'Sợ truyền thống', 'Không có lợi ích'], 1, 'Hiểu thêm văn hoá, yêu quê hương đất nước.'),
  ]),

  M(17, 'Vận động cơ thể theo nhạc', [
    Q('Vận động cơ thể theo nhạc nghĩa là?', ['Đứng yên', 'Làm động tác theo nhịp – giai điệu', 'Nói chuyện riêng', 'Ăn quà'], 1, 'Dùng cơ thể (tay, chân, đầu…) chuyển động theo nhạc.'),
    Q('Khi nhạc nhanh, động tác nên?', ['Chậm rãi', 'Nhanh, gọn', 'Đứng im', 'Ngồi xuống'], 1, 'Động tác khớp tốc độ nhạc.'),
    Q('Khi nhạc nhẹ nhàng, em nên?', ['Đập mạnh', 'Động tác mềm mại, uyển chuyển', 'Hét lên', 'Đứng nghiêm'], 1, 'Nhạc êm thì động tác mềm.'),
    Q('Trước khi vận động cần?', ['Ăn no căng', 'Khởi động nhẹ, đứng đúng tư thế', 'Cởi giày', 'Không cần gì'], 1, 'Khởi động và đứng đúng tư thế để an toàn.'),
    Q('Vận động theo nhạc giúp em?', ['Mệt mỏi hơn', 'Cảm nhận âm nhạc tốt hơn, vui khoẻ', 'Buồn ngủ', 'Không có ích'], 1, 'Phát triển cảm thụ âm nhạc và sức khoẻ.'),
    Q('Khi vận động trong nhóm cần?', ['Va vào bạn', 'Giữ khoảng cách, phối hợp', 'Đẩy bạn ngã', 'Tự ý chạy ra'], 1, 'Giữ khoảng cách an toàn và phối hợp đẹp.'),
  ]),

  M(18, 'Ôn tập – Biểu diễn cuối Học kì 1', [
    Q('Tác giả "Em yêu trường em" là?', ['Hoàng Vân', 'Hoàng Lân', 'Lưu Hữu Phước', 'Văn Cao'], 0, 'Nhạc sĩ Hoàng Vân.'),
    Q('Tác giả "Thật là hay" là?', ['Hoàng Vân', 'Hoàng Lân', 'Phạm Tuyên', 'Trịnh Công Sơn'], 1, 'Nhạc sĩ Hoàng Lân.'),
    Q('"Xòe hoa" là dân ca dân tộc?', ['Kinh', 'Thái', 'Mông', 'Tày'], 1, 'Dân ca Thái.'),
    Q('"Múa vui" do nhạc sĩ nào sáng tác?', ['Lưu Hữu Phước', 'Phạm Tuyên', 'Hoàng Vân', 'Văn Cao'], 0, 'Nhạc sĩ Lưu Hữu Phước.'),
    Q('Quốc ca Việt Nam tên là?', ['Lên đàng', 'Tiến quân ca', 'Diệt phát xít', 'Giải phóng miền Nam'], 1, 'Tên gốc: Tiến quân ca – Văn Cao.'),
    Q('To – nhỏ trong âm nhạc gọi là?', ['Cao độ', 'Cường độ', 'Trường độ', 'Tốc độ'], 1, 'Cường độ.'),
    Q('Cao – thấp trong âm nhạc gọi là?', ['Cao độ', 'Cường độ', 'Trường độ', 'Sắc thái'], 0, 'Cao độ.'),
    Q('Dài – ngắn trong âm nhạc gọi là?', ['Cao độ', 'Cường độ', 'Trường độ', 'Tốc độ'], 2, 'Trường độ.'),
    Q('Nhịp 2/4 có mấy phách trong 1 ô nhịp?', ['1', '2', '3', '4'], 1, '2 phách.'),
    Q('Khi biểu diễn em nên?', ['Cúi mặt, run rẩy', 'Tươi cười, tự tin', 'Quay lưng', 'Im lặng'], 1, 'Biểu diễn cần tự tin, tươi tắn.'),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Bài hát "Trên con đường đến trường" (Ngô Mạnh Thu)', [
    Q('Bài "Trên con đường đến trường" do nhạc sĩ nào sáng tác?', ['Ngô Mạnh Thu', 'Hoàng Vân', 'Phạm Tuyên', 'Lưu Hữu Phước'], 0, 'Nhạc sĩ Ngô Mạnh Thu là tác giả bài này.'),
    Q('Bài hát nói về điều gì?', ['Đi chợ', 'Niềm vui em đến trường mỗi sáng', 'Đi câu cá', 'Đi tắm biển'], 1, 'Bài kể về niềm vui em đến trường mỗi sáng.'),
    Q('Trên đường đến trường em thường gặp?', ['Chỉ ô tô', 'Cây xanh, bạn bè, chim hót', 'Sa mạc', 'Biển lớn'], 1, 'Cảnh đường đến trường: cây xanh, bạn bè, chim hót.'),
    Q('Cảm xúc bài hát?', ['Buồn', 'Vui tươi, trong sáng', 'Sợ hãi', 'Tức giận'], 1, 'Vui tươi, trong sáng phù hợp em nhỏ đi học.'),
    Q('Đi học em cần?', ['Đi trễ', 'Chuẩn bị đầy đủ, đúng giờ', 'Mang đồ chơi', 'Bỏ học'], 1, 'Đi học đầy đủ, đúng giờ, có chuẩn bị.'),
    Q('Khi hát bài này nên kết hợp?', ['Ngồi yên', 'Bước nhẹ hoặc vẫy tay theo nhịp', 'Đập bàn mạnh', 'Quay lưng'], 1, 'Vận động nhẹ theo nhịp cho sinh động.'),
  ]),

  M(20, 'Tiết tấu cơ bản (đen – đen – móc đôi)', [
    Q('Tiết tấu là gì?', ['Độ to nhỏ', 'Sự sắp xếp các âm thanh dài – ngắn theo nhịp', 'Độ cao thấp', 'Cách trang trí'], 1, 'Tiết tấu là chuỗi âm thanh dài – ngắn theo nhịp.'),
    Q('Nốt đen có giá trị mấy phách?', ['Nửa phách', '1 phách', '2 phách', '4 phách'], 1, 'Nốt đen = 1 phách.'),
    Q('Hai nốt móc đơn dính nhau (móc đôi) bằng mấy phách?', ['1 phách', '2 phách', 'Nửa phách', '4 phách'], 0, 'Hai móc đơn = 1 phách (mỗi móc = nửa phách).'),
    Q('Đọc tiết tấu "đen – đen – móc đôi – đen" ta gõ?', ['ta – ta – ti ti – ta', 'ta – ti – ta – ti', 'ti ti ti ti', 'ta ta ta ta ta'], 0, 'Đen đọc "ta", móc đôi đọc "ti ti".'),
    Q('Tiết tấu giúp ta?', ['Hát sai nhịp', 'Hát đều, đúng nhịp', 'Quên bài', 'Hát to'], 1, 'Tiết tấu chuẩn giúp hát đều, đúng nhịp.'),
    Q('Khi gõ tiết tấu, em nên?', ['Gõ to nhất có thể', 'Gõ đều, vừa phải', 'Gõ tuỳ hứng', 'Không gõ'], 1, 'Gõ đều, vừa phải, đúng tiết tấu.'),
  ]),

  M(21, 'Bài hát "Hoa lá mùa xuân"', [
    Q('Bài "Hoa lá mùa xuân" nói về mùa nào?', ['Mùa hè', 'Mùa thu', 'Mùa xuân', 'Mùa đông'], 2, 'Bài về mùa xuân, hoa lá đua nở.'),
    Q('Mùa xuân ở Việt Nam thường có?', ['Tuyết rơi nhiều', 'Trời ấm, hoa nở, chim hót', 'Nắng gắt nhất', 'Bão lụt liên tục'], 1, 'Mùa xuân ấm áp, cây cối đâm chồi nảy lộc.'),
    Q('Tính chất giai điệu bài hát?', ['Buồn bã', 'Tươi vui, rộn ràng', 'U sầu', 'Dữ dội'], 1, 'Giai điệu tươi vui, rộn ràng.'),
    Q('Mùa xuân có ngày lễ lớn nào của Việt Nam?', ['Quốc khánh', 'Tết Nguyên đán', 'Trung thu', 'Ngày nhà giáo'], 1, 'Tết Nguyên đán rơi vào đầu xuân.'),
    Q('Khi hát bài này em nên?', ['Mặt buồn', 'Tươi cười, hân hoan', 'Cau có', 'Im lặng không cười'], 1, 'Mùa xuân vui, hát tươi cười.'),
    Q('Hoa nào tượng trưng cho Tết miền Bắc?', ['Hoa mai', 'Hoa đào', 'Hoa hồng', 'Hoa cúc trắng'], 1, 'Miền Bắc có hoa đào, miền Nam có hoa mai.'),
  ]),

  M(22, 'Tết — Bài hát "Sắp đến Tết rồi" & nhạc cụ ngày Tết', [
    Q('"Sắp đến Tết rồi" nói về?', ['Tết Trung thu', 'Tết Nguyên đán đang đến gần', 'Lễ Quốc khánh', 'Ngày 8/3'], 1, 'Bài hát mô tả không khí Tết Nguyên đán sắp đến.'),
    Q('"Sắp đến Tết rồi, đến trường rất vui…" — bạn nhỏ cảm thấy?', ['Buồn', 'Rất vui, háo hức', 'Sợ hãi', 'Mệt mỏi'], 1, 'Trẻ em háo hức vì sắp Tết, được nghỉ và mặc đồ mới.'),
    Q('Nhạc cụ nào hay vang lên trong dịp Tết – lễ hội Việt?', ['Đàn piano', 'Trống, chiêng', 'Đàn organ điện', 'Kèn saxophone'], 1, 'Trống, chiêng vang trong lễ hội Tết.'),
    Q('Múa lân ngày Tết thường có nhạc cụ gì đệm?', ['Sáo recorder', 'Trống, chũm choẹ', 'Đàn ghita', 'Đàn violin'], 1, 'Trống và chũm choẹ rộn ràng đệm múa lân.'),
    Q('Người ta thường chúc Tết câu nào?', ['Tạm biệt!', 'Chúc mừng năm mới!', 'Chào buổi sáng!', 'Cảm ơn!'], 1, '"Chúc mừng năm mới!" là câu chúc Tết quen thuộc.'),
    Q('Trẻ em ngày Tết được người lớn tặng?', ['Bài tập về nhà', 'Lì xì (tiền mừng tuổi)', 'Đồ ăn thừa', 'Sách giáo khoa'], 1, 'Trẻ em được mừng tuổi (lì xì) trong dịp Tết.'),
    Q('Khi hát bài Tết em nên thể hiện?', ['Buồn ngủ', 'Vui tươi, rộn ràng', 'Tức giận', 'Lo sợ'], 1, 'Bài hát Tết cần vui tươi, rộn ràng.'),
    Q('Hoạt động âm nhạc nào quen với Tết Việt?', ['Đánh trống hội, hát quan họ, múa lân', 'Hát rap nước ngoài', 'Nhạc thiền', 'Không có gì'], 0, 'Trống hội, hát quan họ, múa lân… đậm chất Tết.'),
  ]),

  M(23, 'Bài hát "Chú chim nhỏ dễ thương" (dân ca Pháp, lời Việt)', [
    Q('Bài "Chú chim nhỏ dễ thương" có xuất xứ?', ['Dân ca Việt Nam', 'Dân ca Pháp, lời Việt', 'Nhạc Trung Quốc', 'Nhạc Mỹ'], 1, 'Là dân ca Pháp được đặt lời Việt cho thiếu nhi.'),
    Q('Nhân vật chính trong bài là?', ['Chú mèo', 'Chú chim nhỏ', 'Chú gà', 'Chú voi'], 1, '"Chú chim nhỏ dễ thương…"'),
    Q('Tính chất bài hát?', ['Buồn rầu', 'Nhẹ nhàng, dễ thương', 'Hùng tráng', 'Dữ dội'], 1, 'Giai điệu nhẹ nhàng, đáng yêu.'),
    Q('Khi hát em nên?', ['Hát to dữ', 'Hát nhẹ, tình cảm', 'Hét lên', 'Nói chứ không hát'], 1, 'Bài đáng yêu nên hát nhẹ, tình cảm.'),
    Q('Học bài hát của nước ngoài giúp em?', ['Quên Việt Nam', 'Hiểu thêm về văn hoá thế giới', 'Không có ích', 'Sợ ngoại ngữ'], 1, 'Mở rộng hiểu biết về âm nhạc các nước.'),
    Q('Loài chim trong bài giúp ta nhớ phải?', ['Bắt nhốt chim', 'Yêu thương, bảo vệ loài vật', 'Săn bắn', 'Đuổi đánh chim'], 1, 'Yêu quý, bảo vệ loài chim và thiên nhiên.'),
  ]),

  M(24, 'Đọc nhạc: Nốt Đô', [
    Q('Trên khuông nhạc khoá Son, nốt Đô (Đô 1) nằm ở?', ['Dòng kẻ phụ dưới khuông', 'Trên dòng kẻ thứ 5', 'Khe thứ 4', 'Trên cùng'], 0, 'Đô 1 ở dòng kẻ phụ phía dưới khuông nhạc.'),
    Q('Khi đọc nhạc, ta đọc "Đô" thay vì gì?', ['Mi', 'Đô', 'Son', 'La'], 1, 'Đọc đúng tên nốt là "Đô".'),
    Q('Trên đàn phím, nốt Đô là phím trắng nằm?', ['Bên trái cụm 2 phím đen', 'Bên phải cụm 2 phím đen', 'Giữa 3 phím đen', 'Phím đen ngoài cùng'], 0, 'Đô là phím trắng ngay bên trái cụm 2 phím đen.'),
    Q('Trong các nốt Đô – Rê – Mi, nốt thấp nhất là?', ['Đô', 'Rê', 'Mi', 'Bằng nhau'], 0, 'Đô thấp nhất trong 3 nốt.'),
    Q('Đọc nhạc giúp em?', ['Quên bài hát', 'Hát đúng cao độ và biết nốt', 'Không có lợi ích', 'Hát sai lời'], 1, 'Hỗ trợ hát đúng cao độ, biết tên nốt.'),
    Q('Khi đọc nhạc cần?', ['Đọc đại', 'Đọc rõ tên nốt, đúng cao độ', 'Hét to', 'Im lặng'], 1, 'Phải rõ tên nốt và đúng cao độ.'),
  ]),

  M(25, 'Đọc nhạc: Nốt Rê – Mi', [
    Q('Thứ tự cao độ tăng dần là?', ['Mi – Rê – Đô', 'Đô – Rê – Mi', 'Rê – Đô – Mi', 'Mi – Đô – Rê'], 1, 'Đô < Rê < Mi.'),
    Q('Trên khuông Son, nốt Mi 1 nằm ở?', ['Dòng kẻ thứ 1 (dưới cùng)', 'Khe thứ 4', 'Dòng kẻ thứ 5', 'Ngoài khuông'], 0, 'Mi 1 ở dòng kẻ thứ nhất (dưới cùng).'),
    Q('Trên khuông Son, nốt Rê 1 nằm ở?', ['Dưới dòng kẻ thứ 1', 'Khe thứ 3', 'Dòng kẻ thứ 5', 'Trên khuông'], 0, 'Rê 1 ở khe phụ dưới dòng kẻ 1 (giữa Đô và Mi).'),
    Q('Đọc nhạc "Đô – Rê – Mi" lên cao dần ta thấy?', ['Càng trầm', 'Càng cao', 'Bằng nhau', 'Không phân biệt'], 1, 'Đi từ Đô lên Mi là đi lên cao dần.'),
    Q('Khi đọc "Đô – Rê – Mi" với đàn, ta bấm phím?', ['Cùng một phím', '3 phím trắng liền nhau', 'Phím đen', 'Cách quãng'], 1, 'Đô – Rê – Mi là 3 phím trắng liền nhau.'),
    Q('Nốt Rê đứng giữa hai nốt?', ['Đô và Mi', 'Mi và Pha', 'La và Si', 'Son và La'], 0, 'Đô – Rê – Mi, Rê ở giữa Đô và Mi.'),
  ]),

  M(26, 'Đọc nhạc: Nốt Pha – Son', [
    Q('Sau nốt Mi là nốt?', ['Pha', 'Rê', 'Đô', 'La'], 0, 'Thứ tự: Đô – Rê – Mi – Pha – Son – La – Si.'),
    Q('Sau nốt Pha là nốt?', ['Son', 'Mi', 'La', 'Đô'], 0, 'Mi – Pha – Son.'),
    Q('Đọc dãy "Đô – Rê – Mi – Pha – Son" là?', ['Đi xuống dần', 'Đi lên dần', 'Bằng nhau', 'Lộn xộn'], 1, '5 nốt liên tiếp đi lên dần.'),
    Q('Khoá Son đặt ở đầu khuông nhạc dùng để?', ['Trang trí', 'Xác định vị trí nốt Son', 'Cho đẹp', 'Báo nghỉ'], 1, 'Khoá Son chỉ ra vị trí nốt Son trên khuông.'),
    Q('Trên khuông Son, nốt Son 1 nằm ở?', ['Dòng kẻ thứ 2', 'Dòng kẻ thứ 5', 'Khe trên cùng', 'Dưới khuông'], 0, 'Son 1 ở dòng kẻ thứ 2 (đường khoá Son uốn quanh).'),
    Q('Đọc nhạc kết hợp với?', ['Im lặng tuyệt đối', 'Vỗ tay hoặc gõ phách giữ nhịp', 'Chạy nhảy', 'Ăn quà'], 1, 'Kết hợp vỗ tay/gõ phách giúp đọc đúng nhịp.'),
  ]),

  M(27, 'Bài hát "Chim chích bông"', [
    Q('Bài "Chim chích bông" miêu tả con vật nào?', ['Chích bông', 'Chim cú', 'Sẻ', 'Cò trắng'], 0, 'Chim chích bông – loài chim nhỏ có ích.'),
    Q('Chim chích bông trong bài giúp con người làm gì?', ['Phá hoại mùa màng', 'Bắt sâu giúp nhà nông', 'Đốt nhà', 'Cãi nhau'], 1, 'Chim chích bông chuyên bắt sâu bảo vệ mùa màng.'),
    Q('Tính chất bài hát?', ['Vui tươi, nhí nhảnh', 'Buồn bã', 'Hùng tráng', 'Dữ tợn'], 0, 'Giai điệu vui tươi, nhí nhảnh.'),
    Q('Qua bài hát em học được điều gì?', ['Ghét chim', 'Yêu quý, bảo vệ loài chim có ích', 'Săn bắn chim', 'Phá tổ chim'], 1, 'Yêu quý, bảo vệ chim có ích.'),
    Q('Khi hát bài này có thể kết hợp?', ['Bắt chước động tác chim bay', 'Nằm ngủ', 'Đứng nghiêm', 'Quay lưng'], 0, 'Có thể vận động nhẹ giống chim bay.'),
    Q('Chim chích bông là chim nhỏ, kêu?', ['Trầm như voi', 'Lích chích, líu lo', 'Gầm vang', 'Không kêu'], 1, 'Tiếng kêu lích chích, líu lo nên gọi chích bông.'),
  ]),

  M(28, 'Nhịp 2/4 — phân biệt phách mạnh – nhẹ', [
    Q('Trong nhịp 2/4, phách 1 là phách?', ['Mạnh', 'Nhẹ', 'Vắng', 'Không có'], 0, 'Phách 1 luôn là phách mạnh.'),
    Q('Phách 2 trong nhịp 2/4 là?', ['Mạnh', 'Nhẹ', 'Mạnh vừa', 'Vắng'], 1, 'Phách 2 là phách nhẹ.'),
    Q('Đếm 2/4 ta đếm?', ['1 – 2 – 3 – 4', '1 – 2, 1 – 2', '1 – 1 – 1 – 1', '2 – 4 – 6 – 8'], 1, 'Lặp lại 1 – 2, 1 – 2…'),
    Q('Khi đệm trống nhịp 2/4 đơn giản, "Tùng – cắc" là?', ['Mạnh – nhẹ', 'Nhẹ – mạnh', 'Cả hai mạnh', 'Cả hai nhẹ'], 0, '"Tùng" (mạnh) – "cắc" (nhẹ).'),
    Q('Phách mạnh thường rơi vào?', ['Đầu ô nhịp', 'Cuối ô nhịp', 'Giữa ô nhịp', 'Bên ngoài'], 0, 'Đầu mỗi ô nhịp là phách mạnh.'),
    Q('Phân biệt mạnh – nhẹ giúp em?', ['Hát sai nhịp', 'Hát đúng nhịp, có sức sống', 'Hát đều như máy', 'Không có ích'], 1, 'Tạo sức sống và hát đúng nhịp.'),
  ]),

  M(29, 'Bài hát "Bắc kim thang" (dân ca Nam Bộ)', [
    Q('"Bắc kim thang" là dân ca vùng nào?', ['Bắc Bộ', 'Trung Bộ', 'Nam Bộ', 'Tây Bắc'], 2, 'Dân ca Nam Bộ.'),
    Q('Bài "Bắc kim thang" thường được dùng làm?', ['Bài hành khúc', 'Đồng dao, bài hát chơi của trẻ con', 'Hát ru', 'Hát chèo'], 1, 'Là đồng dao – bài chơi của trẻ Nam Bộ.'),
    Q('"Bắc kim thang cà lang bí rợ…" gợi không khí?', ['Buồn bã', 'Vui nhộn, hài hước', 'Trang nghiêm', 'Bi thương'], 1, 'Vui nhộn, hài hước kiểu đồng dao.'),
    Q('Dân ca Nam Bộ thường có nhịp điệu?', ['Chậm rãi nặng nề', 'Nhẹ nhàng, mềm mại', 'Cứng nhắc', 'Không có nhịp'], 1, 'Dân ca Nam Bộ mềm mại, uyển chuyển.'),
    Q('Khi hát "Bắc kim thang" có thể?', ['Chơi trò chơi dân gian kết hợp', 'Im lặng nhìn nhau', 'Ngủ', 'Đọc sách'], 0, 'Trẻ em thường vừa hát vừa chơi trò.'),
    Q('Học dân ca Nam Bộ giúp em?', ['Quên miền Nam', 'Biết và yêu văn hoá miền Nam', 'Không có lợi', 'Khó hát'], 1, 'Hiểu, yêu văn hoá miền Nam.'),
  ]),

  M(30, 'Phân biệt giọng nam – giọng nữ', [
    Q('Giọng nam thường?', ['Trầm hơn giọng nữ', 'Cao hơn giọng nữ', 'Bằng giọng nữ', 'Không có âm'], 0, 'Giọng nam trầm hơn giọng nữ.'),
    Q('Giọng nữ thường?', ['Cao hơn giọng nam', 'Trầm hơn giọng nam', 'Bằng nhau', 'Không phân biệt'], 0, 'Giọng nữ cao hơn giọng nam.'),
    Q('Khi hát đồng ca có cả nam và nữ, ta nghe?', ['Một giọng duy nhất', 'Nhiều màu giọng phong phú', 'Không có gì', 'Lộn xộn'], 1, 'Hợp ca nam – nữ có màu giọng phong phú.'),
    Q('Em bé trai khi nhỏ giọng thuộc?', ['Giọng nam trầm', 'Gần với giọng nữ (cao)', 'Không có giọng', 'Không xác định'], 1, 'Bé trai chưa vỡ giọng nên giọng còn cao.'),
    Q('Khi hát theo nhóm, em nên?', ['Hát to át bạn', 'Hát hoà, lắng nghe bạn', 'Im lặng', 'Hát khác bài'], 1, 'Hoà giọng cùng nhóm.'),
    Q('Để biết giọng nam – nữ, ta cần?', ['Lắng nghe và so sánh cao độ', 'Đoán bừa', 'Nhìn quần áo', 'Hỏi tên'], 0, 'Nghe cao độ là cách phân biệt chính xác.'),
  ]),

  M(31, 'Bài hát "Cá vàng bơi"', [
    Q('Bài "Cá vàng bơi" miêu tả con vật nào?', ['Cá vàng', 'Cá voi', 'Cá sấu', 'Cá heo'], 0, 'Cá vàng – loài cá cảnh nhỏ.'),
    Q('Cá vàng trong bài bơi ở đâu?', ['Trong bể nước', 'Trên cây', 'Trong tủ lạnh', 'Trên đường'], 0, 'Cá vàng bơi trong bể nước.'),
    Q('Tính chất bài hát?', ['Buồn', 'Vui tươi, nhí nhảnh', 'Hùng tráng', 'Giận dữ'], 1, 'Vui tươi, nhí nhảnh phù hợp tuổi nhỏ.'),
    Q('Cá vàng giúp con người điều gì?', ['Trang trí bể, mang niềm vui', 'Cày ruộng', 'Trông nhà', 'Đi học'], 0, 'Làm cảnh, mang niềm vui và thẩm mỹ.'),
    Q('Khi hát có thể mô phỏng?', ['Cá bơi bằng tay', 'Cào cấu nhau', 'Đập bàn', 'Hét to'], 0, 'Có thể làm động tác tay như cá bơi.'),
    Q('Qua bài học em học được?', ['Yêu thương động vật, chăm sóc thú nuôi', 'Đánh đập cá', 'Đổ bể cá', 'Bỏ đói cá'], 0, 'Yêu thương, chăm sóc vật nuôi.'),
  ]),

  M(32, 'Nhạc cụ dân tộc: Mõ, Song loan', [
    Q('Mõ là nhạc cụ làm bằng?', ['Sắt', 'Gỗ rỗng ruột', 'Nhựa', 'Vải'], 1, 'Mõ làm bằng gỗ, bên trong rỗng để cộng hưởng.'),
    Q('Mõ phát ra âm thanh?', ['Cao vút', 'Đục, chắc, khô', 'Rền vang dài', 'Không có âm'], 1, 'Tiếng mõ đục, chắc, khô gọn.'),
    Q('Song loan thường dùng trong nhạc nào?', ['Pop quốc tế', 'Đờn ca tài tử, cải lương', 'Nhạc điện tử', 'Rock'], 1, 'Song loan giữ nhịp trong đờn ca tài tử, cải lương Nam Bộ.'),
    Q('Song loan dùng để?', ['Giữ nhịp (báo nhịp)', 'Nấu ăn', 'Tưới cây', 'Trang điểm'], 0, 'Song loan dùng để báo nhịp (nhịp song loan).'),
    Q('Cả mõ và song loan đều thuộc nhóm nhạc cụ?', ['Hơi', 'Dây', 'Gõ', 'Điện tử'], 2, 'Cả hai đều thuộc bộ gõ.'),
    Q('Học nhạc cụ dân tộc giúp em?', ['Quên truyền thống', 'Trân trọng văn hoá Việt Nam', 'Không có ích', 'Khó học'], 1, 'Hiểu và yêu vốn văn hoá dân tộc.'),
  ]),

  M(33, 'Bài hát "Bài ca đi học" (Phan Trần Bảng)', [
    Q('Bài "Bài ca đi học" do nhạc sĩ nào sáng tác?', ['Phan Trần Bảng', 'Hoàng Vân', 'Phạm Tuyên', 'Văn Cao'], 0, 'Nhạc sĩ Phan Trần Bảng.'),
    Q('Bài hát nói về?', ['Niềm vui đi học của em nhỏ', 'Đi câu cá', 'Đi du lịch', 'Đi mua sắm'], 0, 'Niềm vui và háo hức đi học.'),
    Q('Câu hát quen thuộc trong bài là "Bình minh dâng …"?', ['lên ôm đời em yêu', 'mãi mãi nắng vàng', 'núi cao chập chùng', 'sóng biển êm đềm'], 0, '"Bình minh dâng lên ôm đời em yêu…"'),
    Q('Tính chất bài hát?', ['Buồn bã', 'Trong sáng, hân hoan', 'Dữ dội', 'Bi thương'], 1, 'Trong sáng, hân hoan kiểu hành khúc đi học.'),
    Q('Khi hát bài này em nên?', ['Tươi tỉnh, đầy năng lượng', 'Mệt mỏi gục đầu', 'Cau có', 'Im lặng'], 0, 'Thể hiện sự háo hức, vui đến trường.'),
    Q('Bài giáo dục em điều gì?', ['Lười học', 'Yêu trường, ham học', 'Bỏ học', 'Ghét bạn'], 1, 'Yêu trường, yêu việc học.'),
  ]),

  M(34, 'Biểu diễn nhóm – kỹ năng phối hợp', [
    Q('Khi biểu diễn nhóm cần?', ['Mạnh ai nấy làm', 'Phối hợp ăn ý, cùng nhịp', 'Hát to át bạn', 'Đứng quay lưng nhau'], 1, 'Phối hợp ăn ý là chìa khoá biểu diễn nhóm.'),
    Q('Trước khi biểu diễn nhóm nên?', ['Không tập gì', 'Cùng tập luyện và thống nhất', 'Cãi nhau', 'Bỏ về'], 1, 'Tập luyện chung và thống nhất phần ai làm gì.'),
    Q('Khi bạn quên lời, em nên?', ['Cười nhạo bạn', 'Hát giúp, nhắc nhẹ', 'Đẩy bạn ra', 'Bỏ ra ngoài'], 1, 'Hỗ trợ bạn nhẹ nhàng để nhóm hoàn thành.'),
    Q('Tư thế khi biểu diễn nên?', ['Đứng thẳng, tươi cười, mắt nhìn khán giả', 'Cúi gằm', 'Ngồi xổm', 'Quay lưng'], 0, 'Đứng thẳng, tươi cười, mắt hướng khán giả.'),
    Q('Khi nhận lời khen, em nên?', ['Kiêu ngạo', 'Cảm ơn, lịch sự', 'Lờ đi', 'Khoe khoang'], 1, 'Cảm ơn, khiêm tốn và lịch sự.'),
    Q('Sau khi biểu diễn xong, cả nhóm nên?', ['Chạy đi luôn', 'Cùng cúi chào khán giả', 'Cãi nhau', 'Bỏ lại nhạc cụ'], 1, 'Cùng cúi chào để cảm ơn khán giả.'),
  ]),

  M(35, 'Bài hát tổng kết: "Tạm biệt lớp Hai"', [
    Q('Bài hát "Tạm biệt lớp Hai" thường hát vào dịp?', ['Đầu năm học', 'Cuối năm học, lên lớp 3', 'Tết Trung thu', 'Tết Nguyên đán'], 1, 'Cuối năm học để chia tay lớp 2.'),
    Q('Cảm xúc khi hát bài tạm biệt nên là?', ['Hân hoan xen chút lưu luyến', 'Vui mừng vì không học nữa', 'Tức giận', 'Hờ hững'], 0, 'Lưu luyến nhưng háo hức vì lên lớp mới.'),
    Q('Sang năm em lên lớp mấy?', ['Lớp 1', 'Lớp 3', 'Lớp 5', 'Mẫu giáo'], 1, 'Sau lớp 2 là lớp 3.'),
    Q('Khi tạm biệt thầy cô, bạn bè em nên?', ['Lờ đi', 'Cảm ơn, chúc tốt đẹp', 'Cãi nhau', 'Khóc oà liên tục'], 1, 'Lời cảm ơn, chúc nhau những điều tốt đẹp.'),
    Q('Hè đến em nên?', ['Quên hết kiến thức', 'Ôn nhẹ, nghỉ ngơi, đọc sách, học kỹ năng', 'Không làm gì cả', 'Lười suốt hè'], 1, 'Nghỉ ngơi hợp lý và ôn nhẹ.'),
    Q('Hát bài tạm biệt giúp em?', ['Buồn ngủ', 'Ghi nhớ kỷ niệm năm học', 'Quên trường lớp', 'Sợ học'], 1, 'Ghi nhớ kỷ niệm và tình thầy trò, bạn bè.'),
  ]),

  M(36, 'Biểu diễn tổng kết cuối năm', [
    Q('Quốc ca Việt Nam tên là?', ['Tiến quân ca', 'Lên đàng', 'Diệt phát xít', 'Giải phóng miền Nam'], 0, 'Tiến quân ca – Văn Cao.'),
    Q('Tác giả "Em yêu trường em"?', ['Hoàng Vân', 'Phạm Tuyên', 'Hoàng Lân', 'Lưu Hữu Phước'], 0, 'Nhạc sĩ Hoàng Vân.'),
    Q('Tác giả "Múa vui"?', ['Lưu Hữu Phước', 'Hoàng Vân', 'Hoàng Lân', 'Phan Trần Bảng'], 0, 'Nhạc sĩ Lưu Hữu Phước.'),
    Q('Tác giả "Bài ca đi học"?', ['Phan Trần Bảng', 'Văn Cao', 'Hoàng Vân', 'Phạm Tuyên'], 0, 'Nhạc sĩ Phan Trần Bảng.'),
    Q('"Xòe hoa" là dân ca của dân tộc?', ['Thái', 'Kinh', 'Mông', 'Khmer'], 0, 'Dân ca Thái.'),
    Q('"Bắc kim thang" là dân ca vùng?', ['Nam Bộ', 'Bắc Bộ', 'Trung Bộ', 'Tây Bắc'], 0, 'Dân ca Nam Bộ.'),
    Q('Trong nhịp 2/4, phách mạnh ở vị trí?', ['Phách 1', 'Phách 2', 'Cả hai', 'Không có'], 0, 'Phách 1 là phách mạnh.'),
    Q('Thứ tự nốt nhạc tăng dần đúng là?', ['Đô – Rê – Mi – Pha – Son', 'Son – Pha – Mi – Rê – Đô', 'Mi – Đô – Son – Rê – Pha', 'Pha – Son – Đô – Rê – Mi'], 0, 'Đô < Rê < Mi < Pha < Son.'),
    Q('Cao độ là phân biệt?', ['Dài – ngắn', 'To – nhỏ', 'Cao – thấp', 'Sáng – tối'], 2, 'Cao độ = cao – thấp.'),
    Q('Khi biểu diễn cuối năm, em nên?', ['Run sợ, cúi gằm', 'Tự tin, tươi cười, biết ơn thầy cô bạn bè', 'Lờ khán giả', 'Quay lưng'], 1, 'Tự tin, biết ơn người đã dạy dỗ và bạn bè.'),
  ], { difficulty: 3 }),
];

export const P2AN_SCENARIOS = indexBy(P2AN_WEEKS);
