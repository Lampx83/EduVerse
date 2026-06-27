# CHANGELOG — EduVerse (Tizia)

Ghi nhận các cải tiến do Ban điều hành AI thực hiện hàng ngày.

---

## 2026-06-27 — Phiên cải tiến (3) · Trường CNTT — Year 1 hoàn chỉnh

**Chế độ:** Chủ động (database production không có trong môi trường CI — không có yêu cầu inbox; quét codebase phát hiện IT school 38/38 module là skeleton).

**Trường:** Trường CNTT (`it`)

### Yêu cầu xử lý

Không có yêu cầu từ người dùng (chế độ chủ động). Quét phát hiện toàn bộ 38 module Trường CNTT đều là skeleton `scenarioIds: []`. Ưu tiên bổ sung Year 1 (5 module đại cương) để sinh viên năm nhất có thể bắt đầu học ngay.

### Thay đổi

| File | Loại | Mô tả |
|------|------|-------|
| `public/js/scenarios/it-year1.js` | Tạo mới | Quiz scenarios I1.1–I1.5 (50 câu hỏi) |
| `public/js/domains/it/modules.js` | Sửa | Kích hoạt I1.1–I1.5 với scenarioIds + knowledgeQuiz, bỏ placeholder |
| `public/js/domains/it/experiences.js` | Sửa | Thêm ScoreUp cho I1.3, I1.4, I1.5; I1.1 thêm ScoreUp song song Codelab |
| `public/js/domains/it/achievements.js` | Sửa | Thêm 5 achievement Year 1 mới |
| `public/js/scenarios/_all-content.js` | Sửa | Import + spread IT_YEAR1_SCENARIOS |

### Chi tiết nội dung

**`I1.1-python-quiz`** — 10 câu Nhập môn Python: print(), phép chia nguyên //, vòng lặp range(), set vs list, đệ quy, append(), IndexError, cú pháp if, list comprehension, list vs tuple.

**`I1.2-discrete-math-quiz`** — 10 câu Toán rời rạc: P→Q implication, nguyên lý bao-trừ |A∪B|, C(8,3)=56, Handshaking Lemma, đồng dư mod 5, phủ định ∀, BST root, binary search điều kiện, hàm đơn ánh/toàn ánh, 2ⁿ tập con.

**`I1.3-computer-arch-quiz`** — 10 câu Kiến trúc máy tính: nhị phân→thập phân, FDE cycle, cache L1, Von Neumann vs Harvard, hex FF=255, RAM volatile, pipelining, bù 2 số âm, ALU, đơn vị SSD.

**`I1.4-linux-quiz`** — 10 câu Hệ điều hành Linux: ls, quyền rwxr-xr--, chmod, process vs program, ps aux, /etc, grep, pipe |, head, kernel.

**`I1.5-it-english-quiz`** — 10 câu Tiếng Anh CNTT: API, debugging, đọc null return, open source, deprecated, repository, NullPointerException, merge vs rebase, CRUD, throughput.

### Achievement mới (5)

| ID | Icon | Tên | Điều kiện |
|----|------|-----|-----------|
| `python-starter` | 🐍 | Pythonista | I1.1 ≥ 3 sao |
| `discrete-math` | 🔢 | Logic Master | I1.2 ≥ 3 sao |
| `arch-wizard` | ⚙️ | Kiến trúc sư máy tính | I1.3 ≥ 3 sao |
| `linux-geek` | 🐧 | Linux Geek | I1.4 ≥ 3 sao |
| `it-english-pro` | 🌏 | Đọc doc như gió | I1.5 ≥ 3 sao |

### Trước/Sau

| Module | Trước | Sau |
|--------|-------|-----|
| I1.1 Nhập môn Python | ❌ skeleton | ✅ 10 câu |
| I1.2 Toán rời rạc | ❌ skeleton | ✅ 10 câu |
| I1.3 Kiến trúc máy tính | ❌ skeleton | ✅ 10 câu |
| I1.4 Hệ điều hành Linux | ❌ skeleton | ✅ 10 câu |
| I1.5 Tiếng Anh CNTT | ❌ skeleton | ✅ 10 câu |

### Kiểm thử

```
node --check public/js/scenarios/it-year1.js              ✅ OK
node --check public/js/domains/it/modules.js              ✅ OK
node --check public/js/domains/it/experiences.js          ✅ OK
node --check public/js/domains/it/achievements.js         ✅ OK
node --check public/js/scenarios/_all-content.js          ✅ OK
```

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
node --check public/js/scenarios/_all-content.js            ✅ OK
```

---

## 2026-06-25 — Phiên cải tiến · Trường CNTT

*(Xem PR #9 — ai-board/2026-06-25)*

Bổ sung quiz scenarios IT Year 1 (Python, Toán rời rạc) và mở rộng experience registry từ 6 → 17 entries cho Trường CNTT.
