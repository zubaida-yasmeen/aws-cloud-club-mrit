import { PlaceHolderImages } from './placeholder-images';

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

export async function getEvents(): Promise<Event[]> {
  return [
    {
      id: '1',
      title: 'Official Club Inauguration',
      date: 'Date to be announced',
      description: 'The grand unveiling of the AWS Cloud Club at MRIT. Join us for an inspiring launch event with faculty and student leaders.',
      image: PlaceHolderImages.find(i => i.id === 'event-inauguration')?.imageUrl || '',
    },
    {
      id: '2',
      title: 'AWS Discovery Day',
      date: 'Date to be announced',
      description: 'An introductory session to AWS Cloud concepts and services for beginners.',
      image: PlaceHolderImages.find(i => i.id === 'event-aws-discovery')?.imageUrl || '',
    },
    {
      id: '3',
      title: 'Cloud Jam Workshop',
      date: 'Date to be announced',
      description: 'Hands-on coding session exploring Serverless architectures with AWS Lambda.',
      image: PlaceHolderImages.find(i => i.id === 'event-cloud-jam')?.imageUrl || '',
    }
  ];
}

export async function getTeam(): Promise<TeamMember[]> {
  return [
    {
      id: '1',
      name: 'Zubeda Yasmeen',
      role: 'Club Captain',
      image: PlaceHolderImages.find(i => i.id === 'team-captain')?.imageUrl || '',
      linkedin: 'https://www.linkedin.com/in/zubeda-yasmeen/',
    },
    {
      id: '2',
      name: 'Vidyasagar D J',
      role: 'Technical Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-tech')?.imageUrl || '',
    },
    {
      id: '3',
      name: 'Yasmeen Taj',
      role: 'Event Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-event')?.imageUrl || '',
    },
    {
      id: '4',
      name: 'Sheeba Fathima',
      role: 'Logistics Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-logistics')?.imageUrl || '',
    },
    {
      id: '5',
      name: 'Hafeez Riyan E H',
      role: 'Treasurer',
      image: PlaceHolderImages.find(i => i.id === 'team-treasurer')?.imageUrl || '',
    },
    {
      id: '6',
      name: 'Umme Salma',
      role: 'Documentation Head',
      image: PlaceHolderImages.find(i => i.id === 'team-doc')?.imageUrl || '',
    },
    {
      id: '7',
      name: 'Preetham',
      role: 'Communication Head',
      image: PlaceHolderImages.find(i => i.id === 'team-comm')?.imageUrl || '',
    }
  ];
}

export async function getProjects(): Promise<Project[]> {
  return [];
}
