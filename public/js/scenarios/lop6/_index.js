// ============================================================
// Lớp 6 (THCS) — Barrel: gộp 11 môn × 36 tuần (~2 427 câu)
// ============================================================
// Mirror cấu trúc lop2/. Khi có thêm lessons tuần (lý thuyết),
// gắn vào scenario.lesson tương tự lop2/_index.js.
// ============================================================
import { S6TOAN_SCENARIOS  } from './toan.js';
import { S6NV_SCENARIOS    } from './ngu-van.js';
import { S6TA_SCENARIOS    } from './tieng-anh.js';
import { S6KHTN_SCENARIOS  } from './khtn.js';
import { S6LSDL_SCENARIOS  } from './lich-su-dia.js';
import { S6GDCD_SCENARIOS  } from './gdcd.js';
import { S6CN_SCENARIOS    } from './cong-nghe.js';
import { S6TH_SCENARIOS    } from './tin-hoc.js';
import { S6GDTC_SCENARIOS  } from './gdtc.js';
import { S6NT_SCENARIOS    } from './nghe-thuat.js';
import { S6HDTN_SCENARIOS  } from './hdtn.js';

export const SECONDARY_LOP6_SCENARIOS = {
  ...S6TOAN_SCENARIOS,
  ...S6NV_SCENARIOS,
  ...S6TA_SCENARIOS,
  ...S6KHTN_SCENARIOS,
  ...S6LSDL_SCENARIOS,
  ...S6GDCD_SCENARIOS,
  ...S6CN_SCENARIOS,
  ...S6TH_SCENARIOS,
  ...S6GDTC_SCENARIOS,
  ...S6NT_SCENARIOS,
  ...S6HDTN_SCENARIOS,
};
