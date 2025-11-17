import { Helmet } from "react-helmet";
import { GraduationCap, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SchoolProgramsPage() {
  return (
    <>
      <Helmet>
        <title>School Programs | CSEL Cincinnati</title>
        <meta name="description" content="CSEL Cincinnati's comprehensive peer-led conflict resolution and social-emotional learning programs for schools across Greater Cincinnati." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">School Programs</h1>
            <p className="text-xl text-gray-700 font-['Open Sans']">
              Comprehensive peer-led conflict resolution and social-emotional learning programs designed specifically for school environments.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Princeton Community Middle School - Summer Bridge */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">Princeton Community Middle School</h2>
              <p className="text-sm text-gray-600 mb-6 font-['Open Sans']">Princeton Community School District</p>
              
              <h3 className="text-2xl font-semibold text-primary mb-4 font-['Montserrat']">Summer Bridge Program</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                During June of 2024 and 2025, CSEL facilitators conducted SEL classes each year for 100+ 6th graders in the Summer Bridge Program, which prepared students in all subjects for the entry to the middle school.
              </p>
            </div>
          </div>

          {/* Princeton Community Middle School - SEL Classes / Peer Mediation */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">Princeton Community Middle School</h2>
              <p className="text-sm text-gray-600 mb-6 font-['Open Sans']">Princeton Community School District</p>
              
              <h3 className="text-2xl font-semibold text-primary mb-4 font-['Montserrat']">SEL Classes / Peer Mediation Training</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Open Sans']">
                Over the past two years (five semesters), CSEL facilitators conducted SEL classes for thirteen 8th grade and eighteen 6th grade classes, totaling over 700 students. In addition, CSEL trained 96 6th, 7th and 8th graders as peer mediators using a nationally recognized peer mediation program entitled, People Against Violent Environments (PAVE), and received two 'Ohio Best Practices Awards' for its successful work.
              </p>
              
              <div className="flex items-center gap-2 bg-white p-4 rounded-md">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-gray-800 font-medium font-['Open Sans']">
                  Recipient of two Ohio Best Practices Awards for successful peer mediation work
                </p>
              </div>
            </div>
          </div>

          {/* Evanston Academy / Evanston Middle School */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">Evanston Academy / Evanston Middle School</h2>
              <p className="text-sm text-gray-600 mb-6 font-['Open Sans']">Cincinnati Public Schools</p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                CSEL facilitators conducted SEL classes for grades K-6 during the 2023-24 and 2024-25 school years. Evanston Academy then transitioned to a middle school for the 2025-26 school year where CSEL is providing SEL classes for six 7th and 8th grade classes this semester.
              </p>
            </div>
          </div>

          {/* Chase Elementary School */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">Chase Elementary School</h2>
              <p className="text-sm text-gray-600 mb-6 font-['Open Sans']">Cincinnati Public Schools</p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                CSEL facilitators conducted 41 SEL classes over the past two years and is currently working with six K-6 classes.
              </p>
            </div>
          </div>

          {/* South Avondale Middle School */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">South Avondale Middle School</h2>
              <p className="text-sm text-gray-600 mb-6 font-['Open Sans']">Cincinnati Public Schools</p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-['Open Sans']">
                CSEL facilitators conducted 12 SEL classes and nearly 300 students during the Fall Semester, including 4 classes each of 6th, 7th, and 8th grades. We will also be training peer mediation teams for each grade level in January and facilitating ten additional SEL classes in the second semester.
              </p>
              <p className="text-gray-600 italic font-['Open Sans']">
                This is South Avondale's first year as a middle school.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-primary to-red-700 text-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 font-['Montserrat']">Our Impact</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2 font-['Montserrat']">700+</div>
                  <p className="text-white/90 font-['Open Sans']">Students Reached at Princeton</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 font-['Montserrat']">96</div>
                  <p className="text-white/90 font-['Open Sans']">Peer Mediators Trained</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 font-['Montserrat']">5</div>
                  <p className="text-white/90 font-['Open Sans']">School Partners</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Bring CSEL to Your School</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-['Open Sans']">
            Interested in bringing peer-led conflict resolution and SEL programs to your school? Contact us to learn more.
          </p>
          <Link href="/#contact">
            <Button className="bg-primary text-white font-semibold px-8 py-3 rounded hover:bg-red-700 transition-all font-['Montserrat']">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
