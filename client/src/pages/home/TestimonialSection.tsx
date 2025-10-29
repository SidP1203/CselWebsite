import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Well, thanks to SEL, that recipe has been flipped on its head! Our 3 dedicated SEL staff members are rockstars! They've created engaging programs and workshops that teach our young learners the power of empathy, communication, and conflict resolution.",
    name: "Head Principal",
    title: "Princeton Middle School"
  },
  {
    quote: "A local school, Saint Monica's, has seen a 21% reduction in suspension through mediation training.",
    name: "Students and Staff of Saint Monica",
    title: ""
  },
  {
    quote: "The CSEL Program is the thing that will be helpful at school, home or with friends.",
    name: "Students of Princeton Middle School",
    title: ""
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 bg-[#0055a4]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Success Stories</h2>
            <div className="w-20 h-1 bg-[#ffc629] mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <blockquote>
                <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-6 font-['Open Sans'] text-center">
                  "{testimonials[currentIndex].quote}"
                </p>
                <footer className="text-center">
                  <cite className="font-['Montserrat'] font-semibold text-lg text-primary block">
                    {testimonials[currentIndex].name}{testimonials[currentIndex].title && `, ${testimonials[currentIndex].title}`}
                  </cite>
                </footer>
              </blockquote>
            </div>
            
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-primary font-['Montserrat'] font-semibold">
                {currentIndex + 1} / {testimonials.length}
              </span>
              
              <button
                onClick={() => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
                className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
