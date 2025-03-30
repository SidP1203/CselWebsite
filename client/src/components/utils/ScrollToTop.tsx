import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function ScrollToTop() {
  // Get the current location
  const [location] = useLocation();
  
  // When location changes, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  // This component doesn't render anything
  return null;
}