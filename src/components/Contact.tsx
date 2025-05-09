
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      // Example using EmailJS (client-side) or replace with your backend endpoint
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID');
      // --- OR ---
      // await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      // Simulate success for demo
      await new Promise(res => setTimeout(res, 1200));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError('Failed to send message. Please try again later.');
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" placeholder="Subject of your message" required value={form.subject} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" required value={form.message} onChange={handleChange} />
                  </div>
                  <Button type="submit" className="w-full bg-quantum-dark hover:bg-quantum text-white" disabled={status==='sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                  {status === 'success' && <p className="text-green-600 text-center mt-2">Message sent successfully!</p>}
                  {status === 'error' && <p className="text-red-600 text-center mt-2">{error}</p>}
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
