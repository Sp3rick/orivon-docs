import {Check, X} from 'lucide-react';
import type {ReactNode} from 'react';

interface StepsProps {
  children: ReactNode;
}

export function Steps({children}: StepsProps) {
  return <ol className="steps">{children}</ol>;
}

interface StepProps {
  title: ReactNode;
  children?: ReactNode;
}

export function Step({title, children}: StepProps) {
  return (
    <li>
      <strong style={{fontWeight: 620}}>{title}</strong>
      {children && <div style={{marginTop: 6, color: 'var(--text-2)', fontSize: 14.5}}>{children}</div>}
    </li>
  );
}

interface CheckListProps {
  items: ReactNode[];
  crossed?: number[];
}

export function CheckList({items, crossed}: CheckListProps) {
  const crossedSet = new Set(crossed ?? []);
  return (
    <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8}}>
      {items.map((item, index) => {
        const isCrossed = crossedSet.has(index);
        return (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 14.5,
              color: isCrossed ? 'var(--text-3)' : 'var(--text-2)',
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 20,
                height: 20,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
                marginTop: 2,
                border: '1px solid var(--border)',
                background: 'var(--bg-subtle)',
                color: isCrossed ? 'var(--text-4)' : 'var(--text)',
              }}
            >
              {isCrossed ? <X size={12} strokeWidth={2} /> : <Check size={12} strokeWidth={2} />}
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}
