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

---

## 2026-06-25 · Trường CNTT — Phiên 2: Thêm quiz I2.1 DS&A

**Khoảng trống phát hiện:** Module I2.1 (Cấu trúc dữ liệu & Giải thuật) vẫn là placeholder sau phiên trước.

**Thay đổi đã triển khai:**

### 1. Thêm quiz I2.1 vào `public/js/scenarios/it-year1.js`
- **I2.1 · Cấu trúc dữ liệu & Giải thuật** (`I2.1-quiz-01`): 10 câu hỏi độ khó 3, bao gồm: Binary Search O(log n), Stack LIFO, bất biến BST (trái < N < phải), Hash Table O(1) trung bình, Merge Sort Divide&Conquer, ưu điểm Linked List (chèn/xóa O(1)), BFS dùng Queue, base case đệ quy, Quick Sort O(n log n) trung bình, DP vs D&C (memoize overlapping subproblems).
- `IT_YEAR1_SCENARIOS` mở rộng để bao gồm `I21_QUIZ`.

### 2. Kích hoạt module I2.1 (`public/js/domains/it/modules.js`)
- **I2.1**: `scenarioIds: ['I2.1-quiz-01']`, `knowledgeQuiz: 'I2.1-quiz-01'`, xoá `placeholder: true`.

**Kiểm thử:** `node --check` pass trên cả 2 file đã sửa. Không thay đổi engine lõi hay server.
