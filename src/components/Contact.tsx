
import React from 'react';
import { Mail, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would handle form submission in a real application
    console.log("Form submitted");
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
                  <p className="text-gray-600">Department of Physics, University Name</p>
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
                    <a href="#" className="flex items-center text-quantum hover:text-quantum-accent">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Subject of your message" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      className="min-h-[120px]" 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-quantum-dark hover:bg-quantum text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
