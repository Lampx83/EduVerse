// Gộp 5 chương câu hỏi luật GT B1/B2 → nguồn seed collection 'driving-600'.
import { ITEMS as C1 } from './driving/01-khai-niem-quy-tac.js';
import { ITEMS as C2 } from './driving/02-van-hoa-dao-duc.js';
import { ITEMS as C3 } from './driving/03-ky-thuat-lai-xe.js';
import { ITEMS as C4 } from './driving/04-cau-tao-sua-chua.js';
import { ITEMS as C5 } from './driving/05-nghiep-vu-van-tai.js';
// id ổn định để seed/prune đúng (q<index>).
export const ITEMS = [...C1, ...C2, ...C3, ...C4, ...C5].map((it, i) => ({ id: 'q' + String(i + 1).padStart(3, '0'), ...it }));
