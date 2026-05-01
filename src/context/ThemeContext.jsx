import { createContext, useContext, useState, useEffect } from 'react';
import { themes, getThemeByTime } from '../themes/themeConfig';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(getThemeByTime());
  const [isAutoMode, setIsAutoMode] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Update CSS variables for scrollbar
  useEffect(() => {
    const theme = themes[currentTheme];
    document.documentElement.style.setProperty('--scrollbar-gradient', theme.colors.gradient);
    document.documentElement.style.setProperty('--scrollbar-gradient-hover', theme.colors.gradient);
  }, [currentTheme]);

  // Check time every minute and update theme if needed
  useEffect(() => {
    if (!isAutoMode) return;

    const checkTime = () => {
      const newTheme = getThemeByTime();
      if (newTheme !== currentTheme) {
        handleThemeChange(newTheme);
      }
    };

    const interval = setInterval(checkTime, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [currentTheme, isAutoMode]);

  const handleThemeChange = (newTheme) => {
    setIsTransitioning(true);
    
    // Smooth transition
    setTimeout(() => {
      setCurrentTheme(newTheme);
      
      // Show notification
      if (typeof window !== 'undefined' && window.innerWidth > 768) {
        showThemeNotification(newTheme);
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 300);
  };

  const showThemeNotification = (themeName) => {
    const theme = themes[themeName];
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
      <span class="theme-emoji">${theme.emoji}</span>
      <span class="theme-text">${theme.name} activated</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500);
    }, 3000);
  };

  const switchTheme = (themeName) => {
    setIsAutoMode(false);
    handleThemeChange(themeName);
  };

  const enableAutoMode = () => {
    setIsAutoMode(true);
    const autoTheme = getThemeByTime();
    if (autoTheme !== currentTheme) {
      handleThemeChange(autoTheme);
    }
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        theme,
        isAutoMode,
        isTransitioning,
        switchTheme,
        enableAutoMode,
        allThemes: themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
