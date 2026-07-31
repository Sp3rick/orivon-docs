import searchIndexJson from '@/generated/search-index.json';

export interface SearchHeading {
  id: string;
  text: string;
  level: number;
}

export interface SearchEntry {
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

export const searchIndex: SearchEntry[] = searchIndexJson as SearchEntry[];

export function headingsForSlug(slug: string): SearchHeading[] {
  const entry = searchIndex.find((item) => item.slug === slug);
  return entry?.headings ?? [];
}
