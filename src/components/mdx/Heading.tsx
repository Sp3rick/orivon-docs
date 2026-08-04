import {Hash} from 'lucide-react';
import {slugify} from '@/lib/utils';
import type {ReactNode} from 'react';

interface HeadingProps {
  children?: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

function headingText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) {
    return children
      .map((child) => (typeof child === 'string' ? child : ''))
      .join('');
  }
  return '';
}

export function Heading({children, level}: HeadingProps) {
  const text = headingText(children);
  const id = slugify(text);
  const Tag = `h${level}` as const;

  return (
    <Tag id={id}>
      {children}
      <a
        className="anchor-link"
        href={`#${id}`}
        aria-label={`Link to ${text}`}
        title={text}
      >
        <Hash size={15} strokeWidth={1.8} />
      </a>
    </Tag>
  );
}
