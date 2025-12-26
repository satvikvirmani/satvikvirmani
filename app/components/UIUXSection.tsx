"use client";
import { motion } from 'framer-motion';
import { Palette, ArrowUpRight } from 'lucide-react';
import { MetallicDivider } from './MetallicDivider';

const uiuxProjects = [
  {
    title: 'Fintech Dashboard Redesign',
    type: 'Case Study',
    challenge: 'Complex financial data overwhelming users',
    solution: 'Progressive disclosure with smart data hierarchies',
    impact: '+156% user engagement, -42% support tickets',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2NzU2MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ff006e',
    tags: ['User Research', 'Information Architecture', 'Design System'],
  },
  {
    title: 'AI-Powered Learning Platform',
    type: 'Product Design',
    challenge: 'Making ML concepts accessible to beginners',
    solution: 'Interactive visualizations with gamified learning paths',
    impact: '4.8/5 rating, 200K+ active learners',
    image: 'https://images.unsplash.com/photo-1587522384446-64daf3e2689a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2NjY4MDc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ffd60a',
    tags: ['Interaction Design', 'Motion', 'React'],
  },
  {
    title: 'Healthcare Mobile App',
    type: 'UX/UI Design',
    challenge: 'Simplifying patient-doctor communication',
    solution: 'Secure messaging with smart appointment scheduling',
    impact: '94% patient satisfaction, HIPAA compliant',
    image: 'https://images.unsplash.com/photo-1630432198429-e5bebf02a377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGdyYWRpZW50fGVufDF8fHx8MTc2NjcwNjU5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00f0ff',
    tags: ['Mobile Design', 'Accessibility', 'Figma'],
  },
];

export function UIUXSection() {
  return (
    <section className="relative py-32 px-6" id="uiux">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <Palette className="text-[#ffd60a]" size={32} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-md)',
                lineHeight: '1.1',
                fontWeight: '700',
              }}
            >
              UI/UX
              <br />
              <span className="ml-12 bg-gradient-to-r from-[#ff006e] to-[#ffd60a] bg-clip-text text-transparent">
                Design Work
              </span>
            </h2>
          </div>
          <MetallicDivider variant="brushed" />
        </motion.div>

        {/* Case Studies - Bold Typography Layout */}
        <div className="space-y-32">
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="grid grid-cols-12 gap-8">
                {/* Large Image */}
                <div
                  className={`col-span-12 ${index % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-6 lg:col-start-7'
                    }`}
                >
                  <motion.div
                    className="relative group aspect-[16/10] overflow-hidden border border-border"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Hover Overlay with Grain Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-6xl font-bold opacity-20"
                          style={{ fontFamily: 'var(--font-display)', color: project.color }}
                        >
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div
                      className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 opacity-60"
                      style={{ borderColor: project.color }}
                    />
                  </motion.div>
                </div>

                {/* Content - Overlapping layout */}
                <div
                  className={`col-span-12 ${index % 2 === 0
                      ? 'lg:col-span-6 lg:col-start-6 lg:-mt-24'
                      : 'lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-24'
                    }`}
                >
                  <div className="bg-card/95 backdrop-blur-md border border-border p-8 lg:p-12 space-y-6">
                    {/* Type badge */}
                    <span
                      className="inline-block px-4 py-1.5 text-xs font-mono border"
                      style={{ borderColor: project.color, color: project.color }}
                    >
                      {project.type}
                    </span>

                    {/* Title */}
                    <h3
                      className="text-3xl lg:text-4xl font-bold leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {project.title}
                    </h3>

                    {/* Case study structure */}
                    <div className="space-y-4 border-l-2 pl-6" style={{ borderColor: project.color }}>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono mb-2">CHALLENGE</p>
                        <p className="text-foreground">{project.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono mb-2">SOLUTION</p>
                        <p className="text-foreground">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-mono mb-2">IMPACT</p>
                        <p className="font-semibold" style={{ color: project.color }}>
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm bg-secondary/50 border border-border font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <button className="group flex items-center gap-2 text-sm font-mono hover:gap-4 transition-all pt-4">
                      <span style={{ color: project.color }}>VIEW CASE STUDY</span>
                      <ArrowUpRight size={16} style={{ color: project.color }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ backgroundColor: project.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
