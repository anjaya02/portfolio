"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import TypewriterEffect from "@/components/ui/typewriter-effect";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20 pb-8 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl float-delayed" />
        <div className="absolute bottom-1/4 left-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl float" />
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10 px-4">
        <div className="mb-8 sm:mb-12">
          {/* Enhanced name with glow effect */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 gradient-text glow-text relative">
            Anjaya Induwara
            <div className="absolute inset-0 gradient-text blur-sm opacity-50 -z-10" />
          </h1>

          {/* Enhanced typewriter section */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 h-8 relative">
            <TypewriterEffect
              words={[
                "Full Stack Developer",
                "React.js Engineer",
                "AI/ML Enthusiast",
                "Problem Solver",
                "Digital Creator",
                "Tech Innovator",
              ]}
            />
          </div>

          {/* Enhanced description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 text-enhanced">
            Passionate about creating exceptional digital experiences through
            clean code, innovative design, and cutting-edge technologies. Let's
            build something amazing together.
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-6 sm:mb-8">
            <a
              href="https://github.com/anjaya02"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card glass-card-hover rounded-full group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/anjaya-induwara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card glass-card-hover rounded-full group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:anjayainduwara@gmail.com"
              className="p-3 glass-card glass-card-hover rounded-full group"
            >
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center mb-12 sm:mb-16 px-4 sm:px-0">
          <a
            href="https://drive.google.com/file/d/1Nq2TNu4oi7i5udlpqbB0-zxbpCXuQs4u/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-enhanced inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 magnetic text-center"
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download Resume
          </a>

          <Button
            variant="ghost"
            size="lg"
            className="glass-card glass-card-hover !border-none !border-0 text-purple-400 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-lg magnetic text-base sm:text-lg"
            onClick={scrollToAbout}
          >
            View My Work
          </Button>
        </div>

        {/* Enhanced scroll indicator - moved to relative positioning */}
        <div className="flex flex-col items-center gap-3 mt-8 sm:mt-12">
          <span className="text-sm text-gray-500 font-medium">
            Scroll to explore
          </span>
          <ChevronDown className="h-6 w-6 text-purple-400 animate-bounce" />
        </div>
      </div>

      {/* Interactive particles following mouse */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-40 h-40 bg-purple-500/5 rounded-full blur-2xl transition-all duration-1000" />
      </div>
    </section>
  );
}
