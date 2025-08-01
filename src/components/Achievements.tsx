import React from 'react';
import { Award, Trophy, Medal, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const achievements = [
    {
      title: "Gold Medal – Best All-Rounder",
      organization: "Kamaraj College of Engineering and Technology",
      year: "2023–2024",
      description: [
        "Recognized for excellence in academics, leadership, and extracurriculars.",
        "Awarded the institution's highest honor for all-round performance."
      ],
      icon: Medal,
      color: "bg-yellow-500"
    },
    {
      title: "Best Presentation Award – AI in Medical Imaging",
      organization: "Tech Expo Symposium",
      year: "2024",
      description: [
        "Presented a 3D CNN-based approach for brain tumor classification.",
        "Recognized for technical clarity, depth, and research contribution."
      ],
      icon: Award,
      color: "bg-blue-500"
    },
    {
      title: "Best NCC Cadet",
      organization: "National Cadet Corps (28TNBN Viruthunagar Unit)",
      year: "2023",
      description: [
        "Honored for outstanding discipline, leadership, and participation.",
        "Selected as the top cadet across multiple institutions and events."
      ],
      icon: Trophy,
      color: "bg-green-500"
    },
    {
      title: "Invited Guest Lecturer – AI & Cloud Computing",
      organization: "Kamaraj College of Engineering and Technology",
      year: "2024",
      description: [
        "Delivered a session on AI fundamentals and real-world cloud applications.",
        "Appreciated by faculty and students for engaging, insightful delivery."
      ],
      icon: Users,
      color: "bg-purple-500"
    },
    {
      title: "Smart India Hackathon – Grand Finale Participant",
      organization: "Government of India",
      year: "2024",
      description: [
        "Selected among top national teams for building a real-time AI-based network traffic analyzer.",
        "Represented the college in the national-level grand finale."
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
            🏆 Achievements & Honors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for academic excellence, leadership, and contributions to research and technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-quantum-light hidden md:block"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index} 
                    className="relative group animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
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