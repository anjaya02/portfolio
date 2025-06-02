"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Science (Honours) in Computer Science",
      institution: "University of Westminster",
      duration: "2023 - 2028",
      description:
        "Studied core areas including software engineering, data structures, algorithms, AI, cybersecurity, and full-stack development with hands-on projects.",
      achievements: [
        "Batch Representative L5/L6",
        // "Computer Science Award", "Senior Project Excellence"
      ],
    },
    {
      degree: "Physical Science Stream",
      institution: "Nalanda College, Colombo 10",
      duration: "2019–2022",
      description:
        "Combined Mathematics - B: Strong performance in advanced mathematical problem-solving and analytical reasoning. " +
        "Chemistry - C: Solid understanding of chemical principles, reactions, and practical laboratory skills. " +
        "Physics - S: Basic grasp of physics fundamentals including mechanics and electricity, with room for improvement.",
      achievements: [
        "Combined Mathematics - B",
        "Chemistry - C",
        "Physics - S",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My educational background and continuous learning journey.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-purple-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    <p className="text-xl text-purple-300 mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 mb-4">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <span
                          key={achievementIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
