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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Условия доставки */}
          <div className="rounded-2xl p-6" style={{ backgroundColor: cfg.lightBg }}>
            <h3 className="font-black text-lg mb-4 text-gray-900">Условия доставки</h3>
            <div className="flex flex-col gap-3">
              {[
                { icon: 'MapPin', text: 'Доставка по Севастополю и ближайшим районам' },
                { icon: 'Clock', text: 'Время работы: 11:00 — 22:00 ежедневно' },
                { icon: 'Truck', text: 'Стоимость доставки — уточняйте у оператора' },
                { icon: 'Timer', text: 'Среднее время доставки 45–60 минут' },
                { icon: 'Phone', text: '+7 978 164-63-62' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: cfg.color }}
                  >
                    <Icon name={item.icon} size={14} className="text-white" />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed pt-1">{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+79781646362"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all hover:brightness-110"
              style={{ backgroundColor: cfg.color }}
            >
              <Icon name="Phone" size={14} className="text-white" />
              Позвонить
            </a>
          </div>

          {/* Контакты + адрес */}
          <div className="rounded-2xl p-6 bg-gray-900 text-white">
            <h3 className="font-black text-lg mb-4">Мы в Севастополе</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cfg.color }}>
                  <Icon name="MapPin" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Адрес</div>
                  <div className="font-bold text-sm">г. Севастополь,</div>
                  <div className="font-bold text-sm">пр. Античный, 4</div>
                </div>
              </div>

              <a href="tel:+79781646362" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cfg.color }}>
                  <Icon name="Phone" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Телефон</div>
                  <div className="font-bold text-sm">+7 978 164-63-62</div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: cfg.color }}>
                  <Icon name="Clock" size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">График работы</div>
                  <div className="font-bold text-sm">Ежедневно 11:00 — 22:00</div>
                </div>
              </div>


            </div>
          </div>

          {/* Карта — Яндекс */}
          <div className="rounded-2xl overflow-hidden" style={{ minHeight: 320 }}>
            <div className="w-full h-full" style={{ minHeight: 320 }}>
              <iframe
                title="Карта — Та самая пицца"
                src="https://yandex.ru/map-widget/v1/?ll=33.527440%2C44.595210&z=16&pt=33.527440,44.595210,pm2rdl&text=%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%2C+%D0%BF%D1%80.+%D0%90%D0%BD%D1%82%D0%B8%D1%87%D0%BD%D1%8B%D0%B9%2C+4"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320, display: 'block' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;