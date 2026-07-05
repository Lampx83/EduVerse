import Link from 'next/link';
import type { Metadata } from 'next';
import { tiziaFetch } from '@/lib/tizia';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock } from 'lucide-react';

export const metadata: Metadata = { title: 'Khám phá', description: 'Bản đồ tính năng Tizia — mở khoá dần theo hành trình học.' };

type Feat = { unlocked: boolean; name: string; url: string | null; tier: number; scope: string; unlock_text: string | null; desc: string | null };
type Res = { ok: boolean; user_tier: number; progress?: Record<string, number>; features: Record<string, Feat> };

const TIER_LABEL = ['Bắt đầu', 'Vào học', 'Chăm chỉ', 'Tiến bộ', 'Thành thạo', 'Bền bỉ', 'Chuyên sâu'];

export default async function KhamPha() {
  const res = await tiziaFetch<Res>('/api/features/me?scope=global');
  if (res.status === 401 || !res.data?.ok) {
    return (
      <div className="py-16 text-center text-muted-foreground">
        <p>Hãy đăng nhập để xem hành trình của em.</p>
        <Link href="/login" className="mt-2 inline-block font-medium text-primary hover:underline">Đăng nhập →</Link>
      </div>
    );
  }
  const { user_tier, progress, features } = res.data;

  // Gom feature theo tier.
  const byTier = new Map<number, [string, Feat][]>();
  for (const [id, f] of Object.entries(features)) {
    if (!byTier.has(f.tier)) byTier.set(f.tier, []);
    byTier.get(f.tier)!.push([id, f]);
  }
  const tiers = [...byTier.keys()].sort((a, b) => a - b);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">🧭 Khám phá hành trình</h1>
        <p className="text-muted-foreground">Tính năng mở khoá dần theo tiến độ học. Bạn đang ở mức {user_tier}.</p>
        {progress && (
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            <Badge variant="secondary">🔥 Streak {progress.streak}</Badge>
            <Badge variant="secondary">✅ Đúng {progress.quiz_correct}</Badge>
            <Badge variant="secondary">🎯 Kỹ năng {progress.skills_earned}</Badge>
            <Badge variant="secondary">📅 Ngày học {progress.active_days}</Badge>
          </div>
        )}
      </div>

      {tiers.map((t) => (
        <section key={t} className="space-y-3">
          <h2 className="flex items-center gap-2 text-lg font-medium">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-sm text-primary">{t}</span>
            {TIER_LABEL[t] || `Mức ${t}`}
            <span className="text-sm font-normal text-muted-foreground">
              ({byTier.get(t)!.filter(([, f]) => f.unlocked).length}/{byTier.get(t)!.length})
            </span>
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {byTier.get(t)!.map(([id, f]) => {
              const inner = (
                <Card className={f.unlocked ? 'h-full transition-colors hover:border-primary' : 'h-full opacity-55'}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 font-medium">
                      {!f.unlocked && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
                      {f.name}
                    </div>
                    {f.desc && <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>}
                    {!f.unlocked && f.unlock_text && (
                      <p className="mt-2 text-xs text-primary/80">🔒 {f.unlock_text}</p>
                    )}
                  </CardContent>
                </Card>
              );
              return f.unlocked && f.url ? <Link key={id} href={f.url}>{inner}</Link> : <div key={id}>{inner}</div>;
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
