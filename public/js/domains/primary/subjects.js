// ============================================================
// Trường Tiểu học — Subject metadata
// ============================================================
/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  'toan':        { label: 'Toán',                 icon: '➗', color: '#0ea5e9' },
  'tieng-viet':  { label: 'Tiếng Việt',           icon: '📖', color: '#ef4444' },
  'tnxh':        { label: 'Tự nhiên & Xã hội',    icon: '🌍', color: '#22c55e' },
  'khoa-hoc':    { label: 'Khoa học',             icon: '🔬', color: '#14b8a6' },
  'lich-su-dia': { label: 'Lịch sử & Địa lí',     icon: '🗺️', color: '#f59e0b' },
  'tieng-anh':   { label: 'Tiếng Anh',            icon: '🇬🇧', color: '#60a5fa' },
  'tin-hoc':     { label: 'Tin học',              icon: '💻', color: '#8b5cf6' },
  'cong-nghe':   { label: 'Công nghệ',            icon: '🔧', color: '#0d9488' },
  'dao-duc':     { label: 'Đạo đức',              icon: '🤝', color: '#ec4899' },
  'my-thuat':    { label: 'Mĩ thuật',             icon: '🎨', color: '#f472b6' },
  'am-nhac':     { label: 'Âm nhạc',              icon: '🎵', color: '#a855f7' },
  'gdtc':        { label: 'Giáo dục thể chất',    icon: '⚽', color: '#16a34a' },
  'htn':         { label: 'Hoạt động trải nghiệm', icon: '🎪', color: '#fb923c' },
};
export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '📘', color: '#94a3b8' };
}
