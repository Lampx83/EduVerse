// ============================================================
// Trường Mầm non — Subject metadata
// ============================================================
/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  'lam-quen-toan': { label: 'Làm quen với Toán', icon: '🔢', color: '#0ea5e9' },
  'nhan-biet':     { label: 'Nhận biết',         icon: '👀', color: '#22c55e' },
  'van-hoc':       { label: 'Văn học – Kể chuyện', icon: '📚', color: '#ef4444' },
  'am-nhac':       { label: 'Âm nhạc',            icon: '🎵', color: '#a855f7' },
  'tao-hinh':      { label: 'Tạo hình',           icon: '🎨', color: '#f472b6' },
  'van-dong':      { label: 'Vận động',           icon: '🤸', color: '#f59e0b' },
};
export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '🧸', color: '#94a3b8' };
}
