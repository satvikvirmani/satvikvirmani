"use client";
import { motion } from 'framer-motion';
import { Brain, ArrowUpRight } from 'lucide-react';
import { MetallicDivider } from './MetallicDivider';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const projects = [
  {
    title: 'Neural Style Transfer Engine',
    category: 'Deep Learning',
    description: 'Real-time artistic style transfer using optimized CNN architectures. Processes 4K images in under 2 seconds with custom GPU acceleration.',
    metrics: {
      accuracy: 94.7,
      speed: '1.8s',
      scale: '100K+ users',
    },
    chartData: [
      { epoch: 1, loss: 2.4 },
      { epoch: 2, loss: 1.8 },
      { epoch: 3, loss: 1.2 },
      { epoch: 4, loss: 0.8 },
      { epoch: 5, loss: 0.5 },
      { epoch: 6, loss: 0.3 },
    ],
    tags: ['PyTorch', 'CUDA', 'FastAPI', 'Redis'],
    color: '#00f0ff',
    image: 'https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY2NzUyOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Sentiment Analysis Pipeline',
    category: 'NLP / Machine Learning',
    description: 'Multi-lingual sentiment classifier with 96% accuracy. Deployed as microservice handling 50M+ predictions monthly.',
    metrics: {
      accuracy: 96.2,
      speed: '45ms',
      scale: '50M/mo',
    },
    chartData: [
      { category: 'Positive', count: 450 },
      { category: 'Neutral', count: 320 },
      { category: 'Negative', count: 230 },
    ],
    tags: ['Transformers', 'BERT', 'Docker', 'Kubernetes'],
    color: '#b444ff',
    image: 'https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NjY4MTU1OXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Anomaly Detection System',
    category: 'Machine Learning',
    description: 'Unsupervised learning model for real-time fraud detection in financial transactions. Reduced false positives by 73%.',
    metrics: {
      accuracy: 98.4,
      speed: '12ms',
      scale: '1B+ tx',
    },
    chartData: [
      { time: '00:00', anomalies: 12 },
      { time: '04:00', anomalies: 8 },
      { time: '08:00', anomalies: 45 },
      { time: '12:00', anomalies: 67 },
      { time: '16:00', anomalies: 89 },
      { time: '20:00', anomalies: 34 },
    ],
    tags: ['scikit-learn', 'Apache Kafka', 'PostgreSQL'],
    color: '#00ff88',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNvZGV8ZW58MXx8fHwxNzY2NzY4Nzk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function MLProjectsSection() {
  return (
    <section className="relative py-32 px-6 bg-secondary/30" id="projects">
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
            <Brain className="text-[#ff006e]" size={32} />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-md)',
                lineHeight: '1.1',
                fontWeight: '700',
              }}
            >
              ML & DL
              <br />
              <span className="ml-12 bg-gradient-to-r from-[#00f0ff] to-[#b444ff] bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <MetallicDivider variant="holographic" />
        </motion.div>

        {/* Projects Grid - Asymmetric Layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-12 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content */}
              <div
                className={`col-span-12 lg:col-span-6 ${index % 2 === 0 ? '' : 'lg:col-start-7'
                  }`}
              >
                <div className="space-y-6">
                  {/* Category Badge */}
                  <span
                    className="inline-block px-4 py-1.5 border text-sm font-mono"
                    style={{ borderColor: project.color, color: project.color }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-4xl lg:text-5xl font-bold leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-6">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-mono">ACCURACY</p>
                      <p className="text-2xl font-bold" style={{ color: project.color }}>
                        {project.metrics.accuracy}%
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-mono">SPEED</p>
                      <p className="text-2xl font-bold" style={{ color: project.color }}>
                        {project.metrics.speed}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground font-mono">SCALE</p>
                      <p className="text-2xl font-bold" style={{ color: project.color }}>
                        {project.metrics.scale}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm border border-border bg-card/50 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <button className="group flex items-center gap-2 text-sm font-mono hover:gap-4 transition-all">
                    <span style={{ color: project.color }}>VIEW PROJECT</span>
                    <ArrowUpRight size={16} style={{ color: project.color }} />
                  </button>
                </div>
              </div>

              {/* Visual - Chart + Image */}
              <div
                className={`col-span-12 lg:col-span-6 ${index % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1 lg:row-start-1'
                  }`}
              >
                <div className="relative group">
                  {/* Background Image */}
                  <div className="relative overflow-hidden border border-border aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                    />

                    {/* Chart Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="w-full h-full bg-card/80 backdrop-blur-md border border-border p-6">
                        <ResponsiveContainer width="100%" height="100%">
                          {index === 1 ? (
                            <BarChart data={project.chartData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#27273a" />
                              <XAxis dataKey="category" stroke="#a0a0b0" />
                              <YAxis stroke="#a0a0b0" />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#13131a',
                                  border: '1px solid #27273a',
                                }}
                              />
                              <Bar dataKey="count" fill={project.color} />
                            </BarChart>
                          ) : (
                            <LineChart data={project.chartData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#27273a" />
                              <XAxis
                                dataKey={index === 0 ? 'epoch' : 'time'}
                                stroke="#a0a0b0"
                              />
                              <YAxis stroke="#a0a0b0" />
                              <Tooltip
                                contentStyle={{
                                  backgroundColor: '#13131a',
                                  border: '1px solid #27273a',
                                }}
                              />
                              <Line
                                type="monotone"
                                dataKey={index === 0 ? 'loss' : 'anomalies'}
                                stroke={project.color}
                                strokeWidth={2}
                                dot={{ fill: project.color }}
                              />
                            </LineChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Decorative pixel elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 opacity-30 group-hover:opacity-60 transition-opacity" style={{ borderColor: project.color }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
