// ============================================================
// Trường THPT — Subject metadata (GDPT 2018, lớp 10–12)
// ============================================================
/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  'toan':      { label: 'Toán',                    icon: '📐', color: '#0ea5e9' },
  'ngu-van':   { label: 'Ngữ văn',                 icon: '📖', color: '#ef4444' },
  'tieng-anh': { label: 'Tiếng Anh',               icon: '🇬🇧', color: '#60a5fa' },
  'vat-li':    { label: 'Vật lí',                  icon: '🧲', color: '#6366f1' },
  'hoa-hoc':   { label: 'Hoá học',                 icon: '⚗️', color: '#14b8a6' },
  'sinh-hoc':  { label: 'Sinh học',                icon: '🧬', color: '#22c55e' },
  'lich-su':   { label: 'Lịch sử',                 icon: '🏛️', color: '#d97706' },
  'dia-li':    { label: 'Địa lí',                  icon: '🗺️', color: '#f59e0b' },
  'gdktpl':    { label: 'GD Kinh tế & Pháp luật',  icon: '⚖️', color: '#c084fc' },
  // Alias: modules.js đang dùng id 'gdcd' cho cùng môn GD Kinh tế & Pháp luật.
  // Giữ cả hai để khỏi vỡ UI; chuẩn hoá sang 'gdktpl' nên làm trong sprint sau.
  'gdcd':      { label: 'GD Kinh tế & Pháp luật',  icon: '⚖️', color: '#c084fc' },
  'tin-hoc':   { label: 'Tin học',                 icon: '💻', color: '#8b5cf6' },
  'cong-nghe': { label: 'Công nghệ',               icon: '⚙️', color: '#fb923c' },
  'gdqp':      { label: 'GD Quốc phòng - An ninh', icon: '🛡️', color: '#dc2626' },
  'htn':       { label: 'HĐ Trải nghiệm',          icon: '🎪', color: '#fbbf24' },
};
export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '📘', color: '#94a3b8' };
}
