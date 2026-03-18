import { Suspense } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/Cards";
import { getProjects } from "@/lib/store";
import { Skeleton } from "@/components/ui/skeleton";
import { Rocket } from "lucide-react";

async function ProjectsList() {
  const projects = await getProjects();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="glass-card h-96 rounded-xl overflow-hidden flex flex-col">
          <Skeleton className="h-40 w-full" />
          <div className="p-6 flex-1 space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-20 w-full" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-20">
      <SectionHeader 
        title="Student Projects" 
        subtitle="Innovation happens here. Explore the diverse range of cloud projects built by our community members."
      />
      
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsList />
      </Suspense>

      <div className="mt-20 glass-card p-10 rounded-3xl border-primary/20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Rocket className="h-32 w-32" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Want to showcase your project?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          We're looking for projects that utilize AWS in unique ways. Submit your project details to get featured on this page.
        </p>
        <a 
          href="https://forms.gle/placeholder" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90"
        >
          Submit Project
        </a>
      </div>
    </div>
  );
}
