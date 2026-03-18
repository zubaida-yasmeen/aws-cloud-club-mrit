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
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

// In a real app, these would come from Firestore
export async function getEvents(): Promise<Event[]> {
  return [
    {
      id: '1',
      title: 'AWS Discovery Day',
      date: 'Oct 15, 2024',
      description: 'An introductory session to AWS Cloud concepts and services for beginners.',
      image: PlaceHolderImages.find(i => i.id === 'event-aws-discovery')?.imageUrl || '',
    },
    {
      id: '2',
      title: 'Cloud Jam Workshop',
      date: 'Nov 02, 2024',
      description: 'Hands-on coding session exploring Serverless architectures with AWS Lambda.',
      image: PlaceHolderImages.find(i => i.id === 'event-cloud-jam')?.imageUrl || '',
    },
    {
      id: '3',
      title: 'Career in Cloud Webinar',
      date: 'Dec 10, 2024',
      description: 'Expert panel discussing certifications and job opportunities in the cloud ecosystem.',
      image: 'https://picsum.photos/seed/event3/600/400',
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
      role: 'Community Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-community')?.imageUrl || '',
    },
    {
      id: '5',
      name: 'Hafeez Riyan E H',
      role: 'Communication Head',
      image: PlaceHolderImages.find(i => i.id === 'team-comm')?.imageUrl || '',
    }
  ];
}

export async function getProjects(): Promise<Project[]> {
  // Returning empty array as requested since no projects are done yet
  return [];
}
