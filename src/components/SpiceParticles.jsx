import { motion } from 'framer-motion';

const SpiceParticles = () => {
  const spices = ['🌶️', '🧄', '🌿', '⭐', '🍃', '✨'];
  const particleCount = 15;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => {
        const randomSpice = spices[Math.floor(Math.random() * spices.length)];
        const randomDelay = Math.random() * 5;
        const randomDuration = 15 + Math.random() * 10;
        const randomX = Math.random() * 100;
        const randomStartY = -10 - Math.random() * 20;

        return (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            initial={{
              x: `${randomX}vw`,
              y: `${randomStartY}vh`,
              rotate: 0,
            }}
            animate={{
              y: '110vh',
              rotate: 360,
              x: `${randomX + (Math.random() - 0.5) * 20}vw`,
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {randomSpice}
          </motion.div>
        );
      })}
    </div>
  );
};

export default SpiceParticles;
