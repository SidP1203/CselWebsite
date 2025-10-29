import { Helmet } from "react-helmet";
import { 
  Users, 
  History, 
  Target, 
  Award,
  Heart
} from "lucide-react";
import swapnaPhoto from "@assets/swapna-pudipeddi.jpg";
import louisePhoto from "@assets/louise_1_orig_1759186294689.jpg";
import bobPhoto from "@assets/bob_orig_1759186424919.jpg";
import danPhoto from "@assets/unnamed_1761077087140.jpg";
import gregPhoto from "@assets/greggy_1761774686039.jpg";
import joshuaPhoto from "@assets/_dsc0049_6030179222_o - Copy (2)_1761774809306.jpg";
import barbaraPhoto from "@assets/6767676_1761774983026.jpg";

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
                <h3 className="text-3xl font-bold text-gray-900">Our History</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-primary mr-2 text-lg">1979:</span>
                  <span className="text-gray-700 text-lg">Center for Peace Education (CPE) co-founded</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2 text-lg">2009:</span>
                  <span className="text-gray-700 text-lg">CPE absorbed into another local non-profit</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2 text-lg">2013:</span>
                  <span className="text-gray-700 text-lg">CPE's new home closed, creating a need in the community</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2 text-lg">2014:</span>
                  <span className="text-gray-700 text-lg">Center for Social-Emotional Learning (CSEL) founded</span>
                </li>
                <li className="flex">
                  <span className="font-bold text-primary mr-2 text-lg">Today:</span>
                  <span className="text-gray-700 text-lg">Continuing to serve school communities in Greater Cincinnati</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to create school and community cultures that are supportive, respectful and nonviolent, by using interactive and engaging experiences with youth and adults to build social-emotional and conflict resolution skills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Vision</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every child in our community will develop the social-emotional skills and receive the adult support essential for leading a safe, happy and productive life.
              </p>
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
          
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-8 min-w-max px-4">
              <div className="flex-shrink-0 text-center w-80">
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={louisePhoto} 
                    alt="Louise Gomer Bangel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Louise Gomer Bangel</h3>
                <p className="text-primary font-medium mb-3">Founder & Board Chairperson</p>
                <p className="text-gray-700">
                  Louise began her career in education in 1967 and co-founded the Center for Peace Education (CPE) in 1979. In 2014, she founded CSEL to continue serving the needs of local schools.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={danPhoto} 
                    alt="Dan Zavon" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Dan Zavon</h3>
                <p className="text-primary font-medium mb-3">Vice-Chair</p>
                <p className="text-gray-700">
                  Dan had a 22-year career as a paper boy, beginning as a high school senior when he started the first Sunday New York Times home delivery service in Cincinnati, eventually becoming the wholesale distributor of the Times for greater Cincinnati. He majored in Political Science at Boston University and got a law degree at the University of Cincinnati but never practiced law. He has been a political activist in the areas of nuclear safety, gun control, nonsmokers' rights, civil liberties and fair elections (including Ranked Choice Voting and Proportional Representation). He has always been a great believer in peaceful conflict resolution, trying to find win-win solutions, and treating all persons with respect and dignity. He is a book collector and a devoted walker/stair climber for exercise, and was a stay-at-home dad to three (now adult) children. He has been a member of the CSEL board since 2017.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={gregPhoto}
                    alt="Gregory J. Greiwe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Gregory J. Greiwe</h3>
                <p className="text-primary font-medium mb-3">Head of Fundraising</p>
                <p className="text-gray-700">
                  Greg brings over 30 years of experience in the educational software industry with expertise in Organizational Leadership, Professional Development, Customer Success, Project Management, and Curriculum and Instruction. He holds a B.A. in Elementary/Special Education from St. Leo University and an M.Ed. in Educational Administration and Supervision from Xavier University.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={bobPhoto} 
                    alt="Robert E. Kelly" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Robert E. Kelly</h3>
                <p className="text-primary font-medium mb-3">Director</p>
                <p className="text-gray-700">
                  Bob dedicated his career to education, serving as a principal from 1974 to 2011 across Catholic and public schools. In 1976, he founded St. Peter's Montessori, still thriving today. Committed to fostering safe, supportive learning environments, Bob created the award-winning PAVE Peer Mediation Team, recognized with state and national honors for conflict resolution and nonviolent community building. At New Burlington Elementary, a high-poverty school, his leadership and implementation of best-practice programs raised the school from "Continuous Improvement" to an Excellent Rating on Ohio's Report Card.
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
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={barbaraPhoto}
                    alt="Barbara Gray"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Barbara Gray</h3>
                <p className="text-primary font-medium mb-3">Secretary</p>
                <p className="text-gray-700">
                  After graduating from Miami University, I worked in the international division of a multinational corporation in New York City. The city's diverse cultures sparked my interest in social work, leading me back to Cincinnati, where I served as a Family Services caseworker. After raising two children, I became a social worker at a Montessori preschool, later joining the administrative staff of a private Montessori school for thirty years. I currently serve as Secretary on the Center for Social-Emotional Learning Board and have volunteered on boards supporting afterschool programs and as an interviewer for Around Cincinnati on NPR. I also participate in a poetry writing class and several book clubs.
                </p>
              </div>
              
              <div className="flex-shrink-0 text-center w-80">
                <div className="h-64 w-64 rounded-full mx-auto mb-6 overflow-hidden">
                  <img 
                    src={joshuaPhoto}
                    alt="Joshua Spears"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Joshua Spears</h3>
                <p className="text-primary font-medium mb-3">Board Member</p>
                <p className="text-gray-700">
                  Joshua Spears is a nationally published author, professional speaker, and former National Director of Social and Emotional Learning at Imagine Learning, one of the largest education technology companies in the United States. Over the past several years, he has delivered more than 2,000 presentations to school districts nationwide, equipping educators and leaders with practical strategies to integrate SEL into classrooms and communities. Joshua's work has been shaped by his own journey of overcoming adversity, and he is passionate about helping students, teachers, and families build resilience, connection, and hope through the power of social and emotional learning.
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
