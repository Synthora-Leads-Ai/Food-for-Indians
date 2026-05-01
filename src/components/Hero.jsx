import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../config/restaurantData';
import { useTheme } from '../context/ThemeContext';
import ChessGame from './ChessGame';

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-theme-transition"
      style={{ background: `linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.accent}20 100%)` }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 animate-pulse-slow bg-theme-transition" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${theme.colors.primary} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main Container - Max Width & Centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        
        {/* Two Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8 lg:-mt-24 lg:pr-8"
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-sans text-sm font-bold self-start animate-pulse-slow bg-theme-transition"
              style={{ 
                background: theme.colors.gradient,
                boxShadow: `0 0 30px ${theme.colors.glow}`
              }}
            >
              <Sparkles size={16} />
              <span>Paryushan Special Menu Now Available</span>
            </motion.div>

            {/* Heading Group */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-theme-transition"
                style={{ 
                  backgroundImage: theme.colors.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {restaurantInfo.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-body text-2xl md:text-3xl italic text-theme-transition"
                style={{ color: theme.colors.secondary }}
              >
                {restaurantInfo.brandLine}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-display text-xl md:text-2xl text-theme-transition"
                style={{ color: theme.colors.accent }}
              >
                {restaurantInfo.tagline}
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-body text-lg leading-relaxed text-theme-transition"
              style={{ color: theme.colors.text }}
            >
              Taste the ancient wisdom of Jain cuisine — pure, compassionate, and bursting
              with the flavours of India. We serve food that honours the body, respects all
              life, and celebrates the rich culinary traditions of our land.
            </motion.p>

            {/* Trust Badges - Consistent Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {restaurantInfo.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform bg-theme-transition"
                  style={{ 
                    background: `${theme.colors.background}E6`,
                    border: `2px solid ${theme.colors.primary}`
                  }}
                >
                  <span className="text-base">{badge.icon}</span>
                  <span className="font-sans text-sm font-medium text-theme-transition whitespace-nowrap" style={{ color: theme.colors.text }}>
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Equal Spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-sans font-bold text-base hover:scale-105 transition-transform bg-theme-transition"
                style={{ 
                  background: theme.colors.gradient,
                  boxShadow: `0 0 30px ${theme.colors.glow}`
                }}
              >
                <span>Explore Our Menu</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/philosophy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-bold text-base hover:scale-105 transition-transform bg-theme-transition"
                style={{ 
                  background: theme.colors.background,
                  color: theme.colors.primary,
                  border: `3px solid ${theme.colors.primary}`
                }}
              >
                <span>Our Philosophy</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Chess & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-6 lg:space-y-8"
          >
            {/* Chess Game - Centered */}
            <div className="w-full flex justify-center lg:justify-start">
              <ChessGame />
            </div>

            {/* Stats Grid - Clean 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {restaurantInfo.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center hover:scale-105 transition-transform card-theme"
                  style={{ 
                    background: `${theme.colors.background}E6`,
                    border: `3px solid ${theme.colors.primary}40`
                  }}
                >
                  <div 
                    className="font-display text-4xl font-bold mb-2 text-theme-transition"
                    style={{ 
                      backgroundImage: theme.colors.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-sans text-sm font-semibold text-theme-transition" style={{ color: theme.colors.text }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full flex items-start justify-center p-2 bg-theme-transition"
          style={{ border: `2px solid ${theme.colors.primary}` }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-theme-transition"
            style={{ background: theme.colors.gradient }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
