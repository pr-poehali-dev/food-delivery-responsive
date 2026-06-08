import React from 'react';
import { Category, categoryConfig } from '@/data/menu';
import Icon from '@/components/ui/icon';

const LOGO_URL = 'https://cdn.poehali.dev/projects/e4f979cf-f29b-48da-b7ce-81fed7878036/bucket/0acc37b1-3c05-480d-9ebe-f3b252eeee56.png';
const TG_QR = 'https://cdn.poehali.dev/projects/e4f979cf-f29b-48da-b7ce-81fed7878036/bucket/42b4f55a-8c04-4fff-9d23-de76c08d1400.png';
const VK_QR = 'https://cdn.poehali.dev/projects/e4f979cf-f29b-48da-b7ce-81fed7878036/bucket/5b61d641-9a83-4260-bc49-399c5aef5aba.png';

interface FooterProps {
  activeCategory: Category;
}

const Footer: React.FC<FooterProps> = ({ activeCategory }) => {
  const cfg = categoryConfig[activeCategory];

  return (
    <footer id="contacts" className="text-white pt-10 pb-6 px-4 transition-colors duration-500"
      style={{ backgroundColor: cfg.darkColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">

          {/* О нас + логотип */}
          <div>
            <img
              src={LOGO_URL}
              alt="Та самая пицца"
              className="h-14 w-auto mb-3 object-contain"
            />
            <p className="text-white/70 text-xs leading-relaxed mb-3">
              «Та самая пицца» — это вкусная еда, свежие ингредиенты и быстрая доставка по Севастополю. Готовим с любовью!
            </p>
            <div className="flex gap-2">
              <a href="https://vk.com/pizzasevas" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 transition-all flex items-center justify-center text-sm font-black">
                В
              </a>
              <a href="https://t.me/TA_SAMAYA_P1ZZA" target="_blank" rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 transition-all flex items-center justify-center">
                <Icon name="Send" size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Контакты */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              КОНТАКТЫ
            </div>
            <div className="flex flex-col gap-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={12} className="text-white/50 flex-shrink-0 mt-0.5" />
                <span>Севастополь, пр. Античный, 4</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={12} className="text-white/50 flex-shrink-0" />
                <a href="tel:+79781646362" className="hover:text-white transition-colors">+7 978 164-63-62</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={12} className="text-white/50 flex-shrink-0" />
                <span>Ежедневно 11:00 — 22:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={12} className="text-white/50 flex-shrink-0" />
                <span>Доставка по Севастополю</span>
              </div>
            </div>

          </div>

          {/* Доставка */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ДОСТАВКА
            </div>
            <p className="text-white/70 text-xs leading-relaxed mb-3">
              Доставляем по Севастополю и ближайшим районам. Уточните зону доставки у оператора.
            </p>
            <button
              onClick={() => window.open('tel:+79781646362')}
              className="px-4 py-2 rounded-lg text-xs font-bold border border-white/40 hover:bg-white/10 transition-all"
            >
              Позвонить
            </button>
          </div>

          {/* Соцсети с настоящими QR */}
          <div>
            <div className="font-black text-base mb-3 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              МЫ В СОЦСЕТЯХ
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden p-0.5">
                  <img src={TG_QR} alt="Telegram QR" className="w-full h-full object-cover rounded-lg" />
                </div>
                <a
                  href="https://t.me/TA_SAMAYA_P1ZZA"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-xs text-center"
                >
                  @TA_SAMAYA_P1ZZA
                </a>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <div className="w-16 h-16 bg-white rounded-xl overflow-hidden p-0.5">
                  <img src={VK_QR} alt="VK QR" className="w-full h-full object-cover rounded-lg" />
                </div>
                <a
                  href="https://vk.com/pizzasevas"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-xs text-center"
                >
                  @PIZZASEVAS
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-white/40 text-xs">© Та самая пицца, 2026 · Севастополь</span>
          <span className="text-white/40 text-xs hover:text-white/60 transition-colors cursor-pointer">
            Политика конфиденциальности
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;