// LabelEditor — redesign theo sơ đồ Thầy Lâm: 2 cột (form trái + preview phải),
// stepper Sáng/Trưa/Chiều/Tối, chips Thời điểm, quick chips Ghi chú.
// Giữ semantic field cũ để backend chấm điểm + render in/dán nhãn vẫn work.
import { ALL_DRUGS, getDrug } from './catalog.js?v=ph0623';
import { TIMING_LABEL, labelShortLine, totalPerDay } from './labels.js';

const QUICK_NOTES = [
  'Uống nhiều nước',
  'Tránh lái xe, vận hành máy móc',
  'Không dùng chung với rượu bia',
  'Uống cách kháng sinh ≥ 2 giờ',
  'Bảo quản nơi khô ráo, tránh ánh nắng'
];
const TIMING_OPTIONS = [
  { value: 'before_meal', label: 'Trước ăn' },
  { value: 'after_meal',  label: 'Sau ăn'  },
  { value: 'with_meal',   label: 'Cùng bữa ăn' },
  { value: 'any',         label: 'Bất kỳ thời điểm' }
];
// P5: Bao bì ra lẻ — 4 lựa chọn theo các loại có sẵn trên tool tray.
const PACKAGE_OPTIONS = [
  { value: 'white', label: '⚪ Bao giấy trắng',   color: '#f8fafc', text: '#0f172a' },
  { value: 'yellow', label: '🟡 Bao giấy vàng',   color: '#fde68a', text: '#7c2d12' },
  { value: 'pink',   label: '🌸 Bao giấy hồng',   color: '#fbcfe8', text: '#831843' },
  { value: 'zip',    label: '🧊 Túi zip kín khí', color: '#cffafe', text: '#0c4a6e' }
];

export function openLabelEditor({ pickedIds = [], onCreate, onClose }) {
  const overlay = document.createElement('div');
  overlay.className = 'label-overlay label-overlay-v2';
  overlay.innerHTML = `
    <div class="label-modal-v2">
      <div class="label-head-v2">
        <div class="label-title-v2">🏷️ Soạn nhãn HDSD – Hướng dẫn sử dụng thuốc</div>
        <button class="label-close-v2" type="button">✕</button>
      </div>
      <div class="label-body-v2">
        <div class="le2-left">
          <label class="le2-field">
            <span class="le2-lbl">Chọn thuốc</span>
            <select class="le2-drug"></select>
          </label>
          <label class="le2-field">
            <span class="le2-lbl">Bệnh nhân</span>
            <input class="le2-patient" placeholder="Khách vãng lai" value="Khách vãng lai"/>
          </label>
          <fieldset class="le2-doses-box">
            <legend>Số viên mỗi cữ</legend>
            <div class="le2-doses-grid">
              ${['morning','noon','afternoon','evening'].map((k, i) => `
                <div class="le2-dose">
                  <div class="le2-dose-lbl">${['Sáng','Trưa','Chiều','Tối'][i]}</div>
                  <div class="le2-stepper">
                    <button class="le2-minus" data-k="${k}" type="button">−</button>
                    <span class="le2-val" data-k="${k}">${i % 2 === 0 ? 1 : 0}</span>
                    <button class="le2-plus" data-k="${k}" type="button">+</button>
                  </div>
                </div>`).join('')}
            </div>
            <div class="le2-total">Tổng liều/ngày: <b class="le2-total-val">2 viên</b></div>
          </fieldset>
          <fieldset class="le2-timing-box">
            <legend>Thời điểm uống</legend>
            <div class="le2-chips">
              ${TIMING_OPTIONS.map(o => `<button class="le2-chip le2-time" data-v="${o.value}" type="button">${o.label}</button>`).join('')}
            </div>
          </fieldset>
          <fieldset class="le2-doses-box">
            <legend>Ra lẻ thuốc</legend>
            <div class="le2-retail-row">
              <label class="le2-field" style="flex:1">
                <span class="le2-lbl">Số ngày dùng</span>
                <input class="le2-days" type="number" min="1" max="30" value="5"/>
              </label>
              <label class="le2-field" style="flex:1">
                <span class="le2-lbl">Tổng viên ra lẻ</span>
                <input class="le2-retail-count" type="number" min="0" value="10"/>
              </label>
            </div>
            <div class="le2-lbl" style="margin-top:8px">Bao bì ra lẻ</div>
            <div class="le2-chips">
              ${PACKAGE_OPTIONS.map(o => `<button class="le2-chip le2-pkg" data-v="${o.value}" type="button">${o.label}</button>`).join('')}
            </div>
          </fieldset>
          <label class="le2-field">
            <span class="le2-lbl">Ghi chú thêm (chú ý đặc biệt)</span>
            <textarea class="le2-notes" rows="2" placeholder="Ví dụ: uống nhiều nước, tránh ánh nắng..."></textarea>
          </label>
          <div class="le2-quicks">
            ${QUICK_NOTES.map(n => `<button class="le2-quick" type="button">+ ${n}</button>`).join('')}
          </div>
        </div>
        <div class="le2-right">
          <div class="le2-preview-title">Xem trước nhãn dán (kích thước thật)</div>
          <div class="le2-sticker">
            <div class="le2-sk-head">HƯỚNG DẪN SỬ DỤNG</div>
            <div class="le2-sk-bn">BN: <b class="le2-sk-patient">Khách vãng lai</b></div>
            <div class="le2-sk-drug"><b class="le2-sk-brand">—</b></div>
            <div class="le2-sk-strength">—</div>
            <div class="le2-sk-doses-grid">
              ${['Sáng','Trưa','Chiều','Tối'].map((t, i) => `
                <div class="le2-sk-cell">
                  <div class="le2-sk-time">${t}</div>
                  <div class="le2-sk-num" data-cell="${i}">${i % 2 === 0 ? 1 : 0}</div>
                </div>`).join('')}
            </div>
            <div class="le2-sk-foot">
              <span class="le2-sk-timing">🕒 Sau ăn</span>
              <span class="le2-sk-total">· 2 viên/ngày</span>
            </div>
            <div class="le2-sk-notes"></div>
          </div>
          <p class="le2-hint">Sau khi bấm <b>Tạo nhãn</b>, con trỏ chuột sẽ mang theo nhãn → di chuyển sang kệ thuốc và <b>click vào hộp</b> để dán.</p>
        </div>
      </div>
      <div class="label-foot-v2">
        <button class="le2-cancel" type="button">Huỷ</button>
        <button class="le2-create" type="button">🏷️ Tạo nhãn → kéo dán lên hộp</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  const $ = (s) => overlay.querySelector(s);
  const $$ = (s) => Array.from(overlay.querySelectorAll(s));

  // Populate drug select
  const pickedDrugs = pickedIds.map(getDrug).filter(Boolean);
  const otherDrugs = ALL_DRUGS.filter(d => !pickedIds.includes(d.id));
  const groups = [];
  if (pickedDrugs.length) groups.push(['Đã chọn từ kệ', pickedDrugs]);
  groups.push(['Tất cả catalog', otherDrugs.slice(0, 80)]);
  $('.le2-drug').innerHTML = groups.map(([gName, items]) => `
    <optgroup label="${gName}">
      ${items.map(d => `<option value="${d.id}">${d.brand || d.name} ${d.strength || ''}</option>`).join('')}
    </optgroup>
  `).join('');

  // Stepper handlers
  function getDose(k) { return +$(`.le2-val[data-k="${k}"]`).textContent || 0; }
  function setDose(k, v) {
    v = Math.max(0, Math.min(4, v));
    $(`.le2-val[data-k="${k}"]`).textContent = v;
  }
  $$('.le2-minus').forEach(b => b.addEventListener('click', () => { setDose(b.dataset.k, getDose(b.dataset.k) - 1); renderPreview(); }));
  $$('.le2-plus' ).forEach(b => b.addEventListener('click', () => { setDose(b.dataset.k, getDose(b.dataset.k) + 1); renderPreview(); }));

  // State khai báo TRƯỚC mọi callback (timing/packageType) — readLabel()
  // chạm vào cả 2 nên phải khai báo trước bất kỳ setX() nào để tránh TDZ.
  let timing = 'after_meal';
  let packageType = 'white';

  // Timing chips
  function setTiming(v) {
    timing = v;
    $$('.le2-time').forEach(c => c.classList.toggle('le2-chip-active', c.dataset.v === v));
    renderPreview();
  }
  $$('.le2-time').forEach(c => c.addEventListener('click', () => setTiming(c.dataset.v)));
  setTiming('after_meal');

  // P5: Package chips + auto-tính tổng viên ra lẻ = totalPerDay × số ngày
  function setPackage(v) {
    packageType = v;
    $$('.le2-pkg').forEach(c => c.classList.toggle('le2-chip-active', c.dataset.v === v));
    renderPreview();
  }
  $$('.le2-pkg').forEach(c => c.addEventListener('click', () => setPackage(c.dataset.v)));
  setPackage('white');
  // Auto-tính tổng viên ra lẻ = totalPerDay × số ngày khi đổi liều/ngày
  function recalcRetail() {
    const days = +$('.le2-days').value || 1;
    const total = totalPerDay(readLabel()) * days;
    $('.le2-retail-count').value = total;
  }
  $('.le2-days').addEventListener('input', recalcRetail);
  // Cập nhật khi đổi liều cũng tự đẩy retail count
  $$('.le2-minus, .le2-plus').forEach(b => b.addEventListener('click', recalcRetail));

  // Quick notes
  $$('.le2-quick').forEach(b => b.addEventListener('click', () => {
    const text = b.textContent.replace(/^\+\s*/, '');
    const cur = $('.le2-notes').value.trim();
    $('.le2-notes').value = cur ? `${cur}; ${text}` : text;
    renderPreview();
  }));

  // Inputs
  $('.le2-drug').addEventListener('change', renderPreview);
  $('.le2-patient').addEventListener('input', renderPreview);
  $('.le2-notes').addEventListener('input', renderPreview);

  function readLabel() {
    const drugId = $('.le2-drug').value;
    const d = getDrug(drugId);
    return {
      drugId,
      brand: d?.brand || d?.name || '',
      generic: d?.generic || '',
      strength: d?.strength || '',
      patient: $('.le2-patient').value || 'Khách vãng lai',
      morning: getDose('morning'),
      noon: getDose('noon'),
      afternoon: getDose('afternoon'),
      evening: getDose('evening'),
      timing,
      notes: $('.le2-notes').value,
      // P5
      package: packageType,
      days: +$('.le2-days')?.value || 1,
      retailCount: +$('.le2-retail-count')?.value || 0,
      issuedAt: Date.now()
    };
  }

  function renderPreview() {
    const l = readLabel();
    $('.le2-sk-patient').textContent = l.patient || '—';
    $('.le2-sk-brand').textContent = l.brand || '—';
    $('.le2-sk-strength').textContent = l.strength || (l.generic || '—');
    ['morning','noon','afternoon','evening'].forEach((k, i) => {
      $(`.le2-sk-num[data-cell="${i}"]`).textContent = l[k];
    });
    $('.le2-sk-timing').textContent = '🕒 ' + (TIMING_LABEL[l.timing] || 'Bất kỳ');
    $('.le2-sk-total').textContent = ` · ${totalPerDay(l)} viên/ngày`;
    $('.le2-sk-notes').textContent = l.notes ? '📝 ' + l.notes : '';
    $('.le2-total-val').textContent = `${totalPerDay(l)} viên`;
  }

  // Close: X button + Huỷ + click overlay backdrop + ESC
  const closeBtn = $('.label-close-v2');
  const cancelBtn = $('.le2-cancel');
  closeBtn?.addEventListener('click', (e) => { e.stopPropagation(); close(); });
  cancelBtn?.addEventListener('click', (e) => { e.stopPropagation(); close(); });
  // Click vào backdrop (ngoài modal) cũng đóng
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  // ESC để đóng
  const escHandler = (e) => { if (e.key === 'Escape') { close(); } };
  document.addEventListener('keydown', escHandler);
  // Cleanup listener khi đóng
  const _origClose = () => { document.removeEventListener('keydown', escHandler); overlay.remove(); onClose?.(); };
  $('.le2-create').addEventListener('click', () => {
    const l = readLabel();
    if (!l.drugId)            { alert('Chọn thuốc.'); return; }
    if (!l.patient.trim())    { alert('Nhập tên bệnh nhân.'); return; }
    if (totalPerDay(l) === 0) { alert('Liều phải > 0.'); return; }
    onCreate?.(l);
    close();
  });

  renderPreview();
  function close() { _origClose(); }
}
