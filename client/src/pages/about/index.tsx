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
              The Center for Social-Emotional Learning (CSEL) was founded to fill a crucial mental health need in the school communities of the Greater Cincinnati area. We are dedicated to teaching children how to express their emotions in positive ways, effectively communicate, and manage their interpersonal conflicts.
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
                CSEL was founded in June 2014 by a group of concerned educators and other professionals wanting to fill a crucial mental health need in the school communities of the Greater Cincinnati area.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Many times we find the children we serve lack self-confidence, self-management, and relationship skills. The experienced and compassionate CSEL facilitators use Interactive and Engaging Experiences in school classrooms to assist youth in building these vital personal skills.
              </p>
              <p className="text-lg text-gray-700">
                It is our deepest hope and major goal for our students to take these skills from the classroom to their future work life, marriages, parenting, and community at large. With this comprehensive training, we are enhancing the entire lives of our students, giving them the opportunity to be a positive change in the world.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <History className="h-10 w-10 text-primary mr-4" />
                <h3 className="text-xl font-semibold text-gray-900">Our History</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-primary mr-2">1979:</span>
                  <span className="text-gray-700">Center for Peace Education (CPE) co-founded</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2009:</span>
                  <span className="text-gray-700">CPE absorbed into another local non-profit</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2013:</span>
                  <span className="text-gray-700">CPE's new home closed, creating a need in the community</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">2014:</span>
                  <span className="text-gray-700">Center for Social-Emotional Learning (CSEL) founded</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2">Today:</span>
                  <span className="text-gray-700">Continuing to serve school communities in Greater Cincinnati</span>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Awareness</h3>
              <p className="text-gray-700">
                We help students recognize their emotions, thoughts, and values and understand how these influence behavior and decisions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Awareness</h3>
              <p className="text-gray-700">
                We emphasize the importance of understanding and respecting each other's differences and taking another person's perspective.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Relationship Skills</h3>
              <p className="text-gray-700">
                We develop students' abilities to establish and maintain healthy relationships and resolve conflicts constructively.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Louise Gomer Bangel</h3>
              <p className="text-primary font-medium mb-3">Founder & Board Chairperson</p>
              <p className="text-gray-700">
                Louise began her career in education in 1967 and co-founded the Center for Peace Education (CPE) in 1979. In 2014, she founded CSEL to continue serving the needs of local schools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">CSEL Board Members</h3>
              <p className="text-primary font-medium mb-3">Dedicated Leadership</p>
              <p className="text-gray-700">
                Our board consists of dedicated, compassionate, and creative people who help grow our programs through volunteering and innovative leadership.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                <div className="flex h-full items-center justify-center">
                  <Users className="h-24 w-24 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">CSEL Facilitators</h3>
              <p className="text-primary font-medium mb-3">Classroom Instructors</p>
              <p className="text-gray-700">
                Our experienced and compassionate facilitators work directly with students in classrooms, creating engaging learning experiences that build vital social-emotional skills.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              We are currently looking for a few dedicated, compassionate, energetic, and creative people to join our Board! If you are interested in helping us grow our programs through volunteering and innovative leadership, please contact us.
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