// Shared API client + player name management cho EduVerse.

import { KEYS, lsGet, lsSet, lsRemove } from './engine/storage.js';

const PLAYER_KEY = KEYS.PLAYER_NAME;
const CLASS_KEY = KEYS.CLASS_CODE;

export function getClassCode() {
  return lsGet(CLASS_KEY) || '';
}
export function setClassCode(code) {
  const c = String(code || '').trim().toUpperCase().slice(0, 12);
  if (c) lsSet(CLASS_KEY, c);
  else lsRemove(CLASS_KEY);
  return c;
}

export async function joinClassByCode(code) {
  const c = String(code || '').trim().toUpperCase();
  if (!c) return null;
  try {
    const r = await fetch('api/classes/' + encodeURIComponent(c));
    if (!r.ok) return null;
    const cls = await r.json();
    setClassCode(cls.code);
    return cls;
  } catch { return null; }
}

export function getPlayerName() {
  return lsGet(PLAYER_KEY) || '';
}

export function setPlayerName(name) {
  const clean = String(name || '').trim().slice(0, 40);
  if (clean) lsSet(PLAYER_KEY, clean);
  return clean;
}

export async function ensurePlayerName() {
  let name = getPlayerName();
  if (name) return name;
  name = prompt('Nhập tên của bạn để lưu lên bảng xếp hạng:', '')?.trim() || 'Ẩn danh';
  setPlayerName(name);
  return name;
}

export async function submitAttempt(payload) {
  try {
    const playerName = getPlayerName() || 'Ẩn danh';
    const classCode = getClassCode() || undefined;
    const res = await fetch('api/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, playerName, classCode }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    if (result.newBadges?.length) showBadgePopup(result.newBadges);
    return result;
  } catch (err) {
    console.warn('[api] submitAttempt failed:', err);
    return null;
  }
}

export async function getBadges() {
  try { const r = await fetch('api/badges'); return r.ok ? await r.json() : []; }
  catch { return []; }
}

export async function getMyAchievements() {
  const player = getPlayerName();
  if (!player) return [];
  try {
    const r = await fetch('api/achievements?player=' + encodeURIComponent(player));
    return r.ok ? await r.json() : [];
  } catch { return []; }
}

// Popup toast for newly unlocked badges
function showBadgePopup(badges) {
  let host = document.getElementById('badge-popup-host');
  if (!host) {
    host = document.createElement('div');
    host.id = 'badge-popup-host';
    host.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none';
    document.body.appendChild(host);
  }
  badges.forEach((b, i) => {
    setTimeout(() => {
      const card = document.createElement('div');
      card.style.cssText = 'background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#3e2723;padding:12px 18px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.3);font-family:system-ui,sans-serif;font-size:14px;font-weight:600;min-width:240px;animation:slideIn 0.3s ease-out;display:flex;align-items:center;gap:10px';
      card.innerHTML = `<span style="font-size:28px">${b.icon}</span><div><div style="font-size:11px;opacity:0.7;text-transform:uppercase;letter-spacing:0.5px">🎁 Huy hiệu mới</div><div style="font-size:15px">${b.label}</div><div style="font-size:11px;opacity:0.75;font-weight:400">${b.desc}</div></div>`;
      host.appendChild(card);
      setTimeout(() => { card.style.transition = 'opacity 0.5s, transform 0.5s'; card.style.opacity = '0'; card.style.transform = 'translateX(40px)'; }, 4000);
      setTimeout(() => card.remove(), 4600);
    }, i * 200);
  });
}

export async function getLeaderboard(version, limit = 10) {
  try {
    const res = await fetch(`api/leaderboard?version=${encodeURIComponent(version)}&limit=${limit}`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function getStats(version) {
  try {
    const res = await fetch(`api/stats?version=${encodeURIComponent(version)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
