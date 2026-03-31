import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ade",
    location: "Lekki",
    text: "SBN Movers made my relocation completely stress-free.",
  },
  {
    name: "Chioma",
    location: "Ajah",
    text: "Very professional and reliable service.",
  },
  {
    name: "Tunde",
    location: "Ikeja",
    text: "My items arrived safely and on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 bg-secondary text-white">

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-200 text-sm sm:text-base">
            Trusted by individuals and businesses across Lagos
          </p>
        </div>

        {/* Scroll Container (mobile scroll, desktop grid) */}
        <div className="
          flex gap-6 overflow-x-auto pb-4
          md:grid md:grid-cols-3 md:overflow-visible
        ">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-[280px] md:min-w-0
                bg-white/10 backdrop-blur-md
                border border-white/10
                p-6 rounded-2xl
                shadow-lg
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-2xl
                flex flex-col justify-between
              "
            >
              {/* Quote */}
              <Quote className="text-white/70 mb-4" size={28} />

              {/* Text */}
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                “{t.text}”
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* User */}
              <div className="flex items-center gap-3 mt-auto">
                
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-300">
                    {t.location}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}