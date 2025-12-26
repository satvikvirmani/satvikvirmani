"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, User, Brain, Palette, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Sparkles, label: 'Home' },
  { id: 'resume', icon: User, label: 'Resume' },
  { id: 'projects', icon: Brain, label: 'ML Projects' },
  { id: 'uiux', icon: Palette, label: 'UI/UX' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show nav after scrolling past hero
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-card/95 backdrop-blur-md border border-border rounded-full shadow-2xl">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative p-3 rounded-full hover:bg-secondary transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon
                    size={20}
                    className={`transition-colors ${isActive ? 'text-[#00f0ff]' : 'text-muted-foreground'
                      }`}
                  />

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 border-2 border-[#00f0ff] rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-card border border-border px-3 py-1.5 rounded text-xs font-mono whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}