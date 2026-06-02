// ============================================================
// Lớp 8 — Barrel lý thuyết tuần: gộp 5 môn core × 35 tuần
// ============================================================
// Mỗi file export 1 map { weekId → lesson } (key trùng id quiz).
// Merge thành LOP8_LESSONS để _index.js (cùng cấp lop8/) gắn vào scenario.lesson.
// ============================================================
import { S8TOAN_LESSONS  } from './toan.js';
import { S8NV_LESSONS    } from './ngu-van.js';
import { S8TA_LESSONS    } from './tieng-anh.js';
import { S8KHTN_LESSONS  } from './khtn.js';
import { S8LSDL_LESSONS  } from './lich-su-dia.js';

export const LOP8_LESSONS = {
  ...S8TOAN_LESSONS,
  ...S8NV_LESSONS,
  ...S8TA_LESSONS,
  ...S8KHTN_LESSONS,
  ...S8LSDL_LESSONS,
};
