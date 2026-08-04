import {Link} from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Cpu,
  Database,
  FileCode2,
  Github,
  Globe,
  Layers,
  MessagesSquare,
  Network,
  Send,
  Shield,
  Twitter,
  Wallet,
} from 'lucide-react';
import {Diagram, DiagramNode, Flow, FlowArrow, FlowArrowDown} from '@/components/content/Diagrams';

const community = [
  {label: 'GitHub', desc: 'Source, issues & specs', href: 'https://github.com/OrivonBrowser/orivon-docs', icon: Github},
  {label: 'Discord', desc: 'Community & contributors', href: 'https://discord.gg/DuRg87MvgD', icon: MessagesSquare},
  {label: 'Telegram', desc: 'Announcements & chat', href: 'https://t.me/OrivonBrowser', icon: Send},
  {label: 'OrivonStack', desc: 'Forum & discussions', href: 'https://orivonstack.com', icon: Globe},
  {label: 'Twitter / X', desc: 'Project updates', href: 'https://x.com/OrivonBrowser', icon: Twitter},
];

const updates = [
  {date: 'Jul 2026', title: 'Level 1: Introduction documentation published', tag: 'Docs'},
  {date: 'Jul 2026', title: 'Design system: light & dark themes, search, new information architecture', tag: 'Design'},
  {date: 'Jun 2026', title: 'Open specifications drafted for the Modules, Wallet and Web3 Score systems', tag: 'Specs'},
  {date: 'May 2026', title: 'Orivon Foundation community channels launched', tag: 'Community'},
];

const quickStarts = [
  {
    num: '01',
    title: 'What is Orivon?',
    desc: 'Start here: the core philosophy, goals and how it differs from traditional browsers.',
    to: '/docs/introduction/what-is-orivon',
  },
  {
    num: '02',
    title: 'Why it exists',
    desc: 'The problems with today’s internet and why browsers need to evolve for Web3.',
    to: '/docs/introduction/why-orivon-exists',
  },
  {
    num: '03',
    title: 'Key features',
    desc: 'Runtime, Core, Browser, Modules, Wallets, DNS, Web3 Score and more at a glance.',
    to: '/docs/introduction/key-features',
  },
  {
    num: '04',
    title: 'Architecture',
    desc: 'How the pieces fit together, from standards up to applications.',
    to: '/docs/introduction/architecture-overview',
  },
];

export default function Landing() {
  return (
    <>
      {/* ============ Hero ============ */}
      <section className="landing-hero">
        <div className="container landing-hero__inner">
          <h1 className="landing-hero__title">
            The browser for the next generation of the web
          </h1>
          <p className="landing-hero__subtitle">
            Orivon is a trustless, user-friendly Web3 browser built on new open standards.
            This site is where the project documents itself: the vision, the architecture
            and the roadmap, written in plain language.
          </p>
          <div className="landing-hero__actions">
            <Link to="/docs/introduction/home" className="btn btn--primary btn--lg">
              <BookOpen size={17} strokeWidth={1.8} /> Read the documentation
            </Link>
            <a
              href="https://github.com/OrivonBrowser/orivon-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--lg"
            >
              <Github size={17} strokeWidth={1.8} /> View on GitHub
            </a>
          </div>
          <div className="landing-hero__meta">
            <span className="landing-hero__meta-item">
              <Shield size={14} strokeWidth={1.8} /> Trustless by design
            </span>
            <span className="landing-hero__meta-item">
              <Layers size={14} strokeWidth={1.8} /> Modular architecture
            </span>
            <span className="landing-hero__meta-item">
              <Globe size={14} strokeWidth={1.8} /> Community-driven standards
            </span>
            <span className="landing-hero__meta-item">
              <FileCode2 size={14} strokeWidth={1.8} /> Open source
            </span>
          </div>

          <div className="hero-diagram">
            <Diagram
              caption="A preview of the Orivon stack. Applications on top, open standards below. See the Architecture Overview for the full picture."
            >
              <Flow>
                <DiagramNode dim>Applications</DiagramNode>
                <FlowArrow />
                <DiagramNode accent>
                  <Cpu size={15} strokeWidth={1.8} /> Browser
                </DiagramNode>
                <FlowArrow />
                <DiagramNode>
                  <Boxes size={15} strokeWidth={1.8} /> Runtime
                </DiagramNode>
                <FlowArrow />
                <DiagramNode>
                  <Network size={15} strokeWidth={1.8} /> Core
                </DiagramNode>
              </Flow>
              <div style={{height: 14}} />
              <Flow>
                <DiagramNode dim icon={<Wallet size={14} strokeWidth={1.8} />}>
                  Wallets
                </DiagramNode>
                <DiagramNode dim icon={<Database size={14} strokeWidth={1.8} />}>
                  Modules
                </DiagramNode>
                <DiagramNode dim icon={<FileCode2 size={14} strokeWidth={1.8} />}>
                  Standards
                </DiagramNode>
              </Flow>
            </Diagram>
          </div>
        </div>
      </section>

      {/* ============ Mission ============ */}
      <section className="landing-section" id="mission">
        <div className="container">
          <div className="landing-split">
            <div>
              <div className="landing-section__eyebrow">Mission</div>
              <h2 className="landing-split__title">Make Web3 usable for everyone</h2>
              <p className="landing-split__text">
                Orivon exists to close the gap between decentralized networks and the people
                who should benefit from them. Today that means juggling wallets, bridges,
                extensions and trust assumptions. Orivon treats these as first-class
                browser features: safe by default, invisible when they should be.
              </p>
              <p className="landing-split__text" style={{marginBottom: 0}}>
                The mission is simple to state: bring Web3 to real adoption by making the
                browser itself the interface to a trustless internet.
              </p>
            </div>
            <ul className="landing-split__list">
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">Trustless by default</span>
                <span className="landing-split__list-def">No hidden intermediaries, no vendor lock-in.</span>
              </li>
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">User sovereignty</span>
                <span className="landing-split__list-def">You own your data, keys and identity.</span>
              </li>
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">Native Web3</span>
                <span className="landing-split__list-def">Wallets, DNS and dApps built into the browser.</span>
              </li>
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">Open standards</span>
                <span className="landing-split__list-def">A platform anyone can build on and extend.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Vision ============ */}
      <section className="landing-section landing-section--alt">
        <div className="container">
          <div className="landing-split">
            <ul className="landing-split__list">
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">Applications become websites</span>
                <span className="landing-split__list-def">Software distributed and updated like pages, with no installs and no app stores.</span>
              </li>
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">Decentralized computing</span>
                <span className="landing-split__list-def">Infrastructure, identity and value move back to users and communities.</span>
              </li>
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">A modular ecosystem</span>
                <span className="landing-split__list-def">Browsers, runtimes and modules that interoperate through public standards.</span>
              </li>
              <li className="landing-split__list-item">
                <span className="landing-split__list-term">A foundation, not a company</span>
                <span className="landing-split__list-def">Governed openly, built for everyone who shares the vision.</span>
              </li>
            </ul>
            <div>
              <div className="landing-section__eyebrow">Vision</div>
              <h2 className="landing-split__title">A web that belongs to its users</h2>
              <p className="landing-split__text">
                Long-term, Orivon changes how software is distributed and how computing is
                organized. The browser becomes a full operating environment: a runtime that
                runs applications directly, connected to decentralized storage, identity and
                value.
              </p>
              <p className="landing-split__text" style={{marginBottom: 0}}>
                That future is built one open standard at a time, starting with the
                documentation you are reading now.
              </p>
              <Link to="/docs/introduction/vision" className="btn btn--secondary" style={{marginTop: 8}}>
                Read the full vision <ArrowRight size={15} strokeWidth={1.8} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Where things stand ============ */}
      <section className="landing-section">
        <div className="container">
          <div className="landing-note">
            <div className="landing-note__kicker">Where things stand today</div>
            <div className="landing-note__body">
              <p>
                Orivon is early. Level 1 of this documentation is live: ten pages that
                describe the vision, the architecture and the roadmap. The specifications
                for the Core, Runtime, Modules, Wallet system, Web3 Score and decentralized
                DNS are being drafted openly on GitHub. There is no browser build yet, and
                there may not be for a while.
              </p>
              <p>
                That is the honest state of the project, and it is a good place to start.
                If you want to help, the docs, the specs and the community are all open.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Architecture preview ============ */}
      <section className="landing-section landing-section--alt">
        <div className="container">
          <div className="landing-section__head landing-section__head--center">
            <div className="landing-section__eyebrow" style={{justifyContent: 'center'}}>
              Architecture preview
            </div>
            <h2 className="landing-section__title">One stack, three layers</h2>
            <p className="landing-section__subtitle">
              A clean separation between what users see, what executes applications, and the
              standards everything relies on.
            </p>
          </div>
          <div style={{maxWidth: 720, margin: '0 auto'}}>
            <Diagram caption="Conceptual stack. Details on the Architecture Overview page.">
              <Flow column>
                <DiagramNode>
                  <Globe size={15} strokeWidth={1.8} /> Browser & Applications
                </DiagramNode>
                <FlowArrowDown />
                <DiagramNode>
                  <Boxes size={15} strokeWidth={1.8} /> Runtime & Modules
                </DiagramNode>
                <FlowArrowDown />
                <DiagramNode>
                  <Database size={15} strokeWidth={1.8} /> Core & Standards
                </DiagramNode>
              </Flow>
            </Diagram>
          </div>
        </div>
      </section>

      {/* ============ Quick start ============ */}
      <section className="landing-section">
        <div className="container">
          <div className="landing-section__head">
            <div className="landing-section__eyebrow">Get started</div>
            <h2 className="landing-section__title">Jump into the documentation</h2>
            <p className="landing-section__subtitle">
              The best places to begin, depending on what you want to learn.
            </p>
          </div>
          <div className="quickstart-grid">
            {quickStarts.map((card) => (
              <Link key={card.num} to={card.to} className="quickstart-card">
                <span className="quickstart-card__num">{card.num}</span>
                <span className="quickstart-card__title">
                  {card.title}
                  <ArrowRight size={15} strokeWidth={1.8} className="quickstart-card__arrow" />
                </span>
                <span className="quickstart-card__desc">{card.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Latest updates ============ */}
      <section className="landing-section landing-section--alt">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start'}}>
            <div className="landing-section__head" style={{marginBottom: 0}}>
              <div className="landing-section__eyebrow">Latest updates</div>
              <h2 className="landing-section__title">What’s new with Orivon</h2>
              <p className="landing-section__subtitle">
                Follow the project as it grows, from specification drafts to community
                milestones. The changelog lives in the repository.
              </p>
              <Link to="/docs/introduction/roadmap" className="link-arrow" style={{marginTop: 20}}>
                See the roadmap <ArrowRight size={14} strokeWidth={1.8} />
              </Link>
            </div>
            <div className="updates-list">
              {updates.map((update) => (
                <a
                  key={update.title}
                  href="https://github.com/OrivonBrowser/orivon-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="updates-item"
                >
                  <span className="updates-item__date">{update.date}</span>
                  <span className="updates-item__title">{update.title}</span>
                  <span className="updates-item__tag">
                    <span className="badge badge--outline">{update.tag}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Community ============ */}
      <section className="landing-section">
        <div className="container">
          <div className="landing-section__head landing-section__head--center">
            <div className="landing-section__eyebrow" style={{justifyContent: 'center'}}>
              Community
            </div>
            <h2 className="landing-section__title">Built together, openly</h2>
            <p className="landing-section__subtitle">
              Orivon is a community-driven project. Join the conversation, contribute to the
              specs, or just say hello.
            </p>
          </div>
          <div className="community-grid">
            {community.map(({label, desc, href, icon: Icon}) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="community-card">
                <span className="community-card__icon">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
                <span>
                  <span className="community-card__name" style={{display: 'block'}}>{label}</span>
                  <span className="community-card__desc">{desc}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Open docs ============ */}
      <section className="landing-section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="cta-band">
            <h2 className="cta-band__title">The documentation is open</h2>
            <p className="cta-band__subtitle">
              Every page is a Markdown file you can edit. Found a typo, a gap, or a better
              way to explain something? Fixes are always welcome.
            </p>
            <div className="landing-hero__actions" style={{marginBottom: 0}}>
              <Link to="/docs/introduction/home" className="btn btn--primary btn--lg">
                <BookOpen size={17} strokeWidth={1.8} /> Read the docs
              </Link>
              <a
                href="https://github.com/OrivonBrowser/orivon-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--lg"
              >
                <Github size={17} strokeWidth={1.8} /> Contribute on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
