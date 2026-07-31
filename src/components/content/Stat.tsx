import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface StatProps {
  value: ReactNode;
  label: ReactNode;
  className?: string;
}

export function Stat({value, label, className}: StatProps) {
  return (
    <div className={cn('stat-card', className)}>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

interface StatGridProps {
  children: ReactNode;
}

export function StatGrid({children}: StatGridProps) {
  return <div className="stat-grid">{children}</div>;
}
