// SimulationClient — port từ Pharmacy-AI/src/components/SimulationClient.tsx.
// Wire chat panel + actions → /api/pharmacy/* + scoring panel.
import { buildScene } from './scene.js';
import { openPosTerminal } from './pos.js';
import { openLabelEditor } from './label-editor.js';
import { STAGE_LABEL } from './rubric.js';

const $ = (id) => document.getElementById(id);

export async function startSimulation({ moduleId = 'gpp' } = {}) {
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
    onPendingLabelClear: () => { $('pending-label').hidden = true; }
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

  // 7. Modal handlers: Prescription / Doctor phone / Senior pharmacist
  function openPrescription() {
    const overlay = document.createElement('div');
    overlay.className = 'pos-overlay';
    overlay.innerHTML = `
      <div class="pos-modal" style="width:520px">
        <div class="pos-head">
          <div class="pos-title">📋 Đơn thuốc (Thông tư 26/2025/TT-BYT)</div>
          <button class="pos-close" type="button">✕</button>
        </div>
        <div style="padding:14px;font-size:13px;line-height:1.6">
          <div><b>BV/PK:</b> Phòng khám Đa khoa An Bình</div>
          <div><b>Mã đơn:</b> ĐT-${Date.now().toString().slice(-6)}</div>
          <div><b>Họ tên BN:</b> Lê Thị Lan · <b>Tuổi:</b> 28 · <b>Giới:</b> Nữ</div>
          <div><b>Chẩn đoán:</b> Viêm họng cấp do virus + thai 12 tuần</div>
          <hr style="border-color:var(--border)">
          <table style="width:100%;border-collapse:collapse;font-size:12px">
            <thead><tr><th style="text-align:left">Thuốc</th><th>Liều</th><th>Cách dùng</th><th>SL</th></tr></thead>
            <tbody>
              <tr><td>Paracetamol 500mg</td><td>1v/lần</td><td>3 lần/ngày × 5 ngày</td><td>15v</td></tr>
              <tr><td>Vitamin C 500mg</td><td>1v/lần</td><td>1 lần/ngày × 7 ngày</td><td>7v</td></tr>
              <tr><td colspan="4" style="color:var(--red)">⚠️ KHÔNG kê kháng sinh — virus không cần KS</td></tr>
            </tbody>
          </table>
          <hr style="border-color:var(--border)">
          <div><b>BS kê:</b> BS. Nguyễn Văn A · <b>SĐT BS:</b> 0987.654.321</div>
          <div style="color:var(--muted);font-size:11px;margin-top:8px">Bấm "Gọi bác sĩ" nếu phát hiện sai sót/cần xác minh.</div>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.pos-close').addEventListener('click', () => overlay.remove());
    postAction('view_prescription', { ts: Date.now() });
  }

  function openDoctorPhone() {
    const overlay = document.createElement('div');
    overlay.className = 'pos-overlay';
    overlay.innerHTML = `
      <div class="pos-modal" style="width:440px">
        <div class="pos-head">
          <div class="pos-title">📞 Gọi bác sĩ kê đơn</div>
          <button class="pos-close" type="button">✕</button>
        </div>
        <div style="padding:18px;font-size:13px">
          <div style="text-align:center;font-size:48px;margin:10px">☎️</div>
          <div style="text-align:center"><b>BS. Nguyễn Văn A</b></div>
          <div style="text-align:center;color:var(--muted);font-size:12px">SĐT: 0987.654.321 · Đang gọi…</div>
          <textarea class="dr-msg" placeholder="Nội dung trao đổi với BS (ví dụ: thai phụ 12 tuần, cân nhắc đổi doxycyclin → amoxicillin)" rows="4" style="width:100%;margin-top:12px;padding:8px;background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:6px;color:var(--text);font-family:inherit;font-size:12px"></textarea>
          <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:10px">
            <button class="dr-cancel btn" type="button">Huỷ</button>
            <button class="dr-send btn primary" type="button">📨 Gửi & ghi nhận</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.querySelector('.pos-close').addEventListener('click', () => overlay.remove());
    overlay.querySelector('.dr-cancel').addEventListener('click', () => overlay.remove());
    overlay.querySelector('.dr-send').addEventListener('click', () => {
      const msg = overlay.querySelector('.dr-msg').value.trim();
      postAction('call_doctor', { message: msg, dialed: true });
      overlay.remove();
      alert('Đã ghi nhận cuộc gọi với BS.');
    });
  }

  function toggleSenior() {
    const seniorOn = !document.body.classList.contains('senior-mode');
    document.body.classList.toggle('senior-mode', seniorOn);
    $('btn-senior').textContent = seniorOn ? '👨‍⚕️ DS đại học · ON' : '👨‍⚕️ DS đại học';
    postAction('senior_pharmacist', { active: seniorOn });
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
}
