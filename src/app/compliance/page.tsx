"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Shield, 
  Scale, 
  Download, 
  Eye, 
  CheckCircle, 
  Clock, 
  FileCheck2,
  AlertCircle,
  Users,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Lock,
  Database,
  Banknote
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface OfficialDocument {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  verified: boolean;
}

const OFFICIAL_DOCUMENTS: OfficialDocument[] = [
  {
    id: "prop-01",
    title: "Club Proposal Letter",
    description: "The formal proposal submitted to the college administration for the establishment of the official AWS Cloud Club at MRIT.",
    lastUpdated: "Feb 15, 2024",
    verified: true,
  },
  {
    id: "circ-02",
    title: "Official Circulars",
    description: "Collection of internal and external communications regarding club approvals, event permissions, and administrative recognitions.",
    lastUpdated: "Mar 01, 2024",
    verified: true,
  }
];

const POLICIES = [
  {
    title: "Code of Conduct",
    summary: "Standard behavioral expectations for all club members and event participants to ensure a professional environment.",
    icon: ShieldCheck,
    updated: "Jan 10, 2024"
  },
  {
    title: "Security & Communication Policy",
    summary: "Guidelines for secure communication channels and data handling within the club's digital infrastructure.",
    icon: Lock,
    updated: "Jan 15, 2024"
  },
  {
    title: "Data Privacy Policy",
    summary: "How we collect, store, and protect member information in compliance with MRIT campus and AWS community norms.",
    icon: Database,
    updated: "Feb 20, 2024"
  },
  {
    title: "Financial Transaction Policy",
    summary: "Transparency rules for handling event fees, sponsorships, and internal club funds with faculty oversight.",
    icon: Banknote,
    updated: "Mar 05, 2024"
  }
];

const GOVERNANCE_ROLES = [
  {
    role: "Captain",
    responsibilities: [
      "Strategic leadership and vision for the club",
      "Primary liaison with AWS Community Managers",
      "Overseeing all club departments and project deliveries",
      "Chairing board meetings and major event planning"
    ]
  },
  {
    role: "Treasurer",
    responsibilities: [
      "Managing club budget and financial records",
      "Ensuring transparency in all monetary transactions",
      "Handling sponsorship funds and event expenditure reports",
      "Coordinating with college accounts for formal approvals"
    ]
  },
  {
    role: "Core Team (Directors)",
    responsibilities: [
      "Executing departmental goals (Tech, Events, Outreach, etc.)",
      "Mentoring general body members and junior leads",
      "Managing specific project pipelines and event logistics",
      "Contributing to club policy development and compliance"
    ]
  }
];

export default function CompliancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[70vh]">
      <SectionHeader 
        title="Compliance & Transparency" 
        subtitle="Official repository for club policies, governance, and verified documents. We maintain high standards of accountability and campus integrity."
      />

      <div className="space-y-24">
        {/* Official Documents Section */}
        <section className="animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-2 rounded-lg">
              <FileText className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Official Documents</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OFFICIAL_DOCUMENTS.map((doc) => (
              <Card key={doc.id} className="glass-card border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col group">
                <CardHeader className="relative">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 flex items-center gap-1">
                      <FileCheck2 className="h-3.5 w-3.5" />
                      Verified
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      Last Updated: {doc.lastUpdated}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{doc.title}</CardTitle>
                  <CardDescription className="text-muted-foreground pt-2 leading-relaxed">
                    {doc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-sm text-muted-foreground">This document has been digitally verified by the AWS Cloud Club MRIT Board.</span>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/5 pt-6 flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 gap-2 border-white/10 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all">
                        <Eye className="h-4 w-4" />
                        View PDF
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-card border-white/10">
                      <DialogHeader>
                        <DialogTitle>{doc.title}</DialogTitle>
                        <DialogDescription>Document Preview</DialogDescription>
                      </DialogHeader>
                      <div className="h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-xl bg-white/5">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mb-4 opacity-30" />
                        <h4 className="font-bold mb-2">Secure PDF Viewer</h4>
                        <p className="text-muted-foreground text-sm max-w-xs">
                          For security reasons, full document previews are only available to registered campus members. Please login or download the document to view its content.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button className="flex-1 gap-2 bg-primary/20 text-primary hover:bg-primary hover:text-white border border-primary/20 transition-all">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Governance & Structure Section */}
        <section className="animate-fade-in-up [animation-delay:200ms]">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <Users className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Governance & Structure</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {GOVERNANCE_ROLES.map((item, idx) => (
              <Card key={idx} className="glass-card border-white/5 hover:border-secondary/30 transition-all group">
                <CardHeader>
                  <div className="bg-secondary/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="text-secondary h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{item.role}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Accordion type="single" collapsible className="glass-card rounded-2xl border-white/5 px-6">
            <AccordionItem value="roles-responsibilities" className="border-none">
              <AccordionTrigger className="hover:no-underline text-lg font-bold">
                Detailed Roles & Responsibilities Handbook
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-2 pb-6">
                <p>
                  Our governance model is designed to ensure stability and growth. Each role within the AWS Cloud Club MRIT is clearly defined to prevent overlaps and ensure accountability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h5 className="font-bold text-white mb-2">Decision Making</h5>
                    <p className="text-xs">Major decisions require a majority board vote and faculty coordinator approval to ensure alignment with college policies.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <h5 className="font-bold text-white mb-2">Leadership Selection</h5>
                    <p className="text-xs">Leaders are selected based on contribution, technical merit, and community engagement through an annual review process.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Policies & Guidelines Section */}
        <section className="animate-fade-in-up [animation-delay:400ms]">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-accent/10 p-2 rounded-lg">
              <Scale className="text-accent h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Policies & Guidelines</h3>
          </div>

          <Alert className="mb-8 bg-amber-500/10 border-amber-500/30 text-amber-200">
            <AlertCircle className="h-4 w-4 !text-amber-500" />
            <AlertTitle className="font-bold">Official Notice</AlertTitle>
            <AlertDescription>
              Only policies issued by official club authorities and verified by faculty coordinators are valid. Any unofficial documentation circulating outside this repository is not binding.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POLICIES.map((policy, idx) => (
              <Card key={idx} className="glass-card border-white/5 hover:bg-white/[0.07] transition-all flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground uppercase">
                      Updated: {policy.updated}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{policy.title}</CardTitle>
                  <CardDescription className="text-muted-foreground pt-2">
                    {policy.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-t border-white/5 pt-6">
                  <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary group">
                    View Policy Details
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-24 p-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
          <Shield className="h-40 w-40" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Integrity & Excellence</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          As an official AWS Cloud Club, we adhere to global community standards. We believe that transparency in governance fosters trust and encourages innovation within the MRIT campus community.
        </p>
      </div>
    </div>
  );
}
