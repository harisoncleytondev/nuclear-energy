import React, { useState } from 'react';
import {
  DEBATE_CONS,
  DEBATE_PROS,
  ENERGY_COMPARISON,
} from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

type DebateTab = 'all' | 'pros' | 'cons' | 'comparison';

export const DebateSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<DebateTab>('all');

  return (
    <section
      id="debate"
      aria-labelledby="debate-heading"
      className="relative w-full border-t border-white/[0.06] bg-[#0d0d10] py-20 lg:py-28 select-text overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 right-1/4 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle,rgba(239,231,47,0.05)_0%,transparent_72%)] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-[1672px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-[68px]">
        <RevealOnScroll className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-16">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4">
              O GRANDE DEBATE
            </p>
            <h2
              id="debate-heading"
              className="font-editorial text-3xl sm:text-5xl xl:text-[56px] font-normal leading-[1.08] tracking-[-0.02em] text-[#f5f5f7]"
            >
              Solução climática ou{' '}
              <span className="text-[#edea35]">risco inaceitável?</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg xl:text-[19px] font-light leading-[1.5] text-[#bebec4]">
              Compare os dois lados da discussão científica e geopolítica com
              base em indicadores reais de emissão, segurança e custo.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar perspectivas do debate"
            className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#171719] border border-white/[0.08] w-fit"
          >
            {[
              { id: 'all', label: 'Visão Lado a Lado' },
              { id: 'pros', label: 'Potência (A Favor)' },
              { id: 'cons', label: 'Perigo (Críticas)' },
              { id: 'comparison', label: 'Dados Comparativos' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id as DebateTab)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#efe72f] text-[#111111] font-medium shadow-[0_0_20px_rgba(239,231,47,0.25)]'
                      : 'text-[#bebec4] hover:text-white font-light'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </RevealOnScroll>

        {activeFilter !== 'comparison' && (
          <div
            className={`grid grid-cols-1 ${
              activeFilter === 'all' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
            } gap-8 mb-14`}
          >
            {(activeFilter === 'all' || activeFilter === 'pros') && (
              <RevealOnScroll
                direction="left"
                className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-[#efe72f]/25 p-6 sm:p-9 xl:p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-center gap-4 pb-6 mb-7 border-b border-white/[0.08]">
                  <div className="w-12 h-12 rounded-2xl bg-[#efe72f]/10 border border-[#efe72f]/30 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="#efe72f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium tracking-[0.22em] text-[#efe72f] uppercase block">
                      ARGUMENTOS A FAVOR
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white">
                      Por que é vista como potência
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {DEBATE_PROS.map((item, idx) => (
                    <article
                      key={idx}
                      className="rounded-2xl bg-[#121214] border border-white/[0.06] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                    >
                      <div className="space-y-1.5 max-w-md">
                        <div className="flex items-center gap-2.5">
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            className="w-4 h-4 shrink-0"
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
                          <h4 className="font-editorial text-lg sm:text-xl font-medium text-[#f5f5f7]">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-[#bebec4] pl-6">
                          {item.description}
                        </p>
                      </div>

                      <div className="sm:text-right pl-6 sm:pl-0 shrink-0 border-l sm:border-l-0 border-[#efe72f]/30">
                        <span className="font-editorial text-2xl sm:text-3xl font-medium text-[#efe72f] block">
                          {item.stat}
                        </span>
                        <span className="text-xs font-light text-[#9d9da5]">
                          {item.statLabel}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </RevealOnScroll>
            )}

            {(activeFilter === 'all' || activeFilter === 'cons') && (
              <RevealOnScroll
                direction="right"
                delayMs={120}
                className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-6 sm:p-9 xl:p-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-center gap-4 pb-6 mb-7 border-b border-white/[0.08]">
                  <div className="w-12 h-12 rounded-2xl bg-[#efe72f]/10 border border-[#efe72f]/30 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M10.29 3.86L1.82 18A2 2 0 0 0 3.54 21H20.46A2 2 0 0 0 22.18 18L13.71 3.86A2 2 0 0 0 10.29 3.86Z"
                        stroke="#efe72f"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="9"
                        x2="12"
                        y2="13"
                        stroke="#efe72f"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="17" r="1" fill="#efe72f" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium tracking-[0.22em] text-[#efe72f] uppercase block">
                      PONTOS CRÍTICOS
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white">
                      Onde moram os riscos e desafios
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  {DEBATE_CONS.map((item, idx) => (
                    <article
                      key={idx}
                      className="rounded-2xl bg-[#121214] border border-white/[0.06] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
                    >
                      <div className="space-y-1.5 max-w-md">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#efe72f] shrink-0" />
                          <h4 className="font-editorial text-lg sm:text-xl font-medium text-[#f5f5f7]">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-[#bebec4] pl-4.5">
                          {item.description}
                        </p>
                      </div>

                      <div className="sm:text-right pl-4.5 sm:pl-0 shrink-0 border-l sm:border-l-0 border-white/15">
                        <span className="font-editorial text-2xl sm:text-3xl font-medium text-[#f5f5f7] block">
                          {item.stat}
                        </span>
                        <span className="text-xs font-light text-[#9d9da5]">
                          {item.statLabel}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </RevealOnScroll>
            )}
          </div>
        )}

        {(activeFilter === 'all' || activeFilter === 'comparison') && (
          <RevealOnScroll
            delayMs={160}
            className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-6 sm:p-10 xl:p-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-medium tracking-[0.24em] text-[#e6df35] uppercase block mb-2">
                  COMPARATIVO ENTRE FONTES (IPCC / IAEA)
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  Emissões de CO₂ no ciclo de vida vs. Disponibilidade (Fator de Capacidade)
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-light text-[#a9a9b0]">
                Valores médios globais em <strong className="text-white font-normal">gCO₂eq/kWh</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ENERGY_COMPARISON.map((row) => (
                <div
                  key={row.source}
                  className={`rounded-2xl p-5 border ${
                    row.highlight
                      ? 'bg-[#1b1b16] border-[#efe72f]/50 shadow-[0_0_24px_rgba(239,231,47,0.08)]'
                      : 'bg-[#121214] border-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-editorial text-lg font-medium text-white">
                      {row.source}
                    </span>
                    {row.highlight && (
                      <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#efe72f] text-black">
                        Destaque
                      </span>
                    )}
                  </div>

                  {/* CO2 metric */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#a9a9b0] font-light">Emissões de CO₂</span>
                      <span className="text-[#f5f5f7] font-medium">
                        {row.co2GramsPerKwh} g/kWh
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.07] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#efe72f]"
                        style={{
                          width: `${Math.max(4, Math.min(100, (row.co2GramsPerKwh / 820) * 100))}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Capacity factor metric */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-[#a9a9b0] font-light">Fator de Capacidade</span>
                      <span className="text-[#efe72f] font-medium">
                        {row.capacityFactorPercent}% do tempo
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.07] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-white/80"
                        style={{ width: `${row.capacityFactorPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
};
