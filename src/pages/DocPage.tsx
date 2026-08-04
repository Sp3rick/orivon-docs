import {useParams} from 'react-router-dom';
import {MDXProvider} from '@mdx-js/react';
import {Breadcrumbs} from '@/components/Breadcrumbs';
import {DocHeader} from '@/components/DocHeader';
import {DocsLayout} from '@/components/DocsLayout';
import {PrevNext} from '@/components/PrevNext';
import {ComingSoon} from '@/components/content/ComingSoon';
import {mdxComponents} from '@/components/mdx/MDXComponents';
import {getAdjacentDocs, getDoc} from '@/lib/docs';
import {headingsForSlug} from '@/lib/search';
import {findComingSoon, sectionHomeRoute, sectionLabelFor} from '@/lib/sidebar';

const LIVE_LEVELS = [
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

export default function DocPage() {
  const {level, id, '*': rest} = useParams<{level: string; id?: string; '*': string}>();
  const fullId = rest ? `${id}/${rest}` : (id ?? '');

  if (!level || !fullId) {
    return (
      <DocsLayout>
        <div className="docs-content">
          <Breadcrumbs pageTitle="Documentation" />
          <ComingSoon />
        </div>
      </DocsLayout>
    );
  }

  if (!LIVE_LEVELS.includes(level)) {
    const comingSoon = findComingSoon(level, id ?? '');
    return (
      <DocsLayout>
        <div className="docs-content">
          <Breadcrumbs
            pageTitle={comingSoon?.label ?? 'Documentation'}
            section={comingSoon?.section ?? sectionLabelFor(level)}
          />
          <div className="doc-header">
            <h1 className="doc-header__title">{comingSoon?.label ?? 'Documentation'}</h1>
            {comingSoon && (
              <p className="doc-header__description">
                Part of the {comingSoon.section} section.
              </p>
            )}
          </div>
          <ComingSoon />
        </div>
      </DocsLayout>
    );
  }

  const doc = getDoc(`${level}/${fullId}`);
  if (!doc) {
    return (
      <DocsLayout>
        <div className="docs-content">
          <Breadcrumbs pageTitle="Not found" section={sectionLabelFor(level)} />
          <div className="doc-header">
            <h1 className="doc-header__title">Page not found</h1>
            <p className="doc-header__description">
              This page does not exist (yet). Check the navigation or use search to find what
              you are looking for.
            </p>
          </div>
        </div>
      </DocsLayout>
    );
  }

  const headings = headingsForSlug(doc.id);
  const {prev, next} = getAdjacentDocs(doc.id);
  const sectionHref = sectionHomeRoute(doc.level);

  return (
    <DocsLayout headings={headings}>
      <div className="docs-content">
        <Breadcrumbs pageTitle={doc.title} section={sectionLabelFor(doc.level)} sectionHref={sectionHref} />
        <DocHeader doc={doc} />
        <article className="prose">
          <MDXProvider components={mdxComponents}>
            <doc.Component />
          </MDXProvider>
        </article>
        <PrevNext prev={prev} next={next} />
      </div>
    </DocsLayout>
  );
}
