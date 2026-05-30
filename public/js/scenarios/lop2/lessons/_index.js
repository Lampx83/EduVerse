// ============================================================
// Lớp 2 — Barrel lý thuyết tuần: gộp 9 môn × 36 tuần
// ============================================================
// Mỗi file export 1 map { weekId → lesson } (key trùng id quiz).
// Merge thành LOP2_LESSONS để _index.js gắn vào scenario.lesson.
// ============================================================
import { P2_TOAN_LESSONS } from './toan.js';
import { P2TV_LESSONS    } from './tieng-viet.js';
import { P2TA_LESSONS    } from './tieng-anh.js';
import { P2GDTC_LESSONS  } from './gdtc.js';
import { P2AN_LESSONS    } from './am-nhac.js';
import { P2MT_LESSONS    } from './my-thuat.js';
import { P2HDTN_LESSONS  } from './hdtn.js';
import { P2TNXH_LESSONS  } from './tnxh.js';
import { P2DD_LESSONS    } from './dao-duc.js';

export const LOP2_LESSONS = {
  ...P2_TOAN_LESSONS,
  ...P2TV_LESSONS,
  ...P2TA_LESSONS,
  ...P2GDTC_LESSONS,
  ...P2AN_LESSONS,
  ...P2MT_LESSONS,
  ...P2HDTN_LESSONS,
  ...P2TNXH_LESSONS,
  ...P2DD_LESSONS,
};
