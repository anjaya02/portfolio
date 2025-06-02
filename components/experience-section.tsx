"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Trainee Software Engineer",
      company: "Sri Lanka Telecom",
      duration: "July 2024 – Present",
      description:
        "Working as a Trainee Software Engineer on internal web/mobile projects. Contributing to both the full-stack and mobile codebases, while collaborating within an Agile team environment.",
      achievements: [
        "Developed internal applications using Flutter (mobile) and PHP (web).",
        "Participated in Agile sprint planning, stand-ups, and code reviews.",
        "Integrated RESTful APIs to enable dynamic data interaction and functionality.",
      ],
      technologies: ["Flutter", "PHP", "RESTful APIs", "React.js"],
    },
    // In the future, add more etries here for new roles/companies
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey and the impact I've made so far.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <Briefcase className="h-8 w-8 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-purple-300">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-purple-400 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start"
                            >
                              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
