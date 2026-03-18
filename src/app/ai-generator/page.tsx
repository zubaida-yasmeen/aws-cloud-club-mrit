"use client";

import * as React from "react";
import { Zap, Sparkles, Loader2, CheckCircle2, Cloud, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { generateCloudProjectIdea, AiCloudProjectGeneratorOutput } from "@/ai/flows/ai-cloud-project-generator-flow";
import { SectionHeader } from "@/components/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const AWS_SERVICES = [
  "S3", "EC2", "Lambda", "DynamoDB", "Bedrock", "Rekognition", "IoT Core", "Amplify", "AppSync"
];

const INTEREST_AREAS = [
  "AI/ML", "Web Dev", "Security", "Data Analytics", "DevOps", "Gaming", "Education", "Healthcare"
];

export default function AiGeneratorPage() {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>([]);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [result, setResult] = React.useState<AiCloudProjectGeneratorOutput | null>(null);
  const { toast } = useToast();

  const handleToggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleToggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]
    );
  };

  const handleGenerate = async () => {
    if (selectedServices.length === 0 && selectedInterests.length === 0) {
      toast({
        title: "Selection required",
        description: "Please select at least one AWS service or interest area.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const output = await generateCloudProjectIdea({
        awsServices: selectedServices,
        interestAreas: selectedInterests,
      });
      setResult(output);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate project idea. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="container px-4 py-20 max-w-5xl">
      <SectionHeader 
        title="AI Project Generator" 
        subtitle="Generate tailored AWS cloud projects based on your skills and interests. Powered by Google Gemini."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-8">
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-primary" />
                Select Services
              </CardTitle>
              <CardDescription>Which AWS services do you want to use?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {AWS_SERVICES.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`svc-${service}`} 
                      checked={selectedServices.includes(service)}
                      onCheckedChange={() => handleToggleService(service)}
                    />
                    <Label htmlFor={`svc-${service}`} className="text-sm cursor-pointer">{service}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-secondary" />
                Areas of Interest
              </CardTitle>
              <CardDescription>What domains are you interested in?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {INTEREST_AREAS.map(interest => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`int-${interest}`} 
                      checked={selectedInterests.includes(interest)}
                      onCheckedChange={() => handleToggleInterest(interest)}
                    />
                    <Label htmlFor={`int-${interest}`} className="text-sm cursor-pointer">{interest}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 h-12 text-lg font-bold"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Designing Project...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-5 w-5" />
                Generate Project Idea
              </>
            )}
          </Button>
        </div>

        <div className="lg:col-span-7">
          {result ? (
            <div className="animate-fade-in-up">
              <Card className="glass-card border-primary/30 neon-glow-blue overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary text-white">AI Generated Idea</Badge>
                  </div>
                  <CardTitle className="text-3xl text-primary font-bold">{result.projectTitle}</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-8">
                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      Description
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">{result.projectDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {result.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 border-white/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" />
                      Implementation Steps
                    </h4>
                    <div className="space-y-3">
                      {result.implementationSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground bg-white/5 p-3 rounded-lg border border-white/5">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-white/10 rounded-3xl bg-white/5">
              <Sparkles className="h-16 w-16 text-muted-foreground mb-6 opacity-20" />
              <h3 className="text-xl font-bold text-muted-foreground">Ready to spark innovation?</h3>
              <p className="text-muted-foreground mt-2 max-w-xs">
                Select your preferences on the left and click generate to get your custom project roadmap.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
