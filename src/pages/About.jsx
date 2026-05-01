import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { restaurantInfo } from '../config/restaurantData';

const About = () => {
  const { theme } = useTheme();
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-theme-transition" style={{ background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.accent}20 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold mb-6 text-theme-transition"
            style={{ color: theme.colors.text }}
          >
            Where Ancient Wisdom Meets Joyful Flavour
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl leading-relaxed text-theme-transition"
            style={{ color: `${theme.colors.text}CC` }}
          >
            Nestled opposite the Under Bridge in the heart of Madan Mahal, Jabalpur,
            Food of Indians by Jain Delight is a culinary sanctuary dedicated to the
            timeless traditions of Jain cuisine.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-theme-transition" style={{ background: theme.colors.background }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80"
                alt="Jain Thali"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.text }}>
                Our Story
              </h2>
              <div className="space-y-4 font-body text-lg leading-relaxed text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                <p>
                  We serve food that honours the Jain principle of Ahimsa — non-violence —
                  in every ingredient we choose and every dish we craft. Our kitchen is
                  strictly free from onion, garlic, potatoes, and all root vegetables. Yet
                  our menu overflows with bold flavour, vibrant colour, and deep nourishment.
                </p>
                <p>
                  Drawing from the rich culinary heritages of Gujarat, Rajasthan, and
                  Madhya Pradesh, every plate at Jain Delight tells a story of devotion,
                  craft, and love. We believe that food is not just sustenance — it is a
                  spiritual act. When made with care, compassion, and clean ingredients,
                  a simple meal can nourish the soul as much as the body.
                </p>
                <p>
                  Our cooks prepare everything fresh each morning. No overnight storage,
                  no preservatives, no compromise on purity. From our morning nashta to
                  our evening thali — every dish at Jain Delight is made to honour both
                  the diner and the traditions that inspired it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-theme-transition" style={{ background: `${theme.colors.background}F5` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.text }}>
              Our Four Pillars
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {restaurantInfo.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow card-theme bg-theme-transition"
                style={{ background: theme.colors.background }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0">{pillar.icon}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-3 text-theme-transition" style={{ color: theme.colors.text }}>
                      {pillar.title}
                    </h3>
                    <p className="font-body text-lg leading-relaxed text-theme-transition" style={{ color: `${theme.colors.text}B3` }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 text-white bg-theme-transition" style={{ background: `linear-gradient(135deg, ${theme.colors.text} 0%, ${theme.colors.text}E6 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.background }}>
              Visit Us
            </h2>
            <p className="font-body text-xl mb-4 text-theme-transition" style={{ color: `${theme.colors.background}E6` }}>
              {restaurantInfo.contact.address}
            </p>
            <p className="font-sans text-lg text-theme-transition" style={{ color: `${theme.colors.background}CC` }}>
              {restaurantInfo.contact.city}, {restaurantInfo.contact.state}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
