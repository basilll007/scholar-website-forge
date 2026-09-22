import React from 'react';
import { BookOpen, Award, GraduationCap, Users, Dna, Stethoscope, FlaskConical, School, Briefcase, Code, FileCode } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  const education = [
    {
      degree: "M.S. in Applied Artificial Intelligence",
      institution: "Purdue University Northwest",
      period: "2025—Expected 2027",
      icon: <GraduationCap className="h-6 w-6 text-quantum-accent" />
    },
    {
      degree: "B.E. in Computer Science & Engineering",
      institution: "Kamaraj College of Engineering and Technology",
      period: "2020—2024",
      icon: <BookOpen className="h-6 w-6 text-quantum-accent" />
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-quantum-accent" />,
      title: "Gold Medalist, Anna University",
      description: "Ranked 1st of ~1,000 graduates; First Class with Distinction (87%)."
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-quantum-accent" />,
      title: "Award-Winning Researcher",
      description: "1st place, BioNLP 2026 Shared Task; 2nd place, OmniRNA Discovery Challenge, ECML PKDD."
    },
    {
      icon: <Users className="h-8 w-8 text-quantum-accent" />,
      title: "Senior Under Officer, NCC",
      description: "Led a cadet battalion; recognized as Best Cadet for discipline and crisis management."
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-quantum-accent" />,
      title: "Founder, Applied AI Club",
      description: "Built a student-led AI community at Purdue Northwest, organizing workshops and events."
    }
  ];

  const researchInterests = [
    {
      icon: <Dna className="h-8 w-8 text-quantum-accent" />,
      field: "RNA Biology & Computational Genomics",
      description: "RNA inverse design, epitranscriptomic survival prediction, and spatial transcriptomics of cell–cell communication."
    },
    {
      icon: <FlaskConical className="h-8 w-8 text-quantum-accent" />,
      field: "Biomedical AI",
      description: "Multimodal biomedical retrieval and NLP for structuring scientific literature and clinical knowledge."
    }
  ];

  const experience = [
    {
      position: "Graduate Research Assistant",
      company: "Purdue University Northwest — Advisor: Dr. Keyuan Jiang",
      period: "Sep 2025 – Present",
      icon: <FileCode className="h-6 w-6 text-quantum-accent" />,
      description: "Building AI-driven systems for biomedical knowledge extraction from PubMed and ClinicalTrials.gov, including mApIt and hybrid author name disambiguation.",
    },
    {
      position: "Research Trainee",
      company: "Mayo Clinic — Collaborative Project with PNW",
      period: "2025 – Present",
      icon: <Stethoscope className="h-6 w-6 text-quantum-accent" />,
      description: "Building clinical decision-support tools: a Flutter/Firebase care-coordination app and a remote patient monitoring platform for congestive heart failure.",
    },
    {
      position: "AI/ML Intern",
      company: "Rarelife Solutions",
      period: "May 2026 – Present",
      icon: <Code className="h-6 w-6 text-quantum-accent" />,
      description: "Building production AI/ML platforms for pharma clients, including a competitive intelligence tool over ClinicalTrials.gov and OpenFDA data.",
    },
    {
      position: "AI Researcher (Computer Vision)",
      company: "H1 Enterprise",
      period: "Nov 2024 – Jun 2025",
      icon: <Briefcase className="h-6 w-6 text-quantum-accent" />,
      description: "Developed deep learning models for plant disease detection from leaf images, optimized for efficient inference in the field.",
    },
  ];

  return (
    <section id="about" className="content-section bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            I'm a graduate researcher working at the intersection of RNA biology, computational genomics, and biomedical AI at Purdue University Northwest. My work spans RNA inverse design, epitranscriptomic survival prediction, and multimodal biomedical retrieval — building computational methods that are shaped by biological structure, not just fitted to biological data. I'm seeking a PhD to push this rigor further.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Educational Journey</h3>
        <div ref={educationRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-md hover:shadow-lg transition-all duration-700 transform ${
                educationVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {edu.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-gray-700 mb-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-center">Professional Experience</h3>
        <div ref={experienceRef} className="grid md:grid-cols-2 gap-6 mb-16">
          {experience.map((exp, index) => (
            <Card 
              key={index} 
              className={`border-none shadow-md hover:shadow-lg transition-all duration-700 transform ${
                experienceVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-50 rounded-full">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{exp.position}</h3>
                    <p className="text-quantum-accent font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Honors & Leadership</h3>
        <div ref={achievementsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`card-gradient border-none shadow-md hover:shadow-lg transition-all duration-700 transform ${
                achievementsVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-6 text-center">Research Interests</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {researchInterests.map((interest, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-50 rounded-full">
                    {interest.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{interest.field}</h3>
                  <p className="text-gray-600 text-sm">{interest.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-quantum-light/5 p-8 rounded-lg border border-quantum-light/20">
          <div className="quote-box mx-auto max-w-3xl">
            <p className="text-lg italic">
              "I'm seeking a PhD to build rigorous computational methods that are shaped by biological structure rather than merely fitted to biological data."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
