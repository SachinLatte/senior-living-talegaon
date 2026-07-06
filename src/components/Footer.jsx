import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "#whyus", label: "Why Us" },
    { href: "#benefits", label: "Benefits" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faqs", label: "FAQs" },
    { href: "#contact", label: "Contact us" },
  ];

  return (
    <footer id="footer" className="py-8 text-gray-800 md:pt-12">
      <div className="mx-auto max-w-7xl items-center px-6 sm:border-t-0 sm:pt-0 md:flex md:justify-between md:px-10">
        <a href="#hero" className="inline-block">
          <img
            src="/images/Cradle%20of%20Life_newlogo.webp"
            alt="logo"
            width={107}
            height={40}
            className="h-16 w-auto"
          />
        </a>
        <ul className="my-3 mt-5 flex flex-wrap items-center  gap-x-4 md:gap-x-0 sm:my-6 sm:mb-0 md:mt-0 md:flex">
          {footerLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="block py-2 sm:py-3 hover:underline sm:mt-0 md:ms-12 lg:ms-16 font-['Inter']"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-10">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block sm:text-center">
          <div>
            <p className="font-['Inter'] text-gray-600">
              Copyright © {currentYear} Cradle of life Pvt. Ltd. All Rights
              Reserved.
            </p>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
