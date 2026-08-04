import {Link} from 'react-router-dom';
import {
  AlertTriangle,
  Boxes,
  Check,
  Cpu,
  Database,
  FileCode2,
  Gauge,
  Globe,
  Layers,
  Lock,
  Network,
  Puzzle,
  Shield,
  Wallet,
} from 'lucide-react';
import type {AnchorHTMLAttributes, ReactNode} from 'react';
import type {MDXComponents as MDXComponentsType} from 'mdx/types';
import {CodeBlock} from './CodeBlock';
import {Heading} from './Heading';
import {Accordion} from '../content/Accordion';
import {Badge, Tag, TagList} from '../content/Badge';
import {Callout, Danger, Info, Note, Success, Warning} from '../content/Callout';
import {Card, CardGrid} from '../content/Card';
import {ComingSoon} from '../content/ComingSoon';
import {Diagram, DiagramNode, DiagramPlaceholder, Flow, FlowArrow, FlowArrowDown, Stack} from '../content/Diagrams';
import {Faq} from '../content/Faq';
import {FeatureCard} from '../content/FeatureCard';
import {Glossary} from '../content/Glossary';
import {Stat, StatGrid} from '../content/Stat';
import {CheckList, Step, Steps} from '../content/Steps';
import {Timeline} from '../content/Timeline';
import {SpecRegistry} from '../content/SpecRegistry';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

interface HeadingProps {
  children?: ReactNode;
}

function Anchor({href, children, ...rest}: AnchorProps) {
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    );
  }
  if (href && href.startsWith('#')) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

interface CodeProps {
  className?: string;
  title?: string;
  children?: unknown;
  [key: string]: unknown;
}

function Code({className, title, children, ...rest}: CodeProps) {
  const isBlock = /language-[\w-]+/.test(className ?? '');
  if (isBlock) {
    return (
      <CodeBlock className={className} title={title}>
        {String(children ?? '')}
      </CodeBlock>
    );
  }
  return (
    <code className={className} {...rest}>
      {children as ReactNode}
    </code>
  );
}

export const mdxComponents = {
  h1: (props: HeadingProps) => <Heading level={1} {...props} />,
  h2: (props: HeadingProps) => <Heading level={2} {...props} />,
  h3: (props: HeadingProps) => <Heading level={3} {...props} />,
  h4: (props: HeadingProps) => <Heading level={4} {...props} />,
  h5: (props: HeadingProps) => <Heading level={5} {...props} />,
  h6: (props: HeadingProps) => <Heading level={6} {...props} />,
  a: Anchor,
  pre: ({children}: {children?: ReactNode}) => <>{children}</>,
  code: Code,
  Callout,
  Note,
  Info,
  Warning,
  Success,
  Danger,
  Card,
  CardGrid,
  FeatureCard,
  Stat,
  StatGrid,
  Badge,
  TagList,
  Tag,
  Accordion,
  Faq,
  Glossary,
  Timeline,
  Steps,
  Step,
  CheckList,
  SpecRegistry,
  Diagram,
  DiagramNode,
  Flow,
  FlowArrow,
  FlowArrowDown,
  Stack,
  DiagramPlaceholder,
  ComingSoon,
  AlertTriangle,
  Boxes,
  Check,
  Cpu,
  Database,
  FileCode2,
  Gauge,
  Globe,
  Layers,
  Lock,
  Network,
  Puzzle,
  Shield,
  Wallet,
} as unknown as MDXComponentsType;
