// ============================================================
// Lớp 7 — Barrel lý thuyết tuần (mở rộng khi sinh xong)
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_khtn = {}, m_lsdl = {},
    m_gdcd = {}, m_cn = {}, m_th = {}, m_gdtc = {}, m_nt = {},
    m_hdtn = {}, m_gddp = {};

try { ({ S7TOAN_LESSONS: m_toan } = await import('./toan.js')); } catch {}
try { ({ S7NV_LESSONS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ S7TA_LESSONS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ S7KHTN_LESSONS: m_khtn } = await import('./khtn.js')); } catch {}
try { ({ S7LSDL_LESSONS: m_lsdl } = await import('./lich-su-dia.js')); } catch {}
try { ({ S7GDCD_LESSONS: m_gdcd } = await import('./gdcd.js')); } catch {}
try { ({ S7CN_LESSONS:   m_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ S7TIN_LESSONS:  m_th   } = await import('./tin-hoc.js')); } catch {}
try { ({ S7GDTC_LESSONS: m_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ S7NT_LESSONS:   m_nt   } = await import('./nghe-thuat.js')); } catch {}
try { ({ S7HDTN_LESSONS: m_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ S7GDDP_LESSONS: m_gddp } = await import('./gd-dia-phuong.js')); } catch {}

export const LOP7_LESSONS = {
  ...(m_toan || {}), ...(m_nv || {}), ...(m_ta || {}), ...(m_khtn || {}),
  ...(m_lsdl || {}), ...(m_gdcd || {}), ...(m_cn || {}), ...(m_th || {}),
  ...(m_gdtc || {}), ...(m_nt || {}), ...(m_hdtn || {}), ...(m_gddp || {}),
};
