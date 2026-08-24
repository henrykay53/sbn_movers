import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group fixed bottom-6 right-6 z-50"
    >
      {/* Pulse rings. Anchored to the collapsed 50px footprint at the
          bottom-right, which is exactly where the icon sits — the label
          expands leftward, so the icon never moves out from under them.
          Fades out on hover so it stops competing with the label. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 size-[3.125rem] transition-opacity duration-300 group-hover:opacity-0"
      >
        <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <span className="pulse-ring pulse-ring--offset absolute inset-0 rounded-full bg-[#25D366]" />
      </span>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SBN Movers on WhatsApp"
        className="
          relative flex items-center gap-0
          rounded-full bg-[#25D366]
          py-3.5 pl-3.5 pr-3.5
          text-white shadow-soft
          transition-all duration-500 ease-premium
          hover:gap-2.5 hover:pl-5 hover:shadow-lift
        "
      >
        {/* Label reveals on hover, expanding to the left of the icon */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-500 ease-premium group-hover:max-w-[8rem] group-hover:opacity-100">
          Chat with us
        </span>

        <FaWhatsapp size={22} className="shrink-0" />
      </a>
    </motion.div>
  );
}
