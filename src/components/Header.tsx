
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuItems = [
    { name: 'About', href: '/#about' },
    { name: 'Research', href: '/#research' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-serif font-semibold text-quantum-dark">
          Researcher<span className="text-quantum-accent">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="fancy-link text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="sm" 
            className="border-quantum text-quantum hover:bg-quantum hover:text-white flex items-center gap-2"
            onClick={() => window.open('/Basil_resume.pdf', '_blank')}
          >
            <Download size={16} />
            Resume
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-16">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-xl font-medium"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            size="lg" 
            className="border-quantum text-quantum hover:bg-quantum hover:text-white flex items-center gap-2 mt-4"
            onClick={() => {
              window.open('/resume.pdf', '_blank');
              toggleMenu();
            }}
          >
            <Download size={20} />
            Download Resume
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
