import { motion } from "framer-motion";

const clients = [
  { name: "Konga", path: "/logos/konga.webp" },
  { name: "Build Direct", path: "/logos/buildDirect.png" },
  { name: "Del Borough", path: "/logos/delborough.png" },
  { name: "PEP", path: "/logos/pep.jpg" },
  { name: "Hareem Dream", path: "/logos/hareemDream.png" },
];

export default function Clients() {
  return (
    <section className="overflow-hidden bg-surface-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="eyebrow mb-12 text-center text-ink/40">
          Trusted by businesses across Nigeria
        </p>

        {/* Continuous, slow marquee. The supplied logos have inconsistent
            backgrounds (one is white-on-black, others are flat JPEGs), so each
            sits in a uniform white tile rather than directly on the section —
            that keeps the strip even until proper transparent versions exist. */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-surface-alt to-transparent sm:w-28"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-surface-alt to-transparent sm:w-28"
          />

          <motion.div
            className="flex w-max items-center gap-5 sm:gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex h-20 w-40 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-ink/8 bg-white px-5 shadow-soft transition-all duration-500 ease-premium hover:-translate-y-0.5"
              >
                <img
                  src={client.path}
                  alt={client.name}
                  loading="lazy"
                  aria-hidden={index >= clients.length ? "true" : undefined}
                  className="max-h-10 w-auto max-w-full object-contain opacity-85 transition-opacity duration-500 ease-premium hover:opacity-100"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
