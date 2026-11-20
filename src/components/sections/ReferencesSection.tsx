import React, { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FAQ_ITEMS, REFERENCES_LIST } from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const ReferencesSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section
      id="references"
      aria-labelledby="references-heading"
      className="relative w-full border-t border-white/[0.06] bg-[#0d0d10] py-20 lg:py-28 select-text overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4">
                FONTES & REFERÊNCIAS
              </p>
              <h2
                id="references-heading"
                className="font-editorial text-3xl sm:text-5xl xl:text-[50px] font-normal leading-[1.08] tracking-[-0.02em] text-[#f5f5f7] mb-4"
              >
                Base científica e{' '}
                <span className="text-[#edea35]">dados oficiais</span>
              </h2>
              <p className="text-base sm:text-lg xl:text-[20px] font-light leading-[1.5] text-[#bebec4] mb-10 max-w-3xl">
                Relatórios técnicos, acordos internacionais e órgãos reguladores consultados
                pela equipe para fundamentar cada estatística e afirmação apresentada nesta pesquisa.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {REFERENCES_LIST.map((reference, idx) => (
                <RevealOnScroll
                  key={idx}
                  delayMs={idx * 90}
                  className="rounded-[22px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#efe72f]/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#efe72f] bg-[#efe72f]/10 border border-[#efe72f]/25 px-2.5 py-0.5 rounded-full">
                        {reference.category}
                      </span>
                      <span className="text-xs text-[#9d9da5] font-light">
                        {reference.year}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-[#d4d4d8] mb-1">
                      {reference.organization}
                    </p>
                    <h3 className="font-editorial text-xl font-medium text-white leading-snug mb-2.5">
                      {reference.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#bebec4]">
                      {reference.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#efe72f] hover:underline"
                    >
                      <span>Acessar fonte oficial</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          <RevealOnScroll
            delayMs={180}
            direction="right"
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="rounded-[26px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] p-7 sm:p-9 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
              <span className="text-xs font-medium tracking-[0.24em] text-[#e6df35] uppercase block mb-2">
                DÚVIDAS FREQUENTES & VERIFICAÇÃO
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white mb-6">
                Perguntas essenciais sobre tecnologia e segurança nuclear
              </h3>

              <div className="divide-y divide-white/[0.08]">
                {FAQ_ITEMS.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className="py-4 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                      >
                        <span className="text-base font-normal text-[#f5f5f7] group-hover:text-[#efe72f] transition-colors">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#a9a9b0] transition-transform duration-300 shrink-0 ${
                            isOpen ? 'rotate-180 text-[#efe72f]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="mt-3 pr-4">
                          <p className="text-sm font-light text-[#bebec4] leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                            <span className="text-[#8a8a93] font-light">Fonte de verificação:</span>
                            <a
                              href={faq.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 font-medium text-[#efe72f] hover:underline"
                            >
                              <span>{faq.sourceLabel}</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
