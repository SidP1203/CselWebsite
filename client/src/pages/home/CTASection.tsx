import { Link } from "wouter";

export default function CTASection() {
  return (
    <section id="donate" className="py-16 bg-[#ffc629]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Support Peer-Led Conflict Resolution</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-['Open Sans']">
            Help CSEL empower students to solve conflicts through peer intervention. Your support enables us to teach vital conflict resolution and mediation skills that create safer, more supportive school communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate" className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-red-700 transition-all">
              Donate Now
            </Link>
            <Link href="/donate" className="bg-gray-800 text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-gray-700 transition-all">
              Become A Monthly Donor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
