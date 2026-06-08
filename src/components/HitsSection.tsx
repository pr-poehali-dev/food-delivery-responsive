import React, { useRef } from 'react';
import { Product, categoryConfig } from '@/data/menu';
import Icon from '@/components/ui/icon';

interface HitsSectionProps {
  hits: Product[];
  themeColor: string;
  lightBg: string;
  onAddToCart: (product: Product, size?: '30' | '40') => void;
  onSeeAll: () => void;
}

const HitsSection: React.FC<HitsSectionProps> = ({ hits, themeColor, lightBg, onAddToCart, onSeeAll }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'right' ? 260 : -260, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 px-4" style={{ backgroundColor: '#1a1a2e' }}>
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-white font-black text-2xl md:text-3xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ХИТЫ ПРОДАЖ
            </h2>
            <div className="font-handwrite text-2xl" style={{ fontFamily: 'Caveat, cursive', color: themeColor }}>
              ∿∿∿
            </div>
          </div>
          <button
            onClick={onSeeAll}
            className="text-white border border-white/40 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
          >
            Смотреть все
          </button>
        </div>

        {/* Горизонтальный скролл */}
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all hidden md:flex"
          >
            <Icon name="ChevronLeft" size={18} style={{ color: themeColor }} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {hits.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-48 md:w-52 bg-white rounded-2xl overflow-hidden product-card"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-3">
                  <div className="text-xs text-gray-400 mb-0.5">{product.weight}</div>
                  <div className="font-bold text-sm text-gray-900 mb-2 leading-tight">{product.name}</div>
                  <div className="font-black text-base mb-2" style={{ color: themeColor }}>
                    {product.price} ₽
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:brightness-110 hover:scale-[1.02]"
                    style={{ backgroundColor: themeColor }}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-all hidden md:flex"
          >
            <Icon name="ChevronRight" size={18} style={{ color: themeColor }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HitsSection;
