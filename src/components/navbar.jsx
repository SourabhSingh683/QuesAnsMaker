import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0e1629] text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="text-xl text-blue-500 font-bold">
          QAPdf
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "Features", path: "/features" },
            { name: "How It Works", path: "/how-it-works" },
            { name: "QA Results", path: "/qa-results" },
            { name: "Testimonials", path: "/testimonials" },
            { name: "FAQ", path: "/faq" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative group transition-all duration-300 ${
                  isActive ? "text-blue-500 font-semibold" : "text-gray-300"
                }`
              }
            >
              {item.name}
              <span
                className={({ isActive }) =>
                  `absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`
                }
              ></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1629] py-4">
          <div className="flex flex-col space-y-4 text-center">
            {[
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
              { name: "How It Works", path: "/how-it-works" },
              { name: "QA Results", path: "/qa-results" },
              { name: "Testimonials", path: "/testimonials" },
              { name: "FAQ", path: "/faq" },
            ].map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${
                    isActive ? "text-blue-500 font-semibold" : "text-gray-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span
                  className={({ isActive }) =>
                    `absolute left-0 bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`
                  }
                ></span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
