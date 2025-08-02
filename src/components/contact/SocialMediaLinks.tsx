import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com/in/basil-tamil-selvan-226b191bb/',
      description: 'Connect with me professionally',
      color: 'hover:bg-blue-600 hover:text-white border-blue-600 text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/basilll007',
      description: 'Check out my projects and code',
      color: 'hover:bg-gray-800 hover:text-white border-gray-800 text-gray-800'
    },
    {
      name: 'Email',
      icon: <Mail className="h-6 w-6" />,
      url: 'mailto:ebasiltamilselvan@gmail.com',
      description: 'Send me a direct message',
      color: 'hover:bg-red-600 hover:text-white border-red-600 text-red-600'
    }
  ];

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-center">Connect With Me</h3>
        <p className="text-gray-600 text-center mb-8">
          Let's connect and collaborate! Reach out through any of these platforms.
        </p>
        
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full h-16 ${link.color} transition-all duration-300 hover:shadow-lg`}
              onClick={() => window.open(link.url, '_blank')}
            >
              <div className="flex items-center justify-start w-full">
                <div className="mr-4">
                  {link.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{link.name}</div>
                  <div className="text-sm opacity-75">{link.description}</div>
                </div>
              </div>
            </Button>
          ))}
        </div>

      </CardContent>
    </Card>
  );
};

export default SocialMediaLinks;