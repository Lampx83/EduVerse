// ============================================================
// Lớp 2 · TOÁN — 36 tuần (HK1: 1–18 · HK2: 19–36 · T22 nghỉ Tết)
// Bám SGK GDPT 2018 (3 bộ Cánh Diều / Kết nối / Chân trời).
// ID prefix: "P2-wNN-quiz" → trùng prefix module "P2".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('P2', 'toan', n, title, qs, opts);

export const P2_TOAN_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Ôn tập số đến 100', [
    Q('Số liền sau của 89 là?', ['99', '88', '79', '90'], 3, '89 + 1 = 90.', ['Sai — 99 là số liền sau của 98, không phải của 89.', 'Sai — 88 là số liền trước của 89.', 'Sai — 79 nhỏ hơn 89.', 'Đúng — đếm thêm 1: 89 + 1 = 90.']),
    Q('Số bé nhất có 2 chữ số là?', ['10', '99', '11', '19'], 0, '10 là số bé nhất có 2 chữ số.', ['Đúng — 10 là số nhỏ nhất có 2 chữ số.', 'Sai — 99 là số lớn nhất có 2 chữ số.', 'Sai — 11 lớn hơn 10.', 'Sai — 19 lớn hơn 10.']),
    Q('Số lớn nhất có 2 chữ số là?', ['99', '98', '89', '100'], 0, '99 là số lớn nhất có 2 chữ số.', ['Đúng — 99 là số lớn nhất có 2 chữ số.', 'Sai — 98 nhỏ hơn 99.', 'Sai — 89 nhỏ hơn 99.', 'Sai — 100 đã có 3 chữ số.']),
    Q('Số gồm 4 chục và 5 đơn vị là?', ['405', '54', '45', '450'], 2, '4 chục = 40, thêm 5 → 45.', ['Sai — đây là số có 3 chữ số, không đúng.', 'Sai — em viết ngược: 5 chục 4 đơn vị mới là 54.', 'Đúng — 4 chục là 40, thêm 5 đơn vị thành 45.', 'Sai — 450 là 45 chục, quá lớn.']),
    Q('Sắp xếp tăng dần: 27, 72, 17, 71', ['17, 27, 71, 72', '17, 27, 72, 71', '72, 71, 27, 17', '27, 17, 71, 72'], 0, '17 < 27 < 71 < 72.', ['Đúng — từ bé đến lớn: 17 < 27 < 71 < 72.', 'Sai — 72 đứng trước 71 là chưa tăng dần.', 'Sai — đây là xếp giảm dần (từ lớn đến bé).', 'Sai — 27 phải đứng sau 17.']),
    Q('30 + 40 = ?', ['34', '70', '430', '60'], 1, '3 chục + 4 chục = 7 chục = 70.', ['Sai — em chỉ viết ghép số chứ chưa cộng.', 'Đúng — 3 chục cộng 4 chục bằng 7 chục, tức 70.', 'Sai — đây là số có 3 chữ số, không đúng.', 'Sai — em cộng nhầm, 3 + 4 = 7 nên phải là 70.']),
  ]),

  M(2, 'Số bị trừ – Số trừ – Hiệu', [
    Q('Trong phép tính 9 − 3 = 6, số 9 gọi là?', ['Kết quả của phép trừ', 'Số bị trừ', 'Số trừ', 'Số hạng thứ nhất'], 1, 'Số bị trừ đứng trước dấu trừ.', ['Sai — kết quả phép trừ là số 6, gọi là hiệu.', 'Đúng — số đứng trước dấu trừ là số bị trừ.', 'Sai — số trừ là số 3, đứng sau dấu trừ.', 'Sai — \'số hạng\' là tên gọi trong phép cộng.']),
    Q('Trong 15 − 7 = 8, số 7 là?', ['Số trừ', 'Số bị trừ', 'Kết quả phép trừ (số 8)', 'Số hạng trong phép cộng'], 0, 'Số trừ là số đứng sau dấu trừ.', ['Đúng — số đứng sau dấu trừ là số trừ.', 'Sai — số bị trừ là số 15, đứng trước dấu trừ.', 'Sai — kết quả là số 8, không phải số 7.', 'Sai — \'số hạng\' chỉ dùng cho phép cộng.']),
    Q('Trong 20 − 12 = 8, số 8 gọi là?', ['Kết quả của phép cộng', 'Số bị trừ', 'Hiệu', 'Số trừ'], 2, 'Hiệu là kết quả phép trừ.', ['Sai — đây là phép trừ, không phải phép cộng.', 'Sai — số bị trừ là số 20.', 'Đúng — kết quả của phép trừ gọi là hiệu.', 'Sai — số trừ là số 12.']),
    Q('Số bị trừ là 50, số trừ là 20, hiệu là?', ['20', '70', '40', '30'], 3, '50 − 20 = 30.', ['Sai — 20 là số trừ, không phải hiệu.', 'Sai — 70 là kết quả phép cộng 50 + 20.', 'Sai — em tính nhầm, 50 − 20 = 30 chứ không phải 40.', 'Đúng — lấy 50 trừ 20 được 30.']),
    Q('Tìm hiệu của 27 và 5', ['32', '22', '25', '20'], 1, '27 − 5 = 22.', ['Sai — 32 là tổng (cộng), đề hỏi hiệu nên phải trừ.', 'Đúng — 27 − 5 = 22.', 'Sai — em tính nhầm, 27 − 5 = 22.', 'Sai — em trừ nhầm, kết quả đúng là 22.']),
    Q('Một số bị trừ là 18, số trừ là 9. Hiệu là?', ['7', '9', '10', '8'], 1, '18 − 9 = 9.', ['Sai — em trừ nhầm, 18 − 9 = 9.', 'Đúng — 18 − 9 = 9.', 'Sai — em tính nhầm một chút, đáp án là 9.', 'Sai — 18 − 9 = 9 chứ không phải 8.']),
  ]),

  M(3, 'Số hạng – Tổng', [
    Q('Trong 4 + 5 = 9, số 4 và 5 gọi là?', ['Số trừ', 'Kết quả của phép trừ', 'Kết quả phép cộng (số 9)', 'Số hạng'], 3, 'Hai số đứng trước dấu = trong phép cộng là SỐ HẠNG.', ['Sai — \'số trừ\' chỉ dùng trong phép trừ.', 'Sai — đây là phép cộng, không phải phép trừ.', 'Sai — kết quả là số 9, còn 4 và 5 là số hạng.', 'Đúng — hai số trước dấu cộng gọi là số hạng.']),
    Q('Trong 7 + 8 = 15, số 15 là?', ['Kết quả của phép trừ', 'Tổng', 'Số hạng', 'Số trừ'], 1, 'Kết quả phép cộng là TỔNG.', ['Sai — đây là phép cộng, không phải phép trừ.', 'Đúng — kết quả của phép cộng gọi là tổng.', 'Sai — số hạng là 7 và 8, không phải 15.', 'Sai — \'số trừ\' chỉ dùng trong phép trừ.']),
    Q('Số hạng thứ nhất là 12, số hạng thứ hai là 8. Tổng là?', ['24', '22', '20', '18'], 2, '12 + 8 = 20.', ['Sai — 24 là kết quả 12 + 12, không đúng.', 'Sai — em cộng nhầm, 12 + 8 = 20.', 'Đúng — 12 + 8 = 20.', 'Sai — em quên cộng đủ, đúng là 20.']),
    Q('Tổng của 30 và 50 là?', ['70', '80', '20', '53'], 1, '30 + 50 = 80.', ['Sai — em cộng thiếu, 30 + 50 = 80.', 'Đúng — 3 chục cộng 5 chục bằng 8 chục, tức 80.', 'Sai — 20 là hiệu (50 − 30), đề hỏi tổng.', 'Sai — em chỉ ghép số chứ chưa cộng.']),
    Q('Khi đổi chỗ các số hạng thì tổng?', ['Giảm đi', 'Không thay đổi', 'Tăng lên', 'Bằng 0'], 1, 'Tính chất giao hoán: 3+5 = 5+3 = 8.', ['Sai — đổi chỗ không làm tổng giảm.', 'Đúng — đổi chỗ số hạng thì tổng vẫn như cũ.', 'Sai — đổi chỗ không làm tổng tăng.', 'Sai — tổng không trở thành 0 khi đổi chỗ.']),
    Q('5 + 0 = ?', ['50', '5', '10', '0'], 1, 'Cộng với 0 thì giữ nguyên: 5 + 0 = 5.', ['Sai — em ghép số 5 và 0, nhưng cộng thì khác.', 'Đúng — cộng với 0 thì giữ nguyên, vẫn là 5.', 'Sai — 5 + 0 = 5 chứ không phải 10.', 'Sai — số 0 cộng vào không làm mất số 5.']),
  ]),

  M(4, 'Đề-xi-mét (dm)', [
    Q('1 dm bằng bao nhiêu cm?', ['10 cm', '100 cm', '1 cm', '5 cm'], 0, '1 dm = 10 cm.', ['Đúng — 1 dm bằng 10 cm.', 'Sai — 100 cm là 1 m, không phải 1 dm.', 'Sai — 1 dm dài hơn 1 cm nhiều.', 'Sai — 1 dm bằng 10 cm chứ không phải 5 cm.']),
    Q('20 cm bằng bao nhiêu dm?', ['200 dm', '20 dm', '2 dm', '0,5 dm'], 2, '20 cm : 10 = 2 dm.', ['Sai — em nhân nhầm, phải chia cho 10.', 'Sai — 20 cm không bằng 20 dm.', 'Đúng — 20 cm chia 10 được 2 dm.', 'Sai — 2 dm mới đúng, đừng nhầm đơn vị.']),
    Q('3 dm bằng bao nhiêu cm?', ['13 cm', '300 cm', '30 cm', '3 cm'], 2, '3 × 10 = 30 cm.', ['Sai — em cộng nhầm, phải nhân với 10.', 'Sai — 300 cm là 3 m, quá dài.', 'Đúng — 3 dm nhân 10 được 30 cm.', 'Sai — 3 dm dài hơn 3 cm, phải đổi đúng.']),
    Q('5 dm + 4 dm = ?', ['54 dm', '9 dm', '20 dm', '1 dm'], 1, '5 + 4 = 9 dm.', ['Sai — em ghép số chứ chưa cộng.', 'Đúng — 5 + 4 = 9 dm.', 'Sai — 20 là phép nhân, đề là phép cộng.', 'Sai — đây là phép cộng, không phải trừ.']),
    Q('Đo chiều dài quyển sách nên dùng?', ['mm (đo vật rất nhỏ như hạt cát)', 'm (đo chiều cao của lớp học)', 'cm hoặc dm', 'km (đo quãng đường xa giữa hai tỉnh)'], 2, 'Quyển sách ~ 20 cm = 2 dm.', ['Sai — mm dùng cho vật rất nhỏ, quyển sách lớn hơn.', 'Sai — mét dùng cho vật to như lớp học.', 'Đúng — quyển sách dài khoảng 20 cm hay 2 dm.', 'Sai — km dùng cho quãng đường rất xa.']),
    Q('7 dm − 3 dm = ?', ['40 dm', '21 dm', '4 dm', '10 dm'], 2, '7 − 3 = 4 dm.', ['Sai — đây là phép trừ, không phải nối số.', 'Sai — 21 là phép nhân, đề là phép trừ.', 'Đúng — 7 − 3 = 4 dm.', 'Sai — 10 là phép cộng, đề là phép trừ.']),
  ]),

  M(5, 'Phép cộng có nhớ trong phạm vi 20 (1)', [
    Q('9 + 5 = ?', ['12', '14', '15', '13'], 1, '9 + 1 = 10, + 4 = 14. Hoặc đếm tiếp 9 → 14.', ['Sai — em quên nhớ, 9 + 5 = 14.', 'Đúng — tách 9 + 1 = 10, thêm 4 thành 14.', 'Sai — em cộng dư 1, đáp án là 14.', 'Sai — đếm tiếp từ 9 thì được 14.']),
    Q('8 + 6 = ?', ['14', '15', '12', '13'], 0, '8 + 2 = 10, + 4 = 14.', ['Đúng — tách 8 + 2 = 10, thêm 4 thành 14.', 'Sai — em cộng dư 1, đúng là 14.', 'Sai — em quên nhớ rồi, 8 + 6 = 14.', 'Sai — đáp án đúng là 14.']),
    Q('7 + 5 = ?', ['12', '14', '11', '13'], 0, '7 + 3 = 10, + 2 = 12.', ['Đúng — tách 7 + 3 = 10, thêm 2 thành 12.', 'Sai — em cộng dư, đúng là 12.', 'Sai — em quên nhớ, 7 + 5 = 12.', 'Sai — đáp án đúng là 12.']),
    Q('9 + 9 = ?', ['17', '16', '18', '19'], 2, '9 + 1 = 10, + 8 = 18.', ['Sai — em cộng thiếu, 9 + 9 = 18.', 'Sai — em quên nhớ rồi, đúng là 18.', 'Đúng — tách 9 + 1 = 10, thêm 8 thành 18.', 'Sai — em cộng dư 1, đúng là 18.']),
    Q('6 + 7 = ?', ['14', '12', '11', '13'], 3, '6 + 4 = 10, + 3 = 13.', ['Sai — em cộng dư 1, đúng là 13.', 'Sai — em cộng thiếu, 6 + 7 = 13.', 'Sai — em quên nhớ, đúng là 13.', 'Đúng — tách 6 + 4 = 10, thêm 3 thành 13.']),
    Q('8 + 8 = ?', ['17', '18', '16', '15'], 2, '8 + 2 = 10, + 6 = 16.', ['Sai — em cộng dư 1, đúng là 16.', 'Sai — em cộng dư 2, đúng là 16.', 'Đúng — tách 8 + 2 = 10, thêm 6 thành 16.', 'Sai — em cộng thiếu, 8 + 8 = 16.']),
  ]),

  M(6, 'Phép cộng có nhớ trong phạm vi 20 (2)', [
    Q('9 + 7 = ?', ['15', '17', '16', '18'], 2, '9 + 1 + 6 = 16.', ['Sai — em cộng thiếu, 9 + 7 = 16.', 'Sai — em cộng dư 1, đúng là 16.', 'Đúng — tách 9 + 1 = 10, thêm 6 thành 16.', 'Sai — em cộng dư 2, đúng là 16.']),
    Q('8 + 5 = ?', ['12', '14', '15', '13'], 3, '8 + 2 + 3 = 13.', ['Sai — em quên nhớ, 8 + 5 = 13.', 'Sai — em cộng dư 1, đúng là 13.', 'Sai — em cộng dư 2, đúng là 13.', 'Đúng — tách 8 + 2 = 10, thêm 3 thành 13.']),
    Q('7 + 8 = ?', ['16', '15', '17', '14'], 1, '7 + 3 + 5 = 15.', ['Sai — em cộng dư 1, đúng là 15.', 'Đúng — tách 7 + 3 = 10, thêm 5 thành 15.', 'Sai — em cộng dư 2, đúng là 15.', 'Sai — em cộng thiếu, 7 + 8 = 15.']),
    Q('9 + 4 = ?', ['11', '14', '12', '13'], 3, '9 + 1 + 3 = 13.', ['Sai — em cộng thiếu, 9 + 4 = 13.', 'Sai — em cộng dư 1, đúng là 13.', 'Sai — em quên nhớ, đúng là 13.', 'Đúng — tách 9 + 1 = 10, thêm 3 thành 13.']),
    Q('Bút có 8 cái màu xanh và 7 cái màu đỏ. Tổng?', ['16', '15', '17', '14'], 1, '8 + 7 = 15 cái bút.', ['Sai — em cộng dư 1, 8 + 7 = 15.', 'Đúng — 8 + 7 = 15 cái bút.', 'Sai — em cộng dư 2, đúng là 15.', 'Sai — em cộng thiếu, đúng là 15.']),
    Q('6 + 8 = ?', ['14', '12', '15', '13'], 0, '6 + 4 + 4 = 14.', ['Đúng — tách 6 + 4 = 10, thêm 4 thành 14.', 'Sai — em quên nhớ, 6 + 8 = 14.', 'Sai — em cộng dư 1, đúng là 14.', 'Sai — em cộng thiếu, đúng là 14.']),
  ]),

  M(7, 'Cộng số có 2 chữ số (có nhớ): 26 + 5', [
    Q('26 + 5 = ?', ['33', '31', '32', '30'], 1, '6 + 5 = 11, viết 1 nhớ 1; 2 + 1 = 3 → 31.', ['Sai — em cộng dư, đúng là 31.', 'Đúng — 6 + 5 = 11, viết 1 nhớ 1, được 31.', 'Sai — em cộng dư 1, đúng là 31.', 'Sai — em quên cộng số nhớ, đúng là 31.']),
    Q('37 + 8 = ?', ['45', '44', '46', '47'], 0, '7 + 8 = 15, nhớ 1; 3 + 1 = 4 → 45.', ['Đúng — 7 + 8 = 15, nhớ 1 sang hàng chục thành 45.', 'Sai — em quên nhớ, đúng là 45.', 'Sai — em cộng dư 1, đúng là 45.', 'Sai — em cộng dư 2, đúng là 45.']),
    Q('48 + 7 = ?', ['54', '56', '57', '55'], 3, '8 + 7 = 15; 4 + 1 = 5 → 55.', ['Sai — em quên nhớ 1, đúng là 55.', 'Sai — em cộng dư 1, đúng là 55.', 'Sai — em cộng dư 2, đúng là 55.', 'Đúng — 8 + 7 = 15, nhớ 1, được 55.']),
    Q('29 + 4 = ?', ['32', '35', '33', '34'], 2, '9 + 4 = 13; 2 + 1 = 3 → 33.', ['Sai — em quên nhớ, đúng là 33.', 'Sai — em cộng dư 2, đúng là 33.', 'Đúng — 9 + 4 = 13, nhớ 1, được 33.', 'Sai — em cộng dư 1, đúng là 33.']),
    Q('Có 47 viên kẹo, mẹ cho thêm 6 viên. Tổng?', ['53', '52', '54', '55'], 0, '47 + 6 = 53 viên.', ['Đúng — 47 + 6 = 53 viên kẹo.', 'Sai — em cộng thiếu, đúng là 53.', 'Sai — em cộng dư 1, đúng là 53.', 'Sai — em cộng dư 2, đúng là 53.']),
    Q('58 + 9 = ?', ['69', '66', '67', '68'], 2, '8 + 9 = 17; 5 + 1 = 6 → 67.', ['Sai — em cộng dư 2, đúng là 67.', 'Sai — em quên nhớ, đúng là 67.', 'Đúng — 8 + 9 = 17, nhớ 1, được 67.', 'Sai — em cộng dư 1, đúng là 67.']),
  ]),

  M(8, 'Cộng số có 2 chữ số (có nhớ): 36 + 15', [
    Q('36 + 15 = ?', ['50', '52', '51', '41'], 2, '6 + 5 = 11; 3 + 1 + 1 = 5 → 51.', ['Sai — em quên nhớ 1, đúng là 51.', 'Sai — em cộng dư 1, đúng là 51.', 'Đúng — 6 + 5 = 11, nhớ 1; 3 + 1 + 1 = 5, được 51.', 'Sai — em quên cộng số nhớ, đúng là 51.']),
    Q('47 + 18 = ?', ['60', '55', '65', '64'], 2, '7 + 8 = 15; 4 + 1 + 1 = 6 → 65.', ['Sai — em cộng nhầm, đúng là 65.', 'Sai — em cộng thiếu, đúng là 65.', 'Đúng — 7 + 8 = 15, nhớ 1; 4 + 1 + 1 = 6, được 65.', 'Sai — em quên nhớ 1, đúng là 65.']),
    Q('28 + 24 = ?', ['46', '42', '50', '52'], 3, '8 + 4 = 12; 2 + 2 + 1 = 5 → 52.', ['Sai — em cộng nhầm, đúng là 52.', 'Sai — em quên nhớ, đúng là 52.', 'Sai — em quên cộng số nhớ, đúng là 52.', 'Đúng — 8 + 4 = 12, nhớ 1; 2 + 2 + 1 = 5, được 52.']),
    Q('39 + 16 = ?', ['55', '46', '45', '54'], 0, '9 + 6 = 15; 3 + 1 + 1 = 5 → 55.', ['Đúng — 9 + 6 = 15, nhớ 1; 3 + 1 + 1 = 5, được 55.', 'Sai — em cộng nhầm, đúng là 55.', 'Sai — em quên nhớ 1, đúng là 55.', 'Sai — em cộng thiếu, đúng là 55.']),
    Q('58 + 17 = ?', ['75', '77', '85', '65'], 0, '8 + 7 = 15; 5 + 1 + 1 = 7 → 75.', ['Đúng — 8 + 7 = 15, nhớ 1; 5 + 1 + 1 = 7, được 75.', 'Sai — em cộng dư 2, đúng là 75.', 'Sai — em cộng dư, đúng là 75.', 'Sai — em quên nhớ, đúng là 75.']),
    Q('Lớp 2A có 28 bạn, lớp 2B có 27 bạn. Tổng?', ['56', '55', '54', '57'], 1, '28 + 27 = 55 bạn.', ['Sai — em cộng dư 1, đúng là 55.', 'Đúng — 28 + 27 = 55 bạn.', 'Sai — em cộng thiếu, đúng là 55.', 'Sai — em cộng dư 2, đúng là 55.']),
  ]),

  M(9, 'Bài toán có lời văn (cộng)', [
    Q('An có 17 viên bi, Bình có 25 viên bi. Cả hai có?', ['43', '41', '44', '42'], 3, '17 + 25 = 42 viên bi.', ['Sai — em cộng dư 1, đúng là 42.', 'Sai — em cộng thiếu, đúng là 42.', 'Sai — em cộng dư 2, đúng là 42.', 'Đúng — 17 + 25 = 42 viên bi.']),
    Q('Vườn có 36 cây cam và 28 cây xoài. Tổng số cây?', ['66', '64', '67', '65'], 1, '36 + 28 = 64 cây.', ['Sai — em cộng dư 2, đúng là 64.', 'Đúng — 36 + 28 = 64 cây.', 'Sai — em cộng dư 3, đúng là 64.', 'Sai — em cộng dư 1, đúng là 64.']),
    Q('Trên giá sách có 45 cuốn, mua thêm 18 cuốn. Tất cả?', ['62', '63', '64', '65'], 1, '45 + 18 = 63 cuốn.', ['Sai — em cộng thiếu, đúng là 63.', 'Đúng — 45 + 18 = 63 cuốn.', 'Sai — em cộng dư 1, đúng là 63.', 'Sai — em cộng dư 2, đúng là 63.']),
    Q('Bố đi câu được 19 con cá, bác câu được 27 con. Tổng?', ['45', '47', '46', '48'], 2, '19 + 27 = 46 con cá.', ['Sai — em cộng thiếu, đúng là 46.', 'Sai — em cộng dư 1, đúng là 46.', 'Đúng — 19 + 27 = 46 con cá.', 'Sai — em cộng dư 2, đúng là 46.']),
    Q('Lan gấp 28 con hạc, Mai gấp 35 con. Tổng?', ['62', '65', '63', '64'], 2, '28 + 35 = 63 con hạc.', ['Sai — em cộng thiếu, đúng là 63.', 'Sai — em cộng dư 2, đúng là 63.', 'Đúng — 28 + 35 = 63 con hạc.', 'Sai — em cộng dư 1, đúng là 63.']),
    Q('Mẹ mua 47 quả táo và 6 quả cam. Tổng?', ['53', '51', '52', '54'], 0, '47 + 6 = 53 quả.', ['Đúng — 47 + 6 = 53 quả.', 'Sai — em cộng thiếu, đúng là 53.', 'Sai — em quên nhớ, đúng là 53.', 'Sai — em cộng dư 1, đúng là 53.']),
  ]),

  M(10, 'Phép trừ có nhớ trong phạm vi 20 (1)', [
    Q('11 − 5 = ?', ['6', '4', '5', '7'], 0, 'Mượn 1: 11 = 10 + 1; bớt 5 → 6.', ['Đúng — 11 trừ 5 còn 6.', 'Sai — em trừ dư, đúng là 6.', 'Sai — em trừ dư 1, đúng là 6.', 'Sai — em trừ thiếu, đúng là 6.']),
    Q('12 − 7 = ?', ['5', '3', '6', '4'], 0, '12 = 10 + 2; 10 − 7 = 3, + 2 = 5.', ['Đúng — 12 trừ 7 còn 5.', 'Sai — em trừ dư 2, đúng là 5.', 'Sai — em trừ thiếu, đúng là 5.', 'Sai — em trừ dư 1, đúng là 5.']),
    Q('13 − 8 = ?', ['6', '5', '7', '4'], 1, '13 − 8 = 5.', ['Sai — em trừ thiếu, đúng là 5.', 'Đúng — 13 trừ 8 còn 5.', 'Sai — em trừ thiếu 2, đúng là 5.', 'Sai — em trừ dư 1, đúng là 5.']),
    Q('14 − 9 = ?', ['5', '3', '4', '6'], 0, '14 − 9 = 5.', ['Đúng — 14 trừ 9 còn 5.', 'Sai — em trừ dư 2, đúng là 5.', 'Sai — em trừ dư 1, đúng là 5.', 'Sai — em trừ thiếu, đúng là 5.']),
    Q('15 − 6 = ?', ['8', '7', '10', '9'], 3, '15 − 6 = 9.', ['Sai — em trừ dư 1, đúng là 9.', 'Sai — em trừ dư 2, đúng là 9.', 'Sai — em trừ thiếu, đúng là 9.', 'Đúng — 15 trừ 6 còn 9.']),
    Q('17 − 8 = ?', ['8', '9', '7', '10'], 1, '17 − 8 = 9.', ['Sai — em trừ dư 1, đúng là 9.', 'Đúng — 17 trừ 8 còn 9.', 'Sai — em trừ dư 2, đúng là 9.', 'Sai — em trừ thiếu, đúng là 9.']),
  ]),

  M(11, 'Phép trừ có nhớ trong phạm vi 20 (2)', [
    Q('16 − 7 = ?', ['7', '9', '8', '10'], 1, '16 − 7 = 9.', ['Sai — em trừ dư 2, đúng là 9.', 'Đúng — 16 trừ 7 còn 9.', 'Sai — em trừ dư 1, đúng là 9.', 'Sai — em trừ thiếu, đúng là 9.']),
    Q('18 − 9 = ?', ['7', '9', '10', '8'], 1, '18 − 9 = 9.', ['Sai — em trừ dư 2, đúng là 9.', 'Đúng — 18 trừ 9 còn 9.', 'Sai — em trừ thiếu, đúng là 9.', 'Sai — em trừ dư 1, đúng là 9.']),
    Q('15 − 9 = ?', ['4', '5', '6', '7'], 2, '15 − 9 = 6.', ['Sai — em trừ dư 2, đúng là 6.', 'Sai — em trừ dư 1, đúng là 6.', 'Đúng — 15 trừ 9 còn 6.', 'Sai — em trừ thiếu, đúng là 6.']),
    Q('13 − 5 = ?', ['6', '9', '7', '8'], 3, '13 − 5 = 8.', ['Sai — em trừ dư 2, đúng là 8.', 'Sai — em trừ thiếu, đúng là 8.', 'Sai — em trừ dư 1, đúng là 8.', 'Đúng — 13 trừ 5 còn 8.']),
    Q('Em có 12 cái kẹo, cho bạn 8 cái. Còn?', ['5', '6', '4', '3'], 2, '12 − 8 = 4 cái kẹo.', ['Sai — em trừ dư 1, đúng là 4.', 'Sai — em trừ dư 2, đúng là 4.', 'Đúng — 12 − 8 = 4 cái kẹo.', 'Sai — em trừ thiếu, đúng là 4.']),
    Q('14 − 6 = ?', ['7', '9', '8', '6'], 2, '14 − 6 = 8.', ['Sai — em trừ dư 1, đúng là 8.', 'Sai — em trừ thiếu, đúng là 8.', 'Đúng — 14 trừ 6 còn 8.', 'Sai — em trừ dư 2, đúng là 8.']),
  ]),

  M(12, '11 trừ đi một số · 12 trừ đi một số', [
    Q('11 − 2 = ?', ['10', '7', '9', '8'], 2, '11 − 2 = 9.', ['Sai — em trừ thiếu, đúng là 9.', 'Sai — em trừ dư 2, đúng là 9.', 'Đúng — 11 trừ 2 còn 9.', 'Sai — em trừ dư 1, đúng là 9.']),
    Q('11 − 3 = ?', ['6', '9', '8', '7'], 2, '11 − 3 = 8.', ['Sai — em trừ dư 2, đúng là 8.', 'Sai — em trừ thiếu, đúng là 8.', 'Đúng — 11 trừ 3 còn 8.', 'Sai — em trừ dư 1, đúng là 8.']),
    Q('11 − 4 = ?', ['8', '7', '6', '5'], 1, '11 − 4 = 7.', ['Sai — em trừ thiếu, đúng là 7.', 'Đúng — 11 trừ 4 còn 7.', 'Sai — em trừ dư 1, đúng là 7.', 'Sai — em trừ dư 2, đúng là 7.']),
    Q('12 − 3 = ?', ['10', '7', '8', '9'], 3, '12 − 3 = 9.', ['Sai — em trừ thiếu, đúng là 9.', 'Sai — em trừ dư 2, đúng là 9.', 'Sai — em trừ dư 1, đúng là 9.', 'Đúng — 12 trừ 3 còn 9.']),
    Q('12 − 5 = ?', ['7', '5', '6', '8'], 0, '12 − 5 = 7.', ['Đúng — 12 trừ 5 còn 7.', 'Sai — em trừ dư 2, đúng là 7.', 'Sai — em trừ dư 1, đúng là 7.', 'Sai — em trừ thiếu, đúng là 7.']),
    Q('11 − 6 = ?', ['4', '6', '5', '3'], 2, '11 − 6 = 5.', ['Sai — em trừ dư 1, đúng là 5.', 'Sai — em trừ thiếu, đúng là 5.', 'Đúng — 11 trừ 6 còn 5.', 'Sai — em trừ dư 2, đúng là 5.']),
  ]),

  M(13, 'Trừ số có 2 chữ số (có nhớ)', [
    Q('32 − 8 = ?', ['24', '25', '23', '26'], 0, 'Mượn 1: 32 = 20 + 12; 12 − 8 = 4 → 24.', ['Đúng — mượn 1 chục: 12 − 8 = 4, được 24.', 'Sai — em trừ dư 1, đúng là 24.', 'Sai — em trừ thiếu, đúng là 24.', 'Sai — em quên mượn, đúng là 24.']),
    Q('51 − 15 = ?', ['36', '35', '34', '46'], 0, '51 − 15 = 36.', ['Đúng — 51 − 15 = 36.', 'Sai — em trừ thiếu, đúng là 36.', 'Sai — em trừ thiếu 2, đúng là 36.', 'Sai — em quên mượn ở hàng chục, đúng là 36.']),
    Q('63 − 27 = ?', ['36', '46', '35', '34'], 0, '63 − 27 = 36.', ['Đúng — 63 − 27 = 36.', 'Sai — em quên mượn ở hàng chục, đúng là 36.', 'Sai — em trừ thiếu, đúng là 36.', 'Sai — em trừ thiếu 2, đúng là 36.']),
    Q('70 − 38 = ?', ['32', '38', '42', '40'], 0, '70 − 38 = 32.', ['Đúng — 70 − 38 = 32.', 'Sai — đây là số trừ, không phải kết quả.', 'Sai — em quên mượn, đúng là 32.', 'Sai — em trừ nhầm, đúng là 32.']),
    Q('85 − 49 = ?', ['36', '46', '34', '35'], 0, '85 − 49 = 36.', ['Đúng — 85 − 49 = 36.', 'Sai — em quên mượn ở hàng chục, đúng là 36.', 'Sai — em trừ thiếu 2, đúng là 36.', 'Sai — em trừ thiếu, đúng là 36.']),
    Q('Cửa hàng có 92 chiếc áo, bán 36 chiếc. Còn?', ['57', '54', '56', '55'], 2, '92 − 36 = 56 chiếc.', ['Sai — em trừ dư 1, đúng là 56.', 'Sai — em trừ thiếu, đúng là 56.', 'Đúng — 92 − 36 = 56 chiếc.', 'Sai — em trừ thiếu, đúng là 56.']),
  ]),

  M(14, 'Bài toán có lời văn (trừ)', [
    Q('Lan có 35 nhãn vở, cho bạn 12 cái. Còn?', ['24', '25', '23', '22'], 2, '35 − 12 = 23 nhãn vở.', ['Sai — em trừ thiếu, đúng là 23.', 'Sai — em trừ thiếu 2, đúng là 23.', 'Đúng — 35 − 12 = 23 nhãn vở.', 'Sai — em trừ dư 1, đúng là 23.']),
    Q('Bể có 50 con cá, vớt ra 18 con. Còn?', ['31', '34', '32', '33'], 2, '50 − 18 = 32 con cá.', ['Sai — em trừ dư 1, đúng là 32.', 'Sai — em quên mượn, đúng là 32.', 'Đúng — 50 − 18 = 32 con cá.', 'Sai — em trừ thiếu, đúng là 32.']),
    Q('Lớp có 35 bạn, vắng 6 bạn. Có mặt?', ['29', '31', '28', '30'], 0, '35 − 6 = 29 bạn.', ['Đúng — 35 − 6 = 29 bạn có mặt.', 'Sai — em trừ thiếu, đúng là 29.', 'Sai — em trừ dư 1, đúng là 29.', 'Sai — em quên mượn, đúng là 29.']),
    Q('Cây cao 76 cm, bị bão làm gãy mất 28 cm. Cây còn cao?', ['46', '48', '44', '45'], 1, '76 − 28 = 48 cm.', ['Sai — em trừ dư 2, đúng là 48.', 'Đúng — 76 − 28 = 48 cm.', 'Sai — em trừ dư 4, đúng là 48.', 'Sai — em trừ dư 3, đúng là 48.']),
    Q('Em có 100 con tem, đã dán 45 con. Còn?', ['54', '57', '56', '55'], 3, '100 − 45 = 55 con tem.', ['Sai — em trừ thiếu, đúng là 55.', 'Sai — em trừ dư 2, đúng là 55.', 'Sai — em trừ dư 1, đúng là 55.', 'Đúng — 100 − 45 = 55 con tem.']),
    Q('Sách 84 trang, đã đọc 26 trang. Còn?', ['59', '60', '57', '58'], 3, '84 − 26 = 58 trang.', ['Sai — em trừ dư 1, đúng là 58.', 'Sai — em trừ dư 2, đúng là 58.', 'Sai — em trừ thiếu, đúng là 58.', 'Đúng — 84 − 26 = 58 trang.']),
  ]),

  M(15, 'Hình tứ giác · Hình chữ nhật', [
    Q('Hình tứ giác có mấy cạnh?', ['3', '6', '4', '5'], 2, 'Tứ = 4 → 4 cạnh, 4 đỉnh.', ['Sai — 3 cạnh là hình tam giác.', 'Sai — tứ giác chỉ có 4 cạnh, không phải 6.', 'Đúng — \'tứ\' nghĩa là 4, tứ giác có 4 cạnh.', 'Sai — tứ giác có 4 cạnh, không phải 5.']),
    Q('Hình chữ nhật có?', ['Chỉ 3 cạnh', '5 cạnh', '4 cạnh bằng nhau', '2 cặp cạnh dài-ngắn, 4 góc vuông'], 3, 'Hình chữ nhật: dài = dài, ngắn = ngắn, đều góc vuông.', ['Sai — 3 cạnh là tam giác.', 'Sai — hình chữ nhật có 4 cạnh, không phải 5.', 'Sai — 4 cạnh bằng nhau là hình vuông.', 'Đúng — hình chữ nhật có 2 cạnh dài, 2 cạnh ngắn và 4 góc vuông.']),
    Q('Hình vuông là?', ['Hình tròn', 'Một đường thẳng', 'Một loại tam giác', 'Một loại tứ giác đặc biệt'], 3, 'Hình vuông = tứ giác có 4 cạnh bằng + 4 góc vuông.', ['Sai — hình tròn không có cạnh.', 'Sai — đường thẳng không phải là hình có cạnh.', 'Sai — tam giác chỉ có 3 cạnh.', 'Đúng — hình vuông là tứ giác có 4 cạnh bằng nhau, 4 góc vuông.']),
    Q('Đếm số tứ giác trong: 1 hình vuông + 1 hình chữ nhật + 1 hình thoi', ['2', '0', '3', '1'], 2, 'Cả 3 đều là tứ giác (đều có 4 cạnh).', ['Sai — em đếm thiếu, cả 3 hình đều là tứ giác.', 'Sai — cả 3 hình đều có 4 cạnh nên đều là tứ giác.', 'Đúng — vuông, chữ nhật, thoi đều có 4 cạnh nên là tứ giác.', 'Sai — em đếm thiếu, có tới 3 tứ giác.']),
    Q('Trang giấy A4 thường là hình?', ['Chữ nhật', 'Tam giác', 'Hình tròn như mặt đồng hồ', 'Lục giác'], 0, 'Tờ A4 là hình chữ nhật.', ['Đúng — tờ giấy A4 là hình chữ nhật.', 'Sai — tam giác có 3 cạnh, tờ giấy có 4 cạnh.', 'Sai — tờ giấy có cạnh thẳng, không tròn.', 'Sai — lục giác có 6 cạnh, tờ giấy chỉ 4 cạnh.']),
    Q('Hình tứ giác có mấy đỉnh?', ['3', '6', '5', '4'], 3, '4 đỉnh.', ['Sai — 3 đỉnh là tam giác.', 'Sai — tứ giác có 4 đỉnh, không phải 6.', 'Sai — tứ giác có 4 đỉnh, không phải 5.', 'Đúng — tứ giác có 4 đỉnh (và 4 cạnh).']),
  ]),

  M(16, 'Mét (m)', [
    Q('1 m bằng bao nhiêu cm?', ['1000 cm', '50 cm', '100 cm', '10 cm'], 2, '1 m = 100 cm.', ['Sai — 1000 cm là 10 m, quá dài.', 'Sai — 1 m bằng 100 cm, không phải 50.', 'Đúng — 1 m bằng 100 cm.', 'Sai — 10 cm là 1 dm, không phải 1 m.']),
    Q('1 m bằng bao nhiêu dm?', ['10 dm', '5 dm', '100 dm', '1 dm'], 0, '1 m = 10 dm.', ['Đúng — 1 m bằng 10 dm.', 'Sai — 1 m bằng 10 dm, không phải 5.', 'Sai — 100 dm là 10 m, quá dài.', 'Sai — 1 m dài hơn 1 dm nhiều.']),
    Q('2 m + 3 m = ?', ['6 m', '50 m', '23 m', '5 m'], 3, '2 + 3 = 5 m.', ['Sai — 6 là phép nhân, đề là phép cộng.', 'Sai — em đổi sang cm rồi cộng nhầm.', 'Sai — em ghép số chứ chưa cộng.', 'Đúng — 2 + 3 = 5 m.']),
    Q('Bố cao 1 m 70 cm = ? cm', ['17', '107', '70', '170'], 3, '100 + 70 = 170 cm.', ['Sai — em đổi nhầm, 1 m là 100 cm.', 'Sai — em đổi 1 m thành 10 cm là sai.', 'Sai — em quên cộng 1 m (100 cm).', 'Đúng — 1 m là 100 cm, thêm 70 cm thành 170 cm.']),
    Q('Đo chiều cao của em nên dùng?', ['cm hoặc m', 'mm (chỉ dùng đo vật rất nhỏ)', 'km (đo quãng đường rất dài)', 'lít (dùng đo chất lỏng, không đo chiều cao)'], 0, 'Chiều cao thường đo bằng cm/m.', ['Đúng — chiều cao của người đo bằng cm hoặc m.', 'Sai — mm dùng cho vật rất nhỏ.', 'Sai — km dùng cho quãng đường rất xa.', 'Sai — lít dùng đo chất lỏng, không đo chiều cao.']),
    Q('5 m − 2 m = ?', ['25 m', '52 m', '7 m', '3 m'], 3, '5 − 2 = 3 m.', ['Sai — em đổi nhầm đơn vị.', 'Sai — em ghép số chứ chưa trừ.', 'Sai — 7 là phép cộng, đề là phép trừ.', 'Đúng — 5 − 2 = 3 m.']),
  ]),

  M(17, 'Ki-lô-gam (kg)', [
    Q('Đơn vị dùng để cân nặng vật là?', ['lít (dùng đo chất lỏng)', 'mét (dùng đo chiều dài)', 'ki-lô-gam (kg)', 'giờ (dùng đo thời gian)'], 2, 'Cân vật → dùng kg.', ['Sai — lít dùng đo chất lỏng, không đo cân nặng.', 'Sai — mét dùng đo chiều dài.', 'Đúng — cân nặng của vật đo bằng ki-lô-gam (kg).', 'Sai — giờ dùng đo thời gian.']),
    Q('1 kg = ? g', ['1000 g', '500 g', '10 g', '100 g'], 0, '1 kg = 1000 g.', ['Đúng — 1 kg bằng 1000 g.', 'Sai — 500 g chỉ là nửa kg.', 'Sai — 10 g rất nhẹ, 1 kg lớn hơn nhiều.', 'Sai — 1 kg bằng 1000 g, không phải 100.']),
    Q('Cân đu đủ nặng 3 kg và dưa hấu 5 kg. Tổng?', ['9 kg', '8 kg', '10 kg', '7 kg'], 1, '3 + 5 = 8 kg.', ['Sai — em cộng dư 1, đúng là 8 kg.', 'Đúng — 3 + 5 = 8 kg.', 'Sai — em cộng dư 2, đúng là 8 kg.', 'Sai — em cộng thiếu, đúng là 8 kg.']),
    Q('Mẹ mua 4 kg gạo và 2 kg đường. Tổng?', ['6 kg', '7 kg', '8 kg', '5 kg'], 0, '4 + 2 = 6 kg.', ['Đúng — 4 + 2 = 6 kg.', 'Sai — em cộng dư 1, đúng là 6 kg.', 'Sai — 8 là phép nhân, đề là phép cộng.', 'Sai — em cộng thiếu, đúng là 6 kg.']),
    Q('Túi cam 5 kg, bớt 2 kg. Còn?', ['2 kg', '3 kg', '1 kg', '7 kg'], 1, '5 − 2 = 3 kg.', ['Sai — em trừ dư 1, đúng là 3 kg.', 'Đúng — 5 − 2 = 3 kg.', 'Sai — em trừ dư 2, đúng là 3 kg.', 'Sai — 7 là phép cộng, đề là phép trừ.']),
    Q('Cân con voi nhỏ thì dùng?', ['kg', 'cm (đơn vị đo chiều dài, không đo cân nặng)', 'g (gam – quá nhỏ với con voi)', 'lít (dùng cho chất lỏng)'], 0, 'Vật nặng → kg.', ['Đúng — con voi rất nặng nên cân bằng kg.', 'Sai — cm dùng đo chiều dài, không đo cân nặng.', 'Sai — gam quá nhỏ để cân con voi.', 'Sai — lít dùng cho chất lỏng.']),
  ]),

  M(18, 'Kiểm tra Học kỳ 1', [
    Q('Số liền sau 99 là?', ['90', '999', '98', '100'], 3, '99 + 1 = 100.', ['Sai — 90 nhỏ hơn 99.', 'Sai — 999 là số khác hẳn.', 'Sai — 98 là số liền trước 99.', 'Đúng — 99 + 1 = 100.']),
    Q('Trong 35 − 8 = 27, hiệu là?', ['27', '35', '43', '8'], 0, 'Hiệu là kết quả.', ['Đúng — hiệu là kết quả phép trừ, tức 27.', 'Sai — 35 là số bị trừ.', 'Sai — 43 là tổng nếu cộng, không đúng.', 'Sai — 8 là số trừ.']),
    Q('48 + 17 = ?', ['55', '64', '66', '65'], 3, '48 + 17 = 65.', ['Sai — em quên nhớ, đúng là 65.', 'Sai — em cộng thiếu, đúng là 65.', 'Sai — em cộng dư 1, đúng là 65.', 'Đúng — 48 + 17 = 65.']),
    Q('72 − 28 = ?', ['40', '44', '54', '46'], 1, '72 − 28 = 44.', ['Sai — em quên mượn, đúng là 44.', 'Đúng — 72 − 28 = 44.', 'Sai — em trừ nhầm, đúng là 44.', 'Sai — em trừ dư 2, đúng là 44.']),
    Q('1 m = ? cm', ['100', '10', '1000', '50'], 0, '1 m = 100 cm.', ['Đúng — 1 m bằng 100 cm.', 'Sai — 10 cm là 1 dm, không phải 1 m.', 'Sai — 1000 cm là 10 m.', 'Sai — 1 m bằng 100 cm, không phải 50.']),
    Q('1 kg = ? g', ['500', '10', '100', '1000'], 3, '1 kg = 1000 g.', ['Sai — 500 g chỉ là nửa kg.', 'Sai — 10 g rất nhẹ.', 'Sai — 1 kg bằng 1000 g, không phải 100.', 'Đúng — 1 kg bằng 1000 g.']),
    Q('Em có 36 viên bi, cho bạn 8 viên. Còn bao nhiêu?', ['29', '44', '30', '28'], 3, '36 − 8 = 28.', ['Sai — em trừ dư 1, đúng là 28.', 'Sai — 44 là phép cộng, đề là phép trừ.', 'Sai — em trừ dư 2, đúng là 28.', 'Đúng — 36 − 8 = 28 viên bi.']),
    Q('Hình chữ nhật có mấy cạnh?', ['5', '3', '4', '6'], 2, '4 cạnh, 4 góc vuông.', ['Sai — hình chữ nhật có 4 cạnh, không phải 5.', 'Sai — 3 cạnh là tam giác.', 'Đúng — hình chữ nhật có 4 cạnh, 4 góc vuông.', 'Sai — 6 cạnh là lục giác.']),
    Q('27 + 5 = ?', ['32', '31', '33', '22'], 0, '27 + 5 = 32.', ['Đúng — 27 + 5 = 32.', 'Sai — em quên nhớ, đúng là 32.', 'Sai — em cộng dư 1, đúng là 32.', 'Sai — 22 là phép trừ, đề là phép cộng.']),
    Q('Số nào tròn chục: 23, 30, 38, 45?', ['45', '23', '38', '30'], 3, '30 chia hết cho 10.', ['Sai — 45 có đơn vị là 5, không tròn chục.', 'Sai — 23 có đơn vị là 3, không tròn chục.', 'Sai — 38 có đơn vị là 8, không tròn chục.', 'Đúng — 30 có đơn vị bằng 0 nên tròn chục.']),
  ], { difficulty: 2, description: 'Bài kiểm tra cuối Học kỳ 1 — tổng hợp số đến 100, cộng-trừ có nhớ, đơn vị đo.' }),

  // ──────────────── HK2 ────────────────
  M(19, 'Bảng nhân 2', [
    Q('2 × 1 = ?', ['3', '2', '0', '1'], 1, '2 × 1 = 2.', ['Sai — 2 × 1 = 2 chứ không phải 3.', 'Đúng — 2 lấy 1 lần vẫn là 2.', 'Sai — nhân với 1 không ra 0.', 'Sai — đó là số 1, còn 2 × 1 = 2.']),
    Q('2 × 5 = ?', ['15', '12', '7', '10'], 3, '2 lấy 5 lần = 10.', ['Sai — em nhầm bảng nhân, 2 × 5 = 10.', 'Sai — em nhân nhầm, đúng là 10.', 'Sai — 7 là phép cộng 2 + 5, đề là phép nhân.', 'Đúng — 2 lấy 5 lần bằng 10.']),
    Q('2 × 7 = ?', ['12', '14', '15', '13'], 1, '2 × 7 = 14.', ['Sai — em nhân thiếu, 2 × 7 = 14.', 'Đúng — 2 × 7 = 14.', 'Sai — em nhân dư 1, đúng là 14.', 'Sai — em nhân nhầm, đúng là 14.']),
    Q('2 × 9 = ?', ['17', '19', '18', '16'], 2, '2 × 9 = 18.', ['Sai — em nhân thiếu, 2 × 9 = 18.', 'Sai — em nhân dư 1, đúng là 18.', 'Đúng — 2 × 9 = 18.', 'Sai — em nhân thiếu 2, đúng là 18.']),
    Q('Có 2 hộp, mỗi hộp 8 bút. Tổng?', ['16', '10', '14', '15'], 0, '2 × 8 = 16.', ['Đúng — 2 × 8 = 16 cái bút.', 'Sai — 10 là phép cộng 2 + 8, đề là phép nhân.', 'Sai — em nhân thiếu, đúng là 16.', 'Sai — em nhân nhầm, đúng là 16.']),
    Q('2 × 10 = ?', ['12', '102', '22', '20'], 3, '2 chục = 20.', ['Sai — 12 là phép cộng 2 + 10, đề là phép nhân.', 'Sai — em ghép số chứ chưa nhân.', 'Sai — em nhân nhầm, đúng là 20.', 'Đúng — 2 nhân 10 bằng 2 chục, tức 20.']),
  ]),

  M(20, 'Bảng nhân 5', [
    Q('5 × 1 = ?', ['6', '5', '4', '1'], 1, '5 × 1 = 5.', ['Sai — 6 là phép cộng 5 + 1, đề là phép nhân.', 'Đúng — 5 lấy 1 lần vẫn là 5.', 'Sai — 5 × 1 = 5 chứ không phải 4.', 'Sai — đó là số 1, còn 5 × 1 = 5.']),
    Q('5 × 3 = ?', ['15', '18', '8', '12'], 0, '5 × 3 = 15.', ['Đúng — 5 × 3 = 15.', 'Sai — em nhân dư, đúng là 15.', 'Sai — 8 là phép cộng 5 + 3, đề là phép nhân.', 'Sai — em nhầm bảng nhân, đúng là 15.']),
    Q('5 × 6 = ?', ['25', '36', '30', '35'], 2, '5 × 6 = 30.', ['Sai — em nhân thiếu, 5 × 6 = 30.', 'Sai — 36 là 6 × 6, không phải 5 × 6.', 'Đúng — 5 × 6 = 30.', 'Sai — em nhân dư, đúng là 30.']),
    Q('5 × 8 = ?', ['45', '48', '35', '40'], 3, '5 × 8 = 40.', ['Sai — em nhân dư, đúng là 40.', 'Sai — em nhầm bảng nhân, đúng là 40.', 'Sai — em nhân thiếu, đúng là 40.', 'Đúng — 5 × 8 = 40.']),
    Q('5 × 10 = ?', ['55', '15', '510', '50'], 3, '5 chục = 50.', ['Sai — em ghép số chứ chưa nhân.', 'Sai — 15 là phép cộng, đề là phép nhân.', 'Sai — em ghép số chứ chưa nhân.', 'Đúng — 5 nhân 10 bằng 5 chục, tức 50.']),
    Q('Một bó hoa 5 bông. 7 bó có?', ['35', '40', '30', '45'], 0, '5 × 7 = 35 bông.', ['Đúng — 5 × 7 = 35 bông.', 'Sai — em nhân dư, đúng là 35.', 'Sai — em nhân thiếu, đúng là 35.', 'Sai — em nhân dư 2, đúng là 35.']),
  ]),

  M(21, 'Bảng nhân 3', [
    Q('3 × 2 = ?', ['9', '5', '7', '6'], 3, '3 × 2 = 6.', ['Sai — em nhân dư, 3 × 2 = 6.', 'Sai — 5 là phép cộng 3 + 2, đề là phép nhân.', 'Sai — em nhân nhầm, đúng là 6.', 'Đúng — 3 × 2 = 6.']),
    Q('3 × 4 = ?', ['7', '10', '15', '12'], 3, '3 × 4 = 12.', ['Sai — 7 là phép cộng 3 + 4, đề là phép nhân.', 'Sai — em nhân thiếu, đúng là 12.', 'Sai — em nhân dư, đúng là 12.', 'Đúng — 3 × 4 = 12.']),
    Q('3 × 6 = ?', ['21', '12', '15', '18'], 3, '3 × 6 = 18.', ['Sai — em nhân dư, đúng là 18.', 'Sai — em nhân thiếu, đúng là 18.', 'Sai — em nhân thiếu, đúng là 18.', 'Đúng — 3 × 6 = 18.']),
    Q('3 × 8 = ?', ['21', '27', '24', '28'], 2, '3 × 8 = 24.', ['Sai — em nhân thiếu, đúng là 24.', 'Sai — 27 là 3 × 9, không phải 3 × 8.', 'Đúng — 3 × 8 = 24.', 'Sai — em nhân dư, đúng là 24.']),
    Q('Mỗi xe có 3 bánh, 5 xe có?', ['18', '15', '12', '21'], 1, '3 × 5 = 15 bánh.', ['Sai — em nhân dư, đúng là 15.', 'Đúng — 3 × 5 = 15 bánh.', 'Sai — em nhân thiếu, đúng là 15.', 'Sai — em nhân dư 2, đúng là 15.']),
    Q('3 × 9 = ?', ['30', '21', '27', '24'], 2, '3 × 9 = 27.', ['Sai — em nhân dư, đúng là 27.', 'Sai — em nhân thiếu, đúng là 27.', 'Đúng — 3 × 9 = 27.', 'Sai — 24 là 3 × 8, không phải 3 × 9.']),
  ]),

  M(22, 'Nghỉ Tết — Toán vui ngày Tết', [
    Q('Mâm ngũ quả có mấy loại quả?', ['7', '5', '3', '9'], 1, '"Ngũ" = 5 loại quả.', ['Sai — \'ngũ\' nghĩa là 5, không phải 7.', 'Đúng — \'ngũ\' nghĩa là 5 loại quả.', 'Sai — \'ngũ\' nghĩa là 5, không phải 3.', 'Sai — \'ngũ\' nghĩa là 5, không phải 9.']),
    Q('Mẹ lì xì 2 tờ 50.000đ. Tổng?', ['150.000đ', '100.000đ', '200.000đ', '50.000đ'], 1, '2 × 50.000 = 100.000 đ.', ['Sai — em cộng dư một tờ, đúng là 100.000đ.', 'Đúng — 2 tờ 50.000đ là 100.000đ.', 'Sai — em đếm dư, đúng là 100.000đ.', 'Sai — đó mới là 1 tờ, có 2 tờ là 100.000đ.']),
    Q('Bánh chưng vuông có mấy mặt nhìn thấy?', ['8', '5', '6', '4'], 1, 'Bánh chưng khối hộp → 6 mặt, nhìn thấy được 5 khi đặt trên bàn (1 mặt tiếp xúc).', ['Sai — khối hộp chỉ có 6 mặt, không thể thấy 8.', 'Đúng — đặt trên bàn thì 1 mặt khuất, còn thấy 5 mặt.', 'Sai — đủ 6 mặt nhưng 1 mặt áp bàn nên chỉ thấy 5.', 'Sai — em đếm thiếu, nhìn thấy được 5 mặt.']),
    Q('Em có 5 phong bao lì xì, mỗi phong bao 20.000đ. Tổng?', ['50.000', '100.000', '80.000', '125.000'], 1, '5 × 20.000 = 100.000 đ.', ['Sai — em nhân thiếu, đúng là 100.000đ.', 'Đúng — 5 × 20.000 = 100.000đ.', 'Sai — em nhân thiếu một phong bao, đúng là 100.000đ.', 'Sai — em nhân dư, đúng là 100.000đ.']),
    Q('Cành đào nở 12 bông, rụng mất 4. Còn?', ['6', '9', '8', '7'], 2, '12 − 4 = 8 bông.', ['Sai — em trừ dư 2, đúng là 8.', 'Sai — em trừ thiếu, đúng là 8.', 'Đúng — 12 − 4 = 8 bông.', 'Sai — em trừ dư 1, đúng là 8.']),
  ], { difficulty: 1, description: 'Tuần nghỉ Tết — ôn tập nhẹ qua hoạt động Tết.' }),

  M(23, 'Bảng nhân 4', [
    Q('4 × 1 = ?', ['1', '4', '5', '3'], 1, '4 × 1 = 4.', ['Sai — đó là số 1, còn 4 × 1 = 4.', 'Đúng — 4 lấy 1 lần vẫn là 4.', 'Sai — 5 là phép cộng 4 + 1, đề là phép nhân.', 'Sai — 4 × 1 = 4 chứ không phải 3.']),
    Q('4 × 3 = ?', ['10', '15', '7', '12'], 3, '4 × 3 = 12.', ['Sai — em nhân thiếu, đúng là 12.', 'Sai — em nhân dư, đúng là 12.', 'Sai — 7 là phép cộng 4 + 3, đề là phép nhân.', 'Đúng — 4 × 3 = 12.']),
    Q('4 × 5 = ?', ['15', '18', '20', '25'], 2, '4 × 5 = 20.', ['Sai — em nhân thiếu, đúng là 20.', 'Sai — em nhân thiếu 2, đúng là 20.', 'Đúng — 4 × 5 = 20.', 'Sai — 25 là 5 × 5, không phải 4 × 5.']),
    Q('4 × 7 = ?', ['25', '28', '32', '24'], 1, '4 × 7 = 28.', ['Sai — em nhân nhầm, đúng là 28.', 'Đúng — 4 × 7 = 28.', 'Sai — 32 là 4 × 8, không phải 4 × 7.', 'Sai — em nhân thiếu, đúng là 28.']),
    Q('Một bàn có 4 chân, 6 bàn có?', ['28', '32', '24', '20'], 2, '4 × 6 = 24 chân.', ['Sai — em nhân dư, đúng là 24.', 'Sai — em nhân dư 2, đúng là 24.', 'Đúng — 4 × 6 = 24 chân.', 'Sai — em nhân thiếu, đúng là 24.']),
    Q('4 × 9 = ?', ['36', '40', '28', '32'], 0, '4 × 9 = 36.', ['Đúng — 4 × 9 = 36.', 'Sai — em nhân dư, đúng là 36.', 'Sai — 28 là 4 × 7, không phải 4 × 9.', 'Sai — 32 là 4 × 8, không phải 4 × 9.']),
  ]),

  M(24, 'Bảng chia 2', [
    Q('6 : 2 = ?', ['5', '4', '3', '2'], 2, '2 × 3 = 6.', ['Sai — em chia nhầm, vì 2 × 3 = 6 nên đáp án là 3.', 'Sai — em chia dư, đúng là 3.', 'Đúng — 2 × 3 = 6 nên 6 : 2 = 3.', 'Sai — em chia nhầm, đúng là 3.']),
    Q('10 : 2 = ?', ['4', '5', '6', '8'], 1, '2 × 5 = 10.', ['Sai — em chia thiếu, đúng là 5.', 'Đúng — 2 × 5 = 10 nên 10 : 2 = 5.', 'Sai — em chia dư, đúng là 5.', 'Sai — em chia nhầm, đúng là 5.']),
    Q('14 : 2 = ?', ['8', '9', '6', '7'], 3, '2 × 7 = 14.', ['Sai — em chia dư, đúng là 7.', 'Sai — em chia dư 2, đúng là 7.', 'Sai — em chia thiếu, đúng là 7.', 'Đúng — 2 × 7 = 14 nên 14 : 2 = 7.']),
    Q('18 : 2 = ?', ['10', '8', '9', '11'], 2, '2 × 9 = 18.', ['Sai — em chia dư, đúng là 9.', 'Sai — em chia thiếu, đúng là 9.', 'Đúng — 2 × 9 = 18 nên 18 : 2 = 9.', 'Sai — em chia dư 2, đúng là 9.']),
    Q('Có 12 cái kẹo chia đều 2 bạn. Mỗi bạn?', ['4', '7', '6', '5'], 2, '12 : 2 = 6 cái.', ['Sai — em chia thiếu, đúng là 6.', 'Sai — em chia dư, đúng là 6.', 'Đúng — 12 : 2 = 6 cái mỗi bạn.', 'Sai — em chia thiếu, đúng là 6.']),
    Q('20 : 2 = ?', ['11', '12', '10', '9'], 2, '2 × 10 = 20.', ['Sai — em chia dư, đúng là 10.', 'Sai — em chia dư 2, đúng là 10.', 'Đúng — 2 × 10 = 20 nên 20 : 2 = 10.', 'Sai — em chia thiếu, đúng là 10.']),
  ]),

  M(25, 'Bảng chia 5', [
    Q('10 : 5 = ?', ['2', '5', '3', '1'], 0, '5 × 2 = 10.', ['Đúng — 5 × 2 = 10 nên 10 : 5 = 2.', 'Sai — em nhầm với số bị chia, đúng là 2.', 'Sai — em chia dư, đúng là 2.', 'Sai — em chia thiếu, đúng là 2.']),
    Q('15 : 5 = ?', ['2', '3', '5', '4'], 1, '5 × 3 = 15.', ['Sai — em chia thiếu, đúng là 3.', 'Đúng — 5 × 3 = 15 nên 15 : 5 = 3.', 'Sai — em nhầm với số chia, đúng là 3.', 'Sai — em chia dư, đúng là 3.']),
    Q('25 : 5 = ?', ['6', '4', '7', '5'], 3, '5 × 5 = 25.', ['Sai — em chia dư, đúng là 5.', 'Sai — em chia thiếu, đúng là 5.', 'Sai — em chia dư 2, đúng là 5.', 'Đúng — 5 × 5 = 25 nên 25 : 5 = 5.']),
    Q('35 : 5 = ?', ['7', '8', '5', '6'], 0, '5 × 7 = 35.', ['Đúng — 5 × 7 = 35 nên 35 : 5 = 7.', 'Sai — em chia dư, đúng là 7.', 'Sai — em chia thiếu, đúng là 7.', 'Sai — em chia thiếu, đúng là 7.']),
    Q('Có 40 chiếc bút chia 5 hộp đều. Mỗi hộp?', ['6', '8', '7', '10'], 1, '40 : 5 = 8 chiếc.', ['Sai — em chia thiếu, đúng là 8.', 'Đúng — 40 : 5 = 8 chiếc mỗi hộp.', 'Sai — em chia thiếu, đúng là 8.', 'Sai — em chia dư, đúng là 8.']),
    Q('50 : 5 = ?', ['10', '9', '8', '5'], 0, '5 × 10 = 50.', ['Đúng — 5 × 10 = 50 nên 50 : 5 = 10.', 'Sai — em chia thiếu, đúng là 10.', 'Sai — em chia thiếu, đúng là 10.', 'Sai — em nhầm với số chia, đúng là 10.']),
  ]),

  M(26, 'Bảng chia 3', [
    Q('9 : 3 = ?', ['3', '5', '2', '4'], 0, '3 × 3 = 9.', ['Đúng — 3 × 3 = 9 nên 9 : 3 = 3.', 'Sai — em chia dư, đúng là 3.', 'Sai — em chia thiếu, đúng là 3.', 'Sai — em chia dư, đúng là 3.']),
    Q('18 : 3 = ?', ['6', '7', '8', '5'], 0, '3 × 6 = 18.', ['Đúng — 3 × 6 = 18 nên 18 : 3 = 6.', 'Sai — em chia dư, đúng là 6.', 'Sai — em chia dư 2, đúng là 6.', 'Sai — em chia thiếu, đúng là 6.']),
    Q('24 : 3 = ?', ['9', '8', '6', '7'], 1, '3 × 8 = 24.', ['Sai — em chia dư, đúng là 8.', 'Đúng — 3 × 8 = 24 nên 24 : 3 = 8.', 'Sai — em chia thiếu, đúng là 8.', 'Sai — em chia thiếu, đúng là 8.']),
    Q('27 : 3 = ?', ['8', '10', '7', '9'], 3, '3 × 9 = 27.', ['Sai — em chia thiếu, đúng là 9.', 'Sai — em chia dư, đúng là 9.', 'Sai — em chia thiếu 2, đúng là 9.', 'Đúng — 3 × 9 = 27 nên 27 : 3 = 9.']),
    Q('21 cái bánh chia đều 3 đĩa. Mỗi đĩa?', ['6', '5', '8', '7'], 3, '21 : 3 = 7 cái.', ['Sai — em chia thiếu, đúng là 7.', 'Sai — em chia thiếu 2, đúng là 7.', 'Sai — em chia dư, đúng là 7.', 'Đúng — 21 : 3 = 7 cái mỗi đĩa.']),
    Q('15 : 3 = ?', ['6', '4', '5', '3'], 2, '3 × 5 = 15.', ['Sai — em chia dư, đúng là 5.', 'Sai — em chia thiếu, đúng là 5.', 'Đúng — 3 × 5 = 15 nên 15 : 3 = 5.', 'Sai — em chia thiếu, đúng là 5.']),
  ]),

  M(27, 'Bảng chia 4', [
    Q('12 : 4 = ?', ['3', '4', '2', '5'], 0, '4 × 3 = 12.', ['Đúng — 4 × 3 = 12 nên 12 : 4 = 3.', 'Sai — em nhầm với số chia, đúng là 3.', 'Sai — em chia thiếu, đúng là 3.', 'Sai — em chia dư, đúng là 3.']),
    Q('20 : 4 = ?', ['5', '4', '8', '6'], 0, '4 × 5 = 20.', ['Đúng — 4 × 5 = 20 nên 20 : 4 = 5.', 'Sai — em nhầm với số chia, đúng là 5.', 'Sai — em chia dư, đúng là 5.', 'Sai — em chia dư, đúng là 5.']),
    Q('28 : 4 = ?', ['6', '9', '7', '8'], 2, '4 × 7 = 28.', ['Sai — em chia thiếu, đúng là 7.', 'Sai — em chia dư 2, đúng là 7.', 'Đúng — 4 × 7 = 28 nên 28 : 4 = 7.', 'Sai — em chia dư, đúng là 7.']),
    Q('32 : 4 = ?', ['8', '9', '7', '10'], 0, '4 × 8 = 32.', ['Đúng — 4 × 8 = 32 nên 32 : 4 = 8.', 'Sai — em chia dư, đúng là 8.', 'Sai — em chia thiếu, đúng là 8.', 'Sai — em chia dư 2, đúng là 8.']),
    Q('Có 36 quyển vở chia đều cho 4 bạn. Mỗi bạn?', ['10', '12', '9', '8'], 2, '36 : 4 = 9 quyển.', ['Sai — em chia dư, đúng là 9.', 'Sai — em chia dư 3, đúng là 9.', 'Đúng — 36 : 4 = 9 quyển mỗi bạn.', 'Sai — em chia thiếu, đúng là 9.']),
    Q('40 : 4 = ?', ['10', '11', '9', '8'], 0, '4 × 10 = 40.', ['Đúng — 4 × 10 = 40 nên 40 : 4 = 10.', 'Sai — em chia dư, đúng là 10.', 'Sai — em chia thiếu, đúng là 10.', 'Sai — em chia thiếu 2, đúng là 10.']),
  ]),

  M(28, 'Lít (l)', [
    Q('1 lít = ? ml', ['1000', '10', '100', '500'], 0, '1 l = 1000 ml.', ['Đúng — 1 lít bằng 1000 ml.', 'Sai — 10 ml rất ít, 1 lít nhiều hơn.', 'Sai — 1 lít bằng 1000 ml, không phải 100.', 'Sai — 500 ml chỉ là nửa lít.']),
    Q('Đơn vị dùng để đo chất lỏng là?', ['cm (đo chiều dài)', 'lít', 'kg (đo cân nặng vật rắn)', 'm (đo chiều dài, chiều cao)'], 1, 'Chất lỏng → lít.', ['Sai — cm dùng đo chiều dài.', 'Đúng — chất lỏng đo bằng lít.', 'Sai — kg dùng cân vật rắn.', 'Sai — mét dùng đo chiều dài, chiều cao.']),
    Q('Bình nước 5 lít rót đi 2 lít. Còn?', ['4 l', '2 l', '7 l', '3 l'], 3, '5 − 2 = 3 lít.', ['Sai — em trừ dư 1, đúng là 3 lít.', 'Sai — em nhầm số rót ra, đúng là 3 lít.', 'Sai — 7 là phép cộng, đề là phép trừ.', 'Đúng — 5 − 2 = 3 lít.']),
    Q('Mua 2 chai dầu 1 lít và 1 chai 3 lít. Tổng?', ['7 l', '4 l', '5 l', '6 l'], 2, '2 + 3 = 5 lít.', ['Sai — em cộng dư, đúng là 5 lít.', 'Sai — em quên 1 chai, đúng là 5 lít.', 'Đúng — 2 chai 1 lít là 2 lít, thêm 3 lít thành 5 lít.', 'Sai — em cộng dư 1, đúng là 5 lít.']),
    Q('Đong 10 lít vào 2 thùng đều. Mỗi thùng?', ['8 l', '3 l', '5 l', '4 l'], 2, '10 : 2 = 5 lít.', ['Sai — em chia nhầm, đúng là 5 lít.', 'Sai — em chia thiếu, đúng là 5 lít.', 'Đúng — 10 : 2 = 5 lít mỗi thùng.', 'Sai — em chia thiếu, đúng là 5 lít.']),
    Q('Đo nước trong nồi nên dùng?', ['gam (dùng cân vật nhẹ)', 'cm (đo chiều dài ngắn)', 'mét (đo chiều cao, chiều dài)', 'lít'], 3, 'Nước = chất lỏng → lít.', ['Sai — gam dùng cân vật, không đo nước.', 'Sai — cm dùng đo chiều dài.', 'Sai — mét dùng đo chiều cao, chiều dài.', 'Đúng — nước là chất lỏng nên đo bằng lít.']),
  ]),

  M(29, 'Số có ba chữ số (1)', [
    Q('Số gồm 2 trăm, 3 chục, 5 đơn vị là?', ['253', '325', '235', '532'], 2, '2 trăm = 200, 3 chục = 30, 5 đơn vị = 5 → 235.', ['Sai — em đặt nhầm chục và đơn vị, đúng là 235.', 'Sai — em đặt sai hàng trăm, đúng là 235.', 'Đúng — 2 trăm, 3 chục, 5 đơn vị ghép thành 235.', 'Sai — em viết ngược các chữ số, đúng là 235.']),
    Q('Số 408 đọc là?', ['Bốn trăm linh tám', 'Bốn tám không', 'Bốn trăm tám', 'Bốn trăm tám mươi'], 0, '"linh" = không có chục.', ['Đúng — hàng chục là 0 nên đọc \'bốn trăm linh tám\'.', 'Sai — không đọc rời từng chữ số như vậy.', 'Sai — thiếu chữ \'linh\' cho hàng chục bằng 0.', 'Sai — \'tám mươi\' là 80, còn đây là 8 đơn vị.']),
    Q('Số liền sau của 299 là?', ['299', '298', '300', '290'], 2, '299 + 1 = 300.', ['Sai — đó là chính số 299, không phải liền sau.', 'Sai — 298 là số liền trước 299.', 'Đúng — 299 + 1 = 300.', 'Sai — 290 nhỏ hơn 299.']),
    Q('Số bé nhất có 3 chữ số là?', ['111', '999', '101', '100'], 3, '100 là nhỏ nhất.', ['Sai — 111 lớn hơn 100.', 'Sai — 999 là số lớn nhất có 3 chữ số.', 'Sai — 101 lớn hơn 100.', 'Đúng — 100 là số nhỏ nhất có 3 chữ số.']),
    Q('Số lớn nhất có 3 chữ số là?', ['900', '989', '999', '990'], 2, '999 là lớn nhất.', ['Sai — 900 nhỏ hơn 999.', 'Sai — 989 nhỏ hơn 999.', 'Đúng — 999 là số lớn nhất có 3 chữ số.', 'Sai — 990 nhỏ hơn 999.']),
    Q('Trong 537, chữ số 3 ở hàng?', ['Trăm (vì 5 đứng đầu nên nhầm là số 3 ở trăm)', 'Chục', 'Đơn vị', 'Nghìn (số 537 chưa có hàng nghìn)'], 1, '5 trăm, 3 chục, 7 đơn vị.', ['Sai — hàng trăm là chữ số 5, không phải 3.', 'Đúng — chữ số 3 đứng ở hàng chục.', 'Sai — hàng đơn vị là chữ số 7.', 'Sai — số 537 chưa có hàng nghìn.']),
  ]),

  M(30, 'Số có ba chữ số (2) – So sánh', [
    Q('So sánh: 234 ... 243', ['<', '= (vì cùng có chữ số 2, 3, 4)', '≥ (lớn hơn hoặc bằng)', '> (do nhìn 34 > 43 sai do đảo chữ số)'], 0, 'Trăm bằng nhau, chục 3 < 4 → 234 < 243.', ['Đúng — trăm bằng nhau, hàng chục 3 < 4 nên 234 < 243.', 'Sai — cùng chữ số nhưng vị trí khác nên không bằng nhau.', 'Sai — 234 nhỏ hơn 243, không lớn hơn hay bằng.', 'Sai — em đảo chữ số rồi, đúng là dấu nhỏ hơn.']),
    Q('Số lớn nhất trong: 456, 465, 546, 564', ['465', '564', '546', '456'], 1, '564 lớn nhất.', ['Sai — 465 nhỏ hơn 564 ở hàng trăm.', 'Đúng — 564 có hàng trăm và hàng chục lớn nhất.', 'Sai — 546 nhỏ hơn 564 ở hàng chục.', 'Sai — 456 có hàng trăm nhỏ nhất.']),
    Q('Số bé nhất trong: 199, 219, 192, 291', ['199', '219', '291', '192'], 3, '192 bé nhất (so chữ số hàng trăm 1 < 2; trong 199 và 192, hàng chục giống = 9, hàng đơn vị 9 > 2, nên 192 < 199).', ['Sai — 199 lớn hơn 192 ở hàng đơn vị.', 'Sai — 219 có hàng trăm là 2, lớn hơn.', 'Sai — 291 có hàng trăm là 2, lớn hơn.', 'Đúng — 192 có hàng trăm là 1 và nhỏ nhất.']),
    Q('300 + 50 = ?', ['530', '500', '305', '350'], 3, '300 + 50 = 350.', ['Sai — em đặt sai hàng, đúng là 350.', 'Sai — em quên cộng 50, đúng là 350.', 'Sai — em đặt nhầm hàng chục, đúng là 350.', 'Đúng — 300 + 50 = 350.']),
    Q('Sắp xếp tăng dần: 234, 432, 342, 243', ['234, 243, 342, 432', '432, 342, 243, 234', '243, 234, 342, 432', '234, 342, 432, 243'], 0, '234 < 243 < 342 < 432.', ['Đúng — từ bé đến lớn: 234 < 243 < 342 < 432.', 'Sai — đây là xếp giảm dần (từ lớn đến bé).', 'Sai — 243 phải đứng sau 234.', 'Sai — 243 bị bỏ sai chỗ, chưa tăng dần.']),
    Q('Số tròn trăm trong: 250, 300, 305, 400?', ['Chỉ 250', 'Chỉ 305', 'Tất cả', '300 và 400'], 3, 'Tròn trăm: chục = 0 và đơn vị = 0 → 300, 400.', ['Sai — 250 có hàng chục là 5 nên không tròn trăm.', 'Sai — 305 có hàng đơn vị là 5 nên không tròn trăm.', 'Sai — 250 và 305 không phải số tròn trăm.', 'Đúng — 300 và 400 đều có chục và đơn vị bằng 0.']),
  ]),

  M(31, 'Cộng – trừ số có 3 chữ số (không nhớ)', [
    Q('234 + 142 = ?', ['376', '386', '372', '386'], 0, '4+2=6, 3+4=7, 2+1=3 → 376.', ['Đúng — cộng từng hàng: 6, 7, 3 thành 376.', 'Sai — em cộng dư ở hàng chục, đúng là 376.', 'Sai — em cộng sai hàng đơn vị, đúng là 376.', 'Sai — em cộng dư ở hàng chục, đúng là 376.']),
    Q('456 − 123 = ?', ['333', '343', '334', '443'], 0, '6−3=3, 5−2=3, 4−1=3 → 333.', ['Đúng — trừ từng hàng: 3, 3, 3 thành 333.', 'Sai — em trừ sai hàng chục, đúng là 333.', 'Sai — em trừ sai hàng đơn vị, đúng là 333.', 'Sai — em trừ sai hàng trăm, đúng là 333.']),
    Q('500 + 200 = ?', ['600', '720', '300', '700'], 3, '5+2=7 trăm = 700.', ['Sai — em cộng thiếu, đúng là 700.', 'Sai — em cộng nhầm hàng, đúng là 700.', 'Sai — 300 là hiệu (500 − 200), đề là phép cộng.', 'Đúng — 5 trăm cộng 2 trăm bằng 7 trăm, tức 700.']),
    Q('625 − 304 = ?', ['929', '331', '320', '321'], 3, '5−4=1, 2−0=2, 6−3=3 → 321.', ['Sai — 929 là phép cộng, đề là phép trừ.', 'Sai — em trừ sai hàng chục, đúng là 321.', 'Sai — em trừ sai hàng đơn vị, đúng là 321.', 'Đúng — trừ từng hàng: 1, 2, 3 thành 321.']),
    Q('120 + 305 = ?', ['435', '425', '415', '125'], 1, '0+5=5, 2+0=2, 1+3=4 → 425.', ['Sai — em cộng dư hàng chục, đúng là 425.', 'Đúng — cộng từng hàng: 5, 2, 4 thành 425.', 'Sai — em cộng thiếu hàng chục, đúng là 425.', 'Sai — em quên cộng hàng trăm, đúng là 425.']),
    Q('734 − 421 = ?', ['312', '323', '414', '313'], 3, '4−1=3, 3−2=1, 7−4=3 → 313.', ['Sai — em trừ sai hàng đơn vị, đúng là 313.', 'Sai — em trừ sai hàng chục, đúng là 313.', 'Sai — em trừ sai hàng trăm, đúng là 313.', 'Đúng — trừ từng hàng: 3, 1, 3 thành 313.']),
  ]),

  M(32, 'Cộng số có 3 chữ số (có nhớ)', [
    Q('245 + 178 = ?', ['533', '433', '413', '423'], 3, '5+8=13 nhớ 1; 4+7+1=12 nhớ 1; 2+1+1=4 → 423.', ['Sai — em cộng dư ở hàng trăm, đúng là 423.', 'Sai — em quên một số nhớ, đúng là 423.', 'Sai — em quên nhớ ở hàng chục, đúng là 423.', 'Đúng — cộng có nhớ từng hàng cho ra 423.']),
    Q('356 + 287 = ?', ['634', '653', '643', '633'], 2, '6+7=13 nhớ 1; 5+8+1=14 nhớ 1; 3+2+1=6 → 643.', ['Sai — em quên số nhớ ở hàng chục, đúng là 643.', 'Sai — em cộng dư hàng chục, đúng là 643.', 'Đúng — cộng có nhớ từng hàng cho ra 643.', 'Sai — em quên một số nhớ, đúng là 643.']),
    Q('489 + 137 = ?', ['636', '626', '615', '625'], 1, '9+7=16 nhớ 1; 8+3+1=12 nhớ 1; 4+1+1=6 → 626.', ['Sai — em cộng dư hàng chục, đúng là 626.', 'Đúng — cộng có nhớ từng hàng cho ra 626.', 'Sai — em quên số nhớ, đúng là 626.', 'Sai — em cộng sai hàng đơn vị, đúng là 626.']),
    Q('568 + 247 = ?', ['805', '815', '715', '825'], 1, '8+7=15 nhớ 1; 6+4+1=11 nhớ 1; 5+2+1=8 → 815.', ['Sai — em quên số nhớ hàng chục, đúng là 815.', 'Đúng — cộng có nhớ từng hàng cho ra 815.', 'Sai — em quên số nhớ hàng trăm, đúng là 815.', 'Sai — em cộng dư hàng trăm, đúng là 815.']),
    Q('Lớp 2A có 245 trang vở, lớp 2B có 178 trang. Tổng?', ['443', '413', '423', '433'], 2, '245 + 178 = 423.', ['Sai — em cộng dư, đúng là 423.', 'Sai — em quên một số nhớ, đúng là 423.', 'Đúng — 245 + 178 = 423 trang.', 'Sai — em cộng dư hàng chục, đúng là 423.']),
    Q('378 + 156 = ?', ['544', '534', '524', '432'], 1, '8+6=14 nhớ 1; 7+5+1=13 nhớ 1; 3+1+1=5 → 534.', ['Sai — em cộng dư hàng chục, đúng là 534.', 'Đúng — cộng có nhớ từng hàng cho ra 534.', 'Sai — em quên số nhớ, đúng là 534.', 'Sai — em cộng sai hàng trăm, đúng là 534.']),
  ]),

  M(33, 'Trừ số có 3 chữ số (có nhớ)', [
    Q('524 − 178 = ?', ['446', '346', '336', '356'], 1, '524 − 178 = 346.', ['Sai — em quên mượn ở hàng trăm, đúng là 346.', 'Đúng — 524 − 178 = 346.', 'Sai — em trừ sai hàng chục, đúng là 346.', 'Sai — em trừ sai hàng đơn vị, đúng là 346.']),
    Q('700 − 234 = ?', ['456', '466', '476', '566'], 1, '700 − 234 = 466.', ['Sai — em trừ sai hàng chục, đúng là 466.', 'Đúng — 700 − 234 = 466.', 'Sai — em trừ sai hàng chục, đúng là 466.', 'Sai — em quên mượn hàng trăm, đúng là 466.']),
    Q('845 − 269 = ?', ['566', '576', '586', '676'], 1, '845 − 269 = 576.', ['Sai — em trừ sai hàng chục, đúng là 576.', 'Đúng — 845 − 269 = 576.', 'Sai — em trừ sai hàng chục, đúng là 576.', 'Sai — em quên mượn hàng trăm, đúng là 576.']),
    Q('630 − 187 = ?', ['453', '433', '443', '553'], 2, '630 − 187 = 443.', ['Sai — em trừ sai hàng chục, đúng là 443.', 'Sai — em trừ sai hàng chục, đúng là 443.', 'Đúng — 630 − 187 = 443.', 'Sai — em quên mượn hàng trăm, đúng là 443.']),
    Q('905 − 348 = ?', ['557', '547', '567', '557'], 0, '905 − 348 = 557.', ['Đúng — 905 − 348 = 557.', 'Sai — em trừ sai hàng chục, đúng là 557.', 'Sai — em trừ sai hàng chục, đúng là 557.', 'Sai — em trừ nhầm, đúng là 557.']),
    Q('Cửa hàng có 425 sản phẩm, bán 168. Còn?', ['357', '247', '257', '267'], 2, '425 − 168 = 257.', ['Sai — em quên mượn hàng trăm, đúng là 257.', 'Sai — em trừ sai hàng chục, đúng là 257.', 'Đúng — 425 − 168 = 257 sản phẩm.', 'Sai — em trừ sai hàng chục, đúng là 257.']),
  ]),

  M(34, 'Tiền Việt Nam', [
    Q('1 tờ 10.000đ và 1 tờ 5.000đ là?', ['10.005 đ', '15.000 đ', '10.500 đ', '50.000 đ'], 1, '10.000 + 5.000 = 15.000 đ.', ['Sai — em ghép số chứ chưa cộng đúng, đúng là 15.000đ.', 'Đúng — 10.000 + 5.000 = 15.000đ.', 'Sai — em đặt sai hàng, đúng là 15.000đ.', 'Sai — em nhân nhầm, đề chỉ cộng hai tờ.']),
    Q('Đưa tờ 20.000đ mua bút 14.000đ. Trả lại?', ['5.000 đ', '6.000 đ', '4.000 đ', '14.000 đ'], 1, '20.000 − 14.000 = 6.000 đ.', ['Sai — em trừ dư, đúng là 6.000đ.', 'Đúng — 20.000 − 14.000 = 6.000đ.', 'Sai — em trừ dư 2, đúng là 6.000đ.', 'Sai — đó là giá cây bút, không phải tiền trả lại.']),
    Q('3 tờ 10.000đ là?', ['10.000', '30.000', '20.000', '100.000'], 1, '3 × 10.000 = 30.000.', ['Sai — đó mới là 1 tờ, có 3 tờ là 30.000.', 'Đúng — 3 × 10.000 = 30.000đ.', 'Sai — đó là 2 tờ, có 3 tờ là 30.000.', 'Sai — em đếm dư, đúng là 30.000.']),
    Q('Đổi tờ 50.000đ ra tờ 10.000đ thì được?', ['10 tờ', '4 tờ', '3 tờ', '5 tờ'], 3, '50.000 : 10.000 = 5 tờ.', ['Sai — em chia dư, đúng là 5 tờ.', 'Sai — em chia thiếu, đúng là 5 tờ.', 'Sai — em chia thiếu, đúng là 5 tờ.', 'Đúng — 50.000 : 10.000 = 5 tờ.']),
    Q('Mẹ mua rau 12.000đ + cá 25.000đ. Tổng?', ['35.000', '37.000', '36.000', '57.000'], 1, '12.000 + 25.000 = 37.000 đ.', ['Sai — em cộng thiếu, đúng là 37.000.', 'Đúng — 12.000 + 25.000 = 37.000đ.', 'Sai — em cộng thiếu, đúng là 37.000.', 'Sai — em cộng dư hàng chục nghìn, đúng là 37.000.']),
    Q('Có 100.000đ, mua 1 truyện 65.000đ. Còn?', ['35.000', '25.000', '55.000', '45.000'], 0, '100.000 − 65.000 = 35.000 đ.', ['Đúng — 100.000 − 65.000 = 35.000đ.', 'Sai — em trừ dư, đúng là 35.000.', 'Sai — em trừ thiếu, đúng là 35.000.', 'Sai — em trừ thiếu, đúng là 35.000.']),
  ]),

  M(35, 'Chu vi tam giác – tứ giác', [
    Q('Tam giác 3 cạnh 4, 5, 6 cm. Chu vi?', ['15 cm', '14 cm', '12 cm', '16 cm'], 0, '4+5+6 = 15 cm.', ['Đúng — chu vi là tổng 3 cạnh: 4 + 5 + 6 = 15 cm.', 'Sai — em cộng thiếu, đúng là 15 cm.', 'Sai — em quên một cạnh, đúng là 15 cm.', 'Sai — em cộng dư, đúng là 15 cm.']),
    Q('Hình vuông cạnh 8 cm. Chu vi?', ['32 cm', '24 cm', '64 cm', '16 cm'], 0, '4 × 8 = 32 cm.', ['Đúng — chu vi hình vuông là 4 × cạnh: 4 × 8 = 32 cm.', 'Sai — em chỉ cộng 3 cạnh, đúng là 32 cm.', 'Sai — 64 là 8 × 8 (diện tích), không phải chu vi.', 'Sai — em chỉ tính 2 cạnh, đúng là 32 cm.']),
    Q('Hình chữ nhật dài 6 cm, rộng 4 cm. Chu vi?', ['24 cm', '10 cm', '14 cm', '20 cm'], 3, '(6+4)×2 = 20 cm.', ['Sai — 24 là 6 × 4 (diện tích), không phải chu vi.', 'Sai — em mới cộng 1 cặp cạnh, phải nhân 2.', 'Sai — em cộng thiếu, đúng là 20 cm.', 'Đúng — (6 + 4) × 2 = 20 cm.']),
    Q('Tam giác đều cạnh 7 cm. Chu vi?', ['14 cm', '28 cm', '21 cm', '7 cm'], 2, '3 × 7 = 21 cm.', ['Sai — em chỉ tính 2 cạnh, tam giác có 3 cạnh.', 'Sai — em tính 4 cạnh, tam giác chỉ có 3.', 'Đúng — tam giác đều 3 cạnh bằng nhau: 3 × 7 = 21 cm.', 'Sai — đó mới là 1 cạnh, cần cộng cả 3 cạnh.']),
    Q('Hình vuông chu vi 36 cm. Cạnh?', ['6 cm', '9 cm', '7 cm', '8 cm'], 1, '36 : 4 = 9 cm.', ['Sai — em chia nhầm, 36 : 4 = 9.', 'Đúng — chu vi chia 4 cạnh: 36 : 4 = 9 cm.', 'Sai — em chia thiếu, đúng là 9 cm.', 'Sai — em chia thiếu, đúng là 9 cm.']),
    Q('Tứ giác có các cạnh 3, 4, 5, 6 cm. Chu vi?', ['18', '15', '12', '20'], 0, '3+4+5+6 = 18 cm.', ['Đúng — cộng cả 4 cạnh: 3 + 4 + 5 + 6 = 18 cm.', 'Sai — em quên một cạnh, đúng là 18 cm.', 'Sai — em quên hai cạnh, đúng là 18 cm.', 'Sai — em cộng dư, đúng là 18 cm.']),
  ]),

  M(36, 'Ôn tập cuối năm', [
    Q('3 × 7 = ?', ['18', '21', '24', '27'], 1, '3 × 7 = 21.', ['Sai — em nhân thiếu, đúng là 21.', 'Đúng — 3 × 7 = 21.', 'Sai — 24 là 3 × 8, không phải 3 × 7.', 'Sai — 27 là 3 × 9, không phải 3 × 7.']),
    Q('36 : 4 = ?', ['8', '7', '10', '9'], 3, '4 × 9 = 36.', ['Sai — em chia dư, đúng là 9.', 'Sai — em chia dư 2, đúng là 9.', 'Sai — em chia thiếu, đúng là 9.', 'Đúng — 4 × 9 = 36 nên 36 : 4 = 9.']),
    Q('356 + 247 = ?', ['593', '603', '633', '613'], 1, '356 + 247 = 603.', ['Sai — em quên số nhớ, đúng là 603.', 'Đúng — 356 + 247 = 603.', 'Sai — em cộng dư hàng trăm, đúng là 603.', 'Sai — em cộng dư hàng chục, đúng là 603.']),
    Q('724 − 358 = ?', ['356', '466', '376', '366'], 3, '724 − 358 = 366.', ['Sai — em trừ sai hàng chục, đúng là 366.', 'Sai — em quên mượn hàng trăm, đúng là 366.', 'Sai — em trừ sai hàng chục, đúng là 366.', 'Đúng — 724 − 358 = 366.']),
    Q('1 m = ? cm', ['1000', '100', '10', '50'], 1, '1 m = 100 cm.', ['Sai — 1000 cm là 10 m.', 'Đúng — 1 m bằng 100 cm.', 'Sai — 10 cm là 1 dm, không phải 1 m.', 'Sai — 1 m bằng 100 cm, không phải 50.']),
    Q('1 kg = ? g', ['100', '1000', '10', '500'], 1, '1 kg = 1000 g.', ['Sai — 1 kg bằng 1000 g, không phải 100.', 'Đúng — 1 kg bằng 1000 g.', 'Sai — 10 g rất nhẹ.', 'Sai — 500 g chỉ là nửa kg.']),
    Q('Hình vuông cạnh 6 cm có chu vi?', ['30', '20', '18', '24'], 3, '4 × 6 = 24 cm.', ['Sai — em tính dư 1 cạnh, đúng là 24 cm.', 'Sai — em chỉ tính 3 cạnh, đúng là 24 cm.', 'Sai — em chỉ tính 3 cạnh, đúng là 24 cm.', 'Đúng — 4 cạnh bằng nhau: 4 × 6 = 24 cm.']),
    Q('Số lớn nhất có 3 chữ số là?', ['999', '900', '990', '989'], 0, '999.', ['Đúng — 999 là số lớn nhất có 3 chữ số.', 'Sai — 900 nhỏ hơn 999.', 'Sai — 990 nhỏ hơn 999.', 'Sai — 989 nhỏ hơn 999.']),
    Q('Em có 50.000đ, mua bút 18.000đ. Còn?', ['42.000', '32.000', '22.000', '28.000'], 1, '50.000 − 18.000 = 32.000 đ.', ['Sai — em quên mượn, đúng là 32.000.', 'Đúng — 50.000 − 18.000 = 32.000đ.', 'Sai — em trừ dư, đúng là 32.000.', 'Sai — em trừ dư, đúng là 32.000.']),
    Q('Bảng nhân 5: 5 × 9 = ?', ['40', '50', '54', '45'], 3, '5 × 9 = 45.', ['Sai — 40 là 5 × 8, không phải 5 × 9.', 'Sai — em nhân dư, đúng là 45.', 'Sai — em nhân nhầm, đúng là 45.', 'Đúng — 5 × 9 = 45.']),
  ], { difficulty: 3, description: 'Bài kiểm tra cuối năm — tổng hợp toàn bộ kiến thức Toán Lớp 2.' }),
];

export const P2_TOAN_SCENARIOS = indexBy(P2_TOAN_WEEKS);
