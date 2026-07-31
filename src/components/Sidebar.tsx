import {useEffect, useMemo, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import type {LucideIcon} from 'lucide-react';
import {
  Accessibility,
  Activity,
  AlertTriangle,
  Archive,
  AtSign,
  Atom,
  Award,
  BadgeCheck,
  BarChart,
  Book,
  BookOpen,
  Boxes,
  Blocks,
  Brain,
  Briefcase,
  Bug,
  Building2,
  Calendar,
  ChefHat,
  ChevronDown,
  ClipboardList,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  DraftingCompass,
  Eye,
  FileCode2,
  FileImage,
  FileSearch,
  FileText,
  Fingerprint,
  FlaskConical,
  FolderTree,
  Gauge,
  Gift,
  GitBranch,
  GitCompare,
  GitPullRequest,
  Globe,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Home,
  Image,
  Info,
  KeyRound,
  Landmark,
  Languages,
  Layers,
  LayoutGrid,
  Library,
  LifeBuoy,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MemoryStick,
  MessageCircleQuestion,
  MessageSquare,
  Microscope,
  Network,
  Newspaper,
  PackageCheck,
  PackageOpen,
  Palette,
  PartyPopper,
  Plug,
  Puzzle,
  Radio,
  Repeat,
  Rocket,
  Route,
  Scale,
  ScrollText,
  Server,
  Settings,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  TriangleAlert,
  Trophy,
  Users,
  Wallet,
  Waypoints,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';
import type {SidebarLink, SidebarSection} from '@/lib/docs';
import {sidebarSections} from '@/lib/sidebar';
import {cn} from '@/lib/utils';

const sectionIcons: Record<string, Record<string, LucideIcon>> = {
  introduction: {
    home: Home,
    'what-is-orivon': Info,
    'why-orivon-exists': Zap,
    'problems-with-todays-web': AlertTriangle,
    vision: Compass,
    'key-features': Layers,
    'architecture-overview': Network,
    roadmap: Route,
    faq: MessageCircleQuestion,
    glossary: Book,
  },
  ecosystem: {
    'ecosystem-overview': Blocks,
    browser: Globe,
    runtime: Cpu,
    core: Boxes,
    modules: Puzzle,
    sdk: Code2,
    'wallet-system': Wallet,
    identity: Fingerprint,
    'naming-system': AtSign,
    'web3-score': Gauge,
    'security-model': ShieldCheck,
    networking: Network,
    storage: Database,
    governance: Landmark,
    'future-products': Rocket,
  },
  'technical-design': {
    'architecture-overview': Network,
    'browser-architecture': Globe,
    'runtime-architecture': Cpu,
    'core-architecture': Boxes,
    'module-architecture': Puzzle,
    'permission-system': KeyRound,
    sandbox: Lock,
    'module-loader': PackageOpen,
    'application-lifecycle': Activity,
    'communication-bus': Radio,
    'api-layer': Plug,
    'networking-stack': Waypoints,
    'storage-engine': Database,
    'identity-layer': Fingerprint,
    'wallet-architecture': Wallet,
    'dns-architecture': AtSign,
    'security-architecture': Shield,
    'rendering-pipeline': Layers,
    'process-model': Workflow,
    'memory-management': MemoryStick,
    configuration: Settings,
    logging: ScrollText,
    'error-handling': TriangleAlert,
    performance: Gauge,
    'testing-architecture': FlaskConical,
    'future-improvements': Rocket,
  },
  standards: {
    overview: ScrollText,
    'why-standards-matter': ShieldCheck,
    'specification-lifecycle': Workflow,
    versioning: GitBranch,
    'writing-specifications': FileCode2,
    'specification-template': FileText,
    'specification-registry': Database,
    'draft-specifications': DraftingCompass,
    'accepted-specifications': BadgeCheck,
    'deprecated-specifications': Archive,
    compliance: Shield,
    'conformance-testing': FlaskConical,
    roadmap: Route,
  },
  developers: {
    overview: BookOpen,
    'getting-started': Rocket,
    'development-environment': Wrench,
    'system-requirements': Cpu,
    installation: Download,
    'quick-start': Zap,
    'project-structure': FolderTree,
    cli: Terminal,
    'creating-your-first-project': LayoutGrid,
    'building-your-first-module': Puzzle,
    'building-your-first-application': LayoutGrid,
    'module-manifest': FileCode2,
    'runtime-apis': Cpu,
    'core-apis': Boxes,
    'browser-apis': Globe,
    'wallet-apis': Wallet,
    'identity-apis': Fingerprint,
    'storage-apis': Database,
    'networking-apis': Network,
    'dns-apis': AtSign,
    permissions: KeyRound,
    events: Radio,
    configuration: Settings,
    debugging: Bug,
    logging: ScrollText,
    testing: FlaskConical,
    performance: Gauge,
    'best-practices': ShieldCheck,
    examples: Code2,
    tutorials: GraduationCap,
    cookbook: ChefHat,
    'migration-guides': GitCompare,
    faq: MessageCircleQuestion,
    troubleshooting: LifeBuoy,
  },
  contributors: {
    overview: Compass,
    'why-contribute': HeartHandshake,
    'getting-started': Rocket,
    'code-of-conduct': Scale,
    'community-guidelines': Users,
    'development-workflow': Workflow,
    'repository-structure': FolderTree,
    'branching-strategy': GitBranch,
    'coding-standards': Code2,
    'documentation-standards': FileText,
    'issue-guidelines': MessageSquare,
    'bug-reports': Bug,
    'feature-requests': Lightbulb,
    'pull-requests': GitPullRequest,
    'code-reviews': Eye,
    'testing-guidelines': FlaskConical,
    'release-process': PackageCheck,
    'continuous-integration': Repeat,
    'security-policy': Shield,
    'responsible-disclosure': ShieldAlert,
    localization: Languages,
    accessibility: Accessibility,
    'design-contributions': Palette,
    'documentation-contributions': FileText,
    'good-first-issues': Sparkles,
    mentorship: GraduationCap,
    recognition: Award,
    faq: MessageCircleQuestion,
    troubleshooting: LifeBuoy,
  },
  'api-reference': {
    overview: BookOpen,
    conventions: ScrollText,
    versioning: GitBranch,
    authentication: KeyRound,
    'runtime-api': Cpu,
    'core-api': Boxes,
    'browser-api': Globe,
    'module-api': Puzzle,
    'application-api': LayoutGrid,
    'wallet-api': Wallet,
    'identity-api': Fingerprint,
    'storage-api': Database,
    'networking-api': Network,
    'dns-api': AtSign,
    'permissions-api': ShieldCheck,
    'security-api': Shield,
    events: Radio,
    interfaces: Layers,
    classes: Boxes,
    functions: Blocks,
    methods: FileCode2,
    objects: PackageOpen,
    enums: FileText,
    types: Code2,
    configuration: Settings,
    schemas: Database,
    'manifest-format': FileCode2,
    'error-codes': TriangleAlert,
    'http-status-codes': Info,
    'cli-reference': Terminal,
    'environment-variables': Settings,
    examples: Code2,
    deprecations: Archive,
    changelog: GitPullRequest,
  },
  research: {
    overview: BookOpen,
    'research-library': Library,
    'orivon-whitepaper': ScrollText,
    'browser-whitepaper': Globe,
    'runtime-whitepaper': Cpu,
    'core-whitepaper': Boxes,
    'module-system-whitepaper': Puzzle,
    'security-whitepaper': Shield,
    'networking-whitepaper': Network,
    'storage-whitepaper': Database,
    'identity-whitepaper': Fingerprint,
    'web3-score-whitepaper': Gauge,
    'design-documents': DraftingCompass,
    'browser-architecture': Globe,
    'runtime-architecture': Cpu,
    'core-architecture': Boxes,
    'module-system': Puzzle,
    'permission-system': KeyRound,
    'security-model': ShieldCheck,
    'communication-layer': Radio,
    'rendering-pipeline': Layers,
    'storage-layer': Database,
    'networking-layer': Waypoints,
    'security-research': ShieldAlert,
    'networking-research': Network,
    'storage-research': Database,
    'identity-research': Fingerprint,
    'web3-score-research': Gauge,
    'runtime-research': Cpu,
    'browser-research': Globe,
    'performance-research': Activity,
    'cryptography-research': Lock,
    'wasm-research': Blocks,
    'decentralized-computing': Atom,
    'artificial-intelligence': Brain,
    'future-internet': Rocket,
    'experimental-features': Microscope,
    'research-roadmap': Route,
    references: FileSearch,
  },
  community: {
    overview: Compass,
    'mission-and-values': Sparkles,
    community: Users,
    governance: Landmark,
    maintainers: Wrench,
    'working-groups': Workflow,
    'working-groups/runtime': Cpu,
    'working-groups/browser': Globe,
    'working-groups/core': Boxes,
    'working-groups/sdk': Code2,
    'working-groups/security': Shield,
    'working-groups/documentation': FileText,
    'working-groups/community': HeartHandshake,
    'working-groups/developer-experience': LayoutGrid,
    'working-groups/research': Microscope,
    'technical-steering-committee': Scale,
    'decision-making': GitCompare,
    'project-roadmap': Route,
    'community-roadmap': Rocket,
    'open-source-philosophy': BookOpen,
    'contribution-recognition': Award,
    'community-showcase': Sparkles,
    'community-events': Calendar,
    meetups: MapPin,
    hackathons: Trophy,
    'grants-program': Gift,
    sponsors: Building2,
    partners: Handshake,
    'ecosystem-projects': Boxes,
    'project-directory': FolderTree,
    'case-studies': ClipboardList,
    'success-stories': PartyPopper,
    'media-kit': Image,
    'press-resources': Newspaper,
    'brand-guidelines': Palette,
    'logos-and-assets': FileImage,
    'social-channels': Share2,
    newsletter: Mail,
    faq: MessageCircleQuestion,
  },
  project: {
    overview: Compass,
    about: Info,
    'mission-vision': Sparkles,
    history: ScrollText,
    organization: Blocks,
    leadership: Award,
    'core-team': Users,
    maintainers: Wrench,
    advisors: GraduationCap,
    structure: Network,
    'release-lifecycle': Route,
    'version-support': ShieldCheck,
    roadmap: Route,
    'trust-center': Shield,
    'security-policy': ShieldCheck,
    'privacy-policy': Lock,
    licensing: Scale,
    'open-source-licenses': FileText,
    'third-party-licenses': FileText,
    legal: Archive,
    compliance: ShieldAlert,
    enterprise: Building2,
    'enterprise-features': Boxes,
    'enterprise-deployment': Server,
    'professional-services': Briefcase,
    support: LifeBuoy,
    'support-policy': ClipboardList,
    slos: Gauge,
    partners: Handshake,
    'technology-partners': Puzzle,
    'integration-partners': Plug,
    'case-studies': ClipboardList,
    'success-stories': PartyPopper,
    funding: Wallet,
    transparency: BarChart,
    'brand-center': Palette,
    'brand-guidelines': Palette,
    'logos-assets': Image,
    'media-kit': Image,
    'press-resources': Newspaper,
    downloads: Download,
    'doc-archive': Archive,
    'release-archive': PackageOpen,
    'changelog-archive': GitPullRequest,
    contact: Mail,
    faq: MessageCircleQuestion,
  },
};

interface LinkItemProps {
  item: SidebarLink;
  pathname: string;
}

function LinkItem({item, pathname}: LinkItemProps) {
  const route = `/docs/${item.id}`;
  const isActive = pathname === route;
  const [level, slug] = item.id?.split('/') ?? [];
  const Icon = sectionIcons[level]?.[slug ?? ''] ?? Book;
  return (
    <li className="sidebar__item">
      <Link
        to={route}
        className={cn('sidebar__link', isActive && 'is-active')}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="sidebar__link-icon">
          <Icon size={15} strokeWidth={1.8} />
        </span>
        {item.label}
      </Link>
    </li>
  );
}

function GroupedItems({items, pathname}: {items: SidebarLink[]; pathname: string}) {
  const {flat, groups} = useMemo(() => {
    const map = new Map<string, SidebarLink[]>();
    const flatItems: SidebarLink[] = [];
    for (const item of items) {
      if (item.group) {
        const arr = map.get(item.group) ?? [];
        arr.push(item);
        map.set(item.group, arr);
      } else {
        flatItems.push(item);
      }
    }
    return {flat: flatItems, groups: [...map.entries()]};
  }, [items]);

  return (
    <>
      {flat.length > 0 && (
        <ul className="sidebar__list">
          {flat.map((item) => (
            <LinkItem key={item.id} item={item} pathname={pathname} />
          ))}
        </ul>
      )}
      {groups.map(([label, groupItems]) => (
        <div key={label} className="sidebar__subgroup">
          <div className="sidebar__subgroup-label">{label}</div>
          <ul className="sidebar__list">
            {groupItems.map((item) => (
              <LinkItem key={item.id} item={item} pathname={pathname} />
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function isSectionActive(section: SidebarSection, pathname: string): boolean {
  return (
    !section.comingSoon &&
    section.items.some((item) => item.id && `/docs/${item.id}` === pathname)
  );
}

export function Sidebar() {
  const {pathname} = useLocation();

  const [open, setOpen] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {
      foundation: true,
      implementation: true,
      more: true,
    };
    const active = sidebarSections.find((s) => isSectionActive(s, pathname));
    if (active) initial[active.id] = true;
    return initial;
  });

  const activeSectionId = useMemo(
    () => sidebarSections.find((s) => isSectionActive(s, pathname))?.id,
    [pathname],
  );

  useEffect(() => {
    if (activeSectionId) {
      setOpen((prev) => (prev[activeSectionId] ? prev : {...prev, [activeSectionId]: true}));
    }
  }, [activeSectionId]);

  const toggle = (id: string) => setOpen((prev) => ({...prev, [id]: !prev[id]}));

  return (
    <nav className="sidebar" aria-label="Documentation">
      {sidebarSections.map((section) => {
        const isOpen = !!open[section.id];
        return (
          <div key={section.id} className="sidebar__group">
            <button
              type="button"
              className={cn('sidebar__toggle', isOpen && 'is-open')}
              aria-expanded={isOpen}
              aria-controls={`sidebar-group-${section.id}`}
              onClick={() => toggle(section.id)}
            >
              <span className="sidebar__toggle-label">{section.label}</span>
              {section.comingSoon && <span className="sidebar__toggle-badge">Coming Soon</span>}
              <ChevronDown size={14} strokeWidth={2} className="sidebar__toggle-chevron" aria-hidden="true" />
            </button>
            {isOpen && (
              <div id={`sidebar-group-${section.id}`} className="sidebar__group-body">
                {section.comingSoon ? (
                  <ul className="sidebar__list">
                    {section.items.map((item) => (
                      <li key={item.label} className="cs-item">
                        <span className="cs-item__label">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <GroupedItems items={section.items} pathname={pathname} />
                )}
              </div>
            )}
          </div>
        );
      })}

    </nav>
  );
}
