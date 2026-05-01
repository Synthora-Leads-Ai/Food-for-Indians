import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, theme, isAutoMode, switchTheme, enableAutoMode, allThemes } = useTheme();

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all"
        style={{
          background: theme.colors.gradient,
          boxShadow: `0 0 30px ${theme.colors.glow}`,
        }}
        aria-label="Theme Switcher"
      >
        <Palette size={24} className="text-white" />
      </motion.button>

      {/* Theme Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64"
          >
            <h3 className="font-display text-lg font-bold text-deep-brown mb-3">
              Choose Your Experience
            </h3>

            {/* Auto Mode */}
            <button
              onClick={enableAutoMode}
              className={`w-full flex items-center justify-between p-3 rounded-xl mb-2 transition-all ${
                isAutoMode
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-gray-100 text-deep-brown hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🔄</span>
                <span className="font-sans font-medium">Auto (Time-based)</span>
              </div>
              {isAutoMode && <Check size={20} />}
            </button>

            {/* Theme Options */}
            <div className="space-y-2">
              {Object.entries(allThemes).map(([key, themeOption]) => (
                <button
                  key={key}
                  onClick={() => switchTheme(key)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                    currentTheme === key && !isAutoMode
                      ? 'ring-2 ring-offset-2'
                      : 'hover:bg-gray-50'
                  }`}
                  style={{
                    background: currentTheme === key && !isAutoMode ? themeOption.colors.gradient : 'transparent',
                    color: currentTheme === key && !isAutoMode ? 'white' : '#3D2300',
                    ringColor: themeOption.colors.primary,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{themeOption.emoji}</span>
                    <div className="text-left">
                      <div className="font-sans font-medium">{themeOption.name}</div>
                      <div className="text-xs opacity-70">
                        {themeOption.timeRange[0]}:00 - {themeOption.timeRange[1]}:00
                      </div>
                    </div>
                  </div>
                  {currentTheme === key && !isAutoMode && <Check size={20} />}
                </button>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600 font-sans text-center">
                Experience changes with the sun ☀️
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
