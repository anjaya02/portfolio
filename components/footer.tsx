"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
  const links = [
    { Icon: Github, href: "https://github.com/anjaya02", label: "GitHub" },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/anjaya02/",
      label: "LinkedIn",
    },
    {
      Icon: Facebook,
      href: "https://facebook.com/Anjaya.induwara1",
      label: "Facebook",
    },
    { Icon: Mail, href: "mailto:anjayainduwara@gmail.com", label: "Email" },
  ] as const;

  return (
    <footer className="py-12 px-4 bg-gray-100/70 dark:bg-slate-900/30 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Anjaya Induwara
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex gap-4">
            {links.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg p-3 transition-transform duration-300 hover:scale-110 bg-gray-200/60 dark:bg-slate-800 group"
              >
                <Icon className="h-6 w-6 text-gray-600 group-hover:text-purple-600 dark:text-gray-400 dark:group-hover:text-purple-400" />
              </a>
            ))}
          </div>
        </div>

        {/* divider */}
        <hr className="border-t border-gray-300 dark:border-slate-700" />

        {/* copyright */}
        <p className="text-center text-gray-700 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Anjaya Induwara. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
