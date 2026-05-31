// ============================================================
// Tenant context middleware — gắn req.schoolId cho mọi request
// ============================================================
// Multi-tenancy thật ở runtime: mỗi request được gắn schoolId, mọi write stamp
// nó và mọi read cross-user lọc theo nó. Đây là lớp enforce ở APP (SQLite chưa có
// RLS); khi cutover Postgres (Phase 1 A) sẽ thêm `SET app.current_school_id` để
// RLS enforce ở DB — middleware này vẫn là nơi PHÂN GIẢI schoolId.
//
// Thứ tự phân giải (dừng ở cái đầu tiên có giá trị):
//   1. req.user.school_id   — user đã đăng nhập (nguồn chuẩn nhất)
//   2. host → schools.domain — subdomain/đa-domain (vd neu.tizia.vn) [Phase 1+]
//   3. default 1            — 'tizia-default'
//
// PHẢI chạy SAU attachUser (cần req.user). Xem server/index.js.
// ============================================================

import { getSchoolByDomain } from '../../db.js';

const DEFAULT_SCHOOL_ID = 1;

// Cache host→schoolId để không query mỗi request (host thay đổi rất ít).
const hostCache = new Map();
function schoolIdFromHost(host) {
  if (!host) return null;
  const h = String(host).split(':')[0].toLowerCase();
  if (hostCache.has(h)) return hostCache.get(h);
  // Thử khớp domain đầy đủ, rồi tới phần "neu" của neu.tizia.vn.
  let school = getSchoolByDomain(h);
  if (!school) {
    const sub = h.split('.')[0];
    if (sub && sub !== 'www' && sub !== 'tizia') school = getSchoolByDomain(sub);
  }
  const id = school?.id ?? null;
  hostCache.set(h, id);
  return id;
}

export function attachTenant(req, _res, next) {
  let schoolId = req.user?.school_id;
  if (!schoolId) schoolId = schoolIdFromHost(req.headers?.host);
  req.schoolId = Number(schoolId) || DEFAULT_SCHOOL_ID;
  next();
}

// Tiện ích cho test/job nền: xoá cache host (khi thêm/sửa domain trường).
export function clearTenantHostCache() { hostCache.clear(); }
