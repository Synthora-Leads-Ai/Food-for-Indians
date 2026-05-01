// 24-Hour Dynamic Theme System for Food of Indians

export const themes = {
  morning: {
    name: 'Temple Dawn',
    timeRange: [5, 11],
    emoji: '🌄',
    colors: {
      primary: '#FF6B35',      // Vibrant Sunrise Orange
      secondary: '#F7B801',    // Bold Golden Yellow
      accent: '#FF1744',       // Hot Pink Sunrise
      background: '#FFF9F0',   // Soft Warm White
      text: '#1A0800',         // Rich Dark Brown
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7B801 50%, #FF1744 100%)',
      glow: 'rgba(255, 107, 53, 0.6)',
    },
    effects: {
      particle: '☀️',
      animation: 'energetic',
      glow: 'bright',
    },
    mood: 'Energetic, fresh, awakening',
  },
  
  afternoon: {
    name: 'Royal Palace',
    timeRange: [11, 16],
    emoji: '☀️',
    colors: {
      primary: '#D81B60',      // Bold Magenta
      secondary: '#FFC107',    // Vibrant Amber Gold
      accent: '#00ACC1',       // Bright Cyan
      background: '#FFFEF7',   // Bright Ivory
      text: '#1A0800',         // Rich Dark Brown
      gradient: 'linear-gradient(135deg, #D81B60 0%, #FFC107 50%, #00ACC1 100%)',
      glow: 'rgba(216, 27, 96, 0.6)',
    },
    effects: {
      particle: '👑',
      animation: 'regal',
      glow: 'jeweled',
    },
    mood: 'Bold, regal, powerful',
  },
  
  evening: {
    name: 'Golden Sunset',
    timeRange: [16, 19],
    emoji: '🌆',
    colors: {
      primary: '#FF6F00',      // Vibrant Deep Orange
      secondary: '#E91E63',    // Bold Pink
      accent: '#9C27B0',       // Rich Purple
      background: '#FFF8F0',   // Warm Cream
      text: '#1A0800',         // Rich Dark Brown
      gradient: 'linear-gradient(135deg, #FF6F00 0%, #E91E63 50%, #9C27B0 100%)',
      glow: 'rgba(255, 111, 0, 0.7)',
    },
    effects: {
      particle: '🪔',
      animation: 'mystical',
      glow: 'warm',
    },
    mood: 'Vibrant, mystical, magical',
  },
  
  night: {
    name: 'Neon Spice Market',
    timeRange: [19, 5],
    emoji: '🌃',
    colors: {
      primary: '#FFD700',      // Neon Turmeric
      secondary: '#FF1744',    // Cyber Chili
      accent: '#00FFA3',       // Digital Mint
      background: '#0A0E27',   // Midnight Indigo
      text: '#E0F7FA',         // Holographic White
      gradient: 'linear-gradient(135deg, #FFD700 0%, #FF1744 50%, #00FFA3 100%)',
      glow: 'rgba(255, 215, 0, 0.7)',
    },
    effects: {
      particle: '✨',
      animation: 'electric',
      glow: 'neon',
    },
    mood: 'Modern, vibrant, nightlife',
  },
};

export const getThemeByTime = () => {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 16) return 'afternoon';
  if (hour >= 16 && hour < 19) return 'evening';
  return 'night';
};

export const getNextThemeTime = (currentTheme) => {
  const themeOrder = ['morning', 'afternoon', 'evening', 'night'];
  const currentIndex = themeOrder.indexOf(currentTheme);
  const nextTheme = themeOrder[(currentIndex + 1) % 4];
  const nextHour = themes[nextTheme].timeRange[0];
  
  return { nextTheme, nextHour };
};
