import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const GameBadge = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-sans text-sm font-bold shadow-lg"
      style={{
        background: theme.colors.gradient,
        boxShadow: `0 0 20px ${theme.colors.glow}`
      }}
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Gamepad2 size={18} className="text-white" />
      </motion.div>
      <span className="text-white">Gaming Zone Available</span>
    </motion.div>
  );
};

export default GameBadge;
