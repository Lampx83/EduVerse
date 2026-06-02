// Lớp 11 (THPT) barrel — try/catch dynamic
let m_toan = {}, m_nv = {}, m_ta = {}, m_ly = {}, m_hoa = {};
try { ({ H11TOAN_SCENARIOS: m_toan } = await import('./toan.js')); } catch {}
try { ({ H11NV_SCENARIOS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ H11TA_SCENARIOS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ H11LY_SCENARIOS:   m_ly   } = await import('./vat-ly.js')); } catch {}
try { ({ H11HOA_SCENARIOS:  m_hoa  } = await import('./hoa-hoc.js')); } catch {}
let LOP11_LESSONS = {};
try { ({ LOP11_LESSONS } = await import('./lessons/_index.js')); } catch {}
export const HIGHSCHOOL_LOP11_SCENARIOS = { ...m_toan, ...m_nv, ...m_ta, ...m_ly, ...m_hoa };
for (const [id, sc] of Object.entries(HIGHSCHOOL_LOP11_SCENARIOS)) {
  if (LOP11_LESSONS && LOP11_LESSONS[id]) sc.lesson = LOP11_LESSONS[id];
}
