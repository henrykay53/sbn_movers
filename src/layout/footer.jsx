import { Link } from "react-router-dom";
import { Phone, MapPin, MessageCircle, ArrowUp, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/sbn_movers",
    Icon: FaInstagram,
    size: 17,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/sbn_movers",
    Icon: FaFacebookF,
    size: 15,
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">

      {/* Depth, consistent with the other dark sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_70%_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-primary/20 blur-[130px]"
      />

      <div className="relative z-10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="SBN Movers"
              width="48"
              height="36"
              className="w-11"
            />

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
              Reliable logistics and relocation services across Nigeria. We move
              your world safely, efficiently, and stress-free.
            </p>

            <div className="mt-7 flex gap-3">
              {socials.map(({ name, href, Icon, size }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`SBN Movers on ${name}`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-white/70 transition-all duration-500 ease-premium hover:border-white/30 hover:bg-white/5 hover:text-white"
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="eyebrow text-white/40">Navigate</h3>

            <div className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-white/40">Contact</h3>

            <div className="mt-6 flex flex-col gap-4 text-sm">
              <a
                href="tel:+2348169216565"
                className="flex items-center gap-3 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Phone size={15} strokeWidth={1.75} className="shrink-0" />
                0816 921 6565
              </a>

              <a
                href="https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <MessageCircle size={15} strokeWidth={1.75} className="shrink-0" />
                Chat on WhatsApp
              </a>

              <a
                href="mailto:segzbrannigltd@gmail.com"
                className="flex items-center gap-3 break-all text-white/60 transition-colors duration-300 hover:text-white"
              >
                <Mail size={15} strokeWidth={1.75} className="shrink-0" />
                segzbrannigltd@gmail.com
              </a>

              <p className="flex items-start gap-3 leading-relaxed text-white/60">
                <MapPin size={15} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                Km 20 Lekki-Epe Expressway, beside Oral Estate, Lekki, Lagos
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-7 text-xs text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} SBN Movers. All rights reserved.</p>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-white"
            >
              Back to top
              <ArrowUp
                size={14}
                className="transition-transform duration-500 ease-premium group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
