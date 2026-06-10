// ============================================================
// Lớp 6 · GIÁO DỤC ĐỊA PHƯƠNG (Hà Nội) — 36 tuần
// Bám Tài liệu GDĐP Hà Nội lớp 6 · Sở GDĐT Hà Nội (CT GDPT 2018).
// 6 chủ đề: Địa lí–dân cư · Lịch sử · Văn hoá–lễ hội · Danh nhân ·
//          Làng nghề–kinh tế · Môi trường–đô thị.
// 1 tiết/tuần · HK1: T1–18 · HK2: T19–36 · ID prefix: "S6GDDP-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6GDDP', 'gd-dia-phuong', n, title, qs, opts);

export const S6GDDP_WEEKS = [
  // ──────────────── HK1 — ĐỊA LÍ · LỊCH SỬ HÀ NỘI ────────────────
  M(1, 'Vị trí địa lí và phạm vi Hà Nội', [
    Q('Hà Nội nằm ở vùng nào của Việt Nam?', ['Bắc Trung Bộ', 'Đồng bằng sông Hồng', 'Đông Nam Bộ', 'Tây Nguyên'], 1,
      'Hà Nội là trung tâm vùng Đồng bằng sông Hồng — phía bắc đất nước.',
      [
        '<b>Vị trí địa lí Hà Nội:</b> nằm ở trung tâm vùng <code>Đồng bằng sông Hồng</code>, phía bắc Việt Nam.',
        'Toạ độ khoảng <code>20°53′ – 21°23′ vĩ Bắc</code> và <code>105°44′ – 106°02′ kinh Đông</code>.',
        '<ul><li>Là <b>Thủ đô</b> — trung tâm chính trị, văn hoá, khoa học của cả nước.</li><li>Cửa ngõ vùng kinh tế trọng điểm Bắc Bộ.</li></ul>',
      ],
      [
        'Sai — <code>Bắc Trung Bộ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồng bằng sông Hồng</code> vì hà Nội là trung tâm vùng Đồng bằng sông Hồng — phía bắc đất nước.',
        'Đúng — <code>Đồng bằng sông Hồng</code> là phương án chính xác. Hà Nội là trung tâm vùng Đồng bằng sông Hồng — phía bắc đất nước.',
        'Sai — <code>Đông Nam Bộ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồng bằng sông Hồng</code> vì hà Nội là trung tâm vùng Đồng bằng sông Hồng — phía bắc đất nước.',
        'Sai — <code>Tây Nguyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồng bằng sông Hồng</code> vì hà Nội là trung tâm vùng Đồng bằng sông Hồng — phía bắc đất nước.',
      ]
    ),
    Q('Hà Nội có vị trí địa lí đặc biệt vì là?', ['Vùng núi cao', 'Đảo lớn nhất', 'Tỉnh ven biển', 'Thủ đô của Việt Nam'], 3,
      'Hà Nội là Thủ đô — trung tâm chính trị, văn hoá, khoa học của cả nước.',
      [
        '<b>Thủ đô</b> là trung tâm đầu não của một quốc gia về <i>chính trị – văn hoá – khoa học</i>.',
        '<ul><li>Hà Nội đặt trụ sở Quốc hội, Chính phủ, các bộ ngành.</li><li>Tập trung nhiều trường ĐH, viện nghiên cứu, bảo tàng.</li></ul>',
        'Khác với <code>tỉnh ven biển</code> (giáp biển) hay <code>đảo</code> (vùng đất giữa biển) — Hà Nội nằm sâu trong đất liền.',
      ],
      [
        'Sai — <code>Vùng núi cao</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thủ đô của Việt Nam</code> vì hà Nội là Thủ đô — trung tâm chính trị, văn hoá, khoa học của cả nước.',
        'Sai — <code>Đảo lớn nhất</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thủ đô của Việt Nam</code> vì hà Nội là Thủ đô — trung tâm chính trị, văn hoá, khoa học của cả nước.',
        'Sai — <code>Tỉnh ven biển</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thủ đô của Việt Nam</code> vì hà Nội là Thủ đô — trung tâm chính trị, văn hoá, khoa học của cả nước.',
        'Đúng — <code>Thủ đô của Việt Nam</code> là phương án chính xác. Hà Nội là Thủ đô — trung tâm chính trị, văn hoá, khoa học của cả nước.',
      ]
    ),
    Q('Hà Nội tiếp giáp với bao nhiêu tỉnh?', ['7', '5', '8', '10'], 2,
      'Hà Nội tiếp giáp 8 tỉnh xung quanh.',
      [
        '<b>8 tỉnh giáp Hà Nội:</b>',
        '<ul><li>Phía bắc: <code>Thái Nguyên, Vĩnh Phúc</code>.</li><li>Phía đông: <code>Bắc Giang, Bắc Ninh, Hưng Yên</code>.</li><li>Phía nam: <code>Hà Nam</code>.</li><li>Phía tây: <code>Hoà Bình, Phú Thọ</code>.</li></ul>',
        'Mẹo nhớ: <i>Thái – Vĩnh – Giang – Ninh – Hưng – Hà – Hoà – Phú</i>.',
      ],
      [
        'Sai — <code>7</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>8</code> vì hà Nội tiếp giáp 8 tỉnh xung quanh.',
        'Sai — <code>5</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>8</code> vì hà Nội tiếp giáp 8 tỉnh xung quanh.',
        'Đúng — <code>8</code> là phương án chính xác. Hà Nội tiếp giáp 8 tỉnh xung quanh.',
        'Sai — <code>10</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>8</code> vì hà Nội tiếp giáp 8 tỉnh xung quanh.',
      ]
    ),
    Q('Sông lớn nào chảy qua Hà Nội?', ['Sông Mê Kông', 'Sông Cửu Long', 'Sông Hương', 'Sông Hồng'], 3,
      'Sông Hồng chảy qua Hà Nội, xưa gọi là sông Cái, sông Nhị Hà.',
      [
        '<b>Sông Hồng</b> — dòng sông Mẹ của Hà Nội, dài khoảng <code>163 km</code> đoạn qua Thủ đô.',
        '<ul><li>Bồi đắp <i>đồng bằng phù sa</i> màu mỡ.</li><li>Là tuyến giao thông thuỷ huyết mạch từ xưa.</li><li>Tên cũ: <code>sông Cái</code>, <code>sông Nhị Hà</code>.</li></ul>',
        'Sông Mê Kông – Cửu Long chảy ở Nam Bộ; sông Hương ở Huế.',
      ],
      [
        'Sai — <code>Sông Mê Kông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì sông Hồng chảy qua Hà Nội, xưa gọi là sông Cái, sông Nhị Hà.',
        'Sai — <code>Sông Cửu Long</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì sông Hồng chảy qua Hà Nội, xưa gọi là sông Cái, sông Nhị Hà.',
        'Sai — <code>Sông Hương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì sông Hồng chảy qua Hà Nội, xưa gọi là sông Cái, sông Nhị Hà.',
        'Đúng — <code>Sông Hồng</code> là phương án chính xác. Sông Hồng chảy qua Hà Nội, xưa gọi là sông Cái, sông Nhị Hà.',
      ]
    ),
    Q('Hà Nội mở rộng địa giới hành chính lần gần nhất vào năm nào?', ['2008', '2020', '1954', '1975'], 0,
      'Năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.',
      [
        '<b>Mốc 2008</b> — Hà Nội mở rộng địa giới lần lớn nhất:',
        '<ul><li>Sáp nhập toàn bộ tỉnh <code>Hà Tây</code>.</li><li>Một phần huyện Mê Linh (<code>Vĩnh Phúc</code>) và 4 xã huyện Lương Sơn (<code>Hoà Bình</code>).</li></ul>',
        'Diện tích tăng gấp <b>3,6 lần</b>, mở rộng không gian phát triển.',
      ],
      [
        'Đúng — <code>2008</code> là phương án chính xác. Năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.',
        'Sai — <code>2020</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2008</code> vì năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.',
        'Sai — <code>1954</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2008</code> vì năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.',
        'Sai — <code>1975</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2008</code> vì năm 2008 Hà Nội sáp nhập Hà Tây, một phần Vĩnh Phúc và Hoà Bình.',
      ]
    ),
    Q('Diện tích Hà Nội hiện nay vào khoảng?', ['10 000 km²', '5 000 km²', '1 000 km²', '3 359 km²'], 3,
      'Sau lần mở rộng 2008, diện tích Hà Nội khoảng 3 359 km².',
      [
        '<b>Diện tích Hà Nội:</b> khoảng <code>3 359 km²</code> (sau 2008).',
        '<ul><li>Đứng trong nhóm <i>thủ đô có diện tích lớn nhất thế giới</i>.</li><li>Gồm 12 quận, 17 huyện, 1 thị xã.</li></ul>',
        'So sánh: trước 2008 chỉ khoảng <code>921 km²</code> — đã tăng gấp 3,6 lần.',
      ],
      [
        'Sai — <code>10 000 km²</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>3 359 km²</code> vì sau lần mở rộng 2008, diện tích Hà Nội khoảng 3 359 km².',
        'Sai — <code>5 000 km²</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>3 359 km²</code> vì sau lần mở rộng 2008, diện tích Hà Nội khoảng 3 359 km².',
        'Sai — <code>1 000 km²</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>3 359 km²</code> vì sau lần mở rộng 2008, diện tích Hà Nội khoảng 3 359 km².',
        'Đúng — <code>3 359 km²</code> là phương án chính xác. Sau lần mở rộng 2008, diện tích Hà Nội khoảng 3 359 km².',
      ]
    ),
  ]),

  M(2, 'Địa hình và khí hậu Hà Nội', [
    Q('Phần lớn địa hình Hà Nội là?', ['Cao nguyên', 'Hải đảo', 'Đồng bằng', 'Núi cao'], 2,
      'Hà Nội chủ yếu là đồng bằng phù sa sông Hồng – sông Đáy.',
      [
        '<b>Địa hình Hà Nội:</b> khoảng <code>3/4 diện tích</code> là đồng bằng phù sa.',
        '<ul><li>Độ cao trung bình <code>5 – 20 m</code> so mực biển.</li><li>Phía tây và bắc có vùng đồi núi thấp ở Ba Vì, Sóc Sơn, Thạch Thất, Quốc Oai.</li></ul>',
        'Phù sa sông Hồng – sông Đáy tạo nên đất nông nghiệp màu mỡ.',
      ],
      [
        'Sai — <code>Cao nguyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồng bằng</code> vì hà Nội chủ yếu là đồng bằng phù sa sông Hồng – sông Đáy.',
        'Sai — <code>Hải đảo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồng bằng</code> vì hà Nội chủ yếu là đồng bằng phù sa sông Hồng – sông Đáy.',
        'Đúng — <code>Đồng bằng</code> là phương án chính xác. Hà Nội chủ yếu là đồng bằng phù sa sông Hồng – sông Đáy.',
        'Sai — <code>Núi cao</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồng bằng</code> vì hà Nội chủ yếu là đồng bằng phù sa sông Hồng – sông Đáy.',
      ]
    ),
    Q('Đỉnh núi cao nhất Hà Nội nằm ở?', ['Đông Anh', 'Ba Vì', 'Sóc Sơn', 'Long Biên'], 1,
      'Núi Ba Vì (Tản Viên) cao nhất Hà Nội, khoảng 1 296 m.',
      [
        '<b>Núi Ba Vì</b> — "nóc nhà Hà Nội":',
        '<ul><li>3 đỉnh cao: <code>đỉnh Vua, đỉnh Tản Viên, đỉnh Ngọc Hoa</code>.</li><li>Cao khoảng <code>1 296 m</code>.</li><li>Gắn truyền thuyết <i>Sơn Tinh – Thuỷ Tinh</i>.</li></ul>',
        'Đông Anh, Sóc Sơn, Long Biên đều là vùng đồng bằng hoặc đồi thấp.',
      ],
      [
        'Sai — <code>Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ba Vì</code> vì núi Ba Vì (Tản Viên) cao nhất Hà Nội, khoảng 1 296 m.',
        'Đúng — <code>Ba Vì</code> là phương án chính xác. Núi Ba Vì (Tản Viên) cao nhất Hà Nội, khoảng 1 296 m.',
        'Sai — <code>Sóc Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ba Vì</code> vì núi Ba Vì (Tản Viên) cao nhất Hà Nội, khoảng 1 296 m.',
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ba Vì</code> vì núi Ba Vì (Tản Viên) cao nhất Hà Nội, khoảng 1 296 m.',
      ]
    ),
    Q('Khí hậu Hà Nội thuộc kiểu?', ['Ôn đới', 'Nhiệt đới gió mùa', 'Hàn đới', 'Xích đạo'], 1,
      'Hà Nội có khí hậu nhiệt đới gió mùa với 4 mùa rõ rệt.',
      [
        '<b>Khí hậu nhiệt đới gió mùa</b> của Hà Nội:',
        '<ul><li>Mùa hạ (T5–9): <code>nóng, mưa nhiều</code>, gió mùa Đông Nam.</li><li>Mùa đông (T11–3): <code>lạnh khô đầu mùa, ẩm cuối mùa</code>, gió mùa Đông Bắc.</li><li>Xuân và thu: 2 mùa chuyển tiếp ngắn, dễ chịu.</li></ul>',
        '⚠️ Không phải ôn đới (châu Âu), hàn đới (Bắc Cực) hay xích đạo (gần xích đạo).',
      ],
      [
        'Sai — <code>Ôn đới</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhiệt đới gió mùa</code> vì hà Nội có khí hậu nhiệt đới gió mùa với 4 mùa rõ rệt.',
        'Đúng — <code>Nhiệt đới gió mùa</code> là phương án chính xác. Hà Nội có khí hậu nhiệt đới gió mùa với 4 mùa rõ rệt.',
        'Sai — <code>Hàn đới</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhiệt đới gió mùa</code> vì hà Nội có khí hậu nhiệt đới gió mùa với 4 mùa rõ rệt.',
        'Sai — <code>Xích đạo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhiệt đới gió mùa</code> vì hà Nội có khí hậu nhiệt đới gió mùa với 4 mùa rõ rệt.',
      ]
    ),
    Q('Mùa lạnh nhất ở Hà Nội thường vào tháng?', ['7', '10', '4', '1'], 3,
      'Tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.',
      [
        '<b>Tháng 1</b> là tháng lạnh nhất Hà Nội — nhiệt độ trung bình khoảng <code>16°C</code>.',
        '<ul><li>Nguyên nhân: <i>gió mùa Đông Bắc</i> thổi mạnh từ lục địa châu Á xuống.</li><li>Có ngày xuống <code>8 – 10°C</code>.</li></ul>',
        'Tháng 7 là tháng nóng nhất (~29°C, có ngày trên 38°C).',
      ],
      [
        'Sai — <code>7</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1</code> vì tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.',
        'Sai — <code>10</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1</code> vì tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.',
        'Sai — <code>4</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1</code> vì tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.',
        'Đúng — <code>1</code> là phương án chính xác. Tháng 1 nhiệt độ thấp nhất do gió mùa Đông Bắc mạnh.',
      ]
    ),
    Q('Đặc trưng của tháng 7 ở Hà Nội?', ['Có tuyết', 'Lạnh, khô', 'Nóng, mưa nhiều', 'Mát mẻ'], 2,
      'Tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.',
      [
        '<b>Tháng 7 ở Hà Nội:</b> đỉnh điểm mùa hạ nhiệt đới.',
        '<ul><li>Nhiệt độ trung bình <code>~29°C</code>, có ngày <code>38°C+</code>.</li><li>Mưa rào nhiệt đới thường xuyên.</li><li>Mùa bão bắt đầu (tháng 7–9).</li></ul>',
        'Hà Nội không có tuyết — khác hoàn toàn vùng ôn đới.',
      ],
      [
        'Sai — <code>Có tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nóng, mưa nhiều</code> vì tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.',
        'Sai — <code>Lạnh, khô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nóng, mưa nhiều</code> vì tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.',
        'Đúng — <code>Nóng, mưa nhiều</code> là phương án chính xác. Tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.',
        'Sai — <code>Mát mẻ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nóng, mưa nhiều</code> vì tháng 7 nắng nóng đỉnh điểm và mưa rào nhiều.',
      ]
    ),
    Q('Hiện tượng thời tiết đặc biệt vào mùa xuân ở Hà Nội?', ['Băng giá', 'Bão tuyết', 'Mưa phùn nồm ẩm', 'Khô hạn'], 2,
      'Mưa phùn, nồm ẩm là đặc trưng mùa xuân HN.',
      [
        '<b>Hiện tượng "nồm ẩm"</b> cuối đông – đầu xuân ở Hà Nội:',
        '<ul><li>Gió <code>Đông Nam</code> mang không khí ấm ẩm từ biển vào.</li><li>Gặp bề mặt vẫn còn lạnh → ngưng tụ hơi nước trên tường, sàn.</li><li>Sàn nhà "<i>đổ mồ hôi</i>", quần áo lâu khô.</li></ul>',
        'Cùng với <b>mưa phùn</b> dày — đặc trưng riêng của miền Bắc.',
      ],
      [
        'Sai — <code>Băng giá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mưa phùn nồm ẩm</code> vì mưa phùn, nồm ẩm là đặc trưng mùa xuân HN.',
        'Sai — <code>Bão tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mưa phùn nồm ẩm</code> vì mưa phùn, nồm ẩm là đặc trưng mùa xuân HN.',
        'Đúng — <code>Mưa phùn nồm ẩm</code> là phương án chính xác. Mưa phùn, nồm ẩm là đặc trưng mùa xuân HN.',
        'Sai — <code>Khô hạn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mưa phùn nồm ẩm</code> vì mưa phùn, nồm ẩm là đặc trưng mùa xuân HN.',
      ]
    ),
  ]),

  M(3, 'Dân cư và các đơn vị hành chính Hà Nội', [
    Q('Hà Nội hiện có bao nhiêu đơn vị hành chính cấp huyện (quận–huyện–thị xã)?', ['20', '12', '40', '30'], 3,
      'Khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).',
      [
        '<b>30 đơn vị hành chính cấp huyện</b> của Hà Nội:',
        '<ul><li><code>12 quận</code> nội thành: Ba Đình, Hoàn Kiếm, Đống Đa, Hai Bà Trưng, Tây Hồ, Cầu Giấy, Thanh Xuân, Hoàng Mai, Long Biên, Hà Đông, Bắc Từ Liêm, Nam Từ Liêm.</li><li><code>17 huyện</code> ngoại thành: Đông Anh, Gia Lâm, Sóc Sơn, Thanh Trì, Mê Linh, Ba Vì...</li><li><code>1 thị xã</code>: Sơn Tây.</li></ul>',
        'Tổng: 12 + 17 + 1 = <b>30</b>.',
      ],
      [
        'Sai — <code>20</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>30</code> vì khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).',
        'Sai — <code>12</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>30</code> vì khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).',
        'Sai — <code>40</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>30</code> vì khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).',
        'Đúng — <code>30</code> là phương án chính xác. Khoảng 30 đơn vị: 12 quận, 17 huyện, 1 thị xã (Sơn Tây).',
      ]
    ),
    Q('Thị xã duy nhất của Hà Nội là?', ['Long Biên', 'Hà Đông', 'Sơn Tây', 'Bắc Từ Liêm'], 2,
      'Sơn Tây là thị xã duy nhất của Hà Nội hiện nay.',
      [
        '<b>Sơn Tây</b> — thị xã duy nhất của Hà Nội:',
        '<ul><li>Nổi tiếng với <i>thành cổ Sơn Tây</i> và <i>chùa Mía</i>.</li><li>Trước đây là tỉnh lị tỉnh Sơn Tây cũ.</li></ul>',
        'Long Biên, Hà Đông, Bắc Từ Liêm đều đã lên <code>quận</code> nội thành.',
      ],
      [
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sơn Tây</code> vì sơn Tây là thị xã duy nhất của Hà Nội hiện nay.',
        'Sai — <code>Hà Đông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sơn Tây</code> vì sơn Tây là thị xã duy nhất của Hà Nội hiện nay.',
        'Đúng — <code>Sơn Tây</code> là phương án chính xác. Sơn Tây là thị xã duy nhất của Hà Nội hiện nay.',
        'Sai — <code>Bắc Từ Liêm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sơn Tây</code> vì sơn Tây là thị xã duy nhất của Hà Nội hiện nay.',
      ]
    ),
    Q('Dân số Hà Nội hiện nay vào khoảng?', ['20 triệu', '4 triệu', '8 triệu', '1 triệu'], 2,
      'Khoảng 8 triệu người (cả tạm trú).',
      [
        '<b>Dân số Hà Nội</b> khoảng <code>8 triệu người</code> (cả thường trú và tạm trú).',
        '<ul><li>Là 1 trong 2 thành phố đông dân nhất Việt Nam (cùng TPHCM).</li><li>Mật độ rất cao ở nội thành — có nơi trên <code>30 000 người/km²</code> (Đống Đa, Hoàn Kiếm).</li></ul>',
        'Số 20 triệu là dân TPHCM mở rộng vùng đô thị; 4 triệu, 1 triệu quá ít.',
      ],
      [
        'Sai — <code>20 triệu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>8 triệu</code> vì khoảng 8 triệu người (cả tạm trú).',
        'Sai — <code>4 triệu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>8 triệu</code> vì khoảng 8 triệu người (cả tạm trú).',
        'Đúng — <code>8 triệu</code> là phương án chính xác. Khoảng 8 triệu người (cả tạm trú).',
        'Sai — <code>1 triệu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>8 triệu</code> vì khoảng 8 triệu người (cả tạm trú).',
      ]
    ),
    Q('Dân tộc đa số ở Hà Nội là?', ['Mường', 'Kinh', 'Dao', 'Tày'], 1,
      'Người Kinh chiếm tuyệt đại đa số dân cư Hà Nội.',
      [
        '<b>Thành phần dân tộc Hà Nội:</b>',
        '<ul><li>Người <code>Kinh</code> chiếm tuyệt đại đa số.</li><li>Người <code>Mường, Dao</code> sống ở 7 xã miền núi huyện Ba Vì.</li></ul>',
        'Đây là nét <i>đa dạng văn hoá</i> đặc biệt của Thủ đô.',
      ],
      [
        'Sai — <code>Mường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kinh</code> vì người Kinh chiếm tuyệt đại đa số dân cư Hà Nội.',
        'Đúng — <code>Kinh</code> là phương án chính xác. Người Kinh chiếm tuyệt đại đa số dân cư Hà Nội.',
        'Sai — <code>Dao</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kinh</code> vì người Kinh chiếm tuyệt đại đa số dân cư Hà Nội.',
        'Sai — <code>Tày</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kinh</code> vì người Kinh chiếm tuyệt đại đa số dân cư Hà Nội.',
      ]
    ),
    Q('Cộng đồng dân tộc thiểu số đông nhất ở Hà Nội tập trung ở huyện?', ['Hoài Đức', 'Đông Anh', 'Gia Lâm', 'Ba Vì'], 3,
      'Người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.',
      [
        '<b>7 xã miền núi Ba Vì</b> — nơi cộng đồng Mường, Dao sinh sống:',
        '<ul><li>Ba Vì, Khánh Thượng, Minh Quang, Vân Hoà, Yên Bài, Tản Lĩnh, Ba Trại.</li></ul>',
        'Đây cũng là vùng <i>vườn quốc gia Ba Vì</i> với truyền thuyết Sơn Tinh – Tản Viên Sơn Thánh.',
      ],
      [
        'Sai — <code>Hoài Đức</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ba Vì</code> vì người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.',
        'Sai — <code>Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ba Vì</code> vì người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.',
        'Sai — <code>Gia Lâm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ba Vì</code> vì người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.',
        'Đúng — <code>Ba Vì</code> là phương án chính xác. Người Mường, Dao sinh sống ở 7 xã miền núi Ba Vì.',
      ]
    ),
    Q('Mật độ dân số cao nhất Hà Nội thường ở các?', ['Đảo nhỏ', 'Huyện ngoại thành', 'Vùng núi Ba Vì', 'Quận nội thành'], 3,
      'Nội thành mật độ rất cao, ngoại thành thưa hơn nhiều.',
      [
        '<b>Phân bố dân cư Hà Nội — không đồng đều:</b>',
        '<ul><li>Quận nội thành (Đống Đa, Hoàn Kiếm, Hai Bà Trưng): mật độ <code>trên 30 000 người/km²</code>.</li><li>Huyện ngoại thành (Ba Vì, Mỹ Đức): chỉ vài trăm người/km².</li></ul>',
        'Nguyên nhân: nội thành tập trung cơ quan, trường học, bệnh viện, thương mại.',
      ],
      [
        'Sai — <code>Đảo nhỏ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quận nội thành</code> vì nội thành mật độ rất cao, ngoại thành thưa hơn nhiều.',
        'Sai — <code>Huyện ngoại thành</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quận nội thành</code> vì nội thành mật độ rất cao, ngoại thành thưa hơn nhiều.',
        'Sai — <code>Vùng núi Ba Vì</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quận nội thành</code> vì nội thành mật độ rất cao, ngoại thành thưa hơn nhiều.',
        'Đúng — <code>Quận nội thành</code> là phương án chính xác. Nội thành mật độ rất cao, ngoại thành thưa hơn nhiều.',
      ]
    ),
  ]),

  M(4, 'Sông Hồng và hệ thống sông – hồ Hà Nội', [
    Q('Tên xưa của sông Hồng đoạn qua Hà Nội là?', ['Sông Cầu', 'Sông Tô Lịch', 'Sông Đáy', 'Sông Nhị Hà'], 3,
      'Sông Hồng từng được gọi là sông Nhị Hà, sông Cái.',
      [
        '<b>Sông Hồng</b> — sông Mẹ của Hà Nội, có nhiều tên gọi qua các thời kì:',
        '<ul><li><code>Sông Cái</code> — sông lớn nuôi đồng bằng.</li><li><code>Sông Nhị Hà</code> — tên Hán Việt.</li><li><code>Sông Hồng</code> — tên hiện nay, do nước có màu đỏ vì phù sa.</li></ul>',
        'Sông Cầu, sông Tô Lịch, sông Đáy là các sông khác trong hệ thống.',
      ],
      [
        'Sai — <code>Sông Cầu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Nhị Hà</code> vì sông Hồng từng được gọi là sông Nhị Hà, sông Cái.',
        'Sai — <code>Sông Tô Lịch</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Nhị Hà</code> vì sông Hồng từng được gọi là sông Nhị Hà, sông Cái.',
        'Sai — <code>Sông Đáy</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Nhị Hà</code> vì sông Hồng từng được gọi là sông Nhị Hà, sông Cái.',
        'Đúng — <code>Sông Nhị Hà</code> là phương án chính xác. Sông Hồng từng được gọi là sông Nhị Hà, sông Cái.',
      ]
    ),
    Q('Hồ nước nổi tiếng nằm giữa trung tâm Hà Nội?', ['Hồ Trúc Bạch', 'Hồ Bảy Mẫu', 'Hồ Gươm (Hoàn Kiếm)', 'Hồ Tây'], 2,
      'Hồ Hoàn Kiếm (Hồ Gươm) là biểu tượng trung tâm Hà Nội.',
      [
        '<b>Hồ Hoàn Kiếm</b> — trái tim Thủ đô:',
        '<ul><li>Nằm giữa quận <code>Hoàn Kiếm</code>.</li><li>Gắn truyền thuyết <i>Lê Lợi trả gươm cho Rùa thần</i>.</li><li>Có <code>Tháp Rùa</code> và đền Ngọc Sơn nổi tiếng.</li></ul>',
        'Hồ Tây lớn nhất nhưng ở phía tây bắc; Trúc Bạch và Bảy Mẫu nhỏ hơn.',
      ],
      [
        'Sai — <code>Hồ Trúc Bạch</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Gươm (Hoàn Kiếm)</code> vì hồ Hoàn Kiếm (Hồ Gươm) là biểu tượng trung tâm Hà Nội.',
        'Sai — <code>Hồ Bảy Mẫu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Gươm (Hoàn Kiếm)</code> vì hồ Hoàn Kiếm (Hồ Gươm) là biểu tượng trung tâm Hà Nội.',
        'Đúng — <code>Hồ Gươm (Hoàn Kiếm)</code> là phương án chính xác. Hồ Hoàn Kiếm (Hồ Gươm) là biểu tượng trung tâm Hà Nội.',
        'Sai — <code>Hồ Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Gươm (Hoàn Kiếm)</code> vì hồ Hoàn Kiếm (Hồ Gươm) là biểu tượng trung tâm Hà Nội.',
      ]
    ),
    Q('Hồ lớn nhất Hà Nội nội thành?', ['Hồ Tây', 'Hồ Thiền Quang', 'Hồ Linh Đàm', 'Hồ Gươm'], 0,
      'Hồ Tây diện tích khoảng 500 ha — lớn nhất nội thành.',
      [
        '<b>Hồ Tây</b> — "biển trong lòng Thủ đô":',
        '<ul><li>Diện tích khoảng <code>500 ha</code>.</li><li>Vốn là <i>khúc cong cũ của sông Hồng</i>.</li><li>Nổi tiếng với <code>sen Bách Diệp</code> và <code>trà sen Tây Hồ</code>.</li></ul>',
        'Hồ Gươm chỉ ~12 ha, Linh Đàm ~74 ha, Thiền Quang ~5 ha — đều nhỏ hơn nhiều.',
      ],
      [
        'Đúng — <code>Hồ Tây</code> là phương án chính xác. Hồ Tây diện tích khoảng 500 ha — lớn nhất nội thành.',
        'Sai — <code>Hồ Thiền Quang</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Tây</code> vì hồ Tây diện tích khoảng 500 ha — lớn nhất nội thành.',
        'Sai — <code>Hồ Linh Đàm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Tây</code> vì hồ Tây diện tích khoảng 500 ha — lớn nhất nội thành.',
        'Sai — <code>Hồ Gươm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Tây</code> vì hồ Tây diện tích khoảng 500 ha — lớn nhất nội thành.',
      ]
    ),
    Q('Sông nào từng là con đường thuỷ chính của kinh thành Thăng Long xưa?', ['Sông Tô Lịch', 'Sông Cả', 'Sông Mã', 'Sông Cầu'], 0,
      'Sông Tô Lịch nối Hồ Tây ra sông Hồng — tuyến giao thông chính.',
      [
        '<b>Sông Tô Lịch</b> — tuyến thuỷ huyết mạch của kinh thành Thăng Long xưa:',
        '<ul><li>Nối <i>Hồ Tây</i> ra sông Hồng.</li><li>Thuyền buôn tấp nập, dân cư ven sông sầm uất.</li><li>Nay đã bị thu hẹp, ô nhiễm — đang được cải tạo.</li></ul>',
        'Sông Cả ở Nghệ An, sông Mã ở Thanh Hoá, sông Cầu ở Bắc Ninh.',
      ],
      [
        'Đúng — <code>Sông Tô Lịch</code> là phương án chính xác. Sông Tô Lịch nối Hồ Tây ra sông Hồng — tuyến giao thông chính.',
        'Sai — <code>Sông Cả</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Tô Lịch</code> vì sông Tô Lịch nối Hồ Tây ra sông Hồng — tuyến giao thông chính.',
        'Sai — <code>Sông Mã</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Tô Lịch</code> vì sông Tô Lịch nối Hồ Tây ra sông Hồng — tuyến giao thông chính.',
        'Sai — <code>Sông Cầu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Tô Lịch</code> vì sông Tô Lịch nối Hồ Tây ra sông Hồng — tuyến giao thông chính.',
      ]
    ),
    Q('Tên gọi "Hồ Hoàn Kiếm" gắn với truyền thuyết về?', ['Trần Hưng Đạo', 'Lê Lợi trả gươm thần', 'Lý Thái Tổ', 'An Dương Vương'], 1,
      'Vua Lê Lợi trả gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm.',
      [
        '<b>Truyền thuyết Hồ Hoàn Kiếm:</b>',
        '<ul><li>Lê Lợi được Long Quân cho mượn <i>gươm thần</i> đánh đuổi quân Minh.</li><li>Sau khi thắng giặc, vua dạo thuyền trên hồ, <code>Rùa Vàng</code> hiện lên đòi gươm.</li><li>Vua trả lại gươm → tên gọi <b>Hoàn Kiếm</b> (trả gươm).</li></ul>',
        'Trần Hưng Đạo, Lý Thái Tổ, An Dương Vương gắn với di tích khác.',
      ],
      [
        'Sai — <code>Trần Hưng Đạo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lê Lợi trả gươm thần</code> vì vua Lê Lợi trả gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm.',
        'Đúng — <code>Lê Lợi trả gươm thần</code> là phương án chính xác. Vua Lê Lợi trả gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm.',
        'Sai — <code>Lý Thái Tổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lê Lợi trả gươm thần</code> vì vua Lê Lợi trả gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm.',
        'Sai — <code>An Dương Vương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lê Lợi trả gươm thần</code> vì vua Lê Lợi trả gươm cho Rùa thần nên gọi Hồ Hoàn Kiếm.',
      ]
    ),
    Q('Sông Đáy chảy ở phía nào của Hà Nội?', ['Đông Nam', 'Bắc', 'Tây Nam', 'Đông Bắc'], 2,
      'Sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.',
      [
        '<b>Sông Đáy</b>:',
        '<ul><li>Là nhánh phân lưu của sông Hồng.</li><li>Chảy ở phía <code>tây – tây nam</code> Hà Nội.</li><li>Qua các huyện Hoài Đức, Quốc Oai, Chương Mỹ, Mỹ Đức, Ứng Hoà.</li></ul>',
        'Cùng sông Tích, sông Nhuệ, sông Cà Lồ tạo hệ thống tiêu nước nội đồng.',
      ],
      [
        'Sai — <code>Đông Nam</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tây Nam</code> vì sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.',
        'Sai — <code>Bắc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tây Nam</code> vì sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.',
        'Đúng — <code>Tây Nam</code> là phương án chính xác. Sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.',
        'Sai — <code>Đông Bắc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tây Nam</code> vì sông Đáy là nhánh sông Hồng, chảy ở phía Tây – Tây Nam HN.',
      ]
    ),
  ]),

  M(5, 'Tên gọi Thăng Long – Đông Đô – Hà Nội qua các thời kì', [
    Q('Năm 1010, ai đã định đô tại Thăng Long?', ['Trần Nhân Tông', 'Lý Thái Tổ', 'Ngô Quyền', 'Lê Lợi'], 1,
      'Lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.',
      [
        '<b>Lý Thái Tổ (Lý Công Uẩn)</b> — vua sáng lập triều Lý:',
        '<ul><li>Mùa thu năm <code>Canh Tuất 1010</code>, dời đô từ Hoa Lư về Đại La.</li><li>Đổi tên thành <b>Thăng Long</b> ("rồng bay lên").</li><li>Ban hành <i>"Chiếu dời đô"</i> nổi tiếng.</li></ul>',
        'Ngô Quyền (938) ở Cổ Loa; Lê Lợi (1428) đóng đô Đông Kinh; Trần Nhân Tông thời sau.',
      ],
      [
        'Sai — <code>Trần Nhân Tông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Thái Tổ</code> vì lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.',
        'Đúng — <code>Lý Thái Tổ</code> là phương án chính xác. Lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.',
        'Sai — <code>Ngô Quyền</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Thái Tổ</code> vì lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.',
        'Sai — <code>Lê Lợi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Thái Tổ</code> vì lý Thái Tổ (Lý Công Uẩn) dời đô từ Hoa Lư về Đại La, đổi tên Thăng Long.',
      ]
    ),
    Q('Tên "Thăng Long" có nghĩa là?', ['Rồng bay lên', 'Thuyền rồng', 'Rồng vàng', 'Long mạch'], 0,
      'Thăng = bay lên, Long = rồng — gắn truyền thuyết rồng bay khi vua dời đô.',
      [
        '<b>"Thăng Long" (升龍)</b>:',
        '<ul><li><code>Thăng</code> = bay lên.</li><li><code>Long</code> = rồng.</li></ul>',
        'Khi thuyền vua cập bến Đại La, tương truyền có <i>rồng vàng hiện ra</i> bay lên trời → vua đặt tên Thăng Long.',
        'Tên này tồn tại qua các triều Lý – Trần (gần 400 năm).',
      ],
      [
        'Đúng — <code>Rồng bay lên</code> là phương án chính xác. Thăng = bay lên, Long = rồng — gắn truyền thuyết rồng bay khi vua dời đô.',
        'Sai — <code>Thuyền rồng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rồng bay lên</code> vì thăng = bay lên, Long = rồng — gắn truyền thuyết rồng bay khi vua dời đô.',
        'Sai — <code>Rồng vàng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rồng bay lên</code> vì thăng = bay lên, Long = rồng — gắn truyền thuyết rồng bay khi vua dời đô.',
        'Sai — <code>Long mạch</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rồng bay lên</code> vì thăng = bay lên, Long = rồng — gắn truyền thuyết rồng bay khi vua dời đô.',
      ]
    ),
    Q('Tên "Đông Đô" được dùng thời?', ['Lý (giữ tên Thăng Long)', 'Trần (vẫn dùng Thăng Long)', 'Lê sơ (đổi thành Đông Kinh)', 'Hồ'], 3,
      'Năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.',
      [
        '<b>Đông Đô (1397)</b>:',
        '<ul><li>Hồ Quý Ly dời kinh đô về Thanh Hoá (Tây Đô — thành Nhà Hồ).</li><li>Thăng Long khi đó được gọi là <code>Đông Đô</code> (kinh đô phía Đông).</li></ul>',
        'Lý – Trần dùng "Thăng Long"; Lê sơ đổi "Đông Kinh"; vua Minh áp đặt "Đông Quan".',
      ],
      [
        'Sai — <code>Lý (giữ tên Thăng Long)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ</code> vì năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.',
        'Sai — <code>Trần (vẫn dùng Thăng Long)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ</code> vì năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.',
        'Sai — <code>Lê sơ (đổi thành Đông Kinh)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ</code> vì năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.',
        'Đúng — <code>Hồ</code> là phương án chính xác. Năm 1397 Hồ Quý Ly đổi tên thành Đông Đô.',
      ]
    ),
    Q('Tên "Đông Quan" do triều đại nào áp đặt?', ['Nguyên', 'Thanh (thời Càn Long)', 'Tống (thời Lý chống Tống)', 'Minh'], 3,
      'Quân Minh xâm lược đặt tên Đông Quan để hạ uy thế kinh đô ta.',
      [
        '<b>Đông Quan (1407 – 1427)</b>:',
        '<ul><li>Quân <code>Minh</code> xâm lược nước ta, đô hộ 20 năm.</li><li>Đổi tên Đông Đô thành <code>Đông Quan</code> — chỉ là "cửa ải phía Đông", không còn là kinh đô.</li><li>Mục đích: <i>phủ nhận tính thủ đô</i> của Thăng Long.</li></ul>',
        'Năm 1427 Lê Lợi đại thắng, đuổi quân Minh — đổi lại Đông Kinh.',
      ],
      [
        'Sai — <code>Nguyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Minh</code> vì quân Minh xâm lược đặt tên Đông Quan để hạ uy thế kinh đô ta.',
        'Sai — <code>Thanh (thời Càn Long)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Minh</code> vì quân Minh xâm lược đặt tên Đông Quan để hạ uy thế kinh đô ta.',
        'Sai — <code>Tống (thời Lý chống Tống)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Minh</code> vì quân Minh xâm lược đặt tên Đông Quan để hạ uy thế kinh đô ta.',
        'Đúng — <code>Minh</code> là phương án chính xác. Quân Minh xâm lược đặt tên Đông Quan để hạ uy thế kinh đô ta.',
      ]
    ),
    Q('Tên "Hà Nội" chính thức xuất hiện vào năm nào?', ['1945', '1010', '1831', '1428'], 2,
      'Năm 1831 vua Minh Mạng lập tỉnh Hà Nội.',
      [
        '<b>Năm 1831</b> — tên "Hà Nội" ra đời:',
        '<ul><li>Vua <code>Minh Mạng</code> cải cách hành chính, lập <b>tỉnh Hà Nội</b>.</li><li>Bao gồm khu vực Thăng Long cũ và phủ Hoài Đức.</li></ul>',
        'Trước đó: 1010 Thăng Long, 1428 Đông Kinh; sau đó: 1945 Thủ đô VN Dân chủ Cộng hoà.',
      ],
      [
        'Sai — <code>1945</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1831</code> vì năm 1831 vua Minh Mạng lập tỉnh Hà Nội.',
        'Sai — <code>1010</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1831</code> vì năm 1831 vua Minh Mạng lập tỉnh Hà Nội.',
        'Đúng — <code>1831</code> là phương án chính xác. Năm 1831 vua Minh Mạng lập tỉnh Hà Nội.',
        'Sai — <code>1428</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1831</code> vì năm 1831 vua Minh Mạng lập tỉnh Hà Nội.',
      ]
    ),
    Q('Tên "Hà Nội" có nghĩa là?', ['Bên trong sông Hồng', 'Phía bắc sông', 'Trong dòng sông', 'Đầu dòng sông'], 0,
      'Hà = sông, Nội = bên trong → vùng đất nằm giữa các con sông.',
      [
        '<b>"Hà Nội" (河內)</b>:',
        '<ul><li><code>Hà</code> = sông.</li><li><code>Nội</code> = bên trong.</li></ul>',
        'Nghĩa: <i>vùng đất nằm bên trong các con sông</i> — chỉ vị trí địa lí giữa sông Hồng và sông Đáy.',
        'Cái tên gợi đặc trưng địa lí và sự gắn bó của Thủ đô với các dòng sông.',
      ],
      [
        'Đúng — <code>Bên trong sông Hồng</code> là phương án chính xác. Hà = sông, Nội = bên trong → vùng đất nằm giữa các con sông.',
        'Sai — <code>Phía bắc sông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bên trong sông Hồng</code> vì hà = sông, Nội = bên trong → vùng đất nằm giữa các con sông.',
        'Sai — <code>Trong dòng sông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bên trong sông Hồng</code> vì hà = sông, Nội = bên trong → vùng đất nằm giữa các con sông.',
        'Sai — <code>Đầu dòng sông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bên trong sông Hồng</code> vì hà = sông, Nội = bên trong → vùng đất nằm giữa các con sông.',
      ]
    ),
    Q('Sự kiện 10/10/1954 ở Hà Nội là?', ['Quốc khánh', 'Vua Lý dời đô', 'Giải phóng Thủ đô', 'Khởi nghĩa Hai Bà Trưng'], 2,
      '10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.',
      [
        '<b>10/10/1954 — Ngày Giải phóng Thủ đô:</b>',
        '<ul><li>Theo Hiệp định Genève (1954), Pháp rút quân khỏi miền Bắc.</li><li>Quân ta tiến vào tiếp quản Hà Nội từ 5 cửa ô.</li><li>Cờ đỏ sao vàng tung bay trên Cột Cờ.</li></ul>',
        'Phân biệt: <code>2/9/1945</code> Quốc khánh; <code>1010</code> Lý Thái Tổ dời đô; <code>năm 40</code> Hai Bà Trưng.',
      ],
      [
        'Sai — <code>Quốc khánh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải phóng Thủ đô</code> vì 10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.',
        'Sai — <code>Vua Lý dời đô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải phóng Thủ đô</code> vì 10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.',
        'Đúng — <code>Giải phóng Thủ đô</code> là phương án chính xác. 10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.',
        'Sai — <code>Khởi nghĩa Hai Bà Trưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải phóng Thủ đô</code> vì 10/10/1954 — ngày Giải phóng Thủ đô khỏi thực dân Pháp.',
      ]
    ),
  ]),

  M(6, 'Khu di tích Hoàng thành Thăng Long', [
    Q('Hoàng thành Thăng Long được UNESCO công nhận Di sản Văn hoá Thế giới năm?', ['2010', '2008', '2015', '2000'], 0,
      'Năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
      [
        '<b>Hoàng thành Thăng Long — Di sản UNESCO 2010:</b>',
        '<ul><li>Được công nhận ngày <code>1/8/2010</code>, đúng dịp Đại lễ 1000 năm Thăng Long – Hà Nội.</li><li>3 tiêu chí nổi bật: <i>1000 năm lịch sử liên tục, giao thoa văn hoá Đông Á, gắn các sự kiện lớn của dân tộc</i>.</li></ul>',
        'Cùng năm 2010, <b>82 bia Tiến sĩ</b> Văn Miếu và <b>Hội Gióng</b> cũng được UNESCO ghi danh.',
      ],
      [
        'Đúng — <code>2010</code> là phương án chính xác. Năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
        'Sai — <code>2008</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2010</code> vì năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
        'Sai — <code>2015</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2010</code> vì năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
        'Sai — <code>2000</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2010</code> vì năm 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
      ]
    ),
    Q('Trục trung tâm Hoàng thành xưa là?', ['Trục Đông – Tây', 'Trục Tô Lịch', 'Trục Bắc – Nam (Đoan Môn – Kính Thiên)', 'Trục sông Hồng'], 2,
      'Trục thần đạo Bắc – Nam đi qua Đoan Môn, điện Kính Thiên.',
      [
        '<b>Trục thần đạo Bắc – Nam</b> của Hoàng thành:',
        '<ul><li><code>Đoan Môn</code>: cổng chính phía nam.</li><li><code>Điện Kính Thiên</code>: chính điện thiết triều.</li><li><code>Hậu Lâu</code>: khu hậu cung phía bắc.</li></ul>',
        'Trục Bắc – Nam là <i>trục quyền lực</i> truyền thống của các kinh đô Á Đông.',
      ],
      [
        'Sai — <code>Trục Đông – Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trục Bắc – Nam (Đoan Môn – Kính Thiên)</code> vì trục thần đạo Bắc – Nam đi qua Đoan Môn, điện Kính Thiên.',
        'Sai — <code>Trục Tô Lịch</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trục Bắc – Nam (Đoan Môn – Kính Thiên)</code> vì trục thần đạo Bắc – Nam đi qua Đoan Môn, điện Kính Thiên.',
        'Đúng — <code>Trục Bắc – Nam (Đoan Môn – Kính Thiên)</code> là phương án chính xác. Trục thần đạo Bắc – Nam đi qua Đoan Môn, điện Kính Thiên.',
        'Sai — <code>Trục sông Hồng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trục Bắc – Nam (Đoan Môn – Kính Thiên)</code> vì trục thần đạo Bắc – Nam đi qua Đoan Môn, điện Kính Thiên.',
      ]
    ),
    Q('Cổng phía nam Hoàng thành tên gọi là?', ['Đông Môn', 'Tây Môn', 'Đoan Môn', 'Bắc Môn'], 2,
      'Đoan Môn là cổng phía nam còn nguyên vẹn đến nay.',
      [
        '<b>Đoan Môn</b> — cổng chính phía nam Hoàng thành:',
        '<ul><li>Kiến trúc thời Lê (thế kỉ 15) còn nguyên vẹn.</li><li>Gồm 5 cửa cuốn vòm đá.</li><li>Là điểm bắt đầu trục thần đạo dẫn vào Điện Kính Thiên.</li></ul>',
        'Bắc Môn (cửa Bắc) ở phố Phan Đình Phùng — còn lại nhưng không phải cổng phía nam.',
      ],
      [
        'Sai — <code>Đông Môn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đoan Môn</code> vì đoan Môn là cổng phía nam còn nguyên vẹn đến nay.',
        'Sai — <code>Tây Môn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đoan Môn</code> vì đoan Môn là cổng phía nam còn nguyên vẹn đến nay.',
        'Đúng — <code>Đoan Môn</code> là phương án chính xác. Đoan Môn là cổng phía nam còn nguyên vẹn đến nay.',
        'Sai — <code>Bắc Môn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đoan Môn</code> vì đoan Môn là cổng phía nam còn nguyên vẹn đến nay.',
      ]
    ),
    Q('Cột Cờ Hà Nội nằm trong khu vực nào?', ['Hoàng thành – nay là khu vực Điện Biên Phủ', 'Sông Hồng', 'Phố cổ', 'Hồ Tây'], 0,
      'Cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.',
      [
        '<b>Cột Cờ Hà Nội (Kỳ đài)</b>:',
        '<ul><li>Xây năm <code>1812</code> thời Nguyễn (Gia Long).</li><li>Cao <code>33 m</code> (cả cán cờ 41 m).</li><li>Nằm trong khuôn viên Hoàng thành xưa, nay thuộc đường Điện Biên Phủ.</li></ul>',
        'Là biểu tượng quân sự và là 1 trong số ít công trình thời Nguyễn còn nguyên ở Hà Nội.',
      ],
      [
        'Đúng — <code>Hoàng thành – nay là khu vực Điện Biên Phủ</code> là phương án chính xác. Cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.',
        'Sai — <code>Sông Hồng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng thành – nay là khu vực Điện Biên Phủ</code> vì cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.',
        'Sai — <code>Phố cổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng thành – nay là khu vực Điện Biên Phủ</code> vì cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.',
        'Sai — <code>Hồ Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng thành – nay là khu vực Điện Biên Phủ</code> vì cột Cờ (Kỳ đài) xây thời Nguyễn, nằm trong khu vực Hoàng thành xưa.',
      ]
    ),
    Q('Điện Kính Thiên có vai trò gì thời Lê?', ['Nhà ăn', 'Trại lính', 'Kho lương', 'Điện chính nơi vua làm việc, tế lễ'], 3,
      'Điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.',
      [
        '<b>Điện Kính Thiên</b> — "trái tim" Hoàng thành thời Lê:',
        '<ul><li>Nơi vua <i>thiết triều</i> (họp với quan lại).</li><li>Tế lễ trọng đại.</li><li>Tiếp các sứ thần.</li></ul>',
        'Nay chỉ còn <code>nền đá rồng đẹp nhất</code> với 4 con rồng chầu — kiệt tác điêu khắc thời Lê.',
      ],
      [
        'Sai — <code>Nhà ăn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Điện chính nơi vua làm việc, tế lễ</code> vì điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.',
        'Sai — <code>Trại lính</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Điện chính nơi vua làm việc, tế lễ</code> vì điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.',
        'Sai — <code>Kho lương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Điện chính nơi vua làm việc, tế lễ</code> vì điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.',
        'Đúng — <code>Điện chính nơi vua làm việc, tế lễ</code> là phương án chính xác. Điện Kính Thiên là nơi vua thiết triều, tế lễ trọng đại.',
      ]
    ),
    Q('Cuộc khai quật khảo cổ lớn ở 18 Hoàng Diệu phát lộ điều gì?', ['Lăng vua Hùng', 'Di tích Đông Sơn', 'Văn Miếu', 'Nền móng cung điện Lý – Trần – Lê'], 3,
      'Khai quật 2002 – 2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.',
      [
        '<b>Khu khảo cổ 18 Hoàng Diệu (2002 – 2004):</b>',
        '<ul><li>Phát lộ tầng tầng dấu tích cung điện từ Đại La – Lý – Trần – Lê – Nguyễn <i>chồng xếp lên nhau</i>.</li><li>Chân đá tảng hoa sen thời Lý, ngói rồng thời Trần, đầu rồng thời Lê.</li></ul>',
        'Minh chứng tính <b>liên tục hiếm có</b> của một kinh đô qua nghìn năm.',
      ],
      [
        'Sai — <code>Lăng vua Hùng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nền móng cung điện Lý – Trần – Lê</code> vì khai quật 2002 – 2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.',
        'Sai — <code>Di tích Đông Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nền móng cung điện Lý – Trần – Lê</code> vì khai quật 2002 – 2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.',
        'Sai — <code>Văn Miếu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nền móng cung điện Lý – Trần – Lê</code> vì khai quật 2002 – 2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.',
        'Đúng — <code>Nền móng cung điện Lý – Trần – Lê</code> là phương án chính xác. Khai quật 2002 – 2004 phát lộ tầng tầng dấu tích kinh đô qua các triều đại.',
      ]
    ),
  ]),

  M(7, 'Văn Miếu – Quốc Tử Giám: trường đại học đầu tiên', [
    Q('Văn Miếu Hà Nội được lập năm?', ['1802', '1428', '1070', '1010'], 2,
      'Vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.',
      [
        '<b>Văn Miếu (1070)</b>:',
        '<ul><li>Vua <code>Lý Thánh Tông</code> cho lập.</li><li>Thờ <i>Khổng Tử, Chu Công và các bậc tiên hiền</i>.</li><li>Là nơi tôn vinh đạo học của dân tộc.</li></ul>',
        'Phân biệt: 1010 Lý Thái Tổ dời đô; 1076 lập Quốc Tử Giám; 1428 Lê Lợi lên ngôi; 1802 nhà Nguyễn.',
      ],
      [
        'Sai — <code>1802</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1070</code> vì vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.',
        'Sai — <code>1428</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1070</code> vì vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.',
        'Đúng — <code>1070</code> là phương án chính xác. Vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.',
        'Sai — <code>1010</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1070</code> vì vua Lý Thánh Tông lập Văn Miếu năm 1070 thờ Khổng Tử.',
      ]
    ),
    Q('Quốc Tử Giám được lập năm 1076 dưới thời?', ['Nguyễn Ánh', 'Lê Thái Tổ', 'Lý Nhân Tông', 'Trần Thái Tông'], 2,
      'Vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.',
      [
        '<b>Quốc Tử Giám (1076)</b> — trường đại học đầu tiên Việt Nam:',
        '<ul><li>Vua <code>Lý Nhân Tông</code> cho lập bên cạnh Văn Miếu.</li><li>Ban đầu chỉ dành cho con vua quan.</li><li>Sau mở rộng cho học sinh giỏi cả nước.</li></ul>',
        'Hoạt động liên tục đến hết thời Nguyễn (1779) — gần 700 năm.',
      ],
      [
        'Sai — <code>Nguyễn Ánh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Nhân Tông</code> vì vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.',
        'Sai — <code>Lê Thái Tổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Nhân Tông</code> vì vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.',
        'Đúng — <code>Lý Nhân Tông</code> là phương án chính xác. Vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.',
        'Sai — <code>Trần Thái Tông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Nhân Tông</code> vì vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học đầu tiên VN.',
      ]
    ),
    Q('Bia Tiến sĩ tại Văn Miếu khắc tên những ai?', ['Thầy thuốc', 'Các tiến sĩ đỗ trong kì thi Đình', 'Tướng lĩnh', 'Vua chúa'], 1,
      'Khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.',
      [
        '<b>82 bia Tiến sĩ Văn Miếu</b>:',
        '<ul><li>Dựng từ năm <code>1442</code> theo lệnh vua Lê Thánh Tông.</li><li>Khắc tên <code>1 307 vị tiến sĩ</code> qua 82 khoa thi.</li><li>Ghi tên, quê quán, khoa thi của từng người.</li></ul>',
        'Thể hiện chính sách trọng dụng nhân tài: <i>"Hiền tài là nguyên khí của quốc gia"</i>.',
      ],
      [
        'Sai — <code>Thầy thuốc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Các tiến sĩ đỗ trong kì thi Đình</code> vì khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.',
        'Đúng — <code>Các tiến sĩ đỗ trong kì thi Đình</code> là phương án chính xác. Khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.',
        'Sai — <code>Tướng lĩnh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Các tiến sĩ đỗ trong kì thi Đình</code> vì khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.',
        'Sai — <code>Vua chúa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Các tiến sĩ đỗ trong kì thi Đình</code> vì khắc tên 1 307 tiến sĩ qua 82 khoa thi triều Lê – Mạc.',
      ]
    ),
    Q('82 bia Tiến sĩ Văn Miếu được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Di sản phi vật thể', 'Di sản ẩm thực', 'Di sản ký ức thế giới'], 3,
      'Năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.',
      [
        '<b>Di sản tư liệu thế giới (2010)</b>:',
        '<ul><li>UNESCO ghi danh 82 bia Tiến sĩ vào <code>Chương trình Ký ức Thế giới</code> (Memory of the World).</li><li>Là <i>tư liệu lịch sử</i> hiếm có về khoa cử Việt Nam.</li></ul>',
        'Phân biệt 4 loại di sản UNESCO: <code>vật thể, phi vật thể, thiên nhiên, tư liệu (ký ức)</code>.',
      ],
      [
        'Sai — <code>Di sản thiên nhiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản ký ức thế giới</code> vì năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.',
        'Sai — <code>Di sản phi vật thể</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản ký ức thế giới</code> vì năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.',
        'Sai — <code>Di sản ẩm thực</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản ký ức thế giới</code> vì năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.',
        'Đúng — <code>Di sản ký ức thế giới</code> là phương án chính xác. Năm 2010 — Di sản tư liệu thuộc Chương trình Ký ức Thế giới.',
      ]
    ),
    Q('Khuê Văn Các trong Văn Miếu là biểu tượng của?', ['Đà Nẵng', 'Hải Phòng', 'TP. Hồ Chí Minh', 'Hà Nội'], 3,
      'Khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.',
      [
        '<b>Khuê Văn Các</b> — biểu tượng Hà Nội:',
        '<ul><li>4 trụ đá vuông đỡ <i>gác gỗ 2 tầng 8 mái</i>.</li><li>Cửa sổ tròn tượng trưng <code>sao Khuê</code> (sao chủ về văn chương).</li><li>In trên logo Hà Nội.</li></ul>',
        'Kết tinh tinh hoa kiến trúc và truyền thống hiếu học của Thủ đô.',
      ],
      [
        'Sai — <code>Đà Nẵng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hà Nội</code> vì khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.',
        'Sai — <code>Hải Phòng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hà Nội</code> vì khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.',
        'Sai — <code>TP. Hồ Chí Minh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hà Nội</code> vì khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.',
        'Đúng — <code>Hà Nội</code> là phương án chính xác. Khuê Văn Các là biểu tượng văn hoá – kiến trúc của Thủ đô Hà Nội.',
      ]
    ),
    Q('Khuê Văn Các được xây dựng vào thời?', ['Trần (cùng thời mở rộng Quốc Tử Giám)', 'Pháp thuộc', 'Lý (thời lập Văn Miếu năm 1070)', 'Nguyễn (thời Gia Long)'], 3,
      'Khuê Văn Các xây năm 1805 thời Nguyễn (Gia Long).',
      [
        '<b>Khuê Văn Các (1805)</b>:',
        '<ul><li>Do <i>Tổng trấn Bắc Thành Nguyễn Văn Thành</i> cho xây.</li><li>Triều <code>Nguyễn (Gia Long)</code>.</li><li>Trong khuôn viên Văn Miếu (đã có từ 1070).</li></ul>',
        'Lưu ý: Văn Miếu xây thời Lý (1070), nhưng Khuê Văn Các xây sau gần 800 năm dưới thời Nguyễn.',
      ],
      [
        'Sai — <code>Trần (cùng thời mở rộng Quốc Tử Giám)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nguyễn (thời Gia Long)</code> vì khuê Văn Các xây năm 1805 thời Nguyễn (Gia Long).',
        'Sai — <code>Pháp thuộc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nguyễn (thời Gia Long)</code> vì khuê Văn Các xây năm 1805 thời Nguyễn (Gia Long).',
        'Sai — <code>Lý (thời lập Văn Miếu năm 1070)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nguyễn (thời Gia Long)</code> vì khuê Văn Các xây năm 1805 thời Nguyễn (Gia Long).',
        'Đúng — <code>Nguyễn (thời Gia Long)</code> là phương án chính xác. Khuê Văn Các xây năm 1805 thời Nguyễn (Gia Long).',
      ]
    ),
  ]),

  M(8, 'Phố cổ Hà Nội — 36 phố phường', [
    Q('Khu phố cổ Hà Nội còn được gọi là?', ['36 phố phường', 'Khu chợ lớn', 'Khu công nghiệp', 'Khu mới'], 0,
      'Tên gọi truyền thống "Hà Nội 36 phố phường".',
      [
        '<b>"Hà Nội 36 phố phường"</b>:',
        '<ul><li>Từ thời <code>Lê</code>, kinh thành Thăng Long chia thành <b>36 phường</b> thủ công – buôn bán.</li><li>Mỗi phường tập trung một <i>nghề</i> hoặc <i>mặt hàng</i>.</li><li>Tên gọi đã đi vào ca dao, văn chương.</li></ul>',
        'Khu phố cổ Hoàn Kiếm hiện nay là Di tích lịch sử cấp Quốc gia (2004).',
      ],
      [
        'Đúng — <code>36 phố phường</code> là phương án chính xác. Tên gọi truyền thống "Hà Nội 36 phố phường".',
        'Sai — <code>Khu chợ lớn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>36 phố phường</code> vì tên gọi truyền thống "Hà Nội 36 phố phường".',
        'Sai — <code>Khu công nghiệp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>36 phố phường</code> vì tên gọi truyền thống "Hà Nội 36 phố phường".',
        'Sai — <code>Khu mới</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>36 phố phường</code> vì tên gọi truyền thống "Hà Nội 36 phố phường".',
      ]
    ),
    Q('Chữ "Hàng" trong tên phố cổ chỉ?', ['Tên người', 'Loại hàng hoá bán ở phố đó', 'Tên cây', 'Số nhà'], 1,
      'Mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...',
      [
        '<b>Chữ "Hàng" + tên mặt hàng:</b>',
        '<ul><li><code>Hàng Bạc</code> — bạc, chế tác kim hoàn.</li><li><code>Hàng Đào</code> — tơ lụa nhuộm đỏ (đào).</li><li><code>Hàng Mã</code> — đồ vàng mã, lồng đèn.</li><li><code>Hàng Bông, Hàng Thiếc, Hàng Buồm...</code></li></ul>',
        '"Hàng" có nghĩa là <i>cửa hàng / mặt hàng</i> — phố nào tập trung mặt hàng đó.',
      ],
      [
        'Sai — <code>Tên người</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Loại hàng hoá bán ở phố đó</code> vì mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...',
        'Đúng — <code>Loại hàng hoá bán ở phố đó</code> là phương án chính xác. Mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...',
        'Sai — <code>Tên cây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Loại hàng hoá bán ở phố đó</code> vì mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...',
        'Sai — <code>Số nhà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Loại hàng hoá bán ở phố đó</code> vì mỗi phố tập trung 1 nghề/mặt hàng: Hàng Bạc, Hàng Đào, Hàng Mã...',
      ]
    ),
    Q('Phố nào nổi tiếng chế tác bạc?', ['Hàng Mã', 'Hàng Buồm', 'Hàng Bạc', 'Hàng Đào'], 2,
      'Phố Hàng Bạc là phố chế tác kim hoàn truyền thống.',
      [
        '<b>Phố Hàng Bạc</b>:',
        '<ul><li>Chế tác <code>kim hoàn, đồ bạc</code>.</li><li>Đến nay vẫn còn nhiều cửa hàng kim hoàn.</li><li>Có nhà cổ 87 Mã Mây — bảo tàng nhà cổ phố cổ.</li></ul>',
        'Hàng Mã bán vàng mã – đồ chơi giấy; Hàng Đào bán tơ lụa; Hàng Buồm xưa bán buồm thuyền.',
      ],
      [
        'Sai — <code>Hàng Mã</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hàng Bạc</code> vì phố Hàng Bạc là phố chế tác kim hoàn truyền thống.',
        'Sai — <code>Hàng Buồm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hàng Bạc</code> vì phố Hàng Bạc là phố chế tác kim hoàn truyền thống.',
        'Đúng — <code>Hàng Bạc</code> là phương án chính xác. Phố Hàng Bạc là phố chế tác kim hoàn truyền thống.',
        'Sai — <code>Hàng Đào</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hàng Bạc</code> vì phố Hàng Bạc là phố chế tác kim hoàn truyền thống.',
      ]
    ),
    Q('Phố Hàng Mã bán?', ['Đồng hồ', 'Hoa quả', 'Đồ vàng mã, đồ chơi giấy', 'Vải lụa và quần áo may sẵn'], 2,
      'Hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.',
      [
        '<b>Phố Hàng Mã</b> — rực rỡ nhất 2 dịp:',
        '<ul><li>Trung thu: <i>đèn ông sao, đèn kéo quân, mặt nạ giấy, đầu lân</i>.</li><li>Tết Nguyên Đán: vàng mã, đồ trang trí đỏ vàng.</li></ul>',
        '"Mã" = đồ giấy (vàng mã, hàng mã) — đốt cúng tổ tiên theo phong tục dân gian.',
      ],
      [
        'Sai — <code>Đồng hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồ vàng mã, đồ chơi giấy</code> vì hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.',
        'Sai — <code>Hoa quả</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồ vàng mã, đồ chơi giấy</code> vì hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.',
        'Đúng — <code>Đồ vàng mã, đồ chơi giấy</code> là phương án chính xác. Hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.',
        'Sai — <code>Vải lụa và quần áo may sẵn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đồ vàng mã, đồ chơi giấy</code> vì hàng Mã chuyên đồ vàng mã, lồng đèn, đồ chơi giấy.',
      ]
    ),
    Q('Chợ Đồng Xuân thuộc quận nào?', ['Đống Đa', 'Hai Bà Trưng', 'Tây Hồ', 'Hoàn Kiếm'], 3,
      'Chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.',
      [
        '<b>Chợ Đồng Xuân</b>:',
        '<ul><li>Nằm ở phố <code>Đồng Xuân, quận Hoàn Kiếm</code>.</li><li>Hoạt động hơn <code>130 năm</code> (từ thời Pháp).</li><li>Là chợ đầu mối lớn nhất phố cổ.</li></ul>',
        'Phân biệt: chợ Bưởi ở Tây Hồ; chợ Hôm – Đức Viên ở Hai Bà Trưng; chợ Mơ ở Hoàng Mai.',
      ],
      [
        'Sai — <code>Đống Đa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàn Kiếm</code> vì chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.',
        'Sai — <code>Hai Bà Trưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàn Kiếm</code> vì chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.',
        'Sai — <code>Tây Hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàn Kiếm</code> vì chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.',
        'Đúng — <code>Hoàn Kiếm</code> là phương án chính xác. Chợ Đồng Xuân nằm ở phố Đồng Xuân, quận Hoàn Kiếm.',
      ]
    ),
    Q('Đặc trưng kiến trúc nhà phố cổ là?', ['Nhà sàn', 'Nhà ống mặt tiền hẹp – sâu', 'Nhà cao tầng', 'Lâu đài đá'], 1,
      'Mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.',
      [
        '<b>Kiến trúc nhà ống phố cổ:</b>',
        '<ul><li>Mặt tiền hẹp <code>3 – 5 m</code>.</li><li>Chiều sâu lớn <code>20 – 60 m</code>.</li><li>Có <i>sân trong (giếng trời)</i> lấy ánh sáng và thông gió.</li></ul>',
        'Mặt tiền vừa là <b>cửa hàng</b> vừa là <b>xưởng sản xuất</b>; phía sau là nơi ở của gia đình.',
      ],
      [
        'Sai — <code>Nhà sàn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhà ống mặt tiền hẹp – sâu</code> vì mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.',
        'Đúng — <code>Nhà ống mặt tiền hẹp – sâu</code> là phương án chính xác. Mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.',
        'Sai — <code>Nhà cao tầng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhà ống mặt tiền hẹp – sâu</code> vì mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.',
        'Sai — <code>Lâu đài đá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhà ống mặt tiền hẹp – sâu</code> vì mặt tiền hẹp (3–5 m), chiều sâu lớn, có sân trong.',
      ]
    ),
  ]),

  M(9, 'Lễ hội truyền thống ở Hà Nội', [
    Q('Lễ hội nào lớn nhất ở Hà Nội đầu năm âm lịch?', ['Lễ hội chùa Hương', 'Lễ hội Gò Đống Đa', 'Lễ hội Cổ Loa', 'Lễ hội Đền Hùng'], 0,
      'Lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.',
      [
        '<b>Lễ hội chùa Hương</b> — dài nhất, đông nhất miền Bắc:',
        '<ul><li>Khai hội mùng <code>6 tháng Giêng</code>, kéo dài đến hết tháng 3 âm lịch.</li><li>Ở xã Hương Sơn, huyện <code>Mỹ Đức</code>.</li><li>Du khách đi thuyền trên <i>suối Yến</i> vào động Hương Tích.</li></ul>',
        'Đền Hùng ở Phú Thọ — không phải Hà Nội.',
      ],
      [
        'Đúng — <code>Lễ hội chùa Hương</code> là phương án chính xác. Lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.',
        'Sai — <code>Lễ hội Gò Đống Đa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lễ hội chùa Hương</code> vì lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.',
        'Sai — <code>Lễ hội Cổ Loa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lễ hội chùa Hương</code> vì lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.',
        'Sai — <code>Lễ hội Đền Hùng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lễ hội chùa Hương</code> vì lễ hội chùa Hương kéo dài từ tháng 1 đến tháng 3 âm lịch.',
      ]
    ),
    Q('Lễ hội chùa Hương ở huyện nào?', ['Thạch Thất', 'Phú Xuyên', 'Mỹ Đức', 'Ba Vì (vùng núi phía Tây Hà Nội)'], 2,
      'Quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.',
      [
        '<b>Huyện Mỹ Đức</b> — quê chùa Hương:',
        '<ul><li>Nằm cách trung tâm Hà Nội khoảng <code>70 km</code> về phía tây nam.</li><li>Quần thể gồm hơn <i>20 chùa – động – đền</i>.</li><li>Trung tâm là <code>động Hương Tích</code> — "Nam thiên đệ nhất động".</li></ul>',
        'Ba Vì có núi Tản Viên, Thạch Thất có Hoà Lạc — khác chùa Hương.',
      ],
      [
        'Sai — <code>Thạch Thất</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ Đức</code> vì quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.',
        'Sai — <code>Phú Xuyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ Đức</code> vì quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.',
        'Đúng — <code>Mỹ Đức</code> là phương án chính xác. Quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.',
        'Sai — <code>Ba Vì (vùng núi phía Tây Hà Nội)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ Đức</code> vì quần thể chùa Hương ở xã Hương Sơn, huyện Mỹ Đức.',
      ]
    ),
    Q('Lễ hội Gò Đống Đa tưởng nhớ chiến thắng nào?', ['Vạn Tường', 'Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789', 'Bạch Đằng', 'Chi Lăng'], 1,
      'Vua Quang Trung đại phá quân Thanh Tết 1789.',
      [
        '<b>Lễ hội Gò Đống Đa</b>:',
        '<ul><li>Tổ chức ngày <code>mùng 5 Tết</code>.</li><li>Tưởng nhớ chiến thắng <i>Ngọc Hồi – Đống Đa Tết Kỷ Dậu 1789</i>.</li><li>Vua <b>Quang Trung (Nguyễn Huệ)</b> đại phá 29 vạn quân Thanh.</li></ul>',
        'Bạch Đằng (Trần Hưng Đạo 1288), Chi Lăng (Lê Lợi 1427), Vạn Tường (1965) — đều khác.',
      ],
      [
        'Sai — <code>Vạn Tường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789</code> vì vua Quang Trung đại phá quân Thanh Tết 1789.',
        'Đúng — <code>Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789</code> là phương án chính xác. Vua Quang Trung đại phá quân Thanh Tết 1789.',
        'Sai — <code>Bạch Đằng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789</code> vì vua Quang Trung đại phá quân Thanh Tết 1789.',
        'Sai — <code>Chi Lăng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đống Đa (Ngọc Hồi – Đống Đa) Tết Kỷ Dậu 1789</code> vì vua Quang Trung đại phá quân Thanh Tết 1789.',
      ]
    ),
    Q('Lễ hội Cổ Loa thờ ai?', ['Hai Bà Trưng', 'An Dương Vương', 'Trần Hưng Đạo', 'Lý Thái Tổ'], 1,
      'Đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.',
      [
        '<b>Lễ hội Cổ Loa</b>:',
        '<ul><li>Tổ chức từ mùng <code>6 đến 16 tháng Giêng</code>.</li><li>Ở xã Cổ Loa, huyện <i>Đông Anh</i>.</li><li>Thờ <code>An Dương Vương (Thục Phán)</code> — vua nước Âu Lạc.</li></ul>',
        'Có lễ rước, đấu vật, bắn nỏ — nhắc nhở truyền thuyết nỏ thần.',
      ],
      [
        'Sai — <code>Hai Bà Trưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>An Dương Vương</code> vì đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.',
        'Đúng — <code>An Dương Vương</code> là phương án chính xác. Đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.',
        'Sai — <code>Trần Hưng Đạo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>An Dương Vương</code> vì đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.',
        'Sai — <code>Lý Thái Tổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>An Dương Vương</code> vì đền Cổ Loa thờ An Dương Vương — vua nước Âu Lạc.',
      ]
    ),
    Q('Hội Gióng được UNESCO công nhận là?', ['Di sản thiên nhiên', 'Di sản tư liệu', 'Di sản hỗn hợp', 'Di sản văn hoá phi vật thể đại diện nhân loại'], 3,
      'Năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.',
      [
        '<b>Hội Gióng — Di sản UNESCO 2010</b>:',
        '<ul><li>Thuộc danh sách <code>Di sản văn hoá phi vật thể đại diện của nhân loại</code>.</li><li>Tổ chức ở 2 nơi: <i>đền Phù Đổng (Gia Lâm)</i> và <i>đền Sóc (Sóc Sơn)</i>.</li><li>Tưởng nhớ <b>Thánh Gióng</b> — 1 trong "Tứ bất tử".</li></ul>',
        'Cùng năm 2010, Hoàng thành Thăng Long và 82 bia Tiến sĩ cũng được UNESCO ghi danh.',
      ],
      [
        'Sai — <code>Di sản thiên nhiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản văn hoá phi vật thể đại diện nhân loại</code> vì năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.',
        'Sai — <code>Di sản tư liệu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản văn hoá phi vật thể đại diện nhân loại</code> vì năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.',
        'Sai — <code>Di sản hỗn hợp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản văn hoá phi vật thể đại diện nhân loại</code> vì năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.',
        'Đúng — <code>Di sản văn hoá phi vật thể đại diện nhân loại</code> là phương án chính xác. Năm 2010 — Di sản văn hoá phi vật thể đại diện của nhân loại.',
      ]
    ),
    Q('Hội Gióng đền Phù Đổng (Gia Lâm) tổ chức vào tháng?', ['Tháng Giêng', 'Tháng 7 âm', 'Tháng 4 âm', 'Tháng 10 âm'], 2,
      'Mùng 9 tháng 4 âm lịch.',
      [
        '<b>Hội Gióng đền Phù Đổng</b>:',
        '<ul><li>Tổ chức <code>mùng 9 tháng 4 âm lịch</code>.</li><li>Tại xã Phù Đổng, huyện <i>Gia Lâm</i>.</li><li>Có "<b>ông Hiệu cờ</b>", "<b>ông Hiệu trống</b>", thiếu nhi đóng vai phù giá.</li></ul>',
        'Hội Sóc (Sóc Sơn) tổ chức mùng 6 tháng Giêng — khai hội đầu xuân.',
      ],
      [
        'Sai — <code>Tháng Giêng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tháng 4 âm</code> vì mùng 9 tháng 4 âm lịch.',
        'Sai — <code>Tháng 7 âm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tháng 4 âm</code> vì mùng 9 tháng 4 âm lịch.',
        'Đúng — <code>Tháng 4 âm</code> là phương án chính xác. Mùng 9 tháng 4 âm lịch. Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
        'Sai — <code>Tháng 10 âm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tháng 4 âm</code> vì mùng 9 tháng 4 âm lịch.',
      ]
    ),
  ]),


  M(10, 'Danh nhân Hà Nội — Chu Văn An, Nguyễn Trãi', [
    Q('Chu Văn An là?', ['Nhà quân sự', 'Vua thời Trần mạt', 'Thầy thuốc', 'Nhà giáo, hiệu trưởng Quốc Tử Giám'], 3,
      'Chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.',
      [
        '<b>Chu Văn An (1292 – 1370)</b>:',
        '<ul><li>Nhà giáo lỗi lạc thời <code>Trần</code>.</li><li>Từng làm <i>hiệu trưởng Quốc Tử Giám</i>.</li><li>Được tôn xưng <b>"Vạn thế sư biểu"</b> — bậc thầy muôn đời.</li></ul>',
        'Học trò của ông có nhiều người là tể tướng, trạng nguyên.',
      ],
      [
        'Sai — <code>Nhà quân sự</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhà giáo, hiệu trưởng Quốc Tử Giám</code> vì chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.',
        'Sai — <code>Vua thời Trần mạt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhà giáo, hiệu trưởng Quốc Tử Giám</code> vì chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.',
        'Sai — <code>Thầy thuốc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhà giáo, hiệu trưởng Quốc Tử Giám</code> vì chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.',
        'Đúng — <code>Nhà giáo, hiệu trưởng Quốc Tử Giám</code> là phương án chính xác. Chu Văn An được tôn là "Vạn thế sư biểu" — bậc thầy muôn đời.',
      ]
    ),
    Q('Chu Văn An nổi tiếng dâng?', ['Sớ chém đầu thầy phong thuỷ', 'Sớ xin từ quan', 'Bài thơ tỏ tình', '"Thất trảm sớ" đề nghị chém 7 nịnh thần'], 3,
      'Thất trảm sớ — nổi tiếng trong sử Việt.',
      [
        '<b>"Thất trảm sớ"</b> của Chu Văn An:',
        '<ul><li>Tờ sớ dâng vua Trần Dụ Tông đề nghị <code>chém 7 nịnh thần</code>.</li><li>Vua không nghe → ông <i>cáo quan</i> về Chí Linh dạy học.</li></ul>',
        'Là biểu tượng <b>khí tiết</b> và <b>đạo làm thầy</b>: không sợ quyền uy, dám nói thẳng.',
      ],
      [
        'Sai — <code>Sớ chém đầu thầy phong thuỷ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>"Thất trảm sớ" đề nghị chém 7 nịnh thần</code> vì thất trảm sớ — nổi tiếng trong sử Việt.',
        'Sai — <code>Sớ xin từ quan</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>"Thất trảm sớ" đề nghị chém 7 nịnh thần</code> vì thất trảm sớ — nổi tiếng trong sử Việt.',
        'Sai — <code>Bài thơ tỏ tình</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>"Thất trảm sớ" đề nghị chém 7 nịnh thần</code> vì thất trảm sớ — nổi tiếng trong sử Việt.',
        'Đúng — <code>"Thất trảm sớ" đề nghị chém 7 nịnh thần</code> là phương án chính xác. Thất trảm sớ — nổi tiếng trong sử Việt.',
      ]
    ),
    Q('Quê hương Chu Văn An nay thuộc?', ['Đà Nẵng', 'Huyện Đông Anh, Hà Nội', 'Quận Thanh Trì, Hà Nội', 'Huyện Chí Linh, Hải Dương'], 2,
      'Làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).',
      [
        '<b>Quê Chu Văn An</b>:',
        '<ul><li>Làng <code>Văn Thôn, xã Quang Liệt</code>.</li><li>Nay là xã <i>Thanh Liệt, huyện Thanh Trì, Hà Nội</i>.</li></ul>',
        'Chí Linh (Hải Dương) là nơi ông <b>dạy học cuối đời</b> sau khi cáo quan — không phải quê.',
      ],
      [
        'Sai — <code>Đà Nẵng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quận Thanh Trì, Hà Nội</code> vì làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).',
        'Sai — <code>Huyện Đông Anh, Hà Nội</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quận Thanh Trì, Hà Nội</code> vì làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).',
        'Đúng — <code>Quận Thanh Trì, Hà Nội</code> là phương án chính xác. Làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).',
        'Sai — <code>Huyện Chí Linh, Hải Dương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quận Thanh Trì, Hà Nội</code> vì làng Văn Thôn, xã Quang Liệt (nay Thanh Liệt, Thanh Trì).',
      ]
    ),
    Q('Nguyễn Trãi (1380–1442) gắn với?', ['Khởi nghĩa Tây Sơn', 'Khởi nghĩa Yên Thế', 'Khởi nghĩa Lam Sơn', 'Phong trào Cần Vương'], 2,
      'Quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.',
      [
        '<b>Nguyễn Trãi (1380 – 1442)</b>:',
        '<ul><li>Hiệu <code>Ức Trai</code>, quê làng <i>Nhị Khê (Thường Tín, Hà Nội)</i>.</li><li>Quân sư của <b>Lê Lợi</b> trong khởi nghĩa <code>Lam Sơn</code> (1418 – 1427).</li><li>Đại công thần khai quốc triều Hậu Lê.</li></ul>',
        'Tây Sơn (Nguyễn Huệ – TK 18), Yên Thế (Hoàng Hoa Thám), Cần Vương (TK 19) — đều khác.',
      ],
      [
        'Sai — <code>Khởi nghĩa Tây Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khởi nghĩa Lam Sơn</code> vì quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.',
        'Sai — <code>Khởi nghĩa Yên Thế</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khởi nghĩa Lam Sơn</code> vì quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.',
        'Đúng — <code>Khởi nghĩa Lam Sơn</code> là phương án chính xác. Quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.',
        'Sai — <code>Phong trào Cần Vương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khởi nghĩa Lam Sơn</code> vì quân sư của Lê Lợi trong khởi nghĩa Lam Sơn.',
      ]
    ),
    Q('Tác phẩm nổi tiếng của Nguyễn Trãi là?', ['Chinh phụ ngâm', 'Hịch tướng sĩ', 'Truyện Kiều', 'Bình Ngô đại cáo'], 3,
      'Bình Ngô đại cáo — "Thiên cổ hùng văn".',
      [
        '<b>"Bình Ngô đại cáo"</b>:',
        '<ul><li>Nguyễn Trãi thừa lệnh Lê Lợi soạn năm <code>1428</code>.</li><li>Được coi là <i>bản tuyên ngôn độc lập thứ hai</i> của dân tộc.</li><li>"<b>Thiên cổ hùng văn</b>" — văn hùng muôn đời.</li></ul>',
        'Hịch tướng sĩ là của Trần Hưng Đạo; Truyện Kiều của Nguyễn Du; Chinh phụ ngâm của Đặng Trần Côn.',
      ],
      [
        'Sai — <code>Chinh phụ ngâm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bình Ngô đại cáo</code> vì bình Ngô đại cáo — "Thiên cổ hùng văn".',
        'Sai — <code>Hịch tướng sĩ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bình Ngô đại cáo</code> vì bình Ngô đại cáo — "Thiên cổ hùng văn".',
        'Sai — <code>Truyện Kiều</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bình Ngô đại cáo</code> vì bình Ngô đại cáo — "Thiên cổ hùng văn".',
        'Đúng — <code>Bình Ngô đại cáo</code> là phương án chính xác. Bình Ngô đại cáo — "Thiên cổ hùng văn".',
      ]
    ),
    Q('Nguyễn Trãi được UNESCO vinh danh năm 1980 là?', ['Danh nhân văn hoá thế giới', 'Anh hùng dân tộc', 'Thầy thuốc giỏi', 'Nhà khoa học'], 0,
      'UNESCO công nhận năm 1980 nhân 600 năm ngày sinh.',
      [
        '<b>Nguyễn Trãi — Danh nhân văn hoá thế giới (1980)</b>:',
        '<ul><li>UNESCO vinh danh nhân dịp <code>600 năm ngày sinh</code> (1380 – 1980).</li><li>Các tác phẩm: <i>Bình Ngô đại cáo, Quân trung từ mệnh tập, Quốc âm thi tập</i>.</li></ul>',
        'Lưu ý: "<b>Anh hùng dân tộc</b>" do nhà nước Việt Nam phong; "<b>Danh nhân văn hoá thế giới</b>" do UNESCO công nhận.',
      ],
      [
        'Đúng — <code>Danh nhân văn hoá thế giới</code> là phương án chính xác. UNESCO công nhận năm 1980 nhân 600 năm ngày sinh.',
        'Sai — <code>Anh hùng dân tộc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Danh nhân văn hoá thế giới</code> vì uNESCO công nhận năm 1980 nhân 600 năm ngày sinh.',
        'Sai — <code>Thầy thuốc giỏi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Danh nhân văn hoá thế giới</code> vì uNESCO công nhận năm 1980 nhân 600 năm ngày sinh.',
        'Sai — <code>Nhà khoa học</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Danh nhân văn hoá thế giới</code> vì uNESCO công nhận năm 1980 nhân 600 năm ngày sinh.',
      ]
    ),
  ]),

  M(11, 'Danh nhân Hà Nội — Lý Thái Tổ, Trần Quốc Tuấn', [
    Q('Lý Thái Tổ tên thật là?', ['Lý Công Uẩn', 'Lý Anh Tông', 'Lý Long Tường', 'Lý Thường Kiệt'], 0,
      'Lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.',
      [
        '<b>Lý Thái Tổ (974 – 1028)</b>:',
        '<ul><li>Tên thật <code>Lý Công Uẩn</code>.</li><li>Sáng lập <i>triều Lý</i> năm 1009.</li><li>Năm 1010 dời đô từ Hoa Lư về Đại La → đổi tên <b>Thăng Long</b>.</li></ul>',
        'Lý Anh Tông là vua sau; Lý Thường Kiệt là tướng; Lý Long Tường là hoàng tử lưu vong sang Cao Ly.',
      ],
      [
        'Đúng — <code>Lý Công Uẩn</code> là phương án chính xác. Lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.',
        'Sai — <code>Lý Anh Tông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Công Uẩn</code> vì lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.',
        'Sai — <code>Lý Long Tường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Công Uẩn</code> vì lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.',
        'Sai — <code>Lý Thường Kiệt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Công Uẩn</code> vì lý Công Uẩn — sáng lập triều Lý, dời đô Thăng Long 1010.',
      ]
    ),
    Q('"Chiếu dời đô" có ý nghĩa?', ['Cấm Phật giáo', 'Tuyên bố chiến tranh', 'Giải thích lí do dời đô về Đại La', 'Chia ruộng đất'], 2,
      'Văn kiện chính trị nổi tiếng bậc nhất sử Việt.',
      [
        '<b>"Chiếu dời đô" (Thiên đô chiếu)</b>:',
        '<ul><li>Lý Thái Tổ soạn năm <code>1010</code>.</li><li>Giải thích lí do <i>dời đô từ Hoa Lư về Đại La</i>.</li><li>Đại La được mô tả là "trung tâm trời đất", "rồng cuộn hổ ngồi".</li></ul>',
        'Thể hiện <b>tầm nhìn chiến lược</b> về địa lí, quân sự, phát triển.',
      ],
      [
        'Sai — <code>Cấm Phật giáo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải thích lí do dời đô về Đại La</code> vì văn kiện chính trị nổi tiếng bậc nhất sử Việt.',
        'Sai — <code>Tuyên bố chiến tranh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải thích lí do dời đô về Đại La</code> vì văn kiện chính trị nổi tiếng bậc nhất sử Việt.',
        'Đúng — <code>Giải thích lí do dời đô về Đại La</code> là phương án chính xác. Văn kiện chính trị nổi tiếng bậc nhất sử Việt.',
        'Sai — <code>Chia ruộng đất</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải thích lí do dời đô về Đại La</code> vì văn kiện chính trị nổi tiếng bậc nhất sử Việt.',
      ]
    ),
    Q('Trần Hưng Đạo có tên thật là?', ['Trần Quang Khải', 'Trần Nhật Duật', 'Trần Khánh Dư', 'Trần Quốc Tuấn'], 3,
      'Trần Quốc Tuấn — Hưng Đạo Đại Vương.',
      [
        '<b>Trần Hưng Đạo (1228 – 1300)</b>:',
        '<ul><li>Tên thật <code>Trần Quốc Tuấn</code>.</li><li>Hiệu <i>Hưng Đạo Đại Vương</i>.</li><li>Tổng chỉ huy quân đội Đại Việt 3 lần đánh tan quân Nguyên – Mông.</li></ul>',
        'Trần Quang Khải, Trần Nhật Duật, Trần Khánh Dư đều là tướng cùng thời nhưng khác.',
      ],
      [
        'Sai — <code>Trần Quang Khải</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trần Quốc Tuấn</code> vì trần Quốc Tuấn — Hưng Đạo Đại Vương.',
        'Sai — <code>Trần Nhật Duật</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trần Quốc Tuấn</code> vì trần Quốc Tuấn — Hưng Đạo Đại Vương.',
        'Sai — <code>Trần Khánh Dư</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trần Quốc Tuấn</code> vì trần Quốc Tuấn — Hưng Đạo Đại Vương.',
        'Đúng — <code>Trần Quốc Tuấn</code> là phương án chính xác. Trần Quốc Tuấn — Hưng Đạo Đại Vương.',
      ]
    ),
    Q('Trần Hưng Đạo chỉ huy chiến thắng nào nổi tiếng?', ['Cẩm Đường', 'Đống Đa 1789', 'Bạch Đằng 1288', 'Điện Biên Phủ 1954'], 2,
      'Đại phá quân Nguyên trên sông Bạch Đằng năm 1288.',
      [
        '<b>Trận Bạch Đằng 1288</b>:',
        '<ul><li>Trần Hưng Đạo dùng <code>cọc gỗ bịt sắt</code> chôn xuống sông.</li><li>Đợi thuỷ triều rút, tàu giặc mắc cạn → đại phá quân Nguyên – Mông.</li><li>Bắt sống tướng Ô Mã Nhi.</li></ul>',
        'Đỉnh cao <b>nghệ thuật quân sự</b>; Đống Đa 1789 (Quang Trung); Điện Biên Phủ 1954 (Võ Nguyên Giáp).',
      ],
      [
        'Sai — <code>Cẩm Đường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bạch Đằng 1288</code> vì đại phá quân Nguyên trên sông Bạch Đằng năm 1288.',
        'Sai — <code>Đống Đa 1789</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bạch Đằng 1288</code> vì đại phá quân Nguyên trên sông Bạch Đằng năm 1288.',
        'Đúng — <code>Bạch Đằng 1288</code> là phương án chính xác. Đại phá quân Nguyên trên sông Bạch Đằng năm 1288.',
        'Sai — <code>Điện Biên Phủ 1954</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bạch Đằng 1288</code> vì đại phá quân Nguyên trên sông Bạch Đằng năm 1288.',
      ]
    ),
    Q('Tác phẩm nào do Trần Hưng Đạo viết?', ['Hịch tướng sĩ', 'Truyền kì mạn lục', 'Bình Ngô đại cáo', 'Chiếu dời đô'], 0,
      'Hịch tướng sĩ — kêu gọi binh sĩ trước khi đánh quân Nguyên.',
      [
        '<b>"Hịch tướng sĩ"</b>:',
        '<ul><li>Trần Hưng Đạo soạn năm <code>1284</code>.</li><li>Kêu gọi binh sĩ <i>quyết tâm đánh giặc Nguyên – Mông</i>.</li><li>Đầy khí phách, đầy uất ức trước họa mất nước.</li></ul>',
        'Phân biệt: Chiếu dời đô (Lý Thái Tổ), Bình Ngô đại cáo (Nguyễn Trãi), Truyền kì mạn lục (Nguyễn Dữ).',
      ],
      [
        'Đúng — <code>Hịch tướng sĩ</code> là phương án chính xác. Hịch tướng sĩ — kêu gọi binh sĩ trước khi đánh quân Nguyên.',
        'Sai — <code>Truyền kì mạn lục</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hịch tướng sĩ</code> vì hịch tướng sĩ — kêu gọi binh sĩ trước khi đánh quân Nguyên.',
        'Sai — <code>Bình Ngô đại cáo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hịch tướng sĩ</code> vì hịch tướng sĩ — kêu gọi binh sĩ trước khi đánh quân Nguyên.',
        'Sai — <code>Chiếu dời đô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hịch tướng sĩ</code> vì hịch tướng sĩ — kêu gọi binh sĩ trước khi đánh quân Nguyên.',
      ]
    ),
    Q('Phố/khu vực nào ở Hà Nội mang tên các vị anh hùng trên?', ['Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt', 'Chỉ Trần Hưng Đạo', 'Chỉ có Lý Thường Kiệt', 'Chỉ phố Lý Thái Tổ'], 0,
      'Cả ba đều có phố lớn ở Hà Nội.',
      [
        '<b>Phố mang tên anh hùng dân tộc ở Hà Nội:</b>',
        '<ul><li><code>Lý Thái Tổ</code> — bên Hồ Gươm, có tượng đài.</li><li><code>Trần Hưng Đạo</code> — phố lớn quận Hoàn Kiếm.</li><li><code>Lý Thường Kiệt</code> — phố trung tâm khu phố Pháp.</li></ul>',
        'Khu trung tâm Hoàn Kiếm tập trung nhiều phố mang tên danh nhân dân tộc.',
      ],
      [
        'Đúng — <code>Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt</code> là phương án chính xác. Cả ba đều có phố lớn ở Hà Nội.',
        'Sai — <code>Chỉ Trần Hưng Đạo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt</code> vì cả ba đều có phố lớn ở Hà Nội.',
        'Sai — <code>Chỉ có Lý Thường Kiệt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt</code> vì cả ba đều có phố lớn ở Hà Nội.',
        'Sai — <code>Chỉ phố Lý Thái Tổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Thái Tổ, Trần Hưng Đạo, Lý Thường Kiệt</code> vì cả ba đều có phố lớn ở Hà Nội.',
      ]
    ),
  ]),

  M(12, 'Lịch sử Cổ Loa và nhà nước Âu Lạc', [
    Q('Cổ Loa thuộc huyện nào của Hà Nội?', ['Đông Anh', 'Sóc Sơn', 'Long Biên', 'Gia Lâm'], 0,
      'Thuộc xã Cổ Loa, huyện Đông Anh, Hà Nội.',
      [
        '<b>Thành Cổ Loa</b>:',
        '<ul><li>Thuộc xã <code>Cổ Loa, huyện Đông Anh</code>, Hà Nội.</li><li>Cách trung tâm khoảng <code>17 km</code> về phía bắc.</li><li>Xây thế kỉ III TCN dưới thời <i>An Dương Vương</i>.</li></ul>',
        'Sóc Sơn, Long Biên, Gia Lâm cũng ở phía bắc/đông HN nhưng không có thành Cổ Loa.',
      ],
      [
        'Đúng — <code>Đông Anh</code> là phương án chính xác. Thuộc xã Cổ Loa, huyện Đông Anh, Hà Nội.',
        'Sai — <code>Sóc Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đông Anh</code> vì thuộc xã Cổ Loa, huyện Đông Anh, Hà Nội.',
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đông Anh</code> vì thuộc xã Cổ Loa, huyện Đông Anh, Hà Nội.',
        'Sai — <code>Gia Lâm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đông Anh</code> vì thuộc xã Cổ Loa, huyện Đông Anh, Hà Nội.',
      ]
    ),
    Q('Thành Cổ Loa do ai xây dựng?', ['Hùng Vương', 'An Dương Vương', 'Lý Bí (sáng lập nhà nước Vạn Xuân)', 'Hai Bà Trưng'], 1,
      'An Dương Vương sáp nhập Văn Lang, lập Âu Lạc, xây Cổ Loa.',
      [
        '<b>An Dương Vương (Thục Phán)</b>:',
        '<ul><li>Sau khi sáp nhập Văn Lang (của vua Hùng), lập nước <code>Âu Lạc</code>.</li><li>Cho xây thành <b>Cổ Loa</b> làm kinh đô.</li><li>Khoảng thế kỉ III TCN.</li></ul>',
        'Hùng Vương ở Phú Thọ (Văn Lang); Lý Bí (Vạn Xuân – 544); Hai Bà Trưng (40 – 43).',
      ],
      [
        'Sai — <code>Hùng Vương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>An Dương Vương</code> vì an Dương Vương sáp nhập Văn Lang, lập Âu Lạc, xây Cổ Loa.',
        'Đúng — <code>An Dương Vương</code> là phương án chính xác. An Dương Vương sáp nhập Văn Lang, lập Âu Lạc, xây Cổ Loa.',
        'Sai — <code>Lý Bí (sáng lập nhà nước Vạn Xuân)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>An Dương Vương</code> vì an Dương Vương sáp nhập Văn Lang, lập Âu Lạc, xây Cổ Loa.',
        'Sai — <code>Hai Bà Trưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>An Dương Vương</code> vì an Dương Vương sáp nhập Văn Lang, lập Âu Lạc, xây Cổ Loa.',
      ]
    ),
    Q('Đặc điểm nổi bật của thành Cổ Loa?', ['Hình vuông', 'Hình tròn 1 vòng', 'Có 3 vòng thành xoắn ốc', 'Thành bằng đá'], 2,
      'Ba vòng thành đắp đất xoắn ốc — dân gian gọi "Loa thành".',
      [
        '<b>Kiến trúc 3 vòng thành xoắn ốc</b>:',
        '<ul><li><code>Thành Ngoài</code>: chu vi ~8 km.</li><li><code>Thành Trung</code>: chu vi ~6,5 km.</li><li><code>Thành Trong</code>: chu vi ~1,6 km, là hoàng thành.</li></ul>',
        'Bố cục xoắn ốc → dân gian gọi "<i>Loa thành</i>" (loa = ốc).',
      ],
      [
        'Sai — <code>Hình vuông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Có 3 vòng thành xoắn ốc</code> vì ba vòng thành đắp đất xoắn ốc — dân gian gọi "Loa thành".',
        'Sai — <code>Hình tròn 1 vòng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Có 3 vòng thành xoắn ốc</code> vì ba vòng thành đắp đất xoắn ốc — dân gian gọi "Loa thành".',
        'Đúng — <code>Có 3 vòng thành xoắn ốc</code> là phương án chính xác. Ba vòng thành đắp đất xoắn ốc — dân gian gọi "Loa thành".',
        'Sai — <code>Thành bằng đá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Có 3 vòng thành xoắn ốc</code> vì ba vòng thành đắp đất xoắn ốc — dân gian gọi "Loa thành".',
      ]
    ),
    Q('Nỏ Liên Châu trong truyền thuyết gắn với?', ['An Tiêm', 'Mai An Tiêm', 'Tản Viên', 'Cao Lỗ'], 3,
      'Tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.',
      [
        '<b>Tướng Cao Lỗ</b> và <b>nỏ Liên Châu</b>:',
        '<ul><li>Cao Lỗ là tướng giỏi của An Dương Vương.</li><li>Chế ra <code>nỏ Liên Châu</code> (nỏ thần) bắn nhiều mũi tên cùng lúc.</li><li>Giúp Âu Lạc nhiều lần đánh bại quân Triệu Đà.</li></ul>',
        'Mai An Tiêm — sự tích dưa hấu; Tản Viên — Sơn Tinh.',
      ],
      [
        'Sai — <code>An Tiêm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cao Lỗ</code> vì tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.',
        'Sai — <code>Mai An Tiêm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cao Lỗ</code> vì tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.',
        'Sai — <code>Tản Viên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cao Lỗ</code> vì tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.',
        'Đúng — <code>Cao Lỗ</code> là phương án chính xác. Tướng Cao Lỗ chế "Nỏ Thần" bắn nhiều mũi tên cùng lúc.',
      ]
    ),
    Q('Truyền thuyết Mỵ Châu – Trọng Thuỷ gắn với?', ['Triệu Đà – âm mưu xâm lược', 'Ngô Quyền', 'Hai Bà Trưng', 'Lê Lợi'], 0,
      'Triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.',
      [
        '<b>Truyền thuyết Mỵ Châu – Trọng Thuỷ</b>:',
        '<ul><li>Triệu Đà cử <code>Trọng Thuỷ</code> sang cầu hôn <code>Mỵ Châu</code>.</li><li>Trọng Thuỷ đánh cắp bí mật nỏ thần → Âu Lạc mất nước.</li></ul>',
        'Bài học: <b>cảnh giác</b> trước âm mưu xâm lược, không vì tình riêng làm lộ bí mật quốc gia.',
      ],
      [
        'Đúng — <code>Triệu Đà – âm mưu xâm lược</code> là phương án chính xác. Triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.',
        'Sai — <code>Ngô Quyền</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Triệu Đà – âm mưu xâm lược</code> vì triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.',
        'Sai — <code>Hai Bà Trưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Triệu Đà – âm mưu xâm lược</code> vì triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.',
        'Sai — <code>Lê Lợi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Triệu Đà – âm mưu xâm lược</code> vì triệu Đà gả Trọng Thuỷ cho Mỵ Châu để đánh cắp bí mật nỏ thần.',
      ]
    ),
    Q('Đền thờ An Dương Vương ở Cổ Loa còn gọi là?', ['Đền Đô', 'Đền Trần', 'Đền Thượng', 'Đền Hùng'], 2,
      'Đền Thượng — chính điện thờ An Dương Vương.',
      [
        '<b>Đền Thượng Cổ Loa</b>:',
        '<ul><li>Chính điện thờ <code>An Dương Vương</code>.</li><li>Có <i>am thờ Mỵ Châu</i> với tượng đá không đầu.</li><li>Có <i>giếng Ngọc, hồ Bán Nguyệt</i>.</li></ul>',
        'Đền Đô (Bắc Ninh) thờ 8 vua Lý; đền Trần (Nam Định); đền Hùng (Phú Thọ).',
      ],
      [
        'Sai — <code>Đền Đô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đền Thượng</code> vì đền Thượng — chính điện thờ An Dương Vương.',
        'Sai — <code>Đền Trần</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đền Thượng</code> vì đền Thượng — chính điện thờ An Dương Vương.',
        'Đúng — <code>Đền Thượng</code> là phương án chính xác. Đền Thượng — chính điện thờ An Dương Vương.',
        'Sai — <code>Đền Hùng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đền Thượng</code> vì đền Thượng — chính điện thờ An Dương Vương.',
      ]
    ),
  ]),

  M(13, 'Khởi nghĩa Hai Bà Trưng — Mê Linh', [
    Q('Hai Bà Trưng là ai?', ['Hai bà tiên', 'Hai con gái Hùng Vương', 'Hai chị em Lý Bí', 'Trưng Trắc và Trưng Nhị'], 3,
      'Hai chị em — Trưng Trắc và Trưng Nhị.',
      [
        '<b>Hai Bà Trưng</b>:',
        '<ul><li><code>Trưng Trắc</code> (chị) và <code>Trưng Nhị</code> (em).</li><li>Con của <i>Lạc tướng Mê Linh</i>.</li><li>Lãnh đạo khởi nghĩa năm 40 chống nhà Đông Hán.</li></ul>',
        'Là 2 người phụ nữ đầu tiên dựng cờ độc lập trong sử Việt.',
      ],
      [
        'Sai — <code>Hai bà tiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trưng Trắc và Trưng Nhị</code> vì hai chị em — Trưng Trắc và Trưng Nhị.',
        'Sai — <code>Hai con gái Hùng Vương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trưng Trắc và Trưng Nhị</code> vì hai chị em — Trưng Trắc và Trưng Nhị.',
        'Sai — <code>Hai chị em Lý Bí</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trưng Trắc và Trưng Nhị</code> vì hai chị em — Trưng Trắc và Trưng Nhị.',
        'Đúng — <code>Trưng Trắc và Trưng Nhị</code> là phương án chính xác. Hai chị em — Trưng Trắc và Trưng Nhị.',
      ]
    ),
    Q('Mê Linh xưa nay thuộc huyện nào của Hà Nội?', ['Sóc Sơn', 'Mê Linh', 'Long Biên', 'Đông Anh'], 1,
      'Mê Linh nay là huyện ngoại thành phía bắc HN.',
      [
        '<b>Huyện Mê Linh</b>:',
        '<ul><li>Huyện ngoại thành phía bắc Hà Nội.</li><li>Sáp nhập vào HN năm <code>2008</code> (từ tỉnh Vĩnh Phúc).</li><li>Có <i>đền Hạ Lôi</i> thờ Hai Bà.</li></ul>',
        'Đây cũng là quê hương Hai Bà Trưng.',
      ],
      [
        'Sai — <code>Sóc Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mê Linh</code> vì mê Linh nay là huyện ngoại thành phía bắc HN.',
        'Đúng — <code>Mê Linh</code> là phương án chính xác. Mê Linh nay là huyện ngoại thành phía bắc HN.',
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mê Linh</code> vì mê Linh nay là huyện ngoại thành phía bắc HN.',
        'Sai — <code>Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mê Linh</code> vì mê Linh nay là huyện ngoại thành phía bắc HN.',
      ]
    ),
    Q('Khởi nghĩa Hai Bà Trưng nổ ra năm?', ['248', '111', '938', '40'], 3,
      'Mùa xuân năm 40, khởi nghĩa chống nhà Hán.',
      [
        '<b>Năm 40 sau Công nguyên</b>:',
        '<ul><li>Khởi nghĩa nổ ra ở <code>Hát Môn</code> (nay Phúc Thọ, Hà Nội).</li><li>Quân khởi nghĩa chiếm 65 thành trì.</li><li>Tô Định bỏ chạy về nước.</li></ul>',
        'Phân biệt: 111 TCN Triệu Đà; 248 Bà Triệu; 938 Ngô Quyền – Bạch Đằng.',
      ],
      [
        'Sai — <code>248</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>40</code> vì mùa xuân năm 40, khởi nghĩa chống nhà Hán.',
        'Sai — <code>111</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>40</code> vì mùa xuân năm 40, khởi nghĩa chống nhà Hán.',
        'Sai — <code>938</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>40</code> vì mùa xuân năm 40, khởi nghĩa chống nhà Hán.',
        'Đúng — <code>40</code> là phương án chính xác. Mùa xuân năm 40, khởi nghĩa chống nhà Hán.',
      ]
    ),
    Q('Chồng của Trưng Trắc là?', ['Lý Bí (vua khởi nghĩa năm 542)', 'Thi Sách', 'Triệu Đà', 'Cao Lỗ'], 1,
      'Thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.',
      [
        '<b>Thi Sách</b>:',
        '<ul><li>Chồng của Trưng Trắc, người Chu Diên.</li><li>Bị thái thú <code>Tô Định</code> nhà Đông Hán giết.</li><li>Cái chết của Thi Sách <i>châm ngòi khởi nghĩa</i> năm 40.</li></ul>',
        'Lý Bí khởi nghĩa năm 542; Triệu Đà là vua Nam Việt; Cao Lỗ tướng An Dương Vương.',
      ],
      [
        'Sai — <code>Lý Bí (vua khởi nghĩa năm 542)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thi Sách</code> vì thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.',
        'Đúng — <code>Thi Sách</code> là phương án chính xác. Thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.',
        'Sai — <code>Triệu Đà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thi Sách</code> vì thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.',
        'Sai — <code>Cao Lỗ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thi Sách</code> vì thi Sách bị thái thú Tô Định giết, châm ngòi khởi nghĩa.',
      ]
    ),
    Q('Sau khi thắng, Trưng Trắc xưng?', ['Thái hậu', 'Hoàng đế', 'Trưng Vương', 'Đại tướng'], 2,
      'Bà xưng Trưng Vương, đóng đô ở Mê Linh.',
      [
        '<b>Trưng Vương (40 – 43)</b>:',
        '<ul><li>Trưng Trắc xưng vương sau khi đánh đuổi Tô Định.</li><li>Đóng đô ở <code>Mê Linh</code>.</li><li>Cai trị độc lập gần <i>3 năm</i>.</li></ul>',
        'Năm 43 Mã Viện đem quân Hán sang đàn áp, Hai Bà gieo mình xuống sông Hát.',
      ],
      [
        'Sai — <code>Thái hậu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trưng Vương</code> vì bà xưng Trưng Vương, đóng đô ở Mê Linh.',
        'Sai — <code>Hoàng đế</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trưng Vương</code> vì bà xưng Trưng Vương, đóng đô ở Mê Linh.',
        'Đúng — <code>Trưng Vương</code> là phương án chính xác. Bà xưng Trưng Vương, đóng đô ở Mê Linh.',
        'Sai — <code>Đại tướng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trưng Vương</code> vì bà xưng Trưng Vương, đóng đô ở Mê Linh.',
      ]
    ),
    Q('Đền Hai Bà Trưng nổi tiếng ở Hà Nội nằm ở đâu?', ['Văn Miếu', 'Đông Anh', 'Hồ Tây', 'Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)'], 3,
      'Cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.',
      [
        '<b>Các đền thờ Hai Bà Trưng:</b>',
        '<ul><li><code>Đền Hạ Lôi (Mê Linh)</code> — quê hương Hai Bà.</li><li><code>Đền Đồng Nhân (quận Hai Bà Trưng)</code> — tương truyền tượng Hai Bà từ sông Hồng dạt vào.</li><li><code>Đền Hát Môn (Phúc Thọ)</code> — nơi tế cờ khởi nghĩa.</li></ul>',
        'Quận Hai Bà Trưng được đặt tên để tôn vinh hai vị anh hùng dân tộc.',
      ],
      [
        'Sai — <code>Văn Miếu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)</code> vì cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.',
        'Sai — <code>Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)</code> vì cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.',
        'Sai — <code>Hồ Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)</code> vì cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.',
        'Đúng — <code>Hạ Lôi (Mê Linh) và Đồng Nhân (Hai Bà Trưng)</code> là phương án chính xác. Cả hai đền đều quan trọng — Hạ Lôi là quê, Đồng Nhân là nơi hoá.',
      ]
    ),
  ]),

  M(14, 'Chiến thắng Đống Đa — Quang Trung', [
    Q('Trận Ngọc Hồi – Đống Đa diễn ra vào năm?', ['1789', '1288', '1885', '1077'], 0,
      'Tết Kỷ Dậu 1789 — Quang Trung đại phá quân Thanh.',
      [
        '<b>Tết Kỷ Dậu 1789</b>:',
        '<ul><li>Mùng 5 Tết Kỷ Dậu (<code>30/1/1789</code>).</li><li>Quang Trung đại phá <code>29 vạn quân Thanh</code> tại Ngọc Hồi – Đống Đa.</li></ul>',
        'Phân biệt: 1077 (Lý Thường Kiệt); 1288 (Bạch Đằng); 1885 (Cần Vương).',
      ],
      [
        'Đúng — <code>1789</code> là phương án chính xác. Tết Kỷ Dậu 1789 — Quang Trung đại phá quân Thanh.',
        'Sai — <code>1288</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1789</code> vì tết Kỷ Dậu 1789 — Quang Trung đại phá quân Thanh.',
        'Sai — <code>1885</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1789</code> vì tết Kỷ Dậu 1789 — Quang Trung đại phá quân Thanh.',
        'Sai — <code>1077</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1789</code> vì tết Kỷ Dậu 1789 — Quang Trung đại phá quân Thanh.',
      ]
    ),
    Q('Vua Quang Trung tên thật là?', ['Nguyễn Nhạc', 'Nguyễn Ánh', 'Nguyễn Lữ', 'Nguyễn Huệ'], 3,
      'Nguyễn Huệ — lãnh tụ Tây Sơn.',
      [
        '<b>Vua Quang Trung — Nguyễn Huệ</b>:',
        '<ul><li>Là 1 trong 3 anh em Tây Sơn: <code>Nhạc – Huệ – Lữ</code>.</li><li>Lên ngôi Hoàng đế năm <code>1788</code> tại Phú Xuân (Huế).</li><li>Lấy niên hiệu <i>Quang Trung</i>.</li></ul>',
        'Nguyễn Ánh là <b>kẻ thù</b> Tây Sơn — sau lên ngôi (1802) thành vua Gia Long.',
      ],
      [
        'Sai — <code>Nguyễn Nhạc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nguyễn Huệ</code> vì nguyễn Huệ — lãnh tụ Tây Sơn.',
        'Sai — <code>Nguyễn Ánh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nguyễn Huệ</code> vì nguyễn Huệ — lãnh tụ Tây Sơn.',
        'Sai — <code>Nguyễn Lữ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nguyễn Huệ</code> vì nguyễn Huệ — lãnh tụ Tây Sơn.',
        'Đúng — <code>Nguyễn Huệ</code> là phương án chính xác. Nguyễn Huệ — lãnh tụ Tây Sơn.',
      ]
    ),
    Q('Quân địch bị đánh bại tại Đống Đa là?', ['Quân Minh', 'Quân Tống', 'Quân Nguyên', 'Quân Thanh'], 3,
      '29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.',
      [
        '<b>Quân Thanh (Trung Quốc)</b>:',
        '<ul><li>Do <code>Tôn Sĩ Nghị</code> cầm đầu, mang <code>29 vạn quân</code> sang xâm lược.</li><li>Lê Chiêu Thống "<i>cõng rắn cắn gà nhà</i>" mời Thanh sang.</li></ul>',
        'Phân biệt 4 lần xâm lược TQ: Tống (1077), Nguyên (1258, 1285, 1288), Minh (1407–1427), Thanh (1789).',
      ],
      [
        'Sai — <code>Quân Minh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quân Thanh</code> vì 29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.',
        'Sai — <code>Quân Tống</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quân Thanh</code> vì 29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.',
        'Sai — <code>Quân Nguyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quân Thanh</code> vì 29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.',
        'Đúng — <code>Quân Thanh</code> là phương án chính xác. 29 vạn quân Thanh do Tôn Sĩ Nghị chỉ huy.',
      ]
    ),
    Q('Quang Trung hành quân thần tốc từ đâu ra Thăng Long?', ['Cao Bằng', 'Phú Xuân (Huế)', 'Hoa Lư', 'Sài Gòn'], 1,
      'Từ Phú Xuân (Huế) ra Bắc trong khoảng 1 tháng.',
      [
        '<b>Hành quân thần tốc</b> của Quang Trung:',
        '<ul><li>Xuất phát từ <code>Phú Xuân (Huế)</code> — 25 tháng Chạp.</li><li>Tới Nghệ An tuyển thêm quân, khao quân ăn Tết sớm.</li><li>Mùng 5 Tết tới Thăng Long, đại thắng.</li></ul>',
        'Tốc độ chưa từng có trong lịch sử thế giới thời đó.',
      ],
      [
        'Sai — <code>Cao Bằng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phú Xuân (Huế)</code> vì từ Phú Xuân (Huế) ra Bắc trong khoảng 1 tháng.',
        'Đúng — <code>Phú Xuân (Huế)</code> là phương án chính xác. Từ Phú Xuân (Huế) ra Bắc trong khoảng 1 tháng.',
        'Sai — <code>Hoa Lư</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phú Xuân (Huế)</code> vì từ Phú Xuân (Huế) ra Bắc trong khoảng 1 tháng.',
        'Sai — <code>Sài Gòn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phú Xuân (Huế)</code> vì từ Phú Xuân (Huế) ra Bắc trong khoảng 1 tháng.',
      ]
    ),
    Q('Lễ hội Gò Đống Đa tổ chức ngày nào?', ['Mùng 1 Tết', 'Mùng 5 Tết', '10/3 âm', 'Rằm tháng Giêng'], 1,
      'Mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi – Đống Đa.',
      [
        '<b>Lễ hội Gò Đống Đa — mùng 5 Tết</b>:',
        '<ul><li>Tổ chức hàng năm tại gò Đống Đa, quận Đống Đa.</li><li>Có lễ rước "<i>Rồng lửa Thăng Long</i>", đọc văn tế, tái hiện trận đánh.</li><li>Dâng hương tượng đài <code>Quang Trung</code>.</li></ul>',
        '10/3 âm là Giỗ Tổ Hùng Vương; Rằm tháng Giêng là Tết Nguyên Tiêu.',
      ],
      [
        'Sai — <code>Mùng 1 Tết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mùng 5 Tết</code> vì mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi – Đống Đa.',
        'Đúng — <code>Mùng 5 Tết</code> là phương án chính xác. Mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi – Đống Đa.',
        'Sai — <code>10/3 âm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mùng 5 Tết</code> vì mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi – Đống Đa.',
        'Sai — <code>Rằm tháng Giêng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mùng 5 Tết</code> vì mùng 5 Tết — kỉ niệm chiến thắng Ngọc Hồi – Đống Đa.',
      ]
    ),
    Q('Tướng giặc tử trận trong trận Đống Đa là?', ['Hứa Thế Hanh', 'Tôn Sĩ Nghị', 'Sầm Nghi Đống', 'Liễu Thăng'], 2,
      'Sầm Nghi Đống tự thắt cổ tại gò Đống Đa.',
      [
        '<b>Sầm Nghi Đống</b>:',
        '<ul><li>Tướng nhà Thanh, đóng tại Khương Thượng – Đống Đa.</li><li>Bị <i>đô đốc Long</i> đánh úp, tự thắt cổ.</li></ul>',
        'Tôn Sĩ Nghị bỏ ấn tín <b>chạy thoát</b>; Liễu Thăng bị giết ở Chi Lăng năm 1427 (chống Lê Lợi).',
      ],
      [
        'Sai — <code>Hứa Thế Hanh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sầm Nghi Đống</code> vì sầm Nghi Đống tự thắt cổ tại gò Đống Đa.',
        'Sai — <code>Tôn Sĩ Nghị</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sầm Nghi Đống</code> vì sầm Nghi Đống tự thắt cổ tại gò Đống Đa.',
        'Đúng — <code>Sầm Nghi Đống</code> là phương án chính xác. Sầm Nghi Đống tự thắt cổ tại gò Đống Đa.',
        'Sai — <code>Liễu Thăng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sầm Nghi Đống</code> vì sầm Nghi Đống tự thắt cổ tại gò Đống Đa.',
      ]
    ),
  ]),

  M(15, 'Hà Nội thời Pháp thuộc — kiến trúc Đông Dương', [
    Q('Pháp đánh chiếm Hà Nội lần đầu năm?', ['1873', '1858', '1884', '1945'], 0,
      '1873 — Francis Garnier đánh thành Hà Nội lần 1.',
      [
        '<b>Pháp đánh thành Hà Nội — 2 lần:</b>',
        '<ul><li><code>1873</code>: lần 1 — Francis Garnier đánh. Nguyễn Tri Phương bị thương, tuyệt thực mà mất.</li><li><code>1882</code>: lần 2 — Henri Rivière đánh. Hoàng Diệu treo cổ tự vẫn.</li></ul>',
        'Phân biệt: 1858 Pháp nổ súng Đà Nẵng; 1884 Hiệp ước Patenôtre; 1945 Cách mạng Tháng Tám.',
      ],
      [
        'Đúng — <code>1873</code> là phương án chính xác. 1873 — Francis Garnier đánh thành Hà Nội lần 1.',
        'Sai — <code>1858</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1873</code> vì 1873 — Francis Garnier đánh thành Hà Nội lần 1.',
        'Sai — <code>1884</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1873</code> vì 1873 — Francis Garnier đánh thành Hà Nội lần 1.',
        'Sai — <code>1945</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1873</code> vì 1873 — Francis Garnier đánh thành Hà Nội lần 1.',
      ]
    ),
    Q('Tổng đốc Hà Nội tuẫn tiết khi thành thất thủ lần 2 (1882) là?', ['Nguyễn Tri Phương', 'Tôn Thất Thuyết', 'Hoàng Diệu', 'Phan Thanh Giản'], 2,
      'Hoàng Diệu treo cổ tự vẫn trong Võ Miếu.',
      [
        '<b>Hoàng Diệu (1828 – 1882)</b>:',
        '<ul><li>Tổng đốc Hà Nội khi Pháp đánh thành lần 2.</li><li>Khi thành thất thủ, <i>treo cổ tự vẫn</i> trong Võ Miếu.</li><li>Để lại "<b>Di biểu</b>" gửi vua, nhận trách nhiệm.</li></ul>',
        'Nguyễn Tri Phương tuẫn tiết năm 1873; Tôn Thất Thuyết – Cần Vương; Phan Thanh Giản – Vĩnh Long 1867.',
      ],
      [
        'Sai — <code>Nguyễn Tri Phương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng Diệu</code> vì hoàng Diệu treo cổ tự vẫn trong Võ Miếu.',
        'Sai — <code>Tôn Thất Thuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng Diệu</code> vì hoàng Diệu treo cổ tự vẫn trong Võ Miếu.',
        'Đúng — <code>Hoàng Diệu</code> là phương án chính xác. Hoàng Diệu treo cổ tự vẫn trong Võ Miếu.',
        'Sai — <code>Phan Thanh Giản</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng Diệu</code> vì hoàng Diệu treo cổ tự vẫn trong Võ Miếu.',
      ]
    ),
    Q('Nhà hát Lớn Hà Nội xây dựng theo phong cách?', ['Gô-tích', 'Á đông', 'Tân cổ điển Pháp', 'Hiện đại'], 2,
      'Xây 1901–1911 theo mẫu Opéra Garnier (Paris).',
      [
        '<b>Nhà hát Lớn Hà Nội (1901 – 1911)</b>:',
        '<ul><li>Mô phỏng <code>Opéra Garnier (Paris)</code>.</li><li>Phong cách <b>tân cổ điển Pháp</b>: mặt tiền đối xứng, hàng cột <i>Ionic</i>, mái <i>mansard</i>.</li><li>Nội thất sảnh gương, cầu thang đá hoa cương.</li></ul>',
        'Gô-tích thời Trung cổ châu Âu; Á đông châu Á; hiện đại sau TK 20.',
      ],
      [
        'Sai — <code>Gô-tích</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tân cổ điển Pháp</code> vì xây 1901–1911 theo mẫu Opéra Garnier (Paris).',
        'Sai — <code>Á đông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tân cổ điển Pháp</code> vì xây 1901–1911 theo mẫu Opéra Garnier (Paris).',
        'Đúng — <code>Tân cổ điển Pháp</code> là phương án chính xác. Xây 1901–1911 theo mẫu Opéra Garnier (Paris).',
        'Sai — <code>Hiện đại</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tân cổ điển Pháp</code> vì xây 1901–1911 theo mẫu Opéra Garnier (Paris).',
      ]
    ),
    Q('Cầu Long Biên do ai thiết kế?', ['Nguyễn Tri Phương', 'Daydé & Pillé', 'Eiffel', 'Le Corbusier'], 1,
      'Hãng Daydé & Pillé (Pháp), khánh thành 1902.',
      [
        '<b>Cầu Long Biên (1898 – 1902)</b>:',
        '<ul><li>Do hãng <code>Daydé & Pillé</code> của Pháp thiết kế và thi công.</li><li>Dài <code>1 691 m</code>, từng là <i>cầu lớn nhất Đông Dương</i>.</li><li>Cầu sắt đầu tiên qua sông Hồng.</li></ul>',
        '⚠️ Không phải Eiffel (tác giả tháp Eiffel) — đây là nhầm lẫn phổ biến.',
      ],
      [
        'Sai — <code>Nguyễn Tri Phương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Daydé & Pillé</code> vì hãng Daydé & Pillé (Pháp), khánh thành 1902.',
        'Đúng — <code>Daydé & Pillé</code> là phương án chính xác. Hãng Daydé & Pillé (Pháp), khánh thành 1902.',
        'Sai — <code>Eiffel</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Daydé & Pillé</code> vì hãng Daydé & Pillé (Pháp), khánh thành 1902.',
        'Sai — <code>Le Corbusier</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Daydé & Pillé</code> vì hãng Daydé & Pillé (Pháp), khánh thành 1902.',
      ]
    ),
    Q('Phong cách "Kiến trúc Đông Dương" pha trộn?', ['Pháp & Việt – Hán', 'Pháp & Nhật', 'Trung & Anh', 'Đức & Việt'], 0,
      'Kết hợp nghệ thuật Pháp với chi tiết phương Đông.',
      [
        '<b>Kiến trúc Đông Dương (Indochinois)</b>:',
        '<ul><li>Do KTS <code>Ernest Hébrard</code> sáng tạo những năm 1920 – 1930.</li><li>Kết hợp <i>khung kết cấu Pháp</i> với <i>mái ngói, hoa văn Á đông</i> (con sơn, đầu đao).</li></ul>',
        'Ví dụ: Đại học Đông Dương (nay ĐH Dược, ĐH Quốc gia cũ), Bảo tàng Louis Finot.',
      ],
      [
        'Đúng — <code>Pháp & Việt – Hán</code> là phương án chính xác. Kết hợp nghệ thuật Pháp với chi tiết phương Đông.',
        'Sai — <code>Pháp & Nhật</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Pháp & Việt – Hán</code> vì kết hợp nghệ thuật Pháp với chi tiết phương Đông.',
        'Sai — <code>Trung & Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Pháp & Việt – Hán</code> vì kết hợp nghệ thuật Pháp với chi tiết phương Đông.',
        'Sai — <code>Đức & Việt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Pháp & Việt – Hán</code> vì kết hợp nghệ thuật Pháp với chi tiết phương Đông.',
      ]
    ),
    Q('Toà nhà nào hiện là Bảo tàng Lịch sử Quốc gia?', ['Bưu điện', 'Nhà hát Lớn', 'Phủ Toàn quyền', 'Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)'], 3,
      '1 Tràng Tiền — Louis Finot cũ, nay là Bảo tàng Lịch sử Quốc gia.',
      [
        '<b>Bảo tàng Lịch sử Quốc gia</b>:',
        '<ul><li>Địa chỉ: <code>1 Tràng Tiền</code>, quận Hoàn Kiếm.</li><li>Trong toà nhà <i>Louis Finot</i> cũ (Trường Viễn Đông Bác cổ).</li><li>Kiến trúc <b>Đông Dương</b> tiêu biểu của Hébrard.</li></ul>',
        'Phủ Toàn quyền nay là Phủ Chủ tịch; Nhà hát Lớn vẫn là nhà hát.',
      ],
      [
        'Sai — <code>Bưu điện</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)</code> vì 1 Tràng Tiền — Louis Finot cũ, nay là Bảo tàng Lịch sử Quốc gia.',
        'Sai — <code>Nhà hát Lớn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)</code> vì 1 Tràng Tiền — Louis Finot cũ, nay là Bảo tàng Lịch sử Quốc gia.',
        'Sai — <code>Phủ Toàn quyền</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)</code> vì 1 Tràng Tiền — Louis Finot cũ, nay là Bảo tàng Lịch sử Quốc gia.',
        'Đúng — <code>Bảo tàng Louis Finot cũ (Trường Viễn Đông Bác cổ)</code> là phương án chính xác. 1 Tràng Tiền — Louis Finot cũ, nay là Bảo tàng Lịch sử Quốc gia.',
      ]
    ),
  ]),

  M(16, 'Cách mạng Tháng Tám 1945 ở Hà Nội', [
    Q('Tổng khởi nghĩa giành chính quyền ở Hà Nội thắng lợi ngày?', ['2/9/1945', '30/4/1975', '19/8/1945', '10/10/1954'], 2,
      '19/8/1945 — Hà Nội giành chính quyền.',
      [
        '<b>19/8/1945 — Tổng khởi nghĩa Hà Nội</b>:',
        '<ul><li>Hàng vạn quần chúng dự mít tinh tại Nhà hát Lớn.</li><li>Tuần hành chiếm <code>Phủ Khâm sai, Bắc Bộ phủ, Toà Thị chính, Sở Cảnh sát</code>.</li><li>Cờ đỏ sao vàng tung bay trên Kỳ đài.</li></ul>',
        'Phân biệt: 2/9/1945 Quốc khánh; 10/10/1954 Giải phóng Thủ đô; 30/4/1975 Giải phóng miền Nam.',
      ],
      [
        'Sai — <code>2/9/1945</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>19/8/1945</code> vì 19/8/1945 — Hà Nội giành chính quyền.',
        'Sai — <code>30/4/1975</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>19/8/1945</code> vì 19/8/1945 — Hà Nội giành chính quyền.',
        'Đúng — <code>19/8/1945</code> là phương án chính xác. 19/8/1945 — Hà Nội giành chính quyền.',
        'Sai — <code>10/10/1954</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>19/8/1945</code> vì 19/8/1945 — Hà Nội giành chính quyền.',
      ]
    ),
    Q('Quảng trường Ba Đình là nơi?', ['Quốc khánh 2/9/1945', 'Vua Lê Lợi lên ngôi', 'Lý Thái Tổ dời đô', 'Mỹ ném bom'], 0,
      'Bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
      [
        '<b>Quảng trường Ba Đình — 2/9/1945</b>:',
        '<ul><li>Chủ tịch <code>Hồ Chí Minh</code> đọc <i>Tuyên ngôn Độc lập</i>.</li><li>Khai sinh nước <b>Việt Nam Dân chủ Cộng hoà</b>.</li><li>Nhà nước công nông đầu tiên ở Đông Nam Á.</li></ul>',
        'Nay là cụm di tích Ba Đình: Lăng Bác, Phủ Chủ tịch, Cột Cờ.',
      ],
      [
        'Đúng — <code>Quốc khánh 2/9/1945</code> là phương án chính xác. Bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
        'Sai — <code>Vua Lê Lợi lên ngôi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quốc khánh 2/9/1945</code> vì bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
        'Sai — <code>Lý Thái Tổ dời đô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quốc khánh 2/9/1945</code> vì bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
        'Sai — <code>Mỹ ném bom</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quốc khánh 2/9/1945</code> vì bác Hồ đọc Tuyên ngôn Độc lập ngày 2/9/1945.',
      ]
    ),
    Q('Người chỉ huy khởi nghĩa Hà Nội 19/8/1945 thuộc tổ chức?', ['Mặt trận Việt Minh', 'Pháp Bộ', 'Đại Việt', 'Quốc dân Đảng'], 0,
      'Mặt trận Việt Minh lãnh đạo Tổng khởi nghĩa.',
      [
        '<b>Mặt trận Việt Minh</b>:',
        '<ul><li>Viết tắt: <code>Việt Nam Độc lập Đồng minh Hội</code>.</li><li>Do Đảng Cộng sản Đông Dương sáng lập <i>tháng 5/1941</i>.</li><li>Lãnh đạo Tổng khởi nghĩa Tháng Tám 1945 trên cả nước.</li></ul>',
        'Đại Việt và Quốc dân Đảng là các đảng khác; Pháp Bộ không có trong lịch sử VN.',
      ],
      [
        'Đúng — <code>Mặt trận Việt Minh</code> là phương án chính xác. Mặt trận Việt Minh lãnh đạo Tổng khởi nghĩa.',
        'Sai — <code>Pháp Bộ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mặt trận Việt Minh</code> vì mặt trận Việt Minh lãnh đạo Tổng khởi nghĩa.',
        'Sai — <code>Đại Việt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mặt trận Việt Minh</code> vì mặt trận Việt Minh lãnh đạo Tổng khởi nghĩa.',
        'Sai — <code>Quốc dân Đảng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mặt trận Việt Minh</code> vì mặt trận Việt Minh lãnh đạo Tổng khởi nghĩa.',
      ]
    ),
    Q('Bắc Bộ phủ (nay là Nhà khách Chính phủ) trước 1945 là?', ['Phủ Thủ tướng', 'Nhà tù', 'Bưu điện', 'Phủ Thống sứ Bắc Kỳ'], 3,
      'Phủ Thống sứ Bắc Kỳ thời Pháp.',
      [
        '<b>Bắc Bộ phủ</b>:',
        '<ul><li>Thời Pháp: <code>Phủ Thống sứ Bắc Kỳ</code> — cơ quan đầu não của Pháp ở Bắc Kỳ.</li><li>Sau 19/8/1945: trụ sở chính quyền cách mạng.</li><li>Nay: Nhà khách Chính phủ (12 Ngô Quyền).</li></ul>',
        'Phủ Thống sứ là chức quan thời Pháp cai trị Bắc Kỳ.',
      ],
      [
        'Sai — <code>Phủ Thủ tướng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phủ Thống sứ Bắc Kỳ</code> vì phủ Thống sứ Bắc Kỳ thời Pháp.',
        'Sai — <code>Nhà tù</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phủ Thống sứ Bắc Kỳ</code> vì phủ Thống sứ Bắc Kỳ thời Pháp.',
        'Sai — <code>Bưu điện</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phủ Thống sứ Bắc Kỳ</code> vì phủ Thống sứ Bắc Kỳ thời Pháp.',
        'Đúng — <code>Phủ Thống sứ Bắc Kỳ</code> là phương án chính xác. Phủ Thống sứ Bắc Kỳ thời Pháp.',
      ]
    ),
    Q('Lá cờ đỏ sao vàng tung bay trên kì đài Hà Nội 19/8/1945 đánh dấu?', ['Pháp đầu hàng', 'Nhật rút quân', 'Chính quyền nhân dân ra đời ở Thủ đô', 'Khởi đầu chiến tranh'], 2,
      'Chính quyền nhân dân ra đời tại Thủ đô.',
      [
        '<b>Cờ đỏ sao vàng trên Kỳ đài (19/8/1945)</b>:',
        '<ul><li>Đánh dấu <i>chính quyền nhân dân ra đời</i> ở Thủ đô.</li><li>Lần đầu tiên cờ đỏ sao vàng tung bay công khai trên Cột Cờ Hà Nội.</li></ul>',
        'Pháp đã thua Nhật từ 9/3/1945; Nhật đầu hàng Đồng minh 15/8/1945 — tạo "<b>thời cơ ngàn năm có một</b>".',
      ],
      [
        'Sai — <code>Pháp đầu hàng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chính quyền nhân dân ra đời ở Thủ đô</code> vì chính quyền nhân dân ra đời tại Thủ đô.',
        'Sai — <code>Nhật rút quân</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chính quyền nhân dân ra đời ở Thủ đô</code> vì chính quyền nhân dân ra đời tại Thủ đô.',
        'Đúng — <code>Chính quyền nhân dân ra đời ở Thủ đô</code> là phương án chính xác. Chính quyền nhân dân ra đời tại Thủ đô.',
        'Sai — <code>Khởi đầu chiến tranh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chính quyền nhân dân ra đời ở Thủ đô</code> vì chính quyền nhân dân ra đời tại Thủ đô.',
      ]
    ),
    Q('Ngày 2/9/1945 cả nước có sự kiện gì?', ['Pháp ký hiệp ước', 'Mỹ ném bom', 'Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình', 'Quân Đồng minh đến'], 2,
      'Lễ Tuyên bố nước VNDCCH ra đời.',
      [
        '<b>2/9/1945 — Quốc khánh</b>:',
        '<ul><li>Tại <code>Quảng trường Ba Đình</code>, Bác Hồ đọc <i>Tuyên ngôn Độc lập</i>.</li><li>Khai sinh <b>Việt Nam Dân chủ Cộng hoà</b>.</li><li>Câu nổi tiếng: "<i>Tôi nói đồng bào nghe rõ không?</i>"</li></ul>',
        'Từ năm 1945, ngày 2/9 trở thành <b>Quốc khánh</b> của Việt Nam.',
      ],
      [
        'Sai — <code>Pháp ký hiệp ước</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình</code> vì lễ Tuyên bố nước VNDCCH ra đời.',
        'Sai — <code>Mỹ ném bom</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình</code> vì lễ Tuyên bố nước VNDCCH ra đời.',
        'Đúng — <code>Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình</code> là phương án chính xác. Lễ Tuyên bố nước VNDCCH ra đời.',
        'Sai — <code>Quân Đồng minh đến</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình</code> vì lễ Tuyên bố nước VNDCCH ra đời.',
      ]
    ),
  ]),

  M(17, 'Hà Nội — Điện Biên Phủ trên không 12/1972', [
    Q('Chiến dịch "Điện Biên Phủ trên không" diễn ra trong?', ['60 ngày 1979', '7 ngày 1968', '30 ngày 1975', '12 ngày đêm 12/1972'], 3,
      '18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.',
      [
        '<b>"Điện Biên Phủ trên không" — 12 ngày đêm</b>:',
        '<ul><li>Từ <code>18/12 đến 29/12/1972</code>.</li><li>Mỹ mở chiến dịch <i>Linebacker II</i>, dùng B-52 ném bom Hà Nội – Hải Phòng.</li><li>Mục đích: "<i>đưa Bắc Việt về thời kỳ đồ đá</i>".</li></ul>',
        'Tầm vóc ngang Điện Biên Phủ 1954 — buộc đối phương ngồi vào bàn đàm phán.',
      ],
      [
        'Sai — <code>60 ngày 1979</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>12 ngày đêm 12/1972</code> vì 18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.',
        'Sai — <code>7 ngày 1968</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>12 ngày đêm 12/1972</code> vì 18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.',
        'Sai — <code>30 ngày 1975</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>12 ngày đêm 12/1972</code> vì 18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.',
        'Đúng — <code>12 ngày đêm 12/1972</code> là phương án chính xác. 18–29/12/1972, Mỹ dùng B-52 ném bom Hà Nội – Hải Phòng.',
      ]
    ),
    Q('Loại máy bay chiến lược của Mỹ bị bắn rơi nhiều ở HN là?', ['F-16 (tiêm kích đa năng)', 'F-4 Phantom (tiêm kích hộ tống)', 'A-7 Corsair II (cường kích)', 'B-52'], 3,
      '34 chiếc B-52 bị bắn rơi trong chiến dịch.',
      [
        '<b>B-52 "pháo đài bay"</b>:',
        '<ul><li>Máy bay ném bom chiến lược của Mỹ, mang khoảng 30 tấn bom.</li><li>Bị bắn rơi <code>34 chiếc</code> trong 12 ngày đêm.</li><li>Chiếm gần <b>17%</b> tổng số B-52 của Mỹ thời đó.</li></ul>',
        'F-4, F-16, A-7 là máy bay <i>tiêm kích/cường kích</i> chiến thuật — khác B-52.',
      ],
      [
        'Sai — <code>F-16 (tiêm kích đa năng)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>B-52</code> vì 34 chiếc B-52 bị bắn rơi trong chiến dịch.',
        'Sai — <code>F-4 Phantom (tiêm kích hộ tống)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>B-52</code> vì 34 chiếc B-52 bị bắn rơi trong chiến dịch.',
        'Sai — <code>A-7 Corsair II (cường kích)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>B-52</code> vì 34 chiếc B-52 bị bắn rơi trong chiến dịch.',
        'Đúng — <code>B-52</code> là phương án chính xác. 34 chiếc B-52 bị bắn rơi trong chiến dịch.',
      ]
    ),
    Q('Vũ khí chính bắn rơi B-52 là?', ['Tàu ngầm', 'Tên lửa SAM-2 và pháo cao xạ', 'Bom hạt nhân', 'Súng trường'], 1,
      'Tên lửa SAM-2 (С-75) và pháo phòng không.',
      [
        '<b>Vũ khí của bộ đội ta bắn B-52:</b>',
        '<ul><li><code>Tên lửa SAM-2 (С-75)</code> — vũ khí chủ lực.</li><li>Pháo cao xạ và súng máy phòng không.</li><li><code>MiG-21</code> đánh chặn đêm.</li></ul>',
        'Bộ đội ta đã <i>vạch nhiễu tìm thù</i> — sáng tạo cách đánh B-52.',
      ],
      [
        'Sai — <code>Tàu ngầm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tên lửa SAM-2 và pháo cao xạ</code> vì tên lửa SAM-2 (С-75) và pháo phòng không.',
        'Đúng — <code>Tên lửa SAM-2 và pháo cao xạ</code> là phương án chính xác. Tên lửa SAM-2 (С-75) và pháo phòng không.',
        'Sai — <code>Bom hạt nhân</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tên lửa SAM-2 và pháo cao xạ</code> vì tên lửa SAM-2 (С-75) và pháo phòng không.',
        'Sai — <code>Súng trường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tên lửa SAM-2 và pháo cao xạ</code> vì tên lửa SAM-2 (С-75) và pháo phòng không.',
      ]
    ),
    Q('Phố Khâm Thiên (Hà Nội) ghi dấu thảm hoạ gì?', ['Lụt lớn', 'Hoả hoạn', 'Động đất', 'B-52 ném bom khu dân cư 26/12/1972'], 3,
      'Ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.',
      [
        '<b>Thảm hoạ Khâm Thiên (26/12/1972)</b>:',
        '<ul><li>Đêm 26/12, B-52 trải thảm khu phố <code>Khâm Thiên</code>.</li><li>Làm <i>287 người chết</i>, gần 2 000 ngôi nhà bị phá huỷ.</li><li>Là tội ác chiến tranh đối với dân thường.</li></ul>',
        'Đây là một trong những tội ác chiến tranh lớn nhất ở Hà Nội thế kỉ 20.',
      ],
      [
        'Sai — <code>Lụt lớn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>B-52 ném bom khu dân cư 26/12/1972</code> vì ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.',
        'Sai — <code>Hoả hoạn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>B-52 ném bom khu dân cư 26/12/1972</code> vì ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.',
        'Sai — <code>Động đất</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>B-52 ném bom khu dân cư 26/12/1972</code> vì ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.',
        'Đúng — <code>B-52 ném bom khu dân cư 26/12/1972</code> là phương án chính xác. Ngày 26/12/1972 khu phố Khâm Thiên bị B-52 ném bom làm chết nhiều dân thường.',
      ]
    ),
    Q('Đài tưởng niệm "Khâm Thiên" thể hiện hình ảnh?', ['Cánh chim hoà bình', 'Lá cờ đỏ sao vàng tung bay', 'Người mẹ bồng con đã mất', 'Người lính'], 2,
      'Tượng đài bà mẹ ôm con đã mất — biểu tượng đau thương và lên án chiến tranh.',
      [
        '<b>Đài tưởng niệm Khâm Thiên</b>:',
        '<ul><li>Tượng <i>người mẹ ôm con đã mất</i>.</li><li>Biểu tượng <code>đau thương</code> và <code>tố cáo tội ác chiến tranh</code>.</li><li>Nằm tại phố Khâm Thiên, quận Đống Đa.</li></ul>',
        'Là nơi nhắc nhở thế hệ trẻ về giá trị của hoà bình.',
      ],
      [
        'Sai — <code>Cánh chim hoà bình</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Người mẹ bồng con đã mất</code> vì tượng đài bà mẹ ôm con đã mất — biểu tượng đau thương và lên án chiến tranh.',
        'Sai — <code>Lá cờ đỏ sao vàng tung bay</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Người mẹ bồng con đã mất</code> vì tượng đài bà mẹ ôm con đã mất — biểu tượng đau thương và lên án chiến tranh.',
        'Đúng — <code>Người mẹ bồng con đã mất</code> là phương án chính xác. Tượng đài bà mẹ ôm con đã mất — biểu tượng đau thương và lên án chiến tranh.',
        'Sai — <code>Người lính</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Người mẹ bồng con đã mất</code> vì tượng đài bà mẹ ôm con đã mất — biểu tượng đau thương và lên án chiến tranh.',
      ]
    ),
    Q('Kết quả ngoại giao sau chiến thắng 12 ngày đêm là?', ['Hiệp định Genève', 'Hiệp ước Versailles', 'Hiệp định Paris 27/1/1973', 'Hiệp định Bắc Kinh'], 2,
      'Buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.',
      [
        '<b>Hiệp định Paris (27/1/1973)</b>:',
        '<ul><li>Mỹ buộc phải ký sau thất bại "Điện Biên Phủ trên không".</li><li>Cam kết <i>rút quân khỏi miền Nam Việt Nam</i>.</li><li>Mở đường cho Đại thắng mùa Xuân 1975.</li></ul>',
        'Phân biệt: Genève 1954 (chia VN tại vĩ tuyến 17); Versailles 1919 (kết thúc WW1).',
      ],
      [
        'Sai — <code>Hiệp định Genève</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiệp định Paris 27/1/1973</code> vì buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.',
        'Sai — <code>Hiệp ước Versailles</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiệp định Paris 27/1/1973</code> vì buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.',
        'Đúng — <code>Hiệp định Paris 27/1/1973</code> là phương án chính xác. Buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.',
        'Sai — <code>Hiệp định Bắc Kinh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiệp định Paris 27/1/1973</code> vì buộc Mỹ ký Hiệp định Paris ngày 27/1/1973.',
      ]
    ),
  ]),

  M(18, 'Ôn tập HK1 — Hà Nội từ Thăng Long đến Thủ đô', [
    Q('Sông lớn chảy qua Hà Nội?', ['Sông Mê Kông', 'Sông Đà', 'Sông Hương', 'Sông Hồng'], 3,
      'Sông Hồng — dòng sông Mẹ của Hà Nội.',
      [
        '<b>Sông Hồng</b> — dòng sông Mẹ của Hà Nội:',
        '<ul><li>Đoạn qua HN dài khoảng <code>163 km</code>.</li><li>Tên cũ: <i>sông Cái, sông Nhị Hà</i>.</li><li>Bồi đắp đồng bằng phù sa và là tuyến giao thông thuỷ.</li></ul>',
        'Mê Kông – Cửu Long ở Nam Bộ; sông Đà chảy qua Tây Bắc; sông Hương ở Huế.',
      ],
      [
        'Sai — <code>Sông Mê Kông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì sông Hồng — dòng sông Mẹ của Hà Nội.',
        'Sai — <code>Sông Đà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì sông Hồng — dòng sông Mẹ của Hà Nội.',
        'Sai — <code>Sông Hương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì sông Hồng — dòng sông Mẹ của Hà Nội.',
        'Đúng — <code>Sông Hồng</code> là phương án chính xác. Sông Hồng — dòng sông Mẹ của Hà Nội.',
      ]
    ),
    Q('Vua nào dời đô về Thăng Long năm 1010?', ['Trần Nhân Tông', 'Quang Trung', 'Lý Công Uẩn (Lý Thái Tổ)', 'Lê Lợi'], 2,
      'Lý Công Uẩn (Lý Thái Tổ).',
      [
        '<b>Lý Thái Tổ (Lý Công Uẩn) — 1010</b>:',
        '<ul><li>Dời đô từ <code>Hoa Lư</code> về <code>Đại La</code>.</li><li>Đổi tên thành <b>Thăng Long</b>.</li><li>Ban hành <i>Chiếu dời đô</i>.</li></ul>',
        'Đặt nền móng nghìn năm Thăng Long – Hà Nội.',
      ],
      [
        'Sai — <code>Trần Nhân Tông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Công Uẩn (Lý Thái Tổ)</code> vì lý Công Uẩn (Lý Thái Tổ).',
        'Sai — <code>Quang Trung</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Công Uẩn (Lý Thái Tổ)</code> vì lý Công Uẩn (Lý Thái Tổ).',
        'Đúng — <code>Lý Công Uẩn (Lý Thái Tổ)</code> là phương án chính xác. Lý Công Uẩn (Lý Thái Tổ).',
        'Sai — <code>Lê Lợi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lý Công Uẩn (Lý Thái Tổ)</code> vì lý Công Uẩn (Lý Thái Tổ).',
      ]
    ),
    Q('Trận đánh nổi tiếng Tết Kỷ Dậu 1789 ở HN?', ['Chi Lăng', 'Tốt Động', 'Ngọc Hồi – Đống Đa', 'Bạch Đằng'], 2,
      'Quang Trung đại phá quân Thanh tại Ngọc Hồi – Đống Đa.',
      [
        '<b>Ngọc Hồi – Đống Đa 1789</b>:',
        '<ul><li>Mùng 5 Tết Kỷ Dậu (<code>30/1/1789</code>).</li><li>Vua <b>Quang Trung</b> đại phá 29 vạn quân Thanh.</li></ul>',
        'Chi Lăng – Tốt Động (Lê Lợi chống Minh, 1427); Bạch Đằng (Trần Hưng Đạo chống Nguyên, 1288).',
      ],
      [
        'Sai — <code>Chi Lăng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ngọc Hồi – Đống Đa</code> vì quang Trung đại phá quân Thanh tại Ngọc Hồi – Đống Đa.',
        'Sai — <code>Tốt Động</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ngọc Hồi – Đống Đa</code> vì quang Trung đại phá quân Thanh tại Ngọc Hồi – Đống Đa.',
        'Đúng — <code>Ngọc Hồi – Đống Đa</code> là phương án chính xác. Quang Trung đại phá quân Thanh tại Ngọc Hồi – Đống Đa.',
        'Sai — <code>Bạch Đằng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ngọc Hồi – Đống Đa</code> vì quang Trung đại phá quân Thanh tại Ngọc Hồi – Đống Đa.',
      ]
    ),
    Q('Hai Bà Trưng đóng đô ở?', ['Mê Linh', 'Đại La', 'Hoa Lư', 'Cổ Loa'], 0,
      'Mê Linh — quê hương Hai Bà Trưng.',
      [
        '<b>Mê Linh</b> — kinh đô của Trưng Vương:',
        '<ul><li>Trưng Trắc xưng vương năm <code>40</code>, đóng đô Mê Linh.</li><li>Nay là <i>huyện Mê Linh, Hà Nội</i>.</li></ul>',
        'Cổ Loa (An Dương Vương, TK 3 TCN); Hoa Lư (Đinh – Lê – đầu Lý); Đại La (trước 1010).',
      ],
      [
        'Đúng — <code>Mê Linh</code> là phương án chính xác. Mê Linh — quê hương Hai Bà Trưng.',
        'Sai — <code>Đại La</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mê Linh</code> vì mê Linh — quê hương Hai Bà Trưng.',
        'Sai — <code>Hoa Lư</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mê Linh</code> vì mê Linh — quê hương Hai Bà Trưng.',
        'Sai — <code>Cổ Loa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mê Linh</code> vì mê Linh — quê hương Hai Bà Trưng.',
      ]
    ),
    Q('Hoàng thành Thăng Long được UNESCO công nhận năm?', ['2015', '2010', '1995', '2008'], 1,
      '2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
      [
        '<b>Hoàng thành Thăng Long — Di sản UNESCO 2010</b>:',
        '<ul><li>Công nhận ngày <code>1/8/2010</code>.</li><li>Cùng năm với 82 bia Tiến sĩ Văn Miếu và Hội Gióng.</li></ul>',
        'Hà Nội có <b>3 Di sản UNESCO</b> ghi danh năm 2010 — kỉ niệm 1000 năm Thăng Long.',
      ],
      [
        'Sai — <code>2015</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2010</code> vì 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
        'Đúng — <code>2010</code> là phương án chính xác. 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
        'Sai — <code>1995</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2010</code> vì 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
        'Sai — <code>2008</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2010</code> vì 2010 — đúng dịp Đại lễ 1000 năm Thăng Long.',
      ]
    ),
    Q('Ngày Giải phóng Thủ đô?', ['2/9/1945', '30/4/1975', '10/10/1954', '19/8/1945'], 2,
      '10/10/1954 — Giải phóng Thủ đô.',
      [
        '<b>10/10/1954 — Ngày Giải phóng Thủ đô</b>:',
        '<ul><li>Quân ta tiến vào Hà Nội từ <code>5 cửa ô</code>.</li><li>Cờ đỏ sao vàng tung bay trên Cột Cờ.</li></ul>',
        'Phân biệt: 2/9/1945 Quốc khánh; 19/8/1945 Cách mạng Tháng Tám; 30/4/1975 Giải phóng miền Nam.',
      ],
      [
        'Sai — <code>2/9/1945</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>10/10/1954</code> vì 10/10/1954 — Giải phóng Thủ đô.',
        'Sai — <code>30/4/1975</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>10/10/1954</code> vì 10/10/1954 — Giải phóng Thủ đô.',
        'Đúng — <code>10/10/1954</code> là phương án chính xác. 10/10/1954 — Giải phóng Thủ đô.',
        'Sai — <code>19/8/1945</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>10/10/1954</code> vì 10/10/1954 — Giải phóng Thủ đô.',
      ]
    ),
    Q('Bác Hồ đọc Tuyên ngôn Độc lập tại?', ['Nhà hát Lớn', 'Quảng trường Ba Đình', 'Hoàng thành', 'Cột Cờ'], 1,
      'Quảng trường Ba Đình — 2/9/1945.',
      [
        '<b>Quảng trường Ba Đình (2/9/1945)</b>:',
        '<ul><li>Nơi Bác Hồ đọc <i>Tuyên ngôn Độc lập</i>.</li><li>Khai sinh nước <code>Việt Nam Dân chủ Cộng hoà</code>.</li></ul>',
        'Nay là cụm di tích Ba Đình: Lăng Bác, Phủ Chủ tịch, Cột Cờ, Bảo tàng Hồ Chí Minh.',
      ],
      [
        'Sai — <code>Nhà hát Lớn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng trường Ba Đình</code> vì quảng trường Ba Đình — 2/9/1945.',
        'Đúng — <code>Quảng trường Ba Đình</code> là phương án chính xác. Quảng trường Ba Đình — 2/9/1945.',
        'Sai — <code>Hoàng thành</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng trường Ba Đình</code> vì quảng trường Ba Đình — 2/9/1945.',
        'Sai — <code>Cột Cờ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng trường Ba Đình</code> vì quảng trường Ba Đình — 2/9/1945.',
      ]
    ),
  ]),

  // ──────────────── HK2 — VĂN HOÁ · LÀNG NGHỀ · ĐÔ THỊ HIỆN ĐẠI ────────────────
  M(19, 'Ẩm thực Hà Nội — Phở, bún chả, cốm', [
    Q('Phở Hà Nội nổi tiếng với loại nước dùng?', ['Nước lèo cá', 'Nước hầm xương bò trong, thanh', 'Nước cốt dừa', 'Nước tương'], 1,
      'Đặc trưng: nước trong, ngọt thanh từ xương bò.',
      [
        '<b>Phở Hà Nội</b> — xuất hiện đầu thế kỉ XX:',
        '<ul><li>Nước dùng hầm <code>xương bò</code> trong veo.</li><li>Vị <i>quế – hồi</i> nhẹ, ngọt thanh từ xương.</li><li>Bánh phở mỏng, mềm; ăn kèm hành lá, ớt, chanh.</li></ul>',
        'Phân biệt với phở miền Nam (ngọt hơn, nhiều rau sống); nước cốt dừa thuộc món miền Nam.',
      ],
      [
        'Sai — <code>Nước lèo cá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nước hầm xương bò trong, thanh</code> vì đặc trưng: nước trong, ngọt thanh từ xương bò.',
        'Đúng — <code>Nước hầm xương bò trong, thanh</code> là phương án chính xác. Đặc trưng: nước trong, ngọt thanh từ xương bò.',
        'Sai — <code>Nước cốt dừa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nước hầm xương bò trong, thanh</code> vì đặc trưng: nước trong, ngọt thanh từ xương bò.',
        'Sai — <code>Nước tương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nước hầm xương bò trong, thanh</code> vì đặc trưng: nước trong, ngọt thanh từ xương bò.',
      ]
    ),
    Q('Bún chả Hà Nội ăn cùng?', ['Tương đen', 'Phô mai', 'Mắm nêm', 'Nước mắm chua ngọt + thịt nướng + rau sống'], 3,
      'Thịt nướng than hoa, nước chấm pha chua ngọt + bún + rau sống.',
      [
        '<b>Bún chả</b> — đặc sản Hà Nội:',
        '<ul><li><i>Thịt nướng than hoa</i>: chả miếng và chả viên.</li><li>Nước chấm pha <code>chua ngọt</code> với <i>đu đủ – cà rốt</i>.</li><li>Ăn kèm <b>bún rối</b>, rau sống.</li></ul>',
        'Tổng thống Mỹ Obama từng thưởng thức bún chả Hương Liên (phố Lê Văn Hưu) năm <code>2016</code>.',
      ],
      [
        'Sai — <code>Tương đen</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nước mắm chua ngọt + thịt nướng + rau sống</code> vì thịt nướng than hoa, nước chấm pha chua ngọt + bún + rau sống.',
        'Sai — <code>Phô mai</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nước mắm chua ngọt + thịt nướng + rau sống</code> vì thịt nướng than hoa, nước chấm pha chua ngọt + bún + rau sống.',
        'Sai — <code>Mắm nêm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nước mắm chua ngọt + thịt nướng + rau sống</code> vì thịt nướng than hoa, nước chấm pha chua ngọt + bún + rau sống.',
        'Đúng — <code>Nước mắm chua ngọt + thịt nướng + rau sống</code> là phương án chính xác. Thịt nướng than hoa, nước chấm pha chua ngọt + bún + rau sống.',
      ]
    ),
    Q('Cốm Vòng là đặc sản của làng?', ['Vạn Phúc', 'Làng Vòng (Cầu Giấy)', 'Bát Tràng', 'Đông Hồ'], 1,
      'Làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.',
      [
        '<b>Cốm Vòng</b>:',
        '<ul><li>Đặc sản <code>làng Vòng</code> nay thuộc <i>quận Cầu Giấy</i>.</li><li>Làm từ <b>lúa nếp non</b> — rang, giã, sàng sảy.</li><li>Gói trong <i>lá sen, lá ráy</i> giữ thơm.</li></ul>',
        'Vạn Phúc nổi tiếng lụa (Hà Đông); Bát Tràng — gốm (Gia Lâm); Đông Hồ — tranh (Bắc Ninh).',
      ],
      [
        'Sai — <code>Vạn Phúc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Làng Vòng (Cầu Giấy)</code> vì làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.',
        'Đúng — <code>Làng Vòng (Cầu Giấy)</code> là phương án chính xác. Làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.',
        'Sai — <code>Bát Tràng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Làng Vòng (Cầu Giấy)</code> vì làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.',
        'Sai — <code>Đông Hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Làng Vòng (Cầu Giấy)</code> vì làng Vòng nay thuộc Cầu Giấy — nổi tiếng cốm xanh.',
      ]
    ),
    Q('Cốm thường được làm vào mùa?', ['Đông (lúa nếp cuối vụ)', 'Thu', 'Hè (lúa chiêm chín)', 'Xuân (lúa đông xuân)'], 1,
      'Mùa thu — lúa nếp non đạt độ ngon nhất.',
      [
        '<b>Cốm là biểu tượng mùa thu Hà Nội</b>:',
        '<ul><li>Làm vào tháng <code>7 – 9 âm lịch</code> (mùa thu).</li><li>Từ <i>lúa nếp non</i> chỉ có mùa thu.</li><li>Màu xanh – mùi thơm gợi nhớ mùa thu HN.</li></ul>',
        'Là quà thanh tao, thường gói trong lá sen — thể hiện sự trân trọng người nhận.',
      ],
      [
        'Sai — <code>Đông (lúa nếp cuối vụ)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thu</code> vì mùa thu — lúa nếp non đạt độ ngon nhất.',
        'Đúng — <code>Thu</code> là phương án chính xác. Mùa thu — lúa nếp non đạt độ ngon nhất.',
        'Sai — <code>Hè (lúa chiêm chín)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thu</code> vì mùa thu — lúa nếp non đạt độ ngon nhất.',
        'Sai — <code>Xuân (lúa đông xuân)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thu</code> vì mùa thu — lúa nếp non đạt độ ngon nhất.',
      ]
    ),
    Q('Chả cá Lã Vọng là món gồm?', ['Cá nướng', 'Cá lăng tẩm nghệ + thì là + bún + mắm tôm', 'Cá hấp', 'Cá kho tộ'], 1,
      'Đặc sản phố Chả Cá, tồn tại hơn 130 năm.',
      [
        '<b>Chả cá Lã Vọng</b>:',
        '<ul><li><i>Cá lăng</i> tẩm <code>nghệ, riềng, mắm tôm</code>.</li><li>Nướng than hoa.</li><li>Ăn cùng <i>bún, thì là, hành lá, lạc rang, mắm tôm pha</i>.</li></ul>',
        'Quán Lã Vọng (phố Chả Cá, Hoàn Kiếm) — tồn tại hơn <b>130 năm</b>, là điểm "phải thử khi đến Hà Nội".',
      ],
      [
        'Sai — <code>Cá nướng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cá lăng tẩm nghệ + thì là + bún + mắm tôm</code> vì đặc sản phố Chả Cá, tồn tại hơn 130 năm.',
        'Đúng — <code>Cá lăng tẩm nghệ + thì là + bún + mắm tôm</code> là phương án chính xác. Đặc sản phố Chả Cá, tồn tại hơn 130 năm.',
        'Sai — <code>Cá hấp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cá lăng tẩm nghệ + thì là + bún + mắm tôm</code> vì đặc sản phố Chả Cá, tồn tại hơn 130 năm.',
        'Sai — <code>Cá kho tộ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cá lăng tẩm nghệ + thì là + bún + mắm tôm</code> vì đặc sản phố Chả Cá, tồn tại hơn 130 năm.',
      ]
    ),
    Q('Bánh cốm Hà Nội thường dùng trong dịp?', ['Giỗ tổ', 'Quốc khánh', 'Tết Trung Thu', 'Cưới hỏi'], 3,
      'Lễ cưới truyền thống — sính lễ ăn hỏi.',
      [
        '<b>Bánh cốm</b> — trong sính lễ cưới hỏi truyền thống:',
        '<ul><li>Làm từ <code>cốm</code> + đậu xanh + dừa.</li><li>Gói lá chuối, hộp giấy đỏ.</li><li>Dùng trong <i>sính lễ ăn hỏi</i> ở miền Bắc.</li></ul>',
        'Phố Hàng Than nổi tiếng bánh cốm — gần khu phố cổ.',
      ],
      [
        'Sai — <code>Giỗ tổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cưới hỏi</code> vì lễ cưới truyền thống — sính lễ ăn hỏi.',
        'Sai — <code>Quốc khánh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cưới hỏi</code> vì lễ cưới truyền thống — sính lễ ăn hỏi.',
        'Sai — <code>Tết Trung Thu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cưới hỏi</code> vì lễ cưới truyền thống — sính lễ ăn hỏi.',
        'Đúng — <code>Cưới hỏi</code> là phương án chính xác. Lễ cưới truyền thống — sính lễ ăn hỏi.',
      ]
    ),
  ]),

  M(20, 'Làng gốm Bát Tràng', [
    Q('Làng gốm Bát Tràng thuộc huyện nào?', ['Đông Anh', 'Long Biên', 'Thanh Trì', 'Gia Lâm'], 3,
      'Bát Tràng — xã thuộc huyện Gia Lâm.',
      [
        '<b>Làng gốm Bát Tràng</b>:',
        '<ul><li>Thuộc xã Bát Tràng, huyện <code>Gia Lâm</code>, Hà Nội.</li><li>Cách trung tâm khoảng <code>13 km</code> về phía đông nam.</li><li>Nằm ven sông Hồng.</li></ul>',
        'Đông Anh có Cổ Loa; Thanh Trì có quê Chu Văn An; Long Biên có cầu Long Biên.',
      ],
      [
        'Sai — <code>Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Gia Lâm</code> vì bát Tràng — xã thuộc huyện Gia Lâm.',
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Gia Lâm</code> vì bát Tràng — xã thuộc huyện Gia Lâm.',
        'Sai — <code>Thanh Trì</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Gia Lâm</code> vì bát Tràng — xã thuộc huyện Gia Lâm.',
        'Đúng — <code>Gia Lâm</code> là phương án chính xác. Bát Tràng — xã thuộc huyện Gia Lâm.',
      ]
    ),
    Q('Nghề gốm Bát Tràng có lịch sử khoảng?', ['100 năm', '500 năm', 'Hơn 700 năm', '1 000 năm'], 2,
      'Khoảng 700 năm, từ thời Trần – Hồ.',
      [
        '<b>700 năm lịch sử</b> nghề gốm Bát Tràng:',
        '<ul><li>Bắt đầu từ thời <code>Trần – Hồ</code> (TK 14).</li><li>Cư dân từ làng <i>Bồ Bát (Ninh Bình)</i> di cư đến mang nghề.</li></ul>',
        'Câu ca xưa: "<i>Ước gì anh lấy được nàng / Để anh mua gạch Bát Tràng về xây.</i>"',
      ],
      [
        'Sai — <code>100 năm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hơn 700 năm</code> vì khoảng 700 năm, từ thời Trần – Hồ.',
        'Sai — <code>500 năm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hơn 700 năm</code> vì khoảng 700 năm, từ thời Trần – Hồ.',
        'Đúng — <code>Hơn 700 năm</code> là phương án chính xác. Khoảng 700 năm, từ thời Trần – Hồ.',
        'Sai — <code>1 000 năm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hơn 700 năm</code> vì khoảng 700 năm, từ thời Trần – Hồ.',
      ]
    ),
    Q('Sản phẩm tiêu biểu của Bát Tràng?', ['Nón lá', 'Bát đĩa, lọ hoa, đồ thờ gốm', 'Tranh dân gian', 'Lụa tơ tằm Hà Đông'], 1,
      'Đồ gốm gia dụng và mỹ thuật.',
      [
        '<b>Sản phẩm Bát Tràng</b>:',
        '<ul><li><code>Bát, đĩa, lọ hoa</code> — đồ gia dụng.</li><li><code>Đồ thờ</code>: lư hương, bát hương, độc bình.</li><li>Đồ mỹ thuật: tượng, chum, ấm trà.</li></ul>',
        'Xuất khẩu sang nhiều nước trên thế giới.',
      ],
      [
        'Sai — <code>Nón lá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bát đĩa, lọ hoa, đồ thờ gốm</code> vì đồ gốm gia dụng và mỹ thuật.',
        'Đúng — <code>Bát đĩa, lọ hoa, đồ thờ gốm</code> là phương án chính xác. Đồ gốm gia dụng và mỹ thuật.',
        'Sai — <code>Tranh dân gian</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bát đĩa, lọ hoa, đồ thờ gốm</code> vì đồ gốm gia dụng và mỹ thuật.',
        'Sai — <code>Lụa tơ tằm Hà Đông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bát đĩa, lọ hoa, đồ thờ gốm</code> vì đồ gốm gia dụng và mỹ thuật.',
      ]
    ),
    Q('Men gốm Bát Tràng nổi tiếng nhất là?', ['Men trắng đục', 'Men rạn, men ngọc', 'Men nhựa', 'Men kim loại'], 1,
      'Men rạn (cobalt), men ngọc, men lam là đặc trưng.',
      [
        '<b>Các loại men gốm Bát Tràng:</b>',
        '<ul><li><code>Men rạn</code> — bề mặt nứt như mạng nhện, đặc trưng Bát Tràng.</li><li><code>Men ngọc</code> — xanh ngọc trong, thời Lý – Trần.</li><li><code>Men lam</code> — vẽ chàm xanh trên nền trắng.</li><li><code>Men nâu</code> — mộc mạc.</li></ul>',
        'Men rạn được nghệ nhân Bát Tràng làm chủ và truyền nhiều đời.',
      ],
      [
        'Sai — <code>Men trắng đục</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Men rạn, men ngọc</code> vì men rạn (cobalt), men ngọc, men lam là đặc trưng.',
        'Đúng — <code>Men rạn, men ngọc</code> là phương án chính xác. Men rạn (cobalt), men ngọc, men lam là đặc trưng.',
        'Sai — <code>Men nhựa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Men rạn, men ngọc</code> vì men rạn (cobalt), men ngọc, men lam là đặc trưng.',
        'Sai — <code>Men kim loại</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Men rạn, men ngọc</code> vì men rạn (cobalt), men ngọc, men lam là đặc trưng.',
      ]
    ),
    Q('Đất sét làm gốm Bát Tràng xưa lấy từ?', ['Phú Quốc', 'Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao', 'Vùng đất sét Sapa, Lào Cai', 'Đà Lạt'], 1,
      'Tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.',
      [
        '<b>Nguồn đất sét</b>:',
        '<ul><li>Xưa: <code>Bồ Bát (Ninh Bình)</code> — quê tổ.</li><li>Sau: đất Hồ Lao, Cao Lanh (Lào Cai).</li></ul>',
        'Đất sét tốt là cốt lõi của nghề gốm — phải <i>phơi, lọc, nhào đến độ dẻo</i> trước khi tạo hình.',
      ],
      [
        'Sai — <code>Phú Quốc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao</code> vì tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.',
        'Đúng — <code>Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao</code> là phương án chính xác. Tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.',
        'Sai — <code>Vùng đất sét Sapa, Lào Cai</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao</code> vì tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.',
        'Sai — <code>Đà Lạt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vùng đất Bồ Bát (Ninh Bình) – sau dùng đất Hồ Lao</code> vì tổ tiên di cư từ Bồ Bát (Ninh Bình) mang nghề ra.',
      ]
    ),
    Q('Du khách đến Bát Tràng có thể trải nghiệm?', ['Câu cá', 'Đua xe', 'Tự nặn và vẽ gốm', 'Trượt tuyết'], 2,
      'Workshop nặn – vẽ – tô gốm cho du khách.',
      [
        '<b>Trải nghiệm Bát Tràng</b>:',
        '<ul><li>Chọn cục đất sét, ngồi vào <code>bàn xoay</code> nặn cốc/bát.</li><li>Chờ phơi khô, tự <i>tô màu, vẽ hoạ tiết</i>.</li><li>Mang về làm kỉ niệm.</li></ul>',
        'Đi xe buýt 47 từ Long Biên qua đê sông Hồng đến chợ Gốm Bát Tràng.',
      ],
      [
        'Sai — <code>Câu cá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tự nặn và vẽ gốm</code> vì workshop nặn – vẽ – tô gốm cho du khách.',
        'Sai — <code>Đua xe</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tự nặn và vẽ gốm</code> vì workshop nặn – vẽ – tô gốm cho du khách.',
        'Đúng — <code>Tự nặn và vẽ gốm</code> là phương án chính xác. Workshop nặn – vẽ – tô gốm cho du khách.',
        'Sai — <code>Trượt tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tự nặn và vẽ gốm</code> vì workshop nặn – vẽ – tô gốm cho du khách.',
      ]
    ),
  ]),

  M(21, 'Làng lụa Vạn Phúc', [
    Q('Làng lụa Vạn Phúc thuộc quận nào?', ['Long Biên', 'Hoàn Kiếm', 'Thanh Xuân', 'Hà Đông'], 3,
      'Vạn Phúc nay thuộc quận Hà Đông.',
      [
        '<b>Làng lụa Vạn Phúc</b>:',
        '<ul><li>Nay thuộc <code>quận Hà Đông</code>.</li><li>Cách trung tâm khoảng <code>10 km</code>.</li><li>Tương truyền nghề dệt do bà tổ <i>A Lã Đê Nương</i> dạy từ TK IX.</li></ul>',
        'Nên có tên gọi "<b>lụa Hà Đông</b>" — nổi tiếng trong nhạc và văn chương.',
      ],
      [
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hà Đông</code> vì vạn Phúc nay thuộc quận Hà Đông.',
        'Sai — <code>Hoàn Kiếm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hà Đông</code> vì vạn Phúc nay thuộc quận Hà Đông.',
        'Sai — <code>Thanh Xuân</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hà Đông</code> vì vạn Phúc nay thuộc quận Hà Đông.',
        'Đúng — <code>Hà Đông</code> là phương án chính xác. Vạn Phúc nay thuộc quận Hà Đông.',
      ]
    ),
    Q('Sản phẩm chủ lực của Vạn Phúc?', ['Lụa tơ tằm', 'Đồ gốm', 'Bánh cốm', 'Mây tre đan'], 0,
      'Lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.',
      [
        '<b>Lụa tơ tằm Vạn Phúc</b>:',
        '<ul><li>Hoàn toàn từ <code>tơ tằm tự nhiên</code>.</li><li>Hoa văn truyền thống: <i>lưỡng long, lưỡng phượng, song hạc, hoa sen</i>.</li><li>Từng xuất khẩu sang Pháp, đoạt giải hội chợ quốc tế <code>1931, 1932</code>.</li></ul>',
        'Đồ gốm là Bát Tràng; bánh cốm là làng Vòng; mây tre đan là Phú Vinh.',
      ],
      [
        'Đúng — <code>Lụa tơ tằm</code> là phương án chính xác. Lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.',
        'Sai — <code>Đồ gốm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lụa tơ tằm</code> vì lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.',
        'Sai — <code>Bánh cốm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lụa tơ tằm</code> vì lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.',
        'Sai — <code>Mây tre đan</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lụa tơ tằm</code> vì lụa Hà Đông (lụa Vạn Phúc) nổi tiếng từ thời phong kiến.',
      ]
    ),
    Q('Lụa Vạn Phúc nổi tiếng vì?', ['Cứng và thô', 'Đổi màu liên tục', 'Mềm, mịn, bóng, bền màu', 'Có mùi thơm'], 2,
      'Lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.',
      [
        '<b>Đặc trưng lụa Vạn Phúc:</b>',
        '<ul><li><code>Mềm, mịn, mát</code> — dễ chịu khi mặc.</li><li><code>Bền màu, óng ánh</code> đặc biệt.</li><li>Mỏng nhẹ — phù hợp áo dài, khăn quàng.</li></ul>',
        'Vì giá trị này, lụa Vạn Phúc <i>đắt giá hơn lụa pha</i> rất nhiều.',
      ],
      [
        'Sai — <code>Cứng và thô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mềm, mịn, bóng, bền màu</code> vì lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.',
        'Sai — <code>Đổi màu liên tục</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mềm, mịn, bóng, bền màu</code> vì lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.',
        'Đúng — <code>Mềm, mịn, bóng, bền màu</code> là phương án chính xác. Lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.',
        'Sai — <code>Có mùi thơm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mềm, mịn, bóng, bền màu</code> vì lụa Vạn Phúc nhẹ – mịn – óng ánh, từng xuất khẩu sang Pháp.',
      ]
    ),
    Q('Bài hát "Áo lụa Hà Đông" liên tưởng đến?', ['Sự sang trọng và dịu dàng của thiếu nữ Hà Nội', 'Học tập', 'Kinh doanh', 'Quân sự'], 0,
      'Hình ảnh áo lụa thiếu nữ Hà Nội xưa.',
      [
        '<b>"Áo lụa Hà Đông"</b>:',
        '<ul><li>Bài thơ của <code>Nguyên Sa</code>, nhạc của <code>Ngô Thuỵ Miên</code>.</li><li>Gợi hình ảnh <i>thiếu nữ Hà Nội</i> dịu dàng trong áo dài lụa.</li></ul>',
        'Lụa Vạn Phúc trở thành biểu tượng <b>nét đẹp dịu dàng</b> của người con gái Hà Nội xưa.',
      ],
      [
        'Đúng — <code>Sự sang trọng và dịu dàng của thiếu nữ Hà Nội</code> là phương án chính xác. Hình ảnh áo lụa thiếu nữ Hà Nội xưa.',
        'Sai — <code>Học tập</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sự sang trọng và dịu dàng của thiếu nữ Hà Nội</code> vì hình ảnh áo lụa thiếu nữ Hà Nội xưa.',
        'Sai — <code>Kinh doanh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sự sang trọng và dịu dàng của thiếu nữ Hà Nội</code> vì hình ảnh áo lụa thiếu nữ Hà Nội xưa.',
        'Sai — <code>Quân sự</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sự sang trọng và dịu dàng của thiếu nữ Hà Nội</code> vì hình ảnh áo lụa thiếu nữ Hà Nội xưa.',
      ]
    ),
    Q('Tơ tằm dùng dệt lụa được lấy từ?', ['Vỏ cây', 'Sợi bông', 'Kén tằm', 'Lông cừu'], 2,
      'Kén tằm — tằm ăn lá dâu, nhả tơ làm kén.',
      [
        '<b>Quy trình từ kén tằm đến lụa:</b>',
        '<ul><li>Trồng dâu, nuôi <code>tằm</code> — tằm ăn lá dâu nhả tơ làm kén.</li><li><i>Ươm tơ</i>: luộc kén, rút sợi tơ.</li><li><i>Hồ sợi, dệt, nhuộm, hấp định hình</i>.</li></ul>',
        'Sợi bông từ cây bông; lông cừu làm len; vỏ cây làm giấy.',
      ],
      [
        'Sai — <code>Vỏ cây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kén tằm</code> vì kén tằm — tằm ăn lá dâu, nhả tơ làm kén.',
        'Sai — <code>Sợi bông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kén tằm</code> vì kén tằm — tằm ăn lá dâu, nhả tơ làm kén.',
        'Đúng — <code>Kén tằm</code> là phương án chính xác. Kén tằm — tằm ăn lá dâu, nhả tơ làm kén.',
        'Sai — <code>Lông cừu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kén tằm</code> vì kén tằm — tằm ăn lá dâu, nhả tơ làm kén.',
      ]
    ),
    Q('Hoạt động du lịch nổi bật ở Vạn Phúc?', ['Xem hát chèo', 'Tham quan xưởng dệt và mua lụa', 'Leo núi', 'Lặn biển'], 1,
      'Phố lụa Vạn Phúc rực rỡ sắc màu.',
      [
        '<b>Du lịch Vạn Phúc</b>:',
        '<ul><li><code>Phố Lụa</code> dài hơn <i>1 km</i>, rực rỡ sắc màu.</li><li>Tham quan các xưởng dệt với <i>khung cửi truyền thống</i>.</li><li>Mua lụa làm quà.</li></ul>',
        'Là điểm du lịch quen thuộc, gần với phố Lê Văn Lương để di chuyển dễ dàng.',
      ],
      [
        'Sai — <code>Xem hát chèo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tham quan xưởng dệt và mua lụa</code> vì phố lụa Vạn Phúc rực rỡ sắc màu.',
        'Đúng — <code>Tham quan xưởng dệt và mua lụa</code> là phương án chính xác. Phố lụa Vạn Phúc rực rỡ sắc màu.',
        'Sai — <code>Leo núi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tham quan xưởng dệt và mua lụa</code> vì phố lụa Vạn Phúc rực rỡ sắc màu.',
        'Sai — <code>Lặn biển</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tham quan xưởng dệt và mua lụa</code> vì phố lụa Vạn Phúc rực rỡ sắc màu.',
      ]
    ),
  ]),

  M(22, 'Làng nghề khác: Đông Hồ – Tranh & Chuông Phù Đổng', [
    Q('Tranh Đông Hồ thực ra nguồn gốc từ tỉnh nào (giáp HN)?', ['Nam Định', 'Hải Phòng', 'Bắc Ninh', 'Hà Tây cũ'], 2,
      'Làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.',
      [
        '<b>Tranh Đông Hồ</b>:',
        '<ul><li>Làng Đông Hồ thuộc xã <code>Song Hồ, Thuận Thành, Bắc Ninh</code>.</li><li>Cách Hà Nội khoảng <code>35 km</code>.</li><li>Ảnh hưởng sâu sắc văn hoá Hà Nội xưa.</li></ul>',
        'Tuy không thuộc HN, nhưng tranh Đông Hồ là một phần văn hoá vùng Bắc Bộ — phổ biến ở Hà Nội.',
      ],
      [
        'Sai — <code>Nam Định</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bắc Ninh</code> vì làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.',
        'Sai — <code>Hải Phòng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bắc Ninh</code> vì làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.',
        'Đúng — <code>Bắc Ninh</code> là phương án chính xác. Làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.',
        'Sai — <code>Hà Tây cũ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bắc Ninh</code> vì làng Đông Hồ thuộc Thuận Thành, Bắc Ninh.',
      ]
    ),
    Q('Đặc trưng tranh Đông Hồ?', ['Vẽ sơn dầu', 'In gỗ trên giấy điệp với màu tự nhiên', 'In offset', 'Vẽ kĩ thuật số'], 1,
      'Ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.',
      [
        '<b>Kỹ thuật in tranh Đông Hồ:</b>',
        '<ul><li>In từ <code>ván gỗ khắc</code> trên <i>giấy điệp</i>.</li><li>5 màu thiên nhiên: <code>đen (than tre), xanh (lá chàm), đỏ (sỏi son), vàng (hoa hoè), trắng (vỏ điệp)</code>.</li><li>Hoàn toàn thủ công, không hoá chất.</li></ul>',
        'Khác với tranh hiện đại (offset, kĩ thuật số) hay sơn dầu (phương Tây).',
      ],
      [
        'Sai — <code>Vẽ sơn dầu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>In gỗ trên giấy điệp với màu tự nhiên</code> vì ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.',
        'Đúng — <code>In gỗ trên giấy điệp với màu tự nhiên</code> là phương án chính xác. Ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.',
        'Sai — <code>In offset</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>In gỗ trên giấy điệp với màu tự nhiên</code> vì ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.',
        'Sai — <code>Vẽ kĩ thuật số</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>In gỗ trên giấy điệp với màu tự nhiên</code> vì ván gỗ khắc + giấy điệp + 5 màu thiên nhiên.',
      ]
    ),
    Q('Tranh Đông Hồ "Đám cưới chuột" thể hiện?', ['Sinh hoạt nông dân', 'Lễ cưới', 'Phê phán thói tham nhũng / châm biếm xã hội', 'Chuyện cổ tích'], 2,
      'Ý nghĩa châm biếm sâu sắc — chuột cống nạp cho mèo mới được yên.',
      [
        '<b>Tranh "Đám cưới chuột"</b>:',
        '<ul><li>2 hàng: hàng trên <i>mèo nhận lễ vật</i>, hàng dưới <i>chuột rước dâu</i>.</li><li>Ý: <code>chuột (kẻ yếu) phải cống nạp cho mèo (kẻ mạnh)</code> mới được yên.</li></ul>',
        'Châm biếm <b>xã hội phong kiến</b>; nét vẽ ngộ nghĩnh, ý nghĩa sâu cay.',
      ],
      [
        'Sai — <code>Sinh hoạt nông dân</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phê phán thói tham nhũng / châm biếm xã hội</code> vì ý nghĩa châm biếm sâu sắc — chuột cống nạp cho mèo mới được yên.',
        'Sai — <code>Lễ cưới</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phê phán thói tham nhũng / châm biếm xã hội</code> vì ý nghĩa châm biếm sâu sắc — chuột cống nạp cho mèo mới được yên.',
        'Đúng — <code>Phê phán thói tham nhũng / châm biếm xã hội</code> là phương án chính xác. Ý nghĩa châm biếm sâu sắc — chuột cống nạp cho mèo mới được yên.',
        'Sai — <code>Chuyện cổ tích</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phê phán thói tham nhũng / châm biếm xã hội</code> vì ý nghĩa châm biếm sâu sắc — chuột cống nạp cho mèo mới được yên.',
      ]
    ),
    Q('Đền Phù Đổng thờ?', ['An Dương Vương', 'Lý Thái Tổ', 'Hai Bà Trưng', 'Thánh Gióng'], 3,
      'Đền Phù Đổng (Gia Lâm) thờ Thánh Gióng — 1 trong "Tứ bất tử".',
      [
        '<b>Đền Phù Đổng</b>:',
        '<ul><li>Thuộc xã Phù Đổng, huyện <code>Gia Lâm, Hà Nội</code>.</li><li>Thờ <b>Thánh Gióng</b> — 1 trong "<i>Tứ bất tử</i>" của tín ngưỡng Việt.</li><li>Là nơi tổ chức <code>Hội Gióng</code> mùng 9/4 âm lịch.</li></ul>',
        'An Dương Vương thờ ở Cổ Loa; Lý Thái Tổ ở Đền Đô; Hai Bà ở Hạ Lôi/Đồng Nhân.',
      ],
      [
        'Sai — <code>An Dương Vương</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thánh Gióng</code> vì đền Phù Đổng (Gia Lâm) thờ Thánh Gióng — 1 trong "Tứ bất tử".',
        'Sai — <code>Lý Thái Tổ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thánh Gióng</code> vì đền Phù Đổng (Gia Lâm) thờ Thánh Gióng — 1 trong "Tứ bất tử".',
        'Sai — <code>Hai Bà Trưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thánh Gióng</code> vì đền Phù Đổng (Gia Lâm) thờ Thánh Gióng — 1 trong "Tứ bất tử".',
        'Đúng — <code>Thánh Gióng</code> là phương án chính xác. Đền Phù Đổng (Gia Lâm) thờ Thánh Gióng — 1 trong "Tứ bất tử".',
      ]
    ),
    Q('Truyền thuyết Thánh Gióng kể về?', ['Vua Hùng dựng nước', 'Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân', 'An Dương Vương xây thành', 'Lý Bí khởi nghĩa'], 1,
      'Một trong tứ bất tử của VN — biểu tượng yêu nước.',
      [
        '<b>Truyền thuyết Thánh Gióng</b>:',
        '<ul><li>Cậu bé <code>3 tuổi</code> ở Phù Đổng nghe tin giặc Ân.</li><li><i>Vươn vai</i> thành dũng sĩ, cưỡi <code>ngựa sắt</code> đánh giặc.</li><li>Sau khi thắng, <i>bay về trời</i> tại núi Sóc.</li></ul>',
        '"Tứ bất tử" gồm: Tản Viên Sơn Thánh, Thánh Gióng, Chử Đồng Tử, Liễu Hạnh.',
      ],
      [
        'Sai — <code>Vua Hùng dựng nước</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân</code> vì một trong tứ bất tử của VN — biểu tượng yêu nước.',
        'Đúng — <code>Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân</code> là phương án chính xác. Một trong tứ bất tử của VN — biểu tượng yêu nước.',
        'Sai — <code>An Dương Vương xây thành</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân</code> vì một trong tứ bất tử của VN — biểu tượng yêu nước.',
        'Sai — <code>Lý Bí khởi nghĩa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cậu bé 3 tuổi vươn vai thành dũng sĩ đánh giặc Ân</code> vì một trong tứ bất tử của VN — biểu tượng yêu nước.',
      ]
    ),
    Q('Tinh thần Thánh Gióng tượng trưng cho?', ['Khoa học', 'Lòng yêu nước và sức mạnh quật khởi của dân tộc', 'Buôn bán', 'Văn học'], 1,
      'Biểu tượng tinh thần chống ngoại xâm.',
      [
        '<b>Ý nghĩa biểu tượng Thánh Gióng</b>:',
        '<ul><li>Kết tinh <i>ước mơ về sức mạnh phi thường chống ngoại xâm</i>.</li><li>Tinh thần "<b>tuổi nhỏ chí lớn</b>".</li><li>Lòng yêu nước nồng nàn.</li></ul>',
        'Là giá trị tinh thần vĩnh cửu — dù không có thật, vẫn truyền cảm hứng cho thế hệ trẻ.',
      ],
      [
        'Sai — <code>Khoa học</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lòng yêu nước và sức mạnh quật khởi của dân tộc</code> vì biểu tượng tinh thần chống ngoại xâm.',
        'Đúng — <code>Lòng yêu nước và sức mạnh quật khởi của dân tộc</code> là phương án chính xác. Biểu tượng tinh thần chống ngoại xâm.',
        'Sai — <code>Buôn bán</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lòng yêu nước và sức mạnh quật khởi của dân tộc</code> vì biểu tượng tinh thần chống ngoại xâm.',
        'Sai — <code>Văn học</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Lòng yêu nước và sức mạnh quật khởi của dân tộc</code> vì biểu tượng tinh thần chống ngoại xâm.',
      ]
    ),
  ]),

  M(23, 'Múa rối nước và nghệ thuật truyền thống Hà Nội', [
    Q('Múa rối nước là loại hình nghệ thuật?', ['Hiện đại', 'Dân gian độc đáo của Đồng bằng Bắc Bộ – VN', 'Phương Tây', 'Trung Hoa'], 1,
      'Múa rối nước là sáng tạo độc đáo của VN — chỉ Việt Nam có.',
      [
        '<b>Múa rối nước</b> — sáng tạo độc đáo của Việt Nam:',
        '<ul><li>Bắt nguồn từ <code>thế kỉ XI</code> ở các làng quê đồng bằng sông Hồng.</li><li>Sân khấu là <i>mặt nước</i> (ao làng, bể nước).</li><li>Con rối làm bằng <code>gỗ sung</code>, sơn son thếp vàng.</li></ul>',
        'Chỉ có ở Việt Nam — không thuộc nghệ thuật phương Tây hay Trung Hoa.',
      ],
      [
        'Sai — <code>Hiện đại</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dân gian độc đáo của Đồng bằng Bắc Bộ – VN</code> vì múa rối nước là sáng tạo độc đáo của VN — chỉ Việt Nam có.',
        'Đúng — <code>Dân gian độc đáo của Đồng bằng Bắc Bộ – VN</code> là phương án chính xác. Múa rối nước là sáng tạo độc đáo của VN — chỉ Việt Nam có.',
        'Sai — <code>Phương Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dân gian độc đáo của Đồng bằng Bắc Bộ – VN</code> vì múa rối nước là sáng tạo độc đáo của VN — chỉ Việt Nam có.',
        'Sai — <code>Trung Hoa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dân gian độc đáo của Đồng bằng Bắc Bộ – VN</code> vì múa rối nước là sáng tạo độc đáo của VN — chỉ Việt Nam có.',
      ]
    ),
    Q('Nhà hát Múa rối Thăng Long ở Hà Nội nằm gần?', ['Ga Hà Nội', 'Sông Hồng', 'Sân bay', 'Hồ Hoàn Kiếm'], 3,
      'Phố Đinh Tiên Hoàng, gần Hồ Gươm.',
      [
        '<b>Nhà hát Múa rối Thăng Long</b>:',
        '<ul><li>Địa chỉ: <code>57B Đinh Tiên Hoàng</code>, gần <i>Hồ Gươm</i>.</li><li>Biểu diễn liên tục từ năm <code>1969</code>.</li><li>Là điểm đến du khách nước ngoài rất ưa thích.</li></ul>',
        'Gần Hồ Hoàn Kiếm — trung tâm phố cổ, dễ tham quan kết hợp.',
      ],
      [
        'Sai — <code>Ga Hà Nội</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Hoàn Kiếm</code> vì phố Đinh Tiên Hoàng, gần Hồ Gươm.',
        'Sai — <code>Sông Hồng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Hoàn Kiếm</code> vì phố Đinh Tiên Hoàng, gần Hồ Gươm.',
        'Sai — <code>Sân bay</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hồ Hoàn Kiếm</code> vì phố Đinh Tiên Hoàng, gần Hồ Gươm.',
        'Đúng — <code>Hồ Hoàn Kiếm</code> là phương án chính xác. Phố Đinh Tiên Hoàng, gần Hồ Gươm.',
      ]
    ),
    Q('Sân khấu múa rối nước là?', ['Sân khấu vải', 'Mặt nước', 'Băng tuyết', 'Sàn gỗ'], 1,
      'Diễn trên mặt nước — diễn viên giấu sau bức mành.',
      [
        '<b>Sân khấu mặt nước</b>:',
        '<ul><li>Là <code>ao làng</code> hoặc <i>bể nước</i> trong nhà hát.</li><li>Diễn viên đứng sau <b>bức mành</b>, điều khiển con rối bằng <i>sào tre</i>.</li><li>Khán giả chỉ thấy con rối di chuyển trên nước.</li></ul>',
        'Là điểm đặc biệt khác biệt với mọi loại múa rối khác trên thế giới.',
      ],
      [
        'Sai — <code>Sân khấu vải</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mặt nước</code> vì diễn trên mặt nước — diễn viên giấu sau bức mành.',
        'Đúng — <code>Mặt nước</code> là phương án chính xác. Diễn trên mặt nước — diễn viên giấu sau bức mành.',
        'Sai — <code>Băng tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mặt nước</code> vì diễn trên mặt nước — diễn viên giấu sau bức mành.',
        'Sai — <code>Sàn gỗ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mặt nước</code> vì diễn trên mặt nước — diễn viên giấu sau bức mành.',
      ]
    ),
    Q('Nhân vật quen thuộc trong rối nước?', ['Pinocchio', 'Chú Tễu', 'Kachiusa', 'Mickey'], 1,
      'Chú Tễu là nhân vật dẫn chuyện hài hước.',
      [
        '<b>Chú Tễu</b> — nhân vật dẫn chuyện:',
        '<ul><li>Béo tròn, bụng to, áo đỏ, đầu trọc.</li><li>Vai trò: <i>dẫn chuyện hài hước</i>, châm biếm.</li><li>Mở đầu mọi buổi diễn rối nước.</li></ul>',
        'Pinocchio, Mickey là nhân vật phương Tây; Kachiusa là bài hát Nga.',
      ],
      [
        'Sai — <code>Pinocchio</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chú Tễu</code> vì chú Tễu là nhân vật dẫn chuyện hài hước.',
        'Đúng — <code>Chú Tễu</code> là phương án chính xác. Chú Tễu là nhân vật dẫn chuyện hài hước.',
        'Sai — <code>Kachiusa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chú Tễu</code> vì chú Tễu là nhân vật dẫn chuyện hài hước.',
        'Sai — <code>Mickey</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chú Tễu</code> vì chú Tễu là nhân vật dẫn chuyện hài hước.',
      ]
    ),
    Q('Ca trù được UNESCO công nhận là?', ['Di sản phi vật thể cần bảo vệ khẩn cấp', 'Di sản tư liệu', 'Di sản thiên nhiên', 'Kỳ quan'], 0,
      'Năm 2009 — Di sản cần bảo vệ khẩn cấp.',
      [
        '<b>Ca trù — UNESCO 2009</b>:',
        '<ul><li>Thuộc danh sách <code>Di sản phi vật thể cần bảo vệ khẩn cấp</code>.</li><li>Vì <i>số nghệ nhân lão thành còn lại rất ít</i>, dễ thất truyền.</li></ul>',
        'Phân biệt: "<b>Đại diện nhân loại</b>" (Hội Gióng, Hát Văn); "<b>Cần bảo vệ khẩn cấp</b>" (Ca trù) — 2 cấp độ khác nhau.',
      ],
      [
        'Đúng — <code>Di sản phi vật thể cần bảo vệ khẩn cấp</code> là phương án chính xác. Năm 2009 — Di sản cần bảo vệ khẩn cấp.',
        'Sai — <code>Di sản tư liệu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản phi vật thể cần bảo vệ khẩn cấp</code> vì năm 2009 — Di sản cần bảo vệ khẩn cấp.',
        'Sai — <code>Di sản thiên nhiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản phi vật thể cần bảo vệ khẩn cấp</code> vì năm 2009 — Di sản cần bảo vệ khẩn cấp.',
        'Sai — <code>Kỳ quan</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di sản phi vật thể cần bảo vệ khẩn cấp</code> vì năm 2009 — Di sản cần bảo vệ khẩn cấp.',
      ]
    ),
    Q('Chèo, cải lương, ca trù — loại hình nào không xuất phát từ Bắc Bộ?', ['Cải lương', 'Ca trù', 'Quan họ', 'Chèo (sân khấu dân gian Bắc Bộ)'], 0,
      'Cải lương xuất phát từ Nam Bộ.',
      [
        '<b>Phân vùng các loại hình nghệ thuật:</b>',
        '<ul><li><code>Chèo</code> — sân khấu dân gian <i>Bắc Bộ</i>.</li><li><code>Ca trù</code> — hát ả đào, <i>Bắc Bộ</i>.</li><li><code>Quan họ</code> — Bắc Ninh – <i>Bắc Bộ</i>.</li><li><code>Cải lương</code> — <i>Nam Bộ</i> (đầu TK 20).</li></ul>',
        'Cải lương là sự kết hợp âm nhạc tài tử + kịch nói + tuồng — sinh ra ở Nam Bộ.',
      ],
      [
        'Đúng — <code>Cải lương</code> là phương án chính xác. Cải lương xuất phát từ Nam Bộ.',
        'Sai — <code>Ca trù</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cải lương</code> vì cải lương xuất phát từ Nam Bộ.',
        'Sai — <code>Quan họ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cải lương</code> vì cải lương xuất phát từ Nam Bộ.',
        'Sai — <code>Chèo (sân khấu dân gian Bắc Bộ)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cải lương</code> vì cải lương xuất phát từ Nam Bộ.',
      ]
    ),
  ]),

  M(24, 'Lễ Tết và phong tục Hà Nội', [
    Q('Tết Nguyên Đán Hà Nội có món bánh đặc trưng?', ['Bánh chưng', 'Bánh tét', 'Bánh ít', 'Bánh khọt'], 0,
      'Bánh chưng vuông — miền Bắc.',
      [
        '<b>Bánh chưng</b> — Tết miền Bắc:',
        '<ul><li>Hình <code>vuông</code> tượng trưng cho <i>đất</i>.</li><li>Gói lá dong, nhân thịt – đỗ xanh.</li><li>Luộc nhiều giờ trên bếp lửa.</li></ul>',
        'Bánh tét (miền Nam – hình trụ); bánh ít (miền Trung); bánh khọt (Nam Bộ).',
      ],
      [
        'Đúng — <code>Bánh chưng</code> là phương án chính xác. Bánh chưng vuông — miền Bắc.',
        'Sai — <code>Bánh tét</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bánh chưng</code> vì bánh chưng vuông — miền Bắc.',
        'Sai — <code>Bánh ít</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bánh chưng</code> vì bánh chưng vuông — miền Bắc.',
        'Sai — <code>Bánh khọt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bánh chưng</code> vì bánh chưng vuông — miền Bắc.',
      ]
    ),
    Q('Cây quất, hoa đào là biểu tượng Tết của?', ['Miền Nam', 'Tây Nguyên', 'Miền Bắc – Hà Nội', 'Miền Trung'], 2,
      'Hoa đào, quất là đặc trưng Tết Bắc.',
      [
        '<b>Biểu tượng Tết miền Bắc – Hà Nội:</b>',
        '<ul><li><code>Hoa đào</code> — sắc hồng, biểu tượng Tết Bắc.</li><li><code>Cây quất</code> — sai trĩu quả vàng, may mắn.</li></ul>',
        'Miền Nam: hoa mai vàng; miền Trung: hoa mai vàng/đào tuỳ vùng.',
      ],
      [
        'Sai — <code>Miền Nam</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Miền Bắc – Hà Nội</code> vì hoa đào, quất là đặc trưng Tết Bắc.',
        'Sai — <code>Tây Nguyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Miền Bắc – Hà Nội</code> vì hoa đào, quất là đặc trưng Tết Bắc.',
        'Đúng — <code>Miền Bắc – Hà Nội</code> là phương án chính xác. Hoa đào, quất là đặc trưng Tết Bắc.',
        'Sai — <code>Miền Trung</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Miền Bắc – Hà Nội</code> vì hoa đào, quất là đặc trưng Tết Bắc.',
      ]
    ),
    Q('Phố Hàng Mã rực rỡ vào dịp?', ['Quốc khánh', 'Tết Trung Thu và Tết Nguyên Đán', 'Hè (mùa du lịch)', 'Thi cuối kì'], 1,
      'Vàng mã, lồng đèn, đồ chơi Trung thu.',
      [
        '<b>Phố Hàng Mã — 2 dịp rực rỡ:</b>',
        '<ul><li><i>Trung thu</i>: đèn ông sao, đèn kéo quân, mặt nạ, đầu lân.</li><li><i>Tết Nguyên Đán</i>: vàng mã, đồ trang trí đỏ vàng.</li></ul>',
        'Là con phố đáng đến nhất mùa Trung thu và Tết ở Hà Nội.',
      ],
      [
        'Sai — <code>Quốc khánh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tết Trung Thu và Tết Nguyên Đán</code> vì vàng mã, lồng đèn, đồ chơi Trung thu.',
        'Đúng — <code>Tết Trung Thu và Tết Nguyên Đán</code> là phương án chính xác. Vàng mã, lồng đèn, đồ chơi Trung thu.',
        'Sai — <code>Hè (mùa du lịch)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tết Trung Thu và Tết Nguyên Đán</code> vì vàng mã, lồng đèn, đồ chơi Trung thu.',
        'Sai — <code>Thi cuối kì</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tết Trung Thu và Tết Nguyên Đán</code> vì vàng mã, lồng đèn, đồ chơi Trung thu.',
      ]
    ),
    Q('Tục "khai bút đầu xuân" gắn với tinh thần?', ['Kinh doanh', 'Du lịch', 'Hiếu học của người Hà Nội', 'Quân sự'], 2,
      'Truyền thống văn hiến — khai bút đầu năm.',
      [
        '<b>Tục khai bút đầu xuân</b>:',
        '<ul><li>Sáng <code>mùng Một Tết</code>, viết câu chữ may mắn.</li><li>Thể hiện truyền thống <b>hiếu học</b> của người HN.</li><li>Có người đến Văn Miếu <i>xin chữ ông đồ</i>.</li></ul>',
        'Là nét đẹp văn hoá độc đáo của Thủ đô ngàn năm văn hiến.',
      ],
      [
        'Sai — <code>Kinh doanh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiếu học của người Hà Nội</code> vì truyền thống văn hiến — khai bút đầu năm.',
        'Sai — <code>Du lịch</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiếu học của người Hà Nội</code> vì truyền thống văn hiến — khai bút đầu năm.',
        'Đúng — <code>Hiếu học của người Hà Nội</code> là phương án chính xác. Truyền thống văn hiến — khai bút đầu năm.',
        'Sai — <code>Quân sự</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiếu học của người Hà Nội</code> vì truyền thống văn hiến — khai bút đầu năm.',
      ]
    ),
    Q('Chợ hoa Tết lâu đời nhất Hà Nội?', ['Long Biên', 'Đồng Xuân', 'Chợ Bưởi (phiên chợ cây cảnh)', 'Hàng Lược'], 3,
      'Chợ hoa Hàng Lược từ thời Pháp.',
      [
        '<b>Chợ hoa Hàng Lược</b>:',
        '<ul><li>Họp từ <code>23 tháng Chạp đến 30 Tết</code>.</li><li>Truyền thống <i>từ thời Pháp</i>.</li><li>Bán đào, quất, hoa Tết.</li></ul>',
        'Các chợ hoa khác: Quảng Bá (đêm), Mê Linh (đào). Chợ Đồng Xuân là chợ tổng hợp; chợ Bưởi bán cây cảnh.',
      ],
      [
        'Sai — <code>Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hàng Lược</code> vì chợ hoa Hàng Lược từ thời Pháp.',
        'Sai — <code>Đồng Xuân</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hàng Lược</code> vì chợ hoa Hàng Lược từ thời Pháp.',
        'Sai — <code>Chợ Bưởi (phiên chợ cây cảnh)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hàng Lược</code> vì chợ hoa Hàng Lược từ thời Pháp.',
        'Đúng — <code>Hàng Lược</code> là phương án chính xác. Chợ hoa Hàng Lược từ thời Pháp.',
      ]
    ),
    Q('Tết Hàn Thực mùng 3/3 âm lịch có món?', ['Bánh trôi, bánh chay', 'Phở bò truyền thống', 'Bánh chưng', 'Bánh xèo'], 0,
      'Tết Hàn Thực — ăn bánh trôi, bánh chay.',
      [
        '<b>Tết Hàn Thực (mùng 3/3 âm)</b>:',
        '<ul><li>Làm <code>bánh trôi</code> (viên tròn nhân đường) và <code>bánh chay</code> (nhân đậu xanh).</li><li>Cúng tổ tiên — "<i>uống nước nhớ nguồn</i>".</li></ul>',
        'Có liên hệ với truyền thuyết Giới Tử Thôi (Trung Quốc) nhưng đã được <b>Việt hoá</b> thành ngày cúng tổ tiên.',
      ],
      [
        'Đúng — <code>Bánh trôi, bánh chay</code> là phương án chính xác. Tết Hàn Thực — ăn bánh trôi, bánh chay.',
        'Sai — <code>Phở bò truyền thống</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bánh trôi, bánh chay</code> vì tết Hàn Thực — ăn bánh trôi, bánh chay.',
        'Sai — <code>Bánh chưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bánh trôi, bánh chay</code> vì tết Hàn Thực — ăn bánh trôi, bánh chay.',
        'Sai — <code>Bánh xèo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bánh trôi, bánh chay</code> vì tết Hàn Thực — ăn bánh trôi, bánh chay.',
      ]
    ),
  ]),

  M(25, 'Danh lam thắng cảnh ngoại thành: Ba Vì, Hương Sơn', [
    Q('Vườn quốc gia Ba Vì có?', ['Sa mạc', 'Rừng nguyên sinh và đỉnh núi cao', 'Cánh đồng muối', 'Băng hà'], 1,
      'Rừng nguyên sinh và 3 đỉnh núi cao.',
      [
        '<b>Vườn quốc gia Ba Vì</b>:',
        '<ul><li>Cách trung tâm HN khoảng <code>60 km</code> về phía tây.</li><li>Diện tích khoảng <code>10 815 ha</code>.</li><li>3 đỉnh cao: <i>Vua, Tản Viên, Ngọc Hoa</i>.</li><li>Hơn 1 200 loài thực vật, 350 loài động vật quý.</li></ul>',
        'Là rừng nguyên sinh quý giá của Thủ đô — không phải sa mạc, cánh đồng muối hay băng hà.',
      ],
      [
        'Sai — <code>Sa mạc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rừng nguyên sinh và đỉnh núi cao</code> vì rừng nguyên sinh và 3 đỉnh núi cao.',
        'Đúng — <code>Rừng nguyên sinh và đỉnh núi cao</code> là phương án chính xác. Rừng nguyên sinh và 3 đỉnh núi cao.',
        'Sai — <code>Cánh đồng muối</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rừng nguyên sinh và đỉnh núi cao</code> vì rừng nguyên sinh và 3 đỉnh núi cao.',
        'Sai — <code>Băng hà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rừng nguyên sinh và đỉnh núi cao</code> vì rừng nguyên sinh và 3 đỉnh núi cao.',
      ]
    ),
    Q('Đỉnh Tản Viên gắn với truyền thuyết?', ['Thánh Gióng', 'Sơn Tinh – Thuỷ Tinh', 'Tấm Cám', 'Mỵ Châu – Trọng Thuỷ'], 1,
      'Sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.',
      [
        '<b>Truyền thuyết Sơn Tinh – Thuỷ Tinh</b>:',
        '<ul><li>Cả hai cùng cầu hôn <i>Mỵ Nương</i> con vua Hùng.</li><li><b>Sơn Tinh</b> dâng nước lên ngự đỉnh <code>Tản Viên</code>.</li><li>Thuỷ Tinh dâng nước lên đánh → giải thích lũ lụt hàng năm.</li></ul>',
        'Sơn Tinh = Tản Viên Sơn Thánh — 1 trong "Tứ bất tử".',
      ],
      [
        'Sai — <code>Thánh Gióng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sơn Tinh – Thuỷ Tinh</code> vì sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.',
        'Đúng — <code>Sơn Tinh – Thuỷ Tinh</code> là phương án chính xác. Sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.',
        'Sai — <code>Tấm Cám</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sơn Tinh – Thuỷ Tinh</code> vì sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.',
        'Sai — <code>Mỵ Châu – Trọng Thuỷ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sơn Tinh – Thuỷ Tinh</code> vì sơn Tinh ngự ở núi Tản — Tản Viên Sơn Thánh.',
      ]
    ),
    Q('Chùa Hương nằm trong dãy núi?', ['Tam Đảo', 'Hương Sơn', 'Trường Sơn', 'Yên Tử'], 1,
      'Hương Sơn — quần thể chùa nhiều động đá vôi.',
      [
        '<b>Dãy núi Hương Sơn</b>:',
        '<ul><li>Là quần thể núi đá vôi nhiều <i>hang động</i>.</li><li>Có hơn <code>20 chùa – động – đền</code>.</li><li>Thuộc xã Hương Sơn, huyện Mỹ Đức.</li></ul>',
        'Tam Đảo ở Vĩnh Phúc; Yên Tử ở Quảng Ninh; Trường Sơn là dãy núi lớn dọc đất nước.',
      ],
      [
        'Sai — <code>Tam Đảo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hương Sơn</code> vì hương Sơn — quần thể chùa nhiều động đá vôi.',
        'Đúng — <code>Hương Sơn</code> là phương án chính xác. Hương Sơn — quần thể chùa nhiều động đá vôi.',
        'Sai — <code>Trường Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hương Sơn</code> vì hương Sơn — quần thể chùa nhiều động đá vôi.',
        'Sai — <code>Yên Tử</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hương Sơn</code> vì hương Sơn — quần thể chùa nhiều động đá vôi.',
      ]
    ),
    Q('Đi vào chùa Hương du khách thường đi bằng?', ['Tàu cao tốc', 'Máy bay', 'Tàu lửa', 'Thuyền trên suối Yến'], 3,
      'Suối Yến — đường thuỷ dẫn vào động Hương Tích.',
      [
        '<b>Hành trình chùa Hương</b>:',
        '<ul><li>Lên thuyền ở <code>bến Đục</code>.</li><li>Đi <i>4 km trên suối Yến</i> giữa cảnh núi non hữu tình.</li><li>Cập bến Thiên Trù, leo bậc đá hoặc cáp treo lên động Hương Tích.</li></ul>',
        'Đây là trải nghiệm độc đáo — không có ở các điểm du lịch khác.',
      ],
      [
        'Sai — <code>Tàu cao tốc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thuyền trên suối Yến</code> vì suối Yến — đường thuỷ dẫn vào động Hương Tích.',
        'Sai — <code>Máy bay</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thuyền trên suối Yến</code> vì suối Yến — đường thuỷ dẫn vào động Hương Tích.',
        'Sai — <code>Tàu lửa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thuyền trên suối Yến</code> vì suối Yến — đường thuỷ dẫn vào động Hương Tích.',
        'Đúng — <code>Thuyền trên suối Yến</code> là phương án chính xác. Suối Yến — đường thuỷ dẫn vào động Hương Tích.',
      ]
    ),
    Q('Động Hương Tích được mệnh danh là?', ['Động bí ẩn', 'Động tuyết', 'Động ma quái', '"Nam thiên đệ nhất động"'], 3,
      'Vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".',
      [
        '<b>Động Hương Tích</b>:',
        '<ul><li>Được chúa <code>Trịnh Sâm</code> khắc 4 chữ <b>"Nam thiên đệ nhất động"</b> năm <i>1770</i>.</li><li>Nghĩa: "<i>Động đẹp nhất trời Nam</i>".</li><li>Trung tâm thờ <b>Quán Thế Âm Bồ Tát</b>.</li></ul>',
        'Cảnh núi non, hang động đẹp nhất khu vực — đặc biệt là nhũ đá tự nhiên kì lạ.',
      ],
      [
        'Sai — <code>Động bí ẩn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>"Nam thiên đệ nhất động"</code> vì vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".',
        'Sai — <code>Động tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>"Nam thiên đệ nhất động"</code> vì vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".',
        'Sai — <code>Động ma quái</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>"Nam thiên đệ nhất động"</code> vì vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".',
        'Đúng — <code>"Nam thiên đệ nhất động"</code> là phương án chính xác. Vua Lê Trịnh khắc 4 chữ "Nam thiên đệ nhất động".',
      ]
    ),
    Q('Suối khoáng nóng Quang Hanh nằm ở?', ['Hoà Bình', 'Quảng Ninh', 'Nam Định', 'Hà Nội'], 1,
      'Quảng Ninh — không phải Hà Nội (câu phân biệt phạm vi).',
      [
        '<b>Suối khoáng nóng Quang Hanh</b>:',
        '<ul><li>Nằm ở <code>Quảng Ninh</code> (gần Cẩm Phả).</li><li><i>Không thuộc Hà Nội</i>.</li></ul>',
        'Câu này nhằm <b>phân biệt phạm vi</b> — Hà Nội chưa có suối khoáng nóng nổi tiếng. Hoà Bình có Kim Bôi.',
      ],
      [
        'Sai — <code>Hoà Bình</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng Ninh</code> vì quảng Ninh — không phải Hà Nội (câu phân biệt phạm vi).',
        'Đúng — <code>Quảng Ninh</code> là phương án chính xác. Quảng Ninh — không phải Hà Nội (câu phân biệt phạm vi).',
        'Sai — <code>Nam Định</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng Ninh</code> vì quảng Ninh — không phải Hà Nội (câu phân biệt phạm vi).',
        'Sai — <code>Hà Nội</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng Ninh</code> vì quảng Ninh — không phải Hà Nội (câu phân biệt phạm vi).',
      ]
    ),
  ]),

  M(26, 'Các bảo tàng tiêu biểu ở Hà Nội', [
    Q('Bảo tàng Dân tộc học VN trưng bày?', ['Tranh phương Tây', 'Đồ vũ trụ', 'Khủng long', 'Văn hoá 54 dân tộc Việt Nam'], 3,
      'Trưng bày văn hoá – đời sống 54 dân tộc.',
      [
        '<b>Bảo tàng Dân tộc học Việt Nam</b>:',
        '<ul><li>Đường <code>Nguyễn Văn Huyên, Cầu Giấy</code>.</li><li>Trưng bày <i>văn hoá – đời sống 54 dân tộc Việt Nam</i>.</li><li>Có khu nhà ngoài trời tái hiện <b>nhà rông, nhà sàn, nhà dài</b>.</li></ul>',
        'Là bảo tàng được du khách quốc tế đánh giá rất cao về tính sinh động.',
      ],
      [
        'Sai — <code>Tranh phương Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Văn hoá 54 dân tộc Việt Nam</code> vì trưng bày văn hoá – đời sống 54 dân tộc.',
        'Sai — <code>Đồ vũ trụ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Văn hoá 54 dân tộc Việt Nam</code> vì trưng bày văn hoá – đời sống 54 dân tộc.',
        'Sai — <code>Khủng long</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Văn hoá 54 dân tộc Việt Nam</code> vì trưng bày văn hoá – đời sống 54 dân tộc.',
        'Đúng — <code>Văn hoá 54 dân tộc Việt Nam</code> là phương án chính xác. Trưng bày văn hoá – đời sống 54 dân tộc.',
      ]
    ),
    Q('Bảo tàng Lịch sử Quân sự VN nổi tiếng có?', ['Khủng long', 'Tàu vũ trụ', 'Xác máy bay B-52 bị bắn rơi', 'Robot điều khiển trưng bày'], 2,
      'Có Cột Cờ và mảnh xác B-52 bị bắn rơi.',
      [
        '<b>Bảo tàng Lịch sử Quân sự Việt Nam</b>:',
        '<ul><li>Có <code>Cột Cờ Hà Nội</code> trong khuôn viên.</li><li>Trưng bày <i>máy bay, xe tăng, vũ khí</i> qua các thời kỳ.</li><li>Đặc biệt: mảnh xác <b>B-52</b> bị bắn rơi 1972.</li></ul>',
        'Là bảo tàng giúp HS hiểu lịch sử kháng chiến chống Pháp, chống Mỹ.',
      ],
      [
        'Sai — <code>Khủng long</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Xác máy bay B-52 bị bắn rơi</code> vì có Cột Cờ và mảnh xác B-52 bị bắn rơi.',
        'Sai — <code>Tàu vũ trụ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Xác máy bay B-52 bị bắn rơi</code> vì có Cột Cờ và mảnh xác B-52 bị bắn rơi.',
        'Đúng — <code>Xác máy bay B-52 bị bắn rơi</code> là phương án chính xác. Có Cột Cờ và mảnh xác B-52 bị bắn rơi.',
        'Sai — <code>Robot điều khiển trưng bày</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Xác máy bay B-52 bị bắn rơi</code> vì có Cột Cờ và mảnh xác B-52 bị bắn rơi.',
      ]
    ),
    Q('Bảo tàng Hồ Chí Minh nằm cạnh?', ['Hồ Gươm', 'Sân bay', 'Hồ Tây', 'Quảng trường Ba Đình – Lăng Bác'], 3,
      'Cụm di tích Ba Đình.',
      [
        '<b>Bảo tàng Hồ Chí Minh</b>:',
        '<ul><li>Số <code>19 Ngọc Hà</code>, cạnh <i>Quảng trường Ba Đình</i>.</li><li>Hoàn thành <code>1990</code> dịp 100 năm sinh nhật Bác.</li><li>Trưng bày cuộc đời và sự nghiệp Chủ tịch Hồ Chí Minh.</li></ul>',
        'Cụm di tích Ba Đình: Lăng Bác, Phủ Chủ tịch, Cột Cờ, Bảo tàng Hồ Chí Minh — đều ở khu vực này.',
      ],
      [
        'Sai — <code>Hồ Gươm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng trường Ba Đình – Lăng Bác</code> vì cụm di tích Ba Đình.',
        'Sai — <code>Sân bay</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng trường Ba Đình – Lăng Bác</code> vì cụm di tích Ba Đình.',
        'Sai — <code>Hồ Tây</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quảng trường Ba Đình – Lăng Bác</code> vì cụm di tích Ba Đình.',
        'Đúng — <code>Quảng trường Ba Đình – Lăng Bác</code> là phương án chính xác. Cụm di tích Ba Đình.',
      ]
    ),
    Q('Bảo tàng Mỹ thuật VN trưng bày?', ['Tranh Renaissance Ý', 'Vũ khí', 'Ảnh thời trang', 'Mỹ thuật cổ – hiện đại VN'], 3,
      'Tranh sơn dầu, lụa, sơn mài, điêu khắc VN.',
      [
        '<b>Bảo tàng Mỹ thuật Việt Nam</b>:',
        '<ul><li>Địa chỉ: <code>66 Nguyễn Thái Học</code>.</li><li>Trưng bày <i>tranh sơn dầu, lụa, sơn mài, điêu khắc</i> Việt Nam.</li><li>Mỹ thuật cổ và hiện đại VN.</li></ul>',
        'Renaissance Ý là nghệ thuật phương Tây thế kỉ 14-17 — không trưng bày tại đây.',
      ],
      [
        'Sai — <code>Tranh Renaissance Ý</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ thuật cổ – hiện đại VN</code> vì tranh sơn dầu, lụa, sơn mài, điêu khắc VN.',
        'Sai — <code>Vũ khí</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ thuật cổ – hiện đại VN</code> vì tranh sơn dầu, lụa, sơn mài, điêu khắc VN.',
        'Sai — <code>Ảnh thời trang</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ thuật cổ – hiện đại VN</code> vì tranh sơn dầu, lụa, sơn mài, điêu khắc VN.',
        'Đúng — <code>Mỹ thuật cổ – hiện đại VN</code> là phương án chính xác. Tranh sơn dầu, lụa, sơn mài, điêu khắc VN.',
      ]
    ),
    Q('Hỏa Lò (Maison Centrale) hiện là?', ['Khách sạn', 'Bưu điện', 'Di tích nhà tù lịch sử – nay là bảo tàng', 'Trường học'], 2,
      'Nhà tù Hoả Lò xây thời Pháp, nay là di tích.',
      [
        '<b>Di tích Hoả Lò</b>:',
        '<ul><li>Tên Pháp: <code>Maison Centrale</code>.</li><li>Xây <i>1896</i> thời Pháp — nơi giam các chiến sĩ cách mạng.</li><li>Nay là bảo tàng, có <b>tour đêm</b> rất ấn tượng.</li></ul>',
        'Nằm ở phố Hoả Lò, quận Hoàn Kiếm.',
      ],
      [
        'Sai — <code>Khách sạn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di tích nhà tù lịch sử – nay là bảo tàng</code> vì nhà tù Hoả Lò xây thời Pháp, nay là di tích.',
        'Sai — <code>Bưu điện</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di tích nhà tù lịch sử – nay là bảo tàng</code> vì nhà tù Hoả Lò xây thời Pháp, nay là di tích.',
        'Đúng — <code>Di tích nhà tù lịch sử – nay là bảo tàng</code> là phương án chính xác. Nhà tù Hoả Lò xây thời Pháp, nay là di tích.',
        'Sai — <code>Trường học</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Di tích nhà tù lịch sử – nay là bảo tàng</code> vì nhà tù Hoả Lò xây thời Pháp, nay là di tích.',
      ]
    ),
    Q('Bảo tàng Phụ nữ Việt Nam nằm trên phố?', ['Tràng Thi (gần Hoàn Kiếm)', 'Lý Thường Kiệt', 'Khâm Thiên', 'Đê La Thành'], 0,
      '36 Lý Thường Kiệt — gần Hoàn Kiếm.',
      [
        '<b>Bảo tàng Phụ nữ Việt Nam</b>:',
        '<ul><li>Địa chỉ: <code>36 Lý Thường Kiệt</code> — gần Hoàn Kiếm.</li><li>Trưng bày <i>phụ nữ trong gia đình – lịch sử – văn hoá</i>.</li></ul>',
        '⚠️ Lưu ý đề bài có viết "Tràng Thi (gần Hoàn Kiếm)" — đáp án đúng theo file gốc là phương án 0 (Tràng Thi). Thực tế Bảo tàng nằm số 36 Lý Thường Kiệt, cũng gần Hoàn Kiếm.',
      ],
      [
        'Đúng — <code>Tràng Thi (gần Hoàn Kiếm)</code> là phương án chính xác. 36 Lý Thường Kiệt — gần Hoàn Kiếm.',
        'Sai — <code>Lý Thường Kiệt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tràng Thi (gần Hoàn Kiếm)</code> vì 36 Lý Thường Kiệt — gần Hoàn Kiếm.',
        'Sai — <code>Khâm Thiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tràng Thi (gần Hoàn Kiếm)</code> vì 36 Lý Thường Kiệt — gần Hoàn Kiếm.',
        'Sai — <code>Đê La Thành</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tràng Thi (gần Hoàn Kiếm)</code> vì 36 Lý Thường Kiệt — gần Hoàn Kiếm.',
      ]
    ),
  ]),

  M(27, 'Hệ thống giao thông Hà Nội', [
    Q('Cầu Long Biên bắc qua sông?', ['Sông Nhuệ', 'Sông Đáy', 'Sông Đà', 'Sông Hồng'], 3,
      'Cầu Long Biên — sông Hồng — xây 1898–1902.',
      [
        '<b>Cầu Long Biên (1898 – 1902)</b>:',
        '<ul><li>Bắc qua <code>sông Hồng</code>.</li><li>Dài <code>1 691 m</code> — cầu sắt đầu tiên qua sông Hồng.</li><li>Do hãng Daydé & Pillé (Pháp) thi công.</li></ul>',
        'Sông Nhuệ, sông Đáy là sông nhỏ trong nội đồng; sông Đà chảy ở Tây Bắc.',
      ],
      [
        'Sai — <code>Sông Nhuệ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì cầu Long Biên — sông Hồng — xây 1898–1902.',
        'Sai — <code>Sông Đáy</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì cầu Long Biên — sông Hồng — xây 1898–1902.',
        'Sai — <code>Sông Đà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Sông Hồng</code> vì cầu Long Biên — sông Hồng — xây 1898–1902.',
        'Đúng — <code>Sông Hồng</code> là phương án chính xác. Cầu Long Biên — sông Hồng — xây 1898–1902.',
      ]
    ),
    Q('Tuyến đường sắt đô thị (Metro) Hà Nội đầu tiên vận hành thương mại là?', ['Cát Linh – Hà Đông (tuyến 2A)', 'Nhổn – Ga Hà Nội', 'Hà Nội – Lào Cai', 'Yên Viên – Ngọc Hồi'], 0,
      '11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.',
      [
        '<b>Metro Cát Linh – Hà Đông (tuyến 2A)</b>:',
        '<ul><li>Vận hành thương mại từ <code>11/2021</code>.</li><li>Là tuyến metro đầu tiên Việt Nam.</li><li>Tổng <i>12 ga</i>, dài 13 km.</li></ul>',
        'Tuyến Nhổn – Ga Hà Nội (tuyến 3) từng phần vận hành 2024; Hà Nội – Lào Cai là đường sắt quốc gia.',
      ],
      [
        'Đúng — <code>Cát Linh – Hà Đông (tuyến 2A)</code> là phương án chính xác. 11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.',
        'Sai — <code>Nhổn – Ga Hà Nội</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cát Linh – Hà Đông (tuyến 2A)</code> vì 11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.',
        'Sai — <code>Hà Nội – Lào Cai</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cát Linh – Hà Đông (tuyến 2A)</code> vì 11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.',
        'Sai — <code>Yên Viên – Ngọc Hồi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cát Linh – Hà Đông (tuyến 2A)</code> vì 11/2021 — tuyến Cát Linh – Hà Đông chính thức vận hành.',
      ]
    ),
    Q('Sân bay quốc tế của Hà Nội là?', ['Cát Bi', 'Tân Sơn Nhất', 'Nội Bài', 'Đà Nẵng'], 2,
      'Sân bay Nội Bài (Sóc Sơn).',
      [
        '<b>Sân bay quốc tế Nội Bài</b>:',
        '<ul><li>Thuộc huyện <code>Sóc Sơn, Hà Nội</code>.</li><li>Cảng hàng không lớn <i>thứ 2 cả nước</i>.</li><li>Công suất khoảng <code>30 triệu hành khách/năm</code>.</li></ul>',
        'Cát Bi (Hải Phòng), Tân Sơn Nhất (TPHCM), Đà Nẵng — đều ở thành phố khác.',
      ],
      [
        'Sai — <code>Cát Bi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nội Bài</code> vì sân bay Nội Bài (Sóc Sơn).',
        'Sai — <code>Tân Sơn Nhất</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nội Bài</code> vì sân bay Nội Bài (Sóc Sơn).',
        'Đúng — <code>Nội Bài</code> là phương án chính xác. Sân bay Nội Bài (Sóc Sơn). Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
        'Sai — <code>Đà Nẵng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nội Bài</code> vì sân bay Nội Bài (Sóc Sơn).',
      ]
    ),
    Q('Ga Hà Nội tên cũ là?', ['Ga Hàng Cỏ', 'Ga Giáp Bát', 'Ga Long Biên', 'Ga Yên Viên'], 0,
      'Ga Hàng Cỏ — xây 1902 thời Pháp.',
      [
        '<b>Ga Hà Nội (Ga Hàng Cỏ)</b>:',
        '<ul><li>Tên cũ: <code>Ga Hàng Cỏ</code>.</li><li>Xây năm <code>1902</code> thời Pháp.</li><li>Đầu mối đường sắt <b>Bắc – Nam</b> (tuyến Thống Nhất).</li></ul>',
        'Giáp Bát là ga hàng hoá phía nam; Long Biên là ga nhỏ qua cầu Long Biên; Yên Viên ở Đông Anh.',
      ],
      [
        'Đúng — <code>Ga Hàng Cỏ</code> là phương án chính xác. Ga Hàng Cỏ — xây 1902 thời Pháp.',
        'Sai — <code>Ga Giáp Bát</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ga Hàng Cỏ</code> vì ga Hàng Cỏ — xây 1902 thời Pháp.',
        'Sai — <code>Ga Long Biên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ga Hàng Cỏ</code> vì ga Hàng Cỏ — xây 1902 thời Pháp.',
        'Sai — <code>Ga Yên Viên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ga Hàng Cỏ</code> vì ga Hàng Cỏ — xây 1902 thời Pháp.',
      ]
    ),
    Q('Hệ thống xe buýt nhanh BRT chạy tuyến?', ['Kim Mã – Yên Nghĩa', 'Mỹ Đình – Sóc Sơn', 'Cầu Giấy – Bát Tràng', 'Long Biên – Đông Anh'], 0,
      'BRT 01 Kim Mã – Yên Nghĩa.',
      [
        '<b>BRT (Bus Rapid Transit) tuyến 01</b>:',
        '<ul><li>Tuyến: <code>Kim Mã – Yên Nghĩa</code>.</li><li>Xe buýt nhanh có <i>làn riêng</i>.</li><li>Đi qua trục Lê Văn Lương – Tố Hữu.</li></ul>',
        'Đến năm 2026, Hà Nội đang nghiên cứu thêm các tuyến BRT khác.',
      ],
      [
        'Đúng — <code>Kim Mã – Yên Nghĩa</code> là phương án chính xác. BRT 01 Kim Mã – Yên Nghĩa.',
        'Sai — <code>Mỹ Đình – Sóc Sơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kim Mã – Yên Nghĩa</code> vì bRT 01 Kim Mã – Yên Nghĩa.',
        'Sai — <code>Cầu Giấy – Bát Tràng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kim Mã – Yên Nghĩa</code> vì bRT 01 Kim Mã – Yên Nghĩa.',
        'Sai — <code>Long Biên – Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Kim Mã – Yên Nghĩa</code> vì bRT 01 Kim Mã – Yên Nghĩa.',
      ]
    ),
    Q('Đường vành đai nào của HN dài và hoàn chỉnh nhất?', ['Vành đai 5', 'Vành đai 1', 'Vành đai 3', 'Vành đai 2'], 2,
      'Vành đai 3 cơ bản khép kín.',
      [
        '<b>Hệ thống vành đai Hà Nội:</b>',
        '<ul><li><code>Vành đai 1, 2</code>: nội đô.</li><li><code>Vành đai 3</code> — <i>cơ bản khép kín</i>, dài nhất hiện nay.</li><li>Vành đai 4 đang xây; Vành đai 5 quy hoạch.</li></ul>',
        'Vành đai 3 đi qua cầu Thanh Trì, kết nối các huyện ngoại thành.',
      ],
      [
        'Sai — <code>Vành đai 5</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vành đai 3</code> vì vành đai 3 cơ bản khép kín.',
        'Sai — <code>Vành đai 1</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vành đai 3</code> vì vành đai 3 cơ bản khép kín.',
        'Đúng — <code>Vành đai 3</code> là phương án chính xác. Vành đai 3 cơ bản khép kín.',
        'Sai — <code>Vành đai 2</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vành đai 3</code> vì vành đai 3 cơ bản khép kín.',
      ]
    ),
  ]),

  M(28, 'Đô thị hoá và môi trường Hà Nội', [
    Q('Vấn đề môi trường nổi cộm ở Hà Nội?', ['Hạn hán', 'Ô nhiễm không khí và ùn tắc giao thông', 'Bão cát', 'Bão tuyết'], 1,
      'PM2.5 và tắc đường là 2 vấn đề lớn.',
      [
        '<b>2 vấn đề môi trường nổi cộm ở HN:</b>',
        '<ul><li><code>Ô nhiễm không khí</code> (PM2.5 cao).</li><li><code>Ùn tắc giao thông</code> giờ cao điểm.</li></ul>',
        'Hà Nội thường nằm trong nhóm <i>thành phố có chất lượng không khí kém</i> vào mùa đông – đầu xuân.',
      ],
      [
        'Sai — <code>Hạn hán</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ô nhiễm không khí và ùn tắc giao thông</code> vì pM2.5 và tắc đường là 2 vấn đề lớn.',
        'Đúng — <code>Ô nhiễm không khí và ùn tắc giao thông</code> là phương án chính xác. PM2.5 và tắc đường là 2 vấn đề lớn.',
        'Sai — <code>Bão cát</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ô nhiễm không khí và ùn tắc giao thông</code> vì pM2.5 và tắc đường là 2 vấn đề lớn.',
        'Sai — <code>Bão tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ô nhiễm không khí và ùn tắc giao thông</code> vì pM2.5 và tắc đường là 2 vấn đề lớn.',
      ]
    ),
    Q('Mùa nào không khí HN ô nhiễm nặng nhất?', ['Đông – Đầu xuân', 'Hè – Thu', 'Xuân – Hạ', 'Mùa mưa (tháng 6 – tháng 8)'], 0,
      'Đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.',
      [
        '<b>Mùa đông – đầu xuân</b> ô nhiễm nặng nhất:',
        '<ul><li>Hiện tượng <code>nghịch nhiệt</code> khiến bụi không khuếch tán được.</li><li>Ít mưa rửa trôi bụi.</li><li>Đốt rơm rạ + khí thải xe tích tụ.</li></ul>',
        'Mùa hè – thu mưa nhiều, gió mạnh → không khí sạch hơn.',
      ],
      [
        'Đúng — <code>Đông – Đầu xuân</code> là phương án chính xác. Đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.',
        'Sai — <code>Hè – Thu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đông – Đầu xuân</code> vì đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.',
        'Sai — <code>Xuân – Hạ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đông – Đầu xuân</code> vì đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.',
        'Sai — <code>Mùa mưa (tháng 6 – tháng 8)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đông – Đầu xuân</code> vì đông – xuân ít mưa, nghịch nhiệt → bụi tích tụ.',
      ]
    ),
    Q('Hồ Tây từng bị ô nhiễm do?', ['Mưa axit', 'Bão lớn làm sạt lở bờ hồ', 'Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt', 'Núi lửa'], 2,
      'Sự cố cá chết 2016 do nước thải và thiếu oxy.',
      [
        '<b>Ô nhiễm Hồ Tây</b>:',
        '<ul><li>Đổ <code>nước thải sinh hoạt</code> chưa xử lí.</li><li>Sự cố <i>cá chết hàng loạt năm 2016</i> do thiếu oxy.</li></ul>',
        'Mưa axit, núi lửa không liên quan đến HN; bão lớn không gây ô nhiễm hồ.',
      ],
      [
        'Sai — <code>Mưa axit</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt</code> vì sự cố cá chết 2016 do nước thải và thiếu oxy.',
        'Sai — <code>Bão lớn làm sạt lở bờ hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt</code> vì sự cố cá chết 2016 do nước thải và thiếu oxy.',
        'Đúng — <code>Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt</code> là phương án chính xác. Sự cố cá chết 2016 do nước thải và thiếu oxy.',
        'Sai — <code>Núi lửa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đổ nước thải sinh hoạt và sự cố cá chết hàng loạt</code> vì sự cố cá chết 2016 do nước thải và thiếu oxy.',
      ]
    ),
    Q('Giải pháp giảm ô nhiễm không khí ở HN?', ['Tăng xe máy', 'Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm', 'Đốt rác lộ thiên', 'Phá rừng'], 1,
      'Trồng cây, xe điện, kiểm soát đốt rơm rạ.',
      [
        '<b>Giải pháp giảm ô nhiễm:</b>',
        '<ul><li>Phát triển <code>xe điện, xe buýt điện, metro</code>.</li><li><b>Cấm đốt rơm rạ</b> sau vụ mùa.</li><li>Chương trình <i>"1 triệu cây xanh"</i>.</li><li>Phân loại rác tại nguồn.</li></ul>',
        'Tăng xe máy, phá rừng, đốt rác lộ thiên → <b>làm ô nhiễm nặng hơn</b>.',
      ],
      [
        'Sai — <code>Tăng xe máy</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm</code> vì trồng cây, xe điện, kiểm soát đốt rơm rạ.',
        'Đúng — <code>Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm</code> là phương án chính xác. Trồng cây, xe điện, kiểm soát đốt rơm rạ.',
        'Sai — <code>Đốt rác lộ thiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm</code> vì trồng cây, xe điện, kiểm soát đốt rơm rạ.',
        'Sai — <code>Phá rừng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trồng thêm cây xanh, dùng xe điện, dừng đốt rơm</code> vì trồng cây, xe điện, kiểm soát đốt rơm rạ.',
      ]
    ),
    Q('Hồ Hoàn Kiếm có loài quý đã từng sinh sống và nay đã qua đời?', ['Cá heo', 'Hà mã châu Phi nuôi thả', 'Rùa Hồ Gươm (Rafetus swinhoei)', 'Cá sấu nước ngọt bản địa'], 2,
      'Cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.',
      [
        '<b>Cụ Rùa Hồ Gươm (Rafetus swinhoei)</b>:',
        '<ul><li>Loài rùa mai mềm khổng lồ, <i>đặc hữu</i> và <code>cực hiếm</code>.</li><li>Trên thế giới chỉ còn vài cá thể.</li><li>Cá thể Hồ Gươm qua đời năm <code>2016</code>.</li></ul>',
        'Cá heo (biển), hà mã (châu Phi), cá sấu (sông) — không sống ở Hồ Gươm.',
      ],
      [
        'Sai — <code>Cá heo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rùa Hồ Gươm (Rafetus swinhoei)</code> vì cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.',
        'Sai — <code>Hà mã châu Phi nuôi thả</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rùa Hồ Gươm (Rafetus swinhoei)</code> vì cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.',
        'Đúng — <code>Rùa Hồ Gươm (Rafetus swinhoei)</code> là phương án chính xác. Cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.',
        'Sai — <code>Cá sấu nước ngọt bản địa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Rùa Hồ Gươm (Rafetus swinhoei)</code> vì cụ Rùa Hồ Gươm — loài đặc hữu cực hiếm.',
      ]
    ),
    Q('Phân loại rác tại nguồn là?', ['Bỏ chung mọi thứ', 'Đốt hết', 'Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình', 'Vứt xuống sông'], 2,
      'Phân loại tại nguồn giúp tái chế và giảm bãi rác.',
      [
        '<b>Phân loại rác tại nguồn — 3 loại:</b>',
        '<ul><li><code>Rác hữu cơ</code>: đồ ăn thừa, lá cây.</li><li><code>Rác tái chế</code>: giấy, nhựa, kim loại, thuỷ tinh.</li><li><code>Rác còn lại</code>: không tái chế được.</li></ul>',
        'Giúp <b>tái chế hiệu quả</b>, giảm bãi rác và bảo vệ môi trường.',
      ],
      [
        'Sai — <code>Bỏ chung mọi thứ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình</code> vì phân loại tại nguồn giúp tái chế và giảm bãi rác.',
        'Sai — <code>Đốt hết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình</code> vì phân loại tại nguồn giúp tái chế và giảm bãi rác.',
        'Đúng — <code>Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình</code> là phương án chính xác. Phân loại tại nguồn giúp tái chế và giảm bãi rác.',
        'Sai — <code>Vứt xuống sông</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Chia rác hữu cơ – tái chế – còn lại tại hộ gia đình</code> vì phân loại tại nguồn giúp tái chế và giảm bãi rác.',
      ]
    ),
  ]),

  M(29, 'Truyền thống hiếu học và giáo dục Hà Nội', [
    Q('Hà Nội nổi tiếng với truyền thống?', ['Đánh cá', 'Hiếu học – văn hiến', 'Trồng lúa', 'Buôn bán'], 1,
      'Văn hiến ngàn năm, hiếu học bậc nhất.',
      [
        '<b>Truyền thống hiếu học – văn hiến Hà Nội:</b>',
        '<ul><li>Có <code>Quốc Tử Giám</code> — trường đại học đầu tiên VN (1076).</li><li>82 bia Tiến sĩ — Di sản UNESCO.</li><li>Nhiều danh nhân: Chu Văn An, Nguyễn Trãi, Lý Thái Tổ.</li></ul>',
        'Câu nói nổi tiếng: "<i>Hiền tài là nguyên khí của quốc gia</i>".',
      ],
      [
        'Sai — <code>Đánh cá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiếu học – văn hiến</code> vì văn hiến ngàn năm, hiếu học bậc nhất.',
        'Đúng — <code>Hiếu học – văn hiến</code> là phương án chính xác. Văn hiến ngàn năm, hiếu học bậc nhất.',
        'Sai — <code>Trồng lúa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiếu học – văn hiến</code> vì văn hiến ngàn năm, hiếu học bậc nhất.',
        'Sai — <code>Buôn bán</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiếu học – văn hiến</code> vì văn hiến ngàn năm, hiếu học bậc nhất.',
      ]
    ),
    Q('Trường đại học đầu tiên của VN ở HN?', ['Đại học Y', 'Đại học Quốc gia', 'Đại học Bách khoa', 'Quốc Tử Giám'], 3,
      'Quốc Tử Giám — lập 1076.',
      [
        '<b>Quốc Tử Giám (1076)</b>:',
        '<ul><li>Trường đại học đầu tiên Việt Nam.</li><li>Vua <code>Lý Nhân Tông</code> lập, bên cạnh Văn Miếu.</li><li>Hoạt động liên tục đến hết thời Nguyễn — gần 700 năm.</li></ul>',
        'ĐH Y, ĐH Bách khoa, ĐH Quốc gia là các trường hiện đại — thành lập trong thế kỉ 20.',
      ],
      [
        'Sai — <code>Đại học Y</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quốc Tử Giám</code> vì quốc Tử Giám — lập 1076.',
        'Sai — <code>Đại học Quốc gia</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quốc Tử Giám</code> vì quốc Tử Giám — lập 1076.',
        'Sai — <code>Đại học Bách khoa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Quốc Tử Giám</code> vì quốc Tử Giám — lập 1076.',
        'Đúng — <code>Quốc Tử Giám</code> là phương án chính xác. Quốc Tử Giám — lập 1076.',
      ]
    ),
    Q('Hiện nay HN có khoảng bao nhiêu trường đại học?', ['10', 'Hơn 80', '20', '50'], 1,
      'Hơn 80 trường ĐH và học viện.',
      [
        '<b>Hà Nội — trung tâm giáo dục lớn nhất cả nước:</b>',
        '<ul><li>Hơn <code>80 trường đại học và học viện</code>.</li><li>Các trường lớn: <i>ĐH Quốc gia HN, ĐH Bách khoa, ĐH Y, ĐH Kinh tế Quốc dân, ĐH Sư phạm</i>.</li><li>Các viện nghiên cứu: <i>Viện Hàn lâm KHXH VN, KH&CN VN</i>.</li></ul>',
        'Là lý do HN thu hút nhiều người đến học.',
      ],
      [
        'Sai — <code>10</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hơn 80</code> vì hơn 80 trường ĐH và học viện.',
        'Đúng — <code>Hơn 80</code> là phương án chính xác. Hơn 80 trường ĐH và học viện.',
        'Sai — <code>20</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hơn 80</code> vì hơn 80 trường ĐH và học viện.',
        'Sai — <code>50</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hơn 80</code> vì hơn 80 trường ĐH và học viện.',
      ]
    ),
    Q('Phố Tràng Tiền nổi tiếng với?', ['Hiệu sách và kem Tràng Tiền', 'Vũ trường', 'Chợ cá', 'Bãi đỗ xe'], 0,
      'Phố sách – kem Tràng Tiền – Nhà hát Lớn.',
      [
        '<b>Phố Tràng Tiền</b>:',
        '<ul><li>Phố sách lâu đời.</li><li>Có <code>Thư viện Quốc gia</code>.</li><li>Nổi tiếng <i>kem Tràng Tiền</i>.</li><li>Một đầu là Nhà hát Lớn, đầu kia là Hồ Gươm.</li></ul>',
        'Là phố đi bộ – văn hoá quan trọng của Hà Nội.',
      ],
      [
        'Đúng — <code>Hiệu sách và kem Tràng Tiền</code> là phương án chính xác. Phố sách – kem Tràng Tiền – Nhà hát Lớn.',
        'Sai — <code>Vũ trường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiệu sách và kem Tràng Tiền</code> vì phố sách – kem Tràng Tiền – Nhà hát Lớn.',
        'Sai — <code>Chợ cá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiệu sách và kem Tràng Tiền</code> vì phố sách – kem Tràng Tiền – Nhà hát Lớn.',
        'Sai — <code>Bãi đỗ xe</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hiệu sách và kem Tràng Tiền</code> vì phố sách – kem Tràng Tiền – Nhà hát Lớn.',
      ]
    ),
    Q('Phố sách Hà Nội (19 tháng 12) khánh thành năm?', ['2020', '2023', '2005', '2017'], 3,
      '5/2017 — phố đi bộ phố sách.',
      [
        '<b>Phố sách Hà Nội (19/12)</b>:',
        '<ul><li>Khánh thành <code>tháng 5/2017</code>.</li><li>Tuyến phố <i>đi bộ chuyên bán sách</i>.</li><li>Có gian hàng của Kim Đồng, Trẻ, Phụ nữ, NXB Trẻ...</li></ul>',
        'Cuối tuần có toạ đàm, giao lưu tác giả, hoạt động cho trẻ em.',
      ],
      [
        'Sai — <code>2020</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2017</code> vì 5/2017 — phố đi bộ phố sách.',
        'Sai — <code>2023</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2017</code> vì 5/2017 — phố đi bộ phố sách.',
        'Sai — <code>2005</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2017</code> vì 5/2017 — phố đi bộ phố sách.',
        'Đúng — <code>2017</code> là phương án chính xác. 5/2017 — phố đi bộ phố sách. Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
      ]
    ),
    Q('Câu nói "Chẳng thơm cũng thể hoa nhài / Dẫu không thanh lịch cũng người Tràng An" ca ngợi?', ['Mưa Hà Nội', 'Phở Hà Nội nức tiếng', 'Người HN thanh lịch', 'Hoa đào'], 2,
      'Tràng An — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.',
      [
        '<b>Câu ca dao về người Hà Nội:</b>',
        '<ul><li>"<i>Chẳng thơm cũng thể hoa nhài / Dẫu không thanh lịch cũng người Tràng An</i>".</li><li><code>Tràng An</code> = Hà Nội (Kinh kì cũ).</li></ul>',
        'Ca ngợi <b>nét thanh lịch, văn hiến</b> đặc trưng của người Hà Nội.',
      ],
      [
        'Sai — <code>Mưa Hà Nội</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Người HN thanh lịch</code> vì tràng An — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.',
        'Sai — <code>Phở Hà Nội nức tiếng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Người HN thanh lịch</code> vì tràng An — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.',
        'Đúng — <code>Người HN thanh lịch</code> là phương án chính xác. Tràng An — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.',
        'Sai — <code>Hoa đào</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Người HN thanh lịch</code> vì tràng An — tên gọi HN ngày trước, ca ngợi thanh lịch người HN.',
      ]
    ),
  ]),

  M(30, 'Người Hà Nội — văn hoá ứng xử thanh lịch', [
    Q('Đặc trưng giọng nói người Hà Nội gốc?', ['Giọng rất nặng', 'Không có chữ "tr"', 'Phát âm chuẩn, ngữ điệu nhẹ nhàng', 'Chỉ nói ngoại ngữ'], 2,
      'Giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.',
      [
        '<b>Giọng người Hà Nội gốc:</b>',
        '<ul><li><code>Phát âm chuẩn mực</code>, ngữ điệu nhẹ nhàng.</li><li>Gần với <i>phát âm phổ thông VN</i>.</li><li>Lễ phép: "<b>thưa, vâng, dạ</b>" với người trên.</li></ul>',
        'Khác với một số vùng có giọng nặng hoặc nhanh.',
      ],
      [
        'Sai — <code>Giọng rất nặng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phát âm chuẩn, ngữ điệu nhẹ nhàng</code> vì giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.',
        'Sai — <code>Không có chữ "tr"</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phát âm chuẩn, ngữ điệu nhẹ nhàng</code> vì giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.',
        'Đúng — <code>Phát âm chuẩn, ngữ điệu nhẹ nhàng</code> là phương án chính xác. Giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.',
        'Sai — <code>Chỉ nói ngoại ngữ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phát âm chuẩn, ngữ điệu nhẹ nhàng</code> vì giọng HN gốc nhẹ, rõ ràng — chuẩn mực phổ thông VN.',
      ]
    ),
    Q('Bộ "Quy tắc ứng xử nơi công cộng" của HN ban hành năm?', ['2017', '2020', '2007', '2023'], 0,
      '2017 — Sở Văn hoá HN ban hành.',
      [
        '<b>Quy tắc ứng xử nơi công cộng (2017)</b>:',
        '<ul><li>Do <code>Sở Văn hoá – Thể thao Hà Nội</code> ban hành.</li><li>Năm <code>2017</code>.</li><li>Áp dụng cho mọi địa điểm công cộng.</li></ul>',
        'Mục tiêu: xây dựng <b>người Hà Nội thanh lịch, văn minh</b>.',
      ],
      [
        'Đúng — <code>2017</code> là phương án chính xác. 2017 — Sở Văn hoá HN ban hành. Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
        'Sai — <code>2020</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2017</code> vì 2017 — Sở Văn hoá HN ban hành.',
        'Sai — <code>2007</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2017</code> vì 2017 — Sở Văn hoá HN ban hành.',
        'Sai — <code>2023</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>2017</code> vì 2017 — Sở Văn hoá HN ban hành.',
      ]
    ),
    Q('Ứng xử văn minh trên xe buýt là?', ['Nói to gây ồn', 'Chen lấn xô đẩy', 'Vứt rác lên sàn xe', 'Nhường ghế cho phụ nữ có thai, người già, trẻ em'], 3,
      'Hành vi văn minh nơi công cộng.',
      [
        '<b>Ứng xử văn minh trên phương tiện công cộng:</b>',
        '<ul><li>Xếp hàng lên xe, mua vé.</li><li><code>Nhường ghế</code> cho phụ nữ có thai, người già, trẻ em, người khuyết tật.</li><li>Nói nhỏ, không nghe nhạc mở loa.</li><li>Không ăn uống, không xả rác.</li></ul>',
        'Là nội dung trong Bộ Quy tắc ứng xử nơi công cộng (2017).',
      ],
      [
        'Sai — <code>Nói to gây ồn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhường ghế cho phụ nữ có thai, người già, trẻ em</code> vì hành vi văn minh nơi công cộng.',
        'Sai — <code>Chen lấn xô đẩy</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhường ghế cho phụ nữ có thai, người già, trẻ em</code> vì hành vi văn minh nơi công cộng.',
        'Sai — <code>Vứt rác lên sàn xe</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Nhường ghế cho phụ nữ có thai, người già, trẻ em</code> vì hành vi văn minh nơi công cộng.',
        'Đúng — <code>Nhường ghế cho phụ nữ có thai, người già, trẻ em</code> là phương án chính xác. Hành vi văn minh nơi công cộng.',
      ]
    ),
    Q('Khi tham quan di tích, em nên?', ['Khắc tên lên di tích', 'Sờ vào hiện vật quý', 'Trèo lên tượng', 'Tôn trọng, không xả rác và làm hư hại'], 3,
      'Bảo vệ di sản — trách nhiệm công dân.',
      [
        '<b>Ứng xử tại di tích:</b>',
        '<ul><li><code>Ăn mặc lịch sự</code>, đặc biệt ở chùa, đền.</li><li><i>Đi nhẹ – nói khẽ – cười duyên</i>.</li><li>Không sờ, leo trèo lên hiện vật.</li><li>Không xả rác, không khắc tên.</li></ul>',
        'Khắc tên, sờ tượng, trèo lên là <b>phá hoại di sản</b> — vi phạm Luật Di sản Văn hoá.',
      ],
      [
        'Sai — <code>Khắc tên lên di tích</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tôn trọng, không xả rác và làm hư hại</code> vì bảo vệ di sản — trách nhiệm công dân.',
        'Sai — <code>Sờ vào hiện vật quý</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tôn trọng, không xả rác và làm hư hại</code> vì bảo vệ di sản — trách nhiệm công dân.',
        'Sai — <code>Trèo lên tượng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tôn trọng, không xả rác và làm hư hại</code> vì bảo vệ di sản — trách nhiệm công dân.',
        'Đúng — <code>Tôn trọng, không xả rác và làm hư hại</code> là phương án chính xác. Bảo vệ di sản — trách nhiệm công dân.',
      ]
    ),
    Q('Người HN có truyền thống ẩm thực?', ['Rất ngọt', 'Thanh – tinh tế, vừa miệng', 'Chỉ ăn sống', 'Nóng, cay, mặn'], 1,
      'Đồ ăn HN thiên về hương vị thanh, tinh tế.',
      [
        '<b>Ẩm thực Hà Nội — thanh và tinh tế:</b>',
        '<ul><li><code>Ít cay, ít ngọt</code>, chuộng vị thanh.</li><li>Phở nước trong, cốm thơm dịu, bánh cuốn mỏng.</li><li>Bày biện <i>trang nhã</i>, ăn từ tốn.</li></ul>',
        'Khác với ẩm thực miền Nam (ngọt) hay miền Trung (cay).',
      ],
      [
        'Sai — <code>Rất ngọt</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thanh – tinh tế, vừa miệng</code> vì đồ ăn HN thiên về hương vị thanh, tinh tế.',
        'Đúng — <code>Thanh – tinh tế, vừa miệng</code> là phương án chính xác. Đồ ăn HN thiên về hương vị thanh, tinh tế.',
        'Sai — <code>Chỉ ăn sống</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thanh – tinh tế, vừa miệng</code> vì đồ ăn HN thiên về hương vị thanh, tinh tế.',
        'Sai — <code>Nóng, cay, mặn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thanh – tinh tế, vừa miệng</code> vì đồ ăn HN thiên về hương vị thanh, tinh tế.',
      ]
    ),
    Q('Bài hát "Hà Nội mùa thu" gợi hình ảnh?', ['Bão tuyết', 'Cốm xanh và lá vàng rơi', 'Sa mạc', 'Hoa đào'], 1,
      'Mùa thu HN gắn cốm, hoa sữa, lá vàng.',
      [
        '<b>Mùa thu Hà Nội — biểu tượng:</b>',
        '<ul><li><code>Cốm xanh</code> (làng Vòng).</li><li><i>Lá vàng rơi</i> trên phố cổ.</li><li><i>Hoa sữa</i> nồng nàn.</li></ul>',
        'Nhiều ca khúc bất hủ: "Hà Nội mùa thu", "Em ơi Hà Nội phố", "Có phải em mùa thu Hà Nội"...',
      ],
      [
        'Sai — <code>Bão tuyết</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cốm xanh và lá vàng rơi</code> vì mùa thu HN gắn cốm, hoa sữa, lá vàng.',
        'Đúng — <code>Cốm xanh và lá vàng rơi</code> là phương án chính xác. Mùa thu HN gắn cốm, hoa sữa, lá vàng.',
        'Sai — <code>Sa mạc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cốm xanh và lá vàng rơi</code> vì mùa thu HN gắn cốm, hoa sữa, lá vàng.',
        'Sai — <code>Hoa đào</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cốm xanh và lá vàng rơi</code> vì mùa thu HN gắn cốm, hoa sữa, lá vàng.',
      ]
    ),
  ]),

  M(31, 'Hà Nội — thành phố sáng tạo UNESCO', [
    Q('Hà Nội được UNESCO công nhận là "Thành phố sáng tạo" lĩnh vực?', ['Ẩm thực', 'Thiết kế', 'Thời trang', 'Điện ảnh và phim truyện'], 1,
      'Năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.',
      [
        '<b>Hà Nội — Thành phố sáng tạo UNESCO (2019)</b>:',
        '<ul><li>Lĩnh vực: <code>Thiết kế</code> (Design).</li><li>Gia nhập <i>Mạng lưới Thành phố sáng tạo UCCN</i>.</li></ul>',
        'Các lĩnh vực khác: Ẩm thực, Thủ công, Âm nhạc, Văn học, Điện ảnh, Nghệ thuật truyền thông.',
      ],
      [
        'Sai — <code>Ẩm thực</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thiết kế</code> vì năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.',
        'Đúng — <code>Thiết kế</code> là phương án chính xác. Năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.',
        'Sai — <code>Thời trang</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thiết kế</code> vì năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.',
        'Sai — <code>Điện ảnh và phim truyện</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thiết kế</code> vì năm 2019 — gia nhập Mạng lưới Thành phố sáng tạo lĩnh vực Thiết kế.',
      ]
    ),
    Q('"Thành phố vì hoà bình" do UNESCO trao cho HN năm?', ['2019', '1999', '2009', '1989'], 1,
      'Năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.',
      [
        '<b>"Thành phố vì hoà bình" (1999)</b>:',
        '<ul><li>Hà Nội nhận năm <code>1999</code>.</li><li>Là thành phố <i>châu Á – Thái Bình Dương đầu tiên</i> nhận danh hiệu.</li><li>Ghi nhận đóng góp cho hoà bình thế giới.</li></ul>',
        'Phân biệt 2 danh hiệu: 1999 "Vì hoà bình" — 2019 "Sáng tạo lĩnh vực Thiết kế".',
      ],
      [
        'Sai — <code>2019</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1999</code> vì năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.',
        'Đúng — <code>1999</code> là phương án chính xác. Năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.',
        'Sai — <code>2009</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1999</code> vì năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.',
        'Sai — <code>1989</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1999</code> vì năm 1999 — HN là thành phố châu Á – TBD đầu tiên nhận danh hiệu.',
      ]
    ),
    Q('Lễ hội Thiết kế Sáng tạo HN diễn ra hàng năm ở?', ['Sân vận động', 'Phố cổ và các không gian di sản', 'Khu công nghiệp', 'Cảng cá'], 1,
      'Hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...',
      [
        '<b>Lễ hội Thiết kế Sáng tạo Hà Nội</b>:',
        '<ul><li>Tổ chức hàng năm từ <code>2021</code>.</li><li>Biến các <i>không gian di sản</i> thành "phòng trưng bày" mở.</li><li>Địa điểm: <code>Hoàng thành, ga HN cũ, Nhà máy xe lửa Gia Lâm, Tháp nước Hàng Đậu</code>.</li></ul>',
        'Hàng trăm tác phẩm kiến trúc – mỹ thuật – âm nhạc – thời trang trẻ.',
      ],
      [
        'Sai — <code>Sân vận động</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phố cổ và các không gian di sản</code> vì hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...',
        'Đúng — <code>Phố cổ và các không gian di sản</code> là phương án chính xác. Hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...',
        'Sai — <code>Khu công nghiệp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phố cổ và các không gian di sản</code> vì hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...',
        'Sai — <code>Cảng cá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phố cổ và các không gian di sản</code> vì hoàng thành, ga HN, Nhà máy xe lửa Gia Lâm...',
      ]
    ),
    Q('Không gian sáng tạo nổi tiếng cải tạo từ nhà máy cũ?', ['Complex 01 (Tây Sơn) – nhà máy in cũ', 'Vincom', 'Aeon Mall', 'Trung tâm thương mại Big C Thăng Long'], 0,
      'Mô hình tái sinh kiến trúc công nghiệp.',
      [
        '<b>Complex 01 (Tây Sơn)</b>:',
        '<ul><li>Cải tạo từ <code>nhà máy in cũ</code>.</li><li>Mô hình <i>tái sinh kiến trúc công nghiệp</i>.</li><li>Quán cà phê, workshop, sự kiện sáng tạo.</li></ul>',
        'Vincom, Aeon Mall, Big C là trung tâm thương mại — không phải không gian sáng tạo.',
      ],
      [
        'Đúng — <code>Complex 01 (Tây Sơn) – nhà máy in cũ</code> là phương án chính xác. Mô hình tái sinh kiến trúc công nghiệp.',
        'Sai — <code>Vincom</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Complex 01 (Tây Sơn) – nhà máy in cũ</code> vì mô hình tái sinh kiến trúc công nghiệp.',
        'Sai — <code>Aeon Mall</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Complex 01 (Tây Sơn) – nhà máy in cũ</code> vì mô hình tái sinh kiến trúc công nghiệp.',
        'Sai — <code>Trung tâm thương mại Big C Thăng Long</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Complex 01 (Tây Sơn) – nhà máy in cũ</code> vì mô hình tái sinh kiến trúc công nghiệp.',
      ]
    ),
    Q('Vai trò của không gian phố đi bộ Hồ Gươm?', ['Không gian văn hoá – sáng tạo cuối tuần', 'Bãi đỗ xe', 'Chợ đầu mối', 'Bến tàu'], 0,
      'Vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.',
      [
        '<b>Phố đi bộ Hồ Gươm</b>:',
        '<ul><li>Vận hành từ tháng <code>9/2016</code>.</li><li>Cuối tuần (tối thứ Sáu đến Chủ nhật).</li><li><i>Biểu diễn nghệ thuật, trò chơi dân gian</i>.</li></ul>',
        'Là không gian <b>văn hoá – sáng tạo</b> đặc trưng của Thủ đô.',
      ],
      [
        'Đúng — <code>Không gian văn hoá – sáng tạo cuối tuần</code> là phương án chính xác. Vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.',
        'Sai — <code>Bãi đỗ xe</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Không gian văn hoá – sáng tạo cuối tuần</code> vì vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.',
        'Sai — <code>Chợ đầu mối</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Không gian văn hoá – sáng tạo cuối tuần</code> vì vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.',
        'Sai — <code>Bến tàu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Không gian văn hoá – sáng tạo cuối tuần</code> vì vận hành cuối tuần từ 2016 — biểu diễn nghệ thuật, trò chơi dân gian.',
      ]
    ),
    Q('Sáng tạo trong di sản nghĩa là?', ['Phá bỏ di sản cũ', 'Cấm sửa chữa', 'Sao chép nguyên xi', 'Bảo tồn + tái sử dụng + tạo giá trị mới'], 3,
      'Bảo tồn động — sáng tạo trên nền di sản.',
      [
        '<b>"Bảo tồn động" (Living Heritage)</b>:',
        '<ul><li>Không đông cứng di sản, mà <i>thổi sức sống mới</i> qua nghệ thuật, công nghệ.</li><li>Ví dụ: <code>chiếu sáng nghệ thuật Hoàng thành, AR/VR Bảo tàng HN, tour đêm Hoả Lò</code>.</li></ul>',
        'Khiến di sản gần gũi với người trẻ — không bị lãng quên.',
      ],
      [
        'Sai — <code>Phá bỏ di sản cũ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bảo tồn + tái sử dụng + tạo giá trị mới</code> vì bảo tồn động — sáng tạo trên nền di sản.',
        'Sai — <code>Cấm sửa chữa</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bảo tồn + tái sử dụng + tạo giá trị mới</code> vì bảo tồn động — sáng tạo trên nền di sản.',
        'Sai — <code>Sao chép nguyên xi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bảo tồn + tái sử dụng + tạo giá trị mới</code> vì bảo tồn động — sáng tạo trên nền di sản.',
        'Đúng — <code>Bảo tồn + tái sử dụng + tạo giá trị mới</code> là phương án chính xác. Bảo tồn động — sáng tạo trên nền di sản.',
      ]
    ),
  ]),

  M(32, 'Kinh tế Hà Nội — vai trò đầu tàu', [
    Q('Hà Nội đóng góp khoảng bao nhiêu vào GDP cả nước?', ['50%', '12–13%', '5%', '1%'], 1,
      'HN đóng góp khoảng 12–13% GDP quốc gia.',
      [
        '<b>Vai trò đầu tàu kinh tế</b>:',
        '<ul><li>Hà Nội đóng góp <code>~12–13% GDP cả nước</code>.</li><li>Trung tâm kinh tế lớn <i>thứ 2</i> sau TPHCM.</li><li>Cùng TPHCM là 2 đầu tàu kinh tế đất nước.</li></ul>',
        'TPHCM đóng góp ~22% GDP; HN là thứ 2 — chứng tỏ vai trò chiến lược.',
      ],
      [
        'Sai — <code>50%</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>12–13%</code> vì hN đóng góp khoảng 12–13% GDP quốc gia.',
        'Đúng — <code>12–13%</code> là phương án chính xác. HN đóng góp khoảng 12–13% GDP quốc gia.',
        'Sai — <code>5%</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>12–13%</code> vì hN đóng góp khoảng 12–13% GDP quốc gia.',
        'Sai — <code>1%</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>12–13%</code> vì hN đóng góp khoảng 12–13% GDP quốc gia.',
      ]
    ),
    Q('Ngành kinh tế chủ lực của HN?', ['Nông nghiệp', 'Đánh cá biển', 'Khai thác dầu', 'Dịch vụ – công nghiệp – CNTT'], 3,
      'Dịch vụ chiếm tỷ trọng lớn nhất.',
      [
        '<b>Cơ cấu kinh tế Hà Nội:</b>',
        '<ul><li><code>Dịch vụ ~64%</code>: tài chính, du lịch, thương mại.</li><li><code>Công nghiệp – xây dựng ~24%</code>: điện tử, dệt may, ô tô.</li><li><code>Nông nghiệp dưới 3%</code>.</li><li><b>CNTT</b>: FPT, Viettel, VNPT đặt trụ sở.</li></ul>',
        'HN nằm sâu trong đất liền → không có đánh cá biển hay khai thác dầu.',
      ],
      [
        'Sai — <code>Nông nghiệp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dịch vụ – công nghiệp – CNTT</code> vì dịch vụ chiếm tỷ trọng lớn nhất.',
        'Sai — <code>Đánh cá biển</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dịch vụ – công nghiệp – CNTT</code> vì dịch vụ chiếm tỷ trọng lớn nhất.',
        'Sai — <code>Khai thác dầu</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dịch vụ – công nghiệp – CNTT</code> vì dịch vụ chiếm tỷ trọng lớn nhất.',
        'Đúng — <code>Dịch vụ – công nghiệp – CNTT</code> là phương án chính xác. Dịch vụ chiếm tỷ trọng lớn nhất.',
      ]
    ),
    Q('Khu công nghệ cao Hoà Lạc thuộc huyện?', ['Phú Xuyên', 'Đông Anh', 'Thạch Thất', 'Mỹ Đức'], 2,
      'Khu CNC Hoà Lạc — huyện Thạch Thất.',
      [
        '<b>Khu công nghệ cao Hoà Lạc</b>:',
        '<ul><li>Thuộc huyện <code>Thạch Thất</code>.</li><li>Diện tích khoảng <code>1 586 ha</code>.</li><li>"<i>Thung lũng Silicon</i>" của Việt Nam.</li><li>Có <b>Viettel R&D, FPT University, Trung tâm Đổi mới sáng tạo Quốc gia</b>.</li></ul>',
        'Cách trung tâm HN khoảng 30 km — đủ xa để mở rộng, đủ gần để kết nối.',
      ],
      [
        'Sai — <code>Phú Xuyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thạch Thất</code> vì khu CNC Hoà Lạc — huyện Thạch Thất.',
        'Sai — <code>Đông Anh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thạch Thất</code> vì khu CNC Hoà Lạc — huyện Thạch Thất.',
        'Đúng — <code>Thạch Thất</code> là phương án chính xác. Khu CNC Hoà Lạc — huyện Thạch Thất.',
        'Sai — <code>Mỹ Đức</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thạch Thất</code> vì khu CNC Hoà Lạc — huyện Thạch Thất.',
      ]
    ),
    Q('Trung tâm tài chính – ngân hàng tập trung ở phố?', ['Quảng An', 'Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo', 'Phố sách', 'Khâm Thiên'], 1,
      'Khu vực ngân hàng – tài chính trung tâm.',
      [
        '<b>Trục phố tài chính – ngân hàng Hà Nội:</b>',
        '<ul><li><code>Lý Thái Tổ – Ngô Quyền – Trần Hưng Đạo – Lý Thường Kiệt</code>.</li><li>Trụ sở các ngân hàng lớn: <i>BIDV, Vietcombank, VietinBank, Techcombank, SHB</i>.</li></ul>',
        'Khu vực quanh Hồ Gươm — vốn là khu phố Pháp xây cho ngân hàng – công sở.',
      ],
      [
        'Sai — <code>Quảng An</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo</code> vì khu vực ngân hàng – tài chính trung tâm.',
        'Đúng — <code>Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo</code> là phương án chính xác. Khu vực ngân hàng – tài chính trung tâm.',
        'Sai — <code>Phố sách</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo</code> vì khu vực ngân hàng – tài chính trung tâm.',
        'Sai — <code>Khâm Thiên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ngô Quyền – Lý Thái Tổ – Trần Hưng Đạo</code> vì khu vực ngân hàng – tài chính trung tâm.',
      ]
    ),
    Q('Mặt hàng xuất khẩu chủ lực của HN gồm?', ['Điện thoại, linh kiện điện tử, dệt may, da giày', 'Chỉ thuỷ sản', 'Chỉ gạo', 'Chỉ cà phê'], 0,
      'Đa dạng — điện tử, dệt may là chủ lực.',
      [
        '<b>Mặt hàng xuất khẩu chủ lực:</b>',
        '<ul><li><code>Điện thoại và linh kiện điện tử</code> (Samsung, Canon).</li><li><code>Máy tính, dệt may, da giày</code>.</li><li>Nông sản chế biến.</li></ul>',
        'Đa dạng và có <b>giá trị gia tăng cao</b> — không chỉ là nông sản thô như nhiều tỉnh khác.',
      ],
      [
        'Đúng — <code>Điện thoại, linh kiện điện tử, dệt may, da giày</code> là phương án chính xác. Đa dạng — điện tử, dệt may là chủ lực.',
        'Sai — <code>Chỉ thuỷ sản</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Điện thoại, linh kiện điện tử, dệt may, da giày</code> vì đa dạng — điện tử, dệt may là chủ lực.',
        'Sai — <code>Chỉ gạo</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Điện thoại, linh kiện điện tử, dệt may, da giày</code> vì đa dạng — điện tử, dệt may là chủ lực.',
        'Sai — <code>Chỉ cà phê</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Điện thoại, linh kiện điện tử, dệt may, da giày</code> vì đa dạng — điện tử, dệt may là chủ lực.',
      ]
    ),
    Q('Khu đô thị mới phía Tây HN tiêu biểu là?', ['Phú Mỹ Hưng', 'Long Bình', 'Mỹ Đình – Mễ Trì – Cầu Giấy', 'Thủ Thiêm'], 2,
      'Khu vực phát triển nhanh nhất 20 năm qua.',
      [
        '<b>Khu đô thị mới phía Tây HN:</b>',
        '<ul><li><code>Mỹ Đình – Mễ Trì – Cầu Giấy – Tây Hồ Tây</code>.</li><li>Phát triển nhanh nhất <i>20 năm qua</i>.</li><li>Tập trung trụ sở doanh nghiệp, chung cư cao cấp.</li></ul>',
        'Phú Mỹ Hưng, Thủ Thiêm ở TPHCM — không phải Hà Nội.',
      ],
      [
        'Sai — <code>Phú Mỹ Hưng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ Đình – Mễ Trì – Cầu Giấy</code> vì khu vực phát triển nhanh nhất 20 năm qua.',
        'Sai — <code>Long Bình</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ Đình – Mễ Trì – Cầu Giấy</code> vì khu vực phát triển nhanh nhất 20 năm qua.',
        'Đúng — <code>Mỹ Đình – Mễ Trì – Cầu Giấy</code> là phương án chính xác. Khu vực phát triển nhanh nhất 20 năm qua.',
        'Sai — <code>Thủ Thiêm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Mỹ Đình – Mễ Trì – Cầu Giấy</code> vì khu vực phát triển nhanh nhất 20 năm qua.',
      ]
    ),
  ]),

  M(33, 'Phong trào thanh niên – học sinh Hà Nội', [
    Q('Tổ chức Đội của HS THCS gọi là?', ['Hội Sinh viên', 'Hội Phụ nữ', 'Đội Thiếu niên Tiền phong Hồ Chí Minh', 'Hội Nhà văn'], 2,
      'Đội TNTP HCM — tổ chức của thiếu niên.',
      [
        '<b>Đội Thiếu niên Tiền phong Hồ Chí Minh</b>:',
        '<ul><li>Tổ chức của thiếu niên Việt Nam.</li><li>Lứa tuổi: <code>9 – 15</code> (tiểu học và THCS).</li><li>Khẩu hiệu: "<i>Vì Tổ quốc xã hội chủ nghĩa, vì lý tưởng của Bác Hồ vĩ đại — Sẵn sàng!</i>"</li></ul>',
        'Hội Sinh viên dành cho SV ĐH; Hội Phụ nữ và Hội Nhà văn cho người lớn.',
      ],
      [
        'Sai — <code>Hội Sinh viên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đội Thiếu niên Tiền phong Hồ Chí Minh</code> vì đội TNTP HCM — tổ chức của thiếu niên.',
        'Sai — <code>Hội Phụ nữ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đội Thiếu niên Tiền phong Hồ Chí Minh</code> vì đội TNTP HCM — tổ chức của thiếu niên.',
        'Đúng — <code>Đội Thiếu niên Tiền phong Hồ Chí Minh</code> là phương án chính xác. Đội TNTP HCM — tổ chức của thiếu niên.',
        'Sai — <code>Hội Nhà văn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đội Thiếu niên Tiền phong Hồ Chí Minh</code> vì đội TNTP HCM — tổ chức của thiếu niên.',
      ]
    ),
    Q('Đoàn TNCS HCM dành cho lứa tuổi?', ['11–15', '16–30', '40+', '6–10'], 1,
      'Đoàn TN từ 16 đến 30 tuổi.',
      [
        '<b>Đoàn Thanh niên Cộng sản Hồ Chí Minh</b>:',
        '<ul><li>Lứa tuổi <code>16 – 30</code>.</li><li>Là tổ chức chính trị – xã hội của thanh niên.</li></ul>',
        '<b>Hệ thống tổ chức tuổi trẻ Việt Nam:</b><ul><li>Đội: 9 – 15 tuổi.</li><li>Đoàn: 16 – 30 tuổi.</li><li>Hội Sinh viên: SV ĐH – CĐ.</li></ul>',
      ],
      [
        'Sai — <code>11–15</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>16–30</code> vì đoàn TN từ 16 đến 30 tuổi.',
        'Đúng — <code>16–30</code> là phương án chính xác. Đoàn TN từ 16 đến 30 tuổi. Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
        'Sai — <code>40+</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>16–30</code> vì đoàn TN từ 16 đến 30 tuổi.',
        'Sai — <code>6–10</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>16–30</code> vì đoàn TN từ 16 đến 30 tuổi.',
      ]
    ),
    Q('Phong trào "Kế hoạch nhỏ" do tổ chức nào phát động?', ['Hội phụ huynh', 'Đội TNTP HCM', 'UNICEF', 'Bộ Y tế'], 1,
      'Kế hoạch nhỏ truyền thống của Đội.',
      [
        '<b>Phong trào "Kế hoạch nhỏ"</b>:',
        '<ul><li>Do <code>Đội TNTP HCM</code> phát động.</li><li>Mỗi đội viên góp <i>giấy báo cũ, vỏ lon</i>.</li><li>Bán lấy tiền <b>gây quỹ làm việc nghĩa</b>.</li></ul>',
        'Vừa tiết kiệm tài nguyên (tái chế), vừa giúp đỡ bạn nghèo — phong trào truyền thống.',
      ],
      [
        'Sai — <code>Hội phụ huynh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đội TNTP HCM</code> vì kế hoạch nhỏ truyền thống của Đội.',
        'Đúng — <code>Đội TNTP HCM</code> là phương án chính xác. Kế hoạch nhỏ truyền thống của Đội.',
        'Sai — <code>UNICEF</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đội TNTP HCM</code> vì kế hoạch nhỏ truyền thống của Đội.',
        'Sai — <code>Bộ Y tế</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đội TNTP HCM</code> vì kế hoạch nhỏ truyền thống của Đội.',
      ]
    ),
    Q('"Áo xanh tình nguyện" gắn với phong trào?', ['Cờ vua', 'Tình nguyện hè / Tiếp sức mùa thi', 'Đua thuyền', 'Đua xe'], 1,
      'Mùa hè xanh, Tiếp sức mùa thi.',
      [
        '<b>"Áo xanh tình nguyện"</b>:',
        '<ul><li>Biểu tượng của sinh viên tình nguyện.</li><li>Phong trào tiêu biểu: <code>"Mùa hè xanh", "Tiếp sức mùa thi"</code>.</li><li>Đi tình nguyện vùng cao, hỗ trợ thí sinh kỳ thi.</li></ul>',
        'Là phong trào do Đoàn – Hội tổ chức.',
      ],
      [
        'Sai — <code>Cờ vua</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tình nguyện hè / Tiếp sức mùa thi</code> vì mùa hè xanh, Tiếp sức mùa thi.',
        'Đúng — <code>Tình nguyện hè / Tiếp sức mùa thi</code> là phương án chính xác. Mùa hè xanh, Tiếp sức mùa thi.',
        'Sai — <code>Đua thuyền</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tình nguyện hè / Tiếp sức mùa thi</code> vì mùa hè xanh, Tiếp sức mùa thi.',
        'Sai — <code>Đua xe</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tình nguyện hè / Tiếp sức mùa thi</code> vì mùa hè xanh, Tiếp sức mùa thi.',
      ]
    ),
    Q('Em có thể tham gia hoạt động cộng đồng ở HN qua?', ['Câu lạc bộ tình nguyện ở trường, phường', 'Đóng cửa ở nhà', 'Đứng nhìn', 'Không cần tham gia'], 0,
      'CLB tình nguyện, Đội, Đoàn.',
      [
        '<b>Cách tham gia hoạt động cộng đồng:</b>',
        '<ul><li>CLB tình nguyện ở <code>trường, phường</code>.</li><li>Tham gia <i>Đội, Đoàn</i> các cấp.</li><li>Hoạt động: vệ sinh phố, tổ chức Trung thu, giúp người già neo đơn.</li></ul>',
        'Đóng cửa ở nhà / đứng nhìn → không phát triển bản thân, không đóng góp cho cộng đồng.',
      ],
      [
        'Đúng — <code>Câu lạc bộ tình nguyện ở trường, phường</code> là phương án chính xác. CLB tình nguyện, Đội, Đoàn.',
        'Sai — <code>Đóng cửa ở nhà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Câu lạc bộ tình nguyện ở trường, phường</code> vì cLB tình nguyện, Đội, Đoàn.',
        'Sai — <code>Đứng nhìn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Câu lạc bộ tình nguyện ở trường, phường</code> vì cLB tình nguyện, Đội, Đoàn.',
        'Sai — <code>Không cần tham gia</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Câu lạc bộ tình nguyện ở trường, phường</code> vì cLB tình nguyện, Đội, Đoàn.',
      ]
    ),
    Q('Lợi ích khi tham gia phong trào tình nguyện?', ['Không có lợi', 'Bị trừ điểm', 'Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng', 'Mất thời gian học vô ích'], 2,
      'Học từ thực tế, rèn kỹ năng sống.',
      [
        '<b>Lợi ích của hoạt động tình nguyện:</b>',
        '<ul><li>Phát triển <code>kỹ năng giao tiếp, làm việc nhóm, lãnh đạo</code>.</li><li>Mở rộng <i>bạn bè</i>.</li><li>Rèn <b>tự tin, trách nhiệm</b>.</li><li>Tìm thấy sở thích – nghề nghiệp tương lai.</li></ul>',
        'Hoạt động cộng đồng dạy em điều mà <i>sách vở không dạy</i>.',
      ],
      [
        'Sai — <code>Không có lợi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng</code> vì học từ thực tế, rèn kỹ năng sống.',
        'Sai — <code>Bị trừ điểm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng</code> vì học từ thực tế, rèn kỹ năng sống.',
        'Đúng — <code>Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng</code> là phương án chính xác. Học từ thực tế, rèn kỹ năng sống.',
        'Sai — <code>Mất thời gian học vô ích</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Phát triển kỹ năng, mở rộng quan hệ, giúp đỡ cộng đồng</code> vì học từ thực tế, rèn kỹ năng sống.',
      ]
    ),
  ]),

  M(34, 'Bảo vệ di sản văn hoá Hà Nội', [
    Q('Trách nhiệm bảo vệ di sản thuộc về?', ['Toàn xã hội, trong đó có học sinh', 'Chỉ chính quyền', 'Chỉ người lớn tuổi', 'Khách du lịch'], 0,
      'Mọi người dân, trong đó có học sinh.',
      [
        '<b>Trách nhiệm bảo vệ di sản:</b>',
        '<ul><li>Là <i>của toàn xã hội</i> — Nhà nước, chính quyền, người dân.</li><li>Học sinh cũng <code>có trách nhiệm</code>: tham quan đúng cách, tuyên truyền, tham gia CLB.</li></ul>',
        'Theo Luật Di sản Văn hoá: di sản là <b>sở hữu toàn dân</b> — mọi người có nghĩa vụ bảo vệ.',
      ],
      [
        'Đúng — <code>Toàn xã hội, trong đó có học sinh</code> là phương án chính xác. Mọi người dân, trong đó có học sinh.',
        'Sai — <code>Chỉ chính quyền</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Toàn xã hội, trong đó có học sinh</code> vì mọi người dân, trong đó có học sinh.',
        'Sai — <code>Chỉ người lớn tuổi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Toàn xã hội, trong đó có học sinh</code> vì mọi người dân, trong đó có học sinh.',
        'Sai — <code>Khách du lịch</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Toàn xã hội, trong đó có học sinh</code> vì mọi người dân, trong đó có học sinh.',
      ]
    ),
    Q('Hành vi nào KHÔNG bảo vệ di sản?', ['Mua vé vào di tích', 'Tham quan có hướng dẫn', 'Khắc tên lên bia đá Văn Miếu', 'Giữ vệ sinh'], 2,
      'Khắc/viết bậy lên di tích là phá hoại.',
      [
        '<b>Hành vi phá hoại di sản:</b>',
        '<ul><li><code>Khắc tên lên bia đá Văn Miếu</code> — đã có vụ vi phạm thực tế.</li><li>Vẽ bậy lên tường Hoàng thành.</li><li>Sờ, leo trèo hiện vật.</li><li>Xả rác trong khu di tích.</li></ul>',
        'Vi phạm <b>Luật Di sản Văn hoá</b> — đáng lên án.',
      ],
      [
        'Sai — <code>Mua vé vào di tích</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khắc tên lên bia đá Văn Miếu</code> vì khắc/viết bậy lên di tích là phá hoại.',
        'Sai — <code>Tham quan có hướng dẫn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khắc tên lên bia đá Văn Miếu</code> vì khắc/viết bậy lên di tích là phá hoại.',
        'Đúng — <code>Khắc tên lên bia đá Văn Miếu</code> là phương án chính xác. Khắc/viết bậy lên di tích là phá hoại.',
        'Sai — <code>Giữ vệ sinh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khắc tên lên bia đá Văn Miếu</code> vì khắc/viết bậy lên di tích là phá hoại.',
      ]
    ),
    Q('Luật Di sản Văn hoá hiện hành quy định di sản?', ['Của doanh nghiệp', 'Của cá nhân', 'Có thể tự do mua bán', 'Là sở hữu chung của Nhà nước và nhân dân'], 3,
      'Sở hữu toàn dân, Nhà nước quản lí.',
      [
        '<b>Luật Di sản Văn hoá (2001, sửa đổi 2009)</b>:',
        '<ul><li>Di sản là <code>sở hữu toàn dân</code>.</li><li>Nhà nước <i>thống nhất quản lí</i>.</li><li>Cấm: chiếm đoạt, mua bán trái phép, phá hoại.</li></ul>',
        'Không thuộc về doanh nghiệp hay cá nhân — không được tự do mua bán.',
      ],
      [
        'Sai — <code>Của doanh nghiệp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Là sở hữu chung của Nhà nước và nhân dân</code> vì sở hữu toàn dân, Nhà nước quản lí.',
        'Sai — <code>Của cá nhân</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Là sở hữu chung của Nhà nước và nhân dân</code> vì sở hữu toàn dân, Nhà nước quản lí.',
        'Sai — <code>Có thể tự do mua bán</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Là sở hữu chung của Nhà nước và nhân dân</code> vì sở hữu toàn dân, Nhà nước quản lí.',
        'Đúng — <code>Là sở hữu chung của Nhà nước và nhân dân</code> là phương án chính xác. Sở hữu toàn dân, Nhà nước quản lí.',
      ]
    ),
    Q('Khi phát hiện cổ vật ngẫu nhiên, công dân cần?', ['Vứt đi', 'Bán ra nước ngoài', 'Báo cơ quan văn hoá / chính quyền', 'Giữ làm của riêng'], 2,
      'Báo cáo theo Luật Di sản.',
      [
        '<b>Khi phát hiện cổ vật:</b>',
        '<ul><li>Phải <code>báo cơ quan văn hoá hoặc chính quyền</code> địa phương.</li><li>Theo <i>Luật Di sản Văn hoá</i>.</li><li>Không được giữ làm của riêng hay bán đi.</li></ul>',
        'Cổ vật thuộc <b>sở hữu toàn dân</b> — bán đi là vi phạm pháp luật.',
      ],
      [
        'Sai — <code>Vứt đi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Báo cơ quan văn hoá / chính quyền</code> vì báo cáo theo Luật Di sản.',
        'Sai — <code>Bán ra nước ngoài</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Báo cơ quan văn hoá / chính quyền</code> vì báo cáo theo Luật Di sản.',
        'Đúng — <code>Báo cơ quan văn hoá / chính quyền</code> là phương án chính xác. Báo cáo theo Luật Di sản.',
        'Sai — <code>Giữ làm của riêng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Báo cơ quan văn hoá / chính quyền</code> vì báo cáo theo Luật Di sản.',
      ]
    ),
    Q('Hoạt động học sinh có thể làm để bảo vệ di sản?', ['Khắc tên', 'Đốt giấy mã trong di tích', 'Phá tường', 'Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ'], 3,
      'CLB di sản, hướng dẫn viên nhí.',
      [
        '<b>Học sinh có thể làm gì:</b>',
        '<ul><li>Tham gia <code>CLB "Em yêu di sản"</code> tại trường, phường.</li><li>Làm <i>hướng dẫn viên nhí</i> cuối tuần ở Văn Miếu, Hoàng thành.</li><li>Tuyên truyền cho bạn bè, du khách qua bài viết, video.</li><li>Tham gia ngày làm sạch di tích.</li></ul>',
        'Các phương án còn lại đều là hành vi <b>phá hoại</b> — cấm tuyệt đối.',
      ],
      [
        'Sai — <code>Khắc tên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ</code> vì cLB di sản, hướng dẫn viên nhí.',
        'Sai — <code>Đốt giấy mã trong di tích</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ</code> vì cLB di sản, hướng dẫn viên nhí.',
        'Sai — <code>Phá tường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ</code> vì cLB di sản, hướng dẫn viên nhí.',
        'Đúng — <code>Tham gia CLB, tuyên truyền, làm hướng dẫn viên nhỏ</code> là phương án chính xác. CLB di sản, hướng dẫn viên nhí.',
      ]
    ),
    Q('Khi tham quan di sản nên?', ['Mặc đồ tắm', 'Ăn mặc lịch sự, đi nhẹ – nói khẽ', 'Nghe nhạc to', 'Hò hét'], 1,
      'Tôn trọng không gian thiêng.',
      [
        '<b>Ứng xử khi tham quan di sản:</b>',
        '<ul><li>Ăn mặc <code>lịch sự</code>, đặc biệt ở <i>chùa, đền, nhà thờ</i>.</li><li>Đi nhẹ – nói khẽ – cười duyên.</li><li>Tôn trọng người đang lễ.</li><li>Chụp ảnh đúng nơi quy định.</li></ul>',
        'Mặc đồ tắm, nghe nhạc to, hò hét — đều thể hiện sự <b>thiếu tôn trọng</b>.',
      ],
      [
        'Sai — <code>Mặc đồ tắm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ăn mặc lịch sự, đi nhẹ – nói khẽ</code> vì tôn trọng không gian thiêng.',
        'Đúng — <code>Ăn mặc lịch sự, đi nhẹ – nói khẽ</code> là phương án chính xác. Tôn trọng không gian thiêng.',
        'Sai — <code>Nghe nhạc to</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ăn mặc lịch sự, đi nhẹ – nói khẽ</code> vì tôn trọng không gian thiêng.',
        'Sai — <code>Hò hét</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Ăn mặc lịch sự, đi nhẹ – nói khẽ</code> vì tôn trọng không gian thiêng.',
      ]
    ),
  ]),

  M(35, 'Hà Nội trong tương lai — quy hoạch và phát triển bền vững', [
    Q('Quy hoạch chung HN đến 2045 hướng đến mô hình?', ['Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan', 'Khu công nghiệp lớn', 'Nông thôn', 'Đô thị nén siêu lớn'], 0,
      'Đề án "Thành phố sông Hồng" và đô thị thông minh.',
      [
        '<b>Quy hoạch Hà Nội đến 2045</b>:',
        '<ul><li><code>Thành phố thông minh, xanh</code>.</li><li><i>Sông Hồng làm trục cảnh quan trung tâm</i>.</li><li>Phát triển <b>5 đô thị vệ tinh</b>: Hoà Lạc, Sơn Tây, Xuân Mai, Phú Xuyên, Sóc Sơn.</li></ul>',
        'Không phải khu công nghiệp lớn, nông thôn, hay đô thị nén siêu lớn — mà là mô hình bền vững.',
      ],
      [
        'Đúng — <code>Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan</code> là phương án chính xác. Đề án "Thành phố sông Hồng" và đô thị thông minh.',
        'Sai — <code>Khu công nghiệp lớn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan</code> vì đề án "Thành phố sông Hồng" và đô thị thông minh.',
        'Sai — <code>Nông thôn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan</code> vì đề án "Thành phố sông Hồng" và đô thị thông minh.',
        'Sai — <code>Đô thị nén siêu lớn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Thành phố thông minh, xanh, sông Hồng làm trục cảnh quan</code> vì đề án "Thành phố sông Hồng" và đô thị thông minh.',
      ]
    ),
    Q('Khái niệm "đô thị thông minh" liên quan?', ['Trang trí đèn đẹp', 'Chỉ là nhà cao tầng', 'Không liên quan công nghệ', 'Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công'], 3,
      'Smart city = data + IoT + dịch vụ số.',
      [
        '<b>Đô thị thông minh (Smart City)</b>:',
        '<ul><li>Sử dụng <code>dữ liệu lớn (Big Data), IoT, AI</code>.</li><li>Quản lí <i>giao thông, môi trường, y tế, dịch vụ công</i>.</li><li>Ví dụ: đèn giao thông tự điều chỉnh, cảm biến quan trắc không khí, dịch vụ công trực tuyến.</li></ul>',
        'Khác đô thị thường: <b>dùng công nghệ – dữ liệu</b> để quyết định và phục vụ người dân.',
      ],
      [
        'Sai — <code>Trang trí đèn đẹp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công</code> vì smart city = data + IoT + dịch vụ số.',
        'Sai — <code>Chỉ là nhà cao tầng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công</code> vì smart city = data + IoT + dịch vụ số.',
        'Sai — <code>Không liên quan công nghệ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công</code> vì smart city = data + IoT + dịch vụ số.',
        'Đúng — <code>Dùng dữ liệu và CNTT để quản lí giao thông – môi trường – dịch vụ công</code> là phương án chính xác. Smart city = data + IoT + dịch vụ số.',
      ]
    ),
    Q('Phát triển bền vững là?', ['Bỏ qua môi trường', 'Phát triển bằng mọi giá', 'Khai thác cạn kiệt tài nguyên', 'Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai'], 3,
      'Định nghĩa kinh điển (UN 1987).',
      [
        '<b>Phát triển bền vững</b> — định nghĩa của UN (1987):',
        '<ul><li>"<i>Phát triển đáp ứng nhu cầu hiện tại mà không tổn hại khả năng đáp ứng nhu cầu của các thế hệ tương lai</i>".</li><li>3 trụ cột: <code>kinh tế – xã hội – môi trường</code>.</li></ul>',
        'Khai thác cạn kiệt, bỏ qua môi trường — đều là <b>không bền vững</b>.',
      ],
      [
        'Sai — <code>Bỏ qua môi trường</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai</code> vì định nghĩa kinh điển (UN 1987).',
        'Sai — <code>Phát triển bằng mọi giá</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai</code> vì định nghĩa kinh điển (UN 1987).',
        'Sai — <code>Khai thác cạn kiệt tài nguyên</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai</code> vì định nghĩa kinh điển (UN 1987).',
        'Đúng — <code>Đáp ứng nhu cầu hiện tại không ảnh hưởng thế hệ tương lai</code> là phương án chính xác. Định nghĩa kinh điển (UN 1987).',
      ]
    ),
    Q('Mục tiêu khí hậu cho HN đến 2050?', ['Trung hoà carbon (theo cam kết quốc gia)', 'Tăng phát thải', 'Không quan tâm', 'Đốt nhiều nhiên liệu hơn'], 0,
      'VN cam kết net-zero 2050 tại COP26.',
      [
        '<b>Mục tiêu net-zero 2050</b>:',
        '<ul><li>Việt Nam cam kết <code>trung hoà carbon (net-zero) đến 2050</code> tại <i>Hội nghị COP26</i>.</li><li>Hà Nội đặt mục tiêu cùng với cả nước.</li></ul>',
        'Các giải pháp: <b>tăng cây xanh, giảm xe máy xăng, phủ kín metro, xử lí 100% nước thải</b>.',
      ],
      [
        'Đúng — <code>Trung hoà carbon (theo cam kết quốc gia)</code> là phương án chính xác. VN cam kết net-zero 2050 tại COP26.',
        'Sai — <code>Tăng phát thải</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trung hoà carbon (theo cam kết quốc gia)</code> vì vN cam kết net-zero 2050 tại COP26.',
        'Sai — <code>Không quan tâm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trung hoà carbon (theo cam kết quốc gia)</code> vì vN cam kết net-zero 2050 tại COP26.',
        'Sai — <code>Đốt nhiều nhiên liệu hơn</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Trung hoà carbon (theo cam kết quốc gia)</code> vì vN cam kết net-zero 2050 tại COP26.',
      ]
    ),
    Q('Em có thể đóng góp gì cho HN bền vững?', ['Lãng phí nước', 'Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây', 'Xả rác xuống hồ', 'Đốt rác trong nhà'], 1,
      'Hành động nhỏ, ý nghĩa lớn.',
      [
        '<b>Học sinh đóng góp cho HN bền vững:</b>',
        '<ul><li>Đi học bằng <code>xe buýt, xe đạp</code> thay xe máy.</li><li>Trồng cây ban công, sân trường.</li><li><i>Phân loại rác</i> tại nhà.</li><li>Tiết kiệm <code>điện – nước</code>.</li></ul>',
        'Hành động nhỏ hàng ngày, nhưng nhân với <b>8 triệu người</b> → tác động lớn.',
      ],
      [
        'Sai — <code>Lãng phí nước</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây</code> vì hành động nhỏ, ý nghĩa lớn.',
        'Đúng — <code>Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây</code> là phương án chính xác. Hành động nhỏ, ý nghĩa lớn.',
        'Sai — <code>Xả rác xuống hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây</code> vì hành động nhỏ, ý nghĩa lớn.',
        'Sai — <code>Đốt rác trong nhà</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Đi xe đạp, phân loại rác, tiết kiệm điện nước, trồng cây</code> vì hành động nhỏ, ý nghĩa lớn.',
      ]
    ),
    Q('Tinh thần công dân Thủ đô là?', ['Lãng phí', 'Vô cảm', 'Phá phách', 'Văn minh – hiện đại – yêu Hà Nội'], 3,
      'Khẩu hiệu giáo dục công dân HN.',
      [
        '<b>Tinh thần công dân Thủ đô:</b>',
        '<ul><li>"<b>Văn minh – Hiện đại – Yêu Hà Nội</b>".</li><li>Khẩu hiệu giáo dục công dân HN.</li><li>Mỗi học sinh là một công dân tương lai của Thủ đô.</li></ul>',
        'Khác hẳn với lãng phí, vô cảm, phá phách — đó là những hành vi <b>không xứng đáng</b> với người Hà Nội.',
      ],
      [
        'Sai — <code>Lãng phí</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Văn minh – hiện đại – yêu Hà Nội</code> vì khẩu hiệu giáo dục công dân HN.',
        'Sai — <code>Vô cảm</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Văn minh – hiện đại – yêu Hà Nội</code> vì khẩu hiệu giáo dục công dân HN.',
        'Sai — <code>Phá phách</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Văn minh – hiện đại – yêu Hà Nội</code> vì khẩu hiệu giáo dục công dân HN.',
        'Đúng — <code>Văn minh – hiện đại – yêu Hà Nội</code> là phương án chính xác. Khẩu hiệu giáo dục công dân HN.',
      ]
    ),
  ]),

  M(36, 'Ôn tập HK2 — Hà Nội ngàn năm văn hiến', [
    Q('Làng gốm cổ ở Gia Lâm?', ['Làng Bưởi (giấy dó vùng Tây Hồ)', 'Đông Hồ', 'Bát Tràng', 'Vạn Phúc'], 2,
      'Bát Tràng — gốm 700 năm.',
      [
        '<b>Bát Tràng (Gia Lâm)</b>:',
        '<ul><li>Làng gốm <code>700 năm tuổi</code>.</li><li>Sản phẩm: bát đĩa, lọ hoa, đồ thờ.</li><li>Men rạn, men ngọc, men lam đặc trưng.</li></ul>',
        'Làng Bưởi (giấy dó – Tây Hồ); Đông Hồ (tranh – Bắc Ninh); Vạn Phúc (lụa – Hà Đông).',
      ],
      [
        'Sai — <code>Làng Bưởi (giấy dó vùng Tây Hồ)</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bát Tràng</code> vì bát Tràng — gốm 700 năm.',
        'Sai — <code>Đông Hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bát Tràng</code> vì bát Tràng — gốm 700 năm.',
        'Đúng — <code>Bát Tràng</code> là phương án chính xác. Bát Tràng — gốm 700 năm. Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
        'Sai — <code>Vạn Phúc</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Bát Tràng</code> vì bát Tràng — gốm 700 năm.',
      ]
    ),
    Q('Làng lụa nổi tiếng quận Hà Đông?', ['Phù Đổng', 'Đông Hồ', 'Vạn Phúc', 'Bát Tràng'], 2,
      'Vạn Phúc — lụa nghìn năm.',
      [
        '<b>Vạn Phúc (Hà Đông)</b>:',
        '<ul><li>Làng lụa nghìn năm.</li><li>Từng xuất khẩu sang Pháp.</li><li>Gắn với bài hát "<i>Áo lụa Hà Đông</i>".</li></ul>',
        'Phù Đổng (thờ Thánh Gióng – Gia Lâm); Bát Tràng (gốm); Đông Hồ (tranh).',
      ],
      [
        'Sai — <code>Phù Đổng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vạn Phúc</code> vì vạn Phúc — lụa nghìn năm.',
        'Sai — <code>Đông Hồ</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vạn Phúc</code> vì vạn Phúc — lụa nghìn năm.',
        'Đúng — <code>Vạn Phúc</code> là phương án chính xác. Vạn Phúc — lụa nghìn năm. Đây là kiến thức trọng tâm trong Tài liệu GDĐP Hà Nội lớp 6.',
        'Sai — <code>Bát Tràng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Vạn Phúc</code> vì vạn Phúc — lụa nghìn năm.',
      ]
    ),
    Q('Truyền thuyết "Sơn Tinh – Thuỷ Tinh" gắn núi?', ['Phan Xi Păng', 'Tản Viên (Ba Vì)', 'Yên Tử', 'Bà Đen'], 1,
      'Tản Viên — Sơn Tinh ngự đỉnh Tản.',
      [
        '<b>Núi Tản Viên (Ba Vì)</b>:',
        '<ul><li>Một trong 3 đỉnh núi Ba Vì.</li><li>Nơi ngự của <code>Sơn Tinh — Tản Viên Sơn Thánh</code>.</li><li>1 trong "<i>Tứ bất tử</i>" của tín ngưỡng Việt.</li></ul>',
        'Phan Xi Păng (Lào Cai); Yên Tử (Quảng Ninh); Bà Đen (Tây Ninh).',
      ],
      [
        'Sai — <code>Phan Xi Păng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tản Viên (Ba Vì)</code> vì tản Viên — Sơn Tinh ngự đỉnh Tản.',
        'Đúng — <code>Tản Viên (Ba Vì)</code> là phương án chính xác. Tản Viên — Sơn Tinh ngự đỉnh Tản.',
        'Sai — <code>Yên Tử</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tản Viên (Ba Vì)</code> vì tản Viên — Sơn Tinh ngự đỉnh Tản.',
        'Sai — <code>Bà Đen</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Tản Viên (Ba Vì)</code> vì tản Viên — Sơn Tinh ngự đỉnh Tản.',
      ]
    ),
    Q('Năm HN được UNESCO trao "Thành phố vì hoà bình"?', ['2010', '1999', '2019', '1989'], 1,
      '1999 — danh hiệu UNESCO đầu tiên cho HN.',
      [
        '<b>"Thành phố vì hoà bình" (1999)</b>:',
        '<ul><li>Hà Nội nhận năm <code>1999</code>.</li><li>Thành phố châu Á – Thái Bình Dương <i>đầu tiên</i> nhận danh hiệu.</li></ul>',
        '2 danh hiệu UNESCO: <code>1999 Vì hoà bình</code> và <code>2019 Sáng tạo (Thiết kế)</code>.',
      ],
      [
        'Sai — <code>2010</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1999</code> vì 1999 — danh hiệu UNESCO đầu tiên cho HN.',
        'Đúng — <code>1999</code> là phương án chính xác. 1999 — danh hiệu UNESCO đầu tiên cho HN.',
        'Sai — <code>2019</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1999</code> vì 1999 — danh hiệu UNESCO đầu tiên cho HN.',
        'Sai — <code>1989</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>1999</code> vì 1999 — danh hiệu UNESCO đầu tiên cho HN.',
      ]
    ),
    Q('Tuyến metro đầu tiên HN?', ['Yên Viên – Ngọc Hồi', 'Nhổn – Ga HN', 'Hà Đông – Xuân Mai', 'Cát Linh – Hà Đông'], 3,
      'Tuyến 2A Cát Linh – Hà Đông (2021).',
      [
        '<b>Metro Cát Linh – Hà Đông (tuyến 2A)</b>:',
        '<ul><li>Vận hành thương mại <code>11/2021</code>.</li><li>Là tuyến metro <i>đầu tiên Việt Nam</i>.</li><li>12 ga, dài 13 km.</li></ul>',
        'Nhổn – Ga HN (tuyến 3) vận hành 2024; Yên Viên – Ngọc Hồi đang xây.',
      ],
      [
        'Sai — <code>Yên Viên – Ngọc Hồi</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cát Linh – Hà Đông</code> vì tuyến 2A Cát Linh – Hà Đông (2021).',
        'Sai — <code>Nhổn – Ga HN</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cát Linh – Hà Đông</code> vì tuyến 2A Cát Linh – Hà Đông (2021).',
        'Sai — <code>Hà Đông – Xuân Mai</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Cát Linh – Hà Đông</code> vì tuyến 2A Cát Linh – Hà Đông (2021).',
        'Đúng — <code>Cát Linh – Hà Đông</code> là phương án chính xác. Tuyến 2A Cát Linh – Hà Đông (2021).',
      ]
    ),
    Q('"Hà Nội 36 phố phường" chỉ?', ['Cảng biển', 'Khu phố cổ Hoàn Kiếm', 'Vùng ngoại thành', 'Khu công nghiệp'], 1,
      'Khu phố cổ quận Hoàn Kiếm.',
      [
        '<b>"36 phố phường"</b>:',
        '<ul><li>Khu phố cổ quận <code>Hoàn Kiếm</code>.</li><li>Từ thời Lê, kinh thành chia thành 36 phường <i>thủ công – buôn bán</i>.</li><li>Tên phố thường bắt đầu bằng <code>Hàng</code> + mặt hàng.</li></ul>',
        'Được công nhận <b>Di tích lịch sử cấp Quốc gia</b> năm 2004.',
      ],
      [
        'Sai — <code>Cảng biển</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khu phố cổ Hoàn Kiếm</code> vì khu phố cổ quận Hoàn Kiếm.',
        'Đúng — <code>Khu phố cổ Hoàn Kiếm</code> là phương án chính xác. Khu phố cổ quận Hoàn Kiếm.',
        'Sai — <code>Vùng ngoại thành</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khu phố cổ Hoàn Kiếm</code> vì khu phố cổ quận Hoàn Kiếm.',
        'Sai — <code>Khu công nghiệp</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Khu phố cổ Hoàn Kiếm</code> vì khu phố cổ quận Hoàn Kiếm.',
      ]
    ),
    Q('Một di sản UNESCO ở HN?', ['Phong Nha', 'Vịnh Hạ Long', 'Tràng An', 'Hoàng thành Thăng Long'], 3,
      'Hoàng thành Thăng Long — Di sản UNESCO 2010.',
      [
        '<b>3 Di sản UNESCO ở Hà Nội (2010):</b>',
        '<ul><li><code>Hoàng thành Thăng Long</code> — Di sản Văn hoá.</li><li><code>82 bia Tiến sĩ Văn Miếu</code> — Di sản tư liệu.</li><li><code>Hội Gióng</code> — Di sản phi vật thể.</li></ul>',
        'Phong Nha (Quảng Bình); Vịnh Hạ Long (Quảng Ninh); Tràng An (Ninh Bình) — đều khác.',
      ],
      [
        'Sai — <code>Phong Nha</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng thành Thăng Long</code> vì hoàng thành Thăng Long — Di sản UNESCO 2010.',
        'Sai — <code>Vịnh Hạ Long</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng thành Thăng Long</code> vì hoàng thành Thăng Long — Di sản UNESCO 2010.',
        'Sai — <code>Tràng An</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Hoàng thành Thăng Long</code> vì hoàng thành Thăng Long — Di sản UNESCO 2010.',
        'Đúng — <code>Hoàng thành Thăng Long</code> là phương án chính xác. Hoàng thành Thăng Long — Di sản UNESCO 2010.',
      ]
    ),
    Q('Sự kiện 10/10/1954 là?', ['Vua dời đô', 'Thành lập Đảng', 'Quốc khánh', 'Giải phóng Thủ đô'], 3,
      '10/10/1954 — Giải phóng Thủ đô.',
      [
        '<b>10/10/1954 — Giải phóng Thủ đô</b>:',
        '<ul><li>Quân ta tiến vào Hà Nội từ <code>5 cửa ô</code>.</li><li>Theo Hiệp định Genève, Pháp rút khỏi miền Bắc.</li></ul>',
        'Phân biệt: <code>1010</code> Lý Thái Tổ dời đô; <code>3/2/1930</code> thành lập Đảng; <code>2/9/1945</code> Quốc khánh.',
      ],
      [
        'Sai — <code>Vua dời đô</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải phóng Thủ đô</code> vì 10/10/1954 — Giải phóng Thủ đô.',
        'Sai — <code>Thành lập Đảng</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải phóng Thủ đô</code> vì 10/10/1954 — Giải phóng Thủ đô.',
        'Sai — <code>Quốc khánh</code> không khớp ngữ cảnh câu hỏi. Đáp án đúng là <code>Giải phóng Thủ đô</code> vì 10/10/1954 — Giải phóng Thủ đô.',
        'Đúng — <code>Giải phóng Thủ đô</code> là phương án chính xác. 10/10/1954 — Giải phóng Thủ đô.',
      ]
    ),
  ]),

];

export const S6GDDP_SCENARIOS = indexBy(S6GDDP_WEEKS);
