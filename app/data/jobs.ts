import { CardProps } from "../types/CardProps";

export const jobs: CardProps[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    subTitle: {
      text: 'Twilio',
      url: 'https://www.twilio.com'
    },
    location: 'San Francisco, CA (Remote)',
    period: '2021 - Present',
    description: 'Developing Twilio\'s Studio product which allows users to build low-code/no-code applications using Twilio\'s products (Voice, SMS, AI, etc).',
    technologies: ['Java', 'MySQL', 'DynamoDB', 'React', 'Node.js', 'TypeScript', 'AWS', 'Kafka'],
    highlights: [
      {
        text: 'Working on Twilio Studio',
        link: 'https://www.twilio.com/studio'
      },
      '... To be updated ...'
    ],
    headerImage: '/images/company-logos/twilio.jpg'
  },
  {
    id: '2',
    title: 'Staff Software Engineer',
    subTitle: {
      text: 'Mastery Logistics Systems',
      url: 'https://www.mastery.net'
    },
    location: 'Chicago, IL (Remote)',
    period: '2020 - 2021',
    description: 'Lead team which built customer facing APIs for ingress and egress of large amounts of real time asyncronous logistics data.',
    technologies: ['Node.js', 'TypeScript', 'GraphQL', 'Kafka', 'PostgreSQL', 'Redis', 'React', 'Azure'],
    highlights: [
      'Designed and built async API\'s (Ingress and Egress) for logistics data synchronization',
      'Developed microservice rules engine used to calculate a shipment\'s status',
      'Designed and built distributed "Locking" system for entity management',
      'Led company-wide adoption of distributed tracing standards for better observability'
    ],
    headerImage: '/images/company-logos/mastery.jpg'
  },
  {
    id: '3',
    title: 'Software Engineer',
    subTitle: {
      text: 'Amount',
      url: 'https://www.amount.com',
    },
    location: 'Chicago, IL',
    period: '2018 - 2020',
    description: 'Full-stack development of customer-facing applications and internal tools, with a focus on GraphQL adoption.',
    technologies: ['React', 'TypeScript', 'GraphQL', 'Ruby on Rails', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Created white-label, highly configurable loan servicing application',
      'Led company-wide adoption of GraphQL',
      'Onboarded and supported six new hires and transitioned Mobile dev team to Web Development'
    ],
    headerImage: '/images/company-logos/amount.jpg'
  },
  {
    id: '4',
    title: 'Software Engineer Intern',
    subTitle: {
      text: 'PKWARE',
      url: 'https://www.pkware.com'
    },
    location: 'Milwaukee, WI',
    period: '2017 - 2018',
    description: 'Full-stack development on Security Software.',
    technologies: ['C#'],
    highlights: [],
    headerImage: '/images/company-logos/pkware.jpg'
  },
  {
    id: '5',
    title: 'Software Engineer Intern',
    subTitle: {
      text: 'Accelogix'
    },
    location: 'Milwaukee, WI',
    period: '2017 - 2018',
    description: 'Full-stack development on logistics Software.',
    technologies: ['Java', 'MySQL'],
    highlights: [],
    headerImage: '/images/company-logos/accelogix.svg'
  }
]; 
