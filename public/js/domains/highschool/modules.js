// ============================================================
// Trường THPT — Module list (GDPT 2018)
// ============================================================
// yearLevel = thứ tự lớp trong cấp (1→Lớp 10 … 3→Lớp 12), khớp DOMAIN.yearLabels.
// Lớp 10: định hướng phân ban · Lớp 11: chuyên sâu · Lớp 12: ôn thi tốt nghiệp THPT.
// Quiz auto-stub khi chưa có scenario thật (trường đang ở mức preview).
// ============================================================

const M = (id, title, yl, subject, stars, prereq, description) => ({
  category: 'curriculum', id, title, yearLevel: yl, subject,
  scenarioIds: [`${id}-quiz`], knowledgeQuiz: `${id}-quiz`,
  minStarsToUnlock: stars, ...(prereq ? { prerequisites: [prereq] } : {}), description,
});

/** @type {import('../../engine/types.js').CourseModule[]} */
export const MODULES = [
  // ───────── Toán ─────────
  M('H-T10', 'Toán 10', 1, 'toan', 0, null,
    'Mệnh đề – tập hợp · bất phương trình & hệ bậc nhất hai ẩn · hàm số bậc hai · hệ thức lượng trong tam giác · vectơ · thống kê & xác suất.'),
  M('H-T11', 'Toán 11', 2, 'toan', 3, 'H-T10',
    'Hàm số lượng giác · dãy số – cấp số cộng/nhân · giới hạn · đạo hàm · quan hệ song song & vuông góc trong không gian · xác suất.'),
  M('H-T12', 'Toán 12', 3, 'toan', 6, 'H-T11',
    'Khảo sát & vẽ đồ thị hàm số · luỹ thừa – mũ – logarit · nguyên hàm – tích phân · số phức · phương pháp toạ độ trong không gian.'),

  // ───────── Ngữ văn ─────────
  M('H-V10', 'Ngữ văn 10', 1, 'ngu-van', 0, null,
    'Thần thoại & sử thi · thơ Đường luật · chèo/tuồng · văn nghị luận · thực hành tiếng Việt: từ Hán Việt, biện pháp tu từ.'),
  M('H-V11', 'Ngữ văn 11', 2, 'ngu-van', 3, 'H-V10',
    'Truyện ngắn hiện đại · thơ mới · tuỳ bút – tản văn · bi kịch · nghị luận xã hội & văn học · đặc điểm ngôn ngữ nói và viết.'),
  M('H-V12', 'Ngữ văn 12', 3, 'ngu-van', 6, 'H-V11',
    'Văn học cách mạng · truyện & kí hiện đại · phong cách ngôn ngữ · viết nghị luận có lập luận chặt · ôn thi tốt nghiệp THPT.'),

  // ───────── Tiếng Anh ─────────
  M('H-E10', 'Tiếng Anh 10', 1, 'tieng-anh', 0, null,
    'Family life · humans & the environment · music · gender equality. Ngữ pháp: thì hiện tại/quá khứ, to-infinitive, gerund; kĩ năng 4 kỹ năng.'),
  M('H-E11', 'Tiếng Anh 11', 2, 'tieng-anh', 3, 'H-E10',
    'Generation gap · global warming · cities of the future. Mệnh đề quan hệ, câu điều kiện, bị động; viết đoạn & thuyết trình.'),
  M('H-E12', 'Tiếng Anh 12', 3, 'tieng-anh', 6, 'H-E11',
    'Life stories · urbanisation · career choices. Reported speech, mệnh đề trạng ngữ; luyện đề thi tốt nghiệp THPT.'),

  // ───────── Vật lí (ban KHTN) ─────────
  M('H-L10', 'Vật lí 10', 1, 'vat-li', 0, null,
    'Động học & động lực học · các định luật Newton · công – năng lượng – công suất · động lượng · chuyển động tròn & biến dạng vật rắn.'),
  M('H-L11', 'Vật lí 11', 2, 'vat-li', 3, 'H-L10',
    'Dao động cơ · sóng · điện trường · dòng điện không đổi · điện trở & nguồn điện · thực hành đo lường điện.'),
  M('H-L12', 'Vật lí 12', 3, 'vat-li', 6, 'H-L11',
    'Dao động & sóng điện từ · dòng điện xoay chiều · sóng ánh sáng · lượng tử ánh sáng · vật lí hạt nhân · ôn thi THPT.'),

  // ───────── Hoá học (ban KHTN) ─────────
  M('H-H10', 'Hoá học 10', 1, 'hoa-hoc', 0, null,
    'Cấu tạo nguyên tử · bảng tuần hoàn · liên kết hoá học · phản ứng oxi hoá – khử · năng lượng & tốc độ phản ứng · nhóm halogen.'),
  M('H-H11', 'Hoá học 11', 2, 'hoa-hoc', 3, 'H-H10',
    'Cân bằng hoá học · nitơ – lưu huỳnh · đại cương hoá hữu cơ · hydrocarbon · dẫn xuất halogen – alcohol – phenol.'),
  M('H-H12', 'Hoá học 12', 3, 'hoa-hoc', 6, 'H-H11',
    'Ester – lipid · carbohydrate · amine – amino acid – protein · polymer · đại cương kim loại · ôn thi tốt nghiệp THPT.'),

  // ───────── Sinh học (ban KHTN) ─────────
  M('H-B10', 'Sinh học 10', 1, 'sinh-hoc', 0, null,
    'Thành phần hoá học của tế bào · cấu trúc tế bào · trao đổi chất & chuyển hoá năng lượng · phân bào · công nghệ vi sinh vật.'),
  M('H-B11', 'Sinh học 11', 2, 'sinh-hoc', 3, 'H-B10',
    'Trao đổi chất & chuyển hoá ở sinh vật · cảm ứng · sinh trưởng – phát triển · sinh sản ở thực vật và động vật.'),
  M('H-B12', 'Sinh học 12', 3, 'sinh-hoc', 6, 'H-B11',
    'Cơ sở phân tử & nhiễm sắc thể của di truyền · quy luật di truyền · di truyền quần thể · tiến hoá · sinh thái học · ôn thi THPT.'),

  // ───────── Lịch sử (ban KHXH) ─────────
  M('H-S10', 'Lịch sử 10', 1, 'lich-su', 0, null,
    'Sử học là gì · các nền văn minh thế giới cổ – trung đại · văn minh Đông Nam Á · cộng đồng các dân tộc Việt Nam.'),
  M('H-S11', 'Lịch sử 11', 2, 'lich-su', 3, 'H-S10',
    'Cách mạng tư sản & CNTB · CNXH từ 1917 · quá trình giành độc lập của Đông Nam Á · công cuộc cải cách & bảo vệ Tổ quốc.'),
  M('H-S12', 'Lịch sử 12', 3, 'lich-su', 6, 'H-S11',
    'Trật tự thế giới sau 1945 · ASEAN · cách mạng Việt Nam 1930–1975 · công cuộc Đổi mới · hội nhập quốc tế · ôn thi THPT.'),

  // ───────── Địa lí (ban KHXH) ─────────
  M('H-D10', 'Địa lí 10', 1, 'dia-li', 0, null,
    'Địa lí tự nhiên đại cương · thạch quyển – khí quyển – thuỷ quyển · địa lí dân cư · các nguồn lực & cơ cấu kinh tế.'),
  M('H-D11', 'Địa lí 11', 2, 'dia-li', 3, 'H-D10',
    'Toàn cầu hoá & khu vực hoá · một số tổ chức quốc tế · địa lí các khu vực và quốc gia tiêu biểu (Hoa Kì, Trung Quốc, Nhật Bản, ASEAN).'),
  M('H-D12', 'Địa lí 12', 3, 'dia-li', 6, 'H-D11',
    'Địa lí tự nhiên & dân cư Việt Nam · chuyển dịch cơ cấu kinh tế · các ngành & vùng kinh tế · biển đảo · ôn thi tốt nghiệp THPT.'),

  // ───────── GD Kinh tế & Pháp luật (ban KHXH) ─────────
  M('H-G10', 'GD Kinh tế & Pháp luật 10', 1, 'gdktpl', 0, null,
    'Nền kinh tế & các chủ thể · thị trường – giá cả · ngân sách – thuế · hệ thống chính trị & pháp luật nước CHXHCN Việt Nam.'),
  M('H-G11', 'GD Kinh tế & Pháp luật 11', 2, 'gdktpl', 3, 'H-G10',
    'Cạnh tranh – cung cầu · lạm phát – thất nghiệp · đạo đức kinh doanh · quyền bình đẳng & các quyền tự do cơ bản của công dân.'),
  M('H-G12', 'GD Kinh tế & Pháp luật 12', 3, 'gdktpl', 6, 'H-G11',
    'Tăng trưởng & phát triển kinh tế · hội nhập kinh tế quốc tế · pháp luật lao động, kinh doanh & quyền con người.'),

  // ───────── Tin học ─────────
  M('H-I10', 'Tin học 10', 1, 'tin-hoc', 0, null,
    'Máy tính & xã hội tri thức · biểu diễn thông tin · mạng & Internet an toàn · lập trình cơ bản với Python (định hướng Tin học ứng dụng / Khoa học máy tính).'),
  M('H-I11', 'Tin học 11', 2, 'tin-hoc', 3, 'H-I10',
    'Cơ sở dữ liệu & hệ quản trị · kĩ thuật lập trình · thiết kế web (ICT) hoặc cấu trúc dữ liệu & thuật toán (CS).'),
  M('H-I12', 'Tin học 12', 3, 'tin-hoc', 6, 'H-I11',
    'Trí tuệ nhân tạo & khoa học dữ liệu nhập môn · dự án phần mềm · an toàn – đạo đức số · định hướng nghề CNTT.'),
];
