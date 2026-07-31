import {useMemo, useState} from 'react';
import {Search} from 'lucide-react';
import type {ReactNode} from 'react';

export interface GlossaryTerm {
  term: string;
  synonyms?: string[];
  def: ReactNode;
}

interface GlossaryProps {
  terms: GlossaryTerm[];
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export function Glossary({terms}: GlossaryProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        (t.synonyms ?? []).some((s) => s.toLowerCase().includes(q)) ||
        textOf(t.def).toLowerCase().includes(q),
    );
  }, [terms, query]);

  const groups = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>();
    for (const term of filtered) {
      const letter = term.term.trim().charAt(0).toUpperCase() || '#';
      const bucket = map.get(letter) ?? [];
      bucket.push(term);
      map.set(letter, bucket);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const availableLetters = useMemo(() => new Set(groups.map(([letter]) => letter)), [groups]);

  return (
    <div>
      <div className="glossary-toolbar">
        <Search size={16} strokeWidth={1.8} aria-hidden="true" style={{color: 'var(--text-4)', flexShrink: 0}} />
        <input
          type="text"
          className="glossary-toolbar__input"
          placeholder="Search the glossary…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search glossary terms"
        />
        <span className="faq-toolbar__count" aria-live="polite">
          {filtered.length} terms
        </span>
      </div>

      <nav className="glossary-alphabet" aria-label="Jump to letter">
        {ALPHABET.map((letter) => (
          <a
            key={letter}
            href={`#glossary-${letter}`}
            className={`glossary-alphabet__link ${availableLetters.has(letter) ? '' : 'is-disabled'}`}
            aria-disabled={!availableLetters.has(letter)}
            tabIndex={availableLetters.has(letter) ? 0 : -1}
            onClick={(e) => {
              if (!availableLetters.has(letter)) e.preventDefault();
            }}
          >
            {letter}
          </a>
        ))}
      </nav>

      {groups.length === 0 ? (
        <div className="placeholder" role="status">
          <span className="placeholder__label">No terms match “{query}”.</span>
          <span className="placeholder__hint">Try a different keyword or browse by letter.</span>
        </div>
      ) : (
        groups.map(([letter, group]) => (
          <section key={letter} id={`glossary-${letter}`} className="glossary-group">
            <h3 className="glossary-group__letter">{letter}</h3>
            <div className="glossary-grid">
              {group.map((term) => (
                <article key={term.term} className="glossary-card">
                  <div className="glossary-card__term">{term.term}</div>
                  {term.synonyms && term.synonyms.length > 0 && (
                    <div className="glossary-card__synonyms">
                      Also known as: {term.synonyms.join(', ')}
                    </div>
                  )}
                  <div className="glossary-card__def">{term.def}</div>
                </article>
              ))}
            </div>
          </section>
        ))
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
