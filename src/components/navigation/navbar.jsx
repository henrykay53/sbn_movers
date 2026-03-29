import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary font-semibold"
      : "text-gray-700 hover:text-primary transition";

  const lineStyle = "w-6 h-0.5 bg-black block";

  const spring = {
    type: "spring",
    stiffness: 260,
    damping: 20,
  };

  return (
    <header className="shadow-sm sticky top-0 bg-white z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          SBN Movers
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50"
          aria-label="Toggle Menu"
        >
          {/* Top Line */}
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={spring}
            className={lineStyle}
          />

          {/* Middle Line */}
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={lineStyle}
          />

          {/* Bottom Line */}
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={spring}
            className={lineStyle}
          />
        </button>
      </nav>

      {/* Mobile Menu + Overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Slide Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 w-3/4 max-w-sm h-screen bg-white z-50 p-6 flex flex-col gap-8 shadow-lg"
            >
              {/* Close Button (Explicit X for UX clarity) */}
              <button
                onClick={() => setOpen(false)}
                className="self-end text-2xl"
                aria-label="Close Menu"
              >
                ✕
              </button>

              {/* Nav Links */}
              <nav className="flex flex-col gap-6 text-lg">
                {["/", "/about", "/contact"].map((path, i) => {
                  const label =
                    path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2);

                  return (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <NavLink
                        to={path}
                        onClick={() => setOpen(false)}
                        className={navLinkStyle}
                      >
                        {label}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}