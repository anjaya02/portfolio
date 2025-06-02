"use client"

import { motion, type Variants } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiPython,
  SiFirebase,
  SiJupyter,
  SiPhp,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiFigma,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { TbBrandVscode } from "react-icons/tb"

/**
 * Map a skill name to its corresponding icon component.
 */
const iconMap = {
  // Front-end
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,

  // Back-end & Databases
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Python: SiPython,
  PHP: SiPhp,
  SQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  GraphQL: SiGraphql,

  // Tools & Others
  Git: SiGit,
  Docker: SiDocker,
  AWS: FaAws,
  "VS Code": TbBrandVscode,
  "Jupyter Notebook": SiJupyter,
  Postman: SiPostman,
  Figma: SiFigma,
} as const

type SkillName = keyof typeof iconMap

interface Skill {
  name: SkillName
}

// Gentle waving animation for every icon
const waveVariants: Variants = {
  wave: {
    rotate: [0, -10, 10, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
}

export default function SkillsSection() {
  const skillCategories: {
    title: string
    skills: Skill[]
  }[] = [
    {
      title: "Frontend",
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "PHP" },
        { name: "SQL" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Firebase" },
        { name: "GraphQL" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git" },
        { name: "Docker" },
        { name: "AWS" },
        { name: "VS Code" },
        { name: "Jupyter Notebook" },
        { name: "Postman" },
        { name: "Figma" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, i) => {
                  const Icon = iconMap[skill.name]
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-gray-300"
                    >
                      <motion.span
                        variants={waveVariants}
                        animate="wave"
                        className="text-3xl"
                      >
                        <Icon />
                      </motion.span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}