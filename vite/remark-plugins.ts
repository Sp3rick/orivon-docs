import {visit} from 'unist-util-visit';
import type {Root} from 'mdast';

/**
 * Extract a `title=` attribute from the info string of fenced code blocks
 * and expose it to the `code` MDX component as a `title` prop.
 *
 * ```tsx title="components/App.tsx"
 * const app = <App />;
 * ```
 */
export function remarkCodeTitle() {
  return (tree: Root) => {
    visit(tree, 'code', (node) => {
      const info = node.meta || '';
      const match = info.match(/\btitle=(?:"([^"]*)"|'([^']*)'|([^\s]+))/);
      if (!match) return;
      const title = match[1] ?? match[2] ?? match[3];
      node.data = node.data ?? {};
      node.data.hProperties = {...(node.data.hProperties ?? {}), title};
      node.meta = info.replace(/\btitle=(?:"[^"]*"|'[^']*'|[^\s]+)/, '').trim();
    });
  };
}
