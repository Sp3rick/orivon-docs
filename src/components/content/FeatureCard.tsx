import {Link} from 'react-router-dom';
import {ArrowUpRight} from 'lucide-react';
import type {ReactNode} from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  to?: string;
}

/**
 * Feature card used on the Key Features page. `to` points to a route that
 * exists today or that will exist once the corresponding level ships.
 */
export function FeatureCard({icon, title, children, to}: FeatureCardProps) {
  const arrow = (
    <span className="feature-card__arrow" aria-hidden="true">
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </span>
  );

  const inner = (
    <>
      <span className="feature-card__icon">{icon}</span>
      <div>
        <div className="feature-card__title">{title}</div>
        <p className="feature-card__desc">{children}</p>
      </div>
      {arrow}
    </>
  );

  if (to) {
    return (
      <Link to={to} className="feature-card">
        {inner}
      </Link>
    );
  }
  return <div className="feature-card">{inner}</div>;
}
