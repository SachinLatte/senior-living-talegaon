import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-7 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl px-6 md:grid-cols-2 md:px-10 lg:px-12">
        {/* Left Side: Address Details */}
        <div className="self-center md:pe-8 lg:pe-16 xl:pe-24">
          <h2 className="mx-auto max-w-4xl text-3xl font-bold text-gray-900 lg:text-4xl font-['Inter'] leading-[40px] md:leading-normal">
            Ready to Redefine Retirement?
            <br />
            Join Cradle Of Life!
            <br />
          </h2>
          <div className="mt-4 text-gray-600 font-['Inter']">
            Begin Your Journey Today to Comfortable, Secure Senior Living
            <br />
          </div>
          <div className="mt-10 sm:mt-12 md:mt-20 xl:mt-28">
            <a
              href="https://maps.app.goo.gl/THVTbaUwovQwntV19"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#15803D"
                  className="-ms-2 mb-2 h-12 w-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="grow">
                  <div className="text-lg font-medium text-gray-800 lg:text-xl font-['Inter']">
                    Cradle Of Life Pvt. Ltd.
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div className="lg:w-10/12">
                  <div className="text-gray-600 font-['Inter']">
                    Gat 131-133, Next to Xrbia Ambi, MIDC Road, At Post Ambi,
                    Talegaon (D), Pune, Maharashtra, India- 410507.
                  </div>
                </div>
              </div>
            </a>
            <div className="mt-6">
              <a
                href="tel:+916209506070"
                className="inline-flex items-center gap-x-3 group"
              >
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#15803D"
                    className="h-6 w-6 group-hover:scale-110 transition-transform duration-200"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.155-.44.01-1.09.387-1.376l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div className="text-lg font-medium text-gray-800 lg:text-xl font-['Inter'] hover:underline">
                  +91 62095 06070
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="mt-10 self-center sm:mt-12 md:mt-0 md:ps-4 lg:ps-12 xl:ps-16">
          <ContactForm variant="contact" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
