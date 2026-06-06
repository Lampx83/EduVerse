// Lớp 12 (THPT) — năm thi tốt nghiệp
let m_toan = {}, m_nv = {}, m_ta = {}, m_ly = {}, m_hoa = {}, m_sinh = {}, m_su = {}, m_dia = {}, m_gdcd = {}, m_tin = {}, m_cn = {}, m_gdqp = {};
try { ({ H12TOAN_SCENARIOS: m_toan } = await import('./toan.js')); } catch {}
try { ({ H12NV_SCENARIOS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ H12TA_SCENARIOS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ H12LY_SCENARIOS:   m_ly   } = await import('./vat-ly.js')); } catch {}
try { ({ H12HOA_SCENARIOS:  m_hoa  } = await import('./hoa-hoc.js')); } catch {}
try { ({ H12SINH_SCENARIOS: m_sinh } = await import('./sinh-hoc.js')); } catch {}
try { ({ H12SU_SCENARIOS:   m_su   } = await import('./lich-su.js')); } catch {}
try { ({ H12DIA_SCENARIOS:  m_dia  } = await import('./dia-ly.js')); } catch {}
try { ({ H12GDCD_SCENARIOS: m_gdcd } = await import('./gdcd.js')); } catch {}
try { ({ H12TIN_SCENARIOS:  m_tin  } = await import('./tin-hoc.js')); } catch {}
try { ({ H12CN_SCENARIOS:   m_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ H12GDQP_SCENARIOS: m_gdqp } = await import('./gdqp.js')); } catch {}
let LOP12_LESSONS = {};
try { ({ LOP12_LESSONS } = await import('./lessons/_index.js')); } catch {}
export const HIGHSCHOOL_LOP12_SCENARIOS = { ...m_toan, ...m_nv, ...m_ta, ...m_ly, ...m_hoa, ...m_sinh, ...m_su, ...m_dia, ...m_gdcd, ...m_tin, ...m_cn, ...m_gdqp };
for (const [id, sc] of Object.entries(HIGHSCHOOL_LOP12_SCENARIOS)) {
  if (LOP12_LESSONS && LOP12_LESSONS[id]) sc.lesson = LOP12_LESSONS[id];
}
