// ============================================================
// Lớp 6 · KHOA HỌC TỰ NHIÊN (KHTN) — 36 tuần (HK1: 1–18 · HK2: 19–36)
// Bám CT GDPT 2018: tích hợp Vật lý + Hoá học + Sinh học.
// HK1: Mở đầu KHTN · Đo lường · Chất – Vật liệu – Nhiên liệu · Hỗn hợp · Tế bào.
// HK2: Cơ thể đa bào · Phân loại sinh giới · Lực · Năng lượng · Trái Đất – Hệ Mặt Trời.
// ID prefix: "S6KHTN-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('S6KHTN', 'khtn', n, title, qs, opts);

export const S6KHTN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Giới thiệu Khoa học tự nhiên — các lĩnh vực, vai trò', [
    Q('Khoa học tự nhiên (KHTN) là ngành khoa học nghiên cứu về?',
      ['Lịch sử các triều đại', 'Tâm lý con người', 'Các hiện tượng, sự vật trong tự nhiên', 'Luật pháp xã hội'], 2,
      'KHTN nghiên cứu các sự vật, hiện tượng trong thế giới tự nhiên — từ hòn đá, giọt nước cho tới các vì sao.',
      [
        '<b>Khoa học tự nhiên (KHTN)</b> là ngành khoa học nghiên cứu các <i>sự vật, hiện tượng trong tự nhiên</i> và tìm ra quy luật của chúng.',
        'Đối tượng nghiên cứu rất rộng: <code>hòn đá, giọt nước, cây cối, con vật, các vì sao…</code>',
        '<ul><li>Mục tiêu: hiểu được thế giới quanh ta.</li><li>Ứng dụng: tạo ra điện, máy móc, thuốc, vắc-xin…</li></ul>',
        '🚫 KHTN <b>KHÔNG</b> nghiên cứu lịch sử, luật pháp hay tâm lý — đó là các ngành khoa học xã hội.',
      ],
      [
        'Sai — vì <b>Lịch sử các triều đại</b> thuộc lĩnh vực <b>Lịch sử</b> (khoa học xã hội), không thuộc Khoa học tự nhiên. Đáp án đúng là <b>Các hiện tượng, sự vật trong tự nhiên</b>.',
        'Sai — vì <b>Tâm lý con người</b> thuộc lĩnh vực <b>Tâm lý học</b> (khoa học xã hội), không phải đối tượng của KHTN. Đáp án đúng là <b>Các hiện tượng, sự vật trong tự nhiên</b>.',
        'Đúng — <b>Các hiện tượng, sự vật trong tự nhiên</b> là đáp án chính xác. KHTN nghiên cứu các sự vật, hiện tượng trong thế giới tự nhiên — từ hòn đá, giọt nước cho tới các vì sao.',
        'Sai — vì <b>Luật pháp xã hội</b> thuộc lĩnh vực <b>khoa học xã hội</b>, không phải KHTN. Đáp án đúng là <b>Các hiện tượng, sự vật trong tự nhiên</b>.',
      ]
    ),
    Q('KHTN ở Lớp 6 tích hợp các phân môn nào?',
      ['Toán, Văn, Anh', 'Nhạc, Hoạ, Thể dục', 'Vật lý, Hoá học, Sinh học', 'Sử, Địa, GDCD'], 2,
      'KHTN 6 tích hợp 3 lĩnh vực: <b>Vật lý – Hoá học – Sinh học</b>.',
      [
        'Theo Chương trình GDPT 2018, môn <b>KHTN cấp THCS</b> tích hợp ba phân môn truyền thống:',
        '<ul><li><b>Vật lý</b>: chuyển động, lực, năng lượng, ánh sáng, âm thanh.</li><li><b>Hoá học</b>: chất, sự biến đổi của chất, vật liệu quanh ta.</li><li><b>Sinh học</b>: tế bào, thực vật, động vật, con người.</li></ul>',
        'Mục tiêu tích hợp: giúp em <i>nhìn tự nhiên một cách toàn diện</i>, không chia cắt rời rạc.',
      ],
      [
        'Sai — vì <b>Toán, Văn, Anh</b> không phải là phân môn của <b>KHTN</b> — Toán/Văn/Anh là môn riêng. Đáp án đúng là <b>Vật lý, Hoá học, Sinh học</b>.',
        'Sai — vì <b>Nhạc, Hoạ, Thể dục</b> thuộc nhóm môn nghệ thuật, không liên quan đến KHTN. Đáp án đúng là <b>Vật lý, Hoá học, Sinh học</b>.',
        'Đúng — <b>Vật lý, Hoá học, Sinh học</b> là đáp án chính xác. KHTN 6 tích hợp 3 lĩnh vực: Vật lý – Hoá học – Sinh học.',
        'Sai — vì <b>Sử, Địa, GDCD</b> thuộc khoa học xã hội (Lịch sử, Địa lý, GDCD), không phải KHTN. Đáp án đúng là <b>Vật lý, Hoá học, Sinh học</b>.',
      ]
    ),
    Q('Lĩnh vực nào nghiên cứu về sự sống, cây cối và động vật?',
      ['Sinh học', 'Hoá học', 'Vật lý', 'Thiên văn'], 0,
      '<b>Sinh học</b> nghiên cứu các <i>sinh vật sống</i> — từ vi khuẩn nhỏ đến con người.',
      [
        '<b>Sinh học (Biology)</b> là phân môn của KHTN nghiên cứu về <i>sự sống</i>.',
        '<ul><li>Đối tượng: vi khuẩn, nấm, thực vật, động vật, con người.</li><li>Câu hỏi điển hình: <code>Vì sao hạt đỗ nảy mầm? Tế bào hoạt động thế nào?</code></li></ul>',
        'Lớp 6 sẽ làm quen với <b>tế bào</b>, <b>phân loại sinh vật</b> và <b>đa dạng sinh học</b>.',
      ],
      [
        'Đúng — <b>Sinh học</b> là đáp án chính xác. Sinh học nghiên cứu các sinh vật sống — từ vi khuẩn nhỏ đến con người.',
        'Sai — vì <b>Hoá học</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh học</b>.',
        'Sai — vì <b>Vật lý</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh học</b>.',
        'Sai — vì <b>Thiên văn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh học</b>.',
      ]
    ),
    Q('Lĩnh vực nào nghiên cứu về chất và sự biến đổi của chất?',
      ['Vật lý', 'Y học', 'Hoá học', 'Sinh học'], 2,
      '<b>Hoá học</b> nghiên cứu <i>chất</i> và sự biến đổi của chất (cháy, hoà tan, phản ứng…).',
      [
        '<b>Hoá học (Chemistry)</b> nghiên cứu <i>chất</i> và <i>sự biến đổi của chất</i>.',
        'Ví dụ câu hỏi hoá học: <code>Vì sao sắt bị gỉ? Vì sao đường tan trong nước?</code>',
        '<ul><li>Lớp 6 học về: <b>thể của chất</b> (rắn – lỏng – khí), <b>oxygen</b>, <b>vật liệu</b>, <b>hỗn hợp</b>.</li></ul>',
      ],
      [
        'Sai — vì <b>Vật lý</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá học</b>.',
        'Sai — vì <b>Y học</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá học</b>.',
        'Đúng — <b>Hoá học</b> là đáp án chính xác. Hoá học nghiên cứu chất và sự biến đổi của chất (cháy, hoà tan, phản ứng…).',
        'Sai — vì <b>Sinh học</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá học</b>.',
      ]
    ),
    Q('Lĩnh vực nào nghiên cứu về chuyển động, lực, năng lượng?',
      ['Sinh học', 'Địa lý', 'Vật lý', 'Hoá học'], 2,
      '<b>Vật lý</b> nghiên cứu chuyển động, lực, năng lượng, ánh sáng, âm thanh.',
      [
        '<b>Vật lý (Physics)</b> nghiên cứu <i>sự vận động của vật chất</i> và <i>năng lượng</i>.',
        '<ul><li>Lớp 6 học: <b>đo lường</b>, <b>lực</b>, <b>năng lượng</b>, <b>Trái Đất – Hệ Mặt Trời</b>.</li><li>Ví dụ: <code>Vì sao quả táo rơi xuống đất? Vì sao có ngày và đêm?</code></li></ul>',
      ],
      [
        'Sai — vì <b>Sinh học</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vật lý</b>.',
        'Sai — vì <b>Địa lý</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vật lý</b>.',
        'Đúng — <b>Vật lý</b> là đáp án chính xác. Vật lý nghiên cứu chuyển động, lực, năng lượng, ánh sáng, âm thanh.',
        'Sai — vì <b>Hoá học</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vật lý</b>.',
      ]
    ),
    Q('Vai trò quan trọng của KHTN đối với đời sống là?',
      ['Không có giá trị thực tiễn', 'Chỉ để thi cử', 'Chỉ dành cho nhà khoa học', 'Cung cấp tri thức, giúp ứng dụng vào sản xuất – đời sống'], 3,
      'KHTN tạo nền tảng cho <b>công nghệ, y học, sản xuất</b> — cải thiện chất lượng cuộc sống.',
      [
        'KHTN không xa vời — mỗi lần em <i>đun nước, gieo hạt đỗ, lắp pin vào điều khiển TV</i> đều đang dùng KHTN.',
        '<b>Ứng dụng tiêu biểu:</b>',
        '<ul><li>Y học: thuốc, vắc-xin, máy siêu âm.</li><li>Nông nghiệp: phân bón, giống cây.</li><li>Công nghiệp: điện, máy móc, vật liệu mới.</li></ul>',
      ],
      [
        'Sai — vì <b>Không có giá trị thực tiễn</b> là khẳng định sai — KHTN có vai trò rất quan trọng trong đời sống. Đáp án đúng là <b>Cung cấp tri thức, giúp ứng dụng vào sản xuất…</b>.',
        'Sai — vì <b>Chỉ để thi cử</b> là quan niệm sai lệch — KHTN ứng dụng rộng trong sản xuất, y học, đời sống. Đáp án đúng là <b>Cung cấp tri thức, giúp ứng dụng vào sản xuất…</b>.',
        'Sai — vì <b>Chỉ dành cho nhà khoa học</b> là quan niệm sai lệch — KHTN ứng dụng rộng trong sản xuất, y học, đời sống. Đáp án đúng là <b>Cung cấp tri thức, giúp ứng dụng vào sản xuất…</b>.',
        'Đúng — <b>Cung cấp tri thức, giúp ứng dụng vào sản xuất – đời sốn…</b> là đáp án chính xác. KHTN tạo nền tảng cho công nghệ, y học, sản xuất — cải thiện chất lượng cuộc sống.',
      ]
    ),
    Q('Khi nghiên cứu KHTN, bước đầu tiên thường là?',
      ['Quan sát hiện tượng', 'Kết luận ngay', 'Viết báo cáo', 'Nhận giải thưởng'], 0,
      'Phương pháp KHTN bắt đầu từ <b>quan sát</b> hiện tượng tự nhiên.',
      [
        '<b>Phương pháp tìm hiểu KHTN</b> gồm 4 bước cơ bản:',
        '<ul><li>① <b>Quan sát</b> hiện tượng (mở mắt nhìn kỹ, mở tai nghe rõ).</li><li>② <b>Đặt câu hỏi</b> và dự đoán (giả thuyết).</li><li>③ <b>Làm thí nghiệm</b> để kiểm chứng.</li><li>④ <b>Rút ra kết luận</b> và viết báo cáo.</li></ul>',
        'Ví dụ: thấy hạt đỗ nảy mầm → tự hỏi <code>hạt cần gì?</code> → làm thí nghiệm cốc nước/cốc khô → kết luận.',
      ],
      [
        'Đúng — <b>Quan sát hiện tượng</b> là đáp án chính xác. Phương pháp KHTN bắt đầu từ quan sát hiện tượng tự nhiên.',
        'Sai — vì <b>Kết luận ngay</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quan sát hiện tượng</b>.',
        'Sai — vì <b>Viết báo cáo</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quan sát hiện tượng</b>.',
        'Sai — vì <b>Nhận giải thưởng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quan sát hiện tượng</b>.',
      ]
    ),
  ]),

  M(2, 'Một số dụng cụ đo và kính hiển vi', [
    Q('Dụng cụ dùng để đo chiều dài là?',
      ['Thước', 'Đồng hồ', 'Thước cặp dùng đo khối lượng nhỏ', 'Nhiệt kế'], 0,
      '<b>Thước</b> (thước kẻ, thước dây, thước cuộn) dùng để đo độ dài.',
      [
        '<b>Bộ tứ dụng cụ đo lường</b> trong KHTN:',
        '<ul><li><b>Thước</b> → đo <i>chiều dài</i> (đơn vị: m, cm, mm).</li><li><b>Cân</b> → đo <i>khối lượng</i> (kg, g).</li><li><b>Đồng hồ</b> → đo <i>thời gian</i> (giờ, phút, giây).</li><li><b>Nhiệt kế</b> → đo <i>nhiệt độ</i> (°C).</li></ul>',
        '⚠️ Lưu ý: <code>thước cặp</code> dùng đo chiều dài nhỏ (đường kính ống), KHÔNG đo khối lượng.',
      ],
      [
        'Đúng — <b>Thước</b> là đáp án chính xác. Thước (thước kẻ, thước dây, thước cuộn) dùng để đo độ dài.',
        'Sai — vì <b>Đồng hồ</b> là dụng cụ đo <b>thời gian</b>. Đáp án đúng là <b>Thước</b>.',
        'Sai — vì <b>Thước cặp dùng đo khối lượng nhỏ</b> là dụng cụ đo <b>chiều dài</b>. Đáp án đúng là <b>Thước</b>.',
        'Sai — vì <b>Nhiệt kế</b> là dụng cụ đo <b>nhiệt độ</b>. Đáp án đúng là <b>Thước</b>.',
      ]
    ),
    Q('Dụng cụ dùng để đo khối lượng là?',
      ['Cân', 'Thước dây', 'Kính lúp', 'Bình chia độ'], 0,
      '<b>Cân</b> đo khối lượng — đơn vị thường dùng là kg, g.',
      [
        '<b>Cân</b> là dụng cụ đo <i>khối lượng</i>. Có nhiều loại: cân đồng hồ, cân điện tử, cân Roberval.',
        '<ul><li>Đơn vị SI: <code>kilôgam (kg)</code>.</li><li>Đơn vị nhỏ hơn: <code>gam (g)</code> với <code>1 kg = 1000 g</code>.</li></ul>',
        '⚠️ Trước khi cân: <b>hiệu chỉnh kim cân về 0</b>; chọn cân có giới hạn đo phù hợp.',
      ],
      [
        'Đúng — <b>Cân</b> là đáp án chính xác. Cân đo khối lượng — đơn vị thường dùng là kg, g.',
        'Sai — vì <b>Thước dây</b> là dụng cụ đo <b>chiều dài</b>. Đáp án đúng là <b>Cân</b>.',
        'Sai — vì <b>Kính lúp</b> kính lúp chỉ phóng đại vài chục lần, không đủ để xem vật rất nhỏ. Đáp án đúng là <b>Cân</b>.',
        'Sai — vì <b>Bình chia độ</b> là dụng cụ đo <b>thể tích chất lỏng</b>. Đáp án đúng là <b>Cân</b>.',
      ]
    ),
    Q('Dụng cụ dùng để đo thời gian là?',
      ['Thước dây', 'Nhiệt kế', 'Đồng hồ', 'Ống đong'], 2,
      '<b>Đồng hồ</b> đo thời gian (giờ, phút, giây).',
      [
        '<b>Đồng hồ</b> đo thời gian. Tuỳ mục đích mà chọn loại:',
        '<ul><li><b>Đồng hồ treo tường</b> → đo giờ – phút trong ngày.</li><li><b>Đồng hồ bấm giây</b> → đo khoảng thời gian ngắn (chạy 60 m, đun sôi nước…).</li><li><b>Đồng hồ cát</b> → đo khoảng thời gian cố định.</li></ul>',
        'Đơn vị SI của thời gian là <code>giây (s)</code>.',
      ],
      [
        'Sai — vì <b>Thước dây</b> là dụng cụ đo <b>chiều dài</b>. Đáp án đúng là <b>Đồng hồ</b>.',
        'Sai — vì <b>Nhiệt kế</b> là dụng cụ đo <b>nhiệt độ</b>. Đáp án đúng là <b>Đồng hồ</b>.',
        'Đúng — <b>Đồng hồ</b> là đáp án chính xác. Đồng hồ đo thời gian (giờ, phút, giây).',
        'Sai — vì <b>Ống đong</b> là dụng cụ đo <b>thể tích chất lỏng</b>. Đáp án đúng là <b>Đồng hồ</b>.',
      ]
    ),
    Q('Kính lúp dùng để?',
      ['Cân chính xác', 'Đo nhiệt độ', 'Quan sát vật nhỏ với độ phóng đại không lớn', 'Đo khối lượng'], 2,
      '<b>Kính lúp</b> phóng đại từ vài đến vài chục lần — quan sát chữ nhỏ, côn trùng…',
      [
        '<b>Kính lúp</b> là thấu kính hội tụ, phóng to vật khi đặt vật ở gần kính.',
        '<ul><li>Độ phóng đại: vài lần đến vài chục lần.</li><li>Dùng để: đọc chữ nhỏ, xem cánh hoa, quan sát côn trùng.</li></ul>',
        '⚠️ Phân biệt với <b>kính hiển vi</b>: kính hiển vi phóng đại <i>hàng trăm đến hàng nghìn lần</i>, dùng quan sát tế bào.',
      ],
      [
        'Sai — vì <b>Cân chính xác</b> là dụng cụ đo <b>khối lượng</b>. Đáp án đúng là <b>Quan sát vật nhỏ với độ phóng đại không lớn</b>.',
        'Sai — vì <b>Đo nhiệt độ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quan sát vật nhỏ với độ phóng đại không lớn</b>.',
        'Đúng — <b>Quan sát vật nhỏ với độ phóng đại không lớn</b> là đáp án chính xác. Kính lúp phóng đại từ vài đến vài chục lần — quan sát chữ nhỏ, côn trùng….',
        'Sai — vì <b>Đo khối lượng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quan sát vật nhỏ với độ phóng đại không lớn</b>.',
      ]
    ),
    Q('Để quan sát tế bào, ta cần dùng?',
      ['Mắt thường', 'Kính hiển vi', 'Kính râm', 'Kính lúp đơn giản'], 1,
      '<b>Kính hiển vi</b> phóng đại hàng trăm đến hàng nghìn lần — đủ để nhìn thấy tế bào.',
      [
        '<b>Kính hiển vi</b> dùng để quan sát những vật <i>cực nhỏ</i> mà kính lúp không thấy được.',
        '<ul><li>Độ phóng đại: 100× đến 1000× (kính quang học); cao hơn nữa với kính hiển vi điện tử.</li><li>Dùng để xem: tế bào, vi khuẩn, mô…</li></ul>',
        'Người đầu tiên dùng kính hiển vi để thấy tế bào là <b>Robert Hooke</b> (năm 1665, quan sát nút bần).',
      ],
      [
        'Sai — vì <b>Mắt thường</b> mắt thường chỉ thấy vật ≥ 0,1 mm — không đủ để quan sát tế bào/vi khuẩn. Đáp án đúng là <b>Kính hiển vi</b>.',
        'Đúng — <b>Kính hiển vi</b> là đáp án chính xác. Kính hiển vi phóng đại hàng trăm đến hàng nghìn lần — đủ để nhìn thấy tế bào.',
        'Sai — vì <b>Kính râm</b> kính râm chỉ để chắn nắng, không có chức năng phóng đại. Đáp án đúng là <b>Kính hiển vi</b>.',
        'Sai — vì <b>Kính lúp đơn giản</b> kính lúp chỉ phóng đại vài chục lần, không đủ để xem vật rất nhỏ. Đáp án đúng là <b>Kính hiển vi</b>.',
      ]
    ),
    Q('Đơn vị đo khối lượng cơ bản trong hệ SI là?',
      ['giây (s)', 'mét (m)', 'lít (L)', 'kilôgam (kg)'], 3,
      '<b>Kilôgam (kg)</b> là đơn vị khối lượng chuẩn trong hệ SI.',
      [
        '<b>Hệ đo lường quốc tế (SI)</b> quy định 7 đơn vị cơ bản. Ba đơn vị thường gặp ở Lớp 6:',
        '<ul><li><b>Khối lượng</b>: <code>kilôgam (kg)</code>.</li><li><b>Chiều dài</b>: <code>mét (m)</code>.</li><li><b>Thời gian</b>: <code>giây (s)</code>.</li></ul>',
        '<i>Lít (L)</i> là đơn vị thể tích thường dùng, KHÔNG phải đơn vị SI cơ bản (SI của thể tích là m³).',
      ],
      [
        'Sai — vì <b>giây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>kilôgam</b>.',
        'Sai — vì <b>mét</b> là đơn vị đo <b>chiều dài</b>, không phù hợp với câu hỏi này. Đáp án đúng là <b>kilôgam</b>.',
        'Sai — vì <b>lít</b> <b>lít</b> là đơn vị thể tích thông dụng, không phải đơn vị SI cơ bản. Đáp án đúng là <b>kilôgam</b>.',
        'Đúng — <b>kilôgam</b> là đáp án chính xác. Kilôgam (kg) là đơn vị khối lượng chuẩn trong hệ SI.',
      ]
    ),
    Q('Bình chia độ thường được dùng để đo?',
      ['Khối lượng', 'Chiều dài', 'Nhiệt độ', 'Thể tích chất lỏng'], 3,
      '<b>Bình chia độ</b> (ống đong) dùng đo <i>thể tích chất lỏng</i> — đơn vị mL, L.',
      [
        '<b>Bình chia độ</b> (graduated cylinder) là ống thuỷ tinh/nhựa có chia vạch, dùng đo thể tích.',
        '<ul><li>Đơn vị: <code>mililít (mL)</code> hoặc <code>lít (L)</code>; <code>1 L = 1000 mL</code>.</li><li>Cách đọc đúng: đặt mắt <b>ngang mặt cong chất lỏng</b>, đọc ở điểm thấp nhất của mặt cong.</li></ul>',
        'Có thể đo thể tích vật rắn không thấm nước bằng cách thả vật vào bình chia độ và đọc thể tích tăng thêm.',
      ],
      [
        'Sai — vì <b>Khối lượng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thể tích chất lỏng</b>.',
        'Sai — vì <b>Chiều dài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thể tích chất lỏng</b>.',
        'Sai — vì <b>Nhiệt độ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thể tích chất lỏng</b>.',
        'Đúng — <b>Thể tích chất lỏng</b> là đáp án chính xác. Bình chia độ (ống đong) dùng đo thể tích chất lỏng — đơn vị mL, L.',
      ]
    ),
  ]),

  M(3, 'An toàn trong phòng thực hành', [
    Q('Khi vào phòng thực hành KHTN, em cần?',
      ['Tuân thủ nội quy, mặc áo bảo hộ nếu có', 'Tự ý lấy hoá chất chơi', 'Chạy nhảy đùa giỡn', 'Ăn uống trong phòng'], 0,
      '<b>An toàn là quy tắc số 1</b> — luôn tuân thủ nội quy và mặc đồ bảo hộ.',
      [
        '<b>Quy tắc vào phòng thực hành KHTN:</b>',
        '<ul><li>Mặc áo bảo hộ (nếu có), buộc tóc gọn gàng.</li><li>Đọc kỹ hướng dẫn trước khi làm thí nghiệm.</li><li>KHÔNG ăn uống, chạy nhảy, đùa giỡn trong phòng.</li><li>KHÔNG tự ý lấy hoá chất khi chưa được phép.</li></ul>',
        '⚠️ Phòng thực hành có nhiều hoá chất, dụng cụ thuỷ tinh dễ gây tai nạn nếu sơ ý.',
      ],
      [
        'Đúng — <b>Tuân thủ nội quy, mặc áo bảo hộ nếu có</b> là đáp án chính xác. An toàn là quy tắc số 1 — luôn tuân thủ nội quy và mặc đồ bảo hộ.',
        'Sai — vì <b>Tự ý lấy hoá chất chơi</b> là hành vi <b>vi phạm an toàn</b> tuyệt đối cấm trong phòng thực hành. Đáp án đúng là <b>Tuân thủ nội quy, mặc áo bảo hộ nếu có</b>.',
        'Sai — vì <b>Chạy nhảy đùa giỡn</b> là hành vi <b>vi phạm an toàn</b> tuyệt đối cấm trong phòng thực hành. Đáp án đúng là <b>Tuân thủ nội quy, mặc áo bảo hộ nếu có</b>.',
        'Sai — vì <b>Ăn uống trong phòng</b> là hành vi cấm — phòng thực hành có hoá chất, không được ăn uống. Đáp án đúng là <b>Tuân thủ nội quy, mặc áo bảo hộ nếu có</b>.',
      ]
    ),
    Q('Khi đun nóng hoá chất trong ống nghiệm, em phải?',
      ['Hướng miệng ống nghiệm ra xa người', 'Hướng miệng ống về phía bạn', 'Cầm ống bằng tay không', 'Đậy kín miệng ống'], 0,
      'Luôn <b>hướng miệng ống nghiệm ra xa người</b> để tránh hoá chất sôi bắn vào mặt.',
      [
        '<b>Quy tắc đun nóng ống nghiệm:</b>',
        '<ul><li>Dùng <i>kẹp gỗ</i> giữ ống, KHÔNG cầm bằng tay không (bỏng).</li><li>Miệng ống hướng <b>ra xa người</b> (mình và bạn).</li><li>Đun bằng đèn cồn ở phần <i>ngọn lửa xanh</i> phía trên.</li><li>Lắc nhẹ ống đều tay để nhiệt phân bố.</li></ul>',
        '🚫 KHÔNG đậy kín miệng ống — khí sinh ra có thể làm nổ ống.',
      ],
      [
        'Đúng — <b>Hướng miệng ống nghiệm ra xa người</b> là đáp án chính xác. Luôn hướng miệng ống nghiệm ra xa người để tránh hoá chất sôi bắn vào mặt.',
        'Sai — vì <b>Hướng miệng ống về phía bạn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hướng miệng ống nghiệm ra xa người</b>.',
        'Sai — vì <b>Cầm ống bằng tay không</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hướng miệng ống nghiệm ra xa người</b>.',
        'Sai — vì <b>Đậy kín miệng ống</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hướng miệng ống nghiệm ra xa người</b>.',
      ]
    ),
    Q('Khi bị hoá chất dính vào da, em cần?',
      ['Bỏ qua', 'Bôi thêm hoá chất khác', 'Lau bằng giẻ bẩn', 'Rửa ngay với nhiều nước sạch, báo giáo viên'], 3,
      '<b>Rửa ngay với nhiều nước sạch</b> trong vài phút rồi <i>báo giáo viên</i>.',
      [
        '<b>Sơ cứu khi hoá chất dính vào da:</b>',
        '<ul><li>Bước 1: rửa <b>ngay lập tức</b> dưới vòi nước chảy ít nhất 5–10 phút.</li><li>Bước 2: cởi bỏ phần quần áo dính hoá chất.</li><li>Bước 3: báo giáo viên / người lớn để xử lý tiếp.</li></ul>',
        '🚫 KHÔNG bôi thêm chất khác lên vết thương — có thể phản ứng gây bỏng nặng hơn.',
      ],
      [
        'Sai — vì <b>Bỏ qua</b> là hành vi <b>nguy hiểm</b>, không đảm bảo an toàn. Đáp án đúng là <b>Rửa ngay với nhiều nước sạch, báo giáo viên</b>.',
        'Sai — vì <b>Bôi thêm hoá chất khác</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rửa ngay với nhiều nước sạch, báo giáo viên</b>.',
        'Sai — vì <b>Lau bằng giẻ bẩn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rửa ngay với nhiều nước sạch, báo giáo viên</b>.',
        'Đúng — <b>Rửa ngay với nhiều nước sạch, báo giáo viên</b> là đáp án chính xác. Rửa ngay với nhiều nước sạch trong vài phút rồi báo giáo viên.',
      ]
    ),
    Q('Biểu tượng đầu lâu trên chai hoá chất nghĩa là?',
      ['Chất ăn được', 'Chất rẻ tiền', 'Chất độc', 'Chất thơm'], 2,
      'Hình <b>đầu lâu xương chéo</b> = <i>cảnh báo chất độc</i> — không được nếm, hít trực tiếp.',
      [
        '<b>Một số biểu tượng cảnh báo</b> trên nhãn hoá chất:',
        '<ul><li>💀 <b>Đầu lâu xương chéo</b>: chất <i>độc</i>, có thể gây tử vong.</li><li>🔥 <b>Ngọn lửa</b>: chất <i>dễ cháy</i>.</li><li>⚠️ <b>Dấu chấm than</b>: chất <i>gây kích ứng</i> da, mắt.</li><li>🧪 <b>Ống nghiệm nhỏ giọt</b>: chất <i>ăn mòn</i>.</li></ul>',
        'Khi thấy biểu tượng này, phải <b>cực kỳ cẩn thận</b> — đeo găng tay, kính bảo hộ.',
      ],
      [
        'Sai — vì <b>Chất ăn được</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất độc</b>.',
        'Sai — vì <b>Chất rẻ tiền</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất độc</b>.',
        'Đúng — <b>Chất độc</b> là đáp án chính xác. Hình đầu lâu xương chéo = cảnh báo chất độc — không được nếm, hít trực tiếp.',
        'Sai — vì <b>Chất thơm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất độc</b>.',
      ]
    ),
    Q('Hành vi nào KHÔNG được phép trong phòng thực hành?',
      ['Nếm thử hoá chất', 'Đeo kính bảo hộ', 'Rửa tay sau khi làm thí nghiệm', 'Ghi chép cẩn thận'], 0,
      '<b>Tuyệt đối KHÔNG nếm thử hoá chất</b> — nhiều chất rất độc, có thể gây tử vong.',
      [
        '<b>Những điều CẤM trong phòng thực hành:</b>',
        '<ul><li>🚫 Nếm, ngửi trực tiếp hoá chất.</li><li>🚫 Ăn uống, dùng điện thoại.</li><li>🚫 Chạy nhảy, đùa nghịch.</li><li>🚫 Đổ hoá chất thừa trở lại chai gốc (tránh nhiễm bẩn).</li></ul>',
        '✅ Khi cần ngửi: dùng tay <i>phẩy nhẹ</i> hơi về phía mũi, KHÔNG cúi sát miệng bình.',
      ],
      [
        'Đúng — <b>Nếm thử hoá chất</b> là đáp án chính xác. Tuyệt đối KHÔNG nếm thử hoá chất — nhiều chất rất độc, có thể gây tử vong.',
        'Sai — vì <b>Đeo kính bảo hộ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nếm thử hoá chất</b>.',
        'Sai — vì <b>Rửa tay sau khi làm thí nghiệm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nếm thử hoá chất</b>.',
        'Sai — vì <b>Ghi chép cẩn thận</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nếm thử hoá chất</b>.',
      ]
    ),
    Q('Sau khi làm thí nghiệm xong, em phải?',
      ['Dọn dẹp, rửa dụng cụ, rửa tay sạch', 'Để nguyên hoá chất trên bàn', 'Đổ chất thải xuống bồn rửa tuỳ ý', 'Bỏ chạy ra ngoài'], 0,
      'Phải <b>dọn dẹp, rửa dụng cụ và rửa tay sạch</b> trước khi rời phòng thực hành.',
      [
        '<b>Quy trình kết thúc thí nghiệm:</b>',
        '<ul><li>Tắt đèn cồn, ngắt nguồn điện.</li><li>Đổ chất thải vào đúng nơi quy định (KHÔNG đổ tuỳ tiện xuống bồn rửa).</li><li>Rửa dụng cụ, lau bàn sạch.</li><li>Cất hoá chất về vị trí cũ.</li><li>Rửa tay bằng xà phòng kỹ trước khi rời phòng.</li></ul>',
        'Việc dọn dẹp đúng cách giúp <i>bảo vệ môi trường</i> và an toàn cho người dùng sau.',
      ],
      [
        'Đúng — <b>Dọn dẹp, rửa dụng cụ, rửa tay sạch</b> là đáp án chính xác. Phải dọn dẹp, rửa dụng cụ và rửa tay sạch trước khi rời phòng thực hành.',
        'Sai — vì <b>Để nguyên hoá chất trên bàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dọn dẹp, rửa dụng cụ, rửa tay sạch</b>.',
        'Sai — vì <b>Đổ chất thải xuống bồn rửa tuỳ ý</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dọn dẹp, rửa dụng cụ, rửa tay sạch</b>.',
        'Sai — vì <b>Bỏ chạy ra ngoài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dọn dẹp, rửa dụng cụ, rửa tay sạch</b>.',
      ]
    ),
  ]),

  M(4, 'Đo chiều dài và khối lượng', [
    Q('Đơn vị đo chiều dài trong hệ SI là?',
      ['kilôgam', 'centimet (cm) — đơn vị nhỏ hơn mét', 'mét (m)', 'kilômét (km) — đơn vị bội của mét'], 2,
      '<b>Mét (m)</b> là đơn vị chuẩn đo chiều dài trong hệ SI.',
      [
        '<b>Mét (m)</b> là đơn vị SI của chiều dài. Các đơn vị thường dùng:',
        '<ul><li><code>1 km = 1000 m</code> (kilômét)</li><li><code>1 m = 10 dm = 100 cm = 1000 mm</code></li><li><code>1 cm = 10 mm</code></li></ul>',
        'Quy tắc đổi: mỗi bậc kế tiếp <b>nhân/chia 10</b> (km → hm → dam → m → dm → cm → mm).',
      ],
      [
        'Sai — vì <b>kilôgam</b> là đơn vị đo <b>khối lượng</b>, không phù hợp với câu hỏi này. Đáp án đúng là <b>mét</b>.',
        'Sai — vì <b>centimet (cm) — đơn vị nhỏ hơn mét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>mét</b>.',
        'Đúng — <b>mét</b> là đáp án chính xác. Mét (m) là đơn vị chuẩn đo chiều dài trong hệ SI.',
        'Sai — vì <b>kilômét (km) — đơn vị bội của mét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>mét</b>.',
      ]
    ),
    Q('1 mét bằng?',
      ['1000 cm', '10 cm', '10000 cm', '100 cm'], 3,
      '<code>1 m = 100 cm = 1000 mm</code>.',
      [
        '<b>Bảng đổi đơn vị chiều dài thông dụng:</b>',
        '<ul><li><code>1 m = 100 cm</code></li><li><code>1 m = 1000 mm</code></li><li><code>1 cm = 10 mm</code></li><li><code>1 dm = 10 cm = 0,1 m</code></li></ul>',
        '<b>Mẹo:</b> đổi từ đơn vị lớn → đơn vị nhỏ thì <i>nhân</i>; đổi ngược lại thì <i>chia</i>.',
      ],
      [
        'Sai — vì <b>1000 cm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>100 cm</b>.',
        'Sai — vì <b>10 cm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>100 cm</b>.',
        'Sai — vì <b>10000 cm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>100 cm</b>.',
        'Đúng — <b>100 cm</b> là đáp án chính xác. 1 m = 100 cm = 1000 mm. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
      ]
    ),
    Q('1 km bằng?',
      ['10000 m', '100 m', '500 m', '1000 m'], 3,
      '<code>1 km = 1000 m</code>.',
      [
        '<b>Kilômét (km)</b> là đơn vị bội của mét, dùng đo quãng đường dài.',
        '<ul><li><code>1 km = 1000 m = 100 000 cm</code></li><li>Ví dụ: đi từ nhà tới trường dài 2 km = 2000 m.</li></ul>',
        '<b>Tiền tố "kilô" (k)</b> có nghĩa là 1000 lần — cũng dùng trong <code>kg, kJ, kW</code>…',
      ],
      [
        'Sai — vì <b>10000 m</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>1000 m</b>.',
        'Sai — vì <b>100 m</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>1000 m</b>.',
        'Sai — vì <b>500 m</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>1000 m</b>.',
        'Đúng — <b>1000 m</b> là đáp án chính xác. 1 km = 1000 m.. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
      ]
    ),
    Q('Để đo chiều dài bàn học, dùng dụng cụ nào phù hợp nhất?',
      ['Thước kẻ 20 cm', 'Cân điện tử', 'Thước cuộn / thước dây 2 m', 'Đồng hồ bấm giờ'], 2,
      'Bàn học dài hơn 1 m → dùng <b>thước cuộn hoặc thước dây 2 m</b> mới đủ.',
      [
        '<b>Chọn thước phù hợp</b> dựa trên <i>giới hạn đo (GHĐ)</i> và <i>độ chia nhỏ nhất (ĐCNN)</i>:',
        '<ul><li>Đo vật <i>nhỏ</i> (sách, hộp bút): thước kẻ 20–30 cm.</li><li>Đo vật <i>trung bình</i> (bàn học, người): thước dây 2 m hoặc thước cuộn 5 m.</li><li>Đo vật <i>rất dài</i> (sân trường): thước cuộn 10–50 m hoặc bước chân.</li></ul>',
        'Nguyên tắc: <b>GHĐ của thước phải lớn hơn chiều dài cần đo</b>.',
      ],
      [
        'Sai — vì <b>Thước kẻ 20 cm</b> là dụng cụ đo <b>chiều dài</b>. Đáp án đúng là <b>Thước cuộn / thước dây 2 m</b>.',
        'Sai — vì <b>Cân điện tử</b> là dụng cụ đo <b>khối lượng</b>. Đáp án đúng là <b>Thước cuộn / thước dây 2 m</b>.',
        'Đúng — <b>Thước cuộn / thước dây 2 m</b> là đáp án chính xác. Bàn học dài hơn 1 m → dùng thước cuộn hoặc thước dây 2 m mới đủ.',
        'Sai — vì <b>Đồng hồ bấm giờ</b> là dụng cụ đo <b>thời gian</b>. Đáp án đúng là <b>Thước cuộn / thước dây 2 m</b>.',
      ]
    ),
    Q('Khi đọc kết quả đo chiều dài, mắt phải?',
      ['Nhìn nghiêng', 'Nhìn từ xa', 'Nhìn vuông góc với vạch chia của thước', 'Nhắm một mắt nhìn'], 2,
      'Mắt phải <b>nhìn vuông góc với vạch chia</b> để tránh sai số do nhìn nghiêng (thị sai).',
      [
        '<b>Cách đặt mắt khi đọc kết quả đo:</b>',
        '<ul><li>Mắt nhìn <b>theo hướng vuông góc</b> với mặt thước, ngay tại vạch.</li><li>Đọc giá trị ở vạch chia <i>gần nhất</i> với đầu kia của vật.</li></ul>',
        '⚠️ Nếu nhìn nghiêng sẽ thấy vạch lệch → <b>sai số thị sai</b> (parallax error).',
      ],
      [
        'Sai — vì <b>Nhìn nghiêng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhìn vuông góc với vạch chia của thước</b>.',
        'Sai — vì <b>Nhìn từ xa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhìn vuông góc với vạch chia của thước</b>.',
        'Đúng — <b>Nhìn vuông góc với vạch chia của thước</b> là đáp án chính xác. Mắt phải nhìn vuông góc với vạch chia để tránh sai số do nhìn nghiêng (thị sai).',
        'Sai — vì <b>Nhắm một mắt nhìn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhìn vuông góc với vạch chia của thước</b>.',
      ]
    ),
    Q('1 kg bằng?',
      ['10000 g', '100 g', '1000 g', '10 g'], 2,
      '<code>1 kg = 1000 g</code>.',
      [
        '<b>Bảng đổi đơn vị khối lượng:</b>',
        '<ul><li><code>1 tấn = 1000 kg</code></li><li><code>1 kg = 1000 g</code></li><li><code>1 g = 1000 mg</code></li></ul>',
        'Mỗi bậc kế tiếp nhân/chia <b>1000</b> (khác với chiều dài chỉ nhân/chia 10).',
      ],
      [
        'Sai — vì <b>10000 g</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>1000 g</b>.',
        'Sai — vì <b>100 g</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>1000 g</b>.',
        'Đúng — <b>1000 g</b> là đáp án chính xác. 1 kg = 1000 g.. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>10 g</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>1000 g</b>.',
      ]
    ),
    Q('Trước khi cân vật, ta cần?',
      ['Điều chỉnh kim cân về số 0', 'Đặt vật trước rồi mới chỉnh', 'Đập mạnh cân', 'Bỏ qua bước này'], 0,
      '<b>Hiệu chỉnh kim cân về 0</b> trước khi cân để tránh sai số.',
      [
        '<b>Quy trình cân đúng cách:</b>',
        '<ul><li>① Đặt cân trên mặt phẳng.</li><li>② Hiệu chỉnh kim/màn hình về <b>số 0</b>.</li><li>③ Đặt vật cần cân lên đĩa/mặt cân nhẹ nhàng.</li><li>④ Đọc kết quả khi kim ổn định, mắt nhìn vuông góc.</li></ul>',
        'Cân điện tử có nút <code>TARE</code> để đưa về 0 khi đã đặt sẵn vật chứa.',
      ],
      [
        'Đúng — <b>Điều chỉnh kim cân về số 0</b> là đáp án chính xác. Hiệu chỉnh kim cân về 0 trước khi cân để tránh sai số.',
        'Sai — vì <b>Đặt vật trước rồi mới chỉnh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điều chỉnh kim cân về số 0</b>.',
        'Sai — vì <b>Đập mạnh cân</b> là dụng cụ đo <b>khối lượng</b>. Đáp án đúng là <b>Điều chỉnh kim cân về số 0</b>.',
        'Sai — vì <b>Bỏ qua bước này</b> là hành vi <b>nguy hiểm</b>, không đảm bảo an toàn. Đáp án đúng là <b>Điều chỉnh kim cân về số 0</b>.',
      ]
    ),
  ]),

  M(5, 'Đo thời gian và nhiệt độ', [
    Q('Đơn vị đo thời gian trong hệ SI là?',
      ['phút (min)', 'giờ (h)', 'giây (s)', 'kilôgam'], 2,
      '<b>Giây (s)</b> là đơn vị chuẩn đo thời gian trong hệ SI.',
      [
        '<b>Giây (s)</b> là đơn vị SI của thời gian. Bảng đổi:',
        '<ul><li><code>1 phút = 60 giây</code></li><li><code>1 giờ = 60 phút = 3600 giây</code></li><li><code>1 ngày = 24 giờ = 86 400 giây</code></li></ul>',
        'Trong SGK ký hiệu: <code>s</code> (giây), <code>min</code> (phút), <code>h</code> (giờ).',
      ],
      [
        'Sai — vì <b>phút</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>giây</b>.',
        'Sai — vì <b>giờ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>giây</b>.',
        'Đúng — <b>giây</b> là đáp án chính xác. Giây (s) là đơn vị chuẩn đo thời gian trong hệ SI.',
        'Sai — vì <b>kilôgam</b> là đơn vị đo <b>khối lượng</b>, không phù hợp với câu hỏi này. Đáp án đúng là <b>giây</b>.',
      ]
    ),
    Q('1 phút bằng?',
      ['1000 giây', '10 giây', '60 giây', '100 giây'], 2,
      '<code>1 phút = 60 s</code>.',
      [
        '<b>Hệ đo thời gian theo bậc 60</b> (khác với chiều dài, khối lượng):',
        '<ul><li><code>1 phút = 60 giây</code></li><li><code>1 giờ = 60 phút</code></li></ul>',
        'Đây là di sản của <i>hệ đếm cơ số 60</i> từ thời Babylon — vẫn được dùng tới ngày nay.',
      ],
      [
        'Sai — vì <b>1000 giây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>60 giây</b>.',
        'Sai — vì <b>10 giây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>60 giây</b>.',
        'Đúng — <b>60 giây</b> là đáp án chính xác. 1 phút = 60 s.. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>100 giây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>60 giây</b>.',
      ]
    ),
    Q('1 giờ bằng?',
      ['120 phút', '60 phút', '100 phút', '30 phút'], 1,
      '<code>1 giờ = 60 phút = 3600 giây</code>.',
      [
        '<b>Quy đổi nhanh:</b>',
        '<ul><li><code>1 giờ = 60 phút</code></li><li><code>1 giờ = 3600 giây</code> (60 × 60)</li><li><code>30 phút = 0,5 giờ = 1800 giây</code></li></ul>',
        'Cẩn thận khi đổi: <i>không phải</i> nhân chia 10 hay 1000 như chiều dài/khối lượng.',
      ],
      [
        'Sai — vì <b>120 phút</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>60 phút</b>.',
        'Đúng — <b>60 phút</b> là đáp án chính xác. 1 giờ = 60 phút = 3600 giây. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>100 phút</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>60 phút</b>.',
        'Sai — vì <b>30 phút</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>60 phút</b>.',
      ]
    ),
    Q('Để đo thời gian một học sinh chạy 60 m, dụng cụ phù hợp là?',
      ['Đồng hồ treo tường (chỉ giờ–phút)', 'Đồng hồ bấm giây', 'Đồng hồ cát', 'Nhiệt kế'], 1,
      'Chạy 60 m chỉ vài giây → cần <b>đồng hồ bấm giây</b> có ĐCNN nhỏ.',
      [
        '<b>Chọn đồng hồ phù hợp với khoảng thời gian cần đo:</b>',
        '<ul><li>Khoảng <i>ngắn (giây)</i>: <b>đồng hồ bấm giây</b> — ĐCNN 0,1 s hoặc 0,01 s.</li><li>Khoảng <i>vừa (phút – giờ)</i>: đồng hồ treo tường, đồng hồ đeo tay.</li><li>Khoảng <i>cố định</i>: đồng hồ cát.</li></ul>',
        'Đồng hồ treo tường có ĐCNN 1 phút → KHÔNG đo được khoảng vài giây.',
      ],
      [
        'Sai — vì <b>Đồng hồ treo tường</b> là dụng cụ đo <b>thời gian</b>. Đáp án đúng là <b>Đồng hồ bấm giây</b>.',
        'Đúng — <b>Đồng hồ bấm giây</b> là đáp án chính xác. Chạy 60 m chỉ vài giây → cần đồng hồ bấm giây có ĐCNN nhỏ.',
        'Sai — vì <b>Đồng hồ cát</b> là dụng cụ đo <b>thời gian</b>. Đáp án đúng là <b>Đồng hồ bấm giây</b>.',
        'Sai — vì <b>Nhiệt kế</b> là dụng cụ đo <b>nhiệt độ</b>. Đáp án đúng là <b>Đồng hồ bấm giây</b>.',
      ]
    ),
    Q('Nhiệt kế dùng để đo?',
      ['Khối lượng', 'Thời gian', 'Nhiệt độ', 'Chiều dài'], 2,
      '<b>Nhiệt kế</b> đo <i>nhiệt độ</i> — đơn vị thường dùng là °C.',
      [
        '<b>Nhiệt kế</b> là dụng cụ đo nhiệt độ. Một số loại:',
        '<ul><li><b>Nhiệt kế thuỷ ngân / rượu</b>: dựa vào sự dãn nở vì nhiệt của chất lỏng.</li><li><b>Nhiệt kế y tế</b>: GHĐ 35–42 °C, dùng đo thân nhiệt.</li><li><b>Nhiệt kế điện tử / hồng ngoại</b>: hiện số nhanh, an toàn.</li></ul>',
        'Đơn vị nhiệt độ: <code>°C</code> (Celsius) ở Việt Nam, <code>°F</code> (Fahrenheit) ở Mỹ, <code>K</code> (Kelvin) trong SI.',
      ],
      [
        'Sai — vì <b>Khối lượng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiệt độ</b>.',
        'Sai — vì <b>Thời gian</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiệt độ</b>.',
        'Đúng — <b>Nhiệt độ</b> là đáp án chính xác. Nhiệt kế đo nhiệt độ — đơn vị thường dùng là °C.',
        'Sai — vì <b>Chiều dài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiệt độ</b>.',
      ]
    ),
    Q('Nhiệt độ thường của cơ thể người khoẻ mạnh khoảng?',
      ['25 °C', '100 °C', '37 °C', '50 °C'], 2,
      'Thân nhiệt người bình thường khoảng <b>36,5 – 37 °C</b>.',
      [
        '<b>Mốc nhiệt độ quan trọng cần nhớ:</b>',
        '<ul><li>Nước đá đang tan: <code>0 °C</code>.</li><li>Nước sôi (áp suất chuẩn): <code>100 °C</code>.</li><li>Thân nhiệt người: <code>~37 °C</code>.</li><li>Sốt cao: <code>> 39 °C</code> — cần đi khám.</li></ul>',
      ],
      [
        'Sai — vì <b>25 °C</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>37 °C</b>.',
        'Sai — vì <b>100 °C</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>37 °C</b>.',
        'Đúng — <b>37 °C</b> là đáp án chính xác. Thân nhiệt người bình thường khoảng 36,5 – 37 °C.',
        'Sai — vì <b>50 °C</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>37 °C</b>.',
      ]
    ),
    Q('Đơn vị đo nhiệt độ phổ biến ở Việt Nam là?',
      ['độ C (°C)', 'kelvin', 'độ K (Kelvin) — đơn vị SI ít dùng dân dụng', 'độ F (Fahrenheit) — phổ biến ở Mỹ'], 0,
      'Ở Việt Nam dùng <b>độ C (°C)</b> — thang Celsius.',
      [
        '<b>Ba thang đo nhiệt độ chính:</b>',
        '<ul><li><b>Celsius (°C)</b>: phổ biến nhất ở Việt Nam và phần lớn thế giới. Mốc: nước đá 0 °C, nước sôi 100 °C.</li><li><b>Fahrenheit (°F)</b>: dùng chủ yếu ở Mỹ. Nước đá 32 °F, nước sôi 212 °F.</li><li><b>Kelvin (K)</b>: đơn vị SI, dùng trong khoa học. 0 K = -273,15 °C (độ không tuyệt đối).</li></ul>',
      ],
      [
        'Đúng — <b>độ C</b> là đáp án chính xác. Ở Việt Nam dùng độ C (°C) — thang Celsius.',
        'Sai — vì <b>kelvin</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>độ C</b>.',
        'Sai — vì <b>độ K (Kelvin) — đơn vị SI ít dùng dân dụng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>độ C</b>.',
        'Sai — vì <b>độ F (Fahrenheit) — phổ biến ở Mỹ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>độ C</b>.',
      ]
    ),
    Q('Khi đo nhiệt độ một cốc nước, ta phải nhúng bầu nhiệt kế?',
      ['Chỉ chạm một góc', 'Sát đáy cốc', 'Trên mặt nước', 'Ngập trong nước, không chạm đáy/thành cốc'], 3,
      'Bầu nhiệt kế phải <b>ngập trong nước, không chạm đáy/thành cốc</b> để đo chính xác.',
      [
        '<b>Quy tắc đo nhiệt độ chất lỏng:</b>',
        '<ul><li>Bầu nhiệt kế <b>ngập hoàn toàn</b> trong chất lỏng.</li><li>Bầu <b>KHÔNG chạm</b> đáy cốc và thành cốc (sẽ đo nhiệt của cốc, không phải của nước).</li><li>Đợi nhiệt độ ổn định mới đọc.</li><li>Mắt nhìn vuông góc với cột chất lỏng trong nhiệt kế.</li></ul>',
      ],
      [
        'Sai — vì <b>Chỉ chạm một góc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ngập trong nước, không chạm đáy/thành cốc</b>.',
        'Sai — vì <b>Sát đáy cốc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ngập trong nước, không chạm đáy/thành cốc</b>.',
        'Sai — vì <b>Trên mặt nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ngập trong nước, không chạm đáy/thành cốc</b>.',
        'Đúng — <b>Ngập trong nước, không chạm đáy/thành cốc</b> là đáp án chính xác. Bầu nhiệt kế phải ngập trong nước, không chạm đáy/thành cốc để đo chính xác.',
      ]
    ),
  ]),

  M(6, 'Sự đa dạng của chất — ba thể rắn, lỏng, khí', [
    Q('Mọi vật quanh ta đều được tạo nên từ?',
      ['Ánh sáng thuần tuý', 'Suy nghĩ', 'Bóng tối', 'Chất'], 3,
      '<b>Chất</b> là thành phần cấu tạo nên mọi vật thể quanh ta.',
      [
        '<b>Vật thể</b> là những thứ ta thấy/sờ được; mọi <i>vật thể</i> đều được tạo nên từ <b>chất</b>.',
        '<ul><li>Cái bàn → tạo từ chất gỗ (cellulose).</li><li>Cái cốc → tạo từ chất thuỷ tinh.</li><li>Cơ thể người → tạo từ nước, protein, khoáng…</li></ul>',
        '<b>Phân biệt</b>: vật thể là <i>cái</i>, chất là <i>chất liệu</i>.',
      ],
      [
        'Sai — vì <b>Ánh sáng thuần tuý</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất</b>.',
        'Sai — vì <b>Suy nghĩ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất</b>.',
        'Sai — vì <b>Bóng tối</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất</b>.',
        'Đúng — <b>Chất</b> là đáp án chính xác. Chất là thành phần cấu tạo nên mọi vật thể quanh ta.',
      ]
    ),
    Q('Chất có thể tồn tại ở mấy thể cơ bản?',
      ['5', '1', '3', '2'], 2,
      'Có <b>3 thể cơ bản</b>: rắn, lỏng, khí.',
      [
        '<b>Ba thể cơ bản của chất</b>:',
        '<ul><li><b>Rắn</b>: có hình dạng và thể tích xác định (đá, sắt, gỗ).</li><li><b>Lỏng</b>: có thể tích xác định, hình dạng theo bình chứa (nước, dầu).</li><li><b>Khí</b>: không có hình dạng và thể tích xác định, chiếm hết bình chứa (oxy, khí CO₂).</li></ul>',
        'Ngoài ra còn có thể <i>plasma</i> ở nhiệt độ rất cao — sẽ học ở lớp trên.',
      ],
      [
        'Sai — vì <b>5</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>3</b>.',
        'Sai — vì <b>1</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>3</b>.',
        'Đúng — <b>3</b> là đáp án chính xác. Có 3 thể cơ bản: rắn, lỏng, khí. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>2</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>3</b>.',
      ]
    ),
    Q('Ở thể rắn, các hạt cấu tạo chất?',
      ['Bay tự do', 'Chuyển động hỗn loạn, xa nhau', 'Biến mất', 'Sắp xếp chặt chẽ, dao động tại chỗ'], 3,
      'Ở thể rắn: hạt <b>sắp xếp chặt chẽ, chỉ dao động tại chỗ</b> nên rắn có hình dạng cố định.',
      [
        '<b>Sắp xếp hạt trong 3 thể</b>:',
        '<ul><li><b>Rắn</b>: hạt rất gần nhau, liên kết chặt, chỉ dao động <i>tại chỗ</i>.</li><li><b>Lỏng</b>: hạt gần nhau nhưng có thể trượt — nên chảy được.</li><li><b>Khí</b>: hạt rất xa nhau, chuyển động <i>hỗn loạn, tự do</i>.</li></ul>',
        'Đây là lý do rắn cứng, lỏng chảy, khí lan ra mọi hướng.',
      ],
      [
        'Sai — vì <b>Bay tự do</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sắp xếp chặt chẽ, dao động tại chỗ</b>.',
        'Sai — vì <b>Chuyển động hỗn loạn, xa nhau</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sắp xếp chặt chẽ, dao động tại chỗ</b>.',
        'Sai — vì <b>Biến mất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sắp xếp chặt chẽ, dao động tại chỗ</b>.',
        'Đúng — <b>Sắp xếp chặt chẽ, dao động tại chỗ</b> là đáp án chính xác. Ở thể rắn: hạt sắp xếp chặt chẽ, chỉ dao động tại chỗ nên rắn có hình dạng cố định.',
      ]
    ),
    Q('Ở thể khí, các hạt?',
      ['Bám chặt vào thành bình', 'Chuyển động hỗn loạn, ở xa nhau', 'Liên kết rất chặt', 'Đứng yên hoàn toàn'], 1,
      'Hạt thể khí <b>chuyển động hỗn loạn, ở xa nhau</b> → khí lan đầy bình chứa.',
      [
        '<b>Đặc điểm thể khí:</b>',
        '<ul><li>Khoảng cách giữa các hạt <i>rất lớn</i> so với kích thước hạt.</li><li>Chuyển động <i>hỗn loạn</i> theo mọi hướng.</li><li>Khí dễ bị <b>nén</b> (giảm thể tích) — khác với rắn và lỏng.</li><li>Khí <b>chiếm toàn bộ thể tích</b> bình chứa.</li></ul>',
        'Đó là lý do khi mở nắp lọ nước hoa, mùi thơm lan khắp phòng.',
      ],
      [
        'Sai — vì <b>Bám chặt vào thành bình</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chuyển động hỗn loạn, ở xa nhau</b>.',
        'Đúng — <b>Chuyển động hỗn loạn, ở xa nhau</b> là đáp án chính xác. Hạt thể khí chuyển động hỗn loạn, ở xa nhau → khí lan đầy bình chứa.',
        'Sai — vì <b>Liên kết rất chặt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chuyển động hỗn loạn, ở xa nhau</b>.',
        'Sai — vì <b>Đứng yên hoàn toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chuyển động hỗn loạn, ở xa nhau</b>.',
      ]
    ),
    Q('Khi đun nước đá, nó chuyển từ thể nào sang thể nào?',
      ['Rắn → lỏng', 'Lỏng → khí', 'Rắn → khí', 'Khí → rắn'], 0,
      'Nước đá tan thành nước lỏng → <b>nóng chảy</b> (rắn → lỏng).',
      [
        '<b>Sự chuyển thể của chất</b>:',
        '<ul><li><b>Nóng chảy</b>: rắn → lỏng (đá tan).</li><li><b>Đông đặc</b>: lỏng → rắn (nước đóng băng).</li><li><b>Bay hơi</b>: lỏng → khí (nước bốc hơi).</li><li><b>Ngưng tụ</b>: khí → lỏng (sương đọng trên cốc).</li><li><b>Thăng hoa</b>: rắn → khí trực tiếp (băng phiến, đá khô CO₂).</li></ul>',
        'Nước nóng chảy ở <code>0 °C</code>, sôi ở <code>100 °C</code>.',
      ],
      [
        'Đúng — <b>Rắn → lỏng</b> là đáp án chính xác. Nước đá tan thành nước lỏng → nóng chảy (rắn → lỏng).',
        'Sai — vì <b>Lỏng → khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn → lỏng</b>.',
        'Sai — vì <b>Rắn → khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn → lỏng</b>.',
        'Sai — vì <b>Khí → rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn → lỏng</b>.',
      ]
    ),
    Q('Khi nước bay hơi, đó là sự chuyển thể từ?',
      ['Rắn → khí', 'Lỏng → khí', 'Lỏng → rắn', 'Khí → lỏng'], 1,
      '<b>Bay hơi</b>: lỏng → khí (nước → hơi nước).',
      [
        '<b>Bay hơi</b> là quá trình chất <i>lỏng</i> chuyển thành <i>khí</i>:',
        '<ul><li>Xảy ra ở <b>mọi nhiệt độ</b> (không cần đun sôi).</li><li>Nhanh hơn khi: <i>nhiệt độ cao, gió mạnh, diện tích thoáng lớn</i>.</li><li>Ví dụ: quần áo phơi khô, nước biển bốc hơi tạo mưa.</li></ul>',
        '<b>Sôi</b> là sự bay hơi mạnh diễn ra ở <i>cả lòng chất lỏng</i>, tại nhiệt độ sôi cố định (nước: 100 °C).',
      ],
      [
        'Sai — vì <b>Rắn → khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lỏng → khí</b>.',
        'Đúng — <b>Lỏng → khí</b> là đáp án chính xác. Bay hơi: lỏng → khí (nước → hơi nước).',
        'Sai — vì <b>Lỏng → rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lỏng → khí</b>.',
        'Sai — vì <b>Khí → lỏng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lỏng → khí</b>.',
      ]
    ),
    Q('Tính chất chung của chất ở thể lỏng là?',
      ['Không thể nhìn thấy', 'Chiếm toàn bộ thể tích bình chứa', 'Có hình dạng cố định', 'Có thể tích xác định, dễ chảy, không có hình dạng cố định'], 3,
      'Lỏng <b>giữ thể tích, lấy hình dạng theo bình chứa</b>, dễ chảy.',
      [
        '<b>Đặc trưng thể lỏng:</b>',
        '<ul><li>✅ Có <b>thể tích xác định</b> (1 lít nước rót sang cốc khác vẫn 1 lít).</li><li>✅ <b>Hình dạng</b> theo bình chứa.</li><li>✅ Dễ <b>chảy</b> (rót, đổ được).</li><li>❌ KHÔNG nén được nhiều (khác với khí).</li></ul>',
        'Hạt thể lỏng đủ gần để giữ liên kết yếu, nhưng có thể trượt → giải thích các tính chất trên.',
      ],
      [
        'Sai — vì <b>Không thể nhìn thấy</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thể tích xác định, dễ chảy, không có hình…</b>.',
        'Sai — vì <b>Chiếm toàn bộ thể tích bình chứa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thể tích xác định, dễ chảy, không có hình…</b>.',
        'Sai — vì <b>Có hình dạng cố định</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thể tích xác định, dễ chảy, không có hình…</b>.',
        'Đúng — <b>Có thể tích xác định, dễ chảy, không có hình dạng cố đị…</b> là đáp án chính xác. Lỏng giữ thể tích, lấy hình dạng theo bình chứa, dễ chảy.',
      ]
    ),
  ]),

  M(7, 'Oxygen (Oxi) — vai trò với sự sống và sự cháy', [
    Q('Khí cần thiết cho hô hấp của con người và động vật là?',
      ['Khí oxygen (O2)', 'Khí carbon dioxide (CO2)', 'Khí methane', 'Khí nitrogen (N2)'], 0,
      '<b>Oxygen (O₂)</b> là khí cần thiết cho hô hấp tế bào của mọi sinh vật.',
      [
        '<b>Oxygen (O₂)</b> — còn gọi là <i>oxy, dưỡng khí</i> — là khí duy trì sự sống.',
        '<ul><li>Ta hít vào O₂ → phổi đưa vào máu → tế bào dùng để "đốt" thức ăn lấy năng lượng.</li><li>Sản phẩm thải ra là <b>CO₂</b> và hơi nước → thở ra.</li></ul>',
        'Không có O₂, người chỉ sống được vài phút — đó là vì sao O₂ y tế cứu được rất nhiều bệnh nhân.',
      ],
      [
        'Đúng — <b>Khí oxygen</b> là đáp án chính xác. Oxygen (O₂) là khí cần thiết cho hô hấp tế bào của mọi sinh vật.',
        'Sai — vì <b>Khí carbon dioxide</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí oxygen</b>.',
        'Sai — vì <b>Khí methane</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí oxygen</b>.',
        'Sai — vì <b>Khí nitrogen</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí oxygen</b>.',
      ]
    ),
    Q('Trong không khí, oxygen chiếm khoảng bao nhiêu phần trăm thể tích?',
      ['50%', '21%', '78%', '1%'], 1,
      'Oxygen chiếm khoảng <b>21%</b> thể tích không khí.',
      [
        '<b>Thành phần không khí (theo thể tích):</b>',
        '<ul><li><b>Nitrogen (N₂)</b>: ~78%</li><li><b>Oxygen (O₂)</b>: ~21%</li><li><b>Argon, CO₂, hơi nước, khí khác</b>: ~1%</li></ul>',
        'Nhờ <b>21% O₂</b> mà sự cháy và hô hấp diễn ra bình thường — nếu O₂ cao hơn nhiều, đám cháy sẽ rất khó dập.',
      ],
      [
        'Sai — vì <b>50%</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>21%</b>.',
        'Đúng — <b>21%</b> là đáp án chính xác. Oxygen chiếm khoảng 21% thể tích không khí.',
        'Sai — vì <b>78%</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>21%</b>.',
        'Sai — vì <b>1%</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>21%</b>.',
      ]
    ),
    Q('Oxygen rất cần cho?',
      ['Sự cháy và sự hô hấp', 'Việc tắt lửa', 'Việc làm lạnh', 'Việc gây ngủ'], 0,
      'O₂ là điều kiện <i>không thể thiếu</i> cho <b>sự cháy</b> và <b>sự hô hấp</b>.',
      [
        '<b>Hai vai trò chính của oxygen:</b>',
        '<ul><li><b>Hô hấp</b>: tế bào dùng O₂ để giải phóng năng lượng từ thức ăn.</li><li><b>Sự cháy</b>: nhiên liệu cháy khi có O₂ và đủ nhiệt → toả nhiệt + ánh sáng.</li></ul>',
        '<b>Tam giác lửa</b> = nhiên liệu + O₂ + nhiệt. Muốn dập lửa → cắt một trong ba yếu tố này.',
      ],
      [
        'Đúng — <b>Sự cháy và sự hô hấp</b> là đáp án chính xác. O₂ là điều kiện không thể thiếu cho sự cháy và sự hô hấp.',
        'Sai — vì <b>Việc tắt lửa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự cháy và sự hô hấp</b>.',
        'Sai — vì <b>Việc làm lạnh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự cháy và sự hô hấp</b>.',
        'Sai — vì <b>Việc gây ngủ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự cháy và sự hô hấp</b>.',
      ]
    ),
    Q('Một ngọn nến đậy kín trong cốc thuỷ tinh sẽ?',
      ['Tắt sau một lúc do hết O2', 'Cháy bùng lên do tích tụ khí CO2', 'Cháy to hơn', 'Cháy mãi mãi'], 0,
      'Đậy kín → nến đốt hết O₂ trong cốc → <b>nến tắt</b>.',
      [
        '<b>Thí nghiệm cốc úp nến</b> chứng minh vai trò của O₂ trong sự cháy:',
        '<ul><li>Lúc đầu: nến cháy bình thường nhờ O₂ trong cốc.</li><li>Sau vài chục giây: O₂ giảm dần, CO₂ tăng → ngọn lửa yếu rồi tắt.</li></ul>',
        '<b>Ứng dụng dập lửa:</b> dùng bình CO₂ phun lên đám cháy → đẩy O₂ ra → lửa tắt.',
      ],
      [
        'Đúng — <b>Tắt sau một lúc do hết O2</b> là đáp án chính xác. Đậy kín → nến đốt hết O₂ trong cốc → nến tắt.',
        'Sai — vì <b>Cháy bùng lên do tích tụ khí CO2</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tắt sau một lúc do hết O2</b>.',
        'Sai — vì <b>Cháy to hơn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tắt sau một lúc do hết O2</b>.',
        'Sai — vì <b>Cháy mãi mãi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tắt sau một lúc do hết O2</b>.',
      ]
    ),
    Q('Cây xanh có vai trò?',
      ['Giải phóng O2 nhờ quang hợp', 'Tạo ra khí độc', 'Hấp thụ hết O2 trong không khí', 'Không ảnh hưởng tới O2'], 0,
      'Cây xanh <b>quang hợp</b> tạo ra O₂ → nguồn cung cấp O₂ chính cho khí quyển.',
      [
        '<b>Quang hợp</b> ở cây xanh: lấy <code>CO₂ + nước</code>, dưới ánh sáng mặt trời tạo ra <code>chất hữu cơ + O₂</code>.',
        '<ul><li>Mỗi giây, cây xanh trên Trái Đất tạo ra <b>hàng tỉ tấn O₂</b>.</li><li>Rừng được gọi là "<i>lá phổi xanh</i>" của Trái Đất.</li></ul>',
        '→ Trồng cây gây rừng là cách bảo vệ nguồn O₂ và chống ô nhiễm không khí.',
      ],
      [
        'Đúng — <b>Giải phóng O2 nhờ quang hợp</b> là đáp án chính xác. Cây xanh quang hợp tạo ra O₂ → nguồn cung cấp O₂ chính cho khí quyển.',
        'Sai — vì <b>Tạo ra khí độc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giải phóng O2 nhờ quang hợp</b>.',
        'Sai — vì <b>Hấp thụ hết O2 trong không khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giải phóng O2 nhờ quang hợp</b>.',
        'Sai — vì <b>Không ảnh hưởng tới O2</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giải phóng O2 nhờ quang hợp</b>.',
      ]
    ),
    Q('Khí thường dùng cho người bệnh thiếu hô hấp ở bệnh viện là?',
      ['Helium', 'Oxygen', 'Carbon dioxide', 'Methane'], 1,
      'Bệnh viện dùng <b>oxygen y tế</b> để hỗ trợ thở.',
      [
        '<b>Oxygen y tế</b> được nén trong bình thép, dùng cho bệnh nhân:',
        '<ul><li>Khó thở do COVID-19, viêm phổi, hen suyễn.</li><li>Bệnh nhân hậu phẫu, hồi sức cấp cứu.</li><li>Trẻ sơ sinh thiếu tháng.</li></ul>',
        '⚠️ Bình O₂ rất dễ cháy nổ — phải tránh xa lửa, dầu mỡ và nguồn nhiệt.',
      ],
      [
        'Sai — vì <b>Helium</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Oxygen</b>.',
        'Đúng — <b>Oxygen</b> là đáp án chính xác. Bệnh viện dùng oxygen y tế để hỗ trợ thở.',
        'Sai — vì <b>Carbon dioxide</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Oxygen</b>.',
        'Sai — vì <b>Methane</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Oxygen</b>.',
      ]
    ),
  ]),

  M(8, 'Thành phần không khí — ô nhiễm và bảo vệ', [
    Q('Thành phần chính của không khí (theo thể tích) là?',
      ['Nitrogen (~78%) và Oxygen (~21%)', 'Chỉ hơi nước', 'Chỉ O2', 'Chỉ CO2'], 0,
      'Không khí gồm chủ yếu <b>Nitrogen ~78%</b> và <b>Oxygen ~21%</b>; còn lại 1% là khí khác.',
      [
        '<b>Thành phần không khí khô (theo thể tích):</b>',
        '<ul><li><b>N₂</b>: 78% — "khí trơ" không tham gia hô hấp.</li><li><b>O₂</b>: 21% — duy trì sự sống.</li><li><b>Argon (Ar)</b>: ~0,9%</li><li><b>CO₂</b>: ~0,04%</li><li>Hơi nước, khí khác: lượng nhỏ.</li></ul>',
        'Tỉ lệ này khá ổn định nhờ chu trình tự nhiên (quang hợp – hô hấp – đốt cháy).',
      ],
      [
        'Đúng — <b>Nitrogen (~78%) và Oxygen</b> là đáp án chính xác. Không khí gồm chủ yếu Nitrogen ~78% và Oxygen ~21%; còn lại 1% là khí khác.',
        'Sai — vì <b>Chỉ hơi nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nitrogen (~78%) và Oxygen</b>.',
        'Sai — vì <b>Chỉ O2</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nitrogen (~78%) và Oxygen</b>.',
        'Sai — vì <b>Chỉ CO2</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nitrogen (~78%) và Oxygen</b>.',
      ]
    ),
    Q('Khí carbon dioxide (CO2) trong không khí có vai trò?',
      ['Cung cấp cho cây quang hợp', 'Dập lửa hoàn toàn', 'Cho người thở', 'Tạo mưa axit'], 0,
      'CO₂ là <b>nguyên liệu cho cây quang hợp</b> tạo ra O₂ và chất hữu cơ.',
      [
        '<b>Vai trò của CO₂</b>:',
        '<ul><li>✅ <i>Tích cực</i>: nguyên liệu quang hợp; giữ ấm Trái Đất (hiệu ứng nhà kính tự nhiên).</li><li>❌ <i>Tiêu cực khi quá nhiều</i>: gây <b>nóng lên toàn cầu</b>, biến đổi khí hậu.</li></ul>',
        'Hoạt động đốt nhiên liệu hoá thạch làm CO₂ tăng nhanh — đó là vấn đề môi trường lớn nhất thế kỷ XXI.',
      ],
      [
        'Đúng — <b>Cung cấp cho cây quang hợp</b> là đáp án chính xác. CO₂ là nguyên liệu cho cây quang hợp tạo ra O₂ và chất hữu cơ.',
        'Sai — vì <b>Dập lửa hoàn toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp cho cây quang hợp</b>.',
        'Sai — vì <b>Cho người thở</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp cho cây quang hợp</b>.',
        'Sai — vì <b>Tạo mưa axit</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp cho cây quang hợp</b>.',
      ]
    ),
    Q('Nguyên nhân chính gây ô nhiễm không khí ở đô thị là?',
      ['Cây xanh', 'Hồ nước', 'Khí thải từ xe cộ, nhà máy', 'Mưa rào'], 2,
      '<b>Khí thải xe cộ và nhà máy</b> là nguồn ô nhiễm không khí chính ở thành phố.',
      [
        '<b>Nguồn ô nhiễm không khí đô thị:</b>',
        '<ul><li>🚗 Khí thải xe cộ: CO, NOₓ, bụi mịn PM2.5.</li><li>🏭 Khói nhà máy: SO₂, NOₓ, bụi.</li><li>🔥 Đốt rác, đốt rơm rạ.</li><li>🚧 Bụi từ công trình xây dựng.</li></ul>',
        'Bụi mịn <b>PM2.5</b> có thể vào sâu phổi, gây bệnh hô hấp và tim mạch.',
      ],
      [
        'Sai — vì <b>Cây xanh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí thải từ xe cộ, nhà máy</b>.',
        'Sai — vì <b>Hồ nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí thải từ xe cộ, nhà máy</b>.',
        'Đúng — <b>Khí thải từ xe cộ, nhà máy</b> là đáp án chính xác. Khí thải xe cộ và nhà máy là nguồn ô nhiễm không khí chính ở thành phố.',
        'Sai — vì <b>Mưa rào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí thải từ xe cộ, nhà máy</b>.',
      ]
    ),
    Q('Biện pháp nào giúp giảm ô nhiễm không khí?',
      ['Mở rộng nhà máy không xử lý khí', 'Phá rừng', 'Trồng nhiều cây xanh, dùng phương tiện công cộng', 'Đốt nhiều rác'], 2,
      '<b>Trồng cây + đi phương tiện công cộng</b> là 2 biện pháp hiệu quả.',
      [
        '<b>Biện pháp giảm ô nhiễm không khí:</b>',
        '<ul><li>🌳 Trồng cây xanh, bảo vệ rừng.</li><li>🚌 Dùng phương tiện công cộng, xe đạp, xe điện.</li><li>🏭 Lắp hệ thống lọc khí ở nhà máy.</li><li>♻️ Phân loại và xử lý rác đúng cách (không đốt bừa bãi).</li><li>⚡ Dùng năng lượng tái tạo (mặt trời, gió).</li></ul>',
      ],
      [
        'Sai — vì <b>Mở rộng nhà máy không xử lý khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trồng nhiều cây xanh, dùng phương tiện công c…</b>.',
        'Sai — vì <b>Phá rừng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trồng nhiều cây xanh, dùng phương tiện công c…</b>.',
        'Đúng — <b>Trồng nhiều cây xanh, dùng phương tiện công cộng</b> là đáp án chính xác. Trồng cây + đi phương tiện công cộng là 2 biện pháp hiệu quả.',
        'Sai — vì <b>Đốt nhiều rác</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trồng nhiều cây xanh, dùng phương tiện công c…</b>.',
      ]
    ),
    Q('Khi không khí ô nhiễm nặng, em nên?',
      ['Đốt thêm lá khô', 'Đeo khẩu trang, hạn chế ra ngoài', 'Hít thật sâu', 'Tập thể dục ngoài trời lâu hơn'], 1,
      '<b>Đeo khẩu trang và hạn chế ra ngoài</b> để bảo vệ hệ hô hấp.',
      [
        '<b>Khi chỉ số AQI cao (không khí xấu):</b>',
        '<ul><li>😷 Đeo khẩu trang chuẩn (N95 hoặc tương đương) khi ra ngoài.</li><li>🏠 Hạn chế ra ngoài, đóng kín cửa sổ.</li><li>🚫 KHÔNG tập thể dục cường độ cao ngoài trời.</li><li>💧 Uống nhiều nước, ăn đủ rau quả.</li></ul>',
        'Người già, trẻ em, người bệnh hô hấp cần đặc biệt cẩn thận.',
      ],
      [
        'Sai — vì <b>Đốt thêm lá khô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đeo khẩu trang, hạn chế ra ngoài</b>.',
        'Đúng — <b>Đeo khẩu trang, hạn chế ra ngoài</b> là đáp án chính xác. Đeo khẩu trang và hạn chế ra ngoài để bảo vệ hệ hô hấp.',
        'Sai — vì <b>Hít thật sâu</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đeo khẩu trang, hạn chế ra ngoài</b>.',
        'Sai — vì <b>Tập thể dục ngoài trời lâu hơn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đeo khẩu trang, hạn chế ra ngoài</b>.',
      ]
    ),
    Q('Mưa axit chủ yếu do?',
      ['Khí SO2, NOx từ nhà máy thải ra hoà với nước mưa', 'Mặt Trời', 'Cây xanh', 'Đất sạch'], 0,
      '<b>SO₂ và NOₓ</b> hoà tan trong nước mưa → axit H₂SO₃, HNO₃ → mưa axit.',
      [
        '<b>Mưa axit</b> hình thành khi:',
        '<ul><li>Khí thải <code>SO₂, NOₓ</code> từ nhà máy, xe cộ bay lên cao.</li><li>Gặp hơi nước trong mây → tạo axit yếu.</li><li>Rơi xuống thành mưa có pH < 5,6.</li></ul>',
        '<b>Tác hại:</b> phá rừng, làm cá chết trong hồ, ăn mòn tượng đá và công trình.',
      ],
      [
        'Đúng — <b>Khí SO2, NOx từ nhà máy thải ra hoà với nước mưa</b> là đáp án chính xác. SO₂ và NOₓ hoà tan trong nước mưa → axit H₂SO₃, HNO₃ → mưa axit.',
        'Sai — vì <b>Mặt Trời</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí SO2, NOx từ nhà máy thải ra hoà với nước…</b>.',
        'Sai — vì <b>Cây xanh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí SO2, NOx từ nhà máy thải ra hoà với nước…</b>.',
        'Sai — vì <b>Đất sạch</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khí SO2, NOx từ nhà máy thải ra hoà với nước…</b>.',
      ]
    ),
  ]),

  M(9, 'Một số vật liệu thông dụng (1) — kim loại, nhựa', [
    Q('Vật liệu nào dẫn điện và dẫn nhiệt tốt?',
      ['Kim loại', 'Gỗ khô', 'Thuỷ tinh', 'Cao su'], 0,
      '<b>Kim loại</b> dẫn điện và dẫn nhiệt tốt — đặc tính nổi bật.',
      [
        '<b>Tính chất chung của kim loại:</b>',
        '<ul><li>⚡ <b>Dẫn điện tốt</b> — dùng làm dây điện (đồng, nhôm).</li><li>🔥 <b>Dẫn nhiệt tốt</b> — dùng làm nồi, chảo.</li><li>✨ Có <b>ánh kim</b>, có thể dát mỏng hoặc kéo sợi.</li><li>🔊 Gõ vào có tiếng vang ("kim loại reo").</li></ul>',
        'Phi kim như gỗ, thuỷ tinh, cao su thường <i>cách điện và cách nhiệt</i>.',
      ],
      [
        'Đúng — <b>Kim loại</b> là đáp án chính xác. Kim loại dẫn điện và dẫn nhiệt tốt — đặc tính nổi bật.',
        'Sai — vì <b>Gỗ khô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kim loại</b>.',
        'Sai — vì <b>Thuỷ tinh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kim loại</b>.',
        'Sai — vì <b>Cao su</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kim loại</b>.',
      ]
    ),
    Q('Đồ vật bằng nhôm, sắt, đồng được làm từ?',
      ['Kim loại', 'Đất sét', 'Thực vật', 'Hợp kim phi kim'], 0,
      'Nhôm, sắt, đồng đều là <b>kim loại</b>.',
      [
        '<b>Một số kim loại thường gặp:</b>',
        '<ul><li><b>Sắt (Fe)</b>: làm khung nhà, đinh, dao kéo. Dễ bị gỉ.</li><li><b>Nhôm (Al)</b>: nhẹ, không gỉ — làm xoong, khung cửa, vỏ máy bay.</li><li><b>Đồng (Cu)</b>: dẫn điện rất tốt — làm dây điện, đồ trang trí.</li><li><b>Kẽm, chì, vàng, bạc…</b></li></ul>',
      ],
      [
        'Đúng — <b>Kim loại</b> là đáp án chính xác. Nhôm, sắt, đồng đều là kim loại. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>Đất sét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kim loại</b>.',
        'Sai — vì <b>Thực vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kim loại</b>.',
        'Sai — vì <b>Hợp kim phi kim</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kim loại</b>.',
      ]
    ),
    Q('Tính chất quan trọng của nhựa là?',
      ['Rất nặng', 'Nhẹ, cách điện, khó phân huỷ', 'Dẫn điện rất tốt', 'Tan trong nước'], 1,
      'Nhựa <b>nhẹ, cách điện, bền nhưng khó phân huỷ</b>.',
      [
        '<b>Đặc điểm của nhựa</b> (vật liệu polymer tổng hợp):',
        '<ul><li>Nhẹ, bền, không bị gỉ.</li><li>Cách điện, cách nhiệt tốt.</li><li>Dễ tạo hình, giá rẻ.</li><li>❌ Rất <b>khó phân huỷ</b> — tồn tại hàng trăm năm trong môi trường.</li></ul>',
        'Một số loại nhựa thường gặp: <code>PE, PP, PET, PVC</code>.',
      ],
      [
        'Sai — vì <b>Rất nặng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhẹ, cách điện, khó phân huỷ</b>.',
        'Đúng — <b>Nhẹ, cách điện, khó phân huỷ</b> là đáp án chính xác. Nhựa nhẹ, cách điện, bền nhưng khó phân huỷ.',
        'Sai — vì <b>Dẫn điện rất tốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhẹ, cách điện, khó phân huỷ</b>.',
        'Sai — vì <b>Tan trong nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhẹ, cách điện, khó phân huỷ</b>.',
      ]
    ),
    Q('Nhược điểm môi trường của đồ nhựa là?',
      ['Không gây ô nhiễm', 'Khó phân huỷ, gây ô nhiễm lâu dài', 'Tự biến mất sau 1 ngày', 'Dễ tan trong nước'], 1,
      'Nhựa <b>khó phân huỷ</b> → tồn tại 100–500 năm, gây ô nhiễm đất và biển.',
      [
        '<b>Vấn đề rác thải nhựa:</b>',
        '<ul><li>Túi nilon phân huỷ trong <code>100–500 năm</code>.</li><li>Rác nhựa trôi ra biển → vỡ vụn thành <b>vi nhựa</b> → vào chuỗi thức ăn.</li><li>Đốt nhựa sinh ra khí độc (dioxin).</li></ul>',
        'Mỗi năm có hàng triệu tấn rác nhựa đổ ra đại dương — Việt Nam là một trong những nước xả nhiều nhất.',
      ],
      [
        'Sai — vì <b>Không gây ô nhiễm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khó phân huỷ, gây ô nhiễm lâu dài</b>.',
        'Đúng — <b>Khó phân huỷ, gây ô nhiễm lâu dài</b> là đáp án chính xác. Nhựa khó phân huỷ → tồn tại 100–500 năm, gây ô nhiễm đất và biển.',
        'Sai — vì <b>Tự biến mất sau 1 ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khó phân huỷ, gây ô nhiễm lâu dài</b>.',
        'Sai — vì <b>Dễ tan trong nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khó phân huỷ, gây ô nhiễm lâu dài</b>.',
      ]
    ),
    Q('Để hạn chế rác thải nhựa, em nên?',
      ['Đốt nhựa trong nhà', 'Dùng túi vải, bình nước cá nhân, hạn chế dùng 1 lần', 'Dùng đồ nhựa rồi vứt bừa bãi', 'Vứt nhựa xuống biển'], 1,
      'Áp dụng nguyên tắc <b>3R: Reduce – Reuse – Recycle</b>.',
      [
        '<b>Nguyên tắc 3R</b> giảm rác nhựa:',
        '<ul><li><b>Reduce</b> (giảm): dùng túi vải, bình nước cá nhân, hạn chế ống hút nhựa.</li><li><b>Reuse</b> (tái sử dụng): rửa và dùng lại hộp nhựa, chai lọ.</li><li><b>Recycle</b> (tái chế): phân loại rác để chuyển đi tái chế.</li></ul>',
        '🚫 KHÔNG đốt nhựa trong nhà — sinh khí cực độc.',
      ],
      [
        'Sai — vì <b>Đốt nhựa trong nhà</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dùng túi vải, bình nước cá nhân, hạn chế dùng…</b>.',
        'Đúng — <b>Dùng túi vải, bình nước cá nhân, hạn chế dùng 1 lần</b> là đáp án chính xác. Áp dụng nguyên tắc 3R: Reduce – Reuse – Recycle.',
        'Sai — vì <b>Dùng đồ nhựa rồi vứt bừa bãi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dùng túi vải, bình nước cá nhân, hạn chế dùng…</b>.',
        'Sai — vì <b>Vứt nhựa xuống biển</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dùng túi vải, bình nước cá nhân, hạn chế dùng…</b>.',
      ]
    ),
    Q('Sắt để lâu trong không khí ẩm thường?',
      ['Biến thành vàng', 'Nhẹ hơn', 'Sáng hơn', 'Bị gỉ (han gỉ)'], 3,
      'Sắt + O₂ + nước → <b>gỉ sắt (Fe₂O₃·nH₂O)</b> màu nâu đỏ.',
      [
        '<b>Sự gỉ sét của sắt:</b>',
        '<ul><li>Phản ứng: <code>Sắt + Oxy + Nước → Gỉ sắt</code>.</li><li>Càng ẩm, càng nhiều O₂ → gỉ càng nhanh.</li><li>Gỉ sắt giòn, dễ bong → làm yếu đồ vật.</li></ul>',
        '<b>Cách chống gỉ:</b> sơn phủ, mạ kẽm/crôm, bôi dầu mỡ, dùng hợp kim không gỉ (inox).',
      ],
      [
        'Sai — vì <b>Biến thành vàng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bị gỉ</b>.',
        'Sai — vì <b>Nhẹ hơn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bị gỉ</b>.',
        'Sai — vì <b>Sáng hơn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bị gỉ</b>.',
        'Đúng — <b>Bị gỉ</b> là đáp án chính xác. Sắt + O₂ + nước → gỉ sắt (Fe₂O₃·nH₂O) màu nâu đỏ.',
      ]
    ),
  ]),

  M(10, 'Một số vật liệu thông dụng (2) — gỗ, cao su, thuỷ tinh', [
    Q('Gỗ là vật liệu có nguồn gốc?',
      ['Hoá chất tổng hợp', 'Khoáng sản', 'Động vật', 'Thực vật (cây xanh)'], 3,
      'Gỗ lấy từ <b>thân cây</b> — nguồn gốc thực vật.',
      [
        '<b>Gỗ</b> là vật liệu tự nhiên có nguồn gốc <i>thực vật</i>, lấy từ thân cây gỗ.',
        '<ul><li>Thành phần chính: <code>cellulose</code> và <code>lignin</code>.</li><li>Có thể tái tạo (trồng cây) — nguồn nguyên liệu xanh.</li><li>Một số loại: gỗ lim, gỗ thông, gỗ sồi, gỗ tre…</li></ul>',
        '⚠️ Khai thác gỗ phải đi đôi với trồng rừng để bảo vệ môi trường.',
      ],
      [
        'Sai — vì <b>Hoá chất tổng hợp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thực vật</b>.',
        'Sai — vì <b>Khoáng sản</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thực vật</b>.',
        'Sai — vì <b>Động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thực vật</b>.',
        'Đúng — <b>Thực vật</b> là đáp án chính xác. Gỗ lấy từ thân cây — nguồn gốc thực vật.',
      ]
    ),
    Q('Tính chất của gỗ là?',
      ['Tan trong nước', 'Dẫn điện rất tốt', 'Trong suốt', 'Cứng vừa, dễ gia công, cách nhiệt, cách điện'], 3,
      'Gỗ <b>cứng vừa, dễ gia công, cách nhiệt và cách điện</b> tốt.',
      [
        '<b>Tính chất của gỗ:</b>',
        '<ul><li>Cứng vừa phải, có thể cưa, đục, bào.</li><li>Cách điện, cách nhiệt tốt.</li><li>Có vân đẹp tự nhiên.</li><li>❌ Dễ <b>cháy</b>, dễ <b>mục</b> khi ẩm, bị mối mọt.</li></ul>',
        'Dùng làm: bàn ghế, sàn nhà, nhạc cụ, giấy, đồ thủ công.',
      ],
      [
        'Sai — vì <b>Tan trong nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cứng vừa, dễ gia công, cách nhiệt, cách điện</b>.',
        'Sai — vì <b>Dẫn điện rất tốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cứng vừa, dễ gia công, cách nhiệt, cách điện</b>.',
        'Sai — vì <b>Trong suốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cứng vừa, dễ gia công, cách nhiệt, cách điện</b>.',
        'Đúng — <b>Cứng vừa, dễ gia công, cách nhiệt, cách điện</b> là đáp án chính xác. Gỗ cứng vừa, dễ gia công, cách nhiệt và cách điện tốt.',
      ]
    ),
    Q('Cao su có tính chất nổi bật là?',
      ['Dẫn điện rất tốt', 'Đàn hồi tốt, cách điện', 'Tan trong nước', 'Cứng như kim loại'], 1,
      '<b>Cao su đàn hồi tốt</b> và <b>cách điện</b> — dùng làm lốp xe, dây thun.',
      [
        '<b>Đặc tính cao su:</b>',
        '<ul><li><b>Đàn hồi</b>: kéo giãn, nén được rồi trở lại hình dạng cũ.</li><li><b>Cách điện</b>: dùng làm vỏ dây điện, găng tay điện.</li><li><b>Chống thấm</b> nước.</li><li>❌ Dễ bị lão hoá, nứt khi tiếp xúc dầu hoặc nắng lâu.</li></ul>',
        'Ứng dụng: lốp xe, dây thun, dép, gioăng kín, găng tay y tế…',
      ],
      [
        'Sai — vì <b>Dẫn điện rất tốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đàn hồi tốt, cách điện</b>.',
        'Đúng — <b>Đàn hồi tốt, cách điện</b> là đáp án chính xác. Cao su đàn hồi tốt và cách điện — dùng làm lốp xe, dây thun.',
        'Sai — vì <b>Tan trong nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đàn hồi tốt, cách điện</b>.',
        'Sai — vì <b>Cứng như kim loại</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đàn hồi tốt, cách điện</b>.',
      ]
    ),
    Q('Cao su thiên nhiên lấy từ?',
      ['Tre nứa', 'Mủ cây cao su', 'Đất sét', 'Khoáng sản'], 1,
      'Cao su thiên nhiên lấy từ <b>mủ cây cao su (Hevea)</b>.',
      [
        '<b>Cao su thiên nhiên</b> được khai thác từ mủ cây <i>Hevea brasiliensis</i>:',
        '<ul><li>Cạo nhẹ vỏ cây → mủ chảy ra → đông tụ → chế biến.</li><li>Việt Nam là một trong những nước xuất khẩu cao su lớn (Bình Phước, Tây Nguyên).</li></ul>',
        'Ngoài ra còn có <b>cao su tổng hợp</b> sản xuất từ dầu mỏ.',
      ],
      [
        'Sai — vì <b>Tre nứa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mủ cây cao su</b>.',
        'Đúng — <b>Mủ cây cao su</b> là đáp án chính xác. Cao su thiên nhiên lấy từ mủ cây cao su (Hevea).',
        'Sai — vì <b>Đất sét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mủ cây cao su</b>.',
        'Sai — vì <b>Khoáng sản</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mủ cây cao su</b>.',
      ]
    ),
    Q('Thuỷ tinh có đặc điểm?',
      ['Dẫn điện rất tốt', 'Đàn hồi mạnh', 'Trong suốt, cứng, dễ vỡ', 'Mềm như đất sét'], 2,
      'Thuỷ tinh <b>trong suốt, cứng nhưng giòn (dễ vỡ)</b>.',
      [
        '<b>Tính chất của thuỷ tinh:</b>',
        '<ul><li>Trong suốt — dùng làm cửa kính, kính mắt, ống nghiệm.</li><li>Cứng, chịu nhiệt, chịu hoá chất tốt.</li><li>❌ <b>Giòn</b> — dễ vỡ khi rơi hoặc va đập mạnh.</li><li>Tái chế được vô số lần.</li></ul>',
        'Thuỷ tinh được nấu chảy từ <code>cát SiO₂</code> + soda + đá vôi ở nhiệt độ rất cao (~1500 °C).',
      ],
      [
        'Sai — vì <b>Dẫn điện rất tốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trong suốt, cứng, dễ vỡ</b>.',
        'Sai — vì <b>Đàn hồi mạnh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trong suốt, cứng, dễ vỡ</b>.',
        'Đúng — <b>Trong suốt, cứng, dễ vỡ</b> là đáp án chính xác. Thuỷ tinh trong suốt, cứng nhưng giòn (dễ vỡ).',
        'Sai — vì <b>Mềm như đất sét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trong suốt, cứng, dễ vỡ</b>.',
      ]
    ),
    Q('Khi thuỷ tinh vỡ, em phải?',
      ['Đeo găng dày, dùng chổi quét, không nhặt tay không', 'Nhặt bằng tay không', 'Đập thêm cho vỡ vụn', 'Bỏ qua mảnh vỡ'], 0,
      '<b>Đeo găng dày + dùng chổi quét</b>, tuyệt đối KHÔNG nhặt bằng tay không.',
      [
        '<b>Quy trình xử lý thuỷ tinh vỡ an toàn:</b>',
        '<ul><li>① Đuổi mọi người ra xa.</li><li>② Đeo <b>găng tay dày</b>.</li><li>③ Dùng <b>chổi và hót rác</b> quét sạch mảnh lớn.</li><li>④ Lau ướt khu vực bằng giẻ ẩm để gom mảnh vụn.</li><li>⑤ Gói kín vào giấy báo dày trước khi vứt — báo người thu rác biết.</li></ul>',
      ],
      [
        'Đúng — <b>Đeo găng dày, dùng chổi quét, không nhặt tay không</b> là đáp án chính xác. Đeo găng dày + dùng chổi quét, tuyệt đối KHÔNG nhặt bằng tay không.',
        'Sai — vì <b>Nhặt bằng tay không</b> là hành vi <b>nguy hiểm</b>, không đảm bảo an toàn. Đáp án đúng là <b>Đeo găng dày, dùng chổi quét, không nhặt tay…</b>.',
        'Sai — vì <b>Đập thêm cho vỡ vụn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đeo găng dày, dùng chổi quét, không nhặt tay…</b>.',
        'Sai — vì <b>Bỏ qua mảnh vỡ</b> là hành vi <b>nguy hiểm</b>, không đảm bảo an toàn. Đáp án đúng là <b>Đeo găng dày, dùng chổi quét, không nhặt tay…</b>.',
      ]
    ),
  ]),

  M(11, 'Nhiên liệu và năng lượng', [
    Q('Nhiên liệu là chất khi cháy giải phóng?',
      ['Nước nguyên chất', 'Năng lượng (nhiệt, ánh sáng)', 'Chất rắn không cháy được', 'Khí O2'], 1,
      'Nhiên liệu cháy → giải phóng <b>nhiệt và ánh sáng</b>.',
      [
        '<b>Nhiên liệu</b> là chất khi cháy <i>toả nhiệt</i> và <i>phát sáng</i>, được dùng để cung cấp năng lượng.',
        '<ul><li>Phân loại theo nguồn gốc: hoá thạch (than, dầu, khí) và sinh học (gỗ, củi, ethanol).</li><li>Phân loại theo thể: rắn (than), lỏng (xăng, dầu), khí (gas).</li></ul>',
        'Nhiên liệu cháy <b>cần O₂</b> — không có oxygen, không có sự cháy.',
      ],
      [
        'Sai — vì <b>Nước nguyên chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng</b>.',
        'Đúng — <b>Năng lượng</b> là đáp án chính xác. Nhiên liệu cháy → giải phóng nhiệt và ánh sáng.',
        'Sai — vì <b>Chất rắn không cháy được</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng</b>.',
        'Sai — vì <b>Khí O2</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng</b>.',
      ]
    ),
    Q('Nhóm nhiên liệu hoá thạch gồm?',
      ['Sữa, gạo, rau', 'Sắt, đồng, nhôm', 'Than đá, dầu mỏ, khí thiên nhiên', 'Gió, nước, nắng'], 2,
      'Nhiên liệu hoá thạch: <b>than đá, dầu mỏ, khí thiên nhiên</b>.',
      [
        '<b>Nhiên liệu hoá thạch</b> hình thành từ xác sinh vật bị vùi lấp hàng triệu năm:',
        '<ul><li><b>Than đá</b>: dùng cho nhà máy nhiệt điện, luyện kim.</li><li><b>Dầu mỏ</b>: chưng cất tạo xăng, dầu diesel, dầu hoả.</li><li><b>Khí thiên nhiên</b>: bếp gas, nhà máy điện khí.</li></ul>',
        '❌ Có hạn, cạn dần. Cháy sinh nhiều CO₂ → gây nóng lên toàn cầu.',
      ],
      [
        'Sai — vì <b>Sữa, gạo, rau</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Than đá, dầu mỏ, khí thiên nhiên</b>.',
        'Sai — vì <b>Sắt, đồng, nhôm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Than đá, dầu mỏ, khí thiên nhiên</b>.',
        'Đúng — <b>Than đá, dầu mỏ, khí thiên nhiên</b> là đáp án chính xác. Nhiên liệu hoá thạch: than đá, dầu mỏ, khí thiên nhiên.',
        'Sai — vì <b>Gió, nước, nắng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Than đá, dầu mỏ, khí thiên nhiên</b>.',
      ]
    ),
    Q('Xăng dùng cho xe máy, ô tô được chế biến từ?',
      ['Quặng sắt', 'Dầu mỏ', 'Cây mía', 'Nước biển'], 1,
      'Xăng là sản phẩm <b>chưng cất từ dầu mỏ</b>.',
      [
        '<b>Chưng cất dầu mỏ</b> tách dầu thô thành nhiều phân đoạn:',
        '<ul><li>Khí hoá lỏng (LPG) → bếp gas.</li><li>Xăng → ô tô, xe máy.</li><li>Dầu hoả → máy bay phản lực.</li><li>Dầu diesel → xe tải, tàu thuỷ.</li><li>Mazut, nhựa đường → công nghiệp.</li></ul>',
        'Việt Nam có nhà máy lọc dầu Dung Quất, Nghi Sơn.',
      ],
      [
        'Sai — vì <b>Quặng sắt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dầu mỏ</b>.',
        'Đúng — <b>Dầu mỏ</b> là đáp án chính xác. Xăng là sản phẩm chưng cất từ dầu mỏ. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>Cây mía</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dầu mỏ</b>.',
        'Sai — vì <b>Nước biển</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dầu mỏ</b>.',
      ]
    ),
    Q('Năng lượng tái tạo gồm?',
      ['Năng lượng mặt trời, gió, thuỷ điện', 'Than đá', 'Dầu mỏ', 'Khí thiên nhiên'], 0,
      'Tái tạo: <b>mặt trời, gió, thuỷ điện, sinh khối, địa nhiệt</b>.',
      [
        '<b>Năng lượng tái tạo</b> là nguồn không cạn kiệt trong tầm vóc loài người:',
        '<ul><li>☀️ <b>Mặt trời</b>: pin quang điện, đun nước nóng.</li><li>💨 <b>Gió</b>: tuabin gió.</li><li>💧 <b>Nước</b>: thuỷ điện, sóng biển, thuỷ triều.</li><li>🌱 <b>Sinh khối</b>: cồn từ mía, biogas từ phân chuồng.</li><li>🌋 <b>Địa nhiệt</b>: hơi nóng từ lòng đất.</li></ul>',
        '✅ Sạch, không phát CO₂ — xu hướng năng lượng tương lai.',
      ],
      [
        'Đúng — <b>Năng lượng mặt trời, gió, thuỷ điện</b> là đáp án chính xác. Tái tạo: mặt trời, gió, thuỷ điện, sinh khối, địa nhiệt.',
        'Sai — vì <b>Than đá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng mặt trời, gió, thuỷ điện</b>.',
        'Sai — vì <b>Dầu mỏ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng mặt trời, gió, thuỷ điện</b>.',
        'Sai — vì <b>Khí thiên nhiên</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng mặt trời, gió, thuỷ điện</b>.',
      ]
    ),
    Q('Khi sử dụng nhiên liệu, em nên?',
      ['Tiết kiệm, đốt cháy hiệu quả', 'Đốt bừa bãi', 'Đốt càng nhiều càng tốt', 'Để rò rỉ'], 0,
      '<b>Tiết kiệm + đốt cháy hiệu quả</b> vì nhiên liệu hoá thạch <i>có hạn</i>.',
      [
        '<b>Vì sao phải tiết kiệm nhiên liệu?</b>',
        '<ul><li>Trữ lượng có hạn, hàng triệu năm mới tạo ra.</li><li>Cháy nhiên liệu thải CO₂ gây biến đổi khí hậu.</li><li>Tiết kiệm = tiết kiệm tiền bạc.</li></ul>',
        '<b>Cách dùng hiệu quả:</b> dùng bếp tiết kiệm, bảo dưỡng xe đều, đi chung xe, dùng phương tiện công cộng.',
      ],
      [
        'Đúng — <b>Tiết kiệm, đốt cháy hiệu quả</b> là đáp án chính xác. Tiết kiệm + đốt cháy hiệu quả vì nhiên liệu hoá thạch có hạn.',
        'Sai — vì <b>Đốt bừa bãi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tiết kiệm, đốt cháy hiệu quả</b>.',
        'Sai — vì <b>Đốt càng nhiều càng tốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tiết kiệm, đốt cháy hiệu quả</b>.',
        'Sai — vì <b>Để rò rỉ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tiết kiệm, đốt cháy hiệu quả</b>.',
      ]
    ),
    Q('Lợi ích lớn của năng lượng mặt trời là?',
      ['Rất khan hiếm', 'Có thể nổ bất ngờ', 'Sạch, không cạn kiệt', 'Gây ô nhiễm nặng'], 2,
      'Năng lượng mặt trời <b>sạch, vô tận</b> trong tầm con người.',
      [
        '<b>Năng lượng mặt trời</b> có ưu điểm vượt trội:',
        '<ul><li>✅ Sạch, không phát CO₂.</li><li>✅ Vô tận (Mặt Trời còn cháy thêm ~5 tỉ năm).</li><li>✅ Có ở mọi nơi — không cần vận chuyển.</li><li>❌ Phụ thuộc thời tiết, cần pin lưu trữ.</li></ul>',
        'Việt Nam có tiềm năng lớn — đặc biệt ở miền Nam, Tây Nguyên với nhiều giờ nắng/năm.',
      ],
      [
        'Sai — vì <b>Rất khan hiếm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sạch, không cạn kiệt</b>.',
        'Sai — vì <b>Có thể nổ bất ngờ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sạch, không cạn kiệt</b>.',
        'Đúng — <b>Sạch, không cạn kiệt</b> là đáp án chính xác. Năng lượng mặt trời sạch, vô tận trong tầm con người.',
        'Sai — vì <b>Gây ô nhiễm nặng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sạch, không cạn kiệt</b>.',
      ]
    ),
  ]),

  M(12, 'Lương thực, thực phẩm', [
    Q('Lương thực là?',
      ['Thịt, cá, trứng', 'Đá, cát', 'Gạo, ngô, khoai, sắn — chứa nhiều tinh bột', 'Rau, củ, quả tươi'], 2,
      '<b>Lương thực</b> = nhóm cung cấp <i>tinh bột</i>: gạo, ngô, khoai, sắn.',
      [
        '<b>Lương thực</b> là nhóm thực phẩm cung cấp năng lượng chủ yếu nhờ chứa nhiều <i>tinh bột</i>.',
        '<ul><li>Gạo (lúa nước) — lương thực chính của người Việt.</li><li>Ngô, khoai lang, khoai tây, sắn (củ mì).</li><li>Lúa mì, lúa mạch — dùng làm bánh mì, mì sợi.</li></ul>',
        'Tinh bột khi vào cơ thể được phân giải thành đường → cung cấp năng lượng cho hoạt động.',
      ],
      [
        'Sai — vì <b>Thịt, cá, trứng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Gạo, ngô, khoai, sắn — chứa nhiều tinh bột</b>.',
        'Sai — vì <b>Đá, cát</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Gạo, ngô, khoai, sắn — chứa nhiều tinh bột</b>.',
        'Đúng — <b>Gạo, ngô, khoai, sắn — chứa nhiều tinh bột</b> là đáp án chính xác. Lương thực = nhóm cung cấp tinh bột: gạo, ngô, khoai, sắn.',
        'Sai — vì <b>Rau, củ, quả tươi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Gạo, ngô, khoai, sắn — chứa nhiều tinh bột</b>.',
      ]
    ),
    Q('Thực phẩm cung cấp đạm (protein) chủ yếu là?',
      ['Bánh kẹo', 'Gạo, ngô', 'Nước lọc', 'Thịt, cá, trứng, sữa, đậu'], 3,
      '<b>Đạm (protein)</b> có nhiều trong: thịt, cá, trứng, sữa, đậu hạt.',
      [
        '<b>Vai trò của đạm:</b> xây dựng cơ bắp, mô, enzyme và kháng thể.',
        '<ul><li>Đạm <i>động vật</i>: thịt, cá, trứng, sữa, hải sản.</li><li>Đạm <i>thực vật</i>: đậu nành, đậu xanh, đậu phụ, hạt sen.</li></ul>',
        'Trẻ em đang lớn cần đủ đạm để phát triển — nhưng ăn quá nhiều cũng không tốt.',
      ],
      [
        'Sai — vì <b>Bánh kẹo</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thịt, cá, trứng, sữa, đậu</b>.',
        'Sai — vì <b>Gạo, ngô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thịt, cá, trứng, sữa, đậu</b>.',
        'Sai — vì <b>Nước lọc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thịt, cá, trứng, sữa, đậu</b>.',
        'Đúng — <b>Thịt, cá, trứng, sữa, đậu</b> là đáp án chính xác. Đạm (protein) có nhiều trong: thịt, cá, trứng, sữa, đậu hạt.',
      ]
    ),
    Q('Rau, củ, quả tươi cung cấp chủ yếu?',
      ['Đường tinh khiết', 'Sắt vụn', 'Vitamin và chất xơ', 'Dầu mỡ'], 2,
      'Rau quả giàu <b>vitamin và chất xơ</b> — tốt cho tiêu hoá và miễn dịch.',
      [
        '<b>Rau, củ, quả tươi</b> cung cấp:',
        '<ul><li><b>Vitamin</b>: A (cà rốt), C (cam quýt), nhóm B (rau lá xanh).</li><li><b>Chất xơ</b>: giúp tiêu hoá, chống táo bón.</li><li><b>Khoáng chất</b>: sắt, kali, magie.</li><li><b>Nước</b>: chiếm 80–95% trọng lượng.</li></ul>',
        'WHO khuyến cáo nên ăn ít nhất <b>400 g rau quả/ngày</b>.',
      ],
      [
        'Sai — vì <b>Đường tinh khiết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vitamin và chất xơ</b>.',
        'Sai — vì <b>Sắt vụn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vitamin và chất xơ</b>.',
        'Đúng — <b>Vitamin và chất xơ</b> là đáp án chính xác. Rau quả giàu vitamin và chất xơ — tốt cho tiêu hoá và miễn dịch.',
        'Sai — vì <b>Dầu mỡ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vitamin và chất xơ</b>.',
      ]
    ),
    Q('Để bảo quản thực phẩm tốt, ta thường?',
      ['Để ngoài trời nắng nóng', 'Để chung với hoá chất tẩy rửa', 'Mở nắp lâu ngày', 'Giữ lạnh, đóng gói kín, hạn chế ẩm'], 3,
      '<b>Giữ lạnh + đóng gói kín + hạn chế ẩm</b> giúp thực phẩm lâu hỏng.',
      [
        '<b>Nguyên tắc bảo quản thực phẩm:</b>',
        '<ul><li>🧊 <b>Lạnh</b>: vi khuẩn ít phát triển ở nhiệt độ thấp (tủ lạnh 4 °C, tủ đông -18 °C).</li><li>📦 <b>Đóng gói kín</b>: tránh tiếp xúc không khí và côn trùng.</li><li>☀️ <b>Khô ráo</b>: làm khô (phơi nắng) như cá khô, thịt khô.</li><li>🧂 <b>Muối, đường, giấm</b>: tạo môi trường vi khuẩn khó sống.</li></ul>',
      ],
      [
        'Sai — vì <b>Để ngoài trời nắng nóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giữ lạnh, đóng gói kín, hạn chế ẩm</b>.',
        'Sai — vì <b>Để chung với hoá chất tẩy rửa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giữ lạnh, đóng gói kín, hạn chế ẩm</b>.',
        'Sai — vì <b>Mở nắp lâu ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giữ lạnh, đóng gói kín, hạn chế ẩm</b>.',
        'Đúng — <b>Giữ lạnh, đóng gói kín, hạn chế ẩm</b> là đáp án chính xác. Giữ lạnh + đóng gói kín + hạn chế ẩm giúp thực phẩm lâu hỏng.',
      ]
    ),
    Q('Thực phẩm bị ôi thiu, mốc thì?',
      ['Ăn ít vẫn an toàn', 'Đem cho động vật ăn', 'Nấu lại vẫn ăn tốt', 'Tuyệt đối không ăn, dễ ngộ độc'], 3,
      '<b>TUYỆT ĐỐI không ăn</b> — vi khuẩn và nấm mốc sinh độc tố không bị phá huỷ khi đun.',
      [
        '<b>Vì sao thực phẩm ôi thiu/mốc rất nguy hiểm?</b>',
        '<ul><li>Vi khuẩn sinh sôi → tiết <b>độc tố</b>.</li><li>Nấm mốc (như <i>Aspergillus</i>) sinh độc tố <code>aflatoxin</code> gây ung thư gan.</li><li>Nấu lại KHÔNG phá huỷ được độc tố.</li></ul>',
        '🚫 Đậu phộng mốc, gạo mốc, bánh mì mốc — vứt bỏ ngay, kể cả chỉ một góc.',
      ],
      [
        'Sai — vì <b>Ăn ít vẫn an toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tuyệt đối không ăn, dễ ngộ độc</b>.',
        'Sai — vì <b>Đem cho động vật ăn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tuyệt đối không ăn, dễ ngộ độc</b>.',
        'Sai — vì <b>Nấu lại vẫn ăn tốt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tuyệt đối không ăn, dễ ngộ độc</b>.',
        'Đúng — <b>Tuyệt đối không ăn, dễ ngộ độc</b> là đáp án chính xác. TUYỆT ĐỐI không ăn — vi khuẩn và nấm mốc sinh độc tố không bị phá huỷ khi đun.',
      ]
    ),
    Q('Một chế độ ăn cân đối nên có?',
      ['Đủ tinh bột, đạm, chất béo, vitamin, khoáng, đủ nước', 'Chỉ uống nước ngọt', 'Chỉ ăn rau', 'Chỉ ăn thịt'], 0,
      'Bữa ăn cân đối cần đủ <b>5 nhóm chất</b> + nước.',
      [
        '<b>Tháp dinh dưỡng cân đối</b> gồm:',
        '<ul><li><b>Tinh bột</b> (cơm, bánh mì): năng lượng — đáy tháp.</li><li><b>Đạm</b> (thịt, cá, đậu): xây dựng cơ thể.</li><li><b>Chất béo</b> (dầu, mỡ): năng lượng dự trữ — vừa phải.</li><li><b>Vitamin & khoáng</b> (rau, quả): điều hoà.</li><li><b>Nước</b>: 1,5–2 lít/ngày.</li></ul>',
        'Hạn chế đường, muối, đồ ăn nhanh — đó là đỉnh tháp (ăn ít).',
      ],
      [
        'Đúng — <b>Đủ tinh bột, đạm, chất béo, vitamin, khoáng, đủ nước</b> là đáp án chính xác. Bữa ăn cân đối cần đủ 5 nhóm chất + nước.',
        'Sai — vì <b>Chỉ uống nước ngọt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đủ tinh bột, đạm, chất béo, vitamin, khoáng,…</b>.',
        'Sai — vì <b>Chỉ ăn rau</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đủ tinh bột, đạm, chất béo, vitamin, khoáng,…</b>.',
        'Sai — vì <b>Chỉ ăn thịt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đủ tinh bột, đạm, chất béo, vitamin, khoáng,…</b>.',
      ]
    ),
  ]),

  M(13, 'Hỗn hợp — chất tinh khiết — dung dịch', [
    Q('Chất tinh khiết là?',
      ['Hỗn hợp của nhiều chất', 'Chất chỉ gồm 1 loại chất, có tính chất xác định', 'Bất kỳ chất nào trong tự nhiên', 'Chỉ có nước'], 1,
      '<b>Chất tinh khiết</b> chỉ chứa 1 loại chất duy nhất, có tính chất xác định.',
      [
        '<b>Chất tinh khiết</b> (chất nguyên chất) là chất <i>không trộn lẫn</i> với chất khác.',
        '<ul><li>Có <b>tính chất xác định</b>: nhiệt độ sôi, nóng chảy cố định.</li><li>Ví dụ: nước cất, đường tinh khiết, muối ăn tinh khiết.</li></ul>',
        '⚠️ Nước máy, nước khoáng, nước mưa <i>không phải</i> nước tinh khiết — chúng có hoà tan nhiều chất khác.',
      ],
      [
        'Sai — vì <b>Hỗn hợp của nhiều chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất chỉ gồm 1 loại chất, có tính chất xác đị…</b>.',
        'Đúng — <b>Chất chỉ gồm 1 loại chất, có tính chất xác định</b> là đáp án chính xác. Chất tinh khiết chỉ chứa 1 loại chất duy nhất, có tính chất xác định.',
        'Sai — vì <b>Bất kỳ chất nào trong tự nhiên</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất chỉ gồm 1 loại chất, có tính chất xác đị…</b>.',
        'Sai — vì <b>Chỉ có nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chất chỉ gồm 1 loại chất, có tính chất xác đị…</b>.',
      ]
    ),
    Q('Hỗn hợp là?',
      ['Chỉ là chất rắn', 'Chỉ gồm 1 chất', 'Chỉ là chất khí', 'Gồm 2 chất trở lên trộn lẫn'], 3,
      '<b>Hỗn hợp</b> = 2 chất trở lên trộn lẫn với nhau.',
      [
        '<b>Hỗn hợp</b> được tạo thành khi <i>2 hay nhiều chất trộn lẫn</i> với nhau, mỗi chất vẫn giữ tính chất riêng.',
        '<ul><li><b>Hỗn hợp đồng nhất</b> (dung dịch): nhìn cùng một thể, không phân lớp. Ví dụ: nước muối, nước đường.</li><li><b>Hỗn hợp không đồng nhất</b>: thấy rõ các phần khác nhau. Ví dụ: cát + nước, dầu + nước.</li></ul>',
      ],
      [
        'Sai — vì <b>Chỉ là chất rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Gồm 2 chất trở lên trộn lẫn</b>.',
        'Sai — vì <b>Chỉ gồm 1 chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Gồm 2 chất trở lên trộn lẫn</b>.',
        'Sai — vì <b>Chỉ là chất khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Gồm 2 chất trở lên trộn lẫn</b>.',
        'Đúng — <b>Gồm 2 chất trở lên trộn lẫn</b> là đáp án chính xác. Hỗn hợp = 2 chất trở lên trộn lẫn với nhau.',
      ]
    ),
    Q('Khi hoà tan muối vào nước, ta được?',
      ['Hỗn hợp không đồng nhất', 'Hai chất tách rời rõ ràng', 'Chất tinh khiết', 'Dung dịch muối — hỗn hợp đồng nhất'], 3,
      'Muối + nước → <b>dung dịch muối</b> (đồng nhất, trong suốt).',
      [
        '<b>Dung dịch</b> = hỗn hợp <i>đồng nhất</i> của chất tan trong dung môi.',
        '<ul><li><b>Chất tan</b>: chất bị hoà tan (muối, đường).</li><li><b>Dung môi</b>: chất hoà tan chất khác (thường là nước).</li><li>Sau khi hoà tan: hỗn hợp <b>trong suốt</b>, không nhìn thấy chất tan nữa.</li></ul>',
        'Ví dụ dung dịch: nước muối, nước đường, nước chanh, không khí (khí trong khí).',
      ],
      [
        'Sai — vì <b>Hỗn hợp không đồng nhất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dung dịch muối — hỗn hợp đồng nhất</b>.',
        'Sai — vì <b>Hai chất tách rời rõ ràng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dung dịch muối — hỗn hợp đồng nhất</b>.',
        'Sai — vì <b>Chất tinh khiết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dung dịch muối — hỗn hợp đồng nhất</b>.',
        'Đúng — <b>Dung dịch muối — hỗn hợp đồng nhất</b> là đáp án chính xác. Muối + nước → dung dịch muối (đồng nhất, trong suốt).',
      ]
    ),
    Q('Trong dung dịch muối – nước, nước được gọi là?',
      ['Chất rắn', 'Hỗn hợp', 'Chất tan', 'Dung môi'], 3,
      'Nước là <b>dung môi</b>; muối là <b>chất tan</b>.',
      [
        '<b>Phân biệt chất tan và dung môi:</b>',
        '<ul><li><b>Dung môi</b>: chất chiếm <i>lượng nhiều hơn</i>, hoà tan chất khác (nước trong nước muối).</li><li><b>Chất tan</b>: chất chiếm <i>lượng ít hơn</i>, bị hoà tan (muối trong nước muối).</li></ul>',
        'Nước được gọi là "<i>dung môi vạn năng</i>" vì hoà tan được rất nhiều chất.',
      ],
      [
        'Sai — vì <b>Chất rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dung môi</b>.',
        'Sai — vì <b>Hỗn hợp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dung môi</b>.',
        'Sai — vì <b>Chất tan</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dung môi</b>.',
        'Đúng — <b>Dung môi</b> là đáp án chính xác. Nước là dung môi; muối là chất tan. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
      ]
    ),
    Q('Hỗn hợp dầu và nước là?',
      ['Hỗn hợp không đồng nhất', 'Dung dịch đồng nhất', 'Chất tinh khiết', 'Chất rắn nguyên chất'], 0,
      'Dầu + nước = <b>hỗn hợp không đồng nhất</b> — dầu nổi tách lớp với nước.',
      [
        '<b>Vì sao dầu không tan trong nước?</b>',
        '<ul><li>Nước là phân tử <i>phân cực</i>, dầu <i>không phân cực</i> → không hoà tan.</li><li>Dầu nhẹ hơn nước → nổi lên trên, tạo 2 lớp rõ rệt.</li></ul>',
        '<b>Ví dụ tương tự</b>: cát + nước (cát chìm), bột mì + nước (vẩn đục) — đều là hỗn hợp không đồng nhất.',
      ],
      [
        'Đúng — <b>Hỗn hợp không đồng nhất</b> là đáp án chính xác. Dầu + nước = hỗn hợp không đồng nhất — dầu nổi tách lớp với nước.',
        'Sai — vì <b>Dung dịch đồng nhất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hỗn hợp không đồng nhất</b>.',
        'Sai — vì <b>Chất tinh khiết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hỗn hợp không đồng nhất</b>.',
        'Sai — vì <b>Chất rắn nguyên chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hỗn hợp không đồng nhất</b>.',
      ]
    ),
    Q('Ví dụ nào là dung dịch?',
      ['Bùn đất', 'Nước đường', 'Sữa chua', 'Cát + sỏi'], 1,
      '<b>Nước đường</b> là dung dịch — đồng nhất, trong suốt.',
      [
        '<b>Soi từng đáp án:</b>',
        '<ul><li>✅ <b>Nước đường</b>: đường tan hoàn toàn trong nước → dung dịch.</li><li>❌ <b>Bùn đất</b>: hạt đất lắng dưới — không đồng nhất.</li><li>❌ <b>Sữa chua</b>: huyền phù protein — vẩn đục, không đồng nhất ở cấp vi mô.</li><li>❌ <b>Cát + sỏi</b>: hỗn hợp rắn không đồng nhất.</li></ul>',
      ],
      [
        'Sai — vì <b>Bùn đất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nước đường</b>.',
        'Đúng — <b>Nước đường</b> là đáp án chính xác. Nước đường là dung dịch — đồng nhất, trong suốt.',
        'Sai — vì <b>Sữa chua</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nước đường</b>.',
        'Sai — vì <b>Cát + sỏi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nước đường</b>.',
      ]
    ),
  ]),

  M(14, 'Tách chất ra khỏi hỗn hợp', [
    Q('Để tách cát ra khỏi nước, ta dùng phương pháp?',
      ['Cô cạn', 'Nam châm hút', 'Lọc', 'Chưng cất'], 2,
      'Dùng <b>phương pháp lọc</b> — cát ở lại trên giấy lọc, nước đi qua.',
      [
        '<b>Phương pháp lọc</b> dùng để tách chất <i>rắn không tan</i> khỏi <i>chất lỏng</i>.',
        '<ul><li>Dụng cụ: phễu, giấy lọc, cốc hứng.</li><li>Nguyên lý: lỗ giấy lọc nhỏ hơn hạt rắn → giữ rắn lại, nước đi qua.</li></ul>',
        'Ứng dụng đời sống: lọc nước qua bình lọc, pha cà phê phin, lọc nước qua khăn vải.',
      ],
      [
        'Sai — vì <b>Cô cạn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lọc</b>.',
        'Sai — vì <b>Nam châm hút</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lọc</b>.',
        'Đúng — <b>Lọc</b> là đáp án chính xác. Dùng phương pháp lọc — cát ở lại trên giấy lọc, nước đi qua.',
        'Sai — vì <b>Chưng cất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lọc</b>.',
      ]
    ),
    Q('Để tách muối ra khỏi nước biển, ta dùng?',
      ['Hút nam châm', 'Đông đá', 'Cô cạn (bay hơi nước)', 'Lọc qua giấy lọc'], 2,
      '<b>Cô cạn</b>: đun cho nước bay hơi hết, muối còn lại.',
      [
        '<b>Phương pháp cô cạn</b> dùng để tách <i>chất rắn hoà tan</i> khỏi dung dịch:',
        '<ul><li>Đun nóng dung dịch → nước bay hơi → chất rắn kết tinh lại.</li><li>Ứng dụng: làm muối từ nước biển (ruộng muối phơi nắng).</li></ul>',
        '⚠️ Phương pháp này KHÔNG dùng được nếu cần giữ lại nước.',
      ],
      [
        'Sai — vì <b>Hút nam châm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cô cạn</b>.',
        'Sai — vì <b>Đông đá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cô cạn</b>.',
        'Đúng — <b>Cô cạn</b> là đáp án chính xác. Cô cạn: đun cho nước bay hơi hết, muối còn lại.',
        'Sai — vì <b>Lọc qua giấy lọc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cô cạn</b>.',
      ]
    ),
    Q('Để tách bột sắt ra khỏi bột lưu huỳnh, ta dùng?',
      ['Hoà nước rồi uống', 'Cô cạn dung dịch', 'Cô cạn', 'Nam châm'], 3,
      '<b>Nam châm</b> hút sắt vì sắt có từ tính, lưu huỳnh thì không.',
      [
        '<b>Phương pháp dùng nam châm</b> để tách chất <i>có từ tính</i> khỏi chất không từ tính:',
        '<ul><li>Sắt, niken, cobalt — bị nam châm hút.</li><li>Nhôm, đồng, vàng, gỗ, nhựa, lưu huỳnh — KHÔNG bị hút.</li></ul>',
        'Ứng dụng: phân loại phế liệu (tách sắt khỏi nhôm), tìm kim loại trong cát.',
      ],
      [
        'Sai — vì <b>Hoà nước rồi uống</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nam châm</b>.',
        'Sai — vì <b>Cô cạn dung dịch</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nam châm</b>.',
        'Sai — vì <b>Cô cạn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nam châm</b>.',
        'Đúng — <b>Nam châm</b> là đáp án chính xác. Nam châm hút sắt vì sắt có từ tính, lưu huỳnh thì không.',
      ]
    ),
    Q('Chưng cất phù hợp để tách?',
      ['Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau (ví dụ nước – rượu)', 'Bột sắt và bột nhôm', 'Đường tinh khiết', 'Cát và sỏi'], 0,
      '<b>Chưng cất</b> tách các chất lỏng có <i>nhiệt độ sôi khác nhau</i>.',
      [
        '<b>Phương pháp chưng cất</b> dựa vào sự khác nhau về <i>nhiệt độ sôi</i>:',
        '<ul><li>Đun hỗn hợp → chất có nhiệt độ sôi thấp bay hơi trước.</li><li>Hơi đi qua ống làm lạnh → ngưng tụ thành lỏng riêng.</li></ul>',
        '<b>Ứng dụng:</b> chưng cất rượu (rượu sôi ở 78 °C trước nước 100 °C), lọc dầu mỏ thành xăng/dầu hoả/diesel.',
      ],
      [
        'Đúng — <b>Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau</b> là đáp án chính xác. Chưng cất tách các chất lỏng có nhiệt độ sôi khác nhau.',
        'Sai — vì <b>Bột sắt và bột nhôm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau</b>.',
        'Sai — vì <b>Đường tinh khiết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau</b>.',
        'Sai — vì <b>Cát và sỏi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hỗn hợp lỏng – lỏng có nhiệt độ sôi khác nhau</b>.',
      ]
    ),
    Q('Khi pha cà phê bằng phin, lưới phin có vai trò?',
      ['Cô cạn', 'Chưng cất', 'Nam châm', 'Lọc (giữ bã, cho nước đi qua)'], 3,
      'Lưới phin = <b>bộ lọc</b> — giữ bã cà phê, cho nước qua.',
      [
        'Pha cà phê bằng phin = <i>ứng dụng của phương pháp lọc</i> trong đời sống:',
        '<ul><li>Bã cà phê (rắn) bị giữ lại trên lưới phin.</li><li>Nước nóng đã hoà tan chất thơm chảy qua thành dung dịch cà phê.</li></ul>',
        'Ví dụ tương tự: pha trà bằng túi lọc, lọc nước canh qua rây.',
      ],
      [
        'Sai — vì <b>Cô cạn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lọc</b>.',
        'Sai — vì <b>Chưng cất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lọc</b>.',
        'Sai — vì <b>Nam châm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lọc</b>.',
        'Đúng — <b>Lọc</b> là đáp án chính xác. Lưới phin = bộ lọc — giữ bã cà phê, cho nước qua.',
      ]
    ),
    Q('Khi làm nước mưa thành nước cất, ta dùng?',
      ['Cô cạn muối', 'Chưng cất', 'Lọc cát', 'Trộn thêm muối'], 1,
      '<b>Chưng cất</b> nước mưa cho ra nước tinh khiết (nước cất).',
      [
        '<b>Nước cất</b> = nước tinh khiết gần như tuyệt đối, không chứa khoáng chất hay vi sinh:',
        '<ul><li>Đun sôi nước → hơi nước bốc lên.</li><li>Hơi qua ống làm lạnh → ngưng tụ thành nước cất.</li><li>Các chất không bay hơi (muối, khoáng) ở lại nồi.</li></ul>',
        '<b>Ứng dụng:</b> pha thuốc tiêm, dùng trong phòng thí nghiệm, ắc-quy ô tô.',
      ],
      [
        'Sai — vì <b>Cô cạn muối</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chưng cất</b>.',
        'Đúng — <b>Chưng cất</b> là đáp án chính xác. Chưng cất nước mưa cho ra nước tinh khiết (nước cất).',
        'Sai — vì <b>Lọc cát</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chưng cất</b>.',
        'Sai — vì <b>Trộn thêm muối</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chưng cất</b>.',
      ]
    ),
  ]),

  M(15, 'Tế bào — đơn vị cơ sở của sự sống (1)', [
    Q('Đơn vị cấu tạo và chức năng cơ bản của mọi cơ thể sống là?',
      ['Nguyên tử', 'Tế bào', 'Phân tử nước', 'Cơ quan'], 1,
      '<b>Tế bào</b> là đơn vị cơ sở cấu tạo nên mọi sinh vật.',
      [
        '<b>Học thuyết tế bào</b> phát biểu:',
        '<ul><li>Mọi sinh vật đều được cấu tạo từ <b>tế bào</b>.</li><li>Tế bào là <i>đơn vị nhỏ nhất</i> thực hiện đầy đủ chức năng sống.</li><li>Tế bào mới sinh ra từ <i>tế bào có sẵn</i> bằng cách phân chia.</li></ul>',
        'Từ vi khuẩn 1 tế bào đến con người ~37 nghìn tỉ tế bào — tất cả đều bắt đầu từ 1 tế bào.',
      ],
      [
        'Sai — vì <b>Nguyên tử</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào</b>.',
        'Đúng — <b>Tế bào</b> là đáp án chính xác. Tế bào là đơn vị cơ sở cấu tạo nên mọi sinh vật.',
        'Sai — vì <b>Phân tử nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào</b>.',
        'Sai — vì <b>Cơ quan</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào</b>.',
      ]
    ),
    Q('Người phát hiện tế bào (qua quan sát nút chai bần) là?',
      ['Newton', 'Einstein', 'Edison', 'Robert Hooke'], 3,
      '<b>Robert Hooke</b> (1665) — nhìn lát nút bần qua kính hiển vi và đặt tên "cell" (tế bào).',
      [
        '<b>Lịch sử phát hiện tế bào:</b>',
        '<ul><li><b>1665</b>: <i>Robert Hooke</i> quan sát lát mỏng nút chai bần qua kính hiển vi tự chế → thấy các "phòng nhỏ" → đặt tên <code>cell</code> (tiếng Anh: cái phòng).</li><li>Sau đó nhiều nhà khoa học quan sát thấy tế bào ở cây và động vật.</li><li>Thế kỷ XIX: học thuyết tế bào được hoàn thiện.</li></ul>',
      ],
      [
        'Sai — vì <b>Newton</b> <b>Newton</b> là đơn vị đo <b>lực</b>. Đáp án đúng là <b>Robert Hooke</b>.',
        'Sai — vì <b>Einstein</b> không phải người phát hiện ra tế bào — đó là <b>Robert Hooke</b> (1665). Đáp án đúng là <b>Robert Hooke</b>.',
        'Sai — vì <b>Edison</b> không phải người phát hiện ra tế bào — đó là <b>Robert Hooke</b> (1665). Đáp án đúng là <b>Robert Hooke</b>.',
        'Đúng — <b>Robert Hooke</b> là đáp án chính xác. Robert Hooke (1665) — nhìn lát nút bần qua kính hiển vi và đặt tên "cell" (tế bào).',
      ]
    ),
    Q('Để quan sát tế bào, ta cần?',
      ['Mắt thường', 'Kính râm', 'Kính hiển vi', 'Ống nhòm'], 2,
      'Tế bào rất nhỏ (vài µm) → cần <b>kính hiển vi</b>.',
      [
        '<b>Kích thước tế bào</b> nhỏ cỡ vài <i>micromet (µm)</i> — bằng phần triệu của mét:',
        '<ul><li>Vi khuẩn: 1–10 µm.</li><li>Tế bào động vật: 10–30 µm.</li><li>Tế bào thực vật: 10–100 µm.</li><li>Trứng gà (1 tế bào khổng lồ): vài cm.</li></ul>',
        'Mắt thường chỉ thấy được vật từ ~0,1 mm trở lên → cần kính hiển vi.',
      ],
      [
        'Sai — vì <b>Mắt thường</b> mắt thường chỉ thấy vật ≥ 0,1 mm — không đủ để quan sát tế bào/vi khuẩn. Đáp án đúng là <b>Kính hiển vi</b>.',
        'Sai — vì <b>Kính râm</b> kính râm chỉ để chắn nắng, không có chức năng phóng đại. Đáp án đúng là <b>Kính hiển vi</b>.',
        'Đúng — <b>Kính hiển vi</b> là đáp án chính xác. Tế bào rất nhỏ (vài µm) → cần kính hiển vi.',
        'Sai — vì <b>Ống nhòm</b> ống nhòm nhìn xa, không phóng đại vật nhỏ ở gần như cần thiết. Đáp án đúng là <b>Kính hiển vi</b>.',
      ]
    ),
    Q('Tế bào nhân sơ KHÁC tế bào nhân thực ở chỗ?',
      ['Không có nhân hoàn chỉnh (không màng nhân)', 'Chỉ có ở động vật', 'Lớn hơn nhiều', 'Có nhiều cơ quan tử phức tạp'], 0,
      'Tế bào nhân sơ <b>không có màng nhân</b> — vật chất di truyền nằm tự do trong tế bào chất.',
      [
        '<b>Phân biệt 2 loại tế bào:</b>',
        '<ul><li><b>Nhân sơ (Prokaryote)</b>: <i>không có màng nhân</i>, không có nhiều cơ quan tử có màng. DNA nằm tự do. Đại diện: <b>vi khuẩn</b>.</li><li><b>Nhân thực (Eukaryote)</b>: <i>có màng nhân hoàn chỉnh</i>, có nhiều cơ quan tử (ti thể, lục lạp…). Đại diện: <b>nấm, thực vật, động vật</b>.</li></ul>',
      ],
      [
        'Đúng — <b>Không có nhân hoàn chỉnh</b> là đáp án chính xác. Tế bào nhân sơ không có màng nhân — vật chất di truyền nằm tự do trong tế bào chất.',
        'Sai — vì <b>Chỉ có ở động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không có nhân hoàn chỉnh</b>.',
        'Sai — vì <b>Lớn hơn nhiều</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không có nhân hoàn chỉnh</b>.',
        'Sai — vì <b>Có nhiều cơ quan tử phức tạp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không có nhân hoàn chỉnh</b>.',
      ]
    ),
    Q('Ví dụ về sinh vật có tế bào nhân sơ là?',
      ['Nấm men', 'Trùng giày (động vật nguyên sinh)', 'Cây xanh', 'Vi khuẩn'], 3,
      '<b>Vi khuẩn (bacteria)</b> là sinh vật nhân sơ điển hình.',
      [
        '<b>Sinh vật nhân sơ</b> bao gồm:',
        '<ul><li><b>Vi khuẩn</b> (Bacteria) — đa số.</li><li><b>Vi khuẩn cổ</b> (Archaea) — sống nơi khắc nghiệt.</li></ul>',
        'Tất cả nhân sơ đều là <i>đơn bào</i>, kích thước rất nhỏ (1–10 µm).',
        '⚠️ Nấm men, trùng giày, cây xanh đều là <b>nhân thực</b>.',
      ],
      [
        'Sai — vì <b>Nấm men</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vi khuẩn</b>.',
        'Sai — vì <b>Trùng giày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vi khuẩn</b>.',
        'Sai — vì <b>Cây xanh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vi khuẩn</b>.',
        'Đúng — <b>Vi khuẩn</b> là đáp án chính xác. Vi khuẩn (bacteria) là sinh vật nhân sơ điển hình.',
      ]
    ),
    Q('Ví dụ về sinh vật có tế bào nhân thực là?',
      ['Tất cả vi khuẩn', 'Vi khuẩn lam', 'Xạ khuẩn trong đất', 'Cây xanh, động vật, nấm'], 3,
      '<b>Thực vật, động vật, nấm</b> đều có tế bào nhân thực.',
      [
        '<b>Sinh vật nhân thực</b> gồm 4 giới chính:',
        '<ul><li><b>Nguyên sinh vật</b> (Protista): trùng giày, trùng roi, tảo đơn bào.</li><li><b>Nấm</b> (Fungi): nấm rơm, nấm men, nấm mốc.</li><li><b>Thực vật</b> (Plantae): cây xanh, rêu, dương xỉ.</li><li><b>Động vật</b> (Animalia): cá, chim, người…</li></ul>',
      ],
      [
        'Sai — vì <b>Tất cả vi khuẩn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cây xanh, động vật, nấm</b>.',
        'Sai — vì <b>Vi khuẩn lam</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cây xanh, động vật, nấm</b>.',
        'Sai — vì <b>Xạ khuẩn trong đất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cây xanh, động vật, nấm</b>.',
        'Đúng — <b>Cây xanh, động vật, nấm</b> là đáp án chính xác. Thực vật, động vật, nấm đều có tế bào nhân thực.',
      ]
    ),
  ]),

  M(16, 'Tế bào — đơn vị cơ sở của sự sống (2)', [
    Q('Cấu tạo cơ bản của một tế bào nhân thực gồm?',
      ['Chỉ có nhân', 'Chỉ có ti thể', 'Chỉ có màng', 'Màng tế bào, tế bào chất, nhân'], 3,
      '3 phần chính: <b>màng tế bào, tế bào chất, nhân</b>.',
      [
        '<b>Cấu tạo tế bào nhân thực</b> gồm 3 phần cơ bản:',
        '<ul><li><b>Màng tế bào</b>: lớp ngoài, kiểm soát chất ra vào.</li><li><b>Tế bào chất</b>: phần lỏng nhớt bên trong, chứa các cơ quan tử (ti thể, lục lạp, ribosome…).</li><li><b>Nhân</b>: trung tâm điều khiển, chứa DNA — vật chất di truyền.</li></ul>',
        'Có thể ví: <code>màng = tường nhà</code>, <code>tế bào chất = các phòng</code>, <code>nhân = phòng điều khiển</code>.',
      ],
      [
        'Sai — vì <b>Chỉ có nhân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Màng tế bào, tế bào chất, nhân</b>.',
        'Sai — vì <b>Chỉ có ti thể</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Màng tế bào, tế bào chất, nhân</b>.',
        'Sai — vì <b>Chỉ có màng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Màng tế bào, tế bào chất, nhân</b>.',
        'Đúng — <b>Màng tế bào, tế bào chất, nhân</b> là đáp án chính xác. 3 phần chính: màng tế bào, tế bào chất, nhân.',
      ]
    ),
    Q('Tế bào thực vật KHÁC tế bào động vật ở điểm?',
      ['Không có nhân', 'Không có màng', 'Có thành tế bào (cellulose) và lục lạp', 'Không có tế bào chất'], 2,
      'Tế bào thực vật có <b>thành cellulose</b> và <b>lục lạp</b> (cho quang hợp).',
      [
        '<b>So sánh tế bào thực vật và động vật:</b>',
        '<ul><li><b>Thực vật</b>: có <code>thành tế bào cellulose</code> (cứng cáp), <code>lục lạp</code> (xanh, quang hợp), <code>không bào trung tâm lớn</code>.</li><li><b>Động vật</b>: KHÔNG có thành tế bào, KHÔNG có lục lạp, không bào nhỏ.</li></ul>',
        'Đó là lý do cây cứng đứng được mà không cần xương, còn động vật mềm hơn nhưng linh hoạt.',
      ],
      [
        'Sai — vì <b>Không có nhân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thành tế bào (cellulose) và lục lạp</b>.',
        'Sai — vì <b>Không có màng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thành tế bào (cellulose) và lục lạp</b>.',
        'Đúng — <b>Có thành tế bào (cellulose) và lục lạp</b> là đáp án chính xác. Tế bào thực vật có thành cellulose và lục lạp (cho quang hợp).',
        'Sai — vì <b>Không có tế bào chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thành tế bào (cellulose) và lục lạp</b>.',
      ]
    ),
    Q('Cơ quan tử thực hiện quang hợp trong tế bào thực vật là?',
      ['Không bào trung tâm', 'Ribosome', 'Ti thể', 'Lục lạp (chloroplast)'], 3,
      '<b>Lục lạp</b> chứa diệp lục → thực hiện quang hợp.',
      [
        '<b>Lục lạp (chloroplast)</b> là cơ quan tử đặc trưng của thực vật:',
        '<ul><li>Chứa <b>diệp lục (chlorophyll)</b> — sắc tố xanh hấp thụ ánh sáng.</li><li>Thực hiện <b>quang hợp</b>: <code>CO₂ + H₂O + ánh sáng → chất hữu cơ + O₂</code>.</li></ul>',
        'Đó là lý do lá cây có màu xanh — vì chứa nhiều lục lạp ở mặt lá.',
      ],
      [
        'Sai — vì <b>Không bào trung tâm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lục lạp</b>.',
        'Sai — vì <b>Ribosome</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lục lạp</b>.',
        'Sai — vì <b>Ti thể</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lục lạp</b>.',
        'Đúng — <b>Lục lạp</b> là đáp án chính xác. Lục lạp chứa diệp lục → thực hiện quang hợp.',
      ]
    ),
    Q('Cơ quan tử cung cấp năng lượng cho tế bào là?',
      ['Vách tế bào', 'Lưới nội chất', 'Lục lạp', 'Ti thể (mitochondria)'], 3,
      '<b>Ti thể</b> = "nhà máy năng lượng" của tế bào.',
      [
        '<b>Ti thể (mitochondria)</b> được gọi là <i>"nhà máy năng lượng"</i> của tế bào:',
        '<ul><li>Phân giải <b>thức ăn (đường)</b> + <b>O₂</b> → giải phóng năng lượng dưới dạng <code>ATP</code>.</li><li>Có mặt trong cả tế bào thực vật và động vật.</li></ul>',
        'Tế bào nào cần nhiều năng lượng (tế bào cơ, tế bào thần kinh) có rất nhiều ti thể.',
      ],
      [
        'Sai — vì <b>Vách tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ti thể</b>.',
        'Sai — vì <b>Lưới nội chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ti thể</b>.',
        'Sai — vì <b>Lục lạp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ti thể</b>.',
        'Đúng — <b>Ti thể</b> là đáp án chính xác. Ti thể = "nhà máy năng lượng" của tế bào.',
      ]
    ),
    Q('Nhân tế bào có vai trò?',
      ['Điều khiển hoạt động sống, chứa vật chất di truyền (DNA)', 'Tổng hợp dầu', 'Quang hợp', 'Cung cấp năng lượng'], 0,
      '<b>Nhân</b> điều khiển hoạt động sống và chứa DNA — vật chất di truyền.',
      [
        '<b>Vai trò của nhân tế bào:</b>',
        '<ul><li>🧬 Chứa <b>DNA</b> — vật chất di truyền quy định mọi đặc điểm.</li><li>🧠 <i>Điều khiển</i> tổng hợp protein và mọi hoạt động sống.</li><li>🔄 Quy định sự <i>sinh sản</i> và <i>di truyền</i> đặc điểm cho thế hệ sau.</li></ul>',
        'Có thể ví nhân tế bào như "<i>bộ não và thư viện</i>" của tế bào.',
      ],
      [
        'Đúng — <b>Điều khiển hoạt động sống, chứa vật chất di truyền</b> là đáp án chính xác. Nhân điều khiển hoạt động sống và chứa DNA — vật chất di truyền.',
        'Sai — vì <b>Tổng hợp dầu</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điều khiển hoạt động sống, chứa vật chất di t…</b>.',
        'Sai — vì <b>Quang hợp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điều khiển hoạt động sống, chứa vật chất di t…</b>.',
        'Sai — vì <b>Cung cấp năng lượng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điều khiển hoạt động sống, chứa vật chất di t…</b>.',
      ]
    ),
    Q('Đa số tế bào có kích thước?',
      ['Có thể thấy rõ bằng mắt thường ở mọi loài', 'Rất nhỏ, chỉ thấy qua kính hiển vi', 'Bằng quả bóng', 'Bằng quả táo'], 1,
      'Đa số tế bào <b>rất nhỏ (vài µm)</b>, chỉ thấy được qua kính hiển vi.',
      [
        '<b>Kích thước tế bào điển hình:</b>',
        '<ul><li>Đa số: 10–100 <code>µm</code> (micromet) = phần triệu mét.</li><li>Mắt người chỉ phân biệt được vật ≥ 0,1 mm = 100 µm.</li></ul>',
        '<b>Ngoại lệ kích thước lớn:</b> trứng gà, trứng đà điểu (1 tế bào duy nhất, có lòng đỏ là nội bào), tế bào thần kinh dài đến 1 m ở động vật to.',
      ],
      [
        'Sai — vì <b>Có thể thấy rõ bằng mắt thường ở mọi loài</b> mắt thường chỉ thấy vật ≥ 0,1 mm — không đủ để quan sát tế bào/vi khuẩn. Đáp án đúng là <b>Rất nhỏ, chỉ thấy qua kính hiển vi</b>.',
        'Đúng — <b>Rất nhỏ, chỉ thấy qua kính hiển vi</b> là đáp án chính xác. Đa số tế bào rất nhỏ (vài µm), chỉ thấy được qua kính hiển vi.',
        'Sai — vì <b>Bằng quả bóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rất nhỏ, chỉ thấy qua kính hiển vi</b>.',
        'Sai — vì <b>Bằng quả táo</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rất nhỏ, chỉ thấy qua kính hiển vi</b>.',
      ]
    ),
  ]),

  M(17, 'Sự lớn lên và sinh sản của tế bào', [
    Q('Tế bào lớn lên nhờ?',
      ['Tự sinh ra từ đá', 'Trao đổi chất với môi trường, tăng kích thước', 'Hút nắng trực tiếp', 'Không lớn lên'], 1,
      'Tế bào lớn lên nhờ <b>trao đổi chất</b> — lấy dinh dưỡng để tổng hợp chất mới.',
      [
        '<b>Quá trình lớn lên của tế bào:</b>',
        '<ul><li>① Tế bào <i>lấy chất dinh dưỡng</i> và O₂ từ môi trường.</li><li>② <i>Tổng hợp chất mới</i> (protein, màng, cơ quan tử…).</li><li>③ <i>Tăng dần kích thước</i> đến giới hạn nhất định.</li></ul>',
        'Khi đạt kích thước tối đa, tế bào sẽ <b>phân chia</b> để tạo 2 tế bào con.',
      ],
      [
        'Sai — vì <b>Tự sinh ra từ đá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trao đổi chất với môi trường, tăng kích thước</b>.',
        'Đúng — <b>Trao đổi chất với môi trường, tăng kích thước</b> là đáp án chính xác. Tế bào lớn lên nhờ trao đổi chất — lấy dinh dưỡng để tổng hợp chất mới.',
        'Sai — vì <b>Hút nắng trực tiếp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trao đổi chất với môi trường, tăng kích thước</b>.',
        'Sai — vì <b>Không lớn lên</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trao đổi chất với môi trường, tăng kích thước</b>.',
      ]
    ),
    Q('Khi đạt kích thước nhất định, tế bào sẽ?',
      ['Hoá thành nước', 'Phân chia thành 2 tế bào con', 'Biến mất', 'Đứng yên mãi'], 1,
      'Tế bào <b>phân chia thành 2 tế bào con</b> — đó là cách "sinh sản" của tế bào.',
      [
        '<b>Sự phân chia tế bào</b> (phân bào):',
        '<ul><li>1 tế bào mẹ → 2 tế bào con <i>giống hệt nhau</i> về DNA.</li><li>Tế bào con tiếp tục lớn lên, sau đó lại phân chia → tăng số lượng theo cấp số.</li></ul>',
        '<b>Toán nhanh</b>: từ 1 tế bào → 2 → 4 → 8 → 16 → ... → sau 10 lần phân chia có ~1024 tế bào.',
      ],
      [
        'Sai — vì <b>Hoá thành nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phân chia thành 2 tế bào con</b>.',
        'Đúng — <b>Phân chia thành 2 tế bào con</b> là đáp án chính xác. Tế bào phân chia thành 2 tế bào con — đó là cách "sinh sản" của tế bào.',
        'Sai — vì <b>Biến mất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phân chia thành 2 tế bào con</b>.',
        'Sai — vì <b>Đứng yên mãi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phân chia thành 2 tế bào con</b>.',
      ]
    ),
    Q('Sự lớn lên và sinh sản của tế bào giúp cơ thể?',
      ['Lớn lên, thay thế tế bào già/chết', 'Không thay đổi', 'Nhỏ đi', 'Biến thành chất rắn'], 0,
      'Giúp cơ thể <b>lớn lên</b> và <b>thay thế tế bào già/chết</b>.',
      [
        '<b>Ý nghĩa của sự phân chia tế bào:</b>',
        '<ul><li>🌱 <b>Sinh trưởng</b>: từ 1 hợp tử → bé sơ sinh → trẻ em → người lớn.</li><li>🩹 <b>Hồi phục tổn thương</b>: vết thương lành lại nhờ tế bào da mới.</li><li>🔄 <b>Thay thế</b> tế bào già/chết (tế bào máu, tế bào ruột mới liên tục).</li><li>👶 <b>Sinh sản</b>: tạo giao tử để có con.</li></ul>',
      ],
      [
        'Đúng — <b>Lớn lên, thay thế tế bào già/chết</b> là đáp án chính xác. Giúp cơ thể lớn lên và thay thế tế bào già/chết.',
        'Sai — vì <b>Không thay đổi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lớn lên, thay thế tế bào già/chết</b>.',
        'Sai — vì <b>Nhỏ đi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lớn lên, thay thế tế bào già/chết</b>.',
        'Sai — vì <b>Biến thành chất rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lớn lên, thay thế tế bào già/chết</b>.',
      ]
    ),
    Q('Khi em bị đứt tay nhẹ và lành lại, đó là nhờ?',
      ['Kim loại tự dán lại', 'Tế bào phân chia, thay thế vùng tổn thương', 'Vi khuẩn lấp đầy', 'Tế bào hoá thành đá'], 1,
      'Vết thương lành nhờ <b>tế bào da phân chia, thay thế vùng tổn thương</b>.',
      [
        '<b>Quá trình lành vết thương</b> qua các giai đoạn:',
        '<ul><li>① Cầm máu (cục máu đông bịt kín).</li><li>② Viêm: tế bào miễn dịch dọn vi khuẩn và mô chết.</li><li>③ Tăng sinh: <b>tế bào da phân chia</b>, kéo da non lấp đầy vết thương.</li><li>④ Tái cấu trúc: hình thành mô mới hoàn chỉnh.</li></ul>',
      ],
      [
        'Sai — vì <b>Kim loại tự dán lại</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào phân chia, thay thế vùng tổn thương</b>.',
        'Đúng — <b>Tế bào phân chia, thay thế vùng tổn thương</b> là đáp án chính xác. Vết thương lành nhờ tế bào da phân chia, thay thế vùng tổn thương.',
        'Sai — vì <b>Vi khuẩn lấp đầy</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào phân chia, thay thế vùng tổn thương</b>.',
        'Sai — vì <b>Tế bào hoá thành đá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào phân chia, thay thế vùng tổn thương</b>.',
      ]
    ),
    Q('Tế bào có tuổi thọ?',
      ['Chỉ sống 1 giây', 'Sống mãi không chết', 'Có giới hạn, tuỳ loại tế bào', 'Không có khái niệm tuổi'], 2,
      'Tuổi thọ tế bào <b>có giới hạn</b>, tuỳ loại.',
      [
        '<b>Tuổi thọ một số loại tế bào ở người:</b>',
        '<ul><li>Tế bào ruột: ~3–5 ngày.</li><li>Tế bào hồng cầu: ~120 ngày.</li><li>Tế bào da: ~2–4 tuần.</li><li>Tế bào gan: ~150–500 ngày.</li><li>Tế bào thần kinh: gần bằng tuổi đời con người.</li></ul>',
        'Tế bào già/chết được thay thế liên tục bởi tế bào mới.',
      ],
      [
        'Sai — vì <b>Chỉ sống 1 giây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có giới hạn, tuỳ loại tế bào</b>.',
        'Sai — vì <b>Sống mãi không chết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có giới hạn, tuỳ loại tế bào</b>.',
        'Đúng — <b>Có giới hạn, tuỳ loại tế bào</b> là đáp án chính xác. Tuổi thọ tế bào có giới hạn, tuỳ loại.',
        'Sai — vì <b>Không có khái niệm tuổi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có giới hạn, tuỳ loại tế bào</b>.',
      ]
    ),
    Q('Ung thư là hiện tượng?',
      ['Tế bào hoá vàng', 'Tế bào phân chia mất kiểm soát', 'Cơ thể hết tế bào', 'Tế bào ngừng phân chia hẳn'], 1,
      '<b>Ung thư</b> = tế bào phân chia mất kiểm soát → tạo khối u.',
      [
        '<b>Ung thư</b> xảy ra khi tế bào bị <i>đột biến</i>, phân chia <b>mất kiểm soát</b>:',
        '<ul><li>Tế bào mới sinh ra liên tục, không chết theo chương trình.</li><li>Tạo thành <b>khối u</b>, có thể di căn sang các cơ quan khác.</li></ul>',
        '<b>Phòng tránh:</b> không hút thuốc, ăn nhiều rau quả, vận động, khám định kỳ, tránh tia tử ngoại quá mức.',
      ],
      [
        'Sai — vì <b>Tế bào hoá vàng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào phân chia mất kiểm soát</b>.',
        'Đúng — <b>Tế bào phân chia mất kiểm soát</b> là đáp án chính xác. Ung thư = tế bào phân chia mất kiểm soát → tạo khối u.',
        'Sai — vì <b>Cơ thể hết tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào phân chia mất kiểm soát</b>.',
        'Sai — vì <b>Tế bào ngừng phân chia hẳn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào phân chia mất kiểm soát</b>.',
      ]
    ),
  ]),

  M(18, 'Ôn tập Học kỳ 1', [
    Q('KHTN Lớp 6 tích hợp 3 phân môn nào?',
      ['Toán – Văn – Anh', 'Sử – Địa – GDCD', 'Nhạc – Hoạ – Thể dục', 'Vật lý – Hoá học – Sinh học'], 3,
      'KHTN = <b>Vật lý + Hoá học + Sinh học</b>.',
      [
        '<b>Tổng quan HK1:</b>',
        '<ul><li><b>Vật lý</b>: đo lường (chiều dài, khối lượng, thời gian, nhiệt độ).</li><li><b>Hoá học</b>: chất – thể của chất – oxygen – vật liệu – nhiên liệu – hỗn hợp.</li><li><b>Sinh học</b>: tế bào – cấu tạo, sự lớn lên và sinh sản.</li></ul>',
      ],
      [
        'Sai — vì <b>Toán – Văn – Anh</b> không phải là phân môn của <b>KHTN</b> — Toán/Văn/Anh là môn riêng. Đáp án đúng là <b>Vật lý – Hoá học – Sinh học</b>.',
        'Sai — vì <b>Sử – Địa – GDCD</b> thuộc khoa học xã hội (Lịch sử, Địa lý, GDCD), không phải KHTN. Đáp án đúng là <b>Vật lý – Hoá học – Sinh học</b>.',
        'Sai — vì <b>Nhạc – Hoạ – Thể dục</b> thuộc nhóm môn nghệ thuật, không liên quan đến KHTN. Đáp án đúng là <b>Vật lý – Hoá học – Sinh học</b>.',
        'Đúng — <b>Vật lý – Hoá học – Sinh học</b> là đáp án chính xác. KHTN = Vật lý + Hoá học + Sinh học.',
      ]
    ),
    Q('Đơn vị đo chiều dài chuẩn SI là?',
      ['centimet (cm)', 'mét (m)', 'kilômét (km)', 'milimet (mm)'], 1,
      '<b>Mét (m)</b> là đơn vị SI của chiều dài.',
      [
        '<b>Đơn vị SI cơ bản</b> liên quan đo lường HK1:',
        '<ul><li>Chiều dài: <code>mét (m)</code>.</li><li>Khối lượng: <code>kilôgam (kg)</code>.</li><li>Thời gian: <code>giây (s)</code>.</li><li>Nhiệt độ (SI): <code>kelvin (K)</code>, dùng phổ biến: <code>°C</code>.</li></ul>',
      ],
      [
        'Sai — vì <b>centimet</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>mét</b>.',
        'Đúng — <b>mét</b> là đáp án chính xác. Mét (m) là đơn vị SI của chiều dài. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>kilômét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>mét</b>.',
        'Sai — vì <b>milimet</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>mét</b>.',
      ]
    ),
    Q('Đơn vị đo khối lượng chuẩn SI là?',
      ['kilôgam', 'gam (g)', 'tấn (t)', 'miligam (mg)'], 0,
      '<b>Kilôgam (kg)</b> là đơn vị SI duy nhất còn dùng tiền tố ("kilo") trong tên đơn vị cơ bản.',
      [
        '<b>Đổi đơn vị khối lượng nhanh:</b>',
        '<ul><li><code>1 tấn = 1000 kg</code></li><li><code>1 kg = 1000 g</code></li><li><code>1 g = 1000 mg</code></li></ul>',
        'Mỗi bậc kế tiếp <i>nhân/chia 1000</i>.',
      ],
      [
        'Đúng — <b>kilôgam</b> là đáp án chính xác. Kilôgam (kg) là đơn vị SI duy nhất còn dùng tiền tố ("kilo") trong tên đơn vị cơ bản.',
        'Sai — vì <b>gam</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>kilôgam</b>.',
        'Sai — vì <b>tấn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>kilôgam</b>.',
        'Sai — vì <b>miligam</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>kilôgam</b>.',
      ]
    ),
    Q('Chất có thể tồn tại ở các thể?',
      ['Rắn, lỏng, khí', 'Chỉ lỏng', 'Chỉ rắn', 'Chỉ khí'], 0,
      'Ba thể cơ bản: <b>rắn – lỏng – khí</b>.',
      [
        '<b>Tóm tắt 3 thể chất:</b>',
        '<ul><li><b>Rắn</b>: hình + thể tích cố định, hạt dao động tại chỗ.</li><li><b>Lỏng</b>: thể tích cố định, hình theo bình, hạt trượt được.</li><li><b>Khí</b>: không có hình + thể tích cố định, hạt chuyển động hỗn loạn.</li></ul>',
      ],
      [
        'Đúng — <b>Rắn, lỏng, khí</b> là đáp án chính xác. Ba thể cơ bản: rắn – lỏng – khí.',
        'Sai — vì <b>Chỉ lỏng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn, lỏng, khí</b>.',
        'Sai — vì <b>Chỉ rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn, lỏng, khí</b>.',
        'Sai — vì <b>Chỉ khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn, lỏng, khí</b>.',
      ]
    ),
    Q('Oxygen chiếm khoảng bao nhiêu % thể tích không khí?',
      ['21%', '1%', '50%', '78%'], 0,
      '<b>~21%</b> là tỉ lệ O₂ trong không khí.',
      [
        '<b>Thành phần không khí:</b>',
        '<ul><li>N₂: ~78%</li><li>O₂: ~21%</li><li>Argon, CO₂, hơi nước, khí khác: ~1%</li></ul>',
        'O₂ duy trì hô hấp và sự cháy — không có O₂ → không có sự sống.',
      ],
      [
        'Đúng — <b>21%</b> là đáp án chính xác. ~21% là tỉ lệ O₂ trong không khí. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>1%</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>21%</b>.',
        'Sai — vì <b>50%</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>21%</b>.',
        'Sai — vì <b>78%</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>21%</b>.',
      ]
    ),
    Q('Để tách muối khỏi nước biển, ta dùng?',
      ['Nam châm', 'Trộn dầu', 'Lọc qua giấy lọc', 'Cô cạn'], 3,
      '<b>Cô cạn</b> — bay hơi nước, muối còn lại.',
      [
        '<b>Bảng phương pháp tách chất:</b>',
        '<ul><li><b>Lọc</b>: rắn không tan trong lỏng (cát + nước).</li><li><b>Cô cạn</b>: rắn hoà tan trong lỏng (muối + nước).</li><li><b>Nam châm</b>: chất có từ tính (sắt + lưu huỳnh).</li><li><b>Chưng cất</b>: lỏng có nhiệt độ sôi khác nhau (rượu + nước).</li></ul>',
      ],
      [
        'Sai — vì <b>Nam châm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cô cạn</b>.',
        'Sai — vì <b>Trộn dầu</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cô cạn</b>.',
        'Sai — vì <b>Lọc qua giấy lọc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cô cạn</b>.',
        'Đúng — <b>Cô cạn</b> là đáp án chính xác. Cô cạn — bay hơi nước, muối còn lại. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
      ]
    ),
    Q('Để tách bột sắt khỏi cát, ta dùng?',
      ['Nam châm', 'Cô cạn', 'Chưng cất', 'Lọc bằng vải'], 0,
      'Sắt nhiễm từ → dùng <b>nam châm</b> hút sắt.',
      [
        'Sắt là kim loại <b>có từ tính</b> — bị nam châm hút. Cát (SiO₂) không có từ tính.',
        '<ul><li>Đưa nam châm lại gần hỗn hợp → sắt bám vào nam châm.</li><li>Tách phần cát ra → còn riêng bột sắt sạch.</li></ul>',
      ],
      [
        'Đúng — <b>Nam châm</b> là đáp án chính xác. Sắt nhiễm từ → dùng nam châm hút sắt.',
        'Sai — vì <b>Cô cạn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nam châm</b>.',
        'Sai — vì <b>Chưng cất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nam châm</b>.',
        'Sai — vì <b>Lọc bằng vải</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nam châm</b>.',
      ]
    ),
    Q('Đơn vị cấu tạo của mọi sinh vật là?',
      ['Tế bào', 'Cơ quan', 'Hệ cơ quan', 'Phân tử'], 0,
      '<b>Tế bào</b> là đơn vị cấu tạo và chức năng cơ bản của mọi sinh vật.',
      [
        '<b>Các cấp tổ chức cơ thể đa bào</b> (từ nhỏ → lớn):',
        '<ul><li><b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b></li></ul>',
        'Tế bào là nhỏ nhất nhưng đã có đầy đủ chức năng sống.',
      ],
      [
        'Đúng — <b>Tế bào</b> là đáp án chính xác. Tế bào là đơn vị cấu tạo và chức năng cơ bản của mọi sinh vật.',
        'Sai — vì <b>Cơ quan</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào</b>.',
        'Sai — vì <b>Hệ cơ quan</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào</b>.',
        'Sai — vì <b>Phân tử</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào</b>.',
      ]
    ),
    Q('Tế bào thực vật KHÁC tế bào động vật vì?',
      ['Không có nhân', 'Có thành cellulose và lục lạp', 'Không có màng', 'Không có chất tế bào'], 1,
      'Tế bào thực vật có <b>thành cellulose</b> + <b>lục lạp</b> (quang hợp).',
      [
        '<b>So sánh nhanh:</b>',
        '<ul><li><b>Thực vật</b>: ✅ thành cellulose, ✅ lục lạp, ✅ không bào trung tâm lớn.</li><li><b>Động vật</b>: ❌ thành tế bào, ❌ lục lạp, không bào nhỏ.</li><li><b>Cả hai</b>: đều có màng tế bào, tế bào chất, nhân, ti thể.</li></ul>',
      ],
      [
        'Sai — vì <b>Không có nhân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thành cellulose và lục lạp</b>.',
        'Đúng — <b>Có thành cellulose và lục lạp</b> là đáp án chính xác. Tế bào thực vật có thành cellulose + lục lạp (quang hợp).',
        'Sai — vì <b>Không có màng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thành cellulose và lục lạp</b>.',
        'Sai — vì <b>Không có chất tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có thành cellulose và lục lạp</b>.',
      ]
    ),
    Q('Ti thể có chức năng?',
      ['Bảo vệ tế bào', 'Chứa DNA', 'Cung cấp năng lượng cho tế bào', 'Quang hợp'], 2,
      '<b>Ti thể</b> = "nhà máy năng lượng" → tạo ATP cho mọi hoạt động của tế bào.',
      [
        '<b>Ti thể (mitochondria):</b>',
        '<ul><li>Phân giải đường + O₂ → giải phóng <code>ATP</code> (đồng tiền năng lượng).</li><li>Có ở cả tế bào thực vật và động vật.</li></ul>',
        'Đừng nhầm: <i>lục lạp</i> mới làm quang hợp, <i>nhân</i> mới chứa DNA chính.',
      ],
      [
        'Sai — vì <b>Bảo vệ tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp năng lượng cho tế bào</b>.',
        'Sai — vì <b>Chứa DNA</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp năng lượng cho tế bào</b>.',
        'Đúng — <b>Cung cấp năng lượng cho tế bào</b> là đáp án chính xác. Ti thể = "nhà máy năng lượng" → tạo ATP cho mọi hoạt động của tế bào.',
        'Sai — vì <b>Quang hợp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp năng lượng cho tế bào</b>.',
      ]
    ),
  ], { difficulty: 2 }),

  // ──────────────── HK2 ────────────────
  M(19, 'Cơ thể đa bào — các cấp tổ chức (1): mô – cơ quan', [
    Q('Cơ thể đa bào là cơ thể được cấu tạo từ?',
      ['Chỉ có nước', 'Không có tế bào', 'Một tế bào', 'Nhiều tế bào'], 3,
      '<b>Đa bào</b> = nhiều tế bào hợp lại tạo thành cơ thể.',
      [
        '<b>Phân loại theo số tế bào:</b>',
        '<ul><li><b>Đơn bào</b>: cơ thể chỉ gồm 1 tế bào (vi khuẩn, trùng giày, tảo đơn bào).</li><li><b>Đa bào</b>: cơ thể gồm <i>nhiều tế bào</i> phân hoá thành mô và cơ quan (cây cối, động vật, con người).</li></ul>',
        'Cơ thể người có khoảng <code>37 nghìn tỉ</code> tế bào hoạt động phối hợp.',
      ],
      [
        'Sai — vì <b>Chỉ có nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều tế bào</b>.',
        'Sai — vì <b>Không có tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều tế bào</b>.',
        'Sai — vì <b>Một tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều tế bào</b>.',
        'Đúng — <b>Nhiều tế bào</b> là đáp án chính xác. Đa bào = nhiều tế bào hợp lại tạo thành cơ thể.',
      ]
    ),
    Q('Mô là?',
      ['Tập hợp các con vật', 'Một loại khoáng chất', 'Tập hợp tế bào có cùng cấu trúc và chức năng', 'Một cơ quan đơn lẻ'], 2,
      '<b>Mô</b> = tập hợp <i>tế bào cùng loại</i>, cùng thực hiện một chức năng.',
      [
        '<b>Mô (tissue)</b> là cấp tổ chức cao hơn tế bào:',
        '<ul><li>Gồm nhiều tế bào <i>cùng cấu trúc, cùng chức năng</i>.</li><li>Cùng nhau thực hiện một nhiệm vụ chung.</li></ul>',
        'Có thể ví: tế bào = viên gạch, mô = bức tường.',
      ],
      [
        'Sai — vì <b>Tập hợp các con vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tập hợp tế bào có cùng cấu trúc và chức năng</b>.',
        'Sai — vì <b>Một loại khoáng chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tập hợp tế bào có cùng cấu trúc và chức năng</b>.',
        'Đúng — <b>Tập hợp tế bào có cùng cấu trúc và chức năng</b> là đáp án chính xác. Mô = tập hợp tế bào cùng loại, cùng thực hiện một chức năng.',
        'Sai — vì <b>Một cơ quan đơn lẻ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tập hợp tế bào có cùng cấu trúc và chức năng</b>.',
      ]
    ),
    Q('Ví dụ về mô ở thực vật là?',
      ['Khoáng chất', 'Đất sét', 'Mô biểu bì lá, mô dẫn', 'Mô cơ vân ở người'], 2,
      'Thực vật có <b>mô biểu bì, mô dẫn (mạch gỗ, mạch rây), mô cơ bản</b>.',
      [
        '<b>Các loại mô ở thực vật:</b>',
        '<ul><li><b>Mô biểu bì</b>: bao bọc bên ngoài (vỏ lá, vỏ thân).</li><li><b>Mô dẫn</b>: <i>mạch gỗ</i> dẫn nước từ rễ lên; <i>mạch rây</i> dẫn chất hữu cơ từ lá đi.</li><li><b>Mô cơ bản</b>: thực hiện quang hợp, chứa chất dự trữ.</li></ul>',
      ],
      [
        'Sai — vì <b>Khoáng chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mô biểu bì lá, mô dẫn</b>.',
        'Sai — vì <b>Đất sét</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mô biểu bì lá, mô dẫn</b>.',
        'Đúng — <b>Mô biểu bì lá, mô dẫn</b> là đáp án chính xác. Thực vật có mô biểu bì, mô dẫn (mạch gỗ, mạch rây), mô cơ bản.',
        'Sai — vì <b>Mô cơ vân ở người</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mô biểu bì lá, mô dẫn</b>.',
      ]
    ),
    Q('Ví dụ về mô ở động vật là?',
      ['Mô cơ, mô thần kinh, mô liên kết', 'Mô lục lạp', 'Mô cellulose', 'Mô dẫn nước'], 0,
      'Động vật có 4 nhóm mô: <b>biểu bì, liên kết, cơ, thần kinh</b>.',
      [
        '<b>Bốn nhóm mô chính ở động vật:</b>',
        '<ul><li><b>Mô biểu bì</b>: bao phủ bề mặt (da, niêm mạc).</li><li><b>Mô liên kết</b>: liên kết các phần (xương, máu, sụn, mỡ).</li><li><b>Mô cơ</b>: co rút, vận động (cơ vân, cơ trơn, cơ tim).</li><li><b>Mô thần kinh</b>: dẫn truyền xung điện (não, tuỷ, dây thần kinh).</li></ul>',
      ],
      [
        'Đúng — <b>Mô cơ, mô thần kinh, mô liên kết</b> là đáp án chính xác. Động vật có 4 nhóm mô: biểu bì, liên kết, cơ, thần kinh.',
        'Sai — vì <b>Mô lục lạp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mô cơ, mô thần kinh, mô liên kết</b>.',
        'Sai — vì <b>Mô cellulose</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mô cơ, mô thần kinh, mô liên kết</b>.',
        'Sai — vì <b>Mô dẫn nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mô cơ, mô thần kinh, mô liên kết</b>.',
      ]
    ),
    Q('Cơ quan là?',
      ['Một mô', 'Nhiều mô khác nhau cùng phối hợp thực hiện chức năng', 'Một tế bào', 'Một loại chất'], 1,
      '<b>Cơ quan</b> = tập hợp <i>nhiều mô khác nhau</i> phối hợp thực hiện một chức năng.',
      [
        '<b>Cơ quan (organ)</b> là cấp tổ chức cao hơn mô:',
        '<ul><li>Gồm <i>nhiều loại mô khác nhau</i>.</li><li>Phối hợp để thực hiện <i>một chức năng cụ thể</i>.</li></ul>',
        'Ví dụ: <b>tim</b> = mô cơ tim + mô liên kết + mô thần kinh + mô biểu bì → bơm máu.',
      ],
      [
        'Sai — vì <b>Một mô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều mô khác nhau cùng phối hợp thực hiện ch…</b>.',
        'Đúng — <b>Nhiều mô khác nhau cùng phối hợp thực hiện chức năng</b> là đáp án chính xác. Cơ quan = tập hợp nhiều mô khác nhau phối hợp thực hiện một chức năng.',
        'Sai — vì <b>Một tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều mô khác nhau cùng phối hợp thực hiện ch…</b>.',
        'Sai — vì <b>Một loại chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều mô khác nhau cùng phối hợp thực hiện ch…</b>.',
      ]
    ),
    Q('Ví dụ về cơ quan ở thực vật là?',
      ['Não, dạ dày', 'Rễ, thân, lá, hoa', 'Tim, phổi', 'Cơ vân'], 1,
      'Cơ quan ở thực vật: <b>rễ, thân, lá, hoa, quả, hạt</b>.',
      [
        '<b>Cơ quan ở thực vật:</b>',
        '<ul><li><b>Rễ</b>: hút nước và khoáng từ đất.</li><li><b>Thân</b>: nâng đỡ, vận chuyển chất.</li><li><b>Lá</b>: quang hợp, thoát hơi nước.</li><li><b>Hoa – quả – hạt</b>: sinh sản, duy trì nòi giống.</li></ul>',
      ],
      [
        'Sai — vì <b>Não, dạ dày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rễ, thân, lá, hoa</b>.',
        'Đúng — <b>Rễ, thân, lá, hoa</b> là đáp án chính xác. Cơ quan ở thực vật: rễ, thân, lá, hoa, quả, hạt.',
        'Sai — vì <b>Tim, phổi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rễ, thân, lá, hoa</b>.',
        'Sai — vì <b>Cơ vân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rễ, thân, lá, hoa</b>.',
      ]
    ),
  ]),

  M(20, 'Cơ thể đa bào — các cấp tổ chức (2): hệ cơ quan – cơ thể', [
    Q('Hệ cơ quan là?',
      ['Một mô', 'Một tế bào', 'Nhiều cơ quan phối hợp thực hiện một quá trình sống', 'Một chất hoá học'], 2,
      '<b>Hệ cơ quan</b> = nhiều cơ quan phối hợp thực hiện một <i>quá trình sống</i>.',
      [
        '<b>Hệ cơ quan (organ system)</b> là cấp tổ chức trên cơ quan:',
        '<ul><li>Gồm <i>nhiều cơ quan</i> hoạt động phối hợp.</li><li>Cùng thực hiện <i>một quá trình sống</i> chung.</li></ul>',
        'Ví dụ: hệ tiêu hoá = miệng + thực quản + dạ dày + ruột + gan + tuỵ.',
      ],
      [
        'Sai — vì <b>Một mô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều cơ quan phối hợp thực hiện một quá trìn…</b>.',
        'Sai — vì <b>Một tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều cơ quan phối hợp thực hiện một quá trìn…</b>.',
        'Đúng — <b>Nhiều cơ quan phối hợp thực hiện một quá trình sống</b> là đáp án chính xác. Hệ cơ quan = nhiều cơ quan phối hợp thực hiện một quá trình sống.',
        'Sai — vì <b>Một chất hoá học</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhiều cơ quan phối hợp thực hiện một quá trìn…</b>.',
      ]
    ),
    Q('Hệ tiêu hoá ở người gồm các cơ quan như?',
      ['Phổi, khí quản', 'Não, tuỷ sống', 'Tim, mạch máu', 'Miệng, dạ dày, ruột, gan, tuỵ'], 3,
      'Hệ tiêu hoá: <b>miệng → thực quản → dạ dày → ruột → hậu môn</b>, kèm gan và tuỵ.',
      [
        '<b>Đường đi của thức ăn trong hệ tiêu hoá:</b>',
        '<ul><li><b>Miệng</b>: nhai, trộn nước bọt.</li><li><b>Thực quản</b>: dẫn xuống dạ dày.</li><li><b>Dạ dày</b>: nghiền, tiết dịch vị.</li><li><b>Ruột non</b>: tiêu hoá hoàn toàn, hấp thụ chất.</li><li><b>Ruột già</b>: hấp thụ nước, tạo phân.</li></ul>',
        '<b>Tuyến phụ:</b> gan tiết mật, tuỵ tiết enzyme tiêu hoá.',
      ],
      [
        'Sai — vì <b>Phổi, khí quản</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Miệng, dạ dày, ruột, gan, tuỵ</b>.',
        'Sai — vì <b>Não, tuỷ sống</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Miệng, dạ dày, ruột, gan, tuỵ</b>.',
        'Sai — vì <b>Tim, mạch máu</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Miệng, dạ dày, ruột, gan, tuỵ</b>.',
        'Đúng — <b>Miệng, dạ dày, ruột, gan, tuỵ</b> là đáp án chính xác. Hệ tiêu hoá: miệng → thực quản → dạ dày → ruột → hậu môn, kèm gan và tuỵ.',
      ]
    ),
    Q('Hệ tuần hoàn ở người gồm?',
      ['Phổi và khí quản', 'Thận và bàng quang', 'Não và dây thần kinh', 'Tim và hệ mạch máu'], 3,
      'Hệ tuần hoàn: <b>tim + hệ mạch máu</b> (động mạch, tĩnh mạch, mao mạch).',
      [
        '<b>Hệ tuần hoàn</b> đưa máu đi khắp cơ thể:',
        '<ul><li><b>Tim</b>: bơm máu — đập ~70 lần/phút.</li><li><b>Động mạch</b>: dẫn máu từ tim đi.</li><li><b>Tĩnh mạch</b>: dẫn máu về tim.</li><li><b>Mao mạch</b>: nơi trao đổi chất với tế bào.</li></ul>',
        'Máu mang O₂ và chất dinh dưỡng tới tế bào, lấy CO₂ và chất thải đi.',
      ],
      [
        'Sai — vì <b>Phổi và khí quản</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tim và hệ mạch máu</b>.',
        'Sai — vì <b>Thận và bàng quang</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tim và hệ mạch máu</b>.',
        'Sai — vì <b>Não và dây thần kinh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tim và hệ mạch máu</b>.',
        'Đúng — <b>Tim và hệ mạch máu</b> là đáp án chính xác. Hệ tuần hoàn: tim + hệ mạch máu (động mạch, tĩnh mạch, mao mạch).',
      ]
    ),
    Q('Hệ thần kinh ở người gồm?',
      ['Não, tuỷ sống, dây thần kinh', 'Phổi, khí quản', 'Dạ dày, ruột', 'Tim, mạch máu'], 0,
      'Hệ thần kinh: <b>não + tuỷ sống + dây thần kinh</b>.',
      [
        '<b>Hệ thần kinh</b> điều khiển và điều phối mọi hoạt động:',
        '<ul><li><b>Não bộ</b>: trung tâm điều khiển, tư duy, cảm xúc, trí nhớ.</li><li><b>Tuỷ sống</b>: dẫn truyền xung từ não đi khắp cơ thể, phản xạ.</li><li><b>Dây thần kinh</b>: phân nhánh tới mọi cơ quan, da, cơ.</li></ul>',
      ],
      [
        'Đúng — <b>Não, tuỷ sống, dây thần kinh</b> là đáp án chính xác. Hệ thần kinh: não + tuỷ sống + dây thần kinh.',
        'Sai — vì <b>Phổi, khí quản</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Não, tuỷ sống, dây thần kinh</b>.',
        'Sai — vì <b>Dạ dày, ruột</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Não, tuỷ sống, dây thần kinh</b>.',
        'Sai — vì <b>Tim, mạch máu</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Não, tuỷ sống, dây thần kinh</b>.',
      ]
    ),
    Q('Thứ tự đúng các cấp tổ chức cơ thể đa bào (từ nhỏ đến lớn) là?',
      ['Mô → Tế bào → Cơ quan', 'Cơ thể → Tế bào → Mô', 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể', 'Cơ quan → Tế bào → Mô'], 2,
      'Thứ tự: <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
      [
        '<b>5 cấp tổ chức cơ thể đa bào</b> (nhỏ → lớn):',
        '<ul><li>① <b>Tế bào</b> — đơn vị nhỏ nhất.</li><li>② <b>Mô</b> — nhiều tế bào cùng loại.</li><li>③ <b>Cơ quan</b> — nhiều mô phối hợp.</li><li>④ <b>Hệ cơ quan</b> — nhiều cơ quan phối hợp.</li><li>⑤ <b>Cơ thể</b> — nhiều hệ cơ quan hợp thành.</li></ul>',
      ],
      [
        'Sai — vì <b>Mô → Tế bào → Cơ quan</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
        'Sai — vì <b>Cơ thể → Tế bào → Mô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
        'Đúng — <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b> là đáp án chính xác. Thứ tự: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.',
        'Sai — vì <b>Cơ quan → Tế bào → Mô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
      ]
    ),
    Q('Ở cây xanh, hệ cơ quan gồm?',
      ['Hệ tim mạch', 'Hệ thần kinh trung ương', 'Hệ bài tiết', 'Hệ rễ và hệ chồi (thân + lá + hoa)'], 3,
      'Cây xanh có <b>hệ rễ</b> (dưới đất) và <b>hệ chồi</b> (trên đất: thân + lá + hoa + quả).',
      [
        '<b>Hai hệ cơ quan ở cây xanh:</b>',
        '<ul><li><b>Hệ rễ</b>: hút nước và khoáng từ đất, giữ cây đứng vững.</li><li><b>Hệ chồi</b>: thân (vận chuyển, nâng đỡ) + lá (quang hợp) + hoa-quả-hạt (sinh sản).</li></ul>',
        'Thực vật KHÔNG có hệ tim mạch hay thần kinh như động vật.',
      ],
      [
        'Sai — vì <b>Hệ tim mạch</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hệ rễ và hệ chồi</b>.',
        'Sai — vì <b>Hệ thần kinh trung ương</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hệ rễ và hệ chồi</b>.',
        'Sai — vì <b>Hệ bài tiết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hệ rễ và hệ chồi</b>.',
        'Đúng — <b>Hệ rễ và hệ chồi</b> là đáp án chính xác. Cây xanh có hệ rễ (dưới đất) và hệ chồi (trên đất: thân + lá + hoa + quả).',
      ]
    ),
  ]),

  M(21, 'Phân loại sinh vật — khoá lưỡng phân', [
    Q('Sinh vật được chia thành các giới chính như?',
      ['Chỉ thực vật và động vật', 'Chỉ vi khuẩn', 'Chỉ con người và cây', 'Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật'], 3,
      'Hệ thống <b>5 giới</b> của Whittaker: Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật.',
      [
        '<b>Hệ thống 5 giới sinh vật:</b>',
        '<ul><li><b>Khởi sinh (Monera)</b>: vi khuẩn — nhân sơ.</li><li><b>Nguyên sinh (Protista)</b>: trùng giày, tảo — nhân thực đơn bào.</li><li><b>Nấm (Fungi)</b>: nấm rơm, nấm men — nhân thực dị dưỡng.</li><li><b>Thực vật (Plantae)</b>: cây xanh — nhân thực, quang hợp.</li><li><b>Động vật (Animalia)</b>: cá, chim, người — nhân thực, dị dưỡng, di chuyển.</li></ul>',
      ],
      [
        'Sai — vì <b>Chỉ thực vật và động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động v…</b>.',
        'Sai — vì <b>Chỉ vi khuẩn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động v…</b>.',
        'Sai — vì <b>Chỉ con người và cây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động v…</b>.',
        'Đúng — <b>Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật</b> là đáp án chính xác. Hệ thống 5 giới của Whittaker: Khởi sinh, Nguyên sinh, Nấm, Thực vật, Động vật.',
      ]
    ),
    Q('Đơn vị phân loại nhỏ nhất là?',
      ['Loài', 'Chi (genus)', 'Họ (familia)', 'Bộ (ordo)'], 0,
      '<b>Loài (species)</b> là đơn vị phân loại cơ sở.',
      [
        '<b>Bậc phân loại sinh vật</b> (từ nhỏ → lớn):',
        '<ul><li><b>Loài</b> → <b>Chi</b> → <b>Họ</b> → <b>Bộ</b> → <b>Lớp</b> → <b>Ngành</b> → <b>Giới</b></li></ul>',
        '<b>Loài</b> = nhóm sinh vật có đặc điểm giống nhau, có thể giao phối tạo con có khả năng sinh sản.',
        'Ví dụ: chó nhà thuộc loài <code>Canis lupus familiaris</code>.',
      ],
      [
        'Đúng — <b>Loài</b> là đáp án chính xác. Loài (species) là đơn vị phân loại cơ sở.',
        'Sai — vì <b>Chi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Loài</b>.',
        'Sai — vì <b>Họ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Loài</b>.',
        'Sai — vì <b>Bộ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Loài</b>.',
      ]
    ),
    Q('Thứ tự đúng từ nhỏ đến lớn là?',
      ['Loài → Giới → Ngành', 'Giới → Loài', 'Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới', 'Bộ → Loài → Họ'], 2,
      'Đúng thứ tự: <b>Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới</b>.',
      [
        '<b>Mẹo nhớ 7 bậc phân loại</b> (nhỏ → lớn):',
        '<ul><li><b>L</b>oài – <b>C</b>hi – <b>H</b>ọ – <b>B</b>ộ – <b>L</b>ớp – <b>N</b>gành – <b>G</b>iới.</li></ul>',
        'Ví dụ con người: loài <i>sapiens</i> → chi <i>Homo</i> → họ Hominidae → bộ Linh trưởng → lớp Thú → ngành Có dây sống → giới Động vật.',
      ],
      [
        'Sai — vì <b>Loài → Giới → Ngành</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới</b>.',
        'Sai — vì <b>Giới → Loài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới</b>.',
        'Đúng — <b>Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới</b> là đáp án chính xác. Đúng thứ tự: Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới.',
        'Sai — vì <b>Bộ → Loài → Họ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Loài → Chi → Họ → Bộ → Lớp → Ngành → Giới</b>.',
      ]
    ),
    Q('Khoá lưỡng phân là công cụ?',
      ['Đo khối lượng', 'Phân loại sinh vật theo cặp đặc điểm đối lập', 'Đếm số ngày', 'Đo chiều dài'], 1,
      '<b>Khoá lưỡng phân</b> = công cụ phân loại bằng các <i>cặp đặc điểm đối lập</i>.',
      [
        '<b>Khoá lưỡng phân (dichotomous key)</b> là sơ đồ giúp xác định loài:',
        '<ul><li>Mỗi bước hỏi 1 câu có <b>2 lựa chọn đối lập</b> (có/không, dài/ngắn, có cánh/không cánh).</li><li>Theo lựa chọn → đến bước tiếp theo → cuối cùng xác định được loài.</li></ul>',
        'Đó là công cụ <i>trực quan, dễ dùng</i> mà các nhà sinh học, học sinh hay dùng tại lớp.',
      ],
      [
        'Sai — vì <b>Đo khối lượng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phân loại sinh vật theo cặp đặc điểm đối lập</b>.',
        'Đúng — <b>Phân loại sinh vật theo cặp đặc điểm đối lập</b> là đáp án chính xác. Khoá lưỡng phân = công cụ phân loại bằng các cặp đặc điểm đối lập.',
        'Sai — vì <b>Đếm số ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phân loại sinh vật theo cặp đặc điểm đối lập</b>.',
        'Sai — vì <b>Đo chiều dài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phân loại sinh vật theo cặp đặc điểm đối lập</b>.',
      ]
    ),
    Q('Khi xây khoá lưỡng phân, ở mỗi bước có?',
      ['3 lựa chọn', '2 lựa chọn đối lập', 'Không có lựa chọn', '10 lựa chọn'], 1,
      'Tên gọi "<b>lưỡng</b>" = <i>hai</i> → mỗi bước có đúng 2 lựa chọn.',
      [
        '<b>Quy tắc của khoá lưỡng phân:</b>',
        '<ul><li>"Lưỡng" trong tiếng Hán nghĩa là <b>hai</b>.</li><li>Mỗi nút phân nhánh ra <b>đúng 2 nhánh đối lập</b>.</li><li>Câu hỏi phải rõ ràng, không trùng lặp.</li></ul>',
        'Ví dụ bước đầu: "Có cánh hay không?" → Có → tiếp tục với chim/côn trùng; Không → tiếp tục với cá/bò sát.',
      ],
      [
        'Sai — vì <b>3 lựa chọn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>2 lựa chọn đối lập</b>.',
        'Đúng — <b>2 lựa chọn đối lập</b> là đáp án chính xác. Tên gọi "lưỡng" = hai → mỗi bước có đúng 2 lựa chọn.',
        'Sai — vì <b>Không có lựa chọn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>2 lựa chọn đối lập</b>.',
        'Sai — vì <b>10 lựa chọn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>2 lựa chọn đối lập</b>.',
      ]
    ),
    Q('Ưu điểm của khoá lưỡng phân là?',
      ['Dễ dùng, giúp xác định loài bằng câu hỏi đúng/sai', 'Đắt tiền', 'Cần máy tính phức tạp', 'Chỉ dùng cho động vật'], 0,
      '<b>Dễ dùng</b> — chỉ cần trả lời câu hỏi đúng/sai theo từng bước.',
      [
        '<b>Ưu điểm của khoá lưỡng phân:</b>',
        '<ul><li>✅ Trực quan, dễ hiểu cho học sinh.</li><li>✅ Không cần thiết bị, máy móc.</li><li>✅ Áp dụng cho mọi nhóm sinh vật (động vật, thực vật, vi sinh).</li><li>✅ Có thể tự xây dựng cho bộ sưu tập mẫu lá, mẫu côn trùng.</li></ul>',
      ],
      [
        'Đúng — <b>Dễ dùng, giúp xác định loài bằng câu hỏi đúng/sai</b> là đáp án chính xác. Dễ dùng — chỉ cần trả lời câu hỏi đúng/sai theo từng bước.',
        'Sai — vì <b>Đắt tiền</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dễ dùng, giúp xác định loài bằng câu hỏi đúng…</b>.',
        'Sai — vì <b>Cần máy tính phức tạp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dễ dùng, giúp xác định loài bằng câu hỏi đúng…</b>.',
        'Sai — vì <b>Chỉ dùng cho động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Dễ dùng, giúp xác định loài bằng câu hỏi đúng…</b>.',
      ]
    ),
  ]),

  M(22, 'Vi khuẩn', [
    Q('Vi khuẩn là sinh vật có tế bào?',
      ['Nhân sơ, đơn bào, kích thước rất nhỏ', 'Nhân thực, đa bào', 'Lớn hơn cả người', 'Không có tế bào'], 0,
      'Vi khuẩn = <b>tế bào nhân sơ, đơn bào, kích thước rất nhỏ</b> (1–10 µm).',
      [
        '<b>Đặc điểm chung của vi khuẩn:</b>',
        '<ul><li>Tế bào <b>nhân sơ</b>: không có màng nhân.</li><li><b>Đơn bào</b>: cơ thể chỉ 1 tế bào.</li><li>Kích thước <b>rất nhỏ</b>: 1–10 µm.</li><li>Hình dạng đa dạng: cầu, que, xoắn, dấu phẩy.</li></ul>',
      ],
      [
        'Đúng — <b>Nhân sơ, đơn bào, kích thước rất nhỏ</b> là đáp án chính xác. Vi khuẩn = tế bào nhân sơ, đơn bào, kích thước rất nhỏ (1–10 µm).',
        'Sai — vì <b>Nhân thực, đa bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhân sơ, đơn bào, kích thước rất nhỏ</b>.',
        'Sai — vì <b>Lớn hơn cả người</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhân sơ, đơn bào, kích thước rất nhỏ</b>.',
        'Sai — vì <b>Không có tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhân sơ, đơn bào, kích thước rất nhỏ</b>.',
      ]
    ),
    Q('Để quan sát vi khuẩn, ta cần?',
      ['Kính lúp đơn giản', 'Ống nhòm', 'Kính hiển vi', 'Mắt thường'], 2,
      'Vi khuẩn cỡ <code>µm</code> → cần <b>kính hiển vi</b>, kính lúp không đủ.',
      [
        '<b>Vì sao cần kính hiển vi để xem vi khuẩn?</b>',
        '<ul><li>Vi khuẩn cỡ <code>1–10 µm</code>, nhỏ hơn mắt thường thấy 10–100 lần.</li><li>Kính lúp phóng đại tối đa ~20 lần — chưa đủ.</li><li>Kính hiển vi phóng đại 100–1000 lần → nhìn rõ vi khuẩn.</li></ul>',
        'Phải nhuộm màu để dễ thấy hình dạng vi khuẩn.',
      ],
      [
        'Sai — vì <b>Kính lúp đơn giản</b> kính lúp chỉ phóng đại vài chục lần, không đủ để xem vật rất nhỏ. Đáp án đúng là <b>Kính hiển vi</b>.',
        'Sai — vì <b>Ống nhòm</b> ống nhòm nhìn xa, không phóng đại vật nhỏ ở gần như cần thiết. Đáp án đúng là <b>Kính hiển vi</b>.',
        'Đúng — <b>Kính hiển vi</b> là đáp án chính xác. Vi khuẩn cỡ µm → cần kính hiển vi, kính lúp không đủ.',
        'Sai — vì <b>Mắt thường</b> mắt thường chỉ thấy vật ≥ 0,1 mm — không đủ để quan sát tế bào/vi khuẩn. Đáp án đúng là <b>Kính hiển vi</b>.',
      ]
    ),
    Q('Vi khuẩn có ích cho con người, ví dụ?',
      ['Lên men sữa chua, làm dưa muối', 'Không có ích', 'Phá tất cả thức ăn', 'Gây tất cả các bệnh'], 0,
      'Vi khuẩn có lợi: <b>làm sữa chua, dưa muối, phô mai, nước mắm</b>.',
      [
        '<b>Vi khuẩn có ích trong đời sống:</b>',
        '<ul><li>🥛 <i>Lactobacillus</i>: làm sữa chua, phô mai, dưa muối.</li><li>🌱 Vi khuẩn <i>nốt sần ở rễ đậu</i>: cố định nitơ → làm đất giàu dinh dưỡng.</li><li>♻️ Phân huỷ xác sinh vật → tái sử dụng vật chất.</li><li>💊 Sản xuất một số loại kháng sinh, vitamin.</li></ul>',
      ],
      [
        'Đúng — <b>Lên men sữa chua, làm dưa muối</b> là đáp án chính xác. Vi khuẩn có lợi: làm sữa chua, dưa muối, phô mai, nước mắm.',
        'Sai — vì <b>Không có ích</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lên men sữa chua, làm dưa muối</b>.',
        'Sai — vì <b>Phá tất cả thức ăn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lên men sữa chua, làm dưa muối</b>.',
        'Sai — vì <b>Gây tất cả các bệnh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lên men sữa chua, làm dưa muối</b>.',
      ]
    ),
    Q('Vi khuẩn có hại có thể gây?',
      ['Cây cao thêm', 'Bệnh tả, lao, viêm họng', 'Trời nắng', 'Mọi điều tốt đẹp'], 1,
      'Vi khuẩn gây bệnh: <b>tả, lao, viêm họng, viêm phổi, sâu răng…</b>',
      [
        '<b>Một số bệnh do vi khuẩn:</b>',
        '<ul><li>Lao phổi (vi khuẩn <i>Mycobacterium tuberculosis</i>).</li><li>Tả (<i>Vibrio cholerae</i>) — gây tiêu chảy nguy hiểm.</li><li>Viêm họng, viêm phổi (liên cầu khuẩn, phế cầu).</li><li>Sâu răng (<i>Streptococcus mutans</i>).</li><li>Ngộ độc thực phẩm.</li></ul>',
      ],
      [
        'Sai — vì <b>Cây cao thêm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bệnh tả, lao, viêm họng</b>.',
        'Đúng — <b>Bệnh tả, lao, viêm họng</b> là đáp án chính xác. Vi khuẩn gây bệnh: tả, lao, viêm họng, viêm phổi, sâu răng….',
        'Sai — vì <b>Trời nắng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bệnh tả, lao, viêm họng</b>.',
        'Sai — vì <b>Mọi điều tốt đẹp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bệnh tả, lao, viêm họng</b>.',
      ]
    ),
    Q('Để phòng tránh bệnh do vi khuẩn, ta nên?',
      ['Không rửa tay', 'Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân', 'Ăn đồ ôi', 'Uống nước lã'], 1,
      'Phòng bệnh: <b>rửa tay, ăn chín, uống sôi, vệ sinh cá nhân</b>.',
      [
        '<b>5 nguyên tắc phòng bệnh do vi khuẩn:</b>',
        '<ul><li>① Rửa tay bằng xà phòng trước khi ăn, sau khi đi vệ sinh.</li><li>② Ăn chín, uống sôi — không ăn đồ tái, sống không rõ nguồn.</li><li>③ Giữ vệ sinh răng miệng, tắm gội sạch sẽ.</li><li>④ Tiêm vắc-xin đầy đủ (lao, ho gà, bạch hầu, uốn ván…).</li><li>⑤ Khi mắc bệnh: đi khám, uống kháng sinh đúng chỉ định.</li></ul>',
      ],
      [
        'Sai — vì <b>Không rửa tay</b> là hành vi <b>nguy hiểm</b>, không đảm bảo an toàn. Đáp án đúng là <b>Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân</b>.',
        'Đúng — <b>Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân</b> là đáp án chính xác. Phòng bệnh: rửa tay, ăn chín, uống sôi, vệ sinh cá nhân.',
        'Sai — vì <b>Ăn đồ ôi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân</b>.',
        'Sai — vì <b>Uống nước lã</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rửa tay, ăn chín, uống sôi, vệ sinh cá nhân</b>.',
      ]
    ),
    Q('Thuốc thường được dùng để tiêu diệt vi khuẩn gây bệnh là?',
      ['Kháng sinh', 'Vitamin C', 'Nước muối loãng (chỉ làm sạch)', 'Thuốc giảm đau paracetamol'], 0,
      '<b>Kháng sinh</b> tiêu diệt hoặc ức chế vi khuẩn — cần chỉ định bác sĩ.',
      [
        '<b>Kháng sinh (antibiotics)</b> là thuốc đặc trị bệnh do vi khuẩn:',
        '<ul><li>✅ Tiêu diệt hoặc ức chế vi khuẩn gây bệnh.</li><li>❌ KHÔNG có tác dụng với virus (cảm cúm, COVID).</li><li>⚠️ Phải uống đúng liều, đủ ngày theo chỉ định.</li></ul>',
        '<b>Cảnh báo kháng kháng sinh:</b> dùng tuỳ tiện làm vi khuẩn "nhờn thuốc" → bệnh khó chữa.',
      ],
      [
        'Đúng — <b>Kháng sinh</b> là đáp án chính xác. Kháng sinh tiêu diệt hoặc ức chế vi khuẩn — cần chỉ định bác sĩ.',
        'Sai — vì <b>Vitamin C</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kháng sinh</b>.',
        'Sai — vì <b>Nước muối loãng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kháng sinh</b>.',
        'Sai — vì <b>Thuốc giảm đau paracetamol</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Kháng sinh</b>.',
      ]
    ),
  ]),

  M(23, 'Virus — đặc điểm cơ bản', [
    Q('Virus có cấu tạo?',
      ['Là một tế bào nhân thực', 'Là khoáng vật', 'Chưa có cấu tạo tế bào, gồm vỏ protein và lõi vật chất di truyền', 'Đầy đủ tế bào như vi khuẩn'], 2,
      'Virus <b>chưa có cấu tạo tế bào</b> — chỉ gồm vỏ protein và lõi DNA/RNA.',
      [
        '<b>Cấu tạo virus đơn giản:</b>',
        '<ul><li><b>Vỏ ngoài</b>: lớp protein gọi là <i>capsid</i>.</li><li><b>Lõi</b>: vật chất di truyền (DNA hoặc RNA).</li><li>Một số virus có thêm <b>vỏ ngoài lipid</b> (như virus cúm, COVID-19).</li></ul>',
        '⚠️ Virus chưa được coi là tế bào → nhiều nhà khoa học không xếp vào "sinh vật" thực thụ.',
      ],
      [
        'Sai — vì <b>Là một tế bào nhân thực</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chưa có cấu tạo tế bào, gồm vỏ protein và lõi…</b>.',
        'Sai — vì <b>Là khoáng vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chưa có cấu tạo tế bào, gồm vỏ protein và lõi…</b>.',
        'Đúng — <b>Chưa có cấu tạo tế bào, gồm vỏ protein và lõi vật chất…</b> là đáp án chính xác. Virus chưa có cấu tạo tế bào — chỉ gồm vỏ protein và lõi DNA/RNA.',
        'Sai — vì <b>Đầy đủ tế bào như vi khuẩn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Chưa có cấu tạo tế bào, gồm vỏ protein và lõi…</b>.',
      ]
    ),
    Q('Virus sinh sản (nhân lên) ở đâu?',
      ['Bên trong tế bào vật chủ', 'Tự do trong nước', 'Trong đá', 'Trong không khí khô'], 0,
      'Virus chỉ nhân lên được <b>bên trong tế bào vật chủ</b> — ký sinh bắt buộc.',
      [
        '<b>Virus là ký sinh nội bào bắt buộc:</b>',
        '<ul><li>Không thể tự sinh sản ngoài tế bào.</li><li>Phải <b>xâm nhập</b> tế bào vật chủ → dùng "máy móc" của tế bào để nhân bản.</li><li>Sản xuất virus mới → phá vỡ tế bào → lan ra tế bào khác.</li></ul>',
        'Đó là lý do virus gây bệnh — chúng tàn phá tế bào của vật chủ.',
      ],
      [
        'Đúng — <b>Bên trong tế bào vật chủ</b> là đáp án chính xác. Virus chỉ nhân lên được bên trong tế bào vật chủ — ký sinh bắt buộc.',
        'Sai — vì <b>Tự do trong nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bên trong tế bào vật chủ</b>.',
        'Sai — vì <b>Trong đá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bên trong tế bào vật chủ</b>.',
        'Sai — vì <b>Trong không khí khô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bên trong tế bào vật chủ</b>.',
      ]
    ),
    Q('Kích thước virus so với vi khuẩn?',
      ['Lớn hơn nhiều', 'Không xác định', 'Bằng nhau', 'Nhỏ hơn nhiều'], 3,
      'Virus <b>nhỏ hơn vi khuẩn rất nhiều</b> — cỡ nanomet.',
      [
        '<b>So sánh kích thước:</b>',
        '<ul><li><b>Tế bào động vật</b>: 10–30 µm.</li><li><b>Vi khuẩn</b>: 1–10 µm.</li><li><b>Virus</b>: 0,02–0,3 µm = <code>20–300 nanomet (nm)</code>.</li></ul>',
        'Virus nhỏ hơn vi khuẩn ~100 lần → kính hiển vi quang học không đủ, cần <b>kính hiển vi điện tử</b>.',
      ],
      [
        'Sai — vì <b>Lớn hơn nhiều</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhỏ hơn nhiều</b>.',
        'Sai — vì <b>Không xác định</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhỏ hơn nhiều</b>.',
        'Sai — vì <b>Bằng nhau</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nhỏ hơn nhiều</b>.',
        'Đúng — <b>Nhỏ hơn nhiều</b> là đáp án chính xác. Virus nhỏ hơn vi khuẩn rất nhiều — cỡ nanomet.',
      ]
    ),
    Q('Ví dụ bệnh do virus gây ra ở người?',
      ['Lao phổi do vi khuẩn', 'Cúm, COVID-19, sởi, viêm gan B', 'Gãy xương', 'Sâu răng'], 1,
      'Bệnh do virus: <b>cúm, COVID-19, sởi, viêm gan B, HIV, sốt xuất huyết</b>.',
      [
        '<b>Một số bệnh do virus gây ra:</b>',
        '<ul><li>🤧 Cảm cúm (Influenza virus).</li><li>🦠 COVID-19 (SARS-CoV-2).</li><li>🔴 Sởi, quai bị, rubella.</li><li>🍷 Viêm gan A, B, C.</li><li>🦟 Sốt xuất huyết (truyền qua muỗi).</li><li>🧬 HIV/AIDS.</li></ul>',
      ],
      [
        'Sai — vì <b>Lao phổi do vi khuẩn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cúm, COVID-19, sởi, viêm gan B</b>.',
        'Đúng — <b>Cúm, COVID-19, sởi, viêm gan B</b> là đáp án chính xác. Bệnh do virus: cúm, COVID-19, sởi, viêm gan B, HIV, sốt xuất huyết.',
        'Sai — vì <b>Gãy xương</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cúm, COVID-19, sởi, viêm gan B</b>.',
        'Sai — vì <b>Sâu răng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cúm, COVID-19, sởi, viêm gan B</b>.',
      ]
    ),
    Q('Cách hiệu quả phòng nhiều bệnh do virus là?',
      ['Tiếp xúc gần người bệnh', 'Uống kháng sinh tuỳ ý', 'Bỏ qua', 'Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi cần'], 3,
      '<b>Tiêm vắc-xin + vệ sinh tay + đeo khẩu trang</b> là 3 biện pháp hiệu quả.',
      [
        '<b>Phòng bệnh do virus:</b>',
        '<ul><li>💉 <b>Tiêm vắc-xin</b>: tạo miễn dịch chủ động (sởi, viêm gan B, COVID).</li><li>🧼 Rửa tay thường xuyên bằng xà phòng.</li><li>😷 Đeo khẩu trang khi cần (mùa dịch, nơi đông người).</li><li>💪 Tăng sức đề kháng: ăn đủ chất, ngủ đủ, vận động.</li></ul>',
      ],
      [
        'Sai — vì <b>Tiếp xúc gần người bệnh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi…</b>.',
        'Sai — vì <b>Uống kháng sinh tuỳ ý</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi…</b>.',
        'Sai — vì <b>Bỏ qua</b> là hành vi <b>nguy hiểm</b>, không đảm bảo an toàn. Đáp án đúng là <b>Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi…</b>.',
        'Đúng — <b>Tiêm vắc-xin, vệ sinh tay, đeo khẩu trang khi cần</b> là đáp án chính xác. Tiêm vắc-xin + vệ sinh tay + đeo khẩu trang là 3 biện pháp hiệu quả.',
      ]
    ),
    Q('Kháng sinh có tác dụng tiêu diệt virus không?',
      ['Không xác định', 'Có, nhưng chỉ với cảm cúm', 'Không, kháng sinh chỉ diệt vi khuẩn', 'Có, diệt mọi virus'], 2,
      '<b>KHÔNG</b> — kháng sinh chỉ diệt vi khuẩn, không có tác dụng với virus.',
      [
        '<b>Tại sao kháng sinh không diệt được virus?</b>',
        '<ul><li>Kháng sinh phá vỡ cấu trúc <i>vách vi khuẩn</i> hoặc ức chế chuyển hoá.</li><li>Virus KHÔNG có vách, KHÔNG có chuyển hoá riêng — chúng "mượn" tế bào vật chủ.</li></ul>',
        '<b>Thuốc trị virus</b> gọi là <i>thuốc kháng virus (antiviral)</i> — ví dụ Tamiflu (cúm), Remdesivir (COVID).',
        '⚠️ Lạm dụng kháng sinh trị cúm là sai và gây hại.',
      ],
      [
        'Sai — vì <b>Không xác định</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không, kháng sinh chỉ diệt vi khuẩn</b>.',
        'Sai — vì <b>Có, nhưng chỉ với cảm cúm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không, kháng sinh chỉ diệt vi khuẩn</b>.',
        'Đúng — <b>Không, kháng sinh chỉ diệt vi khuẩn</b> là đáp án chính xác. KHÔNG — kháng sinh chỉ diệt vi khuẩn, không có tác dụng với virus.',
        'Sai — vì <b>Có, diệt mọi virus</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không, kháng sinh chỉ diệt vi khuẩn</b>.',
      ]
    ),
  ]),

  M(24, 'Nguyên sinh vật và Nấm', [
    Q('Nguyên sinh vật là?',
      ['Khoáng vật', 'Sinh vật nhân sơ', 'Vi khuẩn cổ (Archaea)', 'Sinh vật nhân thực, phần lớn đơn bào, sống trong nước hoặc nơi ẩm'], 3,
      'Nguyên sinh vật: <b>nhân thực, phần lớn đơn bào, sống ở nước/nơi ẩm</b>.',
      [
        '<b>Giới Nguyên sinh (Protista)</b>:',
        '<ul><li>Tế bào <b>nhân thực</b> (có màng nhân).</li><li>Phần lớn <b>đơn bào</b>, một số ít đa bào đơn giản (tảo lớn).</li><li>Sống ở môi trường nước hoặc nơi ẩm.</li><li>Cách dinh dưỡng đa dạng: tự dưỡng (tảo), dị dưỡng (trùng giày).</li></ul>',
      ],
      [
        'Sai — vì <b>Khoáng vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh vật nhân thực, phần lớn đơn bào, sống tr…</b>.',
        'Sai — vì <b>Sinh vật nhân sơ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh vật nhân thực, phần lớn đơn bào, sống tr…</b>.',
        'Sai — vì <b>Vi khuẩn cổ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh vật nhân thực, phần lớn đơn bào, sống tr…</b>.',
        'Đúng — <b>Sinh vật nhân thực, phần lớn đơn bào, sống trong nước h…</b> là đáp án chính xác. Nguyên sinh vật: nhân thực, phần lớn đơn bào, sống ở nước/nơi ẩm.',
      ]
    ),
    Q('Ví dụ về nguyên sinh vật là?',
      ['Trùng roi, trùng giày, amip', 'Vi khuẩn lao', 'Virus cúm', 'Cây xoài'], 0,
      'Nguyên sinh vật quen thuộc: <b>trùng roi, trùng giày, amip, tảo lục</b>.',
      [
        '<b>Một số đại diện nguyên sinh vật:</b>',
        '<ul><li><b>Trùng giày (paramecium)</b>: hình giày, dùng lông bơi nhanh trong nước.</li><li><b>Trùng roi (euglena)</b>: có roi để di chuyển, vừa quang hợp vừa dị dưỡng.</li><li><b>Amip</b>: di chuyển bằng chân giả, có thể gây bệnh kiết lị.</li><li><b>Tảo silic, tảo lục</b>: quang hợp như thực vật.</li></ul>',
      ],
      [
        'Đúng — <b>Trùng roi, trùng giày, amip</b> là đáp án chính xác. Nguyên sinh vật quen thuộc: trùng roi, trùng giày, amip, tảo lục.',
        'Sai — vì <b>Vi khuẩn lao</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trùng roi, trùng giày, amip</b>.',
        'Sai — vì <b>Virus cúm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trùng roi, trùng giày, amip</b>.',
        'Sai — vì <b>Cây xoài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trùng roi, trùng giày, amip</b>.',
      ]
    ),
    Q('Nấm thuộc giới?',
      ['Nấm (Fungi)', 'Động vật', 'Thực vật', 'Khởi sinh'], 0,
      '<b>Nấm</b> là một <i>giới riêng</i> — không phải thực vật cũng không phải động vật.',
      [
        '<b>Giới Nấm (Fungi)</b> có đặc điểm riêng biệt:',
        '<ul><li><b>Nhân thực</b>, có thành tế bào nhưng làm từ <i>chitin</i> (khác cellulose của thực vật).</li><li><b>KHÔNG có lục lạp</b> → KHÔNG quang hợp.</li><li><b>Dị dưỡng</b>: hấp thụ chất hữu cơ từ môi trường.</li><li>Có thể đơn bào (nấm men) hoặc đa bào (nấm rơm).</li></ul>',
      ],
      [
        'Đúng — <b>Nấm</b> là đáp án chính xác. Nấm là một giới riêng — không phải thực vật cũng không phải động vật.',
        'Sai — vì <b>Động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nấm</b>.',
        'Sai — vì <b>Thực vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nấm</b>.',
        'Sai — vì <b>Khởi sinh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nấm</b>.',
      ]
    ),
    Q('Nấm dinh dưỡng bằng cách?',
      ['Hấp thụ chất hữu cơ từ môi trường', 'Săn mồi như động vật', 'Quang hợp như cây', 'Tự tổng hợp từ ánh sáng'], 0,
      'Nấm <b>dị dưỡng</b> — tiết enzyme phân giải chất hữu cơ rồi hấp thụ.',
      [
        '<b>Cơ chế dinh dưỡng của nấm:</b>',
        '<ul><li>① Sợi nấm tiết <b>enzyme</b> ra môi trường.</li><li>② Enzyme phân giải chất hữu cơ phức tạp thành chất đơn giản.</li><li>③ Sợi nấm <b>hấp thụ</b> chất đơn giản qua thành tế bào.</li></ul>',
        'Đó là lý do nấm mọc trên gỗ mục, lá rụng, thức ăn để lâu — chúng "ăn" chất hữu cơ từ đó.',
      ],
      [
        'Đúng — <b>Hấp thụ chất hữu cơ từ môi trường</b> là đáp án chính xác. Nấm dị dưỡng — tiết enzyme phân giải chất hữu cơ rồi hấp thụ.',
        'Sai — vì <b>Săn mồi như động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hấp thụ chất hữu cơ từ môi trường</b>.',
        'Sai — vì <b>Quang hợp như cây</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hấp thụ chất hữu cơ từ môi trường</b>.',
        'Sai — vì <b>Tự tổng hợp từ ánh sáng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hấp thụ chất hữu cơ từ môi trường</b>.',
      ]
    ),
    Q('Ví dụ nấm có ích là?',
      ['Nấm độc xanh đen', 'Nấm gây hắc lào', 'Mọi loại nấm mốc trên thức ăn', 'Nấm rơm, nấm hương, nấm men làm bánh mì'], 3,
      'Nấm có ích: <b>nấm ăn (rơm, hương, kim châm)</b> và <b>nấm men</b> làm bánh mì, rượu, bia.',
      [
        '<b>Vai trò có ích của nấm:</b>',
        '<ul><li>🍄 <b>Nấm ăn</b>: nấm rơm, hương, kim châm, mộc nhĩ — giàu dinh dưỡng.</li><li>🍞 <b>Nấm men (Saccharomyces)</b>: làm bánh mì nở, lên men rượu, bia.</li><li>💊 Sản xuất kháng sinh (penicillin từ nấm <i>Penicillium</i>).</li><li>♻️ Phân huỷ xác sinh vật → tái chế vật chất trong tự nhiên.</li></ul>',
      ],
      [
        'Sai — vì <b>Nấm độc xanh đen</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nấm rơm, nấm hương, nấm men làm bánh mì</b>.',
        'Sai — vì <b>Nấm gây hắc lào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nấm rơm, nấm hương, nấm men làm bánh mì</b>.',
        'Sai — vì <b>Mọi loại nấm mốc trên thức ăn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nấm rơm, nấm hương, nấm men làm bánh mì</b>.',
        'Đúng — <b>Nấm rơm, nấm hương, nấm men làm bánh mì</b> là đáp án chính xác. Nấm có ích: nấm ăn (rơm, hương, kim châm) và nấm men làm bánh mì, rượu, bia.',
      ]
    ),
    Q('Khi gặp nấm lạ trong rừng, em phải?',
      ['Cho bạn ăn thử', 'Không hái, không ăn vì có thể là nấm độc', 'Đem nấu canh', 'Ăn thử ngay'], 1,
      '<b>KHÔNG hái, KHÔNG ăn</b> — nấm độc có thể gây tử vong.',
      [
        '<b>Cảnh báo nấm độc:</b>',
        '<ul><li>Nhiều nấm độc trông rất giống nấm ăn — khó phân biệt bằng mắt thường.</li><li>Độc tố không bị phá huỷ khi nấu chín.</li><li>Một số loại có thể gây tử vong chỉ với vài mg (nấm độc xanh đen).</li></ul>',
        '🚫 Tuyệt đối: <b>không hái, không nếm thử</b> nấm hoang dại nếu không phải chuyên gia.',
      ],
      [
        'Sai — vì <b>Cho bạn ăn thử</b> là hành vi <b>cực kỳ nguy hiểm</b>, có thể gây ngộ độc/tử vong. Đáp án đúng là <b>Không hái, không ăn vì có thể là nấm độc</b>.',
        'Đúng — <b>Không hái, không ăn vì có thể là nấm độc</b> là đáp án chính xác. KHÔNG hái, KHÔNG ăn — nấm độc có thể gây tử vong.',
        'Sai — vì <b>Đem nấu canh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không hái, không ăn vì có thể là nấm độc</b>.',
        'Sai — vì <b>Ăn thử ngay</b> là hành vi <b>cực kỳ nguy hiểm</b>, có thể gây ngộ độc/tử vong. Đáp án đúng là <b>Không hái, không ăn vì có thể là nấm độc</b>.',
      ]
    ),
  ]),

  M(25, 'Thực vật', [
    Q('Thực vật có đặc điểm chung là?',
      ['Có khả năng quang hợp nhờ lục lạp', 'Săn mồi như động vật', 'Sống trong nước biển hết', 'Không có tế bào'], 0,
      'Thực vật <b>quang hợp</b> nhờ lục lạp → tự tổng hợp chất hữu cơ.',
      [
        '<b>Đặc điểm chung của thực vật (Plantae):</b>',
        '<ul><li>Tế bào nhân thực, có <b>thành cellulose</b>.</li><li>Có <b>lục lạp</b> → thực hiện <b>quang hợp</b>.</li><li>Tự dưỡng — tự tạo chất hữu cơ từ CO₂, H₂O và ánh sáng.</li><li>Đa số sống cố định, không di chuyển.</li></ul>',
      ],
      [
        'Đúng — <b>Có khả năng quang hợp nhờ lục lạp</b> là đáp án chính xác. Thực vật quang hợp nhờ lục lạp → tự tổng hợp chất hữu cơ.',
        'Sai — vì <b>Săn mồi như động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có khả năng quang hợp nhờ lục lạp</b>.',
        'Sai — vì <b>Sống trong nước biển hết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có khả năng quang hợp nhờ lục lạp</b>.',
        'Sai — vì <b>Không có tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có khả năng quang hợp nhờ lục lạp</b>.',
      ]
    ),
    Q('Thực vật được chia thành các nhóm chính như?',
      ['Chỉ có cây xoài', 'Côn trùng, Cá, Chim', 'Vi khuẩn, Nấm, Tảo', 'Rêu, Dương xỉ, Hạt trần, Hạt kín'], 3,
      '4 nhóm chính: <b>Rêu – Dương xỉ – Hạt trần – Hạt kín</b>.',
      [
        '<b>4 nhóm thực vật chính (SGK lớp 6):</b>',
        '<ul><li><b>Rêu</b>: nhỏ, không có mạch dẫn, sống ẩm ướt.</li><li><b>Dương xỉ</b>: có mạch dẫn, sinh sản bằng bào tử, lá kép.</li><li><b>Hạt trần</b>: có hạt không bao trong quả (thông, tùng).</li><li><b>Hạt kín</b>: có hoa và quả thật chứa hạt — chiếm đa số cây quen thuộc.</li></ul>',
      ],
      [
        'Sai — vì <b>Chỉ có cây xoài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rêu, Dương xỉ, Hạt trần, Hạt kín</b>.',
        'Sai — vì <b>Côn trùng, Cá, Chim</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rêu, Dương xỉ, Hạt trần, Hạt kín</b>.',
        'Sai — vì <b>Vi khuẩn, Nấm, Tảo</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rêu, Dương xỉ, Hạt trần, Hạt kín</b>.',
        'Đúng — <b>Rêu, Dương xỉ, Hạt trần, Hạt kín</b> là đáp án chính xác. 4 nhóm chính: Rêu – Dương xỉ – Hạt trần – Hạt kín.',
      ]
    ),
    Q('Đặc điểm của thực vật Hạt kín là?',
      ['Hạt nằm trong quả, có hoa', 'Không có rễ', 'Hạt nằm lộ trên lá noãn (như thông)', 'Không có hoa, không có hạt'], 0,
      'Hạt kín = <b>thực vật có hoa</b>, hạt nằm trong quả.',
      [
        '<b>Thực vật Hạt kín (Angiospermae)</b> — nhóm tiến hoá cao nhất:',
        '<ul><li>Có <b>hoa</b> — cơ quan sinh sản.</li><li>Hạt nằm trong <b>quả thật</b>, được bao bọc bảo vệ.</li><li>Đa dạng nhất, chiếm ~90% loài thực vật.</li></ul>',
        'Ví dụ: lúa, ngô, đậu, xoài, cam, hoa hồng, cải… tất cả cây có hoa em thấy hàng ngày.',
      ],
      [
        'Đúng — <b>Hạt nằm trong quả, có hoa</b> là đáp án chính xác. Hạt kín = thực vật có hoa, hạt nằm trong quả.',
        'Sai — vì <b>Không có rễ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hạt nằm trong quả, có hoa</b>.',
        'Sai — vì <b>Hạt nằm lộ trên lá noãn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hạt nằm trong quả, có hoa</b>.',
        'Sai — vì <b>Không có hoa, không có hạt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hạt nằm trong quả, có hoa</b>.',
      ]
    ),
    Q('Đặc điểm của thực vật Hạt trần là?',
      ['Không có thân', 'Hạt lộ trên lá noãn (không có quả thật)', 'Hạt nằm trong quả thật', 'Không có hạt'], 1,
      'Hạt trần: hạt <b>lộ trên lá noãn</b>, KHÔNG có quả thật.',
      [
        '<b>Thực vật Hạt trần (Gymnospermae)</b>:',
        '<ul><li>Hạt <i>không được bao</i> trong quả — nằm "trần" trên lá noãn.</li><li>Sinh sản bằng <b>nón</b> (đực và cái), không có hoa thật.</li><li>Đa số là cây gỗ lớn, lá kim.</li></ul>',
        'Ví dụ: thông, tùng, vạn tuế, bách tán.',
      ],
      [
        'Sai — vì <b>Không có thân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hạt lộ trên lá noãn</b>.',
        'Đúng — <b>Hạt lộ trên lá noãn</b> là đáp án chính xác. Hạt trần: hạt lộ trên lá noãn, KHÔNG có quả thật.',
        'Sai — vì <b>Hạt nằm trong quả thật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hạt lộ trên lá noãn</b>.',
        'Sai — vì <b>Không có hạt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hạt lộ trên lá noãn</b>.',
      ]
    ),
    Q('Rêu thường sống ở?',
      ['Nơi ẩm ướt, bóng râm', 'Sa mạc khô nóng', 'Trong nước biển mặn', 'Trên đá khô bốc cháy'], 0,
      'Rêu <b>ưa ẩm</b>, sống ở nơi ẩm ướt, bóng râm.',
      [
        '<b>Đặc điểm của Rêu (Bryophyta):</b>',
        '<ul><li>Nhỏ bé, không có mạch dẫn → không vận chuyển nước xa được.</li><li>Không có rễ thật, chỉ có rễ giả bám.</li><li>Sinh sản bằng <b>bào tử</b>.</li><li>Phải sống nơi ẩm: tường gạch ẩm, đá gốc cây, ven suối.</li></ul>',
      ],
      [
        'Đúng — <b>Nơi ẩm ướt, bóng râm</b> là đáp án chính xác. Rêu ưa ẩm, sống ở nơi ẩm ướt, bóng râm.',
        'Sai — vì <b>Sa mạc khô nóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nơi ẩm ướt, bóng râm</b>.',
        'Sai — vì <b>Trong nước biển mặn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nơi ẩm ướt, bóng râm</b>.',
        'Sai — vì <b>Trên đá khô bốc cháy</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nơi ẩm ướt, bóng râm</b>.',
      ]
    ),
    Q('Vai trò của thực vật trong tự nhiên?',
      ['Chỉ tốn nước', 'Không có vai trò gì', 'Chỉ làm cảnh', 'Cung cấp O2, thức ăn, nơi ở cho động vật, giữ đất, điều hoà khí hậu'], 3,
      'Thực vật là <b>nền tảng</b> mọi hệ sinh thái — không có thực vật thì không có sự sống.',
      [
        '<b>Vai trò của thực vật:</b>',
        '<ul><li>🌬️ Cung cấp <b>O₂</b> nhờ quang hợp.</li><li>🍎 Cung cấp <b>thức ăn</b> cho động vật và con người.</li><li>🏠 Tạo <b>nơi ở</b> cho nhiều loài.</li><li>🌳 <b>Giữ đất</b>, chống xói mòn, lũ lụt.</li><li>🌡️ <b>Điều hoà khí hậu</b>, làm dịu nhiệt độ.</li><li>💊 Cung cấp dược liệu, gỗ, sợi, dầu.</li></ul>',
      ],
      [
        'Sai — vì <b>Chỉ tốn nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp O2, thức ăn, nơi ở cho động vật, giữ…</b>.',
        'Sai — vì <b>Không có vai trò gì</b> là khẳng định sai — KHTN có vai trò rất quan trọng trong đời sống. Đáp án đúng là <b>Cung cấp O2, thức ăn, nơi ở cho động vật, giữ…</b>.',
        'Sai — vì <b>Chỉ làm cảnh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cung cấp O2, thức ăn, nơi ở cho động vật, giữ…</b>.',
        'Đúng — <b>Cung cấp O2, thức ăn, nơi ở cho động vật, giữ đất, điều…</b> là đáp án chính xác. Thực vật là nền tảng mọi hệ sinh thái — không có thực vật thì không có sự sống.',
      ]
    ),
  ]),

  M(26, 'Động vật không xương sống', [
    Q('Động vật không xương sống có đặc điểm?',
      ['Luôn có 4 chân', 'Có cột sống cứng cáp', 'Không có xương sống bên trong cơ thể', 'Luôn biết bay'], 2,
      '<b>Không có cột sống</b> bên trong cơ thể.',
      [
        '<b>Động vật không xương sống (Invertebrata)</b>:',
        '<ul><li>KHÔNG có cột sống bên trong cơ thể.</li><li>Chiếm hơn <b>95%</b> số loài động vật.</li><li>Đa dạng cấu tạo: từ rất đơn giản (bọt biển) đến phức tạp (mực).</li></ul>',
        'Đa số có <i>bộ xương ngoài</i> bằng chitin (chân khớp) hoặc đá vôi (thân mềm).',
      ],
      [
        'Sai — vì <b>Luôn có 4 chân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không có xương sống bên trong cơ thể</b>.',
        'Sai — vì <b>Có cột sống cứng cáp</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không có xương sống bên trong cơ thể</b>.',
        'Đúng — <b>Không có xương sống bên trong cơ thể</b> là đáp án chính xác. Không có cột sống bên trong cơ thể.',
        'Sai — vì <b>Luôn biết bay</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không có xương sống bên trong cơ thể</b>.',
      ]
    ),
    Q('Đại diện nhóm Ruột khoang là?',
      ['Cá, ếch', 'Giun đất, đỉa', 'Thuỷ tức, sứa, san hô', 'Chim, gà'], 2,
      'Ruột khoang: <b>thuỷ tức, sứa, san hô, hải quỳ</b>.',
      [
        '<b>Ngành Ruột khoang (Cnidaria)</b>:',
        '<ul><li>Cơ thể đối xứng toả tròn.</li><li>Có <b>khoang tiêu hoá hình túi</b> (chỉ 1 lỗ vừa là miệng vừa là hậu môn).</li><li>Có <b>tế bào gai</b> chứa độc để tự vệ và bắt mồi.</li><li>Sống ở nước (đa số ở biển).</li></ul>',
        'Ví dụ: thuỷ tức (nước ngọt), sứa, san hô, hải quỳ (biển).',
      ],
      [
        'Sai — vì <b>Cá, ếch</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thuỷ tức, sứa, san hô</b>.',
        'Sai — vì <b>Giun đất, đỉa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thuỷ tức, sứa, san hô</b>.',
        'Đúng — <b>Thuỷ tức, sứa, san hô</b> là đáp án chính xác. Ruột khoang: thuỷ tức, sứa, san hô, hải quỳ.',
        'Sai — vì <b>Chim, gà</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thuỷ tức, sứa, san hô</b>.',
      ]
    ),
    Q('Đại diện nhóm Giun là?',
      ['Cá chép', 'Cua, tôm', 'Bướm, ong', 'Giun đất, giun đũa, sán'], 3,
      'Các loại giun: <b>giun đất, giun đũa, sán lá gan, đỉa</b>.',
      [
        '<b>Các ngành giun:</b>',
        '<ul><li><b>Giun dẹp</b>: sán lá gan, sán dây — nhiều loài ký sinh.</li><li><b>Giun tròn</b>: giun đũa, giun kim — gây bệnh ở người.</li><li><b>Giun đốt</b>: giun đất, đỉa, rươi — cơ thể chia đốt.</li></ul>',
        'Giun đất rất có ích — làm tơi xốp đất, tăng độ phì.',
      ],
      [
        'Sai — vì <b>Cá chép</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giun đất, giun đũa, sán</b>.',
        'Sai — vì <b>Cua, tôm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giun đất, giun đũa, sán</b>.',
        'Sai — vì <b>Bướm, ong</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giun đất, giun đũa, sán</b>.',
        'Đúng — <b>Giun đất, giun đũa, sán</b> là đáp án chính xác. Các loại giun: giun đất, giun đũa, sán lá gan, đỉa.',
      ]
    ),
    Q('Đại diện nhóm Thân mềm là?',
      ['Châu chấu, dế', 'Giun, sán', 'Chim sẻ', 'Ốc, hến, mực'], 3,
      'Thân mềm: <b>ốc, sò, hến, trai, mực, bạch tuộc</b>.',
      [
        '<b>Ngành Thân mềm (Mollusca)</b>:',
        '<ul><li>Cơ thể <b>mềm</b>, không phân đốt.</li><li>Đa số có <b>vỏ đá vôi</b> bảo vệ (ốc, trai); một số tiêu giảm (mực).</li><li>Sống ở nước (biển, ngọt) và một số ở cạn (ốc sên).</li></ul>',
        'Nhiều loài có giá trị thực phẩm cao: hàu, sò, mực, bạch tuộc.',
      ],
      [
        'Sai — vì <b>Châu chấu, dế</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ốc, hến, mực</b>.',
        'Sai — vì <b>Giun, sán</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ốc, hến, mực</b>.',
        'Sai — vì <b>Chim sẻ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ốc, hến, mực</b>.',
        'Đúng — <b>Ốc, hến, mực</b> là đáp án chính xác. Thân mềm: ốc, sò, hến, trai, mực, bạch tuộc.',
      ]
    ),
    Q('Đại diện nhóm Chân khớp là?',
      ['Tôm, cua, nhện, châu chấu', 'Cây xoài', 'Trai sông, hến', 'Giun đất, rết'], 0,
      'Chân khớp: <b>tôm, cua, nhện, côn trùng (bướm, kiến, ong)</b>.',
      [
        '<b>Ngành Chân khớp (Arthropoda)</b> — đông đảo nhất:',
        '<ul><li>Có <b>bộ xương ngoài</b> bằng chitin.</li><li>Cơ thể và chân <b>phân đốt, có khớp</b>.</li><li>Chiếm ~80% loài động vật.</li></ul>',
        'Chia thành: <i>giáp xác</i> (tôm, cua), <i>nhện</i> (nhện, bọ cạp), <i>côn trùng</i> (bướm, ong, kiến).',
      ],
      [
        'Đúng — <b>Tôm, cua, nhện, châu chấu</b> là đáp án chính xác. Chân khớp: tôm, cua, nhện, côn trùng (bướm, kiến, ong).',
        'Sai — vì <b>Cây xoài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tôm, cua, nhện, châu chấu</b>.',
        'Sai — vì <b>Trai sông, hến</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tôm, cua, nhện, châu chấu</b>.',
        'Sai — vì <b>Giun đất, rết</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tôm, cua, nhện, châu chấu</b>.',
      ]
    ),
    Q('Vai trò của giun đất với đất trồng?',
      ['Làm cứng đất', 'Phá hoại rễ cây toàn bộ', 'Không liên quan', 'Làm tơi xốp đất, tăng độ phì'], 3,
      'Giun đất là "<b>bạn của nhà nông</b>" — làm tơi xốp đất, tăng độ phì.',
      [
        '<b>Vai trò của giun đất:</b>',
        '<ul><li>🌱 <b>Làm tơi xốp đất</b>: đào hang giúp đất thoáng khí.</li><li>💧 Giúp đất <i>thấm nước</i> tốt hơn.</li><li>💩 <b>Phân giun</b> giàu chất hữu cơ → tăng độ phì.</li><li>♻️ Phân giải xác lá rụng → trả chất dinh dưỡng về đất.</li></ul>',
        'Charles Darwin đã viết hẳn 1 cuốn sách ca ngợi giun đất.',
      ],
      [
        'Sai — vì <b>Làm cứng đất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Làm tơi xốp đất, tăng độ phì</b>.',
        'Sai — vì <b>Phá hoại rễ cây toàn bộ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Làm tơi xốp đất, tăng độ phì</b>.',
        'Sai — vì <b>Không liên quan</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Làm tơi xốp đất, tăng độ phì</b>.',
        'Đúng — <b>Làm tơi xốp đất, tăng độ phì</b> là đáp án chính xác. Giun đất là "bạn của nhà nông" — làm tơi xốp đất, tăng độ phì.',
      ]
    ),
  ]),

  M(27, 'Động vật có xương sống', [
    Q('Động vật có xương sống có đặc điểm chung?',
      ['Có cột sống bên trong cơ thể', 'Không có xương', 'Luôn có vảy', 'Luôn sống dưới nước'], 0,
      'Đặc điểm chung: <b>có cột sống bên trong cơ thể</b>.',
      [
        '<b>Động vật có xương sống (Vertebrata)</b>:',
        '<ul><li>Có <b>cột sống</b> bên trong — chuỗi đốt sống bảo vệ tuỷ sống.</li><li>Có <b>bộ xương trong</b> bằng xương hoặc sụn.</li><li>Hệ thần kinh phát triển hơn động vật không xương sống.</li></ul>',
        '5 lớp chính: <b>Cá – Lưỡng cư – Bò sát – Chim – Thú</b>.',
      ],
      [
        'Đúng — <b>Có cột sống bên trong cơ thể</b> là đáp án chính xác. Đặc điểm chung: có cột sống bên trong cơ thể.',
        'Sai — vì <b>Không có xương</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có cột sống bên trong cơ thể</b>.',
        'Sai — vì <b>Luôn có vảy</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có cột sống bên trong cơ thể</b>.',
        'Sai — vì <b>Luôn sống dưới nước</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có cột sống bên trong cơ thể</b>.',
      ]
    ),
    Q('Cá thở bằng?',
      ['Da ẩm như ếch', 'Vây trao đổi khí', 'Phổi nhỏ hai bên', 'Mang'], 3,
      'Cá thở bằng <b>mang</b> — lấy O₂ hoà tan trong nước.',
      [
        '<b>Đặc điểm lớp Cá:</b>',
        '<ul><li>🐟 Sống dưới nước, hô hấp bằng <b>mang</b>.</li><li>Cơ thể có <b>vảy</b>, di chuyển bằng <b>vây</b>.</li><li>Là động vật biến nhiệt (máu lạnh).</li><li>Đẻ trứng (đa số), thụ tinh ngoài.</li></ul>',
      ],
      [
        'Sai — vì <b>Da ẩm như ếch</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mang</b>.',
        'Sai — vì <b>Vây trao đổi khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mang</b>.',
        'Sai — vì <b>Phổi nhỏ hai bên</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mang</b>.',
        'Đúng — <b>Mang</b> là đáp án chính xác. Cá thở bằng mang — lấy O₂ hoà tan trong nước.',
      ]
    ),
    Q('Lưỡng cư có đại diện là?',
      ['Chim, dơi', 'Ếch, nhái, cóc', 'Cá chép, cá rô', 'Rắn, thằn lằn'], 1,
      'Lưỡng cư: <b>ếch, nhái, cóc, kỳ giông</b>.',
      [
        '<b>Lớp Lưỡng cư (Amphibia)</b>:',
        '<ul><li>"Lưỡng cư" = sống được cả ở nước và cạn.</li><li>Da <b>ẩm, trần</b>, có thể trao đổi khí qua da.</li><li>Tuổi nhỏ (nòng nọc) sống trong nước, thở bằng mang.</li><li>Trưởng thành sống cạn, thở bằng phổi và da.</li><li>Biến nhiệt, đẻ trứng trong nước.</li></ul>',
      ],
      [
        'Sai — vì <b>Chim, dơi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ếch, nhái, cóc</b>.',
        'Đúng — <b>Ếch, nhái, cóc</b> là đáp án chính xác. Lưỡng cư: ếch, nhái, cóc, kỳ giông.',
        'Sai — vì <b>Cá chép, cá rô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ếch, nhái, cóc</b>.',
        'Sai — vì <b>Rắn, thằn lằn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Ếch, nhái, cóc</b>.',
      ]
    ),
    Q('Bò sát có đại diện là?',
      ['Cá chép, cá rô', 'Rắn, thằn lằn, rùa, cá sấu', 'Ếch nhái', 'Chim sẻ'], 1,
      'Bò sát: <b>rắn, thằn lằn, rùa, cá sấu, kỳ đà</b>.',
      [
        '<b>Lớp Bò sát (Reptilia)</b>:',
        '<ul><li>Da khô, có <b>vảy sừng</b> hoặc tấm mai.</li><li>Thở bằng <b>phổi</b>.</li><li>Đẻ <b>trứng có vỏ</b>, sinh trên cạn.</li><li>Là động vật <b>biến nhiệt</b> (máu lạnh).</li></ul>',
        'Tổ tiên của chim — chim tiến hoá từ một nhánh bò sát cổ.',
      ],
      [
        'Sai — vì <b>Cá chép, cá rô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn, thằn lằn, rùa, cá sấu</b>.',
        'Đúng — <b>Rắn, thằn lằn, rùa, cá sấu</b> là đáp án chính xác. Bò sát: rắn, thằn lằn, rùa, cá sấu, kỳ đà.',
        'Sai — vì <b>Ếch nhái</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn, thằn lằn, rùa, cá sấu</b>.',
        'Sai — vì <b>Chim sẻ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Rắn, thằn lằn, rùa, cá sấu</b>.',
      ]
    ),
    Q('Chim có đặc điểm?',
      ['Có mang', 'Có vảy như cá', 'Nuôi con bằng sữa', 'Có lông vũ, có cánh, đẻ trứng'], 3,
      'Chim: <b>lông vũ + cánh + đẻ trứng + thân nhiệt ổn định</b>.',
      [
        '<b>Lớp Chim (Aves)</b>:',
        '<ul><li>🪶 Có <b>lông vũ</b> — đặc trưng duy nhất ở chim.</li><li>Chi trước biến thành <b>cánh</b>, đa số bay được.</li><li>Đẻ trứng có vỏ cứng.</li><li>Là động vật <b>hằng nhiệt</b> (máu nóng) — thân nhiệt ổn định.</li><li>Mỏ sừng, không có răng.</li></ul>',
      ],
      [
        'Sai — vì <b>Có mang</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có lông vũ, có cánh, đẻ trứng</b>.',
        'Sai — vì <b>Có vảy như cá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có lông vũ, có cánh, đẻ trứng</b>.',
        'Sai — vì <b>Nuôi con bằng sữa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có lông vũ, có cánh, đẻ trứng</b>.',
        'Đúng — <b>Có lông vũ, có cánh, đẻ trứng</b> là đáp án chính xác. Chim: lông vũ + cánh + đẻ trứng + thân nhiệt ổn định.',
      ]
    ),
    Q('Thú (động vật có vú) có đặc điểm?',
      ['Đẻ trứng và không có lông', 'Có cánh và lông vũ', 'Sống hoàn toàn dưới nước có vảy', 'Có lông mao, đẻ con, nuôi con bằng sữa'], 3,
      'Thú: <b>lông mao + đẻ con + nuôi con bằng sữa</b>.',
      [
        '<b>Lớp Thú (Mammalia)</b> — tiến hoá cao nhất:',
        '<ul><li>🦌 Có <b>lông mao</b> (lông tơ) bao phủ.</li><li>🍼 <b>Nuôi con bằng sữa</b> — tuyến vú là đặc trưng.</li><li>👶 Phần lớn <b>đẻ con</b> (chỉ vài loài đẻ trứng như thú mỏ vịt).</li><li>Hằng nhiệt, não phát triển nhất.</li></ul>',
        'Bao gồm cả: chuột, mèo, voi, cá voi, dơi, khỉ và <b>con người</b>.',
      ],
      [
        'Sai — vì <b>Đẻ trứng và không có lông</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có lông mao, đẻ con, nuôi con bằng sữa</b>.',
        'Sai — vì <b>Có cánh và lông vũ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có lông mao, đẻ con, nuôi con bằng sữa</b>.',
        'Sai — vì <b>Sống hoàn toàn dưới nước có vảy</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có lông mao, đẻ con, nuôi con bằng sữa</b>.',
        'Đúng — <b>Có lông mao, đẻ con, nuôi con bằng sữa</b> là đáp án chính xác. Thú: lông mao + đẻ con + nuôi con bằng sữa.',
      ]
    ),
  ]),

  M(28, 'Đa dạng sinh học — bảo vệ', [
    Q('Đa dạng sinh học là?',
      ['Chỉ có nhiều loài chim', 'Chỉ là số lượng động vật', 'Sự đông dân', 'Sự phong phú về loài, gen, hệ sinh thái'], 3,
      'Đa dạng sinh học = phong phú về <b>loài + gen + hệ sinh thái</b>.',
      [
        '<b>Đa dạng sinh học</b> (biodiversity) gồm 3 mức độ:',
        '<ul><li><b>Đa dạng loài</b>: số lượng loài khác nhau.</li><li><b>Đa dạng gen</b>: biến dị trong cùng loài (giống lúa khác nhau).</li><li><b>Đa dạng hệ sinh thái</b>: nhiều kiểu môi trường (rừng, biển, hồ, sa mạc).</li></ul>',
      ],
      [
        'Sai — vì <b>Chỉ có nhiều loài chim</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự phong phú về loài, gen, hệ sinh thái</b>.',
        'Sai — vì <b>Chỉ là số lượng động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự phong phú về loài, gen, hệ sinh thái</b>.',
        'Sai — vì <b>Sự đông dân</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự phong phú về loài, gen, hệ sinh thái</b>.',
        'Đúng — <b>Sự phong phú về loài, gen, hệ sinh thái</b> là đáp án chính xác. Đa dạng sinh học = phong phú về loài + gen + hệ sinh thái.',
      ]
    ),
    Q('Việt Nam được coi là quốc gia?',
      ['Không có rừng', 'Không có động vật', 'Chỉ có sa mạc', 'Có đa dạng sinh học cao'], 3,
      'Việt Nam là một trong <b>25 nước có đa dạng sinh học cao nhất</b> thế giới.',
      [
        '<b>Việt Nam — "điểm nóng" đa dạng sinh học:</b>',
        '<ul><li>Có hơn <b>13.000 loài thực vật</b>, <b>10.000 loài động vật</b>.</li><li>Nhiều loài <i>đặc hữu</i> chỉ có ở Việt Nam: sao la, voọc Cát Bà, sếu đầu đỏ.</li><li>Có nhiều kiểu hệ sinh thái: rừng nhiệt đới, rừng ngập mặn, san hô, đầm phá.</li></ul>',
      ],
      [
        'Sai — vì <b>Không có rừng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có đa dạng sinh học cao</b>.',
        'Sai — vì <b>Không có động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có đa dạng sinh học cao</b>.',
        'Sai — vì <b>Chỉ có sa mạc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Có đa dạng sinh học cao</b>.',
        'Đúng — <b>Có đa dạng sinh học cao</b> là đáp án chính xác. Việt Nam là một trong 25 nước có đa dạng sinh học cao nhất thế giới.',
      ]
    ),
    Q('Nguyên nhân làm suy giảm đa dạng sinh học là?',
      ['Bảo vệ động vật hoang dã', 'Trồng rừng', 'Lập khu bảo tồn', 'Phá rừng, săn bắt trái phép, ô nhiễm'], 3,
      'Suy giảm do: <b>phá rừng, săn bắt trái phép, ô nhiễm, biến đổi khí hậu</b>.',
      [
        '<b>Nguyên nhân làm suy giảm đa dạng sinh học:</b>',
        '<ul><li>🪓 <b>Phá rừng</b>: mất nơi ở của loài.</li><li>🔫 <b>Săn bắt, buôn bán động vật hoang dã</b>.</li><li>🏭 <b>Ô nhiễm</b> môi trường (đất, nước, không khí).</li><li>🌡️ <b>Biến đổi khí hậu</b>.</li><li>🌍 Du nhập loài ngoại lai gây hại.</li></ul>',
      ],
      [
        'Sai — vì <b>Bảo vệ động vật hoang dã</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phá rừng, săn bắt trái phép, ô nhiễm</b>.',
        'Sai — vì <b>Trồng rừng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phá rừng, săn bắt trái phép, ô nhiễm</b>.',
        'Sai — vì <b>Lập khu bảo tồn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phá rừng, săn bắt trái phép, ô nhiễm</b>.',
        'Đúng — <b>Phá rừng, săn bắt trái phép, ô nhiễm</b> là đáp án chính xác. Suy giảm do: phá rừng, săn bắt trái phép, ô nhiễm, biến đổi khí hậu.',
      ]
    ),
    Q('Khu bảo tồn thiên nhiên có vai trò?',
      ['Bảo vệ các loài quý hiếm và hệ sinh thái', 'Để trồng độc canh', 'Để xây nhà máy', 'Để khai thác gỗ'], 0,
      'Khu bảo tồn: <b>bảo vệ loài quý hiếm và hệ sinh thái</b> nguyên vẹn.',
      [
        '<b>Khu bảo tồn thiên nhiên</b> ở Việt Nam:',
        '<ul><li>Vườn quốc gia (Cúc Phương, Cát Tiên, Phong Nha – Kẻ Bàng…).</li><li>Khu dự trữ sinh quyển (Cần Giờ, Cát Bà).</li><li>Khu bảo tồn loài, bảo tồn cảnh quan.</li></ul>',
        '<b>Mục đích:</b> giữ nguyên môi trường sống tự nhiên, cấm săn bắt và khai thác trái phép.',
      ],
      [
        'Đúng — <b>Bảo vệ các loài quý hiếm và hệ sinh thái</b> là đáp án chính xác. Khu bảo tồn: bảo vệ loài quý hiếm và hệ sinh thái nguyên vẹn.',
        'Sai — vì <b>Để trồng độc canh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bảo vệ các loài quý hiếm và hệ sinh thái</b>.',
        'Sai — vì <b>Để xây nhà máy</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bảo vệ các loài quý hiếm và hệ sinh thái</b>.',
        'Sai — vì <b>Để khai thác gỗ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bảo vệ các loài quý hiếm và hệ sinh thái</b>.',
      ]
    ),
    Q('Hành động nào KHÔNG bảo vệ đa dạng sinh học?',
      ['Săn bắt động vật hoang dã trái phép', 'Trồng cây gây rừng', 'Tham gia chiến dịch bảo vệ rừng', 'Không xả rác'], 0,
      '<b>Săn bắt trái phép</b> là hành động phá hoại — gây tuyệt chủng loài.',
      [
        '<b>Hành vi phá hoại đa dạng sinh học:</b>',
        '<ul><li>🚫 Săn bắt, buôn bán động vật hoang dã.</li><li>🚫 Mua sản phẩm từ ngà voi, sừng tê giác, lông thú.</li><li>🚫 Khai thác gỗ trái phép, đốt rừng.</li><li>🚫 Xả thải gây ô nhiễm.</li></ul>',
        'Pháp luật Việt Nam quy định mức phạt nặng cho các hành vi này.',
      ],
      [
        'Đúng — <b>Săn bắt động vật hoang dã trái phép</b> là đáp án chính xác. Săn bắt trái phép là hành động phá hoại — gây tuyệt chủng loài.',
        'Sai — vì <b>Trồng cây gây rừng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Săn bắt động vật hoang dã trái phép</b>.',
        'Sai — vì <b>Tham gia chiến dịch bảo vệ rừng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Săn bắt động vật hoang dã trái phép</b>.',
        'Sai — vì <b>Không xả rác</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Săn bắt động vật hoang dã trái phép</b>.',
      ]
    ),
    Q('Học sinh có thể bảo vệ đa dạng sinh học bằng cách?',
      ['Bẻ cây bẻ cành', 'Trồng cây, tiết kiệm giấy, không dùng đồ làm từ động vật quý hiếm', 'Bắt chim non về nuôi', 'Vứt rác xuống sông'], 1,
      'Hành động nhỏ của HS: <b>trồng cây + tiết kiệm giấy + không mua sản phẩm từ động vật hoang dã</b>.',
      [
        '<b>Học sinh có thể làm gì?</b>',
        '<ul><li>🌳 Trồng cây trong trường, ở nhà.</li><li>📄 Tiết kiệm giấy = bảo vệ rừng.</li><li>🚫 KHÔNG mua đồ trang trí từ ngà, mai, lông động vật quý.</li><li>📢 Tuyên truyền cho bạn bè, gia đình.</li><li>♻️ Phân loại rác, không xả rác bừa bãi.</li></ul>',
      ],
      [
        'Sai — vì <b>Bẻ cây bẻ cành</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trồng cây, tiết kiệm giấy, không dùng đồ làm…</b>.',
        'Đúng — <b>Trồng cây, tiết kiệm giấy, không dùng đồ làm từ động vậ…</b> là đáp án chính xác. Hành động nhỏ của HS: trồng cây + tiết kiệm giấy + không mua sản phẩm từ động vật hoang dã.',
        'Sai — vì <b>Bắt chim non về nuôi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trồng cây, tiết kiệm giấy, không dùng đồ làm…</b>.',
        'Sai — vì <b>Vứt rác xuống sông</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trồng cây, tiết kiệm giấy, không dùng đồ làm…</b>.',
      ]
    ),
  ]),

  M(29, 'Lực — tác dụng của lực', [
    Q('Lực là?',
      ['Một loại hoá chất', 'Một loại tế bào', 'Một dạng chất rắn', 'Tác dụng đẩy hoặc kéo của vật này lên vật khác'], 3,
      '<b>Lực</b> = tác dụng <i>đẩy hoặc kéo</i> của vật này lên vật khác.',
      [
        '<b>Định nghĩa lực:</b>',
        '<ul><li>Lực = <i>tác dụng đẩy hoặc kéo</i> của vật này lên vật khác.</li><li>Lực luôn xuất hiện <i>theo cặp</i> — vật A tác dụng vào B thì B cũng tác dụng vào A.</li></ul>',
        'Lực là <b>đại lượng vectơ</b> — có cả độ lớn và hướng.',
      ],
      [
        'Sai — vì <b>Một loại hoá chất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tác dụng đẩy hoặc kéo của vật này lên vật khá…</b>.',
        'Sai — vì <b>Một loại tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tác dụng đẩy hoặc kéo của vật này lên vật khá…</b>.',
        'Sai — vì <b>Một dạng chất rắn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tác dụng đẩy hoặc kéo của vật này lên vật khá…</b>.',
        'Đúng — <b>Tác dụng đẩy hoặc kéo của vật này lên vật khác</b> là đáp án chính xác. Lực = tác dụng đẩy hoặc kéo của vật này lên vật khác.',
      ]
    ),
    Q('Đơn vị đo lực là?',
      ['kilôgam', 'Newton (N)', 'Jun (J) — đơn vị năng lượng', 'Pascal (Pa) — đơn vị áp suất'], 1,
      'Đơn vị lực = <b>Newton (N)</b>, đặt theo tên nhà vật lý Isaac Newton.',
      [
        '<b>Đơn vị đo lực:</b> <code>Newton (N)</code>.',
        '<ul><li>1 N ≈ trọng lượng của một quả táo nhỏ (~100 g).</li><li>Đặt theo tên Isaac Newton — người phát hiện ra các định luật chuyển động và vạn vật hấp dẫn.</li></ul>',
        '⚠️ Đừng nhầm: <code>kg</code> là khối lượng, <code>J</code> là năng lượng, <code>Pa</code> là áp suất.',
      ],
      [
        'Sai — vì <b>kilôgam</b> là đơn vị đo <b>khối lượng</b>, không phù hợp với câu hỏi này. Đáp án đúng là <b>Newton</b>.',
        'Đúng — <b>Newton</b> là đáp án chính xác. Đơn vị lực = Newton (N), đặt theo tên nhà vật lý Isaac Newton.',
        'Sai — vì <b>Jun (J) — đơn vị năng lượng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Newton</b>.',
        'Sai — vì <b>Pascal (Pa) — đơn vị áp suất</b> <b>Pascal</b> là đơn vị đo <b>áp suất</b>. Đáp án đúng là <b>Newton</b>.',
      ]
    ),
    Q('Dụng cụ đo lực là?',
      ['Đồng hồ', 'Cân đồng hồ (đo khối lượng)', 'Cân điện tử', 'Lực kế'], 3,
      '<b>Lực kế</b> đo độ lớn của lực (thường dùng lực kế lò xo).',
      [
        '<b>Lực kế</b> là dụng cụ đo độ lớn của lực:',
        '<ul><li><b>Lực kế lò xo</b>: dùng độ giãn của lò xo để xác định lực.</li><li>Đơn vị hiển thị: Newton (N).</li><li>Khi treo vật vào lực kế → đọc trọng lượng (cũng là 1 lực — lực hút Trái Đất).</li></ul>',
        '⚠️ Cân đồng hồ đo <i>khối lượng</i>, không phải lực.',
      ],
      [
        'Sai — vì <b>Đồng hồ</b> là dụng cụ đo <b>thời gian</b>. Đáp án đúng là <b>Lực kế</b>.',
        'Sai — vì <b>Cân đồng hồ</b> là dụng cụ đo <b>thời gian</b>. Đáp án đúng là <b>Lực kế</b>.',
        'Sai — vì <b>Cân điện tử</b> là dụng cụ đo <b>khối lượng</b>. Đáp án đúng là <b>Lực kế</b>.',
        'Đúng — <b>Lực kế</b> là đáp án chính xác. Lực kế đo độ lớn của lực (thường dùng lực kế lò xo).',
      ]
    ),
    Q('Lực có thể làm vật?',
      ['Biến dạng hoặc thay đổi chuyển động', 'Biến mất hoàn toàn', 'Tự sinh ra chất mới', 'Hoá thành ánh sáng'], 0,
      'Lực có 2 tác dụng: <b>biến dạng</b> vật hoặc <b>thay đổi chuyển động</b> (vận tốc).',
      [
        '<b>Hai tác dụng cơ bản của lực:</b>',
        '<ul><li><b>① Làm biến dạng vật</b>: ép, kéo, nén, uốn cong. Ví dụ: bóp quả bóng, nén lò xo.</li><li><b>② Làm thay đổi chuyển động</b>: vật đứng yên chuyển động được, vật đang chuyển động đổi tốc độ/hướng. Ví dụ: đá bóng, phanh xe.</li></ul>',
        'Một lực có thể gây ra <i>cả hai</i> tác dụng cùng lúc.',
      ],
      [
        'Đúng — <b>Biến dạng hoặc thay đổi chuyển động</b> là đáp án chính xác. Lực có 2 tác dụng: biến dạng vật hoặc thay đổi chuyển động (vận tốc).',
        'Sai — vì <b>Biến mất hoàn toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Biến dạng hoặc thay đổi chuyển động</b>.',
        'Sai — vì <b>Tự sinh ra chất mới</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Biến dạng hoặc thay đổi chuyển động</b>.',
        'Sai — vì <b>Hoá thành ánh sáng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Biến dạng hoặc thay đổi chuyển động</b>.',
      ]
    ),
    Q('Ví dụ lực làm vật biến dạng là?',
      ['Đẩy xe lăn', 'Quăng quả bóng', 'Kéo xe trên đường thẳng', 'Nén lò xo, bóp quả bóng cao su'], 3,
      'Nén lò xo, bóp bóng = <b>vật bị biến dạng</b> — đổi hình dạng.',
      [
        '<b>Biến dạng</b> = thay đổi <i>hình dạng</i> của vật:',
        '<ul><li>Bóp quả bóng cao su → dẹp lại.</li><li>Nén lò xo → ngắn hơn.</li><li>Uốn cong thước nhựa.</li><li>Bẻ que tre.</li></ul>',
        'Có 2 loại: <i>biến dạng đàn hồi</i> (trở lại hình cũ) và <i>biến dạng dẻo</i> (giữ hình mới).',
      ],
      [
        'Sai — vì <b>Đẩy xe lăn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nén lò xo, bóp quả bóng cao su</b>.',
        'Sai — vì <b>Quăng quả bóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nén lò xo, bóp quả bóng cao su</b>.',
        'Sai — vì <b>Kéo xe trên đường thẳng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Nén lò xo, bóp quả bóng cao su</b>.',
        'Đúng — <b>Nén lò xo, bóp quả bóng cao su</b> là đáp án chính xác. Nén lò xo, bóp bóng = vật bị biến dạng — đổi hình dạng.',
      ]
    ),
    Q('Ví dụ lực làm thay đổi chuyển động là?',
      ['Bẻ cong thước nhựa', 'Bóp bóng', 'Nén lò xo', 'Đá vào quả bóng đang đứng yên'], 3,
      'Đá vào bóng → bóng bay đi = <b>thay đổi chuyển động</b> (từ yên sang chuyển động).',
      [
        '<b>Thay đổi chuyển động</b> bao gồm:',
        '<ul><li>Vật đứng yên → chuyển động (đá bóng đang nằm yên).</li><li>Vật đang chuyển động → đứng yên (phanh xe).</li><li>Đổi tốc độ (tăng tốc/giảm tốc).</li><li>Đổi hướng (rẽ trái/phải).</li></ul>',
      ],
      [
        'Sai — vì <b>Bẻ cong thước nhựa</b> là dụng cụ đo <b>chiều dài</b>. Đáp án đúng là <b>Đá vào quả bóng đang đứng yên</b>.',
        'Sai — vì <b>Bóp bóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đá vào quả bóng đang đứng yên</b>.',
        'Sai — vì <b>Nén lò xo</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đá vào quả bóng đang đứng yên</b>.',
        'Đúng — <b>Đá vào quả bóng đang đứng yên</b> là đáp án chính xác. Đá vào bóng → bóng bay đi = thay đổi chuyển động (từ yên sang chuyển động).',
      ]
    ),
  ]),

  M(30, 'Biểu diễn lực — lực tiếp xúc và không tiếp xúc', [
    Q('Lực được biểu diễn bằng?',
      ['Một chấm tròn', 'Một đường thẳng không hướng', 'Mũi tên (có gốc, phương, chiều, độ lớn)', 'Một con số đơn thuần'], 2,
      'Lực biểu diễn bằng <b>mũi tên</b> — có gốc, phương, chiều và độ lớn.',
      [
        '<b>Lực là đại lượng vectơ</b> — biểu diễn bằng mũi tên:',
        '<ul><li><b>Gốc</b> mũi tên: <i>điểm đặt</i> của lực.</li><li><b>Phương</b> (thẳng đứng/nằm ngang/xiên): đường tác dụng.</li><li><b>Chiều</b> mũi tên: chiều của lực.</li><li><b>Độ dài</b> mũi tên: tỉ lệ với độ lớn lực.</li></ul>',
      ],
      [
        'Sai — vì <b>Một chấm tròn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mũi tên</b>.',
        'Sai — vì <b>Một đường thẳng không hướng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mũi tên</b>.',
        'Đúng — <b>Mũi tên</b> là đáp án chính xác. Lực biểu diễn bằng mũi tên — có gốc, phương, chiều và độ lớn.',
        'Sai — vì <b>Một con số đơn thuần</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Mũi tên</b>.',
      ]
    ),
    Q('Mũi tên biểu diễn lực có gốc tại?',
      ['Điểm đặt của lực', 'Đầu kia của vật', 'Đâu cũng được', 'Trên trời'], 0,
      'Gốc mũi tên đặt tại <b>điểm đặt</b> — nơi lực tác dụng lên vật.',
      [
        '<b>Cách vẽ mũi tên biểu diễn lực:</b>',
        '<ul><li>① Xác định <i>điểm đặt</i> — đặt gốc mũi tên tại đó.</li><li>② Vẽ mũi tên theo <i>phương và chiều</i> đúng của lực.</li><li>③ Độ dài mũi tên tỉ lệ với độ lớn (theo tỉ lệ xích).</li></ul>',
        'Ví dụ: lực kéo xe nằm ngang → mũi tên nằm ngang, gốc tại xe.',
      ],
      [
        'Đúng — <b>Điểm đặt của lực</b> là đáp án chính xác. Gốc mũi tên đặt tại điểm đặt — nơi lực tác dụng lên vật.',
        'Sai — vì <b>Đầu kia của vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điểm đặt của lực</b>.',
        'Sai — vì <b>Đâu cũng được</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điểm đặt của lực</b>.',
        'Sai — vì <b>Trên trời</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điểm đặt của lực</b>.',
      ]
    ),
    Q('Lực tiếp xúc là lực?',
      ['Sinh ra khi hai vật tiếp xúc trực tiếp', 'Tác dụng ở xa, không cần chạm', 'Chỉ có trong sách', 'Không có thật'], 0,
      '<b>Lực tiếp xúc</b> = lực xuất hiện khi hai vật <i>tiếp xúc trực tiếp</i>.',
      [
        '<b>Lực tiếp xúc</b> (contact force) xuất hiện khi 2 vật chạm nhau:',
        '<ul><li>Tay đẩy bàn.</li><li>Lốp xe ma sát với đường.</li><li>Búa đập đinh.</li><li>Lực kéo dây thừng.</li></ul>',
        'Đặc điểm: <i>không có tiếp xúc → không có lực</i>.',
      ],
      [
        'Đúng — <b>Sinh ra khi hai vật tiếp xúc trực tiếp</b> là đáp án chính xác. Lực tiếp xúc = lực xuất hiện khi hai vật tiếp xúc trực tiếp.',
        'Sai — vì <b>Tác dụng ở xa, không cần chạm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh ra khi hai vật tiếp xúc trực tiếp</b>.',
        'Sai — vì <b>Chỉ có trong sách</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sinh ra khi hai vật tiếp xúc trực tiếp</b>.',
        'Sai — vì <b>Không có thật</b> là khẳng định sai — đây là hiện tượng có thật trong tự nhiên. Đáp án đúng là <b>Sinh ra khi hai vật tiếp xúc trực tiếp</b>.',
      ]
    ),
    Q('Lực không tiếp xúc là?',
      ['Lực ép quả bóng', 'Lực tay đẩy bàn', 'Lực kéo dây thừng', 'Lực hấp dẫn, lực từ giữa nam châm và sắt ở khoảng cách'], 3,
      '<b>Lực không tiếp xúc</b> tác dụng <i>từ xa</i>, không cần chạm vào nhau.',
      [
        '<b>Lực không tiếp xúc</b> (non-contact force) — tác dụng qua khoảng cách:',
        '<ul><li><b>Lực hấp dẫn</b>: Trái Đất hút mọi vật về phía mình.</li><li><b>Lực từ</b>: nam châm hút sắt dù chưa chạm.</li><li><b>Lực điện</b>: điện tích đẩy/hút nhau.</li></ul>',
        'Các lực này tác dụng được trong chân không (không cần môi trường truyền).',
      ],
      [
        'Sai — vì <b>Lực ép quả bóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lực hấp dẫn, lực từ giữa nam châm và sắt ở kh…</b>.',
        'Sai — vì <b>Lực tay đẩy bàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lực hấp dẫn, lực từ giữa nam châm và sắt ở kh…</b>.',
        'Sai — vì <b>Lực kéo dây thừng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Lực hấp dẫn, lực từ giữa nam châm và sắt ở kh…</b>.',
        'Đúng — <b>Lực hấp dẫn, lực từ giữa nam châm và sắt ở khoảng cách</b> là đáp án chính xác. Lực không tiếp xúc tác dụng từ xa, không cần chạm vào nhau.',
      ]
    ),
    Q('Hai vật tương tác bằng lực thì?',
      ['Chỉ một vật tác dụng', 'Không có gì xảy ra', 'Đồng thời tác dụng lực lên nhau', 'Tự biến mất'], 2,
      'Lực luôn có <b>tính tương tác</b> — hai vật <i>đồng thời tác dụng lực lên nhau</i>.',
      [
        '<b>Lực luôn xuất hiện theo cặp</b> (định luật III Newton):',
        '<ul><li>Vật A tác dụng vào B → <i>cùng lúc</i> B cũng tác dụng vào A.</li><li>Hai lực này: <b>cùng độ lớn, ngược chiều</b>.</li></ul>',
        'Ví dụ: em đẩy tường → tường cũng đẩy lại em. Nếu tay đập mạnh vào tường, tường "đập" lại bằng lực bằng nhau → tay đau.',
      ],
      [
        'Sai — vì <b>Chỉ một vật tác dụng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đồng thời tác dụng lực lên nhau</b>.',
        'Sai — vì <b>Không có gì xảy ra</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đồng thời tác dụng lực lên nhau</b>.',
        'Đúng — <b>Đồng thời tác dụng lực lên nhau</b> là đáp án chính xác. Lực luôn có tính tương tác — hai vật đồng thời tác dụng lực lên nhau.',
        'Sai — vì <b>Tự biến mất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đồng thời tác dụng lực lên nhau</b>.',
      ]
    ),
    Q('Ví dụ lực không tiếp xúc trong đời sống?',
      ['Tay kéo dây cung', 'Trái Đất hút quả táo rơi', 'Đá vào quả bóng', 'Đẩy ghế'], 1,
      'Trái Đất hút quả táo = <b>lực hấp dẫn</b> — tác dụng từ xa, không cần chạm.',
      [
        '<b>Lực hấp dẫn của Trái Đất</b>:',
        '<ul><li>Trái Đất hút mọi vật <i>về phía tâm Trái Đất</i>.</li><li>Tác dụng từ xa — quả táo trên cây vẫn bị hút dù chưa chạm đất.</li><li>Câu chuyện Newton ngồi dưới gốc táo → khám phá định luật vạn vật hấp dẫn.</li></ul>',
        'Lực này tác dụng lên mọi vật, kể cả các hành tinh ở rất xa.',
      ],
      [
        'Sai — vì <b>Tay kéo dây cung</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất hút quả táo rơi</b>.',
        'Đúng — <b>Trái Đất hút quả táo rơi</b> là đáp án chính xác. Trái Đất hút quả táo = lực hấp dẫn — tác dụng từ xa, không cần chạm.',
        'Sai — vì <b>Đá vào quả bóng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất hút quả táo rơi</b>.',
        'Sai — vì <b>Đẩy ghế</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất hút quả táo rơi</b>.',
      ]
    ),
  ]),

  M(31, 'Lực ma sát, lực hấp dẫn và trọng lực', [
    Q('Lực ma sát xuất hiện khi?',
      ['Hai vật ở rất xa', 'Không bao giờ có', 'Vật đứng yên trong chân không', 'Hai mặt tiếp xúc trượt hoặc có xu hướng trượt lên nhau'], 3,
      'Ma sát xuất hiện khi hai mặt tiếp xúc <b>trượt hoặc có xu hướng trượt</b> lên nhau.',
      [
        '<b>Lực ma sát</b> luôn:',
        '<ul><li>Xuất hiện ở <b>bề mặt tiếp xúc</b> của 2 vật.</li><li>Có chiều <b>ngược</b> với chiều chuyển động (hoặc xu hướng chuyển động).</li><li>Cản trở chuyển động tương đối.</li></ul>',
        'Phân loại: ma sát trượt, ma sát lăn, ma sát nghỉ.',
      ],
      [
        'Sai — vì <b>Hai vật ở rất xa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hai mặt tiếp xúc trượt hoặc có xu hướng trượt…</b>.',
        'Sai — vì <b>Không bao giờ có</b> là khẳng định sai — đây là hiện tượng có thật trong tự nhiên. Đáp án đúng là <b>Hai mặt tiếp xúc trượt hoặc có xu hướng trượt…</b>.',
        'Sai — vì <b>Vật đứng yên trong chân không</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hai mặt tiếp xúc trượt hoặc có xu hướng trượt…</b>.',
        'Đúng — <b>Hai mặt tiếp xúc trượt hoặc có xu hướng trượt lên nhau</b> là đáp án chính xác. Ma sát xuất hiện khi hai mặt tiếp xúc trượt hoặc có xu hướng trượt lên nhau.',
      ]
    ),
    Q('Ma sát có ích trong trường hợp?',
      ['Tạo tiếng ồn', 'Giữ chân không trượt khi đi bộ', 'Mài mòn lốp xe', 'Làm máy nóng quá nhanh'], 1,
      'Ma sát có ích: <b>giữ chân không trượt khi đi bộ</b>, giúp phanh xe, viết bút.',
      [
        '<b>Ma sát có ích</b> trong nhiều trường hợp:',
        '<ul><li>👟 Giữ chân không trượt khi đi bộ, chạy.</li><li>🚗 Lốp xe bám đường — đặc biệt khi phanh.</li><li>✏️ Bút viết được trên giấy nhờ ma sát.</li><li>🪛 Đóng đinh, vặn ốc, cầm nắm đồ vật.</li></ul>',
        'Không có ma sát → mọi thứ trơn trượt như đi trên băng.',
      ],
      [
        'Sai — vì <b>Tạo tiếng ồn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giữ chân không trượt khi đi bộ</b>.',
        'Đúng — <b>Giữ chân không trượt khi đi bộ</b> là đáp án chính xác. Ma sát có ích: giữ chân không trượt khi đi bộ, giúp phanh xe, viết bút.',
        'Sai — vì <b>Mài mòn lốp xe</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giữ chân không trượt khi đi bộ</b>.',
        'Sai — vì <b>Làm máy nóng quá nhanh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Giữ chân không trượt khi đi bộ</b>.',
      ]
    ),
    Q('Ma sát có hại trong trường hợp?',
      ['Giúp viết được bằng bút chì', 'Làm mòn lốp xe, làm nóng động cơ', 'Giúp đi lại', 'Giúp xe phanh được'], 1,
      'Ma sát có hại: <b>mài mòn lốp, làm nóng động cơ, tốn năng lượng</b>.',
      [
        '<b>Ma sát có hại</b>:',
        '<ul><li>👟 Đế giày mòn, lốp xe mòn.</li><li>🔥 Làm nóng động cơ máy, tốn năng lượng.</li><li>🔧 Chi tiết máy bị mài mòn → hỏng nhanh.</li><li>🐌 Cản trở chuyển động → tốn nhiên liệu.</li></ul>',
        '<b>Cách giảm:</b> bôi dầu mỡ, dùng vòng bi, làm bề mặt nhẵn.',
      ],
      [
        'Sai — vì <b>Giúp viết được bằng bút chì</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Làm mòn lốp xe, làm nóng động cơ</b>.',
        'Đúng — <b>Làm mòn lốp xe, làm nóng động cơ</b> là đáp án chính xác. Ma sát có hại: mài mòn lốp, làm nóng động cơ, tốn năng lượng.',
        'Sai — vì <b>Giúp đi lại</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Làm mòn lốp xe, làm nóng động cơ</b>.',
        'Sai — vì <b>Giúp xe phanh được</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Làm mòn lốp xe, làm nóng động cơ</b>.',
      ]
    ),
    Q('Cách giảm ma sát có hại trong máy móc?',
      ['Bôi dầu mỡ, dùng vòng bi', 'Đổ thêm cát', 'Để khô hoàn toàn', 'Cho thêm đá vào'], 0,
      'Giảm ma sát máy móc: <b>bôi dầu mỡ + dùng vòng bi (bạc đạn)</b>.',
      [
        '<b>Các cách giảm ma sát:</b>',
        '<ul><li>🛢️ <b>Bôi dầu mỡ</b>: tạo lớp trượt mượt giữa hai bề mặt.</li><li>⚙️ <b>Vòng bi (bạc đạn)</b>: chuyển ma sát trượt thành ma sát lăn (nhỏ hơn nhiều).</li><li>✨ Đánh bóng bề mặt cho nhẵn.</li><li>🚂 Dùng đệm khí, đệm từ (tàu cao tốc).</li></ul>',
      ],
      [
        'Đúng — <b>Bôi dầu mỡ, dùng vòng bi</b> là đáp án chính xác. Giảm ma sát máy móc: bôi dầu mỡ + dùng vòng bi (bạc đạn).',
        'Sai — vì <b>Đổ thêm cát</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bôi dầu mỡ, dùng vòng bi</b>.',
        'Sai — vì <b>Để khô hoàn toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bôi dầu mỡ, dùng vòng bi</b>.',
        'Sai — vì <b>Cho thêm đá vào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Bôi dầu mỡ, dùng vòng bi</b>.',
      ]
    ),
    Q('Lực hấp dẫn do vật nào của Trái Đất gây ra cho vật ở bề mặt?',
      ['Mặt Trăng', 'Mặt Trời gần', 'Sao chổi', 'Trái Đất hút mọi vật về phía nó'], 3,
      '<b>Trái Đất</b> hút mọi vật trên bề mặt về phía tâm — đó là lực hấp dẫn.',
      [
        '<b>Lực hấp dẫn của Trái Đất</b>:',
        '<ul><li>Mọi vật quanh Trái Đất đều bị <i>hút về tâm</i> của nó.</li><li>Lực này gọi là <b>trọng lực</b>.</li><li>Mặt Trăng quay quanh Trái Đất cũng vì lực hấp dẫn này.</li></ul>',
        'Newton phát hiện ra: mọi vật có khối lượng đều hút nhau — gọi là <i>vạn vật hấp dẫn</i>.',
      ],
      [
        'Sai — vì <b>Mặt Trăng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất hút mọi vật về phía nó</b>.',
        'Sai — vì <b>Mặt Trời gần</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất hút mọi vật về phía nó</b>.',
        'Sai — vì <b>Sao chổi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất hút mọi vật về phía nó</b>.',
        'Đúng — <b>Trái Đất hút mọi vật về phía nó</b> là đáp án chính xác. Trái Đất hút mọi vật trên bề mặt về phía tâm — đó là lực hấp dẫn.',
      ]
    ),
    Q('Trọng lực tác dụng lên vật có phương và chiều?',
      ['Phương nằm ngang', 'Chiều từ dưới lên', 'Phương thẳng đứng, chiều từ trên xuống', 'Bất kỳ chiều nào'], 2,
      'Trọng lực: <b>phương thẳng đứng, chiều từ trên xuống</b> (về phía tâm Trái Đất).',
      [
        '<b>Đặc điểm của trọng lực:</b>',
        '<ul><li><b>Phương</b>: thẳng đứng.</li><li><b>Chiều</b>: từ trên xuống dưới (hướng về tâm Trái Đất).</li><li><b>Điểm đặt</b>: trọng tâm của vật.</li><li><b>Độ lớn</b>: gọi là <i>trọng lượng (P)</i>.</li></ul>',
        'Dây dọi (dây có quả nặng) luôn chỉ phương thẳng đứng.',
      ],
      [
        'Sai — vì <b>Phương nằm ngang</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phương thẳng đứng, chiều từ trên xuống</b>.',
        'Sai — vì <b>Chiều từ dưới lên</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phương thẳng đứng, chiều từ trên xuống</b>.',
        'Đúng — <b>Phương thẳng đứng, chiều từ trên xuống</b> là đáp án chính xác. Trọng lực: phương thẳng đứng, chiều từ trên xuống (về phía tâm Trái Đất).',
        'Sai — vì <b>Bất kỳ chiều nào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Phương thẳng đứng, chiều từ trên xuống</b>.',
      ]
    ),
    Q('Một vật có khối lượng 1 kg thì trọng lượng ở Trái Đất xấp xỉ?',
      ['0 N', '1 N', '10 N', '100 N'], 2,
      'Công thức: <code>P ≈ 10 × m</code> → vật 1 kg có trọng lượng ≈ <b>10 N</b>.',
      [
        '<b>Quan hệ giữa khối lượng và trọng lượng:</b>',
        '<ul><li><code>P = m × g</code> (với <code>g ≈ 9,8 m/s²</code> trên Trái Đất, làm tròn thành 10).</li><li>Vật 1 kg → P ≈ 10 N.</li><li>Vật 5 kg → P ≈ 50 N.</li><li>Vật 100 g = 0,1 kg → P ≈ 1 N.</li></ul>',
        '⚠️ Phân biệt: <b>khối lượng (m)</b> = lượng chất, đo bằng kg; <b>trọng lượng (P)</b> = lực hút, đo bằng N.',
      ],
      [
        'Sai — vì <b>0 N</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>10 N</b>.',
        'Sai — vì <b>1 N</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>10 N</b>.',
        'Đúng — <b>10 N</b> là đáp án chính xác. Công thức: P ≈ 10 × m → vật 1 kg có trọng lượng ≈ 10 N.',
        'Sai — vì <b>100 N</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>10 N</b>.',
      ]
    ),
  ]),

  M(32, 'Năng lượng — các dạng năng lượng', [
    Q('Năng lượng là?',
      ['Đại lượng đặc trưng cho khả năng thực hiện công, gây biến đổi', 'Một loại vi khuẩn', 'Một chất lỏng', 'Một loại tế bào'], 0,
      'Năng lượng = đại lượng đặc trưng cho <b>khả năng thực hiện công hoặc gây biến đổi</b>.',
      [
        '<b>Năng lượng</b> là khái niệm bao trùm, gắn với mọi biến đổi:',
        '<ul><li>Có năng lượng → có thể <i>làm việc</i> (di chuyển vật, đun nóng, phát sáng…).</li><li>Mọi quá trình sống đều cần năng lượng.</li></ul>',
        'Đơn vị: <code>Jun (J)</code>. 1 J là năng lượng cần để nâng quả táo nhỏ lên 1 mét.',
      ],
      [
        'Đúng — <b>Đại lượng đặc trưng cho khả năng thực hiện công, gây bi…</b> là đáp án chính xác. Năng lượng = đại lượng đặc trưng cho khả năng thực hiện công hoặc gây biến đổi.',
        'Sai — vì <b>Một loại vi khuẩn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đại lượng đặc trưng cho khả năng thực hiện cô…</b>.',
        'Sai — vì <b>Một chất lỏng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đại lượng đặc trưng cho khả năng thực hiện cô…</b>.',
        'Sai — vì <b>Một loại tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đại lượng đặc trưng cho khả năng thực hiện cô…</b>.',
      ]
    ),
    Q('Đơn vị đo năng lượng trong SI là?',
      ['Newton', 'Watt (W) — đơn vị công suất', 'Jun (J)', 'calo (cal) — đơn vị nhiệt lượng cũ'], 2,
      '<b>Jun (J)</b> — đặt theo tên nhà vật lý James Prescott Joule.',
      [
        '<b>Đơn vị năng lượng:</b>',
        '<ul><li>SI: <code>Jun (J)</code>.</li><li>Đơn vị khác hay gặp: <code>kJ</code> (1 kJ = 1000 J), <code>cal</code> (1 cal ≈ 4,18 J), <code>kWh</code> (đơn vị điện năng).</li></ul>',
        '⚠️ Đừng nhầm với <b>Watt (W)</b> — đơn vị công suất (J/s), không phải năng lượng.',
      ],
      [
        'Sai — vì <b>Newton</b> <b>Newton</b> là đơn vị đo <b>lực</b>. Đáp án đúng là <b>Jun</b>.',
        'Sai — vì <b>Watt (W) — đơn vị công suất</b> <b>Watt</b> là đơn vị đo <b>công suất</b>, không phải năng lượng. Đáp án đúng là <b>Jun</b>.',
        'Đúng — <b>Jun</b> là đáp án chính xác. Jun (J) — đặt theo tên nhà vật lý James Prescott Joule.',
        'Sai — vì <b>calo (cal) — đơn vị nhiệt lượng cũ</b> <b>calo</b> là đơn vị nhiệt lượng cũ, không phải đơn vị SI. Đáp án đúng là <b>Jun</b>.',
      ]
    ),
    Q('Dạng năng lượng nào do chuyển động?',
      ['Động năng', 'Hoá năng', 'Thế năng hấp dẫn', 'Quang năng'], 0,
      '<b>Động năng</b> = năng lượng do chuyển động.',
      [
        '<b>Động năng (kinetic energy)</b>:',
        '<ul><li>Mọi vật <i>đang chuyển động</i> đều có động năng.</li><li>Vật càng nhanh, càng nặng → động năng càng lớn.</li><li>Ví dụ: xe đang chạy, viên đạn bay, dòng nước chảy.</li></ul>',
        'Khi vật dừng lại, động năng chuyển hoá thành dạng khác (nhiệt, âm thanh).',
      ],
      [
        'Đúng — <b>Động năng</b> là đáp án chính xác. Động năng = năng lượng do chuyển động.',
        'Sai — vì <b>Hoá năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Động năng</b>.',
        'Sai — vì <b>Thế năng hấp dẫn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Động năng</b>.',
        'Sai — vì <b>Quang năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Động năng</b>.',
      ]
    ),
    Q('Quả táo trên cây ở độ cao h so với mặt đất có dạng năng lượng?',
      ['Nhiệt năng', 'Động năng', 'Thế năng hấp dẫn', 'Điện năng'], 2,
      'Quả táo trên cao có <b>thế năng hấp dẫn</b> — phụ thuộc vị trí.',
      [
        '<b>Thế năng hấp dẫn</b>:',
        '<ul><li>Năng lượng do vị trí của vật so với mặt đất.</li><li>Càng cao → thế năng càng lớn.</li><li>Khi rơi → thế năng chuyển thành <i>động năng</i>.</li></ul>',
        'Ví dụ: nước trong đập thuỷ điện có thế năng → chảy xuống quay tuabin → tạo điện.',
      ],
      [
        'Sai — vì <b>Nhiệt năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thế năng hấp dẫn</b>.',
        'Sai — vì <b>Động năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thế năng hấp dẫn</b>.',
        'Đúng — <b>Thế năng hấp dẫn</b> là đáp án chính xác. Quả táo trên cao có thế năng hấp dẫn — phụ thuộc vị trí.',
        'Sai — vì <b>Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thế năng hấp dẫn</b>.',
      ]
    ),
    Q('Năng lượng do ánh sáng mang tới là?',
      ['Hoá năng', 'Cơ năng', 'Quang năng', 'Điện năng'], 2,
      '<b>Quang năng</b> = năng lượng của ánh sáng.',
      [
        '<b>Quang năng (light energy)</b>:',
        '<ul><li>Năng lượng do ánh sáng truyền tải.</li><li>Nguồn: Mặt Trời, đèn, lửa.</li><li>Cây xanh hấp thụ quang năng → biến thành hoá năng qua quang hợp.</li><li>Pin mặt trời biến quang năng → điện năng.</li></ul>',
      ],
      [
        'Sai — vì <b>Hoá năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quang năng</b>.',
        'Sai — vì <b>Cơ năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quang năng</b>.',
        'Đúng — <b>Quang năng</b> là đáp án chính xác. Quang năng = năng lượng của ánh sáng.',
        'Sai — vì <b>Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quang năng</b>.',
      ]
    ),
    Q('Năng lượng dự trữ trong nhiên liệu, thức ăn là?',
      ['Quang năng', 'Cơ năng', 'Hoá năng', 'Điện năng'], 2,
      '<b>Hoá năng</b> = năng lượng dự trữ trong liên kết hoá học (xăng, thức ăn, pin).',
      [
        '<b>Hoá năng (chemical energy)</b>:',
        '<ul><li>Năng lượng tiềm ẩn trong các <i>liên kết hoá học</i>.</li><li>Giải phóng khi xảy ra <b>phản ứng hoá học</b> (cháy, tiêu hoá).</li><li>Nguồn: nhiên liệu, thức ăn, pin, ắc-quy.</li></ul>',
        'Đốt xăng → hoá năng chuyển thành nhiệt năng + động năng (xe chạy).',
      ],
      [
        'Sai — vì <b>Quang năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá năng</b>.',
        'Sai — vì <b>Cơ năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá năng</b>.',
        'Đúng — <b>Hoá năng</b> là đáp án chính xác. Hoá năng = năng lượng dự trữ trong liên kết hoá học (xăng, thức ăn, pin).',
        'Sai — vì <b>Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá năng</b>.',
      ]
    ),
    Q('Năng lượng nhiệt thường liên quan đến?',
      ['Sự chuyển động của các hạt vi mô', 'Chiều cao', 'Màu sắc', 'Vận tốc xe'], 0,
      '<b>Nhiệt năng</b> = tổng động năng của các hạt vi mô trong vật.',
      [
        '<b>Nhiệt năng (thermal energy)</b>:',
        '<ul><li>Tổng <b>động năng</b> chuyển động hỗn loạn của các hạt cấu tạo nên vật.</li><li>Vật <i>càng nóng</i> → hạt chuyển động càng mạnh → nhiệt năng càng lớn.</li><li>Truyền từ vật <i>nóng</i> sang vật <i>lạnh</i> cho đến khi cân bằng.</li></ul>',
      ],
      [
        'Đúng — <b>Sự chuyển động của các hạt vi mô</b> là đáp án chính xác. Nhiệt năng = tổng động năng của các hạt vi mô trong vật.',
        'Sai — vì <b>Chiều cao</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự chuyển động của các hạt vi mô</b>.',
        'Sai — vì <b>Màu sắc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự chuyển động của các hạt vi mô</b>.',
        'Sai — vì <b>Vận tốc xe</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sự chuyển động của các hạt vi mô</b>.',
      ]
    ),
  ]),

  M(33, 'Bảo toàn và chuyển hoá năng lượng', [
    Q('Định luật bảo toàn năng lượng nói rằng?',
      ['Năng lượng không tự sinh ra hoặc mất đi, chỉ chuyển từ dạng này sang dạng khác', 'Năng lượng biến mất hoàn toàn', 'Năng lượng chỉ có 1 dạng', 'Năng lượng tự sinh ra từ không khí'], 0,
      '<b>Định luật bảo toàn năng lượng</b>: năng lượng <i>chỉ chuyển hoá</i> giữa các dạng, không tự sinh/mất.',
      [
        '<b>Định luật bảo toàn năng lượng</b> — một trong các định luật cơ bản nhất của vật lý:',
        '<ul><li>Năng lượng <b>không tự sinh ra</b>, cũng không tự mất đi.</li><li>Chỉ <b>chuyển hoá</b> từ dạng này sang dạng khác, hoặc truyền từ vật này sang vật khác.</li><li>Tổng năng lượng trong một hệ <b>kín</b> luôn không đổi.</li></ul>',
        '⚠️ Đó là lý do "<i>không có động cơ vĩnh cửu</i>" — không thể tạo ra năng lượng từ hư không.',
      ],
      [
        'Đúng — <b>Năng lượng không tự sinh ra hoặc mất đi, chỉ chuyển từ…</b> là đáp án chính xác. Định luật bảo toàn năng lượng: năng lượng chỉ chuyển hoá giữa các dạng, không tự sinh/mất.',
        'Sai — vì <b>Năng lượng biến mất hoàn toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng không tự sinh ra hoặc mất đi, chỉ…</b>.',
        'Sai — vì <b>Năng lượng chỉ có 1 dạng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng không tự sinh ra hoặc mất đi, chỉ…</b>.',
        'Sai — vì <b>Năng lượng tự sinh ra từ không khí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Năng lượng không tự sinh ra hoặc mất đi, chỉ…</b>.',
      ]
    ),
    Q('Khi đèn điện sáng, năng lượng chuyển hoá chủ yếu là?',
      ['Hoá năng → Cơ năng', 'Điện năng → Quang năng (và nhiệt)', 'Cơ năng → Điện năng', 'Quang năng → Điện năng'], 1,
      'Đèn điện: <b>Điện năng → Quang năng + Nhiệt năng</b>.',
      [
        '<b>Chuyển hoá năng lượng ở đèn điện:</b>',
        '<ul><li><b>Đèn sợi đốt</b>: ~10% quang năng + ~90% nhiệt năng → rất phí.</li><li><b>Đèn LED</b>: ~80% quang năng + 20% nhiệt → tiết kiệm.</li><li>Đó là lý do nên dùng LED — tiết kiệm điện và mát hơn.</li></ul>',
      ],
      [
        'Sai — vì <b>Hoá năng → Cơ năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Quang năng</b>.',
        'Đúng — <b>Điện năng → Quang năng</b> là đáp án chính xác. Đèn điện: Điện năng → Quang năng + Nhiệt năng.',
        'Sai — vì <b>Cơ năng → Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Quang năng</b>.',
        'Sai — vì <b>Quang năng → Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Quang năng</b>.',
      ]
    ),
    Q('Quạt điện hoạt động chuyển hoá năng lượng từ?',
      ['Nhiệt → Hoá', 'Quang năng → Cơ năng', 'Cơ năng → Điện năng', 'Điện năng → Cơ năng (và nhiệt, âm thanh)'], 3,
      'Quạt điện: <b>Điện năng → Cơ năng</b> (cánh quay) + một phần nhiệt và âm thanh.',
      [
        '<b>Chuyển hoá ở quạt điện:</b>',
        '<ul><li>Mục đích chính: Điện năng → <b>Cơ năng</b> (cánh quay tạo gió).</li><li>Một phần điện năng bị mất thành <i>nhiệt</i> (động cơ nóng) và <i>âm thanh</i>.</li></ul>',
        'Tổng các dạng năng lượng sinh ra = năng lượng điện tiêu thụ (bảo toàn).',
      ],
      [
        'Sai — vì <b>Nhiệt → Hoá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Cơ năng</b>.',
        'Sai — vì <b>Quang năng → Cơ năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Cơ năng</b>.',
        'Sai — vì <b>Cơ năng → Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Cơ năng</b>.',
        'Đúng — <b>Điện năng → Cơ năng</b> là đáp án chính xác. Quạt điện: Điện năng → Cơ năng (cánh quay) + một phần nhiệt và âm thanh.',
      ]
    ),
    Q('Pin mặt trời chuyển hoá năng lượng từ?',
      ['Cơ năng → Điện năng', 'Nhiệt → Cơ năng', 'Điện năng → Quang năng', 'Quang năng → Điện năng'], 3,
      'Pin mặt trời: <b>Quang năng → Điện năng</b>.',
      [
        '<b>Pin mặt trời (solar cell)</b>:',
        '<ul><li>Hấp thụ ánh sáng Mặt Trời → tạo dòng điện.</li><li>Chuyển hoá: <code>Quang năng → Điện năng</code>.</li><li>Là nguồn năng lượng sạch, tái tạo.</li></ul>',
        'Việt Nam đang phát triển nhanh điện mặt trời ở miền Nam và Tây Nguyên.',
      ],
      [
        'Sai — vì <b>Cơ năng → Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quang năng → Điện năng</b>.',
        'Sai — vì <b>Nhiệt → Cơ năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quang năng → Điện năng</b>.',
        'Sai — vì <b>Điện năng → Quang năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Quang năng → Điện năng</b>.',
        'Đúng — <b>Quang năng → Điện năng</b> là đáp án chính xác. Pin mặt trời: Quang năng → Điện năng.',
      ]
    ),
    Q('Khi đốt củi, năng lượng chuyển hoá?',
      ['Hoá năng → Nhiệt năng và Quang năng', 'Cơ → Điện', 'Quang → Hoá', 'Điện → Quang'], 0,
      'Đốt củi: <b>Hoá năng → Nhiệt năng + Quang năng</b>.',
      [
        '<b>Sự cháy</b> là quá trình giải phóng hoá năng:',
        '<ul><li>Củi (hoá năng) + O₂ → CO₂ + H₂O + <b>nhiệt + ánh sáng</b>.</li><li>Đó là lý do bếp lửa <i>vừa nóng vừa sáng</i>.</li></ul>',
        'Tương tự với đốt xăng, than, gas — đều là Hoá năng → Nhiệt + Quang.',
      ],
      [
        'Đúng — <b>Hoá năng → Nhiệt năng và Quang năng</b> là đáp án chính xác. Đốt củi: Hoá năng → Nhiệt năng + Quang năng.',
        'Sai — vì <b>Cơ → Điện</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá năng → Nhiệt năng và Quang năng</b>.',
        'Sai — vì <b>Quang → Hoá</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá năng → Nhiệt năng và Quang năng</b>.',
        'Sai — vì <b>Điện → Quang</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hoá năng → Nhiệt năng và Quang năng</b>.',
      ]
    ),
    Q('Để tiết kiệm năng lượng ở nhà, em nên?',
      ['Bật tất cả thiết bị suốt ngày', 'Để cửa tủ lạnh mở lâu', 'Bật điều hoà 16 °C cả ngày', 'Tắt thiết bị khi không dùng, dùng đèn LED'], 3,
      'Tiết kiệm: <b>tắt thiết bị khi không dùng + dùng đèn LED</b>.',
      [
        '<b>Cách tiết kiệm năng lượng tại nhà:</b>',
        '<ul><li>💡 Dùng đèn LED thay đèn sợi đốt.</li><li>🔌 Tắt thiết bị khi không dùng (TV, máy tính, đèn).</li><li>❄️ Để điều hoà ở <code>26–28 °C</code>, không quá lạnh.</li><li>🚪 Đóng cửa tủ lạnh nhanh, không mở lâu.</li><li>👕 Phơi quần áo nắng thay vì dùng máy sấy.</li></ul>',
        'Tiết kiệm năng lượng = tiết kiệm tiền + bảo vệ môi trường.',
      ],
      [
        'Sai — vì <b>Bật tất cả thiết bị suốt ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tắt thiết bị khi không dùng, dùng đèn LED</b>.',
        'Sai — vì <b>Để cửa tủ lạnh mở lâu</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tắt thiết bị khi không dùng, dùng đèn LED</b>.',
        'Sai — vì <b>Bật điều hoà 16 °C cả ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tắt thiết bị khi không dùng, dùng đèn LED</b>.',
        'Đúng — <b>Tắt thiết bị khi không dùng, dùng đèn LED</b> là đáp án chính xác. Tiết kiệm: tắt thiết bị khi không dùng + dùng đèn LED.',
      ]
    ),
  ]),

  M(34, 'Trái Đất, Mặt Trăng, Hệ Mặt Trời', [
    Q('Hệ Mặt Trời có mấy hành tinh chính?',
      ['7', '12', '8', '6'], 2,
      'Hệ Mặt Trời có <b>8 hành tinh</b> (Pluto bị xếp lại thành "hành tinh lùn" năm 2006).',
      [
        '<b>8 hành tinh trong Hệ Mặt Trời</b> (từ gần Mặt Trời ra ngoài):',
        '<ul><li><b>Thuỷ tinh (Mercury)</b> – <b>Kim tinh (Venus)</b> – <b>Trái Đất</b> – <b>Hoả tinh (Mars)</b>: nhóm trong, đá đặc.</li><li><b>Mộc tinh (Jupiter)</b> – <b>Thổ tinh (Saturn)</b> – <b>Thiên Vương tinh</b> – <b>Hải Vương tinh</b>: nhóm ngoài, khí lớn.</li></ul>',
        'Pluto từng là hành tinh thứ 9 nhưng bị "giáng cấp" năm 2006 thành <i>hành tinh lùn</i>.',
      ],
      [
        'Sai — vì <b>7</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>8</b>.',
        'Sai — vì <b>12</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>8</b>.',
        'Đúng — <b>8</b> là đáp án chính xác. Hệ Mặt Trời có 8 hành tinh (Pluto bị xếp lại thành "hành tinh lùn" năm 2006).',
        'Sai — vì <b>6</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>8</b>.',
      ]
    ),
    Q('Hành tinh nào gần Mặt Trời nhất?',
      ['Sao Thuỷ (Mercury)', 'Trái Đất', 'Sao Mộc', 'Sao Hải Vương'], 0,
      '<b>Sao Thuỷ (Mercury)</b> là hành tinh trong cùng — gần Mặt Trời nhất.',
      [
        '<b>Sao Thuỷ (Mercury)</b>:',
        '<ul><li>Hành tinh gần Mặt Trời nhất (~58 triệu km).</li><li>Nhỏ nhất trong 8 hành tinh.</li><li>Nhiệt độ ngày ~430 °C, đêm ~ -180 °C — chênh lệch rất lớn.</li><li>Không có khí quyển đáng kể.</li></ul>',
      ],
      [
        'Đúng — <b>Sao Thuỷ</b> là đáp án chính xác. Sao Thuỷ (Mercury) là hành tinh trong cùng — gần Mặt Trời nhất.',
        'Sai — vì <b>Trái Đất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sao Thuỷ</b>.',
        'Sai — vì <b>Sao Mộc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sao Thuỷ</b>.',
        'Sai — vì <b>Sao Hải Vương</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sao Thuỷ</b>.',
      ]
    ),
    Q('Hành tinh thứ ba tính từ Mặt Trời là?',
      ['Sao Kim', 'Sao Hoả', 'Trái Đất', 'Sao Mộc'], 2,
      '<b>Trái Đất</b> là hành tinh thứ ba (sau Sao Thuỷ và Sao Kim).',
      [
        '<b>Thứ tự 4 hành tinh trong:</b>',
        '<ul><li>① Sao Thuỷ</li><li>② Sao Kim</li><li>③ <b>Trái Đất</b> 🌍</li><li>④ Sao Hoả</li></ul>',
        'Trái Đất là hành tinh duy nhất biết tới có sự sống — nhờ vị trí "vừa phải" với Mặt Trời, có nước lỏng và khí quyển.',
      ],
      [
        'Sai — vì <b>Sao Kim</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất</b>.',
        'Sai — vì <b>Sao Hoả</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất</b>.',
        'Đúng — <b>Trái Đất</b> là đáp án chính xác. Trái Đất là hành tinh thứ ba (sau Sao Thuỷ và Sao Kim).',
        'Sai — vì <b>Sao Mộc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Trái Đất</b>.',
      ]
    ),
    Q('Hành tinh lớn nhất trong Hệ Mặt Trời là?',
      ['Sao Mộc (Jupiter)', 'Sao Thuỷ', 'Trái Đất', 'Sao Hoả'], 0,
      '<b>Sao Mộc (Jupiter)</b> — khổng lồ, đường kính gấp ~11 lần Trái Đất.',
      [
        '<b>Sao Mộc — "vua" của Hệ Mặt Trời:</b>',
        '<ul><li>Đường kính ~140.000 km, gấp ~11 lần Trái Đất.</li><li>Khối lượng ~318 lần Trái Đất.</li><li>Là <i>hành tinh khí khổng lồ</i>, chủ yếu là H và He.</li><li>Có "Vết Đỏ Lớn" — cơn bão khổng lồ tồn tại hàng trăm năm.</li><li>Có hơn 90 vệ tinh, lớn nhất là Ganymede.</li></ul>',
      ],
      [
        'Đúng — <b>Sao Mộc</b> là đáp án chính xác. Sao Mộc (Jupiter) — khổng lồ, đường kính gấp ~11 lần Trái Đất.',
        'Sai — vì <b>Sao Thuỷ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sao Mộc</b>.',
        'Sai — vì <b>Trái Đất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sao Mộc</b>.',
        'Sai — vì <b>Sao Hoả</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Sao Mộc</b>.',
      ]
    ),
    Q('Mặt Trăng là?',
      ['Một ngôi sao', 'Vệ tinh tự nhiên của Trái Đất', 'Một hành tinh quay quanh Mặt Trời', 'Một sao chổi'], 1,
      'Mặt Trăng = <b>vệ tinh tự nhiên</b> duy nhất của Trái Đất.',
      [
        '<b>Mặt Trăng — người bạn đồng hành của Trái Đất:</b>',
        '<ul><li>Là <b>vệ tinh tự nhiên</b> duy nhất của Trái Đất.</li><li>Đường kính ~3.474 km, bằng ¼ Trái Đất.</li><li>Khoảng cách trung bình ~384.000 km.</li><li>KHÔNG có không khí, không có nước lỏng trên bề mặt.</li><li>Tự nó <i>không phát sáng</i>, chỉ phản chiếu ánh Mặt Trời.</li></ul>',
      ],
      [
        'Sai — vì <b>Một ngôi sao</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vệ tinh tự nhiên của Trái Đất</b>.',
        'Đúng — <b>Vệ tinh tự nhiên của Trái Đất</b> là đáp án chính xác. Mặt Trăng = vệ tinh tự nhiên duy nhất của Trái Đất.',
        'Sai — vì <b>Một hành tinh quay quanh Mặt Trời</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vệ tinh tự nhiên của Trái Đất</b>.',
        'Sai — vì <b>Một sao chổi</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vệ tinh tự nhiên của Trái Đất</b>.',
      ]
    ),
    Q('Trái Đất quay quanh Mặt Trời hết bao lâu?',
      ['Khoảng 1 năm (365,25 ngày)', '1 tháng', '100 năm', '1 ngày'], 0,
      'Trái Đất quay quanh Mặt Trời ~<b>365,25 ngày = 1 năm</b>.',
      [
        '<b>Hai chuyển động của Trái Đất:</b>',
        '<ul><li><b>Quay quanh trục</b>: 24 giờ → tạo <i>ngày và đêm</i>.</li><li><b>Quay quanh Mặt Trời</b>: 365,25 ngày → tạo <i>1 năm</i>.</li></ul>',
        '<b>Mẹo</b>: 0,25 ngày dư mỗi năm → cứ 4 năm cộng 1 ngày vào tháng 2 → <i>năm nhuận</i> (366 ngày).',
      ],
      [
        'Đúng — <b>Khoảng 1 năm</b> là đáp án chính xác. Trái Đất quay quanh Mặt Trời ~365,25 ngày = 1 năm.',
        'Sai — vì <b>1 tháng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khoảng 1 năm</b>.',
        'Sai — vì <b>100 năm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khoảng 1 năm</b>.',
        'Sai — vì <b>1 ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khoảng 1 năm</b>.',
      ]
    ),
    Q('Trái Đất tự quay quanh trục hết bao lâu?',
      ['Khoảng 24 giờ (1 ngày đêm)', '1 tuần', '1 tháng', '12 giờ'], 0,
      'Trái Đất tự quay quanh trục ~<b>24 giờ = 1 ngày đêm</b>.',
      [
        '<b>Sự tự quay của Trái Đất:</b>',
        '<ul><li>Quay <i>từ Tây sang Đông</i> quanh trục nghiêng ~23,5°.</li><li>Chu kỳ: <code>24 giờ</code>.</li><li>Tạo ra hiện tượng <b>ngày và đêm</b>.</li><li>Tạo ra sự <i>chuyển động biểu kiến</i> của Mặt Trời từ Đông sang Tây.</li></ul>',
      ],
      [
        'Đúng — <b>Khoảng 24 giờ</b> là đáp án chính xác. Trái Đất tự quay quanh trục ~24 giờ = 1 ngày đêm.',
        'Sai — vì <b>1 tuần</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khoảng 24 giờ</b>.',
        'Sai — vì <b>1 tháng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khoảng 24 giờ</b>.',
        'Sai — vì <b>12 giờ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Khoảng 24 giờ</b>.',
      ]
    ),
  ]),

  M(35, 'Chuyển động nhìn thấy của Mặt Trời, ngày – đêm', [
    Q('Mặt Trời mọc ở hướng?',
      ['Bắc — hướng Sao Bắc Cực', 'Tây — nơi Mặt Trời lặn', 'Đông', 'Nam — hướng trưa Mặt Trời cao nhất'], 2,
      'Mặt Trời <b>mọc ở hướng Đông</b> — vì Trái Đất quay từ Tây sang Đông.',
      [
        '<b>Chuyển động biểu kiến của Mặt Trời:</b>',
        '<ul><li>🌅 <b>Mọc ở Đông</b> vào buổi sáng.</li><li>🌞 <b>Lên cao nhất</b> vào buổi trưa (gần hướng Nam ở Việt Nam).</li><li>🌇 <b>Lặn ở Tây</b> vào buổi chiều.</li></ul>',
        'Đó là chuyển động "nhìn thấy" — thực ra Mặt Trời không di chuyển, chính Trái Đất quay.',
      ],
      [
        'Sai — vì <b>Bắc — hướng Sao Bắc Cực</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đông</b>.',
        'Sai — vì <b>Tây — nơi Mặt Trời lặn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đông</b>.',
        'Đúng — <b>Đông</b> là đáp án chính xác. Mặt Trời mọc ở hướng Đông — vì Trái Đất quay từ Tây sang Đông.',
        'Sai — vì <b>Nam — hướng trưa Mặt Trời cao nhất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Đông</b>.',
      ]
    ),
    Q('Mặt Trời lặn ở hướng?',
      ['Bắc — hướng Sao Bắc Cực', 'Tây', 'Đông — nơi Mặt Trời mọc', 'Nam — hướng giữa trưa'], 1,
      'Mặt Trời <b>lặn ở hướng Tây</b>.',
      [
        '<b>Cách xác định hướng nhờ Mặt Trời:</b>',
        '<ul><li>🌅 Sáng: Mặt Trời ở hướng <b>Đông</b>.</li><li>🌞 Trưa: gần hướng <b>Nam</b> (ở Bắc bán cầu) hoặc gần hướng Bắc (Nam bán cầu).</li><li>🌇 Chiều: Mặt Trời ở hướng <b>Tây</b>.</li></ul>',
        'Đặt tay phải chỉ về Đông (Mặt Trời sáng), tay trái sẽ chỉ về Tây — phía sau là Bắc.',
      ],
      [
        'Sai — vì <b>Bắc — hướng Sao Bắc Cực</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tây</b>.',
        'Đúng — <b>Tây</b> là đáp án chính xác. Mặt Trời lặn ở hướng Tây. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>Đông — nơi Mặt Trời mọc</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tây</b>.',
        'Sai — vì <b>Nam — hướng giữa trưa</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tây</b>.',
      ]
    ),
    Q('Hiện tượng ngày và đêm là do?',
      ['Mặt Trăng che Mặt Trời', 'Mặt Trời tắt và sáng', 'Bão từ', 'Trái Đất tự quay quanh trục của nó'], 3,
      'Ngày – đêm = do <b>Trái Đất tự quay quanh trục</b>.',
      [
        '<b>Cơ chế ngày và đêm:</b>',
        '<ul><li>Trái Đất là hình cầu → Mặt Trời chỉ chiếu sáng được <i>một nửa</i>.</li><li>Nửa hướng về Mặt Trời = <b>ban ngày</b>.</li><li>Nửa khuất = <b>ban đêm</b>.</li><li>Trái Đất <i>tự quay</i> → các vùng lần lượt có ngày/đêm.</li></ul>',
        '🚫 Mặt Trời không "tắt – sáng"; ngày đêm là do Trái Đất quay.',
      ],
      [
        'Sai — vì <b>Mặt Trăng che Mặt Trời</b> Mặt Trăng không thường xuyên che Mặt Trời (nhật thực hiếm). Đáp án đúng là <b>Trái Đất tự quay quanh trục của nó</b>.',
        'Sai — vì <b>Mặt Trời tắt và sáng</b> Mặt Trời <b>không tắt/sáng</b> — luôn phát sáng liên tục. Đáp án đúng là <b>Trái Đất tự quay quanh trục của nó</b>.',
        'Sai — vì <b>Bão từ</b> bão từ là hiện tượng từ trường, không gây ra ngày/đêm. Đáp án đúng là <b>Trái Đất tự quay quanh trục của nó</b>.',
        'Đúng — <b>Trái Đất tự quay quanh trục của nó</b> là đáp án chính xác. Ngày – đêm = do Trái Đất tự quay quanh trục.',
      ]
    ),
    Q('Phần Trái Đất hướng về Mặt Trời thì?',
      ['Không có gì', 'Là ban đêm', 'Là ban ngày', 'Lạnh nhất'], 2,
      'Phần Trái Đất <b>hướng về Mặt Trời</b> = nhận ánh sáng = <b>ban ngày</b>.',
      [
        '<b>Nguyên lý đơn giản:</b>',
        '<ul><li>☀️ Hướng về Mặt Trời → nhận ánh sáng → <b>ngày</b>.</li><li>🌙 Khuất Mặt Trời → bóng tối → <b>đêm</b>.</li></ul>',
        'Khi Việt Nam là ban ngày thì Mỹ là ban đêm — vì hai nước ở 2 nửa đối diện của Trái Đất.',
      ],
      [
        'Sai — vì <b>Không có gì</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Là ban ngày</b>.',
        'Sai — vì <b>Là ban đêm</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Là ban ngày</b>.',
        'Đúng — <b>Là ban ngày</b> là đáp án chính xác. Phần Trái Đất hướng về Mặt Trời = nhận ánh sáng = ban ngày.',
        'Sai — vì <b>Lạnh nhất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Là ban ngày</b>.',
      ]
    ),
    Q('Phần Trái Đất không hướng về Mặt Trời thì?',
      ['Là ban ngày', 'Là ban đêm', 'Không tồn tại', 'Luôn nóng nhất'], 1,
      'Phần <b>khuất Mặt Trời</b> = không nhận ánh sáng = <b>ban đêm</b>.',
      [
        '<b>Đêm là do bóng của Trái Đất:</b>',
        '<ul><li>Mặt Trời chỉ chiếu sáng nửa Trái Đất quay về nó.</li><li>Nửa kia <i>nằm trong bóng tối</i> của chính Trái Đất.</li><li>Khi Trái Đất quay → vùng đó chuyển từ tối sang sáng = bình minh.</li></ul>',
      ],
      [
        'Sai — vì <b>Là ban ngày</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Là ban đêm</b>.',
        'Đúng — <b>Là ban đêm</b> là đáp án chính xác. Phần khuất Mặt Trời = không nhận ánh sáng = ban đêm.',
        'Sai — vì <b>Không tồn tại</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Là ban đêm</b>.',
        'Sai — vì <b>Luôn nóng nhất</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Là ban đêm</b>.',
      ]
    ),
    Q('Vì sao ta thấy Mặt Trời chuyển động từ Đông sang Tây?',
      ['Vì Trái Đất tự quay từ Tây sang Đông', 'Vì ảo giác hoàn toàn', 'Vì Mặt Trời thực sự bay', 'Vì gió thổi Mặt Trời'], 0,
      'Trái Đất quay <b>Tây → Đông</b> → ta thấy Mặt Trời <i>chuyển động biểu kiến</i> Đông → Tây.',
      [
        '<b>Hiện tượng tương đối:</b>',
        '<ul><li>Trái Đất quay quanh trục <i>từ Tây sang Đông</i>.</li><li>Người trên Trái Đất quay cùng — không cảm thấy mình đang quay.</li><li>Cảm nhận: <i>Mặt Trời chuyển động ngược lại</i>, từ Đông sang Tây.</li></ul>',
        'Giống như ngồi trên xe đang chạy, em thấy cây cối lùi về phía sau.',
      ],
      [
        'Đúng — <b>Vì Trái Đất tự quay từ Tây sang Đông</b> là đáp án chính xác. Trái Đất quay Tây → Đông → ta thấy Mặt Trời chuyển động biểu kiến Đông → Tây.',
        'Sai — vì <b>Vì ảo giác hoàn toàn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vì Trái Đất tự quay từ Tây sang Đông</b>.',
        'Sai — vì <b>Vì Mặt Trời thực sự bay</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vì Trái Đất tự quay từ Tây sang Đông</b>.',
        'Sai — vì <b>Vì gió thổi Mặt Trời</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vì Trái Đất tự quay từ Tây sang Đông</b>.',
      ]
    ),
    Q('Mặt Trăng cũng có pha (trăng tròn, khuyết) do?',
      ['Mặt Trăng tự sáng tắt', 'Vị trí Mặt Trăng so với Mặt Trời và Trái Đất thay đổi', 'Mặt Trời tắt một phần', 'Mặt Trăng vỡ'], 1,
      'Các pha Trăng do <b>vị trí Mặt Trăng – Trái Đất – Mặt Trời thay đổi</b> trong tháng.',
      [
        '<b>Các pha của Mặt Trăng</b>:',
        '<ul><li><b>Trăng non</b> (ngày 1 âm lịch): Mặt Trăng nằm giữa Mặt Trời và Trái Đất → ta không thấy.</li><li><b>Trăng khuyết đầu tháng</b> (ngày 7–8): nửa được chiếu sáng.</li><li><b>Trăng tròn</b> (ngày 15–16): Mặt Trăng đối diện Mặt Trời qua Trái Đất.</li><li><b>Trăng khuyết cuối tháng</b> (ngày 22–23): nửa còn lại.</li></ul>',
        'Mặt Trăng không tự sáng — chỉ phản chiếu ánh Mặt Trời.',
      ],
      [
        'Sai — vì <b>Mặt Trăng tự sáng tắt</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vị trí Mặt Trăng so với Mặt Trời và Trái Đất…</b>.',
        'Đúng — <b>Vị trí Mặt Trăng so với Mặt Trời và Trái Đất thay đổi</b> là đáp án chính xác. Các pha Trăng do vị trí Mặt Trăng – Trái Đất – Mặt Trời thay đổi trong tháng.',
        'Sai — vì <b>Mặt Trời tắt một phần</b> Mặt Trời <b>không tắt/sáng</b> — luôn phát sáng liên tục. Đáp án đúng là <b>Vị trí Mặt Trăng so với Mặt Trời và Trái Đất…</b>.',
        'Sai — vì <b>Mặt Trăng vỡ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Vị trí Mặt Trăng so với Mặt Trời và Trái Đất…</b>.',
      ]
    ),
  ]),

  M(36, 'Ôn tập Học kỳ 2 và cuối năm', [
    Q('Thứ tự đúng các cấp tổ chức cơ thể đa bào là?',
      ['Mô → Tế bào', 'Cơ quan → Tế bào → Mô', 'Cơ thể → Tế bào', 'Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể'], 3,
      'Thứ tự nhỏ → lớn: <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
      [
        '<b>5 cấp tổ chức cơ thể đa bào</b>:',
        '<ul><li>① <b>Tế bào</b> — đơn vị nhỏ nhất.</li><li>② <b>Mô</b> — tế bào cùng loại.</li><li>③ <b>Cơ quan</b> — nhiều mô phối hợp.</li><li>④ <b>Hệ cơ quan</b> — nhiều cơ quan phối hợp.</li><li>⑤ <b>Cơ thể</b> — toàn bộ.</li></ul>',
      ],
      [
        'Sai — vì <b>Mô → Tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
        'Sai — vì <b>Cơ quan → Tế bào → Mô</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
        'Sai — vì <b>Cơ thể → Tế bào</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b>.',
        'Đúng — <b>Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể</b> là đáp án chính xác. Thứ tự nhỏ → lớn: Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể.',
      ]
    ),
    Q('Khoá lưỡng phân ở mỗi bước có?',
      ['0 lựa chọn', '2 lựa chọn đối lập', '3 lựa chọn', '5 lựa chọn'], 1,
      '"Lưỡng" = <b>hai</b> → mỗi bước có <b>2 lựa chọn đối lập</b>.',
      [
        '<b>Khoá lưỡng phân</b>:',
        '<ul><li>Mỗi bước có <b>2 lựa chọn đối lập</b> (có/không, dài/ngắn).</li><li>Theo lựa chọn → đi tiếp tới bước sau.</li><li>Cuối cùng xác định được loài.</li></ul>',
        'Là công cụ <i>trực quan, dễ dùng</i> để phân loại sinh vật.',
      ],
      [
        'Sai — vì <b>0 lựa chọn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>2 lựa chọn đối lập</b>.',
        'Đúng — <b>2 lựa chọn đối lập</b> là đáp án chính xác. "Lưỡng" = hai → mỗi bước có 2 lựa chọn đối lập.',
        'Sai — vì <b>3 lựa chọn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>2 lựa chọn đối lập</b>.',
        'Sai — vì <b>5 lựa chọn</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>2 lựa chọn đối lập</b>.',
      ]
    ),
    Q('Kháng sinh có diệt được virus không?',
      ['Chỉ một số virus', 'Tuỳ trời mưa hay nắng', 'Có, mọi virus', 'Không'], 3,
      '<b>KHÔNG</b> — kháng sinh chỉ diệt vi khuẩn, không có tác dụng với virus.',
      [
        '<b>Phân biệt:</b>',
        '<ul><li><b>Kháng sinh</b>: chỉ diệt <i>vi khuẩn</i> (lao, viêm họng).</li><li><b>Thuốc kháng virus</b>: dùng cho virus (Tamiflu, Remdesivir).</li><li><b>Vắc-xin</b>: phòng ngừa cả vi khuẩn và virus.</li></ul>',
        '⚠️ Dùng kháng sinh tuỳ tiện → gây <b>kháng kháng sinh</b>, vi khuẩn trở nên "nhờn thuốc".',
      ],
      [
        'Sai — vì <b>Chỉ một số virus</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không</b>.',
        'Sai — vì <b>Tuỳ trời mưa hay nắng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không</b>.',
        'Sai — vì <b>Có, mọi virus</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Không</b>.',
        'Đúng — <b>Không</b> là đáp án chính xác. KHÔNG — kháng sinh chỉ diệt vi khuẩn, không có tác dụng với virus.',
      ]
    ),
    Q('Cây xanh thuộc giới?',
      ['Động vật', 'Nguyên sinh vật', 'Thực vật', 'Khởi sinh'], 2,
      'Cây xanh thuộc <b>giới Thực vật (Plantae)</b> — quang hợp được.',
      [
        '<b>Hệ thống 5 giới:</b>',
        '<ul><li><b>Khởi sinh</b>: vi khuẩn.</li><li><b>Nguyên sinh</b>: trùng giày, tảo đơn bào.</li><li><b>Nấm</b>: nấm rơm, nấm men.</li><li><b>Thực vật</b>: cây xanh — quang hợp, có lục lạp.</li><li><b>Động vật</b>: cá, chim, người.</li></ul>',
      ],
      [
        'Sai — vì <b>Động vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thực vật</b>.',
        'Sai — vì <b>Nguyên sinh vật</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thực vật</b>.',
        'Đúng — <b>Thực vật</b> là đáp án chính xác. Cây xanh thuộc giới Thực vật (Plantae) — quang hợp được.',
        'Sai — vì <b>Khởi sinh</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Thực vật</b>.',
      ]
    ),
    Q('Động vật nào sau đây thuộc lớp Thú?',
      ['Ếch đồng (lưỡng cư)', 'Rắn hổ mang (bò sát)', 'Cá chép', 'Cá heo'], 3,
      '<b>Cá heo</b> là thú biển — đẻ con, nuôi con bằng sữa (dù tên có chữ "cá").',
      [
        '<b>Cá heo là thú, không phải cá!</b>',
        '<ul><li>🍼 <b>Nuôi con bằng sữa</b> — đặc trưng của thú.</li><li>🫁 Thở bằng <b>phổi</b>, không có mang.</li><li>👶 Đẻ con.</li><li>🌡️ Hằng nhiệt (máu nóng).</li></ul>',
        'Các thú biển khác: cá voi, hải cẩu, lợn biển. Tất cả đều phải nổi lên mặt nước để thở.',
      ],
      [
        'Sai — vì <b>Ếch đồng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cá heo</b>.',
        'Sai — vì <b>Rắn hổ mang</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cá heo</b>.',
        'Sai — vì <b>Cá chép</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Cá heo</b>.',
        'Đúng — <b>Cá heo</b> là đáp án chính xác. Cá heo là thú biển — đẻ con, nuôi con bằng sữa (dù tên có chữ "cá").',
      ]
    ),
    Q('Đơn vị đo lực là?',
      ['mét — đơn vị chiều dài', 'Newton (N)', 'kilôgam', 'giây — đơn vị thời gian'], 1,
      '<b>Newton (N)</b> — đơn vị đo lực.',
      [
        '<b>Đơn vị các đại lượng vật lý cơ bản:</b>',
        '<ul><li>Chiều dài: <code>mét (m)</code></li><li>Khối lượng: <code>kilôgam (kg)</code></li><li>Thời gian: <code>giây (s)</code></li><li><b>Lực</b>: <code>Newton (N)</code></li><li>Năng lượng: <code>Jun (J)</code></li></ul>',
      ],
      [
        'Sai — vì <b>mét — đơn vị chiều dài</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Newton</b>.',
        'Đúng — <b>Newton</b> là đáp án chính xác. Newton (N) — đơn vị đo lực. Em xem lại phần "Giải thích" và "Lý thuyết" ngay dưới để nắm vững kiến thức.',
        'Sai — vì <b>kilôgam</b> là đơn vị đo <b>khối lượng</b>, không phù hợp với câu hỏi này. Đáp án đúng là <b>Newton</b>.',
        'Sai — vì <b>giây — đơn vị thời gian</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Newton</b>.',
      ]
    ),
    Q('Trọng lực trên Trái Đất có chiều?',
      ['Song song mặt đất tuỳ vị trí', 'Đi lên trên', 'Hướng về tâm Trái Đất (xuống dưới)', 'Đi ngang'], 2,
      'Trọng lực luôn <b>hướng về tâm Trái Đất</b> (từ trên xuống dưới).',
      [
        '<b>Đặc điểm trọng lực:</b>',
        '<ul><li><b>Phương</b>: thẳng đứng.</li><li><b>Chiều</b>: từ trên xuống — hướng về tâm Trái Đất.</li><li><b>Độ lớn</b>: <code>P ≈ 10 × m</code> (m tính bằng kg).</li></ul>',
        'Dây dọi luôn chỉ phương thẳng đứng — vì quả nặng bị trọng lực kéo xuống.',
      ],
      [
        'Sai — vì <b>Song song mặt đất tuỳ vị trí</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hướng về tâm Trái Đất</b>.',
        'Sai — vì <b>Đi lên trên</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hướng về tâm Trái Đất</b>.',
        'Đúng — <b>Hướng về tâm Trái Đất</b> là đáp án chính xác. Trọng lực luôn hướng về tâm Trái Đất (từ trên xuống dưới).',
        'Sai — vì <b>Đi ngang</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Hướng về tâm Trái Đất</b>.',
      ]
    ),
    Q('Khi đèn LED sáng, năng lượng chuyển hoá chủ yếu từ?',
      ['Điện năng → Quang năng', 'Hoá → Cơ', 'Quang năng → Điện năng', 'Cơ → Điện'], 0,
      'Đèn LED: <b>Điện năng → Quang năng</b> (hiệu suất ~80%, mất ít nhiệt).',
      [
        '<b>So sánh hiệu suất đèn:</b>',
        '<ul><li><b>Đèn sợi đốt</b>: ~10% Quang + ~90% Nhiệt (rất phí).</li><li><b>Đèn LED</b>: ~80% Quang + ~20% Nhiệt (tiết kiệm).</li><li><b>Đèn huỳnh quang</b>: ~25–30% Quang.</li></ul>',
        'Đó là lý do nên dùng LED — vừa sáng vừa tiết kiệm điện.',
      ],
      [
        'Đúng — <b>Điện năng → Quang năng</b> là đáp án chính xác. Đèn LED: Điện năng → Quang năng (hiệu suất ~80%, mất ít nhiệt).',
        'Sai — vì <b>Hoá → Cơ</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Quang năng</b>.',
        'Sai — vì <b>Quang năng → Điện năng</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Quang năng</b>.',
        'Sai — vì <b>Cơ → Điện</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>Điện năng → Quang năng</b>.',
      ]
    ),
    Q('Hệ Mặt Trời có mấy hành tinh?',
      ['6', '8', '9', '7'], 1,
      'Hệ Mặt Trời có <b>8 hành tinh</b> (sau khi Pluto bị "giáng cấp" năm 2006).',
      [
        '<b>8 hành tinh</b> (gần → xa Mặt Trời):',
        '<ul><li>Thuỷ – Kim – Trái Đất – Hoả (nhóm trong, đá).</li><li>Mộc – Thổ – Thiên Vương – Hải Vương (nhóm ngoài, khí).</li></ul>',
        'Pluto giờ là <i>hành tinh lùn</i> cùng với Ceres, Eris…',
      ],
      [
        'Sai — vì <b>6</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>8</b>.',
        'Đúng — <b>8</b> là đáp án chính xác. Hệ Mặt Trời có 8 hành tinh (sau khi Pluto bị "giáng cấp" năm 2006).',
        'Sai — vì <b>9</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>8</b>.',
        'Sai — vì <b>7</b> không khớp với nội dung câu hỏi. Phương án này hoặc lẫn lộn khái niệm, hoặc trái với định nghĩa/quy luật trong SGK KHTN 6. Đáp án đúng là <b>8</b>.',
      ]
    ),
    Q('Hiện tượng ngày và đêm có là do?',
      ['Trái Đất tự quay quanh trục', 'Mặt Trời tắt – sáng', 'Mặt Trăng che', 'Bão từ'], 0,
      'Ngày – đêm = <b>Trái Đất tự quay quanh trục</b>, không phải Mặt Trời tắt/sáng.',
      [
        '<b>Tóm tắt hiện tượng ngày – đêm:</b>',
        '<ul><li>Trái Đất hình cầu → Mặt Trời chiếu sáng <i>một nửa</i>.</li><li>Trái Đất tự quay <code>24 giờ</code> → các vùng luân phiên có ngày/đêm.</li><li>Nửa hướng Mặt Trời = ngày; nửa khuất = đêm.</li></ul>',
      ],
      [
        'Đúng — <b>Trái Đất tự quay quanh trục</b> là đáp án chính xác. Ngày – đêm = Trái Đất tự quay quanh trục, không phải Mặt Trời tắt/sáng.',
        'Sai — vì <b>Mặt Trời tắt – sáng</b> Mặt Trời <b>không tắt/sáng</b> — luôn phát sáng liên tục. Đáp án đúng là <b>Trái Đất tự quay quanh trục</b>.',
        'Sai — vì <b>Mặt Trăng che</b> Mặt Trăng không thường xuyên che Mặt Trời (nhật thực hiếm). Đáp án đúng là <b>Trái Đất tự quay quanh trục</b>.',
        'Sai — vì <b>Bão từ</b> bão từ là hiện tượng từ trường, không gây ra ngày/đêm. Đáp án đúng là <b>Trái Đất tự quay quanh trục</b>.',
      ]
    ),
  ], { difficulty: 3 }),
];

export const S6KHTN_SCENARIOS = indexBy(S6KHTN_WEEKS);

