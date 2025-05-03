
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Publications = () => {
  const publications = [
    {
      title: "Quantum Entanglement and Tamil Philosophical Concepts of Interconnectedness",
      journal: "Journal of Interdisciplinary Physics",
      year: 2023,
      authors: "Your Name, Collaborator One, Collaborator Two",
      abstract: "This paper explores parallels between quantum entanglement and ancient Tamil philosophical concepts of universal interconnectedness, suggesting new interpretative frameworks."
    },
    {
      title: "Neural Network Architectures Inspired by Quantum Information Processing",
      journal: "Artificial Intelligence Review",
      year: 2022,
      authors: "Your Name, Collaborator Three",
      abstract: "A novel approach to neural network design drawing inspiration from quantum information processing principles to improve pattern recognition in complex systems."
    },
    {
      title: "The Role of Observation in Quantum Systems and Tamil Epistemology",
      journal: "Philosophy of Science Quarterly",
      year: 2022,
      authors: "Your Name, Collaborator Four, Collaborator Five",
      abstract: "This research examines how the observer effect in quantum mechanics relates to Tamil epistemological frameworks concerning the nature of knowledge acquisition."
    }
  ];

  return (
    <section id="publications" className="content-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Publications</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Selected academic publications representing my contributions to the understanding of quantum physics, artificial intelligence, and philosophical frameworks.
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="border-l-4 border-l-quantum-accent hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-quantum-dark">{pub.title}</CardTitle>
                <CardDescription>
                  <span className="font-medium">{pub.journal}</span> • {pub.year} • {pub.authors}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{pub.abstract}</p>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-quantum hover:text-quantum-dark hover:bg-quantum-light/10"
                >
                  Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-quantum hover:text-quantum-dark hover:bg-quantum-light/10"
                >
                  Download <Download className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-quantum-dark hover:bg-quantum text-white">
            View Complete Publication List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
