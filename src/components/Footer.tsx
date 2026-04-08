import Link from "next/link";
import { Linkedin, Mail, Users } from "lucide-react";

export function Footer() {
  const linkedinUrl = "https://www.linkedin.com/company/aws-cloud-club-mrit/";
  const meetupUrl = "https://www.meetup.com/aws-cloud-club-at-mysuru-royal-inst-of-tech/";

  return (
    <footer className="border-t border-white/10 bg-background pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold">AWS Cloud Club – MRIT</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering students at Mysuru Royal Institute of Technology to build the next generation of cloud solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={meetupUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Join our Meetup community"
              >
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <a href="mailto:awscloudclub@mysururoyal.org" className="hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  awscloudclub@mysururoyal.org
                </a>
              </li>
              <li className="text-sm">Mysuru Royal Institute of Technology, Mandya, Karnataka</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AWS Cloud Club – MRIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
