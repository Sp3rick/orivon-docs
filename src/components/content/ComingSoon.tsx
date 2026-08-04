import {Construction} from 'lucide-react';
import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface ComingSoonProps {
  title?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Rendered for routes that are part of the plan but not yet written.
 * Keeps the sidebar and the information architecture honest while the
 * content for later levels is being produced.
 */
export function ComingSoon({title = 'Coming soon', children, className}: ComingSoonProps) {
  return (
    <section
      className={cn('placeholder', className)}
      style={{margin: '8px 0 0'}}
      aria-label="Page not published yet"
    >
      <span className="placeholder__icon">
        <Construction size={22} strokeWidth={1.5} />
      </span>
      <span className="placeholder__label">{title}</span>
      <span className="placeholder__hint">
        {children ??
          'This part of the documentation is still being written. It will appear here once published.'}
      </span>
    </section>
  );
}
