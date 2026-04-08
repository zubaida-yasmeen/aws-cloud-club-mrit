
"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ShieldCheck, 
  Users,
  Eye,
  Linkedin,
  ChevronRight,
  CircleAlert
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const DOCUMENTS = [
  { title: "Club Proposal Letter", desc: "Official submission to MRIT admin.", date: "Feb 2024" },
  { title: "Official Circulars", desc: "Approved communications and recognitions.", date: "Mar 2024" }
];

const CORE_LEADERSHIP = [
  {
    name: "Zubeda Yasmeen",
    role: "Captain",
    linkedIn: "https://www.linkedin.com/in/zubeda-yasmeen/",
  },
  {
    name: "Umme Salma",
    role: "Vice Captain",
    linkedIn: "https://www.linkedin.com/in/umme-salma-6b7091325/",
  },
  {
    name: "Yasmeen Taj",
    role: "Director of Events",
    linkedIn: "https://www.linkedin.com/in/yasmeen-taj0114/",
  }
];

const CONDUCT_POLICY = [
  {
    title: "1. Authorized Communication",
    points: [
      "Only communications issued by the Captain/Core Team via official channels are valid.",
      "Any other communication is unauthorized and must be ignored."
    ]
  },
  {
    title: "2. Form & Registration Policy",
    points: [
      "Do NOT fill or circulate any form unless officially approved.",
      "Forms from external/unverified sources are strictly prohibited.",
      "Individuals engaging with such forms are solely responsible for consequences."
    ]
  },
  {
    title: "3. Financial Transactions",
    points: [
      "Any payment must be verified by the Captain/Treasurer and sent via official channels.",
      "Unverified requests are treated as Fraudulent and Unauthorized.",
      "Unauthorized collectors face immediate disciplinary and legal action.",
      "Payments to unverified sources are at the individual's own liability."
    ]
  },
  {
    title: "4. Data & Accountability",
    points: [
      "Only data shared by the Captain is officially accountable.",
      "Zero responsibility for unauthorized data sharing or external links."
    ]
  },
  {
    title: "5. Fraudulent Activities",
    points: [
      "Misuse of club name/logo or creation of fake forms is strictly prohibited."
    ]
  }
];

export default function CompliancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <header className="space-y-4">
        <SectionHeader 
          title="Compliance Dashboard" 
          subtitle="Official repository for governance, policies, and verified documentation."
        />
        <Alert className="bg-primary/5 border-primary/20 text-primary-foreground py-2">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <AlertDescription className="text-xs font-medium">
            Only official club communications are valid.
          </AlertDescription>
        </Alert>
      </header>

      {/* Section: Official Documents */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-muted-foreground border-b border-white/5 pb-2">
          <FileText className="h-3.5 w-3.5" />
          Official Documents
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DOCUMENTS.map((doc, i) => (
            <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
              <CardHeader className="p-4 flex flex-row items-center justify-between space-y-0">
                <div className="space-y-1">
                  <CardTitle className="text-sm font-bold">{doc.title}</CardTitle>
                  <CardDescription className="text-[10px]">{doc.desc}</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                  <Eye className="h-4 w-4" />
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Section: Governance */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-muted-foreground border-b border-white/5 pb-2">
          <Users className="h-3.5 w-3.5" />
          Core Governance
        </h3>
        <div className="flex flex-wrap gap-3">
          {CORE_LEADERSHIP.map((leader, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-xs hover:border-primary/30 transition-all">
              <span className="font-bold">{leader.name}</span>
              <span className="text-muted-foreground">|</span>
              <span className="text-primary/80 font-medium">{leader.role}</span>
              <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer" className="ml-1 text-muted-foreground hover:text-primary">
                <Linkedin className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Code of Conduct */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            Security & Code of Conduct
          </h3>
          <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">AWS Cloud Club MRIT</Badge>
        </div>

        <Card className="bg-white/5 border-white/10 overflow-hidden">
          <CardHeader className="p-6 bg-primary/5 border-b border-white/5">
            <CardTitle className="text-lg font-bold">Standard of Conduct</CardTitle>
            <CardDescription className="text-xs">
              To ensure professionalism and security, all members must strictly adhere to these rules:
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {CONDUCT_POLICY.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  {section.title}
                </h4>
                <ul className="space-y-1.5 pl-2">
                  {section.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                      <ChevronRight className="h-3 w-3 mt-0.5 text-primary/50 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
          <CardFooter className="p-4 bg-primary/5 flex justify-center border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground italic">
              <CircleAlert className="h-3 w-3 text-primary" />
              Official policies are subject to updates by the Core Team.
            </div>
          </CardFooter>
        </Card>
      </section>

      <footer className="text-center pt-8 border-t border-white/5">
        <p className="text-[10px] text-muted-foreground">
          Unverified forms or payments are not the responsibility of the club.
        </p>
      </footer>
    </div>
  );
}
