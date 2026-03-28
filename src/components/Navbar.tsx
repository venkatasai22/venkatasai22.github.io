'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-dark shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold text-accent-teal cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            VS | AIML <span className="text-accent-indigo">Engineer</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-text-light hover:text-accent-teal transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-secondary-dark transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {isDark ? (
                <FiSun className="text-accent-teal" size={20} />
              ) : (
                <FiMoon className="text-accent-indigo" size={20} />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-secondary-dark transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {isDark ? (
                <FiSun className="text-accent-teal" size={20} />
              ) : (
                <FiMoon className="text-accent-indigo" size={20} />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary-dark transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              {isOpen ? (
                <FiX className="text-accent-teal" size={24} />
              ) : (
                <FiMenu className="text-accent-teal" size={24} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-secondary-dark py-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="block py-2 px-4 text-text-light hover:text-accent-teal hover:bg-primary-dark transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
