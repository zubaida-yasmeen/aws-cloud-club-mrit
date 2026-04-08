import { SectionHeader } from "@/components/SectionHeader";
import { Cloud, Target, Eye, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-32">
      {/* Hero Intro */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
          Official AWS Student Community
        </Badge>
        <SectionHeader 
          title="Empowering the Next Generation" 
          subtitle="AWS Cloud Clubs are student-led organizations that provide a community for students to learn about cloud computing and develop their skills on AWS." 
          centered
        />
        
        <div className="mt-8 space-y-6 text-muted-foreground text-lg leading-relaxed text-center">
          <p>
            The AWS Cloud Club at Mysuru Royal Institute of Technology (MRIT) is a vibrant community of students passionate about technology, innovation, and the future of cloud computing.
          </p>
          <p>
            As an official AWS student community, we bridge the gap between theoretical knowledge and practical application, making MRIT a hub for cloud excellence in Karnataka.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="glass-card p-10 lg:p-14 rounded-[2.5rem] flex flex-col items-start text-left transition-all duration-500 hover:border-primary/40 group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            
            <div className="bg-primary/10 p-5 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
              <Target className="h-10 w-10 text-primary" />
            </div>
            
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To bridge the gap between cloud theory and industry practice through hands-on learning, collaborative projects, and direct professional mentorship from AWS experts.
            </p>
            
            <ul className="space-y-4 w-full">
              {['Industry-ready skills', 'Hands-on experience', 'Career mentorship'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="glass-card p-10 lg:p-14 rounded-[2.5rem] flex flex-col items-start text-left transition-all duration-500 hover:border-secondary/40 group relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-all" />
            
            <div className="bg-secondary/10 p-5 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
              <Eye className="h-10 w-10 text-secondary" />
            </div>
            
            <h3 className="text-3xl font-extrabold mb-6 tracking-tight">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Becoming the premier student cloud community in Karnataka, fostering a self-sustaining culture of innovation and technological excellence at MRIT campus.
            </p>

            <ul className="space-y-4 w-full">
              {['Technological Hub', 'Innovation Culture', 'Global Recognition'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                  <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section>
        <SectionHeader title="The AWS Advantage" subtitle="Unlock exclusive benefits designed to accelerate your technical journey." centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Hands-on AWS", desc: "Get practical experience with real AWS accounts and managed services.", icon: Cloud, color: "text-primary" },
            { title: "Certification", desc: "Study groups and resources for AWS Certified Cloud Practitioner.", icon: Star, color: "text-amber-400" },
            { title: "Network", desc: "Connect with AWS Cloud Club members and mentors globally.", icon: Target, color: "text-secondary" },
            { title: "Portfolios", desc: "Build industry-ready projects to showcase to recruiters.", icon: Eye, color: "text-emerald-400" }
          ].map((benefit, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:bg-white/[0.07] transition-all duration-300 border-white/5">
              <div className="bg-white/5 p-4 rounded-2xl mb-6">
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Benefits List */}
      <section className="bg-gradient-to-br from-white/5 to-transparent rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Cloud className="h-64 w-64" />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Student Membership Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              "Exclusive AWS workshops & bootcamps",
              "Access to AWS Cloud Quest credits",
              "Speaker sessions from AWS Senior Engineers",
              "Free tickets to regional AWS Summits",
              "Leadership roles in tech sub-committees",
              "Collaborative environment for final-year projects",
              "Direct internship guidance & CV reviews",
              "Hands-on demo projects for GitHub"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
