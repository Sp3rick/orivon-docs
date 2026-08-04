import {Clock, GitCommitHorizontal, Pencil} from 'lucide-react';
import type {DocEntry} from '@/lib/docs';

const GITHUB_BASE = 'https://github.com/OrivonBrowser/orivon-docs/tree/main';

interface DocHeaderProps {
  doc: DocEntry;
}

export function DocHeader({doc}: DocHeaderProps) {
  const readingTime = doc.readingTime;
  return (
    <header className="doc-header">
      <h1 className="doc-header__title">{doc.title}</h1>
      {doc.description && <p className="doc-header__description">{doc.description}</p>}
      <div className="doc-header__meta">
        {typeof readingTime === 'number' && (
          <span className="doc-header__meta-item">
            <Clock size={13.5} strokeWidth={1.8} aria-hidden="true" />
            {readingTime} min read
          </span>
        )}
        {doc.lastUpdated && (
          <span className="doc-header__meta-item">
            <GitCommitHorizontal size={13.5} strokeWidth={1.8} aria-hidden="true" />
            Last updated {doc.lastUpdated}
          </span>
        )}
        <span className="doc-header__meta-item">
          <Pencil size={13.5} strokeWidth={1.8} aria-hidden="true" />
          <a
            href={`${GITHUB_BASE}/${doc.file.replace(/^\//, '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub
          </a>
        </span>
      </div>
    </header>
  );
}
