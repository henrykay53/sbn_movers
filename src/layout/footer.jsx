import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold mb-4">SBN Movers</h2>
          <p className="text-sm text-gray-300 mb-4">
            Reliable logistics and relocation services across Lagos.
            We move your world safely, efficiently, and stress-free.
          </p>

          {/* Socials */}
          <div className="flex gap-4 text-sm">
            <a
              href="https://instagram.com/sbn_movers"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200 transition"
            >
              Instagram
            </a>

            <a
              href="https://facebook.com/sbn_movers"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-200 transition"
            >
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

          <div className="text-sm text-gray-300 space-y-3">
            
            {/* Phone */}
            <p>
              📞{" "}
              <a
                href="tel:08169216565"
                className="hover:text-white transition"
              >
                08169216565
              </a>
            </p>

            {/* WhatsApp */}
            <p>
              💬{" "}
              <a
                href="https://wa.me/2348169216565"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white underline"
              >
                Chat on WhatsApp
              </a>
            </p>

            {/* Address */}
            <p>
              📍 km 20 Lekki-Epe Expressway, beside Oral Estate,
              Lekki, Lagos
            </p>
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