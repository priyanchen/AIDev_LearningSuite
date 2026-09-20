'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { buildSearchIndex, getTypeLabel, type SearchResult } from '@/lib/search-index';

export default function SearchBox({ locale }: { locale: 'en' | 'he' }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildSearchIndex(locale), [locale]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter((r) => r.haystack.includes(q)).slice(0, 12);
  }, [index, query]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  function goTo(result: SearchResult) {
    setOpen(false);
    setQuery('');
    router.push(result.href);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={locale === 'he' ? 'חיפוש' : 'Search'}
        className="flex items-center gap-2 border border-rule px-3 py-1.5 text-[10px] tracking-brand uppercase font-sans text-muted hover:text-accent hover:border-accent transition"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="hidden sm:inline">{locale === 'he' ? 'חיפוש' : 'Search'}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 end-0 w-[22rem] max-w-[90vw] bg-paper border border-ink shadow-lg z-50">
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              locale === 'he'
                ? 'חפשו מפגשים, כרטיסים, כלים...'
                : 'Search sessions, cards, tools...'
            }
            className="w-full px-4 py-3 text-sm border-b border-rule bg-transparent outline-none placeholder:text-muted"
          />

          {query.trim().length >= 2 && (
            <div className="max-h-96 overflow-y-auto">
              {results.length === 0 ? (
                <div className="px-4 py-6 text-xs italic text-muted text-center">
                  {locale === 'he' ? 'אין תוצאות' : 'No results'}
                </div>
              ) : (
                results.map((r, i) => (
                  <button
                    key={`${r.href}-${i}`}
                    onClick={() => goTo(r)}
                    className="w-full text-start px-4 py-3 border-b border-rule last:border-b-0 hover:bg-codebg/50 transition"
                  >
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="small-caps tracking-wide font-bold text-sm truncate">{r.title}</span>
                      <span className="shrink-0 text-[8px] tracking-brand uppercase text-accent font-sans border border-accent px-1.5 py-0.5">
                        {getTypeLabel(r.type, locale)}
                      </span>
                    </div>
                    {r.subtitle && (
                      <div className="text-xs italic text-muted line-clamp-1">{r.subtitle}</div>
                    )}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
