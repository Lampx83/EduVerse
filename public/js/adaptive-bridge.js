/* GAP 11 — Adaptive Quiz bridge (FE)
 *
 * Cho phép bất kỳ quiz/lab nào trong EduVerse:
 *   (a) gửi sự kiện học (đúng/sai) về server để cập nhật BKT
 *   (b) hỏi câu tiếp theo nên làm
 *
 * Sử dụng tối thiểu:
 *   import { adaptive } from './js/adaptive-bridge.js';
 *   await adaptive.event({ skill: 'sql-select', correct: true });
 *   const next = await adaptive.next({ skill: 'sql-select', skills: ['sql-select','sql-join','sql-where'] });
 *
 * Identity:
 *   - Học sinh được nhận diện qua localStorage('player.name') — pattern hiện có
 *     của EduVerse. Nếu chưa có, fallback 'Ẩn danh'.
 */

const BASE = location.pathname.includes('/ps/') ? '/ps' : '';

function learner() {
  try {
    return (localStorage.getItem('player.name') || localStorage.getItem('playerName') || 'Ẩn danh').slice(0, 40);
  } catch {
    return 'Ẩn danh';
  }
}

async function event({ skill, correct, questionId, durationMs, domain, context, availableSkills }) {
  if (!skill) throw new Error('skill required');
  const res = await fetch(BASE + '/api/adaptive/event', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      learner: learner(),
      skill, correct: !!correct,
      questionId, durationMs, domain, context, availableSkills,
    }),
  });
  if (!res.ok) throw new Error('adaptive/event HTTP ' + res.status);
  return res.json();
}

async function next({ skill, skills }) {
  if (!skill) throw new Error('skill required');
  const q = new URLSearchParams({
    learner: learner(),
    skill,
    ...(Array.isArray(skills) && skills.length ? { skills: skills.join(',') } : {}),
  });
  const res = await fetch(BASE + '/api/adaptive/next?' + q.toString());
  if (!res.ok) throw new Error('adaptive/next HTTP ' + res.status);
  return res.json();
}

async function learnerSummary(name) {
  const n = name || learner();
  const res = await fetch(BASE + '/api/adaptive/learner/' + encodeURIComponent(n));
  if (!res.ok) throw new Error('adaptive/learner HTTP ' + res.status);
  return res.json();
}

export const adaptive = { event, next, learner: learnerSummary, getLearnerName: learner };

// Cho phép dùng không-module (qua <script>)
if (typeof window !== 'undefined') {
  window.EduAdaptive = adaptive;
}
