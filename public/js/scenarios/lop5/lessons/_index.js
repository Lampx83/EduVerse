// ============================================================
// Lớp 5 — Barrel lý thuyết tuần (gom các môn đã có)
// ============================================================
// Mỗi file export 1 map { weekId → lesson } (key trùng id quiz).
// Merge thành LOP5_LESSONS để _index.js gắn vào scenario.lesson.
// Dùng dynamic import + try/catch để tránh vỡ build khi 1 môn chưa có.
// ============================================================

let mod_toan = {}, mod_tv = {};
let mod_ta = {}, mod_kh = {}, mod_lsdl = {}, mod_dd = {};
let mod_an = {}, mod_mt = {}, mod_gdtc = {}, mod_hdtn = {}, mod_cn = {};

try { ({ P5_TOAN_LESSONS: mod_toan } = await import('./toan.js')); } catch {}
try { ({ P5TV_LESSONS:    mod_tv   } = await import('./tieng-viet.js')); } catch {}
try { ({ P5TA_LESSONS:    mod_ta   } = await import('./tieng-anh.js')); } catch {}
try { ({ P5KH_LESSONS:    mod_kh   } = await import('./khoa-hoc.js')); } catch {}
try { ({ P5LSDL_LESSONS:  mod_lsdl } = await import('./lich-su-dia-ly.js')); } catch {}
try { ({ P5DD_LESSONS:    mod_dd   } = await import('./dao-duc.js')); } catch {}
try { ({ P5AN_LESSONS:    mod_an   } = await import('./am-nhac.js')); } catch {}
try { ({ P5MT_LESSONS:    mod_mt   } = await import('./my-thuat.js')); } catch {}
try { ({ P5GDTC_LESSONS:  mod_gdtc } = await import('./gdtc.js')); } catch {}
try { ({ P5HDTN_LESSONS:  mod_hdtn } = await import('./hdtn.js')); } catch {}
try { ({ P5CN_LESSONS:    mod_cn   } = await import('./cong-nghe.js')); } catch {}

export const LOP5_LESSONS = {
  ...(mod_toan || {}),
  ...(mod_tv   || {}),
  ...(mod_ta   || {}),
  ...(mod_kh   || {}),
  ...(mod_lsdl || {}),
  ...(mod_dd   || {}),
  ...(mod_an   || {}),
  ...(mod_mt   || {}),
  ...(mod_gdtc || {}),
  ...(mod_hdtn || {}),
  ...(mod_cn   || {}),
};
