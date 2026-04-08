import { Suspense } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { EventCard } from "@/components/Cards";
import { getEvents } from "@/lib/store";
import { Skeleton } from "@/components/ui/skeleton";
import { Mail, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

async function EventsList() {
  const events = await getEvents();
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

function EventsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="glass-card h-80 rounded-xl overflow-hidden animate-pulse">
          <Skeleton className="h-48 w-full" />
          <div className="p-6 space-y-4">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader 
        title="Events" 
        subtitle="Stay updated with our latest workshops, webinars, and meetups. We host regular sessions to keep the community active."
      />

      <Alert className="mb-12 bg-amber-500/10 border-amber-500/30 text-amber-200 max-w-4xl mx-auto">
        <AlertCircle className="h-4 w-4 !text-amber-500" />
        <AlertTitle className="font-bold">Registration Disclaimer</AlertTitle>
        <AlertDescription>
          Only fill forms shared via official channels. External forms are not the responsibility of the club.
        </AlertDescription>
      </Alert>
      
      <Suspense fallback={<EventsSkeleton />}>
        <EventsList />
      </Suspense>
      
      <div className="mt-20 p-10 bg-secondary/10 rounded-3xl border border-secondary/20 text-center">
        <h3 className="text-2xl font-bold mb-4">Have an idea for an event?</h3>
        <p className="text-muted-foreground mb-6">We're always looking for new topics and speakers. Reach out to us!</p>
        <a href="mailto:awscloudclub@mysururoyal.org" className="text-primary font-medium hover:underline flex items-center justify-center gap-2">
          <Mail className="h-5 w-5" />
          awscloudclub@mysururoyal.org
        </a>
      </div>
    </div>
  );
}