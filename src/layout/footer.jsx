



import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  MessageCircle,
  CircleArrowUp,
} from "lucide-react";

import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">

      {/* Subtle Top Glow */}
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

        {/* Brand */}
        <div>
          <img src="/images/logo.png" alt="SBN Movers logo" className="w-12 mb-4" />

          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            Reliable logistics and relocation services across Nigeria.
            We move your world safely, efficiently, and stress-free.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            
            {/* Instagram */}
            <a
              href="https://instagram.com/sbn_movers"
              target="_blank"
              rel="noreferrer"
              className="group p-2 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300"
            >
              <FaInstagram
                size={18}
                className="text-white group-hover:scale-110 transition"
              />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/sbn_movers"
              target="_blank"
              rel="noreferrer"
              className="group p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300"
            >
              <FaFacebookF
                size={18}
                className="text-white group-hover:scale-110 transition"
              />
            </a>

          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-5 text-white">Quick Links</h3>

          <div className="flex flex-col gap-3 text-gray-300 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center justify-between group hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-5 text-white">Contact</h3>

          <div className="text-sm text-gray-300 space-y-5">

            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-white" />
              <a href="tel:08169216565" className="hover:text-white transition">
                08169216565
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MessageCircle size={18} className="mt-1 text-white" />
              <a
                href="https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-white" />
              <p className="leading-relaxed">
                km 20 Lekki-Epe Expressway,
                <br />
                beside Oral Estate, Lekki, Lagos
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300 gap-4">

        <p>
          © {new Date().getFullYear()} SBN Movers. All rights reserved.
        </p>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 hover:text-white transition"
        >
          Back To Top <CircleArrowUp />
        </button>

      </div>
    </footer>
  );
}