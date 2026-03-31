import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 bg-secondary text-white">

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      {/* Motion streaks (speed effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          <p className="inline text-red-800">Move</p> Smarter.
          <br />
          <span className="text-white/80">Move Faster.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          Experience seamless relocation powered by smart logistics,
          reliable execution, and a customer-first approach.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center gap-2
              bg-white text-secondary
              px-8 py-3 rounded-full
              font-semibold
              shadow-lg
              transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              active:scale-95
            "
          >
            Get a Quote →
          </Link>

          <Link
            to="/about"
            className="
              inline-flex items-center justify-center
              border border-white/40
              text-white
              px-8 py-3 rounded-full
              transition-all duration-300
              hover:bg-white/10 hover:scale-105
            "
          >
            Learn More
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-300"
        >
          <span>✔ Fast Delivery</span>
          <span>✔ Secure Handling</span>
          <span>✔ Nationwide Coverage</span>
        </motion.div>

      </div>
    </section>
  );
}