import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../config/restaurantData';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/philosophy', label: 'Philosophy' },
    { path: '/menu', label: 'Menu' },
    { path: '/specialties', label: 'Specialties' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
      style={{
        background: `${theme.colors.background}F8`,
        borderBottom: `3px solid ${theme.colors.primary}`,
        boxShadow: scrolled ? `0 4px 20px ${theme.colors.glow}` : `0 2px 10px rgba(0,0,0,0.1)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span 
              className="font-display text-2xl md:text-3xl font-bold text-theme-transition"
              style={{ 
                backgroundImage: theme.colors.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {restaurantInfo.name}
            </span>
            <span className="font-body text-sm md:text-base italic text-theme-transition" style={{ color: theme.colors.secondary }}>
              {restaurantInfo.brandLine}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm font-medium transition-colors relative group text-theme-transition ${
                  location.pathname === link.path ? 'font-bold' : ''
                }`}
                style={{ 
                  color: location.pathname === link.path ? theme.colors.primary : theme.colors.text
                }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all bg-theme-transition ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                  style={{ background: theme.colors.gradient }}
                />
              </Link>
            ))}
          </div>

          {/* Call Button (Desktop) */}
          <a
            href={`tel:${restaurantInfo.contact.phone}`}
            className="hidden lg:flex items-center gap-2 text-white px-6 py-3 rounded-full font-sans font-bold hover:scale-105 transition-transform bg-theme-transition"
            style={{ 
              background: theme.colors.gradient,
              boxShadow: `0 0 20px ${theme.colors.glow}`
            }}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-colors text-theme-transition"
            style={{ color: theme.colors.text }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden shadow-xl bg-theme-transition"
            style={{ 
              background: theme.colors.background,
              borderTop: `4px solid ${theme.colors.primary}`
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block font-sans text-base font-medium py-2 transition-colors text-theme-transition ${
                    location.pathname === link.path ? 'font-bold' : ''
                  }`}
                  style={{ 
                    color: location.pathname === link.path ? theme.colors.primary : theme.colors.text
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${restaurantInfo.contact.phone}`}
                className="flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full font-sans font-bold hover:scale-105 transition-transform mt-4 bg-theme-transition"
                style={{ 
                  background: theme.colors.gradient,
                  boxShadow: `0 0 20px ${theme.colors.glow}`
                }}
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
