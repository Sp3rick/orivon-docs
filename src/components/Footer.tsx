import {Link} from 'react-router-dom';
import {
  Github,
  Globe,
  MessagesSquare,
  Send,
  Twitter,
  Users,
} from 'lucide-react';
import {Logo} from '@/components/Logo';

const communityLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/OrivonBrowser/orivon-docs',
    icon: Github,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/DuRg87MvgD',
    icon: MessagesSquare,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/OrivonBrowser',
    icon: Send,
  },
  {
    label: 'OrivonStack Forum',
    href: 'https://orivonstack.com',
    icon: Globe,
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/OrivonBrowser',
    icon: Twitter,
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" style={{display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--text)', textDecoration: 'none'}}>
              <Logo size={28} />
              <span style={{fontSize: 17, fontWeight: 650, letterSpacing: '-0.02em'}}>Orivon</span>
            </Link>
            <p className="footer__tagline">
              The browser for the next generation of the web: a trustless, user-friendly
              Web3 browsing system built on new open standards.
            </p>
            <span className="badge badge--outline" style={{marginTop: 4}}>
              <span style={{width: 6, height: 6, borderRadius: '50%', background: 'var(--text)', display: 'inline-block'}} />
              Open source
            </span>
          </div>

          <div>
            <div className="footer__col-title">Documentation</div>
            <ul className="footer__col-list">
              <li><Link className="footer__col-link" to="/docs/introduction/home">Home</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/what-is-orivon">What is Orivon</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/architecture-overview">Architecture</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/roadmap">Roadmap</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/faq">FAQ</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/glossary">Glossary</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Project</div>
            <ul className="footer__col-list">
              <li><Link className="footer__col-link" to="/docs/introduction/vision">Vision</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/key-features">Key Features</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/why-orivon-exists">Why Orivon Exists</Link></li>
              <li><Link className="footer__col-link" to="/docs/introduction/problems-with-todays-web">Problems With Today’s Web</Link></li>
              <li>
                <a className="footer__col-link" href="https://github.com/OrivonBrowser/orivon-docs" target="_blank" rel="noopener noreferrer">
                  <Github size={14} strokeWidth={1.8} /> Contribute
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Community</div>
            <ul className="footer__col-list">
              {communityLinks.map(({label, href, icon: Icon}) => (
                <li key={label}>
                  <a
                    className="footer__col-link"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={14} strokeWidth={1.8} /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} The Orivon Project. Built for the next generation of the web.
          </span>
          <span style={{display: 'inline-flex', alignItems: 'center', gap: 6}}>
            <Users size={13} strokeWidth={1.8} /> Open, community-driven standards
          </span>
        </div>
      </div>
    </footer>
  );
}
