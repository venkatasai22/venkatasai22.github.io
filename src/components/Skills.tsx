'use client';

import { motion } from 'framer-motion';
import {
  FiCode,
  FiDatabase,
  FiTrendingUp,
  FiGitBranch,
  FiTerminal,
  FiCpu,
} from 'react-icons/fi';

const skillsData = [
  {
    category: 'Programming',
    icon: FiCode,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 70 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    category: 'Backend & Databases',
    icon: FiDatabase,
    skills: [
      { name: 'Django', level: 85 },
      { name: 'REST APIs', level: 80 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
  {
    category: 'AI/ML & Data',
    icon: FiCpu,
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'Data Processing', level: 85 },
      { name: 'Machine Learning', level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: FiTerminal,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Linux', level: 80 },
      { name: 'Docker', level: 70 },
    ],
  },
  {
    category: 'Concepts & Practices',
    icon: FiTrendingUp,
    skills: [
      { name: 'OOP', level: 85 },
      { name: 'Agile/SDLC', level: 80 },
      { name: 'SQL & Databases', level: 85 },
    ],
  },
  {
    category: 'ITSM & Workflow',
    icon: FiGitBranch,
    skills: [
      { name: 'Incident Management', level: 75 },
      { name: 'Workflow Design', level: 75 },
      { name: 'Process Automation', level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-heading-lg font-bold text-text-light mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, categoryIndex) => {
            const IconComponent = skillCategory.icon;
            return (
              <motion.div
                key={categoryIndex}
                className="bg-secondary-dark rounded-lg p-6 hover:shadow-glow transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-3 bg-accent-indigo/20 rounded-lg"
                    whileHover={{ rotate: 10 }}
                  >
                    <IconComponent className="text-accent-teal text-2xl" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-text-light">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-mono text-sm text-accent-teal">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary-dark rounded-full overflow-hidden border border-accent-indigo/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-teal to-accent-indigo"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'OOP & Design Patterns', items: ['Inheritance', 'Polymorphism', 'Encapsulation'] },
            { title: 'Web Frameworks', items: ['Django', 'REST Framework', 'FastAPI'] },
            { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL'] },
            { title: 'Dev Tools', items: ['VS Code', 'Git', 'Linux/Ubuntu'] },
          ].map((group, index) => (
            <motion.div
              key={index}
              className="bg-secondary-dark p-4 rounded-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm font-bold text-accent-teal mb-3">{group.title}</p>
              <div className="space-y-1">
                {group.items.map((item, i) => (
                  <p key={i} className="text-xs text-muted">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
