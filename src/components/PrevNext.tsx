import {Link} from 'react-router-dom';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import type {DocEntry} from '@/lib/docs';
import {cn} from '@/lib/utils';

interface PrevNextProps {
  prev?: DocEntry;
  next?: DocEntry;
}

export function PrevNext({prev, next}: PrevNextProps) {
  return (
    <nav className="pagination" aria-label="Previous and next page">
      {prev ? (
        <Link to={prev.route} className="pagination__link pagination__link--prev">
          <span className="pagination__label">
            <ArrowLeft size={13} strokeWidth={1.8} /> Previous
          </span>
          <span className="pagination__title">{prev.title}</span>
        </Link>
      ) : (
        <span className="pagination__empty" aria-hidden="true" />
      )}
      {next ? (
        <Link to={next.route} className={cn('pagination__link', 'pagination__link--next')}>
          <span className="pagination__label">
            Next <ArrowRight size={13} strokeWidth={1.8} />
          </span>
          <span className="pagination__title">{next.title}</span>
        </Link>
      ) : (
        <span className="pagination__empty" aria-hidden="true" />
      )}
    </nav>
  );
}
