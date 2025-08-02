import React from 'react';
import { BookOpen, Award, GraduationCap, Activity, Users, Atom, Dna, Lightbulb, School, Briefcase, Code, Database, FileCode } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  const education = [
    {
      degree: "MS in Applied Artificial Intelligence",
      institution: "Purdue University Northwest",
      period: "2025—2027",
      icon: <GraduationCap className="h-6 w-6 text-quantum-accent" />
    },
    {
      degree: "B.E. in Computer Science",
      institution: "Kamaraj College of Engineering and Technology",
      period: "2020—2024",
      icon: <BookOpen className="h-6 w-6 text-quantum-accent" />
    },
    {
      degree: "Higher Secondary Education",
      institution: "Don Bosco Higher Secondary School",
      period: "2019—2020",
      icon: <School className="h-6 w-6 text-quantum-accent" />
    }
  ];

  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-quantum-accent" />,
      title: "Academic Excellence",
      description: "Maintained exceptional academic standing while pursuing advanced coursework and independent research initiatives."
    },
    {
      icon: <Activity className="h-8 w-8 text-quantum-accent" />,
      title: "Athletic Pursuits",
      description: "Active basketball player, applying the discipline and strategic thinking from sports to academic challenges."
    },
    {
      icon: <Users className="h-8 w-8 text-quantum-accent" />,
      title: "NCC Cadet",
      description: "Developed leadership, teamwork, and resilience as an active NCC cadet, values that translate to research collaboration."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-quantum-accent" />,
      title: "Optimistic Innovator",
      description: "Bringing an optimistic perspective to complex problems, seeking creative solutions at the intersection of disciplines."
    }
  ];

  const researchInterests = [
    {
      icon: <Atom className="h-8 w-8 text-quantum-accent" />,
      field: "AI & Quantum Physics",
      description: "Exploring how artificial intelligence can enhance our understanding of quantum phenomena and develop new computational models."
    },
    {
      icon: <Dna className="h-8 w-8 text-quantum-accent" />,
      field: "AI in Biology",
      description: "Investigating applications of machine learning in biological systems, from protein folding to genomic analysis."
    }
  ];

  const experience = [
    {
      position: "AI Engineer",
      company: "H1 Enterprise",
      period: "Nov 2024 – Jun 2025",
      icon: <FileCode className="h-6 w-6 text-quantum-accent" />,
      description: "Led R&D on AI applications in agriculture, focusing on yield prediction and pest detection. Designed and developed an industrial chatbot that enhanced client query resolution efficiency.",
    },
    {
      position: "AI Engineer",
      company: "6F Tech Consultant",
      period: "July 2024 - November 2024",
      icon: <FileCode className="h-6 w-6 text-quantum-accent" />,
      description: "Developed and deployed chatbot solutions using Python and Django. Collaborated with cross-functional teams to implement AI-powered features and ensure smooth integration with existing systems.",
    },
    {
      position: "Software Developer Associate",
      company: "AG Media",
      period: "January 2024 - June 2024",
      icon: <Code className="h-6 w-6 text-quantum-accent" />,
      description: "Developed responsive websites using WordPress for various clients. Ensured timely delivery of projects while maintaining high quality standards and client satisfaction.",
    },
    {
      position: "Data Science Intern",
      company: "Coders Cave",
      period: "August 2023",
      icon: <Database className="h-6 w-6 text-quantum-accent" />,
      description: "Explored various data science methodologies and techniques. Conducted Exploratory Data Analysis (EDA) on complex datasets and developed predictive models using machine learning algorithms.",
    },
    {
      position: "Product Owner",
      company: "Priga Solutions",
      period: "January 2023 - July 2023", 
      icon: <Briefcase className="h-6 w-6 text-quantum-accent" />,
      description: "Led a team of developers through the complete product lifecycle of the Grocy web application. Successfully launched the product, ensuring it met all specifications and user requirements.",
    },
  ];

  return (
    <section id="about" className="content-section bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            I'm a curious explorer at the intersection of artificial intelligence and fundamental sciences, currently pursuing my Master's in Applied AI at Purdue University Northwest. With a background in Computer Science and a passion for interdisciplinary research, I'm fascinated by how computational approaches can unlock new insights in quantum physics and biological systems. As both an academic and an athlete, I bring discipline, teamwork, and creative problem-solving to every challenge.
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
        
        <h3 className="text-xl font-semibold mb-6 text-center">Personal Strengths</h3>
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
              "I believe the most fascinating discoveries emerge at the boundaries between disciplines. My goal is to bridge artificial intelligence with fundamental sciences, creating tools and insights that can transform our understanding of complex systems."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
