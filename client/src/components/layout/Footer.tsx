import { Link } from "wouter";
import { ChevronUp, Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@assets/final-logo-small_3_1759185475923.jpg";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      const data = await response.json();
      
      toast({
        title: "Success!",
        description: data.message || "Thank you for subscribing to our newsletter!",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center">
                <img src={logoImage} alt="CSEL Logo" className="h-12 w-12 mr-2" />
                <span className="text-white font-['Montserrat'] font-bold text-xl">CSEL Cincinnati</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Creating sustainable change that improves lives in our Cincinnati community through education, stability, and leadership.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-all">Home</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-all">About Us</Link></li>
              <li><Link href="/#programs" className="text-gray-400 hover:text-white transition-all">Programs</Link></li>
              <li><Link href="/#impact" className="text-gray-400 hover:text-white transition-all">Our Impact</Link></li>
              <li><Link href="/#events" className="text-gray-400 hover:text-white transition-all">News & Events</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-all">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-bold text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li><Link href="/#donate" className="text-gray-400 hover:text-white transition-all">Donate</Link></li>
              <li><Link href="/#" className="text-gray-400 hover:text-white transition-all">Volunteer</Link></li>
              <li><Link href="/#" className="text-gray-400 hover:text-white transition-all">Corporate Partnerships</Link></li>
              <li><Link href="/#" className="text-gray-400 hover:text-white transition-all">Sponsorship Opportunities</Link></li>
              <li><Link href="/#" className="text-gray-400 hover:text-white transition-all">Planned Giving</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-bold text-lg mb-6">Stay Connected</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="mb-6" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13"></path>
                      <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                    </svg>
                  )}
                </button>
              </div>
            </form>
            <p className="text-gray-400">
              <span className="flex items-center gap-2"><Phone size={16} /> (513) 555-1234</span>
              <span className="flex items-center gap-2"><Mail size={16} /> info@cselcincinnati.org</span>
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CSEL Cincinnati. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-all">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="#" 
            className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-all"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </a>
        </div>
      )}
    </footer>
  );
}
