
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Research = () => {
  const researchAreas = [
    {
      id: "quantum",
      title: "Quantum Physics",
      description: "Exploring quantum mechanics, with a focus on quantum entanglement and information theory as they relate to fundamental physical phenomena. My research examines how quantum systems might reveal deeper patterns in reality that classical physics cannot capture.",
      topics: [
        "Quantum Entanglement Applications",
        "Quantum Information Processing",
        "Foundations of Quantum Mechanics",
        "Quantum Computing Algorithms"
      ]
    },
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Developing novel machine learning architectures inspired by both quantum processes and cognitive systems. My work explores how AI can help us model complex systems and potentially bridge the gap between quantum and classical domains.",
      topics: [
        "Neural Network Architectures",
        "Quantum-Inspired Algorithms",
        "Explanable AI Systems",
        "Cognitive Computing Models"
      ]
    },
    {
      id: "interdisciplinary",
      title: "Interdisciplinary Approaches",
      description: "Creating frameworks that integrate methods and insights across disciplines. This research aims to develop new methodologies that allow for richer understanding of complex phenomena through intentional boundary-crossing.",
      topics: [
        "Cross-domain Knowledge Transfer",
        "Unified Theoretical Frameworks",
        "Methodological Innovations",
        "Conceptual Bridge Building"
      ]
    }
  ];

  return (
    <section id="research" className="content-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Research Interests</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My research sits at the intersection of several disciplines, combining rigorous scientific inquiry with philosophical depth to address fundamental questions about the nature of reality and intelligence.
          </p>
        </div>
        
        <Tabs defaultValue="quantum" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
            {researchAreas.map(area => (
              <TabsTrigger 
                key={area.id}
                value={area.id}
                className="data-[state=active]:bg-quantum data-[state=active]:text-white"
              >
                {area.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {researchAreas.map(area => (
            <TabsContent key={area.id} value={area.id}>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-semibold mb-4 text-quantum-dark">{area.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{area.description}</p>
                
                <h4 className="text-lg font-medium mb-3 text-quantum">Key Focus Areas</h4>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                  {area.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-quantum-accent mr-2 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
                
                {/* <Button
                  variant="outline"
                  className="border-quantum text-quantum hover:bg-quantum hover:text-white"
                >
                  Explore Publications
                </Button> */}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Research;
