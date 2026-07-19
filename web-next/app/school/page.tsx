import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { tiziaFetch } from '@/lib/tizia';
import {
  canEnterDomain,
  domainMeta,
  getRequiredPlan,
  isDomainOpen,
  type SchoolUser,
} from './domains';
import CampusFrame from './CampusFrame';

// ── Shape API (đã verify với backend) ──
// GET /api/auth/me → { user: {...} }  (server/contexts/identity/auth.js:518)
type Me = SchoolUser & {
  id: number;
  display_name: string;
  role: string;
  enrolled_domain?: string | null;
};
type MeRes = { user: Me | null };

type SearchParams = Promise<{ domain?: string | string[] }>;

function pickDomain(sp: { domain?: string | string[] }): string {
  const raw = Array.isArray(sp.domain) ? sp.domain[0] : sp.domain;
  return raw || 'pharmacy';
}

// <title>/description động theo domain (SEO). Trang gốc đổi document.title theo
// tên+icon trường (public/school.html:121,198).
export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const sp = await searchParams;
  const dom = pickDomain(sp);
  const meta = domainMeta(dom);
  return {
    title: `${meta.icon} ${meta.name} · Tizia`,
    description:
      'Chọn trường ảo Tizia theo cấp học: Mầm non, Tiểu học, THCS, THPT (theo GDPT 2018) và đại học (Dược, CNTT, Kinh tế). Bản đồ campus 2.5D tương tác, học bằng mô phỏng 3D/VR.',
  };
}

export default async function School({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const dom = pickDomain(sp);

  // Trường đang khoá / không tồn tại → quay về trang chọn trường (public/school.html:154).
  if (!isDomainOpen(dom)) redirect('/index.html');

  const res = await tiziaFetch<MeRes>('/api/auth/me');
  const me: Me | null = res.ok && res.data ? res.data.user : null;

  // Gate truy cập theo gói cước (public/school.html:162-172):
  //   • chưa login + trường ≠ mở-cho-khách → redirect login (giữ return URL)
  //   • đã login nhưng gói chưa đủ → redirect /pricing
  if (!canEnterDomain(dom, me)) {
    const ret = encodeURIComponent(`/school.html?domain=${dom}`);
    if (!me) {
      redirect(`/login.html?return=${ret}`);
    } else {
      const required = getRequiredPlan(dom);
      redirect(
        `/pricing.html?want=${encodeURIComponent(required)}&domain=${encodeURIComponent(dom)}&return=${ret}`,
      );
    }
  }

  const meta = domainMeta(dom);
  const isAdmin = me?.role === 'admin';
  // Banner "Đang học" — chỉ khi đang ở trường của mình (public/school.html:177).
  const atOwnSchool =
    !!me && me.role !== 'admin' && !!me.enrolled_domain && me.enrolled_domain === dom;

  return (
    <div className="mx-auto max-w-[1200px] space-y-4 py-5">
      {/* Nút quay lại trang chủ — điều hướng thoát khỏi campus một trường. */}
      <a
        href="/"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-foreground/5 px-3.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
      >
        <span aria-hidden>←</span> Về trang chủ
      </a>

      <div className="flex items-baseline gap-3">
        <h1 className="text-[22px] font-bold" id="campus-title">
          {meta.icon} {meta.name}
        </h1>
        {/* Nhãn "Đang học" — cạnh tiêu đề, KHÔNG floating để tránh đè avatar/tên
            tài khoản trong header. */}
        {atOwnSchool && (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '4px 12px',
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 800,
              background: '#16a34a',
              color: '#fff',
              boxShadow: '0 4px 12px rgba(22,163,74,.35)',
              whiteSpace: 'nowrap',
            }}
          >
            🎓 Trường bạn đang học
          </span>
        )}
      </div>

      <div className="relative">
        <CampusFrame domain={dom} />

        {/* Admin → nút "✏️ Sửa campus" góc trên-phải BÊN TRONG khung campus. */}
        {isAdmin && (
          <a
            href={`/admin/campus-editor.html?domain=${encodeURIComponent(dom)}`}
            title={`Mở Campus Editor cho trường "${dom}"`}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 50,
              padding: '8px 16px',
              borderRadius: 22,
              fontSize: 13,
              fontWeight: 800,
              background: '#0f172a',
              color: '#fff',
              textDecoration: 'none',
              boxShadow: '0 6px 18px rgba(0,0,0,.4)',
              border: '1px solid rgba(255,255,255,.15)',
            }}
          >
            ✏️ Sửa campus
          </a>
        )}
      </div>

      {/* Neo cuộn cho postMessage 'campus-enter' (khu "Khám phá thêm" là module
          legacy js/school-explore.js — chưa migrate; giữ neo để hành vi cuộn khớp). */}
      <div id="school-explore-host" />
    </div>
  );
}
