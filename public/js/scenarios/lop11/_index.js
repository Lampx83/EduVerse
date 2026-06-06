// Lớp 11 (THPT) barrel — try/catch dynamic
let m_toan = {}, m_nv = {}, m_ta = {}, m_ly = {}, m_hoa = {}, m_sinh = {}, m_su = {}, m_dia = {}, m_gdcd = {}, m_tin = {}, m_cn = {}, m_gdqp = {};
try { ({ H11TOAN_SCENARIOS: m_toan } = await import('./toan.js')); } catch {}
try { ({ H11NV_SCENARIOS:   m_nv   } = await import('./ngu-van.js')); } catch {}
try { ({ H11TA_SCENARIOS:   m_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ H11LY_SCENARIOS:   m_ly   } = await import('./vat-ly.js')); } catch {}
try { ({ H11HOA_SCENARIOS:  m_hoa  } = await import('./hoa-hoc.js')); } catch {}
try { ({ H11SINH_SCENARIOS: m_sinh } = await import('./sinh-hoc.js')); } catch {}
try { ({ H11SU_SCENARIOS:   m_su   } = await import('./lich-su.js')); } catch {}
try { ({ H11DIA_SCENARIOS:  m_dia  } = await import('./dia-ly.js')); } catch {}
try { ({ H11GDCD_SCENARIOS: m_gdcd } = await import('./gdcd.js')); } catch {}
try { ({ H11TIN_SCENARIOS:  m_tin  } = await import('./tin-hoc.js')); } catch {}
try { ({ H11CN_SCENARIOS:   m_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ H11GDQP_SCENARIOS: m_gdqp } = await import('./gdqp.js')); } catch {}
let LOP11_LESSONS = {};
try { ({ LOP11_LESSONS } = await import('./lessons/_index.js')); } catch {}
export const HIGHSCHOOL_LOP11_SCENARIOS = { ...m_toan, ...m_nv, ...m_ta, ...m_ly, ...m_hoa, ...m_sinh, ...m_su, ...m_dia, ...m_gdcd, ...m_tin, ...m_cn, ...m_gdqp };
for (const [id, sc] of Object.entries(HIGHSCHOOL_LOP11_SCENARIOS)) {
  if (LOP11_LESSONS && LOP11_LESSONS[id]) sc.lesson = LOP11_LESSONS[id];
}
