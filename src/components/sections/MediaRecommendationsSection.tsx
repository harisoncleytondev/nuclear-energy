import React, { useState } from 'react';
import { ExternalLink, BookOpen, Film, Video } from 'lucide-react';
import { MEDIA_RECOMMENDATIONS } from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

type MediaTypeFilter = 'all' | 'livro' | 'filme' | 'documentario';

export const MediaRecommendationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<MediaTypeFilter>('all');

  const filteredItems = MEDIA_RECOMMENDATIONS.filter(
    (item) => activeFilter === 'all' || item.type === activeFilter
  );

  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'livro':
        return <BookOpen className="w-4 h-4 text-[#efe72f]" />;
      case 'filme':
        return <Film className="w-4 h-4 text-[#efe72f]" />;
      case 'documentario':
        return <Video className="w-4 h-4 text-[#efe72f]" />;
      default:
        return <Film className="w-4 h-4 text-[#efe72f]" />;
    }
  };

  return (
    <section
      id="media"
      aria-labelledby="media-heading"
      className="relative w-full border-t border-white/[0.06] bg-[#0b0b0d] py-20 lg:py-28 select-text overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-[radial-gradient(circle,rgba(239,231,47,0.05)_0%,transparent_70%)] blur-3xl pointer-events-none"
      />

      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-[13px] font-medium tracking-[0.28em] text-[#e6df35] uppercase mb-4">
              CULTURA & APROFUNDAMENTO
            </p>
            <h2
              id="media-heading"
              className="font-editorial text-3xl sm:text-5xl xl:text-[56px] font-normal leading-[1.08] tracking-[-0.02em] text-[#f5f5f7]"
            >
              Indicações de livros,{' '}
              <span className="text-[#edea35]">filmes e documentários</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg xl:text-[20px] font-light leading-[1.5] text-[#bebec4]">
              Livros, filmes e documentários que abordam o histórico científico do átomo,
              os desastres de Chernobyl e as discussões recentes sobre descarbonização.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar tipo de recomendação"
            className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-[#171719] border border-white/[0.08] w-fit"
          >
            {[
              { id: 'all', label: 'Todas as Obras' },
              { id: 'livro', label: 'Livros' },
              { id: 'filme', label: 'Filmes' },
              { id: 'documentario', label: 'Documentários' },
            ].map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(tab.id as MediaTypeFilter)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <RevealOnScroll
              key={`${item.title}-${index}`}
              delayMs={index * 90}
              className="rounded-[24px] bg-[#171719]/90 backdrop-blur-md border border-white/[0.08] hover:border-[#efe72f]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] uppercase text-[#efe72f] bg-[#efe72f]/10 border border-[#efe72f]/25 px-3 py-1 rounded-full">
                    {getMediaIcon(item.type)}
                    <span>{item.typeLabel}</span>
                  </span>
                  <span className="text-xs text-[#9d9da5] font-light">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-white group-hover:text-[#edea35] transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-[#c8c8ce] mb-3">
                  {item.authorOrDirector}
                </p>
                <p className="text-sm font-light leading-relaxed text-[#bebec4]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-[#9d9da5] font-light">
                  Fonte / Onde consultar:
                </span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#efe72f] hover:underline"
                >
                  <span>{item.sourceLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
