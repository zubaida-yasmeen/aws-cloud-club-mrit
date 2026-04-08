
import { PlaceHolderImages } from './placeholder-images';

export interface Event {
  id: string;
  title: string;
  date: string; // ISO string for precise date logic
  description: string;
  image: string;
  link?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  type: 'student' | 'faculty';
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
  // Using relative dates for the demo to show logic in action
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const nextMonth = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
  const lastMonth = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  return [
    {
      id: '1',
      title: 'Introduction to AWS Cloud Club MRIT',
      date: lastMonth.toISOString(),
      description: 'The introductory session for AWS Cloud Club at MRIT has been successfully conducted. We shared our vision, goals, and the exciting roadmap for cloud enthusiasts on campus.',
      image: PlaceHolderImages.find(i => i.id === 'event-inauguration')?.imageUrl || '',
      link: 'https://www.meetup.com/aws-cloud-club-at-mysuru-royal-inst-of-tech/events/313998864/',
    },
    {
      id: '4',
      title: 'Cloud Club Inauguration Ceremony',
      date: tomorrow.toISOString(),
      description: 'Celebrate the official inauguration of the AWS Cloud Club at MRIT. A landmark event featuring faculty members, student leaders, and industry insights.',
      image: PlaceHolderImages.find(i => i.id === 'event-launch')?.imageUrl || '',
    },
    {
      id: '2',
      title: 'AWS Discovery Day',
      date: nextMonth.toISOString(),
      description: 'An introductory session to AWS Cloud concepts and services for beginners.',
      image: PlaceHolderImages.find(i => i.id === 'event-aws-discovery')?.imageUrl || '',
    },
    {
      id: '3',
      title: 'Cloud Jam Workshop',
      date: nextMonth.toISOString(),
      description: 'Hands-on coding session exploring Serverless architectures with AWS Lambda.',
      image: PlaceHolderImages.find(i => i.id === 'event-cloud-jam')?.imageUrl || '',
    }
  ];
}

export async function getTeam(): Promise<TeamMember[]> {
  return [
    {
      id: 'f1',
      name: 'Ms. Harshitha M',
      role: 'Assistant Professor, Dept of CSE',
      image: PlaceHolderImages.find(i => i.id === 'faculty-harshitha')?.imageUrl || '',
      type: 'faculty',
    },
    {
      id: 'f2',
      name: 'Mr. Gowtham A R',
      role: 'Faculty Coordinator, Dept of CSE',
      image: PlaceHolderImages.find(i => i.id === 'faculty-gowtham')?.imageUrl || '',
      type: 'faculty',
    },
    {
      id: 'f3',
      name: 'Ms. Sariya Anjum',
      role: 'Faculty Coordinator, Dept of CSE',
      image: PlaceHolderImages.find(i => i.id === 'faculty-sariya')?.imageUrl || '',
      type: 'faculty',
    },
    {
      id: '1',
      name: 'Zubeda Yasmeen',
      role: 'Club Captain',
      image: PlaceHolderImages.find(i => i.id === 'team-captain')?.imageUrl || '',
      type: 'student',
      linkedin: 'https://www.linkedin.com/in/zubeda-yasmeen/',
    },
    {
      id: '5',
      name: 'Umme Salma',
      role: 'Vice Captain',
      image: PlaceHolderImages.find(i => i.id === 'team-doc')?.imageUrl || '',
      type: 'student',
      linkedin: 'https://www.linkedin.com/in/umme-salma-6b7091325/',
    },
    {
      id: '3',
      name: 'Yasmeen Taj',
      role: 'Director of Events',
      image: PlaceHolderImages.find(i => i.id === 'team-event')?.imageUrl || '',
      type: 'student',
      linkedin: 'https://www.linkedin.com/in/yasmeen-taj0114/',
    },
    {
      id: 'm1',
      name: 'Member Name',
      role: 'Director of Membership & Engagement',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-1')?.imageUrl || '',
      type: 'student',
    },
    {
      id: 'm2',
      name: 'Member Name',
      role: 'Director of Data & Operations',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-2')?.imageUrl || '',
      type: 'student',
    },
    {
      id: 'm3',
      name: 'Member Name',
      role: 'Director of Technology',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-3')?.imageUrl || '',
      type: 'student',
    }
  ];
}

export async function getProjects(): Promise<Project[]> {
  return [];
}
