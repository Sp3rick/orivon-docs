import type {SidebarSection} from './docs';

/**
 * Navigation tree for the documentation.
 *
 * Levels 1 (Introduction), 2 (Ecosystem), 3 (Technical Design), 4 (Standards
 * & Specifications), 5 (Developer Documentation), 6 (Contributor Guide),
 * 7 (API Reference), 8 (Whitepapers & Research), 9 (Community, Governance & Ecosystem) and
 * 10 (Project, Organization & Enterprise) are live. Every other level is
 * intentionally listed as a disabled "Coming soon" group so the information
 * architecture stays visible while the content is still being written. When a
 * new level ships, replace the placeholder group with a real section and add
 * its docs. The layout, routing and design adapt without further changes.
 */
export const sidebarSections: SidebarSection[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    items: [
      {type: 'link', id: 'introduction/home', label: 'Home', group: 'Basics'},
      {type: 'link', id: 'introduction/what-is-orivon', label: 'What is Orivon', group: 'Basics'},
      {type: 'link', id: 'introduction/why-orivon-exists', label: 'Why Orivon Exists', group: 'Basics'},
      {
        type: 'link',
        id: 'introduction/problems-with-todays-web',
        label: "Problems With Today's Web",
        group: 'Basics',
      },
      {type: 'link', id: 'introduction/vision', label: 'Vision', group: 'Platform'},
      {type: 'link', id: 'introduction/key-features', label: 'Key Features', group: 'Platform'},
      {type: 'link', id: 'introduction/architecture-overview', label: 'Architecture Overview', group: 'Platform'},
      {type: 'link', id: 'introduction/roadmap', label: 'Roadmap', group: 'Resources'},
      {type: 'link', id: 'introduction/faq', label: 'FAQ', group: 'Resources'},
      {type: 'link', id: 'introduction/glossary', label: 'Glossary', group: 'Resources'},
    ],
  },
  {
    id: 'ecosystem',
    label: 'Ecosystem',
    items: [
      {type: 'link', id: 'ecosystem/ecosystem-overview', label: 'Ecosystem Overview', group: 'Overview'},
      {type: 'link', id: 'ecosystem/browser', label: 'Browser', group: 'Overview'},
      {type: 'link', id: 'ecosystem/runtime', label: 'Runtime', group: 'Overview'},
      {type: 'link', id: 'ecosystem/core', label: 'Core', group: 'Overview'},
      {type: 'link', id: 'ecosystem/modules', label: 'Modules', group: 'Overview'},
      {type: 'link', id: 'ecosystem/sdk', label: 'SDK', group: 'Overview'},
      {type: 'link', id: 'ecosystem/wallet-system', label: 'Wallet System', group: 'Identity & Value'},
      {type: 'link', id: 'ecosystem/identity', label: 'Identity', group: 'Identity & Value'},
      {type: 'link', id: 'ecosystem/naming-system', label: 'Naming System', group: 'Identity & Value'},
      {type: 'link', id: 'ecosystem/web3-score', label: 'Web3 Score', group: 'Identity & Value'},
      {type: 'link', id: 'ecosystem/security-model', label: 'Security Model', group: 'Infrastructure'},
      {type: 'link', id: 'ecosystem/networking', label: 'Networking', group: 'Infrastructure'},
      {type: 'link', id: 'ecosystem/storage', label: 'Storage', group: 'Infrastructure'},
      {type: 'link', id: 'ecosystem/governance', label: 'Governance', group: 'Infrastructure'},
      {type: 'link', id: 'ecosystem/future-products', label: 'Future Products', group: 'Infrastructure'},
    ],
  },
  {
    id: 'technical-design',
    label: 'Technical Design',
    items: [
      {type: 'link', id: 'technical-design/architecture-overview', label: 'Architecture Overview', group: 'Architecture'},
      {type: 'link', id: 'technical-design/browser-architecture', label: 'Browser Architecture', group: 'Architecture'},
      {type: 'link', id: 'technical-design/runtime-architecture', label: 'Runtime Architecture', group: 'Architecture'},
      {type: 'link', id: 'technical-design/core-architecture', label: 'Core Architecture', group: 'Architecture'},
      {type: 'link', id: 'technical-design/module-architecture', label: 'Module Architecture', group: 'Architecture'},
      {type: 'link', id: 'technical-design/permission-system', label: 'Permission System', group: 'Core Systems'},
      {type: 'link', id: 'technical-design/sandbox', label: 'Sandbox', group: 'Core Systems'},
      {type: 'link', id: 'technical-design/module-loader', label: 'Module Loader', group: 'Core Systems'},
      {type: 'link', id: 'technical-design/application-lifecycle', label: 'Application Lifecycle', group: 'Core Systems'},
      {type: 'link', id: 'technical-design/communication-bus', label: 'Communication Bus', group: 'Core Systems'},
      {type: 'link', id: 'technical-design/api-layer', label: 'API Layer', group: 'Core Systems'},
      {type: 'link', id: 'technical-design/networking-stack', label: 'Networking Stack', group: 'Platform'},
      {type: 'link', id: 'technical-design/storage-engine', label: 'Storage Engine', group: 'Platform'},
      {type: 'link', id: 'technical-design/identity-layer', label: 'Identity Layer', group: 'Platform'},
      {type: 'link', id: 'technical-design/wallet-architecture', label: 'Wallet Architecture', group: 'Platform'},
      {type: 'link', id: 'technical-design/dns-architecture', label: 'DNS Architecture', group: 'Platform'},
      {type: 'link', id: 'technical-design/security-architecture', label: 'Security Architecture', group: 'Platform'},
      {type: 'link', id: 'technical-design/rendering-pipeline', label: 'Rendering Pipeline', group: 'Internals'},
      {type: 'link', id: 'technical-design/process-model', label: 'Process Model', group: 'Internals'},
      {type: 'link', id: 'technical-design/memory-management', label: 'Memory Management', group: 'Internals'},
      {type: 'link', id: 'technical-design/configuration', label: 'Configuration', group: 'Internals'},
      {type: 'link', id: 'technical-design/logging', label: 'Logging', group: 'Internals'},
      {type: 'link', id: 'technical-design/error-handling', label: 'Error Handling', group: 'Internals'},
      {type: 'link', id: 'technical-design/performance', label: 'Performance', group: 'Internals'},
      {type: 'link', id: 'technical-design/testing-architecture', label: 'Testing Architecture', group: 'Internals'},
      {type: 'link', id: 'technical-design/future-improvements', label: 'Future Improvements', group: 'Internals'},
    ],
  },
  {
    id: 'standards',
    label: 'Standards & Specifications',
    items: [
      {type: 'link', id: 'standards/overview', label: 'Overview', group: 'Overview'},
      {type: 'link', id: 'standards/why-standards-matter', label: 'Why Standards Matter', group: 'Overview'},
      {type: 'link', id: 'standards/specification-lifecycle', label: 'Specification Lifecycle', group: 'Overview'},
      {type: 'link', id: 'standards/versioning', label: 'Versioning', group: 'Overview'},
      {type: 'link', id: 'standards/writing-specifications', label: 'Writing Specifications', group: 'Authoring'},
      {type: 'link', id: 'standards/specification-template', label: 'Specification Template', group: 'Authoring'},
      {type: 'link', id: 'standards/specification-registry', label: 'Specification Registry', group: 'Registry'},
      {type: 'link', id: 'standards/draft-specifications', label: 'Draft Specifications', group: 'Registry'},
      {type: 'link', id: 'standards/accepted-specifications', label: 'Accepted Specifications', group: 'Registry'},
      {type: 'link', id: 'standards/deprecated-specifications', label: 'Deprecated Specifications', group: 'Registry'},
      {type: 'link', id: 'standards/compliance', label: 'Compliance', group: 'Assurance'},
      {type: 'link', id: 'standards/conformance-testing', label: 'Conformance Testing', group: 'Assurance'},
      {type: 'link', id: 'standards/roadmap', label: 'Roadmap', group: 'Assurance'},
    ],
  },
  {
    id: 'api-reference',
    label: 'API Reference',
    items: [
      {type: 'link', id: 'api-reference/overview', label: 'Overview', group: 'Getting Started'},
      {type: 'link', id: 'api-reference/conventions', label: 'API Conventions', group: 'Getting Started'},
      {type: 'link', id: 'api-reference/versioning', label: 'Versioning', group: 'Getting Started'},
      {type: 'link', id: 'api-reference/authentication', label: 'Authentication', group: 'Getting Started'},
      {type: 'link', id: 'api-reference/runtime-api', label: 'Runtime API', group: 'Core APIs'},
      {type: 'link', id: 'api-reference/core-api', label: 'Core API', group: 'Core APIs'},
      {type: 'link', id: 'api-reference/browser-api', label: 'Browser API', group: 'Core APIs'},
      {type: 'link', id: 'api-reference/module-api', label: 'Module API', group: 'Core APIs'},
      {type: 'link', id: 'api-reference/application-api', label: 'Application API', group: 'Core APIs'},
      {type: 'link', id: 'api-reference/wallet-api', label: 'Wallet API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/identity-api', label: 'Identity API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/storage-api', label: 'Storage API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/networking-api', label: 'Networking API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/dns-api', label: 'DNS API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/permissions-api', label: 'Permissions API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/security-api', label: 'Security API', group: 'Feature APIs'},
      {type: 'link', id: 'api-reference/events', label: 'Events', group: 'Reference'},
      {type: 'link', id: 'api-reference/interfaces', label: 'Interfaces', group: 'Reference'},
      {type: 'link', id: 'api-reference/classes', label: 'Classes', group: 'Reference'},
      {type: 'link', id: 'api-reference/functions', label: 'Functions', group: 'Reference'},
      {type: 'link', id: 'api-reference/methods', label: 'Methods', group: 'Reference'},
      {type: 'link', id: 'api-reference/objects', label: 'Objects', group: 'Reference'},
      {type: 'link', id: 'api-reference/enums', label: 'Enums', group: 'Reference'},
      {type: 'link', id: 'api-reference/types', label: 'Types', group: 'Reference'},
      {type: 'link', id: 'api-reference/configuration', label: 'Configuration', group: 'Formats'},
      {type: 'link', id: 'api-reference/schemas', label: 'Schemas', group: 'Formats'},
      {type: 'link', id: 'api-reference/manifest-format', label: 'Manifest Format', group: 'Formats'},
      {type: 'link', id: 'api-reference/error-codes', label: 'Error Codes', group: 'Status'},
      {type: 'link', id: 'api-reference/http-status-codes', label: 'HTTP Status Codes', group: 'Status'},
      {type: 'link', id: 'api-reference/cli-reference', label: 'CLI Reference', group: 'Tooling'},
      {type: 'link', id: 'api-reference/environment-variables', label: 'Environment Variables', group: 'Tooling'},
      {type: 'link', id: 'api-reference/examples', label: 'Examples', group: 'Resources'},
      {type: 'link', id: 'api-reference/deprecations', label: 'Deprecations', group: 'Resources'},
      {type: 'link', id: 'api-reference/changelog', label: 'Changelog', group: 'Resources'},
    ],
  },
  {
    id: 'research',
    label: 'Whitepapers & Research',
    items: [
      {type: 'link', id: 'research/overview', label: 'Overview', group: 'Library'},
      {type: 'link', id: 'research/research-library', label: 'Research Library', group: 'Library'},
      {type: 'link', id: 'research/orivon-whitepaper', label: 'Orivon Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/browser-whitepaper', label: 'Browser Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/runtime-whitepaper', label: 'Runtime Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/core-whitepaper', label: 'Core Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/module-system-whitepaper', label: 'Module System Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/security-whitepaper', label: 'Security Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/networking-whitepaper', label: 'Networking Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/storage-whitepaper', label: 'Storage Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/identity-whitepaper', label: 'Identity Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/web3-score-whitepaper', label: 'Web3 Score Whitepaper', group: 'Whitepapers'},
      {type: 'link', id: 'research/design-documents', label: 'Design Documents', group: 'Design & Architecture'},
      {type: 'link', id: 'research/browser-architecture', label: 'Browser Architecture', group: 'Design & Architecture'},
      {type: 'link', id: 'research/runtime-architecture', label: 'Runtime Architecture', group: 'Design & Architecture'},
      {type: 'link', id: 'research/core-architecture', label: 'Core Architecture', group: 'Design & Architecture'},
      {type: 'link', id: 'research/module-system', label: 'Module System', group: 'Design & Architecture'},
      {type: 'link', id: 'research/permission-system', label: 'Permission System', group: 'Design & Architecture'},
      {type: 'link', id: 'research/security-model', label: 'Security Model', group: 'Design & Architecture'},
      {type: 'link', id: 'research/communication-layer', label: 'Communication Layer', group: 'Design & Architecture'},
      {type: 'link', id: 'research/rendering-pipeline', label: 'Rendering Pipeline', group: 'Design & Architecture'},
      {type: 'link', id: 'research/storage-layer', label: 'Storage Layer', group: 'Design & Architecture'},
      {type: 'link', id: 'research/networking-layer', label: 'Networking Layer', group: 'Design & Architecture'},
      {type: 'link', id: 'research/security-research', label: 'Security Research', group: 'Research Areas'},
      {type: 'link', id: 'research/networking-research', label: 'Networking Research', group: 'Research Areas'},
      {type: 'link', id: 'research/storage-research', label: 'Storage Research', group: 'Research Areas'},
      {type: 'link', id: 'research/identity-research', label: 'Identity Research', group: 'Research Areas'},
      {type: 'link', id: 'research/web3-score-research', label: 'Web3 Score Research', group: 'Research Areas'},
      {type: 'link', id: 'research/runtime-research', label: 'Runtime Research', group: 'Research Areas'},
      {type: 'link', id: 'research/browser-research', label: 'Browser Research', group: 'Research Areas'},
      {type: 'link', id: 'research/performance-research', label: 'Performance Research', group: 'Research Areas'},
      {type: 'link', id: 'research/cryptography-research', label: 'Cryptography Research', group: 'Research Areas'},
      {type: 'link', id: 'research/wasm-research', label: 'WASM Research', group: 'Research Areas'},
      {type: 'link', id: 'research/decentralized-computing', label: 'Decentralized Computing', group: 'Research Areas'},
      {type: 'link', id: 'research/artificial-intelligence', label: 'Artificial Intelligence', group: 'Research Areas'},
      {type: 'link', id: 'research/future-internet', label: 'Future Internet', group: 'Research Areas'},
      {type: 'link', id: 'research/experimental-features', label: 'Experimental Features', group: 'Resources'},
      {type: 'link', id: 'research/research-roadmap', label: 'Research Roadmap', group: 'Resources'},
      {type: 'link', id: 'research/references', label: 'References', group: 'Resources'},
    ],
  },
  {
    id: 'community',
    label: 'Community, Governance & Ecosystem',
    items: [
      {type: 'link', id: 'community/overview', label: 'Overview', group: 'Foundation'},
      {type: 'link', id: 'community/mission-and-values', label: 'Mission & Values', group: 'Foundation'},
      {type: 'link', id: 'community/community', label: 'Community', group: 'Foundation'},
      {type: 'link', id: 'community/governance', label: 'Governance', group: 'Governance'},
      {type: 'link', id: 'community/maintainers', label: 'Maintainers', group: 'Governance'},
      {type: 'link', id: 'community/working-groups', label: 'Working Groups', group: 'Governance'},
      {type: 'link', id: 'community/working-groups/runtime', label: 'Runtime', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/browser', label: 'Browser', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/core', label: 'Core', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/sdk', label: 'SDK', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/security', label: 'Security', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/documentation', label: 'Documentation', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/community', label: 'Community', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/developer-experience', label: 'Developer Experience', group: 'Working Groups'},
      {type: 'link', id: 'community/working-groups/research', label: 'Research', group: 'Working Groups'},
      {type: 'link', id: 'community/technical-steering-committee', label: 'Technical Steering Committee', group: 'Governance'},
      {type: 'link', id: 'community/decision-making', label: 'Decision Making', group: 'Governance'},
      {type: 'link', id: 'community/project-roadmap', label: 'Project Roadmap', group: 'Roadmap'},
      {type: 'link', id: 'community/community-roadmap', label: 'Community Roadmap', group: 'Roadmap'},
      {type: 'link', id: 'community/open-source-philosophy', label: 'Open Source Philosophy', group: 'Roadmap'},
      {type: 'link', id: 'community/contribution-recognition', label: 'Contribution Recognition', group: 'Roadmap'},
      {type: 'link', id: 'community/community-showcase', label: 'Community Showcase', group: 'Community Programs'},
      {type: 'link', id: 'community/community-events', label: 'Community Events', group: 'Community Programs'},
      {type: 'link', id: 'community/meetups', label: 'Meetups', group: 'Community Programs'},
      {type: 'link', id: 'community/hackathons', label: 'Hackathons', group: 'Community Programs'},
      {type: 'link', id: 'community/grants-program', label: 'Grants Program', group: 'Community Programs'},
      {type: 'link', id: 'community/sponsors', label: 'Sponsors', group: 'Partnerships'},
      {type: 'link', id: 'community/partners', label: 'Partners', group: 'Partnerships'},
      {type: 'link', id: 'community/ecosystem-projects', label: 'Ecosystem Projects', group: 'Partnerships'},
      {type: 'link', id: 'community/project-directory', label: 'Project Directory', group: 'Partnerships'},
      {type: 'link', id: 'community/case-studies', label: 'Case Studies', group: 'Partnerships'},
      {type: 'link', id: 'community/success-stories', label: 'Success Stories', group: 'Partnerships'},
      {type: 'link', id: 'community/media-kit', label: 'Media Kit', group: 'Media & Brand'},
      {type: 'link', id: 'community/press-resources', label: 'Press Resources', group: 'Media & Brand'},
      {type: 'link', id: 'community/brand-guidelines', label: 'Brand Guidelines', group: 'Media & Brand'},
      {type: 'link', id: 'community/logos-and-assets', label: 'Logos & Assets', group: 'Media & Brand'},
      {type: 'link', id: 'community/social-channels', label: 'Social Channels', group: 'Media & Brand'},
      {type: 'link', id: 'community/newsletter', label: 'Newsletter', group: 'Media & Brand'},
      {type: 'link', id: 'community/faq', label: 'Frequently Asked Questions', group: 'Media & Brand'},
    ],
  },
  {
    id: 'project',
    label: 'Project, Organization & Enterprise',
    items: [
      {type: 'link', id: 'project/overview', label: 'Overview', group: 'Project Overview'},
      {type: 'link', id: 'project/about', label: 'About Orivon', group: 'Project Overview'},
      {type: 'link', id: 'project/mission-vision', label: 'Mission & Vision', group: 'Project Overview'},
      {type: 'link', id: 'project/history', label: 'Project History', group: 'Project Overview'},
      {type: 'link', id: 'project/organization', label: 'Organization', group: 'Organization'},
      {type: 'link', id: 'project/leadership', label: 'Leadership', group: 'Organization'},
      {type: 'link', id: 'project/core-team', label: 'Core Team', group: 'Organization'},
      {type: 'link', id: 'project/maintainers', label: 'Maintainers', group: 'Organization'},
      {type: 'link', id: 'project/advisors', label: 'Advisors', group: 'Organization'},
      {type: 'link', id: 'project/structure', label: 'Project Structure', group: 'Organization'},
      {type: 'link', id: 'project/release-lifecycle', label: 'Release Lifecycle', group: 'Releases'},
      {type: 'link', id: 'project/version-support', label: 'Version Support Policy', group: 'Releases'},
      {type: 'link', id: 'project/roadmap', label: 'Roadmap', group: 'Releases'},
      {type: 'link', id: 'project/trust-center', label: 'Trust Center', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/security-policy', label: 'Security Policy', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/privacy-policy', label: 'Privacy Policy', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/licensing', label: 'Licensing', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/open-source-licenses', label: 'Open Source Licenses', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/third-party-licenses', label: 'Third-Party Licenses', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/legal', label: 'Legal', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/compliance', label: 'Compliance', group: 'Trust & Compliance'},
      {type: 'link', id: 'project/enterprise', label: 'Enterprise', group: 'Enterprise'},
      {type: 'link', id: 'project/enterprise-features', label: 'Enterprise Features', group: 'Enterprise'},
      {type: 'link', id: 'project/enterprise-deployment', label: 'Enterprise Deployment', group: 'Enterprise'},
      {type: 'link', id: 'project/professional-services', label: 'Professional Services', group: 'Enterprise'},
      {type: 'link', id: 'project/support', label: 'Support', group: 'Support'},
      {type: 'link', id: 'project/support-policy', label: 'Support Policy', group: 'Support'},
      {type: 'link', id: 'project/slos', label: 'Service Level Objectives', group: 'Support'},
      {type: 'link', id: 'project/partners', label: 'Partners', group: 'Partnerships'},
      {type: 'link', id: 'project/technology-partners', label: 'Technology Partners', group: 'Partnerships'},
      {type: 'link', id: 'project/integration-partners', label: 'Integration Partners', group: 'Partnerships'},
      {type: 'link', id: 'project/case-studies', label: 'Case Studies', group: 'Partnerships'},
      {type: 'link', id: 'project/success-stories', label: 'Success Stories', group: 'Partnerships'},
      {type: 'link', id: 'project/funding', label: 'Funding & Sustainability', group: 'Funding'},
      {type: 'link', id: 'project/transparency', label: 'Transparency Reports', group: 'Funding'},
      {type: 'link', id: 'project/brand-center', label: 'Brand Center', group: 'Brand'},
      {type: 'link', id: 'project/brand-guidelines', label: 'Brand Guidelines', group: 'Brand'},
      {type: 'link', id: 'project/logos-assets', label: 'Logos & Assets', group: 'Brand'},
      {type: 'link', id: 'project/media-kit', label: 'Media Kit', group: 'Brand'},
      {type: 'link', id: 'project/press-resources', label: 'Press Resources', group: 'Brand'},
      {type: 'link', id: 'project/downloads', label: 'Downloads', group: 'Resources'},
      {type: 'link', id: 'project/doc-archive', label: 'Documentation Archive', group: 'Resources'},
      {type: 'link', id: 'project/release-archive', label: 'Release Archive', group: 'Resources'},
      {type: 'link', id: 'project/changelog-archive', label: 'Changelog Archive', group: 'Resources'},
      {type: 'link', id: 'project/contact', label: 'Contact', group: 'Resources'},
      {type: 'link', id: 'project/faq', label: 'Frequently Asked Questions', group: 'Resources'},
    ],
  },
  {
    id: 'developers',
    label: 'Developer Documentation',
    items: [
      {type: 'link', id: 'developers/overview', label: 'Overview', group: 'Getting Started'},
      {type: 'link', id: 'developers/getting-started', label: 'Getting Started', group: 'Getting Started'},
      {type: 'link', id: 'developers/development-environment', label: 'Development Environment', group: 'Setup'},
      {type: 'link', id: 'developers/system-requirements', label: 'System Requirements', group: 'Setup'},
      {type: 'link', id: 'developers/installation', label: 'Installation', group: 'Setup'},
      {type: 'link', id: 'developers/quick-start', label: 'Quick Start', group: 'Setup'},
      {type: 'link', id: 'developers/project-structure', label: 'Project Structure', group: 'Setup'},
      {type: 'link', id: 'developers/cli', label: 'CLI', group: 'Setup'},
      {type: 'link', id: 'developers/creating-your-first-project', label: 'Creating Your First Project', group: 'Guides'},
      {type: 'link', id: 'developers/building-your-first-module', label: 'Building Your First Module', group: 'Guides'},
      {type: 'link', id: 'developers/building-your-first-application', label: 'Building Your First Application', group: 'Guides'},
      {type: 'link', id: 'developers/module-manifest', label: 'Module Manifest', group: 'Guides'},
      {type: 'link', id: 'developers/runtime-apis', label: 'Runtime APIs', group: 'APIs'},
      {type: 'link', id: 'developers/core-apis', label: 'Core APIs', group: 'APIs'},
      {type: 'link', id: 'developers/browser-apis', label: 'Browser APIs', group: 'APIs'},
      {type: 'link', id: 'developers/wallet-apis', label: 'Wallet APIs', group: 'APIs'},
      {type: 'link', id: 'developers/identity-apis', label: 'Identity APIs', group: 'APIs'},
      {type: 'link', id: 'developers/storage-apis', label: 'Storage APIs', group: 'APIs'},
      {type: 'link', id: 'developers/networking-apis', label: 'Networking APIs', group: 'APIs'},
      {type: 'link', id: 'developers/dns-apis', label: 'DNS APIs', group: 'APIs'},
      {type: 'link', id: 'developers/permissions', label: 'Permissions', group: 'Platform'},
      {type: 'link', id: 'developers/events', label: 'Events', group: 'Platform'},
      {type: 'link', id: 'developers/configuration', label: 'Configuration', group: 'Platform'},
      {type: 'link', id: 'developers/debugging', label: 'Debugging', group: 'Engineering'},
      {type: 'link', id: 'developers/logging', label: 'Logging', group: 'Engineering'},
      {type: 'link', id: 'developers/testing', label: 'Testing', group: 'Engineering'},
      {type: 'link', id: 'developers/performance', label: 'Performance', group: 'Engineering'},
      {type: 'link', id: 'developers/best-practices', label: 'Best Practices', group: 'Engineering'},
      {type: 'link', id: 'developers/examples', label: 'Examples', group: 'Resources'},
      {type: 'link', id: 'developers/tutorials', label: 'Tutorials', group: 'Resources'},
      {type: 'link', id: 'developers/cookbook', label: 'Cookbook', group: 'Resources'},
      {type: 'link', id: 'developers/migration-guides', label: 'Migration Guides', group: 'Resources'},
      {type: 'link', id: 'developers/faq', label: 'Frequently Asked Questions', group: 'Resources'},
      {type: 'link', id: 'developers/troubleshooting', label: 'Troubleshooting', group: 'Resources'},
    ],
  },
  {
    id: 'contributors',
    label: 'Contributor Guide',
    items: [
      {type: 'link', id: 'contributors/overview', label: 'Overview', group: 'Getting Started'},
      {type: 'link', id: 'contributors/why-contribute', label: 'Why Contribute', group: 'Getting Started'},
      {type: 'link', id: 'contributors/getting-started', label: 'Getting Started', group: 'Getting Started'},
      {type: 'link', id: 'contributors/code-of-conduct', label: 'Code of Conduct', group: 'Community'},
      {type: 'link', id: 'contributors/community-guidelines', label: 'Community Guidelines', group: 'Community'},
      {type: 'link', id: 'contributors/localization', label: 'Localization', group: 'Community'},
      {type: 'link', id: 'contributors/accessibility', label: 'Accessibility', group: 'Community'},
      {type: 'link', id: 'contributors/design-contributions', label: 'Design Contributions', group: 'Community'},
      {type: 'link', id: 'contributors/documentation-contributions', label: 'Documentation Contributions', group: 'Community'},
      {type: 'link', id: 'contributors/good-first-issues', label: 'Good First Issues', group: 'Community'},
      {type: 'link', id: 'contributors/mentorship', label: 'Mentorship', group: 'Community'},
      {type: 'link', id: 'contributors/recognition', label: 'Recognition', group: 'Community'},
      {type: 'link', id: 'contributors/development-workflow', label: 'Development Workflow', group: 'Contributing'},
      {type: 'link', id: 'contributors/repository-structure', label: 'Repository Structure', group: 'Contributing'},
      {type: 'link', id: 'contributors/branching-strategy', label: 'Branching Strategy', group: 'Contributing'},
      {type: 'link', id: 'contributors/coding-standards', label: 'Coding Standards', group: 'Contributing'},
      {type: 'link', id: 'contributors/documentation-standards', label: 'Documentation Standards', group: 'Contributing'},
      {type: 'link', id: 'contributors/issue-guidelines', label: 'Issue Guidelines', group: 'Contributing'},
      {type: 'link', id: 'contributors/bug-reports', label: 'Bug Reports', group: 'Contributing'},
      {type: 'link', id: 'contributors/feature-requests', label: 'Feature Requests', group: 'Contributing'},
      {type: 'link', id: 'contributors/pull-requests', label: 'Pull Requests', group: 'Contributing'},
      {type: 'link', id: 'contributors/code-reviews', label: 'Code Reviews', group: 'Contributing'},
      {type: 'link', id: 'contributors/testing-guidelines', label: 'Testing Guidelines', group: 'Quality'},
      {type: 'link', id: 'contributors/release-process', label: 'Release Process', group: 'Quality'},
      {type: 'link', id: 'contributors/continuous-integration', label: 'Continuous Integration', group: 'Quality'},
      {type: 'link', id: 'contributors/security-policy', label: 'Security Policy', group: 'Security'},
      {type: 'link', id: 'contributors/responsible-disclosure', label: 'Responsible Disclosure', group: 'Security'},
      {type: 'link', id: 'contributors/faq', label: 'Contributor FAQ', group: 'Resources'},
      {type: 'link', id: 'contributors/troubleshooting', label: 'Troubleshooting', group: 'Resources'},
    ],
  },
  {
    id: 'foundation',
    label: 'Orivon Foundation',
    comingSoon: true,
    items: [
      {type: 'link', label: 'Get Involved', comingSoon: true},
      {type: 'link', label: 'DAO Plan & Rewards', comingSoon: true},
      {type: 'link', label: 'Economic Strategy', comingSoon: true},
      {type: 'link', label: 'Growth Contribution', comingSoon: true},
    ],
  },
  {
    id: 'implementation',
    label: 'Implementation',
    comingSoon: true,
    items: [
      {type: 'link', label: 'Orivon Ecosystem', comingSoon: true},
      {type: 'link', label: 'Orivon Browser', comingSoon: true},
      {type: 'link', label: 'Modules System', comingSoon: true},
      {type: 'link', label: 'Wallet System', comingSoon: true},
      {type: 'link', label: 'Web3 Score', comingSoon: true},
      {type: 'link', label: 'Native DDoc Specs', comingSoon: true},
      {type: 'link', label: 'Security & Sandbox', comingSoon: true},
      {type: 'link', label: 'Decentralized DNS', comingSoon: true},
    ],
  },
  {
    id: 'more',
    label: 'More',
    comingSoon: true,
    items: [
      {type: 'link', label: 'Our Channels', comingSoon: true},
      {type: 'link', label: 'Acknowledgements', comingSoon: true},
      {type: 'link', label: 'Changelog', comingSoon: true},
    ],
  },
];

export const introductionSection = sidebarSections[0];
export const ecosystemSection = sidebarSections[1];
export const technicalDesignSection = sidebarSections[2];
export const standardsSection = sidebarSections[3];
export const apiReferenceSection = sidebarSections[4];
export const researchSection = sidebarSections[5];
export const communitySection = sidebarSections[6];
export const projectSection = sidebarSections[7];
export const developersSection = sidebarSections[8];
export const contributorsSection = sidebarSections[9];

export function sectionLabelFor(level: string): string {
  return sidebarSections.find((s) => s.id === level)?.label ?? level;
}

export function sectionHomeRoute(level: string): string | undefined {
  const section = sidebarSections.find((s) => s.id === level);
  const first = section?.items.find((item) => item.id);
  return first?.id ? `/docs/${first.id}` : undefined;
}

export interface ComingSoonEntry {
  level: string;
  label: string;
  section: string;
}

const slugifyLabel = (label: string): string =>
  label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

export function findComingSoon(level: string, id: string): ComingSoonEntry | undefined {
  const section = sidebarSections.find((s) => s.id === level);
  if (!section?.comingSoon) return undefined;
  const item = section.items.find((i) => slugifyLabel(i.label) === id);
  if (!item) return undefined;
  return {level, label: item.label, section: section.label};
}

export function comingSoonSlugFor(label: string): string {
  return slugifyLabel(label);
}

export function flattenSidebarLinks(): {
  id: string;
  label: string;
  route?: string;
  comingSoon?: boolean;
}[] {
  return sidebarSections.flatMap((section) =>
    section.items.map((item) => ({
      id: item.id ?? item.label,
      label: item.label,
      route: item.id ? `/docs/${item.id}` : undefined,
      comingSoon: item.comingSoon || section.comingSoon,
    })),
  );
}
