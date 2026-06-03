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
    Q('Hoá học là khoa học nghiên cứu?', ['Sinh vật', 'Thành phần, cấu tạo, tính chất và biến đổi của chất', 'Trái Đất', 'Khí hậu'], 1, 'Hoá học nghiên cứu chất và sự biến đổi chất.'),
    Q('Đơn chất là?', ['Chất tạo từ một nguyên tố hoá học', 'Hỗn hợp 2 nguyên tố', 'Dung dịch', 'Hợp chất'], 0, 'O₂, H₂, Cu là đơn chất.'),
    Q('Hợp chất là?', ['Chất tạo từ 2 hay nhiều nguyên tố', 'Hỗn hợp', 'Tự nhiên', 'Một nguyên tố'], 0, 'H₂O, NaCl là hợp chất.'),
    Q('Phản ứng hoá học là?', ['Thay đổi trạng thái', 'Đổi màu thuần tuý', 'Hoà tan', 'Quá trình biến đổi chất này thành chất khác'], 3, 'Phản ứng → liên kết bị phá huỷ/hình thành.'),
    Q('Đơn vị khối lượng nguyên tử?', ['mol (số lượng hạt)', 'kg (đơn vị khối lượng SI)', 'amu hoặc u', 'g (gam, khối lượng vĩ mô)'], 2, '1 u ≈ 1,66·10⁻²⁷ kg.'),
    Q('Vai trò của hoá học?', ['Chỉ nghiên cứu', 'Phục vụ nhiều ngành: y dược, năng lượng, vật liệu, môi trường,…', 'Chỉ trong phòng thí nghiệm', 'Không ứng dụng'], 1, 'Hoá học có ứng dụng rộng khắp.'),
  ]),

  M(2, 'Cấu tạo nguyên tử — Các hạt cơ bản', [
    Q('Nguyên tử cấu tạo gồm?', ['Chỉ neutron', 'Chỉ proton', 'Chỉ electron', 'Hạt nhân (proton + neutron) và electron'], 3, '3 loại hạt cơ bản.'),
    Q('Điện tích của proton?', ['−1 (nhầm với electron)', '+1 (đơn vị)', '0', '+2'], 1, 'p mang điện dương.'),
    Q('Điện tích của electron?', ['+2', '+1', '−1', '0'], 2, 'e mang điện âm.'),
    Q('Điện tích của neutron?', ['0', '+2', '+1', '−1 (nhầm với electron)'], 0, 'n trung hoà về điện.'),
    Q('Số khối A = ?', ['Số electron', 'Số proton', 'Số proton + số neutron', 'Số neutron'], 2, 'A = Z + N.'),
    Q('Số hiệu nguyên tử Z?', ['Số neutron', 'Số proton trong hạt nhân', 'Số khối', 'Số electron'], 1, 'Z = số proton = số electron (nguyên tử trung hoà).'),
  ]),

  M(3, 'Mô hình nguyên tử — Bohr và mô hình lượng tử', [
    Q('Mô hình Bohr cho rằng electron?', ['Chuyển động tự do, không quỹ đạo', 'Là sóng', 'Đứng yên', 'Chuyển động trên các quỹ đạo xác định quanh hạt nhân'], 3, 'Bohr: electron quay quanh hạt nhân ở các quỹ đạo có năng lượng xác định.'),
    Q('Mô hình lượng tử hiện đại mô tả electron?', ['Chuyển động ngẫu nhiên', 'Đứng yên', 'Quỹ đạo xác định', 'Bằng orbital (xác suất có mặt)'], 3, 'Electron không có quỹ đạo cố định, chỉ có xác suất.'),
    Q('Orbital nguyên tử (AO) là?', ['Quỹ đạo electron', 'Vùng không gian quanh hạt nhân nơi electron có xác suất tồn tại cao', 'Hạt nhân', 'Tế bào'], 1, 'AO = vùng xác suất ~95% có electron.'),
    Q('Có mấy loại orbital chính ở lớp nguyên tử?', ['s, p, d, f', '1, 2, 3', 'a, b, c', 'x, y, z'], 0, '4 loại: s, p, d, f.'),
    Q('Orbital s có hình dạng?', ['Hình cầu', 'Hình elip', 'Hình số 8', 'Hình hoa'], 0, 'Orbital s đối xứng cầu.'),
    Q('Orbital p có hình dạng?', ['Hình cầu', 'Hình hoa', 'Hình elip', 'Hình số 8 (quả tạ)'], 3, 'p có dạng quả tạ.'),
  ]),

  M(4, 'Cấu hình electron — Quy tắc Hund, Pauli', [
    Q('Số electron tối đa trên lớp n?', ['n² (nhầm với số orbital lớp n)', '2n', 'n (chỉ là số thứ tự lớp)', '2n²'], 3, '2n²: lớp 1 có 2e, lớp 2 có 8e, lớp 3 có 18e.'),
    Q('Số electron tối đa trên một orbital?', ['4', '8', '2', '1'], 2, 'Pauli: tối đa 2e/orbital (spin ngược).'),
    Q('Phân lớp s có bao nhiêu orbital?', ['5', '3', '7', '1'], 3, '1 orbital → max 2e.'),
    Q('Phân lớp p có bao nhiêu orbital?', ['3', '1', '7', '5'], 0, '3 orbital → max 6e.'),
    Q('Phân lớp d có bao nhiêu orbital?', ['5', '7', '9', '3'], 0, '5 orbital → max 10e.'),
    Q('Quy tắc Hund: electron trong phân lớp?', ['Bỏ trống', 'Ghép cặp ngay vào orbital có sẵn', 'Phân bố vào các orbital sao cho số electron độc thân là tối đa', 'Cặp đôi sớm'], 2, 'Hund: e ưu tiên ô trống, spin song song.'),
  ]),

  M(5, 'Bảng tuần hoàn — Cấu trúc và quy luật', [
    Q('Bảng tuần hoàn do ai đề xuất?', ['Mendeleev', 'Bohr (nhầm với mô hình nguyên tử)', 'Einstein', 'Newton'], 0, 'Mendeleev (1869).'),
    Q('Nguyên tắc sắp xếp BTH hiện đại?', ['Theo tên', 'Theo khối lượng', 'Theo màu sắc', 'Theo số hiệu nguyên tử Z tăng dần'], 3, 'Sắp theo Z tăng dần.'),
    Q('Hàng ngang trong BTH gọi là?', ['Nhóm (đó là cột dọc)', 'Phân lớp', 'Chu kì', 'Ô nguyên tố (chỉ 1 nguyên tố)'], 2, 'Chu kì = hàng ngang.'),
    Q('Cột dọc gọi là?', ['Phân lớp', 'Chu kì', 'Ô nguyên tố (1 vị trí đơn lẻ)', 'Nhóm'], 3, 'Nhóm = cột.'),
    Q('Nguyên tố nhóm IA gồm?', ['Kim loại kiềm (Li, Na, K,…)', 'Kim loại quý', 'Halogen', 'Khí hiếm'], 0, 'Nhóm IA: kim loại kiềm.'),
    Q('Nguyên tố nhóm VIIA gồm?', ['Halogen (F, Cl, Br, I)', 'Khí hiếm', 'Kim loại', 'Phi kim đa hoá trị'], 0, 'Nhóm VIIA = halogen.'),
  ]),

  M(6, 'Định luật tuần hoàn — Sự biến thiên tính chất', [
    Q('Định luật tuần hoàn: tính chất biến đổi tuần hoàn theo?', ['Số neutron', 'Trạng thái', 'Khối lượng', 'Số hiệu nguyên tử Z'], 3, 'Theo Z (cấu hình electron).'),
    Q('Trong cùng chu kì, từ trái sang phải, bán kính nguyên tử?', ['Tăng (nhầm với chiều nhóm A)', 'Dao động', 'Không đổi', 'Giảm'], 3, 'Hạt nhân hút mạnh hơn → bán kính giảm.'),
    Q('Trong cùng nhóm A, từ trên xuống dưới, bán kính?', ['Tăng', 'Không đổi', 'Dao động', 'Giảm (nhầm với chiều chu kì)'], 0, 'Lớp electron tăng → bán kính tăng.'),
    Q('Độ âm điện trong chu kì (T → P)?', ['Dao động', 'Giảm (nhầm với chiều nhóm A)', 'Tăng', 'Không đổi'], 2, 'Phi kim mạnh hơn → độ âm điện tăng.'),
    Q('Độ âm điện trong nhóm A (trên → dưới)?', ['Không đổi', 'Giảm', 'Dao động', 'Tăng (nhầm với chiều chu kì)'], 1, 'Bán kính tăng → độ âm điện giảm.'),
    Q('Tính kim loại trong chu kì?', ['Dao động', 'Không đổi', 'Tăng dần', 'Giảm dần'], 3, 'Sang phải: phi kim mạnh dần.'),
  ]),

  M(7, 'Liên kết ion', [
    Q('Liên kết ion hình thành giữa?', ['Hai phi kim', 'Hai kim loại', 'Khí hiếm', 'Kim loại điển hình và phi kim điển hình'], 3, 'Chuyển electron giữa kim loại và phi kim.'),
    Q('Ion dương được gọi là?', ['Anion (ion âm, nhầm dấu)', 'Cation', 'Đồng vị', 'Trung hoà'], 1, 'Cation = mất electron.'),
    Q('Ion âm là?', ['Trung hoà', 'Anion', 'Cation', 'Đồng vị'], 1, 'Anion = nhận electron.'),
    Q('Liên kết ion trong NaCl: Na →?', ['Na⁻ (nhầm chiều cho-nhận e)', 'Na không đổi', 'Na⁺ + e⁻', 'Na²⁺ (mất 2e, sai số e nhường)'], 2, 'Na nhường 1e → Na⁺.'),
    Q('Hợp chất ion ở điều kiện thường?', ['Khí dễ bay hơi ở nhiệt độ phòng', 'Chất rắn, kết tinh, nóng chảy ở nhiệt độ cao', 'Lỏng nhớt, dễ tan trong dầu', 'Trong suốt mềm'], 1, 'Mạng tinh thể ion bền.'),
    Q('Hợp chất ion dẫn điện khi?', ['Ở mọi trạng thái', 'Trạng thái rắn (mạng tinh thể)', 'Nóng chảy hoặc tan trong nước', 'Không dẫn'], 2, 'Cần ion tự do để dẫn điện.'),
  ]),

  M(8, 'Liên kết cộng hoá trị', [
    Q('Liên kết cộng hoá trị là?', ['Cho-nhận e', 'Bóng đèn', 'Liên kết hình thành bằng cách dùng chung electron', 'Hút nhau'], 2, 'Hai nguyên tử chung cặp e.'),
    Q('Liên kết cộng hoá trị không cực hình thành giữa?', ['2 nguyên tố khác hẳn', '2 nguyên tử cùng nguyên tố (như H₂)', 'Khí hiếm', 'Kim loại'], 1, 'Độ âm điện chênh = 0.'),
    Q('Liên kết cộng hoá trị có cực giữa?', ['Cùng nguyên tử', '2 phi kim khác độ âm điện', '2 phi kim cùng', 'Kim loại'], 1, 'Chênh độ âm điện 0,4–1,7.'),
    Q('H₂O có liên kết?', ['Liên kết hydro giữa các phân tử H₂O', 'Liên kết ion giữa H⁺ và O²⁻', 'Cộng hoá trị có cực', 'Kim loại'], 2, 'O kéo e mạnh hơn H → có cực.'),
    Q('Số liên kết cộng hoá trị mà C có thể tạo?', ['3', '1', '4', '2'], 2, 'C có 4 e ở lớp ngoài → 4 liên kết.'),
    Q('Liên kết đôi gồm?', ['2 σ', '2 π', '1 σ + 1 π', '3 σ'], 2, 'Liên kết đôi = 1 sigma + 1 pi.'),
  ]),

  M(9, 'Liên kết cho - nhận và liên kết kim loại', [
    Q('Liên kết cho-nhận là?', ['Cặp e dùng chung do một nguyên tử cung cấp', 'Mỗi bên cho 1 e tạo cặp chung', 'Mỗi bên góp 1 e', 'Chuyển e hoàn toàn'], 0, 'NH₄⁺: N cho cặp e.'),
    Q('Ion NH₄⁺ có?', ['Liên kết kim loại', '4 liên kết ion', 'Không có cho-nhận', '1 liên kết cho-nhận từ N → H⁺'], 3, 'Cặp e tự do của N tạo liên kết với H⁺.'),
    Q('Liên kết kim loại trong kim loại?', ['Cộng hoá trị', 'Cặp e dùng chung giữa 2 nguyên tử', 'Lực hút giữa các phân tử phân cực', 'Electron tự do chuyển động giữa các ion dương'], 3, '"Biển electron" trong mạng kim loại.'),
    Q('Đặc điểm của kim loại?', ['Dẫn điện, dẫn nhiệt tốt, dẻo', 'Trong suốt', 'Không dẫn điện', 'Giòn, dễ vỡ khi va đập'], 0, 'Do electron tự do.'),
    Q('Mạng tinh thể kim loại có?', ['Các ion dương và electron tự do', 'Chỉ nguyên tử trung hoà', 'Chỉ ion', 'Chỉ electron'], 0, 'Cấu trúc đặc trưng của kim loại.'),
    Q('Khi đập kim loại, tại sao không vỡ?', ['Vì ướt', 'Vì cứng', 'Vì giòn', 'Các lớp ion trượt trên nhau qua biển electron'], 3, 'Tính dẻo của kim loại.'),
  ]),

  M(10, 'Liên kết hydro và lực Van der Waals', [
    Q('Liên kết hydro hình thành giữa?', ['Kim loại', 'Khí trơ', 'H (đã liên kết F, O, N) với F, O, N của phân tử khác', 'C và H'], 2, 'H kết với F/O/N có thể tạo cầu nối với F/O/N khác.'),
    Q('Liên kết hydro có cường độ?', ['Yếu nhất', 'Yếu hơn liên kết cộng hoá trị nhưng mạnh hơn lực Van der Waals', 'Mạnh nhất', 'Bằng ion'], 1, 'Trung gian giữa cộng hoá trị và Van der Waals.'),
    Q('Liên kết hydro làm cho H₂O có?', ['Không có tính chất gì', 'Mất tính lỏng', 'Nhiệt độ sôi thấp', 'Nhiệt độ sôi cao bất thường'], 3, 'H₂O sôi ở 100°C — cao bất thường nhờ H-bond.'),
    Q('Lực Van der Waals là?', ['Lực hút yếu giữa các phân tử', 'Liên kết mạnh', 'Liên kết ion', 'Liên kết cho-nhận'], 0, 'Lực phân tán rất yếu.'),
    Q('Trong DNA, các base nối nhau bằng?', ['Liên kết kim loại', 'Cộng hoá trị', 'Liên kết ion', 'Liên kết hydro'], 3, 'Cặp base (A=T, G≡C) bằng H-bond.'),
    Q('Nước đá nổi trên nước lỏng vì?', ['Liên kết hydro tạo cấu trúc tinh thể có khoảng trống → mật độ thấp', 'Nước đá nhẹ tự nhiên', 'Có không khí', 'Do băng chứa nhiều bọt khí lẫn vào'], 0, 'Mật độ băng < mật độ nước lỏng nhờ cấu trúc H-bond.'),
  ]),

  M(11, 'Phản ứng oxy hoá — khử (Phần 1)', [
    Q('Quá trình oxy hoá là?', ['Nhường electron, số oxy hoá tăng', 'Không liên quan electron', 'Đứng yên', 'Nhận electron'], 0, 'Oxy hoá = mất e.'),
    Q('Quá trình khử là?', ['Không thay đổi', 'Nhường electron', 'Mất hydro', 'Nhận electron, số oxy hoá giảm'], 3, 'Khử = nhận e.'),
    Q('Chất khử là?', ['Chất nhường electron', 'Chất trung hoà', 'Chất xúc tác trong phản ứng', 'Chất nhận electron'], 0, 'Chất bị oxy hoá = chất khử.'),
    Q('Chất oxy hoá là?', ['Chất nhường electron', 'Chất xúc tác phản ứng', 'Chất nhận electron', 'Chất trung hoà'], 2, 'Chất bị khử = chất oxy hoá.'),
    Q('Số oxy hoá của O trong H₂O?', ['+2', '−1 (nhầm với peroxide H₂O₂)', '0', '−2'], 3, 'O thường có số OXH = −2.'),
    Q('Số oxy hoá của H trong HCl?', ['−1 (nhầm với hydrua kim loại)', '+2', '+1', '0'], 2, 'H thường +1 (trừ hydrua kim loại).'),
  ]),

  M(12, 'Phản ứng oxy hoá — khử (Phần 2): Cân bằng bằng phương pháp electron', [
    Q('Bước đầu trong cân bằng oxy hoá - khử?', ['Trừ đi', 'Học thuộc', 'Xác định số oxy hoá các nguyên tố', 'Cộng vào'], 2, 'Bước 1: xác định số OXH.'),
    Q('Bước kế tiếp?', ['Viết quá trình oxy hoá và khử', 'Cân bằng nguyên tố', 'Cộng phản ứng', 'Thử ngẫu nhiên'], 0, 'Viết 2 nửa phản ứng.'),
    Q('Quy tắc bảo toàn electron?', ['Không cần', 'Số e nhường > nhận', 'Số e nhường = số e nhận', 'Bỏ qua'], 2, 'Cốt lõi của cân bằng.'),
    Q('Sau khi bảo toàn electron, cần?', ['Đặt hệ số cho phản ứng và cân bằng nguyên tố và điện tích', 'Bỏ qua', 'Vẽ hình', 'Cộng số'], 0, 'Hoàn chỉnh phương trình.'),
    Q('Trong Fe + Cu²⁺ → Fe²⁺ + Cu, Fe là?', ['Chất khử', 'Không phản ứng', 'Chất oxy hoá', 'Trung hoà'], 0, 'Fe nhường e → Fe²⁺.'),
    Q('Cu²⁺ trong phản ứng trên là?', ['Chất oxy hoá', 'Chất khử (nhầm chiều cho-nhận e)', 'Trung hoà', 'Chất khử'], 0, 'Nhận e → Cu kim loại.'),
  ]),

  M(13, 'Năng lượng hoá học — Phản ứng toả nhiệt và thu nhiệt', [
    Q('Phản ứng toả nhiệt là?', ['Đứng yên', 'Không trao đổi', 'Phản ứng giải phóng nhiệt ra môi trường', 'Hấp thụ nhiệt'], 2, 'ΔH < 0.'),
    Q('Phản ứng thu nhiệt là?', ['Phản ứng hấp thụ nhiệt từ môi trường', 'Toả nhiệt', 'Phản ứng toả nhiệt ra môi trường', 'Không xác định'], 0, 'ΔH > 0.'),
    Q('Ví dụ phản ứng toả nhiệt?', ['Quang hợp', 'Đốt cháy nhiên liệu (xăng, gỗ,…)', 'Tan đá', 'Đun sôi'], 1, 'Cháy là toả nhiệt điển hình.'),
    Q('Ví dụ phản ứng thu nhiệt?', ['Quang hợp ở cây xanh', 'Nổ pháo', 'Cháy nến', 'Đốt than'], 0, 'Quang hợp dùng năng lượng ánh sáng.'),
    Q('Đơn vị biến thiên enthalpy ΔH?', ['N (newton, lực)', 'Pa (pascal, áp suất)', 'J/s (jun/giây, công suất)', 'kJ/mol'], 3, 'ΔH đo bằng kJ/mol.'),
    Q('Phản ứng nào toả nhiệt mạnh?', ['H₂O → H₂ + ½O₂', 'CH₄ + 2O₂ → CO₂ + 2H₂O', 'N₂ + O₂ → 2NO', 'CaCO₃ → CaO + CO₂'], 1, 'Cháy metan toả ~890 kJ/mol.'),
  ]),

  M(14, 'Định luật Hess — Tính biến thiên enthalpy', [
    Q('Định luật Hess phát biểu?', ['Bằng 0', 'Phụ thuộc đường đi', 'Tuỳ thời gian', 'Biến thiên enthalpy chỉ phụ thuộc trạng thái đầu và cuối, không phụ thuộc đường đi'], 3, 'Hess: ΔH chỉ phụ thuộc trạng thái.'),
    Q('Hệ quả của định luật Hess?', ['Bỏ qua', 'Có thể cộng ΔH của các phản ứng trung gian', 'Cần thực nghiệm trực tiếp', 'Không tính được'], 1, 'Tính ΔH gián tiếp qua chu trình.'),
    Q('ΔH của phản ứng tạo thành 1 mol chất từ đơn chất bền gọi là?', ['Enthalpy hoá hơi', 'Enthalpy đốt cháy', 'Enthalpy tạo thành tiêu chuẩn ΔH°_f', 'Enthalpy phân huỷ'], 2, 'ΔH°_f = nhiệt tạo thành chuẩn.'),
    Q('ΔH°_f của đơn chất bền ở trạng thái chuẩn?', ['= 0', '< 0 (nhầm với phản ứng toả nhiệt)', '> 0 (nhầm với phản ứng thu nhiệt)', 'Không xác định'], 0, 'Đơn chất bền chuẩn có ΔH°_f = 0.'),
    Q('ΔH phản ứng = ?', ['Không tính được', 'Bằng 0', 'Σ ΔH°_f tất cả', 'Σ ΔH°_f(sản phẩm) − Σ ΔH°_f(chất phản ứng)'], 3, 'Công thức tính ΔH phản ứng.'),
    Q('Định luật Hess dựa trên?', ['Bảo toàn entropy', 'Bảo toàn năng lượng', 'Bảo toàn khối lượng', 'Bảo toàn động lượng'], 1, 'Hess là hệ quả định luật I nhiệt động.'),
  ]),

  M(15, 'Tốc độ phản ứng — Yếu tố ảnh hưởng', [
    Q('Tốc độ phản ứng là?', ['Khối lượng phản ứng', 'Năng lượng', 'Sự thay đổi nồng độ chất phản ứng/sản phẩm theo thời gian', 'Số lượng phân tử'], 2, 'v = Δc/Δt.'),
    Q('Yếu tố ảnh hưởng đến tốc độ phản ứng?', ['Chỉ nồng độ', 'Nồng độ, nhiệt độ, áp suất, diện tích bề mặt, chất xúc tác', 'Chỉ nhiệt', 'Chỉ phụ thuộc bản chất chất phản ứng'], 1, '5 yếu tố chính.'),
    Q('Khi nhiệt độ tăng, tốc độ phản ứng?', ['Dao động', 'Tăng', 'Giảm (nhầm chiều ảnh hưởng nhiệt)', 'Không đổi'], 1, 'Quy tắc Van\'t Hoff.'),
    Q('Tăng nồng độ chất phản ứng → tốc độ?', ['Không đổi', 'Tuỳ phản ứng', 'Tăng', 'Giảm (nhầm chiều tác động nồng độ)'], 2, 'Va chạm hiệu quả nhiều hơn.'),
    Q('Chất xúc tác?', ['Triệt tiêu', 'Tham gia phản ứng', 'Tăng tốc độ phản ứng, không bị tiêu hao', 'Làm chậm'], 2, 'Chất xúc tác hạ năng lượng hoạt hoá.'),
    Q('Diện tích bề mặt lớn?', ['Không ảnh hưởng', 'Tăng tốc độ phản ứng', 'Triệt tiêu', 'Giảm tốc độ phản ứng'], 1, 'Tiếp xúc nhiều hơn.'),
  ]),

  M(16, 'Halogen — Tính chất chung', [
    Q('Nhóm halogen gồm?', ['Na, K, Cs', 'F, Cl, Br, I, At', 'C, N, P', 'O, S, Se'], 1, 'Nhóm VIIA = halogen.'),
    Q('Cấu hình lớp ngoài cùng của halogen?', ['ns²np⁴', 'ns²np⁵', 'ns¹ (cấu hình kim loại kiềm)', 'ns²np⁶'], 1, '7 e ngoài → có xu hướng nhận 1 e.'),
    Q('Tính chất hoá học đặc trưng halogen?', ['Tính khử mạnh', 'Trung hoà', 'Không phản ứng', 'Tính oxy hoá mạnh'], 3, 'Thiếu 1e → mạnh oxy hoá.'),
    Q('Tính oxy hoá giảm dần theo thứ tự?', ['F < Cl < Br < I', 'F > Cl > Br > I', 'I > Br > Cl > F', 'F = Cl = Br = I'], 1, 'Trong nhóm: bán kính tăng → tính oxy hoá giảm.'),
    Q('Ở điều kiện thường, halogen nào ở thể lỏng?', ['I (rắn tinh thể tím đen)', 'F (khí vàng nhạt)', 'Cl (khí vàng lục)', 'Br (đỏ nâu)'], 3, 'Br là chất lỏng đỏ nâu.'),
    Q('Halogen nào tồn tại ở thể rắn ở nhiệt độ thường?', ['Cl (khí vàng lục ở phòng)', 'Br (chất lỏng đỏ nâu)', 'I', 'F (khí vàng nhạt)'], 2, 'I rắn, tinh thể tím đen.'),
  ]),

  M(17, 'Clo và hợp chất của clo', [
    Q('Clo ở điều kiện thường là?', ['Khí không màu', 'Lỏng đỏ nâu (đó là Br₂)', 'Rắn tinh thể tím (đó là I₂)', 'Khí, màu vàng lục'], 3, 'Cl₂ khí vàng lục.'),
    Q('Cl₂ phản ứng với H₂ (ánh sáng):', ['Không phản ứng', 'HCl₂ (sai hoá trị Cl)', 'H₂Cl (sai hoá trị H)', 'H₂ + Cl₂ → 2HCl'], 3, 'Phản ứng nổ với ánh sáng.'),
    Q('Cl₂ tan trong nước tạo?', ['Nước clo (HCl + HClO)', 'Chỉ HClO', 'Chỉ HCl', 'Chỉ H₂O (không xảy ra phản ứng)'], 0, 'Cl₂ + H₂O ⇌ HCl + HClO.'),
    Q('HCl là?', ['Acid mạnh', 'Trung tính', 'Base mạnh (nhầm với NaOH)', 'Acid yếu'], 0, 'HCl phân ly hoàn toàn.'),
    Q('Nước Javen là?', ['Ca(OCl)₂', 'Cl₂ tinh khiết', 'Hỗn hợp NaCl + NaClO', 'HCl đặc (acid clohydric)'], 2, 'Nước Javen = dung dịch tẩy rửa.'),
    Q('Vai trò công nghiệp của Cl₂?', ['Phân bón', 'Mỹ phẩm', 'Làm thực phẩm', 'Sản xuất nhựa PVC, tẩy trắng, khử trùng nước'], 3, 'Cl₂ rất quan trọng trong công nghiệp.'),
  ]),

  M(18, 'Ôn tập học kỳ 1', [
    Q('Nguyên tử gồm?', ['Hạt nhân + electron', 'Chỉ electron', 'Chỉ hạt nhân', 'Chỉ neutron'], 0, '2 phần.'),
    Q('Số khối A = ?', ['Z (chỉ là số proton)', 'Z · N (tích số p và n)', 'N (chỉ là số neutron)', 'Z + N'], 3, 'A = số p + số n.'),
    Q('Liên kết ion hình thành giữa?', ['Khí hiếm', 'Kim loại điển hình và phi kim điển hình', '2 kim loại', '2 phi kim'], 1, 'Chênh độ âm điện > 1,7.'),
    Q('Liên kết cộng hoá trị có cực giữa?', ['Khí hiếm', 'Phi kim cùng nguyên tố', 'Kim loại', '2 phi kim có độ âm điện khác nhau'], 3, 'Chênh độ âm điện 0,4–1,7.'),
    Q('Chất khử là chất?', ['Nhận e', 'Trung hoà', 'Nhường e', 'Không e'], 2, 'Chất khử bị oxy hoá.'),
    Q('Halogen ở thể khí ở điều kiện thường?', ['F, Cl', 'Cl, Br', 'Br, I (đỏ nâu lỏng và rắn tím)', 'F, I (khí vàng và rắn tím)'], 0, 'F₂ và Cl₂ là khí.'),
  ]),

  // ──────────────── HK2 ────────────────
  M(19, 'Brom và Iod', [
    Q('Brom ở điều kiện thường là?', ['Rắn tinh thể tím (đó là I₂)', 'Khí vàng lục (đó là Cl₂)', 'Chất lỏng đỏ nâu', 'Không màu'], 2, 'Br₂ lỏng, dễ bay hơi.'),
    Q('Iod ở điều kiện thường?', ['Không màu', 'Khí vàng lục (đó là Cl₂)', 'Lỏng đỏ nâu (đó là Br₂)', 'Chất rắn tinh thể tím đen'], 3, 'I₂ rắn, dễ thăng hoa.'),
    Q('Iod thăng hoa tạo hơi màu?', ['Xanh lục (nhầm với hơi clo)', 'Tím', 'Đỏ nâu (nhầm với hơi brom)', 'Vàng nhạt (nhầm với hơi flo)'], 1, 'Hơi iod màu tím.'),
    Q('Iod gặp hồ tinh bột tạo màu?', ['Vàng nhạt (nhầm với muối kali)', 'Không màu', 'Xanh đen', 'Đỏ máu (nhầm thuốc thử Fe³⁺)'], 2, 'Phản ứng nhận biết tinh bột.'),
    Q('Br₂ phản ứng với H₂ tạo?', ['HBr', 'BrH (viết sai thứ tự nguyên tố)', 'H₂Br₂ (sai hoá trị Br)', 'Không phản ứng'], 0, 'H₂ + Br₂ → 2HBr.'),
    Q('Tính oxy hoá Br₂ và I₂?', ['Br₂ > I₂', 'Bằng nhau', 'Cả hai không có tính oxy hoá', 'Br₂ < I₂'], 0, 'F > Cl > Br > I.'),
  ]),

  M(20, 'Oxygen và lưu huỳnh — Tính chất chung', [
    Q('Oxy và lưu huỳnh thuộc nhóm?', ['VIIA (nhóm halogen)', 'IIA (kim loại kiềm thổ)', 'IA (kim loại kiềm)', 'VIA'], 3, 'Nhóm VIA: O, S, Se, Te, Po.'),
    Q('Cấu hình lớp ngoài cùng nhóm VIA?', ['ns²np⁵', 'ns²np⁶', 'ns¹ (cấu hình kim loại kiềm)', 'ns²np⁴'], 3, '6 e ngoài → có xu hướng nhận 2 e.'),
    Q('O₂ ở điều kiện thường?', ['Khí vàng', 'Lỏng xanh nhạt (đó là O₂ lỏng)', 'Rắn tinh thể xanh nhạt', 'Khí không màu, không mùi'], 3, 'O₂ khí.'),
    Q('Vai trò O₂?', ['Hô hấp, đốt cháy nhiên liệu, oxy hoá', 'Chất nổ', 'Làm mát động cơ ô tô', 'Không có vai trò'], 0, 'O₂ duy trì sự sống và cháy.'),
    Q('Oxy có số oxy hoá thường gặp?', ['0', '+2', '+4', '−2'], 3, 'O thường −2 (trừ peroxide, OF₂).'),
    Q('S ở điều kiện thường?', ['Rắn xám', 'Khí xanh', 'Lỏng đỏ', 'Chất rắn màu vàng'], 3, 'S là chất rắn màu vàng.'),
  ]),

  M(21, 'Lưu huỳnh và hợp chất của lưu huỳnh', [
    Q('SO₂ là?', ['Lỏng đỏ nâu (nhầm với Br₂)', 'Rắn vàng (nhầm với S)', 'Khí vàng', 'Khí không màu, mùi hắc'], 3, 'Khí gây ô nhiễm.'),
    Q('SO₂ phản ứng với O₂ (xúc tác V₂O₅):', ['2SO₂ + O₂ → 2SO₃', 'SO₂ + 2O₂ → SO₄', 'SO₂ + O₂ → SO₃', 'SO₂ không phản ứng'], 0, '2:1:2.'),
    Q('H₂SO₄ là?', ['Base mạnh (nhầm với NaOH)', 'Acid yếu', 'Trung tính', 'Acid mạnh, hút ẩm mạnh'], 3, 'Acid sulfuric đặc cực mạnh.'),
    Q('H₂SO₄ đặc nóng có tính oxy hoá?', ['Yếu (chỉ loãng mới có tính acid thường)', 'Trung bình', 'Rất mạnh', 'Không có tính oxy hoá'], 2, 'Oxy hoá nhiều kim loại không hoạt động (Cu, Ag).'),
    Q('Ứng dụng H₂SO₄?', ['Phân bón, sản xuất hoá chất, pin', 'Đồ uống', 'Mỹ phẩm', 'Thực phẩm'], 0, 'Hoá chất công nghiệp số 1.'),
    Q('Phản ứng "mưa acid" liên quan đến?', ['SO₂, NOx hoà tan trong nước mưa tạo acid', 'CO₂ trong nước mưa (acid carbonic)', 'N₂ hoà tan (khí trơ với nước)', 'O₂ tạo hydrogen peroxide'], 0, 'SO₂ → H₂SO₃ → H₂SO₄ trong khí quyển.'),
  ]),

  M(22, 'Cân bằng hoá học — Phản ứng thuận nghịch', [
    Q('Phản ứng thuận nghịch là?', ['Dừng lại', 'Không phản ứng', 'Phản ứng xảy ra theo 2 chiều', 'Một chiều'], 2, 'Ký hiệu ⇌.'),
    Q('Trạng thái cân bằng hoá học?', ['Tốc độ nghịch > thuận', 'Phản ứng dừng', 'Tốc độ phản ứng thuận = tốc độ phản ứng nghịch', 'Tốc độ thuận > nghịch'], 2, 'Cân bằng động.'),
    Q('Hằng số cân bằng K phụ thuộc?', ['Tốc độ', 'Nồng độ ban đầu', 'Áp suất', 'Nhiệt độ'], 3, 'K phụ thuộc T (không phụ thuộc nồng độ).'),
    Q('Nguyên lý Le Chatelier?', ['Tự động', 'Hệ chuyển dịch để chống lại sự thay đổi', 'Phá vỡ cân bằng', 'Không phản ứng'], 1, 'Hệ phản ứng chống lại tác động bên ngoài.'),
    Q('Tăng nồng độ chất phản ứng → cân bằng chuyển?', ['Theo chiều thuận', 'Phá vỡ', 'Không đổi', 'Chiều nghịch'], 0, 'Chống lại sự tăng → giảm bằng cách tiêu thụ.'),
    Q('Tăng nhiệt độ trong phản ứng toả nhiệt → cân bằng?', ['Chiều thuận', 'Chuyển theo chiều nghịch', 'Phá vỡ', 'Không đổi'], 1, 'Hấp thụ nhiệt để giảm nhiệt độ.'),
  ]),

  M(23, 'Cân bằng phương trình hoá học và tính toán', [
    Q('Định luật bảo toàn khối lượng (Lomonosov-Lavoisier)?', ['Không bảo toàn', 'Khối lượng tăng', 'Tổng khối lượng chất tham gia = tổng khối lượng sản phẩm', 'Khối lượng giảm'], 2, 'Cơ sở cân bằng phương trình.'),
    Q('Số mol n = ?', ['m · M (nhân hai đại lượng)', 'm + M (cộng hai đại lượng)', 'M/m (đảo ngược tử mẫu)', 'm/M'], 3, 'n = khối lượng/khối lượng mol.'),
    Q('1 mol chất chứa?', ['10⁶ hạt', '10²³ hạt', '10²² hạt', '6,022·10²³ hạt (số Avogadro)'], 3, 'Số Avogadro N_A.'),
    Q('Thể tích mol khí ở đktc (0°C, 1 atm)?', ['22,4 L', '24 L', '1 L', '100 L'], 0, '1 mol khí lý tưởng ở đktc = 22,4 L.'),
    Q('Nồng độ mol C_M = ?', ['n + V (cộng mol và thể tích)', 'm/V (đó là khối lượng riêng)', 'n · V (nhân mol và thể tích)', 'n/V (mol/L)'], 3, 'Số mol trên 1 lít dung dịch.'),
    Q('Nồng độ phần trăm C% = ?', ['(m_ct/V)·100%', '(n/V)·100%', '(m_ct/m_dd)·100%', 'm · V (tích khối lượng và thể tích)'], 2, 'Khối lượng chất tan / khối lượng dung dịch.'),
  ]),

  M(24, 'Ôn tập Cấu tạo nguyên tử', [
    Q('Số electron tối đa của lớp 2 (n=2)?', ['32', '2', '18', '8'], 3, '2n² = 8.'),
    Q('Cấu hình electron của Na (Z=11)?', ['1s²2s²2p⁶3s²', '1s²2s²2p⁵', '1s²2s²2p⁶', '1s²2s²2p⁶3s¹'], 3, 'Na: Z=11.'),
    Q('Cấu hình electron của Cl (Z=17)?', ['1s²2s²2p⁶3s²3p⁵', '1s²2s²2p⁶3s²3p⁶', '1s²2s²2p⁵', '1s²2s²2p⁶3s²3p⁴'], 0, 'Cl: 17 e.'),
    Q('Nguyên tố có cấu hình 1s²2s²2p⁶3s²3p⁶ là?', ['Neon (Z=10, dừng ở 2p⁶)', 'Argon (Z=18)', 'Krypton', 'Helium'], 1, 'Ar: 18 e.'),
    Q('Nguyên tố cùng nhóm với Na?', ['F (nhóm VIIA — halogen)', 'Cl (nhóm VIIA — halogen)', 'He (nhóm VIIIA — khí hiếm)', 'Li, K (kim loại kiềm)'], 3, 'Nhóm IA.'),
    Q('Số neutron của ⁰¹⁶O?', ['16', '8', '0', '24'], 1, 'N = A − Z = 16 − 8 = 8.'),
  ]),

  M(25, 'Ôn tập Bảng tuần hoàn và Liên kết', [
    Q('Halogen mạnh nhất?', ['F', 'I (halogen yếu nhất nhóm)', 'Br (halogen lỏng đỏ nâu)', 'Cl (halogen khí vàng lục)'], 0, 'F có độ âm điện cao nhất.'),
    Q('Kim loại kiềm thổ thuộc nhóm?', ['VIIA (halogen)', 'IIA', 'VIIIA (khí hiếm)', 'IA (kim loại kiềm)'], 1, 'Mg, Ca, Sr, Ba.'),
    Q('Liên kết trong NaCl?', ['Kim loại', 'Cộng hoá trị', 'Ion', 'Liên kết hydro giữa Na và Cl'], 2, 'Na nhường e cho Cl.'),
    Q('Liên kết trong O₂?', ['Kim loại', 'Cộng hoá trị có cực', 'Ion (nhầm với hợp chất kim loại–phi kim)', 'Cộng hoá trị không cực'], 3, '2 nguyên tử O cùng độ âm điện.'),
    Q('Liên kết trong H₂O?', ['Cộng hoá trị có cực', 'Kim loại', 'Cộng hoá trị không cực', 'Ion (nhầm vì O kéo e mạnh)'], 0, 'O > H về độ âm điện.'),
    Q('Trong chu kì 3, nguyên tố có tính kim loại mạnh nhất?', ['Mg (kim loại kiềm thổ)', 'Cl (phi kim mạnh nhất chu kì)', 'Al (kim loại nhóm IIIA)', 'Na'], 3, 'Bên trái nhất.'),
  ]),

  M(26, 'Ôn tập Phản ứng oxy hoá - khử', [
    Q('Số oxy hoá của Mn trong KMnO₄?', ['+7', '+4', '0', '+2'], 0, 'K = +1, O = −2, MnO₄⁻: Mn + 4·(−2) = −1 → Mn = +7.'),
    Q('Số oxy hoá của Cr trong K₂Cr₂O₇?', ['+6', '+7', '0', '+3'], 0, '2K + 2Cr + 7O = 0 → 2 + 2Cr − 14 = 0 → Cr = +6.'),
    Q('Phản ứng Fe + 2HCl → FeCl₂ + H₂. Fe là?', ['Xúc tác', 'Chất oxy hoá', 'Chất khử', 'Trung tính'], 2, 'Fe⁰ → Fe²⁺ + 2e.'),
    Q('Trong Cu + 4HNO₃(đặc) → Cu(NO₃)₂ + 2NO₂ + 2H₂O, chất oxy hoá là?', ['HNO₃', 'Cu(NO₃)₂', 'Cu (nhầm vì Cu bị oxy hoá)', 'H₂O (sản phẩm trung tính)'], 0, 'N⁺⁵ → N⁺⁴ (NO₂).'),
    Q('Số electron trong cân bằng oxy hoá - khử phải?', ['Tăng thêm', 'Mất đi', 'Bằng 0', 'Bảo toàn'], 3, 'e nhường = e nhận.'),
    Q('Nguyên tắc cân bằng oxy hoá khử?', ['Bảo toàn electron + bảo toàn nguyên tử + điện tích', 'Chỉ bảo toàn electron', 'Không cần bảo toàn', 'Chỉ bảo toàn khối lượng'], 0, 'Đủ 3 yếu tố.'),
  ]),

  M(27, 'Ôn tập Năng lượng và Tốc độ', [
    Q('Phản ứng toả nhiệt: ΔH?', ['< 0', '> 0 (nhầm với thu nhiệt)', '= 0 (nhầm với đơn chất chuẩn)', 'Không xác định'], 0, 'Toả nhiệt → giảm enthalpy.'),
    Q('Ví dụ phản ứng toả nhiệt?', ['Điện phân', 'Tan đá', 'Quang hợp', 'Đốt cháy'], 3, 'Cháy toả nhiệt mạnh.'),
    Q('Chất xúc tác có tác dụng?', ['Làm chậm', 'Tăng tốc độ phản ứng mà không bị tiêu hao', 'Tham gia thay đổi', 'Triệt tiêu'], 1, 'Hạ năng lượng hoạt hoá.'),
    Q('Quy tắc Van\'t Hoff về nhiệt độ?', ['Nhiệt độ tăng 10°C, tốc độ tăng 2-4 lần', 'Không liên quan', 'Tăng 10°C, tốc độ tăng 10 lần', 'Nhiệt độ tăng, tốc độ giảm'], 0, 'Quy tắc kinh nghiệm.'),
    Q('Định luật Hess dùng để?', ['Đo nhiệt độ', 'Đo áp suất', 'Đo thời gian', 'Tính ΔH gián tiếp qua chu trình'], 3, 'ΔH chỉ phụ thuộc trạng thái.'),
    Q('Năng lượng hoạt hoá E_a là?', ['Năng lượng phản ứng', 'Nhiệt độ sôi', 'Năng lượng liên kết', 'Năng lượng tối thiểu để phản ứng xảy ra'], 3, 'Rào cản năng lượng.'),
  ]),

  M(28, 'Ôn tập Halogen và lưu huỳnh', [
    Q('Acid mạnh nhất trong các acid hydrohalic?', ['HI', 'HBr (yếu hơn HI một bậc)', 'HF (acid yếu nhất do liên kết bền)', 'HCl (acid mạnh nhưng yếu hơn HI)'], 0, 'HF > HCl > HBr > HI về độ phân ly thì ngược: HI mạnh nhất.'),
    Q('Khí Cl₂ phản ứng với Fe tạo?', ['FeCl₂ (nhầm hoá trị II của Fe)', 'FeCl₃', 'Fe₂Cl₃', 'FeCl (sai hoá trị cả Fe và Cl)'], 1, '2Fe + 3Cl₂ → 2FeCl₃ (Cl₂ oxy hoá mạnh).'),
    Q('SO₂ là khí?', ['Không mùi', 'Mùi thơm', 'Mùi hắc, không màu', 'Vàng lục'], 2, 'SO₂ gây mưa acid.'),
    Q('H₂SO₄ đặc nóng phản ứng với Cu tạo?', ['Cu(SO₄)₂', 'Không phản ứng', 'CuSO₄ + SO₂ + H₂O', 'CuSO₄ + H₂'], 2, 'Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O.'),
    Q('Iod gặp tinh bột tạo?', ['Vàng nhạt (nhầm hơi iod)', 'Không màu', 'Đỏ nâu (nhầm với brom)', 'Màu xanh đen'], 3, 'Phản ứng nhận biết tinh bột.'),
    Q('Brom ở điều kiện thường?', ['Khí không màu', 'Lỏng đỏ nâu', 'Khí vàng', 'Rắn tím'], 1, 'Br₂ chất lỏng.'),
  ]),

  M(29, 'Ôn tập Cân bằng hoá học và tính toán', [
    Q('K (hằng số cân bằng) phụ thuộc vào?', ['Nồng độ ban đầu', 'Áp suất', 'Thời gian', 'Nhiệt độ'], 3, 'K(T).'),
    Q('Nguyên lý Le Chatelier áp dụng khi?', ['Phá vỡ cân bằng', 'Không thay đổi', 'Tự nhiên', 'Thay đổi yếu tố bên ngoài (nồng độ, p, T)'], 3, 'Hệ chuyển dịch theo chiều giảm tác động.'),
    Q('1 mol H₂O ở đktc chiếm thể tích?', ['24 L', '18 mL (ở thể lỏng)', '1 L', '22,4 L'], 1, 'Nước lỏng có khối lượng riêng ~ 1 g/mL.'),
    Q('Số phân tử trong 1 mol O₂?', ['10²²', '1', '10²³', '6,022·10²³'], 3, 'Số Avogadro.'),
    Q('22,4 L khí O₂ ở đktc nặng?', ['22,4 g', '64 g', '16 g', '32 g'], 3, 'M(O₂) = 32; 1 mol = 22,4 L.'),
    Q('Dung dịch 1 M nghĩa là?', ['1 mol chất tan / 1 L dung dịch', '1 g/mL', '1 mol/g', '1 g/L'], 0, 'Nồng độ mol C_M.'),
  ]),

  M(30, 'Tính chất nguyên tố theo nhóm A — Tổng hợp', [
    Q('Nhóm IA (kim loại kiềm) có?', ['Bền vững', '1 e ngoài, dễ nhường e', '7 e ngoài', 'Khí trơ'], 1, 'Cấu hình ns¹.'),
    Q('Nhóm IIA (kiềm thổ) có?', ['6 e', '2 e ngoài, dễ nhường 2e', '8 e', '1 e'], 1, 'Cấu hình ns².'),
    Q('Nhóm VIIA (halogen) có?', ['7 e ngoài, dễ nhận 1e', '1 e', '3 e', '8 e'], 0, 'Cấu hình ns²np⁵.'),
    Q('Nhóm VIIIA (khí hiếm) có?', ['1 e', '3 e', '8 e ngoài (trừ He có 2), bền vững', '7 e'], 2, 'Cấu hình bền vững → khó phản ứng.'),
    Q('Trong chu kì, độ âm điện?', ['Tăng từ trái sang phải', 'Giảm (nhầm chiều nhóm A)', 'Không đổi', 'Dao động'], 0, 'Phi kim mạnh hơn → ĐAĐ tăng.'),
    Q('Khí hiếm nào bị tìm thấy có thể tạo hợp chất?', ['He (cấu hình rất bền 1s²)', 'Ne (cấu hình bền 2p⁶)', 'Ar (cấu hình bền 3p⁶)', 'Xe (XeF₄, XeO₃,…)'], 3, 'Xenon có thể tạo một số hợp chất.'),
  ]),

  M(31, 'Ôn tập Liên kết hoá học tổng hợp', [
    Q('Liên kết ion mạnh hơn liên kết hydro vì?', ['Có 2 e', 'Không có lý do', 'Ngắn hơn', 'Lực hút điện tích lớn hơn'], 3, 'Lực Coulomb giữa ion mạnh.'),
    Q('Liên kết cộng hoá trị có cực có?', ['Chuyển e hoàn toàn', 'Cặp e đều', 'Cặp e dùng chung lệch về phía nguyên tử có ĐAĐ lớn hơn', 'Không có cặp e'], 2, 'Phân cực một phần.'),
    Q('Trong CH₄, các liên kết C-H là?', ['Ion (nhầm vì có nhiều nguyên tử H)', 'Cộng hoá trị không cực (ĐAĐ chênh nhỏ)', 'Kim loại', 'Hydro (nhầm tên gọi nguyên tố)'], 1, 'C và H có ĐAĐ gần nhau.'),
    Q('Liên kết hydro có vai trò trong?', ['Quyết định nhiệt độ sôi cao của H₂O, cấu trúc DNA', 'Chỉ khí', 'Chỉ ảnh hưởng đến màu sắc chất', 'Chỉ rắn'], 0, 'Vai trò sinh học và lý hoá quan trọng.'),
    Q('Liên kết kim loại trong Cu cho phép?', ['Tan trong nước', 'Cách điện', 'Dẫn điện và dẫn nhiệt tốt', 'Không dẫn'], 2, 'Biển electron tự do.'),
    Q('Liên kết cho-nhận khác cộng hoá trị thường ở?', ['Không có e', 'Trao đổi e', 'Có 2 cặp e', 'Cặp e chỉ do một nguyên tử cung cấp'], 3, 'Một bên cho, một bên nhận.'),
  ]),

  M(32, 'Bài tập tổng hợp 1', [
    Q('Tính phân tử khối của H₂SO₄?', ['64 u', '98 u', '100 u', '96 u'], 1, '2·1 + 32 + 4·16 = 98.'),
    Q('Số mol của 9,8 g H₂SO₄?', ['1 mol', '0,1 mol', '0,01 mol', '0,5 mol'], 1, '9,8/98 = 0,1.'),
    Q('Thể tích 0,1 mol H₂ ở đktc?', ['0,1 L', '2,24 L', '22,4 L', '1 L'], 1, '0,1·22,4 = 2,24.'),
    Q('Số phân tử trong 0,5 mol H₂O?', ['10²²', '10²³', '3,011·10²³', '6,022·10²³'], 2, '0,5·N_A = 0,5·6,022·10²³.'),
    Q('Cân bằng: __Al + __HCl → __AlCl₃ + __H₂', ['2; 6; 2; 3', 'Al + 2HCl', '1; 1; 1; 1', '1; 3; 1; 1'], 0, '2Al + 6HCl → 2AlCl₃ + 3H₂.'),
    Q('Số oxy hoá của S trong SO₃?', ['+4', '+6', '+2', '0'], 1, 'S + 3·(−2) = 0 → S = +6.'),
  ]),

  M(33, 'Bài tập tổng hợp 2', [
    Q('Hoà tan 5,85 g NaCl vào nước được 250 mL dung dịch. C_M = ?', ['0,4 M', '0,2 M', '1 M', '0,1 M'], 0, 'n = 5,85/58,5 = 0,1; C = 0,1/0,25 = 0,4.'),
    Q('Phản ứng Mg + 2HCl → MgCl₂ + H₂. 2,4 g Mg phản ứng vừa đủ tạo bao nhiêu lít H₂ ở đktc?', ['3,36 L', '1,12 L', '22,4 L', '2,24 L'], 3, 'n Mg = 2,4/24 = 0,1 → n H₂ = 0,1 → V = 2,24 L.'),
    Q('Đốt 4,8 g Mg trong O₂ tạo bao nhiêu g MgO?', ['5,6 g', '4,8 g', '8 g', '10 g'], 2, '2Mg + O₂ → 2MgO; n Mg = 0,2 → n MgO = 0,2; m = 0,2·40 = 8.'),
    Q('Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Loại phản ứng?', ['Phân huỷ', 'Tự oxy hoá - tự khử', 'Trao đổi', 'Hoá hợp'], 1, 'Cl₂ vừa là chất oxy hoá vừa là chất khử.'),
    Q('Dung dịch HCl 0,1 M có pH = ?', ['7', '14', '1', '0'], 2, 'pH = −log[H⁺] = 1.'),
    Q('SO₂ tan trong nước tạo?', ['H₂SO₄ (đó là sản phẩm của SO₃)', 'Không phản ứng', 'H₂SO₃ (acid yếu)', 'H₂S (khí mùi trứng thối)'], 2, 'SO₂ + H₂O ⇌ H₂SO₃.'),
  ]),

  M(34, 'Đề tổng hợp 1 — Cuối năm', [
    Q('Bảng tuần hoàn được sắp xếp theo?', ['Số hiệu nguyên tử Z tăng dần', 'Khối lượng', 'Theo bảng chữ cái tên nguyên tố', 'Số neutron'], 0, 'Theo Z.'),
    Q('Liên kết trong NaCl là?', ['Ion', 'Kim loại', 'Cộng hoá trị', 'Liên kết hydro giữa Na và Cl'], 0, 'Kim loại điển hình + phi kim điển hình.'),
    Q('Chất khử là chất?', ['Không e', 'Trung tính', 'Nhận electron', 'Nhường electron'], 3, 'Chất khử bị oxy hoá.'),
    Q('Halogen có tính oxy hoá mạnh nhất?', ['Br (halogen lỏng, oxy hoá yếu hơn)', 'I (halogen yếu nhất nhóm)', 'Cl (mạnh nhưng kém F)', 'F'], 3, 'F mạnh nhất.'),
    Q('Định luật Hess phát biểu?', ['Bằng 0', 'ΔH chỉ phụ thuộc trạng thái đầu và cuối', 'Phụ thuộc đường đi', 'Tuỳ thời gian'], 1, 'Hess.'),
    Q('Yếu tố nào KHÔNG ảnh hưởng đến tốc độ phản ứng?', ['Xúc tác', 'Tên chất', 'Nồng độ', 'Nhiệt độ'], 1, 'Tên không ảnh hưởng.'),
  ]),

  M(35, 'Đề tổng hợp 2 — Cuối năm', [
    Q('Nguyên tử C có Z = ?', ['12', '6', '7', '5'], 1, 'C có 6 proton.'),
    Q('Cấu hình electron của O (Z = 8)?', ['1s²2s²2p⁵', '1s²2s²2p³', '1s²2s²2p⁶', '1s²2s²2p⁴'], 3, '8 e.'),
    Q('Liên kết trong CO₂ là?', ['Cộng hoá trị có cực', 'Kim loại', 'Liên kết hydro giữa C và O', 'Ion (nhầm vì O kéo e mạnh)'], 0, 'C và O khác ĐAĐ.'),
    Q('Phản ứng nào toả nhiệt?', ['Đốt cháy than (C + O₂ → CO₂)', 'Hoà tan KNO₃', 'Điện phân nước', 'Quang hợp'], 0, 'Cháy toả nhiệt.'),
    Q('Tốc độ phản ứng tăng khi?', ['Tăng nhiệt độ', 'Giảm nồng độ', 'Loại xúc tác', 'Giảm nhiệt độ'], 0, 'Quy tắc Van\'t Hoff.'),
    Q('Halogen ở thể rắn?', ['Br (lỏng đỏ nâu)', 'I', 'F (khí vàng nhạt)', 'Cl (khí vàng lục)'], 1, 'I là rắn (tinh thể tím đen).'),
  ]),
];

export const H10HOA_SCENARIOS = indexBy(H10HOA_WEEKS);
