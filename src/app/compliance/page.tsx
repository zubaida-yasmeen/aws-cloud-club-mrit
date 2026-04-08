
"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ShieldCheck, 
  Download, 
  Eye, 
  Scale, 
  Users,
  Info,
  ChevronRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useCollection, useMemoFirebase, useFirestore } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const DOCUMENTS = [
  { title: "Club Proposal Letter", desc: "Formal proposal submitted to college administration.", date: "Feb 2024" },
  { title: "Official Circulars", desc: "Approved communications and administrative recognitions.", date: "Mar 2024" }
];

const POLICIES = [
  { title: "Code of Conduct", desc: "Professional behavioral expectations for members." },
  { title: "Security Policy", desc: "Guidelines for secure communication and data." },
  { title: "Privacy Policy", desc: "Member data protection and handling norms." },
  { title: "Finance Policy", desc: "Transparency rules for club fund management." }
];

export default function CompliancePage() {
  const db = useFirestore();

  const teamQuery = useMemoFirebase(() => {
    return query(collection(db, "team"), orderBy("name", "asc"));
  }, [db]);

  const { data: teamMembers } = useCollection(teamQuery);

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <header className="space-y-6">
        <SectionHeader 
          title="Compliance & Transparency" 
          subtitle="Official repository for club policies, governance, and verified documents."
        />
        <Alert className="bg-primary/5 border-primary/20 text-primary-foreground py-3">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm font-medium">
            Only official club communications are valid.
          </AlertDescription>
        </Alert>
      </header>

      {/* Section: Official Documents */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2 border-b border-white/10 pb-2">
          <FileText className="h-4 w-4 text-primary" />
          Official Documents
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DOCUMENTS.map((doc, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
              <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-base font-bold">{doc.title}</CardTitle>
                <CardDescription className="text-xs truncate">{doc.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="h-8 text-xs w-full gap-1.5 border-white/10">
                  <Eye className="h-3.5 w-3.5" />
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Section: Governance */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2 border-b border-white/10 pb-2">
          <Users className="h-4 w-4 text-primary" />
          Governance
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/5">
          <TooltipProvider>
            {teamMembers?.map((member, i) => (
              <Tooltip key={member.id}>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center gap-1 cursor-help group">
                    <span className={cn(
                      "text-sm font-bold transition-colors",
                      member.type === "faculty" ? "text-amber-400" : "text-white group-hover:text-primary"
                    )}>
                      {member.name}
                    </span>
                    <Badge variant="outline" className="text-[10px] uppercase h-4 px-1 border-white/10 opacity-70">
                      {member.role}
                    </Badge>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs font-medium">{member.type === 'faculty' ? 'Faculty Advisor' : 'Student Lead'}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          {(!teamMembers || teamMembers.length === 0) && (
            <p className="text-xs text-muted-foreground">Leadership structure pending updates.</p>
          )}
        </div>
      </section>

      {/* Section: Policies */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2 border-b border-white/10 pb-2">
          <Scale className="h-4 w-4 text-primary" />
          Policies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {POLICIES.map((policy, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
              <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-base font-bold">{policy.title}</CardTitle>
                <CardDescription className="text-xs truncate">{policy.desc}</CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <Button variant="ghost" size="sm" className="h-8 text-xs w-full justify-between hover:bg-primary/5 hover:text-primary">
                  View Details
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center pt-8 border-t border-white/5">
        <p className="text-xs text-muted-foreground">
          Unverified forms or payments are not the responsibility of the club.
        </p>
      </footer>
    </div>
  );
}
