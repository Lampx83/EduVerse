// ============================================================
// Lớp 10 · HOÁ HỌC — 35 tuần (HK1: 1–18 · HK2: 19–35)
// Bám CTGD 2018 (Hoá học 10: Cấu tạo nguyên tử – BTH – Liên kết – Oxy hoá khử – Năng lượng – Tốc độ – Halogen).
// ID prefix: "H10HOA-wNN-quiz".
// ============================================================
import { Q, W, indexBy } from './_helper.js';

const M = (n, title, qs, opts) => W('H10HOA', 'hoa-hoc', n, title, qs, opts);

export const H10HOA_WEEKS = [
  // ──────────────── HK1 ────────────────
  M(1, 'Nhập môn Hoá học — Đối tượng và phương pháp', [
    Q('Hoá học là khoa học nghiên cứu?', ['Thành phần, cấu tạo, tính chất và biến đổi của chất','Sinh vật','Trái Đất','Khí hậu'], 0, 'Hoá học nghiên cứu chất và sự biến đổi chất.'),
    Q('Đơn chất là?', ['Chất tạo từ một nguyên tố hoá học','Hỗn hợp 2 nguyên tố','Hợp chất','Dung dịch'], 0, 'O₂, H₂, Cu là đơn chất.'),
    Q('Hợp chất là?', ['Chất tạo từ 2 hay nhiều nguyên tố','Một nguyên tố','Hỗn hợp','Tự nhiên'], 0, 'H₂O, NaCl là hợp chất.'),
    Q('Phản ứng hoá học là?', ['Quá trình biến đổi chất này thành chất khác','Hoà tan','Thay đổi trạng thái','Đổi màu thuần tuý'], 0, 'Phản ứng → liên kết bị phá huỷ/hình thành.'),
    Q('Đơn vị khối lượng nguyên tử?', ['amu hoặc u','kg','g','mol'], 0, '1 u ≈ 1,66·10⁻²⁷ kg.'),
    Q('Vai trò của hoá học?', ['Phục vụ nhiều ngành: y dược, năng lượng, vật liệu, môi trường,…','Chỉ nghiên cứu','Không ứng dụng','Chỉ trong phòng thí nghiệm'], 0, 'Hoá học có ứng dụng rộng khắp.'),
  ]),

  M(2, 'Cấu tạo nguyên tử — Các hạt cơ bản', [
    Q('Nguyên tử cấu tạo gồm?', ['Hạt nhân (proton + neutron) và electron','Chỉ proton','Chỉ electron','Chỉ neutron'], 0, '3 loại hạt cơ bản.'),
    Q('Điện tích của proton?', ['+1 (đơn vị)','−1','0','+2'], 0, 'p mang điện dương.'),
    Q('Điện tích của electron?', ['−1','+1','0','+2'], 0, 'e mang điện âm.'),
    Q('Điện tích của neutron?', ['0','+1','−1','+2'], 0, 'n trung hoà về điện.'),
    Q('Số khối A = ?', ['Số proton + số neutron','Số electron','Số proton','Số neutron'], 0, 'A = Z + N.'),
    Q('Số hiệu nguyên tử Z?', ['Số proton trong hạt nhân','Số electron','Số neutron','Số khối'], 0, 'Z = số proton = số electron (nguyên tử trung hoà).'),
  ]),

  M(3, 'Mô hình nguyên tử — Bohr và mô hình lượng tử', [
    Q('Mô hình Bohr cho rằng electron?', ['Chuyển động trên các quỹ đạo xác định quanh hạt nhân','Tự do','Đứng yên','Là sóng'], 0, 'Bohr: electron quay quanh hạt nhân ở các quỹ đạo có năng lượng xác định.'),
    Q('Mô hình lượng tử hiện đại mô tả electron?', ['Bằng orbital (xác suất có mặt)','Quỹ đạo xác định','Đứng yên','Chuyển động ngẫu nhiên'], 0, 'Electron không có quỹ đạo cố định, chỉ có xác suất.'),
    Q('Orbital nguyên tử (AO) là?', ['Vùng không gian quanh hạt nhân nơi electron có xác suất tồn tại cao','Quỹ đạo electron','Hạt nhân','Tế bào'], 0, 'AO = vùng xác suất ~95% có electron.'),
    Q('Có mấy loại orbital chính ở lớp nguyên tử?', ['s, p, d, f','a, b, c','x, y, z','1, 2, 3'], 0, '4 loại: s, p, d, f.'),
    Q('Orbital s có hình dạng?', ['Hình cầu','Hình số 8','Hình hoa','Hình elip'], 0, 'Orbital s đối xứng cầu.'),
    Q('Orbital p có hình dạng?', ['Hình số 8 (quả tạ)','Hình cầu','Hình hoa','Hình elip'], 0, 'p có dạng quả tạ.'),
  ]),

  M(4, 'Cấu hình electron — Quy tắc Hund, Pauli', [
    Q('Số electron tối đa trên lớp n?', ['2n²','n','n²','2n'], 0, '2n²: lớp 1 có 2e, lớp 2 có 8e, lớp 3 có 18e.'),
    Q('Số electron tối đa trên một orbital?', ['2','1','4','8'], 0, 'Pauli: tối đa 2e/orbital (spin ngược).'),
    Q('Phân lớp s có bao nhiêu orbital?', ['1','3','5','7'], 0, '1 orbital → max 2e.'),
    Q('Phân lớp p có bao nhiêu orbital?', ['3','1','5','7'], 0, '3 orbital → max 6e.'),
    Q('Phân lớp d có bao nhiêu orbital?', ['5','3','7','9'], 0, '5 orbital → max 10e.'),
    Q('Quy tắc Hund: electron trong phân lớp?', ['Phân bố vào các orbital sao cho số electron độc thân là tối đa','Cặp đôi sớm','Bỏ trống','Tự do'], 0, 'Hund: e ưu tiên ô trống, spin song song.'),
  ]),

  M(5, 'Bảng tuần hoàn — Cấu trúc và quy luật', [
    Q('Bảng tuần hoàn do ai đề xuất?', ['Mendeleev','Bohr','Newton','Einstein'], 0, 'Mendeleev (1869).'),
    Q('Nguyên tắc sắp xếp BTH hiện đại?', ['Theo số hiệu nguyên tử Z tăng dần','Theo khối lượng','Theo tên','Theo màu sắc'], 0, 'Sắp theo Z tăng dần.'),
    Q('Hàng ngang trong BTH gọi là?', ['Chu kì','Nhóm','Phân lớp','Ô'], 0, 'Chu kì = hàng ngang.'),
    Q('Cột dọc gọi là?', ['Nhóm','Chu kì','Phân lớp','Ô'], 0, 'Nhóm = cột.'),
    Q('Nguyên tố nhóm IA gồm?', ['Kim loại kiềm (Li, Na, K,…)','Khí hiếm','Halogen','Kim loại quý'], 0, 'Nhóm IA: kim loại kiềm.'),
    Q('Nguyên tố nhóm VIIA gồm?', ['Halogen (F, Cl, Br, I)','Khí hiếm','Kim loại','Phi kim đa hoá trị'], 0, 'Nhóm VIIA = halogen.'),
  ]),

  M(6, 'Định luật tuần hoàn — Sự biến thiên tính chất', [
    Q('Định luật tuần hoàn: tính chất biến đổi tuần hoàn theo?', ['Số hiệu nguyên tử Z','Khối lượng','Số neutron','Trạng thái'], 0, 'Theo Z (cấu hình electron).'),
    Q('Trong cùng chu kì, từ trái sang phải, bán kính nguyên tử?', ['Giảm','Tăng','Không đổi','Dao động'], 0, 'Hạt nhân hút mạnh hơn → bán kính giảm.'),
    Q('Trong cùng nhóm A, từ trên xuống dưới, bán kính?', ['Tăng','Giảm','Không đổi','Dao động'], 0, 'Lớp electron tăng → bán kính tăng.'),
    Q('Độ âm điện trong chu kì (T → P)?', ['Tăng','Giảm','Không đổi','Dao động'], 0, 'Phi kim mạnh hơn → độ âm điện tăng.'),
    Q('Độ âm điện trong nhóm A (trên → dưới)?', ['Giảm','Tăng','Không đổi','Dao động'], 0, 'Bán kính tăng → độ âm điện giảm.'),
    Q('Tính kim loại trong chu kì?', ['Giảm dần','Tăng dần','Không đổi','Dao động'], 0, 'Sang phải: phi kim mạnh dần.'),
  ]),

  M(7, 'Liên kết ion', [
    Q('Liên kết ion hình thành giữa?', ['Kim loại điển hình và phi kim điển hình','Hai phi kim','Hai kim loại','Khí hiếm'], 0, 'Chuyển electron giữa kim loại và phi kim.'),
    Q('Ion dương được gọi là?', ['Cation','Anion','Trung hoà','Đồng vị'], 0, 'Cation = mất electron.'),
    Q('Ion âm là?', ['Anion','Cation','Trung hoà','Đồng vị'], 0, 'Anion = nhận electron.'),
    Q('Liên kết ion trong NaCl: Na →?', ['Na⁺ + e⁻','Na²⁺','Na⁻','Na không đổi'], 0, 'Na nhường 1e → Na⁺.'),
    Q('Hợp chất ion ở điều kiện thường?', ['Chất rắn, kết tinh, nóng chảy ở nhiệt độ cao','Khí','Lỏng','Trong suốt mềm'], 0, 'Mạng tinh thể ion bền.'),
    Q('Hợp chất ion dẫn điện khi?', ['Nóng chảy hoặc tan trong nước','Rắn','Ở mọi trạng thái','Không dẫn'], 0, 'Cần ion tự do để dẫn điện.'),
  ]),

  M(8, 'Liên kết cộng hoá trị', [
    Q('Liên kết cộng hoá trị là?', ['Liên kết hình thành bằng cách dùng chung electron','Cho-nhận e','Hút nhau','Bóng đèn'], 0, 'Hai nguyên tử chung cặp e.'),
    Q('Liên kết cộng hoá trị không cực hình thành giữa?', ['2 nguyên tử cùng nguyên tố (như H₂)','2 nguyên tố khác hẳn','Kim loại','Khí hiếm'], 0, 'Độ âm điện chênh = 0.'),
    Q('Liên kết cộng hoá trị có cực giữa?', ['2 phi kim khác độ âm điện','2 phi kim cùng','Kim loại','Cùng nguyên tử'], 0, 'Chênh độ âm điện 0,4–1,7.'),
    Q('H₂O có liên kết?', ['Cộng hoá trị có cực','Ion','Kim loại','Hydro'], 0, 'O kéo e mạnh hơn H → có cực.'),
    Q('Số liên kết cộng hoá trị mà C có thể tạo?', ['4','2','3','1'], 0, 'C có 4 e ở lớp ngoài → 4 liên kết.'),
    Q('Liên kết đôi gồm?', ['1 σ + 1 π','2 σ','2 π','3 σ'], 0, 'Liên kết đôi = 1 sigma + 1 pi.'),
  ]),

  M(9, 'Liên kết cho - nhận và liên kết kim loại', [
    Q('Liên kết cho-nhận là?', ['Cặp e dùng chung do một nguyên tử cung cấp','Mỗi bên góp 1 e','Chuyển e hoàn toàn','Không có'], 0, 'NH₄⁺: N cho cặp e.'),
    Q('Ion NH₄⁺ có?', ['1 liên kết cho-nhận từ N → H⁺','4 liên kết ion','Không có cho-nhận','Liên kết kim loại'], 0, 'Cặp e tự do của N tạo liên kết với H⁺.'),
    Q('Liên kết kim loại trong kim loại?', ['Electron tự do chuyển động giữa các ion dương','Cộng hoá trị','Ion','Hydro'], 0, '"Biển electron" trong mạng kim loại.'),
    Q('Đặc điểm của kim loại?', ['Dẫn điện, dẫn nhiệt tốt, dẻo','Không dẫn điện','Giòn','Trong suốt'], 0, 'Do electron tự do.'),
    Q('Mạng tinh thể kim loại có?', ['Các ion dương và electron tự do','Chỉ ion','Chỉ electron','Chỉ nguyên tử trung hoà'], 0, 'Cấu trúc đặc trưng của kim loại.'),
    Q('Khi đập kim loại, tại sao không vỡ?', ['Các lớp ion trượt trên nhau qua biển electron','Vì cứng','Vì giòn','Vì ướt'], 0, 'Tính dẻo của kim loại.'),
  ]),

  M(10, 'Liên kết hydro và lực Van der Waals', [
    Q('Liên kết hydro hình thành giữa?', ['H (đã liên kết F, O, N) với F, O, N của phân tử khác','C và H','Kim loại','Khí trơ'], 0, 'H kết với F/O/N có thể tạo cầu nối với F/O/N khác.'),
    Q('Liên kết hydro có cường độ?', ['Yếu hơn liên kết cộng hoá trị nhưng mạnh hơn lực Van der Waals','Mạnh nhất','Yếu nhất','Bằng ion'], 0, 'Trung gian giữa cộng hoá trị và Van der Waals.'),
    Q('Liên kết hydro làm cho H₂O có?', ['Nhiệt độ sôi cao bất thường','Nhiệt độ sôi thấp','Không có tính chất gì','Mất tính lỏng'], 0, 'H₂O sôi ở 100°C — cao bất thường nhờ H-bond.'),
    Q('Lực Van der Waals là?', ['Lực hút yếu giữa các phân tử','Liên kết mạnh','Liên kết ion','Liên kết cho-nhận'], 0, 'Lực phân tán rất yếu.'),
    Q('Trong DNA, các base nối nhau bằng?', ['Liên kết hydro','Liên kết ion','Liên kết kim loại','Cộng hoá trị'], 0, 'Cặp base (A=T, G≡C) bằng H-bond.'),
    Q('Nước đá nổi trên nước lỏng vì?', ['Liên kết hydro tạo cấu trúc tinh thể có khoảng trống → mật độ thấp','Nước đá nhẹ tự nhiên','Có không khí','Vô lý'], 0, 'Mật độ băng < mật độ nước lỏng nhờ cấu trúc H-bond.'),
  ]),

  M(11, 'Phản ứng oxy hoá — khử (Phần 1)', [
    Q('Quá trình oxy hoá là?', ['Nhường electron, số oxy hoá tăng','Nhận electron','Đứng yên','Không liên quan electron'], 0, 'Oxy hoá = mất e.'),
    Q('Quá trình khử là?', ['Nhận electron, số oxy hoá giảm','Nhường electron','Không thay đổi','Mất hydro'], 0, 'Khử = nhận e.'),
    Q('Chất khử là?', ['Chất nhường electron','Chất nhận electron','Chất trung hoà','Không có'], 0, 'Chất bị oxy hoá = chất khử.'),
    Q('Chất oxy hoá là?', ['Chất nhận electron','Chất nhường electron','Chất trung hoà','Không có'], 0, 'Chất bị khử = chất oxy hoá.'),
    Q('Số oxy hoá của O trong H₂O?', ['−2','+2','0','−1'], 0, 'O thường có số OXH = −2.'),
    Q('Số oxy hoá của H trong HCl?', ['+1','−1','0','+2'], 0, 'H thường +1 (trừ hydrua kim loại).'),
  ]),

  M(12, 'Phản ứng oxy hoá — khử (Phần 2): Cân bằng bằng phương pháp electron', [
    Q('Bước đầu trong cân bằng oxy hoá - khử?', ['Xác định số oxy hoá các nguyên tố','Cộng vào','Trừ đi','Học thuộc'], 0, 'Bước 1: xác định số OXH.'),
    Q('Bước kế tiếp?', ['Viết quá trình oxy hoá và khử','Cộng phản ứng','Cân bằng nguyên tố','Thử ngẫu nhiên'], 0, 'Viết 2 nửa phản ứng.'),
    Q('Quy tắc bảo toàn electron?', ['Số e nhường = số e nhận','Số e nhường > nhận','Không cần','Bỏ qua'], 0, 'Cốt lõi của cân bằng.'),
    Q('Sau khi bảo toàn electron, cần?', ['Đặt hệ số cho phản ứng và cân bằng nguyên tố và điện tích','Bỏ qua','Cộng số','Vẽ hình'], 0, 'Hoàn chỉnh phương trình.'),
    Q('Trong Fe + Cu²⁺ → Fe²⁺ + Cu, Fe là?', ['Chất khử','Chất oxy hoá','Trung hoà','Không phản ứng'], 0, 'Fe nhường e → Fe²⁺.'),
    Q('Cu²⁺ trong phản ứng trên là?', ['Chất oxy hoá','Chất khử','Trung hoà','Không'], 0, 'Nhận e → Cu kim loại.'),
  ]),

  M(13, 'Năng lượng hoá học — Phản ứng toả nhiệt và thu nhiệt', [
    Q('Phản ứng toả nhiệt là?', ['Phản ứng giải phóng nhiệt ra môi trường','Hấp thụ nhiệt','Không trao đổi','Đứng yên'], 0, 'ΔH < 0.'),
    Q('Phản ứng thu nhiệt là?', ['Phản ứng hấp thụ nhiệt từ môi trường','Toả nhiệt','Không có','Không xác định'], 0, 'ΔH > 0.'),
    Q('Ví dụ phản ứng toả nhiệt?', ['Đốt cháy nhiên liệu (xăng, gỗ,…)','Quang hợp','Đun sôi','Tan đá'], 0, 'Cháy là toả nhiệt điển hình.'),
    Q('Ví dụ phản ứng thu nhiệt?', ['Quang hợp ở cây xanh','Đốt than','Cháy nến','Nổ pháo'], 0, 'Quang hợp dùng năng lượng ánh sáng.'),
    Q('Đơn vị biến thiên enthalpy ΔH?', ['kJ/mol','J/s','N','Pa'], 0, 'ΔH đo bằng kJ/mol.'),
    Q('Phản ứng nào toả nhiệt mạnh?', ['CH₄ + 2O₂ → CO₂ + 2H₂O','H₂O → H₂ + ½O₂','N₂ + O₂ → 2NO','CaCO₃ → CaO + CO₂'], 0, 'Cháy metan toả ~890 kJ/mol.'),
  ]),

  M(14, 'Định luật Hess — Tính biến thiên enthalpy', [
    Q('Định luật Hess phát biểu?', ['Biến thiên enthalpy chỉ phụ thuộc trạng thái đầu và cuối, không phụ thuộc đường đi','Phụ thuộc đường đi','Bằng 0','Tuỳ thời gian'], 0, 'Hess: ΔH chỉ phụ thuộc trạng thái.'),
    Q('Hệ quả của định luật Hess?', ['Có thể cộng ΔH của các phản ứng trung gian','Không tính được','Cần thực nghiệm trực tiếp','Bỏ qua'], 0, 'Tính ΔH gián tiếp qua chu trình.'),
    Q('ΔH của phản ứng tạo thành 1 mol chất từ đơn chất bền gọi là?', ['Enthalpy tạo thành tiêu chuẩn ΔH°_f','Enthalpy phân huỷ','Enthalpy hoá hơi','Enthalpy đốt cháy'], 0, 'ΔH°_f = nhiệt tạo thành chuẩn.'),
    Q('ΔH°_f của đơn chất bền ở trạng thái chuẩn?', ['= 0','> 0','< 0','Không xác định'], 0, 'Đơn chất bền chuẩn có ΔH°_f = 0.'),
    Q('ΔH phản ứng = ?', ['Σ ΔH°_f(sản phẩm) − Σ ΔH°_f(chất phản ứng)','Σ ΔH°_f tất cả','Bằng 0','Không tính được'], 0, 'Công thức tính ΔH phản ứng.'),
    Q('Định luật Hess dựa trên?', ['Bảo toàn năng lượng','Bảo toàn khối lượng','Bảo toàn động lượng','Bảo toàn entropy'], 0, 'Hess là hệ quả định luật I nhiệt động.'),
  ]),

  M(15, 'Tốc độ phản ứng — Yếu tố ảnh hưởng', [
    Q('Tốc độ phản ứng là?', ['Sự thay đổi nồng độ chất phản ứng/sản phẩm theo thời gian','Số lượng phân tử','Khối lượng phản ứng','Năng lượng'], 0, 'v = Δc/Δt.'),
    Q('Yếu tố ảnh hưởng đến tốc độ phản ứng?', ['Nồng độ, nhiệt độ, áp suất, diện tích bề mặt, chất xúc tác','Chỉ nồng độ','Chỉ nhiệt','Không'], 0, '5 yếu tố chính.'),
    Q('Khi nhiệt độ tăng, tốc độ phản ứng?', ['Tăng','Giảm','Không đổi','Dao động'], 0, 'Quy tắc Van\'t Hoff.'),
    Q('Tăng nồng độ chất phản ứng → tốc độ?', ['Tăng','Giảm','Không đổi','Tuỳ phản ứng'], 0, 'Va chạm hiệu quả nhiều hơn.'),
    Q('Chất xúc tác?', ['Tăng tốc độ phản ứng, không bị tiêu hao','Tham gia phản ứng','Làm chậm','Triệt tiêu'], 0, 'Chất xúc tác hạ năng lượng hoạt hoá.'),
    Q('Diện tích bề mặt lớn?', ['Tăng tốc độ phản ứng','Giảm','Không ảnh hưởng','Triệt tiêu'], 0, 'Tiếp xúc nhiều hơn.'),
  ]),

  M(16, 'Halogen — Tính chất chung', [
    Q('Nhóm halogen gồm?', ['F, Cl, Br, I, At','Na, K, Cs','O, S, Se','C, N, P'], 0, 'Nhóm VIIA = halogen.'),
    Q('Cấu hình lớp ngoài cùng của halogen?', ['ns²np⁵','ns²np⁶','ns²np⁴','ns¹'], 0, '7 e ngoài → có xu hướng nhận 1 e.'),
    Q('Tính chất hoá học đặc trưng halogen?', ['Tính oxy hoá mạnh','Tính khử mạnh','Trung hoà','Không phản ứng'], 0, 'Thiếu 1e → mạnh oxy hoá.'),
    Q('Tính oxy hoá giảm dần theo thứ tự?', ['F > Cl > Br > I','I > Br > Cl > F','F = Cl = Br = I','F < Cl < Br < I'], 0, 'Trong nhóm: bán kính tăng → tính oxy hoá giảm.'),
    Q('Ở điều kiện thường, halogen nào ở thể lỏng?', ['Br (đỏ nâu)','F','Cl','I'], 0, 'Br là chất lỏng đỏ nâu.'),
    Q('Halogen nào tồn tại ở thể rắn ở nhiệt độ thường?', ['I','F','Cl','Br'], 0, 'I rắn, tinh thể tím đen.'),
  ]),

  M(17, 'Clo và hợp chất của clo', [
    Q('Clo ở điều kiện thường là?', ['Khí, màu vàng lục','Khí không màu','Lỏng','Rắn'], 0, 'Cl₂ khí vàng lục.'),
    Q('Cl₂ phản ứng với H₂ (ánh sáng):', ['H₂ + Cl₂ → 2HCl','Không phản ứng','H₂Cl','HCl₂'], 0, 'Phản ứng nổ với ánh sáng.'),
    Q('Cl₂ tan trong nước tạo?', ['Nước clo (HCl + HClO)','Chỉ HCl','Chỉ HClO','H₂O'], 0, 'Cl₂ + H₂O ⇌ HCl + HClO.'),
    Q('HCl là?', ['Acid mạnh','Acid yếu','Base','Trung tính'], 0, 'HCl phân ly hoàn toàn.'),
    Q('Nước Javen là?', ['Hỗn hợp NaCl + NaClO','HCl','Cl₂ tinh khiết','Ca(OCl)₂'], 0, 'Nước Javen = dung dịch tẩy rửa.'),
    Q('Vai trò công nghiệp của Cl₂?', ['Sản xuất nhựa PVC, tẩy trắng, khử trùng nước','Làm thực phẩm','Phân bón','Mỹ phẩm'], 0, 'Cl₂ rất quan trọng trong công nghiệp.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Nguyên tử gồm?', ['Hạt nhân + electron','Chỉ hạt nhân','Chỉ electron','Chỉ neutron'], 0, '2 phần.'),
    Q('Số khối A = ?', ['Z + N','Z','N','Z·N'], 0, 'A = số p + số n.'),
    Q('Liên kết ion hình thành giữa?', ['Kim loại điển hình và phi kim điển hình','2 phi kim','2 kim loại','Khí hiếm'], 0, 'Chênh độ âm điện > 1,7.'),
    Q('Liên kết cộng hoá trị có cực giữa?', ['2 phi kim có độ âm điện khác nhau','Phi kim cùng nguyên tố','Kim loại','Khí hiếm'], 0, 'Chênh độ âm điện 0,4–1,7.'),
    Q('Chất khử là chất?', ['Nhường e','Nhận e','Không e','Trung hoà'], 0, 'Chất khử bị oxy hoá.'),
    Q('Halogen ở thể khí ở điều kiện thường?', ['F, Cl','Br, I','F, I','Cl, Br'], 0, 'F₂ và Cl₂ là khí.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Brom và Iod', [
    Q('Brom ở điều kiện thường là?', ['Chất lỏng đỏ nâu','Khí','Rắn','Không màu'], 0, 'Br₂ lỏng, dễ bay hơi.'),
    Q('Iod ở điều kiện thường?', ['Chất rắn tinh thể tím đen','Lỏng','Khí','Không màu'], 0, 'I₂ rắn, dễ thăng hoa.'),
    Q('Iod thăng hoa tạo hơi màu?', ['Tím','Vàng','Xanh','Đỏ'], 0, 'Hơi iod màu tím.'),
    Q('Iod gặp hồ tinh bột tạo màu?', ['Xanh đen','Đỏ','Vàng','Không màu'], 0, 'Phản ứng nhận biết tinh bột.'),
    Q('Br₂ phản ứng với H₂ tạo?', ['HBr','H₂Br₂','BrH','Không phản ứng'], 0, 'H₂ + Br₂ → 2HBr.'),
    Q('Tính oxy hoá Br₂ và I₂?', ['Br₂ > I₂','Br₂ < I₂','Bằng nhau','Không có'], 0, 'F > Cl > Br > I.'),
  ]),

  M(20, 'Oxygen và lưu huỳnh — Tính chất chung', [
    Q('Oxy và lưu huỳnh thuộc nhóm?', ['VIA','VIIA','IA','IIA'], 0, 'Nhóm VIA: O, S, Se, Te, Po.'),
    Q('Cấu hình lớp ngoài cùng nhóm VIA?', ['ns²np⁴','ns²np⁵','ns²np⁶','ns¹'], 0, '6 e ngoài → có xu hướng nhận 2 e.'),
    Q('O₂ ở điều kiện thường?', ['Khí không màu, không mùi','Lỏng','Rắn','Khí vàng'], 0, 'O₂ khí.'),
    Q('Vai trò O₂?', ['Hô hấp, đốt cháy nhiên liệu, oxy hoá','Không quan trọng','Chất nổ','Không có vai trò'], 0, 'O₂ duy trì sự sống và cháy.'),
    Q('Oxy có số oxy hoá thường gặp?', ['−2','+2','0','+4'], 0, 'O thường −2 (trừ peroxide, OF₂).'),
    Q('S ở điều kiện thường?', ['Chất rắn màu vàng','Khí xanh','Lỏng đỏ','Rắn xám'], 0, 'S là chất rắn màu vàng.'),
  ]),

  M(21, 'Lưu huỳnh và hợp chất của lưu huỳnh', [
    Q('SO₂ là?', ['Khí không màu, mùi hắc','Khí vàng','Rắn','Lỏng'], 0, 'Khí gây ô nhiễm.'),
    Q('SO₂ phản ứng với O₂ (xúc tác V₂O₅):', ['2SO₂ + O₂ → 2SO₃','SO₂ + O₂ → SO₃','SO₂ không phản ứng','SO₂ + 2O₂ → SO₄'], 0, '2:1:2.'),
    Q('H₂SO₄ là?', ['Acid mạnh, hút ẩm mạnh','Acid yếu','Base','Trung tính'], 0, 'Acid sulfuric đặc cực mạnh.'),
    Q('H₂SO₄ đặc nóng có tính oxy hoá?', ['Rất mạnh','Yếu','Không có','Trung bình'], 0, 'Oxy hoá nhiều kim loại không hoạt động (Cu, Ag).'),
    Q('Ứng dụng H₂SO₄?', ['Phân bón, sản xuất hoá chất, pin','Thực phẩm','Đồ uống','Mỹ phẩm'], 0, 'Hoá chất công nghiệp số 1.'),
    Q('Phản ứng "mưa acid" liên quan đến?', ['SO₂, NOx hoà tan trong nước mưa tạo acid','CO₂','O₂','N₂'], 0, 'SO₂ → H₂SO₃ → H₂SO₄ trong khí quyển.'),
  ]),

  M(22, 'Cân bằng hoá học — Phản ứng thuận nghịch', [
    Q('Phản ứng thuận nghịch là?', ['Phản ứng xảy ra theo 2 chiều','Một chiều','Không phản ứng','Dừng lại'], 0, 'Ký hiệu ⇌.'),
    Q('Trạng thái cân bằng hoá học?', ['Tốc độ phản ứng thuận = tốc độ phản ứng nghịch','Phản ứng dừng','Tốc độ thuận > nghịch','Tốc độ nghịch > thuận'], 0, 'Cân bằng động.'),
    Q('Hằng số cân bằng K phụ thuộc?', ['Nhiệt độ','Áp suất','Nồng độ ban đầu','Tốc độ'], 0, 'K phụ thuộc T (không phụ thuộc nồng độ).'),
    Q('Nguyên lý Le Chatelier?', ['Hệ chuyển dịch để chống lại sự thay đổi','Không phản ứng','Phá vỡ cân bằng','Tự động'], 0, 'Hệ phản ứng chống lại tác động bên ngoài.'),
    Q('Tăng nồng độ chất phản ứng → cân bằng chuyển?', ['Theo chiều thuận','Chiều nghịch','Không đổi','Phá vỡ'], 0, 'Chống lại sự tăng → giảm bằng cách tiêu thụ.'),
    Q('Tăng nhiệt độ trong phản ứng toả nhiệt → cân bằng?', ['Chuyển theo chiều nghịch','Chiều thuận','Không đổi','Phá vỡ'], 0, 'Hấp thụ nhiệt để giảm nhiệt độ.'),
  ]),

  M(23, 'Cân bằng phương trình hoá học và tính toán', [
    Q('Định luật bảo toàn khối lượng (Lomonosov-Lavoisier)?', ['Tổng khối lượng chất tham gia = tổng khối lượng sản phẩm','Khối lượng giảm','Khối lượng tăng','Không bảo toàn'], 0, 'Cơ sở cân bằng phương trình.'),
    Q('Số mol n = ?', ['m/M','m·M','M/m','m + M'], 0, 'n = khối lượng/khối lượng mol.'),
    Q('1 mol chất chứa?', ['6,022·10²³ hạt (số Avogadro)','10²³ hạt','10⁶ hạt','10²² hạt'], 0, 'Số Avogadro N_A.'),
    Q('Thể tích mol khí ở đktc (0°C, 1 atm)?', ['22,4 L','24 L','1 L','100 L'], 0, '1 mol khí lý tưởng ở đktc = 22,4 L.'),
    Q('Nồng độ mol C_M = ?', ['n/V (mol/L)','n·V','n + V','m/V'], 0, 'Số mol trên 1 lít dung dịch.'),
    Q('Nồng độ phần trăm C% = ?', ['(m_ct/m_dd)·100%','(m_ct/V)·100%','(n/V)·100%','m·V'], 0, 'Khối lượng chất tan / khối lượng dung dịch.'),
  ]),

  M(24, 'Ôn tập Cấu tạo nguyên tử', [
    Q('Số electron tối đa của lớp 2 (n=2)?', ['8','2','18','32'], 0, '2n² = 8.'),
    Q('Cấu hình electron của Na (Z=11)?', ['1s²2s²2p⁶3s¹','1s²2s²2p⁶','1s²2s²2p⁶3s²','1s²2s²2p⁵'], 0, 'Na: Z=11.'),
    Q('Cấu hình electron của Cl (Z=17)?', ['1s²2s²2p⁶3s²3p⁵','1s²2s²2p⁶3s²3p⁶','1s²2s²2p⁶3s²3p⁴','1s²2s²2p⁵'], 0, 'Cl: 17 e.'),
    Q('Nguyên tố có cấu hình 1s²2s²2p⁶3s²3p⁶ là?', ['Argon (Z=18)','Neon','Krypton','Helium'], 0, 'Ar: 18 e.'),
    Q('Nguyên tố cùng nhóm với Na?', ['Li, K (kim loại kiềm)','Cl','F','He'], 0, 'Nhóm IA.'),
    Q('Số neutron của ⁰¹⁶O?', ['8','16','24','0'], 0, 'N = A − Z = 16 − 8 = 8.'),
  ]),

  M(25, 'Ôn tập Bảng tuần hoàn và Liên kết', [
    Q('Halogen mạnh nhất?', ['F','Cl','Br','I'], 0, 'F có độ âm điện cao nhất.'),
    Q('Kim loại kiềm thổ thuộc nhóm?', ['IIA','IA','VIIA','VIIIA'], 0, 'Mg, Ca, Sr, Ba.'),
    Q('Liên kết trong NaCl?', ['Ion','Cộng hoá trị','Kim loại','Hydro'], 0, 'Na nhường e cho Cl.'),
    Q('Liên kết trong O₂?', ['Cộng hoá trị không cực','Cộng hoá trị có cực','Ion','Kim loại'], 0, '2 nguyên tử O cùng độ âm điện.'),
    Q('Liên kết trong H₂O?', ['Cộng hoá trị có cực','Ion','Kim loại','Cộng hoá trị không cực'], 0, 'O > H về độ âm điện.'),
    Q('Trong chu kì 3, nguyên tố có tính kim loại mạnh nhất?', ['Na','Mg','Al','Cl'], 0, 'Bên trái nhất.'),
  ]),

  M(26, 'Ôn tập Phản ứng oxy hoá - khử', [
    Q('Số oxy hoá của Mn trong KMnO₄?', ['+7','+4','+2','0'], 0, 'K = +1, O = −2, MnO₄⁻: Mn + 4·(−2) = −1 → Mn = +7.'),
    Q('Số oxy hoá của Cr trong K₂Cr₂O₇?', ['+6','+3','+7','0'], 0, '2K + 2Cr + 7O = 0 → 2 + 2Cr − 14 = 0 → Cr = +6.'),
    Q('Phản ứng Fe + 2HCl → FeCl₂ + H₂. Fe là?', ['Chất khử','Chất oxy hoá','Trung tính','Xúc tác'], 0, 'Fe⁰ → Fe²⁺ + 2e.'),
    Q('Trong Cu + 4HNO₃(đặc) → Cu(NO₃)₂ + 2NO₂ + 2H₂O, chất oxy hoá là?', ['HNO₃','Cu','H₂O','Cu(NO₃)₂'], 0, 'N⁺⁵ → N⁺⁴ (NO₂).'),
    Q('Số electron trong cân bằng oxy hoá - khử phải?', ['Bảo toàn','Mất đi','Tăng thêm','Bằng 0'], 0, 'e nhường = e nhận.'),
    Q('Nguyên tắc cân bằng oxy hoá khử?', ['Bảo toàn electron + bảo toàn nguyên tử + điện tích','Chỉ bảo toàn khối lượng','Chỉ bảo toàn electron','Không cần bảo toàn'], 0, 'Đủ 3 yếu tố.'),
  ]),

  M(27, 'Ôn tập Năng lượng và Tốc độ', [
    Q('Phản ứng toả nhiệt: ΔH?', ['< 0','> 0','= 0','Không xác định'], 0, 'Toả nhiệt → giảm enthalpy.'),
    Q('Ví dụ phản ứng toả nhiệt?', ['Đốt cháy','Quang hợp','Điện phân','Tan đá'], 0, 'Cháy toả nhiệt mạnh.'),
    Q('Chất xúc tác có tác dụng?', ['Tăng tốc độ phản ứng mà không bị tiêu hao','Làm chậm','Tham gia thay đổi','Triệt tiêu'], 0, 'Hạ năng lượng hoạt hoá.'),
    Q('Quy tắc Van\'t Hoff về nhiệt độ?', ['Nhiệt độ tăng 10°C, tốc độ tăng 2-4 lần','Nhiệt độ tăng, tốc độ giảm','Không liên quan','Tăng 10°C, tốc độ tăng 10 lần'], 0, 'Quy tắc kinh nghiệm.'),
    Q('Định luật Hess dùng để?', ['Tính ΔH gián tiếp qua chu trình','Đo nhiệt độ','Đo áp suất','Đo thời gian'], 0, 'ΔH chỉ phụ thuộc trạng thái.'),
    Q('Năng lượng hoạt hoá E_a là?', ['Năng lượng tối thiểu để phản ứng xảy ra','Năng lượng phản ứng','Nhiệt độ sôi','Năng lượng liên kết'], 0, 'Rào cản năng lượng.'),
  ]),

  M(28, 'Ôn tập Halogen và lưu huỳnh', [
    Q('Acid mạnh nhất trong các acid hydrohalic?', ['HI','HCl','HF','HBr'], 0, 'HF > HCl > HBr > HI về độ phân ly thì ngược: HI mạnh nhất.'),
    Q('Khí Cl₂ phản ứng với Fe tạo?', ['FeCl₃','FeCl₂','Fe₂Cl₃','FeCl'], 0, '2Fe + 3Cl₂ → 2FeCl₃ (Cl₂ oxy hoá mạnh).'),
    Q('SO₂ là khí?', ['Mùi hắc, không màu','Mùi thơm','Không mùi','Vàng lục'], 0, 'SO₂ gây mưa acid.'),
    Q('H₂SO₄ đặc nóng phản ứng với Cu tạo?', ['CuSO₄ + SO₂ + H₂O','CuSO₄ + H₂','Cu(SO₄)₂','Không phản ứng'], 0, 'Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O.'),
    Q('Iod gặp tinh bột tạo?', ['Màu xanh đen','Đỏ','Vàng','Không màu'], 0, 'Phản ứng nhận biết tinh bột.'),
    Q('Brom ở điều kiện thường?', ['Lỏng đỏ nâu','Khí vàng','Rắn tím','Khí không màu'], 0, 'Br₂ chất lỏng.'),
  ]),

  M(29, 'Ôn tập Cân bằng hoá học và tính toán', [
    Q('K (hằng số cân bằng) phụ thuộc vào?', ['Nhiệt độ','Áp suất','Nồng độ ban đầu','Thời gian'], 0, 'K(T).'),
    Q('Nguyên lý Le Chatelier áp dụng khi?', ['Thay đổi yếu tố bên ngoài (nồng độ, p, T)','Không thay đổi','Phá vỡ cân bằng','Tự nhiên'], 0, 'Hệ chuyển dịch theo chiều giảm tác động.'),
    Q('1 mol H₂O ở đktc chiếm thể tích?', ['18 mL (ở thể lỏng)','22,4 L','24 L','1 L'], 0, 'Nước lỏng có khối lượng riêng ~ 1 g/mL.'),
    Q('Số phân tử trong 1 mol O₂?', ['6,022·10²³','10²³','10²²','1'], 0, 'Số Avogadro.'),
    Q('22,4 L khí O₂ ở đktc nặng?', ['32 g','16 g','64 g','22,4 g'], 0, 'M(O₂) = 32; 1 mol = 22,4 L.'),
    Q('Dung dịch 1 M nghĩa là?', ['1 mol chất tan / 1 L dung dịch','1 g/L','1 mol/g','1 g/mL'], 0, 'Nồng độ mol C_M.'),
  ]),

  M(30, 'Tính chất nguyên tố theo nhóm A — Tổng hợp', [
    Q('Nhóm IA (kim loại kiềm) có?', ['1 e ngoài, dễ nhường e','7 e ngoài','Bền vững','Khí trơ'], 0, 'Cấu hình ns¹.'),
    Q('Nhóm IIA (kiềm thổ) có?', ['2 e ngoài, dễ nhường 2e','1 e','6 e','8 e'], 0, 'Cấu hình ns².'),
    Q('Nhóm VIIA (halogen) có?', ['7 e ngoài, dễ nhận 1e','1 e','8 e','3 e'], 0, 'Cấu hình ns²np⁵.'),
    Q('Nhóm VIIIA (khí hiếm) có?', ['8 e ngoài (trừ He có 2), bền vững','7 e','1 e','3 e'], 0, 'Cấu hình bền vững → khó phản ứng.'),
    Q('Trong chu kì, độ âm điện?', ['Tăng từ trái sang phải','Giảm','Không đổi','Dao động'], 0, 'Phi kim mạnh hơn → ĐAĐ tăng.'),
    Q('Khí hiếm nào bị tìm thấy có thể tạo hợp chất?', ['Xe (XeF₄, XeO₃,…)','He','Ne','Ar'], 0, 'Xenon có thể tạo một số hợp chất.'),
  ]),

  M(31, 'Ôn tập Liên kết hoá học tổng hợp', [
    Q('Liên kết ion mạnh hơn liên kết hydro vì?', ['Lực hút điện tích lớn hơn','Ngắn hơn','Có 2 e','Không có lý do'], 0, 'Lực Coulomb giữa ion mạnh.'),
    Q('Liên kết cộng hoá trị có cực có?', ['Cặp e dùng chung lệch về phía nguyên tử có ĐAĐ lớn hơn','Cặp e đều','Không có cặp e','Chuyển e hoàn toàn'], 0, 'Phân cực một phần.'),
    Q('Trong CH₄, các liên kết C-H là?', ['Cộng hoá trị không cực (ĐAĐ chênh nhỏ)','Ion','Kim loại','Hydro'], 0, 'C và H có ĐAĐ gần nhau.'),
    Q('Liên kết hydro có vai trò trong?', ['Quyết định nhiệt độ sôi cao của H₂O, cấu trúc DNA','Không quan trọng','Chỉ khí','Chỉ rắn'], 0, 'Vai trò sinh học và lý hoá quan trọng.'),
    Q('Liên kết kim loại trong Cu cho phép?', ['Dẫn điện và dẫn nhiệt tốt','Cách điện','Không dẫn','Tan trong nước'], 0, 'Biển electron tự do.'),
    Q('Liên kết cho-nhận khác cộng hoá trị thường ở?', ['Cặp e chỉ do một nguyên tử cung cấp','Có 2 cặp e','Không có e','Trao đổi e'], 0, 'Một bên cho, một bên nhận.'),
  ]),

  M(32, 'Bài tập tổng hợp 1', [
    Q('Tính phân tử khối của H₂SO₄?', ['98 u','100 u','96 u','64 u'], 0, '2·1 + 32 + 4·16 = 98.'),
    Q('Số mol của 9,8 g H₂SO₄?', ['0,1 mol','1 mol','0,5 mol','0,01 mol'], 0, '9,8/98 = 0,1.'),
    Q('Thể tích 0,1 mol H₂ ở đktc?', ['2,24 L','22,4 L','1 L','0,1 L'], 0, '0,1·22,4 = 2,24.'),
    Q('Số phân tử trong 0,5 mol H₂O?', ['3,011·10²³','6,022·10²³','10²³','10²²'], 0, '0,5·N_A = 0,5·6,022·10²³.'),
    Q('Cân bằng: __Al + __HCl → __AlCl₃ + __H₂', ['2; 6; 2; 3','1; 3; 1; 1','1; 1; 1; 1','Al + 2HCl'], 0, '2Al + 6HCl → 2AlCl₃ + 3H₂.'),
    Q('Số oxy hoá của S trong SO₃?', ['+6','+4','+2','0'], 0, 'S + 3·(−2) = 0 → S = +6.'),
  ]),

  M(33, 'Bài tập tổng hợp 2', [
    Q('Hoà tan 5,85 g NaCl vào nước được 250 mL dung dịch. C_M = ?', ['0,4 M','0,1 M','1 M','0,2 M'], 0, 'n = 5,85/58,5 = 0,1; C = 0,1/0,25 = 0,4.'),
    Q('Phản ứng Mg + 2HCl → MgCl₂ + H₂. 2,4 g Mg phản ứng vừa đủ tạo bao nhiêu lít H₂ ở đktc?', ['2,24 L','1,12 L','22,4 L','3,36 L'], 0, 'n Mg = 2,4/24 = 0,1 → n H₂ = 0,1 → V = 2,24 L.'),
    Q('Đốt 4,8 g Mg trong O₂ tạo bao nhiêu g MgO?', ['8 g','5,6 g','10 g','4,8 g'], 0, '2Mg + O₂ → 2MgO; n Mg = 0,2 → n MgO = 0,2; m = 0,2·40 = 8.'),
    Q('Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Loại phản ứng?', ['Tự oxy hoá - tự khử','Trao đổi','Phân huỷ','Hoá hợp'], 0, 'Cl₂ vừa là chất oxy hoá vừa là chất khử.'),
    Q('Dung dịch HCl 0,1 M có pH = ?', ['1','7','14','0'], 0, 'pH = −log[H⁺] = 1.'),
    Q('SO₂ tan trong nước tạo?', ['H₂SO₃ (acid yếu)','H₂SO₄','H₂S','Không phản ứng'], 0, 'SO₂ + H₂O ⇌ H₂SO₃.'),
  ]),

  M(34, 'Đề tổng hợp 1 — Cuối năm', [
    Q('Bảng tuần hoàn được sắp xếp theo?', ['Số hiệu nguyên tử Z tăng dần','Khối lượng','Tên','Số neutron'], 0, 'Theo Z.'),
    Q('Liên kết trong NaCl là?', ['Ion','Cộng hoá trị','Kim loại','Hydro'], 0, 'Kim loại điển hình + phi kim điển hình.'),
    Q('Chất khử là chất?', ['Nhường electron','Nhận electron','Trung tính','Không e'], 0, 'Chất khử bị oxy hoá.'),
    Q('Halogen có tính oxy hoá mạnh nhất?', ['F','Cl','Br','I'], 0, 'F mạnh nhất.'),
    Q('Định luật Hess phát biểu?', ['ΔH chỉ phụ thuộc trạng thái đầu và cuối','Phụ thuộc đường đi','Bằng 0','Tuỳ thời gian'], 0, 'Hess.'),
    Q('Yếu tố nào KHÔNG ảnh hưởng đến tốc độ phản ứng?', ['Tên chất','Nhiệt độ','Nồng độ','Xúc tác'], 0, 'Tên không ảnh hưởng.'),
  ]),

  M(35, 'Đề tổng hợp 2 — Cuối năm', [
    Q('Nguyên tử C có Z = ?', ['6','12','7','5'], 0, 'C có 6 proton.'),
    Q('Cấu hình electron của O (Z = 8)?', ['1s²2s²2p⁴','1s²2s²2p⁶','1s²2s²2p⁵','1s²2s²2p³'], 0, '8 e.'),
    Q('Liên kết trong CO₂ là?', ['Cộng hoá trị có cực','Ion','Kim loại','Hydro'], 0, 'C và O khác ĐAĐ.'),
    Q('Phản ứng nào toả nhiệt?', ['Đốt cháy than (C + O₂ → CO₂)','Quang hợp','Điện phân nước','Hoà tan KNO₃'], 0, 'Cháy toả nhiệt.'),
    Q('Tốc độ phản ứng tăng khi?', ['Tăng nhiệt độ','Giảm nhiệt độ','Giảm nồng độ','Loại xúc tác'], 0, 'Quy tắc Van\'t Hoff.'),
    Q('Halogen ở thể rắn?', ['I','F','Cl','Br'], 0, 'I là rắn (tinh thể tím đen).'),
  ]),
];

export const H10HOA_SCENARIOS = indexBy(H10HOA_WEEKS);
