export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 text-white">

      {/* ===== Background Image ===== */}
      <div
        className="
          absolute inset-0 bg-cover bg-center
          brightness-110 contrast-110
        "
        style={{
          backgroundImage: "url('/images/apartment.jpeg')",
        }}
      />

      {/* ===== Subtle Gradient (LESS DARK) ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/50" />

      {/* ===== Motion Streaks ===== */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      {/* ===== Glow ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

      {/* ===== Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">
            Better logistics solutions for you
          </span>
        </h1>

        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Experience seamless relocation powered by smart logistics, reliable
          execution, and a customer-first approach.
        </p>

        {/* CTA remains same */}

      </div>
    </section>
  );
}