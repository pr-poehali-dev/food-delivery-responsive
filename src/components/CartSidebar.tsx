import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Category, categoryConfig } from '@/data/menu';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: '30' | '40';
  category: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, size: string | undefined, delta: number) => void;
  onRemove: (id: number, size: string | undefined) => void;
  activeCategory: Category;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  activeCategory,
}) => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');

  const cfg = categoryConfig[activeCategory];
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleOrder = () => {
    if (!name || !phone || !address) return;
    setStep('success');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Оверлей */}
      <div
        className="fixed inset-0 z-40 cart-backdrop animate-fade-in-up"
        style={{ animation: 'none', opacity: 1 }}
        onClick={onClose}
      />

      {/* Сайдбар */}
      <div
        className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-96 bg-white flex flex-col animate-slide-in-right"
        style={{ boxShadow: '-8px 0 40px rgba(0,0,0,0.15)' }}
      >
        {/* Шапка */}
        <div
          className="flex items-center justify-between px-4 py-4 text-white"
          style={{ backgroundColor: cfg.color }}
        >
          <div className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} className="text-white" />
            <span className="font-black text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {step === 'cart' ? 'Корзина' : step === 'checkout' ? 'Оформление' : 'Заказ принят!'}
            </span>
            {step === 'cart' && count > 0 && (
              <span className="bg-white/25 rounded-full px-2 py-0.5 text-xs font-bold">{count}</span>
            )}
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all">
            <Icon name="X" size={18} className="text-white" />
          </button>
        </div>

        {/* Контент */}
        <div className="flex-1 overflow-y-auto">

          {/* ШАГ: КОРЗИНА */}
          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <div className="text-6xl mb-4">🛒</div>
                  <div className="font-bold text-lg text-gray-700 mb-2">Корзина пуста</div>
                  <div className="text-sm text-gray-400">Добавьте что-нибудь вкусное!</div>
                  <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2.5 rounded-xl font-bold text-white text-sm"
                    style={{ backgroundColor: cfg.color }}
                  >
                    Перейти в меню
                  </button>
                </div>
              ) : (
                <div className="p-4 flex flex-col gap-3">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-3 bg-gray-50 rounded-xl p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-sm text-gray-900 leading-tight">{item.name}</div>
                        {item.size && (
                          <div className="text-xs text-gray-400 mt-0.5">{item.size} см</div>
                        )}
                        <div className="font-black text-sm mt-1" style={{ color: cfg.color }}>
                          {item.price * item.quantity} ₽
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.size, -1)}
                            className="w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all hover:bg-gray-100 font-bold"
                            style={{ borderColor: cfg.color, color: cfg.color }}
                          >
                            −
                          </button>
                          <span className="font-black text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.size, 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center transition-all text-white font-bold"
                            style={{ backgroundColor: cfg.color }}
                          >
                            +
                          </button>
                          <button
                            onClick={() => onRemove(item.id, item.size)}
                            className="ml-auto text-gray-300 hover:text-red-400 transition-colors"
                          >
                            <Icon name="Trash2" size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Комментарий */}
                  <div className="mt-2">
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Комментарий к заказу</label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Без лука, позвоните перед доставкой..."
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm resize-none focus:outline-none focus:border-opacity-100 transition-all"
                      rows={3}
                      onFocus={(e) => e.target.style.borderColor = cfg.color}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {/* ШАГ: ОФОРМЛЕНИЕ */}
          {step === 'checkout' && (
            <div className="p-4 flex flex-col gap-3">
              <div className="bg-gray-50 rounded-xl p-3 mb-2">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm py-1">
                    <span className="text-gray-700">{item.name}{item.size ? ` (${item.size}см)` : ''} × {item.quantity}</span>
                    <span className="font-bold" style={{ color: cfg.color }}>{item.price * item.quantity} ₽</span>
                  </div>
                ))}
                <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-black">
                  <span>Итого:</span>
                  <span style={{ color: cfg.color }}>{total} ₽</span>
                </div>
              </div>

              {[
                { label: 'Имя', value: name, setter: setName, placeholder: 'Ваше имя', type: 'text' },
                { label: 'Телефон', value: phone, setter: setPhone, placeholder: '+7 999 000-00-00', type: 'tel' },
                { label: 'Адрес доставки', value: address, setter: setAddress, placeholder: 'ул. Примерная, д. 1, кв. 1', type: 'text' },
              ].map((field) => (
                <div key={field.label}>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">{field.label}</label>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none transition-all"
                    onFocus={(e) => e.target.style.borderColor = cfg.color}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
              ))}

              {comment && (
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Комментарий</label>
                  <div className="px-3 py-2 rounded-xl bg-gray-50 text-sm text-gray-600">{comment}</div>
                </div>
              )}
            </div>
          )}

          {/* ШАГ: УСПЕХ */}
          {step === 'success' && (
            <div className="flex flex-col items-center justify-center h-full text-center px-6 py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 animate-scale-in"
                style={{ backgroundColor: cfg.lightBg }}>
                <Icon name="CheckCircle" size={40} style={{ color: cfg.color }} />
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Заказ принят!
              </h3>
              <p className="text-gray-500 text-sm mb-1">Мы свяжемся с вами в ближайшее время</p>
              <a href="tel:+79781646362" className="text-sm font-bold mt-1" style={{ color: cfg.color }}>
                +7 978 164-63-62
              </a>
              <button
                onClick={() => { onClose(); setStep('cart'); }}
                className="mt-6 px-6 py-2.5 rounded-xl font-bold text-white text-sm"
                style={{ backgroundColor: cfg.color }}
              >
                Отлично!
              </button>
            </div>
          )}
        </div>

        {/* Нижняя панель */}
        {items.length > 0 && step !== 'success' && (
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500 text-sm font-medium">Итого:</span>
              <span className="font-black text-xl" style={{ color: cfg.color }}>{total} ₽</span>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3.5 rounded-xl font-black text-white text-base transition-all hover:brightness-110 hover:shadow-lg"
                style={{ backgroundColor: cfg.color }}
              >
                Оформить заказ →
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setStep('cart')}
                  className="flex-shrink-0 px-4 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:bg-gray-50"
                  style={{ borderColor: cfg.color, color: cfg.color }}
                >
                  Назад
                </button>
                <button
                  onClick={handleOrder}
                  disabled={!name || !phone || !address}
                  className="flex-1 py-3 rounded-xl font-black text-white text-sm transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: cfg.color }}
                >
                  Подтвердить заказ
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
