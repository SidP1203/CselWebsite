import { Link } from "wouter";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsEvent {
  type: "Event" | "News" | "Blog";
  date: string;
  title: string;
  excerpt: string;
  link: string;
  external?: boolean;
}

const newsEvents: NewsEvent[] = [
  {
    type: "Blog",
    date: "February 2024",
    title: "Partnering with Faith and Community-Based Organizations and a Public Middle School to Promote Peer Mediation and SEL Skills",
    excerpt: "Guest blogger Robert E. Kelly, Director of CSEL, shares how CSEL partnered with Episcopalian churches, St. Monica Community Center, and Princeton Middle School to bring peer mediation and SEL training to Lincoln Heights youth.",
    link: "https://sel4oh.org",
    external: true
  },
  {
    type: "News",
    date: "2025",
    title: "Greater Cincinnati Foundation Educational Success Grant",
    excerpt: "CSEL received a $60,000 grant to support conflict-resolution skills and reduce disciplinary actions at St. Monica's Center and Princeton Community Middle School.",
    link: "/programs#affiliations",
    external: false
  },
  {
    type: "Event",
    date: "November 2024",
    title: "International SEL Exchange — Chicago, Illinois",
    excerpt: "Over 1,800 participants from 49 states and 30 countries attended the three-day conference at McCormick Place. CSEL staff participated in sessions on SEL research and practices.",
    link: "#",
    external: false
  }
];

const badgeColors: Record<string, string> = {
  Event: "bg-primary",
  News: "bg-[#0055a4]",
  Blog: "bg-green-600"
};

export default function NewsEventsSection() {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">News, Events & Resources</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-['Open Sans']">
            Stay connected with the latest happenings at CSEL Cincinnati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.map((item, index) => (
            <article key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg flex flex-col">
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3">
                  <Badge
                    className={`rounded-full ${badgeColors[item.type]} text-white text-xs px-3 py-1`}
                  >
                    {item.type}
                  </Badge>
                  <span className="text-gray-600 text-sm ml-3 font-['Open Sans']">{item.date}</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-600 mb-4 font-['Open Sans'] flex-grow">
                  {item.excerpt}
                </p>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-['Montserrat'] font-semibold hover:text-[#0055a4] transition-all"
                  >
                    Read More <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-primary font-['Montserrat'] font-semibold hover:text-[#0055a4] transition-all"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="font-['Montserrat'] font-bold text-2xl mb-6 text-center">More Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-lg mb-3 text-primary">Helpful Links</h4>
              <ul className="space-y-2 font-['Open Sans']">
                <li>
                  <a href="https://sel4oh.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Social and Emotional Learning, Ohio <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sel4us.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Social and Emotional Learning, United States <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sel4oh.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    SEL4OH Blog — Peer Mediation & Faith Partners <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sel4oh.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    SEL4OH Blog — CSEL's Ongoing Work <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['Montserrat'] font-semibold text-lg mb-3 text-primary">Videos</h4>
              <ul className="space-y-2 font-['Open Sans'] text-sm text-gray-700">
                <li>• Why Building Emotional Intelligence in Classrooms Might Be the Key to Better Grades</li>
                <li>• Social and Emotional Learning: A Schoolwide Approach</li>
                <li>• 5 Easy Ways To Integrate SEL Into Academic Content Lessons</li>
                <li>• 3 ways to resolve a conflict | TED Institute</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
