import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const DIRECTIONS_URL =
  "https://www.google.com/maps?q=lekki+epe+expressway+oral+estate";

export default function Map() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="grid items-end gap-8 sm:grid-cols-[1fr_auto] sm:gap-12"
        >
          <div>
            <span className="eyebrow text-primary">Visit us</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink sm:text-4xl">
              Our office in Lekki
            </h2>
            <p className="mt-5 flex items-start gap-2.5 text-base leading-relaxed text-ink/60">
              <MapPin
                size={18}
                strokeWidth={1.75}
                className="mt-0.5 shrink-0 text-primary"
              />
              Km 20 Lekki-Epe Expressway, beside Oral Estate, Lekki, Lagos
            </p>
          </div>

          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-ink/12 px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-500 ease-premium hover:border-ink/25 hover:bg-surface"
          >
            <Navigation size={16} strokeWidth={1.9} />
            Get directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-12 overflow-hidden rounded-2xl border border-ink/8 shadow-soft"
        >
          <iframe
            title="SBN Movers office location on Google Maps"
            src="https://www.google.com/maps?q=lekki+epe+expressway+oral+estate&output=embed"
            className="h-[340px] w-full border-0 sm:h-[440px]"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
