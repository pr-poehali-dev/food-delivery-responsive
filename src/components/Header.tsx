import React from 'react';
import Icon from '@/components/ui/icon';
import { Category, categoryConfig } from '@/data/menu';

interface HeaderProps {
  activeCategory: Category;
  onCategoryChange: (cat: Category) => void;
  cartCount: number;
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeCategory, onCategoryChange, cartCount, onCartOpen }) => {
  const cfg = categoryConfig[activeCategory];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-500"
      style={{ backgroundColor: cfg.color }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Логотип */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollTo('hero')}>
            <div className="leading-none">
              <div className="text-white font-black text-sm md:text-base tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ТА САМАЯ
              </div>
              <div className="text-white font-black text-lg md:text-2xl tracking-wider -mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                ПИЦЦА
              </div>
            </div>
          </div>

          {/* Навигация — десктоп */}
          <nav className="hidden md:flex items-center gap-6">
            {(['pizza', 'rolls', 'drinks'] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`nav-link text-white text-sm font-semibold transition-all ${activeCategory === cat ? 'opacity-100 border-b-2 border-white pb-0.5' : 'opacity-75 hover:opacity-100'}`}
              >
                {categoryConfig[cat].label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('promotions')}
              className="nav-link text-white text-sm font-semibold opacity-75 hover:opacity-100 transition-all"
            >
              Акции
            </button>
            <button
              onClick={() => scrollTo('delivery')}
              className="nav-link text-white text-sm font-semibold opacity-75 hover:opacity-100 transition-all"
            >
              Доставка
            </button>
            <button
              onClick={() => scrollTo('contacts')}
              className="nav-link text-white text-sm font-semibold opacity-75 hover:opacity-100 transition-all"
            >
              Контакты
            </button>
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+79781646362"
              className="hidden sm:flex items-center gap-1.5 text-white font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <Icon name="Phone" size={14} className="text-white" />
              <span>+7 978 164-63-62</span>
            </a>

            {/* Корзина */}
            <button
              onClick={onCartOpen}
              className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all"
            >
              <Icon name="ShoppingCart" size={18} className="text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full text-xs font-black flex items-center justify-center animate-scale-in"
                  style={{ color: cfg.color }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильная навигация */}
      <div className="md:hidden border-t border-white/20 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-4 px-4 py-2 min-w-max">
          {(['pizza', 'rolls', 'drinks'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-white text-xs font-bold whitespace-nowrap pb-0.5 transition-all ${activeCategory === cat ? 'border-b-2 border-white opacity-100' : 'opacity-65'}`}
            >
              {categoryConfig[cat].label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('promotions')}
            className="text-white text-xs font-semibold opacity-65 hover:opacity-100 transition-all whitespace-nowrap"
          >
            Акции
          </button>
          <button
            onClick={() => scrollTo('delivery')}
            className="text-white text-xs font-semibold opacity-65 hover:opacity-100 transition-all whitespace-nowrap"
          >
            Доставка
          </button>
          <button
            onClick={() => scrollTo('contacts')}
            className="text-white text-xs font-semibold opacity-65 hover:opacity-100 transition-all whitespace-nowrap"
          >
            Контакты
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
