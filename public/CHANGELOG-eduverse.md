# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

---

## 2026-06-27 — Phiên cải tiến (2) · Trường Kinh tế — Year 1 hoàn chỉnh

**Chế độ:** Chủ động (phiên 2 — bổ sung phần còn thiếu sau phiên sáng).

**Trường:** Trường Kinh tế (`economics`)

### Yêu cầu xử lý

Phiên sáng đã bổ sung E1.1 và E1.2. Phiên chiều bổ sung nốt 3 module còn lại của Năm 1 (E1.3, E1.4, E1.5) để Year 1 có đầy đủ 5/5 module có quiz.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year1b.js` | Tạo mới | Quiz scenarios E1.3, E1.4, E1.5 (30 câu) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E1.3/E1.4/E1.5 với scenarioIds + knowledgeQuiz |
| `public/js/domains/economics/experiences.js` | Sửa | Thêm ScoreUp cho E1.3, E1.4, E1.5 |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 3 achievement mới |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread ECONOMICS_YEAR1B_SCENARIOS |

### Chi tiết nội dung

**`E1.3-accounting-quiz`** — 10 câu Nguyên lý kế toán:
Phương trình kế toán (A = L + E), ghi chép kép, tài sản ngắn/dài hạn, khấu hao,
Bảng cân đối kế toán, nhận doanh thu (IFRS 15/VAS 14), nguyên tắc phù hợp,
lợi nhuận gộp, báo cáo lưu chuyển tiền tệ (3 nhóm), accrual vs cash basis.

**`E1.4-bizlaw-quiz`** — 10 câu Pháp luật kinh tế:
Điều kiện pháp nhân (BLDS 2015 Đ.74), TNHH vs DNTN (trách nhiệm hữu hạn),
CTCP phát hành cổ phiếu, Luật Cạnh tranh 2018 (price-fixing), công chứng HĐ,
phá sản (Luật PS 2014), LSHTT (quyền tác giả 50 năm), BLLĐ 2019 (48h/tuần),
bất khả kháng (Đ.351 BLDS), hộ kinh doanh vs DNTN.

**`E1.5-it-econ-quiz`** — 10 câu Tin học cho kinh tế:
VLOOKUP, PivotTable, SELECT * FROM SQL, Primary Key, AVERAGE(),
ERP (SAP/Oracle/MISA), biểu đồ tròn (cơ cấu %), mã hoá/Encryption,
Big Data 3V (Volume/Velocity/Variety), FinTech (MoMo/P2P/Robo-advisor).

### Trước/Sau

| Module | Trước | Sau |
|--------|-------|-----|
| E1.1 | ✅ 10 câu | ✅ 10 câu |
| E1.2 | ✅ 10 câu | ✅ 10 câu |
| E1.3 | ❌ skeleton | ✅ 10 câu |
| E1.4 | ❌ skeleton | ✅ 10 câu |
| E1.5 | ❌ skeleton | ✅ 10 câu |

### Kiểm thử

```
node --check public/js/scenarios/economics-year1b.js              ✅ OK
node --check public/js/domains/economics/modules.js               ✅ OK
node --check public/js/domains/economics/experiences.js           ✅ OK
node --check public/js/domains/economics/achievements.js          ✅ OK
node --check public/js/scenarios/_all-content.js                  ✅ OK
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
