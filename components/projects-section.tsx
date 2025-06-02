"use client";

import wavepassImage from "../assets/wavepass.png";
import classImage from "../assets/class.png";
import churnImage from "../assets/churn.png";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "WavePass Ticketing System",
      description:
        "Built a real-time boat ride ticketing app with vendor/customer roles, live analytics (WebSockets + Chart.js), and concurrency-safe purchases using async mutex. Designed with a responsive UI and a consumer-producer architecture.",
      // point to the actual WavePass screenshot
      image: wavepassImage.src,
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      githubUrl: "https://github.com/anjaya02/wavepass-ticketing-system",
      liveUrl: "#", 
    },
    {
      title: "Grade Classification Calculator",
      description:
        "Developed a web tool to help CS and SE undergraduates at IIT predict final degree classifications. Features weighted grade calculations, automatic exclusion of the lowest optional module, and a responsive, modern UI.",
      // point to the actual “class” screenshot
      image: classImage.src,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/anjaya02/grade-calculator",
      liveUrl: "https://iit-degree-class.vercel.app/",
    },
    {
      title: "Customer Churn Prediction System",
      description: `
Proud to share a hands on ML project where I built a Customer Churn Prediction System based on the Telco dataset. The goal? To identify customers who are likely to leave the service helping businesses take proactive action to retain them.
      `.trim(),
      // point to the actual “churn” screenshot
      image: churnImage.src,
      technologies: ["Python", "pandas", "scikit-learn", "imbalanced-learn", "Flask", "HTML/CSS"],
      githubUrl: "https://github.com/anjaya02/churn_project",
      liveUrl: "#", 
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-white mb-3">
                  {project.title}
                </CardTitle>

                {/* Full description shows with whitespace preserved */}
                <p className="text-gray-400 mb-4 whitespace-pre-line">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        project.githubUrl === "#" ? "opacity-50 cursor-not-allowed" : ""
                      }
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        project.liveUrl === "#" ? "opacity-50 cursor-not-allowed" : ""
                      }
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
