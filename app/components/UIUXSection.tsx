"use client";
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
// import { ArrowUpRight } from 'lucide-react';
import { MetallicDivider } from './MetallicDivider';
import Image from 'next/image';

const uiuxProjects = [
  {
    title: 'myScheduler',
    type: 'UX/UI Design',
    challenge: 'Students struggling with fragmented academic information, missed schedules, and low engagement due to cluttered and disconnected education apps',
    solution: 'A unified, student-first design with intuitive navigation, progressive disclosure of academic data, and consistent visual language across scheduling, attendance, reports, and collaboration features',
    impact: 'Improved academic organization, increased daily app usage, reduced missed classes and deadlines, and stronger peer collaboration',
    image: '/assets/myscheduler.webp',
    color: '#ff006e',
    tags: [
      'Education UX',
      'Mobile App Design',
      'Information Architecture',
      'User-Centered Design',
      'Design System'
    ],
  },
  {
    title: 'weWrite',
    type: 'UX/UI Design',
    challenge: 'Aspiring writers lacked a dedicated, aesthetically pleasing platform to express creativity, discover poetry, and meaningfully connect with a like-minded writing community',
    solution: 'A creativity-first social writing experience with immersive content discovery, seamless onboarding, expressive post-creation tools, and strong community interaction through profiles, likes, comments, and sharing',
    impact: 'Increased creative engagement, higher content sharing, stronger writer-to-writer connections, and improved retention through a sense of belonging and self-expression',
    image: '/assets/wewrite.webp',
    color: '#8338ec',
    tags: [
      'Creative UX',
      'Social App Design',
      'Content Discovery',
      'Community Building',
      'Mobile UI Design'
    ],
  }
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
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill={true}
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
                    {/* <button className="group flex items-center gap-2 text-sm font-mono hover:gap-4 transition-all pt-4">
                      <span style={{ color: project.color }}>VIEW CASE STUDY</span>
                      <ArrowUpRight size={16} style={{ color: project.color }} />
                    </button> */}
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
