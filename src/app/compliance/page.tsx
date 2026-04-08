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
  Info
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

const ROLES = [
  { title: "Captain", level: "Executive" },
  { title: "Treasurer", level: "Executive" },
  { title: "Core Team", level: "Operations" }
];

export default function CompliancePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <header className="space-y-6">
        <SectionHeader 
          title="Compliance" 
          subtitle="Official repository for club policies, governance, and verified documents."
        />
        <Alert className="bg-primary/5 border-primary/20 text-primary-foreground py-3">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <AlertDescription className="text-sm font-medium">
            Only official club communications are valid.
          </AlertDescription>
        </Alert>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Section: Official Documents */}
        <section className="space-y-6">
          <h3 className="text-lg font-bold flex items-center gap-2 border-b border-white/10 pb-2">
            <FileText className="h-4 w-4 text-primary" />
            Official Documents
          </h3>
          <div className="grid gap-4">
            {DOCUMENTS.map((doc, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
                <CardHeader className="p-4 space-y-1">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base font-bold">{doc.title}</CardTitle>
                    <span className="text-[10px] text-muted-foreground uppercase">{doc.date}</span>
                  </div>
                  <CardDescription className="text-xs truncate">{doc.desc}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 text-xs flex-1 gap-1.5 border-white/10">
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-card border-white/10">
                      <DialogHeader>
                        <DialogTitle>{doc.title}</DialogTitle>
                        <DialogDescription>Verification required to view full document.</DialogDescription>
                      </DialogHeader>
                      <div className="p-8 text-center border border-dashed border-white/10 rounded-lg bg-white/5">
                        <Info className="h-8 w-8 mx-auto mb-2 text-muted-foreground opacity-50" />
                        <p className="text-sm text-muted-foreground">Access restricted to MRIT campus members.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button variant="secondary" size="sm" className="h-8 text-xs flex-1 gap-1.5 bg-primary/10 text-primary hover:bg-primary/20">
                    <Download className="h-3.5 w-3.5" />
                    Download
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
          <div className="grid gap-4">
            {POLICIES.map((policy, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:border-primary/30 transition-colors">
                <CardHeader className="p-4 space-y-1">
                  <CardTitle className="text-base font-bold">{policy.title}</CardTitle>
                  <CardDescription className="text-xs truncate">{policy.desc}</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button variant="ghost" size="sm" className="h-8 text-xs w-full justify-between hover:bg-primary/5 hover:text-primary">
                    View Details
                    <Eye className="h-3.5 w-3.5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Section: Governance */}
      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2 border-b border-white/10 pb-2">
          <Users className="h-4 w-4 text-primary" />
          Governance
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-4 bg-white/5 rounded-xl border border-white/5">
          {ROLES.map((role, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-sm font-bold text-white">{role.title}</span>
              <Badge variant="outline" className="text-[9px] uppercase h-4 px-1 border-white/10 text-muted-foreground">
                {role.level}
              </Badge>
              {i < ROLES.length - 1 && (
                <div className="hidden sm:block absolute translate-x-12 opacity-10 text-primary">|</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
