import { SectionHeader } from "@/components/SectionHeader";
import { Cloud, Target, Eye, Star, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container px-4 py-20 flex flex-col gap-24">
      <section>
        <SectionHeader title="About AWS Cloud Club" subtitle="AWS Cloud Clubs are student-led organizations that provide a community for students to learn about cloud computing and develop their skills on AWS." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              The AWS Cloud Club at Mysuru Royal Institute of Technology (MRIT) is a vibrant community of students passionate about technology, innovation, and the future of cloud computing.
            </p>
            <p>
              As an official AWS student community, we have direct access to resources, mentorship, and opportunities provided by Amazon Web Services. Our goal is to make MRIT a hub for cloud excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Our Mission</h3>
              <p className="text-sm">To bridge the gap between cloud theory and industry practice.</p>
            </div>
            <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
              <Eye className="h-10 w-10 text-secondary mb-4" />
              <h3 className="font-bold mb-2">Our Vision</h3>
              <p className="text-sm">Becoming the premier student cloud community in Karnataka.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader title="Why Join Us?" centered />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Hands-on AWS", desc: "Get practical experience with real AWS accounts and services.", icon: Cloud },
            { title: "Certification Prep", desc: "Study groups and resources for AWS Certified Cloud Practitioner & Developer.", icon: Star },
            { title: "Global Network", desc: "Connect with AWS Cloud Club members and mentors worldwide.", icon: Target },
            { title: "Project Portfolios", desc: "Build industry-ready projects to showcase on your resume.", icon: Eye }
          ].map((benefit, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:neon-glow-orange transition-all">
              <benefit.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/5 rounded-3xl p-10 md:p-16 border border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Student Benefits at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Exclusive AWS workshops",
              "Access to AWS Cloud Quest",
              "Speaker sessions from AWS Experts",
              "Free or discounted event tickets",
              "Leadership opportunities",
              "Collaborative environment",
              "Internship guidance",
              "Hands-on demo projects"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
