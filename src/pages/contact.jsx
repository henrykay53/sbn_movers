import ContactForm from "./features/contact/contactForm";
import ContactInfo from "./features/contact/contactInfo";
import Map from "./features/contact/map";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-20 bg-secondary text-white">

      {/* Background Layers (same system as Map) */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary" />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-slide" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact Us
        </h1>

        <p className="text-gray-200 text-center mb-12">
          Let’s make your move simple and stress-free
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <ContactForm />
          <ContactInfo />
        </div>

      </div>

      {/* Map stays outside but visually connected */}
      <div className="mt-16">
        <Map />
      </div>
    </section>
  );
}