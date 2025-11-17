import { Helmet } from "react-helmet";
import { BookOpen, Link as LinkIcon, Video, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ResourcesPage() {
  return (
    <>
      <Helmet>
        <title>Resources | CSEL Cincinnati</title>
        <meta name="description" content="Tools, guides, and materials to support effective implementation of conflict resolution and SEL programs." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">Resources</h1>
            <p className="text-xl text-gray-700 font-['Open Sans']">
              Tools, guides, and materials to support effective implementation of conflict resolution and SEL programs.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Links Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <LinkIcon className="w-10 h-10 text-primary" />
              <h2 className="text-3xl font-bold text-gray-900 font-['Montserrat']">Helpful Links</h2>
            </div>
            
            <div className="grid gap-4">
              <a 
                href="https://sel4oh.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat'] group-hover:text-primary">
                    Social and Emotional Learning, Ohio
                  </h3>
                  <p className="text-gray-600 font-['Open Sans']">sel4oh.org</p>
                </div>
                <LinkIcon className="w-6 h-6 text-gray-400 group-hover:text-primary" />
              </a>

              <a 
                href="https://sel4us.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat'] group-hover:text-primary">
                    Social and Emotional Learning, United States
                  </h3>
                  <p className="text-gray-600 font-['Open Sans']">sel4us.org</p>
                </div>
                <LinkIcon className="w-6 h-6 text-gray-400 group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Videos Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-10 h-10 text-primary" />
              <h2 className="text-3xl font-bold text-gray-900 font-['Montserrat']">Educational Videos</h2>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">
                      Why Building Emotional Intelligence in Classrooms Might Be the Key to Better Grades
                    </h3>
                    <p className="text-gray-600 font-['Open Sans']">
                      Explore how emotional intelligence impacts academic performance
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">
                      Social and Emotional Learning: A Schoolwide Approach
                    </h3>
                    <p className="text-gray-600 font-['Open Sans']">
                      Learn about implementing SEL across an entire school community
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">
                      5 Easy Ways To Integrate Social-Emotional Learning (SEL) Into Academic Content Lessons
                    </h3>
                    <p className="text-gray-600 font-['Open Sans']">
                      Practical strategies for weaving SEL into everyday teaching
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">
                      Cooperation | Social and Emotional Learning Relationship Skills | Interactive Video
                    </h3>
                    <p className="text-gray-600 font-['Open Sans']">
                      Interactive video focusing on cooperation and relationship skills
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Video className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-['Montserrat']">
                      3 Ways to Resolve a Conflict | Dorothy Walker | TED Institute
                    </h3>
                    <p className="text-gray-600 font-['Open Sans']">
                      TED talk on practical conflict resolution strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-10 h-10 text-primary" />
              <h2 className="text-3xl font-bold text-gray-900 font-['Montserrat']">Articles & Publications</h2>
            </div>
            
            <div className="bg-primary/5 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-lg text-gray-700 font-['Open Sans']">
                Featured articles and publications coming soon. Check back for research papers, case studies, and best practices in social-emotional learning and conflict resolution.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Need Additional Resources?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-['Open Sans']">
            Have questions about implementing SEL in your school or organization? We're here to help.
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
