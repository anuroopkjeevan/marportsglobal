import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  UserPlus,
} from "lucide-react";

import MarportsLogo from "../assets/MARPORT_GLOBAL_Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // 🔥 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔗 Navigation
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    {
      name: "Conference Topics",
      subLinks: [
        { name: "Speakers & Panelists", to: "/conference-topics/speakers" },
        { name: "Agenda", to: "/conference-topics/agenda" },
        { name: "Advisory Board", to: "/conference-topics/advisory-board" },
      ],
    },
    {
      name: "Awards",
      subLinks: [
        { name: "Categories", to: "/awards/categories" },
        { name: "Rules", to: "/awards/rules" },
        { name: "Winners", to: "/awards/winners" },
      ],
    },
    { name: "Gallery", to: "/gallery" },
    { name: "Events & News", to: "/events-news" },
  ];

  // 🎯 Dynamic styles
  const headerStyle =
    isHome && !isScrolled
      ? "bg-transparent"
      : "bg-white/95 backdrop-blur-md shadow-md";

  const textStyle =
    isHome && !isScrolled
      ? "text-white"
      : "text-gray-800";

  return (
    <>
      {/* Spacer div - only shows on non-home pages */}
      {!isHome && <div style={{ height: "80px" }} />}
      
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${headerStyle}`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* ✅ LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={MarportsLogo}
              alt="logo"
              className="w-12 h-12 object-contain"
            />
          </Link>

          {/* ✅ DESKTOP NAV */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <>
                    <div
                      className={`flex items-center gap-1 cursor-pointer font-medium ${textStyle}`}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </div>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 hidden group-hover:block pt-3 w-56">
                      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.to}
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className={`${textStyle} font-medium hover:text-cyan-500 transition`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* ✅ CTA BUTTON */}
          <a
            href="https://ehub.events/events?register=marports"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            <UserPlus size={18} />
            Register Now
            <ChevronRight size={18} />
          </a>

          {/* ✅ MOBILE MENU BUTTON */}
          <button
            className={`${textStyle} lg:hidden`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ✅ MOBILE MENU */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <>
                    <p className="font-semibold text-gray-800 mb-2">
                      {link.name}
                    </p>
                    <div className="pl-4 space-y-2">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.to}
                          className="block text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="block text-gray-800 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;