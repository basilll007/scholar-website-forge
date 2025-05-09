
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Research from '@/components/Research';
import Projects from '@/components/Projects';
// import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const target = document.querySelector(href);
        if (!target) return;
        
        window.scrollTo({
          top: (target as HTMLElement).offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background antialiased">
      <Header />
      <Hero />
      <About />
      <Research />
      <Projects />
      <section id="achievements" className="content-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="section-title">Achievements</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A showcase of my academic and professional achievements in science and technology.
            </p>
          </div>
          <div className="space-y-6">
            {[{"title":"Gold Medal for All-Round Excellence","year":2024,"description":"Recognized as the best all-rounder for the year 2023–2024 for exceptional performance in academics, sports, NCC, and extracurricular activities."},{"title":"Best Presentation Award – AI in Medical Imaging","year":2024,"description":"Awarded for presenting an innovative approach using 3D Convolutional Neural Networks (3D-CNNs) to analyze CT/MRI scans for efficient disease diagnosis."},{"title":"Best NCC Cadet","year":2023,"description":"Honored for exemplary service, discipline, and leadership as a National Cadet Corps (NCC) member."},{"title":"Invited Guest Lecturer – AI & Cloud","year":2023,"description":"Delivered a guest lecture on artificial intelligence and cloud computing technologies to undergraduate students."},{"title":"Smart India Hackathon – Grand Finale Participant","year":2022,"description":"Reached the national finals for developing a network traffic analyzer that uses AI to classify data packets and detect potential cyber-attacks."},{"title":"1st Place – Techno Vision Project Competition","year":2022,"description":"Won first prize for a medical image analysis project leveraging machine learning to assist in disease detection."}].map((ach, idx) => (
              <Card key={idx} className="border-l-4 border-l-quantum-accent hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-quantum-dark mb-2">{ach.title}</h3>
                  <div className="text-gray-600 text-sm mb-1">{ach.year}</div>
                  <p className="text-gray-700">{ach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* <Publications /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
