// ============================================================
// Lớp 6 · CÔNG NGHỆ — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám CT GDPT 2018 môn Công nghệ Lớp 6.
// 4 chương: Nhà ở · Bảo quản & chế biến thực phẩm · Trang phục & thời trang
//           · Đồ dùng điện trong gia đình.
// ID prefix: "S6CN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6CN', 'cong-nghe', n, title, qs, opts);

export const S6CN_WEEKS = [
  // ════════════════ CHƯƠNG 1 — NHÀ Ở (T1–9) ════════════════
  M(1, 'Khái quát về nhà ở', [
    Q('Nhà ở có vai trò chính nào sau đây?', ['Là nơi trú ngụ, bảo vệ con người và là nơi sinh hoạt của gia đình', 'Chỉ để khoe với hàng xóm', 'Chỉ dùng để chứa đồ đạc', 'Chỉ là nơi ngủ ban đêm'], 0, 'Nhà ở là nơi trú ngụ, che chắn thời tiết và là nơi sinh hoạt, gắn kết các thành viên gia đình.'),
    Q('Đặc điểm chung của các ngôi nhà thường có là?', ['Có mái che, tường bao và sàn nhà', 'Chỉ có duy nhất một bức tường', 'Không có cửa', 'Luôn có hồ bơi'], 0, 'Hầu hết nhà ở đều có mái, tường bao và nền sàn để bảo vệ con người.'),
    Q('Khu vực nào của ngôi nhà thường dùng để tiếp khách?', ['Phòng khách', 'Nhà tắm', 'Phòng ngủ riêng', 'Nhà vệ sinh'], 0, 'Phòng khách là nơi đón tiếp khách và sinh hoạt chung.'),
    Q('Nhà ở giúp con người chống lại điều gì?', ['Các tác động xấu của thời tiết và môi trường', 'Đói khát', 'Buồn ngủ', 'Việc đi học'], 0, 'Nhà che mưa, nắng, gió bão và bảo vệ con người khỏi côn trùng, thú dữ.'),
    Q('Ngoài chức năng trú ngụ, nhà ở còn là nơi?', ['Diễn ra các hoạt động học tập, nghỉ ngơi, ăn uống của gia đình', 'Chỉ để ngủ', 'Bán hàng duy nhất', 'Chứa rác'], 0, 'Nhà ở là không gian sống, học tập, nghỉ ngơi, ăn uống của các thành viên.'),
    Q('Phòng nào thường dùng để nấu nướng?', ['Nhà bếp', 'Phòng khách', 'Phòng ngủ', 'Sân thượng'], 0, 'Nhà bếp là khu vực chuẩn bị và nấu thức ăn.'),
  ]),

  M(2, 'Kiến trúc nhà ở Việt Nam', [
    Q('Nhà nông thôn truyền thống Bắc Bộ thường có đặc điểm nào?', ['Mái ngói, sân rộng, có hiên trước', 'Cao ốc 30 tầng', 'Nhà nổi trên không', 'Toàn bộ bằng kính trong suốt'], 0, 'Nhà nông thôn Bắc Bộ thường lợp ngói, có hiên và sân phơi rộng.'),
    Q('Nhà sàn là kiểu nhà phổ biến ở vùng nào?', ['Vùng cao, vùng dân tộc thiểu số phía Bắc và Tây Nguyên', 'Trung tâm thành phố', 'Đảo san hô', 'Sa mạc'], 0, 'Nhà sàn xuất hiện nhiều ở vùng cao, vùng Tây Nguyên do đặc điểm địa hình, khí hậu.'),
    Q('Nhà chung cư là kiểu nhà ở phổ biến ở đâu?', ['Khu vực thành thị, đông dân cư', 'Vùng núi cao hẻo lánh', 'Giữa rừng', 'Đáy biển'], 0, 'Chung cư xuất hiện nhiều ở thành thị nhằm tiết kiệm diện tích đất.'),
    Q('Vì sao nhà sàn được làm cao hơn mặt đất?', ['Tránh thú dữ, ẩm ướt và lũ', 'Để đẹp mắt', 'Để chứa được nhiều đồ', 'Để mát hơn'], 0, 'Nhà sàn cao giúp tránh thú, tránh ẩm và thoát nước khi mưa lũ.'),
    Q('Nhà nổi/nhà bè thường thấy ở đâu?', ['Vùng sông nước miền Tây Nam Bộ', 'Vùng núi cao', 'Trung tâm Hà Nội', 'Cao nguyên đá'], 0, 'Nhà nổi/bè trên sông là nét kiến trúc đặc trưng của vùng đồng bằng sông Cửu Long.'),
    Q('Đặc điểm nào KHÔNG phải của nhà ở thành thị hiện đại?', ['Lợp tranh, vách đất', 'Nhiều tầng', 'Sử dụng vật liệu bê tông', 'Có hệ thống điện nước hiện đại'], 0, 'Nhà thành thị hiện đại không còn lợp tranh, vách đất như xưa.'),
  ]),

  M(3, 'Xây dựng nhà ở', [
    Q('Vật liệu nào sau đây thường dùng làm móng và khung nhà bê tông?', ['Xi măng, cát, đá, thép', 'Bông gòn', 'Giấy báo', 'Lá chuối'], 0, 'Bê tông cốt thép gồm xi măng, cát, đá kết hợp với thép.'),
    Q('Bước nào thường được thực hiện ĐẦU TIÊN khi xây nhà?', ['Chuẩn bị mặt bằng và đào móng', 'Lợp mái', 'Sơn tường', 'Lắp điều hòa'], 0, 'Đầu tiên phải dọn mặt bằng, đào móng để chịu lực cho công trình.'),
    Q('Thứ tự xây dựng nhà nào sau đây là HỢP LÝ?', ['Móng → khung & tường → mái → hoàn thiện', 'Mái → khung → móng', 'Sơn → đào móng → lợp mái', 'Hoàn thiện → đào móng'], 0, 'Phải xây từ dưới lên: móng, khung-tường, mái rồi mới hoàn thiện.'),
    Q('Gạch và ngói thường được làm chủ yếu từ?', ['Đất sét nung', 'Nhựa dẻo', 'Cao su', 'Vải bông'], 0, 'Gạch ngói truyền thống làm từ đất sét, qua quá trình nung ở nhiệt độ cao.'),
    Q('Khi xây nhà, vì sao cần đội mũ bảo hộ?', ['Để bảo vệ đầu khỏi vật rơi', 'Để đẹp mắt', 'Để đỡ nóng', 'Để chống ướt'], 0, 'Mũ bảo hộ bảo vệ thợ xây khỏi nguy cơ vật rơi từ trên cao.'),
    Q('Vật liệu nào dùng để KẾT DÍNH gạch khi xây tường?', ['Vữa (xi măng + cát + nước)', 'Mật ong', 'Keo dán giấy', 'Nước lã'], 0, 'Vữa xi măng là chất kết dính gạch trong xây tường.'),
  ]),

  M(4, 'Ngôi nhà thông minh', [
    Q('Ngôi nhà thông minh có đặc điểm nổi bật nào?', ['Trang bị thiết bị có thể điều khiển từ xa hoặc tự động', 'Không có điện', 'Không có cửa', 'Chỉ có một phòng'], 0, 'Nhà thông minh dùng cảm biến và mạng để điều khiển thiết bị từ xa/tự động.'),
    Q('Lợi ích chính của nhà thông minh là?', ['Tiện nghi, an toàn và tiết kiệm năng lượng', 'Tốn nhiều điện hơn', 'Khó vệ sinh', 'Không kết nối Internet được'], 0, 'Nhà thông minh giúp tiện nghi, an toàn (báo cháy, chống trộm) và tiết kiệm năng lượng.'),
    Q('Thiết bị nào dưới đây thường có trong nhà thông minh?', ['Cảm biến chuyển động, camera, đèn tự bật/tắt', 'Bếp củi', 'Đèn dầu', 'Quạt giấy'], 0, 'Cảm biến, camera, thiết bị kết nối là thành phần điển hình của nhà thông minh.'),
    Q('Để điều khiển thiết bị trong nhà thông minh từ xa, người ta thường dùng?', ['Điện thoại thông minh hoặc giọng nói', 'Còi báo', 'Gậy gỗ', 'Que tre'], 0, 'Smartphone hoặc trợ lý giọng nói là phương tiện điều khiển phổ biến.'),
    Q('Cảm biến khói trong nhà thông minh dùng để?', ['Phát hiện cháy sớm và báo động', 'Đo nhiệt độ ngoài trời', 'Tưới cây', 'Phát Wi-Fi'], 0, 'Cảm biến khói phát hiện cháy và cảnh báo người dùng kịp thời.'),
    Q('Hạn chế của nhà thông minh là?', ['Chi phí đầu tư ban đầu cao và phụ thuộc Internet/điện', 'Không có lợi ích gì', 'Không an toàn hơn nhà thường', 'Không tiết kiệm điện'], 0, 'Nhà thông minh đắt tiền và bị ảnh hưởng khi mất Internet/điện.'),
  ]),

  M(5, 'Sử dụng năng lượng tiết kiệm trong gia đình', [
    Q('Hành vi nào TIẾT KIỆM điện?', ['Tắt đèn khi ra khỏi phòng', 'Bật điều hòa cả khi đi vắng', 'Mở tủ lạnh liên tục', 'Bật ti vi khi không xem'], 0, 'Tắt thiết bị khi không dùng giúp tiết kiệm điện đáng kể.'),
    Q('Bóng đèn nào tiết kiệm điện nhất?', ['Đèn LED', 'Đèn sợi đốt', 'Đèn dầu', 'Nến'], 0, 'Đèn LED tiêu thụ ít điện và bền hơn đèn sợi đốt nhiều lần.'),
    Q('Để tủ lạnh hoạt động hiệu quả, em nên?', ['Đóng kín cửa, không mở quá lâu và không để quá đầy', 'Mở cửa tủ liên tục', 'Để cạnh bếp nóng', 'Để cửa tủ hé mở'], 0, 'Đóng kín và bố trí hợp lí giúp tủ lạnh tiết kiệm điện.'),
    Q('Khi dùng điều hòa nên đặt nhiệt độ?', ['Khoảng 26–28°C để tiết kiệm điện', '16°C suốt cả ngày', '10°C cho lạnh', '40°C cho nóng'], 0, '26–28°C là mức tiết kiệm điện và tốt cho sức khỏe.'),
    Q('Tiết kiệm năng lượng giúp ích gì cho môi trường?', ['Giảm phát thải khí nhà kính, bảo vệ tài nguyên', 'Làm môi trường ô nhiễm hơn', 'Không có tác dụng gì', 'Tăng giá điện'], 0, 'Dùng ít năng lượng → giảm đốt nhiên liệu hóa thạch → giảm phát thải.'),
    Q('Nguồn năng lượng nào sau đây là TÁI TẠO?', ['Mặt trời, gió, nước', 'Than đá', 'Dầu mỏ', 'Khí đốt'], 0, 'Năng lượng mặt trời, gió, nước là năng lượng tái tạo, sạch.'),
  ]),

  M(6, 'An toàn điện trong gia đình', [
    Q('Hành vi nào KHÔNG an toàn về điện?', ['Cắm/rút phích điện khi tay ướt', 'Tắt cầu dao trước khi sửa', 'Dùng dây điện còn nguyên vỏ', 'Lau tay khô trước khi chạm công tắc'], 0, 'Tay ướt là môi trường dẫn điện rất tốt — dễ bị điện giật.'),
    Q('Khi thấy người bị điện giật, việc làm ĐẦU TIÊN là?', ['Ngắt nguồn điện (cầu dao/aptomat)', 'Chạy lại cầm tay nạn nhân ngay', 'Dùng nước dội', 'Đứng nhìn'], 0, 'Phải ngắt nguồn điện trước, sau đó mới cứu nạn để không bị giật theo.'),
    Q('Dây điện bị hở vỏ thì phải?', ['Thay mới hoặc bọc cách điện ngay', 'Cứ dùng tiếp', 'Buộc bằng dây vải', 'Treo lên cao là an toàn'], 0, 'Dây hở rất dễ rò điện gây giật và cháy, cần khắc phục ngay.'),
    Q('Ổ cắm điện trong nhà có trẻ nhỏ nên?', ['Có nắp che để tránh trẻ chọc tay vào', 'Để hở cho dễ cắm', 'Đặt thấp dễ với', 'Quấn giấy bạc'], 0, 'Nắp che ổ điện giúp tránh tai nạn cho trẻ nhỏ.'),
    Q('Khi rút phích cắm, em nên?', ['Cầm phần nhựa của phích, không kéo dây', 'Kéo mạnh dây cho ra', 'Dùng kéo cắt dây', 'Lắc qua lắc lại nhiều lần'], 0, 'Kéo dây sẽ làm đứt lõi và hở vỏ — rất nguy hiểm.'),
    Q('Khi trời mưa giông, nên?', ['Rút phích các thiết bị điện tử nhạy cảm', 'Tắm dưới mưa', 'Đứng dưới cột điện', 'Cầm điện thoại đang sạc'], 0, 'Mưa giông dễ gây sét đánh và quá áp; nên rút phích thiết bị quan trọng.'),
  ]),

  M(7, 'An toàn cháy nổ trong gia đình', [
    Q('Nguyên nhân gây cháy phổ biến trong nhà là?', ['Chập điện, rò khí gas, nến/hương để gần đồ dễ cháy', 'Quét nhà', 'Mở cửa sổ', 'Uống nước'], 0, 'Chập điện và rò gas là hai nguyên nhân hàng đầu gây cháy nổ trong gia đình.'),
    Q('Khi phát hiện rò khí gas, việc CẦN TRÁNH là?', ['Bật/tắt công tắc điện, bật bật lửa', 'Khóa van bình gas', 'Mở cửa thoáng khí', 'Báo người lớn'], 0, 'Tia lửa từ công tắc/bật lửa có thể làm gas phát nổ.'),
    Q('Bình chữa cháy mini trong nhà thường loại?', ['Bình bột ABC hoặc bình CO2', 'Bình nước ngọt', 'Bình đựng dầu ăn', 'Bình tưới cây'], 0, 'Bình bột ABC chữa được cả cháy chất rắn, lỏng và điện.'),
    Q('Khi có cháy nhỏ ở bếp do dầu ăn, KHÔNG nên?', ['Đổ nước vào chảo dầu đang cháy', 'Đậy nắp vung kín', 'Tắt bếp', 'Dùng khăn ẩm phủ lên'], 0, 'Đổ nước vào dầu nóng làm dầu bắn tung tóe, lửa lan rộng hơn.'),
    Q('Khi có cháy lớn, em nên?', ['Báo người lớn, gọi 114 và thoát ra ngoài bằng lối an toàn', 'Trốn vào tủ', 'Lấy đồ chơi rồi mới ra', 'Ngủ tiếp'], 0, 'Báo 114 và thoát theo lối an toàn là kỹ năng sống còn.'),
    Q('Khi thoát khỏi đám cháy có nhiều khói, nên?', ['Cúi thấp, dùng khăn ẩm bịt mũi miệng', 'Đứng thẳng chạy', 'Hít sâu để chạy nhanh', 'Mở hết các cửa cho thoáng'], 0, 'Khí độc và khói tập trung ở cao; cúi thấp + khăn ẩm giúp thở được.'),
  ]),

  M(8, 'Thực hành: Bố trí ngôi nhà (1)', [
    Q('Khi vẽ sơ đồ bố trí ngôi nhà, KHU VỰC nào nên gần cửa vào?', ['Phòng khách', 'Phòng ngủ chính', 'Nhà vệ sinh', 'Phòng kho'], 0, 'Phòng khách thường đặt gần cửa vào để đón tiếp khách thuận tiện.'),
    Q('Nhà bếp nên có?', ['Cửa sổ/thông gió và gần khu ăn uống', 'Đóng kín hoàn toàn', 'Đặt ngay trong phòng ngủ', 'Đặt trên mái nhà'], 0, 'Bếp cần thông gió để thoát mùi, khói và gần khu ăn để tiện.'),
    Q('Phòng ngủ nên đặt ở vị trí?', ['Yên tĩnh, ít người qua lại', 'Sát mặt đường ồn ào', 'Trong nhà bếp', 'Cạnh nhà vệ sinh chung'], 0, 'Phòng ngủ cần yên tĩnh để nghỉ ngơi tốt.'),
    Q('Nhà vệ sinh nên?', ['Có thông gió/quạt hút và sàn chống trơn', 'Không cần thông gió', 'Sàn trơn cho dễ lau', 'Đặt ở giữa phòng khách'], 0, 'Thông gió tránh ẩm mốc; sàn chống trơn tránh té ngã.'),
    Q('Hướng đặt cửa sổ ở Việt Nam thường ưu tiên?', ['Đón gió mát, tránh nắng gắt phía Tây', 'Quay thẳng vào tường nhà bên', 'Hướng Bắc lạnh', 'Không cần cửa sổ'], 0, 'Khí hậu nhiệt đới, ta thường đón gió Nam/Đông và tránh nắng Tây gắt.'),
    Q('Khi bố trí nội thất, em cần chú ý?', ['Lối đi thông thoáng, đồ vật chắc chắn, an toàn', 'Chất đồ chắn lối đi', 'Đặt đồ nặng trên cao chông chênh', 'Bố trí ngẫu nhiên'], 0, 'Lối đi và sự chắc chắn của đồ đạc là yếu tố an toàn cơ bản.'),
  ]),

  M(9, 'Thực hành: Dự án ngôi nhà của em (2)', [
    Q('Trong dự án vẽ ngôi nhà của em, bước đầu tiên là?', ['Xác định nhu cầu và số phòng cần thiết', 'Sơn màu mái', 'Trang trí cây cảnh', 'Đặt tên ngôi nhà'], 0, 'Phải xác định nhu cầu sử dụng trước khi vẽ và bố trí.'),
    Q('Để ngôi nhà thân thiện môi trường, em có thể?', ['Trồng cây xanh, dùng đèn LED, lắp pin mặt trời', 'Chặt hết cây quanh nhà', 'Dùng đèn sợi đốt khắp nhà', 'Bê tông hóa toàn bộ sân'], 0, 'Cây xanh, LED và năng lượng mặt trời giúp nhà xanh hơn.'),
    Q('Khi giới thiệu dự án, em cần?', ['Trình bày rõ ý tưởng, sơ đồ và giải thích lựa chọn', 'Đọc thuộc lòng không hiểu', 'Chỉ vẽ mà không thuyết minh', 'Không cho ai xem'], 0, 'Thuyết minh giúp người khác hiểu ý tưởng của dự án.'),
    Q('Yếu tố nào KHÔNG bắt buộc trong bản vẽ sơ đồ ngôi nhà?', ['Màu sơn nội thất chi tiết từng phòng', 'Vị trí các phòng', 'Cửa ra vào và cửa sổ', 'Lối đi'], 0, 'Bản vẽ sơ đồ chú trọng bố trí, không cần chi tiết màu sơn từng phòng.'),
    Q('Nhà phố diện tích hẹp nên ưu tiên?', ['Nội thất gọn, đa năng, tận dụng chiều cao', 'Đồ to cồng kềnh', 'Nhiều vách ngăn cố định', 'Nhiều đồ trang trí dễ vỡ'], 0, 'Nhà hẹp cần đồ đa năng và tận dụng chiều cao để tiết kiệm diện tích.'),
    Q('Yếu tố nào giúp ngôi nhà an toàn hơn?', ['Báo khói, cửa thoát hiểm, ổ điện có nắp che', 'Khóa cửa thoát hiểm cả ngày', 'Để bình gas trong phòng ngủ', 'Cắt cầu dao chỉ khi mất điện'], 0, 'Thiết bị báo khói, lối thoát hiểm và nắp ổ điện giúp tăng an toàn.'),
  ]),

  // ══════════ CHƯƠNG 2 — BẢO QUẢN & CHẾ BIẾN THỰC PHẨM (T10–18) ══════════
  M(10, 'Thực phẩm và dinh dưỡng', [
    Q('Có bao nhiêu nhóm chất dinh dưỡng chính cần cho cơ thể?', ['4 nhóm: bột đường, đạm, béo, vitamin & khoáng', '1 nhóm duy nhất', '10 nhóm', '20 nhóm'], 0, 'Bốn nhóm chính: chất bột đường, chất đạm, chất béo, vitamin & khoáng.'),
    Q('Thực phẩm nào giàu CHẤT ĐẠM?', ['Thịt, cá, trứng, đậu', 'Đường kính', 'Dầu ăn nguyên chất', 'Nước lọc'], 0, 'Thịt, cá, trứng, đậu là nguồn chất đạm chính.'),
    Q('Thực phẩm nào giàu chất BỘT ĐƯỜNG?', ['Cơm, bánh mì, khoai', 'Dầu ăn', 'Bơ', 'Mỡ động vật'], 0, 'Tinh bột có nhiều trong cơm, bánh mì, khoai, ngô.'),
    Q('Vitamin C có nhiều trong?', ['Cam, chanh, ổi, kiwi', 'Cơm trắng', 'Mỡ heo', 'Đường kính'], 0, 'Hoa quả tươi như cam, chanh, ổi giàu vitamin C.'),
    Q('Thiếu chất đạm lâu dài có thể dẫn đến?', ['Cơ thể chậm phát triển, suy dinh dưỡng', 'Cao lớn nhanh', 'Mọc thêm răng', 'Khỏe hơn'], 0, 'Đạm cần thiết cho sự phát triển; thiếu đạm gây suy dinh dưỡng.'),
    Q('Chất béo có vai trò?', ['Cung cấp năng lượng và hòa tan các vitamin A, D, E, K', 'Không có vai trò gì', 'Chỉ gây béo phì', 'Làm răng chắc'], 0, 'Chất béo cung cấp năng lượng và là dung môi vitamin tan trong dầu.'),
  ]),

  M(11, 'Nhu cầu dinh dưỡng theo lứa tuổi', [
    Q('Lứa tuổi nào cần đặc biệt nhiều chất đạm để phát triển?', ['Trẻ em, thanh thiếu niên', 'Người già', 'Người ốm liệt', 'Không ai cả'], 0, 'Trẻ em và thanh thiếu niên đang lớn nên cần nhiều chất đạm.'),
    Q('Học sinh THCS nên ăn bao nhiêu bữa chính/ngày?', ['3 bữa chính và có thể thêm 1–2 bữa phụ', '1 bữa duy nhất', '5 bữa chính lớn', 'Không cần ăn bữa nào'], 0, 'Ba bữa chính + bữa phụ giúp cung cấp đủ năng lượng cho học tập.'),
    Q('Người lớn tuổi nên hạn chế?', ['Đồ ăn nhiều dầu mỡ, mặn, ngọt', 'Rau xanh', 'Trái cây tươi', 'Nước lọc'], 0, 'Tuổi già nên giảm mỡ, muối, đường để phòng bệnh mạn tính.'),
    Q('Ăn quá nhiều đường ngọt có thể gây?', ['Béo phì, sâu răng, tiểu đường', 'Cao nhanh', 'Sáng mắt', 'Da đẹp'], 0, 'Đường nhiều liên quan đến béo phì, sâu răng và tăng nguy cơ tiểu đường.'),
    Q('Trẻ em đang lớn nên uống đủ?', ['Sữa và nước', 'Cà phê đặc', 'Nước ngọt có ga thay nước', 'Trà sữa hằng ngày'], 0, 'Sữa cung cấp canxi và đạm; nước duy trì hoạt động cơ thể.'),
    Q('Để đảm bảo đa dạng dinh dưỡng, mỗi bữa nên có?', ['Đủ 4 nhóm chất với nhiều loại thực phẩm', 'Chỉ ăn một món duy nhất', 'Chỉ ăn cơm trắng', 'Chỉ uống nước ngọt'], 0, 'Ăn đa dạng giúp cung cấp đủ các chất cần thiết.'),
  ]),

  M(12, 'Bảo quản thực phẩm', [
    Q('Phương pháp bảo quản nào sau đây dùng NHIỆT ĐỘ THẤP?', ['Để tủ lạnh, tủ đông', 'Sấy khô', 'Muối chua', 'Hun khói'], 0, 'Lạnh và đông là bảo quản bằng nhiệt độ thấp ức chế vi sinh vật.'),
    Q('Bảo quản bằng SẤY KHÔ dựa trên nguyên tắc nào?', ['Giảm độ ẩm để vi sinh vật khó phát triển', 'Đông cứng nước', 'Thêm đường nhiều', 'Đập dập'], 0, 'Vi sinh vật cần nước; giảm độ ẩm giúp ức chế chúng.'),
    Q('Muối dưa, làm mắm thuộc phương pháp bảo quản nào?', ['Lên men/muối chua', 'Sấy lạnh', 'Cấp đông', 'Chiếu xạ'], 0, 'Muối chua/lên men là bảo quản bằng axit/độ mặn cao.'),
    Q('Ngăn đông tủ lạnh thường có nhiệt độ?', ['Khoảng -18°C', '+25°C', '+10°C', '-60°C'], 0, 'Ngăn đông thường ở khoảng -18°C theo tiêu chuẩn bảo quản đông.'),
    Q('Hành vi nào KHÔNG đúng khi để thực phẩm trong tủ lạnh?', ['Để chung thịt sống và rau ăn sống cùng ngăn không che đậy', 'Đậy nắp/bọc kín', 'Phân loại sống – chín', 'Ghi nhãn ngày bảo quản'], 0, 'Sống – chín chung dễ nhiễm chéo vi khuẩn gây bệnh.'),
    Q('Đồ hộp đã PHỒNG nắp/bị méo nên?', ['Bỏ đi, không sử dụng', 'Vẫn ăn bình thường', 'Hâm nóng lại rồi ăn', 'Để lâu nữa cho đẹp'], 0, 'Hộp phồng có thể có vi khuẩn nguy hiểm như Clostridium botulinum.'),
  ]),

  M(13, 'Chế biến thực phẩm (1) — phương pháp dùng nhiệt', [
    Q('Phương pháp LUỘC dùng môi trường truyền nhiệt nào?', ['Nước sôi', 'Hơi nước', 'Dầu sôi', 'Cát nóng'], 0, 'Luộc là nấu chín thực phẩm trong nước sôi.'),
    Q('Phương pháp HẤP dùng môi trường nào?', ['Hơi nước nóng', 'Nước sôi ngập', 'Dầu nóng', 'Lửa than trực tiếp'], 0, 'Hấp dùng hơi nước, giữ lại nhiều chất dinh dưỡng.'),
    Q('RÁN/CHIÊN dùng môi trường?', ['Dầu/mỡ nóng', 'Nước lạnh', 'Đường nóng chảy', 'Muối khô'], 0, 'Chiên/rán dùng dầu nóng để làm chín và tạo lớp vỏ giòn.'),
    Q('Món nào sau đây là món HẤP?', ['Bánh bao hấp, cá hấp gừng', 'Cá rán giòn', 'Gà nướng', 'Khoai chiên'], 0, 'Bánh bao và cá hấp gừng là món chế biến bằng phương pháp hấp.'),
    Q('Khi rán thực phẩm, KHÔNG nên?', ['Dùng dầu đã chiên đi chiên lại nhiều lần', 'Vớt sạch cặn dầu', 'Đảm bảo dầu đủ nóng', 'Vớt ra giấy thấm dầu'], 0, 'Dầu chiên đi chiên lại sinh chất có hại cho sức khỏe.'),
    Q('Phương pháp KHO dùng?', ['Nước sốt mặn ngọt, lửa nhỏ, thời gian dài', 'Dầu sôi', 'Hơi nước', 'Đá lạnh'], 0, 'Kho là nấu thực phẩm với nước sốt ở lửa nhỏ, lâu để thấm gia vị.'),
  ]),

  M(14, 'Chế biến thực phẩm (2) — không dùng nhiệt và trộn', [
    Q('Món nào là phương pháp chế biến KHÔNG dùng nhiệt?', ['Salad rau trộn dầu giấm', 'Cá rán', 'Gà luộc', 'Canh xương'], 0, 'Salad/gỏi trộn là chế biến không dùng nhiệt.'),
    Q('Khi làm salad, rau cần được?', ['Rửa sạch, ngâm nước muối loãng và để ráo', 'Để bẩn cho ngon', 'Nướng qua lửa', 'Trộn ngay khi ướt sũng'], 0, 'Rau ăn sống phải rửa kỹ để loại bụi và mầm bệnh.'),
    Q('Nước trộn salad cơ bản thường gồm?', ['Dầu ăn, giấm/chanh, muối, đường, tiêu', 'Chỉ nước lọc', 'Chỉ dầu ăn', 'Chỉ muối'], 0, 'Nước trộn cân bằng chua – mặn – ngọt – cay nhẹ với dầu và giấm/chanh.'),
    Q('Để giữ rau tươi giòn khi trộn salad, em nên?', ['Để ráo nước và trộn ngay trước khi ăn', 'Trộn trước nhiều giờ', 'Ngâm lâu trong nước', 'Vò mạnh cho mềm'], 0, 'Trộn ngay trước khi ăn giúp rau không bị héo.'),
    Q('Phương pháp NỘM/GỎI thường sử dụng?', ['Rau củ tươi + nước trộn chua ngọt', 'Dầu sôi', 'Hơi nước', 'Lò vi sóng'], 0, 'Nộm/gỏi là món trộn rau củ với nước chua ngọt.'),
    Q('Ưu điểm của các món không dùng nhiệt là?', ['Giữ được vitamin tươi, ít dầu mỡ', 'Tăng chất béo', 'Mất hết dinh dưỡng', 'Khó tiêu hóa hơn'], 0, 'Không qua nhiệt giúp giữ vitamin và ít dầu mỡ.'),
  ]),

  M(15, 'An toàn vệ sinh thực phẩm', [
    Q('Nguyên tắc "ăn chín, uống sôi" nhằm mục đích?', ['Tiêu diệt vi khuẩn, ký sinh trùng gây bệnh', 'Làm thức ăn ngon hơn', 'Làm món lạ mắt', 'Tiết kiệm gas'], 0, 'Nhiệt độ cao giúp tiêu diệt phần lớn vi khuẩn và ký sinh trùng.'),
    Q('Hành vi nào ĐÚNG về vệ sinh thực phẩm?', ['Rửa tay bằng xà phòng trước khi nấu/ăn', 'Dùng tay bốc đồ ăn chung', 'Để rác ngay cạnh thớt', 'Lau dao bằng tay áo'], 0, 'Rửa tay sạch là quy tắc cơ bản nhất của ATVSTP.'),
    Q('Dao, thớt cho thực phẩm SỐNG và CHÍN nên?', ['Dùng riêng để tránh nhiễm chéo', 'Dùng chung cho tiện', 'Không cần rửa giữa các lần', 'Lau bằng giẻ bẩn'], 0, 'Dùng riêng giúp tránh vi khuẩn từ đồ sống dính sang đồ chín.'),
    Q('Thực phẩm có dấu hiệu nào dưới đây KHÔNG nên ăn?', ['Mốc, đổi màu, có mùi lạ, sủi bọt bất thường', 'Còn tươi, mùi tự nhiên', 'Còn hạn sử dụng', 'Đóng gói nguyên vẹn'], 0, 'Đó là dấu hiệu hư hỏng/ngộ độc — cần loại bỏ.'),
    Q('Hạn sử dụng (HSD) trên bao bì cho biết?', ['Thời hạn cuối cùng thực phẩm còn an toàn theo nhà sản xuất', 'Ngày sản xuất', 'Giá tiền', 'Khối lượng'], 0, 'Quá HSD, thực phẩm có nguy cơ hỏng và mất an toàn.'),
    Q('Khi bị ngộ độc thực phẩm nhẹ, em cần?', ['Báo người lớn, uống nhiều nước và đến cơ sở y tế nếu nặng', 'Tự uống thuốc giảm đau', 'Cố ăn thêm cho khỏi', 'Nằm im không nói'], 0, 'Báo người lớn và cơ sở y tế là việc cần làm ngay.'),
  ]),

  M(16, 'Bữa ăn hợp lý', [
    Q('Bữa ăn hợp lý là bữa ăn?', ['Có đủ 4 nhóm chất dinh dưỡng và phù hợp lứa tuổi', 'Chỉ có nhiều thịt', 'Chỉ có rau', 'Chỉ có cơm trắng'], 0, 'Đa dạng và đủ 4 nhóm chất giúp bữa ăn cân đối.'),
    Q('Bữa sáng quan trọng vì?', ['Cung cấp năng lượng sau giấc ngủ dài cho học tập, làm việc', 'Không có vai trò gì', 'Chỉ để giữ dáng', 'Để tích mỡ'], 0, 'Bỏ bữa sáng làm giảm khả năng tập trung và học tập.'),
    Q('Khi xây dựng thực đơn cho gia đình, cần lưu ý?', ['Sở thích, sức khỏe, ngân sách và mùa thực phẩm', 'Chỉ chọn món đắt tiền nhất', 'Chỉ ăn thịt mỗi ngày', 'Chỉ ăn đồ hộp'], 0, 'Cân nhắc nhiều yếu tố giúp thực đơn hợp lý và tiết kiệm.'),
    Q('Bữa trưa của học sinh nên?', ['Đủ chất, có rau và đạm, không quá no', 'Chỉ ăn bánh kẹo', 'Bỏ qua hoàn toàn', 'Ăn thật no rồi ngủ luôn'], 0, 'Bữa trưa đủ chất giúp học buổi chiều tốt; không nên quá no.'),
    Q('Cách bài trí mâm cơm gia đình hợp lý?', ['Các món bày gọn, dễ gắp, có canh và rau', 'Chất chồng đồ ăn cao', 'Đặt mỗi món một góc xa nhau', 'Không cần canh, rau'], 0, 'Bày gọn, đủ canh/rau giúp bữa ăn ngon và đủ chất.'),
    Q('Tiêu chí nào KHÔNG phải của bữa ăn hợp lý?', ['Càng nhiều mỡ động vật càng tốt', 'Đủ chất dinh dưỡng', 'Phù hợp ngân sách', 'Hợp khẩu vị gia đình'], 0, 'Quá nhiều mỡ động vật không tốt cho sức khỏe.'),
  ]),

  M(17, 'Thực hành chế biến đơn giản (salad/sandwich)', [
    Q('Nguyên liệu cơ bản cho salad rau trộn dầu giấm gồm?', ['Xà lách, cà chua, dưa chuột, dầu ăn, giấm, muối, tiêu', 'Cơm và thịt rán', 'Bánh mì và sữa đặc', 'Đường và muối'], 0, 'Đây là combo nguyên liệu salad cơ bản, dễ làm.'),
    Q('Trước khi chế biến, bước nào quan trọng?', ['Rửa tay sạch và sơ chế nguyên liệu', 'Lau dao bằng vạt áo', 'Bốc đồ ăn bằng tay bẩn', 'Để rau dính bụi đất'], 0, 'Rửa tay và sơ chế sạch là quy tắc an toàn cơ bản.'),
    Q('Khi làm sandwich kẹp, thứ tự hợp lý là?', ['Phết bơ/sốt → xếp rau, thịt/trứng → đậy lát bánh', 'Đậy nắp trước rồi mới phết', 'Bỏ nhân vào nồi luộc', 'Cắt bánh thành từng mảnh nhỏ trước'], 0, 'Phết sốt trước, rồi xếp nhân, đậy bánh — sandwich chuẩn.'),
    Q('Dụng cụ nên có khi làm salad là?', ['Dao, thớt, bát to để trộn', 'Búa', 'Cưa', 'Đèn pin'], 0, 'Dao, thớt và bát to là dụng cụ căn bản cho salad.'),
    Q('Khi sử dụng dao, em cần?', ['Cầm chắc cán, lưỡi quay xuống/đi xa người', 'Vung dao lung tung', 'Đưa dao cho bạn bằng lưỡi', 'Vừa đi vừa cầm dao'], 0, 'Đây là quy tắc an toàn khi dùng dao trong bếp.'),
    Q('Trang trí món ăn nên?', ['Đơn giản, sạch, hấp dẫn mắt', 'Càng nhiều màu hóa chất càng tốt', 'Chất đồ vô ăn được lên đĩa', 'Bỏ thêm vật sắc nhọn'], 0, 'Trang trí cần đảm bảo an toàn và thẩm mỹ vừa phải.'),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('Chương 1 môn Công nghệ 6 chủ yếu nói về?', ['Nhà ở', 'Trang phục', 'Đồ dùng điện', 'Bảo quản thực phẩm'], 0, 'Chương 1 của Công nghệ 6 (GDPT 2018) là chủ đề Nhà ở.'),
    Q('Chương 2 nói về?', ['Bảo quản và chế biến thực phẩm', 'Đồ dùng điện', 'Nhà ở', 'Cây cảnh'], 0, 'Chương 2 là Bảo quản và chế biến thực phẩm.'),
    Q('Khi thấy người bị điện giật, việc làm đầu tiên là?', ['Ngắt nguồn điện', 'Cầm tay người bị giật', 'Dội nước', 'Chạy khỏi nhà'], 0, 'Phải ngắt nguồn điện trước khi tiếp cận nạn nhân.'),
    Q('Phương pháp bảo quản dùng nhiệt độ thấp là?', ['Tủ lạnh, tủ đông', 'Sấy khô', 'Muối chua', 'Hun khói'], 0, 'Tủ lạnh/đông là bảo quản bằng nhiệt độ thấp.'),
    Q('Bốn nhóm chất dinh dưỡng chính gồm?', ['Bột đường, đạm, béo, vitamin & khoáng', 'Chỉ chất béo', 'Chỉ đường', 'Chỉ vitamin'], 0, 'Bốn nhóm chất là cơ sở cho bữa ăn cân đối.'),
    Q('Để tiết kiệm điện trong gia đình, em nên?', ['Tắt thiết bị khi không sử dụng', 'Bật tất cả thiết bị cùng lúc', 'Mở tủ lạnh thường xuyên', 'Để điều hòa 16°C'], 0, 'Tắt thiết bị khi không dùng là cách tiết kiệm điện đơn giản nhất.'),
  ]),

  // ════════════ CHƯƠNG 3 — TRANG PHỤC & THỜI TRANG (T19–27) ════════════
  M(19, 'Vai trò của trang phục', [
    Q('Trang phục có vai trò chính nào sau đây?', ['Bảo vệ cơ thể và làm đẹp cho con người', 'Chỉ để khoe của', 'Không có vai trò gì', 'Chỉ để nặng người'], 0, 'Trang phục bảo vệ cơ thể khỏi thời tiết và làm đẹp con người.'),
    Q('Trang phục bảo vệ con người KHỎI yếu tố nào?', ['Nắng, gió, mưa, lạnh', 'Đói', 'Buồn ngủ', 'Bài tập về nhà'], 0, 'Trang phục giúp che chắn thời tiết và môi trường.'),
    Q('Trang phục còn thể hiện?', ['Nét văn hóa, nghề nghiệp, lứa tuổi', 'Số tiền của cha mẹ', 'Trí tuệ con người', 'Tốc độ chạy'], 0, 'Trang phục là dấu hiệu văn hóa, nghề nghiệp và lứa tuổi.'),
    Q('Áo dài là trang phục đặc trưng của?', ['Phụ nữ Việt Nam', 'Người Nhật', 'Người Hàn', 'Người Ấn'], 0, 'Áo dài là trang phục truyền thống tiêu biểu của phụ nữ Việt Nam.'),
    Q('Quần áo bảo hộ lao động có vai trò?', ['Bảo vệ người lao động khỏi nguy hiểm khi làm việc', 'Để đẹp', 'Để khoe nghề', 'Để mặc đi tiệc'], 0, 'Trang phục bảo hộ chuyên dụng bảo vệ người lao động.'),
    Q('Đồng phục học sinh có ý nghĩa?', ['Tạo sự thống nhất, kỷ luật và bình đẳng', 'Cho học sinh giàu nổi bật', 'Làm khó người mặc', 'Tiết kiệm giặt giũ'], 0, 'Đồng phục tạo nề nếp, kỷ luật và bình đẳng trong trường học.'),
  ]),

  M(20, 'Phân loại trang phục', [
    Q('Trang phục có thể phân loại theo?', ['Giới tính, lứa tuổi, mùa, công dụng', 'Chỉ theo màu sắc', 'Chỉ theo giá tiền', 'Chỉ theo nhãn hiệu'], 0, 'Trang phục được phân loại theo nhiều tiêu chí: giới tính, tuổi, mùa, công dụng…'),
    Q('Theo mùa, trang phục chia thành?', ['Trang phục mùa hè và mùa đông', 'Trang phục đỏ và xanh', 'Trang phục đắt và rẻ', 'Trang phục mới và cũ'], 0, 'Theo mùa: hè (mát) và đông (ấm) là phân loại phổ biến.'),
    Q('Trang phục thể thao có đặc điểm?', ['Co giãn, thấm hút mồ hôi tốt', 'Cứng và dày', 'Trang trí nặng nề', 'Mặc rất chặt'], 0, 'Đồ thể thao cần co giãn và hút ẩm để vận động thoải mái.'),
    Q('Trang phục dạ hội thường?', ['Lịch sự, sang trọng, phù hợp tiệc tối', 'Rách rưới', 'Đồ thể dục', 'Đồ ngủ'], 0, 'Trang phục dạ hội mang tính trang trọng cho sự kiện tối.'),
    Q('Trang phục lao động (công nhân) thường?', ['Bền, gọn, có yếu tố bảo hộ', 'Mỏng manh', 'Nhiều ren', 'Dài quét đất'], 0, 'Đồ lao động cần bền chắc và an toàn cho người làm việc.'),
    Q('Đồng phục học sinh thuộc nhóm trang phục?', ['Trang phục theo công dụng', 'Trang phục dạ hội', 'Trang phục thể thao chuyên nghiệp', 'Trang phục dạ tiệc'], 0, 'Đồng phục là trang phục theo công dụng, gắn với môi trường học đường.'),
  ]),

  M(21, 'Chất liệu vải', [
    Q('Vải sợi BÔNG (cotton) có đặc điểm?', ['Hút ẩm tốt, thoáng mát, dễ nhăn', 'Không thấm nước', 'Cứng và bóng', 'Nóng bức như nhựa'], 0, 'Cotton hút ẩm và thoáng, nhưng dễ nhăn — phù hợp khí hậu nóng.'),
    Q('Vải LỤA TƠ TẰM được sản xuất từ?', ['Sợi do con tằm nhả ra', 'Bông gòn', 'Lông cừu', 'Dầu mỏ'], 0, 'Lụa tơ tằm có nguồn gốc tự nhiên từ con tằm.'),
    Q('Vải LEN có nguồn gốc từ?', ['Lông cừu (và một số động vật khác)', 'Sợi tằm', 'Cây bông', 'Nhựa'], 0, 'Len chủ yếu được làm từ lông cừu, giữ nhiệt rất tốt.'),
    Q('Vải sợi TỔNG HỢP (như polyester) có đặc điểm?', ['Bền, ít nhăn, ít hút ẩm, ít thoáng', 'Hút ẩm cực tốt', 'Rất thoáng và mát', 'Phân hủy rất nhanh'], 0, 'Polyester bền và ít nhăn nhưng ít thấm hút mồ hôi.'),
    Q('Mùa hè nóng nực nên chọn vải?', ['Cotton hoặc lụa, thoáng mát, hút ẩm', 'Len dày', 'Da tổng hợp dày', 'Nilon kín mít'], 0, 'Cotton/lụa giúp thoáng mát, thấm hút mồ hôi trong mùa nóng.'),
    Q('Mùa đông lạnh nên chọn?', ['Len, dạ giữ nhiệt tốt', 'Lụa mỏng', 'Vải lưới', 'Vải gạc'], 0, 'Len và dạ giữ nhiệt tốt, phù hợp khí hậu lạnh.'),
  ]),

  M(22, 'Lựa chọn trang phục phù hợp', [
    Q('Khi lựa chọn trang phục, cần xét yếu tố nào?', ['Lứa tuổi, vóc dáng, mùa, hoàn cảnh sử dụng', 'Chỉ chọn theo giá tiền', 'Chỉ chọn theo màu vàng', 'Chỉ chọn theo bạn bè bảo'], 0, 'Trang phục phù hợp khi xét nhiều yếu tố cá nhân và hoàn cảnh.'),
    Q('Người gầy nên chọn?', ['Áo có họa tiết ngang, màu sáng', 'Sọc dọc tối màu', 'Đồ rất bó', 'Đồ rất rộng thùng thình'], 0, 'Họa tiết ngang, màu sáng tạo cảm giác đầy đặn hơn.'),
    Q('Người mập nên chọn?', ['Sọc dọc, màu tối, kiểu đơn giản', 'Họa tiết ngang lớn', 'Màu sặc sỡ chói', 'Nhiều ren rườm rà'], 0, 'Sọc dọc và màu tối tạo cảm giác thon gọn hơn.'),
    Q('Đi học, trang phục phù hợp là?', ['Đồng phục theo quy định, gọn gàng', 'Váy dạ hội', 'Đồ ngủ', 'Áo dây cá tính'], 0, 'Đồng phục là trang phục phù hợp môi trường học đường.'),
    Q('Khi đi đám tang nên?', ['Mặc trang phục trầm, lịch sự', 'Mặc đồ sặc sỡ', 'Đồ thể thao ngắn', 'Mặc đồ dạ hội'], 0, 'Trang phục trầm và lịch sự phù hợp lễ tang.'),
    Q('Khi đi tham quan dã ngoại, nên mặc?', ['Trang phục gọn, thấm hút mồ hôi, giày thể thao', 'Váy dạ hội, giày cao gót', 'Áo lông dày', 'Đồ ngủ'], 0, 'Đồ gọn nhẹ và giày thể thao tiện cho vận động ngoài trời.'),
  ]),

  M(23, 'Sử dụng và bảo quản trang phục', [
    Q('Trước khi giặt, em nên?', ['Phân loại đồ sáng – tối, vải mỏng – dày', 'Giặt chung tất cả cho nhanh', 'Vứt cả giày vào máy', 'Giặt với nước sôi 100°C'], 0, 'Phân loại tránh phai màu và hỏng vải.'),
    Q('Vải LEN nên giặt?', ['Bằng tay với nước lạnh hoặc giặt nhẹ', 'Vò mạnh trong nước nóng', 'Vắt mạnh bằng máy', 'Phơi dưới nắng gắt nhiều giờ'], 0, 'Len dễ co rút khi gặp nước nóng và vò mạnh.'),
    Q('Phơi quần áo nên?', ['Nơi thoáng, có nắng/gió, lộn trái đồ màu', 'Phơi trong phòng ẩm kín', 'Phơi trên bụi cây', 'Cuộn lại để khô tự nhiên'], 0, 'Thoáng và có nắng giúp đồ khô nhanh; lộn trái đỡ phai màu.'),
    Q('Khi LÀ (ủi) quần áo, cần?', ['Chọn nhiệt độ phù hợp với chất liệu vải', 'Bật max nhiệt cho mọi loại', 'Là khi vải còn rất ướt sũng', 'Là trên thảm cách điện'], 0, 'Mỗi loại vải có nhiệt độ là khuyến nghị riêng để không cháy/hư.'),
    Q('Hành vi nào ĐÚNG khi cất quần áo?', ['Gấp gọn hoặc treo móc, để nơi khô ráo', 'Vứt đống dưới sàn nhà ẩm', 'Để chung đồ bẩn và đồ sạch', 'Cuộn nhăn nhúm trong góc'], 0, 'Gấp/treo và để nơi khô giúp đồ giữ phom và tránh ẩm mốc.'),
    Q('Khi cất quần áo theo mùa, nên?', ['Giặt sạch, phơi khô và cất vào túi/hộp kín có chống ẩm', 'Cất khi còn ẩm', 'Để trong tủ hở cho thoáng', 'Đặt cạnh nguồn nhiệt'], 0, 'Sạch, khô và kín giúp đồ không bị mốc, mất phom.'),
  ]),

  M(24, 'Thời trang và xu hướng', [
    Q('Thời trang là gì?', ['Cách ăn mặc phổ biến trong một thời kỳ', 'Đồ ăn theo mùa', 'Cách trang trí nhà', 'Cách nấu ăn'], 0, 'Thời trang là phong cách ăn mặc thịnh hành tại một thời điểm.'),
    Q('Xu hướng thời trang thường thay đổi vì?', ['Thị hiếu, văn hóa, công nghệ vải, biến đổi xã hội', 'Mặt trăng', 'Số sao trên trời', 'Sở thích duy nhất của một người'], 0, 'Nhiều yếu tố xã hội và công nghệ tác động đến xu hướng.'),
    Q('Khi theo trào lưu thời trang, em nên?', ['Lựa chọn phù hợp với bản thân, tài chính, lứa tuổi', 'Mua theo bạn bè bằng mọi giá', 'Bỏ học để chạy theo mua sắm', 'Vay tiền để mua đồ hiệu'], 0, 'Theo trend nhưng phải phù hợp khả năng và bản thân.'),
    Q('Áo dài Việt Nam là?', ['Trang phục truyền thống mang giá trị văn hóa', 'Trang phục mới ra mắt', 'Đồ thể thao quốc tế', 'Trang phục lao động'], 0, 'Áo dài là biểu tượng văn hóa truyền thống Việt Nam.'),
    Q('Tiêu chí của một trang phục đẹp là?', ['Vừa người mặc, phù hợp hoàn cảnh, hài hòa màu sắc', 'Đắt nhất có thể', 'Hiếm nhất có thể', 'Lạ mắt nhất có thể'], 0, 'Đẹp = vừa, phù hợp và hài hòa, không chỉ ở giá tiền.'),
    Q('Thời trang BỀN VỮNG ưu tiên?', ['Đồ chất lượng, dùng được lâu, ít gây ô nhiễm', 'Mua nhiều, vứt nhanh', 'Đồ giặt một lần là hỏng', 'Chất liệu khó tái chế'], 0, 'Thời trang bền vững giúp giảm rác thải và bảo vệ môi trường.'),
  ]),

  M(25, 'Phối đồ (1) — màu sắc và phụ kiện', [
    Q('Khi phối đồ, hai màu nào sau đây là TƯƠNG PHẢN?', ['Đỏ và xanh lá', 'Đỏ và hồng', 'Xanh dương và xanh dương đậm', 'Vàng nhạt và vàng đậm'], 0, 'Đỏ và xanh lá nằm đối diện trên vòng màu — tương phản mạnh.'),
    Q('Phối đồ cùng tông là?', ['Sử dụng các sắc độ khác nhau của cùng một màu', 'Trộn 10 màu khác nhau', 'Phối toàn màu trắng', 'Phối toàn màu đen'], 0, 'Cùng tông là dùng sắc độ khác nhau của một màu chủ đạo.'),
    Q('Phụ kiện gồm?', ['Túi, mũ, khăn, dây chuyền, đồng hồ…', 'Chỉ quần áo', 'Chỉ giày dép', 'Chỉ son môi'], 0, 'Phụ kiện là các vật đi kèm trang phục.'),
    Q('Khi phối phụ kiện, nên?', ['Vừa đủ, làm nổi bật bộ đồ chính', 'Đeo càng nhiều càng tốt', 'Trùng màu trang phục chính 100% mọi thứ', 'Phải đắt nhất có thể'], 0, 'Phụ kiện vừa phải, tránh rườm rà; tôn lên trang phục chính.'),
    Q('Màu đen, trắng, xám là?', ['Màu trung tính, dễ phối với nhiều màu khác', 'Màu nóng', 'Màu lạnh', 'Không tồn tại'], 0, 'Trung tính dễ kết hợp với hầu hết các màu khác.'),
    Q('Một bộ đồ hài hòa thường?', ['Không quá nhiều màu rực rỡ cùng lúc', 'Càng nhiều màu sặc sỡ càng đẹp', 'Phải có 10 phụ kiện kim loại', 'Toàn họa tiết lớn chen chúc'], 0, 'Số màu vừa phải giúp bộ đồ trông hài hòa.'),
  ]),

  M(26, 'Phối đồ (2) — theo hoàn cảnh', [
    Q('Đi học, học sinh thường mặc?', ['Đồng phục theo quy định', 'Đồ dạ hội lộng lẫy', 'Đồ bơi', 'Đồ ngủ pyjama'], 0, 'Đồng phục phù hợp môi trường học đường.'),
    Q('Đi tiệc sinh nhật bạn, em nên?', ['Trang phục sạch, lịch sự, vui tươi', 'Đồng phục lao động bẩn', 'Quần áo rách', 'Đồ thể thao ướt mồ hôi'], 0, 'Tiệc nên ăn mặc sạch sẽ, lịch sự để tôn trọng chủ tiệc.'),
    Q('Tham gia hoạt động ngoại khóa ngoài trời nên?', ['Trang phục thể thao, mũ, giày chắc chắn', 'Váy đầm dài rườm rà', 'Giày cao gót', 'Đồ ngủ'], 0, 'Đồ thể thao gọn nhẹ giúp vận động an toàn.'),
    Q('Khi mưa, em nên mang theo?', ['Áo mưa hoặc ô', 'Quạt giấy', 'Khăn lông dày', 'Nồi cơm điện'], 0, 'Áo mưa/ô che mưa khi di chuyển.'),
    Q('Tham dự lễ chào cờ, em cần?', ['Mặc đồng phục chỉnh tề, khăn quàng (nếu là Đội)', 'Mặc đồ tự do sặc sỡ', 'Đeo nhiều phụ kiện kim loại sáng', 'Mặc đồ ngủ'], 0, 'Lễ chào cờ yêu cầu nghiêm túc, chỉnh tề.'),
    Q('Bạn nào phối đồ phù hợp NHẤT khi đi học?', ['Bạn mặc đồng phục sạch, đầu tóc gọn', 'Bạn mặc váy ngắn áo dây', 'Bạn mặc đồ bơi', 'Bạn mặc đồ dạ hội'], 0, 'Đồng phục sạch sẽ, gọn gàng phù hợp môi trường học.'),
  ]),

  M(27, 'Thực hành: Phối trang phục và bảo quản', [
    Q('Khi giặt áo trắng và áo đỏ, em nên?', ['Giặt riêng để áo trắng không bị loang màu đỏ', 'Giặt chung cho nhanh', 'Ngâm chung trong nước nóng', 'Vò chung bằng tay'], 0, 'Tách màu để tránh phai màu lẫn nhau.'),
    Q('Để chọn được trang phục đi học vừa người, em nên?', ['Thử trước khi mua, đo kích thước', 'Mua đại không thử', 'Mua to gấp đôi cho thoải mái', 'Mua quá chật cho gọn'], 0, 'Thử và đo giúp chọn đúng kích cỡ phù hợp cơ thể.'),
    Q('Lập bảng phối đồ trong tuần giúp?', ['Tiết kiệm thời gian, mặc gọn gàng và phù hợp lịch', 'Tiêu nhiều tiền hơn', 'Không có ích gì', 'Mất nhiều thời gian hơn'], 0, 'Lên kế hoạch mặc giúp đỡ mất thời gian buổi sáng.'),
    Q('Khi trang phục có vết bẩn nhỏ, em nên?', ['Xử lý vết bẩn sớm trước khi giặt', 'Mặc tiếp, không xử lý', 'Vứt bỏ luôn', 'Đốt vùng bẩn'], 0, 'Xử lý sớm giúp vết bẩn dễ tẩy sạch hơn.'),
    Q('Tận dụng quần áo cũ bằng cách?', ['Quyên góp, tái chế thành đồ khác', 'Vứt thẳng ra môi trường', 'Đốt bừa bãi', 'Chôn xuống vườn'], 0, 'Quyên góp và tái chế là cách thân thiện môi trường.'),
    Q('Khi mua trang phục, em nên ưu tiên?', ['Vừa người, bền, phù hợp túi tiền và hoàn cảnh', 'Đắt nhất shop', 'Hàng giảm giá nhiều bất kể chất lượng', 'Bạn bè bảo gì mua đó'], 0, 'Tiêu chí thực tế là vừa, bền, phù hợp ngân sách và mục đích.'),
  ]),

  // ════════════ CHƯƠNG 4 — ĐỒ DÙNG ĐIỆN TRONG GIA ĐÌNH (T28–36) ════════════
  M(28, 'Vai trò của đồ dùng điện trong gia đình', [
    Q('Đồ dùng điện trong gia đình giúp?', ['Tiết kiệm sức lao động, nâng cao chất lượng cuộc sống', 'Tốn nhiều công sức hơn', 'Không có vai trò gì', 'Chỉ để chiếm chỗ'], 0, 'Thiết bị điện tự động hóa nhiều việc, nâng cao tiện nghi.'),
    Q('Hầu hết đồ dùng điện trong nhà hoạt động dựa trên?', ['Năng lượng điện chuyển hóa thành nhiệt/cơ/ánh sáng/âm thanh', 'Năng lượng mặt trời trực tiếp 100%', 'Năng lượng từ nến', 'Năng lượng từ pin AA duy nhất'], 0, 'Điện năng được biến đổi thành nhiệt, cơ, quang, âm…'),
    Q('Thông số "220V – 50Hz" trên thiết bị cho biết?', ['Điện áp và tần số định mức', 'Khối lượng thiết bị', 'Giá tiền', 'Số tháng bảo hành'], 0, '220V là điện áp định mức ở Việt Nam; 50Hz là tần số lưới điện.'),
    Q('Khi mua đồ điện, em nên xem?', ['Nhãn năng lượng, công suất, nguồn gốc rõ ràng', 'Chỉ xem giá rẻ nhất', 'Chỉ xem hộp đẹp', 'Mua hàng không nhãn mác'], 0, 'Nhãn năng lượng và thông số kỹ thuật là tiêu chí quan trọng.'),
    Q('Công suất đo bằng đơn vị?', ['Oát (W) hoặc kilôoát (kW)', 'Mét vuông', 'Kilôgam', 'Lít'], 0, 'Công suất điện đo bằng W hoặc kW.'),
    Q('Lượng điện tiêu thụ thường tính bằng?', ['kWh (số điện)', 'mét', 'kg', 'lít'], 0, 'Đồng hồ điện đo bằng kWh — chính là "số điện" mà ta trả tiền.'),
  ]),

  M(29, 'Đèn điện', [
    Q('Đèn nào sau đây tiêu thụ NHIỀU điện nhất với cùng độ sáng?', ['Đèn sợi đốt', 'Đèn LED', 'Đèn huỳnh quang compact', 'Đèn LED dây'], 0, 'Đèn sợi đốt hiệu suất rất thấp, tỏa nhiều nhiệt.'),
    Q('Đèn LED có ưu điểm nào?', ['Tiêu thụ ít điện, tuổi thọ cao, ít nóng', 'Tốn nhiều điện', 'Nhanh hỏng', 'Phát ra tia X có hại'], 0, 'LED là đèn hiệu suất cao và bền nhất hiện nay trong gia đình.'),
    Q('Đèn huỳnh quang (đèn tuýp) hoạt động dựa trên?', ['Phóng điện trong chất khí làm bột huỳnh quang phát sáng', 'Đốt dây tóc', 'Phản xạ ánh sáng mặt trời', 'Đèn pin'], 0, 'Tuýp huỳnh quang dùng cơ chế phóng điện trong khí hơi thủy ngân.'),
    Q('Khi mua đèn, công suất ghi 10W LED cho biết?', ['Điện năng tiêu thụ định mức là 10W', 'Đèn cao 10cm', 'Đèn nặng 10kg', 'Đèn dùng được 10 năm'], 0, '10W là công suất tiêu thụ định mức.'),
    Q('Đèn LED 9W thường tương đương về độ sáng với đèn sợi đốt?', ['Khoảng 60W', 'Khoảng 6W', 'Khoảng 600W', 'Khoảng 9W'], 0, 'LED hiệu suất cao gấp nhiều lần đèn sợi đốt.'),
    Q('Khi thay bóng đèn, em nên?', ['Tắt công tắc/cầu dao trước khi thay', 'Vừa bật vừa thay cho nhanh', 'Dùng tay ướt vặn bóng', 'Đứng trên ghế chông chênh'], 0, 'Ngắt điện và đứng vững là an toàn cơ bản khi thay đèn.'),
  ]),

  M(30, 'Nồi cơm điện', [
    Q('Bộ phận nào của nồi cơm điện sinh nhiệt trực tiếp?', ['Mâm nhiệt (mâm đáy)', 'Nắp nhựa', 'Quai xách', 'Đèn báo'], 0, 'Mâm nhiệt là bộ phận chuyển điện năng thành nhiệt năng để nấu cơm.'),
    Q('Khi đong nước nấu cơm, nên?', ['Theo vạch chia bên trong lòng nồi', 'Đổ ngẫu nhiên', 'Đổ ngập miệng nồi', 'Không cần nước'], 0, 'Vạch chia trong lòng nồi giúp đong nước chính xác theo lượng gạo.'),
    Q('Sau khi nấu chín, nồi tự chuyển sang chế độ?', ['Giữ ấm (Warm)', 'Tắt nguồn hoàn toàn', 'Nấu cháy', 'Nổ'], 0, 'Khi đạt nhiệt độ chín, nồi chuyển sang giữ ấm tự động.'),
    Q('Khi vệ sinh nồi cơm điện, KHÔNG được?', ['Nhúng cả thân nồi vào nước', 'Lau khô bên ngoài', 'Vệ sinh lòng nồi rời', 'Vệ sinh nắp tháo rời'], 0, 'Nhúng cả thân nồi vào nước gây chập, hỏng và nguy hiểm.'),
    Q('Khi cắm nồi cơm điện, em nên?', ['Đảm bảo phích cắm và ổ điện khô ráo', 'Cắm khi tay ướt', 'Đặt cạnh bồn rửa', 'Cắm chung ổ với nhiều thiết bị công suất lớn'], 0, 'Khô ráo và không quá tải ổ điện là quy tắc an toàn.'),
    Q('Để tiết kiệm điện khi dùng nồi cơm, em nên?', ['Vo gạo trước, rút điện sau khi cơm chín giữ ấm xong', 'Bật giữ ấm cả ngày dù không ăn', 'Mở nắp thường xuyên khi đang nấu', 'Cắm điện liên tục 24/7'], 0, 'Giữ ấm quá lâu rất tốn điện và cơm cũng kém ngon.'),
  ]),

  M(31, 'Bếp điện và bếp từ', [
    Q('Bếp TỪ làm nóng nồi theo nguyên lý?', ['Cảm ứng điện từ tạo dòng điện cảm ứng làm nồi nóng', 'Đốt lửa trực tiếp', 'Phát tia X', 'Phát siêu âm'], 0, 'Bếp từ dùng từ trường biến thiên sinh dòng cảm ứng trong nồi nhiễm từ.'),
    Q('Bếp từ chỉ nấu được với loại nồi nào?', ['Nồi có đáy nhiễm từ (gang, inox 430…)', 'Mọi loại nồi nhôm', 'Nồi thủy tinh', 'Nồi đất nung'], 0, 'Cần đáy nhiễm từ để sinh dòng cảm ứng.'),
    Q('So với bếp gas, bếp từ?', ['Sạch, ít khói, không có lửa hở', 'Tốn gas hơn', 'Tạo nhiều khí CO2 hơn', 'Dễ bắt cháy hơn'], 0, 'Bếp từ sạch, không có lửa hở, hạn chế cháy nổ.'),
    Q('Khi nồi rỗng đặt lên bếp từ đang nấu, có thể?', ['Bếp tự ngắt do nhận biết không tải/quá nhiệt', 'Bếp phát nổ', 'Bếp đẹp hơn', 'Bếp tăng công suất'], 0, 'Bếp từ có cảm biến an toàn, ngắt khi không có tải hoặc quá nhiệt.'),
    Q('Khi đang nấu bếp từ, KHÔNG nên đặt vật nào lên mặt bếp?', ['Vật kim loại nhỏ rời (muỗng, dao)', 'Nồi từ chuyên dụng', 'Chảo từ chuyên dụng', 'Nồi inox 430'], 0, 'Vật kim loại nhỏ có thể nóng đột ngột do từ trường, dễ bỏng.'),
    Q('Khi vệ sinh bếp từ, nên?', ['Đợi nguội rồi lau bằng khăn ẩm và dung dịch chuyên dụng', 'Đổ nước sôi lên mặt bếp', 'Cào bằng dao kim loại', 'Lau khi bếp còn rất nóng'], 0, 'Mặt kính bếp từ dễ nứt khi sốc nhiệt và xước khi cào kim loại.'),
  ]),

  M(32, 'Quạt điện và máy điều hòa', [
    Q('Quạt điện hoạt động dựa trên?', ['Động cơ điện làm quay cánh quạt tạo gió', 'Đốt nhiên liệu', 'Áp suất không khí', 'Nén nước'], 0, 'Động cơ điện làm quay cánh quạt, đẩy không khí tạo gió.'),
    Q('Để quạt bền lâu, em nên?', ['Vệ sinh định kỳ, tra dầu (nếu cần) và không che kín lưới', 'Để quạt trong bụi bẩn dày', 'Bật max suốt đêm dù lạnh', 'Cho nước vào động cơ'], 0, 'Vệ sinh thường xuyên giúp quạt hoạt động êm, bền.'),
    Q('Điều hòa làm lạnh không gian nhờ?', ['Quá trình bay hơi/ngưng tụ của môi chất lạnh', 'Tia X', 'Sóng âm', 'Đốt nhiên liệu'], 0, 'Máy lạnh dùng chu trình lạnh với gas (môi chất) bay hơi/ngưng tụ.'),
    Q('Để điều hòa tiết kiệm điện, nên đặt nhiệt độ?', ['26–28°C', '16°C suốt ngày', '10°C', '40°C'], 0, '26–28°C tiết kiệm điện và tốt cho sức khỏe.'),
    Q('Khi dùng điều hòa, KHÔNG nên?', ['Mở toang cửa sổ liên tục để gió thoát ra ngoài', 'Đóng kín cửa', 'Vệ sinh lưới lọc định kỳ', 'Tắt khi không ai ở phòng'], 0, 'Cửa mở làm lạnh thoát ra, lãng phí điện.'),
    Q('Bộ lọc của điều hòa nên?', ['Vệ sinh định kỳ vài tháng/lần', 'Không bao giờ vệ sinh', 'Vứt bỏ luôn', 'Đốt cháy'], 0, 'Lọc bẩn làm điều hòa kém mát, tốn điện và không tốt cho sức khỏe.'),
  ]),

  M(33, 'Máy giặt', [
    Q('Máy giặt chuyển hóa điện năng thành?', ['Cơ năng (làm quay lồng giặt) và nhiệt năng (nếu có chế độ nước nóng)', 'Ánh sáng', 'Tia X', 'Sóng radio'], 0, 'Động cơ máy giặt làm quay lồng giặt; một số máy có gia nhiệt nước.'),
    Q('Trước khi cho đồ vào máy giặt, nên?', ['Kiểm tra túi quần để loại bỏ giấy, tiền, vật cứng', 'Cho cả giày bùn vào', 'Đổ chung với đồ ăn', 'Cho thêm cát'], 0, 'Vật lạ trong túi quần có thể làm hỏng máy hoặc hỏng đồ.'),
    Q('Nên cho lượng đồ giặt?', ['Theo tải định mức của máy, không quá đầy', 'Càng nhiều càng tốt', 'Chỉ 1 chiếc mỗi lần', 'Đầy tràn ra ngoài'], 0, 'Quá tải làm máy hoạt động kém, đồ không sạch và mau hỏng.'),
    Q('Nước giặt và nước xả nên dùng?', ['Loại phù hợp máy giặt và theo liều khuyến nghị', 'Càng nhiều càng sạch', 'Thay bằng xà phòng cục đặc', 'Đổ dầu ăn vào'], 0, 'Quá nhiều bột giặt khó xả sạch, gây hại da và lãng phí.'),
    Q('Khi máy giặt bị lỗi, em nên?', ['Ngắt điện, không tự sửa nếu không biết, báo người lớn', 'Mở ra sửa luôn dù không hiểu', 'Đập mạnh cho hết kêu', 'Chọc tay vào lồng đang quay'], 0, 'Ngắt điện và báo người lớn là an toàn nhất.'),
    Q('Máy giặt nên đặt ở?', ['Nơi bằng phẳng, thoáng, gần cấp/thoát nước', 'Trên mặt nghiêng', 'Nơi ẩm ngập nước thường xuyên', 'Cạnh giường ngủ'], 0, 'Mặt bằng phẳng giúp máy không rung lắc và bền.'),
  ]),

  M(34, 'Sử dụng tiết kiệm điện', [
    Q('Để tiết kiệm điện, em nên?', ['Tắt thiết bị khi không sử dụng, rút phích sạc khi đầy', 'Bật tất cả thiết bị cả ngày', 'Để đèn sáng cả khi ngủ', 'Cắm sạc cả ngày dù đã đầy'], 0, 'Tắt và rút phích khi không dùng giúp giảm "điện ma".'),
    Q('Khi mua thiết bị điện, nên ưu tiên?', ['Nhãn năng lượng 5 sao (Energy Star/Inverter…)', 'Nhãn 1 sao', 'Không nhãn', 'Hàng cũ rò điện'], 0, 'Nhãn nhiều sao cho biết thiết bị hiệu suất cao.'),
    Q('Hành vi nào lãng phí điện?', ['Mở tủ lạnh nhiều lần và lâu', 'Đóng kín tủ', 'Sắp xếp đồ gọn trong tủ', 'Đặt tủ cách tường'], 0, 'Mở tủ lâu/nhiều lần làm máy nén phải hoạt động nhiều hơn.'),
    Q('Sử dụng đèn LED thay đèn sợi đốt giúp?', ['Tiết kiệm phần lớn điện cho chiếu sáng', 'Tốn nhiều điện hơn', 'Không có tác dụng', 'Phát ra tia X'], 0, 'LED tiết kiệm ~80% so với đèn sợi đốt cùng độ sáng.'),
    Q('Inverter (biến tần) trong điều hòa/tủ lạnh có tác dụng?', ['Điều chỉnh công suất linh hoạt, tiết kiệm điện', 'Tăng điện áp gấp đôi', 'Phát tia X', 'Tăng giá tiền điện'], 0, 'Inverter điều chỉnh tốc độ máy nén theo nhu cầu, giảm tiêu thụ.'),
    Q('Khi sạc điện thoại đã đầy, em nên?', ['Rút sạc khỏi ổ điện', 'Cắm tiếp cả ngày', 'Cắm cả đêm dù nóng máy', 'Dùng sạc đểu giá rẻ'], 0, 'Rút sạc khi đầy tiết kiệm điện và bảo vệ pin/máy.'),
  ]),

  M(35, 'An toàn khi sử dụng đồ điện', [
    Q('Trước khi sửa/vệ sinh thiết bị điện, BƯỚC ĐẦU TIÊN là?', ['Ngắt nguồn điện (rút phích hoặc cắt cầu dao)', 'Đổ nước rửa', 'Vẫn bật cho dễ kiểm tra', 'Chạm trực tiếp vào dây dẫn'], 0, 'An toàn điện tuyệt đối yêu cầu ngắt điện trước khi thao tác.'),
    Q('Khi dùng nhiều thiết bị công suất lớn cùng một ổ cắm có thể?', ['Gây quá tải, chập cháy ổ điện', 'An toàn hơn', 'Tăng tuổi thọ thiết bị', 'Tiết kiệm điện'], 0, 'Quá tải là nguyên nhân chập cháy phổ biến.'),
    Q('Thiết bị điện bị nóng bất thường hoặc có mùi khét, em nên?', ['Ngắt nguồn ngay và báo người lớn/thợ', 'Tiếp tục dùng', 'Đổ nước vào cho mát', 'Để đó xem có cháy không'], 0, 'Đây là dấu hiệu sự cố — phải ngắt điện và xử lý ngay.'),
    Q('Cầu dao/aptomat trong nhà có tác dụng?', ['Tự ngắt khi quá tải/chập điện để bảo vệ', 'Tăng điện áp', 'Đo nhiệt độ', 'Phát Wi-Fi'], 0, 'Aptomat ngắt mạch tự động khi có sự cố — bảo vệ an toàn.'),
    Q('Cách sử dụng dây nối/ổ cắm di động an toàn?', ['Không dùng quá tải, kiểm tra dây nguyên vẹn', 'Xếp chồng ổ cắm nhiều tầng', 'Dùng dây hở vỏ', 'Đặt cạnh nước'], 0, 'Quá tải và dây hở là hai nguy cơ chính của ổ cắm di động.'),
    Q('Trẻ nhỏ trong nhà cần?', ['Người lớn giám sát, ổ điện có nắp che', 'Tự do nghịch ổ điện', 'Tự sửa thiết bị', 'Cầm phích cắm chơi'], 0, 'Trẻ nhỏ cần được bảo vệ khỏi nguy cơ điện giật.'),
  ]),

  M(36, 'Ôn tập Học kỳ 2', [
    Q('Trang phục có vai trò nào quan trọng?', ['Bảo vệ cơ thể và làm đẹp', 'Chỉ để khoe của', 'Chỉ để mặc khi đi tiệc', 'Không có vai trò gì'], 0, 'Trang phục bảo vệ cơ thể và là biểu tượng văn hóa cá nhân.'),
    Q('Vải nào sau đây thấm hút mồ hôi tốt nhất?', ['Cotton (sợi bông)', 'Polyester', 'Nilon', 'Nhựa PVC'], 0, 'Cotton thấm hút và thoáng — phù hợp khí hậu nóng.'),
    Q('Đèn nào tiết kiệm điện nhất hiện nay?', ['Đèn LED', 'Đèn sợi đốt', 'Đèn dầu', 'Đèn nến'], 0, 'LED là loại đèn hiệu suất cao và bền nhất trong gia đình.'),
    Q('Bếp từ hoạt động dựa trên?', ['Cảm ứng điện từ', 'Đốt lửa trực tiếp', 'Tia X', 'Phát Wi-Fi'], 0, 'Bếp từ dùng nguyên lý cảm ứng điện từ.'),
    Q('Để tiết kiệm điện, em KHÔNG nên?', ['Bật điều hòa 16°C suốt ngày kể cả khi đi vắng', 'Tắt thiết bị khi không dùng', 'Đặt điều hòa 26–28°C', 'Dùng đèn LED'], 0, 'Bật điều hòa quá lạnh và khi không có người là lãng phí điện.'),
    Q('Khi thấy người bị điện giật, việc đầu tiên?', ['Ngắt nguồn điện', 'Cầm tay người bị giật ngay', 'Đổ nước lên người', 'Bỏ chạy'], 0, 'Ngắt nguồn điện trước khi tiếp cận nạn nhân là quy tắc sống còn.'),
  ]),
];

export const S6CN_SCENARIOS = indexBy(S6CN_WEEKS);
