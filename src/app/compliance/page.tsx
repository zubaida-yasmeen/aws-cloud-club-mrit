
"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  ShieldCheck, 
  Users,
  Eye,
  Linkedin,
  ShieldAlert
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DOCUMENTS = [
  { title: "Club Proposal Letter", desc: "Official submission to MRIT administration.", href: "#" },
  { title: "Official Circulars", desc: "Approved communications and recognition letters.", href: "#" }
];

const POLICIES = [
  { title: "Code of Conduct", desc: "Security, communication, and member standards.", href: "#" }
];

const CORE_LEADERSHIP = [
  { name: "Zubeda Yasmeen", role: "Captain", linkedIn: "https://www.linkedin.com/in/zubeda-yasmeen/" },
  { name: "Umme Salma", role: "Vice Captain", linkedIn: "https://www.linkedin.com/in/umme-salma-6b7091325/" },
  { name: "Yasmeen Taj", role: "Director of Events", linkedIn: "https://www.linkedin.com/in/yasmeen-taj0114/" }
];

export default function CompliancePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <header className="space-y-6">
        <SectionHeader 
          title="Compliance & Transparency" 
          subtitle="Official institutional dashboard for governance and verified policies."
        />
        <Alert className="bg-primary/5 border-primary/20 text-primary py-3">
          <ShieldAlert className="h-4 w-4" />
          <AlertDescription className="text-sm font-semibold ml-2">
            Only official club communications are valid.
          </AlertDescription>
        </Alert>
      </header>

      {/* Section 1: Official Documents */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-muted-foreground border-b border-white/5 pb-3">
          <FileText className="h-4 w-4" />
          Official Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DOCUMENTS.map((doc, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="p-5 flex flex-row items-center justify-between space-y-0">
                <div className="space-y-1 pr-4">
                  <CardTitle className="text-base font-bold">{doc.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-1">{doc.desc}</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 border-white/10 hover:bg-primary hover:text-white" asChild>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </a>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: Governance */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-muted-foreground border-b border-white/5 pb-3">
          <Users className="h-4 w-4" />
          Governance
        </h3>
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          {CORE_LEADERSHIP.map((leader, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">{leader.name}</span>
                <span className="text-[10px] uppercase tracking-tighter text-muted-foreground font-medium">{leader.role}</span>
              </div>
              <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              {i < CORE_LEADERSHIP.length - 1 && <div className="h-4 w-px bg-white/10 hidden sm:block ml-2" />}
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Policies */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-muted-foreground border-b border-white/5 pb-3">
          <ShieldCheck className="h-4 w-4" />
          Policies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {POLICIES.map((policy, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-all duration-300">
              <CardHeader className="p-5 flex flex-row items-center justify-between space-y-0">
                <div className="space-y-1 pr-4">
                  <CardTitle className="text-base font-bold">{policy.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-1">{policy.desc}</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="shrink-0 border-white/10 hover:bg-primary hover:text-white" asChild>
                  <a href={policy.href} target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </a>
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center pt-12 border-t border-white/5">
        <p className="text-xs text-muted-foreground font-medium italic">
          Unverified forms or payments are not the responsibility of the club.
        </p>
      </footer>
    </div>
  );
}
