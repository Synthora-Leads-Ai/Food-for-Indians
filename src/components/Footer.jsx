import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { restaurantInfo } from '../config/restaurantData';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer 
      className="border-t bg-theme-transition text-theme-transition"
      style={{ 
        background: `linear-gradient(135deg, ${theme.colors.text} 0%, ${theme.colors.text}E6 100%)`,
        color: theme.colors.background,
        borderColor: `${theme.colors.primary}40`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2 text-theme-transition" style={{ color: theme.colors.primary }}>
              {restaurantInfo.name}
            </h3>
            <p className="font-body text-lg italic mb-4 text-theme-transition" style={{ color: theme.colors.secondary }}>
              {restaurantInfo.brandLine}
            </p>
            <p className="font-sans text-sm" style={{ color: `${theme.colors.background}CC` }}>
              Pure. Compassionate. Delicious.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-2xl">🌿</span>
              <span className="font-sans" style={{ color: `${theme.colors.background}E6` }}>
                100% Pure Vegetarian | No Onion | No Garlic
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-theme-transition" style={{ color: theme.colors.primary }}>
              Quick Links
            </h4>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <Link to="/" className="transition-colors text-theme-transition hover:opacity-100" style={{ color: `${theme.colors.background}CC` }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors text-theme-transition hover:opacity-100" style={{ color: `${theme.colors.background}CC` }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="transition-colors text-theme-transition hover:opacity-100" style={{ color: `${theme.colors.background}CC` }}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/specialties" className="transition-colors text-theme-transition hover:opacity-100" style={{ color: `${theme.colors.background}CC` }}>
                  Specialties
                </Link>
              </li>
              <li>
                <Link to="/philosophy" className="transition-colors text-theme-transition hover:opacity-100" style={{ color: `${theme.colors.background}CC` }}>
                  Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors text-theme-transition hover:opacity-100" style={{ color: `${theme.colors.background}CC` }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-theme-transition" style={{ color: theme.colors.primary }}>
              Contact Us
            </h4>
            <ul className="space-y-3 font-sans text-sm">
              <li className="flex items-start gap-2" style={{ color: `${theme.colors.background}CC` }}>
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-theme-transition" style={{ color: theme.colors.primary }} />
                <span>{restaurantInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-2" style={{ color: `${theme.colors.background}CC` }}>
                <Phone size={18} className="flex-shrink-0 text-theme-transition" style={{ color: theme.colors.primary }} />
                <a href={`tel:${restaurantInfo.contact.phone}`} className="hover:opacity-100 transition-colors">
                  {restaurantInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2" style={{ color: `${theme.colors.background}CC` }}>
                <Mail size={18} className="flex-shrink-0 text-theme-transition" style={{ color: theme.colors.primary }} />
                <a href={`mailto:${restaurantInfo.contact.email}`} className="hover:opacity-100 transition-colors">
                  {restaurantInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-theme-transition" style={{ color: theme.colors.primary }}>
              Opening Hours
            </h4>
            <ul className="space-y-2 font-sans text-sm" style={{ color: `${theme.colors.background}CC` }}>
              <li>
                <span className="font-semibold" style={{ color: theme.colors.background }}>Monday - Saturday:</span>
                <br />
                {restaurantInfo.hours.weekday}
              </li>
              <li>
                <span className="font-semibold" style={{ color: theme.colors.background }}>Sunday:</span>
                <br />
                {restaurantInfo.hours.sunday}
              </li>
              <li className="text-xs mt-3 text-theme-transition" style={{ color: theme.colors.secondary }}>
                {restaurantInfo.hours.note}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8" style={{ borderTop: `1px solid ${theme.colors.background}33` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-sm" style={{ color: `${theme.colors.background}B3` }}>
            <p>
              © {currentYear} {restaurantInfo.name} by {restaurantInfo.brandLine}. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with <Heart size={16} className="fill-current text-theme-transition" style={{ color: theme.colors.primary }} /> in Jabalpur, Madhya Pradesh
            </p>
          </div>
          <p className="text-center mt-4 text-xs font-sans" style={{ color: `${theme.colors.background}99` }}>
            Our kitchen is 100% pure vegetarian and strictly Jain. We do not use onion, garlic, or any root vegetables.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
