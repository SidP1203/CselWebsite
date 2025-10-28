import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"}}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
      <div 
        className={`relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-start transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-2xl">
          <h1 className="text-white font-['Montserrat'] font-bold text-4xl md:text-5xl leading-tight mb-4">
            Building a Culture of Peace in Cincinnati
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 font-['Open Sans']">
            Creating sustainable change through education, stability, and community support
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/focus-areas"
              className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md text-lg hover:bg-red-700 transition-all"
              data-testid="button-explore-programs"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </div>
      
      {/* Arrow down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          className="text-white hover:text-yellow-400 transition-all cursor-pointer border-none bg-transparent p-0"
          onClick={(e) => handleScroll(e as any, "about")}
          aria-label="Scroll down to mission section"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
}
