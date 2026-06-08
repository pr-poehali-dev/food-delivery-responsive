export type Category = 'pizza' | 'rolls' | 'drinks';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  price40?: number;
  weight?: string;
  category: Category;
  subcategory?: string;
  image: string;
  isHit?: boolean;
  isNew?: boolean;
  badge?: string;
}

export const PIZZA_IMAGE = 'https://cdn.poehali.dev/projects/e4f979cf-f29b-48da-b7ce-81fed7878036/files/c875a0bc-dec3-42b5-aa00-fe71e5caee64.jpg';
export const ROLLS_IMAGE = 'https://cdn.poehali.dev/projects/e4f979cf-f29b-48da-b7ce-81fed7878036/files/57415ae1-8d71-40b3-bccb-8e54e245c0c7.jpg';
export const DRINKS_IMAGE = 'https://cdn.poehali.dev/projects/e4f979cf-f29b-48da-b7ce-81fed7878036/files/d9e97580-e7b5-4e22-ad70-7d1f51e5c370.jpg';

export const products: Product[] = [

  // ==================== ПИЦЦЫ ====================

  // -- Курица --
  { id: 1, name: 'Курица грибы', description: 'Соус сливочный, моцарелла, курица, шампиньоны, черри, перец чёрный', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE, isHit: true },
  { id: 2, name: 'Курица и мёд', description: 'Соус сливочный, моцарелла, курица, ананас, арахис, руккола, мёд, кокосовая стружка', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE },
  { id: 3, name: 'Курица терияки', description: 'Соус сливочный, шпинат, моцарелла, курица, болгарский перец, шампиньоны, черри, терияки, кунжут', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE, isHit: true },
  { id: 4, name: 'Гавайский цыплёнок', description: 'Соус сливочный, моцарелла, курица, ананас, арахис, кокосовая стружка', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE },
  { id: 5, name: 'Фри лайт', description: 'Соус сливочный, соус сырный, моцарелла, курица, картофель фри', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE },
  { id: 6, name: 'Курица базилик', description: 'Соус томат, базилик, черри, моцарелла, курица филе, травы прованские', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE },
  { id: 7, name: 'Курица шпинат', description: 'Соус сливочный, шпинат, черри, курица, чеддер, моцарелла', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE },
  { id: 8, name: 'Азия', description: 'Соус томат, шпинат, черри, курица, баклажан, моцарелла, сладкий чили', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Курица 🐔', image: PIZZA_IMAGE, isNew: true },

  // -- Кальцоне --
  { id: 9, name: 'Курочка и помидорка', description: 'Соус пряный, моцарелла, курица, помидоры', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Кальцоне 🥟', image: PIZZA_IMAGE },
  { id: 10, name: 'Бекон и грибы', description: 'Соус пряный, моцарелла, бекон, шампиньоны', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Кальцоне 🥟', image: PIZZA_IMAGE },
  { id: 11, name: 'Окорок и баклажан', description: 'Соус томат, соус бургер, моцарелла, окорок, баклажан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Кальцоне 🥟', image: PIZZA_IMAGE },
  { id: 12, name: 'Шпинат и оливы', description: 'Соус сливочный, шпинат, моцарелла, оливы', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Кальцоне 🥟', image: PIZZA_IMAGE },

  // -- Мясо --
  { id: 13, name: 'Мясная', description: 'Соус томатный, соус пряный, курица, окорок, бекон, помидоры, лук ялта, моцарелла', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE, isHit: true },
  { id: 14, name: 'Бургер', description: 'Соус сливочный, соус бургер, моцарелла, окорок, бекон, айсберг, огурец, черри, лук ялта', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE },
  { id: 15, name: 'Колбасная', description: 'Соус пряный, моцарелла, пепперони, охотничьи колбаски, травы прованские, перец чёрный, бекон', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE, isHit: true },
  { id: 16, name: 'Цезарь', description: 'Соус сливочный, соус цезарь, моцарелла, пармезан, бекон, курица, айсберг, черри', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE, isHit: true },
  { id: 17, name: 'Грибы и мясо', description: 'Соус томат, соус пряный, окорок, бекон, помидоры, лук ялта, шампиньоны, моцарелла', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE },
  { id: 18, name: 'Перепелиная', description: 'Соус сливочный, моцарелла, бекон, яйца перепелиные, черри, лук ялта, перец чёрный, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE },
  { id: 19, name: 'Острая охота', description: 'Соус томат, моцарелла, колбаски, окорок, бекон, халапеньо, баклажан, болгарский перец, черри, лук ялта, травы прованские', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE, isNew: true },
  { id: 20, name: 'Четыре сезона', description: 'Соус томатный, моцарелла, пепперони, базилик, шпинат, оливы, бекон, шампиньоны, травы прованские, черри', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Мясо 🥩', image: PIZZA_IMAGE },

  // -- Без мяса --
  { id: 21, name: 'Медовый арахис', description: 'Соус сливочный, моцарелла, чеддер, дор блю, арахис, руккола, мёд', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 22, name: 'Груша дор блю', description: 'Соус сливочный, моцарелла, груша, дор блю, руккола', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 23, name: 'Олива', description: 'Соус томат, шпинат, моцарелла, дор блю, оливы, черри, руккола, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 24, name: 'Креветка', description: 'Соус сливочный, шпинат, моцарелла, креветки коктейльные, черри, руккола, соус ореховый', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE, isHit: true },
  { id: 25, name: 'Форель', description: 'Соус сливочный, соус кунжутовый, базилик, моцарелла, оливы, шпинат, черри, форель, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 26, name: 'Грибы и сыр', description: 'Соус сливочный, моцарелла, чеддер, шпинат, шампиньоны, черри, травы прованские, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 27, name: 'Шакшука', description: 'Соус томат, базилик, шпинат, черри, баклажан, яйца перепелиные, перец чёрный, моцарелла', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 28, name: 'Четыре сыра', description: 'Соус сливочный, моцарелла, чеддер, дор блю, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE, isHit: true },
  { id: 29, name: 'Шпинат и сыр', description: 'Соус сливочный, шпинат, моцарелла, чеддер, дор блю, руккола, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 30, name: 'Маргарита', description: 'Соус томат, базилик, моцарелла, черри, травы прованские, пармезан', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 31, name: 'Маргарита чили', description: 'Соус томат, базилик, моцарелла, халапеньо, болгарский перец, черри, травы прованские', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },
  { id: 32, name: 'Маргарита орех', description: 'Соус томат, базилик, моцарелла, арахис, черри, руккола, соус ореховый', price: 650, price40: 850, weight: '30 см', category: 'pizza', subcategory: 'Без мяса 🌿', image: PIZZA_IMAGE },

  // ==================== РОЛЛЫ ====================

  // -- Запечённые --
  { id: 33, name: 'Сырный ролл (лосось)', description: 'Нори, рис, сыр, груша, лосось — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE, isHit: true },
  { id: 34, name: 'Сырный ролл (креветка)', description: 'Нори, рис, сыр, груша, креветка — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 35, name: 'Сырный ролл (угорь)', description: 'Нори, рис, сыр, груша, угорь — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 36, name: 'Сырный ролл (краб)', description: 'Нори, рис, сыр, груша, краб — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 37, name: 'Лава ролл (лосось)', description: 'Нори, рис, сыр, авокадо, лосось — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE, isHit: true },
  { id: 38, name: 'Лава ролл (креветка)', description: 'Нори, рис, сыр, авокадо, креветка — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 39, name: 'Лава ролл (угорь)', description: 'Нори, рис, сыр, авокадо, угорь — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 40, name: 'Лава ролл (краб)', description: 'Нори, рис, сыр, авокадо, краб — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 41, name: 'Спайси ролл (лосось)', description: 'Нори, рис, сыр, томат, лосось — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 42, name: 'Спайси ролл (креветка)', description: 'Нори, рис, сыр, томат, креветка — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 43, name: 'Спайси ролл (угорь)', description: 'Нори, рис, сыр, томат, угорь — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },
  { id: 44, name: 'Спайси ролл (краб)', description: 'Нори, рис, сыр, томат, краб — запечённый', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Запечённые 🔥', image: ROLLS_IMAGE },

  // -- Темпура --
  { id: 45, name: 'Темпура лосось', description: 'Нори, рис, сыр, томаго, лосось в темпуре', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Темпура 🍤', image: ROLLS_IMAGE, isHit: true },
  { id: 46, name: 'Темпура креветка', description: 'Нори, рис, сыр, авокадо, креветки в темпуре', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Темпура 🍤', image: ROLLS_IMAGE },
  { id: 47, name: 'Темпура угорь', description: 'Нори, рис, сыр, груша, угорь в темпуре', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Темпура 🍤', image: ROLLS_IMAGE },
  { id: 48, name: 'Темпура курица', description: 'Нори, рис, сыр, ананас, курица копчёная в темпуре', price: 400, weight: '8 шт', category: 'rolls', subcategory: 'Темпура 🍤', image: ROLLS_IMAGE },

  // -- Шаурол --
  { id: 49, name: 'Шаурол лосось', description: 'Нори, рис, сыр, томато, лосось', price: 450, weight: '1 шт', category: 'rolls', subcategory: 'Шаурол 🌯', image: ROLLS_IMAGE },
  { id: 50, name: 'Шаурол бекон', description: 'Нори, рис, спайси, айсберг, помидор, бекон', price: 400, weight: '1 шт', category: 'rolls', subcategory: 'Шаурол 🌯', image: ROLLS_IMAGE },
  { id: 51, name: 'Шаурол курица', description: 'Нори, рис, сыр, огурец, курица', price: 400, weight: '1 шт', category: 'rolls', subcategory: 'Шаурол 🌯', image: ROLLS_IMAGE },

  // ==================== НАПИТКИ ====================

  // -- Кофе классика --
  { id: 52, name: 'Эспрессо', description: 'Классический эспрессо', price: 120, weight: '60 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 53, name: 'Американо', description: 'Эспрессо с горячей водой', price: 100, weight: '250 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 54, name: 'Американо большой', description: 'Эспрессо с горячей водой', price: 130, weight: '350 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 55, name: 'Капучино', description: 'Эспрессо, молоко, молочная пена', price: 160, weight: '250 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE, isHit: true },
  { id: 56, name: 'Капучино большой', description: 'Эспрессо, молоко, молочная пена', price: 200, weight: '350 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 57, name: 'Флэт уайт', description: 'Двойной эспрессо с микропенкой', price: 200, weight: '250 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 58, name: 'Латте', description: 'Эспрессо с молоком', price: 200, weight: '350 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 59, name: 'Раф', description: 'Эспрессо, сливки, ванильный сахар', price: 200, weight: '250 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 60, name: 'Раф большой', description: 'Эспрессо, сливки, ванильный сахар', price: 240, weight: '350 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 61, name: 'Мокко', description: 'Эспрессо, молоко, шоколад', price: 190, weight: '250 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },
  { id: 62, name: 'Мокко большой', description: 'Эспрессо, молоко, шоколад', price: 220, weight: '350 мл', category: 'drinks', subcategory: 'Кофе ☕', image: DRINKS_IMAGE },

  // -- Не кофе --
  { id: 63, name: 'Какао', description: 'Натуральное какао', price: 140, weight: '250 мл', category: 'drinks', subcategory: 'Не кофе 🍵', image: DRINKS_IMAGE },
  { id: 64, name: 'Какао большой', description: 'Натуральное какао', price: 170, weight: '350 мл', category: 'drinks', subcategory: 'Не кофе 🍵', image: DRINKS_IMAGE },
  { id: 65, name: 'Чай в ассортименте', description: 'Большой выбор чаёв — чёрный, зелёный, фруктовый', price: 120, weight: '300 мл', category: 'drinks', subcategory: 'Не кофе 🍵', image: DRINKS_IMAGE },
  { id: 66, name: 'Сок в ассортименте', description: 'Свежий сок на выбор', price: 140, weight: '200 мл', category: 'drinks', subcategory: 'Не кофе 🍵', image: DRINKS_IMAGE },

  // -- Холодный кофе --
  { id: 67, name: 'Айс латте', description: 'Эспрессо, молоко, лёд', price: 240, weight: '500 мл', category: 'drinks', subcategory: 'Холодный кофе ❄️', image: DRINKS_IMAGE, isHit: true },
  { id: 68, name: 'Бамбл апельсин', description: 'Эспрессо, апельсиновый сок, лёд', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Холодный кофе ❄️', image: DRINKS_IMAGE },
  { id: 69, name: 'Бамбл вишня', description: 'Эспрессо, вишнёвый сок, лёд', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Холодный кофе ❄️', image: DRINKS_IMAGE },
  { id: 70, name: 'Эспрессо-тоник', description: 'Эспрессо, тоник, лёд', price: 240, weight: '500 мл', category: 'drinks', subcategory: 'Холодный кофе ❄️', image: DRINKS_IMAGE },
  { id: 71, name: 'Айс мокко', description: 'Эспрессо, молоко, шоколад, лёд', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Холодный кофе ❄️', image: DRINKS_IMAGE },

  // -- Милкшейки --
  { id: 72, name: 'Классический шейк', description: 'Мороженое, молоко, ваниль', price: 240, weight: '500 мл', category: 'drinks', subcategory: 'Милкшейки 🥛', image: DRINKS_IMAGE },
  { id: 73, name: 'Клубничный шейк', description: 'Мороженое, молоко, клубничный сироп', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Милкшейки 🥛', image: DRINKS_IMAGE, isHit: true },
  { id: 74, name: 'Шоколадный шейк', description: 'Мороженое, молоко, шоколадный сироп', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Милкшейки 🥛', image: DRINKS_IMAGE },

  // -- Лимонады --
  { id: 75, name: 'Мохито классический', description: 'Лимон, лайм, мята, сироп, содовая', price: 250, weight: '500 мл', category: 'drinks', subcategory: 'Лимонады 🍹', image: DRINKS_IMAGE, isHit: true },
  { id: 76, name: 'Персик-кокос', description: 'Персик, кокос, лимон, содовая', price: 240, weight: '500 мл', category: 'drinks', subcategory: 'Лимонады 🍹', image: DRINKS_IMAGE },
  { id: 77, name: 'Малиновый', description: 'Малина, лимон, мята, содовая', price: 230, weight: '500 мл', category: 'drinks', subcategory: 'Лимонады 🍹', image: DRINKS_IMAGE },
  { id: 78, name: 'Апельсин-кордиал', description: 'Апельсин, кордиал, лёд, содовая', price: 230, weight: '500 мл', category: 'drinks', subcategory: 'Лимонады 🍹', image: DRINKS_IMAGE },
  { id: 79, name: 'Морс в ассортименте', description: 'Натуральный морс на выбор', price: 120, weight: '500 мл', category: 'drinks', subcategory: 'Лимонады 🍹', image: DRINKS_IMAGE },

  // -- Смузи --
  { id: 80, name: 'Смузи ягодный', description: 'Ассорти ягод, банан, молоко', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Смузи 🍌', image: DRINKS_IMAGE },
  { id: 81, name: 'Банан-клубника', description: 'Банан, клубника, йогурт', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Смузи 🍌', image: DRINKS_IMAGE, isHit: true },
  { id: 82, name: 'Киви-яблоко', description: 'Киви, яблоко, мёд, мята', price: 260, weight: '500 мл', category: 'drinks', subcategory: 'Смузи 🍌', image: DRINKS_IMAGE },
];

export const promotions = [
  {
    id: 1,
    title: 'Три по цене двух',
    description: 'При заказе 2-х пицц — третья в подарок!',
    badge: '-33%',
    color: '#E8622A',
    emoji: '🍕',
  },
  {
    id: 2,
    title: 'Сет роллов 400₽',
    description: '8 штук на выбор — Запечённые, Темпура, Шаурол',
    badge: 'ХИТ',
    color: '#7B3FA0',
    emoji: '🍱',
  },
  {
    id: 3,
    title: 'Напиток в подарок',
    description: 'При заказе от 1000₽ — напиток 500мл бесплатно',
    badge: 'АКЦИЯ',
    color: '#4BAF8C',
    emoji: '🥤',
  },
];

export const categoryConfig = {
  pizza: {
    label: 'Пицца',
    heroTitle: 'ТА САМАЯ\nПИЦЦА',
    heroSubtitle: 'вкус, который хочется заказать снова',
    heroBadge: '30 СМ – 650 ₽ / 40 СМ – 850 ₽',
    color: '#E8622A',
    darkColor: '#c94d1a',
    lightBg: '#FFF3ED',
    image: PIZZA_IMAGE,
    desc: 'Более 30 видов пиццы на любой вкус',
    themeClass: 'theme-pizza',
  },
  rolls: {
    label: 'Роллы',
    heroTitle: 'ТЕ САМЫЕ\nРОЛЛЫ',
    heroSubtitle: 'запечённые, темпура и шаурол — от 400 ₽',
    heroBadge: 'от 400 ₽ · 8 шт',
    color: '#7B3FA0',
    darkColor: '#5e2c80',
    lightBg: '#F5EEFF',
    image: ROLLS_IMAGE,
    desc: 'Запечённые, темпура и шаурол',
    themeClass: 'theme-rolls',
  },
  drinks: {
    label: 'Напитки',
    heroTitle: 'ТЕ САМЫЕ\nНАПИТКИ',
    heroSubtitle: 'кофе, лимонады, смузи и милкшейки',
    heroBadge: 'от 100 ₽ · любой вкус',
    color: '#4BAF8C',
    darkColor: '#2d9470',
    lightBg: '#E8FAF4',
    image: DRINKS_IMAGE,
    desc: 'Кофе, лимонады, смузи и шейки',
    themeClass: 'theme-drinks',
  },
};
