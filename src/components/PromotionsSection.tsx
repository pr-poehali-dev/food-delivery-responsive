import React, { useState } from 'react';
import { promotions, products, Category, categoryConfig, DRINKS_IMAGE } from '@/data/menu';
import Icon from '@/components/ui/icon';

interface PromotionsSectionProps {
  activeCategory: Category;
}

const setRollsProducts = products.filter((p) => p.category === 'rolls').slice(0, 8);

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ activeCategory }) => {
  const cfg = categoryConfig[activeCategory];
  const [openModal, setOpenModal] = useState<null | 'pizza3' | 'rolls' | 'drinks'>(null);

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
          {/* Акция 1: Три по цене двух */}
          <div
            onClick={() => setOpenModal('pizza3')}
            className="relative rounded-2xl p-6 text-white overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: promotions[0].color, minHeight: 160 }}
          >
            <div className="absolute top-4 right-4 bg-white/25 rounded-xl px-3 py-1 font-black text-sm">-33%</div>
            <div className="text-4xl mb-3">🍕</div>
            <h3 className="font-black text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {promotions[0].title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">{promotions[0].description}</p>
            <div className="mt-3 flex items-center gap-1 text-white/90 text-xs font-semibold">
              <span>Подробнее</span>
              <Icon name="ChevronRight" size={14} className="text-white/90" />
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 pointer-events-none">🎉</div>
          </div>

          {/* Акция 2: Сет роллов */}
          <div
            onClick={() => setOpenModal('rolls')}
            className="relative rounded-2xl p-6 text-white overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: promotions[1].color, minHeight: 160 }}
          >
            <div className="absolute top-4 right-4 bg-white/25 rounded-xl px-3 py-1 font-black text-sm">ХИТ</div>
            <div className="text-4xl mb-3">🍱</div>
            <h3 className="font-black text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {promotions[1].title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">{promotions[1].description}</p>
            <div className="mt-3 flex items-center gap-1 text-white/90 text-xs font-semibold">
              <span>Смотреть состав</span>
              <Icon name="ChevronRight" size={14} className="text-white/90" />
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 pointer-events-none">🎉</div>
          </div>

          {/* Акция 3: Напиток в подарок */}
          <div
            onClick={() => setOpenModal('drinks')}
            className="relative rounded-2xl p-6 text-white overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            style={{ backgroundColor: promotions[2].color, minHeight: 160 }}
          >
            <div className="absolute top-4 right-4 bg-white/25 rounded-xl px-3 py-1 font-black text-sm">АКЦИЯ</div>
            <div className="text-4xl mb-3">🥤</div>
            <h3 className="font-black text-lg mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {promotions[2].title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">{promotions[2].description}</p>
            <div className="mt-3 flex items-center gap-1 text-white/90 text-xs font-semibold">
              <span>Подробнее</span>
              <Icon name="ChevronRight" size={14} className="text-white/90" />
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 pointer-events-none">🎉</div>
          </div>
        </div>
      </div>

      {/* ======= МОДАЛКА: Три по цене двух ======= */}
      {openModal === 'pizza3' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpenModal(null)}>
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Шапка */}
            <div className="relative px-6 py-5 text-white" style={{ backgroundColor: promotions[0].color }}>
              <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
                <Icon name="X" size={16} className="text-white" />
              </button>
              <div className="text-3xl mb-2">🍕</div>
              <h2 className="font-black text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Три по цене двух
              </h2>
              <p className="text-white/80 text-sm mt-1">Честнее, чем два за одного</p>
            </div>

            {/* Контент */}
            <div className="p-6">
              <div className="flex flex-col gap-3 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm" style={{ backgroundColor: promotions[0].color }}>1</div>
                  <p className="text-sm text-gray-700 leading-relaxed pt-0.5">Положите в корзину <strong>две пиццы</strong> — третья добавится автоматически со скидкой 100%</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm" style={{ backgroundColor: promotions[0].color }}>2</div>
                  <p className="text-sm text-gray-700 leading-relaxed pt-0.5">Любые начинки. Любые размеры — третья пицца не больше самой дешёвой из двух</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm" style={{ backgroundColor: promotions[0].color }}>3</div>
                  <p className="text-sm text-gray-700 leading-relaxed pt-0.5">Оформите заказ онлайн или по телефону</p>
                </div>
              </div>

              {/* Условия */}
              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#FFF3ED' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🚚</span>
                  <span className="font-bold text-sm text-gray-800">Доставка ~45 мин</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Исключение — вечер пятницы и субботы (ожидание может быть дольше). На <strong>самовывоз</strong> акция работает всегда!
                </p>
              </div>

              <button
                onClick={() => setOpenModal(null)}
                className="w-full py-3 rounded-xl font-black text-white text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: promotions[0].color }}
              >
                Заказать пиццу
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======= МОДАЛКА: Сет роллов ======= */}
      {openModal === 'rolls' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpenModal(null)}>
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-lg w-full animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative px-6 py-5 text-white" style={{ backgroundColor: promotions[1].color }}>
              <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
                <Icon name="X" size={16} className="text-white" />
              </button>
              <div className="text-3xl mb-2">🍱</div>
              <h2 className="font-black text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Сет роллов — 550 ₽
              </h2>
              <p className="text-white/80 text-sm mt-1">8 штук на выбор из нашего меню</p>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">Выберите любые 8 роллов из нашего ассортимента по специальной цене. В состав сета входят:</p>
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                {setRollsProducts.map((p, i) => (
                  <div key={p.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white font-black text-xs flex-shrink-0" style={{ backgroundColor: promotions[1].color }}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">{p.name}</div>
                      <div className="text-xs text-gray-400">{p.description}</div>
                    </div>
                    <div className="ml-auto text-xs font-black" style={{ color: promotions[1].color }}>{p.weight}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setOpenModal(null)}
                className="w-full mt-5 py-3 rounded-xl font-black text-white text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: promotions[1].color }}
              >
                Заказать сет
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ======= МОДАЛКА: Напиток в подарок ======= */}
      {openModal === 'drinks' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setOpenModal(null)}>
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-md w-full animate-scale-in shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative px-6 py-5 text-white" style={{ backgroundColor: promotions[2].color }}>
              <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all">
                <Icon name="X" size={16} className="text-white" />
              </button>
              <div className="text-3xl mb-2">🥤</div>
              <h2 className="font-black text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Напиток в подарок
              </h2>
              <p className="text-white/80 text-sm mt-1">При заказе от 1000 ₽</p>
            </div>

            <div className="p-6">
              <img
                src={DRINKS_IMAGE}
                alt="Напиток в подарок"
                className="w-full h-44 object-cover rounded-2xl mb-4"
              />
              <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#E8FAF4' }}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  При оформлении заказа <strong>от 1000 ₽</strong> мы добавляем любой напиток объёмом <strong>400 мл бесплатно</strong>.
                  Мохито, лимонад, милк-шейк — на ваш выбор!
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                <Icon name="Info" size={14} className="text-gray-300 flex-shrink-0" />
                <span>Акция действует только при доставке по Севастополю</span>
              </div>
              <button
                onClick={() => setOpenModal(null)}
                className="w-full py-3 rounded-xl font-black text-white text-sm transition-all hover:brightness-110"
                style={{ backgroundColor: promotions[2].color }}
              >
                Заказать с напитком
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PromotionsSection;
