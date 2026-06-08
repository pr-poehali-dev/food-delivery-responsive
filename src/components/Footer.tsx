import React from 'react';
import { Category, categoryConfig } from '@/data/menu';
import Icon from '@/components/ui/icon';

interface FooterProps {
  activeCategory: Category;
}

const Footer: React.FC<FooterProps> = ({ activeCategory }) => {
  const cfg = categoryConfig[activeCategory];

  return (
    <footer id="contacts" className="text-white pt-10 pb-6 px-4 transition-colors duration-500"
      style={{ backgroundColor: cfg.darkColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {/* О нас */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              О НАС
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-3">
              «Та самая пицца» — это вкусная еда, свежие ингредиенты и быстрая доставка. Готовим с любовью для наших клиентов!
            </p>
            <div className="flex gap-2">
              <a href="https://vk.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-all text-sm font-bold">
                В
              </a>
              <a href="https://t.me/ta_samaya_pizza" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-all">
                <Icon name="Send" size={14} className="text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-all">
                <Icon name="Camera" size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              КОНТАКТЫ
            </div>
            <div className="flex flex-col gap-2 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={12} className="text-white/50 flex-shrink-0" />
                <span>пр. Античный, 4</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={12} className="text-white/50 flex-shrink-0" />
                <a href="tel:+79781646362" className="hover:text-white transition-colors">+7 978 164-63-62</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={12} className="text-white/50 flex-shrink-0" />
                <span>Ежедневно 10:00 до 23:00</span>
              </div>
            </div>
          </div>

          {/* Доставка */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ДОСТАВКА
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-3">
              Доставка по району и ближайшим районам. Уточняйте у оператора.
            </p>
            <button
              onClick={() => window.open('tel:+79781646362')}
              className="px-4 py-2 rounded-lg text-xs font-bold border border-white/40 hover:bg-white/10 transition-all"
            >
              Узнать условия
            </button>
          </div>

          {/* Соцсети / QR */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              МЫ В СОЦСЕТЯХ
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-gray-900 font-bold text-xs text-center leading-tight">QR<br/>TG</div>
                </div>
                <span className="text-white/50 text-xs">@TA.SAMAYA_PIZZA</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-gray-900 font-bold text-xs text-center leading-tight">QR<br/>IG</div>
                </div>
                <span className="text-white/50 text-xs">@PIZZASEVAS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-white/40 text-xs">© Та самая пицца, 2024</span>
          <span className="text-white/40 text-xs hover:text-white/60 transition-colors cursor-pointer">
            Политика конфиденциальности
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
