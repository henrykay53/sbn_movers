import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "100%" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="text-5xl"
      >
        🚚
      </motion.div>
    </motion.div>
  );
}