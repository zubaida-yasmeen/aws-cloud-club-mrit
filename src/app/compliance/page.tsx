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
  AlertCircle
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

export default function CompliancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[70vh]">
      <SectionHeader 
        title="Compliance & Transparency" 
        subtitle="Official repository for club policies, governance, and verified documents. We maintain high standards of accountability and campus integrity."
      />

      <div className="space-y-20">
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

        {/* Other Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Governance & Structure",
              description: "Details on leadership selection, board composition, and the formal decision-making processes governing club operations.",
              icon: Shield,
              status: "In Review"
            },
            {
              title: "Policies & Guidelines",
              description: "Code of conduct, data protection policies, and membership rules designed to ensure a safe and inclusive environment.",
              icon: Scale,
              status: "Internal Use"
            }
          ].map((section, idx) => (
            <Card key={idx} className="glass-card border-white/10 opacity-80">
              <CardHeader>
                <div className="bg-secondary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <section.icon className="text-secondary h-6 w-6" />
                </div>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <Badge variant="outline" className="text-[10px] text-muted-foreground uppercase tracking-wider">{section.status}</Badge>
                </div>
                <CardDescription className="text-muted-foreground pt-2">
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 border border-dashed border-white/10 rounded-lg bg-white/5 text-center">
                  <p className="text-xs text-muted-foreground italic">
                    Final draft being verified by faculty coordinators.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
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
