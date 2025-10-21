import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/final-logo-small_3_1759185475923.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [focusAreasOpen, setFocusAreasOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFocusAreas = () => {
    setFocusAreasOpen(!focusAreasOpen);
  };

  const focusAreaLinks = [
    { name: "School Programs", href: "/programs/school" },
    { name: "Community Programs", href: "/programs/community" },
    { name: "Research", href: "/programs/research" },
    { name: "Success Stories", href: "/programs/success-stories" },
    { name: "Resources", href: "/programs/resources" },
    { name: "Current News & Events", href: "/programs/news-events" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logoImage} alt="CSEL Logo" className="h-12 w-12 mr-2" />
              <span className="text-dark font-['Montserrat'] font-bold text-xl">CSEL Cincinnati</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 hover:text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="/" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Home</a>
            <Link href="/about" className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">About Us</Link>
            
            {/* Focus Areas Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Focus Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {focusAreaLinks.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none font-['Montserrat']">{link.name}</div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <a href="/#impact" onClick={scrollToSection} className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Our Impact</a>
            <a href="/#contact" onClick={scrollToSection} className="font-['Montserrat'] font-medium text-gray-800 hover:text-primary transition-all border-b-2 border-transparent hover:border-primary pb-1">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Link href="/donate" className="bg-primary text-white font-['Montserrat'] font-semibold px-6 py-2 rounded hover:bg-red-700 transition-all" data-testid="link-donate">DONATE</Link>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-3 space-y-3">
              <a href="/" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Home</a>
              <Link href="/about" className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">About Us</Link>
              
              {/* Mobile Focus Areas Dropdown */}
              <div>
                <button
                  onClick={toggleFocusAreas}
                  className="w-full flex items-center justify-between font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100"
                  data-testid="button-focus-areas-mobile"
                >
                  Focus Areas
                  <ChevronDown className={`h-4 w-4 transition-transform ${focusAreasOpen ? 'rotate-180' : ''}`} />
                </button>
                {focusAreasOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {focusAreaLinks.map((link) => (
                      <Link 
                        key={link.href}
                        href={link.href} 
                        className="block font-['Montserrat'] text-sm text-gray-700 hover:text-primary px-4 py-2 rounded hover:bg-gray-100"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="/#impact" onClick={scrollToSection} className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Our Impact</a>
              <a href="/#contact" onClick={scrollToSection} className="block font-['Montserrat'] font-medium text-gray-800 hover:text-primary px-4 py-2 rounded hover:bg-gray-100">Contact</a>
              <Link href="/donate" className="block bg-primary text-white font-['Montserrat'] font-semibold px-4 py-2 rounded hover:bg-red-700 transition-all text-center mt-4" data-testid="link-donate-mobile">DONATE</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
