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
    <Link
      href={`/${locale}/modules/${module.id}`}
      className="block border-b border-rule py-8 hover:bg-codebg/40 transition-colors group px-4 -mx-4"
    >
      <div className="grid grid-cols-[80px_1fr_auto] gap-6 items-start">
        <div className="text-right">
          <div className="text-5xl small-caps text-accent font-bold leading-none">
            {String(module.number).padStart(2, '0')}
          </div>
        </div>

        <div>
          <h3 className="text-xl small-caps tracking-wide font-bold mb-2 group-hover:text-accent transition">
            {module.title[locale]}
          </h3>
          <p className="text-sm italic text-muted leading-relaxed max-w-2xl">
            {module.description[locale]}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {sessions.map((s) => (
              <span
                key={s.slug}
                className={`text-[9px] tracking-brand uppercase font-sans border px-2 py-0.5 ${
                  s.status === 'complete'
                    ? 'border-accent text-accent'
                    : s.status === 'deferred'
                    ? 'border-rule text-muted opacity-50'
                    : 'border-rule text-muted'
                }`}
                title={s.title[locale]}
              >
                {String(s.number).padStart(2, '0')}
              </span>
            ))}
          </div>
        </div>

        <div className="text-right">
          <div className="text-[9px] tracking-brand uppercase text-muted font-sans">
            {completed} / {total}
          </div>
        </div>
      </div>
    </Link>
  );
}
