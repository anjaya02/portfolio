"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

interface Edu {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  achievements: string[];
}

const education: Edu[] = [
  {
    degree: "Bachelor of Science (Honours) in Computer Science",
    institution: "University of Westminster",
    duration: "2023 ‑ 2028",
    description:
      "Studied core areas including software engineering, data structures, algorithms, AI, OOP, cybersecurity, and full‑stack development with hands‑on projects.",
    achievements: ["Batch Representative L4/L5"],
  },
  {
    degree: "Physical Science Stream",
    institution: "Nalanda College, Colombo 10",
    duration: "2019 ‑ 2022",
    description:
      "Completed the rigorous Sri Lanka G.C.E. Advanced Level (Physical Science Stream), emphasizing analytical thinking, experimental skills, and quantitative problem-solving in mathematics, physics, and chemistry.",
    achievements: ["Combined Mathematics ‑ B", "Chemistry ‑ C", "Physics ‑ S"],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 px-4 bg-gray-100/70 dark:bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My educational background and continuous learning journey.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <Card
              key={edu.degree}
              className="group overflow-hidden border border-transparent bg-white/80 dark:bg-slate-900/50 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:border-purple-500/40"
            >
              <CardContent className="p-8 flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      {edu.duration}
                    </div>
                  </div>

                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                    {edu.institution}
                  </p>

                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.achievements.map((ach) => (
                      <span
                        key={ach}
                        className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 rounded-full text-xs"
                      >
                        {ach}
                      </span>
                    ))}
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
