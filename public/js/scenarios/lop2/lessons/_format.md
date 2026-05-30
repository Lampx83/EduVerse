# Định dạng file lý thuyết tuần — Lớp 2

Mỗi môn 1 file: `lop2/lessons/<subject>.js`. Export 1 map `{ weekId → lesson }`,
key TRÙNG id quiz (`P2XX-wNN-quiz`). Tên biến export theo môn (xem _index.js).

```js
export const P2_TOAN_LESSONS = {
  'P2-w01-quiz': {
    topic: 'Ôn tập số đến 100',          // tên chủ đề tuần (cho AI "Học thêm")
    intro: '1-2 câu dẫn dắt ấm áp, gọi "các em".',
    objectives: ['Mục tiêu 1', 'Mục tiêu 2'],   // 2-3 mục tiêu "Em sẽ học được"
    theory: [                              // 4-6 khối, đan xen các loại:
      { h: 'Tiêu đề mục nhỏ' },
      { p: 'Đoạn giảng giải, câu ngắn, dễ hiểu cho HS 7-8 tuổi.' },
      { ul: ['Ý gạch đầu dòng 1', 'Ý 2', 'Ý 3'] },
      { note: 'Mẹo/ghi nhớ ngắn — hiện ở khung 💡.' },
    ],
    examples: [                            // 2 ví dụ mẫu có lời giải
      { q: 'Đề ví dụ', a: 'Lời giải từng bước, kết quả rõ ràng.' },
      { q: '...', a: '...' },
    ],
  },
  // ... đủ 36 tuần
};
```

Quy tắc nội dung:
- Tiếng Việt thuần, câu ngắn, từ đơn giản, giọng cô giáo tiểu học ấm áp.
- Bám đúng chủ đề tuần (lấy title trong file quiz cùng môn).
- Ví dụ gần gũi đời sống VN (kẹo, bút, con vật, gia đình, sân trường).
- KHÔNG trùng lặp y hệt câu hỏi trong quiz — lý thuyết là phần DẠY, quiz là phần KIỂM TRA.
