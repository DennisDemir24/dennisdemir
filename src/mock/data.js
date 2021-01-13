import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Dennis Demir | Developer and Designer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'dennis.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'resumé.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'fourinarow.png',
    title: 'Four In a Row Game',
    info: 'A four in a row game made with vanilla JavaScript',
    info2: 'JavaScript, HTML, CSS',
    url: '',
    repo: 'https://github.com/DennisDemir24/fourinarow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Journalify',
    info: 'A journal app for private clinics to store and manage patients',
    info2: 'JavaScript, React, NodeJS, Express, MySQL',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/dennisdemir24', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'demir.petrus@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/%F0%9F%A4%93dennis-demir-20a34766/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dennisdemir24',
    },
  ],
};
