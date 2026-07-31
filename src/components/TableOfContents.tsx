import {useEffect, useState} from 'react';
import {cn} from '@/lib/utils';
import type {SearchHeading} from '@/lib/search';

interface TableOfContentsProps {
  headings: SearchHeading[];
}

export function TableOfContents({headings}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {rootMargin: '-96px 0px -70% 0px', threshold: 0},
    );
    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const visible = headings.filter((h) => h.level > 1);

  if (visible.length === 0) return null;

  return (
    <nav className="toc" aria-label="Table of contents">
      <div className="toc__title">On this page</div>
      <ul className="toc__list">
        {visible.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              'toc__item',
              heading.level >= 3 && 'toc__item--level-3',
              activeId === heading.id && 'is-active',
            )}
          >
            <a className="toc__link" href={`#${heading.id}`}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}