// ============================================================
// Lớp 9 — Barrel lý thuyết tuần.
// Mỗi file lessons trả về 35 keys khớp id quiz.
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_khtn = {}, m_lsdl = {};

try { ({ S9TOAN_LESSONS: m_toan } = await import('./toan.js')); } catch {}
try { ({ S9NV_LESSONS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ S9TA_LESSONS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ S9KHTN_LESSONS: m_khtn } = await import('./khtn.js')); } catch {}
try { ({ S9LSDL_LESSONS: m_lsdl } = await import('./lich-su-dia.js')); } catch {}

export const LOP9_LESSONS = {
  ...(m_toan || {}),
  ...(m_nv   || {}),
  ...(m_ta   || {}),
  ...(m_khtn || {}),
  ...(m_lsdl || {}),
};
