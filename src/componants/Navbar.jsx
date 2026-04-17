import logo from "../assets/logo.webp";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
        <nav
          className="flex justify-between items-center h-14 sm:h-16 md:h-20"
          aria-label="Main Navigation"
        >
          <div className="flex items-center space-x-1 cursor-pointer">
            {logo && (
              <img
                src={logo}
                alt="AiCody Logo"
                className="h-8 w-auto"
                width="120" //
                height="32"
              />
            )}
            <span className="text-lg sm:text-xl md:text-2xl font-poppins font-bold">
              <span className="text-white">AI</span>
              <span className="text-blue-500">CODY</span>
            </span>
          </div>
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white font-poppins text-sm font-medium lg:text-lg transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-expanded={isMenuOpen} // 6. Accessibility attribute
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-950/95 backdrop-blur-sm rounded-lg shadow-lg border-t border-slate-800 absolute top-full right-4 mt-2 w-48 animate-in slide-in-from-top-2 duration-200">
              <ul className="flex flex-col space-y-3 px-4 py-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-gray-300 hover:text-white font-poppins font-medium block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
