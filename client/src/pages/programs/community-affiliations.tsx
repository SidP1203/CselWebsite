import { Helmet } from "react-helmet";
import { Users, Building2, Heart, Library } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CommunityAffiliationsPage() {
  return (
    <>
      <Helmet>
        <title>Community Affiliations | CSEL Cincinnati</title>
        <meta name="description" content="CSEL Cincinnati's partnerships with community organizations across Greater Cincinnati to bring conflict resolution and SEL programs beyond the classroom." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Users className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Montserrat']">Community Affiliations</h1>
            <p className="text-xl text-gray-700 font-['Open Sans']">
              Bringing conflict resolution and SEL skills beyond the classroom into community settings and youth organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Greater Cincinnati Foundation */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Montserrat']">Greater Cincinnati Foundation</h2>
                  <p className="text-sm text-gray-600 font-['Open Sans']">Cincinnati, OH</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Open Sans']">
                The Center for Social-Emotional Learning (CSEL) is a recipient of a Greater Cincinnati Foundation (<a href="http://www.gcfdn.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gcfdn.org</a>) Educational Success Grant for $30,000 per year for two years, announced in May 2023. As the region's leading community foundation, Greater Cincinnati Foundation connects people with purpose in an eight-county region in Ohio, Kentucky, and Indiana. GCF is leading the charge toward a more vibrant Greater Cincinnati – now, and for generations to come.
              </p>
              
              <div className="bg-white p-6 rounded-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-['Montserrat']">Grant Focus</h3>
                <p className="text-gray-700 font-['Open Sans']">
                  <strong>Developing Peer Mediation & Social-Emotional Learning Skills at Princeton Middle School and St. Monica's Center in Lincoln Heights</strong>
                </p>
                <p className="text-gray-600 mt-3 font-['Open Sans']">
                  This was the second GCF Educational Success Grant awarded to CSEL.
                </p>
              </div>
            </div>
          </div>

          {/* Talbert House */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Heart className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Montserrat']">Talbert House</h2>
                  <p className="text-sm text-gray-600 font-['Open Sans']">Cincinnati, OH</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                CSEL has been a Prevention Agency of Talbert House for ten years and a licensed agency of the Ohio Mental Health and Addiction Services since 2023. We received OMHAS Prevention funding that flows through Talbert House.
              </p>
            </div>
          </div>

          {/* St. Monica Center */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <div className="flex items-start gap-4 mb-4">
                <Building2 className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Montserrat']">St. Monica Center</h2>
                  <p className="text-sm text-gray-600 font-['Open Sans']">Lincoln Heights, OH</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-['Open Sans']">
                CSEL's relationship began in July 2022, when we trained 33 students in grades 5-8 as peer mediators. St. Monica's Center is staffed by a dynamic and inspirational Director, Michael Pearl, and a dedicated staff. In addition, SMC is supported by the ACTS Episcopal churches—Ascension & Holy Trinity, St. Simon of Cyrene and Christ Church Glendale—whose financial support and members are visible in every activity at SMC.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                CSEL provided two follow-up activities each year, mediating bullying-related situations on playgrounds and in hallways. CSEL also responded to St. Monica Center and Princeton Community Middle School's goals of increasing conflict-resolution skills and reducing disciplinary actions, especially out-of-school/program suspension that result in a students' removal from class/activities.
              </p>
            </div>
          </div>

          {/* Cincinnati Public Library */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <Library className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 font-['Montserrat']">Cincinnati Public Library</h2>
                  <p className="text-sm text-gray-600 font-['Open Sans']">Cincinnati, OH</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed font-['Open Sans']">
                CSEL contracted with the Cincinnati Public Library System in 2023 in order to support the staff development goal of the Youth Librarians to focus on Social-Emotional Learning and purchasing books that support those skills. To that end, Executive Director Bob Kelly conducted a workshop for the Youth Librarians covering the SEL skills and facilitating two activities, including taking responsibility and conflict resolution. In addition, CSEL staff facilitated SEL workshops for preschoolers and their parents, elementary and middle school children and staff at some of the neighborhood libraries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 font-['Montserrat']">Partner With Us</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-['Open Sans']">
            Interested in partnering with CSEL to bring conflict resolution and SEL programs to your organization? We'd love to hear from you.
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
