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
    <section className="relative overflow-hidden py-20 bg-secondary text-white">

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Trusted By Leading Brands
        </h2>
        <p className="text-gray-200 mb-12 text-sm sm:text-base">
          Businesses that rely on SBN Movers for seamless logistics
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {/* Duplicate array for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-[120px] sm:w-[140px]
                  h-[60px]
                  flex items-center justify-center
                  bg-white/10 backdrop-blur-md
                  border border-white/10
                  rounded-xl
                  p-3
                  hover:scale-105 transition
                "
              >
                <img
                  src={client.path}
                  alt={client.name}
                  className="max-h-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}