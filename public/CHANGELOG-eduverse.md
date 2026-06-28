# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

---

## 2026-06-28 — Phiên cải tiến (4) · Trường Kinh tế — Year 2 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending; DB production chưa kết nối trong môi trường này).

**Trường:** Trường Kinh tế (`economics`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện 22/27 module Trường Kinh tế vẫn là skeleton với `scenarioIds: []`. Năm 1 đã hoàn chỉnh (phiên 1+2 ngày 2026-06-27). Ưu tiên bổ sung Year 2 (5 module cơ sở ngành) để sinh viên năm 2 có nội dung học ngay.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/economics-year2.js` | Tạo mới | 5 quiz scenarios E2.1–E2.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/economics/modules.js` | Sửa | Kích hoạt E2.1–E2.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ skeleton |
| `public/js/domains/economics/achievements.js` | Sửa | Thêm 6 achievement Year 2 mới (5 module + 1 hoàn thành Năm 2) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `ECONOMICS_YEAR2_SCENARIOS` |

### Chi tiết nội dung (50 câu hỏi)

**`E2.1-macro-quiz`** (10 câu) — Kinh tế Vĩ mô 1:
GDP phương pháp chi tiêu (C+I+G+NX), dịch chuyển đường AD, số nhân tài khoá, lạm phát cầu kéo vs chi phí đẩy, đường Phillips ngắn hạn, chính sách tài khoá mở rộng, công cụ tiền tệ, phân loại thất nghiệp, mô hình Solow tăng trưởng dài hạn, tài khoản vãng lai.

**`E2.2-statistics-quiz`** (10 câu) — Thống kê cho kinh tế:
Mean vs median (phân phối lệch), độ lệch chuẩn, quy tắc 68-95-99.7, kiểm định giả thuyết H₀, sai lầm Type I/II, hệ số tương quan Pearson, hồi quy tuyến tính đơn (slope), khoảng tin cậy 95%, Định lý giới hạn trung tâm, hệ số R².

**`E2.3-money-quiz`** (10 câu) — Tài chính – Tiền tệ:
Ba chức năng tiền tệ, M1 vs M2, số nhân tiền tệ (1/r), tác động tăng lãi suất tái cấp vốn, nghịch chiều giá trái phiếu–lãi suất, phương trình Fisher, hiện giá PV, tác động VND mất giá, phương trình MV=PQ, cơ chế tạo tiền ngân hàng.

**`E2.4-management-quiz`** (10 câu) — Quản trị học đại cương:
POLC framework, phân tích SWOT, tháp nhu cầu Maslow, Taylor và Scientific Management, cơ cấu tổ chức ma trận, span of control, phong cách lãnh đạo dân chủ, MBO–Management by Objectives, lý thuyết hai nhân tố Herzberg, quy trình kiểm soát quản trị.

**`E2.5-marketing-quiz`** (10 câu) — Marketing căn bản:
Marketing mix 4P, quy trình STP, phân khúc nhân khẩu học, chu kỳ sống sản phẩm–giai đoạn bão hoà, chiến lược skimming vs penetration, kênh phân phối trực tiếp, 5 giai đoạn quyết định mua, BCG matrix–Cash Cow, định vị thương hiệu, content marketing vs quảng cáo truyền thống.

### Achievement mới (6)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `macro-master` | 🏦 | Macro Master | E2.1 ≥ 3 sao |
| `stats-pro` | 📊 | Chuyên gia Thống kê | E2.2 ≥ 3 sao |
| `finance-guru` | 💰 | Tài chính – Tiền tệ Pro | E2.3 ≥ 3 sao |
| `mgmt-leader` | 🧭 | Nhà Quản trị Xuất sắc | E2.4 ≥ 3 sao |
| `marketing-star` | 📣 | Marketing Star | E2.5 ≥ 3 sao |
| `all-year-2-econ` | 🥈 | Tốt nghiệp Năm 2 Kinh tế | Năm 2 hoàn chỉnh |

### Kiểm thử

```
node --check public/js/scenarios/economics-year2.js              ✅ OK
node --check public/js/domains/economics/modules.js              ✅ OK
node --check public/js/domains/economics/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js                 ✅ OK
```

---

## 2026-06-27 — Phiên cải tiến (3) · Trường CNTT — Year 1 hoàn chỉnh

**Chế độ:** Chủ động (inbox `ai-board/inbox.json` không có yêu cầu pending).

**Trường:** Trường CNTT (`it`)

### Yêu cầu xử lý

Không có yêu cầu từ inbox. Quét codebase phát hiện toàn bộ 23 module curriculum Trường CNTT đều là skeleton với `scenarioIds: []`. Ưu tiên bổ sung Year 1 (5 module đại cương) để sinh viên năm 1 có nội dung học ngay.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year1.js` | Tạo mới | 5 quiz scenarios I1.1–I1.5 (50 câu hỏi, đầy đủ explanation) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I1.1–I1.5: bổ sung `scenarioIds` + `knowledgeQuiz`, bỏ `placeholder` |
| `public/js/domains/it/experiences.js` | Sửa | Mở rộng từ 6 → 14 entries; Year 1 có Codelab + ScoreUp |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 6 achievement Year 1 mới (5 module + 1 hoàn thành Năm 1) |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread `IT_YEAR1_SCENARIOS` |
