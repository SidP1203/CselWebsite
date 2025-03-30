import { useRef, useEffect, useState } from 'react';

interface ImpactStat {
  value: string;
  label: string;
}

const impactStats: ImpactStat[] = [
  { value: "11%", label: "Increase in Academic Performance" },
  { value: "10%", label: "Less Emotional Distress" },
  { value: "9%", label: "Better Attitudes About Self & Others" },
  { value: "23%", label: "Reduction in Problem Behaviors" },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-16 bg-[#0055a4] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Our Impact</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-['Open Sans']">
            According to a 2013 review of research by CASEL (Collaborative for Academic, Social, and Emotional Learning), Social-Emotional Learning programs show these positive outcomes:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 bg-white bg-opacity-10 rounded-lg transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-5xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">{stat.value}</div>
              <div className="text-xl font-['Montserrat']">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
