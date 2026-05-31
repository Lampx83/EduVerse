# Định dạng file lý thuyết tuần — Lớp 6 (THCS)

Mỗi môn 1 file: `lop6/lessons/<subject>.js`. Export 1 map `{ weekId → lesson }`,
key TRÙNG id quiz (`S6XXX-wNN-quiz`). Tên biến export theo môn (xem `_index.js`).

```js
export const S6TOAN_LESSONS = {
  'S6TOAN-w01-quiz': {
    topic: 'Tập hợp số tự nhiên',         // tên chủ đề (cho AI "Học thêm")
    intro: '1–2 câu dẫn vào bài, gọi "các em".',
    objectives: [                         // 3–4 mục tiêu "Em sẽ học được"
      'Nắm khái niệm tập hợp N.',
      'Đọc, viết và so sánh số tự nhiên.',
      'Biết cách kí hiệu ∈, ∉.',
    ],
    theory: [                             // 6–10 khối — đan xen các loại:
      { h: 'Tập hợp N là gì?' },
      { p: 'Đoạn giảng giải mạch lạc, có ví dụ minh hoạ.' },
      { ul: ['Ý gạch đầu dòng 1', 'Ý 2', 'Ý 3'] },
      { note: 'Mẹo/ghi nhớ — hiện ở khung 💡.' },
    ],
    examples: [                           // 2–3 ví dụ có lời giải
      { q: 'Đề ví dụ', a: 'Lời giải từng bước.' },
      { q: '…', a: '…' },
    ],
  },
  // … đủ 36 tuần
};
```

## Quy tắc nội dung
- Tiếng Việt chuẩn, văn phong cô giáo THCS — rõ ràng, có chiều sâu kiến thức.
- Bám đúng chủ đề tuần (lấy title trong file quiz cùng môn).
- Mỗi tuần học 6 tiết → nội dung lý thuyết phải đủ dày để cô giáo triển khai 4–5 mục.
- Theo SGK GDPT 2018 — có thể tham chiếu Kết nối tri thức / Cánh diều / Chân trời sáng tạo.
- KHÔNG copy nguyên câu hỏi quiz — lý thuyết là phần DẠY, quiz là KIỂM TRA.
- Ví dụ gắn đời sống VN (đặc biệt là Hà Nội cho GDĐP).
