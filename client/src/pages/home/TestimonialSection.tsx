import { useState } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We are so grateful for Mr. Kelly and his team from the Center of Social-Emotional Learning for partnering with us to teach the very important skill of conflict resolution to our young people. Our young people face many challenges, but we are in the trenches with them, attempting, to the best of our ability, to provide them the tools they need to be successful. The Bible says, \"Blessed (happy) are the peacemakers...\" (Matt. 5:9)! Happiness is the blessing that comes when we find peaceful solutions to our conflicts.",
    name: "Michael Pearl",
    title: "Director, St. Monica Center, June 2024"
  },
  {
    quote: "This year I witnessed how powerful it is to have community support for a fledgling program to change the culture and practice of a large public school around conflict and discipline. Then, in January, Rev. Mike Pearl and his team at St. Monica's Recreation Center personally invited several middle school students to attend a Saturday workshop to practice skills the school had not yet called on. All of these young people come from a small Black community and must find their way in a challenging world. I am so grateful for this program.",
    name: "Ariel Miller",
    title: "ACTS Group Leader"
  },
  {
    quote: "It was fun to participate with the kids in role playing exercises as we all learned how to be peacemakers. There were serious moments mixed with occasional frowns and occasional giggles. The students recorded dozens of comments on what they learned, including how to solve a conflict with mediation and that they are valuable.",
    name: "ACTS Church Leader",
    title: "ACTS Episcopal Churches, Lincoln Heights"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 bg-[#0055a4]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">What People Are Saying</h2>
            <div className="w-20 h-1 bg-[#ffc629] mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-primary opacity-30 mx-auto" />
              </div>
              <blockquote className="mb-8">
                <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed font-['Open Sans']">
                  "{testimonials[currentIndex].quote}"
                </p>
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <span className="font-['Montserrat'] font-bold text-lg text-primary block">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="font-['Open Sans'] text-gray-500 text-sm">
                    {testimonials[currentIndex].title}
                  </span>
                </cite>
              </footer>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-white/80 font-['Open Sans'] text-sm">
              See also: <a href="/programs#testimonials" className="text-[#ffc629] underline hover:text-yellow-300 transition-colors">David Mackzum's letter from Princeton Community Middle School</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
