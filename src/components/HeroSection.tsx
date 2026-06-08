import React from 'react';
import { Category, categoryConfig } from '@/data/menu';

interface HeroSectionProps {
  activeCategory: Category;
  onOrderClick: () => void;
  onMenuClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ activeCategory, onOrderClick, onMenuClick }) => {
  const cfg = categoryConfig[activeCategory];

  const titleLines = cfg.heroTitle.split('\n');

  return (
    <section
      id="hero"
      className="relative overflow-hidden transition-colors duration-500 min-h-[420px] md:min-h-[540px]"
      style={{ backgroundColor: cfg.color }}
    >
      {/* Фоновые декоративные элементы */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 50%, ${cfg.darkColor} 0%, transparent 60%)`,
        }}
      />

      {/* Декоративные листья / овощи */}
      <div className="absolute top-4 right-[45%] text-4xl opacity-20 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '0s' }}>🍃</div>
      <div className="absolute top-12 right-[38%] text-2xl opacity-15 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '1s' }}>🫒</div>
      <div className="absolute bottom-8 left-[42%] text-3xl opacity-15 animate-float pointer-events-none hidden md:block" style={{ animationDelay: '0.5s' }}>🌿</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Левая часть */}
          <div className="flex-1 text-white animate-hero">
            {/* Заголовок */}
            <h1 className="font-black leading-none mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {titleLines.map((line, i) => (
                <div
                  key={i}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{ textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
                >
                  {line}
                </div>
              ))}
            </h1>

            {/* Подзаголовок рукописным */}
            <div className="font-handwrite text-xl md:text-2xl text-white/90 mb-1 mt-2" style={{ fontFamily: 'Caveat, cursive' }}>
              ∿ {cfg.heroSubtitle} ∿
            </div>

            {/* Цены-бейдж */}
            <div
              className="inline-block mt-4 mb-6 px-4 py-2 rounded-xl font-black text-sm md:text-base"
              style={{ backgroundColor: cfg.darkColor, color: 'white', boxShadow: '4px 4px 0 rgba(0,0,0,0.2)' }}
            >
              {cfg.heroBadge}
            </div>

            {/* Кнопки */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={onOrderClick}
                className="px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: 'white', color: cfg.color }}
              >
                Заказать онлайн
              </button>
              <button
                onClick={onMenuClick}
                className="btn-outline-theme px-6 py-3 rounded-xl text-sm md:text-base"
              >
                Меню
              </button>
            </div>

            {/* Адрес и телефон */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-base">📍</span>
                <span>г. Севастополь, пр. Античный, 4</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-base">🕐</span>
                <span>Ежедневно 11:00 — 22:00</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="text-base">📞</span>
                <a href="tel:+79781646362" className="hover:text-white transition-colors">+7 978 164-63-62</a>
              </div>
            </div>
          </div>

          {/* Правая часть — фото еды */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
              <img
                src={cfg.image}
                alt={cfg.label}
                className="w-full h-full object-cover rounded-full"
                style={{
                  boxShadow: `0 20px 60px rgba(0,0,0,0.35), 0 0 0 8px rgba(255,255,255,0.15)`,
                  transition: 'all 0.5s ease',
                }}
              />
              {/* Декоративное кольцо */}
              <div
                className="absolute inset-0 rounded-full border-4 border-white/20"
                style={{ transform: 'scale(1.06)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя волна */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }} />
    </section>
  );
};

export default HeroSection;