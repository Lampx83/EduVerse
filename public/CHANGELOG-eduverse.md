# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

---

## 2026-06-27 — Phiên cải tiến (2) · Trường Kinh tế — Year 1 hoàn chỉnh

**Chế độ:** Chủ động (database inbox trống — chạy proactive scan).

**Trường:** Trường Kinh tế (`economics`)

**Yêu cầu xử lý:** Không có yêu cầu từ sinh viên (inbox rỗng). Tiếp tục từ phiên buổi sáng — hoàn thiện nốt 3 module Year 1 còn lại của Trường Kinh tế.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year1b.js` | Tạo mới | Quiz scenarios E1.3, E1.4, E1.5 |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E1.3, E1.4, E1.5 với scenarioIds |
| `public/js/domains/economics/experiences.js` | Sửa | Thêm ScoreUp cho E1.3, E1.4, E1.5 |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 3 achievement mới |
| `public/js/scenarios/_all-content.js` | Sửa | Import ECONOMICS_YEAR1B_SCENARIOS |

### Chi tiết

**`economics-year1b.js`** (file mới, 3 quiz × 10 câu):
- **`E1.3-accounting-quiz`** — 10 câu Nguyên lý kế toán: phương trình kế toán cơ bản, ghi chép kép, tài sản ngắn hạn, khấu hao tài sản cố định, bảng cân đối kế toán, nhận doanh thu, nguyên tắc phù hợp, lợi nhuận gộp, lưu chuyển tiền tệ, cơ sở tích lũy vs tiền mặt.
- **`E1.4-bizlaw-quiz`** — 10 câu Pháp luật kinh tế: pháp nhân, trách nhiệm hữu hạn, các loại hình doanh nghiệp, cạnh tranh lành mạnh, điều kiện hợp đồng, phá sản, sở hữu trí tuệ, luật lao động, bất khả kháng, hộ kinh doanh.
- **`E1.5-it-econ-quiz`** — 10 câu Tin học cho kinh tế: VLOOKUP, PivotTable, SQL SELECT, Primary Key, hàm AVERAGE, ERP, biểu đồ phù hợp, mã hoá dữ liệu, Big Data 3V, FinTech.

**`economics/modules.js`**:
- E1.3: `scenarioIds: ['E1.3-accounting-quiz']`, `knowledgeQuiz: 'E1.3-accounting-quiz'`
- E1.4: `scenarioIds: ['E1.4-bizlaw-quiz']`, `knowledgeQuiz: 'E1.4-bizlaw-quiz'`
- E1.5: `scenarioIds: ['E1.5-it-econ-quiz']`, `knowledgeQuiz: 'E1.5-it-econ-quiz'`

**`economics/experiences.js`** — thêm 3 entry ScoreUp:
- E1.3 → ScoreUp (luyện trắc nghiệm kế toán)
- E1.4 → ScoreUp (luyện trắc nghiệm pháp luật kinh tế)
- E1.5 → ScoreUp (luyện trắc nghiệm tin học kinh tế)

**`economics/achievements.js`** — 3 achievement mới:
- `accounting-ace` 📒 "Kế toán xuất sắc" — hoàn thành E1.3 với 3 sao
- `law-aware` ⚖️ "Hiểu luật kinh doanh" — hoàn thành E1.4 với 3 sao
- `tech-savvy` 💻 "Công nghệ thành thạo" — hoàn thành E1.5 với 3 sao

### Kết quả: Trường Kinh tế Year 1 nay có đủ 5/5 module với quiz

| Module | Trạng thái trước | Trạng thái sau |
|--------|-----------------|----------------|
| E1.1 Kinh tế Vi mô 1 | ✅ (phiên buổi sáng) | ✅ |
| E1.2 Toán cho kinh tế | ✅ (phiên buổi sáng) | ✅ |
| E1.3 Nguyên lý kế toán | ❌ skeleton | ✅ |
| E1.4 Pháp luật kinh tế | ❌ skeleton | ✅ |
| E1.5 Tin học cho kinh tế | ❌ skeleton | ✅ |

### Kiểm thử

```
node --check public/js/scenarios/economics-year1b.js         ✅ OK
node --check public/js/domains/economics/modules.js          ✅ OK
node --check public/js/domains/economics/experiences.js      ✅ OK
node --check public/js/domains/economics/achievements.js     ✅ OK
node --check public/js/scenarios/_all-content.js             ✅ OK
```

---

## 2026-06-27 — Phiên cải tiến · Trường Kinh tế

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` chưa tồn tại — PR #7 chưa merge).

**Trường:** Trường Kinh tế (`economics`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox (chế độ chủ động). Quét codebase phát hiện toàn bộ 29 module Trường Kinh tế đều là skeleton với `scenarioIds: []` — không có một quiz scenario nào. Ưu tiên bổ sung 2 module Year 1 cơ bản nhất.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year1.js` | Tạo mới | Quiz scenarios E1.1 và E1.2 |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E1.1 và E1.2 với scenarioIds |
| `public/js/domains/economics/experiences.js` | Sửa | Thêm ScoreUp cho E1.1, E1.2, E4.6 |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 2 achievement mới |
| `public/js/scenarios/_all-content.js` | Sửa | Import ECONOMICS_YEAR1_SCENARIOS |

### Chi tiết

**`economics-year1.js`** (file mới):
- **`E1.1-micro-quiz`** — 10 câu hỏi Kinh tế Vi mô 1: quy luật cầu, dịch chuyển đường cầu, cân bằng thị trường, thặng dư tiêu dùng, độ co giãn PED, ngoại tác âm, hàng hoá công cộng, chi phí cơ hội, giá trần và hệ quả, phân tích cung-cầu tổng hợp.
- **`E1.2-math-econ-quiz`** — 10 câu hỏi Toán cho kinh tế: định thức ma trận, doanh thu biên MR, sản phẩm biên MP_L, điều kiện MR=MC, tích phân cơ bản, chi phí biên MC, hệ phương trình tuyến tính, quy tắc chuỗi, tối ưu hoá hàm lợi nhuận, phép nhân ma trận.

**`economics/modules.js`**:
- E1.1: `scenarioIds: ['E1.1-micro-quiz']`, `knowledgeQuiz: 'E1.1-micro-quiz'`
- E1.2: `scenarioIds: ['E1.2-math-econ-quiz']`, `knowledgeQuiz: 'E1.2-math-econ-quiz'`

**`economics/experiences.js`**:
- E1.1 → ScoreUp (luyện trắc nghiệm Vi mô)
- E1.2 → ScoreUp (luyện trắc nghiệm Toán kinh tế)
- E4.6 → Smartdoc (giáo trình Khoá luận)

**`economics/achievements.js`** — 2 achievement mới:
- `micro-star` 📉 "Chuyên gia Vi mô" — hoàn thành E1.1 với 3 sao
- `math-ace` 🔢 "Toán tài ba" — hoàn thành E1.2 với 3 sao

### Kiểm thử

```
node --check public/js/scenarios/economics-year1.js         ✅ OK
node --check public/js/domains/economics/modules.js         ✅ OK
node --check public/js/domains/economics/experiences.js     ✅ OK
node --check public/js/domains/economics/achievements.js    ✅ OK
node --check public/js/scenarios/_all-content.js            ✅ OK
```

---

## 2026-06-25 — Phiên cải tiến · Trường CNTT

*(Xem PR #9 — ai-board/2026-06-25)*

Bổ sung quiz scenarios IT Year 1 (Python, Toán rời rạc) và mở rộng experience registry từ 6 → 17 entries cho Trường CNTT.
