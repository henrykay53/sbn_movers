import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DarkSection from "../../../components/shared/darkSection";

const ease = [0.22, 1, 0.36, 1];

export default function CTA() {
  return (
    <DarkSection className="py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <span className="eyebrow text-white/45">Ready when you are</span>

        <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
          Let&rsquo;s move you without the stress
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Tell us where you&rsquo;re going and we&rsquo;ll come back with a
          clear, itemised quote — no surprises on moving day.
        </p>

        <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink shadow-soft transition-all duration-500 ease-premium hover:shadow-lift"
          >
            Request a quote
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
        </div>
      </motion.div>
    </DarkSection>
  );
}
