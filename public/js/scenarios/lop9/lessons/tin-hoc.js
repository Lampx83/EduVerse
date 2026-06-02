// ============================================================
// Lớp 9 · Tin học — Lý thuyết 35 tuần (chuẩn bị thi vào 10).
// Mạch: Python nâng cao → Web (HTML/CSS/JS) → An toàn số + AI + Hướng nghiệp CNTT.
// Key trùng id quiz: "S9TIN-wNN-quiz".
// ============================================================

const L = (topic, intro, objectives, theory, examples) => ({ topic, intro, objectives, theory, examples });

export const S9TIN_LESSONS = {
  'S9TIN-w01-quiz': L(
    'Ôn tập Python cơ bản',
    'Lớp 9 mở đầu bằng ôn tập Python — nền tảng cho cả mạch lập trình HK1 và là kĩ năng cốt lõi trong thời đại số.',
    ['Nhớ lại cú pháp Python cơ bản.', 'Vận dụng biến, kiểu dữ liệu, lệnh điều kiện, vòng lặp.', 'Đọc - viết được chương trình ngắn.'],
    [
      { h: 'Biến và kiểu dữ liệu' },
      { p: 'Python tự xác định kiểu khi gán: `x = 5` (int), `y = 3.14` (float), `s = "hi"` (str), `b = True` (bool). Kiểm tra kiểu bằng `type(x)`.' },
      { h: 'Lệnh điều kiện' },
      { ul: ['`if điều_kiện:` rồi tới `elif` và `else`.', 'Toán tử so sánh: `==`, `!=`, `<`, `>`, `<=`, `>=`.', 'Toán tử logic: `and`, `or`, `not`.'] },
      { h: 'Vòng lặp' },
      { ul: ['`for i in range(n):` lặp n lần.', '`while điều_kiện:` lặp đến khi sai.', '`break` thoát; `continue` bỏ qua vòng hiện tại.'] },
      { h: 'Hàm' },
      { p: 'Định nghĩa bằng `def tên_hàm(tham_số): ... return giá_trị`. Tách logic thành hàm giúp chương trình rõ ràng, dễ tái sử dụng.' },
      { note: 'Python coi thụt lề (indent) là cú pháp — sai thụt lề là lỗi cú pháp.' },
    ],
    [
      { q: 'Viết chương trình in các số từ 1 đến 10, mỗi số cách nhau dấu phẩy.', a: 'Cách 1: `for i in range(1,11): print(i, end="," if i<10 else "\\n")`. Cách 2: `print(",".join(str(i) for i in range(1,11)))`.' },
      { q: 'Hàm kiểm tra số nguyên có phải số chẵn hay không?', a: '`def is_even(n): return n % 2 == 0`. Gọi: `is_even(4)` trả `True`.' },
    ]
  ),

  'S9TIN-w02-quiz': L(
    'List — Khai báo và thao tác',
    'List là cấu trúc dữ liệu quan trọng nhất khi mới học Python — biểu diễn được danh sách, mảng, hàng đợi cơ bản.',
    ['Khai báo và truy cập list.', 'Thực hiện các phương thức cơ bản: append, insert, remove, pop.', 'Lặp qua list.'],
    [
      { h: 'Khai báo' },
      { p: '`nums = [1, 2, 3]`, `names = ["An", "Bình"]`, `mixed = [1, "hi", True]`. List có thứ tự, cho phép trùng, có thể thay đổi.' },
      { h: 'Truy cập phần tử' },
      { ul: ['`nums[0]` → phần tử đầu.', '`nums[-1]` → phần tử cuối.', '`len(nums)` → số phần tử.'] },
      { h: 'Phương thức cơ bản' },
      { ul: ['`append(x)`: thêm vào cuối.', '`insert(i, x)`: chèn vào vị trí i.', '`remove(x)`: xoá lần xuất hiện đầu tiên.', '`pop(i)`: lấy ra và xoá tại vị trí i.', '`sort()`: sắp xếp tại chỗ.', '`reverse()`: đảo ngược.'] },
      { h: 'Lặp qua list' },
      { p: '`for x in nums: print(x)` — lặp qua từng phần tử. Dùng `enumerate(nums)` nếu cần cả chỉ số.' },
      { note: 'List được lưu theo tham chiếu — gán `b = a` không tạo bản sao, sửa b cũng đổi a. Muốn sao chép: `b = a.copy()` hoặc `b = a[:]`.' },
    ],
    [
      { q: 'Viết hàm tính tổng các phần tử trong list.', a: '`def total(nums): return sum(nums)` hoặc viết thủ công: `s = 0; for x in nums: s += x; return s`.' },
      { q: 'Cho `a = [3, 1, 4, 1, 5]`. Thực hiện `a.append(9); a.sort()`. Kết quả?', a: '`[1, 1, 3, 4, 5, 9]` — append thêm 9 vào cuối, sau đó sort sắp xếp tăng dần.' },
    ]
  ),

  'S9TIN-w03-quiz': L(
    'List — Slicing và phép toán',
    'Slicing là kĩ thuật cắt list "đặc sản" của Python — viết ngắn, mạnh mẽ và rất thường gặp trong code thực tế.',
    ['Sử dụng cú pháp slicing [start:stop:step].', 'Phép toán cộng và nhân list.', 'Hiểu list comprehension.'],
    [
      { h: 'Cú pháp slicing' },
      { p: '`a[start:stop:step]` — lấy từ start (gồm) đến stop (không gồm), bước step. Bỏ trống mặc định.' },
      { h: 'Ví dụ' },
      { ul: ['`a[1:4]` → từ chỉ số 1 đến 3.', '`a[:3]` → 3 phần tử đầu.', '`a[-3:]` → 3 phần tử cuối.', '`a[::2]` → các phần tử chẵn vị trí.', '`a[::-1]` → đảo ngược list.'] },
      { h: 'Phép toán' },
      { ul: ['`[1,2] + [3,4]` → `[1,2,3,4]` (nối).', '`[0] * 5` → `[0,0,0,0,0]` (lặp).', '`x in a` → kiểm tra có x không.'] },
      { h: 'List comprehension' },
      { p: '`[biểu_thức for x in iterable if điều_kiện]`. Ví dụ: `[x*x for x in range(10) if x%2==0]` → list các bình phương của số chẵn.' },
      { note: 'List comprehension viết ngắn nhưng đừng lạm dụng — quá phức tạp sẽ khó đọc.' },
    ],
    [
      { q: 'Cho `a = [10, 20, 30, 40, 50]`. Kết quả `a[1:-1]` là gì?', a: '`[20, 30, 40]` — từ chỉ số 1 đến trước phần tử cuối (-1).' },
      { q: 'Viết list comprehension lấy bình phương các số lẻ từ 1 đến 20.', a: '`[x*x for x in range(1, 21) if x % 2 == 1]` → `[1, 9, 25, 49, 81, 121, 169, 225, 289, 361]`.' },
    ]
  ),

  'S9TIN-w04-quiz': L(
    'Tuple và Set',
    'Ngoài list, Python còn 2 cấu trúc dữ liệu quan trọng: tuple (bất biến) và set (tập hợp không trùng).',
    ['Phân biệt list, tuple, set.', 'Biết khi nào dùng tuple, khi nào dùng set.', 'Thực hiện các phép toán tập hợp.'],
    [
      { h: 'Tuple' },
      { ul: ['Khai báo: `t = (1, 2, 3)` hoặc `t = 1, 2, 3`.', 'Không thay đổi được (immutable).', 'Truy cập như list: `t[0]`.', 'Dùng cho dữ liệu cố định: tọa độ, ngày tháng, kết quả trả về nhiều giá trị.'] },
      { h: 'Set' },
      { ul: ['Khai báo: `s = {1, 2, 3}` hoặc `s = set([1,2,2,3])`.', 'Không có thứ tự, không trùng.', '`s.add(x)`, `s.remove(x)`, `x in s`.', 'Dùng để lọc trùng nhanh, kiểm tra membership nhanh.'] },
      { h: 'Phép toán tập hợp' },
      { ul: ['Hợp: `a | b` hoặc `a.union(b)`.', 'Giao: `a & b` hoặc `a.intersection(b)`.', 'Hiệu: `a - b`.', 'Hiệu đối xứng: `a ^ b`.'] },
      { h: 'So sánh' },
      { p: 'List: có thứ tự, có thể trùng, thay đổi được. Tuple: có thứ tự, có thể trùng, không thay đổi. Set: không thứ tự, không trùng, thay đổi được.' },
      { note: 'Kiểm tra `x in list` chậm hơn `x in set` rất nhiều khi dữ liệu lớn — vì set dùng hash table.' },
    ],
    [
      { q: 'Cho `nums = [1, 2, 2, 3, 3, 3, 4]`. Cách lấy danh sách không trùng?', a: '`list(set(nums))` → `[1, 2, 3, 4]` (thứ tự có thể khác). Set tự loại trùng, rồi chuyển lại thành list.' },
      { q: 'Vì sao toạ độ (x, y) thường dùng tuple chứ không phải list?', a: 'Vì tọa độ là dữ liệu cố định — không nên thay đổi sau khi đã xác định. Tuple bất biến giúp tránh lỗi và có hiệu năng tốt hơn.' },
    ]
  ),

  'S9TIN-w05-quiz': L(
    'Dictionary (dict)',
    'Dict là cấu trúc dữ liệu "key-value" — vô cùng quan trọng trong xử lý dữ liệu thực tế, từ web đến AI.',
    ['Khai báo và truy cập dict.', 'Thực hiện các thao tác cơ bản: thêm, sửa, xoá.', 'Lặp qua dict.'],
    [
      { h: 'Khai báo' },
      { p: '`d = {"name": "An", "age": 14, "scores": [9, 8, 10]}`. Mỗi cặp gồm key (duy nhất) và value (bất kì kiểu).' },
      { h: 'Truy cập và sửa' },
      { ul: ['`d["name"]` → lấy value của key.', '`d["age"] = 15` → cập nhật.', '`d["email"] = "a@b.c"` → thêm key mới.', '`d.get("phone", "N/A")` → lấy an toàn, không lỗi nếu thiếu.'] },
      { h: 'Phương thức cơ bản' },
      { ul: ['`d.keys()`, `d.values()`, `d.items()`.', '`del d[key]` hoặc `d.pop(key)`.', '`key in d` → kiểm tra tồn tại.'] },
      { h: 'Lặp qua dict' },
      { p: '`for k, v in d.items(): print(k, v)` — duyệt cả key và value.' },
      { h: 'Ứng dụng thực tế' },
      { ul: ['Lưu thông tin người dùng (JSON).', 'Đếm tần suất xuất hiện.', 'Tra cứu nhanh thông tin.', 'Cấu hình ứng dụng.'] },
      { note: 'Key trong dict phải là kiểu bất biến: str, int, tuple — không thể là list.' },
    ],
    [
      { q: 'Đếm số lần xuất hiện của các chữ cái trong chuỗi "banana".', a: '`s = "banana"; cnt = {}; for c in s: cnt[c] = cnt.get(c, 0) + 1` → `{"b":1, "a":3, "n":2}`.' },
      { q: 'Tạo dict điểm cho 3 bạn: An=9, Bình=8, Châu=10. Tìm bạn điểm cao nhất.', a: '`scores = {"An":9, "Bình":8, "Châu":10}`. `best = max(scores, key=scores.get)` → "Châu".' },
    ]
  ),

  'S9TIN-w06-quiz': L(
    'String — Xử lý chuỗi',
    'Xử lý chuỗi (string) là kĩ năng dùng hằng ngày — từ phân tích văn bản đến xử lý dữ liệu nhập vào.',
    ['Truy cập và slice chuỗi.', 'Sử dụng các phương thức chuỗi thường gặp.', 'Định dạng chuỗi với f-string.'],
    [
      { h: 'Chuỗi cơ bản' },
      { p: 'Chuỗi là dãy kí tự bất biến: `s = "Hello"`. Truy cập như list: `s[0]` → "H", `s[-1]` → "o". Slice: `s[1:4]` → "ell".' },
      { h: 'Phương thức quan trọng' },
      { ul: ['`upper()`, `lower()`, `title()`: đổi hoa thường.', '`strip()`: loại khoảng trắng đầu cuối.', '`split(sep)`: tách thành list.', '`join(list)`: nối list thành chuỗi.', '`replace(old, new)`: thay thế.', '`find(sub)`: tìm chỉ số (- 1 nếu không có).', '`startswith()`, `endswith()`.'] },
      { h: 'f-string' },
      { p: '`name = "An"; print(f"Xin chào, {name}!")` → "Xin chào, An!". Có thể đặt biểu thức: `f"{2+3}"` → "5". Định dạng số: `f"{3.14159:.2f}"` → "3.14".' },
      { h: 'Escape characters' },
      { ul: ['`\\n` xuống dòng.', '`\\t` tab.', '`\\\\` dấu \\.', '`\\"` dấu " trong chuỗi `"`.'] },
      { note: 'Chuỗi Python hỗ trợ tốt Unicode — xử lý tiếng Việt mượt mà nếu file lưu UTF-8.' },
    ],
    [
      { q: 'Cho chuỗi "  Xin chào   Việt Nam  ". Lấy chuỗi sạch và đếm số từ.', a: '`s = "  Xin chào   Việt Nam  ".strip()` → "Xin chào   Việt Nam". `words = s.split()` → `["Xin","chào","Việt","Nam"]`. Số từ: `len(words)` = 4.' },
      { q: 'Viết chương trình đảo ngược một câu (đảo thứ tự các từ).', a: '`s = "Tôi yêu Việt Nam"; words = s.split(); reversed = " ".join(words[::-1])` → "Nam Việt yêu Tôi".' },
    ]
  ),

  'S9TIN-w07-quiz': L(
    'File I/O — Đọc/ghi file',
    'Đọc và ghi file là kĩ năng cần thiết để xử lý dữ liệu thực tế — từ điểm số, danh sách đến nhật kí ứng dụng.',
    ['Mở file đúng cách với `with`.', 'Đọc file: read, readline, readlines.', 'Ghi file: write, writelines.'],
    [
      { h: 'Cú pháp mở file' },
      { p: '`with open("data.txt", "r", encoding="utf-8") as f: ...`. `with` tự động đóng file. Mode: "r" đọc, "w" ghi mới (xoá nội dung cũ), "a" append, "rb"/"wb" nhị phân.' },
      { h: 'Đọc file' },
      { ul: ['`f.read()`: đọc toàn bộ thành chuỗi.', '`f.readline()`: đọc 1 dòng.', '`f.readlines()`: trả list các dòng.', '`for line in f:` lặp từng dòng (tiết kiệm bộ nhớ).'] },
      { h: 'Ghi file' },
      { ul: ['`f.write("text\\n")`: ghi chuỗi.', '`f.writelines(list_of_str)`: ghi nhiều dòng.', 'Mode "w" sẽ xoá nội dung cũ; "a" sẽ thêm vào cuối.'] },
      { h: 'Xử lý lỗi' },
      { p: 'Bọc trong `try: ... except FileNotFoundError: ...` để chương trình không crash khi file không tồn tại.' },
      { note: 'Luôn dùng `with` thay vì `open()` + `close()` — an toàn hơn, không quên đóng file.' },
    ],
    [
      { q: 'Viết chương trình đọc file `scores.txt` (mỗi dòng 1 điểm) và in điểm trung bình.', a: 'pythonwith open("scores.txt") as f: scores = [float(line) for line in f]; print(sum(scores)/len(scores))' },
      { q: 'Vì sao khi mở file cần `encoding="utf-8"`?', a: 'Để đọc/ghi đúng các kí tự tiếng Việt và emoji. Mặc định trên Windows có thể là cp1252 — gây lỗi UnicodeDecodeError.' },
    ]
  ),

  'S9TIN-w08-quiz': L(
    'OOP cơ bản — Class và Object',
    'Lập trình hướng đối tượng (OOP) giúp tổ chức code theo mô hình "đối tượng có thuộc tính và hành vi" — gần với thế giới thực.',
    ['Hiểu khái niệm class và object.', 'Khai báo class với __init__.', 'Tạo và sử dụng object.'],
    [
      { h: 'Khái niệm' },
      { p: 'Class là "khuôn" mô tả các đối tượng cùng loại. Object (instance) là một thể hiện cụ thể tạo từ class. Ví dụ: class `Student` — object: HS cụ thể An, Bình.' },
      { h: 'Khai báo class' },
      { p: '`class Student:` → bên trong có `__init__(self, ...)` là hàm khởi tạo, các thuộc tính (data) và phương thức (function).' },
      { h: 'Ví dụ đơn giản' },
      { ul: ['`class Student:`', '`    def __init__(self, name, age): self.name = name; self.age = age`', '`    def greet(self): print(f"Xin chào, tôi là {self.name}")`', '`s = Student("An", 14); s.greet()` → in "Xin chào, tôi là An".'] },
      { h: 'self là gì?' },
      { p: '`self` là tham chiếu tới chính object đang gọi method. Python tự truyền vào khi gọi `s.greet()`.' },
      { note: 'OOP giúp code rõ ràng hơn nhưng không phải lúc nào cũng cần — chương trình nhỏ dùng hàm là đủ.' },
    ],
    [
      { q: 'Viết class Circle có thuộc tính radius và method area trả về diện tích.', a: 'pythonimport math\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n    def area(self):\n        return math.pi * self.radius ** 2\nc = Circle(5); print(c.area())' },
      { q: 'Sự khác nhau giữa class và object?', a: 'Class là khuôn mẫu (definition), object là cá thể cụ thể (instance). Một class có thể tạo ra nhiều object — như "blueprint" và "house thực tế xây từ blueprint".' },
    ]
  ),

  'S9TIN-w09-quiz': L(
    'OOP — Kế thừa và Encapsulation',
    'Kế thừa (inheritance) và đóng gói (encapsulation) là hai nguyên lý cốt lõi giúp tái sử dụng và bảo vệ code.',
    ['Hiểu khái niệm kế thừa.', 'Khai báo class con kế thừa class cha.', 'Hiểu encapsulation và quy ước _underscore.'],
    [
      { h: 'Kế thừa' },
      { p: 'Class con tự động có mọi thuộc tính và phương thức của class cha. Cú pháp: `class Dog(Animal): ...`.' },
      { h: 'Ví dụ kế thừa' },
      { ul: ['`class Animal:`', '`    def __init__(self, name): self.name = name`', '`    def speak(self): print("...")`', '`class Dog(Animal):`', '`    def speak(self): print(f"{self.name}: Gâu gâu!")`', '`d = Dog("Mực"); d.speak()` → "Mực: Gâu gâu!".'] },
      { h: 'super()' },
      { p: 'Gọi method của class cha: `super().__init__(name)` — dùng khi class con muốn dùng lại __init__ của cha rồi mở rộng thêm.' },
      { h: 'Encapsulation (đóng gói)' },
      { p: 'Quy ước Python: thuộc tính có _ ở đầu (`self._secret`) là "private" — chỉ dùng nội bộ, người ngoài không nên truy cập trực tiếp. Đây là quy ước, không phải bắt buộc.' },
      { h: 'Lợi ích' },
      { ul: ['Tái sử dụng code.', 'Tổ chức theo cấp bậc.', 'Dễ bảo trì, mở rộng.', 'Bảo vệ dữ liệu nội bộ.'] },
      { note: 'Đừng lạm dụng kế thừa — kế thừa nhiều cấp làm code khó debug. Khi không chắc, ưu tiên composition (chứa) hơn inheritance (kế thừa).' },
    ],
    [
      { q: 'Class HocSinh kế thừa từ NguoiHoc. Thêm thuộc tính `truong`. Cách viết?', a: 'pythonclass NguoiHoc:\n    def __init__(self, ten): self.ten = ten\nclass HocSinh(NguoiHoc):\n    def __init__(self, ten, truong):\n        super().__init__(ten)\n        self.truong = truong' },
      { q: 'Vì sao đóng gói (encapsulation) quan trọng?', a: 'Giúp ẩn chi tiết bên trong, chỉ lộ giao diện cần thiết. Khi thay đổi cài đặt nội bộ, code bên ngoài vẫn dùng được. Bảo vệ dữ liệu khỏi sửa đổi không mong muốn.' },
    ]
  ),

  'S9TIN-w10-quiz': L(
    'Thực hành Python tổng hợp',
    'Tuần thực hành tổng hợp — viết một chương trình nhỏ kết hợp file I/O, list, dict, hàm và OOP.',
    ['Phân tích bài toán, lập kế hoạch code.', 'Tích hợp nhiều kĩ thuật trong một chương trình.', 'Debug và kiểm tra kết quả.'],
    [
      { h: 'Bài toán mẫu' },
      { p: 'Quản lý điểm HS lớp 9A: đọc danh sách HS từ file, tính điểm trung bình, xếp loại, ghi báo cáo ra file.' },
      { h: 'Phân tích' },
      { ul: ['Cấu trúc dữ liệu: list các dict, hoặc list các object Student.', 'Đầu vào: file CSV "ten,toan,van,anh".', 'Xử lý: tính TB = (toan+van+anh)/3, xếp loại.', 'Đầu ra: file text báo cáo.'] },
      { h: 'Khung code' },
      { ul: ['Hàm `doc_hs(filename)` → trả list dict.', 'Hàm `tinh_tb(hs)` → float.', 'Hàm `xep_loai(tb)` → str (Giỏi/Khá/TB/Yếu).', 'Hàm `ghi_bao_cao(hs_list, filename)`.', 'main() điều phối các bước.'] },
      { h: 'Mẹo lập trình' },
      { ul: ['Viết từng hàm nhỏ, test ngay.', 'In dữ liệu giữa chừng để kiểm tra.', 'Xử lý lỗi: file không tồn tại, dòng sai định dạng.', 'Đặt tên biến rõ nghĩa.'] },
      { note: 'Một chương trình tốt = nhiều hàm nhỏ tốt + logic main rõ ràng.' },
    ],
    [
      { q: 'Em viết một hàm 100 dòng làm rất nhiều việc. Đánh giá?', a: 'Chưa tốt — hàm dài khó đọc, khó test, khó tái sử dụng. Nên tách thành nhiều hàm nhỏ, mỗi hàm chỉ làm 1 việc rõ ràng (nguyên tắc Single Responsibility).' },
      { q: 'Chương trình lỗi `IndexError: list index out of range`. Em debug thế nào?', a: 'Lỗi này do truy cập chỉ số vượt quá kích thước list. Cách debug: in `len(list)` và chỉ số đang dùng để xem; thêm điều kiện `if i < len(list):` hoặc dùng try-except.' },
    ]
  ),

  'S9TIN-w11-quiz': L(
    'HTML — Cấu trúc trang web',
    'Mạch Web mở đầu với HTML — ngôn ngữ đánh dấu mọi trang web. Hiểu HTML là bước đầu để hiểu Internet.',
    ['Hiểu cấu trúc tài liệu HTML.', 'Nắm các thẻ cơ bản: heading, paragraph, list, link, image.', 'Viết được trang HTML đơn giản.'],
    [
      { h: 'Cấu trúc trang HTML' },
      { p: 'Một trang HTML cơ bản gồm `<!DOCTYPE html>`, `<html>`, `<head>` (chứa metadata, title, css), `<body>` (nội dung hiển thị).' },
      { h: 'Các thẻ phổ biến' },
      { ul: ['Heading: `<h1>` đến `<h6>` — tiêu đề lớn nhỏ.', 'Đoạn văn: `<p>nội dung</p>`.', 'Liên kết: `<a href="url">click</a>`.', 'Hình ảnh: `<img src="url" alt="mô tả">`.', 'Danh sách: `<ul>`, `<ol>`, `<li>`.', 'Đoạn ngắt dòng: `<br>`, đường kẻ ngang: `<hr>`.', 'Nhấn mạnh: `<strong>` (đậm), `<em>` (nghiêng).'] },
      { h: 'Thẻ ngữ nghĩa (semantic)' },
      { ul: ['`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`.', 'Giúp công cụ tìm kiếm và trình đọc màn hình hiểu nội dung.'] },
      { h: 'Thuộc tính (attribute)' },
      { p: 'Thẻ HTML có thể có thuộc tính: `<a href="..." target="_blank">`. `class`, `id` quan trọng cho CSS và JS.' },
      { note: 'Mỗi thẻ mở phải có thẻ đóng (trừ thẻ tự đóng như `<img>`, `<br>`). HTML hợp chuẩn giúp trang chạy ổn định trên nhiều trình duyệt.' },
    ],
    [
      { q: 'Viết HTML đơn giản hiển thị "Trang cá nhân của An" với 1 heading và 1 đoạn giới thiệu.', a: 'html<!DOCTYPE html>\n<html>\n<head><title>Trang An</title></head>\n<body>\n  <h1>Trang cá nhân của An</h1>\n  <p>Tôi là HS lớp 9, yêu thích lập trình và bóng đá.</p>\n</body>\n</html>' },
      { q: 'Vì sao nên dùng thẻ semantic như `<article>` thay vì `<div>`?', a: 'Vì semantic tag mô tả ý nghĩa nội dung — Google SEO tốt hơn, trình đọc màn hình (cho người khiếm thị) hiểu cấu trúc, code dễ đọc cho lập trình viên.' },
    ]
  ),

  'S9TIN-w12-quiz': L(
    'HTML — Form và bảng',
    'Form và bảng là hai thành phần phổ biến để thu thập dữ liệu người dùng và hiển thị thông tin có cấu trúc.',
    ['Tạo form với các loại input.', 'Tạo bảng với table, tr, td, th.', 'Hiểu thuộc tính cơ bản của form.'],
    [
      { h: 'Form cơ bản' },
      { p: '`<form action="url" method="POST">...</form>`. Action: nơi gửi dữ liệu; method: GET (qua URL) hoặc POST (qua body).' },
      { h: 'Các loại input' },
      { ul: ['`<input type="text">` — văn bản.', '`<input type="password">` — mật khẩu.', '`<input type="email">` — email.', '`<input type="number">` — số.', '`<input type="checkbox">` — chọn nhiều.', '`<input type="radio">` — chọn 1.', '`<input type="submit" value="Gửi">` — nút gửi.'] },
      { h: 'Các thẻ khác trong form' },
      { ul: ['`<label for="id">`: nhãn cho input.', '`<textarea>`: vùng văn bản dài.', '`<select>` + `<option>`: dropdown.', '`<button>`: nút.'] },
      { h: 'Bảng (table)' },
      { ul: ['`<table>`: thẻ ngoài.', '`<tr>`: hàng (row).', '`<th>`: ô tiêu đề.', '`<td>`: ô dữ liệu.', '`<thead>`, `<tbody>`, `<tfoot>`: phân nhóm.'] },
      { note: 'Form HTML cần JS để xử lý dữ liệu phía client và server để lưu — sẽ học sau.' },
    ],
    [
      { q: 'Viết form đăng nhập đơn giản gồm email và mật khẩu.', a: 'html<form action="/login" method="POST">\n  <label>Email: <input type="email" name="email" required></label>\n  <label>Mật khẩu: <input type="password" name="password" required></label>\n  <button type="submit">Đăng nhập</button>\n</form>' },
      { q: 'Vẽ bảng HTML hiển thị danh sách 3 HS với cột Tên, Điểm.', a: 'html<table>\n  <thead><tr><th>Tên</th><th>Điểm</th></tr></thead>\n  <tbody>\n    <tr><td>An</td><td>9</td></tr>\n    <tr><td>Bình</td><td>8</td></tr>\n    <tr><td>Châu</td><td>10</td></tr>\n  </tbody>\n</table>' },
    ]
  ),

  'S9TIN-w13-quiz': L(
    'CSS — Định dạng cơ bản',
    'CSS là ngôn ngữ tô điểm cho HTML — quyết định màu sắc, kích thước, vị trí của mọi thứ trên trang.',
    ['Hiểu cú pháp CSS.', 'Sử dụng các selector cơ bản.', 'Nắm các thuộc tính phổ biến.'],
    [
      { h: 'Cú pháp CSS' },
      { p: '`selector { thuộc-tính: giá-trị; ... }`. Ví dụ: `h1 { color: blue; font-size: 24px; }`.' },
      { h: 'Cách thêm CSS' },
      { ul: ['Inline: `<p style="color: red;">`.', 'Internal: `<style>...</style>` trong `<head>`.', 'External: `<link rel="stylesheet" href="style.css">` — cách phổ biến nhất.'] },
      { h: 'Selector phổ biến' },
      { ul: ['`p` → mọi thẻ p.', '`.class-name` → thẻ có class.', '`#id-name` → thẻ có id.', '`div p` → p bên trong div.', '`a:hover` → khi rê chuột.'] },
      { h: 'Thuộc tính phổ biến' },
      { ul: ['`color`, `background-color`.', '`font-size`, `font-family`, `font-weight`.', '`text-align`, `line-height`.', '`width`, `height`.', '`margin` (ngoài), `padding` (trong), `border`.'] },
      { h: 'Đơn vị' },
      { ul: ['`px` cố định, `em`/`rem` tương đối với font-size, `%` tương đối với cha.', '`vw`/`vh` tương đối với viewport.'] },
      { note: 'Best practice: tách CSS ra file riêng — gọn HTML, dễ bảo trì, có thể tái sử dụng cho nhiều trang.' },
    ],
    [
      { q: 'Tô đỏ mọi heading h1 trên trang.', a: 'cssh1 { color: red; }' },
      { q: 'Khi có nhiều CSS cùng tác động lên 1 thẻ, cái nào thắng?', a: 'Theo độ ưu tiên (specificity): inline > id (#) > class (.) > tag. Nếu cùng độ ưu tiên, dòng code sau sẽ thắng. `!important` ép thắng nhưng nên tránh lạm dụng.' },
    ]
  ),

  'S9TIN-w14-quiz': L(
    'CSS — Box model và Layout',
    'Box model là khái niệm cốt lõi của CSS — mọi thẻ HTML đều là một "hộp" có nội dung, padding, border, margin.',
    ['Hiểu box model.', 'Sử dụng display: flex, grid.', 'Tạo layout cơ bản.'],
    [
      { h: 'Box model' },
      { p: 'Mỗi element gồm 4 lớp từ trong ra: content (nội dung) → padding (đệm trong) → border (viền) → margin (lề ngoài).' },
      { h: 'box-sizing' },
      { p: 'Mặc định `content-box`: width chỉ tính content. Best practice: `* { box-sizing: border-box; }` — width gồm cả padding và border, dễ tính toán hơn.' },
      { h: 'display' },
      { ul: ['`block`: chiếm cả dòng (div, p).', '`inline`: nằm cùng dòng (span, a).', '`inline-block`: nằm cùng dòng nhưng có thể đặt width/height.', '`none`: ẩn hoàn toàn.', '`flex`: layout 1 chiều mạnh mẽ.', '`grid`: layout 2 chiều (lưới).'] },
      { h: 'Flexbox' },
      { p: '`display: flex` trên cha. Con tự xếp ngang (`flex-direction: row`) hoặc dọc (`column`). Căn giữa: `justify-content: center; align-items: center;`.' },
      { h: 'Grid' },
      { p: '`display: grid; grid-template-columns: 1fr 1fr 1fr;` — 3 cột bằng nhau. Dùng cho layout phức tạp như dashboard.' },
      { note: 'Học flexbox và grid sẽ giúp em làm được hầu hết layout web hiện đại.' },
    ],
    [
      { q: 'Em muốn căn giữa 1 div theo cả 2 chiều. Cách đơn giản nhất?', a: 'CSS: `display: flex; justify-content: center; align-items: center; height: 100vh;` trên cha. Div con sẽ ở giữa cả ngang lẫn dọc.' },
      { q: 'Width của div là 200px, padding 20px, border 5px. Kích thước thực tế (default box-sizing)?', a: 'Default `content-box`: tổng = 200 + 20×2 + 5×2 = 250px. Nếu dùng `border-box`, tổng vẫn là 200px (padding+border tính vào trong).' },
    ]
  ),

  'S9TIN-w15-quiz': L(
    'JavaScript căn bản',
    'JavaScript làm cho trang web "động" — phản ứng với người dùng, gọi API, tính toán động.',
    ['Biết cú pháp cơ bản JS.', 'Hiểu DOM và cách thao tác.', 'Lắng nghe sự kiện (event).'],
    [
      { h: 'Cú pháp cơ bản' },
      { ul: ['Khai báo: `let x = 5;`, `const y = 10;`, `var z = 1;` (tránh dùng var).', 'Hàm: `function add(a, b) { return a + b; }` hoặc arrow: `const add = (a, b) => a + b;`.', 'Điều kiện và lặp tương tự Python nhưng dùng `{}` và `;`.'] },
      { h: 'Cách nhúng JS' },
      { ul: ['Inline: `<button onclick="...">`.', 'Internal: `<script>...</script>`.', 'External: `<script src="app.js"></script>` (nên đặt cuối body).'] },
      { h: 'DOM (Document Object Model)' },
      { p: 'JS thao tác HTML qua DOM — cây phân cấp các phần tử. `document.getElementById("id")`, `document.querySelector(".class")` để lấy phần tử.' },
      { h: 'Sự kiện (event)' },
      { ul: ['`element.addEventListener("click", function() {...})`.', 'Loại event: click, input, submit, keyup, mouseover...'] },
      { h: 'Thao tác DOM' },
      { ul: ['`el.textContent = "Hello"`.', '`el.innerHTML = "<b>bold</b>"`.', '`el.style.color = "red"`.', '`el.classList.add("active")`.'] },
      { note: 'JS chạy trên trình duyệt — F12 mở DevTools để debug, xem Console, kiểm tra lỗi.' },
    ],
    [
      { q: 'Viết JS hiển thị alert "Xin chào!" khi click vào nút có id "hello".', a: 'javascriptdocument.getElementById("hello").addEventListener("click", () => {\n  alert("Xin chào!");\n});' },
      { q: 'Sự khác nhau giữa `let`, `const`, `var`?', a: '`var` (cũ, phạm vi function, có thể bị "hoisted"). `let` (phạm vi block, có thể gán lại). `const` (phạm vi block, không gán lại được). Best practice: ưu tiên `const`, dùng `let` khi cần gán lại, tránh `var`.' },
    ]
  ),

  'S9TIN-w16-quiz': L(
    'Tạo trang web đơn giản',
    'Tổng hợp HTML + CSS + JS để xây dựng một trang web hoàn chỉnh đầu tiên.',
    ['Thiết kế trang theo wireframe.', 'Tích hợp HTML, CSS, JS.', 'Test trên trình duyệt.'],
    [
      { h: 'Lên kế hoạch' },
      { ul: ['Mục đích trang: gì cho ai?', 'Wireframe: vẽ phác layout trên giấy.', 'Liệt kê nội dung: tiêu đề, hình ảnh, form...', 'Phân chia file: index.html, style.css, app.js.'] },
      { h: 'Xây dựng HTML' },
      { ul: ['Cấu trúc semantic: header / nav / main / footer.', 'Chèn nội dung text và hình ảnh.', 'Form nếu cần thu thập dữ liệu.', 'Đặt class và id rõ ràng cho CSS/JS.'] },
      { h: 'Định dạng bằng CSS' },
      { ul: ['Reset CSS (margin, padding mặc định 0).', 'Đặt màu sắc, font theo chủ đề.', 'Layout bằng flexbox/grid.', 'Responsive với media query.'] },
      { h: 'Tương tác bằng JS' },
      { ul: ['Bắt sự kiện click, submit.', 'Validate form trước khi gửi.', 'Hiển thị/ẩn các phần.', 'Tính toán động.'] },
      { h: 'Test' },
      { ul: ['Mở trên Chrome, Firefox, Safari.', 'Thử trên màn hình điện thoại (DevTools).', 'Kiểm tra Console không có lỗi.'] },
      { note: 'Bắt đầu đơn giản, làm xong rồi cải tiến — đừng cố hoàn hảo ngay từ đầu.' },
    ],
    [
      { q: 'Em làm trang giới thiệu CLB của lớp. Cấu trúc 3 file thế nào?', a: '`index.html` (cấu trúc), `style.css` (định dạng), `script.js` (xử lý form đăng kí). Liên kết qua `<link>` và `<script>` trong HTML.' },
      { q: 'Trang web chạy chậm. Em kiểm tra gì?', a: 'Mở DevTools → tab Network: xem file nào tải lâu, có ảnh quá nặng không. Tab Performance: xem JS chạy chậm ở đâu. Nén ảnh, minify CSS/JS thường giúp nhiều.' },
    ]
  ),

  'S9TIN-w17-quiz': L(
    'Triển khai trang web đơn giản',
    'Học cách đưa trang web lên Internet — bước cuối để mọi người có thể xem.',
    ['Hiểu khái niệm hosting và domain.', 'Biết các nền tảng hosting miễn phí.', 'Triển khai trang tĩnh lên GitHub Pages.'],
    [
      { h: 'Hosting là gì?' },
      { p: 'Hosting là máy chủ lưu trữ trang web 24/7 để người khác truy cập qua Internet. Domain là tên dễ nhớ trỏ vào hosting (ví dụ: vnexpress.net).' },
      { h: 'Các loại hosting' },
      { ul: ['Shared hosting: rẻ, nhiều site chia chung server.', 'VPS: máy ảo riêng, mạnh hơn.', 'Cloud: AWS, Google Cloud, Azure — linh hoạt nhất.', 'Static hosting: cho trang HTML/CSS/JS thuần (Netlify, Vercel, GitHub Pages).'] },
      { h: 'GitHub Pages (miễn phí)' },
      { ul: ['Tạo repo trên GitHub.', 'Push code (index.html + assets).', 'Vào Settings → Pages → chọn branch.', 'Truy cập qua `username.github.io/repo-name`.'] },
      { h: 'Domain cá nhân' },
      { p: 'Mua domain (~10-15$/năm) tại Namecheap, Google Domains. Trỏ DNS về hosting. Có thể trỏ vào GitHub Pages miễn phí.' },
      { h: 'HTTPS' },
      { p: 'Trang web hiện đại bắt buộc dùng HTTPS (có khoá xanh). GitHub Pages, Netlify cấp HTTPS miễn phí qua Let\'s Encrypt.' },
      { note: 'Đưa trang lên Internet là cảm giác tuyệt vời — em thấy sản phẩm của mình hiện trên thế giới thật.' },
    ],
    [
      { q: 'Em muốn share portfolio cho người tuyển dụng. Cách nhanh nhất?', a: 'Đẩy code HTML/CSS lên GitHub, bật GitHub Pages → có URL `username.github.io` ngay trong 5 phút. Hoàn toàn miễn phí và đủ chuyên nghiệp.' },
      { q: 'Vì sao HTTPS quan trọng?', a: 'HTTPS mã hoá dữ liệu giữa trình duyệt và server — bảo vệ thông tin nhạy cảm (mật khẩu, thẻ ngân hàng). Google ưu tiên trang HTTPS trong tìm kiếm. Trang HTTP bị Chrome cảnh báo "không an toàn".' },
    ]
  ),

  'S9TIN-w18-quiz': L(
    'Ôn tập HK1',
    'Tổng kết HK1 — Python nâng cao và Web cơ bản. Chuẩn bị cho bài kiểm tra cuối kì.',
    ['Hệ thống lại Python và Web.', 'Vận dụng vào tình huống thực tế.', 'Tự tin với kĩ năng hiện có.'],
    [
      { h: 'Trọng tâm Python' },
      { ul: ['List, tuple, set, dict — biết khi nào dùng gì.', 'Xử lý chuỗi và file.', 'OOP cơ bản: class, kế thừa.', 'Lập trình hàm và xử lý lỗi.'] },
      { h: 'Trọng tâm Web' },
      { ul: ['HTML semantic, form, table.', 'CSS: box model, flexbox, grid.', 'JavaScript căn bản và DOM.', 'Triển khai trang tĩnh.'] },
      { h: 'Kĩ năng đề thi' },
      { ul: ['Đọc code và dự đoán kết quả.', 'Sửa lỗi code có sẵn (debug).', 'Viết code giải bài toán nhỏ.', 'Vẽ wireframe + viết HTML/CSS cho trang đơn giản.'] },
      { h: 'Mẹo ôn' },
      { p: 'Tự xây 1 dự án nhỏ kết hợp Python + Web (ví dụ: web hiển thị danh sách HS từ file). Vừa ôn, vừa có portfolio.' },
      { note: 'Tin học là môn thực hành — nhớ lý thuyết tốt nhất bằng cách viết code.' },
    ],
    [
      { q: 'Em chưa nắm chắc OOP. Ôn lại bằng cách nào?', a: 'Vẽ class diagram đơn giản: 1 class cha, 2 class con. Code lại, chạy thử. Lặp lại với chủ đề khác (Vehicle → Car, Bike; Animal → Dog, Cat). Sau 3-4 lần em sẽ thấm.' },
      { q: 'Bài "Cho code Python, đoán kết quả". Làm thế nào hiệu quả?', a: 'Đọc từng dòng, ghi giá trị biến vào giấy nháp. Khi gặp vòng lặp, viết bảng theo từng vòng. Đừng đoán nhanh — Python có nhiều ngoặc nghéo (slicing, default arg).' },
    ]
  ),

  'S9TIN-w19-quiz': L(
    'Đạo đức và pháp lý số — Luật An toàn thông tin mạng',
    'HK2 mở đầu với chủ đề đạo đức số — không gian mạng cũng có luật, em cần biết để không vô tình vi phạm.',
    ['Hiểu khái niệm an toàn thông tin mạng.', 'Nắm các quy định cơ bản của Luật An toàn TTM.', 'Có ý thức tuân thủ pháp luật khi online.'],
    [
      { h: 'Luật An toàn thông tin mạng' },
      { p: 'Luật được Quốc hội VN thông qua 2015, có hiệu lực từ 1/7/2016. Quy định nguyên tắc bảo vệ thông tin cá nhân, an toàn hệ thống thông tin.' },
      { h: 'Các hành vi bị cấm' },
      { ul: ['Truy cập trái phép hệ thống.', 'Phát tán virus, mã độc.', 'Đánh cắp, mua bán thông tin cá nhân.', 'Tung tin sai lệch, vu khống.', 'Tổ chức tấn công mạng.', 'Phá hoại cơ sở dữ liệu nhà nước.'] },
      { h: 'Luật An ninh mạng (2018)' },
      { ul: ['Bảo vệ tổ quốc, lợi ích quốc gia trên không gian mạng.', 'Cấm xuyên tạc lịch sử, phủ nhận thành tựu cách mạng.', 'Cấm thông tin sai sự thật gây hoang mang xã hội.'] },
      { h: 'Trách nhiệm của HS' },
      { ul: ['Tôn trọng thông tin cá nhân của người khác.', 'Không lan truyền tin chưa kiểm chứng.', 'Báo cáo hành vi vi phạm khi phát hiện.', 'Tự bảo vệ tài khoản, mật khẩu.'] },
      { note: 'Mạng không phải "vô luật" — mọi hành vi xấu trên mạng đều có thể bị truy cứu theo pháp luật.' },
    ],
    [
      { q: 'Em vô tình hack vào tài khoản bạn để "đùa". Có vi phạm pháp luật không?', a: 'Có. Truy cập trái phép tài khoản người khác — dù là bạn thân — đã vi phạm Luật An toàn TTM. Có thể bị xử phạt hành chính hoặc hình sự tùy mức độ.' },
      { q: 'Em đăng tin "Ngày mai có động đất ở HN" để câu like dù không có thật. Hậu quả pháp lý?', a: 'Vi phạm Luật An ninh mạng — tung tin sai sự thật gây hoang mang. Có thể bị phạt 10-20 triệu đồng hoặc truy cứu hình sự nếu hậu quả nghiêm trọng.' },
    ]
  ),

  'S9TIN-w20-quiz': L(
    'Bản quyền và sở hữu trí tuệ số',
    'Trong thế giới số, mọi thứ đều dễ sao chép — vậy ai sở hữu nội dung? Tuần này tìm hiểu về bản quyền.',
    ['Hiểu khái niệm bản quyền và sở hữu trí tuệ.', 'Nắm các loại tài sản trí tuệ.', 'Tôn trọng bản quyền của người khác.'],
    [
      { h: 'Sở hữu trí tuệ là gì?' },
      { p: 'Là quyền sở hữu đối với tài sản vô hình do trí tuệ con người sáng tạo: tác phẩm, sáng chế, nhãn hiệu, kiểu dáng.' },
      { h: 'Các loại tài sản trí tuệ' },
      { ul: ['Bản quyền tác giả: sách, nhạc, video, mã nguồn.', 'Sáng chế: công nghệ, máy móc mới.', 'Nhãn hiệu: logo, tên thương hiệu.', 'Kiểu dáng công nghiệp: thiết kế sản phẩm.', 'Bí mật kinh doanh: công thức Coca-Cola.'] },
      { h: 'Bản quyền trên Internet' },
      { ul: ['Mặc định: tác giả có bản quyền ngay khi tạo ra tác phẩm.', 'Sao chép, sửa, phát hành phải xin phép.', 'Vi phạm: nhẹ thì bị YouTube/Facebook gỡ, nặng thì kiện ra toà.'] },
      { h: 'Creative Commons (CC)' },
      { p: 'Giấy phép cho phép tác giả chia sẻ tác phẩm với điều kiện rõ ràng (ghi nguồn, phi thương mại...). Wikipedia, ảnh Unsplash dùng CC.' },
      { h: 'Mã nguồn mở (Open Source)' },
      { p: 'Phần mềm cho phép xem, sửa, chia sẻ code. License phổ biến: MIT, Apache, GPL. Linux, Python đều mã nguồn mở.' },
      { note: 'Tôn trọng bản quyền là tôn trọng công sức người sáng tạo — chính em cũng có thể là người sáng tạo trong tương lai.' },
    ],
    [
      { q: 'Em tải nhạc Sơn Tùng từ YouTube rồi đăng lên TikTok kiếm view. Có hợp pháp không?', a: 'Không. Em vi phạm bản quyền tác giả. TikTok có thể xoá video và tài khoản. Nếu kiếm tiền, Sơn Tùng có quyền kiện đòi bồi thường.' },
      { q: 'Em dùng ảnh từ Google cho bài thuyết trình. Có vấn đề gì?', a: 'Nếu chỉ dùng nội bộ (trong lớp) thì thường OK theo "fair use" giáo dục. Nếu đăng web/in ấn thương mại thì cần dùng ảnh có license (Unsplash, Pixabay, hoặc mua từ stock).' },
    ]
  ),

  'S9TIN-w21-quiz': L(
    'An toàn thông tin — Mật khẩu mạnh',
    'Mật khẩu là chìa khoá vào mọi tài khoản. Mật khẩu yếu = mời trộm vào nhà.',
    ['Hiểu thế nào là mật khẩu mạnh.', 'Biết cách quản lý nhiều mật khẩu.', 'Sử dụng xác thực 2 yếu tố.'],
    [
      { h: 'Mật khẩu mạnh là gì?' },
      { ul: ['Tối thiểu 12 kí tự.', 'Có chữ hoa, chữ thường, số, kí tự đặc biệt.', 'Không dùng từ trong từ điển.', 'Không gắn với thông tin cá nhân (ngày sinh, tên).', 'Không tái sử dụng cho nhiều dịch vụ.'] },
      { h: 'Cách tạo mật khẩu nhớ được' },
      { ul: ['Passphrase: 4-5 từ ngẫu nhiên ghép lại: `Bao#TimDi9!Mua`.', 'Lấy chữ đầu từ một câu yêu thích.', 'Dùng Password Manager tạo + lưu hộ.'] },
      { h: 'Password Manager' },
      { p: 'Phần mềm sinh và lưu mật khẩu siêu mạnh, mã hoá toàn bộ. Em chỉ cần nhớ 1 master password. Các tool tốt: Bitwarden (miễn phí, mã nguồn mở), 1Password, KeePass.' },
      { h: 'Xác thực 2 yếu tố (2FA)' },
      { ul: ['Bật ở mọi dịch vụ quan trọng (Gmail, Facebook, ngân hàng).', 'Dùng app authenticator (Google Authenticator, Authy) thay vì SMS.', 'Lưu backup code ở nơi an toàn.'] },
      { h: 'Dấu hiệu tài khoản bị xâm phạm' },
      { ul: ['Có hoạt động bất thường (đăng nhập lạ, tin nhắn gửi đi).', 'Nhận email "thay đổi mật khẩu" mà mình không làm.', 'Nhận OTP mà không yêu cầu.'] },
      { note: 'Đừng đặt mật khẩu `123456` hay `password` — đó là top mật khẩu yếu nhất thế giới mà hacker thử đầu tiên.' },
    ],
    [
      { q: 'Em dùng 1 mật khẩu mạnh cho Gmail, Facebook, ngân hàng. An toàn không?', a: 'Không hoàn toàn. Nếu 1 dịch vụ bị rò rỉ database, hacker có thể dùng mật khẩu đó thử các dịch vụ khác. Mỗi tài khoản nên 1 mật khẩu riêng, dùng Password Manager để quản lý.' },
      { q: '2FA qua SMS có an toàn không?', a: 'Tốt hơn không có, nhưng kém hơn app authenticator. Hacker có thể SIM-swap (chiếm số điện thoại) để chặn SMS. App authenticator tạo OTP offline, an toàn hơn.' },
    ]
  ),

  'S9TIN-w22-quiz': L(
    'An toàn thông tin — OWASP Top 10 cơ bản',
    'OWASP Top 10 là danh sách 10 lỗ hổng bảo mật web phổ biến nhất — hiểu cơ bản để em không vô tình tạo ra trang web dễ bị tấn công.',
    ['Biết khái niệm OWASP.', 'Nắm 3-5 lỗ hổng phổ biến.', 'Hiểu cách phòng tránh cơ bản.'],
    [
      { h: 'OWASP là gì?' },
      { p: 'Open Web Application Security Project — tổ chức phi lợi nhuận chuyên về bảo mật web. OWASP Top 10 cập nhật mỗi 3-4 năm, là tiêu chuẩn cho lập trình viên web.' },
      { h: '5 lỗ hổng phổ biến nhất' },
      { ul: ['SQL Injection: chèn câu SQL vào input để truy vấn DB trái phép.', 'Cross-Site Scripting (XSS): chèn JS độc vào trang web.', 'Broken Authentication: lỗ hổng đăng nhập (mật khẩu yếu, session leak).', 'Sensitive Data Exposure: lưu/truyền dữ liệu nhạy cảm không mã hoá.', 'Security Misconfiguration: cấu hình mặc định không an toàn.'] },
      { h: 'Ví dụ SQL Injection' },
      { p: 'Code: `query = "SELECT * FROM users WHERE name = \'" + input + "\'"`. Nếu input là `\' OR \'1\'=\'1`, kẻ tấn công sẽ lấy được toàn bộ user. Cách phòng: dùng prepared statement (parameterized query).' },
      { h: 'Ví dụ XSS' },
      { p: 'Trang cho phép nhập comment, hiển thị nguyên text. Hacker chèn `<script>steal_cookie()</script>`. Cách phòng: escape HTML khi hiển thị, dùng Content Security Policy.' },
      { h: 'Nguyên tắc chung' },
      { ul: ['Không bao giờ tin input người dùng.', 'Validate cả phía client và server.', 'Mã hoá dữ liệu nhạy cảm khi lưu và truyền.', 'Update thư viện thường xuyên.'] },
      { note: 'An ninh mạng là cuộc đua không hồi kết — luôn cập nhật kiến thức mới.' },
    ],
    [
      { q: 'Trang web cho phép comment HTML không sanitize. Rủi ro?', a: 'XSS — hacker chèn `<script>` đánh cắp cookie, redirect, phá trang. Phải escape `<`, `>`, `&` thành `&lt;`, `&gt;`, `&amp;` trước khi hiển thị.' },
      { q: 'Em viết code: `f"SELECT * FROM users WHERE id = {user_input}"`. Đánh giá?', a: 'Cực kì nguy hiểm — SQL Injection. Phải dùng parameterized query: `cursor.execute("SELECT * FROM users WHERE id = ?", (user_input,))` — DB sẽ xử lý input như giá trị, không thực thi nó như code.' },
    ]
  ),

  'S9TIN-w23-quiz': L(
    'An toàn — Phishing, malware, lừa đảo mạng',
    'Lừa đảo trên mạng ngày càng tinh vi. Biết các chiêu trò giúp em và gia đình tránh mất tiền, mất tài khoản.',
    ['Nhận biết các loại lừa đảo phổ biến.', 'Hiểu phishing, malware, scam.', 'Biết cách phòng tránh và xử lý khi bị tấn công.'],
    [
      { h: 'Phishing là gì?' },
      { p: 'Là lừa người dùng tự nguyện cung cấp thông tin (mật khẩu, OTP, thẻ ngân hàng) qua email/SMS/web giả mạo.' },
      { h: 'Dấu hiệu phishing' },
      { ul: ['Email/SMS hối thúc "khẩn cấp, làm ngay".', 'URL gần giống thật nhưng khác chút (vietcombank-vn.com).', 'Văn phong sai chính tả, thiếu chuyên nghiệp.', 'Yêu cầu cung cấp thông tin nhạy cảm.'] },
      { h: 'Malware (mã độc)' },
      { ul: ['Virus: tự nhân bản, phá file.', 'Trojan: ngụy trang phần mềm bình thường.', 'Ransomware: mã hoá file, đòi tiền chuộc.', 'Spyware: theo dõi hoạt động, lấy cắp thông tin.', 'Adware: hiển thị quảng cáo bừa bãi.'] },
      { h: 'Các chiêu lừa phổ biến VN' },
      { ul: ['Giả mạo công an, viện kiểm sát đòi nộp tiền.', 'Trúng thưởng — phí ship/thuế trước.', 'Việc làm online lương cao — đặt cọc.', 'Chuyển nhầm tiền — nhờ chuyển lại (kèm số tài khoản giả).', 'Tin nhắn từ "người thân" — mượn tiền gấp.'] },
      { h: 'Cách phòng tránh' },
      { ul: ['Không click link lạ.', 'Tải app từ store chính thức (App Store, Google Play).', 'Bật antivirus cập nhật.', 'Bật 2FA cho mọi tài khoản quan trọng.', 'Không tin chuyện gì "quá tốt là đúng".'] },
      { note: 'Quy tắc vàng: gặp chuyện liên quan đến tiền, BÌNH TĨNH gọi điện trực tiếp xác minh trước khi làm bất kì điều gì.' },
    ],
    [
      { q: 'Em nhận SMS: "Tài khoản ngân hàng bạn bị khoá, click link để xác minh". Cách xử lý?', a: 'Tuyệt đối không click. Ngân hàng không bao giờ yêu cầu xác minh qua SMS có link. Vào app ngân hàng chính thức hoặc gọi hotline để kiểm tra. Xoá SMS, có thể báo cáo lên Bộ Công an.' },
      { q: 'Bạn gửi link "phim hay xem này" qua Facebook. Em có nên click?', a: 'Cẩn thận — có thể bạn bị hack, link dẫn đến web độc. Hỏi lại bạn qua kênh khác (gọi điện) trước khi click. Nếu bạn không gửi, báo cho bạn biết tài khoản đã bị xâm phạm.' },
    ]
  ),

  'S9TIN-w24-quiz': L(
    'Bảo vệ thông tin cá nhân',
    'Thông tin cá nhân là tài sản trong thời đại số. Bảo vệ tốt sẽ giúp em tránh nhiều rủi ro.',
    ['Hiểu khái niệm thông tin cá nhân.', 'Biết cách thiết lập quyền riêng tư.', 'Tuân thủ luật bảo vệ dữ liệu.'],
    [
      { h: 'Thông tin cá nhân là gì?' },
      { p: 'Là thông tin xác định danh tính cá nhân: họ tên, CCCD, ngày sinh, địa chỉ, số điện thoại, email, ảnh, vân tay, thông tin sinh học.' },
      { h: 'Vì sao cần bảo vệ?' },
      { ul: ['Tránh bị mạo danh.', 'Tránh bị lừa đảo, làm phiền.', 'Bảo vệ quyền riêng tư.', 'Tuân thủ pháp luật.'] },
      { h: 'Nguyên tắc bảo vệ' },
      { ul: ['Chỉ cung cấp thông tin khi thực sự cần.', 'Đọc kĩ chính sách quyền riêng tư trước khi đồng ý.', 'Không đăng CCCD, sổ hộ khẩu lên mạng.', 'Hạn chế share thông tin nhạy cảm qua mạng xã hội.', 'Cấu hình quyền riêng tư trên Facebook, Instagram.'] },
      { h: 'Quyền của em theo luật VN' },
      { ul: ['Quyền được biết thông tin của mình đang ở đâu.', 'Quyền yêu cầu xoá, sửa thông tin.', 'Quyền khiếu nại khi bị xâm phạm.', 'Quyền không bị thu thập thông tin trái phép.'] },
      { h: 'Nghị định 13/2023' },
      { p: 'Quy định cụ thể về bảo vệ dữ liệu cá nhân tại VN — tương tự GDPR của châu Âu. Doanh nghiệp vi phạm bị phạt nặng.' },
      { note: 'Nguyên tắc tối thiểu hoá: chỉ cung cấp ít nhất có thể, không nhiều hơn cần thiết.' },
    ],
    [
      { q: 'Em đăng ảnh CCCD lên Facebook khoe "Hôm nay được cấp CCCD mới". Đánh giá?', a: 'Cực kì nguy hiểm. Kẻ xấu có thể dùng ảnh CCCD để mở tài khoản ngân hàng giả, vay tín dụng đen mạo danh em. Xoá ảnh ngay; nếu muốn khoe, che kín số CCCD và thông tin nhạy cảm.' },
      { q: 'App game yêu cầu quyền truy cập danh bạ, vị trí, ảnh. Em có nên cho?', a: 'Game đơn giản KHÔNG cần các quyền này. Có thể app thu thập dữ liệu để bán cho bên thứ 3. Từ chối các quyền không liên quan; nếu app không cho chơi tiếp, gỡ và tìm app khác uy tín hơn.' },
    ]
  ),

  'S9TIN-w25-quiz': L(
    'AI cơ bản — Khái niệm và ứng dụng',
    'AI đang định hình lại thế giới. Hiểu cơ bản giúp em biết AI có thể làm gì, không làm được gì, và làm việc cùng AI hiệu quả.',
    ['Hiểu khái niệm AI, ML, DL.', 'Nắm các ứng dụng AI phổ biến.', 'Có cái nhìn cân bằng về AI.'],
    [
      { h: 'AI là gì?' },
      { p: 'Trí tuệ nhân tạo (Artificial Intelligence) là khoa học làm cho máy tính thực hiện được những việc cần "trí thông minh" như con người: nhìn, nghe, hiểu ngôn ngữ, ra quyết định.' },
      { h: 'AI - ML - DL' },
      { ul: ['AI (lớn nhất): trí tuệ nhân tạo nói chung.', 'ML (Machine Learning): máy học từ dữ liệu thay vì lập trình cứng.', 'DL (Deep Learning): ML dùng mạng neural sâu — đột phá lớn từ 2012.', 'LLM (Large Language Model): mô hình ngôn ngữ lớn như ChatGPT, Claude.'] },
      { h: 'Ứng dụng AI phổ biến' },
      { ul: ['Trợ lý ảo: Siri, Google Assistant, ChatGPT.', 'Dịch máy: Google Translate.', 'Xe tự lái: Tesla, Waymo.', 'Y tế: chẩn đoán hình ảnh, dự đoán bệnh.', 'Tài chính: phát hiện gian lận, dự báo.', 'Sáng tạo: tạo ảnh (Midjourney), tạo video, tạo nhạc.'] },
      { h: 'AI làm tốt gì?' },
      { ul: ['Xử lý lượng dữ liệu lớn nhanh chóng.', 'Nhận dạng mẫu, phân loại.', 'Tự động hoá công việc lặp lại.', 'Hỗ trợ ra quyết định dựa trên data.'] },
      { h: 'AI chưa làm tốt gì?' },
      { ul: ['Hiểu cảm xúc và bối cảnh thực sự.', 'Sáng tạo nguyên gốc 100%.', 'Đạo đức và phán đoán phức tạp.', 'Bịa thông tin (hallucination) khi không biết.'] },
      { note: 'AI là công cụ — biết tận dụng thì là cánh tay nối dài; phụ thuộc mù quáng thì là gánh nặng.' },
    ],
    [
      { q: 'AI có thay thế hoàn toàn giáo viên không?', a: 'Khó. AI hỗ trợ tốt cho tự học, giải bài tập, dịch ngôn ngữ. Nhưng giáo viên còn truyền cảm hứng, nhận biết cảm xúc HS, định hướng nhân cách — những việc AI chưa làm được. Tương lai sẽ là "giáo viên + AI".' },
      { q: 'Em hỏi ChatGPT "Lê Lợi sinh năm nào". ChatGPT trả lời sai. Tại sao?', a: 'Vì AI có thể "hallucinate" — bịa thông tin một cách thuyết phục. Phải đối chiếu với nguồn uy tín (sách giáo khoa, Wikipedia tiếng Việt) trước khi tin.' },
    ]
  ),

  'S9TIN-w26-quiz': L(
    'AI — Deepfake và đạo đức AI',
    'AI có thể tạo nội dung giả với chất lượng cao — deepfake là một mặt trái nghiêm trọng cần biết để tự bảo vệ.',
    ['Hiểu khái niệm deepfake.', 'Biết các tác hại của AI nếu lạm dụng.', 'Có ý thức sử dụng AI có đạo đức.'],
    [
      { h: 'Deepfake là gì?' },
      { p: 'Công nghệ AI tạo video/ảnh/giọng nói giả nhưng chân thực — ghép mặt người này vào người khác, giả giọng người nổi tiếng.' },
      { h: 'Tác hại của deepfake' },
      { ul: ['Lừa đảo: giả giọng người thân nhờ chuyển tiền.', 'Tin giả: ghép mặt chính trị gia phát ngôn không thật.', 'Vu khống, bôi nhọ danh dự cá nhân.', 'Lừa tình cảm với hình ảnh giả.', 'Làm suy giảm niềm tin vào media nói chung.'] },
      { h: 'Cách nhận biết deepfake' },
      { ul: ['Khuôn mặt, miệng, mắt có chuyển động không tự nhiên.', 'Ánh sáng và bóng đổ không khớp.', 'Da quá mịn hoặc có nhiễu lạ.', 'Giọng nói robot hoặc nhịp thở không đều.', 'Đối chiếu với nguồn chính thức.'] },
      { h: 'Đạo đức AI' },
      { ul: ['Minh bạch: ghi rõ nội dung do AI tạo.', 'Tôn trọng quyền cá nhân: không ghép mặt người khác mà không xin phép.', 'Không tạo nội dung độc hại, vu khống.', 'Không lạm dụng để làm bài hộ, gian lận.'] },
      { h: 'Quy định pháp luật' },
      { p: 'EU đã có AI Act. VN đang xây dựng quy định. Tạo deepfake nhằm xúc phạm, lừa đảo có thể bị xử lý hình sự.' },
      { note: 'Quy tắc cho người dùng AI: "Nếu bạn không thoải mái khi nội dung đó được công khai, đừng tạo ra".' },
    ],
    [
      { q: 'Em thấy video "Chủ tịch nước phát biểu" lan truyền. Cách kiểm chứng?', a: 'Vào website chính thức (báo Nhân Dân, VOV, VTV). Nếu video chỉ trên Facebook/TikTok, có thể là deepfake. Kiểm tra ngày đăng, nguồn ban đầu, và đối chiếu với báo lớn.' },
      { q: 'Em ghép mặt thầy giáo vào video hài để đùa với bạn. Có sao không?', a: 'Rất không nên. Dù đùa, đó là sử dụng hình ảnh thầy không xin phép, có thể bị coi là xúc phạm danh dự. Nếu video lan ra ngoài, em có thể bị kỉ luật và truy cứu pháp luật.' },
    ]
  ),

  'S9TIN-w27-quiz': L(
    'AI — Prompt engineering cơ bản',
    'Biết viết prompt tốt sẽ giúp em dùng AI hiệu quả gấp nhiều lần — đây là kĩ năng mới của thế kỉ 21.',
    ['Hiểu khái niệm prompt.', 'Nắm các nguyên tắc viết prompt tốt.', 'Áp dụng AI vào học tập có trách nhiệm.'],
    [
      { h: 'Prompt là gì?' },
      { p: 'Prompt là câu lệnh/câu hỏi em đưa cho AI. Chất lượng prompt quyết định 80% chất lượng câu trả lời.' },
      { h: 'Nguyên tắc viết prompt tốt' },
      { ul: ['Cụ thể, rõ ràng: không hỏi mơ hồ.', 'Đặt bối cảnh: "Em là HS lớp 9, đang ôn thi vào 10".', 'Xác định vai trò AI: "Hãy đóng vai giáo viên Toán...".', 'Nêu format đầu ra mong muốn: bullet, bảng, đoạn văn.', 'Cho ví dụ nếu có (few-shot).', 'Yêu cầu giải thích nếu cần.'] },
      { h: 'Mẫu prompt 4 phần' },
      { ul: ['Role: Em đóng vai...', 'Context: Tôi đang...', 'Task: Hãy giúp tôi...', 'Format: Trình bày theo dạng...'] },
      { h: 'Ví dụ prompt kém vs tốt' },
      { p: 'Kém: "Giúp tôi học Toán". Tốt: "Em là HS lớp 9 sắp thi vào 10. Hãy đóng vai gia sư Toán giảng cho tôi cách giải phương trình bậc 2 bằng định lý Viet, có ví dụ minh hoạ và 3 bài tập tự luyện kèm đáp án".' },
      { h: 'Cảnh báo' },
      { ul: ['Không copy nguyên câu trả lời AI vào bài làm.', 'Luôn kiểm chứng thông tin AI cung cấp.', 'AI có thể bịa — đặc biệt với số liệu, tài liệu tham khảo.', 'Dùng AI để học, không phải để gian lận.'] },
      { note: 'Người giỏi prompt là người biết câu hỏi đúng — đó là kĩ năng tư duy phản biện.' },
    ],
    [
      { q: 'Em hỏi AI: "Giải bài toán hộ tôi: 2x + 3 = 7". Đánh giá prompt?', a: 'Tốt cho mục đích đơn giản. Tốt hơn: "Hãy hướng dẫn tôi giải pt 2x+3=7 từng bước, giải thích lý do mỗi bước, để tôi hiểu cách giải các pt tương tự" — em học được cách giải, không chỉ đáp án.' },
      { q: 'AI giúp em viết bài văn 100%. Em nộp như bài của mình. Đánh giá?', a: 'Đó là gian lận. Mục tiêu môn Văn là rèn tư duy, cảm thụ — không phải nộp văn bản. Em nên dùng AI làm dàn ý gợi ý, sau đó tự viết để rèn năng lực thực sự.' },
    ]
  ),

  'S9TIN-w28-quiz': L(
    'Nghề CNTT — Tổng quan ngành',
    'Mạch hướng nghiệp HK2 — tìm hiểu các nghề trong ngành CNTT để các em có thêm cơ sở chọn hướng đi sau lớp 9.',
    ['Nắm bức tranh tổng quan ngành CNTT.', 'Hiểu các nhóm nghề chính.', 'Biết yêu cầu chung của ngành.'],
    [
      { h: 'Ngành CNTT bao gồm gì?' },
      { p: 'Là ngành liên quan đến phát triển, triển khai, vận hành các hệ thống máy tính, phần mềm, mạng — phục vụ mọi lĩnh vực của xã hội.' },
      { h: 'Các nhóm nghề lớn' },
      { ul: ['Developer (lập trình viên): viết code phần mềm, web, mobile.', 'Designer (UI/UX): thiết kế giao diện.', 'Data: phân tích, khoa học dữ liệu.', 'Security: bảo mật, an ninh mạng.', 'DevOps/SRE: triển khai, vận hành hệ thống.', 'PM (Project Manager): quản lý dự án.', 'QA (Quality Assurance): kiểm thử.', 'AI/ML Engineer: chuyên về AI.'] },
      { h: 'Đặc điểm ngành' },
      { ul: ['Thay đổi nhanh — phải tự học liên tục.', 'Có thể làm việc từ xa, freelance.', 'Thu nhập cao so với mặt bằng.', 'Cơ hội làm việc cho công ty toàn cầu.', 'Yêu cầu tư duy logic, kiên nhẫn.'] },
      { h: 'Hiểu lầm phổ biến' },
      { ul: ['"Làm CNTT là dân ngại giao tiếp" — sai, kĩ năng mềm rất quan trọng.', '"Phải giỏi Toán mới làm được" — đúng cho 1 số mảng, không phải tất cả.', '"Học trường top mới có việc" — sai, năng lực và sản phẩm thực tế quan trọng hơn bằng cấp.'] },
      { note: 'Việt Nam đang thiếu trầm trọng nhân lực CNTT chất lượng cao — cơ hội cho thế hệ các em rất lớn.' },
    ],
    [
      { q: 'Em không giỏi Toán có theo CNTT được không?', a: 'Được, tuỳ mảng. Toán quan trọng cho ML/Data Science, hệ thống nhúng. Mảng UI/UX, frontend, QA, PM cần Toán cơ bản. Quan trọng nhất là tư duy logic và kiên trì.' },
      { q: 'Học CNTT bắt buộc phải vào đại học không?', a: 'Không bắt buộc. Có thể học trung cấp/cao đẳng nghề + tự học + làm dự án thực tế. Nhiều dev giỏi tự học. Tuy nhiên đại học cho nền tảng lý thuyết tốt — lợi thế lâu dài.' },
    ]
  ),

  'S9TIN-w29-quiz': L(
    'Nghề CNTT — Developer (Lập trình viên)',
    'Lập trình viên là nghề "lõi" của CNTT — đông đảo và đa dạng nhất.',
    ['Hiểu công việc của developer.', 'Phân biệt frontend, backend, fullstack, mobile.', 'Biết lộ trình học cơ bản.'],
    [
      { h: 'Developer làm gì?' },
      { p: 'Viết, kiểm thử và bảo trì code phần mềm để giải quyết bài toán cụ thể — từ trang web bán hàng đến ứng dụng ngân hàng.' },
      { h: 'Các loại developer' },
      { ul: ['Frontend: lập trình giao diện người dùng (HTML/CSS/JS, React, Vue).', 'Backend: lập trình logic server, database (Node.js, Python, Java, Go).', 'Fullstack: làm cả 2.', 'Mobile: iOS (Swift), Android (Kotlin), cross-platform (React Native, Flutter).', 'Game: Unity (C#), Unreal (C++).', 'Embedded: lập trình thiết bị (C, Rust).'] },
      { h: 'Kĩ năng cần có' },
      { ul: ['Thành thạo ít nhất 1 ngôn ngữ lập trình.', 'Hiểu cấu trúc dữ liệu và thuật toán.', 'Git và làm việc nhóm.', 'Đọc tiếng Anh kĩ thuật.', 'Tư duy giải quyết vấn đề.', 'Học liên tục — công nghệ thay đổi nhanh.'] },
      { h: 'Lộ trình điển hình' },
      { ul: ['Năm 1-2 đại học: học CS cơ bản, 1 ngôn ngữ.', 'Năm 3-4: chuyên ngành, làm project, thực tập.', 'Mới ra trường: junior 1-2 năm.', 'Trung cấp: middle developer 2-5 năm.', 'Cao cấp: senior/lead/architect 5+ năm.'] },
      { h: 'Thu nhập (VN, 2025)' },
      { ul: ['Fresher: 8-15 triệu/tháng.', 'Junior: 15-25 triệu/tháng.', 'Middle: 25-50 triệu/tháng.', 'Senior: 50-100+ triệu/tháng.'] },
      { note: 'Portfolio (sản phẩm thực tế trên GitHub) quan trọng hơn bằng cấp khi xin việc dev.' },
    ],
    [
      { q: 'Em mới bắt đầu lập trình, nên học ngôn ngữ nào trước?', a: 'Python — cú pháp đơn giản, ứng dụng đa dạng (web, AI, data). Sau đó học JS để làm web. Khi vững, có thể thử Java/Go cho backend chuyên nghiệp.' },
      { q: 'Frontend hay backend dễ hơn?', a: 'Tùy người. Frontend trực quan (thấy ngay kết quả) nhưng phải nắm 3 ngôn ngữ (HTML/CSS/JS) và nhiều framework. Backend phức tạp hơn về logic, database, hiệu năng nhưng ít thay đổi nhanh hơn.' },
    ]
  ),

  'S9TIN-w30-quiz': L(
    'Nghề CNTT — Designer (UI/UX)',
    'Thiết kế giao diện vừa là nghệ thuật vừa là khoa học — kết nối giữa người dùng và sản phẩm số.',
    ['Hiểu khái niệm UI và UX.', 'Biết quy trình thiết kế.', 'Hiểu sự khác biệt với developer.'],
    [
      { h: 'UI và UX là gì?' },
      { ul: ['UI (User Interface): giao diện người dùng — màu sắc, font, layout.', 'UX (User Experience): trải nghiệm người dùng — cảm giác khi dùng sản phẩm.', 'Designer giỏi UX trước, UI sau.'] },
      { h: 'Designer làm gì?' },
      { ul: ['Nghiên cứu người dùng (user research).', 'Vẽ wireframe (khung sơ lược).', 'Thiết kế mockup (giao diện chi tiết).', 'Tạo prototype có thể tương tác.', 'Test với người dùng thật.', 'Bàn giao cho developer.'] },
      { h: 'Công cụ phổ biến' },
      { ul: ['Figma (phổ biến nhất hiện nay).', 'Adobe XD.', 'Sketch (Mac only).', 'Adobe Illustrator, Photoshop cho asset.'] },
      { h: 'Kĩ năng cần có' },
      { ul: ['Cảm quan thẩm mỹ.', 'Hiểu nguyên tắc thiết kế (typography, color theory, layout).', 'Tư duy đồng cảm với người dùng.', 'Khả năng giao tiếp với developer và stakeholder.', 'Hiểu cơ bản về code (HTML/CSS).'] },
      { h: 'Lộ trình' },
      { ul: ['Học design fundamentals.', 'Thực hành Figma hằng ngày.', 'Làm portfolio 3-5 dự án thực tế.', 'Thực tập tại agency hoặc startup.', 'Lên junior → senior designer.'] },
      { note: 'Designer giỏi không chỉ làm "đẹp" — họ giải bài toán: làm thế nào để người dùng đạt mục tiêu nhanh nhất, dễ nhất.' },
    ],
    [
      { q: 'Em vẽ giao diện đẹp nhưng người dùng không hiểu cách dùng. Vấn đề ở đâu?', a: 'UX có vấn đề. Đẹp ≠ dễ dùng. Designer cần test với người dùng thật, quan sát họ thao tác, điều chỉnh để giao diện trực quan, có logic rõ ràng.' },
      { q: 'Designer có cần biết code không?', a: 'Không bắt buộc, nhưng nên biết cơ bản HTML/CSS. Hiểu được cái gì có thể làm, cái gì khó — sẽ làm việc với developer hiệu quả hơn nhiều.' },
    ]
  ),

  'S9TIN-w31-quiz': L(
    'Nghề CNTT — Data Analyst & Data Scientist',
    'Dữ liệu là "dầu mỏ mới" của thế kỉ 21. Hai nghề Data Analyst và Data Scientist đang phát triển bùng nổ.',
    ['Phân biệt Data Analyst và Data Scientist.', 'Hiểu công cụ và kĩ năng cơ bản.', 'Biết lộ trình học.'],
    [
      { h: 'Data Analyst' },
      { ul: ['Phân tích dữ liệu để trả lời câu hỏi kinh doanh: "Tháng nào doanh thu cao nhất?".', 'Tạo dashboard, báo cáo cho lãnh đạo.', 'Tập trung vào "đã xảy ra" và "đang xảy ra".'] },
      { h: 'Data Scientist' },
      { ul: ['Xây dựng mô hình AI/ML để dự đoán: "Khách nào sẽ rời bỏ?".', 'Áp dụng thống kê và machine learning.', 'Tập trung vào "sẽ xảy ra" và "cách tối ưu".'] },
      { h: 'Kĩ năng cần thiết' },
      { ul: ['Data Analyst: SQL, Excel nâng cao, Power BI/Tableau, Python cơ bản.', 'Data Scientist: Python/R, ML (scikit-learn, TensorFlow), thống kê, toán cao cấp.', 'Cả hai: tư duy phân tích, kĩ năng kể chuyện bằng data.'] },
      { h: 'Lộ trình học' },
      { ul: ['Học Excel + SQL thành thạo.', 'Học Python cơ bản và pandas.', 'Học thống kê (mean, median, variance, correlation).', 'Làm dự án thực tế từ dataset Kaggle.', 'Lên Data Analyst trước, sau đó học ML để chuyển sang Data Scientist.'] },
      { h: 'Cơ hội nghề' },
      { p: 'Rất rộng — ngân hàng, e-commerce, marketing, logistics, y tế... đều cần data người. Có thể làm việc remote cho công ty nước ngoài.' },
      { note: 'Data Analyst dễ vào hơn Data Scientist — phù hợp cho người mới chuyển ngành.' },
    ],
    [
      { q: 'Em thích phân tích nhưng kém toán cao cấp. Nên chọn DA hay DS?', a: 'Data Analyst phù hợp hơn — chủ yếu dùng thống kê cơ bản và truy vấn SQL. Học xong có thể làm việc, dần dần học thêm ML để chuyển sang DS nếu muốn.' },
      { q: 'AI có thay thế Data Analyst không?', a: 'AI tự động hoá một số task (tạo report, query đơn giản) nhưng không thay được tư duy phân tích bối cảnh kinh doanh, kể chuyện cho lãnh đạo, đặt câu hỏi đúng. DA biết dùng AI sẽ rất mạnh.' },
    ]
  ),

  'S9TIN-w32-quiz': L(
    'Nghề CNTT — Security & DevOps',
    'Security và DevOps là 2 nghề "đặc thù" nhưng cực kì quan trọng — thiếu họ không hệ thống nào hoạt động ổn định.',
    ['Hiểu vai trò Security Engineer.', 'Hiểu vai trò DevOps.', 'Biết kĩ năng cần thiết.'],
    [
      { h: 'Security Engineer' },
      { ul: ['Bảo vệ hệ thống khỏi tấn công.', 'Pentest (kiểm thử xâm nhập) chủ động.', 'Phản ứng khi có sự cố.', 'Thiết kế hệ thống an toàn từ đầu.'] },
      { h: 'Phân nhánh Security' },
      { ul: ['Application Security: bảo mật phần mềm.', 'Network Security: bảo mật mạng.', 'Cloud Security: bảo mật AWS, GCP.', 'Red Team: tấn công thử (offensive).', 'Blue Team: phòng thủ.'] },
      { h: 'DevOps' },
      { ul: ['Kết hợp Dev (developer) + Ops (operations).', 'Tự động hoá triển khai (CI/CD).', 'Vận hành hạ tầng (Kubernetes, Docker).', 'Monitoring, logging, alerting.', 'Đảm bảo hệ thống hoạt động 24/7.'] },
      { h: 'Kĩ năng cần thiết' },
      { ul: ['Security: hiểu HTH (network, OS), scripting, biết các loại tấn công, chứng chỉ CEH/OSCP.', 'DevOps: Linux, Docker, Kubernetes, AWS/GCP, scripting (Bash, Python), CI/CD tools (Jenkins, GitLab CI).'] },
      { h: 'Thu nhập' },
      { p: 'Cả hai nghề thường có thu nhập cao hơn dev thuần do tính chuyên môn sâu và trách nhiệm lớn (đảm bảo hệ thống 24/7).' },
      { note: 'Nghề "không thấy mặt" — khi bạn làm tốt, không ai biết; khi có sự cố, cả công ty kêu.' },
    ],
    [
      { q: 'Em thích tìm lỗ hổng bảo mật. Nghề nào phù hợp?', a: 'Penetration Tester (Red Team) — tấn công có đạo đức vào hệ thống để tìm lỗ hổng trước khi hacker xấu phát hiện. Cần học CEH, OSCP và rèn kĩ năng qua Hack The Box, TryHackMe.' },
      { q: 'DevOps khác Backend Developer thế nào?', a: 'Backend Dev viết logic xử lý. DevOps lo việc đưa code đó lên production và đảm bảo hoạt động ổn định: server, scaling, monitoring, deployment. Nhiều công ty nhỏ thì 1 người làm cả 2.' },
    ]
  ),

  'S9TIN-w33-quiz': L(
    'Ứng xử văn minh trên mạng',
    'Văn hoá ứng xử trên mạng phản ánh nhân cách. Một câu comment có thể quyết định em được tôn trọng hay không.',
    ['Hiểu nguyên tắc ứng xử văn minh.', 'Biết phòng tránh và phản ứng với bắt nạt mạng.', 'Xây dựng hình ảnh cá nhân tích cực.'],
    [
      { h: 'Nguyên tắc ứng xử văn minh' },
      { ul: ['Tôn trọng người khác như đối diện thực sự.', 'Suy nghĩ trước khi gõ — không comment khi nóng giận.', 'Tránh chữ viết tắt khó hiểu, viết hoa khoe sự tức giận.', 'Tranh luận về quan điểm, không công kích cá nhân.', 'Không lan truyền tin chưa kiểm chứng.'] },
      { h: 'Cyberbullying (bắt nạt mạng)' },
      { ul: ['Hình thức: chế giễu, đe doạ, lan tin xấu, lập group nói xấu.', 'Hậu quả: nạn nhân stress, trầm cảm, có thể tự tử.', 'Pháp luật VN: vi phạm có thể bị phạt hành chính hoặc hình sự.'] },
      { h: 'Khi bị bắt nạt mạng' },
      { ul: ['Không trả đũa.', 'Lưu lại bằng chứng (screenshot).', 'Chặn người gây hại.', 'Báo cha mẹ, thầy cô, người tin cậy.', 'Nếu nghiêm trọng: báo công an.'] },
      { h: 'Xây dựng hình ảnh tích cực' },
      { ul: ['Post nội dung có giá trị (chia sẻ kiến thức, tác phẩm).', 'Tránh post quá nhiều drama cá nhân.', 'Nhớ: Internet không quên — bài đăng 5 năm trước vẫn có thể tìm thấy.', 'Cha mẹ tuyển dụng tương lai có thể xem profile.'] },
      { note: '"Nếu không nói được điều đó trước mặt người khác, đừng nói trên mạng" — quy tắc vàng.' },
    ],
    [
      { q: 'Em thấy bạn bị bắt nạt trên Facebook. Em nên làm gì?', a: 'Không "hùa theo cười". Nhắn riêng động viên bạn. Khuyên bạn lưu bằng chứng và báo cha mẹ/thầy cô. Có thể cùng bạn báo cáo bài viết đó với Facebook. Nếu nghiêm trọng, ủng hộ bạn nhờ pháp luật can thiệp.' },
      { q: 'Em đăng ảnh tiệc sinh nhật say sưa. Có ảnh hưởng tương lai không?', a: 'Có. Khi xin việc, nhiều công ty kiểm tra mạng xã hội ứng viên. Ảnh "quậy" có thể làm em mất cơ hội. Set chế độ private cho ảnh riêng tư, public chỉ những gì em thoải mái cho cả thế giới xem.' },
    ]
  ),

  'S9TIN-w34-quiz': L(
    'Định hướng học CNTT — Sau cấp 2',
    'Tổng kết mạch hướng nghiệp CNTT — giúp các em lên kế hoạch cụ thể nếu theo ngành này.',
    ['Nắm các con đường học CNTT.', 'Biết tự chuẩn bị từ HS.', 'Có kế hoạch học tập cụ thể.'],
    [
      { h: 'Các con đường học CNTT' },
      { ul: ['THPT chuyên Tin: trường chuyên cấp 3 — học sâu lập trình.', 'THPT thường + tự học: cấp 3 đại trà nhưng tự học CNTT.', 'Trung cấp/Cao đẳng nghề: ra làm sớm (3-4 năm).', 'Du học CNTT: lựa chọn nếu có điều kiện.', 'Bootcamp: chương trình 3-6 tháng (sau cấp 3).'] },
      { h: 'Các trường đại học CNTT VN' },
      { ul: ['Top: Đại học Bách Khoa Hà Nội, ĐH Khoa học Tự nhiên (ĐHQGHN), UIT.', 'Tốt: ĐH FPT, ĐH PTIT, ĐH Sư phạm Kĩ thuật.', 'Mới nổi: ĐH VinUni, ĐH FUNiX (học online).'] },
      { h: 'Tự chuẩn bị từ THCS' },
      { ul: ['Học Toán, Tin học nhà trường thật vững.', 'Tự học Python qua Codelab, Scratch.', 'Tham gia thi Tin học trẻ, ICPC.', 'Tham gia CLB lập trình.', 'Đọc sách CNTT, học tiếng Anh.'] },
      { h: 'Kĩ năng phải có khi vào ngành' },
      { ul: ['Toán: logic, đại số, xác suất thống kê.', 'Tiếng Anh: đọc tài liệu, video.', 'Tự học và kiên trì.', 'Làm việc nhóm.', 'Sản phẩm thực tế trên GitHub.'] },
      { note: 'Lập kế hoạch dài hạn nhưng làm từ việc nhỏ ngày hôm nay — đó là cách thành công nhất.' },
    ],
    [
      { q: 'Em đang lớp 9, muốn theo CNTT. Lộ trình 3 năm tới?', a: 'Năm 9: thi đỗ THPT chuyên Tin nếu có thể; nếu không, vào trường tốt nhất khu vực. Năm 10-12: học tốt Toán/Lý/Anh, tự học Python + Web; làm 2-3 dự án; tham gia thi Tin học trẻ; chuẩn bị thi đại học hoặc du học.' },
      { q: 'Em không muốn vào đại học, có học CNTT được không?', a: 'Được — qua trung cấp nghề, bootcamp, hoặc tự học. Có thể trở thành dev tốt mà không cần bằng đại học. Nhưng cần chứng minh năng lực qua dự án thực tế và phải tự học liên tục.' },
    ]
  ),

  'S9TIN-w35-quiz': L(
    'Tổng kết môn — Liên hệ thực tế',
    'Tuần cuối — nhìn lại hành trình Tin học lớp 9 và tiếp tục con đường học suốt đời.',
    ['Hệ thống lại toàn bộ kiến thức năm.', 'Vận dụng vào học tập và đời sống.', 'Đặt nền móng cho việc học CNTT sau này.'],
    [
      { h: 'Nhìn lại các mạch lớn' },
      { ul: ['Python nâng cao: cấu trúc dữ liệu, OOP, file I/O.', 'Web: HTML, CSS, JS, triển khai.', 'An toàn số: bản quyền, bảo mật, mật khẩu mạnh.', 'AI: khái niệm, deepfake, prompt engineering.', 'Hướng nghiệp CNTT: developer, designer, data, security.'] },
      { h: 'Vận dụng trong học tập' },
      { ul: ['Dùng Python tính toán nhanh các bài toán.', 'Làm trang web cho dự án nhóm.', 'Dùng AI hỗ trợ học bài (đặt câu hỏi đúng).', 'Bảo vệ thông tin cá nhân khi online.'] },
      { h: 'Vận dụng trong đời sống' },
      { ul: ['Tự bảo vệ tài khoản, tránh lừa đảo.', 'Hỗ trợ gia đình dùng công nghệ an toàn.', 'Đánh giá tin tức, phân biệt fake news.', 'Lập kế hoạch nghề nghiệp.'] },
      { h: 'Học tập suốt đời' },
      { p: 'Công nghệ thay đổi mỗi tháng. Quan trọng nhất em mang theo: tư duy logic, kĩ năng tự học, ý thức học từ thất bại, và tinh thần không sợ thử cái mới.' },
      { h: 'Lời chia tay' },
      { p: 'Lớp 9 Tin học khép lại với rất nhiều kĩ năng. Dù em có theo ngành CNTT hay không, năng lực số tốt sẽ giúp em thành công trong mọi lĩnh vực. Chúc các em thi vào 10 đỗ trường mong muốn.' },
      { note: 'Câu nói cuối: "Học code không phải để làm code suốt đời — mà để rèn cách tư duy giải quyết vấn đề".' },
    ],
    [
      { q: 'Em không theo CNTT, năng lực số có còn quan trọng không?', a: 'Cực kì quan trọng. Mọi nghề đều cần số: bác sĩ dùng phần mềm bệnh án, giáo viên dùng LMS, nông dân dùng app dự báo thời tiết. Người không có năng lực số sẽ bị bỏ lại.' },
      { q: 'Em sẽ tiếp tục học Tin học như thế nào sau lớp 9?', a: 'Tự học online (YouTube, Coursera, edX); tham gia CLB ở THPT; làm dự án cá nhân; cập nhật xu hướng qua blog (TechCrunch, dev.to); học Tiếng Anh để đọc tài liệu gốc.' },
    ]
  ),
};
