import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 120 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip */}
      <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded whitespace-nowrap shadow">
        Chat with us
      </span>

      {/* Button */}
      <motion.a
        href="https://wa.me/2348169216565"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Chat with SBN Movers on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
    </motion.div>
  );
}