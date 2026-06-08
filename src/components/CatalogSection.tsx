import React, { useState, useMemo } from 'react';
import { products, Product, Category, categoryConfig } from '@/data/menu';
import Icon from '@/components/ui/icon';

interface CatalogSectionProps {
  activeCategory: Category;
  onAddToCart: (product: Product, size?: '30' | '40') => void;
}

const CatalogSection: React.FC<CatalogSectionProps> = ({ activeCategory, onAddToCart }) => {
  const [search, setSearch] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<Record<number, '30' | '40'>>({});
  const cfg = categoryConfig[activeCategory];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = p.category === activeCategory;
      const matchSearch = search === '' ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const allFiltered = useMemo(() => {
    if (!search) return [];
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const displayProducts = search ? allFiltered : filtered;

  const getSize = (id: number): '30' | '40' => selectedSizes[id] || '30';

  const getPrice = (p: Product): number => {
    if (p.category === 'pizza' && p.price40) {
      return getSize(p.id) === '40' ? p.price40 : p.price;
    }
    return p.price;
  };

  return (
    <section id="catalog" className="py-10 px-4" style={{ backgroundColor: cfg.lightBg }}>
      <div className="max-w-7xl mx-auto">
        {/* Заголовок + поиск */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <h2 className="font-black text-2xl md:text-3xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {search ? 'ПОИСК' : cfg.label.toUpperCase()}
            </h2>
            <span className="font-handwrite text-2xl" style={{ fontFamily: 'Caveat, cursive', color: cfg.color }}>
              ∿∿∿
            </span>
          </div>

          {/* Поиск */}
          <div className="relative w-full sm:w-72">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Найти блюдо..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none transition-all"
              style={{} as React.CSSProperties}
              onFocus={(e) => e.target.style.borderColor = cfg.color}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Icon name="X" size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Сетка товаров */}
        {displayProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <div className="font-semibold text-lg">Ничего не найдено</div>
            <div className="text-sm mt-1">Попробуйте изменить запрос</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {displayProducts.map((product) => (
              <div key={product.id} className="product-card group">
                {/* Фото */}
                <div className="relative h-36 sm:h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Бейджи */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isHit && (
                      <span className="badge-theme text-xs" style={{ backgroundColor: cfg.color }}>ХИТ</span>
                    )}
                    {product.isNew && (
                      <span className="badge-theme text-xs bg-green-500">НОВИНКА</span>
                    )}
                  </div>
                </div>

                {/* Контент */}
                <div className="p-3">
                  <div className="text-xs text-gray-400 mb-0.5">{product.weight}</div>
                  <div className="font-bold text-sm text-gray-900 mb-1 leading-tight">{product.name}</div>
                  <div className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.description}</div>

                  {/* Выбор размера для пиццы */}
                  {product.category === 'pizza' && product.price40 && (
                    <div className="flex gap-1 mb-2">
                      {(['30', '40'] as const).map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSizes((prev) => ({ ...prev, [product.id]: size }))}
                          className="flex-1 py-1 text-xs font-bold rounded-lg border-2 transition-all"
                          style={{
                            borderColor: cfg.color,
                            backgroundColor: getSize(product.id) === size ? cfg.color : 'transparent',
                            color: getSize(product.id) === size ? 'white' : cfg.color,
                          }}
                        >
                          {size} см
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Цена + кнопка */}
                  <div className="flex items-center justify-between">
                    <span className="font-black text-base" style={{ color: cfg.color }}>
                      {getPrice(product)} ₽
                    </span>
                    <button
                      onClick={() => onAddToCart(product, product.category === 'pizza' ? getSize(product.id) : undefined)}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:brightness-110 hover:scale-105 flex items-center gap-1"
                      style={{ backgroundColor: cfg.color }}
                    >
                      <Icon name="ShoppingCart" size={12} className="text-white" />
                      <span>В корзину</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;