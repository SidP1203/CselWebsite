import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  newsletter: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        newsletter: data.newsletter ? "on" : "off",
      });
      
      const responseData = await response.json();
      
      toast({
        title: "Success!",
        description: responseData.message || "Thank you for your message! We will get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gray-800 font-['Montserrat'] font-bold text-3xl md:text-4xl mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-['Open Sans']">
            Have questions or want to learn more about our programs? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-gray-50 rounded-lg p-8">
            <h3 className="font-['Montserrat'] font-bold text-2xl mb-6">Get In Touch</h3>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Greater Cincinnati Area</h4>
                  <address className="text-gray-600 not-italic font-['Open Sans']">
                    Cincinnati, OH
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-gray-600 font-['Open Sans']">
                    <a href="tel:+15138176769" className="hover:text-primary transition-all">(513) 817-6769</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <div className="text-primary mr-4 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-['Montserrat'] font-semibold text-lg mb-1">Email</h4>
                  <p className="text-gray-600 font-['Open Sans']">
                    <a href="mailto:barbarazgray@gmail.com" className="hover:text-primary transition-all">barbarazgray@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-['Montserrat'] font-semibold text-lg mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/Center-for-Social-Emotional-Learning" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-red-700 transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-600 font-medium mb-2 font-['Open Sans']">
                          Full Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-600 font-medium mb-2 font-['Open Sans']">
                          Email Address <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="johndoe@example.com" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-600 font-medium mb-2 font-['Open Sans']">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(513) 817-6769" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-600 font-medium mb-2 font-['Open Sans']">
                        Subject <span className="text-red-500">*</span>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-all">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="volunteer">Volunteer Information</SelectItem>
                          <SelectItem value="donation">Donation Question</SelectItem>
                          <SelectItem value="programs">Program Information</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-600 font-medium mb-2 font-['Open Sans']">
                        Message <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-all"
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="newsletter"
                  render={({ field }) => (
                    <FormItem className="flex items-center mb-6">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="rounded border-gray-300 text-primary focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-all"
                        />
                      </FormControl>
                      <FormLabel className="ml-2 text-gray-600 font-['Open Sans']">
                        Subscribe to our newsletter for updates on events and programs
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-primary text-white font-['Montserrat'] font-semibold px-8 py-3 rounded-md hover:bg-red-700 transition-all inline-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
