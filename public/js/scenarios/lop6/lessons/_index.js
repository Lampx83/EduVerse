// ============================================================
// Lớp 6 — Barrel lý thuyết tuần: gộp 12 môn × 36 tuần
// ============================================================
// Mỗi file export 1 map { weekId → lesson } (key trùng id quiz).
// Merge thành LOP6_LESSONS để _index.js (cùng cấp lop6/) gắn vào scenario.lesson.
// ============================================================
import { S6TOAN_LESSONS  } from './toan.js';
import { S6NV_LESSONS    } from './ngu-van.js';
import { S6TA_LESSONS    } from './tieng-anh.js';
import { S6KHTN_LESSONS  } from './khtn.js';
import { S6LSDL_LESSONS  } from './lich-su-dia.js';
import { S6GDCD_LESSONS  } from './gdcd.js';
import { S6CN_LESSONS    } from './cong-nghe.js';
import { S6TH_LESSONS    } from './tin-hoc.js';
import { S6GDTC_LESSONS  } from './gdtc.js';
import { S6NT_LESSONS    } from './nghe-thuat.js';
import { S6HDTN_LESSONS  } from './hdtn.js';
import { S6GDDP_LESSONS  } from './gd-dia-phuong.js';

export const LOP6_LESSONS = {
  ...S6TOAN_LESSONS,
  ...S6NV_LESSONS,
  ...S6TA_LESSONS,
  ...S6KHTN_LESSONS,
  ...S6LSDL_LESSONS,
  ...S6GDCD_LESSONS,
  ...S6CN_LESSONS,
  ...S6TH_LESSONS,
  ...S6GDTC_LESSONS,
  ...S6NT_LESSONS,
  ...S6HDTN_LESSONS,
  ...S6GDDP_LESSONS,
};
