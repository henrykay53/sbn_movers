import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

/**
 * Purely presentational. Visibility and timing are owned by <App /> so the
 * exit animation actually runs — previously the parent unmounted this while
 * its own internal timer was still counting, so the exit was never seen.
 */
export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-surface"
    >
      <motion.img
        src="/images/logo.png"
        alt=""
        width="56"
        height="42"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="w-12"
      />

      {/* Thin determinate rule — quieter than a spinner */}
      <div className="mt-7 h-px w-28 overflow-hidden bg-ink/10">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.9, ease }}
          className="h-full w-full bg-primary"
        />
      </div>
    </motion.div>
  );
}
