export const cmsPages = [
  {
    id: 'home',
    name: 'Home Landing Page',
    desc: 'Manage hero, stats, and primary calls-to-action.',
    path: '/',
  },
  {
    id: 'about',
    name: 'About Marports',
    desc: 'Review the conference overview and advisory board section.',
    path: '/about',
  },
  {
    id: 'conference-topics',
    name: 'Conference Topics',
    desc: 'Preview the main conference topics overview page.',
    path: '/conference-topics',
  },
  {
    id: 'speakers',
    name: 'Speakers',
    desc: 'Preview speakers and panelists listing page.',
    path: '/conference-topics/speakers',
  },
  {
    id: 'agenda',
    name: 'Agenda',
    desc: 'Preview the detailed conference agenda page.',
    path: '/conference-topics/agenda',
  },
  {
    id: 'advisory-board',
    name: 'Advisory Board',
    desc: 'Preview advisory board profiles and bios.',
    path: '/conference-topics/advisory-board',
  },
  {
    id: 'awards-categories',
    name: 'Awards Categories',
    desc: 'Preview all official award categories.',
    path: '/awards/categories',
  },
  {
    id: 'awards-nomination',
    name: 'Awards Nomination',
    desc: 'Preview awards nomination page.',
    path: '/awards/nomination',
  },
  {
    id: 'awards-rules',
    name: 'Awards Rules',
    desc: 'Preview awards rules and guideline page.',
    path: '/awards/rules',
  },
  {
    id: 'awards-winners',
    name: 'Awards Winners',
    desc: 'Preview awards winners page.',
    path: '/awards/winners',
  },
  {
    id: 'gallery',
    name: 'Gallery',
    desc: 'Preview event gallery and media section.',
    path: '/gallery',
  },
  {
    id: 'events-news',
    name: 'Events & News',
    desc: 'Preview announcements and news feed page.',
    path: '/events-news',
  },
];

export const getCmsPageById = (pageId) => cmsPages.find((page) => page.id === pageId);
