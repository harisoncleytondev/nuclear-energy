import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  DEBATE_CONS,
  DEBATE_PROS,
  DEBATE_CONTROVERSIES,
  ENERGY_COMPARISON,
} from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

type DebateTab = 'all' | 'pros' | 'cons' | 'controversies' | 'comparison';

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

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4">
              DISCUSSÃO SOBRE O TEMA
            </p>
            <h2
              id="debate-heading"
              className="font-editorial text-3xl sm:text-5xl xl:text-[56px] font-normal leading-[1.08] tracking-[-0.02em] text-[#f5f5f7]"
            >
              Vantagens, riscos e{' '}
              <span className="text-[#edea35]">polêmicas</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg xl:text-[20px] font-light leading-[1.5] text-[#bebec4]">
              Pontos centrais da discussão técnica e política sobre a matriz nuclear,
              baseados em inventários de emissão, histórico operacional e custos de implantação.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar perspectivas do debate"
            className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#171719] border border-white/[0.08] w-fit"
          >
            {[
              { id: 'all', label: 'Visão Completa' },
              { id: 'pros', label: 'Vantagens' },
              { id: 'cons', label: 'Riscos' },
              { id: 'controversies', label: 'Polêmicas' },
              { id: 'comparison', label: 'Comparativo CO₂' },
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
              activeFilter === 'all'
                ? 'lg:grid-cols-3'
                : 'lg:grid-cols-1'
            } gap-8 mb-14`}
          >
            {/* Bloco 1: Vantagens */}
            {(activeFilter === 'all' || activeFilter === 'pros') && (
              <RevealOnScroll
                direction="left"
                className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-[#efe72f]/25 p-6 sm:p-8 xl:p-9 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] flex flex-col justify-between"
              >
                <div>
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
                        BENEFÍCIOS REAIS
                      </span>
                      <h3 className="font-editorial text-2xl font-medium text-white">
                        Vantagens
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {DEBATE_PROS.map((item, idx) => (
                      <article
                        key={idx}
                        className="rounded-2xl bg-[#121214] border border-white/[0.06] p-5 flex flex-col justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
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
                            <h4 className="font-editorial text-lg font-medium text-[#f5f5f7]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm font-light leading-relaxed text-[#bebec4] pl-6">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 pl-6">
                          <div>
                            <span className="font-editorial text-xl font-medium text-[#efe72f] block leading-tight">
                              {item.stat}
                            </span>
                            <span className="text-[11px] font-light text-[#9d9da5]">
                              {item.statLabel}
                            </span>
                          </div>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#efe72f] hover:underline shrink-0"
                            title={`Fonte: ${item.sourceLabel}`}
                          >
                            <span>Fonte</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* Bloco 2: Riscos */}
            {(activeFilter === 'all' || activeFilter === 'cons') && (
              <RevealOnScroll
                delayMs={100}
                className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-6 sm:p-8 xl:p-9 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] flex flex-col justify-between"
              >
                <div>
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
                      <h3 className="font-editorial text-2xl font-medium text-white">
                        Riscos & Desafios
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {DEBATE_CONS.map((item, idx) => (
                      <article
                        key={idx}
                        className="rounded-2xl bg-[#121214] border border-white/[0.06] p-5 flex flex-col justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#efe72f] shrink-0" />
                            <h4 className="font-editorial text-lg font-medium text-[#f5f5f7]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm font-light leading-relaxed text-[#bebec4] pl-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 pl-4">
                          <div>
                            <span className="font-editorial text-xl font-medium text-[#f5f5f7] block leading-tight">
                              {item.stat}
                            </span>
                            <span className="text-[11px] font-light text-[#9d9da5]">
                              {item.statLabel}
                            </span>
                          </div>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#efe72f] hover:underline shrink-0"
                            title={`Fonte: ${item.sourceLabel}`}
                          >
                            <span>Fonte</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}

            {/* Bloco 3: Polêmicas */}
            {(activeFilter === 'all' || activeFilter === 'controversies') && (
              <RevealOnScroll
                delayMs={180}
                direction="right"
                className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-[#efe72f]/25 p-6 sm:p-8 xl:p-9 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 pb-6 mb-7 border-b border-white/[0.08]">
                    <div className="w-12 h-12 rounded-2xl bg-[#efe72f]/10 border border-[#efe72f]/30 flex items-center justify-center shrink-0">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" stroke="#efe72f" strokeWidth="2" />
                        <line x1="12" y1="8" x2="12" y2="12" stroke="#efe72f" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="16" x2="12.01" y2="16" stroke="#efe72f" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-[0.22em] text-[#efe72f] uppercase block">
                        DILEMAS GLOBAIS
                      </span>
                      <h3 className="font-editorial text-2xl font-medium text-white">
                        Polêmicas
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {DEBATE_CONTROVERSIES.map((item, idx) => (
                      <article
                        key={idx}
                        className="rounded-2xl bg-[#121214] border border-white/[0.06] p-5 flex flex-col justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#f7f04a] shrink-0" />
                            <h4 className="font-editorial text-lg font-medium text-[#f5f5f7]">
                              {item.title}
                            </h4>
                          </div>
                          <p className="text-sm font-light leading-relaxed text-[#bebec4] pl-4">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 pl-4">
                          <div>
                            <span className="font-editorial text-xl font-medium text-[#edea35] block leading-tight">
                              {item.stat}
                            </span>
                            <span className="text-[11px] font-light text-[#9d9da5]">
                              {item.statLabel}
                            </span>
                          </div>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#efe72f] hover:underline shrink-0"
                            title={`Fonte: ${item.sourceLabel}`}
                          >
                            <span>Fonte</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            )}
          </div>
        )}

        {/* Gráfico Comparativo de Emissões & Eficiência */}
        {(activeFilter === 'all' || activeFilter === 'comparison') && (
          <RevealOnScroll
            delayMs={160}
            className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-6 sm:p-10 xl:p-12 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-medium tracking-[0.24em] text-[#e6df35] uppercase block mb-2">
                  COMPARATIVO ENTRE FONTES DE ENERGIA
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  Emissões de CO₂ no ciclo de vida vs. Disponibilidade (Fator de Capacidade)
                </h3>
              </div>
              <p className="text-xs text-[#9d9da5] font-light max-w-xs">
                Fontes: Painel Intergovernamental (IPCC WGIII) e U.S. Energy Information Administration (EIA).
              </p>
            </div>

            <div className="space-y-4">
              {ENERGY_COMPARISON.map((source) => {
                const maxCO2 = 820;
                const co2WidthPercent = Math.max(3, (source.co2GramsPerKwh / maxCO2) * 100);
                return (
                  <div
                    key={source.source}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                      source.highlight
                        ? 'bg-[#1e1e17] border-[#efe72f]/50 shadow-[0_0_24px_rgba(239,231,47,0.12)]'
                        : 'bg-[#121214] border-white/[0.06]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-base sm:text-lg font-editorial ${
                            source.highlight ? 'text-[#efe72f] font-semibold' : 'text-white'
                          }`}
                        >
                          {source.source}
                        </span>
                        {source.highlight && (
                          <span className="text-[11px] uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full bg-[#efe72f] text-black font-semibold">
                            Carga de Base
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-xs">
                        <span className="text-[#a9a9b0]">
                          CO₂:{' '}
                          <strong className={source.highlight ? 'text-[#efe72f]' : 'text-white'}>
                            {source.co2GramsPerKwh} g/kWh
                          </strong>
                        </span>
                        <span className="text-[#a9a9b0]">
                          Fator de Uso:{' '}
                          <strong className={source.highlight ? 'text-[#efe72f]' : 'text-white'}>
                            {source.capacityFactorPercent}%
                          </strong>
                        </span>
                        <a
                          href={source.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#efe72f] hover:underline"
                          title={`Fonte: ${source.sourceLabel}`}
                        >
                          <span>{source.sourceLabel}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-[#9d9da5] w-20 shrink-0">Emissão CO₂:</span>
                        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              source.highlight ? 'bg-[#efe72f]' : 'bg-[#e26d5c]'
                            }`}
                            style={{ width: `${co2WidthPercent}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] text-[#9d9da5] w-20 shrink-0">Fator de Uso:</span>
                        <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#48cae4]"
                            style={{ width: `${source.capacityFactorPercent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
};
