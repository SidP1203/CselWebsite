import { Helmet } from "react-helmet";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function SuccessStoriesPage() {
  return (
    <>
      <Helmet>
        <title>Success Stories | CSEL Cincinnati</title>
        <meta name="description" content="Real stories from students, educators, and communities transformed by CSEL Cincinnati's peer-led conflict resolution programs." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Star className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">Success Stories</h1>
            <p className="text-xl text-gray-700 font-['Open Sans']">
              Real stories from students, educators, and communities transformed by peer-led conflict resolution programs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Our Impact on Communities</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                Our CSEL programs have filled a crucial mental health need in Greater Cincinnati, teaching social-emotional skills, including communication, cooperation, affirmation of self and others, appreciation of differences, goal-setting, peaceful conflict resolution, and peer mediation. These were important elements of our predecessor organizations, the Center for Peace Education (1979-2009) and Bridges for a Just Community (2009-2013).
              </p>
            </div>
          </div>

          {/* Award Recognition */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary to-red-700 text-white rounded-lg p-8 shadow-lg text-center">
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 font-['Montserrat']">Award-Winning Program</h3>
              <p className="text-lg text-white/90 font-['Open Sans']">
                Our peer mediation training program, developed by Robert E. Kelly and his key staff in 1996, has won two Ohio BEST Practices Awards, the Ohio School Conflict Management Award, and the Nestle' Foundation's "Very Best in Teaching" Award for the United States.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Testimonial 1 - David Mackzum */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Open Sans'] italic">
                "We are so grateful for Mr. Kelly and his team from the Center of Social-Emotional Learning for partnering with us to teach the very important skill of conflict resolution to our young people. Our young people face many challenges, but we are in the trenches with them, attempting, to the best of our ability, to provide them the tools they need to be successful. The Bible says, 'Blessed (happy) are the peacemakers...' (Matt. 5:9)! Happiness is the blessing that comes when we find our path, to help others live in peace."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-900 font-['Montserrat']">David Mackzum</p>
                  <p className="text-gray-600 font-['Open Sans']">Princeton Community Middle School</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Michael Pearl */}
            <div className="bg-gray-50 rounded-lg shadow-lg p-8 border-t-4 border-primary">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Open Sans'] italic">
                "We are so grateful for Mr. Kelly and his team from the Center of Social-Emotional Learning for partnering with us to teach the very important skill of conflict resolution to our young people. Our young people face many challenges, but we are in the trenches with them, attempting, to the best of our ability, to provide them the tools they need to be successful. The Bible says, 'Blessed (happy) are the peacemakers...' (Matt. 5:9)! Happiness is the blessing that comes when we find our path, to help others live in peace."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-900 font-['Montserrat']">Michael Pearl</p>
                  <p className="text-gray-600 font-['Open Sans']">Director, St. Monica Center</p>
                  <p className="text-gray-500 text-sm font-['Open Sans']">June 2024</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Ariel Miller */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Open Sans'] italic">
                "This year I witnessed how powerful it is to community support for a fledgling program to change the culture and practice of a large public school around conflict and discipline. Then, in January, Rev. Mike Pearl and his team at St. Monica's Recreation Center personally invited several middle school students to attend a Saturday workshop to practice skills the school had not yet called on. All of these young people come from a small Black community and must find their way in a largely white school district. It was powerful to see them take the lead at the workshop, using skills they'd learned from Bob Kelly, CSEL's Executive Director, nearly a year before, and to watch the 6th graders respond to their leadership."
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-gray-900 font-['Montserrat']">Ariel Miller</p>
                  <p className="text-gray-600 font-['Open Sans']">ACTS Group Leader</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Create Your Own Success Story</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-['Open Sans']">
            Ready to bring transformative conflict resolution and SEL programs to your school or community? Let's work together.
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
