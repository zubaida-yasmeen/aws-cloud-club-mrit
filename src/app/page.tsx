import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Users, Zap, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/Cards";
import { getEvents } from "@/lib/store";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default async function Home() {
  const events = await getEvents();
  const featuredEvents = events.slice(0, 3);
  const heroImage = PlaceHolderImages.find(i => i.id === 'hero-bg')?.imageUrl || '';

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="AWS Hero"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-sm border border-white/10 text-primary mb-6 animate-fade-in-up">
            <Zap className="h-4 w-4 mr-2" />
            Empowering Future Cloud Architects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up [animation-delay:200ms]">
            AWS Cloud Club <br />
            <span className="text-primary">MRIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up [animation-delay:400ms]">
            Learn Cloud • Build Projects • Grow Together
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 h-12 px-8">
              <Link href="/join">Join Club</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white/20 hover:bg-white/5">
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
          {[
            { label: "Members", value: "250+", icon: Users },
            { label: "Workshops", value: "15+", icon: Code },
            { label: "Projects", value: "10+", icon: Zap },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container px-4">
        <SectionHeader 
          title="What We Do" 
          subtitle="We bridge the gap between academic learning and industry demands through hands-on cloud experience."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Learn",
              desc: "Deep dive into AWS services like EC2, S3, Lambda, and more through structured learning paths.",
              icon: Cloud
            },
            {
              title: "Build",
              desc: "Participate in hackathons and group projects to build real-world serverless and cloud-native apps.",
              icon: Code
            },
            {
              title: "Grow",
              desc: "Network with cloud experts, attend webinars, and prepare for industry-recognized AWS certifications.",
              icon: Zap
            }
          ].map((item, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="container px-4">
        <div className="flex items-center justify-between mb-12">
          <SectionHeader title="Featured Events" />
          <Button variant="link" asChild className="text-primary hover:text-primary/80 p-0 hidden sm:flex">
            <Link href="/events">View all events <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* AI Tool CTA */}
      <section className="container px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary/20 to-primary/20 border border-white/10 p-10 md:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Confused where to start?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Try our AI Cloud Project Generator to find a project idea tailored to your interests and chosen AWS services.
            </p>
            <Button asChild size="lg" className="bg-white text-background hover:bg-white/90">
              <Link href="/ai-generator">Launch AI Generator</Link>
            </Button>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 hidden md:block">
            <Zap className="w-full h-full text-white" />
          </div>
        </div>
      </section>
    </div>
  );
}
