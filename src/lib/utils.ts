export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/g, ' ')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function readingTimeFromWords(text: string, wpm = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / wpm));
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}
