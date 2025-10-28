import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { GraduationCap, Users, FlaskConical, Star, BookOpen, Calendar } from "lucide-react";
import heroImage from "@assets/stock_images/students_helping_eac_4fe7788a.jpg";
import { useToast } from "@/hooks/use-toast";

interface FocusArea {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const focusAreas: FocusArea[] = [
  {
    title: "School Programs",
    description: "Comprehensive peer-led conflict resolution and social-emotional learning programs designed specifically for school environments.",
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    link: "/programs/school"
  },
  {
    title: "Community Programs",
    description: "Bringing conflict resolution and SEL skills beyond the classroom into community settings and youth organizations.",
    icon: <Users className="w-12 h-12 text-primary" />,
    link: "/programs/community"
  },
  {
    title: "Research",
    description: "Evidence-based research and data-driven insights that inform our conflict resolution and SEL approaches.",
    icon: <FlaskConical className="w-12 h-12 text-primary" />,
    link: "/programs/research"
  },
  {
    title: "Success Stories",
    description: "Real stories from students, educators, and communities transformed by peer-led conflict resolution programs.",
    icon: <Star className="w-12 h-12 text-primary" />,
    link: "/programs/success-stories"
  },
  {
    title: "Resources",
    description: "Tools, guides, and materials to support effective implementation of conflict resolution and SEL programs.",
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    link: "/programs/resources"
  },
  {
    title: "Current News & Events",
    description: "Stay updated on CSEL Cincinnati's latest workshops, trainings, community events, and program developments.",
    icon: <Calendar className="w-12 h-12 text-primary" />,
    link: "/programs/news-events"
  }
];

export default function ProgramsPage() {
  const { toast } = useToast();

  const handleLearnMoreClick = (areaTitle: string) => {
    toast({
      title: "Work in Progress",
      description: `The ${areaTitle} page is currently being developed. Please check back soon!`,
      variant: "default",
    });
  };

  return (
    <>
      <Helmet>
        <title>Focus Areas | CSEL Cincinnati</title>
        <meta name="description" content="Explore CSEL Cincinnati's focus areas in peer-led conflict resolution and social-emotional learning programs." />
      </Helmet>

      {/* Hero Section with Image Backdrop */}
      <section className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{backgroundImage: `url(${heroImage})`}}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-10"></div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-white font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">Focus Areas</h1>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto font-['Open Sans'] leading-relaxed">
              CSEL Cincinnati empowers students through peer-led conflict resolution and social-emotional learning. Explore our focus areas to learn how we create safer, more supportive school communities.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Cards Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105"
                data-testid={`card-focus-area-${index}`}
              >
                <div className="p-8">
                  <div className="mb-4 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center">
                    {area.icon}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-2xl mb-4">{area.title}</h3>
                  <p className="font-['Open Sans'] mb-8 text-gray-600 leading-relaxed">{area.description}</p>
                  
                  <Button
                    onClick={() => handleLearnMoreClick(area.title)}
                    className="w-full bg-primary text-white font-['Montserrat'] font-semibold py-3 rounded hover:bg-red-700 transition-all"
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl mb-6">Ready to Get Started?</h2>
            <p className="text-lg max-w-2xl mx-auto font-['Open Sans'] mb-8">
              Contact us to learn how CSEL Cincinnati can bring peer-led conflict resolution and social-emotional learning to your school or organization.
            </p>
            <Link href="/#contact">
              <Button 
                className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded hover:bg-red-700 transition-all"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
