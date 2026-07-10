import { useState } from "react";
import { HiMenu, HiX, HiPhone } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { href: "#whyus", label: "Why Choose Us" },
    { href: "#benefits", label: "Benefits" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="px-4 py-3 bg-white sticky top-0 z-50 shadow-2xl shadow-neutral-700/10">
      <div className="max-w-7xl mx-auto flex items-center gap-8 justify-between lg:justify-start relative">
        <a href="/senior-living-talegaon/">
          <img
            src="/images/Cradle%20of%20Life_newlogo.webp"
            alt="Cradle Of Life Logo"
            className="w-36 md:w-48"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:block lg:flex-grow">
          <div className="mt-3">
            <ul className="flex items-center justify-end gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-700 hover:underline font-['Inter']"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setShowMenu(true)}
          className="lg:hidden px-4 py-3 bg-green-700 text-white rounded-md flex items-center gap-2 cursor-pointer"
        >
          <HiMenu className="w-5 h-5" />
          Menu
        </button>

        {/* Mobile Menu Drawer */}
        <div
          className={`${
            showMenu ? "translate-x-0" : "-translate-x-full"
          } fixed w-full bottom-0 top-0 z-50 left-0 bg-white duration-150 flex flex-col lg:hidden`}
        >
          <div className="border-b">
            <button
              type="button"
              onClick={() => setShowMenu(false)}
              className="px-4 py-3 ml-auto block cursor-pointer"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>
          <ul className="px-4">
            {navLinks.map((link) => (
              <li
                key={link.href}
                onClick={() => setShowMenu(false)}
                className="py-3 mt-2"
              >
                <a
                  href={link.href}
                  className="text-neutral-700 hover:underline font-['Inter']"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <a
              href="tel:+916209506070"
              className="inline-flex justify-center items-center w-full py-3 px-4 bg-green-700 text-white gap-2"
            >
              <HiPhone className="w-5 h-5" />
              <span className="font-bold text-xl text-white">
                Contact us: +91 6209 506 070
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
