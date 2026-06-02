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
    Q('Đồ dùng nào KHÔNG dùng trong giờ Mĩ thuật?', ['Bút chì', 'Sáp màu', 'Cái cuốc', 'Giấy vẽ'], 2, 'Cuốc là dụng cụ làm vườn, không dùng để vẽ.'),
    Q('Khi vẽ, em cầm bút bằng tay nào cho thuận?', ['Tay thuận của em', 'Hai tay cùng lúc', 'Bằng chân', 'Bằng miệng'], 0, 'Cầm bằng tay thuận (phải hoặc trái) để vẽ thoải mái.'),
    Q('Trước khi vẽ, em cần chuẩn bị gì?', ['Bút, giấy, màu', 'Cặp sách bỏ ngoài cửa', 'Đồ ăn', 'Đồ chơi'], 0, 'Chuẩn bị bút, giấy, màu là cần thiết.'),
    Q('Sau khi vẽ xong em nên?', ['Vứt đồ bừa bãi', 'Cất gọn đồ dùng', 'Bỏ về luôn', 'Bôi màu lên bàn'], 1, 'Cất gọn đồ dùng để giữ lớp sạch sẽ.'),
  ]),

  M(2, 'Chấm – tạo hình từ chấm', [
    Q('Dụng cụ nào dễ tạo chấm tròn nhất?', ['Đầu bút màu/bông tăm', 'Thước kẻ dài', 'Kéo', 'Cục tẩy'], 0, 'Đầu bút hoặc bông tăm tạo chấm tròn đều.'),
    Q('Bầu trời đầy sao được vẽ bằng?', ['Đường thẳng dài', 'Nhiều chấm nhỏ sáng', 'Hình vuông to', 'Đường gãy khúc'], 1, 'Các ngôi sao được gợi bằng các chấm nhỏ.'),
    Q('Nhiều chấm xếp gần nhau cho cảm giác?', ['Thưa thớt', 'Dày, đậm', 'Trống rỗng', 'Mất màu'], 1, 'Mật độ chấm dày tạo mảng đậm.'),
    Q('Chấm to – chấm nhỏ khác nhau làm tranh?', ['Nhàm chán', 'Sinh động hơn', 'Bị xấu', 'Mất nét'], 1, 'Chấm có to–nhỏ giúp tranh sinh động.'),
  ]),

  M(3, 'Nét thẳng', [
    Q('Đường nào là đường thẳng?', ['Lượn sóng', 'Kẻ bằng thước', 'Đường tròn', 'Zíc-zắc'], 1, 'Kẻ bằng thước cho ta nét thẳng.'),
    Q('Cạnh bàn, cạnh bảng là nét?', ['Cong', 'Thẳng', 'Tròn', 'Xoắn ốc'], 1, 'Các cạnh đồ dùng học tập là nét thẳng.'),
    Q('Để vẽ thân cột cờ, em dùng nét?', ['Thẳng đứng', 'Cong', 'Gãy khúc', 'Chấm rời'], 0, 'Cột cờ là một nét thẳng đứng.'),
    Q('Nét thẳng có thể vẽ bằng?', ['Thước', 'Cả bằng tay không và thước', 'Chỉ bút chì', 'Chỉ bút lông'], 1, 'Có thể vẽ tay hoặc dùng thước cho thẳng hơn.'),
  ]),

  M(4, 'Nét cong', [
    Q('Nét cong gợi cảm giác?', ['Cứng, mạnh', 'Mềm mại, uyển chuyển', 'Gãy gọn', 'Sắc nhọn'], 1, 'Nét cong mềm mại, uyển chuyển.'),
    Q('Thân con rắn được vẽ bằng nét?', ['Thẳng', 'Cong/lượn', 'Gãy khúc', 'Chấm rời'], 1, 'Thân rắn uốn lượn → nét cong.'),
    Q('Cầu vồng có dạng?', ['Đường thẳng', 'Đường cong vòng cung', 'Hình vuông', 'Hình tam giác'], 1, 'Cầu vồng cong hình vòng cung.'),
    Q('Sóng biển được gợi bằng nét?', ['Thẳng đứng', 'Lượn sóng', 'Gãy vuông', 'Chấm'], 1, 'Sóng biển dùng nét lượn sóng.'),
  ]),

  M(5, 'Nét gấp khúc', [
    Q('Nét gấp khúc (zíc-zắc) gợi cảm giác?', ['Êm ả', 'Mạnh, gấp', 'Mềm mại', 'Lặng yên'], 1, 'Nét gấp khúc gợi tia chớp, mạnh và gấp.'),
    Q('Răng cưa của lá có dạng nét?', ['Cong tròn', 'Gấp khúc nhỏ', 'Thẳng dài', 'Chấm tròn'], 1, 'Răng cưa của lá là các nét gấp khúc nhỏ.'),
    Q('Tia chớp trên trời được vẽ bằng?', ['Đường thẳng dài', 'Đường gấp khúc', 'Đường tròn', 'Chấm'], 1, 'Tia chớp là đường gấp khúc.'),
    Q('Mái nhà ngói thường có nét?', ['Hai nét thẳng nghiêng chụm đỉnh', 'Tròn', 'Lượn sóng', 'Chấm rời'], 0, 'Mái nhà ngói tạo bởi hai nét thẳng nghiêng.'),
  ]),

  M(6, 'Màu đỏ', [
    Q('Màu đỏ là màu?', ['Cơ bản', 'Pha trộn', 'Trắng đen', 'Không có'], 0, 'Đỏ là một trong 3 màu cơ bản.'),
    Q('Vật nào thường có màu đỏ?', ['Lá cây non', 'Quả cà chua chín', 'Bầu trời', 'Cỏ'], 1, 'Cà chua chín có màu đỏ.'),
    Q('Đèn giao thông đỏ nghĩa là?', ['Đi', 'Dừng lại', 'Đi chậm', 'Rẽ phải'], 1, 'Đèn đỏ — dừng lại.'),
    Q('Lá cờ Tổ quốc Việt Nam có nền?', ['Xanh', 'Đỏ', 'Vàng', 'Trắng'], 1, 'Cờ đỏ sao vàng — nền màu đỏ.'),
  ]),

  M(7, 'Màu vàng', [
    Q('Màu vàng là màu?', ['Cơ bản', 'Pha trộn', 'Trắng đen', 'Không có'], 0, 'Vàng là một trong 3 màu cơ bản.'),
    Q('Mặt trời thường tô màu?', ['Xanh', 'Vàng/cam', 'Tím', 'Đen'], 1, 'Mặt trời gợi nắng — vàng/cam.'),
    Q('Quả chuối chín có vỏ màu?', ['Đỏ', 'Vàng', 'Xanh lam', 'Tím'], 1, 'Chuối chín có vỏ vàng.'),
    Q('Ngôi sao trên cờ Tổ quốc có màu?', ['Đỏ', 'Vàng', 'Xanh', 'Trắng'], 1, 'Sao vàng nằm giữa nền đỏ.'),
  ]),

  M(8, 'Màu xanh (lam)', [
    Q('Màu xanh lam là màu?', ['Cơ bản', 'Pha trộn', 'Đen trắng', 'Không có'], 0, 'Xanh lam là 1 trong 3 màu cơ bản.'),
    Q('Bầu trời quang đãng thường có màu?', ['Đỏ', 'Xanh lam', 'Đen', 'Vàng'], 1, 'Trời ban ngày thường xanh lam.'),
    Q('Nước biển thường được vẽ màu?', ['Xanh lam', 'Đỏ', 'Vàng', 'Hồng'], 0, 'Nước biển có màu xanh lam.'),
    Q('Màu xanh lam thuộc nhóm?', ['Nóng', 'Lạnh', 'Trung tính', 'Không có'], 1, 'Xanh lam là màu lạnh.'),
  ]),

  M(9, 'Ba màu cơ bản', [
    Q('Ba màu cơ bản gồm?', ['Đỏ – Vàng – Xanh lam', 'Đỏ – Đen – Trắng', 'Hồng – Tím – Cam', 'Nâu – Xám – Lục'], 0, 'Ba màu cơ bản: đỏ, vàng, xanh lam.'),
    Q('Màu nào KHÔNG phải màu cơ bản?', ['Đỏ', 'Vàng', 'Xanh lam', 'Tím'], 3, 'Tím là màu pha, không phải màu cơ bản.'),
    Q('Từ 3 màu cơ bản, ta có thể?', ['Pha ra nhiều màu khác', 'Chỉ vẽ ba màu', 'Không pha được gì', 'Bị mờ'], 0, 'Ba màu cơ bản pha ra được nhiều màu mới.'),
    Q('Em hãy chọn nhóm CHỈ gồm màu cơ bản:', ['Đỏ – Vàng – Xanh lam', 'Đỏ – Hồng – Vàng', 'Cam – Lục – Tím', 'Đen – Trắng – Xám'], 0, 'Chỉ nhóm đầu là 3 màu cơ bản.'),
  ]),

  M(10, 'Hình vuông', [
    Q('Hình vuông có mấy cạnh?', ['3', '4', '5', '6'], 1, 'Hình vuông có 4 cạnh bằng nhau.'),
    Q('Bốn cạnh của hình vuông?', ['Khác nhau', 'Bằng nhau', 'Cong', 'Lượn sóng'], 1, 'Hình vuông có 4 cạnh bằng nhau.'),
    Q('Vật nào có dạng hình vuông?', ['Mặt khăn tay', 'Quả bóng', 'Cái nón', 'Cây bút'], 0, 'Khăn tay thường vuông.'),
    Q('Hình vuông được vẽ bằng nét?', ['Cong', 'Thẳng', 'Lượn sóng', 'Chấm'], 1, 'Cạnh hình vuông là nét thẳng.'),
  ]),

  M(11, 'Hình tròn', [
    Q('Hình tròn được vẽ bằng nét?', ['Thẳng', 'Cong khép kín', 'Gấp khúc', 'Chấm'], 1, 'Hình tròn là nét cong khép kín.'),
    Q('Vật nào có dạng hình tròn?', ['Bánh xe', 'Quyển vở', 'Cái thước', 'Cái bút'], 0, 'Bánh xe là hình tròn.'),
    Q('Mặt trời thường vẽ dạng?', ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], 1, 'Mặt trời vẽ tròn.'),
    Q('Để vẽ hình tròn em có thể dùng?', ['Compa hoặc cốc úp ngược', 'Thước thẳng', 'Kéo', 'Bút xoá'], 0, 'Compa hoặc đáy cốc giúp vẽ tròn dễ.'),
  ]),

  M(12, 'Hình tam giác', [
    Q('Hình tam giác có mấy cạnh?', ['2', '3', '4', '5'], 1, 'Tam giác có 3 cạnh.'),
    Q('Mái nhà ngói thường có dạng?', ['Tam giác', 'Tròn', 'Vuông', 'Lượn sóng'], 0, 'Mái nhà ngói thường là hình tam giác.'),
    Q('Hình tam giác được vẽ bằng?', ['3 nét thẳng nối nhau', '2 nét cong', '1 nét tròn', '4 nét thẳng'], 0, 'Tam giác do 3 nét thẳng tạo thành.'),
    Q('Cái nón lá có dạng?', ['Tam giác', 'Vuông', 'Chữ nhật', 'Lượn sóng'], 0, 'Nón lá nhìn ngang gần như tam giác.'),
  ]),

  M(13, 'Vẽ đồ vật quen thuộc – cái ô', [
    Q('Cái ô thường có phần?', ['Tán và cán', 'Chân và tay', 'Đầu và đuôi', 'Cánh và mỏ'], 0, 'Ô gồm tán ô (che) và cán ô (tay cầm).'),
    Q('Tán ô có dạng?', ['Tròn/vòng cung', 'Vuông', 'Tam giác nhọn', 'Đường thẳng'], 0, 'Tán ô là vòng cung che đầu.'),
    Q('Cán ô được vẽ bằng nét?', ['Thẳng', 'Lượn sóng', 'Gấp khúc lớn', 'Chấm'], 0, 'Cán ô là nét thẳng dài.'),
    Q('Em nên tô cái ô bằng?', ['Một màu duy nhất', 'Nhiều màu tươi vui', 'Để trắng', 'Bôi đen hết'], 1, 'Tô nhiều màu tươi vui cho đẹp.'),
  ]),

  M(14, 'Vẽ cây', [
    Q('Cây gồm các phần?', ['Thân – cành – lá', 'Đầu – mình – chân', 'Tán – cán', 'Tay – chân'], 0, 'Cây có thân, cành và lá.'),
    Q('Thân cây vẽ bằng nét?', ['Thẳng đứng', 'Lượn sóng', 'Chấm', 'Tròn'], 0, 'Thân cây thường là nét thẳng đứng.'),
    Q('Tán lá thường vẽ dạng?', ['Vòng cong', 'Vuông', 'Tam giác nhọn', 'Đường thẳng'], 0, 'Tán lá vẽ dạng vòng cong rồi tô màu xanh.'),
    Q('Lá cây thường có màu?', ['Xanh lá', 'Tím', 'Đen', 'Trắng'], 0, 'Lá cây thường màu xanh lá.'),
  ]),

  M(15, 'Vẽ ngôi nhà của em', [
    Q('Ngôi nhà đơn giản gồm?', ['Thân nhà – mái – cửa', 'Tán và cán', 'Chỉ mái', 'Chỉ cửa'], 0, 'Nhà có thân, mái và cửa.'),
    Q('Thân nhà thường vẽ dạng?', ['Hình vuông/chữ nhật', 'Hình tròn', 'Tam giác', 'Lượn sóng'], 0, 'Thân nhà thường là hình vuông hoặc chữ nhật.'),
    Q('Mái nhà thường vẽ dạng?', ['Tam giác', 'Tròn', 'Vuông', 'Chấm rời'], 0, 'Mái nhà thường là hình tam giác.'),
    Q('Cửa ra vào thường vẽ dạng?', ['Chữ nhật đứng', 'Tròn', 'Lượn sóng', 'Tam giác nhọn'], 0, 'Cửa ra vào là chữ nhật đứng.'),
  ]),

  M(16, 'Vẽ con vật – con cá', [
    Q('Con cá có phần?', ['Đầu – mình – đuôi', 'Tán – cán', 'Mái – cửa', 'Tay – chân'], 0, 'Cá có đầu, mình và đuôi.'),
    Q('Mình cá thường có dạng?', ['Bầu dục/oval', 'Vuông', 'Tam giác nhọn', 'Đường thẳng'], 0, 'Mình cá có dạng bầu dục.'),
    Q('Đuôi cá vẽ dạng?', ['Tam giác/quạt', 'Vuông cứng', 'Tròn kín', 'Đường thẳng dài'], 0, 'Đuôi cá xòe như hình tam giác.'),
    Q('Cá sống ở đâu?', ['Dưới nước', 'Trên cây', 'Trên trời', 'Trong tủ'], 0, 'Cá sống ở dưới nước.'),
  ]),

  M(17, 'Vẽ con vật – con mèo', [
    Q('Mèo có mấy chân?', ['2', '4', '6', '8'], 1, 'Mèo có 4 chân.'),
    Q('Đầu mèo có dạng?', ['Tròn', 'Vuông cứng', 'Tam giác nhọn', 'Đường thẳng'], 0, 'Đầu mèo thường vẽ dạng tròn.'),
    Q('Tai mèo có dạng?', ['Tam giác nhỏ', 'Tròn to', 'Vuông', 'Lượn sóng'], 0, 'Tai mèo là hai tam giác nhỏ.'),
    Q('Mèo kêu thế nào?', ['Meo meo', 'Gâu gâu', 'Ò ó o', 'Chiếp chiếp'], 0, 'Mèo kêu “meo meo”.'),
  ]),

  M(18, 'Trưng bày tranh cuối HK1', [
    Q('Trước khi trưng bày, em cần?', ['Kí tên/dán nhãn lên tranh', 'Vò tranh lại', 'Xé góc tranh', 'Bôi bẩn tranh'], 0, 'Kí tên/dán nhãn để biết tranh của ai.'),
    Q('Khi xem tranh của bạn, em nên?', ['Khen ngợi điểm hay', 'Chê bai bạn', 'Vẽ lên tranh bạn', 'Xé tranh'], 0, 'Khen ngợi điều bạn làm tốt.'),
    Q('Tranh được treo ở đâu cho dễ xem?', ['Trên bảng/tường lớp', 'Dưới gầm bàn', 'Trong cặp', 'Ngoài cửa sổ'], 0, 'Treo trên bảng/tường để cả lớp cùng xem.'),
    Q('Trưng bày tranh giúp em?', ['Tự tin và học hỏi từ bạn', 'Buồn ngủ', 'Mất bạn', 'Sợ vẽ'], 0, 'Trưng bày giúp em tự tin và học hỏi từ bạn.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Pha màu vui – cam', [
    Q('Đỏ + Vàng cho ra màu?', ['Cam', 'Tím', 'Lục', 'Hồng'], 0, 'Đỏ + vàng = cam.'),
    Q('Quả nào thường có màu cam?', ['Quả cam', 'Quả nho', 'Quả mận', 'Quả việt quất'], 0, 'Quả cam có màu cam.'),
    Q('Màu cam thuộc nhóm?', ['Nóng', 'Lạnh', 'Trung tính', 'Không có'], 0, 'Cam là màu nóng.'),
    Q('Để tô con cá vàng, ta dùng?', ['Cam/vàng', 'Đen', 'Xanh lam đậm', 'Tím sẫm'], 0, 'Cá vàng tô vàng/cam.'),
  ]),

  M(20, 'Pha màu vui – lục', [
    Q('Xanh lam + Vàng cho ra màu?', ['Lục (xanh lá)', 'Cam', 'Tím', 'Hồng'], 0, 'Lam + vàng = lục.'),
    Q('Lá cây thường màu?', ['Lục/xanh lá', 'Đỏ', 'Tím', 'Đen'], 0, 'Lá cây màu lục.'),
    Q('Màu lục thuộc nhóm?', ['Lạnh', 'Nóng', 'Trắng', 'Đen'], 0, 'Lục là màu lạnh.'),
    Q('Em hãy chọn vật có màu lục:', ['Quả dưa hấu (vỏ)', 'Quả cà chua', 'Quả chuối chín', 'Lửa'], 0, 'Vỏ dưa hấu có màu lục.'),
  ]),

  M(21, 'In lá cây', [
    Q('Để in lá cây, ta tô màu vào mặt nào của lá?', ['Mặt có gân nổi', 'Mặt nhẵn', 'Không cần tô', 'Cuống lá'], 0, 'Mặt có gân nổi sẽ in rõ nét.'),
    Q('Sau khi tô màu lên lá, ta?', ['Úp lên giấy và ấn nhẹ', 'Ném đi', 'Để khô rồi xé', 'Bỏ vào nước'], 0, 'Úp lá lên giấy rồi ấn nhẹ để in.'),
    Q('In lá giúp tạo ra?', ['Hình lá có gân đẹp', 'Hình tròn đặc', 'Hình vuông', 'Hình tam giác'], 0, 'In ra hình lá có gân rõ.'),
    Q('Sau khi in xong em nên?', ['Rửa tay, lau bàn', 'Bôi màu khắp lớp', 'Để bừa', 'Ăn cái lá'], 0, 'Rửa tay và lau bàn cho sạch.'),
  ]),

  M(22, 'Nghỉ Tết – tranh ngày Tết', [
    Q('Ngày Tết thường có loại hoa nào ở miền Bắc?', ['Hoa đào', 'Hoa hướng dương', 'Hoa sen', 'Hoa cải'], 0, 'Miền Bắc có hoa đào hồng dịp Tết.'),
    Q('Ở miền Nam, Tết thường có hoa?', ['Hoa mai vàng', 'Hoa đào', 'Hoa hồng', 'Hoa cúc trắng'], 0, 'Miền Nam có hoa mai vàng.'),
    Q('Màu chủ đạo của tranh Tết thường?', ['Đỏ – vàng tươi vui', 'Đen – xám buồn', 'Trắng toát', 'Tím sẫm'], 0, 'Tranh Tết thường đỏ – vàng tươi vui.'),
    Q('Vật nào hay xuất hiện trong tranh Tết?', ['Bánh chưng', 'Áo mưa', 'Máy giặt', 'Ô tô'], 0, 'Bánh chưng quen thuộc ngày Tết.'),
  ]),

  M(23, 'Xé dán giấy – hình tròn', [
    Q('Khi xé giấy, em nên?', ['Xé từ từ theo đường vẽ', 'Giật mạnh một cái', 'Cắn xé giấy', 'Nhúng nước rồi xé'], 0, 'Xé từ từ để mép đẹp.'),
    Q('Để dán giấy, em dùng?', ['Hồ/keo dán', 'Nước lã', 'Cát', 'Đất'], 0, 'Dùng hồ hoặc keo dán giấy.'),
    Q('Trước khi dán em nên?', ['Ướm thử vị trí', 'Dán bừa', 'Bôi keo khắp bàn', 'Vò giấy'], 0, 'Ướm thử trước để biết chỗ dán đẹp.'),
    Q('Sau khi xé dán em nên?', ['Lau tay sạch, dọn vụn giấy', 'Để vụn khắp lớp', 'Vứt ra cửa sổ', 'Bôi keo lên áo bạn'], 0, 'Phải dọn vụn giấy cho sạch.'),
  ]),

  M(24, 'Xé dán – con vật từ hình cơ bản', [
    Q('Để xé dán con cá, em xé hình?', ['Bầu dục (mình) + tam giác (đuôi)', 'Chỉ hình vuông', 'Chỉ hình tròn', 'Chỉ đường thẳng'], 0, 'Mình cá oval + đuôi tam giác.'),
    Q('Để xé dán mặt trời, em xé hình?', ['Tròn + nhiều tia thẳng', 'Vuông', 'Tam giác', 'Lượn sóng'], 0, 'Mặt trời: tròn + tia thẳng.'),
    Q('Để xé dán ngôi nhà, ta cần?', ['Vuông (thân) + tam giác (mái)', 'Chỉ tròn', 'Chỉ tam giác', 'Chỉ vuông'], 0, 'Thân vuông + mái tam giác.'),
    Q('Khi sắp xếp hình lên giấy, em nên?', ['Cân đối, hài hoà', 'Dồn về một góc', 'Đè chồng lên nhau hết', 'Quay ngược tất cả'], 0, 'Sắp xếp cân đối, hài hoà.'),
  ]),

  M(25, 'Nặn đất sét – quả bóng', [
    Q('Để nặn quả bóng tròn, em?', ['Vò tròn đất giữa hai lòng bàn tay', 'Bóp dẹt', 'Kéo dài như sợi dây', 'Ấn ngón tay vào'], 0, 'Vò tròn giữa hai lòng bàn tay.'),
    Q('Khi nặn, em ngồi thế nào?', ['Ngay ngắn tại bàn', 'Nằm ra bàn', 'Đứng nhảy', 'Quay lưng'], 0, 'Ngồi ngay ngắn để dễ nặn.'),
    Q('Sau khi nặn em phải?', ['Rửa tay, lau bàn', 'Ăn đất sét', 'Vứt đất khắp lớp', 'Bôi lên áo bạn'], 0, 'Rửa tay và lau bàn cho sạch.'),
    Q('Đất sét có thể tái sử dụng nếu?', ['Bảo quản trong hộp kín', 'Để khô ngoài không khí', 'Ngâm nước nhiều giờ', 'Ném ra ngoài trời'], 0, 'Đậy kín để đất không bị khô.'),
  ]),

  M(26, 'Nặn quả em thích', [
    Q('Để nặn quả táo, ta nặn?', ['Khối tròn rồi gắn cuống nhỏ', 'Khối vuông', 'Khối dài', 'Khối phẳng'], 0, 'Táo có dạng tròn, có cuống nhỏ.'),
    Q('Để nặn quả chuối, ta nặn?', ['Khối dài, cong nhẹ', 'Khối tròn đặc', 'Khối vuông', 'Khối phẳng tam giác'], 0, 'Chuối dài và cong nhẹ.'),
    Q('Màu của quả chuối chín thường?', ['Vàng', 'Đen', 'Tím', 'Xanh lam'], 0, 'Chuối chín thường vàng.'),
    Q('Sau khi nặn xong em nên?', ['Trưng bày khoe bạn', 'Vứt đi luôn', 'Ăn thử', 'Đập bẹp'], 0, 'Trưng bày cho cả lớp cùng xem.'),
  ]),

  M(27, 'Vẽ chân dung mẹ', [
    Q('Khuôn mặt thường vẽ dạng?', ['Bầu dục (oval)', 'Vuông cứng', 'Tam giác nhọn', 'Đường thẳng'], 0, 'Mặt người thường dạng bầu dục.'),
    Q('Trên mặt có những bộ phận gì?', ['Mắt – mũi – miệng – tai', 'Tán và cán', 'Mái và cửa', 'Chỉ có tóc'], 0, 'Mặt có mắt, mũi, miệng, tai.'),
    Q('Hai mắt vẽ thế nào cho cân đối?', ['Cùng kích thước, ngang nhau', 'Một to một nhỏ', 'Một trên một dưới', 'Cả hai ở má'], 0, 'Hai mắt bằng nhau, ngang hàng.'),
    Q('Tô màu tranh chân dung mẹ, em nên?', ['Tô tươi vui, dịu dàng', 'Tô đen sì', 'Để trắng hết', 'Bôi xám'], 0, 'Màu tươi vui thể hiện tình yêu mẹ.'),
  ]),

  M(28, 'Vẽ chân dung bạn em', [
    Q('Trước khi vẽ, em nên?', ['Quan sát kĩ khuôn mặt bạn', 'Nhắm mắt tưởng tượng hết', 'Hỏi bạn ăn gì', 'Xem điện thoại'], 0, 'Quan sát kĩ để vẽ giống.'),
    Q('Nếu bạn có tóc xoăn, em vẽ tóc bằng nét?', ['Lượn xoăn', 'Thẳng tắp', 'Gấp khúc nhọn', 'Chấm rời'], 0, 'Tóc xoăn vẽ bằng nét lượn xoăn.'),
    Q('Nếu bạn đeo kính, em vẽ thêm?', ['Hai hình tròn nối nhau ở mắt', 'Vẽ ô tô', 'Vẽ thêm mũ', 'Không vẽ gì'], 0, 'Kính: hai hình tròn nối nhau che hai mắt.'),
    Q('Khi vẽ xong em nên?', ['Tặng tranh cho bạn', 'Giấu đi', 'Xé tranh', 'Bôi bẩn'], 0, 'Tặng tranh cho bạn rất ý nghĩa.'),
  ]),

  M(29, 'Vẽ cảnh sân trường', [
    Q('Sân trường có thể có?', ['Cây xanh, ghế đá, cột cờ', 'Bãi biển', 'Ruộng lúa', 'Núi tuyết'], 0, 'Sân trường thường có cây, ghế đá, cột cờ.'),
    Q('Cột cờ thường có gì trên đỉnh?', ['Lá cờ', 'Quả bóng', 'Bông hoa', 'Cái nón'], 0, 'Trên đỉnh cột cờ có lá cờ.'),
    Q('Để vẽ nhiều bạn đang chơi, em nên?', ['Vẽ to – nhỏ khác nhau', 'Vẽ tất cả giống hệt', 'Chỉ vẽ một bạn', 'Vẽ chồng lên nhau hết'], 0, 'Vẽ kích thước khác nhau cho sinh động.'),
    Q('Bầu trời em tô màu?', ['Xanh lam', 'Đen', 'Tím sẫm', 'Đỏ tươi'], 0, 'Bầu trời thường xanh lam.'),
  ]),

  M(30, 'Vẽ con đường tới trường', [
    Q('Con đường có dạng?', ['Hai nét dài song song', 'Hình tròn', 'Hình vuông', 'Chấm rời'], 0, 'Đường là hai nét dài song song.'),
    Q('Hai bên đường thường có?', ['Cây xanh, nhà cửa', 'Núi lửa', 'Biển sâu', 'Tàu vũ trụ'], 0, 'Hai bên đường thường có cây và nhà.'),
    Q('Để tô đường, em dùng màu?', ['Xám/nâu nhạt', 'Tím sẫm', 'Đen kịt', 'Hồng phấn'], 0, 'Đường thường xám hoặc nâu nhạt.'),
    Q('Khi đi trên đường em phải?', ['Đi vỉa hè bên phải', 'Chạy giữa đường', 'Nhắm mắt đi', 'Vừa đi vừa đùa nghịch'], 0, 'Đi vỉa hè bên phải an toàn.'),
  ]),

  M(31, 'Trang trí khung tranh', [
    Q('Khung tranh thường có hình?', ['Chữ nhật/vuông bao quanh tranh', 'Tròn nhỏ', 'Tam giác nhọn', 'Lượn sóng'], 0, 'Khung tranh thường là chữ nhật/vuông.'),
    Q('Để khung đẹp, em dùng họa tiết?', ['Lặp lại đều', 'Lộn xộn', 'Bôi đen hết', 'Để trắng hết'], 0, 'Họa tiết lặp lại đều khiến khung đẹp.'),
    Q('Họa tiết có thể là?', ['Chấm – nét – hoa lá', 'Toán học', 'Chữ cái khó', 'Số dài'], 0, 'Họa tiết là chấm, nét, hoa lá đơn giản.'),
    Q('Khung KHÔNG nên?', ['Lấn vào hình chính', 'Đẹp đều', 'Hài hoà', 'Cân đối'], 0, 'Khung không nên che mất hình chính.'),
  ]),

  M(32, 'Trang trí đường diềm', [
    Q('Đường diềm là gì?', ['Dải họa tiết lặp lại theo hàng', 'Một hình tròn', 'Một chấm to', 'Một nét dài'], 0, 'Đường diềm là họa tiết lặp lại thành dải.'),
    Q('Họa tiết trên đường diềm thường?', ['Lặp lại đều', 'Mỗi cái khác nhau', 'Đè chồng lên', 'Lộn xộn'], 0, 'Họa tiết lặp đều nhau.'),
    Q('Đường diềm hay trang trí ở đâu?', ['Mép khăn, mép áo, mép giấy', 'Giữa giấy', 'Trên trần', 'Dưới gầm bàn'], 0, 'Đường diềm hay ở mép khăn, mép áo, mép giấy.'),
    Q('Để đường diềm đẹp, màu nên?', ['Hài hoà 2–3 màu', 'Dùng 10 màu một lúc', 'Bôi đen hết', 'Không tô'], 0, 'Hài hoà 2–3 màu cho dễ nhìn.'),
  ]),

  M(33, 'Vẽ bức tranh em yêu', [
    Q('Chủ đề tranh nên?', ['Gần gũi với em', 'Quá xa lạ', 'Không có chủ đề', 'Sao chép y nguyên'], 0, 'Vẽ điều quen thuộc, em hiểu rõ.'),
    Q('Trước khi vẽ em nên?', ['Hình dung bố cục', 'Vẽ ngay không nghĩ', 'Xé giấy ra', 'Đi chơi đã'], 0, 'Hình dung trước để bố cục tốt.'),
    Q('Khi đặt tên tranh, em chọn?', ['Tên ngắn, rõ ý', 'Tên thật dài, khó hiểu', 'Không cần tên', 'Tên của bạn'], 0, 'Tên ngắn, rõ ý.'),
    Q('Khi vẽ sai một chi tiết, em nên?', ['Xử lí khéo, biến thành chi tiết khác', 'Vò tranh vứt đi', 'Khóc', 'Đổ lỗi cho bạn'], 0, 'Có thể sáng tạo, biến cái sai thành chi tiết mới.'),
  ]),

  M(34, 'Trưng bày tác phẩm', [
    Q('Để chuẩn bị trưng bày, tranh cần?', ['Khô và phẳng', 'Còn ướt', 'Bị nhàu', 'Bị rách'], 0, 'Tranh cần khô và phẳng.'),
    Q('Khi giới thiệu tranh, em nên?', ['Nói rõ tên tranh và ý mình muốn vẽ', 'Im lặng', 'Quay đi', 'Cười to'], 0, 'Nói rõ tên và ý nghĩa cho người xem hiểu.'),
    Q('Khi nghe bạn giới thiệu tranh, em nên?', ['Chú ý lắng nghe và vỗ tay', 'Nói chuyện riêng', 'Cười nhạo', 'Bỏ ra ngoài'], 0, 'Lắng nghe là tôn trọng bạn.'),
    Q('Trưng bày giúp em?', ['Tự tin và học hỏi', 'Sợ vẽ', 'Mất bạn', 'Buồn ngủ'], 0, 'Trưng bày giúp em tự tin và học hỏi từ bạn.'),
  ]),

  M(35, 'Tổng kết năm học', [
    Q('Sau một năm học Mĩ thuật, em đã biết?', ['Nhiều nét, màu và hình cơ bản', 'Không biết gì cả', 'Chỉ biết một màu', 'Chỉ biết một hình'], 0, 'Em đã biết nhiều nét, màu, hình cơ bản.'),
    Q('Em sẽ tiếp tục?', ['Quan sát và sáng tạo nhiều hơn', 'Bỏ vẽ', 'Sợ Mĩ thuật', 'Vò hết tranh đi'], 0, 'Quan sát và sáng tạo tiếp tục cho lớp sau.'),
    Q('Đồ dùng Mĩ thuật cuối năm em nên?', ['Cất gọn, giữ cho năm sau', 'Vứt đi hết', 'Cho mượn rồi quên', 'Đập bẹp'], 0, 'Cất gọn để dùng tiếp năm sau.'),
    Q('Điều quan trọng nhất khi vẽ là?', ['Cảm xúc và sáng tạo của em', 'Phải giống y người khác', 'Phải đẹp nhất lớp', 'Vẽ thật nhanh'], 0, 'Cảm xúc và sáng tạo là quan trọng nhất.'),
  ]),
];

export const P1MT_SCENARIOS = indexBy(P1MT_WEEKS);
