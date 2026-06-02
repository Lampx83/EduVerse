// ============================================================
// Lớp 10 — Barrel lý thuyết tuần (THPT năm 1)
// ============================================================
// Mỗi file lessons export 1 map { weekId → lesson } khớp id quiz.
// Dùng try/catch dynamic import — không crash nếu 1 môn chưa có.
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_ly = {}, m_hoa = {};

try { ({ H10TOAN_LESSONS: m_toan } = await import('./toan.js')); } catch {}
try { ({ H10NV_LESSONS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ H10TA_LESSONS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ H10LY_LESSONS:   m_ly   } = await import('./vat-ly.js')); } catch {}
try { ({ H10HOA_LESSONS:  m_hoa  } = await import('./hoa-hoc.js')); } catch {}

export const LOP10_LESSONS = {
  ...(m_toan || {}), ...(m_nv || {}), ...(m_ta || {}), ...(m_ly || {}), ...(m_hoa || {}),
};
