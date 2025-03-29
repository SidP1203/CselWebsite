import { ArrowRight, GraduationCap, Home, Heart } from "lucide-react";
import { Link } from "wouter";

interface FocusArea {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const focusAreas: FocusArea[] = [
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Education",
    description: "Supporting early childhood development, school readiness, and increasing graduation rates for a brighter future.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Financial Stability",
    description: "Helping families build savings, secure housing, and gain the financial skills to achieve economic independence.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Health & Wellness",
    description: "Ensuring access to quality healthcare, nutrition programs, and mental health resources for all community members.",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

export default function FocusAreasSection() {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Focus Areas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-['Open Sans']">
            We work in three key areas to create lasting change in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${area.image}')` }}></div>
              <div className="p-6">
                <div className="text-primary text-4xl mb-4">
                  {area.icon}
                </div>
                <h3 className="font-['Montserrat'] font-bold text-2xl mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 font-['Open Sans']">
                  {area.description}
                </p>
                <Link href="#">
                  <a className="inline-flex items-center text-primary font-['Montserrat'] font-semibold hover:text-[#0055a4] transition-all">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#">
            <a className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-red-700 transition-all inline-block">
              View All Programs
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
