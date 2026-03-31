import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-24 bg-linear-to-br from-red-50 to-red-200 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Move Smarter. <br />
          Move Faster.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Seamless relocation powered by technology, reliability and a
          customer-first approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-blue-800 text-white px-8 py-3 rounded-lg shadow hover:scale-105 transition"
          >
            Get a Quote
          </Link>

          <Link
            to="/about"
            className="border-2 border-black text-primary px-8 py-3 rounded-lg hover:border-blue-800 hover:text-blue-800 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}