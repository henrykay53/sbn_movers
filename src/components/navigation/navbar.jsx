import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const links = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock the page and allow Escape while the mobile panel is open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled
          ? "border-b border-ink/8 bg-white/80 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-white py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">

        {/* Wordmark */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="SBN Movers"
            width="40"
            height="30"
            className="w-9"
          />
          <span className="hidden text-[0.9375rem] font-bold tracking-tight text-ink sm:block">
            SBN Movers
          </span>
        </Link>

        {/* Desktop nav — plain links with an underline marker, no pill */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className="relative py-1.5">
              {({ isActive }) => (
                <>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-ink" : "text-ink/50 hover:text-ink/80"
                    }`}
                  >
                    {link.label}
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="nav-marker"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-primary"
                      transition={{ duration: 0.5, ease }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-all duration-500 ease-premium hover:bg-primary"
          >
            Get a quote
            <ArrowRight
              size={15}
              className="transition-transform duration-500 ease-premium group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-50 flex size-9 items-center justify-center md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col gap-[5px]">
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink" />
          </span>
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[82%] max-w-sm flex-col bg-white p-7"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="mb-14 self-end text-ink/50 transition-colors hover:text-ink"
              >
                <X size={22} strokeWidth={1.75} />
              </button>

              <div className="flex flex-col">
                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-ink/8 py-5 text-2xl font-semibold tracking-tight transition-colors ${
                          isActive ? "text-primary" : "text-ink hover:text-primary"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.5, ease }}
                className="mt-auto"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2.5 rounded-full bg-primary py-4 text-sm font-semibold text-white shadow-soft transition-colors duration-500 ease-premium hover:bg-primary-deep"
                >
                  Get a quote
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:+2348169216565"
                  className="mt-3 block py-2 text-center text-sm text-ink/50 transition-colors hover:text-ink"
                >
                  Or call 0816 921 6565
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
