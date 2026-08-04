import type {ComponentType} from 'react';

export interface Frontmatter {
  title: string;
  description?: string;
  readingTime?: number;
  lastUpdated?: string;
  order?: number;
  tags?: string[];
  keywords?: string[];
  hideToc?: boolean;
}

export interface MDXModule {
  default: ComponentType;
  frontmatter?: Frontmatter;
}

export interface DocEntry {
  id: string;
  slug: string;
  level: string;
  order?: number;
  route: string;
  file: string;
  title: string;
  description?: string;
  readingTime?: number;
  lastUpdated?: string;
  tags?: string[];
  keywords?: string[];
  Component: ComponentType;
}

export interface SidebarLink {
  type: 'link';
  id?: string;
  label: string;
  href?: string;
  comingSoon?: boolean;
  /** Optional sub-group label used to organize long sections in the sidebar. */
  group?: string;
}

export interface SidebarSection {
  id: string;
  label: string;
  badge?: string;
  comingSoon?: boolean;
  items: SidebarLink[];
}

const LEVELS = [
  'introduction',
  'ecosystem',
  'technical-design',
  'standards',
  'api-reference',
  'research',
  'community',
  'project',
  'developers',
  'contributors',
];

const modules = import.meta.glob(
  [
    '/docs/introduction/*.mdx',
    '/docs/ecosystem/*.mdx',
    '/docs/technical-design/*.mdx',
    '/docs/standards/*.mdx',
    '/docs/api-reference/*.mdx',
    '/docs/research/*.mdx',
    '/docs/community/**/*.mdx',
    '/docs/project/**/*.mdx',
    '/docs/developers/**/*.mdx',
    '/docs/contributors/**/*.mdx',
  ],
  {eager: true},
) as Record<string, MDXModule>;

function levelFromPath(path: string): string {
  return path.split('/')[2] ?? '';
}

function slugFromPath(path: string): string {
  const parts = path.split('/');
  const slug = parts.slice(3).join('/').replace(/\.mdx?$/, '');
  return slug.replace(/\/index$/, '');
}

export const docs: DocEntry[] = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = slugFromPath(path);
    const level = levelFromPath(path);
    const fm: Frontmatter = (mod.frontmatter ?? {}) as Frontmatter;
    return {
      id: `${level}/${slug}`,
      slug,
      level,
      order: fm.order,
      route: `/docs/${level}/${slug}`,
      file: path,
      title: fm.title ?? slug,
      description: fm.description,
      readingTime: fm.readingTime,
      lastUpdated: fm.lastUpdated,
      tags: fm.tags,
      keywords: fm.keywords,
      Component: mod.default,
    } satisfies DocEntry;
  })
  .sort((a, b) => {
    const la = LEVELS.indexOf(a.level);
    const lb = LEVELS.indexOf(b.level);
    if (la !== lb) return la - lb;
    return (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER);
  });

export function getDoc(id: string): DocEntry | undefined {
  return docs.find((d) => d.id === id || d.slug === id);
}

export function getDocByRoute(route: string): DocEntry | undefined {
  return docs.find((d) => d.route === route);
}

export function getDocBySlug(slug: string): DocEntry | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getAdjacentDocs(id: string): {
  prev?: DocEntry;
  next?: DocEntry;
} {
  const index = docs.findIndex((d) => d.id === id);
  if (index === -1) return {};
  return {
    prev: docs[index - 1],
    next: docs[index + 1],
  };
}
