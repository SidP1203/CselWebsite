import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Well, thanks to SEL, that recipe has been flipped on its head! Our 3 dedicated SEL staff members are rockstars! They've created engaging programs and workshops that teach our young learners the power of empathy, communication, and conflict resolution.",
    name: "Head Principal",
    title: "Princeton Middle School",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The PATHS program has been transformative for our school. Since implementation, we've seen a significant decrease in behavioral incidents and an increase in positive student interactions. The tools provided by CSEL Cincinnati have helped our teachers create more supportive classroom environments.",
    name: "Michael R.",
    title: "Elementary School Principal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "As an educator for over 20 years, I've seen many programs come and go, but the social-emotional learning strategies introduced by CSEL Cincinnati have had lasting impact. Our students are developing crucial life skills that extend beyond the classroom and into their communities.",
    name: "Patricia T.",
    title: "Veteran Teacher",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
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
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-[#ffc629]">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 md:pl-8">
                <blockquote>
                  <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-4 font-['Open Sans']">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <footer>
                    <cite className="font-['Montserrat'] font-semibold text-lg text-primary block">
                      {testimonials[currentIndex].name}, {testimonials[currentIndex].title}
                    </cite>
                  </footer>
                </blockquote>
              </div>
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
