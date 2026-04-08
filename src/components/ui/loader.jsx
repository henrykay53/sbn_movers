import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck } from "lucide-react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);

      // Wait for animation before removing loader
      setTimeout(() => setLoading(false), 900);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-white z-[999] flex items-center justify-center overflow-hidden"
      >
        {/* Truck */}
        <motion.div
          initial={{ x: 0, scale: 1 }}
          animate={
            exit
              ? {
                  x: "120vw", // 👉 move RIGHT
                  rotate: [0, -3, 0], // tilt
                }
              : {
                  scale: [0.95, 1.05, 0.95], // idle
                  y: [0, -4, 0], // bounce
                }
          }
          transition={
            exit
              ? {
                  duration: 0.9,
                  ease: "easeIn",
                }
              : {
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }
          }
          className="text-primary"
        >
          <Truck size={70} strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}