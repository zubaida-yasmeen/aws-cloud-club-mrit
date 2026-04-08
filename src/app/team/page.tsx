
"use client";

import * as React from "react";
import { useCollection, useMemoFirebase, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/Cards";
import { Skeleton } from "@/components/ui/skeleton";
import { getTeam, TeamMember } from "@/lib/store";

export default function TeamPage() {
  const db = useFirestore();
  const [staticTeam, setStaticTeam] = React.useState<TeamMember[]>([]);

  // Load static/default team data
  React.useEffect(() => {
    getTeam().then(setStaticTeam);
  }, []);

  const teamQuery = useMemoFirebase(() => {
    return query(collection(db, "team"), orderBy("name", "asc"));
  }, [db]);

  const { data: dbTeamMembers, isLoading: isDbLoading } = useCollection(teamQuery);

  // Combine Firestore data with static fallback data for a complete view
  // prioritizing Firestore if data exists there.
  const allMembers = React.useMemo(() => {
    const combined = [...(dbTeamMembers || [])];
    
    // Add static members if they aren't already represented by ID in the DB
    staticTeam.forEach(staticMember => {
      if (!combined.find(m => m.id === staticMember.id)) {
        combined.push(staticMember as any);
      }
    });

    return combined;
  }, [dbTeamMembers, staticTeam]);

  const studentLeads = allMembers.filter((m) => m.type === "student");
  const facultyAdvisors = allMembers.filter((m) => m.type === "faculty");

  if (isDbLoading && staticTeam.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SectionHeader title="Meet the Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card h-64 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
      {/* Faculty Advisory Section */}
      <section>
        <SectionHeader 
          title="Faculty Advisory" 
          subtitle="Our mentors who provide guidance and strategic direction to the AWS Cloud Club MRIT community."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facultyAdvisors.length > 0 ? (
            facultyAdvisors.map((member) => (
              <div 
                key={member.id} 
                className="relative p-0.5 rounded-2xl bg-gradient-to-br from-amber-400 via-primary to-secondary shadow-2xl transition-transform hover:scale-[1.02]"
              >
                <div className="bg-background/95 rounded-2xl overflow-hidden h-full">
                  <TeamCard member={member} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground italic col-span-full">No faculty advisors listed.</p>
          )}
        </div>
      </section>

      {/* Student Leads Section */}
      <section>
        <SectionHeader 
          title="Student Leads" 
          subtitle="The energetic student team driving innovation and cloud learning across the campus."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentLeads.length > 0 ? (
            studentLeads.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))
          ) : (
            <p className="text-muted-foreground italic col-span-full">No student leads listed.</p>
          )}
        </div>
      </section>
    </div>
  );
}
