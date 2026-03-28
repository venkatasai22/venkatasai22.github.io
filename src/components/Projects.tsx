'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'StudentHive Platform',
    category: 'Backend System',
    description:
      'A comprehensive backend system for student management with role-based access control, user workflows, and efficient data handling.',
    fullDescription:
      'Developed a scalable Django-based backend system for managing student information, courses, and workflows. Implemented PostgreSQL database with optimized schemas for fast query performance. Designed RESTful APIs for handling complex user workflows including registration, course enrollment, and grade management. Applied advanced debugging techniques to resolve performance bottlenecks and ensure system reliability.',
    tech: ['Django', 'PostgreSQL', 'REST APIs', 'Python'],
    image: '📚',
    github: 'https://github.com',
    demo: null,
  },
  {
    id: 2,
    title: 'Workflow-Based Task Management',
    category: 'System Design',
    description:
      'An intelligent task management system simulating incident and IT service workflows with automatic status tracking.',
    fullDescription:
      'Built a sophisticated workflow engine that automates incident management and task tracking processes. Implemented status transition logic, user assignment workflows, and resolution tracking. The system mirrors real-world IT service management processes with customizable workflows. Features include role-based task distribution, escalation policies, and audit trails for process transparency.',
    tech: ['Python', 'Workflow Design', 'Task Automation', 'ITSM'],
    image: '⚙️',
    github: 'https://github.com',
    demo: null,
  },
  {
    id: 3,
    title: 'Financial Data Processing System',
    category: 'Data Engineering',
    description:
      'ETL pipeline for processing, validating, and analyzing structured financial datasets with reusable workflows.',
    fullDescription:
      'Created a robust data processing system for handling large-scale financial datasets. Implemented data validation, transformation, and enrichment workflows. Built reusable data handling components for extraction, transformation, and loading operations. Included comprehensive error handling, logging, and data quality checks. Successfully processed and analyzed complex financial records with high accuracy.',
    tech: ['Python', 'SQL', 'Pandas', 'Data Validation'],
    image: '📊',
    github: 'https://github.com',
    demo: null,
  },
  {
    id: 4,
    title: 'ML Prediction Model',
    category: 'Machine Learning',
    description:
      'Machine learning model for predictive analytics with data preprocessing and model evaluation.',
    fullDescription:
      'Developed and trained machine learning models using TensorFlow and scikit-learn. Implemented comprehensive data preprocessing including feature engineering and normalization. Built model evaluation pipelines with cross-validation and performance metrics. Deployed model with REST API for real-time predictions. Achieved 85%+ accuracy on validation datasets.',
    tech: ['TensorFlow', 'Python', 'Scikit-learn', 'Data Science'],
    image: '🤖',
    github: 'https://github.com',
    demo: null,
  },
  {
    id: 5,
    title: 'Web Dashboard',
    category: 'Frontend',
    description:
      'Interactive web dashboard for data visualization and real-time analytics with responsive design.',
    fullDescription:
      'Built a modern, responsive web dashboard for visualizing complex datasets and metrics. Implemented interactive charts, real-time data updates, and customizable views. Designed with mobile-first approach ensuring excellent user experience across devices. Integrated with backend APIs for seamless data flow. Features include filtering, export functionality, and user preferences.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Data Viz'],
    image: '💻',
    github: 'https://github.com',
    demo: null,
  },
  {
    id: 6,
    title: 'API Microservices',
    category: 'Microservices',
    description:
      'Scalable microservices architecture with containerization and orchestration for distributed systems.',
    fullDescription:
      'Architected and implemented a microservices-based system with multiple independent services. Each service handles specific business logic with clear interfaces. Implemented service discovery, load balancing, and health checks. Containerized with Docker for consistent deployment. Includes comprehensive API documentation and error handling strategies.',
    tech: ['Docker', 'Python', 'REST APIs', 'Microservices'],
    image: '🔧',
    github: 'https://github.com',
    demo: null,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-secondary-dark">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-primary-dark rounded-lg overflow-hidden cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-accent-indigo to-accent-teal overflow-hidden flex items-center justify-center">
                <motion.div
                  className="text-6xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.image}
                </motion.div>
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent-teal text-primary-dark rounded-full hover:shadow-glow"
                    whileHover={{ scale: 1.1 }}
                    onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent-indigo text-text-light rounded-full hover:shadow-glow"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-mono text-accent-teal mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-text-light mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-accent-indigo/20 text-accent-teal rounded-full border border-accent-indigo/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 text-muted">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <motion.button
                  className="mt-4 w-full py-2 border border-accent-teal text-accent-teal rounded hover:bg-accent-teal hover:text-primary-dark transition-colors font-semibold text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-secondary-dark rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b border-muted/20">
                <h2 className="text-2xl font-bold text-text-light">
                  {selectedProject.title}
                </h2>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-primary-dark rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Category & Image */}
                <div>
                  <p className="text-sm font-mono text-accent-teal mb-4">
                    {selectedProject.category}
                  </p>
                  <div className="w-full h-64 bg-gradient-to-br from-accent-indigo to-accent-teal rounded-lg flex items-center justify-center text-8xl mb-6">
                    {selectedProject.image}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-text-light mb-2">About</h3>
                  <p className="text-body-lg text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-bold text-text-light mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent-teal/20 text-accent-teal rounded-lg border border-accent-teal/30 text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-accent-teal text-primary-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-glow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> GitHub
                  </motion.a>
                  {selectedProject.demo && (
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 border-2 border-accent-indigo text-text-light font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-indigo hover:text-primary-dark transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
