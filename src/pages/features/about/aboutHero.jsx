import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-28 text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/loading.jpeg')" }}
      />

      {/* Dark Overlay (VERY IMPORTANT for readability) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Blend (brand consistency) */}
      <div className="absolute inset-0 bg-linear-to-r from-secondary/80 via-secondary/70 to-secondary/80" />

      {/* Motion Streaks (speed feel) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          About{" "}
          <span className="inline-flex items-center gap-1">
            <span className="text-white">S</span>
            <span className="text-red-700">B</span>
            <span className="text-white">N</span>
          </span>{" "}
          Movers
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-100 mb-6"
        >
          Moving you forward with speed, precision, and trust.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-100 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          SBN Movers is a premier logistics company delivering seamless, secure,
          and cost-effective transportation, warehousing, and supply chain
          solutions. Built on efficiency and reliability, we help individuals
          and businesses move with confidence through a blend of technology,
          expertise, and customer-focused service.
        </motion.p>

      </div>
    </section>
  );
}