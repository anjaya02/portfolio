"use client";

import { motion, type Variants } from "framer-motion";
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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

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
} as const;

type SkillName = keyof typeof iconMap;

interface Skill {
  name: SkillName;
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
};

export default function SkillsSection() {
  const skillCategories: {
    title: string;
    skills: Skill[];
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
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float-delayed" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text glow-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-enhanced">
            The technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Enhanced category header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 gradient-text">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
              </div>

              {/* Enhanced skills grid */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.name];
                  return (
                    <motion.div
                      key={skillIndex}
                      className="group glass-card glass-card-hover p-4 rounded-xl flex flex-col items-center gap-3 text-center cursor-pointer"
                      variants={waveVariants}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.1,
                        type: "spring",
                        stiffness: 300,
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="text-4xl text-purple-400 group-hover:text-blue-400 transition-colors duration-300"
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon />
                      </motion.div>

                      <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>

                      {/* Skill progress indicator */}
                      <div className="w-full bg-gray-700/50 h-1 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced statistics section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { number: "25+", label: "Technologies" },
            { number: "15+", label: "Projects Completed" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Passion for Code" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center glass-card glass-card-hover p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <motion.button
            className="btn-primary-enhanced px-8 py-3 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
