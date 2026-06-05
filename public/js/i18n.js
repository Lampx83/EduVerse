// Tizia i18n — runtime lookup theo locale, fallback về 'vi'.
// Locale lưu trong localStorage 'tizia.locale'.
// Bundles tải lazy theo locale; nếu thiếu key → trả về key.

const SUPPORTED = ['vi', 'en', 'id'];
const DEFAULT = 'vi';

let bundle = null;
let currentLocale = null;

export function getLocale() {
  if (currentLocale) return currentLocale;
  const stored = localStorage.getItem('tizia.locale');
  if (stored && SUPPORTED.includes(stored)) return currentLocale = stored;
  const nav = (navigator.language || 'vi').slice(0, 2).toLowerCase();
  if (SUPPORTED.includes(nav)) return currentLocale = nav;
  return currentLocale = DEFAULT;
}

export async function setLocale(locale) {
  if (!SUPPORTED.includes(locale)) locale = DEFAULT;
  localStorage.setItem('tizia.locale', locale);
  currentLocale = locale;
  bundle = null;
  await load();
  applyDom();
}

export async function load() {
  const locale = getLocale();
  if (bundle && bundle._loc === locale) return bundle;
  try {
    const r = await fetch(`/i18n/${locale}.json`);
    if (!r.ok) throw new Error('no_bundle');
    bundle = await r.json();
    bundle._loc = locale;
  } catch {
    bundle = { _loc: locale };
  }
  return bundle;
}

export function t(key, vars = {}) {
  if (!bundle) return key;
  const raw = bundle[key];
  if (raw == null) return key;
  return String(raw).replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}

/**
 * Áp dụng i18n vào DOM: tìm mọi element có attr data-i18n và thay text.
 * data-i18n-attr="placeholder" → thay attr thay vì text.
 */
export function applyDom(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const text = t(key);
    if (attr) el.setAttribute(attr, text);
    else el.textContent = text;
  });
}

// Auto-load + apply on DOM ready
async function autoMount() {
  await load();
  applyDom();
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoMount);
} else {
  autoMount();
}

// Expose locale picker helper
window.__tziaI18n = { t, setLocale, getLocale, SUPPORTED };
