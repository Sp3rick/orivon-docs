import {AlertTriangle, Info as InfoIcon, ShieldCheck, TriangleAlert} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import type {ReactNode} from 'react';

type CalloutType = 'note' | 'info' | 'warning' | 'success' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const icons: Record<CalloutType, LucideIcon> = {
  note: InfoIcon,
  info: InfoIcon,
  warning: TriangleAlert,
  danger: AlertTriangle,
  success: ShieldCheck,
};

const defaultTitles: Record<CalloutType, string> = {
  note: 'Note',
  info: 'Did you know?',
  warning: 'Watch out',
  danger: 'Caution',
  success: 'Why it matters',
};

export function Callout({type = 'note', title, children}: CalloutProps) {
  const Icon = icons[type];
  return (
    <aside className={`callout callout--${type}`} role="note">
      <span className="callout__icon">
        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div className="callout__body">
        {title && <span className="callout__title">{title}</span>}
        <div>{children}</div>
      </div>
    </aside>
  );
}

export function Note(props: Omit<CalloutProps, 'type'>) {
  return <Callout type="note" {...props} />;
}

export function Info(props: Omit<CalloutProps, 'type'>) {
  return <Callout type="info" title={props.title ?? defaultTitles.info} {...props} />;
}

export function Warning(props: Omit<CalloutProps, 'type'>) {
  return <Callout type="warning" {...props} />;
}

export function Success(props: Omit<CalloutProps, 'type'>) {
  return <Callout type="success" {...props} />;
}

export function Danger(props: Omit<CalloutProps, 'type'>) {
  return <Callout type="danger" {...props} />;
}
