"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating
            beautiful, functional, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* biography */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              With over 3 years of experience in web development, I specialise
              in React, Next.js, and modern JavaScript frameworks. I believe in
              writing clean, maintainable code and crafting exceptional user
              experiences.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge through
              blog posts and community talks.
            </p>
          </div>

          {/* highlights */}
          <div className="grid gap-6">
            {[
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
            ].map(({ icon, title, desc, color }, i) => (
              <Card
                key={i}
                className="group relative overflow-hidden border border-transparent bg-white/70 dark:bg-slate-800/60 backdrop-blur-md transition-colors duration-300 hover:border-purple-500/40"
              >
                <span
                  className={`pointer-events-none absolute inset-0 rounded-lg group-hover:bg-${color}-500/10 transition-colors`}
                ></span>
                <CardContent className="relative p-6 flex items-start space-x-4">
                  <div className={`p-3 bg-${color}-500/20 rounded-lg shrink-0`}>
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
