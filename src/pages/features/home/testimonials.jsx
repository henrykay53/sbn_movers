import { Quote } from "lucide-react";

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base">
          Trusted by individuals and businesses across Lagos
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                bg-white 
                p-6 
                rounded-xl 
                shadow 
                hover:shadow-xl 
                hover:-translate-y-1 
                transition-all duration-300
                text-left
                flex flex-col
                justify-between
              "
            >
              {/* Quote Icon */}
              <Quote className="text-primary mb-4" size={28} />

              {/* Text */}
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                “{t.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-auto">
                
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                  {t.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">
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