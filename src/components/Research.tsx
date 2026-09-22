
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Research = () => {
  const researchAreas = [
    {
      id: "genomics",
      title: "RNA & Genomics",
      description: "Computational methods that connect sequence-level molecular biology to clinical outcomes, shaped by biological structure rather than fitted to data alone.",
      topics: [
        "RNA Inverse Design",
        "Epitranscriptomic Survival Prediction",
        "Spatial Transcriptomics & Cell–Cell Communication",
        "Graph-Learning Baselines (scGPT)"
      ]
    },
    {
      id: "biomedical-nlp",
      title: "Biomedical NLP",
      description: "AI systems for extracting, structuring, and retrieving knowledge from biomedical literature and clinical trial data.",
      topics: [
        "Multimodal Biomedical Retrieval",
        "Literature Mining (PubMed, ClinicalTrials.gov)",
        "Author Name Disambiguation",
        "LLM-Augmented Evidence Retrieval"
      ]
    },
    {
      id: "clinical-ai",
      title: "Clinical Decision Support",
      description: "Prototype platforms that turn patient monitoring data into earlier, actionable clinical alerts in collaboration with clinicians.",
      topics: [
        "Remote Patient Monitoring",
        "Rule-Based Clinical Alerting",
        "Role-Based Care Dashboards",
        "Care-Coordination Applications"
      ]
    }
  ];

  return (
    <section id="research" className="content-section bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Research Interests</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My research spans RNA biology, computational genomics, and biomedical AI — connecting sequence-level molecular data to clinical outcomes.
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
