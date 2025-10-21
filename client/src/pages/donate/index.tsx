import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useStripe, Elements, PaymentElement, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Heart, Users, TrendingUp, Award } from "lucide-react";

const stripePromise = import.meta.env.VITE_STRIPE_PUBLIC_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
  : null;

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/success`,
      },
    });

    if (error) {
      toast({
        title: "Payment Failed",
        description: error.message,
        variant: "destructive",
      });
    }
    
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button 
        type="submit" 
        disabled={!stripe || isProcessing} 
        className="w-full"
        data-testid="button-submit-donation"
      >
        {isProcessing ? "Processing..." : `Donate $${amount}`}
      </Button>
    </form>
  );
};

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const initiatePayment = async (amount: number) => {
    if (amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await apiRequest("POST", "/api/create-payment-intent", { amount });
      const data = await response.json();
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        throw new Error("Failed to initialize payment");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to initialize payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setClientSecret("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    const numValue = parseFloat(value);
    if (!isNaN(numValue) && numValue > 0) {
      setSelectedAmount(numValue);
    }
    setClientSecret("");
  };

  const handleProceedToPayment = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    initiatePayment(amount);
  };

  if (!stripePromise) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment System Not Configured</h1>
            <p className="text-gray-700">
              Our donation system is currently being set up. Please check back soon or contact us directly to make a donation.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Helmet>
        <title>Donate - CSEL Cincinnati</title>
        <meta name="description" content="Support CSEL Cincinnati's mission to empower students through peer-led conflict resolution and social-emotional learning." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Heart className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Support Our Mission</h1>
            <p className="text-xl text-gray-700">
              Help CSEL empower students to solve conflicts through peer intervention. Your support enables us to teach vital conflict resolution and mediation skills that create safer, more supportive school communities.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            
            {/* Impact Section - NOW AT THE TOP AND MORE PROMINENT */}
            <div className="mb-12 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl p-8 border-2 border-primary/20 shadow-lg">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Your Impact</h2>
                <p className="text-lg text-gray-700">See the real difference your donation makes</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">91%</div>
                  <p className="text-gray-700 font-medium">Of students say our programs are helpful</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-700 font-medium">Of staff report significant behavior improvements</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <p className="text-gray-700 font-medium">Students in 700+ classrooms benefit from our programs</p>
                </div>
              </div>
            </div>

            {/* Donation Form - NOW BELOW IMPACT */}
            {!clientSecret ? (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Donation Amount</h2>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedAmount === amount && !customAmount
                          ? 'border-primary bg-primary/10 text-primary font-semibold'
                          : 'border-gray-300 hover:border-primary'
                      }`}
                      data-testid={`button-amount-${amount}`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter a custom amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">$</span>
                    <input
                      id="customAmount"
                      type="number"
                      min="1"
                      step="0.01"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      data-testid="input-custom-amount"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleProceedToPayment}
                  disabled={isLoading || (!selectedAmount && !customAmount)}
                  className="w-full"
                  data-testid="button-proceed-payment"
                >
                  {isLoading ? "Loading..." : `Proceed to Payment - $${customAmount || selectedAmount}`}
                </Button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Donation</h2>
                <p className="text-gray-600 mb-6">
                  You're donating ${customAmount || selectedAmount} to support CSEL Cincinnati
                </p>
                
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm amount={customAmount ? parseFloat(customAmount) : selectedAmount} />
                </Elements>

                <button
                  onClick={() => setClientSecret("")}
                  className="mt-4 text-primary hover:underline text-sm"
                  data-testid="button-change-amount"
                >
                  ← Change amount
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
