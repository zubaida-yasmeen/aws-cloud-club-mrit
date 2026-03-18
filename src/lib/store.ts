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
      name: 'Adarsh Gowda',
      role: 'Club Captain',
      image: PlaceHolderImages.find(i => i.id === 'team-captain')?.imageUrl || '',
    },
    {
      id: '2',
      name: 'Sahana R.',
      role: 'Technical Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-tech')?.imageUrl || '',
    },
    {
      id: '3',
      name: 'Kiran Kumar',
      role: 'Event Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-event')?.imageUrl || '',
    },
    {
      id: '4',
      name: 'Megha S.',
      role: 'Community Lead',
      image: PlaceHolderImages.find(i => i.id === 'team-community')?.imageUrl || '',
    }
  ];
}

export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: '1',
      title: 'Smart Waste Segregation',
      description: 'AI-powered waste management system using AWS Rekognition and IoT Core.',
      techStack: ['AWS Rekognition', 'IoT Core', 'Lambda', 'S3'],
      image: PlaceHolderImages.find(i => i.id === 'project-waste')?.imageUrl || '',
    },
    {
      id: '2',
      title: 'Cloud Resume Challenge',
      description: 'A serverless website showcasing resume data with a visitor counter.',
      techStack: ['S3', 'CloudFront', 'DynamoDB', 'Lambda'],
      image: 'https://picsum.photos/seed/proj2/600/400',
    },
    {
      id: '3',
      title: 'EduTrack Serverless',
      description: 'Student attendance tracking system with real-time analytics dashboard.',
      techStack: ['AppSync', 'GraphQL', 'Lambda', 'Amplify'],
      image: 'https://picsum.photos/seed/proj3/600/400',
    }
  ];
}
