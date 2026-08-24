import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-ink text-white">

      {/* ===== Photography at full strength ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/apartment.jpeg')" }}
      />

      {/* ===== Single scrim. Vertical on mobile where the copy spans the full
                width; horizontal from md up so the photo opens to the right. ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-ink/65 via-ink/55 to-ink/70 md:bg-linear-to-r md:from-ink/85 md:via-ink/55 md:via-55% md:to-ink/10"
      />

      {/* ===== Seam fades only at the very edges, so the middle stays open ===== */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-ink/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-ink/60 to-transparent"
      />

      {/* ===== Brand warmth, barely there ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[140px]"
      />

      {/* ===== Content ===== */}
      <div className="on-photo relative z-10 mx-auto w-full max-w-6xl px-6 py-28">
        <div className="max-w-4xl">

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow inline-block text-white/75"
          >
            Lekki, Lagos · Nationwide coverage
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="mt-6 text-[2.5rem] font-semibold leading-[1.05] sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem]"
          >
            Trusted movers &amp; haulage
            <br className="hidden md:block" />{" "}
            <span className="text-white/70">company in Lagos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            Home and office relocation, professional packing, and truck rentals
            — handled end to end, from our base in Lekki to anywhere in Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-500 ease-premium hover:bg-primary-deep hover:shadow-lift"
            >
              Get a free quote
              <ArrowRight
                size={17}
                className="transition-transform duration-500 ease-premium group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+2348169216565"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/90 transition-all duration-500 ease-premium hover:border-white/40 hover:bg-white/5 hover:text-white"
            >
              <Phone size={16} />
              0816 921 6565
            </a>
          </motion.div>

          {/* Quiet reinforcement of the brand line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            className="mt-14 text-sm italic text-white/55"
          >
            Better logistics solutions for you.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
