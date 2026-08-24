import { motion } from "framer-motion";
import ContactForm from "./features/contact/contactForm";
import ContactInfo from "./features/contact/contactInfo";
import Map from "./features/contact/map";

const ease = [0.22, 1, 0.36, 1];

export default function Contact() {
  return (
    <>
      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">

          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="eyebrow text-primary">Contact</span>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              Let&rsquo;s plan your move
            </h1>

            <p className="mt-5 text-base leading-relaxed text-ink/60 sm:text-lg">
              Share a few details and we&rsquo;ll come back with a clear quote.
              Prefer to talk? Call or message us directly.
            </p>
          </motion.div>

          {/* Form + details */}
          <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
            <ContactForm />
            <ContactInfo />
          </div>

        </div>
      </section>

      <Map />
    </>
  );
}
