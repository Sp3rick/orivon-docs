import {useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {ChevronDown, Github, Menu, Search} from 'lucide-react';
import {Logo} from '@/components/Logo';
import {ThemeToggle} from '@/components/ThemeToggle';
import {useSearch} from '@/lib/search-context';

const navLinks = [
  {to: '/docs/introduction/home', label: 'Docs'},
  {to: '/docs/introduction/vision', label: 'Vision'},
  {to: '/docs/introduction/roadmap', label: 'Roadmap'},
];

const GITHUB_URL = 'https://github.com/OrivonBrowser/orivon-docs';

const versions = [
  {label: 'v1.0', note: 'Current', disabled: false},
  {label: 'v1.1', note: 'Planned', disabled: true},
  {label: 'v2.0', note: 'Research', disabled: true},
];

function VersionDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="navbar__version">
      <button
        type="button"
        className="navbar__icon-btn navbar__version-button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        aria-label="Select documentation version"
        title="Documentation version"
      >
        v1.0
        <ChevronDown size={14} strokeWidth={1.8} />
      </button>
      {open && (
        <div role="menu" aria-label="Documentation versions" className="navbar__version-menu">
          {versions.map((v) => (
            <div
              key={v.label}
              role="menuitem"
              aria-disabled={v.disabled}
              className={v.disabled ? 'navbar__version-item is-disabled' : 'navbar__version-item'}
            >
              <span>{v.label}</span>
              <span className="navbar__version-note">{v.note}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface NavbarProps {
  onOpenSidebar?: () => void;
  showMenu?: boolean;
}

export function Navbar({onOpenSidebar, showMenu = false}: NavbarProps) {
  const {open: openSearch} = useSearch();
  const {pathname} = useLocation();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <div className="navbar__left">
          {showMenu && (
            <button
              type="button"
              className="navbar__icon-btn navbar__hamburger"
              onClick={onOpenSidebar}
              aria-label="Open navigation menu"
            >
              <Menu size={18} strokeWidth={1.8} />
            </button>
          )}

          <Link to="/" className="navbar__brand" aria-label="Orivon, home">
            <Logo size={26} />
            <span className="navbar__brand-name">
              Orivon
              <span className="navbar__badge">Docs</span>
            </span>
          </Link>

          <nav className="navbar__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__nav-link ${pathname.startsWith(link.to) ? 'is-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="navbar__right">
          <button
            type="button"
            className="navbar__search"
            onClick={openSearch}
            aria-label="Open search"
          >
            <Search size={15} strokeWidth={1.8} aria-hidden="true" />
            <span className="navbar__search-label">Search</span>
            <span className="navbar__kbd" aria-hidden="true">
              Ctrl K
            </span>
          </button>

          <VersionDropdown />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon-btn"
            aria-label="Orivon documentation on GitHub"
            title="GitHub"
          >
            <Github size={17} strokeWidth={1.8} />
          </a>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
