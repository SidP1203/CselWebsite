import { Link } from "wouter";

export default function CTASection() {
  return (
    <section id="donate" className="py-16 bg-[#ffc629]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Make A Difference Today</h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-['Open Sans']">
            Your support helps us create lasting change in our community. Every donation, regardless of size, makes a meaningful impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-red-700 transition-all">
              Donate Now
            </Link>
            <Link href="#" className="bg-gray-800 text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-gray-700 transition-all">
              Become A Monthly Donor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
