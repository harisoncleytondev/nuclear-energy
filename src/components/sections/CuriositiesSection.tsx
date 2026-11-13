import React, { useState } from 'react';
import { CURIOSITIES_ITEMS } from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const CuriositiesSection: React.FC = () => {
  const [pelletCount, setPelletCount] = useState<number>(1);

  return (
    <section
      id="curiosities"
      aria-labelledby="curiosities-heading"
      className="relative w-full border-t border-white/[0.06] bg-[#0b0b0d] py-20 lg:py-28 select-text overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[640px] h-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(239,231,47,0.06)_0%,transparent_72%)] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-[1672px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-[68px]">
        <RevealOnScroll className="max-w-3xl mb-14 lg:mb-18">
          <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4">
            CURIOSIDADES & FATOS
          </p>
          <h2
            id="curiosities-heading"
            className="font-editorial text-3xl sm:text-5xl xl:text-[56px] font-normal leading-[1.08] tracking-[-0.02em] text-[#f5f5f7]"
          >
            O que poucos sabem sobre a{' '}
            <span className="text-[#edea35]">energia do átomo</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg xl:text-[19px] font-light leading-[1.5] text-[#bebec4]">
            Fatos científicos, comparações de escala e a presença da tecnologia
            nuclear no Brasil e no cotidiano.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {CURIOSITIES_ITEMS.map((item, index) => {
            const colSpanClass =
              item.span === 'wide'
                ? 'lg:col-span-7'
                : item.span === 'narrow'
                ? 'lg:col-span-5'
                : 'lg:col-span-6';

            return (
              <RevealOnScroll
                key={item.id}
                delayMs={index * 110}
                className={`${colSpanClass} rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] hover:border-white/[0.16] p-7 sm:p-9 xl:p-10 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-colors duration-300`}
              >
                <div>
                  <span className="inline-block text-xs font-medium tracking-[0.24em] text-[#e6df35] uppercase mb-4">
                    {item.eyebrow}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl xl:text-[34px] font-normal leading-[1.15] text-[#f5f5f7] mb-4">
                    {item.title}{' '}
                    <span className="text-[#edea35]">{item.highlightWord}</span>
                  </h3>
                  <p className="text-sm sm:text-base xl:text-[16px] font-light leading-relaxed text-[#bebec4]">
                    {item.description}
                  </p>
                </div>

                {item.id === 'pellet' && (
                  <div className="mt-8 pt-6 border-t border-white/[0.08]">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#a9a9b0]">
                        Simulador de Equivalência:{' '}
                        <strong className="text-[#efe72f]">
                          {pelletCount} pastilha(s) de Urânio ({pelletCount * 10}g)
                        </strong>
                      </span>
                      <div className="inline-flex items-center gap-2">
                        {[1, 5, 10].map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() => setPelletCount(count)}
                            className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                              pelletCount === count
                                ? 'bg-[#efe72f] text-black font-medium'
                                : 'bg-[#121214] text-[#bebec4] border border-white/10 hover:text-white'
                            }`}
                          >
                            {count}x ({count * 10}g)
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-xl bg-[#121214] border border-white/[0.06] p-3.5">
                        <span className="font-editorial text-2xl font-medium text-[#efe72f] block">
                          {pelletCount * 1} t
                        </span>
                        <span className="text-xs font-light text-[#a9a9b0]">
                          de Carvão Mineral
                        </span>
                      </div>
                      <div className="rounded-xl bg-[#121214] border border-white/[0.06] p-3.5">
                        <span className="font-editorial text-2xl font-medium text-[#efe72f] block">
                          {pelletCount * 480} m³
                        </span>
                        <span className="text-xs font-light text-[#a9a9b0]">
                          de Gás Natural
                        </span>
                      </div>
                      <div className="rounded-xl bg-[#121214] border border-white/[0.06] p-3.5">
                        <span className="font-editorial text-2xl font-medium text-[#efe72f] block">
                          {pelletCount * 3} barris
                        </span>
                        <span className="text-xs font-light text-[#a9a9b0]">
                          de Petróleo (~{pelletCount * 477} L)
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {item.bigStat && item.id !== 'pellet' && (
                  <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-baseline justify-between gap-4">
                    <span className="font-editorial text-3xl sm:text-4xl font-medium text-[#efe72f]">
                      {item.bigStat}
                    </span>
                    <span className="text-xs font-light text-[#a9a9b0] text-right">
                      {item.bigStatUnit}
                    </span>
                  </div>
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};
