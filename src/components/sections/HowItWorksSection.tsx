import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const HowItWorksSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = HOW_IT_WORKS_STEPS[activeStepIndex];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative w-full border-t border-white/[0.06] bg-[#0b0b0d] py-20 lg:py-28 select-text overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(239,231,47,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll className="max-w-4xl mb-12 lg:mb-16">
          <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4">
            COMO FUNCIONA
          </p>
          <h2
            id="how-it-works-heading"
            className="font-editorial text-3xl sm:text-5xl xl:text-[56px] font-normal leading-[1.08] tracking-[-0.02em] text-[#f5f5f7]"
          >
            Da quebra do núcleo à{' '}
            <span className="text-[#edea35]">rede de transmissão</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg xl:text-[20px] font-light leading-[1.5] text-[#bebec4] max-w-3xl">
            Como o calor gerado pela fissão do urânio é transferido entre circuitos
            isolados até movimentar os geradores elétricos.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-4">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isSelected = activeStepIndex === index;
              return (
                <RevealOnScroll key={step.number} delayMs={index * 100} direction="left">
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex(index)}
                    className={`w-full text-left rounded-[22px] p-6 xl:p-7 transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? 'bg-[#1a1a17]/95 border-[#efe72f]/60 shadow-[0_0_30px_rgba(239,231,47,0.08)] -translate-y-0.5'
                        : 'bg-[#171719]/75 border-white/[0.08] hover:border-white/20 hover:bg-[#171719]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span
                        className={`text-xs font-medium tracking-[0.22em] uppercase px-3 py-1 rounded-full border ${
                          isSelected
                            ? 'bg-[#efe72f]/15 text-[#efe72f] border-[#efe72f]/40'
                            : 'bg-white/[0.04] text-[#a9a9b0] border-white/10'
                        }`}
                      >
                        {step.badge}
                      </span>
                      <span
                        className={`font-editorial text-2xl xl:text-3xl font-medium ${
                          isSelected ? 'text-[#efe72f]' : 'text-white/25'
                        }`}
                      >
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-editorial text-xl xl:text-[24px] font-medium text-[#f5f5f7] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm xl:text-[15px] font-light leading-relaxed text-[#bebec4]">
                      {step.description}
                    </p>
                  </button>
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll
            delayMs={150}
            direction="right"
            className="lg:col-span-7 rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-6 sm:p-10 xl:p-12 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(239,231,47,0.12)_0%,transparent_70%)] blur-2xl pointer-events-none"
            />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-medium tracking-[0.24em] text-[#e6df35] uppercase block mb-1">
                  ETAPA {currentStep.number} — {currentStep.badge}
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl xl:text-[34px] font-normal text-white">
                  {currentStep.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase tracking-[0.2em] text-[#9d9da5] block">
                  {currentStep.metricLabel}
                </span>
                <span className="font-editorial text-2xl sm:text-3xl font-medium text-[#efe72f]">
                  {currentStep.metricValue}
                </span>
              </div>
            </div>

            <div className="py-8 my-auto flex items-center justify-center">
              {activeStepIndex === 0 && (
                <svg
                  viewBox="0 0 600 200"
                  className="w-full max-w-[520px] h-auto select-none"
                  aria-label="Diagrama da fissão nuclear do Urânio 235"
                >
                  <circle cx="50" cy="100" r="9" fill="#efe72f" />
                  <path
                    d="M62 100H140"
                    stroke="#efe72f"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <polygon points="144,100 134,95 134,105" fill="#efe72f" />
                  <text x="50" y="130" textAnchor="middle" fill="#c4c4ca" fontSize="12">
                    Nêutron incidente
                  </text>

                  <circle
                    cx="200"
                    cy="100"
                    r="40"
                    fill="#1e1e17"
                    stroke="#efe72f"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="105"
                    textAnchor="middle"
                    fill="#efe72f"
                    fontSize="13"
                    fontWeight="600"
                  >
                    ²³⁵U
                  </text>

                  <path d="M242 90L340 50" stroke="#efe72f" strokeWidth="2" />
                  <path d="M242 110L340 150" stroke="#efe72f" strokeWidth="2" />

                  <circle
                    cx="365"
                    cy="45"
                    r="24"
                    fill="#151517"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text x="365" y="49" textAnchor="middle" fill="#f5f5f7" fontSize="11">
                    Bário-141
                  </text>

                  <circle
                    cx="365"
                    cy="155"
                    r="22"
                    fill="#151517"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text x="365" y="159" textAnchor="middle" fill="#f5f5f7" fontSize="11">
                    Criptônio-92
                  </text>

                  <circle cx="460" cy="75" r="7" fill="#efe72f" />
                  <circle cx="475" cy="100" r="7" fill="#efe72f" />
                  <circle cx="460" cy="125" r="7" fill="#efe72f" />
                  <text x="525" y="104" textAnchor="middle" fill="#efe72f" fontSize="12">
                    + 2 a 3 nêutrons
                  </text>
                </svg>
              )}

              {activeStepIndex === 1 && (
                <svg
                  viewBox="0 0 600 200"
                  className="w-full max-w-[540px] h-auto select-none"
                  aria-label="Diagrama dos circuitos primário e secundário de vapor"
                >
                  <rect
                    x="50"
                    y="40"
                    width="110"
                    height="120"
                    rx="16"
                    fill="#1a1a16"
                    stroke="#efe72f"
                    strokeWidth="2"
                  />
                  <text
                    x="105"
                    y="95"
                    textAnchor="middle"
                    fill="#f5f5f7"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Reator
                  </text>
                  <text x="105" y="115" textAnchor="middle" fill="#efe72f" fontSize="11">
                    Circuito Primário
                  </text>

                  <path
                    d="M160 70H250V130H160"
                    fill="none"
                    stroke="#efe72f"
                    strokeWidth="3"
                  />

                  <rect
                    x="250"
                    y="30"
                    width="120"
                    height="140"
                    rx="20"
                    fill="#171719"
                    stroke="#48cae4"
                    strokeWidth="2"
                  />
                  <text
                    x="310"
                    y="95"
                    textAnchor="middle"
                    fill="#f5f5f7"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Gerador
                  </text>
                  <text x="310" y="115" textAnchor="middle" fill="#48cae4" fontSize="11">
                    de Vapor
                  </text>

                  <path
                    d="M370 70H450"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeDasharray="6 3"
                  />
                  <rect x="450" y="50" width="120" height="80" rx="14" fill="#efe72f" />
                  <text
                    x="510"
                    y="90"
                    textAnchor="middle"
                    fill="#111111"
                    fontSize="13"
                    fontWeight="600"
                  >
                    Vapor Limpo
                  </text>
                  <text x="510" y="110" textAnchor="middle" fill="#111111" fontSize="11">
                    Alta Pressão
                  </text>
                </svg>
              )}

              {activeStepIndex === 2 && (
                <svg
                  viewBox="0 0 600 190"
                  className="w-full max-w-[540px] h-auto select-none"
                  aria-label="Diagrama da turbina, gerador e transmissão elétrica"
                >
                  <circle
                    cx="115"
                    cy="95"
                    r="48"
                    fill="#1a1a16"
                    stroke="#efe72f"
                    strokeWidth="2.5"
                  />
                  <circle cx="115" cy="95" r="10" fill="#efe72f" />
                  <text x="115" y="165" textAnchor="middle" fill="#f5f5f7" fontSize="13">
                    Turbina a Vapor
                  </text>

                  <path d="M163 95H245" stroke="#efe72f" strokeWidth="4" />

                  <rect
                    x="245"
                    y="50"
                    width="120"
                    height="90"
                    rx="18"
                    fill="#171719"
                    stroke="#efe72f"
                    strokeWidth="2.2"
                  />
                  <text
                    x="305"
                    y="92"
                    textAnchor="middle"
                    fill="#f5f5f7"
                    fontSize="14"
                    fontWeight="600"
                  >
                    Gerador
                  </text>
                  <text x="305" y="112" textAnchor="middle" fill="#efe72f" fontSize="12">
                    Eletromagnético
                  </text>

                  <path d="M365 95H445" stroke="#efe72f" strokeWidth="2.5" />
                  <rect x="445" y="50" width="120" height="90" rx="18" fill="#efe72f" />
                  <text
                    x="505"
                    y="90"
                    textAnchor="middle"
                    fill="#111111"
                    fontSize="14"
                    fontWeight="600"
                  >
                    Rede Elétrica
                  </text>
                  <text x="505" y="110" textAnchor="middle" fill="#111111" fontSize="11">
                    Zero CO₂ • 24h/dia
                  </text>
                </svg>
              )}
            </div>

            <div className="space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentStep.details.map((detail, i) => (
                  <li
                    key={i}
                    className="rounded-xl bg-[#121214] border border-white/[0.06] p-4 flex items-start gap-3 text-sm font-light text-[#c8c8ce]"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#efe72f] shrink-0 mt-1.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
                <span className="text-[#9d9da5] font-light">
                  Fonte técnica da etapa:
                </span>
                <a
                  href={currentStep.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#efe72f] hover:underline"
                >
                  <span>{currentStep.sourceLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
