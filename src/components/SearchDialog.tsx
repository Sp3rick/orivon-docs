import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import {CornerDownLeft, FileText, Heading, Search, X} from 'lucide-react';
import {useSearch} from '@/lib/search-context';
import {searchIndex} from '@/lib/search';
import type {SearchEntry} from '@/lib/search';
import {cn} from '@/lib/utils';

interface Result {
  key: string;
  route: string;
  title: string;
  subtitle: string;
  type: 'page' | 'heading';
}

function highlight(text: string, query: string): ReactNode {
  if (!query.trim()) return text;
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  const parts: ReactNode[] = [];
  let index = 0;
  let cursor = 0;
  while (cursor < text.length) {
    const found = lower.indexOf(q, cursor);
    if (found === -1) {
      parts.push(text.slice(cursor));
      break;
    }
    if (found > cursor) parts.push(text.slice(cursor, found));
    parts.push(<mark key={`${found}-${index}`}>{text.slice(found, found + q.length)}</mark>);
    cursor = found + q.length;
    index += 1;
  }
  return parts;
}

function scoreEntry(entry: SearchEntry, tokens: string[]): number {
  let score = 0;
  for (const token of tokens) {
    if (entry.title.toLowerCase().includes(token)) score += 100;
    if ((entry.description ?? '').toLowerCase().includes(token)) score += 40;
    if (entry.keywords.some((k) => k.toLowerCase().includes(token))) score += 30;
    if (entry.headings.some((h) => h.text.toLowerCase().includes(token))) score += 12;
    if (entry.text.toLowerCase().includes(token)) score += 5;
  }
  return score;
}

export function SearchDialog() {
  const {isOpen, close} = useSearch();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      window.setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 1) return [];
    const tokens = q.split(/\s+/);
    const pages: Result[] = [];
    const headings: Result[] = [];
    for (const entry of searchIndex) {
      const score = scoreEntry(entry, tokens);
      if (score <= 0) continue;
      pages.push({
        key: `p-${entry.slug}`,
        route: entry.route,
        title: entry.title,
        subtitle: entry.description ?? entry.section,
        type: 'page',
      });
      for (const heading of entry.headings) {
        if (tokens.some((t) => heading.text.toLowerCase().includes(t))) {
          headings.push({
            key: `h-${entry.slug}-${heading.id}`,
            route: `${entry.route}#${heading.id}`,
            title: heading.text,
            subtitle: `In "${entry.title}"`,
            type: 'heading',
          });
        }
      }
    }
    return [...pages.slice(0, 7), ...headings.slice(0, 5)];
  }, [query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (results.length === 0) return;
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((i) => (i + 1) % results.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((i) => (i - 1 + results.length) % results.length);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        goToResult(results[selectedIndex]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, results, selectedIndex]);

  useEffect(() => {
    const el = resultsRef.current?.querySelector(`[data-result-index="${selectedIndex}"]`);
    el?.scrollIntoView({block: 'nearest'});
  }, [selectedIndex]);

  const goToResult = useCallback(
    (result: Result) => {
      close();
      navigate(result.route);
    },
    [close, navigate],
  );

  if (!isOpen) return null;

  const hasQuery = query.trim().length > 0;

  return (
    <div
      className="search-overlay"
      onClick={close}
      role="presentation"
      onKeyDown={(e) => {
        if (e.key === 'Escape') close();
      }}
    >
      <div
        className="search-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Search documentation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-dialog__input-row">
          <Search size={18} strokeWidth={1.8} aria-hidden="true" style={{color: 'var(--text-4)'}} />
          <input
            ref={inputRef}
            type="text"
            className="search-dialog__input"
            placeholder="Search documentation…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search documentation"
            autoComplete="off"
            spellCheck={false}
          />
          {query ? (
            <button
              type="button"
              className="navbar__icon-btn"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              style={{width: 28, height: 28}}
            >
              <X size={15} />
            </button>
          ) : (
            <span className="search-dialog__hint">
              <kbd className="kbd">ESC</kbd>
            </span>
          )}
        </div>

        <div ref={resultsRef} className="search-dialog__results" role="listbox" aria-label="Search results">
          {!hasQuery && (
            <div className="search-dialog__empty">
              <Search size={22} strokeWidth={1.5} />
              <span>
                Type to search across the documentation.
                <br />
                Press <kbd className="kbd">⌘ K</kbd> / <kbd className="kbd">Ctrl K</kbd> anytime to open search.
              </span>
            </div>
          )}
          {hasQuery && results.length === 0 && (
            <div className="search-dialog__empty">
              <Search size={22} strokeWidth={1.5} />
              <span>No results for “{query}”.</span>
            </div>
          )}
          {results.length > 0 && (
            <>
              <div className="search-dialog__group" role="presentation">
                {results.some((r) => r.type === 'page') ? 'Pages' : 'Headings'}
              </div>
              {results.map((result, index) => (
                <button
                  key={result.key}
                  type="button"
                  role="option"
                  aria-selected={index === selectedIndex}
                  data-result-index={index}
                  className={cn(
                    'search-dialog__result',
                    index === selectedIndex && 'is-selected',
                  )}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => goToResult(result)}
                >
                  <span className="search-dialog__result-top">
                    {result.type === 'heading' ? (
                      <Heading size={13} strokeWidth={1.8} style={{color: 'var(--text-4)'}} />
                    ) : (
                      <FileText size={13} strokeWidth={1.8} style={{color: 'var(--text-4)'}} />
                    )}
                    {highlight(result.title, query)}
                  </span>
                  {result.subtitle && (
                    <span className="search-dialog__result-desc">
                      {highlight(result.subtitle, query)}
                    </span>
                  )}
                </button>
              ))}
            </>
          )}
        </div>

        <div className="search-dialog__footer">
          <span>
            <kbd className="kbd">↑</kbd> <kbd className="kbd">↓</kbd> to navigate
          </span>
          <span className="search-dialog__keys">
            <kbd className="kbd">↵</kbd> to open
          </span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 5}}>
            <CornerDownLeft size={12} /> Esc to close
          </span>
        </div>
      </div>
    </div>
  );
}
