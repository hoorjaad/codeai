import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "API Docs", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
    Support: [
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Status", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-poppins font-bold">
                <span className="text-white">AI</span>
                <span className="text-blue-500">CODY</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering the next generation of developers with neural-link
              coding assistance. Build the future, one line at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-500 hover:text-blue-500 transition-colors"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} AiCody Inc. Designed with precision for developers.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Cookies
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
