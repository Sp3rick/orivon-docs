import {Link} from 'react-router-dom';
import {ChevronRight, Home} from 'lucide-react';

interface BreadcrumbsProps {
  pageTitle: string;
  section?: string;
  sectionHref?: string;
}

export function Breadcrumbs({pageTitle, section = 'Introduction', sectionHref = '/docs/introduction/home'}: BreadcrumbsProps) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/" className="breadcrumbs__link" aria-label="Home">
        <Home size={14} strokeWidth={1.8} style={{display: 'inline-flex', verticalAlign: 'middle'}} />
      </Link>
      <ChevronRight size={13} strokeWidth={1.8} aria-hidden="true" style={{color: 'var(--text-4)'}} />
      {sectionHref ? (
        <Link to={sectionHref} className="breadcrumbs__link">
          {section}
        </Link>
      ) : (
        <span className="breadcrumbs__current">{section}</span>
      )}
      <ChevronRight size={13} strokeWidth={1.8} aria-hidden="true" style={{color: 'var(--text-4)'}} />
      <span className="breadcrumbs__current" aria-current="page">
        {pageTitle}
      </span>
    </nav>
  );
}
