
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-quantum-accent/30 filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-philosophy-light/20 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-4">
              Exploring the Intersection of 
              <span className="text-quantum-accent"> Quantum Physics</span> and
              <span className="text-philosophy-DEFAULT"> Philosophy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Bridging ancient Tamil philosophical wisdom with cutting-edge quantum mechanics and artificial intelligence to uncover new insights about our universe.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                className="bg-quantum-dark hover:bg-quantum text-white"
                size="lg"
              >
                View Research
              </Button>
              
              <Button
                variant="outline"
                className="border-quantum-dark text-quantum-dark hover:bg-quantum-dark/10"
                size="lg"
              >
                Connect
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-quantum-accent/30 animate-pulse"></div>
              <img 
                src="/lovable-uploads/bd1886ad-167d-4175-983d-6648a603bdc2.png" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full ring-4 ring-white shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-quantum" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
