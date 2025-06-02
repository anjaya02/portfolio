"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  logo: string;
  description: string;
}

// Logos must live in /public/logos
const certifications: Certificate[] = [
  {
    title: "REST APIs – Intermediate",
    issuer: "HackerRank",
    year: "Apr 2025",
    logo: "/logos/hackerrank.png",
    description:
      "Credential ID EEF4A5534A08 • Validates intermediate RESTful API design & implementation skills.",
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    year: "Jan 2025",
    logo: "/logos/hackerrank.png",
    description:
      "Credential ID 8943E8E62A2C • Demonstrates foundational knowledge of React.js.",
  },
  {
    title: "Introduction to Data Science",
    issuer: "LinkedIn Learning",
    year: "Jun 2023",
    logo: "/logos/linkedin-learning.png",
    description:
      "Course completion covering data-science principles, data wrangling, and basic analytics.",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 bg-gray-100/70 dark:bg-slate-900/30 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional credentials that validate my expertise and commitment
            to continuous learning.
          </p>
        </div>

        {/* Certificates */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="group overflow-hidden border border-transparent bg-white/80 dark:bg-slate-900/50 backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] hover:border-purple-500/40"
            >
              <CardContent className="p-6 text-center space-y-3">
                <Image
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  width={64}
                  height={64}
                  className="mx-auto mb-2 object-contain"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium">
                  {cert.issuer}
                </p>
                <Badge
                  variant="secondary"
                  className="bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-300"
                >
                  {cert.year}
                </Badge>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
