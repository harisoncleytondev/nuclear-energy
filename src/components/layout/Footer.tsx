import React from 'react';
import { AtomLogoIcon, TeamGroupIcon } from './Navbar';
import { TEAM_MEMBERS } from '../../data/landingContent';
import { RevealOnScroll } from '../ui/RevealOnScroll';

export const Footer: React.FC = () => {
  return (
    <footer
      id="team"
      className="relative w-full border-t border-white/[0.08] bg-[#09090b] py-14 lg:py-16 select-text"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
        <RevealOnScroll className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 pb-12 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-md">
            <a href="#understand" className="inline-flex items-center gap-4">
              <AtomLogoIcon className="w-10 h-11 shrink-0" />
              <span className="text-base font-normal tracking-[0.32em] text-[#e6e6e9] uppercase">
                NUCLEAR
              </span>
            </a>
            <p className="text-sm font-light text-[#a9a9b0] leading-relaxed">
              Trabalho Acadêmico de Pesquisa Científica sobre Energia Nuclear —
              analisando fundamentos físicos, vantagens operacionais, riscos de segurança,
              polêmicas globais, curiosidades e indicações culturais com referências oficiais.
            </p>
          </div>

          <div className="rounded-[24px] bg-[#171719]/90 border border-[#8e882b]/50 p-6 sm:p-7 max-w-3xl w-full">
            <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5 text-[#efe72f] text-sm font-medium">
                <TeamGroupIcon className="w-5 h-4" />
                <span>Equipe do Trabalho</span>
              </div>
              <span className="text-xs text-[#9d9da5] font-light">
                {TEAM_MEMBERS.length} Integrantes
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {TEAM_MEMBERS.map((name, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#121214] border border-white/[0.06] py-3 px-4 text-center hover:border-[#efe72f]/40 transition-colors"
                >
                  <span className="block text-sm sm:text-base font-medium text-[#f5f5f7]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#8a8a93]">
          <p>© {new Date().getFullYear()} NUCLEAR — Energia Nuclear: Vantagens, Riscos, Polêmicas & Fontes.</p>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a href="#understand" className="hover:text-[#efe72f] transition-colors">
              Entenda
            </a>
            <a href="#debate" className="hover:text-[#efe72f] transition-colors">
              Discussão
            </a>
            <a href="#curiosities" className="hover:text-[#efe72f] transition-colors">
              Curiosidades
            </a>
            <a href="#media" className="hover:text-[#efe72f] transition-colors">
              Indicações
            </a>
            <a href="#references" className="hover:text-[#efe72f] transition-colors">
              Referências
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
