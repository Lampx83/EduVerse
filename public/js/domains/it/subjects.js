// ============================================================
// IT domain — Subject metadata
// ============================================================

/** @type {Record<string, { label:string, icon:string, color:string }>} */
export const SUBJECTS = {
  // Năm 1 — Đại cương
  'lap-trinh-co-ban':  { label: 'Lập trình cơ bản',   icon: '💻', color: '#0ea5e9' },
  'toan-roi-rac':      { label: 'Toán rời rạc',       icon: '🔢', color: '#a78bfa' },
  'kien-truc-may-tinh': { label: 'Kiến trúc máy tính', icon: '🖥️', color: '#64748b' },
  'tieng-anh-it':      { label: 'Tiếng Anh CNTT',     icon: '🇬🇧', color: '#60a5fa' },
  'he-dieu-hanh':      { label: 'Hệ điều hành',       icon: '🐧', color: '#737373' },

  // Năm 2 — Cơ sở ngành
  'cau-truc-du-lieu':  { label: 'Cấu trúc dữ liệu',   icon: '🌳', color: '#22c55e' },
  'co-so-du-lieu':     { label: 'Cơ sở dữ liệu',      icon: '🗄️', color: '#0284c7' },
  'mang-may-tinh':     { label: 'Mạng máy tính',      icon: '🌐', color: '#06b6d4' },
  'oop':               { label: 'Lập trình hướng đối tượng', icon: '🧩', color: '#8b5cf6' },
  'thiet-ke-web':      { label: 'Thiết kế Web',       icon: '🎨', color: '#ec4899' },

  // Năm 3 — Chuyên ngành
  'ky-thuat-pm':       { label: 'Kỹ thuật phần mềm',   icon: '⚙️', color: '#f97316' },
  'phan-tich-tk':      { label: 'Phân tích – Thiết kế hệ thống', icon: '📐', color: '#ea580c' },
  'tri-tue-nhan-tao':  { label: 'Trí tuệ nhân tạo',   icon: '🤖', color: '#a855f7' },
  'machine-learning':  { label: 'Machine Learning',   icon: '🧠', color: '#7c3aed' },
  'mobile-dev':        { label: 'Mobile dev (Android/iOS)', icon: '📱', color: '#14b8a6' },
  'devops':            { label: 'DevOps & Cloud',     icon: '☁️', color: '#0ea5e9' },
  'web-fullstack':     { label: 'Web fullstack',      icon: '🌐', color: '#ec4899' },
  'an-toan-thong-tin': { label: 'An toàn thông tin',   icon: '🔒', color: '#ef4444' },

  // Năm 4 — Tích hợp + Khoá luận
  'kien-truc-phan-mem': { label: 'Kiến trúc phần mềm', icon: '🏛️', color: '#fbbf24' },
  'dam-may':            { label: 'Điện toán đám mây',  icon: '☁️', color: '#0284c7' },
  'block-chain':        { label: 'Blockchain & Web3',  icon: '⛓️', color: '#16a34a' },
  'data-science':       { label: 'Khoa học dữ liệu',   icon: '📊', color: '#0891b2' },
  'khoa-luan-it':       { label: 'Khoá luận CNTT',     icon: '✏️', color: '#fbbf24' },
  'data-research':      { label: 'Nghiên cứu CNTT',    icon: '📑', color: '#8b5cf6' },

  // Practice / Career / Game
  'startup-lab':       { label: 'Startup Lab',         icon: '🚀', color: '#dc2626' },
  'hackathon':         { label: 'Hackathon',          icon: '⚡', color: '#fbbf24' },
  'ctf-lab':           { label: 'CTF Lab',            icon: '🚩', color: '#dc2626' },
  'open-source':       { label: 'Open Source Lab',     icon: '🐙', color: '#737373' },
  'career':            { label: 'Sự nghiệp',          icon: '💼', color: '#8b5cf6' },
  'game':              { label: 'Game',               icon: '🎮', color: '#f97316' },
};

export function getSubject(id) {
  return SUBJECTS[id] || { label: id, icon: '📘', color: '#94a3b8' };
}
