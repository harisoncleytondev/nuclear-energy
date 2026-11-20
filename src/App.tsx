import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { DebateSection } from './components/sections/DebateSection';
import { CuriositiesSection } from './components/sections/CuriositiesSection';
import { MediaRecommendationsSection } from './components/sections/MediaRecommendationsSection';
import { ReferencesSection } from './components/sections/ReferencesSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-[#f5f5f7]">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <DebateSection />
      <CuriositiesSection />
      <MediaRecommendationsSection />
      <ReferencesSection />
      <Footer />
    </div>
  );
};

export default App;
