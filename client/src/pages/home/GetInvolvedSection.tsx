import { Link } from "wouter";
import { HeartHandshake, Users, Handshake } from "lucide-react";

interface InvolvementOption {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonColor: string;
  buttonHoverColor: string;
}

const involvementOptions: InvolvementOption[] = [
  {
    icon: <HeartHandshake className="text-3xl text-primary" />,
    title: "Donate",
    description: "Your financial gift helps fund vital programs that create lasting change in our community.",
    buttonText: "Give Today",
    buttonLink: "/donate",
    buttonColor: "bg-primary",
    buttonHoverColor: "hover:bg-red-700"
  },
  {
    icon: <Users className="text-3xl text-primary" />,
    title: "Volunteer",
    description: "Share your time and talents to make a difference. Individual and group opportunities available.",
    buttonText: "Find Opportunities",
    buttonLink: "#volunteer",
    buttonColor: "bg-[#0055a4]",
    buttonHoverColor: "hover:bg-blue-800"
  },
  {
    icon: <Handshake className="text-3xl text-primary" />,
    title: "Partner With Us",
    description: "Corporate partnerships and sponsorship opportunities that align with your organization's values.",
    buttonText: "Become A Partner",
    buttonLink: "#partner",
    buttonColor: "bg-[#ffc629]",
    buttonHoverColor: "hover:bg-yellow-500"
  }
];

export default function GetInvolvedSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Get Involved</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-['Open Sans']">
            There are many ways you can help strengthen our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {involvementOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center transition-all hover:shadow-lg">
              <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                {option.icon}
              </div>
              <h3 className="font-['Montserrat'] font-bold text-2xl mb-3">{option.title}</h3>
              <p className="text-gray-600 mb-6 font-['Open Sans']">
                {option.description}
              </p>
              <Link href={option.buttonLink} className={`${option.buttonColor} ${option.title === "Partner With Us" ? "text-gray-800" : "text-white"} font-['Montserrat'] font-semibold px-6 py-2 rounded ${option.buttonHoverColor} transition-all inline-block`}>
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
