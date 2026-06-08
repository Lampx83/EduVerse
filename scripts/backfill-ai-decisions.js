// ============================================================
// Backfill — chạy Ban điều hành AI cho mọi request CHƯA có audit decision
// ============================================================
// Lý do: bảng ai_decisions ra đời sau bảng requests, nên các góp ý cũ chưa
// được AI xem xét → admin_note rỗng / status đứng yên. Script này:
//   1. Tìm requests không có row tương ứng trong ai_decisions
//   2. Gọi reviewAndDecideRequest() để AI quyết định + ghi audit + áp status
//   3. Tóm tắt kết quả
//
// Chạy: node scripts/backfill-ai-decisions.js
// Idempotent: không backfill lại request đã có audit.
// ============================================================

import { db } from '../server/db.js';
import { reviewAndDecideRequest } from '../server/contexts/ai-agent/decisions.js';

const rows = db.prepare(`
  SELECT r.id, r.domain, r.type, r.title, r.detail, r.votes, r.student, r.status
  FROM requests r
  WHERE NOT EXISTS (SELECT 1 FROM ai_decisions d WHERE d.request_id = r.id)
  ORDER BY r.created_at ASC
`).all();

if (rows.length === 0) {
  console.log('✓ Không có request nào cần backfill — tất cả đã có audit decision.');
  process.exit(0);
}

console.log(`→ Tìm thấy ${rows.length} request chưa có AI decision. Chạy backfill…\n`);

let ok = 0, fail = 0;
for (const r of rows) {
  process.stdout.write(`  #${r.id} [${r.domain}/${r.type}] "${(r.title || '').slice(0, 50)}" → `);
  try {
    const d = await reviewAndDecideRequest({
      requestId: r.id,
      domain: r.domain,
      type: r.type,
      title: r.title,
      detail: r.detail,
      votes: r.votes || 1,
    });
    console.log(`${d.action} (${d.decided_by}, conf=${d.confidence?.toFixed?.(2) || d.confidence})`);
    ok++;
  } catch (e) {
    console.log(`LỖI: ${e?.message || e}`);
    fail++;
  }
}

console.log(`\n✓ Xong. ${ok} OK, ${fail} lỗi.`);
process.exit(0);
