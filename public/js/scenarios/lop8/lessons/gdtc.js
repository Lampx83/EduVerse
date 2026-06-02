// ============================================================
// Lớp 8 · GDTC — Lý thuyết + Ví dụ 35 tuần (GDPT 2018)
// Điền kinh · Thể dục · Bóng · Võ · Trò chơi vận động.
// Key: "S8GDTC-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S8GDTC_LESSONS = {
  'S8GDTC-w01-quiz': L(
    'Chạy ngắn — Kỹ thuật chạy 60m, 100m',
    'Chạy ngắn yêu cầu tốc độ tối đa trong thời gian ngắn — cần kỹ thuật xuất phát và tăng tốc tốt.',
    ['Hiểu 4 giai đoạn chạy ngắn.', 'Tư thế xuất phát thấp.', 'Đánh tay đúng cách.'],
    [
      { h: '4 giai đoạn' },
      { ul: ['Xuất phát (thấp).', 'Tăng tốc (15-20m đầu).', 'Chạy tốc độ tối đa.', 'Về đích (lao thân).'] },
      { h: 'Xuất phát thấp' },
      { p: 'Hai tay chống đất rộng bằng vai. Khẩu lệnh: "Vào chỗ - Sẵn sàng - Chạy".' },
      { h: 'Đánh tay' },
      { p: 'Khuỷu 90°, đánh thẳng tới-lui, không đánh ngang. Lực mạnh giúp đẩy người.' },
    ],
    [
      { q: 'Vì sao chạy ngắn dùng xuất phát thấp?', a: 'Để có lực đẩy mạnh và tăng tốc nhanh hơn xuất phát cao.' },
      { q: 'Sai lầm phổ biến khi chạy ngắn?', a: 'Đánh tay ngang, ngẩng đầu, vai gồng cứng — làm chậm tốc độ.' },
    ]
  ),

  'S8GDTC-w02-quiz': L(
    'Chạy 200m — Kỹ thuật chạy đường vòng',
    '200m vừa cần tốc độ vừa cần kỹ thuật vào cua.',
    ['Hiểu phân phối sức.', 'Kỹ thuật chạy đường cong.', 'Nghiêng người vào cua.'],
    [
      { h: 'Đặc điểm 200m' },
      { p: 'Nửa đầu là đường cong (vào cua), nửa sau là đường thẳng. Cần kỹ thuật chuyển làn mượt.' },
      { h: 'Chạy đường cong' },
      { ul: ['Nghiêng người vào tâm vòng (~5-10°).', 'Tay phải đánh mạnh hơn tay trái.', 'Bước chân phải dài hơn chân trái.'] },
      { h: 'Phân phối sức' },
      { p: '100m đầu chạy ~90% sức; 100m sau dồn lực về đích.' },
    ],
    [
      { q: 'Khi chạy đường cong nghiêng về phía nào?', a: 'Vào tâm vòng (bên trong).' },
      { q: 'Tại sao 200m không dùng xuất phát cao?', a: 'Vẫn dùng xuất phát thấp như 100m vì cần tăng tốc nhanh.' },
    ]
  ),

  'S8GDTC-w03-quiz': L(
    'Chạy bền — Phương pháp Cooper',
    'Chạy bền rèn sức bền tim phổi. Test Cooper 12 phút là phương pháp đo tiêu chuẩn.',
    ['Hiểu chạy bền.', 'Biết test Cooper.', 'Đánh giá thể lực.'],
    [
      { h: 'Chạy bền' },
      { p: 'Là chạy với tốc độ ổn định trong thời gian dài. Phát triển sức bền tim phổi.' },
      { h: 'Test Cooper' },
      { p: 'Chạy hết sức trong 12 phút — đo quãng đường chạy được. Càng nhiều km, sức bền càng tốt.' },
      { h: 'Tiêu chuẩn (nam 13-14 tuổi)' },
      { ul: ['Xuất sắc: >2400m.', 'Tốt: 2200-2400m.', 'Trung bình: 1900-2200m.', 'Yếu: <1900m.'] },
      { h: 'Cách rèn' },
      { p: 'Chạy đều 20-30 phút, 3 lần/tuần. Tăng dần thời gian.' },
    ],
    [
      { q: 'Sai lầm khi mới chạy bền?', a: 'Chạy quá nhanh ban đầu, hết sức giữa chừng. Phải chạy đều.' },
      { q: 'Test Cooper kéo dài bao lâu?', a: '12 phút chạy hết sức.' },
    ]
  ),

  'S8GDTC-w04-quiz': L(
    'Bài thể dục liên hoàn nâng cao',
    'Bài thể dục liên hoàn rèn dẻo dai, phối hợp toàn thân.',
    ['Học các động tác.', 'Phối hợp nhịp nhàng.', 'Biểu diễn theo nhạc.'],
    [
      { h: 'Cấu trúc bài' },
      { ul: ['Vươn thở.', 'Tay.', 'Chân.', 'Lườn.', 'Bụng.', 'Toàn thân.', 'Nhảy.', 'Điều hoà.'] },
      { h: 'Yêu cầu' },
      { ul: ['Đúng kỹ thuật.', 'Nhịp đếm 8 nhịp.', 'Phối hợp tay-chân-thân nhịp nhàng.'] },
      { h: 'Tác dụng' },
      { p: 'Phát triển toàn diện sức mạnh, dẻo dai, khéo léo và phối hợp.' },
    ],
    [
      { q: 'Mỗi động tác liên hoàn đếm mấy nhịp?', a: '8 nhịp (4 thời 2x4).' },
      { q: 'Tác dụng chính của bài liên hoàn?', a: 'Phát triển toàn diện — không chuyên 1 nhóm cơ.' },
    ]
  ),

  'S8GDTC-w05-quiz': L(
    'Nhảy cao — Kỹ thuật nằm nghiêng',
    'Nhảy cao kiểu nằm nghiêng là kỹ thuật cơ bản trước khi học kiểu lưng qua xà.',
    ['Hiểu 4 giai đoạn.', 'Tư thế vào xà.', 'Tiếp đất an toàn.'],
    [
      { h: '4 giai đoạn' },
      { ul: ['Chạy đà (5-7 bước).', 'Giậm nhảy (chân thuận).', 'Bay trên không (nằm nghiêng).', 'Tiếp đất.'] },
      { h: 'Tư thế nằm nghiêng' },
      { p: 'Khi qua xà, người nằm nghiêng song song xà; chân lăng vắt qua trước, chân giậm gập gối qua sau.' },
      { h: 'Tiếp đất' },
      { p: 'Tiếp đất bằng chân lăng rồi chân giậm; lăn người nếu cần.' },
    ],
    [
      { q: 'Giậm nhảy bằng chân nào?', a: 'Chân thuận (chân khoẻ hơn).' },
      { q: 'Vì sao gọi "nằm nghiêng"?', a: 'Vì người nghiêng song song với xà khi qua.' },
    ]
  ),

  'S8GDTC-w06-quiz': L(
    'Nhảy xa — Kiểu ưỡn thân',
    'Nhảy xa kiểu ưỡn thân: trên không ưỡn thân ra sau, giữ thăng bằng.',
    ['Hiểu 4 giai đoạn.', 'Kỹ thuật ưỡn thân.', 'Tiếp đất an toàn.'],
    [
      { h: '4 giai đoạn' },
      { ul: ['Chạy đà.', 'Giậm nhảy.', 'Bay trên không (ưỡn thân).', 'Tiếp đất.'] },
      { h: 'Ưỡn thân' },
      { p: 'Sau khi rời ván, ưỡn thân ra sau, hai tay đưa cao ra sau — giữ thăng bằng và kéo dài đường bay.' },
      { h: 'Tiếp đất' },
      { p: 'Gập gối, đưa hai chân duỗi thẳng về trước, tiếp đất bằng gót — lao thân về trước để không ngã sau.' },
    ],
    [
      { q: 'Vì sao gọi "ưỡn thân"?', a: 'Vì sau khi rời ván, lưng cong ra sau — như cánh cung.' },
      { q: 'Tiếp đất bằng phần nào?', a: 'Gót chân trước, lao thân về trước.' },
    ]
  ),

  'S8GDTC-w07-quiz': L(
    'Đẩy tạ — Kỹ thuật cơ bản',
    'Đẩy tạ là môn ném đặc trưng — cần kỹ thuật đúng để tránh chấn thương.',
    ['Hiểu cách cầm tạ.', 'Tư thế xuất phát.', 'Động tác đẩy.'],
    [
      { h: 'Cầm tạ' },
      { p: 'Đặt tạ lên đầu ngón tay (gần lòng), áp vào cổ — không cầm như ném bóng.' },
      { h: 'Tư thế xuất phát' },
      { p: 'Đứng quay lưng hướng đẩy, chân thuận sau, chân yếu trước, người gập về sau.' },
      { h: 'Động tác đẩy' },
      { ul: ['Xoay hông và thân.', 'Duỗi chân giậm.', 'Đẩy mạnh tay đưa tạ ra trước-lên.', 'Góc đẩy ~40-45°.'] },
      { note: 'KHÔNG ném tạ như bóng — dễ chấn thương khớp vai. Phải đẩy.' },
    ],
    [
      { q: 'Tạ HS dùng nặng bao nhiêu?', a: '3-4 kg cho HS THCS.' },
      { q: 'Lực đẩy chính từ đâu?', a: 'Từ chân và hông, không phải tay.' },
    ]
  ),

  'S8GDTC-w08-quiz': L(
    'Đá cầu — Đá tâng và đỡ cầu nhóm',
    'Đá cầu nâng cao: tâng nhiều và đỡ cầu nhóm 3 người.',
    ['Tâng cầu đùi 30+.', 'Đỡ cầu đối phương.', 'Phối hợp nhóm.'],
    [
      { h: 'Tâng cầu đùi' },
      { p: 'Dùng đùi tâng cầu liên tục. HS lớp 8: mục tiêu 30+ lần.' },
      { h: 'Đỡ cầu' },
      { ul: ['Đỡ bằng đùi: cầu cao.', 'Đỡ bằng má bàn chân: cầu thấp.', 'Đỡ ngực: cầu rất cao.'] },
      { h: 'Đá nhóm 3' },
      { p: '3 người chuyền cầu vòng tròn. Mỗi người 1 chạm rồi chuyền — rèn phản xạ và phối hợp.' },
    ],
    [
      { q: 'Đá cầu là môn truyền thống của nước nào?', a: 'Việt Nam, Trung Quốc — nhưng VN nổi tiếng nhất.' },
      { q: 'Phối hợp nhóm 3 cần gì?', a: 'Phản xạ nhanh, đá nhẹ, gọi tên người nhận.' },
    ]
  ),

  'S8GDTC-w09-quiz': L(
    'Bóng đá — Kỹ thuật chuyền bóng',
    'Chuyền bóng là kỹ năng cơ bản nhất — 80% thời gian trận đấu.',
    ['Chuyền má trong.', 'Chuyền bóng dài bằng mu chính diện.', 'Chính xác.'],
    [
      { h: 'Chuyền má trong' },
      { p: 'Dùng má trong bàn chân — chuyền ngắn dưới 10m, chính xác cao.' },
      { h: 'Chuyền dài' },
      { p: 'Dùng mu chính diện hoặc mu ngoài — chuyền bóng dài 20-30m.' },
      { h: 'Yếu tố chuyền tốt' },
      { ul: ['Đầu ngẩng, quan sát đồng đội.', 'Lực vừa đủ — không quá mạnh/nhẹ.', 'Hướng vào trước mặt người nhận để họ nhận trong di chuyển.'] },
    ],
    [
      { q: 'Chuyền má trong xa được bao nhiêu?', a: 'Tối đa ~15m. Xa hơn dùng mu chính diện.' },
      { q: 'Vì sao đầu phải ngẩng khi chuyền?', a: 'Để quan sát đồng đội và đối thủ.' },
    ]
  ),

  'S8GDTC-w10-quiz': L(
    'Bóng đá — Chiến thuật cơ bản và sơ đồ',
    'Sơ đồ chiến thuật phân vai trò cho 11 cầu thủ.',
    ['Biết các sơ đồ phổ biến.', 'Vai trò các vị trí.', 'Chuyển đổi công-thủ.'],
    [
      { h: 'Các sơ đồ phổ biến' },
      { ul: ['4-4-2: cân bằng, dễ chơi.', '4-3-3: tấn công.', '5-3-2: phòng ngự.', '3-5-2: kiểm soát hậu vệ.'] },
      { h: 'Vai trò' },
      { ul: ['Thủ môn: cản phá.', 'Hậu vệ: phòng ngự.', 'Tiền vệ: nối tấn công-phòng ngự.', 'Tiền đạo: ghi bàn.'] },
      { h: 'Chuyển công-thủ' },
      { p: 'Khi mất bóng: lùi nhanh, gây áp lực ngay. Khi có bóng: dâng cao tấn công nhanh.' },
    ],
    [
      { q: 'Sơ đồ tấn công mạnh nhất phổ biến?', a: '4-3-3 hoặc 3-4-3.' },
      { q: 'Pep Guardiola nổi tiếng với chiến thuật gì?', a: 'Tiki-taka — chuyền ngắn, kiểm soát bóng.' },
    ]
  ),

  'S8GDTC-w11-quiz': L(
    'Bóng rổ — Kỹ thuật chuyền 2 tay trước ngực',
    'Chuyền 2 tay trước ngực là chuyền cơ bản nhất bóng rổ.',
    ['Cách cầm bóng.', 'Động tác chuyền.', 'Khoảng cách phù hợp.'],
    [
      { h: 'Cầm bóng' },
      { p: '2 tay 2 bên, ngón tay xoè rộng ôm bóng, bóng ngang ngực.' },
      { h: 'Chuyền' },
      { ul: ['Hơi gập gối lấy đà.', 'Đẩy bóng từ ngực ra, duỗi tay.', 'Cổ tay quay xuống tạo xoáy.', 'Hướng bóng tới ngực người nhận.'] },
      { h: 'Khoảng cách' },
      { p: '3-7m. Xa hơn dùng chuyền 1 tay (over-the-head) hoặc bật đất (bounce pass).' },
    ],
    [
      { q: 'Chuyền 2 tay trước ngực xa bao nhiêu hiệu quả?', a: '3-7m.' },
      { q: 'Khi đối thủ áp sát — chuyền kiểu nào?', a: 'Bounce pass (bật đất) hoặc 1 tay từ vai.' },
    ]
  ),

  'S8GDTC-w12-quiz': L(
    'Bóng rổ — Kỹ thuật ném rổ',
    'Ném rổ là kỹ thuật ghi điểm chính — cần luyện tinh tế.',
    ['Tư thế chuẩn.', 'Động tác ném.', 'Vung tay theo.'],
    [
      { h: 'Tư thế chuẩn (BEEF)' },
      { ul: ['B - Balance: thăng bằng, chân rộng bằng vai.', 'E - Eyes: mắt nhìn vào vành rổ.', 'E - Elbow: khuỷu tay thẳng, hướng rổ.', 'F - Follow through: vung tay theo sau ném.'] },
      { h: 'Động tác' },
      { ul: ['Gập gối lấy đà.', 'Đẩy bóng lên-ra trước.', 'Đầu ngón tay cuối cùng chạm bóng.', 'Bóng xoáy ngược (backspin).'] },
      { h: 'Vung tay theo' },
      { p: 'Sau khi ném, tay duỗi thẳng, cổ tay gập xuống — như "vẫy chào" rổ.' },
    ],
    [
      { q: 'BEEF là gì?', a: '4 yếu tố ném rổ: Balance, Eyes, Elbow, Follow through.' },
      { q: 'Tại sao bóng cần xoáy ngược?', a: 'Bóng xoáy ngược dễ "ăn" vành — nếu chạm chỉ ngược nhẹ vẫn rơi vào.' },
    ]
  ),

  'S8GDTC-w13-quiz': L(
    'Bóng chuyền — Kỹ thuật chuyền cao 2 tay',
    'Chuyền cao 2 tay (setting) là kỹ thuật chính của chuyền 2.',
    ['Cầm bóng đúng.', 'Đẩy chuyền.', 'Hướng đến tay đập.'],
    [
      { h: 'Tư thế' },
      { p: 'Đứng dưới bóng. Hai tay đưa lên ngang trán, ngón tay xoè như hình tam giác (10 ngón tạo "cái vợt").' },
      { h: 'Tiếp xúc' },
      { p: 'Tiếp xúc bằng đầu ngón tay (không lòng bàn tay) — chỉ chạm ngắn rồi đẩy.' },
      { h: 'Đẩy chuyền' },
      { p: 'Duỗi chân + tay đồng thời, đẩy bóng lên cao, hướng về phía tay đập (vị trí 4).' },
    ],
    [
      { q: 'Tiếp xúc bóng bằng phần nào?', a: 'Đầu ngón tay — không phải lòng tay.' },
      { q: 'Lỗi "cầm bóng" trong bóng chuyền là gì?', a: 'Cầm/giữ bóng quá lâu — phải đẩy chuyền ngay, không dừng.' },
    ]
  ),

  'S8GDTC-w14-quiz': L(
    'Bóng chuyền — Phát bóng và đập bóng',
    'Phát mở đầu game; đập là vũ khí ghi điểm.',
    ['Phát thấp tay/cao tay.', 'Đập bóng cơ bản.', 'Phối hợp 3 chạm.'],
    [
      { h: 'Phát bóng' },
      { ul: ['Phát thấp tay: vung tay dưới, đập bóng lên — dễ học.', 'Phát cao tay: vung tay trên đầu — mạnh hơn nhưng khó.'] },
      { h: 'Đập bóng' },
      { ul: ['Chạy đà 3 bước.', 'Giậm 2 chân nhảy cao.', 'Vung tay đập mạnh bóng xuống sân đối phương.'] },
      { h: 'Phối hợp 3 chạm' },
      { p: 'Chạm 1: đỡ. Chạm 2: chuyền. Chạm 3: đập. Mỗi đội chỉ 3 chạm.' },
    ],
    [
      { q: 'Mấy chạm tối đa mỗi đội?', a: '3 chạm.' },
      { q: 'Đập bóng nhảy bằng mấy chân?', a: '2 chân — để nhảy cao và thăng bằng.' },
    ]
  ),

  'S8GDTC-w15-quiz': L(
    'Võ thuật cơ bản — Bài quyền số 1',
    'Võ thuật cơ bản rèn ý chí, sức khoẻ và tự vệ.',
    ['Tư thế cơ bản.', 'Đòn tay-chân cơ bản.', 'Bài quyền số 1.'],
    [
      { h: 'Tư thế cơ bản' },
      { ul: ['Tấn (đứng): tấn ngang, tấn xuôi, tấn chéo.', 'Trung tâm trọng lực thấp.', 'Cánh tay che ngực.'] },
      { h: 'Đòn cơ bản' },
      { ul: ['Đấm thẳng (jab, cross).', 'Đá thẳng, đá vòng.', 'Gạt (đỡ trên, đỡ dưới).'] },
      { h: 'Bài quyền số 1' },
      { p: 'Chuỗi liên hoàn 10-15 động tác kết hợp gạt-đấm-đá — rèn ghi nhớ và phối hợp.' },
      { note: 'Võ thuật không phải để gây sự — mà để tự vệ và rèn nhân cách.' },
    ],
    [
      { q: 'Tấn là gì?', a: 'Tư thế đứng (chân) cơ bản của võ thuật.' },
      { q: 'Mục đích chính của học võ?', a: 'Rèn sức khoẻ, ý chí, tự vệ — không phải để bắt nạt.' },
    ]
  ),

  'S8GDTC-w16-quiz': L(
    'Thể dục dụng cụ — Xà đơn, lộn nhào cơ bản',
    'Thể dục dụng cụ phát triển sức mạnh, dẻo dai, can đảm.',
    ['Bám xà đơn.', 'Đu xà.', 'Lộn nhào sấp.'],
    [
      { h: 'Xà đơn' },
      { ul: ['Bám xà: tay nắm thuận chiều, rộng bằng vai.', 'Treo người: hai tay duỗi thẳng, toàn thân buông.', 'Đu xà: kéo người lên đến cằm.'] },
      { h: 'Số lần đu xà' },
      { p: 'HS lớp 8 nam: mục tiêu 5-10 cái. Nữ: 1-3 cái (hoặc treo 10-20s).' },
      { h: 'Lộn nhào sấp' },
      { ul: ['Đứng thẳng, gập người về trước.', 'Hai tay chống đất.', 'Đẩy mông qua đầu, lăn nhanh xuống lưng-mông.'] },
    ],
    [
      { q: 'Sai lầm khi đu xà?', a: 'Đu bằng đà (đu người trước), không phải bằng tay → không tính.' },
      { q: 'Lộn nhào tiếp đất bằng phần nào?', a: 'Mông, rồi đứng lên — không phải đầu.' },
    ]
  ),

  'S8GDTC-w17-quiz': L(
    'Trò chơi vận động và tổ chức thi đấu',
    'Trò chơi vận động vừa rèn sức vừa rèn tinh thần đồng đội.',
    ['Tham gia trò chơi.', 'Hiểu luật chơi.', 'Tổ chức trận đấu nhỏ.'],
    [
      { h: 'Trò chơi phổ biến' },
      { ul: ['Cướp cờ.', 'Mèo đuổi chuột.', 'Kéo co.', 'Bóng chuyền hơi nước.'] },
      { h: 'Yếu tố' },
      { ul: ['Tuân thủ luật.', 'Fair-play — không gian lận.', 'Tinh thần đồng đội.', 'Chấp nhận thắng-thua.'] },
      { h: 'Tổ chức thi đấu nhỏ' },
      { ul: ['Chia đội cân bằng.', 'Trọng tài công bằng.', 'Tính điểm rõ ràng.'] },
    ],
    [
      { q: 'Fair-play là gì?', a: 'Tinh thần chơi đẹp — không gian lận, tôn trọng đối thủ.' },
      { q: 'Tổ chức trận đấu cần ai?', a: 'Trọng tài + đội thi đấu + người tính điểm + cổ vũ.' },
    ]
  ),

  'S8GDTC-w18-quiz': L(
    'Ôn tập học kì I',
    'Hệ thống nội dung HK1: điền kinh, các môn bóng, võ, thể dục.',
    ['Hệ thống điền kinh.', 'Các môn bóng.', 'Võ và thể dục dụng cụ.'],
    [
      { h: 'Điền kinh' },
      { ul: ['Chạy ngắn (60/100/200m).', 'Chạy bền (Cooper).', 'Nhảy cao, nhảy xa.', 'Đẩy tạ.'] },
      { h: 'Bóng' },
      { ul: ['Bóng đá: chuyền, chiến thuật.', 'Bóng rổ: chuyền, ném rổ.', 'Bóng chuyền: chuyền cao, đập.', 'Đá cầu: tâng, nhóm.'] },
      { h: 'Khác' },
      { ul: ['Võ: bài quyền số 1.', 'Thể dục dụng cụ: xà đơn, lộn nhào.', 'Trò chơi vận động.'] },
    ],
    [
      { q: 'Sức bền đo bằng test gì?', a: 'Test Cooper 12 phút.' },
      { q: 'Bóng rổ ném đúng tư thế gồm 4 yếu tố?', a: 'BEEF — Balance, Eyes, Elbow, Follow through.' },
    ]
  ),

  'S8GDTC-w19-quiz': L(
    'Chạy bền nâng cao — Phân phối sức trong cự ly 1500m',
    '1500m yêu cầu kết hợp tốc độ và sức bền.',
    ['Phân chia 3 đoạn.', 'Nhịp thở.', 'Bứt tốc về đích.'],
    [
      { h: 'Phân chia 3 đoạn' },
      { ul: ['500m đầu: chạy đều ~70% sức.', '500m giữa: giữ nhịp, không xuống tốc độ.', '500m cuối: tăng tốc, bứt 100m cuối.'] },
      { h: 'Nhịp thở' },
      { p: 'Hít 2 nhịp - thở 2 nhịp. Hít bằng mũi, thở bằng miệng.' },
      { h: 'Tránh' },
      { ul: ['Chạy quá nhanh ban đầu (lỗi phổ biến nhất).', 'Vung tay quá mạnh tốn sức.', 'Dừng đột ngột khi mệt.'] },
    ],
    [
      { q: 'Sai lầm lớn nhất khi chạy 1500m?', a: 'Chạy quá nhanh 500m đầu — kiệt sức nửa giữa.' },
      { q: 'Nhịp thở chuẩn?', a: 'Hít 2 bước - thở 2 bước.' },
    ]
  ),

  'S8GDTC-w20-quiz': L(
    'Nhảy dây — Kỹ thuật và sức bền',
    'Nhảy dây vừa đơn giản vừa rèn nhiều tố chất.',
    ['Kỹ thuật cơ bản.', 'Các kiểu nhảy.', 'Test sức bền 1 phút.'],
    [
      { h: 'Kỹ thuật cơ bản' },
      { ul: ['Cầm dây bằng đầu ngón tay.', 'Quay dây bằng cổ tay (không cánh tay).', 'Nhảy nhẹ bằng nửa bàn chân.', 'Mắt nhìn thẳng.'] },
      { h: 'Các kiểu' },
      { ul: ['Cơ bản: 1 chân-1 chân.', 'Chân chéo: dây chéo trước người.', 'Nhảy 2 chân đồng thời.', 'Nhảy 2 vòng/1 nhảy (double under).'] },
      { h: 'Test sức bền' },
      { p: 'HS lớp 8: nhảy 1 phút liên tục, mục tiêu 120+ lần.' },
    ],
    [
      { q: 'Quay dây bằng phần nào?', a: 'Cổ tay — không phải cánh tay.' },
      { q: 'Nhảy dây giúp gì?', a: 'Sức bền tim phổi, sức bật, phối hợp tay-chân-mắt.' },
    ]
  ),

  'S8GDTC-w21-quiz': L(
    'Thể dục nhịp điệu (aerobic) — Bài đơn giản',
    'Aerobic kết hợp tập thể dục với nhạc — vui và hiệu quả.',
    ['Hiểu aerobic.', 'Các động tác cơ bản.', 'Phối hợp theo nhạc.'],
    [
      { h: 'Aerobic' },
      { p: 'Là bài tập kết hợp vận động liên tục với nhịp nhạc 120-140 BPM — tăng nhịp tim, đốt mỡ.' },
      { h: 'Động tác cơ bản' },
      { ul: ['March (đi tại chỗ).', 'Step touch (bước-chạm).', 'Grapevine (bước chéo).', 'Knee lift (nâng gối).', 'Jumping jack (nhảy giang tay-chân).'] },
      { h: 'Phối hợp với nhạc' },
      { p: 'Mỗi động tác 8 nhịp. Đổi động tác theo phách 8x4 = 32 nhịp.' },
    ],
    [
      { q: 'BPM nhạc aerobic thường?', a: '120-140 BPM (nhịp/phút).' },
      { q: 'Tác dụng chính aerobic?', a: 'Tim phổi, đốt mỡ, dẻo dai, vui vẻ.' },
    ]
  ),

  'S8GDTC-w22-quiz': L(
    'Bóng đá — Sút bóng và đối kháng nhóm',
    'Sút bóng là vũ khí ghi bàn — cần kỹ thuật và lực.',
    ['Sút mu chính diện.', 'Sút bằng má trong/má ngoài.', 'Đối kháng nhóm nhỏ.'],
    [
      { h: 'Sút mu chính diện' },
      { ul: ['Chạy đà 3-5 bước.', 'Chân trụ cạnh bóng, mũi hướng khung thành.', 'Vung chân thuận, sút bằng mu (giữa bàn chân).', 'Sút mạnh, sút thấp.'] },
      { h: 'Sút má trong' },
      { p: 'Dùng cong bóng — Sút Beckham nổi tiếng. Bóng đi vòng cung.' },
      { h: 'Đối kháng 3v3' },
      { p: 'Sân nhỏ 3 đấu 3 — rèn phối hợp, đột phá, sút.' },
    ],
    [
      { q: 'Sút mạnh nhất bằng phần nào của bàn chân?', a: 'Mu chính diện.' },
      { q: 'Sút bóng cong (banana shot) bằng phần nào?', a: 'Má trong hoặc má ngoài.' },
    ]
  ),

  'S8GDTC-w23-quiz': L(
    'Bóng rổ — Dẫn bóng và đột phá',
    'Dẫn bóng (dribbling) là kỹ năng cá nhân quan trọng nhất bóng rổ.',
    ['Dẫn bóng tay phải/trái.', 'Đổi tay nhanh (crossover).', 'Đột phá lên rổ.'],
    [
      { h: 'Dẫn bóng' },
      { ul: ['Đầu ngẩng, quan sát.', 'Đập bóng bằng đầu ngón tay, không lòng tay.', 'Bóng nảy ngang hông.', 'Tay không dẫn che bóng.'] },
      { h: 'Đổi tay (crossover)' },
      { p: 'Đập bóng từ tay phải sang tay trái nhanh — đánh lừa đối thủ.' },
      { h: 'Đột phá lên rổ' },
      { p: 'Tăng tốc dẫn bóng → bước cuối nhảy lên ném (lay-up) hoặc nhồi rổ (dunk).' },
    ],
    [
      { q: 'Dẫn bóng bằng phần nào?', a: 'Đầu ngón tay — kiểm soát tốt hơn lòng tay.' },
      { q: 'Crossover là gì?', a: 'Đổi tay dẫn bóng nhanh — đánh lừa đối thủ.' },
    ]
  ),

  'S8GDTC-w24-quiz': L(
    'Bóng chuyền — Phối hợp đập-chắn',
    'Đập và chắn là 2 mặt của cuộc chiến trên lưới.',
    ['Đập bóng nâng cao.', 'Chắn bóng (block).', 'Phối hợp 2-3 người chắn.'],
    [
      { h: 'Đập bóng nâng cao' },
      { ul: ['Chạy đà nhanh 3 bước.', 'Nhảy cao + vung tay nhanh.', 'Đập mạnh, vào điểm yếu sân đối phương.'] },
      { h: 'Chắn (block)' },
      { ul: ['Nhảy lên với cả 2 tay đưa lên trên lưới.', 'Ngón tay căng, mở rộng.', 'Đẩy bóng xuống bên sân đối phương.'] },
      { h: 'Phối hợp chắn' },
      { p: '2-3 người chắn cùng lúc — tạo bức tường che hết khả năng đập.' },
    ],
    [
      { q: 'Khi chắn — tay đưa thế nào?', a: 'Đưa lên trên lưới, ngón tay căng, vươn tới.' },
      { q: 'Chắn có được chạm lưới không?', a: 'Không. Lỗi chạm lưới = mất điểm.' },
    ]
  ),

  'S8GDTC-w25-quiz': L(
    'Đá cầu — Đá hất và đá cầu nhóm 3 người',
    'Đá hất là đòn tấn công của đá cầu thi đấu.',
    ['Đá hất.', 'Đá cầu nhóm 3 hợp tác.', 'Thi đấu mini.'],
    [
      { h: 'Đá hất' },
      { p: 'Dùng má trong hoặc mu bàn chân, hất cầu cao và xa — như "phát bóng" trong bóng chuyền.' },
      { h: 'Đá nhóm 3 hợp tác' },
      { ul: ['3 người đứng tam giác.', 'Mỗi người 1 chạm rồi chuyền.', 'Mục tiêu giữ cầu trên không lâu nhất.'] },
      { h: 'Thi đấu' },
      { p: 'Đôi đôi qua lưới — như badminton nhưng chỉ dùng chân.' },
    ],
    [
      { q: 'Đá cầu thi đấu thường mấy người mỗi đội?', a: '1 (đơn), 2 (đôi), 3 (đồng đội).' },
      { q: 'Đá hất khác đá tâng?', a: 'Đá hất: mạnh, đẩy cầu đi xa. Đá tâng: nhẹ, giữ cầu trên không.' },
    ]
  ),

  'S8GDTC-w26-quiz': L(
    'Võ thuật cơ bản — Bài quyền số 2 và kỹ thuật tự vệ',
    'Bài quyền nâng cao + ứng dụng tự vệ thực tế.',
    ['Bài quyền số 2.', 'Đòn tự vệ thoát hiểm.', 'Tinh thần võ đạo.'],
    [
      { h: 'Bài quyền số 2' },
      { p: 'Phức tạp hơn bài 1: kết hợp gạt-né-đánh trả nhanh. ~15-20 động tác liên hoàn.' },
      { h: 'Đòn tự vệ thực tế' },
      { ul: ['Thoát nắm cổ tay: xoay theo lực, đánh vào điểm yếu.', 'Thoát vòng tay sau lưng: hạ thấp trọng tâm, đập khuỷu tay.', 'Né-đánh: bước chéo, đánh điểm yếu (mặt, hạ bộ).'] },
      { h: 'Tinh thần võ đạo' },
      { p: 'Lễ - Tín - Nghĩa - Trí - Dũng. Không đánh người yếu thế, không khoe khoang.' },
    ],
    [
      { q: 'Tự vệ có phải đánh trả mọi tình huống?', a: 'Không. Ưu tiên chạy thoát + kêu cứu. Đánh trả khi không còn lựa chọn.' },
      { q: 'Tinh thần võ đạo gồm gì?', a: 'Lễ, Tín, Nghĩa, Trí, Dũng.' },
    ]
  ),

  'S8GDTC-w27-quiz': L(
    'Thể dục dụng cụ — Bóng (medicine ball), tạ nhẹ',
    'Medicine ball và tạ nhẹ giúp tăng sức mạnh chức năng.',
    ['Bài tập medicine ball.', 'Bài tập tạ nhẹ.', 'An toàn.'],
    [
      { h: 'Medicine ball (1-3 kg)' },
      { ul: ['Ném 2 tay trước ngực (chest pass).', 'Ném từ trên đầu xuống đất (slam).', 'Squat + ném lên cao.'] },
      { h: 'Tạ nhẹ (1-2 kg)' },
      { ul: ['Cuốn tay (bicep curl).', 'Đẩy vai (shoulder press).', 'Squat cầm tạ.'] },
      { h: 'An toàn' },
      { ul: ['Khởi động kỹ.', 'Không gánh tạ quá nặng so với cơ thể.', 'Có giáo viên giám sát.'] },
    ],
    [
      { q: 'HS THCS nên tập tạ bao nhiêu kg?', a: '1-3 kg tối đa, ưu tiên kỹ thuật hơn nặng.' },
      { q: 'Tập tạ có ngăn cao không?', a: 'Tập đúng (kỹ thuật chuẩn, không quá nặng) thì KHÔNG ngăn cao. Tập sai (quá nặng) thì có hại khớp.' },
    ]
  ),

  'S8GDTC-w28-quiz': L(
    'Bóng đá — Phòng ngự khu vực vs phòng ngự kèm người',
    '2 chiến thuật phòng ngự cốt lõi — mỗi cái có ưu nhược.',
    ['Hiểu phòng ngự khu vực (zone).', 'Hiểu phòng ngự kèm người (man-to-man).', 'So sánh.'],
    [
      { h: 'Phòng ngự khu vực' },
      { p: 'Mỗi cầu thủ giữ 1 khu vực; bóng/đối thủ vào khu thì bám.' },
      { h: 'Phòng ngự kèm người' },
      { p: 'Mỗi cầu thủ bám 1 đối thủ — bám sát mọi nơi.' },
      { h: 'So sánh' },
      { ul: ['Khu vực: ít tốn sức, kỷ luật, dễ vỡ trận khi đối thủ chuyền nhanh.', 'Kèm người: hiệu quả với đối thủ ngôi sao, tốn sức.'] },
      { h: 'Trận đấu thực' },
      { p: 'Phòng ngự lai (hybrid) — khu vực ở giữa sân, kèm người trong vòng cấm.' },
    ],
    [
      { q: 'Phòng ngự nào tốn sức hơn?', a: 'Kèm người — phải bám đối thủ chạy khắp sân.' },
      { q: 'Đội nhỏ, cầu thủ yếu — nên phòng ngự gì?', a: 'Khu vực — ít tốn sức, kỷ luật, hạn chế khoảng trống.' },
    ]
  ),

  'S8GDTC-w29-quiz': L(
    'Kiểm tra giữa kì II — Chạy 800m và bài quyền',
    'Đánh giá sức bền + kỹ thuật võ.',
    ['Chạy 800m đúng kỹ thuật.', 'Biểu diễn bài quyền.', 'Đánh giá thể lực.'],
    [
      { h: 'Chạy 800m' },
      { p: 'Phân chia: 400m đầu chạy ~80% sức; 400m sau dồn sức về đích. HS lớp 8 nam: <3\'30\". Nữ: <4\'00\".' },
      { h: 'Bài quyền' },
      { p: 'Biểu diễn bài quyền số 1 hoặc 2 — đánh giá: đúng kỹ thuật + mạnh-dứt khoát + tinh thần.' },
      { h: 'Tiêu chí đánh giá' },
      { ul: ['Đúng kỹ thuật: 50%.', 'Tốc độ/lực: 30%.', 'Tinh thần, thái độ: 20%.'] },
    ],
    [
      { q: 'Tiêu chuẩn 800m nam HS lớp 8?', a: '<3\'30\" (3 phút 30 giây) là Tốt.' },
      { q: 'Đánh giá võ chú trọng gì?', a: 'Kỹ thuật đúng > tốc độ — sai kỹ thuật dù nhanh cũng không đạt.' },
    ]
  ),

  'S8GDTC-w30-quiz': L(
    'Bóng rổ — Thi đấu nhóm 3 vs 3',
    '3 đấu 3 là format thi đấu hot — đơn giản, nhanh, kỹ thuật cao.',
    ['Luật 3v3.', 'Chiến thuật.', 'Thi đấu thực.'],
    [
      { h: 'Luật 3v3' },
      { ul: ['Sân nửa.', '21 điểm hoặc 10 phút.', 'Bàn 2 điểm (sau vạch 6.75m) hoặc 1 điểm (trong).', 'Sau ghi bàn: đưa bóng ra ngoài vạch 3 điểm rồi chơi tiếp.'] },
      { h: 'Chiến thuật 3v3' },
      { ul: ['Pick & roll (chắn-cắt).', 'Iso (1 cá nhân vs 1).', 'Chuyền nhanh tạo khoảng trống.'] },
      { h: 'Phòng ngự' },
      { p: 'Kèm người là chính. Help nhanh khi đồng đội bị qua.' },
    ],
    [
      { q: '3v3 mỗi đội ghi bao nhiêu điểm thì thắng?', a: '21 điểm (chênh 2) hoặc hết 10 phút điểm cao hơn.' },
      { q: 'Pick & roll là gì?', a: 'Đồng đội chắn (pick) cho người cầm bóng, sau đó cắt (roll) lên rổ.' },
    ]
  ),

  'S8GDTC-w31-quiz': L(
    'Đi bộ thể thao — Race walking',
    'Race walking là môn thể thao đi bộ nhanh có quy tắc nghiêm.',
    ['Quy tắc race walking.', 'Kỹ thuật.', 'Phân biệt với chạy.'],
    [
      { h: 'Quy tắc cơ bản' },
      { ul: ['Luôn có 1 chân chạm đất (không bao giờ cả 2 chân rời đất).', 'Chân tiếp đất phải duỗi thẳng khi qua điểm thẳng đứng.', 'Vi phạm 3 lần → bị truất quyền.'] },
      { h: 'Kỹ thuật' },
      { ul: ['Hông đẩy về trước.', 'Cánh tay đánh mạnh.', 'Sải bước dài.', 'Tốc độ cao ~ 7-9 km/h.'] },
      { h: 'Khác chạy' },
      { p: 'Chạy có "pha bay" (cả 2 chân rời đất). Race walking phải luôn có 1 chân chạm.' },
    ],
    [
      { q: 'Khác chính giữa race walking và chạy?', a: 'Race walking: luôn có 1 chân chạm. Chạy: có pha 2 chân rời đất.' },
      { q: 'Vi phạm mấy lần thì bị loại?', a: '3 lần — bị đỏ thẻ và loại.' },
    ]
  ),

  'S8GDTC-w32-quiz': L(
    'Trò chơi dân gian — Kéo co, đẩy gậy',
    'Trò chơi dân gian là di sản văn hoá — vừa vui vừa rèn sức.',
    ['Kéo co.', 'Đẩy gậy.', 'Ý nghĩa văn hoá.'],
    [
      { h: 'Kéo co' },
      { ul: ['Hai đội bằng số người (8-10 người).', 'Sợi dây thừng có ruy băng đỏ giữa.', 'Khi có hiệu lệnh: kéo dây về phía mình; ruy băng qua vạch → thắng.', 'Kỹ thuật: chân đạp mạnh, người ngả ra sau, đồng đội đồng nhịp.'] },
      { h: 'Đẩy gậy' },
      { ul: ['2 người đối mặt, giữ 1 cây gậy dài 2m.', 'Đẩy đối phương ra khỏi vòng tròn → thắng.', 'Rèn sức mạnh cánh tay, hông, chân.'] },
      { h: 'Ý nghĩa' },
      { p: 'Là một phần lễ hội truyền thống VN. Rèn đoàn kết, sức bền, tinh thần thi đấu.' },
    ],
    [
      { q: 'Kéo co cần gì?', a: 'Đồng nhịp, đạp chân chắc, ngả người sau — không kéo bằng tay riêng lẻ.' },
      { q: 'Đẩy gậy rèn gì?', a: 'Sức mạnh tay, hông, chân và sự kiên trì.' },
    ]
  ),

  'S8GDTC-w33-quiz': L(
    'Dinh dưỡng và phục hồi cho thể thao',
    'Tập + ăn + nghỉ = 3 trụ cột của phát triển thể thao.',
    ['Dinh dưỡng cơ bản.', 'Bù nước.', 'Phục hồi sau tập.'],
    [
      { h: 'Dinh dưỡng' },
      { ul: ['Carbohydrate (cơm, mì): năng lượng chính.', 'Protein (thịt, cá, trứng, đậu): xây cơ.', 'Chất béo lành mạnh (cá béo, dầu olive).', 'Rau quả: vitamin, khoáng.'] },
      { h: 'Trước-sau tập' },
      { ul: ['Trước tập 1h: ăn nhẹ có carb (chuối, bánh mì).', 'Trong tập: uống nước nhỏ giọt.', 'Sau tập 30p: ăn protein + carb để phục hồi.'] },
      { h: 'Bù nước' },
      { p: 'Tập 1h cần ~500-1000ml nước. Tập trên 1h cần bù điện giải (oresol, nước dừa).' },
      { h: 'Phục hồi' },
      { ul: ['Ngủ 8-9 tiếng (cơ phục hồi khi ngủ).', 'Giãn cơ sau tập.', 'Nghỉ 1 ngày/tuần.'] },
    ],
    [
      { q: 'Sau tập ăn gì?', a: 'Protein (sữa, trứng) + carb (cơm, chuối) trong 30 phút.' },
      { q: 'Ngủ đủ giúp gì cho thể thao?', a: 'Cơ phục hồi, tăng cơ, tránh chấn thương. 8-9 tiếng/đêm là lý tưởng.' },
    ]
  ),

  'S8GDTC-w34-quiz': L(
    'Lập kế hoạch luyện tập cá nhân',
    'Có kế hoạch giúp tiến bộ đều — không phải tập "lúc rảnh".',
    ['Xác định mục tiêu.', 'Lịch tuần.', 'Theo dõi tiến bộ.'],
    [
      { h: 'Xác định mục tiêu' },
      { ul: ['Cụ thể (SMART): "Chạy 1500m dưới 7 phút trong 3 tháng".', 'Đo được.', 'Khả thi.', 'Có thời hạn.'] },
      { h: 'Lịch tuần' },
      { ul: ['T2-4-6: rèn sức (chạy, tạ).', 'T3-5: kỹ thuật (bóng, võ).', 'T7: chơi vui (giải trí).', 'CN: nghỉ.'] },
      { h: 'Theo dõi' },
      { p: 'Ghi nhật ký tập (thời gian, số lần, cảm giác). Theo dõi tiến bộ qua test mỗi tháng.' },
    ],
    [
      { q: 'SMART nghĩa là gì?', a: 'Specific (cụ thể), Measurable (đo được), Achievable (khả thi), Relevant (phù hợp), Time-bound (có hạn).' },
      { q: 'Vì sao cần ngày nghỉ?', a: 'Cơ phục hồi và phát triển trong ngày nghỉ — không phải khi tập.' },
    ]
  ),

  'S8GDTC-w35-quiz': L(
    'Tổng kết và biểu diễn cuối năm',
    'Tổng kết toàn bộ GDTC 8 và biểu diễn thành quả.',
    ['Tổng kết kiến thức.', 'Biểu diễn nhóm.', 'Định hướng tiếp.'],
    [
      { h: 'Nội dung tổng kết' },
      { ul: ['Điền kinh: chạy ngắn, bền, nhảy, đẩy tạ.', 'Bóng đá, rổ, chuyền, cầu — kỹ thuật + chiến thuật.', 'Võ thuật, thể dục dụng cụ.', 'Trò chơi dân gian.'] },
      { h: 'Biểu diễn cuối năm' },
      { ul: ['Bài thể dục liên hoàn.', 'Bài quyền võ.', 'Đồng diễn dạy.', 'Aerobic theo nhạc.'] },
      { h: 'Định hướng' },
      { p: 'Lớp 9 sẽ học chuyên sâu hơn 1 môn yêu thích (chuyên đề). Hãy chọn môn em giỏi/yêu thích nhất.' },
      { note: 'GDTC không chỉ là điểm — là rèn nhân cách và thể lực suốt đời.' },
    ],
    [
      { q: 'Bài quyền võ biểu diễn cần gì?', a: 'Đúng kỹ thuật + mạnh dứt khoát + ánh mắt tự tin.' },
      { q: '3 thói quen thể thao em sẽ giữ?', a: 'Chạy/đi bộ 30p/ngày, ngủ đủ 8h, ăn rau quả mỗi bữa.' },
    ]
  ),
};
