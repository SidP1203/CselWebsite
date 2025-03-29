import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NewsEvent {
  type: "Event" | "News";
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const newsEvents: NewsEvent[] = [
  {
    type: "Event",
    date: "June 12, 2023",
    title: "Annual Community Fundraiser Gala",
    excerpt: "Join us for an evening celebrating community impact with dinner, entertainment, and inspiring stories.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    type: "News",
    date: "May 28, 2023",
    title: "CSEL Launches New Financial Literacy Program",
    excerpt: "A new initiative providing workshops and one-on-one coaching to help families build financial stability.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    type: "Event",
    date: "July 8, 2023",
    title: "Community Volunteer Day",
    excerpt: "Join hundreds of volunteers for a day of service projects across Cincinnati neighborhoods.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export default function NewsEventsSection() {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">News & Events</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-['Open Sans']">
            Stay connected with the latest happenings at CSEL Cincinnati.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsEvents.map((item, index) => (
            <article key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Badge 
                    variant={item.type === "Event" ? "default" : "secondary"}
                    className={`rounded-full ${item.type === "Event" ? "bg-primary" : "bg-[#0055a4]"} text-white text-xs px-3 py-1`}
                  >
                    {item.type}
                  </Badge>
                  <span className="text-gray-600 text-sm ml-3 font-['Open Sans']">{item.date}</span>
                </div>
                <h3 className="font-['Montserrat'] font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 font-['Open Sans']">
                  {item.excerpt}
                </p>
                <Link href="#">
                  <a className="inline-flex items-center text-primary font-['Montserrat'] font-semibold hover:text-[#0055a4] transition-all">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#">
            <a className="border-2 border-primary text-primary font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-primary hover:text-white transition-all inline-block">
              View All News & Events
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
