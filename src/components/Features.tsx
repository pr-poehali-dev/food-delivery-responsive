import React from 'react';
import Icon from '@/components/ui/icon';
import { Category, categoryConfig } from '@/data/menu';

interface FeaturesProps {
  activeCategory: Category;
}

const features = [
  { icon: 'Bike', label: 'Быстрая доставка', desc: 'Доставим вкусную еду горячей и вовремя' },
  { icon: 'Percent', label: 'Выгодные акции', desc: 'Регулярные скидки и специальные предложения' },
  { icon: 'Leaf', label: 'Свежие ингредиенты', desc: 'Только качественные продукты каждый день' },
  { icon: 'Heart', label: 'Любимый вкус', desc: 'Готовим с душой, как для себя' },
];

const Features: React.FC<FeaturesProps> = ({ activeCategory }) => {
  const cfg = categoryConfig[activeCategory];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-colors duration-500"
                style={{ backgroundColor: cfg.lightBg }}
              >
                <Icon name={f.icon} size={22} style={{ color: cfg.color }} />
              </div>
              <div className="font-bold text-sm text-gray-800 mb-1">{f.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;