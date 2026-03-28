'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'venkatsaipedduri@gmail.com',
      link: 'mailto:venkatsaipedduri@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 9392567391',
      link: 'tel:+919392567391',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Hyderabad, Telangana',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/venkatasaipedduri-358036304',
      color: 'hover:text-accent-indigo',
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-accent-teal',
    },
    {
      icon: FiMail,
      name: 'Email',
      url: 'mailto:venkatsaipedduri@gmail.com',
      color: 'hover:text-accent-teal',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 bg-primary-dark">
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent-teal mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-text-light mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary-dark border border-muted/20 rounded-lg text-text-light focus:outline-none focus:border-accent-teal transition-colors"
                  placeholder="Your Name"
                  whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-text-light mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary-dark border border-muted/20 rounded-lg text-text-light focus:outline-none focus:border-accent-teal transition-colors"
                  placeholder="your@email.com"
                  whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-text-light mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary-dark border border-muted/20 rounded-lg text-text-light focus:outline-none focus:border-accent-teal transition-colors resize-none"
                  placeholder="Your message..."
                  whileFocus={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-3 bg-accent-teal text-primary-dark font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-glow-lg transition-all"
                whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(34, 211, 238, 0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend /> Send Message
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  className="p-4 bg-success-green/20 border border-success-green text-success-green rounded-lg text-center text-sm font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary-dark rounded-lg hover:shadow-glow transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-accent-indigo/20 rounded-lg h-fit">
                      <IconComponent className="text-accent-teal text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-light">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted hover:text-accent-teal transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="border-t border-muted/20"></div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold text-text-light mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-secondary-dark rounded-lg text-text-light transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      <IconComponent size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Message */}
            <div className="p-6 bg-gradient-to-br from-accent-indigo/20 to-accent-teal/20 rounded-lg border border-accent-indigo/30">
              <p className="text-text-light font-semibold mb-2">
                Ready to work together?
              </p>
              <p className="text-muted text-sm">
                I'm always excited to hear about new projects and opportunities. Feel free to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
