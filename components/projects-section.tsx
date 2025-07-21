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
    <section
      id="projects"
      className="py-20 px-4 bg-gray-100/70 dark:bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of recent work that highlights my skill set and passion
            for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="group overflow-hidden border border-transparent bg-white/80 dark:bg-slate-900/50 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:border-purple-500/40"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent dark:from-slate-900/80" />
                </div>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                  {p.title}
                </CardTitle>
                <p className="text-gray-700 dark:text-gray-400 text-sm whitespace-pre-line">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-500 dark:bg-purple-500/20 dark:text-purple-300"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-500 hover:bg-purple-500 hover:text-white disabled:opacity-40"
                    disabled={!p.githubUrl}
                    asChild
                  >
                    {p.githubUrl ? (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-1" /> Code
                      </a>
                    ) : (
                      <span className="flex items-center">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </span>
                    )}
                  </Button>

                  {p.liveUrl ? (
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      asChild
                    >
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" /> Live
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" disabled className="disabled:opacity-40">
                      <ExternalLink className="h-4 w-4 mr-1" /> Live
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
