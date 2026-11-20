import React from 'react';
import { motion } from 'framer-motion';
import { NuclearRock3D } from './NuclearRock3D';

export const HeroSection: React.FC = () => {
  return (
    <div
      id="understand"
      className="relative min-h-[calc(100vh-80px)] lg:min-h-[820px] w-full bg-[#0b0b0d] text-[#f5f5f7] flex flex-col justify-between overflow-x-hidden select-text"
    >
      {/* Subtle ambient background vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_65%_at_50%_50%,rgba(239,231,47,0.07)_0%,rgba(11,11,13,0)_75%)] pointer-events-none"
      />

      {/* Main Responsive Grid (Full Width & Clean Cinematic Hero) */}
      <main className="relative z-10 flex-1 flex flex-col justify-center w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 w-full">
          {/* Column 1 (Left): Editorial Headline, Subtitle & Primary CTA with Framer Motion */}
          <motion.section
            aria-labelledby="hero-heading"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 min-w-0 z-20 flex flex-col items-start text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4 sm:mb-6"
            >
              ENERGIA NUCLEAR
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[68px] xl:text-[84px] font-normal leading-[1.03] tracking-[-0.02em] text-[#f5f5f7]"
            >
              <span className="block">Energia nuclear:</span>
              <span className="block mt-1 sm:mt-2">
                <span className="text-[#edea35]">potência</span> ou perigo?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-6 sm:mt-8 text-base sm:text-xl xl:text-[23px] font-light leading-[1.45] text-[#c8c8ce] max-w-2xl"
            >
              Uma análise sobre capacidade de geração, emissões de carbono,
              segurança operacional e os desafios da gestão de rejeitos.
            </motion.p>

            {/* Subtle Horizontal Accent Line */}
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-7 sm:mt-9 w-28 xl:w-[130px] h-[2px] bg-gradient-to-r from-[#efe72f] to-transparent origin-left"
            />

            {/* Primary CTA Pill Button & Quick Anchors */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <a
                href="#debate"
                className="inline-flex items-center justify-center gap-3.5 rounded-full bg-[#efe72f] hover:bg-[#f7f04a] text-[#111111] px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-medium shadow-[0_0_36px_rgba(239,231,47,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(239,231,47,0.5)] hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore o debate</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 10H16.5M16.5 10L11.2 4.7M16.5 10L11.2 15.3"
                    stroke="#111111"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#efe72f]/50 px-6 py-4 sm:py-5 text-sm sm:text-base text-[#e6e6e9] transition-all cursor-pointer"
              >
                <span>Como funciona</span>
                <span className="text-[#efe72f]">↓</span>
              </a>
            </motion.div>
          </motion.section>

          {/* Column 2 (Right/Center): Large Real-Time Interactive 3D WebGL Model (Three.js + GLSL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 min-w-0 relative flex items-center justify-center my-4 lg:my-0 z-10 w-full"
          >
            <NuclearRock3D className="w-full max-w-[540px] sm:max-w-[640px] lg:max-w-none lg:w-[130%] xl:w-[135%]" />
          </motion.div>
        </div>
      </main>

      {/* Bottom Center Scroll Indicator */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="hidden sm:flex flex-col items-center pb-4 z-20 pointer-events-none select-none"
      >
        <div className="w-[22px] h-[36px] rounded-full border-2 border-white/60 flex justify-center pt-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-[3px] h-[6px] rounded-full bg-[#efe72f]"
          />
        </div>
        <div className="w-[1px] h-[24px] bg-gradient-to-b from-white/30 to-transparent mt-2.5" />
      </motion.div>
    </div>
  );
};
