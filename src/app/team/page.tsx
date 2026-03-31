
import { Suspense } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/Cards";
import { getTeam } from "@/lib/store";
import { Skeleton } from "@/components/ui/skeleton";
import { PlaceHolderImages } from "@/lib/placeholder-images";

async function TeamList() {
  const team = await getTeam();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}

function TeamSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div key={i} className="glass-card h-64 rounded-xl flex flex-col items-center justify-center space-y-4 p-8">
          <Skeleton className="h-32 w-32 rounded-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader 
        title="Meet the Team" 
        subtitle="The passionate individuals behind AWS Cloud Club MRIT who work tirelessly to bring cloud education to our campus."
      />
      
      <Suspense fallback={<TeamSkeleton />}>
        <TeamList />
      </Suspense>

      <div className="mt-24">
        <SectionHeader title="Faculty Coordinators" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Sariya Anjum", 
              role: "Faculty Coordinator", 
              image: PlaceHolderImages.find(i => i.id === 'faculty-sariya')?.imageUrl || '' 
            },
            { 
              name: "Mr. Gowtham A R", 
              role: "Faculty Coordinator", 
              image: PlaceHolderImages.find(i => i.id === 'faculty-gowtham')?.imageUrl || '' 
            },
            { 
              name: "Seema Firdous", 
              role: "Faculty Coordinator", 
              image: PlaceHolderImages.find(i => i.id === 'faculty-seema')?.imageUrl || '' 
            }
          ].map((advisor, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl flex items-center gap-6 transition-all hover:scale-[1.02] hover:border-primary/20">
              <div className="relative h-20 w-20 shrink-0 rounded-xl overflow-hidden border border-white/10">
                <img src={advisor.image} alt={advisor.name} className="object-cover h-full w-full" />
              </div>
              <div>
                <h4 className="font-bold text-lg">{advisor.name}</h4>
                <p className="text-muted-foreground text-sm">{advisor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
