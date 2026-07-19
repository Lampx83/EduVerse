'use client';

// Bộ chọn giao diện dùng chung (mount trong SiteHeader). 3 lựa chọn:
//   • 🖥️ Theo hệ thống  → bám prefers-color-scheme của máy
//   • ☀️ Nền sáng
//   • 🌙 Nền tối
// Lưu ở localStorage key 'tizia-theme'. Việc áp class `dark` lần đầu (chống nhấp
// nháy) do inline script trong app/layout.tsx lo; component này đồng bộ khi đổi.

import { useEffect, useRef, useState } from 'react';

export type ThemeMode = 'system' | 'light' | 'dark';
const KEY = 'tizia-theme';

const OPTIONS: { mode: ThemeMode; icon: string; label: string }[] = [
  { mode: 'system', icon: '🖥️', label: 'Theo hệ thống' },
  { mode: 'light', icon: '☀️', label: 'Nền sáng' },
  { mode: 'dark', icon: '🌙', label: 'Nền tối' },
];

// Áp lớp `dark` lên <html> theo chế độ đã chọn.
function applyTheme(mode: ThemeMode) {
  const dark =
    mode === 'dark' ||
    (mode === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>('system');
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Đọc lựa chọn đã lưu (chỉ ở client).
  useEffect(() => {
    const saved = (localStorage.getItem(KEY) as ThemeMode) || 'system';
    setMode(saved);
    setReady(true);
  }, []);

  // Khi chọn "Theo hệ thống" → nghe máy đổi sáng/tối để cập nhật ngay.
  useEffect(() => {
    if (mode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [mode]);

  // Đóng menu khi bấm ra ngoài.
  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  function choose(next: ThemeMode) {
    setMode(next);
    localStorage.setItem(KEY, next);
    applyTheme(next);
    setOpen(false);
  }

  const current = OPTIONS.find((o) => o.mode === mode) ?? OPTIONS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        title={`Giao diện: ${current.label}`}
        aria-label={`Đổi giao diện — đang: ${current.label}`}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-base transition-colors hover:bg-foreground/10"
      >
        {/* Trước khi đọc localStorage xong thì hiển thị icon trung tính để tránh
            nhảy icon (hydration). */}
        <span suppressHydrationWarning>{ready ? current.icon : '🖥️'}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="p-1.5 text-sm">
            {OPTIONS.map((o) => (
              <button
                key={o.mode}
                type="button"
                onClick={() => choose(o.mode)}
                className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left transition-colors hover:bg-foreground/5 ${
                  o.mode === mode ? 'font-semibold text-primary' : ''
                }`}
              >
                <span className="text-base leading-none">{o.icon}</span>
                <span>{o.label}</span>
                {o.mode === mode && <span className="ml-auto text-primary">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
