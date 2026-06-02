// ============================================================
// Lớp 8 — Barrel lý thuyết tuần (dynamic + try/catch như lop9/lop10).
// Mỗi file lessons trả về map { weekId → lesson }, key trùng id quiz.
// File thiếu được skip để không vỡ build khi sinh nội dung từng đợt.
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_khtn = {}, m_lsdl = {};
let m_gdcd = {}, m_cn = {}, m_th = {}, m_gdtc = {}, m_nt = {}, m_hdtn = {}, m_gddp = {};

try { ({ S8TOAN_LESSONS: m_toan } = await import('./toan.js')); } catch {}
try { ({ S8NV_LESSONS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ S8TA_LESSONS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ S8KHTN_LESSONS: m_khtn } = await import('./khtn.js')); } catch {}
try { ({ S8LSDL_LESSONS: m_lsdl } = await import('./lich-su-dia.js')); } catch {}
try { ({ S8GDCD_LESSONS: m_gdcd } = await import('./gdcd.js')); } catch {}
try { ({ S8CN_LESSONS:   m_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ S8TIN_LESSONS:  m_th   } = await import('./tin-hoc.js')); } catch {}
try { ({ S8GDTC_LESSONS: m_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ S8NT_LESSONS:   m_nt   } = await import('./nghe-thuat.js')); } catch {}
try { ({ S8HDTN_LESSONS: m_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ S8GDDP_LESSONS: m_gddp } = await import('./gd-dia-phuong.js')); } catch {}

export const LOP8_LESSONS = {
  ...(m_toan || {}), ...(m_nv || {}), ...(m_ta || {}), ...(m_khtn || {}), ...(m_lsdl || {}),
  ...(m_gdcd || {}), ...(m_cn || {}), ...(m_th || {}), ...(m_gdtc || {}), ...(m_nt || {}),
  ...(m_hdtn || {}), ...(m_gddp || {}),
};
