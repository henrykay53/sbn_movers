import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "text-gray-700";

  return (
    <header className="shadow-sm sticky top-0 bg-white z-40">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          SBN Movers
        </Link>

        {/* Links */}
        <div className="flex gap-6">
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
      </nav>
    </header>
  );
}