// SimulationClient — port từ Pharmacy-AI/src/components/SimulationClient.tsx.
// Wire chat panel + actions → /api/pharmacy/* + scoring panel.
import { buildScene, makeDrugLabelTex, makeDrugSideLabelTex, getBoxStyle, deviceModelFor } from './scene.js?v=ph0665';
import { loadDrugs } from './catalog.js?v=ph0664';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Tải model .glb thiết bị/bao bì trực tiếp (dùng chung cho inspector "mở hộp").
// Ưu tiên model thật thay vẽ tay; lỗi tải thì GIỮ NGUYÊN procedural (không clear).
const _unitGlbCache = new Map();
function unitGlbScene(file) {
  if (!_unitGlbCache.has(file)) {
    _unitGlbCache.set(file, new Promise((res, rej) =>
      new GLTFLoader().load(`./models/pharmacy/devices/${file}`, g => res(g.scene), undefined, rej)));
  }
  return _unitGlbCache.get(file);
}
function swapUnitToGlb(group, file, sizeRef) {
  unitGlbScene(file).then(src => {
    const m = src.clone(true);
    m.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    let bb = new THREE.Box3().setFromObject(m);
    const sz = bb.getSize(new THREE.Vector3());
    m.scale.setScalar(sizeRef / (Math.max(sz.x, sz.y, sz.z) || 1));
    bb = new THREE.Box3().setFromObject(m);
    m.position.sub(bb.getCenter(new THREE.Vector3()));   // canh tâm về gốc group
    while (group.children.length) group.remove(group.children[0]);  // bỏ procedural placeholder
    group.add(m);
  }).catch(() => { /* giữ procedural làm fallback */ });
}
import { openPosTerminal } from './pos.js?v=ph0664';
import { openHdsdEditor, openPackageEditor, PACKAGE_TYPES, RETAIL_FORMS } from './label-editor.js?v=ph0664';
import { STAGE_LABEL } from './rubric.js';
import { labelSectionHTML } from './drug-label.js?v=ph0664';

const $ = (id) => document.getElementById(id);

// Số viên trên 1 vỉ — đọc từ quy cách đóng gói (vd "Hộp, 3 vỉ x 14 viên" → 14).
// Mặc định 10 nếu không nhận diện được. Giới hạn 30 để vỉ không quá rộng.
function pillsPerBlister(drug) {
  const s = (drug.pack || drug.retailUnit || '').toLowerCase();
  let m = s.match(/vỉ\s*[x×*]\s*(\d+)/);          // "n vỉ x m viên"
  if (!m) m = s.match(/[x×*]\s*(\d+)\s*viên/);     // "... x m viên"
  if (!m) m = s.match(/(\d+)\s*viên\s*\/\s*vỉ/);   // "m viên/vỉ"
  return m ? Math.min(30, Math.max(1, +m[1])) : 10;
}

export async function startSimulation({ moduleId = 'gpp' } = {}) {
  // 0. Nạp danh mục thuốc từ DB (content_datasets) TRƯỚC khi buildScene — scene.js
  //    đọc ALL_DRUGS/CABINETS lúc dựng kệ. loadDrugs() fill ALL_DRUGS bằng push.
  await loadDrugs();

  // 1. Create session on server
  let session, scenario;
  try {
    const r = await fetch('/api/pharmacy/session', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ moduleId })
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.error || 'session create failed');
    session = data.session; scenario = data.scenario;
  } catch (e) {
    alert('Không khởi tạo được phiên: ' + e.message + '\nKiểm tra đăng nhập?');
    return;
  }

  // 2. Render NPC opening
  appendBubble('npc', scenario.npcOpening);
  $('npc-role').textContent = scenario.npcRole;
  $('scenario-title').textContent = scenario.title;
  $('scenario-setting').textContent = scenario.setting;

  // 3. Render hints per stage
  $('hints').innerHTML = scenario.stageRules.map(r =>
    `<li><b>${STAGE_LABEL[r.stage]}:</b> ${r.hint}</li>`
  ).join('');

  // 4. Build 3D scene
  // Avatar tuỳ biến: ưu tiên ?avatar=… → avatar đã tạo & nhớ trong localStorage →
  // null (avatar local mặc định, offline). Trình duyệt tải trực tiếp từ CDN RPM.
  const AVATAR_KEY = 'tizia_pharmacy_avatar';
  const AVATAR_HEIGHT_KEY = 'tizia_pharmacy_avatar_height';
  const AVATAR_SKIN_KEY = 'tizia_pharmacy_avatar_skin';
  const AVATAR_SHIRT_KEY = 'tizia_pharmacy_avatar_shirt';
  const SHIRT_COLORS = ['#2563eb', '#0d9488', '#16a34a', '#e11d48', '#f59e0b', '#6b7280', '#f5f5f5', '#7c3aed'];
  const _avatarUrl = new URLSearchParams(location.search).get('avatar')
    || (() => { try { return localStorage.getItem(AVATAR_KEY); } catch { return null; } })()
    || null;
  const _avatarHeight = (() => { try { return +localStorage.getItem(AVATAR_HEIGHT_KEY) || 1; } catch { return 1; } })();
  const _avatarSkin = (() => { try { return +localStorage.getItem(AVATAR_SKIN_KEY) || 0; } catch { return 0; } })();
  const _avatarShirt = (() => { try { return localStorage.getItem(AVATAR_SHIRT_KEY) || null; } catch { return null; } })();
  const sim = buildScene($('scene-canvas'), {
    avatarUrl: _avatarUrl,
    avatarHeight: _avatarHeight,
    skinTone: _avatarSkin,
    shirtColor: _avatarShirt,
    onAction: async (type, payload) => {
      await postAction(type, payload);
    },
    onPosOpen: () => openPos(),
    onLabelOpen: () => openLabel(),
    onLabelPlaceStart: (drugId, label) => openStickerPlacement(drugId, label),
    onPackageOpen: (packageType) => openPackageFlow(packageType),
    onPendingLabelClear: () => { $('pending-label').hidden = true; },
    onBookOpen: (bookId) => openReferenceBook(bookId),
    onInspectDrug: (payload) => openInspector(payload),
    onNotepadOpen: () => openNotepad(),
    onSalesTrayOpen: () => openSalesTray(),
    onRetailBasketOpen: () => openRetailBasket(),
    onWalkPrompt: (txt) => {
      const el = $('walk-prompt');
      if (!el) return;
      el.textContent = txt || '';
      el.hidden = !txt;
    },
    onToast: (msg) => showToast(msg)
  });
  window.__sim = sim;

  // GIỎ RA LẺ — gom các ĐƠN VỊ ra lẻ (vỉ/gói/viên/ống) đã tách khỏi hộp, chờ cho
  // vào bao bì ra lẻ. KHÁC với KHAY BÁN HÀNG (hộp nguyên đem tính tiền).
  const retailBasket = []; // [{ drugId, brand, strength, unit, drug }]
  function addRetailUnit(drug, unit) {
    retailBasket.push({ drugId: drug.id, brand: drug.brand || drug.name, strength: drug.strength || '', unit, drug });
  }

  // Toast nổi giữa-trên màn hình (nhắc thao tác, ví dụ phải đưa thuốc vào khay
  // trước khi dán nhãn). Tự ẩn sau 2.6s.
  let _toastTimer = null;
  function showToast(msg) {
    let t = document.getElementById('pharm-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'pharm-toast';
      t.className = 'pharm-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    if (_toastTimer) clearTimeout(_toastTimer);
    _toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
  }

  // 5. Helpers
  async function postAction(type, payload) {
    try {
      const r = await fetch('/api/pharmacy/action', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: session.id, type, payload })
      });
      const d = await r.json();
      if (d.session) session = d.session;
    } catch {}
  }

  function appendBubble(role, content) {
    const el = document.createElement('div');
    el.className = `bubble ${role}`;
    el.textContent = content;
    $('chat').appendChild(el);
    $('chat').scrollTop = $('chat').scrollHeight;
  }

  async function send() {
    const ta = $('ta');
    const text = ta.value.trim();
    if (!text) return;
    appendBubble('user', text);
    ta.value = '';
    ta.disabled = true;
    $('send').disabled = true;
    appendBubble('npc', '…');
    const thinking = $('chat').lastChild;
    try {
      const r = await fetch('/api/pharmacy/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: session.id, message: text })
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'chat failed');
      session = d.session;
      thinking.textContent = d.session.messages[d.session.messages.length - 1].content;
    } catch (e) {
      thinking.textContent = '[Lỗi: ' + e.message + ']';
    } finally {
      ta.disabled = false; $('send').disabled = false; ta.focus();
    }
  }

  async function finish() {
    if (!confirm('Kết thúc phiên & chấm điểm?')) return;
    try {
      const r = await fetch('/api/pharmacy/score', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: session.id })
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || 'score failed');
      renderScore(d.score);
    } catch (e) {
      alert('Chấm điểm thất bại: ' + e.message);
    }
  }

  function renderScore(s) {
    const el = $('score-panel');
    const stages = s.stages.map(st => `<div class="st">
      <b>${STAGE_LABEL[st.stage]}:</b> <span class="sc sc${st.score}">${st.score}/2</span>
      <small>${st.matchedKeywords.length} từ khóa khớp</small>
    </div>`).join('');
    el.innerHTML = `
      <h3>📊 Kết quả SEGUE</h3>
      <div class="total ${s.autoFail ? 'fail' : ''}">
        Tổng: <b>${s.total}/100</b>
        ${s.autoFail ? '<span class="fail-tag">AUTO-FAIL</span>' : ''}
      </div>
      <div class="breakdown">Trọng số: ${s.weighted} · Bonus: +${s.bonus}</div>
      ${s.fatalErrors.length ? '<div class="fatals">' + s.fatalErrors.map(f => `<div class="fatal">⛔ <b>${f.label}</b><br><small>${f.evidence}</small></div>`).join('') + '</div>' : ''}
      <div class="stages">${stages}</div>
      <details><summary>Feedback chi tiết</summary><pre>${s.feedback}</pre></details>
    `;
    el.hidden = false;
  }

  function openPos() {
    const hasRx = !!$('rx-toggle').checked;
    openPosTerminal({
      pickedIds: sim.getPickedIds(),
      hasValidPrescription: hasRx,
      onCheckout: (payload) => postAction('pos_checkout', payload),
      onClose: () => {}
    });
  }
  function openLabel() {
    openHdsdEditor({
      pickedIds: sim.getPickedIds(),
      onCreate: (label) => {
        sim.setPendingLabel(label);
        $('pending-label').hidden = false;
        $('pending-label-text').textContent = `${label.brand} → click hộp ĐÃ ĐƯA VÀO KHAY để dán (không dán trên kệ)`;
        if (!(sim.getPickedIds?.() || []).length) {
          showToast('Chưa có thuốc trong khay. Bấm hộp trên kệ → "Đưa vào khay" trước, rồi click hộp trong khay để dán nhãn.');
        }
      }
    });
  }

  // Overlay: hiện ĐÚNG hình 3D thuốc (hộp HOẶC chai) + kéo nhãn HDSD vào chỗ trống.
  function openStickerPlacement(drugId, label) {
    // getDrugFace3D render chính hình 3D (hộp/chai) → hết cảnh "chai mà hiện hộp".
    const face = sim.getDrugFace3D?.(drugId) || sim.getDrugFace?.(drugId);
    if (!face) { sim.applyHdsdSticker?.(drugId, label, { u: 0.5, v: 0.5 }); return; }
    if (document.querySelector('.sticker-place-overlay')) return;
    const shapeWord = face.isBottle ? 'chai' : 'hộp';
    const overlay = document.createElement('div');
    overlay.className = 'sticker-place-overlay';
    overlay.innerHTML = `
      <div class="sp-modal">
        <div class="sp-head">
          <span>🏷️ Dán nhãn HDSD lên ${shapeWord} <b>${face.brand || ''}</b></span>
          <button class="sp-close" type="button" aria-label="Đóng">✕</button>
        </div>
        <div class="sp-hint">Kéo nhãn tới <b>vùng trống</b> trên ${shapeWord}, không che tên/thông tin thuốc.${face.isBottle ? ' Nhãn sẽ <b>uốn cong ôm thân chai</b> khi dán.' : ''} Rồi bấm <b>Dán</b>.</div>
        <div class="sp-stage">
          <div class="sp-box">
            <canvas class="sp-face"></canvas>
            <canvas class="sp-sticker" title="Kéo nhãn vào vùng trống"></canvas>
          </div>
        </div>
        <div class="sp-foot">
          <button class="sp-cancel" type="button">Huỷ</button>
          <button class="sp-apply" type="button">✅ Dán nhãn</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const cv = overlay.querySelector('.sp-face');
    const box = overlay.querySelector('.sp-box');
    const sticker = overlay.querySelector('.sp-sticker');
    // Vẽ mặt hộp (canvas 256×320) — giữ tỉ lệ trong khung cố định cao 360px
    const FACE_H = 360, FACE_W = Math.round(FACE_H * (face.canvas.width / face.canvas.height));
    cv.width = face.canvas.width; cv.height = face.canvas.height;
    cv.getContext('2d').drawImage(face.canvas, 0, 0);
    cv.style.width = FACE_W + 'px'; cv.style.height = FACE_H + 'px';
    box.style.width = FACE_W + 'px'; box.style.height = FACE_H + 'px';
    // Nhãn kéo-thả = ĐÚNG thiết kế nhãn HDSD sẽ in lên hộp (WYSIWYG): render
    // texture nhãn PORTRAIT 360×480 (cùng hàm + cùng tỉ lệ với lúc dán thật).
    const stickerTex = sim.makeHdsdStickerTex?.(label);
    let skRatio = 480 / 360;
    if (stickerTex?.image) {
      sticker.width = stickerTex.image.width; sticker.height = stickerTex.image.height;
      skRatio = stickerTex.image.height / stickerTex.image.width;
      sticker.getContext('2d').drawImage(stickerTex.image, 0, 0);
      stickerTex.dispose?.();
    }
    const SK_W = Math.round(FACE_W * 0.5);
    sticker.style.width = SK_W + 'px';
    sticker.style.height = Math.round(SK_W * skRatio) + 'px';
    // Sticker vị trí ban đầu: góc dưới (chỗ thường trống)
    let u = 0.5, v = 0.78;
    function place() {
      const bw = box.offsetWidth || FACE_W, bh = box.offsetHeight || FACE_H;
      const sw = sticker.offsetWidth, sh = sticker.offsetHeight;
      let x = u * bw - sw / 2, y = v * bh - sh / 2;
      x = Math.max(0, Math.min(bw - sw, x));
      y = Math.max(0, Math.min(bh - sh, y));
      sticker.style.left = x + 'px'; sticker.style.top = y + 'px';
      u = (x + sw / 2) / bw; v = (y + sh / 2) / bh;
    }
    place();                       // đặt ngay (đọc offsetWidth ép reflow)
    setTimeout(place, 60);         // chạy lại sau layout cho chắc
    // Kéo-thả (pointer)
    let drag = false, offX = 0, offY = 0;
    sticker.addEventListener('pointerdown', (e) => {
      drag = true; sticker.setPointerCapture(e.pointerId);
      const r = box.getBoundingClientRect(), sr = sticker.getBoundingClientRect();
      offX = e.clientX - sr.left; offY = e.clientY - sr.top;
    });
    sticker.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const r = box.getBoundingClientRect();
      const bw = box.offsetWidth, bh = box.offsetHeight;
      const sw = sticker.offsetWidth, sh = sticker.offsetHeight;
      let x = e.clientX - r.left - offX, y = e.clientY - r.top - offY;
      x = Math.max(0, Math.min(bw - sw, x));
      y = Math.max(0, Math.min(bh - sh, y));
      sticker.style.left = x + 'px'; sticker.style.top = y + 'px';
      u = (x + sw / 2) / bw; v = (y + sh / 2) / bh;
    });
    sticker.addEventListener('pointerup', () => { drag = false; });
    const close = () => { document.removeEventListener('keydown', esc); overlay.remove(); };
    const esc = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', esc);
    overlay.querySelector('.sp-close').addEventListener('click', close);
    overlay.querySelector('.sp-cancel').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    overlay.querySelector('.sp-apply').addEventListener('click', () => {
      sim.applyHdsdSticker?.(drugId, label, { u, v });
      close();
    });
  }

  // Bao bì ra lẻ: chọn đơn vị từ GIỎ RA LẺ + dạng (vỉ/gói/viên/ống) → ghi nhãn phong bì.
  const UNIT_TO_FORM = { 'vỉ': 'vi', 'gói': 'goi', 'viên': 'vien', 'ống': 'ong' };
  function openPackageFlow(packageType) {
    if (document.querySelector('.pkgflow-overlay')) return;
    const pkg = PACKAGE_TYPES[packageType] || PACKAGE_TYPES.white;
    const catMap = {};
    (sim.getCatalog?.() || []).forEach(it => { catMap[it.drug.id] = it.drug; });
    // Nguồn: ưu tiên GIỎ RA LẺ (đơn vị đã tách). Giỏ trống → khay bán hàng / catalog.
    const fromBasket = retailBasket.length > 0;
    let choices; // [{ value, label, drug, unit }]
    if (fromBasket) {
      choices = retailBasket.map((it, i) => ({ value: String(i), label: `${it.brand}${it.strength ? ' · ' + it.strength : ''} (${it.unit})`, drug: it.drug, unit: it.unit }));
    } else {
      const picked = sim.getPickedIds();
      const base = picked.length ? picked.map(id => catMap[id]).filter(Boolean)
                                 : (sim.getCatalog?.() || []).slice(0, 40).map(it => it.drug);
      choices = base.map(d => ({ value: d.id, label: `${d.brand || d.name} ${d.strength || ''}`, drug: d, unit: null }));
    }
    const overlay = document.createElement('div');
    overlay.className = 'pkgflow-overlay';
    overlay.innerHTML = `
      <div class="pkgflow-modal">
        <div class="sp-head">
          <span>✉️ Đóng gói ra lẻ — <b>${pkg.label}</b></span>
          <button class="pkgflow-close" type="button" aria-label="Đóng">✕</button>
        </div>
        <div class="sp-hint">${pkg.airtight
          ? 'Túi zip kín khí — chọn đơn vị từ giỏ ra lẻ để đựng (không in nhãn).'
          : (fromBasket ? 'Chọn đơn vị từ <b>GIỎ RA LẺ</b> và dạng đóng gói, rồi ghi nhãn theo mẫu.'
                        : 'Giỏ ra lẻ đang trống — chọn tạm từ catalog. (Nên ra lẻ thuốc vào giỏ trước.)')}</div>
        <label class="le2-field">
          <span class="le2-lbl">${fromBasket ? 'Đơn vị trong giỏ ra lẻ' : 'Chọn thuốc'}</span>
          <select class="pkgflow-drug">
            ${choices.length ? choices.map(c => `<option value="${c.value}">${c.label}</option>`).join('')
                             : '<option value="">— Giỏ ra lẻ trống —</option>'}
          </select>
        </label>
        <div class="le2-lbl" style="margin-top:8px">Dạng đóng gói</div>
        <div class="le2-chips pkgflow-forms">
          ${RETAIL_FORMS.map(f => `<button class="le2-chip pkgflow-form" data-v="${f.value}" type="button">${f.label}</button>`).join('')}
        </div>
        <div class="sp-foot">
          <button class="pkgflow-cancel" type="button">Huỷ</button>
          <button class="pkgflow-next" type="button">${pkg.airtight ? '📦 Cho vào túi zip' : '➡️ Cho vào bao bì & ghi nhãn'}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const sel = overlay.querySelector('.pkgflow-drug');
    let formType = RETAIL_FORMS[0].value;
    const setForm = (v) => {
      formType = v;
      overlay.querySelectorAll('.pkgflow-form').forEach(x => x.classList.toggle('le2-chip-active', x.dataset.v === v));
    };
    const syncFormToSelection = () => {
      const c = choices.find(x => x.value === sel.value);
      setForm((c && UNIT_TO_FORM[c.unit]) || formType);
    };
    overlay.querySelectorAll('.pkgflow-form').forEach(b => b.addEventListener('click', () => setForm(b.dataset.v)));
    sel.addEventListener('change', syncFormToSelection);
    setForm(RETAIL_FORMS[0].value); syncFormToSelection();
    const close = () => { document.removeEventListener('keydown', esc); overlay.remove(); };
    const esc = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', esc);
    overlay.querySelector('.pkgflow-close').addEventListener('click', close);
    overlay.querySelector('.pkgflow-cancel').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    overlay.querySelector('.pkgflow-next').addEventListener('click', () => {
      const chosen = choices.find(c => c.value === sel.value);
      if (!chosen) { alert('Giỏ ra lẻ trống. Mở 1 hộp thuốc → "Mở hộp lấy vỉ/gói…" để gom đơn vị vào giỏ trước.'); return; }
      const drug = chosen.drug;
      postAction('pack_retail', { drugId: drug.id, packageType, formType });
      if (fromBasket) retailBasket.splice(+chosen.value, 1); // đã đóng gói → bỏ khỏi giỏ
      close();
      if (pkg.airtight) {
        sim.pickToTray?.(drug.id);   // hiện trong KHAY BÁN HÀNG như các thuốc khác
        alert(`Đã cho ${RETAIL_FORMS.find(f => f.value === formType)?.label || ''} "${drug?.brand || ''}" vào túi zip kín khí.\n→ Món hàng đã vào KHAY BÁN HÀNG, mở POS để tính tiền.`);
        return;
      }
      openPackageEditor({
        drug, formType, packageType,
        onCreate: (lbl) => {
          postAction('pack_label', lbl);
          sim.pickToTray?.(drug.id);   // đóng gói xong → hiện trong KHAY BÁN HÀNG
          showToast?.(`Đã đóng gói "${drug.brand || ''}" vào ${pkg.label} → đã vào KHAY BÁN HÀNG.`);
        }
      });
    });
  }

  // Notepad modal — bấm vào tờ giấy/bút trên bàn tư vấn để mở sổ ghi chép.
  // Nội dung lưu localStorage per-session để giữ giữa các phiên.
  function openNotepad() {
    if (document.querySelector('.notepad-overlay')) return;
    const KEY = 'tizia:pharm:notes';
    const overlay = document.createElement('div');
    overlay.className = 'notepad-overlay';
    overlay.innerHTML = `
      <div class="notepad-modal">
        <div class="notepad-head">
          <span>📝 Sổ ghi chép tư vấn</span>
          <button class="notepad-close" type="button" aria-label="Đóng">✕</button>
        </div>
        <textarea class="notepad-area" placeholder="Ghi chép triệu chứng, dị ứng, thuốc đang dùng, lời khuyên..."></textarea>
        <div class="notepad-foot">
          <span class="notepad-saved">Tự lưu khi gõ</span>
          <button class="notepad-clear" type="button">🗑 Xoá hết</button>
          <button class="notepad-done" type="button">✅ Xong</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const ta = overlay.querySelector('.notepad-area');
    const saved = overlay.querySelector('.notepad-saved');
    ta.value = localStorage.getItem(KEY) || '';
    ta.focus();
    const save = () => { localStorage.setItem(KEY, ta.value); saved.textContent = '✓ Đã lưu'; };
    ta.addEventListener('input', save);
    const close = () => { overlay.remove(); document.removeEventListener('keydown', esc); };
    const esc = (e) => { if (e.key === 'Escape') close(); };
    overlay.querySelector('.notepad-close').addEventListener('click', close);
    overlay.querySelector('.notepad-done').addEventListener('click', close);
    overlay.querySelector('.notepad-clear').addEventListener('click', () => { ta.value = ''; save(); });
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', esc);
  }

  // Sales tray modal — bấm vào khay bán hàng để xem danh sách hộp thuốc đã
  // chuẩn bị (= picked drugs hiện tại). Hiện snapshot, không thay đổi pick.
  function openSalesTray() {
    if (document.querySelector('.salestray-overlay')) return;
    const picked = sim.getPickedIds();
    const catMap = {};
    (sim.getCatalog?.() || []).forEach(it => { catMap[it.drug.id] = it; });
    const overlay = document.createElement('div');
    overlay.className = 'salestray-overlay';
    overlay.innerHTML = `
      <div class="salestray-modal">
        <div class="salestray-head">
          <span>🛒 Khay bán hàng — đã chuẩn bị (${picked.length})</span>
          <button class="salestray-close" type="button" aria-label="Đóng">✕</button>
        </div>
        <div class="salestray-body">
          ${picked.length === 0
            ? '<div class="salestray-empty">Chưa có thuốc nào trong khay.<br>Click vào hộp thuốc trên kệ để đưa vào khay.</div>'
            : '<ul class="salestray-list">' + picked.map(id => {
                const it = catMap[id];
                const name = it ? (it.drug.brand || it.drug.name || id) : id;
                return `<li><button class="salestray-item" type="button" data-id="${id}">💊 ${name} <span class="sti-go">› xem chi tiết</span></button></li>`;
              }).join('') + '</ul>'}
        </div>
        <div class="salestray-foot">
          <button class="salestray-done" type="button">Đóng</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const close = () => { overlay.remove(); document.removeEventListener('keydown', esc); };
    const esc = (e) => { if (e.key === 'Escape') close(); };
    overlay.querySelector('.salestray-close').addEventListener('click', close);
    overlay.querySelector('.salestray-done').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    // Bấm 1 thuốc trong khay → mở cửa sổ chi tiết (ẩn nút "Đưa vào khay" vì đã ở khay).
    overlay.querySelectorAll('.salestray-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const it = catMap[btn.dataset.id];
        if (!it) return;
        close();
        openInspector({ drug: it.drug, meta: it.meta, fromTray: true, returnToShelf: () => {}, confirmToTray: () => {} });
      });
    });
    document.addEventListener('keydown', esc);
  }

  // 6. Camera preset buttons
  // Góc nhìn — gom các preset vào 1 dropdown gọn (thay vì dải nút wrap 2 hàng che ngăn tủ).
  const camSelect = $('cam-select');
  const presetKeys = Object.keys(sim.cameraPresets);
  function applyPreset(key) {
    if (!sim.cameraPresets[key]) return;
    sim.setCameraPreset(key);
    if (camSelect) camSelect.value = key;
  }
  if (camSelect) {
    camSelect.innerHTML = Object.entries(sim.cameraPresets).map(([k, p], i) => {
      const hot = i < 9 ? ` [${i + 1}]` : (i === 9 ? ' [0]' : '');
      return `<option value="${k}" ${k === 'default' ? 'selected' : ''}>${p.label}${hot}</option>`;
    }).join('');
    camSelect.addEventListener('change', () => applyPreset(camSelect.value));
  }
  // 6a1. HOTKEY góc nhìn: phím 1–9 + 0 chuyển nhanh 10 góc nhìn đầu (bỏ qua khi đang
  // gõ trong ô nhập / có modal mở). [ ] để lùi/tiến tuần tự qua mọi preset.
  document.addEventListener('keydown', (e) => {
    const a = document.activeElement;
    if (a && (a.tagName === 'INPUT' || a.tagName === 'TEXTAREA' || a.isContentEditable)) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.querySelector('.inspector-overlay, .pos-overlay, .label-overlay-v2, .pkg-overlay, .pkgflow-overlay, .salestray-overlay, .sticker-place-overlay, .notepad-overlay, .rpm-overlay')) return;
    let idx = -1;
    if (/^[1-9]$/.test(e.key)) idx = +e.key - 1;
    else if (e.key === '0') idx = 9;
    else if (e.key === '[' || e.key === ']') {
      const cur = camSelect ? presetKeys.indexOf(camSelect.value) : 0;
      idx = (cur + (e.key === ']' ? 1 : -1) + presetKeys.length) % presetKeys.length;
    }
    if (idx >= 0 && idx < presetKeys.length) { applyPreset(presetKeys[idx]); e.preventDefault(); }
  });
  // 6a-cancel. Huỷ nhãn HDSD đang chờ dán (con trỏ đang "mang" nhãn).
  const pendingCancel = $('pending-label-cancel');
  if (pendingCancel) {
    pendingCancel.addEventListener('click', () => {
      sim.setPendingLabel(null);
      $('pending-label').hidden = true;
    });
  }

  // 6a2. Nút bật/tắt chế độ đi dạo (nhập vai nhân vật người thật).
  const walkBtn = $('walk-toggle');
  if (walkBtn && sim.setWalkMode) {
    walkBtn.addEventListener('click', () => {
      const on = !sim.isWalkMode();
      sim.setWalkMode(on);
      walkBtn.classList.toggle('active', on);
      walkBtn.textContent = on ? '🚶 Thoát đi dạo' : '🚶 Đi dạo (nhập vai)';
      const hint = $('walk-hint');
      if (hint) hint.hidden = !on;
      if (!on) { const p = $('walk-prompt'); if (p) p.hidden = true; }
    });
  }

  // 6a3. Chọn nhân vật (bệnh nhân) — SELF-HOST, không phụ thuộc Ready Player Me
  // (RPM bị chặn ở mạng VN). Chỉ chọn Nam/Nữ + chỉnh chiều cao/vóc dáng; nhớ qua
  // localStorage. Avatar nạp từ ./models/pharmacy/avatar/ trên chính tizia.vn.
  const avatarBtn = $('avatar-create');
  if (avatarBtn && sim.reloadAvatar) {
    const PRESETS = {
      nam: './models/pharmacy/avatar/Masculine_TPose.glb',
      nu: './models/pharmacy/avatar/Feminine_TPose.glb'
    };
    let overlay = null;
    const closeAvatarModal = () => { if (overlay) { overlay.remove(); overlay = null; } };
    function applyAvatar(url) {
      if (!url) return;
      try { localStorage.setItem(AVATAR_KEY, url); } catch {}
      sim.reloadAvatar(url);
      // reloadAvatar tạo lại nhân vật → áp lại chiều cao đang chọn
      const h = sim.getAvatarHeight ? sim.getAvatarHeight() : 1;
      setTimeout(() => sim.setAvatarHeight && sim.setAvatarHeight(h), 80);
    }
    avatarBtn.addEventListener('click', () => {
      if (overlay) return;
      const curH = sim.getAvatarHeight ? sim.getAvatarHeight() : 1;
      const curSkin = sim.getAvatarSkin ? sim.getAvatarSkin() : 0;
      const curShirt = sim.getAvatarShirt ? sim.getAvatarShirt() : null;
      // {i: index thật trong SKIN_TONES, c: màu xem trước} — xếp sáng → đậm.
      const SKIN_SW = [
        { i: 2, c: '#fadcc8' }, // rất sáng
        { i: 1, c: '#f0c7a8' }, // sáng
        { i: 0, c: '#e3b491' }, // mặc định
        { i: 3, c: '#bd8b62' }, // ngăm
        { i: 4, c: '#9a6a45' }, // nâu
        { i: 5, c: '#6e4a34' }  // đậm
      ];
      const isNu = (() => { try { return (localStorage.getItem(AVATAR_KEY) || '').includes('Feminine'); } catch { return false; } })();
      overlay = document.createElement('div');
      overlay.className = 'rpm-overlay';
      overlay.innerHTML = `
        <div class="rpm-modal rpm-modal-sm">
          <div class="rpm-head"><b>🧑 Chọn nhân vật (bệnh nhân)</b>
            <button class="rpm-close" type="button" aria-label="Đóng">✕</button></div>
          <div class="rpm-body">
            <div class="rpm-section">Giới tính</div>
            <div class="rpm-presets">
              <button class="rpm-preset ${isNu ? '' : 'on'}" data-k="nam" type="button">🧑 Nam</button>
              <button class="rpm-preset ${isNu ? 'on' : ''}" data-k="nu" type="button">👩 Nữ</button>
            </div>
            <div class="rpm-section">Chiều cao / vóc dáng</div>
            <div class="rpm-slider">
              <span>Thấp</span>
              <input id="rpm-height" type="range" min="0.9" max="1.12" step="0.01" value="${curH}" />
              <span>Cao</span>
            </div>
            <div id="rpm-hval" class="rpm-msg"></div>
            <div class="rpm-section">Tông da</div>
            <div class="rpm-swatches" id="rpm-skins">
              ${SKIN_SW.map(o => `<button class="rpm-sw ${o.i === curSkin ? 'on' : ''}" data-skin="${o.i}" style="background:${o.c}"></button>`).join('')}
            </div>
            <div class="rpm-section">Màu áo</div>
            <div class="rpm-swatches" id="rpm-shirts">
              ${SHIRT_COLORS.map(c => `<button class="rpm-sw ${c === curShirt ? 'on' : ''}" data-shirt="${c}" style="background:${c}"></button>`).join('')}
            </div>
          </div>
        </div>`;
      document.body.appendChild(overlay);
      const presets = overlay.querySelectorAll('.rpm-preset');
      presets.forEach(b => b.addEventListener('click', () => {
        presets.forEach(x => x.classList.toggle('on', x === b));
        applyAvatar(PRESETS[b.dataset.k]);
      }));
      const slider = overlay.querySelector('#rpm-height');
      const hval = overlay.querySelector('#rpm-hval');
      const showH = (v) => { hval.textContent = 'Khoảng ' + Math.round(170 * v) + ' cm'; };
      showH(+slider.value);
      slider.addEventListener('input', () => {
        const v = +slider.value;
        sim.setAvatarHeight && sim.setAvatarHeight(v);
        try { localStorage.setItem(AVATAR_HEIGHT_KEY, String(v)); } catch {}
        showH(v);
      });
      overlay.querySelectorAll('#rpm-skins .rpm-sw').forEach(b => b.addEventListener('click', () => {
        overlay.querySelectorAll('#rpm-skins .rpm-sw').forEach(x => x.classList.toggle('on', x === b));
        const t = +b.dataset.skin; sim.setAvatarSkin && sim.setAvatarSkin(t);
        try { localStorage.setItem(AVATAR_SKIN_KEY, String(t)); } catch {}
      }));
      overlay.querySelectorAll('#rpm-shirts .rpm-sw').forEach(b => b.addEventListener('click', () => {
        overlay.querySelectorAll('#rpm-shirts .rpm-sw').forEach(x => x.classList.toggle('on', x === b));
        const hex = b.dataset.shirt; sim.setAvatarShirt && sim.setAvatarShirt(hex);
        try { localStorage.setItem(AVATAR_SHIRT_KEY, hex); } catch {}
      }));
      overlay.querySelector('.rpm-close').addEventListener('click', closeAvatarModal);
      overlay.addEventListener('click', (e) => { if (e.target === overlay) closeAvatarModal(); });
    });
  }

  // 6b. Pan dọc theo ngăn tủ (▲ lên / ▼ xuống). Giữ chuột để lặp liên tục.
  const bindVpan = (id, dir) => {
    const el = $(id);
    if (!el || !sim.nudgeVertical) return;
    let timer = null;
    const fire = () => sim.nudgeVertical(dir);
    const start = (e) => { e.preventDefault(); fire(); timer = setInterval(fire, 260); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
    el.addEventListener('pointerdown', start);
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => el.addEventListener(ev, stop));
  };
  bindVpan('vpan-up', +1);
  bindVpan('vpan-down', -1);

  // Nhãn TIẾP XÚC TRỰC TIẾP (TT 3.2) IN THẲNG lên vỉ/lọ/ống — canvas để dán lên
  // mô hình 3D đơn vị ra lẻ (thay vì chỉ hiện card HTML). Trắng, viền nhóm, Rx +
  // tên + thành phần (≤3 hoạt chất) + Lô/HSD + nhà SX.
  function makeContactLabelTex(drug, meta) {
    const W = 360, H = 200;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    const rr = (x, y, w, h, r) => { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); };
    ctx.fillStyle = '#ffffff'; rr(3, 3, W - 6, H - 6, 12); ctx.fill();
    ctx.strokeStyle = drug.groupAccent || '#0d9488'; ctx.lineWidth = 3; ctx.stroke();
    ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
    let x = 18, y = 30;
    if (drug.isRx) {
      ctx.fillStyle = '#b91c1c'; rr(x, y - 13, 36, 26, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 15px Inter, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText('Rx', x + 18, y); ctx.textAlign = 'left'; x += 46;
    }
    ctx.fillStyle = '#0f172a'; ctx.font = 'bold 21px Inter, sans-serif';
    ctx.fillText((drug.brand || drug.name || '').slice(0, 22), x, y);
    y += 30;
    const comp = String(drug.activeIngredient || drug.generic || '');
    const nAct = comp.split(/;|\s\+\s/).map(s => s.trim()).filter(Boolean).length;
    if (comp && nAct <= 3) {
      ctx.fillStyle = '#334155'; ctx.font = '13px Inter, sans-serif';
      const words = comp.split(' '); let line = '';
      for (const w of words) {
        const t = line ? line + ' ' + w : w;
        if (ctx.measureText(t).width > W - 36 && line) { ctx.fillText(line, 18, y); y += 18; line = w; }
        else line = t;
      }
      if (line) { ctx.fillText(line, 18, y); y += 18; }
    }
    y = Math.max(y, 120);
    const lot = drug.lot || meta?.lot || '—', exp = drug.expDate || meta?.expiry || '—';
    ctx.fillStyle = '#0f172a'; ctx.font = 'bold 14px Inter, sans-serif';
    ctx.fillText(`Lô: ${lot}`, 18, y); ctx.fillText(`HSD: ${exp}`, 180, y);
    ctx.fillStyle = '#64748b'; ctx.font = '12px Inter, sans-serif';
    ctx.fillText((drug.manufacturer || '—').slice(0, 44), 18, 178);
    const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // P3: Inspector modal — hộp thuốc zoom giữa màn hình, tự xoay, drag xoay,
  // info panel + 2 nút (Đưa vào khay / Trả về kệ). Dùng mini-scene Three.js riêng.
  function openInspector({ drug, meta, confirmToTray, returnToShelf, fromTray = false }) {
    // Khi mở từ khay bán hàng (hoặc thuốc đã nằm trong khay) → ẩn nút "Đưa vào
    // khay" vì đã ở trên khay rồi.
    const alreadyInTray = fromTray || (sim.getPickedIds?.() || []).includes(drug.id);
    // Quy cách bao bì ngoài: carton (hộp) vs bottle/infusion (chai). Chai bán
    // NGUYÊN CHAI (không tách lẻ) → ẩn nút "Tách lẻ", chỉ "Đưa vào khay".
    const pkgKind = (() => {
      const f = (drug.form || '').toLowerCase();
      const p = (drug.pack || drug.packaging || '').trim().toLowerCase();
      if (/truyền/.test(f)) return 'infusion';
      if (/^chai/.test(p) && !/hộp/.test(p)) return 'bottle';
      return 'carton';
    })();
    const overlay = document.createElement('div');
    overlay.className = 'inspector-overlay';
    overlay.innerHTML = `
      <div class="inspector-modal">
        <button class="ins-close" type="button" aria-label="Đóng">✕</button>
        <div class="inspector-3d"><canvas class="ins-canvas"></canvas></div>
        <div class="inspector-info">
          <!-- Phần cuộn (thông tin + nhãn). 3 nút nằm NGOÀI vùng cuộn → ghim sát
               đáy dialog, không bị nội dung che/đẩy (thầy yêu cầu sát đáy). -->
          <div class="ins-scroll">
            <div class="ins-head">
              <div class="ins-brand">${drug.brand || drug.name}</div>
              <div class="ins-generic">${drug.generic || ''} · ${drug.strength || ''}</div>
              ${drug.isRx ? '<span class="ins-tag ins-rx">Rx · Kê đơn</span>' : '<span class="ins-tag ins-otc">OTC</span>'}
              ${drug.isAntibiotic ? '<span class="ins-tag ins-abx">Kháng sinh</span>' : ''}
              ${drug.isHazardPregnancy ? '<span class="ins-tag ins-warn">⚠️ Thai kỳ</span>' : ''}
            </div>
            <!-- Bỏ bảng thông tin trùng với nhãn — chỉ giữ thông tin VẬN HÀNH
                 không có trên nhãn: tồn kho, đơn giá, mã vạch. -->
            <div class="ins-meta">
              <span>📦 Tồn kho: <b>${meta.stock} hộp</b></span>
              <span>💵 Đơn giá: <b>${(drug.unitPrice || 0).toLocaleString('vi')} đ</b></span>
              <span>🏷️ <code>${drug.barcode || drug.sku || '—'}</code></span>
            </div>
            ${labelSectionHTML(drug, meta)}
          </div>
          <div class="ins-actions">
            <button class="ins-return" type="button">↩ Trả về kệ</button>
            ${pkgKind === 'carton' ? `<button class="ins-retail" type="button">🔓 Tách lẻ (${drug.unit || 'đơn vị'})</button>` : ''}
            ${alreadyInTray ? '' : '<button class="ins-confirm" type="button">📥 Đưa vào khay (Quét barcode)</button>'}
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlay);

    const canvas = overlay.querySelector('.ins-canvas');
    // Mini-scene Three.js
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const fit = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
    };
    const scene2 = new THREE.Scene();
    scene2.background = new THREE.Color(0x0f172a);
    const camera2 = new THREE.PerspectiveCamera(35, 1, 0.01, 10);
    // Distance trước đây fixed 0.62m cho box 0.27m cao. Nay box đổi theo dạng,
    // distance tỷ lệ với chiều cao + chiều rộng để box luôn lọt khung.
    // Tính sau khi build box (xem dưới).
    camera2.position.set(0.0, 0.05, 0.62);
    // Lighting sáng hơn (ambient 0.9 + 2 dir 1.1 / 0.5) để màu accent đỏ/cam
    // trên nhãn hộp hiển thị đúng tông, không bị tối thành xám.
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene2.add(ambient);
    const dir1 = new THREE.DirectionalLight(0xffffff, 1.1);
    dir1.position.set(0.3, 0.5, 0.4);
    scene2.add(dir1);
    const dir2 = new THREE.DirectionalLight(0xffffff, 0.5);
    dir2.position.set(-0.3, -0.2, -0.4);
    scene2.add(dir2);
    // OrbitControls cho drag xoay manual
    const ctrl = new OrbitControls(camera2, canvas);
    ctrl.enableDamping = true;
    ctrl.minDistance = 0.18; ctrl.maxDistance = 1.2;
    ctrl.enablePan = false;
    ctrl.autoRotate = true;
    ctrl.autoRotateSpeed = 1.5;
    // Khi user kéo → tắt auto-rotate
    ctrl.addEventListener('start', () => { ctrl.autoRotate = false; });

    // Build hộp thuốc 3D — DÙNG CHÍNH makeDrugLabelTex từ scene.js để
    // tem inspector KHỚP 100% với tem trên kệ (cùng variant + watermark +
    // badge theo hash SKU). Trước đây inspector vẽ riêng → 2 nơi khác nhau.
    const body = drug.bodyColor || '#f8fafc';
    // Lấy ĐÚNG dim hộp như trên kệ (theo dạng bào chế + scale per-SKU).
    // Nhân lên ~1.7x để hộp inspector to gấp ~2 so với shelf (xem cho rõ),
    // nhưng GIỮ TỶ LỆ → spray cao thì inspector cũng cao, tablet hộp ngắn thì
    // inspector ngắn — KHÔNG còn fix cứng 0.18×0.27.
    const style = getBoxStyle(drug);
    const SCALE = 1.7;
    const w = style.w * SCALE;
    const h = style.h * SCALE;
    const d = style.d * SCALE;
    // Camera lùi đủ xa: dist ≈ max(w,h) × 1.9 để hộp cao lẫn rộng đều lọt khung
    const camDist = Math.max(w, h) * 1.9;
    camera2.position.set(0, 0, camDist);
    ctrl.minDistance = camDist * 0.4;
    ctrl.maxDistance = camDist * 3;
    ctrl.update();
    const boxMat = new THREE.MeshStandardMaterial({ color: body, roughness: 0.75 });
    const accent = drug.groupAccent || '#0d9488';
    // NHÃN ÁP TRỰC TIẾP lên mặt hộp (multi-material) — KHÔNG còn plane nổi + dải
    // stripe 3D như trước → hết z-fighting, dải trang trí không đè chữ (chữ nằm
    // trong texture, luôn là lớp trên cùng của mặt hộp).
    const tex = makeDrugLabelTex(drug); tex.anisotropy = 4;
    const frontMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 });
    // Mặt sau: nhãn tóm tắt (canvas riêng)
    const lc2 = document.createElement('canvas'); lc2.width = 512; lc2.height = 768;
    const lc2x = lc2.getContext('2d');
    lc2x.fillStyle = body; lc2x.fillRect(0, 0, 512, 768);
    lc2x.fillStyle = accent; lc2x.fillRect(0, 720, 512, 48);
    lc2x.fillStyle = '#0f172a'; lc2x.font = '28px Inter, sans-serif';
    lc2x.textAlign = 'left'; lc2x.textBaseline = 'top';
    lc2x.fillText('Thành phần:', 30, 40);
    lc2x.font = '24px Inter, sans-serif';
    lc2x.fillText(`${drug.generic || drug.name}`, 30, 80);
    lc2x.fillText(`Hàm lượng: ${drug.strength || '—'}`, 30, 130);
    lc2x.fillText(`Quy cách: ${drug.pack || '—'}`, 30, 180);
    lc2x.fillText(`Dạng: ${drug.form || '—'}`, 30, 230);
    lc2x.font = 'bold 22px Inter, sans-serif'; lc2x.fillStyle = '#7f1d1d';
    lc2x.fillText(drug.isRx ? '⚠ THUỐC KÊ ĐƠN (Rx)' : 'OTC – Không kê đơn', 30, 300);
    if (drug.isAntibiotic) lc2x.fillText('💊 Kháng sinh – chú ý chỉ định', 30, 340);
    if (drug.isHazardPregnancy) lc2x.fillText('⚠ Cẩn trọng phụ nữ có thai', 30, 380);
    lc2x.fillStyle = '#fef9c3'; lc2x.font = 'bold 32px Inter, sans-serif';
    lc2x.textAlign = 'center'; lc2x.textBaseline = 'middle';
    lc2x.fillText((drug.brand || drug.name || ''), 256, 744);
    const tex2 = new THREE.CanvasTexture(lc2);
    tex2.colorSpace = THREE.SRGBColorSpace;
    // Mặt -Z của BoxGeometry nhìn từ phía sau đọc XUÔI với texture thường (UV nz
    // đã đảo chiều ngang sẵn). Trước đây lật repeat.x=-1 → chữ bị ngược → bỏ.
    const backMat = new THREE.MeshStandardMaterial({ map: tex2, roughness: 0.6 });
    // Bao bì NGOÀI phải đúng QUY CÁCH đóng gói: "Chai …ml"/dịch truyền → CHAI
    // thật (không có hộp giấy ngoài). Khớp packType()+buildBottlePackage() của
    // scene.js để inspector hiện đúng hình như trên kệ (user phản ánh: kệ là chai
    // nhưng bấm vào lại ra hộp).
    const sideTex = makeDrugSideLabelTex(drug);
    // pkgKind đã tính ở đầu openInspector (dùng chung cho nút + 3D).
    const devMain = deviceModelFor(drug);
    if (devMain) {
      // THIẾT BỊ có model .glb → hiển thị CHÍNH model đó (khớp 100% với trên kệ),
      // không dựng hộp giấy. Auto-rotate của OrbitControls xoay quanh gốc.
      const g = new THREE.Group();
      scene2.add(g);
      swapUnitToGlb(g, devMain.file, Math.max(w, h) * 1.05);
    } else if (pkgKind === 'carton') {
      // HỘP GIẤY: BoxGeometry material order +X,-X,+Y,-Y,+Z(trước),-Z(sau).
      const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d),
        [boxMat, boxMat, boxMat, boxMat, frontMat, backMat]);
      scene2.add(box);
      // Mặt ±X: side label (brand dọc) — plane lệch ra 4mm + polygonOffset tránh z-fight.
      const mkSideMat = () => new THREE.MeshStandardMaterial({
        map: sideTex, roughness: 0.7,
        polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4
      });
      const sideR = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.88, h * 0.94), mkSideMat());
      sideR.position.x = w / 2 + 0.004; sideR.rotation.y = Math.PI / 2; scene2.add(sideR);
      const sideL = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.88, h * 0.94), mkSideMat());
      sideL.position.x = -w / 2 - 0.004; sideL.rotation.y = -Math.PI / 2; scene2.add(sideL);
    } else {
      // CHAI / DỊCH TRUYỀN: thân trụ + vai + cổ + nắp + nhãn IN TRỰC TIẾP cuốn
      // quanh ~120° mặt trước. Dịch truyền: thuỷ tinh trong mờ, nắp màu nhóm.
      const isInf = pkgKind === 'infusion';
      const r = Math.min(w, d) * 0.5;
      const bodyH = h * (isInf ? 0.76 : 0.70);
      const neckR = r * 0.40, neckH = h * 0.10, capH = h * 0.11, baseY = -h / 2;
      const glassMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(isInf ? '#dbeafe' : body),
        roughness: isInf ? 0.15 : 0.45, metalness: 0,
        transparent: isInf, opacity: isInf ? 0.5 : 1
      });
      const bodyMesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, bodyH, 28), glassMat);
      bodyMesh.position.y = baseY + bodyH / 2; scene2.add(bodyMesh);
      const shoulder = new THREE.Mesh(new THREE.CylinderGeometry(neckR, r, h * 0.10, 28), glassMat);
      shoulder.position.y = baseY + bodyH + h * 0.05; scene2.add(shoulder);
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(neckR, neckR, neckH, 20), glassMat);
      neck.position.y = baseY + bodyH + h * 0.10 + neckH / 2; scene2.add(neck);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(neckR * 1.25, neckR * 1.25, capH, 20),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(accent), roughness: 0.5 }));
      cap.position.y = h / 2 - capH / 2; scene2.add(cap);
      const label = new THREE.Mesh(
        new THREE.CylinderGeometry(r * 1.01, r * 1.01, bodyH * 0.82, 28, 1, true, -Math.PI * 0.34, Math.PI * 0.68),
        new THREE.MeshStandardMaterial({ map: tex, roughness: 0.7, side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6 })
      );
      label.position.y = baseY + bodyH * 0.46; scene2.add(label);
    }

    // Nếu hộp/chai này ĐÃ được dán nhãn HDSD (trong khay) → HIỆN sticker trên mô
    // hình 3D inspector tại đúng vị trí đã dán, dùng CHÍNH hàm vẽ nhãn lúc dán
    // (sim.makeHdsdStickerTex) để khớp 100%. Sửa lỗi: dán rồi xem 3D không thấy nhãn.
    const _applied = sim.getLabels?.()[drug.id];
    if (_applied && _applied.placement) {
      const uu = Math.max(0, Math.min(1, _applied.placement.u ?? 0.5));
      const vv = Math.max(0, Math.min(1, _applied.placement.v ?? 0.5));
      const skTex = sim.makeHdsdStickerTex?.(_applied);
      if (skTex) {
        skTex.anisotropy = 4;
        const skMat = new THREE.MeshStandardMaterial({ map: skTex, roughness: 0.6, side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: -8, polygonOffsetUnits: -8 });
        // Tỉ lệ nhãn PORTRAIT 360:480 (khớp bản soạn). Chai → UỐN TRÒN, hộp → phẳng.
        if (pkgKind === 'carton') {
          const faceW = w * 0.92, faceH = h * 0.88;
          const sw = Math.min(faceW * 0.62, faceH * 0.8 * (360 / 480));
          const sh = sw * (480 / 360);
          let scx = (uu - 0.5) * faceW, scy = (0.5 - vv) * faceH;
          scx = Math.max(-faceW / 2 + sw / 2, Math.min(faceW / 2 - sw / 2, scx));
          scy = Math.max(-faceH / 2 + sh / 2, Math.min(faceH / 2 - sh / 2, scy));
          const skMesh = new THREE.Mesh(new THREE.PlaneGeometry(sw, sh), skMat);
          skMesh.position.set(scx, scy, d / 2 + 0.01);
          scene2.add(skMesh);
        } else {
          // Chai: cylinder segment ôm thân.
          const r = Math.min(w, d) * 0.5;
          const bodyH = h * 0.74, baseY = -h / 2;
          const sh = Math.min(bodyH * 0.6, r * 2.0 * (480 / 360));
          const sw = sh * (360 / 480);
          const arc = Math.min(Math.PI * 0.72, sw / r);
          const skMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(r * 1.02, r * 1.02, sh, 28, 1, true, -arc / 2, arc), skMat);
          let scy = baseY + bodyH * (1 - vv);
          scy = Math.max(baseY + sh / 2, Math.min(baseY + bodyH - sh / 2, scy));
          skMesh.position.set(0, scy, 0);
          scene2.add(skMesh);
        }
      }
    }

    // ── "Mở hộp lấy vỉ/gói/lọ/ống" — đơn vị nhỏ nhất bên trong hộp, trượt ra khi tách lẻ ──
    const formStr = (drug.form || '').toLowerCase();
    const catStr = (drug.category || '').toLowerCase();
    const nameStr = (drug.brand || drug.name || '').toLowerCase();
    const hay = formStr + ' ' + catStr + ' ' + nameStr;
    let unitKind = 'vi';
    if (/gói|bột|cốm/.test(formStr)) unitKind = 'goi';
    // ỐNG TIÊM: chỉ khi tiêm/ống tiêm — KHÔNG nhầm với "uống" (chứa chuỗi "ống").
    else if (/tiêm|ống tiêm|^ống\b|dung dịch tiêm/.test(formStr)) unitKind = 'ong';
    else if (/lọ|chai|dung dịch|hỗn dịch|huyền dịch|siro|sirô|nhỏ|xịt|gel|kem|cao|mỡ|dầu|dịch uống/.test(formStr)) unitKind = 'lo';
    // Thiết bị / dụng cụ y tế — KHÔNG phải vỉ thuốc; mở hộp ra phải là CHÍNH món đó.
    let deviceKind = null;
    if (/dụng cụ|thiết bị/.test(catStr)
        || /nhiệt kế|khẩu trang|bơm tiêm|kim tiêm|xy lanh|que thử|test nhanh|băng|gạc|bông y tế|găng|máy đo/.test(hay)) {
      unitKind = 'device';
      if (/nhiệt kế/.test(hay)) deviceKind = 'thermometer';
      else if (/khẩu trang/.test(hay)) deviceKind = 'mask';
      else if (/bơm tiêm|kim tiêm|xy lanh|syringe/.test(hay)) deviceKind = 'syringe';
      else if (/băng|gạc|bông|urgo/.test(hay)) deviceKind = 'gauze';
      else deviceKind = 'generic';
    }
    const unitWordVN = { vi: 'vỉ', goi: 'gói', lo: 'lọ', ong: 'ống', device: 'thiết bị' }[unitKind];
    const unit = (() => {
      const g = new THREE.Group();
      const foil = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.6, roughness: 0.35 });
      const acc = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.5 });
      if (unitKind === 'vi') {
        // Vỉ ép: tấm nhôm MỎNG + viên trong bầu nhựa trong. Số viên theo quy cách
        // đóng gói (vd vỉ 14 viên → 14), xếp lưới tự cân.
        const per = pillsPerBlister(drug);
        const rows = per <= 7 ? 1 : per <= 14 ? 2 : per <= 21 ? 3 : Math.ceil(per / 8);
        const cols = Math.ceil(per / rows);
        const sheetW = w * Math.min(1.05, 0.5 + cols * 0.075), sheetD = d * 0.9;
        g.add(new THREE.Mesh(new THREE.BoxGeometry(sheetW, 0.004, sheetD),
          new THREE.MeshStandardMaterial({ color: 0xeef2f6, metalness: 0.5, roughness: 0.32 })));
        const clearMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.20, roughness: 0.08, metalness: 0 });
        const px = sheetW / (cols + 0.4), pz = sheetD / (rows + 0.3);
        const rad = Math.min(px, pz) * 0.40;
        let placed = 0;
        for (let r = 0; r < rows && placed < per; r++) for (let c = 0; c < cols && placed < per; c++) {
          const cx = (c - (cols - 1) / 2) * px, cz = (r - (rows - 1) / 2) * pz;
          const pill = new THREE.Mesh(new THREE.SphereGeometry(rad, 14, 10), acc);
          pill.scale.set(1, 0.42, 1); pill.position.set(cx, 0.006, cz); g.add(pill);
          const dome = new THREE.Mesh(new THREE.SphereGeometry(rad * 1.14, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), clearMat);
          dome.position.set(cx, 0.005, cz); g.add(dome);
          placed++;
        }
      } else if (unitKind === 'device') {
        const metal = new THREE.MeshStandardMaterial({ color: 0xb8bcc4, metalness: 0.85, roughness: 0.25 });
        if (deviceKind === 'thermometer') {
          // Nhiệt kế điện tử: thân bo tròn trắng + đầu cảm biến kim loại + màn LCD.
          const white = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.45 });
          const L = Math.max(h, w) * 0.95, rad = w * 0.05;
          const bodyc = new THREE.Mesh(new THREE.CapsuleGeometry(rad, L - rad * 2, 6, 16), white);
          bodyc.rotation.z = Math.PI / 2; g.add(bodyc);
          const tip = new THREE.Mesh(new THREE.SphereGeometry(rad * 1.15, 16, 12), metal);
          tip.position.x = -L / 2 + rad * 0.4; g.add(tip);
          const lcd = new THREE.Mesh(new THREE.BoxGeometry(rad * 2.6, rad * 1.8, rad * 0.5),
            new THREE.MeshStandardMaterial({ color: 0x0b1220, roughness: 0.4 }));
          lcd.position.set(L * 0.22, 0, rad * 0.9); g.add(lcd);
          const scr = new THREE.Mesh(new THREE.PlaneGeometry(rad * 2.0, rad * 1.2),
            new THREE.MeshStandardMaterial({ color: 0x9bf6c0, emissive: 0x14532d, emissiveIntensity: 0.6 }));
          scr.position.set(L * 0.22, 0, rad * 1.16); g.add(scr);
        } else if (deviceKind === 'mask') {
          // Khẩu trang y tế: tấm dẹt 3 nếp gấp + 2 dây đeo tai.
          const mw = Math.max(w, h) * 0.85, mh = mw * 0.6;
          const blue = new THREE.MeshStandardMaterial({ color: 0x7cc3e6, roughness: 0.75, side: THREE.DoubleSide });
          g.add(new THREE.Mesh(new THREE.BoxGeometry(mw, mh, 0.006), blue));
          for (let i = -1; i <= 1; i++) {
            const pl = new THREE.Mesh(new THREE.BoxGeometry(mw, mh * 0.08, 0.010),
              new THREE.MeshStandardMaterial({ color: 0x5fb0d6, roughness: 0.7 }));
            pl.position.set(0, i * mh * 0.24, 0.004); g.add(pl);
          }
          const loopMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0 });
          [-1, 1].forEach(s => {
            const lp = new THREE.Mesh(new THREE.TorusGeometry(mh * 0.34, mw * 0.012, 8, 20), loopMat);
            lp.position.set(s * mw * 0.5, 0, 0); lp.rotation.y = Math.PI / 2; g.add(lp);
          });
        } else if (deviceKind === 'syringe') {
          // Bơm tiêm: ống bơm trong + pít-tông + kim.
          const L = Math.max(h, w) * 0.85, r = w * 0.07;
          const clear = new THREE.MeshStandardMaterial({ color: 0xeaf2fb, transparent: true, opacity: 0.5, roughness: 0.2 });
          const wht = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
          const barrel = new THREE.Mesh(new THREE.CylinderGeometry(r, r, L * 0.55, 18), clear); barrel.rotation.z = Math.PI / 2; g.add(barrel);
          const plunger = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.7, r * 0.7, L * 0.5, 16), wht); plunger.rotation.z = Math.PI / 2; plunger.position.x = L * 0.34; g.add(plunger);
          const thumb = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.5, r * 1.5, r * 0.4, 16), wht); thumb.rotation.z = Math.PI / 2; thumb.position.x = L * 0.56; g.add(thumb);
          const needle = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.12, r * 0.12, L * 0.35, 8), metal); needle.rotation.z = Math.PI / 2; needle.position.x = -L * 0.45; g.add(needle);
        } else if (deviceKind === 'gauze') {
          // Băng/gạc: miếng đệm trắng mềm + viền.
          const pw = Math.max(w, h) * 0.7;
          g.add(new THREE.Mesh(new THREE.BoxGeometry(pw * 1.04, pw * 0.74, pw * 0.10),
            new THREE.MeshStandardMaterial({ color: 0xe5e7eb, roughness: 0.9 })));
          g.add(new THREE.Mesh(new THREE.BoxGeometry(pw, pw * 0.68, pw * 0.16),
            new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.95 })));
        } else {
          // Dụng cụ chung: khối bo nhẹ.
          g.add(new THREE.Mesh(new THREE.BoxGeometry(w * 0.5, h * 0.42, d * 0.5),
            new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 })));
        }
      } else if (unitKind === 'goi') {
        g.add(new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.018, d * 0.78), new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.55, roughness: 0.4 })));
        g.add(new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.02, d * 0.16), acc));
      } else if (unitKind === 'lo') {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.22, w * 0.22, h * 0.55, 20), new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 })); b.position.y = h * 0.275; g.add(b);
        const cap = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.16, w * 0.16, h * 0.12, 20), acc); cap.position.y = h * 0.6; g.add(cap);
      } else {
        const cl = new THREE.MeshStandardMaterial({ color: 0xdbeafe, transparent: true, opacity: 0.6, roughness: 0.2 });
        const b = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.08, w * 0.08, h * 0.58, 16), cl); b.position.y = h * 0.29; g.add(b);
        const tip = new THREE.Mesh(new THREE.ConeGeometry(w * 0.08, h * 0.12, 16), cl); tip.position.y = h * 0.64; g.add(tip);
        const band = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.085, w * 0.085, h * 0.05, 16), acc); band.position.y = h * 0.42; g.add(band);
      }
      // IN nhãn tiếp xúc trực tiếp LÊN đơn vị ra lẻ (vỉ/gói: mặt trên; lọ/ống:
      // cuốn quanh thân) — thầy yêu cầu nhãn này phải nằm TRÊN bao bì bên trong.
      if (unitKind === 'vi' || unitKind === 'goi' || unitKind === 'lo' || unitKind === 'ong') {
        const cTex = makeContactLabelTex(drug, meta); cTex.anisotropy = 4;
        const cMat = new THREE.MeshStandardMaterial({ map: cTex, roughness: 0.55, side: THREE.DoubleSide,
          polygonOffset: true, polygonOffsetFactor: -6, polygonOffsetUnits: -6 });
        if (unitKind === 'vi' || unitKind === 'goi') {
          // Tấm vỉ/gói nằm ngang → nhãn dán mặt TRÊN, hướng lên.
          const pw = w * 0.82, ph = pw * (200 / 360);
          const lab = new THREE.Mesh(new THREE.PlaneGeometry(pw, ph), cMat);
          lab.rotation.x = -Math.PI / 2; lab.position.set(0, 0.013, 0);
          g.add(lab);
        } else {
          // Lọ/ống đứng → nhãn UỐN quanh thân.
          const r = (unitKind === 'lo') ? w * 0.22 : w * 0.085;
          const cy = (unitKind === 'lo') ? h * 0.28 : h * 0.30;
          const ph = Math.min((unitKind === 'lo' ? h * 0.55 : h * 0.58) * 0.7, r * 2 * (200 / 360) * 1.6);
          const arc = Math.PI * 0.95;
          const lab = new THREE.Mesh(
            new THREE.CylinderGeometry(r * 1.03, r * 1.03, ph, 24, 1, true, -arc / 2, arc), cMat);
          lab.position.set(0, cy, 0); g.add(lab);
        }
      }
      g.traverse(o => { if (o.isMesh) o.castShadow = true; });
      // Căn giữa nội dung về gốc → khi trượt ra nằm NGANG TẦM hộp (không lệch cao/thấp).
      const bb = new THREE.Box3().setFromObject(g);
      const ctr = bb.getCenter(new THREE.Vector3());
      g.children.forEach(ch => ch.position.sub(ctr));
      return g;
    })();
    // Ưu tiên MODEL .glb cho đơn vị có model thật (hạn chế vẽ tay). Vỉ/gói/ống
    // chưa có glb phù hợp → giữ procedural.
    const unitGlbFile =
      (unitKind === 'device' && deviceKind === 'thermometer') ? 'thermometer.glb' :
      (unitKind === 'device' && /bông/.test(hay)) ? 'cotton.glb' :
      (unitKind === 'device' && deviceKind === 'gauze') ? 'gauze.glb' :
      (unitKind === 'lo' && /kem|gel|mỡ|tuýp|tuyp|cao xoa|\bbôi\b/.test(formStr)) ? 'tube.glb' :
      (unitKind === 'lo') ? 'pillbottle.glb' : null;
    if (unitGlbFile) swapUnitToGlb(unit, unitGlbFile, Math.max(w, h) * 0.9);
    unit.visible = false;
    scene2.add(unit);
    let extracting = false, extractT = 0;
    const extractFrom = new THREE.Vector3(0, 0, 0);
    const extractTo = new THREE.Vector3(w * 0.1, 0, d / 2 + Math.max(w, d) * 0.6); // y=0: ngang tầm hộp

    let stopped = false;
    function tick() {
      if (stopped) return;
      if (extracting && extractT < 1) {
        extractT = Math.min(1, extractT + 0.022);
        const e = 1 - Math.pow(1 - extractT, 3); // easeOutCubic
        unit.position.lerpVectors(extractFrom, extractTo, e);
        unit.rotation.y = e * 0.6;
        if (unitKind === 'vi' || unitKind === 'goi') unit.rotation.z = -e * 0.5; // nghiêng cho thấy mặt vỉ
      }
      ctrl.update();
      renderer.render(scene2, camera2);
      requestAnimationFrame(tick);
    }
    fit(); requestAnimationFrame(tick);
    const onResize = () => fit();
    window.addEventListener('resize', onResize);

    function close() {
      stopped = true;
      window.removeEventListener('resize', onResize);
      document.removeEventListener('keydown', insEsc);
      renderer.dispose();
      tex.dispose(); tex2.dispose(); sideTex.dispose();
      overlay.remove();
    }
    overlay.querySelector('.ins-return').addEventListener('click', () => {
      returnToShelf?.();
      close();
    });
    // Nút X góc phải trên — đóng inspector (trả thuốc về kệ).
    overlay.querySelector('.ins-close').addEventListener('click', () => {
      returnToShelf?.();
      close();
    });
    // Click nền tối ngoài modal cũng đóng.
    overlay.addEventListener('click', (e) => { if (e.target === overlay) { returnToShelf?.(); close(); } });
    // Phím ESC đóng.
    const insEsc = (e) => { if (e.key === 'Escape') { returnToShelf?.(); close(); } };
    document.addEventListener('keydown', insEsc);
    overlay.querySelector('.ins-confirm')?.addEventListener('click', () => {
      confirmToTray?.();
      close();
    });
    // Nút "Tách lẻ / Mở hộp" CHỈ có với HỘP GIẤY (carton). Chai/dịch truyền bán
    // nguyên chai → không có nút này, dùng "Đưa vào khay (Quét barcode)" như mọi hộp.
    const retailBtn = overlay.querySelector('.ins-retail');
    if (retailBtn) {
      retailBtn.textContent = `🔓 Mở hộp lấy ${unitWordVN}`;
      retailBtn.addEventListener('click', () => {
        if (!extracting) {
          // Lần 1: MỞ HỘP — đơn vị nhỏ nhất (vỉ/gói/lọ/ống) trượt ra khỏi hộp.
          extracting = true; extractT = 0; unit.visible = true;
          retailBtn.textContent = `📥 Cho ${unitWordVN} vào giỏ`;
          postAction('open_box_unit', { drugId: drug.id, unit: unitWordVN });
        } else {
          // Lần 2: đơn vị ra lẻ vào GIỎ RA LẺ (không phải khay bán hàng hộp nguyên).
          addRetailUnit(drug, unitWordVN);
          postAction('retail_split', { drugId: drug.id, unit: drug.unit || unitWordVN });
          close();
          const per = drug.retailUnitPrice || (drug.unitsPerBox ? Math.round((drug.unitPrice || 0) / drug.unitsPerBox) : drug.unitPrice) || 0;
          alert(`Đã cho 1 ${unitWordVN} "${drug.brand}" vào GIỎ RA LẺ.\n→ Mở POS, bật "Bán lẻ" để tính theo ${drug.unit || 'đơn vị'} (${per.toLocaleString('vi')} đ/${drug.unit || 'đv'}).\n→ Click 1 BAO BÌ RA LẺ trên quầy (trắng/vàng/hồng/zip) để đựng đơn vị này + ghi nhãn, và dán nhãn HDSD trước khi giao.`);
        }
      });
    }
    postAction('inspect_drug', { drugId: drug.id });
  }

  // P2: Modal tra cứu Dược thư 2018 / MIMS Pharmacy.
  function openReferenceBook(bookId) {
    const isDuocThu = bookId === 'duocthu2018';
    const meta = isDuocThu
      ? { title: '📕 Dược thư Quốc gia 2018', accent: '#7f1d1d',
          subtitle: 'Bộ Y tế – Dược thư Quốc gia Việt Nam (NXB Y học)' }
      : { title: '📒 MIMS Pharmacy Việt Nam', accent: '#b45309',
          subtitle: 'Cập nhật thông tin kê đơn & tương tác thuốc thực hành' };
    const catalog = sim.getCatalog ? sim.getCatalog() : [];
    const overlay = document.createElement('div');
    overlay.className = 'pos-overlay book-overlay';
    overlay.innerHTML = `
      <div class="book-modal">
        <div class="book-head" style="background:${meta.accent}">
          <div>
            <div class="book-title">${meta.title}</div>
            <div class="book-sub">${meta.subtitle}</div>
          </div>
          <button class="book-close" type="button">✕</button>
        </div>
        <div class="book-body">
          <div class="book-left">
            <input class="book-search" type="search" placeholder="🔎 Nhập tên thuốc / hoạt chất / SKU…"/>
            <div class="book-list"></div>
          </div>
          <div class="book-right">
            <div class="book-empty">Chọn 1 thuốc để xem chuyên luận đầy đủ.</div>
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const $$ = (s) => overlay.querySelector(s);
    const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    function renderList(q) {
      const qn = norm(q.trim());
      const matches = catalog.filter(({ drug }) =>
        !qn || norm(drug.brand).includes(qn) || norm(drug.name).includes(qn) ||
        norm(drug.generic).includes(qn) || norm(drug.sku).includes(qn)
      ).slice(0, 50);
      $$('.book-list').innerHTML = matches.length
        ? matches.map(({ drug }) => `
          <div class="book-row" data-id="${drug.id}">
            <div><b>${drug.brand || drug.name}</b> <span class="book-sku">${drug.sku}</span></div>
            <div style="color:#94a3b8;font-size:11px">${drug.generic || ''} · ${drug.strength || ''}</div>
          </div>`).join('')
        : '<div style="padding:14px;color:#94a3b8">Không có kết quả.</div>';
    }
    function renderDetail(id) {
      const entry = catalog.find(c => c.drug.id === id);
      if (!entry) return;
      const { drug, meta: m } = entry;
      $$('.book-right').innerHTML = `
        <div class="book-detail">
          <h2>${drug.brand || drug.name}</h2>
          <div class="book-detail-sub">${drug.generic || ''} · ${drug.strength || ''}</div>
          <table class="book-detail-tbl">
            <tr><td>Hoạt chất</td><td>${drug.generic || '—'}</td></tr>
            <tr><td>Hàm lượng</td><td>${drug.strength || '—'}</td></tr>
            <tr><td>Dạng bào chế</td><td>${drug.form || '—'}</td></tr>
            <tr><td>Phân nhóm</td><td>${drug.category || '—'}</td></tr>
            <tr><td>Quy cách</td><td>${drug.pack || '—'}</td></tr>
            <tr><td>Đơn vị nhỏ nhất</td><td>${drug.retailUnit || '—'}</td></tr>
            <tr><td>Barcode</td><td><code>${drug.barcode || '—'}</code></td></tr>
            <tr><td>Hạn dùng</td><td>${m.expiry}</td></tr>
            <tr><td>Tồn kho</td><td>${m.stock} hộp</td></tr>
            <tr><td>Đơn giá</td><td>${(drug.unitPrice || 0).toLocaleString('vi')} đ</td></tr>
            <tr><td>Kê đơn</td><td>${drug.isRx ? '✅ Có (Rx)' : '❌ Không (OTC)'}</td></tr>
            <tr><td>Kháng sinh</td><td>${drug.isAntibiotic ? '✅' : '—'}</td></tr>
            <tr><td>Cẩn trọng thai kỳ</td><td>${drug.isHazardPregnancy ? '⚠️ CÓ' : '—'}</td></tr>
          </table>
          ${isDuocThu ? `
            <h3>Chuyên luận (Dược thư)</h3>
            <p><b>Chỉ định:</b> Theo hướng dẫn chuyên ngành — xem chi tiết trong Dược thư Quốc gia 2018, chuyên luận ${drug.generic || drug.name}.</p>
            <p><b>Liều dùng:</b> Cần tham khảo bác sĩ/bộ Y tế cho từng đối tượng.</p>
            <p><b>Chống chỉ định:</b> Mẫn cảm với thành phần hoạt chất, các trường hợp đặc biệt theo chuyên luận.</p>
            <p><b>Tác dụng KMM:</b> Tham khảo Dược thư.</p>
          ` : `
            <h3>Thông tin MIMS</h3>
            <p><b>Cảnh báo tương tác:</b> Kiểm tra tương tác với các thuốc khác trên đơn trước khi giao.</p>
            <p><b>Lưu ý kê đơn:</b> Theo dõi BN sau dùng 24-48h, hỏi tiền sử dị ứng.</p>
            <p><b>Khuyến cáo:</b> Tham khảo MIMS Pharmacy Việt Nam phiên bản mới nhất.</p>
          `}
        </div>`;
    }
    $$('.book-close').addEventListener('click', () => overlay.remove());
    $$('.book-search').addEventListener('input', (e) => renderList(e.target.value));
    $$('.book-list').addEventListener('click', (e) => {
      const r = e.target.closest('.book-row');
      if (r) renderDetail(r.dataset.id);
    });
    renderList('');
    postAction('open_reference_book', { bookId });
  }

  // 7. Modal handlers: Prescription / Doctor phone / Senior pharmacist
  // P6a: Đơn thuốc theo Thông tư 26/2025/TT-BYT — mẫu chuẩn pháp lý.
  function openPrescription() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const rxCode = 'ĐT-' + Date.now().toString().slice(-8);
    const overlay = document.createElement('div');
    overlay.className = 'rx-overlay';
    overlay.innerHTML = `
      <div class="rx-modal">
        <div class="rx-tools">
          <button class="rx-print" type="button">🖨️ In</button>
          <button class="rx-close-x" type="button">✕</button>
        </div>
        <div class="rx-page">
          <div class="rx-head">
            <div class="rx-org">
              <div class="rx-org-line1">SỞ Y TẾ TP. HỒ CHÍ MINH</div>
              <div class="rx-org-line2">PHÒNG KHÁM ĐA KHOA AN BÌNH</div>
              <div class="rx-org-line3">Địa chỉ: 123 Lê Lợi, Q.1, TP.HCM · ĐT: 028.3823.4567</div>
              <div class="rx-org-line3">Mã CSKCB: 79-002-A8 · MST: 0301234567</div>
            </div>
            <div class="rx-logo">⚕</div>
          </div>
          <div class="rx-title">
            <div>ĐƠN THUỐC</div>
            <div class="rx-subtitle">(Ban hành theo Thông tư số 26/2025/TT-BYT ngày 30/06/2025 của Bộ Y tế)</div>
          </div>
          <div class="rx-meta-grid">
            <div><b>Số đơn:</b> ${rxCode}</div>
            <div><b>Ngày kê:</b> ${dd}/${mm}/${yyyy}</div>
          </div>
          <table class="rx-bn-tbl">
            <tr><td><b>Họ và tên BN:</b></td><td colspan="3">LÊ THỊ LAN</td></tr>
            <tr><td><b>Năm sinh:</b></td><td>1997 (28 tuổi)</td><td><b>Giới tính:</b></td><td>Nữ</td></tr>
            <tr><td><b>Cân nặng:</b></td><td>56 kg</td><td><b>CCCD:</b></td><td>079197012345</td></tr>
            <tr><td><b>Địa chỉ:</b></td><td colspan="3">456 Trần Hưng Đạo, P.Cầu Ông Lãnh, Q.1, TP.HCM</td></tr>
            <tr><td><b>Số BHYT:</b></td><td colspan="3">SV4 79 123 4567890</td></tr>
            <tr><td><b>Chẩn đoán:</b></td><td colspan="3"><b>Viêm họng cấp do virus (J02.9)</b> – Thai 12 tuần (Z34.0)</td></tr>
          </table>
          <div class="rx-prescribed">
            <table class="rx-drug-tbl">
              <thead>
                <tr>
                  <th style="width:5%">STT</th>
                  <th style="width:42%">Tên thuốc · Hàm lượng · Dạng bào chế</th>
                  <th style="width:10%">SL</th>
                  <th style="width:43%">Liều · Cách dùng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><b>PARACETAMOL</b> 500mg · Viên nén</td>
                  <td>15 viên</td>
                  <td>Uống 1 viên/lần × 3 lần/ngày × 5 ngày, khi sốt > 38.5°C, cách nhau ≥ 4 giờ</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><b>VITAMIN C</b> 500mg · Viên sủi</td>
                  <td>7 viên</td>
                  <td>Hoà 1 viên/cốc nước, uống sáng × 7 ngày sau ăn</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><b>NƯỚC MUỐI SINH LÝ</b> 0.9% · Dung dịch súc miệng</td>
                  <td>1 chai</td>
                  <td>Súc họng 3 lần/ngày sau khi đánh răng và trước ngủ</td>
                </tr>
              </tbody>
            </table>
            <div class="rx-warn">
              ⚠ <b>KHÔNG kê kháng sinh</b> — Viêm họng do virus không có chỉ định kháng sinh.<br>
              Tự ý dùng kháng sinh trong giai đoạn thai kỳ có thể gây hại cho thai nhi.
            </div>
            <div class="rx-instr">
              <b>Lời dặn của bác sĩ:</b><br>
              • Uống đủ nước (≥ 2 lít/ngày), nghỉ ngơi, súc họng nước muối ấm.<br>
              • Tái khám sau 5–7 ngày nếu chưa đỡ hoặc sốt ≥ 39°C kéo dài.<br>
              • Báo BS ngay nếu khó thở, đau ngực, phát ban.<br>
              • Tuyệt đối <u>không tự ý dùng kháng sinh</u> hoặc thuốc khác mà chưa hỏi BS.
            </div>
          </div>
          <div class="rx-footer">
            <div class="rx-sign-box">
              <div class="rx-sign-title">Người mua thuốc</div>
              <div class="rx-sign-line"></div>
              <div class="rx-sign-name">(Ký, ghi rõ họ tên)</div>
            </div>
            <div class="rx-sign-box">
              <div class="rx-sign-title">Người kê đơn</div>
              <div class="rx-sign-stamp">
                <div class="rx-stamp">[Đã ký]</div>
                <b>BS. NGUYỄN VĂN A</b><br>
                <span style="font-size:11px">CCHN: 002345/BYT-CCHN</span><br>
                <span style="font-size:11px">SĐT: 0912 345 678</span>
              </div>
            </div>
          </div>
          <div class="rx-note-foot">
            * Đơn thuốc có giá trị trong 5 ngày kể từ ngày kê. Mỗi lần lấy thuốc, dược sĩ phải ghi rõ ngày, số lượng đã giao và ký xác nhận lên đơn.<br>
            * Thuốc kháng sinh, thuốc kê đơn không được tự ý mua/bán ngoài đơn (Khoản 4 Điều 6 Thông tư 26/2025/TT-BYT).
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.rx-close-x').addEventListener('click', () => overlay.remove());
    overlay.querySelector('.rx-print').addEventListener('click', () => window.print());
    postAction('view_prescription', { ts: Date.now(), rxCode });
  }

  function openDoctorPhone() {
    const CORRECT = '0912345678';
    const overlay = document.createElement('div');
    overlay.className = 'pos-overlay phone-overlay';
    overlay.innerHTML = `
      <div class="phone-modal">
        <div class="phone-head">
          <div class="phone-title">📞 ĐIỆN THOẠI – LIÊN HỆ BÁC SĨ KÊ ĐƠN</div>
        </div>
        <div class="phone-body">
          <div class="phone-prompt">Nhập số điện thoại của bác sĩ ghi trên đơn:</div>
          <div class="phone-display" data-placeholder="0xxx xxx xxx"></div>
          <div class="phone-pad">
            ${['1','2','3','4','5','6','7','8','9','*','0','⌫']
              .map(k => `<button class="phone-key" data-key="${k}" type="button">${k}</button>`).join('')}
          </div>
          <button class="phone-call" type="button" disabled>📞 Gọi</button>
          <div class="phone-hint">Mẹo: số đúng là <b>0912 345 678</b> (in trên đơn thuốc).</div>
        </div>
        <div class="phone-foot">
          <button class="phone-hangup" type="button">✕ Cúp máy</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const $disp = overlay.querySelector('.phone-display');
    const $call = overlay.querySelector('.phone-call');
    let dialed = '';
    function format(s) {
      // 4-3-3 grouping for 10-digit VN mobile
      const parts = [s.slice(0,4), s.slice(4,7), s.slice(7,10)].filter(Boolean);
      return parts.join(' ');
    }
    function render() {
      $disp.textContent = format(dialed) || '';
      $disp.classList.toggle('phone-display-empty', dialed.length === 0);
      $call.disabled = dialed.length < 10;
    }
    overlay.querySelectorAll('.phone-key').forEach(b => {
      b.addEventListener('click', () => {
        const k = b.dataset.key;
        if (k === '⌫') dialed = dialed.slice(0, -1);
        else if (dialed.length < 11) dialed += k;
        render();
      });
    });
    function close() { overlay.remove(); }
    overlay.querySelector('.phone-hangup').addEventListener('click', close);
    $call.addEventListener('click', () => {
      const cleaned = dialed.replace(/\D/g, '');
      const correct = cleaned === CORRECT;
      postAction('call_doctor', { dialed: cleaned, correct });
      close();
      if (correct) openDoctorChat();
      else alert('❌ Số không đúng. Hãy đối chiếu lại đơn thuốc.');
    });
    render();
  }

  // P6b: Chat box ảo với BS sau khi gọi đúng số. Sinh viên nhắn → BS reply
  // canned responses theo từ khoá (kháng sinh / thai / dị ứng / liều / tương tác).
  function openDoctorChat() {
    const overlay = document.createElement('div');
    overlay.className = 'pos-overlay doctor-chat-overlay';
    overlay.innerHTML = `
      <div class="dc-modal">
        <div class="dc-head">
          <div class="dc-avatar">🧑‍⚕️</div>
          <div>
            <div class="dc-name">BS. Nguyễn Văn A</div>
            <div class="dc-status">🟢 Đang trực tuyến · PK Đa khoa An Bình</div>
          </div>
          <button class="dc-close" type="button">📴 Cúp máy</button>
        </div>
        <div class="dc-body" id="dc-body"></div>
        <div class="dc-foot">
          <input class="dc-input" placeholder="Nhập tin nhắn cho BS…" autocomplete="off"/>
          <button class="dc-send" type="button">Gửi ▶</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    const body = overlay.querySelector('#dc-body');
    const input = overlay.querySelector('.dc-input');
    const REPLIES = [
      { kw: ['chào','xin chào','dạ','alo'], reply: 'Alo, dược sĩ cần tư vấn gì về đơn thuốc của BN Lan?' },
      { kw: ['kháng sinh','amox','antibiotic'], reply: 'BN viêm họng do virus + đang mang thai 12 tuần thì KHÔNG kê kháng sinh. Anh kê paracetamol + vitamin C + súc họng nước muối đủ rồi.' },
      { kw: ['thai','mang thai','pregnancy'], reply: 'Đúng rồi, BN đang thai 12 tuần. Cẩn thận thuốc thuộc nhóm cấm — đặc biệt tetracyclin, fluoroquinolon, NSAID quá liều.' },
      { kw: ['dị ứng','allergy'], reply: 'BN chưa khai dị ứng với thuốc nào trong tiền sử. Nếu dược sĩ thấy nghi vấn, hỏi lại BN trước khi giao.' },
      { kw: ['liều','dose','dosage'], reply: 'Paracetamol max 4g/ngày người lớn — đơn của tôi là 1.5g/ngày (1v × 3 lần × 500mg) an toàn cho thai phụ.' },
      { kw: ['tương tác','interaction','phối hợp'], reply: 'Paracetamol + Vitamin C + NaCl 0.9% không có tương tác có ý nghĩa lâm sàng. Yên tâm cấp phát.' },
      { kw: ['thay','đổi','khác'], reply: 'Nếu BN không sẵn paracetamol viên nén, có thể dùng paracetamol gói sủi cùng hàm lượng. Bú nước muối thì có thể dùng NaCl 0.9% chai khác cũng được.' },
      { kw: ['bệnh','tình trạng','triệu'], reply: 'BN khám tôi 2 ngày trước, sốt nhẹ 38°C, đau họng, không khó thở, không phát ban. Diễn tiến nhẹ, theo dõi tại nhà 5-7 ngày.' },
      { kw: ['cảm ơn','tks','thanks'], reply: 'Không có gì. Có gì thắc mắc tiếp dược sĩ cứ liên hệ. Chúc dược sĩ làm việc hiệu quả.' }
    ];
    function addBubble(role, text) {
      const el = document.createElement('div');
      el.className = 'dc-bubble dc-' + role;
      el.textContent = text;
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
    }
    addBubble('doctor', 'Alo dược sĩ?');
    function send() {
      const v = input.value.trim();
      if (!v) return;
      addBubble('me', v);
      input.value = '';
      const lower = v.toLowerCase();
      const r = REPLIES.find(x => x.kw.some(k => lower.includes(k))) || { reply: 'Dược sĩ cứ tự cân nhắc, đơn của tôi là đúng theo phác đồ rồi.' };
      setTimeout(() => addBubble('doctor', r.reply), 600 + Math.random() * 400);
      postAction('chat_doctor', { message: v });
    }
    overlay.querySelector('.dc-send').addEventListener('click', send);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
    overlay.querySelector('.dc-close').addEventListener('click', () => overlay.remove());
    input.focus();
  }

  function applySenior(seniorOn) {
    document.body.classList.toggle('senior-mode', seniorOn);
    if ($('btn-senior')) $('btn-senior').textContent = seniorOn ? '👨‍⚕️ DS đại học · ON' : '👨‍⚕️ DS đại học';
    postAction('senior_pharmacist', { active: seniorOn });
  }
  function toggleSenior() {
    const seniorOn = document.body.classList.contains('senior-mode');
    if (seniorOn) { applySenior(false); return; }
    // Mở modal mời DS đại học (avatar + mô tả + button Bật)
    const overlay = document.createElement('div');
    overlay.className = 'pos-overlay senior-overlay';
    overlay.innerHTML = `
      <div class="senior-modal">
        <div class="senior-head">
          <div class="senior-title">👩‍🎓 Mời Dược sĩ Đại học (phụ trách chuyên môn)</div>
        </div>
        <div class="senior-body">
          <p class="senior-intro">
            Trong tình huống cần thay thế thuốc, tư vấn vượt thẩm quyền của dược sĩ trung học,
            sinh viên có thể mời <b>DS đại học</b> ra hỗ trợ.
          </p>
          <div class="senior-card">
            <div class="senior-avatar">👩‍⚕️</div>
            <div>
              <div class="senior-name">DS. ĐH Phạm Thị Hà</div>
              <div class="senior-role">Dược sĩ Đại học · Phụ trách chuyên môn</div>
              <div class="senior-place">Nhà thuốc Thực Hành</div>
            </div>
          </div>
          <p class="senior-note">
            Khi bật chế độ này, sinh viên tiếp tục đóng vai <b>DS đại học</b>; có thể:
            quyết định thay thế thuốc, tư vấn các nhóm Rx có cảnh báo, hoặc xử lý ca tế nhị ở
            khu vực tư vấn riêng.
          </p>
          <div class="senior-actions">
            <button class="senior-close" type="button">Đóng</button>
            <button class="senior-confirm" type="button">✅ Bật chế độ DS đại học</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.senior-close').addEventListener('click', () => overlay.remove());
    overlay.querySelector('.senior-confirm').addEventListener('click', () => {
      applySenior(true);
      overlay.remove();
    });
  }

  // 8. Stats bar: update khi pick/label thay đổi
  function updateStats() {
    if (!sim) return;
    const picked = sim.getPickedIds();
    const labels = sim.getLabels();
    const labeled = Object.keys(labels).length;
    // Mẫu số = số hộp ĐÃ LẤY vào giỏ; nhưng dược sĩ cũng dán được lên hộp ngay
    // trên kệ (chưa lấy) → khi đó picked.length=0 gây hiển thị "X/0" khó hiểu.
    // Dùng max() để mẫu số luôn ≥ tử số.
    const denom = Math.max(picked.length, labeled);
    if ($('stat-picked')) $('stat-picked').textContent = picked.length;
    if ($('stat-labeled')) $('stat-labeled').textContent = `${labeled}/${denom || '—'}`;
    if ($('labels-status')) $('labels-status').textContent = labeled
      ? `Đã dán nhãn HDSD lên ${labeled} hộp.`
      : 'Chưa có nhãn nào được dán. Mở khay dụng cụ trên quầy hoặc nút "Soạn nhãn mới".';
  }
  setInterval(updateStats, 800);

  // 9. Wire UI
  $('send').addEventListener('click', send);
  $('ta').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
  $('finish').addEventListener('click', finish);
  $('btn-pos').addEventListener('click', openPos);
  $('btn-label').addEventListener('click', openLabel);
  if ($('btn-rx')) $('btn-rx').addEventListener('click', openPrescription);
  if ($('btn-doctor')) $('btn-doctor').addEventListener('click', openDoctorPhone);
  if ($('btn-senior')) $('btn-senior').addEventListener('click', toggleSenior);

  // ── P1: Tooltip hover hộp thuốc (tên + HD + tồn kho) ─────────────────
  const tt = $('drug-tooltip');
  const canvas = $('scene-canvas');
  if (tt && canvas && sim.getDrugAtPointer) {
    let rafTooltip = 0;
    canvas.addEventListener('pointermove', (e) => {
      if (rafTooltip) return;
      rafTooltip = requestAnimationFrame(() => {
        rafTooltip = 0;
        const r = sim.getDrugAtPointer(e.clientX, e.clientY);
        if (!r) { tt.hidden = true; return; }
        const { drug, meta } = r;
        const lowStock = meta.stock < 20;
        const soonExpiry = meta.expiryYear === 2026 && meta.expiryMonth <= 6;
        tt.innerHTML = `
          <div class="tt-brand">${drug.brand || drug.name}</div>
          <div class="tt-generic">${drug.generic || ''}${drug.strength ? ' · ' + drug.strength : ''}</div>
          <div class="tt-row"><span>Dạng</span><span>${drug.form || '—'}</span></div>
          <div class="tt-row"><span>SKU</span><span>${drug.sku}</span></div>
          <div class="tt-row"><span>Hạn dùng</span><span class="${soonExpiry ? 'tt-warn' : ''}">${meta.expiry}</span></div>
          <div class="tt-row"><span>Tồn kho</span><span class="${lowStock ? 'tt-warn' : ''}">${meta.stock} hộp</span></div>
          <div class="tt-row"><span>Đơn vị</span><span>${drug.retailUnit || '—'}</span></div>
        `;
        tt.hidden = false;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left + 14;
        const y = e.clientY - rect.top + 14;
        tt.style.left = Math.min(x, rect.width - 280) + 'px';
        tt.style.top  = Math.min(y, rect.height - 200) + 'px';
      });
    });
    canvas.addEventListener('pointerleave', () => { tt.hidden = true; });
  }

  // ── P1: Search box tìm theo tên/SKU ─────────────────────────────────
  const searchInput = $('drug-search-input');
  const searchResults = $('drug-search-results');
  if (searchInput && searchResults && sim.getCatalog) {
    const catalog = sim.getCatalog();
    function render(q) {
      const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
      const qn = norm(q.trim());
      if (!qn) { searchResults.innerHTML = ''; return; }
      const matches = catalog.filter(({ drug }) =>
        norm(drug.brand).includes(qn) ||
        norm(drug.name).includes(qn) ||
        norm(drug.generic).includes(qn) ||
        norm(drug.sku).includes(qn)
      ).slice(0, 12);
      searchResults.innerHTML = matches.length
        ? matches.map(({ drug, meta }) => `
            <div class="ds-row" data-id="${drug.id}">
              <div>
                <div class="ds-brand">${drug.brand || drug.name}</div>
                <div class="ds-sku">${drug.sku} · ${drug.strength || ''}</div>
              </div>
              <div style="text-align:right;font-size:11px">
                <div>HD ${meta.expiry}</div>
                <div>Tồn ${meta.stock}</div>
              </div>
            </div>`).join('')
        : '<div style="color:#94a3b8;font-size:12px;padding:6px">Không tìm thấy.</div>';
    }
    let searchTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => render(searchInput.value), 120);
    });
    searchResults.addEventListener('click', (e) => {
      const row = e.target.closest('.ds-row');
      if (!row) return;
      sim.focusDrug(row.dataset.id);
    });
  }
}
