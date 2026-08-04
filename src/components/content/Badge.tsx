import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'soon';
  className?: string;
}

export function Badge({children, variant = 'default', className}: BadgeProps) {
  return (
    <span className={cn('badge', variant === 'outline' && 'badge--outline', variant === 'soon' && 'badge--soon', className)}>
      {children}
    </span>
  );
}

interface TagListProps {
  children: ReactNode;
}

export function TagList({children}: TagListProps) {
  return <ul className="tag-list">{children}</ul>;
}

interface TagProps {
  children: ReactNode;
}

export function Tag({children}: TagProps) {
  return <li className="feature-tag">{children}</li>;
}
