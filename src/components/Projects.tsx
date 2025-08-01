
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
      title: "Network Traffic Analyzer – Classification of Network Attacks",
      description: "Designed a Random Forest-based classifier to detect and categorize various types of network attacks from packet data.",
      detailedDescription: "This comprehensive network security project involved developing a sophisticated machine learning pipeline for real-time network threat detection. The system processes raw packet data captured through Wireshark, extracting key features such as packet size, protocol types, connection duration, and traffic patterns. The Random Forest classifier was trained on a diverse dataset containing normal traffic and various attack types including DDoS, port scanning, and intrusion attempts. The model achieved over 90% accuracy across different attack categories. Additionally, I built an interactive dashboard using Plotly and Streamlit that provides real-time visualization of network traffic, threat alerts, and detailed classification reports with confidence scores.",
      tags: ["Python", "Random Forest", "Scikit-learn", "Wireshark", "Security"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Security"
    },
    {
      title: "Lichen Image Classification Using Transfer Learning",
      description: "Applied pre-trained CNNs to classify lichen species from raw image datasets using advanced transfer learning techniques.",
      detailedDescription: "This biodiversity research project focuses on automated identification of lichen species using computer vision. I implemented transfer learning with pre-trained models including ResNet50, VGG16, and EfficientNet, fine-tuning them on a custom dataset of over 10,000 lichen images across 50+ species. To address class imbalance, I employed advanced data augmentation techniques including rotation, scaling, color jittering, and mixup. The final ensemble model achieved 94% accuracy on the test set. The research contributes to ecological monitoring and biodiversity assessment, with the paper currently under review for publication in the Journal of Computer Science and Agriculture. The model is being integrated into a mobile app for field researchers.",
      tags: ["Python", "TensorFlow", "CNN", "Transfer Learning", "AI"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "AI"
    },
    {
      title: "Brain Tumor Segmentation and Classification",
      description: "Designed a 3D CNN to classify brain tumors from MRI scan volumes with integrated YOLOv5 for precise segmentation.",
      detailedDescription: "This medical imaging project combines 3D convolutional neural networks with object detection for comprehensive brain tumor analysis. The system processes multi-modal MRI scans (T1, T1ce, T2, FLAIR) to classify tumor types (glioma, meningioma, pituitary) and perform precise segmentation. I implemented a custom 3D U-Net architecture for tumor segmentation, achieving a Dice coefficient of 0.87 on the BraTS dataset. The YOLOv5 integration enables real-time tumor detection and localization. The model was validated on benchmark datasets including BraTS 2020 and TCGA, demonstrating robust performance across different imaging protocols. The system includes uncertainty quantification to provide confidence measures for clinical decision support.",
      tags: ["Python", "3D CNN", "YOLOv5", "PyTorch", "Medical"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Medical"
    },
    {
      title: "Plant Leaf Disease Detection",
      description: "Developed CNN algorithms to detect diseases in potato and tomato plants using computer vision techniques.",
      detailedDescription: "This agricultural AI project focuses on early detection of plant diseases to improve crop yield and reduce pesticide usage. I developed specialized CNN architectures to identify common diseases in potato plants (early blight, late blight, healthy) and tomato plants (bacterial spot, early blight, late blight, leaf mold, septoria leaf spot, spider mites, target spot, yellow leaf curl virus, mosaic virus, healthy). The system uses a multi-stage approach: first detecting the plant type, then applying disease-specific classifiers. Data augmentation techniques simulate various lighting conditions, angles, and disease progression stages. The model achieved 96% accuracy on potato disease detection and 93% on tomato diseases. I also implemented a mobile application using TensorFlow Lite for real-time field diagnosis, helping farmers make informed decisions about treatment strategies.",
      tags: ["Python", "CNN", "TensorFlow", "Computer Vision", "Agriculture"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "AI"
    },
    {
      title: "LoRa Signal Classification using CNN",
      description: "Built a CNN to classify LoRa signal types by transforming time-series data into spectrograms.",
      detailedDescription: "This IoT and signal processing project develops intelligent classification systems for LoRa (Long Range) wireless communications. The system converts time-series LoRa signal data into spectrograms using Short-Time Fourier Transform (STFT), creating visual representations that capture both frequency and temporal characteristics. I designed a custom CNN architecture optimized for spectrogram analysis, incorporating attention mechanisms to focus on discriminative frequency patterns. The model classifies different LoRa spreading factors (SF7-SF12), bandwidths, and coding rates with 98% accuracy. Hyperparameter optimization using Bayesian optimization improved performance by 15%. The system also detects signal interference and estimates signal quality metrics. This work contributes to adaptive LoRa networks that can automatically optimize transmission parameters based on channel conditions.",
      tags: ["Python", "CNN", "LoRa", "Signal Processing", "AI"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "AI"
    },
    {
      title: "LHC Particle Collision Simulation (Ongoing)",
      description: "Experimenting with Physics-Informed Neural Networks and GANs to simulate particle interactions in 3D space.",
      detailedDescription: "This cutting-edge physics simulation project combines deep learning with high-energy particle physics to model Large Hadron Collider (LHC) collision events. I'm developing Physics-Informed Neural Networks (PINNs) that incorporate fundamental physics laws (conservation of energy, momentum, charge) as constraints during training. The system uses Generative Adversarial Networks (GANs) to generate realistic particle collision events, learning from actual LHC data patterns. The 3D simulation environment models particle trajectories, decay processes, and detector responses using PyTorch and custom CUDA kernels for GPU acceleration. Current work focuses on simulating Higgs boson production and decay channels, with the goal of accelerating Monte Carlo simulations used in particle physics research. The project collaborates with CERN researchers and aims to reduce computational time for physics simulations by 100x while maintaining scientific accuracy.",
      tags: ["Python", "Physics-Informed NN", "GAN", "PyTorch", "CUDA", "Physics"],
      image: "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?auto=format&fit=crop&q=80&w=800",
      link: "#",
      category: "Physics"
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="content-section bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">Research Projects</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A showcase of my technical projects spanning machine learning, computer vision, network security, and signal processing, demonstrating practical applications of AI and data science methodologies.
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
