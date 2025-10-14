import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { CheckCircle, Heart, Home, AlertCircle, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useStripe, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

type PaymentStatus = "loading" | "succeeded" | "failed" | "processing" | "requires_action";

function SuccessPageContent() {
  const stripe = useStripe();
  const [status, setStatus] = useState<PaymentStatus>("loading");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      setStatus("failed");
      setError("No payment information found");
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        setStatus("failed");
        setError("Could not retrieve payment information");
        return;
      }

      switch (paymentIntent.status) {
        case "succeeded":
          setStatus("succeeded");
          break;
        case "processing":
          setStatus("processing");
          break;
        case "requires_payment_method":
        case "requires_confirmation":
        case "requires_action":
          setStatus("requires_action");
          break;
        default:
          setStatus("failed");
          setError("Payment was not completed");
      }
    }).catch((err) => {
      setStatus("failed");
      setError(err.message || "An error occurred verifying your payment");
    });
  }, [stripe]);

  if (status === "loading") {
    return (
      <div className="bg-white">
        <Helmet>
          <title>Processing - CSEL Cincinnati</title>
        </Helmet>
        <section className="min-h-[80vh] flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Loader2 className="h-16 w-16 text-primary mx-auto mb-6 animate-spin" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Verifying Payment...</h1>
              <p className="text-gray-600">Please wait while we confirm your donation.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (status === "processing") {
    return (
      <div className="bg-white">
        <Helmet>
          <title>Processing Payment - CSEL Cincinnati</title>
        </Helmet>
        <section className="min-h-[80vh] flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block p-6 bg-blue-100 rounded-full mb-6">
                <Loader2 className="h-16 w-16 text-blue-600 animate-spin" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Payment Processing
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Your payment is being processed. You'll receive a confirmation email once it's complete.
              </p>
              <Link href="/">
                <Button data-testid="button-home">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (status === "requires_action") {
    return (
      <div className="bg-white">
        <Helmet>
          <title>Action Required - CSEL Cincinnati</title>
        </Helmet>
        <section className="min-h-[80vh] flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block p-6 bg-yellow-100 rounded-full mb-6">
                <AlertCircle className="h-16 w-16 text-yellow-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Additional Action Required
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Your payment requires additional verification. Please check your email or return to complete the payment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button data-testid="button-retry">Try Again</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" data-testid="button-home">
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="bg-white">
        <Helmet>
          <title>Payment Failed - CSEL Cincinnati</title>
        </Helmet>
        <section className="min-h-[80vh] flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block p-6 bg-red-100 rounded-full mb-6">
                <XCircle className="h-16 w-16 text-red-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Payment Not Completed
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                {error || "Your donation could not be processed at this time."}
              </p>
              <p className="text-gray-600 mb-8">
                Please try again or contact us if you continue to experience issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate">
                  <Button data-testid="button-retry">Try Again</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" data-testid="button-home">
                    <Home className="mr-2 h-4 w-4" />
                    Return Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Success state
  return (
    <div className="bg-white">
      <Helmet>
        <title>Thank You - CSEL Cincinnati</title>
        <meta name="description" content="Thank you for your donation to CSEL Cincinnati." />
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-block p-6 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You for Your Support!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Your generous donation helps CSEL Cincinnati empower students through peer-led conflict resolution and social-emotional learning programs. Together, we're creating safer, more supportive school communities.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Impact</h2>
              </div>
              <ul className="text-left max-w-md mx-auto space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>You'll receive a confirmation email with your receipt for tax purposes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Your donation directly supports our conflict resolution programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>You're helping students develop essential mediation skills</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button className="w-full sm:w-auto" data-testid="button-home">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto" data-testid="button-about">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DonateSuccessPage() {
  if (!stripePromise) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You</h1>
            <p className="text-gray-700">
              Thank you for your support! Please contact us if you have any questions about your donation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise}>
      <SuccessPageContent />
    </Elements>
  );
}
