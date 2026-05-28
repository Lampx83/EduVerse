// ============================================================
// Trường THCS — Subject metadata
// ============================================================
/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  'toan':        { label: 'Toán',                 icon: '📐', color: '#0ea5e9' },
  'ngu-van':     { label: 'Ngữ văn',              icon: '📖', color: '#ef4444' },
  'tieng-anh':   { label: 'Tiếng Anh',            icon: '🇬🇧', color: '#60a5fa' },
  'khtn':        { label: 'Khoa học tự nhiên',    icon: '🔬', color: '#14b8a6' },
  'lich-su-dia': { label: 'Lịch sử & Địa lí',     icon: '🗺️', color: '#f59e0b' },
  'gdcd':        { label: 'GD công dân',          icon: '⚖️', color: '#c084fc' },
  'tin-hoc':     { label: 'Tin học',              icon: '💻', color: '#8b5cf6' },
  'cong-nghe':   { label: 'Công nghệ',            icon: '⚙️', color: '#64748b' },
};
export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '📘', color: '#94a3b8' };
}
