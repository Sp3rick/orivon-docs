import {useMemo, useState} from 'react';
import {Search} from 'lucide-react';
import {Accordion} from './Accordion';
import type {AccordionItem} from './Accordion';

interface FaqProps {
  items: AccordionItem[];
  /** Optional grouping label rendered above the results count. */
  label?: string;
}

export function Faq({items, label}: FaqProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) => item.q.toLowerCase().includes(q) || textOf(item.a).toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <div>
      <div className="faq-toolbar">
        <Search size={16} strokeWidth={1.8} aria-hidden="true" style={{color: 'var(--text-4)', flexShrink: 0}} />
        <input
          type="text"
          className="faq-toolbar__input"
          placeholder={`Search ${label ?? 'questions'}…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Filter questions"
        />
        <span className="faq-toolbar__count" aria-live="polite">
          {filtered.length} of {items.length}
        </span>
      </div>
      {filtered.length === 0 ? (
        <div className="placeholder" role="status">
          <span className="placeholder__label">No questions match “{query}”.</span>
          <span className="placeholder__hint">Try a different keyword or browse the full list below.</span>
        </div>
      ) : (
        <Accordion items={filtered} />
      )}
    </div>
  );
}

function textOf(node: unknown): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join(' ');
  if (node && typeof node === 'object' && 'props' in node) {
    return textOf((node as {props: {children?: unknown}}).props.children);
  }
  return '';
}
