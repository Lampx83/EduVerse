// Ngân hàng câu hỏi LÝ THUYẾT LÁI XE B1/B2
// Chương: CẤU TẠO VÀ SỬA CHỮA THÔNG THƯỜNG
// Format: { t, c, q, o:[A,B,C,D], a (index đáp án đúng), ex }

export const ITEMS = [
  // ===== ĐỘNG CƠ - HỆ THỐNG =====
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Động cơ ô tô dùng nhiên liệu xăng phổ biến hiện nay hoạt động theo chu trình mấy kỳ?',
    o: ['2 kỳ', '3 kỳ', '4 kỳ', '6 kỳ'],
    a: 2,
    ex: 'Động cơ xăng và động cơ diesel trên ô tô đều hoạt động theo chu trình 4 kỳ: nạp, nén, nổ (cháy - giãn nở sinh công), xả.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Trong chu trình 4 kỳ của động cơ, kỳ nào sinh ra công làm quay trục khuỷu?',
    o: ['Kỳ nạp', 'Kỳ nén', 'Kỳ nổ (cháy - giãn nở)', 'Kỳ xả'],
    a: 2,
    ex: 'Kỳ nổ (cháy - giãn nở) là kỳ duy nhất sinh công: hỗn hợp cháy giãn nở đẩy pít-tông đi xuống làm quay trục khuỷu.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Hệ thống bôi trơn trong động cơ có nhiệm vụ chính nào sau đây?',
    o: ['Làm mát nước trong két nước', 'Giảm ma sát, mài mòn và làm mát các chi tiết chuyển động', 'Cung cấp nhiên liệu cho buồng đốt', 'Phát điện nạp ắc quy'],
    a: 1,
    ex: 'Hệ thống bôi trơn đưa dầu nhờn đến các bề mặt ma sát nhằm giảm mài mòn, làm mát cục bộ, làm kín và rửa sạch cặn bẩn.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Khi đèn báo nhiệt độ nước làm mát chuyển sang vùng đỏ (động cơ quá nóng), người lái nên làm gì?',
    o: ['Tăng ga để động cơ nhanh nguội', 'Dừng xe ở nơi an toàn, tắt máy và kiểm tra hệ thống làm mát', 'Tiếp tục chạy bình thường vì không nguy hiểm', 'Mở ngay nắp két nước khi máy còn nóng'],
    a: 1,
    ex: 'Khi động cơ quá nhiệt phải dừng xe an toàn, tắt máy, để nguội rồi kiểm tra nước làm mát, két nước; tuyệt đối không mở nắp két khi còn nóng vì hơi nóng áp suất cao có thể gây bỏng.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Bộ phận nào trong hệ thống nhiên liệu động cơ xăng có nhiệm vụ lọc sạch tạp chất trong xăng trước khi đưa vào động cơ?',
    o: ['Bơm xăng', 'Lọc xăng (lọc nhiên liệu)', 'Kim phun', 'Bình xăng'],
    a: 1,
    ex: 'Lọc nhiên liệu (lọc xăng) giữ lại tạp chất, cặn bẩn, nước lẫn trong nhiên liệu để bảo vệ kim phun và động cơ.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Trên động cơ xăng, bộ phận nào tạo ra tia lửa điện để đốt cháy hỗn hợp nhiên liệu - không khí?',
    o: ['Bugi (nến điện)', 'Kim phun dầu', 'Vòi phun cao áp', 'Bơm cao áp'],
    a: 0,
    ex: 'Bugi (nến đánh lửa) tạo tia lửa điện ở cuối kỳ nén để đốt cháy hỗn hợp. Động cơ diesel không dùng bugi mà tự cháy do nén.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Điểm khác biệt cơ bản giữa động cơ diesel và động cơ xăng về cách đốt cháy nhiên liệu là gì?',
    o: ['Diesel dùng bugi đánh lửa, xăng tự cháy do nén', 'Diesel tự cháy do nén ở áp suất cao, xăng cháy nhờ tia lửa bugi', 'Cả hai đều dùng bugi đánh lửa', 'Cả hai đều tự cháy do nén'],
    a: 1,
    ex: 'Động cơ diesel nén không khí đến áp suất, nhiệt độ cao rồi phun dầu vào tự bốc cháy; động cơ xăng cháy nhờ tia lửa điện từ bugi.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Máy phát điện trên ô tô (đi-na-mô) có nhiệm vụ gì?',
    o: ['Khởi động động cơ', 'Phát điện cung cấp cho phụ tải và nạp lại điện cho ắc quy khi động cơ hoạt động', 'Bôi trơn động cơ', 'Làm mát động cơ'],
    a: 1,
    ex: 'Khi động cơ chạy, máy phát điện cung cấp điện cho các phụ tải (đèn, điều hòa...) và nạp bù điện cho ắc quy.'
  },

  // ===== HỆ THỐNG AN TOÀN =====
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Hệ thống phanh ABS trên ô tô có tác dụng chính là gì?',
    o: ['Tăng tốc độ tối đa của xe', 'Chống bó cứng bánh xe khi phanh gấp, giúp xe không bị trượt và vẫn điều khiển được hướng lái', 'Tự động đỗ xe', 'Tiết kiệm nhiên liệu'],
    a: 1,
    ex: 'ABS (Anti-lock Braking System) ngăn bánh xe bị bó cứng khi phanh gấp, giúp giữ khả năng điều khiển hướng và rút ngắn quãng đường phanh trên mặt đường trơn.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Khi phanh gấp trên xe có ABS, người lái nên xử lý chân phanh như thế nào?',
    o: ['Nhấp - nhả phanh liên tục', 'Đạp và giữ chặt bàn đạp phanh, kết hợp đánh lái tránh chướng ngại', 'Đạp nhẹ rồi nhả ra ngay', 'Chỉ dùng phanh tay'],
    a: 1,
    ex: 'Với xe có ABS, khi phanh khẩn cấp cần đạp và giữ chặt bàn đạp phanh; hệ thống tự điều tiết lực phanh, người lái có thể đánh lái để tránh chướng ngại vật.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Phanh tay (phanh đỗ) trên ô tô có công dụng chính nào?',
    o: ['Phanh khi xe đang chạy tốc độ cao', 'Giữ cho xe đứng yên khi đỗ, dừng xe, nhất là trên đường dốc', 'Thay thế hoàn toàn cho phanh chân', 'Điều khiển hệ thống lái'],
    a: 1,
    ex: 'Phanh tay (phanh đỗ) dùng để giữ xe đứng yên khi dừng, đỗ, đặc biệt trên dốc; không dùng để phanh khi xe đang chạy với tốc độ cao.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Dây an toàn trên ô tô có tác dụng gì khi xảy ra va chạm hoặc phanh gấp?',
    o: ['Không có tác dụng gì đáng kể', 'Giữ người ngồi trên ghế, hạn chế bị lao về phía trước gây chấn thương', 'Chỉ để trang trí nội thất', 'Làm tăng tốc độ phản ứng của xe'],
    a: 1,
    ex: 'Dây an toàn giữ người ngồi áp vào ghế, ngăn cơ thể lao về trước khi va chạm hoặc phanh gấp, giảm nguy cơ chấn thương nặng và tử vong.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Túi khí (airbag) trên ô tô hoạt động hiệu quả nhất khi nào?',
    o: ['Khi người ngồi không thắt dây an toàn', 'Khi kết hợp với dây an toàn được thắt đúng cách', 'Khi xe chạy chậm dưới 5 km/h', 'Khi xe đang đỗ'],
    a: 1,
    ex: 'Túi khí được thiết kế làm việc cùng dây an toàn; nếu không thắt dây, lực bung của túi khí có thể gây chấn thương. Vì vậy phải luôn thắt dây an toàn.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Hệ thống lái trên ô tô có nhiệm vụ gì?',
    o: ['Truyền công suất từ động cơ đến bánh xe', 'Thay đổi và giữ hướng chuyển động của xe theo ý muốn người lái', 'Giảm tốc độ và dừng xe', 'Cung cấp điện cho xe'],
    a: 1,
    ex: 'Hệ thống lái dùng để thay đổi hoặc duy trì hướng chuyển động của ô tô theo điều khiển của người lái thông qua vô lăng.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Nếu vô lăng có độ rơ (độ trễ) quá lớn thì có nguy hại gì?',
    o: ['Không ảnh hưởng đến an toàn', 'Xe phản ứng chậm với thao tác lái, dễ mất lái, kém an toàn', 'Giúp xe vào cua nhanh hơn', 'Tiết kiệm nhiên liệu'],
    a: 1,
    ex: 'Độ rơ vô lăng quá lớn làm xe phản ứng chậm và thiếu chính xác với thao tác đánh lái, dễ gây mất an toàn; cần kiểm tra, sửa chữa kịp thời.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Trợ lực lái (trợ lực tay lái) trên ô tô có tác dụng gì?',
    o: ['Làm tăng tốc độ xe', 'Giảm lực cần thiết khi người lái đánh vô lăng', 'Tăng lực phanh', 'Bôi trơn động cơ'],
    a: 1,
    ex: 'Hệ thống trợ lực lái (thủy lực hoặc điện) giúp người lái xoay vô lăng nhẹ nhàng hơn, nhất là khi xe chạy chậm hoặc đỗ xe.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Khi bàn đạp phanh bị thấp hơn bình thường, nhấn xuống sâu mà phanh vẫn yếu, nguyên nhân thường gặp là gì?',
    o: ['Lốp non hơi', 'Thiếu dầu phanh hoặc hệ thống phanh có không khí, mòn má phanh', 'Bình xăng đầy', 'Đèn pha bị cháy'],
    a: 1,
    ex: 'Phanh thấp, ăn kém thường do thiếu dầu phanh, lọt khí trong đường ống dầu, hoặc má phanh đã mòn; cần kiểm tra, sửa chữa ngay vì rất nguy hiểm.'
  },
  {
    t: 'Hệ thống an toàn', c: false,
    q: 'Để đảm bảo an toàn, dây an toàn cần được thắt cho những ai trên xe?',
    o: ['Chỉ người lái', 'Chỉ hành khách ghế trước', 'Tất cả người ngồi trên xe có trang bị dây an toàn', 'Chỉ trẻ em'],
    a: 2,
    ex: 'Mọi người ngồi trên xe tại vị trí có trang bị dây an toàn đều phải thắt dây để bảo vệ an toàn khi xảy ra sự cố.'
  },

  // ===== HỆ THỐNG TRUYỀN LỰC =====
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Ly hợp (côn) trên xe số sàn có nhiệm vụ chính là gì?',
    o: ['Tăng tốc độ động cơ', 'Truyền hoặc ngắt mô-men từ động cơ đến hộp số một cách êm dịu', 'Làm mát động cơ', 'Phát điện cho ắc quy'],
    a: 1,
    ex: 'Ly hợp dùng để nối và ngắt truyền động giữa động cơ và hộp số một cách êm dịu khi khởi hành, dừng xe và chuyển số.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Hộp số trên ô tô có tác dụng gì?',
    o: ['Thay đổi mô-men và tốc độ truyền đến bánh xe phù hợp với điều kiện chuyển động', 'Tạo tia lửa điện', 'Làm mát động cơ', 'Lọc không khí'],
    a: 0,
    ex: 'Hộp số thay đổi tỉ số truyền để điều chỉnh mô-men kéo và tốc độ phù hợp với tải trọng, độ dốc, đồng thời cho xe lùi và đứng yên (số 0).'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Hiện tượng ly hợp bị trượt (côn trượt) biểu hiện như thế nào?',
    o: ['Động cơ tăng vòng tua nhưng xe tăng tốc kém, có mùi khét', 'Xe chạy nhanh hơn bình thường', 'Đèn pha sáng yếu', 'Lốp xe mòn đều'],
    a: 0,
    ex: 'Ly hợp trượt khiến vòng tua động cơ tăng nhưng xe không tăng tốc tương ứng, thường kèm mùi khét do đĩa ma sát bị mòn hoặc cháy.'
  },
  {
    t: 'Động cơ - hệ thống', c: false,
    q: 'Trên xe số tự động, ký hiệu vị trí cần số nào dùng để đỗ xe (giữ xe đứng yên)?',
    o: ['D', 'N', 'R', 'P'],
    a: 3,
    ex: 'P (Park) là vị trí đỗ xe, khóa hộp số giữ xe đứng yên; D là tiến, R là lùi, N là số 0 (mo).'
  },

  // ===== BẢO DƯỠNG - KIỂM TRA =====
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Trước khi khởi hành, người lái nên kiểm tra hạng mục nào sau đây?',
    o: ['Chỉ cần kiểm tra xăng', 'Lốp, phanh, đèn tín hiệu, gương, dầu, nước làm mát và mức nhiên liệu', 'Chỉ cần kiểm tra gương chiếu hậu', 'Không cần kiểm tra gì'],
    a: 1,
    ex: 'Kiểm tra trước khởi hành gồm: tình trạng lốp và áp suất, hệ thống phanh, đèn - còi - tín hiệu, gương, mức dầu bôi trơn, nước làm mát, nhiên liệu và dây an toàn.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Áp suất lốp không đúng tiêu chuẩn (quá non hoặc quá căng) gây ra hậu quả gì?',
    o: ['Không ảnh hưởng gì', 'Lốp mòn nhanh, không đều, tốn nhiên liệu và giảm an toàn khi vận hành', 'Giúp xe chạy êm hơn trong mọi trường hợp', 'Tăng tuổi thọ lốp'],
    a: 1,
    ex: 'Lốp non hoặc quá căng làm lốp mòn nhanh và không đều, tăng tiêu hao nhiên liệu, giảm độ bám và tăng nguy cơ nổ lốp, mất an toàn.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Nên kiểm tra áp suất lốp khi nào để có kết quả chính xác?',
    o: ['Khi lốp còn nguội (xe chưa chạy hoặc chạy rất ít)', 'Khi lốp đang rất nóng sau quãng đường dài', 'Ngay sau khi phanh gấp', 'Khi xe đang chạy'],
    a: 0,
    ex: 'Áp suất lốp nên đo khi lốp còn nguội; khi lốp nóng do vận hành, không khí giãn nở làm số đo cao hơn thực tế, dẫn đến chỉnh sai.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Dầu bôi trơn động cơ cần được thay định kỳ vì lý do gì?',
    o: ['Để xe đẹp hơn', 'Vì dầu bị bẩn, biến chất theo thời gian, mất khả năng bôi trơn và làm mát', 'Không cần thay bao giờ', 'Chỉ thay khi hết xăng'],
    a: 1,
    ex: 'Sau thời gian sử dụng, dầu nhờn lẫn cặn bẩn, mạt kim loại và biến chất, giảm khả năng bôi trơn, làm mát; cần thay định kỳ theo khuyến cáo nhà sản xuất.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Dùng que thăm dầu để kiểm tra mức dầu động cơ, mức dầu đạt yêu cầu khi nằm ở đâu?',
    o: ['Dưới vạch Min (thấp nhất)', 'Trong khoảng giữa vạch Min và Max', 'Trên vạch Max (cao nhất)', 'Không có dầu trên que'],
    a: 1,
    ex: 'Mức dầu hợp lý nằm giữa vạch Min và Max trên que thăm dầu; quá thấp gây thiếu bôi trơn, quá cao gây sủi bọt, tăng áp suất, có hại cho động cơ.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Khi ắc quy bị yếu hoặc hết điện, hiện tượng thường gặp khi khởi động xe là gì?',
    o: ['Xe nổ máy êm và nhanh hơn', 'Đề khó nổ, máy đề quay yếu hoặc không quay, đèn báo mờ', 'Đèn pha sáng hơn bình thường', 'Phanh không ăn'],
    a: 1,
    ex: 'Ắc quy yếu khiến máy khởi động quay yếu hoặc không quay, xe khó nổ, đèn và còi yếu; cần nạp lại điện hoặc thay ắc quy.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Khi một đèn báo rẽ (xi-nhan) nháy nhanh hơn bình thường, nguyên nhân thường là gì?',
    o: ['Động cơ quá nóng', 'Một bóng đèn báo rẽ cùng phía bị cháy (đứt tóc bóng)', 'Lốp non hơi', 'Hết nước làm mát'],
    a: 1,
    ex: 'Đèn xi-nhan nháy nhanh bất thường thường báo hiệu một bóng đèn báo rẽ cùng phía bị cháy hoặc tiếp xúc kém; cần kiểm tra và thay bóng.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Hệ thống đèn chiếu sáng phía trước (đèn pha - cốt) cần được kiểm tra điều gì để bảo đảm an toàn?',
    o: ['Màu sơn của đèn', 'Độ sáng, độ chụm và độ cao chùm sáng đúng quy định, không lóa người đối diện', 'Hình dáng cụm đèn', 'Giá tiền của bóng đèn'],
    a: 1,
    ex: 'Đèn chiếu sáng cần đủ sáng, chỉnh đúng độ chụm và độ cao để soi rõ đường mà không gây lóa mắt phương tiện đi ngược chiều.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Khi phát hiện vết dầu loang dưới gầm xe sau khi đỗ qua đêm, người lái nên làm gì?',
    o: ['Bỏ qua vì không quan trọng', 'Kiểm tra, xác định vị trí rò rỉ dầu và khắc phục trước khi vận hành', 'Đổ thêm dầu rồi chạy tiếp ngay', 'Rửa sạch vết dầu là xong'],
    a: 1,
    ex: 'Vết dầu loang dưới gầm là dấu hiệu rò rỉ dầu (động cơ, hộp số, phanh...); cần kiểm tra, xác định và khắc phục nguyên nhân để tránh hư hỏng và mất an toàn.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Lốp xe có dấu hiệu nào sau đây thì cần thay mới để bảo đảm an toàn?',
    o: ['Lốp còn gai sâu, không nứt', 'Gai lốp mòn quá giới hạn, nứt vỡ thành lốp hoặc phồng rộp', 'Lốp mới bơm căng', 'Lốp vừa được cân bằng động'],
    a: 1,
    ex: 'Khi gai lốp mòn quá mức cho phép, thành lốp nứt, phồng rộp thì độ bám và độ bền giảm mạnh, dễ trượt và nổ lốp; phải thay lốp mới.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Lọc gió động cơ bị bẩn, tắc sẽ ảnh hưởng thế nào đến động cơ?',
    o: ['Động cơ mạnh hơn', 'Động cơ thiếu không khí, nhiên liệu cháy không hết, yếu máy và hao xăng', 'Không ảnh hưởng', 'Làm mát động cơ tốt hơn'],
    a: 1,
    ex: 'Lọc gió tắc làm giảm lượng không khí nạp, hỗn hợp cháy không hoàn toàn khiến máy yếu, tốn nhiên liệu và xả khói; cần vệ sinh hoặc thay lọc gió định kỳ.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Cần gạt nước (gạt mưa) cần được kiểm tra, thay thế khi nào?',
    o: ['Khi lưỡi cao su bị chai cứng, rách, gạt không sạch nước trên kính', 'Chỉ khi xe hỏng động cơ', 'Mỗi lần đổ xăng', 'Không bao giờ cần thay'],
    a: 0,
    ex: 'Lưỡi gạt mưa bị chai cứng, rách sẽ gạt không sạch, để vệt nước làm giảm tầm nhìn khi trời mưa; cần thay khi gạt kém hiệu quả.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Việc bảo dưỡng định kỳ ô tô theo khuyến cáo của nhà sản xuất nhằm mục đích gì?',
    o: ['Làm xe chạy nhanh hơn quy định', 'Phát hiện sớm hư hỏng, duy trì tình trạng kỹ thuật tốt và an toàn của xe', 'Chỉ để giữ bảo hành', 'Không có lợi ích thực tế'],
    a: 1,
    ex: 'Bảo dưỡng định kỳ giúp phát hiện, khắc phục sớm hư hỏng, duy trì tình trạng kỹ thuật và độ an toàn, kéo dài tuổi thọ xe.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Khi đèn báo áp suất dầu bôi trơn (hình bình dầu) sáng lúc động cơ đang chạy, người lái cần làm gì?',
    o: ['Tiếp tục chạy với tốc độ cao', 'Dừng xe an toàn, tắt máy ngay và kiểm tra mức dầu, hệ thống bôi trơn', 'Bật điều hòa để làm mát', 'Tăng ga cho đèn tắt'],
    a: 1,
    ex: 'Đèn báo áp suất dầu sáng cảnh báo áp suất dầu bôi trơn thấp; nếu tiếp tục chạy có thể bó máy. Phải dừng xe, tắt máy và kiểm tra ngay.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Khi động cơ phát ra tiếng gõ lạ, rung giật bất thường lúc vận hành, người lái nên xử lý thế nào?',
    o: ['Bỏ qua nếu xe vẫn chạy được', 'Giảm tốc, tìm chỗ an toàn dừng kiểm tra hoặc đưa đi sửa chữa', 'Tăng ga để hết tiếng gõ', 'Tắt hết đèn báo trên táp-lô'],
    a: 1,
    ex: 'Tiếng gõ, rung giật bất thường là dấu hiệu hư hỏng; cần giảm tốc, dừng kiểm tra hoặc đưa xe đến gara để tránh hỏng nặng và mất an toàn.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Gương chiếu hậu trên ô tô cần được điều chỉnh như thế nào trước khi xuất phát?',
    o: ['Quay vào trong xe cho gọn', 'Điều chỉnh để quan sát rõ phía sau và hai bên, giảm tối đa điểm mù', 'Gập sát thân xe', 'Hướng lên trời'],
    a: 1,
    ex: 'Gương chiếu hậu phải được chỉnh để bao quát tốt nhất khu vực phía sau và hai bên xe, hạn chế điểm mù, giúp lái xe an toàn.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Nước làm mát (dung dịch làm mát) trong động cơ nên được kiểm tra và bổ sung như thế nào?',
    o: ['Kiểm tra mức trong bình phụ khi máy nguội, bổ sung đúng loại nếu thiếu', 'Chỉ đổ thêm nước lã khi máy đang rất nóng', 'Không bao giờ cần kiểm tra', 'Thay bằng xăng khi thiếu'],
    a: 0,
    ex: 'Nên kiểm tra mức nước làm mát ở bình phụ khi động cơ nguội; nếu thiếu thì bổ sung đúng loại dung dịch; không mở nắp két nước khi máy còn nóng.'
  },
  {
    t: 'Bảo dưỡng - kiểm tra', c: false,
    q: 'Để bánh xe dự phòng (lốp sơ-cua) sẵn sàng sử dụng, cần lưu ý điều gì?',
    o: ['Không cần quan tâm vì hiếm khi dùng', 'Kiểm tra định kỳ áp suất và tình trạng lốp dự phòng, mang theo dụng cụ thay lốp', 'Tháo bỏ để giảm trọng lượng xe', 'Bơm thật căng gấp đôi tiêu chuẩn'],
    a: 1,
    ex: 'Lốp dự phòng cũng cần được kiểm tra áp suất, tình trạng định kỳ và mang theo kích, cờ-lê để có thể thay lốp khi xảy ra sự cố trên đường.'
  }
];
