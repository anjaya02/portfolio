"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    role: "Trainee Software Engineer",
    company: "Sri Lanka Telecom",
    duration: "July 2024 – June 2025",
    description:
      "Working on internal web/mobile projects, contributing across full‑stack and mobile codebases within an Agile team.",
    achievements: [
      "Developed internal apps with Flutter (mobile) & PHP (web).",
      "Participated in Agile sprint planning, stand‑ups, and code reviews.",
      "Integrated RESTful APIs for dynamic data interaction.",
    ],
    technologies: ["Flutter", "PHP", "RESTful APIs", "React.js"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 bg-gray-100/70 dark:bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and the impact I've made so far.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card
              key={exp.role}
              className="group overflow-hidden border border-transparent bg-white/80 dark:bg-slate-900/50 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:border-purple-500/40"
            >
              <CardContent className="p-8 flex flex-col md:flex-row md:items-start md:space-x-6">
                {/* icon */}
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Briefcase className="h-8 w-8 text-purple-500" />
                  </div>
                </div>

                {/* details */}
                <div className="flex-grow space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-purple-600 dark:text-purple-400 mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" /> {exp.duration}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 pl-1">
                      {exp.achievements.map((a) => (
                        <li
                          key={a}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-purple-500 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* tech */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300 rounded-full text-xs"
                        >
                          {tech}
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
