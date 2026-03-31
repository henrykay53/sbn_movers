import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  MessageCircle,
//   Instagram,
//   Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <img src="/images/logo.png" alt="" className="w-10 mb-3" />
          <p className="text-sm text-gray-300 mb-4">
            Reliable logistics and relocation services across Nigeria.
            We move your world safely, efficiently, and stress-free.
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com/sbn_movers"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm"
            >
              {/* <Instagram size={18} /> */}
              Instagram
            </a>

            <a
              href="https://facebook.com/sbn_movers"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm"
            >
              {/* <Facebook size={18} /> */}
              Facebook
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <div className="text-sm text-gray-300 space-y-4">

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-white" />
              <a
                href="tel:08169216565"
                className="hover:text-white transition"
              >
                08169216565
              </a>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <MessageCircle size={18} className="mt-1 text-white" />
              <a
                href="https://wa.me/2348169216565?text=Hello%20I%20need%20a%20moving%20service"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Say Hello on WhatsApp
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-white" />
              <p>
                km 20 Lekki-Epe Expressway, beside Oral Estate,
                Lekki, Lagos
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} SBN Movers. All rights reserved.
      </div>
    </footer>
  );
}