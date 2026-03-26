// import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center text-4xl"
      >
        🚚
      </motion.div>

      {children}
    </>
  );
}