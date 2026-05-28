// ============================================================
// Path renderer — Subway-map style learning path
// ============================================================
// Render lộ trình học tập 5 năm dạng "subway map":
//   - Mỗi năm là 1 chapter dọc
//   - Modules là nodes trong CSS grid
//   - Prereq lines = SVG overlay nối node→node
//   - Mỗi node: icon · title · stars · mode badges (📚 + 2D/3D/VR/…)
//   - Locked: dim + 🔒
//
// Domain-agnostic: nhận MODULES + SUBJECTS + DOMAIN config.
// ============================================================

const MODE_ICONS = {
  quiz:   '📚',
  '2d':   '📱',
  '3d':   '🥽',
  vr:     '🕹️',
  xr:     '🕹️',
  ar:     '🎨',
  meta:   '🌐',
  native: '📦',
};

const MODE_LABEL = {
  quiz:   'Quiz · lý thuyết',
  '2d':   '2D · Canvas',
  '3d':   '3D Realistic',
  vr:     'VR / XR Web',
  xr:     'XR mixed reality',
  ar:     'AR (sắp có)',
  meta:   'Metaverse multiplayer',
  native: 'Unity native APK',
};

/**
 * Render subway-map vào host element.
 * @param {{
 *   host: HTMLElement,
 *   modules: import('./types.js').CourseModule[],
 *   subjects: Record<string, {label:string,icon:string,color:string}>,
 *   domain: import('./types.js').DomainConfig,
 *   progress: Record<string, {stars:number}>,
 *   unlocked: Set<string>,
 *   locked: Map<string, string>,  // moduleId → reason
 * }} opts
 */
export function renderPath({ host, modules, subjects, domain, categories, progress, unlocked, locked, contentSet }) {
  injectStylesOnce();

  // ── Build groups: curriculum theo năm + các cụm khác (practice/skill/…) ──
  const groups = [];

  // 1. Curriculum theo năm
  const byYear = new Map();
  for (const m of modules.filter(m => m.category === 'curriculum')) {
    const y = m.yearLevel || 1;
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y).push(m);
  }
  for (const y of [...byYear.keys()].sort()) {
    const arr = byYear.get(y).sort((a, b) => a.id.localeCompare(b.id));
    groups.push({
      id: `year-${y}`,
      label: domain.yearLabels?.[y - 1] || `Năm ${y}`,
      short: domain.yearLabels?.[y - 1]?.split(' — ')[0] || `Năm ${y}`,
      color: '#fbbf24',
      modules: arr,
      drawLines: true,
    });
  }

  // 2. Các cụm chung: thực hành, kỹ năng, thư viện, sự nghiệp, game
  const CLUSTER_ORDER = ['practice', 'skill', 'library', 'career', 'game'];
  for (const cat of CLUSTER_ORDER) {
    const arr = modules.filter(m => m.category === cat).sort((a, b) => a.id.localeCompare(b.id));
    if (!arr.length) continue;
    const meta = categories?.[cat] || { label: cat, icon: '📂', color: '#94a3b8' };
    groups.push({
      id: `cat-${cat}`,
      label: `${meta.icon} ${meta.label}`,
      short: `${meta.icon} ${meta.label}`,
      color: meta.color,
      modules: arr,
      drawLines: false,
    });
  }

  const hasContent = (id) => !contentSet || contentSet.has(id);

  // ── Tabs (sticky) ──
  const tabsHtml = groups.map(g => {
    const openable = g.modules.filter(m => hasContent(m.id)).length;
    const stars = g.modules.reduce((s, m) => s + (progress[m.id]?.stars || 0), 0);
    return `<a class="path-year-tab" href="#path-${g.id}" data-group="${g.id}" style="--tab-color:${g.color}">
      <span class="pyt-num">${g.short}</span>
      <span class="pyt-prog">${openable}/${g.modules.length} mở <span class="pyt-stars">★ ${stars}</span></span>
    </a>`;
  }).join('');

  // ── Chapters ──
  const chaptersHtml = groups.map(g => {
    const openable = g.modules.filter(m => hasContent(m.id)).length;
    const nodesHtml = g.modules.map(m => renderNode(m, { subjects, progress, locked, hasContent })).join('');
    return `
      <section class="path-year" id="path-${g.id}">
        <header class="path-year-head">
          <h3>${g.label}</h3>
          <span class="path-year-sub">${openable}/${g.modules.length} module có nội dung</span>
        </header>
        <div class="path-year-grid">${nodesHtml}</div>
        <svg class="path-year-svg" aria-hidden="true"></svg>
      </section>
    `;
  }).join('');

  host.innerHTML = `
    <div class="path-domain-hero">
      <div class="pdh-icon">${domain.icon}</div>
      <div>
        <h2 class="pdh-title">${domain.name}</h2>
        <p class="pdh-tagline">${domain.tagline || ''}</p>
      </div>
    </div>
    <nav class="path-year-tabs">${tabsHtml}</nav>
    <div class="path-chapters">${chaptersHtml}</div>
  `;

  attachNodeNavigation(host);

  // Vẽ prereq line cho các group cần (curriculum). rAF + setTimeout để layout xong.
  const lineGroups = groups.filter(g => g.drawLines);
  const drawAll = () => {
    for (const g of lineGroups) {
      try { drawPrereqLines(host, g.id, g.modules, subjects); }
      catch (err) { console.warn('drawPrereqLines failed for', g.id, err); }
    }
  };
  requestAnimationFrame(drawAll);
  setTimeout(drawAll, 60);

  if (typeof ResizeObserver !== 'undefined') {
    const ro = new ResizeObserver(drawAll);
    ro.observe(host);
  }
}

function renderNode(mod, { subjects, progress, locked, hasContent }) {
  const stars = progress[mod.id]?.stars || 0;
  const noContent = !hasContent(mod.id);
  const prereqReason = locked?.get(mod.id);
  const isLocked = noContent || !!prereqReason;
  const reason = noContent ? 'Chưa có nội dung — sắp ra mắt' : (prereqReason || '');
  const subj = subjects[mod.subject] || { label: mod.subject, icon: '📘', color: '#94a3b8' };
  const starsHtml = '★'.repeat(stars) + '☆'.repeat(3 - stars);

  // Quiz badge (luôn có) + experiences. Node khoá → CSS pointer-events:none làm badge trơ.
  const modes = [{ mode: 'quiz', icon: '📚', label: MODE_LABEL.quiz, tech: 'Quiz', url: `module.html?module=${encodeURIComponent(mod.id)}` }];
  for (const e of (mod.experiences || [])) modes.push(e);

  const badgesHtml = modes.map(e => {
    const icon = e.icon || MODE_ICONS[e.mode] || '·';
    const safeUrl = e.url || '#';
    const cls = `mode-badge mode-${e.mode}` + (e.status === 'soon' ? ' soon' : '');
    const external = e.status === 'external' ? 'target="_blank" rel="noopener"' : '';
    return `<a class="${cls}" href="${safeUrl}" ${external} title="${e.label} · ${e.tech || ''}">${icon}</a>`;
  }).join('');

  const targetUrl = isLocked ? '#' : `module.html?module=${encodeURIComponent(mod.id)}`;
  return `
    <div class="path-node ${isLocked ? 'locked' : ''} ${noContent ? 'no-content' : ''} ${stars >= 1 ? 'passed' : ''}"
         data-mod="${mod.id}"
         data-subject="${mod.subject}"
         data-href="${targetUrl}"
         style="--node-color: ${subj.color}"
         role="link"
         tabindex="${isLocked ? -1 : 0}"
         ${isLocked ? `aria-disabled="true" title="🔒 ${reason}"` : ''}>
      <div class="pn-head">
        <span class="pn-icon">${mod.icon || subj.icon}</span>
        <span class="pn-id">${mod.id}</span>
        ${mod.hasCertificate ? '<span class="pn-cert" title="Module có cấp chứng chỉ">🏆</span>' : ''}
      </div>
      <div class="pn-title">${mod.title}</div>
      <div class="pn-meta">
        <span class="pn-stars" aria-label="${stars} sao">${starsHtml}</span>
        <span class="pn-subject">${subj.icon} ${subj.label}</span>
      </div>
      <div class="pn-badges">${badgesHtml}</div>
      ${isLocked ? `<div class="pn-lock">${noContent ? '🔒' : '🔒'}</div>` : ''}
    </div>
  `;
}

/** Wire click + keyboard nav cho path-node (a-trong-a không hợp lệ). */
function attachNodeNavigation(host) {
  host.addEventListener('click', (e) => {
    if (e.target.closest('.mode-badge')) return; // badge tự xử lý
    const node = e.target.closest('.path-node');
    if (!node || node.classList.contains('locked')) return;
    const href = node.dataset.href;
    if (href && href !== '#') location.href = href;
  });
  host.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const node = e.target.closest('.path-node');
    if (!node || node.classList.contains('locked')) return;
    e.preventDefault();
    const href = node.dataset.href;
    if (href && href !== '#') location.href = href;
  });
}

function drawPrereqLines(host, groupId, groupModules, subjects) {
  const section = host.querySelector(`#path-${groupId}`);
  if (!section) return;
  const svg = section.querySelector('.path-year-svg');
  const grid = section.querySelector('.path-year-grid');
  if (!svg || !grid) return;

  const gridRect = grid.getBoundingClientRect();
  svg.setAttribute('width', gridRect.width);
  svg.setAttribute('height', gridRect.height);
  svg.style.left = '0';
  svg.style.top = '0';
  svg.innerHTML = '';

  const ns = 'http://www.w3.org/2000/svg';
  for (const m of groupModules) {
    for (const pid of (m.prerequisites || [])) {
      // Chỉ vẽ khi cả 2 node nằm trong cùng group này
      const aNode = grid.querySelector(`[data-mod="${pid}"]`);
      const bNode = grid.querySelector(`[data-mod="${m.id}"]`);
      if (!aNode || !bNode) continue;
      const a = aNode.getBoundingClientRect();
      const b = bNode.getBoundingClientRect();
      const subj = subjects[m.subject] || { color: '#94a3b8' };
      const x1 = a.left + a.width / 2 - gridRect.left;
      const y1 = a.bottom - gridRect.top;
      const x2 = b.left + b.width / 2 - gridRect.left;
      const y2 = b.top - gridRect.top;
      const midY = (y1 + y2) / 2;
      const path = document.createElementNS(ns, 'path');
      path.setAttribute('d', `M ${x1} ${y1} C ${x1} ${midY} ${x2} ${midY} ${x2} ${y2}`);
      path.setAttribute('stroke', subj.color);
      path.setAttribute('stroke-width', '2.5');
      path.setAttribute('fill', 'none');
      path.setAttribute('opacity', '0.55');
      path.setAttribute('stroke-dasharray', '4 4');
      svg.appendChild(path);
    }
  }
}

// Side rail đã được hợp nhất vào renderPath (các cụm practice/skill/…
// nay là section trong chính lộ trình). renderSideRail không còn dùng.

// ─────────────────────────────────────────────────────────────
// Styles (injected once)
// ─────────────────────────────────────────────────────────────

let stylesInjected = false;
function injectStylesOnce() {
  if (stylesInjected) return;
  stylesInjected = true;
  const css = `
    .path-domain-hero {
      display: flex; align-items: center; gap: 16px;
      padding: 18px 22px; border-radius: 16px;
      background: linear-gradient(135deg, rgba(251,191,36,0.15), rgba(139,92,246,0.15));
      border: 1px solid rgba(255,255,255,0.12); margin-bottom: 18px;
    }
    .pdh-icon { font-size: 48px; line-height: 1; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); }
    .pdh-title { margin: 0; font-size: 22px; font-weight: 800; color: white; }
    .pdh-tagline { margin: 4px 0 0; font-size: 13px; opacity: 0.85; line-height: 1.5; }

    .path-year-tabs {
      display: flex; gap: 8px; flex-wrap: wrap;
      background: rgba(15,23,42,0.7); backdrop-filter: blur(8px);
      padding: 10px 12px; border-radius: 12px; margin-bottom: 18px;
      position: sticky; top: 8px; z-index: 5;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .path-year-tab {
      flex: 1 1 140px;
      padding: 10px 14px; border-radius: 10px;
      background: rgba(255,255,255,0.05); color: white;
      text-decoration: none; transition: all 0.15s;
      display: flex; flex-direction: column; gap: 3px;
      border: 1px solid transparent;
    }
    .path-year-tab:hover { background: rgba(251,191,36,0.15); border-color: rgba(251,191,36,0.3); }
    .pyt-num { font-size: 13px; font-weight: 700; opacity: 0.95; }
    .pyt-prog { font-size: 12px; opacity: 0.75; display: flex; justify-content: space-between; }
    .pyt-stars { color: #fbbf24; font-weight: 700; }

    .path-chapters { display: flex; flex-direction: column; gap: 22px; }

    .path-year {
      position: relative;
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px; padding: 18px 20px;
      scroll-margin-top: 80px;
    }
    .path-year-head {
      display: flex; justify-content: space-between; align-items: baseline;
      margin-bottom: 14px; padding-bottom: 8px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .path-year-head h3 { margin: 0; font-size: 18px; font-weight: 700; color: white; }
    .path-year-sub { font-size: 12px; opacity: 0.6; }

    .path-year-grid {
      position: relative; z-index: 2;
      display: grid; gap: 14px;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
    .path-year-svg {
      position: absolute; left: 20px; top: 60px;
      pointer-events: none; z-index: 1;
      width: calc(100% - 40px);
    }

    .path-node {
      position: relative; z-index: 2;
      background: rgba(0,0,0,0.28); color: white;
      border: 2px solid var(--node-color, #94a3b8);
      border-radius: 14px; padding: 12px 14px;
      text-decoration: none; transition: all 0.18s;
      display: flex; flex-direction: column; gap: 6px;
      cursor: pointer;
      outline: none;
    }
    .path-node:focus-visible { box-shadow: 0 0 0 3px rgba(251,191,36,0.6); }
    .path-node::before {
      content: ''; position: absolute; left: 0; right: 0; top: 0; height: 3px;
      background: var(--node-color, #94a3b8); border-radius: 14px 14px 0 0;
      opacity: 0.65;
    }
    .path-node:hover {
      transform: translateY(-3px);
      background: rgba(0,0,0,0.4);
      box-shadow: 0 8px 22px rgba(0,0,0,0.4);
    }
    .path-node.passed { background: rgba(16,185,129,0.18); border-color: #10b981; }
    .path-node.locked {
      opacity: 0.45; cursor: not-allowed; pointer-events: none;
      filter: grayscale(0.5);
    }
    /* "Chưa có nội dung" — phân biệt với khoá do prereq: viền nét đứt, mờ nhẹ hơn */
    .path-node.no-content {
      opacity: 0.6; filter: grayscale(0.3);
      border-style: dashed;
    }
    .pn-head { display: flex; align-items: center; gap: 6px; }
    .pn-icon { font-size: 20px; }
    .pn-id { font-size: 11px; font-weight: 700; opacity: 0.7; letter-spacing: 0.4px; }
    .pn-cert { margin-left: auto; font-size: 13px; }
    .pn-title { font-size: 13.5px; font-weight: 600; line-height: 1.35; }
    .pn-meta {
      display: flex; justify-content: space-between; align-items: center;
      font-size: 11px; opacity: 0.78;
    }
    .pn-stars { color: #fbbf24; letter-spacing: 1px; }
    .pn-subject {
      padding: 2px 6px; border-radius: 6px;
      background: rgba(255,255,255,0.06); font-size: 10px;
    }
    .pn-badges { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px; }
    .mode-badge {
      display: inline-flex; align-items: center; justify-content: center;
      width: 26px; height: 26px; border-radius: 6px;
      background: rgba(255,255,255,0.08);
      font-size: 13px; text-decoration: none; color: white;
      transition: all 0.12s;
    }
    .mode-badge:hover { background: rgba(255,255,255,0.22); transform: scale(1.08); }
    .mode-badge.soon { opacity: 0.45; pointer-events: none; }
    .mode-badge.mode-quiz { background: rgba(251,191,36,0.22); }
    .mode-badge.mode-3d   { background: rgba(139,92,246,0.22); }
    .mode-badge.mode-vr,
    .mode-badge.mode-xr   { background: rgba(236,72,153,0.22); }
    .mode-badge.mode-2d   { background: rgba(251,146,60,0.22); }
    .mode-badge.mode-meta { background: rgba(2,132,199,0.22); }
    .mode-badge.mode-native { background: rgba(99,102,241,0.22); }
    .mode-badge.mode-ar { background: rgba(20,184,166,0.22); }

    .pn-lock {
      position: absolute; right: 8px; top: 8px;
      font-size: 18px; opacity: 0.65;
    }

    /* Side rail */
    .rail-guild {
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px; padding: 0 14px; margin-bottom: 10px;
    }
    .rail-guild[open] { background: rgba(255,255,255,0.07); }
    .rail-guild summary {
      cursor: pointer; padding: 10px 0;
      display: flex; align-items: center; gap: 8px;
      font-size: 13.5px; font-weight: 600; color: white;
      list-style: none;
    }
    .rail-guild summary::-webkit-details-marker { display: none; }
    .rg-icon { font-size: 18px; }
    .rg-label { flex: 1; }
    .rg-count {
      padding: 2px 7px; border-radius: 10px;
      background: var(--rg-color, #94a3b8); color: #1f1147;
      font-size: 10px; font-weight: 700;
    }
    .rg-desc { font-size: 11px; opacity: 0.65; margin: 0 0 8px; line-height: 1.5; }
    .rail-items {
      display: flex; flex-direction: column; gap: 4px; padding-bottom: 10px;
    }
    .rail-item {
      display: flex; align-items: center; gap: 8px;
      padding: 7px 10px; border-radius: 8px;
      background: rgba(0,0,0,0.18); color: white;
      text-decoration: none; font-size: 12.5px;
      transition: background 0.12s;
    }
    .rail-item:hover { background: rgba(255,255,255,0.1); }
    .rail-item.locked { opacity: 0.5; pointer-events: none; }
    .ri-icon { font-size: 14px; }
    .ri-title { flex: 1; line-height: 1.3; }
    .ri-lock { font-size: 10px; opacity: 0.85; padding: 1px 6px; border-radius: 4px; background: rgba(0,0,0,0.3); }

    /* Wallet pills */
    .wallet-row {
      display: flex; gap: 8px; flex-wrap: wrap;
      margin: 14px 0;
    }
    .wallet-pill {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 6px 12px; border-radius: 999px;
      background: rgba(255,255,255,0.08); color: white;
      border: 1px solid rgba(255,255,255,0.12);
      font-size: 13px; font-weight: 600;
    }
    .wallet-pill.coins { background: rgba(251,191,36,0.18); border-color: rgba(251,191,36,0.45); }
    .wallet-pill.stars { background: rgba(245,158,11,0.18); border-color: rgba(245,158,11,0.4); }
    .wallet-pill.streak { background: rgba(239,68,68,0.18); border-color: rgba(239,68,68,0.45); }
    .wallet-pill.achievements { background: rgba(139,92,246,0.18); border-color: rgba(139,92,246,0.45); }
    .wp-icon { font-size: 16px; }
    .wp-val  { font-weight: 800; }

    /* Toast */
    .achievement-toast {
      position: fixed; right: 24px; bottom: 24px;
      max-width: 320px; padding: 14px 18px;
      background: linear-gradient(135deg, #fbbf24, #f97316);
      color: #1f1147; border-radius: 14px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.45);
      font-size: 13.5px; line-height: 1.4;
      transform: translateY(20px); opacity: 0;
      transition: all 0.25s;
      z-index: 9999;
    }
    .achievement-toast.show { transform: translateY(0); opacity: 1; }
    .achievement-toast .at-icon { font-size: 28px; margin-right: 8px; vertical-align: middle; }
    .achievement-toast .at-title { font-weight: 800; }
    .achievement-toast .at-desc  { opacity: 0.85; font-size: 12px; margin-top: 2px; }

    /* Side rail layout (desktop ≥1024px) */
    .path-with-rail { display: grid; gap: 18px; grid-template-columns: 1fr; }
    @media (min-width: 1024px) {
      .path-with-rail { grid-template-columns: minmax(0, 1fr) 320px; }
      .path-side-rail { position: sticky; top: 88px; align-self: start; max-height: calc(100vh - 100px); overflow-y: auto; padding-right: 4px; }
    }
  `;
  const style = document.createElement('style');
  style.setAttribute('data-injected', 'path-renderer');
  style.textContent = css;
  document.head.appendChild(style);
}

/** Toast 1 achievement vừa unlock. */
export function showAchievementToast(achievement) {
  const t = document.createElement('div');
  t.className = 'achievement-toast';
  t.innerHTML = `
    <span class="at-icon">${achievement.icon}</span>
    <span>
      <span class="at-title">🏆 ${achievement.title}</span>
      <div class="at-desc">${achievement.desc}</div>
    </span>
  `;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 320);
  }, 3800);
}

/** Render wallet pill row vào host. */
export function renderWalletPills(host, { wallet, progress }) {
  const totalStars = Object.values(progress || {}).reduce((s, p) => s + (p?.stars || 0), 0);
  host.innerHTML = `
    <div class="wallet-row" id="wallet-row">
      <span class="wallet-pill stars"><span class="wp-icon">⭐</span><span class="wp-val">${totalStars}</span> sao</span>
      <span class="wallet-pill coins"><span class="wp-icon">🪙</span><span class="wp-val">${wallet.coins}</span> Pharma-coin</span>
      <span class="wallet-pill streak"><span class="wp-icon">🔥</span><span class="wp-val">${wallet.streak}</span> ngày streak</span>
      <span class="wallet-pill achievements"><span class="wp-icon">🏆</span><span class="wp-val">${wallet.achievements.length}</span> huy hiệu</span>
    </div>
  `;
}
