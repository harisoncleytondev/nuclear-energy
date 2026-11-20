import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  sectionIds: string[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Entenda', href: '#understand', sectionIds: ['understand', 'how-it-works'] },
  { label: 'Discussão', href: '#debate', sectionIds: ['debate'] },
  { label: 'Curiosidades', href: '#curiosities', sectionIds: ['curiosities'] },
  { label: 'Indicações', href: '#media', sectionIds: ['media'] },
  { label: 'Referências', href: '#references', sectionIds: ['references'] },
];

export const AtomLogoIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 60 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <ellipse
      cx="30"
      cy="32"
      rx="12.5"
      ry="28.5"
      stroke="#efe72f"
      strokeWidth="2.7"
    />
    <ellipse
      cx="30"
      cy="32"
      rx="12.5"
      ry="28.5"
      transform="rotate(60 30 32)"
      stroke="#efe72f"
      strokeWidth="2.7"
    />
    <ellipse
      cx="30"
      cy="32"
      rx="12.5"
      ry="28.5"
      transform="rotate(-60 30 32)"
      stroke="#efe72f"
      strokeWidth="2.7"
    />
    <circle cx="30" cy="32" r="5.5" fill="#efe72f" />
  </svg>
);

export const TeamGroupIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="6.5" cy="6.5" r="3.2" fill="#efe72f" />
    <path
      d="M1.2 16.2C1.2 13.3 3.5 11.2 6.5 11.2C7.6 11.2 8.6 11.5 9.4 12.1C8.3 13.3 7.7 14.9 7.6 16.8H1.2V16.2Z"
      fill="#efe72f"
    />
    <circle cx="21.5" cy="6.5" r="3.2" fill="#efe72f" />
    <path
      d="M26.8 16.2C26.8 13.3 24.5 11.2 21.5 11.2C20.4 11.2 19.4 11.5 18.6 12.1C19.7 13.3 20.3 14.9 20.4 16.8H26.8V16.2Z"
      fill="#efe72f"
    />
    <circle cx="14" cy="5.5" r="4" fill="#efe72f" />
    <path
      d="M7.8 18C7.8 14.3 10.5 11.6 14 11.6C17.5 11.6 20.2 14.3 20.2 18H7.8Z"
      fill="#efe72f"
    />
  </svg>
);

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Entenda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 240;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        for (const id of item.sectionIds) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= scrollPos) {
            setActiveTab(item.label);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#0b0b0d]/85 backdrop-blur-md">
      <div className="w-full h-20 sm:h-24 xl:h-[110px] px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#understand"
          onClick={() => setActiveTab('Entenda')}
          className="flex items-center gap-4 sm:gap-6 xl:gap-8 group focus-visible:outline-none"
        >
          <AtomLogoIcon className="w-10 h-11 sm:w-12 sm:h-13 xl:w-[58px] xl:h-[62px] shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <span className="text-base sm:text-lg xl:text-[20px] font-medium tracking-[0.32em] text-[#e6e6e9] uppercase">
            NUCLEAR
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 lg:gap-9 xl:gap-[48px]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveTab(item.label)}
                className={`relative py-2.5 text-sm lg:text-base xl:text-[17px] font-light tracking-[0.01em] transition-colors ${
                  isActive
                    ? 'text-[#f5f5f7] font-normal'
                    : 'text-[#a9a9b0] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#efe72f] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Team Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#team"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#8e882b] bg-[#141412]/70 hover:bg-[#efe72f]/10 hover:border-[#efe72f] px-5 py-2.5 xl:w-[174px] xl:h-[50px] text-sm xl:text-[15.5px] font-normal text-[#efe72f] transition-all duration-200 cursor-pointer"
          >
            <TeamGroupIcon className="w-5 h-4 xl:w-[22px] xl:h-[16px] shrink-0" />
            <span>Equipe (8)</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 text-slate-300 hover:text-[#efe72f] cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121215]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveTab(item.label);
                setMobileMenuOpen(false);
              }}
              className={`text-base py-1.5 ${
                activeTab === item.label
                  ? 'text-[#efe72f] font-medium'
                  : 'text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full border border-[#8e882b] bg-[#141412] px-5 py-2.5 text-sm text-[#efe72f] w-fit"
          >
            <TeamGroupIcon className="w-5 h-4" />
            <span>Equipe de Pesquisa</span>
          </a>
        </div>
      )}
    </header>
  );
};
