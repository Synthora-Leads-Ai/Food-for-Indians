import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { specialties } from '../config/restaurantData';

const Specialties = () => {
  const { theme } = useTheme();
  
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
            Our Pride — The Dishes That Define Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl text-theme-transition"
            style={{ color: `${theme.colors.text}CC` }}
          >
            These are the dishes that have made us famous across Jabalpur
          </motion.p>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-20 bg-theme-transition" style={{ background: theme.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {specialties.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 text-white px-4 py-2 rounded-full font-sans text-sm font-bold flex items-center gap-2 bg-theme-transition" style={{ background: theme.colors.secondary }}>
                      <Star size={16} fill="currentColor" />
                      <span>SIGNATURE</span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.text }}>
                    {dish.name}
                  </h2>
                  <p className="font-body text-xl mb-6 leading-relaxed text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                    {dish.description}
                  </p>
                  <div className="p-6 rounded-xl bg-theme-transition" style={{ background: `${theme.colors.primary}15` }}>
                    <h3 className="font-display text-lg font-bold mb-2 text-theme-transition" style={{ color: theme.colors.primary }}>
                      Why It's Special
                    </h3>
                    <p className="font-body text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                      {dish.whySpecial}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-white bg-theme-transition" style={{ background: `linear-gradient(135deg, ${theme.colors.text} 0%, ${theme.colors.text}E6 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.background }}>
              Ready to Experience These Flavours?
            </h2>
            <p className="font-body text-xl mb-8 text-theme-transition" style={{ color: `${theme.colors.background}E6` }}>
              Visit us at Madan Mahal, Jabalpur or call to place your order
            </p>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-sans font-semibold transition-all bg-theme-transition"
              style={{ 
                background: theme.colors.gradient,
                boxShadow: `0 0 30px ${theme.colors.glow}`
              }}
            >
              <span>Call to Order</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Specialties;
