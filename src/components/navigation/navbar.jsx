import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const spring = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-white py-3"}
      `}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="SBN Movers logo" className="w-10" />
          <span className="font-bold text-lg text-primary hidden sm:block">
            SBN Movers
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3 bg-gray-100 p-1 rounded-full">

          {links.map((link) => (
            <NavLink key={link.path} to={link.path} className="relative px-4 py-2 text-sm font-medium">
              {({ isActive }) => (
                <>
                  {/* Active pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}

                  <span className={`relative z-10 ${isActive ? "text-primary" : "text-gray-600"}`}>
                    {link.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}

        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center"
        >
          <motion.div animate={open ? "open" : "closed"} className="relative w-6 h-6">

            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={spring}
              className="absolute w-6 h-[2px] bg-black"
            />

            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute w-6 h-[2px] bg-black top-2"
            />

            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: 6 },
              }}
              transition={spring}
              className="absolute w-6 h-[2px] bg-black top-4"
            />

          </motion.div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-screen bg-white z-50 p-8 flex flex-col"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-2xl mb-10"
              >
                ✕
              </button>

              {/* Links */}
              <div className="flex flex-col gap-6 text-lg font-medium">
                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className="hover:text-primary transition"
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="
                      mt-6 block text-center
                      bg-primary text-white
                      py-3 rounded-full
                      font-semibold
                      shadow-md
                      hover:scale-105
                      transition
                    "
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}