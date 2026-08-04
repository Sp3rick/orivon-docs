import {Link} from 'react-router-dom';
import {ArrowRight, Compass, FileQuestion, Search} from 'lucide-react';
import {useSearch} from '@/lib/search-context';

export default function NotFound() {
  const {open} = useSearch();

  return (
    <div className="container" style={{paddingTop: 96, paddingBottom: 120}}>
      <div
        style={{
          maxWidth: 560,
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <span
          style={{
            width: 56,
            height: 56,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            border: '1px solid var(--border)',
            background: 'var(--bg-subtle)',
            color: 'var(--text-2)',
          }}
        >
          <FileQuestion size={26} strokeWidth={1.6} />
        </span>
        <span className="badge">404</span>
        <h1 style={{fontSize: '2.4rem', letterSpacing: '-0.03em', fontWeight: 700}}>
          Page not found
        </h1>
        <p style={{color: 'var(--text-2)', fontSize: 16, lineHeight: 1.7, maxWidth: 420, margin: 0}}>
          The page you are looking for doesn’t exist or hasn’t been published yet.
        </p>
        <div className="flex-row" style={{justifyContent: 'center', marginTop: 12}}>
          <Link to="/" className="btn btn--primary">
            <Compass size={16} strokeWidth={1.8} /> Back to home
          </Link>
          <button type="button" className="btn btn--secondary" onClick={open}>
            <Search size={16} strokeWidth={1.8} /> Search docs
          </button>
        </div>
        <Link to="/docs/introduction/home" className="link-arrow" style={{marginTop: 8}}>
          Go to the Introduction <ArrowRight size={14} strokeWidth={1.8} />
        </Link>
      </div>
    </div>
  );
}
