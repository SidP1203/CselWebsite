import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Our Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 font-['Open Sans']">
            At CSEL Cincinnati, we believe in creating opportunities for every person in our community to thrive. 
            We focus on the building blocks for a good life: education, stability, and leadership development to create
            lasting change that prevents problems from happening in the first place.
          </p>
          <Link href="#about">
            <a className="inline-flex items-center text-primary font-['Montserrat'] font-semibold hover:text-[#0055a4] transition-all">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
