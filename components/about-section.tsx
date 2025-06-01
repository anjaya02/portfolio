"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I specialize in React, Next.js, and modern JavaScript
              frameworks. I believe in writing clean, maintainable code and creating exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through blog posts and community talks.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Code className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Clean Code</h3>
                    <p className="text-gray-400">Writing maintainable and scalable solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Palette className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">UI/UX Design</h3>
                    <p className="text-gray-400">Creating beautiful and intuitive interfaces</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <Zap className="h-6 w-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Performance</h3>
                    <p className="text-gray-400">Optimizing for speed and efficiency</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
