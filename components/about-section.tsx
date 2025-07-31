"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Award, Users, Clock } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-purple-400" />,
      title: "Clean Code",
      desc: "Writing maintainable and scalable solutions",
      color: "purple",
    },
    {
      icon: <Palette className="h-6 w-6 text-sky-400" />,
      title: "UI / UX Design",
      desc: "Creating beautiful and intuitive interfaces",
      color: "sky",
    },
    {
      icon: <Zap className="h-6 w-6 text-pink-400" />,
      title: "Performance",
      desc: "Optimising for speed and efficiency",
      color: "pink",
    },
    {
      icon: <Award className="h-6 w-6 text-green-400" />,
      title: "Quality Focused",
      desc: "Delivering excellence in every project",
      color: "green",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Team Player",
      desc: "Collaborative development and communication",
      color: "blue",
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "Timely Delivery",
      desc: "Meeting deadlines without compromising quality",
      color: "yellow",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl float-delayed" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text glow-text">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-enhanced">
            I'm a passionate full-stack developer with a love for creating
            beautiful, functional, and user-friendly applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Enhanced biography section */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div className="glass-card glass-card-hover p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                My Journey
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                With over 3 years of experience in web development, I specialise
                in React, Next.js, and modern JavaScript frameworks. I believe
                in writing clean, maintainable code and crafting exceptional
                user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge
                through blog posts and community talks.
              </p>
            </div>

            {/* Professional stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Enhanced highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className={`group glass-card glass-card-hover card-hover-lift overflow-hidden !border-none stagger-${Math.min((index % 5) + 1, 5)}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  border: "none !important",
                }}
              >
                <CardContent className="relative p-6 flex flex-col items-center text-center space-y-4">
                  {/* Icon container with glow effect */}
                  <div
                    className={`p-4 bg-${highlight.color}-500/20 rounded-xl group-hover:bg-${highlight.color}-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-${highlight.color}-500/25`}
                  >
                    {highlight.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {highlight.desc}
                    </p>
                  </div>

                  {/* Animated border on hover */}
                  <div
                    className={`absolute inset-0 border-2 border-${highlight.color}-500/0 group-hover:border-${highlight.color}-500/30 rounded-lg transition-all duration-300 pointer-events-none`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced timeline section */}
        <div className="glass-card glass-card-hover p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
            My Development Philosophy
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Purpose-Driven
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every line of code serves a purpose, every feature solves a real
                problem.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Innovation
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Embracing cutting-edge technologies while maintaining stability.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Growth
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Continuous learning and improvement in craft and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
