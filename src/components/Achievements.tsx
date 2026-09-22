import React from 'react';
import { Award, Trophy, Medal, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Achievements = () => {
  const { ref: achievementsRef, isVisible: achievementsVisible } = useScrollAnimation();

  const achievements = [
    {
      title: "Graduate Research Award",
      organization: "Purdue University Northwest",
      year: "2026",
      description: [
        "Awarded for research contributions in biomedical AI and computational genomics."
      ],
      icon: Award,
      color: "bg-blue-500"
    },
    {
      title: "1st Place — BioNLP 2026 Shared Task",
      organization: "Association for Computational Linguistics",
      year: "2026",
      description: [
        "Won the MedGenVidQA shared task with an LLM-augmented BM25 retrieval system for biomedical evidence."
      ],
      icon: Trophy,
      color: "bg-green-500"
    },
    {
      title: "2nd Place — OmniRNA Discovery Challenge",
      organization: "ECML PKDD, Naples, Italy",
      year: "2026",
      description: [
        "Placed 2nd internationally for a system addressing RNA function and design."
      ],
      icon: Medal,
      color: "bg-purple-500"
    },
    {
      title: "Spotlight Presentation — PharML Workshop",
      organization: "ECML PKDD",
      year: "2026",
      description: [
        "Selected for spotlight presentation of m6A-SurvFormer, a survival-prediction model for lung adenocarcinoma."
      ],
      icon: Award,
      color: "bg-indigo-500"
    },
    {
      title: "Gold Medalist (Valedictorian)",
      organization: "Anna University (Kamaraj College of Engineering and Technology)",
      year: "2024",
      description: [
        "Ranked 1st of ~1,000 graduates; First Class with Distinction (87%)."
      ],
      icon: Medal,
      color: "bg-yellow-500"
    },
    {
      title: "National Finalist, Smart India Hackathon",
      organization: "Government of India",
      year: "2022",
      description: [
        "Selected among top national teams for rapid prototyping of AI solutions."
      ],
      icon: Trophy,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-quantum-dark mb-4">
            Achievements &amp; Honors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for research competitions, academic excellence, and leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-quantum-light hidden md:block"></div>
            
            <div ref={achievementsRef} className="space-y-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className={`relative group transition-all duration-700 transform ${
                      achievementsVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-quantum rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                    
                    <Card className="ml-0 md:ml-20 border-none shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-full ${achievement.color} text-white flex-shrink-0`}>
                            <IconComponent size={24} />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-quantum-dark mb-2">
                              {achievement.title}
                            </CardTitle>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <CardDescription className="text-lg font-medium text-quantum">
                                {achievement.organization}
                              </CardDescription>
                              <Badge variant="outline" className="bg-quantum-light/20 text-quantum border-quantum-light w-fit">
                                {achievement.year}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {achievement.description.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-quantum-accent mt-1.5 flex-shrink-0">•</span>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;