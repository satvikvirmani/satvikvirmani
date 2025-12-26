"use client";
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { MetallicDivider } from './MetallicDivider';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

const skillsData = [
  { skill: 'Machine Learning', value: 95 },
  { skill: 'Deep Learning', value: 90 },
  { skill: 'Python', value: 95 },
  { skill: 'React', value: 88 },
  { skill: 'Data Viz', value: 85 },
  { skill: 'UI/UX', value: 82 },
];

const experience = [
  {
    title: 'Senior ML Engineer',
    company: 'AI Innovations Inc',
    period: '2022 - Present',
    description: 'Leading development of transformer-based models for NLP applications. Architected scalable ML pipelines processing 10M+ daily requests.',
    tags: ['PyTorch', 'TensorFlow', 'AWS', 'Kubernetes'],
  },
  {
    title: 'Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2020 - 2022',
    description: 'Built responsive web applications with React and Node.js. Implemented real-time data visualization dashboards.',
    tags: ['React', 'Node.js', 'D3.js', 'PostgreSQL'],
  },
  {
    title: 'Data Scientist',
    company: 'Analytics Pro',
    period: '2018 - 2020',
    description: 'Developed predictive models for customer behavior analysis. Deployed computer vision models for automated quality control.',
    tags: ['Python', 'scikit-learn', 'OpenCV', 'Docker'],
  },
];

const education = [
  {
    degree: 'M.S. Computer Science',
    school: 'Stanford University',
    period: '2016 - 2018',
    focus: 'Machine Learning & AI',
  },
  {
    degree: 'B.S. Computer Engineering',
    school: 'MIT',
    period: '2012 - 2016',
    focus: 'Software Systems',
  },
];

export function ResumeSection() {
  return (
    <section className="relative py-32 px-6" id="resume">
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
            Experience
            <br />
            <span className="ml-12 text-[#00f0ff]">& Skills</span>
          </h2>
          <MetallicDivider variant="holographic" />
        </motion.div>

        <div className="grid grid-cols-12 gap-12">
          {/* Left Column - Timeline */}
          <div className="col-span-12 lg:col-span-7 space-y-16">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-[#b444ff]" size={24} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  Work Experience
                </h3>
              </div>

              <div className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-[#00f0ff] before:via-[#b444ff] before:to-[#ff006e]">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="pl-8 relative group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[#00f0ff] -translate-x-[5px] group-hover:scale-150 transition-transform" />

                    <div className="space-y-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <span className="text-[#00f0ff] font-mono text-sm">@{exp.company}</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs border border-border bg-secondary/50 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-[#00ff88]" size={24} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-6 border border-border bg-card/50 backdrop-blur-sm hover:border-[#00ff88] transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-2">{edu.school}</p>
                        <p className="text-sm text-[#00ff88]">Focus: {edu.focus}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills Radar Chart */}
          <motion.div
            className="col-span-12 lg:col-span-5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-[#ff006e]" size={24} />
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                  Skills
                </h3>
              </div>

              {/* Radar Chart */}
              <div className="bg-card/30 border border-border p-6 backdrop-blur-sm">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={skillsData}>
                    <PolarGrid stroke="#27273a" />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: '#a0a0b0', fontSize: 12 }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#00f0ff"
                      fill="#00f0ff"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>

                {/* Pixel detail decoration */}
                <div className="grid grid-cols-8 gap-1 mt-4">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="h-1 bg-gradient-to-r from-[#00f0ff] to-[#b444ff] opacity-30"
                      style={{ width: `${((i * 17 + 5) % 80) + 20}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Additional skills list */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground font-mono">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'PyTorch',
                    'TensorFlow',
                    'React',
                    'TypeScript',
                    'Node.js',
                    'Docker',
                    'AWS',
                    'PostgreSQL',
                    'MongoDB',
                    'Redis',
                    'Kubernetes',
                    'GraphQL',
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm border border-[#00f0ff]/30 bg-[#00f0ff]/5 hover:bg-[#00f0ff]/10 transition-colors font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
