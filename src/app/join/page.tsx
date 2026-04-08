import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, CheckCircle2, Users, Trophy, ExternalLink, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function JoinPage() {
  const meetupLink = "https://www.meetup.com/aws-cloud-club-at-mysuru-royal-inst-of-tech/";
  const linkedinLink = "https://www.linkedin.com/company/aws-cloud-club-mrit/";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
      <SectionHeader 
        title="Become a Member" 
        subtitle="Join a community of 250+ cloud enthusiasts and take your technology skills to the next level."
        centered
      />

      <Alert className="mb-12 bg-amber-500/10 border-amber-500/30 text-amber-200 max-w-2xl">
        <AlertCircle className="h-4 w-4 !text-amber-500" />
        <AlertTitle className="font-bold">Official Form Policy</AlertTitle>
        <AlertDescription>
          Only fill forms shared via official channels. External forms are not the responsibility of the club.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Join?</h3>
            <div className="space-y-4">
              {[
                { text: "Access to premium AWS learning resources", icon: Cloud },
                { text: "Hands-on projects with peer mentors", icon: Users },
                { text: "Participation in exclusive hackathons", icon: Trophy },
                { text: "Official AWS Cloud Club merchandise", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <item.icon className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-muted-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl border-primary/30 flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
            <Cloud className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
          <p className="text-muted-foreground mb-8">
            Connect with our community platforms to stay updated on all activities and events.
          </p>
          <div className="flex flex-col gap-4 w-full">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 w-full h-14 text-lg">
              <a href="https://chat.whatsapp.com/Lgs9RQz58ybDQCpWXOT45i" target="_blank" rel="noopener noreferrer">
                Join WhatsApp Group
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 hover:bg-white/5 w-full h-14 text-lg">
              <a href={meetupLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Join on Meetup
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Direct links to official community platforms
          </p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h4 className="text-xl font-bold mb-4">Follow our journey</h4>
        <div className="flex flex-wrap gap-4 justify-center">
          {["Instagram", "LinkedIn", "Meetup"].map((platform) => {
            let href = "#";
            if (platform === "Meetup") href = meetupLink;
            if (platform === "LinkedIn") href = linkedinLink;

            return (
              <a 
                key={platform} 
                href={href} 
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
              >
                <Badge className="px-6 py-2 bg-white/5 hover:bg-primary/10 transition-colors cursor-pointer border-white/10">
                  {platform}
                </Badge>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}