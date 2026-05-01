import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import { useTheme } from '../context/ThemeContext';
import { specialties, restaurantInfo } from '../config/restaurantData';

const Home = () => {
  const { theme } = useTheme();
  
  return (
    <div>
      <Hero />
      
      {/* Featured Specialties */}
      <section className="py-20 bg-theme-transition" style={{ background: `${theme.colors.text}E6` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.background }}>
              Our Signature Dishes
            </h2>
            <p className="font-body text-xl max-w-2xl mx-auto text-theme-transition" style={{ color: `${theme.colors.background}B3` }}>
              The dishes that define us — crafted with love, tradition, and the finest ingredients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.slice(0, 4).map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group rounded-2xl overflow-hidden shadow-lg bg-theme-transition"
                style={{ background: `${theme.colors.background}E6` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-2xl font-bold text-white mb-1">
                      {dish.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-body mb-4 line-clamp-3 text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                    {dish.description}
                  </p>
                  <div className="flex items-center font-sans font-medium group-hover:gap-2 transition-all text-theme-transition" style={{ color: theme.colors.primary }}>
                    <span>Learn More</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/specialties"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-sans font-semibold transition-all bg-theme-transition"
              style={{ 
                background: theme.colors.gradient,
                boxShadow: `0 0 30px ${theme.colors.glow}`
              }}
            >
              <span>View All Specialties</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-theme-transition" style={{ background: `linear-gradient(135deg, ${theme.colors.text}F2 0%, ${theme.colors.text}E6 100%)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.background }}>
              Our Four Pillars
            </h2>
            <p className="font-body text-xl max-w-2xl mx-auto text-theme-transition" style={{ color: `${theme.colors.background}B3` }}>
              The foundation of everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantInfo.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl shadow-lg text-center card-theme bg-theme-transition"
                style={{ background: `${theme.colors.background}E6` }}
              >
                <div className="text-6xl mb-4">{pillar.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3 text-theme-transition" style={{ color: theme.colors.text }}>
                  {pillar.title}
                </h3>
                <p className="font-body text-theme-transition" style={{ color: `${theme.colors.text}B3` }}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white border-t bg-theme-transition" style={{ 
        background: `linear-gradient(135deg, ${theme.colors.text} 0%, ${theme.colors.text}E6 100%)`,
        borderColor: `${theme.colors.primary}40`
      }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.background }}>
              Experience Pure Jain Cuisine
            </h2>
            <p className="font-body text-xl mb-8 text-theme-transition" style={{ color: `${theme.colors.background}E6` }}>
              Visit us at Madan Mahal, Jabalpur and taste the difference that compassion makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-sans font-semibold transition-all bg-theme-transition"
                style={{ 
                  background: theme.colors.gradient,
                  boxShadow: `0 0 30px ${theme.colors.glow}`
                }}
              >
                <span>View Full Menu</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-semibold transition-all bg-theme-transition"
                style={{ 
                  background: 'transparent',
                  color: theme.colors.primary,
                  border: `2px solid ${theme.colors.primary}`
                }}
              >
                <span>Find Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
