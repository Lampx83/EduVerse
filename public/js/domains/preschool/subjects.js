// ============================================================
// Trường Mầm non — Subject metadata
// ============================================================
// Theo TT 51/2020/TT-BGDĐT sửa CT GDMN, mầm non gồm 5 LĨNH VỰC PHÁT TRIỂN:
//   1. Phát triển thể chất         → the-chat
//   2. Phát triển nhận thức        → nhan-thuc (gồm Làm quen Toán + KPKH/XH)
//   3. Phát triển ngôn ngữ         → ngon-ngu  (gồm Văn học + LQ chữ viết cho Lá)
//   4. Phát triển tình cảm - xã hội → tinh-cam-xh
//   5. Phát triển thẩm mỹ          → tham-my   (gồm Âm nhạc + Tạo hình)
// Các môn con cũ (lam-quen-toan, van-hoc, am-nhac, tao-hinh, van-dong, nhan-biet)
// giữ làm alias để N1/N2/N3 (đã có 36 tuần scenarios) không vỡ.
// ============================================================
/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  // 5 lĩnh vực chuẩn TT 51/2020
  'the-chat':       { label: '1. Phát triển thể chất',           icon: '🤸', color: '#f59e0b' },
  'nhan-thuc':      { label: '2. Phát triển nhận thức',          icon: '🧠', color: '#0ea5e9' },
  'ngon-ngu':       { label: '3. Phát triển ngôn ngữ',           icon: '🗣️', color: '#ef4444' },
  'tinh-cam-xh':    { label: '4. Phát triển TC – Kỹ năng XH',    icon: '🤝', color: '#22c55e' },
  'tham-my':        { label: '5. Phát triển thẩm mỹ',            icon: '🎨', color: '#f472b6' },

  // Aliases cho module N1/N2/N3 hiện có (giữ backward-compat)
  'lam-quen-toan':  { label: 'Làm quen với Toán',                icon: '🔢', color: '#0ea5e9' },
  'nhan-biet':      { label: 'Nhận biết',                        icon: '👀', color: '#22c55e' },
  'van-hoc':        { label: 'Văn học – Kể chuyện',              icon: '📚', color: '#ef4444' },
  'am-nhac':        { label: 'Âm nhạc',                          icon: '🎵', color: '#a855f7' },
  'tao-hinh':       { label: 'Tạo hình',                         icon: '🎨', color: '#f472b6' },
  'van-dong':       { label: 'Vận động',                         icon: '🤸', color: '#f59e0b' },
};
export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '🧸', color: '#94a3b8' };
}
