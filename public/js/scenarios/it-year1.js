// ============================================================
// IT domain — Năm 1 quiz scenarios
// ============================================================
// Module I1.1: Nhập môn lập trình (Python) — 10 câu
// Module I1.2: Toán rời rạc — 10 câu
//
// Biên soạn theo chương trình đào tạo CNTT/Khoa học máy tính
// các trường ĐH VN (UET, NEU, BK, FPT). Tiêu chuẩn năm 1.
// ============================================================

export const I11_QUIZ = {
  id: 'I1.1-python-basics',
  title: 'I1.1 · Nhập môn lập trình Python',
  kind: 'quiz',
  yearLevel: 1, subject: 'lap-trinh-co-ban', difficulty: 1,
  skillsTrained: ['python', 'programming-basics', 'variables', 'control-flow'],
  questions: [
    {
      stem: 'Trong Python, cách khai báo biến nào sau đây là đúng?',
      choices: ['int x = 5;', 'x = 5', 'var x = 5', 'declare x = 5'],
      answer: 1,
      explanation: 'Python là ngôn ngữ kiểu động (dynamic typing) — chỉ cần viết `x = 5`, Python tự suy luận kiểu dữ liệu. Không cần từ khoá khai báo kiểu như int (C/Java) hay var (JavaScript), và không dùng dấu chấm phẩy `;`.',
    },
    {
      stem: 'Điểm khác biệt chính giữa list và tuple trong Python là:',
      choices: [
        'List dùng {}, tuple dùng []',
        'List có thể thay đổi (mutable), tuple không thể thay đổi (immutable)',
        'Tuple có thể chứa nhiều phần tử hơn list',
        'Không có sự khác biệt, chỉ là cú pháp khác nhau',
      ],
      answer: 1,
      explanation: 'List `[1,2,3]` là mutable — có thể thêm/xoá/sửa phần tử sau khi tạo. Tuple `(1,2,3)` là immutable — không thể thay đổi. Tuple thường dùng cho dữ liệu cố định (toạ độ, cấu hình), nhanh hơn list khi duyệt do tiết kiệm bộ nhớ.',
    },
    {
      stem: 'Lệnh `print(type({}))` trong Python trả về kết quả gì?',
      choices: ["<class 'list'>", "<class 'set'>", "<class 'dict'>", "<class 'tuple'>"],
      answer: 2,
      explanation: '`{}` trong Python mặc định là dict rỗng, KHÔNG phải set. Để tạo set rỗng phải dùng `set()`. `{1,2,3}` mới là set có phần tử. Đây là bẫy phổ biến cho người mới học Python.',
    },
    {
      stem: 'Đoạn code sau in ra gì?\n  d = {"a": 1, "b": 2}\n  print(d.get("c", 0))',
      choices: ['None', 'KeyError', '0', '"c"'],
      answer: 2,
      explanation: '`dict.get(key, default)` trả về giá trị của key nếu tồn tại, ngược lại trả về `default`. Vì "c" không có trong dict → trả về 0. Dùng `.get()` an toàn hơn `d["c"]` (sẽ raise KeyError nếu key vắng mặt).',
    },
    {
      stem: 'Trong Python, hàm được định nghĩa bằng từ khoá nào?',
      choices: ['function', 'func', 'def', 'sub'],
      answer: 2,
      explanation: '`def` (viết tắt của definition) là từ khoá định nghĩa hàm có tên trong Python. `lambda` tạo hàm vô danh ngắn 1 dòng. `function` là từ khoá của JavaScript; `func` là của Go; `sub` là của Visual Basic.',
    },
    {
      stem: 'Python dùng cơ chế nào để phân chia khối lệnh (block)?',
      choices: ['Dấu ngoặc nhọn {}', 'Từ khoá begin/end', 'Thụt lề (indentation) nhất quán', 'Dấu chấm phẩy ;'],
      answer: 2,
      explanation: 'Python dùng thụt lề — thường 4 dấu cách — để xác định khối lệnh. Đây là đặc trưng của Python, giúp code luôn có cấu trúc đẹp. Thiếu thụt lề đúng sẽ gây `IndentationError`. C/Java dùng `{}`, Pascal/Ada dùng `begin/end`.',
    },
    {
      stem: 'Vòng lặp `for i in range(3):` chạy bao nhiêu lần và i nhận giá trị nào?',
      choices: ['3 lần, i = 1, 2, 3', '3 lần, i = 0, 1, 2', '4 lần, i = 0, 1, 2, 3', '2 lần, i = 1, 2'],
      answer: 1,
      explanation: '`range(n)` sinh dãy số từ 0 đến n-1. `range(3)` = {0, 1, 2} → vòng lặp chạy 3 lần, i lần lượt bằng 0, 1, 2. Để có 1, 2, 3 dùng `range(1, 4)`. Python dùng hệ zero-index (bắt đầu từ 0).',
    },
    {
      stem: 'Câu lệnh `if __name__ == "__main__":` có mục đích gì?',
      choices: [
        'Kiểm tra xem file Python có lỗi cú pháp hay không',
        'Bảo vệ code chỉ chạy khi file được gọi trực tiếp, không chạy khi file được import',
        'Khai báo hàm main() bắt buộc như trong C/Java',
        'Đặt tên biến toàn cục cho module',
      ],
      answer: 1,
      explanation: 'Khi chạy file trực tiếp, `__name__` = `"__main__"`. Khi file được import vào module khác, `__name__` = tên module. Idiom này cho phép file vừa là thư viện (module) vừa có code chạy độc lập — hữu ích khi vừa viết module vừa muốn test/demo ngay trong file đó.',
    },
    {
      stem: 'Kết quả của biểu thức `"Python"[1:4]` là:',
      choices: ['"Pyt"', '"yth"', '"ytho"', '"ython"'],
      answer: 1,
      explanation: 'String slicing `s[start:end]` lấy từ index start (bao gồm) đến end (không bao gồm). "Python": P=0, y=1, t=2, h=3, o=4, n=5. `[1:4]` lấy index 1,2,3 = "y","t","h" → "yth".',
    },
    {
      stem: 'List comprehension `[x**2 for x in range(1,4)]` tạo ra list nào?',
      choices: ['[1, 4, 9]', '[0, 1, 4]', '[1, 2, 3]', '[2, 4, 6]'],
      answer: 0,
      explanation: '`range(1,4)` = [1, 2, 3]. `x**2` là luỹ thừa 2 (= x*x). Kết quả: [1², 2², 3²] = [1, 4, 9]. List comprehension là cú pháp Python ngắn gọn, thay thế vòng `for` thông thường — được khuyến khích dùng vì Pythonic và hiệu quả hơn.',
    },
  ],
};

export const I12_QUIZ = {
  id: 'I1.2-discrete-math',
  title: 'I1.2 · Toán rời rạc',
  kind: 'quiz',
  yearLevel: 1, subject: 'toan-roi-rac', difficulty: 2,
  skillsTrained: ['logic', 'set-theory', 'combinatorics', 'graph-theory', 'complexity'],
  questions: [
    {
      stem: 'Mệnh đề p → q (kéo theo / implication) tương đương với biểu thức nào?',
      choices: ['¬p ∨ q', 'p ∧ q', '¬p ∧ q', 'p ∨ ¬q'],
      answer: 0,
      explanation: 'p → q nghĩa là "nếu p thì q". Chỉ sai khi p đúng và q sai. Bảng chân trị cho thấy p → q ≡ ¬p ∨ q. Đây là luật tương đương quan trọng: "nếu tiền đề p sai thì kết quả q bất kỳ đều khiến p→q đúng" (ex falso quodlibet).',
    },
    {
      stem: 'Số cách chọn 3 người từ một nhóm 5 người (không quan tâm thứ tự) là:',
      choices: ['10', '15', '20', '60'],
      answer: 0,
      explanation: 'Tổ hợp C(5,3) = 5! / (3! · 2!) = (5·4) / (2·1) = 10. Không quan tâm thứ tự → dùng tổ hợp (combination). Nếu quan tâm thứ tự → chỉnh hợp A(5,3) = 5·4·3 = 60.',
    },
    {
      stem: 'Trong lý thuyết đồ thị, đồ thị cây (tree) được định nghĩa là:',
      choices: [
        'Đồ thị có đúng 1 chu trình đơn',
        'Đồ thị liên thông và không có chu trình (acyclic connected graph)',
        'Đồ thị mà mọi đỉnh đều có bậc 2',
        'Đồ thị có số cạnh = số đỉnh',
      ],
      answer: 1,
      explanation: 'Cây (tree) = đồ thị vô hướng liên thông, không có chu trình. Tính chất cơ bản: n đỉnh → đúng n-1 cạnh. Cây nhị phân (binary tree) mỗi nút có tối đa 2 con — nền tảng của BST, heap, trie trong cấu trúc dữ liệu.',
    },
    {
      stem: 'Phép toán tập hợp A ⊕ B (hiệu đối xứng / symmetric difference) bằng:',
      choices: ['A ∪ B', '(A \\ B) ∪ (B \\ A)', 'A ∩ B', 'A ∪ B \\ (A ∩ B)'],
      answer: 1,
      explanation: 'A ⊕ B = tập phần tử thuộc A hoặc B nhưng không thuộc cả hai = (A \\ B) ∪ (B \\ A). Ứng dụng nổi bật: phép XOR bit-wise trong máy tính chính là ⊕ trên từng bit — dùng trong mã hoá, kiểm tra tính chẵn lẻ (parity).',
    },
    {
      stem: 'Định lý bắt tay (Handshaking Lemma) phát biểu:',
      choices: [
        'Mọi đỉnh trong đồ thị đều có bậc bằng nhau',
        'Tổng bậc tất cả các đỉnh bằng 2 lần số cạnh',
        'Số cạnh của cây bằng số đỉnh trừ 1',
        'Mọi đồ thị đều có chu trình Euler',
      ],
      answer: 1,
      explanation: 'Σdeg(v) = 2|E|. Lý do: mỗi cạnh đóng góp bậc 1 cho cả 2 đầu đỉnh → tổng bậc luôn chẵn. Hệ quả quan trọng: số đỉnh có bậc lẻ trong bất kỳ đồ thị nào cũng luôn là số chẵn.',
    },
    {
      stem: 'Phương pháp chứng minh quy nạp toán học (mathematical induction) gồm mấy bước chính?',
      choices: [
        '1 bước: kiểm tra trường hợp n=0 là đủ',
        '2 bước: cơ sở (base case) và bước quy nạp (inductive step: k → k+1)',
        '3 bước: giả sử đúng, suy luận, kết luận',
        '4 bước: cơ sở, giả thuyết, suy luận, tổng kết',
      ],
      answer: 1,
      explanation: 'Quy nạp toán học: (1) Bước cơ sở — chứng minh đúng với n₀ (thường n=0 hoặc n=1); (2) Bước quy nạp — giả sử đúng với n=k, chứng minh đúng với n=k+1. Kết hợp → đúng với mọi n≥n₀. Mạnh quy nạp (strong induction) giả sử đúng với mọi m≤k.',
    },
    {
      stem: 'Ký hiệu Big-O trong giải thuật, O(n log n) dùng để diễn tả điều gì?',
      choices: [
        'Bộ nhớ tối đa thuật toán sử dụng khi chạy',
        'Thời gian chạy tốt nhất (best case) của thuật toán',
        'Giới hạn trên tiệm cận (asymptotic upper bound) của thời gian chạy',
        'Số vòng lặp chính xác của thuật toán với đầu vào kích thước n',
      ],
      answer: 2,
      explanation: 'Big-O cho biết giới hạn trên tiệm cận: thuật toán chạy không chậm hơn c·f(n) với hằng số c khi n đủ lớn. O(n log n) là độ phức tạp của Merge Sort và Heap Sort — hiệu quả hơn O(n²) (Bubble Sort) rõ rệt với n lớn. Big-O không cho biết số vòng lặp chính xác.',
    },
    {
      stem: 'Hàm f: A → B gọi là song ánh (bijection) khi nào?',
      choices: [
        'f là đơn ánh: mỗi phần tử A ánh xạ sang phần tử khác nhau trong B',
        'f là toàn ánh: mọi phần tử B đều là ảnh của ít nhất 1 phần tử trong A',
        'f vừa đơn ánh (injection) vừa toàn ánh (surjection)',
        'f là hàm không xác định trên toàn bộ A',
      ],
      answer: 2,
      explanation: 'Song ánh (bijection) = đơn ánh + toàn ánh. Đơn ánh: a₁≠a₂ ⟹ f(a₁)≠f(a₂). Toàn ánh: ∀b∈B, ∃a∈A: f(a)=b. Song ánh ↔ tồn tại hàm ngược f⁻¹ duy nhất. Ý nghĩa: A và B có cùng "kích cỡ" (cardinality).',
    },
    {
      stem: 'Giá trị của 17 mod 5 (phép chia lấy dư trong số học modular) là:',
      choices: ['1', '2', '3', '4'],
      answer: 1,
      explanation: '17 = 3×5 + 2 → 17 mod 5 = 2 (số dư khi chia 17 cho 5). Python: `17 % 5 = 2`. Số học modular là nền tảng của mật mã RSA, các hàm băm (hash), và nhiều thuật toán giải mã quan trọng trong an toàn thông tin.',
    },
    {
      stem: 'Một nhóm 10 người bắt tay nhau, mỗi cặp bắt tay đúng 1 lần. Tổng số lần bắt tay là:',
      choices: ['20', '40', '45', '100'],
      answer: 2,
      explanation: 'Đây là bài toán đếm số cạnh của đồ thị đầy đủ K₁₀. Số lần bắt tay = C(10,2) = 10! / (2!·8!) = (10·9)/2 = 45. Cũng có thể suy từ Handshaking Lemma: 10 người × 9 lần = 90 tổng bậc, chia 2 (mỗi bắt tay tính 2 lần) = 45.',
    },
  ],
};

/** Tập hợp scenarios Trường IT Năm 1 để seed vào DB. */
export const IT_YEAR1_SCENARIOS = {
  [I11_QUIZ.id]: I11_QUIZ,
  [I12_QUIZ.id]: I12_QUIZ,
};
