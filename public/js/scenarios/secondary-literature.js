// ============================================================
// Trường THCS — Ngữ văn lớp 6–9 (câu hỏi GỐC)
// ============================================================
// Tự soạn theo Chương trình GDPT 2018 môn Ngữ văn THCS (tham khảo,
// KHÔNG sao chép SGK). id prefix SV6-/SV7-/SV8-/SV9- khớp module loader.
// ============================================================

export const SV6_VAN = {
  id: 'SV6-van-quiz', title: 'Lớp 6 · Ngữ văn — Truyện dân gian, thơ lục bát, biện pháp tu từ',
  kind: 'quiz', yearLevel: 1, subject: 'ngu-van', difficulty: 2,
  skillsTrained: ['truyen-dan-gian', 'tho-luc-bat', 'so-sanh-nhan-hoa', 'tu-don-tu-phuc'],
  questions: [
    { stem: 'Câu "Trẻ em như búp trên cành" sử dụng biện pháp tu từ nào?', choices: ['Nhân hoá', 'So sánh', 'Ẩn dụ', 'Hoán dụ'], answer: 1, explanation: 'Có từ so sánh "như" nối hai sự vật có nét tương đồng → biện pháp so sánh.' },
    { stem: 'Câu "Ông trời mặc áo giáp đen ra trận" dùng biện pháp tu từ gì?', choices: ['So sánh', 'Nhân hoá', 'Điệp ngữ', 'Liệt kê'], answer: 1, explanation: 'Gán hành động, trang phục của người ("mặc áo giáp", "ra trận") cho "ông trời" → nhân hoá.' },
    { stem: 'Một cặp câu thơ lục bát gồm các dòng có số tiếng là?', choices: ['5 và 7 tiếng', '6 và 8 tiếng', '7 và 7 tiếng', '4 và 8 tiếng'], answer: 1, explanation: 'Thơ lục bát: dòng trên 6 tiếng (lục), dòng dưới 8 tiếng (bát).' },
    { stem: 'Truyền thuyết "Thánh Gióng" kể về người anh hùng đánh đuổi giặc nào?', choices: ['Giặc Minh', 'Giặc Ân', 'Giặc Nguyên', 'Giặc Tống'], answer: 1, explanation: 'Thánh Gióng vươn vai thành tráng sĩ, đánh tan giặc Ân.' },
    { stem: 'Truyện "Sơn Tinh, Thuỷ Tinh" nhằm giải thích hiện tượng tự nhiên nào?', choices: ['Nhật thực', 'Lũ lụt hằng năm', 'Động đất', 'Sấm sét'], answer: 1, explanation: 'Cuộc giao tranh của hai vị thần lí giải hiện tượng lũ lụt xảy ra hằng năm ở đồng bằng Bắc Bộ.' },
    { stem: 'Từ phức là từ được tạo bởi?', choices: ['Một tiếng', 'Hai tiếng trở lên', 'Một âm tiết duy nhất', 'Một chữ cái'], answer: 1, explanation: 'Từ phức gồm hai tiếng trở lên (vd: bàn ghế, xinh xắn); từ đơn chỉ có một tiếng.' },
    { stem: 'Từ nào dưới đây là từ láy?', choices: ['Bàn ghế', 'Sách vở', 'Xinh xắn', 'Ăn uống'], answer: 2, explanation: '"Xinh xắn" có quan hệ láy âm (lặp phụ âm đầu x); các từ còn lại là từ ghép.' },
    { stem: 'Trong truyện cổ tích "Thạch Sanh", nhân vật phản diện gian xảo là ai?', choices: ['Lí Thông', 'Thạch Sanh', 'Công chúa', 'Vua Thuỷ Tề'], answer: 0, explanation: 'Lí Thông nhiều lần lừa gạt, cướp công của Thạch Sanh — là nhân vật phản diện.' },
    { stem: 'Ẩn dụ là biện pháp tu từ?', choices: ['Gọi tên sự vật này bằng tên sự vật khác có nét tương đồng', 'Lặp lại một từ nhiều lần', 'Phóng đại mức độ sự việc', 'Gọi tên cái toàn thể bằng cái bộ phận'], answer: 0, explanation: 'Ẩn dụ = gọi tên sự vật, hiện tượng này bằng tên sự vật, hiện tượng khác có nét tương đồng (so sánh ngầm).' },
    { stem: 'Dấu hiệu thường gặp của truyện cổ tích là gì?', choices: ['Ghi chép sự thật lịch sử có thật', 'Có yếu tố hoang đường, kì ảo và thường kết thúc có hậu', 'Chỉ kể về loài vật', 'Không có nhân vật'], answer: 1, explanation: 'Truyện cổ tích thường có yếu tố kì ảo, thể hiện ước mơ công lí và kết thúc có hậu (ở hiền gặp lành).' },
  ],
};

export const SV7_VAN = {
  id: 'SV7-van-quiz', title: 'Lớp 7 · Ngữ văn — Ca dao tục ngữ, từ Hán Việt, điệp ngữ',
  kind: 'quiz', yearLevel: 2, subject: 'ngu-van', difficulty: 2,
  skillsTrained: ['ca-dao-tuc-ngu', 'thanh-ngu', 'tu-han-viet', 'diep-ngu-liet-ke'],
  questions: [
    { stem: 'Từ Hán Việt "phụ nữ" có nghĩa gần nhất là?', choices: ['Người già', 'Người nữ, đàn bà', 'Trẻ em', 'Người lao động'], answer: 1, explanation: '"Phụ nữ" (婦女) chỉ người nữ, đàn bà nói chung.' },
    { stem: 'Thành ngữ "Ếch ngồi đáy giếng" phê phán kiểu người nào?', choices: ['Người chăm chỉ', 'Người hiểu biết hạn hẹp mà huênh hoang', 'Người khiêm tốn', 'Người giàu có'], answer: 1, explanation: 'Hình ảnh con ếch tưởng bầu trời chỉ bằng miệng giếng → chê người tầm nhìn hạn hẹp mà chủ quan, kiêu ngạo.' },
    { stem: 'Điệp ngữ là biện pháp tu từ?', choices: ['Lặp lại từ ngữ (hoặc cả câu) để nhấn mạnh, tạo nhịp điệu', 'So sánh hai sự vật', 'Nói quá sự thật', 'Đảo trật tự từ'], answer: 0, explanation: 'Điệp ngữ = lặp lại có chủ ý từ ngữ nhằm nhấn mạnh ý, gợi cảm xúc và tạo nhịp điệu.' },
    { stem: 'Tục ngữ "Đói cho sạch, rách cho thơm" khuyên điều gì?', choices: ['Phải ăn mặc đẹp', 'Giữ phẩm giá, sống trong sạch dù nghèo khó', 'Tiết kiệm tiền bạc', 'Chăm chỉ lao động'], answer: 1, explanation: 'Dù nghèo đói, rách rưới vẫn phải giữ nhân cách, lối sống trong sạch, lương thiện.' },
    { stem: 'Ca dao Việt Nam thường được sáng tác theo thể thơ nào?', choices: ['Thất ngôn bát cú', 'Lục bát', 'Song thất lục bát bắt buộc', 'Tự do'], answer: 1, explanation: 'Phần lớn ca dao dùng thể lục bát, dễ nhớ, dễ thuộc, giàu nhạc điệu.' },
    { stem: 'Phép liệt kê là gì?', choices: ['Sắp xếp nối tiếp hàng loạt từ/cụm từ cùng loại để diễn tả đầy đủ hơn', 'Lặp lại một từ', 'So sánh ngầm', 'Nói giảm nói tránh'], answer: 0, explanation: 'Liệt kê = sắp xếp nối tiếp nhiều từ/cụm cùng loại nhằm diễn tả đầy đủ, sâu sắc các khía cạnh của thực tế.' },
    { stem: 'Thể thơ năm chữ thì mỗi dòng thơ có bao nhiêu tiếng?', choices: ['4 tiếng', '5 tiếng', '6 tiếng', '7 tiếng'], answer: 1, explanation: 'Thể thơ năm chữ (ngũ ngôn): mỗi dòng 5 tiếng.' },
    { stem: 'Số từ là từ dùng để chỉ?', choices: ['Hành động', 'Số lượng và thứ tự của sự vật', 'Tính chất', 'Cảm xúc'], answer: 1, explanation: 'Số từ chỉ số lượng (ba, năm…) hoặc thứ tự (thứ nhất, thứ hai…) của sự vật.' },
    { stem: 'Câu tục ngữ "Mau sao thì nắng, vắng sao thì mưa" thuộc chủ đề nào?', choices: ['Kinh nghiệm dự báo thời tiết', 'Đạo đức con người', 'Tình cảm gia đình', 'Lao động sản xuất lúa'], answer: 0, explanation: 'Đây là tục ngữ đúc kết kinh nghiệm quan sát bầu trời để dự đoán thời tiết nắng — mưa.' },
    { stem: 'Các phó từ "đã, đang, sẽ" bổ sung cho động từ ý nghĩa gì?', choices: ['Mức độ', 'Quan hệ thời gian', 'Sự phủ định', 'Sự cầu khiến'], answer: 1, explanation: '"Đã" (quá khứ), "đang" (hiện tại), "sẽ" (tương lai) — bổ sung ý nghĩa về thời gian.' },
  ],
};

export const SV8_VAN = {
  id: 'SV8-van-quiz', title: 'Lớp 8 · Ngữ văn — Truyện hiện thực, thơ Đường luật, nói quá',
  kind: 'quiz', yearLevel: 3, subject: 'ngu-van', difficulty: 3,
  skillsTrained: ['truyen-hien-thuc', 'tho-duong-luat', 'noi-qua-noi-giam', 'cau-ghep-tro-tu'],
  questions: [
    { stem: 'Truyện ngắn "Lão Hạc" là tác phẩm của nhà văn nào?', choices: ['Ngô Tất Tố', 'Nam Cao', 'Nguyên Hồng', 'Thạch Lam'], answer: 1, explanation: '"Lão Hạc" là truyện ngắn nổi tiếng của nhà văn Nam Cao, viết về người nông dân trước Cách mạng.' },
    { stem: 'Đoạn trích "Tức nước vỡ bờ" được rút từ tiểu thuyết nào?', choices: ['Tắt đèn (Ngô Tất Tố)', 'Số đỏ (Vũ Trọng Phụng)', 'Bỉ vỏ (Nguyên Hồng)', 'Giông tố (Vũ Trọng Phụng)'], answer: 0, explanation: '"Tức nước vỡ bờ" trích từ tiểu thuyết "Tắt đèn" của Ngô Tất Tố, với nhân vật chị Dậu.' },
    { stem: 'Câu "Mồ hôi thánh thót như mưa ruộng cày" sử dụng biện pháp tu từ nào?', choices: ['Nói giảm nói tránh', 'Nói quá (khoa trương)', 'Hoán dụ', 'Chơi chữ'], answer: 1, explanation: 'Phóng đại mức độ mồ hôi ("như mưa") để nhấn mạnh nỗi vất vả → nói quá.' },
    { stem: 'Trong câu "Bác đã đi rồi sao Bác ơi", từ "đi" là cách nói?', choices: ['Nói quá', 'Nói giảm nói tránh (thay cho "mất/qua đời")', 'Ẩn dụ', 'Điệp ngữ'], answer: 1, explanation: 'Dùng từ "đi" thay cho "chết/mất" để giảm sự đau buồn, nặng nề → nói giảm nói tránh.' },
    { stem: 'Thể thơ thất ngôn bát cú Đường luật có cấu trúc?', choices: ['8 câu, mỗi câu 7 chữ', '7 câu, mỗi câu 8 chữ', '4 câu, mỗi câu 7 chữ', '8 câu, mỗi câu 5 chữ'], answer: 0, explanation: 'Thất ngôn bát cú: "bát cú" = 8 câu, "thất ngôn" = mỗi câu 7 chữ.' },
    { stem: 'Từ tượng hình là loại từ?', choices: ['Mô phỏng âm thanh', 'Gợi tả hình ảnh, dáng vẻ, trạng thái của sự vật', 'Chỉ số lượng', 'Bộc lộ cảm xúc'], answer: 1, explanation: 'Từ tượng hình gợi tả hình ảnh, dáng vẻ (vd: lom khom, lừ đừ); từ tượng thanh mới mô phỏng âm thanh.' },
    { stem: 'Thán từ dùng để làm gì?', choices: ['Nối các vế câu', 'Bộc lộ cảm xúc hoặc dùng để gọi — đáp', 'Chỉ thời gian', 'Chỉ số lượng'], answer: 1, explanation: 'Thán từ (ôi, a, này, vâng…) dùng bộc lộ tình cảm, cảm xúc hoặc để gọi đáp.' },
    { stem: 'Câu ghép là câu?', choices: ['Chỉ có một cụm chủ — vị', 'Do hai hay nhiều cụm chủ — vị không bao chứa nhau tạo thành', 'Không có chủ ngữ', 'Chỉ gồm một từ'], answer: 1, explanation: 'Câu ghép có từ hai cụm C–V trở lên, các cụm không bao chứa nhau, mỗi cụm là một vế câu.' },
    { stem: 'Trong câu "Nó ăn những hai bát cơm", từ "những" là?', choices: ['Trợ từ (nhấn mạnh số lượng nhiều)', 'Thán từ', 'Quan hệ từ', 'Số từ'], answer: 0, explanation: '"Những" ở đây là trợ từ, dùng nhấn mạnh, đánh giá số lượng "hai bát" là nhiều.' },
    { stem: 'Bài thơ "Ngắm trăng" (Vọng nguyệt) trong "Nhật kí trong tù" là của tác giả nào?', choices: ['Tố Hữu', 'Hồ Chí Minh', 'Hàn Mặc Tử', 'Thế Lữ'], answer: 1, explanation: '"Ngắm trăng" nằm trong tập "Nhật kí trong tù" của Hồ Chí Minh.' },
  ],
};

export const SV9_VAN = {
  id: 'SV9-van-quiz', title: 'Lớp 9 · Ngữ văn — Truyện Kiều, truyện - thơ hiện đại, hội thoại',
  kind: 'quiz', yearLevel: 4, subject: 'ngu-van', difficulty: 3,
  skillsTrained: ['truyen-kieu', 'truyen-tho-hien-dai', 'phuong-cham-hoi-thoai', 'cach-dan-ham-y'],
  questions: [
    { stem: '"Truyện Kiều" là kiệt tác của đại thi hào nào?', choices: ['Nguyễn Trãi', 'Nguyễn Du', 'Nguyễn Đình Chiểu', 'Hồ Xuân Hương'], answer: 1, explanation: '"Truyện Kiều" (Đoạn trường tân thanh) là kiệt tác của đại thi hào Nguyễn Du.' },
    { stem: '"Truyện Kiều" được viết bằng thể thơ nào?', choices: ['Song thất lục bát', 'Lục bát', 'Thất ngôn bát cú', 'Tự do'], answer: 1, explanation: 'Truyện Kiều gồm 3254 câu thơ lục bát.' },
    { stem: '"Chuyện người con gái Nam Xương" (nhân vật Vũ Nương) trích từ "Truyền kì mạn lục" của ai?', choices: ['Nguyễn Dữ', 'Nguyễn Trãi', 'Ngô Sĩ Liên', 'Lê Quý Đôn'], answer: 0, explanation: '"Chuyện người con gái Nam Xương" là một trong 20 truyện của "Truyền kì mạn lục" — Nguyễn Dữ.' },
    { stem: 'Truyện ngắn "Làng" với nhân vật ông Hai yêu làng, yêu nước là của tác giả?', choices: ['Nguyễn Thành Long', 'Kim Lân', 'Nguyễn Quang Sáng', 'Nam Cao'], answer: 1, explanation: 'Truyện ngắn "Làng" của nhà văn Kim Lân khắc hoạ tình yêu làng quê gắn với lòng yêu nước.' },
    { stem: 'Bài thơ "Đồng chí" ca ngợi tình đồng đội của người lính là của nhà thơ nào?', choices: ['Chính Hữu', 'Phạm Tiến Duật', 'Tố Hữu', 'Quang Dũng'], answer: 0, explanation: '"Đồng chí" là bài thơ tiêu biểu của Chính Hữu viết về anh bộ đội thời kháng chiến chống Pháp.' },
    { stem: '"Bài thơ về tiểu đội xe không kính" là sáng tác của ai?', choices: ['Chính Hữu', 'Phạm Tiến Duật', 'Huy Cận', 'Nguyễn Khoa Điềm'], answer: 1, explanation: 'Tác phẩm của Phạm Tiến Duật, viết về người lính lái xe trên tuyến đường Trường Sơn.' },
    { stem: 'Phương châm hội thoại "đừng nói điều mình tin là không đúng hoặc không có bằng chứng" là phương châm?', choices: ['Về lượng', 'Về chất', 'Cách thức', 'Lịch sự'], answer: 1, explanation: 'Phương châm về chất: không nói điều mình tin là sai hoặc không có bằng chứng xác thực.' },
    { stem: 'Phương châm về lượng yêu cầu lời nói phải?', choices: ['Có nội dung đúng yêu cầu giao tiếp, không thiếu cũng không thừa', 'Ngắn nhất có thể', 'Luôn dùng từ Hán Việt', 'Nói thật to'], answer: 0, explanation: 'Phương châm về lượng: nội dung lời nói đáp ứng đúng yêu cầu cuộc giao tiếp, không thiếu, không thừa.' },
    { stem: 'Lời dẫn trực tiếp được đánh dấu bằng dấu câu nào?', choices: ['Dấu ngoặc kép (nhắc lại nguyên văn)', 'Dấu ngoặc đơn', 'Dấu gạch nối', 'Không cần dấu gì'], answer: 0, explanation: 'Cách dẫn trực tiếp: nhắc lại nguyên văn lời/ý người khác, đặt trong dấu ngoặc kép (thường sau dấu hai chấm).' },
    { stem: 'Hàm ý là phần thông báo?', choices: ['Được diễn đạt trực tiếp bằng từ ngữ trong câu', 'Tuy không nói ra trực tiếp nhưng có thể suy ra từ câu nói', 'Luôn sai sự thật', 'Chỉ có trong văn bản khoa học'], answer: 1, explanation: 'Hàm ý là phần thông báo không nói thẳng ra nhưng người nghe suy ra được; khác với nghĩa tường minh diễn đạt trực tiếp.' },
  ],
};

export const SECONDARY_LIT_SCENARIOS = {
  [SV6_VAN.id]: SV6_VAN,
  [SV7_VAN.id]: SV7_VAN,
  [SV8_VAN.id]: SV8_VAN,
  [SV9_VAN.id]: SV9_VAN,
};
