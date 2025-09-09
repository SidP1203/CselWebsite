import { Helmet } from "react-helmet";
import { 
  Users, 
  History, 
  Target, 
  Award,
  Heart
} from "lucide-react";
import swapnaPhoto from "@assets/swapna-pudipeddi.jpg";

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What is SEL?</h1>
            <p className="text-xl text-gray-700 mb-8">
              SEL is a set of principles and practices that promote self-awareness, self-management, social awareness, relationship skills and responsible decision-making. SEL skills are key to establishing positive relationships, understanding and managing emotions, and thriving in various social situations. Advantages from SEL programs are improved academic performance, better mental health and more positive social interactions.
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
              <p>
                Our programs haave filled a crucial mental health need in Greater Cincinnati, teaching not only social-emotional skills but also communication, cooperation, affirmation of self and others, peaceful conflict resolution, peer mediation, and appreciation of differences.  These were important elements of our predecessor organizations, the Center for Peace Education (1979-2009) and Bridges for a Just Community (2009-2013).
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

      {/* Mission and Vision Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Our mission is to create school and community cultures that are supportive, respectful and nonviolent, by using interactive and engaging experiences with youth and adults to build social-emotional and conflict resolution skills.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every child in our community will develop the social-emotional skills and receive the adult support essential for leading a safe, happy and productive life.
            </p>
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
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max px-4">
              <div className="flex-shrink-0 text-center w-80">
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
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                  <div className="flex h-full items-center justify-center">
                    <Users className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Gregory J. Greiwe</h3>
                <p className="text-primary font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  Greg brings over 30 years of experience in the educational software industry with expertise in Organizational Leadership, Professional Development, Customer Success, Project Management, and Curriculum and Instruction. He holds a B.A. in Elementary/Special Education from St. Leo University and an M.Ed. in Educational Administration and Supervision from Xavier University.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={swapnaPhoto} 
                    alt="Swapna Pudipeddi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Swapna Pudipeddi</h3>
                <p className="text-primary font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  Swapna holds degrees in Economics & Literature from Sophia College, and Law from Government Law College, Mumbai. She built her expertise as an attorney specializing in Corporate and Labor law and is dedicated to promoting mental health among children through meaningful community action.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                  <div className="flex h-full items-center justify-center">
                    <Users className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Jennifer Rodriguez</h3>
                <p className="text-primary font-medium mb-3">Secretary</p>
                <p className="text-gray-700">
                  Jennifer is a licensed clinical social worker with expertise in trauma-informed care and youth development programs.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                  <div className="flex h-full items-center justify-center">
                    <Users className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">David Chen</h3>
                <p className="text-primary font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  David is a retired principal with 30 years of experience in Cincinnati Public Schools and a passion for student well-being.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                  <div className="flex h-full items-center justify-center">
                    <Users className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Amanda Foster</h3>
                <p className="text-primary font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  Amanda is a parent advocate and community organizer who specializes in family engagement and parent education programs.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="bg-gray-200 h-64 w-64 rounded-full mx-auto mb-6">
                  <div className="flex h-full items-center justify-center">
                    <Users className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Rev. Marcus Johnson</h3>
                <p className="text-primary font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  Rev. Johnson brings community outreach experience and serves as our liaison to faith-based organizations in Cincinnati.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
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
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              Scroll horizontally to see all board members →
            </p>
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
