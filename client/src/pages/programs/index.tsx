import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, School, Heart, Brain, BookOpen, Workflow } from "lucide-react";

interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
  keyFeatures: string[];
  link: string;
}

const programs: Program[] = [
  {
    title: "Social-Emotional Learning in Schools",
    description: "Our flagship program works directly with schools to integrate SEL into their curriculum and classroom practices.",
    icon: <School className="w-12 h-12 text-primary" />,
    keyFeatures: [
      "Professional development for teachers and staff",
      "Curriculum integration support",
      "Classroom implementation strategies",
      "Student assessment tools",
      "Parent engagement workshops"
    ],
    link: "/programs/school"
  },
  {
    title: "Community SEL Development",
    description: "Extending beyond the classroom, this program brings SEL to community centers, after-school programs, and youth organizations.",
    icon: <Users className="w-12 h-12 text-primary" />,
    keyFeatures: [
      "Youth development program integration",
      "Staff training for community organizations",
      "SEL toolkit for diverse settings",
      "Program evaluation services",
      "Community partnership building"
    ],
    link: "/programs/community"
  },
  {
    title: "Emotional Well-being Support",
    description: "Supporting mental health through social-emotional learning techniques and practices.",
    icon: <Heart className="w-12 h-12 text-primary" />,
    keyFeatures: [
      "Stress management techniques",
      "Emotional regulation skills",
      "Healthy relationship development",
      "Self-care practices",
      "Crisis response strategies"
    ],
    link: "/programs/wellbeing"
  },
  {
    title: "Educational Neuroscience Applications",
    description: "Utilizing the latest research in neuroscience to enhance educational practices and social-emotional development.",
    icon: <Brain className="w-12 h-12 text-primary" />,
    keyFeatures: [
      "Brain-based learning strategies",
      "Trauma-informed practices",
      "Executive function development",
      "Mindfulness techniques",
      "Cognitive regulation support"
    ],
    link: "/programs/neuroscience"
  },
  {
    title: "SEL Educator Resources",
    description: "Comprehensive resources for educators to implement effective SEL programs in their schools and classrooms.",
    icon: <BookOpen className="w-12 h-12 text-primary" />,
    keyFeatures: [
      "Curriculum guides and lesson plans",
      "Assessment tools and rubrics",
      "Video demonstrations and case studies",
      "Implementation frameworks",
      "Research briefs and best practices"
    ],
    link: "/programs/resources"
  },
  {
    title: "SEL Professional Learning Communities",
    description: "Ongoing professional development through collaborative learning communities focused on SEL implementation.",
    icon: <Workflow className="w-12 h-12 text-primary" />,
    keyFeatures: [
      "Regular collaborative meetings",
      "Peer coaching and mentoring",
      "Shared problem-solving",
      "Best practice exchanges",
      "Continuous improvement processes"
    ],
    link: "/programs/learning-communities"
  }
];

export default function ProgramsPage() {
  return (
    <>
      <Helmet>
        <title>Our Programs | CSEL Cincinnati</title>
        <meta name="description" content="Explore CSEL Cincinnati's programs that strengthen social-emotional learning in schools and communities." />
      </Helmet>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">Our Programs</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto font-['Open Sans'] leading-relaxed">
              CSEL Cincinnati offers comprehensive programs to develop social-emotional learning skills in schools and communities, helping build a foundation for success in academics, relationships, and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
                <div className="p-8">
                  <div className="mb-4 bg-red-50 w-20 h-20 rounded-full flex items-center justify-center">
                    {program.icon}
                  </div>
                  <h3 className="font-['Montserrat'] font-bold text-2xl mb-4">{program.title}</h3>
                  <p className="font-['Open Sans'] mb-6 text-gray-600">{program.description}</p>
                  
                  <h4 className="font-['Montserrat'] font-semibold text-lg mb-3">Key Features:</h4>
                  <ul className="mb-8 font-['Open Sans'] text-gray-600">
                    {program.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="mb-2 flex items-start">
                        <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    asChild
                    className="w-full bg-primary text-white font-['Montserrat'] font-semibold py-3 rounded hover:bg-red-700 transition-all"
                  >
                    <a href={`#${program.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="font-['Montserrat'] font-bold text-3xl mb-6">Need a Customized Program?</h2>
            <p className="text-lg max-w-2xl mx-auto font-['Open Sans'] mb-8">
              We work with schools and organizations to develop tailored SEL programs that meet their specific needs and goals.
            </p>
            <Link href="/#contact">
              <Button className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded hover:bg-red-700 transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}