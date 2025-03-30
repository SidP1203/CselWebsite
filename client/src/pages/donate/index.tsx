import { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  CreditCard, 
  Calendar, 
  BadgeCheck, 
  Gift, 
  Award, 
  Repeat,
  DollarSign
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const donationSchema = z.object({
  amount: z.string().min(1, "Please enter an amount"),
  customAmount: z.string().optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  cardNumber: z.string().min(1, "Card number is required"),
  expiryDate: z.string().min(1, "Expiry date is required"),
  cvv: z.string().min(1, "CVV is required"),
  donationType: z.enum(["oneTime", "monthly"]),
  honorMemory: z.string().optional(),
  comment: z.string().optional(),
});

type DonationFormValues = z.infer<typeof donationSchema>;

export default function DonatePage() {
  const [donationTab, setDonationTab] = useState("oneTime");
  const [selectedAmount, setSelectedAmount] = useState<string>("50");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const { toast } = useToast();

  // Initialize form
  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: "50",
      customAmount: "",
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      donationType: "oneTime",
      honorMemory: "",
      comment: "",
    },
  });

  // Handle form submission
  const onSubmit = (data: DonationFormValues) => {
    // This would normally connect to a payment processor API
    // For now, we'll just show a success message
    console.log("Donation submitted:", data);
    
    toast({
      title: "Donation Successful",
      description: `Thank you for your ${data.donationType === "oneTime" ? "one-time" : "monthly"} donation of $${isCustomAmount ? data.customAmount : data.amount}!`,
      duration: 5000,
    });
    
    form.reset();
    setSelectedAmount("50");
    setIsCustomAmount(false);
  };

  // Handle donation amount selection
  const handleAmountSelect = (amount: string) => {
    if (amount === "custom") {
      setIsCustomAmount(true);
      form.setValue("amount", "custom");
    } else {
      setIsCustomAmount(false);
      setSelectedAmount(amount);
      form.setValue("amount", amount);
    }
  };

  // Handle tab change
  const handleTabChange = (value: string) => {
    setDonationTab(value);
    form.setValue("donationType", value as "oneTime" | "monthly");
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Donate - CSEL Cincinnati</title>
        <meta name="description" content="Support CSEL Cincinnati's mission by making a donation. Your contribution helps us strengthen our community through education, support, and advocacy." />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your donation helps us continue our mission to strengthen the Cincinnati community through education, support, and advocacy.
          </p>
        </div>
      </section>

      {/* Donation Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Impact</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Here's how your generous contributions make a difference in our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <DollarSign className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">$25</h3>
              <p className="text-gray-700">
                Provides educational supplies for one student for a month
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <DollarSign className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">$50</h3>
              <p className="text-gray-700">
                Supports one family with emergency assistance services
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <DollarSign className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">$100</h3>
              <p className="text-gray-700">
                Funds a community workshop for 20 participants
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Our Mission</h2>
              <p className="text-lg text-gray-700">
                Choose how you'd like to contribute to our cause.
              </p>
            </div>
            
            <Card>
              <CardHeader>
                <Tabs defaultValue="oneTime" onValueChange={handleTabChange}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="oneTime">One-Time Gift</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Support</TabsTrigger>
                  </TabsList>
                  <TabsContent value="oneTime">
                    <CardDescription className="pt-4">
                      Make a one-time donation to support our initiatives.
                    </CardDescription>
                  </TabsContent>
                  <TabsContent value="monthly">
                    <CardDescription className="pt-4">
                      Become a monthly donor to provide sustained support.
                    </CardDescription>
                  </TabsContent>
                </Tabs>
              </CardHeader>
              
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Donation Amount */}
                    <div className="space-y-4">
                      <FormLabel>Select Donation Amount</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["25", "50", "100", "250"].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={selectedAmount === amount && !isCustomAmount ? "default" : "outline"}
                            onClick={() => handleAmountSelect(amount)}
                            className="h-12"
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>
                      
                      <Button
                        type="button"
                        variant={isCustomAmount ? "default" : "outline"}
                        onClick={() => handleAmountSelect("custom")}
                        className="w-full h-12"
                      >
                        Custom Amount
                      </Button>
                      
                      {isCustomAmount && (
                        <FormField
                          control={form.control}
                          name="customAmount"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="relative">
                                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                                  <Input
                                    {...field}
                                    type="number"
                                    min="1"
                                    placeholder="Enter amount"
                                    className="pl-8"
                                  />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                    
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} type="email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem className="col-span-full md:col-span-1">
                              <FormLabel>ZIP Code</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    {/* Payment Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Payment Information</h3>
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input {...field} placeholder="1234 5678 9012 3456" />
                                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="expiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expiry Date</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input {...field} placeholder="MM/YY" />
                                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cvv"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>CVV</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="123" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    {/* Additional Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Options</h3>
                      <FormField
                        control={form.control}
                        name="honorMemory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Donate in Honor or Memory of Someone</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                placeholder="Enter name (optional)" 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Comments</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                placeholder="Any special instructions or comments (optional)" 
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      {donationTab === "oneTime" ? "Complete Donation" : "Start Monthly Giving"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4 border-t pt-6">
                <div className="flex items-center text-sm text-gray-500">
                  <BadgeCheck className="h-5 w-5 text-primary mr-2" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Gift className="h-5 w-5 text-primary mr-2" />
                  <span>Your donation is tax-deductible</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Ways to Give</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Beyond online donations, there are many ways you can support CSEL Cincinnati.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Repeat className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recurring Giving</h3>
              <p className="text-gray-700 mb-4">
                Set up automated monthly donations to provide sustained support for our programs.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Learn more</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Sponsorship</h3>
              <p className="text-gray-700 mb-4">
                Partner with us through sponsorship opportunities and employee matching programs.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Learn more</a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Gift className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Legacy Giving</h3>
              <p className="text-gray-700 mb-4">
                Make a lasting impact by including CSEL Cincinnati in your estate planning.
              </p>
              <a href="#" className="text-primary font-medium hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">
                Find answers to common questions about donating to CSEL Cincinnati.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Is my donation tax-deductible?</h3>
                <p className="text-gray-700">
                  Yes, CSEL Cincinnati is a registered 501(c)(3) nonprofit organization, and all donations are tax-deductible to the extent allowed by law.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How are donations used?</h3>
                <p className="text-gray-700">
                  Your donations directly support our programs in education, community support, and advocacy. Administrative costs are kept to a minimum to ensure maximum impact.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I specify how my donation is used?</h3>
                <p className="text-gray-700">
                  Yes, you can designate your donation for a specific program or area of focus. Please include your preferences in the comments section of the donation form.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I cancel or modify my recurring donation?</h3>
                <p className="text-gray-700">
                  You can cancel or modify your recurring donation at any time by contacting our donor support team at donations@cselcincinnati.org or by calling (513) 555-1234.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "I've been supporting CSEL Cincinnati for five years now, and I'm continually impressed by the tangible impact they make in our community. The transparency in how they use donations gives me confidence that my support is truly making a difference."
            </blockquote>
            <div className="font-semibold text-gray-900">Michael Thompson</div>
            <div className="text-sm text-gray-500">Monthly Donor Since 2018</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions About Donating?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our team is here to help. Contact us for assistance with your donation.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <a href="/#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}