// ============================================================
// Lớp 3 — Barrel lý thuyết tuần
// ============================================================
let mod_toan = {}, mod_tv = {}, mod_ta = {}, mod_tnxh = {};
let mod_dd = {}, mod_an = {}, mod_mt = {}, mod_gdtc = {}, mod_hdtn = {}, mod_tin = {}, mod_cn = {};

try { ({ P3_TOAN_LESSONS: mod_toan } = await import('./toan.js')); } catch {}
try { ({ P3TV_LESSONS:    mod_tv   } = await import('./tieng-viet.js')); } catch {}
try { ({ P3TA_LESSONS:    mod_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ P3TNXH_LESSONS:  mod_tnxh } = await import('./tnxh.js')); } catch {}
try { ({ P3DD_LESSONS:    mod_dd   } = await import('./dao-duc.js')); } catch {}
try { ({ P3AN_LESSONS:    mod_an   } = await import('./am-nhac.js')); } catch {}
try { ({ P3MT_LESSONS:    mod_mt   } = await import('./my-thuat.js')); } catch {}
try { ({ P3GDTC_LESSONS:  mod_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ P3HDTN_LESSONS:  mod_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ P3TIN_LESSONS:   mod_tin  } = await import('./tin-hoc.js')); } catch {}
try { ({ P3CN_LESSONS:    mod_cn   } = await import('./cong-nghe.js')); } catch {}

export const LOP3_LESSONS = {
  ...(mod_toan || {}),
  ...(mod_tv   || {}),
  ...(mod_ta   || {}),
  ...(mod_tnxh || {}),
  ...(mod_dd   || {}),
  ...(mod_an   || {}),
  ...(mod_mt   || {}),
  ...(mod_gdtc || {}),
  ...(mod_hdtn || {}),
  ...(mod_tin  || {}),
  ...(mod_cn   || {}),
};
