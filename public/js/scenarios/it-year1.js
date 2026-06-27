// ============================================================
// Trường CNTT — Scenarios Năm 1 (I1.1 → I1.5)
// ============================================================
// Soạn theo chương trình Kỹ thuật phần mềm / CNTT VN (HUST, HCMUT, UIT).
// Mỗi câu có explanation để sinh viên hiểu rõ sau khi trả lời.
// ============================================================

// ─── I1.1 · Nhập môn lập trình (Python) ─────────────────────
export const I11_QUIZ = {
  id: 'I1.1-python-quiz',
  title: 'I1.1 · Nhập môn lập trình — Python cơ bản',
  kind: 'quiz',
  yearLevel: 1, subject: 'lap-trinh-co-ban', difficulty: 1,
  skillsTrained: ['bien-va-kieu-du-lieu', 'vong-lap', 'ham', 'danh-sach', 'dieu-kien'],
  questions: [
    {
      stem: 'Trong Python, lệnh nào dùng để in ra màn hình dòng chữ "Xin chào"?',
      choices: ['echo "Xin chào"', 'print("Xin chào")', 'console.log("Xin chào")', 'System.out.println("Xin chào")'],
      answer: 1,
      explanation: 'Python dùng hàm print() để xuất dữ liệu ra màn hình. echo là lệnh shell/PHP, console.log là JavaScript, System.out.println là Java. Python có cú pháp rõ ràng, ngắn gọn nhất.',
    },
    {
      stem: 'Kết quả của biểu thức Python: 10 // 3 là gì?',
      choices: ['3.33', '3', '4', '1'],
      answer: 1,
      explanation: '// là phép chia lấy phần nguyên (floor division) trong Python. 10 // 3 = 3 (phần thập phân bị cắt, không làm tròn). Khác với 10 / 3 = 3.333... Và 10 % 3 = 1 (phép chia lấy dư).',
    },
    {
      stem: 'Đoạn code sau in ra gì?\n```python\nfor i in range(3):\n    print(i)\n```',
      choices: ['0 1 2 3', '0 1 2', '1 2 3', '1 2 3 4'],
      answer: 1,
      explanation: 'range(3) tạo dãy [0, 1, 2] — bắt đầu từ 0, kết thúc TRƯỚC 3 (exclusive). Vòng for in ra mỗi giá trị trên một dòng: 0, 1, 2. Nếu muốn từ 1 đến 3 thì dùng range(1, 4).',
    },
    {
      stem: 'Kiểu dữ liệu nào phù hợp để lưu tập hợp các phần tử KHÔNG trùng lặp và KHÔNG có thứ tự trong Python?',
      choices: ['list', 'tuple', 'set', 'dict'],
      answer: 2,
      explanation: 'set lưu các phần tử duy nhất (tự loại trùng), không có thứ tự. list: có thứ tự, có thể trùng. tuple: có thứ tự, bất biến. dict: cặp key-value. Ví dụ: {1, 2, 3} là set; {1: "a"} là dict.',
    },
    {
      stem: 'Hàm Python sau trả về giá trị gì khi gọi tinh_tong(5)?\n```python\ndef tinh_tong(n):\n    if n == 0:\n        return 0\n    return n + tinh_tong(n - 1)\n```',
      choices: ['5', '10', '15', '25'],
      answer: 2,
      explanation: 'Đây là hàm đệ quy (recursive): tinh_tong(5) = 5 + tinh_tong(4) = 5 + 4 + tinh_tong(3) = ... = 5+4+3+2+1+0 = 15. Đây là công thức tổng các số từ 0 đến n = n×(n+1)/2 = 5×6/2 = 15.',
    },
    {
      stem: 'Phương thức list nào dùng để thêm một phần tử vào CUỐI danh sách?',
      choices: ['list.add(x)', 'list.append(x)', 'list.insert(x)', 'list.push(x)'],
      answer: 1,
      explanation: 'append(x) thêm x vào cuối list. insert(i, x) thêm vào vị trí i. add() là phương thức của set, không phải list. push() là JavaScript. extend() thêm nhiều phần tử từ iterable khác.',
    },
    {
      stem: 'Trong Python, điều gì xảy ra khi bạn cố truy cập index nằm ngoài phạm vi list?',
      choices: ['Trả về None', 'Trả về 0', 'Ném ra lỗi IndexError', 'Ném ra lỗi TypeError'],
      answer: 2,
      explanation: 'Python ném IndexError khi truy cập index không hợp lệ (quá lớn hoặc quá nhỏ). Ví dụ: arr = [1,2,3]; arr[5] → IndexError: list index out of range. Để an toàn: kiểm tra len(arr) hoặc dùng try/except.',
    },
    {
      stem: 'Cấu trúc điều kiện đúng cú pháp Python là:',
      choices: ['if (x > 0) { print(x) }', 'if x > 0: print(x)', 'if x > 0 then print(x)', 'if x > 0 => print(x)'],
      answer: 1,
      explanation: 'Python dùng cú pháp "if condition:" (không cần ngoặc đơn, kết thúc bằng dấu :). Khối code bên trong thụt đầu dòng (indentation). Không dùng { } như C/Java. Không dùng "then" như Pascal/SQL.',
    },
    {
      stem: 'List comprehension `[x**2 for x in range(4)]` tạo ra list nào?',
      choices: ['[1, 4, 9, 16]', '[0, 1, 4, 9]', '[0, 1, 2, 3]', '[1, 2, 3, 4]'],
      answer: 1,
      explanation: 'range(4) = [0, 1, 2, 3]. x**2 là bình phương. Kết quả: [0²,1²,2²,3²] = [0,1,4,9]. List comprehension là cú pháp ngắn gọn của Python để tạo list từ vòng lặp trong 1 dòng.',
    },
    {
      stem: 'Sự khác nhau chính giữa list và tuple trong Python là:',
      choices: ['list lưu số, tuple lưu chuỗi', 'list có thể thay đổi (mutable), tuple bất biến (immutable)', 'tuple nhanh hơn list trong mọi tình huống', 'list dùng () còn tuple dùng []'],
      answer: 1,
      explanation: 'list: mutable — có thể thêm/xóa/sửa phần tử sau khi tạo. tuple: immutable — không thể thay đổi sau khi tạo, dùng làm key dict hoặc lưu hằng số. list dùng [], tuple dùng (). tuple thường nhanh hơn một chút do cấu trúc cố định.',
    },
  ],
};

// ─── I1.2 · Toán rời rạc ────────────────────────────────────
export const I12_QUIZ = {
  id: 'I1.2-discrete-math-quiz',
  title: 'I1.2 · Toán rời rạc — Logic, tập hợp & đồ thị',
  kind: 'quiz',
  yearLevel: 1, subject: 'toan-roi-rac', difficulty: 1,
  skillsTrained: ['menh-de-logic', 'tap-hop', 'do-thi', 'to-hop', 'quan-he'],
  questions: [
    {
      stem: 'Mệnh đề P → Q (P kéo theo Q) chỉ SAI khi nào?',
      choices: ['P đúng và Q đúng', 'P đúng và Q sai', 'P sai và Q đúng', 'P sai và Q sai'],
      answer: 1,
      explanation: 'Bảng chân trị của P → Q: TT→T, TF→F, FT→T, FF→T. Implication chỉ sai khi tiền đề (P) ĐÚNG nhưng kết luận (Q) SAI. Câu "nếu trời mưa thì sân ướt" chỉ sai khi trời mưa (P đúng) nhưng sân không ướt (Q sai).',
    },
    {
      stem: 'Nếu |A| = 5 và |B| = 4 và |A ∩ B| = 2, thì |A ∪ B| bằng bao nhiêu?',
      choices: ['9', '7', '11', '6'],
      answer: 1,
      explanation: '|A ∪ B| = |A| + |B| − |A ∩ B| (nguyên lý bao-trừ). = 5 + 4 − 2 = 7. Nguyên lý này tránh đếm hai lần các phần tử thuộc cả A lẫn B. Tổng quát: |A∪B∪C| = |A|+|B|+|C|−|A∩B|−|A∩C|−|B∩C|+|A∩B∩C|.',
    },
    {
      stem: 'Số cách chọn 3 người từ nhóm 8 người (không quan tâm thứ tự) là:',
      choices: ['336', '56', '24', '512'],
      answer: 1,
      explanation: 'C(8,3) = 8! / (3! × 5!) = (8×7×6) / (3×2×1) = 336/6 = 56. Tổ hợp không quan tâm thứ tự → dùng C(n,k). Nếu có quan tâm thứ tự (hoán vị) thì dùng P(8,3) = 8×7×6 = 336.',
    },
    {
      stem: 'Đồ thị (graph) G có 5 đỉnh và mỗi đỉnh có bậc (degree) bằng 4. Số cạnh của G là:',
      choices: ['20', '10', '8', '16'],
      answer: 1,
      explanation: 'Định lý bắt tay (Handshaking Lemma): tổng bậc các đỉnh = 2 × số cạnh. Tổng bậc = 5 × 4 = 20. Số cạnh = 20/2 = 10. Đây cũng là K₅ (đồ thị đầy đủ 5 đỉnh), mỗi cặp đỉnh đều nối nhau.',
    },
    {
      stem: 'Quan hệ nào sau đây là quan hệ tương đương (equivalence relation) trên tập số nguyên Z?',
      choices: ['a ≤ b', 'a chia hết cho b', 'a và b có cùng phần dư khi chia cho 5', 'a + b = 0'],
      answer: 2,
      explanation: 'Quan hệ tương đương cần 3 tính chất: phản xạ, đối xứng, bắc cầu. "Đồng dư mod 5" (a ≡ b mod 5): (1) phản xạ a≡a; (2) đối xứng: a≡b ⇒ b≡a; (3) bắc cầu: a≡b, b≡c ⇒ a≡c. Các lựa chọn khác thiếu một trong ba tính chất.',
    },
    {
      stem: 'Phủ định của mệnh đề "∀x P(x)" (với mọi x, P(x) đúng) là:',
      choices: ['∀x ¬P(x)', '∃x P(x)', '∃x ¬P(x)', '¬∀x P(x) → ∀x ¬P(x)'],
      answer: 2,
      explanation: '¬(∀x P(x)) = ∃x ¬P(x). Để bác bỏ "mọi người đều cao", ta chỉ cần tìm "tồn tại một người không cao". Quy tắc: ¬∀ ↔ ∃¬ và ¬∃ ↔ ∀¬. Đây là luật De Morgan cho lượng từ.',
    },
    {
      stem: 'Cây nhị phân tìm kiếm (BST) với các giá trị chèn theo thứ tự: 5, 3, 7, 1, 4. Giá trị ở gốc (root) là:',
      choices: ['1', '3', '5', '7'],
      answer: 2,
      explanation: 'Phần tử đầu tiên chèn vào BST trở thành root. Chèn 5 → root. Chèn 3 (< 5 → trái), chèn 7 (> 5 → phải), chèn 1 (< 5 < 3... nhưng 1<3 → trái của 3), chèn 4 (< 5, > 3 → phải của 3). Root = 5.',
    },
    {
      stem: 'Thuật toán tìm kiếm nhị phân (binary search) yêu cầu mảng đầu vào phải:',
      choices: ['Chứa toàn số nguyên', 'Đã được sắp xếp', 'Có độ dài là luỹ thừa của 2', 'Không có phần tử trùng lặp'],
      answer: 1,
      explanation: 'Binary search yêu cầu mảng đã SẮP XẾP để áp dụng nguyên lý "chia đôi": so sánh phần tử giữa với target, loại nửa không chứa target. Độ phức tạp O(log n) — nhanh hơn O(n) của linear search. Không cần luỹ thừa 2 hay không trùng lặp.',
    },
    {
      stem: 'Hàm f: Z → Z, f(n) = 2n là hàm gì?',
      choices: ['Toàn ánh (surjective) nhưng không đơn ánh', 'Đơn ánh (injective) nhưng không toàn ánh', 'Song ánh (bijective)', 'Không phải hàm'],
      answer: 1,
      explanation: 'f(n) = 2n (nhân 2): đơn ánh — f(a)=f(b) ⇒ 2a=2b ⇒ a=b ✓. Không toàn ánh — không tồn tại n ∈ Z sao cho f(n) = 1 (số lẻ). Song ánh = đơn ánh VÀ toàn ánh — không thỏa. Nếu f: Z → 2Z (ảnh chỉ số chẵn) thì mới là song ánh.',
    },
    {
      stem: 'Số lượng tập con (subsets) của tập S = {a, b, c} là:',
      choices: ['6', '7', '8', '9'],
      answer: 2,
      explanation: 'Tập S có |S| = 3 phần tử → số tập con = 2³ = 8. Bao gồm: ∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}. Công thức tổng quát: tập n phần tử có 2ⁿ tập con. Tập lũy thừa (power set) P(S) có 8 phần tử.',
    },
  ],
};

// ─── I1.3 · Kiến trúc máy tính ──────────────────────────────
export const I13_QUIZ = {
  id: 'I1.3-computer-arch-quiz',
  title: 'I1.3 · Kiến trúc máy tính — CPU, bộ nhớ & hệ thống số',
  kind: 'quiz',
  yearLevel: 1, subject: 'kien-truc-may-tinh', difficulty: 1,
  skillsTrained: ['he-co-so-so', 'cpu-architecture', 'bo-nho', 'cache', 'assembly'],
  questions: [
    {
      stem: 'Số nhị phân 1101₂ bằng bao nhiêu trong hệ thập phân?',
      choices: ['11', '12', '13', '14'],
      answer: 2,
      explanation: '1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13₁₀. Mẹo: nhớ các lũy thừa 2: 1,2,4,8,16,32,64,128. Đọc từ phải sang trái theo thứ tự 2⁰,2¹,2²,2³...',
    },
    {
      stem: 'CPU (Central Processing Unit) thực hiện chu trình lệnh theo thứ tự nào?',
      choices: ['Execute → Decode → Fetch', 'Fetch → Decode → Execute', 'Decode → Fetch → Execute', 'Fetch → Execute → Decode'],
      answer: 1,
      explanation: 'Chu trình FDE (Fetch-Decode-Execute): (1) Fetch — nạp lệnh từ bộ nhớ vào thanh ghi lệnh (IR); (2) Decode — giải mã lệnh xem cần làm gì; (3) Execute — thực thi lệnh (ALU tính toán hoặc đọc/ghi bộ nhớ). Pipeline CPU hiện đại xử lý nhiều lệnh song song.',
    },
    {
      stem: 'Bộ nhớ cache L1 của CPU có đặc điểm nào sau đây?',
      choices: ['Dung lượng lớn nhất, tốc độ chậm nhất', 'Dung lượng nhỏ nhất, tốc độ nhanh nhất', 'Nằm ngoài chip CPU', 'Lưu dữ liệu khi mất điện'],
      answer: 1,
      explanation: 'Bộ nhớ phân cấp: Register (nhanh nhất) > Cache L1 > L2 > L3 > RAM > SSD > HDD (chậm nhất). L1 nằm trong chip CPU, truy cập 1-4 chu kỳ, dung lượng 32-64KB. Hiệu ứng cache hit/miss ảnh hưởng lớn đến hiệu năng.',
    },
    {
      stem: 'Kiến trúc Von Neumann khác với kiến trúc Harvard ở điểm nào?',
      choices: ['Von Neumann không có CPU', 'Von Neumann dùng chung bus cho dữ liệu và lệnh, Harvard tách riêng', 'Harvard không có bộ nhớ RAM', 'Von Neumann chỉ chạy ngôn ngữ máy'],
      answer: 1,
      explanation: 'Von Neumann: chương trình lệnh và dữ liệu cùng trên một bộ nhớ, chia sẻ một bus → đơn giản nhưng có "Von Neumann bottleneck" (nghẽn cổ chai). Harvard: tách riêng bộ nhớ lệnh và dữ liệu, hai bus song song → nhanh hơn, dùng trong microcontroller (Arduino, DSP).',
    },
    {
      stem: 'Số hex FF₁₆ bằng bao nhiêu trong hệ thập phân?',
      choices: ['245', '254', '255', '256'],
      answer: 2,
      explanation: 'F trong hệ 16 = 15. FF₁₆ = 15×16¹ + 15×16⁰ = 240 + 15 = 255₁₀. Đây cũng là 11111111₂ (8 bit toàn 1), giá trị lớn nhất của 1 byte. Hệ hex dùng 0-9, A-F (A=10, B=11, C=12, D=13, E=14, F=15).',
    },
    {
      stem: 'RAM (Random Access Memory) là bộ nhớ:',
      choices: ['Chỉ đọc, giữ dữ liệu khi mất điện', 'Đọc/ghi, mất dữ liệu khi mất điện', 'Chỉ đọc, mất dữ liệu khi mất điện', 'Đọc/ghi, giữ dữ liệu khi mất điện'],
      answer: 1,
      explanation: 'RAM: volatile (dễ bay hơi — mất khi tắt điện), đọc/ghi ngẫu nhiên với tốc độ cao. ROM: non-volatile (giữ dữ liệu khi mất điện), chỉ đọc (BIOS/firmware). Flash/SSD: non-volatile, đọc/ghi. HDD: non-volatile, cơ học.',
    },
    {
      stem: 'Pipelining trong CPU có tác dụng gì?',
      choices: ['Tăng tốc độ clock của CPU', 'Thực hiện nhiều giai đoạn lệnh song song để tăng throughput', 'Giảm kích thước bộ nhớ cache', 'Tăng số lõi CPU'],
      answer: 1,
      explanation: 'Pipelining chia chu trình FDE thành nhiều tầng (stages), mỗi tầng xử lý một lệnh khác nhau đồng thời — như băng chuyền nhà máy. Throughput tăng (nhiều lệnh hoàn thành mỗi giây) dù latency mỗi lệnh không đổi. Vấn đề: hazard (data, control, structural).',
    },
    {
      stem: "Biểu diễn số âm -5 trong hệ bù 2 (two's complement) với 8 bit là:",
      choices: ['10000101', '11111011', '11111010', '10000110'],
      answer: 1,
      explanation: "Two's complement của -5: (1) Viết 5 = 00000101; (2) Đảo bit = 11111010; (3) Cộng 1 = 11111011. Kiểm tra: 11111011 + 00000101 = 100000000 (tràn 8 bit, giữ 8 bit cuối = 00000000 ✓). Bù 2 là cách biểu diễn số âm phổ biến nhất trong máy tính.",
    },
    {
      stem: 'ALU (Arithmetic Logic Unit) là bộ phận của CPU chịu trách nhiệm:',
      choices: ['Lưu trữ chương trình đang chạy', 'Thực hiện các phép tính số học và logic', 'Điều phối giao tiếp với thiết bị ngoại vi', 'Nạp lệnh từ bộ nhớ'],
      answer: 1,
      explanation: 'ALU thực hiện các phép tính: số học (cộng/trừ/nhân/chia), logic (AND/OR/NOT/XOR), so sánh. Control Unit (CU) điều phối FDE. Registers lưu tạm kết quả. Program Counter (PC) trỏ tới lệnh tiếp theo. I/O Controller giao tiếp thiết bị ngoại vi.',
    },
    {
      stem: 'Đơn vị nào ĐÚNG nhất khi mô tả tốc độ truyền dữ liệu của ổ cứng SSD?',
      choices: ['KHz', 'MB/s hoặc GB/s', 'Watt', 'nanosecond'],
      answer: 1,
      explanation: 'Tốc độ truyền dữ liệu đo bằng MB/s (Megabytes per second) hoặc GB/s. SSD NVMe thế hệ mới đạt 3-7 GB/s. SSD SATA: ~550 MB/s. HDD: ~100-200 MB/s. KHz đo tần số, Watt đo công suất, nanosecond đo thời gian truy cập (latency).',
    },
  ],
};

// ─── I1.4 · Hệ điều hành (Linux căn bản) ───────────────────
export const I14_QUIZ = {
  id: 'I1.4-linux-quiz',
  title: 'I1.4 · Hệ điều hành — Linux căn bản & tiến trình',
  kind: 'quiz',
  yearLevel: 1, subject: 'he-dieu-hanh', difficulty: 1,
  skillsTrained: ['linux-commands', 'filesystem', 'process', 'permissions', 'shell'],
  questions: [
    {
      stem: 'Lệnh Linux nào dùng để liệt kê các file và thư mục trong thư mục hiện tại?',
      choices: ['dir', 'list', 'ls', 'show'],
      answer: 2,
      explanation: 'ls (list) liệt kê nội dung thư mục. ls -l: chi tiết (quyền, kích thước, ngày); ls -a: bao gồm file ẩn (bắt đầu bằng .); ls -la: kết hợp cả hai. dir là lệnh Windows/DOS, cũng hoạt động trên Linux nhưng ít dùng.',
    },
    {
      stem: 'Quyền file "rwxr-xr--" có nghĩa là gì?',
      choices: [
        'Chủ: đọc/ghi/thực thi; Nhóm: đọc/thực thi; Khác: chỉ đọc',
        'Chủ: đọc/ghi; Nhóm: thực thi; Khác: đọc/ghi',
        'Chủ: toàn quyền; Nhóm: toàn quyền; Khác: không có quyền',
        'Tất cả đều có quyền đọc/ghi/thực thi',
      ],
      answer: 0,
      explanation: 'Linux quyền file 9 ký tự = 3 nhóm 3 ký tự (owner|group|others). r=read, w=write, x=execute, -=không có. rwxr-xr--: owner(rwx=đọc+ghi+thực), group(r-x=đọc+thực), others(r--=chỉ đọc). Octal: 754.',
    },
    {
      stem: 'Lệnh nào dùng để thay đổi quyền file trong Linux?',
      choices: ['chown', 'chmod', 'chgrp', 'chperm'],
      answer: 1,
      explanation: 'chmod (change mode) thay đổi quyền file. chown (change owner) thay đổi chủ sở hữu. chgrp (change group) thay đổi nhóm. Ví dụ: chmod 755 file.sh (owner: rwx, group: r-x, others: r-x) hoặc chmod +x script.sh (thêm quyền thực thi).',
    },
    {
      stem: 'Tiến trình (process) là gì trong hệ điều hành?',
      choices: ['Một file thực thi đang nằm trên đĩa', 'Một chương trình đang được thực thi trong bộ nhớ', 'Một phân vùng ổ đĩa', 'Một lệnh trong terminal'],
      answer: 1,
      explanation: 'Process = chương trình đang chạy trong bộ nhớ, có PID (Process ID) riêng, không gian địa chỉ riêng, tài nguyên riêng (file, socket). Khác với program (file tĩnh trên đĩa). Thread là đơn vị thực thi bên trong process, chia sẻ bộ nhớ.',
    },
    {
      stem: 'Lệnh "ps aux" trong Linux dùng để:',
      choices: ['Xem dung lượng đĩa', 'Xem danh sách tiến trình đang chạy', 'Cài đặt phần mềm', 'Xem log hệ thống'],
      answer: 1,
      explanation: 'ps aux hiển thị tất cả tiến trình đang chạy: a=tất cả terminal, u=định dạng người dùng, x=kể cả không có terminal. Thấy: PID, %CPU, %MEM, command. top/htop: hiển thị realtime. kill PID: kết thúc tiến trình.',
    },
    {
      stem: 'Trong Linux, thư mục /etc thường chứa gì?',
      choices: ['File thực thi hệ thống', 'File cấu hình hệ thống', 'Thư mục home của người dùng', 'File tạm thời'],
      answer: 1,
      explanation: 'Cấu trúc thư mục Linux: /etc: cấu hình hệ thống (/etc/passwd, /etc/nginx/). /bin, /usr/bin: lệnh thực thi. /home: thư mục người dùng (/home/user). /tmp: file tạm (xóa khi reboot). /var: log, spool (/var/log). /proc: thông tin kernel ảo.',
    },
    {
      stem: 'Lệnh nào dùng để tìm kiếm văn bản trong file theo pattern (biểu thức chính quy) trên Linux?',
      choices: ['find', 'locate', 'grep', 'search'],
      answer: 2,
      explanation: 'grep (Global Regular Expression Print) tìm kiếm pattern trong file. Ví dụ: grep "error" log.txt; grep -r "TODO" ./src/ (đệ quy); grep -i "Error" (không phân biệt hoa thường). find: tìm file theo tên/thuộc tính. locate: tìm file theo database (nhanh hơn find).',
    },
    {
      stem: 'Pipe (|) trong shell Linux dùng để:',
      choices: ['Chuyển hướng output vào file', 'Kết nối output của lệnh này làm input của lệnh tiếp theo', 'Chạy hai lệnh song song', 'Kiểm tra lỗi lệnh'],
      answer: 1,
      explanation: 'Pipe | chuyển STDOUT của lệnh bên trái thành STDIN của lệnh bên phải. Ví dụ: ls -l | grep ".js" (lọc file .js); ps aux | grep nginx (tìm tiến trình nginx); cat log.txt | sort | uniq | wc -l (đếm dòng duy nhất). Triết lý Unix: mỗi lệnh làm 1 việc, kết hợp qua pipe.',
    },
    {
      stem: 'Lệnh nào dùng để xem 10 dòng đầu của file?',
      choices: ['top file.txt', 'head file.txt', 'first file.txt', 'begin file.txt'],
      answer: 1,
      explanation: 'head file.txt in 10 dòng đầu. head -n 20 file.txt: in 20 dòng đầu. tail file.txt: 10 dòng cuối. tail -f file.txt: theo dõi log realtime (follow). cat: in toàn bộ. less/more: đọc từng trang.',
    },
    {
      stem: 'Kernel của hệ điều hành có chức năng chính là:',
      choices: ['Hiển thị giao diện đồ họa cho người dùng', 'Quản lý phần cứng và cung cấp dịch vụ cho chương trình', 'Biên dịch code lập trình', 'Quản lý email và mạng xã hội'],
      answer: 1,
      explanation: 'Kernel (nhân) là lõi của OS: quản lý CPU (lập lịch tiến trình), bộ nhớ (phân trang, phân đoạn), thiết bị I/O (driver), hệ thống file, mạng, và bảo mật (system calls). Kernel chạy ở "kernel space" — tách biệt với "user space" của ứng dụng để bảo vệ hệ thống.',
    },
  ],
};

// ─── I1.5 · Tiếng Anh CNTT ──────────────────────────────────
export const I15_QUIZ = {
  id: 'I1.5-it-english-quiz',
  title: 'I1.5 · Tiếng Anh CNTT — Thuật ngữ & đọc hiểu kỹ thuật',
  kind: 'quiz',
  yearLevel: 1, subject: 'tieng-anh-it', difficulty: 1,
  skillsTrained: ['it-terminology', 'technical-reading', 'documentation', 'communication'],
  questions: [
    {
      stem: '"API" trong lập trình viết tắt của:',
      choices: ['Application Program Integration', 'Application Programming Interface', 'Automated Protocol Implementation', 'Advanced Program Index'],
      answer: 1,
      explanation: 'API (Application Programming Interface): tập hợp các giao thức, quy tắc cho phép các phần mềm giao tiếp với nhau. REST API, GraphQL API dùng phổ biến trên web. Ví dụ: Google Maps API, GitHub API. "Interface" = giao diện (quy ước giao tiếp, không phải giao diện người dùng).',
    },
    {
      stem: 'Thuật ngữ "debugging" có nghĩa là:',
      choices: ['Tối ưu hoá code', 'Tìm và sửa lỗi trong chương trình', 'Viết tài liệu kỹ thuật', 'Kiểm thử phần mềm tự động'],
      answer: 1,
      explanation: '"Bug" = lỗi chương trình (xuất phát từ câu chuyện con bọ nằm trong relay máy Mark II năm 1947). "Debug" = loại bỏ bug. Debugging tools: print statements, IDE debugger (breakpoint, step over, watch variables), logging. "Rubber duck debugging" = giải thích code cho... vịt cao su.',
    },
    {
      stem: 'Câu văn kỹ thuật sau đề cập đến khái niệm gì: "This function returns null if the key does not exist in the hash table."',
      choices: ['Hàm trả về kết quả khi tìm thấy key trong mảng', 'Hàm trả về null khi key không tồn tại trong bảng băm', 'Hàm xoá key khỏi hash table', 'Hàm tạo bảng băm mới'],
      answer: 1,
      explanation: '"Returns null" = trả về null. "If the key does not exist" = nếu key không tồn tại. "Hash table" = bảng băm (cấu trúc dữ liệu lưu cặp key-value). Dịch đúng: "Hàm này trả về null nếu key không tồn tại trong bảng băm." Kỹ năng đọc documentation tiếng Anh quan trọng cho lập trình viên.',
    },
    {
      stem: '"Open source" phần mềm có nghĩa là:',
      choices: ['Phần mềm miễn phí không cần đăng ký', 'Phần mềm có mã nguồn công khai, có thể xem và đóng góp', 'Phần mềm chỉ chạy trên hệ điều hành mở', 'Phần mềm không có bản quyền'],
      answer: 1,
      explanation: 'Open Source: mã nguồn (source code) công khai, có thể xem, sao chép, chỉnh sửa, phân phối theo giấy phép (MIT, GPL, Apache). Không đồng nghĩa với "miễn phí" (free software ≠ open source). Ví dụ: Linux, VS Code, React, Python. Khác với proprietary (độc quyền) như Windows, Photoshop.',
    },
    {
      stem: 'Trong tài liệu kỹ thuật, "deprecated" có nghĩa là:',
      choices: ['Tính năng mới được thêm vào', 'Tính năng đã bị xoá bỏ hoàn toàn', 'Tính năng lỗi thời, không nên dùng nữa và sẽ bị xoá trong tương lai', 'Tính năng đang được phát triển'],
      answer: 2,
      explanation: '"Deprecated" = không còn được khuyến nghị dùng, sẽ bị xoá trong phiên bản tương lai. Ví dụ: "This method is deprecated; use newMethod() instead." Ngược lại: "experimental" = thử nghiệm, "stable" = ổn định, "breaking change" = thay đổi gây mất tương thích.',
    },
    {
      stem: 'Từ "repository" trong ngữ cảnh Git/GitHub có nghĩa là:',
      choices: ['Một nhánh code', 'Kho lưu trữ code và lịch sử thay đổi', 'Một commit cụ thể', 'Người đóng góp code'],
      answer: 1,
      explanation: '"Repository" (repo) = kho chứa toàn bộ code, lịch sử commit, branches, tags của một dự án. git clone: tải repo về. git push: đẩy code lên. git pull: kéo code mới về. GitHub/GitLab: dịch vụ hosting repo. "Fork" = tạo bản sao repo. "Contributor" = người đóng góp.',
    },
    {
      stem: 'Đọc lỗi sau và xác định nguyên nhân: "NullPointerException: Cannot invoke method length() on null object"',
      choices: ['File không tìm thấy', 'Gọi phương thức trên biến đang có giá trị null', 'Mảng vượt chỉ số', 'Hết bộ nhớ RAM'],
      answer: 1,
      explanation: '"NullPointerException" (Java) = ngoại lệ con trỏ null — xảy ra khi gọi method hoặc truy cập field trên object có giá trị null. "Cannot invoke method length() on null object" = không thể gọi length() trên null. Fix: kiểm tra null trước khi dùng (if (str != null)) hoặc Optional.',
    },
    {
      stem: 'Trong pull request workflow của Git, "merge" và "rebase" khác nhau như thế nào?',
      choices: [
        'Merge giữ lịch sử nhánh, rebase viết lại lịch sử để tuyến tính',
        'Merge xoá nhánh, rebase giữ nhánh',
        'Chúng hoàn toàn giống nhau',
        'Rebase chỉ dùng cho nhánh main',
      ],
      answer: 0,
      explanation: 'Merge: kết hợp hai nhánh, tạo "merge commit" — giữ toàn bộ lịch sử. Rebase: "di chuyển" commit của nhánh lên đầu nhánh đích, tạo lịch sử tuyến tính (clean). merge: an toàn hơn cho team; rebase: lịch sử gọn gàng hơn. "Golden rule": không rebase nhánh đã push lên remote công khai.',
    },
    {
      stem: 'Viết tắt "CRUD" trong phát triển phần mềm đề cập đến:',
      choices: ['Create, Read, Update, Delete', 'Code, Run, Update, Deploy', 'Configure, Restart, Upgrade, Debug', 'Compile, Run, Unit-test, Deploy'],
      answer: 0,
      explanation: 'CRUD = Create, Read, Update, Delete — 4 thao tác cơ bản với dữ liệu. Ánh xạ tới HTTP: POST (Create), GET (Read), PUT/PATCH (Update), DELETE (Delete). Ánh xạ SQL: INSERT, SELECT, UPDATE, DELETE. Hầu hết ứng dụng web đều là CRUD operations trên dữ liệu.',
    },
    {
      stem: 'Trong văn bản kỹ thuật, "throughput" của một hệ thống có nghĩa là:',
      choices: ['Thời gian xử lý 1 request', 'Lượng công việc hoàn thành trong một đơn vị thời gian', 'Số lượng người dùng tối đa', 'Dung lượng bộ nhớ tối đa'],
      answer: 1,
      explanation: '"Throughput" = thông lượng — số lượng công việc hoàn thành mỗi đơn vị thời gian (requests/second, transactions/second). Khác với "latency" (độ trễ — thời gian để xử lý 1 request). High throughput, low latency là mục tiêu của hệ thống hiệu năng cao. Ví dụ: SSD 500MB/s throughput, 0.1ms latency.',
    },
  ],
};

// ─── Aggregator ──────────────────────────────────────────────
export const IT_YEAR1_SCENARIOS = {
  [I11_QUIZ.id]: I11_QUIZ,
  [I12_QUIZ.id]: I12_QUIZ,
  [I13_QUIZ.id]: I13_QUIZ,
  [I14_QUIZ.id]: I14_QUIZ,
  [I15_QUIZ.id]: I15_QUIZ,
};
