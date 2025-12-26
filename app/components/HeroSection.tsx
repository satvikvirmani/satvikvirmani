"use client";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Asymmetric Layout */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Side - Oversized Typography */}
          <motion.div
            className="col-span-12 lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {/* Pixel Badge */}
              <motion.div
                className="inline-block px-4 py-2 border border-[#00f0ff] relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-[#00f0ff] opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="relative z-10 font-mono text-sm text-[#00f0ff] tracking-wider">
                  ML / DL SPECIALIST
                </span>
              </motion.div>

              {/* Hero Title with unconventional line breaks */}
              <h1
                className="relative"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-lg)',
                  lineHeight: '1.1',
                  fontWeight: '700',
                  letterSpacing: '-0.02em',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Building
                </motion.div>
                <motion.div
                  className="ml-12 lg:ml-24"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-[#00f0ff] via-[#b444ff] to-[#ff006e] bg-clip-text text-transparent">
                    Intelligent
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Systems
                </motion.div>
              </h1>

              {/* Description */}
              <motion.p
                className="max-w-xl text-lg text-muted-foreground leading-relaxed ml-0 lg:ml-12"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Software Developer specializing in Machine Learning, Deep Learning,
                and cutting-edge web applications. Transforming complex data into
                intelligent solutions with exceptional UX.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <a
                  href="#projects"
                  className="group relative px-8 py-4 bg-foreground text-background overflow-hidden transition-all hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] via-[#b444ff] to-[#ff006e] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 font-medium">View Projects</span>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border border-foreground hover:bg-foreground/5 transition-colors"
                >
                  <span className="font-medium">Get in Touch</span>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Abstract Visual */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Distorted Grid */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto opacity-40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="50%" stopColor="#b444ff" />
                    <stop offset="100%" stopColor="#ff006e" />
                  </linearGradient>
                </defs>
                {/* Grid lines with distortion */}
                {[...Array(10)].map((_, i) => (
                  <path
                    key={`v-${i}`}
                    d={`M ${40 * i} 0 Q ${40 * i + Math.sin(i) * 20} 200 ${40 * i} 400`}
                    stroke="url(#gridGradient)"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />
                ))}
                {[...Array(10)].map((_, i) => (
                  <path
                    key={`h-${i}`}
                    d={`M 0 ${40 * i} Q 200 ${40 * i + Math.cos(i) * 20} 400 ${40 * i}`}
                    stroke="url(#gridGradient)"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                  />
                ))}
                {/* Neural nodes */}
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={`node-${i}`}
                    cx={50 + (i * 37) % 300}
                    cy={50 + (i * 73) % 300}
                    r="3"
                    fill="#00f0ff"
                    opacity="0.6"
                  />
                ))}
              </svg>

              {/* Handcrafted element - imperfect circle */}
              <motion.div
                className="absolute top-1/4 right-0 w-32 h-32 border-2 border-[#ff006e] rounded-full"
                style={{
                  borderRadius: '47% 53% 45% 55% / 52% 48% 52% 48%',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#resume"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-mono">SCROLL</span>
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}
