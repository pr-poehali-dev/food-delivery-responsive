import React from 'react';
import { promotions } from '@/data/menu';
import { Category, categoryConfig } from '@/data/menu';

interface PromotionsSectionProps {
  activeCategory: Category;
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ activeCategory }) => {
  const cfg = categoryConfig[activeCategory];

  return (
    <section id="promotions" className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="font-black text-2xl md:text-3xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            АКЦИИ
          </h2>
          <span className="font-handwrite text-2xl" style={{ fontFamily: 'Caveat, cursive', color: cfg.color }}>
            ∿∿∿
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative rounded-2xl p-6 text-white overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              style={{ backgroundColor: promo.color, minHeight: 160 }}
            >
              {/* Бейдж */}
              <div className="absolute top-4 right-4 bg-white/25 rounded-xl px-3 py-1 font-black text-sm">
                {promo.badge}
              </div>

              {/* Эмодзи */}
              <div className="text-4xl mb-3">{promo.emoji}</div>

              <h3 className="font-black text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {promo.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">{promo.description}</p>

              {/* Декор */}
              <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 pointer-events-none">🎉</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
