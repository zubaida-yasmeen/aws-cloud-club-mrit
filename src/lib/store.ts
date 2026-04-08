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
    },
    {
      id: 'm7',
      name: 'Member Name',
      role: 'Member',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-7')?.imageUrl || '',
    },
    {
      id: 'm8',
      name: 'Member Name',
      role: 'Member',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-8')?.imageUrl || '',
    },
    {
      id: 'm9',
      name: 'Member Name',
      role: 'Member',
      image: PlaceHolderImages.find(i => i.id === 'member-gen-9')?.imageUrl || '',
    }
  ];
}

export async function getProjects(): Promise<Project[]> {
  return [];
}
