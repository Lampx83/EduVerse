// ============================================================
// Lớp 1 · MĨ THUẬT — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CT GDPT 2018: chấm–nét cơ bản, màu cơ bản (đỏ/vàng/lam),
// hình vuông–tròn–tam giác, vẽ đồ vật/cây/nhà/con vật/chân dung,
// in lá, xé dán, nặn đất, trang trí khung tranh.
// ID prefix: "P1MT-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P1MT', 'my-thuat', n, title, qs, opts);

export const P1MT_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Làm quen môn Mĩ thuật', [
    Q('Đồ dùng nào KHÔNG dùng trong giờ Mĩ thuật?', ['Bút chì', 'Cái cuốc', 'Giấy vẽ', 'Sáp màu'], 1, 'Cuốc là dụng cụ làm vườn, không dùng để vẽ.'),
    Q('Khi vẽ, em cầm bút bằng tay nào cho thuận?', ['Hai tay cùng lúc', 'Bằng miệng', 'Bằng chân', 'Tay thuận của em'], 3, 'Cầm bằng tay thuận (phải hoặc trái) để vẽ thoải mái.'),
    Q('Trước khi vẽ, em cần chuẩn bị gì?', ['Bút, giấy, màu', 'Cặp sách bỏ ngoài cửa', 'Truyện tranh để đọc trong giờ học', 'Đồ chơi'], 0, 'Chuẩn bị bút, giấy, màu là cần thiết.'),
    Q('Sau khi vẽ xong em nên?', ['Cất gọn đồ dùng', 'Bỏ về luôn', 'Vứt đồ bừa bãi', 'Bôi màu lên bàn'], 0, 'Cất gọn đồ dùng để giữ lớp sạch sẽ.'),
  ]),

  M(2, 'Chấm – tạo hình từ chấm', [
    Q('Dụng cụ nào dễ tạo chấm tròn nhất?', ['Cục tẩy', 'Thước kẻ dài', 'Bút chì nhọn đầu', 'Đầu bút màu/bông tăm'], 3, 'Đầu bút hoặc bông tăm tạo chấm tròn đều.'),
    Q('Bầu trời đầy sao được vẽ bằng?', ['Đường gãy khúc', 'Đường thẳng dài', 'Hình vuông to', 'Nhiều chấm nhỏ sáng'], 3, 'Các ngôi sao được gợi bằng các chấm nhỏ.'),
    Q('Nhiều chấm xếp gần nhau cho cảm giác?', ['Thưa thớt', 'Mất màu', 'Dày, đậm', 'Trống rỗng'], 2, 'Mật độ chấm dày tạo mảng đậm.'),
    Q('Chấm to – chấm nhỏ khác nhau làm tranh?', ['Nhàm chán', 'Sinh động hơn', 'Bị xấu', 'Mất nét'], 1, 'Chấm có to–nhỏ giúp tranh sinh động.'),
  ]),

  M(3, 'Nét thẳng', [
    Q('Đường nào là đường thẳng?', ['Zíc-zắc', 'Lượn sóng', 'Kẻ bằng thước', 'Đường tròn'], 2, 'Kẻ bằng thước cho ta nét thẳng.'),
    Q('Cạnh bàn, cạnh bảng là nét?', ['Lượn sóng', 'Thẳng', 'Xoắn ốc', 'Gấp khúc zíc-zắc'], 1, 'Các cạnh đồ dùng học tập là nét thẳng.'),
    Q('Để vẽ thân cột cờ, em dùng nét?', ['Gãy khúc', 'Cong lượn', 'Chấm rời', 'Thẳng đứng'], 3, 'Cột cờ là một nét thẳng đứng.'),
    Q('Nét thẳng có thể vẽ bằng?', ['Chỉ bằng tay không', 'Chỉ bút lông', 'Cả bằng tay không và thước', 'Chỉ bút chì'], 2, 'Có thể vẽ tay hoặc dùng thước cho thẳng hơn.'),
  ]),

  M(4, 'Nét cong', [
    Q('Nét cong gợi cảm giác?', ['Mềm mại, uyển chuyển', 'Gãy gọn', 'Cứng, mạnh', 'Sắc nhọn'], 0, 'Nét cong mềm mại, uyển chuyển.'),
    Q('Thân con rắn được vẽ bằng nét?', ['Cong/lượn', 'Gãy khúc', 'Thẳng đứng', 'Chấm rời'], 0, 'Thân rắn uốn lượn → nét cong.'),
    Q('Cầu vồng có dạng?', ['Hình tam giác', 'Đường cong vòng cung', 'Hình vuông', 'Đường thẳng'], 1, 'Cầu vồng cong hình vòng cung.'),
    Q('Sóng biển được gợi bằng nét?', ['Thẳng đứng', 'Gấp khúc nhọn', 'Lượn sóng', 'Gãy vuông'], 2, 'Sóng biển dùng nét lượn sóng.'),
  ]),

  M(5, 'Nét gấp khúc', [
    Q('Nét gấp khúc (zíc-zắc) gợi cảm giác?', ['Lặng yên', 'Mạnh, gấp', 'Mềm mại', 'Buồn ngủ, chậm rãi'], 1, 'Nét gấp khúc gợi tia chớp, mạnh và gấp.'),
    Q('Răng cưa của lá có dạng nét?', ['Cong tròn', 'Gấp khúc nhỏ', 'Thẳng dài', 'Chấm tròn'], 1, 'Răng cưa của lá là các nét gấp khúc nhỏ.'),
    Q('Tia chớp trên trời được vẽ bằng?', ['Đường cong tròn', 'Đường gấp khúc', 'Đường thẳng dài', 'Đường tròn'], 1, 'Tia chớp là đường gấp khúc.'),
    Q('Mái nhà ngói thường có nét?', ['Lượn sóng', 'Hai nét thẳng nghiêng chụm đỉnh', 'Một nét cong tròn lớn', 'Chấm rời'], 1, 'Mái nhà ngói tạo bởi hai nét thẳng nghiêng.'),
  ]),

  M(6, 'Màu đỏ', [
    Q('Màu đỏ là màu?', ['Trắng đen', 'Cơ bản', 'Pha trộn', 'Màu lạnh'], 1, 'Đỏ là một trong 3 màu cơ bản.'),
    Q('Vật nào thường có màu đỏ?', ['Bầu trời ban ngày', 'Lá cây non', 'Bầu trời', 'Quả cà chua chín'], 3, 'Cà chua chín có màu đỏ.'),
    Q('Đèn giao thông đỏ nghĩa là?', ['Rẽ phải', 'Dừng lại', 'Đi chậm', 'Được phép đi tiếp'], 1, 'Đèn đỏ — dừng lại.'),
    Q('Lá cờ Tổ quốc Việt Nam có nền?', ['Vàng có ngôi sao đỏ', 'Trắng có ngôi sao đỏ', 'Xanh lam có ngôi sao vàng', 'Đỏ'], 3, 'Cờ đỏ sao vàng — nền màu đỏ.'),
  ]),

  M(7, 'Màu vàng', [
    Q('Màu vàng là màu?', ['Cơ bản', 'Màu trung tính', 'Pha trộn', 'Trắng đen'], 0, 'Vàng là một trong 3 màu cơ bản.'),
    Q('Mặt trời thường tô màu?', ['Xám tro', 'Hồng nhạt', 'Xanh lam', 'Vàng/cam'], 3, 'Mặt trời gợi nắng — vàng/cam.'),
    Q('Quả chuối chín có vỏ màu?', ['Tím sẫm', 'Vàng', 'Xanh lam', 'Đỏ tươi'], 1, 'Chuối chín có vỏ vàng.'),
    Q('Ngôi sao trên cờ Tổ quốc có màu?', ['Vàng', 'Trắng', 'Xanh lam', 'Đỏ tươi'], 0, 'Sao vàng nằm giữa nền đỏ.'),
  ]),

  M(8, 'Màu xanh (lam)', [
    Q('Màu xanh lam là màu?', ['Đen trắng', 'Màu trung tính', 'Pha trộn', 'Cơ bản'], 3, 'Xanh lam là 1 trong 3 màu cơ bản.'),
    Q('Bầu trời quang đãng thường có màu?', ['Vàng tươi', 'Đen kịt', 'Đỏ rực', 'Xanh lam'], 3, 'Trời ban ngày thường xanh lam.'),
    Q('Nước biển thường được vẽ màu?', ['Hồng phấn', 'Xanh lam', 'Vàng tươi', 'Đỏ tươi'], 1, 'Nước biển có màu xanh lam.'),
    Q('Màu xanh lam thuộc nhóm?', ['Nóng', 'Lạnh', 'Trung tính', 'Màu pha'], 1, 'Xanh lam là màu lạnh.'),
  ]),

  M(9, 'Ba màu cơ bản', [
    Q('Ba màu cơ bản gồm?', ['Đỏ – Đen – Trắng', 'Hồng – Tím – Cam', 'Nâu – Xám – Lục', 'Đỏ – Vàng – Xanh lam'], 3, 'Ba màu cơ bản: đỏ, vàng, xanh lam.'),
    Q('Màu nào KHÔNG phải màu cơ bản?', ['Đen', 'Trắng', 'Xanh lam', 'Tím'], 3, 'Tím là màu pha, không phải màu cơ bản.'),
    Q('Từ 3 màu cơ bản, ta có thể?', ['Pha ra nhiều màu khác', 'Không pha được gì', 'Chỉ pha được màu xám', 'Chỉ vẽ ba màu'], 0, 'Ba màu cơ bản pha ra được nhiều màu mới.'),
    Q('Em hãy chọn nhóm CHỈ gồm màu cơ bản:', ['Đỏ – Hồng – Vàng', 'Đỏ – Vàng – Xanh lam', 'Đen – Trắng – Xám', 'Cam – Lục – Tím'], 1, 'Chỉ nhóm đầu là 3 màu cơ bản.'),
  ]),

  M(10, 'Hình vuông', [
    Q('Hình vuông có mấy cạnh?', ['6', '4', '3', '5'], 1, 'Hình vuông có 4 cạnh bằng nhau.'),
    Q('Bốn cạnh của hình vuông?', ['Khác nhau', 'Bằng nhau', 'Lượn sóng', 'Hai dài hai ngắn'], 1, 'Hình vuông có 4 cạnh bằng nhau.'),
    Q('Vật nào có dạng hình vuông?', ['Quả bóng', 'Cái nón', 'Mặt khăn tay', 'Cây bút'], 2, 'Khăn tay thường vuông.'),
    Q('Hình vuông được vẽ bằng nét?', ['Thẳng', 'Cong khép kín', 'Chấm rời nối nhau', 'Lượn sóng'], 0, 'Cạnh hình vuông là nét thẳng.'),
  ]),

  M(11, 'Hình tròn', [
    Q('Hình tròn được vẽ bằng nét?', ['Nhiều chấm rời', 'Cong khép kín', 'Thẳng nối bốn cạnh', 'Gấp khúc'], 1, 'Hình tròn là nét cong khép kín.'),
    Q('Vật nào có dạng hình tròn?', ['Cái bút', 'Bánh xe', 'Quyển vở', 'Cái thước'], 1, 'Bánh xe là hình tròn.'),
    Q('Mặt trời thường vẽ dạng?', ['Hình tròn', 'Hình vuông', 'Hình chữ nhật', 'Hình tam giác'], 0, 'Mặt trời vẽ tròn.'),
    Q('Để vẽ hình tròn em có thể dùng?', ['Thước thẳng', 'Bút chì và thước kẻ', 'Compa hoặc cốc úp ngược', 'Bút xoá'], 2, 'Compa hoặc đáy cốc giúp vẽ tròn dễ.'),
  ]),

  M(12, 'Hình tam giác', [
    Q('Hình tam giác có mấy cạnh?', ['2', '5', '4', '3'], 3, 'Tam giác có 3 cạnh.'),
    Q('Mái nhà ngói thường có dạng?', ['Hình tròn', 'Tam giác', 'Hình vuông', 'Lượn sóng'], 1, 'Mái nhà ngói thường là hình tam giác.'),
    Q('Hình tam giác được vẽ bằng?', ['3 nét thẳng nối nhau', '2 nét cong', '1 nét tròn', '4 nét thẳng'], 0, 'Tam giác do 3 nét thẳng tạo thành.'),
    Q('Cái nón lá có dạng?', ['Hình vuông', 'Chữ nhật', 'Tam giác', 'Lượn sóng'], 2, 'Nón lá nhìn ngang gần như tam giác.'),
  ]),

  M(13, 'Vẽ đồ vật quen thuộc – cái ô', [
    Q('Cái ô thường có phần?', ['Đầu và đuôi', 'Tán và cán', 'Cánh và mỏ', 'Chân và tay'], 1, 'Ô gồm tán ô (che) và cán ô (tay cầm).'),
    Q('Tán ô có dạng?', ['Tam giác nhọn', 'Đường thẳng', 'Tròn/vòng cung', 'Hình chữ nhật dài'], 2, 'Tán ô là vòng cung che đầu.'),
    Q('Cán ô được vẽ bằng nét?', ['Lượn sóng', 'Thẳng', 'Chấm rời nhau', 'Gấp khúc lớn'], 1, 'Cán ô là nét thẳng dài.'),
    Q('Em nên tô cái ô bằng?', ['Bôi đen hết', 'Nhiều màu tươi vui', 'Để trắng', 'Một màu duy nhất'], 1, 'Tô nhiều màu tươi vui cho đẹp.'),
  ]),

  M(14, 'Vẽ cây', [
    Q('Cây gồm các phần?', ['Đầu – mình – chân', 'Tán – cán', 'Tay – chân', 'Thân – cành – lá'], 3, 'Cây có thân, cành và lá.'),
    Q('Thân cây vẽ bằng nét?', ['Cong lượn', 'Thẳng đứng', 'Lượn sóng', 'Gấp khúc nhỏ'], 1, 'Thân cây thường là nét thẳng đứng.'),
    Q('Tán lá thường vẽ dạng?', ['Đường thẳng', 'Tam giác nhọn', 'Vòng cong', 'Hình chữ nhật dài'], 2, 'Tán lá vẽ dạng vòng cong rồi tô màu xanh.'),
    Q('Lá cây thường có màu?', ['Xanh lam', 'Hồng phấn', 'Xanh lá', 'Cam'], 2, 'Lá cây thường màu xanh lá.'),
  ]),

  M(15, 'Vẽ ngôi nhà của em', [
    Q('Ngôi nhà đơn giản gồm?', ['Tán và cán', 'Chỉ mái', 'Chỉ cửa', 'Thân nhà – mái – cửa'], 3, 'Nhà có thân, mái và cửa.'),
    Q('Thân nhà thường vẽ dạng?', ['Lượn sóng', 'Tam giác', 'Hình vuông/chữ nhật', 'Hình tròn'], 2, 'Thân nhà thường là hình vuông hoặc chữ nhật.'),
    Q('Mái nhà thường vẽ dạng?', ['Hình tròn', 'Hình chữ nhật nằm ngang', 'Tam giác', 'Chấm rời'], 2, 'Mái nhà thường là hình tam giác.'),
    Q('Cửa ra vào thường vẽ dạng?', ['Lượn sóng', 'Tam giác nhọn', 'Chữ nhật đứng', 'Hình tròn'], 2, 'Cửa ra vào là chữ nhật đứng.'),
  ]),

  M(16, 'Vẽ con vật – con cá', [
    Q('Con cá có phần?', ['Tán – cán', 'Tay – chân', 'Mái – cửa', 'Đầu – mình – đuôi'], 3, 'Cá có đầu, mình và đuôi.'),
    Q('Mình cá thường có dạng?', ['Đường thẳng', 'Tam giác nhọn', 'Bầu dục/oval', 'Hình chữ nhật dài'], 2, 'Mình cá có dạng bầu dục.'),
    Q('Đuôi cá vẽ dạng?', ['Tam giác/quạt', 'Đường thẳng dài', 'Vuông cứng', 'Tròn kín'], 0, 'Đuôi cá xòe như hình tam giác.'),
    Q('Cá sống ở đâu?', ['Trên cây', 'Dưới nước', 'Trong tủ', 'Trên trời'], 1, 'Cá sống ở dưới nước.'),
  ]),

  M(17, 'Vẽ con vật – con mèo', [
    Q('Mèo có mấy chân?', ['8', '4', '6', '2'], 1, 'Mèo có 4 chân.'),
    Q('Đầu mèo có dạng?', ['Đường thẳng', 'Vuông cứng', 'Tròn', 'Tam giác nhọn'], 2, 'Đầu mèo thường vẽ dạng tròn.'),
    Q('Tai mèo có dạng?', ['Tam giác nhỏ', 'Hình vuông nhỏ', 'Tròn to', 'Lượn sóng'], 0, 'Tai mèo là hai tam giác nhỏ.'),
    Q('Mèo kêu thế nào?', ['Ụt ịt', 'Chiếp chiếp', 'Meo meo', 'Gâu gâu'], 2, 'Mèo kêu “meo meo”.'),
  ]),

  M(18, 'Trưng bày tranh cuối HK1', [
    Q('Trước khi trưng bày, em cần?', ['Vò tranh lại', 'Bôi bẩn tranh', 'Kí tên/dán nhãn lên tranh', 'Xé góc tranh'], 2, 'Kí tên/dán nhãn để biết tranh của ai.'),
    Q('Khi xem tranh của bạn, em nên?', ['Chê bai bạn', 'Khen ngợi điểm hay', 'Vẽ lên tranh bạn', 'Xé tranh'], 1, 'Khen ngợi điều bạn làm tốt.'),
    Q('Tranh được treo ở đâu cho dễ xem?', ['Dưới gầm bàn', 'Trên bảng/tường lớp', 'Ngoài cửa sổ', 'Trong cặp'], 1, 'Treo trên bảng/tường để cả lớp cùng xem.'),
    Q('Trưng bày tranh giúp em?', ['Tự tin và học hỏi từ bạn', 'Mất bạn', 'Quên cách vẽ', 'Buồn ngủ'], 0, 'Trưng bày giúp em tự tin và học hỏi từ bạn.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Pha màu vui – cam', [
    Q('Đỏ + Vàng cho ra màu?', ['Cam', 'Tím', 'Lục (xanh lá)', 'Hồng'], 0, 'Đỏ + vàng = cam.'),
    Q('Quả nào thường có màu cam?', ['Quả mận', 'Quả nho', 'Quả việt quất', 'Quả cam'], 3, 'Quả cam có màu cam.'),
    Q('Màu cam thuộc nhóm?', ['Nóng', 'Lạnh', 'Trung tính', 'Không có'], 0, 'Cam là màu nóng.'),
    Q('Để tô con cá vàng, ta dùng?', ['Xanh lam đậm', 'Đen kịt', 'Tím sẫm', 'Cam/vàng'], 3, 'Cá vàng tô vàng/cam.'),
  ]),

  M(20, 'Pha màu vui – lục', [
    Q('Xanh lam + Vàng cho ra màu?', ['Hồng', 'Lục (xanh lá)', 'Tím', 'Cam'], 1, 'Lam + vàng = lục.'),
    Q('Lá cây thường màu?', ['Tím', 'Lục/xanh lá', 'Đen kịt', 'Đỏ tươi'], 1, 'Lá cây màu lục.'),
    Q('Màu lục thuộc nhóm?', ['Nóng', 'Đen', 'Trắng', 'Lạnh'], 3, 'Lục là màu lạnh.'),
    Q('Em hãy chọn vật có màu lục:', ['Ngọn lửa bếp ga', 'Quả cà chua', 'Quả dưa hấu (vỏ)', 'Quả chuối chín'], 2, 'Vỏ dưa hấu có màu lục.'),
  ]),

  M(21, 'In lá cây', [
    Q('Để in lá cây, ta tô màu vào mặt nào của lá?', ['Không cần tô', 'Mặt có gân nổi', 'Cuống lá', 'Mặt nhẵn'], 1, 'Mặt có gân nổi sẽ in rõ nét.'),
    Q('Sau khi tô màu lên lá, ta?', ['Bỏ vào nước', 'Ném đi', 'Úp lên giấy và ấn nhẹ', 'Để khô rồi xé'], 2, 'Úp lá lên giấy rồi ấn nhẹ để in.'),
    Q('In lá giúp tạo ra?', ['Hình tam giác', 'Hình tròn đặc', 'Hình lá có gân đẹp', 'Hình vuông'], 2, 'In ra hình lá có gân rõ.'),
    Q('Sau khi in xong em nên?', ['Rửa tay, lau bàn', 'Để bừa', 'Ăn cái lá', 'Bôi màu khắp lớp'], 0, 'Rửa tay và lau bàn cho sạch.'),
  ]),

  M(22, 'Nghỉ Tết – tranh ngày Tết', [
    Q('Ngày Tết thường có loại hoa nào ở miền Bắc?', ['Hoa cải', 'Hoa sen', 'Hoa hướng dương', 'Hoa đào'], 3, 'Miền Bắc có hoa đào hồng dịp Tết.'),
    Q('Ở miền Nam, Tết thường có hoa?', ['Hoa cúc trắng', 'Hoa đào', 'Hoa hồng', 'Hoa mai vàng'], 3, 'Miền Nam có hoa mai vàng.'),
    Q('Màu chủ đạo của tranh Tết thường?', ['Trắng toát', 'Tím sẫm', 'Đỏ – vàng tươi vui', 'Đen – xám buồn'], 2, 'Tranh Tết thường đỏ – vàng tươi vui.'),
    Q('Vật nào hay xuất hiện trong tranh Tết?', ['Áo mưa', 'Máy giặt', 'Tủ lạnh', 'Bánh chưng'], 3, 'Bánh chưng quen thuộc ngày Tết.'),
  ]),

  M(23, 'Xé dán giấy – hình tròn', [
    Q('Khi xé giấy, em nên?', ['Giật mạnh một cái', 'Nhúng nước rồi xé', 'Cắn xé giấy', 'Xé từ từ theo đường vẽ'], 3, 'Xé từ từ để mép đẹp.'),
    Q('Để dán giấy, em dùng?', ['Hồ/keo dán', 'Đất sét', 'Nước lã', 'Bột mì khô'], 0, 'Dùng hồ hoặc keo dán giấy.'),
    Q('Trước khi dán em nên?', ['Vò giấy', 'Dán bừa', 'Bôi keo khắp bàn', 'Ướm thử vị trí'], 3, 'Ướm thử trước để biết chỗ dán đẹp.'),
    Q('Sau khi xé dán em nên?', ['Lau tay sạch, dọn vụn giấy', 'Để vụn khắp lớp', 'Vứt ra cửa sổ', 'Bôi keo lên áo bạn'], 0, 'Phải dọn vụn giấy cho sạch.'),
  ]),

  M(24, 'Xé dán – con vật từ hình cơ bản', [
    Q('Để xé dán con cá, em xé hình?', ['Chỉ hình tròn', 'Chỉ hình vuông', 'Chỉ đường thẳng', 'Bầu dục (mình) + tam giác (đuôi)'], 3, 'Mình cá oval + đuôi tam giác.'),
    Q('Để xé dán mặt trời, em xé hình?', ['Vuông có nhiều tia', 'Lượn sóng', 'Tròn + nhiều tia thẳng', 'Tam giác'], 2, 'Mặt trời: tròn + tia thẳng.'),
    Q('Để xé dán ngôi nhà, ta cần?', ['Vuông (thân) + tam giác (mái)', 'Chỉ vuông', 'Chỉ tam giác', 'Chỉ tròn'], 0, 'Thân vuông + mái tam giác.'),
    Q('Khi sắp xếp hình lên giấy, em nên?', ['Đè chồng lên nhau hết', 'Dồn về một góc', 'Cân đối, hài hoà', 'Quay ngược tất cả'], 2, 'Sắp xếp cân đối, hài hoà.'),
  ]),

  M(25, 'Nặn đất sét – quả bóng', [
    Q('Để nặn quả bóng tròn, em?', ['Bóp dẹt', 'Ấn ngón tay vào', 'Vò tròn đất giữa hai lòng bàn tay', 'Kéo dài như sợi dây'], 2, 'Vò tròn giữa hai lòng bàn tay.'),
    Q('Khi nặn, em ngồi thế nào?', ['Đứng nhảy', 'Quay lưng', 'Ngay ngắn tại bàn', 'Nằm ra bàn'], 2, 'Ngồi ngay ngắn để dễ nặn.'),
    Q('Sau khi nặn em phải?', ['Bôi lên áo bạn', 'Ăn đất sét', 'Rửa tay, lau bàn', 'Vứt đất khắp lớp'], 2, 'Rửa tay và lau bàn cho sạch.'),
    Q('Đất sét có thể tái sử dụng nếu?', ['Ném ra ngoài trời', 'Ngâm nước nhiều giờ', 'Bảo quản trong hộp kín', 'Để khô ngoài không khí'], 2, 'Đậy kín để đất không bị khô.'),
  ]),

  M(26, 'Nặn quả em thích', [
    Q('Để nặn quả táo, ta nặn?', ['Khối vuông', 'Khối tròn rồi gắn cuống nhỏ', 'Khối phẳng', 'Khối dài'], 1, 'Táo có dạng tròn, có cuống nhỏ.'),
    Q('Để nặn quả chuối, ta nặn?', ['Khối phẳng tam giác', 'Khối dài, cong nhẹ', 'Khối vuông', 'Khối tròn đặc'], 1, 'Chuối dài và cong nhẹ.'),
    Q('Màu của quả chuối chín thường?', ['Xanh lá đậm', 'Đỏ tươi', 'Vàng', 'Xanh lam'], 2, 'Chuối chín thường vàng.'),
    Q('Sau khi nặn xong em nên?', ['Đập bẹp', 'Ăn thử', 'Vứt đi luôn', 'Trưng bày khoe bạn'], 3, 'Trưng bày cho cả lớp cùng xem.'),
  ]),

  M(27, 'Vẽ chân dung mẹ', [
    Q('Khuôn mặt thường vẽ dạng?', ['Đường thẳng', 'Bầu dục (oval)', 'Tam giác nhọn', 'Vuông cứng'], 1, 'Mặt người thường dạng bầu dục.'),
    Q('Trên mặt có những bộ phận gì?', ['Mắt – mũi – miệng – tai', 'Tán và cán', 'Chỉ có tóc', 'Mái và cửa'], 0, 'Mặt có mắt, mũi, miệng, tai.'),
    Q('Hai mắt vẽ thế nào cho cân đối?', ['Cùng kích thước, ngang nhau', 'Cả hai ở má', 'Một trên một dưới', 'Một to một nhỏ'], 0, 'Hai mắt bằng nhau, ngang hàng.'),
    Q('Tô màu tranh chân dung mẹ, em nên?', ['Tô tươi vui, dịu dàng', 'Tô đen sì', 'Để trắng hết', 'Bôi xám'], 0, 'Màu tươi vui thể hiện tình yêu mẹ.'),
  ]),

  M(28, 'Vẽ chân dung bạn em', [
    Q('Trước khi vẽ, em nên?', ['Hỏi bạn ăn gì', 'Nhắm mắt tưởng tượng hết', 'Xem điện thoại', 'Quan sát kĩ khuôn mặt bạn'], 3, 'Quan sát kĩ để vẽ giống.'),
    Q('Nếu bạn có tóc xoăn, em vẽ tóc bằng nét?', ['Gấp khúc nhọn', 'Lượn xoăn', 'Chấm rời', 'Thẳng tắp'], 1, 'Tóc xoăn vẽ bằng nét lượn xoăn.'),
    Q('Nếu bạn đeo kính, em vẽ thêm?', ['Vẽ ô tô', 'Vẽ thêm mũ', 'Hai hình tròn nối nhau ở mắt', 'Không vẽ gì'], 2, 'Kính: hai hình tròn nối nhau che hai mắt.'),
    Q('Khi vẽ xong em nên?', ['Xé tranh', 'Bôi bẩn', 'Giấu đi', 'Tặng tranh cho bạn'], 3, 'Tặng tranh cho bạn rất ý nghĩa.'),
  ]),

  M(29, 'Vẽ cảnh sân trường', [
    Q('Sân trường có thể có?', ['Núi tuyết', 'Cây xanh, ghế đá, cột cờ', 'Bãi biển', 'Ruộng lúa'], 1, 'Sân trường thường có cây, ghế đá, cột cờ.'),
    Q('Cột cờ thường có gì trên đỉnh?', ['Lá cờ', 'Cái nón', 'Quả bóng', 'Bông hoa'], 0, 'Trên đỉnh cột cờ có lá cờ.'),
    Q('Để vẽ nhiều bạn đang chơi, em nên?', ['Vẽ tất cả giống hệt', 'Vẽ to – nhỏ khác nhau', 'Vẽ chồng lên nhau hết', 'Chỉ vẽ một bạn'], 1, 'Vẽ kích thước khác nhau cho sinh động.'),
    Q('Bầu trời em tô màu?', ['Tím sẫm', 'Xanh lam', 'Xám đậm như sắp mưa', 'Đỏ tươi'], 1, 'Bầu trời thường xanh lam.'),
  ]),

  M(30, 'Vẽ con đường tới trường', [
    Q('Con đường có dạng?', ['Hai nét dài song song', 'Hình tròn', 'Hình vuông', 'Chấm rời'], 0, 'Đường là hai nét dài song song.'),
    Q('Hai bên đường thường có?', ['Biển sâu', 'Núi lửa', 'Tàu vũ trụ', 'Cây xanh, nhà cửa'], 3, 'Hai bên đường thường có cây và nhà.'),
    Q('Để tô đường, em dùng màu?', ['Xám/nâu nhạt', 'Đen kịt', 'Hồng phấn', 'Tím sẫm'], 0, 'Đường thường xám hoặc nâu nhạt.'),
    Q('Khi đi trên đường em phải?', ['Đi vỉa hè bên phải', 'Nhắm mắt đi', 'Vừa đi vừa đùa nghịch', 'Chạy giữa đường'], 0, 'Đi vỉa hè bên phải an toàn.'),
  ]),

  M(31, 'Trang trí khung tranh', [
    Q('Khung tranh thường có hình?', ['Chữ nhật/vuông bao quanh tranh', 'Tam giác nhọn', 'Lượn sóng', 'Tròn nhỏ'], 0, 'Khung tranh thường là chữ nhật/vuông.'),
    Q('Để khung đẹp, em dùng họa tiết?', ['Để trắng hết', 'Lặp lại đều', 'Bôi đen hết', 'Lộn xộn'], 1, 'Họa tiết lặp lại đều khiến khung đẹp.'),
    Q('Họa tiết có thể là?', ['Số dài', 'Chữ cái khó', 'Toán học', 'Chấm – nét – hoa lá'], 3, 'Họa tiết là chấm, nét, hoa lá đơn giản.'),
    Q('Khung KHÔNG nên?', ['Cân đối', 'Đẹp đều', 'Hài hoà', 'Lấn vào hình chính'], 3, 'Khung không nên che mất hình chính.'),
  ]),

  M(32, 'Trang trí đường diềm', [
    Q('Đường diềm là gì?', ['Một nét dài', 'Một chấm to', 'Một hình tròn', 'Dải họa tiết lặp lại theo hàng'], 3, 'Đường diềm là họa tiết lặp lại thành dải.'),
    Q('Họa tiết trên đường diềm thường?', ['Mỗi cái khác nhau', 'Đè chồng lên', 'Lộn xộn', 'Lặp lại đều'], 3, 'Họa tiết lặp đều nhau.'),
    Q('Đường diềm hay trang trí ở đâu?', ['Dưới gầm bàn', 'Giữa giấy', 'Trên trần', 'Mép khăn, mép áo, mép giấy'], 3, 'Đường diềm hay ở mép khăn, mép áo, mép giấy.'),
    Q('Để đường diềm đẹp, màu nên?', ['Hài hoà 2–3 màu', 'Bôi đen hết', 'Dùng 10 màu một lúc', 'Không tô'], 0, 'Hài hoà 2–3 màu cho dễ nhìn.'),
  ]),

  M(33, 'Vẽ bức tranh em yêu', [
    Q('Chủ đề tranh nên?', ['Quá xa lạ', 'Không có chủ đề', 'Sao chép y nguyên', 'Gần gũi với em'], 3, 'Vẽ điều quen thuộc, em hiểu rõ.'),
    Q('Trước khi vẽ em nên?', ['Đi chơi đã', 'Vẽ ngay không nghĩ', 'Xé giấy ra', 'Hình dung bố cục'], 3, 'Hình dung trước để bố cục tốt.'),
    Q('Khi đặt tên tranh, em chọn?', ['Tên của bạn', 'Không cần tên', 'Tên thật dài, khó hiểu', 'Tên ngắn, rõ ý'], 3, 'Tên ngắn, rõ ý.'),
    Q('Khi vẽ sai một chi tiết, em nên?', ['Vò tranh vứt đi', 'Tô đè màu đen lên toàn bộ', 'Đổ lỗi cho bạn', 'Xử lí khéo, biến thành chi tiết khác'], 3, 'Có thể sáng tạo, biến cái sai thành chi tiết mới.'),
  ]),

  M(34, 'Trưng bày tác phẩm', [
    Q('Để chuẩn bị trưng bày, tranh cần?', ['Bị nhàu', 'Khô và phẳng', 'Còn ướt', 'Bị rách'], 1, 'Tranh cần khô và phẳng.'),
    Q('Khi giới thiệu tranh, em nên?', ['Im lặng', 'Quay đi', 'Nói rõ tên tranh và ý mình muốn vẽ', 'Cười to'], 2, 'Nói rõ tên và ý nghĩa cho người xem hiểu.'),
    Q('Khi nghe bạn giới thiệu tranh, em nên?', ['Bỏ ra ngoài', 'Nói chuyện riêng', 'Chú ý lắng nghe và vỗ tay', 'Cười nhạo'], 2, 'Lắng nghe là tôn trọng bạn.'),
    Q('Trưng bày giúp em?', ['Ngại nói trước lớp', 'Tự tin và học hỏi', 'Mất bạn', 'Buồn ngủ'], 1, 'Trưng bày giúp em tự tin và học hỏi từ bạn.'),
  ]),

  M(35, 'Tổng kết năm học', [
    Q('Sau một năm học Mĩ thuật, em đã biết?', ['Chỉ biết một hình', 'Chỉ biết một màu', 'Không biết gì cả', 'Nhiều nét, màu và hình cơ bản'], 3, 'Em đã biết nhiều nét, màu, hình cơ bản.'),
    Q('Em sẽ tiếp tục?', ['Chỉ vẽ khi cô giáo yêu cầu', 'Sợ Mĩ thuật', 'Quan sát và sáng tạo nhiều hơn', 'Vò hết tranh đi'], 2, 'Quan sát và sáng tạo tiếp tục cho lớp sau.'),
    Q('Đồ dùng Mĩ thuật cuối năm em nên?', ['Vứt đi hết', 'Cho mượn rồi quên', 'Cất gọn, giữ cho năm sau', 'Đập bẹp'], 2, 'Cất gọn để dùng tiếp năm sau.'),
    Q('Điều quan trọng nhất khi vẽ là?', ['Phải đẹp nhất lớp', 'Vẽ thật nhanh', 'Phải giống y người khác', 'Cảm xúc và sáng tạo của em'], 3, 'Cảm xúc và sáng tạo là quan trọng nhất.'),
  ]),
];

export const P1MT_SCENARIOS = indexBy(P1MT_WEEKS);
