// LabelEditor — port từ Pharmacy-AI/src/components/pos/LabelEditor.tsx (Phase 1).
// Tạo HDSD label (drug, patient, S/T/C/Tối, timing, notes) → arm pending label.
import { ALL_DRUGS, getDrug } from './catalog.js';
import { TIMING_LABEL, labelShortLine, totalPerDay } from './labels.js';

const QUICK_NOTES = [
  'Uống nhiều nước',
  'Tránh lạnh',
  'Không lái xe',
  'Tránh ánh nắng',
  'Báo nếu có dị ứng'
];

export function openLabelEditor({ pickedIds = [], onCreate, onClose }) {
  const overlay = document.createElement('div');
  overlay.className = 'label-overlay';
  overlay.innerHTML = `
    <div class="label-modal">
      <div class="label-head">
        <div class="label-title">🏷️ Soạn nhãn HDSD (ra lẻ)</div>
        <button class="label-close" type="button">✕</button>
      </div>
      <div class="label-body">
        <label>Thuốc:
          <select class="le-drug"></select>
        </label>
        <label>Tên bệnh nhân: <input class="le-patient" placeholder="Họ tên BN"/></label>
        <div class="le-doses">
          <label>Sáng: <input class="d" data-k="morning" type="number" min="0" max="4" value="1"/></label>
          <label>Trưa: <input class="d" data-k="noon" type="number" min="0" max="4" value="0"/></label>
          <label>Chiều: <input class="d" data-k="afternoon" type="number" min="0" max="4" value="1"/></label>
          <label>Tối: <input class="d" data-k="evening" type="number" min="0" max="4" value="0"/></label>
        </div>
        <label>Thời điểm dùng:
          <select class="le-timing">
            <option value="any">Bất kỳ</option>
            <option value="before_meal">Trước ăn</option>
            <option value="after_meal" selected>Sau ăn</option>
            <option value="with_meal">Cùng bữa ăn</option>
          </select>
        </label>
        <label>Ghi chú: <textarea class="le-notes" rows="2"></textarea></label>
        <div class="le-quicks">
          ${QUICK_NOTES.map(n => `<button class="le-quick" type="button">${n}</button>`).join('')}
        </div>
        <div class="le-preview">
          <div class="le-sticker">
            <div class="le-sk-head"></div>
            <div class="le-sk-doses"></div>
            <div class="le-sk-timing"></div>
            <div class="le-sk-notes"></div>
            <div class="le-sk-total"></div>
          </div>
        </div>
        <div class="le-actions">
          <button class="le-cancel" type="button">Huỷ</button>
          <button class="le-create" type="button">Tạo nhãn → dán</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const $ = (s) => overlay.querySelector(s);
  const $$ = (s) => Array.from(overlay.querySelectorAll(s));

  // Populate drug select — picked first, then all catalog
  const pickedDrugs = pickedIds.map(getDrug).filter(Boolean);
  const otherDrugs = ALL_DRUGS.filter(d => !pickedIds.includes(d.id));
  const groups = [];
  if (pickedDrugs.length) groups.push(['Đã chọn từ kệ', pickedDrugs]);
  groups.push(['Tất cả catalog', otherDrugs.slice(0, 50)]);
  $('.le-drug').innerHTML = groups.map(([gName, items]) => `
    <optgroup label="${gName}">
      ${items.map(d => `<option value="${d.id}">${d.brand} ${d.strength}</option>`).join('')}
    </optgroup>
  `).join('');

  function readLabel() {
    const drugId = $('.le-drug').value;
    const d = getDrug(drugId);
    return {
      drugId,
      brand: d?.brand || '',
      generic: d?.generic || '',
      strength: d?.strength || '',
      patient: $('.le-patient').value,
      morning: +$('.d[data-k="morning"]').value || 0,
      noon: +$('.d[data-k="noon"]').value || 0,
      afternoon: +$('.d[data-k="afternoon"]').value || 0,
      evening: +$('.d[data-k="evening"]').value || 0,
      timing: $('.le-timing').value,
      notes: $('.le-notes').value,
      issuedAt: Date.now()
    };
  }
  function renderPreview() {
    const l = readLabel();
    $('.le-sk-head').textContent = `${l.brand}${l.strength ? ' — ' + l.strength : ''}`;
    $('.le-sk-doses').textContent = labelShortLine(l);
    $('.le-sk-timing').textContent = TIMING_LABEL[l.timing] || '';
    $('.le-sk-notes').textContent = l.notes ? '📝 ' + l.notes : '';
    $('.le-sk-total').textContent = `Tổng/ngày: ${totalPerDay(l)} đơn vị · BN: ${l.patient || '—'}`;
  }
  $$('.d, .le-timing, .le-drug, .le-patient, .le-notes').forEach(el => el.addEventListener('input', renderPreview));
  $$('.le-quick').forEach(b => b.addEventListener('click', () => {
    const cur = $('.le-notes').value.trim();
    $('.le-notes').value = cur ? `${cur}; ${b.textContent}` : b.textContent;
    renderPreview();
  }));
  $('.le-close').addEventListener('click', () => close());
  $('.le-cancel').addEventListener('click', () => close());
  $('.le-create').addEventListener('click', () => {
    const l = readLabel();
    if (!l.drugId) { alert('Chọn thuốc.'); return; }
    if (!l.patient.trim()) { alert('Nhập tên bệnh nhân.'); return; }
    if (totalPerDay(l) === 0) { alert('Liều phải > 0.'); return; }
    onCreate?.(l);
    close();
  });

  renderPreview();

  function close() { overlay.remove(); onClose?.(); }
}
