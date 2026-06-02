// ============================================================
// Lớp 10 (THPT) — Barrel: bắt đầu 5 môn core, mở rộng dần.
// ============================================================
let m_toan = {}, m_nv = {}, m_ta = {}, m_ly = {}, m_hoa = {};

try { ({ H10TOAN_SCENARIOS: m_toan } = await import('./toan.js')); } catch {}
try { ({ H10NV_SCENARIOS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ H10TA_SCENARIOS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ H10LY_SCENARIOS:   m_ly   } = await import('./vat-ly.js')); } catch {}
try { ({ H10HOA_SCENARIOS:  m_hoa  } = await import('./hoa-hoc.js')); } catch {}

let LOP10_LESSONS = {};
try { ({ LOP10_LESSONS } = await import('./lessons/_index.js')); } catch {}

export const HIGHSCHOOL_LOP10_SCENARIOS = {
  ...m_toan, ...m_nv, ...m_ta, ...m_ly, ...m_hoa,
};

for (const [id, sc] of Object.entries(HIGHSCHOOL_LOP10_SCENARIOS)) {
  if (LOP10_LESSONS && LOP10_LESSONS[id]) sc.lesson = LOP10_LESSONS[id];
}
