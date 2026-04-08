
"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  ShieldCheck, 
  Eye, 
  Scale, 
  Users,
  ChevronRight,
  Linkedin,
  User
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const DOCUMENTS = [
  { title: "Club Proposal Letter", desc: "Formal proposal submitted to college administration.", date: "Feb 2024" },
  { title: "Official Circulars", desc: "Approved communications and administrative recognitions.", date: "Mar 2024" }
];

const POLICIES = [
  { title: "Code of Conduct", desc: "Professional behavioral expectations for members." }
];

const CORE_LEADERSHIP = [
  {
    name: "Zubeda Yasmeen",
    role: "Club Captain",
    linkedIn: "https://www.linkedin.com/in/zubeda-yasmeen/",
    image: PlaceHolderImages.find(i => i.id === 'team-captain')?.imageUrl
  },
  {
    name: "Umme Salma",
    role: "Vice Captain",
    linkedIn: "https://www.linkedin.com/in/umme-salma-6b7091325/",
    image: PlaceHolderImages.find(i => i.id === 'team-doc')?.imageUrl
  },
  {
    name: "Yasmeen Taj",
    role: "Director of Events",
    linkedIn: "https://www.linkedin.com/in/yasmeen-taj0114/",
    image: PlaceHolderImages.find(i => i.id === 'team-event')?.imageUrl
  }
];

export default function CompliancePage() {
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
          Governance & Core Leadership
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CORE_LEADERSHIP.map((leader, i) => (
            <Card key={i} className="bg-white/5 border-white/10 overflow-hidden hover:border-primary/30 transition-all group">
              <div className="aspect-square relative overflow-hidden bg-primary/20">
                {leader.image ? (
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <User className="h-12 w-12 text-primary opacity-50" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
              <CardHeader className="p-4 space-y-1">
                <CardTitle className="text-base font-bold">{leader.name}</CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-[10px] w-fit">
                  {leader.role}
                </Badge>
              </CardHeader>
              <CardFooter className="p-4 pt-0">
                <Button asChild variant="ghost" size="sm" className="h-8 text-xs w-full gap-1.5 hover:bg-primary/10 hover:text-primary transition-colors">
                  <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-3.5 w-3.5" />
                    View Profile
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
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
