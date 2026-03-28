'use client';

import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2021 - 2025',
    title: 'B.Tech in AIML',
    description: 'SVS Group of Institutions',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Virtusa Neural Hackathon',
    description: 'Participated in ML-focused hackathon',
    type: 'hackathon',
  },
  {
    year: 'Feb 2026 - Present',
    title: 'AIML Intern',
    description: 'Labmentix - Building data processing pipelines',
    type: 'experience',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 bg-secondary-dark"
    >
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-72 h-72 rounded-lg overflow-hidden shadow-glow">
              <div className="w-full h-full bg-gradient-to-br from-accent-indigo to-accent-teal flex items-center justify-center">
                <span className="text-6xl">🎓</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-heading-md font-bold text-text-light mb-6">
              Entry-Level Software Engineer
            </h3>
            <div className="space-y-4 text-body-lg text-gray-300">
              <p>
                I'm a B.Tech AIML graduate from SVS Group of Institutions, passionate about
                building scalable web applications and intelligent systems. Based in Hyderabad, I'm
                actively seeking opportunities as a Software Development Engineer (SDE) or AI/ML Engineer.
              </p>
              <p>
                With hands-on experience in Python, Django, and data processing, I've worked on
                building backend systems, designing REST APIs, and creating data-driven applications.
                I'm also exploring ServiceNow and ITIL-based workflows.
              </p>
              <p>
                I enjoy solving complex problems, collaborating with teams, and continuously learning
                new technologies. When not coding, you'll find me gaming, watching movies, or listening to podcasts.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-muted/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-teal">3+</p>
                <p className="text-sm text-muted">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-teal">8+</p>
                <p className="text-sm text-muted">Tech Skills</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-teal">2026</p>
                <p className="text-sm text-muted">Graduate</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <motion.h3
            className="text-2xl font-bold text-text-light mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Timeline
          </motion.h3>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent-teal mt-2"></div>
                  {index !== timelineEvents.length - 1 && (
                    <div className="w-1 h-20 bg-accent-indigo/30"></div>
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-mono text-accent-teal">{event.year}</p>
                  <h4 className="text-lg font-bold text-text-light">{event.title}</h4>
                  <p className="text-muted">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
