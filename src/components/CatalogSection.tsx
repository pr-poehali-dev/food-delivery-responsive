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
  const [activeSubcat, setActiveSubcat] = useState<string | null>(null);
  const cfg = categoryConfig[activeCategory];

  // При смене категории сбрасываем подкатегорию
  const prevCat = React.useRef(activeCategory);
  if (prevCat.current !== activeCategory) {
    prevCat.current = activeCategory;
    setActiveSubcat(null);
  }

  // Подкатегории текущей категории
  const subcategories = useMemo(() => {
    const cats = products
      .filter((p) => p.category === activeCategory && p.subcategory)
      .map((p) => p.subcategory as string);
    return Array.from(new Set(cats));
  }, [activeCategory]);

  // Фильтр: поиск по всем, или категория + подкатегория
  const displayProducts = useMemo(() => {
    if (search) {
      return products.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    return products.filter((p) => {
      const matchCat = p.category === activeCategory;
      const matchSubcat = !activeSubcat || p.subcategory === activeSubcat;
      return matchCat && matchSubcat;
    });
  }, [activeCategory, search, activeSubcat]);

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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <h2 className="font-black text-2xl md:text-3xl text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {search ? 'ПОИСК' : cfg.label.toUpperCase()}
            </h2>
            <span className="font-handwrite text-2xl" style={{ fontFamily: 'Caveat, cursive', color: cfg.color }}>
              ∿∿∿
            </span>
          </div>
          <div className="relative w-full sm:w-72">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Найти блюдо..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none transition-all"
              onFocus={(e) => (e.target.style.borderColor = cfg.color)}
              onBlur={(e) => (e.target.style.borderColor = '#e5e7eb')}
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

        {/* Подкатегории-кнопки (только без поиска) */}
        {!search && subcategories.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveSubcat(null)}
              className="px-4 py-1.5 rounded-full text-xs font-bold transition-all border-2"
              style={{
                borderColor: cfg.color,
                backgroundColor: activeSubcat === null ? cfg.color : 'transparent',
                color: activeSubcat === null ? 'white' : cfg.color,
              }}
            >
              Все
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubcat(sub)}
                className="px-4 py-1.5 rounded-full text-xs font-bold transition-all border-2"
                style={{
                  borderColor: cfg.color,
                  backgroundColor: activeSubcat === sub ? cfg.color : 'transparent',
                  color: activeSubcat === sub ? 'white' : cfg.color,
                }}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Если нет поиска — группируем по подкатегориям */}
        {!search && activeSubcat === null ? (
          // Полный каталог сгруппирован по подкатегориям
          <div className="flex flex-col gap-10">
            {subcategories.map((sub) => {
              const subProducts = displayProducts.filter((p) => p.subcategory === sub);
              if (!subProducts.length) return null;
              return (
                <div key={sub}>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-black text-lg text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {sub}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">— {subProducts.length} позиций</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {subProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        cfg={cfg}
                        getSize={getSize}
                        getPrice={getPrice}
                        setSelectedSizes={setSelectedSizes}
                        onAddToCart={onAddToCart}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <div className="font-semibold text-lg">Ничего не найдено</div>
            <div className="text-sm mt-1">Попробуйте изменить запрос</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cfg={cfg}
                getSize={getSize}
                getPrice={getPrice}
                setSelectedSizes={setSelectedSizes}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Вынесенная карточка товара
interface ProductCardProps {
  product: Product;
  cfg: { color: string; lightBg: string; [key: string]: unknown };
  getSize: (id: number) => '30' | '40';
  getPrice: (p: Product) => number;
  setSelectedSizes: React.Dispatch<React.SetStateAction<Record<number, '30' | '40'>>>;
  onAddToCart: (product: Product, size?: '30' | '40') => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, cfg, getSize, getPrice, setSelectedSizes, onAddToCart }) => (
  <div className="product-card group">
    <div className="relative h-36 sm:h-40 overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {product.isHit && (
          <span className="badge-theme text-xs" style={{ backgroundColor: cfg.color as string }}>ХИТ</span>
        )}
        {product.isNew && (
          <span className="badge-theme text-xs" style={{ backgroundColor: '#22c55e' }}>НОВИНКА</span>
        )}
      </div>
    </div>
    <div className="p-3">
      <div className="text-xs text-gray-400 mb-0.5">{product.weight}</div>
      <div className="font-bold text-sm text-gray-900 mb-1 leading-tight">{product.name}</div>
      <div className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{product.description}</div>

      {product.category === 'pizza' && product.price40 && (
        <div className="flex gap-1 mb-2">
          {(['30', '40'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSizes((prev) => ({ ...prev, [product.id]: size }))}
              className="flex-1 py-1 text-xs font-bold rounded-lg border-2 transition-all"
              style={{
                borderColor: cfg.color as string,
                backgroundColor: getSize(product.id) === size ? (cfg.color as string) : 'transparent',
                color: getSize(product.id) === size ? 'white' : (cfg.color as string),
              }}
            >
              {size} см
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="font-black text-base" style={{ color: cfg.color as string }}>
          {getPrice(product)} ₽
        </span>
        <button
          onClick={() => onAddToCart(product, product.category === 'pizza' ? getSize(product.id) : undefined)}
          className="px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:brightness-110 hover:scale-105 flex items-center gap-1"
          style={{ backgroundColor: cfg.color as string }}
        >
          <Icon name="ShoppingCart" size={12} className="text-white" />
          <span>В корзину</span>
        </button>
      </div>
    </div>
  </div>
);

export default CatalogSection;
