import { Helmet } from "react-helmet";
import { 
  Users, 
  History, 
  Target, 
  Award,
  Heart
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>About Us - CSEL Cincinnati</title>
        <meta name="description" content="Learn about CSEL Cincinnati's mission, history, values, and leadership team." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission & Vision</h1>
            <p className="text-xl text-gray-700 mb-8">
              CSEL Cincinnati is dedicated to strengthening our community through education, support, and advocacy. 
              We believe in creating a more equitable society where everyone has the opportunity to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                CSEL Cincinnati was founded in 2005 by a group of passionate community leaders who recognized the need for a comprehensive approach to addressing social and economic challenges in our region.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What began as a small grassroots initiative has grown into a leading organization that serves thousands of individuals and families each year through our diverse programs and services.
              </p>
              <p className="text-lg text-gray-700">
                Throughout our history, we have remained committed to our founding principles of compassion, respect, and excellence in all that we do.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <History className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Our History</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2005:</span>
                  <span className="text-gray-700">Founded by community leaders</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2010:</span>
                  <span className="text-gray-700">Expanded program offerings to include educational support</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2015:</span>
                  <span className="text-gray-700">Launched advocacy initiative for policy change</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2020:</span>
                  <span className="text-gray-700">Adapted services to meet pandemic challenges</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">Today:</span>
                  <span className="text-gray-700">Serving thousands across Cincinnati region</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These principles guide our work and define how we engage with our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-700">
                We approach our work with empathy and understanding, recognizing the dignity and worth of every individual.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact</h3>
              <p className="text-gray-700">
                We are committed to creating meaningful, measurable change that improves lives and strengthens communities.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in all aspects of our work, constantly seeking to improve our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the dedicated professionals who guide our organization's mission and strategy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Johnson</h3>
              <p className="text-primary font-medium mb-3">Executive Director</p>
              <p className="text-gray-700">
                With over 15 years of nonprofit leadership experience, Sarah guides our strategic direction and oversees all operations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Marcus Williams</h3>
              <p className="text-primary font-medium mb-3">Program Director</p>
              <p className="text-gray-700">
                Marcus leads the development and implementation of our community programs with passion and innovation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Elena Rodriguez</h3>
              <p className="text-primary font-medium mb-3">Director of Development</p>
              <p className="text-gray-700">
                Elena builds strategic partnerships and manages our fundraising initiatives to support our mission growth.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Our team is supported by a dedicated Board of Directors and over 50 staff members and volunteers who work tirelessly to fulfill our mission.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            There are many ways to get involved with CSEL Cincinnati and support our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/donate" className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-all">
              Make a Donation
            </a>
            <a href="/#contact" className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-all">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}