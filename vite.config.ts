import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import {fileURLToPath, URL} from 'node:url';
import {remarkCodeTitle} from './vite/remark-plugins';
import {searchIndexPlugin} from './vite/search-index-plugin';

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
        remarkPlugins: [
          remarkFrontmatter,
          remarkGfm,
          remarkDirective,
          [remarkMdxFrontmatter, {name: 'frontmatter'}],
          remarkCodeTitle,
        ],
      }),
    },
    react(),
    searchIndexPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@site': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
  server: {
    port: 3000,
    open: false,
  },
  publicDir: 'static',
  appType: 'spa',
});
