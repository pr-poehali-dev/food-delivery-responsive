import React from 'react';
import { Category, categoryConfig } from '@/data/menu';

interface CategoryCardsProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: Category[] = ['pizza', 'rolls', 'drinks'];

  return (
    <section id="categories" className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => {
            const cfg = categoryConfig[cat];
            const isActive = activeCategory === cat;
            return (
              <div
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className="relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  backgroundColor: cfg.color,
                  animationDelay: `${i * 0.1}s`,
                  boxShadow: isActive ? `0 12px 40px ${cfg.color}55` : '0 4px 16px rgba(0,0,0,0.1)',
                  transform: isActive ? 'scale(1.02)' : undefined,
                  minHeight: 240,
                }}
              >
                {/* Фото */}
                <div className="absolute right-0 bottom-0 w-40 h-40 md:w-48 md:h-48 opacity-90">
                  <img
                    src={cfg.image}
                    alt={cfg.label}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '60% 0 0 0' }}
                  />
                </div>

                {/* Декор */}
                <div className="absolute top-3 right-3 text-2xl opacity-20 pointer-events-none">🍃</div>
                {isActive && (
                  <div className="absolute top-3 left-3 bg-white/20 rounded-full px-2 py-0.5 text-white text-xs font-bold">
                    ✓ Выбрано
                  </div>
                )}

                {/* Текст */}
                <div className="relative z-10 p-5 md:p-6">
                  <h3 className="text-white font-black text-2xl md:text-3xl mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {cfg.label.toUpperCase()}
                  </h3>
                  {/* Волнистая линия */}
                  <div className="flex items-center gap-1 mb-2">
                    <span className="font-handwrite text-white/70 text-base" style={{ fontFamily: 'Caveat, cursive' }}>∿∿∿</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium mb-4 max-w-[55%]">{cfg.desc}</p>

                  <button
                    className="px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: 'white', color: cfg.color }}
                  >
                    Смотреть меню
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
