
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
      id: '5',
      name: 'Umme Salma',
      role: 'Vice Captain',
      image: PlaceHolderImages.find(i => i.id === 'team-doc')?.imageUrl || '',
      linkedin: 'https://www.linkedin.com/in/umme-salma-6b7091325/',
    },
    {
      id: '3',
      name: 'Yasmeen Taj',
      role: 'Director of Events',
      image: PlaceHolderImages.find(i => i.id === 'team-event')?.imageUrl || '',
      linkedin: 'https://www.linkedin.com/in/yasmeen-taj0114/',
    },
    {
      id: 'm1',
      name: 'Member Name',
      role: 'Director of Membership & Engagement',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-1')?.imageUrl || '',
    },
    {
      id: 'm2',
      name: 'Member Name',
      role: 'Director of Data & Operations',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-2')?.imageUrl || '',
    },
    {
      id: 'm3',
      name: 'Member Name',
      role: 'Director of Technology',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-3')?.imageUrl || '',
    },
    {
      id: 'm4',
      name: 'Member Name',
      role: 'Member',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-4')?.imageUrl || '',
    },
    {
      id: 'm5',
      name: 'Member Name',
      role: 'Member',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-5')?.imageUrl || '',
    },
    {
      id: 'm6',
      name: 'Member Name',
      role: 'Member',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-6')?.imageUrl || '',
    }
  ];
}

export async function getProjects(): Promise<Project[]> {
  return [];
}
