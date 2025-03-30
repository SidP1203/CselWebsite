// Smooth scroll function for anchor links
export function scrollToSection(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  // Only handle anchor links with hash
  const href = event.currentTarget.getAttribute('href');
  if (!href || !href.includes('#')) return;
  
  // Extract the hash portion
  const hash = href.includes('#') ? href.split('#')[1] : '';
  if (!hash) return;
  
  // Handle case where it's just /#contact (going back to home page first)
  if (href.startsWith('/#')) {
    // If we're not on the home page, let the default navigation happen
    if (window.location.pathname !== '/') return;
  }
  
  // Find the element to scroll to
  const element = document.getElementById(hash);
  if (!element) return;
  
  // Prevent default link behavior
  event.preventDefault();
  
  // Get the header height (approximately)
  const headerHeight = 80; // Adjust this value based on your header's actual height
  
  // Get element position
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  
  // Scroll to element accounting for header height
  window.scrollTo({
    top: elementPosition - headerHeight,
    behavior: 'smooth'
  });
  
  // Update URL without reload
  window.history.pushState(null, '', href);
}