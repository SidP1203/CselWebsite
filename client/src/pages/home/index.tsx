import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ImpactSection from "./ImpactSection";
import FocusAreasSection from "./FocusAreasSection";
import GetInvolvedSection from "./GetInvolvedSection";
import NewsEventsSection from "./NewsEventsSection";
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
      <HeroSection />
      <AboutSection />
      <ImpactSection />
      <FocusAreasSection />
      <GetInvolvedSection />
      <NewsEventsSection />
      <TestimonialSection />
      <ContactSection />
      <CTASection />
    </>
  );
}
