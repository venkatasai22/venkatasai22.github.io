'use client';

import { motion } from 'framer-motion';
import { FiArrowUp, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-text-light mb-4">
              About <span className="gradient-text">Me</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              A passionate B.Tech AIML graduate dedicated to building intelligent web solutions. Currently exploring backend systems and machine learning applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-text-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted hover:text-accent-teal transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-text-light mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/venkatasaipedduri-358036304"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-dark text-accent-teal rounded-lg hover:text-accent-indigo transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-dark text-accent-teal rounded-lg hover:text-accent-indigo transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="mailto:venkatsaipedduri@gmail.com"
                className="p-2 bg-primary-dark text-accent-teal rounded-lg hover:text-accent-indigo transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FiMail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-muted/20 py-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm text-center md:text-left">
              © {currentYear} Pedduri Venkatasai. All rights reserved.
            </p>
            <p className="text-muted text-sm">
              Designed & Built with <span className="text-accent-teal">❤️</span> using React, Next.js & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent-teal text-primary-dark rounded-full flex items-center justify-center shadow-glow-lg hover:shadow-glow z-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}
