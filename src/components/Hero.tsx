'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent-teal opacity-20"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-hero font-bold text-text-light mb-4 drop-shadow-lg"
          style={{
            textShadow: '0 0 40px rgba(34, 211, 238, 0.5)',
          }}
          variants={itemVariants}
        >
          Hi, I'm <span className="gradient-text">Venkatasai</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-subheading font-semibold text-gray-300 mb-8"
          variants={itemVariants}
        >
          B.Tech AIML Graduate | Aspiring SDE & AI Engineer
        </motion.p>

        <motion.p
          className="text-body-lg text-muted mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Building Intelligent Web Solutions with Python, Django, and Machine Learning. Based in Hyderabad.
        </motion.p>

        {/* Profile Photo */}
        <motion.div
          className="mb-12 flex justify-center"
          variants={itemVariants}
        >
          <motion.div
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-accent-teal overflow-hidden shadow-glow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-accent-indigo to-accent-teal flex items-center justify-center">
              <span className="text-4xl md:text-5xl">👨‍💻</span>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-accent-teal text-primary-dark font-bold rounded-lg hover:shadow-glow-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(34, 211, 238, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border-2 border-accent-indigo text-text-light font-bold rounded-lg hover:bg-accent-indigo hover:text-primary-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown className="text-accent-teal text-2xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
