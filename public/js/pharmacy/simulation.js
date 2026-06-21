// SimulationClient — port từ Pharmacy-AI/src/components/SimulationClient.tsx.
// Wire chat panel + actions → /api/pharmacy/* + scoring panel.
import { buildScene, makeDrugLabelTex, makeDrugSideLabelTex, getBoxStyle } from './scene.js?v=ph0628';
import { loadDrugs } from './catalog.js?v=ph0628';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { openPosTerminal } from './pos.js?v=ph0628';
import { openLabelEditor } from './label-editor.js?v=ph0628';
import { STAGE_LABEL } from './rubric.js';
import { labelSectionHTML } from './drug-label.js?v=ph0628';

const $ = (id) => document.getElementById(id);

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
  const sim = buildScene($('scene-canvas'), {
    onAction: async (type, payload) => {
      await postAction(type, payload);
    },
    onPosOpen: () => openPos(),
    onLabelOpen: () => openLabel(),
    onPendingLabelClear: () => { $('pending-label').hidden = true; },
    onBookOpen: (bookId) => openReferenceBook(bookId),
    onInspectDrug: (payload) => openInspector(payload),
    onNotepadOpen: () => openNotepad(),
    onSalesTrayOpen: () => openSalesTray()
  });
  window.__sim = sim;

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
    openLabelEditor({
      pickedIds: sim.getPickedIds(),
      onCreate: (label) => {
        sim.setPendingLabel(label);
        $('pending-label').hidden = false;
        $('pending-label-text').textContent = `${label.brand} → click vào hộp thuốc trên kệ để dán`;
      }
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
            : '<ul class="salestray-list">' + picked.map(id => `<li><b>${id}</b></li>`).join('') + '</ul>'}
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
    document.addEventListener('keydown', esc);
  }

  // 6. Camera preset buttons
  const camButtons = $('cam-buttons');
  if (camButtons) {
    camButtons.innerHTML = Object.entries(sim.cameraPresets).map(([k, p]) =>
      `<button class="cam-btn ${k === 'default' ? 'active' : ''}" data-key="${k}" type="button">${p.label}</button>`
    ).join('');
    camButtons.querySelectorAll('.cam-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sim.setCameraPreset(btn.dataset.key);
        camButtons.querySelectorAll('.cam-btn').forEach(b => b.classList.toggle('active', b === btn));
      });
    });
  }

  // P3: Inspector modal — hộp thuốc zoom giữa màn hình, tự xoay, drag xoay,
  // info panel + 2 nút (Đưa vào khay / Trả về kệ). Dùng mini-scene Three.js riêng.
  function openInspector({ drug, meta, confirmToTray, returnToShelf }) {
    const overlay = document.createElement('div');
    overlay.className = 'inspector-overlay';
    overlay.innerHTML = `
      <div class="inspector-modal">
        <div class="inspector-3d"><canvas class="ins-canvas"></canvas></div>
        <div class="inspector-info">
          <div class="ins-head">
            <div class="ins-brand">${drug.brand || drug.name}</div>
            <div class="ins-generic">${drug.generic || ''} · ${drug.strength || ''}</div>
            ${drug.isRx ? '<span class="ins-tag ins-rx">Rx · Kê đơn</span>' : '<span class="ins-tag ins-otc">OTC</span>'}
            ${drug.isAntibiotic ? '<span class="ins-tag ins-abx">Kháng sinh</span>' : ''}
            ${drug.isHazardPregnancy ? '<span class="ins-tag ins-warn">⚠️ Thai kỳ</span>' : ''}
          </div>
          <table class="ins-tbl">
            <tr><td>SKU</td><td><code>${drug.sku}</code></td></tr>
            <tr><td>Dạng bào chế</td><td>${drug.form || '—'}</td></tr>
            <tr><td>Phân nhóm</td><td>${drug.category || '—'}</td></tr>
            <tr><td>Quy cách</td><td>${drug.pack || '—'}</td></tr>
            <tr><td>Đơn vị nhỏ nhất</td><td>${drug.retailUnit || '—'}</td></tr>
            <tr><td>Hạn dùng</td><td>${meta.expiry}</td></tr>
            <tr><td>Số lô</td><td><code>${meta.lot}</code></td></tr>
            <tr><td>Tồn kho</td><td><b>${meta.stock} hộp</b></td></tr>
            <tr><td>Barcode</td><td><code>${drug.barcode || '—'}</code></td></tr>
            <tr><td>Đơn giá</td><td>${(drug.unitPrice || 0).toLocaleString('vi')} đ</td></tr>
          </table>
          ${labelSectionHTML(drug, meta)}
          <div class="ins-hint">💡 Kéo chuột để xoay hộp · Lăn để zoom</div>
          <div class="ins-actions">
            <button class="ins-return" type="button">↩ Trả về kệ</button>
            <button class="ins-retail" type="button">🔓 Tách lẻ (${drug.unit || 'đơn vị'})</button>
            <button class="ins-confirm" type="button">📥 Đưa vào khay (Quét barcode)</button>
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
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), boxMat);
    scene2.add(box);
    // Mặt +Z: label chính (giống y hệt trên kệ)
    const tex = makeDrugLabelTex(drug);
    const labelMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 });
    const label = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.94, h * 0.96), labelMat);
    label.position.z = d / 2 + 0.001;
    scene2.add(label);
    // Stripe mesh 3D — banner/stripe/flag KHỚP với hộp trên kệ. Trước đây
    // inspector THIẾU stripe → label band chỉ là texture phẳng trong khi shelf
    // có thêm dải 3D nổi 3mm → user thấy 2 chỗ "màu khác nhau". Giờ đồng bộ.
    const variant = style.variant || 'banner';
    const accentEarly = drug.groupAccent || '#0d9488';
    const stripeMat = new THREE.MeshStandardMaterial({
      color: accentEarly, roughness: 0.55,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4
    });
    const FRONT_STRIPE = d / 2 + 0.003;
    if (variant === 'banner') {
      const s = new THREE.Mesh(new THREE.BoxGeometry(w * 0.96, h * 0.18, 0.0025), stripeMat);
      s.position.set(0, -h * 0.32, FRONT_STRIPE);
      scene2.add(s);
    } else if (variant === 'stripe') {
      const s1 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.96, h * 0.06, 0.0025), stripeMat);
      s1.position.set(0, -h * 0.40, FRONT_STRIPE); scene2.add(s1);
      const s2 = new THREE.Mesh(new THREE.BoxGeometry(w * 0.96, h * 0.06, 0.0025), stripeMat);
      s2.position.set(0, -h * 0.45, FRONT_STRIPE); scene2.add(s2);
    } else if (variant === 'flag') {
      const s = new THREE.Mesh(new THREE.BoxGeometry(w * 0.18, h * 0.96, 0.0025), stripeMat);
      s.position.set(-w * 0.39, 0, FRONT_STRIPE); scene2.add(s);
    }
    // Mặt ±X: side label (brand dọc) — luôn áp khi inspector vì hộp inspector to.
    const sideTex = makeDrugSideLabelTex(drug);
    const sideMatR = new THREE.MeshStandardMaterial({ map: sideTex, roughness: 0.7 });
    const sideR = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.88, h * 0.94), sideMatR);
    sideR.position.x = w / 2 + 0.001;
    sideR.rotation.y = Math.PI / 2;
    scene2.add(sideR);
    const sideMatL = new THREE.MeshStandardMaterial({ map: sideTex, roughness: 0.7 });
    const sideL = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.88, h * 0.94), sideMatL);
    sideL.position.x = -w / 2 - 0.001;
    sideL.rotation.y = -Math.PI / 2;
    scene2.add(sideL);
    const accent = drug.groupAccent || '#0d9488';
    // Mặt sau cũng có nhãn tóm tắt
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
    const labelMat2 = new THREE.MeshStandardMaterial({ map: tex2, roughness: 0.6 });
    const label2 = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.94, h * 0.96), labelMat2);
    label2.position.z = -d / 2 - 0.001;
    label2.rotation.y = Math.PI;
    scene2.add(label2);

    // ── "Mở hộp lấy vỉ/gói/lọ/ống" — đơn vị nhỏ nhất bên trong hộp, trượt ra khi tách lẻ ──
    const formStr = (drug.form || '').toLowerCase();
    let unitKind = 'vi';
    if (/gói|bột|cốm/.test(formStr)) unitKind = 'goi';
    else if (/ống|tiêm/.test(formStr)) unitKind = 'ong';
    else if (/lọ|dung dịch|siro|nhỏ|xịt|gel|kem|cao|mỡ|dầu/.test(formStr)) unitKind = 'lo';
    const unitWordVN = { vi: 'vỉ', goi: 'gói', lo: 'lọ', ong: 'ống' }[unitKind];
    const unit = (() => {
      const g = new THREE.Group();
      const foil = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.6, roughness: 0.35 });
      const acc = new THREE.MeshStandardMaterial({ color: accent, roughness: 0.5 });
      if (unitKind === 'vi') {
        g.add(new THREE.Mesh(new THREE.BoxGeometry(w * 0.78, 0.012, d * 0.82), foil));
        for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++) {
          const bump = new THREE.Mesh(new THREE.SphereGeometry(Math.min(w, d) * 0.06, 10, 8), acc);
          bump.scale.y = 0.6;
          bump.position.set((c - 2) * w * 0.14, 0.014, (r - 0.5) * d * 0.32);
          g.add(bump);
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
      g.traverse(o => { if (o.isMesh) o.castShadow = true; });
      return g;
    })();
    unit.visible = false;
    scene2.add(unit);
    let extracting = false, extractT = 0;
    const extractFrom = new THREE.Vector3(0, 0, 0);
    const extractTo = new THREE.Vector3(w * 0.1, h * 0.18, d / 2 + Math.max(w, d) * 0.6);

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
      renderer.dispose();
      tex.dispose(); tex2.dispose(); sideTex.dispose();
      overlay.remove();
    }
    overlay.querySelector('.ins-return').addEventListener('click', () => {
      returnToShelf?.();
      close();
    });
    overlay.querySelector('.ins-confirm').addEventListener('click', () => {
      confirmToTray?.();
      close();
    });
    const retailBtn = overlay.querySelector('.ins-retail');
    retailBtn.textContent = `🔓 Mở hộp lấy ${unitWordVN}`;
    retailBtn.addEventListener('click', () => {
      if (!extracting) {
        // Lần 1: MỞ HỘP — đơn vị nhỏ nhất (vỉ/gói/lọ/ống) trượt ra khỏi hộp.
        extracting = true; extractT = 0; unit.visible = true;
        retailBtn.textContent = `📥 Cho ${unitWordVN} vào giỏ`;
        postAction('open_box_unit', { drugId: drug.id, unit: unitWordVN });
      } else {
        // Lần 2: cho vào khay/giỏ + nhắc bán lẻ theo đơn vị nhỏ nhất ở POS.
        confirmToTray?.();
        postAction('retail_split', { drugId: drug.id, unit: drug.unit || unitWordVN });
        close();
        const per = drug.retailUnitPrice || (drug.unitsPerBox ? Math.round((drug.unitPrice || 0) / drug.unitsPerBox) : drug.unitPrice) || 0;
        alert(`Đã cho 1 ${unitWordVN} "${drug.brand}" vào giỏ.\n→ Mở POS, bật "Bán lẻ" để tính theo ${drug.unit || 'đơn vị'} (${per.toLocaleString('vi')} đ/${drug.unit || 'đv'}).\nĐựng vào bao bì ra lẻ + dán nhãn HDSD trước khi giao.`);
      }
    });
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
              <div class="senior-place">Nhà thuốc thực hành - HMC</div>
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
    if ($('stat-picked')) $('stat-picked').textContent = picked.length;
    if ($('stat-labeled')) $('stat-labeled').textContent = `${labeled}/${picked.length || '—'}`;
    if ($('labels-status')) $('labels-status').textContent = labeled
      ? `Đã dán ${labeled}/${picked.length} hộp.`
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
