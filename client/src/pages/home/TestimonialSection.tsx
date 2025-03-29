import { useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "CSEL Cincinnati changed my family's life. Through their education program, my children received tutoring support that helped them excel in school. The financial coaching program helped me create a budget, save for emergencies, and eventually purchase our first home. I'm grateful for the support and opportunities they provided.",
    name: "Sarah J.",
    title: "Program Participant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "My experience with CSEL Cincinnati has been transformative. Their workforce development program provided me with the skills and confidence I needed to secure a meaningful career. The mentorship I received continues to guide my professional growth.",
    name: "Marcus T.",
    title: "Career Program Graduate",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "As a volunteer with CSEL Cincinnati for over five years, I've witnessed firsthand the incredible impact they have on our community. The organization is truly dedicated to creating sustainable change and improving lives through their comprehensive approach.",
    name: "Elena R.",
    title: "Long-time Volunteer",
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
            
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
