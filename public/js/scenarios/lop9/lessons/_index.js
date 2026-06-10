// ============================================================
// Lớp 9 — Barrel lý thuyết tuần (dynamic + try/catch như lop7/lop8).
// Mỗi file lessons trả về map { weekId → lesson }, key trùng id quiz.
// File thiếu được skip để không vỡ build khi sinh nội dung từng đợt.
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_khtn = {}, m_lsdl = {};
let m_gdcd = {}, m_cn = {}, m_th = {}, m_gdtc = {}, m_nt = {}, m_hdtn = {}, m_gddp = {};

try { ({ S9TOAN_LESSONS: m_toan } = await import('./toan.js')); } catch {}
try { ({ S9NV_LESSONS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ S9TA_LESSONS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ S9KHTN_LESSONS: m_khtn } = await import('./khtn.js')); } catch {}
try { ({ S9LSDL_LESSONS: m_lsdl } = await import('./lich-su-dia.js')); } catch {}
try { ({ S9GDCD_LESSONS: m_gdcd } = await import('./gdcd.js')); } catch {}
try { ({ S9CN_LESSONS:   m_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ S9TIN_LESSONS:  m_th   } = await import('./tin-hoc.js')); } catch {}
try { ({ S9GDTC_LESSONS: m_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ S9NT_LESSONS:   m_nt   } = await import('./nghe-thuat.js')); } catch {}
try { ({ S9HDTN_LESSONS: m_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ S9GDDP_LESSONS: m_gddp } = await import('./gd-dia-phuong.js')); } catch {}

export const LOP9_LESSONS = {
  ...(m_toan || {}), ...(m_nv || {}), ...(m_ta || {}), ...(m_khtn || {}), ...(m_lsdl || {}),
  ...(m_gdcd || {}), ...(m_cn || {}), ...(m_th || {}), ...(m_gdtc || {}), ...(m_nt || {}),
  ...(m_hdtn || {}), ...(m_gddp || {}),
};
