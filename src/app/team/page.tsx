
"use client";

import * as React from "react";
import { useCollection, useMemoFirebase, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/Cards";
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

  // Combine Firestore data with static fallback data
  const allMembers = React.useMemo(() => {
    const combined = [...(dbTeamMembers || [])];
    staticTeam.forEach(staticMember => {
      if (!combined.find(m => m.id === staticMember.id)) {
        combined.push(staticMember as any);
      }
    });
    return combined;
  }, [dbTeamMembers, staticTeam]);

  // Hierarchical Filtering
  const facultyAdvisors = allMembers.filter((m) => m.type === "faculty");
  const studentLeads = allMembers.filter((m) => m.type === "student");
  
  const captains = studentLeads.filter(m => 
    m.role.toLowerCase() === "club captain" || m.role.toLowerCase() === "vice captain"
  );

  // Department definitions for the 5-column grid
  const departments = [
    { 
      name: "Events", 
      directorRole: "Director of Events", 
      assistantRoles: ["Assistant Director of Events"] 
    },
    { 
      name: "Marketing", 
      directorRole: "Director of Marketing & Outreach", 
      assistantRoles: ["Assistant Director of Marketing & Outreach"] 
    },
    { 
      name: "Membership", 
      directorRole: "Director of Membership & Engagement", 
      assistantRoles: ["Assistant Director of Membership & Engagement"] 
    },
    { 
      name: "Technology", 
      directorRole: "Director of Technology", 
      assistantRoles: ["Assistant Director of Technology"] 
    },
    { 
      name: "Data & Ops", 
      directorRole: "Director of Data & Operations", 
      assistantRoles: ["Assistant Director of Data & Operations"] 
    }
  ];

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
          {facultyAdvisors.map((member) => (
            <div 
              key={member.id} 
              className="relative p-0.5 rounded-2xl bg-gradient-to-br from-amber-400 via-primary to-secondary shadow-2xl transition-transform hover:scale-[1.02]"
            >
              <div className="bg-background/95 rounded-2xl overflow-hidden h-full">
                <TeamCard member={member} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Leadership Hierarchy */}
      <section className="space-y-16">
        <div>
          <SectionHeader 
            title="Student Leadership" 
            subtitle="The executive team and departmental leads driving innovation across the campus."
          />
          
          {/* Tier 1: Captains */}
          <div className="flex flex-wrap justify-center gap-8 mb-20">
            {captains.map((member) => (
              <div key={member.id} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(30%-1.5rem)] min-w-[300px]">
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          {/* Tier 2 & 3: Directors and their Assistants Grid */}
          <div className="space-y-12">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary text-center mb-8">Departmental Hierarchy</h3>
            
            {/* Directors Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              {departments.map((dept, idx) => {
                const director = studentLeads.find(m => m.role === dept.directorRole);
                return (
                  <div key={`dir-${idx}`} className="flex flex-col h-full">
                    {director ? (
                      <TeamCard member={director} />
                    ) : (
                      <div className="glass-card h-full rounded-2xl border-dashed border-white/5 min-h-[250px] flex items-center justify-center">
                        <span className="text-[10px] text-muted-foreground uppercase">Role Vacant</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Assistants Row (Aligned under Directors) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {departments.map((dept, idx) => {
                const assistants = studentLeads.filter(m => dept.assistantRoles.includes(m.role));
                return (
                  <div key={`ast-${idx}`} className="flex flex-col gap-4">
                    {assistants.length > 0 ? (
                      assistants.map(ast => <TeamCard key={ast.id} member={ast} />)
                    ) : (
                      <div className="glass-card h-[150px] rounded-2xl border-dashed border-white/5 flex items-center justify-center">
                        <span className="text-[10px] text-muted-foreground uppercase opacity-30">No Assistant</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
