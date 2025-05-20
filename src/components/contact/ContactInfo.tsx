
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
  );
};

export default ContactInfo;
