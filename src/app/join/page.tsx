import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, CheckCircle2, Users, Trophy, ExternalLink } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="container px-4 py-20 flex flex-col items-center">
      <SectionHeader 
        title="Become a Member" 
        subtitle="Join a community of 250+ cloud enthusiasts and take your technology skills to the next level."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full items-center">
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
              <a href="https://www.meetup.com/aws-cloud-club-at-mysuru-royal-inst-of-tech/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
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
        <div className="flex gap-4 justify-center">
          {["Instagram", "LinkedIn", "Discord"].map((platform) => (
            <Badge key={platform} className="px-6 py-2 bg-white/5 hover:bg-primary/10 transition-colors cursor-pointer border-white/10">
              {platform}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
