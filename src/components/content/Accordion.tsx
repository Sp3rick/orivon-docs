import {ChevronDown} from 'lucide-react';
import {useId, useState} from 'react';
import type {ReactNode} from 'react';

export interface AccordionItem {
  q: string;
  a: ReactNode;
}

interface AccordionProps {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  title?: string;
  children?: ReactNode;
}

export function Accordion({items, allowMultiple = false, title, children}: AccordionProps) {
  const baseId = useId();
  const resolvedItems = Array.isArray(items)
    ? items
    : title || children
      ? [{q: title ?? '', a: children}]
      : [];

  const [openIndexes, setOpenIndexes] = useState<number[]>(resolvedItems.length ? [0] : []);

  const toggle = (index: number) => {
    setOpenIndexes((current) => {
      if (allowMultiple) {
        return current.includes(index)
          ? current.filter((i) => i !== index)
          : [...current, index];
      }
      return current.includes(index) ? [] : [index];
    });
  };

  return (
    <div className="accordion">
      {resolvedItems.map((item, index) => {
        const open = openIndexes.includes(index);
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={index} className="accordion__item" data-open={open}>
            <button
              type="button"
              id={buttonId}
              className="accordion__trigger"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggle(index)}
            >
              <span>{item.q}</span>
              <ChevronDown size={16} strokeWidth={1.8} className="accordion__icon" />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="accordion__panel"
            >
              <div className="accordion__panel-inner">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
