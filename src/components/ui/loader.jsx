import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck } from "lucide-react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Simulate server delay
    const timer = setTimeout(() => {
      setExit(true);

      // Allow exit animation to finish
      setTimeout(() => setLoading(false), 800);
    }, 4000); // adjust duration

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-999 flex items-center justify-center overflow-hidden"
        >
          {/* Truck */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={
              exit
                ? { x: "-120vw", scale: 1 } // zoom off left
                : { scale: [0.9, 1.1, 0.9] } // pulsating
            }
            transition={
              exit
                ? { duration: 0.8, ease: "easeInOut" }
                : {
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "easeInOut",
                  }
            }
            className="text-primary"
          >
            <Truck size={64} strokeWidth={2.5} className="text-red-700" />
          </motion.div>

          {/* Optional subtle background motion */}
          {!exit && (
            <motion.div
              className="absolute inset-0 opacity-10 pointer-events-none"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            >
              <div className="w-[200%] h-full bg-linear-to-r from-transparent via-black/20 to-transparent" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}