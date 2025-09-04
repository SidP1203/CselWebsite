import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ImpactSection from "./ImpactSection";
import GetInvolvedSection from "./GetInvolvedSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";
import CTASection from "./CTASection";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation for direct links
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth"
          });
        }, 100);
      }
    } else if (location === "/") {
      // Scroll to top when navigating to home
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>CSEL Cincinnati - Strengthening Our Community</title>
        <meta name="description" content="CSEL Cincinnati strengthens our community through education, support, and advocacy. Learn about our mission, programs, and how you can get involved." />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <GetInvolvedSection />
      <TestimonialSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
