import { MapPin, Phone, Navigation } from "lucide-react";

export default function Map() {
  return (
    <section className="relative overflow-hidden py-20 bg-secondary text-white">

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Find Us Easily
          </h2>
          <p className="text-gray-200 text-sm sm:text-base">
            Visit our office or get directions instantly
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Info Card */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-left space-y-6">

            <div className="flex items-start gap-3">
              <MapPin className="text-white" size={22} />
              <p className="text-sm text-gray-200">
                Km 20 Lekki-Epe Expressway, beside Oral Estate,
                Lekki, Lagos
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={20} />
              <a
                href="tel:08169216565"
                className="text-sm hover:underline"
              >
                08169216565
              </a>
            </div>

            <a
              href="https://www.google.com/maps?q=lekki+epe+expressway+oral+estate"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                bg-white text-secondary
                px-5 py-2.5
                rounded-full text-sm font-medium
                hover:scale-105 transition
              "
            >
              <Navigation size={16} />
              Get Directions
            </a>

          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-xl h-[300px] sm:h-[400px]">

            <iframe
              title="SBN Movers Location"
              src="https://www.google.com/maps?q=lekki+epe+expressway+oral+estate&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />

          </div>

        </div>

      </div>
    </section>
  );
}