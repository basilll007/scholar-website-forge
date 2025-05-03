
import React from 'react';
import { BookOpen, Award, Lightbulb, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-8 w-8 text-quantum-accent" />,
      title: "Competitive Achievements",
      description: "Earned medals and certifications in international competitions, recognized with early university admits based on exceptional academic performance."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-quantum-accent" />,
      title: "Advanced Research",
      description: "Completed hands-on research projects in quantum physics, artificial intelligence, and computational methods with notable results."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-quantum-accent" />,
      title: "Unique Perspective",
      description: "Integrate Tamil philosophical principles with modern physics, creating a distinctive approach to scientific inquiry and discovery."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-quantum-accent" />,
      title: "Academic Excellence",
      description: "Maintained exceptional academic standing while pursuing advanced coursework and independent research initiatives."
    }
  ];

  return (
    <section id="about" className="content-section bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a dedicated researcher exploring the fascinating connections between quantum physics, artificial intelligence, and ancient philosophical wisdom. My work aims to bridge these seemingly disparate fields to create new frameworks for understanding our complex universe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-gradient border-none shadow-md hover:shadow-lg transition-shadow">
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
        
        <div className="mt-16 bg-quantum-light/5 p-8 rounded-lg border border-quantum-light/20">
          <div className="quote-box mx-auto max-w-3xl">
            <p className="text-lg">
              "The universe reveals itself through patterns that transcend disciplines. In the dialogue between ancient wisdom and modern science lies a pathway to profound discovery."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
