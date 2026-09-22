
import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "mApIt — Biomedical Literature Intelligence",
      description: "AI platform that extracts, structures, and analyzes biomedical literature from PubMed and ClinicalTrials.gov to surface research trends and gaps.",
      detailedDescription: "mApIt is an AI-powered platform developed as part of my graduate research at Purdue University Northwest, under Dr. Keyuan Jiang. It ingests large-scale biomedical literature from PubMed and ClinicalTrials.gov, applies hybrid rule-based and LLM techniques for author name disambiguation, and structures the extracted knowledge to identify research trends and gaps. The pipeline also generates publication-landscape executive summary PDFs for pharmaceutical clients.",
      tags: ["Python", "LLMs", "NLP", "PubMed", "ClinicalTrials.gov"],
      image: "/lovable-uploads/plant_leaf.jpg",
      category: "Biomedical NLP"
    },
    {
      title: "m6A-SurvFormer",
      description: "Cross-attention model over epitranscriptomic priors for survival prediction in lung adenocarcinoma. Spotlight presentation, PharML Workshop, ECML-PKDD 2026.",
      detailedDescription: "m6A-SurvFormer incorporates biological priors — m6A epitranscriptomic modification sites — into a cross-attention architecture for robust survival prediction in lung adenocarcinoma. The work was accepted as a spotlight presentation at the PharML Workshop, ECML-PKDD 2026, demonstrating that grounding the model in known biological structure improves prediction robustness over purely data-driven baselines.",
      tags: ["PyTorch", "Transformers", "Genomics", "Survival Analysis"],
      image: "/lovable-uploads/particle.jpg",
      category: "Genomics"
    },
    {
      title: "Remote Patient Monitoring for CHF",
      description: "Clinical decision-support platform for congestive heart failure with role-based dashboards and rule-based alerting, built with Mayo Clinic.",
      detailedDescription: "Co-authored with Mayo Clinic collaborators, this prototype platform supports earlier clinical detection of congestive heart failure decompensation. It features role-based (patient/nurse/admin) dashboards and rule-based clinical alert logic for weight change and SpO2 thresholds, built with Python + FastAPI, PostgreSQL, JWT authentication, and a React Native (Expo) frontend.",
      tags: ["FastAPI", "PostgreSQL", "React Native", "Clinical AI"],
      image: "/lovable-uploads/Sin_wave.jpeg",
      category: "Clinical AI"
    },
    {
      title: "Insight — Pharma Competitive Intelligence",
      description: "Competitive intelligence tool that ingests and deduplicates competitor drug data from ClinicalTrials.gov and OpenFDA.",
      detailedDescription: "Built during my AI/ML internship at Rarelife Solutions, Insight is a production AI/ML platform for pharmaceutical clients. It ingests, deduplicates, and structures competitor drug data sourced from ClinicalTrials.gov and OpenFDA to support competitive intelligence workflows.",
      tags: ["Python", "AI/ML", "OpenFDA", "Data Pipelines"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
      category: "Biomedical AI"
    },
    {
      title: "Lichen Image Classification",
      description: "Image-based classifiers for on-site identification of lichen species in reserved forest. Published in Computers and Electronics in Agriculture (Elsevier).",
      detailedDescription: "This biodiversity research project evaluates the effectiveness of image-based classifiers for field-ready, on-site identification of lichen species. The work was published in Computers and Electronics in Agriculture (Elsevier, 2025), contributing to ecological monitoring and biodiversity assessment.",
      tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
      image: "/lovable-uploads/Lichen-forest.jpg",
      link: "https://doi.org/10.1016/j.compag.2025.110994",
      category: "Computer Vision"
    },
    {
      title: "Brain Tumor Classification — Undergraduate Research",
      description: "3D CNN for volumetric brain tumor classification from MRI scans, with YOLOv5 integration for real-time localization.",
      detailedDescription: "As undergraduate research at Anna University, I developed a volumetric segmentation model for MRI scans to classify brain tumors, integrating YOLOv5 for real-time localization. This project was also recognized with a Best Technical Presentation award at the Tech Expo Symposium.",
      tags: ["Python", "3D CNN", "YOLOv5", "PyTorch"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      category: "Medical Imaging"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="content-section bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Research Projects</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Selected projects spanning biomedical NLP, computational genomics, and clinical AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
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
                  <span className="text-lg">{project.title}</span>
                  <ArrowUpRight className="h-5 w-5 text-quantum-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 text-quantum border-quantum-light/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-quantum hover:text-quantum-dark hover:bg-quantum-light/10"
                    >
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-quantum-dark">{project.title}</DialogTitle>
                      <DialogDescription className="text-lg text-gray-600">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-quantum">Project Overview</h4>
                          <p className="text-gray-700 leading-relaxed">{project.detailedDescription}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-quantum">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="bg-blue-50 text-quantum border-quantum-light/30">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2 text-quantum">Category</h4>
                          <Badge className="bg-quantum text-white">{project.category}</Badge>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {!showAllProjects && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAllProjects(true)}
              className="bg-quantum hover:bg-quantum-dark text-white px-8 py-3 text-lg"
            >
              View All Projects
            </Button>
          </div>
        )}
        
        {showAllProjects && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAllProjects(false)}
              variant="outline"
              className="border-quantum text-quantum hover:bg-quantum hover:text-white px-8 py-3 text-lg"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
