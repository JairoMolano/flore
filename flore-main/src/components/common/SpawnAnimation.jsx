import { motion } from 'framer-motion';

const SpawnAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SpawnAnimation;