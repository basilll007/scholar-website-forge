
import React from 'react';
import { Mail, MessageSquare, MapPin, ExternalLink } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
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
            <p className="text-gray-600">College of Technology, Purdue Uniersity Northwest.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
