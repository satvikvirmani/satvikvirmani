import { GrainOverlay } from './components/GrainOverlay';
import { NeuralNetworkBg } from './components/NeuralNetworkBg';
import { ScrollIndicator } from './components/ScrollIndicator';
import { FloatingNav } from './components/FloatingNav';
import { HeroSection } from './components/HeroSection';
import { ResumeSection } from './components/ResumeSection';
import { MLProjectsSection } from './components/MLProjectsSection';
import { UIUXSection } from './components/UIUXSection';
import { ContactSection } from './components/ContactSection';


export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <NeuralNetworkBg />
      <GrainOverlay opacity={0.04} />

      {/* Scroll Progress Indicator */}
      <ScrollIndicator />

      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ResumeSection />
        <MLProjectsSection />
        <UIUXSection />
        <ContactSection />
      </main>
    </div>
  );
}
