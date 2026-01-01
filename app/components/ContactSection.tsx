"use client";
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, SendHorizontal } from 'lucide-react';
import { MetallicDivider } from './MetallicDivider';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! This is a demo form.');
  };

  return (
    <section className="relative py-32 px-6 bg-secondary/30" id="contact">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-md)',
              lineHeight: '1.1',
              fontWeight: '700',
            }}
          >
            Let&apos;s Build
            <br />
            <span className="ml-16 bg-gradient-to-r from-[#00f0ff] via-[#b444ff] to-[#ff006e] bg-clip-text text-transparent">
              Something
            </span>
            <br />
            <span className="ml-32">Amazing</span>
          </h2>
          <MetallicDivider variant="holographic" />
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          {/* Left - Contact Form */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-mono text-muted-foreground">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-card border border-border focus:border-[#00f0ff] outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-mono text-muted-foreground">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-card border border-border focus:border-[#00f0ff] outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-mono text-muted-foreground">
                  YOUR MESSAGE
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-card border border-border focus:border-[#00f0ff] outline-none transition-colors min-h-[200px] resize-y"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="group relative px-10 py-5 bg-foreground text-background overflow-hidden flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] via-[#b444ff] to-[#ff006e] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 font-semibold">Send Message</span>
                <SendHorizontal className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              {/* Pixel decoration */}
              <div className="grid grid-cols-12 gap-1 mt-8">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 bg-gradient-to-r from-[#00f0ff] to-[#b444ff] opacity-20"
                    style={{ width: `${((i * 13 + 7) % 80) + 20}%` }}
                  />
                ))}
              </div>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8 lg:sticky lg:top-24">
              {/* Contact Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities
                  to be part of your vision. Feel free to reach out!
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 border border-border bg-card/30 hover:border-[#00f0ff] transition-colors group">
                <Mail className="text-[#00f0ff] mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <p className="text-sm font-mono text-muted-foreground mb-1">EMAIL</p>
                  <a href="mailto:aarju.sahkv@gmail.com" className="text-lg hover:text-[#00f0ff] transition-colors">
                    aarju.sahkv@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono text-muted-foreground">CONNECT WITH ME</h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/aarjushah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-border bg-card flex items-center justify-center hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="group-hover:text-[#00f0ff] transition-colors" size={24} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/aarjusah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 border border-border bg-card flex items-center justify-center hover:border-[#b444ff] hover:bg-[#b444ff]/10 transition-all group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="group-hover:text-[#b444ff] transition-colors" size={24} />
                  </motion.a>
                </div>
              </div>

              {/* Abstract decoration */}
              <div className="relative h-64 mt-12">
                <svg
                  viewBox="0 0 300 300"
                  className="w-full h-full opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="50%" stopColor="#b444ff" />
                      <stop offset="100%" stopColor="#ff006e" />
                    </linearGradient>
                  </defs>
                  {/* Abstract shapes */}
                  <circle cx="50" cy="50" r="30" fill="none" stroke="url(#contactGradient)" strokeWidth="2" />
                  <rect x="150" y="20" width="60" height="60" fill="none" stroke="url(#contactGradient)" strokeWidth="2" />
                  <polygon points="100,150 130,200 70,200" fill="none" stroke="url(#contactGradient)" strokeWidth="2" />
                  <path d="M 200 150 Q 250 150 250 200 T 200 250" fill="none" stroke="url(#contactGradient)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-12 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © 2025 Portfolio. Built with React & Motion.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#hero" className="hover:text-[#00f0ff] transition-colors">
                Home
              </a>
              <a href="#resume" className="hover:text-[#00f0ff] transition-colors">
                Resume
              </a>
              <a href="#projects" className="hover:text-[#00f0ff] transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-[#00f0ff] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
