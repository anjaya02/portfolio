"use client";

import wavepassImage from "../assets/wavepass.png";
import classImage from "../assets/class.png";
import churnImage from "../assets/churn.png";
import digitalStockImage from "../assets/digitalstock.jpeg";
import taskbasedImage from "../assets/Taskbased.png";
import employeeImage from "../assets/employee.jpg";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Task Manager Application",
    description:
      "Full-stack task management web application with JWT authentication, real-time updates, and comprehensive CRUD operations. Features advanced filtering, sorting, due date management with overdue detection, and responsive glassmorphism design.",
    image: taskbasedImage.src,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Vite",
      "Docker",
    ],
    githubUrl: "https://github.com/anjaya02/task-based-web-app",
    liveUrl: "https://task-based-web-app.vercel.app/",
  },
  {
    title: "Employee Attendance & Tasks App",
    description:
      "Flutter-based mobile application for employee attendance tracking and daily task management. Features check-in/check-out functionality, real-time attendance status, task creation with priorities and due dates, and local data persistence using SharedPreferences.",
    image: employeeImage.src,
    technologies: [
      "Flutter",
      "Dart",
      "SharedPreferences",
      "Material Design",
      "Cross-platform",
    ],
    githubUrl: "https://github.com/anjaya02/employee-attendance-tasks-app",
  },
  {
    title: "WavePass Ticketing System",
    description:
      "Built a real‑time boat ride ticketing app with vendor/customer roles, live analytics, and concurrency‑safe purchases.",
    image: wavepassImage.src,
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/anjaya02/wavepass-ticketing-system",
  },
  {
    title: "Grade Classification Calculator",
    description:
      "Predicts final degree classifications for CS students: weighted grade calc, automatic exclusion of the lowest optional module, and responsive UI.",
    image: classImage.src,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/anjaya02/grade-calculator",
    liveUrl: "https://iit-degree-class.vercel.app/",
  },
  {
    title: "Customer Churn Prediction System",
    description:
      "ML project that flags customers likely to churn (Telco dataset) so businesses can act before it's too late.",
    image: churnImage.src,
    technologies: [
      "Python",
      "scikit-learn",
      "imbalanced-learn",
      "Flask",
      "HTML/CSS",
    ],
    githubUrl: "https://github.com/anjaya02/churn_project",
  },
  {
    title: "DigitalStock POS System",
    description:
      "Mobile POS for small Sri Lankan shops — built for bakeries, stationery vendors, and lunch stalls. Features include real-time & offline sales entry, LankaQR/Cash/Card tracking, auto stock updates, PDF receipts, and per-user data security.",
    image: digitalStockImage.src,
    technologies: ["Flutter", "Supabase", "Provider", "PDF/Print"],
    githubUrl: "https://github.com/anjaya02/digitalstock",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-enhanced">
            A selection of recent work that highlights my skill set and passion
            for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group glass-card glass-card-hover card-hover-lift overflow-hidden border-0 stagger-${Math.min((index % 5) + 1, 5)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0 relative">
                <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                  {/* Floating tech badges on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/90 dark:bg-black/90 px-2 py-1 rounded-md backdrop-blur-sm">
                      <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
                        {project.technologies[0]}
                      </span>
                    </div>
                  </div>

                  {/* Project number indicator */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-purple-500/90 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </CardTitle>

                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced technology badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 stagger-${techIndex + 1}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn glass-card glass-card-hover border-purple-500/30 hover:border-purple-500/60 text-purple-600 dark:text-purple-400"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 btn-primary-enhanced"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/30 rounded-lg transition-all duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="glass-card glass-card-hover border-purple-500/50 text-purple-600 dark:text-purple-400 hover:text-white px-8 py-3 rounded-full font-medium"
            asChild
          >
            <a
              href="https://github.com/anjaya02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
