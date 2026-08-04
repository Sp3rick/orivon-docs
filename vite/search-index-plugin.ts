import {mkdirSync, readdirSync, readFileSync, writeFileSync, type Dirent} from 'node:fs';
import path from 'node:path';
import type {Plugin} from 'vite';

/**
 * Generates a search index from the live documentation levels (Introduction,
 * Ecosystem, Technical Design, Standards & Specifications, Developer
 * Documentation) and writes it to src/generated/search-index.json, where it is
 * bundled with the app. Regenerates whenever a doc changes, in both dev and
 * build.
 */

const DOC_LEVELS: {dir: string; label: string}[] = [
  {dir: 'introduction', label: 'Introduction'},
  {dir: 'ecosystem', label: 'Ecosystem'},
  {dir: 'technical-design', label: 'Technical Design'},
  {dir: 'standards', label: 'Standards & Specifications'},
  {dir: 'api-reference', label: 'API Reference'},
  {dir: 'research', label: 'Whitepapers & Research'},
  {dir: 'community', label: 'Community, Governance & Ecosystem'},
  {dir: 'project', label: 'Project, Organization & Enterprise'},
  {dir: 'developers', label: 'Developer Documentation'},
  {dir: 'contributors', label: 'Contributor Guide'},
];
const OUT_FILE = path.resolve(process.cwd(), 'src', 'generated', 'search-index.json');

interface SearchHeading {
  id: string;
  text: string;
  level: number;
}

interface SearchEntry {
  slug: string;
  route: string;
  section: string;
  title: string;
  description: string;
  readingTime?: number;
  headings: SearchHeading[];
  keywords: string[];
  text: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseFrontmatter(source: string): {attributes: Record<string, string>; body: string} {
  const match = /^\ufeff?---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return {attributes: {}, body: source};
  const attributes: Record<string, string> = {};
  const lines = match[1].split(/\r?\n/);
  for (const line of lines) {
    const pair = /^([\w-]+):\s*(.*)$/.exec(line.trim());
    if (pair) {
      const value = pair[2]
        .replace(/^["']|["']$/g, '')
        .replace(/\s+#.*$/, '')
        .trim();
      attributes[pair[1]] = value;
    }
  }
  return {attributes, body: source.slice(match[0].length)};
}

function extractHeadings(body: string): SearchHeading[] {
  const headings: SearchHeading[] = [];
  const regex = /^(#{1,3})\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(body)) !== null) {
    const text = match[2]
      .replace(/[`*_[\](){}]/g, '')
      .replace(/^(\d+[.)]\s*)/, '')
      .trim();
    headings.push({id: slugify(text), text, level: match[1].length});
  }
  return headings;
}

function stripMarkdown(body: string): string {
  return body
    .replace(/^---[\s\S]*?---/gm, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s+/gm, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`~>]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectMdxFiles(dir: string): string[] {
  const results: string[] = [];
  let entries: Dirent[];
  try {
    entries = readdirSync(dir, {withFileTypes: true});
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdxFiles(full));
    } else if (/\.mdx?$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results.sort();
}

function slugFromFile(file: string, dir: string): string {
  return path.relative(dir, file).replace(/\.mdx?$/, '').replace(/\\/g, '/');
}

function buildIndex(): void {
  const entries: SearchEntry[] = [];

  for (const level of DOC_LEVELS) {
    const dir = path.resolve(process.cwd(), 'docs', level.dir);
    const files = collectMdxFiles(dir);

    for (const file of files) {
      const base = slugFromFile(file, dir);
      const source = readFileSync(file, 'utf8');
      const {attributes, body} = parseFrontmatter(source);
      const headings = extractHeadings(body);
      const text = stripMarkdown(body);
      const keywords = (attributes.keywords ?? '')
        .split(',')
        .map((k) => k.trim())
        .filter(Boolean);
      entries.push({
        slug: `${level.dir}/${base}`,
        route: `/docs/${level.dir}/${base}`,
        section: level.label,
        title: attributes.title ?? base,
        description: attributes.description ?? '',
        readingTime: attributes.readingTime ? Number(attributes.readingTime) : undefined,
        headings,
        keywords,
        text: text.slice(0, 4000),
      });
    }
  }

  mkdirSync(path.dirname(OUT_FILE), {recursive: true});
  writeFileSync(OUT_FILE, JSON.stringify(entries, null, 2), 'utf8');
}

function isDocFile(file: string): boolean {
  const normalized = file.replace(/\\/g, '/');
  return /docs\/(introduction|ecosystem|technical-design|standards|api-reference|research|community|project|developers|contributors)\/(?:[^/]+\/)*[^/]+\.mdx?$/.test(normalized);
}

export function searchIndexPlugin(): Plugin {
  return {
    name: 'orivon:search-index',
    buildStart() {
      buildIndex();
    },
    configureServer(server) {
      buildIndex();
      server.watcher.on('change', (file) => {
        if (isDocFile(String(file))) buildIndex();
      });
    },
    handleHotUpdate(context) {
      if (isDocFile(context.file)) {
        buildIndex();
      }
    },
  };
}
