// Lớp 12 (THPT) — năm thi tốt nghiệp
let m_toan = {}, m_nv = {}, m_ta = {}, m_ly = {}, m_hoa = {};
try { ({ H12TOAN_SCENARIOS: m_toan } = await import('./toan.js')); } catch {}
try { ({ H12NV_SCENARIOS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ H12TA_SCENARIOS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ H12LY_SCENARIOS:   m_ly   } = await import('./vat-ly.js')); } catch {}
try { ({ H12HOA_SCENARIOS:  m_hoa  } = await import('./hoa-hoc.js')); } catch {}
let LOP12_LESSONS = {};
try { ({ LOP12_LESSONS } = await import('./lessons/_index.js')); } catch {}
export const HIGHSCHOOL_LOP12_SCENARIOS = { ...m_toan, ...m_nv, ...m_ta, ...m_ly, ...m_hoa };
for (const [id, sc] of Object.entries(HIGHSCHOOL_LOP12_SCENARIOS)) {
  if (LOP12_LESSONS && LOP12_LESSONS[id]) sc.lesson = LOP12_LESSONS[id];
}
