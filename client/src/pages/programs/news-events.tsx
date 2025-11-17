import { Helmet } from "react-helmet";
import { Calendar, Users, DollarSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NewsEventsPage() {
  return (
    <>
      <Helmet>
        <title>Current News & Events | CSEL Cincinnati</title>
        <meta name="description" content="Stay updated on CSEL Cincinnati's latest workshops, trainings, community events, and program developments." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Calendar className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">Current News & Events</h1>
            <p className="text-xl text-gray-700 font-['Open Sans']">
              Stay updated on CSEL Cincinnati's latest workshops, trainings, community events, and program developments.
            </p>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* CSEL Staff Development */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-primary font-semibold mb-2 font-['Montserrat']">AUGUST 2025</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">CSEL Staff Development</h2>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                CSEL facilitators participate in at least one staff development session each year, in addition to staff development in schools where they facilitate. Staff development includes CASEL Competencies, evidence-based practices, trauma-informed practices, sharing of successful lessons, and the integration of art, music, movement, and mindfulness. The Executive Director and CSEL staff also meet to review student and school staff survey responses in order to adjust instructional strategies and lessons.
              </p>
            </div>
          </div>

          {/* Greater Cincinnati Foundation Grant */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-primary">
              <div className="flex items-start gap-4 mb-4">
                <DollarSign className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-primary font-semibold mb-2 font-['Montserrat']">2025</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">Greater Cincinnati Foundation Educational Success Grant</h2>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary to-red-700 text-white rounded-lg p-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 font-['Montserrat']">$60,000</div>
                  <p className="text-white/90 font-['Open Sans']">Grant Award</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-['Open Sans']">
                CSEL received a $60,000 grant that responds to St. Monica's Center (SMC) and Princeton Community Middle School's (PCMS) goals of increasing conflict-resolution skills and reducing disciplinary actions, especially out-of-school/program suspension that result in a students' removal from class/activities.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                In addition, SMC and PCMS desire further development of the social-emotional learning skills of communication, cooperation, bias awareness/appreciation of differences, and conflict resolution, including peer mediation.
              </p>
            </div>
          </div>

          {/* International SEL Exchange */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Globe className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-primary font-semibold mb-2 font-['Montserrat']">ANNUAL EVENT</p>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-['Montserrat']">International SEL Exchange – Chicago, Illinois</h2>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-md mb-6">
                <div className="grid md:grid-cols-3 gap-6 text-center mb-4">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2 font-['Montserrat']">100+</div>
                    <p className="text-gray-600 font-['Open Sans']">Sessions</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2 font-['Montserrat']">1,800+</div>
                    <p className="text-gray-600 font-['Open Sans']">Participants</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2 font-['Montserrat']">30</div>
                    <p className="text-gray-600 font-['Open Sans']">Countries</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4 font-['Open Sans']">
                The annual exchange involved over 100 sessions involving Social-Emotional Learning research and practices, in addition to organizations who are focused on preventing conflict and violence. Over 1,800 participants from 49 states and 30 countries attended the three-day conference in November 2024 at McCormick Place in Chicago.
              </p>
              
              <div className="bg-primary/10 p-4 rounded-md">
                <p className="text-gray-700 font-['Open Sans']">
                  <strong>2025 Update:</strong> The 2025 Exchange will be held remotely and spread over a longer period in order to encourage more participation and eliminate the cost of travel, as occurred in 2021 and 2022.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Stay Connected</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-['Open Sans']">
            Want to learn more about upcoming events or get involved with CSEL Cincinnati?
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
