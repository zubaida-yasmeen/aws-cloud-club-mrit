import Image from "next/image";
import { Calendar, Tag, Linkedin, ExternalLink, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Event, TeamMember, Project } from "@/lib/store";
import { format, isPast, differenceInHours, parseISO } from "date-fns";
import { cn } from "@/lib/utils";

export function EventCard({ event }: { event: Event }) {
  const eventDate = parseISO(event.date);
  const isEventPast = isPast(eventDate);
  const hoursUntilEvent = differenceInHours(eventDate, new Date());
  const isHappeningSoon = !isEventPast && hoursUntilEvent >= 0 && hoursUntilEvent <= 48;

  const CardContentComponent = (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-110",
            isEventPast && "grayscale-[50%]"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isEventPast && (
            <Badge variant="secondary" className="bg-gray-500/80 text-white border-none backdrop-blur-md">
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </Badge>
          )}
          {isHappeningSoon && (
            <Badge className="bg-orange-500 text-white border-none animate-pulse shadow-lg shadow-orange-500/20">
              <Clock className="h-3 w-3 mr-1" />
              Happening Soon
            </Badge>
          )}
        </div>

        {event.link && (
          <div className="absolute top-4 right-4 bg-primary/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <ExternalLink className="h-4 w-4" />
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-xs text-primary mb-2 font-semibold">
          <Calendar className="h-3 w-3" />
          {format(eventDate, "EEE, MMM d, yyyy, h:mm a")}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {event.description}
        </p>
      </CardContent>
    </>
  );

  const cardClassName = cn(
    "glass-card group overflow-hidden transition-all duration-300 h-full border-primary/10 hover:border-primary/40",
    isEventPast ? "event-past" : "hover:-translate-y-2"
  );

  if (event.link) {
    return (
      <a href={event.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card className={cardClassName}>
          {CardContentComponent}
        </Card>
      </a>
    );
  }

  return (
    <Card className={cardClassName}>
      {CardContentComponent}
    </Card>
  );
}

export function TeamCard({ member }: { member: any }) {
  return (
    <Card className="glass-card text-center overflow-hidden transition-all hover:border-primary/50 duration-300 group h-full">
      <div className="pt-8 pb-4 flex justify-center relative">
        <div className={`relative h-32 w-32 rounded-full overflow-hidden border-2 p-1 ${member.type === 'faculty' ? 'border-amber-400/50' : 'border-primary/20'}`}>
          <Image
            src={member.imageUrl || 'https://picsum.photos/seed/placeholder/400/400'}
            alt={member.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <CardHeader className="space-y-3 p-4">
        <div>
          <CardTitle className={`text-lg ${member.type === 'faculty' ? 'text-amber-400' : ''}`}>{member.name}</CardTitle>
        </div>
        <Badge variant="secondary" className={`mx-auto w-fit ${member.type === 'faculty' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' : 'bg-secondary/10 text-secondary border-secondary/20'}`}>
          {member.role}
        </Badge>
        {member.linkedin && (
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-primary hover:underline flex items-center justify-center gap-1.5 font-medium transition-colors"
          >
            <Linkedin className="h-3 w-3" />
            LinkedIn Profile
          </a>
        )}
      </CardHeader>
    </Card>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="glass-card flex flex-col h-full transition-all hover:neon-glow-blue duration-300">
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px] py-0 border-white/20">
              <Tag className="h-2 w-2 mr-1" />
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
