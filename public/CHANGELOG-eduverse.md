# Changelog — EduVerse / Tizia

Ghi nhận các cải tiến hàng ngày của **Ban điều hành AI**.

---

## 2026-06-25 · Trường CNTT — Chế độ chủ động (inbox trống)

**Khoảng trống phát hiện:** Toàn bộ 35 module Trường CNTT đều là skeleton (placeholder), không có quiz scenario nào và nhiều module thiếu experience links.

**Thay đổi đã triển khai:**

### 1. Thêm quiz scenarios cho Năm 1 Trường CNTT (`public/js/scenarios/it-year1.js` — file mới)
- **I1.1 · Nhập môn lập trình Python** (`I1.1-python-basics`): 10 câu hỏi trắc nghiệm có giải thích, bao gồm: khai báo biến kiểu động, list vs tuple, dict rỗng, `.get()`, `def`, indentation, `range()`, `__name__`, string slicing, list comprehension.
- **I1.2 · Toán rời rạc** (`I1.2-discrete-math`): 10 câu hỏi, bao gồm: mệnh đề kéo theo (p→q ≡ ¬p∨q), tổ hợp C(5,3), định nghĩa cây đồ thị, hiệu đối xứng A⊕B, Định lý bắt tay, quy nạp toán học, Big-O, song ánh, số học modular, bài toán bắt tay K₁₀.

### 2. Đăng ký vào seed aggregator (`public/js/scenarios/_all-content.js`)
- Import và thêm `IT_YEAR1_SCENARIOS` vào `ALL_SCENARIOS` để sẵn sàng seed vào DB.

### 3. Kích hoạt 2 module Trường CNTT (`public/js/domains/it/modules.js`)
- **I1.1**: `scenarioIds: ['I1.1-python-basics']`, `knowledgeQuiz: 'I1.1-python-basics'`, xoá `placeholder: true`.
- **I1.2**: `scenarioIds: ['I1.2-discrete-math']`, `knowledgeQuiz: 'I1.2-discrete-math'`, xoá `placeholder: true`.

### 4. Mở rộng experience registry Trường CNTT (`public/js/domains/it/experiences.js`)
- Từ 6 entry → 17 entry, phủ thêm: I1.1 (Codelab+ScoreUp), I1.3 (ScoreUp), I1.4 (Codelab), I1.5 (ScoreUp), I2.2 (Codelab), I2.3 (ScoreUp), I2.4 (ScoreUp), I2.5 (Codelab), I3.5 (Codelab+Smartdoc), I3.7 (Smartdoc), I3.8 (ScoreUp), IG02 (Codelab).

**Kiểm thử:** `node --check` pass trên tất cả 4 file đã sửa. Không thay đổi engine lõi hay server.
