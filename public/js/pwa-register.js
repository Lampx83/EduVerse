/* PWA registration + offline-aware UX (toast badge + update prompt).
 *
 * Side effect khi import: tự register /sw.js nếu môi trường hỗ trợ,
 * hiển thị badge nhỏ ở góc khi mất mạng / có bản update.
 */

(function () {
  if (typeof window === 'undefined') return;
  if (!('serviceWorker' in navigator)) return;

  // 1) Register SW
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js', { scope: './' })
      .then((reg) => {
        // Tự nhắc update khi có bản mới
        reg.addEventListener('updatefound', () => {
          const sw = reg.installing;
          if (!sw) return;
          sw.addEventListener('statechange', () => {
            if (sw.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateToast(() => {
                sw.postMessage('SKIP_WAITING');
                location.reload();
              });
            }
          });
        });
      })
      .catch(err => console.warn('[pwa] register failed:', err));
  });

  // 2) "Cài app" — KHÔNG hiển thị nút nổi nữa. Chỉ:
  //    - Bắt beforeinstallprompt để dùng sau (khi user bấm link Cài app ở footer).
  //    - Expose `window.tiziaInstallPWA()` để bất cứ link nào trên site có thể gọi.
  //    - Nếu đã cài rồi (display-mode: standalone) → tự ẩn link cài đi.
  let deferredInstall = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstall = e;
    document.documentElement.dispatchEvent(
      new CustomEvent('tizia:pwa-installable', { detail: { available: true } })
    );
  });

  window.addEventListener('appinstalled', () => {
    deferredInstall = null;
    document.documentElement.dispatchEvent(
      new CustomEvent('tizia:pwa-installed')
    );
    // Ẩn các link cài app khi đã cài xong
    document.querySelectorAll('[data-pwa-install]').forEach(el => {
      el.style.display = 'none';
    });
  });

  // API public: gọi từ bất cứ link/nút nào (vd. footer "Cài app Tizia").
  window.tiziaInstallPWA = async function tiziaInstallPWA() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
    if (isStandalone) {
      alert('✅ Tizia đã được cài trên thiết bị này rồi.');
      return 'already-installed';
    }
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    if (deferredInstall) {
      try {
        deferredInstall.prompt();
        const { outcome } = await deferredInstall.userChoice;
        deferredInstall = null;
        return outcome; // 'accepted' | 'dismissed'
      } catch (e) {
        console.warn('[pwa] install prompt failed', e);
      }
    }
    if (isIOS) {
      alert('Để cài Tizia trên iPhone/iPad:\n\n1. Bấm nút Chia sẻ (□↑) trên thanh Safari\n2. Chọn "Thêm vào Màn hình chính"');
      return 'ios-instructions';
    }
    alert(
      'Trình duyệt chưa sẵn sàng cài Tizia ngay.\n\n' +
      '• Chrome/Edge desktop: bấm icon ⊕ "Cài đặt" ở thanh URL.\n' +
      '• Android Chrome: menu ⋮ → "Cài đặt ứng dụng".\n' +
      '• Hoặc tải lại trang sau vài giây rồi thử lại.'
    );
    return 'no-prompt';
  };

  // Tự ẩn link cài app nếu đã ở chế độ standalone (đã cài rồi).
  if (window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true) {
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[data-pwa-install]').forEach(el => {
        el.style.display = 'none';
      });
    });
  }

  // 3) Offline / online badge
  const badge = createBadge();
  function refresh() {
    if (navigator.onLine) {
      badge.style.display = 'none';
    } else {
      badge.textContent = '📴 Offline · vẫn dùng được phần đã cache';
      badge.style.display = 'block';
    }
  }
  window.addEventListener('online', refresh);
  window.addEventListener('offline', refresh);
  setTimeout(refresh, 800);

  function createBadge() {
    const el = document.createElement('div');
    el.id = 'tizia-offline-badge';
    Object.assign(el.style, {
      position: 'fixed', left: '10px', bottom: '10px', zIndex: 99999,
      background: 'rgba(15,23,42,0.92)', color: '#fbbf24',
      padding: '8px 14px', borderRadius: '999px',
      fontSize: '12px', fontFamily: 'Inter, system-ui, sans-serif',
      border: '1px solid rgba(251,191,36,0.4)',
      backdropFilter: 'blur(8px)', display: 'none',
      pointerEvents: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
    });
    document.documentElement.appendChild(el);
    return el;
  }

  function showUpdateToast(onUpdate) {
    const wrap = document.createElement('div');
    Object.assign(wrap.style, {
      position: 'fixed', right: '14px', bottom: '14px', zIndex: 99999,
      background: 'linear-gradient(135deg, #fbbf24, #f97316)', color: '#3e2723',
      padding: '12px 18px', borderRadius: '12px',
      fontSize: '13px', fontFamily: 'Inter, system-ui, sans-serif',
      fontWeight: '600', boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
      cursor: 'pointer', maxWidth: '260px',
    });
    wrap.innerHTML = '✨ Có phiên bản mới · bấm để cập nhật';
    wrap.addEventListener('click', () => { onUpdate(); wrap.remove(); });
    document.documentElement.appendChild(wrap);
    setTimeout(() => wrap.remove(), 20000);
  }
})();

// Sync localStorage ↔ server cho mọi page có pwa-register (≈ toàn site).
// Dynamic import vì pwa-register.js được load dạng script thường (không
// type=module). state-sync.js tự kiểm `tizia:me` rồi mới hydrate — guest
// (chưa login) sẽ no-op an toàn. Lỗi import không chặn pwa lifecycle.
try {
  // Đường dẫn tương đối phải khớp ngữ cảnh script gốc (./js/pwa-register.js).
  // Trên Safari cũ không hỗ trợ dynamic import — fail im, không gãy site.
  import('./engine/state-sync.js').catch(() => {});
} catch {}

