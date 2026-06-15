import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { School, Users, BookOpen, ExternalLink, TrendingUp, Award, ChevronRight } from "lucide-react";

export default function ProgramsPage() {
  return (
    <>
      <Helmet>
        <title>Our Programs | CSEL Cincinnati</title>
        <meta name="description" content="Explore CSEL Cincinnati's programs strengthening social-emotional learning in Cincinnati schools and communities." />
      </Helmet>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-['Montserrat'] font-bold text-4xl md:text-5xl mb-6">Our Programs & Focus Areas</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto font-['Open Sans'] leading-relaxed text-gray-600">
              Over the past nine years, CSEL has worked with more than 7,500 students and 330 classrooms in 20 schools and community programs across Greater Cincinnati.
            </p>
          </div>
        </div>
      </section>

      {/* School Programs */}
      <section id="school-programs" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-red-50 p-3 rounded-full">
              <School className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl">School Programs</h2>
              <p className="text-gray-500 font-['Open Sans']">Current and recent partnerships with Cincinnati-area schools</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Princeton - Summer Bridge */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-1">Princeton Community Middle School</h3>
              <p className="text-primary font-semibold font-['Open Sans'] text-sm mb-3">Princeton Community School District — Summer Bridge Program</p>
              <p className="text-gray-600 font-['Open Sans']">
                During June of 2024 and 2025, CSEL facilitators conducted SEL classes each year for 100+ 6th graders in the Summer Bridge Program, which prepared students in all subjects for entry to middle school.
              </p>
            </div>

            {/* Princeton - SEL / Peer Mediation */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-1">Princeton Community Middle School</h3>
              <p className="text-primary font-semibold font-['Open Sans'] text-sm mb-3">Princeton Community School District — SEL Classes / Peer Mediation Training</p>
              <p className="text-gray-600 font-['Open Sans']">
                Over the past two years (five semesters), CSEL facilitators conducted SEL classes for thirteen 8th grade and eighteen 6th grade classes, totaling over 700 students. In addition, CSEL trained 96 6th, 7th, and 8th graders as peer mediators using the nationally recognized <em>People Against Violent Environments (PAVE)</em> program, earning two Ohio Best Practices Awards for its successful work.
              </p>
            </div>

            {/* Evanston Academy */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0055a4]">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-1">Evanston Academy / Evanston Middle School</h3>
              <p className="text-[#0055a4] font-semibold font-['Open Sans'] text-sm mb-3">Cincinnati Public Schools</p>
              <p className="text-gray-600 font-['Open Sans']">
                CSEL facilitators conducted SEL classes for grades K–6 during the 2023–24 and 2024–25 school years. Evanston Academy then transitioned to a middle school for the 2025–26 school year where CSEL is providing SEL classes for six 7th and 8th grade classes this semester.
              </p>
            </div>

            {/* Chase Elementary */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0055a4]">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-1">Chase Elementary School</h3>
              <p className="text-[#0055a4] font-semibold font-['Open Sans'] text-sm mb-3">Cincinnati Public Schools</p>
              <p className="text-gray-600 font-['Open Sans']">
                CSEL facilitators conducted 41 SEL classes over the past two years and is currently working with six K–6 classes.
              </p>
            </div>

            {/* South Avondale */}
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0055a4] md:col-span-2">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-1">South Avondale Middle School</h3>
              <p className="text-[#0055a4] font-semibold font-['Open Sans'] text-sm mb-3">Cincinnati Public Schools — First Year as a Middle School</p>
              <p className="text-gray-600 font-['Open Sans']">
                CSEL facilitators conducted 12 SEL classes serving nearly 300 students during the Fall Semester, including 4 classes each for 6th, 7th, and 8th grades. CSEL will also be training peer mediation teams for each grade level in January and facilitating ten additional SEL classes in the second semester.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Affiliations */}
      <section id="affiliations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-blue-50 p-3 rounded-full">
              <Users className="w-8 h-8 text-[#0055a4]" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl">Community Affiliations</h2>
              <p className="text-gray-500 font-['Open Sans']">Partner organizations supporting CSEL's mission</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* GCF */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-2">Greater Cincinnati Foundation</h3>
              <p className="text-gray-400 text-sm font-['Open Sans'] mb-3">Cincinnati, OH</p>
              <p className="text-gray-600 font-['Open Sans'] mb-3">
                CSEL is a recipient of a Greater Cincinnati Foundation Educational Success Grant for $30,000 per year for two years, announced in May 2023, and a $60,000 grant in 2025. As the region's leading community foundation, GCF connects people with purpose in an eight-county region in Ohio, Kentucky, and Indiana.
              </p>
              <p className="text-sm text-gray-500 font-['Open Sans'] italic">
                Grant title: <em>Developing Peer Mediation &amp; Social-Emotional Learning Skills at Princeton Middle School and St. Monica's Center in Lincoln Heights</em>
              </p>
              <a href="https://gcfdn.org" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-primary text-sm hover:underline font-['Open Sans']">
                gcfdn.org <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Talbert House */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-2">Talbert House</h3>
              <p className="text-gray-400 text-sm font-['Open Sans'] mb-3">Cincinnati, OH</p>
              <p className="text-gray-600 font-['Open Sans']">
                CSEL has been a Prevention Agency of Talbert House for ten years and a licensed agency of the Ohio Mental Health and Addiction Services (OMHAS) since 2023. We receive OMHAS Prevention funding that flows through Talbert House.
              </p>
            </div>

            {/* St. Monica */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-2">St. Monica Center</h3>
              <p className="text-gray-400 text-sm font-['Open Sans'] mb-3">Lincoln Heights, OH</p>
              <p className="text-gray-600 font-['Open Sans']">
                CSEL's relationship began in July 2022, when we trained 33 students in grades 5–8 as peer mediators. St. Monica's Center is staffed by a dynamic and inspirational Director, Michael Pearl, and a dedicated staff. SMC is also supported by the ACTS Episcopal churches—Ascension &amp; Holy Trinity, St. Simon of Cyrene, and Christ Church Glendale. CSEL provided two follow-up activities each year, mediation reviews and Peace Camp sessions. SMC has seen a 21% reduction in suspensions over the past two years.
              </p>
            </div>

            {/* Cincinnati Public Library */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-['Montserrat'] font-bold text-xl mb-2">Cincinnati Public Library</h3>
              <p className="text-gray-400 text-sm font-['Open Sans'] mb-3">Cincinnati, OH</p>
              <p className="text-gray-600 font-['Open Sans']">
                CSEL contracted with the Cincinnati Public Library System in 2023 to support the Youth Librarians' staff development goal of focusing on Social-Emotional Learning and curating SEL-supportive books. Executive Director Bob Kelly conducted a workshop for Youth Librarians, and CSEL staff facilitated SEL workshops for preschool and elementary-age children at branch libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Results */}
      <section id="results" className="py-16 bg-[#0055a4] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="bg-white/10 p-3 rounded-full">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl">Research &amp; Results</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">85%+</div>
              <p className="font-['Open Sans']">of students and 96% of school staff say students learned things helpful at school, home, and with friends</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">78–100%</div>
              <p className="font-['Open Sans']">of students in 23 SEL classes and 100% of peer mediation students responded positively to all six survey statements</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">100%</div>
              <p className="font-['Open Sans']">of staff at St. Monica Center and Princeton Middle School report moderate to significant improvement in peer interaction and cooperation</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">21%</div>
              <p className="font-['Open Sans']">reduction in suspensions at St. Monica Center over the past two years of SEL and mediation training</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">17%</div>
              <p className="font-['Open Sans']">reduction in suspensions at Princeton Community Middle School over the past two years</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-4xl font-['Montserrat'] font-bold text-[#ffc629] mb-2">7,500+</div>
              <p className="font-['Open Sans']">students served over the past nine years across 20 schools and 330 classrooms in Greater Cincinnati</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-yellow-50 p-3 rounded-full">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <div>
              <h2 className="font-['Montserrat'] font-bold text-3xl">Success Stories</h2>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 font-['Open Sans'] leading-relaxed mb-6">
              CSEL programs have filled a crucial mental health need in Greater Cincinnati, teaching social-emotional skills including communication, cooperation, affirmation of self and others, appreciation of differences, goal-setting, peaceful conflict resolution, and peer mediation. These were important elements of our predecessor organizations, the Center for Peace Education (1979–2009) and Bridges for a Just Community (2009–2013).
            </p>
            <p className="text-lg text-gray-600 font-['Open Sans'] leading-relaxed mb-8">
              Our peer mediation training program, developed by Robert E. Kelly and his key staff in 1996, has won two <strong>Ohio BEST Practices Awards</strong>, the <strong>Ohio School Conflict Management Award</strong>, and the <strong>Nestlé Foundation's "Very Best in Teaching" Award</strong> for the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl mb-10 text-center">Testimonials</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Michael Pearl */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600 font-['Open Sans'] italic leading-relaxed mb-6">
                "We are so grateful for Mr. Kelly and his team from the Center of Social-Emotional Learning for partnering with us to teach the very important skill of conflict resolution to our young people. Our young people face many challenges, but we are in the trenches with them, attempting, to the best of our ability, to provide them the tools they need to be successful. The Bible says, 'Blessed (happy) are the peacemakers...' (Matt. 5:9)! Happiness is the blessing that comes when we find peaceful solutions to our conflicts."
              </p>
              <div>
                <p className="font-['Montserrat'] font-bold text-primary">Michael Pearl</p>
                <p className="text-gray-500 text-sm font-['Open Sans']">Director, St. Monica Center, June 2024</p>
              </div>
            </div>

            {/* Ariel Miller */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600 font-['Open Sans'] italic leading-relaxed mb-6">
                "This year I witnessed how powerful it is to have community support for a fledgling program to change the culture and practice of a large public school around conflict and discipline. Then, in January, Rev. Mike Pearl and his team at St. Monica's Recreation Center personally invited several middle school students to attend a Saturday workshop to practice skills the school had not yet called on. All of these young people come from a small Black community and must find their way in a challenging world."
              </p>
              <div>
                <p className="font-['Montserrat'] font-bold text-primary">Ariel Miller</p>
                <p className="text-gray-500 text-sm font-['Open Sans']">ACTS Group Leader</p>
              </div>
            </div>

            {/* David Mackzum — link to letter */}
            <div className="bg-white rounded-lg shadow-sm p-8 md:col-span-2 flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/10 p-4 rounded-full shrink-0">
                <School className="w-10 h-10 text-primary" />
              </div>
              <div>
                <p className="font-['Montserrat'] font-bold text-primary text-lg mb-1">David Mackzum</p>
                <p className="text-gray-500 text-sm font-['Open Sans'] mb-3">Princeton Community Middle School</p>
                <p className="text-gray-600 font-['Open Sans']">
                  David Mackzum of Princeton Community Middle School has written a letter describing the impact of CSEL's peer mediation and SEL programs on their students and school community.
                </p>
                <a href="mailto:info@csel-cincinnati.org" className="mt-3 inline-flex items-center gap-1 text-primary font-['Montserrat'] font-semibold text-sm hover:underline">
                  Request a copy <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current News & Events */}
      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-['Montserrat'] font-bold text-3xl mb-10 text-center">Current News &amp; Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-primary">
              <p className="text-sm text-gray-500 font-['Open Sans'] mb-2">August 2025</p>
              <h3 className="font-['Montserrat'] font-bold text-lg mb-3">CSEL Staff Development</h3>
              <p className="text-gray-600 font-['Open Sans'] text-sm">
                CSEL facilitators participate in at least one staff development session each year. Sessions cover CASEL Competencies, evidence-based practices, trauma-informed practices, integration of art, music, movement, and mindfulness.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-[#0055a4]">
              <p className="text-sm text-gray-500 font-['Open Sans'] mb-2">2025</p>
              <h3 className="font-['Montserrat'] font-bold text-lg mb-3">Greater Cincinnati Foundation Educational Success Grant</h3>
              <p className="text-gray-600 font-['Open Sans'] text-sm">
                CSEL received a $60,000 grant to increase conflict-resolution skills and reduce disciplinary actions at St. Monica's Center and Princeton Community Middle School, building on the success of the original 2023 grant.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-green-600">
              <p className="text-sm text-gray-500 font-['Open Sans'] mb-2">November 2024 — Chicago, IL</p>
              <h3 className="font-['Montserrat'] font-bold text-lg mb-3">International SEL Exchange</h3>
              <p className="text-gray-600 font-['Open Sans'] text-sm">
                Over 1,800 participants from 49 states and 30 countries attended the three-day conference at McCormick Place. The 2025 Exchange will be held remotely to encourage more participation and eliminate travel costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <div className="bg-blue-50 p-3 rounded-full">
              <BookOpen className="w-8 h-8 text-[#0055a4]" />
            </div>
            <h2 className="font-['Montserrat'] font-bold text-3xl">Resources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-primary">Links</h3>
              <ul className="space-y-3 font-['Open Sans']">
                <li>
                  <a href="https://sel4oh.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Social and Emotional Learning, Ohio — sel4oh.org <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sel4us.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Social and Emotional Learning, United States — sel4us.org <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sel4oh.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Blog: Partnering with Faith and Community-Based Organizations (Bob Kelly) <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://sel4oh.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                    Blog: CSEL's Ongoing Work in Cincinnati Area Schools (Bob Kelly) <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-['Montserrat'] font-bold text-xl mb-4 text-primary">Videos</h3>
              <ul className="space-y-3 font-['Open Sans'] text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  Why Building Emotional Intelligence in Classrooms Might Be the Key to Better Grades
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  Social and Emotional Learning: A Schoolwide Approach
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  5 Easy Ways To Integrate Social-Emotional Learning (SEL) Into Academic Content Lessons
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  Cooperation | Social and Emotional Learning Relationship Skills | Interactive Video
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▶</span>
                  3 Ways to Resolve a Conflict | Dorothy Walker | TED Institute
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Montserrat'] font-bold text-3xl mb-6">Bring CSEL to Your School or Organization</h2>
          <p className="text-lg max-w-2xl mx-auto font-['Open Sans'] mb-8 text-white/90">
            We work with schools and community organizations across Greater Cincinnati. Contact us to learn how CSEL can support your students and staff.
          </p>
          <Link href="/#contact">
            <Button className="bg-white text-primary font-['Montserrat'] font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-all">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
