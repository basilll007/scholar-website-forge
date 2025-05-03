
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Quantum Neural Network Framework",
      description: "Developed a novel framework integrating quantum computing principles with neural networks to enhance pattern recognition in complex datasets.",
      tags: ["Quantum Computing", "Neural Networks", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Tamil Philosophy & Modern Physics",
      description: "A comparative analysis of Tamil philosophical concepts around duality and modern quantum mechanical interpretations of wave-particle duality.",
      tags: ["Comparative Philosophy", "Quantum Physics", "Research Paper"],
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      title: "Consciousness Models in AI Systems",
      description: "Research into implementing aspects of consciousness theory from both Western and Eastern philosophical traditions into artificial intelligence systems.",
      tags: ["AI", "Consciousness Studies", "Python"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="content-section bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Research Projects</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A selection of my key research projects that demonstrate the interdisciplinary approach to understanding complex phenomena across quantum physics, AI, and philosophy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{project.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-quantum-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 text-quantum border-quantum-light/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-quantum hover:text-quantum-dark hover:bg-quantum-light/10"
                >
                  View Details <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-quantum text-quantum hover:bg-quantum hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
