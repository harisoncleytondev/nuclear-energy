import React from 'react';
import { NuclearRock3D } from './NuclearRock3D';

const InfoCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="20" stroke="#efe72f" strokeWidth="2.6" />
    <circle cx="24" cy="15.5" r="2.2" fill="#efe72f" />
    <rect x="22" y="21" width="4" height="12.5" rx="2" fill="#efe72f" />
  </svg>
);

const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M27.5 6L10.5 26.5H23L20.5 42L37.5 21.5H25L27.5 6Z"
      stroke="#efe72f"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WarningTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M21.4 8.8C22.55 6.8 25.45 6.8 26.6 8.8L42.2 35.8C43.35 37.8 41.9 40.3 39.6 40.3H8.4C6.1 40.3 4.65 37.8 5.8 35.8L21.4 8.8Z"
      stroke="#efe72f"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="22.3" y="18" width="3.4" height="11" rx="1.7" fill="#efe72f" />
    <circle cx="24" cy="33.8" r="2" fill="#efe72f" />
  </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 8.5L6.2 11.7L13 4.8"
      stroke="#efe72f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeroSection: React.FC = () => {
  return (
    <div
      id="understand"
      className="relative min-h-[calc(100vh-80px)] lg:min-h-[812px] lg:max-h-[920px] w-full bg-[#0b0b0d] text-[#f5f5f7] flex flex-col justify-between overflow-x-hidden select-text"
    >
      {/* Subtle ambient background vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_53%_52%,rgba(239,231,47,0.06)_0%,rgba(11,11,13,0)_70%)] pointer-events-none"
      />

      {/* Main Responsive 12-Column Grid */}
      <main className="relative z-10 flex-1 flex flex-col justify-center max-w-[1672px] w-full mx-auto px-5 sm:px-8 lg:px-12 xl:px-[68px] py-10 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 w-full">
          {/* Column 1 (Left): Editorial Headline, Subtitle & Primary CTA */}
          <section
            aria-labelledby="hero-heading"
            className="lg:col-span-5 min-w-0 z-20 flex flex-col items-start text-left"
          >
            <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-3.5 sm:mb-5">
              ENERGIA NUCLEAR
            </p>

            <h1
              id="hero-heading"
              className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[72px] font-normal leading-[1.05] tracking-[-0.02em] text-[#f5f5f7] xl:whitespace-nowrap"
            >
              <span className="block">Energia nuclear:</span>
              <span className="block mt-1">
                <span className="text-[#edea35]">potência</span> ou perigo?
              </span>
            </h1>

            <p className="mt-5 sm:mt-7 text-base sm:text-lg xl:text-[20px] font-light leading-[1.45] text-[#c8c8ce] max-w-md xl:max-w-[460px]">
              Uma fonte de energia que divide opiniões —
              <br className="hidden sm:inline" /> e merece ser compreendida.
            </p>

            {/* Subtle Horizontal Accent Line */}
            <div
              aria-hidden="true"
              className="mt-7 sm:mt-9 w-24 xl:w-[104px] h-[1px] bg-[#8e8829]"
            />

            {/* Primary CTA Pill Button */}
            <div className="mt-6 sm:mt-8">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-3.5 rounded-full bg-[#efe72f] hover:bg-[#f7f04a] text-[#111111] px-8 py-4 xl:w-[248px] xl:h-[61px] xl:px-0 xl:py-0 text-base xl:text-[18.5px] font-normal shadow-[0_0_32px_rgba(239,231,47,0.28)] transition-all duration-200 hover:shadow-[0_0_42px_rgba(239,231,47,0.45)]"
              >
                <span>Explore o tema</span>
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
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Column 2 (Center): Real-Time Interactive 3D WebGL Model (Three.js + GLSL) */}
          <div className="lg:col-span-4 min-w-0 relative flex items-center justify-center my-2 lg:my-0 z-10">
            <NuclearRock3D className="w-full max-w-[380px] sm:max-w-[480px] lg:max-w-none lg:w-[146%] xl:w-[760px]" />
          </div>

          {/* Column 3 (Right): 3 Glassmorphic Info Cards */}
          <aside
            aria-label="Resumo sobre energia nuclear"
            className="lg:col-span-3 min-w-0 z-20 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col gap-4 xl:gap-[21px] w-full xl:max-w-[340px] lg:ml-auto"
          >
            {/* Card 1: O que é? */}
            <article className="sm:col-span-2 lg:col-span-1 rounded-[22px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-5 xl:px-[26px] xl:py-[25px] xl:min-h-[192px] flex items-start gap-4 xl:gap-[19px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <InfoCircleIcon className="w-11 h-11 xl:w-[56px] xl:h-[56px] shrink-0 mt-0.5 select-none" />
              <div className="min-w-0">
                <h2 className="font-editorial text-xl xl:text-[22px] font-medium text-[#f3f3f5] leading-snug mb-2">
                  O que é?
                </h2>
                <p className="text-sm xl:text-[14.4px] font-light leading-[1.42] text-[#bebec4]">
                  A energia nuclear é obtida através da fissão de átomos,
                  liberando uma enorme quantidade de energia.
                </p>
              </div>
            </article>

            {/* Card 2: Vantagens */}
            <article className="rounded-[22px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-5 xl:px-[26px] xl:py-[24px] xl:min-h-[187px] flex items-start gap-4 xl:gap-[19px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <BoltIcon className="w-11 h-11 xl:w-[56px] xl:h-[56px] shrink-0 mt-0.5 select-none" />
              <div className="min-w-0">
                <h2 className="font-editorial text-xl xl:text-[22px] font-medium text-[#f3f3f5] leading-snug mb-2.5">
                  Vantagens
                </h2>
                <ul className="space-y-1.5 xl:space-y-[7px] text-sm xl:text-[14.4px] font-light text-[#c4c4ca] xl:whitespace-nowrap">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Alta capacidade energética</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      Baixas emissões de CO<sub className="text-[0.75em]">2</sub>
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>Geração contínua</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Card 3: Riscos */}
            <article className="rounded-[22px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-5 xl:px-[26px] xl:py-[23px] xl:min-h-[174px] flex items-start gap-4 xl:gap-[19px] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <WarningTriangleIcon className="w-11 h-11 xl:w-[56px] xl:h-[56px] shrink-0 mt-0.5 select-none" />
              <div className="min-w-0">
                <h2 className="font-editorial text-xl xl:text-[22px] font-medium text-[#f3f3f5] leading-snug mb-2.5">
                  Riscos
                </h2>
                <ul className="space-y-1.5 xl:space-y-[7px] text-sm xl:text-[14.4px] font-light text-[#c4c4ca] xl:whitespace-nowrap">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#efe72f] shrink-0" />
                    <span>Acidentes nucleares</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#efe72f] shrink-0" />
                    <span>Resíduos radioativos</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#efe72f] shrink-0" />
                    <span>Altos custos iniciais</span>
                  </li>
                </ul>
              </div>
            </article>
          </aside>
        </div>
      </main>

      {/* Bottom Center Scroll Indicator */}
      <div
        aria-hidden="true"
        className="hidden sm:flex flex-col items-center pb-2 lg:-mt-8 z-20 pointer-events-none select-none"
      >
        <div className="w-[21px] h-[34px] rounded-full border-2 border-white/90 flex justify-center pt-1.5">
          <span className="w-[3px] h-[6px] rounded-full bg-white/90" />
        </div>
        <div className="w-[1px] h-[30px] bg-white/35 mt-3.5" />
      </div>
    </div>
  );
};
