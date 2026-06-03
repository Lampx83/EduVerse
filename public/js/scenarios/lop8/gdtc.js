// ============================================================
// Lớp 8 · GDTC (Giáo dục thể chất) — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Điền kinh, thể dục, các môn thể thao theo CTGD 2018.
// ID prefix: "S8GDTC-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S8GDTC', 'gdtc', n, title, qs, opts);

export const S8GDTC_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Chạy ngắn — Kỹ thuật chạy 60m, 100m', [
    Q('Chạy ngắn gồm 4 giai đoạn?', ['Xuất phát → tăng tốc sau xuất phát → giữa quãng → về đích', 'Đứng → chạy → nhảy → về', 'Chỉ chạy thẳng', 'Khởi động → chạy → về đích → nghỉ'], 0, '4 giai đoạn chạy ngắn: xuất phát, sau xuất phát, giữa quãng, về đích.'),
    Q('Xuất phát thấp trong chạy ngắn?', ['Cúi đầu', 'Dùng bàn đạp, tư thế 3 điểm tựa', 'Đứng thẳng', 'Bật nhảy mạnh tại chỗ rồi chạy'], 1, 'Xuất phát thấp: dùng bàn đạp, 2 chân + 2 tay tạo 3 điểm tựa.'),
    Q('Khẩu lệnh xuất phát?', ['"Vào chỗ" → "Sẵn sàng" → tiếng súng', 'Tự bắt đầu', 'Chạy ngay', '1-2-3'], 0, '3 khẩu lệnh chuẩn theo trọng tài quốc tế.'),
    Q('Ở "Sẵn sàng", tư thế?', ['Nâng hông cao hơn vai một chút, chuyển trọng tâm về trước', 'Ngồi xuống', 'Đứng lên', 'Hai tay duỗi thẳng, hông ngang vai'], 0, 'Sẵn sàng: nâng hông, đầu thấp, trọng tâm dồn về tay — chờ tín hiệu chạy.'),
    Q('Mục đích về đích?', ['Bật nhảy qua vạch đích để rút ngắn thời gian', 'Cúi ngực để cắt đường đích', 'Tăng tốc và đột ngột chậm', 'Dừng đột ngột'], 1, 'Khi gần đích, cúi ngực về phía trước để cắt vạch sớm nhất.'),
  ]),

  M(2, 'Chạy 200m — Kỹ thuật chạy đường vòng', [
    Q('Chạy 200m khác 100m ở?', ['Không có đường vòng', 'Cùng kỹ thuật', 'Dài hơn 1 chút', 'Có đoạn đường vòng (cua)'], 3, '200m chạy hết 1 vòng cua sân điền kinh chuẩn.'),
    Q('Khi chạy đường vòng, kỹ thuật?', ['Nghiêng người vào trong, tay trong vung ngắn hơn tay ngoài', 'Đứng thẳng', 'Chạy chậm', 'Nghiêng ra ngoài'], 0, 'Nghiêng người vào tâm sân, vai trái thấp hơn vai phải (vòng trái).'),
    Q('Xuất phát 200m từ vị trí?', ['Cùng 1 điểm cong đầu đường vòng', 'So le để bù chiều dài đường vòng', 'Cùng vạch xuất phát', 'Khác nhau ngẫu nhiên'], 1, 'Xuất phát so le để các làn có cùng độ dài 200m.'),
    Q('Chiến thuật chạy 200m?', ['Chạy hết sức từ đầu', 'Chạy đều', 'Tăng tốc đường thẳng → giữ tốc độ vòng cua → bứt tốc 50m cuối', 'Chậm lúc cuối'], 2, '200m cần phân phối sức: tăng tốc đầu, giữ qua cua, bứt cuối.'),
    Q('Lỗi thường gặp khi chạy vòng?', ['Đứng thẳng (không nghiêng) → mất tốc độ', 'Tay vung đều', 'Tốc độ ổn', 'Nghiêng quá nhiều'], 0, 'Không nghiêng người = lực ly tâm đẩy ra ngoài, mất đà.'),
  ]),

  M(3, 'Chạy bền — Phương pháp Cooper', [
    Q('Chạy bền là?', ['Đi bộ nhanh xen kẽ chạy nhẹ', 'Chạy nhanh ngắn', 'Chạy lúc nghỉ', 'Chạy với cường độ vừa phải, thời gian dài'], 3, 'Chạy bền = chạy dài (≥1500m), cường độ vừa phải để rèn sức bền.'),
    Q('Test Cooper là?', ['Chạy 1km', 'Chạy hết sức trong 12 phút, đo quãng đường', 'Đi bộ 5km', 'Chạy 100m'], 1, 'Test Cooper (1968): chạy/đi 12 phút, đo quãng đường để đánh giá VO2max.'),
    Q('Nguyên tắc chạy bền?', ['Nghỉ liên tục', 'Chạy hết sức ngay', 'Phân phối sức đều, hít thở nhịp nhàng', 'Chạy nhanh chậm thất thường'], 2, 'Chạy bền cần phân phối đều, hít thở theo nhịp (vd: 3 bước hít, 3 bước thở).'),
    Q('Hít thở khi chạy bền?', ['Chỉ thở miệng', 'Chỉ hít mũi', 'Nín thở', 'Hít bằng mũi, thở bằng miệng, nhịp đều'], 3, 'Hít bằng mũi (lọc), thở bằng miệng để thoát nhiệt và CO2.'),
    Q('Lợi ích chạy bền?', ['Không có lợi', 'Mệt mỏi', 'Tăng sức bền tim phổi, đốt mỡ, cải thiện sức khoẻ', 'Chỉ giảm cân'], 2, 'Chạy bền cải thiện toàn diện hệ tim mạch, hô hấp, đốt mỡ, tinh thần.'),
  ]),

  M(4, 'Bài thể dục liên hoàn nâng cao', [
    Q('Bài thể dục liên hoàn giúp?', ['Không có tác dụng', 'Phát triển các nhóm cơ và phối hợp toàn thân', 'Giải trí', 'Chỉ phát triển 1 nhóm cơ'], 1, 'Thể dục liên hoàn = chuỗi động tác phối hợp, phát triển toàn diện.'),
    Q('Trình tự thực hiện bài liên hoàn?', ['Thực hiện theo thứ tự ngẫu nhiên do nhóm chọn', 'Bài chính ngay', 'Thả lỏng trước', 'Khởi động → bài chính → thả lỏng'], 3, 'Luôn khởi động trước, làm bài chính, thả lỏng sau.'),
    Q('Mục đích khởi động?', ['Giảm sức', 'Không cần', 'Tăng nhiệt cơ thể, chuẩn bị hệ vận động, tránh chấn thương', 'Mất thời gian'], 2, 'Khởi động làm ấm cơ, tăng tuần hoàn, giảm nguy cơ chấn thương.'),
    Q('Thả lỏng sau tập?', ['Giảm nhịp tim từ từ, kéo giãn cơ, tránh đau cơ', 'Dừng đột ngột', 'Uống nước đá', 'Ngồi xuống ngay'], 0, 'Thả lỏng dần giúp cơ thể hồi phục, giảm đau nhức.'),
    Q('Phối hợp nhịp với động tác?', ['Đếm 1-2-3-4-5-6-7-8 đồng bộ', 'Nhanh nhất có thể', 'Chậm nhất', 'Đếm theo nhịp tim của mỗi cá nhân'], 0, 'Đếm nhịp 8 chuẩn đảm bảo đồng bộ trong nhóm và đúng kỹ thuật.'),
  ]),

  M(5, 'Nhảy cao — Kỹ thuật nằm nghiêng', [
    Q('4 giai đoạn nhảy cao?', ['Khởi động → nhảy', 'Chạy đà → giậm nhảy → bay qua xà → tiếp đất', 'Chạy → nhảy → nằm', 'Đứng → nhảy → đáp'], 1, '4 giai đoạn: chạy đà, giậm nhảy, bay qua xà, tiếp đất.'),
    Q('Kiểu nằm nghiêng (lưng qua xà)?', ['Quay đầu qua', 'Thân nằm song song xà, vắt qua, lưng xuống trước', 'Ngồi qua', 'Đứng qua'], 1, 'Kiểu nằm nghiêng: thân nằm song song xà, vắt qua, lưng/hông xuống đệm.'),
    Q('Chân giậm nhảy là?', ['Chân thuận khi viết hoặc cầm bút', 'Chân yếu', 'Chân khoẻ hơn, đạp đất tạo lực bay', 'Cả 2 chân'], 2, 'Chân giậm = chân khoẻ hơn, đạp đất mạnh để tạo lực thẳng đứng.'),
    Q('Chiều dài chạy đà?', ['3 bước', '5 bước, vuông góc 90° với xà', '15 bước', 'Khoảng 7–9 bước, góc 30–40° với xà'], 3, 'Chạy đà 7–9 bước, góc 30–40° để vào xà đúng kỹ thuật.'),
    Q('Tiếp đất an toàn?', ['Bụng xuống', 'Chân thẳng', 'Đầu xuống', 'Lưng hoặc hông xuống đệm dày'], 3, 'Tiếp đệm bằng lưng/hông (vùng cơ lớn), không bao giờ đầu hoặc chân thẳng (chấn thương).'),
  ]),

  M(6, 'Nhảy xa — Kiểu ưỡn thân', [
    Q('Kỹ thuật nhảy xa kiểu ưỡn thân?', ['Ngồi xổm', 'Cúi gập', 'Đứng thẳng', 'Bay xa với thân ưỡn cong sau, sau đó co lại trước tiếp đất'], 3, 'Kiểu ưỡn thân: ở giai đoạn bay, thân ưỡn cong, sau co lại đẩy chân ra xa.'),
    Q('Giai đoạn nhảy xa?', ['3 bước → nhảy', 'Chạy đà → giậm nhảy → bay trên không → tiếp đất', 'Đi → nhảy', 'Đứng → nhảy'], 1, '4 giai đoạn nhảy xa.'),
    Q('Chạy đà nhảy xa?', ['3 bước', '50 bước', '3–5 bước, chạy chậm rồi nhảy', '15–20 bước, tăng dần tốc độ'], 3, 'Đà 15–20 bước, tốc độ cao dần đạt cực đại ở vạch giậm nhảy.'),
    Q('Tiếp đất nhảy xa đo từ?', ['Đến đầu', 'Vạch giậm nhảy đến vết tiếp đất gần nhất', 'Đến vết xa nhất', 'Đến vai'], 1, 'Đo từ vạch giậm đến điểm tiếp đất GẦN NHẤT (gót, mông…).'),
    Q('Lỗi phổ biến nhảy xa?', ['Tay vung', 'Bước cuối ngắn, giậm sai chân, ngồi bệt', 'Chân vuông góc', 'Bay xa'], 1, 'Lỗi thường gặp: bước cuối ngắn (mất đà), giậm sai chân, tiếp đất ngồi bệt mông sớm.'),
  ]),

  M(7, 'Đẩy tạ — Kỹ thuật cơ bản', [
    Q('Đẩy tạ là môn?', ['Thể thao dưới nước', 'Môn đối kháng cá nhân', 'Môn bóng đồng đội', 'Điền kinh ném đẩy'], 3, 'Đẩy tạ thuộc nhóm môn ném đẩy của điền kinh.'),
    Q('Khối lượng tạ HS nữ THCS?', ['7,26 kg', '~3 kg', '1 kg', '10 kg'], 1, 'Tạ HS nữ THCS khoảng 3 kg; nam ~4 kg (tuỳ cấp học).'),
    Q('Vị trí cầm tạ?', ['Trên cổ tay/ngón tay, sát cằm', 'Trong lòng bàn tay', 'Sau lưng', 'Trên đầu'], 0, 'Cầm tạ trên các đốt ngón tay (không lòng bàn tay), giữ sát cằm.'),
    Q('Kỹ thuật đẩy tạ?', ['Lùi vai → xoay người → đẩy tay thẳng theo hướng tạ bay', 'Thả từ trên cao', 'Hất tay', 'Ném như bóng'], 0, 'Đẩy (push) chứ không ném: lực xuất phát từ chân-eo-vai-tay, đẩy tạ ra.'),
    Q('An toàn khi đẩy tạ?', ['Đẩy tự do', 'Đẩy về sau', 'Khu vực phía trước phải trống, đứng đúng vạch', 'Có người đứng phía trước'], 2, 'Tạ rất nặng — khu vực rơi phải hoàn toàn trống, đảm bảo an toàn người xung quanh.'),
  ]),

  M(8, 'Đá cầu — Đá tâng và đỡ cầu nhóm', [
    Q('Đá cầu là môn?', ['Bóng đá', 'Cầu lông', 'Bóng chuyền', 'Truyền thống VN, đá cầu lông gà bằng chân'], 3, 'Đá cầu = môn truyền thống VN, dùng chân (chủ yếu) tâng/đỡ cầu lông gà.'),
    Q('Đá tâng cơ bản dùng?', ['Đầu gối', 'Mu bàn chân, đỡ cầu lên cao', 'Gót chân', 'Mũi chân'], 1, 'Tâng cầu chủ yếu bằng mu bàn chân (cờ-rép-đờ-pi-ê).'),
    Q('Đá cầu nhóm chuyền cho nhau cần?', ['Tâng tại chỗ', 'Đỡ cao, đẩy lực vừa phải đến đồng đội', 'Đá ra xa', 'Đá mạnh'], 1, 'Chuyền nhóm: tâng cầu lên cao + đẩy nhẹ sang đồng đội với lực vừa phải.'),
    Q('Tư thế chuẩn bị đá cầu?', ['Đứng thẳng', 'Ngồi xổm', 'Trùng gối nhẹ, mắt theo cầu, trọng tâm thấp', 'Khom lưng'], 2, 'Tư thế "sẵn sàng": gối hơi trùng, trọng tâm thấp, sẵn sàng di chuyển.'),
    Q('Lợi ích đá cầu?', ['Chỉ rèn cơ chân, ít tác dụng tổng hợp', 'Phát triển khéo léo, phản xạ, phối hợp nhóm', 'Mất thời gian', 'Chỉ rèn sức mạnh'], 1, 'Đá cầu rèn khéo léo, phản xạ, phối hợp; là môn truyền thống nên cũng giữ gìn văn hoá.'),
  ]),

  M(9, 'Bóng đá — Kỹ thuật chuyền bóng', [
    Q('Chuyền bóng ngắn dùng?', ['Mũi chân', 'Lòng trong bàn chân', 'Đầu gối', 'Gót chân'], 1, 'Chuyền ngắn (5–15m) chủ yếu bằng lòng trong bàn chân, độ chính xác cao.'),
    Q('Chuyền bóng dài dùng?', ['Lòng trong', 'Lòng ngoài bàn chân', 'Mu bàn chân', 'Đầu gối'], 2, 'Chuyền dài/sút xa dùng mu bàn chân để tạo lực lớn.'),
    Q('Trước khi chuyền, cần?', ['Quan sát đồng đội và đối phương', 'Chuyền tự do', 'Hỏi trọng tài', 'Nhắm mắt'], 0, 'Bóng đá hiện đại: quan sát trước khi nhận bóng để chuyền ngay với phương án tốt.'),
    Q('Chiến thuật chuyền cơ bản?', ['Tự đi bóng mãi', 'Chỉ chuyền dài', 'Đứng yên', 'Chuyền-di chuyển không bóng (give and go)'], 3, 'Pass-and-move (chuyền và di chuyển) là nguyên tắc cơ bản của bóng đá.'),
    Q('Mục đích chuyền bóng?', ['Thể hiện cá nhân', 'Đưa bóng đến đồng đội an toàn, tạo cơ hội tấn công', 'Ăn thua đủ với đối phương', 'Đá đi cho khỏi mất bóng'], 1, 'Chuyền có mục đích: giữ bóng và phát triển tấn công.'),
  ]),

  M(10, 'Bóng đá — Chiến thuật cơ bản và sơ đồ', [
    Q('Sơ đồ phổ biến trong bóng đá 7 người HS?', ['1-3-3 hoặc 1-2-3-1', '1-11-0', '2-2-2-3', '0-0-0'], 0, 'Bóng đá 7 người thường chơi 1-3-3 hoặc 1-2-3-1 (thủ môn không tính vào số).'),
    Q('Vai trò hậu vệ?', ['Ghi bàn', 'Đỡ bóng', 'Thủ môn', 'Phòng ngự, cản phá tấn công đối phương'], 3, 'Hậu vệ chuyên phòng ngự, ngăn đối phương tiếp cận khung thành.'),
    Q('Tiền đạo chính có nhiệm vụ?', ['Ghi bàn', 'Phát bóng', 'Phòng ngự', 'Đỡ phạt'], 0, 'Tiền đạo là mũi nhọn tấn công, có nhiệm vụ chính là ghi bàn.'),
    Q('Phòng ngự nhóm bằng cách?', ['Không kèm', 'Để 1 người', 'Tự phòng ngự', 'Kèm người + che chắn lẫn nhau'], 3, 'Phòng ngự nhóm: phối hợp kèm người + che chắn (cover) cho đồng đội.'),
    Q('Khi mất bóng nên?', ['Pressing ngay để giành lại', 'Phàn nàn', 'Đứng yên', 'Bỏ về sân nhà luôn'], 0, 'Pressing/Counter-press ngay sau khi mất bóng là chiến thuật phổ biến hiện đại.'),
  ]),

  M(11, 'Bóng rổ — Kỹ thuật chuyền 2 tay trước ngực', [
    Q('Chuyền 2 tay trước ngực?', ['Cầm bóng 2 bên, đẩy thẳng ra trước', 'Lăn bóng', 'Đẩy bóng bằng 1 tay qua đầu', 'Ném 1 tay'], 0, 'Chest pass: cầm bóng 2 bên ngực, đẩy thẳng đến đồng đội.'),
    Q('Tư thế cầm bóng?', ['Ngón cái xuống', 'Cả lòng bàn tay áp', 'Cầm như quả trứng', 'Ngón tay xoè ôm bóng, ngón cái hướng lên'], 3, 'Cầm bóng bằng ngón tay (không lòng bàn tay), ngón cái lên trên, ôm ngang bóng.'),
    Q('Bước chân khi chuyền?', ['Lùi lại', 'Bước 1 chân về trước theo lực chuyền', 'Đứng yên', 'Bật nhảy 2 chân khi chuyền'], 1, 'Bước về trước giúp tăng lực và truyền động lượng theo hướng chuyền.'),
    Q('Sau khi chuyền, tay?', ['Duỗi thẳng, lòng bàn tay hướng ra', 'Co lại', 'Buông xuống', 'Đan chéo trước ngực để giữ thăng bằng'], 0, 'Tay duỗi thẳng, lòng bàn tay hướng ra ngoài (follow-through).'),
    Q('Khi nào không nên chuyền trước ngực?', ['Khi chạy chậm', 'Khi có hậu vệ chắn cao giữa 2 người', 'Khi đồng đội ở gần', 'Khi không bị kèm'], 1, 'Chest pass bay thẳng — dễ bị chặn nếu có hậu vệ cao chen giữa. Khi đó dùng bounce pass.'),
  ]),

  M(12, 'Bóng rổ — Kỹ thuật ném rổ', [
    Q('Ném rổ cơ bản dùng tay?', ['2 tay đẩy mạnh', 'Ném dưới chân', '1 tay (tay thuận) ném, tay kia đỡ', 'Ném từ sau lưng'], 2, 'Set shot/jump shot dùng 1 tay thuận ném, tay kia chỉ đỡ phụ.'),
    Q('Tư thế chân?', ['Cùng vạch', 'Chân thuận sau', 'Chân thuận lên trước, gối hơi trùng', 'Nhảy 1 chân'], 2, 'Chân thuận lên trước (BEEF: Balance), gối trùng để bật.'),
    Q('Điểm ngắm khi ném?', ['Mép trước vành rổ', 'Tâm vòng rổ nhìn từ trên xuống', 'Mép sau vành', 'Trần nhà'], 0, 'Ngắm mép trước vành — bóng bay theo cung parabol vào trong rổ.'),
    Q('Quy tắc BEEF trong ném rổ?', ['B-East-E-Foot', 'Block, Eye, Energy, Focus', 'Body, Elbow, Eyes, Foot', 'Balance, Eyes, Elbow, Follow-through'], 3, 'BEEF: Balance (cân bằng), Eyes (mắt nhìn rổ), Elbow (khuỷu thẳng), Follow-through (theo tay).'),
    Q('Sau khi ném, cổ tay?', ['Duỗi thẳng, lòng bàn tay úp xuống', 'Gập xuống (gooseneck), giữ tư thế đến khi bóng vào', 'Buông ngay', 'Cứng nguyên'], 1, 'Follow-through: cổ tay gập tự nhiên, giữ "tư thế ngỗng" cho đến khi bóng tiếp đích.'),
  ]),

  M(13, 'Bóng chuyền — Kỹ thuật chuyền cao 2 tay', [
    Q('Chuyền cao 2 tay (bunda) dùng để?', ['Chặn bóng', 'Đập bóng', 'Đỡ bóng cao, chuyền cho đồng đội tấn công', 'Phát bóng'], 2, 'Chuyền cao 2 tay (overhead pass) thường dùng làm bóng 2 cho chủ công.'),
    Q('Vị trí tay đỡ bóng?', ['2 tay trước bụng', '2 tay sau lưng', '2 tay tạo hình tam giác trên trán, ngón hướng lên', '1 tay'], 2, 'Tạo "tam giác" giữa 2 ngón cái và 2 ngón trỏ, đỡ bóng phía trên trán.'),
    Q('Khi đỡ bóng, lực truyền từ?', ['Chỉ cổ tay', 'Chỉ lòng bàn tay', 'Chân-eo-vai-cánh tay-ngón tay', 'Chỉ vai'], 2, 'Chuyền hiệu quả: lực bắt đầu từ chân, truyền qua eo, vai đến ngón tay.'),
    Q('Đỡ bóng thấp dùng?', ['Đệm 2 tay (forearm pass / bump)', 'Đập bóng (spike) 1 tay qua đầu', 'Chuyền cao 2 tay', 'Chắn lưới (block) 2 tay trên cao'], 0, 'Bóng thấp: đệm 2 tay (gập ngực, 2 cẳng tay khép sát) — gọi là "bump".'),
    Q('Lỗi thường gặp khi chuyền cao?', ['Bóng đi đúng', 'Bóng đi xa', 'Đỡ bằng ngón tay', 'Đỡ bằng lòng bàn tay (vi phạm), bóng dừng lại'], 3, 'Đỡ bằng lòng bàn tay = "held ball" — phạm lỗi mất điểm.'),
  ]),

  M(14, 'Bóng chuyền — Phát bóng và đập bóng', [
    Q('Phát bóng thấp tay dùng cho?', ['Vận động viên chuyên nghiệp', 'Người mới tập', 'Chỉ nam', 'Chỉ nữ'], 1, 'Phát thấp tay dễ thực hiện, phù hợp người mới.'),
    Q('Phát bóng cao tay (jump serve) phù hợp?', ['Trẻ em', 'Người mới', 'Tất cả', 'VĐV nâng cao, lực mạnh hơn'], 3, 'Phát cao tay/nhảy phát đòi hỏi kỹ thuật và lực, phù hợp người đã tập lâu.'),
    Q('Đập bóng (smash/spike) gồm?', ['Chạy đà → giậm nhảy → đập bóng → tiếp đất', 'Giậm nhảy → chạy đà → đập bóng → tiếp đất', 'Ngồi đập', 'Đứng đập'], 0, '4 giai đoạn: chạy đà, giậm nhảy, ra tay đập, tiếp đất.'),
    Q('Khi đập bóng, tay đập?', ['Vỗ nhẹ', 'Vung mạnh, gập cổ tay tạo lực và quỹ đạo xuống', 'Hất ngược', 'Đẩy thẳng'], 1, 'Đập: vung tay nhanh, gập cổ tay (snap) tạo bóng đi nhanh và cắm xuống.'),
    Q('Vị trí đứng phòng thủ khi đối phương đập?', ['Chạy ra', 'Phía sau, gối thấp, tay sẵn sàng đệm', 'Quay lưng', 'Đứng thẳng'], 1, 'Phòng thủ cần tư thế thấp, sẵn sàng đỡ bóng đi nhanh.'),
  ]),

  M(15, 'Võ thuật cơ bản — Bài quyền số 1', [
    Q('Võ truyền thống VN gồm?', ['Vovinam, Bình Định, Nhất Nam…', 'Karate', 'Chỉ Vovinam', 'Taekwondo'], 0, 'VN có nhiều môn võ truyền thống: Vovinam-Việt Võ Đạo, võ cổ truyền Bình Định, Nhất Nam…'),
    Q('Bài quyền là?', ['Chuỗi động tác tấn pháp + đòn đánh được biên soạn để luyện tập', 'Trò chơi', 'Khởi động', 'Đối kháng'], 0, 'Bài quyền (hình thức) = chuỗi động tác chuẩn hoá, rèn kỹ thuật + sức bền.'),
    Q('Tấn (đứng) cơ bản trong võ?', ['Quỳ 1 gối, gối còn lại nâng cao', 'Đứng thẳng', 'Đinh tấn, trung bình tấn, hư tấn…', 'Ngồi xếp bằng giữ trọng tâm thấp'], 2, 'Tấn = các tư thế đứng nền tảng, giữ ổn định và truyền lực.'),
    Q('Đinh tấn?', ['Chân trước trùng, chân sau thẳng — tư thế tấn công', 'Trùng cả 2 gối, trọng tâm dồn đều', 'Đứng thẳng 2 chân', 'Chân trước thẳng, chân sau trùng'], 0, 'Đinh tấn: 1 chân trước trùng gối, chân sau thẳng — chuẩn bị đấm/đá.'),
    Q('Tinh thần học võ?', ['Thể hiện', 'Đánh nhau', 'Bắt nạt', 'Rèn thể chất + nhân cách, không lạm dụng'], 3, 'Học võ để rèn thân thể và đạo đức, tự vệ khi cần, không dùng vào việc xấu.'),
  ]),

  M(16, 'Thể dục dụng cụ — Xà đơn, lộn nhào cơ bản', [
    Q('Xà đơn rèn?', ['Cơ bụng đơn thuần', 'Không rèn', 'Cơ chân', 'Cơ tay, vai, lưng'], 3, 'Xà đơn (pull-up, treo người) rèn các nhóm cơ tay, vai, lưng.'),
    Q('Lộn nhào cơ bản gồm?', ['Lộn nhào trước, lộn nhào sau', 'Lộn ngang', 'Chỉ sau', 'Chỉ trước'], 0, 'Bài cơ bản: lộn nhào trước (forward roll) và lộn nhào sau (backward roll).'),
    Q('Khi lộn nhào trước, cần?', ['Lưng thẳng', 'Đầu thẳng', 'Cằm áp ngực, lưng cong, đẩy chân', 'Đẩy tay ngược'], 2, 'Cằm áp ngực (bảo vệ cổ), lưng cong tròn, đẩy chân để lăn về trước.'),
    Q('An toàn khi tập thể dục dụng cụ?', ['Sàn cứng', 'Tập tự do', 'Không cần hỗ trợ', 'Có thảm đệm, có người hỗ trợ, khởi động kỹ'], 3, 'TDDC cần thảm dày, người hỗ trợ (spotter), khởi động kỹ vì rủi ro chấn thương cổ-lưng cao.'),
    Q('Lỗi nguy hiểm khi lộn nhào?', ['Đầu/cổ đỡ trọng lượng (không gập cằm)', 'Chân co', 'Tay đỡ', 'Lăn đều'], 0, 'Không gập cằm = đầu chịu lực = chấn thương cổ rất nguy hiểm.'),
  ]),

  M(17, 'Trò chơi vận động và tổ chức thi đấu', [
    Q('Trò chơi vận động rèn?', ['Phản xạ, phối hợp, tinh thần đồng đội', 'Không rèn gì', 'Chỉ tốc độ', 'Chỉ sức mạnh'], 0, 'Trò chơi vận động (kéo co, cướp cờ, mèo đuổi chuột…) rèn nhiều tố chất.'),
    Q('Tổ chức 1 giải thi đấu cần?', ['Không cần luật', 'Chỉ chơi', 'Luật, trọng tài, lịch trình, an toàn', 'Chỉ cần đăng ký đội và sân thi đấu'], 2, 'Giải đấu cần luật rõ, trọng tài, lịch (vòng bảng/loại trực tiếp), đảm bảo an toàn.'),
    Q('Tinh thần fair-play?', ['Chửi đối thủ', 'Thắng bằng mọi giá', 'Gian lận', 'Trung thực, tôn trọng đối thủ và trọng tài'], 3, 'Fair-play = trung thực, tôn trọng đối thủ-trọng tài-luật chơi, chấp nhận thắng-thua.'),
    Q('Khi thua, thái độ đúng?', ['Đổ lỗi', 'Bỏ cuộc', 'Cãi trọng tài', 'Học hỏi từ trận đấu, không nản'], 3, 'Thể thao: thua là bài học. Phân tích để tiến bộ, không đổ lỗi.'),
    Q('Khi thắng?', ['Không bắt tay', 'Khoe khoang', 'Khiêm tốn, chúc mừng đối thủ', 'Chế giễu'], 2, 'Thắng cũng cần khiêm tốn và tôn trọng đối thủ — fair-play.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Test Cooper đo?', ['1km', 'Quãng đường chạy/đi trong 12 phút', '12km', '100m'], 1, 'Test Cooper 12 phút.'),
    Q('Xuất phát thấp dùng?', ['Bàn đạp, tư thế 3 điểm tựa', 'Ngồi xổm', 'Nằm sấp, 2 tay chống đất', 'Đứng thẳng'], 0, 'Chạy ngắn.'),
    Q('Nhảy cao kiểu nằm nghiêng tiếp đất?', ['Lưng/hông', 'Bằng 2 tay chống nệm', 'Bằng vai và gáy', 'Chân thẳng'], 0, 'An toàn.'),
    Q('Đẩy tạ HS nữ khoảng?', ['3 kg', '1 kg', '7.26 kg', '10 kg'], 0, 'Tạ HS THCS.'),
    Q('Chuyền bóng đá ngắn dùng?', ['Lòng ngoài bàn chân', 'Mu chân', 'Lòng trong bàn chân', 'Đầu gối'], 2, 'Chính xác cao.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Chạy bền nâng cao — Phân phối sức trong cự ly 1500m', [
    Q('Cự ly 1500m thuộc?', ['Marathon', 'Chạy bền trung bình', 'Chạy ngắn', 'Chạy việt dã'], 1, '1500m là cự ly bền trung bình trong điền kinh.'),
    Q('Phân phối sức 1500m?', ['Nhanh chậm thất thường', 'Hết sức từ đầu', 'Tốc độ đều, bứt cuối 200–300m', 'Chậm hết'], 2, 'Chiến thuật phổ biến: giữ tốc độ đều, dành sức bứt 200–300m cuối.'),
    Q('Hít thở khi chạy 1500m?', ['Nín thở', 'Thở nhanh nông', 'Sâu, đều, theo nhịp chân', 'Thở qua mũi đóng miệng'], 2, 'Hít thở sâu, đều, theo nhịp bước (vd 2-2 hoặc 3-3).'),
    Q('Khi đuối sức?', ['Giảm tốc nhưng không dừng, giữ nhịp', 'Tăng tốc đột ngột để vượt qua mệt', 'Bỏ cuộc', 'Dừng nghỉ'], 0, 'Đuối sức: giảm tốc, giữ nhịp thở, dần hồi phục rồi tăng lại.'),
    Q('Sau khi về đích, nên?', ['Uống nước đá', 'Ngừng đột ngột', 'Ngồi xuống ngay', 'Đi bộ thả lỏng, hít thở sâu'], 3, 'Đi bộ thả lỏng 5–10 phút giúp tim trở về nhịp bình thường.'),
  ]),

  M(20, 'Nhảy dây — Kỹ thuật và sức bền', [
    Q('Nhảy dây rèn?', ['Không rèn gì', 'Sức bền, sự khéo léo, phối hợp tay-chân', 'Chỉ tốc độ', 'Chỉ sức mạnh'], 1, 'Nhảy dây rèn nhiều tố chất, tim phổi tốt + khéo léo + phối hợp.'),
    Q('Tư thế chuẩn bị?', ['Dây trước mặt', 'Đứng trên dây', 'Tay buông', 'Tay nắm cán dây, dây vắt sau, chân đứng giữa dây'], 3, 'Cầm 2 cán dây, dây vắt sau gót chân, sẵn sàng quay.'),
    Q('Khi nhảy?', ['Nhảy cao', 'Nhảy nhẹ trên đầu ngón chân, cổ tay xoay dây', 'Đáp gót mạnh', 'Cả lòng bàn chân'], 1, 'Nhảy nhẹ trên đầu ngón chân (forefoot), cổ tay xoay dây.'),
    Q('Số lần nhảy dây 1 phút cơ bản?', ['500', 'HS THCS ~80–120 lần/phút', '1000', '10'], 1, 'HS THCS đạt ~80–120 lần/phút (nhảy đơn) là tốt.'),
    Q('Lỗi thường gặp?', ['Nhảy quá cao, cổ tay không xoay đủ', 'Tốc độ ổn', 'Tay vung đều', 'Nhảy thấp'], 0, 'Nhảy cao tốn sức; cổ tay không xoay đủ làm dây không qua chân.'),
  ]),

  M(21, 'Thể dục nhịp điệu (aerobic) — Bài đơn giản', [
    Q('Aerobic là?', ['Tập sức nặng', 'Bài tĩnh', 'Bài tập có nhịp điệu, kéo dài, dùng nhiều oxy', 'Bài yoga'], 2, 'Aerobic = tập có oxy (chạy, đạp xe, nhảy nhịp điệu), rèn tim phổi.'),
    Q('Cường độ aerobic phù hợp?', ['Tăng dần đến hết sức tối đa', 'Cực mạnh', 'Cực nhẹ', 'Vừa phải, nói chuyện được nhưng không thuộc lòng'], 3, 'Cường độ vừa: "talk test" — vẫn nói được nhưng không hát/đọc thuộc lòng.'),
    Q('Thời gian aerobic mỗi buổi?', ['2 phút', '5 phút', '≥20–30 phút', '5 giờ'], 2, 'Để có hiệu quả tim phổi: ≥20–30 phút/buổi, 3–5 buổi/tuần.'),
    Q('Bài aerobic gồm?', ['Hồi phục trước', 'Khởi động → bài chính → hồi phục', 'Bài chính ngay', 'Chỉ cần khởi động và bài chính, bỏ hồi phục'], 1, '3 phần: warmup + main + cooldown.'),
    Q('Lợi ích aerobic?', ['Chỉ giảm cân', 'Khoẻ tim phổi, đốt mỡ, giảm stress', 'Không có lợi', 'Chỉ tăng cơ bắp lớn ở chân'], 1, 'Aerobic là loại tập tốt nhất cho tim mạch, tinh thần.'),
  ]),

  M(22, 'Bóng đá — Sút bóng và đối kháng nhóm', [
    Q('Sút bóng mu trong dùng để?', ['Sút bổng', 'Sút có độ cong (cong lưỡi liềm)', 'Sút thẳng', 'Sút yếu'], 1, 'Sút mu trong (inside curl) tạo bóng đi cong (kiểu Bend-it-like-Beckham).'),
    Q('Sút mu giữa?', ['Sút mạnh, bay thẳng', 'Bóng bổng', 'Bóng cong', 'Bóng yếu'], 0, 'Sút mu chính giữa: lực mạnh, bóng bay thẳng.'),
    Q('Vị trí điểm tiếp xúc khi sút thẳng?', ['Trên bóng', 'Dưới bóng', 'Mu chính giữa bàn chân + chính giữa quả bóng', 'Mũi bàn chân + nửa trên quả bóng'], 2, 'Bóng thẳng: chân tiếp xúc chính giữa bóng để không tạo xoáy.'),
    Q('Đối kháng nhóm 3 vs 3 rèn?', ['Chỉ cá nhân', 'Đứng yên', 'Phối hợp, ra quyết định nhanh', 'Không rèn'], 2, 'Đối kháng nhóm nhỏ rèn phối hợp, ra quyết định và tinh thần đồng đội.'),
    Q('Khi không có bóng, cần?', ['Di chuyển chọn vị trí cho đồng đội chuyền', 'Đứng cạnh đồng đội cầm bóng để hỗ trợ', 'Đứng yên', 'Đứng nhìn đồng đội thi đấu'], 0, 'Bóng đá hiện đại: 80% thời gian không có bóng — di chuyển chọn vị trí rất quan trọng.'),
  ]),

  M(23, 'Bóng rổ — Dẫn bóng và đột phá', [
    Q('Dẫn bóng (dribble) cơ bản?', ['Lăn bóng', 'Đẩy bóng', 'Vỗ bóng bằng đầu ngón tay, không nhìn xuống', 'Cầm bóng chạy'], 2, 'Dribble: vỗ bóng nhịp nhàng bằng đầu ngón tay, ngẩng đầu quan sát.'),
    Q('Lỗi đi bộ (travel)?', ['Chuyền', 'Dẫn quá nhanh', 'Đi quá 2 bước mà không dẫn bóng', 'Ném rổ'], 2, 'Bóng rổ cho phép ≤2 bước không dẫn bóng (sau khi dừng). Bước 3 = travel.'),
    Q('Lỗi 2 lần dẫn bóng (double dribble)?', ['Dẫn 2 tay luân phiên', 'Dẫn chậm', 'Dẫn nhanh', 'Cầm bóng rồi dẫn lại'], 3, 'Đã cầm bóng (catch) rồi dẫn tiếp = phạm lỗi double dribble.'),
    Q('Đột phá lên rổ?', ['Tự ném 3 điểm', 'Chuyền cho người khác', 'Đứng yên ném', 'Crossover hoặc step-back qua hậu vệ rồi sút'], 3, 'Đột phá: crossover/cắt mặt qua hậu vệ rồi sút (layup) hoặc chuyền.'),
    Q('Layup là?', ['Sút 3 điểm', 'Lên rổ bằng 2 bước cuối + bật 1 chân', 'Sút tự do', 'Sút từ xa'], 1, 'Layup: bước 1, bước 2, bật 1 chân thuận, đưa bóng nhẹ vào rổ.'),
  ]),

  M(24, 'Bóng chuyền — Phối hợp đập-chắn', [
    Q('Đập bóng có hiệu quả khi?', ['Bật thấp', 'Tiếp bóng muộn', 'Đứng đập', 'Cao điểm bật và tiếp xúc bóng đúng lúc'], 3, 'Hiệu quả tối đa khi đập ở đỉnh bật nhảy, tiếp xúc bóng đúng "sweet spot".'),
    Q('Chắn (block) bóng cần?', ['Bật cao đúng lúc, tay vươn qua lưới', 'Cúi xuống', 'Đứng yên', 'Nhảy chậm'], 0, 'Chắn: bật cùng lúc đối phương đập, 2 tay vươn qua lưới chặn bóng.'),
    Q('Hợp lệ khi chắn?', ['Chạm lưới', 'Đánh sang', 'Chạm bóng trên sân đối', 'Không chạm lưới, không chạm bóng phía bên đối phương trước khi họ đập'], 3, 'Luật: không chạm lưới, chỉ chạm bóng khi bóng đã sang phần lưới của mình.'),
    Q('Phối hợp đập-chắn?', ['Đập trừ chắn của đối phương; phòng thủ chắn ngăn đập', 'Cùng vai trò', 'Không liên quan', 'Loại trừ'], 0, 'Cuộc đối đầu giữa đập và chắn là tâm điểm chiến thuật bóng chuyền.'),
    Q('Tinh thần đồng đội bóng chuyền?', ['5 chạm', '1 chạm', 'Cá nhân', 'Mỗi bóng cần 3 chạm + phối hợp đỡ-chuyền-đập', 'Không phối hợp'], 3, 'Sơ đồ chuẩn: chạm 1 đỡ, chạm 2 chuyền 2 (setter), chạm 3 đập (chủ công).'),
  ]),

  M(25, 'Đá cầu — Đá hất và đá cầu nhóm 3 người', [
    Q('Đá hất dùng?', ['Đỉnh đầu', 'Mu hoặc lòng bàn chân, đưa cầu sang đồng đội cao', 'Đầu gối', 'Bụng và ngực, đưa cầu sang ngang'], 1, 'Đá hất = đỡ + hất cầu lên cao cho đồng đội.'),
    Q('Đá cầu nhóm 3 cần?', ['Tránh nhau', 'Mỗi người tự đỡ rồi tự đá lại', 'Phân vị trí, đỡ-chuyền-tấn công', 'Đứng yên'], 2, 'Nhóm 3: có vai trò rõ ràng (đỡ, chuyền 2, tấn công).'),
    Q('Khi cầu rơi xa?', ['Để cầu rơi', 'Đứng yên', 'Di chuyển nhanh tới vị trí, đỡ thấp', 'Gọi đồng đội'], 2, 'Di chuyển nhanh và đỡ ở vị trí thấp.'),
    Q('Tinh thần thi đấu đá cầu?', ['Thắng bằng mọi giá', 'Vui khoẻ, phối hợp, fair-play', 'Khoe khoang', 'Đè đối thủ'], 1, 'Tinh thần thể thao đặt lên hàng đầu.'),
    Q('Sức mạnh nào quan trọng nhất khi đá cầu?', ['Sức nhanh + sự khéo léo + phản xạ', 'Chỉ nhảy cao', 'Chỉ chạy nhanh', 'Sức mạnh tối đa'], 0, 'Đá cầu thiên về nhanh nhẹn, khéo léo và phản xạ hơn là sức mạnh.'),
  ]),

  M(26, 'Võ thuật cơ bản — Bài quyền số 2 và kỹ thuật tự vệ', [
    Q('Tự vệ cơ bản nhằm mục đích?', ['Bắt nạt', 'Tấn công người khác', 'Khoe khoang', 'Bảo vệ bản thân khi bị tấn công'], 3, 'Tự vệ chỉ dùng để bảo vệ khi bị tấn công, không phải để gây sự.'),
    Q('Nguyên tắc tự vệ?', ['Khiêu khích', 'Đánh đau', 'Tránh xung đột > đối thoại > tự vệ phản công khi không tránh được', 'Tấn công ngay'], 2, 'Ưu tiên: tránh xung đột → đối thoại → tự vệ khi buộc phải.'),
    Q('Khi bị kẹp cổ tay, cách thoát?', ['Xoay tay theo hướng ngón cái đối thủ (chỗ yếu nhất)', 'Kéo thẳng', 'Đẩy ngược', 'Không thoát được'], 0, 'Ngón cái là điểm yếu của bàn tay — xoay theo hướng ngón cái dễ thoát.'),
    Q('Đòn thường dùng tự vệ?', ['Đá đầu', 'Vật ngã', 'Đấm ngực', 'Đấm cào, đá thẳng vào vùng yếu (gối, mu bàn chân)'], 3, 'Tự vệ thực tế: tấn công vùng yếu (gối, mu bàn chân, mắt cá) để thoát.'),
    Q('Sau khi thoát, nên?', ['Đứng nhìn', 'Chạy tìm người lớn/cảnh sát, không nán lại', 'Quay lại trêu', 'Đánh tiếp'], 1, 'Mục đích tự vệ là thoát thân — tìm sự giúp đỡ ngay sau khi thoát.'),
  ]),

  M(27, 'Thể dục dụng cụ — Bóng (medicine ball), tạ nhẹ', [
    Q('Bóng tạ (medicine ball) dùng để?', ['Trang trí', 'Đá bóng', 'Tập sức mạnh, sức bền, chức năng', 'Ném rổ'], 2, 'Medicine ball: bóng nặng dùng tập sức mạnh và chức năng (functional).'),
    Q('Bài tập medicine ball cơ bản?', ['Không có bài', 'Ngồi lên bóng', 'Chỉ cầm', 'Đẩy ngực, ném cao, lăn bóng'], 3, 'Đẩy ngực (chest pass), ném lên cao, lăn bóng làm bụng…'),
    Q('Tạ nhẹ phù hợp HS THCS?', ['~1–3 kg', '20 kg', '100 kg', '50 kg'], 0, 'HS THCS tập tạ rất nhẹ (1–3 kg), tập đúng kỹ thuật là chính.'),
    Q('Nguyên tắc khi tập tạ?', ['Nâng tải tối đa ngay buổi đầu để bứt phá', 'Đúng kỹ thuật, nâng nhẹ trước, có người hỗ trợ', 'Không cần kỹ thuật', 'Nâng nặng ngay'], 1, 'Tập tạ ưu tiên kỹ thuật, tăng tải từ từ, có spotter.'),
    Q('Tập tạ quá nặng ở tuổi vị thành niên?', ['Có thể ảnh hưởng sự phát triển xương', 'Không sao', 'Tăng nhanh chiều cao và cơ bắp', 'Phát triển sức mạnh toàn diện hơn'], 0, 'Tạ quá nặng tuổi đang phát triển có thể ảnh hưởng xương, sụn tăng trưởng.'),
  ]),

  M(28, 'Bóng đá — Phòng ngự khu vực vs phòng ngự kèm người', [
    Q('Phòng ngự kèm người?', ['Không kèm', 'Mỗi hậu vệ kèm 1 đối thủ cụ thể', 'Đứng yên', 'Kèm khu vực'], 1, 'Man-marking: mỗi cầu thủ phòng ngự bám 1 đối thủ.'),
    Q('Phòng ngự khu vực?', ['Cả đội dồn về một nửa sân tấn công', 'Không phòng', 'Mỗi cầu thủ phụ trách 1 khu vực, bóng/người vào thì kèm', 'Kèm người'], 2, 'Zone defense: trách nhiệm theo vùng, không theo người.'),
    Q('Ưu điểm phòng ngự khu vực?', ['Giữ đội hình, ít mất sức', 'Dễ bị xé', 'Khó tổ chức', 'Tốn nhiều người'], 0, 'Zone giữ đội hình tốt, ít mất sức chạy theo người.'),
    Q('Ưu điểm phòng ngự kèm người?', ['Mất đội hình', 'Áp lực cao, cản trở trực tiếp đối phương', 'Tốn ít sức', 'Giữ đội hình kín, ít di chuyển'], 1, 'Man-marking tạo áp lực, hạn chế đối thủ trực tiếp.'),
    Q('Phòng ngự hỗn hợp?', ['Không thể', 'Chỉ 1 kiểu', 'Hậu vệ chỉ đứng giữ vị trí, không kèm', 'Kết hợp khu vực + kèm người tuỳ tình huống'], 3, 'Bóng đá hiện đại: hybrid — chủ yếu khu vực nhưng kèm người ở vị trí then chốt.'),
  ]),

  M(29, 'Kiểm tra giữa kì II — Chạy 800m và bài quyền', [
    Q('Chạy 800m thuộc?', ['Chạy ngắn', 'Marathon', 'Chạy việt dã', 'Chạy bền trung bình'], 3, '800m là cự ly bền trung bình.'),
    Q('Chiến thuật chạy 800m?', ['Tốc độ đều, bứt 200m cuối', 'Bứt tốc 200m đầu rồi chạy chậm dần', 'Hết sức từ đầu', 'Đi bộ xen kẽ chạy nước rút'], 0, 'Tương tự 1500m: phân phối đều, bứt cuối.'),
    Q('Bài quyền yêu cầu?', ['Ngẫu hứng sáng tạo động tác mới', 'Nhớ chuẩn động tác, mạnh dứt khoát, đúng tấn', 'Mềm yếu', 'Thực hiện chậm rãi, mềm mại như múa'], 1, 'Bài quyền chấm điểm: nhớ chuẩn, lực dứt khoát, tấn vững.'),
    Q('Đánh giá thể lực HS?', ['Sức nhanh + sức bền + sức mạnh + khéo léo', 'Chỉ dựa vào chiều cao và cân nặng', 'Chỉ sức mạnh', 'Chỉ sức nhanh'], 0, 'Đánh giá đa chiều: chạy 60m (nhanh) + 800m (bền) + bật xa (sức mạnh) + khéo léo.'),
    Q('Trước kiểm tra, cần?', ['Ăn no sát giờ thi để dồi dào năng lượng', 'Thức khuya', 'Tập kiệt sức', 'Ăn nhẹ trước 2h, ngủ đủ, khởi động kỹ'], 3, 'Chuẩn bị: ăn nhẹ, ngủ đủ, khởi động kỹ.'),
  ]),

  M(30, 'Bóng rổ — Thi đấu nhóm 3 vs 3', [
    Q('Bóng rổ 3x3 chơi?', ['1 rổ, 3 vs 3, thời gian ngắn', '2 rổ', '5 vs 5', 'Không giới hạn'], 0, '3x3: nhanh, 1 rổ, 10 phút hoặc đến 21 điểm.'),
    Q('Lợi ích 3x3 so với 5x5?', ['Ít vận động', 'Nhiều bóng hơn, không gian rộng', 'Khó hơn', 'Không có lợi'], 1, '3x3 mỗi người chạm bóng nhiều, không gian rộng, vận động cao.'),
    Q('Chiến thuật 3x3?', ['Pick & Roll, give and go', 'Đứng yên', 'Tránh đồng đội', 'Tự đi 1 mình'], 0, 'Pick & Roll (chặn-cuốn) và give-and-go là 2 chiến thuật cơ bản 3x3.'),
    Q('Tinh thần đồng đội?', ['Chuyền cho người tốt vị trí, không ích kỷ', 'Tự ném mãi', 'Cá nhân', 'Tránh đồng đội'], 0, 'Bóng rổ là môn đồng đội — chuyền cho người mở.'),
    Q('Sau trận đấu?', ['Cãi vã', 'Bắt tay, chúc mừng đối thủ', 'Không bắt tay', 'Rời sân ngay khi kết thúc, không chào trọng tài'], 1, 'Truyền thống thể thao: bắt tay cả thắng lẫn thua.'),
  ]),

  M(31, 'Đi bộ thể thao — Race walking', [
    Q('Đi bộ thể thao khác chạy ở?', ['Đi đều', 'Luôn có 1 chân chạm đất, chân trước thẳng khi chạm', 'Không khác', 'Đi chậm hơn'], 1, 'Race walking: 1 chân chạm đất liên tục + chân trước phải thẳng từ lúc chạm đến khi qua trục thẳng đứng.'),
    Q('Vi phạm luật đi bộ?', ['Vung tay', 'Đi dài bước', '"Bay" (loss of contact) hoặc chân trước gập', 'Đi chậm'], 2, '2 lỗi chính: bay (cả 2 chân rời đất) hoặc chân trước gập gối.'),
    Q('Cự ly đi bộ phổ biến?', ['100m', '20km, 50km (Olympic)', '500m', '1km'], 1, 'Olympic: 20km nam-nữ, 50km nam (trước 2024).'),
    Q('Đi bộ thể thao rèn?', ['Sức bền, kỹ thuật, tâm lý', 'Không rèn', 'Chỉ sức mạnh', 'Chỉ tốc độ'], 0, 'Race walking: bền + kỹ thuật rất khắt khe + tâm lý kiểm soát tốc độ.'),
    Q('HS THCS có thể tập đi bộ?', ['Chỉ người lớn', 'Có — phù hợp tất cả lứa tuổi, an toàn', 'Chỉ VĐV', 'Chỉ phù hợp người cao tuổi, không hợp HS'], 1, 'Đi bộ rất phù hợp HS — ít chấn thương, rèn bền tốt.'),
  ]),

  M(32, 'Trò chơi dân gian — Kéo co, đẩy gậy', [
    Q('Kéo co là trò chơi?', ['Hiện đại', 'Nước ngoài', 'Cờ vua', 'Dân gian VN, 2 đội kéo dây ngược chiều'], 3, 'Kéo co là trò chơi dân gian phổ biến ở VN, được UNESCO công nhận.'),
    Q('Kỹ thuật kéo co?', ['Cúi gập', 'Trùng gối thấp, lưng thẳng, tay nắm dây cao', 'Đứng thẳng', 'Đứng thẳng, kéo dây bằng sức tay là chính'], 1, 'Tư thế: trùng gối thấp (dùng lực chân), lưng thẳng, kéo dây ngang vai.'),
    Q('Đẩy gậy là?', ['Đá bóng', 'Đua chạy có cầm gậy tiếp sức', 'Đánh gậy vào quả cầu gỗ ghi điểm', 'Trò chơi 2 người dùng gậy đẩy nhau khỏi vòng'], 3, 'Đẩy gậy: 2 người cầm 2 đầu 1 gậy, đẩy đối thủ ra khỏi vòng tròn.'),
    Q('Lợi ích trò chơi dân gian?', ['Chỉ giúp giải trí, không có giá trị thể chất', 'Mất thời gian', 'Phát triển sức mạnh, đồng đội, giữ văn hoá', 'Lạc hậu'], 2, 'Trò chơi dân gian rèn thể chất + đồng đội + lưu giữ văn hoá truyền thống.'),
    Q('Tinh thần khi chơi?', ['Vui vẻ, fair-play, không ăn thua', 'Gian lận', 'Thắng bằng mọi giá', 'Lừa dối'], 0, 'Trò chơi dân gian đề cao vui và đồng đội hơn thắng-thua.'),
  ]),

  M(33, 'Dinh dưỡng và phục hồi cho thể thao', [
    Q('Trước khi tập 1–2 giờ nên ăn?', ['Nhịn ăn', 'Carb (cơm, mì, bánh mì) + ít protein', 'Ăn nhiều protein và mỡ động vật', 'Đồ chiên'], 1, 'Trước tập: carb để có năng lượng + ít protein, tránh đồ khó tiêu.'),
    Q('Trong khi tập?', ['Không uống', 'Uống nước ngọt', 'Uống nhiều một lúc', 'Uống nước đều đặn, ngụm nhỏ'], 3, 'Uống nước đều đặn từng ngụm nhỏ để bù mất nước.'),
    Q('Sau tập, ăn?', ['Không ăn', 'Đồ ăn nhanh', 'Chỉ đường', 'Carb + protein trong 30–60 phút (cửa sổ vàng)'], 3, 'Cửa sổ 30–60 phút sau tập là tốt nhất để phục hồi: carb + protein.'),
    Q('Nước uống cho thể thao?', ['Nước ngọt', 'Nước có cồn', 'Nước lọc; nước điện giải với tập dài >1h', 'Cà phê'], 2, 'Nước lọc đủ với hầu hết buổi tập; tập >1h hoặc nắng nóng cần thêm điện giải.'),
    Q('Ngủ và phục hồi?', ['Càng ít càng tốt', 'Ngủ ít vẫn ổn', 'Ngủ đủ 8–10h cho HS, cơ phục hồi khi ngủ', '4–5h là đủ'], 2, 'HS THCS cần 8–10h ngủ, cơ thể phục hồi và phát triển khi ngủ sâu.'),
  ]),

  M(34, 'Lập kế hoạch luyện tập cá nhân', [
    Q('Kế hoạch luyện tập cần?', ['Tập tuỳ ý', 'Tập khi nào có hứng, không cần lịch', 'Sao chép người khác', 'Mục tiêu cụ thể, lịch trình, đánh giá'], 3, 'Kế hoạch tốt: SMART goal + lịch trình + đánh giá định kỳ.'),
    Q('SMART là?', ['Strong-Move', 'Sport, Muscle, Active, Run, Train', 'Specific, Measurable, Achievable, Relevant, Time-bound', 'Speed, Mass…'], 2, 'SMART: cụ thể, đo được, khả thi, liên quan, có thời hạn.'),
    Q('Tần suất tập phù hợp HS?', ['3–5 buổi/tuần, mỗi buổi 45–60 phút', 'Mỗi ngày 5h', '1 buổi/tháng', 'Không tập'], 0, 'WHO khuyến cáo: hoạt động thể chất 60 phút/ngày, ít nhất 3–5 buổi rèn luyện chính.'),
    Q('Nguyên tắc tăng tải?', ['Tăng ngẫu nhiên', 'Tăng 100% ngay', 'Không tăng', 'Tăng dần (10% mỗi tuần)'], 3, 'Tăng tải từ từ (~10%/tuần) để cơ thể thích nghi, tránh chấn thương.'),
    Q('Đánh giá tiến bộ qua?', ['Không cần đánh giá', 'Hỏi bạn', 'Nhìn gương', 'Đo định kỳ: chạy 60m, 1km, hít xà, bật xa'], 3, 'Đo định kỳ các test chuẩn để theo dõi tiến bộ khách quan.'),
  ]),

  M(35, 'Tổng kết và biểu diễn cuối năm', [
    Q('Mục tiêu GDTC THCS?', ['Chỉ vô địch', 'Phát triển toàn diện thể chất, tinh thần, kỹ năng', 'Chỉ tiêu khiển', 'Chỉ vui chơi'], 1, 'GDTC phát triển toàn diện, không chỉ thi đấu thành tích.'),
    Q('Test thể lực HS THCS cuối năm?', ['Chỉ nhảy', 'Không có test', 'Chỉ chạy 100m', 'Chạy 60m, chạy bền 800m/1000m, bật xa, hít xà, nằm sấp chống đẩy'], 3, 'Test chuẩn đánh giá: sức nhanh, bền, mạnh, mềm dẻo, sức chịu đựng.'),
    Q('Tập thể dục đều đặn giúp?', ['Cải thiện sức khoẻ + học tập + tinh thần', 'Chỉ tốt khi vô địch', 'Mất thời gian', 'Không có lợi'], 0, 'Nghiên cứu: tập thể dục cải thiện trí nhớ, tập trung, tâm trạng và giấc ngủ.'),
    Q('Sau khi rời trường, nên?', ['Khi nào thích', 'Duy trì thói quen vận động suốt đời', 'Chỉ khi có thời gian', 'Bỏ tập'], 1, 'GDTC tạo thói quen vận động suốt đời — chìa khoá sức khoẻ dài hạn.'),
    Q('Tinh thần thể thao đẹp?', ['Fair-play, kiên trì, đồng đội, tôn trọng', 'Cá nhân', 'Ăn thua đủ', 'Khoe khoang'], 0, 'Tinh thần thể thao: fair-play, kiên trì, đồng đội, tôn trọng — giá trị cốt lõi.'),
  ]),
];

export const S8GDTC_SCENARIOS = indexBy(S8GDTC_WEEKS);
