import pindropLogo from './assets/pindrop.png';
import apiLogo from './assets/apilogo.png';
import kanbanifyLogo from './assets/KanbanifyBlue.png';
import chatableLogo from './assets/chatable.png';

export const APP_LINKS = [
  {
    path: '/#section-home',
    title: 'Home',
  },
  {
    path: '/about#section-about',
    title: 'About',
  },
  {
    path: '/projects#section-projects',
    title: 'Projects',
  },
  {
    path: '/resume#section-resume',
    title: 'Resume',
  },
  {
    path: '/contact#section-contact',
    title: 'Contact',
  },
];

export const APP_LOGOS = [
  {
    image: pindropLogo,
    title: 'Pin Drop',
    alt: 'Pin Drop logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/eez-meet-me',
    deployedUrl: '',
  },
  {
    image: kanbanifyLogo,
    title: 'Kanbanify',
    alt: 'Kanbanify logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/kanbanify',
    deployedUrl: '',
  },
  {
    image: chatableLogo,
    title: 'Chatable',
    alt: 'Chatable logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/Chatable-2021',
    deployedUrl: '',
  },
  {
    image: apiLogo,
    title: 'Tekken API',
    alt: 'Tekken API logo',
    type: 'API',
    githubUrl: 'https://github.com/zach-ryan-butler/tekken-api',
    deployedUrl: '',
  },
];
