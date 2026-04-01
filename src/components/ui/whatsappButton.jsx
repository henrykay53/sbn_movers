import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Ping */}
      <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping group-hover:animate-none" />

      {/* Button */}
      <motion.a
        href="https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="
          relative
          bg-green-500 hover:bg-green-600
          text-white
          p-4
          rounded-full
          shadow-xl
          flex items-center justify-center
        "
      >
        <MessageCircle size={20} />
      </motion.a>

      {/* Tooltip */}
      <div
        className="
          pointer-events-none
          absolute right-16 top-1/2 -translate-y-1/2
          bg-black text-white text-xs
          px-3 py-2 rounded-full shadow-lg whitespace-nowrap

          opacity-0 translate-x-3
          group-hover:opacity-100 group-hover:translate-x-0

          transition-all duration-300 ease-out
        "
      >
        Chat with us
      </div>
    </div>
  );
}