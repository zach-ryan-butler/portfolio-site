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
    path: '/resume#section-resume',
    title: 'Resume',
  },
  {
    path: '/projects#section-projects',
    title: 'Projects',
  },
  {
    path: '/about#section-about',
    title: 'About',
  },
  {
    path: '/contact#section-contact',
    title: 'Contact',
  },
];

export const APP_LOGOS = [
  {
    image: chatableLogo,
    title: 'Chatable',
    alt: 'Chatable logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/Chatable-2021',
    deployedUrl: 'https://adoring-wright-0eba98.netlify.app/',
    isDeployed: true,
  },
  {
    image: kanbanifyLogo,
    title: 'Kanbanify',
    alt: 'Kanbanify logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/kanbanify',
    deployedUrl: 'https://kanbanify.github.io/',
    isDeployed: true,
  },
  {
    image: pindropLogo,
    title: 'Pin Drop',
    alt: 'Pin Drop logo',
    type: 'Fullstack',
    githubUrl: 'https://github.com/eez-meet-me',
    deployedUrl: '',
    isDeployed: false,
  },
  {
    image: apiLogo,
    title: 'Tekken API',
    alt: 'Tekken API logo',
    type: 'API',
    githubUrl: 'https://github.com/zach-ryan-butler/tekken-api',
    deployedUrl: '',
    isDeployed: false,
  },
];
