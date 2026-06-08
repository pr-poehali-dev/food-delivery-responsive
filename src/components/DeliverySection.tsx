import React from 'react';
import Icon from '@/components/ui/icon';
import { Category, categoryConfig } from '@/data/menu';

interface DeliverySectionProps {
  activeCategory: Category;
}

const DeliverySection: React.FC<DeliverySectionProps> = ({ activeCategory }) => {
  const cfg = categoryConfig[activeCategory];

  return (
    <section id="delivery" className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="font-black text-2xl md:text-3xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ДОСТАВКА
          </h2>
          <span className="font-handwrite text-2xl" style={{ fontFamily: 'Caveat, cursive', color: cfg.color }}>
            ∿∿∿
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Условия */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: cfg.lightBg }}>
            <h3 className="font-black text-lg mb-4 text-gray-900">Условия доставки</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'MapPin', text: 'Доставка по районуи ближайшим районам' },
                { icon: 'Clock', text: 'Время работы: 10:00 — 23:00 ежедневно' },
                { icon: 'Truck', text: 'Стоимость доставки — уточните у оператора' },
                { icon: 'Timer', text: 'Среднее время доставки 45–60 минут' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: cfg.color }}
                  >
                    <Icon name={item.icon} size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              className="mt-5 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: cfg.color }}
              onClick={() => window.open('tel:+79781646362')}
            >
              Узнать условия
            </button>
          </div>

          {/* Контакты */}
          <div className="rounded-2xl p-6 bg-gray-900 text-white">
            <h3 className="font-black text-lg mb-4">Контакты</h3>
            <div className="flex flex-col gap-4">
              <a href="tel:+79781646362" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: cfg.color }}>
                  <Icon name="Phone" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Телефон</div>
                  <div className="font-bold text-sm">+7 978 164-63-62</div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: cfg.color }}>
                  <Icon name="MapPin" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Адрес</div>
                  <div className="font-bold text-sm">пр. Античный, 4</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: cfg.color }}>
                  <Icon name="Clock" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Режим работы</div>
                  <div className="font-bold text-sm">Ежедневно 10:00 — 23:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
