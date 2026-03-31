import { SectionHeader } from "@/components/SectionHeader";
import { Rocket, Clock } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <SectionHeader 
        title="Student Projects" 
        subtitle="Innovation happens here. Our members are currently working on exciting cloud-native solutions."
        centered
      />
      
      <div className="glass-card p-12 rounded-3xl border-primary/20 max-w-2xl w-full relative overflow-hidden bg-white/5">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Rocket className="h-32 w-32" />
        </div>
        <Clock className="h-16 w-16 text-primary mx-auto mb-6 opacity-50" />
        <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
        <p className="text-muted-foreground mb-8 text-lg">
          We're just getting started! Our community is brainstorming and building. Check back soon to see the amazing AWS-powered projects our students create.
        </p>
        <div className="flex gap-4 justify-center">
          <div className="h-1.5 w-12 bg-primary/30 rounded-full" />
          <div className="h-1.5 w-12 bg-primary/30 rounded-full" />
          <div className="h-1.5 w-12 bg-primary/30 rounded-full" />
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground italic">
          Are you a member with a project idea? <br />
          Contact the Technical Lead to get your project featured here in the future.
        </p>
      </div>
    </div>
  );
}
