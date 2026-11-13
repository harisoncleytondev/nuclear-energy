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
      <div className="max-w-[1672px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-[68px]">
        <RevealOnScroll className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-12 border-b border-white/[0.06]">
          <div className="space-y-3 max-w-md">
            <a href="#understand" className="inline-flex items-center gap-4">
              <AtomLogoIcon className="w-10 h-11 shrink-0" />
              <span className="text-base font-normal tracking-[0.44em] text-[#e6e6e9] uppercase">
                ÁTOMO
              </span>
            </a>
            <p className="text-sm font-light text-[#a9a9b0] leading-relaxed">
              Projeto expositivo e científico sobre Energia Nuclear — analisando
              sua capacidade energética, impactos ambientais e desafios de segurança.
            </p>
          </div>

          <div className="rounded-[22px] bg-[#171719]/90 border border-[#8e882b]/50 p-5 sm:p-6">
            <div className="flex items-center gap-2.5 text-[#efe72f] text-sm font-medium mb-4">
              <TeamGroupIcon className="w-5 h-4" />
              <span>Apresentado por Equipe 4</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {TEAM_MEMBERS.map((member, idx) => (
                <div key={idx} className="text-left">
                  <span className="block text-sm font-medium text-[#f5f5f7]">
                    {member.name}
                  </span>
                  <span className="block text-xs font-light text-[#9d9da5]">
                    {member.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#8a8a93]">
          <p>© {new Date().getFullYear()} ÁTOMO — Energia Nuclear: Potência ou Perigo?</p>
          <div className="flex items-center gap-6">
            <a href="#understand" className="hover:text-[#efe72f] transition-colors">
              Entenda
            </a>
            <a href="#debate" className="hover:text-[#efe72f] transition-colors">
              Debate
            </a>
            <a href="#curiosities" className="hover:text-[#efe72f] transition-colors">
              Curiosidades
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
