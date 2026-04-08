"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, Shield, Scale } from "lucide-react";

export default function CompliancePage() {
  const sections = [
    {
      title: "Official Documents",
      description: "Access club charter, verified certificates, and formal recognitions.",
      icon: FileText
    },
    {
      title: "Governance & Structure",
      description: "Details on leadership selection, board composition, and decision-making processes.",
      icon: Shield
    },
    {
      title: "Policies & Guidelines",
      description: "Code of conduct, data protection policies, and membership rules.",
      icon: Scale
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[70vh]">
      <SectionHeader 
        title="Compliance & Transparency" 
        subtitle="Official repository for club policies, governance, and verified documents."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-in-up">
        {sections.map((section, idx) => (
          <Card key={idx} className="glass-card border-white/10 hover:border-primary/50 transition-all duration-300 group">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <section.icon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{section.title}</CardTitle>
              <CardDescription className="text-muted-foreground pt-2">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 border border-dashed border-white/10 rounded-lg bg-white/5">
                <p className="text-xs text-muted-foreground italic text-center">
                  Verification in progress. Documentation will be available shortly.
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20 p-10 bg-secondary/10 rounded-3xl border border-secondary/20 text-center">
        <h3 className="text-xl font-bold mb-2">Integrity First</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          As an official AWS Cloud Club, we adhere to global community standards to ensure a safe, inclusive, and transparent environment for all members of the MRIT campus.
        </p>
      </div>
    </div>
  );
}
