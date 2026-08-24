import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[62svh] items-center overflow-hidden bg-ink text-white">

      {/* Photography at full strength */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bus.jpeg')" }}
      />

      {/* The copy is centred here, so an even scrim rather than a directional
          one — kept light enough that the truck stays readable behind it. */}
      <div aria-hidden="true" className="absolute inset-0 bg-ink/55" />

      {/* Seam fades at the edges only */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-ink/55 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/12 blur-[130px]"
      />

      {/* Content */}
      <div className="on-photo relative z-10 mx-auto w-full max-w-4xl px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="eyebrow inline-block text-white/75"
        >
          About us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-[3.5rem]"
        >
          A logistics partner built
          <br className="hidden sm:block" />{" "}
          <span className="text-white/70">on getting the details right</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          SBN Movers delivers seamless, secure, and cost-effective
          transportation, warehousing, and supply chain solutions. Built on
          efficiency and reliability, we help individuals and businesses move
          with confidence through a blend of technology, expertise, and
          customer-focused service.
        </motion.p>
      </div>
    </section>
  );
}
