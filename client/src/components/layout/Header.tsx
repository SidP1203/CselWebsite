import { useState } from "react";
import { Link } from "wouter";
import { Menu, Search, X } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [, setLocation] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="bg-primary rounded-full h-10 w-10 flex items-center justify-center mr-2">
                <span className="text-white font-bold font-['Montserrat']">CSEL</span>
              </div>
              <span className="text-dark font-['Montserrat'] font-bold text-xl">CSEL Cincinnati</span>
            </a>
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
            <a href="/" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Home</a>
            <Link href="/about" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">About Us</Link>
            <Link href="/programs" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Programs</Link>
            <a href="/#events" onClick={scrollToSection} className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">News & Events</a>
            <a href="/#impact" onClick={scrollToSection} className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Our Impact</a>
            <a href="/#contact" onClick={scrollToSection} className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-3">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <Input
                type="text" 
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 h-9"
              />
              <Button type="submit" variant="ghost" size="icon" className="ml-1">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <Link href="/donate" className="bg-primary text-white font-['Montserrat'] font-semibold px-6 py-2 rounded hover:bg-red-700 transition-all">DONATE</Link>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-3 space-y-3">
              <a href="/" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Home</a>
              <Link href="/about" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">About Us</Link>
              <Link href="/programs" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Programs</Link>
              <a href="/#events" onClick={scrollToSection} className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">News & Events</a>
              <a href="/#impact" onClick={scrollToSection} className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Our Impact</a>
              <a href="/#contact" onClick={scrollToSection} className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Contact</a>
              <Link href="/donate" className="block bg-primary text-white font-['Montserrat'] font-semibold px-4 py-2 rounded hover:bg-red-700 transition-all text-center mt-4">DONATE</Link>
              
              {/* Mobile Search */}
              <div className="mt-4 px-4">
                <form onSubmit={handleSearchSubmit} className="flex items-center mt-2">
                  <Input
                    type="text" 
                    placeholder="Search CSEL Cincinnati..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="icon" className="ml-1">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
