import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface CardProps {
  title: ReactNode;
  children: ReactNode;
  to?: string;
  href?: string;
  surface?: boolean;
  className?: string;
}

export function Card({title, children, to, href, surface, className}: CardProps) {
  const body = (
    <>
      <div className="card__body">
        <div className="card__title">{title}</div>
        {typeof children === 'string' ? <p className="card__text">{children}</p> : children}
      </div>
      {(to || href) && (
        <div className="card__footer">
          <span className="link-arrow">
            Learn more <ArrowRight size={14} strokeWidth={1.8} />
          </span>
        </div>
      )}
    </>
  );

  const cls = cn('card', surface && 'card--surface', (to || href) && 'card--interactive', className);

  if (to) {
    return (
      <Link to={to} className={cls}>
        {body}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {body}
      </a>
    );
  }
  return <div className={cls}>{body}</div>;
}

interface CardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function CardGrid({children, columns = 3, className}: CardGridProps) {
  return <div className={cn('card-grid', `card-grid--${columns}`, className)}>{children}</div>;
}
