// ============================================================
// Storage helper — namespace + auto-migrate cũ → mới
// ============================================================
// Mọi key dùng `tizia:*` prefix. Để không mất dữ liệu của
// user đã dùng phiên bản PharmacySIM cũ, lần đầu tiên đọc 1 key
// `tizia:*` mà chưa có giá trị, ta tự copy từ `pharmacysim:*`
// (nếu tồn tại) sang.
//
// Sau migration, key cũ bị xoá để không còn 2 nguồn dữ liệu.
//
// Usage:
//   import { lsGet, lsSet, lsRemove, KEYS } from './js/engine/storage.js';
//   const name = lsGet(KEYS.PLAYER_NAME) || 'Ẩn danh';
//   lsSet(KEYS.PLAYER_NAME, 'Phạm Lâm');
// ============================================================

const NEW_PREFIX = 'tizia:';
const OLD_PREFIX = 'pharmacysim:';

/** Catalog các key chuẩn — không hard-code chuỗi rải rác. */
export const KEYS = {
  ACTIVE_DOMAIN: NEW_PREFIX + 'active-domain',
  PLAYER_NAME:   NEW_PREFIX + 'playerName',
  CLASS_CODE:    NEW_PREFIX + 'classCode',
  PROGRESS:      NEW_PREFIX + 'progress',
  LEVEL:         NEW_PREFIX + 'level',
  WALLET:        NEW_PREFIX + 'wallet:v1',
  SFX:           NEW_PREFIX + 'sfx',
  DIFFICULTY:    NEW_PREFIX + 'difficulty',
  ROLE:          NEW_PREFIX + 'role',          // 'student' (default) | 'teacher'
  SCN_RUNS:      NEW_PREFIX + 'scn-runs',      // số lần hoàn thành theo familyId
  // Welcome cards (dynamic suffix)
  welcomeCard:   (id) => NEW_PREFIX + 'welcome:' + id,
  // OSCE
  OSCE_STATE:    NEW_PREFIX + 'osce-championship:state',
};

/** Đổi tên 1 key cũ sang prefix mới (gọi tự động khi cần). */
function migrate(newKey) {
  if (!newKey.startsWith(NEW_PREFIX)) return;
  // Đã có giá trị mới → bỏ qua
  if (localStorage.getItem(newKey) !== null) return;
  const oldKey = OLD_PREFIX + newKey.slice(NEW_PREFIX.length);
  const oldVal = localStorage.getItem(oldKey);
  if (oldVal !== null) {
    localStorage.setItem(newKey, oldVal);
    localStorage.removeItem(oldKey);
  }
}

/** Read string từ localStorage, auto-migrate nếu key cũ tồn tại. */
export function lsGet(key) {
  try {
    migrate(key);
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function lsSet(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch {}
}

export function lsRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

/** Chạy 1 lần lúc khởi động để migrate sạch các key đã biết. */
export function migrateAllKnown() {
  for (const [name, val] of Object.entries(KEYS)) {
    if (typeof val === 'string') migrate(val);
  }
  // Welcome card prefix migration — scan
  try {
    const oldWelcomePrefix = OLD_PREFIX + 'welcome:';
    const newWelcomePrefix = NEW_PREFIX + 'welcome:';
    const keysToMigrate = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(oldWelcomePrefix)) keysToMigrate.push(k);
    }
    for (const oldK of keysToMigrate) {
      const newK = newWelcomePrefix + oldK.slice(oldWelcomePrefix.length);
      if (localStorage.getItem(newK) === null) {
        localStorage.setItem(newK, localStorage.getItem(oldK));
      }
      localStorage.removeItem(oldK);
    }
  } catch {}
}
