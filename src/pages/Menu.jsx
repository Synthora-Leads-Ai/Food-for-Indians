import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { menuCategories } from '../config/restaurantData';

const Menu = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const categories = Object.keys(menuCategories);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-theme-transition" style={{ background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.accent}20 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-transition"
            style={{ color: theme.colors.text }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl text-theme-transition"
            style={{ color: `${theme.colors.text}CC` }}
          >
            Pure Jain cuisine crafted with love, tradition, and the finest ingredients
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-lg bg-theme-transition"
            style={{ background: theme.colors.background }}
          >
            <span className="text-2xl">🟢</span>
            <span className="font-sans text-sm font-medium text-theme-transition" style={{ color: theme.colors.text }}>
              All dishes are 100% Pure Vegetarian | No Onion | No Garlic
            </span>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 shadow-md bg-theme-transition" style={{ background: theme.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-sans font-medium whitespace-nowrap transition-all bg-theme-transition`}
                style={
                  activeCategory === category
                    ? { background: theme.colors.gradient, color: 'white', boxShadow: `0 0 20px ${theme.colors.glow}` }
                    : { background: `${theme.colors.primary}15`, color: theme.colors.text }
                }
              >
                {menuCategories[category].name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-theme-transition" style={{ background: `${theme.colors.background}F5` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold mb-12 text-center text-theme-transition"
            style={{ color: theme.colors.text }}
          >
            {menuCategories[activeCategory].name}
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuCategories[activeCategory].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all card-theme bg-theme-transition"
                style={{ background: theme.colors.background }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 text-white px-3 py-1 rounded-full font-sans text-xs font-bold bg-theme-transition" style={{ background: theme.colors.secondary }}>
                      SIGNATURE
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl font-bold text-theme-transition" style={{ color: theme.colors.text }}>
                      {item.name}
                    </h3>
                    <span className="text-xl">🟢</span>
                  </div>
                  <p className="font-body mb-4 line-clamp-3 text-theme-transition" style={{ color: `${theme.colors.text}B3` }}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-lg font-bold text-theme-transition" style={{ color: theme.colors.primary }}>
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
