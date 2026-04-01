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

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-secondary via-secondary/90 to-secondary" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          Our Clients
        </h2>
        <p className="text-gray-200 mb-12 text-sm sm:text-base">
          Businesses that rely on SBN Movers for seamless logistics
        </p>

        {/* ===== MOBILE (Scrollable) ===== */}
        <div className="flex md:hidden overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">

          {clients.map((client, index) => (
            <div
              key={index}
              className="
                snap-center
                flex-shrink-0
                w-[120px]
                h-[70px]
                flex items-center justify-center
                bg-white/10 backdrop-blur-md
                border border-white/10
                rounded-xl
                p-3
              "
            >
              <img
                src={client.path}
                alt={client.name}
                className="max-h-full object-contain grayscale"
              />
            </div>
          ))}

        </div>

        {/* ===== DESKTOP (Auto Carousel) ===== */}
        <div className="relative hidden md:block overflow-hidden">

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-secondary to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-secondary to-transparent z-10" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30, // slower = smoother
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-[140px]
                  h-[80px]
                  flex items-center justify-center
                  bg-white/10 backdrop-blur-lg
                  border border-white/10
                  rounded-2xl
                  p-4
                  transition-all duration-300
                  hover:scale-105 hover:bg-white/20
                "
              >
                <img
                  src={client.path}
                  alt={client.name}
                  className="
                    max-h-full 
                    object-contain 
                    grayscale 
                    opacity-80
                    hover:grayscale-0 hover:opacity-100
                    transition duration-300
                  "
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}