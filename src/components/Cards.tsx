import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Event, TeamMember, Project } from "@/lib/store";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="glass-card group overflow-hidden transition-all hover:-translate-y-2 duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-xs text-primary mb-2">
          <Calendar className="h-3 w-3" />
          {event.date}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {event.description}
        </p>
      </CardContent>
    </Card>
  );
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="glass-card text-center overflow-hidden transition-all hover:border-primary/50 duration-300">
      <div className="pt-8 pb-4 flex justify-center">
        <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-primary/20 p-1">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{member.name}</CardTitle>
        <Badge variant="secondary" className="mx-auto w-fit bg-secondary/10 text-secondary border-secondary/20">
          {member.role}
        </Badge>
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
