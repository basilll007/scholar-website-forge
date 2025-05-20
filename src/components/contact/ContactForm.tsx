
import React, { useState } from 'react';
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
import { useSupabaseClient } from '@/hooks/useSupabaseClient';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Send, Loader } from 'lucide-react';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { supabase, isConfigured } = useSupabaseClient();
  
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
    setErrorMessage(null);
    
    try {
      console.log('Submitting form with values:', values);
      console.log('Supabase client:', supabase);
      
      // Call Supabase Edge Function to send email
      const { error, data } = await supabase.functions.invoke('send-contact-email', {
        body: JSON.stringify(values)
      });

      console.log('Response from function:', { error, data });

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
      
      // Set a specific error message
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unknown error occurred. Please try again later.");
      }
      
      toast({
        title: "Failed to send message",
        description: "There was an issue sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  // Show configuration error if somehow Supabase is still not configured
  if (!isConfigured) {
    return (
      <Card className="border-none shadow-lg">
        <CardContent className="p-6">
          <Alert className="mb-4 border-red-500 bg-red-50">
            <AlertTitle className="text-red-600">Configuration Error</AlertTitle>
            <AlertDescription className="text-red-600">
              Supabase is not configured properly. Please ensure the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY 
              environment variables are set correctly in your Supabase project.
            </AlertDescription>
          </Alert>
          <p className="text-center text-gray-500">
            The contact form is temporarily unavailable. Please try again later or reach out directly via email.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
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
            
            {errorMessage && (
              <Alert className="bg-red-50 border-red-200">
                <AlertDescription className="text-red-600">
                  {errorMessage}
                </AlertDescription>
              </Alert>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-quantum-dark hover:bg-quantum text-white" 
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
            
            {status === 'success' && (
              <Alert className="bg-green-50 border-green-200">
                <AlertDescription className="text-green-600">
                  Your message has been sent successfully! I'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
