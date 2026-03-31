import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-30 text-center bg-secondary text-white">

      {/* Base Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      {/* Moving Light Streaks */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      {/* Radial Glow (Depth Effect) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Subtle Grid Texture (Optional Premium Feel) */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Move Without Stress?
        </h2>

        <p className="text-gray-200 mb-10 text-sm sm:text-base max-w-xl mx-auto">
          Experience fast, reliable, and secure relocation services tailored to your needs.
        </p>

        <Link
          to="/contact"
          className="
            inline-flex items-center gap-2
            bg-white text-secondary 
            px-8 py-3 
            rounded-full 
            font-semibold
            shadow-lg
            transition-all duration-300
            hover:scale-105 hover:shadow-2xl
            active:scale-95
          "
        >
          Contact Us Now →
        </Link>

      </div>
    </section>
  );
}