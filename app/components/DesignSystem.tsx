/**
 * DESIGN SYSTEM DOCUMENTATION
 * 
 * This file serves as a reference for the portfolio's design system.
 * It's not rendered in the main app but documents all reusable components,
 * tokens, and patterns used throughout the portfolio.
 */

/* ============================================
   COLOR SYSTEM
   ============================================ */

export const ColorTokens = {
  // Base Colors
  background: '#0a0a0f',
  foreground: '#f0f0f3',
  card: '#13131a',
  secondary: '#1a1a24',
  muted: '#27273a',
  border: 'rgba(240, 240, 243, 0.08)',

  // Accent Colors
  electricCyan: '#00f0ff',
  neonPurple: '#b444ff',
  acidGreen: '#00ff88',
  hotPink: '#ff006e',
  solarYellow: '#ffd60a',

  // Gradients
  holographic: 'linear-gradient(135deg, #00f0ff 0%, #b444ff 25%, #ff006e 50%, #ffd60a 75%, #00ff88 100%)',
  chrome: 'linear-gradient(135deg, #e8e8e8 0%, #b8b8b8 50%, #e8e8e8 100%)',
  brushedSilver: 'linear-gradient(90deg, #c0c0c0 0%, #d8d8d8 50%, #c0c0c0 100%)',
};

/* ============================================
   TYPOGRAPHY SYSTEM
   ============================================ */

export const Typography = {
  // Font Families
  display: 'Space Grotesk, sans-serif', // For headings and hero text
  body: 'Inter, sans-serif', // For body content
  mono: 'JetBrains Mono, monospace', // For code and technical labels

  // Display Sizes (Responsive)
  displayXL: 'clamp(4rem, 12vw, 10rem)',
  displayLG: 'clamp(3rem, 8vw, 6rem)',
  displayMD: 'clamp(2rem, 5vw, 4rem)',
  displaySM: 'clamp(1.5rem, 3vw, 2.5rem)',

  // Usage Guidelines:
  // - Display fonts: Use for hero text, section headings
  // - Body font: Use for paragraphs, descriptions
  // - Mono font: Use for labels, tags, technical content
  // - Never override default typography unless requested
};

/* ============================================
   SPACING & LAYOUT
   ============================================ */

export const Spacing = {
  sectionPadding: 'py-32 px-6',
  containerMaxWidth: 'max-w-7xl',
  asymmetricGrid: 'grid-cols-12',
  generousGap: 'gap-8 lg:gap-12',
};

/* ============================================
   COMPONENT PATTERNS
   ============================================ */

// Button Variants
export const ButtonPatterns = {
  primary: `
    px-8 py-4 bg-foreground text-background
    relative overflow-hidden group
    hover:scale-105 transition-all
    [&>div]:absolute [&>div]:inset-0
    [&>div]:bg-gradient-to-r [&>div]:from-[#00f0ff] 
    [&>div]:via-[#b444ff] [&>div]:to-[#ff006e]
    [&>div]:opacity-0 [&>div]:group-hover:opacity-100
    [&>div]:transition-opacity
  `,
  secondary: `
    px-8 py-4 border border-foreground
    hover:bg-foreground/5 transition-colors
  `,
  ghost: `
    px-4 py-2 hover:bg-secondary transition-colors
  `,
};

// Card Patterns
export const CardPatterns = {
  base: `
    p-6 bg-card/50 border border-border
    backdrop-blur-sm
  `,
  hover: `
    hover:border-[color] transition-colors group
  `,
  asymmetric: `
    col-span-12 lg:col-span-[variable]
  `,
};

// Badge/Tag Pattern
export const BadgePattern = `
  inline-block px-4 py-1.5
  border text-sm font-mono
  border-[accent-color] text-[accent-color]
`;

/* ============================================
   MICRO-INTERACTIONS
   ============================================ */

export const MicroInteractions = {
  // Hover Effects
  pixelDistortion: 'Use CSS filters or SVG noise on hover',
  grainShift: 'Animate grain overlay opacity',
  metallicShimmer: 'Gradient animation on metallic elements',

  // Scroll Animations
  fadeInUp: 'initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}',
  fadeInScale: 'initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}',
  stagger: 'Use delay based on index: delay: index * 0.1',
};

/* ============================================
   TEXTURE & EFFECTS
   ============================================ */

export const TexturePatterns = {
  grainOverlay: 'SVG noise filter at 3-5% opacity',
  neuralNetwork: 'Canvas-based animated node connections',
  distortedGrid: 'SVG paths with sine/cosine distortions',
  pixelDetails: 'Small decorative pixel grids',
  imperfectShapes: 'Organic border-radius values',
};

/* ============================================
   ACCESSIBILITY GUIDELINES
   ============================================ */

export const AccessibilityNotes = {
  contrast: 'All text meets WCAG AA standards (4.5:1 for normal text)',
  focusStates: 'All interactive elements have visible focus states',
  semanticHTML: 'Proper heading hierarchy and landmarks',
  altText: 'All images include descriptive alt text',
  keyboardNav: 'All functionality accessible via keyboard',
};

/* ============================================
   REUSABLE COMPONENTS
   ============================================ */

// Components available for use:
export const Components = {
  GrainOverlay: 'Global texture overlay',
  MetallicDivider: 'Section dividers with metallic gradients',
  NeuralNetworkBg: 'Animated background effect',
  ScrollIndicator: 'Progress bar showing scroll position',
};

/* ============================================
   LAYOUT PRINCIPLES
   ============================================ */

export const LayoutPrinciples = {
  asymmetry: 'Break traditional grids with 7/5, 6/6 splits',
  visualBalance: 'Use white space to balance heavy content',
  hierarchy: 'Clear visual hierarchy through size, color, position',
  negativeSpace: 'Generous padding and margins',
  overlap: 'Strategic overlapping elements for depth',
  experimental: 'Unconventional line breaks and text positioning',
};
