import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 flex flex-col items-center justify-center px-4">
      <Helmet>
        <title>Page Not Found - CSEL Cincinnati</title>
        <meta name="description" content="The page you're looking for could not be found." />
      </Helmet>
      
      <div className="text-center max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <MapPin className="h-8 w-8 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="px-6">
            <Link href="/">Return to Home</Link>
          </Button>
          
          <Button asChild variant="outline" className="px-6">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          If you believe this is an error, please contact our team for assistance.
        </p>
      </div>
    </div>
  );
}
