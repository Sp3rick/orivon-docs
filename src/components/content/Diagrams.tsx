import {ArrowDown, ArrowRight, ImageIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import type {ReactNode} from 'react';

interface DiagramProps {
  caption?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Styled container for a diagram, with an optional caption. Use the Flow /
 * DiagramNode primitives inside, or pass any custom HTML/SVG.
 */
export function Diagram({caption, children, className}: DiagramProps) {
  return (
    <figure className={cn('diagram', className)}>
      <div className="diagram__canvas">{children}</div>
      {caption && <figcaption className="diagram__caption">{caption}</figcaption>}
    </figure>
  );
}

interface DiagramNodeProps {
  children: ReactNode;
  dim?: boolean;
  accent?: boolean;
  icon?: ReactNode;
  title?: string;
  className?: string;
}

export function DiagramNode({children, dim, accent, icon, title, className}: DiagramNodeProps) {
  return (
    <span
      className={cn('diagram-node', dim && 'diagram-node--dim', accent && 'diagram-node--accent', className)}
      title={title}
    >
      {icon}
      {children}
    </span>
  );
}

interface FlowProps {
  children: ReactNode;
  column?: boolean;
  className?: string;
}

export function Flow({children, column, className}: FlowProps) {
  return <div className={cn('diagram-flow', column && 'diagram-flow--column', className)}>{children}</div>;
}

export function FlowArrow() {
  return (
    <span className="diagram-arrow" aria-hidden="true">
      <ArrowRight size={18} strokeWidth={1.6} />
    </span>
  );
}

export function FlowArrowDown() {
  return (
    <span className="diagram-arrow" aria-hidden="true">
      <ArrowDown size={18} strokeWidth={1.6} />
    </span>
  );
}

interface DiagramPlaceholderProps {
  label: string;
  hint?: string;
}

export function DiagramPlaceholder({label, hint}: DiagramPlaceholderProps) {
  return (
    <figure className="placeholder" role="img" aria-label={`Placeholder: ${label}`}>
      <span className="placeholder__icon">
        <ImageIcon size={22} strokeWidth={1.5} />
      </span>
      <span className="placeholder__label">{label}</span>
      {hint && <span className="placeholder__hint">{hint}</span>}
      <span className="placeholder__hint" style={{fontFamily: 'Geist Mono, monospace', fontSize: 12}}>
        diagram coming soon
      </span>
    </figure>
  );
}

interface StackProps {
  layers: {label: string; icon?: ReactNode; dim?: boolean}[];
  caption?: string;
}

export function Stack({layers, caption}: StackProps) {
  return (
    <Diagram caption={caption}>
      <Flow column>
        {layers.map((layer, index) => (
          <span key={layer.label} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 10}}>
            <DiagramNode dim={layer.dim} icon={layer.icon}>
              {layer.label}
            </DiagramNode>
            {index < layers.length - 1 && <FlowArrowDown />}
          </span>
        ))}
      </Flow>
    </Diagram>
  );
}
