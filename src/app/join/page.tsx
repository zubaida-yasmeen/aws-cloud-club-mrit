"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Cloud, CheckCircle2, Users, Trophy, ExternalLink, Sparkles, Loader2 } from "lucide-react";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters."),
  collegeEmail: z.string().email("Invalid email address.").refine((email) => {
    return email.endsWith(".edu") || email.endsWith("@mysururoyal.org");
  }, "Please use your official college email address (ending in .edu or @mysururoyal.org)."),
  usn: z.string().min(5, "University ID must be at least 5 characters."),
  primaryInterest: z.enum(["Cloud", "AI/ML", "DevOps"], {
    required_error: "Please select a primary area of interest.",
  }),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const db = useFirestore();
  const { toast } = useToast();
  
  const whatsappLink = "https://chat.whatsapp.com/Lgs9RQz58ybDQCpWXOT45i";

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      collegeEmail: "",
      usn: "",
      primaryInterest: undefined,
    },
  });

  async function onSubmit(data: RegistrationFormValues) {
    setIsSubmitting(true);
    try {
      // Saving to 'club_members' collection as requested
      const membersRef = collection(db, "club_members");
      await addDoc(membersRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
      
      setIsSubmitted(true);
      
      // Automatically open the WhatsApp link in a new tab
      window.open(whatsappLink, "_blank");

      toast({
        title: "Welcome to AWS Cloud Club!",
        description: "Your registration was successful. Redirecting to our community...",
      });
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error saving your membership. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        <div className="glass-card p-12 rounded-3xl border-primary/30 max-w-2xl w-full text-center animate-fade-in-up">
          <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 mx-auto">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4">You're In!</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Your membership application for AWS Cloud Club MRIT has been received. Welcome to the cloud community!
          </p>
          <div className="flex flex-col gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 h-14 text-lg font-bold shadow-lg shadow-primary/20">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Join Official WhatsApp Group
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" onClick={() => setIsSubmitted(false)} className="border-white/10 hover:bg-white/5">
              Submit another registration
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeader 
        title="Become a Member" 
        subtitle="Join our community of cloud enthusiasts at MRIT. Capture your spot and start building."
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Section */}
        <div className="lg:col-span-7">
          <Card className="glass-card border-white/10 overflow-hidden shadow-2xl">
            <CardHeader className="bg-primary/5 border-b border-white/10">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Membership Form
              </CardTitle>
              <CardDescription>Fill out your details to join the AWS Cloud Club MRIT.</CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} className="bg-white/5 border-white/10 focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="collegeEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>College Email</FormLabel>
                          <FormControl>
                            <Input placeholder="name@mysururoyal.org" {...field} className="bg-white/5 border-white/10 focus:border-primary/50" />
                          </FormControl>
                          <FormDescription className="text-[10px] opacity-70">
                            Must be a .edu or @mysururoyal.org email.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="usn"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>University ID (USN)</FormLabel>
                          <FormControl>
                            <Input placeholder="4MU..." {...field} className="bg-white/5 border-white/10 focus:border-primary/50" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="primaryInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50">
                              <SelectValue placeholder="Select your technical interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Cloud">Cloud Computing</SelectItem>
                            <SelectItem value="AI/ML">AI & Machine Learning</SelectItem>
                            <SelectItem value="DevOps">DevOps & Automation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 h-12 text-lg font-bold transition-all shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Registering...
                      </>
                    ) : (
                      "Join the Club"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Member Exclusives</h3>
            <div className="space-y-4">
              {[
                { text: "Hands-on AWS cloud credits and labs", icon: Cloud, color: "text-primary" },
                { text: "Collaborative student study groups", icon: Users, color: "text-secondary" },
                { text: "Early access to tech workshops", icon: Trophy, color: "text-amber-500" },
                { text: "Verified participation certificates", icon: CheckCircle2, color: "text-emerald-500" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-primary/30 transition-all group">
                  <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <span className="text-muted-foreground font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h4 className="font-bold flex items-center gap-2 mb-2 text-primary">
              <Users className="h-4 w-4" />
              Community Guidelines
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Membership implies agreement with our professional code of conduct. We foster an inclusive, secure, and supportive learning environment for all MRIT students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
