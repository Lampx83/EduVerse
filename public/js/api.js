// Shared API client + player name management for both games.

const PLAYER_KEY = 'pharmacysim:playerName';

export function getPlayerName() {
  return localStorage.getItem(PLAYER_KEY) || '';
}

export function setPlayerName(name) {
  const clean = String(name || '').trim().slice(0, 40);
  if (clean) localStorage.setItem(PLAYER_KEY, clean);
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
    const res = await fetch('/api/attempts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, playerName }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('[api] submitAttempt failed:', err);
    return null;
  }
}

export async function getLeaderboard(version, limit = 10) {
  try {
    const res = await fetch(`/api/leaderboard?version=${encodeURIComponent(version)}&limit=${limit}`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function getStats(version) {
  try {
    const res = await fetch(`/api/stats?version=${encodeURIComponent(version)}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
