// ============================================================
// Lớp 7 (THCS) — Barrel: 12 môn × 35 tuần. Dynamic + try/catch
// để chấp nhận môn còn thiếu (không crash khi sinh từng đợt).
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_khtn = {}, m_lsdl = {},
    m_gdcd = {}, m_cn = {}, m_th = {}, m_gdtc = {}, m_nt = {},
    m_hdtn = {}, m_gddp = {};

try { ({ S7TOAN_SCENARIOS: m_toan } = await import('./toan.js')); } catch {}
try { ({ S7NV_SCENARIOS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ S7TA_SCENARIOS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ S7KHTN_SCENARIOS: m_khtn } = await import('./khtn.js')); } catch {}
try { ({ S7LSDL_SCENARIOS: m_lsdl } = await import('./lich-su-dia.js')); } catch {}
try { ({ S7GDCD_SCENARIOS: m_gdcd } = await import('./gdcd.js')); } catch {}
try { ({ S7CN_SCENARIOS:   m_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ S7TIN_SCENARIOS:  m_th   } = await import('./tin-hoc.js')); } catch {}
try { ({ S7GDTC_SCENARIOS: m_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ S7NT_SCENARIOS:   m_nt   } = await import('./nghe-thuat.js')); } catch {}
try { ({ S7HDTN_SCENARIOS: m_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ S7GDDP_SCENARIOS: m_gddp } = await import('./gd-dia-phuong.js')); } catch {}

let LOP7_LESSONS = {};
try { ({ LOP7_LESSONS } = await import('./lessons/_index.js')); } catch {}

export const SECONDARY_LOP7_SCENARIOS = {
  ...m_toan, ...m_nv, ...m_ta, ...m_khtn, ...m_lsdl,
  ...m_gdcd, ...m_cn, ...m_th, ...m_gdtc, ...m_nt,
  ...m_hdtn, ...m_gddp,
};

for (const [id, sc] of Object.entries(SECONDARY_LOP7_SCENARIOS)) {
  if (LOP7_LESSONS && LOP7_LESSONS[id]) sc.lesson = LOP7_LESSONS[id];
}
