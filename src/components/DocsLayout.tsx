import type {ReactNode} from 'react';
import {Sidebar} from '@/components/Sidebar';
import {TableOfContents} from '@/components/TableOfContents';
import {cn} from '@/lib/utils';
import type {SearchHeading} from '@/lib/search';

interface DocsLayoutProps {
  children: ReactNode;
  headings?: SearchHeading[];
}

/**
 * Three-column documentation shell: sidebar, content, table of contents.
 * Responsive: the sidebar collapses into a drawer and the TOC hides on
 * smaller viewports.
 */
export function DocsLayout({children, headings = []}: DocsLayoutProps) {
  const hasToc = headings.length > 0;
  return (
    <div className={cn('docs-layout', hasToc && 'docs-layout--with-toc')}>
      <aside className="docs-sidebar">
        <Sidebar />
      </aside>
      <div className="docs-main">
        <div className="docs-content">{children}</div>
      </div>
      {hasToc && (
        <aside className="docs-toc">
          <TableOfContents headings={headings} />
        </aside>
      )}
    </div>
  );
}
