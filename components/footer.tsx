"use client"

import { Github, Linkedin, Facebook, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/anjaya02", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anjaya02/", label: "LinkedIn" },
    { icon: Facebook, href: "https://facebook.com/Anjaya.induwara1", label: "Facebook" },
    { icon: Mail, href: "mailto:anjayainduwara@gmail.com", label: "Email" },
  ]

  return (
    <footer className="py-12 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Anjaya Induwara
            </h3>
            <p className="text-gray-400 mt-2">Building the future, one line of code at a time.</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 hover:bg-purple-500/20 rounded-lg transition-all duration-300 hover:scale-110 group"
                  aria-label={link.label}
                >
                  <Icon className="h-6 w-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Anjaya Induwara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
