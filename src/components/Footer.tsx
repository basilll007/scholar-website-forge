
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-quantum-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-semibold mb-2">
              Researcher<span className="text-quantum-accent">.</span>
            </h3>
            <p className="text-gray-300 max-w-md">
              Exploring the intersections of quantum physics, artificial intelligence, and Tamil philosophy to expand our understanding of the universe.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <hr className="border-white/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>© {currentYear} All Rights Reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
