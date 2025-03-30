import { Link } from "wouter";
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Our Mission</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-4 font-['Open Sans']">
            The Center for Social-Emotional Learning (CSEL) was founded in June 2014 by a group of concerned educators and other professionals wanting to fill a crucial mental health need in the school communities of the Greater Cincinnati area.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4 font-['Open Sans']">
            With many children not knowing how to express their emotions in positive ways, effectively communicate, and manage their interpersonal conflicts, our team of dedicated professionals works to teach those skills in order to help our local students achieve individual and communal success.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 font-['Open Sans']">
            Students involved with the CSEL programming are taught the language needed to express their feelings and the communication and cooperation skills necessary to solve problems together. They are given opportunities to develop solutions to the conflicts and problems in their lives.
          </p>
          <Link href="/about">
            <button className="inline-flex items-center text-primary font-['Montserrat'] font-semibold hover:text-[#0055a4] transition-all border-none bg-transparent p-0 cursor-pointer">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Montserrat']">Safe Environment</h3>
            <p className="text-gray-600 font-['Open Sans']">
              By engaging in constructive problem solving methods in a safe environment, students are better prepared to effectively manage conflicts in their daily lives before they escalate.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Montserrat']">Interactive Learning</h3>
            <p className="text-gray-600 font-['Open Sans']">
              The experienced and compassionate CSEL facilitators use Interactive and Engaging Experiences in school classrooms to assist youth in building vital personal skills.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-['Montserrat']">Respectful Communities</h3>
            <p className="text-gray-600 font-['Open Sans']">
              With understanding, our students become capable of working together to create a caring, respectful, and productive school environment that supports success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
