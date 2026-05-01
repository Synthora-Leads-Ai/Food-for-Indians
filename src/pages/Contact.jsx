import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { restaurantInfo } from '../config/restaurantData';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with backend or email service)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
            Come Find Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl text-theme-transition"
            style={{ color: `${theme.colors.text}CC` }}
          >
            We'd love to serve you at our restaurant in Madan Mahal, Jabalpur
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-theme-transition" style={{ background: theme.colors.background }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold mb-8 text-theme-transition" style={{ color: theme.colors.text }}>
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-theme-transition" style={{ background: `${theme.colors.primary}20` }}>
                    <MapPin size={24} className="text-theme-transition" style={{ color: theme.colors.primary }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Address
                    </h3>
                    <p className="font-body text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                      {restaurantInfo.contact.address}
                      <br />
                      {restaurantInfo.contact.city}, {restaurantInfo.contact.state}
                    </p>
                    <p className="font-sans text-sm mt-2 text-theme-transition" style={{ color: `${theme.colors.text}99` }}>
                      Opposite the Under Bridge, near Madan Mahal Railway Station
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-theme-transition" style={{ background: `${theme.colors.primary}20` }}>
                    <Phone size={24} className="text-theme-transition" style={{ color: theme.colors.primary }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Phone
                    </h3>
                    <a
                      href={`tel:${restaurantInfo.contact.phone}`}
                      className="font-body text-lg transition-opacity hover:opacity-80 text-theme-transition"
                      style={{ color: theme.colors.primary }}
                    >
                      {restaurantInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-theme-transition" style={{ background: `${theme.colors.primary}20` }}>
                    <Mail size={24} className="text-theme-transition" style={{ color: theme.colors.primary }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Email
                    </h3>
                    <a
                      href={`mailto:${restaurantInfo.contact.email}`}
                      className="font-body text-lg transition-opacity hover:opacity-80 text-theme-transition"
                      style={{ color: theme.colors.primary }}
                    >
                      {restaurantInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-theme-transition" style={{ background: `${theme.colors.primary}20` }}>
                    <Clock size={24} className="text-theme-transition" style={{ color: theme.colors.primary }} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Opening Hours
                    </h3>
                    <p className="font-body text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                      <span className="font-semibold">Monday - Saturday:</span>
                      <br />
                      {restaurantInfo.hours.weekday}
                    </p>
                    <p className="font-body mt-2 text-theme-transition" style={{ color: `${theme.colors.text}CC` }}>
                      <span className="font-semibold">Sunday:</span>
                      <br />
                      {restaurantInfo.hours.sunday}
                    </p>
                    <p className="font-sans text-sm mt-2 text-theme-transition" style={{ color: theme.colors.secondary }}>
                      {restaurantInfo.hours.note}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl shadow-lg bg-theme-transition" style={{ background: `${theme.colors.background}F5` }}>
                <h2 className="font-display text-3xl font-bold mb-6 text-theme-transition" style={{ color: theme.colors.text }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-sans font-medium mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none font-body bg-theme-transition"
                      style={{ 
                        border: `2px solid ${theme.colors.primary}40`,
                        background: theme.colors.background,
                        color: theme.colors.text
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-sans font-medium mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none font-body bg-theme-transition"
                      style={{ 
                        border: `2px solid ${theme.colors.primary}40`,
                        background: theme.colors.background,
                        color: theme.colors.text
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans font-medium mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none font-body bg-theme-transition"
                      style={{ 
                        border: `2px solid ${theme.colors.primary}40`,
                        background: theme.colors.background,
                        color: theme.colors.text
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-sans font-medium mb-2 text-theme-transition" style={{ color: theme.colors.text }}>
                      Message / Enquiry *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg focus:outline-none font-body resize-none bg-theme-transition"
                      style={{ 
                        border: `2px solid ${theme.colors.primary}40`,
                        background: theme.colors.background,
                        color: theme.colors.text
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-sans font-semibold transition-all bg-theme-transition"
                    style={{ 
                      background: theme.colors.gradient,
                      boxShadow: `0 0 30px ${theme.colors.glow}`
                    }}
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
                <p className="font-sans text-sm mt-4 text-center text-theme-transition" style={{ color: `${theme.colors.text}99` }}>
                  We'll get back to you within a few hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-theme-transition" style={{ background: `${theme.colors.background}F5` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4 text-theme-transition" style={{ color: theme.colors.text }}>
              Find Us on the Map
            </h2>
            <p className="font-body text-xl text-theme-transition" style={{ color: `${theme.colors.text}B3` }}>
              Opposite Under Bridge, Madan Mahal, Jabalpur
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96"
          >
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(restaurantInfo.contact.mapQuery)}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </motion.div>
          <p className="text-center font-sans text-sm mt-4 text-theme-transition" style={{ color: `${theme.colors.text}99` }}>
            Note: Replace with actual Google Maps embed code with your API key
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
