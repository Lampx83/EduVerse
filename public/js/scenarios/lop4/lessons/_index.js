// ============================================================
// Lớp 4 — Barrel lý thuyết tuần
// ============================================================
let mod_toan = {}, mod_tv = {}, mod_ta = {}, mod_kh = {}, mod_lsdl = {};
let mod_gdtc = {}, mod_hdtn = {}, mod_cn = {};
let mod_dd = {}, mod_an = {}, mod_mt = {};

try { ({ P4_TOAN_LESSONS: mod_toan } = await import('./toan.js')); } catch {}
try { ({ P4TV_LESSONS:    mod_tv   } = await import('./tieng-viet.js')); } catch {}
try { ({ P4TA_LESSONS:    mod_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ P4KH_LESSONS:    mod_kh   } = await import('./khoa-hoc.js')); } catch {}
try { ({ P4LSDL_LESSONS:  mod_lsdl } = await import('./lich-su-dia-ly.js')); } catch {}
try { ({ P4GDTC_LESSONS:  mod_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ P4HDTN_LESSONS:  mod_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ P4CN_LESSONS:    mod_cn   } = await import('./cong-nghe.js')); } catch {}
try { ({ P4DD_LESSONS:    mod_dd   } = await import('./dao-duc.js')); } catch {}
try { ({ P4AN_LESSONS:    mod_an   } = await import('./am-nhac.js')); } catch {}
try { ({ P4MT_LESSONS:    mod_mt   } = await import('./my-thuat.js')); } catch {}

export const LOP4_LESSONS = {
  ...(mod_toan || {}),
  ...(mod_tv   || {}),
  ...(mod_ta   || {}),
  ...(mod_kh   || {}),
  ...(mod_lsdl || {}),
  ...(mod_gdtc || {}),
  ...(mod_hdtn || {}),
  ...(mod_cn   || {}),
  ...(mod_dd   || {}),
  ...(mod_an   || {}),
  ...(mod_mt   || {}),
};
