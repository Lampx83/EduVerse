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
    Q('Chạy ngắn gồm 4 giai đoạn?', ['Xuất phát → tăng tốc sau xuất phát → giữa quãng → về đích', 'Khởi động → chạy → về đích → nghỉ', 'Đứng → chạy → nhảy → về', 'Chỉ chạy thẳng'], 0, '4 giai đoạn chạy ngắn: xuất phát, sau xuất phát, giữa quãng, về đích.'),
    Q('Xuất phát thấp trong chạy ngắn?', ['Dùng bàn đạp, tư thế 3 điểm tựa', 'Đứng thẳng', 'Cúi đầu', 'Nhảy'], 0, 'Xuất phát thấp: dùng bàn đạp, 2 chân + 2 tay tạo 3 điểm tựa.'),
    Q('Khẩu lệnh xuất phát?', ['"Vào chỗ" → "Sẵn sàng" → tiếng súng', 'Chạy ngay', '1-2-3', 'Tự bắt đầu'], 0, '3 khẩu lệnh chuẩn theo trọng tài quốc tế.'),
    Q('Ở "Sẵn sàng", tư thế?', ['Nâng hông cao hơn vai một chút, chuyển trọng tâm về trước', 'Ngồi xuống', 'Đứng lên', 'Tự do'], 0, 'Sẵn sàng: nâng hông, đầu thấp, trọng tâm dồn về tay — chờ tín hiệu chạy.'),
    Q('Mục đích về đích?', ['Cúi ngực để cắt đường đích', 'Dừng đột ngột', 'Nhảy', 'Tăng tốc và đột ngột chậm'], 0, 'Khi gần đích, cúi ngực về phía trước để cắt vạch sớm nhất.'),
  ]),

  M(2, 'Chạy 200m — Kỹ thuật chạy đường vòng', [
    Q('Chạy 200m khác 100m ở?', ['Có đoạn đường vòng (cua)', 'Dài hơn 1 chút', 'Cùng kỹ thuật', 'Không có đường vòng'], 0, '200m chạy hết 1 vòng cua sân điền kinh chuẩn.'),
    Q('Khi chạy đường vòng, kỹ thuật?', ['Nghiêng người vào trong, tay trong vung ngắn hơn tay ngoài', 'Đứng thẳng', 'Nghiêng ra ngoài', 'Chạy chậm'], 0, 'Nghiêng người vào tâm sân, vai trái thấp hơn vai phải (vòng trái).'),
    Q('Xuất phát 200m từ vị trí?', ['So le để bù chiều dài đường vòng', 'Cùng vạch xuất phát', 'Tự do', 'Khác nhau ngẫu nhiên'], 0, 'Xuất phát so le để các làn có cùng độ dài 200m.'),
    Q('Chiến thuật chạy 200m?', ['Tăng tốc đường thẳng → giữ tốc độ vòng cua → bứt tốc 50m cuối', 'Chạy đều', 'Chạy hết sức từ đầu', 'Chậm lúc cuối'], 0, '200m cần phân phối sức: tăng tốc đầu, giữ qua cua, bứt cuối.'),
    Q('Lỗi thường gặp khi chạy vòng?', ['Đứng thẳng (không nghiêng) → mất tốc độ', 'Nghiêng quá nhiều', 'Tay vung đều', 'Tốc độ ổn'], 0, 'Không nghiêng người = lực ly tâm đẩy ra ngoài, mất đà.'),
  ]),

  M(3, 'Chạy bền — Phương pháp Cooper', [
    Q('Chạy bền là?', ['Chạy với cường độ vừa phải, thời gian dài', 'Chạy nhanh ngắn', 'Đi bộ', 'Chạy lúc nghỉ'], 0, 'Chạy bền = chạy dài (≥1500m), cường độ vừa phải để rèn sức bền.'),
    Q('Test Cooper là?', ['Chạy hết sức trong 12 phút, đo quãng đường', 'Chạy 100m', 'Chạy 1km', 'Đi bộ 5km'], 0, 'Test Cooper (1968): chạy/đi 12 phút, đo quãng đường để đánh giá VO2max.'),
    Q('Nguyên tắc chạy bền?', ['Phân phối sức đều, hít thở nhịp nhàng', 'Chạy hết sức ngay', 'Nghỉ liên tục', 'Chạy nhanh chậm thất thường'], 0, 'Chạy bền cần phân phối đều, hít thở theo nhịp (vd: 3 bước hít, 3 bước thở).'),
    Q('Hít thở khi chạy bền?', ['Hít bằng mũi, thở bằng miệng, nhịp đều', 'Chỉ hít mũi', 'Chỉ thở miệng', 'Nín thở'], 0, 'Hít bằng mũi (lọc), thở bằng miệng để thoát nhiệt và CO2.'),
    Q('Lợi ích chạy bền?', ['Tăng sức bền tim phổi, đốt mỡ, cải thiện sức khoẻ', 'Chỉ giảm cân', 'Không có lợi', 'Mệt mỏi'], 0, 'Chạy bền cải thiện toàn diện hệ tim mạch, hô hấp, đốt mỡ, tinh thần.'),
  ]),

  M(4, 'Bài thể dục liên hoàn nâng cao', [
    Q('Bài thể dục liên hoàn giúp?', ['Phát triển các nhóm cơ và phối hợp toàn thân', 'Chỉ phát triển 1 nhóm cơ', 'Giải trí', 'Không có tác dụng'], 0, 'Thể dục liên hoàn = chuỗi động tác phối hợp, phát triển toàn diện.'),
    Q('Trình tự thực hiện bài liên hoàn?', ['Khởi động → bài chính → thả lỏng', 'Bài chính ngay', 'Thả lỏng trước', 'Tuỳ ý'], 0, 'Luôn khởi động trước, làm bài chính, thả lỏng sau.'),
    Q('Mục đích khởi động?', ['Tăng nhiệt cơ thể, chuẩn bị hệ vận động, tránh chấn thương', 'Mất thời gian', 'Không cần', 'Giảm sức'], 0, 'Khởi động làm ấm cơ, tăng tuần hoàn, giảm nguy cơ chấn thương.'),
    Q('Thả lỏng sau tập?', ['Giảm nhịp tim từ từ, kéo giãn cơ, tránh đau cơ', 'Dừng đột ngột', 'Ngồi xuống ngay', 'Uống nước đá'], 0, 'Thả lỏng dần giúp cơ thể hồi phục, giảm đau nhức.'),
    Q('Phối hợp nhịp với động tác?', ['Đếm 1-2-3-4-5-6-7-8 đồng bộ', 'Tuỳ ý', 'Nhanh nhất có thể', 'Chậm nhất'], 0, 'Đếm nhịp 8 chuẩn đảm bảo đồng bộ trong nhóm và đúng kỹ thuật.'),
  ]),

  M(5, 'Nhảy cao — Kỹ thuật nằm nghiêng', [
    Q('4 giai đoạn nhảy cao?', ['Chạy đà → giậm nhảy → bay qua xà → tiếp đất', 'Chạy → nhảy → nằm', 'Đứng → nhảy → đáp', 'Khởi động → nhảy'], 0, '4 giai đoạn: chạy đà, giậm nhảy, bay qua xà, tiếp đất.'),
    Q('Kiểu nằm nghiêng (lưng qua xà)?', ['Thân nằm song song xà, vắt qua, lưng xuống trước', 'Đứng qua', 'Ngồi qua', 'Quay đầu qua'], 0, 'Kiểu nằm nghiêng: thân nằm song song xà, vắt qua, lưng/hông xuống đệm.'),
    Q('Chân giậm nhảy là?', ['Chân khoẻ hơn, đạp đất tạo lực bay', 'Chân yếu', 'Cả 2 chân', 'Không quan trọng'], 0, 'Chân giậm = chân khoẻ hơn, đạp đất mạnh để tạo lực thẳng đứng.'),
    Q('Chiều dài chạy đà?', ['Khoảng 7–9 bước, góc 30–40° với xà', '15 bước', '3 bước', 'Tuỳ ý'], 0, 'Chạy đà 7–9 bước, góc 30–40° để vào xà đúng kỹ thuật.'),
    Q('Tiếp đất an toàn?', ['Lưng hoặc hông xuống đệm dày', 'Đầu xuống', 'Chân thẳng', 'Bụng xuống'], 0, 'Tiếp đệm bằng lưng/hông (vùng cơ lớn), không bao giờ đầu hoặc chân thẳng (chấn thương).'),
  ]),

  M(6, 'Nhảy xa — Kiểu ưỡn thân', [
    Q('Kỹ thuật nhảy xa kiểu ưỡn thân?', ['Bay xa với thân ưỡn cong sau, sau đó co lại trước tiếp đất', 'Ngồi xổm', 'Đứng thẳng', 'Cúi gập'], 0, 'Kiểu ưỡn thân: ở giai đoạn bay, thân ưỡn cong, sau co lại đẩy chân ra xa.'),
    Q('Giai đoạn nhảy xa?', ['Chạy đà → giậm nhảy → bay trên không → tiếp đất', 'Đứng → nhảy', '3 bước → nhảy', 'Đi → nhảy'], 0, '4 giai đoạn nhảy xa.'),
    Q('Chạy đà nhảy xa?', ['15–20 bước, tăng dần tốc độ', '3 bước', '50 bước', 'Tuỳ ý'], 0, 'Đà 15–20 bước, tốc độ cao dần đạt cực đại ở vạch giậm nhảy.'),
    Q('Tiếp đất nhảy xa đo từ?', ['Vạch giậm nhảy đến vết tiếp đất gần nhất', 'Đến vết xa nhất', 'Đến vai', 'Đến đầu'], 0, 'Đo từ vạch giậm đến điểm tiếp đất GẦN NHẤT (gót, mông…).'),
    Q('Lỗi phổ biến nhảy xa?', ['Bước cuối ngắn, giậm sai chân, ngồi bệt', 'Bay xa', 'Chân vuông góc', 'Tay vung'], 0, 'Lỗi thường gặp: bước cuối ngắn (mất đà), giậm sai chân, tiếp đất ngồi bệt mông sớm.'),
  ]),

  M(7, 'Đẩy tạ — Kỹ thuật cơ bản', [
    Q('Đẩy tạ là môn?', ['Điền kinh ném đẩy', 'Bóng', 'Võ', 'Bơi'], 0, 'Đẩy tạ thuộc nhóm môn ném đẩy của điền kinh.'),
    Q('Khối lượng tạ HS nữ THCS?', ['~3 kg', '7,26 kg', '10 kg', '1 kg'], 0, 'Tạ HS nữ THCS khoảng 3 kg; nam ~4 kg (tuỳ cấp học).'),
    Q('Vị trí cầm tạ?', ['Trên cổ tay/ngón tay, sát cằm', 'Trong lòng bàn tay', 'Trên đầu', 'Sau lưng'], 0, 'Cầm tạ trên các đốt ngón tay (không lòng bàn tay), giữ sát cằm.'),
    Q('Kỹ thuật đẩy tạ?', ['Lùi vai → xoay người → đẩy tay thẳng theo hướng tạ bay', 'Ném như bóng', 'Hất tay', 'Thả từ trên cao'], 0, 'Đẩy (push) chứ không ném: lực xuất phát từ chân-eo-vai-tay, đẩy tạ ra.'),
    Q('An toàn khi đẩy tạ?', ['Khu vực phía trước phải trống, đứng đúng vạch', 'Đẩy tự do', 'Có người đứng phía trước', 'Đẩy về sau'], 0, 'Tạ rất nặng — khu vực rơi phải hoàn toàn trống, đảm bảo an toàn người xung quanh.'),
  ]),

  M(8, 'Đá cầu — Đá tâng và đỡ cầu nhóm', [
    Q('Đá cầu là môn?', ['Truyền thống VN, đá cầu lông gà bằng chân', 'Bóng đá', 'Bóng chuyền', 'Cầu lông'], 0, 'Đá cầu = môn truyền thống VN, dùng chân (chủ yếu) tâng/đỡ cầu lông gà.'),
    Q('Đá tâng cơ bản dùng?', ['Mu bàn chân, đỡ cầu lên cao', 'Mũi chân', 'Gót chân', 'Đầu gối'], 0, 'Tâng cầu chủ yếu bằng mu bàn chân (cờ-rép-đờ-pi-ê).'),
    Q('Đá cầu nhóm chuyền cho nhau cần?', ['Đỡ cao, đẩy lực vừa phải đến đồng đội', 'Đá mạnh', 'Tâng tại chỗ', 'Đá ra xa'], 0, 'Chuyền nhóm: tâng cầu lên cao + đẩy nhẹ sang đồng đội với lực vừa phải.'),
    Q('Tư thế chuẩn bị đá cầu?', ['Trùng gối nhẹ, mắt theo cầu, trọng tâm thấp', 'Đứng thẳng', 'Ngồi xổm', 'Khom lưng'], 0, 'Tư thế "sẵn sàng": gối hơi trùng, trọng tâm thấp, sẵn sàng di chuyển.'),
    Q('Lợi ích đá cầu?', ['Phát triển khéo léo, phản xạ, phối hợp nhóm', 'Chỉ rèn sức mạnh', 'Vô bổ', 'Mất thời gian'], 0, 'Đá cầu rèn khéo léo, phản xạ, phối hợp; là môn truyền thống nên cũng giữ gìn văn hoá.'),
  ]),

  M(9, 'Bóng đá — Kỹ thuật chuyền bóng', [
    Q('Chuyền bóng ngắn dùng?', ['Lòng trong bàn chân', 'Mũi chân', 'Gót chân', 'Đầu gối'], 0, 'Chuyền ngắn (5–15m) chủ yếu bằng lòng trong bàn chân, độ chính xác cao.'),
    Q('Chuyền bóng dài dùng?', ['Mu bàn chân', 'Lòng trong', 'Gót', 'Đầu gối'], 0, 'Chuyền dài/sút xa dùng mu bàn chân để tạo lực lớn.'),
    Q('Trước khi chuyền, cần?', ['Quan sát đồng đội và đối phương', 'Nhắm mắt', 'Chuyền tự do', 'Hỏi trọng tài'], 0, 'Bóng đá hiện đại: quan sát trước khi nhận bóng để chuyền ngay với phương án tốt.'),
    Q('Chiến thuật chuyền cơ bản?', ['Chuyền-di chuyển không bóng (give and go)', 'Đứng yên', 'Tự đi bóng mãi', 'Chỉ chuyền dài'], 0, 'Pass-and-move (chuyền và di chuyển) là nguyên tắc cơ bản của bóng đá.'),
    Q('Mục đích chuyền bóng?', ['Đưa bóng đến đồng đội an toàn, tạo cơ hội tấn công', 'Đá đi cho khỏi mất bóng', 'Thể hiện cá nhân', 'Ăn thua đủ với đối phương'], 0, 'Chuyền có mục đích: giữ bóng và phát triển tấn công.'),
  ]),

  M(10, 'Bóng đá — Chiến thuật cơ bản và sơ đồ', [
    Q('Sơ đồ phổ biến trong bóng đá 7 người HS?', ['1-3-3 hoặc 1-2-3-1', '1-11-0', '0-0-0', '2-2-2-3'], 0, 'Bóng đá 7 người thường chơi 1-3-3 hoặc 1-2-3-1 (thủ môn không tính vào số).'),
    Q('Vai trò hậu vệ?', ['Phòng ngự, cản phá tấn công đối phương', 'Ghi bàn', 'Đỡ bóng', 'Thủ môn'], 0, 'Hậu vệ chuyên phòng ngự, ngăn đối phương tiếp cận khung thành.'),
    Q('Tiền đạo chính có nhiệm vụ?', ['Ghi bàn', 'Phòng ngự', 'Phát bóng', 'Đỡ phạt'], 0, 'Tiền đạo là mũi nhọn tấn công, có nhiệm vụ chính là ghi bàn.'),
    Q('Phòng ngự nhóm bằng cách?', ['Kèm người + che chắn lẫn nhau', 'Tự phòng ngự', 'Để 1 người', 'Không kèm'], 0, 'Phòng ngự nhóm: phối hợp kèm người + che chắn (cover) cho đồng đội.'),
    Q('Khi mất bóng nên?', ['Pressing ngay để giành lại', 'Đứng yên', 'Bỏ về sân nhà luôn', 'Phàn nàn'], 0, 'Pressing/Counter-press ngay sau khi mất bóng là chiến thuật phổ biến hiện đại.'),
  ]),

  M(11, 'Bóng rổ — Kỹ thuật chuyền 2 tay trước ngực', [
    Q('Chuyền 2 tay trước ngực?', ['Cầm bóng 2 bên, đẩy thẳng ra trước', 'Ném 1 tay', 'Đá', 'Lăn bóng'], 0, 'Chest pass: cầm bóng 2 bên ngực, đẩy thẳng đến đồng đội.'),
    Q('Tư thế cầm bóng?', ['Ngón tay xoè ôm bóng, ngón cái hướng lên', 'Cả lòng bàn tay áp', 'Ngón cái xuống', 'Cầm như quả trứng'], 0, 'Cầm bóng bằng ngón tay (không lòng bàn tay), ngón cái lên trên, ôm ngang bóng.'),
    Q('Bước chân khi chuyền?', ['Bước 1 chân về trước theo lực chuyền', 'Đứng yên', 'Lùi lại', 'Nhảy'], 0, 'Bước về trước giúp tăng lực và truyền động lượng theo hướng chuyền.'),
    Q('Sau khi chuyền, tay?', ['Duỗi thẳng, lòng bàn tay hướng ra', 'Co lại', 'Buông xuống', 'Vẫy'], 0, 'Tay duỗi thẳng, lòng bàn tay hướng ra ngoài (follow-through).'),
    Q('Khi nào không nên chuyền trước ngực?', ['Khi có hậu vệ chắn cao giữa 2 người', 'Khi đồng đội ở gần', 'Khi không bị kèm', 'Khi chạy chậm'], 0, 'Chest pass bay thẳng — dễ bị chặn nếu có hậu vệ cao chen giữa. Khi đó dùng bounce pass.'),
  ]),

  M(12, 'Bóng rổ — Kỹ thuật ném rổ', [
    Q('Ném rổ cơ bản dùng tay?', ['1 tay (tay thuận) ném, tay kia đỡ', '2 tay đẩy mạnh', 'Ném dưới chân', 'Ném từ sau lưng'], 0, 'Set shot/jump shot dùng 1 tay thuận ném, tay kia chỉ đỡ phụ.'),
    Q('Tư thế chân?', ['Chân thuận lên trước, gối hơi trùng', 'Chân thuận sau', 'Cùng vạch', 'Nhảy 1 chân'], 0, 'Chân thuận lên trước (BEEF: Balance), gối trùng để bật.'),
    Q('Điểm ngắm khi ném?', ['Mép trước vành rổ', 'Bảng', 'Mép sau vành', 'Trần nhà'], 0, 'Ngắm mép trước vành — bóng bay theo cung parabol vào trong rổ.'),
    Q('Quy tắc BEEF trong ném rổ?', ['Balance, Eyes, Elbow, Follow-through', 'B-East-E-Foot', 'Beef', 'Không có'], 0, 'BEEF: Balance (cân bằng), Eyes (mắt nhìn rổ), Elbow (khuỷu thẳng), Follow-through (theo tay).'),
    Q('Sau khi ném, cổ tay?', ['Gập xuống (gooseneck), giữ tư thế đến khi bóng vào', 'Buông ngay', 'Cứng nguyên', 'Vẫy'], 0, 'Follow-through: cổ tay gập tự nhiên, giữ "tư thế ngỗng" cho đến khi bóng tiếp đích.'),
  ]),

  M(13, 'Bóng chuyền — Kỹ thuật chuyền cao 2 tay', [
    Q('Chuyền cao 2 tay (bunda) dùng để?', ['Đỡ bóng cao, chuyền cho đồng đội tấn công', 'Đập bóng', 'Phát bóng', 'Chặn bóng'], 0, 'Chuyền cao 2 tay (overhead pass) thường dùng làm bóng 2 cho chủ công.'),
    Q('Vị trí tay đỡ bóng?', ['2 tay tạo hình tam giác trên trán, ngón hướng lên', '2 tay trước bụng', '2 tay sau lưng', '1 tay'], 0, 'Tạo "tam giác" giữa 2 ngón cái và 2 ngón trỏ, đỡ bóng phía trên trán.'),
    Q('Khi đỡ bóng, lực truyền từ?', ['Chân-eo-vai-cánh tay-ngón tay', 'Chỉ cổ tay', 'Chỉ vai', 'Chỉ lòng bàn tay'], 0, 'Chuyền hiệu quả: lực bắt đầu từ chân, truyền qua eo, vai đến ngón tay.'),
    Q('Đỡ bóng thấp dùng?', ['Đệm 2 tay (forearm pass / bump)', 'Chuyền cao 2 tay', 'Đập', 'Chặn'], 0, 'Bóng thấp: đệm 2 tay (gập ngực, 2 cẳng tay khép sát) — gọi là "bump".'),
    Q('Lỗi thường gặp khi chuyền cao?', ['Đỡ bằng lòng bàn tay (vi phạm), bóng dừng lại', 'Đỡ bằng ngón tay', 'Bóng đi xa', 'Bóng đi đúng'], 0, 'Đỡ bằng lòng bàn tay = "held ball" — phạm lỗi mất điểm.'),
  ]),

  M(14, 'Bóng chuyền — Phát bóng và đập bóng', [
    Q('Phát bóng thấp tay dùng cho?', ['Người mới tập', 'Vận động viên chuyên nghiệp', 'Chỉ nữ', 'Chỉ nam'], 0, 'Phát thấp tay dễ thực hiện, phù hợp người mới.'),
    Q('Phát bóng cao tay (jump serve) phù hợp?', ['VĐV nâng cao, lực mạnh hơn', 'Người mới', 'Tất cả', 'Trẻ em'], 0, 'Phát cao tay/nhảy phát đòi hỏi kỹ thuật và lực, phù hợp người đã tập lâu.'),
    Q('Đập bóng (smash/spike) gồm?', ['Chạy đà → giậm nhảy → đập bóng → tiếp đất', 'Đứng đập', 'Ngồi đập', 'Tự do'], 0, '4 giai đoạn: chạy đà, giậm nhảy, ra tay đập, tiếp đất.'),
    Q('Khi đập bóng, tay đập?', ['Vung mạnh, gập cổ tay tạo lực và quỹ đạo xuống', 'Đẩy thẳng', 'Vỗ nhẹ', 'Hất ngược'], 0, 'Đập: vung tay nhanh, gập cổ tay (snap) tạo bóng đi nhanh và cắm xuống.'),
    Q('Vị trí đứng phòng thủ khi đối phương đập?', ['Phía sau, gối thấp, tay sẵn sàng đệm', 'Đứng thẳng', 'Quay lưng', 'Chạy ra'], 0, 'Phòng thủ cần tư thế thấp, sẵn sàng đỡ bóng đi nhanh.'),
  ]),

  M(15, 'Võ thuật cơ bản — Bài quyền số 1', [
    Q('Võ truyền thống VN gồm?', ['Vovinam, Bình Định, Nhất Nam…', 'Chỉ Vovinam', 'Karate', 'Taekwondo'], 0, 'VN có nhiều môn võ truyền thống: Vovinam-Việt Võ Đạo, võ cổ truyền Bình Định, Nhất Nam…'),
    Q('Bài quyền là?', ['Chuỗi động tác tấn pháp + đòn đánh được biên soạn để luyện tập', 'Đối kháng', 'Trò chơi', 'Khởi động'], 0, 'Bài quyền (hình thức) = chuỗi động tác chuẩn hoá, rèn kỹ thuật + sức bền.'),
    Q('Tấn (đứng) cơ bản trong võ?', ['Đinh tấn, trung bình tấn, hư tấn…', 'Đứng thẳng', 'Ngồi', 'Quỳ'], 0, 'Tấn = các tư thế đứng nền tảng, giữ ổn định và truyền lực.'),
    Q('Đinh tấn?', ['Chân trước trùng, chân sau thẳng — tư thế tấn công', 'Đứng thẳng 2 chân', 'Ngồi', 'Quỳ'], 0, 'Đinh tấn: 1 chân trước trùng gối, chân sau thẳng — chuẩn bị đấm/đá.'),
    Q('Tinh thần học võ?', ['Rèn thể chất + nhân cách, không lạm dụng', 'Đánh nhau', 'Bắt nạt', 'Thể hiện'], 0, 'Học võ để rèn thân thể và đạo đức, tự vệ khi cần, không dùng vào việc xấu.'),
  ]),

  M(16, 'Thể dục dụng cụ — Xà đơn, lộn nhào cơ bản', [
    Q('Xà đơn rèn?', ['Cơ tay, vai, lưng', 'Cơ chân', 'Cơ bụng đơn thuần', 'Không rèn'], 0, 'Xà đơn (pull-up, treo người) rèn các nhóm cơ tay, vai, lưng.'),
    Q('Lộn nhào cơ bản gồm?', ['Lộn nhào trước, lộn nhào sau', 'Chỉ trước', 'Chỉ sau', 'Lộn ngang'], 0, 'Bài cơ bản: lộn nhào trước (forward roll) và lộn nhào sau (backward roll).'),
    Q('Khi lộn nhào trước, cần?', ['Cằm áp ngực, lưng cong, đẩy chân', 'Đầu thẳng', 'Lưng thẳng', 'Đẩy tay ngược'], 0, 'Cằm áp ngực (bảo vệ cổ), lưng cong tròn, đẩy chân để lăn về trước.'),
    Q('An toàn khi tập thể dục dụng cụ?', ['Có thảm đệm, có người hỗ trợ, khởi động kỹ', 'Tập tự do', 'Sàn cứng', 'Không cần hỗ trợ'], 0, 'TDDC cần thảm dày, người hỗ trợ (spotter), khởi động kỹ vì rủi ro chấn thương cổ-lưng cao.'),
    Q('Lỗi nguy hiểm khi lộn nhào?', ['Đầu/cổ đỡ trọng lượng (không gập cằm)', 'Lăn đều', 'Tay đỡ', 'Chân co'], 0, 'Không gập cằm = đầu chịu lực = chấn thương cổ rất nguy hiểm.'),
  ]),

  M(17, 'Trò chơi vận động và tổ chức thi đấu', [
    Q('Trò chơi vận động rèn?', ['Phản xạ, phối hợp, tinh thần đồng đội', 'Chỉ sức mạnh', 'Chỉ tốc độ', 'Không rèn gì'], 0, 'Trò chơi vận động (kéo co, cướp cờ, mèo đuổi chuột…) rèn nhiều tố chất.'),
    Q('Tổ chức 1 giải thi đấu cần?', ['Luật, trọng tài, lịch trình, an toàn', 'Chỉ chơi', 'Không cần luật', 'Tự do'], 0, 'Giải đấu cần luật rõ, trọng tài, lịch (vòng bảng/loại trực tiếp), đảm bảo an toàn.'),
    Q('Tinh thần fair-play?', ['Trung thực, tôn trọng đối thủ và trọng tài', 'Thắng bằng mọi giá', 'Gian lận', 'Chửi đối thủ'], 0, 'Fair-play = trung thực, tôn trọng đối thủ-trọng tài-luật chơi, chấp nhận thắng-thua.'),
    Q('Khi thua, thái độ đúng?', ['Học hỏi từ trận đấu, không nản', 'Bỏ cuộc', 'Đổ lỗi', 'Cãi trọng tài'], 0, 'Thể thao: thua là bài học. Phân tích để tiến bộ, không đổ lỗi.'),
    Q('Khi thắng?', ['Khiêm tốn, chúc mừng đối thủ', 'Khoe khoang', 'Chế giễu', 'Không bắt tay'], 0, 'Thắng cũng cần khiêm tốn và tôn trọng đối thủ — fair-play.'),
  ]),

  M(18, 'Ôn tập học kì I', [
    Q('Test Cooper đo?', ['Quãng đường chạy/đi trong 12 phút', '100m', '1km', '12km'], 0, 'Test Cooper 12 phút.'),
    Q('Xuất phát thấp dùng?', ['Bàn đạp, tư thế 3 điểm tựa', 'Đứng thẳng', 'Ngồi xổm', 'Nằm'], 0, 'Chạy ngắn.'),
    Q('Nhảy cao kiểu nằm nghiêng tiếp đất?', ['Lưng/hông', 'Đầu', 'Chân thẳng', 'Tay'], 0, 'An toàn.'),
    Q('Đẩy tạ HS nữ khoảng?', ['3 kg', '7.26 kg', '10 kg', '1 kg'], 0, 'Tạ HS THCS.'),
    Q('Chuyền bóng đá ngắn dùng?', ['Lòng trong bàn chân', 'Mu chân', 'Gót', 'Đầu gối'], 0, 'Chính xác cao.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Chạy bền nâng cao — Phân phối sức trong cự ly 1500m', [
    Q('Cự ly 1500m thuộc?', ['Chạy bền trung bình', 'Chạy ngắn', 'Chạy việt dã', 'Marathon'], 0, '1500m là cự ly bền trung bình trong điền kinh.'),
    Q('Phân phối sức 1500m?', ['Tốc độ đều, bứt cuối 200–300m', 'Hết sức từ đầu', 'Chậm hết', 'Nhanh chậm thất thường'], 0, 'Chiến thuật phổ biến: giữ tốc độ đều, dành sức bứt 200–300m cuối.'),
    Q('Hít thở khi chạy 1500m?', ['Sâu, đều, theo nhịp chân', 'Nín thở', 'Thở nhanh nông', 'Thở qua mũi đóng miệng'], 0, 'Hít thở sâu, đều, theo nhịp bước (vd 2-2 hoặc 3-3).'),
    Q('Khi đuối sức?', ['Giảm tốc nhưng không dừng, giữ nhịp', 'Đi bộ', 'Dừng nghỉ', 'Bỏ cuộc'], 0, 'Đuối sức: giảm tốc, giữ nhịp thở, dần hồi phục rồi tăng lại.'),
    Q('Sau khi về đích, nên?', ['Đi bộ thả lỏng, hít thở sâu', 'Ngồi xuống ngay', 'Uống nước đá', 'Ngừng đột ngột'], 0, 'Đi bộ thả lỏng 5–10 phút giúp tim trở về nhịp bình thường.'),
  ]),

  M(20, 'Nhảy dây — Kỹ thuật và sức bền', [
    Q('Nhảy dây rèn?', ['Sức bền, sự khéo léo, phối hợp tay-chân', 'Chỉ sức mạnh', 'Chỉ tốc độ', 'Không rèn gì'], 0, 'Nhảy dây rèn nhiều tố chất, tim phổi tốt + khéo léo + phối hợp.'),
    Q('Tư thế chuẩn bị?', ['Tay nắm cán dây, dây vắt sau, chân đứng giữa dây', 'Tay buông', 'Dây trước mặt', 'Đứng trên dây'], 0, 'Cầm 2 cán dây, dây vắt sau gót chân, sẵn sàng quay.'),
    Q('Khi nhảy?', ['Nhảy nhẹ trên đầu ngón chân, cổ tay xoay dây', 'Đáp gót mạnh', 'Cả lòng bàn chân', 'Nhảy cao'], 0, 'Nhảy nhẹ trên đầu ngón chân (forefoot), cổ tay xoay dây.'),
    Q('Số lần nhảy dây 1 phút cơ bản?', ['HS THCS ~80–120 lần/phút', '1000', '10', '500'], 0, 'HS THCS đạt ~80–120 lần/phút (nhảy đơn) là tốt.'),
    Q('Lỗi thường gặp?', ['Nhảy quá cao, cổ tay không xoay đủ', 'Nhảy thấp', 'Tay vung đều', 'Tốc độ ổn'], 0, 'Nhảy cao tốn sức; cổ tay không xoay đủ làm dây không qua chân.'),
  ]),

  M(21, 'Thể dục nhịp điệu (aerobic) — Bài đơn giản', [
    Q('Aerobic là?', ['Bài tập có nhịp điệu, kéo dài, dùng nhiều oxy', 'Tập sức nặng', 'Bài tĩnh', 'Bài yoga'], 0, 'Aerobic = tập có oxy (chạy, đạp xe, nhảy nhịp điệu), rèn tim phổi.'),
    Q('Cường độ aerobic phù hợp?', ['Vừa phải, nói chuyện được nhưng không thuộc lòng', 'Cực mạnh', 'Cực nhẹ', 'Tuỳ ý'], 0, 'Cường độ vừa: "talk test" — vẫn nói được nhưng không hát/đọc thuộc lòng.'),
    Q('Thời gian aerobic mỗi buổi?', ['≥20–30 phút', '5 phút', '2 phút', '5 giờ'], 0, 'Để có hiệu quả tim phổi: ≥20–30 phút/buổi, 3–5 buổi/tuần.'),
    Q('Bài aerobic gồm?', ['Khởi động → bài chính → hồi phục', 'Bài chính ngay', 'Hồi phục trước', 'Tuỳ ý'], 0, '3 phần: warmup + main + cooldown.'),
    Q('Lợi ích aerobic?', ['Khoẻ tim phổi, đốt mỡ, giảm stress', 'Chỉ giảm cân', 'Không có lợi', 'Mệt'], 0, 'Aerobic là loại tập tốt nhất cho tim mạch, tinh thần.'),
  ]),

  M(22, 'Bóng đá — Sút bóng và đối kháng nhóm', [
    Q('Sút bóng mu trong dùng để?', ['Sút có độ cong (cong lưỡi liềm)', 'Sút thẳng', 'Sút bổng', 'Sút yếu'], 0, 'Sút mu trong (inside curl) tạo bóng đi cong (kiểu Bend-it-like-Beckham).'),
    Q('Sút mu giữa?', ['Sút mạnh, bay thẳng', 'Bóng cong', 'Bóng yếu', 'Bóng bổng'], 0, 'Sút mu chính giữa: lực mạnh, bóng bay thẳng.'),
    Q('Vị trí điểm tiếp xúc khi sút thẳng?', ['Mu chính giữa bàn chân + chính giữa quả bóng', 'Mép', 'Trên bóng', 'Dưới bóng'], 0, 'Bóng thẳng: chân tiếp xúc chính giữa bóng để không tạo xoáy.'),
    Q('Đối kháng nhóm 3 vs 3 rèn?', ['Phối hợp, ra quyết định nhanh', 'Chỉ cá nhân', 'Đứng yên', 'Không rèn'], 0, 'Đối kháng nhóm nhỏ rèn phối hợp, ra quyết định và tinh thần đồng đội.'),
    Q('Khi không có bóng, cần?', ['Di chuyển chọn vị trí cho đồng đội chuyền', 'Đứng yên', 'Đi bộ', 'Nhìn'], 0, 'Bóng đá hiện đại: 80% thời gian không có bóng — di chuyển chọn vị trí rất quan trọng.'),
  ]),

  M(23, 'Bóng rổ — Dẫn bóng và đột phá', [
    Q('Dẫn bóng (dribble) cơ bản?', ['Vỗ bóng bằng đầu ngón tay, không nhìn xuống', 'Đẩy bóng', 'Cầm bóng chạy', 'Lăn bóng'], 0, 'Dribble: vỗ bóng nhịp nhàng bằng đầu ngón tay, ngẩng đầu quan sát.'),
    Q('Lỗi đi bộ (travel)?', ['Đi quá 2 bước mà không dẫn bóng', 'Dẫn quá nhanh', 'Chuyền', 'Ném rổ'], 0, 'Bóng rổ cho phép ≤2 bước không dẫn bóng (sau khi dừng). Bước 3 = travel.'),
    Q('Lỗi 2 lần dẫn bóng (double dribble)?', ['Cầm bóng rồi dẫn lại', 'Dẫn 2 tay luân phiên', 'Dẫn nhanh', 'Dẫn chậm'], 0, 'Đã cầm bóng (catch) rồi dẫn tiếp = phạm lỗi double dribble.'),
    Q('Đột phá lên rổ?', ['Crossover hoặc step-back qua hậu vệ rồi sút', 'Đứng yên ném', 'Chuyền cho người khác', 'Tự ném 3 điểm'], 0, 'Đột phá: crossover/cắt mặt qua hậu vệ rồi sút (layup) hoặc chuyền.'),
    Q('Layup là?', ['Lên rổ bằng 2 bước cuối + bật 1 chân', 'Sút từ xa', 'Sút 3 điểm', 'Sút tự do'], 0, 'Layup: bước 1, bước 2, bật 1 chân thuận, đưa bóng nhẹ vào rổ.'),
  ]),

  M(24, 'Bóng chuyền — Phối hợp đập-chắn', [
    Q('Đập bóng có hiệu quả khi?', ['Cao điểm bật và tiếp xúc bóng đúng lúc', 'Bật thấp', 'Tiếp bóng muộn', 'Đứng đập'], 0, 'Hiệu quả tối đa khi đập ở đỉnh bật nhảy, tiếp xúc bóng đúng "sweet spot".'),
    Q('Chắn (block) bóng cần?', ['Bật cao đúng lúc, tay vươn qua lưới', 'Nhảy chậm', 'Cúi xuống', 'Đứng yên'], 0, 'Chắn: bật cùng lúc đối phương đập, 2 tay vươn qua lưới chặn bóng.'),
    Q('Hợp lệ khi chắn?', ['Không chạm lưới, không chạm bóng phía bên đối phương trước khi họ đập', 'Chạm lưới', 'Chạm bóng trên sân đối', 'Đánh sang'], 0, 'Luật: không chạm lưới, chỉ chạm bóng khi bóng đã sang phần lưới của mình.'),
    Q('Phối hợp đập-chắn?', ['Đập trừ chắn của đối phương; phòng thủ chắn ngăn đập', 'Không liên quan', 'Cùng vai trò', 'Loại trừ'], 0, 'Cuộc đối đầu giữa đập và chắn là tâm điểm chiến thuật bóng chuyền.'),
    Q('Tinh thần đồng đội bóng chuyền?', ['Mỗi bóng cần 3 chạm + phối hợp đỡ-chuyền-đập', 'Cá nhân', '1 chạm', '5 chạm', 'Không phối hợp'], 0, 'Sơ đồ chuẩn: chạm 1 đỡ, chạm 2 chuyền 2 (setter), chạm 3 đập (chủ công).'),
  ]),

  M(25, 'Đá cầu — Đá hất và đá cầu nhóm 3 người', [
    Q('Đá hất dùng?', ['Mu hoặc lòng bàn chân, đưa cầu sang đồng đội cao', 'Đỉnh đầu', 'Đầu gối', 'Lưng'], 0, 'Đá hất = đỡ + hất cầu lên cao cho đồng đội.'),
    Q('Đá cầu nhóm 3 cần?', ['Phân vị trí, đỡ-chuyền-tấn công', 'Tự đá', 'Đứng yên', 'Tránh nhau'], 0, 'Nhóm 3: có vai trò rõ ràng (đỡ, chuyền 2, tấn công).'),
    Q('Khi cầu rơi xa?', ['Di chuyển nhanh tới vị trí, đỡ thấp', 'Đứng yên', 'Để cầu rơi', 'Gọi đồng đội'], 0, 'Di chuyển nhanh và đỡ ở vị trí thấp.'),
    Q('Tinh thần thi đấu đá cầu?', ['Vui khoẻ, phối hợp, fair-play', 'Thắng bằng mọi giá', 'Đè đối thủ', 'Khoe khoang'], 0, 'Tinh thần thể thao đặt lên hàng đầu.'),
    Q('Sức mạnh nào quan trọng nhất khi đá cầu?', ['Sức nhanh + sự khéo léo + phản xạ', 'Sức mạnh tối đa', 'Chỉ chạy nhanh', 'Chỉ nhảy cao'], 0, 'Đá cầu thiên về nhanh nhẹn, khéo léo và phản xạ hơn là sức mạnh.'),
  ]),

  M(26, 'Võ thuật cơ bản — Bài quyền số 2 và kỹ thuật tự vệ', [
    Q('Tự vệ cơ bản nhằm mục đích?', ['Bảo vệ bản thân khi bị tấn công', 'Tấn công người khác', 'Bắt nạt', 'Khoe khoang'], 0, 'Tự vệ chỉ dùng để bảo vệ khi bị tấn công, không phải để gây sự.'),
    Q('Nguyên tắc tự vệ?', ['Tránh xung đột > đối thoại > tự vệ phản công khi không tránh được', 'Tấn công ngay', 'Khiêu khích', 'Đánh đau'], 0, 'Ưu tiên: tránh xung đột → đối thoại → tự vệ khi buộc phải.'),
    Q('Khi bị kẹp cổ tay, cách thoát?', ['Xoay tay theo hướng ngón cái đối thủ (chỗ yếu nhất)', 'Kéo thẳng', 'Đẩy ngược', 'Không thoát được'], 0, 'Ngón cái là điểm yếu của bàn tay — xoay theo hướng ngón cái dễ thoát.'),
    Q('Đòn thường dùng tự vệ?', ['Đấm cào, đá thẳng vào vùng yếu (gối, mu bàn chân)', 'Đá đầu', 'Đấm ngực', 'Vật ngã'], 0, 'Tự vệ thực tế: tấn công vùng yếu (gối, mu bàn chân, mắt cá) để thoát.'),
    Q('Sau khi thoát, nên?', ['Chạy tìm người lớn/cảnh sát, không nán lại', 'Đánh tiếp', 'Quay lại trêu', 'Đứng nhìn'], 0, 'Mục đích tự vệ là thoát thân — tìm sự giúp đỡ ngay sau khi thoát.'),
  ]),

  M(27, 'Thể dục dụng cụ — Bóng (medicine ball), tạ nhẹ', [
    Q('Bóng tạ (medicine ball) dùng để?', ['Tập sức mạnh, sức bền, chức năng', 'Đá bóng', 'Ném rổ', 'Trang trí'], 0, 'Medicine ball: bóng nặng dùng tập sức mạnh và chức năng (functional).'),
    Q('Bài tập medicine ball cơ bản?', ['Đẩy ngực, ném cao, lăn bóng', 'Chỉ cầm', 'Không có bài', 'Ngồi lên bóng'], 0, 'Đẩy ngực (chest pass), ném lên cao, lăn bóng làm bụng…'),
    Q('Tạ nhẹ phù hợp HS THCS?', ['~1–3 kg', '20 kg', '50 kg', '100 kg'], 0, 'HS THCS tập tạ rất nhẹ (1–3 kg), tập đúng kỹ thuật là chính.'),
    Q('Nguyên tắc khi tập tạ?', ['Đúng kỹ thuật, nâng nhẹ trước, có người hỗ trợ', 'Nâng nặng ngay', 'Tự do', 'Không cần kỹ thuật'], 0, 'Tập tạ ưu tiên kỹ thuật, tăng tải từ từ, có spotter.'),
    Q('Tập tạ quá nặng ở tuổi vị thành niên?', ['Có thể ảnh hưởng sự phát triển xương', 'Tốt', 'Không sao', 'Khoẻ'], 0, 'Tạ quá nặng tuổi đang phát triển có thể ảnh hưởng xương, sụn tăng trưởng.'),
  ]),

  M(28, 'Bóng đá — Phòng ngự khu vực vs phòng ngự kèm người', [
    Q('Phòng ngự kèm người?', ['Mỗi hậu vệ kèm 1 đối thủ cụ thể', 'Kèm khu vực', 'Không kèm', 'Đứng yên'], 0, 'Man-marking: mỗi cầu thủ phòng ngự bám 1 đối thủ.'),
    Q('Phòng ngự khu vực?', ['Mỗi cầu thủ phụ trách 1 khu vực, bóng/người vào thì kèm', 'Kèm người', 'Không phòng', 'Tự do'], 0, 'Zone defense: trách nhiệm theo vùng, không theo người.'),
    Q('Ưu điểm phòng ngự khu vực?', ['Giữ đội hình, ít mất sức', 'Khó tổ chức', 'Tốn nhiều người', 'Dễ bị xé'], 0, 'Zone giữ đội hình tốt, ít mất sức chạy theo người.'),
    Q('Ưu điểm phòng ngự kèm người?', ['Áp lực cao, cản trở trực tiếp đối phương', 'Mất đội hình', 'Tốn ít sức', 'Dễ'], 0, 'Man-marking tạo áp lực, hạn chế đối thủ trực tiếp.'),
    Q('Phòng ngự hỗn hợp?', ['Kết hợp khu vực + kèm người tuỳ tình huống', 'Không thể', 'Chỉ 1 kiểu', 'Tự do'], 0, 'Bóng đá hiện đại: hybrid — chủ yếu khu vực nhưng kèm người ở vị trí then chốt.'),
  ]),

  M(29, 'Kiểm tra giữa kì II — Chạy 800m và bài quyền', [
    Q('Chạy 800m thuộc?', ['Chạy bền trung bình', 'Chạy ngắn', 'Chạy việt dã', 'Marathon'], 0, '800m là cự ly bền trung bình.'),
    Q('Chiến thuật chạy 800m?', ['Tốc độ đều, bứt 200m cuối', 'Hết sức từ đầu', 'Đi bộ', 'Tuỳ ý'], 0, 'Tương tự 1500m: phân phối đều, bứt cuối.'),
    Q('Bài quyền yêu cầu?', ['Nhớ chuẩn động tác, mạnh dứt khoát, đúng tấn', 'Tuỳ ý', 'Quên', 'Mềm yếu'], 0, 'Bài quyền chấm điểm: nhớ chuẩn, lực dứt khoát, tấn vững.'),
    Q('Đánh giá thể lực HS?', ['Sức nhanh + sức bền + sức mạnh + khéo léo', 'Chỉ sức nhanh', 'Chỉ sức mạnh', 'Tuỳ ý'], 0, 'Đánh giá đa chiều: chạy 60m (nhanh) + 800m (bền) + bật xa (sức mạnh) + khéo léo.'),
    Q('Trước kiểm tra, cần?', ['Ăn nhẹ trước 2h, ngủ đủ, khởi động kỹ', 'Ăn no', 'Thức khuya', 'Tập kiệt sức'], 0, 'Chuẩn bị: ăn nhẹ, ngủ đủ, khởi động kỹ.'),
  ]),

  M(30, 'Bóng rổ — Thi đấu nhóm 3 vs 3', [
    Q('Bóng rổ 3x3 chơi?', ['1 rổ, 3 vs 3, thời gian ngắn', '2 rổ', '5 vs 5', 'Không giới hạn'], 0, '3x3: nhanh, 1 rổ, 10 phút hoặc đến 21 điểm.'),
    Q('Lợi ích 3x3 so với 5x5?', ['Nhiều bóng hơn, không gian rộng', 'Khó hơn', 'Ít vận động', 'Không có lợi'], 0, '3x3 mỗi người chạm bóng nhiều, không gian rộng, vận động cao.'),
    Q('Chiến thuật 3x3?', ['Pick & Roll, give and go', 'Tự đi 1 mình', 'Đứng yên', 'Tránh đồng đội'], 0, 'Pick & Roll (chặn-cuốn) và give-and-go là 2 chiến thuật cơ bản 3x3.'),
    Q('Tinh thần đồng đội?', ['Chuyền cho người tốt vị trí, không ích kỷ', 'Cá nhân', 'Tự ném mãi', 'Tránh đồng đội'], 0, 'Bóng rổ là môn đồng đội — chuyền cho người mở.'),
    Q('Sau trận đấu?', ['Bắt tay, chúc mừng đối thủ', 'Cãi vã', 'Bỏ về', 'Không bắt tay'], 0, 'Truyền thống thể thao: bắt tay cả thắng lẫn thua.'),
  ]),

  M(31, 'Đi bộ thể thao — Race walking', [
    Q('Đi bộ thể thao khác chạy ở?', ['Luôn có 1 chân chạm đất, chân trước thẳng khi chạm', 'Không khác', 'Đi chậm hơn', 'Đi đều'], 0, 'Race walking: 1 chân chạm đất liên tục + chân trước phải thẳng từ lúc chạm đến khi qua trục thẳng đứng.'),
    Q('Vi phạm luật đi bộ?', ['"Bay" (loss of contact) hoặc chân trước gập', 'Đi chậm', 'Vung tay', 'Đi dài bước'], 0, '2 lỗi chính: bay (cả 2 chân rời đất) hoặc chân trước gập gối.'),
    Q('Cự ly đi bộ phổ biến?', ['20km, 50km (Olympic)', '100m', '1km', '500m'], 0, 'Olympic: 20km nam-nữ, 50km nam (trước 2024).'),
    Q('Đi bộ thể thao rèn?', ['Sức bền, kỹ thuật, tâm lý', 'Chỉ tốc độ', 'Chỉ sức mạnh', 'Không rèn'], 0, 'Race walking: bền + kỹ thuật rất khắt khe + tâm lý kiểm soát tốc độ.'),
    Q('HS THCS có thể tập đi bộ?', ['Có — phù hợp tất cả lứa tuổi, an toàn', 'Không', 'Chỉ người lớn', 'Chỉ VĐV'], 0, 'Đi bộ rất phù hợp HS — ít chấn thương, rèn bền tốt.'),
  ]),

  M(32, 'Trò chơi dân gian — Kéo co, đẩy gậy', [
    Q('Kéo co là trò chơi?', ['Dân gian VN, 2 đội kéo dây ngược chiều', 'Hiện đại', 'Nước ngoài', 'Cờ vua'], 0, 'Kéo co là trò chơi dân gian phổ biến ở VN, được UNESCO công nhận.'),
    Q('Kỹ thuật kéo co?', ['Trùng gối thấp, lưng thẳng, tay nắm dây cao', 'Đứng thẳng', 'Cúi gập', 'Ngồi'], 0, 'Tư thế: trùng gối thấp (dùng lực chân), lưng thẳng, kéo dây ngang vai.'),
    Q('Đẩy gậy là?', ['Trò chơi 2 người dùng gậy đẩy nhau khỏi vòng', 'Đá bóng', 'Cờ', 'Đua'], 0, 'Đẩy gậy: 2 người cầm 2 đầu 1 gậy, đẩy đối thủ ra khỏi vòng tròn.'),
    Q('Lợi ích trò chơi dân gian?', ['Phát triển sức mạnh, đồng đội, giữ văn hoá', 'Mất thời gian', 'Vô bổ', 'Lạc hậu'], 0, 'Trò chơi dân gian rèn thể chất + đồng đội + lưu giữ văn hoá truyền thống.'),
    Q('Tinh thần khi chơi?', ['Vui vẻ, fair-play, không ăn thua', 'Thắng bằng mọi giá', 'Lừa dối', 'Gian lận'], 0, 'Trò chơi dân gian đề cao vui và đồng đội hơn thắng-thua.'),
  ]),

  M(33, 'Dinh dưỡng và phục hồi cho thể thao', [
    Q('Trước khi tập 1–2 giờ nên ăn?', ['Carb (cơm, mì, bánh mì) + ít protein', 'Đồ chiên', 'Ăn no', 'Nhịn ăn'], 0, 'Trước tập: carb để có năng lượng + ít protein, tránh đồ khó tiêu.'),
    Q('Trong khi tập?', ['Uống nước đều đặn, ngụm nhỏ', 'Không uống', 'Uống nước ngọt', 'Uống nhiều một lúc'], 0, 'Uống nước đều đặn từng ngụm nhỏ để bù mất nước.'),
    Q('Sau tập, ăn?', ['Carb + protein trong 30–60 phút (cửa sổ vàng)', 'Không ăn', 'Chỉ đường', 'Đồ ăn nhanh'], 0, 'Cửa sổ 30–60 phút sau tập là tốt nhất để phục hồi: carb + protein.'),
    Q('Nước uống cho thể thao?', ['Nước lọc; nước điện giải với tập dài >1h', 'Nước ngọt', 'Nước có cồn', 'Cà phê'], 0, 'Nước lọc đủ với hầu hết buổi tập; tập >1h hoặc nắng nóng cần thêm điện giải.'),
    Q('Ngủ và phục hồi?', ['Ngủ đủ 8–10h cho HS, cơ phục hồi khi ngủ', 'Ngủ ít vẫn ổn', '4–5h là đủ', 'Càng ít càng tốt'], 0, 'HS THCS cần 8–10h ngủ, cơ thể phục hồi và phát triển khi ngủ sâu.'),
  ]),

  M(34, 'Lập kế hoạch luyện tập cá nhân', [
    Q('Kế hoạch luyện tập cần?', ['Mục tiêu cụ thể, lịch trình, đánh giá', 'Tự do', 'Tập tuỳ ý', 'Sao chép người khác'], 0, 'Kế hoạch tốt: SMART goal + lịch trình + đánh giá định kỳ.'),
    Q('SMART là?', ['Specific, Measurable, Achievable, Relevant, Time-bound', 'Speed, Mass…', 'Strong-Move', 'Không có'], 0, 'SMART: cụ thể, đo được, khả thi, liên quan, có thời hạn.'),
    Q('Tần suất tập phù hợp HS?', ['3–5 buổi/tuần, mỗi buổi 45–60 phút', 'Mỗi ngày 5h', '1 buổi/tháng', 'Không tập'], 0, 'WHO khuyến cáo: hoạt động thể chất 60 phút/ngày, ít nhất 3–5 buổi rèn luyện chính.'),
    Q('Nguyên tắc tăng tải?', ['Tăng dần (10% mỗi tuần)', 'Tăng 100% ngay', 'Không tăng', 'Tăng ngẫu nhiên'], 0, 'Tăng tải từ từ (~10%/tuần) để cơ thể thích nghi, tránh chấn thương.'),
    Q('Đánh giá tiến bộ qua?', ['Đo định kỳ: chạy 60m, 1km, hít xà, bật xa', 'Nhìn gương', 'Hỏi bạn', 'Không cần đánh giá'], 0, 'Đo định kỳ các test chuẩn để theo dõi tiến bộ khách quan.'),
  ]),

  M(35, 'Tổng kết và biểu diễn cuối năm', [
    Q('Mục tiêu GDTC THCS?', ['Phát triển toàn diện thể chất, tinh thần, kỹ năng', 'Chỉ vô địch', 'Chỉ vui chơi', 'Chỉ tiêu khiển'], 0, 'GDTC phát triển toàn diện, không chỉ thi đấu thành tích.'),
    Q('Test thể lực HS THCS cuối năm?', ['Chạy 60m, chạy bền 800m/1000m, bật xa, hít xà, nằm sấp chống đẩy', 'Chỉ chạy 100m', 'Chỉ nhảy', 'Không có test'], 0, 'Test chuẩn đánh giá: sức nhanh, bền, mạnh, mềm dẻo, sức chịu đựng.'),
    Q('Tập thể dục đều đặn giúp?', ['Cải thiện sức khoẻ + học tập + tinh thần', 'Mất thời gian', 'Chỉ tốt khi vô địch', 'Không có lợi'], 0, 'Nghiên cứu: tập thể dục cải thiện trí nhớ, tập trung, tâm trạng và giấc ngủ.'),
    Q('Sau khi rời trường, nên?', ['Duy trì thói quen vận động suốt đời', 'Bỏ tập', 'Chỉ khi có thời gian', 'Khi nào thích'], 0, 'GDTC tạo thói quen vận động suốt đời — chìa khoá sức khoẻ dài hạn.'),
    Q('Tinh thần thể thao đẹp?', ['Fair-play, kiên trì, đồng đội, tôn trọng', 'Ăn thua đủ', 'Cá nhân', 'Khoe khoang'], 0, 'Tinh thần thể thao: fair-play, kiên trì, đồng đội, tôn trọng — giá trị cốt lõi.'),
  ]),
];

export const S8GDTC_SCENARIOS = indexBy(S8GDTC_WEEKS);
