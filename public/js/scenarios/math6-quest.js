/* ============================================================
 * ⚔️ Toán Lớp 6 — Hành trình hiệp sĩ số học
 * ============================================================
 * 16 chương × ~12 câu = ~190 câu, bám Chương trình GDPT 2018:
 *   - Số tự nhiên & các phép tính
 *   - Tính chia hết, ước & bội, số nguyên tố
 *   - Số nguyên & quy tắc dấu
 *   - Phân số
 *   - Số thập phân & tỉ số
 *   - Hình học phẳng (đoạn thẳng, góc, tam giác, tứ giác)
 *   - Thống kê & xác suất sơ cấp
 *   - Toán đố nâng cao
 */

const q = (stem, choices, answer, explanation) => ({ stem, choices, answer, explanation });

export const MATH6_TOPICS = [
  // 1. Số tự nhiên & thứ tự thực hiện phép tính
  {
    id: 'm6-so-tu-nhien', title: 'Số tự nhiên & thứ tự', boss: '🧙‍♂️',
    color: '#0ea5e9', icon: '🔢', difficulty: 1, xpReward: 100,
    intro: 'Nhà Phù Thuỷ Số học mở cánh cửa đầu tiên: thứ tự phép tính.',
    questions: [
      q('Tính: 5 + 3 × 4', ['32', '17', '23', '20'], 1, 'Nhân chia trước cộng trừ: 3 × 4 = 12; 5 + 12 = 17.'),
      q('Tính: (12 − 4) × 3', ['24', '0', '36', '8'], 0, 'Trong ngoặc trước: 12 − 4 = 8; 8 × 3 = 24.'),
      q('Tính: 20 : 4 + 2 × 3', ['11', '15', '17', '13'], 0, '20:4 = 5; 2×3 = 6; 5 + 6 = 11.'),
      q('Tìm x: x + 15 = 42', ['x = 17', 'x = 27', 'x = 57', 'x = 7'], 1, 'x = 42 − 15 = 27.'),
      q('Tính tổng: 1 + 2 + 3 + … + 10', ['45', '50', '55', '100'], 2, 'Công thức n(n+1)/2 = 10×11/2 = 55.'),
      q('So sánh: 2³ và 3²', ['2³ > 3²', '2³ < 3²', '2³ = 3²', 'Không so sánh được'], 1, '2³ = 8, 3² = 9 → 8 < 9.'),
      q('Tính: 2⁴', ['8', '16', '24', '32'], 1, '2⁴ = 2×2×2×2 = 16.'),
      q('Số La Mã XIV bằng?', ['9', '14', '16', '24'], 1, 'X=10, IV=4 → 14.'),
      q('Tính (100 − 50) : 5 + 2', ['10', '12', '20', '22'], 1, '50:5=10; 10+2=12.'),
      q('Số tự nhiên nhỏ nhất là?', ['0', '1', '−1', 'Không có'], 0, 'Tập số tự nhiên N bắt đầu từ 0.'),
      q('Đặt tính: 247 × 8', ['1576', '1976', '2076', '1876'], 1, '247 × 8 = 1976.'),
      q('Phép chia 537 : 6, dư bao nhiêu?', ['1', '2', '3', '4'], 2, '537 = 6×89 + 3 → dư 3.'),
    ],
  },

  // 2. Ước, bội & chia hết
  {
    id: 'm6-uoc-boi', title: 'Ước & Bội', boss: '🐉',
    color: '#10b981', icon: '🔗', difficulty: 2, xpReward: 120,
    intro: 'Rồng Chia Hết chặn đường. Đánh bại bằng kiến thức ước-bội!',
    questions: [
      q('Ước của 12 là?', ['1, 2, 3, 4', '1, 2, 3, 4, 6, 12', '1, 12', '2, 3, 4, 6'], 1, 'Ước = các số chia hết 12: 1, 2, 3, 4, 6, 12.'),
      q('Bội của 5 nhỏ hơn 30 là?', ['5, 10, 15, 20, 25', '0, 5, 10, ..., 25', '5, 25', 'Vô số'], 1, 'Bội của 5: 0, 5, 10, 15, 20, 25 (< 30).'),
      q('Số chia hết cho 2 và 5 thì tận cùng là?', ['0', '5', '2', '0 hoặc 5'], 0, 'Chia hết cả 2 và 5 → tận cùng 0.'),
      q('Dấu hiệu chia hết cho 3 là?', ['Tổng các chữ số chia hết 3', 'Chữ số cuối chia hết 3', 'Chữ số đầu chia hết 3', 'Là số chẵn'], 0, 'Tổng chữ số chia hết 3 thì số đó chia hết 3.'),
      q('Số nào chia hết cho 9?', ['234', '321', '432', '513'], 2, '4+3+2=9 chia hết 9.'),
      q('ƯCLN(12, 18) = ?', ['2', '4', '6', '12'], 2, '12=2²×3, 18=2×3² → ƯCLN = 2×3 = 6.'),
      q('BCNN(4, 6) = ?', ['12', '24', '6', '4'], 0, '4=2², 6=2×3 → BCNN = 2²×3 = 12.'),
      q('Số 360 có bao nhiêu ước?', ['18', '20', '24', '36'], 2, '360 = 2³×3²×5 → (3+1)(2+1)(1+1) = 24 ước.'),
      q('Số nguyên tố nhỏ nhất là?', ['0', '1', '2', '3'], 2, '2 là số nguyên tố nhỏ nhất (và duy nhất chẵn).'),
      q('Phân tích 60 ra thừa số nguyên tố?', ['2²×3×5', '2³×3×5', '2×3²×5', '4×15'], 0, '60 = 2²×3×5.'),
      q('Số nguyên tố giữa 20 và 30?', ['21, 25', '23, 29', '22, 26', '24, 27'], 1, '23 và 29 đều là số nguyên tố.'),
      q('Hai số 8 và 15 gọi là?', ['Hai số nguyên tố cùng nhau', 'Hai số nguyên tố', 'Hai số chia hết', 'Hai số chẵn'], 0, 'ƯCLN(8,15) = 1 → nguyên tố cùng nhau.'),
    ],
  },

  // 3. Số nguyên & quy tắc dấu
  {
    id: 'm6-so-nguyen', title: 'Số nguyên ±', boss: '⚔️',
    color: '#ef4444', icon: '➕', difficulty: 2, xpReward: 130,
    intro: 'Hiệp sĩ Đối Cực! Cộng trừ nhân chia số âm — nhớ quy tắc dấu!',
    questions: [
      q('(−7) + 12 = ?', ['5', '−5', '19', '−19'], 0, 'Khác dấu: 12 − 7 = 5, mang dấu số lớn (+).'),
      q('(−8) + (−5) = ?', ['13', '−13', '3', '−3'], 1, 'Cùng dấu âm: 8 + 5 = 13, giữ dấu → −13.'),
      q('15 − (−7) = ?', ['8', '22', '−22', '−8'], 1, 'Trừ số âm = cộng số dương: 15 + 7 = 22.'),
      q('(−6) × 4 = ?', ['24', '−24', '−2', '10'], 1, 'Khác dấu → tích âm: 6 × 4 = 24 → −24.'),
      q('(−5) × (−8) = ?', ['40', '−40', '13', '−13'], 0, 'Cùng dấu → tích dương: 5 × 8 = 40.'),
      q('(−42) : 6 = ?', ['7', '−7', '−6', '36'], 1, 'Khác dấu → âm: 42 : 6 = 7 → −7.'),
      q('Giá trị tuyệt đối |−15| = ?', ['−15', '0', '15', '1'], 2, '|−15| = 15.'),
      q('Sắp xếp tăng dần: −5, 3, −8, 0, 2', ['−8, −5, 0, 2, 3', '−5, 0, 2, 3, −8', '0, 2, 3, −5, −8', '−8, 0, −5, 2, 3'], 0, 'Số nguyên âm càng nhỏ càng bé.'),
      q('Nhiệt độ Đà Lạt 12°C, Sa Pa thấp hơn 18°C. Sa Pa?', ['−6°C', '6°C', '−12°C', '30°C'], 0, '12 − 18 = −6 °C.'),
      q('Tính nhanh: (−25) + 17 + 25', ['17', '−17', '0', '−25'], 0, '(−25 + 25) + 17 = 0 + 17 = 17.'),
      q('Tính (−3)² = ?', ['9', '−9', '6', '−6'], 0, '(−3)×(−3) = 9 (cùng dấu).'),
      q('Tính (−2)³ = ?', ['8', '−8', '6', '−6'], 1, '(−2)×(−2)×(−2) = 4×(−2) = −8.'),
    ],
  },

  // 4. Phân số căn bản
  {
    id: 'm6-phan-so', title: 'Phân số cơ bản', boss: '🧚‍♀️',
    color: '#a855f7', icon: '½', difficulty: 2, xpReward: 130,
    intro: 'Tiên nữ Phân Số tặng bạn chìa khoá — học cách rút gọn nhé!',
    questions: [
      q('Rút gọn 12/18 = ?', ['2/3', '3/4', '6/9', '4/6'], 0, 'ƯCLN(12,18)=6; 12:6=2; 18:6=3 → 2/3.'),
      q('Phân số 8/24 rút gọn?', ['1/3', '1/4', '2/6', '4/12'], 0, '8:8 / 24:8 = 1/3.'),
      q('1/2 + 1/3 = ?', ['2/5', '5/6', '1/5', '2/6'], 1, 'Quy đồng: 3/6 + 2/6 = 5/6.'),
      q('3/4 − 1/2 = ?', ['1/2', '1/4', '2/2', '2/4'], 1, '3/4 − 2/4 = 1/4.'),
      q('2/3 × 3/5 = ?', ['6/15', '2/5', '5/8', '6/8'], 1, '(2×3)/(3×5) = 6/15 = 2/5.'),
      q('1/2 : 1/4 = ?', ['1/8', '2', '4', '1/2'], 1, 'Chia = nhân nghịch đảo: 1/2 × 4 = 2.'),
      q('So sánh 2/5 và 3/8', ['2/5 > 3/8', '2/5 < 3/8', '2/5 = 3/8', 'Không so sánh được'], 0, 'Quy đồng 40: 16/40 vs 15/40 → 2/5 > 3/8.'),
      q('Phân số 5/4 là phân số?', ['Tối giản', 'Bằng 1', 'Lớn hơn 1', 'Âm'], 2, '5/4 = 1,25 > 1 (tử > mẫu).'),
      q('Hỗn số 2½ viết thành phân số?', ['2/2', '5/2', '4/2', '3/2'], 1, '2½ = 2 + 1/2 = 5/2.'),
      q('Tính 1/2 + 1/3 + 1/6 = ?', ['1', '5/6', '11/6', '3/11'], 0, 'Quy đồng 6: 3/6 + 2/6 + 1/6 = 6/6 = 1.'),
      q('Tìm x: x/4 = 3/8', ['x = 3/2', 'x = 6', 'x = 1', 'x = 12'], 0, 'x = (4×3)/8 = 12/8 = 3/2.'),
      q('Trong các phân số sau, phân số nào lớn nhất: 1/2, 2/3, 3/4, 4/5?', ['1/2', '2/3', '3/4', '4/5'], 3, 'Mẫu lớn dần và mỗi phân số gần 1 hơn → 4/5 lớn nhất.'),
    ],
  },

  // 5. Số thập phân
  {
    id: 'm6-thap-phan', title: 'Số thập phân', boss: '🎯',
    color: '#f97316', icon: '0.5', difficulty: 2, xpReward: 130,
    intro: 'Cung thủ Thập Phân thử thách độ chính xác!',
    questions: [
      q('Chuyển 3/4 sang số thập phân', ['0,25', '0,5', '0,75', '0,8'], 2, '3:4 = 0,75.'),
      q('Chuyển 0,6 sang phân số tối giản', ['6/10', '3/5', '60/100', '1/2'], 1, '0,6 = 6/10 = 3/5.'),
      q('Tính 2,5 + 1,75 = ?', ['3,25', '4,25', '4,15', '4,75'], 1, '2,50 + 1,75 = 4,25.'),
      q('Tính 5,4 − 2,8 = ?', ['2,6', '2,8', '3,4', '3,6'], 0, '5,4 − 2,8 = 2,6.'),
      q('Tính 0,5 × 0,4 = ?', ['0,9', '0,02', '0,2', '2'], 2, '0,5 × 0,4 = 0,20 = 0,2.'),
      q('Tính 1,2 × 10 = ?', ['12', '1,2', '120', '0,12'], 0, 'Nhân 10 → chuyển dấu phẩy sang phải 1 chữ số.'),
      q('Chia 6 : 0,2 = ?', ['12', '30', '3', '60'], 1, '6 : 0,2 = 60 : 2 = 30.'),
      q('Làm tròn 3,476 đến hàng phần mười?', ['3,4', '3,5', '3,47', '3,48'], 1, 'Chữ số thứ hai sau dấu phẩy là 7 ≥ 5 → 3,5.'),
      q('So sánh 0,7 và 7/10', ['0,7 > 7/10', '0,7 < 7/10', '0,7 = 7/10', 'Không so sánh'], 2, '7/10 = 0,7.'),
      q('Tổng 1,2 + 2,34 + 0,06 = ?', ['3,6', '3,4', '3,60', '3,06'], 0, '1,20 + 2,34 + 0,06 = 3,60.'),
      q('Phân số 1/8 = số thập phân?', ['0,125', '0,15', '0,18', '0,8'], 0, '1:8 = 0,125.'),
      q('Tính 0,25 × 4 = ?', ['1', '10', '0,1', '0,01'], 0, '1/4 × 4 = 1.'),
    ],
  },

  // 6. Tỉ số & tỉ số phần trăm
  {
    id: 'm6-ti-so', title: 'Tỉ số & Phần trăm', boss: '👑',
    color: '#fbbf24', icon: '%', difficulty: 3, xpReward: 150,
    intro: 'Vua Tỉ Số trao vương miện cho ai giải bài tính phần trăm!',
    questions: [
      q('Tỉ số 3:5 viết dạng phân số?', ['3/5', '5/3', '3+5', '3×5'], 0, 'Tỉ số 3:5 = 3/5.'),
      q('25% của 200 là?', ['25', '50', '75', '100'], 1, '25% × 200 = 200/4 = 50.'),
      q('20% của 80 là?', ['8', '16', '20', '24'], 1, '20/100 × 80 = 16.'),
      q('30% của 50 là?', ['5', '10', '15', '20'], 2, '0,3 × 50 = 15.'),
      q('Lớp có 40 bạn, 25% là nữ. Số nữ?', ['8', '10', '15', '20'], 1, '40 × 25/100 = 10 bạn nữ.'),
      q('Một chiếc áo giá 200000 đ giảm 15%. Tiền giảm?', ['15000', '30000', '20000', '50000'], 1, '15% × 200000 = 30000.'),
      q('Đổi 0,75 thành phần trăm?', ['7,5%', '75%', '0,75%', '750%'], 1, '0,75 = 75/100 = 75%.'),
      q('Tỉ lệ học sinh giỏi lớp là 18/45. Bằng?', ['2/5', '40%', 'Cả A và B', '30%'], 2, '18/45 = 2/5 = 40%.'),
      q('Một số tăng từ 50 lên 60. Tăng bao nhiêu %?', ['10%', '20%', '25%', '50%'], 1, '(60−50)/50 × 100 = 20%.'),
      q('Một mặt hàng giá 100000 đ, giảm 20% rồi giảm tiếp 10%. Giá cuối?', ['70000', '72000', '80000', '90000'], 1, '100000×0,8 = 80000; 80000×0,9 = 72000 đ.'),
      q('Pha 50g muối vào 950g nước. Tỉ lệ muối?', ['5%', '10%', '20%', '50%'], 0, '50/(50+950) = 50/1000 = 5%.'),
      q('Tìm x: 30% của x = 60', ['x = 18', 'x = 90', 'x = 180', 'x = 200'], 3, 'x = 60 : 0,3 = 200.'),
    ],
  },

  // 7. Đoạn thẳng, điểm, đường thẳng
  {
    id: 'm6-diem-duong', title: 'Điểm, đường thẳng', boss: '🗺',
    color: '#06b6d4', icon: '📐', difficulty: 1, xpReward: 100,
    intro: 'Pháp sư Hình Học vẽ bản đồ. Tìm điểm, đo đoạn thẳng!',
    questions: [
      q('Có bao nhiêu đường thẳng đi qua 2 điểm phân biệt?', ['0', '1', '2', 'Vô số'], 1, 'Qua 2 điểm phân biệt chỉ có 1 đường thẳng duy nhất.'),
      q('Đoạn thẳng AB có 2 đầu là?', ['A', 'B', 'A và B', 'Vô hạn'], 2, 'Đoạn thẳng có 2 đầu mút A và B.'),
      q('Tia Ox là gì?', ['Đường thẳng vô hạn 2 phía', 'Đường thẳng từ O ra 1 phía', 'Đoạn từ O đến X', 'Điểm O'], 1, 'Tia có 1 điểm đầu (gốc), không có điểm cuối.'),
      q('Cho M là trung điểm AB, AB = 8 cm. AM bằng?', ['2 cm', '4 cm', '6 cm', '8 cm'], 1, 'Trung điểm chia đoạn thành 2 phần bằng nhau: 8:2 = 4 cm.'),
      q('Trên tia Ox lấy A và B sao cho OA = 3, OB = 7. Đoạn AB?', ['3', '4', '7', '10'], 1, 'AB = OB − OA = 7 − 3 = 4.'),
      q('3 điểm thẳng hàng nghĩa là gì?', ['Cùng nằm trên 1 đường thẳng', 'Cùng cách đều', 'Cùng tạo tam giác', 'Cùng góc 90°'], 0, '3 điểm thẳng hàng = cùng thuộc 1 đường thẳng.'),
      q('Hai đường thẳng cắt nhau tạo thành?', ['1 góc', '2 góc', '4 góc', '6 góc'], 2, '2 đường thẳng cắt nhau tạo 4 góc.'),
      q('Hai đường thẳng song song có?', ['1 điểm chung', '2 điểm chung', '0 điểm chung', 'Vô số điểm chung'], 2, 'Song song = không có điểm chung.'),
      q('Có 5 điểm phân biệt, không có 3 điểm thẳng hàng. Có bao nhiêu đường thẳng đi qua các điểm này?', ['5', '8', '10', '15'], 2, 'C(5,2) = 10 đường thẳng.'),
      q('Trung điểm M của AB cách A là?', ['1/3 AB', '1/2 AB', '1/4 AB', '1 AB'], 1, 'AM = MB = AB/2.'),
      q('Đoạn AB dài 12 cm, M là trung điểm AB; N là trung điểm AM. AN bằng?', ['2', '3', '4', '6'], 1, 'AM = 6, AN = AM/2 = 3.'),
      q('Hai tia đối nhau có chung?', ['Gốc', 'Cùng hướng', 'Cùng độ dài', 'Cùng cắt nhau'], 0, 'Hai tia đối nhau chung gốc, ngược hướng.'),
    ],
  },

  // 8. Góc
  {
    id: 'm6-goc', title: 'Đo và vẽ góc', boss: '📐',
    color: '#8b5cf6', icon: '∠', difficulty: 2, xpReward: 120,
    intro: 'Thợ rèn Góc Vuông đặt thử thách: phân biệt nhọn-vuông-tù!',
    questions: [
      q('Góc nhọn có số đo?', ['< 90°', '= 90°', '> 90°', '= 180°'], 0, 'Góc nhọn nhỏ hơn 90°.'),
      q('Góc vuông là?', ['< 90°', '= 90°', '> 90°', '= 180°'], 1, 'Vuông = 90° đúng.'),
      q('Góc tù có số đo?', ['< 90°', '= 90°', '> 90° và < 180°', '= 180°'], 2, 'Tù: từ 90° đến 180° (không bao gồm).'),
      q('Góc bẹt = ?', ['90°', '180°', '270°', '360°'], 1, 'Bẹt = 180°.'),
      q('2 góc kề bù có tổng?', ['90°', '180°', '270°', '360°'], 1, 'Kề bù: tổng = 180°.'),
      q('2 góc đối đỉnh thì?', ['Bù nhau', 'Bằng nhau', 'Phụ nhau', 'Vuông góc'], 1, 'Hai góc đối đỉnh bằng nhau.'),
      q('Một góc đo 35°, góc bù với nó?', ['55°', '145°', '125°', '180°'], 1, '180 − 35 = 145°.'),
      q('Một góc 40°, góc phụ với nó?', ['50°', '60°', '140°', '180°'], 0, 'Phụ nhau: 90 − 40 = 50°.'),
      q('Tia phân giác chia góc thành?', ['2 góc bằng nhau', '2 góc bù nhau', '4 góc', 'Góc vuông'], 0, 'Phân giác chia góc làm đôi.'),
      q('Cho góc xOy = 80°, tia Oz phân giác. Góc xOz?', ['40°', '60°', '80°', '160°'], 0, '80:2 = 40°.'),
      q('Tổng các góc trong một tam giác?', ['90°', '180°', '270°', '360°'], 1, 'Tam giác: tổng 3 góc = 180°.'),
      q('Tổng 4 góc tứ giác?', ['180°', '270°', '360°', '720°'], 2, 'Tứ giác: 4 góc tổng = 360°.'),
    ],
  },

  // 9. Tam giác
  {
    id: 'm6-tam-giac', title: 'Tam giác', boss: '🛡',
    color: '#22c55e', icon: '🔺', difficulty: 2, xpReward: 120,
    intro: 'Lính canh Tam Giác kiểm tra kiến thức trước cổng thành!',
    questions: [
      q('Tam giác có 3 cạnh bằng nhau gọi là?', ['Cân', 'Đều', 'Vuông', 'Tù'], 1, 'Tam giác đều: 3 cạnh = nhau, 3 góc = 60°.'),
      q('Tam giác cân có?', ['2 cạnh bằng', '3 cạnh bằng', '1 góc vuông', '1 góc tù'], 0, 'Cân: ít nhất 2 cạnh = nhau.'),
      q('Tam giác vuông có?', ['Góc 90°', 'Cạnh bằng', '3 góc bằng', 'Góc tù'], 0, 'Có 1 góc 90°.'),
      q('Tổng góc tam giác = ?', ['90°', '180°', '270°', '360°'], 1, 'Luôn = 180°.'),
      q('Tam giác có 2 góc 50° và 60°. Góc còn lại?', ['60°', '70°', '80°', '110°'], 1, '180 − 50 − 60 = 70°.'),
      q('Tam giác đều có mỗi góc?', ['30°', '45°', '60°', '90°'], 2, '180:3 = 60°.'),
      q('3 cạnh: 3, 4, 5 cm tạo tam giác gì?', ['Vuông', 'Cân', 'Đều', 'Tù'], 0, '3² + 4² = 25 = 5² → Pythagore → vuông.'),
      q('Tam giác cân tại A, góc A = 80°. Góc B?', ['30°', '40°', '50°', '60°'], 2, 'Cân tại A → góc B = góc C = (180−80)/2 = 50°.'),
      q('Cho tam giác có 3 cạnh 5, 5, 8. Đây là?', ['Vuông', 'Đều', 'Cân', 'Bất kỳ'], 2, '2 cạnh bằng nhau → cân.'),
      q('Chu vi tam giác đều cạnh 7 cm?', ['14 cm', '21 cm', '28 cm', '49 cm'], 1, '3 × 7 = 21 cm.'),
      q('Tam giác có 1 góc 90° và 1 góc 45° là?', ['Vuông cân', 'Đều', 'Tù', 'Nhọn cân'], 0, 'Tam giác vuông tại 1 đỉnh, 2 góc còn lại = 45° → vuông cân.'),
      q('3 cạnh nào KHÔNG tạo được tam giác?', ['2, 3, 4', '3, 4, 5', '1, 2, 3', '5, 6, 7'], 2, '1 + 2 = 3 (không > 3) → không thoả bất đẳng thức tam giác.'),
    ],
  },

  // 10. Tứ giác & đa giác
  {
    id: 'm6-tu-giac', title: 'Tứ giác & đa giác', boss: '🏰',
    color: '#ec4899', icon: '🔲', difficulty: 2, xpReward: 120,
    intro: 'Lâu đài Tứ Giác có 4 cánh cổng. Mỗi cổng 1 câu đố!',
    questions: [
      q('Hình vuông có?', ['4 cạnh bằng nhau', '4 góc vuông', 'Cả A và B', 'Chỉ A'], 2, 'Hình vuông: 4 cạnh = + 4 góc 90°.'),
      q('Hình chữ nhật có?', ['4 cạnh bằng', '2 cặp cạnh đối song song và bằng', '3 cạnh bằng', 'Không cạnh bằng'], 1, 'Hai cặp cạnh đối song song và bằng nhau.'),
      q('Hình bình hành có 2 cặp cạnh đối?', ['Vuông góc', 'Song song và bằng nhau', 'Chỉ song song', 'Chỉ bằng nhau'], 1, 'Định nghĩa: 2 cặp cạnh đối song song + bằng.'),
      q('Hình thoi có?', ['4 góc vuông', '4 cạnh bằng nhau', 'Chỉ 2 cạnh đối song song', '2 cạnh bằng'], 1, 'Hình thoi: 4 cạnh = nhau.'),
      q('Diện tích hình vuông cạnh 8 cm?', ['16', '32', '64', '128'], 2, 'S = a² = 64 cm².'),
      q('Diện tích hình chữ nhật dài 12, rộng 5?', ['17', '24', '60', '85'], 2, 'S = 12 × 5 = 60.'),
      q('Chu vi hình vuông cạnh 6?', ['12', '24', '36', '48'], 1, '4 × 6 = 24.'),
      q('Hình thang có?', ['4 cạnh = nhau', '2 cạnh đối song song', '4 góc vuông', '2 cặp cạnh song song'], 1, 'Hình thang: chỉ 1 cặp cạnh đối song song.'),
      q('Tổng các góc 1 tứ giác?', ['180°', '270°', '360°', '540°'], 2, 'Tứ giác = 2 tam giác → 360°.'),
      q('Diện tích hình thoi đường chéo 6 và 8?', ['14', '24', '48', '12'], 1, 'S = (d₁ × d₂)/2 = 6×8/2 = 24.'),
      q('Một thửa ruộng hình chữ nhật dài 25 m rộng 10 m. Chu vi?', ['35 m', '70 m', '250 m', '125 m'], 1, '(25 + 10) × 2 = 70 m.'),
      q('Đa giác đều 5 cạnh gọi là?', ['Tam giác', 'Tứ giác', 'Ngũ giác', 'Lục giác'], 2, '5 cạnh → ngũ giác (penta-).'),
    ],
  },

  // 11. Thống kê và biểu đồ
  {
    id: 'm6-thong-ke', title: 'Thống kê', boss: '📊',
    color: '#f59e0b', icon: '📊', difficulty: 2, xpReward: 110,
    intro: 'Tổ chim cần thống kê. Đếm và đọc biểu đồ giúp nhé!',
    questions: [
      q('Trong dãy 3, 5, 7, 5, 4, 5, 8, số xuất hiện nhiều nhất là?', ['3', '5', '7', '8'], 1, 'Số 5 xuất hiện 3 lần.'),
      q('Trung bình cộng của 2, 4, 6, 8 = ?', ['4', '5', '6', '10'], 1, '(2+4+6+8)/4 = 20/4 = 5.'),
      q('Số trung vị của dãy 1, 3, 5, 7, 9?', ['3', '4', '5', '7'], 2, 'Trung vị (median) là số chính giữa khi sắp xếp.'),
      q('Bảng số liệu: 5 bạn giỏi, 12 khá, 8 trung bình. Tổng?', ['17', '20', '25', '30'], 2, '5 + 12 + 8 = 25 bạn.'),
      q('% số bạn giỏi trong lớp 25 bạn (5 giỏi)?', ['10%', '20%', '25%', '50%'], 1, '5/25 = 20%.'),
      q('Bảng tần số: 2(3 lần), 4(2 lần), 6(1 lần). Số lần xuất hiện 4 là?', ['1', '2', '3', '4'], 1, 'Theo bảng: 4 xuất hiện 2 lần.'),
      q('Trung bình điểm 7, 8, 6, 9, 5?', ['6', '7', '7.5', '8'], 1, '(7+8+6+9+5)/5 = 35/5 = 7.'),
      q('Trong 100 bạn có 60 nam. Tỉ lệ nữ?', ['30%', '40%', '50%', '60%'], 1, '100 − 60 = 40 nữ → 40%.'),
      q('Bảng nhiệt độ 5 ngày: 28, 30, 32, 31, 29 °C. Cao nhất?', ['28', '30', '32', '29'], 2, '32°C cao nhất.'),
      q('Biểu đồ tròn 100%: 25% đỏ, 35% xanh, còn lại vàng. % vàng?', ['25%', '35%', '40%', '60%'], 2, '100 − 25 − 35 = 40%.'),
      q('Số TB cộng của 0, 0, 5, 5, 10?', ['0', '4', '5', '10'], 1, '(0+0+5+5+10)/5 = 4.'),
      q('Trong 20 lần tung đồng xu, được mặt sấp 12 lần. Tần suất sấp?', ['40%', '50%', '60%', '12%'], 2, '12/20 = 60%.'),
    ],
  },

  // 12. Xác suất sơ cấp
  {
    id: 'm6-xac-suat', title: 'Xác suất', boss: '🎲',
    color: '#dc2626', icon: '🎲', difficulty: 3, xpReward: 140,
    intro: 'Sòng bài Số Học. Tính xác suất chính xác để thắng!',
    questions: [
      q('Tung 1 đồng xu, xác suất mặt sấp?', ['0', '1/4', '1/2', '1'], 2, 'Đồng xu công bằng: 2 mặt, mỗi mặt 1/2.'),
      q('Tung 1 xúc xắc 6 mặt, xác suất ra số 4?', ['1/2', '1/3', '1/6', '4/6'], 2, '1 trong 6 mặt → 1/6.'),
      q('Xác suất ra số chẵn khi tung xúc xắc?', ['1/6', '1/3', '1/2', '2/3'], 2, '3 số chẵn (2,4,6) trong 6 → 3/6 = 1/2.'),
      q('Tung xúc xắc, xác suất ra số > 4?', ['1/6', '1/3', '1/2', '2/3'], 1, 'Có 2 số (5, 6) trong 6 → 2/6 = 1/3.'),
      q('Hộp có 3 bi đỏ và 7 bi xanh. Xác suất lấy bi đỏ?', ['3/10', '7/10', '3/7', '1/3'], 0, '3/(3+7) = 3/10.'),
      q('Tung 1 lần xúc xắc, xác suất ra số chính phương (1, 4)?', ['1/6', '1/3', '1/2', '2/3'], 1, 'Số chính phương ≤ 6 là 1 và 4 → 2/6 = 1/3.'),
      q('Xác suất chắc chắn xảy ra là?', ['0', '1/2', '1', '∞'], 2, 'Biến cố chắc chắn xảy ra: xác suất = 1.'),
      q('Xác suất không thể xảy ra là?', ['0', '1/2', '1', '−1'], 0, 'Biến cố không thể xảy ra: P = 0.'),
      q('Hộp có 5 bi (2 đỏ, 3 xanh). Xác suất KHÔNG lấy bi đỏ?', ['2/5', '3/5', '1/5', '4/5'], 1, 'Lấy không đỏ = lấy xanh = 3/5.'),
      q('Tung 2 đồng xu, xác suất cả 2 mặt sấp?', ['1/2', '1/3', '1/4', '1'], 2, '1/2 × 1/2 = 1/4.'),
      q('Hộp 10 thẻ đánh số 1-10. Xác suất lấy thẻ chẵn?', ['1/2', '1/5', '5/10', 'A và C'], 3, '5 số chẵn trong 10 → 5/10 = 1/2.'),
      q('Mưa lúc trời nắng: xác suất?', ['0', '0,5', '1', '0,7'], 0, 'Sự kiện gần như không thể xảy ra (lý thuyết).'),
    ],
  },

  // 13. Bài toán giải phương trình
  {
    id: 'm6-phuong-trinh', title: 'Tìm ẩn x', boss: '🧝',
    color: '#7c3aed', icon: '🧙', difficulty: 3, xpReward: 150,
    intro: 'Elf số học giấu kho báu sau biến x. Hãy tìm!',
    questions: [
      q('Tìm x: x + 25 = 60', ['x = 35', 'x = 85', 'x = 5', 'x = 60'], 0, 'x = 60 − 25 = 35.'),
      q('Tìm x: x − 18 = 42', ['x = 24', 'x = 60', 'x = 18', 'x = 42'], 1, 'x = 42 + 18 = 60.'),
      q('Tìm x: 5x = 75', ['x = 15', 'x = 25', 'x = 70', 'x = 80'], 0, 'x = 75 : 5 = 15.'),
      q('Tìm x: x : 6 = 9', ['x = 3', 'x = 15', 'x = 54', 'x = 96'], 2, 'x = 9 × 6 = 54.'),
      q('Tìm x: 3x + 7 = 22', ['x = 5', 'x = 7', 'x = 15', 'x = 22'], 0, '3x = 15 → x = 5.'),
      q('Tìm x: 2x − 4 = 16', ['x = 6', 'x = 10', 'x = 12', 'x = 20'], 1, '2x = 20 → x = 10.'),
      q('Tìm x: x/4 + 3 = 7', ['x = 16', 'x = 12', 'x = 28', 'x = 4'], 0, 'x/4 = 4 → x = 16.'),
      q('Tìm x: (x − 5) × 3 = 21', ['x = 7', 'x = 12', 'x = 16', 'x = 26'], 1, 'x − 5 = 7 → x = 12.'),
      q('Tìm x: 100 − 2x = 40', ['x = 30', 'x = 50', 'x = 60', 'x = 80'], 0, '2x = 60 → x = 30.'),
      q('Tìm x: x² = 49', ['x = 7', 'x = ±7', 'x = 14', 'x = 49'], 1, 'x = 7 hoặc x = −7.'),
      q('Tìm x: (x + 3)(x − 3) = 0', ['x = 0', 'x = 3', 'x = ±3', 'x = 9'], 2, 'Tích = 0 → x + 3 = 0 hoặc x − 3 = 0.'),
      q('Tổng tuổi 2 anh em là 35, anh hơn em 5 tuổi. Tuổi anh?', ['15', '20', '25', '30'], 1, 'Anh + em = 35, anh = em+5 → em = 15, anh = 20.'),
    ],
  },

  // 14. Bài toán có lời văn THCS
  {
    id: 'm6-toan-do', title: 'Toán đố nâng cao', boss: '🦅',
    color: '#0891b2', icon: '🦅', difficulty: 3, xpReward: 160,
    intro: 'Đại bàng đem thử thách thực tế. Đọc kỹ rồi tính!',
    questions: [
      q('Một xe đi 60 km/h trong 2 giờ. Đi được?', ['30 km', '60 km', '90 km', '120 km'], 3, 'S = v × t = 60 × 2 = 120 km.'),
      q('Đi từ 8h xuất phát, đến 11h, đi 150 km. Vận tốc?', ['30', '50', '60', '75'], 1, 'v = S/t = 150/3 = 50 km/h.'),
      q('Một hồ 1200 lít, 2 vòi: A bơm 50 l/p, B bơm 30 l/p. Bao lâu đầy nếu chạy cả 2?', ['10 p', '15 p', '20 p', '12 p'], 1, '1200/(50+30) = 15 phút.'),
      q('Mua 3 kg gạo và 2 kg đường hết 120000 đ. Đường 25000 đ/kg. Gạo bao nhiêu/kg?', ['20000', '23000', '25000', '70000'], 1, 'Đường: 2×25000 = 50000; gạo: (120000−50000)/3 ≈ 23000.'),
      q('Lớp 30 bạn, 18 thích Toán, 12 thích Văn, 8 thích cả 2. Số thích ít nhất 1 môn?', ['18', '22', '24', '30'], 1, '18 + 12 − 8 = 22.'),
      q('Tăng cạnh hình vuông gấp đôi, diện tích?', ['Gấp đôi', 'Gấp 3', 'Gấp 4', 'Như cũ'], 2, 'S = a²; (2a)² = 4a² → gấp 4.'),
      q('Một bể có 40% nước. Đổ thêm 20 lít thì đầy. Bể chứa?', ['33 l', '50 l', '40 l', '60 l'], 0, '60%×V = 20 → V = 20/0,6 ≈ 33,3 l.'),
      q('Mua 1 cái áo 200000 đ, bớt 15%. Giá thực?', ['170 000', '180 000', '185 000', '160 000'], 0, '200 × 0,85 = 170 000.'),
      q('Lan đọc 1/3 cuốn sách trong 4 ngày. Đọc xong cần?', ['8 ngày', '10 ngày', '12 ngày', '16 ngày'], 2, '1 phần = 4 ngày → 3 phần = 12 ngày.'),
      q('Một ô tô đi 240 km hết 4 giờ. Hỏi đi 360 km hết bao lâu (cùng tốc độ)?', ['5 h', '6 h', '7 h', '8 h'], 1, 'v = 60 km/h; 360/60 = 6 giờ.'),
      q('Vườn chia 2 phần: phần A gấp 3 phần B. Tổng 80 m². Phần B?', ['10', '20', '40', '60'], 1, 'B + 3B = 80 → B = 20 m².'),
      q('1 vòi chảy đầy bể 4 giờ, vòi thứ 2 chảy đầy bể 6 giờ. Mở 2 vòi cùng lúc, bao lâu đầy?', ['2,4 h', '3 h', '5 h', '10 h'], 0, '1/4 + 1/6 = 5/12 mỗi giờ → 12/5 = 2,4 giờ.'),
    ],
  },

  // 15. Boss luyện tổng hợp
  {
    id: 'm6-boss', title: '👑 Boss Tổng hợp', boss: '👑',
    color: '#dc2626', icon: '👑', difficulty: 3, xpReward: 250,
    intro: 'BOSS CUỐI! Tổng hợp tất cả kiến thức. Sẵn sàng chiến đấu?',
    questions: [
      q('Tính: 2³ × 3² − 5 × 4', ['52', '62', '72', '92'], 0, '8 × 9 − 20 = 72 − 20 = 52.'),
      q('ƯCLN(48, 60) = ?', ['6', '12', '24', '48'], 1, '48=2⁴×3, 60=2²×3×5 → ƯCLN=2²×3=12.'),
      q('(−15) + 20 − (−5) = ?', ['0', '10', '20', '30'], 1, '−15 + 20 + 5 = 10.'),
      q('Rút gọn 24/36 + 1/6 = ?', ['5/6', '4/6', '5/12', '1'], 0, '24/36 = 2/3; 2/3 + 1/6 = 4/6 + 1/6 = 5/6.'),
      q('40% của 250 = ?', ['80', '100', '120', '150'], 1, '40/100 × 250 = 100.'),
      q('Tam giác đều cạnh 8 cm. Chu vi?', ['16', '24', '32', '48'], 1, '3 × 8 = 24 cm.'),
      q('Tổng 3 góc tam giác có 2 góc 70° và 50°. Góc còn lại?', ['50°', '60°', '70°', '120°'], 1, '180 − 70 − 50 = 60°.'),
      q('Diện tích hình thoi 2 đường chéo 10 và 12?', ['22', '50', '60', '120'], 2, '(10×12)/2 = 60.'),
      q('Tung 1 xúc xắc 2 lần, xác suất cả 2 lần đều ra số 6?', ['1/6', '1/12', '1/36', '2/6'], 2, '1/6 × 1/6 = 1/36.'),
      q('Tìm x: 3(x − 4) = 2x + 5', ['x = 9', 'x = 11', 'x = 17', 'x = 7'], 2, '3x − 12 = 2x + 5 → x = 17.'),
      q('5 người làm xong việc trong 8 ngày. 10 người làm trong?', ['2', '3', '4', '5'], 2, 'Tỉ lệ nghịch: 5×8 = 10×x → x = 4 ngày.'),
      q('Số nguyên tố thứ 10 là?', ['23', '29', '31', '37'], 1, '2, 3, 5, 7, 11, 13, 17, 19, 23, 29.'),
    ],
  },

  // 16. Mini-game: Combat dạng quick-fire
  {
    id: 'm6-combat', title: '⚔️ Combat tính toán', boss: '⚔️',
    color: '#f59e0b', icon: '⚔️', difficulty: 3, xpReward: 200, mode: 'time-attack',
    intro: 'Combat 90 giây! Đánh càng nhiều quái càng tốt!',
    questions: [
      q('(−8) + 15', ['7', '−7', '23', '−23'], 0, '7'),
      q('(−6) × (−7)', ['42', '−42', '13', '−13'], 0, '42'),
      q('45 : 9', ['4', '5', '6', '7'], 1, '5'),
      q('3² + 4²', ['25', '49', '12', '14'], 0, '25'),
      q('1/2 + 1/4', ['1/6', '3/4', '2/6', '3/8'], 1, '3/4'),
      q('30% của 90', ['9', '18', '27', '36'], 2, '27'),
      q('Tổng 3 góc tam giác', ['90°', '180°', '270°', '360°'], 1, '180°'),
      q('√81', ['7', '8', '9', '10'], 2, '9'),
      q('|−12|', ['−12', '0', '12', '1'], 2, '12'),
      q('5 × 8 + 10', ['40', '45', '50', '60'], 2, '50'),
      q('100 : 4', ['20', '25', '40', '50'], 1, '25'),
      q('2³', ['6', '8', '9', '4'], 1, '8'),
      q('15% của 200', ['15', '30', '45', '50'], 1, '30'),
      q('(−3) − 5', ['8', '−8', '2', '−2'], 1, '−8'),
      q('Số nguyên tố nhỏ nhất', ['0', '1', '2', '3'], 2, '2'),
      q('ƯCLN(8, 12)', ['2', '4', '6', '8'], 1, '4'),
      q('BCNN(3, 5)', ['8', '15', '30', '10'], 1, '15'),
      q('Rút gọn 16/24', ['1/2', '2/3', '3/4', '4/6'], 1, '2/3'),
      q('Diện tích hv cạnh 9', ['18', '36', '81', '90'], 2, '81'),
      q('Trung bình 10, 20, 30', ['15', '20', '25', '30'], 1, '20'),
    ],
  },
];

export const MATH6_INDEX = MATH6_TOPICS.map(t => ({
  id: t.id, title: t.title, boss: t.boss, color: t.color,
  icon: t.icon, difficulty: t.difficulty, intro: t.intro,
  xpReward: t.xpReward, questionCount: t.questions.length, mode: t.mode || 'quiz',
}));

export function getMath6Topic(id) {
  return MATH6_TOPICS.find(t => t.id === id);
}
