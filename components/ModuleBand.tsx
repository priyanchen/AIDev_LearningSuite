'use client';

import Link from 'next/link';
import type { Module, Session } from '@/lib/registry';

type Props = {
  module: Module;
  sessions: Session[];
  locale: 'en' | 'he';
};

export default function ModuleBand({ module, sessions, locale }: Props) {
  const completed = sessions.filter((s) => s.status === 'complete').length;
  const total = sessions.length;

  return (
    <div className="border-b border-rule py-8 group px-4 -mx-4">
      <div className="grid grid-cols-[80px_1fr_auto] gap-6 items-start">
        <Link
          href={`/${locale}/modules/${module.id}`}
          className="text-right hover:opacity-70 transition"
        >
          <div className="text-5xl small-caps text-accent font-bold leading-none">
            {String(module.number).padStart(2, '0')}
          </div>
        </Link>

        <div>
          <Link href={`/${locale}/modules/${module.id}`} className="block hover:text-accent transition">
            <h3 className="text-xl small-caps tracking-wide font-bold mb-2">
              {module.title[locale]}
            </h3>
            <p className="text-sm italic text-muted leading-relaxed max-w-2xl">
              {module.description[locale]}
            </p>
          </Link>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {sessions.map((s) => (
              <Link
                key={s.slug}
                href={`/${locale}/lessons/${s.slug}`}
                title={s.title[locale]}
                className={`text-[9px] tracking-brand uppercase font-sans border px-2 py-0.5 transition hover:bg-accent hover:text-paper hover:border-accent ${
                  s.status === 'complete'
                    ? 'border-accent text-accent'
                    : s.status === 'deferred'
                    ? 'border-rule text-muted opacity-50'
                    : 'border-rule text-muted'
                }`}
              >
                {String(s.number).padStart(2, '0')}
              </Link>
            ))}
          </div>
        </div>

        <Link href={`/${locale}/modules/${module.id}`} className="text-right hover:opacity-70 transition">
          <div className="text-[9px] tracking-brand uppercase text-muted font-sans">
            {completed} / {total}
          </div>
        </Link>
      </div>
    </div>
  );
}
