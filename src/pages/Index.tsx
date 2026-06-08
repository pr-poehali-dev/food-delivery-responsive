import React, { useState, useCallback } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoryCards from '@/components/CategoryCards';
import Features from '@/components/Features';
import HitsSection from '@/components/HitsSection';
import PromotionsSection from '@/components/PromotionsSection';
import CatalogSection from '@/components/CatalogSection';
import DeliverySection from '@/components/DeliverySection';
import Footer from '@/components/Footer';
import CartSidebar, { CartItem } from '@/components/CartSidebar';
import { Category, categoryConfig, Product, products } from '@/data/menu';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('pizza');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cfg = categoryConfig[activeCategory];
  const hits = products.filter((p) => p.isHit);

  const handleCategoryChange = useCallback((cat: Category) => {
    setActiveCategory(cat);
    setTimeout(() => {
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }, []);

  const handleAddToCart = useCallback((product: Product, size?: '30' | '40') => {
    const price = product.category === 'pizza' && size === '40' && product.price40
      ? product.price40
      : product.price;

    setCartItems((prev) => {
      const key = `${product.id}-${size || ''}`;
      const existing = prev.find((i) => `${i.id}-${i.size || ''}` === key);
      if (existing) {
        return prev.map((i) =>
          `${i.id}-${i.size || ''}` === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price,
        image: product.image,
        quantity: 1,
        size,
        category: product.category,
      }];
    });
    setIsCartOpen(true);
  }, []);

  const handleUpdateQuantity = useCallback((id: number, size: string | undefined, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.id === id && (item.size || '') === (size || '')) {
            return { ...item, quantity: Math.max(0, item.quantity + delta) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  }, []);

  const handleRemove = useCallback((id: number, size: string | undefined) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && (item.size || '') === (size || '')))
    );
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  const scrollToMenu = () => {
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalog = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${cfg.themeClass}`}>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        cartCount={cartCount}
        onCartOpen={() => setIsCartOpen(true)}
      />

      <main>
        <HeroSection
          activeCategory={activeCategory}
          onOrderClick={() => setIsCartOpen(true)}
          onMenuClick={scrollToMenu}
        />

        <CategoryCards
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <Features activeCategory={activeCategory} />

        <HitsSection
          hits={hits}
          themeColor={cfg.color}
          lightBg={cfg.lightBg}
          onAddToCart={handleAddToCart}
          onSeeAll={scrollToCatalog}
        />

        <PromotionsSection activeCategory={activeCategory} />

        <CatalogSection
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />

        <DeliverySection activeCategory={activeCategory} />
      </main>

      <Footer activeCategory={activeCategory} />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        activeCategory={activeCategory}
      />
    </div>
  );
};

export default Index;
