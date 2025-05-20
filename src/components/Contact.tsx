
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setStatus('sending');
    
    try {
      // Call Supabase Edge Function to send email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: JSON.stringify(values)
      });

      if (error) {
        throw new Error(error.message);
      }

      setStatus('success');
      form.reset();
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    } catch (err) {
      console.error('Error sending message:', err);
      setStatus('error');
      toast({
        title: "Failed to send message",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="content-section bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm always interested in collaborating on research projects, speaking opportunities, or discussing ideas related to quantum physics, artificial intelligence, and Biology inquiry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-quantum-dark">Connect With Me</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-50 rounded-full">
                  <Mail className="h-6 w-6 text-quantum-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">basiltamilselvan8@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-50 rounded-full">
                  <MapPin className="h-6 w-6 text-quantum-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-600">Department of Applied Artificial Intelligence, <span>Purdue University Northwest</span> Purdue University Northwest</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-blue-50 rounded-full">
                  <MessageSquare className="h-6 w-6 text-quantum-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Academic Profiles</h4>
                  <div className="space-y-1">
                    <a href="#" className="flex items-center text-quantum hover:text-quantum-accent">
                      Google Scholar <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="#" className="flex items-center text-quantum hover:text-quantum-accent">
                      ResearchGate <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                    <a href="https://orcid.org/0009-0006-2314-9352" className="flex items-center text-quantum hover:text-quantum-accent">
                      ORCID <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
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
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-quantum-dark hover:bg-quantum text-white" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </Button>
                    {status === 'success' && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
                    {status === 'error' && <p className="text-red-600 text-center mt-2">Failed to send message. Please try again later.</p>}
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
