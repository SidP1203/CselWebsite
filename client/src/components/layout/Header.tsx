import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
              <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center mr-2">
                <span className="text-white font-bold font-['Montserrat']">CSEL</span>
              </div>
              <span className="text-dark font-['Montserrat'] font-bold text-xl">CSEL Cincinnati</span>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Home</Link>
            <Link href="/about" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">About Us</Link>
            <Link href="/programs" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Programs</Link>
            <a href="/#events" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">News & Events</a>
            <a href="/#impact" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Our Impact</a>
            <a href="/#contact" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Link href="/donate" className="bg-primary text-white font-['Montserrat'] font-semibold px-6 py-2 rounded hover:bg-red-700 transition-all">DONATE</Link>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-3 space-y-3">
              <Link href="/" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Home</Link>
              <Link href="/about" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">About Us</Link>
              <Link href="/programs" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Programs</Link>
              <a href="/#events" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">News & Events</a>
              <a href="/#impact" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Our Impact</a>
              <a href="/#contact" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Contact</a>
              <Link href="/donate" className="block bg-primary text-white font-['Montserrat'] font-semibold px-4 py-2 rounded hover:bg-red-700 transition-all text-center mt-4">DONATE</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
