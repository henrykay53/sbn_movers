import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.98 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1], // smooth easing curve
      }}
    >
      {children}
    </motion.div>
  );
}