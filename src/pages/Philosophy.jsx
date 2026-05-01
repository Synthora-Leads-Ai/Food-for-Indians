import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Philosophy = () => {
  const { theme } = useTheme();
  
  const notIncluded = [
    { item: "Onion & Garlic", reason: "Root bulbs that harm soil microorganisms. Also considered tamasic." },
    { item: "Root Vegetables", reason: "Potatoes, carrots, radish, beets, turnips — contain infinite life forms." },
    { item: "Mushrooms & Fungi", reason: "Considered multi-sensed organisms in Jain classification." },
    { item: "Meat, Fish, Eggs", reason: "Complete violence to a living being." },
    { item: "Honey", reason: "Collecting honey causes harm to bees." },
    { item: "Alcohol", reason: "Fermented, involves microorganism life cycles." }
  ];

  const included = [
    "Grains: Wheat, rice, bajra, jowar, maize, semolina",
    "Lentils & Pulses: Moong dal, chana dal, toor dal, rajma, chhole",
    "Above-Ground Vegetables: Tomatoes, capsicum, bottle gourd, pumpkin, beans, peas, corn",
    "Dairy: Milk, curd, paneer, ghee, butter, cream, chaas",
    "Nuts & Dried Fruit: Cashews, almonds, raisins, peanuts, dates, coconut",
    "Spices: Cumin, mustard seeds, coriander, turmeric, cardamom, cinnamon"
  ];

  const principles = [
    {
      title: "AHIMSA (Non-Violence)",
      description: "The foundational principle. No living being should be unnecessarily harmed for human food."
    },
    {
      title: "APARIGRAHA (Non-Possessiveness)",
      description: "Eat only what is needed. Avoid waste. Do not hoard or overconsume."
    },
    {
      title: "SATYA (Truthfulness)",
      description: "Food should be what it claims to be. Pure, honest, unadulterated."
    },
    {
      title: "SHAUCHA (Purity)",
      description: "Cleanliness of the kitchen, the ingredients, the cook's hands and mind."
    },
    {
      title: "TAPASYA (Self-Discipline)",
      description: "Seasonal fasting, avoiding night-time eating, conscious consumption."
    },
    {
      title: "ANEKANTAVADA (Many-Sidedness)",
      description: "Jain food culture adapts and evolves with regional cuisines."
    }
  ];

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
            The Philosophy Behind Our Food
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl leading-relaxed text-theme-transition"
            style={{ color: `${theme.colors.text}CC` }}
          >
            Jain cuisine is not simply a diet — it is a way of life rooted in one of
            the world's oldest religions. At Food of Indians, we cook by the same
            principles that Jain monks and households have followed for over 2,500 years.
          </motion.p>
        </div>
      </section>

      {/* What is Jain Food */}
      <section className="py-20 bg-theme-transition" style={{ background: theme.colors.background }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.text }}>
              What is Jain Food?
            </h2>
            <div className="space-y-4 font-body text-lg leading-relaxed text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
              <p>
                Jain cuisine is one of the most compassionate and non-violent diets on
                the planet. It is 100% lacto-vegetarian, and goes further than standard
                vegetarianism by excluding foods that cause harm to living organisms —
                even microorganisms — during harvest or preparation.
              </p>
              <p>
                The core belief is <span className="font-bold text-theme-transition" style={{ color: theme.colors.primary }}>Ahimsa (non-violence)</span>. 
                Every Jain dietary rule traces back to this single principle: cause the least possible harm.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's NOT Included */}
      <section className="py-20 bg-theme-transition" style={{ background: `${theme.colors.background}F5` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.text }}>
              What Jain Food Does NOT Include (and WHY)
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {notIncluded.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl shadow-lg card-theme bg-theme-transition"
                style={{ background: theme.colors.background }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X size={20} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      {item.item}
                    </h3>
                    <p className="font-body text-theme-transition" style={{ color: `${theme.colors.text}B3` }}>
                      {item.reason}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What IS Used */}
      <section className="py-20 bg-theme-transition" style={{ background: theme.colors.background }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.text }}>
              What IS Used in Jain Cooking
            </h2>
            <p className="font-body text-xl text-theme-transition" style={{ color: `${theme.colors.text}B3` }}>
              And how we build incredible flavour without onion or garlic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-theme-transition"
                style={{ background: `${theme.colors.primary}15` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-theme-transition" style={{ background: theme.colors.primary }}>
                    <Check size={18} className="text-white" />
                  </div>
                  <p className="font-body text-theme-transition" style={{ color: theme.colors.text }}>
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-theme-transition"
            style={{ background: `${theme.colors.secondary}15` }}
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.text }}>
              Flavour Heroes
            </h3>
            <div className="space-y-3 font-body text-lg text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
              <p>
                <span className="font-bold text-theme-transition" style={{ color: theme.colors.primary }}>Hing (Asafoetida):</span> The Jain substitute for garlic aroma. 
                A tiny pinch in hot oil creates deep, savoury flavour.
              </p>
              <p>
                <span className="font-bold text-theme-transition" style={{ color: theme.colors.primary }}>Tomato:</span> Provides the base richness and tanginess 
                that onion-garlic gravies typically achieve.
              </p>
              <p>
                <span className="font-bold text-theme-transition" style={{ color: theme.colors.primary }}>Cashew paste:</span> Creates creamy, rich gravies without onion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Six Principles */}
      <section className="py-20 text-white bg-theme-transition" style={{ background: `linear-gradient(135deg, ${theme.colors.text} 0%, ${theme.colors.text}E6 100%)` }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.background }}>
              The 6 Philosophical Pillars of Jain Cuisine
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-sm p-6 rounded-xl card-theme bg-theme-transition"
                style={{ background: `${theme.colors.background}15` }}
              >
                <h3 className="font-display text-xl font-bold mb-3 text-theme-transition" style={{ color: theme.colors.primary }}>
                  {principle.title}
                </h3>
                <p className="font-body text-theme-transition" style={{ color: `${theme.colors.background}E6` }}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
