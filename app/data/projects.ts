import { CardProps } from "../types/CardProps";

export const projects: CardProps[] = [
  {
    id: '1',
    title: 'WorldCup3Js',
    subTitle: {
      text: ' worldcup3js.dev',
      url: 'https://worldcup3js.dev',
    },
    description: 'Multiplayer soccer game using Three.js and Websockets.',
    headerImage: '/images/projects/worldcup3js.png',
    technologies: ['Javascript', 'Three.js', 'Node.js', 'Websocket Server'],
    category: 'Web Development',
    githubUrl: 'https://github.com/hermanator608/worldcup3js',
    highlights: [],
  },
  {
    id: '2',
    title: 'Ambiance',
    subTitle: {
      text: 'ambiance.dev',
      url: 'https://ambiance.dev',
    },
    description: 'Web App which provides ambiant music for every mood.',
    headerImage: '/images/projects/ambiance.png',
    technologies: ['React', 'Node.js', 'Typescript', 'Google Analytics'],
    category: 'Web Development',
    githubUrl: 'https://github.com/hermanator608/ambiance',
    highlights: [],
  },
  {
    id: '3',
    title: 'Emma Herms Portfolio Website',
    subTitle: {
      text: 'emmaherms.com',
      url: 'https://emmaherms.com',
    },
    description: 'Portfolio website with 3D elements',
    headerImage: '/images/projects/emma_prof.png',
    technologies: ['Three.js', 'HTML', 'CSS'],
    category: 'Web Development',
    githubUrl: 'https://github.com/hermanator608/emma-portfolio',
    highlights: [],
  },
  {
    id: '4',
    title: 'Github Repositories',
    subTitle: {
      text: 'Hermanator608',
      url: 'https://github.com/hermanator608',
    },
    description: 'Find more projects on my Github account',
    headerImage: '/images/projects/github.jpg',
    githubUrl: '',
    highlights: [],
  }
]; 
