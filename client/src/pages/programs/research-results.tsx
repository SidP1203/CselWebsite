import { Helmet } from "react-helmet";
import { FlaskConical, TrendingUp, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ResearchResultsPage() {
  return (
    <>
      <Helmet>
        <title>Research & Results | CSEL Cincinnati</title>
        <meta name="description" content="Evidence-based research and data-driven insights that inform CSEL Cincinnati's conflict resolution and SEL approaches." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <FlaskConical className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">Research & Results</h1>
            <p className="text-xl text-gray-700 font-['Open Sans']">
              Evidence-based research and data-driven insights that inform our conflict resolution and SEL approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* 9-Year Impact */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary to-red-700 text-white rounded-lg p-8 shadow-lg">
              <div className="text-center mb-8">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4 font-['Montserrat']">9-Year Impact Summary</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold mb-2 font-['Montserrat']">85%</div>
                  <p className="text-white/90 font-['Open Sans']">of students indicated they learned things that will be helpful in school, at home and with friends</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold mb-2 font-['Montserrat']">96%</div>
                  <p className="text-white/90 font-['Open Sans']">of school staff confirmed students learned helpful skills</p>
                </div>
              </div>
              
              <p className="text-white/90 mt-6 text-center font-['Open Sans']">
                Over the past nine years
              </p>
            </div>
          </div>

          {/* Staff-Reported Improvements */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900 font-['Montserrat']">School Staff Observations</h2>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 font-['Open Sans']">
                School staff indicated moderate to significant improvement in eight positive characteristics:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Social interaction",
                  "Positive attitudes",
                  "Cooperation with others",
                  "Ability to manage anger",
                  "Problem-solving skills",
                  "Conflict resolution",
                  "Self-awareness",
                  "Relationship building"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-md">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-['Open Sans']">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Results (2 Years) */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Recent Two-Year Results</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">Student Learning Outcomes</h3>
                      <p className="text-gray-700 font-['Open Sans']">
                        <strong>78-100%</strong> of students in 23 SEL classes (10 sixth grade and 13 eighth grade) and <strong>100%</strong> of students in peer mediation training at St. Monica Center (SMC) and Princeton Community Middle School (PCMS) responded positively to six statements about what they learned.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">Staff Observations</h3>
                      <p className="text-gray-700 font-['Open Sans']">
                        <strong>100%</strong> of staff at SMC and PCMS reported that students demonstrated moderate to significant improvement in Peer Interaction and Cooperation as a result of SEL classes and peer mediation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">Suspension Reduction</h3>
                      <p className="text-gray-700 font-['Open Sans'] mb-4">
                        Over the past two years of SEL and Mediation training:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-md text-center">
                          <div className="text-4xl font-bold text-primary mb-2 font-['Montserrat']">21%</div>
                          <p className="text-gray-700 font-['Open Sans']"><strong>St. Monica Center</strong><br/>reduction in suspensions</p>
                        </div>
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-md text-center">
                          <div className="text-4xl font-bold text-primary mb-2 font-['Montserrat']">17%</div>
                          <p className="text-gray-700 font-['Open Sans']"><strong>Princeton Middle School</strong><br/>reduction in suspensions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Award Recognition */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Program Recognition</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                Our peer mediation training program, developed by Robert E. Kelly and his key staff in 1996, has won two Ohio BEST Practices Awards, the Ohio School Conflict Management Award, and the Nestle' Foundation's "Very Best in Teaching" Award for the United States.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">See Our Impact in Action</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-['Open Sans']">
            Want to learn more about how our evidence-based programs can benefit your school or organization?
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
