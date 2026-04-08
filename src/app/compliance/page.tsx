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
  Banknote,
  Crown,
  Workflow,
  GanttChartSquare,
  AlertTriangle
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
    icon: ShieldCheck,
    level: "Executive Leadership",
    description: "Strategic head of the organization responsible for overall club vision and AWS ecosystem alignment.",
    responsibilities: [
      "Strategic leadership and vision for the club",
      "Primary liaison with AWS Community Managers",
      "Overseeing all club departments and project deliveries",
      "Chairing board meetings and major event planning"
    ]
  },
  {
    role: "Treasurer",
    icon: Banknote,
    level: "Executive Leadership",
    description: "Financial steward ensuring fiscal transparency and administrative compliance with college norms.",
    responsibilities: [
      "Managing club budget and financial records",
      "Ensuring transparency in all monetary transactions",
      "Handling sponsorship funds and event expenditure reports",
      "Coordinating with college accounts for formal approvals"
    ]
  },
  {
    role: "Core Team (Directors)",
    icon: Workflow,
    level: "Departmental Leadership",
    description: "Departmental leads executing operational goals and mentoring the general student body.",
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

      {/* Global Official Channel Banner */}
      <Alert className="mb-12 bg-primary/10 border-primary/30 text-primary-foreground/90">
        <ShieldCheck className="h-5 w-5 text-primary" />
        <AlertTitle className="font-bold ml-2">Official Channel Verification</AlertTitle>
        <AlertDescription className="ml-2">
          Only documents and communications issued by the Captain or official channels are valid.
        </AlertDescription>
      </Alert>

      <div className="space-y-24">
        {/* Official Documents Section */}
        <section className="animate-fade-in-up" id="documents">
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
        <section className="animate-fade-in-up [animation-delay:200ms]" id="governance">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <Users className="text-secondary h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Governance & Structure</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {GOVERNANCE_ROLES.map((item, idx) => (
              <Card key={idx} className={`glass-card border-white/5 hover:border-secondary/30 transition-all group ${item.role === 'Captain' ? 'ring-1 ring-primary/20 shadow-2xl shadow-primary/5' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform bg-gradient-to-br from-secondary/20 to-secondary/5">
                      <item.icon className="text-secondary h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[10px] uppercase border-white/10 text-muted-foreground">
                      {item.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {item.role}
                    {item.role === 'Captain' && <ShieldCheck className="h-4 w-4 text-primary" />}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed mt-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Core Accountability</h5>
                    <ul className="space-y-3">
                      {item.responsibilities.slice(0, 2).map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <ChevronRight className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                      <li className="text-[10px] text-primary italic pt-2">...see full handbook below</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <GanttChartSquare className="h-5 w-5 text-secondary" />
              Roles & Responsibilities Handbook
            </h4>
            <Accordion type="single" collapsible className="glass-card rounded-2xl border-white/5 px-6 overflow-hidden">
              <AccordionItem value="roles-responsibilities" className="border-none">
                <AccordionTrigger className="hover:no-underline text-lg font-bold py-6 group">
                  <span className="group-hover:text-secondary transition-colors">Detailed Operational Framework</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-8 pt-2 pb-8">
                  <p className="text-base leading-relaxed max-w-4xl">
                    Our governance model is designed to ensure stability, growth, and strict adherence to MRIT campus policies. Each leadership role within the AWS Cloud Club MRIT is clearly defined to foster individual accountability and collaborative excellence.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all">
                      <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                        <Scale className="h-5 w-5 text-secondary" />
                      </div>
                      <h5 className="font-bold text-white mb-3">Decision Making</h5>
                      <p className="text-sm leading-relaxed">Major decisions require a majority board vote and faculty coordinator approval to ensure alignment with college institutional policies.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all">
                      <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                        <Users className="h-5 w-5 text-secondary" />
                      </div>
                      <h5 className="font-bold text-white mb-3">Leadership Selection</h5>
                      <p className="text-sm leading-relaxed">Leaders are selected based on contribution, technical merit, and community engagement through an annual review process by the faculty board.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/20 transition-all">
                      <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <h5 className="font-bold text-white mb-3">Service Tenure</h5>
                      <p className="text-sm leading-relaxed">Standard tenure for executive roles is one academic year, with a mandatory transition period to ensure continuity of club operations.</p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-widest">Board Hierarchy & Reporting</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm p-3 rounded-lg bg-black/20 border border-white/5">
                        <Badge className="bg-primary/20 text-primary border-primary/30">Level 1</Badge>
                        <span>Faculty Coordinators (Institutional Oversight)</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm p-3 rounded-lg bg-black/20 border border-white/5 ml-4 sm:ml-8">
                        <Badge className="bg-secondary/20 text-secondary border-secondary/30">Level 2</Badge>
                        <span>Club Captain & Treasurer (Executive Strategy)</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm p-3 rounded-lg bg-black/20 border border-white/5 ml-8 sm:ml-16">
                        <Badge variant="outline" className="border-white/10">Level 3</Badge>
                        <span>Core Team Directors (Operational Execution)</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Policies & Guidelines Section */}
        <section className="animate-fade-in-up [animation-delay:400ms]" id="policies">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-accent/10 p-2 rounded-lg">
              <Scale className="text-accent h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Policies & Guidelines</h3>
          </div>

          <div className="space-y-4 mb-8">
            <Alert className="bg-amber-500/10 border-amber-500/30 text-amber-200">
              <AlertCircle className="h-4 w-4 !text-amber-500" />
              <AlertTitle className="font-bold">Official Notice</AlertTitle>
              <AlertDescription>
                Only policies issued by official club authorities and verified by faculty coordinators are valid. Any unofficial documentation circulating outside this repository is not binding and may not reflect current club standards.
              </AlertDescription>
            </Alert>

            {/* Financial Warning */}
            <Alert className="bg-destructive/10 border-destructive/30 text-destructive-foreground">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertTitle className="font-bold">Financial Integrity Warning</AlertTitle>
              <AlertDescription>
                All payments must be verified by the Captain or Treasurer. Unverified transactions are fraudulent and may lead to legal action.
              </AlertDescription>
            </Alert>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POLICIES.map((policy, idx) => (
              <Card key={idx} className="glass-card border-white/5 hover:bg-white/[0.07] transition-all flex flex-col group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground uppercase border-white/10">
                      Updated: {policy.updated}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{policy.title}</CardTitle>
                  <CardDescription className="text-muted-foreground pt-2 text-sm leading-relaxed">
                    {policy.summary}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto border-t border-white/5 pt-6">
                  <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-primary group/btn">
                    View Policy Details
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-24 p-12 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-[2.5rem] border border-white/10 text-center relative overflow-hidden group">
        <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
          <Shield className="h-64 w-64" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Integrity & Excellence</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          As an official AWS Cloud Club, we adhere to global community standards and campus ethical guidelines. We believe that transparency in governance fosters trust and encourages inclusive innovation within the MRIT campus community.
        </p>
      </div>
    </div>
  );
}