import React from "react";
import ContactForm from "./ContactForm";

const InlineForm = () => {
  return (
    <section id="inline-form" className="pt-5 sm:pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl sm:px-12 md:px-16 lg:px-20 xl:px-10 2xl:px-0">
        <div className="border border-gray-100/50 bg-gray-100 px-5 py-7 sm:py-12 sm:rounded-2xl sm:p-10 md:p-16 lg:p-20">
          <div className="mb-10 sm:mb-12 sm:text-center">
            <h2 className="text-3xl font-bold text-gray-900 leading-[40px] md:leading-normal">
              Ensure The Ideal Senior Lifestyle For You
            </h2>
            <div className="mt-4 text-gray-600">
              Begin Your New Chapter With Us!
            </div>
          </div>
          <ContactForm variant="inline" />
        </div>
      </div>
    </section>
  );
};

export default InlineForm;
